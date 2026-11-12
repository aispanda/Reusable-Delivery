# Salesforce CLI access and recovery

Use this guide to verify and recover Salesforce CLI access without inspecting the MCP catalog. Substitute local placeholders. Keep org URLs, usernames, tokens, authorization files, and raw command output out of public documentation and shared logs. Confirm the intended org, environment, and user before running a command; use an explicit `--target-org` for org work.

## Inspect and verify

1. Confirm Salesforce CLI is installed with `sf --version`. Consult the [Salesforce CLI command reference](https://developer.salesforce.com/docs/platform/salesforce-cli-reference/guide/cli_reference.html) and local `sf <command> --help` for the installed version.
2. Run `sf org list --json` privately to identify the intended alias and user. Treat this as an inventory of local authorizations, not proof of live access. Do not publish its output.
3. Perform a targeted, read-only probe:

```sh
sf org list limits --target-org '<ALIAS>' --json
```

A successful response establishes that this CLI identity can make that read at that moment; it does not prove permission for later queries, metadata actions, or writes. If it fails, stop work that depends on CLI access. Check the [org command reference](https://developer.salesforce.com/docs/platform/salesforce-cli-reference/guide/cli_reference_org.html).

## Log in or recover

If an appropriate authorization is missing or expired, follow the [Salesforce `org login web` reference](https://developer.salesforce.com/docs/platform/salesforce-cli-reference/guide/cli_reference_org_login_web.html):

```sh
sf org login web --instance-url '<ORG_LOGIN_URL>' --alias '<ALIAS>'
sf org list limits --target-org '<ALIAS>' --json
```

Use the correct production, sandbox, or My Domain login URL and sign in as the intended user. The browser opens for authentication; close it when finished. An alias identifies a local authorization, so independently verify the org and user rather than trusting the alias name. Avoid changing the default org as a side effect. If the org requires a specific client app, SSO, network, or security policy, follow its administrator's approved process. CLI login uses its own authorization; a hosted MCP connection does not establish CLI access. If a workflow needs both, independently verify that both sessions use the intended org and identity; see [MCP access](salesforce-mcp.md).

Use CLI or supported tools for routine org work; reserve the browser for login, Setup/admin tasks, or UI acceptance. Permission to authenticate and read does not authorize mutations, deployment, or bulk changes. For metadata retrieval, validation, deployment, or CSV data operations, select the relevant [CLI command](https://developer.salesforce.com/docs/platform/salesforce-cli-reference/guide/cli_reference.html), target the correct org explicitly, and ensure the operation is authorized.

## Troubleshooting

| Symptom | Action |
| --- | --- |
| `sf` unavailable or command unknown | Check the [official installation guide](https://developer.salesforce.com/docs/platform/sfdx-setup/guide/sfdx-setup-install-cli.html), PATH, version, and local command help. If installed outside PATH, use its full executable path in the current executor environment. |
| CLI cannot write its local log (macOS/Linux) | If the error names the CLI log file, retry the read command with `SF_DISABLE_LOG_FILE=true` for that invocation. Diagnose other filesystem errors separately. |
| Alias absent or points to the wrong identity | Inspect the private org list, choose the correct alias or authorize the intended org. Do not infer identity from the alias. |
| Listed org fails the read probe | Check expired authorization, correct login authority, connectivity, org API eligibility, and user permissions. Reauthenticate through the approved flow if needed, then rerun the targeted read. |
| Login blocked, SSO loop, or callback error | Check the exact org login URL, browser, SSO and network policy, and any required client-app configuration with the administrator. Do not change org security settings without approval. |
| Read succeeds but a later operation fails | Check that operation's permissions, feature/edition eligibility, flags, target org, and API limits. A limits read is not blanket authorization. |

Record only sanitized evidence: time, environment label, identity match, command type, success/failure, and redacted error. Do not copy tokens, full authorization URLs, raw JSON, or customer data into tickets. If the identity or access cannot be verified, mark the dependent work blocked and report the specific failure.
