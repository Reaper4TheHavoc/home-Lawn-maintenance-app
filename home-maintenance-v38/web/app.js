const taskSelector = ".task-check";




    // ----- Storage helpers -----
    function loadStoredJSON(key, fallback) {
      try {
        const raw = localStorage.getItem(key);
        return raw ? JSON.parse(raw) : fallback;
      } catch (error) {
        console.warn(`Could not read saved data for ${key}.`, error);
        return fallback;
      }
    }

    function saveStoredJSON(key, value) {
      try {
        localStorage.setItem(key, JSON.stringify(value));
        return true;
      } catch (error) {
        console.warn(`Could not save data for ${key}.`, error);
        return false;
      }
    }

    // ----- Ruth's Visual Enhancer -----
    const RUTH_VISUAL_KEY = "ruth-visual-enhancer-scale";
    const RUTH_VISUAL_MIN = 90;
    const RUTH_VISUAL_MAX = 140;
    const RUTH_VISUAL_STEP = 10;
    let ruthVisualScale = 100;

    function clampRuthVisualScale(value) {
      const numeric = Number(value);
      if (!Number.isFinite(numeric)) return 100;
      return Math.min(RUTH_VISUAL_MAX, Math.max(RUTH_VISUAL_MIN, Math.round(numeric / RUTH_VISUAL_STEP) * RUTH_VISUAL_STEP));
    }

    function applyRuthVisualScale(value, save = false) {
      ruthVisualScale = clampRuthVisualScale(value);
      document.documentElement.style.fontSize = `${ruthVisualScale}%`;

      const label = document.getElementById("ruthFontScaleLabel");
      if (label) label.textContent = `${ruthVisualScale}%`;

      if (save) {
        try {
          localStorage.setItem(RUTH_VISUAL_KEY, String(ruthVisualScale));
        } catch (error) {
          console.warn("Could not save Ruth's Visual Enhancer setting.", error);
        }
        showRuthVisualStatus(`Text size set to ${ruthVisualScale}%.`);
      }
    }

    function loadRuthVisualEnhancer() {
      let savedScale = 100;
      try {
        savedScale = localStorage.getItem(RUTH_VISUAL_KEY) || 100;
      } catch (error) {
        console.warn("Could not load Ruth's Visual Enhancer setting.", error);
      }
      applyRuthVisualScale(savedScale, false);
    }

    function increaseRuthFont() {
      applyRuthVisualScale(ruthVisualScale + RUTH_VISUAL_STEP, true);
    }

    function decreaseRuthFont() {
      applyRuthVisualScale(ruthVisualScale - RUTH_VISUAL_STEP, true);
    }

    function resetRuthFont() {
      applyRuthVisualScale(100, true);
    }

    function showRuthVisualStatus(message) {
      const status = document.getElementById("ruthVisualStatus");
      if (!status) return;
      status.textContent = message;
      clearTimeout(showRuthVisualStatus.timer);
      showRuthVisualStatus.timer = setTimeout(() => {
        status.textContent = "";
      }, 2200);
    }

    // ----- Appearance Settings -----
    function resolvedTheme(theme) {
      if (theme !== "system") return theme;
      return window.matchMedia && window.matchMedia("(prefers-color-scheme: dark)").matches
        ? "dark"
        : "light";
    }

    function applyTheme(theme, save = false) {
      const resolved = resolvedTheme(theme);
      document.body.dataset.theme = resolved;

      const select = document.getElementById("themeSelect");
      if (select && select.value !== theme) select.value = theme;

      if (save) {
        localStorage.setItem("app-theme-choice", theme);
        showAppearanceStatus("Theme saved.");
      }

      updateSettingsPreview();
    }

    function showAppearanceStatus(message) {
      const status = document.getElementById("appearanceStatus");
      if (!status) return;
      status.textContent = message;
      setTimeout(() => status.textContent = "", 2200);
    }

    function compressBackgroundImage(file, maxSize = 1400, quality = 0.78) {
      return new Promise((resolve, reject) => {
        const reader = new FileReader();

        reader.onload = () => {
          const img = new Image();

          img.onload = () => {
            const scale = Math.min(1, maxSize / Math.max(img.width, img.height));
            const width = Math.round(img.width * scale);
            const height = Math.round(img.height * scale);

            const canvas = document.createElement("canvas");
            canvas.width = width;
            canvas.height = height;

            const ctx = canvas.getContext("2d");
            ctx.drawImage(img, 0, 0, width, height);

            resolve(canvas.toDataURL("image/jpeg", quality));
          };

          img.onerror = reject;
          img.src = reader.result;
        };

        reader.onerror = reject;
        reader.readAsDataURL(file);
      });
    }

    async function saveBackgroundImage() {
      const input = document.getElementById("backgroundImageInput");
      const file = input?.files?.[0];

      if (!file) {
        alert("Choose an image first.");
        return;
      }

      showAppearanceStatus("Preparing background...");

      try {
        const dataUrl = await compressBackgroundImage(file);

        try {
          localStorage.setItem("app-background-image", dataUrl);
        } catch (err) {
          showAppearanceStatus("That image is too large for this browser's local storage.");
          return;
        }

        applyBackgroundImage(dataUrl);
        input.value = "";
        showAppearanceStatus("Background image saved.");
      } catch (err) {
        showAppearanceStatus("That image could not be processed.");
      }
    }

    function applyBackgroundImage(dataUrl) {
      if (dataUrl) {
        const imageValue = `url("${dataUrl}")`;
        document.body.style.setProperty("--app-background-image", imageValue);
        document.body.style.setProperty("--dashboard-user-bg", imageValue);
        document.body.classList.add("has-custom-bg");
      } else {
        document.body.style.removeProperty("--app-background-image");
        document.body.style.removeProperty("--dashboard-user-bg");
          document.body.classList.remove("has-custom-bg");
      }

      updateSettingsPreview();
    }

    function removeBackgroundImage() {
      localStorage.removeItem("app-background-image");
      applyBackgroundImage("");
      showAppearanceStatus("Background image removed.");
    }

    function updateSettingsPreview() {
      const preview = document.getElementById("settingsPreview");
      if (!preview) return;

      const bg = localStorage.getItem("app-background-image");
      preview.style.backgroundImage = bg ? `url("${bg}")` : "";
      preview.style.backgroundColor = getComputedStyle(document.body).getPropertyValue("--bg");
    }

    function resetAppearance() {
      if (!confirm("Reset theme and background appearance?")) return;

      localStorage.removeItem("app-theme-choice");
      localStorage.removeItem("app-background-image");

      applyTheme("dark", false);
      applyBackgroundImage("");

      const select = document.getElementById("themeSelect");
      if (select) select.value = "dark";

      showAppearanceStatus("Appearance reset.");
    }

    function loadAppearanceSettings() {
      const theme = localStorage.getItem("app-theme-choice") || "dark";
      const background = localStorage.getItem("app-background-image") || "";

      applyTheme(theme, false);
      applyBackgroundImage(background);

      const select = document.getElementById("themeSelect");
      if (select) select.value = theme;
    }

    if (window.matchMedia) {
      const themeWatcher = window.matchMedia("(prefers-color-scheme: dark)");
      themeWatcher.addEventListener?.("change", () => {
        const selected = localStorage.getItem("app-theme-choice") || "dark";
        if (selected === "system") applyTheme("system", false);
      });
    }


    // ----- Global Search -----
    let searchMatches = [];

    function getTabLabel(tabId) {
      const labels = {
        maintenance: "Maintenance",
        lawn: "Lawn",
        reminders: "Reminders",
        groceries: "Groceries",
        notesTab: "Notes",
        moreTab: "Home Management",
        emergencyTab: "Emergency",
        settingsTab: "Settings"
      };
      return labels[tabId] || tabId;
    }

    function buildSearchIndex(query) {
      const q = query.trim().toLowerCase();
      if (!q) return [];

      const matches = [];

      document.querySelectorAll(".tab details").forEach(details => {
        const titleEl = details.querySelector("summary .title");
        if (!titleEl) return;
        const text = (titleEl.textContent + " " + details.textContent).toLowerCase();

        if (text.includes(q)) {
          matches.push({
            title: titleEl.textContent.trim(),
            tabId: details.closest(".tab")?.id,
            element: details
          });
        }
      });

      document.querySelectorAll("[data-search-title]").forEach(el => {
        const title = el.dataset.searchTitle || "";
        const text = (title + " " + el.textContent).toLowerCase();

        if (text.includes(q)) {
          matches.push({
            title: title || el.textContent.trim().slice(0,60),
            tabId: el.closest(".tab")?.id,
            element: el
          });
        }
      });

      return matches.slice(0, 12);
    }

    function renderSearchResults() {
      const input = document.getElementById("globalSearch");
      const box = document.getElementById("searchResults");
      if (!input || !box) return;

      searchMatches = buildSearchIndex(input.value);

      if (!input.value.trim()) {
        box.style.display = "none";
        box.innerHTML = "";
        return;
      }

      box.style.display = "block";

      if (!searchMatches.length) {
        box.innerHTML = '<div class="small" style="padding:10px;">No matching items found.</div>';
        return;
      }

      box.innerHTML = searchMatches.map((item, index) => `
        <button onclick="openSearchResult(${index})">
          ${escapeHtml(item.title)}
          <span class="search-result-tab">${escapeHtml(getTabLabel(item.tabId))}</span>
        </button>
      `).join("");
    }

    function openSearchResult(index) {
      const item = searchMatches[index];
      if (!item) return;

      const navButton = document.querySelector(`.nav-btn[data-target="${item.tabId}"]`);
      if (navButton) navButton.click();

      if (item.element.tagName === "DETAILS") {
        item.element.open = true;
      }

      document.getElementById("searchResults").style.display = "none";
      setTimeout(() => item.element.scrollIntoView({behavior:"smooth", block:"center"}), 100);
    }

    document.getElementById("globalSearch")?.addEventListener("input", renderSearchResults);
    document.addEventListener("click", event => {
      if (!event.target.closest(".search-wrap")) {
        const box = document.getElementById("searchResults");
        if (box) box.style.display = "none";
      }
    });


    // ----- Swipe Navigation -----
    const tabOrder = ["maintenance", "lawn", "reminders", "groceries", "notesTab", "moreTab", "emergencyTab", "settingsTab"];
    const SWIPE_MIN_DISTANCE = 52;
    const SWIPE_HORIZONTAL_RATIO = 1.15;
    const SWIPE_DECISION_DISTANCE = 12;
    const DASHBOARD_SWIPE_TARGET = "maintenance";

    let touchStartX = 0;
    let touchStartY = 0;
    let swipeEligible = false;
    let swipeCancelled = false;
    let horizontalSwipeIntent = false;
    let suppressClickUntil = 0;

    function isSwipeHardBlockedTarget(target) {
      if (!(target instanceof Element)) return true;

      // Controls that genuinely need direct finger interaction still win.
      // Ordinary buttons/cards/details are intentionally NOT blocked so
      // users can begin a page swipe almost anywhere.
      return Boolean(target.closest(`
        input,
        select,
        textarea,
        [contenteditable="true"],
        nav,
        .recipe-filter-row,
        .meal-type-row
      `));
    }

    function showDashboardLanding() {
      document.documentElement.classList.add("dashboard-root");
      document.body.classList.add("dashboard-mode");
      document.querySelectorAll(".tab").forEach(tab => {
        tab.classList.remove("active", "slide-in-from-left", "slide-in-from-right");
      });

      document.querySelectorAll(".nav-btn").forEach(btn => btn.classList.remove("active"));

      const landing = document.getElementById("dashboardLanding");
      if (landing) landing.classList.add("active");

      window.renderHomeDashboard?.();
      window.scrollTo({ top: 0, behavior: "auto" });
    }

    function navigateToTab(targetId, direction = null) {
      document.documentElement.classList.remove("dashboard-root");
      document.body.classList.remove("dashboard-mode");
      document.getElementById("dashboardLanding")?.classList.remove("active");

      const activeTab = document.querySelector(".tab.active");
      const nextTab = document.getElementById(targetId);
      if (!nextTab || activeTab === nextTab) return;

      const currentIndex = activeTab ? tabOrder.indexOf(activeTab.id) : -1;
      const nextIndex = tabOrder.indexOf(targetId);

      if (!direction && currentIndex !== -1 && nextIndex !== -1) {
        direction = nextIndex > currentIndex ? "left" : "right";
      }

      document.querySelectorAll(".nav-btn").forEach(btn => {
        btn.classList.toggle("active", btn.dataset.target === targetId);
      });

      document.querySelectorAll(".tab").forEach(tab => {
        tab.classList.remove("active", "slide-in-from-left", "slide-in-from-right");
      });

      nextTab.classList.add("active");

      // Keep the transition short and transform-only so large card-heavy
      // pages do not fade/pop into view.
      const animationClass =
        direction === "left" ? "slide-in-from-right" :
        direction === "right" ? "slide-in-from-left" : "";

      if (animationClass) {
        nextTab.classList.add(animationClass);
        window.setTimeout(() => nextTab.classList.remove(animationClass), 170);
      }

      window.scrollTo({ top: 0, behavior: "auto" });

      const activeNav = document.querySelector(`.nav-btn[data-target="${targetId}"]`);
      activeNav?.scrollIntoView({ behavior: "auto", inline: "center", block: "nearest" });
    }

    document.addEventListener("touchstart", event => {
      swipeEligible = false;
      swipeCancelled = false;
      horizontalSwipeIntent = false;

      if (!event.touches || event.touches.length !== 1) return;
      if (isSwipeHardBlockedTarget(event.target)) return;

      touchStartX = event.touches[0].clientX;
      touchStartY = event.touches[0].clientY;
      swipeEligible = true;
    }, { passive: true });

    document.addEventListener("touchmove", event => {
      if (!swipeEligible || swipeCancelled || !event.touches || event.touches.length !== 1) return;

      const deltaX = event.touches[0].clientX - touchStartX;
      const deltaY = event.touches[0].clientY - touchStartY;
      const absX = Math.abs(deltaX);
      const absY = Math.abs(deltaY);

      if (Math.max(absX, absY) < SWIPE_DECISION_DISTANCE) return;

      if (absX > absY * SWIPE_HORIZONTAL_RATIO) {
        horizontalSwipeIntent = true;
        return;
      }

      // Once vertical scrolling clearly wins, abandon tab navigation.
      if (absY > absX * 1.08) {
        swipeCancelled = true;
      }
    }, { passive: true });

    document.addEventListener("touchend", event => {
      if (!swipeEligible || swipeCancelled || !event.changedTouches || event.changedTouches.length !== 1) {
        swipeEligible = false;
        return;
      }

      swipeEligible = false;

      const endX = event.changedTouches[0].clientX;
      const endY = event.changedTouches[0].clientY;
      const deltaX = endX - touchStartX;
      const deltaY = endY - touchStartY;
      const absX = Math.abs(deltaX);
      const absY = Math.abs(deltaY);

      if (
        absX < SWIPE_MIN_DISTANCE ||
        absX <= absY * SWIPE_HORIZONTAL_RATIO ||
        (!horizontalSwipeIntent && absX < 70)
      ) return;

      // A swipe that began on a button should navigate, not also click it.
      suppressClickUntil = performance.now() + 450;

      const onDashboardLanding = document.getElementById("dashboardLanding")?.classList.contains("active");
      if (onDashboardLanding) {
        if (deltaX < 0) navigateToTab(DASHBOARD_SWIPE_TARGET, "left");
        return;
      }

      const activeTab = document.querySelector(".tab.active");
      if (!activeTab) return;

      const currentIndex = tabOrder.indexOf(activeTab.id);
      if (currentIndex === -1) return;

      if (deltaX < 0 && currentIndex < tabOrder.length - 1) {
        navigateToTab(tabOrder[currentIndex + 1], "left");
      } else if (deltaX > 0) {
        if (currentIndex > 0) {
          navigateToTab(tabOrder[currentIndex - 1], "right");
        } else {
          showDashboardLanding();
        }
      }
    }, { passive: true });

    document.addEventListener("touchcancel", () => {
      swipeEligible = false;
      swipeCancelled = true;
      horizontalSwipeIntent = false;
    }, { passive: true });

    // Prevent the tap/click that some mobile browsers synthesize after
    // a finger swipe that started on an interactive card or button.
    document.addEventListener("click", event => {
      if (performance.now() >= suppressClickUntil) return;
      if (event.target.closest("nav")) return;

      event.preventDefault();
      event.stopPropagation();
      event.stopImmediatePropagation();
    }, true);

    // ----- Navigation -----
    document.querySelectorAll(".nav-btn").forEach(btn => {
      btn.addEventListener("click", () => navigateToTab(btn.dataset.target));
    });

    // Prevent checkbox taps from opening/closing the dropdown.
    document.querySelectorAll(".task-check").forEach(cb => {
      cb.addEventListener("click", e => e.stopPropagation());
      cb.addEventListener("change", () => {
        localStorage.setItem(cb.dataset.key, cb.checked ? "1" : "0");
        updateProgress();
      });
    });

    function loadTasks() {
      document.querySelectorAll(taskSelector).forEach(cb => {
        cb.checked = localStorage.getItem(cb.dataset.key) === "1";
      });
      updateProgress();
    }

    function updateProgress() {
      updateGroupProgress(".home-task", "homeProgressBar", "homeProgressText");
      updateGroupProgress(".lawn-task", "lawnProgressBar", "lawnProgressText");
      updateGroupProgress(".seasonal-task", "seasonalProgressBar", "seasonalProgressText");
    }

    function updateGroupProgress(selector, barId, textId) {
      const tasks = [...document.querySelectorAll(selector)];
      const done = tasks.filter(t => t.checked).length;
      const pct = tasks.length ? Math.round((done / tasks.length) * 100) : 0;
      document.getElementById(barId).style.width = pct + "%";
      document.getElementById(textId).textContent =
        done + " of " + tasks.length + " complete — " + pct + "%";
    }

    function resetGroup(className) {
      const tasks = [...document.getElementsByClassName(className)];
      if (!confirm("Clear these checkmarks?")) return;
      tasks.forEach(cb => {
        cb.checked = false;
        localStorage.removeItem(cb.dataset.key);
      });
      updateProgress();
    }

    // ----- Notes -----
    function saveNotes() {
      localStorage.setItem("maintenance-notes", document.getElementById("notes").value);
      const s = document.getElementById("notesStatus");
      s.textContent = "Notes saved on this device.";
      setTimeout(() => s.textContent = "", 2500);
    }

    function loadNotes() {
      document.getElementById("notes").value =
        localStorage.getItem("maintenance-notes") || "";
    }

    // ----- Notifications / Reminders -----
    let reminders = loadStoredJSON("maintenance-reminders", []);

    // Upgrade reminders created in older preview versions.
    reminders = reminders.map(r => ({
      enabled: r.enabled !== false,
      completed: !!r.completed,
      note: r.note || "",
      amount: Number(r.amount || 0),
      snoozeUntil: r.snoozeUntil || null,
      lastCompleted: r.lastCompleted || null,
      ...r
    }));

    function toggleReminderForm(force) {
      const card = document.getElementById("reminderFormCard");
      if (!card) return;

      const shouldShow =
        typeof force === "boolean"
          ? force
          : card.style.display === "none";

      card.style.display = shouldShow ? "block" : "none";

      if (shouldShow) {
        setTimeout(() => document.getElementById("reminderName")?.focus(), 50);
      }
    }

    function updateReminderFormFields() {
      const frequency = document.getElementById("reminderFrequency").value;

      document.getElementById("weeklyReminderFields").style.display =
        frequency === "weekly" ? "block" : "none";

      document.getElementById("monthlyReminderFields").style.display =
        frequency === "monthly" ? "block" : "none";

      document.getElementById("yearlyReminderFields").style.display =
        frequency === "yearly" ? "block" : "none";

      document.getElementById("onceReminderFields").style.display =
        frequency === "once" ? "block" : "none";
    }

    function requestNotifications() {
      const status = document.getElementById("notificationStatus");

      if (!("Notification" in window)) {
        status.textContent = "This browser does not support notifications.";
        return;
      }

      Notification.requestPermission().then(permission => {
        status.textContent =
          permission === "granted"
            ? "Notifications are enabled."
            : "Notifications were not enabled.";
      });
    }

    function addReminder() {
      const name = document.getElementById("reminderName").value.trim();
      const category = document.getElementById("reminderCategory").value;
      const frequency = document.getElementById("reminderFrequency").value;
      const time = document.getElementById("reminderTime").value;
      const amount = Number(document.getElementById("reminderAmount").value || 0);
      const note = document.getElementById("reminderNote").value.trim();

      if (!name || !time) {
        alert("Enter a reminder name and time.");
        return;
      }

      const reminder = {
        id: Date.now(),
        name,
        category,
        frequency,
        time,
        amount,
        note,
        enabled: true,
        completed: false,
        lastFired: null,
        lastCompleted: null,
        snoozeUntil: null
      };

      if (frequency === "weekly") {
        reminder.day = Number(document.getElementById("reminderDay").value);
      } else if (frequency === "monthly") {
        reminder.monthDay = Number(document.getElementById("reminderMonthDay").value);
      } else if (frequency === "yearly") {
        reminder.yearMonth = Number(document.getElementById("reminderYearMonth").value);
        reminder.yearDay = Number(document.getElementById("reminderYearDay").value);
      } else if (frequency === "once") {
        const date = document.getElementById("reminderDate").value;
        if (!date) {
          alert("Choose a date for the one-time reminder.");
          return;
        }
        reminder.date = date;
      }

      reminders.push(reminder);
      saveReminders();
      renderReminders();

      document.getElementById("reminderName").value = "";
      document.getElementById("reminderAmount").value = "";
      document.getElementById("reminderNote").value = "";
      toggleReminderForm(false);
    }

    function deleteReminder(id) {
      if (!confirm("Delete this reminder?")) return;
      reminders = reminders.filter(r => r.id !== id);
      saveReminders();
      renderReminders();
    }

    function toggleReminderEnabled(id) {
      reminders = reminders.map(r =>
        r.id === id ? {...r, enabled: !r.enabled, snoozeUntil: null} : r
      );
      saveReminders();
      renderReminders();
    }

    function completeReminder(id) {
      const now = new Date().toISOString();

      reminders = reminders.map(r => {
        if (r.id !== id) return r;

        if ((r.frequency || "weekly") === "once") {
          return {
            ...r,
            completed: true,
            enabled: false,
            lastCompleted: now,
            snoozeUntil: null
          };
        }

        return {
          ...r,
          lastCompleted: now,
          snoozeUntil: null
        };
      });

      saveReminders();
      renderReminders();
    }

    function snoozeReminder(id, minutes) {
      const until = new Date(Date.now() + minutes * 60000).toISOString();

      reminders = reminders.map(r =>
        r.id === id ? {...r, snoozeUntil: until, enabled: true} : r
      );

      saveReminders();
      renderReminders();
    }

    function saveReminders() {
      saveStoredJSON("maintenance-reminders", reminders);
    }

    function daysInMonth(year, monthIndex) {
      return new Date(year, monthIndex + 1, 0).getDate();
    }

    function dateAtTime(year, monthIndex, day, time) {
      const [hour, minute] = time.split(":").map(Number);
      return new Date(year, monthIndex, day, hour, minute, 0, 0);
    }

    function getNextReminderOccurrence(r, from = new Date()) {
      if (!r.enabled) return null;

      if (r.snoozeUntil) {
        const snooze = new Date(r.snoozeUntil);
        if (snooze > from) return snooze;
      }

      const frequency = r.frequency || "weekly";
      const [hour, minute] = (r.time || "09:00").split(":").map(Number);
      const base = new Date(from);

      if (frequency === "once") {
        if (!r.date || r.completed) return null;
        return new Date(`${r.date}T${r.time}:00`);
      }

      if (frequency === "daily") {
        const candidate = new Date(base);
        candidate.setHours(hour, minute, 0, 0);
        if (candidate <= from) candidate.setDate(candidate.getDate() + 1);
        return candidate;
      }

      if (frequency === "weekly") {
        const candidate = new Date(base);
        candidate.setHours(hour, minute, 0, 0);
        let offset = (Number(r.day) - candidate.getDay() + 7) % 7;
        if (offset === 0 && candidate <= from) offset = 7;
        candidate.setDate(candidate.getDate() + offset);
        return candidate;
      }

      if (frequency === "monthly") {
        let year = base.getFullYear();
        let month = base.getMonth();
        const requestedDay = Number(r.monthDay || 1);

        for (let i = 0; i < 14; i++) {
          const day = Math.min(requestedDay, daysInMonth(year, month));
          const candidate = dateAtTime(year, month, day, r.time);

          if (candidate > from) return candidate;

          month++;
          if (month > 11) {
            month = 0;
            year++;
          }
        }
      }

      if (frequency === "yearly") {
        let year = base.getFullYear();
        const month = Math.max(1, Math.min(12, Number(r.yearMonth || 1))) - 1;
        const requestedDay = Number(r.yearDay || 1);

        for (let i = 0; i < 3; i++) {
          const day = Math.min(requestedDay, daysInMonth(year, month));
          const candidate = dateAtTime(year, month, day, r.time);
          if (candidate > from) return candidate;
          year++;
        }
      }

      return null;
    }

    function formatReminderSchedule(r) {
      const days = ["Sunday","Monday","Tuesday","Wednesday","Thursday","Friday","Saturday"];
      const months = ["Jan","Feb","Mar","Apr","May","Jun","Jul","Aug","Sep","Oct","Nov","Dec"];
      const frequency = r.frequency || "weekly";

      if (frequency === "daily") {
        return `Every day at ${formatTime(r.time)}`;
      }

      if (frequency === "weekly") {
        return `Every ${days[r.day]} at ${formatTime(r.time)}`;
      }

      if (frequency === "monthly") {
        return `Every month on the ${r.monthDay}${ordinalSuffix(r.monthDay)} at ${formatTime(r.time)}`;
      }

      if (frequency === "yearly") {
        return `Every year on ${months[(r.yearMonth || 1) - 1]} ${r.yearDay} at ${formatTime(r.time)}`;
      }

      const dateText = new Date(r.date + "T00:00:00").toLocaleDateString(undefined, {
        month: "short",
        day: "numeric",
        year: "numeric"
      });
      return `${dateText} at ${formatTime(r.time)}`;
    }

    function reminderStatusText(r) {
      if (!r.enabled) return r.completed ? "Completed" : "Paused";

      if (r.snoozeUntil && new Date(r.snoozeUntil) > new Date()) {
        return "Snoozed until " + new Date(r.snoozeUntil).toLocaleTimeString([], {
          hour: "numeric",
          minute: "2-digit"
        });
      }

      const now = new Date();
      const next = getNextReminderOccurrence(r, now);
      if (!next) return "No upcoming date";

      const today = new Date(now.getFullYear(), now.getMonth(), now.getDate());
      const nextDay = new Date(next.getFullYear(), next.getMonth(), next.getDate());
      const dayDiff = Math.round((nextDay - today) / 86400000);

      if (dayDiff === 0) return "Due today";
      if (dayDiff === 1) return "Due tomorrow";
      return `Due ${next.toLocaleDateString(undefined, {month:"short", day:"numeric"})}`;
    }

    function renderReminders() {
      const box = document.getElementById("reminderList");
      if (!box) return;

      const activeCount = reminders.filter(r => r.enabled).length;
      const dueTodayCount = reminders.filter(r => {
        if (!r.enabled) return false;
        const next = getNextReminderOccurrence(r, new Date(Date.now() - 60000));
        if (!next) return false;
        const today = new Date();
        return next.getFullYear() === today.getFullYear() &&
               next.getMonth() === today.getMonth() &&
               next.getDate() === today.getDate();
      }).length;

      const activeEl = document.getElementById("activeReminderCount");
      const dueEl = document.getElementById("dueTodayReminderCount");
      if (activeEl) activeEl.textContent = activeCount;
      if (dueEl) dueEl.textContent = dueTodayCount;

      if (!reminders.length) {
        box.innerHTML = '<p class="small">No reminders yet. Tap the + button to add one.</p>';
        return;
      }

      const sorted = [...reminders].sort((a, b) => {
        const aNext = getNextReminderOccurrence(a) || new Date(8640000000000000);
        const bNext = getNextReminderOccurrence(b) || new Date(8640000000000000);
        return aNext - bNext;
      });

      box.innerHTML = sorted.map(r => {
        const statusText = reminderStatusText(r);
        const isDue = statusText === "Due today";
        const amountText = r.amount ? ` • ${formatMoney(Number(r.amount))}` : "";
        const completedText = r.lastCompleted
          ? ` • Last done ${new Date(r.lastCompleted).toLocaleDateString()}`
          : "";

        return `
          <div class="reminder-item" style="${r.enabled ? "" : "opacity:.68;"}">
            <div style="display:flex;gap:10px;align-items:flex-start;">
              <div style="flex:1;">
                <strong>${escapeHtml(r.name)}</strong>
                <div class="reminder-meta">
                  ${escapeHtml(r.category || "Other")}${amountText} • ${formatReminderSchedule(r)}
                </div>
                ${r.note ? `<p class="small" style="margin:7px 0 0;">${escapeHtml(r.note)}</p>` : ""}
                <div class="reminder-status-row">
                  <span class="reminder-pill ${isDue ? "due" : r.enabled ? "" : "off"}">${escapeHtml(statusText)}</span>
                  ${r.lastCompleted ? `<span class="reminder-pill">${escapeHtml(completedText.replace(" • ", ""))}</span>` : ""}
                </div>
              </div>
            </div>

            <div class="button-row">
              <button class="secondary" onclick="completeReminder(${r.id})">${(r.frequency || "weekly") === "once" ? "Complete" : "Done"}</button>
              <button class="secondary" onclick="snoozeReminder(${r.id}, 60)">Snooze 1h</button>
              <button class="secondary" onclick="toggleReminderEnabled(${r.id})">${r.enabled ? "Pause" : "Resume"}</button>
              <button class="danger-btn" onclick="deleteReminder(${r.id})">Delete</button>
            </div>
          </div>
        `;
      }).join("");
    }

    function ordinalSuffix(day) {
      day = Number(day);
      if (day % 100 >= 11 && day % 100 <= 13) return "th";
      switch (day % 10) {
        case 1: return "st";
        case 2: return "nd";
        case 3: return "rd";
        default: return "th";
      }
    }

    function formatTime(value) {
      const [h, m] = value.split(":").map(Number);
      const suffix = h >= 12 ? "PM" : "AM";
      const hour = ((h + 11) % 12) + 1;
      return `${hour}:${String(m).padStart(2, "0")} ${suffix}`;
    }

    function escapeHtml(str) {
      return String(str).replace(/[&<>"']/g, ch => ({
        "&": "&amp;",
        "<": "&lt;",
        ">": "&gt;",
        '"': "&quot;",
        "'": "&#039;"
      }[ch]));
    }

    function reminderMatchesCurrentMinute(r, now) {
      if (!r.enabled) return false;

      if (r.snoozeUntil) {
        const snooze = new Date(r.snoozeUntil);
        const sameMinute =
          snooze.getFullYear() === now.getFullYear() &&
          snooze.getMonth() === now.getMonth() &&
          snooze.getDate() === now.getDate() &&
          snooze.getHours() === now.getHours() &&
          snooze.getMinutes() === now.getMinutes();

        if (sameMinute) return true;
      }

      const frequency = r.frequency || "weekly";
      const [hour, minute] = (r.time || "09:00").split(":").map(Number);
      if (now.getHours() !== hour || now.getMinutes() !== minute) return false;

      if (frequency === "daily") return true;
      if (frequency === "weekly") return now.getDay() === Number(r.day);
      if (frequency === "monthly") {
        const target = Math.min(Number(r.monthDay || 1), daysInMonth(now.getFullYear(), now.getMonth()));
        return now.getDate() === target;
      }
      if (frequency === "yearly") {
        const month = Number(r.yearMonth || 1) - 1;
        const target = Math.min(Number(r.yearDay || 1), daysInMonth(now.getFullYear(), month));
        return now.getMonth() === month && now.getDate() === target;
      }
      if (frequency === "once") {
        const currentDate =
          now.getFullYear() + "-" +
          String(now.getMonth() + 1).padStart(2, "0") + "-" +
          String(now.getDate()).padStart(2, "0");
        return !r.completed && r.date === currentDate;
      }

      return false;
    }

    function checkReminders() {
      const now = new Date();
      const fireKey =
        now.getFullYear() + "-" +
        String(now.getMonth() + 1).padStart(2, "0") + "-" +
        String(now.getDate()).padStart(2, "0") + "-" +
        String(now.getHours()).padStart(2, "0") + ":" +
        String(now.getMinutes()).padStart(2, "0");

      let changed = false;

      reminders = reminders.map(r => {
        if (!reminderMatchesCurrentMinute(r, now) || r.lastFired === fireKey) {
          return r;
        }

        const body =
          `${r.name}${r.category ? " • " + r.category : ""}${r.amount ? " • " + formatMoney(Number(r.amount)) : ""}`;

        if ("Notification" in window && Notification.permission === "granted") {
          new Notification("Reminder", { body });
        } else {
          alert("Reminder: " + r.name);
        }

        changed = true;
        return {
          ...r,
          lastFired: fireKey,
          snoozeUntil: null
        };
      });

      if (changed) {
        saveReminders();
        renderReminders();
      }
    }

    function initNotificationStatus() {
      const status = document.getElementById("notificationStatus");
      if (!status) return;

      if (!("Notification" in window)) {
        status.textContent = "Notifications are not supported in this browser.";
      } else if (Notification.permission === "granted") {
        status.textContent = "Notifications are enabled.";
      } else {
        status.textContent = "Notifications are not enabled yet.";
      }
    }


    // ----- Grocery List -----
    let groceries = loadStoredJSON("maintenance-groceries", []);

    function addGroceryItem() {
      const input = document.getElementById("groceryInput");
      const name = input.value.trim();
      if (!name) return;

      groceries.push({
        id: Date.now(),
        name,
        checked: false
      });

      input.value = "";
      saveGroceries();
      renderGroceries();
    }

    function toggleGrocery(id) {
      groceries = groceries.map(item =>
        item.id === id ? { ...item, checked: !item.checked } : item
      );
      saveGroceries();
      renderGroceries();
    }

    function deleteGrocery(id) {
      groceries = groceries.filter(item => item.id !== id);
      saveGroceries();
      renderGroceries();
    }

    function clearCheckedGroceries() {
      groceries = groceries.filter(item => !item.checked);
      saveGroceries();
      renderGroceries();
    }

    function clearAllGroceries() {
      if (!groceries.length) return;

      const confirmed = confirm("Clear the entire grocery list?");
      if (!confirmed) return;

      groceries = [];
      saveGroceries();
      renderGroceries();
    }

    function saveGroceries() {
      saveStoredJSON("maintenance-groceries", groceries);
    }

    function renderGroceries() {
      const box = document.getElementById("groceryList");
      if (!box) return;

      if (!groceries.length) {
        box.innerHTML = '<p class="small">Your grocery list is empty.</p>';
        return;
      }

      box.innerHTML = groceries.map(item => `
        <div class="reminder-item" style="display:flex;align-items:center;gap:10px;">
          <input type="checkbox"
                 style="width:22px;height:22px;accent-color:var(--success);"
                 ${item.checked ? "checked" : ""}
                 onchange="toggleGrocery(${item.id})" />
          <div style="flex:1;${item.checked ? "text-decoration:line-through;color:var(--muted);" : ""}">
            ${escapeHtml(item.name)}
          </div>
          <button class="danger-btn" onclick="deleteGrocery(${item.id})">Delete</button>
        </div>
      `).join("");
    }

    document.addEventListener("keydown", e => {
      if (e.key === "Enter" && document.activeElement?.id === "groceryInput") {
        addGroceryItem();
      }
      if (e.key === "Enter" && document.activeElement?.id === "pantryInput") {
        addPantryItem();
      }
    });


    // ----- Pantry -----
    let pantry = loadStoredJSON("maintenance-pantry", []);

    function addPantryItem() {
      const input = document.getElementById("pantryInput");
      const name = input.value.trim();
      if (!name) return;

      if (pantry.some(item => item.name.toLowerCase() === name.toLowerCase())) {
        alert("That item is already in your pantry.");
        return;
      }

      pantry.push({ id: Date.now(), name, checked: false });
      input.value = "";
      savePantry();
      renderPantry();
    }

    function togglePantry(id) {
      pantry = pantry.map(item => item.id === id ? {...item, checked: !item.checked} : item);
      savePantry();
      renderPantry();
    }

    function deletePantry(id) {
      pantry = pantry.filter(item => item.id !== id);
      savePantry();
      renderPantry();
    }

    function clearCheckedPantry() {
      pantry = pantry.filter(item => !item.checked);
      savePantry();
      renderPantry();
    }

    function clearAllPantry() {
      if (!pantry.length) return;
      if (!confirm("Clear the entire pantry list?")) return;
      pantry = [];
      savePantry();
      renderPantry();
    }

    function savePantry() {
      saveStoredJSON("maintenance-pantry", pantry);
    }

    function renderPantry() {
      const box = document.getElementById("pantryList");
      if (!box) return;

      if (!pantry.length) {
        box.innerHTML = '<p class="small">No pantry items saved yet.</p>';
        return;
      }

      box.innerHTML = pantry.map(item => `
        <div class="reminder-item" style="display:flex;align-items:center;gap:10px;">
          <input type="checkbox" style="width:22px;height:22px;accent-color:var(--success);"
                 ${item.checked ? "checked" : ""} onchange="togglePantry(${item.id})" />
          <div style="flex:1;${item.checked ? "text-decoration:line-through;color:var(--muted);" : ""}">
            ${escapeHtml(item.name)}
          </div>
          <button class="danger-btn" onclick="deletePantry(${item.id})">Delete</button>
        </div>
      `).join("");
    }


    // ----- Rotating Recipes -----
    // Recipe data is kept in recipes.js for maintainability.

    let lastRecipeIndex = -1;


    let recipeFavorites = loadStoredJSON("recipe-favorites", []);

    const recipeTagGroups = {
      cheap: new Set([
        "Banana Peanut Butter Oatmeal","French Toast","Grilled Cheese & Tomato Soup",
        "Quesadilla Night","Loaded Baked Potato","Egg Fried Rice","Pesto Pasta",
        "Nacho Plate","Sloppy Joes","Homestyle Chili","Garlic Butter Pasta"
      ]),
      healthy: new Set([
        "Greek Yogurt Parfait","Veggie Omelet","Berry Smoothie","Turkey Avocado Sandwich",
        "Mediterranean Chickpea Bowl","Sheet-Pan Chicken & Vegetables",
        "Beef & Broccoli Stir-Fry","Baked Salmon & Rice","Chicken Fajitas",
        "Rotisserie Chicken Bowl"
      ]),
      family: new Set([
        "Sheet-Pan Chicken & Vegetables","Baked Spaghetti","Chicken Alfredo",
        "Meatloaf & Mashed Potatoes","BBQ Chicken Sandwiches","Chicken Parmesan",
        "Homestyle Chili","Chicken Fajitas","Sloppy Joes","Chicken & Rice Casserole",
        "Cheeseburger Skillet"
      ])
    };


    function renderFavoriteRecipes() {
      const box = document.getElementById("favoriteRecipeList");
      if (!box) return;

      if (!recipeFavorites.length) {
        box.innerHTML = '<p class="small">No favorite recipes yet. Tap ☆ Favorite on a recipe to save it here.</p>';
        return;
      }

      const favoriteRecipes = recipeFavorites
        .map(title => recipes.find(recipe => recipe.title === title))
        .filter(Boolean);

      box.innerHTML = favoriteRecipes.map(recipe => `
        <button
          class="reminder-item"
          style="width:100%;text-align:left;cursor:pointer;"
          onclick="openFavoriteRecipe('${recipe.title.replace(/'/g, "\\'")}')"
        >
          <strong>${escapeHtml(recipe.title)}</strong>
          <div class="reminder-meta">
            ${escapeHtml(recipe.type.charAt(0).toUpperCase() + recipe.type.slice(1))} • ${escapeHtml(recipe.time)}
          </div>
        </button>
      `).join("");
    }

    function openFavoriteRecipe(title) {
      const recipe = recipes.find(item => item.title === title);
      if (!recipe) return;

      document.getElementById("recipeType").value = "all";
      document.getElementById("recipeFilter").value = "all";
      showRecipe(false, title);

      const card = document.getElementById("recipeCard");
      if (card) {
        setTimeout(() => card.scrollIntoView({ behavior: "smooth", block: "center" }), 50);
      }
    }


    function getRecipeImage(title) {
      return recipeImages?.[title] || "";
    }

    function isRecipeFavorite(title) {
      return recipeFavorites.includes(title);
    }

    function toggleCurrentRecipeFavorite() {
      if (!currentRecipe) return;
      const title = currentRecipe.title;

      if (isRecipeFavorite(title)) {
        recipeFavorites = recipeFavorites.filter(item => item !== title);
      } else {
        recipeFavorites.push(title);
      }

      saveStoredJSON("recipe-favorites", recipeFavorites);
      showRecipe(false, title);
      renderFavoriteRecipes();
    }

    function recipeDurationMinutes(timeText) {
      const text = String(timeText || "").toLowerCase().trim();
      const numbers = (text.match(/\d+(?:\.\d+)?/g) || []).map(Number);

      if (!numbers.length) return Infinity;

      // Use the high end of a range so "15–20 minutes" counts as 20,
      // while "3–4 hours" counts as 240 minutes, not 3 minutes.
      const duration = Math.max(...numbers);

      if (text.includes("hour")) {
        return duration * 60;
      }

      return duration;
    }

    function recipeMatchesFilter(recipe, filter) {
      if (filter === "all") return true;
      if (filter === "favorites") return isRecipeFavorite(recipe.title);
      if (filter === "fast") {
        return recipeDurationMinutes(recipe.time) <= 20;
      }
      return recipeTagGroups[filter]?.has(recipe.title) || false;
    }



    let currentRecipe = null;

    function addCurrentRecipeToGroceries() {
      if (!currentRecipe) return;

      const existingNames = new Set(
        groceries.map(item => item.name.trim().toLowerCase())
      );
      const pantryNames = new Set(
        pantry.map(item => item.name.trim().toLowerCase())
      );

      let added = 0;
      let skippedPantry = 0;

      currentRecipe.ingredients.forEach(ingredient => {
        const normalized = ingredient.trim().toLowerCase();

        if (pantryNames.has(normalized)) {
          skippedPantry++;
          return;
        }

        if (!existingNames.has(normalized)) {
          groceries.push({
            id: Date.now() + Math.floor(Math.random() * 100000),
            name: ingredient,
            checked: false
          });

          existingNames.add(normalized);
          added++;
        }
      });

      saveGroceries();
      renderGroceries();

      if (added === 0 && skippedPantry > 0) {
        alert("Everything for this recipe is already in your pantry or grocery list.");
      } else if (added === 0) {
        alert("Those recipe ingredients are already on your grocery list.");
      } else {
        const pantryText = skippedPantry ? " " + skippedPantry + " pantry item" + (skippedPantry === 1 ? " was" : "s were") + " skipped." : "";
        alert(added + " ingredient" + (added === 1 ? "" : "s") + " added to your grocery list." + pantryText);
      }
    }


    function showRecipe(forceNew = false, preferredTitle = null) {
      const card = document.getElementById("recipeCard");
      const typeSelect = document.getElementById("recipeType");
      if (!card || !typeSelect) return;

      const type = typeSelect.value;
      const filter = document.getElementById("recipeFilter")?.value || "all";
      const pool = recipes
        .map((r, i) => ({...r, originalIndex: i}))
        .filter(r => type === "all" || r.type === type)
        .filter(r => recipeMatchesFilter(r, filter));

      if (!pool.length) {
        card.innerHTML = '<p class="small">No recipes match that filter yet. Try another filter.</p>';
        currentRecipe = null;
        return;
      }

      let chosen;
      if (preferredTitle) {
        chosen = pool.find(r => r.title === preferredTitle);
      }
      if (!chosen && forceNew && pool.length > 1) {
        do {
          chosen = pool[Math.floor(Math.random() * pool.length)];
        } while (chosen.originalIndex === lastRecipeIndex);
      } else if (!chosen) {
        chosen = pool[Math.floor(Math.random() * pool.length)];
      }

      lastRecipeIndex = chosen.originalIndex;
      currentRecipe = chosen;

      const label = {
        breakfast: "Breakfast",
        lunch: "Lunch",
        dinner: "Dinner",
        quick: "Quick & Easy"
      }[chosen.type];      const recipeImage = getRecipeImage(chosen.title);
      card.innerHTML = `
        <div class="recipe-feature-photo" style="--recipe-photo:url('${recipeImage}')">
          <div class="recipe-feature-overlay"></div>
          <div class="recipe-feature-copy">
            <div class="small recipe-feature-kicker">${label}</div>
            <h3 style="margin:5px 0 2px;">${escapeHtml(chosen.title)}</h3>
            <div class="reminder-meta">About ${escapeHtml(chosen.time)}</div>
          </div>
        </div>

        <h4 style="margin:14px 0 6px;">Ingredients</h4>
        <ul style="margin-top:0;">
          ${chosen.ingredients.map(i => `<li>${escapeHtml(i)}</li>`).join("")}
        </ul>

        <h4 style="margin:14px 0 6px;">Steps</h4>
        <ol style="margin-top:0;">
          ${chosen.steps.map(step => `<li>${escapeHtml(step)}</li>`).join("")}
        </ol>

        <div class="chip-row">
          <span class="chip">${recipeMatchesFilter(chosen, "fast") ? "Fast • 20 min or less" : "Standard / slow cook"}</span>
          ${recipeTagGroups.cheap.has(chosen.title) ? '<span class="chip">Budget</span>' : ''}
          ${recipeTagGroups.healthy.has(chosen.title) ? '<span class="chip">Lighter</span>' : ''}
          ${recipeTagGroups.family.has(chosen.title) ? '<span class="chip">Family</span>' : ''}
        </div>

        <div class="button-row" style="margin-top:16px;">
          <button class="primary" onclick="addCurrentRecipeToGroceries()">Add ingredients to grocery list</button>
          <button class="favorite-btn" onclick="toggleCurrentRecipeFavorite()">${isRecipeFavorite(chosen.title) ? "★ Favorited" : "☆ Favorite"}</button>
        </div>
      `;
    }




    // ----- Home Profile -----
    const homeProfileFields = [
      "profileYearBuilt","profileFilter","profileHVAC","profileWaterHeater",
      "profileRoof","profileAppliances","profilePaint"
    ];

    function saveHomeProfile() {
      const data = {};
      homeProfileFields.forEach(id => data[id] = document.getElementById(id)?.value || "");
      saveStoredJSON("home-profile", data);
      const status = document.getElementById("profileStatus");
      status.textContent = "Home profile saved on this device.";
      setTimeout(() => status.textContent = "", 2500);
    }

    function loadHomeProfile() {
      const data = loadStoredJSON("home-profile", {});
      homeProfileFields.forEach(id => {
        const el = document.getElementById(id);
        if (el) el.value = data[id] || "";
      });
    }

    // ----- Maintenance Schedule -----
    let scheduleItems = loadStoredJSON("maintenance-schedule", []);

    function addScheduleItem() {
      const task = document.getElementById("scheduleTask").value.trim();
      const lastDone = document.getElementById("scheduleLastDone").value;
      const interval = Number(document.getElementById("scheduleInterval").value);

      if (!task || !lastDone) {
        alert("Enter a task and the last-done date.");
        return;
      }

      scheduleItems.push({ id: Date.now(), task, lastDone, interval });
      document.getElementById("scheduleTask").value = "";
      saveScheduleItems();
      renderScheduleItems();
    }

    function nextDueDate(item) {
      const d = new Date(item.lastDone + "T12:00:00");
      d.setDate(d.getDate() + Number(item.interval));
      return d;
    }

    function markScheduleDone(id) {
      scheduleItems = scheduleItems.map(item => {
        if (item.id !== id) return item;
        const now = new Date();
        const localDate = now.getFullYear() + "-" +
          String(now.getMonth()+1).padStart(2,"0") + "-" +
          String(now.getDate()).padStart(2,"0");
        return {...item, lastDone: localDate};
      });
      saveScheduleItems();
      renderScheduleItems();
    }

    function deleteScheduleItem(id) {
      scheduleItems = scheduleItems.filter(item => item.id !== id);
      saveScheduleItems();
      renderScheduleItems();
    }

    function saveScheduleItems() {
      saveStoredJSON("maintenance-schedule", scheduleItems);
    }

    function renderScheduleItems() {
      const box = document.getElementById("scheduleList");
      if (!box) return;

      if (!scheduleItems.length) {
        box.innerHTML = '<p class="small">No maintenance due dates saved yet.</p>';
        return;
      }

      const today = new Date();
      today.setHours(0,0,0,0);

      box.innerHTML = [...scheduleItems]
        .sort((a,b) => nextDueDate(a) - nextDueDate(b))
        .map(item => {
          const due = nextDueDate(item);
          const dueMidnight = new Date(due);
          dueMidnight.setHours(0,0,0,0);
          const diffDays = Math.ceil((dueMidnight - today) / 86400000);
          const dueText = due.toLocaleDateString(undefined, {month:"short", day:"numeric", year:"numeric"});
          const status = diffDays < 0 ? `${Math.abs(diffDays)} day${Math.abs(diffDays) === 1 ? "" : "s"} overdue`
                       : diffDays === 0 ? "Due today"
                       : `Due in ${diffDays} day${diffDays === 1 ? "" : "s"}`;

          return `
            <div class="reminder-item" data-search-title="${escapeHtml(item.task)}">
              <strong>${escapeHtml(item.task)}</strong>
              <div class="reminder-meta">Next due: ${dueText} • ${status}</div>
              <div class="button-row">
                <button class="secondary" onclick="markScheduleDone(${item.id})">Mark done today</button>
                <button class="danger-btn" onclick="deleteScheduleItem(${item.id})">Delete</button>
              </div>
            </div>
          `;
        }).join("");
    }

    // ----- Repair History -----
    let repairHistory = loadStoredJSON("repair-history", []);

    function addRepair() {
      const title = document.getElementById("repairTitle").value.trim();
      const date = document.getElementById("repairDate").value;
      const cost = Number(document.getElementById("repairCost").value || 0);
      const contractor = document.getElementById("repairContractor").value.trim();
      const notes = document.getElementById("repairNotes").value.trim();

      if (!title || !date) {
        alert("Enter the repair and date.");
        return;
      }

      repairHistory.push({
        id: Date.now(), title, date, cost,
        contractor, notes
      });

      document.getElementById("repairTitle").value = "";
      document.getElementById("repairCost").value = "";
      document.getElementById("repairContractor").value = "";
      document.getElementById("repairNotes").value = "";

      saveStoredJSON("repair-history", repairHistory);
      renderRepairHistory();
    }

    function deleteRepair(id) {
      repairHistory = repairHistory.filter(item => item.id !== id);
      saveStoredJSON("repair-history", repairHistory);
      renderRepairHistory();
    }

    function renderRepairHistory() {
      const box = document.getElementById("repairList");
      if (!box) return;

      if (!repairHistory.length) {
        box.innerHTML = '<p class="small">No repairs logged yet.</p>';
        return;
      }

      box.innerHTML = [...repairHistory]
        .sort((a,b) => new Date(b.date) - new Date(a.date))
        .map(item => `
          <div class="reminder-item" data-search-title="${escapeHtml(item.title)}">
            <strong>${escapeHtml(item.title)}</strong>
            <div class="reminder-meta">
              ${new Date(item.date + "T12:00:00").toLocaleDateString()}${item.cost ? " • " + formatMoney(item.cost) : ""}
              ${item.contractor ? " • " + escapeHtml(item.contractor) : ""}
            </div>
            ${item.notes ? `<p class="small" style="margin-bottom:0;">${escapeHtml(item.notes)}</p>` : ""}
            <div class="button-row">
              <button class="danger-btn" onclick="deleteRepair(${item.id})">Delete</button>
            </div>
          </div>
        `).join("");
    }

    // ----- Photo Log -----
    let photoLog = loadStoredJSON("home-photo-log", []);

    function compressImage(file, maxSize = 800, quality = 0.72) {
      return new Promise((resolve, reject) => {
        const reader = new FileReader();
        reader.onload = () => {
          const img = new Image();
          img.onload = () => {
            let width = img.width;
            let height = img.height;
            const scale = Math.min(1, maxSize / Math.max(width, height));
            width = Math.round(width * scale);
            height = Math.round(height * scale);

            const canvas = document.createElement("canvas");
            canvas.width = width;
            canvas.height = height;
            const ctx = canvas.getContext("2d");
            ctx.drawImage(img, 0, 0, width, height);
            resolve(canvas.toDataURL("image/jpeg", quality));
          };
          img.onerror = reject;
          img.src = reader.result;
        };
        reader.onerror = reject;
        reader.readAsDataURL(file);
      });
    }

    async function addPhotoLog() {
      const area = document.getElementById("photoArea").value;
      const note = document.getElementById("photoNote").value.trim();
      const fileInput = document.getElementById("photoFile");
      const file = fileInput.files?.[0];
      const status = document.getElementById("photoStatus");

      if (!file) {
        alert("Choose a photo first.");
        return;
      }

      status.textContent = "Preparing photo...";

      try {
        const dataUrl = await compressImage(file);
        const entry = {
          id: Date.now(),
          area,
          note,
          date: new Date().toISOString(),
          image: dataUrl
        };

        photoLog.unshift(entry);

        try {
          localStorage.setItem("home-photo-log", JSON.stringify(photoLog));
        } catch (err) {
          photoLog.shift();
          status.textContent = "This browser's local storage is full. Delete an older photo and try again.";
          return;
        }

        document.getElementById("photoNote").value = "";
        fileInput.value = "";
        status.textContent = "Photo saved on this device.";
        renderPhotoLog();
        setTimeout(() => status.textContent = "", 2500);
      } catch (err) {
        status.textContent = "That photo could not be processed.";
      }
    }

    function deletePhotoLog(id) {
      photoLog = photoLog.filter(item => item.id !== id);
      saveStoredJSON("home-photo-log", photoLog);
      renderPhotoLog();
    }

    function renderPhotoLog() {
      const box = document.getElementById("photoList");
      if (!box) return;

      if (!photoLog.length) {
        box.innerHTML = '<p class="small">No monitoring photos saved yet.</p>';
        return;
      }

      box.innerHTML = photoLog.map(item => `
        <div class="reminder-item" data-search-title="${escapeHtml(item.area + " " + item.note)}">
          <strong>${escapeHtml(item.area)}</strong>
          <div class="reminder-meta">${new Date(item.date).toLocaleDateString()}</div>
          ${item.note ? `<p class="small">${escapeHtml(item.note)}</p>` : ""}
          <img class="photo-thumb" src="${item.image}" alt="${escapeHtml(item.area)} monitoring photo" />
          <div class="button-row">
            <button class="danger-btn" onclick="deletePhotoLog(${item.id})">Delete</button>
          </div>
        </div>
      `).join("");
    }

    // ----- Emergency Info -----
    const emergencyFields = [
      "emergencyWater","emergencyGas","emergencyPanel","emergencyPlumber",
      "emergencyElectrician","emergencyHVAC","emergencyInsurance","emergencyNotes"
    ];

    function saveEmergencyInfo() {
      const data = {};
      emergencyFields.forEach(id => data[id] = document.getElementById(id)?.value || "");
      saveStoredJSON("emergency-home-info", data);
      const status = document.getElementById("emergencyStatus");
      status.textContent = "Emergency information saved on this device.";
      setTimeout(() => status.textContent = "", 2500);
    }

    function loadEmergencyInfo() {
      const data = loadStoredJSON("emergency-home-info", {});
      emergencyFields.forEach(id => {
        const el = document.getElementById(id);
        if (el) el.value = data[id] || "";
      });
    }


    // ----- Monthly Home Upkeep Spending -----
    function currentExpenseMonthKey() {
      const now = new Date();
      return now.getFullYear() + "-" + String(now.getMonth() + 1).padStart(2, "0");
    }

    function expenseStorageKey() {
      return "maintenance-expenses-" + currentExpenseMonthKey();
    }

    let expenses = loadStoredJSON(expenseStorageKey(), []);

    function addExpense() {
      const descriptionInput = document.getElementById("expenseDescription");
      const categoryInput = document.getElementById("expenseCategory");
      const amountInput = document.getElementById("expenseAmount");

      const description = descriptionInput.value.trim();
      const category = categoryInput.value;
      const amount = Number(amountInput.value);

      if (!description) {
        alert("Enter a description for the expense.");
        return;
      }

      if (!Number.isFinite(amount) || amount <= 0) {
        alert("Enter a valid amount greater than zero.");
        return;
      }

      expenses.push({
        id: Date.now(),
        description,
        category,
        amount,
        date: new Date().toISOString()
      });

      descriptionInput.value = "";
      amountInput.value = "";

      saveExpenses();
      renderExpenses();
    }

    function deleteExpense(id) {
      expenses = expenses.filter(item => item.id !== id);
      saveExpenses();
      renderExpenses();
    }

    function saveExpenses() {
      saveStoredJSON(expenseStorageKey(), expenses);
    }

    function resetMonthlyExpenses() {
      if (!expenses.length) return;

      const confirmed = confirm("Clear all home-upkeep expenses for this month?");
      if (!confirmed) return;

      expenses = [];
      localStorage.removeItem(expenseStorageKey());
      renderExpenses();
    }

    function formatMoney(amount) {
      return amount.toLocaleString(undefined, {
        style: "currency",
        currency: "USD"
      });
    }

    function renderExpenses() {
      const list = document.getElementById("expenseList");
      const totalEl = document.getElementById("expenseTotal");
      const monthLabel = document.getElementById("expenseMonthLabel");

      if (!list || !totalEl || !monthLabel) return;

      const now = new Date();
      monthLabel.textContent = now.toLocaleDateString(undefined, {
        month: "long",
        year: "numeric"
      });

      const total = expenses.reduce((sum, item) => sum + Number(item.amount || 0), 0);
      totalEl.textContent = formatMoney(total);

      const monthStat = document.getElementById("expenseMonthTotalStat");
      if (monthStat) monthStat.textContent = formatMoney(total);

      let yearTotal = 0;
      const yearPrefix = "maintenance-expenses-" + now.getFullYear() + "-";
      for (let i = 0; i < localStorage.length; i++) {
        const key = localStorage.key(i);
        if (key && key.startsWith(yearPrefix)) {
          try {
            const rows = loadStoredJSON(key, []);
            yearTotal += rows.reduce((sum, row) => sum + Number(row.amount || 0), 0);
          } catch (e) {}
        }
      }

      const yearEl = document.getElementById("expenseYearTotal");
      if (yearEl) yearEl.textContent = formatMoney(yearTotal);

      const breakdown = document.getElementById("expenseBreakdown");
      if (breakdown) {
        const categoryTotals = {};
        expenses.forEach(item => {
          categoryTotals[item.category] = (categoryTotals[item.category] || 0) + Number(item.amount || 0);
        });

        const rows = Object.entries(categoryTotals).sort((a,b) => b[1] - a[1]);
        const max = rows.length ? rows[0][1] : 0;

        breakdown.innerHTML = rows.length
          ? '<strong>Monthly breakdown</strong>' + rows.map(([category, amount]) => `
              <div class="expense-bar">
                <div class="expense-bar-top">
                  <span>${escapeHtml(category)}</span>
                  <strong>${formatMoney(amount)}</strong>
                </div>
                <div class="expense-bar-track">
                  <div class="expense-bar-fill" style="width:${max ? Math.max(5, (amount/max)*100) : 0}%"></div>
                </div>
              </div>
            `).join("")
          : '<p class="small">Add expenses to see a category breakdown.</p>';
      }

      if (!expenses.length) {
        list.innerHTML = '<p class="small">No home-upkeep expenses recorded this month.</p>';
        return;
      }

      list.innerHTML = [...expenses]
        .sort((a, b) => new Date(b.date) - new Date(a.date))
        .map(item => {
          const d = new Date(item.date);
          const dateText = d.toLocaleDateString(undefined, {
            month: "short",
            day: "numeric"
          });

          return `
            <div class="reminder-item">
              <div style="display:flex;gap:10px;align-items:flex-start;">
                <div style="flex:1;">
                  <strong>${escapeHtml(item.description)}</strong>
                  <div class="reminder-meta">
                    ${escapeHtml(item.category)} • ${dateText}
                  </div>
                </div>
                <div style="text-align:right;">
                  <strong>${formatMoney(Number(item.amount))}</strong>
                  <button class="danger-btn" style="margin-top:7px;padding:7px 10px;min-height:auto;" onclick="deleteExpense(${item.id})">Delete</button>
                </div>
              </div>
            </div>
          `;
        }).join("");
    }

    document.addEventListener("keydown", e => {
      if (e.key === "Enter" && document.activeElement?.id === "expenseAmount") {
        addExpense();
      }
    });



    const todayForForms = new Date();
    const todayLocal = todayForForms.getFullYear() + "-" +
      String(todayForForms.getMonth()+1).padStart(2,"0") + "-" +
      String(todayForForms.getDate()).padStart(2,"0");
    if (document.getElementById("repairDate")) document.getElementById("repairDate").value = todayLocal;
    if (document.getElementById("scheduleLastDone")) document.getElementById("scheduleLastDone").value = todayLocal;

    loadTasks();
    loadNotes();
    renderReminders();
    renderGroceries();
    renderPantry();
    renderFavoriteRecipes();
    showRecipe();
    renderExpenses();
    loadHomeProfile();
    loadRuthVisualEnhancer();
    loadAppearanceSettings();
    renderScheduleItems();
    renderRepairHistory();
    renderPhotoLog();
    loadEmergencyInfo();
    initNotificationStatus();
    updateReminderFormFields();
    checkReminders();
    setInterval(checkReminders, 15000);
