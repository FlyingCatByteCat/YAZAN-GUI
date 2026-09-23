# YAZAN GUI

Forensic viewer for the **solvr.top** loader family.

Deobfuscated versions of the scripts are rendered as read-only text in the
viewer. All dangerous behavior is removed:

- `fetch()` / network requests → disabled
- `eval()` → disabled

## Files

| file | origin | disarmed |
|------|--------|----------|
| `scripts/packed-loader.js` | first pasted obfuscator.io-style packer | yes |
| `scripts/main-loader.js` | main loader (fetches `main.js` + `anti-debug.js`), decoded | yes |
| `scripts/deobfuscated_loader.js` | `https://solvr.top/loader.js` (served copy), decoded | yes |
| `scripts/loader_raw.js` | `https://solvr.top/loader.js` (served copy), obfuscated raw | raw |
| `scripts/deobfuscated_anti_debug.js` | `https://solvr.top/anti-debug.js`, decoded (F12/devtools-blanker) | yes |
| `scripts/anti_debug_raw.js` | `https://solvr.top/anti-debug.js`, obfuscated raw | raw |
| `scripts/main_raw.js` | `https://solvr.top/main.js` (1.6 MB custom stack-VM packer) | raw |
| `scripts/MAIN_ANALYSIS.md` | structural analysis of the `main.js` VM packer | n/a |

Everything in the viewer is shown as text only and is never executed.

## Running locally

```bash
python3 -m http.server 8000
# open http://localhost:8000
```