(() => {
  "use strict";

  const SW_URL = "./service-worker.js";
  let deferredInstallPrompt = null;
  let serviceWorkerReady = false;

  function isNativeApp() {
    try {
      return Boolean(
        window.Capacitor?.isNativePlatform?.() ||
        window.Capacitor?.getPlatform?.() === "android" ||
        window.Capacitor?.getPlatform?.() === "ios"
      );
    } catch (_) {
      return false;
    }
  }

  const nativeApp = isNativeApp();

  function configureNativeInstallUI() {
    if (!nativeApp) return;
    const installButton = document.getElementById("installAppButton");
    const refreshButton = document.getElementById("refreshOfflineButton");
    if (installButton) installButton.hidden = true;
    if (refreshButton) refreshButton.hidden = true;
  }

  function setOfflineStatus(message, persistent = false) {
    const el = document.getElementById("offlineStatus");
    if (!el) return;
    el.textContent = message;
    clearTimeout(setOfflineStatus.timer);
    if (!persistent && message) {
      setOfflineStatus.timer = setTimeout(() => { el.textContent = ""; }, 2800);
    }
  }

  function updateConnectionUI() {
    const online = navigator.onLine;
    const dot = document.getElementById("connectionDot");
    const text = document.getElementById("connectionStatusText");
    const readiness = document.getElementById("offlineReadinessText");
    const banner = document.getElementById("offlineBanner");

    dot?.classList.toggle("online", online);
    dot?.classList.toggle("offline", !online);
    if (text) text.textContent = online ? "Online" : "Offline — local mode active";
    if (banner) banner.hidden = online;

    if (readiness) {
      if (nativeApp) {
        readiness.textContent = online
          ? "Installed app files are ready on this device. Internet features are available."
          : "Installed app files remain available offline. Internet features will resume when you reconnect.";
      } else if (!('serviceWorker' in navigator)) {
        readiness.textContent = "This browser does not support the offline service used by this app.";
      } else if (!serviceWorkerReady) {
        readiness.textContent = online
          ? "Finishing the offline copy…"
          : "Offline support has not finished preparing on this browser.";
      } else {
        readiness.textContent = online
          ? "Offline copy ready. Internet features are available."
          : "Offline copy ready. Your saved local features remain available.";
      }
    }
  }

  async function registerOfflineWorker() {
    if (nativeApp) {
      serviceWorkerReady = true;
      configureNativeInstallUI();
      updateConnectionUI();
      return;
    }

    if (!('serviceWorker' in navigator)) {
      updateConnectionUI();
      return;
    }

    if (!['https:', 'http:'].includes(location.protocol)) {
      const readiness = document.getElementById("offlineReadinessText");
      if (readiness) readiness.textContent = "Offline mode activates on the hosted HTTPS version.";
      return;
    }

    try {
      const registration = await navigator.serviceWorker.register(SW_URL, { scope: "./" });
      await navigator.serviceWorker.ready;
      serviceWorkerReady = true;
      updateConnectionUI();

      if (navigator.onLine) {
        registration.update().catch(() => {});
      }
    } catch (error) {
      console.warn("Offline service could not be registered.", error);
      const readiness = document.getElementById("offlineReadinessText");
      if (readiness) readiness.textContent = "Offline copy could not be prepared on this browser yet.";
    }
  }

  async function refreshOfflineCopy() {
    if (nativeApp) {
      setOfflineStatus("This installed app updates when a new app version is installed.");
      return;
    }

    if (!navigator.onLine) {
      setOfflineStatus("Reconnect to refresh the offline copy.");
      return;
    }

    if (!('serviceWorker' in navigator)) {
      setOfflineStatus("This browser does not support offline app caching.");
      return;
    }

    setOfflineStatus("Refreshing the offline copy…", true);
    try {
      const registration = await navigator.serviceWorker.ready;
      await registration.update();
      const worker = registration.active || registration.waiting || registration.installing;
      if (worker) {
        const channel = new MessageChannel();
        const result = new Promise((resolve, reject) => {
          const timer = setTimeout(() => reject(new Error("refresh timeout")), 10000);
          channel.port1.onmessage = event => {
            clearTimeout(timer);
            resolve(event.data);
          };
        });
        worker.postMessage({ type: "REFRESH_CORE" }, [channel.port2]);
        await result;
      }
      serviceWorkerReady = true;
      updateConnectionUI();
      setOfflineStatus("Offline copy refreshed.");
    } catch (error) {
      console.warn("Offline refresh failed.", error);
      setOfflineStatus("Could not refresh the offline copy. Your existing cached version is unchanged.");
    }
  }

  async function installHomeApp() {
    if (nativeApp) {
      setOfflineStatus("This is already the installed app.");
      return;
    }

    if (!deferredInstallPrompt) {
      setOfflineStatus("Use your browser's Add to Home Screen / Install option if it is available.");
      return;
    }

    deferredInstallPrompt.prompt();
    try {
      await deferredInstallPrompt.userChoice;
    } finally {
      deferredInstallPrompt = null;
      const button = document.getElementById("installAppButton");
      if (button) button.hidden = true;
    }
  }

  window.addEventListener("beforeinstallprompt", event => {
    event.preventDefault();
    deferredInstallPrompt = event;
    const button = document.getElementById("installAppButton");
    if (button) button.hidden = false;
  });

  window.addEventListener("appinstalled", () => {
    deferredInstallPrompt = null;
    const button = document.getElementById("installAppButton");
    if (button) button.hidden = true;
    setOfflineStatus("App installed on this device.");
  });

  window.addEventListener("online", () => {
    updateConnectionUI();
    setOfflineStatus("Connection restored. Online features are available again.");
    if (!nativeApp) {
      navigator.serviceWorker?.ready
        .then(registration => {
          registration.update().catch(() => {});
          registration.active?.postMessage({ type: "REFRESH_CORE" });
        })
        .catch(() => {});
    }
    window.dispatchEvent(new CustomEvent("homeapp:online"));
  });

  window.addEventListener("offline", () => {
    updateConnectionUI();
    setOfflineStatus("Offline mode is active. Local features will continue working.");
    window.dispatchEvent(new CustomEvent("homeapp:offline"));
  });

  document.addEventListener("click", event => {
    const link = event.target.closest?.('a[href]');
    if (!link || navigator.onLine) return;

    try {
      const url = new URL(link.href, location.href);
      if (url.origin !== location.origin && ['http:', 'https:'].includes(url.protocol)) {
        event.preventDefault();
        alert("That link needs an internet connection. Your app data is still available offline, and the link will work again after you reconnect.");
      }
    } catch (_) {}
  });

  Object.assign(window, { refreshOfflineCopy, installHomeApp });
  configureNativeInstallUI();
  updateConnectionUI();
  registerOfflineWorker();
})();
