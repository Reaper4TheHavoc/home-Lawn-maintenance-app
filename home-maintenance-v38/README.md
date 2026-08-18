# Home & Lawn Maintenance — Android-ready v38 beta

This package is the first native-app foundation for **Home & Lawn Maintenance**.

## App identity

- Android package ID: `com.homeandlawn.maintenance`
- Android version code: `38`
- Android version name: `0.38.0-beta.1`
- Web/app display version: `v38`
- Saved-data schema: `1`
- Capacitor: `8.5.0`
- Minimum Android API: 24
- Target Android API: 36

**Important:** keep the package ID unchanged after real users begin storing data or after the first Google Play upload. It is the Android app's permanent identity.

## Why this is easy to update later

The actual app remains in `web/`. Android is a Capacitor wrapper around that same web app.

Normal future release flow:

1. Change the app in `web/`.
2. Increase the versions in `version.json`.
3. Update the visible Settings watermark.
4. Run `npx cap sync android`.
5. Build the next APK/AAB.
6. Upload the new AAB to Google Play.

The package ID stays the same, so Android treats each build as an update rather than a different app.

## Build a test APK

### Automated route

Put this project in a GitHub repository. The included workflow:

`.github/workflows/android-debug.yml`

builds an installable debug APK on every push to `main`, or manually from the Actions tab.

The APK appears as a workflow artifact named:

`home-lawn-maintenance-v38-debug-apk`

### Local route

Requirements:

- Node.js 22+
- Android Studio / Android SDK
- Android 16 (API 36) SDK

Then run:

```bash
npm install
npm run android:add
npm run android:prepare
cd android
./gradlew assembleDebug
```

The APK will be:

`android/app/build/outputs/apk/debug/app-debug.apk`

## Google Play release

Do **not** publish the debug APK. Before the first Play Store release we will:

- create and protect an Android upload signing key,
- enable release signing,
- build an Android App Bundle (`.aab`),
- prepare store listing, screenshots, privacy policy, data-safety answers, and testing track.

## Saved-data update safety

v38 establishes a migration marker in `web/update-manager.js`. Existing local data is not changed. Future versions can add ordered migrations there instead of breaking old saved records.

## Native beta items to test before Play release

- Browser-style reminder notifications currently work while the app is running; true scheduled background notifications still need the native Local Notifications integration.
- Backup/export and external manual/receipt links should be tested inside the Android WebView.
- Photo-heavy local data should be stress-tested before broad distribution.
