# Salesforce mobile testing on a Mac

Use this runbook when an authorized agent needs to set up and test the Salesforce mobile app on an Apple Silicon Mac. It covers the native Android app, the emulator, and Appium; adapt it to another mobile story without assuming that the barcode example is implemented. The local Android emulator and open-source Appium tooling are free; provider accounts, hosting, or other optional tools may have separate costs or terms.

**Status:** Proposed reusable process, not a passed test. Gemini Neon proposed the emulator and Appium approach; Claude Opus 5.5 independently reviewed the approach and suggested testing and story changes. Neither review proves that the current Salesforce APK, app, selectors, or camera scan work on a particular Mac or org. Record actual versions and results when you run it.

## Agent starting instructions

Give this file and the relevant story to the agent. The agent should inspect the existing environment, use the steps below to install missing tools within the authorized project, perform the manual baseline and then run the appropriate tests. Report what actually ran, and stop only the affected work when interactive login, permissions, incompatible software or another real blocker prevents progress. This guide requires an agent with terminal and device or desktop-control access; a text-only agent cannot operate the emulator itself.

For detailed setup, read the official [Appium Android setup skill](https://github.com/appium/skills/blob/main/skills/setup-uiautomator2/SKILL.md) and its linked resources. The [Appium skills repository](https://github.com/appium/skills) also includes troubleshooting and real-device workflows. Skills are optional instructions, not a required agent product: an agent without skill support can read the files directly. If installing a skill into an agent, use that agent's documented installation method, inspect its contents first and record the revision. Do not run unfamiliar repository scripts without checking them and the host's rules.

Useful open-source repositories: [Appium server](https://github.com/appium/appium), [UiAutomator2 Android driver](https://github.com/appium/appium-uiautomator2-driver), [Appium Inspector](https://github.com/appium/appium-inspector) (optional visual selector inspection), and [WebdriverIO](https://github.com/webdriverio/webdriverio) (one possible JavaScript test client). Appium uses a separate client library to write tests; reuse the project's client if one exists. These links are references, not a requirement to clone every repository.

## Before you start

1. Read the current story and the applicable [delivery guide](../../DELIVERY.md), including its access, execution, review, privacy and publication rules. Identify the authorized org, user/role, app, test fixture, expected result and reset procedure. Confirm scope and authority; do not use production or create or change records without authorization. Retain current acceptance criteria and IDs.
2. Check whether an existing Android SDK, emulator, Appium, project test suite and suitable fixture can be reused. Don't overwrite another project's configuration. Check available disk, memory and macOS version against the [Android Emulator requirements](https://developer.android.com/studio/run/emulator). On Apple Silicon choose ARM-compatible software and a compatible ARM system image. Check the current [Appium requirements](https://appium.io/docs/en/latest/quickstart/requirements/) and driver compatibility before selecting and recording versions. The latest release is not automatically the version already approved by a project.
3. Define a small checklist before automating: question, exact action, expected observable result, evidence and behavior when evidence is missing. Include a deliberately incorrect or restricted case to demonstrate that the check can fail. Use synthetic data and a safe reset for write tests. Keep raw logs, screenshots and page source containing org data in approved restricted storage; publish sanitized results only.
4. Check Salesforce CLI and MCP independently when the story requires them, using the repository's [Salesforce CLI](../salesforce-cli.md) and [Salesforce MCP](../salesforce-mcp.md) guides. A connected CLI or an existing web session does not prove the emulator is signed in as the intended user.

## 1. Prepare the Android device and Salesforce app

1. Install or reuse [Android Studio](https://developer.android.com/studio) for the Mac's architecture. Through its SDK Manager install the Android Emulator, SDK Platform-Tools, command-line tools and a supported Android system image. Accept required SDK licenses only when the operator is authorized to do so; hand off any agreement requiring human acceptance. Install a JDK and Node/npm versions compatible with the chosen Appium and driver releases. Verify actual paths and versions rather than relying on an old `JAVA_HOME` example.
2. In Android Studio select **More Actions → Virtual Device Manager → Create Device**, select an appropriate phone and an ARM64 image, and start it. Choose an Android version supported by the target Salesforce build and record the image and API level. Follow [Android's emulator setup](https://developer.android.com/studio/run/emulator); UI labels vary by version. Verify:

   ```sh
   uname -m
   node --version
   npm --version
   java -version
   adb version
   adb devices -l
   ```

   Expect an `arm64` host and the intended emulator in `device` state. If `adb` isn't on `PATH`, use the actual SDK `platform-tools/adb` path for this session; don't silently change the user's shell profile.
3. Download the Android **virtual-device build** linked from [Salesforce Mobile Debugging Tools](https://developer.salesforce.com/tools/mobile-debugging) and [Salesforce's preview instructions](https://developer.salesforce.com/docs/platform/mobile-offline/guide/dx-mobile-previews-salesforce-app.html). Before installation inspect the APK's native-library ABIs, if present, with `unzip -l <apk>`, and verify compatibility with the selected emulator. A missing `lib/` directory alone does not prove that the whole app is compatible. Install by dropping the APK onto the running emulator or with `adb -s <emulator-id> install <apk>`; check the actual result. Do not assume a downloaded build is compatible until it launches.
4. Open the Salesforce app. Have the human complete any binding license agreement, interactive sign-in, identity verification and required consent. Select the intended org and test identity. Never paste credentials, access tokens or MFA codes into test scripts, commits, logs, prompts or screenshots. Use the existing authenticated session without clearing app data; if it expires, hand sign-in back to the human. Follow the org's rules for test accounts and device authorization.
5. Confirm the app and user, open the target screen manually and record the baseline. For a missing menu item, record the active mobile app, menu contents, the item label, tab visibility, profile/access and the **Setup → Salesforce Navigation** configuration where authorized. Refresh the mobile app after changes. A working direct URL does not prove the menu entry is visible. [Salesforce Mobile Only navigation](https://help.salesforce.com/s/articleView?id=salesforce_app_customize_nav_menu.htm&type=5)

## 2. Install and verify Appium

Prefer an isolated project tool directory and existing lockfiles over a system-wide installation. Pin versions only after checking compatibility; keep installation files and tests with the work they support. If the authorized test directory has no `package.json`, run `npm init -y` there first. For example, with a compatible Node/npm already available and inside that test project:

```sh
npm install --save-dev --save-exact appium
npx appium --version
npx appium driver install uiautomator2
npx appium driver list --installed
npx appium driver doctor uiautomator2
```

Set `APPIUM_HOME` to a stable project-specific, writable directory when isolating driver installations. Use the same setting for every Appium command and test. The doctor command must report that required prerequisites pass; record warnings separately. Check and record the installed Appium, driver, Node, npm, Java, SDK and emulator versions. If a version conflict occurs, select a documented compatible combination and repeat the checks. [Appium installation](https://appium.io/docs/en/latest/quickstart/install/) · [UiAutomator2 setup](https://appium.io/docs/en/latest/quickstart/uiauto2-driver/)

Start Appium bound to loopback, then verify its status endpoint before creating a session. For example, in one terminal run `npx appium --address 127.0.0.1 --port 4723`; in another run `curl --fail http://127.0.0.1:4723/status` and inspect the response. Stop the server when finished. Avoid broad insecure-feature flags. If WebView automation requires an additional driver, first inspect the WebView and choose a matching ChromeDriver using the current driver documentation and project policy. Do not enable automatic downloads or relaxed security blindly.

## 3. Validate manually, then automate

1. With the signed-in test user, run the checklist by hand on the emulator and record the observed result for each step. Include the known failure or restricted case. If the checklist cannot distinguish pass from fail, revise it before writing automation.
2. In the owning project, reuse its test runner or add a minimal Appium client test. Inspect the live app to determine the installed package, activity, accessible selectors and available native/WebView contexts; don't hard-code values from an old example. Create a session for the selected emulator with `noReset` enabled so the authenticated test session is preserved; leave automatic permission granting off when testing permission behavior. Use the [Appium quickstart](https://appium.io/docs/en/latest/quickstart/) and [Salesforce's Appium walkthrough](https://developer.salesforce.com/blogs/2021/08/automated-testing-with-the-salesforce-mobile-app-appium).
3. Automate the manual checklist using stable accessible labels where available. Capture a screenshot and sanitized assertion outcome for the active app, navigation menu and target entry. Exercise a valid synthetic code and an unknown code; for barcode workflows, compare typed entry with a known fixture and verify cancellation and permission behavior where available. Keep external side effects out of tests unless explicitly authorized and safely resettable.
4. If the app exposes a debuggable WebView, inspect it with Chrome's device inspection and switch Appium contexts only when supported. A missing WebView, opaque native control or mismatched driver is a test limitation to diagnose, not a passed check. Record actual errors and use a real device or another verified selector strategy when appropriate.
5. Run relevant local component and server tests first. For each coherent test-code change, follow the delivery guide's required code review sequence: CodeRabbit first, verify and repair its findings, rerun checks, then obtain a fresh Claude Opus 5.5 review last; fix confirmed findings and rerun affected checks. If either review is unavailable, record the blocker and don't perform dependent implementation, deployment, merge or handoff. Record the reviewed revision and checks; do not describe model advice as test results.

## 4. Barcode scanning and physical-device evidence

Salesforce states that its native BarcodeScanner requires a compatible Salesforce mobile app; a desktop or mobile web browser cannot perform a native scan. Salesforce recommends actual physical devices for testing scanning. [Compatibility](https://developer.salesforce.com/docs/platform/mobile-offline/guide/use-barcodescanner-compatibility.html) · [Considerations](https://developer.salesforce.com/docs/platform/mobile-offline/guide/use-barcodescanner-considerations.html)

An optional Android emulator experiment can load a PNG/JPEG barcode into **Extended Controls → Camera → Virtual scene images** and aim the virtual camera at it. Android documents this camera feature, but decoding by the particular Salesforce build is **unverified until observed**. Record a failed or unavailable virtual scan honestly; do not turn it into a pass. [Android emulator camera](https://developer.android.com/studio/run/emulator-use-camera)

For acceptance, use an authorized physical phone and a synthetic barcode displayed on a second screen or printed label. Test scanning, the result and cancellation; compare against manual entry and the expected stock or record. Appium can drive a USB-authorized Android phone, but presenting the barcode requires a person or a physical fixture. Record device/OS/app versions, role, expected and observed outcomes, and restricted evidence. Do not claim physical-camera behavior from a simulation.

## Results and handoff

Record each check as **PASS**, **FAIL**, **BLOCKED**, or **NOT RUN**, with exact revision, versions, user/role, target environment, expected and observed results, and an appropriately protected evidence reference. For a blocker record the goal, specific obstacle, smallest next action, and the best supporting documentation. Update the owning story and its ClickUp pointer only under the applicable delivery rules. Do not mark an acceptance criterion complete until its required evidence and human decision are present.

If an automated test fails, preserve evidence, separate setup, authentication, permissions, app defects and test-harness problems, then retest the affected check after a verified fix. Leave an authenticated session, profile data and other people's test artifacts intact.

## References

- [Salesforce Mobile Tools playlist](https://www.youtube.com/playlist?list=PLgIMQe2PKPSJsVvAdRvJbot0KjD_XpzT5) · [Android emulator setup video](https://www.youtube.com/watch?v=fo0wyyutKkw). The videos are from 2021; use current documentation for menu names, versions and requirements.
- [Salesforce virtual-device builds](https://developer.salesforce.com/docs/platform/mobile-offline/guide/dx-mobile-previews-salesforce-app.html) · [Salesforce mobile Appium walkthrough](https://developer.salesforce.com/blogs/2021/08/automated-testing-with-the-salesforce-mobile-app-appium).
- [Android Emulator](https://developer.android.com/studio/run/emulator) · [Appium documentation](https://appium.io/docs/en/latest/).
