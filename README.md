# YAZAN GUI

Forensic viewer for the **solvr.top** loader family.

Deobfuscated versions of the loaders are rendered as read-only text in the
viewer. All dangerous behavior is removed:

- `fetch()` / network requests → disabled
- `eval()` → disabled

## Files

| file | origin | disarmed |
|------|--------|----------|
| `scripts/packed-loader.js` | obfuscator.io-style packer fetching `main.js` + `anti-debug.js` | yes |
| `scripts/main-loader.js` | main loader fetching `loader.js` | yes |

## Running locally

```bash
python3 -m http.server 8000
# open http://localhost:8000
```