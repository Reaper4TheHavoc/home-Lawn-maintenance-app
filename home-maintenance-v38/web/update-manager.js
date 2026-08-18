(() => {
  "use strict";

  const version = window.HOME_APP_VERSION || {};
  const CURRENT_SCHEMA = Number(version.dataSchemaVersion || 1);
  const SCHEMA_KEY = "home-maintenance-data-schema";
  const LAST_VERSION_KEY = "home-maintenance-last-app-version";

  function runMigrations() {
    let storedSchema = Number(localStorage.getItem(SCHEMA_KEY) || 0);

    if (storedSchema < 1) {
      storedSchema = 1;
    }

    // Future migrations go here in ascending order:
    // if (storedSchema < 2) { ...; storedSchema = 2; }

    localStorage.setItem(SCHEMA_KEY, String(Math.max(storedSchema, CURRENT_SCHEMA)));
    localStorage.setItem(LAST_VERSION_KEY, String(version.webVersion || ""));
  }

  try {
    runMigrations();
  } catch (error) {
    console.warn("Saved-data migration check could not complete.", error);
  }

  window.HomeAppUpdate = Object.freeze({
    appVersion: Number(version.webVersion || 0),
    dataSchemaVersion: CURRENT_SCHEMA
  });
})();
