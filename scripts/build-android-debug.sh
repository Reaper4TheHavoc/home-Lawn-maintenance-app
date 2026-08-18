#!/usr/bin/env bash
set -euo pipefail
cd "$(dirname "$0")/.."

npm install

if [ ! -d android ]; then
  npx cap add android
fi

npx cap sync android
node scripts/configure-android.mjs

cd android
./gradlew assembleDebug

echo
echo "APK created at:"
echo "android/app/build/outputs/apk/debug/app-debug.apk"
