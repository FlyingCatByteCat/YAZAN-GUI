/*
 * anti-debug.js  --  deobfuscated (from https://solvr.top/anti-debug.js?v=...)
 *
 * Original: obfuscator.io-style 4-chain string-table packer + flattened control flow.
 * This is a faithful reconstruction of the decoded logic.
 *
 * NO eval / NO network. Behaviour: purely an anti-debugger / anti-inspection module.
 *
 * WARNING: the script is intentionally DESTRUCTIVE — if it concludes that a debugger
 * or devtools is in use it blanks the entire page (html/body innerHTML = ' ').
 * The blanking is kept below as the real logic, wrapped in `killPage()`, so it is
 * easy to inspect or disable. Do not run on pages you care about.
 */
(function () {
    var alreadyArmed = false;

    function killPage() {
        if (alreadyArmed) return;
        alreadyArmed = true;
        try { document.documentElement.innerHTML = ' '; } catch (e) {}
        try { document.body.innerHTML = ' '; } catch (e) {}
    }

    /* Trap 1: block devtools / source-view keyboard shortcuts */
    document.documentElement.addEventListener('keydown', function (ev) {
        var code = ev.keyCode || ev.which;
        if (code === 123) {                       /* F12 */
            ev.preventDefault();
            ev.stopPropagation();
            return false;
        }
        if (ev.ctrlKey && ev.shiftKey && (code === 73 || code === 74 || code === 67)) {
            /* Ctrl+Shift+I / J / C */
            ev.preventDefault();
            ev.stopPropagation();
            return false;
        }
        if (ev.ctrlKey && code === 85) {          /* Ctrl+U */
            ev.preventDefault();
            ev.stopPropagation();
            return false;
        }
    }, true);

    /* Detect touch devices (the devtools-window-size trap is desktop-only) */
    var isTouch = /Mobi|Android|iPhone|iPad|iPod|tablet/i.test(navigator.userAgent) ||
                  (navigator.maxTouchPoints > 1 && /MacIntel/.test(navigator.platform));

    /* Trap 2: devtools detach window-size check (160px threshold) */
    if (!isTouch) {
        var threshold = 160;
        function checkWindowSize() {
            if (window.outerWidth - window.innerWidth > threshold ||
                window.outerHeight - window.innerHeight > threshold) {
                killPage();
            }
        }
        window.addEventListener('resize', checkWindowSize);
        setInterval(checkWindowSize, 500);
    }

    /* Trap 3: elements whose `id` getter fires when an inspector reads them */
    var trapDiv = document.createElement('div');
    Object.defineProperty(trapDiv, 'id', {
        get: function () { killPage(); return ''; }
    });
    var trapImg = new Image();
    Object.defineProperty(trapImg, 'id', {
        get: function () { killPage(); return ''; }
    });

    /* Logging the trap elements triggers the getters (breaks on console.log too) */
    setInterval(function () {
        console.log(trapDiv);
        console.log(trapImg);
    }, 500);

    /* Trap 4: execution-time trap — if the callback takes >100ms a debugger is stepping */
    setInterval(function () {
        var t0 = Date.now();
        if (Date.now() - t0 > 100) killPage();
    }, 500);
})();
/*
 * Decoder tables recovered (for reference):
 *   _dispatchReader X=0x74  xor=0x7b   'shiftKey','preventDefault','userAgent','','which',
 *                                      'resize','console','document','window','now','div','navigator'
 *   _safeCounter    X=0x3c  xor=0x4e   'setInterval','documentElement','log','addEventListener',
 *                                      'Object','stopPropagation','innerHeight','platform','innerWidth',
 *                                      'Date','navigator','preventDefault','body'
 *   _queuePush      X=0xb8  xor=0x7b   'innerHTML','window','document','console','setInterval',
 *                                      'keydown','now','defineProperty','maxTouchPoints','test',
 *                                      'stopPropagation'
 *   _nextLoad       X=0x91  xor=0x7e   'id','outerWidth',' ','Date','keyCode','ctrlKey',
 *                                      'outerHeight','createElement','test','addEventListener',
 *                                      'navigator','log'
 */