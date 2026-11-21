# Mobile app testing on a Mac

Use this runbook when an authorized agent needs to install tools and test a mobile application on an Apple Silicon Mac. It covers native, hybrid and mobile web apps on Android emulators, iOS simulators and physical devices, using Appium. Salesforce barcode lookup is a worked example; do not assume that example is implemented. Local emulator, simulator and Appium tools are free; Apple developer membership, app stores, device clouds and optional services can have separate costs or terms.

**Status:** Proposed process, not a passed test. Gemini proposed the original Salesforce emulator and Appium approach; Claude Opus 5.5 reviewed it and proposed a general process. Neither review proves that any build, selector, device feature or camera scan works in a particular environment. Record actual versions and results.

Steps labeled **Android**, **iOS**, or **Salesforce example** apply only to that case. A **human gate** is a step that requires an authorized person's participation.

## Agent starting instructions

Give the agent this guide and the relevant story. It should inspect the environment, reuse working tools, install missing prerequisites within the authorized scope, validate a checklist manually and run appropriate automated checks. Report only observed results. Terminal access can control devices through `adb`, `xcrun simctl` and Appium; some setup, interactive login, device permissions or visual inspection may require a person or desktop control. If blocked, record the obstacle and continue independent work.

Optional official agent guidance: [Appium skills](https://github.com/appium/skills) includes `setup-uiautomator2`, `setup-xcuitest` and troubleshooting. Agents without skills support can read the instructions directly. Google's [Android CLI](https://developer.android.com/tools/agents/android-cli) includes `android init` for its agent skill. Inspect skill contents and host rules before installation or running scripts, and record the revision.

Useful repositories: [Appium](https://github.com/appium/appium), [UiAutomator2](https://github.com/appium/appium-uiautomator2-driver), [XCUITest](https://github.com/appium/appium-xcuitest-driver), [Appium Inspector](https://github.com/appium/appium-inspector) for optional visual selector inspection, and [WebdriverIO](https://github.com/webdriverio/webdriverio), one possible test client. Reuse an existing client; cloning every repository is unnecessary.

## Human gates

An agent should use existing authorization and the applicable host rules. A person may need to supply missing scope or authority, enter an administrator password, accept binding terms, grant macOS privacy permissions, complete sign-in/MFA, trust a physical device, configure Apple signing, present a physical test fixture, or make an acceptance decision. Prepare and verify everything else independently. Never record passwords, tokens or MFA codes in scripts, prompts, logs, screenshots or Git.

## Before you start

1. Read the story and applicable [delivery guide](../../DELIVERY.md). Identify the app, platforms, authorized environment, test user and role, build, fixture, expected outcomes and safe reset. Use synthetic data. Do not use production data or change records without authorization.
2. Choose the surface for each check:

   | Need | Android | iOS |
   | --- | --- | --- |
   | Project native or hybrid app | Compatible debug APK on emulator or device; UiAutomator2 | Simulator `.app` or signed physical-device build; XCUITest |
   | Vendor app | Vendor emulator build if available; otherwise authorized physical device | Vendor simulator build if available; otherwise authorized physical device |
   | Mobile website | Chrome on emulator or device | Safari on simulator or device |
   | Hardware such as camera, NFC or biometrics | Use physical-device evidence where required; simulation may be partial | Use physical-device evidence where required; simulation may be partial |

   Hybrid WebView inspection requires a debuggable and reachable WebView. Store builds may not expose one. Emulator or simulator results do not establish physical hardware behavior.
3. Reuse installed SDKs, virtual devices, Xcode, Appium, tests and fixtures. Check [Android emulator requirements](https://developer.android.com/studio/run/emulator) and [XCUITest requirements](https://appium.github.io/appium-xcuitest-driver/latest/getting-started/system-requirements/). Choose versions compatible with the project and ARM images for Apple Silicon.
4. Before automating, write a checklist with the question, exact action, expected result, evidence and behavior when evidence is absent. Include an intentionally incorrect or restricted case to prove the check can fail. Keep sensitive logs, screenshots and page source in approved restricted storage; publish only sanitized evidence.
5. **Salesforce example:** When needed, independently check [Salesforce CLI](../salesforce-cli.md) and [MCP](../salesforce-mcp.md). A connected CLI or browser session does not prove that the intended user is signed in on the device.

## 1. Prepare Android (Android only)

1. Check existing tools and paths:

   ```sh
   uname -m
   command -v android adb emulator sdkmanager java node npm
   printf '%s\n' "$ANDROID_HOME"
   ```

   Reuse an appropriate SDK and emulator. `command -v` can return a nonzero status for missing tools; check each one individually if needed.
2. Install [Android CLI](https://developer.android.com/tools/agents/android-cli) using its current official installation instructions, or use Android Studio's SDK Manager or [SDK command-line tools](https://developer.android.com/tools/sdkmanager). For Android CLI, inspect `android help sdk install` and `android sdk list --all`, then install required packages **one at a time**, for example:

   ```sh
   android info
   android sdk install platform-tools
   android sdk install emulator
   android sdk list --all
   ```

   Select and install a compatible ARM system image using its exact listed package name. Read current CLI help when options differ. Follow project policy for telemetry. **Human gate:** have an authorized person accept SDK licenses where required.
3. Create a virtual device with `android emulator create --list-profiles` followed by `android emulator create medium_phone` if the profile fits. The CLI chooses its AVD configuration; inspect the created image and API level for app compatibility. Use `android help emulator start` for the installed version's start syntax. Alternatively use Android Studio's Device Manager or `avdmanager` and `emulator`. Check the actual serial and use it explicitly:

   ```sh
   adb devices -l
   adb -s <serial> wait-for-device
   adb -s <serial> shell getprop sys.boot_completed
   adb -s <serial> shell getprop ro.product.cpu.abi
   ```

   Boot completion should be `1`; record the emulator, image, API level and ABI. For mobile web, verify the selected image includes Chrome. If needed, invoke `adb` by its SDK path without silently modifying shell profiles.
4. Obtain an authorized emulator-compatible app build. Inspect native APK libraries with `unzip -l <apk>`; an absent `lib/` folder alone does not prove compatibility. Check the selected ABI and test installation and launch. An example install is `adb -s <serial> install <apk>`; avoid replacing an existing app or clearing its data without authorization. Inspect the live device for its package and activity, for example using `adb -s <serial> shell dumpsys window`. Values and output differ across Android versions.

   **Salesforce example:** Download the virtual-device build linked from [Salesforce preview instructions](https://developer.salesforce.com/docs/platform/mobile-offline/guide/dx-mobile-previews-salesforce-app.html). Its compatibility and package name must be observed on the selected image.
5. **Human gate:** Open the app and have the test user complete any required sign-in, identity verification, consent or terms. Preserve the authenticated session. Record the app version, role, entry path and baseline screen. A working deep link does not prove the menu is visible.

   **Salesforce example:** Select the correct login server or My Domain. For a missing navigation item, record the active app, menu, tab visibility, permissions and, if authorized, Salesforce Navigation configuration. [Salesforce navigation](https://help.salesforce.com/s/articleView?id=salesforce_app_customize_nav_menu.htm&type=5)

## 2. Prepare iOS (iOS only)

1. Install Xcode for the supported macOS and XCUITest versions. **Human gate:** the owner handles Apple ID, administrator prompts and the Xcode license. Then check:

   ```sh
   xcode-select -p
   xcodebuild -version
   xcodebuild -runFirstLaunch
   xcodebuild -downloadPlatform iOS
   xcrun simctl list runtimes
   xcrun simctl list devicetypes
   ```

   First-launch setup or downloading a runtime may require additional authorization or disk space. Use the [driver requirements](https://appium.github.io/appium-xcuitest-driver/latest/getting-started/system-requirements/) for compatibility.
2. Create and boot a simulator, substituting identifiers from the lists and saving the returned UDID:

   ```sh
   xcrun simctl create test_iphone "<device type>" "<runtime id>"
   xcrun simctl boot <udid>
   xcrun simctl bootstatus <udid> -b
   ```

   Use `open -a Simulator` if a visible window is needed.
3. Install the app's simulator-compatible `.app`, not an ordinary device-only store `.ipa`:

   ```sh
   plutil -extract CFBundleIdentifier raw "<App>.app/Info.plist"
   xcrun simctl install <udid> "<App>.app"
   xcrun simctl launch <udid> <bundle-id>
   ```

   **Salesforce example:** Obtain the simulator build from [Salesforce's preview instructions](https://developer.salesforce.com/docs/platform/mobile-offline/guide/dx-mobile-previews-salesforce-app.html).
4. Complete any human sign-in and record the baseline. For real iPhones, use the [XCUITest real-device setup](https://appium.github.io/appium-xcuitest-driver/latest/preparation/real-device-config/); trust, Developer Mode and signing may need a human. Treat simulator camera behavior as unavailable unless the relevant simulator and app support it and it has actually been verified.

## 3. Install and verify Appium

Reuse the project's lockfile and test runner. Check [Appium requirements](https://appium.io/docs/en/latest/quickstart/requirements/) and each driver's compatibility before choosing versions; `npm view appium version engines` helps check the current server requirements. In an authorized test project, initialize `package.json` with `npm init -y` only if needed. Example:

```sh
export APPIUM_HOME="$PWD/.appium"
npm install --save-dev --save-exact appium
npx appium --version
npx appium driver install uiautomator2   # Android, if needed
npx appium driver install xcuitest       # iOS, if needed
npx appium driver list --installed
npx appium driver doctor uiautomator2    # Android
npx appium driver doctor xcuitest       # iOS
```

Use the same `APPIUM_HOME` for server, driver and test commands. Doctor should report no required fixes; record warnings and actual tool versions. If incompatible, choose a documented compatible combination and repeat. [Appium installation](https://appium.io/docs/en/latest/quickstart/install/) · [UiAutomator2](https://appium.io/docs/en/latest/quickstart/uiauto2-driver/)

Start `npx appium --address 127.0.0.1 --port 4723` and verify from another terminal with `curl --fail http://127.0.0.1:4723/status`. Stop the server after testing. Avoid broad insecure-feature flags. For WebView automation, use an appropriate matching ChromeDriver and project policy; do not enable automatic downloads blindly.

## 4. Validate manually, then automate

1. Run the checklist by hand on the selected device and record each result, including the deliberate failure. Fix an ambiguous checklist before automating it.
2. Prove the driver can start a session. For an Android native app, save a `caps.json` with observed values:

   ```json
   {"capabilities":{"alwaysMatch":{"platformName":"Android","appium:automationName":"UiAutomator2","appium:udid":"<serial>","appium:appPackage":"<package>","appium:appActivity":"<activity>","appium:noReset":true,"appium:autoGrantPermissions":false}}}
   ```

   For iOS, use `platformName` `iOS`, automation name `XCUITest`, the simulator UDID and `appium:bundleId`. For a website, use `browserName` `Chrome` or `Safari` and remove app-specific keys. POST the JSON to `http://127.0.0.1:4723/session`, check the response and delete the returned session afterwards. Preserve authenticated sessions and don't automatically grant permissions when testing prompts. [Appium quickstart](https://appium.io/docs/en/latest/quickstart/)
3. Reuse the project's client or add a minimal test, discover accessible selectors and native/WebView contexts, and automate the validated checklist. Verify expected outcomes with assertions. Capture sanitized results and protect raw evidence. Do not perform external side effects without authorization and a safe reset.

   **Salesforce example:** Compare a valid synthetic code, an unknown code and typed entry; test cancellation and permissions when supported. [Salesforce Appium walkthrough](https://developer.salesforce.com/blogs/2021/08/automated-testing-with-the-salesforce-mobile-app-appium) · [UTAM](https://developer.salesforce.com/docs/platform/utam/guide/test-sf-applications.html)
4. Inspect a debuggable Android WebView with Chrome device inspection or iOS WebView with Safari remote debugging. Switch context only when supported. Missing contexts, incompatible drivers and opaque controls are limitations to diagnose, not passes.
5. Run relevant local component and server tests. For each coherent test-code change follow the delivery guide's review sequence: CodeRabbit first, verify and repair findings and rerun affected checks; then a fresh Claude Opus 5.5 review last, fix confirmed findings and rerun affected checks. If either review is unavailable, record the blocker and do not perform dependent implementation, deployment, merge or handoff. Record reviewed revisions and checks.

## 5. Hardware features and physical-device evidence

Camera, NFC, Bluetooth, biometrics and push may need physical-device evidence. Simulations can support regression checks when the specific capability and app support them; do not claim physical behavior from simulation. Android documents location and fingerprint simulation through its [emulator console](https://developer.android.com/studio/run/emulator-console), and virtual scene images through its [emulator camera](https://developer.android.com/studio/run/emulator-use-camera). Whether an app reacts correctly must be observed.

On a physical device, Appium can drive a USB-authorized Android phone or properly configured iPhone. Presenting a code, card or fingerprint may need a person or physical fixture. Record device, OS and app versions, role, expected and observed results, and protected evidence.

**Salesforce example:** Native BarcodeScanner requires a compatible Salesforce mobile app; scanning is unsupported in a desktop or mobile browser. Salesforce recommends physical devices for scan testing. Whether an emulator virtual-scene image decodes in a particular build is unverified. For acceptance, use an authorized phone and synthetic barcode; test scan, result and cancellation and compare with typed entry and expected stock. [Compatibility](https://developer.salesforce.com/docs/platform/mobile-offline/guide/use-barcodescanner-compatibility.html) · [Considerations](https://developer.salesforce.com/docs/platform/mobile-offline/guide/use-barcodescanner-considerations.html)

## Results and handoff

Record each check as **PASS**, **FAIL**, **BLOCKED**, or **NOT RUN**, with revision, tool versions, platform, device or simulator, OS, user or role, environment, expected and observed results, and an appropriately protected evidence reference. For a blocker record the goal, obstacle, smallest next action and supporting documentation. Update the owning story under its delivery rules. Do not mark acceptance complete until its required evidence and decision are present.

If a test fails, preserve evidence; distinguish setup, authentication, permissions, app defects and harness problems; and retest after a verified fix. Preserve existing sessions and other people's artifacts.

## References

- [Appium documentation](https://appium.io/docs/en/latest/) · [Appium skills](https://github.com/appium/skills) · [XCUITest requirements](https://appium.github.io/appium-xcuitest-driver/latest/getting-started/system-requirements/)
- **Android:** [Android CLI](https://developer.android.com/tools/agents/android-cli) · [SDK tools](https://developer.android.com/tools/sdkmanager) · [Emulator](https://developer.android.com/studio/run/emulator) · [Emulator console](https://developer.android.com/studio/run/emulator-console) · [Camera](https://developer.android.com/studio/run/emulator-use-camera)
- **iOS:** [Xcode](https://developer.apple.com/xcode/)
- **Salesforce example:** [Virtual-device builds](https://developer.salesforce.com/docs/platform/mobile-offline/guide/dx-mobile-previews-salesforce-app.html) · [Appium walkthrough](https://developer.salesforce.com/blogs/2021/08/automated-testing-with-the-salesforce-mobile-app-appium) · [UTAM](https://developer.salesforce.com/docs/platform/utam/guide/test-sf-applications.html) · [Mobile Tools playlist](https://www.youtube.com/playlist?list=PLgIMQe2PKPSJsVvAdRvJbot0KjD_XpzT5). Older walkthroughs and videos may have outdated versions or menus.
