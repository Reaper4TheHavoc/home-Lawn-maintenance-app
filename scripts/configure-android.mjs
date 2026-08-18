import fs from "node:fs";
import path from "node:path";
import { fileURLToPath } from "node:url";

const here = path.dirname(fileURLToPath(import.meta.url));
const root = path.resolve(here, "..");
const version = JSON.parse(fs.readFileSync(path.join(root, "version.json"), "utf8"));
const androidRoot = path.join(root, "android");
const appGradle = path.join(androidRoot, "app", "build.gradle");
const manifestPath = path.join(androidRoot, "app", "src", "main", "AndroidManifest.xml");

if (!fs.existsSync(appGradle)) {
  throw new Error("Android project is missing. Run: npm run android:add");
}

let gradle = fs.readFileSync(appGradle, "utf8");
gradle = gradle
  .replace(/namespace\s*=\s*"[^"]+"/, `namespace = "${version.packageId}"`)
  .replace(/applicationId\s+"[^"]+"/, `applicationId "${version.packageId}"`)
  .replace(/versionCode\s+\d+/, `versionCode ${version.androidVersionCode}`)
  .replace(/versionName\s+"[^"]+"/, `versionName "${version.androidVersionName}"`);
fs.writeFileSync(appGradle, gradle);

if (fs.existsSync(manifestPath)) {
  let manifest = fs.readFileSync(manifestPath, "utf8");
  if (!manifest.includes('android:screenOrientation="portrait"')) {
    manifest = manifest.replace(
      'android:exported="true">',
      'android:exported="true"\n            android:screenOrientation="portrait">'
    );
  }
  fs.writeFileSync(manifestPath, manifest);
}

const javaRoot = path.join(androidRoot, "app", "src", "main", "java");
const oldMainActivities = [];
function walk(dir) {
  if (!fs.existsSync(dir)) return;
  for (const entry of fs.readdirSync(dir, { withFileTypes: true })) {
    const p = path.join(dir, entry.name);
    if (entry.isDirectory()) walk(p);
    else if (entry.name === "MainActivity.java") oldMainActivities.push(p);
  }
}
walk(javaRoot);

const desiredDir = path.join(javaRoot, ...version.packageId.split("."));
fs.mkdirSync(desiredDir, { recursive: true });
const desiredMain = path.join(desiredDir, "MainActivity.java");
fs.writeFileSync(
  desiredMain,
  `package ${version.packageId};\n\nimport com.getcapacitor.BridgeActivity;\n\npublic class MainActivity extends BridgeActivity {}\n`
);
for (const p of oldMainActivities) {
  if (path.resolve(p) !== path.resolve(desiredMain)) fs.rmSync(p, { force: true });
}

console.log(`Android configured: ${version.packageId} ${version.androidVersionName} (${version.androidVersionCode})`);
