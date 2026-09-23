# main.js — structural analysis (1,591,515 bytes)

`main.js` is the payload that `loader.js` fetches and evals. It is NOT the
obfuscator.io loader chain found in `loader.js`/`anti-debug.js`. It is a fully
custom **stack-machine VM packer**: virtually the entire program is compressed
into bytecode that is interpreted at runtime by a small self-contained
interpreter, so there is no straightforward "decode the strings" recovery.

This document describes the recovered architecture. Full byte-level
decompilation would require a runtime VM emulator and is out of scope for this
viewer.

## Packer layout

```
var _slotFrozen = (((('' + Date.now())['length'] * 940) >>> 4) & 0x7ff);   // = 763
var _frozenStack = (function (_removeSlow) {
    ...
    function _takeFrame(_innerStream, _scaleResolve, _alignedVerify,
                        _buildOuter, _segmentShallow, _rotateTensor, _mainSeed) {
        /* interpreter, ~180 lines */
    }
    ...
})(_slotFrozen);
```

* `_innerStream`  — the compressed program, as a string. Each instruction unit is
  a pair of UTF-16 chars decoded on the fly.
* `_scaleResolve` — a table of "builtin" values (functions / big strings) that
  opcodes index into.
* `_buildOuter` / `_segmentShallow` — sparse initialisation of the interpreter's
  variable array `_movePacket`.
* `_rotateTensor` — an array of closure "thunks" supplied by the caller.

## Instruction decoding

```
var lo = stream.charCodeAt(pos*2);
var hi = stream.charCodeAt(pos*2 + 1);
value = (lo | (hi << 16)) ^ hash(_mainSeed ^ Math.imul(pos+1, 0x9e3779b1));
```

where `hash` is a two-round xorshift (murmur-ish):

```
x = Math.imul(x ^ (x>>>16), 0x45d9f3b); x = Math.imul(x ^ (x>>>16), 0x45d9f3b);
return (x ^ (x>>>16)) >>> 0;
```

This is a stream cipher over the constant seed `0x9e3779b1` + a runtime answer
answer key `_mainSeed`, so even the bytecode is not static readable.

## Interpreter state

```
_movePacket : sparse persistent variable array (like registers / globals)
_nextAlpha  : operand stack
```

## Opcode table (recovered)

| op | meaning |
|----|---------|
| 0  | return undefined |
| 1  | return top of stack |
| 2  | push undefined |
| 3  | unary op on top (see table below) |
| 4  | `obj[key] = value; push(value)` |
| 5  | call function with N args (`fn.apply(undefined, args)`) |
| 6  | build object literal (N key/value pairs) |
| 7  | `push(obj[key])` |
| 8  | `push(_rotateTensor[i]())` — call a host-provided thunk |
| 9  | build array of N elements |
| 10 / 12 | conditional jump (jump if falsy / truthy) |
| 11 | unconditional jump |
| 13 | `push(_scaleResolve[i])` — load builtin |
| 14 | `push(_movePacket[i])` |
| 15 | `_movePacket[i] = pop()` |
| 16 | pop / discard |
| 17 | binary op (see table below) |
| 18 | `fn.apply(this, args)` |
| 19 | `_movePacket[i] = pop(); push(pop)` (store + dup) |
| 20 | dup top |
| 21 | *unused in observed programs* |

**Binary op table (opcode arg → operator):** 5 `+` · 10 `-` · 8 `*` · 13 `/` ·
12 `%` · 2 `**` · 17 `&` · 7 `|` · 0 `^` · 18 `<<` · 16 `>>` · 9 `>>>` ·
3 `<` · 21 `<=` · 20 `>` · 14 `>=` · 6 `==` · 1 `!=` · 11 `===` · 15 `!==` ·
19 `instanceof` · 4 `in`

**Unary op table (opcode arg → op):** 3 `-x` · 4 `+x` · 2 `!x` · 1 `~x` ·
5 `typeof x` · 0 `void x`

## Call sites

`_frozenStack(...)` is invoked 250+ times in the file, each time with different
inline `_scaleResolve` tables, seed expressions and constant arrays. Every
instance is a separate tiny compiled program. A handful of the largest ones
build the actual application logic; the rest are decoy/noise programs guarded by
dead-condition control flow.

Other obfuscation techniques layered on top:
* `_frozenPush(a, b)` ≡ `a[b]` — a property-access macro.
* Every branch is guarded by a false `if` built from
  `Date.now()`, `Math.random()`, `Array.from({length:N}).filter(...).length`
  arithmetic; the "real" code always sits in the constant-false arm, so the
  hidden `else` branch is inert noise.
* Inline flattened-switch state machines with XOR-composed, essentially
  untrackable numeric state (the `_readerReduce`, `_limitSync`,
  `_edgeAttach`, `_widthShift`, `_scanFrame` … mini-VMs that only ever
  terminate because every condition is statically resolvable to `-1`).
* `Math.imul` roundtrips and `>>> 0` are the only variable-width arithmetic.

## Observable high-level behaviours (from surviving literal fragments)

* Boots through an async IIFE; calls an internal `_reduceDecoder()` /
  `_targetInit()` sequence, then binds more async loaders.
* Fetches additional remote code: an await chain
  `_pathActive(_sliceDeep + <string> + _looseBuilder)` — i.e. it loads more
  endpoints (the visible `/dv3/`-style path scheme) at runtime.
* Installs a `MutationObserver` over the page root
  (`childList: true, subtree: true`) which re-triggers
  an internal re-lock helper (`_lockPrivate`) when the page mutates
  (anti-script-removal / anti-analysis).
* Uses `requestAnimationFrame`-driven loops writing to a decoy render object.
* Constructs `new Image()` probes, `Web Worker`-style dispatch
  (`_pullLimit[...](_publicResolver, _lazyGet)`), and periodic re-validation
  against an anti-cheat endpoint, keeping an armed flag (`_sharedCursor`).

## Honest status

Reconstructing this file back into readable source is feasible in principle
(write a small Python/JS interpreter for the 22-op VM, run every `_frozenStack`
program with its real argument literals, then de-noise the emitted code) but —
because the bytecode is encrypted against a runtime key and every call site
carries its own builtin table — it is a multi-hour reverse-engineering task.
As shipped, we provide the obfuscated raw file (never executed in this viewer)
and this structural report instead.