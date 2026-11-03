const __vite__mapDeps=(i,m=__vite__mapDeps,d=(m.f||(m.f=["./ComboA11ySeoDemo-CwcBLilK.js","./DemoLayout-yttEaT40.js","./ComboCacheDemo-CHWqD5PJ.js","./ComboEnginePerfDemo-BKMkcCI2.js","./ComboErrorResilienceDemo-C8vFSIs2.js","./ComboInteractionOverlayDemo-COQayuTz.js","./ComboPerformanceDemo-BMj088OY.js","./ComboResponsiveSeoWebPDemo-qLPF8l8t.js","./ComboViewportInteractionDemo-CAZthHBd.js","./ComboVisualEffectsDemo-2Wi9CSdg.js","./ComboVisualEffectsPlusDemo-DN4-8xN-.js","./DependencyResolverDemo-DAJ2HYnt.js","./advanced-CevqN9nb.js","./EngineInfraDemo-Dm3ey2-g.js","./PerformanceMonitoringDemo-C81t1p88.js","./PluginHotReloadDemo-CiUyD3gL.js","./PluginSandboxDemo-j20Alu6e.js","./VirtualGridDemo-CO2VigSe.js","./index.esm-CHrSKh-9.js","./VirtualHorizontalListDemo-CfRi_Ra_.js","./VirtualVerticalListDemo-DrKUAc9o.js"])))=>i.map(i=>d[i]);
var rm=Object.defineProperty;var im=(e,t,n)=>t in e?rm(e,t,{enumerable:!0,configurable:!0,writable:!0,value:n}):e[t]=n;var vl=(e,t,n)=>im(e,typeof t!="symbol"?t+"":t,n);function sm(e,t){for(var n=0;n<t.length;n++){const o=t[n];if(typeof o!="string"&&!Array.isArray(o)){for(const r in o)if(r!=="default"&&!(r in e)){const i=Object.getOwnPropertyDescriptor(o,r);i&&Object.defineProperty(e,r,i.get?i:{enumerable:!0,get:()=>o[r]})}}}return Object.freeze(Object.defineProperty(e,Symbol.toStringTag,{value:"Module"}))}(function(){const t=document.createElement("link").relList;if(t&&t.supports&&t.supports("modulepreload"))return;for(const r of document.querySelectorAll('link[rel="modulepreload"]'))o(r);new MutationObserver(r=>{for(const i of r)if(i.type==="childList")for(const s of i.addedNodes)s.tagName==="LINK"&&s.rel==="modulepreload"&&o(s)}).observe(document,{childList:!0,subtree:!0});function n(r){const i={};return r.integrity&&(i.integrity=r.integrity),r.referrerPolicy&&(i.referrerPolicy=r.referrerPolicy),r.crossOrigin==="use-credentials"?i.credentials="include":r.crossOrigin==="anonymous"?i.credentials="omit":i.credentials="same-origin",i}function o(r){if(r.ep)return;r.ep=!0;const i=n(r);fetch(r.href,i)}})();function am(e){return e&&e.__esModule&&Object.prototype.hasOwnProperty.call(e,"default")?e.default:e}var lu={exports:{}},ri={},cu={exports:{}},N={};/**
 * @license React
 * react.production.min.js
 *
 * Copyright (c) Facebook, Inc. and its affiliates.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */var Fo=Symbol.for("react.element"),lm=Symbol.for("react.portal"),cm=Symbol.for("react.fragment"),um=Symbol.for("react.strict_mode"),dm=Symbol.for("react.profiler"),pm=Symbol.for("react.provider"),mm=Symbol.for("react.context"),gm=Symbol.for("react.forward_ref"),fm=Symbol.for("react.suspense"),hm=Symbol.for("react.memo"),ym=Symbol.for("react.lazy"),wl=Symbol.iterator;function vm(e){return e===null||typeof e!="object"?null:(e=wl&&e[wl]||e["@@iterator"],typeof e=="function"?e:null)}var uu={isMounted:function(){return!1},enqueueForceUpdate:function(){},enqueueReplaceState:function(){},enqueueSetState:function(){}},du=Object.assign,pu={};function Wn(e,t,n){this.props=e,this.context=t,this.refs=pu,this.updater=n||uu}Wn.prototype.isReactComponent={};Wn.prototype.setState=function(e,t){if(typeof e!="object"&&typeof e!="function"&&e!=null)throw Error("setState(...): takes an object of state variables to update or a function which returns an object of state variables.");this.updater.enqueueSetState(this,e,t,"setState")};Wn.prototype.forceUpdate=function(e){this.updater.enqueueForceUpdate(this,e,"forceUpdate")};function mu(){}mu.prototype=Wn.prototype;function pa(e,t,n){this.props=e,this.context=t,this.refs=pu,this.updater=n||uu}var ma=pa.prototype=new mu;ma.constructor=pa;du(ma,Wn.prototype);ma.isPureReactComponent=!0;var xl=Array.isArray,gu=Object.prototype.hasOwnProperty,ga={current:null},fu={key:!0,ref:!0,__self:!0,__source:!0};function hu(e,t,n){var o,r={},i=null,s=null;if(t!=null)for(o in t.ref!==void 0&&(s=t.ref),t.key!==void 0&&(i=""+t.key),t)gu.call(t,o)&&!fu.hasOwnProperty(o)&&(r[o]=t[o]);var a=arguments.length-2;if(a===1)r.children=n;else if(1<a){for(var l=Array(a),c=0;c<a;c++)l[c]=arguments[c+2];r.children=l}if(e&&e.defaultProps)for(o in a=e.defaultProps,a)r[o]===void 0&&(r[o]=a[o]);return{$$typeof:Fo,type:e,key:i,ref:s,props:r,_owner:ga.current}}function wm(e,t){return{$$typeof:Fo,type:e.type,key:t,ref:e.ref,props:e.props,_owner:e._owner}}function fa(e){return typeof e=="object"&&e!==null&&e.$$typeof===Fo}function xm(e){var t={"=":"=0",":":"=2"};return"$"+e.replace(/[=:]/g,function(n){return t[n]})}var bl=/\/+/g;function $i(e,t){return typeof e=="object"&&e!==null&&e.key!=null?xm(""+e.key):t.toString(36)}function vr(e,t,n,o,r){var i=typeof e;(i==="undefined"||i==="boolean")&&(e=null);var s=!1;if(e===null)s=!0;else switch(i){case"string":case"number":s=!0;break;case"object":switch(e.$$typeof){case Fo:case lm:s=!0}}if(s)return s=e,r=r(s),e=o===""?"."+$i(s,0):o,xl(r)?(n="",e!=null&&(n=e.replace(bl,"$&/")+"/"),vr(r,t,n,"",function(c){return c})):r!=null&&(fa(r)&&(r=wm(r,n+(!r.key||s&&s.key===r.key?"":(""+r.key).replace(bl,"$&/")+"/")+e)),t.push(r)),1;if(s=0,o=o===""?".":o+":",xl(e))for(var a=0;a<e.length;a++){i=e[a];var l=o+$i(i,a);s+=vr(i,t,n,l,r)}else if(l=vm(e),typeof l=="function")for(e=l.call(e),a=0;!(i=e.next()).done;)i=i.value,l=o+$i(i,a++),s+=vr(i,t,n,l,r);else if(i==="object")throw t=String(e),Error("Objects are not valid as a React child (found: "+(t==="[object Object]"?"object with keys {"+Object.keys(e).join(", ")+"}":t)+"). If you meant to render a collection of children, use an array instead.");return s}function Ko(e,t,n){if(e==null)return e;var o=[],r=0;return vr(e,o,"","",function(i){return t.call(n,i,r++)}),o}function bm(e){if(e._status===-1){var t=e._result;t=t(),t.then(function(n){(e._status===0||e._status===-1)&&(e._status=1,e._result=n)},function(n){(e._status===0||e._status===-1)&&(e._status=2,e._result=n)}),e._status===-1&&(e._status=0,e._result=t)}if(e._status===1)return e._result.default;throw e._result}var Pe={current:null},wr={transition:null},Pm={ReactCurrentDispatcher:Pe,ReactCurrentBatchConfig:wr,ReactCurrentOwner:ga};function yu(){throw Error("act(...) is not supported in production builds of React.")}N.Children={map:Ko,forEach:function(e,t,n){Ko(e,function(){t.apply(this,arguments)},n)},count:function(e){var t=0;return Ko(e,function(){t++}),t},toArray:function(e){return Ko(e,function(t){return t})||[]},only:function(e){if(!fa(e))throw Error("React.Children.only expected to receive a single React element child.");return e}};N.Component=Wn;N.Fragment=cm;N.Profiler=dm;N.PureComponent=pa;N.StrictMode=um;N.Suspense=fm;N.__SECRET_INTERNALS_DO_NOT_USE_OR_YOU_WILL_BE_FIRED=Pm;N.act=yu;N.cloneElement=function(e,t,n){if(e==null)throw Error("React.cloneElement(...): The argument must be a React element, but you passed "+e+".");var o=du({},e.props),r=e.key,i=e.ref,s=e._owner;if(t!=null){if(t.ref!==void 0&&(i=t.ref,s=ga.current),t.key!==void 0&&(r=""+t.key),e.type&&e.type.defaultProps)var a=e.type.defaultProps;for(l in t)gu.call(t,l)&&!fu.hasOwnProperty(l)&&(o[l]=t[l]===void 0&&a!==void 0?a[l]:t[l])}var l=arguments.length-2;if(l===1)o.children=n;else if(1<l){a=Array(l);for(var c=0;c<l;c++)a[c]=arguments[c+2];o.children=a}return{$$typeof:Fo,type:e.type,key:r,ref:i,props:o,_owner:s}};N.createContext=function(e){return e={$$typeof:mm,_currentValue:e,_currentValue2:e,_threadCount:0,Provider:null,Consumer:null,_defaultValue:null,_globalName:null},e.Provider={$$typeof:pm,_context:e},e.Consumer=e};N.createElement=hu;N.createFactory=function(e){var t=hu.bind(null,e);return t.type=e,t};N.createRef=function(){return{current:null}};N.forwardRef=function(e){return{$$typeof:gm,render:e}};N.isValidElement=fa;N.lazy=function(e){return{$$typeof:ym,_payload:{_status:-1,_result:e},_init:bm}};N.memo=function(e,t){return{$$typeof:hm,type:e,compare:t===void 0?null:t}};N.startTransition=function(e){var t=wr.transition;wr.transition={};try{e()}finally{wr.transition=t}};N.unstable_act=yu;N.useCallback=function(e,t){return Pe.current.useCallback(e,t)};N.useContext=function(e){return Pe.current.useContext(e)};N.useDebugValue=function(){};N.useDeferredValue=function(e){return Pe.current.useDeferredValue(e)};N.useEffect=function(e,t){return Pe.current.useEffect(e,t)};N.useId=function(){return Pe.current.useId()};N.useImperativeHandle=function(e,t,n){return Pe.current.useImperativeHandle(e,t,n)};N.useInsertionEffect=function(e,t){return Pe.current.useInsertionEffect(e,t)};N.useLayoutEffect=function(e,t){return Pe.current.useLayoutEffect(e,t)};N.useMemo=function(e,t){return Pe.current.useMemo(e,t)};N.useReducer=function(e,t,n){return Pe.current.useReducer(e,t,n)};N.useRef=function(e){return Pe.current.useRef(e)};N.useState=function(e){return Pe.current.useState(e)};N.useSyncExternalStore=function(e,t,n){return Pe.current.useSyncExternalStore(e,t,n)};N.useTransition=function(){return Pe.current.useTransition()};N.version="18.3.1";cu.exports=N;var x=cu.exports;const T=am(x),$m=sm({__proto__:null,default:T},[x]);/**
 * @license React
 * react-jsx-runtime.production.min.js
 *
 * Copyright (c) Facebook, Inc. and its affiliates.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */var Sm=x,Cm=Symbol.for("react.element"),Lm=Symbol.for("react.fragment"),km=Object.prototype.hasOwnProperty,Im=Sm.__SECRET_INTERNALS_DO_NOT_USE_OR_YOU_WILL_BE_FIRED.ReactCurrentOwner,_m={key:!0,ref:!0,__self:!0,__source:!0};function vu(e,t,n){var o,r={},i=null,s=null;n!==void 0&&(i=""+n),t.key!==void 0&&(i=""+t.key),t.ref!==void 0&&(s=t.ref);for(o in t)km.call(t,o)&&!_m.hasOwnProperty(o)&&(r[o]=t[o]);if(e&&e.defaultProps)for(o in t=e.defaultProps,t)r[o]===void 0&&(r[o]=t[o]);return{$$typeof:Cm,type:e,key:i,ref:s,props:r,_owner:Im.current}}ri.Fragment=Lm;ri.jsx=vu;ri.jsxs=vu;lu.exports=ri;var m=lu.exports,wu={exports:{}},Oe={},xu={exports:{}},bu={};/**
 * @license React
 * scheduler.production.min.js
 *
 * Copyright (c) Facebook, Inc. and its affiliates.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */(function(e){function t(_,R){var D=_.length;_.push(R);e:for(;0<D;){var A=D-1>>>1,B=_[A];if(0<r(B,R))_[A]=R,_[D]=B,D=A;else break e}}function n(_){return _.length===0?null:_[0]}function o(_){if(_.length===0)return null;var R=_[0],D=_.pop();if(D!==R){_[0]=D;e:for(var A=0,B=_.length,Me=B>>>1;A<Me;){var ve=2*(A+1)-1,ot=_[ve],rt=ve+1,it=_[rt];if(0>r(ot,D))rt<B&&0>r(it,ot)?(_[A]=it,_[rt]=D,A=rt):(_[A]=ot,_[ve]=D,A=ve);else if(rt<B&&0>r(it,D))_[A]=it,_[rt]=D,A=rt;else break e}}return R}function r(_,R){var D=_.sortIndex-R.sortIndex;return D!==0?D:_.id-R.id}if(typeof performance=="object"&&typeof performance.now=="function"){var i=performance;e.unstable_now=function(){return i.now()}}else{var s=Date,a=s.now();e.unstable_now=function(){return s.now()-a}}var l=[],c=[],u=1,d=null,p=3,f=!1,v=!1,w=!1,b=typeof setTimeout=="function"?setTimeout:null,h=typeof clearTimeout=="function"?clearTimeout:null,g=typeof setImmediate<"u"?setImmediate:null;typeof navigator<"u"&&navigator.scheduling!==void 0&&navigator.scheduling.isInputPending!==void 0&&navigator.scheduling.isInputPending.bind(navigator.scheduling);function y(_){for(var R=n(c);R!==null;){if(R.callback===null)o(c);else if(R.startTime<=_)o(c),R.sortIndex=R.expirationTime,t(l,R);else break;R=n(c)}}function P(_){if(w=!1,y(_),!v)if(n(l)!==null)v=!0,me($);else{var R=n(c);R!==null&&ee(P,R.startTime-_)}}function $(_,R){v=!1,w&&(w=!1,h(k),k=-1),f=!0;var D=p;try{for(y(R),d=n(l);d!==null&&(!(d.expirationTime>R)||_&&!F());){var A=d.callback;if(typeof A=="function"){d.callback=null,p=d.priorityLevel;var B=A(d.expirationTime<=R);R=e.unstable_now(),typeof B=="function"?d.callback=B:d===n(l)&&o(l),y(R)}else o(l);d=n(l)}if(d!==null)var Me=!0;else{var ve=n(c);ve!==null&&ee(P,ve.startTime-R),Me=!1}return Me}finally{d=null,p=D,f=!1}}var C=!1,L=null,k=-1,M=5,E=-1;function F(){return!(e.unstable_now()-E<M)}function H(){if(L!==null){var _=e.unstable_now();E=_;var R=!0;try{R=L(!0,_)}finally{R?O():(C=!1,L=null)}}else C=!1}var O;if(typeof g=="function")O=function(){g(H)};else if(typeof MessageChannel<"u"){var j=new MessageChannel,V=j.port2;j.port1.onmessage=H,O=function(){V.postMessage(null)}}else O=function(){b(H,0)};function me(_){L=_,C||(C=!0,O())}function ee(_,R){k=b(function(){_(e.unstable_now())},R)}e.unstable_IdlePriority=5,e.unstable_ImmediatePriority=1,e.unstable_LowPriority=4,e.unstable_NormalPriority=3,e.unstable_Profiling=null,e.unstable_UserBlockingPriority=2,e.unstable_cancelCallback=function(_){_.callback=null},e.unstable_continueExecution=function(){v||f||(v=!0,me($))},e.unstable_forceFrameRate=function(_){0>_||125<_?console.error("forceFrameRate takes a positive int between 0 and 125, forcing frame rates higher than 125 fps is not supported"):M=0<_?Math.floor(1e3/_):5},e.unstable_getCurrentPriorityLevel=function(){return p},e.unstable_getFirstCallbackNode=function(){return n(l)},e.unstable_next=function(_){switch(p){case 1:case 2:case 3:var R=3;break;default:R=p}var D=p;p=R;try{return _()}finally{p=D}},e.unstable_pauseExecution=function(){},e.unstable_requestPaint=function(){},e.unstable_runWithPriority=function(_,R){switch(_){case 1:case 2:case 3:case 4:case 5:break;default:_=3}var D=p;p=_;try{return R()}finally{p=D}},e.unstable_scheduleCallback=function(_,R,D){var A=e.unstable_now();switch(typeof D=="object"&&D!==null?(D=D.delay,D=typeof D=="number"&&0<D?A+D:A):D=A,_){case 1:var B=-1;break;case 2:B=250;break;case 5:B=1073741823;break;case 4:B=1e4;break;default:B=5e3}return B=D+B,_={id:u++,callback:R,priorityLevel:_,startTime:D,expirationTime:B,sortIndex:-1},D>A?(_.sortIndex=D,t(c,_),n(l)===null&&_===n(c)&&(w?(h(k),k=-1):w=!0,ee(P,D-A))):(_.sortIndex=B,t(l,_),v||f||(v=!0,me($))),_},e.unstable_shouldYield=F,e.unstable_wrapCallback=function(_){var R=p;return function(){var D=p;p=R;try{return _.apply(this,arguments)}finally{p=D}}}})(bu);xu.exports=bu;var Em=xu.exports;/**
 * @license React
 * react-dom.production.min.js
 *
 * Copyright (c) Facebook, Inc. and its affiliates.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */var Rm=x,De=Em;function I(e){for(var t="https://reactjs.org/docs/error-decoder.html?invariant="+e,n=1;n<arguments.length;n++)t+="&args[]="+encodeURIComponent(arguments[n]);return"Minified React error #"+e+"; visit "+t+" for the full message or use the non-minified dev environment for full errors and additional helpful warnings."}var Pu=new Set,Po={};function ln(e,t){jn(e,t),jn(e+"Capture",t)}function jn(e,t){for(Po[e]=t,e=0;e<t.length;e++)Pu.add(t[e])}var pt=!(typeof window>"u"||typeof window.document>"u"||typeof window.document.createElement>"u"),cs=Object.prototype.hasOwnProperty,zm=/^[:A-Z_a-z\u00C0-\u00D6\u00D8-\u00F6\u00F8-\u02FF\u0370-\u037D\u037F-\u1FFF\u200C-\u200D\u2070-\u218F\u2C00-\u2FEF\u3001-\uD7FF\uF900-\uFDCF\uFDF0-\uFFFD][:A-Z_a-z\u00C0-\u00D6\u00D8-\u00F6\u00F8-\u02FF\u0370-\u037D\u037F-\u1FFF\u200C-\u200D\u2070-\u218F\u2C00-\u2FEF\u3001-\uD7FF\uF900-\uFDCF\uFDF0-\uFFFD\-.0-9\u00B7\u0300-\u036F\u203F-\u2040]*$/,Pl={},$l={};function Dm(e){return cs.call($l,e)?!0:cs.call(Pl,e)?!1:zm.test(e)?$l[e]=!0:(Pl[e]=!0,!1)}function Om(e,t,n,o){if(n!==null&&n.type===0)return!1;switch(typeof t){case"function":case"symbol":return!0;case"boolean":return o?!1:n!==null?!n.acceptsBooleans:(e=e.toLowerCase().slice(0,5),e!=="data-"&&e!=="aria-");default:return!1}}function jm(e,t,n,o){if(t===null||typeof t>"u"||Om(e,t,n,o))return!0;if(o)return!1;if(n!==null)switch(n.type){case 3:return!t;case 4:return t===!1;case 5:return isNaN(t);case 6:return isNaN(t)||1>t}return!1}function $e(e,t,n,o,r,i,s){this.acceptsBooleans=t===2||t===3||t===4,this.attributeName=o,this.attributeNamespace=r,this.mustUseProperty=n,this.propertyName=e,this.type=t,this.sanitizeURL=i,this.removeEmptyString=s}var pe={};"children dangerouslySetInnerHTML defaultValue defaultChecked innerHTML suppressContentEditableWarning suppressHydrationWarning style".split(" ").forEach(function(e){pe[e]=new $e(e,0,!1,e,null,!1,!1)});[["acceptCharset","accept-charset"],["className","class"],["htmlFor","for"],["httpEquiv","http-equiv"]].forEach(function(e){var t=e[0];pe[t]=new $e(t,1,!1,e[1],null,!1,!1)});["contentEditable","draggable","spellCheck","value"].forEach(function(e){pe[e]=new $e(e,2,!1,e.toLowerCase(),null,!1,!1)});["autoReverse","externalResourcesRequired","focusable","preserveAlpha"].forEach(function(e){pe[e]=new $e(e,2,!1,e,null,!1,!1)});"allowFullScreen async autoFocus autoPlay controls default defer disabled disablePictureInPicture disableRemotePlayback formNoValidate hidden loop noModule noValidate open playsInline readOnly required reversed scoped seamless itemScope".split(" ").forEach(function(e){pe[e]=new $e(e,3,!1,e.toLowerCase(),null,!1,!1)});["checked","multiple","muted","selected"].forEach(function(e){pe[e]=new $e(e,3,!0,e,null,!1,!1)});["capture","download"].forEach(function(e){pe[e]=new $e(e,4,!1,e,null,!1,!1)});["cols","rows","size","span"].forEach(function(e){pe[e]=new $e(e,6,!1,e,null,!1,!1)});["rowSpan","start"].forEach(function(e){pe[e]=new $e(e,5,!1,e.toLowerCase(),null,!1,!1)});var ha=/[\-:]([a-z])/g;function ya(e){return e[1].toUpperCase()}"accent-height alignment-baseline arabic-form baseline-shift cap-height clip-path clip-rule color-interpolation color-interpolation-filters color-profile color-rendering dominant-baseline enable-background fill-opacity fill-rule flood-color flood-opacity font-family font-size font-size-adjust font-stretch font-style font-variant font-weight glyph-name glyph-orientation-horizontal glyph-orientation-vertical horiz-adv-x horiz-origin-x image-rendering letter-spacing lighting-color marker-end marker-mid marker-start overline-position overline-thickness paint-order panose-1 pointer-events rendering-intent shape-rendering stop-color stop-opacity strikethrough-position strikethrough-thickness stroke-dasharray stroke-dashoffset stroke-linecap stroke-linejoin stroke-miterlimit stroke-opacity stroke-width text-anchor text-decoration text-rendering underline-position underline-thickness unicode-bidi unicode-range units-per-em v-alphabetic v-hanging v-ideographic v-mathematical vector-effect vert-adv-y vert-origin-x vert-origin-y word-spacing writing-mode xmlns:xlink x-height".split(" ").forEach(function(e){var t=e.replace(ha,ya);pe[t]=new $e(t,1,!1,e,null,!1,!1)});"xlink:actuate xlink:arcrole xlink:role xlink:show xlink:title xlink:type".split(" ").forEach(function(e){var t=e.replace(ha,ya);pe[t]=new $e(t,1,!1,e,"http://www.w3.org/1999/xlink",!1,!1)});["xml:base","xml:lang","xml:space"].forEach(function(e){var t=e.replace(ha,ya);pe[t]=new $e(t,1,!1,e,"http://www.w3.org/XML/1998/namespace",!1,!1)});["tabIndex","crossOrigin"].forEach(function(e){pe[e]=new $e(e,1,!1,e.toLowerCase(),null,!1,!1)});pe.xlinkHref=new $e("xlinkHref",1,!1,"xlink:href","http://www.w3.org/1999/xlink",!0,!1);["src","href","action","formAction"].forEach(function(e){pe[e]=new $e(e,1,!1,e.toLowerCase(),null,!0,!0)});function va(e,t,n,o){var r=pe.hasOwnProperty(t)?pe[t]:null;(r!==null?r.type!==0:o||!(2<t.length)||t[0]!=="o"&&t[0]!=="O"||t[1]!=="n"&&t[1]!=="N")&&(jm(t,n,r,o)&&(n=null),o||r===null?Dm(t)&&(n===null?e.removeAttribute(t):e.setAttribute(t,""+n)):r.mustUseProperty?e[r.propertyName]=n===null?r.type===3?!1:"":n:(t=r.attributeName,o=r.attributeNamespace,n===null?e.removeAttribute(t):(r=r.type,n=r===3||r===4&&n===!0?"":""+n,o?e.setAttributeNS(o,t,n):e.setAttribute(t,n))))}var ht=Rm.__SECRET_INTERNALS_DO_NOT_USE_OR_YOU_WILL_BE_FIRED,Yo=Symbol.for("react.element"),fn=Symbol.for("react.portal"),hn=Symbol.for("react.fragment"),wa=Symbol.for("react.strict_mode"),us=Symbol.for("react.profiler"),$u=Symbol.for("react.provider"),Su=Symbol.for("react.context"),xa=Symbol.for("react.forward_ref"),ds=Symbol.for("react.suspense"),ps=Symbol.for("react.suspense_list"),ba=Symbol.for("react.memo"),bt=Symbol.for("react.lazy"),Cu=Symbol.for("react.offscreen"),Sl=Symbol.iterator;function Zn(e){return e===null||typeof e!="object"?null:(e=Sl&&e[Sl]||e["@@iterator"],typeof e=="function"?e:null)}var J=Object.assign,Si;function so(e){if(Si===void 0)try{throw Error()}catch(n){var t=n.stack.trim().match(/\n( *(at )?)/);Si=t&&t[1]||""}return`
`+Si+e}var Ci=!1;function Li(e,t){if(!e||Ci)return"";Ci=!0;var n=Error.prepareStackTrace;Error.prepareStackTrace=void 0;try{if(t)if(t=function(){throw Error()},Object.defineProperty(t.prototype,"props",{set:function(){throw Error()}}),typeof Reflect=="object"&&Reflect.construct){try{Reflect.construct(t,[])}catch(c){var o=c}Reflect.construct(e,[],t)}else{try{t.call()}catch(c){o=c}e.call(t.prototype)}else{try{throw Error()}catch(c){o=c}e()}}catch(c){if(c&&o&&typeof c.stack=="string"){for(var r=c.stack.split(`
`),i=o.stack.split(`
`),s=r.length-1,a=i.length-1;1<=s&&0<=a&&r[s]!==i[a];)a--;for(;1<=s&&0<=a;s--,a--)if(r[s]!==i[a]){if(s!==1||a!==1)do if(s--,a--,0>a||r[s]!==i[a]){var l=`
`+r[s].replace(" at new "," at ");return e.displayName&&l.includes("<anonymous>")&&(l=l.replace("<anonymous>",e.displayName)),l}while(1<=s&&0<=a);break}}}finally{Ci=!1,Error.prepareStackTrace=n}return(e=e?e.displayName||e.name:"")?so(e):""}function Mm(e){switch(e.tag){case 5:return so(e.type);case 16:return so("Lazy");case 13:return so("Suspense");case 19:return so("SuspenseList");case 0:case 2:case 15:return e=Li(e.type,!1),e;case 11:return e=Li(e.type.render,!1),e;case 1:return e=Li(e.type,!0),e;default:return""}}function ms(e){if(e==null)return null;if(typeof e=="function")return e.displayName||e.name||null;if(typeof e=="string")return e;switch(e){case hn:return"Fragment";case fn:return"Portal";case us:return"Profiler";case wa:return"StrictMode";case ds:return"Suspense";case ps:return"SuspenseList"}if(typeof e=="object")switch(e.$$typeof){case Su:return(e.displayName||"Context")+".Consumer";case $u:return(e._context.displayName||"Context")+".Provider";case xa:var t=e.render;return e=e.displayName,e||(e=t.displayName||t.name||"",e=e!==""?"ForwardRef("+e+")":"ForwardRef"),e;case ba:return t=e.displayName||null,t!==null?t:ms(e.type)||"Memo";case bt:t=e._payload,e=e._init;try{return ms(e(t))}catch{}}return null}function Tm(e){var t=e.type;switch(e.tag){case 24:return"Cache";case 9:return(t.displayName||"Context")+".Consumer";case 10:return(t._context.displayName||"Context")+".Provider";case 18:return"DehydratedFragment";case 11:return e=t.render,e=e.displayName||e.name||"",t.displayName||(e!==""?"ForwardRef("+e+")":"ForwardRef");case 7:return"Fragment";case 5:return t;case 4:return"Portal";case 3:return"Root";case 6:return"Text";case 16:return ms(t);case 8:return t===wa?"StrictMode":"Mode";case 22:return"Offscreen";case 12:return"Profiler";case 21:return"Scope";case 13:return"Suspense";case 19:return"SuspenseList";case 25:return"TracingMarker";case 1:case 0:case 17:case 2:case 14:case 15:if(typeof t=="function")return t.displayName||t.name||null;if(typeof t=="string")return t}return null}function Nt(e){switch(typeof e){case"boolean":case"number":case"string":case"undefined":return e;case"object":return e;default:return""}}function Lu(e){var t=e.type;return(e=e.nodeName)&&e.toLowerCase()==="input"&&(t==="checkbox"||t==="radio")}function Nm(e){var t=Lu(e)?"checked":"value",n=Object.getOwnPropertyDescriptor(e.constructor.prototype,t),o=""+e[t];if(!e.hasOwnProperty(t)&&typeof n<"u"&&typeof n.get=="function"&&typeof n.set=="function"){var r=n.get,i=n.set;return Object.defineProperty(e,t,{configurable:!0,get:function(){return r.call(this)},set:function(s){o=""+s,i.call(this,s)}}),Object.defineProperty(e,t,{enumerable:n.enumerable}),{getValue:function(){return o},setValue:function(s){o=""+s},stopTracking:function(){e._valueTracker=null,delete e[t]}}}}function Xo(e){e._valueTracker||(e._valueTracker=Nm(e))}function ku(e){if(!e)return!1;var t=e._valueTracker;if(!t)return!0;var n=t.getValue(),o="";return e&&(o=Lu(e)?e.checked?"true":"false":e.value),e=o,e!==n?(t.setValue(e),!0):!1}function Er(e){if(e=e||(typeof document<"u"?document:void 0),typeof e>"u")return null;try{return e.activeElement||e.body}catch{return e.body}}function gs(e,t){var n=t.checked;return J({},t,{defaultChecked:void 0,defaultValue:void 0,value:void 0,checked:n??e._wrapperState.initialChecked})}function Cl(e,t){var n=t.defaultValue==null?"":t.defaultValue,o=t.checked!=null?t.checked:t.defaultChecked;n=Nt(t.value!=null?t.value:n),e._wrapperState={initialChecked:o,initialValue:n,controlled:t.type==="checkbox"||t.type==="radio"?t.checked!=null:t.value!=null}}function Iu(e,t){t=t.checked,t!=null&&va(e,"checked",t,!1)}function fs(e,t){Iu(e,t);var n=Nt(t.value),o=t.type;if(n!=null)o==="number"?(n===0&&e.value===""||e.value!=n)&&(e.value=""+n):e.value!==""+n&&(e.value=""+n);else if(o==="submit"||o==="reset"){e.removeAttribute("value");return}t.hasOwnProperty("value")?hs(e,t.type,n):t.hasOwnProperty("defaultValue")&&hs(e,t.type,Nt(t.defaultValue)),t.checked==null&&t.defaultChecked!=null&&(e.defaultChecked=!!t.defaultChecked)}function Ll(e,t,n){if(t.hasOwnProperty("value")||t.hasOwnProperty("defaultValue")){var o=t.type;if(!(o!=="submit"&&o!=="reset"||t.value!==void 0&&t.value!==null))return;t=""+e._wrapperState.initialValue,n||t===e.value||(e.value=t),e.defaultValue=t}n=e.name,n!==""&&(e.name=""),e.defaultChecked=!!e._wrapperState.initialChecked,n!==""&&(e.name=n)}function hs(e,t,n){(t!=="number"||Er(e.ownerDocument)!==e)&&(n==null?e.defaultValue=""+e._wrapperState.initialValue:e.defaultValue!==""+n&&(e.defaultValue=""+n))}var ao=Array.isArray;function kn(e,t,n,o){if(e=e.options,t){t={};for(var r=0;r<n.length;r++)t["$"+n[r]]=!0;for(n=0;n<e.length;n++)r=t.hasOwnProperty("$"+e[n].value),e[n].selected!==r&&(e[n].selected=r),r&&o&&(e[n].defaultSelected=!0)}else{for(n=""+Nt(n),t=null,r=0;r<e.length;r++){if(e[r].value===n){e[r].selected=!0,o&&(e[r].defaultSelected=!0);return}t!==null||e[r].disabled||(t=e[r])}t!==null&&(t.selected=!0)}}function ys(e,t){if(t.dangerouslySetInnerHTML!=null)throw Error(I(91));return J({},t,{value:void 0,defaultValue:void 0,children:""+e._wrapperState.initialValue})}function kl(e,t){var n=t.value;if(n==null){if(n=t.children,t=t.defaultValue,n!=null){if(t!=null)throw Error(I(92));if(ao(n)){if(1<n.length)throw Error(I(93));n=n[0]}t=n}t==null&&(t=""),n=t}e._wrapperState={initialValue:Nt(n)}}function _u(e,t){var n=Nt(t.value),o=Nt(t.defaultValue);n!=null&&(n=""+n,n!==e.value&&(e.value=n),t.defaultValue==null&&e.defaultValue!==n&&(e.defaultValue=n)),o!=null&&(e.defaultValue=""+o)}function Il(e){var t=e.textContent;t===e._wrapperState.initialValue&&t!==""&&t!==null&&(e.value=t)}function Eu(e){switch(e){case"svg":return"http://www.w3.org/2000/svg";case"math":return"http://www.w3.org/1998/Math/MathML";default:return"http://www.w3.org/1999/xhtml"}}function vs(e,t){return e==null||e==="http://www.w3.org/1999/xhtml"?Eu(t):e==="http://www.w3.org/2000/svg"&&t==="foreignObject"?"http://www.w3.org/1999/xhtml":e}var Zo,Ru=function(e){return typeof MSApp<"u"&&MSApp.execUnsafeLocalFunction?function(t,n,o,r){MSApp.execUnsafeLocalFunction(function(){return e(t,n,o,r)})}:e}(function(e,t){if(e.namespaceURI!=="http://www.w3.org/2000/svg"||"innerHTML"in e)e.innerHTML=t;else{for(Zo=Zo||document.createElement("div"),Zo.innerHTML="<svg>"+t.valueOf().toString()+"</svg>",t=Zo.firstChild;e.firstChild;)e.removeChild(e.firstChild);for(;t.firstChild;)e.appendChild(t.firstChild)}});function $o(e,t){if(t){var n=e.firstChild;if(n&&n===e.lastChild&&n.nodeType===3){n.nodeValue=t;return}}e.textContent=t}var mo={animationIterationCount:!0,aspectRatio:!0,borderImageOutset:!0,borderImageSlice:!0,borderImageWidth:!0,boxFlex:!0,boxFlexGroup:!0,boxOrdinalGroup:!0,columnCount:!0,columns:!0,flex:!0,flexGrow:!0,flexPositive:!0,flexShrink:!0,flexNegative:!0,flexOrder:!0,gridArea:!0,gridRow:!0,gridRowEnd:!0,gridRowSpan:!0,gridRowStart:!0,gridColumn:!0,gridColumnEnd:!0,gridColumnSpan:!0,gridColumnStart:!0,fontWeight:!0,lineClamp:!0,lineHeight:!0,opacity:!0,order:!0,orphans:!0,tabSize:!0,widows:!0,zIndex:!0,zoom:!0,fillOpacity:!0,floodOpacity:!0,stopOpacity:!0,strokeDasharray:!0,strokeDashoffset:!0,strokeMiterlimit:!0,strokeOpacity:!0,strokeWidth:!0},Am=["Webkit","ms","Moz","O"];Object.keys(mo).forEach(function(e){Am.forEach(function(t){t=t+e.charAt(0).toUpperCase()+e.substring(1),mo[t]=mo[e]})});function zu(e,t,n){return t==null||typeof t=="boolean"||t===""?"":n||typeof t!="number"||t===0||mo.hasOwnProperty(e)&&mo[e]?(""+t).trim():t+"px"}function Du(e,t){e=e.style;for(var n in t)if(t.hasOwnProperty(n)){var o=n.indexOf("--")===0,r=zu(n,t[n],o);n==="float"&&(n="cssFloat"),o?e.setProperty(n,r):e[n]=r}}var Bm=J({menuitem:!0},{area:!0,base:!0,br:!0,col:!0,embed:!0,hr:!0,img:!0,input:!0,keygen:!0,link:!0,meta:!0,param:!0,source:!0,track:!0,wbr:!0});function ws(e,t){if(t){if(Bm[e]&&(t.children!=null||t.dangerouslySetInnerHTML!=null))throw Error(I(137,e));if(t.dangerouslySetInnerHTML!=null){if(t.children!=null)throw Error(I(60));if(typeof t.dangerouslySetInnerHTML!="object"||!("__html"in t.dangerouslySetInnerHTML))throw Error(I(61))}if(t.style!=null&&typeof t.style!="object")throw Error(I(62))}}function xs(e,t){if(e.indexOf("-")===-1)return typeof t.is=="string";switch(e){case"annotation-xml":case"color-profile":case"font-face":case"font-face-src":case"font-face-uri":case"font-face-format":case"font-face-name":case"missing-glyph":return!1;default:return!0}}var bs=null;function Pa(e){return e=e.target||e.srcElement||window,e.correspondingUseElement&&(e=e.correspondingUseElement),e.nodeType===3?e.parentNode:e}var Ps=null,In=null,_n=null;function _l(e){if(e=Ho(e)){if(typeof Ps!="function")throw Error(I(280));var t=e.stateNode;t&&(t=ci(t),Ps(e.stateNode,e.type,t))}}function Ou(e){In?_n?_n.push(e):_n=[e]:In=e}function ju(){if(In){var e=In,t=_n;if(_n=In=null,_l(e),t)for(e=0;e<t.length;e++)_l(t[e])}}function Mu(e,t){return e(t)}function Tu(){}var ki=!1;function Nu(e,t,n){if(ki)return e(t,n);ki=!0;try{return Mu(e,t,n)}finally{ki=!1,(In!==null||_n!==null)&&(Tu(),ju())}}function So(e,t){var n=e.stateNode;if(n===null)return null;var o=ci(n);if(o===null)return null;n=o[t];e:switch(t){case"onClick":case"onClickCapture":case"onDoubleClick":case"onDoubleClickCapture":case"onMouseDown":case"onMouseDownCapture":case"onMouseMove":case"onMouseMoveCapture":case"onMouseUp":case"onMouseUpCapture":case"onMouseEnter":(o=!o.disabled)||(e=e.type,o=!(e==="button"||e==="input"||e==="select"||e==="textarea")),e=!o;break e;default:e=!1}if(e)return null;if(n&&typeof n!="function")throw Error(I(231,t,typeof n));return n}var $s=!1;if(pt)try{var Jn={};Object.defineProperty(Jn,"passive",{get:function(){$s=!0}}),window.addEventListener("test",Jn,Jn),window.removeEventListener("test",Jn,Jn)}catch{$s=!1}function Um(e,t,n,o,r,i,s,a,l){var c=Array.prototype.slice.call(arguments,3);try{t.apply(n,c)}catch(u){this.onError(u)}}var go=!1,Rr=null,zr=!1,Ss=null,Fm={onError:function(e){go=!0,Rr=e}};function Wm(e,t,n,o,r,i,s,a,l){go=!1,Rr=null,Um.apply(Fm,arguments)}function Vm(e,t,n,o,r,i,s,a,l){if(Wm.apply(this,arguments),go){if(go){var c=Rr;go=!1,Rr=null}else throw Error(I(198));zr||(zr=!0,Ss=c)}}function cn(e){var t=e,n=e;if(e.alternate)for(;t.return;)t=t.return;else{e=t;do t=e,t.flags&4098&&(n=t.return),e=t.return;while(e)}return t.tag===3?n:null}function Au(e){if(e.tag===13){var t=e.memoizedState;if(t===null&&(e=e.alternate,e!==null&&(t=e.memoizedState)),t!==null)return t.dehydrated}return null}function El(e){if(cn(e)!==e)throw Error(I(188))}function Hm(e){var t=e.alternate;if(!t){if(t=cn(e),t===null)throw Error(I(188));return t!==e?null:e}for(var n=e,o=t;;){var r=n.return;if(r===null)break;var i=r.alternate;if(i===null){if(o=r.return,o!==null){n=o;continue}break}if(r.child===i.child){for(i=r.child;i;){if(i===n)return El(r),e;if(i===o)return El(r),t;i=i.sibling}throw Error(I(188))}if(n.return!==o.return)n=r,o=i;else{for(var s=!1,a=r.child;a;){if(a===n){s=!0,n=r,o=i;break}if(a===o){s=!0,o=r,n=i;break}a=a.sibling}if(!s){for(a=i.child;a;){if(a===n){s=!0,n=i,o=r;break}if(a===o){s=!0,o=i,n=r;break}a=a.sibling}if(!s)throw Error(I(189))}}if(n.alternate!==o)throw Error(I(190))}if(n.tag!==3)throw Error(I(188));return n.stateNode.current===n?e:t}function Bu(e){return e=Hm(e),e!==null?Uu(e):null}function Uu(e){if(e.tag===5||e.tag===6)return e;for(e=e.child;e!==null;){var t=Uu(e);if(t!==null)return t;e=e.sibling}return null}var Fu=De.unstable_scheduleCallback,Rl=De.unstable_cancelCallback,Gm=De.unstable_shouldYield,qm=De.unstable_requestPaint,ne=De.unstable_now,Qm=De.unstable_getCurrentPriorityLevel,$a=De.unstable_ImmediatePriority,Wu=De.unstable_UserBlockingPriority,Dr=De.unstable_NormalPriority,Km=De.unstable_LowPriority,Vu=De.unstable_IdlePriority,ii=null,tt=null;function Ym(e){if(tt&&typeof tt.onCommitFiberRoot=="function")try{tt.onCommitFiberRoot(ii,e,void 0,(e.current.flags&128)===128)}catch{}}var Qe=Math.clz32?Math.clz32:Jm,Xm=Math.log,Zm=Math.LN2;function Jm(e){return e>>>=0,e===0?32:31-(Xm(e)/Zm|0)|0}var Jo=64,er=4194304;function lo(e){switch(e&-e){case 1:return 1;case 2:return 2;case 4:return 4;case 8:return 8;case 16:return 16;case 32:return 32;case 64:case 128:case 256:case 512:case 1024:case 2048:case 4096:case 8192:case 16384:case 32768:case 65536:case 131072:case 262144:case 524288:case 1048576:case 2097152:return e&4194240;case 4194304:case 8388608:case 16777216:case 33554432:case 67108864:return e&130023424;case 134217728:return 134217728;case 268435456:return 268435456;case 536870912:return 536870912;case 1073741824:return 1073741824;default:return e}}function Or(e,t){var n=e.pendingLanes;if(n===0)return 0;var o=0,r=e.suspendedLanes,i=e.pingedLanes,s=n&268435455;if(s!==0){var a=s&~r;a!==0?o=lo(a):(i&=s,i!==0&&(o=lo(i)))}else s=n&~r,s!==0?o=lo(s):i!==0&&(o=lo(i));if(o===0)return 0;if(t!==0&&t!==o&&!(t&r)&&(r=o&-o,i=t&-t,r>=i||r===16&&(i&4194240)!==0))return t;if(o&4&&(o|=n&16),t=e.entangledLanes,t!==0)for(e=e.entanglements,t&=o;0<t;)n=31-Qe(t),r=1<<n,o|=e[n],t&=~r;return o}function eg(e,t){switch(e){case 1:case 2:case 4:return t+250;case 8:case 16:case 32:case 64:case 128:case 256:case 512:case 1024:case 2048:case 4096:case 8192:case 16384:case 32768:case 65536:case 131072:case 262144:case 524288:case 1048576:case 2097152:return t+5e3;case 4194304:case 8388608:case 16777216:case 33554432:case 67108864:return-1;case 134217728:case 268435456:case 536870912:case 1073741824:return-1;default:return-1}}function tg(e,t){for(var n=e.suspendedLanes,o=e.pingedLanes,r=e.expirationTimes,i=e.pendingLanes;0<i;){var s=31-Qe(i),a=1<<s,l=r[s];l===-1?(!(a&n)||a&o)&&(r[s]=eg(a,t)):l<=t&&(e.expiredLanes|=a),i&=~a}}function Cs(e){return e=e.pendingLanes&-1073741825,e!==0?e:e&1073741824?1073741824:0}function Hu(){var e=Jo;return Jo<<=1,!(Jo&4194240)&&(Jo=64),e}function Ii(e){for(var t=[],n=0;31>n;n++)t.push(e);return t}function Wo(e,t,n){e.pendingLanes|=t,t!==536870912&&(e.suspendedLanes=0,e.pingedLanes=0),e=e.eventTimes,t=31-Qe(t),e[t]=n}function ng(e,t){var n=e.pendingLanes&~t;e.pendingLanes=t,e.suspendedLanes=0,e.pingedLanes=0,e.expiredLanes&=t,e.mutableReadLanes&=t,e.entangledLanes&=t,t=e.entanglements;var o=e.eventTimes;for(e=e.expirationTimes;0<n;){var r=31-Qe(n),i=1<<r;t[r]=0,o[r]=-1,e[r]=-1,n&=~i}}function Sa(e,t){var n=e.entangledLanes|=t;for(e=e.entanglements;n;){var o=31-Qe(n),r=1<<o;r&t|e[o]&t&&(e[o]|=t),n&=~r}}var G=0;function Gu(e){return e&=-e,1<e?4<e?e&268435455?16:536870912:4:1}var qu,Ca,Qu,Ku,Yu,Ls=!1,tr=[],_t=null,Et=null,Rt=null,Co=new Map,Lo=new Map,$t=[],og="mousedown mouseup touchcancel touchend touchstart auxclick dblclick pointercancel pointerdown pointerup dragend dragstart drop compositionend compositionstart keydown keypress keyup input textInput copy cut paste click change contextmenu reset submit".split(" ");function zl(e,t){switch(e){case"focusin":case"focusout":_t=null;break;case"dragenter":case"dragleave":Et=null;break;case"mouseover":case"mouseout":Rt=null;break;case"pointerover":case"pointerout":Co.delete(t.pointerId);break;case"gotpointercapture":case"lostpointercapture":Lo.delete(t.pointerId)}}function eo(e,t,n,o,r,i){return e===null||e.nativeEvent!==i?(e={blockedOn:t,domEventName:n,eventSystemFlags:o,nativeEvent:i,targetContainers:[r]},t!==null&&(t=Ho(t),t!==null&&Ca(t)),e):(e.eventSystemFlags|=o,t=e.targetContainers,r!==null&&t.indexOf(r)===-1&&t.push(r),e)}function rg(e,t,n,o,r){switch(t){case"focusin":return _t=eo(_t,e,t,n,o,r),!0;case"dragenter":return Et=eo(Et,e,t,n,o,r),!0;case"mouseover":return Rt=eo(Rt,e,t,n,o,r),!0;case"pointerover":var i=r.pointerId;return Co.set(i,eo(Co.get(i)||null,e,t,n,o,r)),!0;case"gotpointercapture":return i=r.pointerId,Lo.set(i,eo(Lo.get(i)||null,e,t,n,o,r)),!0}return!1}function Xu(e){var t=Kt(e.target);if(t!==null){var n=cn(t);if(n!==null){if(t=n.tag,t===13){if(t=Au(n),t!==null){e.blockedOn=t,Yu(e.priority,function(){Qu(n)});return}}else if(t===3&&n.stateNode.current.memoizedState.isDehydrated){e.blockedOn=n.tag===3?n.stateNode.containerInfo:null;return}}}e.blockedOn=null}function xr(e){if(e.blockedOn!==null)return!1;for(var t=e.targetContainers;0<t.length;){var n=ks(e.domEventName,e.eventSystemFlags,t[0],e.nativeEvent);if(n===null){n=e.nativeEvent;var o=new n.constructor(n.type,n);bs=o,n.target.dispatchEvent(o),bs=null}else return t=Ho(n),t!==null&&Ca(t),e.blockedOn=n,!1;t.shift()}return!0}function Dl(e,t,n){xr(e)&&n.delete(t)}function ig(){Ls=!1,_t!==null&&xr(_t)&&(_t=null),Et!==null&&xr(Et)&&(Et=null),Rt!==null&&xr(Rt)&&(Rt=null),Co.forEach(Dl),Lo.forEach(Dl)}function to(e,t){e.blockedOn===t&&(e.blockedOn=null,Ls||(Ls=!0,De.unstable_scheduleCallback(De.unstable_NormalPriority,ig)))}function ko(e){function t(r){return to(r,e)}if(0<tr.length){to(tr[0],e);for(var n=1;n<tr.length;n++){var o=tr[n];o.blockedOn===e&&(o.blockedOn=null)}}for(_t!==null&&to(_t,e),Et!==null&&to(Et,e),Rt!==null&&to(Rt,e),Co.forEach(t),Lo.forEach(t),n=0;n<$t.length;n++)o=$t[n],o.blockedOn===e&&(o.blockedOn=null);for(;0<$t.length&&(n=$t[0],n.blockedOn===null);)Xu(n),n.blockedOn===null&&$t.shift()}var En=ht.ReactCurrentBatchConfig,jr=!0;function sg(e,t,n,o){var r=G,i=En.transition;En.transition=null;try{G=1,La(e,t,n,o)}finally{G=r,En.transition=i}}function ag(e,t,n,o){var r=G,i=En.transition;En.transition=null;try{G=4,La(e,t,n,o)}finally{G=r,En.transition=i}}function La(e,t,n,o){if(jr){var r=ks(e,t,n,o);if(r===null)Ni(e,t,o,Mr,n),zl(e,o);else if(rg(r,e,t,n,o))o.stopPropagation();else if(zl(e,o),t&4&&-1<og.indexOf(e)){for(;r!==null;){var i=Ho(r);if(i!==null&&qu(i),i=ks(e,t,n,o),i===null&&Ni(e,t,o,Mr,n),i===r)break;r=i}r!==null&&o.stopPropagation()}else Ni(e,t,o,null,n)}}var Mr=null;function ks(e,t,n,o){if(Mr=null,e=Pa(o),e=Kt(e),e!==null)if(t=cn(e),t===null)e=null;else if(n=t.tag,n===13){if(e=Au(t),e!==null)return e;e=null}else if(n===3){if(t.stateNode.current.memoizedState.isDehydrated)return t.tag===3?t.stateNode.containerInfo:null;e=null}else t!==e&&(e=null);return Mr=e,null}function Zu(e){switch(e){case"cancel":case"click":case"close":case"contextmenu":case"copy":case"cut":case"auxclick":case"dblclick":case"dragend":case"dragstart":case"drop":case"focusin":case"focusout":case"input":case"invalid":case"keydown":case"keypress":case"keyup":case"mousedown":case"mouseup":case"paste":case"pause":case"play":case"pointercancel":case"pointerdown":case"pointerup":case"ratechange":case"reset":case"resize":case"seeked":case"submit":case"touchcancel":case"touchend":case"touchstart":case"volumechange":case"change":case"selectionchange":case"textInput":case"compositionstart":case"compositionend":case"compositionupdate":case"beforeblur":case"afterblur":case"beforeinput":case"blur":case"fullscreenchange":case"focus":case"hashchange":case"popstate":case"select":case"selectstart":return 1;case"drag":case"dragenter":case"dragexit":case"dragleave":case"dragover":case"mousemove":case"mouseout":case"mouseover":case"pointermove":case"pointerout":case"pointerover":case"scroll":case"toggle":case"touchmove":case"wheel":case"mouseenter":case"mouseleave":case"pointerenter":case"pointerleave":return 4;case"message":switch(Qm()){case $a:return 1;case Wu:return 4;case Dr:case Km:return 16;case Vu:return 536870912;default:return 16}default:return 16}}var Ct=null,ka=null,br=null;function Ju(){if(br)return br;var e,t=ka,n=t.length,o,r="value"in Ct?Ct.value:Ct.textContent,i=r.length;for(e=0;e<n&&t[e]===r[e];e++);var s=n-e;for(o=1;o<=s&&t[n-o]===r[i-o];o++);return br=r.slice(e,1<o?1-o:void 0)}function Pr(e){var t=e.keyCode;return"charCode"in e?(e=e.charCode,e===0&&t===13&&(e=13)):e=t,e===10&&(e=13),32<=e||e===13?e:0}function nr(){return!0}function Ol(){return!1}function je(e){function t(n,o,r,i,s){this._reactName=n,this._targetInst=r,this.type=o,this.nativeEvent=i,this.target=s,this.currentTarget=null;for(var a in e)e.hasOwnProperty(a)&&(n=e[a],this[a]=n?n(i):i[a]);return this.isDefaultPrevented=(i.defaultPrevented!=null?i.defaultPrevented:i.returnValue===!1)?nr:Ol,this.isPropagationStopped=Ol,this}return J(t.prototype,{preventDefault:function(){this.defaultPrevented=!0;var n=this.nativeEvent;n&&(n.preventDefault?n.preventDefault():typeof n.returnValue!="unknown"&&(n.returnValue=!1),this.isDefaultPrevented=nr)},stopPropagation:function(){var n=this.nativeEvent;n&&(n.stopPropagation?n.stopPropagation():typeof n.cancelBubble!="unknown"&&(n.cancelBubble=!0),this.isPropagationStopped=nr)},persist:function(){},isPersistent:nr}),t}var Vn={eventPhase:0,bubbles:0,cancelable:0,timeStamp:function(e){return e.timeStamp||Date.now()},defaultPrevented:0,isTrusted:0},Ia=je(Vn),Vo=J({},Vn,{view:0,detail:0}),lg=je(Vo),_i,Ei,no,si=J({},Vo,{screenX:0,screenY:0,clientX:0,clientY:0,pageX:0,pageY:0,ctrlKey:0,shiftKey:0,altKey:0,metaKey:0,getModifierState:_a,button:0,buttons:0,relatedTarget:function(e){return e.relatedTarget===void 0?e.fromElement===e.srcElement?e.toElement:e.fromElement:e.relatedTarget},movementX:function(e){return"movementX"in e?e.movementX:(e!==no&&(no&&e.type==="mousemove"?(_i=e.screenX-no.screenX,Ei=e.screenY-no.screenY):Ei=_i=0,no=e),_i)},movementY:function(e){return"movementY"in e?e.movementY:Ei}}),jl=je(si),cg=J({},si,{dataTransfer:0}),ug=je(cg),dg=J({},Vo,{relatedTarget:0}),Ri=je(dg),pg=J({},Vn,{animationName:0,elapsedTime:0,pseudoElement:0}),mg=je(pg),gg=J({},Vn,{clipboardData:function(e){return"clipboardData"in e?e.clipboardData:window.clipboardData}}),fg=je(gg),hg=J({},Vn,{data:0}),Ml=je(hg),yg={Esc:"Escape",Spacebar:" ",Left:"ArrowLeft",Up:"ArrowUp",Right:"ArrowRight",Down:"ArrowDown",Del:"Delete",Win:"OS",Menu:"ContextMenu",Apps:"ContextMenu",Scroll:"ScrollLock",MozPrintableKey:"Unidentified"},vg={8:"Backspace",9:"Tab",12:"Clear",13:"Enter",16:"Shift",17:"Control",18:"Alt",19:"Pause",20:"CapsLock",27:"Escape",32:" ",33:"PageUp",34:"PageDown",35:"End",36:"Home",37:"ArrowLeft",38:"ArrowUp",39:"ArrowRight",40:"ArrowDown",45:"Insert",46:"Delete",112:"F1",113:"F2",114:"F3",115:"F4",116:"F5",117:"F6",118:"F7",119:"F8",120:"F9",121:"F10",122:"F11",123:"F12",144:"NumLock",145:"ScrollLock",224:"Meta"},wg={Alt:"altKey",Control:"ctrlKey",Meta:"metaKey",Shift:"shiftKey"};function xg(e){var t=this.nativeEvent;return t.getModifierState?t.getModifierState(e):(e=wg[e])?!!t[e]:!1}function _a(){return xg}var bg=J({},Vo,{key:function(e){if(e.key){var t=yg[e.key]||e.key;if(t!=="Unidentified")return t}return e.type==="keypress"?(e=Pr(e),e===13?"Enter":String.fromCharCode(e)):e.type==="keydown"||e.type==="keyup"?vg[e.keyCode]||"Unidentified":""},code:0,location:0,ctrlKey:0,shiftKey:0,altKey:0,metaKey:0,repeat:0,locale:0,getModifierState:_a,charCode:function(e){return e.type==="keypress"?Pr(e):0},keyCode:function(e){return e.type==="keydown"||e.type==="keyup"?e.keyCode:0},which:function(e){return e.type==="keypress"?Pr(e):e.type==="keydown"||e.type==="keyup"?e.keyCode:0}}),Pg=je(bg),$g=J({},si,{pointerId:0,width:0,height:0,pressure:0,tangentialPressure:0,tiltX:0,tiltY:0,twist:0,pointerType:0,isPrimary:0}),Tl=je($g),Sg=J({},Vo,{touches:0,targetTouches:0,changedTouches:0,altKey:0,metaKey:0,ctrlKey:0,shiftKey:0,getModifierState:_a}),Cg=je(Sg),Lg=J({},Vn,{propertyName:0,elapsedTime:0,pseudoElement:0}),kg=je(Lg),Ig=J({},si,{deltaX:function(e){return"deltaX"in e?e.deltaX:"wheelDeltaX"in e?-e.wheelDeltaX:0},deltaY:function(e){return"deltaY"in e?e.deltaY:"wheelDeltaY"in e?-e.wheelDeltaY:"wheelDelta"in e?-e.wheelDelta:0},deltaZ:0,deltaMode:0}),_g=je(Ig),Eg=[9,13,27,32],Ea=pt&&"CompositionEvent"in window,fo=null;pt&&"documentMode"in document&&(fo=document.documentMode);var Rg=pt&&"TextEvent"in window&&!fo,ed=pt&&(!Ea||fo&&8<fo&&11>=fo),Nl=" ",Al=!1;function td(e,t){switch(e){case"keyup":return Eg.indexOf(t.keyCode)!==-1;case"keydown":return t.keyCode!==229;case"keypress":case"mousedown":case"focusout":return!0;default:return!1}}function nd(e){return e=e.detail,typeof e=="object"&&"data"in e?e.data:null}var yn=!1;function zg(e,t){switch(e){case"compositionend":return nd(t);case"keypress":return t.which!==32?null:(Al=!0,Nl);case"textInput":return e=t.data,e===Nl&&Al?null:e;default:return null}}function Dg(e,t){if(yn)return e==="compositionend"||!Ea&&td(e,t)?(e=Ju(),br=ka=Ct=null,yn=!1,e):null;switch(e){case"paste":return null;case"keypress":if(!(t.ctrlKey||t.altKey||t.metaKey)||t.ctrlKey&&t.altKey){if(t.char&&1<t.char.length)return t.char;if(t.which)return String.fromCharCode(t.which)}return null;case"compositionend":return ed&&t.locale!=="ko"?null:t.data;default:return null}}var Og={color:!0,date:!0,datetime:!0,"datetime-local":!0,email:!0,month:!0,number:!0,password:!0,range:!0,search:!0,tel:!0,text:!0,time:!0,url:!0,week:!0};function Bl(e){var t=e&&e.nodeName&&e.nodeName.toLowerCase();return t==="input"?!!Og[e.type]:t==="textarea"}function od(e,t,n,o){Ou(o),t=Tr(t,"onChange"),0<t.length&&(n=new Ia("onChange","change",null,n,o),e.push({event:n,listeners:t}))}var ho=null,Io=null;function jg(e){gd(e,0)}function ai(e){var t=xn(e);if(ku(t))return e}function Mg(e,t){if(e==="change")return t}var rd=!1;if(pt){var zi;if(pt){var Di="oninput"in document;if(!Di){var Ul=document.createElement("div");Ul.setAttribute("oninput","return;"),Di=typeof Ul.oninput=="function"}zi=Di}else zi=!1;rd=zi&&(!document.documentMode||9<document.documentMode)}function Fl(){ho&&(ho.detachEvent("onpropertychange",id),Io=ho=null)}function id(e){if(e.propertyName==="value"&&ai(Io)){var t=[];od(t,Io,e,Pa(e)),Nu(jg,t)}}function Tg(e,t,n){e==="focusin"?(Fl(),ho=t,Io=n,ho.attachEvent("onpropertychange",id)):e==="focusout"&&Fl()}function Ng(e){if(e==="selectionchange"||e==="keyup"||e==="keydown")return ai(Io)}function Ag(e,t){if(e==="click")return ai(t)}function Bg(e,t){if(e==="input"||e==="change")return ai(t)}function Ug(e,t){return e===t&&(e!==0||1/e===1/t)||e!==e&&t!==t}var Ye=typeof Object.is=="function"?Object.is:Ug;function _o(e,t){if(Ye(e,t))return!0;if(typeof e!="object"||e===null||typeof t!="object"||t===null)return!1;var n=Object.keys(e),o=Object.keys(t);if(n.length!==o.length)return!1;for(o=0;o<n.length;o++){var r=n[o];if(!cs.call(t,r)||!Ye(e[r],t[r]))return!1}return!0}function Wl(e){for(;e&&e.firstChild;)e=e.firstChild;return e}function Vl(e,t){var n=Wl(e);e=0;for(var o;n;){if(n.nodeType===3){if(o=e+n.textContent.length,e<=t&&o>=t)return{node:n,offset:t-e};e=o}e:{for(;n;){if(n.nextSibling){n=n.nextSibling;break e}n=n.parentNode}n=void 0}n=Wl(n)}}function sd(e,t){return e&&t?e===t?!0:e&&e.nodeType===3?!1:t&&t.nodeType===3?sd(e,t.parentNode):"contains"in e?e.contains(t):e.compareDocumentPosition?!!(e.compareDocumentPosition(t)&16):!1:!1}function ad(){for(var e=window,t=Er();t instanceof e.HTMLIFrameElement;){try{var n=typeof t.contentWindow.location.href=="string"}catch{n=!1}if(n)e=t.contentWindow;else break;t=Er(e.document)}return t}function Ra(e){var t=e&&e.nodeName&&e.nodeName.toLowerCase();return t&&(t==="input"&&(e.type==="text"||e.type==="search"||e.type==="tel"||e.type==="url"||e.type==="password")||t==="textarea"||e.contentEditable==="true")}function Fg(e){var t=ad(),n=e.focusedElem,o=e.selectionRange;if(t!==n&&n&&n.ownerDocument&&sd(n.ownerDocument.documentElement,n)){if(o!==null&&Ra(n)){if(t=o.start,e=o.end,e===void 0&&(e=t),"selectionStart"in n)n.selectionStart=t,n.selectionEnd=Math.min(e,n.value.length);else if(e=(t=n.ownerDocument||document)&&t.defaultView||window,e.getSelection){e=e.getSelection();var r=n.textContent.length,i=Math.min(o.start,r);o=o.end===void 0?i:Math.min(o.end,r),!e.extend&&i>o&&(r=o,o=i,i=r),r=Vl(n,i);var s=Vl(n,o);r&&s&&(e.rangeCount!==1||e.anchorNode!==r.node||e.anchorOffset!==r.offset||e.focusNode!==s.node||e.focusOffset!==s.offset)&&(t=t.createRange(),t.setStart(r.node,r.offset),e.removeAllRanges(),i>o?(e.addRange(t),e.extend(s.node,s.offset)):(t.setEnd(s.node,s.offset),e.addRange(t)))}}for(t=[],e=n;e=e.parentNode;)e.nodeType===1&&t.push({element:e,left:e.scrollLeft,top:e.scrollTop});for(typeof n.focus=="function"&&n.focus(),n=0;n<t.length;n++)e=t[n],e.element.scrollLeft=e.left,e.element.scrollTop=e.top}}var Wg=pt&&"documentMode"in document&&11>=document.documentMode,vn=null,Is=null,yo=null,_s=!1;function Hl(e,t,n){var o=n.window===n?n.document:n.nodeType===9?n:n.ownerDocument;_s||vn==null||vn!==Er(o)||(o=vn,"selectionStart"in o&&Ra(o)?o={start:o.selectionStart,end:o.selectionEnd}:(o=(o.ownerDocument&&o.ownerDocument.defaultView||window).getSelection(),o={anchorNode:o.anchorNode,anchorOffset:o.anchorOffset,focusNode:o.focusNode,focusOffset:o.focusOffset}),yo&&_o(yo,o)||(yo=o,o=Tr(Is,"onSelect"),0<o.length&&(t=new Ia("onSelect","select",null,t,n),e.push({event:t,listeners:o}),t.target=vn)))}function or(e,t){var n={};return n[e.toLowerCase()]=t.toLowerCase(),n["Webkit"+e]="webkit"+t,n["Moz"+e]="moz"+t,n}var wn={animationend:or("Animation","AnimationEnd"),animationiteration:or("Animation","AnimationIteration"),animationstart:or("Animation","AnimationStart"),transitionend:or("Transition","TransitionEnd")},Oi={},ld={};pt&&(ld=document.createElement("div").style,"AnimationEvent"in window||(delete wn.animationend.animation,delete wn.animationiteration.animation,delete wn.animationstart.animation),"TransitionEvent"in window||delete wn.transitionend.transition);function li(e){if(Oi[e])return Oi[e];if(!wn[e])return e;var t=wn[e],n;for(n in t)if(t.hasOwnProperty(n)&&n in ld)return Oi[e]=t[n];return e}var cd=li("animationend"),ud=li("animationiteration"),dd=li("animationstart"),pd=li("transitionend"),md=new Map,Gl="abort auxClick cancel canPlay canPlayThrough click close contextMenu copy cut drag dragEnd dragEnter dragExit dragLeave dragOver dragStart drop durationChange emptied encrypted ended error gotPointerCapture input invalid keyDown keyPress keyUp load loadedData loadedMetadata loadStart lostPointerCapture mouseDown mouseMove mouseOut mouseOver mouseUp paste pause play playing pointerCancel pointerDown pointerMove pointerOut pointerOver pointerUp progress rateChange reset resize seeked seeking stalled submit suspend timeUpdate touchCancel touchEnd touchStart volumeChange scroll toggle touchMove waiting wheel".split(" ");function Bt(e,t){md.set(e,t),ln(t,[e])}for(var ji=0;ji<Gl.length;ji++){var Mi=Gl[ji],Vg=Mi.toLowerCase(),Hg=Mi[0].toUpperCase()+Mi.slice(1);Bt(Vg,"on"+Hg)}Bt(cd,"onAnimationEnd");Bt(ud,"onAnimationIteration");Bt(dd,"onAnimationStart");Bt("dblclick","onDoubleClick");Bt("focusin","onFocus");Bt("focusout","onBlur");Bt(pd,"onTransitionEnd");jn("onMouseEnter",["mouseout","mouseover"]);jn("onMouseLeave",["mouseout","mouseover"]);jn("onPointerEnter",["pointerout","pointerover"]);jn("onPointerLeave",["pointerout","pointerover"]);ln("onChange","change click focusin focusout input keydown keyup selectionchange".split(" "));ln("onSelect","focusout contextmenu dragend focusin keydown keyup mousedown mouseup selectionchange".split(" "));ln("onBeforeInput",["compositionend","keypress","textInput","paste"]);ln("onCompositionEnd","compositionend focusout keydown keypress keyup mousedown".split(" "));ln("onCompositionStart","compositionstart focusout keydown keypress keyup mousedown".split(" "));ln("onCompositionUpdate","compositionupdate focusout keydown keypress keyup mousedown".split(" "));var co="abort canplay canplaythrough durationchange emptied encrypted ended error loadeddata loadedmetadata loadstart pause play playing progress ratechange resize seeked seeking stalled suspend timeupdate volumechange waiting".split(" "),Gg=new Set("cancel close invalid load scroll toggle".split(" ").concat(co));function ql(e,t,n){var o=e.type||"unknown-event";e.currentTarget=n,Vm(o,t,void 0,e),e.currentTarget=null}function gd(e,t){t=(t&4)!==0;for(var n=0;n<e.length;n++){var o=e[n],r=o.event;o=o.listeners;e:{var i=void 0;if(t)for(var s=o.length-1;0<=s;s--){var a=o[s],l=a.instance,c=a.currentTarget;if(a=a.listener,l!==i&&r.isPropagationStopped())break e;ql(r,a,c),i=l}else for(s=0;s<o.length;s++){if(a=o[s],l=a.instance,c=a.currentTarget,a=a.listener,l!==i&&r.isPropagationStopped())break e;ql(r,a,c),i=l}}}if(zr)throw e=Ss,zr=!1,Ss=null,e}function Q(e,t){var n=t[Os];n===void 0&&(n=t[Os]=new Set);var o=e+"__bubble";n.has(o)||(fd(t,e,2,!1),n.add(o))}function Ti(e,t,n){var o=0;t&&(o|=4),fd(n,e,o,t)}var rr="_reactListening"+Math.random().toString(36).slice(2);function Eo(e){if(!e[rr]){e[rr]=!0,Pu.forEach(function(n){n!=="selectionchange"&&(Gg.has(n)||Ti(n,!1,e),Ti(n,!0,e))});var t=e.nodeType===9?e:e.ownerDocument;t===null||t[rr]||(t[rr]=!0,Ti("selectionchange",!1,t))}}function fd(e,t,n,o){switch(Zu(t)){case 1:var r=sg;break;case 4:r=ag;break;default:r=La}n=r.bind(null,t,n,e),r=void 0,!$s||t!=="touchstart"&&t!=="touchmove"&&t!=="wheel"||(r=!0),o?r!==void 0?e.addEventListener(t,n,{capture:!0,passive:r}):e.addEventListener(t,n,!0):r!==void 0?e.addEventListener(t,n,{passive:r}):e.addEventListener(t,n,!1)}function Ni(e,t,n,o,r){var i=o;if(!(t&1)&&!(t&2)&&o!==null)e:for(;;){if(o===null)return;var s=o.tag;if(s===3||s===4){var a=o.stateNode.containerInfo;if(a===r||a.nodeType===8&&a.parentNode===r)break;if(s===4)for(s=o.return;s!==null;){var l=s.tag;if((l===3||l===4)&&(l=s.stateNode.containerInfo,l===r||l.nodeType===8&&l.parentNode===r))return;s=s.return}for(;a!==null;){if(s=Kt(a),s===null)return;if(l=s.tag,l===5||l===6){o=i=s;continue e}a=a.parentNode}}o=o.return}Nu(function(){var c=i,u=Pa(n),d=[];e:{var p=md.get(e);if(p!==void 0){var f=Ia,v=e;switch(e){case"keypress":if(Pr(n)===0)break e;case"keydown":case"keyup":f=Pg;break;case"focusin":v="focus",f=Ri;break;case"focusout":v="blur",f=Ri;break;case"beforeblur":case"afterblur":f=Ri;break;case"click":if(n.button===2)break e;case"auxclick":case"dblclick":case"mousedown":case"mousemove":case"mouseup":case"mouseout":case"mouseover":case"contextmenu":f=jl;break;case"drag":case"dragend":case"dragenter":case"dragexit":case"dragleave":case"dragover":case"dragstart":case"drop":f=ug;break;case"touchcancel":case"touchend":case"touchmove":case"touchstart":f=Cg;break;case cd:case ud:case dd:f=mg;break;case pd:f=kg;break;case"scroll":f=lg;break;case"wheel":f=_g;break;case"copy":case"cut":case"paste":f=fg;break;case"gotpointercapture":case"lostpointercapture":case"pointercancel":case"pointerdown":case"pointermove":case"pointerout":case"pointerover":case"pointerup":f=Tl}var w=(t&4)!==0,b=!w&&e==="scroll",h=w?p!==null?p+"Capture":null:p;w=[];for(var g=c,y;g!==null;){y=g;var P=y.stateNode;if(y.tag===5&&P!==null&&(y=P,h!==null&&(P=So(g,h),P!=null&&w.push(Ro(g,P,y)))),b)break;g=g.return}0<w.length&&(p=new f(p,v,null,n,u),d.push({event:p,listeners:w}))}}if(!(t&7)){e:{if(p=e==="mouseover"||e==="pointerover",f=e==="mouseout"||e==="pointerout",p&&n!==bs&&(v=n.relatedTarget||n.fromElement)&&(Kt(v)||v[mt]))break e;if((f||p)&&(p=u.window===u?u:(p=u.ownerDocument)?p.defaultView||p.parentWindow:window,f?(v=n.relatedTarget||n.toElement,f=c,v=v?Kt(v):null,v!==null&&(b=cn(v),v!==b||v.tag!==5&&v.tag!==6)&&(v=null)):(f=null,v=c),f!==v)){if(w=jl,P="onMouseLeave",h="onMouseEnter",g="mouse",(e==="pointerout"||e==="pointerover")&&(w=Tl,P="onPointerLeave",h="onPointerEnter",g="pointer"),b=f==null?p:xn(f),y=v==null?p:xn(v),p=new w(P,g+"leave",f,n,u),p.target=b,p.relatedTarget=y,P=null,Kt(u)===c&&(w=new w(h,g+"enter",v,n,u),w.target=y,w.relatedTarget=b,P=w),b=P,f&&v)t:{for(w=f,h=v,g=0,y=w;y;y=dn(y))g++;for(y=0,P=h;P;P=dn(P))y++;for(;0<g-y;)w=dn(w),g--;for(;0<y-g;)h=dn(h),y--;for(;g--;){if(w===h||h!==null&&w===h.alternate)break t;w=dn(w),h=dn(h)}w=null}else w=null;f!==null&&Ql(d,p,f,w,!1),v!==null&&b!==null&&Ql(d,b,v,w,!0)}}e:{if(p=c?xn(c):window,f=p.nodeName&&p.nodeName.toLowerCase(),f==="select"||f==="input"&&p.type==="file")var $=Mg;else if(Bl(p))if(rd)$=Bg;else{$=Ng;var C=Tg}else(f=p.nodeName)&&f.toLowerCase()==="input"&&(p.type==="checkbox"||p.type==="radio")&&($=Ag);if($&&($=$(e,c))){od(d,$,n,u);break e}C&&C(e,p,c),e==="focusout"&&(C=p._wrapperState)&&C.controlled&&p.type==="number"&&hs(p,"number",p.value)}switch(C=c?xn(c):window,e){case"focusin":(Bl(C)||C.contentEditable==="true")&&(vn=C,Is=c,yo=null);break;case"focusout":yo=Is=vn=null;break;case"mousedown":_s=!0;break;case"contextmenu":case"mouseup":case"dragend":_s=!1,Hl(d,n,u);break;case"selectionchange":if(Wg)break;case"keydown":case"keyup":Hl(d,n,u)}var L;if(Ea)e:{switch(e){case"compositionstart":var k="onCompositionStart";break e;case"compositionend":k="onCompositionEnd";break e;case"compositionupdate":k="onCompositionUpdate";break e}k=void 0}else yn?td(e,n)&&(k="onCompositionEnd"):e==="keydown"&&n.keyCode===229&&(k="onCompositionStart");k&&(ed&&n.locale!=="ko"&&(yn||k!=="onCompositionStart"?k==="onCompositionEnd"&&yn&&(L=Ju()):(Ct=u,ka="value"in Ct?Ct.value:Ct.textContent,yn=!0)),C=Tr(c,k),0<C.length&&(k=new Ml(k,e,null,n,u),d.push({event:k,listeners:C}),L?k.data=L:(L=nd(n),L!==null&&(k.data=L)))),(L=Rg?zg(e,n):Dg(e,n))&&(c=Tr(c,"onBeforeInput"),0<c.length&&(u=new Ml("onBeforeInput","beforeinput",null,n,u),d.push({event:u,listeners:c}),u.data=L))}gd(d,t)})}function Ro(e,t,n){return{instance:e,listener:t,currentTarget:n}}function Tr(e,t){for(var n=t+"Capture",o=[];e!==null;){var r=e,i=r.stateNode;r.tag===5&&i!==null&&(r=i,i=So(e,n),i!=null&&o.unshift(Ro(e,i,r)),i=So(e,t),i!=null&&o.push(Ro(e,i,r))),e=e.return}return o}function dn(e){if(e===null)return null;do e=e.return;while(e&&e.tag!==5);return e||null}function Ql(e,t,n,o,r){for(var i=t._reactName,s=[];n!==null&&n!==o;){var a=n,l=a.alternate,c=a.stateNode;if(l!==null&&l===o)break;a.tag===5&&c!==null&&(a=c,r?(l=So(n,i),l!=null&&s.unshift(Ro(n,l,a))):r||(l=So(n,i),l!=null&&s.push(Ro(n,l,a)))),n=n.return}s.length!==0&&e.push({event:t,listeners:s})}var qg=/\r\n?/g,Qg=/\u0000|\uFFFD/g;function Kl(e){return(typeof e=="string"?e:""+e).replace(qg,`
`).replace(Qg,"")}function ir(e,t,n){if(t=Kl(t),Kl(e)!==t&&n)throw Error(I(425))}function Nr(){}var Es=null,Rs=null;function zs(e,t){return e==="textarea"||e==="noscript"||typeof t.children=="string"||typeof t.children=="number"||typeof t.dangerouslySetInnerHTML=="object"&&t.dangerouslySetInnerHTML!==null&&t.dangerouslySetInnerHTML.__html!=null}var Ds=typeof setTimeout=="function"?setTimeout:void 0,Kg=typeof clearTimeout=="function"?clearTimeout:void 0,Yl=typeof Promise=="function"?Promise:void 0,Yg=typeof queueMicrotask=="function"?queueMicrotask:typeof Yl<"u"?function(e){return Yl.resolve(null).then(e).catch(Xg)}:Ds;function Xg(e){setTimeout(function(){throw e})}function Ai(e,t){var n=t,o=0;do{var r=n.nextSibling;if(e.removeChild(n),r&&r.nodeType===8)if(n=r.data,n==="/$"){if(o===0){e.removeChild(r),ko(t);return}o--}else n!=="$"&&n!=="$?"&&n!=="$!"||o++;n=r}while(n);ko(t)}function zt(e){for(;e!=null;e=e.nextSibling){var t=e.nodeType;if(t===1||t===3)break;if(t===8){if(t=e.data,t==="$"||t==="$!"||t==="$?")break;if(t==="/$")return null}}return e}function Xl(e){e=e.previousSibling;for(var t=0;e;){if(e.nodeType===8){var n=e.data;if(n==="$"||n==="$!"||n==="$?"){if(t===0)return e;t--}else n==="/$"&&t++}e=e.previousSibling}return null}var Hn=Math.random().toString(36).slice(2),et="__reactFiber$"+Hn,zo="__reactProps$"+Hn,mt="__reactContainer$"+Hn,Os="__reactEvents$"+Hn,Zg="__reactListeners$"+Hn,Jg="__reactHandles$"+Hn;function Kt(e){var t=e[et];if(t)return t;for(var n=e.parentNode;n;){if(t=n[mt]||n[et]){if(n=t.alternate,t.child!==null||n!==null&&n.child!==null)for(e=Xl(e);e!==null;){if(n=e[et])return n;e=Xl(e)}return t}e=n,n=e.parentNode}return null}function Ho(e){return e=e[et]||e[mt],!e||e.tag!==5&&e.tag!==6&&e.tag!==13&&e.tag!==3?null:e}function xn(e){if(e.tag===5||e.tag===6)return e.stateNode;throw Error(I(33))}function ci(e){return e[zo]||null}var js=[],bn=-1;function Ut(e){return{current:e}}function K(e){0>bn||(e.current=js[bn],js[bn]=null,bn--)}function q(e,t){bn++,js[bn]=e.current,e.current=t}var At={},ye=Ut(At),Le=Ut(!1),tn=At;function Mn(e,t){var n=e.type.contextTypes;if(!n)return At;var o=e.stateNode;if(o&&o.__reactInternalMemoizedUnmaskedChildContext===t)return o.__reactInternalMemoizedMaskedChildContext;var r={},i;for(i in n)r[i]=t[i];return o&&(e=e.stateNode,e.__reactInternalMemoizedUnmaskedChildContext=t,e.__reactInternalMemoizedMaskedChildContext=r),r}function ke(e){return e=e.childContextTypes,e!=null}function Ar(){K(Le),K(ye)}function Zl(e,t,n){if(ye.current!==At)throw Error(I(168));q(ye,t),q(Le,n)}function hd(e,t,n){var o=e.stateNode;if(t=t.childContextTypes,typeof o.getChildContext!="function")return n;o=o.getChildContext();for(var r in o)if(!(r in t))throw Error(I(108,Tm(e)||"Unknown",r));return J({},n,o)}function Br(e){return e=(e=e.stateNode)&&e.__reactInternalMemoizedMergedChildContext||At,tn=ye.current,q(ye,e),q(Le,Le.current),!0}function Jl(e,t,n){var o=e.stateNode;if(!o)throw Error(I(169));n?(e=hd(e,t,tn),o.__reactInternalMemoizedMergedChildContext=e,K(Le),K(ye),q(ye,e)):K(Le),q(Le,n)}var at=null,ui=!1,Bi=!1;function yd(e){at===null?at=[e]:at.push(e)}function ef(e){ui=!0,yd(e)}function Ft(){if(!Bi&&at!==null){Bi=!0;var e=0,t=G;try{var n=at;for(G=1;e<n.length;e++){var o=n[e];do o=o(!0);while(o!==null)}at=null,ui=!1}catch(r){throw at!==null&&(at=at.slice(e+1)),Fu($a,Ft),r}finally{G=t,Bi=!1}}return null}var Pn=[],$n=0,Ur=null,Fr=0,Ne=[],Ae=0,nn=null,lt=1,ct="";function Ht(e,t){Pn[$n++]=Fr,Pn[$n++]=Ur,Ur=e,Fr=t}function vd(e,t,n){Ne[Ae++]=lt,Ne[Ae++]=ct,Ne[Ae++]=nn,nn=e;var o=lt;e=ct;var r=32-Qe(o)-1;o&=~(1<<r),n+=1;var i=32-Qe(t)+r;if(30<i){var s=r-r%5;i=(o&(1<<s)-1).toString(32),o>>=s,r-=s,lt=1<<32-Qe(t)+r|n<<r|o,ct=i+e}else lt=1<<i|n<<r|o,ct=e}function za(e){e.return!==null&&(Ht(e,1),vd(e,1,0))}function Da(e){for(;e===Ur;)Ur=Pn[--$n],Pn[$n]=null,Fr=Pn[--$n],Pn[$n]=null;for(;e===nn;)nn=Ne[--Ae],Ne[Ae]=null,ct=Ne[--Ae],Ne[Ae]=null,lt=Ne[--Ae],Ne[Ae]=null}var ze=null,Re=null,Y=!1,qe=null;function wd(e,t){var n=Be(5,null,null,0);n.elementType="DELETED",n.stateNode=t,n.return=e,t=e.deletions,t===null?(e.deletions=[n],e.flags|=16):t.push(n)}function ec(e,t){switch(e.tag){case 5:var n=e.type;return t=t.nodeType!==1||n.toLowerCase()!==t.nodeName.toLowerCase()?null:t,t!==null?(e.stateNode=t,ze=e,Re=zt(t.firstChild),!0):!1;case 6:return t=e.pendingProps===""||t.nodeType!==3?null:t,t!==null?(e.stateNode=t,ze=e,Re=null,!0):!1;case 13:return t=t.nodeType!==8?null:t,t!==null?(n=nn!==null?{id:lt,overflow:ct}:null,e.memoizedState={dehydrated:t,treeContext:n,retryLane:1073741824},n=Be(18,null,null,0),n.stateNode=t,n.return=e,e.child=n,ze=e,Re=null,!0):!1;default:return!1}}function Ms(e){return(e.mode&1)!==0&&(e.flags&128)===0}function Ts(e){if(Y){var t=Re;if(t){var n=t;if(!ec(e,t)){if(Ms(e))throw Error(I(418));t=zt(n.nextSibling);var o=ze;t&&ec(e,t)?wd(o,n):(e.flags=e.flags&-4097|2,Y=!1,ze=e)}}else{if(Ms(e))throw Error(I(418));e.flags=e.flags&-4097|2,Y=!1,ze=e}}}function tc(e){for(e=e.return;e!==null&&e.tag!==5&&e.tag!==3&&e.tag!==13;)e=e.return;ze=e}function sr(e){if(e!==ze)return!1;if(!Y)return tc(e),Y=!0,!1;var t;if((t=e.tag!==3)&&!(t=e.tag!==5)&&(t=e.type,t=t!=="head"&&t!=="body"&&!zs(e.type,e.memoizedProps)),t&&(t=Re)){if(Ms(e))throw xd(),Error(I(418));for(;t;)wd(e,t),t=zt(t.nextSibling)}if(tc(e),e.tag===13){if(e=e.memoizedState,e=e!==null?e.dehydrated:null,!e)throw Error(I(317));e:{for(e=e.nextSibling,t=0;e;){if(e.nodeType===8){var n=e.data;if(n==="/$"){if(t===0){Re=zt(e.nextSibling);break e}t--}else n!=="$"&&n!=="$!"&&n!=="$?"||t++}e=e.nextSibling}Re=null}}else Re=ze?zt(e.stateNode.nextSibling):null;return!0}function xd(){for(var e=Re;e;)e=zt(e.nextSibling)}function Tn(){Re=ze=null,Y=!1}function Oa(e){qe===null?qe=[e]:qe.push(e)}var tf=ht.ReactCurrentBatchConfig;function oo(e,t,n){if(e=n.ref,e!==null&&typeof e!="function"&&typeof e!="object"){if(n._owner){if(n=n._owner,n){if(n.tag!==1)throw Error(I(309));var o=n.stateNode}if(!o)throw Error(I(147,e));var r=o,i=""+e;return t!==null&&t.ref!==null&&typeof t.ref=="function"&&t.ref._stringRef===i?t.ref:(t=function(s){var a=r.refs;s===null?delete a[i]:a[i]=s},t._stringRef=i,t)}if(typeof e!="string")throw Error(I(284));if(!n._owner)throw Error(I(290,e))}return e}function ar(e,t){throw e=Object.prototype.toString.call(t),Error(I(31,e==="[object Object]"?"object with keys {"+Object.keys(t).join(", ")+"}":e))}function nc(e){var t=e._init;return t(e._payload)}function bd(e){function t(h,g){if(e){var y=h.deletions;y===null?(h.deletions=[g],h.flags|=16):y.push(g)}}function n(h,g){if(!e)return null;for(;g!==null;)t(h,g),g=g.sibling;return null}function o(h,g){for(h=new Map;g!==null;)g.key!==null?h.set(g.key,g):h.set(g.index,g),g=g.sibling;return h}function r(h,g){return h=Mt(h,g),h.index=0,h.sibling=null,h}function i(h,g,y){return h.index=y,e?(y=h.alternate,y!==null?(y=y.index,y<g?(h.flags|=2,g):y):(h.flags|=2,g)):(h.flags|=1048576,g)}function s(h){return e&&h.alternate===null&&(h.flags|=2),h}function a(h,g,y,P){return g===null||g.tag!==6?(g=qi(y,h.mode,P),g.return=h,g):(g=r(g,y),g.return=h,g)}function l(h,g,y,P){var $=y.type;return $===hn?u(h,g,y.props.children,P,y.key):g!==null&&(g.elementType===$||typeof $=="object"&&$!==null&&$.$$typeof===bt&&nc($)===g.type)?(P=r(g,y.props),P.ref=oo(h,g,y),P.return=h,P):(P=_r(y.type,y.key,y.props,null,h.mode,P),P.ref=oo(h,g,y),P.return=h,P)}function c(h,g,y,P){return g===null||g.tag!==4||g.stateNode.containerInfo!==y.containerInfo||g.stateNode.implementation!==y.implementation?(g=Qi(y,h.mode,P),g.return=h,g):(g=r(g,y.children||[]),g.return=h,g)}function u(h,g,y,P,$){return g===null||g.tag!==7?(g=en(y,h.mode,P,$),g.return=h,g):(g=r(g,y),g.return=h,g)}function d(h,g,y){if(typeof g=="string"&&g!==""||typeof g=="number")return g=qi(""+g,h.mode,y),g.return=h,g;if(typeof g=="object"&&g!==null){switch(g.$$typeof){case Yo:return y=_r(g.type,g.key,g.props,null,h.mode,y),y.ref=oo(h,null,g),y.return=h,y;case fn:return g=Qi(g,h.mode,y),g.return=h,g;case bt:var P=g._init;return d(h,P(g._payload),y)}if(ao(g)||Zn(g))return g=en(g,h.mode,y,null),g.return=h,g;ar(h,g)}return null}function p(h,g,y,P){var $=g!==null?g.key:null;if(typeof y=="string"&&y!==""||typeof y=="number")return $!==null?null:a(h,g,""+y,P);if(typeof y=="object"&&y!==null){switch(y.$$typeof){case Yo:return y.key===$?l(h,g,y,P):null;case fn:return y.key===$?c(h,g,y,P):null;case bt:return $=y._init,p(h,g,$(y._payload),P)}if(ao(y)||Zn(y))return $!==null?null:u(h,g,y,P,null);ar(h,y)}return null}function f(h,g,y,P,$){if(typeof P=="string"&&P!==""||typeof P=="number")return h=h.get(y)||null,a(g,h,""+P,$);if(typeof P=="object"&&P!==null){switch(P.$$typeof){case Yo:return h=h.get(P.key===null?y:P.key)||null,l(g,h,P,$);case fn:return h=h.get(P.key===null?y:P.key)||null,c(g,h,P,$);case bt:var C=P._init;return f(h,g,y,C(P._payload),$)}if(ao(P)||Zn(P))return h=h.get(y)||null,u(g,h,P,$,null);ar(g,P)}return null}function v(h,g,y,P){for(var $=null,C=null,L=g,k=g=0,M=null;L!==null&&k<y.length;k++){L.index>k?(M=L,L=null):M=L.sibling;var E=p(h,L,y[k],P);if(E===null){L===null&&(L=M);break}e&&L&&E.alternate===null&&t(h,L),g=i(E,g,k),C===null?$=E:C.sibling=E,C=E,L=M}if(k===y.length)return n(h,L),Y&&Ht(h,k),$;if(L===null){for(;k<y.length;k++)L=d(h,y[k],P),L!==null&&(g=i(L,g,k),C===null?$=L:C.sibling=L,C=L);return Y&&Ht(h,k),$}for(L=o(h,L);k<y.length;k++)M=f(L,h,k,y[k],P),M!==null&&(e&&M.alternate!==null&&L.delete(M.key===null?k:M.key),g=i(M,g,k),C===null?$=M:C.sibling=M,C=M);return e&&L.forEach(function(F){return t(h,F)}),Y&&Ht(h,k),$}function w(h,g,y,P){var $=Zn(y);if(typeof $!="function")throw Error(I(150));if(y=$.call(y),y==null)throw Error(I(151));for(var C=$=null,L=g,k=g=0,M=null,E=y.next();L!==null&&!E.done;k++,E=y.next()){L.index>k?(M=L,L=null):M=L.sibling;var F=p(h,L,E.value,P);if(F===null){L===null&&(L=M);break}e&&L&&F.alternate===null&&t(h,L),g=i(F,g,k),C===null?$=F:C.sibling=F,C=F,L=M}if(E.done)return n(h,L),Y&&Ht(h,k),$;if(L===null){for(;!E.done;k++,E=y.next())E=d(h,E.value,P),E!==null&&(g=i(E,g,k),C===null?$=E:C.sibling=E,C=E);return Y&&Ht(h,k),$}for(L=o(h,L);!E.done;k++,E=y.next())E=f(L,h,k,E.value,P),E!==null&&(e&&E.alternate!==null&&L.delete(E.key===null?k:E.key),g=i(E,g,k),C===null?$=E:C.sibling=E,C=E);return e&&L.forEach(function(H){return t(h,H)}),Y&&Ht(h,k),$}function b(h,g,y,P){if(typeof y=="object"&&y!==null&&y.type===hn&&y.key===null&&(y=y.props.children),typeof y=="object"&&y!==null){switch(y.$$typeof){case Yo:e:{for(var $=y.key,C=g;C!==null;){if(C.key===$){if($=y.type,$===hn){if(C.tag===7){n(h,C.sibling),g=r(C,y.props.children),g.return=h,h=g;break e}}else if(C.elementType===$||typeof $=="object"&&$!==null&&$.$$typeof===bt&&nc($)===C.type){n(h,C.sibling),g=r(C,y.props),g.ref=oo(h,C,y),g.return=h,h=g;break e}n(h,C);break}else t(h,C);C=C.sibling}y.type===hn?(g=en(y.props.children,h.mode,P,y.key),g.return=h,h=g):(P=_r(y.type,y.key,y.props,null,h.mode,P),P.ref=oo(h,g,y),P.return=h,h=P)}return s(h);case fn:e:{for(C=y.key;g!==null;){if(g.key===C)if(g.tag===4&&g.stateNode.containerInfo===y.containerInfo&&g.stateNode.implementation===y.implementation){n(h,g.sibling),g=r(g,y.children||[]),g.return=h,h=g;break e}else{n(h,g);break}else t(h,g);g=g.sibling}g=Qi(y,h.mode,P),g.return=h,h=g}return s(h);case bt:return C=y._init,b(h,g,C(y._payload),P)}if(ao(y))return v(h,g,y,P);if(Zn(y))return w(h,g,y,P);ar(h,y)}return typeof y=="string"&&y!==""||typeof y=="number"?(y=""+y,g!==null&&g.tag===6?(n(h,g.sibling),g=r(g,y),g.return=h,h=g):(n(h,g),g=qi(y,h.mode,P),g.return=h,h=g),s(h)):n(h,g)}return b}var Nn=bd(!0),Pd=bd(!1),Wr=Ut(null),Vr=null,Sn=null,ja=null;function Ma(){ja=Sn=Vr=null}function Ta(e){var t=Wr.current;K(Wr),e._currentValue=t}function Ns(e,t,n){for(;e!==null;){var o=e.alternate;if((e.childLanes&t)!==t?(e.childLanes|=t,o!==null&&(o.childLanes|=t)):o!==null&&(o.childLanes&t)!==t&&(o.childLanes|=t),e===n)break;e=e.return}}function Rn(e,t){Vr=e,ja=Sn=null,e=e.dependencies,e!==null&&e.firstContext!==null&&(e.lanes&t&&(Ce=!0),e.firstContext=null)}function Fe(e){var t=e._currentValue;if(ja!==e)if(e={context:e,memoizedValue:t,next:null},Sn===null){if(Vr===null)throw Error(I(308));Sn=e,Vr.dependencies={lanes:0,firstContext:e}}else Sn=Sn.next=e;return t}var Yt=null;function Na(e){Yt===null?Yt=[e]:Yt.push(e)}function $d(e,t,n,o){var r=t.interleaved;return r===null?(n.next=n,Na(t)):(n.next=r.next,r.next=n),t.interleaved=n,gt(e,o)}function gt(e,t){e.lanes|=t;var n=e.alternate;for(n!==null&&(n.lanes|=t),n=e,e=e.return;e!==null;)e.childLanes|=t,n=e.alternate,n!==null&&(n.childLanes|=t),n=e,e=e.return;return n.tag===3?n.stateNode:null}var Pt=!1;function Aa(e){e.updateQueue={baseState:e.memoizedState,firstBaseUpdate:null,lastBaseUpdate:null,shared:{pending:null,interleaved:null,lanes:0},effects:null}}function Sd(e,t){e=e.updateQueue,t.updateQueue===e&&(t.updateQueue={baseState:e.baseState,firstBaseUpdate:e.firstBaseUpdate,lastBaseUpdate:e.lastBaseUpdate,shared:e.shared,effects:e.effects})}function ut(e,t){return{eventTime:e,lane:t,tag:0,payload:null,callback:null,next:null}}function Dt(e,t,n){var o=e.updateQueue;if(o===null)return null;if(o=o.shared,U&2){var r=o.pending;return r===null?t.next=t:(t.next=r.next,r.next=t),o.pending=t,gt(e,n)}return r=o.interleaved,r===null?(t.next=t,Na(o)):(t.next=r.next,r.next=t),o.interleaved=t,gt(e,n)}function $r(e,t,n){if(t=t.updateQueue,t!==null&&(t=t.shared,(n&4194240)!==0)){var o=t.lanes;o&=e.pendingLanes,n|=o,t.lanes=n,Sa(e,n)}}function oc(e,t){var n=e.updateQueue,o=e.alternate;if(o!==null&&(o=o.updateQueue,n===o)){var r=null,i=null;if(n=n.firstBaseUpdate,n!==null){do{var s={eventTime:n.eventTime,lane:n.lane,tag:n.tag,payload:n.payload,callback:n.callback,next:null};i===null?r=i=s:i=i.next=s,n=n.next}while(n!==null);i===null?r=i=t:i=i.next=t}else r=i=t;n={baseState:o.baseState,firstBaseUpdate:r,lastBaseUpdate:i,shared:o.shared,effects:o.effects},e.updateQueue=n;return}e=n.lastBaseUpdate,e===null?n.firstBaseUpdate=t:e.next=t,n.lastBaseUpdate=t}function Hr(e,t,n,o){var r=e.updateQueue;Pt=!1;var i=r.firstBaseUpdate,s=r.lastBaseUpdate,a=r.shared.pending;if(a!==null){r.shared.pending=null;var l=a,c=l.next;l.next=null,s===null?i=c:s.next=c,s=l;var u=e.alternate;u!==null&&(u=u.updateQueue,a=u.lastBaseUpdate,a!==s&&(a===null?u.firstBaseUpdate=c:a.next=c,u.lastBaseUpdate=l))}if(i!==null){var d=r.baseState;s=0,u=c=l=null,a=i;do{var p=a.lane,f=a.eventTime;if((o&p)===p){u!==null&&(u=u.next={eventTime:f,lane:0,tag:a.tag,payload:a.payload,callback:a.callback,next:null});e:{var v=e,w=a;switch(p=t,f=n,w.tag){case 1:if(v=w.payload,typeof v=="function"){d=v.call(f,d,p);break e}d=v;break e;case 3:v.flags=v.flags&-65537|128;case 0:if(v=w.payload,p=typeof v=="function"?v.call(f,d,p):v,p==null)break e;d=J({},d,p);break e;case 2:Pt=!0}}a.callback!==null&&a.lane!==0&&(e.flags|=64,p=r.effects,p===null?r.effects=[a]:p.push(a))}else f={eventTime:f,lane:p,tag:a.tag,payload:a.payload,callback:a.callback,next:null},u===null?(c=u=f,l=d):u=u.next=f,s|=p;if(a=a.next,a===null){if(a=r.shared.pending,a===null)break;p=a,a=p.next,p.next=null,r.lastBaseUpdate=p,r.shared.pending=null}}while(!0);if(u===null&&(l=d),r.baseState=l,r.firstBaseUpdate=c,r.lastBaseUpdate=u,t=r.shared.interleaved,t!==null){r=t;do s|=r.lane,r=r.next;while(r!==t)}else i===null&&(r.shared.lanes=0);rn|=s,e.lanes=s,e.memoizedState=d}}function rc(e,t,n){if(e=t.effects,t.effects=null,e!==null)for(t=0;t<e.length;t++){var o=e[t],r=o.callback;if(r!==null){if(o.callback=null,o=n,typeof r!="function")throw Error(I(191,r));r.call(o)}}}var Go={},nt=Ut(Go),Do=Ut(Go),Oo=Ut(Go);function Xt(e){if(e===Go)throw Error(I(174));return e}function Ba(e,t){switch(q(Oo,t),q(Do,e),q(nt,Go),e=t.nodeType,e){case 9:case 11:t=(t=t.documentElement)?t.namespaceURI:vs(null,"");break;default:e=e===8?t.parentNode:t,t=e.namespaceURI||null,e=e.tagName,t=vs(t,e)}K(nt),q(nt,t)}function An(){K(nt),K(Do),K(Oo)}function Cd(e){Xt(Oo.current);var t=Xt(nt.current),n=vs(t,e.type);t!==n&&(q(Do,e),q(nt,n))}function Ua(e){Do.current===e&&(K(nt),K(Do))}var X=Ut(0);function Gr(e){for(var t=e;t!==null;){if(t.tag===13){var n=t.memoizedState;if(n!==null&&(n=n.dehydrated,n===null||n.data==="$?"||n.data==="$!"))return t}else if(t.tag===19&&t.memoizedProps.revealOrder!==void 0){if(t.flags&128)return t}else if(t.child!==null){t.child.return=t,t=t.child;continue}if(t===e)break;for(;t.sibling===null;){if(t.return===null||t.return===e)return null;t=t.return}t.sibling.return=t.return,t=t.sibling}return null}var Ui=[];function Fa(){for(var e=0;e<Ui.length;e++)Ui[e]._workInProgressVersionPrimary=null;Ui.length=0}var Sr=ht.ReactCurrentDispatcher,Fi=ht.ReactCurrentBatchConfig,on=0,Z=null,ie=null,le=null,qr=!1,vo=!1,jo=0,nf=0;function ge(){throw Error(I(321))}function Wa(e,t){if(t===null)return!1;for(var n=0;n<t.length&&n<e.length;n++)if(!Ye(e[n],t[n]))return!1;return!0}function Va(e,t,n,o,r,i){if(on=i,Z=t,t.memoizedState=null,t.updateQueue=null,t.lanes=0,Sr.current=e===null||e.memoizedState===null?af:lf,e=n(o,r),vo){i=0;do{if(vo=!1,jo=0,25<=i)throw Error(I(301));i+=1,le=ie=null,t.updateQueue=null,Sr.current=cf,e=n(o,r)}while(vo)}if(Sr.current=Qr,t=ie!==null&&ie.next!==null,on=0,le=ie=Z=null,qr=!1,t)throw Error(I(300));return e}function Ha(){var e=jo!==0;return jo=0,e}function Je(){var e={memoizedState:null,baseState:null,baseQueue:null,queue:null,next:null};return le===null?Z.memoizedState=le=e:le=le.next=e,le}function We(){if(ie===null){var e=Z.alternate;e=e!==null?e.memoizedState:null}else e=ie.next;var t=le===null?Z.memoizedState:le.next;if(t!==null)le=t,ie=e;else{if(e===null)throw Error(I(310));ie=e,e={memoizedState:ie.memoizedState,baseState:ie.baseState,baseQueue:ie.baseQueue,queue:ie.queue,next:null},le===null?Z.memoizedState=le=e:le=le.next=e}return le}function Mo(e,t){return typeof t=="function"?t(e):t}function Wi(e){var t=We(),n=t.queue;if(n===null)throw Error(I(311));n.lastRenderedReducer=e;var o=ie,r=o.baseQueue,i=n.pending;if(i!==null){if(r!==null){var s=r.next;r.next=i.next,i.next=s}o.baseQueue=r=i,n.pending=null}if(r!==null){i=r.next,o=o.baseState;var a=s=null,l=null,c=i;do{var u=c.lane;if((on&u)===u)l!==null&&(l=l.next={lane:0,action:c.action,hasEagerState:c.hasEagerState,eagerState:c.eagerState,next:null}),o=c.hasEagerState?c.eagerState:e(o,c.action);else{var d={lane:u,action:c.action,hasEagerState:c.hasEagerState,eagerState:c.eagerState,next:null};l===null?(a=l=d,s=o):l=l.next=d,Z.lanes|=u,rn|=u}c=c.next}while(c!==null&&c!==i);l===null?s=o:l.next=a,Ye(o,t.memoizedState)||(Ce=!0),t.memoizedState=o,t.baseState=s,t.baseQueue=l,n.lastRenderedState=o}if(e=n.interleaved,e!==null){r=e;do i=r.lane,Z.lanes|=i,rn|=i,r=r.next;while(r!==e)}else r===null&&(n.lanes=0);return[t.memoizedState,n.dispatch]}function Vi(e){var t=We(),n=t.queue;if(n===null)throw Error(I(311));n.lastRenderedReducer=e;var o=n.dispatch,r=n.pending,i=t.memoizedState;if(r!==null){n.pending=null;var s=r=r.next;do i=e(i,s.action),s=s.next;while(s!==r);Ye(i,t.memoizedState)||(Ce=!0),t.memoizedState=i,t.baseQueue===null&&(t.baseState=i),n.lastRenderedState=i}return[i,o]}function Ld(){}function kd(e,t){var n=Z,o=We(),r=t(),i=!Ye(o.memoizedState,r);if(i&&(o.memoizedState=r,Ce=!0),o=o.queue,Ga(Ed.bind(null,n,o,e),[e]),o.getSnapshot!==t||i||le!==null&&le.memoizedState.tag&1){if(n.flags|=2048,To(9,_d.bind(null,n,o,r,t),void 0,null),ce===null)throw Error(I(349));on&30||Id(n,t,r)}return r}function Id(e,t,n){e.flags|=16384,e={getSnapshot:t,value:n},t=Z.updateQueue,t===null?(t={lastEffect:null,stores:null},Z.updateQueue=t,t.stores=[e]):(n=t.stores,n===null?t.stores=[e]:n.push(e))}function _d(e,t,n,o){t.value=n,t.getSnapshot=o,Rd(t)&&zd(e)}function Ed(e,t,n){return n(function(){Rd(t)&&zd(e)})}function Rd(e){var t=e.getSnapshot;e=e.value;try{var n=t();return!Ye(e,n)}catch{return!0}}function zd(e){var t=gt(e,1);t!==null&&Ke(t,e,1,-1)}function ic(e){var t=Je();return typeof e=="function"&&(e=e()),t.memoizedState=t.baseState=e,e={pending:null,interleaved:null,lanes:0,dispatch:null,lastRenderedReducer:Mo,lastRenderedState:e},t.queue=e,e=e.dispatch=sf.bind(null,Z,e),[t.memoizedState,e]}function To(e,t,n,o){return e={tag:e,create:t,destroy:n,deps:o,next:null},t=Z.updateQueue,t===null?(t={lastEffect:null,stores:null},Z.updateQueue=t,t.lastEffect=e.next=e):(n=t.lastEffect,n===null?t.lastEffect=e.next=e:(o=n.next,n.next=e,e.next=o,t.lastEffect=e)),e}function Dd(){return We().memoizedState}function Cr(e,t,n,o){var r=Je();Z.flags|=e,r.memoizedState=To(1|t,n,void 0,o===void 0?null:o)}function di(e,t,n,o){var r=We();o=o===void 0?null:o;var i=void 0;if(ie!==null){var s=ie.memoizedState;if(i=s.destroy,o!==null&&Wa(o,s.deps)){r.memoizedState=To(t,n,i,o);return}}Z.flags|=e,r.memoizedState=To(1|t,n,i,o)}function sc(e,t){return Cr(8390656,8,e,t)}function Ga(e,t){return di(2048,8,e,t)}function Od(e,t){return di(4,2,e,t)}function jd(e,t){return di(4,4,e,t)}function Md(e,t){if(typeof t=="function")return e=e(),t(e),function(){t(null)};if(t!=null)return e=e(),t.current=e,function(){t.current=null}}function Td(e,t,n){return n=n!=null?n.concat([e]):null,di(4,4,Md.bind(null,t,e),n)}function qa(){}function Nd(e,t){var n=We();t=t===void 0?null:t;var o=n.memoizedState;return o!==null&&t!==null&&Wa(t,o[1])?o[0]:(n.memoizedState=[e,t],e)}function Ad(e,t){var n=We();t=t===void 0?null:t;var o=n.memoizedState;return o!==null&&t!==null&&Wa(t,o[1])?o[0]:(e=e(),n.memoizedState=[e,t],e)}function Bd(e,t,n){return on&21?(Ye(n,t)||(n=Hu(),Z.lanes|=n,rn|=n,e.baseState=!0),t):(e.baseState&&(e.baseState=!1,Ce=!0),e.memoizedState=n)}function of(e,t){var n=G;G=n!==0&&4>n?n:4,e(!0);var o=Fi.transition;Fi.transition={};try{e(!1),t()}finally{G=n,Fi.transition=o}}function Ud(){return We().memoizedState}function rf(e,t,n){var o=jt(e);if(n={lane:o,action:n,hasEagerState:!1,eagerState:null,next:null},Fd(e))Wd(t,n);else if(n=$d(e,t,n,o),n!==null){var r=be();Ke(n,e,o,r),Vd(n,t,o)}}function sf(e,t,n){var o=jt(e),r={lane:o,action:n,hasEagerState:!1,eagerState:null,next:null};if(Fd(e))Wd(t,r);else{var i=e.alternate;if(e.lanes===0&&(i===null||i.lanes===0)&&(i=t.lastRenderedReducer,i!==null))try{var s=t.lastRenderedState,a=i(s,n);if(r.hasEagerState=!0,r.eagerState=a,Ye(a,s)){var l=t.interleaved;l===null?(r.next=r,Na(t)):(r.next=l.next,l.next=r),t.interleaved=r;return}}catch{}finally{}n=$d(e,t,r,o),n!==null&&(r=be(),Ke(n,e,o,r),Vd(n,t,o))}}function Fd(e){var t=e.alternate;return e===Z||t!==null&&t===Z}function Wd(e,t){vo=qr=!0;var n=e.pending;n===null?t.next=t:(t.next=n.next,n.next=t),e.pending=t}function Vd(e,t,n){if(n&4194240){var o=t.lanes;o&=e.pendingLanes,n|=o,t.lanes=n,Sa(e,n)}}var Qr={readContext:Fe,useCallback:ge,useContext:ge,useEffect:ge,useImperativeHandle:ge,useInsertionEffect:ge,useLayoutEffect:ge,useMemo:ge,useReducer:ge,useRef:ge,useState:ge,useDebugValue:ge,useDeferredValue:ge,useTransition:ge,useMutableSource:ge,useSyncExternalStore:ge,useId:ge,unstable_isNewReconciler:!1},af={readContext:Fe,useCallback:function(e,t){return Je().memoizedState=[e,t===void 0?null:t],e},useContext:Fe,useEffect:sc,useImperativeHandle:function(e,t,n){return n=n!=null?n.concat([e]):null,Cr(4194308,4,Md.bind(null,t,e),n)},useLayoutEffect:function(e,t){return Cr(4194308,4,e,t)},useInsertionEffect:function(e,t){return Cr(4,2,e,t)},useMemo:function(e,t){var n=Je();return t=t===void 0?null:t,e=e(),n.memoizedState=[e,t],e},useReducer:function(e,t,n){var o=Je();return t=n!==void 0?n(t):t,o.memoizedState=o.baseState=t,e={pending:null,interleaved:null,lanes:0,dispatch:null,lastRenderedReducer:e,lastRenderedState:t},o.queue=e,e=e.dispatch=rf.bind(null,Z,e),[o.memoizedState,e]},useRef:function(e){var t=Je();return e={current:e},t.memoizedState=e},useState:ic,useDebugValue:qa,useDeferredValue:function(e){return Je().memoizedState=e},useTransition:function(){var e=ic(!1),t=e[0];return e=of.bind(null,e[1]),Je().memoizedState=e,[t,e]},useMutableSource:function(){},useSyncExternalStore:function(e,t,n){var o=Z,r=Je();if(Y){if(n===void 0)throw Error(I(407));n=n()}else{if(n=t(),ce===null)throw Error(I(349));on&30||Id(o,t,n)}r.memoizedState=n;var i={value:n,getSnapshot:t};return r.queue=i,sc(Ed.bind(null,o,i,e),[e]),o.flags|=2048,To(9,_d.bind(null,o,i,n,t),void 0,null),n},useId:function(){var e=Je(),t=ce.identifierPrefix;if(Y){var n=ct,o=lt;n=(o&~(1<<32-Qe(o)-1)).toString(32)+n,t=":"+t+"R"+n,n=jo++,0<n&&(t+="H"+n.toString(32)),t+=":"}else n=nf++,t=":"+t+"r"+n.toString(32)+":";return e.memoizedState=t},unstable_isNewReconciler:!1},lf={readContext:Fe,useCallback:Nd,useContext:Fe,useEffect:Ga,useImperativeHandle:Td,useInsertionEffect:Od,useLayoutEffect:jd,useMemo:Ad,useReducer:Wi,useRef:Dd,useState:function(){return Wi(Mo)},useDebugValue:qa,useDeferredValue:function(e){var t=We();return Bd(t,ie.memoizedState,e)},useTransition:function(){var e=Wi(Mo)[0],t=We().memoizedState;return[e,t]},useMutableSource:Ld,useSyncExternalStore:kd,useId:Ud,unstable_isNewReconciler:!1},cf={readContext:Fe,useCallback:Nd,useContext:Fe,useEffect:Ga,useImperativeHandle:Td,useInsertionEffect:Od,useLayoutEffect:jd,useMemo:Ad,useReducer:Vi,useRef:Dd,useState:function(){return Vi(Mo)},useDebugValue:qa,useDeferredValue:function(e){var t=We();return ie===null?t.memoizedState=e:Bd(t,ie.memoizedState,e)},useTransition:function(){var e=Vi(Mo)[0],t=We().memoizedState;return[e,t]},useMutableSource:Ld,useSyncExternalStore:kd,useId:Ud,unstable_isNewReconciler:!1};function He(e,t){if(e&&e.defaultProps){t=J({},t),e=e.defaultProps;for(var n in e)t[n]===void 0&&(t[n]=e[n]);return t}return t}function As(e,t,n,o){t=e.memoizedState,n=n(o,t),n=n==null?t:J({},t,n),e.memoizedState=n,e.lanes===0&&(e.updateQueue.baseState=n)}var pi={isMounted:function(e){return(e=e._reactInternals)?cn(e)===e:!1},enqueueSetState:function(e,t,n){e=e._reactInternals;var o=be(),r=jt(e),i=ut(o,r);i.payload=t,n!=null&&(i.callback=n),t=Dt(e,i,r),t!==null&&(Ke(t,e,r,o),$r(t,e,r))},enqueueReplaceState:function(e,t,n){e=e._reactInternals;var o=be(),r=jt(e),i=ut(o,r);i.tag=1,i.payload=t,n!=null&&(i.callback=n),t=Dt(e,i,r),t!==null&&(Ke(t,e,r,o),$r(t,e,r))},enqueueForceUpdate:function(e,t){e=e._reactInternals;var n=be(),o=jt(e),r=ut(n,o);r.tag=2,t!=null&&(r.callback=t),t=Dt(e,r,o),t!==null&&(Ke(t,e,o,n),$r(t,e,o))}};function ac(e,t,n,o,r,i,s){return e=e.stateNode,typeof e.shouldComponentUpdate=="function"?e.shouldComponentUpdate(o,i,s):t.prototype&&t.prototype.isPureReactComponent?!_o(n,o)||!_o(r,i):!0}function Hd(e,t,n){var o=!1,r=At,i=t.contextType;return typeof i=="object"&&i!==null?i=Fe(i):(r=ke(t)?tn:ye.current,o=t.contextTypes,i=(o=o!=null)?Mn(e,r):At),t=new t(n,i),e.memoizedState=t.state!==null&&t.state!==void 0?t.state:null,t.updater=pi,e.stateNode=t,t._reactInternals=e,o&&(e=e.stateNode,e.__reactInternalMemoizedUnmaskedChildContext=r,e.__reactInternalMemoizedMaskedChildContext=i),t}function lc(e,t,n,o){e=t.state,typeof t.componentWillReceiveProps=="function"&&t.componentWillReceiveProps(n,o),typeof t.UNSAFE_componentWillReceiveProps=="function"&&t.UNSAFE_componentWillReceiveProps(n,o),t.state!==e&&pi.enqueueReplaceState(t,t.state,null)}function Bs(e,t,n,o){var r=e.stateNode;r.props=n,r.state=e.memoizedState,r.refs={},Aa(e);var i=t.contextType;typeof i=="object"&&i!==null?r.context=Fe(i):(i=ke(t)?tn:ye.current,r.context=Mn(e,i)),r.state=e.memoizedState,i=t.getDerivedStateFromProps,typeof i=="function"&&(As(e,t,i,n),r.state=e.memoizedState),typeof t.getDerivedStateFromProps=="function"||typeof r.getSnapshotBeforeUpdate=="function"||typeof r.UNSAFE_componentWillMount!="function"&&typeof r.componentWillMount!="function"||(t=r.state,typeof r.componentWillMount=="function"&&r.componentWillMount(),typeof r.UNSAFE_componentWillMount=="function"&&r.UNSAFE_componentWillMount(),t!==r.state&&pi.enqueueReplaceState(r,r.state,null),Hr(e,n,r,o),r.state=e.memoizedState),typeof r.componentDidMount=="function"&&(e.flags|=4194308)}function Bn(e,t){try{var n="",o=t;do n+=Mm(o),o=o.return;while(o);var r=n}catch(i){r=`
Error generating stack: `+i.message+`
`+i.stack}return{value:e,source:t,stack:r,digest:null}}function Hi(e,t,n){return{value:e,source:null,stack:n??null,digest:t??null}}function Us(e,t){try{console.error(t.value)}catch(n){setTimeout(function(){throw n})}}var uf=typeof WeakMap=="function"?WeakMap:Map;function Gd(e,t,n){n=ut(-1,n),n.tag=3,n.payload={element:null};var o=t.value;return n.callback=function(){Yr||(Yr=!0,Xs=o),Us(e,t)},n}function qd(e,t,n){n=ut(-1,n),n.tag=3;var o=e.type.getDerivedStateFromError;if(typeof o=="function"){var r=t.value;n.payload=function(){return o(r)},n.callback=function(){Us(e,t)}}var i=e.stateNode;return i!==null&&typeof i.componentDidCatch=="function"&&(n.callback=function(){Us(e,t),typeof o!="function"&&(Ot===null?Ot=new Set([this]):Ot.add(this));var s=t.stack;this.componentDidCatch(t.value,{componentStack:s!==null?s:""})}),n}function cc(e,t,n){var o=e.pingCache;if(o===null){o=e.pingCache=new uf;var r=new Set;o.set(t,r)}else r=o.get(t),r===void 0&&(r=new Set,o.set(t,r));r.has(n)||(r.add(n),e=Sf.bind(null,e,t,n),t.then(e,e))}function uc(e){do{var t;if((t=e.tag===13)&&(t=e.memoizedState,t=t!==null?t.dehydrated!==null:!0),t)return e;e=e.return}while(e!==null);return null}function dc(e,t,n,o,r){return e.mode&1?(e.flags|=65536,e.lanes=r,e):(e===t?e.flags|=65536:(e.flags|=128,n.flags|=131072,n.flags&=-52805,n.tag===1&&(n.alternate===null?n.tag=17:(t=ut(-1,1),t.tag=2,Dt(n,t,1))),n.lanes|=1),e)}var df=ht.ReactCurrentOwner,Ce=!1;function xe(e,t,n,o){t.child=e===null?Pd(t,null,n,o):Nn(t,e.child,n,o)}function pc(e,t,n,o,r){n=n.render;var i=t.ref;return Rn(t,r),o=Va(e,t,n,o,i,r),n=Ha(),e!==null&&!Ce?(t.updateQueue=e.updateQueue,t.flags&=-2053,e.lanes&=~r,ft(e,t,r)):(Y&&n&&za(t),t.flags|=1,xe(e,t,o,r),t.child)}function mc(e,t,n,o,r){if(e===null){var i=n.type;return typeof i=="function"&&!tl(i)&&i.defaultProps===void 0&&n.compare===null&&n.defaultProps===void 0?(t.tag=15,t.type=i,Qd(e,t,i,o,r)):(e=_r(n.type,null,o,t,t.mode,r),e.ref=t.ref,e.return=t,t.child=e)}if(i=e.child,!(e.lanes&r)){var s=i.memoizedProps;if(n=n.compare,n=n!==null?n:_o,n(s,o)&&e.ref===t.ref)return ft(e,t,r)}return t.flags|=1,e=Mt(i,o),e.ref=t.ref,e.return=t,t.child=e}function Qd(e,t,n,o,r){if(e!==null){var i=e.memoizedProps;if(_o(i,o)&&e.ref===t.ref)if(Ce=!1,t.pendingProps=o=i,(e.lanes&r)!==0)e.flags&131072&&(Ce=!0);else return t.lanes=e.lanes,ft(e,t,r)}return Fs(e,t,n,o,r)}function Kd(e,t,n){var o=t.pendingProps,r=o.children,i=e!==null?e.memoizedState:null;if(o.mode==="hidden")if(!(t.mode&1))t.memoizedState={baseLanes:0,cachePool:null,transitions:null},q(Ln,Ee),Ee|=n;else{if(!(n&1073741824))return e=i!==null?i.baseLanes|n:n,t.lanes=t.childLanes=1073741824,t.memoizedState={baseLanes:e,cachePool:null,transitions:null},t.updateQueue=null,q(Ln,Ee),Ee|=e,null;t.memoizedState={baseLanes:0,cachePool:null,transitions:null},o=i!==null?i.baseLanes:n,q(Ln,Ee),Ee|=o}else i!==null?(o=i.baseLanes|n,t.memoizedState=null):o=n,q(Ln,Ee),Ee|=o;return xe(e,t,r,n),t.child}function Yd(e,t){var n=t.ref;(e===null&&n!==null||e!==null&&e.ref!==n)&&(t.flags|=512,t.flags|=2097152)}function Fs(e,t,n,o,r){var i=ke(n)?tn:ye.current;return i=Mn(t,i),Rn(t,r),n=Va(e,t,n,o,i,r),o=Ha(),e!==null&&!Ce?(t.updateQueue=e.updateQueue,t.flags&=-2053,e.lanes&=~r,ft(e,t,r)):(Y&&o&&za(t),t.flags|=1,xe(e,t,n,r),t.child)}function gc(e,t,n,o,r){if(ke(n)){var i=!0;Br(t)}else i=!1;if(Rn(t,r),t.stateNode===null)Lr(e,t),Hd(t,n,o),Bs(t,n,o,r),o=!0;else if(e===null){var s=t.stateNode,a=t.memoizedProps;s.props=a;var l=s.context,c=n.contextType;typeof c=="object"&&c!==null?c=Fe(c):(c=ke(n)?tn:ye.current,c=Mn(t,c));var u=n.getDerivedStateFromProps,d=typeof u=="function"||typeof s.getSnapshotBeforeUpdate=="function";d||typeof s.UNSAFE_componentWillReceiveProps!="function"&&typeof s.componentWillReceiveProps!="function"||(a!==o||l!==c)&&lc(t,s,o,c),Pt=!1;var p=t.memoizedState;s.state=p,Hr(t,o,s,r),l=t.memoizedState,a!==o||p!==l||Le.current||Pt?(typeof u=="function"&&(As(t,n,u,o),l=t.memoizedState),(a=Pt||ac(t,n,a,o,p,l,c))?(d||typeof s.UNSAFE_componentWillMount!="function"&&typeof s.componentWillMount!="function"||(typeof s.componentWillMount=="function"&&s.componentWillMount(),typeof s.UNSAFE_componentWillMount=="function"&&s.UNSAFE_componentWillMount()),typeof s.componentDidMount=="function"&&(t.flags|=4194308)):(typeof s.componentDidMount=="function"&&(t.flags|=4194308),t.memoizedProps=o,t.memoizedState=l),s.props=o,s.state=l,s.context=c,o=a):(typeof s.componentDidMount=="function"&&(t.flags|=4194308),o=!1)}else{s=t.stateNode,Sd(e,t),a=t.memoizedProps,c=t.type===t.elementType?a:He(t.type,a),s.props=c,d=t.pendingProps,p=s.context,l=n.contextType,typeof l=="object"&&l!==null?l=Fe(l):(l=ke(n)?tn:ye.current,l=Mn(t,l));var f=n.getDerivedStateFromProps;(u=typeof f=="function"||typeof s.getSnapshotBeforeUpdate=="function")||typeof s.UNSAFE_componentWillReceiveProps!="function"&&typeof s.componentWillReceiveProps!="function"||(a!==d||p!==l)&&lc(t,s,o,l),Pt=!1,p=t.memoizedState,s.state=p,Hr(t,o,s,r);var v=t.memoizedState;a!==d||p!==v||Le.current||Pt?(typeof f=="function"&&(As(t,n,f,o),v=t.memoizedState),(c=Pt||ac(t,n,c,o,p,v,l)||!1)?(u||typeof s.UNSAFE_componentWillUpdate!="function"&&typeof s.componentWillUpdate!="function"||(typeof s.componentWillUpdate=="function"&&s.componentWillUpdate(o,v,l),typeof s.UNSAFE_componentWillUpdate=="function"&&s.UNSAFE_componentWillUpdate(o,v,l)),typeof s.componentDidUpdate=="function"&&(t.flags|=4),typeof s.getSnapshotBeforeUpdate=="function"&&(t.flags|=1024)):(typeof s.componentDidUpdate!="function"||a===e.memoizedProps&&p===e.memoizedState||(t.flags|=4),typeof s.getSnapshotBeforeUpdate!="function"||a===e.memoizedProps&&p===e.memoizedState||(t.flags|=1024),t.memoizedProps=o,t.memoizedState=v),s.props=o,s.state=v,s.context=l,o=c):(typeof s.componentDidUpdate!="function"||a===e.memoizedProps&&p===e.memoizedState||(t.flags|=4),typeof s.getSnapshotBeforeUpdate!="function"||a===e.memoizedProps&&p===e.memoizedState||(t.flags|=1024),o=!1)}return Ws(e,t,n,o,i,r)}function Ws(e,t,n,o,r,i){Yd(e,t);var s=(t.flags&128)!==0;if(!o&&!s)return r&&Jl(t,n,!1),ft(e,t,i);o=t.stateNode,df.current=t;var a=s&&typeof n.getDerivedStateFromError!="function"?null:o.render();return t.flags|=1,e!==null&&s?(t.child=Nn(t,e.child,null,i),t.child=Nn(t,null,a,i)):xe(e,t,a,i),t.memoizedState=o.state,r&&Jl(t,n,!0),t.child}function Xd(e){var t=e.stateNode;t.pendingContext?Zl(e,t.pendingContext,t.pendingContext!==t.context):t.context&&Zl(e,t.context,!1),Ba(e,t.containerInfo)}function fc(e,t,n,o,r){return Tn(),Oa(r),t.flags|=256,xe(e,t,n,o),t.child}var Vs={dehydrated:null,treeContext:null,retryLane:0};function Hs(e){return{baseLanes:e,cachePool:null,transitions:null}}function Zd(e,t,n){var o=t.pendingProps,r=X.current,i=!1,s=(t.flags&128)!==0,a;if((a=s)||(a=e!==null&&e.memoizedState===null?!1:(r&2)!==0),a?(i=!0,t.flags&=-129):(e===null||e.memoizedState!==null)&&(r|=1),q(X,r&1),e===null)return Ts(t),e=t.memoizedState,e!==null&&(e=e.dehydrated,e!==null)?(t.mode&1?e.data==="$!"?t.lanes=8:t.lanes=1073741824:t.lanes=1,null):(s=o.children,e=o.fallback,i?(o=t.mode,i=t.child,s={mode:"hidden",children:s},!(o&1)&&i!==null?(i.childLanes=0,i.pendingProps=s):i=fi(s,o,0,null),e=en(e,o,n,null),i.return=t,e.return=t,i.sibling=e,t.child=i,t.child.memoizedState=Hs(n),t.memoizedState=Vs,e):Qa(t,s));if(r=e.memoizedState,r!==null&&(a=r.dehydrated,a!==null))return pf(e,t,s,o,a,r,n);if(i){i=o.fallback,s=t.mode,r=e.child,a=r.sibling;var l={mode:"hidden",children:o.children};return!(s&1)&&t.child!==r?(o=t.child,o.childLanes=0,o.pendingProps=l,t.deletions=null):(o=Mt(r,l),o.subtreeFlags=r.subtreeFlags&14680064),a!==null?i=Mt(a,i):(i=en(i,s,n,null),i.flags|=2),i.return=t,o.return=t,o.sibling=i,t.child=o,o=i,i=t.child,s=e.child.memoizedState,s=s===null?Hs(n):{baseLanes:s.baseLanes|n,cachePool:null,transitions:s.transitions},i.memoizedState=s,i.childLanes=e.childLanes&~n,t.memoizedState=Vs,o}return i=e.child,e=i.sibling,o=Mt(i,{mode:"visible",children:o.children}),!(t.mode&1)&&(o.lanes=n),o.return=t,o.sibling=null,e!==null&&(n=t.deletions,n===null?(t.deletions=[e],t.flags|=16):n.push(e)),t.child=o,t.memoizedState=null,o}function Qa(e,t){return t=fi({mode:"visible",children:t},e.mode,0,null),t.return=e,e.child=t}function lr(e,t,n,o){return o!==null&&Oa(o),Nn(t,e.child,null,n),e=Qa(t,t.pendingProps.children),e.flags|=2,t.memoizedState=null,e}function pf(e,t,n,o,r,i,s){if(n)return t.flags&256?(t.flags&=-257,o=Hi(Error(I(422))),lr(e,t,s,o)):t.memoizedState!==null?(t.child=e.child,t.flags|=128,null):(i=o.fallback,r=t.mode,o=fi({mode:"visible",children:o.children},r,0,null),i=en(i,r,s,null),i.flags|=2,o.return=t,i.return=t,o.sibling=i,t.child=o,t.mode&1&&Nn(t,e.child,null,s),t.child.memoizedState=Hs(s),t.memoizedState=Vs,i);if(!(t.mode&1))return lr(e,t,s,null);if(r.data==="$!"){if(o=r.nextSibling&&r.nextSibling.dataset,o)var a=o.dgst;return o=a,i=Error(I(419)),o=Hi(i,o,void 0),lr(e,t,s,o)}if(a=(s&e.childLanes)!==0,Ce||a){if(o=ce,o!==null){switch(s&-s){case 4:r=2;break;case 16:r=8;break;case 64:case 128:case 256:case 512:case 1024:case 2048:case 4096:case 8192:case 16384:case 32768:case 65536:case 131072:case 262144:case 524288:case 1048576:case 2097152:case 4194304:case 8388608:case 16777216:case 33554432:case 67108864:r=32;break;case 536870912:r=268435456;break;default:r=0}r=r&(o.suspendedLanes|s)?0:r,r!==0&&r!==i.retryLane&&(i.retryLane=r,gt(e,r),Ke(o,e,r,-1))}return el(),o=Hi(Error(I(421))),lr(e,t,s,o)}return r.data==="$?"?(t.flags|=128,t.child=e.child,t=Cf.bind(null,e),r._reactRetry=t,null):(e=i.treeContext,Re=zt(r.nextSibling),ze=t,Y=!0,qe=null,e!==null&&(Ne[Ae++]=lt,Ne[Ae++]=ct,Ne[Ae++]=nn,lt=e.id,ct=e.overflow,nn=t),t=Qa(t,o.children),t.flags|=4096,t)}function hc(e,t,n){e.lanes|=t;var o=e.alternate;o!==null&&(o.lanes|=t),Ns(e.return,t,n)}function Gi(e,t,n,o,r){var i=e.memoizedState;i===null?e.memoizedState={isBackwards:t,rendering:null,renderingStartTime:0,last:o,tail:n,tailMode:r}:(i.isBackwards=t,i.rendering=null,i.renderingStartTime=0,i.last=o,i.tail=n,i.tailMode=r)}function Jd(e,t,n){var o=t.pendingProps,r=o.revealOrder,i=o.tail;if(xe(e,t,o.children,n),o=X.current,o&2)o=o&1|2,t.flags|=128;else{if(e!==null&&e.flags&128)e:for(e=t.child;e!==null;){if(e.tag===13)e.memoizedState!==null&&hc(e,n,t);else if(e.tag===19)hc(e,n,t);else if(e.child!==null){e.child.return=e,e=e.child;continue}if(e===t)break e;for(;e.sibling===null;){if(e.return===null||e.return===t)break e;e=e.return}e.sibling.return=e.return,e=e.sibling}o&=1}if(q(X,o),!(t.mode&1))t.memoizedState=null;else switch(r){case"forwards":for(n=t.child,r=null;n!==null;)e=n.alternate,e!==null&&Gr(e)===null&&(r=n),n=n.sibling;n=r,n===null?(r=t.child,t.child=null):(r=n.sibling,n.sibling=null),Gi(t,!1,r,n,i);break;case"backwards":for(n=null,r=t.child,t.child=null;r!==null;){if(e=r.alternate,e!==null&&Gr(e)===null){t.child=r;break}e=r.sibling,r.sibling=n,n=r,r=e}Gi(t,!0,n,null,i);break;case"together":Gi(t,!1,null,null,void 0);break;default:t.memoizedState=null}return t.child}function Lr(e,t){!(t.mode&1)&&e!==null&&(e.alternate=null,t.alternate=null,t.flags|=2)}function ft(e,t,n){if(e!==null&&(t.dependencies=e.dependencies),rn|=t.lanes,!(n&t.childLanes))return null;if(e!==null&&t.child!==e.child)throw Error(I(153));if(t.child!==null){for(e=t.child,n=Mt(e,e.pendingProps),t.child=n,n.return=t;e.sibling!==null;)e=e.sibling,n=n.sibling=Mt(e,e.pendingProps),n.return=t;n.sibling=null}return t.child}function mf(e,t,n){switch(t.tag){case 3:Xd(t),Tn();break;case 5:Cd(t);break;case 1:ke(t.type)&&Br(t);break;case 4:Ba(t,t.stateNode.containerInfo);break;case 10:var o=t.type._context,r=t.memoizedProps.value;q(Wr,o._currentValue),o._currentValue=r;break;case 13:if(o=t.memoizedState,o!==null)return o.dehydrated!==null?(q(X,X.current&1),t.flags|=128,null):n&t.child.childLanes?Zd(e,t,n):(q(X,X.current&1),e=ft(e,t,n),e!==null?e.sibling:null);q(X,X.current&1);break;case 19:if(o=(n&t.childLanes)!==0,e.flags&128){if(o)return Jd(e,t,n);t.flags|=128}if(r=t.memoizedState,r!==null&&(r.rendering=null,r.tail=null,r.lastEffect=null),q(X,X.current),o)break;return null;case 22:case 23:return t.lanes=0,Kd(e,t,n)}return ft(e,t,n)}var ep,Gs,tp,np;ep=function(e,t){for(var n=t.child;n!==null;){if(n.tag===5||n.tag===6)e.appendChild(n.stateNode);else if(n.tag!==4&&n.child!==null){n.child.return=n,n=n.child;continue}if(n===t)break;for(;n.sibling===null;){if(n.return===null||n.return===t)return;n=n.return}n.sibling.return=n.return,n=n.sibling}};Gs=function(){};tp=function(e,t,n,o){var r=e.memoizedProps;if(r!==o){e=t.stateNode,Xt(nt.current);var i=null;switch(n){case"input":r=gs(e,r),o=gs(e,o),i=[];break;case"select":r=J({},r,{value:void 0}),o=J({},o,{value:void 0}),i=[];break;case"textarea":r=ys(e,r),o=ys(e,o),i=[];break;default:typeof r.onClick!="function"&&typeof o.onClick=="function"&&(e.onclick=Nr)}ws(n,o);var s;n=null;for(c in r)if(!o.hasOwnProperty(c)&&r.hasOwnProperty(c)&&r[c]!=null)if(c==="style"){var a=r[c];for(s in a)a.hasOwnProperty(s)&&(n||(n={}),n[s]="")}else c!=="dangerouslySetInnerHTML"&&c!=="children"&&c!=="suppressContentEditableWarning"&&c!=="suppressHydrationWarning"&&c!=="autoFocus"&&(Po.hasOwnProperty(c)?i||(i=[]):(i=i||[]).push(c,null));for(c in o){var l=o[c];if(a=r!=null?r[c]:void 0,o.hasOwnProperty(c)&&l!==a&&(l!=null||a!=null))if(c==="style")if(a){for(s in a)!a.hasOwnProperty(s)||l&&l.hasOwnProperty(s)||(n||(n={}),n[s]="");for(s in l)l.hasOwnProperty(s)&&a[s]!==l[s]&&(n||(n={}),n[s]=l[s])}else n||(i||(i=[]),i.push(c,n)),n=l;else c==="dangerouslySetInnerHTML"?(l=l?l.__html:void 0,a=a?a.__html:void 0,l!=null&&a!==l&&(i=i||[]).push(c,l)):c==="children"?typeof l!="string"&&typeof l!="number"||(i=i||[]).push(c,""+l):c!=="suppressContentEditableWarning"&&c!=="suppressHydrationWarning"&&(Po.hasOwnProperty(c)?(l!=null&&c==="onScroll"&&Q("scroll",e),i||a===l||(i=[])):(i=i||[]).push(c,l))}n&&(i=i||[]).push("style",n);var c=i;(t.updateQueue=c)&&(t.flags|=4)}};np=function(e,t,n,o){n!==o&&(t.flags|=4)};function ro(e,t){if(!Y)switch(e.tailMode){case"hidden":t=e.tail;for(var n=null;t!==null;)t.alternate!==null&&(n=t),t=t.sibling;n===null?e.tail=null:n.sibling=null;break;case"collapsed":n=e.tail;for(var o=null;n!==null;)n.alternate!==null&&(o=n),n=n.sibling;o===null?t||e.tail===null?e.tail=null:e.tail.sibling=null:o.sibling=null}}function fe(e){var t=e.alternate!==null&&e.alternate.child===e.child,n=0,o=0;if(t)for(var r=e.child;r!==null;)n|=r.lanes|r.childLanes,o|=r.subtreeFlags&14680064,o|=r.flags&14680064,r.return=e,r=r.sibling;else for(r=e.child;r!==null;)n|=r.lanes|r.childLanes,o|=r.subtreeFlags,o|=r.flags,r.return=e,r=r.sibling;return e.subtreeFlags|=o,e.childLanes=n,t}function gf(e,t,n){var o=t.pendingProps;switch(Da(t),t.tag){case 2:case 16:case 15:case 0:case 11:case 7:case 8:case 12:case 9:case 14:return fe(t),null;case 1:return ke(t.type)&&Ar(),fe(t),null;case 3:return o=t.stateNode,An(),K(Le),K(ye),Fa(),o.pendingContext&&(o.context=o.pendingContext,o.pendingContext=null),(e===null||e.child===null)&&(sr(t)?t.flags|=4:e===null||e.memoizedState.isDehydrated&&!(t.flags&256)||(t.flags|=1024,qe!==null&&(ea(qe),qe=null))),Gs(e,t),fe(t),null;case 5:Ua(t);var r=Xt(Oo.current);if(n=t.type,e!==null&&t.stateNode!=null)tp(e,t,n,o,r),e.ref!==t.ref&&(t.flags|=512,t.flags|=2097152);else{if(!o){if(t.stateNode===null)throw Error(I(166));return fe(t),null}if(e=Xt(nt.current),sr(t)){o=t.stateNode,n=t.type;var i=t.memoizedProps;switch(o[et]=t,o[zo]=i,e=(t.mode&1)!==0,n){case"dialog":Q("cancel",o),Q("close",o);break;case"iframe":case"object":case"embed":Q("load",o);break;case"video":case"audio":for(r=0;r<co.length;r++)Q(co[r],o);break;case"source":Q("error",o);break;case"img":case"image":case"link":Q("error",o),Q("load",o);break;case"details":Q("toggle",o);break;case"input":Cl(o,i),Q("invalid",o);break;case"select":o._wrapperState={wasMultiple:!!i.multiple},Q("invalid",o);break;case"textarea":kl(o,i),Q("invalid",o)}ws(n,i),r=null;for(var s in i)if(i.hasOwnProperty(s)){var a=i[s];s==="children"?typeof a=="string"?o.textContent!==a&&(i.suppressHydrationWarning!==!0&&ir(o.textContent,a,e),r=["children",a]):typeof a=="number"&&o.textContent!==""+a&&(i.suppressHydrationWarning!==!0&&ir(o.textContent,a,e),r=["children",""+a]):Po.hasOwnProperty(s)&&a!=null&&s==="onScroll"&&Q("scroll",o)}switch(n){case"input":Xo(o),Ll(o,i,!0);break;case"textarea":Xo(o),Il(o);break;case"select":case"option":break;default:typeof i.onClick=="function"&&(o.onclick=Nr)}o=r,t.updateQueue=o,o!==null&&(t.flags|=4)}else{s=r.nodeType===9?r:r.ownerDocument,e==="http://www.w3.org/1999/xhtml"&&(e=Eu(n)),e==="http://www.w3.org/1999/xhtml"?n==="script"?(e=s.createElement("div"),e.innerHTML="<script><\/script>",e=e.removeChild(e.firstChild)):typeof o.is=="string"?e=s.createElement(n,{is:o.is}):(e=s.createElement(n),n==="select"&&(s=e,o.multiple?s.multiple=!0:o.size&&(s.size=o.size))):e=s.createElementNS(e,n),e[et]=t,e[zo]=o,ep(e,t,!1,!1),t.stateNode=e;e:{switch(s=xs(n,o),n){case"dialog":Q("cancel",e),Q("close",e),r=o;break;case"iframe":case"object":case"embed":Q("load",e),r=o;break;case"video":case"audio":for(r=0;r<co.length;r++)Q(co[r],e);r=o;break;case"source":Q("error",e),r=o;break;case"img":case"image":case"link":Q("error",e),Q("load",e),r=o;break;case"details":Q("toggle",e),r=o;break;case"input":Cl(e,o),r=gs(e,o),Q("invalid",e);break;case"option":r=o;break;case"select":e._wrapperState={wasMultiple:!!o.multiple},r=J({},o,{value:void 0}),Q("invalid",e);break;case"textarea":kl(e,o),r=ys(e,o),Q("invalid",e);break;default:r=o}ws(n,r),a=r;for(i in a)if(a.hasOwnProperty(i)){var l=a[i];i==="style"?Du(e,l):i==="dangerouslySetInnerHTML"?(l=l?l.__html:void 0,l!=null&&Ru(e,l)):i==="children"?typeof l=="string"?(n!=="textarea"||l!=="")&&$o(e,l):typeof l=="number"&&$o(e,""+l):i!=="suppressContentEditableWarning"&&i!=="suppressHydrationWarning"&&i!=="autoFocus"&&(Po.hasOwnProperty(i)?l!=null&&i==="onScroll"&&Q("scroll",e):l!=null&&va(e,i,l,s))}switch(n){case"input":Xo(e),Ll(e,o,!1);break;case"textarea":Xo(e),Il(e);break;case"option":o.value!=null&&e.setAttribute("value",""+Nt(o.value));break;case"select":e.multiple=!!o.multiple,i=o.value,i!=null?kn(e,!!o.multiple,i,!1):o.defaultValue!=null&&kn(e,!!o.multiple,o.defaultValue,!0);break;default:typeof r.onClick=="function"&&(e.onclick=Nr)}switch(n){case"button":case"input":case"select":case"textarea":o=!!o.autoFocus;break e;case"img":o=!0;break e;default:o=!1}}o&&(t.flags|=4)}t.ref!==null&&(t.flags|=512,t.flags|=2097152)}return fe(t),null;case 6:if(e&&t.stateNode!=null)np(e,t,e.memoizedProps,o);else{if(typeof o!="string"&&t.stateNode===null)throw Error(I(166));if(n=Xt(Oo.current),Xt(nt.current),sr(t)){if(o=t.stateNode,n=t.memoizedProps,o[et]=t,(i=o.nodeValue!==n)&&(e=ze,e!==null))switch(e.tag){case 3:ir(o.nodeValue,n,(e.mode&1)!==0);break;case 5:e.memoizedProps.suppressHydrationWarning!==!0&&ir(o.nodeValue,n,(e.mode&1)!==0)}i&&(t.flags|=4)}else o=(n.nodeType===9?n:n.ownerDocument).createTextNode(o),o[et]=t,t.stateNode=o}return fe(t),null;case 13:if(K(X),o=t.memoizedState,e===null||e.memoizedState!==null&&e.memoizedState.dehydrated!==null){if(Y&&Re!==null&&t.mode&1&&!(t.flags&128))xd(),Tn(),t.flags|=98560,i=!1;else if(i=sr(t),o!==null&&o.dehydrated!==null){if(e===null){if(!i)throw Error(I(318));if(i=t.memoizedState,i=i!==null?i.dehydrated:null,!i)throw Error(I(317));i[et]=t}else Tn(),!(t.flags&128)&&(t.memoizedState=null),t.flags|=4;fe(t),i=!1}else qe!==null&&(ea(qe),qe=null),i=!0;if(!i)return t.flags&65536?t:null}return t.flags&128?(t.lanes=n,t):(o=o!==null,o!==(e!==null&&e.memoizedState!==null)&&o&&(t.child.flags|=8192,t.mode&1&&(e===null||X.current&1?se===0&&(se=3):el())),t.updateQueue!==null&&(t.flags|=4),fe(t),null);case 4:return An(),Gs(e,t),e===null&&Eo(t.stateNode.containerInfo),fe(t),null;case 10:return Ta(t.type._context),fe(t),null;case 17:return ke(t.type)&&Ar(),fe(t),null;case 19:if(K(X),i=t.memoizedState,i===null)return fe(t),null;if(o=(t.flags&128)!==0,s=i.rendering,s===null)if(o)ro(i,!1);else{if(se!==0||e!==null&&e.flags&128)for(e=t.child;e!==null;){if(s=Gr(e),s!==null){for(t.flags|=128,ro(i,!1),o=s.updateQueue,o!==null&&(t.updateQueue=o,t.flags|=4),t.subtreeFlags=0,o=n,n=t.child;n!==null;)i=n,e=o,i.flags&=14680066,s=i.alternate,s===null?(i.childLanes=0,i.lanes=e,i.child=null,i.subtreeFlags=0,i.memoizedProps=null,i.memoizedState=null,i.updateQueue=null,i.dependencies=null,i.stateNode=null):(i.childLanes=s.childLanes,i.lanes=s.lanes,i.child=s.child,i.subtreeFlags=0,i.deletions=null,i.memoizedProps=s.memoizedProps,i.memoizedState=s.memoizedState,i.updateQueue=s.updateQueue,i.type=s.type,e=s.dependencies,i.dependencies=e===null?null:{lanes:e.lanes,firstContext:e.firstContext}),n=n.sibling;return q(X,X.current&1|2),t.child}e=e.sibling}i.tail!==null&&ne()>Un&&(t.flags|=128,o=!0,ro(i,!1),t.lanes=4194304)}else{if(!o)if(e=Gr(s),e!==null){if(t.flags|=128,o=!0,n=e.updateQueue,n!==null&&(t.updateQueue=n,t.flags|=4),ro(i,!0),i.tail===null&&i.tailMode==="hidden"&&!s.alternate&&!Y)return fe(t),null}else 2*ne()-i.renderingStartTime>Un&&n!==1073741824&&(t.flags|=128,o=!0,ro(i,!1),t.lanes=4194304);i.isBackwards?(s.sibling=t.child,t.child=s):(n=i.last,n!==null?n.sibling=s:t.child=s,i.last=s)}return i.tail!==null?(t=i.tail,i.rendering=t,i.tail=t.sibling,i.renderingStartTime=ne(),t.sibling=null,n=X.current,q(X,o?n&1|2:n&1),t):(fe(t),null);case 22:case 23:return Ja(),o=t.memoizedState!==null,e!==null&&e.memoizedState!==null!==o&&(t.flags|=8192),o&&t.mode&1?Ee&1073741824&&(fe(t),t.subtreeFlags&6&&(t.flags|=8192)):fe(t),null;case 24:return null;case 25:return null}throw Error(I(156,t.tag))}function ff(e,t){switch(Da(t),t.tag){case 1:return ke(t.type)&&Ar(),e=t.flags,e&65536?(t.flags=e&-65537|128,t):null;case 3:return An(),K(Le),K(ye),Fa(),e=t.flags,e&65536&&!(e&128)?(t.flags=e&-65537|128,t):null;case 5:return Ua(t),null;case 13:if(K(X),e=t.memoizedState,e!==null&&e.dehydrated!==null){if(t.alternate===null)throw Error(I(340));Tn()}return e=t.flags,e&65536?(t.flags=e&-65537|128,t):null;case 19:return K(X),null;case 4:return An(),null;case 10:return Ta(t.type._context),null;case 22:case 23:return Ja(),null;case 24:return null;default:return null}}var cr=!1,he=!1,hf=typeof WeakSet=="function"?WeakSet:Set,z=null;function Cn(e,t){var n=e.ref;if(n!==null)if(typeof n=="function")try{n(null)}catch(o){te(e,t,o)}else n.current=null}function qs(e,t,n){try{n()}catch(o){te(e,t,o)}}var yc=!1;function yf(e,t){if(Es=jr,e=ad(),Ra(e)){if("selectionStart"in e)var n={start:e.selectionStart,end:e.selectionEnd};else e:{n=(n=e.ownerDocument)&&n.defaultView||window;var o=n.getSelection&&n.getSelection();if(o&&o.rangeCount!==0){n=o.anchorNode;var r=o.anchorOffset,i=o.focusNode;o=o.focusOffset;try{n.nodeType,i.nodeType}catch{n=null;break e}var s=0,a=-1,l=-1,c=0,u=0,d=e,p=null;t:for(;;){for(var f;d!==n||r!==0&&d.nodeType!==3||(a=s+r),d!==i||o!==0&&d.nodeType!==3||(l=s+o),d.nodeType===3&&(s+=d.nodeValue.length),(f=d.firstChild)!==null;)p=d,d=f;for(;;){if(d===e)break t;if(p===n&&++c===r&&(a=s),p===i&&++u===o&&(l=s),(f=d.nextSibling)!==null)break;d=p,p=d.parentNode}d=f}n=a===-1||l===-1?null:{start:a,end:l}}else n=null}n=n||{start:0,end:0}}else n=null;for(Rs={focusedElem:e,selectionRange:n},jr=!1,z=t;z!==null;)if(t=z,e=t.child,(t.subtreeFlags&1028)!==0&&e!==null)e.return=t,z=e;else for(;z!==null;){t=z;try{var v=t.alternate;if(t.flags&1024)switch(t.tag){case 0:case 11:case 15:break;case 1:if(v!==null){var w=v.memoizedProps,b=v.memoizedState,h=t.stateNode,g=h.getSnapshotBeforeUpdate(t.elementType===t.type?w:He(t.type,w),b);h.__reactInternalSnapshotBeforeUpdate=g}break;case 3:var y=t.stateNode.containerInfo;y.nodeType===1?y.textContent="":y.nodeType===9&&y.documentElement&&y.removeChild(y.documentElement);break;case 5:case 6:case 4:case 17:break;default:throw Error(I(163))}}catch(P){te(t,t.return,P)}if(e=t.sibling,e!==null){e.return=t.return,z=e;break}z=t.return}return v=yc,yc=!1,v}function wo(e,t,n){var o=t.updateQueue;if(o=o!==null?o.lastEffect:null,o!==null){var r=o=o.next;do{if((r.tag&e)===e){var i=r.destroy;r.destroy=void 0,i!==void 0&&qs(t,n,i)}r=r.next}while(r!==o)}}function mi(e,t){if(t=t.updateQueue,t=t!==null?t.lastEffect:null,t!==null){var n=t=t.next;do{if((n.tag&e)===e){var o=n.create;n.destroy=o()}n=n.next}while(n!==t)}}function Qs(e){var t=e.ref;if(t!==null){var n=e.stateNode;switch(e.tag){case 5:e=n;break;default:e=n}typeof t=="function"?t(e):t.current=e}}function op(e){var t=e.alternate;t!==null&&(e.alternate=null,op(t)),e.child=null,e.deletions=null,e.sibling=null,e.tag===5&&(t=e.stateNode,t!==null&&(delete t[et],delete t[zo],delete t[Os],delete t[Zg],delete t[Jg])),e.stateNode=null,e.return=null,e.dependencies=null,e.memoizedProps=null,e.memoizedState=null,e.pendingProps=null,e.stateNode=null,e.updateQueue=null}function rp(e){return e.tag===5||e.tag===3||e.tag===4}function vc(e){e:for(;;){for(;e.sibling===null;){if(e.return===null||rp(e.return))return null;e=e.return}for(e.sibling.return=e.return,e=e.sibling;e.tag!==5&&e.tag!==6&&e.tag!==18;){if(e.flags&2||e.child===null||e.tag===4)continue e;e.child.return=e,e=e.child}if(!(e.flags&2))return e.stateNode}}function Ks(e,t,n){var o=e.tag;if(o===5||o===6)e=e.stateNode,t?n.nodeType===8?n.parentNode.insertBefore(e,t):n.insertBefore(e,t):(n.nodeType===8?(t=n.parentNode,t.insertBefore(e,n)):(t=n,t.appendChild(e)),n=n._reactRootContainer,n!=null||t.onclick!==null||(t.onclick=Nr));else if(o!==4&&(e=e.child,e!==null))for(Ks(e,t,n),e=e.sibling;e!==null;)Ks(e,t,n),e=e.sibling}function Ys(e,t,n){var o=e.tag;if(o===5||o===6)e=e.stateNode,t?n.insertBefore(e,t):n.appendChild(e);else if(o!==4&&(e=e.child,e!==null))for(Ys(e,t,n),e=e.sibling;e!==null;)Ys(e,t,n),e=e.sibling}var ue=null,Ge=!1;function wt(e,t,n){for(n=n.child;n!==null;)ip(e,t,n),n=n.sibling}function ip(e,t,n){if(tt&&typeof tt.onCommitFiberUnmount=="function")try{tt.onCommitFiberUnmount(ii,n)}catch{}switch(n.tag){case 5:he||Cn(n,t);case 6:var o=ue,r=Ge;ue=null,wt(e,t,n),ue=o,Ge=r,ue!==null&&(Ge?(e=ue,n=n.stateNode,e.nodeType===8?e.parentNode.removeChild(n):e.removeChild(n)):ue.removeChild(n.stateNode));break;case 18:ue!==null&&(Ge?(e=ue,n=n.stateNode,e.nodeType===8?Ai(e.parentNode,n):e.nodeType===1&&Ai(e,n),ko(e)):Ai(ue,n.stateNode));break;case 4:o=ue,r=Ge,ue=n.stateNode.containerInfo,Ge=!0,wt(e,t,n),ue=o,Ge=r;break;case 0:case 11:case 14:case 15:if(!he&&(o=n.updateQueue,o!==null&&(o=o.lastEffect,o!==null))){r=o=o.next;do{var i=r,s=i.destroy;i=i.tag,s!==void 0&&(i&2||i&4)&&qs(n,t,s),r=r.next}while(r!==o)}wt(e,t,n);break;case 1:if(!he&&(Cn(n,t),o=n.stateNode,typeof o.componentWillUnmount=="function"))try{o.props=n.memoizedProps,o.state=n.memoizedState,o.componentWillUnmount()}catch(a){te(n,t,a)}wt(e,t,n);break;case 21:wt(e,t,n);break;case 22:n.mode&1?(he=(o=he)||n.memoizedState!==null,wt(e,t,n),he=o):wt(e,t,n);break;default:wt(e,t,n)}}function wc(e){var t=e.updateQueue;if(t!==null){e.updateQueue=null;var n=e.stateNode;n===null&&(n=e.stateNode=new hf),t.forEach(function(o){var r=Lf.bind(null,e,o);n.has(o)||(n.add(o),o.then(r,r))})}}function Ve(e,t){var n=t.deletions;if(n!==null)for(var o=0;o<n.length;o++){var r=n[o];try{var i=e,s=t,a=s;e:for(;a!==null;){switch(a.tag){case 5:ue=a.stateNode,Ge=!1;break e;case 3:ue=a.stateNode.containerInfo,Ge=!0;break e;case 4:ue=a.stateNode.containerInfo,Ge=!0;break e}a=a.return}if(ue===null)throw Error(I(160));ip(i,s,r),ue=null,Ge=!1;var l=r.alternate;l!==null&&(l.return=null),r.return=null}catch(c){te(r,t,c)}}if(t.subtreeFlags&12854)for(t=t.child;t!==null;)sp(t,e),t=t.sibling}function sp(e,t){var n=e.alternate,o=e.flags;switch(e.tag){case 0:case 11:case 14:case 15:if(Ve(t,e),Xe(e),o&4){try{wo(3,e,e.return),mi(3,e)}catch(w){te(e,e.return,w)}try{wo(5,e,e.return)}catch(w){te(e,e.return,w)}}break;case 1:Ve(t,e),Xe(e),o&512&&n!==null&&Cn(n,n.return);break;case 5:if(Ve(t,e),Xe(e),o&512&&n!==null&&Cn(n,n.return),e.flags&32){var r=e.stateNode;try{$o(r,"")}catch(w){te(e,e.return,w)}}if(o&4&&(r=e.stateNode,r!=null)){var i=e.memoizedProps,s=n!==null?n.memoizedProps:i,a=e.type,l=e.updateQueue;if(e.updateQueue=null,l!==null)try{a==="input"&&i.type==="radio"&&i.name!=null&&Iu(r,i),xs(a,s);var c=xs(a,i);for(s=0;s<l.length;s+=2){var u=l[s],d=l[s+1];u==="style"?Du(r,d):u==="dangerouslySetInnerHTML"?Ru(r,d):u==="children"?$o(r,d):va(r,u,d,c)}switch(a){case"input":fs(r,i);break;case"textarea":_u(r,i);break;case"select":var p=r._wrapperState.wasMultiple;r._wrapperState.wasMultiple=!!i.multiple;var f=i.value;f!=null?kn(r,!!i.multiple,f,!1):p!==!!i.multiple&&(i.defaultValue!=null?kn(r,!!i.multiple,i.defaultValue,!0):kn(r,!!i.multiple,i.multiple?[]:"",!1))}r[zo]=i}catch(w){te(e,e.return,w)}}break;case 6:if(Ve(t,e),Xe(e),o&4){if(e.stateNode===null)throw Error(I(162));r=e.stateNode,i=e.memoizedProps;try{r.nodeValue=i}catch(w){te(e,e.return,w)}}break;case 3:if(Ve(t,e),Xe(e),o&4&&n!==null&&n.memoizedState.isDehydrated)try{ko(t.containerInfo)}catch(w){te(e,e.return,w)}break;case 4:Ve(t,e),Xe(e);break;case 13:Ve(t,e),Xe(e),r=e.child,r.flags&8192&&(i=r.memoizedState!==null,r.stateNode.isHidden=i,!i||r.alternate!==null&&r.alternate.memoizedState!==null||(Xa=ne())),o&4&&wc(e);break;case 22:if(u=n!==null&&n.memoizedState!==null,e.mode&1?(he=(c=he)||u,Ve(t,e),he=c):Ve(t,e),Xe(e),o&8192){if(c=e.memoizedState!==null,(e.stateNode.isHidden=c)&&!u&&e.mode&1)for(z=e,u=e.child;u!==null;){for(d=z=u;z!==null;){switch(p=z,f=p.child,p.tag){case 0:case 11:case 14:case 15:wo(4,p,p.return);break;case 1:Cn(p,p.return);var v=p.stateNode;if(typeof v.componentWillUnmount=="function"){o=p,n=p.return;try{t=o,v.props=t.memoizedProps,v.state=t.memoizedState,v.componentWillUnmount()}catch(w){te(o,n,w)}}break;case 5:Cn(p,p.return);break;case 22:if(p.memoizedState!==null){bc(d);continue}}f!==null?(f.return=p,z=f):bc(d)}u=u.sibling}e:for(u=null,d=e;;){if(d.tag===5){if(u===null){u=d;try{r=d.stateNode,c?(i=r.style,typeof i.setProperty=="function"?i.setProperty("display","none","important"):i.display="none"):(a=d.stateNode,l=d.memoizedProps.style,s=l!=null&&l.hasOwnProperty("display")?l.display:null,a.style.display=zu("display",s))}catch(w){te(e,e.return,w)}}}else if(d.tag===6){if(u===null)try{d.stateNode.nodeValue=c?"":d.memoizedProps}catch(w){te(e,e.return,w)}}else if((d.tag!==22&&d.tag!==23||d.memoizedState===null||d===e)&&d.child!==null){d.child.return=d,d=d.child;continue}if(d===e)break e;for(;d.sibling===null;){if(d.return===null||d.return===e)break e;u===d&&(u=null),d=d.return}u===d&&(u=null),d.sibling.return=d.return,d=d.sibling}}break;case 19:Ve(t,e),Xe(e),o&4&&wc(e);break;case 21:break;default:Ve(t,e),Xe(e)}}function Xe(e){var t=e.flags;if(t&2){try{e:{for(var n=e.return;n!==null;){if(rp(n)){var o=n;break e}n=n.return}throw Error(I(160))}switch(o.tag){case 5:var r=o.stateNode;o.flags&32&&($o(r,""),o.flags&=-33);var i=vc(e);Ys(e,i,r);break;case 3:case 4:var s=o.stateNode.containerInfo,a=vc(e);Ks(e,a,s);break;default:throw Error(I(161))}}catch(l){te(e,e.return,l)}e.flags&=-3}t&4096&&(e.flags&=-4097)}function vf(e,t,n){z=e,ap(e)}function ap(e,t,n){for(var o=(e.mode&1)!==0;z!==null;){var r=z,i=r.child;if(r.tag===22&&o){var s=r.memoizedState!==null||cr;if(!s){var a=r.alternate,l=a!==null&&a.memoizedState!==null||he;a=cr;var c=he;if(cr=s,(he=l)&&!c)for(z=r;z!==null;)s=z,l=s.child,s.tag===22&&s.memoizedState!==null?Pc(r):l!==null?(l.return=s,z=l):Pc(r);for(;i!==null;)z=i,ap(i),i=i.sibling;z=r,cr=a,he=c}xc(e)}else r.subtreeFlags&8772&&i!==null?(i.return=r,z=i):xc(e)}}function xc(e){for(;z!==null;){var t=z;if(t.flags&8772){var n=t.alternate;try{if(t.flags&8772)switch(t.tag){case 0:case 11:case 15:he||mi(5,t);break;case 1:var o=t.stateNode;if(t.flags&4&&!he)if(n===null)o.componentDidMount();else{var r=t.elementType===t.type?n.memoizedProps:He(t.type,n.memoizedProps);o.componentDidUpdate(r,n.memoizedState,o.__reactInternalSnapshotBeforeUpdate)}var i=t.updateQueue;i!==null&&rc(t,i,o);break;case 3:var s=t.updateQueue;if(s!==null){if(n=null,t.child!==null)switch(t.child.tag){case 5:n=t.child.stateNode;break;case 1:n=t.child.stateNode}rc(t,s,n)}break;case 5:var a=t.stateNode;if(n===null&&t.flags&4){n=a;var l=t.memoizedProps;switch(t.type){case"button":case"input":case"select":case"textarea":l.autoFocus&&n.focus();break;case"img":l.src&&(n.src=l.src)}}break;case 6:break;case 4:break;case 12:break;case 13:if(t.memoizedState===null){var c=t.alternate;if(c!==null){var u=c.memoizedState;if(u!==null){var d=u.dehydrated;d!==null&&ko(d)}}}break;case 19:case 17:case 21:case 22:case 23:case 25:break;default:throw Error(I(163))}he||t.flags&512&&Qs(t)}catch(p){te(t,t.return,p)}}if(t===e){z=null;break}if(n=t.sibling,n!==null){n.return=t.return,z=n;break}z=t.return}}function bc(e){for(;z!==null;){var t=z;if(t===e){z=null;break}var n=t.sibling;if(n!==null){n.return=t.return,z=n;break}z=t.return}}function Pc(e){for(;z!==null;){var t=z;try{switch(t.tag){case 0:case 11:case 15:var n=t.return;try{mi(4,t)}catch(l){te(t,n,l)}break;case 1:var o=t.stateNode;if(typeof o.componentDidMount=="function"){var r=t.return;try{o.componentDidMount()}catch(l){te(t,r,l)}}var i=t.return;try{Qs(t)}catch(l){te(t,i,l)}break;case 5:var s=t.return;try{Qs(t)}catch(l){te(t,s,l)}}}catch(l){te(t,t.return,l)}if(t===e){z=null;break}var a=t.sibling;if(a!==null){a.return=t.return,z=a;break}z=t.return}}var wf=Math.ceil,Kr=ht.ReactCurrentDispatcher,Ka=ht.ReactCurrentOwner,Ue=ht.ReactCurrentBatchConfig,U=0,ce=null,re=null,de=0,Ee=0,Ln=Ut(0),se=0,No=null,rn=0,gi=0,Ya=0,xo=null,Se=null,Xa=0,Un=1/0,st=null,Yr=!1,Xs=null,Ot=null,ur=!1,Lt=null,Xr=0,bo=0,Zs=null,kr=-1,Ir=0;function be(){return U&6?ne():kr!==-1?kr:kr=ne()}function jt(e){return e.mode&1?U&2&&de!==0?de&-de:tf.transition!==null?(Ir===0&&(Ir=Hu()),Ir):(e=G,e!==0||(e=window.event,e=e===void 0?16:Zu(e.type)),e):1}function Ke(e,t,n,o){if(50<bo)throw bo=0,Zs=null,Error(I(185));Wo(e,n,o),(!(U&2)||e!==ce)&&(e===ce&&(!(U&2)&&(gi|=n),se===4&&St(e,de)),Ie(e,o),n===1&&U===0&&!(t.mode&1)&&(Un=ne()+500,ui&&Ft()))}function Ie(e,t){var n=e.callbackNode;tg(e,t);var o=Or(e,e===ce?de:0);if(o===0)n!==null&&Rl(n),e.callbackNode=null,e.callbackPriority=0;else if(t=o&-o,e.callbackPriority!==t){if(n!=null&&Rl(n),t===1)e.tag===0?ef($c.bind(null,e)):yd($c.bind(null,e)),Yg(function(){!(U&6)&&Ft()}),n=null;else{switch(Gu(o)){case 1:n=$a;break;case 4:n=Wu;break;case 16:n=Dr;break;case 536870912:n=Vu;break;default:n=Dr}n=fp(n,lp.bind(null,e))}e.callbackPriority=t,e.callbackNode=n}}function lp(e,t){if(kr=-1,Ir=0,U&6)throw Error(I(327));var n=e.callbackNode;if(zn()&&e.callbackNode!==n)return null;var o=Or(e,e===ce?de:0);if(o===0)return null;if(o&30||o&e.expiredLanes||t)t=Zr(e,o);else{t=o;var r=U;U|=2;var i=up();(ce!==e||de!==t)&&(st=null,Un=ne()+500,Jt(e,t));do try{Pf();break}catch(a){cp(e,a)}while(!0);Ma(),Kr.current=i,U=r,re!==null?t=0:(ce=null,de=0,t=se)}if(t!==0){if(t===2&&(r=Cs(e),r!==0&&(o=r,t=Js(e,r))),t===1)throw n=No,Jt(e,0),St(e,o),Ie(e,ne()),n;if(t===6)St(e,o);else{if(r=e.current.alternate,!(o&30)&&!xf(r)&&(t=Zr(e,o),t===2&&(i=Cs(e),i!==0&&(o=i,t=Js(e,i))),t===1))throw n=No,Jt(e,0),St(e,o),Ie(e,ne()),n;switch(e.finishedWork=r,e.finishedLanes=o,t){case 0:case 1:throw Error(I(345));case 2:Gt(e,Se,st);break;case 3:if(St(e,o),(o&130023424)===o&&(t=Xa+500-ne(),10<t)){if(Or(e,0)!==0)break;if(r=e.suspendedLanes,(r&o)!==o){be(),e.pingedLanes|=e.suspendedLanes&r;break}e.timeoutHandle=Ds(Gt.bind(null,e,Se,st),t);break}Gt(e,Se,st);break;case 4:if(St(e,o),(o&4194240)===o)break;for(t=e.eventTimes,r=-1;0<o;){var s=31-Qe(o);i=1<<s,s=t[s],s>r&&(r=s),o&=~i}if(o=r,o=ne()-o,o=(120>o?120:480>o?480:1080>o?1080:1920>o?1920:3e3>o?3e3:4320>o?4320:1960*wf(o/1960))-o,10<o){e.timeoutHandle=Ds(Gt.bind(null,e,Se,st),o);break}Gt(e,Se,st);break;case 5:Gt(e,Se,st);break;default:throw Error(I(329))}}}return Ie(e,ne()),e.callbackNode===n?lp.bind(null,e):null}function Js(e,t){var n=xo;return e.current.memoizedState.isDehydrated&&(Jt(e,t).flags|=256),e=Zr(e,t),e!==2&&(t=Se,Se=n,t!==null&&ea(t)),e}function ea(e){Se===null?Se=e:Se.push.apply(Se,e)}function xf(e){for(var t=e;;){if(t.flags&16384){var n=t.updateQueue;if(n!==null&&(n=n.stores,n!==null))for(var o=0;o<n.length;o++){var r=n[o],i=r.getSnapshot;r=r.value;try{if(!Ye(i(),r))return!1}catch{return!1}}}if(n=t.child,t.subtreeFlags&16384&&n!==null)n.return=t,t=n;else{if(t===e)break;for(;t.sibling===null;){if(t.return===null||t.return===e)return!0;t=t.return}t.sibling.return=t.return,t=t.sibling}}return!0}function St(e,t){for(t&=~Ya,t&=~gi,e.suspendedLanes|=t,e.pingedLanes&=~t,e=e.expirationTimes;0<t;){var n=31-Qe(t),o=1<<n;e[n]=-1,t&=~o}}function $c(e){if(U&6)throw Error(I(327));zn();var t=Or(e,0);if(!(t&1))return Ie(e,ne()),null;var n=Zr(e,t);if(e.tag!==0&&n===2){var o=Cs(e);o!==0&&(t=o,n=Js(e,o))}if(n===1)throw n=No,Jt(e,0),St(e,t),Ie(e,ne()),n;if(n===6)throw Error(I(345));return e.finishedWork=e.current.alternate,e.finishedLanes=t,Gt(e,Se,st),Ie(e,ne()),null}function Za(e,t){var n=U;U|=1;try{return e(t)}finally{U=n,U===0&&(Un=ne()+500,ui&&Ft())}}function sn(e){Lt!==null&&Lt.tag===0&&!(U&6)&&zn();var t=U;U|=1;var n=Ue.transition,o=G;try{if(Ue.transition=null,G=1,e)return e()}finally{G=o,Ue.transition=n,U=t,!(U&6)&&Ft()}}function Ja(){Ee=Ln.current,K(Ln)}function Jt(e,t){e.finishedWork=null,e.finishedLanes=0;var n=e.timeoutHandle;if(n!==-1&&(e.timeoutHandle=-1,Kg(n)),re!==null)for(n=re.return;n!==null;){var o=n;switch(Da(o),o.tag){case 1:o=o.type.childContextTypes,o!=null&&Ar();break;case 3:An(),K(Le),K(ye),Fa();break;case 5:Ua(o);break;case 4:An();break;case 13:K(X);break;case 19:K(X);break;case 10:Ta(o.type._context);break;case 22:case 23:Ja()}n=n.return}if(ce=e,re=e=Mt(e.current,null),de=Ee=t,se=0,No=null,Ya=gi=rn=0,Se=xo=null,Yt!==null){for(t=0;t<Yt.length;t++)if(n=Yt[t],o=n.interleaved,o!==null){n.interleaved=null;var r=o.next,i=n.pending;if(i!==null){var s=i.next;i.next=r,o.next=s}n.pending=o}Yt=null}return e}function cp(e,t){do{var n=re;try{if(Ma(),Sr.current=Qr,qr){for(var o=Z.memoizedState;o!==null;){var r=o.queue;r!==null&&(r.pending=null),o=o.next}qr=!1}if(on=0,le=ie=Z=null,vo=!1,jo=0,Ka.current=null,n===null||n.return===null){se=1,No=t,re=null;break}e:{var i=e,s=n.return,a=n,l=t;if(t=de,a.flags|=32768,l!==null&&typeof l=="object"&&typeof l.then=="function"){var c=l,u=a,d=u.tag;if(!(u.mode&1)&&(d===0||d===11||d===15)){var p=u.alternate;p?(u.updateQueue=p.updateQueue,u.memoizedState=p.memoizedState,u.lanes=p.lanes):(u.updateQueue=null,u.memoizedState=null)}var f=uc(s);if(f!==null){f.flags&=-257,dc(f,s,a,i,t),f.mode&1&&cc(i,c,t),t=f,l=c;var v=t.updateQueue;if(v===null){var w=new Set;w.add(l),t.updateQueue=w}else v.add(l);break e}else{if(!(t&1)){cc(i,c,t),el();break e}l=Error(I(426))}}else if(Y&&a.mode&1){var b=uc(s);if(b!==null){!(b.flags&65536)&&(b.flags|=256),dc(b,s,a,i,t),Oa(Bn(l,a));break e}}i=l=Bn(l,a),se!==4&&(se=2),xo===null?xo=[i]:xo.push(i),i=s;do{switch(i.tag){case 3:i.flags|=65536,t&=-t,i.lanes|=t;var h=Gd(i,l,t);oc(i,h);break e;case 1:a=l;var g=i.type,y=i.stateNode;if(!(i.flags&128)&&(typeof g.getDerivedStateFromError=="function"||y!==null&&typeof y.componentDidCatch=="function"&&(Ot===null||!Ot.has(y)))){i.flags|=65536,t&=-t,i.lanes|=t;var P=qd(i,a,t);oc(i,P);break e}}i=i.return}while(i!==null)}pp(n)}catch($){t=$,re===n&&n!==null&&(re=n=n.return);continue}break}while(!0)}function up(){var e=Kr.current;return Kr.current=Qr,e===null?Qr:e}function el(){(se===0||se===3||se===2)&&(se=4),ce===null||!(rn&268435455)&&!(gi&268435455)||St(ce,de)}function Zr(e,t){var n=U;U|=2;var o=up();(ce!==e||de!==t)&&(st=null,Jt(e,t));do try{bf();break}catch(r){cp(e,r)}while(!0);if(Ma(),U=n,Kr.current=o,re!==null)throw Error(I(261));return ce=null,de=0,se}function bf(){for(;re!==null;)dp(re)}function Pf(){for(;re!==null&&!Gm();)dp(re)}function dp(e){var t=gp(e.alternate,e,Ee);e.memoizedProps=e.pendingProps,t===null?pp(e):re=t,Ka.current=null}function pp(e){var t=e;do{var n=t.alternate;if(e=t.return,t.flags&32768){if(n=ff(n,t),n!==null){n.flags&=32767,re=n;return}if(e!==null)e.flags|=32768,e.subtreeFlags=0,e.deletions=null;else{se=6,re=null;return}}else if(n=gf(n,t,Ee),n!==null){re=n;return}if(t=t.sibling,t!==null){re=t;return}re=t=e}while(t!==null);se===0&&(se=5)}function Gt(e,t,n){var o=G,r=Ue.transition;try{Ue.transition=null,G=1,$f(e,t,n,o)}finally{Ue.transition=r,G=o}return null}function $f(e,t,n,o){do zn();while(Lt!==null);if(U&6)throw Error(I(327));n=e.finishedWork;var r=e.finishedLanes;if(n===null)return null;if(e.finishedWork=null,e.finishedLanes=0,n===e.current)throw Error(I(177));e.callbackNode=null,e.callbackPriority=0;var i=n.lanes|n.childLanes;if(ng(e,i),e===ce&&(re=ce=null,de=0),!(n.subtreeFlags&2064)&&!(n.flags&2064)||ur||(ur=!0,fp(Dr,function(){return zn(),null})),i=(n.flags&15990)!==0,n.subtreeFlags&15990||i){i=Ue.transition,Ue.transition=null;var s=G;G=1;var a=U;U|=4,Ka.current=null,yf(e,n),sp(n,e),Fg(Rs),jr=!!Es,Rs=Es=null,e.current=n,vf(n),qm(),U=a,G=s,Ue.transition=i}else e.current=n;if(ur&&(ur=!1,Lt=e,Xr=r),i=e.pendingLanes,i===0&&(Ot=null),Ym(n.stateNode),Ie(e,ne()),t!==null)for(o=e.onRecoverableError,n=0;n<t.length;n++)r=t[n],o(r.value,{componentStack:r.stack,digest:r.digest});if(Yr)throw Yr=!1,e=Xs,Xs=null,e;return Xr&1&&e.tag!==0&&zn(),i=e.pendingLanes,i&1?e===Zs?bo++:(bo=0,Zs=e):bo=0,Ft(),null}function zn(){if(Lt!==null){var e=Gu(Xr),t=Ue.transition,n=G;try{if(Ue.transition=null,G=16>e?16:e,Lt===null)var o=!1;else{if(e=Lt,Lt=null,Xr=0,U&6)throw Error(I(331));var r=U;for(U|=4,z=e.current;z!==null;){var i=z,s=i.child;if(z.flags&16){var a=i.deletions;if(a!==null){for(var l=0;l<a.length;l++){var c=a[l];for(z=c;z!==null;){var u=z;switch(u.tag){case 0:case 11:case 15:wo(8,u,i)}var d=u.child;if(d!==null)d.return=u,z=d;else for(;z!==null;){u=z;var p=u.sibling,f=u.return;if(op(u),u===c){z=null;break}if(p!==null){p.return=f,z=p;break}z=f}}}var v=i.alternate;if(v!==null){var w=v.child;if(w!==null){v.child=null;do{var b=w.sibling;w.sibling=null,w=b}while(w!==null)}}z=i}}if(i.subtreeFlags&2064&&s!==null)s.return=i,z=s;else e:for(;z!==null;){if(i=z,i.flags&2048)switch(i.tag){case 0:case 11:case 15:wo(9,i,i.return)}var h=i.sibling;if(h!==null){h.return=i.return,z=h;break e}z=i.return}}var g=e.current;for(z=g;z!==null;){s=z;var y=s.child;if(s.subtreeFlags&2064&&y!==null)y.return=s,z=y;else e:for(s=g;z!==null;){if(a=z,a.flags&2048)try{switch(a.tag){case 0:case 11:case 15:mi(9,a)}}catch($){te(a,a.return,$)}if(a===s){z=null;break e}var P=a.sibling;if(P!==null){P.return=a.return,z=P;break e}z=a.return}}if(U=r,Ft(),tt&&typeof tt.onPostCommitFiberRoot=="function")try{tt.onPostCommitFiberRoot(ii,e)}catch{}o=!0}return o}finally{G=n,Ue.transition=t}}return!1}function Sc(e,t,n){t=Bn(n,t),t=Gd(e,t,1),e=Dt(e,t,1),t=be(),e!==null&&(Wo(e,1,t),Ie(e,t))}function te(e,t,n){if(e.tag===3)Sc(e,e,n);else for(;t!==null;){if(t.tag===3){Sc(t,e,n);break}else if(t.tag===1){var o=t.stateNode;if(typeof t.type.getDerivedStateFromError=="function"||typeof o.componentDidCatch=="function"&&(Ot===null||!Ot.has(o))){e=Bn(n,e),e=qd(t,e,1),t=Dt(t,e,1),e=be(),t!==null&&(Wo(t,1,e),Ie(t,e));break}}t=t.return}}function Sf(e,t,n){var o=e.pingCache;o!==null&&o.delete(t),t=be(),e.pingedLanes|=e.suspendedLanes&n,ce===e&&(de&n)===n&&(se===4||se===3&&(de&130023424)===de&&500>ne()-Xa?Jt(e,0):Ya|=n),Ie(e,t)}function mp(e,t){t===0&&(e.mode&1?(t=er,er<<=1,!(er&130023424)&&(er=4194304)):t=1);var n=be();e=gt(e,t),e!==null&&(Wo(e,t,n),Ie(e,n))}function Cf(e){var t=e.memoizedState,n=0;t!==null&&(n=t.retryLane),mp(e,n)}function Lf(e,t){var n=0;switch(e.tag){case 13:var o=e.stateNode,r=e.memoizedState;r!==null&&(n=r.retryLane);break;case 19:o=e.stateNode;break;default:throw Error(I(314))}o!==null&&o.delete(t),mp(e,n)}var gp;gp=function(e,t,n){if(e!==null)if(e.memoizedProps!==t.pendingProps||Le.current)Ce=!0;else{if(!(e.lanes&n)&&!(t.flags&128))return Ce=!1,mf(e,t,n);Ce=!!(e.flags&131072)}else Ce=!1,Y&&t.flags&1048576&&vd(t,Fr,t.index);switch(t.lanes=0,t.tag){case 2:var o=t.type;Lr(e,t),e=t.pendingProps;var r=Mn(t,ye.current);Rn(t,n),r=Va(null,t,o,e,r,n);var i=Ha();return t.flags|=1,typeof r=="object"&&r!==null&&typeof r.render=="function"&&r.$$typeof===void 0?(t.tag=1,t.memoizedState=null,t.updateQueue=null,ke(o)?(i=!0,Br(t)):i=!1,t.memoizedState=r.state!==null&&r.state!==void 0?r.state:null,Aa(t),r.updater=pi,t.stateNode=r,r._reactInternals=t,Bs(t,o,e,n),t=Ws(null,t,o,!0,i,n)):(t.tag=0,Y&&i&&za(t),xe(null,t,r,n),t=t.child),t;case 16:o=t.elementType;e:{switch(Lr(e,t),e=t.pendingProps,r=o._init,o=r(o._payload),t.type=o,r=t.tag=If(o),e=He(o,e),r){case 0:t=Fs(null,t,o,e,n);break e;case 1:t=gc(null,t,o,e,n);break e;case 11:t=pc(null,t,o,e,n);break e;case 14:t=mc(null,t,o,He(o.type,e),n);break e}throw Error(I(306,o,""))}return t;case 0:return o=t.type,r=t.pendingProps,r=t.elementType===o?r:He(o,r),Fs(e,t,o,r,n);case 1:return o=t.type,r=t.pendingProps,r=t.elementType===o?r:He(o,r),gc(e,t,o,r,n);case 3:e:{if(Xd(t),e===null)throw Error(I(387));o=t.pendingProps,i=t.memoizedState,r=i.element,Sd(e,t),Hr(t,o,null,n);var s=t.memoizedState;if(o=s.element,i.isDehydrated)if(i={element:o,isDehydrated:!1,cache:s.cache,pendingSuspenseBoundaries:s.pendingSuspenseBoundaries,transitions:s.transitions},t.updateQueue.baseState=i,t.memoizedState=i,t.flags&256){r=Bn(Error(I(423)),t),t=fc(e,t,o,n,r);break e}else if(o!==r){r=Bn(Error(I(424)),t),t=fc(e,t,o,n,r);break e}else for(Re=zt(t.stateNode.containerInfo.firstChild),ze=t,Y=!0,qe=null,n=Pd(t,null,o,n),t.child=n;n;)n.flags=n.flags&-3|4096,n=n.sibling;else{if(Tn(),o===r){t=ft(e,t,n);break e}xe(e,t,o,n)}t=t.child}return t;case 5:return Cd(t),e===null&&Ts(t),o=t.type,r=t.pendingProps,i=e!==null?e.memoizedProps:null,s=r.children,zs(o,r)?s=null:i!==null&&zs(o,i)&&(t.flags|=32),Yd(e,t),xe(e,t,s,n),t.child;case 6:return e===null&&Ts(t),null;case 13:return Zd(e,t,n);case 4:return Ba(t,t.stateNode.containerInfo),o=t.pendingProps,e===null?t.child=Nn(t,null,o,n):xe(e,t,o,n),t.child;case 11:return o=t.type,r=t.pendingProps,r=t.elementType===o?r:He(o,r),pc(e,t,o,r,n);case 7:return xe(e,t,t.pendingProps,n),t.child;case 8:return xe(e,t,t.pendingProps.children,n),t.child;case 12:return xe(e,t,t.pendingProps.children,n),t.child;case 10:e:{if(o=t.type._context,r=t.pendingProps,i=t.memoizedProps,s=r.value,q(Wr,o._currentValue),o._currentValue=s,i!==null)if(Ye(i.value,s)){if(i.children===r.children&&!Le.current){t=ft(e,t,n);break e}}else for(i=t.child,i!==null&&(i.return=t);i!==null;){var a=i.dependencies;if(a!==null){s=i.child;for(var l=a.firstContext;l!==null;){if(l.context===o){if(i.tag===1){l=ut(-1,n&-n),l.tag=2;var c=i.updateQueue;if(c!==null){c=c.shared;var u=c.pending;u===null?l.next=l:(l.next=u.next,u.next=l),c.pending=l}}i.lanes|=n,l=i.alternate,l!==null&&(l.lanes|=n),Ns(i.return,n,t),a.lanes|=n;break}l=l.next}}else if(i.tag===10)s=i.type===t.type?null:i.child;else if(i.tag===18){if(s=i.return,s===null)throw Error(I(341));s.lanes|=n,a=s.alternate,a!==null&&(a.lanes|=n),Ns(s,n,t),s=i.sibling}else s=i.child;if(s!==null)s.return=i;else for(s=i;s!==null;){if(s===t){s=null;break}if(i=s.sibling,i!==null){i.return=s.return,s=i;break}s=s.return}i=s}xe(e,t,r.children,n),t=t.child}return t;case 9:return r=t.type,o=t.pendingProps.children,Rn(t,n),r=Fe(r),o=o(r),t.flags|=1,xe(e,t,o,n),t.child;case 14:return o=t.type,r=He(o,t.pendingProps),r=He(o.type,r),mc(e,t,o,r,n);case 15:return Qd(e,t,t.type,t.pendingProps,n);case 17:return o=t.type,r=t.pendingProps,r=t.elementType===o?r:He(o,r),Lr(e,t),t.tag=1,ke(o)?(e=!0,Br(t)):e=!1,Rn(t,n),Hd(t,o,r),Bs(t,o,r,n),Ws(null,t,o,!0,e,n);case 19:return Jd(e,t,n);case 22:return Kd(e,t,n)}throw Error(I(156,t.tag))};function fp(e,t){return Fu(e,t)}function kf(e,t,n,o){this.tag=e,this.key=n,this.sibling=this.child=this.return=this.stateNode=this.type=this.elementType=null,this.index=0,this.ref=null,this.pendingProps=t,this.dependencies=this.memoizedState=this.updateQueue=this.memoizedProps=null,this.mode=o,this.subtreeFlags=this.flags=0,this.deletions=null,this.childLanes=this.lanes=0,this.alternate=null}function Be(e,t,n,o){return new kf(e,t,n,o)}function tl(e){return e=e.prototype,!(!e||!e.isReactComponent)}function If(e){if(typeof e=="function")return tl(e)?1:0;if(e!=null){if(e=e.$$typeof,e===xa)return 11;if(e===ba)return 14}return 2}function Mt(e,t){var n=e.alternate;return n===null?(n=Be(e.tag,t,e.key,e.mode),n.elementType=e.elementType,n.type=e.type,n.stateNode=e.stateNode,n.alternate=e,e.alternate=n):(n.pendingProps=t,n.type=e.type,n.flags=0,n.subtreeFlags=0,n.deletions=null),n.flags=e.flags&14680064,n.childLanes=e.childLanes,n.lanes=e.lanes,n.child=e.child,n.memoizedProps=e.memoizedProps,n.memoizedState=e.memoizedState,n.updateQueue=e.updateQueue,t=e.dependencies,n.dependencies=t===null?null:{lanes:t.lanes,firstContext:t.firstContext},n.sibling=e.sibling,n.index=e.index,n.ref=e.ref,n}function _r(e,t,n,o,r,i){var s=2;if(o=e,typeof e=="function")tl(e)&&(s=1);else if(typeof e=="string")s=5;else e:switch(e){case hn:return en(n.children,r,i,t);case wa:s=8,r|=8;break;case us:return e=Be(12,n,t,r|2),e.elementType=us,e.lanes=i,e;case ds:return e=Be(13,n,t,r),e.elementType=ds,e.lanes=i,e;case ps:return e=Be(19,n,t,r),e.elementType=ps,e.lanes=i,e;case Cu:return fi(n,r,i,t);default:if(typeof e=="object"&&e!==null)switch(e.$$typeof){case $u:s=10;break e;case Su:s=9;break e;case xa:s=11;break e;case ba:s=14;break e;case bt:s=16,o=null;break e}throw Error(I(130,e==null?e:typeof e,""))}return t=Be(s,n,t,r),t.elementType=e,t.type=o,t.lanes=i,t}function en(e,t,n,o){return e=Be(7,e,o,t),e.lanes=n,e}function fi(e,t,n,o){return e=Be(22,e,o,t),e.elementType=Cu,e.lanes=n,e.stateNode={isHidden:!1},e}function qi(e,t,n){return e=Be(6,e,null,t),e.lanes=n,e}function Qi(e,t,n){return t=Be(4,e.children!==null?e.children:[],e.key,t),t.lanes=n,t.stateNode={containerInfo:e.containerInfo,pendingChildren:null,implementation:e.implementation},t}function _f(e,t,n,o,r){this.tag=t,this.containerInfo=e,this.finishedWork=this.pingCache=this.current=this.pendingChildren=null,this.timeoutHandle=-1,this.callbackNode=this.pendingContext=this.context=null,this.callbackPriority=0,this.eventTimes=Ii(0),this.expirationTimes=Ii(-1),this.entangledLanes=this.finishedLanes=this.mutableReadLanes=this.expiredLanes=this.pingedLanes=this.suspendedLanes=this.pendingLanes=0,this.entanglements=Ii(0),this.identifierPrefix=o,this.onRecoverableError=r,this.mutableSourceEagerHydrationData=null}function nl(e,t,n,o,r,i,s,a,l){return e=new _f(e,t,n,a,l),t===1?(t=1,i===!0&&(t|=8)):t=0,i=Be(3,null,null,t),e.current=i,i.stateNode=e,i.memoizedState={element:o,isDehydrated:n,cache:null,transitions:null,pendingSuspenseBoundaries:null},Aa(i),e}function Ef(e,t,n){var o=3<arguments.length&&arguments[3]!==void 0?arguments[3]:null;return{$$typeof:fn,key:o==null?null:""+o,children:e,containerInfo:t,implementation:n}}function hp(e){if(!e)return At;e=e._reactInternals;e:{if(cn(e)!==e||e.tag!==1)throw Error(I(170));var t=e;do{switch(t.tag){case 3:t=t.stateNode.context;break e;case 1:if(ke(t.type)){t=t.stateNode.__reactInternalMemoizedMergedChildContext;break e}}t=t.return}while(t!==null);throw Error(I(171))}if(e.tag===1){var n=e.type;if(ke(n))return hd(e,n,t)}return t}function yp(e,t,n,o,r,i,s,a,l){return e=nl(n,o,!0,e,r,i,s,a,l),e.context=hp(null),n=e.current,o=be(),r=jt(n),i=ut(o,r),i.callback=t??null,Dt(n,i,r),e.current.lanes=r,Wo(e,r,o),Ie(e,o),e}function hi(e,t,n,o){var r=t.current,i=be(),s=jt(r);return n=hp(n),t.context===null?t.context=n:t.pendingContext=n,t=ut(i,s),t.payload={element:e},o=o===void 0?null:o,o!==null&&(t.callback=o),e=Dt(r,t,s),e!==null&&(Ke(e,r,s,i),$r(e,r,s)),s}function Jr(e){if(e=e.current,!e.child)return null;switch(e.child.tag){case 5:return e.child.stateNode;default:return e.child.stateNode}}function Cc(e,t){if(e=e.memoizedState,e!==null&&e.dehydrated!==null){var n=e.retryLane;e.retryLane=n!==0&&n<t?n:t}}function ol(e,t){Cc(e,t),(e=e.alternate)&&Cc(e,t)}function Rf(){return null}var vp=typeof reportError=="function"?reportError:function(e){console.error(e)};function rl(e){this._internalRoot=e}yi.prototype.render=rl.prototype.render=function(e){var t=this._internalRoot;if(t===null)throw Error(I(409));hi(e,t,null,null)};yi.prototype.unmount=rl.prototype.unmount=function(){var e=this._internalRoot;if(e!==null){this._internalRoot=null;var t=e.containerInfo;sn(function(){hi(null,e,null,null)}),t[mt]=null}};function yi(e){this._internalRoot=e}yi.prototype.unstable_scheduleHydration=function(e){if(e){var t=Ku();e={blockedOn:null,target:e,priority:t};for(var n=0;n<$t.length&&t!==0&&t<$t[n].priority;n++);$t.splice(n,0,e),n===0&&Xu(e)}};function il(e){return!(!e||e.nodeType!==1&&e.nodeType!==9&&e.nodeType!==11)}function vi(e){return!(!e||e.nodeType!==1&&e.nodeType!==9&&e.nodeType!==11&&(e.nodeType!==8||e.nodeValue!==" react-mount-point-unstable "))}function Lc(){}function zf(e,t,n,o,r){if(r){if(typeof o=="function"){var i=o;o=function(){var c=Jr(s);i.call(c)}}var s=yp(t,o,e,0,null,!1,!1,"",Lc);return e._reactRootContainer=s,e[mt]=s.current,Eo(e.nodeType===8?e.parentNode:e),sn(),s}for(;r=e.lastChild;)e.removeChild(r);if(typeof o=="function"){var a=o;o=function(){var c=Jr(l);a.call(c)}}var l=nl(e,0,!1,null,null,!1,!1,"",Lc);return e._reactRootContainer=l,e[mt]=l.current,Eo(e.nodeType===8?e.parentNode:e),sn(function(){hi(t,l,n,o)}),l}function wi(e,t,n,o,r){var i=n._reactRootContainer;if(i){var s=i;if(typeof r=="function"){var a=r;r=function(){var l=Jr(s);a.call(l)}}hi(t,s,e,r)}else s=zf(n,t,e,r,o);return Jr(s)}qu=function(e){switch(e.tag){case 3:var t=e.stateNode;if(t.current.memoizedState.isDehydrated){var n=lo(t.pendingLanes);n!==0&&(Sa(t,n|1),Ie(t,ne()),!(U&6)&&(Un=ne()+500,Ft()))}break;case 13:sn(function(){var o=gt(e,1);if(o!==null){var r=be();Ke(o,e,1,r)}}),ol(e,1)}};Ca=function(e){if(e.tag===13){var t=gt(e,134217728);if(t!==null){var n=be();Ke(t,e,134217728,n)}ol(e,134217728)}};Qu=function(e){if(e.tag===13){var t=jt(e),n=gt(e,t);if(n!==null){var o=be();Ke(n,e,t,o)}ol(e,t)}};Ku=function(){return G};Yu=function(e,t){var n=G;try{return G=e,t()}finally{G=n}};Ps=function(e,t,n){switch(t){case"input":if(fs(e,n),t=n.name,n.type==="radio"&&t!=null){for(n=e;n.parentNode;)n=n.parentNode;for(n=n.querySelectorAll("input[name="+JSON.stringify(""+t)+'][type="radio"]'),t=0;t<n.length;t++){var o=n[t];if(o!==e&&o.form===e.form){var r=ci(o);if(!r)throw Error(I(90));ku(o),fs(o,r)}}}break;case"textarea":_u(e,n);break;case"select":t=n.value,t!=null&&kn(e,!!n.multiple,t,!1)}};Mu=Za;Tu=sn;var Df={usingClientEntryPoint:!1,Events:[Ho,xn,ci,Ou,ju,Za]},io={findFiberByHostInstance:Kt,bundleType:0,version:"18.3.1",rendererPackageName:"react-dom"},Of={bundleType:io.bundleType,version:io.version,rendererPackageName:io.rendererPackageName,rendererConfig:io.rendererConfig,overrideHookState:null,overrideHookStateDeletePath:null,overrideHookStateRenamePath:null,overrideProps:null,overridePropsDeletePath:null,overridePropsRenamePath:null,setErrorHandler:null,setSuspenseHandler:null,scheduleUpdate:null,currentDispatcherRef:ht.ReactCurrentDispatcher,findHostInstanceByFiber:function(e){return e=Bu(e),e===null?null:e.stateNode},findFiberByHostInstance:io.findFiberByHostInstance||Rf,findHostInstancesForRefresh:null,scheduleRefresh:null,scheduleRoot:null,setRefreshHandler:null,getCurrentFiber:null,reconcilerVersion:"18.3.1-next-f1338f8080-20240426"};if(typeof __REACT_DEVTOOLS_GLOBAL_HOOK__<"u"){var dr=__REACT_DEVTOOLS_GLOBAL_HOOK__;if(!dr.isDisabled&&dr.supportsFiber)try{ii=dr.inject(Of),tt=dr}catch{}}Oe.__SECRET_INTERNALS_DO_NOT_USE_OR_YOU_WILL_BE_FIRED=Df;Oe.createPortal=function(e,t){var n=2<arguments.length&&arguments[2]!==void 0?arguments[2]:null;if(!il(t))throw Error(I(200));return Ef(e,t,null,n)};Oe.createRoot=function(e,t){if(!il(e))throw Error(I(299));var n=!1,o="",r=vp;return t!=null&&(t.unstable_strictMode===!0&&(n=!0),t.identifierPrefix!==void 0&&(o=t.identifierPrefix),t.onRecoverableError!==void 0&&(r=t.onRecoverableError)),t=nl(e,1,!1,null,null,n,!1,o,r),e[mt]=t.current,Eo(e.nodeType===8?e.parentNode:e),new rl(t)};Oe.findDOMNode=function(e){if(e==null)return null;if(e.nodeType===1)return e;var t=e._reactInternals;if(t===void 0)throw typeof e.render=="function"?Error(I(188)):(e=Object.keys(e).join(","),Error(I(268,e)));return e=Bu(t),e=e===null?null:e.stateNode,e};Oe.flushSync=function(e){return sn(e)};Oe.hydrate=function(e,t,n){if(!vi(t))throw Error(I(200));return wi(null,e,t,!0,n)};Oe.hydrateRoot=function(e,t,n){if(!il(e))throw Error(I(405));var o=n!=null&&n.hydratedSources||null,r=!1,i="",s=vp;if(n!=null&&(n.unstable_strictMode===!0&&(r=!0),n.identifierPrefix!==void 0&&(i=n.identifierPrefix),n.onRecoverableError!==void 0&&(s=n.onRecoverableError)),t=yp(t,null,e,1,n??null,r,!1,i,s),e[mt]=t.current,Eo(e),o)for(e=0;e<o.length;e++)n=o[e],r=n._getVersion,r=r(n._source),t.mutableSourceEagerHydrationData==null?t.mutableSourceEagerHydrationData=[n,r]:t.mutableSourceEagerHydrationData.push(n,r);return new yi(t)};Oe.render=function(e,t,n){if(!vi(t))throw Error(I(200));return wi(null,e,t,!1,n)};Oe.unmountComponentAtNode=function(e){if(!vi(e))throw Error(I(40));return e._reactRootContainer?(sn(function(){wi(null,null,e,!1,function(){e._reactRootContainer=null,e[mt]=null})}),!0):!1};Oe.unstable_batchedUpdates=Za;Oe.unstable_renderSubtreeIntoContainer=function(e,t,n,o){if(!vi(n))throw Error(I(200));if(e==null||e._reactInternals===void 0)throw Error(I(38));return wi(e,t,n,!1,o)};Oe.version="18.3.1-next-f1338f8080-20240426";function wp(){if(!(typeof __REACT_DEVTOOLS_GLOBAL_HOOK__>"u"||typeof __REACT_DEVTOOLS_GLOBAL_HOOK__.checkDCE!="function"))try{__REACT_DEVTOOLS_GLOBAL_HOOK__.checkDCE(wp)}catch(e){console.error(e)}}wp(),wu.exports=Oe;var jf=wu.exports,xp,kc=jf;xp=kc.createRoot,kc.hydrateRoot;/**
 * @remix-run/router v1.23.4
 *
 * Copyright (c) Remix Software Inc.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE.md file in the root directory of this source tree.
 *
 * @license MIT
 */function Ao(){return Ao=Object.assign?Object.assign.bind():function(e){for(var t=1;t<arguments.length;t++){var n=arguments[t];for(var o in n)({}).hasOwnProperty.call(n,o)&&(e[o]=n[o])}return e},Ao.apply(null,arguments)}var kt;(function(e){e.Pop="POP",e.Push="PUSH",e.Replace="REPLACE"})(kt||(kt={}));const Ic="popstate";function Mf(e){e===void 0&&(e={});function t(r,i){let{pathname:s="/",search:a="",hash:l=""}=un(r.location.hash.substr(1));return!s.startsWith("/")&&!s.startsWith(".")&&(s="/"+s),ta("",{pathname:s,search:a,hash:l},i.state&&i.state.usr||null,i.state&&i.state.key||"default")}function n(r,i){let s=r.document.querySelector("base"),a="";if(s&&s.getAttribute("href")){let l=r.location.href,c=l.indexOf("#");a=c===-1?l:l.slice(0,c)}return a+"#"+(typeof i=="string"?i:ei(i))}function o(r,i){sl(r.pathname.charAt(0)==="/","relative pathnames are not supported in hash history.push("+JSON.stringify(i)+")")}return Nf(t,n,o,e)}function oe(e,t){if(e===!1||e===null||typeof e>"u")throw new Error(t)}function sl(e,t){if(!e){typeof console<"u"&&console.warn(t);try{throw new Error(t)}catch{}}}function Tf(){return Math.random().toString(36).substr(2,8)}function _c(e,t){return{usr:e.state,key:e.key,idx:t}}function ta(e,t,n,o){return n===void 0&&(n=null),Ao({pathname:typeof e=="string"?e:e.pathname,search:"",hash:""},typeof t=="string"?un(t):t,{state:n,key:t&&t.key||o||Tf()})}function ei(e){let{pathname:t="/",search:n="",hash:o=""}=e;return n&&n!=="?"&&(t+=n.charAt(0)==="?"?n:"?"+n),o&&o!=="#"&&(t+=o.charAt(0)==="#"?o:"#"+o),t}function un(e){let t={};if(e){let n=e.indexOf("#");n>=0&&(t.hash=e.substr(n),e=e.substr(0,n));let o=e.indexOf("?");o>=0&&(t.search=e.substr(o),e=e.substr(0,o)),e&&(t.pathname=e)}return t}function Nf(e,t,n,o){o===void 0&&(o={});let{window:r=document.defaultView,v5Compat:i=!1}=o,s=r.history,a=kt.Pop,l=null,c=u();c==null&&(c=0,s.replaceState(Ao({},s.state,{idx:c}),""));function u(){return(s.state||{idx:null}).idx}function d(){a=kt.Pop;let b=u(),h=b==null?null:b-c;c=b,l&&l({action:a,location:w.location,delta:h})}function p(b,h){a=kt.Push;let g=ta(w.location,b,h);n&&n(g,b),c=u()+1;let y=_c(g,c),P=w.createHref(g);try{s.pushState(y,"",P)}catch($){if($ instanceof DOMException&&$.name==="DataCloneError")throw $;r.location.assign(P)}i&&l&&l({action:a,location:w.location,delta:1})}function f(b,h){a=kt.Replace;let g=ta(w.location,b,h);n&&n(g,b),c=u();let y=_c(g,c),P=w.createHref(g);s.replaceState(y,"",P),i&&l&&l({action:a,location:w.location,delta:0})}function v(b){let h=r.location.origin!=="null"?r.location.origin:r.location.href,g=typeof b=="string"?b:ei(b);return g=g.replace(/ $/,"%20"),oe(h,"No window.location.(origin|href) available to create URL for href: "+g),new URL(g,h)}let w={get action(){return a},get location(){return e(r,s)},listen(b){if(l)throw new Error("A history only accepts one active listener");return r.addEventListener(Ic,d),l=b,()=>{r.removeEventListener(Ic,d),l=null}},createHref(b){return t(r,b)},createURL:v,encodeLocation(b){let h=v(b);return{pathname:h.pathname,search:h.search,hash:h.hash}},push:p,replace:f,go(b){return s.go(b)}};return w}var Ec;(function(e){e.data="data",e.deferred="deferred",e.redirect="redirect",e.error="error"})(Ec||(Ec={}));function Af(e,t,n){return n===void 0&&(n="/"),Bf(e,t,n)}function Bf(e,t,n,o){let r=typeof t=="string"?un(t):t,i=al(r.pathname||"/",n);if(i==null)return null;let s=bp(e);Uf(s);let a=null,l=Jf(i);for(let c=0;a==null&&c<s.length;++c)a=Yf(s[c],l);return a}function bp(e,t,n,o){t===void 0&&(t=[]),n===void 0&&(n=[]),o===void 0&&(o="");let r=(i,s,a)=>{let l={relativePath:a===void 0?i.path||"":a,caseSensitive:i.caseSensitive===!0,childrenIndex:s,route:i};l.relativePath.startsWith("/")&&(oe(l.relativePath.startsWith(o),'Absolute route path "'+l.relativePath+'" nested under path '+('"'+o+'" is not valid. An absolute child route path ')+"must start with the combined path of all its parent routes."),l.relativePath=l.relativePath.slice(o.length));let c=Tt([o,l.relativePath]),u=n.concat(l);i.children&&i.children.length>0&&(oe(i.index!==!0,"Index routes must not have child routes. Please remove "+('all child routes from route path "'+c+'".')),bp(i.children,t,u,c)),!(i.path==null&&!i.index)&&t.push({path:c,score:Qf(c,i.index),routesMeta:u})};return e.forEach((i,s)=>{var a;if(i.path===""||!((a=i.path)!=null&&a.includes("?")))r(i,s);else for(let l of Pp(i.path))r(i,s,l)}),t}function Pp(e){let t=e.split("/");if(t.length===0)return[];let[n,...o]=t,r=n.endsWith("?"),i=n.replace(/\?$/,"");if(o.length===0)return r?[i,""]:[i];let s=Pp(o.join("/")),a=[];return a.push(...s.map(l=>l===""?i:[i,l].join("/"))),r&&a.push(...s),a.map(l=>e.startsWith("/")&&l===""?"/":l)}function Uf(e){e.sort((t,n)=>t.score!==n.score?n.score-t.score:Kf(t.routesMeta.map(o=>o.childrenIndex),n.routesMeta.map(o=>o.childrenIndex)))}const Ff=/^:[\w-]+$/,Wf=3,Vf=2,Hf=1,Gf=10,qf=-2,Rc=e=>e==="*";function Qf(e,t){let n=e.split("/"),o=n.length;return n.some(Rc)&&(o+=qf),t&&(o+=Vf),n.filter(r=>!Rc(r)).reduce((r,i)=>r+(Ff.test(i)?Wf:i===""?Hf:Gf),o)}function Kf(e,t){return e.length===t.length&&e.slice(0,-1).every((o,r)=>o===t[r])?e[e.length-1]-t[t.length-1]:0}function Yf(e,t,n){let{routesMeta:o}=e,r={},i="/",s=[];for(let a=0;a<o.length;++a){let l=o[a],c=a===o.length-1,u=i==="/"?t:t.slice(i.length)||"/",d=Xf({path:l.relativePath,caseSensitive:l.caseSensitive,end:c},u),p=l.route;if(!d)return null;Object.assign(r,d.params),s.push({params:r,pathname:Tt([i,d.pathname]),pathnameBase:nh(Tt([i,d.pathnameBase])),route:p}),d.pathnameBase!=="/"&&(i=Tt([i,d.pathnameBase]))}return s}function Xf(e,t){typeof e=="string"&&(e={path:e,caseSensitive:!1,end:!0});let[n,o]=Zf(e.path,e.caseSensitive,e.end),r=t.match(n);if(!r)return null;let i=r[0],s=i.replace(/(.)\/+$/,"$1"),a=r.slice(1);return{params:o.reduce((c,u,d)=>{let{paramName:p,isOptional:f}=u;if(p==="*"){let w=a[d]||"";s=i.slice(0,i.length-w.length).replace(/(.)\/+$/,"$1")}const v=a[d];return f&&!v?c[p]=void 0:c[p]=(v||"").replace(/%2F/g,"/"),c},{}),pathname:i,pathnameBase:s,pattern:e}}function Zf(e,t,n){t===void 0&&(t=!1),n===void 0&&(n=!0),sl(e==="*"||!e.endsWith("*")||e.endsWith("/*"),'Route path "'+e+'" will be treated as if it were '+('"'+e.replace(/\*$/,"/*")+'" because the `*` character must ')+"always follow a `/` in the pattern. To get rid of this warning, "+('please change the route path to "'+e.replace(/\*$/,"/*")+'".'));let o=[],r="^"+e.replace(/\/*\*?$/,"").replace(/^\/*/,"/").replace(/[\\.*+^${}|()[\]]/g,"\\$&").replace(/\/:([\w-]+)(\?)?/g,(s,a,l)=>(o.push({paramName:a,isOptional:l!=null}),l?"/?([^\\/]+)?":"/([^\\/]+)"));return e.endsWith("*")?(o.push({paramName:"*"}),r+=e==="*"||e==="/*"?"(.*)$":"(?:\\/(.+)|\\/*)$"):n?r+="\\/*$":e!==""&&e!=="/"&&(r+="(?:(?=\\/|$))"),[new RegExp(r,t?void 0:"i"),o]}function Jf(e){try{return e.split("/").map(t=>decodeURIComponent(t).replace(/\//g,"%2F")).join("/")}catch(t){return sl(!1,'The URL path "'+e+'" could not be decoded because it is is a malformed URL segment. This is probably due to a bad percent '+("encoding ("+t+").")),e}}function al(e,t){if(t==="/")return e;if(!e.toLowerCase().startsWith(t.toLowerCase()))return null;let n=t.endsWith("/")?t.length-1:t.length,o=e.charAt(n);return o&&o!=="/"?null:e.slice(n)||"/"}function eh(e,t){t===void 0&&(t="/");let{pathname:n,search:o="",hash:r=""}=typeof e=="string"?un(e):e,i;return n?(n=$p(n),n.startsWith("/")?i=zc(n.substring(1),"/"):i=zc(n,t)):i=t,{pathname:i,search:oh(o),hash:rh(r)}}function zc(e,t){let n=t.replace(/\/+$/,"").split("/");return e.split("/").forEach(r=>{r===".."?n.length>1&&n.pop():r!=="."&&n.push(r)}),n.length>1?n.join("/"):"/"}function Ki(e,t,n,o){return"Cannot include a '"+e+"' character in a manually specified "+("`to."+t+"` field ["+JSON.stringify(o)+"].  Please separate it out to the ")+("`to."+n+"` field. Alternatively you may provide the full path as ")+'a string in <Link to="..."> and the router will parse it for you.'}function th(e){return e.filter((t,n)=>n===0||t.route.path&&t.route.path.length>0)}function ll(e,t){let n=th(e);return t?n.map((o,r)=>r===n.length-1?o.pathname:o.pathnameBase):n.map(o=>o.pathnameBase)}function cl(e,t,n,o){o===void 0&&(o=!1);let r;typeof e=="string"?r=un(e):(r=Ao({},e),oe(!r.pathname||!r.pathname.includes("?"),Ki("?","pathname","search",r)),oe(!r.pathname||!r.pathname.includes("#"),Ki("#","pathname","hash",r)),oe(!r.search||!r.search.includes("#"),Ki("#","search","hash",r)));let i=e===""||r.pathname==="",s=i?"/":r.pathname,a;if(s==null)a=n;else{let d=t.length-1;if(!o&&s.startsWith("..")){let p=s.split("/");for(;p[0]==="..";)p.shift(),d-=1;r.pathname=p.join("/")}a=d>=0?t[d]:"/"}let l=eh(r,a),c=s&&s!=="/"&&s.endsWith("/"),u=(i||s===".")&&n.endsWith("/");return!l.pathname.endsWith("/")&&(c||u)&&(l.pathname+="/"),l}const $p=e=>e.replace(/\/\/+/g,"/"),Tt=e=>$p(e.join("/")),nh=e=>e.replace(/\/+$/,"").replace(/^\/*/,"/"),oh=e=>!e||e==="?"?"":e.startsWith("?")?e:"?"+e,rh=e=>!e||e==="#"?"":e.startsWith("#")?e:"#"+e;function ih(e){return e!=null&&typeof e.status=="number"&&typeof e.statusText=="string"&&typeof e.internal=="boolean"&&"data"in e}const Sp=["post","put","patch","delete"];new Set(Sp);const sh=["get",...Sp];new Set(sh);/**
 * React Router v6.30.6
 *
 * Copyright (c) Remix Software Inc.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE.md file in the root directory of this source tree.
 *
 * @license MIT
 */function Bo(){return Bo=Object.assign?Object.assign.bind():function(e){for(var t=1;t<arguments.length;t++){var n=arguments[t];for(var o in n)({}).hasOwnProperty.call(n,o)&&(e[o]=n[o])}return e},Bo.apply(null,arguments)}const ul=x.createContext(null),ah=x.createContext(null),Wt=x.createContext(null),xi=x.createContext(null),yt=x.createContext({outlet:null,matches:[],isDataRoute:!1}),Cp=x.createContext(null);function lh(e,t){let{relative:n}=t===void 0?{}:t;Gn()||oe(!1);let{basename:o,navigator:r}=x.useContext(Wt),{hash:i,pathname:s,search:a}=Ip(e,{relative:n}),l=s;return o!=="/"&&(l=s==="/"?o:Tt([o,s])),r.createHref({pathname:l,search:a,hash:i})}function Gn(){return x.useContext(xi)!=null}function qn(){return Gn()||oe(!1),x.useContext(xi).location}function Lp(e){x.useContext(Wt).static||x.useLayoutEffect(e)}function kp(){let{isDataRoute:e}=x.useContext(yt);return e?Ph():ch()}function ch(){Gn()||oe(!1);let e=x.useContext(ul),{basename:t,future:n,navigator:o}=x.useContext(Wt),{matches:r}=x.useContext(yt),{pathname:i}=qn(),s=JSON.stringify(ll(r,n.v7_relativeSplatPath)),a=x.useRef(!1);return Lp(()=>{a.current=!0}),x.useCallback(function(c,u){if(u===void 0&&(u={}),!a.current)return;if(typeof c=="number"){o.go(c);return}let d=cl(c,JSON.parse(s),i,u.relative==="path");e==null&&t!=="/"&&(d.pathname=d.pathname==="/"?t:Tt([t,d.pathname])),(u.replace?o.replace:o.push)(d,u.state,u)},[t,o,s,i,e])}function uh(){let{matches:e}=x.useContext(yt),t=e[e.length-1];return t?t.params:{}}function Ip(e,t){let{relative:n}=t===void 0?{}:t,{future:o}=x.useContext(Wt),{matches:r}=x.useContext(yt),{pathname:i}=qn(),s=JSON.stringify(ll(r,o.v7_relativeSplatPath));return x.useMemo(()=>cl(e,JSON.parse(s),i,n==="path"),[e,s,i,n])}function dh(e,t){return ph(e,t)}function ph(e,t,n,o){Gn()||oe(!1);let{navigator:r}=x.useContext(Wt),{matches:i}=x.useContext(yt),s=i[i.length-1],a=s?s.params:{};s&&s.pathname;let l=s?s.pathnameBase:"/";s&&s.route;let c=qn(),u;if(t){var d;let b=typeof t=="string"?un(t):t;l==="/"||(d=b.pathname)!=null&&d.startsWith(l)||oe(!1),u=b}else u=c;let p=u.pathname||"/",f=p;if(l!=="/"){let b=l.replace(/^\//,"").split("/");f="/"+p.replace(/^\//,"").split("/").slice(b.length).join("/")}let v=Af(e,{pathname:f}),w=yh(v&&v.map(b=>Object.assign({},b,{params:Object.assign({},a,b.params),pathname:Tt([l,r.encodeLocation?r.encodeLocation(b.pathname).pathname:b.pathname]),pathnameBase:b.pathnameBase==="/"?l:Tt([l,r.encodeLocation?r.encodeLocation(b.pathnameBase).pathname:b.pathnameBase])})),i,n,o);return t&&w?x.createElement(xi.Provider,{value:{location:Bo({pathname:"/",search:"",hash:"",state:null,key:"default"},u),navigationType:kt.Pop}},w):w}function mh(){let e=bh(),t=ih(e)?e.status+" "+e.statusText:e instanceof Error?e.message:JSON.stringify(e),n=e instanceof Error?e.stack:null,r={padding:"0.5rem",backgroundColor:"rgba(200,200,200, 0.5)"};return x.createElement(x.Fragment,null,x.createElement("h2",null,"Unexpected Application Error!"),x.createElement("h3",{style:{fontStyle:"italic"}},t),n?x.createElement("pre",{style:r},n):null,null)}const gh=x.createElement(mh,null);class fh extends x.Component{constructor(t){super(t),this.state={location:t.location,revalidation:t.revalidation,error:t.error}}static getDerivedStateFromError(t){return{error:t}}static getDerivedStateFromProps(t,n){return n.location!==t.location||n.revalidation!=="idle"&&t.revalidation==="idle"?{error:t.error,location:t.location,revalidation:t.revalidation}:{error:t.error!==void 0?t.error:n.error,location:n.location,revalidation:t.revalidation||n.revalidation}}componentDidCatch(t,n){console.error("React Router caught the following error during render",t,n)}render(){return this.state.error!==void 0?x.createElement(yt.Provider,{value:this.props.routeContext},x.createElement(Cp.Provider,{value:this.state.error,children:this.props.component})):this.props.children}}function hh(e){let{routeContext:t,match:n,children:o}=e,r=x.useContext(ul);return r&&r.static&&r.staticContext&&(n.route.errorElement||n.route.ErrorBoundary)&&(r.staticContext._deepestRenderedBoundaryId=n.route.id),x.createElement(yt.Provider,{value:t},o)}function yh(e,t,n,o){var r;if(t===void 0&&(t=[]),n===void 0&&(n=null),o===void 0&&(o=null),e==null){var i;if(!n)return null;if(n.errors)e=n.matches;else if((i=o)!=null&&i.v7_partialHydration&&t.length===0&&!n.initialized&&n.matches.length>0)e=n.matches;else return null}let s=e,a=(r=n)==null?void 0:r.errors;if(a!=null){let u=s.findIndex(d=>d.route.id&&(a==null?void 0:a[d.route.id])!==void 0);u>=0||oe(!1),s=s.slice(0,Math.min(s.length,u+1))}let l=!1,c=-1;if(n&&o&&o.v7_partialHydration)for(let u=0;u<s.length;u++){let d=s[u];if((d.route.HydrateFallback||d.route.hydrateFallbackElement)&&(c=u),d.route.id){let{loaderData:p,errors:f}=n,v=d.route.loader&&p[d.route.id]===void 0&&(!f||f[d.route.id]===void 0);if(d.route.lazy||v){l=!0,c>=0?s=s.slice(0,c+1):s=[s[0]];break}}}return s.reduceRight((u,d,p)=>{let f,v=!1,w=null,b=null;n&&(f=a&&d.route.id?a[d.route.id]:void 0,w=d.route.errorElement||gh,l&&(c<0&&p===0?($h("route-fallback"),v=!0,b=null):c===p&&(v=!0,b=d.route.hydrateFallbackElement||null)));let h=t.concat(s.slice(0,p+1)),g=()=>{let y;return f?y=w:v?y=b:d.route.Component?y=x.createElement(d.route.Component,null):d.route.element?y=d.route.element:y=u,x.createElement(hh,{match:d,routeContext:{outlet:u,matches:h,isDataRoute:n!=null},children:y})};return n&&(d.route.ErrorBoundary||d.route.errorElement||p===0)?x.createElement(fh,{location:n.location,revalidation:n.revalidation,component:w,error:f,children:g(),routeContext:{outlet:null,matches:h,isDataRoute:!0}}):g()},null)}var _p=function(e){return e.UseBlocker="useBlocker",e.UseRevalidator="useRevalidator",e.UseNavigateStable="useNavigate",e}(_p||{}),Ep=function(e){return e.UseBlocker="useBlocker",e.UseLoaderData="useLoaderData",e.UseActionData="useActionData",e.UseRouteError="useRouteError",e.UseNavigation="useNavigation",e.UseRouteLoaderData="useRouteLoaderData",e.UseMatches="useMatches",e.UseRevalidator="useRevalidator",e.UseNavigateStable="useNavigate",e.UseRouteId="useRouteId",e}(Ep||{});function vh(e){let t=x.useContext(ul);return t||oe(!1),t}function wh(e){let t=x.useContext(ah);return t||oe(!1),t}function xh(e){let t=x.useContext(yt);return t||oe(!1),t}function Rp(e){let t=xh(),n=t.matches[t.matches.length-1];return n.route.id||oe(!1),n.route.id}function bh(){var e;let t=x.useContext(Cp),n=wh(),o=Rp();return t!==void 0?t:(e=n.errors)==null?void 0:e[o]}function Ph(){let{router:e}=vh(_p.UseNavigateStable),t=Rp(Ep.UseNavigateStable),n=x.useRef(!1);return Lp(()=>{n.current=!0}),x.useCallback(function(r,i){i===void 0&&(i={}),n.current&&(typeof r=="number"?e.navigate(r):e.navigate(r,Bo({fromRouteId:t},i)))},[e,t])}const Dc={};function $h(e,t,n){Dc[e]||(Dc[e]=!0)}function Sh(e,t){e==null||e.v7_startTransition,e==null||e.v7_relativeSplatPath}function na(e){let{to:t,replace:n,state:o,relative:r}=e;Gn()||oe(!1);let{future:i,static:s}=x.useContext(Wt),{matches:a}=x.useContext(yt),{pathname:l}=qn(),c=kp(),u=cl(t,ll(a,i.v7_relativeSplatPath),l,r==="path"),d=JSON.stringify(u);return x.useEffect(()=>c(JSON.parse(d),{replace:n,state:o,relative:r}),[c,d,r,n,o]),null}function uo(e){oe(!1)}function Ch(e){let{basename:t="/",children:n=null,location:o,navigationType:r=kt.Pop,navigator:i,static:s=!1,future:a}=e;Gn()&&oe(!1);let l=t.replace(/^\/*/,"/"),c=x.useMemo(()=>({basename:l,navigator:i,static:s,future:Bo({v7_relativeSplatPath:!1},a)}),[l,a,i,s]);typeof o=="string"&&(o=un(o));let{pathname:u="/",search:d="",hash:p="",state:f=null,key:v="default"}=o,w=x.useMemo(()=>{let b=al(u,l);return b==null?null:{location:{pathname:b,search:d,hash:p,state:f,key:v},navigationType:r}},[l,u,d,p,f,v,r]);return w==null?null:x.createElement(Wt.Provider,{value:c},x.createElement(xi.Provider,{children:n,value:w}))}function Lh(e){let{children:t,location:n}=e;return dh(oa(t),n)}new Promise(()=>{});function oa(e,t){t===void 0&&(t=[]);let n=[];return x.Children.forEach(e,(o,r)=>{if(!x.isValidElement(o))return;let i=[...t,r];if(o.type===x.Fragment){n.push.apply(n,oa(o.props.children,i));return}o.type!==uo&&oe(!1),!o.props.index||!o.props.children||oe(!1);let s={id:o.props.id||i.join("-"),caseSensitive:o.props.caseSensitive,element:o.props.element,Component:o.props.Component,index:o.props.index,path:o.props.path,loader:o.props.loader,action:o.props.action,errorElement:o.props.errorElement,ErrorBoundary:o.props.ErrorBoundary,hasErrorBoundary:o.props.ErrorBoundary!=null||o.props.errorElement!=null,shouldRevalidate:o.props.shouldRevalidate,handle:o.props.handle,lazy:o.props.lazy};o.props.children&&(s.children=oa(o.props.children,i)),n.push(s)}),n}/**
 * React Router DOM v6.30.6
 *
 * Copyright (c) Remix Software Inc.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE.md file in the root directory of this source tree.
 *
 * @license MIT
 */function ra(){return ra=Object.assign?Object.assign.bind():function(e){for(var t=1;t<arguments.length;t++){var n=arguments[t];for(var o in n)({}).hasOwnProperty.call(n,o)&&(e[o]=n[o])}return e},ra.apply(null,arguments)}function kh(e,t){if(e==null)return{};var n={};for(var o in e)if({}.hasOwnProperty.call(e,o)){if(t.indexOf(o)!==-1)continue;n[o]=e[o]}return n}function Ih(e){return!!(e.metaKey||e.altKey||e.ctrlKey||e.shiftKey)}function _h(e,t){return e.button===0&&(!t||t==="_self")&&!Ih(e)}const Eh=["onClick","relative","reloadDocument","replace","state","target","to","preventScrollReset","viewTransition"],Rh="6";try{window.__reactRouterVersion=Rh}catch{}const zh="startTransition",Oc=$m[zh];function Dh(e){let{basename:t,children:n,future:o,window:r}=e,i=x.useRef();i.current==null&&(i.current=Mf({window:r,v5Compat:!0}));let s=i.current,[a,l]=x.useState({action:s.action,location:s.location}),{v7_startTransition:c}=o||{},u=x.useCallback(d=>{c&&Oc?Oc(()=>l(d)):l(d)},[l,c]);return x.useLayoutEffect(()=>s.listen(u),[s,u]),x.useEffect(()=>Sh(o),[o]),x.createElement(Ch,{basename:t,children:n,location:a.location,navigationType:a.action,navigator:s,future:o})}const Oh=typeof window<"u"&&typeof window.document<"u"&&typeof window.document.createElement<"u",jh=/^(?:[a-z][a-z0-9+.-]*:|\/\/)/i,ia=x.forwardRef(function(t,n){let{onClick:o,relative:r,reloadDocument:i,replace:s,state:a,target:l,to:c,preventScrollReset:u,viewTransition:d}=t,p=kh(t,Eh),{basename:f}=x.useContext(Wt),v,w=!1;if(typeof c=="string"&&jh.test(c)&&(v=c,Oh))try{let y=new URL(window.location.href),P=c.startsWith("//")?new URL(y.protocol+c):new URL(c),$=al(P.pathname,f);P.origin===y.origin&&$!=null?c=$+P.search+P.hash:w=!0}catch{}let b=lh(c,{relative:r}),h=Mh(c,{replace:s,state:a,target:l,preventScrollReset:u,relative:r,viewTransition:d});function g(y){o&&o(y),y.defaultPrevented||h(y)}return x.createElement("a",ra({},p,{href:v||b,onClick:w||i?o:g,ref:n,target:l}))});var jc;(function(e){e.UseScrollRestoration="useScrollRestoration",e.UseSubmit="useSubmit",e.UseSubmitFetcher="useSubmitFetcher",e.UseFetcher="useFetcher",e.useViewTransitionState="useViewTransitionState"})(jc||(jc={}));var Mc;(function(e){e.UseFetcher="useFetcher",e.UseFetchers="useFetchers",e.UseScrollRestoration="useScrollRestoration"})(Mc||(Mc={}));function Mh(e,t){let{target:n,replace:o,state:r,preventScrollReset:i,relative:s,viewTransition:a}=t===void 0?{}:t,l=kp(),c=qn(),u=Ip(e,{relative:s});return x.useCallback(d=>{if(_h(d,n)){d.preventDefault();let p=o!==void 0?o:ei(c)===ei(u);l(e,{replace:p,state:r,preventScrollReset:i,relative:s,viewTransition:a})}},[c,l,u,o,r,n,e,i,s,a])}const Th="https://github.com/frankvane/vane-components";class Nh extends T.Component{constructor(){super(...arguments);vl(this,"state",{error:null})}static getDerivedStateFromError(n){return{error:n}}render(){var n;return this.state.error?m.jsxs("div",{className:"crash",role:"alert",children:[m.jsx("h3",{children:"这个页面炸了"}),m.jsx("pre",{children:String(((n=this.state.error)==null?void 0:n.stack)||this.state.error)}),m.jsx("button",{type:"button",onClick:()=>this.setState({error:null}),children:"重试"})]}):this.props.children}}function zp(e,t){return String(e.entries.indexOf(t)+1).padStart(2,"0")}function Ah({demos:e,pathname:t}){var l;const{groups:n,entries:o,label:r}=e,i=(l=o.find(c=>t===`/demo/${c.meta.slug}`))==null?void 0:l.meta.group,[s,a]=x.useState(()=>{var u;const c=(u=n[0])==null?void 0:u.key;return Object.fromEntries(n.map(d=>[d.key,d.key===(i??c)]))});return x.useEffect(()=>{i&&a(c=>c[i]?c:{...c,[i]:!0})},[i]),m.jsxs("div",{className:"nav-section",children:[m.jsxs("div",{className:"nav-section-head",children:[m.jsx("span",{children:r}),m.jsxs("code",{children:[o.length," demos"]})]}),n.map(c=>{const u=o.filter(p=>p.meta.group===c.key);if(u.length===0)return null;const d=s[c.key]??!1;return m.jsxs("div",{className:"nav-group",children:[m.jsxs("button",{type:"button",className:`nav-group-head${i===c.key?" is-current":""}`,onClick:()=>a(p=>({...p,[c.key]:!d})),"aria-expanded":d,children:[m.jsx("span",{className:`nav-caret${d?" is-open":""}`,"aria-hidden":!0,children:"▸"}),c.label,m.jsx("code",{children:u.length})]}),d?m.jsx("div",{className:"nav-list",children:u.map(p=>m.jsxs(ia,{to:`/demo/${p.meta.slug}`,className:`nav-sub${t===`/demo/${p.meta.slug}`?" is-active":""}`,children:[m.jsx("em",{"aria-hidden":!0,children:zp(e,p)}),p.meta.title]},p.meta.slug))}):null]},c.key)})]})}function Bh({demos:e}){var a;const{slug:t}=uh(),{entries:n,detail:o}=e,r=t?n.find(l=>l.meta.slug===t):void 0,i=(a=n[0])==null?void 0:a.meta.slug;if(!r)return m.jsx(na,{to:i?`/demo/${i}`:"/",replace:!0});const s=n.indexOf(r)+1;return m.jsx(T.Fragment,{children:o(r,s)},r.meta.slug)}function Uh({config:e}){var d,p;const{pathname:t}=qn(),[n,o]=x.useState(!1),[r,i]=x.useState(!1);x.useEffect(()=>o(!1),[t]);const s=x.useCallback(()=>i(f=>!f),[]);x.useEffect(()=>{const f=v=>{const w=v.target,b=w&&(w.tagName==="INPUT"||w.tagName==="TEXTAREA"||w.isContentEditable);v.key==="Escape"&&o(!1),!b&&(v.key==="g"||v.key==="G")&&!v.metaKey&&!v.ctrlKey&&i(h=>!h)};return window.addEventListener("keydown",f),()=>window.removeEventListener("keydown",f)},[]);const a=e.demos,l=(d=a.entries[0])==null?void 0:d.meta.slug,c=x.useMemo(()=>{if(!t.startsWith("/demo"))return e.crumb(t);const f=t.replace(/^\/demo\/?/,""),v=a.entries.find(w=>w.meta.slug===f);return v?`demo ${zp(a,v)} · ${v.meta.title}`:"demo · 逐项示例"},[t,e,a]),u=x.useMemo(()=>e.nav.map((f,v)=>({...f,no:String(v+1).padStart(2,"0")})),[e.nav]);return m.jsxs("div",{className:`shell${n?" is-nav-open":""}${r?" is-guides":""}`,children:[m.jsx("a",{className:"skip-link",href:"#main",onClick:f=>{f.preventDefault();const v=document.getElementById("main");v==null||v.setAttribute("tabindex","-1"),v==null||v.focus(),v==null||v.scrollIntoView({block:"start"})},children:"跳到内容"}),m.jsxs("aside",{className:"side","aria-label":"站点导航",children:[m.jsxs(ia,{to:"/",className:"brand",children:[m.jsx("span",{className:"brand-mark","aria-hidden":!0,children:e.brand}),m.jsxs("span",{children:[m.jsx("strong",{children:e.pkg}),m.jsx("em",{children:e.subtitle})]})]}),m.jsxs("nav",{children:[u.map(f=>m.jsxs(ia,{to:f.to,className:`nav-item${t===f.to?" is-active":""}`,"aria-current":t===f.to?"page":void 0,children:[m.jsx("em",{"aria-hidden":!0,children:f.no}),m.jsx("span",{children:f.label}),f.hint?m.jsx("code",{children:f.hint}):null]},f.to)),m.jsx(Ah,{demos:e.demos,pathname:t})]}),m.jsxs("div",{className:"side-foot",children:[m.jsx("p",{children:e.footer[0]}),m.jsx("p",{className:"muted",children:e.footer[1]})]})]}),m.jsx("button",{type:"button",className:"scrim","aria-label":"关闭导航",tabIndex:n?0:-1,onClick:()=>o(!1)}),m.jsxs("div",{className:"main",id:"main",children:[m.jsxs("header",{className:"topbar",children:[m.jsx("button",{type:"button",className:"nav-toggle","aria-label":n?"关闭导航":"打开导航","aria-expanded":n,onClick:()=>o(f=>!f),children:m.jsx("span",{"aria-hidden":!0})}),m.jsx("span",{className:"crumb",children:c}),m.jsxs("div",{className:"topbar-right",children:[(p=e.stats)==null?void 0:p.map(f=>m.jsxs("span",{className:"topbar-stat",title:f.title,children:[m.jsx("b",{children:f.value})," ",f.label]},f.label)),m.jsxs("button",{type:"button",className:"topbar-btn","aria-pressed":r,onClick:s,title:"显示栏位参考线（快捷键 G）",children:[m.jsx("i",{"aria-hidden":!0}),"guides"]}),m.jsx("a",{className:"topbar-link",href:e.sourceUrl??Th,target:"_blank",rel:"noreferrer",children:"source ↗"})]})]}),m.jsx("div",{className:"guides","aria-hidden":!0}),m.jsx(x.Suspense,{fallback:m.jsx("div",{className:"loading",children:"loading modules…"}),children:m.jsx(Nh,{children:m.jsxs(Lh,{children:[e.routes.map(f=>m.jsx(uo,{path:f.path,element:f.element},f.path)),m.jsx(uo,{path:"/demo",element:m.jsx(na,{to:l?`/demo/${l}`:"/",replace:!0})}),m.jsx(uo,{path:"/demo/:slug",element:m.jsx(Bh,{demos:e.demos})}),m.jsx(uo,{path:"*",element:m.jsx(na,{to:"/",replace:!0})})]})})})]})]})}function Fh({config:e}){return m.jsx(Dh,{children:m.jsx(Uh,{config:e})})}const Wh="modulepreload",Vh=function(e,t){return new URL(e,t).href},Tc={},S=function(t,n,o){let r=Promise.resolve();if(n&&n.length>0){const s=document.getElementsByTagName("link"),a=document.querySelector("meta[property=csp-nonce]"),l=(a==null?void 0:a.nonce)||(a==null?void 0:a.getAttribute("nonce"));r=Promise.allSettled(n.map(c=>{if(c=Vh(c,o),c in Tc)return;Tc[c]=!0;const u=c.endsWith(".css"),d=u?'[rel="stylesheet"]':"";if(!!o)for(let v=s.length-1;v>=0;v--){const w=s[v];if(w.href===c&&(!u||w.rel==="stylesheet"))return}else if(document.querySelector(`link[href="${c}"]${d}`))return;const f=document.createElement("link");if(f.rel=u?"stylesheet":Wh,u||(f.as="script"),f.crossOrigin="",f.href=c,l&&f.setAttribute("nonce",l),document.head.appendChild(f),u)return new Promise((v,w)=>{f.addEventListener("load",v),f.addEventListener("error",()=>w(new Error(`Unable to preload CSS for ${c}`)))})}))}function i(s){const a=new Event("vite:preloadError",{cancelable:!0});if(a.payload=s,window.dispatchEvent(a),!a.defaultPrevented)throw s}return r.then(s=>{for(const a of s||[])a.status==="rejected"&&i(a.reason);return t().catch(i)})},Hh=`import {
  LazyLoadImageCore,
  createA11yPlugin,
  createAltTextPlugin,
  createAspectRatioSpacerPlugin,
  createResponsivePlugin,
  createSEOPlugin,
  createWebPPlugin,
  withPlugins,
} from "vane-lazy-image";

import { DemoLayout } from "../components/DemoLayout";
import React from "react";

const LazyImage = withPlugins(LazyLoadImageCore as any, [
  createA11yPlugin({}),
  createSEOPlugin({}),
  createAspectRatioSpacerPlugin({ ratio: 4 / 3 }),
  createResponsivePlugin({}),
  createWebPPlugin({}),
  createAltTextPlugin({ prefix: "Demo" }),
]);

export default function ComboA11ySeoDemo() {
  return (
    <DemoLayout
      title="组合示例：可访问性与 SEO"
      description="结合 A11y、SEO、比例占位与响应式资源，提升页面质量。"
    >
      <div
        style={{
          display: "grid",
          gridTemplateColumns: "repeat(2, 1fr)",
          gap: 12,
        }}
      >
        <div style={{ width: 360, height: 240 }}>
          <LazyImage
            src="https://picsum.photos/seed/a11y-seo-combo-1/800/600"
            loading="lazy"
            containerStyle={{ width: "100%", height: "100%" }}
            imageStyle={{ width: "100%", height: "100%", objectFit: "cover" }}
            alt="可访问性与 SEO 组合示例 1"
          />
        </div>
        <div style={{ width: 360, height: 240 }}>
          <LazyImage
            src="https://picsum.photos/seed/a11y-seo-combo-2/800/600"
            loading="lazy"
            containerStyle={{ width: "100%", height: "100%" }}
            imageStyle={{ width: "100%", height: "100%", objectFit: "cover" }}
            alt="可访问性与 SEO 组合示例 2"
          />
        </div>
      </div>
    </DemoLayout>
  );
}
`,Gh=`import {
  LazyLoadImageCore,
  createCachePrewarmPlugin,
  createIDBCachePlugin,
  createMemoryCachePlugin,
  withPlugins,
} from "vane-lazy-image";

import { DemoLayout } from "../components/DemoLayout";
import React from "react";

const LazyImage = withPlugins(LazyLoadImageCore as any, [
  createMemoryCachePlugin({ maxEntries: 200 }),
  createIDBCachePlugin({}),
  createCachePrewarmPlugin({ trigger: "enter", preferMemory: true }),
]);

export default function ComboCacheDemo() {
  return (
    <DemoLayout
      title="组合示例：缓存与存储"
      description="结合内存缓存、IDB 缓存与视口预热，降低重复请求与提升体验。"
    >
      <div
        style={{
          display: "grid",
          gridTemplateColumns: "repeat(2, 1fr)",
          gap: 12,
        }}
      >
        <div style={{ width: 360, height: 240 }}>
          <LazyImage
            src="https://picsum.photos/seed/cache-combo-1/800/600"
            loading="lazy"
            containerStyle={{ width: "100%", height: "100%" }}
            imageStyle={{ width: "100%", height: "100%", objectFit: "cover" }}
            alt="缓存组合示例 1"
          />
        </div>
        <div style={{ width: 360, height: 240 }}>
          <LazyImage
            src="https://picsum.photos/seed/cache-combo-2/800/600"
            loading="lazy"
            containerStyle={{ width: "100%", height: "100%" }}
            imageStyle={{ width: "100%", height: "100%", objectFit: "cover" }}
            alt="缓存组合示例 2"
          />
        </div>
      </div>
    </DemoLayout>
  );
}
`,qh=`import {
  LazyLoadImageCore,
  createOfflinePlugin,
  createPreconnectPlugin,
  createCachePrewarmPlugin,
  createPriorityLoadingPlugin,
  getGlobalNetworkInfo,
  getObserverPoolStats,
  addGlobalContextListener,
  withPlugins,
} from "vane-lazy-image";
import React, { useEffect, useMemo, useState } from "react";

import { DemoLayout } from "../components/DemoLayout";

const ComboEnginePerfDemo: React.FC = () => {
  const [online, setOnline] = useState<boolean>(
    () => getGlobalNetworkInfo()?.online ?? true
  );
  const [pool, setPool] = useState(() => getObserverPoolStats());

  // 订阅 GlobalContext：切到 Offline 时 OfflinePlugin 徽标会实时显示
  useEffect(() => {
    const unsub = addGlobalContextListener(() => {
      setOnline(getGlobalNetworkInfo()?.online ?? true);
    });
    return unsub;
  }, []);

  useEffect(() => {
    const tick = () => setPool(getObserverPoolStats());
    tick();
    const id = window.setInterval(tick, 500);
    return () => window.clearInterval(id);
  }, []);

  // ⚡ 性能优化综合（引擎层）：离线降级 + 预连接 + 缓存预热 + 优先级加载
  const LazyImage = useMemo(
    () =>
      withPlugins(LazyLoadImageCore as any, [
        createOfflinePlugin({ showBadge: true }),
        createPreconnectPlugin({
          domains: ["https://picsum.photos", "https://img11.360buyimg.com"],
          showBadge: true,
        }),
        createCachePrewarmPlugin({ trigger: "enter", showBadge: true }),
        createPriorityLoadingPlugin({ priority: "high" }),
      ]),
    []
  );

  const images = useMemo(
    () =>
      Array.from(
        { length: 8 },
        (_, i) => \`https://picsum.photos/seed/engine-perf-\${i}/800/600\`
      ),
    []
  );

  return (
    <DemoLayout
      title="性能优化综合（引擎层）"
      description="把加固后的引擎能力串成一条端到端链路：GlobalContext 在线/离线感知驱动 Offline 徽标、ObserverPool 共享视口观察、预连接与缓存预热降低首字节时间。"
    >
      <div
        style={{
          padding: 14,
          background: online ? "rgba(127, 208, 140, 0.10)" : "rgba(242, 104, 94, 0.10)",
          borderRadius: 10,
          border: \`1px solid \${online ? "var(--ok)" : "var(--danger)"}\`,
          marginBottom: 20,
        }}
      >
        <p style={{ margin: 0, color: online ? "var(--ok)" : "var(--danger)", lineHeight: 1.6 }}>
          <strong>当前：{online ? "在线" : "离线"}</strong>
          {online
            ? " — OfflinePlugin 在线预热资源进 Cache Storage；切到 DevTools → Network → Offline 后，下方图片会即时显示「离线模式」徽标并回退占位图（证明 GlobalContext online/offline 已真正驱动插件重渲染）。"
            : " — OfflinePlugin 正从 Cache Storage 取缓存或回退内置占位图，预连接/预热的徽标会停止增长。"}
        </p>
      </div>

      <div style={{ display: "grid", gridTemplateColumns: "repeat(2, 1fr)", gap: 12, marginBottom: 24 }}>
        <Stat label="Observer 实例" value={String(pool.observerCount)} />
        <Stat label="被观察元素" value={String(pool.elementCount)} />
      </div>

      <div
        style={{
          display: "grid",
          gridTemplateColumns: "repeat(2, 1fr)",
          gap: 14,
        }}
      >
        {images.map((src, i) => (
          <div key={src} style={{ width: "100%", height: 220, position: "relative" }}>
            <LazyImage
              src={src}
              alt={\`性能优化综合示例 \${i + 1}\`}
              loading="lazy"
              containerStyle={{
                width: "100%",
                height: "100%",
                background: "var(--surface-2)",
                borderRadius: 8,
              }}
              imageStyle={{ width: "100%", height: "100%", objectFit: "cover" }}
            />
          </div>
        ))}
      </div>
    </DemoLayout>
  );
};

const Stat: React.FC<{ label: string; value: string }> = ({ label, value }) => (
  <div
    style={{
      padding: 14,
      borderRadius: 8,
      background: "var(--surface-2)",
      border: "1px solid var(--line)",
      textAlign: "center",
    }}
  >
    <div style={{ fontSize: "1.5em", fontWeight: 700, color: "var(--signal)" }}>{value}</div>
    <div style={{ fontSize: "0.8em", color: "var(--text-2)" }}>{label}</div>
  </div>
);

export default ComboEnginePerfDemo;
`,Qh=`import {
  LazyLoadImageCore,
  createErrorBadgePlugin,
  createErrorOverlayPlugin,
  createEventLoggerPlugin,
  createFallbackImagePlugin,
  createRetryOnErrorPlugin,
  withPlugins,
} from "vane-lazy-image";

import { DemoLayout } from "../components/DemoLayout";
import React from "react";

const LazyImage = withPlugins(LazyLoadImageCore as any, [
  createErrorOverlayPlugin({ retryText: "重试" }),
  createErrorBadgePlugin({}),
  createFallbackImagePlugin({ fallbackSrc: "/404.jpg" }),
  createRetryOnErrorPlugin({ maxRetries: 1 }),
  createEventLoggerPlugin({ enabled: true }),
]);

export default function ComboErrorResilienceDemo() {
  return (
    <DemoLayout
      title="组合示例：错误韧性"
      description="结合错误覆盖层、错误徽标、备用图与自动重试，提升失败处理体验。"
    >
      <div
        style={{
          display: "grid",
          gridTemplateColumns: "repeat(2, 1fr)",
          gap: 12,
        }}
      >
        <div style={{ width: 360, height: 240 }}>
          <LazyImage
            src="https://invalid.example.com/not-found.jpg"
            loading="lazy"
            containerStyle={{ width: "100%", height: "100%" }}
            imageStyle={{ width: "100%", height: "100%", objectFit: "cover" }}
            alt="错误触发示例"
          />
        </div>
        <div style={{ width: 360, height: 240 }}>
          <LazyImage
            src="https://picsum.photos/seed/error-combo/800/600"
            loading="lazy"
            containerStyle={{ width: "100%", height: "100%" }}
            imageStyle={{ width: "100%", height: "100%", objectFit: "cover" }}
            alt="正常加载示例"
          />
        </div>
      </div>
    </DemoLayout>
  );
}
`,Kh=`import {
  LazyLoadImageCore,
  createHoverPrefetchPlugin,
  createOverlayInfoPlugin,
  createProgressOverlayPlugin,
  createScrollIdlePlugin,
  createSkeletonPlugin,
  createViewportAwarePlugin,
  createViewportDebouncePlugin,
  withPlugins,
} from "vane-lazy-image";

import { DemoLayout } from "../components/DemoLayout";
import React from "react";

const LazyImage = withPlugins(LazyLoadImageCore as any, [
  createViewportAwarePlugin(),
  createViewportDebouncePlugin({ debounceMs: 160 }),
  createHoverPrefetchPlugin({
    target: "container",
    trigger: "mouseenter",
    as: "image",
    max: 1,
    dedupe: true,
    getNextSrc: (ctx) => ctx.src,
  }),
  createScrollIdlePlugin({
    idleMs: 160,
    maxWaitMs: 1200,
    onlyWhenIntersecting: true,
  }),
  createProgressOverlayPlugin({
    showWhen: "loading",
    height: 3,
    color: "#4a90e2",
    showPercentText: true,
  }),
  createOverlayInfoPlugin({
    content: (ctx) =>
      \`Interact • \${new URL(ctx.src, window.location.origin).pathname}\`,
    position: "bottom",
    background: "rgba(0,0,0,0.35)",
    color: "#fff",
    showWhen: "loading",
    zIndex: 4,
  }),
  createSkeletonPlugin({
    type: "shimmer",
    showWhen: "loading",
    borderRadius: 6,
    zIndex: 1,
  }),
]);

export default function ComboInteractionOverlayDemo() {
  return (
    <DemoLayout
      title="组合示例：交互与信息叠层"
      description="组合 ViewportAware/Debounce/HoverPrefetch/ScrollIdle 与 OverlayInfo/ProgressOverlay/Skeleton，优化交互与反馈。"
    >
      <div
        style={{
          display: "grid",
          gridTemplateColumns: "repeat(2, 1fr)",
          gap: 12,
        }}
      >
        <div style={{ width: 360, height: 240 }}>
          <LazyImage
            src="https://picsum.photos/seed/interaction-combo-1/800/600"
            loading="lazy"
            containerStyle={{ width: "100%", height: "100%" }}
            imageStyle={{ width: "100%", height: "100%", objectFit: "cover" }}
            alt="交互与叠层组合示例 1"
          />
        </div>
        <div style={{ width: 360, height: 240 }}>
          <LazyImage
            src="https://picsum.photos/seed/interaction-combo-2/800/600"
            loading="lazy"
            containerStyle={{ width: "100%", height: "100%" }}
            imageStyle={{ width: "100%", height: "100%", objectFit: "cover" }}
            alt="交互与叠层组合示例 2"
          />
        </div>
      </div>
    </DemoLayout>
  );
}
`,Yh=`import {
  LazyLoadImageCore,
  createAdaptiveQualityPlugin,
  createImageOptimizationPlugin,
  createPreconnectPlugin,
  createPriorityLoadingPlugin,
  withPlugins,
} from "vane-lazy-image";

import { DemoLayout } from "../components/DemoLayout";
import React from "react";

const LazyImage = withPlugins(LazyLoadImageCore as any, [
  createPreconnectPlugin({
    domains: ["https://picsum.photos", "https://img11.360buyimg.com"],
  }),
  createPriorityLoadingPlugin({ priority: "high" }),
  createAdaptiveQualityPlugin({}),
  createImageOptimizationPlugin({}),
]);

export default function ComboPerformanceDemo() {
  return (
    <DemoLayout
      title="组合示例：性能与网络"
      description="结合预连接、加载优先级、自适应质量与图片优化以提升加载性能。"
    >
      <div
        style={{
          display: "grid",
          gridTemplateColumns: "repeat(2, 1fr)",
          gap: 12,
        }}
      >
        <div style={{ width: 360, height: 240 }}>
          <LazyImage
            src="https://picsum.photos/seed/perf-combo-1/800/600"
            loading="lazy"
            containerStyle={{ width: "100%", height: "100%" }}
            imageStyle={{ width: "100%", height: "100%", objectFit: "cover" }}
            alt="性能优化示例 1"
          />
        </div>
        <div style={{ width: 360, height: 240 }}>
          <LazyImage
            src="https://img11.360buyimg.com/n1/s720x720_jfs/t1/241589/31/30587/68929/68db47d5Fcbc7a2f7/a70b8f66e17214be.png.avif"
            loading="lazy"
            containerStyle={{ width: "100%", height: "100%" }}
            imageStyle={{ width: "100%", height: "100%", objectFit: "cover" }}
            alt="性能优化示例 2"
          />
        </div>
      </div>
    </DemoLayout>
  );
}
`,Xh=`import {
  LazyLoadImageCore,
  createAspectRatioSpacerPlugin,
  createBlurUpPlugin,
  createCaptionPlugin,
  createResponsivePlugin,
  createSEOPlugin,
  createWebPPlugin,
  withPlugins,
} from "vane-lazy-image";

import { DemoLayout } from "../components/DemoLayout";
import React from "react";

const variants = [{ width: 400 }, { width: 800 }, { width: 1200 }];
const buildSrc = (base: string, w: number) => {
  const h = Math.round(w * 0.75);
  try {
    const u = new URL(base);
    const parts = u.pathname.split("/");
    parts[parts.length - 2] = String(w);
    parts[parts.length - 1] = String(h);
    u.pathname = parts.join("/");
    return u.toString();
  } catch {
    return base;
  }
};

const LazyImage = withPlugins(LazyLoadImageCore as any, [
  createResponsivePlugin({
    variants,
    buildSrc,
    sizes: "(max-width: 800px) 100vw, 800px",
  }),
  createWebPPlugin({
    replaceExtensions: ["jpg", "jpeg", "png"],
    testSupport: true,
  }),
  createSEOPlugin({
    altFallback: "示例图片",
    priority: "lcp",
    preload: true,
    title: "演示图像",
  }),
  createAspectRatioSpacerPlugin({ ratio: 4 / 3 }),
  createCaptionPlugin({ text: "响应式 + WebP + SEO 组合" }),
  createBlurUpPlugin({ startBlur: 8, endBlur: 0, durationMs: 450 }),
]);

export default function ComboResponsiveSeoWebPDemo() {
  return (
    <DemoLayout
      title="组合示例：响应式 + SEO + WebP"
      description="组合 Responsive/srcset、WebP 优先与 SEO/LCP 优化，并保证布局稳定。"
    >
      <div
        style={{
          display: "grid",
          gridTemplateColumns: "repeat(2, 1fr)",
          gap: 12,
        }}
      >
        <div style={{ width: 360, height: 240 }}>
          <LazyImage
            src="https://picsum.photos/seed/responsive-combo-1/800/600"
            loading="lazy"
            containerStyle={{ width: "100%", height: "100%" }}
            imageStyle={{ width: "100%", height: "100%", objectFit: "cover" }}
            alt="响应式 SEO WebP 组合示例 1"
          />
        </div>
        <div style={{ width: 360, height: 240 }}>
          <LazyImage
            src="https://picsum.photos/seed/responsive-combo-2/800/600"
            loading="lazy"
            containerStyle={{ width: "100%", height: "100%" }}
            imageStyle={{ width: "100%", height: "100%", objectFit: "cover" }}
            alt="响应式 SEO WebP 组合示例 2"
          />
        </div>
      </div>
    </DemoLayout>
  );
}
`,Zh=`import {
  LazyLoadImageCore,
  createHoverPrefetchPlugin,
  createScrollIdlePlugin,
  createViewportAwarePlugin,
  createViewportDebouncePlugin,
  withPlugins,
} from "vane-lazy-image";

import { DemoLayout } from "../components/DemoLayout";
import React from "react";

const LazyImage = withPlugins(LazyLoadImageCore as any, [
  createViewportAwarePlugin({}),
  createViewportDebouncePlugin({}),
  createHoverPrefetchPlugin({}),
  createScrollIdlePlugin({}),
]);

export default function ComboViewportInteractionDemo() {
  return (
    <DemoLayout
      title="组合示例：视口与交互"
      description="视口感知、事件去抖、悬停预取与滚动空闲协同工作。"
    >
      <div
        style={{
          display: "grid",
          gridTemplateColumns: "repeat(2, 1fr)",
          gap: 12,
        }}
      >
        <div style={{ width: 360, height: 240 }}>
          <LazyImage
            src="https://picsum.photos/seed/viewport-combo-1/800/600"
            loading="lazy"
            containerStyle={{ width: "100%", height: "100%" }}
            imageStyle={{ width: "100%", height: "100%", objectFit: "cover" }}
            alt="视口交互示例 1"
          />
        </div>
        <div style={{ width: 360, height: 240 }}>
          <LazyImage
            src="https://picsum.photos/seed/viewport-combo-2/800/600"
            loading="lazy"
            containerStyle={{ width: "100%", height: "100%" }}
            imageStyle={{ width: "100%", height: "100%", objectFit: "cover" }}
            alt="视口交互示例 2"
          />
        </div>
      </div>
    </DemoLayout>
  );
}
`,Jh=`import {
  LazyLoadImageCore,
  createBlurUpPlugin,
  createBorderGlowPlugin,
  createCaptionPlugin,
  createFadeInPlugin,
  createWatermarkPlugin,
  withPlugins,
} from "vane-lazy-image";

import { DemoLayout } from "../components/DemoLayout";
import React from "react";

const LazyImage = withPlugins(LazyLoadImageCore as any, [
  createBlurUpPlugin({ startBlur: 6, endBlur: 0, durationMs: 450 }),
  createFadeInPlugin({ durationMs: 450 }),
  createBorderGlowPlugin({}),
  createCaptionPlugin({ text: "组合示例：视觉与效果" }),
  createWatermarkPlugin({
    text: "DEMO",
    position: "bottom-right",
    opacity: 0.6,
  }),
]);

export default function ComboVisualEffectsDemo() {
  return (
    <DemoLayout
      title="组合示例：视觉与效果"
      description="组合 Blur-Up、Fade-In、边框辉光、说明文字与水印效果。"
    >
      <div
        style={{
          display: "grid",
          gridTemplateColumns: "repeat(2, 1fr)",
          gap: 12,
        }}
      >
        <div style={{ width: 360, height: 240 }}>
          <LazyImage
            src="https://picsum.photos/seed/visual-combo-1/800/600"
            loading="lazy"
            containerStyle={{ width: "100%", height: "100%" }}
            imageStyle={{ width: "100%", height: "100%", objectFit: "cover" }}
            alt="视觉效果示例 1"
          />
        </div>
        <div style={{ width: 360, height: 240 }}>
          <LazyImage
            src="https://picsum.photos/seed/visual-combo-2/800/600"
            loading="lazy"
            containerStyle={{ width: "100%", height: "100%" }}
            imageStyle={{ width: "100%", height: "100%", objectFit: "cover" }}
            alt="视觉效果示例 2"
          />
        </div>
      </div>
    </DemoLayout>
  );
}
`,e0=`import {
  LazyLoadImageCore,
  createBlurUpPlugin,
  createBorderGlowPlugin,
  createCaptionPlugin,
  createFilterPlugin,
  createGalleryPlugin,
  createHoverZoomPlugin,
  createSkeletonPlugin,
  createSvgPlaceholderPlugin,
  withPlugins,
} from "vane-lazy-image";

import { DemoLayout } from "../components/DemoLayout";
import React from "react";

const LazyImage = withPlugins(LazyLoadImageCore as any, [
  createSvgPlaceholderPlugin({
    svgContent: \`<svg viewBox="0 0 120 90" xmlns="http://www.w3.org/2000/svg"><defs><linearGradient id="grad" x1="0" y1="0" x2="1" y2="1"><stop offset="0%" stop-color="#e5e7eb"/><stop offset="50%" stop-color="#f3f4f6"/><stop offset="100%" stop-color="#e5e7eb"/></linearGradient></defs><rect x="0" y="0" width="120" height="90" fill="#f3f4f6" rx="8"/><circle cx="60" cy="40" r="18" fill="url(#grad)"><animate attributeName="r" values="14;18;14" dur="1.2s" repeatCount="indefinite" /></circle><rect x="36" y="30" width="48" height="20" rx="4" fill="#e5e7eb" opacity="0.6" /><text x="60" y="76" text-anchor="middle" font-size="10" fill="#9ca3af">Loading…</text></svg>\`,
    background: "transparent",
    showWhen: "loading",
    zIndex: 4,
    fadeOutOnLoaded: true,
    opacity: 1,
  }),
  createBlurUpPlugin({ startBlur: 8, endBlur: 0, durationMs: 450 }),
  createSkeletonPlugin({
    type: "shimmer",
    showWhen: "loading",
    borderRadius: 8,
    zIndex: 1,
  }),
  createFilterPlugin({ filter: "grayscale", amount: 1, hover: true }),
  createHoverZoomPlugin({ scale: 1.12, durationMs: 180 }),
  createBorderGlowPlugin({
    color: "rgba(0,153,255,0.6)",
    blurPx: 12,
    spreadPx: 2,
  }),
  createCaptionPlugin({ text: "视觉增强组合（Plus）", position: "bottom" }),
  createGalleryPlugin({ buttonText: "Open", enableLightbox: true }),
]);

export default function ComboVisualEffectsPlusDemo() {
  return (
    <DemoLayout
      title="组合示例：视觉增强 Plus"
      description="结合 SVG 占位、Blur-Up、Skeleton、Filter、HoverZoom、BorderGlow、Caption 与 Gallery。"
    >
      <div
        style={{
          display: "grid",
          gridTemplateColumns: "repeat(2, 1fr)",
          gap: 12,
        }}
      >
        <div style={{ width: 360, height: 240 }}>
          <LazyImage
            src="https://picsum.photos/seed/visual-plus-1/800/600"
            loading="lazy"
            containerStyle={{ width: "100%", height: "100%" }}
            imageStyle={{ width: "100%", height: "100%", objectFit: "cover" }}
            alt="视觉效果 Plus 示例 1"
          />
        </div>
        <div style={{ width: 360, height: 240 }}>
          <LazyImage
            src="https://picsum.photos/seed/visual-plus-2/800/600"
            loading="lazy"
            containerStyle={{ width: "100%", height: "100%" }}
            imageStyle={{ width: "100%", height: "100%", objectFit: "cover" }}
            alt="视觉效果 Plus 示例 2"
          />
        </div>
      </div>
    </DemoLayout>
  );
}
`,t0=`import {
  LazyLoadImageCore,
  createFadeInPlugin,
  createWatermarkPlugin,
  withPlugins,
} from "vane-lazy-image";
import React, { useState } from "react";

import { DemoLayout } from "../components/DemoLayout";
import { DependencyResolver } from "vane-lazy-image/advanced";

// 创建带版本和依赖信息的插件
const createPluginWithDeps = (
  name: string,
  version: string,
  dependencies?: string[] // 改为字符串数组
) => {
  const basePlugin = name === "PluginA"
    ? createFadeInPlugin({ durationMs: 300 })
    : createWatermarkPlugin({ text: name, position: "top-left", opacity: 0.3 });

  return {
    ...basePlugin,
    name,
    version,
    dependencies,
  };
};

const DependencyResolverDemo: React.FC = () => {
  const [resolveLog, setResolveLog] = useState<string[]>([]);
  const [registeredPlugins, setRegisteredPlugins] = useState<any[]>([]);
  const [resolvedOrder, setResolvedOrder] = useState<string[]>([]);
  const [imageKey, setImageKey] = useState(0);

  const addLog = (message: string, type: "info" | "success" | "error" | "warning" = "info") => {
    const emoji =
      type === "success" ? "✅" :
      type === "error" ? "❌" :
      type === "warning" ? "⚠️" : "ℹ️";
    setResolveLog((prev) => [
      ...prev.slice(-14),
      \`\${emoji} \${message}\`,
    ]);
  };

  const handleScenario1 = () => {
    // 场景1：简单依赖链 A → B → C
    const resolver = new DependencyResolver();
    setResolveLog([]);
    addLog("场景1：简单依赖链 A → B → C", "info");

    const pluginA = createPluginWithDeps("PluginA", "1.0.0");
    const pluginB = createPluginWithDeps("PluginB", "1.0.0", ["PluginA"]);
    const pluginC = createPluginWithDeps("PluginC", "1.0.0", ["PluginB"]);

    // 正确的 API：addPlugin(name, deps[], optDeps[], conflicts[])
    resolver.addPlugin("PluginC", ["PluginB"]); // C 依赖 B
    resolver.addPlugin("PluginA"); // A 无依赖
    resolver.addPlugin("PluginB", ["PluginA"]); // B 依赖 A

    const plugins = [pluginA, pluginB, pluginC];
    setRegisteredPlugins(plugins);
    addLog(\`注册插件: \${plugins.map(p => p.name).join(", ")}\`);

    try {
      // 检测循环依赖
      const cycles = resolver.detectCycles();
      if (cycles.length > 0) {
        throw new Error(\`检测到循环依赖: \${cycles.map(c => c.join(" → ")).join("; ")}\`);
      }

      // 拓扑排序
      const order = resolver.getTopologicalOrder(["PluginA", "PluginB", "PluginC"]);
      if (order.length === 0) {
        throw new Error("拓扑排序失败（可能存在循环依赖）");
      }

      setResolvedOrder(order);
      setImageKey((prev) => prev + 1);
      addLog(\`✨ 解析成功! 顺序: \${order.join(" → ")}\`, "success");
    } catch (error: any) {
      addLog(\`解析失败: \${error.message}\`, "error");
      setResolvedOrder([]);
    }
  };

  const handleScenario2 = () => {
    // 场景2：复杂依赖图 - D依赖B和C，B和C都依赖A
    const resolver = new DependencyResolver();
    setResolveLog([]);
    addLog("场景2：复杂依赖图（菱形依赖）", "info");

    const pluginA = createPluginWithDeps("PluginA", "1.0.0");
    const pluginB = createPluginWithDeps("PluginB", "1.0.0", ["PluginA"]);
    const pluginC = createPluginWithDeps("PluginC", "1.0.0", ["PluginA"]);
    const pluginD = createPluginWithDeps("PluginD", "1.0.0", ["PluginB", "PluginC"]);

    // 乱序添加依赖关系
    resolver.addPlugin("PluginD", ["PluginB", "PluginC"]);
    resolver.addPlugin("PluginB", ["PluginA"]);
    resolver.addPlugin("PluginC", ["PluginA"]);
    resolver.addPlugin("PluginA");

    const plugins = [pluginA, pluginB, pluginC, pluginD];
    setRegisteredPlugins(plugins);
    addLog(\`注册插件: \${plugins.map(p => p.name).join(", ")}\`);

    try {
      const cycles = resolver.detectCycles();
      if (cycles.length > 0) {
        throw new Error(\`检测到循环依赖: \${cycles.map(c => c.join(" → ")).join("; ")}\`);
      }

      const order = resolver.getTopologicalOrder(["PluginA", "PluginB", "PluginC", "PluginD"]);
      if (order.length === 0) {
        throw new Error("拓扑排序失败");
      }

      setResolvedOrder(order);
      setImageKey((prev) => prev + 1);
      addLog(\`✨ 解析成功! 顺序: \${order.join(" → ")}\`, "success");
    } catch (error: any) {
      addLog(\`解析失败: \${error.message}\`, "error");
      setResolvedOrder([]);
    }
  };

  const handleScenario3 = () => {
    // 场景3：循环依赖（会失败）A→C, B→A, C→B
    const resolver = new DependencyResolver();
    setResolveLog([]);
    addLog("场景3：循环依赖检测", "warning");

    const pluginA = createPluginWithDeps("PluginA", "1.0.0", ["PluginC"]);
    const pluginB = createPluginWithDeps("PluginB", "1.0.0", ["PluginA"]);
    const pluginC = createPluginWithDeps("PluginC", "1.0.0", ["PluginB"]);

    // 创建循环: A → C → B → A
    resolver.addPlugin("PluginA", ["PluginC"]);
    resolver.addPlugin("PluginB", ["PluginA"]);
    resolver.addPlugin("PluginC", ["PluginB"]);

    const plugins = [pluginA, pluginB, pluginC];
    setRegisteredPlugins(plugins);
    addLog(\`注册插件: \${plugins.map(p => p.name).join(", ")}\`);

    try {
      const cycles = resolver.detectCycles();
      if (cycles.length > 0) {
        const cycleStr = cycles.map(c => c.join(" → ")).join("; ");
        addLog(\`⚠️ 检测到循环依赖: \${cycleStr}\`, "error");
        setResolvedOrder([]);
        setImageKey((prev) => prev + 1);
        return;
      }

      const order = resolver.getTopologicalOrder(["PluginA", "PluginB", "PluginC"]);
      if (order.length === 0) {
        throw new Error("拓扑排序失败（循环依赖）");
      }

      setResolvedOrder(order);
      setImageKey((prev) => prev + 1);
      addLog(\`解析成功! 顺序: \${order.join(" → ")}\`, "success");
    } catch (error: any) {
      addLog(\`⚠️ 检测到循环依赖: \${error.message}\`, "error");
      setResolvedOrder([]);
      setImageKey((prev) => prev + 1);
    }
  };

  const handleScenario4 = () => {
    // 场景4：冲突检测 - B和C互相冲突
    const resolver = new DependencyResolver();
    setResolveLog([]);
    addLog("场景4：冲突检测", "warning");

    const pluginA = createPluginWithDeps("PluginA", "1.0.0");
    const pluginB = createPluginWithDeps("PluginB", "1.0.0", ["PluginA"]);
    const pluginC = createPluginWithDeps("PluginC", "1.0.0", ["PluginA"]);

    // 添加冲突关系：B 和 C 互相冲突
    resolver.addPlugin("PluginA");
    resolver.addPlugin("PluginB", ["PluginA"], [], ["PluginC"]); // B 冲突 C
    resolver.addPlugin("PluginC", ["PluginA"], [], ["PluginB"]); // C 冲突 B

    const plugins = [pluginA, pluginB, pluginC];
    setRegisteredPlugins(plugins);
    addLog(\`注册插件: \${plugins.map(p => \`\${p.name}@\${p.version}\`).join(", ")}\`);

    try {
      // 检查 B 的冲突
      const conflictCheck = resolver.checkConflicts("PluginB", new Set(["PluginA", "PluginC"]));
      if (conflictCheck.hasConflict) {
        addLog(\`⚠️ 冲突检测: PluginB 与 \${conflictCheck.conflicts.join(", ")} 冲突\`, "error");
        setResolvedOrder([]);
        setImageKey((prev) => prev + 1);
        return;
      }

      const order = resolver.getTopologicalOrder(["PluginA", "PluginB", "PluginC"]);
      setResolvedOrder(order);
      setImageKey((prev) => prev + 1);
      addLog(\`✨ 解析成功! 顺序: \${order.join(" → ")}\`, "success");
    } catch (error: any) {
      addLog(\`⚠️ 解析失败: \${error.message}\`, "error");
      setResolvedOrder([]);
      setImageKey((prev) => prev + 1);
    }
  };

  // 使用解析后的插件（简化演示）
  const ImageComponent = React.useMemo(() => {
    if (resolvedOrder.length === 0) {
      return withPlugins(LazyLoadImageCore, [createFadeInPlugin({ durationMs: 300 })]);
    }
    // 简化：只使用FadeIn演示
    return withPlugins(LazyLoadImageCore, [createFadeInPlugin({ durationMs: 300 })]);
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [resolvedOrder, imageKey]); // imageKey 用于强制重新渲染

  return (
    <DemoLayout
      title="DependencyResolver - 依赖解析器"
      description="自动解析插件依赖关系，确定正确的加载顺序"
    >
      <div style={{ marginBottom: 20 }}>
        <div
          style={{
            padding: 16,
            background: "rgba(95, 211, 200, 0.08)",
            borderRadius: "8px",
            border: "1px solid var(--signal)",
          }}
        >
          <p style={{ margin: 0, color: "var(--signal)", lineHeight: "1.6", marginBottom: 8 }}>
            🧩 <strong>依赖解析功能：</strong>
          </p>
          <ul style={{ margin: 0, color: "var(--signal)", lineHeight: "1.8" }}>
            <li>自动拓扑排序（Topological Sort）</li>
            <li>循环依赖检测</li>
            <li>版本兼容性检查（Semver）</li>
            <li>缺失依赖警告</li>
          </ul>
        </div>
      </div>

      {/* 测试场景 */}
      <div style={{ marginBottom: 30 }}>
        <h3 style={{ fontSize: "1.1em", marginBottom: 12 }}>🧪 测试场景</h3>
        <div style={{ display: "flex", gap: 12, flexWrap: "wrap" }}>
          <button
            onClick={handleScenario1}
            style={{
              padding: "10px 16px",
              background: "var(--ok)",
              color: "var(--text-inv)",
              border: "none",
              borderRadius: "6px",
              cursor: "pointer",
              fontSize: "0.9em",
            }}
          >
            ✅ 场景1: 简单依赖链
          </button>
          <button
            onClick={handleScenario2}
            style={{
              padding: "10px 16px",
              background: "var(--signal)",
              color: "var(--text-inv)",
              border: "none",
              borderRadius: "6px",
              cursor: "pointer",
              fontSize: "0.9em",
            }}
          >
            📊 场景2: 复杂依赖图
          </button>
          <button
            onClick={handleScenario3}
            style={{
              padding: "10px 16px",
              background: "var(--warn)",
              color: "var(--text-inv)",
              border: "none",
              borderRadius: "6px",
              cursor: "pointer",
              fontSize: "0.9em",
            }}
          >
            🔄 场景3: 循环依赖
          </button>
          <button
            onClick={handleScenario4}
            style={{
              padding: "10px 16px",
              background: "var(--danger)",
              color: "var(--text-inv)",
              border: "none",
              borderRadius: "6px",
              cursor: "pointer",
              fontSize: "0.9em",
            }}
          >
            ⚠️ 场景4: 冲突检测
          </button>
        </div>
      </div>

      {/* 当前注册的插件 */}
      {registeredPlugins.length > 0 && (
        <div style={{ marginBottom: 20 }}>
          <h3 style={{ fontSize: "1.1em", marginBottom: 12 }}>📦 注册的插件</h3>
          <div style={{ display: "flex", gap: 8, flexWrap: "wrap" }}>
            {registeredPlugins.map((plugin) => (
              <div
                key={plugin.name}
                style={{
                  padding: "8px 12px",
                  background: "var(--surface-2)",
                  borderRadius: "6px",
                  fontSize: "0.85em",
                  border: "1px solid var(--line-strong)",
                }}
              >
                <div style={{ fontWeight: "bold" }}>{plugin.name}</div>
                <div style={{ color: "var(--text-2)", fontSize: "0.9em" }}>
                  v{plugin.version}
                </div>
                {plugin.dependencies && (
                  <div style={{ color: "var(--text-2)", fontSize: "0.85em", marginTop: 4 }}>
                    依赖: {Object.keys(plugin.dependencies).join(", ")}
                  </div>
                )}
              </div>
            ))}
          </div>
        </div>
      )}

      {/* 解析后的顺序 */}
      {resolvedOrder.length > 0 && (
        <div style={{ marginBottom: 20 }}>
          <h3 style={{ fontSize: "1.1em", marginBottom: 12 }}>✅ 解析后的加载顺序</h3>
          <div
            style={{
              padding: 16,
              background: "rgba(127, 208, 140, 0.10)",
              borderRadius: "8px",
              border: "1px solid var(--ok)",
            }}
          >
            <div style={{ display: "flex", alignItems: "center", gap: 12, flexWrap: "wrap" }}>
              {resolvedOrder.map((name, i) => (
                <React.Fragment key={name}>
                  <div
                    style={{
                      padding: "8px 16px",
                      background: "rgba(127, 208, 140, 0.12)",
                      borderRadius: "6px",
                      fontWeight: "bold",
                      color: "var(--ok)",
                    }}
                  >
                    {i + 1}. {name}
                  </div>
                  {i < resolvedOrder.length - 1 && (
                    <span style={{ color: "var(--ok)", fontSize: "1.2em" }}>→</span>
                  )}
                </React.Fragment>
              ))}
            </div>
          </div>
        </div>
      )}

      {/* 解析日志 */}
      <div style={{ marginBottom: 30 }}>
        <h3 style={{ fontSize: "1.1em", marginBottom: 12 }}>📜 解析日志</h3>
        <div
          style={{
            padding: 16,
            background: "var(--text)",
            borderRadius: "8px",
            color: "var(--text-inv)",
            fontFamily: "monospace",
            fontSize: "0.85em",
            maxHeight: 200,
            overflow: "auto",
          }}
        >
          {resolveLog.length === 0 ? (
            /* 面板是反色的（底 var(--text) / 字 var(--text-inv)）；
               空态也必须按反色给字，写 var(--text-2) 就是奶油压奶油（1.76:1） */
            <div style={{ color: "#6e6861" }}>点击上方按钮开始测试...</div>
          ) : (
            resolveLog.map((log, i) => (
              <div key={i} style={{ marginBottom: 4 }}>
                {log}
              </div>
            ))
          )}
        </div>
      </div>

      {/* 示例图片 */}
      <div style={{ marginBottom: 20 }}>
        <h3 style={{ fontSize: "1.1em", marginBottom: 12 }}>🖼️ 使用解析后的插件</h3>
        <div
          style={{
            display: "grid",
            gridTemplateColumns: "repeat(auto-fill, minmax(250px, 1fr))",
            gap: 16,
          }}
        >
          {Array.from({ length: 4 }, (_, i) => (
            <div key={\`\${imageKey}-\${i}\`} style={{ width: "100%", height: 150 }}>
              <ImageComponent
                src={\`https://picsum.photos/seed/dep-resolver-\${imageKey}-\${i}/800/600\`}
                alt={\`依赖解析示例 \${i + 1}\`}
                loading="lazy"
                containerStyle={{
                  width: "100%",
                  height: "100%",
                  background: "var(--surface-2)",
                  borderRadius: "8px",
                }}
                imageStyle={{
                  width: "100%",
                  height: "100%",
                  objectFit: "cover",
                }}
              />
            </div>
          ))}
        </div>
      </div>

      {/* API 使用示例 */}
      <div>
        <h3 style={{ fontSize: "1.1em", marginBottom: 12 }}>💻 API 使用示例</h3>
        <div
          style={{
            padding: 16,
            background: "var(--surface-2)",
            borderRadius: "8px",
            border: "1px solid var(--line)",
          }}
        >
          <pre style={{ margin: 0, fontSize: "0.85em", overflow: "auto" }}>
{\`import { DependencyResolver } from "vane-lazy-image";

const resolver = new DependencyResolver();

// 添加插件依赖关系（乱序也可以）
resolver.addPlugin("PluginB", ["PluginA"]); // B 依赖 A
resolver.addPlugin("PluginC", ["PluginB"]); // C 依赖 B
resolver.addPlugin("PluginA");              // A 无依赖

// 检测循环依赖
const cycles = resolver.detectCycles();
if (cycles.length > 0) {
  console.error("循环依赖:", cycles);
  throw new Error("存在循环依赖");
}

// 拓扑排序（自动确定加载顺序）
const order = resolver.getTopologicalOrder([
  "PluginA",
  "PluginB",
  "PluginC"
]);
// order: ["PluginA", "PluginB", "PluginC"] - 正确顺序!

// 检查依赖是否满足
const depCheck = resolver.checkDependencies(
  "PluginC",
  new Set(order)
);
console.log("依赖满足:", depCheck.satisfied);\`}
          </pre>
        </div>
      </div>
    </DemoLayout>
  );
};

export default DependencyResolverDemo;
`,n0=`import {
  LazyLoadImageCore,
  createPreconnectPlugin,
  getGlobalNetworkInfo,
  getGlobalDeviceInfo,
  getGlobalContextStats,
  addGlobalContextListener,
  getObserverPoolStats,
  withPlugins,
} from "vane-lazy-image";
import React, { useEffect, useMemo, useState } from "react";

import { DemoLayout } from "../components/DemoLayout";

type NetInfo = ReturnType<typeof getGlobalNetworkInfo>;
type DevInfo = ReturnType<typeof getGlobalDeviceInfo>;

const EngineInfraDemo: React.FC = () => {
  const [net, setNet] = useState<NetInfo>(() => getGlobalNetworkInfo());
  const [dev, setDev] = useState<DevInfo>(() => getGlobalDeviceInfo());
  const [ctxStats, setCtxStats] = useState(() => getGlobalContextStats());
  const [pool, setPool] = useState(() => getObserverPoolStats());

  // GlobalContext：订阅全局上下文变化（online/offline、网络切换、resize 都会触发）
  useEffect(() => {
    const refresh = () => {
      setNet(getGlobalNetworkInfo());
      setDev(getGlobalDeviceInfo());
      setCtxStats(getGlobalContextStats());
    };
    const unsub = addGlobalContextListener(refresh);
    refresh();
    return unsub;
  }, []);

  // ObserverPool：轮询统计（图片进入视口时被复用，Observer 数量远低于图片数）
  useEffect(() => {
    const tick = () => setPool(getObserverPoolStats());
    tick();
    const id = window.setInterval(tick, 500);
    return () => window.clearInterval(id);
  }, []);

  // 渲染 40 张图，制造大量被观察元素，便于直观看到 Observer 共享
  const LazyImage = useMemo(
    () =>
      withPlugins(LazyLoadImageCore as any, [
        createPreconnectPlugin({ domains: ["https://picsum.photos"] }),
      ]),
    []
  );

  const images = useMemo(
    () =>
      Array.from(
        { length: 40 },
        (_, i) => \`https://picsum.photos/seed/engine-infra-\${i}/300/200\`
      ),
    []
  );

  const shareRatio =
    pool.observerCount > 0
      ? Math.round(pool.elementCount / pool.observerCount)
      : 0;

  return (
    <DemoLayout
      title="引擎性能基础设施：GlobalContext + ObserverPool"
      description="两项已在引擎热路径落地的能力，这里把它们变成可观察的实时面板：集中式网络/设备上下文，以及共享 IntersectionObserver 池（本次加固包含 online/offline 收口与 root 身份修复）。"
    >
      <div
        style={{
          display: "grid",
          gridTemplateColumns: "repeat(auto-fit, minmax(320px, 1fr))",
          gap: 20,
          marginBottom: 24,
        }}
      >
        {/* GlobalContext 面板 */}
        <div
          style={{
            padding: 16,
            background: "var(--surface-3)",
            borderRadius: 10,
            border: "1px solid var(--accent-line)",
          }}
        >
          <h3 style={{ margin: "0 0 4px", fontSize: "1.05em", color: "var(--accent-2)" }}>
            GlobalContext · 全局上下文
          </h3>
          <p style={{ margin: "0 0 12px", fontSize: "0.82em", color: "var(--accent-2)" }}>
            全 App 唯一的网络/设备监听源，变化后广播给每个实例。
          </p>
          <div style={{ display: "flex", alignItems: "center", gap: 8, marginBottom: 10 }}>
            <span
              style={{
                display: "inline-block",
                width: 10,
                height: 10,
                borderRadius: "50%",
                background: net?.online ? "var(--ok)" : "var(--danger)",
              }}
            />
            <strong style={{ fontSize: "1.1em" }}>
              {net?.online ? "在线" : "离线"}
            </strong>
            <span style={{ fontSize: "0.78em", color: "var(--text-2)" }}>
              （在 DevTools → Network 勾选 Offline 可实时切换本状态）
            </span>
          </div>
          <table style={{ width: "100%", borderCollapse: "collapse", fontSize: "0.85em" }}>
            <tbody>
              <tr style={rowStyle}><td style={k}>effectiveType</td><td style={v}>{net?.effectiveType ?? "—"}</td></tr>
              <tr style={rowStyle}><td style={k}>downlink</td><td style={v}>{net ? \`\${net.downlink} Mbps\` : "—"}</td></tr>
              <tr style={rowStyle}><td style={k}>rtt</td><td style={v}>{net ? \`\${net.rtt} ms\` : "—"}</td></tr>
              <tr style={rowStyle}><td style={k}>saveData</td><td style={v}>{net ? String(net.saveData) : "—"}</td></tr>
              <tr style={rowStyle}><td style={k}>设备类型</td><td style={v}>{dev?.type ?? "—"}</td></tr>
              <tr style={rowStyle}><td style={k}>DPR</td><td style={v}>{dev ? String(dev.devicePixelRatio) : "—"}</td></tr>
              <tr style={rowStyle}><td style={k}>视口</td><td style={v}>{dev ? \`\${dev.viewportWidth}×\${dev.viewportHeight}\` : "—"}</td></tr>
              <tr style={rowStyle}><td style={k}>触屏/Retina</td><td style={v}>{dev ? \`\${dev.isTouchDevice ? "触屏 " : ""}\${dev.isRetina ? "Retina" : ""}\` || "—" : "—"}</td></tr>
              <tr style={rowStyle}><td style={k}>监听者数</td><td style={v}>{ctxStats.listenersCount}</td></tr>
            </tbody>
          </table>
        </div>

        {/* ObserverPool 面板 */}
        <div
          style={{
            padding: 16,
            background: "rgba(95, 211, 200, 0.08)",
            borderRadius: 10,
            border: "1px solid #67e8f9",
          }}
        >
          <h3 style={{ margin: "0 0 4px", fontSize: "1.05em", color: "var(--signal)" }}>
            ObserverPool · 共享观察池
          </h3>
          <p style={{ margin: "0 0 12px", fontSize: "0.82em", color: "var(--signal)" }}>
            相同配置（root/rootMargin/threshold）的图复用同一个 IntersectionObserver。
          </p>
          <div style={{ display: "grid", gridTemplateColumns: "repeat(2, 1fr)", gap: 12, marginBottom: 12 }}>
            <StatCard label="Observer 实例" value={String(pool.observerCount)} accent="var(--signal)" />
            <StatCard label="被观察元素" value={String(pool.elementCount)} accent="var(--signal)" />
            <StatCard label="平均共享比" value={\`\${shareRatio}∶1\`} accent="var(--accent-2)" />
            <StatCard label="累计回调" value={String(pool.totalCallbackExecutions)} accent="var(--accent-2)" />
          </div>
          <p style={{ margin: "0 0 6px", fontSize: "0.8em", color: "var(--signal)" }}>
            内存估算：<strong>{pool.memoryEstimate}</strong>
          </p>
          <p style={{ margin: 0, fontSize: "0.78em", color: "var(--text-2)", lineHeight: 1.5 }}>
            下方 {images.length} 张图若各自创建 Observer 需 {images.length} 个实例；
            共享池把它们收敛到 <strong>{pool.observerCount}</strong> 个（root 身份经 WeakMap 稳定化，
            不同滚动根同 class 也不会碰撞到错-root observer）。
          </p>
        </div>
      </div>

      {/* 图片网格（制造被观察元素） */}
      <h3 style={{ fontSize: "1.05em", margin: "0 0 12px" }}>观察样本（{images.length} 张）</h3>
      <div
        style={{
          display: "grid",
          gridTemplateColumns: "repeat(auto-fill, minmax(150px, 1fr))",
          gap: 12,
          maxHeight: 520,
          overflowY: "auto",
          padding: 4,
        }}
      >
        {images.map((src, i) => (
          <div key={src} style={{ position: "relative", width: "100%", height: 110 }}>
            <LazyImage
              src={src}
              alt={\`引擎示例 \${i + 1}\`}
              loading="lazy"
              containerStyle={{
                width: "100%",
                height: "100%",
                background: "var(--surface-2)",
                borderRadius: 8,
              }}
              imageStyle={{ width: "100%", height: "100%", objectFit: "cover" }}
            />
          </div>
        ))}
      </div>
    </DemoLayout>
  );
};

const rowStyle: React.CSSProperties = {
  borderBottom: "1px solid var(--accent-wash)",
};
const k: React.CSSProperties = { padding: "6px 0", color: "var(--text-2)" };
const v: React.CSSProperties = {
  padding: "6px 0",
  textAlign: "right",
  fontWeight: 600,
  color: "var(--text)",
};

const StatCard: React.FC<{ label: string; value: string; accent: string }> = ({
  label,
  value,
  accent,
}) => (
  <div
    style={{
      padding: 12,
      borderRadius: 8,
      background: "var(--surface)",
      border: \`1px solid \${accent}33\`,
      textAlign: "center",
    }}
  >
    <div style={{ fontSize: "1.6em", fontWeight: 700, color: accent }}>{value}</div>
    <div style={{ fontSize: "0.78em", color: "var(--text-2)" }}>{label}</div>
  </div>
);

export default EngineInfraDemo;
`,o0=`import {
  LazyLoadImageCore,
  createFetchLoaderPlugin,
  createPerformanceMonitorPlugin,
  withPlugins,
} from "vane-lazy-image";
import React, { useCallback, useMemo, useRef, useState } from "react";

import { DemoLayout } from "../components/DemoLayout";

const PerformanceMonitoringDemo: React.FC = () => {
  const [performanceData, setPerformanceData] = useState<
    Array<{ src: string; duration: number; timestamp: number; index: number }>
  >([]);
  const [globalStats, setGlobalStats] = useState<{
    totalImages: number;
    avgLoadTime: number;
  }>({ totalImages: 0, avgLoadTime: 0 });
  const [selectedReport, setSelectedReport] = useState<number | null>(null);
  const loadCountRef = useRef(0);
  const reportedSrcsRef = useRef<Set<string>>(new Set()); // 防止重复报告

  const images = Array.from(
    { length: 6 },
    (_, i) => \`https://picsum.photos/seed/perf-mon-\${i}/800/600\`
  );

  // 稳定的 onReport 回调
  const handleReport = useCallback((data: { src: string; durationMs: number }) => {
    // 防止同一张图片重复报告
    if (reportedSrcsRef.current.has(data.src)) {
      console.log("[性能监控] 跳过重复报告:", data.src);
      return;
    }

    reportedSrcsRef.current.add(data.src);
    console.log("[性能监控] 新报告:", data);

    const newReport = {
      src: data.src,
      duration: data.durationMs,
      timestamp: Date.now(),
      index: loadCountRef.current++,
    };

    setPerformanceData((prev) => {
      const updated = [...prev, newReport];

      // 更新全局统计
      const totalImages = updated.length;
      const avgTime = updated.reduce((sum, r) => sum + r.duration, 0) / totalImages;

      setGlobalStats({
        totalImages,
        avgLoadTime: Math.round(avgTime),
      });

      return updated.slice(-10); // 保留最近10条
    });
  }, []);

  // 使用 useMemo 确保 LazyImage 只创建一次
  const LazyImage = useMemo(() => {
    return withPlugins(LazyLoadImageCore, [
      createFetchLoaderPlugin({ enabled: true }),
      createPerformanceMonitorPlugin({
        showOverlay: true,
        overlayPosition: "top-right",
        onReport: handleReport,
      }),
    ]);
  }, [handleReport]);

  return (
    <DemoLayout
      title="PerformanceMonitoring - 性能监控系统"
      description="完整的性能监控系统，包含实时报告、全局统计和性能分析"
    >
      <div style={{ marginBottom: 20 }}>
        <div
          style={{
            padding: 16,
            background: "rgba(127, 208, 140, 0.10)",
            borderRadius: "8px",
            border: "1px solid var(--ok)",
          }}
        >
          <p style={{ margin: 0, color: "var(--ok)", lineHeight: "1.6", marginBottom: 8 }}>
            📊 <strong>监控系统功能：</strong>
          </p>
          <ul style={{ margin: 0, color: "var(--ok)", lineHeight: "1.8" }}>
            <li>实时性能指标收集（TTFB、下载、解码）</li>
            <li>自动性能报告生成</li>
            <li>全局监控管理器（跨组件统计）</li>
            <li>性能阈值警告</li>
            <li>详细的性能分析报告</li>
          </ul>
        </div>
      </div>

      {/* 全局统计卡片 */}
      <div style={{ marginBottom: 30 }}>
        <h3 style={{ fontSize: "1.1em", marginBottom: 12 }}>📈 全局统计</h3>
        <div
          style={{
            display: "grid",
            gridTemplateColumns: "repeat(auto-fit, minmax(150px, 1fr))",
            gap: 16,
          }}
        >
          <div
            style={{
              padding: 16,
              background: "linear-gradient(135deg, #667eea 0%, #764ba2 100%)",
              borderRadius: "8px",
              color: "white",
              textAlign: "center",
            }}
          >
            <div style={{ fontSize: "2em", fontWeight: "bold" }}>
              {globalStats.totalImages}
            </div>
            <div style={{ fontSize: "0.9em", opacity: 0.9 }}>加载图片数</div>
          </div>
          <div
            style={{
              padding: 16,
              background: "linear-gradient(135deg, #f093fb 0%, #f5576c 100%)",
              borderRadius: "8px",
              color: "white",
              textAlign: "center",
            }}
          >
            <div style={{ fontSize: "2em", fontWeight: "bold" }}>
              {globalStats.avgLoadTime}ms
            </div>
            <div style={{ fontSize: "0.9em", opacity: 0.9 }}>平均加载时间</div>
          </div>
          <div
            style={{
              padding: 16,
              background: "linear-gradient(135deg, #4facfe 0%, #00f2fe 100%)",
              borderRadius: "8px",
              color: "white",
              textAlign: "center",
            }}
          >
              <div style={{ fontSize: "2em", fontWeight: "bold" }}>
              {performanceData.length}
            </div>
            <div style={{ fontSize: "0.9em", opacity: 0.9 }}>报告数量</div>
          </div>
        </div>
      </div>

      {/* 图片展示 */}
      <div style={{ marginBottom: 30 }}>
        <h3 style={{ fontSize: "1.1em", marginBottom: 12 }}>🖼️ 监控图片</h3>
        <div
          style={{
            display: "grid",
            gridTemplateColumns: "repeat(auto-fill, minmax(250px, 1fr))",
            gap: 16,
          }}
        >
          {images.map((src, i) => (
            <div key={src + i}>
              <div style={{ width: "100%", height: 150, position: "relative" }}>
                <LazyImage
                  src={src}
                  alt={\`性能监控示例 \${i + 1}\`}
                  loading="lazy"
                  containerStyle={{
                    width: "100%",
                    height: "100%",
                    background: "var(--surface-2)",
                    borderRadius: "8px",
                  }}
                  imageStyle={{
                    width: "100%",
                    height: "100%",
                    objectFit: "cover",
                  }}
                />
              </div>
              <p
                style={{
                  textAlign: "center",
                  marginTop: 8,
                  fontSize: "0.85em",
                  color: "var(--text-2)",
                }}
              >
                图片 {i + 1}
              </p>
            </div>
          ))}
        </div>
      </div>

      {/* 实时性能报告 */}
      <div style={{ marginBottom: 30 }}>
        <h3 style={{ fontSize: "1.1em", marginBottom: 12 }}>📋 实时性能报告</h3>
        {performanceData.length === 0 ? (
          <div
            style={{
              padding: 20,
              background: "var(--surface-2)",
              borderRadius: "8px",
              textAlign: "center",
              color: "var(--text-2)",
            }}
          >
            等待性能数据收集中...（滚动页面以加载图片）
          </div>
        ) : (
          <div style={{ display: "flex", flexDirection: "column", gap: 8 }}>
            {performanceData.map((report, i) => (
              <div
                key={i}
                onClick={() => setSelectedReport(i)}
                style={{
                  padding: 12,
                  background: selectedReport === i ? "var(--accent-wash)" : "var(--surface-2)",
                  borderRadius: "8px",
                  border: \`1px solid \${selectedReport === i ? "var(--signal)" : "var(--line)"}\`,
                  cursor: "pointer",
                  transition: "all 0.2s",
                }}
              >
                <div style={{ display: "flex", justifyContent: "space-between", alignItems: "center" }}>
                  <div>
                    <strong style={{ fontSize: "0.9em" }}>
                      图片 #{report.index + 1}
                    </strong>
                    <div style={{ fontSize: "0.8em", color: "var(--text-2)", marginTop: 4 }}>
                      {new Date(report.timestamp).toLocaleTimeString()}
                    </div>
                  </div>
                  <div style={{ textAlign: "right" }}>
                    <div
                      style={{
                        fontSize: "1.1em",
                        fontWeight: "bold",
                        color: report.duration > 3000 ? "var(--danger)" : report.duration > 1000 ? "var(--warn)" : "var(--ok)",
                      }}
                    >
                      {report.duration}ms
                    </div>
                    <div style={{ fontSize: "0.8em", color: "var(--text-2)" }}>
                      加载时长
                    </div>
                  </div>
                </div>
              </div>
            ))}
          </div>
        )}
      </div>

      {/* 详细指标 */}
      {selectedReport !== null && performanceData[selectedReport] && (
        <div style={{ marginBottom: 20 }}>
          <h3 style={{ fontSize: "1.1em", marginBottom: 12 }}>🔍 详细指标</h3>
          <div
            style={{
              padding: 16,
              background: "var(--surface)",
              borderRadius: "8px",
              border: "1px solid var(--line)",
            }}
          >
            <table style={{ width: "100%", borderCollapse: "collapse" }}>
              <tbody>
                <tr style={{ borderBottom: "1px solid var(--surface-2)" }}>
                  <td style={{ padding: "8px 0", fontWeight: 500 }}>图片索引</td>
                  <td style={{ padding: "8px 0", textAlign: "right", color: "var(--text-2)" }}>
                    #{performanceData[selectedReport].index + 1}
                  </td>
                </tr>
                <tr style={{ borderBottom: "1px solid var(--surface-2)" }}>
                  <td style={{ padding: "8px 0", fontWeight: 500 }}>加载时长</td>
                  <td style={{ padding: "8px 0", textAlign: "right", color: "var(--text-2)" }}>
                    {performanceData[selectedReport].duration}ms
                  </td>
                </tr>
                <tr style={{ borderBottom: "1px solid var(--surface-2)" }}>
                  <td style={{ padding: "8px 0", fontWeight: 500 }}>加载时间</td>
                  <td style={{ padding: "8px 0", textAlign: "right", color: "var(--text-2)" }}>
                    {new Date(performanceData[selectedReport].timestamp).toLocaleString()}
                  </td>
                </tr>
                <tr style={{ borderBottom: "1px solid var(--surface-2)" }}>
                  <td style={{ padding: "8px 0", fontWeight: 500 }}>图片URL</td>
                  <td style={{ padding: "8px 0", textAlign: "right", color: "var(--text-2)", fontSize: "0.8em" }}>
                    {performanceData[selectedReport].src.substring(0, 50)}...
                  </td>
                </tr>
                <tr>
                  <td style={{ padding: "8px 0", fontWeight: 500 }}>性能等级</td>
                  <td style={{ padding: "8px 0", textAlign: "right" }}>
                    <span
                      style={{
                        padding: "4px 8px",
                        borderRadius: "4px",
                        fontSize: "0.85em",
                        fontWeight: "bold",
                        background: performanceData[selectedReport].duration > 3000
                          ? "rgba(242, 104, 94, 0.12)"
                          : performanceData[selectedReport].duration > 1000
                          ? "rgba(245, 194, 75, 0.10)"
                          : "rgba(127, 208, 140, 0.14)",
                        color: performanceData[selectedReport].duration > 3000
                          ? "var(--danger)"
                          : performanceData[selectedReport].duration > 1000
                          ? "var(--warn)"
                          : "var(--ok)",
                      }}
                    >
                      {performanceData[selectedReport].duration > 3000
                        ? "慢 (>3s)"
                        : performanceData[selectedReport].duration > 1000
                        ? "中等 (>1s)"
                        : "快 (<1s)"}
                    </span>
                  </td>
                </tr>
              </tbody>
            </table>
          </div>
        </div>
      )}

      {/* API 使用示例 */}
      <div>
        <h3 style={{ fontSize: "1.1em", marginBottom: 12 }}>💻 API 使用示例</h3>
        <div
          style={{
            padding: 16,
            background: "var(--surface-2)",
            borderRadius: "8px",
            border: "1px solid var(--line)",
          }}
        >
          <pre style={{ margin: 0, fontSize: "0.85em", overflow: "auto" }}>
{\`import {
  LazyLoadImageCore,
  createPerformanceMonitorPlugin,
  withPlugins,
} from "vane-lazy-image";

// 使用性能监控插件
const LazyImage = withPlugins(LazyLoadImageCore, [
  createPerformanceMonitorPlugin({
    showOverlay: true,          // 显示性能叠加层
    overlayPosition: "top-right", // 叠加层位置
    onReport: (data) => {
      // 性能报告回调
      console.log("图片加载性能:", data);
      // {
      //   src: string,
      //   durationMs: number,
      //   network: NetworkInfo,
      //   device: DeviceInfo
      // }
    },
  }),
]);

// 使用组件
<LazyImage
  src="https://example.com/image.jpg"
  alt="示例图片"
/>\`}
          </pre>
        </div>
      </div>
    </DemoLayout>
  );
};

export default PerformanceMonitoringDemo;

`,r0=`import {
  LazyLoadImageCore,
  createBadgePlugin,
  createSkeletonPlugin,
  withPlugins,
} from "vane-lazy-image";
import React, { useEffect, useMemo, useState } from "react";

import { DemoLayout } from "../components/DemoLayout";
import { createPluginManager } from "vane-lazy-image/plugins";

const PluginHotReloadDemo: React.FC = () => {
  const [pluginManager] = useState(() => createPluginManager());
  const [currentPlugins, setCurrentPlugins] = useState<string[]>([]);
  const [logs, setLogs] = useState<string[]>([]);
  const [imageKey, setImageKey] = useState(0);

  const addLog = (message: string, type: "info" | "success" | "error" = "info") => {
    const emoji = type === "success" ? "✅" : type === "error" ? "❌" : "ℹ️";
    setLogs((prev) => [
      ...prev.slice(-14),
      \`[\${new Date().toLocaleTimeString()}] \${emoji} \${message}\`,
    ]);
  };

  // 初始化插件 - 使用 Skeleton 插件（加载中显示骨架屏）
  useEffect(() => {
    // 注册初始插件：加载中的骨架屏
    const skeleton = createSkeletonPlugin({
      type: "pulse",
      showWhen: "loading"
    });
    pluginManager.register(skeleton);
    setCurrentPlugins([skeleton.name]);
    addLog(\`注册插件: \${skeleton.name}\`, "success");
  }, [pluginManager]);

  // 使用 useMemo 根据当前激活的插件动态创建组件
  // 注意：每次插件列表变化时都需要重新创建组件，因为 withPlugins 会捕获插件快照
  const ImageComponent = useMemo(() => {
    const activePlugins = pluginManager.getAllPlugins();
    console.log("[热更新] 重新创建组件，当前插件:", activePlugins.map((p: any) => p.name));
    return withPlugins(LazyLoadImageCore, activePlugins);
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [currentPlugins, imageKey]); // pluginManager 引用稳定，不需要作为依赖

  const handleAddBadge = () => {
    const badge = createBadgePlugin({
      text: "🔥 HOT",
      position: "top-right",
      bgColor: "var(--danger)",
      color: "var(--text-inv)",
      fontSize: 14,
      padding: "4px 12px",
      showWhen: "loaded"
    });

    const exists = pluginManager
      .getAllPlugins()
      .some((p: any) => p.name === badge.name);
    if (exists) {
      addLog(\`插件已存在: \${badge.name}\`, "error");
    } else {
      pluginManager.register(badge);
      setCurrentPlugins((prev) => [...prev, badge.name]);
      setImageKey((prev) => prev + 1); // 强制重新渲染
      addLog(\`热注册插件: \${badge.name}\`, "success");
    }
  };

  const handleRemoveBadge = () => {
    const exists = pluginManager
      .getAllPlugins()
      .some((p: any) => p.name === "badge");
    if (exists) {
      pluginManager.unregister("badge");
      setCurrentPlugins((prev) => prev.filter((name) => name !== "badge"));
      setImageKey((prev) => prev + 1); // 强制重新渲染
      addLog("卸载插件: badge", "success");
    } else {
      addLog("插件不存在: badge", "error");
    }
  };

  const handleReplacePlugin = () => {
    // 先卸载旧的骨架屏插件
    pluginManager.unregister("skeleton");

    // 注册新的 Badge 配置（不同样式）
    const newBadge = createBadgePlugin({
      text: "✨ NEW",
      position: "top-left",
      bgColor: "var(--ok)",
      color: "var(--text-inv)",
      fontSize: 16,
      padding: "6px 16px",
      borderRadius: 8,
      showWhen: "always"
    });
    pluginManager.register(newBadge);
    setCurrentPlugins((prev) => [...prev.filter(n => n !== "skeleton"), newBadge.name]);

    setImageKey((prev) => prev + 1);
    addLog("热替换插件: skeleton → badge (绿色标签)", "success");
  };

  const handleResetPlugins = () => {
    // 卸载所有插件
    const allPlugins = pluginManager.getAllPlugins();
    allPlugins.forEach((plugin: any) => pluginManager.unregister(plugin.name));

    // 重新注册默认插件
    const skeleton = createSkeletonPlugin({
      type: "pulse",
      showWhen: "loading"
    });
    pluginManager.register(skeleton);
    setCurrentPlugins([skeleton.name]);
    setImageKey((prev) => prev + 1);
    addLog("重置所有插件", "info");
  };

  return (
    <DemoLayout
      title="PluginHotReload - 插件热更新"
      description="运行时动态注册、卸载和替换插件，无需重启应用"
    >
      <div style={{ marginBottom: 20 }}>
        <div
          style={{
            padding: 16,
            background: "rgba(245, 194, 75, 0.10)",
            borderRadius: "8px",
            border: "1px solid var(--warn)",
          }}
        >
          <p style={{ margin: 0, color: "var(--warn)", lineHeight: "1.6", marginBottom: 8 }}>
            🔥 <strong>热更新能力：</strong>
          </p>
          <ul style={{ margin: 0, color: "var(--warn)", lineHeight: "1.8" }}>
            <li>运行时注册新插件</li>
            <li>动态卸载已有插件</li>
            <li>热替换插件配置</li>
            <li>实时生效，无需重新加载</li>
          </ul>
        </div>
      </div>

      {/* 当前激活的插件 */}
      <div style={{ marginBottom: 20 }}>
        <h3 style={{ fontSize: "1.1em", marginBottom: 12 }}>🔌 当前激活的插件</h3>
        <div style={{ display: "flex", gap: 8, flexWrap: "wrap" }}>
          {currentPlugins.map((name) => (
            <div
              key={name}
              style={{
                padding: "6px 12px",
                background: "var(--accent-wash)",
                borderRadius: "6px",
                fontSize: "0.9em",
                color: "var(--signal)",
                border: "1px solid var(--signal)",
              }}
            >
              {name}
            </div>
          ))}
          {currentPlugins.length === 0 && (
            <div style={{ color: "var(--text-2)", fontSize: "0.9em" }}>
              无激活插件
            </div>
          )}
        </div>
      </div>

      {/* 控制按钮 */}
      <div style={{ marginBottom: 30 }}>
        <h3 style={{ fontSize: "1.1em", marginBottom: 12 }}>🎮 热更新控制</h3>
        <div style={{ display: "flex", gap: 12, flexWrap: "wrap" }}>
          <button
            onClick={handleAddBadge}
            style={{
              padding: "10px 16px",
              background: "var(--ok)",
              color: "var(--text-inv)",
              border: "none",
              borderRadius: "6px",
              cursor: "pointer",
              fontSize: "0.9em",
            }}
          >
            ➕ 添加红色角标
          </button>
          <button
            onClick={handleRemoveBadge}
            style={{
              padding: "10px 16px",
              background: "var(--danger)",
              color: "var(--text-inv)",
              border: "none",
              borderRadius: "6px",
              cursor: "pointer",
              fontSize: "0.9em",
            }}
          >
            ➖ 移除角标插件
          </button>
          <button
            onClick={handleReplacePlugin}
            style={{
              padding: "10px 16px",
              background: "var(--warn)",
              color: "var(--text-inv)",
              border: "none",
              borderRadius: "6px",
              cursor: "pointer",
              fontSize: "0.9em",
            }}
          >
            🔄 替换为绿色角标
          </button>
          <button
            onClick={handleResetPlugins}
            style={{
              padding: "10px 16px",
              /*
               * 次级按钮用「深一档的面 + 浅字」，不要拿 --text-2 当底色：
               * 那是文字令牌（#bdb4a8），白字压上去只有 2.05:1。
               */
              background: "var(--surface-3)",
              color: "var(--text)",
              border: "1px solid var(--line-strong)",
              borderRadius: "6px",
              cursor: "pointer",
              fontSize: "0.9em",
            }}
          >
            🔁 重置所有插件
          </button>
        </div>
      </div>

      {/* 图片展示 */}
      <div style={{ marginBottom: 30 }}>
        <h3 style={{ fontSize: "1.1em", marginBottom: 12 }}>🖼️ 实时效果</h3>
        <div
          style={{
            display: "grid",
            gridTemplateColumns: "repeat(auto-fill, minmax(300px, 1fr))",
            gap: 16,
          }}
        >
          {Array.from({ length: 4 }, (_, i) => (
            <div key={\`\${imageKey}-\${i}\`} style={{ width: "100%", height: 200 }}>
              <ImageComponent
                src={\`https://picsum.photos/seed/hot-reload-\${i}/800/600\`}
                alt={\`热更新示例 \${i + 1}\`}
                loading="lazy"
                containerStyle={{
                  width: "100%",
                  height: "100%",
                  background: "var(--surface-2)",
                  borderRadius: "8px",
                }}
                imageStyle={{
                  width: "100%",
                  height: "100%",
                  objectFit: "cover",
                }}
              />
            </div>
          ))}
        </div>
      </div>

      {/* 操作日志 */}
      <div style={{ marginBottom: 20 }}>
        <h3 style={{ fontSize: "1.1em", marginBottom: 12 }}>📜 操作日志</h3>
        <div
          style={{
            padding: 16,
            background: "var(--text)",
            borderRadius: "8px",
            color: "var(--text-inv)",
            fontFamily: "monospace",
            fontSize: "0.85em",
            maxHeight: 250,
            overflow: "auto",
          }}
        >
          {logs.length === 0 ? (
            /* 面板是反色的（底 var(--text) / 字 var(--text-inv)）；
               空态也必须按反色给字，写 var(--text-2) 就是奶油压奶油（1.76:1） */
            <div style={{ color: "#6e6861" }}>等待操作...</div>
          ) : (
            logs.map((log, i) => (
              <div key={i} style={{ marginBottom: 4 }}>
                {log}
              </div>
            ))
          )}
        </div>
      </div>

      {/* API 使用示例 */}
      <div>
        <h3 style={{ fontSize: "1.1em", marginBottom: 12 }}>💻 API 使用示例</h3>
        <div
          style={{
            padding: 16,
            background: "var(--surface-2)",
            borderRadius: "8px",
            border: "1px solid var(--line)",
          }}
        >
          <pre style={{ margin: 0, fontSize: "0.85em", overflow: "auto" }}>
{\`import { createPluginManager, createBadgePlugin } from "vane-lazy-image";

// 创建插件管理器
const manager = createPluginManager();

// 注册插件（注意：插件名称通常是小写，如 "badge", "skeleton"）
const badge = createBadgePlugin({ text: "HOT" });
const success = manager.register(badge); // 返回 true/false

// 运行时添加新插件
const newBadge = createBadgePlugin({
  text: "NEW",
  bgColor: "var(--ok)"
});
manager.register(newBadge); // 热注册

// 卸载插件（使用正确的插件名称）
const removed = manager.unregister("badge"); // 返回 true/false

// 替换插件
manager.unregister("skeleton");
const replacement = createBadgePlugin({ text: "✨" });
manager.register(replacement); // 热替换

// 获取当前插件
const active = manager.getAllPlugins();\`}
          </pre>
        </div>
      </div>
    </DemoLayout>
  );
};

export default PluginHotReloadDemo;

`,i0=`import {
  LazyLoadImageCore,
  withPlugins,
} from "vane-lazy-image";
import React, { useMemo, useState } from "react";
import {
  SandboxConfig,
  wrapPluginHook,
} from "vane-lazy-image/advanced";

import { DemoLayout } from "../components/DemoLayout";

const PluginSandboxDemo: React.FC = () => {
  const [scenario, setScenario] = useState<"none" | "unsafe" | "safe">("none");
  const [logs, setLogs] = useState<string[]>([]);
  const [imageKey, setImageKey] = useState(0);

  const addLog = (message: string, type: "info" | "success" | "error" = "info") => {
    const emoji = type === "success" ? "✅" : type === "error" ? "❌" : "ℹ️";
    setLogs((prev) => [...prev.slice(-9), \`[\${new Date().toLocaleTimeString()}] \${emoji} \${message}\`]);
  };

  // 创建不安全插件 - 会抛出错误
  const unsafePlugin = useMemo(() => ({
    name: "UnsafePlugin",
    version: "1.0.0",
    hooks: {
      onLoadSuccess: (_context: any, displaySrc?: string) => {
        addLog("不安全插件: onLoadSuccess 被调用", "error");
        throw new Error("❌ 模拟插件错误：这是一个故意的错误！");
      },
    },
  }), []);

  // 创建安全插件 - 使用沙箱包装
  const safePlugin = useMemo(() => {
    const sandboxConfig: SandboxConfig = {
      pluginName: "SafePlugin",
      enabled: true,
      hookTimeout: 2000,
      autoCleanup: true,
      debug: true,
    };

    return {
      name: "SafePlugin",
      version: "1.0.0",
      hooks: {
        onLoadSuccess: wrapPluginHook(
          (_context: any, displaySrc?: string) => {
            addLog("安全插件: onLoadSuccess 被调用", "success");
            throw new Error("这个错误会被沙箱捕获");
          },
          sandboxConfig
        ),
      },
    };
  }, []);

  // 动态创建图片组件
  const ImageComponent = useMemo(() => {
    if (scenario === "none") {
      return withPlugins(LazyLoadImageCore, []);
    } else if (scenario === "unsafe") {
      return withPlugins(LazyLoadImageCore, [unsafePlugin]);
    } else {
      return withPlugins(LazyLoadImageCore, [safePlugin]);
    }
  }, [scenario, unsafePlugin, safePlugin]);

  const handleShowUnsafe = () => {
    setScenario("unsafe");
    setImageKey((prev) => prev + 1);
    addLog("加载不安全插件（会抛出错误）", "info");
  };

  const handleShowSafe = () => {
    setScenario("safe");
    setImageKey((prev) => prev + 1);
    addLog("加载沙箱保护的插件（安全）", "info");
  };

  const handleReset = () => {
    setScenario("none");
    setImageKey((prev) => prev + 1);
    setLogs([]);
    addLog("重置演示", "info");
  };

  return (
    <DemoLayout
      title="PluginSandbox - 插件沙箱机制"
      description="隔离插件执行环境，防止错误插件影响整个应用"
    >
      <div style={{ marginBottom: 20 }}>
        <div
          style={{
            padding: 16,
            background: "rgba(242, 104, 94, 0.10)",
            borderRadius: "8px",
            border: "1px solid var(--danger)",
          }}
        >
          <p style={{ margin: 0, color: "var(--danger)", lineHeight: "1.6", marginBottom: 8 }}>
            ⚠️ <strong>沙箱机制保护：</strong>
          </p>
          <ul style={{ margin: 0, color: "var(--danger)", lineHeight: "1.8" }}>
            <li>🛡️ 捕获插件内的错误和异常</li>
            <li>超时控制（防止死循环）</li>
            <li>🧹 自动清理资源和监听器</li>
            <li>📦 命名空间隔离（sharedData）</li>
          </ul>
        </div>
      </div>

      {/* 控制按钮 */}
      <div style={{ marginBottom: 30 }}>
        <h3 style={{ fontSize: "1.1em", marginBottom: 12 }}>🎮 测试场景</h3>
        <div style={{ display: "flex", gap: 12, flexWrap: "wrap" }}>
          <button
            onClick={handleShowUnsafe}
            disabled={scenario === "unsafe"}
            style={{
              padding: "10px 20px",
              /*
               * 语义色底一律配深墨字：--danger 是 #f2685e，白字 3.04:1；
               * 选中/未选中都要成对给色，不能只顾底色。--text-inv 上是 6.5:1。
               */
              background: scenario === "unsafe" ? "var(--surface-3)" : "var(--danger)",
              color: scenario === "unsafe" ? "var(--text)" : "var(--text-inv)",
              border: scenario === "unsafe" ? "1px solid var(--line-strong)" : "1px solid transparent",
              borderRadius: "6px",
              cursor: scenario === "unsafe" ? "not-allowed" : "pointer",
              fontSize: "0.95em",
            }}
          >
            ❌ 场景1: 不安全插件（会出错）
          </button>
          <button
            onClick={handleShowSafe}
            disabled={scenario === "safe"}
            style={{
              padding: "10px 20px",
              /* 同上：--ok #7fd08c 上的白字只有 1.86:1，深墨字是 10.6:1 */
              background: scenario === "safe" ? "var(--surface-3)" : "var(--ok)",
              color: scenario === "safe" ? "var(--text)" : "var(--text-inv)",
              border: scenario === "safe" ? "1px solid var(--line-strong)" : "1px solid transparent",
              borderRadius: "6px",
              cursor: scenario === "safe" ? "not-allowed" : "pointer",
              fontSize: "0.95em",
            }}
          >
            ✅ 场景2: 沙箱保护（安全）
          </button>
          <button
            onClick={handleReset}
            style={{
              padding: "10px 20px",
              /* 次级按钮：面 + 字成对，别拿 --text-2（文字令牌）当底色 */
              background: "var(--surface-3)",
              color: "var(--text)",
              border: "1px solid var(--line-strong)",
              borderRadius: "6px",
              cursor: "pointer",
              fontSize: "0.95em",
            }}
          >
            🔄 重置
          </button>
        </div>
      </div>

      {/* 当前场景说明 */}
      {scenario !== "none" && (
        <div style={{ marginBottom: 20 }}>
          <div
            style={{
              padding: 16,
              background: scenario === "unsafe" ? "rgba(242, 104, 94, 0.12)" : "rgba(127, 208, 140, 0.12)",
              borderRadius: "8px",
              border: \`1px solid \${scenario === "unsafe" ? "var(--danger)" : "var(--ok)"}\`,
            }}
          >
            <strong style={{ color: scenario === "unsafe" ? "var(--danger)" : "var(--ok)" }}>
              {scenario === "unsafe" ? "❌ 不安全插件场景" : "✅ 沙箱保护场景"}
            </strong>
            <p style={{ margin: "8px 0 0", color: scenario === "unsafe" ? "var(--danger)" : "var(--ok)" }}>
              {scenario === "unsafe"
                ? "此插件在 onLoadSuccess 中抛出错误，会导致应用崩溃。观察控制台的错误信息。"
                : "相同的错误逻辑，但被沙箱包装。错误被捕获，应用继续正常运行。"}
            </p>
          </div>
        </div>
      )}

      {/* 图片展示 */}
      <div style={{ marginBottom: 30 }}>
        <h3 style={{ fontSize: "1.1em", marginBottom: 12 }}>测试图片</h3>
        <p style={{ color: "var(--text-2)", marginBottom: 12 }}>
          {scenario === "none"
            ? "点击上方按钮选择测试场景"
            : "观察图片加载时的插件行为和错误处理"}
        </p>
        <div
          style={{
            display: "grid",
            gridTemplateColumns: "repeat(auto-fill, minmax(300px, 1fr))",
            gap: 16,
          }}
        >
          {Array.from({ length: 3 }, (_, i) => (
            <div key={\`\${imageKey}-\${scenario}-\${i}\`}>
              <div style={{ width: "100%", height: 200 }}>
                <ImageComponent
                  src={\`https://picsum.photos/seed/sandbox-\${scenario}-\${i}/800/600\`}
                  alt={\`沙箱测试 \${i + 1}\`}
                  loading="lazy"
                  containerStyle={{
                    width: "100%",
                    height: "100%",
                    background: "var(--surface-2)",
                    borderRadius: "8px",
                  }}
                  imageStyle={{
                    width: "100%",
                    height: "100%",
                    objectFit: "cover",
                  }}
                />
              </div>
              <p
                style={{
                  textAlign: "center",
                  marginTop: 8,
                  fontSize: "0.85em",
                  color: "var(--text-2)",
                }}
              >
                图片 {i + 1}
              </p>
            </div>
          ))}
        </div>
      </div>

      {/* 操作日志 */}
      <div style={{ marginBottom: 20 }}>
        <h3 style={{ fontSize: "1.1em", marginBottom: 12 }}>📜 操作日志</h3>
        <div
          style={{
            padding: 16,
            background: "var(--text)",
            borderRadius: "8px",
            color: "var(--text-inv)",
            fontFamily: "monospace",
            fontSize: "0.85em",
            maxHeight: 200,
            overflow: "auto",
          }}
        >
          {logs.length === 0 ? (
            /* 面板是反色的（底 var(--text) / 字 var(--text-inv)）；
               空态也必须按反色给字，写 var(--text-2) 就是奶油压奶油（1.76:1） */
            <div style={{ color: "#6e6861" }}>等待操作...</div>
          ) : (
            logs.map((log, i) => (
              <div key={i} style={{ marginBottom: 4 }}>
                {log}
              </div>
            ))
          )}
        </div>
      </div>

      {/* 配置示例 */}
      <div style={{ marginBottom: 20 }}>
        <h3 style={{ fontSize: "1.1em", marginBottom: 12 }}>📋 沙箱配置选项</h3>
        <div
          style={{
            padding: 16,
            background: "var(--surface-2)",
            borderRadius: "8px",
            border: "1px solid var(--line)",
          }}
        >
          <pre style={{ margin: 0, fontSize: "0.85em", overflow: "auto" }}>
{\`import { wrapPluginHook, SandboxConfig } from "vane-lazy-image";

const sandboxConfig: SandboxConfig = {
  pluginName: "MyPlugin",     // 插件名称（命名空间）
  enabled: true,              // 是否启用沙箱
  hookTimeout: 5000,          // 钩子超时时间（ms）
  autoCleanup: true,          // 自动清理监听器
  debug: true,                // 调试模式
};

// 包装不安全的钩子函数
const safeHook = wrapPluginHook(unsafeHook, sandboxConfig);

// 使用沙箱保护的插件
const safePlugin = {
  name: "SafePlugin",
  onLoadSuccess: safeHook,
};\`}
          </pre>
        </div>
      </div>

      {/* 使用建议 */}
      <div>
        <div
          style={{
            padding: 16,
            background: "var(--accent-wash)",
            borderRadius: "8px",
            border: "1px solid var(--signal)",
          }}
        >
          <p style={{ margin: 0, color: "var(--signal)", lineHeight: "1.6", marginBottom: 8 }}>
            💡 <strong>使用建议：</strong>
          </p>
          <ul style={{ margin: 0, color: "var(--signal)", lineHeight: "1.8" }}>
            <li>对第三方插件使用沙箱包装</li>
            <li>在开发环境启用 debug 模式</li>
            <li>根据插件复杂度调整超时时间</li>
            <li>使用命名空间避免数据冲突</li>
            <li>查看浏览器控制台获取详细日志</li>
          </ul>
        </div>
      </div>
    </DemoLayout>
  );
};

export default PluginSandboxDemo;
`,s0=`import * as ReactWindow from "react-window";

import {
  LazyLoadImageCore,
  createConcurrencyControlPlugin,
  createEventLoggerPlugin,
  createFetchLoaderPlugin,
  createIDBCachePlugin,
  createMemoryCachePlugin,
  createOverlayInfoPlugin,
  createPreconnectPlugin,
  createProgressOverlayPlugin,
  createScrollIdlePlugin,
  createSkeletonPlugin,
  createViewportDwellPlugin,
  withPlugins,
} from "vane-lazy-image";

import { DemoLayout } from "../components/DemoLayout";
import React from "react";

const LazyImage = withPlugins(LazyLoadImageCore as any, [
  createMemoryCachePlugin({ maxEntries: 300, ttlMs: 60 * 60 * 1000 }),
  createIDBCachePlugin({ ttlMs: 7 * 24 * 60 * 60 * 1000 }),
  // 双向网格滚动：容器级监听 + 双向轴向标注
  createScrollIdlePlugin({
    idleMs: 160,
    maxWaitMs: 1200,
    onlyWhenIntersecting: true,
    target: "container",
    axis: "both",
  }),
  // 视口驻留阈值：网格场景下避免短暂露出就发起请求
  createViewportDwellPlugin({
    dwellMs: 140,
    maxWaitMs: 900,
    onlyWhenIntersecting: true,
  }),
  // 并发闸控，避免停顿后瞬时触发过多请求
  createConcurrencyControlPlugin({ maxConcurrent: 6 }),
  createFetchLoaderPlugin({ enabled: true }),
  createProgressOverlayPlugin({
    showWhen: "loading",
    height: 3,
    color: "#2196f3",
    showPercentText: true,
  }),
  createSkeletonPlugin({
    type: "shimmer",
    showWhen: "loading",
    borderRadius: 6,
    zIndex: 1,
  }),
  createOverlayInfoPlugin({
    content: (ctx) =>
      \`Grid • \${new URL(ctx.src, window.location.origin).pathname}\`,
    position: "bottom",
    background: "rgba(0,0,0,0.35)",
    color: "#fff",
    showWhen: "loading",
    zIndex: 4,
  }),
  createPreconnectPlugin({ domains: ["https://picsum.photos"] }),
  createEventLoggerPlugin({ enabled: true, prefix: "[GRID-Demo]" }),
]);

const RW = ReactWindow as any;
const GridNew = RW.Grid;
const GridOld = RW.FixedSizeGrid;

export default function VirtualGridDemo() {
  const gridOuterRef = React.useRef<HTMLDivElement | null>(null);
  const gridRef = React.useRef<any>(null);
  const [rootEl, setRootEl] = React.useState<HTMLElement | undefined>(
    undefined
  );
  const cols = 4;
  const rows = 60;
  const [items] = React.useState(
    Array.from({ length: cols * rows }).map((_, i) => ({
      id: i,
      src: \`https://picsum.photos/seed/virt-g-\${i}/800/600\`,
    }))
  );

  React.useEffect(() => {
    const api = gridRef.current;
    if (api) {
      const el =
        api?.getElement?.() ||
        api?.getOuterElement?.() ||
        api?.getRootElement?.() ||
        api?._outerRef?.current ||
        api?._outerElement;
      if (el instanceof HTMLElement) setRootEl(el);
    }
  }, []);

  const Cell = ({
    columnIndex,
    rowIndex,
    style,
  }: {
    columnIndex: number;
    rowIndex: number;
    style: React.CSSProperties;
  }) => {
    const idx = rowIndex * cols + columnIndex;
    const item = items[idx];
    return (
      <div style={{ ...style, padding: 8 }}>
        <div
          style={{
            position: "relative",
            width: "100%",
            height: "100%",
            borderRadius: 8,
            overflow: "hidden",
            boxShadow: "0 1px 6px rgba(0,0,0,0.1)",
          }}
        >
          <LazyImage
            src={item.src}
            loading="lazy"
            root={rootEl || gridOuterRef.current || undefined}
            rootMargin="240px"
            containerStyle={{ width: "100%", height: "100%" }}
            imageStyle={{ width: "100%", height: "100%", objectFit: "cover" }}
          />
        </div>
      </div>
    );
  };

  return (
    <DemoLayout
      title="LazyLoadImagePlugin • 双向网格虚拟滚动示例（react-window）"
      description="结合 react-window 的双向网格虚拟滚动，优化大量图片加载性能"
    >
      <div
        style={{
          border: "1px solid #eee",
          borderRadius: 8,
          overflow: "hidden",
        }}
      >
        {GridNew ? (
          <GridNew
            cellComponent={({
              columnIndex,
              rowIndex,
              style,
            }: {
              columnIndex: number;
              rowIndex: number;
              style: React.CSSProperties;
            }) => (
              <Cell
                columnIndex={columnIndex}
                rowIndex={rowIndex}
                style={style}
              />
            )}
            columnCount={cols}
            columnWidth={240}
            rowCount={rows}
            rowHeight={200}
            gridRef={gridRef}
            cellProps={{ items, cols, rows }}
            style={{ height: 640, width: 960 }}
          />
        ) : (
          <GridOld
            height={640}
            width={960}
            columnCount={cols}
            columnWidth={240}
            rowCount={rows}
            rowHeight={200}
            outerRef={gridOuterRef}
            overscanColumnsCount={2}
            overscanRowsCount={4}
          >
            {Cell as any}
          </GridOld>
        )}
      </div>
    </DemoLayout>
  );
}
`,a0=`import * as ReactWindow from "react-window";

import {
  LazyLoadImageCore,
  createConcurrencyControlPlugin,
  createEventLoggerPlugin,
  createFetchLoaderPlugin,
  createIDBCachePlugin,
  createMemoryCachePlugin,
  createOverlayInfoPlugin,
  createPreconnectPlugin,
  createProgressOverlayPlugin,
  createScrollIdlePlugin,
  createSkeletonPlugin,
  createViewportDwellPlugin,
  withPlugins,
} from "vane-lazy-image";

import { DemoLayout } from "../components/DemoLayout";
import React from "react";

const LazyImage = withPlugins(LazyLoadImageCore as any, [
  createMemoryCachePlugin({ maxEntries: 300, ttlMs: 60 * 60 * 1000 }),
  createIDBCachePlugin({ ttlMs: 7 * 24 * 60 * 60 * 1000 }),
  // 容器级滚动空闲：水平滚动场景
  createScrollIdlePlugin({
    idleMs: 160,
    maxWaitMs: 1200,
    onlyWhenIntersecting: true,
    target: "container",
    axis: "horizontal",
  }),
  // 视口驻留阈值：快速水平滚动时仅加载停留足够的项
  createViewportDwellPlugin({
    dwellMs: 160,
    maxWaitMs: 1000,
    onlyWhenIntersecting: true,
  }),
  // 并发闸控，避免停顿后瞬时触发过多请求
  createConcurrencyControlPlugin({ maxConcurrent: 6 }),
  createFetchLoaderPlugin({ enabled: true }),
  createProgressOverlayPlugin({
    showWhen: "loading",
    height: 3,
    color: "#4caf50",
    showPercentText: true,
  }),
  createSkeletonPlugin({
    type: "shimmer",
    showWhen: "loading",
    borderRadius: 6,
    zIndex: 1,
  }),
  createOverlayInfoPlugin({
    content: (ctx) =>
      \`Horizontal • \${new URL(ctx.src, window.location.origin).pathname}\`,
    position: "bottom",
    background: "rgba(0,0,0,0.35)",
    color: "#fff",
    showWhen: "loading",
    zIndex: 4,
  }),
  createPreconnectPlugin({ domains: ["https://picsum.photos"] }),
  createEventLoggerPlugin({ enabled: true, prefix: "[HL-Demo]" }),
]);

const RW = ReactWindow as any;
const GridNew = RW.Grid;
const ListOld = RW.FixedSizeList;

export default function VirtualHorizontalListDemo() {
  const listOuterRef = React.useRef<HTMLDivElement | null>(null);
  const gridRef = React.useRef<any>(null);
  const [rootEl, setRootEl] = React.useState<HTMLElement | undefined>(
    undefined
  );
  const [items] = React.useState(
    Array.from({ length: 180 }).map((_, i) => ({
      id: i,
      src: \`https://picsum.photos/seed/virt-h-\${i}/800/600\`,
    }))
  );

  React.useEffect(() => {
    const api = gridRef.current;
    if (api) {
      const el =
        api?.getElement?.() ||
        api?.getOuterElement?.() ||
        api?.getRootElement?.() ||
        api?._outerRef?.current ||
        api?._outerElement;
      if (el instanceof HTMLElement) setRootEl(el);
    }
  }, []);

  const Cell = ({
    index,
    style,
  }: {
    index: number;
    style: React.CSSProperties;
  }) => {
    const item = items[index];
    return (
      <div style={{ ...style, padding: 8 }}>
        <div
          style={{
            position: "relative",
            width: 240,
            height: 160,
            borderRadius: 8,
            overflow: "hidden",
            boxShadow: "0 1px 6px rgba(0,0,0,0.1)",
          }}
        >
          <LazyImage
            src={item.src}
            loading="lazy"
            root={rootEl || listOuterRef.current || undefined}
            rootMargin="240px"
            containerStyle={{ width: "100%", height: "100%" }}
            imageStyle={{ width: "100%", height: "100%", objectFit: "cover" }}
          />
        </div>
      </div>
    );
  };

  return (
    <DemoLayout
      title="LazyLoadImagePlugin • 水平虚拟列表示例（react-window）"
      description="结合 react-window 的水平虚拟列表，优化横向滚动图片加载"
    >
      <div
        style={{
          border: "1px solid #eee",
          borderRadius: 8,
          overflow: "hidden",
        }}
      >
        {GridNew ? (
          <GridNew
            cellComponent={({
              columnIndex,
              style,
            }: {
              columnIndex: number;
              style: React.CSSProperties;
            }) => <Cell index={columnIndex} style={style} />}
            columnCount={items.length}
            columnWidth={256}
            rowCount={1}
            rowHeight={220}
            gridRef={gridRef}
            cellProps={{ items }}
            style={{ height: 220, width: 960 }}
          />
        ) : (
          <ListOld
            height={220}
            width={960}
            itemCount={items.length}
            itemSize={256}
            layout="horizontal"
            outerRef={listOuterRef}
            overscanCount={8}
          >
            {Cell as any}
          </ListOld>
        )}
      </div>
    </DemoLayout>
  );
}
`,l0=`import * as ReactWindow from "react-window";

import {
  LazyLoadImageCore,
  createConcurrencyControlPlugin,
  createEventLoggerPlugin,
  createFetchLoaderPlugin,
  createIDBCachePlugin,
  createMemoryCachePlugin,
  createOverlayInfoPlugin,
  createPreconnectPlugin,
  createProgressOverlayPlugin,
  createScrollIdlePlugin,
  createSkeletonPlugin,
  createViewportDwellPlugin,
  withPlugins,
} from "vane-lazy-image";

import { DemoLayout } from "../components/DemoLayout";
import React from "react";

const LazyImage = withPlugins(LazyLoadImageCore as any, [
  createMemoryCachePlugin({ maxEntries: 300, ttlMs: 60 * 60 * 1000 }),
  createIDBCachePlugin({ ttlMs: 7 * 24 * 60 * 60 * 1000 }),
  // 容器级滚动空闲：结合 react-window 的外层容器作为 root
  // 提高滚动空闲等待，降低瞬时触发频率
  createScrollIdlePlugin({
    idleMs: 280,
    maxWaitMs: 1000,
    onlyWhenIntersecting: true,
    target: "container",
    axis: "vertical",
  }),
  // 视口驻留阈值：仅在停留超过阈值后加载，避免快速滚动命中
  createViewportDwellPlugin({
    dwellMs: 180,
    maxWaitMs: 1000,
    onlyWhenIntersecting: true,
  }),
  // 并发闸控，避免停顿后瞬时触发过多请求
  createConcurrencyControlPlugin({ maxConcurrent: 4 }),
  createFetchLoaderPlugin({ enabled: true }),
  createProgressOverlayPlugin({
    showWhen: "loading",
    height: 3,
    color: "#ff7f50",
    showPercentText: true,
  }),
  createSkeletonPlugin({
    type: "shimmer",
    showWhen: "loading",
    borderRadius: 6,
    zIndex: 1,
  }),
  createOverlayInfoPlugin({
    content: (ctx) =>
      \`VirtualList • \${new URL(ctx.src, window.location.origin).pathname}\`,
    position: "bottom",
    background: "rgba(0,0,0,0.35)",
    color: "#fff",
    showWhen: "loading",
    zIndex: 4,
  }),
  createPreconnectPlugin({ domains: ["https://picsum.photos"] }),
  createEventLoggerPlugin({ enabled: true, prefix: "[VL-Demo]" }),
]);

const RW = ReactWindow as any;
const ListNew = RW.List;
const ListOld = RW.FixedSizeList;

export default function VirtualVerticalListDemo() {
  const listOuterRef = React.useRef<HTMLDivElement | null>(null);
  const listRef = React.useRef<any>(null);
  const [rootEl, setRootEl] = React.useState<HTMLElement | undefined>(
    undefined
  );
  const [items] = React.useState(
    Array.from({ length: 300 }).map((_, i) => ({
      id: i,
      src: \`https://picsum.photos/seed/virt-v-\${i}/800/600\`,
    }))
  );

  React.useEffect(() => {
    const api = listRef.current;
    if (api) {
      const el =
        api?.getElement?.() ||
        api?.getOuterElement?.() ||
        api?.getRootElement?.() ||
        api?._outerRef?.current ||
        api?._outerElement;
      if (el instanceof HTMLElement) setRootEl(el);
    }
  }, []);

  const RowComponent = ({
    index,
    style,
  }: {
    index: number;
    style: React.CSSProperties;
  }) => {
    const item = items[index];
    return (
      <div style={{ ...style, padding: 8 }}>
        <div
          style={{
            position: "relative",
            width: "100%",
            height: 184,
            borderRadius: 8,
            overflow: "hidden",
            boxShadow: "0 1px 6px rgba(0,0,0,0.1)",
          }}
        >
          <LazyImage
            src={item.src}
            loading="lazy"
            root={rootEl || listOuterRef.current || undefined}
            rootMargin="240px"
            containerStyle={{ width: "100%", height: "100%" }}
            imageStyle={{ width: "100%", height: "100%", objectFit: "cover" }}
          />
        </div>
      </div>
    );
  };

  return (
    <DemoLayout
      title="LazyLoadImagePlugin • 垂直虚拟列表示例（react-window）"
      description="结合 react-window 的垂直虚拟列表，优化长列表图片加载"
    >
      <div
        style={{
          border: "1px solid #eee",
          borderRadius: 8,
          overflow: "hidden",
        }}
      >
        {ListNew ? (
          <ListNew
            rowComponent={RowComponent as any}
            rowCount={items.length}
            rowHeight={200}
            rowProps={{ items }}
            listRef={listRef}
            // 降低预渲染数量，减少离屏并发加载
            overscanCount={3}
            style={{ height: 640, width: 960 }}
          />
        ) : (
          <ListOld
            height={640}
            width={960}
            itemCount={items.length}
            itemSize={200}
            outerRef={listOuterRef}
            overscanCount={3}
          >
            {RowComponent as any}
          </ListOld>
        )}
      </div>
    </DemoLayout>
  );
}
`,c0="A11yPlugin",u0="无障碍支持：将装饰性图片设为 aria-hidden、自定义 aria-label、注入 role=img 与 aria-busy，并通过 aria-live 区域播报加载状态，提升读屏可用性。",d0="2.0.0",p0=["a11y","可访问性","SEO"],m0=[{name:"onMount",when:"组件挂载完成、插件注册后执行一次（返回的清理函数在 manager.clear 时逆序执行）",description:"初始化副作用：注册监听、起定时器、建观察器；必须返回清理函数或配合 onUnmount 收尾"},{name:"renderOverlay",when:"每次渲染，覆盖在图片容器之上",description:"骨架屏、错误占位、水印、加载动画"}],g0=[],f0="只读取 context 字段（props / state / data），不调用上下文方法",h0=[{name:"enabled",type:"boolean",default:"true",description:"是否启用无障碍增强"},{name:"decorative",type:"boolean",default:"false",description:"标记为装饰性图片（aria-hidden=true 并清空 alt）"},{name:"ariaLabel",type:"string | ((ctx) => string)",default:"undefined",description:"自定义 aria-label（函数型，参见用法示例）"},{name:"statusText",type:"{ loading?; loaded?; error? }",default:"undefined",description:"视觉隐藏的状态播报文本"}],y0=`const A11yImage = withPlugins(LazyLoadImageCore, [
  createA11yPlugin({
    ariaLabel: (ctx) => \`商品主图 \${ctx.src}\`,
    statusText: { loading: "加载中…", loaded: "已加载", error: "加载失败" },
  }),
]);

// 装饰性图片也可直接跳过读屏
<A11yImage src="https://picsum.photos/id/1015/500/300" alt="" />;`,v0=[{name:"装饰性图片",description:"decorative=true 时清空 alt 并设 aria-hidden，读屏跳过。",src:"https://picsum.photos/id/1015/500/300",config:{decorative:!0}},{name:"自定义 aria-label（字符串）",description:"为图片设置区别于 alt 的 aria-label。",src:"https://picsum.photos/id/1021/500/300",config:{ariaLabel:"商品主图"}},{name:"加载状态播报",description:"视觉隐藏区域以 aria-live 播报加载中/完成/失败。",src:"https://picsum.photos/id/1026/500/300",config:{statusText:{loading:"加载中…",loaded:"已加载",error:"加载失败"}}}],w0=["装饰性图片 aria-hidden","自定义 aria-label（字符串或函数）","role=img 明确语义","aria-busy 随加载态切换","aria-live 状态播报（视觉隐藏）","可关闭"],x0=["无障碍合规（WCAG）","读屏器适配","装饰性背景图","加载状态可读"],b0=["ariaLabel 支持函数型，但静态预览仅支持字符串；函数用法见用法示例。"],P0={name:c0,description:u0,since:d0,tags:p0,events:m0,methods:g0,methodsNote:f0,config:h0,example:y0,examples:v0,features:w0,useCases:x0,notes:b0},$0="AdaptiveQualityPlugin",S0="自适应画质：根据网络类型（effectiveType）与省流模式（saveData）动态调整图片质量参数，弱网/省流自动降质，支持 realtime 实时监听。",C0="2.0.0",L0=["other","网络","性能","省流量"],k0=[{name:"onMount",when:"组件挂载完成、插件注册后执行一次（返回的清理函数在 manager.clear 时逆序执行）",description:"初始化副作用：注册监听、起定时器、建观察器；必须返回清理函数或配合 onUnmount 收尾"},{name:"transformProps",when:"渲染前链式改写图片 props",description:"补 sizes / 占位色 / 解码策略等"}],I0=[],_0="只读取 context 字段（props / state / data），不调用上下文方法",E0=[{name:"lowQ",type:"number",default:"40(2g/3g)",description:"低速网络质量值(1~100)"},{name:"highQ",type:"number",default:"80(4g)",description:"高速网络质量值(1~100)"},{name:"saveDataQuality",type:"number",default:"35",description:"省流模式质量值(1~100)"},{name:"overrideEffectiveType",type:'"4g" | "3g" | "2g" | "slow-2g"',default:"undefined",description:"Demo/测试覆盖网络类型"},{name:"overrideSaveData",type:"boolean",default:"undefined",description:"Demo/测试覆盖省流开关"},{name:"mode",type:'"once" | "realtime"',default:'"once"',description:"once 仅初始一次 / realtime 监听变化"}],R0=`const AqImage = withPlugins(LazyLoadImageCore, [
  createAdaptiveQualityPlugin({ lowQ: 45, highQ: 85, mode: "realtime" }),
]);

<AqImage src="https://picsum.photos/id/1015/500/300" alt="自适应画质示例" />;`,z0=[{name:"默认一次性调速",description:"初始按网络设置质量，加载一次。",src:"https://picsum.photos/id/1015/500/300",config:{mode:"once"}},{name:"实时监听网络",description:"mode=realtime，网络变化时自动重新计算质量。",src:"https://picsum.photos/id/1021/500/300",config:{mode:"realtime"}},{name:"模拟弱网降质",description:"overrideEffectiveType=2g，演示低速下自动降质。",src:"https://picsum.photos/id/1026/500/300",config:{overrideEffectiveType:"2g",overrideSaveData:!0}}],D0=["按网络类型调速","省流模式降质","realtime 实时监听","手动覆盖（Demo）","质量参数可配"],O0=["弱网体验优化","流量节省","全球 CDN 适配","移动端画质策略"],j0=["overrideEffectiveType / overrideSaveData 仅用于 Demo 测试覆盖真实网络信息；质量参数通过 URL ?q= 注入，适用于支持该参数的图床。"],M0={name:$0,description:S0,since:C0,tags:L0,events:k0,methods:I0,methodsNote:_0,config:E0,example:R0,examples:z0,features:D0,useCases:O0,notes:j0},T0="AltTextPlugin",N0="替代文本：当图片未提供 alt 时，按前缀或自定义 derive 函数自动生成 alt，提升可访问性与 SEO；已有 alt 则不覆盖。",A0="2.0.0",B0=["a11y","可访问性","SEO"],U0=[{name:"transformProps",when:"渲染前链式改写图片 props",description:"补 sizes / 占位色 / 解码策略等"}],F0=[],W0="只读取 context 字段（props / state / data），不调用上下文方法",V0=[{name:"derive",type:"(src: string) => string",default:"undefined",description:"自定义推导函数（函数型，参见用法示例）"},{name:"prefix",type:"string",default:'"Image"',description:'默认推导前缀（如 "Image"）'}],H0=`const AltImage = withPlugins(LazyLoadImageCore, [
  createAltTextPlugin({
    derive: (src) => \`图片 \${new URL(src).pathname}\`,
  }),
]);

// 不传 alt 时自动补全；传了 alt 则不覆盖
<AltImage src="https://picsum.photos/id/1015/500/300" alt="" />;`,G0=[{name:"默认前缀派生",description:"不传 alt，按 prefix 自动生成 alt。",src:"https://picsum.photos/id/1015/500/300",config:{prefix:"产品图"}},{name:"已有 alt 不覆盖",description:"传入 alt 时插件保留原值，不做替换。",src:"https://picsum.photos/id/1021/500/300",config:{prefix:"Image"}}],q0=["alt 缺失自动派生","自定义前缀","自定义 derive 函数","不覆盖已有 alt"],Q0=["批量图片 alt 补全","SEO 优化","读屏适配","用户未填 alt 兜底"],K0=["derive 为函数型配置，静态预览仅支持 prefix；函数用法见用法示例。"],Y0={name:T0,description:N0,since:A0,tags:B0,events:U0,methods:F0,methodsNote:W0,config:V0,example:H0,examples:G0,features:q0,useCases:Q0,notes:K0},X0="AnimatedCursorPlugin",Z0="自定义光标动画：为图片叠加系统光标（放大镜/十字/抓手等）或自定义光标（圆点/圆环/加号）+ 跟随动画 + 点击涟漪 + 文字提示，纯 CSS+JS 无依赖。",J0="2.0.0",ey=["interaction","视觉效果与交互","visual"],ty=[{name:"renderOverlay",when:"每次渲染，覆盖在图片容器之上",description:"骨架屏、错误占位、水印、加载动画"}],ny=[],oy="只读取 context 字段（props / state / data），不调用上下文方法",ry=[{name:"style",type:'"zoom-in" | "zoom-out" | "pointer" | "crosshair" | "move" | "grab" | "custom-dot" | "custom-ring" | "custom-plus" | "none"',default:'"zoom-in"',description:"光标样式"},{name:"enableFollower",type:"boolean",default:"true",description:"是否启用跟随光标"},{name:"followerColor",type:"string",default:'"rgba(59, 130, 246, 0.5)"',description:"跟随光标颜色"},{name:"followerSize",type:"number",default:"40",description:"跟随光标大小（px）"},{name:"followerDelay",type:"number",default:"0.1",description:"跟随延迟系数（越大越跟手）"},{name:"scaleOnHover",type:"boolean",default:"true",description:"悬停时跟随光标缩放"},{name:"hoverScale",type:"number",default:"1.5",description:"悬停缩放比例"},{name:"customIcon",type:"string",default:'""',description:"自定义光标图标 URL"},{name:"cursorText",type:"string",default:'""',description:"光标附带文字"},{name:"showRipple",type:"boolean",default:"false",description:"点击时产生涟漪"}],iy=`// 1. 放大镜光标 + 蓝色跟随圆点
const CursorImage = withPlugins(LazyLoadImageCore, [
  createAnimatedCursorPlugin({ style: "zoom-in", followerColor: "rgba(59,130,246,0.5)" }),
]);

// 2. 在商品图中使用
<CursorImage
  src="https://picsum.photos/id/110/400/300"
  alt="商品"
  style={{ width: 240, height: 160, borderRadius: 8 }}
/>;

// 3. 自定义圆点 + 点击涟漪 + 文字提示
createAnimatedCursorPlugin({
  style: "custom-dot",
  showRipple: true,
  cursorText: "查看大图",
  followerSize: 48,
});`,sy=[{name:"zoom-in 放大镜 + 跟随圆点",description:"系统放大镜光标，叠加半透明蓝色跟随圆点，暗示可放大查看。",src:"https://picsum.photos/id/110/400/300",config:{style:"zoom-in",enableFollower:!0,followerColor:"rgba(59,130,246,0.5)",followerSize:40}},{name:"custom-dot 自定义圆点 + 点击涟漪",description:"自定义圆点跟随光标，点击产生涟漪动画，互动感强。",src:"https://picsum.photos/id/119/400/300",config:{style:"custom-dot",showRipple:!0,followerSize:44,followerColor:"rgba(255,99,132,0.5)"}},{name:"custom-ring 圆环 + 文字提示",description:"圆环跟随光标并附带文字提示，适合“查看大图”引导。",src:"https://picsum.photos/id/122/400/300",config:{style:"custom-ring",cursorText:"查看大图",followerSize:56,followerColor:"rgba(16,185,129,0.6)"}},{name:"crosshair 十字光标",description:"十字准星光标，适合素材 / 设计类站点定位。",src:"https://picsum.photos/id/129/400/300",config:{style:"crosshair",enableFollower:!0,followerSize:36}},{name:"custom-plus 加号光标",description:"加号光标，强调“可添加 / 收藏”等操作。",src:"https://picsum.photos/id/133/400/300",config:{style:"custom-plus",enableFollower:!0,followerSize:40,scaleOnHover:!0}}],ay=["10 种光标样式（系统光标 + 自定义圆点 / 圆环 / 加号）","跟随光标：颜色、大小、延迟系数可调","悬停时跟随光标缩放","点击涟漪动画","可附带文字提示","支持自定义图标 URL","纯 CSS + 轻量 JS，无依赖"],ly=["商品详情放大预览","画廊 / 素材站点","设计工具类页面","交互演示与引导","收藏 / 添加操作的视觉暗示","创意作品集"],cy=["效果需鼠标在图片上移动 / 悬停 / 点击才会体现，静态截图仅展示初始态。","移动端无指针设备，建议配合触摸反馈降级，或仅保留 enableFollower 等轻效果。"],uy={name:X0,description:Z0,since:J0,tags:ey,events:ty,methods:ny,methodsNote:oy,config:ry,example:iy,examples:sy,features:ay,useCases:ly,notes:cy},dy="AntiHotlinkPlugin",py="防盗链：为图片 URL 追加动态签名 token 或 referer 标记，配合域名白名单与 referer 校验，防止资源被第三方直链盗用。",my="2.0.0",gy=["network","网络","防盗链","签名"],fy=[{name:"transformProps",when:"渲染前链式改写图片 props",description:"补 sizes / 占位色 / 解码策略等"}],hy=[],yy="只读取 context 字段（props / state / data），不调用上下文方法",vy=[{name:"allowedDomains",type:"string[]",description:"域名白名单；仅放行列表内域，其余源原样通过"},{name:"checkReferer",type:"boolean",default:"false",description:"无 referrer 时附加 ref=direct 标记（仅浏览器环境有效）"},{name:"generateToken",type:"(src: string) => string | undefined",description:"为 URL 生成签名 token（函数型，仅顶层示例展示）"},{name:"tokenParam",type:"string",default:'"token"',description:"追加到查询参数的键名"}],wy=`import { LazyLoadImageCore, createAntiHotlinkPlugin, withPlugins } from "vane-lazy-image";

const LazyImage = withPlugins(LazyLoadImageCore, [
  createAntiHotlinkPlugin({
    generateToken: (src) => signSrc(src),
    tokenParam: "sig",
    allowedDomains: ["images.example.com"],
  }),
]);

<LazyImage src="https://images.example.com/photo.jpg" alt="防盗链示例" />`,xy=[{name:"白名单 + referer 校验",description:"仅放行 picsum.photos；无 referer 时附加 ref=direct 标记。",src:"https://picsum.photos/seed/hotlink/800/600",config:{allowedDomains:["picsum.photos"],checkReferer:!0}},{name:"仅域名白名单放行",description:"命中白名单则原样通过，否则不注入任何参数。",src:"https://picsum.photos/seed/hotlink-2/800/600",config:{allowedDomains:["picsum.photos"]}}],by=["generateToken 为 URL 追加签名参数，防直链盗用","allowedDomains 白名单：仅放行指定域，其余原样通过","checkReferer：无 referrer 时附加 ref=direct 标记","通用参数追加兜底（无 URL 对象时拼接 query）"],Py=["OSS / 云存储等需签名才能访问的图片","限制仅本站 referer 可加载"],$y=["generateToken 为函数型，无法进入静态预览配置，仅顶层示例展示","allowedDomains 为空时对所有源注入 token","checkReferer 仅在浏览器环境有效"],Sy={name:dy,description:py,since:my,tags:gy,events:fy,methods:hy,methodsNote:yy,config:vy,example:wy,examples:xy,features:by,useCases:Py,notes:$y},Cy="AspectRatioSpacerPlugin",Ly="宽高比占位：在容器上预留固定宽高比，图片加载前后保持布局稳定，杜绝 CLS（布局抖动）。",ky="2.0.0",Iy=["a11y","可访问性","视觉"],_y=[{name:"onMount",when:"组件挂载完成、插件注册后执行一次（返回的清理函数在 manager.clear 时逆序执行）",description:"初始化副作用：注册监听、起定时器、建观察器；必须返回清理函数或配合 onUnmount 收尾"},{name:"transformProps",when:"渲染前链式改写图片 props",description:"补 sizes / 占位色 / 解码策略等"}],Ey=[],Ry="只读取 context 字段（props / state / data），不调用上下文方法",zy=[{name:"ratio",type:"number",default:"4/3",description:"宽/高比，如 4/3、16/9，或直接传数字"}],Dy=`const RatioImage = withPlugins(LazyLoadImageCore, [
  createAspectRatioSpacerPlugin({ ratio: 4 / 3 }),
]);

<RatioImage src="https://picsum.photos/id/1015/500/300" alt="宽高比占位示例" />;`,Oy=[{name:"4:3 占位",description:"常见图文比例，加载前后无跳动。",src:"https://picsum.photos/id/1015/500/300",config:{ratio:1.3333}},{name:"16:9 占位",description:"视频/横幅比例。",src:"https://picsum.photos/id/1021/500/300",config:{ratio:1.7778}},{name:"正方形占位",description:"ratio=1，头像/方形卡片。",src:"https://picsum.photos/id/1026/500/300",config:{ratio:1}}],jy=["预留宽高比","基于 CSS aspect-ratio","防布局抖动（CLS）","任意比例"],My=["瀑布流/列表占位","LCP 稳定","移动端响应式","避免滚动跳动"],Ty=["ratio 在静态预览中建议传数字（如 1.3333 表示 4/3），便于配置表与查看源码展示。"],Ny={name:Cy,description:Ly,since:ky,tags:Iy,events:_y,methods:Ey,methodsNote:Ry,config:zy,example:Dy,examples:Oy,features:jy,useCases:My,notes:Ty},Ay="AuthPlugin",By="鉴权：为私有图片 URL 追加访问凭证 token（查询参数），并可配置 crossOrigin 与 referrerPolicy，满足需登录态才能访问的图片源鉴权需求。",Uy="2.0.0",Fy=["network","网络","鉴权","私有资源"],Wy=[{name:"transformProps",when:"渲染前链式改写图片 props",description:"补 sizes / 占位色 / 解码策略等"}],Vy=[],Hy="只读取 context 字段（props / state / data），不调用上下文方法",Gy=[{name:"token",type:"string | (() => string | undefined)",description:"访问凭证；支持函数动态获取（函数型仅顶层示例展示）"},{name:"tokenParam",type:"string",description:"追加到查询参数的键名"},{name:"crossOrigin",type:'"anonymous" | "use-credentials"',description:"img 的 crossOrigin 属性"},{name:"referrerPolicy",type:"React.HTMLAttributeReferrerPolicy",description:"img 的 referrerPolicy 属性"}],qy=`import { LazyLoadImageCore, createAuthPlugin, withPlugins } from "vane-lazy-image";

const LazyImage = withPlugins(LazyLoadImageCore, [
  createAuthPlugin({
    token: () => getAccessToken(),
    tokenParam: "token",
    crossOrigin: "anonymous",
  }),
]);

<LazyImage src="https://private.example.com/photo.jpg" alt="鉴权示例" />`,Qy=[{name:"静态 token",description:"为图片 URL 追加固定访问凭证参数。",src:"https://picsum.photos/seed/auth/800/600",config:{token:"sk-demo-123",tokenParam:"token"}},{name:"跨域 + 无 referrer",description:"追加凭证的同时配置跨域与 referrer 策略。",src:"https://picsum.photos/seed/auth-2/800/600",config:{token:"sk-demo-123",crossOrigin:"anonymous",referrerPolicy:"no-referrer"}}],Ky=["为图片 URL 追加 token 查询参数完成鉴权","支持 crossOrigin / referrerPolicy 跨域鉴权配置","token 支持函数动态获取（如刷新令牌）"],Yy=["需登录态才能访问的私有图片 / 云存储","带鉴权的用户头像 / 相册"],Xy=["token 函数型仅顶层示例展示；静态字符串可直接用于静态预览","与 AntiHotlink 区别：Auth 注入访问凭证，AntiHotlink 注入防盗链签名，二者可叠加","tokenParam 已存在则不重复追加"],Zy={name:Ay,description:By,since:Uy,tags:Fy,events:Wy,methods:Vy,methodsNote:Hy,config:Gy,example:qy,examples:Qy,features:Ky,useCases:Yy,notes:Xy},Jy="BadgePlugin",ev="角标徽章：在图片四角或中心叠加文字徽章，可按加载状态（always/loading/loaded/error）显示，支持自定义文字、颜色、字号与形状。",tv="2.0.0",nv=["other","视觉","徽标"],ov=[{name:"renderOverlay",when:"每次渲染，覆盖在图片容器之上",description:"骨架屏、错误占位、水印、加载动画"}],rv=[],iv="只读取 context 字段（props / state / data），不调用上下文方法",sv=[{name:"text",type:"string | ((context) => string)",default:'"Badge"',description:"徽章文字（支持函数动态生成）"},{name:"position",type:'"top-left" | "top-right" | "bottom-left" | "bottom-right" | "center"',default:'"top-left"',description:"徽章位置（四角或中心）"},{name:"bgColor",type:"string",default:'"rgba(0,0,0,0.6)"',description:"背景色"},{name:"color",type:"string",default:'"#fff"',description:"文字色"},{name:"fontSize",type:"number",default:"12",description:"字号(px)"},{name:"padding",type:"string",default:'"2px 6px"',description:"内边距"},{name:"borderRadius",type:"number",default:"4",description:"圆角(px)"},{name:"zIndex",type:"number",default:"3",description:"层级"},{name:"showWhen",type:'"always" | "loading" | "loaded" | "error"',default:'"loaded"',description:"显示时机"},{name:"enabled",type:"boolean",default:"true",description:"是否启用"}],av=`const BadgeImage = withPlugins(LazyLoadImageCore, [
  createBadgePlugin({ text: "NEW", position: "top-left", bgColor: "#c62828", showWhen: "always" }),
]);

<BadgeImage src="https://picsum.photos/id/1015/500/300" alt="角标示例" />;`,lv=[{name:"常驻徽标",description:"左上角红色 NEW 徽标，始终显示。",src:"https://picsum.photos/id/1015/500/300",config:{text:"NEW",position:"top-left",bgColor:"#c62828",showWhen:"always"}},{name:"加载时显示",description:"加载中显示 Loading 徽标，加载完成隐藏。",src:"https://picsum.photos/id/1021/500/300",config:{text:"Loading",position:"top-right",bgColor:"rgba(0,0,0,0.6)",showWhen:"loading"}},{name:"加载成功后显示",description:"加载完成后显示 Done 徽标。",src:"https://picsum.photos/id/1026/500/300",config:{text:"Done",position:"bottom-right",bgColor:"#2e7d32",showWhen:"loaded"}},{name:"自定义样式",description:"橙色大字号圆角徽标，居中。",src:"https://picsum.photos/id/1031/500/300",config:{text:"HOT",position:"center",bgColor:"#b35c00",color:"#fff",fontSize:16,borderRadius:20}}],cv=["角标 / 中心两种布局","五位置（四角 + 中心）","按加载状态显示","自定义文字/颜色/字号/圆角","支持函数文案","可关闭"],uv=["商品标签","状态提示","进度/完成标记","活动角标"],dv=["text 支持函数型（按 context 动态生成），静态预览仅支持字符串；函数用法见用法示例。"],pv={name:Jy,description:ev,since:tv,tags:nv,events:ov,methods:rv,methodsNote:iv,config:sv,example:av,examples:lv,features:cv,useCases:uv,notes:dv},mv="BatteryAwarePlugin",gv="电量感知：当设备电量低于阈值或开启省流模式时，自动将图片请求宽度降级并禁用预连接，兼顾体验与续航/流量。",fv="2.0.0",hv=["other","加载策略","性能","省流量"],yv=[{name:"onLoad",when:"加载流程开始、需要确定最终图片地址时",description:"自定义加载逻辑，返回最终图片 URL（objectURL / dataURL / 原地址）"},{name:"transformProps",when:"渲染前链式改写图片 props",description:"补 sizes / 占位色 / 解码策略等"}],vv=[],wv="只读取 context 字段（props / state / data），不调用上下文方法",xv=[{name:"enabled",type:"boolean",default:"true",description:"是否启用"},{name:"lowBatteryThreshold",type:"number",default:"0.2",description:"低电量阈值(0~1)"},{name:"downgradeWidth",type:"number",default:"640",description:"降级时的请求宽度(px)"},{name:"disablePreconnect",type:"boolean",default:"true",description:"低电量时是否禁用预连接"}],bv=`const BatteryImage = withPlugins(LazyLoadImageCore, [
  createBatteryAwarePlugin({ lowBatteryThreshold: 0.3, downgradeWidth: 480 }),
]);

<BatteryImage src="https://picsum.photos/id/1015/500/300" alt="电量感知示例" />;`,Pv=[{name:"默认降级",description:"电量<20% 或省流时降宽至 640 并禁用预连接。",src:"https://picsum.photos/id/1015/500/300",config:{enabled:!0}},{name:"放宽阈值",description:"电量<30% 才降级，更保守。",src:"https://picsum.photos/id/1021/500/300",config:{lowBatteryThreshold:.3}},{name:"保留预连接",description:"disablePreconnect=false，降级时仍允许预连接。",src:"https://picsum.photos/id/1026/500/300",config:{disablePreconnect:!1}}],$v=["低电量自动降宽","省流模式联动","可禁用预连接","可关闭"],Sv=["移动端续航优化","流量节省","弱网/低电场景","全球低端设备"],Cv=["依赖 navigator.getBattery() 与网络 saveData；不支持的环境（如桌面/无该 API）不降级，不影响加载。"],Lv={name:mv,description:gv,since:fv,tags:hv,events:yv,methods:vv,methodsNote:wv,config:xv,example:bv,examples:Pv,features:$v,useCases:Sv,notes:Cv},kv="BlurUpPlugin",Iv="模糊放大占位：加载期为图片注入 blur 滤镜，加载成功后过渡到清晰，避免「白屏 → 清晰图」的突兀切换。",_v="2.0.0",Ev=["visual","视觉"],Rv=[{name:"transformProps",when:"渲染前链式改写图片 props",description:"补 sizes / 占位色 / 解码策略等"}],zv=[],Dv="只读取 context 字段（props / state / data），不调用上下文方法",Ov=[{name:"startBlur",type:"number",default:"8",description:"起始模糊半径 px"},{name:"endBlur",type:"number",default:"0",description:"结束模糊半径 px"},{name:"durationMs",type:"number",default:"400",description:"过渡时长 ms"}],jv=`// 模糊渐显：从 8px 模糊过渡到清晰
const BlurImage = withPlugins(LazyLoadImageCore, [
  createBlurUpPlugin({
    startBlur: 8,
    endBlur: 0,
    durationMs: 450,
  }),
]);

<BlurImage src="https://picsum.photos/seed/blurup/600/400" alt="模糊渐显" />;`,Mv=[{name:"柔和模糊渐显",description:"8px 起始模糊，450ms 平滑过渡到清晰。",src:"https://picsum.photos/seed/blurup-soft/600/400",config:{startBlur:8,endBlur:0,durationMs:450}},{name:"强模糊长过渡",description:"16px 大模糊，700ms 慢过渡，营造「水雾散去」感。",src:"https://picsum.photos/seed/blurup-strong/600/400",config:{startBlur:16,endBlur:0,durationMs:700}}],Tv=["加载期模糊占位，避免白屏突兀","加载成功平滑过渡到清晰","起始 / 结束模糊与时长可调","常与 Skeleton / LQIP 配合"],Nv=["图片画廊 / 相册","首屏大图加载","内容型站点图片过渡","与骨架屏互补的视觉占位"],Av=["与 Skeleton 叠加时建议 blur 图层级略高于骨架，过渡更自然。","durationMs 过大会让「清晰」显得迟缓，一般 300~500ms 为宜。"],Bv={name:kv,description:Iv,since:_v,tags:Ev,events:Rv,methods:zv,methodsNote:Dv,config:Ov,example:jv,examples:Mv,features:Tv,useCases:Nv,notes:Av},Uv="BorderGlowPlugin",Fv="边框光晕：加载成功后为卡片应用发光阴影，悬停时增强。",Wv="2.0.0",Vv=["visual","视觉"],Hv=[{name:"onUnmount",when:"组件卸载前执行一次",description:"释放监听、定时器与观察器；与 onMount 成对出现，避免泄漏"},{name:"onLoadSuccess",when:"图片成功解码可显示时",description:"拿到最终 displaySrc 做后续动作（上报、预取下张、淡入）"}],Gv=[],qv="只读取 context 字段（props / state / data），不调用上下文方法",Qv=[{name:"color",type:"string",default:"rgba(0, 153, 255, 0.6)",description:"辉光颜色"},{name:"blurPx",type:"number",default:"12",description:"辉光模糊半径 px"},{name:"spreadPx",type:"number",default:"2",description:"辉光扩散 px"},{name:"hoverMultiplier",type:"number",default:"1.4",description:"悬停时辉光强度倍数"}],Kv=`// 加载成功后卡片发光，悬停增强
const GlowImage = withPlugins(LazyLoadImageCore, [
  createBorderGlowPlugin({
    color: "rgba(0, 153, 255, 0.6)",
    blurPx: 12,
    spreadPx: 2,
    hoverMultiplier: 1.4,
  }),
]);

<GlowImage src="https://picsum.photos/seed/glow/600/400" alt="边框辉光" />;`,Yv=[{name:"基础辉光",description:"蓝色柔光，悬停轻微增强，突出主体卡片。",src:"https://picsum.photos/seed/glow-basic/600/400",config:{color:"rgba(0, 153, 255, 0.6)",blurPx:12,spreadPx:2,hoverMultiplier:1.4}},{name:"强霓虹辉光",description:"品红大模糊半径，悬停强度放大约 1.6 倍。",src:"https://picsum.photos/seed/glow-neon/600/400",config:{color:"rgba(255, 0, 128, 0.7)",blurPx:24,spreadPx:4,hoverMultiplier:1.6}},{name:"柔和暖光",description:"暖橙色低饱和辉光，适配温馨主题。",src:"https://picsum.photos/seed/glow-warm/600/400",config:{color:"rgba(255, 170, 0, 0.5)",blurPx:18,spreadPx:2,hoverMultiplier:1.3}}],Xv=["加载成功后自动为卡片加发光阴影","悬停增强辉光强度","颜色 / 模糊 / 扩散均可调","智能定位外层卡片，避免被父容器 overflow 裁剪","卸载时自动还原原始阴影"],Zv=["商品主图聚焦","精选 / 推荐位强调","卡片悬停交互反馈","暗色背景下的视觉点睛"],Jv=["辉光优先作用在外层卡片（向上两层），以规避父容器 overflow:hidden 把光晕裁掉。","插件在 onUnmount 还原原始 box-shadow，不会污染其它样式。","与 CustomEffects 的 containerStyle 叠加时，两者都会合并进容器样式。"],e1={name:Uv,description:Fv,since:Wv,tags:Vv,events:Hv,methods:Gv,methodsNote:qv,config:Qv,example:Kv,examples:Yv,features:Xv,useCases:Zv,notes:Jv},t1="CDNFallbackPlugin",n1="CDN 回退：主 CDN 域名加载失败时，按序切换备用 CDN 域名（保留路径与查询参数），实现跨厂商容灾，避免单点故障导致破图。",o1="2.0.0",r1=["network","网络","CDN","容灾"],i1=[{name:"onUnmount",when:"组件卸载前执行一次",description:"释放监听、定时器与观察器；与 onMount 成对出现，避免泄漏"},{name:"onLoadError",when:"加载失败（网络错误、解码失败、超时）",description:"返回 true 表示错误已被处理（如切换备用源），否则继续走默认降级"},{name:"onSrcChange",when:"src 变化、切换到新图时",description:"重置状态、清理旧缓存、重新进入懒加载判定"}],s1=[],a1="只读取 context 字段（props / state / data），不调用上下文方法",l1=[{name:"cdnBases",type:"string[]",description:'备用 CDN 基址列表，首个即主用 CDN。e.g. ["https://cdn1.example.com", "https://cdn2.example.com"]'}],c1=`import { LazyLoadImageCore, createCDNFallbackPlugin, withPlugins } from "vane-lazy-image";

const LazyImage = withPlugins(LazyLoadImageCore, [
  createCDNFallbackPlugin({
    cdnBases: ["https://cdn1.example.com", "https://cdn2.example.com"],
  }),
]);

<LazyImage src="https://cdn0.example.com/photo.jpg" alt="CDN 回退示例" />`,u1=[{name:"多 CDN 回退",description:"主用 picsum.photos 命中；真实故障场景填入备用域名可自动切换（演示用同源避免 404）。",src:"https://picsum.photos/seed/cdn/800/600",config:{cdnBases:["https://picsum.photos","https://fastly.picsum.photos"]}}],d1=["onLoad 用 cdnBases[0] 作为主用 CDN 重写 host","onLoadError 按序切换下一个 CDN 并改写 img.src 触发重试","切换时保留路径 / 查询参数，附加 cdnFallback 缓存破坏参数"],p1=["多活 CDN、跨云厂商容灾","主源站故障时无缝切到备用源"],m1=["cdnBases 为必填，首个即主用 CDN","演示用同源 CDN 避免 404；生产请填入真实备用域名，主域失败会自动切换","切换逻辑替换协议 / host / port，路径与 query 不变"],g1={name:t1,description:n1,since:o1,tags:r1,events:i1,methods:s1,methodsNote:a1,config:l1,example:c1,examples:u1,features:d1,useCases:p1,notes:m1},f1="CacheIDBPlugin",h1="IndexedDB 持久缓存：跨会话缓存图片 Blob/dataURL，支持 TTL。",y1="2.0.0",v1=["cache","缓存"],w1=[{name:"onUnmount",when:"组件卸载前执行一次",description:"释放监听、定时器与观察器；与 onMount 成对出现，避免泄漏"},{name:"onLoad",when:"加载流程开始、需要确定最终图片地址时",description:"自定义加载逻辑，返回最终图片 URL（objectURL / dataURL / 原地址）"},{name:"onLoadSuccess",when:"图片成功解码可显示时",description:"拿到最终 displaySrc 做后续动作（上报、预取下张、淡入）"},{name:"onSrcChange",when:"src 变化、切换到新图时",description:"重置状态、清理旧缓存、重新进入懒加载判定"},{name:"cache:hit",when:"命中 IndexedDB 缓存、跳过网络请求时",description:"携带 { level, src }，可用于统计缓存命中率"}],x1=[],b1="只读取 context 字段（props / state / data），不调用上下文方法",P1=[{name:"enabled",type:"boolean",default:"true",description:"是否启用 IndexedDB 缓存（关闭后每次都走网络）"},{name:"dbName",type:"string",default:'"LLI-Cache"',description:"IndexedDB 数据库名，多实例共用同一个库"},{name:"storeName",type:"string",default:'"images"',description:"对象仓库名，缓存条目存在该 store 下"},{name:"ttlMs",type:"number",default:"604800000",description:"过期时间（毫秒）"},{name:"debug",type:"boolean",description:"是否输出读写 / 命中调试日志"}],$1=`const LazyImage = withPlugins(LazyLoadImageCore, [
  createIDBCachePlugin({
    dbName: "LLI-Cache",
    storeName: "images",
    ttlMs: 7 * 24 * 60 * 60 * 1000, // 7 天
  }),
]);`,S1=[{name:"默认持久缓存",description:"跨会话缓存图片 Blob，刷新 / 重开应用仍命中，秒开头部图。",config:{ttlMs:6048e5}},{name:"自定义库与过期",description:"独立库名隔离业务数据，30 天过期。",config:{dbName:"App-Img",storeName:"photos",ttlMs:2592e6}}],C1=["用 IndexedDB 持久化图片 Blob / dataURL","支持 TTL（默认 7 天），过期自动清理","优先存 Blob，其次 dataURL，节省空间"],L1=["离线优先 / PWA 图片缓存","重开应用仍需秒开的头部图、用户头像"],k1=["仅在支持 IndexedDB 的环境生效，SSR / Node 端无副作用。","与 CachePrewarmPlugin 配合可实现“进入视口即落盘”。","多实例请使用不同 dbName / storeName 避免相互覆盖。"],I1={name:f1,description:h1,since:y1,tags:v1,events:w1,methods:x1,methodsNote:b1,config:P1,example:$1,examples:S1,features:C1,useCases:L1,notes:k1},_1="CacheMemoryPlugin",E1="内存 LRU 缓存：会话内缓存图片数据，可配置容量与过期时间。",R1="2.0.0",z1=["cache","缓存"],D1=[{name:"onUnmount",when:"组件卸载前执行一次",description:"释放监听、定时器与观察器；与 onMount 成对出现，避免泄漏"},{name:"onLoad",when:"加载流程开始、需要确定最终图片地址时",description:"自定义加载逻辑，返回最终图片 URL（objectURL / dataURL / 原地址）"},{name:"onLoadSuccess",when:"图片成功解码可显示时",description:"拿到最终 displaySrc 做后续动作（上报、预取下张、淡入）"},{name:"onSrcChange",when:"src 变化、切换到新图时",description:"重置状态、清理旧缓存、重新进入懒加载判定"}],O1=[],j1="只读取 context 字段（props / state / data），不调用上下文方法",M1=[{name:"enabled",type:"boolean",default:"true",description:"是否启用内存缓存"},{name:"maxEntries",type:"number",default:"200",description:"LRU 最大条目"},{name:"ttlMs",type:"number",description:"过期时间，默认不过期"},{name:"debug",type:"boolean",default:"false",description:"是否输出 LRU 命中 / 淘汰调试日志"}],T1=`const LazyImage = withPlugins(LazyLoadImageCore, [
  createMemoryCachePlugin({
    maxEntries: 300,
    ttlMs: 5 * 60 * 1000, // 5 分钟过期
  }),
]);`,N1=[{name:"默认内存缓存",description:"会话内 LRU 缓存（默认 200 条），同一图片重复访问零网络。",config:{maxEntries:200}},{name:"限定过期时间",description:"5 分钟后条目失效，在命中率与内存占用之间取得平衡。",config:{maxEntries:300,ttlMs:3e5}}],A1=["会话内 LRU 缓存（默认 200 条）","可选 TTL 过期时间","内存受限时自动淘汰最久未用条目"],B1=["同一图片在列表 / 详情多处复用","快速来回切换的画廊、相册"],U1=["内存缓存不跨会话，刷新页面即失效。","需要跨会话持久请配合 IDBCachePlugin。","命中时直接返回已缓存数据，跳过网络请求。"],F1={name:_1,description:E1,since:R1,tags:z1,events:D1,methods:O1,methodsNote:j1,config:M1,example:T1,examples:N1,features:A1,useCases:B1,notes:U1},W1="CachePrewarmPlugin",V1="缓存预热：进入视口或挂载时把图片预热到内存/IDB 缓存。",H1="2.0.0",G1=["cache","缓存"],q1=[{name:"onMount",when:"组件挂载完成、插件注册后执行一次（返回的清理函数在 manager.clear 时逆序执行）",description:"初始化副作用：注册监听、起定时器、建观察器；必须返回清理函数或配合 onUnmount 收尾"},{name:"onEnterViewport",when:"元素进入视口（IntersectionObserver）",description:"触发懒加载、开始请求、曝光上报"},{name:"renderOverlay",when:"每次渲染，覆盖在图片容器之上",description:"骨架屏、错误占位、水印、加载动画"}],Q1=[],K1="只读取 context 字段（props / state / data），不调用上下文方法",Y1=[{name:"enabled",type:"boolean",default:"true",description:"是否启用预热"},{name:"trigger",type:'"enter" | "mount"',default:'"enter"',description:"触发时机：进入视口或挂载"},{name:"preferMemory",type:"boolean",default:"true",description:"预热时优先写内存"},{name:"debug",type:"boolean",default:"false",description:"是否输出预热调试日志"},{name:"showBadge",type:"boolean",default:"false",description:"是否在卡片上显示预热状态徽标（便于观察）"}],X1=`const LazyImage = withPlugins(LazyLoadImageCore, [
  createCachePrewarmPlugin({
    trigger: "enter",    // 进入视口即预热
    preferMemory: true,  // 优先写入内存缓存
  }),
]);`,Z1=[{name:"进入视口预热",description:"图片刚进视口就提前取回并写入缓存，滚动时无等待、点击放大秒开。",config:{trigger:"enter",preferMemory:!0,showBadge:!0}},{name:"挂载即预热",description:"组件挂载即预热，适合首屏已知必看的图（如详情页主图）。",config:{trigger:"mount",preferMemory:!1}}],J1=["进入视口 / 挂载时提前 fetch 并写入 Memory / IDB 缓存","内置重入保护（prewarming / prewarmed 集合），避免重复预热","优先写入内存（objectURL），跨会话持久交给 IDB"],ew=["商品详情页主图：进入视口即预热，查看大图零延迟","轮播首图：挂载即预热，切换时无白屏"],tw=["依赖 MemoryCachePlugin / IDBCachePlugin 提供底层存储。","预热失败或超时（10s）不影响正常加载，仅跳过预热。","与 CacheIDBPlugin 配合可实现“进入视口即落盘”。"],nw={name:W1,description:V1,since:H1,tags:G1,events:q1,methods:Q1,methodsNote:K1,config:Y1,example:X1,examples:Z1,features:J1,useCases:ew,notes:tw},ow="CaptionPlugin",rw="图片说明文字覆盖层，支持样式定制。",iw="2.0.0",sw=["visual","视觉"],aw=[{name:"renderOverlay",when:"每次渲染，覆盖在图片容器之上",description:"骨架屏、错误占位、水印、加载动画"}],lw=[],cw="只读取 context 字段（props / state / data），不调用上下文方法",uw=[{name:"text",type:"string | ((src?: string) => string)",default:'""',description:"说明文字；可传函数按 src 派生"},{name:"position",type:'"top" | "bottom"',default:'"bottom"',description:"文字位置"},{name:"bg",type:"string",default:"rgba(0,0,0,0.62)",description:"背景色"},{name:"color",type:"string",default:"#fff",description:"文字颜色"}],dw=`// 底部说明文字
const CaptionImage = withPlugins(LazyLoadImageCore, [
  createCaptionPlugin({
    text: "日落海岸线",
    position: "bottom",
  }),
]);

// 按图片地址动态生成说明
createCaptionPlugin({
  text: (src) => \`Photo • \${src.split("/").pop()}\`,
  position: "bottom",
});`,pw=[{name:"底部说明",description:"半透明黑底白字，落在图片底部作图注。",src:"https://picsum.photos/seed/cap-bottom/600/400",config:{text:"日落海岸线",position:"bottom"}},{name:"顶部标题条",description:"顶部深色背景条，作标题 / 分类标签。",src:"https://picsum.photos/seed/cap-top/600/400",config:{text:"Gallery • 2026",position:"top",bg:"rgba(0,0,0,0.6)",color:"#fff"}},{name:"暖色图注",description:"自定义暖色背景与文字色，贴合活动主题。",src:"https://picsum.photos/seed/cap-warm/600/400",config:{text:"限时特惠",position:"bottom",bg:"rgba(160,48,16,0.88)",color:"#fff"}}],mw=["顶部 / 底部两种位置","背景与文字颜色可定制","文本支持静态或函数动态派生","作为覆盖层渲染，不干扰图片本身"],gw=["图库 / 相册图注","新闻 / 博客配图说明","商品图标题条","活动海报角标文字"],fw=["text 传函数时可按 src 动态生成，但场景示例画廊使用静态文本以保证实时预览。","与 OverlayInfo 的区别：Caption 聚焦单一说明文案，OverlayInfo 更通用（任意文本 + 触发时机）。"],hw={name:ow,description:rw,since:iw,tags:sw,events:aw,methods:lw,methodsNote:cw,config:uw,example:dw,examples:pw,features:mw,useCases:gw,notes:fw},yw="CarouselPlugin",vw="自动轮播（gallery 增强插件）：在工具条渲染 播放/暂停 按钮，按 interval 循环切换主图；悬停图集根容器可暂停。",ww="2.1.0",xw=["gallery","图集","轮播","自动播放"],bw=[{name:"galleryToolbarArea",when:"渲染图库工具栏时",description:"缩放、下载、分享等图库级操作"}],Pw=[{name:"setActiveIndex",signature:"ctx.setActiveIndex(i: number): void",description:"切换图库当前激活图索引，并联动缩略图与预加载"}],$w=[{name:"interval",type:"number",default:"3000",description:"每帧停留时长（ms）"},{name:"autoStart",type:"boolean",default:"false",description:"初始是否自动播放"},{name:"pauseOnHover",type:"boolean",default:"true",description:"悬停图集根容器时暂停"}],Sw=`import { GalleryCore } from "vane-lazy-image/gallery";
import { createCarouselPlugin } from "vane-lazy-image/custom-plugins/CarouselPlugin";

<GalleryCore images={images} plugins={[createCarouselPlugin({ interval: 2500 })]} />`,Cw=[{name:"自动轮播",description:"点击 播放 后每 2.5s 切换一张，悬停图集暂停；计数/指示点同步刷新。",config:{interval:2500,autoStart:!0}}],Lw=["播放/暂停按钮","循环切换主图","悬停暂停","与计数/指示点同步"],kw=["商品自动展示","首页轮播图集","展品巡览"],Iw=["len<2 时不渲染按钮；activeIndex 为协调态，轮播时缩略条/指示点同步。"],_w={name:yw,description:vw,since:ww,tags:xw,events:bw,methods:Pw,config:$w,example:Sw,examples:Cw,features:Lw,useCases:kw,notes:Iw},Ew="ColorExtractionPlugin",Rw="主色提取：canvas 采样图片主色，可设置容器背景或显示色卡。",zw="2.0.0",Dw=["visual","视觉"],Ow=[{name:"onMount",when:"组件挂载完成、插件注册后执行一次（返回的清理函数在 manager.clear 时逆序执行）",description:"初始化副作用：注册监听、起定时器、建观察器；必须返回清理函数或配合 onUnmount 收尾"},{name:"onLoadSuccess",when:"图片成功解码可显示时",description:"拿到最终 displaySrc 做后续动作（上报、预取下张、淡入）"},{name:"transformProps",when:"渲染前链式改写图片 props",description:"补 sizes / 占位色 / 解码策略等"},{name:"renderOverlay",when:"每次渲染，覆盖在图片容器之上",description:"骨架屏、错误占位、水印、加载动画"}],jw=[],Mw="只读取 context 字段（props / state / data），不调用上下文方法",Tw=[{name:"setContainerBg",type:"boolean",default:"true",description:"是否把容器背景设为主色"},{name:"sampleSize",type:"number",default:"4",description:"采样步长 px，越大越快越不精确"},{name:"showOverlay",type:"boolean",default:"true",description:"是否在右上角显示主色卡"}],Nw=`// 提取主色填充容器 + 显示色卡
const TintImage = withPlugins(LazyLoadImageCore, [
  createColorExtractionPlugin({
    setContainerBg: true,
    sampleSize: 4,
    showOverlay: true,
  }),
]);

<TintImage src="https://picsum.photos/seed/color/600/400" alt="主色提取" crossOrigin="anonymous" />;`,Aw=[{name:"主色填充容器 + 色卡",description:"提取主色作为卡片背景，并在右上角显示色卡。",src:"https://picsum.photos/seed/color-full/600/400",config:{setContainerBg:!0,sampleSize:4,showOverlay:!0}},{name:"仅色卡",description:"不改动容器背景，只在角上显示提取到的主色卡。",src:"https://picsum.photos/seed/color-chip/600/400",config:{setContainerBg:!1,showOverlay:!0}}],Bw=["canvas 采样主色","可选填充容器背景","可选角标色卡展示","采样精度 / 速度可调"],Uw=["按图自动配色（背景 / 阴影）","色彩主题联动","色卡 / 调色板展示","设计工具取色"],Fw=['读取像素需在 <img> 上设置 crossOrigin="anonymous"，且图片服务器需允许跨域，否则 canvas 被污染无法取色（会静默失败）。',"sampleSize 越大采样越稀疏、越快但越不精确。"],Ww={name:Ew,description:Rw,since:zw,tags:Dw,events:Ow,methods:jw,methodsNote:Mw,config:Tw,example:Nw,examples:Aw,features:Bw,useCases:Uw,notes:Fw},Vw="ColorSwatchPlugin",Hw="颜色选择器：自动提取商品图片主要颜色，支持交互选择、颜色代码显示与悬停放大。",Gw="2.0.0",qw=["ecommerce","电商核心"],Qw=[{name:"onMount",when:"组件挂载完成、插件注册后执行一次（返回的清理函数在 manager.clear 时逆序执行）",description:"初始化副作用：注册监听、起定时器、建观察器；必须返回清理函数或配合 onUnmount 收尾"},{name:"transformProps",when:"渲染前链式改写图片 props",description:"补 sizes / 占位色 / 解码策略等"},{name:"renderOverlay",when:"每次渲染，覆盖在图片容器之上",description:"骨架屏、错误占位、水印、加载动画"}],Kw=[],Yw="只读取 context 字段（props / state / data），不调用上下文方法",Xw=[{name:"maxColors",type:"number",default:"5",description:"提取颜色数量上限"},{name:"showPalette",type:"boolean",default:"true",description:"是否显示色板"},{name:"position",type:'"bottom" | "overlay" | "bottom-center"',default:'"bottom"',description:"色板位置"},{name:"swatchSize",type:"number",default:"32",description:"色块尺寸（px）"},{name:"interactive",type:"boolean",default:"true",description:"是否可点击选择"},{name:"showColorCode",type:"boolean",default:"false",description:"是否显示 HEX 代码"},{name:"gap",type:"number",default:"8",description:"色块间距（px）"},{name:"onColorSelect",type:"(color) => void",default:"undefined",description:"颜色选择回调"},{name:"style",type:"React.CSSProperties",default:"{}",description:"自定义叠加样式"}],Zw=`// 1. 可交互色板（点击选择颜色）
const SwatchImage = withPlugins(LazyLoadImageCore, [
  createColorSwatchPlugin({ maxColors: 6, onColorSelect: (c) => console.log(c) }),
]);

// 2. 在色块下方显示 HEX 代码
createColorSwatchPlugin({
  maxColors: 5,
  position: "bottom-center",
  showColorCode: true,
  gap: 12,
});

// 3. 在组件中使用
<SwatchImage src="https://picsum.photos/id/100/500/400" alt="服装图" />;`,Jw=[{name:"底部色板（可交互）",description:"点击色块可选择颜色，悬停放大。",src:"https://picsum.photos/id/100/500/400",config:{maxColors:6,showPalette:!0,position:"bottom",interactive:!0,swatchSize:36}},{name:"居中叠加",description:"色板居中浮于图片之上。",src:"https://picsum.photos/id/106/500/400",config:{maxColors:5,showPalette:!0,position:"overlay",interactive:!0,swatchSize:40,gap:10}},{name:"显示颜色代码",description:"每个色块下方显示 HEX 代码。",src:"https://picsum.photos/id/116/500/400",config:{maxColors:5,showPalette:!0,position:"bottom-center",interactive:!0,swatchSize:32,showColorCode:!0,gap:12}},{name:"多颜色小色块",description:"更多颜色、更小色块、更小间距。",src:"https://picsum.photos/id/129/500/400",config:{maxColors:8,showPalette:!0,position:"bottom",interactive:!0,swatchSize:24,gap:6}}],ex=["跨域提示：本示例使用的 picsum.photos 图片没有 CORS 头，无法提取真实颜色，当前显示的是默认演示色。实际使用中请确保图片服务器配置了正确的 CORS 头，或使用同域图片，插件才能正确提取图片的真实颜色。"],tx=["自动提取图片主要颜色","智能过滤黑白和透明色","可配置提取颜色数量","3 种显示位置（底部 / 居中 / 底部居中）","交互式颜色选择","显示 HEX 颜色代码","悬停放大效果","选中状态标识"],nx=["服装多颜色选择","艺术品 / 设计作品配色","家具 / 装饰品颜色筛选","鞋包配色选择","礼品个性化定制"],ox={name:Vw,description:Hw,since:Gw,tags:qw,events:Qw,methods:Kw,methodsNote:Yw,config:Xw,example:Zw,examples:Jw,notes:ex,features:tx,useCases:nx},rx="ComparisonPlugin",ix="前后对比（v2 真实实现）：用可拖拽分隔条对比 beforeSrc / afterSrc 两张图，拖动实时比较差异（如调色前后、装修前后、A/B 图）。不再是写死文字角标。",sx="2.0.0",ax=["other","视觉","对比","交互"],lx=[{name:"renderOverlay",when:"每次渲染，覆盖在图片容器之上",description:"骨架屏、错误占位、水印、加载动画"}],cx=[],ux="只读取 context 字段（props / state / data），不调用上下文方法",dx=[{name:"beforeSrc",type:"string",default:"主图 src",description:"左侧（拖动前）对比图；默认用主图"},{name:"afterSrc",type:"string",default:"主图 src",description:"右侧（拖动后）对比图；默认用主图"},{name:"labelBefore",type:"string",default:"前",description:"左图标签文字"},{name:"labelAfter",type:"string",default:"后",description:"右图标签文字"},{name:"start",type:"number",default:"0.5",description:"初始分割位置（0~1）"}],px=`const CompareImage = withPlugins(LazyLoadImageCore, [
  createComparisonPlugin({
    beforeSrc: "https://picsum.photos/id/1015/800/600",
    afterSrc: "https://picsum.photos/id/1016/800/600",
    labelBefore: "原图", labelAfter: "处理后",
  }),
]);

<CompareImage src="https://picsum.photos/id/1016/800/600" alt="前后对比示例" />;`,mx=[{name:"基础对比",description:"提供 beforeSrc / afterSrc 两张图，拖动中间把手即可对比。",src:"https://picsum.photos/id/1016/800/600",config:{beforeSrc:"https://picsum.photos/id/1015/800/600",afterSrc:"https://picsum.photos/id/1016/800/600",labelBefore:"原图",labelAfter:"处理后"}},{name:"自定义起始位置",description:"start=0.3 让初始分割更偏左。",src:"https://picsum.photos/id/1021/800/600",config:{beforeSrc:"https://picsum.photos/id/1020/800/600",afterSrc:"https://picsum.photos/id/1021/800/600",start:.3}},{name:"单图自对比（调色）",description:"只传 afterSrc，before 用主图，演示同一张图的两种状态。",src:"https://picsum.photos/id/1025/800/600",config:{afterSrc:"https://picsum.photos/id/1025/800/600",labelBefore:"原图",labelAfter:"滤镜"}}],gx=["可拖拽分隔条对比两图（指针/触摸）","左右标签可自定义","初始分割位置可调","左图按分割宽度自适应裁剪，始终铺满容器"],fx=["装修前后 / 调色前后对比","A/B 图组对比","图像增强效果演示","教学 / 设计稿对照"],hx=["v2 起为真实拖拽交互，旧版仅渲染写死文字角标。对比层覆盖在 Core 主图之上，拖动区域占满容器。"],yx={name:rx,description:ix,since:sx,tags:ax,events:lx,methods:cx,methodsNote:ux,config:dx,example:px,examples:mx,features:gx,useCases:fx,notes:hx},vx="ConcurrencyControlPlugin",wx="并发控制：限制同时加载数量，支持按域名分片与网络自适应。",xx="2.0.0",bx=["loading","加载策略"],Px=[{name:"onUnmount",when:"组件卸载前执行一次",description:"释放监听、定时器与观察器；与 onMount 成对出现，避免泄漏"},{name:"onLoad",when:"加载流程开始、需要确定最终图片地址时",description:"自定义加载逻辑，返回最终图片 URL（objectURL / dataURL / 原地址）"},{name:"onLoadSuccess",when:"图片成功解码可显示时",description:"拿到最终 displaySrc 做后续动作（上报、预取下张、淡入）"},{name:"onLoadError",when:"加载失败（网络错误、解码失败、超时）",description:"返回 true 表示错误已被处理（如切换备用源），否则继续走默认降级"}],$x=[],Sx="只读取 context 字段（props / state / data），不调用上下文方法",Cx=[{name:"maxConcurrent",type:"number",default:"4",description:"并发上限（4g 情况的上限）"},{name:"scope",type:'"global" | "perHost"',default:'"global"',description:"作用域：全局或按域名分片"},{name:"adaptive",type:"boolean",default:"true",description:"是否根据网络自适应并发（saveData/2g/3g 降低并发）"},{name:"acquireTimeoutMs",type:"number",default:"8000",description:"获取并发许可的超时（毫秒），超时后不阻塞加载，避免饥饿"},{name:"debug",type:"boolean",default:"false",description:"调试输出"}],Lx=`const LazyImage = withPlugins(LazyLoadImageCore, [
  createConcurrencyControlPlugin({
    maxConcurrent: 6,
    scope: "perHost", // 按域名分片，避免单域阻塞
    adaptive: true,    // 弱网自动降低并发
  }),
]);`,kx=[{name:"全局并发限制",description:"限制整页同时加载不超过 4 张，避免带宽被瞬间打满。",config:{maxConcurrent:4,scope:"global"}},{name:"按域名分片",description:"每个域名独立并发配额，混合多 CDN 时不互相拖累。",config:{maxConcurrent:6,scope:"perHost",adaptive:!0}}],Ix=["全局或按域名（perHost）分片并发门控","弱网（saveData / 2g / 3g）下自适应降低并发","acquireTimeoutMs 后不阻塞加载，避免饥饿"],_x=["瀑布流海量图片，避免一次性发起上百请求","弱网环境限制并发以保住首屏体验"],Ex=["acquireTimeoutMs 保证极端情况下不会永久挂起。","与 ScrollIdle 搭配可进一步错峰、降低峰值并发。","并发许可在加载完成后释放，供队列中下一张使用。"],Rx={name:vx,description:wx,since:xx,tags:bx,events:Px,methods:$x,methodsNote:Sx,config:Cx,example:Lx,examples:kx,features:Ix,useCases:_x,notes:Ex},zx="CounterPlugin",Dx="图片计数指示器（gallery 增强插件）：在工具条渲染「当前 / 总数」，绑定 activeIndex。",Ox="2.1.0",jx=["gallery","图集","计数","指示器"],Mx=[{name:"galleryToolbarArea",when:"渲染图库工具栏时",description:"缩放、下载、分享等图库级操作"}],Tx=[],Nx="只读取 context 字段（props / state / data），不调用上下文方法",Ax=[{name:"prefix",type:"string",default:"",description:"前缀文案"},{name:"separator",type:"string",default:" / ",description:"当前与总数之间的分隔符"}],Bx=`import { GalleryCore } from "vane-lazy-image/gallery";
import { createCounterPlugin } from "vane-lazy-image/custom-plugins/CounterPlugin";

<GalleryCore images={images} plugins={[createCounterPlugin()]} />`,Ux=[{name:"基础计数",description:"工具条显示「3 / 8」，随 activeIndex 刷新。",config:{}}],Fx=["当前/总数计数","绑定 activeIndex","tabular-nums 等宽数字"],Wx=["电商商品图集","相册","多图轮播"],Vx=["与 ThumbSync / Indicator 共用同一 activeIndex 协调态。"],Hx={name:zx,description:Dx,since:Ox,tags:jx,events:Mx,methods:Tx,methodsNote:Nx,config:Ax,example:Bx,examples:Ux,features:Fx,useCases:Wx,notes:Vx},Gx="CropPlugin",qx="焦点裁剪：通过 object-fit: cover 与 object-position 将裁剪焦点设在指定相对坐标，统一多图主体构图。",Qx="2.0.0",Kx=["other","视觉","裁剪"],Yx=[{name:"transformProps",when:"渲染前链式改写图片 props",description:"补 sizes / 占位色 / 解码策略等"},{name:"renderOverlay",when:"每次渲染，覆盖在图片容器之上",description:"骨架屏、错误占位、水印、加载动画"}],Xx=[],Zx="只读取 context 字段（props / state / data），不调用上下文方法",Jx=[{name:"enabled",type:"boolean",default:"true",description:"是否启用裁剪"},{name:"focusPoint",type:"{ x: number; y: number }",default:"{ x: 0.5, y: 0.5 }",description:"裁剪焦点(0~1 相对坐标)"},{name:"showLabel",type:"boolean",default:"true",description:"是否在图片左上角显示焦点标识（生产版式建议关闭）"}],eb=`const CropImage = withPlugins(LazyLoadImageCore, [
  createCropPlugin({ focusPoint: { x: 0.3, y: 0.4 } }),
]);

<CropImage src="https://picsum.photos/id/1015/500/300" alt="焦点裁剪示例" />;`,tb=[{name:"居中焦点（默认）",description:"x=0.5,y=0.5，主体居中裁切。",src:"https://picsum.photos/id/1015/500/300",config:{focusPoint:{x:.5,y:.5}}},{name:"左上方焦点",description:"x=0.3,y=0.3，主体偏左上裁切。",src:"https://picsum.photos/id/1021/500/300",config:{focusPoint:{x:.3,y:.3}}},{name:"右下焦点",description:"x=0.7,y=0.7，突出右下主体。",src:"https://picsum.photos/id/1026/500/300",config:{focusPoint:{x:.7,y:.7}}}],nb=["object-position 焦点裁剪","cover 填充","任意焦点坐标","可关闭","overlay 标识焦点（showLabel 可关）"],ob=["头像/封面统一构图","商品主图裁剪","列表缩略图","跨尺寸适配"],rb=["当前为最小实现：通过 CSS object-position 模拟裁剪焦点；加载容器需固定宽高以体现裁切效果。","showLabel: false 可隐藏左上角焦点标识，适合直接接入真实版式。"],ib={name:Gx,description:qx,since:Qx,tags:Kx,events:Yx,methods:Xx,methodsNote:Zx,config:Jx,example:eb,examples:tb,features:nb,useCases:ob,notes:rb},sb="CustomEffectsPlugin",ab="自定义效果逃逸舱：把内置视觉插件覆盖不到的任意 CSS 效果（filter / transform / transition / className）直接注入图片与容器，无需新造组件。旧版 CustomEffects 展示页的 v2 等效形态。",lb="2.0.0",cb=["visual","视觉","自定义"],ub=[{name:"onUnmount",when:"组件卸载前执行一次",description:"释放监听、定时器与观察器；与 onMount 成对出现，避免泄漏"},{name:"onLoadSuccess",when:"图片成功解码可显示时",description:"拿到最终 displaySrc 做后续动作（上报、预取下张、淡入）"},{name:"transformProps",when:"渲染前链式改写图片 props",description:"补 sizes / 占位色 / 解码策略等"}],db=[],pb="只读取 context 字段（props / state / data），不调用上下文方法",mb=[{name:"imageStyle",type:"React.CSSProperties",default:"{}",description:'应用到 <img> 的任意内联样式，如 { filter: "contrast(1.2) saturate(1.4)" }'},{name:"imageClassName",type:"string",default:'""',description:"附加到 <img> 的 className"},{name:"containerStyle",type:"React.CSSProperties",default:"{}",description:"应用到容器（卡片）的任意内联样式"},{name:"containerClassName",type:"string",default:'""',description:"附加到容器的 className"},{name:"hoverImageStyle",type:"React.CSSProperties",default:"{}",description:'悬停时叠加到 <img> 的样式（移出还原），如 { transform: "scale(1.08)" }'}],gb=`// 任意 CSS 效果逃逸舱：内置插件没有的视觉，直接以样式注入
const ArtImage = withPlugins(LazyLoadImageCore, [
  createCustomEffectsPlugin({
    imageStyle: {
      filter: "contrast(1.15) saturate(1.4) hue-rotate(-8deg)",
      transition: "filter 240ms ease",
    },
    containerStyle: { borderRadius: 16, overflow: "hidden" },
    hoverImageStyle: { transform: "scale(1.06)" },
  }),
]);

<ArtImage src="https://picsum.photos/seed/custom/600/400" alt="自定义效果" />;`,fb=[{name:"复古胶片滤镜（静态）",description:"sepia + 对比度 + 饱和度组合，模拟胶片质感，并给容器加圆角。",src:"https://picsum.photos/seed/custom-film/600/400",config:{imageStyle:{filter:"sepia(0.45) contrast(1.1) saturate(1.3)",transition:"filter 240ms ease"},containerStyle:{borderRadius:16,overflow:"hidden",boxShadow:"0 6px 20px rgba(0,0,0,0.18)"}}},{name:"悬停放大 + 轻微旋转",description:"平常静态，鼠标悬停时图片放大并旋转 2°，移出自动还原。",src:"https://picsum.photos/seed/custom-hover/600/400",config:{imageStyle:{transition:"transform 220ms ease"},hoverImageStyle:{transform:"scale(1.08) rotate(2deg)"}}},{name:"叠加到内置插件之上",description:"与 BorderGlow / Caption 等内置插件叠加：用逃逸舱补一个渐变描边。",src:"https://picsum.photos/seed/custom-combo/600/400",config:{imageClassName:"custom-art-frame",containerStyle:{padding:6,background:"linear-gradient(135deg,#ff9a9e,#fad0c4)",borderRadius:12}}}],hb=["注入任意 CSS filter（模糊 / 灰度 / 复古 / 色相旋转等）","注入任意 transform（缩放 / 旋转 / 位移）","为 <img> 与容器分别附加 className 与内联样式","hoverImageStyle 支持悬停态，移出自动还原","优先级靠前，可叠加在其它视觉插件之上","无需为一次性效果新建组件，几行配置即可"],yb=["内置视觉插件未覆盖的特殊滤镜 / 调色需求","活动主题需要临时换肤、加描边 / 圆角","悬停微交互（放大、旋转、投影）","演示或 A/B 实验时的快速视觉验证","替代旧版 CustomEffects 展示页的任意效果组合"],vb=["imageStyle / containerStyle 合并进核心渲染的 style，后者优先级更高（叠加而非覆盖）。","插件会自动保留核心自带的 opacity 渐显：你给 imageStyle.transition 设值时，会追加 opacity 180ms 而非覆盖它。","hoverImageStyle 通过注入一条纯 CSS `:hover` 规则实现，由浏览器原生处理进入/离开——不触碰 React 受控的内联样式，因此不会出现「移出后图片消失」的旧问题。","与内置插件叠加时，建议把 CustomEffects 放在 withPlugins 数组靠前位置（其 priority=50 已处理）。","需要函数式动态样式时，可在业务侧先算出 style 对象再传入，本插件保持配置式以便文档化。"],wb={name:sb,description:ab,since:lb,tags:cb,events:ub,methods:db,methodsNote:pb,config:mb,example:gb,examples:fb,features:hb,useCases:yb,notes:vb},xb="DataSaverPlugin",bb="省流模式：saveData 开启时降低质量参数并禁用预加载。",Pb="2.0.0",$b=["loading","加载策略"],Sb=[{name:"transformProps",when:"渲染前链式改写图片 props",description:"补 sizes / 占位色 / 解码策略等"}],Cb=[],Lb="只读取 context 字段（props / state / data），不调用上下文方法",kb=[{name:"respectSaveData",type:"boolean",default:"true",description:"仅在 navigator.connection.saveData=true 时降质（关闭则强制降质）"},{name:"fallbackQuality",type:"number",default:"0.6",description:"0..1"},{name:"disablePreload",type:"boolean",default:"true",description:"省流量模式下禁用 preload / prefetch 预取"},{name:"qualityParam",type:"string",default:'"quality"',description:'query param name, e.g. "quality" or "q"'}],Ib=`const LazyImage = withPlugins(LazyLoadImageCore, [
  createDataSaverPlugin({
    respectSaveData: true, // 尊重系统省流开关
    fallbackQuality: 0.5,  // 省流时质量降到 0.5
    qualityParam: "q",     // 追加 ?q=0.5
  }),
]);`,_b=[{name:"尊重系统省流",description:"检测到 saveData 时自动降质并禁用预加载，仅在省流模式下生效。",config:{respectSaveData:!0,fallbackQuality:.5,qualityParam:"q"}},{name:"始终省流",description:"忽略系统开关，始终追加低质量参数，适合极端省流场景。",config:{respectSaveData:!1,fallbackQuality:.4,disablePreload:!0}}],Eb=["读取 navigator.connection.saveData，开启时自动降质","自动追加质量查询参数（如 ?q=0.6）","可选禁用预加载以进一步省流"],Rb=["移动端弱流量用户自动减负","按运营策略全局降质"],zb=["依赖业务 CDN 支持对应质量参数，否则参数无效。","respectSaveData=false 时按 fallbackQuality 强制降质（无视系统开关）。","与 ImageOptimization 叠加时，省流质量会进一步覆盖优化质量。"],Db={name:xb,description:bb,since:Pb,tags:$b,events:Sb,methods:Cb,methodsNote:Lb,config:kb,example:Ib,examples:_b,features:Eb,useCases:Rb,notes:zb},Ob="DecodeAfterIdlePlugin",jb="空闲解码：图片加载成功后延迟到浏览器空闲时段再执行 img.decode()，避免大图解码阻塞主线程，提升交互流畅度。",Mb="2.0.0",Tb=["loading","加载策略","解码","性能"],Nb=[{name:"onLoadSuccess",when:"图片成功解码可显示时",description:"拿到最终 displaySrc 做后续动作（上报、预取下张、淡入）"},{name:"transformProps",when:"渲染前链式改写图片 props",description:"补 sizes / 占位色 / 解码策略等"}],Ab=[],Bb="只读取 context 字段（props / state / data），不调用上下文方法",Ub=[{name:"enabled",type:"boolean",default:"true",description:"是否启用空闲解码"},{name:"timeoutMs",type:"number",default:"600",description:"最长等待空闲的兜底时间(ms)"}],Fb=`import { LazyLoadImageCore, createDecodeAfterIdlePlugin, withPlugins } from "vane-lazy-image";

const LazyImage = withPlugins(LazyLoadImageCore, [
  createDecodeAfterIdlePlugin({ enabled: true, timeoutMs: 1000 }),
]);

<LazyImage src="https://picsum.photos/seed/decode/1200/800" alt="空闲解码示例" />`,Wb=[{name:"默认空闲解码",description:"成功后于空闲时段执行 decode，并设置 decoding=async。",src:"https://picsum.photos/seed/decode/1200/800",config:{}},{name:"自定义超时",description:"放宽最长等待空闲时间到 1000ms。",src:"https://picsum.photos/seed/decode-timeout/1200/800",config:{timeoutMs:1e3}}],Vb=["成功后 requestIdleCallback 内调用 img.decode()",'自动设置 decoding="async"',"requestIdleCallback 不可用时回退 setTimeout"],Hb=["图片密集型信息流防止解码卡顿","首屏后延迟解码，优先保证交互响应"],Gb=["timeoutMs 控制最长等待空闲的兜底时间","decode 失败被静默忽略，不影响显示"],qb={name:Ob,description:jb,since:Mb,tags:Tb,events:Nb,methods:Ab,methodsNote:Bb,config:Ub,example:Fb,examples:Wb,features:Vb,useCases:Hb,notes:Gb},Qb="DepthMapPlugin",Kb="3D 视差深度效果：鼠标跟随的倾斜 / 视差 / 浮动 / 3D 旋转，带光泽与阴影，纯 CSS transforms 无依赖。",Yb="2.0.0",Xb=["interaction","视觉效果与交互","visual"],Zb=[{name:"renderOverlay",when:"每次渲染，覆盖在图片容器之上",description:"骨架屏、错误占位、水印、加载动画"}],Jb=[],eP="只读取 context 字段（props / state / data），不调用上下文方法",tP=[{name:"style",type:'"tilt" | "parallax" | "float" | "rotate-3d"',default:'"tilt"',description:"深度效果样式"},{name:"intensity",type:"number",default:"0.5",description:"效果强度 0~1"},{name:"maxTilt",type:"number",default:"20",description:"最大倾斜角度"},{name:"enablePerspective",type:"boolean",default:"true",description:"启用透视效果"},{name:"perspective",type:"number",default:"1000",description:"透视距离（px）"},{name:"enableGlare",type:"boolean",default:"true",description:"启用光泽效果"},{name:"glareColor",type:"string",default:'"rgba(255, 255, 255, 0.3)"',description:"光泽颜色"},{name:"glareOpacity",type:"number",default:"0.5",description:"光泽不透明度 0~1"},{name:"enableShadow",type:"boolean",default:"true",description:"启用阴影"},{name:"transitionDuration",type:"number",default:"300",description:"过渡时长（毫秒）"},{name:"resetOnLeave",type:"boolean",default:"true",description:"离开时重置"}],nP=`// 1. 鼠标跟随倾斜
const DepthImage = withPlugins(LazyLoadImageCore, [
  createDepthMapPlugin({ style: "tilt", maxTilt: 15, enableGlare: true }),
]);

// 2. 在产品展示中使用
<DepthImage
  src="https://picsum.photos/id/122/400/300"
  alt="产品"
  style={{ width: 240, height: 160, borderRadius: 8 }}
/>;

// 3. 3D 旋转 + 阴影
createDepthMapPlugin({
  style: "rotate-3d",
  intensity: 0.7,
  enableShadow: true,
  resetOnLeave: true,
});`,oP=[{name:"tilt 倾斜（鼠标跟随）",description:"鼠标移动时图片随指针方向倾斜，带光泽高光，质感类似实体卡片。",src:"https://picsum.photos/id/122/400/300",config:{style:"tilt",maxTilt:15,intensity:.5,enableGlare:!0}},{name:"parallax 视差",description:"图片内部图层随鼠标产生位移差，营造纵深感。",src:"https://picsum.photos/id/129/400/300",config:{style:"parallax",intensity:.6,enablePerspective:!0,perspective:1e3}},{name:"rotate-3d 3D 旋转",description:"围绕多轴的 3D 旋转，配合阴影更具立体感。",src:"https://picsum.photos/id/133/400/300",config:{style:"rotate-3d",intensity:.7,enableShadow:!0,resetOnLeave:!0}},{name:"float 浮动",description:"轻微持续上下浮动的呼吸感，适合装饰性产品图。",src:"https://picsum.photos/id/142/400/300",config:{style:"float",intensity:.4,enableGlare:!1}}],rP=["4 种深度样式（倾斜 / 视差 / 浮动 / 3D 旋转）","鼠标跟随实时响应","光泽（glare）与阴影可开关并调参","透视距离可调","离开时一键重置（resetOnLeave）","纯 CSS transforms，无依赖"],iP=["产品 3D 展示","卡片悬浮交互","3D 封面 / 海报","作品集与个人主页","落地页英雄区","会员 / 旗舰商品位"],sP=["效果依赖鼠标移动产生视差，静态截图仅为初始平面态；移动设备体验有限，建议作为渐进增强。","intensity 与 maxTilt 控制幅度，强度过高在低端设备上可能引起卡顿，可按需下调。"],aP={name:Qb,description:Kb,since:Yb,tags:Xb,events:Zb,methods:Jb,methodsNote:eP,config:tP,example:nP,examples:oP,features:rP,useCases:iP,notes:sP},lP="DominantColorPlugin",cP="主色占位：在加载完成前用指定颜色或 LQIP 采样平均色填充容器背景，减少白屏、提升视觉连贯性。",uP="2.0.0",dP=["other","视觉","占位"],pP=[{name:"onMount",when:"组件挂载完成、插件注册后执行一次（返回的清理函数在 manager.clear 时逆序执行）",description:"初始化副作用：注册监听、起定时器、建观察器；必须返回清理函数或配合 onUnmount 收尾"}],mP=[],gP="只读取 context 字段（props / state / data），不调用上下文方法",fP=[{name:"color",type:"string",default:"rgba(0,0,0,0.06)",description:"指定背景色（未提供时尝试从 lqip 采样）"},{name:"lqipSrc",type:"string | ((src) => string)",default:"undefined",description:"低清预览图地址或生成函数（用于采样平均色）"}],hP=`const ColorImage = withPlugins(LazyLoadImageCore, [
  createDominantColorPlugin({
    lqipSrc: (src) => src + "?w=20", // 用小图采样主色
  }),
]);

<ColorImage src="https://picsum.photos/id/1015/500/300" alt="主色占位示例" />;`,yP=[{name:"指定背景色",description:"直接指定浅灰背景，加载前不白屏。",src:"https://picsum.photos/id/1015/500/300",config:{color:"#e9ecef"}},{name:"LQIP 采样主色",description:"用小图采样平均色填充（跨域图需 CORS，失败则回退默认色）。",src:"https://picsum.photos/id/1021/500/300",config:{lqipSrc:"https://picsum.photos/id/1021/20/20"}},{name:"暖色背景",description:"指定暖色背景，营造色调一致感。",src:"https://picsum.photos/id/1026/500/300",config:{color:"#f8d7da"}}],vP=["指定颜色占位","LQIP 采样平均色","加载前不白屏","采样失败安全回退","可关闭"],wP=["相册/画廊占位","Pinterest 风布局","慢网白屏治理","品牌色调统一"],xP=["lqipSrc 采样需要图片服务器配置 CORS 头；跨域失败会自动回退到 color（默认浅灰），不影响加载。"],bP={name:lP,description:cP,since:uP,tags:dP,events:pP,methods:mP,methodsNote:gP,config:fP,example:hP,examples:yP,features:vP,useCases:wP,notes:xP},PP="DownloadButtonPlugin",$P="下载按钮：为图片添加一键下载功能，支持多位置、自定义样式、悬停显示与生命周期回调。",SP="2.0.0",CP=["ecommerce","电商核心"],LP=[{name:"renderOverlay",when:"每次渲染，覆盖在图片容器之上",description:"骨架屏、错误占位、水印、加载动画"}],kP=[],IP="只读取 context 字段（props / state / data），不调用上下文方法",_P=[{name:"filename",type:"string",default:"undefined",description:"下载文件名"},{name:"position",type:'"top-left" | "top-right" | "bottom-left" | "bottom-right"',default:'"top-right"',description:"按钮位置"},{name:"size",type:'"small" | "medium" | "large"',default:'"medium"',description:"按钮尺寸"},{name:"buttonStyle",type:"React.CSSProperties",default:"{}",description:"自定义按钮样式"},{name:"showOnHover",type:"boolean",default:"false",description:"仅悬停时显示"},{name:"onBeforeDownload",type:"(src) => void | Promise<void>",default:"undefined",description:"下载前回调（可做权限校验）"},{name:"onDownloadSuccess",type:"(filename) => void",default:"undefined",description:"下载成功回调"},{name:"onDownloadError",type:"(error) => void",default:"undefined",description:"下载失败回调"},{name:"customIcon",type:"ReactNode",default:"undefined",description:"自定义图标"},{name:"tooltipText",type:"string",default:'"下载图片"',description:"提示文案"}],EP=`// 1. 右上角下载按钮，成功后回调
const DownloadImage = withPlugins(LazyLoadImageCore, [
  createDownloadButtonPlugin({
    position: "top-right",
    filename: "my-image.jpg",
    onDownloadSuccess: (name) => console.log(name),
  }),
]);

// 2. 仅悬停时显示下载按钮
createDownloadButtonPlugin({
  position: "top-left",
  size: "large",
  showOnHover: true,
  tooltipText: "点击下载高清图片",
});

// 3. 在组件中使用
<DownloadImage src="https://picsum.photos/id/1015/500/300" alt="可下载图片" />;`,RP=[{name:"基础下载功能",description:"点击右上角下载按钮，保存图片（文件名 my-image.jpg）。",src:"https://picsum.photos/id/1015/500/300",config:{filename:"my-image.jpg",position:"top-right",size:"medium"}},{name:"悬停显示按钮",description:"默认隐藏，鼠标悬停图片左上角出现大号下载按钮。",src:"https://picsum.photos/id/1018/500/300",config:{position:"top-left",size:"large",showOnHover:!0,tooltipText:"点击下载高清图片"}},{name:"自定义位置和大小",description:"左下角小号绿色下载按钮。",src:"https://picsum.photos/id/1019/500/300",config:{position:"bottom-left",size:"small",buttonStyle:{backgroundColor:"rgba(52, 199, 89, 0.9)"}}},{name:"自定义按钮样式",description:"右下角红色方形下载按钮。",src:"https://picsum.photos/id/1020/500/300",config:{position:"bottom-right",size:"medium",buttonStyle:{backgroundColor:"rgba(255, 59, 48, 0.9)",borderRadius:"8px",border:"none"},tooltipText:"下载原图"}},{name:"下载生命周期回调",description:"下载前后触发回调（可权限校验 / 统计上报）；示例中省略函数，见用法示例。",src:"https://picsum.photos/id/1021/500/300",config:{filename:"premium-photo.jpg",position:"top-right",size:"large"}},{name:"自定义下载图标",description:"示例以默认图标呈现；可用 customIcon 替换为自定义图标。",src:"https://picsum.photos/id/1022/500/300",config:{position:"top-right",size:"medium",buttonStyle:{backgroundColor:"rgba(88, 86, 214, 0.9)"}}}],zP=["下载提示：下载需要图片 URL 支持 CORS，否则可能失败；跨域图片需服务器设置 Access-Control-Allow-Origin；filename 应包含合适的文件扩展名（.jpg / .png 等）；大文件下载时会有短暂延迟，建议显示加载状态；移动端下载体验可能因浏览器而异；可在 onBeforeDownload 中进行权限检查。"],DP=["一键下载（点击按钮即可下载图片）","多位置支持（4 个角落）","自定义样式（大小 / 颜色 / 形状）","悬停显示模式","生命周期回调（下载前 / 后 / 失败）","自定义图标"],OP=["图片网站（用户下载高清图）","设计平台（下载设计作品）","新闻媒体","电商平台（下载商品图片）","在线教育（下载教学资料）","企业官网（下载宣传图）"],jP={name:PP,description:$P,since:SP,tags:CP,events:LP,methods:kP,methodsNote:IP,config:_P,example:EP,examples:RP,notes:zP,features:DP,useCases:OP},MP="ErrorBadgePlugin",TP="错误徽标：图片加载失败（或回退成功后）在指定角落显示错误徽标，便于在大批量图片列表中快速定位失败项。",NP="2.0.0",AP=["error","错误处理","错误反馈"],BP=[{name:"onLoadError",when:"加载失败（网络错误、解码失败、超时）",description:"返回 true 表示错误已被处理（如切换备用源），否则继续走默认降级"},{name:"renderOverlay",when:"每次渲染，覆盖在图片容器之上",description:"骨架屏、错误占位、水印、加载动画"}],UP=[],FP="只读取 context 字段（props / state / data），不调用上下文方法",WP=[{name:"text",type:"string | ((context: LazyImageContext) => string)",default:'"Error"',description:"徽标文字；支持函数按 ctx 动态生成（函数型仅顶层示例展示）"},{name:"position",type:'"top-left" | "top-right" | "bottom-left" | "bottom-right" | "center"',default:'"top-right"',description:"徽标定位角落"},{name:"bgColor",type:"string",default:'"rgba(220, 53, 69, 0.85)"',description:"背景色"},{name:"color",type:"string",default:'"#fff"',description:"文字颜色"},{name:"fontSize",type:"number",default:"12",description:"字号(px)"},{name:"padding",type:"string",default:'"2px 6px"',description:"内边距"},{name:"borderRadius",type:"number",default:"4",description:"圆角(px)"},{name:"zIndex",type:"number",default:"100",description:"层级，默认较高避免被其它覆盖层遮挡"},{name:"persistAfterFallback",type:"boolean",default:"true",description:"回退图加载成功后是否仍显示徽标"}],VP=`import { LazyLoadImageCore, createErrorBadgePlugin, withPlugins } from "vane-lazy-image";

const LazyImage = withPlugins(LazyLoadImageCore, [
  createErrorBadgePlugin({
    text: (ctx) => \`加载失败: \${ctx.src}\`,
    position: "bottom-right",
    bgColor: "rgba(220,53,69,0.9)",
  }),
]);

// 故意触发失败以观察徽标
<LazyImage src="https://invalid.example.com/x.png" alt="错误徽标示例" />`,HP=[{name:"默认错误徽标",description:"加载失败后，在右上角显示红底 Error 徽标。",src:"https://invalid.example.com/error-badge.png",config:{}},{name:"自定义文案与位置",description:"底部右侧、深色背景 + 高亮文字的失败徽标。",src:"https://invalid.example.com/error-badge-2.png",config:{text:"图片加载失败",position:"bottom-right",bgColor:"rgba(0,0,0,0.7)",color:"#ffd166"}}],GP=["加载或回退失败后，在图片角落显示错误徽标","支持 5 种定位（四角 + 居中）与背景/文字/字号/圆角定制","persistAfterFallback：回退图已显示仍保留徽标，便于排查","通过 sharedData 标记 had-error，与 FallbackImage / RetryOnError / ErrorOverlay 联动"],qP=["图片墙 / 商品列表快速识别加载失败项","大批量图片加载健康度可视化"],QP=["text 支持函数型 (ctx) => string，但函数无法进入静态预览配置，仅顶层示例展示","默认 zIndex=100，高于多数覆盖层，避免被遮挡","与 ErrorOverlay 区别：徽标是轻量角标，覆盖层是整图遮罩"],KP={name:MP,description:TP,since:NP,tags:AP,events:BP,methods:UP,methodsNote:FP,config:WP,example:VP,examples:HP,features:GP,useCases:qP,notes:QP},YP="ErrorOverlayPlugin",XP="错误覆盖层：图片加载失败时显示半透明遮罩与可选『重试』按钮，引导用户手动重试，适用于商品主图等关键图。",ZP="2.0.0",JP=["error","错误处理","错误反馈","重试"],e$=[{name:"renderOverlay",when:"每次渲染，覆盖在图片容器之上",description:"骨架屏、错误占位、水印、加载动画"}],t$=[],n$="只读取 context 字段（props / state / data），不调用上下文方法",o$=[{name:"message",type:"string | ((context: LazyImageContext) => string)",default:"undefined（回退『加载失败』）",description:"遮罩提示文案；支持函数按 ctx 动态生成（函数型仅顶层示例展示）"},{name:"background",type:"string",default:'"rgba(220, 53, 69, 0.18)"',description:"遮罩背景色"},{name:"color",type:"string",default:'"#b00020"',description:"文字颜色"},{name:"zIndex",type:"number",default:"10",description:"遮罩层级"},{name:"showRetry",type:"boolean",default:"true",description:"是否显示重试按钮"},{name:"retryText",type:"string",default:'"重试"',description:"重试按钮文字"},{name:"persistAfterFallback",type:"boolean",default:"true",description:"回退图加载成功后是否仍显示遮罩"}],r$=`import { LazyLoadImageCore, createErrorOverlayPlugin, withPlugins } from "vane-lazy-image";

const LazyImage = withPlugins(LazyLoadImageCore, [
  createErrorOverlayPlugin({
    message: (ctx) => \`图片加载失败：\${ctx.src}\`,
    retryText: "点我重试",
  }),
]);

// 故意触发失败以观察遮罩与重试按钮
<LazyImage src="https://invalid.example.com/x.png" alt="错误覆盖层示例" />`,i$=[{name:"默认重试遮罩",description:"失败时整图遮罩 + 重试按钮（默认文案『重试』）。",src:"https://invalid.example.com/error-overlay.png",config:{retryText:"重试"}},{name:"自定义文案与配色",description:"深色遮罩 + 白色文字 + 自定义提示文案。",src:"https://invalid.example.com/error-overlay-2.png",config:{message:"图片暂时无法加载",background:"rgba(0,0,0,0.4)",color:"#fff"}}],s$=["失败时整图半透明遮罩 + 可选重试按钮","重试通过 cache-bust 参数（?retry=时间戳）重新请求，绕过缓存","自定义文案 / 背景 / 文字色 / 层级","persistAfterFallback：回退后仍显示遮罩"],a$=["商品主图 / 头图失败后友好提示并支持手动重试","与 RetryOnError 组合：自动重试 + 手动重试双保险"],l$=["showRetry 默认开启；message 支持函数型（仅顶层示例展示）","重试逻辑直接改写 img.src，不依赖外部状态","点击重试使用 Date.now() 做缓存破坏，确保重新发起请求"],c$={name:YP,description:XP,since:ZP,tags:JP,events:e$,methods:t$,methodsNote:n$,config:o$,example:r$,examples:i$,features:s$,useCases:a$,notes:l$},u$="ErrorTrackingPlugin",d$="错误追踪：在图片加载失败时上报失败详情（地址 / 错误信息 / 网络 / 设备 / 次数）到自定义函数或上报端点，并可显示错误计数角标，用于生产环境图片错误监控。",p$="2.0.0",m$=["error","错误处理","监控","可观测"],g$=[{name:"onLoadError",when:"加载失败（网络错误、解码失败、超时）",description:"返回 true 表示错误已被处理（如切换备用源），否则继续走默认降级"},{name:"renderOverlay",when:"每次渲染，覆盖在图片容器之上",description:"骨架屏、错误占位、水印、加载动画"}],f$=[],h$="只读取 context 字段（props / state / data），不调用上下文方法",y$=[{name:"reportEndpoint",type:"string",description:"错误上报端点（POST JSON，带 5s 超时与 keepalive）"},{name:"report",type:"(payload: any) => void",description:"自定义上报函数（与端点二选一或并存）"},{name:"showBadge",type:"boolean",default:"false",description:"是否显示错误计数角标（需显式开启）"},{name:"badgeText",type:"string",default:'"Error"',description:"角标前缀文字"},{name:"badgeColor",type:"string",default:'"#fff"',description:"角标文字色"},{name:"badgeBg",type:"string",default:'"rgba(220,53,69,0.8)"',description:"角标背景色"}],v$=`import { LazyLoadImageCore, createErrorTrackingPlugin, withPlugins } from "vane-lazy-image";

const LazyImage = withPlugins(LazyLoadImageCore, [
  createErrorTrackingPlugin({
    report: (payload) => {
      console.warn("图片加载失败", payload);
    },
    showBadge: true,
  }),
]);

// 故意触发失败以观察上报与角标
<LazyImage src="https://invalid.example.com/x.png" alt="错误追踪示例" />`,w$=[{name:"错误计数角标",description:"开启角标，失败后右上角显示累计错误次数。",src:"https://invalid.example.com/error-tracking.png",config:{showBadge:!0,badgeText:"Err"}},{name:"端点上报",description:"失败后 POST 上报到采集端点（演示端点可能 404，代码已静默忽略）。",src:"https://invalid.example.com/error-tracking-2.png",config:{reportEndpoint:"/api/img-errors",showBadge:!0}}],x$=["onLoadError 采集 src / message / network / device / 累计次数","内置 1 秒防抖，避免高频重复上报","report 自定义函数 或 reportEndpoint 端点二选一 / 并存","可选角标显示错误次数"],b$=["生产环境图片错误率监控与告警","定位经常性失败的图片源 / CDN"],P$=["showBadge 默认 false，需显式开启才显示角标","端点上报带 5s 超时与 keepalive，页面卸载也能送达","report 为函数型，无法进入静态预览配置，仅顶层示例展示"],$$={name:u$,description:d$,since:p$,tags:m$,events:g$,methods:f$,methodsNote:h$,config:y$,example:v$,examples:w$,features:x$,useCases:b$,notes:P$},S$="EventLoggerPlugin",C$="事件日志：在控制台记录图片加载全生命周期事件（before-load / load-success / load-error / enter-viewport / leave-viewport / progress），便于调试与监控。",L$="2.0.0",k$=["other","监控","调试"],I$=[{name:"onBeforeLoad",when:"发起图片请求之前",description:"返回 false 可阻断本次加载（如权限校验、占位策略）"},{name:"onLoadSuccess",when:"图片成功解码可显示时",description:"拿到最终 displaySrc 做后续动作（上报、预取下张、淡入）"},{name:"onLoadError",when:"加载失败（网络错误、解码失败、超时）",description:"返回 true 表示错误已被处理（如切换备用源），否则继续走默认降级"},{name:"onProgress",when:'加载进度更新（由 withPlugins 订阅 bus 的 "progress" 桥接）',description:"展示进度条 / 百分比；仅对支持进度上报的 loader 生效"},{name:"onEnterViewport",when:"元素进入视口（IntersectionObserver）",description:"触发懒加载、开始请求、曝光上报"},{name:"onLeaveViewport",when:"元素离开视口",description:"暂停 / 中止在途请求、回收资源"}],_$=[],E$="只读取 context 字段（props / state / data），不调用上下文方法",R$=[{name:"enabled",type:"boolean",default:"true",description:"是否启用日志"},{name:"prefix",type:"string",default:'"[LLI]"',description:"日志前缀，便于过滤"}],z$=`const LogImage = withPlugins(LazyLoadImageCore, [
  createEventLoggerPlugin({ prefix: "[IMG]" }),
]);

<LogImage src="https://picsum.photos/id/1015/500/300" alt="事件日志示例" />;`,D$=[{name:"默认日志",description:"使用默认 [LLI] 前缀记录全部事件。",src:"https://picsum.photos/id/1015/500/300",config:{enabled:!0}},{name:"自定义前缀",description:"改用 [IMG] 前缀，便于在控制台分组过滤。",src:"https://picsum.photos/id/1021/500/300",config:{prefix:"[IMG]"}},{name:"关闭日志",description:"enabled=false 时不输出任何日志。",src:"https://picsum.photos/id/1026/500/300",config:{enabled:!1}}],O$=["全生命周期事件记录","可自定义前缀","可关闭","零业务侵入"],j$=["调试加载流程","加载监控埋点","性能问题排查","教学演示"],M$=["仅用于开发/调试，生产环境建议按需关闭以避免控制台噪音。"],T$={name:S$,description:C$,since:L$,tags:k$,events:I$,methods:_$,methodsNote:E$,config:R$,example:z$,examples:D$,features:O$,useCases:j$,notes:M$},N$="ExifOrientationPlugin",A$="EXIF 方向：根据图片自带的方向信息（EXIF Orientation）自动校正显示，避免手机竖拍照片横显。",B$="2.0.0",U$=["a11y","可访问性","加载策略"],F$=[{name:"transformProps",when:"渲染前链式改写图片 props",description:"补 sizes / 占位色 / 解码策略等"}],W$=[],V$="只读取 context 字段（props / state / data），不调用上下文方法",H$=[{name:"enabled",type:"boolean",default:"true",description:"是否启用方向校正"}],G$=`const OrientImage = withPlugins(LazyLoadImageCore, [
  createExifOrientationPlugin({ enabled: true }),
]);

<OrientImage src="https://picsum.photos/id/1015/500/300" alt="方向校正示例" />;`,q$=[{name:"启用方向校正（默认）",description:"imageOrientation: from-image，跟随 EXIF 方向。",src:"https://picsum.photos/id/1015/500/300",config:{enabled:!0}},{name:"关闭校正",description:"enabled=false 时不注入方向样式。",src:"https://picsum.photos/id/1021/500/300",config:{enabled:!1}}],Q$=["按 EXIF Orientation 自动校正","imageOrientation: from-image","无需手动旋转","可关闭"],K$=["手机/相机照片","用户上传图","竖拍横显修复"],Y$=["依赖浏览器对 image-orientation: from-image 的支持，现代浏览器均已支持。"],X$={name:N$,description:A$,since:B$,tags:U$,events:F$,methods:W$,methodsNote:V$,config:H$,example:G$,examples:q$,features:Q$,useCases:K$,notes:Y$},Z$="FadeInPlugin",J$="加载完成后淡入显示，可自定义时长与缓动函数。",eS="2.0.0",tS=["visual","视觉"],nS=[{name:"onMount",when:"组件挂载完成、插件注册后执行一次（返回的清理函数在 manager.clear 时逆序执行）",description:"初始化副作用：注册监听、起定时器、建观察器；必须返回清理函数或配合 onUnmount 收尾"},{name:"onLoadSuccess",when:"图片成功解码可显示时",description:"拿到最终 displaySrc 做后续动作（上报、预取下张、淡入）"}],oS=[],rS="只读取 context 字段（props / state / data），不调用上下文方法",iS=[{name:"durationMs",type:"number",default:"400",description:"淡入时长 ms"},{name:"easing",type:"string",default:"ease",description:"缓动函数（CSS easing）"}],sS=`// 加载完成后淡入
const FadeImage = withPlugins(LazyLoadImageCore, [
  createFadeInPlugin({ durationMs: 450 }),
]);

<FadeImage src="https://picsum.photos/seed/fadein/600/400" alt="淡入" />;`,aS=[{name:"默认淡入",description:"450ms 标准 ease 淡入，干净利落。",src:"https://picsum.photos/seed/fadein-default/600/400",config:{durationMs:450}},{name:"慢速缓出",description:"800ms ease-out，让图片「缓缓浮现」。",src:"https://picsum.photos/seed/fadein-slow/600/400",config:{durationMs:800,easing:"ease-out"}}],lS=["加载成功淡入显示","时长可调","缓动函数可定制（ease / ease-out / cubic-bezier 等）","与 BlurUp 互补"],cS=["画廊 / 相册图片入场","内容型站点图片显现","与滚动进入联动的柔和出现","任意需要「渐显」的场景"],uS=["easing 接受任意 CSS timing-function 字符串。","与 Transition 不同，FadeIn 仅处理「淡入」单一维度，更简单。"],dS={name:Z$,description:J$,since:eS,tags:tS,events:nS,methods:oS,methodsNote:rS,config:iS,example:sS,examples:aS,features:lS,useCases:cS,notes:uS},pS="FallbackImagePlugin",mS="兜底图：图片加载失败时自动切换到备用图片地址，避免出现破图空白，是最基础的失败降级手段。",gS="2.0.0",fS=["network","网络","兜底","降级"],hS=[{name:"onLoadError",when:"加载失败（网络错误、解码失败、超时）",description:"返回 true 表示错误已被处理（如切换备用源），否则继续走默认降级"}],yS=[],vS="只读取 context 字段（props / state / data），不调用上下文方法",wS=[{name:"fallbackSrc",type:"string",description:'兜底图地址，建议使用始终可访问的占位图或 data URI。e.g. "/404.jpg"'}],xS=`import { LazyLoadImageCore, createFallbackImagePlugin, withPlugins } from "vane-lazy-image";

const LazyImage = withPlugins(LazyLoadImageCore, [
  createFallbackImagePlugin({ fallbackSrc: "/404.jpg" }),
]);

<LazyImage src="https://invalid.example.com/broken.png" alt="兜底图示例" />`,bS=[{name:"基础兜底图",description:"原图失败 → 自动切换到兜底图正常显示（演示用始终可访问的占位图）。",src:"https://invalid.example.com/broken.png",config:{fallbackSrc:"https://picsum.photos/seed/fallback/400/300"}}],PS=["onLoadError 直接改写 img.src 为兜底地址","标记 had-error，供 ErrorBadge 等插件联动","兜底成功后仍可配合其它错误插件展示状态"],$S=["保证任何失败都不出现破图","与错误徽标 / 追踪组合，兜底 + 可观测"],SS=["fallbackSrc 为必填；建议使用始终可访问的占位图或 data URI，避免兜底本身再失败","兜底成功后若仍有 ErrorBadge(persistAfterFallback)，可继续显示徽标便于排查"],CS={name:pS,description:mS,since:gS,tags:fS,events:hS,methods:yS,methodsNote:vS,config:wS,example:xS,examples:bS,features:PS,useCases:$S,notes:SS},LS="FavoritePlugin",kS="收藏切换（gallery 增强插件）：在工具条渲染心形按钮，绑定 context.favorited 协调态，点击切换并回调 onChange。",IS="2.1.0",_S=["gallery","图集","收藏","喜欢"],ES=[{name:"galleryToolbarArea",when:"渲染图库工具栏时",description:"缩放、下载、分享等图库级操作"}],RS=[{name:"setFavorited",signature:"ctx.setFavorited(v: boolean): void",description:"写入收藏态并触发重渲染（收藏按钮的唯一致入口）"}],zS=[{name:"onChange",type:"(favorited: boolean) => void",default:"-",description:"切换时回调（持久化/上报）"},{name:"activeColor",type:"string",default:"#ff5a5f",description:"激活态颜色"}],DS=`import { GalleryCore } from "vane-lazy-image/gallery";
import { createFavoritePlugin } from "vane-lazy-image/custom-plugins/FavoritePlugin";

<GalleryCore images={images} plugins={[createFavoritePlugin({ onChange: setFav })]} />`,OS=[{name:"收藏商品",description:"点击心形在 ♡/♥ 间切换，激活态变红；onChange 上报调用方做持久化。",config:{}}],jS=["心形切换","协调态绑定","onChange 回调","激活色可配"],MS=["商品收藏","心愿单","喜欢标记"],TS=["favorited 为 useState 协调态，切换即重渲染；不跨会话持久化（由 onChange 接管）。"],NS={name:LS,description:kS,since:IS,tags:_S,events:ES,methods:RS,config:zS,example:DS,examples:OS,features:jS,useCases:MS,notes:TS},AS="FetchLoaderPlugin",BS="fetch 流式加载器：将图片以 blob/objectURL 形式加载，支持进度上报（speed/ETA）、超时、指数退避重试、请求去重与 objectURL 自动回收。高优先级（domain priority 10），先于其他插件执行。",US="2.0.0",FS=["loading","加载策略"],WS=[{name:"onUnmount",when:"组件卸载前执行一次",description:"释放监听、定时器与观察器；与 onMount 成对出现，避免泄漏"},{name:"onLoad",when:"加载流程开始、需要确定最终图片地址时",description:"自定义加载逻辑，返回最终图片 URL（objectURL / dataURL / 原地址）"},{name:"onSrcChange",when:"src 变化、切换到新图时",description:"重置状态、清理旧缓存、重新进入懒加载判定"},{name:"progress",when:"流式加载进度更新时",description:"广播 { loaded, total }，桥接到 onProgress 钩子"}],VS=[],HS="只读取 context 字段（props / state / data），不调用上下文方法",GS=[{name:"enabled",type:"boolean",default:"true",description:"是否启用 fetch 加载（关闭后走浏览器默认加载）"},{name:"cacheKeyFn",type:"(src: string) => string",description:"自定义去重键，默认使用 src"},{name:"maxCacheSize",type:"number",description:"in-flight 请求缓存最大条目数"},{name:"maxControllers",type:"number",description:"AbortController 缓存上限，淘汰时自动 abort"},{name:"maxObjectUrls",type:"number",description:"objectURL 缓存上限，淘汰时自动 revokeObjectURL"},{name:"timeout",type:"number",default:"30000",description:"单次请求超时（毫秒）"},{name:"maxRetries",type:"number",default:"3",description:"最大重试次数（4xx 不重试）"},{name:"retryDelay",type:"number",default:"1000",description:"首次重试延迟（毫秒）"},{name:"retryBackoff",type:"number",default:"2",description:"重试退避倍数"}],qS=`const LazyImage = withPlugins(LazyLoadImageCore, [
  createFetchLoaderPlugin({
    timeout: 20000,    // 20s 超时
    maxRetries: 5,     // 最多重试 5 次
    retryBackoff: 2,   // 指数退避
  }),
]);`,QS=[{name:"默认 fetch 加载",description:"流式加载 + 真实进度（速度 / ETA）+ 自动去重与 objectURL 回收。",config:{timeout:3e4,maxRetries:3,retryBackoff:2}},{name:"弱网增强重试",description:"更长超时与更多重试，适合不稳定网络环境。",config:{timeout:45e3,maxRetries:6,retryDelay:1500,retryBackoff:2}}],KS=["以 fetch 把图片读为 Blob/objectURL，支持流式进度（速度 / ETA）","请求超时 + 指数退避重试（4xx 不重试）","in-flight 请求去重、AbortController / objectURL 自动回收","高优先级（domain priority 10），先于其它插件执行"],YS=["需要真实下载进度条的大图 / 原图","不稳定网络下需要重试保障"],XS=["关闭 enabled 则走浏览器默认 <img> 加载。","objectURL 由插件在卸载 / 淘汰时自动 revoke，避免内存泄漏。","cacheKeyFn 为函数，需在“用法示例”中以代码传入；静态预览使用纯配置。"],ZS={name:AS,description:BS,since:US,tags:FS,events:WS,methods:VS,methodsNote:HS,config:GS,example:qS,examples:QS,features:KS,useCases:YS,notes:XS},JS="FilterPlugin",eC="CSS 滤镜：灰度/复古/亮度/对比度/饱和度，悬停可恢复原图。",tC="2.0.0",nC=["visual","视觉"],oC=[{name:"onUnmount",when:"组件卸载前执行一次",description:"释放监听、定时器与观察器；与 onMount 成对出现，避免泄漏"},{name:"onLoadSuccess",when:"图片成功解码可显示时",description:"拿到最终 displaySrc 做后续动作（上报、预取下张、淡入）"}],rC=[],iC="只读取 context 字段（props / state / data），不调用上下文方法",sC=[{name:"filter",type:'"none" | "grayscale" | "sepia" | "brightness" | "contrast" | "saturate"',default:'"none"',description:"滤镜类型"},{name:"amount",type:"number",default:"undefined",description:"滤镜强度（多数类型 0~1）"},{name:"hover",type:"boolean",default:"false",description:"悬停时恢复原图"}],aC=`// 灰度显示，悬停恢复原彩图
const FilterImage = withPlugins(LazyLoadImageCore, [
  createFilterPlugin({
    filter: "grayscale",
    amount: 1,
    hover: true,
  }),
]);

<FilterImage src="https://picsum.photos/seed/filter/600/400" alt="滤镜" />;`,lC=[{name:"灰度 + 悬停还原",description:"默认灰度，鼠标悬停瞬间恢复彩色，制造焦点对比。",src:"https://picsum.photos/seed/filter-gray/600/400",config:{filter:"grayscale",amount:1,hover:!0}},{name:"复古暖调",description:"sepia 中度做旧，营造怀旧氛围。",src:"https://picsum.photos/seed/filter-sepia/600/400",config:{filter:"sepia",amount:.6}},{name:"高对比增强",description:"提升对比度，让画面更有张力。",src:"https://picsum.photos/seed/filter-contrast/600/400",config:{filter:"contrast",amount:1.4}}],cC=["内置 grayscale / sepia / brightness / contrast / saturate 预设","amount 控制强度","hover 模式悬停恢复原图","纯 CSS filter，零额外绘制开销"],uC=["商品列表统一灰度，hover 高亮","怀旧 / 复古风格相册","强调主体前的视觉降噪","活动主题统一调色"],dC=["hover:true 时滤镜在鼠标移入时移除、移出时恢复。","需要组合滤镜（如 contrast+saturate）或更复杂效果，可用 CustomEffectsPlugin 的 imageStyle.filter 任意写。"],pC={name:JS,description:eC,since:tC,tags:nC,events:oC,methods:rC,methodsNote:iC,config:sC,example:aC,examples:lC,features:cC,useCases:uC,notes:dC},mC="FullscreenPlugin",gC="全屏切换（gallery 增强插件）：在工具条渲染 全屏/退出 按钮，对图集根容器调用 requestFullscreen。",fC="2.1.0",hC=["gallery","图集","全屏","沉浸式"],yC=[{name:"galleryToolbarArea",when:"渲染图库工具栏时",description:"缩放、下载、分享等图库级操作"}],vC=[],wC="只读取 context 字段（props / state / data），不调用上下文方法",xC=[{name:"enterLabel",type:"string",default:"⛶ 全屏",description:"进入全屏按钮文案"},{name:"exitLabel",type:"string",default:"✕ 退出",description:"退出全屏按钮文案"}],bC=`import { GalleryCore } from "vane-lazy-image/gallery";
import { createFullscreenPlugin } from "vane-lazy-image/custom-plugins/FullscreenPlugin";

<GalleryCore images={images} plugins={[createFullscreenPlugin()]} />`,PC=[{name:"沉浸浏览",description:"点击 全屏 将整张图集容器进入全屏（含缩略条/工具条），再点退出恢复。",config:{}}],$C=["全屏/退出按钮","fullscreenchange 同步态","基于 [data-gallery-root] 锚点"],SC=["商品沉浸看款","展会大屏展示","详情页全屏浏览"],CC=["通过当前按钮向上查找 [data-gallery-root] 锚点，不依赖内核暴露 DOM 节点。"],LC={name:mC,description:gC,since:fC,tags:hC,events:yC,methods:vC,methodsNote:wC,config:xC,example:bC,examples:PC,features:$C,useCases:SC,notes:CC},kC="GalleryPlugin",IC="画廊灯箱：图片上叠加打开按钮，进入灯箱或新窗口查看原图。",_C="2.0.0",EC=["visual","视觉"],RC=[{name:"renderOverlay",when:"每次渲染，覆盖在图片容器之上",description:"骨架屏、错误占位、水印、加载动画"}],zC=[],DC="只读取 context 字段（props / state / data），不调用上下文方法",OC=[{name:"buttonText",type:"string",default:'"Open"',description:"打开按钮文案"},{name:"enableLightbox",type:"boolean",default:"true",description:"是否启用内置灯箱"},{name:"overlayZIndex",type:"number",default:"10",description:"灯箱层叠顺序"},{name:"buttonStyle",type:"React.CSSProperties",default:"{}",description:"按钮自定义样式（缩略图场景可缩成小号半透明胶囊）"}],jC=`// 点击按钮进入灯箱查看大图
const GalleryImage = withPlugins(LazyLoadImageCore, [
  createGalleryPlugin({
    buttonText: "查看大图",
    enableLightbox: true,
    overlayZIndex: 20,
  }),
]);

<GalleryImage src="https://picsum.photos/seed/gallery/600/400" alt="画廊" />;`,MC=[{name:"灯箱预览",description:"叠加「查看大图」按钮，点击进入全屏灯箱看原图。",src:"https://picsum.photos/seed/gallery-lb/600/400",config:{buttonText:"查看大图",enableLightbox:!0,overlayZIndex:20}},{name:"新窗口打开",description:"关闭内置灯箱，点击按钮以新窗口打开原图。",src:"https://picsum.photos/seed/gallery-win/600/400",config:{buttonText:"Open",enableLightbox:!1}}],TC=["覆盖层打开按钮","内置灯箱查看大图（默认开启）","可改为新窗口打开","灯箱层级可调"],NC=["电商商品图放大查看","相册 / 作品集灯箱","详情页看图","地图 / 截图放大"],AC=["enableLightbox:false 时按钮以新窗口打开原图，适合轻量场景。","灯箱层级 overlayZIndex 需高于页面其它浮层，避免被遮挡。"],BC={name:kC,description:IC,since:_C,tags:EC,events:RC,methods:zC,methodsNote:DC,config:OC,example:jC,examples:MC,features:TC,useCases:NC,notes:AC},UC="GlitchEffectPlugin",FC="故障艺术效果：赛博朋克风格 RGB 分离 / 扫描线 / 数字失真 / 混合 / 强烈五种风格，纯 CSS 无依赖，支持持续、一次性、悬停触发。",WC="2.0.0",VC=["interaction","视觉效果与交互","visual"],HC=[{name:"renderOverlay",when:"每次渲染，覆盖在图片容器之上",description:"骨架屏、错误占位、水印、加载动画"}],GC=[],qC="只读取 context 字段（props / state / data），不调用上下文方法",QC=[{name:"style",type:'"rgb-split" | "scan-lines" | "digital" | "glitch-mix" | "intense"',default:'"glitch-mix"',description:"故障风格"},{name:"continuous",type:"boolean",default:"false",description:"是否持续动画"},{name:"duration",type:"number",default:"1000",description:"一次性触发时长（毫秒）"},{name:"intensity",type:"number",default:"0.7",description:"效果强度 0~1"},{name:"triggerOnHover",type:"boolean",default:"false",description:"是否悬停触发"},{name:"rgbOffset",type:"number",default:"3",description:"RGB 分离距离（px）"},{name:"scanLineCount",type:"number",default:"30",description:"扫描线数量"},{name:"animateScanLines",type:"boolean",default:"true",description:"扫描线是否动画"}],KC=`// 1. 持续 RGB 分离故障特效
const GlitchImage = withPlugins(LazyLoadImageCore, [
  createGlitchEffectPlugin({ style: "rgb-split", continuous: true, rgbOffset: 4 }),
]);

// 2. 在封面中使用
<GlitchImage
  src="https://picsum.photos/id/1043/400/300"
  alt="封面"
  style={{ width: 240, height: 160, borderRadius: 8 }}
/>;

// 3. 悬停触发（更省电、不干扰阅读）
createGlitchEffectPlugin({ style: "glitch-mix", triggerOnHover: true });`,YC=[{name:"glitch-mix 混合（持续）",description:"混合风格默认效果，持续播放，适合做氛围封面。",src:"https://picsum.photos/id/1043/400/300",config:{style:"glitch-mix",continuous:!0,intensity:.7}},{name:"rgb-split RGB 分离（持续）",description:"红蓝通道错位产生色散，赛博朋克典型观感。",src:"https://picsum.photos/id/1062/400/300",config:{style:"rgb-split",continuous:!0,rgbOffset:5}},{name:"scan-lines 扫描线（悬停触发）",description:"叠加扫描线纹理，悬停时启动，平时保持干净。",src:"https://picsum.photos/id/1074/400/300",config:{style:"scan-lines",triggerOnHover:!0,scanLineCount:40,animateScanLines:!0}},{name:"digital 数字失真（一次性）",description:"加载/进入时触发一次数字故障，随后恢复清晰。",src:"https://picsum.photos/id/1080/400/300",config:{style:"digital",continuous:!1,duration:900}},{name:"intense 高强度",description:"强度拉满的强烈故障，冲击力强，适合标题位。",src:"https://picsum.photos/id/1084/400/300",config:{style:"intense",continuous:!0,intensity:1}}],XC=["5 种故障风格（RGB 分离 / 扫描线 / 数字失真 / 混合 / 强烈）","三种触发模式：持续 / 一次性 / 悬停触发","效果强度 0~1 可调","扫描线数量与是否动画可配","RGB 错位距离可调","纯 CSS 实现，无运行时依赖"],ZC=["赛博朋克风格站点","海报 / 专辑封面","活动营销页","游戏官网","暗色主题视觉","品牌焕新 / 限时活动"],JC=["持续动画（continuous: true）会一直占用合成层，建议对大图或大量实例谨慎使用。","阅读型内容可用 triggerOnHover: true，仅在鼠标悬停时播放，避免干扰。"],e2={name:UC,description:FC,since:WC,tags:VC,events:HC,methods:GC,methodsNote:qC,config:QC,example:KC,examples:YC,features:XC,useCases:ZC,notes:JC},t2="HotspotPlugin",n2="主图热点标注（gallery 增强插件）：在 galleryOverlay 按百分比定位可交互热点，点击弹出标签气泡（含可选链接）。",o2="2.1.0",r2=["gallery","图集","热点","标注"],i2=[{name:"galleryOverlay",when:"渲染图库大图浮层时",description:"大图视图、切换器、关闭按钮等浮层内容"}],s2=[],a2="只读取 context 字段（props / state / data），不调用上下文方法",l2=[{name:"hotspots",type:"Hotspot[]",default:"[]",description:"热点集合（图集级，所有主图共用），含 x/y(0-100)/label/href?"}],c2=`import { GalleryCore } from "vane-lazy-image/gallery";
import { createHotspotPlugin } from "vane-lazy-image/custom-plugins/HotspotPlugin";

<GalleryCore images={images} plugins={[createHotspotPlugin({ hotspots: [{ x: 50, y: 50, label: "核心卖点" }] })]} />`,u2=[{name:"圈点讲解",description:"在主图叠加红点标记，点击展开卖点文案；可带 href 跳转详情。热点坐标相对主图百分比。",config:{hotspots:[{x:40,y:35,label:"防水面料"},{x:65,y:70,label:"透气网眼"}]}}],d2=["百分比定位","点击气泡","可选链接","多热点"],p2=["商品卖点讲解","局部细节标注","区域介绍"],m2=["hotspots 为图集级（所有主图共用同一组坐标）；气泡 pointerEvents 在带 href 时可点击。"],g2={name:t2,description:n2,since:o2,tags:r2,events:i2,methods:s2,methodsNote:a2,config:l2,example:c2,examples:u2,features:d2,useCases:p2,notes:m2},f2="HoverPrefetchPlugin",h2="悬停预取：当用户将鼠标悬停（或触摸）在图片上时，提前向浏览器插入 preload 链接拉取下一张资源，实现零延迟切换。",y2="2.0.0",v2=["viewport","视口与交互","预取","性能"],w2=[{name:"onMount",when:"组件挂载完成、插件注册后执行一次（返回的清理函数在 manager.clear 时逆序执行）",description:"初始化副作用：注册监听、起定时器、建观察器；必须返回清理函数或配合 onUnmount 收尾"},{name:"onUnmount",when:"组件卸载前执行一次",description:"释放监听、定时器与观察器；与 onMount 成对出现，避免泄漏"},{name:"renderOverlay",when:"每次渲染，覆盖在图片容器之上",description:"骨架屏、错误占位、水印、加载动画"}],x2=[],b2="只读取 context 字段（props / state / data），不调用上下文方法",P2=[{name:"getNextSrc",type:"(context) => string | string[] | Promise<...>",default:"undefined",description:"计算需要预取的下一张图片（函数型，参见用法示例）"},{name:"target",type:'"container" | "image"',default:'"container"',description:"绑定事件的目标（容器或图片元素）"},{name:"trigger",type:'"mouseenter" | "touchstart"',default:'"mouseenter"',description:"触发事件类型"},{name:"as",type:'"image" | "fetch"',default:'"image"',description:"预取资源类型"},{name:"max",type:"number",default:"2",description:"预取的最大数量"},{name:"dedupe",type:"boolean",default:"true",description:"去重，避免重复插入相同的预取链接"},{name:"crossOrigin",type:'"anonymous" | "use-credentials" | null',default:'"anonymous"',description:"跨域策略"},{name:"showBadge",type:"boolean",default:"false",description:"是否在卡片上显示「已预取 N」徽标（便于观察注入效果）"},{name:"debug",type:"boolean",default:"false",description:"是否输出调试日志"}],$2=`const PrefetchImage = withPlugins(LazyLoadImageCore, [
  createHoverPrefetchPlugin({
    target: "container",
    trigger: "mouseenter",
    as: "image",
    max: 1,
    dedupe: true,
    getNextSrc: (ctx) => ctx.src, // 预取同一张，实际场景可返回下一张 URL
  }),
]);

// 在组件中使用
<PrefetchImage src="https://picsum.photos/id/1015/500/300" alt="悬停预取示例" />;`,S2=[{name:"容器悬停预取（默认）",description:"鼠标进入容器即插入 preload，预取下一张图片（默认按 URL 末尾数字派生），卡片左上角显示「已预取 N」。",src:"https://picsum.photos/id/1015/500/300",config:{target:"container",trigger:"mouseenter",max:2,as:"image",showBadge:!0}},{name:"图片悬停预取",description:"事件直接绑定在图片元素上。",src:"https://picsum.photos/id/1021/500/300",config:{target:"image",trigger:"mouseenter",max:1}},{name:"触摸预取",description:"移动端用 touchstart 触发预取。",src:"https://picsum.photos/id/1026/500/300",config:{target:"container",trigger:"touchstart",max:1}}],C2=["悬停 / 触摸即预取","容器或图片元素两种绑定目标","mouseenter / touchstart 两种触发","预取数量上限与去重","自定义跨域策略","调试日志输出"],L2=["商品画廊下一张预览","图片轮播预加载","列表项快速切换","移动端触摸预载"],k2=["必须提供 `getNextSrc` 才会真正预取；不传时只绑定事件、不产生请求。","`showBadge: true` 会在卡片上显示「已预取 N」，是验收该插件最直接的方式。"],I2={name:f2,description:h2,since:y2,tags:v2,events:w2,methods:x2,methodsNote:b2,config:P2,example:$2,examples:S2,features:C2,useCases:L2,notes:k2},_2="HoverZoomPlugin",E2="悬停放大：鼠标悬停时放大显示图片局部。",R2="2.0.0",z2=["visual","视觉"],D2=[{name:"onUnmount",when:"组件卸载前执行一次",description:"释放监听、定时器与观察器；与 onMount 成对出现，避免泄漏"},{name:"onLoadSuccess",when:"图片成功解码可显示时",description:"拿到最终 displaySrc 做后续动作（上报、预取下张、淡入）"}],O2=[],j2="只读取 context 字段（props / state / data），不调用上下文方法",M2=[{name:"scale",type:"number",default:"1.08",description:"放大倍数"},{name:"durationMs",type:"number",default:"180",description:"过渡时长 ms"}],T2=`// 悬停放大 1.15 倍
const ZoomImage = withPlugins(LazyLoadImageCore, [
  createHoverZoomPlugin({ scale: 1.15, durationMs: 180 }),
]);

<ZoomImage src="https://picsum.photos/seed/hoverzoom/600/400" alt="悬停放大" />;`,N2=[{name:"悬停放大 1.15",description:"鼠标悬停放大到 1.15 倍，180ms 平滑过渡。",src:"https://picsum.photos/seed/hoverzoom-115/600/400",config:{scale:1.15,durationMs:180}},{name:"轻微放大",description:"克制的 1.08 倍，仅给一点点呼吸感。",src:"https://picsum.photos/seed/hoverzoom-108/600/400",config:{scale:1.08,durationMs:200}}],A2=["悬停平滑放大","放大倍数可调","过渡时长可调","常与 Caption / BorderGlow 叠加"],B2=["商品图悬停预览细节","相册悬停聚焦","卡片悬停微交互","与灯箱配合的轻量前奏"],U2=["放大会溢出原尺寸，通常需父容器 overflow:hidden 裁切，仅放大中心区域。","与 Transition 的 fromScale 不同，HoverZoom 仅在 hover 时触发。"],F2={name:_2,description:E2,since:R2,tags:z2,events:D2,methods:O2,methodsNote:j2,config:M2,example:T2,examples:N2,features:A2,useCases:B2,notes:U2},W2="ImageOptimizationPlugin",V2="图片优化：自动追加宽度/质量/格式查询参数。",H2="2.0.0",G2=["network","网络"],q2=[{name:"transformProps",when:"渲染前链式改写图片 props",description:"补 sizes / 占位色 / 解码策略等"}],Q2=[],K2="只读取 context 字段（props / state / data），不调用上下文方法",Y2=[{name:"enabled",type:"boolean",default:"true",description:"是否启用 URL 改写优化"},{name:"maxWidth",type:"number",default:"1920",description:"最大宽度（像素）"},{name:"quality",type:"number",default:"0.85",description:"0..1"},{name:"format",type:'"auto" | "webp" | "jpg" | "png"',default:'"auto"',description:"目标格式；auto 交给浏览器 / CDN 协商"},{name:"widthParam",type:"string",default:'"w"',description:'例如 "w"'},{name:"qualityParam",type:"string",default:'"q"',description:'例如 "q"'},{name:"formatParam",type:"string",default:'"format"',description:'例如 "format"'}],X2=`const LazyImage = withPlugins(LazyLoadImageCore, [
  createImageOptimizationPlugin({
    maxWidth: 1200,
    quality: 0.8,
    format: "webp",
    widthParam: "w",
    qualityParam: "q",
    formatParam: "format",
  }),
]);`,Z2=[{name:"自动 webp + 约束宽度",description:"自动选择最优格式（按 Accept 协商 webp），并把宽度限制在 1200。",config:{maxWidth:1200,quality:.8,format:"webp"}},{name:"固定 jpg 中质量",description:"统一输出 jpg、质量 0.7，适合对兼容性要求较高的场景。",config:{maxWidth:800,quality:.7,format:"jpg"}}],J2=["自动追加宽度 / 质量 / 格式查询参数","format=auto 按 Accept 头协商 webp","参数名可配置以适配不同 CDN / 图片网关"],eL=["任意源图统一走优化网关（imgix / 云存储样式）","响应式不同屏宽下发不同尺寸"],tL=["需图片服务支持对应参数，否则仅作为普通查询参数透传。","与 DataSaver 叠加时，省流质量会进一步覆盖此处质量。","format=auto 依赖浏览器 Accept 头，无需手动指定。"],nL={name:W2,description:V2,since:H2,tags:G2,events:q2,methods:Q2,methodsNote:K2,config:Y2,example:X2,examples:Z2,features:J2,useCases:eL,notes:tL},oL="IndicatorPlugin",rL="圆点指示器（gallery 增强插件）：在工具条渲染圆点，点击第 N 点跳转到对应主图。",iL="2.1.0",sL=["gallery","图集","指示点","进度"],aL=[{name:"galleryToolbarArea",when:"渲染图库工具栏时",description:"缩放、下载、分享等图库级操作"}],lL=[{name:"setActiveIndex",signature:"ctx.setActiveIndex(i: number): void",description:"切换图库当前激活图索引，并联动缩略图与预加载"}],cL=[{name:"size",type:"number",default:"8",description:"圆点直径（px）"},{name:"gap",type:"number",default:"6",description:"圆点间距（px）"},{name:"activeColor",type:"string",default:"#2b7de9",description:"选中圆点颜色"},{name:"idleColor",type:"string",default:"rgba(0,0,0,0.25)",description:"未选中圆点颜色"}],uL=`import { GalleryCore } from "vane-lazy-image/gallery";
import { createIndicatorPlugin } from "vane-lazy-image/custom-plugins/IndicatorPlugin";

<GalleryCore images={images} plugins={[createIndicatorPlugin()]} />`,dL=[{name:"基础指示点",description:"圆点显示位置进度，点击跳转。",config:{}}],pL=["圆点指示器","点击跳转","选中态高亮"],mL=["电商商品图集","轮播进度","相册"],gL=["与 ThumbSync 缩略条互补：缩略条看缩略图、圆点看位置进度。"],fL={name:oL,description:rL,since:iL,tags:sL,events:aL,methods:lL,config:cL,example:uL,examples:dL,features:pL,useCases:mL,notes:gL},hL="InventoryStatusPlugin",yL="库存状态：实时显示商品库存状态（有货/低库存/缺货/预订），支持自动刷新和低库存预警。",vL="2.0.0",wL=["ecommerce","电商核心"],xL=[{name:"renderOverlay",when:"每次渲染，覆盖在图片容器之上",description:"骨架屏、错误占位、水印、加载动画"}],bL=[],PL="只读取 context 字段（props / state / data），不调用上下文方法",$L=[{name:"status",type:'"in-stock" | "out-of-stock" | "low-stock" | "pre-order"',default:'"in-stock"',description:"初始库存状态"},{name:"stockCount",type:"number",default:"undefined",description:"库存数量"},{name:"lowStockThreshold",type:"number",default:"10",description:"低库存阈值"},{name:"showBadge",type:"boolean",default:"true",description:"是否显示角标"},{name:"autoRefresh",type:"boolean",default:"false",description:"是否自动刷新库存"},{name:"refreshInterval",type:"number",default:"30000",description:"刷新间隔（毫秒）"},{name:"fetchStock",type:"() => Promise<{ status?; count? }>",default:"undefined",description:"自定义库存获取函数"},{name:"onStatusChange",type:"(status) => void",default:"undefined",description:"状态变更回调"},{name:"position",type:'"top-left" | "top-right" | "bottom-left" | "bottom-right"',default:'"top-right"',description:"角标位置"},{name:"style",type:"React.CSSProperties",default:"{}",description:"自定义叠加样式"}],SL=`// 1. 静态库存状态
const StockImage = withPlugins(LazyLoadImageCore, [
  createInventoryStatusPlugin({ status: "low-stock", stockCount: 5 }),
]);

// 2. 自动刷新库存（定时拉取最新数量）
createInventoryStatusPlugin({
  status: "in-stock",
  stockCount: 50,
  autoRefresh: true,
  refreshInterval: 5000,
  fetchStock: async () => {
    const res = await fetch("/api/products/123/stock");
    return res.json(); // { status, count }
  },
});

// 3. 在组件中使用
<StockImage src="https://picsum.photos/id/164/280/280" alt="商品图" />;`,CL=[{name:"有货（100 件）",description:"绿色角标，显示库存数量。",src:"https://picsum.photos/id/152/280/280",config:{status:"in-stock",stockCount:100,showBadge:!0,position:"top-right"}},{name:"库存紧张（5 件）",description:"低于阈值 → 橙色预警角标。",src:"https://picsum.photos/id/164/280/280",config:{status:"low-stock",stockCount:5,lowStockThreshold:10,showBadge:!0,position:"top-right"}},{name:"缺货",description:"红色缺货角标。",src:"https://picsum.photos/id/177/280/280",config:{status:"out-of-stock",stockCount:0,showBadge:!0,position:"top-right"}},{name:"预订",description:"蓝色预订角标。",src:"https://picsum.photos/id/183/280/280",config:{status:"pre-order",showBadge:!0,position:"top-right"}},{name:"自动刷新库存（每 5 秒）",description:"通过 fetchStock 定时刷新状态（示例中省略函数，可配 interval）。",src:"https://picsum.photos/id/225/400/300",config:{status:"in-stock",stockCount:50,showBadge:!0,autoRefresh:!0,refreshInterval:5e3,position:"top-right"}}],LL=["4 种库存状态：有货 / 低库存 / 缺货 / 预订","显示实时库存数量","低库存阈值预警","自动刷新库存（可配置间隔）","库存变更回调通知","颜色编码（绿=有货 / 橙=低库存 / 红=缺货 / 蓝=预订）"],kL=["电商产品列表页","库存管理系统","在线商城首页","门票 / 课程售卖","限时抢购活动"],IL=["`stockCount <= lowStockThreshold` 时会自动归为「库存紧张」，无需手动改 `status`。","`autoRefresh` 需配合 `refreshInterval` 与 `fetchStock` 才有意义，静态示例页不会轮询。"],_L={name:hL,description:yL,since:vL,tags:wL,events:xL,methods:bL,methodsNote:PL,config:$L,example:SL,examples:CL,features:LL,useCases:kL,notes:IL},EL="LQIPPlugin",RL="低清预览（LQIP）：在清晰图加载期间叠加模糊的小图作为占位，加载完成后自动隐藏，实现渐进式加载体验。",zL="2.0.0",DL=["other","视觉","占位","渐进加载"],OL=[{name:"renderOverlay",when:"每次渲染，覆盖在图片容器之上",description:"骨架屏、错误占位、水印、加载动画"}],jL=[],ML="只读取 context 字段（props / state / data），不调用上下文方法",TL=[{name:"lqipSrc",type:"string | ((src) => string)",default:"undefined",description:"低清预览图地址或生成函数"},{name:"blur",type:"number",default:"12",description:"模糊半径(px)"},{name:"opacity",type:"number",default:"1",description:"不透明度(0~1)"},{name:"zIndex",type:"number",default:"2",description:"叠加层级"}],NL=`const LqipImage = withPlugins(LazyLoadImageCore, [
  createLqipPlugin({ lqipSrc: (src) => src + "?w=20", blur: 14 }),
]);

<LqipImage src="https://picsum.photos/id/1015/500/300" alt="LQIP 示例" />;`,AL=[{name:"模糊小图占位",description:"14px 模糊小图作为加载期占位。",src:"https://picsum.photos/id/1015/500/300",config:{lqipSrc:"https://picsum.photos/id/1015/20/20",blur:14}},{name:"低不透明度",description:"降低占位图不透明度，弱化视觉存在。",src:"https://picsum.photos/id/1021/500/300",config:{lqipSrc:"https://picsum.photos/id/1021/20/20",blur:12,opacity:.6}},{name:"清晰后淡出",description:"加载完成自动隐藏模糊层，过渡到清晰图。",src:"https://picsum.photos/id/1026/500/300",config:{lqipSrc:"https://picsum.photos/id/1026/20/20",blur:16}}],BL=["模糊低清占位","可调模糊/透明度/层级","加载完成自动隐藏","支持函数/字符串来源","渐进式加载"],UL=["渐进式图片加载","慢网占位","画廊/相册","提升感知性能"],FL=["lqipSrc 为函数型配置，静态预览使用字符串小图；函数用法见用法示例。"],WL={name:EL,description:RL,since:zL,tags:DL,events:OL,methods:jL,methodsNote:ML,config:TL,example:NL,examples:AL,features:BL,useCases:UL,notes:FL},VL="LocalizationPlugin",HL="国际化：根据用户语言环境自动切换图片，支持手动指定、自动检测、自定义检测函数与后备图片。",GL="2.0.0",qL=["ecommerce","电商核心"],QL=[{name:"onLoad",when:"加载流程开始、需要确定最终图片地址时",description:"自定义加载逻辑，返回最终图片 URL（objectURL / dataURL / 原地址）"}],KL=[],YL="只读取 context 字段（props / state / data），不调用上下文方法",XL=[{name:"localeMap",type:"Record<string, string>",default:"undefined",description:"语言 → 图片 URL 映射"},{name:"defaultLocale",type:"string",default:'"en"',description:"默认语言（后备）"},{name:"currentLocale",type:"string",default:"undefined",description:"手动指定当前语言"},{name:"autoDetect",type:"boolean",default:"true",description:"是否自动检测浏览器语言"},{name:"detectLocale",type:"() => string",default:"undefined",description:"自定义语言检测函数"},{name:"fallbackSrc",type:"string",default:"undefined",description:"最终后备图片 URL"}],ZL=`// 1. 按浏览器语言自动切换图片
const I18nImage = withPlugins(LazyLoadImageCore, [
  createLocalizationPlugin({
    localeMap: {
      en: "https://cdn.example.com/en.jpg",
      zh: "https://cdn.example.com/zh.jpg",
    },
    autoDetect: true,
    defaultLocale: "en",
  }),
]);

// 2. 手动指定语言（不自动检测）
createLocalizationPlugin({
  localeMap: { en: "https://cdn.example.com/en.jpg", zh: "https://cdn.example.com/zh.jpg" },
  currentLocale: "zh",
  autoDetect: false,
});

// 3. 在组件中使用
<I18nImage src="https://picsum.photos/id/1015/500/300" alt="多语言图片" />;`,JL=[{name:"手动切换语言",description:"手动指定 currentLocale 展示对应语言图片（此处以 en 为例）。",src:"https://picsum.photos/id/1015/500/300",config:{localeMap:{en:"https://picsum.photos/id/1015/500/300",zh:"https://picsum.photos/id/1016/500/300",ja:"https://picsum.photos/id/1018/500/300",ko:"https://picsum.photos/id/1019/500/300"},currentLocale:"en",autoDetect:!1,defaultLocale:"en"}},{name:"自动检测浏览器语言",description:"根据浏览器语言自动选择图片（支持 en/zh/fr/de/es）。",src:"https://picsum.photos/id/1020/500/300",config:{localeMap:{en:"https://picsum.photos/id/1020/500/300",zh:"https://picsum.photos/id/1021/500/300",fr:"https://picsum.photos/id/1022/500/300",de:"https://picsum.photos/id/1023/500/300",es:"https://picsum.photos/id/1024/500/300"},autoDetect:!0,defaultLocale:"en"}},{name:"自定义语言检测",description:"通过 detectLocale() 从 localStorage 读取偏好（示例中简写为自动检测）。",src:"https://picsum.photos/id/1025/500/300",config:{localeMap:{en:"https://picsum.photos/id/1025/500/300",zh:"https://picsum.photos/id/1026/500/300",ja:"https://picsum.photos/id/1027/500/300"},defaultLocale:"en",autoDetect:!0}},{name:"后备图片机制",description:"请求的语言（ru）不在映射中 → 显示 fallbackSrc 后备图片。",src:"https://picsum.photos/id/1030/500/300",config:{localeMap:{en:"https://picsum.photos/id/1028/500/300",zh:"https://picsum.photos/id/1029/500/300"},currentLocale:"ru",defaultLocale:"en",fallbackSrc:"https://picsum.photos/id/1030/500/300"}}],ek=["最佳实践：始终提供 defaultLocale 作为后备；localeMap 至少包含常用语言（en、zh 等）；图片 URL 应指向稳定可访问的资源；建议使用 CDN 加速不同地区的图片加载；可结合用户设置和浏览器检测；开发环境建议打开 console 查看语言检测日志。"],tk=["多语言支持（任意语言环境）","自动检测浏览器语言","默认回退语言","自定义检测函数","后备机制（最终后备图片 URL）","动态切换（运行时切换语言）"],nk=["国际化网站","品牌宣传","多语言 App","电商平台（商品本地化展示）","新闻媒体","在线教育"],ok={name:VL,description:HL,since:GL,tags:qL,events:QL,methods:KL,methodsNote:YL,config:XL,example:ZL,examples:JL,notes:ek,features:tk,useCases:nk},rk="MemoryPressureAbortPlugin",ik="内存压力降级 + 离开中止（v2 真实实现）：低内存 / 移动端 / 省流时把图片重写为低清版本；离开视口且仍在加载时，调用 context.reset() 真正取消在途元素加载，回收内存。",sk="2.0.0",ak=["loading","加载策略","降质","中止","低端设备"],lk=[{name:"onLoad",when:"加载流程开始、需要确定最终图片地址时",description:"自定义加载逻辑，返回最终图片 URL（objectURL / dataURL / 原地址）"},{name:"onLeaveViewport",when:"元素离开视口",description:"暂停 / 中止在途请求、回收资源"}],ck=[{name:"reset",signature:"ctx.reset(): void",description:"重置到初始状态（清空错误与进度，不主动重新发起加载）"}],uk=[{name:"enabled",type:"boolean",default:"true",description:"是否启用"},{name:"deviceMemoryThreshold",type:"number",default:"4",description:"设备内存 ≤ 该阈值(GB)时启用降质"},{name:"preferOnMobile",type:"boolean",default:"true",description:"移动端或省流模式时强制启用降质"},{name:"lowWidth",type:"number",default:"640",description:"重写到的低清晰度宽度参数"},{name:"abortOnLeave",type:"boolean",default:"true",description:"离开视口且仍在加载时，是否中止在途加载（context.reset）"}],dk=`import { LazyLoadImageCore, createMemoryPressureAbortPlugin, withPlugins } from "vane-lazy-image";

const LazyImage = withPlugins(LazyLoadImageCore, [
  // 命中压力条件时降质；用户滑走仍在加载的图会被中止
  createMemoryPressureAbortPlugin({ lowWidth: 480 }),
]);

<LazyImage src="https://picsum.photos/seed/mem/1200/800" alt="内存压力降级示例" />`,pk=[{name:"默认降级 + 离开中止",description:"低内存/移动端/省流命中即低清；离开视口且在加载中的图会被 context.reset 取消。",src:"https://picsum.photos/seed/mem/1200/800",config:{}},{name:"激进降质",description:"更低宽度 + 移动端强制降质。",src:"https://picsum.photos/seed/mem-aggressive/1200/800",config:{lowWidth:320,deviceMemoryThreshold:8,preferOnMobile:!0}},{name:"仅降质不中止",description:"abortOnLeave=false，只做低清重写，不在离开时取消加载。",src:"https://picsum.photos/seed/mem-noabort/1200/800",config:{abortOnLeave:!1}}],mk=["三条件任一即触发低清重写（onLoad 返回改写 URL）","unsplash / 360buy 优化 w 参数；通用源附加 ?w&auto=format&fit=crop","离开视口且在加载 → context.reset() 真正取消元素在途加载","abortOnLeave 可开关"],gk=["低端设备防 OOM（降质）","快速滑动列表回收在途请求（中止）","弱网 / 省流节省流量"],fk=["中止通过 context.reset() 移除 <img> 元素来取消其下载，是图片元素层面的真实中止；若使用 FetchLoaderPlugin，可在 fetch 层进一步中断。","降质判定依赖 navigator.deviceMemory 与 deviceInfo.type。"],hk={name:rk,description:ik,since:sk,tags:ak,events:lk,methods:ck,config:uk,example:dk,examples:pk,features:mk,useCases:gk,notes:fk},yk="MorphPlugin",vk="形变过渡效果：圆角/缩放/旋转/倾斜/弹性/液态等多种形变动画，纯 CSS transforms，支持加载触发、悬停触发与持续动画。",wk="2.0.0",xk=["interaction","视觉效果与交互","visual"],bk=[{name:"onLoadSuccess",when:"图片成功解码可显示时",description:"拿到最终 displaySrc 做后续动作（上报、预取下张、淡入）"}],Pk=[],$k="只读取 context 字段（props / state / data），不调用上下文方法",Sk=[{name:"type",type:'"circle-to-square" | "square-to-circle" | "rounded-corners" | "scale-morph" | "rotate-morph" | "skew-morph" | "elastic" | "liquid" | "custom"',default:'"elastic"',description:"形变类型"},{name:"duration",type:"number",default:"800",description:"持续时间（毫秒）"},{name:"delay",type:"number",default:"0",description:"延迟（毫秒）"},{name:"easing",type:"string",default:'"cubic-bezier(0.68, -0.55, 0.265, 1.55)"',description:"缓动函数"},{name:"triggerOnHover",type:"boolean",default:"false",description:"是否悬停触发"},{name:"continuous",type:"boolean",default:"false",description:"是否持续动画"},{name:"fromBorderRadius",type:"string",default:'"50%"',description:"rounded-corners 起始圆角"},{name:"toBorderRadius",type:"string",default:'"0%"',description:"rounded-corners 结束圆角"},{name:"fromScale",type:"number",default:"1",description:"scale-morph 起始缩放"},{name:"toScale",type:"number",default:"1",description:"scale-morph 结束缩放"},{name:"fromRotate",type:"number",default:"0",description:"rotate-morph 起始角度"},{name:"toRotate",type:"number",default:"0",description:"rotate-morph 结束角度"},{name:"fromSkew",type:"number",default:"0",description:"skew-morph 起始倾斜"},{name:"toSkew",type:"number",default:"0",description:"skew-morph 结束倾斜"}],Ck=`// 1. 弹性形变
const MorphImage = withPlugins(LazyLoadImageCore, [
  createMorphPlugin({ type: "elastic", duration: 1000 }),
]);

// 2. 在头像 / 卡片中使用
<MorphImage
  src="https://picsum.photos/id/1080/400/300"
  alt="头像"
  style={{ width: 160, height: 160, borderRadius: 80 }}
/>;

// 3. 圆角过渡（加载触发）
createMorphPlugin({
  type: "rounded-corners",
  fromBorderRadius: "50%",
  toBorderRadius: "12%",
});`,Lk=[{name:"elastic 弹性形变",description:"加载完成后以弹性缓动“弹”入，适合头像与卡片。",src:"https://picsum.photos/id/1080/400/300",config:{type:"elastic",duration:1e3,easing:"cubic-bezier(0.68, -0.55, 0.265, 1.55)"}},{name:"rounded-corners 圆角过渡",description:"从圆形过渡为圆角矩形，强调形态变化。",src:"https://picsum.photos/id/1084/400/300",config:{type:"rounded-corners",fromBorderRadius:"50%",toBorderRadius:"12%",duration:900}},{name:"scale-morph 缩放形变",description:"从 0.85 倍放大到原尺寸，配合淡入更自然。",src:"https://picsum.photos/id/110/400/300",config:{type:"scale-morph",fromScale:.85,toScale:1,duration:800}},{name:"rotate-morph 旋转形变",description:"带角度旋转的进入，动感十足。",src:"https://picsum.photos/id/111/400/300",config:{type:"rotate-morph",fromRotate:-12,toRotate:0,duration:900}},{name:"liquid 液态（持续）",description:"持续液态流动效果，适合做背景或装饰图。",src:"https://picsum.photos/id/119/400/300",config:{type:"liquid",continuous:!0,duration:2e3}}],kk=["9 种形变类型（圆角 / 缩放 / 旋转 / 倾斜 / 弹性 / 液态等）","三种触发：加载触发 / 悬停触发 / 持续动画","圆角、缩放、旋转、倾斜均参数化起止值","弹性缓动可定制","纯 CSS transforms，性能好","无运行时依赖"],Ik=["头像形变入场","按钮 / 卡片交互反馈","Logo 动画","加载态过渡","图片墙动态呈现","装饰性背景图"],_k=["continuous: true 会持续播放；配合 triggerOnHover: true 可在鼠标悬停时播放单次，更省资源。","悬停触发的场景需在图片上移动 / 悬停鼠标才能看到形变，静态截图仅展示初始态。"],Ek={name:yk,description:vk,since:wk,tags:xk,events:bk,methods:Pk,methodsNote:$k,config:Sk,example:Ck,examples:Lk,features:kk,useCases:Ik,notes:_k},Rk="NetworkAnalyticsPlugin",zk="网络分析：上报加载耗时、成功率与 CDN 分布。",Dk="2.0.0",Ok=["network","网络"],jk=[{name:"onMount",when:"组件挂载完成、插件注册后执行一次（返回的清理函数在 manager.clear 时逆序执行）",description:"初始化副作用：注册监听、起定时器、建观察器；必须返回清理函数或配合 onUnmount 收尾"},{name:"onUnmount",when:"组件卸载前执行一次",description:"释放监听、定时器与观察器；与 onMount 成对出现，避免泄漏"},{name:"onLoadSuccess",when:"图片成功解码可显示时",description:"拿到最终 displaySrc 做后续动作（上报、预取下张、淡入）"},{name:"onLoadError",when:"加载失败（网络错误、解码失败、超时）",description:"返回 true 表示错误已被处理（如切换备用源），否则继续走默认降级"}],Mk=[],Tk="只读取 context 字段（props / state / data），不调用上下文方法",Nk=[{name:"reportEndpoint",type:"string",description:"上报地址（POST JSON）；留空则只在本地统计"},{name:"report",type:"(event: string, data: Record<string, any>) => void",description:"自定义上报函数（若提供则优先使用）"},{name:"trackCDN",type:"boolean",description:"是否按图片域名分组统计，便于比较不同 CDN 表现"}],Ak=`const LazyImage = withPlugins(LazyLoadImageCore, [
  createNetworkAnalyticsPlugin({
    trackCDN: true,
    report: (event, data) => {
      // event: "load" | "error" | "cache-hit" ...
      // data:  { src, durationMs, host, cached }
      analytics.track(event, data);
    },
  }),
]);`,Bk=[{name:"本地调试上报",description:"未配置端点时写入 console，便于本地观察耗时与命中情况。",config:{trackCDN:!0}},{name:"上报到监控端点",description:"把事件 POST 到监控服务（keepalive，不阻塞页面卸载）。",config:{reportEndpoint:"https://api.example.com/lli",trackCDN:!0}}],Uk=["上报加载耗时、成功率、CDN 分布","内置事件去重 + 100ms 防抖，避免刷屏","优先使用自定义 report 函数，其次 reportEndpoint"],Fk=["线上图片加载性能监控","定位慢 CDN / 高失败率域名"],Wk=["不提供 reportEndpoint 也不提供 report 时，默认 console.debug 输出。","上报事件含 src / host / durationMs / cached 等字段。","report 为函数，需在“用法示例”中以代码传入；静态预览使用纯配置（无端点时仅本地打点）。"],Vk={name:Rk,description:zk,since:Dk,tags:Ok,events:jk,methods:Mk,methodsNote:Tk,config:Nk,example:Ak,examples:Bk,features:Uk,useCases:Fk,notes:Wk},Hk="OfflinePlugin",Gk="离线降级（v2 真实实现）：在线时把资源预热进 Cache Storage；离线时优先从缓存取同域资源，否则回退 offlineSrc / 内置 SVG 占位图，并在离线时显示状态徽标。不再是纯提示层。",qk="2.0.0",Qk=["loading","加载策略","离线","省流"],Kk=[{name:"onLoad",when:"加载流程开始、需要确定最终图片地址时",description:"自定义加载逻辑，返回最终图片 URL（objectURL / dataURL / 原地址）"},{name:"renderOverlay",when:"每次渲染，覆盖在图片容器之上",description:"骨架屏、错误占位、水印、加载动画"}],Yk=[],Xk="只读取 context 字段（props / state / data），不调用上下文方法",Zk=[{name:"offlineSrc",type:"string",default:"内置 SVG 离线占位图（data URI）",description:"离线且无缓存时回退的占位图，建议用 data URI 避免再次走网络"},{name:"cacheName",type:"string",default:"vane-lazy-image-offline",description:"Cache Storage 名称，用于预热与离线回退"},{name:"warm",type:"boolean",default:"true",description:"在线时是否把资源写入 Cache Storage 预热"},{name:"showBadge",type:"boolean",default:"true",description:"离线时是否显示「离线模式」徽标"}],Jk=`import { LazyLoadImageCore, createOfflinePlugin, withPlugins } from "vane-lazy-image";

const LazyImage = withPlugins(LazyLoadImageCore, [
  // 离线时回退到内置占位图，并在离线时显示徽标
  createOfflinePlugin({}),
]);

// 同域资源在线时会自动预热，离线可直接从缓存读取
<LazyImage src="/images/photo.jpg" alt="离线降级示例" />`,eI=[{name:"默认离线降级",description:"在线正常加载并预热；断网后同域资源走缓存，跨域资源回退到内置 SVG 占位图，并出现「离线模式」徽标。",src:"https://picsum.photos/seed/offline/800/600",config:{}},{name:"自定义离线占位图",description:"指定 offlineSrc 作为断网回退图（建议 data URI）。",src:"https://picsum.photos/seed/offline2/800/600",config:{offlineSrc:"data:image/svg+xml;utf8,%3Csvg xmlns='http://www.w3.org/2000/svg' width='400' height='300'%3E%3Crect width='100%25' height='100%25' fill='%23ffe0b2'/%3E%3Ctext x='50%25' y='50%25' fill='%23e65100' text-anchor='middle' font-size='22'%3E无网络%3C/text%3E%3C/svg%3E"}},{name:"关闭徽标",description:"showBadge=false，仅做离线资源回退，不显示提示。",src:"https://picsum.photos/seed/offline3/800/600",config:{showBadge:!1}}],tI=["在线预热进 Cache Storage（真实写入）","离线从缓存读取同域资源","无缓存回退 offlineSrc / 内置 SVG 占位","在线 / 离线状态统一取自 GlobalContext（全 App 单处监听）+ 状态徽标","warm / showBadge 可开关"],nI=["弱网 / 断网时的优雅降级","离线优先 PWA 应用的图片缓存","省流用户避免无效请求"],oI=["跨域 no-cors 资源缓存后无法读取为 blob，因此跨域图片离线时会回退到 offlineSrc 占位图（预期降级）；同域资源可真正离线显示。","完整 Service Worker 级别离线由宿主应用负责，本插件提供组件级缓存/回退兜底。"],rI={name:Hk,description:Gk,since:qk,tags:Qk,events:Kk,methods:Yk,methodsNote:Xk,config:Zk,example:Jk,examples:eI,features:tI,useCases:nI,notes:oI},iI="OverlayInfoPlugin",sI="信息覆盖层：显示自定义文本，支持常显或悬停触发。",aI="2.0.0",lI=["visual","视觉"],cI=[{name:"renderOverlay",when:"每次渲染，覆盖在图片容器之上",description:"骨架屏、错误占位、水印、加载动画"}],uI=[],dI="只读取 context 字段（props / state / data），不调用上下文方法",pI=[{name:"content",type:"string | ((context: LazyImageContext) => string)",default:'""',description:"覆盖层文本；可传函数按 context 派生"},{name:"position",type:'"top" | "bottom" | "center"',default:'"bottom"',description:"文本位置"},{name:"background",type:"string",default:"rgba(0,0,0,0.62)",description:"背景色"},{name:"color",type:"string",default:"#fff",description:"文字颜色"},{name:"fontSize",type:"number",default:"12",description:"字号 px"},{name:"padding",type:"string",default:"6px 10px",description:"内边距"},{name:"borderRadius",type:"number",default:"0",description:"圆角 px"},{name:"zIndex",type:"number",default:"2",description:"层叠顺序"},{name:"showWhen",type:'"always" | "loading" | "loaded" | "error"',default:'"always"',description:"何时显示"},{name:"trigger",type:'"always" | "hover"',default:'"always"',description:"触发方式"}],mI=`// 底部信息条（常显）
const InfoImage = withPlugins(LazyLoadImageCore, [
  createOverlayInfoPlugin({
    content: "来源：picsum.photos",
    position: "bottom",
    background: "rgba(0,0,0,0.62)",
    color: "#fff",
  }),
]);

// 按加载状态动态文本
createOverlayInfoPlugin({
  content: (ctx) => ctx.imageState === "loading" ? "加载中…" : "已加载",
  position: "center",
});`,gI=[{name:"底部信息条（常显）",description:"半透明黑底白字信息条，常显于底部。",src:"https://picsum.photos/seed/overlay-bottom/600/400",config:{content:"来源：picsum.photos",position:"bottom",background:"rgba(0,0,0,0.62)",color:"#fff",showWhen:"always",trigger:"always"}},{name:"悬停显示信息",description:"平时干净，鼠标悬停时居中浮出提示文字。",src:"https://picsum.photos/seed/overlay-hover/600/400",config:{content:"悬停查看详情",position:"center",background:"rgba(0,0,0,0.62)",color:"#fff",showWhen:"always",trigger:"hover"}}],fI=["顶部 / 底部 / 居中三位置","文本支持静态或函数动态派生","背景 / 颜色 / 字号 / 圆角可调","可常显或悬停触发","可按加载状态（loading/loaded/error）显示"],hI=["图片来源 / 版权信息","悬停浮出操作提示","加载 / 错误态文案","图库元信息展示"],yI=["content 传函数时可按 context（含 imageState / src）派生，但场景示例画廊用静态文本以保证实时预览。","与 Caption 的区别：OverlayInfo 更通用（任意文本 + 触发时机 + 加载态），Caption 专注单一图注。"],vI={name:iI,description:sI,since:aI,tags:lI,events:cI,methods:uI,methodsNote:dI,config:pI,example:mI,examples:gI,features:fI,useCases:hI,notes:yI},wI="ParallaxPlugin",xI="视差滚动：随页面滚动按强度偏移图片位置。",bI="2.0.0",PI=["visual","视觉"],$I=[{name:"onMount",when:"组件挂载完成、插件注册后执行一次（返回的清理函数在 manager.clear 时逆序执行）",description:"初始化副作用：注册监听、起定时器、建观察器；必须返回清理函数或配合 onUnmount 收尾"},{name:"onUnmount",when:"组件卸载前执行一次",description:"释放监听、定时器与观察器；与 onMount 成对出现，避免泄漏"}],SI=[],CI="只读取 context 字段（props / state / data），不调用上下文方法",LI=[{name:"strength",type:"number",default:"0.2",description:"偏移强度 0..1"},{name:"axis",type:'"y" | "x"',default:'"y"',description:"偏移轴向"}],kI=`// 垂直视差：滚动时图片缓慢位移
const ParallaxImage = withPlugins(LazyLoadImageCore, [
  createParallaxPlugin({ strength: 0.2, axis: "y" }),
]);

<ParallaxImage src="https://picsum.photos/seed/parallax/600/400" alt="视差" />;`,II=[{name:"垂直视差",description:"中等强度 y 轴视差，滚动时图片缓移，营造纵深。",src:"https://picsum.photos/seed/parallax-y/600/400",config:{strength:.2,axis:"y"}},{name:"轻微视差",description:"低强度视差，含蓄的层次感，不喧宾夺主。",src:"https://picsum.photos/seed/parallax-light/600/400",config:{strength:.1,axis:"y"}}],_I=["随滚动偏移图片（y / x 轴）","强度可调（0~1）","纯 transform 实现，性能友好","增强页面纵深与动感"],EI=["落地页 / Hero 区背景","长图文滚动叙事","作品集视差画廊","需要纵深氛围的视觉场景"],RI=["视差依赖页面滚动，demo 小卡片内滚动幅度有限，效果在长页面更明显。","strength 过大可能导致图片露出边缘，建议配合 overflow:hidden 容器。"],zI={name:wI,description:xI,since:bI,tags:PI,events:$I,methods:SI,methodsNote:CI,config:LI,example:kI,examples:II,features:_I,useCases:EI,notes:RI},DI="PerformanceMonitorPlugin",OI="性能监控：统计单张图片的加载耗时，可选在四角叠加实时展示耗时面板，并在加载完成时通过 onReport 上报。",jI="2.0.0",MI=["other","监控","性能"],TI=[{name:"onLoadSuccess",when:"图片成功解码可显示时",description:"拿到最终 displaySrc 做后续动作（上报、预取下张、淡入）"},{name:"renderOverlay",when:"每次渲染，覆盖在图片容器之上",description:"骨架屏、错误占位、水印、加载动画"}],NI=[],AI="只读取 context 字段（props / state / data），不调用上下文方法",BI=[{name:"showOverlay",type:"boolean",default:"true",description:"是否在图片上叠加耗时面板"},{name:"overlayPosition",type:'"top-left" | "top-right" | "bottom-left" | "bottom-right"',default:'"top-right"',description:"面板位置（四角）"},{name:"color",type:"string",default:'"#fff"',description:"文字色"},{name:"background",type:"string",default:'"rgba(0,0,0,0.45)"',description:"面板背景"},{name:"onReport",type:"(data: { src; durationMs; network?; device? }) => void",default:"undefined",description:"加载完成上报回调"}],UI=`const PerfImage = withPlugins(LazyLoadImageCore, [
  createPerformanceMonitorPlugin({
    overlayPosition: "bottom-left",
    onReport: (data) => console.log("perf", data),
  }),
]);

<PerfImage src="https://picsum.photos/id/1015/500/300" alt="性能监控示例" />;`,FI=[{name:"默认耗时面板",description:"右上角显示 Loaded in N ms。",src:"https://picsum.photos/id/1015/500/300",config:{showOverlay:!0}},{name:"左下角面板",description:"面板移动到左下角。",src:"https://picsum.photos/id/1021/500/300",config:{overlayPosition:"bottom-left"}},{name:"自定义配色",description:"蓝色背景 + 白字，突出展示。",src:"https://picsum.photos/id/1026/500/300",config:{background:"rgba(33,118,255,0.6)",color:"#fff"}}],WI=["加载耗时统计","四角面板可选","自定义配色","onReport 上报","防抖去重"],VI=["LCP/加载耗时测量","性能优化验证","监控告警","A/B 对比"],HI=["onReport 为函数型配置，静态预览仅展示面板；函数用法见用法示例。"],GI={name:DI,description:OI,since:jI,tags:MI,events:TI,methods:NI,methodsNote:AI,config:BI,example:UI,examples:FI,features:WI,useCases:VI,notes:HI},qI="PreconnectPlugin",QI="DNS 预连接：提前与图片域名建立连接，可配置跨域。",KI="2.0.0",YI=["loading","加载策略"],XI=[{name:"onMount",when:"组件挂载完成、插件注册后执行一次（返回的清理函数在 manager.clear 时逆序执行）",description:"初始化副作用：注册监听、起定时器、建观察器；必须返回清理函数或配合 onUnmount 收尾"},{name:"onUnmount",when:"组件卸载前执行一次",description:"释放监听、定时器与观察器；与 onMount 成对出现，避免泄漏"},{name:"onSrcChange",when:"src 变化、切换到新图时",description:"重置状态、清理旧缓存、重新进入懒加载判定"},{name:"renderOverlay",when:"每次渲染，覆盖在图片容器之上",description:"骨架屏、错误占位、水印、加载动画"}],ZI=[],JI="只读取 context 字段（props / state / data），不调用上下文方法",e_=[{name:"domains",type:"string[]",description:"额外预连接域名"},{name:"crossOrigin",type:"string | null",description:'"anonymous" | "use-credentials" | null'},{name:"showBadge",type:"boolean",default:"false",description:"是否在卡片上显示「已预连 N」徽标（便于观察注入效果）"}],t_=`const LazyImage = withPlugins(LazyLoadImageCore, [
  createPreconnectPlugin({
    domains: ["https://cdn.example.com", "https://img.example.com"],
    crossOrigin: "anonymous",
  }),
]);`,n_=[{name:"基础预连接",description:"为图片 CDN 域名提前建连，消除首图 DNS/TLS 往返，更快出现。",config:{domains:["https://picsum.photos"],crossOrigin:"anonymous",showBadge:!0}},{name:"多域名预连接",description:"同时预连接多个静态资源域名，适合跨 CDN 的图片源。",config:{domains:["https://picsum.photos","https://fastly.picsum.photos"],crossOrigin:"anonymous"}}],o_=['挂载时注入 <link rel="preconnect">，提前完成 DNS/TCP/TLS 握手',"支持跨域凭证配置（crossOrigin: anonymous / use-credentials）","与浏览器默认预连接策略互补，相同域名不会重复注入"],r_=["图片托管在独立 CDN 域名时，消除首图握手延迟","瀑布流列表首屏涉及多个静态资源域名"],i_=["仅注入预连接提示，不保证一定建连，实际收益取决于浏览器调度。","不宜预连接过多域名，以免占用有限的连接资源。","已在本插件内去重，重复传入相同域名只会注入一次。"],s_={name:qI,description:QI,since:KI,tags:YI,events:XI,methods:ZI,methodsNote:JI,config:e_,example:t_,examples:n_,features:o_,useCases:r_,notes:i_},a_="PredictiveLoadingPlugin",l_='预测性预加载（v2 真实实现）：未提供 predict 时，内置启发式按 URL 末尾数字段递增/递减派生「下一张」并注入 <link rel="preload"> 预取；也可传入 predict 自定义预测目标。',c_="2.0.0",u_=["loading","加载策略","预取"],d_=[{name:"onMount",when:"组件挂载完成、插件注册后执行一次（返回的清理函数在 manager.clear 时逆序执行）",description:"初始化副作用：注册监听、起定时器、建观察器；必须返回清理函数或配合 onUnmount 收尾"}],p_=[],m_="只读取 context 字段（props / state / data），不调用上下文方法",g_=[{name:"model",type:'"heuristic" | "ml"',default:'"heuristic"',description:"预测模型；ml 当前同样走启发式（真正模型由 predict 提供）"},{name:"strategy",type:'"increment" | "decrement"',default:'"increment"',description:"内置启发式：派生方向（递增/递减 URL 末尾数字段）"},{name:"predict",type:"(context) => string[] | Promise<string[]>",default:"未设置（用内置启发式）",description:"自定义预测：返回需要预加载的图片链接列表，优先级高于内置启发式"},{name:"maxPreload",type:"number",default:"3",description:"单次最多预取数量"},{name:"as",type:'"image" | "fetch"',default:'"image"',description:"preload 资源类型"},{name:"crossOrigin",type:'"anonymous" | "use-credentials" | null',default:'"anonymous"',description:"跨域策略"}],f_=`const LazyImage = withPlugins(LazyLoadImageCore, [
  // 无 predict：内置启发式按 URL 末尾数字递增预取下 3 张
  createPredictiveLoadingPlugin({ model: "heuristic", strategy: "increment", maxPreload: 3 }),
]);

// 例：src=.../id/1015/ 会预取 .../id/1016/、1017/、1018/
<LazyImage src="https://picsum.photos/id/1015/500/300" alt="预测预加载示例" />;`,h_=[{name:"内置启发式递增",description:"按 URL 末尾数字递增派生下 3 张并预取（如相册下一页）。",src:"https://picsum.photos/id/1015/500/300",config:{model:"heuristic",strategy:"increment",maxPreload:3}},{name:"内置启发式递减",description:"递减派生上一张方向预取。",src:"https://picsum.photos/id/1020/500/300",config:{strategy:"decrement",maxPreload:3}},{name:"自定义预测",description:"用业务上下文决定预加载目标，限制为 3 张。",src:"https://picsum.photos/id/1018/500/300",config:{maxPreload:3}}],y_=["内置启发式真实派生「下一张」并注入 preload（非空头）","predict 自定义预测优先级更高","strategy 递增/递减可选","maxPreload 限制数量，相同 href 不重复注入"],v_=["相册 / 轮播：预加载下一张，切换无白屏","详情页：预加载相关推荐图"],w_=["仅注入 preload 提示，实际加载仍由浏览器调度；preload 在 Network 面板可见（见 HoverPrefetch 同类展示）。","URL 中无数字段时启发式无候选，可改用 predict 显式给出。"],x_={name:a_,description:l_,since:c_,tags:u_,events:d_,methods:p_,methodsNote:m_,config:g_,example:f_,examples:h_,features:y_,useCases:v_,notes:w_},b_="PriceTagPlugin",P_="商品价格标签：在图片上叠加价格信息，支持原价、折扣、节省金额、异步价格获取与淡入动画。",$_="2.0.0",S_=["ecommerce","电商核心"],C_=[{name:"renderOverlay",when:"每次渲染，覆盖在图片容器之上",description:"骨架屏、错误占位、水印、加载动画"}],L_=[],k_="只读取 context 字段（props / state / data），不调用上下文方法",I_=[{name:"price",type:"number",default:"undefined",description:"当前价格"},{name:"currency",type:"string",default:'"$"',description:"货币符号"},{name:"position",type:'"top-left" | "top-right" | "bottom-left" | "bottom-right"',default:'"top-right"',description:"标签位置（四角）"},{name:"originalPrice",type:"number",default:"undefined",description:"原价（划线显示）"},{name:"discount",type:"string",default:"undefined",description:"折扣文案，如 “40% OFF”"},{name:"showSavings",type:"boolean",default:"false",description:"是否计算并显示节省金额"},{name:"backgroundColor",type:"string",default:'"#c62828"',description:"标签背景色"},{name:"textColor",type:"string",default:'"#fff"',description:"标签文字色"},{name:"animate",type:"boolean",default:"true",description:"淡入动画"},{name:"style",type:"React.CSSProperties",default:"{}",description:"自定义叠加样式"},{name:"fetchPrice",type:"(context) => Promise<{ price; originalPrice?; discount? }>",default:"undefined",description:"异步获取价格（API 集成）"},{name:"loadingText",type:"string",default:'"加载中..."',description:"异步加载文案"},{name:"errorText",type:"string",default:'"价格获取失败"',description:"异步失败文案"}],__=`// 1. 组装带价格标签的懒加载图片组件
const PriceImage = withPlugins(LazyLoadImageCore, [
  createPriceTagPlugin({
    price: 299.99,
    currency: "¥",
    position: "bottom-left",
    originalPrice: 499.99,
    discount: "40% OFF",
    showSavings: true,
  }),
]);

// 2. 在商品卡片中使用
<PriceImage
  src="https://picsum.photos/id/180/400/300"
  alt="无线耳机"
  style={{ width: 240, height: 160, borderRadius: 8 }}
/>;

// 3. 异步价格（接入后端 API）
createPriceTagPlugin({
  currency: "¥",
  fetchPrice: async () => {
    const res = await fetch("/api/products/123/price");
    return res.json(); // { price, originalPrice?, discount? }
  },
});`,E_=[{name:"完整价格信息（带折扣和节省金额）",description:"原价划线 + 折扣标签 + 自动计算节省金额，落在左下角。",src:"https://picsum.photos/id/180/400/300",config:{price:299.99,currency:"$",position:"bottom-left",originalPrice:499.99,discount:"40% OFF",showSavings:!0}},{name:"简单价格标签",description:"仅当前价 + 货币符号，落在左上角。",src:"https://picsum.photos/id/201/400/300",config:{price:1999,currency:"¥",position:"top-left"}},{name:"自定义样式价格标签",description:"自定义背景色 / 文字色 / 圆角与内边距。",src:"https://picsum.photos/id/250/400/300",config:{price:59.99,currency:"€",position:"bottom-right",backgroundColor:"#4ECDC4",textColor:"#1A535C",style:{borderRadius:"8px",padding:"12px 16px"}}},{name:"异步获取价格（模拟 API）",description:"真实场景通过 fetchPrice 异步拉取价格；示例以静态值代替，可见“查询价格 / 价格查询失败”状态（见用法示例中的 fetchPrice）。",src:"https://picsum.photos/id/260/400/300",config:{currency:"¥",position:"top-right",showSavings:!0,price:1299.99,originalPrice:1999,discount:"限时优惠"}}],R_=["显示当前价格、原价、折扣标签","计算并显示节省金额","支持多种货币符号","4 个位置可选（四角）","淡入动画效果","完全自定义样式","支持异步价格数据获取（API 集成）","显示加载和错误状态"],z_=["电商产品列表","促销活动页面","特价商品展示","移动端商城","从 API 动态获取价格的场景","跨境电商实时汇率转换"],D_=["`fetchPrice` 返回后覆盖静态 `price`，接真实商品价格时用它，不必改组件。","配置 `originalPrice` 且高于 `price` 时展示划线价，`showSavings` 额外显示省额。"],O_={name:b_,description:P_,since:$_,tags:S_,events:C_,methods:L_,methodsNote:k_,config:I_,example:__,examples:E_,features:R_,useCases:z_,notes:D_},j_="PriorityLoadingPlugin",M_="优先级加载：按 high/medium/low 切换 eager/lazy 与 rootMargin。",T_="2.0.0",N_=["loading","加载策略"],A_=[{name:"transformProps",when:"渲染前链式改写图片 props",description:"补 sizes / 占位色 / 解码策略等"}],B_=[],U_="只读取 context 字段（props / state / data），不调用上下文方法",F_=[{name:"priority",type:'"high" | "medium" | "low"',default:'"medium"',description:"加载优先级：high→loading=eager / low→lazy+大 rootMargin / medium→lazy"}],W_=`// LCP / 首屏主图：立即加载
const HeroImage = withPlugins(LazyLoadImageCore, [
  createPriorityLoadingPlugin({ priority: "high" }),
]);

// 折叠区/长列表底部图：延后加载
const BelowImage = withPlugins(LazyLoadImageCore, [
  createPriorityLoadingPlugin({ priority: "low" }),
]);`,V_=[{name:"首屏 LCP 图（high）",description:"关键图立即 eager 加载，缩短最大内容绘制时间。",config:{priority:"high"}},{name:"折叠区图（low）",description:"非首屏图延后加载，rootMargin 更大，滚动临近才加载。",config:{priority:"low"}}],H_=["high → loading=eager、rootMargin=0，立即加载","low → loading=lazy、rootMargin 更大，更晚加载","medium → 默认 lazy + 适中 rootMargin（约 200px）"],G_=["把 LCP / 首屏主图设为 high","把长列表底部、折叠内容图设为 low，错峰加载"],q_=["仅调整 loading 与 rootMargin，不会阻塞其它插件生效。","与 ScrollIdle、ConcurrencyControl 叠加时可协同控制加载节奏。","rootMargin 会被合并进核心的 IntersectionObserver 参数。"],Q_={name:j_,description:M_,since:T_,tags:N_,events:A_,methods:B_,methodsNote:U_,config:F_,example:W_,examples:V_,features:H_,useCases:G_,notes:q_},K_="ProgressOverlayPlugin",Y_="加载进度条覆盖层：百分比文本与 indeterminate 模式。",X_="2.0.0",Z_=["visual","视觉"],J_=[{name:"onProgress",when:'加载进度更新（由 withPlugins 订阅 bus 的 "progress" 桥接）',description:"展示进度条 / 百分比；仅对支持进度上报的 loader 生效"},{name:"renderOverlay",when:"每次渲染，覆盖在图片容器之上",description:"骨架屏、错误占位、水印、加载动画"}],eE=[],tE="只读取 context 字段（props / state / data），不调用上下文方法",nE=[{name:"showWhen",type:'"always" | "loading"',default:'"loading"',description:"何时显示"},{name:"height",type:"number",default:"3",description:"进度条高度 px"},{name:"color",type:"string",default:"#4a90e2",description:"进度条颜色"},{name:"background",type:"string",default:"transparent",description:"背景遮罩色"},{name:"showPercentText",type:"boolean",default:"false",description:"是否显示百分比文本"}],oE=`// 顶部进度条 + 百分比文本
const ProgressImage = withPlugins(LazyLoadImageCore, [
  createProgressOverlayPlugin({
    showWhen: "loading",
    height: 3,
    color: "#4a90e2",n    showPercentText: true,
  }),
]);

<ProgressImage src="https://picsum.photos/seed/progress/600/400" alt="进度蒙层" />;`,rE=[{name:"顶部进度条 + 百分比",description:"细进度条置于顶部，并显示实时百分比。",src:"https://picsum.photos/seed/progress-top/600/400",config:{showWhen:"loading",height:3,color:"#4a90e2",showPercentText:!0}},{name:"半透明遮罩 + 百分比",description:"加载期覆盖半透明遮罩，中心显示百分比，适合大图。",src:"https://picsum.photos/seed/progress-mask/600/400",config:{showWhen:"loading",height:4,color:"#22c55e",background:"rgba(0,0,0,0.12)",showPercentText:!0}}],iE=["顶部 / 覆盖式进度条","实时百分比文本","颜色 / 高度 / 背景可调","加载完成后自动消失"],sE=["大图 / 慢网络加载反馈","视频封面缓冲提示","需要明确进度感知的场景","与 Skeleton 配合提升占位体验"],aE=["进度数据来自内核 progress 事件，跨域或缓存命中时可能很快跳到 100%。","与 Skeleton 同时使用时，进度条层级通常高于骨架。"],lE={name:K_,description:Y_,since:X_,tags:Z_,events:J_,methods:eE,methodsNote:tE,config:nE,example:oE,examples:rE,features:iE,useCases:sE,notes:aE},cE="PromoBadgePlugin",uE="促销角标：在商品图片上显示 NEW/HOT/SALE 等促销标签，支持脉冲动画和丝带样式，可叠加多个。",dE="2.0.0",pE=["ecommerce","电商核心"],mE=[{name:"renderOverlay",when:"每次渲染，覆盖在图片容器之上",description:"骨架屏、错误占位、水印、加载动画"}],gE=[],fE="只读取 context 字段（props / state / data），不调用上下文方法",hE=[{name:"type",type:'"new" | "hot" | "sale" | "limited" | "bestseller" | "custom"',default:'"hot"',description:"预设标签类型"},{name:"text",type:"string",default:"undefined",description:"自定义文案（type=custom 时生效）"},{name:"position",type:'"top-left" | "top-right" | "bottom-left" | "bottom-right"',default:'"top-left"',description:"角标位置（四角）"},{name:"backgroundColor",type:"string",default:"undefined",description:"背景色"},{name:"color",type:"string",default:"undefined",description:"文字色"},{name:"animate",type:"boolean",default:"true",description:"淡入动画"},{name:"pulse",type:"boolean",default:"false",description:"脉冲呼吸动画"},{name:"ribbon",type:"boolean",default:"false",description:"丝带样式（倾斜 45°）"},{name:"style",type:"React.CSSProperties",default:"{}",description:"自定义叠加样式"}],yE=`// 1. 单个促销角标
const SaleImage = withPlugins(LazyLoadImageCore, [
  createPromoBadgePlugin({ type: "sale", position: "top-right", ribbon: true }),
]);

// 2. 多个角标叠加在同一张图上
const HotSaleImage = withPlugins(LazyLoadImageCore, [
  createPromoBadgePlugin({ type: "new", position: "top-left" }),
  createPromoBadgePlugin({ type: "sale", position: "top-right", ribbon: true }),
  createPromoBadgePlugin({ type: "hot", position: "bottom-right", pulse: true }),
]);

// 3. 在组件中使用
<HotSaleImage src="https://picsum.photos/id/220/500/400" alt="促销商品" />;`,vE=[{name:"NEW 新品标签",description:"左上角绿色 NEW 角标。",src:"https://picsum.photos/id/168/300/300",config:{type:"new",position:"top-left"}},{name:"HOT 热门标签（脉冲动画）",description:"右上角红色 HOT，带脉冲呼吸效果。",src:"https://picsum.photos/id/175/300/300",config:{type:"hot",position:"top-right",pulse:!0}},{name:"SALE 促销丝带",description:"右上角红色丝带（倾斜 45°）。",src:"https://picsum.photos/id/188/300/300",config:{type:"sale",position:"top-right",ribbon:!0}},{name:"LIMITED 限量标签",description:"右上角紫色 LIMITED，带脉冲。",src:"https://picsum.photos/id/196/300/300",config:{type:"limited",position:"top-right",pulse:!0}},{name:"BESTSELLER 畅销标签",description:"右下角橙色 BEST 角标。",src:"https://picsum.photos/id/203/300/300",config:{type:"bestseller",position:"bottom-right"}},{name:"自定义标签（VIP 专享）",description:"自定义文案、背景色与文字色。",src:"https://picsum.photos/id/211/300/300",config:{type:"custom",text:"VIP专享",position:"top-left",backgroundColor:"#FFD700",color:"#000"}},{name:"多个标签组合",description:"一张图同时叠加 NEW + SALE（丝带）+ HOT（脉冲），不同位置不同样式。",src:"https://picsum.photos/id/220/500/400",configs:[{type:"new",position:"top-left"},{type:"sale",position:"top-right",ribbon:!0},{type:"hot",position:"bottom-right",pulse:!0}]}],wE=["6 种预设类型：NEW / HOT / SALE / LIMITED / BESTSELLER / custom","支持自定义文字、背景色、文字颜色","脉冲动画效果（吸引注意力）","丝带样式（倾斜 45°）","4 个位置可选（四角）","支持同一图片显示多个标签"],xE=["新品上市标记","热销商品突出","促销活动标识","限时限量提醒","VIP / 会员专享"],bE=["`type` 只是预设（new/hot/sale/limited/bestseller），`text` 可覆盖预设文案与颜色。","`ribbon: true` 渲染角部绶带，容器需 overflow:hidden 才不会溢出圆角。"],PE={name:cE,description:uE,since:dE,tags:pE,events:mE,methods:gE,methodsNote:fE,config:hE,example:yE,examples:vE,features:wE,useCases:xE,notes:bE},$E="RedactionPlugin",SE="隐私打码：在指定百分比区域叠加模糊或色块遮挡。",CE="2.0.0",LE=["visual","视觉"],kE=[{name:"renderOverlay",when:"每次渲染，覆盖在图片容器之上",description:"骨架屏、错误占位、水印、加载动画"}],IE=[],_E="只读取 context 字段（props / state / data），不调用上下文方法",EE=[{name:"enabled",type:"boolean",default:"true",description:"是否启用"},{name:"boxes",type:"RedactionBox[]",default:"[]",description:"遮挡区域：{ x, y, w, h (0~1), blur?, color? }"},{name:"zIndex",type:"number",default:"3",description:"层叠顺序"}],RE=`// 局部打码（如人脸 / 车牌）
const RedactedImage = withPlugins(LazyLoadImageCore, [
  createRedactionPlugin({
    boxes: [
      { x: 0.40, y: 0.30, w: 0.20, h: 0.15, blur: 8 },
    ],
  }),
]);

<RedactedImage src="https://picsum.photos/seed/redaction/600/400" alt="打码" />;`,zE=[{name:"局部模糊打码",description:"在图片 40%/30% 处覆盖一块 20%×15% 的模糊区域（如人脸）。",src:"https://picsum.photos/seed/redaction-blur/600/400",config:{enabled:!0,boxes:[{x:.4,y:.3,w:.2,h:.15,blur:8}]}},{name:"色块遮挡",description:"用半透明色块遮挡敏感区域，不依赖模糊。",src:"https://picsum.photos/seed/redaction-block/600/400",config:{enabled:!0,boxes:[{x:.1,y:.7,w:.35,h:.12,color:"rgba(0,0,0,0.85)"}]}}],DE=["按百分比坐标划定遮挡区（自适应尺寸）","支持模糊（blur）或纯色块两种遮挡","可同时覆盖多个区域","整体启停"],OE=["人脸 / 车牌隐私打码","敏感信息遮挡","截图脱敏","合规图片发布"],jE=["坐标使用 0~1 的相对比例，图片缩放时遮挡区自动跟随。","blur 通过 backdrop-filter 实现；若浏览器不支持会以纯色块兜底。","打码是覆盖层，不改变原图像素，导出原图不会被脱敏。"],ME={name:$E,description:SE,since:CE,tags:LE,events:kE,methods:IE,methodsNote:_E,config:EE,example:RE,examples:zE,features:DE,useCases:OE,notes:jE},TE="ResponsivePlugin",NE="响应式图片：注入 srcset/sizes 多宽度资源，浏览器按视口选择最佳尺寸，兼顾清晰度与流量。",AE="2.0.0",BE=["a11y","可访问性","网络","响应式"],UE=[{name:"onLoadSuccess",when:"图片成功解码可显示时",description:"拿到最终 displaySrc 做后续动作（上报、预取下张、淡入）"},{name:"transformProps",when:"渲染前链式改写图片 props",description:"补 sizes / 占位色 / 解码策略等"}],FE=[],WE="只读取 context 字段（props / state / data），不调用上下文方法",VE=[{name:"enabled",type:"boolean",default:"true",description:"是否启用响应式"},{name:"variants",type:"{ width: number; src?: string }[]",default:"[{400},{800},{1200}]",description:"宽度变体列表"},{name:"buildSrc",type:"(baseSrc, width) => string",default:"defaultBuildSrc（追加 ?w=）",description:"自定义链接生成（函数型，参见用法示例）"},{name:"sizes",type:"string",default:'"(max-width: 800px) 100vw, 800px"',description:"sizes 属性"}],HE=`const ResponsiveImage = withPlugins(LazyLoadImageCore, [
  createResponsivePlugin({
    variants: [{ width: 400 }, { width: 800 }, { width: 1200 }],
    sizes: "(max-width: 800px) 100vw, 800px",
    buildSrc: (base, w) => \`\${base}?w=\${w}\`,
  }),
]);

<ResponsiveImage src="https://picsum.photos/id/1015/500/300" alt="响应式示例" />;`,GE=[{name:"默认多宽度",description:"注入 400/800/1200 三档 srcset。",src:"https://picsum.photos/id/1015/500/300",config:{variants:[{width:400},{width:800},{width:1200}],sizes:"(max-width: 800px) 100vw, 800px"}},{name:"自定义尺寸档位",description:"仅 320/640 两档，适合轻量场景。",src:"https://picsum.photos/id/1021/500/300",config:{variants:[{width:320},{width:640}],sizes:"(max-width: 640px) 100vw, 640px"}},{name:"关闭响应式",description:"enabled=false 时不注入 srcset。",src:"https://picsum.photos/id/1026/500/300",config:{enabled:!1}}],qE=["srcset 多宽度","自定义 buildSrc","sizes 响应式","自动适配屏幕/Retina","可关闭"],QE=["响应式画廊","移动端流量优化","Retina 高清","CMS 图片"],KE=["buildSrc 为函数型配置，静态预览使用默认追加 ?w= 策略；自定义用法见用法示例。"],YE={name:TE,description:NE,since:AE,tags:BE,events:UE,methods:FE,methodsNote:WE,config:VE,example:HE,examples:GE,features:qE,useCases:QE,notes:KE},XE="RetryOnErrorPlugin",ZE="失败重试：图片加载失败后按指数退避（可选抖动）自动重试，提升网络抖动 / 瞬时故障下的自愈成功率，并提供重试进度角标。",JE="2.0.0",eR=["network","网络","重试","自愈"],tR=[{name:"onUnmount",when:"组件卸载前执行一次",description:"释放监听、定时器与观察器；与 onMount 成对出现，避免泄漏"},{name:"onLoadError",when:"加载失败（网络错误、解码失败、超时）",description:"返回 true 表示错误已被处理（如切换备用源），否则继续走默认降级"},{name:"onSrcChange",when:"src 变化、切换到新图时",description:"重置状态、清理旧缓存、重新进入懒加载判定"},{name:"renderOverlay",when:"每次渲染，覆盖在图片容器之上",description:"骨架屏、错误占位、水印、加载动画"}],nR=[],oR="只读取 context 字段（props / state / data），不调用上下文方法",rR=[{name:"maxRetries",type:"number",default:"2",description:"最大重试次数"},{name:"baseDelayMs",type:"number",description:"退避基准毫秒（默认 500）"},{name:"jitter",type:"boolean",description:"是否在退避基础上叠加随机抖动"}],iR=`import { LazyLoadImageCore, createRetryOnErrorPlugin, withPlugins } from "vane-lazy-image";

const LazyImage = withPlugins(LazyLoadImageCore, [
  createRetryOnErrorPlugin({ maxRetries: 3, baseDelayMs: 400, jitter: true }),
]);

// 故意触发失败以观察指数退避重试
<LazyImage src="https://invalid.example.com/x.png" alt="失败重试示例" />`,sR=[{name:"自动重试",description:"失败后指数退避重试，用尽后角标显示『重试失败』（演示用无效地址）。",src:"https://invalid.example.com/retry.png",config:{maxRetries:3,baseDelayMs:400}},{name:"带抖动退避",description:"在指数退避基础上叠加随机抖动，避免重试风暴。",src:"https://invalid.example.com/retry-jitter.png",config:{maxRetries:2,baseDelayMs:600,jitter:!0}}],aR=["指数退避重试：delay = baseDelayMs * 2^(n-1)","可选 jitter 抖动避免重试风暴","角标实时显示『重试中 n/max』与『重试失败(max)』","用尽后放行错误给下游插件（ErrorOverlay / ErrorBadge）"],lR=["弱网 / 瞬时 5xx 自愈","与手动重试（ErrorOverlay）互补"],cR=["maxRetries 默认 2，baseDelayMs 默认 500","重试用 ?retry=时间戳&n=count 防止缓存命中","重试用尽返回 false，错误继续向下游传播"],uR={name:XE,description:ZE,since:JE,tags:eR,events:tR,methods:nR,methodsNote:oR,config:rR,example:iR,examples:sR,features:aR,useCases:lR,notes:cR},dR="RevealAnimationPlugin",pR="图片揭示动画：为图片加载添加各种进场动画（淡入/缩放/旋转/翻转/弹跳/弹性等 16 种预设 + 自定义），纯 CSS 无依赖。",mR="2.0.0",gR=["interaction","视觉效果与交互","visual"],fR=[{name:"onLoadSuccess",when:"图片成功解码可显示时",description:"拿到最终 displaySrc 做后续动作（上报、预取下张、淡入）"}],hR=[],yR="只读取 context 字段（props / state / data），不调用上下文方法",vR=[{name:"animation",type:'"fade" | "fade-up" | "fade-down" | "fade-left" | "fade-right" | "zoom-in" | "zoom-out" | "rotate-in" | "flip-x" | "flip-y" | "slide-up" | "slide-down" | "slide-left" | "slide-right" | "bounce" | "elastic" | "custom"',default:'"fade-up"',description:"动画类型"},{name:"duration",type:"number",default:"600",description:"持续时间（毫秒）"},{name:"delay",type:"number",default:"0",description:"延迟（毫秒）"},{name:"easing",type:"string",default:'"ease-out"',description:"缓动函数"},{name:"customAnimation",type:"string",default:'""',description:"自定义动画名（animation 为 custom 时生效）"},{name:"customKeyframes",type:"string",default:'""',description:"自定义 keyframes 文本"},{name:"fillMode",type:'"none" | "forwards" | "backwards" | "both"',default:'"both"',description:"动画填充模式"},{name:"disabled",type:"boolean",default:"false",description:"是否禁用"}],wR=`// 1. 组装带揭示动画的懒加载图片
const RevealImage = withPlugins(LazyLoadImageCore, [
  createRevealAnimationPlugin({ animation: "zoom-in", duration: 800 }),
]);

// 2. 在列表中使用
<RevealImage
  src="https://picsum.photos/id/1018/400/300"
  alt="风景"
  style={{ width: 240, height: 160, borderRadius: 8 }}
/>;

// 3. 自定义关键帧动画
createRevealAnimationPlugin({
  animation: "custom",
  customAnimation: "myReveal",
  customKeyframes:
    "@keyframes myReveal { from { opacity: 0; transform: scale(1.2) rotate(8deg); } to { opacity: 1; transform: none; } }",
});`,xR=[{name:"淡入上浮（默认）",description:"fade-up：图片加载完成后从下方淡入上浮，最通用的进场效果。",src:"https://picsum.photos/id/1018/400/300",config:{animation:"fade-up",duration:700,easing:"ease-out"}},{name:"缩放进入 zoom-in",description:"图片由 1.2 倍缩放回落至原尺寸并淡入，适合主视觉。",src:"https://picsum.photos/id/1015/400/300",config:{animation:"zoom-in",duration:800}},{name:"旋转进入 rotate-in",description:"带轻微旋转的进场，动感更强。",src:"https://picsum.photos/id/1024/400/300",config:{animation:"rotate-in",duration:900,delay:100}},{name:"弹跳 bounce",description:"带回弹缓冲的进场，活泼、吸引注意。",src:"https://picsum.photos/id/1039/400/300",config:{animation:"bounce",duration:1e3}},{name:"弹性 elastic + 自定义时长",description:"弹性缓动 + 更长时长，强调“弹出”质感。",src:"https://picsum.photos/id/1043/400/300",config:{animation:"elastic",duration:1200,easing:"cubic-bezier(0.68, -0.55, 0.265, 1.55)"}},{name:"自定义关键帧 custom",description:"通过 customAnimation 指定动画名，并以 customKeyframes 注入关键帧文本，可做任意效果。",src:"https://picsum.photos/id/1050/400/300",config:{animation:"custom",customAnimation:"myReveal",customKeyframes:"@keyframes myReveal { from { opacity: 0; transform: scale(1.2) rotate(8deg); } to { opacity: 1; transform: none; } }"}}],bR=["16 种预设动画（淡入/缩放/旋转/翻转/滑动/弹跳/弹性）","支持自定义动画名 + 关键帧文本","可配置时长、延迟、缓动函数","fill 模式控制动画结束态","可一键禁用（disabled，适配低端设备）","纯 CSS 实现，无运行时依赖"],PR=["图片列表进场","瀑布流懒加载","轮播图切换","首屏内容揭示","卡片/区块入场动画","营销落地页视觉点缀"],$R=["动画在图片加载完成后触发一次；再次滚动不会重复播放。","低端设备或开启“减少动态效果”偏好时，可设 disabled: true 关闭动画。"],SR={name:dR,description:pR,since:mR,tags:gR,events:fR,methods:hR,methodsNote:yR,config:vR,example:wR,examples:xR,features:bR,useCases:PR,notes:$R},CR="SEOPlugin",LR="SEO 增强：alt/title 回退、固定容器宽高比减少 CLS、将首屏关键图设为 LCP 优先（eager + preload），提升搜索排名与加载体验。",kR="2.0.0",IR=["a11y","可访问性","SEO"],_R=[{name:"onMount",when:"组件挂载完成、插件注册后执行一次（返回的清理函数在 manager.clear 时逆序执行）",description:"初始化副作用：注册监听、起定时器、建观察器；必须返回清理函数或配合 onUnmount 收尾"},{name:"transformProps",when:"渲染前链式改写图片 props",description:"补 sizes / 占位色 / 解码策略等"}],ER=[],RR="只读取 context 字段（props / state / data），不调用上下文方法",zR=[{name:"enabled",type:"boolean",default:"true",description:"是否启用"},{name:"altFallback",type:"string",default:"undefined",description:"未提供 alt 时的回退值"},{name:"title",type:"string",default:"undefined",description:"图片 title（提示与关键词）"},{name:"aspectRatio",type:"string",default:"undefined",description:'固定容器宽高比（如 "4/3"），减少 CLS'},{name:"priority",type:'"auto" | "lcp"',default:'"auto"',description:"lcp 时设为 eager 加载"},{name:"preload",type:"boolean",default:"false",description:"挂载时注入 preload 预载"}],DR=`const SeoImage = withPlugins(LazyLoadImageCore, [
  createSEOPlugin({
    altFallback: "示例图片",
    title: "演示图像",
    aspectRatio: "4/3",
    priority: "lcp",
    preload: true,
  }),
]);

<SeoImage src="https://picsum.photos/id/1015/500/300" alt="" />;`,OR=[{name:"LCP 关键图",description:"首屏关键图：eager + preload + 固定比例，优化 LCP。",src:"https://picsum.photos/id/1015/500/300",config:{altFallback:"示例图片",title:"演示图像",aspectRatio:"4/3",priority:"lcp",preload:!0}},{name:"alt/title 回退",description:"补充 alt 与 title，利于读屏与 SEO。",src:"https://picsum.photos/id/1021/500/300",config:{altFallback:"商品图",title:"热销商品"}},{name:"仅固定比例",description:"aspectRatio 防 CLS，其余默认。",src:"https://picsum.photos/id/1026/500/300",config:{aspectRatio:"16/9"}}],jR=["alt 回退","title 设置","aspect-ratio 防 CLS","LCP 优先（eager）","preload 预载","可关闭"],MR=["首屏 LCP 优化","SEO 排名","结构化标签","CLS 治理"],TR=['priority:"lcp" 会强制 eager 加载，请勿对所有图片使用，仅用于首屏关键图。'],NR={name:CR,description:LR,since:kR,tags:IR,events:_R,methods:ER,methodsNote:RR,config:zR,example:DR,examples:OR,features:jR,useCases:MR,notes:TR},AR="ScrollIdlePlugin",BR="滚动空闲加载：滚动停止后再发起加载，避免与滚动争抢带宽。",UR="2.0.0",FR=["loading","加载策略"],WR=[{name:"onMount",when:"组件挂载完成、插件注册后执行一次（返回的清理函数在 manager.clear 时逆序执行）",description:"初始化副作用：注册监听、起定时器、建观察器；必须返回清理函数或配合 onUnmount 收尾"},{name:"onUnmount",when:"组件卸载前执行一次",description:"释放监听、定时器与观察器；与 onMount 成对出现，避免泄漏"},{name:"onLoad",when:"加载流程开始、需要确定最终图片地址时",description:"自定义加载逻辑，返回最终图片 URL（objectURL / dataURL / 原地址）"}],VR=[],HR="只读取 context 字段（props / state / data），不调用上下文方法",GR=[{name:"idleMs",type:"number",default:"120",description:"判定为“空闲”的静止时间（毫秒）"},{name:"onlyWhenIntersecting",type:"boolean",default:"true",description:"是否仅在进入视口后生效（否则所有加载都会等待空闲）"},{name:"maxWaitMs",type:"number",default:"1200",description:"最长等待空闲的时间（毫秒），超过则直接继续加载，避免长时间滚动导致饥饿"},{name:"target",type:'"window" | "container"',default:'"window"',description:"监听对象：window 或容器（容器将使用 context.containerRef.current）"},{name:"axis",type:'"vertical" | "horizontal" | "both"',default:'"vertical"',description:"滚动轴向：vertical/horizontal/both（目前用于调试标注，可按需扩展策略）"},{name:"debug",type:"boolean",default:"false",description:"调试输出"}],qR=`const LazyImage = withPlugins(LazyLoadImageCore, [
  createScrollIdlePlugin({
    idleMs: 160,
    onlyWhenIntersecting: true,
    maxWaitMs: 1200, // 最多等 1.2s，避免饥饿
  }),
]);`,QR=[{name:"滚动停止后加载",description:"用户停止滚动 160ms 后再加载，滚动过程中不打断主线程与带宽。",config:{idleMs:160,onlyWhenIntersecting:!0,maxWaitMs:1200}},{name:"更敏感空闲",description:"80ms 即判定空闲，适合加载较轻的图标 / 缩略图。",config:{idleMs:80,maxWaitMs:800}}],KR=["监听滚动，空闲（停止滚动 idleMs）后才发起加载","默认仅进入视口后生效，不拖累首屏外元素","maxWaitMs 兜底，防止长时间连续滚动导致饥饿","支持 window / 容器两种监听对象"],YR=["长列表滚动时避免与主线程 / 带宽争抢","低端机滚动卡顿优化"],XR=["与 ConcurrencyControl 叠加效果最佳。","maxWaitMs 务必设置，否则连续滚动可能长期不加载。","容器模式会使用 context.containerRef.current 作为监听目标。"],ZR={name:AR,description:BR,since:UR,tags:FR,events:WR,methods:VR,methodsNote:HR,config:GR,example:qR,examples:QR,features:KR,useCases:YR,notes:XR},JR="SkeletonPlugin",e5="骨架屏占位：加载期显示 shimmer/pulse 骨架动画。",t5="2.0.0",n5=["visual","视觉"],o5=[{name:"renderOverlay",when:"每次渲染，覆盖在图片容器之上",description:"骨架屏、错误占位、水印、加载动画"}],r5=[],i5="只读取 context 字段（props / state / data），不调用上下文方法",s5=[{name:"type",type:'"shimmer" | "pulse"',default:'"shimmer"',description:"动画类型"},{name:"backgroundColor",type:"string",default:"#e5e7eb",description:"底色"},{name:"highlightColor",type:"string",default:"#f3f4f6",description:"shimmer 高亮色"},{name:"borderRadius",type:"number",default:"6",description:"圆角 px"},{name:"zIndex",type:"number",default:"1",description:"层叠顺序"},{name:"showWhen",type:'"always" | "loading"',default:'"loading"',description:"何时显示"}],a5=`// 加载期 shimmer 骨架占位
const SkeletonImage = withPlugins(LazyLoadImageCore, [
  createSkeletonPlugin({
    type: "shimmer",
    borderRadius: 8,
    showWhen: "loading",
  }),
]);

<SkeletonImage src="https://picsum.photos/seed/skeleton/600/400" alt="骨架屏" />;`,l5=[{name:"Shimmer 骨架",description:"流光骨架，提示内容加载中，圆角 8。",src:"https://picsum.photos/seed/skeleton-shimmer/600/400",config:{type:"shimmer",borderRadius:8,showWhen:"loading"}},{name:"Pulse 骨架",description:"呼吸式明暗变化，更克制的占位动画。",src:"https://picsum.photos/seed/skeleton-pulse/600/400",config:{type:"pulse",backgroundColor:"#eee",highlightColor:"#f5f5f5",borderRadius:8}}],c5=["shimmer（流光）/ pulse（呼吸）两种动画","底色 / 高亮色 / 圆角可调","加载完成自动淡出","零图片请求，首屏即见"],u5=["列表 / 卡片加载占位","首屏骨架屏","与 BlurUp / LQIP 配合的兜底占位","弱网环境体验优化"],d5=['showWhen:"loading" 表示仅在加载期显示，图片就绪后自动让位。',"与 BlurUp 叠加时，建议骨架层级低于模糊图（zIndex 较小）。"],p5={name:JR,description:e5,since:t5,tags:n5,events:o5,methods:r5,methodsNote:i5,config:s5,example:a5,examples:l5,features:c5,useCases:u5,notes:d5},m5="SocialSharePlugin",g5="社交分享：在商品图片上显示社交分享按钮，支持 6 大平台、悬停展开、自定义尺寸与分享回调。",f5="2.0.0",h5=["ecommerce","电商核心"],y5=[{name:"renderOverlay",when:"每次渲染，覆盖在图片容器之上",description:"骨架屏、错误占位、水印、加载动画"}],v5=[],w5="只读取 context 字段（props / state / data），不调用上下文方法",x5=[{name:"platforms",type:'Array<"facebook"|"twitter"|"pinterest"|"linkedin"|"whatsapp"|"wechat">',default:'["facebook","twitter","pinterest"]',description:"分享平台列表"},{name:"position",type:'"top-left" | "top-right" | "bottom-left" | "bottom-right"',default:'"top-right"',description:"主按钮位置"},{name:"showOnHover",type:"boolean",default:"false",description:"悬停显示模式"},{name:"title",type:"string",default:'"分享图片"',description:"分享标题"},{name:"description",type:"string",default:'""',description:"分享描述"},{name:"ogImage",type:"string",default:"undefined",description:"Pinterest 等使用的媒体图"},{name:"size",type:'"small" | "medium" | "large"',default:'"medium"',description:"按钮尺寸"},{name:"onShare",type:"(platform) => void",default:"undefined",description:"分享回调"},{name:"style",type:"React.CSSProperties",default:"{}",description:"自定义容器样式"}],b5=`// 1. 指定分享平台，点击展开具体入口
const ShareImage = withPlugins(LazyLoadImageCore, [
  createSocialSharePlugin({
    platforms: ["facebook", "twitter", "wechat"],
    title: "Amazing Product",
    description: "Check out this amazing product!",
    onShare: (platform) => track(platform),
  }),
]);

// 2. 悬停才显示分享按钮
createSocialSharePlugin({
  platforms: ["facebook", "twitter", "linkedin", "whatsapp"],
  position: "top-right",
  showOnHover: true,
});

// 3. 在组件中使用
<ShareImage src="https://picsum.photos/id/237/500/400" alt="商品图" />;`,P5=[{name:"默认分享按钮",description:"点击主按钮展开具体平台，再点平台进行分享。",src:"https://picsum.photos/id/237/500/400",config:{platforms:["facebook","twitter","pinterest"],position:"top-right",showOnHover:!1,title:"Amazing Product",description:"Check out this amazing product!"}},{name:"悬停显示（鼠标悬停时出现）",description:"默认隐藏，鼠标悬停图片才显示分享按钮。",src:"https://picsum.photos/id/247/500/400",config:{platforms:["facebook","twitter","linkedin","whatsapp"],position:"top-right",showOnHover:!0,size:"medium"}},{name:"更多平台（包含微信）",description:"小尺寸、右下角，覆盖 6 个平台。",src:"https://picsum.photos/id/257/500/400",config:{platforms:["facebook","twitter","pinterest","linkedin","whatsapp","wechat"],position:"bottom-right",showOnHover:!1,size:"small"}},{name:"大尺寸按钮",description:"左上角大尺寸分享按钮。",src:"https://picsum.photos/id/267/500/400",config:{platforms:["facebook","twitter","pinterest"],position:"top-left",showOnHover:!1,size:"large"}}],$5=["支持 6 大社交平台：Facebook / Twitter / Pinterest / LinkedIn / WhatsApp / WeChat","悬停显示模式","3 种尺寸可选（small / medium / large）","4 个位置可选","展开 / 收起动画","分享回调通知","自定义分享标题和描述"],S5=["电商产品分享","内容营销推广","作品集展示","照片 / 图片社区","礼物推荐分享","房产 / 旅游分享"],C5=["`showOnHover: true` 时分享条只在悬停出现；示例页默认常驻便于观察。","微信没有可直接打开的分享 URL，走 `onShare` 回调由业务方接入。"],L5={name:m5,description:g5,since:f5,tags:h5,events:y5,methods:v5,methodsNote:w5,config:x5,example:b5,examples:P5,features:$5,useCases:S5,notes:C5},k5="Spin360Plugin",I5="360° 环物旋转（gallery 核心插件）：把 images 当逐帧序列，拖拽或自动播放切换帧，覆盖主图显示。",_5="2.1.0",E5=["gallery","图集","360","环物","旋转"],R5=[{name:"galleryOverlay",when:"渲染图库大图浮层时",description:"大图视图、切换器、关闭按钮等浮层内容"}],z5=[{name:"setFrameIndex",signature:"ctx.setFrameIndex(i: number): void",description:"切换 360° 环物当前帧（写入图集协调态，触发重新渲染）"}],D5=[{name:"sensitivity",type:"number",default:"6",description:"拖拽灵敏度：像素位移超过该值才翻一帧"},{name:"autoPlay",type:"boolean",default:"false",description:"是否自动旋转"},{name:"autoPlayInterval",type:"number",default:"120",description:"自动旋转间隔（ms）"}],O5=`import { GalleryCore } from "vane-lazy-image/gallery";
import { createSpin360Plugin } from "vane-lazy-image/custom-plugins/Spin360Plugin";

<GalleryCore images={frames} plugins={[createSpin360Plugin({ autoPlay: true })]} />`,j5=[{name:"拖拽旋转",description:"在画布上左右拖拽切换 360 帧。",config:{autoPlay:!1}},{name:"自动旋转",description:"autoPlay 开启后自动逐帧旋转，适合展示。",config:{autoPlay:!0,autoPlayInterval:120}}],M5=["拖拽旋转 360°","自动播放","帧计数显示","逐帧序列（images 即帧）"],T5=["商品 360 环物展示","模型/预览图旋转","全景预览"],N5=["images 数组即 360 帧序列；少于 2 帧时不渲染。覆盖层 zIndex 5，独立于底层主图加载。"],A5={name:k5,description:I5,since:_5,tags:E5,events:R5,methods:z5,config:D5,example:O5,examples:j5,features:M5,useCases:T5,notes:N5},B5="SvgPlaceholderPlugin",U5="SVG 占位：在加载期间注入自定义 SVG 占位内容（如骨架、品牌图形），加载成功后淡出，增强加载反馈与品牌感。",F5="2.0.0",W5=["other","视觉","占位"],V5=[{name:"renderOverlay",when:"每次渲染，覆盖在图片容器之上",description:"骨架屏、错误占位、水印、加载动画"}],H5=[],G5="只读取 context 字段（props / state / data），不调用上下文方法",q5=[{name:"svgContent",type:"string | ((context) => string)",default:"undefined",description:"SVG 字符串或动态生成函数"},{name:"background",type:"string",default:'"transparent"',description:"叠加层背景"},{name:"opacity",type:"number",default:"1",description:"不透明度(0~1)"},{name:"zIndex",type:"number",default:"3",description:"叠加层级"},{name:"showWhen",type:'"always" | "idle" | "loading" | "loaded" | "error"',default:'"loading"',description:"显示条件"},{name:"fadeOutOnLoaded",type:"boolean",default:"true",description:"加载成功后是否淡出"}],Q5=`const SvgImage = withPlugins(LazyLoadImageCore, [
  createSvgPlaceholderPlugin({
    svgContent: () => \`<svg viewBox='0 0 100 100'><circle cx='50' cy='50' r='40' fill='#ddd'/></svg>\`,
    showWhen: "loading",
  }),
]);

<SvgImage src="https://picsum.photos/id/1015/500/300" alt="SVG 占位示例" />;`,K5=[{name:"圆形骨架占位",description:"加载期显示灰色圆形 SVG 占位，完成后淡出。",src:"https://picsum.photos/id/1015/500/300",config:{svgContent:"<svg viewBox='0 0 100 100'><circle cx='50' cy='50' r='40' fill='#ddd'/></svg>",showWhen:"loading"}},{name:"带背景占位",description:"浅色背景衬托占位 SVG。",src:"https://picsum.photos/id/1021/500/300",config:{svgContent:"<svg viewBox='0 0 100 100'><rect x='10' y='10' width='80' height='80' rx='8' fill='#eee'/></svg>",background:"#fafafa"}},{name:"常驻标识",description:"showWhen=always，占位层持续显示。",src:"https://picsum.photos/id/1026/500/300",config:{svgContent:"<svg viewBox='0 0 100 100'><rect width='100' height='100' fill='rgba(0,0,0,0.04)'/></svg>",showWhen:"always"}}],Y5=["注入任意 SVG 占位","加载时/常驻/多状态显示","淡出过渡","背景/透明度/层级可调","函数/字符串来源"],X5=["动画骨架屏","品牌图形占位","加载反馈","差异化占位"],Z5=["svgContent 支持函数型（按 context 动态生成），静态预览使用字符串；函数用法见用法示例。"],J5={name:B5,description:U5,since:F5,tags:W5,events:V5,methods:H5,methodsNote:G5,config:q5,example:Q5,examples:K5,features:Y5,useCases:X5,notes:Z5},e3="ThumbPreloadPlugin",t3="相邻图预加载（gallery 增强插件）：监听主图切换事件，预加载后续若干张到浏览器缓存，使切换近乎瞬时。",n3="2.1.0",o3=["gallery","图集","预加载","性能"],r3=[{name:"onActiveChange",when:"图库当前激活图切换后",description:"同步缩略图高亮、预加载相邻图、更新 URL"}],i3=[],s3="只读取 context 字段（props / state / data），不调用上下文方法",a3=[{name:"lookahead",type:"number",default:"1",description:"向后预加载张数"},{name:"alsoPrevious",type:"boolean",default:"false",description:"是否也预加载前一张"}],l3=`import { GalleryCore } from "vane-lazy-image/gallery";
import { createThumbPreloadPlugin } from "vane-lazy-image/custom-plugins/ThumbPreloadPlugin";

<GalleryCore images={images} plugins={[createThumbPreloadPlugin({ lookahead: 2 })]} />`,c3=[{name:"预加载相邻图",description:"切换主图后预热后 2 张（及前一张），缩略条点击切换零白屏；同 URL 只预热一次。",config:{lookahead:2,alsoPrevious:!0}}],u3=["onActiveChange 监听","相邻图预热","模块级去重","纯副作用无 UI"],d3=["大图图集","弱网流畅切换","电商商品多图"],p3=["不渲染 UI；预热在 GalleryCore 的切换 effect 内执行，安全副作用。"],m3={name:e3,description:t3,since:n3,tags:o3,events:r3,methods:i3,methodsNote:s3,config:a3,example:l3,examples:c3,features:u3,useCases:d3,notes:p3},g3="ThumbSyncPlugin",f3="缩略图联动（gallery 核心插件）：渲染缩略图条，点击缩略图切换主图，选中态描边高亮。",h3="2.1.0",y3=["gallery","图集","缩略","联动"],v3=[{name:"galleryThumbArea",when:"渲染图库缩略图条时",description:"底部 / 侧边缩略图列表"}],w3=[{name:"setActiveIndex",signature:"ctx.setActiveIndex(i: number): void",description:"切换图库当前激活图索引，并联动缩略图与预加载"}],x3=[{name:"gap",type:"number",default:"8",description:"缩略图间距（px）"},{name:"thumbWidth",type:"number",default:"64",description:"缩略图宽（px）"},{name:"thumbHeight",type:"number",default:"64",description:"缩略图高（px）"},{name:"showActiveRing",type:"boolean",default:"true",description:"选中缩略图描边高亮"},{name:"radius",type:"number",default:"6",description:"缩略图圆角（px）"}],b3=`import { GalleryCore } from "vane-lazy-image/gallery";
import { createThumbSyncPlugin } from "vane-lazy-image/custom-plugins/ThumbSyncPlugin";

<GalleryCore images={images} plugins={[createThumbSyncPlugin()]} />`,P3=[{name:"基础缩略联动",description:"点击缩略图切换主图，选中态描边；键盘左右键也可切换（Core 级支持）。",config:{}}],$3=["缩略图条渲染","点击切换主图","选中态描边","键盘左右键切换（GalleryCore 级）"],S3=["电商商品图集","多图详情页","相册"],C3=["activeIndex 由 useGalleryRuntime 用 useState 持有，切换即主图重渲染，无需手动 forceUpdate。"],L3={name:g3,description:f3,since:h3,tags:y3,events:v3,methods:w3,config:x3,example:b3,examples:P3,features:$3,useCases:S3,notes:C3},k3="TransitionPlugin",I3="加载成功过渡动画：从指定透明度/缩放到目标值的平滑过渡。",_3="2.0.0",E3=["visual","视觉"],R3=[{name:"onMount",when:"组件挂载完成、插件注册后执行一次（返回的清理函数在 manager.clear 时逆序执行）",description:"初始化副作用：注册监听、起定时器、建观察器；必须返回清理函数或配合 onUnmount 收尾"},{name:"onLoadSuccess",when:"图片成功解码可显示时",description:"拿到最终 displaySrc 做后续动作（上报、预取下张、淡入）"}],z3=[],D3="只读取 context 字段（props / state / data），不调用上下文方法",O3=[{name:"durationMs",type:"number",default:"400",description:"过渡时长 ms"},{name:"easing",type:"string",default:"ease",description:"缓动函数"},{name:"fromOpacity",type:"number",default:"0",description:"起始透明度"},{name:"toOpacity",type:"number",default:"1",description:"结束透明度"},{name:"fromScale",type:"number",default:"1",description:"起始缩放"},{name:"toScale",type:"number",default:"1",description:"结束缩放"}],j3=`// 缩放 + 淡入过渡
const TransImage = withPlugins(LazyLoadImageCore, [
  createTransitionPlugin({
    durationMs: 500,
    fromOpacity: 0,
    toOpacity: 1,
    fromScale: 1.05,
    toScale: 1,
  }),
]);

<TransImage src="https://picsum.photos/seed/transition/600/400" alt="过渡" />;`,M3=[{name:"缩放淡入",description:"从 1.05 倍淡入到原尺寸，轻盈的入场感。",src:"https://picsum.photos/seed/transition-zoom/600/400",config:{durationMs:500,fromOpacity:0,toOpacity:1,fromScale:1.05,toScale:1}},{name:"纯淡入",description:"仅透明度过渡，不含缩放。",src:"https://picsum.photos/seed/transition-fade/600/400",config:{durationMs:400,fromOpacity:0,toOpacity:1}}],T3=["透明度 + 缩放双维度过渡","起始 / 结束值均可定制","时长与缓动可调","相比 FadeIn 更灵活"],N3=["图片入场动画","卡片翻转 / 弹出图","需要缩放感的场景","与视差 / 滚动联动"],A3=["fromScale=toScale=1 时退化为纯淡入，等价于更轻量的 FadeIn。","缩放在 transform 上实现，注意父容器 overflow 与定位。"],B3={name:k3,description:I3,since:_3,tags:E3,events:R3,methods:z3,methodsNote:D3,config:O3,example:j3,examples:M3,features:T3,useCases:N3,notes:A3},U3="UserBehaviorPlugin",F3="用户行为：实时统计每张图片的视口驻留时长、点击次数、进入/离开次数，并在图片上叠加可视化面板，卸载时统一上报。",W3="2.0.0",V3=["viewport","视口与交互","数据","分析"],H3=[{name:"onMount",when:"组件挂载完成、插件注册后执行一次（返回的清理函数在 manager.clear 时逆序执行）",description:"初始化副作用：注册监听、起定时器、建观察器；必须返回清理函数或配合 onUnmount 收尾"},{name:"onUnmount",when:"组件卸载前执行一次",description:"释放监听、定时器与观察器；与 onMount 成对出现，避免泄漏"},{name:"onLoadSuccess",when:"图片成功解码可显示时",description:"拿到最终 displaySrc 做后续动作（上报、预取下张、淡入）"},{name:"onEnterViewport",when:"元素进入视口（IntersectionObserver）",description:"触发懒加载、开始请求、曝光上报"},{name:"onLeaveViewport",when:"元素离开视口",description:"暂停 / 中止在途请求、回收资源"},{name:"transformProps",when:"渲染前链式改写图片 props",description:"补 sizes / 占位色 / 解码策略等"},{name:"renderOverlay",when:"每次渲染，覆盖在图片容器之上",description:"骨架屏、错误占位、水印、加载动画"}],G3=[],q3="只读取 context 字段（props / state / data），不调用上下文方法",Q3=[{name:"enabled",type:"boolean",default:"true",description:"是否启用统计与面板"},{name:"onReport",type:"(data: { src; dwellMs; clicks; enters; leaves }) => void",default:"undefined",description:"卸载时上报回调（默认打印到控制台）"},{name:"showOverlay",type:"boolean",default:"true",description:"是否在图片角落显示统计面板（生产版式建议关闭）"}],K3=`const BehaviorImage = withPlugins(LazyLoadImageCore, [
  createUserBehaviorPlugin({
    onReport: (data) => {
      // 上报到分析后端
      console.log("behavior", data);
    },
  }),
]);

// 在组件中使用
<BehaviorImage src="https://picsum.photos/id/1015/500/300" alt="用户行为示例" />;`,Y3=[{name:"默认统计面板",description:"右上角实时显示驻留、点击、进入/离开数据。",src:"https://picsum.photos/id/1015/500/300",config:{enabled:!0}},{name:"关闭统计",description:"enabled=false 时不渲染面板也不统计。",src:"https://picsum.photos/id/1021/500/300",config:{enabled:!1}}],X3=["实时统计驻留时长","点击次数统计","进入 / 离开次数统计","视口状态指示（绿/红点）","卸载时统一上报","可通过 enabled 关闭"],Z3=["内容热度分析","广告位效果评估","UX 研究与转化漏斗","图片曝光与互动埋点"],J3=["统计结果在卸载时通过 `onReport` 上报（默认打印控制台），示例页用面板实时展示。","`enabled: false` 可整体关闭统计与面板，不影响图片加载。","showOverlay: false 只上报数据、不渲染角标，适合直接接入真实版式。"],ez={name:U3,description:F3,since:W3,tags:V3,events:H3,methods:G3,methodsNote:q3,config:Q3,example:K3,examples:Y3,features:X3,useCases:Z3,notes:J3},tz="VideoPosterPlugin",nz="视频海报：将图片作为视频封面，点击播放视频（模态框或内联），支持自动播放、循环、静音与自定义按钮。",oz="2.0.0",rz=["ecommerce","电商核心"],iz=[{name:"renderOverlay",when:"每次渲染，覆盖在图片容器之上",description:"骨架屏、错误占位、水印、加载动画"}],sz=[],az="只读取 context 字段（props / state / data），不调用上下文方法",lz=[{name:"videoUrl",type:"string",default:"undefined",description:"视频 URL"},{name:"autoPlay",type:"boolean",default:"true",description:"自动播放"},{name:"loop",type:"boolean",default:"false",description:"循环播放"},{name:"muted",type:"boolean",default:"true",description:"静音（移动端自动播放需静音）"},{name:"playButtonPosition",type:'"center" | "top-left" | "top-right" | "bottom-left" | "bottom-right"',default:'"center"',description:"播放按钮位置"},{name:"playButtonSize",type:'"small" | "medium" | "large"',default:'"large"',description:"按钮尺寸"},{name:"playButtonStyle",type:"React.CSSProperties",default:"{}",description:"自定义按钮样式"},{name:"showPlayButton",type:"boolean",default:"true",description:"是否显示播放按钮"},{name:"playInModal",type:"boolean",default:"true",description:"模态框播放（否则内联）"},{name:"playIcon",type:"ReactNode",default:"undefined",description:"自定义播放图标"},{name:"onPlay",type:"() => void",default:"undefined",description:"播放回调"}],cz=`// 1. 点击播放按钮，在模态框中播放视频
const VideoImage = withPlugins(LazyLoadImageCore, [
  createVideoPosterPlugin({
    videoUrl: "https://example.com/clip.mp4",
    playInModal: true,
    muted: true,
  }),
]);

// 2. 内联播放（直接在图片位置播放，带循环与自动播放）
createVideoPosterPlugin({
  videoUrl: "https://example.com/clip.mp4",
  playInModal: false,
  autoPlay: true,
  loop: true,
  muted: true,
});

// 3. 在组件中使用
<VideoImage src="https://picsum.photos/id/1015/500/300" alt="商品视频封面" />;`,uz=[{name:"基础视频海报（模态框播放）",description:"点击图片中心播放按钮，在模态框中播放视频。",src:"https://picsum.photos/id/1015/500/300",config:{videoUrl:"https://www.w3schools.com/html/mov_bbb.mp4",playButtonPosition:"center",playButtonSize:"large"}},{name:"内联播放模式",description:"视频直接在图片位置播放，不弹出模态框。",src:"https://picsum.photos/id/1018/500/300",config:{videoUrl:"https://www.w3schools.com/html/movie.mp4",playInModal:!1,playButtonPosition:"center",playButtonSize:"medium",autoPlay:!0,loop:!0,muted:!0}},{name:"自定义播放按钮样式",description:"按钮位于右下角，红色背景，小尺寸。",src:"https://picsum.photos/id/1019/500/300",config:{videoUrl:"https://www.w3schools.com/html/mov_bbb.mp4",playButtonPosition:"bottom-right",playButtonSize:"small",playButtonStyle:{backgroundColor:"rgba(255, 59, 48, 0.9)",border:"2px solid white"}}},{name:"自定义播放图标",description:"示例以默认三角形呈现；可用 playIcon 替换为自定义图标（如 “PLAY” 文字）。",src:"https://picsum.photos/id/1020/500/300",config:{videoUrl:"https://www.w3schools.com/html/mov_bbb.mp4",playButtonPosition:"center",playButtonSize:"large"}},{name:"不同按钮位置",description:"播放按钮位于左上角，绿色背景。",src:"https://picsum.photos/id/1021/500/300",config:{videoUrl:"https://www.w3schools.com/html/mov_bbb.mp4",playButtonPosition:"top-left",playButtonSize:"small",playButtonStyle:{backgroundColor:"rgba(52, 199, 89, 0.9)"}}}],dz=["使用提示：确保视频 URL 可访问，否则播放会失败；移动端自动播放可能受浏览器限制，建议设置 muted=true；大视频文件建议使用流媒体服务；模态框播放体验更好但会阻断其它交互；内联播放适合小尺寸视频预览。"],pz=["模态框播放（全屏）","内联播放（图片位置直接播）","自定义播放按钮大小 / 位置 / 样式","多位置支持（center / top-left / bottom-left / bottom-right）","播放控制（自动播放 / 循环 / 静音）","自定义图标"],mz=["视频网站","在线教育","电商平台（商品视频展示）","新闻媒体","视频博客","企业官网"],gz={name:tz,description:nz,since:oz,tags:rz,events:iz,methods:sz,methodsNote:az,config:lz,example:cz,examples:uz,notes:dz,features:pz,useCases:mz},fz="ViewportAwarePlugin",hz="视口感知加载：真正把 IntersectionObserver 的 rootMargin / threshold / once 下发给核心，控制图片「提前多少距离 / 多灵敏」才触发加载，并在四角显示绿/灰指示点辅助观察。",yz="2.0.0",vz=["viewport","视口与交互","懒加载"],wz=[{name:"onEnterViewport",when:"元素进入视口（IntersectionObserver）",description:"触发懒加载、开始请求、曝光上报"},{name:"onLeaveViewport",when:"元素离开视口",description:"暂停 / 中止在途请求、回收资源"},{name:"transformProps",when:"渲染前链式改写图片 props",description:"补 sizes / 占位色 / 解码策略等"},{name:"renderOverlay",when:"每次渲染，覆盖在图片容器之上",description:"骨架屏、错误占位、水印、加载动画"}],xz=[],bz="只读取 context 字段（props / state / data），不调用上下文方法",Pz=[{name:"rootMargin",type:"string",default:"未设置（沿用 Core 默认 0px）",description:'IO 边距，控制提前/延后触发。如 "200px" 表示进入视口前 200px 就开始加载（预加载），"-50px" 表示进入后再等 50px'},{name:"threshold",type:"number | number[]",default:"未设置",description:"IO 触发阈值（0~1），控制加载灵敏度"},{name:"once",type:"boolean",default:"true",description:"是否只加载一次：true=进入视口加载后停止观察（省资源）；false=持续观察"},{name:"unobserveOnVisible",type:"boolean",default:"由 once 推导",description:"显式下发，优先级高于 once"},{name:"showDot",type:"boolean",default:"false",description:"是否显示视口指示点（仅辅助观察，非核心能力）"},{name:"dotPosition",type:'"top-left" | "top-right" | "bottom-left" | "bottom-right"',default:'"bottom-right"',description:"指示点位置"},{name:"hideWhenOut",type:"boolean",default:"false",description:"离开视口时隐藏指示点"}],$z=`const ViewportImage = withPlugins(LazyLoadImageCore, [
  // 提前 200px 预加载，进入视口即就绪，滚动更顺滑
  createViewportAwarePlugin({ rootMargin: "200px", threshold: 0.01, showDot: true }),
]);

<ViewportImage src="https://picsum.photos/id/1015/500/300" alt="视口感知示例" />;`,Sz=[{name:"提前预加载（rootMargin 200px）",description:"元素进入视口前 200px 就开始加载，滚到时图片已就绪，消除白屏。",src:"https://picsum.photos/id/1015/500/300",config:{rootMargin:"200px",threshold:.01,showDot:!0}},{name:"严格进入才加载（rootMargin 0px）",description:"默认行为：图片真正进入视口边缘才触发加载。",src:"https://picsum.photos/id/1024/500/300",config:{rootMargin:"0px",showDot:!0,dotPosition:"top-left"}},{name:"离开时隐藏指示点",description:"仅在进入视口显示绿点，离开后隐藏。",src:"https://picsum.photos/id/1035/500/300",config:{rootMargin:"100px",showDot:!0,dotPosition:"top-right",hideWhenOut:!0}}],Cz=["rootMargin 真正下发，控制提前/延后加载距离","threshold 调节加载灵敏度","once / unobserveOnVisible 控制是否只加载一次","四角可选指示点（辅助观察真实 IO 状态）","onEnterViewport / onLeaveViewport 事件钩子"],Lz=["长列表滚动预加载（rootMargin 提前量）","调试图片加载时机（配合指示点）","无限滚动 / 瀑布流场景","首屏 LCP 图片前的视口调度"],kz=["核心能力是 transformProps 把 IO 配置下发给核心，而不是装饰层；showDot 仅为观察辅助，可关闭。","once=false 仅表示持续观察，核心仍按加载状态只加载一次；如需「离开再回来重新加载」请配合 reload/reset 钩子。"],Iz={name:fz,description:hz,since:yz,tags:vz,events:wz,methods:xz,methodsNote:bz,config:Pz,example:$z,examples:Sz,features:Cz,useCases:Lz,notes:kz},_z="ViewportDebouncePlugin",Ez="视口防抖（v2 真实实现）：进入视口后并不立即加载，而是等待元素「稳定停留 debounceMs」才放行；若期间离开视口且未达 maxWaitMs 上限，则中止本次加载，真正避免快速滚动时误加载/重复加载。",Rz="2.0.0",zz=["viewport","视口与交互","防抖"],Dz=[{name:"onUnmount",when:"组件卸载前执行一次",description:"释放监听、定时器与观察器；与 onMount 成对出现，避免泄漏"},{name:"onBeforeLoad",when:"发起图片请求之前",description:"返回 false 可阻断本次加载（如权限校验、占位策略）"},{name:"onEnterViewport",when:"元素进入视口（IntersectionObserver）",description:"触发懒加载、开始请求、曝光上报"},{name:"onLeaveViewport",when:"元素离开视口",description:"暂停 / 中止在途请求、回收资源"}],Oz=[],jz="只读取 context 字段（props / state / data），不调用上下文方法",Mz=[{name:"debounceMs",type:"number",default:"200",description:"进入视口后需稳定停留的时长（毫秒），到时才放行加载"},{name:"maxWaitMs",type:"number",default:"1200",description:"最长等待上限，避免快速来回一直不加载（饥饿保护）"},{name:"onlyWhenIntersecting",type:"boolean",default:"true",description:"仅在进入视口时门控；若离开且未达 maxWaitMs 则中止本次加载"},{name:"debug",type:"boolean",default:"false",description:"是否输出调试日志"}],Tz=`const StableImage = withPlugins(LazyLoadImageCore, [
  // 进入视口稳定 200ms 才加载，快速划过直接放弃
  createViewportDebouncePlugin({ debounceMs: 200, maxWaitMs: 1200 }),
]);

<StableImage src="https://picsum.photos/id/1015/500/300" alt="视口防抖示例" />;`,Nz=[{name:"默认防抖（200ms）",description:"快速滚动时抑制抖动：元素需稳定停留 200ms 才加载，一闪而过的不加载。",src:"https://picsum.photos/id/1015/500/300",config:{debounceMs:200}},{name:"加大防抖间隔",description:"300ms 间隔，更适合惯性较大的移动端滚动。",src:"https://picsum.photos/id/1020/500/300",config:{debounceMs:300}},{name:"开启调试日志",description:"控制台输出稳定/中止判定日志，便于排查。",src:"https://picsum.photos/id/1025/500/300",config:{debounceMs:200,debug:!0}}],Az=["门控钩子真正延迟加载到稳定期","快速划过（离开未达上限）中止加载","maxWaitMs 饥饿保护","可调防抖间隔与上限","调试日志输出"],Bz=["快速滚动列表 / 瀑布流","移动端惯性滚动","防止抖动导致的重复加载","仅加载用户真正停留浏览的图片"],Uz=["依赖引擎门控能力（onBeforeLoad 返回 false 中止加载），已在本插件中落地；与 ViewportAware 的 rootMargin 搭配可进一步调优触发时机。"],Fz={name:_z,description:Ez,since:Rz,tags:zz,events:Dz,methods:Oz,methodsNote:jz,config:Mz,example:Tz,examples:Nz,features:Az,useCases:Bz,notes:Uz},Wz="ViewportDwellPlugin",Vz="视口驻留门控（v2 真实实现）：在真正加载前要求图片在视口内持续停留 dwellMs，快速划过（停留不足且离开）则中止加载；超过 maxWaitMs 后放行以防饥饿。",Hz="2.0.0",Gz=["viewport","视口与交互","驻留","省流量"],qz=[{name:"onUnmount",when:"组件卸载前执行一次",description:"释放监听、定时器与观察器；与 onMount 成对出现，避免泄漏"},{name:"onBeforeLoad",when:"发起图片请求之前",description:"返回 false 可阻断本次加载（如权限校验、占位策略）"},{name:"onEnterViewport",when:"元素进入视口（IntersectionObserver）",description:"触发懒加载、开始请求、曝光上报"},{name:"onLeaveViewport",when:"元素离开视口",description:"暂停 / 中止在途请求、回收资源"}],Qz=[],Kz="只读取 context 字段（props / state / data），不调用上下文方法",Yz=[{name:"dwellMs",type:"number",default:"250",description:"需要在视口中持续停留的时间（毫秒），不足视为「划过」不加载"},{name:"maxWaitMs",type:"number",default:"1500",description:"最长等待时间（毫秒），超时仍允许加载以防饥饿"},{name:"onlyWhenIntersecting",type:"boolean",default:"true",description:"仅在进入视口时应用驻留判断；离开且未达上限则中止"},{name:"debug",type:"boolean",default:"false",description:"是否输出调试日志"}],Xz=`const DwellImage = withPlugins(LazyLoadImageCore, [
  // 停留不足 250ms 的划过不加载，长留才加载
  createViewportDwellPlugin({ dwellMs: 250, maxWaitMs: 1500 }),
]);

<DwellImage src="https://picsum.photos/id/1015/500/300" alt="视口驻留示例" />;`,Zz=[{name:"默认驻留（250ms）",description:"划过即中止，停留足够才加载，提升命中率。",src:"https://picsum.photos/id/1015/500/300",config:{dwellMs:250}},{name:"延长驻留时间",description:"400ms 驻留门槛，适合快速浏览场景。",src:"https://picsum.photos/id/1021/500/300",config:{dwellMs:400}},{name:"开启调试日志",description:"控制台输出驻留门控过程，便于调参。",src:"https://picsum.photos/id/1026/500/300",config:{dwellMs:250,debug:!0}}],Jz=["门控钩子真正延迟/中止加载（非空头）","驻留时间不足且离开 → 中止加载","maxWaitMs 饥饿保护（超时放行）","仅在进入视口时生效","调试日志输出"],eD=["无限滚动信息流","防止快速滑动误加载","节省带宽与请求数","提升有效加载命中率"],tD=["v2 起通过引擎 onBeforeLoad 门控真实生效（旧版写在被引擎丢弃的钩子上，实际未拦截）；与 ViewportAware 的 rootMargin 搭配可进一步调优触发时机。"],nD={name:Wz,description:Vz,since:Hz,tags:Gz,events:qz,methods:Qz,methodsNote:Kz,config:Yz,example:Xz,examples:Zz,features:Jz,useCases:eD,notes:tD},oD="WatermarkPlugin",rD="文字水印覆盖层：支持四角/中心定位、动态文本与样式定制。",iD="2.0.0",sD=["visual","视觉"],aD=[{name:"renderOverlay",when:"每次渲染，覆盖在图片容器之上",description:"骨架屏、错误占位、水印、加载动画"}],lD=[],cD="只读取 context 字段（props / state / data），不调用上下文方法",uD=[{name:"text",type:"string | ((src: string) => string)",default:'"© 2024 Vane"',description:"水印文本；可传函数按 src 动态生成"},{name:"position",type:'"top-left" | "top-right" | "bottom-left" | "bottom-right" | "center"',default:'"bottom-right"',description:"水印位置"},{name:"opacity",type:"number",default:"0.8",description:"0~1 透明度"},{name:"fontSize",type:"number",default:"12",description:"px 字号"},{name:"color",type:"string",default:'"#fff"',description:"文字颜色"},{name:"offsetX",type:"number",default:"8",description:"px 水平偏移"},{name:"offsetY",type:"number",default:"8",description:"px 垂直偏移"},{name:"zIndex",type:"number",default:"2",description:"层叠顺序"},{name:"enabled",type:"boolean",default:"true",description:"是否启用"}],dD=`// 版权水印：右下角、半透明
const MarkedImage = withPlugins(LazyLoadImageCore, [
  createWatermarkPlugin({
    text: "© 2026 Vane",
    position: "bottom-right",
    opacity: 0.6,
    fontSize: 14,
    color: "#ffffff",
  }),
]);

// 按图片地址动态派生水印
createWatermarkPlugin({
  text: (src) => \`watermark • \${src.split("/").pop()}\`,
  position: "center",
  opacity: 0.22,
  fontSize: 28,
});`,pD=[{name:"版权水印（右下角）",description:"半透明白字落在右下角，常见版权标识场景。",src:"https://picsum.photos/seed/wm-copyright/600/400",config:{text:"© 2026 Vane",position:"bottom-right",opacity:.6,fontSize:14,color:"#ffffff"}},{name:"中心品牌水印",description:"居中、低透明度大字，适合图库/作品集防盗用。",src:"https://picsum.photos/seed/wm-center/600/400",config:{text:"VANE",position:"center",opacity:.22,fontSize:30,color:"#ffffff"}},{name:"左上角说明水印",description:"左上角小字，作来源/批次标注。",src:"https://picsum.photos/seed/wm-topleft/600/400",config:{text:"内部素材 • 勿外传",position:"top-left",opacity:.85,fontSize:12,color:"#ffd400"}}],mD=["五位置可选（四角 + 中心）","文本支持静态字符串或函数动态派生","可调透明度 / 字号 / 颜色 / 偏移","可整体启停（enabled）","层叠顺序可控（zIndex）"],gD=["图片版权 / 品牌标识","图库与作品集防盗用","内部素材来源 / 批次标注","活动海报统一角标","按用户 / 租户动态打标"],fD=["text 传函数时按图片 src 动态生成（如嵌入 ID），但场景示例画廊需用静态文本以保证实时预览。","中心水印透明度建议低于 0.3，避免遮挡主体内容。","水印为覆盖层（renderOverlay），不参与图片本身像素，导出原图不会被打标。"],hD={name:oD,description:rD,since:iD,tags:sD,events:aD,methods:lD,methodsNote:cD,config:uD,example:dD,examples:pD,features:mD,useCases:gD,notes:fD},yD="WebPPlugin",vD="WebP 优先：在支持 WebP 的环境中自动将图片重写为 .webp（或自定义链接），失败时回退原图，体积更小加载更快。",wD="2.0.0",xD=["other","网络","性能","WebP"],bD=[{name:"onLoad",when:"加载流程开始、需要确定最终图片地址时",description:"自定义加载逻辑，返回最终图片 URL（objectURL / dataURL / 原地址）"},{name:"onLoadError",when:"加载失败（网络错误、解码失败、超时）",description:"返回 true 表示错误已被处理（如切换备用源），否则继续走默认降级"}],PD=[],$D="只读取 context 字段（props / state / data），不调用上下文方法",SD=[{name:"enabled",type:"boolean",default:"true",description:"是否启用"},{name:"rewrite",type:"(src, ctx) => string | undefined",default:"undefined",description:"自定义重写函数：返回 webp 链接"},{name:"replaceExtensions",type:"string[]",default:'["jpg", "jpeg", "png"]',description:"需替换为 .webp 的扩展名"},{name:"appendQueryParam",type:"string",default:"undefined",description:'追加的查询参数，如 "format=webp"'},{name:"onDomains",type:"string[]",default:"[]（不限制）",description:"限定生效域名"},{name:"testSupport",type:"boolean",default:"true",description:"运行前检测浏览器是否支持 webp"}],CD=`const WebPImage = withPlugins(LazyLoadImageCore, [
  createWebPPlugin({
    replaceExtensions: ["jpg", "jpeg", "png"],
    testSupport: true,
  }),
]);

<WebPImage src="https://example.com/photo.jpg" alt="WebP 示例" />;`,LD=[{name:"默认 WebP 优化",description:"对支持的图床自动重写（本示例用无扩展名 URL，不触发改写，仅展示配置）。",src:"https://picsum.photos/id/1015/500/300",config:{enabled:!0}},{name:"限定域名",description:"仅在指定域名生效，避免误改其它资源。",src:"https://picsum.photos/id/1021/500/300",config:{onDomains:["cdn.example.com"]}},{name:"跳过支持检测",description:"testSupport=false 直接尝试改写（需图床确实提供 webp）。",src:"https://picsum.photos/id/1026/500/300",config:{testSupport:!1}}],kD=["自动 WebP 改写","扩展名替换","查询参数追加","域名限定","支持检测","失败回退原图"],ID=["图片体积优化","现代浏览器加速","CDN WebP 支持","流量节省"],_D=["启用后若 webp 链接加载失败会自动回退到原图，不会白屏；示例中的 picsum 链接无扩展名，不会触发扩展名改写，可安全预览。"],ED={name:yD,description:vD,since:wD,tags:xD,events:bD,methods:PD,methodsNote:$D,config:SD,example:CD,examples:LD,features:kD,useCases:ID,notes:_D},RD="ZoomControlPlugin",zD="按钮式缩放控制（gallery 增强插件）：在工具条渲染 − / 重置 / + 按钮，调整 context.zoom，GalleryCore 对主图施加 scale 变换。",DD="2.1.0",OD=["gallery","图集","缩放","放大"],jD=[{name:"galleryToolbarArea",when:"渲染图库工具栏时",description:"缩放、下载、分享等图库级操作"}],MD=[{name:"setZoom",signature:"ctx.setZoom(z: number): void",description:"设置图库缩放比例（按钮式缩放控制的写入入口）"}],TD=[{name:"step",type:"number",default:"0.5",description:"每步缩放增量"},{name:"min",type:"number",default:"1",description:"最小缩放"},{name:"max",type:"number",default:"4",description:"最大缩放"}],ND=`import { GalleryCore } from "vane-lazy-image/gallery";
import { createZoomControlPlugin } from "vane-lazy-image/custom-plugins/ZoomControlPlugin";

<GalleryCore images={images} plugins={[createZoomControlPlugin()]} />`,AD=[{name:"主图缩放",description:"点击 + 放大主图（scale 变换），>1 时主图区可滚动查看细节；点击重置回到 100%。",config:{}}],BD=["−/重置/+ 按钮","实时 scale 变换","缩放范围限制","与主图区滚动联动"],UD=["商品细节查看","高清图放大","材质纹理 inspection"],FD=["zoom 经 GalleryCore 的 context.zoom 施加到主图区；为协调态，切换即重渲染。"],WD={name:RD,description:zD,since:DD,tags:OD,events:jD,methods:MD,config:TD,example:ND,examples:AD,features:BD,useCases:UD,notes:FD};var VD=Object.defineProperty,HD=(e,t,n)=>t in e?VD(e,t,{enumerable:!0,configurable:!0,writable:!0,value:n}):e[t]=n,Qt=(e,t,n)=>HD(e,typeof t!="symbol"?t+"":t,n);let GD=class{constructor(t,n={}){Qt(this,"id"),Qt(this,"config"),Qt(this,"metrics"),Qt(this,"startTime"),Qt(this,"endTime"),this.id=t,this.config={enabled:n.enabled??!0,collectVitals:n.collectVitals??!0,enableDebug:n.enableDebug??!1,retentionTime:n.retentionTime??5*60*1e3},this.metrics={marks:{},measures:{},custom:{}},this.startTime=this.now(),this.config.collectVitals&&this.collectWebVitals(),this.config.enableDebug&&console.debug(`[PerformanceMonitor] Created: ${this.id}`)}now(){return performance.now()}mark(t){if(!this.config.enabled)return;const n=this.now();if(this.metrics.marks[t]=n,typeof performance<"u"&&performance.mark)try{performance.mark(`${this.id}:${t}`)}catch{}this.config.enableDebug&&console.debug(`[PerformanceMonitor] Mark: ${t} @ ${n.toFixed(2)}ms`)}measure(t,n,o){if(!this.config.enabled)return;const r=this.metrics.marks[n];if(r===void 0){console.warn(`[PerformanceMonitor] Start mark not found: ${n}`);return}const i=o?this.metrics.marks[o]:this.now();if(i===void 0){console.warn(`[PerformanceMonitor] End mark not found: ${o}`);return}const s=i-r;if(this.metrics.measures[t]=s,typeof performance<"u"&&performance.measure)try{performance.measure(`${this.id}:${t}`,`${this.id}:${n}`,o?`${this.id}:${o}`:void 0)}catch{}return this.config.enableDebug&&console.debug(`[PerformanceMonitor] Measure: ${t} = ${s.toFixed(2)}ms`),s}setCustomMetric(t,n){this.config.enabled&&(this.metrics.custom[t]=n)}collectWebVitals(){if(!(typeof performance>"u")){if(this.metrics.vitals={},performance.timing){const t=performance.timing,n=t.navigationStart;t.responseStart&&(this.metrics.vitals.ttfb=t.responseStart-n)}if(typeof PerformanceObserver<"u")try{new PerformanceObserver(t=>{const n=t.getEntries().find(o=>o.name==="first-contentful-paint");n&&this.metrics.vitals&&(this.metrics.vitals.fcp=n.startTime)}).observe({entryTypes:["paint"]}),new PerformanceObserver(t=>{const n=t.getEntries(),o=n[n.length-1];o&&this.metrics.vitals&&(this.metrics.vitals.lcp=o.startTime)}).observe({entryTypes:["largest-contentful-paint"]})}catch{}}}end(){this.endTime||(this.endTime=this.now(),this.mark("end"),this.config.enableDebug&&console.debug(`[PerformanceMonitor] Ended: ${this.id}`))}analyzeCriticalPath(){const t=this.metrics.marks,n={};return t.mount!==void 0&&t["load-start"]!==void 0&&(n.discoveryDelay=t["load-start"]-t.mount),t["load-start"]!==void 0&&t["load-end"]!==void 0&&(n.loadDelay=t["load-end"]-t["load-start"]),t["load-end"]!==void 0&&t["render-end"]!==void 0&&(n.renderDelay=t["render-end"]-t["load-end"]),Object.keys(n).length>0?n:void 0}generateRecommendations(){var o;const t=[],n=this.analyzeCriticalPath();return n!=null&&n.discoveryDelay&&n.discoveryDelay>100&&t.push(`发现延迟较高 (${n.discoveryDelay.toFixed(0)}ms)，考虑使用 preload 或提前触发加载`),n!=null&&n.loadDelay&&n.loadDelay>2e3&&t.push(`加载延迟较高 (${n.loadDelay.toFixed(0)}ms)，考虑优化图片大小或使用 CDN`),n!=null&&n.renderDelay&&n.renderDelay>50&&t.push(`渲染延迟较高 (${n.renderDelay.toFixed(0)}ms)，考虑优化渲染逻辑`),(o=this.metrics.vitals)!=null&&o.lcp&&this.metrics.vitals.lcp>2500&&t.push(`LCP 较慢 (${this.metrics.vitals.lcp.toFixed(0)}ms)，建议优化首屏图片加载`),t}getReport(){const t=this.endTime?this.endTime-this.startTime:this.now()-this.startTime;return{id:this.id,startTime:this.startTime,endTime:this.endTime,duration:t,metrics:this.metrics,criticalPath:this.analyzeCriticalPath(),recommendations:this.generateRecommendations()}}dispose(){if(typeof performance<"u")try{performance.getEntriesByType("mark").forEach(t=>{t.name.startsWith(`${this.id}:`)&&performance.clearMarks(t.name)}),performance.getEntriesByType("measure").forEach(t=>{t.name.startsWith(`${this.id}:`)&&performance.clearMeasures(t.name)})}catch{}this.config.enableDebug&&console.debug(`[PerformanceMonitor] Disposed: ${this.id}`)}};function dl(e,t){return new GD(e,t)}let qD=class{constructor(t={}){Qt(this,"monitors",new Map),Qt(this,"config"),this.config=t}getOrCreate(t){let n=this.monitors.get(t);return n||(n=dl(t,this.config),this.monitors.set(t,n)),n}getAllReports(){return Array.from(this.monitors.values()).map(t=>t.getReport())}cleanup(t=5*60*1e3){const n=performance.now();this.monitors.forEach((o,r)=>{const i=o.getReport();i.endTime&&n-i.endTime>t&&(o.dispose(),this.monitors.delete(r))})}disposeAll(){this.monitors.forEach(t=>t.dispose()),this.monitors.clear()}},Dn=null;function QD(e){return Dn||(Dn=new qD(e)),Dn}function KD(){Dn&&(Dn.disposeAll(),Dn=null)}var YD=Object.defineProperty,XD=(e,t,n)=>t in e?YD(e,t,{enumerable:!0,configurable:!0,writable:!0,value:n}):e[t]=n,Ze=(e,t,n)=>XD(e,typeof t!="symbol"?t+"":t,n);const Dp=class gn{constructor(){Ze(this,"observers",new Map),Ze(this,"elementToKey",new Map),Ze(this,"observerCallbacks",new Map),Ze(this,"observerStats",new Map),Ze(this,"rootIds",new WeakMap),Ze(this,"rootIdCounter",0),Ze(this,"totalCallbackExecutions",0),Ze(this,"debugMode",!1),Ze(this,"cleanupTimer")}static supportsIntersectionObserver(){return typeof IntersectionObserver<"u"}static getInstance(){return gn.instance||(gn.instance=new gn),gn.instance}setDebugMode(t){this.debugMode=t,t&&(console.log("[ObserverPool] Debug mode enabled"),console.log("[ObserverPool] Current stats:",this.getStats()))}startAutoCleanup(){typeof window>"u"||this.cleanupTimer||(this.cleanupTimer=setInterval(()=>{const t=Date.now(),n=6e4;if(this.observers.size===0){this.stopAutoCleanup();return}this.observerStats.forEach((o,r)=>{if(t-o.lastUsedAt>n&&o.elementCount===0){const i=this.observers.get(r);i&&(i.disconnect(),this.observers.delete(r),this.observerCallbacks.delete(r),this.observerStats.delete(r),this.debugMode&&console.log(`[ObserverPool] Auto-cleaned idle observer: ${r}`))}})},6e4))}stopAutoCleanup(){this.cleanupTimer&&(clearInterval(this.cleanupTimer),this.cleanupTimer=void 0)}getRootId(t){if(!t)return"null";let n=this.rootIds.get(t);return n||(n=`r${++this.rootIdCounter}`,this.rootIds.set(t,n)),n}getConfigKey(t){const{root:n,rootMargin:o="0px",threshold:r=0}=t,i=`root-${this.getRootId(n)}`,s=Array.isArray(r)?r.join(","):String(r);return`${i}|${o}|${s}`}observe(t,n,o={},r=!1){if(!gn.supportsIntersectionObserver()){try{n(!0)}catch(d){this.debugMode&&console.warn("[ObserverPool] fallback callback failed",d)}return()=>{}}const i=this.getConfigKey(o),s=Date.now();if(!this.observers.has(i)){let d;try{d=new IntersectionObserver(p=>{p.forEach(f=>{const v=this.observerCallbacks.get(i);v&&v.forEach(w=>{if(w.element===f.target){this.totalCallbackExecutions++;const b=this.observerStats.get(i);b&&(b.totalCallbacks++,b.lastUsedAt=Date.now()),w.callback(f.isIntersecting),w.unobserveOnVisible&&f.isIntersecting&&this.unobserve(f.target)}})})},{root:o.root||null,rootMargin:o.rootMargin||"0px",threshold:o.threshold??0})}catch(p){this.debugMode&&console.warn("[ObserverPool] IntersectionObserver unavailable, fallback to eager",p);try{n(!0)}catch{}return()=>{}}this.startAutoCleanup(),this.observers.set(i,d),this.observerCallbacks.set(i,new Set),this.observerStats.set(i,{key:i,elementCount:0,createdAt:s,lastUsedAt:s,totalCallbacks:0}),this.debugMode&&console.log(`[ObserverPool] Created new observer for config: ${i}`)}const a=this.observers.get(i),l=this.observerCallbacks.get(i),c={element:t,callback:n,unobserveOnVisible:r,addedAt:s};l.add(c),this.elementToKey.set(t,i);const u=this.observerStats.get(i);return u&&(u.elementCount++,u.lastUsedAt=s),a.observe(t),this.debugMode&&console.log(`[ObserverPool] Observing element, total: ${this.elementToKey.size}`),()=>this.unobserve(t)}unobserve(t){const n=this.elementToKey.get(t);if(!n)return;const o=this.observers.get(n),r=this.observerCallbacks.get(n);if(o&&r){o.unobserve(t);let i=0;Array.from(r).forEach(a=>{a.element===t&&(r.delete(a),i++)}),this.elementToKey.delete(t);const s=this.observerStats.get(n);s&&(s.elementCount=Math.max(0,s.elementCount-Math.max(1,i)),s.lastUsedAt=Date.now()),r.size===0&&this.debugMode&&console.log(`[ObserverPool] Observer ${n} has no elements (will auto-clean later)`)}}disconnectAll(){this.observers.forEach(t=>t.disconnect()),this.observers.clear(),this.observerCallbacks.clear(),this.elementToKey.clear(),this.observerStats.clear(),this.stopAutoCleanup(),this.debugMode&&console.log("[ObserverPool] Disconnected all observers")}getObserverCount(){return this.observers.size}getElementCount(){return this.elementToKey.size}getStats(){const t=this.observers.size,n=this.elementToKey.size,o=t>0?n/t:0,r=Date.now();let i,s,a;this.observerStats.forEach(u=>{const d=r-u.createdAt;(!i||d>i.age)&&(i={key:u.key,age:d}),(!s||d<s.age)&&(s={key:u.key,age:d}),(!a||u.elementCount>a.elementCount)&&(a={key:u.key,elementCount:u.elementCount})});const l=t*1024+n*100,c=l>1024*1024?`${(l/(1024*1024)).toFixed(2)} MB`:`${(l/1024).toFixed(2)} KB`;return{observerCount:t,elementCount:n,averageElementsPerObserver:Math.round(o*100)/100,oldestObserver:i,newestObserver:s,mostUsedObserver:a,totalCallbackExecutions:this.totalCallbackExecutions,memoryEstimate:c}}getObserverDetails(){return Array.from(this.observerStats.values())}cleanup(){let t=0;return this.observerCallbacks.forEach((n,o)=>{if(n.size===0){const r=this.observers.get(o);r&&(r.disconnect(),this.observers.delete(o),this.observerCallbacks.delete(o),this.observerStats.delete(o),t++)}}),this.debugMode&&console.log(`[ObserverPool] Manual cleanup: removed ${t} idle observers`),t}resetStats(){this.totalCallbackExecutions=0,this.observerStats.forEach(t=>{t.totalCallbacks=0}),this.debugMode&&console.log("[ObserverPool] Stats reset")}};Ze(Dp,"instance");let ZD=Dp;const Vt=ZD.getInstance(),Op=(e,t,n,o)=>Vt.observe(e,t,n,o),JD=e=>Vt.unobserve(e),eO=()=>Vt.getStats(),tO=e=>Vt.setDebugMode(e),nO=()=>Vt.getObserverDetails(),oO=()=>Vt.cleanup(),rO=()=>Vt.resetStats();function iO(e,t){switch(t.type){case"LOAD_START":return{status:"loading",displaySrc:t.payload.src,error:null,requestId:t.payload.requestId};case"LOAD_SUCCESS":return t.payload.requestId!==e.requestId?e:{...e,status:"loaded",displaySrc:t.payload.src||e.displaySrc,error:null};case"LOAD_ERROR":return t.payload.requestId!==e.requestId?e:{...e,status:"error",error:t.payload.error};case"RESET":return{status:"idle",displaySrc:null,error:null,requestId:e.requestId};default:return e}}function xt(e,t){if(!e||!t||e===t)return!0;try{const n=typeof document<"u"?document.baseURI:"http://localhost/";return new URL(e,n).href===new URL(t,n).href}catch{return!1}}function sO(e,t){const{root:n,rootMargin:o="200px 0px",threshold:r=0,unobserveOnVisible:i=!1}=t||{},[s,a]=x.useState(!1),l=x.useMemo(()=>JSON.stringify({rootMargin:o,threshold:r,unobserveOnVisible:i}),[o,r,i]);return x.useEffect(()=>{const c=e.current;if(!c)return;const u=Op(c,d=>{a(d)},{root:n||null,rootMargin:o,threshold:r},i);return()=>{u()}},[l,n]),{inView:s}}const jp=x.forwardRef((e,t)=>{const{src:n,alt:o="",root:r,rootMargin:i,threshold:s,unobserveOnVisible:a,loading:l="lazy",isLCP:c=!1,fetchPriority:u="auto",enablePerformanceMonitor:d=!1,onBeforeLoad:p,onLoadStart:f,onLoadSuccess:v,onLoadError:w,onEnterViewport:b,onLeaveViewport:h,children:g,containerStyle:y,containerClassName:P,imageStyle:$,imageClassName:C,aspectRatio:L,srcSet:k,sizes:M}=e,E=x.useRef(null),F=x.useRef(null),H=x.useRef(null),O=x.useRef(null);x.useEffect(()=>(d&&!O.current&&(O.current=dl(`lazy-image-${n}`,{enabled:!0,collectVitals:!1,enableDebug:!1}),O.current.mark("mount")),()=>{O.current&&(O.current.end(),O.current.dispose(),O.current=null)}),[d,n]);const[j,V]=x.useReducer(iO,{status:"idle",displaySrc:null,error:null,requestId:0}),me=x.useRef(null),ee=x.useRef(null),_=x.useRef(0),R=x.useRef(!1),D=x.useRef(n),A=x.useRef(0),B=x.useRef(null),[Me,ve]=x.useState(0),ot=5,rt=300,it=x.useMemo(()=>!(c||l==="eager"),[c,l]),{inView:vt}=sO(E,{root:r,rootMargin:i,threshold:s,unobserveOnVisible:a}),nm=x.useMemo(()=>c?"eager":l==="auto"?"lazy":l,[c,l]),hl=x.useMemo(()=>c?"high":u,[c,u]),bi=x.useRef(!1);x.useEffect(()=>{var W,_e;vt&&!bi.current?((W=O.current)==null||W.mark("enter-viewport"),b==null||b()):!vt&&bi.current&&((_e=O.current)==null||_e.mark("leave-viewport"),h==null||h()),bi.current=vt},[vt,b,h]);const yl=x.useCallback(()=>{A.current>=ot||(A.current+=1,B.current&&clearTimeout(B.current),B.current=setTimeout(()=>{B.current=null,ve(W=>W+1)},rt))},[]),Qo=x.useCallback(async()=>{var ae;if(!n.trim()){R.current=!1,me.current=null,ee.current=null,V({type:"RESET"});return}if(R.current||ee.current===n)return;R.current=!0,me.current=n;const W=++_.current;(ae=O.current)==null||ae.mark("load-start"),H.current&&H.current.abort(),H.current=new AbortController;const _e=H.current;f==null||f();try{const we=await Promise.resolve(p==null?void 0:p());if(_e.signal.aborted||_.current!==W)return;A.current=0;const Te=we||n;if(!Te.trim()){R.current=!1,V({type:"RESET"});return}V({type:"LOAD_START",payload:{src:Te,requestId:W}})}catch(we){if(_e.signal.aborted||_.current!==W)return;if((we==null?void 0:we.message)==="LLI_PLUGIN_GATE"){R.current=!1,V({type:"RESET"}),yl();return}R.current=!1,ee.current=n;const Te=we instanceof Error?we:new Error(String(we));V({type:"LOAD_ERROR",payload:{error:Te,requestId:W}}),w==null||w(Te)}},[n,p,f,w,yl]);x.useEffect(()=>{var W;D.current!==n&&(D.current=n,(W=H.current)==null||W.abort(),H.current=null,_.current+=1,R.current=!1,me.current=null,ee.current=null,A.current=0,B.current&&(clearTimeout(B.current),B.current=null),V({type:"RESET"}))},[n]),x.useEffect(()=>{it?vt&&Qo():Qo()},[vt,n,it,Me]),x.useEffect(()=>()=>{H.current&&(H.current.abort(),H.current=null),B.current&&(clearTimeout(B.current),B.current=null)},[]);const Pi=x.useCallback(()=>{V({type:"RESET"})},[]);x.useImperativeHandle(t,()=>({reload:()=>{var W;(W=H.current)==null||W.abort(),H.current=null,_.current+=1,R.current=!1,me.current=null,ee.current=null,A.current=0,Pi(),(!it||vt)&&Qo()},reset:()=>{var W;(W=H.current)==null||W.abort(),H.current=null,_.current+=1,R.current=!1,me.current=null,ee.current=null,Pi()},getState:()=>({isIdle:j.status==="idle",isLoading:j.status==="loading",isLoaded:j.status==="loaded",isError:j.status==="error"}),getPerformanceReport:()=>{var W;return((W=O.current)==null?void 0:W.getReport())||null}}),[vt,Qo,it,j.status,Pi]);const om=x.useMemo(()=>({position:"relative",width:"100%",height:"auto",...L!==void 0?{aspectRatio:String(L)}:null,overflow:"hidden",background:j.status==="error"?"#fee":"#f5f5f5",...y&&(y.background||y.backgroundColor)?null:{color:"#4a4a4a"},display:"flex",alignItems:"center",justifyContent:"center",...y}),[y,j.status,L]);return m.jsxs("div",{ref:W=>{E.current=W,e.containerRefExternal&&(e.containerRefExternal.current=W)},className:P,style:om,children:[j.status==="loading"&&m.jsx("div",{style:{position:"absolute",inset:0,display:"flex",alignItems:"center",justifyContent:"center",pointerEvents:"none",zIndex:2},children:m.jsx("span",{style:{color:"inherit",fontSize:12},children:"Loading..."})}),j.displaySrc?m.jsx("img",{"data-lli-request":j.requestId,"data-lli-src":j.displaySrc,ref:W=>{F.current=W,e.imageRefExternal&&(e.imageRefExternal.current=W)},src:j.displaySrc,alt:o,srcSet:k,sizes:M,loading:nm,...hl!=="auto"&&{fetchpriority:hl},crossOrigin:e.crossOrigin??void 0,decoding:e.decoding??void 0,referrerPolicy:e.referrerPolicy??void 0,onLoad:W=>{var Kn,Yn,Xn;if(j.status!=="loading"&&j.status!=="error")return;const _e=W.currentTarget,ae=(_e.currentSrc||_e.src||"").trim(),we=(j.displaySrc||"").trim(),Te=(_e.getAttribute("src")||"").trim(),Qn=j.status==="error";if(Qn){if(!ae||xt(ae,we)||!xt(ae,Te))return}else if(ae&&!xt(ae,we)&&!xt(ae,Te))return;R.current=!1,ee.current=null,(Kn=O.current)==null||Kn.mark("load-end"),(Yn=O.current)==null||Yn.measure("load-duration","load-start","load-end"),(Xn=O.current)==null||Xn.measure("total-duration","mount","load-end"),V({type:"LOAD_SUCCESS",payload:{requestId:j.requestId,...Qn?{src:ae||Te}:null}}),v==null||v(ae||we||void 0)},onError:W=>{var Yn,Xn;if(j.status!=="loading"&&j.status!=="error")return;const _e=W.currentTarget,ae=(_e.currentSrc||_e.src||"").trim(),we=(j.displaySrc||"").trim(),Te=(_e.getAttribute("src")||"").trim(),Qn=j.status==="error";if(Qn){if(!ae||xt(ae,we)||!xt(ae,Te))return}else if(ae&&!xt(ae,we)&&!xt(ae,Te))return;Qn||(R.current=!1,ee.current=n),(Yn=O.current)==null||Yn.mark("load-error"),(Xn=O.current)==null||Xn.measure("error-duration","load-start","load-error");const Kn=new Error("Image load error");V({type:"LOAD_ERROR",payload:{error:Kn,requestId:j.requestId}}),w==null||w(Kn)},style:{width:"100%",height:"auto",objectFit:"cover",opacity:j.status==="loaded"?1:0,transition:"opacity 180ms ease",...$},className:C}):null,g]})});jp.displayName="LazyLoadImageCore";const aO={CRITICAL:10,HIGH:50,NORMAL:100,LOW:150,DEBUG:200},lO={BEFORE_LOAD:"onBeforeLoad",LOAD_START:"onLoadStart",LOAD_SUCCESS:"onLoadSuccess",LOAD_ERROR:"onLoadError",LOAD:"onLoad",ENTER_VIEWPORT:"onEnterViewport",LEAVE_VIEWPORT:"onLeaveViewport",MOUNT:"onMount",UNMOUNT:"onUnmount",PROGRESS:"onProgress",SRC_CHANGE:"onSrcChange",NETWORK_CHANGE:"onNetworkChange",RESIZE:"onResize",RETRY:"onRetry"},It={TIMEOUT:3e4,MAX_RETRIES:3,RETRY_DELAY:1e3,RETRY_BACKOFF:2,CACHE_SIZE_INFLIGHT:50,CACHE_SIZE_CONTROLLERS:50,CACHE_SIZE_OBJECT_URLS:100},sa={CLIENT_ERROR_MIN:400,CLIENT_ERROR_MAX:500,SERVER_ERROR_MIN:500,SERVER_ERROR_MAX:600,OK:200,NOT_FOUND:404,FORBIDDEN:403,UNAUTHORIZED:401,INTERNAL_SERVER_ERROR:500,SERVICE_UNAVAILABLE:503},cO={RETENTION_TIME:5*60*1e3,HIGH_DISCOVERY_DELAY_THRESHOLD:100,HIGH_LOAD_DELAY_THRESHOLD:2e3,HIGH_RENDER_DELAY_THRESHOLD:50,SLOW_LCP_THRESHOLD:2500},uO={ROOT_MARGIN:"200px 0px",THRESHOLD:0,UNOBSERVE_ON_VISIBLE:!1},dO={NETWORK_CHANGE:1e3,WINDOW_RESIZE:300,SCROLL:100},pO={LAZY:"lazy",EAGER:"eager",AUTO:"auto"},mO={HIGH:"high",LOW:"low",AUTO:"auto"};function pl(e){const t=new Map(e.map(a=>[a.name,a])),n=[];for(const a of e)for(const l of a.dependencies??[])t.has(l)||n.push(`${a.name} -> ${l}`);const o=[],r=new Set,i=[...e],s=a=>(a.dependencies??[]).every(l=>r.has(l)||!t.has(l));for(;i.length>0;){const a=i.filter(s);if(a.length===0)throw new Error(`[vane/plugin-core] 插件循环依赖: ${i.map(c=>c.name).join(" <-> ")}`);let l=a[0];for(const c of a)(c.priority??0)>(l.priority??0)&&(l=c);o.push(l),r.add(l.name),i.splice(i.indexOf(l),1)}return n.length>0&&console.warn(`[vane/plugin-core] 以下插件依赖未注册，将被忽略:
  ${n.join(`
  `)}`),o}async function gO(e,t={}){const{timeout:n=3e3,name:o="anonymous",hook:r="unknown"}=t;if(!n||n<=0)return await e();let i;const s=new Promise((a,l)=>{i=setTimeout(()=>{l(new Error(`[vane/plugin-core] 插件 ${o} 的钩子 ${r} 超时(${n}ms)`))},n)});try{return await Promise.race([Promise.resolve().then(e),s])}finally{i&&clearTimeout(i)}}const fO=new Set(["onMount","onUnmount","onPropsChange","onError"]);function hO(e={}){const t=e.logger??console,n=e.sandbox??!0,o=e.timeout??3e3,r=[],i=[],s=new Map,a=()=>pl([...s.values()].filter(c=>c.enabled!==!1)),l=c=>{s.set(c.name,{...c,enabled:c.enabled??!0}),c.init&&Promise.resolve(c.init()).catch(u=>{t.warn(`[PluginManager] init failed for ${c.name}`,u)})};return{register:l,registerAll:c=>{for(const u of c)l(u)},unregister:c=>{const u=s.get(c);u&&(u.destroy&&Promise.resolve(u.destroy()).catch(d=>{t.warn(`[PluginManager] destroy failed for ${u.name}`,d)}),s.delete(c))},getPlugin:c=>s.get(c),getAllPlugins:()=>[...s.values()],getEnabledPlugins:()=>[...s.values()].filter(c=>c.enabled!==!1),getExecutionOrder:a,enable:c=>{const u=s.get(c);u&&(u.enabled=!0)},disable:c=>{const u=s.get(c);u&&(u.enabled=!1)},has:c=>s.has(c),executeHook:async(c,u,...d)=>{var p,f;for(const v of a()){const w=(p=v.hooks)==null?void 0:p[c];if(typeof w!="function")continue;const b=v.sandbox??n,h=v.timeout??o;let g;try{g=b?await gO(()=>w(u,...d),{timeout:h,name:v.name,hook:String(c)}):await w(u,...d)}catch(y){if(r.push({plugin:v.name,hook:String(c),error:y}),t.warn(`[PluginManager] hook ${String(c)} failed in ${v.name}`,y),(f=e.onError)==null||f.call(e,v.name,String(c),y),c==="onError")break;continue}if(fO.has(String(c))&&typeof g=="function"){i.push(g);continue}if(g===!1)return!1;if(g!==void 0&&g!==!0)return g}},clear:()=>{const c=i.splice(0);for(const u of c.reverse())try{u()}catch(d){t.warn("[PluginManager] cleanup failed",d)}for(const u of s.values())u.destroy&&Promise.resolve(u.destroy()).catch(d=>{t.warn(`[PluginManager] destroy failed for ${u.name}`,d)});s.clear()},getErrors:()=>[...r]}}var yO=Object.defineProperty,vO=(e,t,n)=>t in e?yO(e,t,{enumerable:!0,configurable:!0,writable:!0,value:n}):e[t]=n,qt=(e,t,n)=>vO(e,typeof t!="symbol"?t+"":t,n);const Mp=class po{constructor(){qt(this,"networkInfo"),qt(this,"deviceInfo"),qt(this,"listeners",new Set),qt(this,"initialized",!1),qt(this,"disposeFns",[]),qt(this,"resizeTimer"),this.initListeners()}static getInstance(){return po.instance||(po.instance=new po),po.instance}ensureInitialized(){this.initialized||this.initListeners()}initListeners(){if(typeof window>"u"||this.initialized)return;this.initialized=!0;const t=typeof navigator<"u"?navigator:void 0,n=(t==null?void 0:t.connection)||(t==null?void 0:t.mozConnection)||(t==null?void 0:t.webkitConnection);if(n){const i=()=>{this.networkInfo=void 0,this.notifyListeners()};n.addEventListener("change",i),this.disposeFns.push(()=>n.removeEventListener("change",i))}const o=()=>{this.networkInfo=void 0,this.notifyListeners()};window.addEventListener("online",o),window.addEventListener("offline",o),this.disposeFns.push(()=>{window.removeEventListener("online",o),window.removeEventListener("offline",o)});const r=()=>{this.resizeTimer&&clearTimeout(this.resizeTimer),this.resizeTimer=window.setTimeout(()=>{this.resizeTimer=void 0,this.deviceInfo=void 0,this.notifyListeners()},300)};window.addEventListener("resize",r),this.disposeFns.push(()=>{window.removeEventListener("resize",r),this.resizeTimer&&(clearTimeout(this.resizeTimer),this.resizeTimer=void 0)})}dispose(){this.disposeFns.forEach(t=>{try{t()}catch{}}),this.disposeFns=[],this.initialized=!1,this.networkInfo=void 0,this.deviceInfo=void 0}getNetworkInfo(){return this.ensureInitialized(),this.networkInfo||(this.networkInfo=this.detectNetwork()),this.networkInfo}getDeviceInfo(){return this.ensureInitialized(),this.deviceInfo||(this.deviceInfo=this.detectDevice()),this.deviceInfo}detectNetwork(){if(typeof navigator>"u")return;const t=navigator,n=(t==null?void 0:t.connection)||(t==null?void 0:t.mozConnection)||(t==null?void 0:t.webkitConnection);return{online:t.onLine!==void 0?t.onLine:!0,effectiveType:(n==null?void 0:n.effectiveType)||"4g",downlink:Number((n==null?void 0:n.downlink)||10),rtt:Number((n==null?void 0:n.rtt)||50),saveData:!!(n!=null&&n.saveData)}}detectDevice(){const t=typeof window<"u"?window.innerWidth:1024,n=typeof window<"u"?window.innerHeight:768,o=typeof window<"u"&&window.devicePixelRatio||1,r=typeof navigator<"u"&&navigator.userAgent||"",i=/Mobile|Android|iPhone|iPad/i.test(r);return{type:/iPad|Tablet/i.test(r)?"tablet":i?"mobile":"desktop",os:r,browser:r,devicePixelRatio:o,viewportWidth:t,viewportHeight:n,isTouchDevice:typeof window<"u"&&"ontouchstart"in window,isRetina:o>=2}}addListener(t){return this.ensureInitialized(),this.listeners.add(t),()=>this.listeners.delete(t)}notifyListeners(){this.listeners.forEach(t=>{try{t()}catch(n){console.error("[GlobalContext] Listener error:",n)}})}refreshNetworkInfo(){this.networkInfo=void 0,this.networkInfo=this.detectNetwork(),this.notifyListeners()}refreshDeviceInfo(){this.deviceInfo=void 0,this.deviceInfo=this.detectDevice(),this.notifyListeners()}getStats(){return{listenersCount:this.listeners.size,hasNetworkInfo:!!this.networkInfo,hasDeviceInfo:!!this.deviceInfo}}};qt(Mp,"instance");let wO=Mp;const qo=wO.getInstance(),ti=()=>qo.getNetworkInfo(),xO=()=>qo.getDeviceInfo(),Tp=e=>qo.addListener(e),bO=()=>qo.getStats();function PO(){const e=new Map,t=new Map,n=(s,a)=>{const l=e.get(s);if(l)for(const c of[...l])try{c(a)}catch(u){console.warn(`[PluginBus] handler error for event "${s}"`,u)}},o=(s,a)=>{let l=e.get(s);return l||(l=new Set,e.set(s,l)),l.add(a),()=>{l==null||l.delete(a)}},r=(s,a)=>{const l=c=>{a(c),i(s,l)};return o(s,l)},i=(s,a)=>{var l;if(!a){e.delete(s);return}(l=e.get(s))==null||l.delete(a)};return{emit:n,on:o,once:r,off:i,getData:s=>t.get(s),setData:(s,a)=>{const l=t.get(s);t.set(s,a),l!==a&&n(s,a)},deleteData:s=>{const a=t.has(s);t.delete(s),a&&n(s,void 0)},hasData:s=>t.has(s),getAll:()=>{const s={};return t.forEach((a,l)=>{s[l]=a}),s},clear:()=>{e.clear(),t.clear()}}}var $O=Object.defineProperty,SO=(e,t,n)=>t in e?$O(e,t,{enumerable:!0,configurable:!0,writable:!0,value:n}):e[t]=n,CO=(e,t,n)=>SO(e,t+"",n);let Np=class extends T.Component{constructor(){super(...arguments),CO(this,"state",{error:null})}static getDerivedStateFromError(t){return{error:t}}componentDidCatch(t,n){var o,r;console.warn("[vane/plugin-core] 插件渲染错误已被隔离",t,n),(r=(o=this.props).onError)==null||r.call(o,t,n)}render(){const{error:t}=this.state;return t?this.props.fallback?this.props.fallback(t):null:this.props.children}},pr=null;function LO(e=!1){if(pr&&!e)return pr;const t=typeof window<"u"?window.innerWidth:1024,n=typeof window<"u"?window.innerHeight:768,o=typeof window<"u"&&window.devicePixelRatio||1,r=typeof navigator<"u"&&navigator.userAgent||"",i=/iPad|Tablet/i.test(r),s=/Mobile|Android|iPhone/i.test(r),a=typeof window<"u"&&("ontouchstart"in window||(navigator.maxTouchPoints??0)>0);return pr={type:i?"tablet":s?"mobile":"desktop",os:r,browser:r,devicePixelRatio:o,viewportWidth:t,viewportHeight:n,isTouchDevice:a,isRetina:o>=2},pr}function Nc(e,t){if(Object.is(e,t))return!0;if(typeof e!="object"||typeof t!="object"||e===null||t===null)return!1;const n=Object.keys(e),o=Object.keys(t);return n.length!==o.length?!1:n.every(r=>Object.is(e[r],t[r]))}function kO(e){const{plugins:t,props:n,data:o,initialState:r,containerRef:i,enableDebug:s=!1,managerOptions:a,extendContext:l}=e,c=x.useRef(null),u=i??c,d=x.useRef(null);d.current||(d.current=hO(a));const p=d.current,f=x.useRef(null);f.current||(f.current=PO());const v=f.current,w=x.useRef(new Map),[b,h]=x.useState(r??{}),[,g]=x.useState(0),y=x.useCallback(()=>g(R=>R+1),[]),P=x.useMemo(()=>LO(),[]),$=x.useRef(t),C=$.current;(C.length!==t.length||t.some((R,D)=>R!==C[D]))&&($.current=t);const L=$.current,k=L.map(R=>R.name).join("|");x.useLayoutEffect(()=>{p.clear(),p.registerAll(L),s&&console.debug("[vane/plugin-core] plugins registered:",k)},[L]),x.useLayoutEffect(()=>()=>{p.executeHook("onUnmount",E.current),p.clear()},[p]);const M=x.useMemo(()=>pl(L),[L]),E=x.useRef(null),F=x.useRef(n);Nc(F.current,n)||(F.current=n);const H=F.current,O=x.useRef(o);Nc(O.current,o)||(O.current=o);const j=O.current,V=x.useMemo(()=>{const R={props:H,data:j,bus:v,refs:{container:u,getContainer:()=>u.current},state:b,setState:D=>h(A=>({...A,...D})),shared:w.current,deviceInfo:P,forceUpdate:y,getSize:()=>{const D=u.current;return D?{width:D.offsetWidth,height:D.offsetHeight}:{width:0,height:0}},logger:console};return l?l(R):R},[H,j,b,P,v,l]);E.current=V;const me=x.useCallback(R=>{var A,B;let D=R;for(const Me of M){const ve=(A=Me.hooks)==null?void 0:A.transformProps;if(typeof ve=="function")try{D=ve(D)}catch(ot){(((B=E.current)==null?void 0:B.logger)??console).warn(`[plugin-core] ${Me.name}.transformProps 执行失败，已跳过`,ot)}}return D},[M]),ee=x.useCallback(R=>{var A,B;let D=R;for(const Me of M){const ve=(A=Me.hooks)==null?void 0:A.transformData;if(typeof ve=="function")try{D=ve(E.current,D)}catch(ot){(((B=E.current)==null?void 0:B.logger)??console).warn(`[plugin-core] ${Me.name}.transformData 执行失败，已跳过`,ot)}}return D},[M]),_=x.useCallback((R,...D)=>p.executeHook(R,E.current,...D),[p]);return{manager:p,bus:v,context:V,state:b,setState:V.setState,execute:_,transformProps:me,transformData:ee,orderedPlugins:M}}x.createContext(null);function mr(e,t,n){const{hook:o,position:r="after"}=n;return e.filter(i=>i.enabled!==!1).filter(i=>{var s;return typeof((s=i.hooks)==null?void 0:s[o])=="function"}).filter(i=>{var a;const s=(a=i.config)==null?void 0:a.slotPosition;return r==="before"?s==="before":r==="footer"?s===void 0||s==="after"||s==="footer":s===void 0||s==="after"}).sort((i,s)=>{var a,l;return(((a=i.config)==null?void 0:a.order)??0)-(((l=s.config)==null?void 0:l.order)??0)||(s.priority??0)-(i.priority??0)}).map(i=>{try{const s=i.hooks[o](t);return s==null?null:m.jsx(Np,{children:s},`vane-slot-${i.name}`)}catch(s){return console.warn(`[vane/plugin-core] 插件 ${i.name} 的 ${o} 渲染失败`,s),null}})}function IO(e,t,n){return m.jsxs(m.Fragment,{children:[mr(e,t,{hook:"renderHeader",position:"before"}),n,mr(e,t,{hook:"renderOverlay"}),mr(e,t,{hook:"renderHeader",position:"after"}),mr(e,t,{hook:"renderFooter",position:"footer"})]})}const _O=1e3,EO=100;function RO(e){const t=e.priority??EO;return{...e,priority:_O-t}}function zO(e){return e.map(RO)}function DO(e,t){const n=Array.isArray(t)?{plugins:t}:t,{plugins:o,enableDebug:r=!1}=n,i=x.forwardRef((s,a)=>{const l=x.useMemo(()=>zO(o),[o.map(O=>O.name).join("|")]),c=x.useRef(null),[u,d]=x.useState({isIdle:!0,isLoading:!1,isLoaded:!1,isError:!1}),[p,f]=x.useState(!1),[v,w]=x.useState(()=>ti()),b=x.useRef({loadStartTime:0}),h=x.useRef(s.src),g=x.useRef(null),y=x.useCallback(O=>({...O,src:s.src,imageState:u,isIntersecting:p,imageRef:c,containerRef:O.refs.container,networkInfo:v,sharedData:O.shared,performanceData:b.current,reload:()=>{var j;return(j=g.current)==null?void 0:j.reload()},reset:()=>{var j;return(j=g.current)==null?void 0:j.reset()}}),[s.src,u,p,v]),P=kO({plugins:l,props:s,enableDebug:r,extendContext:y}),$=x.useCallback((O,...j)=>P.execute(O,...j),[P.manager]);x.useEffect(()=>{$("onMount")},[$]),x.useEffect(()=>P.bus.on("progress",O=>{$("onProgress",O)}),[$,P.bus]),x.useEffect(()=>{const O=h.current;O!==s.src&&(h.current=s.src,d({isIdle:!0,isLoading:!1,isLoaded:!1,isError:!1}),b.current={loadStartTime:0},$("onSrcChange",O,s.src))},[s.src,$]),x.useEffect(()=>Tp(()=>{w(ti()),$("onNetworkChange"),$("onResize")}),[$]);const C=x.useCallback(async()=>{if(await $("onBeforeLoad")===!1)throw new Error("LLI_PLUGIN_GATE");const O=await $("onLoad");return d({isIdle:!1,isLoading:!0,isLoaded:!1,isError:!1}),O},[$]),L=x.useCallback(()=>{b.current={loadStartTime:performance.now()}},[$]),k=x.useCallback(O=>{const j=performance.now();b.current={...b.current,loadEndTime:j,duration:j-b.current.loadStartTime},d({isIdle:!1,isLoading:!1,isLoaded:!0,isError:!1}),$("onLoadSuccess",O??"")},[$]),M=x.useCallback(O=>{d({isIdle:!1,isLoading:!1,isLoaded:!1,isError:!0}),$("onLoadError",O)},[$]),E=x.useCallback(()=>{f(!0),$("onEnterViewport")},[$]),F=x.useCallback(()=>{f(!1),$("onLeaveViewport")},[$]),H={...P.transformProps(s),containerRefExternal:P.context.refs.container,imageRefExternal:c,children:m.jsx(Np,{children:IO(P.orderedPlugins,P.context,s.children)}),onBeforeLoad:C,onLoadStart:L,onLoadSuccess:k,onLoadError:M,onEnterViewport:E,onLeaveViewport:F};return m.jsx(e,{ref:O=>{g.current=O,typeof a=="function"?a(O):a&&(a.current=O)},...H})});return i.displayName="WithPlugins(LazyLoadImageCore)",i}function OO(e){const t=(e==null?void 0:e.filter)??"none",n=(e==null?void 0:e.amount)??1;switch(t){case"none":return"none";case"grayscale":return`grayscale(${Math.max(0,Math.min(1,n))})`;case"sepia":return`sepia(${Math.max(0,Math.min(1,n))})`;case"brightness":return`brightness(${n})`;case"contrast":return`contrast(${n})`;case"saturate":return`saturate(${n})`;default:return"none"}}const jO=e=>{const t=OO(e),n=!!(e!=null&&e.hover);return{name:"filter",hooks:{onLoadSuccess(o){var i;const r=(i=o.imageRef)==null?void 0:i.current;if(r&&(r.style.filter=t,n&&t!=="none")){const s=()=>{r.style.filter="none"},a=()=>{r.style.filter=t};r.__lliFilterEnter=s,r.__lliFilterLeave=a,r.addEventListener("mouseenter",s),r.addEventListener("mouseleave",a)}},onUnmount(o){var a;const r=(a=o.imageRef)==null?void 0:a.current;if(!r)return;const i=r.__lliFilterEnter,s=r.__lliFilterLeave;i&&r.removeEventListener("mouseenter",i),s&&r.removeEventListener("mouseleave",s),r.style.filter=""}}}},MO={grayscaleSoft:{filter:"grayscale",amount:.6,hover:!0},sepiaWarm:{filter:"sepia",amount:.5},brightBoost:{filter:"brightness",amount:1.2},contrastPunch:{filter:"contrast",amount:1.3},saturateVivid:{filter:"saturate",amount:1.4}},TO="FilterPlugin",NO="CSS 滤镜：灰度/复古/亮度/对比度/饱和度，悬停可恢复原图。",AO="2.0.0",BO=["visual","视觉"],UO=[{name:"filter",type:'"none" | "grayscale" | "sepia" | "brightness" | "contrast" | "saturate"',default:'"none"',description:"滤镜类型"},{name:"amount",type:"number",default:"undefined",description:"滤镜强度（多数类型 0~1）"},{name:"hover",type:"boolean",default:"false",description:"悬停时恢复原图"}],FO=`// 灰度显示，悬停恢复原彩图
const FilterImage = withPlugins(LazyLoadImageCore, [
  createFilterPlugin({
    filter: "grayscale",
    amount: 1,
    hover: true,
  }),
]);

<FilterImage src="https://picsum.photos/seed/filter/600/400" alt="滤镜" />;`,WO=[{name:"灰度 + 悬停还原",description:"默认灰度，鼠标悬停瞬间恢复彩色，制造焦点对比。",src:"https://picsum.photos/seed/filter-gray/600/400",config:{filter:"grayscale",amount:1,hover:!0}},{name:"复古暖调",description:"sepia 中度做旧，营造怀旧氛围。",src:"https://picsum.photos/seed/filter-sepia/600/400",config:{filter:"sepia",amount:.6}},{name:"高对比增强",description:"提升对比度，让画面更有张力。",src:"https://picsum.photos/seed/filter-contrast/600/400",config:{filter:"contrast",amount:1.4}}],VO=["内置 grayscale / sepia / brightness / contrast / saturate 预设","amount 控制强度","hover 模式悬停恢复原图","纯 CSS filter，零额外绘制开销"],HO=["商品列表统一灰度，hover 高亮","怀旧 / 复古风格相册","强调主体前的视觉降噪","活动主题统一调色"],GO=["hover:true 时滤镜在鼠标移入时移除、移出时恢复。","需要组合滤镜（如 contrast+saturate）或更复杂效果，可用 CustomEffectsPlugin 的 imageStyle.filter 任意写。"],qO={name:TO,description:NO,since:AO,tags:BO,config:UO,example:FO,examples:WO,features:VO,useCases:HO,notes:GO};let Yi=null;function Ap(e,t){return Yi||(Yi=new Promise((n,o)=>{const r=indexedDB.open(e,1);r.onupgradeneeded=()=>{const i=r.result;i.objectStoreNames.contains(t)||i.createObjectStore(t)},r.onsuccess=()=>n(r.result),r.onerror=()=>o(r.error)})),Yi}async function Bp(e,t){try{const n=await Ap(t.dbName,t.storeName),o=n.transaction(t.storeName,"readonly").objectStore(t.storeName),r=await new Promise((i,s)=>{const a=o.get(e);a.onsuccess=()=>i(a.result),a.onerror=()=>s(a.error)});if(!r)return;if(t.ttlMs>0&&Date.now()-r.time>t.ttlMs){try{n.transaction(t.storeName,"readwrite").objectStore(t.storeName).delete(e)}catch{}return}return r}catch(n){if(t.debug)try{console.warn("[IDBCache] get failed",n)}catch{}return}}async function Up(e,t,n){try{const o=(await Ap(n.dbName,n.storeName)).transaction(n.storeName,"readwrite").objectStore(n.storeName),r=typeof t=="string"?{value:t,time:Date.now()}:{blob:t,time:Date.now(),mime:t.type};await new Promise((i,s)=>{const a=o.put(r,e);a.onsuccess=()=>i(),a.onerror=()=>s(a.error)})}catch(o){if(n.debug)try{console.warn("[IDBCache] set failed",o)}catch{}}}const Fp={get:Bp,set:Up};function QO(e){try{const t=e.split(","),n=t[0].match(/:(.*?);/),o=n?n[1]:"application/octet-stream",r=atob(t[1]);let i=r.length;const s=new Uint8Array(i);for(;i--;)s[i]=r.charCodeAt(i);return new Blob([s],{type:o})}catch{return null}}function KO(e={}){const{enabled:t=!0,dbName:n="LLI-Cache",storeName:o="images",ttlMs:r=7*24*60*60*1e3,debug:i=!1}=e,s=new Map,a=new Set,l=new Set;return{name:"cache-idb",version:"1.0.0",config:e,hooks:{onLoad:async c=>{var u,d,p,f;if(t){if(a.has(c.src)){if(i)try{console.warn("[IDBCache] Prevented reentry for",c.src)}catch{}return}a.add(c.src);try{const v=await Bp(c.src,{dbName:n,storeName:o,ttlMs:r,debug:i});if(v){if(i)try{console.debug("[IDBCache] hit",{src:c.src})}catch{}if((u=c.bus)==null||u.emit("cache:hit",{level:"idb",src:c.src}),v.blob){let w=(d=c.sharedData)==null?void 0:d.get("fetch-loader:object-url");if(!w){w=URL.createObjectURL(v.blob),s.set(c.src,w);try{(p=c.sharedData)==null||p.set("fetch-loader:object-url",w),(f=c.sharedData)==null||f.set("fetch-loader:blob",v.blob)}catch{}}return w}return v.value}return}finally{a.delete(c.src)}}},onLoadSuccess:async(c,u)=>{var d;if(t){if(l.has(c.src)){if(i)try{console.warn("[IDBCache] Write already in progress for",c.src)}catch{}return}l.add(c.src);try{let p=(d=c.sharedData)==null?void 0:d.get("fetch-loader:blob");if(p&&s.get(c.src)===u&&(p=void 0),!p&&u.startsWith("blob:")){if(s.get(c.src)===u)return;try{const f=await fetch(u);f.ok&&(p=await f.blob())}catch{}}if(!p&&u.startsWith("data:")){const f=QO(u);f&&(p=f)}if(p){if(await Up(c.src,p,{dbName:n,storeName:o,debug:i}),i)try{console.debug("[IDBCache] ✅ Stored blob successfully:",{src:c.src,size:p.size,type:p.type})}catch{}}else if(i)try{console.warn("[IDBCache] ⚠️ No blob available, skip write:",{src:c.src,displaySrc:u})}catch{}}catch{}finally{l.delete(c.src)}if(i)try{console.debug("[IDBCache] set",{src:c.src})}catch{}}},onSrcChange:(c,u)=>{const d=s.get(u);if(d){try{URL.revokeObjectURL(d)}catch{}s.delete(u)}},onUnmount:c=>{const u=s.get(c.src);if(u){try{URL.revokeObjectURL(u)}catch{}s.delete(c.src)}}}}}const an=new Map,dt=[];function Wp(){return Date.now()}function YO(e){if(!(e<=0))for(;dt.length>e;){const t=dt.shift();t&&an.has(t)&&an.delete(t)}}function Vp(e){const t=dt.indexOf(e);t>=0&&dt.splice(t,1),dt.push(e)}function aa(e,t){const n=an.get(e);if(n){if(t&&t>0&&Wp()-n.time>t){an.delete(e);const o=dt.indexOf(e);o>=0&&dt.splice(o,1);return}return Vp(e),n.value}}function la(e,t,n){an.set(e,{value:t,time:Wp()}),Vp(e),YO(n)}const ni={get:aa,set:la,has:(e,t)=>aa(e,t)!==void 0,clear:()=>{an.clear(),dt.splice(0,dt.length)},size:()=>an.size};function XO(e={}){const{enabled:t=!0,maxEntries:n=200,ttlMs:o,debug:r=!1}=e,i=new Map,s=new Set,a=new Map,l=100;function c(u,d,p){const f=`${d}:${p.src}`,v=Date.now(),w=a.get(f)||0;v-w<l||(a.set(f,v),u==null||u.emit(d,p),setTimeout(()=>{a.delete(f)},1e3))}return{name:"cache-memory",version:"1.0.0",config:e,hooks:{onLoad:async u=>{var d,p,f;if(t){if(s.has(u.src)){if(r)try{console.warn("[MemoryCache] Prevented reentry for",u.src)}catch{}return}s.add(u.src);try{const v=aa(u.src,o);if(v){if(r)try{console.debug("[MemoryCache] hit",{src:u.src,isBlob:v instanceof Blob})}catch{}if(c(u.bus,"cache:hit",{level:"memory",src:u.src}),v instanceof Blob){let w=(d=u.sharedData)==null?void 0:d.get("fetch-loader:object-url");if(!w){w=URL.createObjectURL(v),i.set(u.src,w);try{(p=u.sharedData)==null||p.set("fetch-loader:object-url",w),(f=u.sharedData)==null||f.set("fetch-loader:blob",v)}catch{}}return w}if(!v.startsWith("blob:"))return v}return}finally{s.delete(u.src)}}},onLoadSuccess:(u,d)=>{var f;if(!t)return;const p=(f=u.sharedData)==null?void 0:f.get("fetch-loader:blob");if(p instanceof Blob?la(u.src,p,n):d.startsWith("blob:")||la(u.src,d,n),r)try{console.debug("[MemoryCache] set",{src:u.src,length:d.length})}catch{}},onSrcChange:(u,d,p)=>{if(!t)return;c(u.bus,"cache:src-change",{oldSrc:d,newSrc:p,src:d});const f=i.get(d);if(f){try{URL.revokeObjectURL(f)}catch{}i.delete(d)}},onUnmount:u=>{const d=i.get(u.src);if(d){try{URL.revokeObjectURL(d)}catch{}i.delete(u.src)}}}}}function Fn(e,t){const n=e.split(".").map(Number),o=t.split(".").map(Number),r=Math.max(n.length,o.length);for(let i=0;i<r;i++){const s=n[i]||0,a=o[i]||0;if(s>a)return 1;if(s<a)return-1}return 0}function ZO(e,t,n){return!(t&&Fn(e,t)<0||n&&Fn(e,n)>0)}function Hp(e){const[t=0,n=0,o=0]=e.split(".").map(Number);return{major:t,minor:n,patch:o}}function JO(e){const t=e.split(".");return t.length<1||t.length>3?!1:t.every(n=>{const o=Number(n);return!isNaN(o)&&o>=0&&Number.isInteger(o)})}function e4(e){const{major:t,minor:n,patch:o}=Hp(e);return`${t}.${n}.${o}`}function t4(e,t){return Fn(e,t)===0}function n4(e,t){return Fn(e,t)>0}function o4(e,t){return Fn(e,t)<0}const Xi=(()=>{const e=new Map;function t(i,s){const a=e.get(i);if(a&&a.initialized)return a.idleMs=s>0?s:a.idleMs,a;const l={isIdle:!0,timer:null,idleWaiters:new Set,idleMs:s>0?s:120,initialized:!1,refCount:0,cleanup:void 0},c=()=>{l.isIdle=!1,l.timer&&clearTimeout(l.timer),l.timer=setTimeout(()=>{l.isIdle=!0,l.idleWaiters.forEach(u=>{try{u()}catch{}}),l.idleWaiters.clear()},l.idleMs)};if(i==="window")window.addEventListener("scroll",c,{passive:!0}),window.addEventListener("wheel",c,{passive:!0}),window.addEventListener("touchmove",c,{passive:!0}),l.cleanup=()=>{window.removeEventListener("scroll",c),window.removeEventListener("wheel",c),window.removeEventListener("touchmove",c)};else{try{i.addEventListener("scroll",c,{passive:!0}),i.addEventListener("wheel",c,{passive:!0}),i.addEventListener("touchmove",c,{passive:!0})}catch{}l.cleanup=()=>{try{i.removeEventListener("scroll",c),i.removeEventListener("wheel",c),i.removeEventListener("touchmove",c)}catch{}}}return l.initialized=!0,e.set(i,l),l}async function n(i,s,a){const l=t(i,s);l.isIdle||await new Promise(c=>{let u=null;const d=()=>{u&&clearTimeout(u),c()};l.idleWaiters.add(d),typeof a=="number"&&a>0&&(u=setTimeout(()=>{l.idleWaiters.delete(d),c()},a))})}function o(i,s){const a=t(i,s);return a.refCount+=1,a}function r(i){var a;const s=e.get(i);if(s&&(s.refCount-=1,!(s.refCount>0))){try{(a=s.cleanup)==null||a.call(s)}catch{}s.timer&&clearTimeout(s.timer),s.timer=null,s.idleWaiters.forEach(l=>{try{l()}catch{}}),s.idleWaiters.clear(),e.delete(i)}}return{ensure:t,acquire:o,release:r,waitForIdle:n}})();function r4(e={}){const{idleMs:t=120,onlyWhenIntersecting:n=!0,maxWaitMs:o=1200,target:r="window",axis:i="vertical",debug:s=!1}=e;return{name:"scroll-idle",version:"1.0.0",config:e,hooks:{onMount:a=>{var u,d;const l=((u=a.containerRef)==null?void 0:u.current)||null,c=r==="container"&&l?l:"window";Xi.acquire(c,t);try{(d=a.sharedData)==null||d.set("scroll-idle:target",c)}catch{}if(s)try{console.debug("[ScrollIdle] mount",{idleMs:t,target:r,axis:i,hasContainer:!!l})}catch{}},onUnmount:a=>{var c,u;let l;try{l=(c=a.sharedData)==null?void 0:c.get("scroll-idle:target"),(u=a.sharedData)==null||u.delete("scroll-idle:target")}catch{}l&&Xi.release(l)},onLoad:async a=>{var l;if(a.props.loading!=="eager"&&(!n||a.isIntersecting)){const c=((l=a.containerRef)==null?void 0:l.current)||null,u=r==="container"&&c?c:"window";s&&console.debug(`[ScrollIdle] waiting for idle ${t}ms (max ${o}ms)`,{target:r,axis:i});try{await Xi.waitForIdle(u,t,o)}catch{}}}}}}const i4="ScrollIdlePlugin",s4="滚动空闲加载：滚动停止后再发起加载，避免与滚动争抢带宽。",a4="2.0.0",l4=["loading","加载策略"],c4=[{name:"idleMs",type:"number",default:"120",description:"判定为“空闲”的静止时间（毫秒）"},{name:"onlyWhenIntersecting",type:"boolean",default:"true",description:"是否仅在进入视口后生效（否则所有加载都会等待空闲）"},{name:"maxWaitMs",type:"number",default:"1200",description:"最长等待空闲的时间（毫秒），超过则直接继续加载，避免长时间滚动导致饥饿"},{name:"target",type:'"window" | "container"',default:'"window"',description:"监听对象：window 或容器（容器将使用 context.containerRef.current）"},{name:"axis",type:'"vertical" | "horizontal" | "both"',default:'"vertical"',description:"滚动轴向：vertical/horizontal/both（目前用于调试标注，可按需扩展策略）"},{name:"debug",type:"boolean",default:"false",description:"调试输出"}],u4=`const LazyImage = withPlugins(LazyLoadImageCore, [
  createScrollIdlePlugin({
    idleMs: 160,
    onlyWhenIntersecting: true,
    maxWaitMs: 1200, // 最多等 1.2s，避免饥饿
  }),
]);`,d4=[{name:"滚动停止后加载",description:"用户停止滚动 160ms 后再加载，滚动过程中不打断主线程与带宽。",config:{idleMs:160,onlyWhenIntersecting:!0,maxWaitMs:1200}},{name:"更敏感空闲",description:"80ms 即判定空闲，适合加载较轻的图标 / 缩略图。",config:{idleMs:80,maxWaitMs:800}}],p4=["监听滚动，空闲（停止滚动 idleMs）后才发起加载","默认仅进入视口后生效，不拖累首屏外元素","maxWaitMs 兜底，防止长时间连续滚动导致饥饿","支持 window / 容器两种监听对象"],m4=["长列表滚动时避免与主线程 / 带宽争抢","低端机滚动卡顿优化"],g4=["与 ConcurrencyControl 叠加效果最佳。","maxWaitMs 务必设置，否则连续滚动可能长期不加载。","容器模式会使用 context.containerRef.current 作为监听目标。"],f4={name:i4,description:s4,since:a4,tags:l4,config:c4,example:u4,examples:d4,features:p4,useCases:m4,notes:g4};function h4(e,t){const{ariaLabel:n}=e;if(n)return typeof n=="function"?n(t):n}const y4=({ctx:e,config:t})=>{var r,i,s;const{imageState:n}=e,o=n.isError?((r=t.statusText)==null?void 0:r.error)??"图片加载失败":n.isLoaded?((i=t.statusText)==null?void 0:i.loaded)??"图片加载完成":n.isLoading?((s=t.statusText)==null?void 0:s.loading)??"图片加载中":"图片未加载";return x.useEffect(()=>{var l;const a=(l=e.imageRef)==null?void 0:l.current;if(!(!a||!t.enabled))try{a.setAttribute("aria-busy",n.isLoading?"true":"false")}catch{}},[e.imageRef,t.enabled,n.isLoading]),m.jsx("span",{role:"status","aria-live":"polite",style:{position:"absolute",width:1,height:1,padding:0,margin:-1,overflow:"hidden",clip:"rect(0, 0, 0, 0)",whiteSpace:"nowrap",border:0},children:o})};function v4(e={}){const{enabled:t=!0,decorative:n=!1}=e;return{name:"a11y",version:"1.0.0",config:e,hooks:{onMount:o=>{var i;if(!t)return;const r=(i=o.imageRef)==null?void 0:i.current;if(r)try{n&&(r.setAttribute("aria-hidden","true"),r.setAttribute("alt",""));const s=h4(e,o);s&&r.setAttribute("aria-label",s),r.setAttribute("role","img")}catch{}},renderOverlay:o=>t?m.jsx(y4,{ctx:o,config:e}):null}}}const w4="A11yPlugin",x4="无障碍支持：将装饰性图片设为 aria-hidden、自定义 aria-label、注入 role=img 与 aria-busy，并通过 aria-live 区域播报加载状态，提升读屏可用性。",b4="2.0.0",P4=["a11y","可访问性","SEO"],$4=[{name:"enabled",type:"boolean",default:"true",description:"是否启用无障碍增强"},{name:"decorative",type:"boolean",default:"false",description:"标记为装饰性图片（aria-hidden=true 并清空 alt）"},{name:"ariaLabel",type:"string | ((ctx) => string)",default:"undefined",description:"自定义 aria-label（函数型，参见用法示例）"},{name:"statusText",type:"{ loading?; loaded?; error? }",default:"undefined",description:"视觉隐藏的状态播报文本"}],S4=`const A11yImage = withPlugins(LazyLoadImageCore, [
  createA11yPlugin({
    ariaLabel: (ctx) => \`商品主图 \${ctx.src}\`,
    statusText: { loading: "加载中…", loaded: "已加载", error: "加载失败" },
  }),
]);

// 装饰性图片也可直接跳过读屏
<A11yImage src="https://picsum.photos/id/1015/500/300" alt="" />;`,C4=[{name:"装饰性图片",description:"decorative=true 时清空 alt 并设 aria-hidden，读屏跳过。",src:"https://picsum.photos/id/1015/500/300",config:{decorative:!0}},{name:"自定义 aria-label（字符串）",description:"为图片设置区别于 alt 的 aria-label。",src:"https://picsum.photos/id/1021/500/300",config:{ariaLabel:"商品主图"}},{name:"加载状态播报",description:"视觉隐藏区域以 aria-live 播报加载中/完成/失败。",src:"https://picsum.photos/id/1026/500/300",config:{statusText:{loading:"加载中…",loaded:"已加载",error:"加载失败"}}}],L4=["装饰性图片 aria-hidden","自定义 aria-label（字符串或函数）","role=img 明确语义","aria-busy 随加载态切换","aria-live 状态播报（视觉隐藏）","可关闭"],k4=["无障碍合规（WCAG）","读屏器适配","装饰性背景图","加载状态可读"],I4=["ariaLabel 支持函数型，但静态预览仅支持字符串；函数用法见用法示例。"],_4={name:w4,description:x4,since:b4,tags:P4,config:$4,example:S4,examples:C4,features:L4,useCases:k4,notes:I4};function E4(e){try{const t=document.createElement("link");return t.rel="preload",t.as="image",t.href=e,document.head.appendChild(t),()=>{try{document.head.removeChild(t)}catch{}}}catch{return()=>{}}}function R4(e={}){const{enabled:t=!0,altFallback:n,title:o,aspectRatio:r,priority:i="auto",preload:s=!1}=e;return{name:"seo",version:"1.0.0",config:e,hooks:{transformProps:a=>{if(!t)return a;const l={...a};return(!l.alt||l.alt==="")&&n&&(l.alt=n),i==="lcp"&&(l.loading="eager",l.rootMargin="0px"),r&&(l.containerStyle={...l.containerStyle||{},aspectRatio:r}),l},onMount:a=>{var c,u,d;if(!t)return;let l;if(s&&(l=E4(a.src)),o)try{(u=(c=a.imageRef)==null?void 0:c.current)==null||u.setAttribute("title",o)}catch{}if(n&&((d=a.imageRef)!=null&&d.current)){const p=a.imageRef.current;if(p.getAttribute("alt")===null||p.getAttribute("alt")==="")try{p.setAttribute("alt",n)}catch{}}return l}}}}const z4="SEOPlugin",D4="SEO 增强：alt/title 回退、固定容器宽高比减少 CLS、将首屏关键图设为 LCP 优先（eager + preload），提升搜索排名与加载体验。",O4="2.0.0",j4=["a11y","可访问性","SEO"],M4=[{name:"enabled",type:"boolean",default:"true",description:"是否启用"},{name:"altFallback",type:"string",default:"undefined",description:"未提供 alt 时的回退值"},{name:"title",type:"string",default:"undefined",description:"图片 title（提示与关键词）"},{name:"aspectRatio",type:"string",default:"undefined",description:'固定容器宽高比（如 "4/3"），减少 CLS'},{name:"priority",type:'"auto" | "lcp"',default:'"auto"',description:"lcp 时设为 eager 加载"},{name:"preload",type:"boolean",default:"false",description:"挂载时注入 preload 预载"}],T4=`const SeoImage = withPlugins(LazyLoadImageCore, [
  createSEOPlugin({
    altFallback: "示例图片",
    title: "演示图像",
    aspectRatio: "4/3",
    priority: "lcp",
    preload: true,
  }),
]);

<SeoImage src="https://picsum.photos/id/1015/500/300" alt="" />;`,N4=[{name:"LCP 关键图",description:"首屏关键图：eager + preload + 固定比例，优化 LCP。",src:"https://picsum.photos/id/1015/500/300",config:{altFallback:"示例图片",title:"演示图像",aspectRatio:"4/3",priority:"lcp",preload:!0}},{name:"alt/title 回退",description:"补充 alt 与 title，利于读屏与 SEO。",src:"https://picsum.photos/id/1021/500/300",config:{altFallback:"商品图",title:"热销商品"}},{name:"仅固定比例",description:"aspectRatio 防 CLS，其余默认。",src:"https://picsum.photos/id/1026/500/300",config:{aspectRatio:"16/9"}}],A4=["alt 回退","title 设置","aspect-ratio 防 CLS","LCP 优先（eager）","preload 预载","可关闭"],B4=["首屏 LCP 优化","SEO 排名","结构化标签","CLS 治理"],U4=['priority:"lcp" 会强制 eager 加载，请勿对所有图片使用，仅用于首屏关键图。'],F4={name:z4,description:D4,since:O4,tags:j4,config:M4,example:T4,examples:N4,features:A4,useCases:B4,notes:U4},W4=Object.assign(r4,{meta:f4}),V4=Object.assign(v4,{meta:_4}),H4=Object.assign(R4,{meta:F4});function G4(e={}){const{text:t="Badge",position:n="top-left",bgColor:o="rgba(0,0,0,0.6)",color:r="#fff",fontSize:i=12,padding:s="2px 6px",borderRadius:a=4,zIndex:l=3,showWhen:c="loaded",enabled:u=!0}=e;return{name:"badge",version:"1.0.0",config:e,hooks:{renderOverlay:d=>{if(!u)return null;const{imageState:p}=d;if(!(c==="always"||c==="loading"&&p.isLoading||c==="loaded"&&p.isLoaded||c==="error"&&p.isError))return null;const f=typeof t=="function"?t(d):t;return m.jsx("div",{style:{position:"absolute",pointerEvents:"none",background:o,color:r,fontSize:i,padding:s,borderRadius:a,zIndex:l,lineHeight:1.2,fontWeight:500,...{"top-left":{top:8,left:8},"top-right":{top:8,right:8},"bottom-left":{bottom:8,left:8},"bottom-right":{bottom:8,right:8},center:{top:"50%",left:"50%",transform:"translate(-50%, -50%)"}}[n]},children:f})}}}}const q4="BadgePlugin",Q4="角标徽章：在图片四角或中心叠加文字徽章，可按加载状态（always/loading/loaded/error）显示，支持自定义文字、颜色、字号与形状。",K4="2.0.0",Y4=["other","视觉","徽标"],X4=[{name:"text",type:"string | ((context) => string)",default:'"Badge"',description:"徽章文字（支持函数动态生成）"},{name:"position",type:'"top-left" | "top-right" | "bottom-left" | "bottom-right" | "center"',default:'"top-left"',description:"徽章位置（四角或中心）"},{name:"bgColor",type:"string",default:'"rgba(0,0,0,0.6)"',description:"背景色"},{name:"color",type:"string",default:'"#fff"',description:"文字色"},{name:"fontSize",type:"number",default:"12",description:"字号(px)"},{name:"padding",type:"string",default:'"2px 6px"',description:"内边距"},{name:"borderRadius",type:"number",default:"4",description:"圆角(px)"},{name:"zIndex",type:"number",default:"3",description:"层级"},{name:"showWhen",type:'"always" | "loading" | "loaded" | "error"',default:'"loaded"',description:"显示时机"},{name:"enabled",type:"boolean",default:"true",description:"是否启用"}],Z4=`const BadgeImage = withPlugins(LazyLoadImageCore, [
  createBadgePlugin({ text: "NEW", position: "top-left", bgColor: "#c62828", showWhen: "always" }),
]);

<BadgeImage src="https://picsum.photos/id/1015/500/300" alt="角标示例" />;`,J4=[{name:"常驻徽标",description:"左上角红色 NEW 徽标，始终显示。",src:"https://picsum.photos/id/1015/500/300",config:{text:"NEW",position:"top-left",bgColor:"#c62828",showWhen:"always"}},{name:"加载时显示",description:"加载中显示 Loading 徽标，加载完成隐藏。",src:"https://picsum.photos/id/1021/500/300",config:{text:"Loading",position:"top-right",bgColor:"rgba(0,0,0,0.6)",showWhen:"loading"}},{name:"加载成功后显示",description:"加载完成后显示 Done 徽标。",src:"https://picsum.photos/id/1026/500/300",config:{text:"Done",position:"bottom-right",bgColor:"#2e7d32",showWhen:"loaded"}},{name:"自定义样式",description:"橙色大字号圆角徽标，居中。",src:"https://picsum.photos/id/1031/500/300",config:{text:"HOT",position:"center",bgColor:"#b35c00",color:"#fff",fontSize:16,borderRadius:20}}],e6=["角标 / 中心两种布局","五位置（四角 + 中心）","按加载状态显示","自定义文字/颜色/字号/圆角","支持函数文案","可关闭"],t6=["商品标签","状态提示","进度/完成标记","活动角标"],n6=["text 支持函数型（按 context 动态生成），静态预览仅支持字符串；函数用法见用法示例。"],o6={name:q4,description:Q4,since:K4,tags:Y4,config:X4,example:Z4,examples:J4,features:e6,useCases:t6,notes:n6},r6=e=>{const t=(e==null?void 0:e.color)??"rgba(0, 153, 255, 0.6)",n=Math.max(0,(e==null?void 0:e.blurPx)??12),o=Math.max(0,(e==null?void 0:e.spreadPx)??2),r=Math.max(1,(e==null?void 0:e.hoverMultiplier)??1.4),i=`0 0 ${n}px ${o}px ${t}`,s=`0 0 ${Math.round(n*r)}px ${Math.round(o*r)}px ${t}`;return{name:"border-glow",hooks:{onLoadSuccess(a){var w,b;const l=(w=a.containerRef)==null?void 0:w.current,c=(l==null?void 0:l.parentElement)??null,u=(c==null?void 0:c.parentElement)??null,d=(b=a.imageRef)==null?void 0:b.current,p=u||c||l||d;if(!p)return;a.__lliGlowTarget=p,p.__lliPrevShadow=p.style.boxShadow||"",p.__lliPrevTransition=p.style.transition||"",p.style.boxShadow=p.__lliPrevShadow?`${p.__lliPrevShadow}, ${i}`:i,p.style.transition=p.style.transition?`${p.style.transition}, box-shadow 160ms ease`:"box-shadow 160ms ease",d&&(d.style.borderRadius=d.style.borderRadius||"6px");const f=()=>{p.style.boxShadow=p.__lliPrevShadow?`${p.__lliPrevShadow}, ${s}`:s},v=()=>{p.style.boxShadow=p.__lliPrevShadow?`${p.__lliPrevShadow}, ${i}`:i};p.__lliGlowEnter=f,p.__lliGlowLeave=v,p.addEventListener("mouseenter",f),p.addEventListener("mouseleave",v)},onUnmount(a){const l=a.__lliGlowTarget;if(!l)return;const c=l.__lliGlowEnter,u=l.__lliGlowLeave;c&&l.removeEventListener("mouseenter",c),u&&l.removeEventListener("mouseleave",u),l.style.boxShadow=l.__lliPrevShadow||"",l.style.transition=l.__lliPrevTransition||"",delete l.__lliPrevShadow,delete l.__lliPrevTransition,delete l.__lliGlowEnter,delete l.__lliGlowLeave,delete a.__lliGlowTarget}}}},i6="BorderGlowPlugin",s6="边框光晕：加载成功后为卡片应用发光阴影，悬停时增强。",a6="2.0.0",l6=["visual","视觉"],c6=[{name:"color",type:"string",default:"rgba(0, 153, 255, 0.6)",description:"辉光颜色"},{name:"blurPx",type:"number",default:"12",description:"辉光模糊半径 px"},{name:"spreadPx",type:"number",default:"2",description:"辉光扩散 px"},{name:"hoverMultiplier",type:"number",default:"1.4",description:"悬停时辉光强度倍数"}],u6=`// 加载成功后卡片发光，悬停增强
const GlowImage = withPlugins(LazyLoadImageCore, [
  createBorderGlowPlugin({
    color: "rgba(0, 153, 255, 0.6)",
    blurPx: 12,
    spreadPx: 2,
    hoverMultiplier: 1.4,
  }),
]);

<GlowImage src="https://picsum.photos/seed/glow/600/400" alt="边框辉光" />;`,d6=[{name:"基础辉光",description:"蓝色柔光，悬停轻微增强，突出主体卡片。",src:"https://picsum.photos/seed/glow-basic/600/400",config:{color:"rgba(0, 153, 255, 0.6)",blurPx:12,spreadPx:2,hoverMultiplier:1.4}},{name:"强霓虹辉光",description:"品红大模糊半径，悬停强度放大约 1.6 倍。",src:"https://picsum.photos/seed/glow-neon/600/400",config:{color:"rgba(255, 0, 128, 0.7)",blurPx:24,spreadPx:4,hoverMultiplier:1.6}},{name:"柔和暖光",description:"暖橙色低饱和辉光，适配温馨主题。",src:"https://picsum.photos/seed/glow-warm/600/400",config:{color:"rgba(255, 170, 0, 0.5)",blurPx:18,spreadPx:2,hoverMultiplier:1.3}}],p6=["加载成功后自动为卡片加发光阴影","悬停增强辉光强度","颜色 / 模糊 / 扩散均可调","智能定位外层卡片，避免被父容器 overflow 裁剪","卸载时自动还原原始阴影"],m6=["商品主图聚焦","精选 / 推荐位强调","卡片悬停交互反馈","暗色背景下的视觉点睛"],g6=["辉光优先作用在外层卡片（向上两层），以规避父容器 overflow:hidden 把光晕裁掉。","插件在 onUnmount 还原原始 box-shadow，不会污染其它样式。","与 CustomEffects 的 containerStyle 叠加时，两者都会合并进容器样式。"],f6={name:i6,description:s6,since:a6,tags:l6,config:c6,example:u6,examples:d6,features:p6,useCases:m6,notes:g6};function h6(e,t=4){try{const n=document.createElement("canvas"),o=Math.min(e.naturalWidth||e.width,256),r=Math.min(e.naturalHeight||e.height,256);if(!o||!r)return null;n.width=o,n.height=r;const i=n.getContext("2d");if(!i)return null;i.drawImage(e,0,0,o,r);const s=i.getImageData(0,0,o,r).data,a=Math.max(1,Math.floor(Number(t))||1);let l=0,c=0,u=0,d=0;for(let p=0;p<r;p+=a)for(let f=0;f<o;f+=a){const v=(p*o+f)*4;s[v+3]!==0&&(l+=s[v],c+=s[v+1],u+=s[v+2],d++)}return d?(l=Math.round(l/d),c=Math.round(c/d),u=Math.round(u/d),`rgb(${l}, ${c}, ${u})`):null}catch{return null}}function y6(e={}){const{setContainerBg:t=!0,sampleSize:n=4,showOverlay:o=!0}=e;return{name:"color-extraction",version:"1.0.0",config:e,hooks:{transformProps:r=>({...r,crossOrigin:"anonymous"}),onMount:r=>{var i,s;try{(s=(i=r.imageRef)==null?void 0:i.current)==null||s.setAttribute("crossOrigin","anonymous")}catch{}},onLoadSuccess:r=>{var a,l,c;const i=(a=r.imageRef)==null?void 0:a.current;if(!i)return;const s=h6(i,n);if(t&&s)try{const u=(l=r.containerRef)==null?void 0:l.current;u&&(u.style.background=`linear-gradient(90deg, ${s} 0%, rgba(0,0,0,0.06) 100%)`)}catch{}try{(c=r.sharedData)==null||c.set("dominant-color",s)}catch{}try{i.__lliDominantColor=s}catch{}},renderOverlay:r=>o?m.jsx(()=>{const[i,s]=T.useState(null);return T.useEffect(()=>{let a=!0;const l=requestAnimationFrame(()=>{var u,d,p;if(!a)return;const c=((d=(u=r.imageRef)==null?void 0:u.current)==null?void 0:d.__lliDominantColor)||((p=r.sharedData)==null?void 0:p.get("dominant-color"))||null;s(c||null)});return()=>{a=!1,cancelAnimationFrame(l)}},[r]),m.jsxs("div",{style:{position:"absolute",top:8,right:8,background:"rgba(0,0,0,0.55)",color:"#fff",fontSize:12,padding:"6px 8px",borderRadius:6,zIndex:5,display:"flex",alignItems:"center",gap:8,boxShadow:"0 2px 8px rgba(0,0,0,0.2)"},children:[m.jsx("span",{style:{width:16,height:16,borderRadius:4,background:i||"transparent",border:"1px solid rgba(255,255,255,0.35)"}}),m.jsx("span",{children:i||"未提取"})]})},{}):null}}}const v6="ColorExtractionPlugin",w6="主色提取：canvas 采样图片主色，可设置容器背景或显示色卡。",x6="2.0.0",b6=["visual","视觉"],P6=[{name:"setContainerBg",type:"boolean",default:"true",description:"是否把容器背景设为主色"},{name:"sampleSize",type:"number",default:"4",description:"采样步长 px，越大越快越不精确"},{name:"showOverlay",type:"boolean",default:"true",description:"是否在右上角显示主色卡"}],$6=`// 提取主色填充容器 + 显示色卡
const TintImage = withPlugins(LazyLoadImageCore, [
  createColorExtractionPlugin({
    setContainerBg: true,
    sampleSize: 4,
    showOverlay: true,
  }),
]);

<TintImage src="https://picsum.photos/seed/color/600/400" alt="主色提取" crossOrigin="anonymous" />;`,S6=[{name:"主色填充容器 + 色卡",description:"提取主色作为卡片背景，并在右上角显示色卡。",src:"https://picsum.photos/seed/color-full/600/400",config:{setContainerBg:!0,sampleSize:4,showOverlay:!0}},{name:"仅色卡",description:"不改动容器背景，只在角上显示提取到的主色卡。",src:"https://picsum.photos/seed/color-chip/600/400",config:{setContainerBg:!1,showOverlay:!0}}],C6=["canvas 采样主色","可选填充容器背景","可选角标色卡展示","采样精度 / 速度可调"],L6=["按图自动配色（背景 / 阴影）","色彩主题联动","色卡 / 调色板展示","设计工具取色"],k6=['读取像素需在 <img> 上设置 crossOrigin="anonymous"，且图片服务器需允许跨域，否则 canvas 被污染无法取色（会静默失败）。',"sampleSize 越大采样越稀疏、越快但越不精确。"],I6={name:v6,description:w6,since:x6,tags:b6,config:P6,example:$6,examples:S6,features:C6,useCases:L6,notes:k6};function _6(e={}){const{beforeSrc:t,afterSrc:n,labelBefore:o="前",labelAfter:r="后",start:i=.5}=e,s=({context:a})=>{const[l,c]=T.useState(Math.min(1,Math.max(0,i))),u=T.useRef(null),d=T.useRef(!1),p=T.useCallback(P=>{const $=u.current;if(!$)return;const C=$.getBoundingClientRect();if(C.width===0)return;const L=(P-C.left)/C.width;c(Math.min(1,Math.max(0,L)))},[]),f=P=>{var $,C;d.current=!0;try{(C=($=P.target).setPointerCapture)==null||C.call($,P.pointerId)}catch{}p(P.clientX)},v=P=>{d.current&&p(P.clientX)},w=P=>{var $,C;d.current=!1;try{(C=($=P.target).releasePointerCapture)==null||C.call($,P.pointerId)}catch{}},b=t??a.src,h=n??a.src,g=Math.max(1e-4,l),y={position:"absolute",top:8,padding:"2px 8px",background:"rgba(0,0,0,0.55)",color:"#fff",fontSize:12,borderRadius:4,pointerEvents:"none",zIndex:3};return m.jsxs("div",{ref:u,onPointerDown:f,onPointerMove:v,onPointerUp:w,onPointerLeave:w,style:{position:"absolute",inset:0,overflow:"hidden",cursor:"ew-resize",touchAction:"none",userSelect:"none",zIndex:4},title:"拖动对比",children:[m.jsx("img",{src:h,alt:r,draggable:!1,style:{position:"absolute",inset:0,width:"100%",height:"100%",objectFit:"cover"}}),m.jsx("div",{style:{position:"absolute",inset:0,width:`${l*100}%`,overflow:"hidden"},children:m.jsx("img",{src:b,alt:o,draggable:!1,style:{position:"absolute",inset:0,width:`${100/g}%`,height:"100%",objectFit:"cover"}})}),m.jsx("div",{style:{position:"absolute",top:0,bottom:0,left:`${l*100}%`,width:2,background:"#fff",transform:"translateX(-1px)",zIndex:2,pointerEvents:"none"},children:m.jsx("div",{style:{position:"absolute",top:"50%",left:"50%",transform:"translate(-50%, -50%)",width:28,height:28,borderRadius:999,background:"#fff",color:"#333",display:"flex",alignItems:"center",justifyContent:"center",fontSize:14,boxShadow:"0 1px 4px rgba(0,0,0,0.4)"},children:"⇆"})}),m.jsx("div",{style:{...y,left:8},children:o}),m.jsx("div",{style:{...y,right:8},children:r})]})};return{name:"comparison",version:"2.0.0",config:e,hooks:{renderOverlay:a=>m.jsx(s,{context:a})}}}const E6="ComparisonPlugin",R6="前后对比（v2 真实实现）：用可拖拽分隔条对比 beforeSrc / afterSrc 两张图，拖动实时比较差异（如调色前后、装修前后、A/B 图）。不再是写死文字角标。",z6="2.0.0",D6=["other","视觉","对比","交互"],O6=[{name:"beforeSrc",type:"string",default:"主图 src",description:"左侧（拖动前）对比图；默认用主图"},{name:"afterSrc",type:"string",default:"主图 src",description:"右侧（拖动后）对比图；默认用主图"},{name:"labelBefore",type:"string",default:"前",description:"左图标签文字"},{name:"labelAfter",type:"string",default:"后",description:"右图标签文字"},{name:"start",type:"number",default:"0.5",description:"初始分割位置（0~1）"}],j6=`const CompareImage = withPlugins(LazyLoadImageCore, [
  createComparisonPlugin({
    beforeSrc: "https://picsum.photos/id/1015/800/600",
    afterSrc: "https://picsum.photos/id/1016/800/600",
    labelBefore: "原图", labelAfter: "处理后",
  }),
]);

<CompareImage src="https://picsum.photos/id/1016/800/600" alt="前后对比示例" />;`,M6=[{name:"基础对比",description:"提供 beforeSrc / afterSrc 两张图，拖动中间把手即可对比。",src:"https://picsum.photos/id/1016/800/600",config:{beforeSrc:"https://picsum.photos/id/1015/800/600",afterSrc:"https://picsum.photos/id/1016/800/600",labelBefore:"原图",labelAfter:"处理后"}},{name:"自定义起始位置",description:"start=0.3 让初始分割更偏左。",src:"https://picsum.photos/id/1021/800/600",config:{beforeSrc:"https://picsum.photos/id/1020/800/600",afterSrc:"https://picsum.photos/id/1021/800/600",start:.3}},{name:"单图自对比（调色）",description:"只传 afterSrc，before 用主图，演示同一张图的两种状态。",src:"https://picsum.photos/id/1025/800/600",config:{afterSrc:"https://picsum.photos/id/1025/800/600",labelBefore:"原图",labelAfter:"滤镜"}}],T6=["可拖拽分隔条对比两图（指针/触摸）","左右标签可自定义","初始分割位置可调","左图按分割宽度自适应裁剪，始终铺满容器"],N6=["装修前后 / 调色前后对比","A/B 图组对比","图像增强效果演示","教学 / 设计稿对照"],A6=["v2 起为真实拖拽交互，旧版仅渲染写死文字角标。对比层覆盖在 Core 主图之上，拖动区域占满容器。"],B6={name:E6,description:R6,since:z6,tags:D6,config:O6,example:j6,examples:M6,features:T6,useCases:N6,notes:A6};function U6(e={}){const{enabled:t=!0,focusPoint:n={x:.5,y:.5},showLabel:o=!0}=e;return{name:"crop",version:"0.1.0",config:e,hooks:{transformProps:r=>{if(!t)return r;const i={...r.imageStyle||{},objectFit:"cover",objectPosition:`${Math.round(n.x*100)}% ${Math.round(n.y*100)}%`};return{...r,imageStyle:i}},renderOverlay:r=>!t||!o?null:m.jsxs("div",{style:{position:"absolute",top:8,left:8,background:"rgba(255,165,0,0.8)",color:"#000",padding:"4px 6px",borderRadius:4,fontSize:12},children:["CropPlugin · focus ",n.x.toFixed(2),",",n.y.toFixed(2)]})}}}const F6="CropPlugin",W6="焦点裁剪：通过 object-fit: cover 与 object-position 将裁剪焦点设在指定相对坐标，统一多图主体构图。",V6="2.0.0",H6=["other","视觉","裁剪"],G6=[{name:"enabled",type:"boolean",default:"true",description:"是否启用裁剪"},{name:"focusPoint",type:"{ x: number; y: number }",default:"{ x: 0.5, y: 0.5 }",description:"裁剪焦点(0~1 相对坐标)"},{name:"showLabel",type:"boolean",default:"true",description:"是否在图片左上角显示焦点标识（生产版式建议关闭）"}],q6=`const CropImage = withPlugins(LazyLoadImageCore, [
  createCropPlugin({ focusPoint: { x: 0.3, y: 0.4 } }),
]);

<CropImage src="https://picsum.photos/id/1015/500/300" alt="焦点裁剪示例" />;`,Q6=[{name:"居中焦点（默认）",description:"x=0.5,y=0.5，主体居中裁切。",src:"https://picsum.photos/id/1015/500/300",config:{focusPoint:{x:.5,y:.5}}},{name:"左上方焦点",description:"x=0.3,y=0.3，主体偏左上裁切。",src:"https://picsum.photos/id/1021/500/300",config:{focusPoint:{x:.3,y:.3}}},{name:"右下焦点",description:"x=0.7,y=0.7，突出右下主体。",src:"https://picsum.photos/id/1026/500/300",config:{focusPoint:{x:.7,y:.7}}}],K6=["object-position 焦点裁剪","cover 填充","任意焦点坐标","可关闭","overlay 标识焦点（showLabel 可关）"],Y6=["头像/封面统一构图","商品主图裁剪","列表缩略图","跨尺寸适配"],X6=["当前为最小实现：通过 CSS object-position 模拟裁剪焦点；加载容器需固定宽高以体现裁切效果。","showLabel: false 可隐藏左上角焦点标识，适合直接接入真实版式。"],Z6={name:F6,description:W6,since:V6,tags:H6,config:G6,example:q6,examples:Q6,features:K6,useCases:Y6,notes:X6};function J6(e,t){const{lqipSrc:n}=t;if(n)return typeof n=="function"?n(e):n}async function ej(e){try{const t=new Image;t.crossOrigin="anonymous";const n=new Promise((d,p)=>{t.onload=()=>d(t),t.onerror=p});t.src=e;const o=await n,r=document.createElement("canvas");r.width=Math.max(1,Math.min(16,o.naturalWidth)),r.height=Math.max(1,Math.min(16,o.naturalHeight));const i=r.getContext("2d");if(!i)return;i.drawImage(o,0,0,r.width,r.height);const s=i.getImageData(0,0,r.width,r.height).data;let a=0,l=0,c=0,u=0;for(let d=0;d<s.length;d+=4)a+=s[d],l+=s[d+1],c+=s[d+2],u++;return a=Math.round(a/u),l=Math.round(l/u),c=Math.round(c/u),`rgb(${a}, ${l}, ${c})`}catch{return}}function tj(e={}){const t=e.color??"rgba(0,0,0,0.06)";return{name:"dominant-color",version:"1.0.0",config:e,hooks:{onMount:n=>{var r;const o=(r=n.containerRef)==null?void 0:r.current;if(o)try{const i=J6(n.src,e);if(i)ej(i).then(s=>{try{o.style.background=s||t}catch{}}).catch(()=>{try{o.style.background=t}catch{}});else try{o.style.background=t}catch{}}catch{try{o.style.background=t}catch{}}}}}}const nj="DominantColorPlugin",oj="主色占位：在加载完成前用指定颜色或 LQIP 采样平均色填充容器背景，减少白屏、提升视觉连贯性。",rj="2.0.0",ij=["other","视觉","占位"],sj=[{name:"color",type:"string",default:"rgba(0,0,0,0.06)",description:"指定背景色（未提供时尝试从 lqip 采样）"},{name:"lqipSrc",type:"string | ((src) => string)",default:"undefined",description:"低清预览图地址或生成函数（用于采样平均色）"}],aj=`const ColorImage = withPlugins(LazyLoadImageCore, [
  createDominantColorPlugin({
    lqipSrc: (src) => src + "?w=20", // 用小图采样主色
  }),
]);

<ColorImage src="https://picsum.photos/id/1015/500/300" alt="主色占位示例" />;`,lj=[{name:"指定背景色",description:"直接指定浅灰背景，加载前不白屏。",src:"https://picsum.photos/id/1015/500/300",config:{color:"#e9ecef"}},{name:"LQIP 采样主色",description:"用小图采样平均色填充（跨域图需 CORS，失败则回退默认色）。",src:"https://picsum.photos/id/1021/500/300",config:{lqipSrc:"https://picsum.photos/id/1021/20/20"}},{name:"暖色背景",description:"指定暖色背景，营造色调一致感。",src:"https://picsum.photos/id/1026/500/300",config:{color:"#f8d7da"}}],cj=["指定颜色占位","LQIP 采样平均色","加载前不白屏","采样失败安全回退","可关闭"],uj=["相册/画廊占位","Pinterest 风布局","慢网白屏治理","品牌色调统一"],dj=["lqipSrc 采样需要图片服务器配置 CORS 头；跨域失败会自动回退到 color（默认浅灰），不影响加载。"],pj={name:nj,description:oj,since:rj,tags:ij,config:sj,example:aj,examples:lj,features:cj,useCases:uj,notes:dj};function mj(e,t){const{lqipSrc:n}=t;if(n)return typeof n=="function"?n(e):n}function gj(e={}){const{blur:t=12,opacity:n=1,zIndex:o=2}=e;return{name:"lqip",version:"1.0.0",config:e,hooks:{renderOverlay:r=>{const{imageState:i,src:s}=r,a=mj(s,e);if(!a||i.isLoaded)return null;const l={position:"absolute",inset:0,backgroundImage:`url(${a})`,backgroundSize:"cover",backgroundPosition:"center",filter:`blur(${t}px)`,opacity:n,zIndex:o,pointerEvents:"none",transition:"opacity 300ms ease"};return m.jsx("div",{style:l})}}}}const fj="LQIPPlugin",hj="低清预览（LQIP）：在清晰图加载期间叠加模糊的小图作为占位，加载完成后自动隐藏，实现渐进式加载体验。",yj="2.0.0",vj=["other","视觉","占位","渐进加载"],wj=[{name:"lqipSrc",type:"string | ((src) => string)",default:"undefined",description:"低清预览图地址或生成函数"},{name:"blur",type:"number",default:"12",description:"模糊半径(px)"},{name:"opacity",type:"number",default:"1",description:"不透明度(0~1)"},{name:"zIndex",type:"number",default:"2",description:"叠加层级"}],xj=`const LqipImage = withPlugins(LazyLoadImageCore, [
  createLqipPlugin({ lqipSrc: (src) => src + "?w=20", blur: 14 }),
]);

<LqipImage src="https://picsum.photos/id/1015/500/300" alt="LQIP 示例" />;`,bj=[{name:"模糊小图占位",description:"14px 模糊小图作为加载期占位。",src:"https://picsum.photos/id/1015/500/300",config:{lqipSrc:"https://picsum.photos/id/1015/20/20",blur:14}},{name:"低不透明度",description:"降低占位图不透明度，弱化视觉存在。",src:"https://picsum.photos/id/1021/500/300",config:{lqipSrc:"https://picsum.photos/id/1021/20/20",blur:12,opacity:.6}},{name:"清晰后淡出",description:"加载完成自动隐藏模糊层，过渡到清晰图。",src:"https://picsum.photos/id/1026/500/300",config:{lqipSrc:"https://picsum.photos/id/1026/20/20",blur:16}}],Pj=["模糊低清占位","可调模糊/透明度/层级","加载完成自动隐藏","支持函数/字符串来源","渐进式加载"],$j=["渐进式图片加载","慢网占位","画廊/相册","提升感知性能"],Sj=["lqipSrc 为函数型配置，静态预览使用字符串小图；函数用法见用法示例。"],Cj={name:fj,description:hj,since:yj,tags:vj,config:wj,example:xj,examples:bj,features:Pj,useCases:$j,notes:Sj};function Lj({context:e,cfg:t}){const{position:n="bottom",background:o="rgba(0,0,0,0.62)",color:r="#fff",fontSize:i=12,padding:s="6px 8px",borderRadius:a=4,zIndex:l=4,showWhen:c="loading",trigger:u="always"}=t,{imageState:d}=e,p=c==="always"||c==="loading"&&d.isLoading||c==="loaded"&&d.isLoaded||c==="error"&&d.isError,[f,v]=T.useState(!1);if(!(u==="always"?p:p&&f))return m.jsx("div",{style:{position:"absolute",inset:0,zIndex:l,pointerEvents:u==="hover"?"auto":"none"},onMouseEnter:()=>v(!0),onMouseLeave:()=>v(!1)});const w=typeof t.content=="function"?t.content(e):t.content||"Loading...";return m.jsx("div",{style:{position:"absolute",inset:0,zIndex:l,pointerEvents:u==="hover"?"auto":"none"},onMouseEnter:()=>v(!0),onMouseLeave:()=>v(!1),children:m.jsx("div",{style:{position:"absolute",left:8,right:8,background:o,color:r,fontSize:i,padding:s,borderRadius:a,zIndex:l,pointerEvents:u==="hover"?"auto":"none",textAlign:"center",...{top:{top:8},bottom:{bottom:8},center:{top:"50%",transform:"translateY(-50%)"}}[n]},children:w})})}function kj(e={}){return{name:"overlay-info",version:"1.0.0",config:e,hooks:{renderOverlay:t=>m.jsx(Lj,{context:t,cfg:e})}}}const Ij="OverlayInfoPlugin",_j="信息覆盖层：显示自定义文本，支持常显或悬停触发。",Ej="2.0.0",Rj=["visual","视觉"],zj=[{name:"content",type:"string | ((context: LazyImageContext) => string)",default:'""',description:"覆盖层文本；可传函数按 context 派生"},{name:"position",type:'"top" | "bottom" | "center"',default:'"bottom"',description:"文本位置"},{name:"background",type:"string",default:"rgba(0,0,0,0.62)",description:"背景色"},{name:"color",type:"string",default:"#fff",description:"文字颜色"},{name:"fontSize",type:"number",default:"12",description:"字号 px"},{name:"padding",type:"string",default:"6px 10px",description:"内边距"},{name:"borderRadius",type:"number",default:"0",description:"圆角 px"},{name:"zIndex",type:"number",default:"2",description:"层叠顺序"},{name:"showWhen",type:'"always" | "loading" | "loaded" | "error"',default:'"always"',description:"何时显示"},{name:"trigger",type:'"always" | "hover"',default:'"always"',description:"触发方式"}],Dj=`// 底部信息条（常显）
const InfoImage = withPlugins(LazyLoadImageCore, [
  createOverlayInfoPlugin({
    content: "来源：picsum.photos",
    position: "bottom",
    background: "rgba(0,0,0,0.62)",
    color: "#fff",
  }),
]);

// 按加载状态动态文本
createOverlayInfoPlugin({
  content: (ctx) => ctx.imageState === "loading" ? "加载中…" : "已加载",
  position: "center",
});`,Oj=[{name:"底部信息条（常显）",description:"半透明黑底白字信息条，常显于底部。",src:"https://picsum.photos/seed/overlay-bottom/600/400",config:{content:"来源：picsum.photos",position:"bottom",background:"rgba(0,0,0,0.62)",color:"#fff",showWhen:"always",trigger:"always"}},{name:"悬停显示信息",description:"平时干净，鼠标悬停时居中浮出提示文字。",src:"https://picsum.photos/seed/overlay-hover/600/400",config:{content:"悬停查看详情",position:"center",background:"rgba(0,0,0,0.62)",color:"#fff",showWhen:"always",trigger:"hover"}}],jj=["顶部 / 底部 / 居中三位置","文本支持静态或函数动态派生","背景 / 颜色 / 字号 / 圆角可调","可常显或悬停触发","可按加载状态（loading/loaded/error）显示"],Mj=["图片来源 / 版权信息","悬停浮出操作提示","加载 / 错误态文案","图库元信息展示"],Tj=["content 传函数时可按 context（含 imageState / src）派生，但场景示例画廊用静态文本以保证实时预览。","与 Caption 的区别：OverlayInfo 更通用（任意文本 + 触发时机 + 加载态），Caption 专注单一图注。"],Nj={name:Ij,description:_j,since:Ej,tags:Rj,config:zj,example:Dj,examples:Oj,features:jj,useCases:Mj,notes:Tj};function Aj(e={}){const t=Math.max(0,Math.min(1,e.strength??.2)),n=e.axis??"y";function o(r){const i=r.getBoundingClientRect(),s=typeof window<"u"?window.innerHeight:800,a=(i.top+i.height/2-s/2)/s*(t*100),l=n==="x"?a:0,c=n==="y"?a:0;r.style.transform=`translate(${l}px, ${c}px)`}return{name:"parallax",version:"1.0.0",config:e,hooks:{onMount:r=>{let i=0;const s=()=>{var c;const l=(c=r.imageRef)==null?void 0:c.current;if(!l){i++<60&&requestAnimationFrame(s);return}a(l)},a=l=>{r.__lliParallaxImg=l,l.style.willChange="transform";let c=!1,u=null;const d=()=>{c||(u=requestAnimationFrame(()=>{o(l),c=!1}),c=!0)},p=()=>{c||(u=requestAnimationFrame(()=>{o(l),c=!1}),c=!0)};return l.__lliParallaxScroll=d,l.__lliParallaxResize=p,l.__lliParallaxRafId=u,window.addEventListener("scroll",d,{passive:!0}),window.addEventListener("resize",p,{passive:!0}),o(l),()=>{l.__lliParallaxRafId!==null&&cancelAnimationFrame(l.__lliParallaxRafId)}};s()},onUnmount:r=>{var l;const i=r.__lliParallaxImg||((l=r.imageRef)==null?void 0:l.current);if(!i)return;if(i.__lliParallaxRafId!==null)try{cancelAnimationFrame(i.__lliParallaxRafId)}catch{}const s=i.__lliParallaxScroll,a=i.__lliParallaxResize;s&&window.removeEventListener("scroll",s),a&&window.removeEventListener("resize",a),i.style.transform="",i.style.willChange="",delete i.__lliParallaxScroll,delete i.__lliParallaxResize,delete i.__lliParallaxRafId}}}}const Bj="ParallaxPlugin",Uj="视差滚动：随页面滚动按强度偏移图片位置。",Fj="2.0.0",Wj=["visual","视觉"],Vj=[{name:"strength",type:"number",default:"0.2",description:"偏移强度 0..1"},{name:"axis",type:'"y" | "x"',default:'"y"',description:"偏移轴向"}],Hj=`// 垂直视差：滚动时图片缓慢位移
const ParallaxImage = withPlugins(LazyLoadImageCore, [
  createParallaxPlugin({ strength: 0.2, axis: "y" }),
]);

<ParallaxImage src="https://picsum.photos/seed/parallax/600/400" alt="视差" />;`,Gj=[{name:"垂直视差",description:"中等强度 y 轴视差，滚动时图片缓移，营造纵深。",src:"https://picsum.photos/seed/parallax-y/600/400",config:{strength:.2,axis:"y"}},{name:"轻微视差",description:"低强度视差，含蓄的层次感，不喧宾夺主。",src:"https://picsum.photos/seed/parallax-light/600/400",config:{strength:.1,axis:"y"}}],qj=["随滚动偏移图片（y / x 轴）","强度可调（0~1）","纯 transform 实现，性能友好","增强页面纵深与动感"],Qj=["落地页 / Hero 区背景","长图文滚动叙事","作品集视差画廊","需要纵深氛围的视觉场景"],Kj=["视差依赖页面滚动，demo 小卡片内滚动幅度有限，效果在长页面更明显。","strength 过大可能导致图片露出边缘，建议配合 overflow:hidden 容器。"],Yj={name:Bj,description:Uj,since:Fj,tags:Wj,config:Vj,example:Hj,examples:Gj,features:qj,useCases:Qj,notes:Kj};function Xj({bus:e,loading:t,showWhen:n="loading",height:o=3,color:r="#3b82f6",background:i="rgba(0,0,0,0.15)",showPercentText:s=!0}){const[a,l]=x.useState(null),[c,u]=x.useState(0),d=T.useRef(null);x.useEffect(()=>{const v=e==null?void 0:e.on("progress",w=>{l(w),w.indeterminate?d.current||(d.current=window.setInterval(()=>{u(b=>b<90?b+3:b)},160)):(u(w.percent??0),d.current&&(clearInterval(d.current),d.current=null))});return()=>{v==null||v(),d.current&&(clearInterval(d.current),d.current=null)}},[e]);const p=n==="always"?!0:t,f=a!=null&&a.indeterminate?c:(a==null?void 0:a.percent)??0;return p?m.jsxs("div",{style:{position:"absolute",inset:0,pointerEvents:"none",background:i,display:"flex",alignItems:"flex-end",zIndex:10},children:[m.jsx("div",{style:{width:`${f}%`,height:o,background:r,transition:"width 200ms ease"}}),s&&m.jsx("div",{style:{position:"absolute",left:"50%",top:"50%",transform:"translate(-50%, -50%)",fontSize:12,color:"#fff",textShadow:"0 1px 2px rgba(0,0,0,0.5)",textAlign:"center",pointerEvents:"none"},children:a!=null&&a.indeterminate?`加载中… ${f}%`:`${f}%`})]}):null}function Zj(e={}){return{name:"progress-overlay",version:"1.0.0",config:e,hooks:{renderOverlay:({bus:t,imageState:n})=>m.jsx(Xj,{bus:t,loading:n.isLoading,showWhen:e.showWhen,height:e.height,color:e.color,background:e.background,showPercentText:e.showPercentText??!0}),onProgress:()=>{}}}}const Jj="ProgressOverlayPlugin",eM="加载进度条覆盖层：百分比文本与 indeterminate 模式。",tM="2.0.0",nM=["visual","视觉"],oM=[{name:"showWhen",type:'"always" | "loading"',default:'"loading"',description:"何时显示"},{name:"height",type:"number",default:"3",description:"进度条高度 px"},{name:"color",type:"string",default:"#4a90e2",description:"进度条颜色"},{name:"background",type:"string",default:"transparent",description:"背景遮罩色"},{name:"showPercentText",type:"boolean",default:"false",description:"是否显示百分比文本"}],rM=`// 顶部进度条 + 百分比文本
const ProgressImage = withPlugins(LazyLoadImageCore, [
  createProgressOverlayPlugin({
    showWhen: "loading",
    height: 3,
    color: "#4a90e2",n    showPercentText: true,
  }),
]);

<ProgressImage src="https://picsum.photos/seed/progress/600/400" alt="进度蒙层" />;`,iM=[{name:"顶部进度条 + 百分比",description:"细进度条置于顶部，并显示实时百分比。",src:"https://picsum.photos/seed/progress-top/600/400",config:{showWhen:"loading",height:3,color:"#4a90e2",showPercentText:!0}},{name:"半透明遮罩 + 百分比",description:"加载期覆盖半透明遮罩，中心显示百分比，适合大图。",src:"https://picsum.photos/seed/progress-mask/600/400",config:{showWhen:"loading",height:4,color:"#22c55e",background:"rgba(0,0,0,0.12)",showPercentText:!0}}],sM=["顶部 / 覆盖式进度条","实时百分比文本","颜色 / 高度 / 背景可调","加载完成后自动消失"],aM=["大图 / 慢网络加载反馈","视频封面缓冲提示","需要明确进度感知的场景","与 Skeleton 配合提升占位体验"],lM=["进度数据来自内核 progress 事件，跨域或缓存命中时可能很快跳到 100%。","与 Skeleton 同时使用时，进度条层级通常高于骨架。"],cM={name:Jj,description:eM,since:tM,tags:nM,config:oM,example:rM,examples:iM,features:sM,useCases:aM,notes:lM};function uM(e={}){const{enabled:t=!0,boxes:n=[],zIndex:o=3}=e;return{name:"redaction",version:"1.0.0",config:e,hooks:{renderOverlay:r=>!t||!n.length?null:m.jsx("div",{style:{position:"absolute",inset:0,pointerEvents:"none",zIndex:o},children:n.map((i,s)=>m.jsx("div",{style:{position:"absolute",left:`${i.x*100}%`,top:`${i.y*100}%`,width:`${i.w*100}%`,height:`${i.h*100}%`,background:i.color??"rgba(0,0,0,0.55)",backdropFilter:i.blur?`blur(${i.blur}px)`:void 0,borderRadius:6}},s))})}}}const dM="RedactionPlugin",pM="隐私打码：在指定百分比区域叠加模糊或色块遮挡。",mM="2.0.0",gM=["visual","视觉"],fM=[{name:"enabled",type:"boolean",default:"true",description:"是否启用"},{name:"boxes",type:"RedactionBox[]",default:"[]",description:"遮挡区域：{ x, y, w, h (0~1), blur?, color? }"},{name:"zIndex",type:"number",default:"3",description:"层叠顺序"}],hM=`// 局部打码（如人脸 / 车牌）
const RedactedImage = withPlugins(LazyLoadImageCore, [
  createRedactionPlugin({
    boxes: [
      { x: 0.40, y: 0.30, w: 0.20, h: 0.15, blur: 8 },
    ],
  }),
]);

<RedactedImage src="https://picsum.photos/seed/redaction/600/400" alt="打码" />;`,yM=[{name:"局部模糊打码",description:"在图片 40%/30% 处覆盖一块 20%×15% 的模糊区域（如人脸）。",src:"https://picsum.photos/seed/redaction-blur/600/400",config:{enabled:!0,boxes:[{x:.4,y:.3,w:.2,h:.15,blur:8}]}},{name:"色块遮挡",description:"用半透明色块遮挡敏感区域，不依赖模糊。",src:"https://picsum.photos/seed/redaction-block/600/400",config:{enabled:!0,boxes:[{x:.1,y:.7,w:.35,h:.12,color:"rgba(0,0,0,0.85)"}]}}],vM=["按百分比坐标划定遮挡区（自适应尺寸）","支持模糊（blur）或纯色块两种遮挡","可同时覆盖多个区域","整体启停"],wM=["人脸 / 车牌隐私打码","敏感信息遮挡","截图脱敏","合规图片发布"],xM=["坐标使用 0~1 的相对比例，图片缩放时遮挡区自动跟随。","blur 通过 backdrop-filter 实现；若浏览器不支持会以纯色块兜底。","打码是覆盖层，不改变原图像素，导出原图不会被脱敏。"],bM={name:dM,description:pM,since:mM,tags:gM,config:fM,example:hM,examples:yM,features:vM,useCases:wM,notes:xM},PM=new Set(["script","iframe","object","embed","foreignobject","base","meta","link","style"]),$M=new Set(["href","xlink:href","src","action","formaction","poster","background","cite","data","codebase","longdesc","usemap"]),SM=["http:","https:","blob:","mailto:","tel:","data:image/"];function CM(e){const t=Array.from(e.trim().toLowerCase()).filter(n=>n.charCodeAt(0)>32).join("");return!t||t.startsWith("#")||t.startsWith("./")||t.startsWith("../")||t.startsWith("/")?!0:t.startsWith("data:")?t.startsWith("data:image/"):/^(javascript|vbscript|file):/.test(t)?!1:SM.some(n=>t.startsWith(n))||!t.includes(":")}function LM(e){var t,n;if(!e||typeof DOMParser>"u")return"";try{const o=new DOMParser;let r=o.parseFromString(e,"image/svg+xml").documentElement;if((!r||r.nodeName.toLowerCase()==="parsererror")&&(r=((n=(t=o.parseFromString(e,"text/html"))==null?void 0:t.body)==null?void 0:n.querySelector("svg"))??null),!r)return"";const i=a=>{if(PM.has(a.tagName.toLowerCase())){a.remove();return}Array.from(a.attributes).forEach(l=>{const c=l.name.toLowerCase();if(c.startsWith("on")){a.removeAttribute(l.name);return}if(c==="style"){/expression|javascript:|vbscript:|url\s*\(\s*['"]?(javascript|vbscript)/i.test(l.value)&&a.removeAttribute(l.name);return}$M.has(c)&&!CM(l.value)&&a.removeAttribute(l.name)}),Array.from(a.children).forEach(i)};i(r);const s=typeof XMLSerializer<"u"?new XMLSerializer:null;return s?s.serializeToString(r):r.outerHTML||""}catch{return""}}function kM({context:e,config:t}){const{imageState:n}=e,{background:o="transparent",opacity:r=1,zIndex:i=3,showWhen:s="loading",fadeOutOnLoaded:a=!0}=t;if(!(()=>{switch(s){case"always":return!0;case"idle":return n.isIdle;case"loading":return n.isLoading;case"loaded":return n.isLoaded;case"error":return n.isError;default:return n.isLoading}})())return null;const l=typeof t.svgContent=="function"?t.svgContent(e):t.svgContent;let c=null;if(typeof l=="string"){const d=LM(l);d&&(c=m.jsx("img",{src:`data:image/svg+xml;charset=utf-8,${encodeURIComponent(d)}`,alt:"",style:{width:"60%",height:"60%",objectFit:"contain"}}))}else l!=null&&(c=l);const u={position:"absolute",inset:0,display:"flex",alignItems:"center",justifyContent:"center",background:o,zIndex:i,pointerEvents:"none",opacity:a&&n.isLoaded?0:r,transition:a?"opacity 240ms ease":void 0,padding:"min(40px, 10%)"};return m.jsx("div",{style:u,"aria-hidden":!0,children:c})}function IM(e={}){return{name:"svg-placeholder",version:"1.1.0",description:"SVG 占位覆盖层（字符串经白名单清洗后以 data URL 渲染，移除 HTML 注入点）",config:e,hooks:{renderOverlay:t=>m.jsx(kM,{context:t,config:e})}}}const _M="SvgPlaceholderPlugin",EM="SVG 占位：在加载期间注入自定义 SVG 占位内容（如骨架、品牌图形），加载成功后淡出，增强加载反馈与品牌感。",RM="2.0.0",zM=["other","视觉","占位"],DM=[{name:"svgContent",type:"string | ((context) => string)",default:"undefined",description:"SVG 字符串或动态生成函数"},{name:"background",type:"string",default:'"transparent"',description:"叠加层背景"},{name:"opacity",type:"number",default:"1",description:"不透明度(0~1)"},{name:"zIndex",type:"number",default:"3",description:"叠加层级"},{name:"showWhen",type:'"always" | "idle" | "loading" | "loaded" | "error"',default:'"loading"',description:"显示条件"},{name:"fadeOutOnLoaded",type:"boolean",default:"true",description:"加载成功后是否淡出"}],OM=`const SvgImage = withPlugins(LazyLoadImageCore, [
  createSvgPlaceholderPlugin({
    svgContent: () => \`<svg viewBox='0 0 100 100'><circle cx='50' cy='50' r='40' fill='#ddd'/></svg>\`,
    showWhen: "loading",
  }),
]);

<SvgImage src="https://picsum.photos/id/1015/500/300" alt="SVG 占位示例" />;`,jM=[{name:"圆形骨架占位",description:"加载期显示灰色圆形 SVG 占位，完成后淡出。",src:"https://picsum.photos/id/1015/500/300",config:{svgContent:"<svg viewBox='0 0 100 100'><circle cx='50' cy='50' r='40' fill='#ddd'/></svg>",showWhen:"loading"}},{name:"带背景占位",description:"浅色背景衬托占位 SVG。",src:"https://picsum.photos/id/1021/500/300",config:{svgContent:"<svg viewBox='0 0 100 100'><rect x='10' y='10' width='80' height='80' rx='8' fill='#eee'/></svg>",background:"#fafafa"}},{name:"常驻标识",description:"showWhen=always，占位层持续显示。",src:"https://picsum.photos/id/1026/500/300",config:{svgContent:"<svg viewBox='0 0 100 100'><rect width='100' height='100' fill='rgba(0,0,0,0.04)'/></svg>",showWhen:"always"}}],MM=["注入任意 SVG 占位","加载时/常驻/多状态显示","淡出过渡","背景/透明度/层级可调","函数/字符串来源"],TM=["动画骨架屏","品牌图形占位","加载反馈","差异化占位"],NM=["svgContent 支持函数型（按 context 动态生成），静态预览使用字符串；函数用法见用法示例。"],AM={name:_M,description:EM,since:RM,tags:zM,config:DM,example:OM,examples:jM,features:MM,useCases:TM,notes:NM};function BM(e,t){var o;const n=(o=e.imageRef)==null?void 0:o.current;if(n)try{n.style.opacity=String(t.fromOpacity??0),n.style.transform=`scale(${t.fromScale??.98})`,n.style.transition=`opacity ${t.durationMs??300}ms ${t.easing??"ease"}, transform ${t.durationMs??300}ms ${t.easing??"ease"}`}catch{}}function UM(e,t){var o;const n=(o=e.imageRef)==null?void 0:o.current;if(n)try{n.style.opacity=String(t.toOpacity??1),n.style.transform=`scale(${t.toScale??1})`}catch{}}function FM(e={}){return{name:"transition",version:"1.0.0",config:e,hooks:{onMount:t=>{BM(t,e)},onLoadSuccess:t=>{UM(t,e)}}}}const WM="TransitionPlugin",VM="加载成功过渡动画：从指定透明度/缩放到目标值的平滑过渡。",HM="2.0.0",GM=["visual","视觉"],qM=[{name:"durationMs",type:"number",default:"400",description:"过渡时长 ms"},{name:"easing",type:"string",default:"ease",description:"缓动函数"},{name:"fromOpacity",type:"number",default:"0",description:"起始透明度"},{name:"toOpacity",type:"number",default:"1",description:"结束透明度"},{name:"fromScale",type:"number",default:"1",description:"起始缩放"},{name:"toScale",type:"number",default:"1",description:"结束缩放"}],QM=`// 缩放 + 淡入过渡
const TransImage = withPlugins(LazyLoadImageCore, [
  createTransitionPlugin({
    durationMs: 500,
    fromOpacity: 0,
    toOpacity: 1,
    fromScale: 1.05,
    toScale: 1,
  }),
]);

<TransImage src="https://picsum.photos/seed/transition/600/400" alt="过渡" />;`,KM=[{name:"缩放淡入",description:"从 1.05 倍淡入到原尺寸，轻盈的入场感。",src:"https://picsum.photos/seed/transition-zoom/600/400",config:{durationMs:500,fromOpacity:0,toOpacity:1,fromScale:1.05,toScale:1}},{name:"纯淡入",description:"仅透明度过渡，不含缩放。",src:"https://picsum.photos/seed/transition-fade/600/400",config:{durationMs:400,fromOpacity:0,toOpacity:1}}],YM=["透明度 + 缩放双维度过渡","起始 / 结束值均可定制","时长与缓动可调","相比 FadeIn 更灵活"],XM=["图片入场动画","卡片翻转 / 弹出图","需要缩放感的场景","与视差 / 滚动联动"],ZM=["fromScale=toScale=1 时退化为纯淡入，等价于更轻量的 FadeIn。","缩放在 transform 上实现，注意父容器 overflow 与定位。"],JM={name:WM,description:VM,since:HM,tags:GM,config:qM,example:QM,examples:KM,features:YM,useCases:XM,notes:ZM};function eT(e={}){const{text:t="© 2024 Vane",position:n="bottom-right",opacity:o=.8,fontSize:r=12,color:i="#fff",offsetX:s=8,offsetY:a=8,zIndex:l=2,enabled:c=!0}=e;return{name:"watermark",version:"1.0.0",config:e,hooks:{renderOverlay:u=>{if(!c)return null;const d=typeof t=="function"?t(u.src):t;return m.jsx("div",{"aria-hidden":"true",style:{position:"absolute",pointerEvents:"none",color:i,opacity:o,fontSize:r,fontWeight:500,textShadow:"0 1px 2px rgba(0,0,0,0.55)",zIndex:l,...{"top-left":{top:a,left:s},"top-right":{top:a,right:s},"bottom-left":{bottom:a,left:s},"bottom-right":{bottom:a,right:s},center:{top:"50%",left:"50%",transform:"translate(-50%, -50%)"}}[n]},children:d})}}}}const tT="WatermarkPlugin",nT="文字水印覆盖层：支持四角/中心定位、动态文本与样式定制。",oT="2.0.0",rT=["visual","视觉"],iT=[{name:"text",type:"string | ((src: string) => string)",default:'"© 2024 Vane"',description:"水印文本；可传函数按 src 动态生成"},{name:"position",type:'"top-left" | "top-right" | "bottom-left" | "bottom-right" | "center"',default:'"bottom-right"',description:"水印位置"},{name:"opacity",type:"number",default:"0.8",description:"0~1 透明度"},{name:"fontSize",type:"number",default:"12",description:"px 字号"},{name:"color",type:"string",default:'"#fff"',description:"文字颜色"},{name:"offsetX",type:"number",default:"8",description:"px 水平偏移"},{name:"offsetY",type:"number",default:"8",description:"px 垂直偏移"},{name:"zIndex",type:"number",default:"2",description:"层叠顺序"},{name:"enabled",type:"boolean",default:"true",description:"是否启用"}],sT=`// 版权水印：右下角、半透明
const MarkedImage = withPlugins(LazyLoadImageCore, [
  createWatermarkPlugin({
    text: "© 2026 Vane",
    position: "bottom-right",
    opacity: 0.6,
    fontSize: 14,
    color: "#ffffff",
  }),
]);

// 按图片地址动态派生水印
createWatermarkPlugin({
  text: (src) => \`watermark • \${src.split("/").pop()}\`,
  position: "center",
  opacity: 0.22,
  fontSize: 28,
});`,aT=[{name:"版权水印（右下角）",description:"半透明白字落在右下角，常见版权标识场景。",src:"https://picsum.photos/seed/wm-copyright/600/400",config:{text:"© 2026 Vane",position:"bottom-right",opacity:.6,fontSize:14,color:"#ffffff"}},{name:"中心品牌水印",description:"居中、低透明度大字，适合图库/作品集防盗用。",src:"https://picsum.photos/seed/wm-center/600/400",config:{text:"VANE",position:"center",opacity:.22,fontSize:30,color:"#ffffff"}},{name:"左上角说明水印",description:"左上角小字，作来源/批次标注。",src:"https://picsum.photos/seed/wm-topleft/600/400",config:{text:"内部素材 • 勿外传",position:"top-left",opacity:.85,fontSize:12,color:"#ffd400"}}],lT=["五位置可选（四角 + 中心）","文本支持静态字符串或函数动态派生","可调透明度 / 字号 / 颜色 / 偏移","可整体启停（enabled）","层叠顺序可控（zIndex）"],cT=["图片版权 / 品牌标识","图库与作品集防盗用","内部素材来源 / 批次标注","活动海报统一角标","按用户 / 租户动态打标"],uT=["text 传函数时按图片 src 动态生成（如嵌入 ID），但场景示例画廊需用静态文本以保证实时预览。","中心水印透明度建议低于 0.3，避免遮挡主体内容。","水印为覆盖层（renderOverlay），不参与图片本身像素，导出原图不会被打标。"],dT={name:tT,description:nT,since:oT,tags:rT,config:iT,example:sT,examples:aT,features:lT,useCases:cT,notes:uT};let pT=0;function mT(e){return Object.entries(e).map(([t,n])=>n==null?"":`${t.replace(/[A-Z]/g,o=>"-"+o.toLowerCase())}: ${n};`).filter(Boolean).join(" ")}const gT=e=>{const t=(e==null?void 0:e.imageStyle)??{},n=(e==null?void 0:e.containerStyle)??{},o=(e==null?void 0:e.hoverImageStyle)??{},r=Object.keys(o).length>0,i=`lli-custom-${++pT}`;let s=null;const a=[t.transition,"opacity 180ms ease"].filter(Boolean).join(", ");return{name:"custom-effects",priority:50,hooks:{transformProps(l){const c={...l.imageStyle||{},...t,transition:a},u={...l.containerStyle||{},...n},d=[l.imageClassName,e==null?void 0:e.imageClassName,r?i:null].filter(Boolean).join(" "),p=[l.containerClassName,e==null?void 0:e.containerClassName].filter(Boolean).join(" ");return{...l,imageStyle:c,imageClassName:d,containerStyle:u,containerClassName:p}},onLoadSuccess(){!r||typeof document>"u"||s||(s=document.createElement("style"),s.setAttribute("data-lli-custom",i),s.textContent=`.${i}:hover { ${mT(o)} }`,document.head.appendChild(s))},onUnmount(){s&&s.parentNode&&(s.parentNode.removeChild(s),s=null)}}}},fT="CustomEffectsPlugin",hT="自定义效果逃逸舱：把内置视觉插件覆盖不到的任意 CSS 效果（filter / transform / transition / className）直接注入图片与容器，无需新造组件。旧版 CustomEffects 展示页的 v2 等效形态。",yT="2.0.0",vT=["visual","视觉","自定义"],wT=[{name:"imageStyle",type:"React.CSSProperties",default:"{}",description:'应用到 <img> 的任意内联样式，如 { filter: "contrast(1.2) saturate(1.4)" }'},{name:"imageClassName",type:"string",default:'""',description:"附加到 <img> 的 className"},{name:"containerStyle",type:"React.CSSProperties",default:"{}",description:"应用到容器（卡片）的任意内联样式"},{name:"containerClassName",type:"string",default:'""',description:"附加到容器的 className"},{name:"hoverImageStyle",type:"React.CSSProperties",default:"{}",description:'悬停时叠加到 <img> 的样式（移出还原），如 { transform: "scale(1.08)" }'}],xT=`// 任意 CSS 效果逃逸舱：内置插件没有的视觉，直接以样式注入
const ArtImage = withPlugins(LazyLoadImageCore, [
  createCustomEffectsPlugin({
    imageStyle: {
      filter: "contrast(1.15) saturate(1.4) hue-rotate(-8deg)",
      transition: "filter 240ms ease",
    },
    containerStyle: { borderRadius: 16, overflow: "hidden" },
    hoverImageStyle: { transform: "scale(1.06)" },
  }),
]);

<ArtImage src="https://picsum.photos/seed/custom/600/400" alt="自定义效果" />;`,bT=[{name:"复古胶片滤镜（静态）",description:"sepia + 对比度 + 饱和度组合，模拟胶片质感，并给容器加圆角。",src:"https://picsum.photos/seed/custom-film/600/400",config:{imageStyle:{filter:"sepia(0.45) contrast(1.1) saturate(1.3)",transition:"filter 240ms ease"},containerStyle:{borderRadius:16,overflow:"hidden",boxShadow:"0 6px 20px rgba(0,0,0,0.18)"}}},{name:"悬停放大 + 轻微旋转",description:"平常静态，鼠标悬停时图片放大并旋转 2°，移出自动还原。",src:"https://picsum.photos/seed/custom-hover/600/400",config:{imageStyle:{transition:"transform 220ms ease"},hoverImageStyle:{transform:"scale(1.08) rotate(2deg)"}}},{name:"叠加到内置插件之上",description:"与 BorderGlow / Caption 等内置插件叠加：用逃逸舱补一个渐变描边。",src:"https://picsum.photos/seed/custom-combo/600/400",config:{imageClassName:"custom-art-frame",containerStyle:{padding:6,background:"linear-gradient(135deg,#ff9a9e,#fad0c4)",borderRadius:12}}}],PT=["注入任意 CSS filter（模糊 / 灰度 / 复古 / 色相旋转等）","注入任意 transform（缩放 / 旋转 / 位移）","为 <img> 与容器分别附加 className 与内联样式","hoverImageStyle 支持悬停态，移出自动还原","优先级靠前，可叠加在其它视觉插件之上","无需为一次性效果新建组件，几行配置即可"],$T=["内置视觉插件未覆盖的特殊滤镜 / 调色需求","活动主题需要临时换肤、加描边 / 圆角","悬停微交互（放大、旋转、投影）","演示或 A/B 实验时的快速视觉验证","替代旧版 CustomEffects 展示页的任意效果组合"],ST=["imageStyle / containerStyle 合并进核心渲染的 style，后者优先级更高（叠加而非覆盖）。","插件会自动保留核心自带的 opacity 渐显：你给 imageStyle.transition 设值时，会追加 opacity 180ms 而非覆盖它。","hoverImageStyle 通过注入一条纯 CSS `:hover` 规则实现，由浏览器原生处理进入/离开——不触碰 React 受控的内联样式，因此不会出现「移出后图片消失」的旧问题。","与内置插件叠加时，建议把 CustomEffects 放在 withPlugins 数组靠前位置（其 priority=50 已处理）。","需要函数式动态样式时，可在业务侧先算出 style 对象再传入，本插件保持配置式以便文档化。"],CT={name:fT,description:hT,since:yT,tags:vT,config:wT,example:xT,examples:bT,features:PT,useCases:$T,notes:ST},LT={fade:"@keyframes reveal-fade { from { opacity: 0; } to { opacity: 1; } }","fade-up":"@keyframes reveal-fade-up { from { opacity: 0; transform: translateY(30px); } to { opacity: 1; transform: translateY(0); } }","fade-down":"@keyframes reveal-fade-down { from { opacity: 0; transform: translateY(-30px); } to { opacity: 1; transform: translateY(0); } }","fade-left":"@keyframes reveal-fade-left { from { opacity: 0; transform: translateX(30px); } to { opacity: 1; transform: translateX(0); } }","fade-right":"@keyframes reveal-fade-right { from { opacity: 0; transform: translateX(-30px); } to { opacity: 1; transform: translateX(0); } }","zoom-in":"@keyframes reveal-zoom-in { from { opacity: 0; transform: scale(0.8); } to { opacity: 1; transform: scale(1); } }","zoom-out":"@keyframes reveal-zoom-out { from { opacity: 0; transform: scale(1.2); } to { opacity: 1; transform: scale(1); } }","rotate-in":"@keyframes reveal-rotate-in { from { opacity: 0; transform: rotate(-180deg) scale(0.5); } to { opacity: 1; transform: rotate(0deg) scale(1); } }","flip-x":"@keyframes reveal-flip-x { from { opacity: 0; transform: perspective(400px) rotateX(-90deg); } to { opacity: 1; transform: perspective(400px) rotateX(0deg); } }","flip-y":"@keyframes reveal-flip-y { from { opacity: 0; transform: perspective(400px) rotateY(-90deg); } to { opacity: 1; transform: perspective(400px) rotateY(0deg); } }","slide-up":"@keyframes reveal-slide-up { from { transform: translateY(100%); } to { transform: translateY(0); } }","slide-down":"@keyframes reveal-slide-down { from { transform: translateY(-100%); } to { transform: translateY(0); } }","slide-left":"@keyframes reveal-slide-left { from { transform: translateX(100%); } to { transform: translateX(0); } }","slide-right":"@keyframes reveal-slide-right { from { transform: translateX(-100%); } to { transform: translateX(0); } }",bounce:"@keyframes reveal-bounce { from { opacity: 0; transform: scale(0.3) translateY(-50px); } 50% { opacity: 1; transform: scale(1.05) translateY(0); } 70% { transform: scale(0.95); } to { opacity: 1; transform: scale(1); } }",elastic:"@keyframes reveal-elastic { from { opacity: 0; transform: scale(0); } 50% { opacity: 1; transform: scale(1.2); } 75% { transform: scale(0.9); } 90% { transform: scale(1.05); } to { opacity: 1; transform: scale(1); } }"};function Ac(e,t){if(typeof document>"u"||document.getElementById(e))return;const n=document.createElement("style");n.id=e,n.textContent=t,document.head.appendChild(n)}function kT(e={}){const{animation:t="fade-up",duration:n=600,delay:o=0,easing:r="ease-out",customAnimation:i,customKeyframes:s,fillMode:a="both",disabled:l=!1}=e;return t!=="custom"?Ac(`reveal-animation-${t}`,LT[t]??""):s&&i&&Ac(`reveal-animation-custom-${i}`,s),{name:"reveal-animation",version:"1.0.0",config:e,hooks:{onLoadSuccess:c=>{var p;if(l)return;const u=(p=c.imageRef)==null?void 0:p.current;if(!u)return;const d=t==="custom"?i||"none":`reveal-${t}`;if(u.style.animation=`${d} ${n}ms ${r} ${o}ms ${a}`,a==="none"||a==="backwards"){const f=()=>{u.style.animation="",u.removeEventListener("animationend",f)};u.addEventListener("animationend",f)}}}}}const IT="RevealAnimationPlugin",_T="图片揭示动画：为图片加载添加各种进场动画（淡入/缩放/旋转/翻转/弹跳/弹性等 16 种预设 + 自定义），纯 CSS 无依赖。",ET="2.0.0",RT=["interaction","视觉效果与交互","visual"],zT=[{name:"animation",type:'"fade" | "fade-up" | "fade-down" | "fade-left" | "fade-right" | "zoom-in" | "zoom-out" | "rotate-in" | "flip-x" | "flip-y" | "slide-up" | "slide-down" | "slide-left" | "slide-right" | "bounce" | "elastic" | "custom"',default:'"fade-up"',description:"动画类型"},{name:"duration",type:"number",default:"600",description:"持续时间（毫秒）"},{name:"delay",type:"number",default:"0",description:"延迟（毫秒）"},{name:"easing",type:"string",default:'"ease-out"',description:"缓动函数"},{name:"customAnimation",type:"string",default:'""',description:"自定义动画名（animation 为 custom 时生效）"},{name:"customKeyframes",type:"string",default:'""',description:"自定义 keyframes 文本"},{name:"fillMode",type:'"none" | "forwards" | "backwards" | "both"',default:'"both"',description:"动画填充模式"},{name:"disabled",type:"boolean",default:"false",description:"是否禁用"}],DT=`// 1. 组装带揭示动画的懒加载图片
const RevealImage = withPlugins(LazyLoadImageCore, [
  createRevealAnimationPlugin({ animation: "zoom-in", duration: 800 }),
]);

// 2. 在列表中使用
<RevealImage
  src="https://picsum.photos/id/1018/400/300"
  alt="风景"
  style={{ width: 240, height: 160, borderRadius: 8 }}
/>;

// 3. 自定义关键帧动画
createRevealAnimationPlugin({
  animation: "custom",
  customAnimation: "myReveal",
  customKeyframes:
    "@keyframes myReveal { from { opacity: 0; transform: scale(1.2) rotate(8deg); } to { opacity: 1; transform: none; } }",
});`,OT=[{name:"淡入上浮（默认）",description:"fade-up：图片加载完成后从下方淡入上浮，最通用的进场效果。",src:"https://picsum.photos/id/1018/400/300",config:{animation:"fade-up",duration:700,easing:"ease-out"}},{name:"缩放进入 zoom-in",description:"图片由 1.2 倍缩放回落至原尺寸并淡入，适合主视觉。",src:"https://picsum.photos/id/1015/400/300",config:{animation:"zoom-in",duration:800}},{name:"旋转进入 rotate-in",description:"带轻微旋转的进场，动感更强。",src:"https://picsum.photos/id/1024/400/300",config:{animation:"rotate-in",duration:900,delay:100}},{name:"弹跳 bounce",description:"带回弹缓冲的进场，活泼、吸引注意。",src:"https://picsum.photos/id/1039/400/300",config:{animation:"bounce",duration:1e3}},{name:"弹性 elastic + 自定义时长",description:"弹性缓动 + 更长时长，强调“弹出”质感。",src:"https://picsum.photos/id/1043/400/300",config:{animation:"elastic",duration:1200,easing:"cubic-bezier(0.68, -0.55, 0.265, 1.55)"}},{name:"自定义关键帧 custom",description:"通过 customAnimation 指定动画名，并以 customKeyframes 注入关键帧文本，可做任意效果。",src:"https://picsum.photos/id/1050/400/300",config:{animation:"custom",customAnimation:"myReveal",customKeyframes:"@keyframes myReveal { from { opacity: 0; transform: scale(1.2) rotate(8deg); } to { opacity: 1; transform: none; } }"}}],jT=["16 种预设动画（淡入/缩放/旋转/翻转/滑动/弹跳/弹性）","支持自定义动画名 + 关键帧文本","可配置时长、延迟、缓动函数","fill 模式控制动画结束态","可一键禁用（disabled，适配低端设备）","纯 CSS 实现，无运行时依赖"],MT=["图片列表进场","瀑布流懒加载","轮播图切换","首屏内容揭示","卡片/区块入场动画","营销落地页视觉点缀"],TT=["动画在图片加载完成后触发一次；再次滚动不会重复播放。","低端设备或开启“减少动态效果”偏好时，可设 disabled: true 关闭动画。"],NT={name:IT,description:_T,since:ET,tags:RT,config:zT,example:DT,examples:OT,features:jT,useCases:MT,notes:TT};function AT(){if(typeof document>"u"||document.getElementById("glitch-effect-styles"))return;const e=document.createElement("style");e.id="glitch-effect-styles",e.textContent=`
    @keyframes glitch-anim {
      0% { clip-path: inset(40% 0 30% 0); transform: translate(2px, 2px); }
      10% { clip-path: inset(70% 0 10% 0); transform: translate(-3px, 3px); }
      20% { clip-path: inset(10% 0 70% 0); transform: translate(3px, -2px); }
      30% { clip-path: inset(50% 0 30% 0); transform: translate(-2px, 2px); }
      40% { clip-path: inset(20% 0 60% 0); transform: translate(3px, 3px); }
      50% { clip-path: inset(60% 0 20% 0); transform: translate(-3px, -2px); }
      60% { clip-path: inset(30% 0 50% 0); transform: translate(2px, 3px); }
      70% { clip-path: inset(80% 0 5% 0); transform: translate(-2px, -3px); }
      80% { clip-path: inset(15% 0 65% 0); transform: translate(3px, 2px); }
      90% { clip-path: inset(45% 0 35% 0); transform: translate(-3px, 2px); }
      100% { clip-path: inset(25% 0 55% 0); transform: translate(0, 0); }
    }
    @keyframes glitch-rgb-split {
      0%, 100% { transform: translate(0); opacity: 1; }
      25% { transform: translate(-1px, 1px); opacity: 0.8; }
      50% { transform: translate(1px, -1px); opacity: 0.9; }
      75% { transform: translate(-1px, -1px); opacity: 0.85; }
    }
    @keyframes scan-line-move { from { transform: translateY(-100%); } to { transform: translateY(100%); } }
  `,document.head.appendChild(e)}const BT=({config:e})=>{const{style:t="glitch-mix",continuous:n=!1,duration:o=1e3,intensity:r=.7,triggerOnHover:i=!1,rgbOffset:s=3,scanLineCount:a=30,animateScanLines:l=!0}=e,[c,u]=x.useState(!1),[d,p]=x.useState(!1);x.useEffect(()=>{if(AT(),!n&&!i){u(!0);const h=setTimeout(()=>u(!1),o);return()=>clearTimeout(h)}},[n,i,o]);const f=n||c||i&&d,v={position:"absolute",inset:0,background:`linear-gradient(90deg, rgba(255,0,0,${r*.15}) 0%, transparent ${s*2}px, transparent calc(100% - ${s*2}px), rgba(0,255,255,${r*.15}) 100%)`,mixBlendMode:"color",animation:f?"glitch-rgb-split 0.5s ease-in-out infinite":"none",pointerEvents:"none"},w=Array.from({length:a},(h,g)=>m.jsx("div",{style:{position:"absolute",left:0,right:0,height:"1px",top:`${g/a*100}%`,background:`rgba(255,255,255,${r*.1})`,animation:l&&f?`scan-line-move ${2+Math.random()*2}s linear infinite`:"none",animationDelay:`${Math.random()*2}s`}},g)),b=h=>{const g=[{main:"rgba(255,0,0,0.15)",secondary:"rgba(0,255,255,0.15)"},{main:"rgba(0,255,0,0.15)",secondary:"rgba(255,0,255,0.15)"},{main:"rgba(0,100,255,0.15)",secondary:"rgba(255,255,0,0.15)"}],y=g[h-1]||g[0];return{position:"absolute",inset:0,background:`linear-gradient(${h*45}deg, ${y.main} 0%, transparent 30%, transparent 70%, ${y.secondary} 100%)`,animation:f?`glitch-anim ${.4+h*.1}s infinite ${h%2===0?"normal":"reverse"}`:"none",animationDelay:`${h*.06}s`,opacity:r*.7,mixBlendMode:"screen",pointerEvents:"none",filter:`blur(${r*.5}px)`}};return m.jsxs("div",{style:{position:"absolute",inset:0,pointerEvents:i?"auto":"none",overflow:"hidden"},onMouseEnter:()=>i&&p(!0),onMouseLeave:()=>i&&p(!1),children:[(t==="rgb-split"||t==="glitch-mix"||t==="intense")&&f&&m.jsx("div",{style:v}),(t==="scan-lines"||t==="glitch-mix")&&f&&w,(t==="digital"||t==="glitch-mix"||t==="intense")&&f&&m.jsxs(m.Fragment,{children:[m.jsx("div",{style:b(1)}),m.jsx("div",{style:b(2)}),t==="intense"&&m.jsx("div",{style:b(3)})]}),t==="intense"&&f&&m.jsx("div",{style:{position:"absolute",inset:0,background:`repeating-linear-gradient(0deg, rgba(0,255,0,${r*.03}) 0px, rgba(0,255,0,0) 2px, rgba(0,255,0,0) 4px, rgba(0,255,0,${r*.03}) 6px)`,animation:"glitch-anim 0.8s ease-in-out infinite",pointerEvents:"none",opacity:.5}})]})};function UT(e={}){return{name:"glitch-effect",version:"1.0.0",config:e,hooks:{renderOverlay:t=>m.jsx(BT,{config:e,context:t})}}}const FT="GlitchEffectPlugin",WT="故障艺术效果：赛博朋克风格 RGB 分离 / 扫描线 / 数字失真 / 混合 / 强烈五种风格，纯 CSS 无依赖，支持持续、一次性、悬停触发。",VT="2.0.0",HT=["interaction","视觉效果与交互","visual"],GT=[{name:"style",type:'"rgb-split" | "scan-lines" | "digital" | "glitch-mix" | "intense"',default:'"glitch-mix"',description:"故障风格"},{name:"continuous",type:"boolean",default:"false",description:"是否持续动画"},{name:"duration",type:"number",default:"1000",description:"一次性触发时长（毫秒）"},{name:"intensity",type:"number",default:"0.7",description:"效果强度 0~1"},{name:"triggerOnHover",type:"boolean",default:"false",description:"是否悬停触发"},{name:"rgbOffset",type:"number",default:"3",description:"RGB 分离距离（px）"},{name:"scanLineCount",type:"number",default:"30",description:"扫描线数量"},{name:"animateScanLines",type:"boolean",default:"true",description:"扫描线是否动画"}],qT=`// 1. 持续 RGB 分离故障特效
const GlitchImage = withPlugins(LazyLoadImageCore, [
  createGlitchEffectPlugin({ style: "rgb-split", continuous: true, rgbOffset: 4 }),
]);

// 2. 在封面中使用
<GlitchImage
  src="https://picsum.photos/id/1043/400/300"
  alt="封面"
  style={{ width: 240, height: 160, borderRadius: 8 }}
/>;

// 3. 悬停触发（更省电、不干扰阅读）
createGlitchEffectPlugin({ style: "glitch-mix", triggerOnHover: true });`,QT=[{name:"glitch-mix 混合（持续）",description:"混合风格默认效果，持续播放，适合做氛围封面。",src:"https://picsum.photos/id/1043/400/300",config:{style:"glitch-mix",continuous:!0,intensity:.7}},{name:"rgb-split RGB 分离（持续）",description:"红蓝通道错位产生色散，赛博朋克典型观感。",src:"https://picsum.photos/id/1062/400/300",config:{style:"rgb-split",continuous:!0,rgbOffset:5}},{name:"scan-lines 扫描线（悬停触发）",description:"叠加扫描线纹理，悬停时启动，平时保持干净。",src:"https://picsum.photos/id/1074/400/300",config:{style:"scan-lines",triggerOnHover:!0,scanLineCount:40,animateScanLines:!0}},{name:"digital 数字失真（一次性）",description:"加载/进入时触发一次数字故障，随后恢复清晰。",src:"https://picsum.photos/id/1080/400/300",config:{style:"digital",continuous:!1,duration:900}},{name:"intense 高强度",description:"强度拉满的强烈故障，冲击力强，适合标题位。",src:"https://picsum.photos/id/1084/400/300",config:{style:"intense",continuous:!0,intensity:1}}],KT=["5 种故障风格（RGB 分离 / 扫描线 / 数字失真 / 混合 / 强烈）","三种触发模式：持续 / 一次性 / 悬停触发","效果强度 0~1 可调","扫描线数量与是否动画可配","RGB 错位距离可调","纯 CSS 实现，无运行时依赖"],YT=["赛博朋克风格站点","海报 / 专辑封面","活动营销页","游戏官网","暗色主题视觉","品牌焕新 / 限时活动"],XT=["持续动画（continuous: true）会一直占用合成层，建议对大图或大量实例谨慎使用。","阅读型内容可用 triggerOnHover: true，仅在鼠标悬停时播放，避免干扰。"],ZT={name:FT,description:WT,since:VT,tags:HT,config:GT,example:qT,examples:QT,features:KT,useCases:YT,notes:XT},Bc={"circle-to-square":()=>"@keyframes morph-circle-to-square { from { border-radius: 50%; transform: scale(0.9); } to { border-radius: 0%; transform: scale(1); } }","square-to-circle":()=>"@keyframes morph-square-to-circle { from { border-radius: 0%; transform: scale(1); } to { border-radius: 50%; transform: scale(0.9); } }","rounded-corners":e=>`@keyframes morph-rounded-corners { from { border-radius: ${e.fromBorderRadius??"50%"}; } to { border-radius: ${e.toBorderRadius??"0%"}; } }`,"scale-morph":e=>`@keyframes morph-scale { from { transform: scale(${e.fromScale??1}); } to { transform: scale(${e.toScale??1}); } }`,"rotate-morph":e=>`@keyframes morph-rotate { from { transform: rotate(${e.fromRotate??0}deg); } to { transform: rotate(${e.toRotate??0}deg); } }`,"skew-morph":e=>`@keyframes morph-skew { from { transform: skewX(${e.fromSkew??0}deg) skewY(${e.fromSkew??0}deg); } to { transform: skewX(${e.toSkew??0}deg) skewY(${e.toSkew??0}deg); } }`,elastic:()=>"@keyframes morph-elastic { 0% { transform: scale(0.8); } 30% { transform: scale(1.1); } 50% { transform: scale(0.95); } 70% { transform: scale(1.02); } 100% { transform: scale(1); } }",liquid:()=>"@keyframes morph-liquid { 0% { border-radius: 30% 70% 70% 30% / 30% 30% 70% 70%; transform: rotate(0deg); } 25% { border-radius: 58% 42% 75% 25% / 76% 46% 54% 24%; } 50% { border-radius: 50% 50% 33% 67% / 55% 27% 73% 45%; transform: rotate(180deg); } 75% { border-radius: 33% 67% 58% 42% / 63% 68% 32% 37%; } 100% { border-radius: 30% 70% 70% 30% / 30% 30% 70% 70%; transform: rotate(360deg); } }",custom:e=>e.customTransform?`@keyframes morph-custom { from { ${e.customTransform.from} } to { ${e.customTransform.to} } }`:""},JT={"circle-to-square":"morph-circle-to-square","square-to-circle":"morph-square-to-circle","rounded-corners":"morph-rounded-corners","scale-morph":"morph-scale","rotate-morph":"morph-rotate","skew-morph":"morph-skew",elastic:"morph-elastic",liquid:"morph-liquid",custom:"morph-custom"};function e8(e,t){if(typeof document>"u"||!t||document.getElementById(e))return;const n=document.createElement("style");n.id=e,n.textContent=t,document.head.appendChild(n)}function t8(e={}){const{type:t="elastic",duration:n=800,delay:o=0,easing:r="cubic-bezier(0.68, -0.55, 0.265, 1.55)",triggerOnHover:i=!1,continuous:s=!1}=e,a=(Bc[t]??Bc.elastic)(e);e8(`morph-plugin-${t}`,a);const l=JT[t]??"morph-elastic";return{name:"morph",version:"1.0.0",config:e,hooks:{onLoadSuccess:c=>{var d;const u=(d=c.imageRef)==null?void 0:d.current;if(u){if(s){u.style.animation=`${l} ${n}ms ${r} ${o}ms infinite alternate`;return}if(i){const p=()=>{u.style.animation=`${l} ${n}ms ${r} ${o}ms both`},f=()=>{u.style.animation=""};u.addEventListener("mouseenter",p),u.addEventListener("mouseleave",f);return}u.style.animation=`${l} ${n}ms ${r} ${o}ms both`}}}}}const n8="MorphPlugin",o8="形变过渡效果：圆角/缩放/旋转/倾斜/弹性/液态等多种形变动画，纯 CSS transforms，支持加载触发、悬停触发与持续动画。",r8="2.0.0",i8=["interaction","视觉效果与交互","visual"],s8=[{name:"type",type:'"circle-to-square" | "square-to-circle" | "rounded-corners" | "scale-morph" | "rotate-morph" | "skew-morph" | "elastic" | "liquid" | "custom"',default:'"elastic"',description:"形变类型"},{name:"duration",type:"number",default:"800",description:"持续时间（毫秒）"},{name:"delay",type:"number",default:"0",description:"延迟（毫秒）"},{name:"easing",type:"string",default:'"cubic-bezier(0.68, -0.55, 0.265, 1.55)"',description:"缓动函数"},{name:"triggerOnHover",type:"boolean",default:"false",description:"是否悬停触发"},{name:"continuous",type:"boolean",default:"false",description:"是否持续动画"},{name:"fromBorderRadius",type:"string",default:'"50%"',description:"rounded-corners 起始圆角"},{name:"toBorderRadius",type:"string",default:'"0%"',description:"rounded-corners 结束圆角"},{name:"fromScale",type:"number",default:"1",description:"scale-morph 起始缩放"},{name:"toScale",type:"number",default:"1",description:"scale-morph 结束缩放"},{name:"fromRotate",type:"number",default:"0",description:"rotate-morph 起始角度"},{name:"toRotate",type:"number",default:"0",description:"rotate-morph 结束角度"},{name:"fromSkew",type:"number",default:"0",description:"skew-morph 起始倾斜"},{name:"toSkew",type:"number",default:"0",description:"skew-morph 结束倾斜"}],a8=`// 1. 弹性形变
const MorphImage = withPlugins(LazyLoadImageCore, [
  createMorphPlugin({ type: "elastic", duration: 1000 }),
]);

// 2. 在头像 / 卡片中使用
<MorphImage
  src="https://picsum.photos/id/1080/400/300"
  alt="头像"
  style={{ width: 160, height: 160, borderRadius: 80 }}
/>;

// 3. 圆角过渡（加载触发）
createMorphPlugin({
  type: "rounded-corners",
  fromBorderRadius: "50%",
  toBorderRadius: "12%",
});`,l8=[{name:"elastic 弹性形变",description:"加载完成后以弹性缓动“弹”入，适合头像与卡片。",src:"https://picsum.photos/id/1080/400/300",config:{type:"elastic",duration:1e3,easing:"cubic-bezier(0.68, -0.55, 0.265, 1.55)"}},{name:"rounded-corners 圆角过渡",description:"从圆形过渡为圆角矩形，强调形态变化。",src:"https://picsum.photos/id/1084/400/300",config:{type:"rounded-corners",fromBorderRadius:"50%",toBorderRadius:"12%",duration:900}},{name:"scale-morph 缩放形变",description:"从 0.85 倍放大到原尺寸，配合淡入更自然。",src:"https://picsum.photos/id/110/400/300",config:{type:"scale-morph",fromScale:.85,toScale:1,duration:800}},{name:"rotate-morph 旋转形变",description:"带角度旋转的进入，动感十足。",src:"https://picsum.photos/id/111/400/300",config:{type:"rotate-morph",fromRotate:-12,toRotate:0,duration:900}},{name:"liquid 液态（持续）",description:"持续液态流动效果，适合做背景或装饰图。",src:"https://picsum.photos/id/119/400/300",config:{type:"liquid",continuous:!0,duration:2e3}}],c8=["9 种形变类型（圆角 / 缩放 / 旋转 / 倾斜 / 弹性 / 液态等）","三种触发：加载触发 / 悬停触发 / 持续动画","圆角、缩放、旋转、倾斜均参数化起止值","弹性缓动可定制","纯 CSS transforms，性能好","无运行时依赖"],u8=["头像形变入场","按钮 / 卡片交互反馈","Logo 动画","加载态过渡","图片墙动态呈现","装饰性背景图"],d8=["continuous: true 会持续播放；配合 triggerOnHover: true 可在鼠标悬停时播放单次，更省资源。","悬停触发的场景需在图片上移动 / 悬停鼠标才能看到形变，静态截图仅展示初始态。"],p8={name:n8,description:o8,since:r8,tags:i8,config:s8,example:a8,examples:l8,features:c8,useCases:u8,notes:d8},m8=({config:e})=>{const{style:t="zoom-in",enableFollower:n=!0,followerColor:o="rgba(59, 130, 246, 0.5)",followerSize:r=40,followerDelay:i=.1,scaleOnHover:s=!0,hoverScale:a=1.5,customIcon:l,cursorText:c,showRipple:u=!1}=e,[d,p]=x.useState(!1),[f,v]=x.useState({x:0,y:0}),[w,b]=x.useState({x:0,y:0}),[h,g]=x.useState([]),y=x.useRef(null),P=x.useRef(void 0),$=l?`url(${l}), auto`:{"zoom-in":"zoom-in","zoom-out":"zoom-out",pointer:"pointer",crosshair:"crosshair",move:"move",grab:"grab","custom-dot":"none","custom-ring":"none","custom-plus":"none",none:"none"}[t]??"auto";x.useEffect(()=>{if(!n)return;const j=()=>{b(V=>({x:V.x+(f.x-V.x)*(1-i),y:V.y+(f.y-V.y)*(1-i)})),P.current=requestAnimationFrame(j)};return P.current=requestAnimationFrame(j),()=>{P.current&&cancelAnimationFrame(P.current)}},[f,n,i]);const C=j=>{if(!y.current)return;const V=y.current.getBoundingClientRect();v({x:j.clientX-V.left,y:j.clientY-V.top})},L=j=>{if(!u||!y.current)return;const V=y.current.getBoundingClientRect(),me=Date.now();g(ee=>[...ee,{id:me,x:j.clientX-V.left,y:j.clientY-V.top}]),setTimeout(()=>g(ee=>ee.filter(_=>_.id!==me)),1e3)},k=d&&s?a:1,M={position:"absolute",inset:0,cursor:$,overflow:"hidden",zIndex:5},E={position:"absolute",left:w.x,top:w.y,width:r,height:r,transform:`translate(-50%, -50%) scale(${k})`,backgroundColor:o,borderRadius:"50%",pointerEvents:"none",transition:"transform 0.3s ease",zIndex:10},F={position:"absolute",left:w.x,top:w.y,width:r,height:r,border:"2px solid #3b82f6",borderRadius:"50%",transform:`translate(-50%, -50%) scale(${k})`,pointerEvents:"none",transition:"transform 0.2s ease",zIndex:11},H={position:"absolute",left:w.x,top:w.y,width:20,height:20,transform:"translate(-50%, -50%)",pointerEvents:"none",zIndex:11},O={position:"absolute",left:f.x+15,top:f.y-10,padding:"4px 8px",fontSize:12,color:"#fff",backgroundColor:"rgba(0,0,0,0.8)",borderRadius:4,pointerEvents:"none",whiteSpace:"nowrap",zIndex:12};return m.jsxs("div",{ref:y,style:M,onMouseMove:C,onMouseEnter:()=>p(!0),onMouseLeave:()=>p(!1),onClick:L,children:[n&&m.jsx("div",{style:E}),t==="custom-dot"&&m.jsx("div",{style:E}),t==="custom-ring"&&m.jsx("div",{style:F}),t==="custom-plus"&&m.jsx("div",{style:H,children:m.jsxs("svg",{width:"20",height:"20",viewBox:"0 0 20 20",fill:"none",children:[m.jsx("line",{x1:"10",y1:"0",x2:"10",y2:"20",stroke:"#3b82f6",strokeWidth:"2"}),m.jsx("line",{x1:"0",y1:"10",x2:"20",y2:"10",stroke:"#3b82f6",strokeWidth:"2"})]})}),c&&d&&m.jsx("div",{style:O,children:c}),h.map(j=>m.jsx("div",{style:{position:"absolute",left:j.x,top:j.y,width:0,height:0,border:"2px solid rgba(59, 130, 246, 0.8)",borderRadius:"50%",transform:"translate(-50%, -50%)",animation:"ripple-expand 1s ease-out forwards",pointerEvents:"none"}},j.id)),u&&m.jsx("style",{children:"@keyframes ripple-expand { from { width: 0; height: 0; opacity: 1; } to { width: 80px; height: 80px; opacity: 0; } }"})]})};function g8(e={}){return{name:"animated-cursor",version:"1.0.0",config:e,hooks:{renderOverlay:t=>m.jsx(m8,{config:e,context:t})}}}const f8="AnimatedCursorPlugin",h8="自定义光标动画：为图片叠加系统光标（放大镜/十字/抓手等）或自定义光标（圆点/圆环/加号）+ 跟随动画 + 点击涟漪 + 文字提示，纯 CSS+JS 无依赖。",y8="2.0.0",v8=["interaction","视觉效果与交互","visual"],w8=[{name:"style",type:'"zoom-in" | "zoom-out" | "pointer" | "crosshair" | "move" | "grab" | "custom-dot" | "custom-ring" | "custom-plus" | "none"',default:'"zoom-in"',description:"光标样式"},{name:"enableFollower",type:"boolean",default:"true",description:"是否启用跟随光标"},{name:"followerColor",type:"string",default:'"rgba(59, 130, 246, 0.5)"',description:"跟随光标颜色"},{name:"followerSize",type:"number",default:"40",description:"跟随光标大小（px）"},{name:"followerDelay",type:"number",default:"0.1",description:"跟随延迟系数（越大越跟手）"},{name:"scaleOnHover",type:"boolean",default:"true",description:"悬停时跟随光标缩放"},{name:"hoverScale",type:"number",default:"1.5",description:"悬停缩放比例"},{name:"customIcon",type:"string",default:'""',description:"自定义光标图标 URL"},{name:"cursorText",type:"string",default:'""',description:"光标附带文字"},{name:"showRipple",type:"boolean",default:"false",description:"点击时产生涟漪"}],x8=`// 1. 放大镜光标 + 蓝色跟随圆点
const CursorImage = withPlugins(LazyLoadImageCore, [
  createAnimatedCursorPlugin({ style: "zoom-in", followerColor: "rgba(59,130,246,0.5)" }),
]);

// 2. 在商品图中使用
<CursorImage
  src="https://picsum.photos/id/110/400/300"
  alt="商品"
  style={{ width: 240, height: 160, borderRadius: 8 }}
/>;

// 3. 自定义圆点 + 点击涟漪 + 文字提示
createAnimatedCursorPlugin({
  style: "custom-dot",
  showRipple: true,
  cursorText: "查看大图",
  followerSize: 48,
});`,b8=[{name:"zoom-in 放大镜 + 跟随圆点",description:"系统放大镜光标，叠加半透明蓝色跟随圆点，暗示可放大查看。",src:"https://picsum.photos/id/110/400/300",config:{style:"zoom-in",enableFollower:!0,followerColor:"rgba(59,130,246,0.5)",followerSize:40}},{name:"custom-dot 自定义圆点 + 点击涟漪",description:"自定义圆点跟随光标，点击产生涟漪动画，互动感强。",src:"https://picsum.photos/id/119/400/300",config:{style:"custom-dot",showRipple:!0,followerSize:44,followerColor:"rgba(255,99,132,0.5)"}},{name:"custom-ring 圆环 + 文字提示",description:"圆环跟随光标并附带文字提示，适合“查看大图”引导。",src:"https://picsum.photos/id/122/400/300",config:{style:"custom-ring",cursorText:"查看大图",followerSize:56,followerColor:"rgba(16,185,129,0.6)"}},{name:"crosshair 十字光标",description:"十字准星光标，适合素材 / 设计类站点定位。",src:"https://picsum.photos/id/129/400/300",config:{style:"crosshair",enableFollower:!0,followerSize:36}},{name:"custom-plus 加号光标",description:"加号光标，强调“可添加 / 收藏”等操作。",src:"https://picsum.photos/id/133/400/300",config:{style:"custom-plus",enableFollower:!0,followerSize:40,scaleOnHover:!0}}],P8=["10 种光标样式（系统光标 + 自定义圆点 / 圆环 / 加号）","跟随光标：颜色、大小、延迟系数可调","悬停时跟随光标缩放","点击涟漪动画","可附带文字提示","支持自定义图标 URL","纯 CSS + 轻量 JS，无依赖"],$8=["商品详情放大预览","画廊 / 素材站点","设计工具类页面","交互演示与引导","收藏 / 添加操作的视觉暗示","创意作品集"],S8=["效果需鼠标在图片上移动 / 悬停 / 点击才会体现，静态截图仅展示初始态。","移动端无指针设备，建议配合触摸反馈降级，或仅保留 enableFollower 等轻效果。"],C8={name:f8,description:h8,since:y8,tags:v8,config:w8,example:x8,examples:b8,features:P8,useCases:$8,notes:S8},L8=({config:e})=>{const{style:t="tilt",intensity:n=.5,maxTilt:o=20,enablePerspective:r=!0,perspective:i=1e3,enableGlare:s=!0,glareColor:a="rgba(255, 255, 255, 0.3)",glareOpacity:l=.5,enableShadow:c=!0,transitionDuration:u=300,resetOnLeave:d=!0}=e,[p,f]=x.useState({rotateX:0,rotateY:0,translateZ:0,translateY:0}),[v,w]=x.useState({x:50,y:50}),b=T.useRef(null),h=C=>{if(!b.current)return;const L=b.current.getBoundingClientRect(),k=(C.clientX-L.left)/L.width-.5,M=(C.clientY-L.top)/L.height-.5;let E={rotateX:0,rotateY:0,translateZ:0,translateY:0};switch(t){case"tilt":E={rotateX:-M*o*n,rotateY:k*o*n,translateZ:0,translateY:0};break;case"parallax":E={rotateX:-M*o*n*.5,rotateY:k*o*n*.5,translateZ:Math.abs(k+M)*10*n,translateY:0};break;case"float":E={rotateX:0,rotateY:0,translateZ:-M*50*n,translateY:-M*40*n};break;case"rotate-3d":E={rotateX:-M*o*n*1.5,rotateY:k*o*n*1.5,translateZ:15*n,translateY:0};break}f(E),w({x:(C.clientX-L.left)/L.width*100,y:(C.clientY-L.top)/L.height*100})},g=()=>{d&&f({rotateX:0,rotateY:0,translateZ:0,translateY:0}),w({x:50,y:50})},y={position:"absolute",inset:0,transformStyle:"preserve-3d",perspective:r?`${i}px`:void 0,transition:`transform ${u}ms ease-out`,zIndex:1},P={position:"absolute",inset:0,transform:`translateY(${p.translateY}px) rotateX(${p.rotateX}deg) rotateY(${p.rotateY}deg) translateZ(${p.translateZ}px)`,transformStyle:"preserve-3d",transition:d?`transform ${u}ms ease-out`:"none",boxShadow:c?`${p.rotateY*.5}px ${p.rotateX*.5+p.translateY*.3}px ${20+Math.abs(p.translateZ)*.5}px rgba(0,0,0,0.3)`:"none"},$={position:"absolute",inset:0,background:`radial-gradient(circle at ${v.x}% ${v.y}%, ${a} 0%, transparent 50%)`,opacity:l,pointerEvents:"none",mixBlendMode:"overlay",transition:d?`opacity ${u}ms ease-out`:"none"};return m.jsx("div",{ref:b,style:y,onMouseMove:h,onMouseLeave:g,children:m.jsx("div",{style:P,children:s&&m.jsx("div",{style:$})})})};function k8(e={}){return{name:"depth-map",version:"1.0.0",config:e,hooks:{renderOverlay:t=>m.jsx(L8,{config:e,context:t})}}}const I8="DepthMapPlugin",_8="3D 视差深度效果：鼠标跟随的倾斜 / 视差 / 浮动 / 3D 旋转，带光泽与阴影，纯 CSS transforms 无依赖。",E8="2.0.0",R8=["interaction","视觉效果与交互","visual"],z8=[{name:"style",type:'"tilt" | "parallax" | "float" | "rotate-3d"',default:'"tilt"',description:"深度效果样式"},{name:"intensity",type:"number",default:"0.5",description:"效果强度 0~1"},{name:"maxTilt",type:"number",default:"20",description:"最大倾斜角度"},{name:"enablePerspective",type:"boolean",default:"true",description:"启用透视效果"},{name:"perspective",type:"number",default:"1000",description:"透视距离（px）"},{name:"enableGlare",type:"boolean",default:"true",description:"启用光泽效果"},{name:"glareColor",type:"string",default:'"rgba(255, 255, 255, 0.3)"',description:"光泽颜色"},{name:"glareOpacity",type:"number",default:"0.5",description:"光泽不透明度 0~1"},{name:"enableShadow",type:"boolean",default:"true",description:"启用阴影"},{name:"transitionDuration",type:"number",default:"300",description:"过渡时长（毫秒）"},{name:"resetOnLeave",type:"boolean",default:"true",description:"离开时重置"}],D8=`// 1. 鼠标跟随倾斜
const DepthImage = withPlugins(LazyLoadImageCore, [
  createDepthMapPlugin({ style: "tilt", maxTilt: 15, enableGlare: true }),
]);

// 2. 在产品展示中使用
<DepthImage
  src="https://picsum.photos/id/122/400/300"
  alt="产品"
  style={{ width: 240, height: 160, borderRadius: 8 }}
/>;

// 3. 3D 旋转 + 阴影
createDepthMapPlugin({
  style: "rotate-3d",
  intensity: 0.7,
  enableShadow: true,
  resetOnLeave: true,
});`,O8=[{name:"tilt 倾斜（鼠标跟随）",description:"鼠标移动时图片随指针方向倾斜，带光泽高光，质感类似实体卡片。",src:"https://picsum.photos/id/122/400/300",config:{style:"tilt",maxTilt:15,intensity:.5,enableGlare:!0}},{name:"parallax 视差",description:"图片内部图层随鼠标产生位移差，营造纵深感。",src:"https://picsum.photos/id/129/400/300",config:{style:"parallax",intensity:.6,enablePerspective:!0,perspective:1e3}},{name:"rotate-3d 3D 旋转",description:"围绕多轴的 3D 旋转，配合阴影更具立体感。",src:"https://picsum.photos/id/133/400/300",config:{style:"rotate-3d",intensity:.7,enableShadow:!0,resetOnLeave:!0}},{name:"float 浮动",description:"轻微持续上下浮动的呼吸感，适合装饰性产品图。",src:"https://picsum.photos/id/142/400/300",config:{style:"float",intensity:.4,enableGlare:!1}}],j8=["4 种深度样式（倾斜 / 视差 / 浮动 / 3D 旋转）","鼠标跟随实时响应","光泽（glare）与阴影可开关并调参","透视距离可调","离开时一键重置（resetOnLeave）","纯 CSS transforms，无依赖"],M8=["产品 3D 展示","卡片悬浮交互","3D 封面 / 海报","作品集与个人主页","落地页英雄区","会员 / 旗舰商品位"],T8=["效果依赖鼠标移动产生视差，静态截图仅为初始平面态；移动设备体验有限，建议作为渐进增强。","intensity 与 maxTilt 控制幅度，强度过高在低端设备上可能引起卡顿，可按需下调。"],N8={name:I8,description:_8,since:E8,tags:R8,config:z8,example:D8,examples:O8,features:j8,useCases:M8,notes:T8};async function A8(){var e;try{const t=navigator;if(t&&typeof t.getBattery=="function")return((e=await t.getBattery())==null?void 0:e.level)??null}catch{}return null}function B8(e,t){try{const n=new URL(e,window.location.href);return n.searchParams.set("w",String(t)),n.searchParams.set("auto","format"),n.searchParams.set("fit","crop"),n.toString()}catch{return e}}function U8(e){var t;return!!((t=e.networkInfo)!=null&&t.saveData)}function F8(e={}){const{enabled:t=!0,lowBatteryThreshold:n=.2,downgradeWidth:o=640,disablePreconnect:r=!0}=e;return{name:"battery-aware",version:"1.0.0",config:e,hooks:{onLoad:async i=>{if(!t)return;const s=await A8(),a=s!==null?s<=n:!1,l=U8(i);if(a||l)return B8(i.src,o)},transformProps:i=>{if(!t)return i;const s={...i};return s.loading="lazy",r&&(s["data-disable-preconnect"]="true"),s}}}}const W8="BatteryAwarePlugin",V8="电量感知：当设备电量低于阈值或开启省流模式时，自动将图片请求宽度降级并禁用预连接，兼顾体验与续航/流量。",H8="2.0.0",G8=["other","加载策略","性能","省流量"],q8=[{name:"enabled",type:"boolean",default:"true",description:"是否启用"},{name:"lowBatteryThreshold",type:"number",default:"0.2",description:"低电量阈值(0~1)"},{name:"downgradeWidth",type:"number",default:"640",description:"降级时的请求宽度(px)"},{name:"disablePreconnect",type:"boolean",default:"true",description:"低电量时是否禁用预连接"}],Q8=`const BatteryImage = withPlugins(LazyLoadImageCore, [
  createBatteryAwarePlugin({ lowBatteryThreshold: 0.3, downgradeWidth: 480 }),
]);

<BatteryImage src="https://picsum.photos/id/1015/500/300" alt="电量感知示例" />;`,K8=[{name:"默认降级",description:"电量<20% 或省流时降宽至 640 并禁用预连接。",src:"https://picsum.photos/id/1015/500/300",config:{enabled:!0}},{name:"放宽阈值",description:"电量<30% 才降级，更保守。",src:"https://picsum.photos/id/1021/500/300",config:{lowBatteryThreshold:.3}},{name:"保留预连接",description:"disablePreconnect=false，降级时仍允许预连接。",src:"https://picsum.photos/id/1026/500/300",config:{disablePreconnect:!1}}],Y8=["低电量自动降宽","省流模式联动","可禁用预连接","可关闭"],X8=["移动端续航优化","流量节省","弱网/低电场景","全球低端设备"],Z8=["依赖 navigator.getBattery() 与网络 saveData；不支持的环境（如桌面/无该 API）不降级，不影响加载。"],J8={name:W8,description:V8,since:H8,tags:G8,config:q8,example:Q8,examples:K8,features:Y8,useCases:X8,notes:Z8};function eN(e={}){const{enabled:t=!0}=e;return{name:"exif-orientation",version:"1.0.0",config:e,hooks:{transformProps:n=>{if(!t)return n;const o={...n.imageStyle||{},imageOrientation:"from-image"};return{...n,imageStyle:o}}}}}const tN="ExifOrientationPlugin",nN="EXIF 方向：根据图片自带的方向信息（EXIF Orientation）自动校正显示，避免手机竖拍照片横显。",oN="2.0.0",rN=["a11y","可访问性","加载策略"],iN=[{name:"enabled",type:"boolean",default:"true",description:"是否启用方向校正"}],sN=`const OrientImage = withPlugins(LazyLoadImageCore, [
  createExifOrientationPlugin({ enabled: true }),
]);

<OrientImage src="https://picsum.photos/id/1015/500/300" alt="方向校正示例" />;`,aN=[{name:"启用方向校正（默认）",description:"imageOrientation: from-image，跟随 EXIF 方向。",src:"https://picsum.photos/id/1015/500/300",config:{enabled:!0}},{name:"关闭校正",description:"enabled=false 时不注入方向样式。",src:"https://picsum.photos/id/1021/500/300",config:{enabled:!1}}],lN=["按 EXIF Orientation 自动校正","imageOrientation: from-image","无需手动旋转","可关闭"],cN=["手机/相机照片","用户上传图","竖拍横显修复"],uN=["依赖浏览器对 image-orientation: from-image 的支持，现代浏览器均已支持。"],dN={name:tN,description:nN,since:oN,tags:rN,config:iN,example:sN,examples:aN,features:lN,useCases:cN,notes:uN};function Gp(e,t){return()=>{const[n,o]=T.useState(0);return T.useEffect(()=>{const r=()=>{try{const s=document.querySelectorAll(`link[id^="${e}"]`).length;o(s)}catch{}};r();const i=setInterval(r,400);return()=>clearInterval(i)},[]),m.jsxs("div",{style:{position:"absolute",top:8,left:8,background:"#1565c0",color:"#fff",fontSize:12,padding:"4px 8px",borderRadius:6,zIndex:6,pointerEvents:"none"},children:[t,"：",n]})}}function pN(e,t="image",n="anonymous"){const o=`lli-hoverprefetch-${t}-${e}`;try{if(typeof document>"u"||document.getElementById(o))return null;const r=document.createElement("link");return r.id=o,r.setAttribute("rel","preload"),r.setAttribute("as",t||"image"),r.setAttribute("href",e),n&&r.setAttribute("crossorigin",n),document.head.appendChild(r),o}catch{return null}}function mN(e){var t;try{if(typeof document>"u")return;(t=document.getElementById(e))==null||t.remove()}catch{}}function gN(e){const t=e.match(/(\d+)(?=[^\d]*$)/);if(!t)return;const n=t[0],o=parseInt(n,10);if(Number.isNaN(o))return;const r=e.replace(n,String(o+1));return r!==e?r:void 0}const fN=Gp("lli-hoverprefetch-","已预取");function hN(e={}){const{getNextSrc:t,target:n="container",trigger:o="mouseenter",as:r="image",max:i=2,dedupe:s=!0,crossOrigin:a="anonymous",showBadge:l=!1,debug:c=!1}=e,u=new Set,d=new Set,p=30,f=100;async function v(w){try{let b=t?await Promise.resolve(t(w)):void 0;if(b||(b=gN(w.src)),!b)return;(Array.isArray(b)?b:[b]).slice(0,Math.max(1,i)).forEach(h=>{if(s&&d.has(h))return;const g=pN(h,r,a);if(g&&u.add(g),d.add(h),c)try{console.debug("[HoverPrefetch] preload",{href:h,as:r})}catch{}})}catch(b){if(c)try{console.debug("[HoverPrefetch] error",b)}catch{}}}return{name:"hover-prefetch",version:"2.1.0",description:"悬停预取下一张图片；image 目标延迟绑定，preload link 在卸载时移除（P2-3）",config:e,hooks:{onMount:w=>{var C;const b=()=>v(w);let h=null,g=null,y=0;const P=()=>{var E,F;const L=(E=w.containerRef)==null?void 0:E.current,k=(F=w.imageRef)==null?void 0:F.current,M=n==="container"?L:k;return M?(M.addEventListener(o,b,{passive:!0}),h=()=>{try{M.removeEventListener(o,b)}catch{}},!0):!1},$=()=>{P()||n==="image"&&y<p&&(y+=1,g=setTimeout($,f))};$(),(C=w.sharedData)==null||C.set("hover-prefetch:cleanup",()=>{g&&clearTimeout(g),h&&h()})},onUnmount:w=>{var h,g;const b=(h=w.sharedData)==null?void 0:h.get("hover-prefetch:cleanup");if(typeof b=="function")try{b()}catch{}(g=w.sharedData)==null||g.delete("hover-prefetch:cleanup"),u.forEach(y=>mN(y)),u.clear(),d.clear()},renderOverlay:()=>l?T.createElement(fN):null}}}const yN="HoverPrefetchPlugin",vN="悬停预取：当用户将鼠标悬停（或触摸）在图片上时，提前向浏览器插入 preload 链接拉取下一张资源，实现零延迟切换。",wN="2.0.0",xN=["viewport","视口与交互","预取","性能"],bN=[{name:"getNextSrc",type:"(context) => string | string[] | Promise<...>",default:"undefined",description:"计算需要预取的下一张图片（函数型，参见用法示例）"},{name:"target",type:'"container" | "image"',default:'"container"',description:"绑定事件的目标（容器或图片元素）"},{name:"trigger",type:'"mouseenter" | "touchstart"',default:'"mouseenter"',description:"触发事件类型"},{name:"as",type:'"image" | "fetch"',default:'"image"',description:"预取资源类型"},{name:"max",type:"number",default:"2",description:"预取的最大数量"},{name:"dedupe",type:"boolean",default:"true",description:"去重，避免重复插入相同的预取链接"},{name:"crossOrigin",type:'"anonymous" | "use-credentials" | null',default:'"anonymous"',description:"跨域策略"},{name:"showBadge",type:"boolean",default:"false",description:"是否在卡片上显示「已预取 N」徽标（便于观察注入效果）"},{name:"debug",type:"boolean",default:"false",description:"是否输出调试日志"}],PN=`const PrefetchImage = withPlugins(LazyLoadImageCore, [
  createHoverPrefetchPlugin({
    target: "container",
    trigger: "mouseenter",
    as: "image",
    max: 1,
    dedupe: true,
    getNextSrc: (ctx) => ctx.src, // 预取同一张，实际场景可返回下一张 URL
  }),
]);

// 在组件中使用
<PrefetchImage src="https://picsum.photos/id/1015/500/300" alt="悬停预取示例" />;`,$N=[{name:"容器悬停预取（默认）",description:"鼠标进入容器即插入 preload，预取下一张图片（默认按 URL 末尾数字派生），卡片左上角显示「已预取 N」。",src:"https://picsum.photos/id/1015/500/300",config:{target:"container",trigger:"mouseenter",max:2,as:"image",showBadge:!0}},{name:"图片悬停预取",description:"事件直接绑定在图片元素上。",src:"https://picsum.photos/id/1021/500/300",config:{target:"image",trigger:"mouseenter",max:1}},{name:"触摸预取",description:"移动端用 touchstart 触发预取。",src:"https://picsum.photos/id/1026/500/300",config:{target:"container",trigger:"touchstart",max:1}}],SN=["悬停 / 触摸即预取","容器或图片元素两种绑定目标","mouseenter / touchstart 两种触发","预取数量上限与去重","自定义跨域策略","调试日志输出"],CN=["商品画廊下一张预览","图片轮播预加载","列表项快速切换","移动端触摸预载"],LN=["必须提供 `getNextSrc` 才会真正预取；不传时只绑定事件、不产生请求。","`showBadge: true` 会在卡片上显示「已预取 N」，是验收该插件最直接的方式。"],kN={name:yN,description:vN,since:wN,tags:xN,config:bN,example:PN,examples:$N,features:SN,useCases:CN,notes:LN};function IN(e,t){try{const n=new URL(e,window.location.href),o=n.host,r=n.searchParams;return/images\.unsplash\.com$/i.test(o)||/img\d+\.360buyimg\.com$/i.test(o)?(r.set("w",String(t)),r.set("auto","format"),r.set("fit","crop"),n.search=r.toString(),n.toString()):((!n.search||n.search==="")&&(n.search=`?w=${t}&auto=format&fit=crop`),n.toString())}catch{return e}}function _N(e={}){const{enabled:t=!0,deviceMemoryThreshold:n=4,preferOnMobile:o=!0,lowWidth:r=640,abortOnLeave:i=!0}=e,s=a=>{var d,p,f;const l=Number(((d=typeof navigator<"u"?navigator:void 0)==null?void 0:d.deviceMemory)||8),c=((p=a.deviceInfo)==null?void 0:p.type)==="mobile",u=!!((f=a.networkInfo)!=null&&f.saveData);return l&&l<=n||o&&c||u};return{name:"memory-pressure-abort",version:"2.0.0",config:e,hooks:{onLoad:a=>{if(t&&s(a))return IN(a.src,r)},onLeaveViewport:a=>{var c;if(!t||!i)return;const l=a.imageState;if(l&&l.isLoading)try{(c=a.reset)==null||c.call(a)}catch{}}}}}const EN="MemoryPressureAbortPlugin",RN="内存压力降级 + 离开中止（v2 真实实现）：低内存 / 移动端 / 省流时把图片重写为低清版本；离开视口且仍在加载时，调用 context.reset() 真正取消在途元素加载，回收内存。",zN="2.0.0",DN=["loading","加载策略","降质","中止","低端设备"],ON=[{name:"enabled",type:"boolean",default:"true",description:"是否启用"},{name:"deviceMemoryThreshold",type:"number",default:"4",description:"设备内存 ≤ 该阈值(GB)时启用降质"},{name:"preferOnMobile",type:"boolean",default:"true",description:"移动端或省流模式时强制启用降质"},{name:"lowWidth",type:"number",default:"640",description:"重写到的低清晰度宽度参数"},{name:"abortOnLeave",type:"boolean",default:"true",description:"离开视口且仍在加载时，是否中止在途加载（context.reset）"}],jN=`import { LazyLoadImageCore, createMemoryPressureAbortPlugin, withPlugins } from "vane-lazy-image";

const LazyImage = withPlugins(LazyLoadImageCore, [
  // 命中压力条件时降质；用户滑走仍在加载的图会被中止
  createMemoryPressureAbortPlugin({ lowWidth: 480 }),
]);

<LazyImage src="https://picsum.photos/seed/mem/1200/800" alt="内存压力降级示例" />`,MN=[{name:"默认降级 + 离开中止",description:"低内存/移动端/省流命中即低清；离开视口且在加载中的图会被 context.reset 取消。",src:"https://picsum.photos/seed/mem/1200/800",config:{}},{name:"激进降质",description:"更低宽度 + 移动端强制降质。",src:"https://picsum.photos/seed/mem-aggressive/1200/800",config:{lowWidth:320,deviceMemoryThreshold:8,preferOnMobile:!0}},{name:"仅降质不中止",description:"abortOnLeave=false，只做低清重写，不在离开时取消加载。",src:"https://picsum.photos/seed/mem-noabort/1200/800",config:{abortOnLeave:!1}}],TN=["三条件任一即触发低清重写（onLoad 返回改写 URL）","unsplash / 360buy 优化 w 参数；通用源附加 ?w&auto=format&fit=crop","离开视口且在加载 → context.reset() 真正取消元素在途加载","abortOnLeave 可开关"],NN=["低端设备防 OOM（降质）","快速滑动列表回收在途请求（中止）","弱网 / 省流节省流量"],AN=["中止通过 context.reset() 移除 <img> 元素来取消其下载，是图片元素层面的真实中止；若使用 FetchLoaderPlugin，可在 fetch 层进一步中断。","降质判定依赖 navigator.deviceMemory 与 deviceInfo.type。"],BN={name:EN,description:RN,since:zN,tags:DN,config:ON,example:jN,examples:MN,features:TN,useCases:NN,notes:AN};function UN(e,t,n="anonymous"){if(!(typeof document>"u"))try{const o=`lli-preload-${t}-${e}`;if(document.getElementById(o))return;const r=document.createElement("link");r.id=o,r.rel="preload",r.setAttribute("as",t),r.href=e,n&&r.setAttribute("crossorigin",n),document.head.appendChild(r)}catch{}}function FN(e,t,n){const o=[],r=e.match(/(\d+)(?=[^\d]*$)/)||e.match(/(\d+)(?=[^\d]*[)\s]?$)/);if(!r)return o;const i=r[0];let s=parseInt(i,10);if(Number.isNaN(s))return o;const a=i.length;for(let l=1;l<=n&&(s=t==="increment"?s+l:s-l,!(s<0));l++){const c=e.replace(i,String(s).padStart(a,"0"));c!==e&&o.push(c)}return o}function WN(e={}){const{model:t="heuristic",strategy:n="increment",predict:o,maxPreload:r=3,as:i="image",crossOrigin:s="anonymous"}=e;return{name:"predictive-loading",version:"2.0.0",config:e,hooks:{onMount:a=>{try{(o?Promise.resolve(o(a)):Promise.resolve(FN(a.src,n,r))).then(l=>{(Array.isArray(l)?l.slice(0,r):[]).forEach(c=>UN(c,i,s))}).catch(()=>{})}catch{}}}}}const VN="PredictiveLoadingPlugin",HN='预测性预加载（v2 真实实现）：未提供 predict 时，内置启发式按 URL 末尾数字段递增/递减派生「下一张」并注入 <link rel="preload"> 预取；也可传入 predict 自定义预测目标。',GN="2.0.0",qN=["loading","加载策略","预取"],QN=[{name:"model",type:'"heuristic" | "ml"',default:'"heuristic"',description:"预测模型；ml 当前同样走启发式（真正模型由 predict 提供）"},{name:"strategy",type:'"increment" | "decrement"',default:'"increment"',description:"内置启发式：派生方向（递增/递减 URL 末尾数字段）"},{name:"predict",type:"(context) => string[] | Promise<string[]>",default:"未设置（用内置启发式）",description:"自定义预测：返回需要预加载的图片链接列表，优先级高于内置启发式"},{name:"maxPreload",type:"number",default:"3",description:"单次最多预取数量"},{name:"as",type:'"image" | "fetch"',default:'"image"',description:"preload 资源类型"},{name:"crossOrigin",type:'"anonymous" | "use-credentials" | null',default:'"anonymous"',description:"跨域策略"}],KN=`const LazyImage = withPlugins(LazyLoadImageCore, [
  // 无 predict：内置启发式按 URL 末尾数字递增预取下 3 张
  createPredictiveLoadingPlugin({ model: "heuristic", strategy: "increment", maxPreload: 3 }),
]);

// 例：src=.../id/1015/ 会预取 .../id/1016/、1017/、1018/
<LazyImage src="https://picsum.photos/id/1015/500/300" alt="预测预加载示例" />;`,YN=[{name:"内置启发式递增",description:"按 URL 末尾数字递增派生下 3 张并预取（如相册下一页）。",src:"https://picsum.photos/id/1015/500/300",config:{model:"heuristic",strategy:"increment",maxPreload:3}},{name:"内置启发式递减",description:"递减派生上一张方向预取。",src:"https://picsum.photos/id/1020/500/300",config:{strategy:"decrement",maxPreload:3}},{name:"自定义预测",description:"用业务上下文决定预加载目标，限制为 3 张。",src:"https://picsum.photos/id/1018/500/300",config:{maxPreload:3}}],XN=["内置启发式真实派生「下一张」并注入 preload（非空头）","predict 自定义预测优先级更高","strategy 递增/递减可选","maxPreload 限制数量，相同 href 不重复注入"],ZN=["相册 / 轮播：预加载下一张，切换无白屏","详情页：预加载相关推荐图"],JN=["仅注入 preload 提示，实际加载仍由浏览器调度；preload 在 Network 面板可见（见 HoverPrefetch 同类展示）。","URL 中无数字段时启发式无候选，可改用 predict 显式给出。"],eA={name:VN,description:HN,since:GN,tags:qN,config:QN,example:KN,examples:YN,features:XN,useCases:ZN,notes:JN};function tA(e={}){const{priority:t="medium"}=e;return{name:"priority-loading",version:"1.0.0",config:e,hooks:{transformProps:n=>{switch(t){case"high":return{...n,loading:"eager",rootMargin:"0px"};case"low":return{...n,loading:"lazy",rootMargin:n.rootMargin??"400px"};case"medium":default:return{...n,loading:"lazy",rootMargin:n.rootMargin??"200px"}}}}}}const nA="PriorityLoadingPlugin",oA="优先级加载：按 high/medium/low 切换 eager/lazy 与 rootMargin。",rA="2.0.0",iA=["loading","加载策略"],sA=[{name:"priority",type:'"high" | "medium" | "low"',default:'"medium"',description:"加载优先级：high→loading=eager / low→lazy+大 rootMargin / medium→lazy"}],aA=`// LCP / 首屏主图：立即加载
const HeroImage = withPlugins(LazyLoadImageCore, [
  createPriorityLoadingPlugin({ priority: "high" }),
]);

// 折叠区/长列表底部图：延后加载
const BelowImage = withPlugins(LazyLoadImageCore, [
  createPriorityLoadingPlugin({ priority: "low" }),
]);`,lA=[{name:"首屏 LCP 图（high）",description:"关键图立即 eager 加载，缩短最大内容绘制时间。",config:{priority:"high"}},{name:"折叠区图（low）",description:"非首屏图延后加载，rootMargin 更大，滚动临近才加载。",config:{priority:"low"}}],cA=["high → loading=eager、rootMargin=0，立即加载","low → loading=lazy、rootMargin 更大，更晚加载","medium → 默认 lazy + 适中 rootMargin（约 200px）"],uA=["把 LCP / 首屏主图设为 high","把长列表底部、折叠内容图设为 low，错峰加载"],dA=["仅调整 loading 与 rootMargin，不会阻塞其它插件生效。","与 ScrollIdle、ConcurrencyControl 叠加时可协同控制加载节奏。","rootMargin 会被合并进核心的 IntersectionObserver 参数。"],pA={name:nA,description:oA,since:rA,tags:iA,config:sA,example:aA,examples:lA,features:cA,useCases:uA,notes:dA};function Uc(e,t){try{const n=Math.max(1,Math.min(100,Math.round(t)));e.searchParams.set("q",String(n))}catch{}}function mA(){const e=typeof navigator<"u"?navigator:void 0;return(e==null?void 0:e.connection)||(e==null?void 0:e.mozConnection)||(e==null?void 0:e.webkitConnection)}function Fc(e){const t=ti();if(e.overrideSaveData??(t==null?void 0:t.saveData))return e.saveDataQuality??35;const n=e.overrideEffectiveType??(t==null?void 0:t.effectiveType)??"4g";return n==="slow-2g"||n==="2g"?e.lowQ??40:n==="3g"?e.lowQ??55:e.highQ??80}function gA(e={}){return{name:"adaptive-quality",version:"1.0.0",config:e,hooks:{transformProps:t=>{const n={...t};try{const o=new URL(n.src,typeof window<"u"?window.location.origin:"http://localhost"),r=Fc(e);Uc(o,r),n.src=o.toString()}catch{}return n},onMount:t=>{var i,s,a,l;const{mode:n="once"}=e;if(n!=="realtime")return;const o=mA();if(!o)return;const r=c=>{var u;try{const d=(u=t.imageRef)==null?void 0:u.current,p=(d==null?void 0:d.src)||t.src,f=new URL(p,typeof window<"u"?window.location.origin:"http://localhost"),v=Fc(e);Uc(f,v),d?d.src=f.toString():t.src=f.toString()}catch{}};try{if(typeof o.addEventListener=="function")o.addEventListener("change",r),(i=t.sharedData)==null||i.set("aqp-handler",r),(s=t.sharedData)==null||s.set("aqp-conn",o);else if("onchange"in o){const c=o.onchange;o.onchange=u=>{try{typeof c=="function"&&c.call(o,u)}catch{}r(u)},(a=t.sharedData)==null||a.set("aqp-conn",o),(l=t.sharedData)==null||l.set("aqp-onchange-patched",!0)}}catch{}return()=>{var c,u,d;try{const p=(c=t.sharedData)==null?void 0:c.get("aqp-conn"),f=(u=t.sharedData)==null?void 0:u.get("aqp-handler");if(p&&f&&typeof p.removeEventListener=="function")p.removeEventListener("change",f);else if(p&&((d=t.sharedData)!=null&&d.get("aqp-onchange-patched")))try{p.onchange=null}catch{}}catch{}}}}}}const fA="AdaptiveQualityPlugin",hA="自适应画质：根据网络类型（effectiveType）与省流模式（saveData）动态调整图片质量参数，弱网/省流自动降质，支持 realtime 实时监听。",yA="2.0.0",vA=["other","网络","性能","省流量"],wA=[{name:"lowQ",type:"number",default:"40(2g/3g)",description:"低速网络质量值(1~100)"},{name:"highQ",type:"number",default:"80(4g)",description:"高速网络质量值(1~100)"},{name:"saveDataQuality",type:"number",default:"35",description:"省流模式质量值(1~100)"},{name:"overrideEffectiveType",type:'"4g" | "3g" | "2g" | "slow-2g"',default:"undefined",description:"Demo/测试覆盖网络类型"},{name:"overrideSaveData",type:"boolean",default:"undefined",description:"Demo/测试覆盖省流开关"},{name:"mode",type:'"once" | "realtime"',default:'"once"',description:"once 仅初始一次 / realtime 监听变化"}],xA=`const AqImage = withPlugins(LazyLoadImageCore, [
  createAdaptiveQualityPlugin({ lowQ: 45, highQ: 85, mode: "realtime" }),
]);

<AqImage src="https://picsum.photos/id/1015/500/300" alt="自适应画质示例" />;`,bA=[{name:"默认一次性调速",description:"初始按网络设置质量，加载一次。",src:"https://picsum.photos/id/1015/500/300",config:{mode:"once"}},{name:"实时监听网络",description:"mode=realtime，网络变化时自动重新计算质量。",src:"https://picsum.photos/id/1021/500/300",config:{mode:"realtime"}},{name:"模拟弱网降质",description:"overrideEffectiveType=2g，演示低速下自动降质。",src:"https://picsum.photos/id/1026/500/300",config:{overrideEffectiveType:"2g",overrideSaveData:!0}}],PA=["按网络类型调速","省流模式降质","realtime 实时监听","手动覆盖（Demo）","质量参数可配"],$A=["弱网体验优化","流量节省","全球 CDN 适配","移动端画质策略"],SA=["overrideEffectiveType / overrideSaveData 仅用于 Demo 测试覆盖真实网络信息；质量参数通过 URL ?q= 注入，适用于支持该参数的图床。"],CA={name:fA,description:hA,since:yA,tags:vA,config:wA,example:xA,examples:bA,features:PA,useCases:$A,notes:SA};function LA(e){try{return new URL(e,typeof window<"u"?window.location.origin:"http://localhost").hostname}catch{return null}}function Wc(e,t,n){try{const o=new URL(e,typeof window<"u"?window.location.origin:"http://localhost");return o.searchParams.set(t,n),o.toString()}catch{const o=e.includes("?")?"&":"?";return`${e}${o}${encodeURIComponent(t)}=${encodeURIComponent(n)}`}}function kA(e={}){const{allowedDomains:t,checkReferer:n=!1,generateToken:o,tokenParam:r="token"}=e;return{name:"anti-hotlink",version:"1.0.0",config:e,hooks:{transformProps:i=>{if(Array.isArray(t)&&t.length>0){const l=LA(i.src);if(!l||!t.includes(l))return i}if(n&&typeof document<"u"&&!document.referrer){const l=Wc(i.src,"ref","direct");return{...i,src:l}}const s=o==null?void 0:o(i.src);if(!s)return i;const a=Wc(i.src,r,s);return{...i,src:a}}}}}const IA="AntiHotlinkPlugin",_A="防盗链：为图片 URL 追加动态签名 token 或 referer 标记，配合域名白名单与 referer 校验，防止资源被第三方直链盗用。",EA="2.0.0",RA=["network","网络","防盗链","签名"],zA=[{name:"allowedDomains",type:"string[]",description:"域名白名单；仅放行列表内域，其余源原样通过"},{name:"checkReferer",type:"boolean",default:"false",description:"无 referrer 时附加 ref=direct 标记（仅浏览器环境有效）"},{name:"generateToken",type:"(src: string) => string | undefined",description:"为 URL 生成签名 token（函数型，仅顶层示例展示）"},{name:"tokenParam",type:"string",default:'"token"',description:"追加到查询参数的键名"}],DA=`import { LazyLoadImageCore, createAntiHotlinkPlugin, withPlugins } from "vane-lazy-image";

const LazyImage = withPlugins(LazyLoadImageCore, [
  createAntiHotlinkPlugin({
    generateToken: (src) => signSrc(src),
    tokenParam: "sig",
    allowedDomains: ["images.example.com"],
  }),
]);

<LazyImage src="https://images.example.com/photo.jpg" alt="防盗链示例" />`,OA=[{name:"白名单 + referer 校验",description:"仅放行 picsum.photos；无 referer 时附加 ref=direct 标记。",src:"https://picsum.photos/seed/hotlink/800/600",config:{allowedDomains:["picsum.photos"],checkReferer:!0}},{name:"仅域名白名单放行",description:"命中白名单则原样通过，否则不注入任何参数。",src:"https://picsum.photos/seed/hotlink-2/800/600",config:{allowedDomains:["picsum.photos"]}}],jA=["generateToken 为 URL 追加签名参数，防直链盗用","allowedDomains 白名单：仅放行指定域，其余原样通过","checkReferer：无 referrer 时附加 ref=direct 标记","通用参数追加兜底（无 URL 对象时拼接 query）"],MA=["OSS / 云存储等需签名才能访问的图片","限制仅本站 referer 可加载"],TA=["generateToken 为函数型，无法进入静态预览配置，仅顶层示例展示","allowedDomains 为空时对所有源注入 token","checkReferer 仅在浏览器环境有效"],NA={name:IA,description:_A,since:EA,tags:RA,config:zA,example:DA,examples:OA,features:jA,useCases:MA,notes:TA};function AA(e,t,n){try{e.searchParams.get(t)||e.searchParams.set(t,n)}catch{}}function BA(e={}){return{name:"auth",version:"1.0.0",config:e,hooks:{transformProps:t=>{const n={...t};try{const o=typeof e.token=="function"?e.token():e.token;if(o){const r=new URL(n.src,typeof window<"u"?window.location.origin:"http://localhost");AA(r,e.tokenParam??"token",o),n.src=r.toString()}e.crossOrigin&&(n.crossOrigin=e.crossOrigin),e.referrerPolicy&&(n.referrerPolicy=e.referrerPolicy)}catch{}return n}}}}const UA="AuthPlugin",FA="鉴权：为私有图片 URL 追加访问凭证 token（查询参数），并可配置 crossOrigin 与 referrerPolicy，满足需登录态才能访问的图片源鉴权需求。",WA="2.0.0",VA=["network","网络","鉴权","私有资源"],HA=[{name:"token",type:"string | (() => string | undefined)",description:"访问凭证；支持函数动态获取（函数型仅顶层示例展示）"},{name:"tokenParam",type:"string",description:"追加到查询参数的键名"},{name:"crossOrigin",type:'"anonymous" | "use-credentials"',description:"img 的 crossOrigin 属性"},{name:"referrerPolicy",type:"React.HTMLAttributeReferrerPolicy",description:"img 的 referrerPolicy 属性"}],GA=`import { LazyLoadImageCore, createAuthPlugin, withPlugins } from "vane-lazy-image";

const LazyImage = withPlugins(LazyLoadImageCore, [
  createAuthPlugin({
    token: () => getAccessToken(),
    tokenParam: "token",
    crossOrigin: "anonymous",
  }),
]);

<LazyImage src="https://private.example.com/photo.jpg" alt="鉴权示例" />`,qA=[{name:"静态 token",description:"为图片 URL 追加固定访问凭证参数。",src:"https://picsum.photos/seed/auth/800/600",config:{token:"sk-demo-123",tokenParam:"token"}},{name:"跨域 + 无 referrer",description:"追加凭证的同时配置跨域与 referrer 策略。",src:"https://picsum.photos/seed/auth-2/800/600",config:{token:"sk-demo-123",crossOrigin:"anonymous",referrerPolicy:"no-referrer"}}],QA=["为图片 URL 追加 token 查询参数完成鉴权","支持 crossOrigin / referrerPolicy 跨域鉴权配置","token 支持函数动态获取（如刷新令牌）"],KA=["需登录态才能访问的私有图片 / 云存储","带鉴权的用户头像 / 相册"],YA=["token 函数型仅顶层示例展示；静态字符串可直接用于静态预览","与 AntiHotlink 区别：Auth 注入访问凭证，AntiHotlink 注入防盗链签名，二者可叠加","tokenParam 已存在则不重复追加"],XA={name:UA,description:FA,since:WA,tags:VA,config:HA,example:GA,examples:qA,features:QA,useCases:KA,notes:YA},gr="cdn-attempts",Zi="cdn-index";function ZA(e,t){try{const n=new URL(e,typeof window<"u"?window.location.origin:"http://localhost"),o=new URL(t);return n.protocol=o.protocol,n.hostname=o.hostname,n.port=o.port,n.toString()}catch{return e}}function JA(e){const t=e.cdnBases||[],n=Math.max(1,e.maxAttempts??t.length+1),o=e.cacheBust??!1;return{name:"cdn-fallback",version:"1.1.0",description:"原始地址加载失败后按顺序回退到 CDN，带尝试次数上限（P0-3）",config:e,hooks:{onLoadError:r=>{var l,c,u,d;if(!t.length)return!1;const i=Number(((l=r.sharedData)==null?void 0:l.get(gr))??0)+1;try{(c=r.sharedData)==null||c.set(gr,i)}catch{}if(i>=n)return!1;const s=(i-1)%t.length;try{(u=r.sharedData)==null||u.set(Zi,s)}catch{}const a=(d=r.imageRef)==null?void 0:d.current;if(a){const p=ZA(r.src,t[s]),f=o?`${p}${p.includes("?")?"&":"?"}cdnFallback=${i}`:p;try{a.src=f}catch{}}return!0},onSrcChange:(r,i)=>{var s,a;try{(s=r.sharedData)==null||s.set(gr,0),(a=r.sharedData)==null||a.set(Zi,0)}catch{}},onUnmount:r=>{var i,s;try{(i=r.sharedData)==null||i.set(gr,0),(s=r.sharedData)==null||s.set(Zi,0)}catch{}}}}}const eB="CDNFallbackPlugin",tB="CDN 回退：主 CDN 域名加载失败时，按序切换备用 CDN 域名（保留路径与查询参数），实现跨厂商容灾，避免单点故障导致破图。",nB="2.0.0",oB=["network","网络","CDN","容灾"],rB=[{name:"cdnBases",type:"string[]",description:'备用 CDN 基址列表，首个即主用 CDN。e.g. ["https://cdn1.example.com", "https://cdn2.example.com"]'}],iB=`import { LazyLoadImageCore, createCDNFallbackPlugin, withPlugins } from "vane-lazy-image";

const LazyImage = withPlugins(LazyLoadImageCore, [
  createCDNFallbackPlugin({
    cdnBases: ["https://cdn1.example.com", "https://cdn2.example.com"],
  }),
]);

<LazyImage src="https://cdn0.example.com/photo.jpg" alt="CDN 回退示例" />`,sB=[{name:"多 CDN 回退",description:"主用 picsum.photos 命中；真实故障场景填入备用域名可自动切换（演示用同源避免 404）。",src:"https://picsum.photos/seed/cdn/800/600",config:{cdnBases:["https://picsum.photos","https://fastly.picsum.photos"]}}],aB=["onLoad 用 cdnBases[0] 作为主用 CDN 重写 host","onLoadError 按序切换下一个 CDN 并改写 img.src 触发重试","切换时保留路径 / 查询参数，附加 cdnFallback 缓存破坏参数"],lB=["多活 CDN、跨云厂商容灾","主源站故障时无缝切到备用源"],cB=["cdnBases 为必填，首个即主用 CDN","演示用同源 CDN 避免 404；生产请填入真实备用域名，主域失败会自动切换","切换逻辑替换协议 / host / port，路径与 query 不变"],uB={name:eB,description:tB,since:nB,tags:oB,config:rB,example:iB,examples:sB,features:aB,useCases:lB,notes:cB};function dB(e,t){try{const n=new URL(e,typeof window<"u"?window.location.origin:"http://localhost");return Object.entries(t).forEach(([o,r])=>{r!=null&&n.searchParams.set(o,String(r))}),n.toString()}catch{const n=Object.keys(t).filter(i=>t[i]!==void 0&&t[i]!==null);if(n.length===0)return e;const o=e.includes("?")?"&":"?",r=n.map(i=>`${encodeURIComponent(i)}=${encodeURIComponent(String(t[i]))}`).join("&");return`${e}${o}${r}`}}function pB(e={}){const{enabled:t=!0,maxWidth:n=1920,quality:o=.85,format:r="auto",widthParam:i="w",qualityParam:s="q",formatParam:a="format"}=e;return{name:"image-optimization",version:"1.0.0",config:e,hooks:{transformProps:l=>{if(!t)return l;try{const c=typeof window<"u"?Math.max(1,window.devicePixelRatio||1):1,u=typeof window<"u"&&window.innerWidth||n,d=Math.min(Math.round(u*c),n),p=dB(l.src,{[i]:d,[s]:Math.max(0,Math.min(1,o)),[a]:r});return{...l,src:p}}catch{return l}}}}}const mB="ImageOptimizationPlugin",gB="图片优化：自动追加宽度/质量/格式查询参数。",fB="2.0.0",hB=["network","网络"],yB=[{name:"enabled",type:"boolean",default:"true",description:"是否启用 URL 改写优化"},{name:"maxWidth",type:"number",default:"1920",description:"最大宽度（像素）"},{name:"quality",type:"number",default:"0.85",description:"0..1"},{name:"format",type:'"auto" | "webp" | "jpg" | "png"',default:'"auto"',description:"目标格式；auto 交给浏览器 / CDN 协商"},{name:"widthParam",type:"string",default:'"w"',description:'例如 "w"'},{name:"qualityParam",type:"string",default:'"q"',description:'例如 "q"'},{name:"formatParam",type:"string",default:'"format"',description:'例如 "format"'}],vB=`const LazyImage = withPlugins(LazyLoadImageCore, [
  createImageOptimizationPlugin({
    maxWidth: 1200,
    quality: 0.8,
    format: "webp",
    widthParam: "w",
    qualityParam: "q",
    formatParam: "format",
  }),
]);`,wB=[{name:"自动 webp + 约束宽度",description:"自动选择最优格式（按 Accept 协商 webp），并把宽度限制在 1200。",config:{maxWidth:1200,quality:.8,format:"webp"}},{name:"固定 jpg 中质量",description:"统一输出 jpg、质量 0.7，适合对兼容性要求较高的场景。",config:{maxWidth:800,quality:.7,format:"jpg"}}],xB=["自动追加宽度 / 质量 / 格式查询参数","format=auto 按 Accept 头协商 webp","参数名可配置以适配不同 CDN / 图片网关"],bB=["任意源图统一走优化网关（imgix / 云存储样式）","响应式不同屏宽下发不同尺寸"],PB=["需图片服务支持对应参数，否则仅作为普通查询参数透传。","与 DataSaver 叠加时，省流质量会进一步覆盖此处质量。","format=auto 依赖浏览器 Accept 头，无需手动指定。"],$B={name:mB,description:gB,since:fB,tags:hB,config:yB,example:vB,examples:wB,features:xB,useCases:bB,notes:PB};function Vc(e){try{return new URL(e,typeof window<"u"?window.location.origin:"http://localhost").hostname}catch{return null}}async function SB(e,t){try{await fetch(e,{method:"POST",headers:{"Content-Type":"application/json"},body:JSON.stringify(t),keepalive:!0})}catch{}}const Ji=new Map,CB=100;function fr(e,t,n){const o=`${t}:${n.src||""}`,r=Date.now(),i=Ji.get(o)||0;if(!(r-i<CB))if(Ji.set(o,r),setTimeout(()=>{Ji.delete(o)},1e3),typeof e.report=="function")try{e.report(t,n)}catch{}else if(e.reportEndpoint)SB(e.reportEndpoint,{event:t,...n});else try{console.debug("[LLI][net]",t,n)}catch{}}function LB(e={}){return{name:"network-analytics",version:"1.0.0",config:e,hooks:{onMount:t=>{fr(e,"mount",{src:t.src,time:Date.now()})},onLoadSuccess:(t,n)=>{const o=e.trackCDN?Vc(t.src):null;fr(e,"load-success",{src:t.src,displaySrc:n,host:o,time:Date.now()})},onLoadError:(t,n)=>{const o=e.trackCDN?Vc(t.src):null,r=n instanceof Error?n.message:String(n||"unknown");return fr(e,"load-error",{src:t.src,message:r,host:o,time:Date.now()}),!1},onUnmount:t=>{fr(e,"unmount",{src:t.src,time:Date.now()})}}}}const kB="NetworkAnalyticsPlugin",IB="网络分析：上报加载耗时、成功率与 CDN 分布。",_B="2.0.0",EB=["network","网络"],RB=[{name:"reportEndpoint",type:"string",description:"上报地址（POST JSON）；留空则只在本地统计"},{name:"report",type:"(event: string, data: Record<string, any>) => void",description:"自定义上报函数（若提供则优先使用）"},{name:"trackCDN",type:"boolean",description:"是否按图片域名分组统计，便于比较不同 CDN 表现"}],zB=`const LazyImage = withPlugins(LazyLoadImageCore, [
  createNetworkAnalyticsPlugin({
    trackCDN: true,
    report: (event, data) => {
      // event: "load" | "error" | "cache-hit" ...
      // data:  { src, durationMs, host, cached }
      analytics.track(event, data);
    },
  }),
]);`,DB=[{name:"本地调试上报",description:"未配置端点时写入 console，便于本地观察耗时与命中情况。",config:{trackCDN:!0}},{name:"上报到监控端点",description:"把事件 POST 到监控服务（keepalive，不阻塞页面卸载）。",config:{reportEndpoint:"https://api.example.com/lli",trackCDN:!0}}],OB=["上报加载耗时、成功率、CDN 分布","内置事件去重 + 100ms 防抖，避免刷屏","优先使用自定义 report 函数，其次 reportEndpoint"],jB=["线上图片加载性能监控","定位慢 CDN / 高失败率域名"],MB=["不提供 reportEndpoint 也不提供 report 时，默认 console.debug 输出。","上报事件含 src / host / durationMs / cached 等字段。","report 为函数，需在“用法示例”中以代码传入；静态预览使用纯配置（无端点时仅本地打点）。"],TB={name:kB,description:IB,since:_B,tags:EB,config:RB,example:zB,examples:DB,features:OB,useCases:jB,notes:MB};function NB(e,t){try{const n=new URL(e);return n.searchParams.set("w",String(t)),n.toString()}catch{return e.includes("?")?`${e}&w=${t}`:`${e}?w=${t}`}}function AB(e={}){const{enabled:t=!0,variants:n=[{width:400},{width:800},{width:1200}],buildSrc:o=NB,sizes:r="(max-width: 800px) 100vw, 800px"}=e;return{name:"responsive",version:"1.0.0",config:e,hooks:{transformProps:i=>{if(!t||!i.src)return i;const s=n.map(a=>`${a.src??o(i.src,a.width)} ${a.width}w`);return{...i,srcSet:i.srcSet??s.join(", "),sizes:i.sizes??r}},onLoadSuccess:(i,s)=>{var u;if(!t||s.startsWith("blob:")||s.startsWith("data:"))return;const a=(u=i.imageRef)==null?void 0:u.current;if(!a)return;const l=i.src,c=n.map(d=>`${d.src??o(l,d.width)} ${d.width}w`);try{a.getAttribute("srcset")||a.setAttribute("srcset",c.join(", ")),a.getAttribute("sizes")||a.setAttribute("sizes",r)}catch{}}}}}const BB="ResponsivePlugin",UB="响应式图片：注入 srcset/sizes 多宽度资源，浏览器按视口选择最佳尺寸，兼顾清晰度与流量。",FB="2.0.0",WB=["a11y","可访问性","网络","响应式"],VB=[{name:"enabled",type:"boolean",default:"true",description:"是否启用响应式"},{name:"variants",type:"{ width: number; src?: string }[]",default:"[{400},{800},{1200}]",description:"宽度变体列表"},{name:"buildSrc",type:"(baseSrc, width) => string",default:"defaultBuildSrc（追加 ?w=）",description:"自定义链接生成（函数型，参见用法示例）"},{name:"sizes",type:"string",default:'"(max-width: 800px) 100vw, 800px"',description:"sizes 属性"}],HB=`const ResponsiveImage = withPlugins(LazyLoadImageCore, [
  createResponsivePlugin({
    variants: [{ width: 400 }, { width: 800 }, { width: 1200 }],
    sizes: "(max-width: 800px) 100vw, 800px",
    buildSrc: (base, w) => \`\${base}?w=\${w}\`,
  }),
]);

<ResponsiveImage src="https://picsum.photos/id/1015/500/300" alt="响应式示例" />;`,GB=[{name:"默认多宽度",description:"注入 400/800/1200 三档 srcset。",src:"https://picsum.photos/id/1015/500/300",config:{variants:[{width:400},{width:800},{width:1200}],sizes:"(max-width: 800px) 100vw, 800px"}},{name:"自定义尺寸档位",description:"仅 320/640 两档，适合轻量场景。",src:"https://picsum.photos/id/1021/500/300",config:{variants:[{width:320},{width:640}],sizes:"(max-width: 640px) 100vw, 640px"}},{name:"关闭响应式",description:"enabled=false 时不注入 srcset。",src:"https://picsum.photos/id/1026/500/300",config:{enabled:!1}}],qB=["srcset 多宽度","自定义 buildSrc","sizes 响应式","自动适配屏幕/Retina","可关闭"],QB=["响应式画廊","移动端流量优化","Retina 高清","CMS 图片"],KB=["buildSrc 为函数型配置，静态预览使用默认追加 ?w= 策略；自定义用法见用法示例。"],YB={name:BB,description:UB,since:FB,tags:WB,config:VB,example:HB,examples:GB,features:qB,useCases:QB,notes:KB};let es=null;function XB(){return es||(es=new Promise(e=>{try{const t=document.createElement("canvas");t.width=1,t.height=1;const n=t.toDataURL("image/webp");e(typeof n=="string"&&n.indexOf("data:image/webp")===0)}catch{e(!1)}}),es)}function ZB(e,t){if(!t||t.length===0)return!0;try{const n=new URL(e);return t.some(o=>n.hostname.includes(o))}catch{return!1}}function JB(e,t){if(!t)return e;try{const n=new URL(e),[o,r]=t.split("=");return o&&n.searchParams.set(o,r??""),n.toString()}catch{return e.includes("?")?`${e}&${t}`:`${e}?${t}`}}function eU(e,t){const n=e.lastIndexOf(".");if(n<0)return e;const o=e.substring(n+1).toLowerCase();return t.includes(o)?`${e.substring(0,n)}.webp`:e}function tU(e={}){const{enabled:t=!0,rewrite:n,replaceExtensions:o=["jpg","jpeg","png"],appendQueryParam:r,onDomains:i,testSupport:s=!0}=e;return{name:"webp",version:"1.0.0",config:e,hooks:{onLoad:async a=>{var u,d;if(!t)return;const l=a.src;if(!ZB(l,i)||s&&!await XB())return;let c;if(n)c=n(l,a);else{const p=eU(l,o);c=JB(p,r)}if(!(!c||c===l)){try{(u=a.sharedData)==null||u.set("webp:original",l),(d=a.sharedData)==null||d.set("webp:rewritten",c)}catch{}return c}},onLoadError:a=>{var d,p,f;const l=(d=a.sharedData)==null?void 0:d.get("webp:original"),c=(p=a.sharedData)==null?void 0:p.get("webp:rewritten"),u=(f=a.imageRef)==null?void 0:f.current;if(u&&l&&c&&u.src===c){try{u.src=l}catch{}return!0}return!1}}}}const nU="WebPPlugin",oU="WebP 优先：在支持 WebP 的环境中自动将图片重写为 .webp（或自定义链接），失败时回退原图，体积更小加载更快。",rU="2.0.0",iU=["other","网络","性能","WebP"],sU=[{name:"enabled",type:"boolean",default:"true",description:"是否启用"},{name:"rewrite",type:"(src, ctx) => string | undefined",default:"undefined",description:"自定义重写函数：返回 webp 链接"},{name:"replaceExtensions",type:"string[]",default:'["jpg", "jpeg", "png"]',description:"需替换为 .webp 的扩展名"},{name:"appendQueryParam",type:"string",default:"undefined",description:'追加的查询参数，如 "format=webp"'},{name:"onDomains",type:"string[]",default:"[]（不限制）",description:"限定生效域名"},{name:"testSupport",type:"boolean",default:"true",description:"运行前检测浏览器是否支持 webp"}],aU=`const WebPImage = withPlugins(LazyLoadImageCore, [
  createWebPPlugin({
    replaceExtensions: ["jpg", "jpeg", "png"],
    testSupport: true,
  }),
]);

<WebPImage src="https://example.com/photo.jpg" alt="WebP 示例" />;`,lU=[{name:"默认 WebP 优化",description:"对支持的图床自动重写（本示例用无扩展名 URL，不触发改写，仅展示配置）。",src:"https://picsum.photos/id/1015/500/300",config:{enabled:!0}},{name:"限定域名",description:"仅在指定域名生效，避免误改其它资源。",src:"https://picsum.photos/id/1021/500/300",config:{onDomains:["cdn.example.com"]}},{name:"跳过支持检测",description:"testSupport=false 直接尝试改写（需图床确实提供 webp）。",src:"https://picsum.photos/id/1026/500/300",config:{testSupport:!1}}],cU=["自动 WebP 改写","扩展名替换","查询参数追加","域名限定","支持检测","失败回退原图"],uU=["图片体积优化","现代浏览器加速","CDN WebP 支持","流量节省"],dU=["启用后若 webp 链接加载失败会自动回退到原图，不会白屏；示例中的 picsum 链接无扩展名，不会触发扩展名改写，可安全预览。"],pU={name:nU,description:oU,since:rU,tags:iU,config:sU,example:aU,examples:lU,features:cU,useCases:uU,notes:dU};function mU({context:e,cfg:t}){if(!t.showDot||t.hideWhenOut&&!e.isIntersecting)return null;const n=t.dotPosition??"bottom-right",o={position:"absolute",width:10,height:10,borderRadius:999,background:e.isIntersecting?"#28a745":"#6c757d",zIndex:10};return n.includes("top")?o.top=6:o.bottom=6,n.includes("left")?o.left=6:o.right=6,m.jsx("div",{style:o,title:e.isIntersecting?"in-view":"out-of-view"})}function gU(e={}){const{rootMargin:t,threshold:n,once:o,unobserveOnVisible:r,showDot:i,dotPosition:s,hideWhenOut:a}=e,l=o!==void 0?o:r;return{name:"viewport-aware",version:"2.0.0",config:e,hooks:{transformProps:c=>({...c,...t!==void 0?{rootMargin:t}:null,...n!==void 0?{threshold:n}:null,...l!==void 0?{unobserveOnVisible:l}:null}),renderOverlay:c=>m.jsx(mU,{context:c,cfg:{showDot:i,dotPosition:s,hideWhenOut:a}}),onEnterViewport:c=>{var u,d;try{(d=(u=c.imageRef)==null?void 0:u.current)==null||d.setAttribute("data-in-view","1")}catch{}},onLeaveViewport:c=>{var u,d;try{(d=(u=c.imageRef)==null?void 0:u.current)==null||d.setAttribute("data-in-view","0")}catch{}}}}}const fU="ViewportAwarePlugin",hU="视口感知加载：真正把 IntersectionObserver 的 rootMargin / threshold / once 下发给核心，控制图片「提前多少距离 / 多灵敏」才触发加载，并在四角显示绿/灰指示点辅助观察。",yU="2.0.0",vU=["viewport","视口与交互","懒加载"],wU=[{name:"rootMargin",type:"string",default:"未设置（沿用 Core 默认 0px）",description:'IO 边距，控制提前/延后触发。如 "200px" 表示进入视口前 200px 就开始加载（预加载），"-50px" 表示进入后再等 50px'},{name:"threshold",type:"number | number[]",default:"未设置",description:"IO 触发阈值（0~1），控制加载灵敏度"},{name:"once",type:"boolean",default:"true",description:"是否只加载一次：true=进入视口加载后停止观察（省资源）；false=持续观察"},{name:"unobserveOnVisible",type:"boolean",default:"由 once 推导",description:"显式下发，优先级高于 once"},{name:"showDot",type:"boolean",default:"false",description:"是否显示视口指示点（仅辅助观察，非核心能力）"},{name:"dotPosition",type:'"top-left" | "top-right" | "bottom-left" | "bottom-right"',default:'"bottom-right"',description:"指示点位置"},{name:"hideWhenOut",type:"boolean",default:"false",description:"离开视口时隐藏指示点"}],xU=`const ViewportImage = withPlugins(LazyLoadImageCore, [
  // 提前 200px 预加载，进入视口即就绪，滚动更顺滑
  createViewportAwarePlugin({ rootMargin: "200px", threshold: 0.01, showDot: true }),
]);

<ViewportImage src="https://picsum.photos/id/1015/500/300" alt="视口感知示例" />;`,bU=[{name:"提前预加载（rootMargin 200px）",description:"元素进入视口前 200px 就开始加载，滚到时图片已就绪，消除白屏。",src:"https://picsum.photos/id/1015/500/300",config:{rootMargin:"200px",threshold:.01,showDot:!0}},{name:"严格进入才加载（rootMargin 0px）",description:"默认行为：图片真正进入视口边缘才触发加载。",src:"https://picsum.photos/id/1024/500/300",config:{rootMargin:"0px",showDot:!0,dotPosition:"top-left"}},{name:"离开时隐藏指示点",description:"仅在进入视口显示绿点，离开后隐藏。",src:"https://picsum.photos/id/1035/500/300",config:{rootMargin:"100px",showDot:!0,dotPosition:"top-right",hideWhenOut:!0}}],PU=["rootMargin 真正下发，控制提前/延后加载距离","threshold 调节加载灵敏度","once / unobserveOnVisible 控制是否只加载一次","四角可选指示点（辅助观察真实 IO 状态）","onEnterViewport / onLeaveViewport 事件钩子"],$U=["长列表滚动预加载（rootMargin 提前量）","调试图片加载时机（配合指示点）","无限滚动 / 瀑布流场景","首屏 LCP 图片前的视口调度"],SU=["核心能力是 transformProps 把 IO 配置下发给核心，而不是装饰层；showDot 仅为观察辅助，可关闭。","once=false 仅表示持续观察，核心仍按加载状态只加载一次；如需「离开再回来重新加载」请配合 reload/reset 钩子。"],CU={name:fU,description:hU,since:yU,tags:vU,config:wU,example:xU,examples:bU,features:PU,useCases:$U,notes:SU};function LU(e={}){const{dwellMs:t=250,maxWaitMs:n=1500,onlyWhenIntersecting:o=!0,debug:r=!1}=e,i="viewport-dwell:inView";return{name:"viewport-dwell",version:"2.0.0",config:e,hooks:{onEnterViewport:s=>{var a;try{(a=s.sharedData)==null||a.set(i,!0)}catch{}if(r)try{console.debug("[ViewportDwell] enter",s.src)}catch{}},onLeaveViewport:s=>{var a;try{(a=s.sharedData)==null||a.set(i,!1)}catch{}if(r)try{console.debug("[ViewportDwell] leave",s.src)}catch{}},onBeforeLoad:async s=>{var c;const a=Date.now(),l=u=>new Promise(d=>setTimeout(d,u));if(r)try{console.debug("[ViewportDwell] gating",{src:s.src,dwellMs:t,maxWaitMs:n})}catch{}for(;;){const u=!!((c=s.sharedData)!=null&&c.get(i)),d=Date.now()-a;if(!u&&o&&d<n){if(r)try{console.debug("[ViewportDwell] aborted (left before dwell)",s.src)}catch{}return!1}if(d>=t){if(r)try{console.debug("[ViewportDwell] proceed",s.src,{elapsed:d})}catch{}return!0}await l(30)}},onUnmount:s=>{var a;try{(a=s.sharedData)==null||a.delete(i)}catch{}}}}}const kU="ViewportDwellPlugin",IU="视口驻留门控（v2 真实实现）：在真正加载前要求图片在视口内持续停留 dwellMs，快速划过（停留不足且离开）则中止加载；超过 maxWaitMs 后放行以防饥饿。",_U="2.0.0",EU=["viewport","视口与交互","驻留","省流量"],RU=[{name:"dwellMs",type:"number",default:"250",description:"需要在视口中持续停留的时间（毫秒），不足视为「划过」不加载"},{name:"maxWaitMs",type:"number",default:"1500",description:"最长等待时间（毫秒），超时仍允许加载以防饥饿"},{name:"onlyWhenIntersecting",type:"boolean",default:"true",description:"仅在进入视口时应用驻留判断；离开且未达上限则中止"},{name:"debug",type:"boolean",default:"false",description:"是否输出调试日志"}],zU=`const DwellImage = withPlugins(LazyLoadImageCore, [
  // 停留不足 250ms 的划过不加载，长留才加载
  createViewportDwellPlugin({ dwellMs: 250, maxWaitMs: 1500 }),
]);

<DwellImage src="https://picsum.photos/id/1015/500/300" alt="视口驻留示例" />;`,DU=[{name:"默认驻留（250ms）",description:"划过即中止，停留足够才加载，提升命中率。",src:"https://picsum.photos/id/1015/500/300",config:{dwellMs:250}},{name:"延长驻留时间",description:"400ms 驻留门槛，适合快速浏览场景。",src:"https://picsum.photos/id/1021/500/300",config:{dwellMs:400}},{name:"开启调试日志",description:"控制台输出驻留门控过程，便于调参。",src:"https://picsum.photos/id/1026/500/300",config:{dwellMs:250,debug:!0}}],OU=["门控钩子真正延迟/中止加载（非空头）","驻留时间不足且离开 → 中止加载","maxWaitMs 饥饿保护（超时放行）","仅在进入视口时生效","调试日志输出"],jU=["无限滚动信息流","防止快速滑动误加载","节省带宽与请求数","提升有效加载命中率"],MU=["v2 起通过引擎 onBeforeLoad 门控真实生效（旧版写在被引擎丢弃的钩子上，实际未拦截）；与 ViewportAware 的 rootMargin 搭配可进一步调优触发时机。"],TU={name:kU,description:IU,since:_U,tags:EU,config:RU,example:zU,examples:DU,features:OU,useCases:jU,notes:MU};function NU(e,t="Image"){try{const n=new URL(e,typeof window<"u"?window.location.origin:"http://localhost").pathname.replace(/\/+$/,"");return`${t} • ${n}`}catch{return t}}function AU(e={}){return{name:"alt-text",version:"1.0.0",config:e,hooks:{transformProps:t=>{const n=t.alt;if(typeof n=="string"&&n.trim().length>0)return t;const o=e.derive?e.derive(t.src):NU(t.src,e.prefix??"Image");return{...t,alt:o}}}}}const BU="AltTextPlugin",UU="替代文本：当图片未提供 alt 时，按前缀或自定义 derive 函数自动生成 alt，提升可访问性与 SEO；已有 alt 则不覆盖。",FU="2.0.0",WU=["a11y","可访问性","SEO"],VU=[{name:"derive",type:"(src: string) => string",default:"undefined",description:"自定义推导函数（函数型，参见用法示例）"},{name:"prefix",type:"string",default:'"Image"',description:'默认推导前缀（如 "Image"）'}],HU=`const AltImage = withPlugins(LazyLoadImageCore, [
  createAltTextPlugin({
    derive: (src) => \`图片 \${new URL(src).pathname}\`,
  }),
]);

// 不传 alt 时自动补全；传了 alt 则不覆盖
<AltImage src="https://picsum.photos/id/1015/500/300" alt="" />;`,GU=[{name:"默认前缀派生",description:"不传 alt，按 prefix 自动生成 alt。",src:"https://picsum.photos/id/1015/500/300",config:{prefix:"产品图"}},{name:"已有 alt 不覆盖",description:"传入 alt 时插件保留原值，不做替换。",src:"https://picsum.photos/id/1021/500/300",config:{prefix:"Image"}}],qU=["alt 缺失自动派生","自定义前缀","自定义 derive 函数","不覆盖已有 alt"],QU=["批量图片 alt 补全","SEO 优化","读屏适配","用户未填 alt 兜底"],KU=["derive 为函数型配置，静态预览仅支持 prefix；函数用法见用法示例。"],YU={name:BU,description:UU,since:FU,tags:WU,config:VU,example:HU,examples:GU,features:qU,useCases:QU,notes:KU};function XU(e={}){const{text:t="Error",position:n="top-right",bgColor:o="rgba(220, 53, 69, 0.85)",color:r="#fff",fontSize:i=12,padding:s="2px 6px",borderRadius:a=4,zIndex:l=100,persistAfterFallback:c=!0}=e;return{name:"error-badge",version:"1.0.0",config:e,hooks:{onLoadError:u=>{var d;try{(d=u.sharedData)==null||d.set("had-error",!0)}catch{}return!1},renderOverlay:u=>{var f;const d=!!((f=u.sharedData)!=null&&f.get("had-error"));if(!(u.imageState.isError||c&&d))return null;const p=typeof t=="function"?t(u):t;return m.jsx("div",{style:{position:"absolute",inset:0,pointerEvents:"none",zIndex:l},children:m.jsx("div",{style:{position:"absolute",background:o,color:r,fontSize:i,padding:s,borderRadius:a,lineHeight:1.2,fontWeight:600,...{"top-left":{top:8,left:8},"top-right":{top:8,right:8},"bottom-left":{bottom:8,left:8},"bottom-right":{bottom:8,right:8},center:{top:"50%",left:"50%",transform:"translate(-50%, -50%)"}}[n]},children:p})})}}}}const ZU="ErrorBadgePlugin",JU="错误徽标：图片加载失败（或回退成功后）在指定角落显示错误徽标，便于在大批量图片列表中快速定位失败项。",eF="2.0.0",tF=["error","错误处理","错误反馈"],nF=[{name:"text",type:"string | ((context: LazyImageContext) => string)",default:'"Error"',description:"徽标文字；支持函数按 ctx 动态生成（函数型仅顶层示例展示）"},{name:"position",type:'"top-left" | "top-right" | "bottom-left" | "bottom-right" | "center"',default:'"top-right"',description:"徽标定位角落"},{name:"bgColor",type:"string",default:'"rgba(220, 53, 69, 0.85)"',description:"背景色"},{name:"color",type:"string",default:'"#fff"',description:"文字颜色"},{name:"fontSize",type:"number",default:"12",description:"字号(px)"},{name:"padding",type:"string",default:'"2px 6px"',description:"内边距"},{name:"borderRadius",type:"number",default:"4",description:"圆角(px)"},{name:"zIndex",type:"number",default:"100",description:"层级，默认较高避免被其它覆盖层遮挡"},{name:"persistAfterFallback",type:"boolean",default:"true",description:"回退图加载成功后是否仍显示徽标"}],oF=`import { LazyLoadImageCore, createErrorBadgePlugin, withPlugins } from "vane-lazy-image";

const LazyImage = withPlugins(LazyLoadImageCore, [
  createErrorBadgePlugin({
    text: (ctx) => \`加载失败: \${ctx.src}\`,
    position: "bottom-right",
    bgColor: "rgba(220,53,69,0.9)",
  }),
]);

// 故意触发失败以观察徽标
<LazyImage src="https://invalid.example.com/x.png" alt="错误徽标示例" />`,rF=[{name:"默认错误徽标",description:"加载失败后，在右上角显示红底 Error 徽标。",src:"https://invalid.example.com/error-badge.png",config:{}},{name:"自定义文案与位置",description:"底部右侧、深色背景 + 高亮文字的失败徽标。",src:"https://invalid.example.com/error-badge-2.png",config:{text:"图片加载失败",position:"bottom-right",bgColor:"rgba(0,0,0,0.7)",color:"#ffd166"}}],iF=["加载或回退失败后，在图片角落显示错误徽标","支持 5 种定位（四角 + 居中）与背景/文字/字号/圆角定制","persistAfterFallback：回退图已显示仍保留徽标，便于排查","通过 sharedData 标记 had-error，与 FallbackImage / RetryOnError / ErrorOverlay 联动"],sF=["图片墙 / 商品列表快速识别加载失败项","大批量图片加载健康度可视化"],aF=["text 支持函数型 (ctx) => string，但函数无法进入静态预览配置，仅顶层示例展示","默认 zIndex=100，高于多数覆盖层，避免被遮挡","与 ErrorOverlay 区别：徽标是轻量角标，覆盖层是整图遮罩"],lF={name:ZU,description:JU,since:eF,tags:tF,config:nF,example:oF,examples:rF,features:iF,useCases:sF,notes:aF};function cF({context:e,cfg:t}){var u;const{imageState:n,imageRef:o,src:r}=e,i=!!((u=e.sharedData)!=null&&u.get("had-error")),s=n.isError||(t.persistAfterFallback??!0)&&i,a=x.useMemo(()=>(typeof t.message=="function"?t.message(e):t.message)??"加载失败",[t.message,e]);if(!s)return null;const l=()=>{const d=o==null?void 0:o.current;if(d)try{const p=`${r}${r.includes("?")?"&":"?"}retry=${Date.now()}`;d.src=p}catch{}},c={position:"absolute",inset:0,background:t.background??"rgba(220, 53, 69, 0.18)",color:t.color??"#b00020",zIndex:t.zIndex??10,display:"flex",alignItems:"center",justifyContent:"center",pointerEvents:"auto",gap:8,fontSize:13,fontWeight:500};return m.jsxs("div",{style:c,children:[m.jsx("span",{children:a}),t.showRetry!==!1&&m.jsxs("button",{onClick:l,style:{padding:"4px 8px",fontSize:12},children:[" ",t.retryText??"重试"," "]})]})}function uF(e={}){return{name:"error-overlay",version:"1.0.0",config:e,hooks:{renderOverlay:t=>m.jsx(cF,{context:t,cfg:e})}}}const dF="ErrorOverlayPlugin",pF="错误覆盖层：图片加载失败时显示半透明遮罩与可选『重试』按钮，引导用户手动重试，适用于商品主图等关键图。",mF="2.0.0",gF=["error","错误处理","错误反馈","重试"],fF=[{name:"message",type:"string | ((context: LazyImageContext) => string)",default:"undefined（回退『加载失败』）",description:"遮罩提示文案；支持函数按 ctx 动态生成（函数型仅顶层示例展示）"},{name:"background",type:"string",default:'"rgba(220, 53, 69, 0.18)"',description:"遮罩背景色"},{name:"color",type:"string",default:'"#b00020"',description:"文字颜色"},{name:"zIndex",type:"number",default:"10",description:"遮罩层级"},{name:"showRetry",type:"boolean",default:"true",description:"是否显示重试按钮"},{name:"retryText",type:"string",default:'"重试"',description:"重试按钮文字"},{name:"persistAfterFallback",type:"boolean",default:"true",description:"回退图加载成功后是否仍显示遮罩"}],hF=`import { LazyLoadImageCore, createErrorOverlayPlugin, withPlugins } from "vane-lazy-image";

const LazyImage = withPlugins(LazyLoadImageCore, [
  createErrorOverlayPlugin({
    message: (ctx) => \`图片加载失败：\${ctx.src}\`,
    retryText: "点我重试",
  }),
]);

// 故意触发失败以观察遮罩与重试按钮
<LazyImage src="https://invalid.example.com/x.png" alt="错误覆盖层示例" />`,yF=[{name:"默认重试遮罩",description:"失败时整图遮罩 + 重试按钮（默认文案『重试』）。",src:"https://invalid.example.com/error-overlay.png",config:{retryText:"重试"}},{name:"自定义文案与配色",description:"深色遮罩 + 白色文字 + 自定义提示文案。",src:"https://invalid.example.com/error-overlay-2.png",config:{message:"图片暂时无法加载",background:"rgba(0,0,0,0.4)",color:"#fff"}}],vF=["失败时整图半透明遮罩 + 可选重试按钮","重试通过 cache-bust 参数（?retry=时间戳）重新请求，绕过缓存","自定义文案 / 背景 / 文字色 / 层级","persistAfterFallback：回退后仍显示遮罩"],wF=["商品主图 / 头图失败后友好提示并支持手动重试","与 RetryOnError 组合：自动重试 + 手动重试双保险"],xF=["showRetry 默认开启；message 支持函数型（仅顶层示例展示）","重试逻辑直接改写 img.src，不依赖外部状态","点击重试使用 Date.now() 做缓存破坏，确保重新发起请求"],bF={name:dF,description:pF,since:mF,tags:gF,config:fF,example:hF,examples:yF,features:vF,useCases:wF,notes:xF},ts=new Map,PF=1e3;function $F(e,t){const n=t.src||"",o=Date.now(),r=ts.get(n)||0;if(!(o-r<PF)){ts.set(n,o);try{if(e.report&&e.report(t),e.reportEndpoint){const i=new AbortController,s=setTimeout(()=>i.abort(),5e3);fetch(e.reportEndpoint,{method:"POST",headers:{"Content-Type":"application/json"},body:JSON.stringify(t),keepalive:!0,signal:i.signal}).catch(()=>{}).finally(()=>{clearTimeout(s)})}}catch{}setTimeout(()=>{ts.delete(n)},5e3)}}function SF(e={}){return{name:"error-tracking",version:"1.0.0",config:e,hooks:{onLoadError:(t,n)=>{var s,a,l;const o="error-count",r=Number(((s=t.sharedData)==null?void 0:s.get(o))??0)+1;(a=t.sharedData)==null||a.set(o,r);const i={src:t.src,message:n instanceof Error?n.message:String(n||"unknown"),stack:n instanceof Error?n.stack:void 0,time:Date.now(),network:t.networkInfo,device:t.deviceInfo,count:r};$F(e,i);try{(l=t.sharedData)==null||l.set("had-error",!0)}catch{}return!0},renderOverlay:t=>{var r;if(!e.showBadge)return null;const n=Number(((r=t.sharedData)==null?void 0:r.get("error-count"))??0);if(n<=0)return null;const o={position:"absolute",top:6,right:6,zIndex:10,fontSize:12,color:e.badgeColor??"#fff",background:e.badgeBg??"rgba(220,53,69,0.8)",padding:"2px 6px",borderRadius:4};return m.jsxs("div",{style:o,children:[e.badgeText??"Error"," × ",n]})}}}}const CF="ErrorTrackingPlugin",LF="错误追踪：在图片加载失败时上报失败详情（地址 / 错误信息 / 网络 / 设备 / 次数）到自定义函数或上报端点，并可显示错误计数角标，用于生产环境图片错误监控。",kF="2.0.0",IF=["error","错误处理","监控","可观测"],_F=[{name:"reportEndpoint",type:"string",description:"错误上报端点（POST JSON，带 5s 超时与 keepalive）"},{name:"report",type:"(payload: any) => void",description:"自定义上报函数（与端点二选一或并存）"},{name:"showBadge",type:"boolean",default:"false",description:"是否显示错误计数角标（需显式开启）"},{name:"badgeText",type:"string",default:'"Error"',description:"角标前缀文字"},{name:"badgeColor",type:"string",default:'"#fff"',description:"角标文字色"},{name:"badgeBg",type:"string",default:'"rgba(220,53,69,0.8)"',description:"角标背景色"}],EF=`import { LazyLoadImageCore, createErrorTrackingPlugin, withPlugins } from "vane-lazy-image";

const LazyImage = withPlugins(LazyLoadImageCore, [
  createErrorTrackingPlugin({
    report: (payload) => {
      console.warn("图片加载失败", payload);
    },
    showBadge: true,
  }),
]);

// 故意触发失败以观察上报与角标
<LazyImage src="https://invalid.example.com/x.png" alt="错误追踪示例" />`,RF=[{name:"错误计数角标",description:"开启角标，失败后右上角显示累计错误次数。",src:"https://invalid.example.com/error-tracking.png",config:{showBadge:!0,badgeText:"Err"}},{name:"端点上报",description:"失败后 POST 上报到采集端点（演示端点可能 404，代码已静默忽略）。",src:"https://invalid.example.com/error-tracking-2.png",config:{reportEndpoint:"/api/img-errors",showBadge:!0}}],zF=["onLoadError 采集 src / message / network / device / 累计次数","内置 1 秒防抖，避免高频重复上报","report 自定义函数 或 reportEndpoint 端点二选一 / 并存","可选角标显示错误次数"],DF=["生产环境图片错误率监控与告警","定位经常性失败的图片源 / CDN"],OF=["showBadge 默认 false，需显式开启才显示角标","端点上报带 5s 超时与 keepalive，页面卸载也能送达","report 为函数型，无法进入静态预览配置，仅顶层示例展示"],jF={name:CF,description:LF,since:kF,tags:IF,config:_F,example:EF,examples:RF,features:zF,useCases:DF,notes:OF};function pn(e,...t){try{console.log(e,...t)}catch{}}function MF(e={}){const{enabled:t=!0,prefix:n="[LLI]"}=e;return{name:"event-logger",version:"1.0.0",config:e,hooks:{onBeforeLoad:o=>(t&&pn(n,"before-load",o.src),!0),onLoadSuccess:(o,r)=>{t&&pn(n,"load-success",{src:o.src,displaySrc:r})},onLoadError:(o,r)=>(t&&pn(n,"load-error",{src:o.src,error:r}),!0),onEnterViewport:o=>{t&&pn(n,"enter-viewport",o.src)},onLeaveViewport:o=>{t&&pn(n,"leave-viewport",o.src)},onProgress:(o,r)=>{t&&pn(n,"progress",r.percent)}}}}const TF="EventLoggerPlugin",NF="事件日志：在控制台记录图片加载全生命周期事件（before-load / load-success / load-error / enter-viewport / leave-viewport / progress），便于调试与监控。",AF="2.0.0",BF=["other","监控","调试"],UF=[{name:"enabled",type:"boolean",default:"true",description:"是否启用日志"},{name:"prefix",type:"string",default:'"[LLI]"',description:"日志前缀，便于过滤"}],FF=`const LogImage = withPlugins(LazyLoadImageCore, [
  createEventLoggerPlugin({ prefix: "[IMG]" }),
]);

<LogImage src="https://picsum.photos/id/1015/500/300" alt="事件日志示例" />;`,WF=[{name:"默认日志",description:"使用默认 [LLI] 前缀记录全部事件。",src:"https://picsum.photos/id/1015/500/300",config:{enabled:!0}},{name:"自定义前缀",description:"改用 [IMG] 前缀，便于在控制台分组过滤。",src:"https://picsum.photos/id/1021/500/300",config:{prefix:"[IMG]"}},{name:"关闭日志",description:"enabled=false 时不输出任何日志。",src:"https://picsum.photos/id/1026/500/300",config:{enabled:!1}}],VF=["全生命周期事件记录","可自定义前缀","可关闭","零业务侵入"],HF=["调试加载流程","加载监控埋点","性能问题排查","教学演示"],GF=["仅用于开发/调试，生产环境建议按需关闭以避免控制台噪音。"],qF={name:TF,description:NF,since:AF,tags:BF,config:UF,example:FF,examples:WF,features:VF,useCases:HF,notes:GF};function QF({context:e,cfg:t}){const n=e.performanceData||{duration:void 0};if(!t.showOverlay||!e.imageState.isLoaded)return null;const o=t.overlayPosition??"top-right",r={position:"absolute",zIndex:9,background:t.background??"rgba(0,0,0,0.45)",color:t.color??"#fff",fontSize:12,padding:"2px 6px",borderRadius:4};return o.includes("top")&&(r.top=6),o.includes("bottom")&&(r.bottom=6),o.includes("left")&&(r.left=6),o.includes("right")&&(r.right=6),m.jsxs("div",{style:r,children:["Loaded in ",Math.round(n.duration||0)," ms"]})}function KF(e={}){const t=new Set,n=100,o=new Map;return{name:"performance-monitor",version:"1.0.0",config:e,hooks:{onLoadSuccess:r=>{if(t.has(r.src))return;const i=Date.now(),s=o.get(r.src)||0;if(i-s<n)return;o.set(r.src,i),t.add(r.src);const a=r.performanceData||{duration:0},l={src:r.src,durationMs:Math.round(a.duration||0),network:r.networkInfo,device:r.deviceInfo};try{e.onReport&&e.onReport(l)}catch{}},renderOverlay:r=>m.jsx(QF,{context:r,cfg:e})}}}const YF="PerformanceMonitorPlugin",XF="性能监控：统计单张图片的加载耗时，可选在四角叠加实时展示耗时面板，并在加载完成时通过 onReport 上报。",ZF="2.0.0",JF=["other","监控","性能"],eW=[{name:"showOverlay",type:"boolean",default:"true",description:"是否在图片上叠加耗时面板"},{name:"overlayPosition",type:'"top-left" | "top-right" | "bottom-left" | "bottom-right"',default:'"top-right"',description:"面板位置（四角）"},{name:"color",type:"string",default:'"#fff"',description:"文字色"},{name:"background",type:"string",default:'"rgba(0,0,0,0.45)"',description:"面板背景"},{name:"onReport",type:"(data: { src; durationMs; network?; device? }) => void",default:"undefined",description:"加载完成上报回调"}],tW=`const PerfImage = withPlugins(LazyLoadImageCore, [
  createPerformanceMonitorPlugin({
    overlayPosition: "bottom-left",
    onReport: (data) => console.log("perf", data),
  }),
]);

<PerfImage src="https://picsum.photos/id/1015/500/300" alt="性能监控示例" />;`,nW=[{name:"默认耗时面板",description:"右上角显示 Loaded in N ms。",src:"https://picsum.photos/id/1015/500/300",config:{showOverlay:!0}},{name:"左下角面板",description:"面板移动到左下角。",src:"https://picsum.photos/id/1021/500/300",config:{overlayPosition:"bottom-left"}},{name:"自定义配色",description:"蓝色背景 + 白字，突出展示。",src:"https://picsum.photos/id/1026/500/300",config:{background:"rgba(33,118,255,0.6)",color:"#fff"}}],oW=["加载耗时统计","四角面板可选","自定义配色","onReport 上报","防抖去重"],rW=["LCP/加载耗时测量","性能优化验证","监控告警","A/B 对比"],iW=["onReport 为函数型配置，静态预览仅展示面板；函数用法见用法示例。"],sW={name:YF,description:XF,since:ZF,tags:JF,config:eW,example:tW,examples:nW,features:oW,useCases:rW,notes:iW};function aW(e={}){const{enabled:t=!0,showOverlay:n=!0,onReport:o}=e;return{name:"user-behavior",version:"1.0.0",config:e,hooks:{transformProps:r=>({...r,unobserveOnVisible:!1}),onMount:r=>{var i,s,a,l,c;if(t)try{(i=r.sharedData)==null||i.set("ub:clicks",0),(s=r.sharedData)==null||s.set("ub:dwell",0),(a=r.sharedData)==null||a.set("ub:enters",0),(l=r.sharedData)==null||l.set("ub:leaves",0),(c=r.sharedData)==null||c.set("ub:enterTs",0)}catch{}},onLoadSuccess:r=>{var a;if(!t)return;const i=(a=r.imageRef)==null?void 0:a.current;if(!i)return;i.__lliUBClicks=i.__lliUBClicks||0,i.__lliUBEnterTs=i.__lliUBEnterTs||0,i.__lliUBDwell=i.__lliUBDwell||0,i.__lliUBEnters=i.__lliUBEnters||0,i.__lliUBLeaves=i.__lliUBLeaves||0;const s=()=>{var l,c;i.__lliUBClicks+=1;try{const u=(((l=r.sharedData)==null?void 0:l.get("ub:clicks"))||0)+1;(c=r.sharedData)==null||c.set("ub:clicks",u)}catch{}};i.__lliUBClickHandler=s;try{i.addEventListener("click",s)}catch{}},onEnterViewport:r=>{var s,a,l,c;if(!t)return;const i=(s=r.imageRef)==null?void 0:s.current;i&&(i.__lliUBEnterTs=Date.now(),i.__lliUBEnters=(i.__lliUBEnters||0)+1);try{const u=(((a=r.sharedData)==null?void 0:a.get("ub:enters"))||0)+1;(l=r.sharedData)==null||l.set("ub:enters",u),(c=r.sharedData)==null||c.set("ub:enterTs",Date.now())}catch{}},onLeaveViewport:r=>{var s,a,l,c,u,d,p;if(!t)return;const i=(s=r.imageRef)==null?void 0:s.current;if(i){const f=i.__lliUBEnterTs||0;f&&(i.__lliUBDwell=(i.__lliUBDwell||0)+(Date.now()-f)),i.__lliUBEnterTs=0,i.__lliUBLeaves=(i.__lliUBLeaves||0)+1}try{const f=(((a=r.sharedData)==null?void 0:a.get("ub:leaves"))||0)+1;(l=r.sharedData)==null||l.set("ub:leaves",f);const v=((c=r.sharedData)==null?void 0:c.get("ub:enterTs"))||0;if(v){const w=(((u=r.sharedData)==null?void 0:u.get("ub:dwell"))||0)+(Date.now()-v);(d=r.sharedData)==null||d.set("ub:dwell",w),(p=r.sharedData)==null||p.set("ub:enterTs",0)}}catch{}},onUnmount:r=>{var f,v,w,b,h,g,y,P,$,C,L;if(!t)return;const i=(f=r.imageRef)==null?void 0:f.current;if(i&&i.__lliUBClickHandler)try{i.removeEventListener("click",i.__lliUBClickHandler)}catch{}const s=((v=r.sharedData)==null?void 0:v.get("ub:enterTs"))||0,a=(((w=r.sharedData)==null?void 0:w.get("ub:dwell"))||0)+(s?Date.now()-s:0),l=i?(i.__lliUBDwell||0)+(i.__lliUBEnterTs?Date.now()-i.__lliUBEnterTs:0):0,c=(i==null?void 0:i.__lliUBClicks)??(((b=r.sharedData)==null?void 0:b.get("ub:clicks"))||0),u=(i==null?void 0:i.__lliUBEnters)??(((h=r.sharedData)==null?void 0:h.get("ub:enters"))||0),d=(i==null?void 0:i.__lliUBLeaves)??(((g=r.sharedData)==null?void 0:g.get("ub:leaves"))||0),p={src:r.src,dwellMs:l||a||0,clicks:c,enters:u,leaves:d};try{o?o(p):console.log("[UserBehavior]",p)}catch{}i&&(delete i.__lliUBClickHandler,delete i.__lliUBClicks,delete i.__lliUBEnterTs,delete i.__lliUBDwell,delete i.__lliUBEnters,delete i.__lliUBLeaves);try{(y=r.sharedData)==null||y.delete("ub:clicks"),(P=r.sharedData)==null||P.delete("ub:dwell"),($=r.sharedData)==null||$.delete("ub:enters"),(C=r.sharedData)==null||C.delete("ub:leaves"),(L=r.sharedData)==null||L.delete("ub:enterTs")}catch{}},renderOverlay:r=>!t||!n?null:m.jsx(()=>{const[i,s]=T.useState({dwellMs:0,clicks:0,enters:0,leaves:0,inView:!1});return T.useEffect(()=>{let a=!0,l=0;const c=()=>{var w,b,h,g,y,P;if(!a)return;const u=(w=r.imageRef)==null?void 0:w.current,d=(u==null?void 0:u.__lliUBEnterTs)||0,p=((u==null?void 0:u.__lliUBDwell)||0)+(d?Date.now()-d:0),f=((b=r.sharedData)==null?void 0:b.get("ub:enterTs"))||0,v=(((h=r.sharedData)==null?void 0:h.get("ub:dwell"))||0)+(f?Date.now()-f:0);s({dwellMs:p||v||0,clicks:(u==null?void 0:u.__lliUBClicks)??(((g=r.sharedData)==null?void 0:g.get("ub:clicks"))||0),enters:(u==null?void 0:u.__lliUBEnters)??(((y=r.sharedData)==null?void 0:y.get("ub:enters"))||0),leaves:(u==null?void 0:u.__lliUBLeaves)??(((P=r.sharedData)==null?void 0:P.get("ub:leaves"))||0),inView:r.isIntersecting}),l=requestAnimationFrame(c)};return l=requestAnimationFrame(c),()=>{a=!1;try{cancelAnimationFrame(l)}catch{}}},[r]),m.jsxs("div",{style:{position:"absolute",top:8,right:8,background:"#1565c0",color:"#fff",fontSize:12,padding:"6px 8px",borderRadius:6,zIndex:5,boxShadow:"0 2px 8px rgba(0,0,0,0.2)",lineHeight:1.4},children:[m.jsxs("div",{style:{display:"flex",alignItems:"center",marginBottom:4},children:[(a=>m.jsx("span",{style:{display:"inline-block",width:8,height:8,borderRadius:8,background:a?"#4caf50":"#f44336",marginRight:6}}))(i.inView),m.jsx("strong",{children:"视口"})]}),m.jsxs("div",{children:["驻留：",Math.round(i.dwellMs/100)/10,"s"]}),m.jsxs("div",{children:["点击：",i.clicks]}),m.jsxs("div",{children:["进入：",i.enters,"，离开：",i.leaves]}),m.jsx("div",{style:{marginTop:4,opacity:.85},children:"提示：点击或慢慢滚动"})]})},{})}}}const lW="UserBehaviorPlugin",cW="用户行为：实时统计每张图片的视口驻留时长、点击次数、进入/离开次数，并在图片上叠加可视化面板，卸载时统一上报。",uW="2.0.0",dW=["viewport","视口与交互","数据","分析"],pW=[{name:"enabled",type:"boolean",default:"true",description:"是否启用统计与面板"},{name:"onReport",type:"(data: { src; dwellMs; clicks; enters; leaves }) => void",default:"undefined",description:"卸载时上报回调（默认打印到控制台）"},{name:"showOverlay",type:"boolean",default:"true",description:"是否在图片角落显示统计面板（生产版式建议关闭）"}],mW=`const BehaviorImage = withPlugins(LazyLoadImageCore, [
  createUserBehaviorPlugin({
    onReport: (data) => {
      // 上报到分析后端
      console.log("behavior", data);
    },
  }),
]);

// 在组件中使用
<BehaviorImage src="https://picsum.photos/id/1015/500/300" alt="用户行为示例" />;`,gW=[{name:"默认统计面板",description:"右上角实时显示驻留、点击、进入/离开数据。",src:"https://picsum.photos/id/1015/500/300",config:{enabled:!0}},{name:"关闭统计",description:"enabled=false 时不渲染面板也不统计。",src:"https://picsum.photos/id/1021/500/300",config:{enabled:!1}}],fW=["实时统计驻留时长","点击次数统计","进入 / 离开次数统计","视口状态指示（绿/红点）","卸载时统一上报","可通过 enabled 关闭"],hW=["内容热度分析","广告位效果评估","UX 研究与转化漏斗","图片曝光与互动埋点"],yW=["统计结果在卸载时通过 `onReport` 上报（默认打印控制台），示例页用面板实时展示。","`enabled: false` 可整体关闭统计与面板，不影响图片加载。","showOverlay: false 只上报数据、不渲染角标，适合直接接入真实版式。"],vW={name:lW,description:cW,since:uW,tags:dW,config:pW,example:mW,examples:gW,features:fW,useCases:hW,notes:yW},wW=Object.assign(G4,{meta:o6}),xW=Object.assign(r6,{meta:f6}),bW=Object.assign(y6,{meta:I6}),PW=Object.assign(_6,{meta:B6}),$W=Object.assign(U6,{meta:Z6}),SW=Object.assign(tj,{meta:pj}),CW=Object.assign(jO,{meta:qO}),LW=Object.assign(gj,{meta:Cj}),kW=Object.assign(kj,{meta:Nj}),IW=Object.assign(Aj,{meta:Yj}),_W=Object.assign(Zj,{meta:cM}),EW=Object.assign(uM,{meta:bM}),RW=Object.assign(IM,{meta:AM}),zW=Object.assign(FM,{meta:JM}),DW=Object.assign(eT,{meta:dT}),OW=Object.assign(gT,{meta:CT}),jW=Object.assign(kT,{meta:NT}),MW=Object.assign(UT,{meta:ZT}),TW=Object.assign(t8,{meta:p8}),NW=Object.assign(g8,{meta:C8}),AW=Object.assign(k8,{meta:N8}),BW=Object.assign(F8,{meta:J8}),UW=Object.assign(eN,{meta:dN}),FW=Object.assign(hN,{meta:kN}),WW=Object.assign(_N,{meta:BN}),VW=Object.assign(WN,{meta:eA}),HW=Object.assign(tA,{meta:pA}),GW=Object.assign(gA,{meta:CA}),qW=Object.assign(kA,{meta:NA}),QW=Object.assign(BA,{meta:XA}),KW=Object.assign(JA,{meta:uB}),YW=Object.assign(pB,{meta:$B}),XW=Object.assign(LB,{meta:TB}),ZW=Object.assign(AB,{meta:YB}),JW=Object.assign(tU,{meta:pU}),eV=Object.assign(gU,{meta:CU}),tV=Object.assign(LU,{meta:TU}),nV=Object.assign(AU,{meta:YU}),oV=Object.assign(XU,{meta:lF}),rV=Object.assign(uF,{meta:bF}),iV=Object.assign(SF,{meta:jF}),sV=Object.assign(MF,{meta:qF}),aV=Object.assign(KF,{meta:sW}),lV=Object.assign(aW,{meta:vW});function cV(e={}){const{ratio:t=4/3}=e;return{name:"aspect-ratio-spacer",version:"1.0.0",config:e,hooks:{transformProps:n=>{var r;const o=(r=n.containerStyle)==null?void 0:r.aspectRatio;return{...n,containerStyle:{...n.containerStyle||{},...o!==void 0?null:{aspectRatio:String(t)}}}},onMount:n=>{var r;const o=(r=n.containerRef)==null?void 0:r.current;if(o)try{o.style.aspectRatio||(o.style.aspectRatio=String(t))}catch{}}}}}const uV="AspectRatioSpacerPlugin",dV="宽高比占位：在容器上预留固定宽高比，图片加载前后保持布局稳定，杜绝 CLS（布局抖动）。",pV="2.0.0",mV=["a11y","可访问性","视觉"],gV=[{name:"ratio",type:"number",default:"4/3",description:"宽/高比，如 4/3、16/9，或直接传数字"}],fV=`const RatioImage = withPlugins(LazyLoadImageCore, [
  createAspectRatioSpacerPlugin({ ratio: 4 / 3 }),
]);

<RatioImage src="https://picsum.photos/id/1015/500/300" alt="宽高比占位示例" />;`,hV=[{name:"4:3 占位",description:"常见图文比例，加载前后无跳动。",src:"https://picsum.photos/id/1015/500/300",config:{ratio:1.3333}},{name:"16:9 占位",description:"视频/横幅比例。",src:"https://picsum.photos/id/1021/500/300",config:{ratio:1.7778}},{name:"正方形占位",description:"ratio=1，头像/方形卡片。",src:"https://picsum.photos/id/1026/500/300",config:{ratio:1}}],yV=["预留宽高比","基于 CSS aspect-ratio","防布局抖动（CLS）","任意比例"],vV=["瀑布流/列表占位","LCP 稳定","移动端响应式","避免滚动跳动"],wV=["ratio 在静态预览中建议传数字（如 1.3333 表示 4/3），便于配置表与查看源码展示。"],xV={name:uV,description:dV,since:pV,tags:mV,config:gV,example:fV,examples:hV,features:yV,useCases:vV,notes:wV},bV=Object.assign(cV,{meta:xV});function PV(e={}){const{startBlur:t=8,endBlur:n=0,durationMs:o=400}=e;return{name:"blur-up",version:"1.0.0",config:e,hooks:{transformProps:r=>{var p,f,v,w;const i=(((p=r.imageStyle)==null?void 0:p.filter)||"").replace(/blur\([^)]*\)/,"").trim(),s=i?`${i} blur(${t}px)`:`blur(${t}px)`,a=(f=r.imageStyle)==null?void 0:f.transition,l=`${a&&/opacity\s*\d*ms/.test(a)?a:"opacity 180ms ease"}, filter ${o}ms ease`,c=(v=r.imageStyle)==null?void 0:v.willChange,u=c?`${c}, filter`:"filter",d=(w=r.imageStyle)==null?void 0:w.opacity;return{...r,imageStyle:{...r.imageStyle||{},...d===void 0?{opacity:1}:null,filter:s,transition:l,willChange:u}}},onBeforeLoad:r=>{var s;const i=(s=r.imageRef)==null?void 0:s.current;if(!i)return!0;try{const a=(i.style.filter||"").replace(/blur\([^)]*\)/,"").trim();i.__lliPrevFilterNoBlur=a;const l=a?`${a} blur(${t}px)`:`blur(${t}px)`;i.style.filter=l;const c=i.style.transition||"";i.style.transition=c?`${c}, filter ${o}ms ease`:`filter ${o}ms ease`}catch{}return!0},onLoadSuccess:r=>{var s;const i=(s=r.imageRef)==null?void 0:s.current;if(i)try{const a=i.__lliPrevFilterNoBlur??(i.style.filter||"").replace(/blur\([^)]*\)/,"").trim(),l=n>0?a?`${a} blur(${n}px)`:`blur(${n}px)`:a;i.style.filter=l}catch{}},onUnmount:r=>{var s;const i=(s=r.imageRef)==null?void 0:s.current;if(i)try{i.__lliPrevFilterNoBlur!==void 0&&(i.style.filter=i.__lliPrevFilterNoBlur||"",delete i.__lliPrevFilterNoBlur)}catch{}}}}}const $V="BlurUpPlugin",SV="模糊放大占位：加载期为图片注入 blur 滤镜，加载成功后过渡到清晰，避免「白屏 → 清晰图」的突兀切换。",CV="2.0.0",LV=["visual","视觉"],kV=[{name:"startBlur",type:"number",default:"8",description:"起始模糊半径 px"},{name:"endBlur",type:"number",default:"0",description:"结束模糊半径 px"},{name:"durationMs",type:"number",default:"400",description:"过渡时长 ms"}],IV=`// 模糊渐显：从 8px 模糊过渡到清晰
const BlurImage = withPlugins(LazyLoadImageCore, [
  createBlurUpPlugin({
    startBlur: 8,
    endBlur: 0,
    durationMs: 450,
  }),
]);

<BlurImage src="https://picsum.photos/seed/blurup/600/400" alt="模糊渐显" />;`,_V=[{name:"柔和模糊渐显",description:"8px 起始模糊，450ms 平滑过渡到清晰。",src:"https://picsum.photos/seed/blurup-soft/600/400",config:{startBlur:8,endBlur:0,durationMs:450}},{name:"强模糊长过渡",description:"16px 大模糊，700ms 慢过渡，营造「水雾散去」感。",src:"https://picsum.photos/seed/blurup-strong/600/400",config:{startBlur:16,endBlur:0,durationMs:700}}],EV=["加载期模糊占位，避免白屏突兀","加载成功平滑过渡到清晰","起始 / 结束模糊与时长可调","常与 Skeleton / LQIP 配合"],RV=["图片画廊 / 相册","首屏大图加载","内容型站点图片过渡","与骨架屏互补的视觉占位"],zV=["与 Skeleton 叠加时建议 blur 图层级略高于骨架，过渡更自然。","durationMs 过大会让「清晰」显得迟缓，一般 300~500ms 为宜。"],DV={name:$V,description:SV,since:CV,tags:LV,config:kV,example:IV,examples:_V,features:EV,useCases:RV,notes:zV},OV=Object.assign(PV,{meta:DV}),jV="data:image/svg+xml;utf8,"+encodeURIComponent("<svg xmlns='http://www.w3.org/2000/svg' width='400' height='300'><rect width='100%' height='100%' fill='#eceff1'/><g fill='none' stroke='#90a4ae' stroke-width='6'><path d='M60 170 L140 170 L175 110 L235 210 L275 160 L340 160'/><circle cx='200' cy='225' r='8' fill='#90a4ae' stroke='none'/></g><text x='200' y='265' font-family='sans-serif' font-size='22' fill='#607d8b' text-anchor='middle'>离线占位</text></svg>");function MV(e={}){const{offlineSrc:t=jV,cacheName:n="vane-lazy-image-offline",warm:o=!0,showBadge:r=!0}=e,i=s=>s.networkInfo?s.networkInfo.online:typeof navigator<"u"?navigator.onLine:!0;return{name:"offline",version:"2.0.0",config:e,hooks:{onLoad:async s=>{if(i(s)){if(o&&typeof caches<"u")try{const a=await caches.open(n);if(!await a.match(s.src)){const l=await fetch(s.src);l&&l.ok&&await a.put(s.src,l.clone())}}catch{}return}if(typeof caches<"u")try{const a=await(await caches.open(n)).match(s.src);if(a){const l=await a.blob();return URL.createObjectURL(l)}}catch{}return t},renderOverlay:s=>!r||i(s)?null:m.jsx("div",{style:{position:"absolute",top:8,left:8,background:"#c62828",color:"#fff",fontSize:12,padding:"4px 8px",borderRadius:6,zIndex:6},children:"离线模式"})}}}const TV="OfflinePlugin",NV="离线降级（v2 真实实现）：在线时把资源预热进 Cache Storage；离线时优先从缓存取同域资源，否则回退 offlineSrc / 内置 SVG 占位图，并在离线时显示状态徽标。不再是纯提示层。",AV="2.0.0",BV=["loading","加载策略","离线","省流"],UV=[{name:"offlineSrc",type:"string",default:"内置 SVG 离线占位图（data URI）",description:"离线且无缓存时回退的占位图，建议用 data URI 避免再次走网络"},{name:"cacheName",type:"string",default:"vane-lazy-image-offline",description:"Cache Storage 名称，用于预热与离线回退"},{name:"warm",type:"boolean",default:"true",description:"在线时是否把资源写入 Cache Storage 预热"},{name:"showBadge",type:"boolean",default:"true",description:"离线时是否显示「离线模式」徽标"}],FV=`import { LazyLoadImageCore, createOfflinePlugin, withPlugins } from "vane-lazy-image";

const LazyImage = withPlugins(LazyLoadImageCore, [
  // 离线时回退到内置占位图，并在离线时显示徽标
  createOfflinePlugin({}),
]);

// 同域资源在线时会自动预热，离线可直接从缓存读取
<LazyImage src="/images/photo.jpg" alt="离线降级示例" />`,WV=[{name:"默认离线降级",description:"在线正常加载并预热；断网后同域资源走缓存，跨域资源回退到内置 SVG 占位图，并出现「离线模式」徽标。",src:"https://picsum.photos/seed/offline/800/600",config:{}},{name:"自定义离线占位图",description:"指定 offlineSrc 作为断网回退图（建议 data URI）。",src:"https://picsum.photos/seed/offline2/800/600",config:{offlineSrc:"data:image/svg+xml;utf8,%3Csvg xmlns='http://www.w3.org/2000/svg' width='400' height='300'%3E%3Crect width='100%25' height='100%25' fill='%23ffe0b2'/%3E%3Ctext x='50%25' y='50%25' fill='%23e65100' text-anchor='middle' font-size='22'%3E无网络%3C/text%3E%3C/svg%3E"}},{name:"关闭徽标",description:"showBadge=false，仅做离线资源回退，不显示提示。",src:"https://picsum.photos/seed/offline3/800/600",config:{showBadge:!1}}],VV=["在线预热进 Cache Storage（真实写入）","离线从缓存读取同域资源","无缓存回退 offlineSrc / 内置 SVG 占位","在线 / 离线状态统一取自 GlobalContext（全 App 单处监听）+ 状态徽标","warm / showBadge 可开关"],HV=["弱网 / 断网时的优雅降级","离线优先 PWA 应用的图片缓存","省流用户避免无效请求"],GV=["跨域 no-cors 资源缓存后无法读取为 blob，因此跨域图片离线时会回退到 offlineSrc 占位图（预期降级）；同域资源可真正离线显示。","完整 Service Worker 级别离线由宿主应用负责，本插件提供组件级缓存/回退兜底。"],qV={name:TV,description:NV,since:AV,tags:BV,config:UV,example:FV,examples:WV,features:VV,useCases:HV,notes:GV},ns=new Set,ca=new Set;async function Hc(e,t,n){if(ns.has(e)||ca.has(e)){if(n)try{console.debug("[CachePrewarm] skipped (already in progress or cached)",e)}catch{}return}ns.add(e);try{const o=new AbortController,r=setTimeout(()=>o.abort(),1e4),i=await fetch(e,{cache:"force-cache",signal:o.signal});if(clearTimeout(r),!i.ok)return;const s=await i.blob();if(t&&ni.set(e,s,200),await Fp.set(e,s,{dbName:"LLI-Cache",storeName:"images",debug:n}),ca.add(e),n)try{console.debug("[CachePrewarm] prewarmed",{src:e,size:s.size})}catch{}}catch(o){if(n&&(o==null?void 0:o.name)!=="AbortError")try{console.warn("[CachePrewarm] failed",o)}catch{}}finally{ns.delete(e)}}const QV=({src:e})=>{const[t,n]=T.useState(!1);return T.useEffect(()=>{const o=()=>n(ca.has(e));o();const r=setInterval(o,400);return()=>clearInterval(r)},[e]),m.jsx("div",{style:{position:"absolute",top:8,left:8,background:t?"#2e7d32":"#b35c00",color:"#fff",fontSize:12,padding:"4px 8px",borderRadius:6,zIndex:6,pointerEvents:"none"},children:t?"已预热 ✓":"预热中…"})};function KV(e={}){const{enabled:t=!0,trigger:n="enter",preferMemory:o=!0,showBadge:r=!1,debug:i=!1}=e;return{name:"cache-prewarm",version:"2.0.0",config:e,hooks:{onMount:s=>{!t||n!=="mount"||ni.get(s.src)||Hc(s.src,o,i)},onEnterViewport:s=>{!t||n!=="enter"||ni.get(s.src)||Hc(s.src,o,i)},renderOverlay:s=>r?T.createElement(QV,{src:s.src}):null}}}const YV="CachePrewarmPlugin",XV="缓存预热：进入视口或挂载时把图片预热到内存/IDB 缓存。",ZV="2.0.0",JV=["cache","缓存"],e9=[{name:"enabled",type:"boolean",default:"true",description:"是否启用预热"},{name:"trigger",type:'"enter" | "mount"',default:'"enter"',description:"触发时机：进入视口或挂载"},{name:"preferMemory",type:"boolean",default:"true",description:"预热时优先写内存"},{name:"debug",type:"boolean",default:"false",description:"是否输出预热调试日志"},{name:"showBadge",type:"boolean",default:"false",description:"是否在卡片上显示预热状态徽标（便于观察）"}],t9=`const LazyImage = withPlugins(LazyLoadImageCore, [
  createCachePrewarmPlugin({
    trigger: "enter",    // 进入视口即预热
    preferMemory: true,  // 优先写入内存缓存
  }),
]);`,n9=[{name:"进入视口预热",description:"图片刚进视口就提前取回并写入缓存，滚动时无等待、点击放大秒开。",config:{trigger:"enter",preferMemory:!0,showBadge:!0}},{name:"挂载即预热",description:"组件挂载即预热，适合首屏已知必看的图（如详情页主图）。",config:{trigger:"mount",preferMemory:!1}}],o9=["进入视口 / 挂载时提前 fetch 并写入 Memory / IDB 缓存","内置重入保护（prewarming / prewarmed 集合），避免重复预热","优先写入内存（objectURL），跨会话持久交给 IDB"],r9=["商品详情页主图：进入视口即预热，查看大图零延迟","轮播首图：挂载即预热，切换时无白屏"],i9=["依赖 MemoryCachePlugin / IDBCachePlugin 提供底层存储。","预热失败或超时（10s）不影响正常加载，仅跳过预热。","与 CacheIDBPlugin 配合可实现“进入视口即落盘”。"],s9={name:YV,description:XV,since:ZV,tags:JV,config:e9,example:t9,examples:n9,features:o9,useCases:r9,notes:i9};function a9(e){const{fallbackSrc:t}=e;return{name:"fallback-image",version:"1.1.0",description:"失败后回退到占位图；每个 src 只回退一次，避免回退图自身失败导致死循环（P0-2）",config:e,hooks:{onLoadError:(n,o)=>{var s,a,l,c;try{(s=n.sharedData)==null||s.set("had-error",!0)}catch{}const r=`fallback-applied:${n.src}`;if((a=n.sharedData)!=null&&a.get(r))return!1;try{(l=n.sharedData)==null||l.set(r,!0)}catch{}const i=(c=n.imageRef)==null?void 0:c.current;if(!i)return!0;try{i.src=t}catch{}return!0}}}}const l9="FallbackImagePlugin",c9="兜底图：图片加载失败时自动切换到备用图片地址，避免出现破图空白，是最基础的失败降级手段。",u9="2.0.0",d9=["network","网络","兜底","降级"],p9=[{name:"fallbackSrc",type:"string",description:'兜底图地址，建议使用始终可访问的占位图或 data URI。e.g. "/404.jpg"'}],m9=`import { LazyLoadImageCore, createFallbackImagePlugin, withPlugins } from "vane-lazy-image";

const LazyImage = withPlugins(LazyLoadImageCore, [
  createFallbackImagePlugin({ fallbackSrc: "/404.jpg" }),
]);

<LazyImage src="https://invalid.example.com/broken.png" alt="兜底图示例" />`,g9=[{name:"基础兜底图",description:"原图失败 → 自动切换到兜底图正常显示（演示用始终可访问的占位图）。",src:"https://invalid.example.com/broken.png",config:{fallbackSrc:"https://picsum.photos/seed/fallback/400/300"}}],f9=["onLoadError 直接改写 img.src 为兜底地址","标记 had-error，供 ErrorBadge 等插件联动","兜底成功后仍可配合其它错误插件展示状态"],h9=["保证任何失败都不出现破图","与错误徽标 / 追踪组合，兜底 + 可观测"],y9=["fallbackSrc 为必填；建议使用始终可访问的占位图或 data URI，避免兜底本身再失败","兜底成功后若仍有 ErrorBadge(persistAfterFallback)，可继续显示徽标便于排查"],v9={name:l9,description:c9,since:u9,tags:d9,config:p9,example:m9,examples:g9,features:f9,useCases:h9,notes:y9},w9=Object.assign(MV,{meta:qV}),x9=Object.assign(KV,{meta:s9}),b9=Object.assign(a9,{meta:v9}),P9=e=>{const t=(e==null?void 0:e.position)??"bottom",n=(e==null?void 0:e.bg)??"rgba(0,0,0,0.62)",o=(e==null?void 0:e.color)??"#fff";return{name:"caption",hooks:{renderOverlay(r){const i=r.src,s=typeof(e==null?void 0:e.text)=="function"?e==null?void 0:e.text(i):(e==null?void 0:e.text)??"";if(!s)return null;const a={position:"absolute",left:0,right:0,[t]:0,padding:"6px 10px",background:n,color:o,fontSize:12,zIndex:2,pointerEvents:"none"};return m.jsx("div",{style:a,children:s})}}}},$9="CaptionPlugin",S9="图片说明文字覆盖层，支持样式定制。",C9="2.0.0",L9=["visual","视觉"],k9=[{name:"text",type:"string | ((src?: string) => string)",default:'""',description:"说明文字；可传函数按 src 派生"},{name:"position",type:'"top" | "bottom"',default:'"bottom"',description:"文字位置"},{name:"bg",type:"string",default:"rgba(0,0,0,0.62)",description:"背景色"},{name:"color",type:"string",default:"#fff",description:"文字颜色"}],I9=`// 底部说明文字
const CaptionImage = withPlugins(LazyLoadImageCore, [
  createCaptionPlugin({
    text: "日落海岸线",
    position: "bottom",
  }),
]);

// 按图片地址动态生成说明
createCaptionPlugin({
  text: (src) => \`Photo • \${src.split("/").pop()}\`,
  position: "bottom",
});`,_9=[{name:"底部说明",description:"半透明黑底白字，落在图片底部作图注。",src:"https://picsum.photos/seed/cap-bottom/600/400",config:{text:"日落海岸线",position:"bottom"}},{name:"顶部标题条",description:"顶部深色背景条，作标题 / 分类标签。",src:"https://picsum.photos/seed/cap-top/600/400",config:{text:"Gallery • 2026",position:"top",bg:"rgba(0,0,0,0.6)",color:"#fff"}},{name:"暖色图注",description:"自定义暖色背景与文字色，贴合活动主题。",src:"https://picsum.photos/seed/cap-warm/600/400",config:{text:"限时特惠",position:"bottom",bg:"rgba(160,48,16,0.88)",color:"#fff"}}],E9=["顶部 / 底部两种位置","背景与文字颜色可定制","文本支持静态或函数动态派生","作为覆盖层渲染，不干扰图片本身"],R9=["图库 / 相册图注","新闻 / 博客配图说明","商品图标题条","活动海报角标文字"],z9=["text 传函数时可按 src 动态生成，但场景示例画廊使用静态文本以保证实时预览。","与 OverlayInfo 的区别：Caption 聚焦单一说明文案，OverlayInfo 更通用（任意文本 + 触发时机）。"],D9={name:$9,description:S9,since:C9,tags:L9,config:k9,example:I9,examples:_9,features:E9,useCases:R9,notes:z9},O9=e=>{const t=(e==null?void 0:e.buttonText)??"Open",n=(e==null?void 0:e.enableLightbox)??!0,o=(e==null?void 0:e.overlayZIndex)??10,r=(e==null?void 0:e.buttonStyle)??{};return{name:"gallery",hooks:{renderOverlay(i){return m.jsx(()=>{const[s,a]=T.useState(!1),[l,c]=T.useState(!1),u=()=>{if(n)a(!0);else{const d=i.src??"";d&&window.open(d,"_blank")}};return T.useEffect(()=>{const d=p=>{p.key==="Escape"&&a(!1)};return window.addEventListener("keydown",d),()=>window.removeEventListener("keydown",d)},[]),m.jsxs(m.Fragment,{children:[m.jsx("div",{style:{position:"absolute",inset:0,zIndex:o,pointerEvents:"auto",background:l?"rgba(0,0,0,0.08)":"transparent",transition:"background 160ms ease"},onMouseEnter:()=>c(!0),onMouseLeave:()=>c(!1),onClick:d=>{d.stopPropagation(),u()}}),m.jsx("button",{type:"button",style:{position:"absolute",top:8,right:8,zIndex:o+1,padding:"8px 12px",borderRadius:8,border:"none",background:"rgba(0,0,0,0.65)",color:"#fff",fontSize:13,boxShadow:"0 2px 6px rgba(0,0,0,0.25)",cursor:"pointer",...r},onClick:d=>{d.stopPropagation(),u()},children:t}),n&&s?m.jsx("div",{style:{position:"fixed",inset:0,background:"rgba(0,0,0,0.85)",display:"flex",alignItems:"center",justifyContent:"center",zIndex:9999,cursor:"zoom-out"},onClick:()=>a(!1),children:m.jsx("img",{src:i.src??"",alt:i.props.alt??"",style:{maxWidth:"90%",maxHeight:"90%"}})}):null]})},{})}}}},j9="GalleryPlugin",M9="画廊灯箱：图片上叠加打开按钮，进入灯箱或新窗口查看原图。",T9="2.0.0",N9=["visual","视觉"],A9=[{name:"buttonText",type:"string",default:'"Open"',description:"打开按钮文案"},{name:"enableLightbox",type:"boolean",default:"true",description:"是否启用内置灯箱"},{name:"overlayZIndex",type:"number",default:"10",description:"灯箱层叠顺序"},{name:"buttonStyle",type:"React.CSSProperties",default:"{}",description:"按钮自定义样式（缩略图场景可缩成小号半透明胶囊）"}],B9=`// 点击按钮进入灯箱查看大图
const GalleryImage = withPlugins(LazyLoadImageCore, [
  createGalleryPlugin({
    buttonText: "查看大图",
    enableLightbox: true,
    overlayZIndex: 20,
  }),
]);

<GalleryImage src="https://picsum.photos/seed/gallery/600/400" alt="画廊" />;`,U9=[{name:"灯箱预览",description:"叠加「查看大图」按钮，点击进入全屏灯箱看原图。",src:"https://picsum.photos/seed/gallery-lb/600/400",config:{buttonText:"查看大图",enableLightbox:!0,overlayZIndex:20}},{name:"新窗口打开",description:"关闭内置灯箱，点击按钮以新窗口打开原图。",src:"https://picsum.photos/seed/gallery-win/600/400",config:{buttonText:"Open",enableLightbox:!1}}],F9=["覆盖层打开按钮","内置灯箱查看大图（默认开启）","可改为新窗口打开","灯箱层级可调"],W9=["电商商品图放大查看","相册 / 作品集灯箱","详情页看图","地图 / 截图放大"],V9=["enableLightbox:false 时按钮以新窗口打开原图，适合轻量场景。","灯箱层级 overlayZIndex 需高于页面其它浮层，避免被遮挡。"],H9={name:j9,description:M9,since:T9,tags:N9,config:A9,example:B9,examples:U9,features:F9,useCases:W9,notes:V9},G9=e=>{const t=Math.max(1,(e==null?void 0:e.scale)??1.08),n=Math.max(0,(e==null?void 0:e.durationMs)??180);return{name:"hover-zoom",hooks:{onLoadSuccess(o){var a;const r=(a=o.imageRef)==null?void 0:a.current;if(!r)return;r.style.transition=`transform ${n}ms ease`;const i=()=>{r.style.transform=`scale(${t})`},s=()=>{r.style.transform="scale(1)"};r.__lliHoverEnter=i,r.__lliHoverLeave=s,r.addEventListener("mouseenter",i),r.addEventListener("mouseleave",s)},onUnmount(o){var a;const r=(a=o.imageRef)==null?void 0:a.current;if(!r)return;const i=r.__lliHoverEnter,s=r.__lliHoverLeave;i&&r.removeEventListener("mouseenter",i),s&&r.removeEventListener("mouseleave",s),r.style.transition="",r.style.transform=""}}}},q9="HoverZoomPlugin",Q9="悬停放大：鼠标悬停时放大显示图片局部。",K9="2.0.0",Y9=["visual","视觉"],X9=[{name:"scale",type:"number",default:"1.08",description:"放大倍数"},{name:"durationMs",type:"number",default:"180",description:"过渡时长 ms"}],Z9=`// 悬停放大 1.15 倍
const ZoomImage = withPlugins(LazyLoadImageCore, [
  createHoverZoomPlugin({ scale: 1.15, durationMs: 180 }),
]);

<ZoomImage src="https://picsum.photos/seed/hoverzoom/600/400" alt="悬停放大" />;`,J9=[{name:"悬停放大 1.15",description:"鼠标悬停放大到 1.15 倍，180ms 平滑过渡。",src:"https://picsum.photos/seed/hoverzoom-115/600/400",config:{scale:1.15,durationMs:180}},{name:"轻微放大",description:"克制的 1.08 倍，仅给一点点呼吸感。",src:"https://picsum.photos/seed/hoverzoom-108/600/400",config:{scale:1.08,durationMs:200}}],e7=["悬停平滑放大","放大倍数可调","过渡时长可调","常与 Caption / BorderGlow 叠加"],t7=["商品图悬停预览细节","相册悬停聚焦","卡片悬停微交互","与灯箱配合的轻量前奏"],n7=["放大会溢出原尺寸，通常需父容器 overflow:hidden 裁切，仅放大中心区域。","与 Transition 的 fromScale 不同，HoverZoom 仅在 hover 时触发。"],o7={name:q9,description:Q9,since:K9,tags:Y9,config:X9,example:Z9,examples:J9,features:e7,useCases:t7,notes:n7},Gc="lli-skeleton-style",r7=`
@keyframes lli-skeleton-shimmer {
  0% { background-position: 200% 0; }
  100% { background-position: -200% 0; }
}
@keyframes lli-skeleton-pulse {
  0%, 100% { opacity: 0.85; }
  50% { opacity: 0.6; }
}
`;function i7(){if(!(typeof document>"u"))try{if(document.getElementById(Gc))return;const e=document.createElement("style");e.id=Gc,e.textContent=r7,document.head.appendChild(e)}catch{}}function s7({imageState:e,type:t="shimmer",backgroundColor:n="#e5e7eb",highlightColor:o="#f3f4f6",borderRadius:r=4,zIndex:i=2,showWhen:s="loading"}){if(!(s==="always"||e.isLoading))return null;i7();const a={position:"absolute",inset:0,borderRadius:r,overflow:"hidden",pointerEvents:"none",zIndex:i},l={width:"100%",height:"100%",backgroundImage:`linear-gradient(90deg, ${n} 0%, ${n} 35%, ${o} 50%, ${n} 65%, ${n} 100%)`,backgroundSize:"200% 100%",animation:"lli-skeleton-shimmer 1200ms ease-in-out infinite"};return m.jsx("div",{style:a,children:m.jsx("div",{style:t==="shimmer"?l:{width:"100%",height:"100%",background:n,animation:"lli-skeleton-pulse 1200ms ease-in-out infinite"}})})}function a7(e={}){return{name:"skeleton",version:"1.0.0",config:e,hooks:{renderOverlay:t=>m.jsx(s7,{imageState:t.imageState,type:e.type,backgroundColor:e.backgroundColor,highlightColor:e.highlightColor,borderRadius:e.borderRadius,zIndex:e.zIndex,showWhen:e.showWhen})}}}const l7="SkeletonPlugin",c7="骨架屏占位：加载期显示 shimmer/pulse 骨架动画。",u7="2.0.0",d7=["visual","视觉"],p7=[{name:"type",type:'"shimmer" | "pulse"',default:'"shimmer"',description:"动画类型"},{name:"backgroundColor",type:"string",default:"#e5e7eb",description:"底色"},{name:"highlightColor",type:"string",default:"#f3f4f6",description:"shimmer 高亮色"},{name:"borderRadius",type:"number",default:"6",description:"圆角 px"},{name:"zIndex",type:"number",default:"1",description:"层叠顺序"},{name:"showWhen",type:'"always" | "loading"',default:'"loading"',description:"何时显示"}],m7=`// 加载期 shimmer 骨架占位
const SkeletonImage = withPlugins(LazyLoadImageCore, [
  createSkeletonPlugin({
    type: "shimmer",
    borderRadius: 8,
    showWhen: "loading",
  }),
]);

<SkeletonImage src="https://picsum.photos/seed/skeleton/600/400" alt="骨架屏" />;`,g7=[{name:"Shimmer 骨架",description:"流光骨架，提示内容加载中，圆角 8。",src:"https://picsum.photos/seed/skeleton-shimmer/600/400",config:{type:"shimmer",borderRadius:8,showWhen:"loading"}},{name:"Pulse 骨架",description:"呼吸式明暗变化，更克制的占位动画。",src:"https://picsum.photos/seed/skeleton-pulse/600/400",config:{type:"pulse",backgroundColor:"#eee",highlightColor:"#f5f5f5",borderRadius:8}}],f7=["shimmer（流光）/ pulse（呼吸）两种动画","底色 / 高亮色 / 圆角可调","加载完成自动淡出","零图片请求，首屏即见"],h7=["列表 / 卡片加载占位","首屏骨架屏","与 BlurUp / LQIP 配合的兜底占位","弱网环境体验优化"],y7=['showWhen:"loading" 表示仅在加载期显示，图片就绪后自动让位。',"与 BlurUp 叠加时，建议骨架层级低于模糊图（zIndex 较小）。"],v7={name:l7,description:c7,since:u7,tags:d7,config:p7,example:m7,examples:g7,features:f7,useCases:h7,notes:y7},w7=Object.assign(P9,{meta:D9}),x7=Object.assign(O9,{meta:H9}),b7=Object.assign(G9,{meta:o7}),P7=Object.assign(a7,{meta:v7}),$7={"top-left":{top:10,left:10},"top-right":{top:10,right:10},"bottom-left":{bottom:10,left:10},"bottom-right":{bottom:10,right:10}},os=`
  @keyframes priceTagFadeIn {
    from { opacity: 0; transform: translateY(-10px); }
    to { opacity: 1; transform: translateY(0); }
  }
`;function S7({config:e,context:t}){const{price:n,currency:o="$",position:r="top-right",originalPrice:i,discount:s,showSavings:a=!1,style:l={},animate:c=!0,backgroundColor:u="#c62828",textColor:d="#fff",fetchPrice:p,loadingText:f="加载中...",errorText:v="价格获取失败"}=e,[w,b]=T.useState(null),[h,g]=T.useState(!!p),[y,P]=T.useState(!1);T.useEffect(()=>{if(!p)return;let E=!0;return(async()=>{try{g(!0),P(!1);const F=await p(t);E&&b(F)}catch(F){console.error("[PriceTagPlugin] fetchPrice failed:",F),E&&P(!0)}finally{E&&g(!1)}})(),()=>{E=!1}},[p,t]);const $=(w==null?void 0:w.price)??n,C=(w==null?void 0:w.originalPrice)??i,L=(w==null?void 0:w.discount)??s,k=a&&C!=null&&typeof $=="number"&&typeof C=="number"?C-$:null,M={position:"absolute",...$7[r],backgroundColor:u,color:d,padding:"8px 12px",borderRadius:4,fontWeight:"bold",fontSize:16,boxShadow:"0 2px 8px rgba(0,0,0,0.15)",zIndex:10,animation:c?"priceTagFadeIn 0.3s ease-out":"none",...l};return h?m.jsxs(m.Fragment,{children:[m.jsx("div",{style:M,children:m.jsx("div",{style:{fontSize:14,opacity:.8},children:f})}),c&&m.jsx("style",{children:os})]}):y?m.jsxs(m.Fragment,{children:[m.jsx("div",{style:{...M,backgroundColor:"#e74c3c"},children:m.jsx("div",{style:{fontSize:12},children:v})}),c&&m.jsx("style",{children:os})]}):$==null&&$!==0?null:m.jsxs(m.Fragment,{children:[m.jsxs("div",{style:M,children:[L&&m.jsx("div",{style:{fontSize:11,fontWeight:"normal",marginBottom:2,opacity:.9},children:L}),m.jsx("div",{style:{display:"flex",alignItems:"baseline",gap:4},children:m.jsxs("span",{style:{fontSize:20},children:[o,$]})}),C!=null&&m.jsxs("div",{style:{fontSize:12,textDecoration:"line-through",opacity:.7,marginTop:2},children:[o,C]}),k!=null&&k>0&&m.jsxs("div",{style:{fontSize:11,marginTop:4,backgroundColor:"rgba(255,255,255,0.2)",padding:"2px 6px",borderRadius:2},children:["省 ",o,k.toFixed(2)]})]}),c&&m.jsx("style",{children:os})]})}function C7(e={}){return{name:"price-tag",version:"1.0.0",config:e,hooks:{renderOverlay:t=>t.imageState.isLoaded?m.jsx(S7,{config:e,context:t}):null}}}const L7="PriceTagPlugin",k7="商品价格标签：在图片上叠加价格信息，支持原价、折扣、节省金额、异步价格获取与淡入动画。",I7="2.0.0",_7=["ecommerce","电商核心"],E7=[{name:"price",type:"number",default:"undefined",description:"当前价格"},{name:"currency",type:"string",default:'"$"',description:"货币符号"},{name:"position",type:'"top-left" | "top-right" | "bottom-left" | "bottom-right"',default:'"top-right"',description:"标签位置（四角）"},{name:"originalPrice",type:"number",default:"undefined",description:"原价（划线显示）"},{name:"discount",type:"string",default:"undefined",description:"折扣文案，如 “40% OFF”"},{name:"showSavings",type:"boolean",default:"false",description:"是否计算并显示节省金额"},{name:"backgroundColor",type:"string",default:'"#c62828"',description:"标签背景色"},{name:"textColor",type:"string",default:'"#fff"',description:"标签文字色"},{name:"animate",type:"boolean",default:"true",description:"淡入动画"},{name:"style",type:"React.CSSProperties",default:"{}",description:"自定义叠加样式"},{name:"fetchPrice",type:"(context) => Promise<{ price; originalPrice?; discount? }>",default:"undefined",description:"异步获取价格（API 集成）"},{name:"loadingText",type:"string",default:'"加载中..."',description:"异步加载文案"},{name:"errorText",type:"string",default:'"价格获取失败"',description:"异步失败文案"}],R7=`// 1. 组装带价格标签的懒加载图片组件
const PriceImage = withPlugins(LazyLoadImageCore, [
  createPriceTagPlugin({
    price: 299.99,
    currency: "¥",
    position: "bottom-left",
    originalPrice: 499.99,
    discount: "40% OFF",
    showSavings: true,
  }),
]);

// 2. 在商品卡片中使用
<PriceImage
  src="https://picsum.photos/id/180/400/300"
  alt="无线耳机"
  style={{ width: 240, height: 160, borderRadius: 8 }}
/>;

// 3. 异步价格（接入后端 API）
createPriceTagPlugin({
  currency: "¥",
  fetchPrice: async () => {
    const res = await fetch("/api/products/123/price");
    return res.json(); // { price, originalPrice?, discount? }
  },
});`,z7=[{name:"完整价格信息（带折扣和节省金额）",description:"原价划线 + 折扣标签 + 自动计算节省金额，落在左下角。",src:"https://picsum.photos/id/180/400/300",config:{price:299.99,currency:"$",position:"bottom-left",originalPrice:499.99,discount:"40% OFF",showSavings:!0}},{name:"简单价格标签",description:"仅当前价 + 货币符号，落在左上角。",src:"https://picsum.photos/id/201/400/300",config:{price:1999,currency:"¥",position:"top-left"}},{name:"自定义样式价格标签",description:"自定义背景色 / 文字色 / 圆角与内边距。",src:"https://picsum.photos/id/250/400/300",config:{price:59.99,currency:"€",position:"bottom-right",backgroundColor:"#4ECDC4",textColor:"#1A535C",style:{borderRadius:"8px",padding:"12px 16px"}}},{name:"异步获取价格（模拟 API）",description:"真实场景通过 fetchPrice 异步拉取价格；示例以静态值代替，可见“查询价格 / 价格查询失败”状态（见用法示例中的 fetchPrice）。",src:"https://picsum.photos/id/260/400/300",config:{currency:"¥",position:"top-right",showSavings:!0,price:1299.99,originalPrice:1999,discount:"限时优惠"}}],D7=["显示当前价格、原价、折扣标签","计算并显示节省金额","支持多种货币符号","4 个位置可选（四角）","淡入动画效果","完全自定义样式","支持异步价格数据获取（API 集成）","显示加载和错误状态"],O7=["电商产品列表","促销活动页面","特价商品展示","移动端商城","从 API 动态获取价格的场景","跨境电商实时汇率转换"],j7=["`fetchPrice` 返回后覆盖静态 `price`，接真实商品价格时用它，不必改组件。","配置 `originalPrice` 且高于 `price` 时展示划线价，`showSavings` 额外显示省额。"],M7={name:L7,description:k7,since:I7,tags:_7,config:E7,example:R7,examples:z7,features:D7,useCases:O7,notes:j7},qc={new:{text:"NEW",bg:"#2e7d32",color:"#fff"},hot:{text:"HOT",bg:"#c4390f",color:"#fff"},sale:{text:"SALE",bg:"#c62828",color:"#fff"},limited:{text:"LIMITED",bg:"#6a1b9a",color:"#fff"},bestseller:{text:"BEST",bg:"#b35c00",color:"#fff"},custom:{text:"NEW",bg:"#1565c0",color:"#fff"}},T7={"top-left":{top:10,left:10},"top-right":{top:10,right:10},"bottom-left":{bottom:10,left:10},"bottom-right":{bottom:10,right:10}},N7=`
  @keyframes promoBadgeFadeIn {
    from { opacity: 0; transform: scale(0.8); }
    to { opacity: 1; transform: scale(1); }
  }
  @keyframes promoBadgePulse {
    0%, 100% { transform: scale(1); box-shadow: 0 2px 6px rgba(0,0,0,0.2); }
    50% { transform: scale(1.1); box-shadow: 0 4px 12px rgba(0,0,0,0.3); }
  }
`;let A7=0;function B7({config:e,context:t}){const{type:n="hot",text:o,position:r="top-left",color:i,backgroundColor:s,animate:a=!0,pulse:l=!1,ribbon:c=!1,style:u={}}=e,d=qc[n]??qc.hot,p=n==="custom"&&o?o:d.text,f=s??d.bg,v=i??d.color,w=c?{padding:"6px 16px",transform:r.includes("left")?"rotate(-45deg) translateX(-20px)":"rotate(45deg) translateX(20px)",transformOrigin:"center",boxShadow:"0 4px 12px rgba(0,0,0,0.3)",top:c?-5:10,left:c?-5:10,right:c?-5:10,bottom:c?-5:10}:{},b={position:"absolute",...T7[r],backgroundColor:f,color:v,padding:c?"6px 16px":"4px 10px",borderRadius:c?2:4,fontWeight:"bold",fontSize:12,textTransform:"uppercase",letterSpacing:"0.5px",boxShadow:c?"0 4px 12px rgba(0,0,0,0.3)":"0 2px 6px rgba(0,0,0,0.2)",zIndex:10,animation:a?l?"promoBadgePulse 1.5s ease-in-out infinite":"promoBadgeFadeIn 0.4s ease-out":"none",...w,...u};return m.jsxs(m.Fragment,{children:[m.jsx("div",{style:b,children:p}),a&&m.jsx("style",{children:N7})]})}function U7(e={}){return{name:`promo-badge-${++A7}`,version:"1.0.0",config:e,hooks:{renderOverlay:t=>t.imageState.isLoaded?m.jsx(B7,{config:e,context:t}):null}}}const F7="PromoBadgePlugin",W7="促销角标：在商品图片上显示 NEW/HOT/SALE 等促销标签，支持脉冲动画和丝带样式，可叠加多个。",V7="2.0.0",H7=["ecommerce","电商核心"],G7=[{name:"type",type:'"new" | "hot" | "sale" | "limited" | "bestseller" | "custom"',default:'"hot"',description:"预设标签类型"},{name:"text",type:"string",default:"undefined",description:"自定义文案（type=custom 时生效）"},{name:"position",type:'"top-left" | "top-right" | "bottom-left" | "bottom-right"',default:'"top-left"',description:"角标位置（四角）"},{name:"backgroundColor",type:"string",default:"undefined",description:"背景色"},{name:"color",type:"string",default:"undefined",description:"文字色"},{name:"animate",type:"boolean",default:"true",description:"淡入动画"},{name:"pulse",type:"boolean",default:"false",description:"脉冲呼吸动画"},{name:"ribbon",type:"boolean",default:"false",description:"丝带样式（倾斜 45°）"},{name:"style",type:"React.CSSProperties",default:"{}",description:"自定义叠加样式"}],q7=`// 1. 单个促销角标
const SaleImage = withPlugins(LazyLoadImageCore, [
  createPromoBadgePlugin({ type: "sale", position: "top-right", ribbon: true }),
]);

// 2. 多个角标叠加在同一张图上
const HotSaleImage = withPlugins(LazyLoadImageCore, [
  createPromoBadgePlugin({ type: "new", position: "top-left" }),
  createPromoBadgePlugin({ type: "sale", position: "top-right", ribbon: true }),
  createPromoBadgePlugin({ type: "hot", position: "bottom-right", pulse: true }),
]);

// 3. 在组件中使用
<HotSaleImage src="https://picsum.photos/id/220/500/400" alt="促销商品" />;`,Q7=[{name:"NEW 新品标签",description:"左上角绿色 NEW 角标。",src:"https://picsum.photos/id/168/300/300",config:{type:"new",position:"top-left"}},{name:"HOT 热门标签（脉冲动画）",description:"右上角红色 HOT，带脉冲呼吸效果。",src:"https://picsum.photos/id/175/300/300",config:{type:"hot",position:"top-right",pulse:!0}},{name:"SALE 促销丝带",description:"右上角红色丝带（倾斜 45°）。",src:"https://picsum.photos/id/188/300/300",config:{type:"sale",position:"top-right",ribbon:!0}},{name:"LIMITED 限量标签",description:"右上角紫色 LIMITED，带脉冲。",src:"https://picsum.photos/id/196/300/300",config:{type:"limited",position:"top-right",pulse:!0}},{name:"BESTSELLER 畅销标签",description:"右下角橙色 BEST 角标。",src:"https://picsum.photos/id/203/300/300",config:{type:"bestseller",position:"bottom-right"}},{name:"自定义标签（VIP 专享）",description:"自定义文案、背景色与文字色。",src:"https://picsum.photos/id/211/300/300",config:{type:"custom",text:"VIP专享",position:"top-left",backgroundColor:"#FFD700",color:"#000"}},{name:"多个标签组合",description:"一张图同时叠加 NEW + SALE（丝带）+ HOT（脉冲），不同位置不同样式。",src:"https://picsum.photos/id/220/500/400",configs:[{type:"new",position:"top-left"},{type:"sale",position:"top-right",ribbon:!0},{type:"hot",position:"bottom-right",pulse:!0}]}],K7=["6 种预设类型：NEW / HOT / SALE / LIMITED / BESTSELLER / custom","支持自定义文字、背景色、文字颜色","脉冲动画效果（吸引注意力）","丝带样式（倾斜 45°）","4 个位置可选（四角）","支持同一图片显示多个标签"],Y7=["新品上市标记","热销商品突出","促销活动标识","限时限量提醒","VIP / 会员专享"],X7=["`type` 只是预设（new/hot/sale/limited/bestseller），`text` 可覆盖预设文案与颜色。","`ribbon: true` 渲染角部绶带，容器需 overflow:hidden 才不会溢出圆角。"],Z7={name:F7,description:W7,since:V7,tags:H7,config:G7,example:q7,examples:Q7,features:K7,useCases:Y7,notes:X7},Qc={"in-stock":{text:"有货",bg:"#4CAF50",color:"#fff",icon:"✓"},"out-of-stock":{text:"缺货",bg:"#F44336",color:"#fff",icon:"✕"},"low-stock":{text:"库存紧张",bg:"#FF9800",color:"#fff",icon:"⚠"},"pre-order":{text:"预订",bg:"#2196F3",color:"#fff",icon:"🕐"}},J7={"top-left":{top:10,left:10},"top-right":{top:10,right:10},"bottom-left":{bottom:10,left:10},"bottom-right":{bottom:10,right:10}},eH=`
  @keyframes inventoryFadeIn {
    from { opacity: 0; transform: translateY(-5px); }
    to { opacity: 1; transform: translateY(0); }
  }
`;function tH({config:e,context:t}){const{status:n,stockCount:o,lowStockThreshold:r=10,showBadge:i=!0,autoRefresh:s=!1,refreshInterval:a=3e4,fetchStock:l,onStatusChange:c,position:u="top-right",style:d={}}=e,[p,f]=T.useState(n),[v,w]=T.useState(o);if(T.useEffect(()=>{if(!s||!l)return;const y=setInterval(async()=>{try{const P=await l();P.status!==void 0&&f(P.status),P.count!==void 0&&w(P.count),P.status!==void 0&&(c==null||c(P.status))}catch(P){console.error("[InventoryStatusPlugin] fetchStock failed:",P)}},a);return()=>clearInterval(y)},[s,l,a,c]),!i)return null;let b=p??"in-stock";v!==void 0&&(v===0?b="out-of-stock":v<=r?b="low-stock":b!=="pre-order"&&(b="in-stock"));const h=Qc[b]??Qc["in-stock"],g={position:"absolute",...J7[u],backgroundColor:h.bg,color:h.color,padding:"6px 12px",borderRadius:4,fontSize:13,fontWeight:600,boxShadow:"0 2px 8px rgba(0,0,0,0.15)",zIndex:10,display:"flex",alignItems:"center",gap:4,animation:"inventoryFadeIn 0.3s ease-out",...d};return m.jsxs(m.Fragment,{children:[m.jsxs("div",{style:g,children:[m.jsx("span",{children:h.icon}),m.jsx("span",{children:h.text}),v!==void 0&&b!=="out-of-stock"&&m.jsxs("span",{style:{marginLeft:4,fontSize:11,opacity:.9},children:["(",v,")"]})]}),m.jsx("style",{children:eH})]})}function nH(e={}){return{name:"inventory-status",version:"1.0.0",config:e,hooks:{renderOverlay:t=>t.imageState.isLoaded?m.jsx(tH,{config:e,context:t}):null}}}const oH="InventoryStatusPlugin",rH="库存状态：实时显示商品库存状态（有货/低库存/缺货/预订），支持自动刷新和低库存预警。",iH="2.0.0",sH=["ecommerce","电商核心"],aH=[{name:"status",type:'"in-stock" | "out-of-stock" | "low-stock" | "pre-order"',default:'"in-stock"',description:"初始库存状态"},{name:"stockCount",type:"number",default:"undefined",description:"库存数量"},{name:"lowStockThreshold",type:"number",default:"10",description:"低库存阈值"},{name:"showBadge",type:"boolean",default:"true",description:"是否显示角标"},{name:"autoRefresh",type:"boolean",default:"false",description:"是否自动刷新库存"},{name:"refreshInterval",type:"number",default:"30000",description:"刷新间隔（毫秒）"},{name:"fetchStock",type:"() => Promise<{ status?; count? }>",default:"undefined",description:"自定义库存获取函数"},{name:"onStatusChange",type:"(status) => void",default:"undefined",description:"状态变更回调"},{name:"position",type:'"top-left" | "top-right" | "bottom-left" | "bottom-right"',default:'"top-right"',description:"角标位置"},{name:"style",type:"React.CSSProperties",default:"{}",description:"自定义叠加样式"}],lH=`// 1. 静态库存状态
const StockImage = withPlugins(LazyLoadImageCore, [
  createInventoryStatusPlugin({ status: "low-stock", stockCount: 5 }),
]);

// 2. 自动刷新库存（定时拉取最新数量）
createInventoryStatusPlugin({
  status: "in-stock",
  stockCount: 50,
  autoRefresh: true,
  refreshInterval: 5000,
  fetchStock: async () => {
    const res = await fetch("/api/products/123/stock");
    return res.json(); // { status, count }
  },
});

// 3. 在组件中使用
<StockImage src="https://picsum.photos/id/164/280/280" alt="商品图" />;`,cH=[{name:"有货（100 件）",description:"绿色角标，显示库存数量。",src:"https://picsum.photos/id/152/280/280",config:{status:"in-stock",stockCount:100,showBadge:!0,position:"top-right"}},{name:"库存紧张（5 件）",description:"低于阈值 → 橙色预警角标。",src:"https://picsum.photos/id/164/280/280",config:{status:"low-stock",stockCount:5,lowStockThreshold:10,showBadge:!0,position:"top-right"}},{name:"缺货",description:"红色缺货角标。",src:"https://picsum.photos/id/177/280/280",config:{status:"out-of-stock",stockCount:0,showBadge:!0,position:"top-right"}},{name:"预订",description:"蓝色预订角标。",src:"https://picsum.photos/id/183/280/280",config:{status:"pre-order",showBadge:!0,position:"top-right"}},{name:"自动刷新库存（每 5 秒）",description:"通过 fetchStock 定时刷新状态（示例中省略函数，可配 interval）。",src:"https://picsum.photos/id/225/400/300",config:{status:"in-stock",stockCount:50,showBadge:!0,autoRefresh:!0,refreshInterval:5e3,position:"top-right"}}],uH=["4 种库存状态：有货 / 低库存 / 缺货 / 预订","显示实时库存数量","低库存阈值预警","自动刷新库存（可配置间隔）","库存变更回调通知","颜色编码（绿=有货 / 橙=低库存 / 红=缺货 / 蓝=预订）"],dH=["电商产品列表页","库存管理系统","在线商城首页","门票 / 课程售卖","限时抢购活动"],pH=["`stockCount <= lowStockThreshold` 时会自动归为「库存紧张」，无需手动改 `status`。","`autoRefresh` 需配合 `refreshInterval` 与 `fetchStock` 才有意义，静态示例页不会轮询。"],mH={name:oH,description:rH,since:iH,tags:sH,config:aH,example:lH,examples:cH,features:uH,useCases:dH,notes:pH},Kc=["rgb(255, 99, 71)","rgb(70, 130, 180)","rgb(60, 179, 113)","rgb(255, 215, 0)","rgb(238, 130, 238)"],gH={bottom:{bottom:10,left:10,right:10},overlay:{top:"50%",left:"50%",transform:"translate(-50%, -50%)"},"bottom-center":{bottom:10,left:"50%",transform:"translateX(-50%)"}},fH=`
  @keyframes colorSwatchFadeIn {
    from { opacity: 0; transform: translateY(10px); }
    to { opacity: 1; transform: translateY(0); }
  }
`;function Yc(e,t){const n=document.createElement("canvas"),o=n.getContext("2d");if(!o)return[];const r=.1;n.width=e.naturalWidth*r,n.height=e.naturalHeight*r;try{o.drawImage(e,0,0,n.width,n.height);const i=o.getImageData(0,0,n.width,n.height).data,s=new Map;for(let l=0;l<i.length;l+=4*10){const c=i[l],u=i[l+1],d=i[l+2];if(i[l+3]<128||c>240&&u>240&&d>240||c<15&&u<15&&d<15)continue;const p=`rgb(${Math.round(c/32)*32}, ${Math.round(u/32)*32}, ${Math.round(d/32)*32})`;s.set(p,(s.get(p)||0)+1)}const a=Array.from(s.entries()).sort((l,c)=>c[1]-l[1]).slice(0,t).map(([l])=>l);return a.length?a:Kc.slice(0,t)}catch(i){return console.error("[ColorSwatchPlugin] extractColors failed (可能是跨域问题):",i),Kc.slice(0,t)}}function Xc(e){const t=e.match(/\d+/g);if(!t)return e;const[n,o,r]=t.map(Number);return`#${((1<<24)+(n<<16)+(o<<8)+r).toString(16).slice(1)}`}function hH({config:e,context:t}){const{maxColors:n=5,showPalette:o=!0,position:r="bottom",onColorSelect:i,swatchSize:s=32,interactive:a=!0,style:l={},showColorCode:c=!1,gap:u=8}=e,[d,p]=T.useState([]),[f,v]=T.useState(null),[w,b]=T.useState(null);if(T.useEffect(()=>{var P;const y=(P=t.imageRef)==null?void 0:P.current;if(y)if(y.complete&&y.naturalWidth>0)p(Yc(y,n));else{const $=()=>p(Yc(y,n));return y.addEventListener("load",$),()=>y.removeEventListener("load",$)}},[t.imageRef,n]),!o||d.length===0)return null;const h=y=>{a&&(v(y),i==null||i(y))},g={position:"absolute",...gH[r],display:"flex",alignItems:"center",gap:`${u}px`,padding:8,backgroundColor:"rgba(255, 255, 255, 0.9)",borderRadius:8,boxShadow:"0 2px 12px rgba(0,0,0,0.15)",zIndex:10,animation:"colorSwatchFadeIn 0.4s ease-out",...l};return m.jsxs(m.Fragment,{children:[m.jsx("div",{style:g,children:d.map(y=>{const P=f===y,$=w===y,C={width:`${s}px`,height:`${s}px`,backgroundColor:y,borderRadius:"50%",cursor:a?"pointer":"default",border:P?"3px solid #333":"2px solid rgba(0,0,0,0.1)",boxShadow:$?"0 4px 12px rgba(0,0,0,0.3)":"0 2px 6px rgba(0,0,0,0.15)",transform:$?"scale(1.15)":"scale(1)",transition:"all 0.2s ease",position:"relative"};return m.jsxs("div",{style:{textAlign:"center"},children:[m.jsx("div",{style:C,onClick:()=>h(y),onMouseEnter:()=>b(y),onMouseLeave:()=>b(null),title:Xc(y)}),c&&m.jsx("div",{style:{fontSize:10,marginTop:4,color:"#666",fontFamily:"monospace"},children:Xc(y)})]},y)})}),m.jsx("style",{children:fH})]})}function yH(e={}){return{name:"color-swatch",version:"1.0.0",config:e,hooks:{transformProps:t=>({...t,crossOrigin:t.crossOrigin??"anonymous"}),onMount:t=>{var n,o;try{(o=(n=t.imageRef)==null?void 0:n.current)==null||o.setAttribute("crossOrigin","anonymous")}catch{}},renderOverlay:t=>{var n;return!t.imageState.isLoaded||!((n=t.imageRef)!=null&&n.current)?null:m.jsx(hH,{config:e,context:t})}}}}const vH="ColorSwatchPlugin",wH="颜色选择器：自动提取商品图片主要颜色，支持交互选择、颜色代码显示与悬停放大。",xH="2.0.0",bH=["ecommerce","电商核心"],PH=[{name:"maxColors",type:"number",default:"5",description:"提取颜色数量上限"},{name:"showPalette",type:"boolean",default:"true",description:"是否显示色板"},{name:"position",type:'"bottom" | "overlay" | "bottom-center"',default:'"bottom"',description:"色板位置"},{name:"swatchSize",type:"number",default:"32",description:"色块尺寸（px）"},{name:"interactive",type:"boolean",default:"true",description:"是否可点击选择"},{name:"showColorCode",type:"boolean",default:"false",description:"是否显示 HEX 代码"},{name:"gap",type:"number",default:"8",description:"色块间距（px）"},{name:"onColorSelect",type:"(color) => void",default:"undefined",description:"颜色选择回调"},{name:"style",type:"React.CSSProperties",default:"{}",description:"自定义叠加样式"}],$H=`// 1. 可交互色板（点击选择颜色）
const SwatchImage = withPlugins(LazyLoadImageCore, [
  createColorSwatchPlugin({ maxColors: 6, onColorSelect: (c) => console.log(c) }),
]);

// 2. 在色块下方显示 HEX 代码
createColorSwatchPlugin({
  maxColors: 5,
  position: "bottom-center",
  showColorCode: true,
  gap: 12,
});

// 3. 在组件中使用
<SwatchImage src="https://picsum.photos/id/100/500/400" alt="服装图" />;`,SH=[{name:"底部色板（可交互）",description:"点击色块可选择颜色，悬停放大。",src:"https://picsum.photos/id/100/500/400",config:{maxColors:6,showPalette:!0,position:"bottom",interactive:!0,swatchSize:36}},{name:"居中叠加",description:"色板居中浮于图片之上。",src:"https://picsum.photos/id/106/500/400",config:{maxColors:5,showPalette:!0,position:"overlay",interactive:!0,swatchSize:40,gap:10}},{name:"显示颜色代码",description:"每个色块下方显示 HEX 代码。",src:"https://picsum.photos/id/116/500/400",config:{maxColors:5,showPalette:!0,position:"bottom-center",interactive:!0,swatchSize:32,showColorCode:!0,gap:12}},{name:"多颜色小色块",description:"更多颜色、更小色块、更小间距。",src:"https://picsum.photos/id/129/500/400",config:{maxColors:8,showPalette:!0,position:"bottom",interactive:!0,swatchSize:24,gap:6}}],CH=["跨域提示：本示例使用的 picsum.photos 图片没有 CORS 头，无法提取真实颜色，当前显示的是默认演示色。实际使用中请确保图片服务器配置了正确的 CORS 头，或使用同域图片，插件才能正确提取图片的真实颜色。"],LH=["自动提取图片主要颜色","智能过滤黑白和透明色","可配置提取颜色数量","3 种显示位置（底部 / 居中 / 底部居中）","交互式颜色选择","显示 HEX 颜色代码","悬停放大效果","选中状态标识"],kH=["服装多颜色选择","艺术品 / 设计作品配色","家具 / 装饰品颜色筛选","鞋包配色选择","礼品个性化定制"],IH={name:vH,description:wH,since:xH,tags:bH,config:PH,example:$H,examples:SH,notes:CH,features:LH,useCases:kH},Zc={facebook:{name:"Facebook",icon:"f",color:"#1877F2",getShareUrl:e=>`https://www.facebook.com/sharer/sharer.php?u=${encodeURIComponent(e.url)}`},twitter:{name:"Twitter",icon:"𝕏",color:"#000000",getShareUrl:e=>`https://twitter.com/intent/tweet?url=${encodeURIComponent(e.url)}&text=${encodeURIComponent(e.title)}`},pinterest:{name:"Pinterest",icon:"P",color:"#E60023",getShareUrl:e=>`https://pinterest.com/pin/create/button/?url=${encodeURIComponent(e.url)}&media=${encodeURIComponent(e.ogImage)}&description=${encodeURIComponent(e.description||e.title)}`},linkedin:{name:"LinkedIn",icon:"in",color:"#0A66C2",getShareUrl:e=>`https://www.linkedin.com/sharing/share-offsite/?url=${encodeURIComponent(e.url)}`},whatsapp:{name:"WhatsApp",icon:"W",color:"#25D366",getShareUrl:e=>`https://wa.me/?text=${encodeURIComponent(e.title+" "+e.url)}`},wechat:{name:"WeChat",icon:"微",color:"#07C160",getShareUrl:e=>e.url}},_H={small:{button:28,icon:14},medium:{button:36,icon:16},large:{button:44,icon:18}},EH={"top-right":{top:10,right:10},"bottom-right":{bottom:10,right:10},"top-left":{top:10,left:10},"bottom-left":{bottom:10,left:10}},RH=`
  @keyframes shareButtonSlideIn {
    from { opacity: 0; transform: translateX(20px); }
    to { opacity: 1; transform: translateX(0); }
  }
`;function zH({config:e,context:t}){const{platforms:n=["facebook","twitter","pinterest"],position:o="top-right",showOnHover:r=!1,url:i,title:s="分享图片",description:a="",ogImage:l,onShare:c,style:u={},size:d="medium"}=e,[p,f]=T.useState(!r),[v,w]=T.useState(!1),b=i??(typeof window<"u"?window.location.href:""),h={url:b,title:s,description:a,ogImage:l??t.src},g=C=>{var k;const L=Zc[C];L&&(C==="wechat"?(alert("请复制链接到微信分享"),(k=navigator.clipboard)==null||k.writeText(b)):window.open(L.getShareUrl(h),"_blank","width=600,height=400"),c==null||c(C))},y=_H[d],P={position:"absolute",...EH[o],display:"flex",flexDirection:"column",gap:6,zIndex:10,opacity:p?1:0,transform:p?"scale(1)":"scale(0.8)",transition:"all 0.3s ease",pointerEvents:"auto",...u},$={width:y.button,height:y.button,borderRadius:"50%",backgroundColor:"#fff",border:"2px solid #ddd",display:"flex",alignItems:"center",justifyContent:"center",cursor:"pointer",boxShadow:"0 2px 8px rgba(0,0,0,0.15)",fontSize:y.icon,fontWeight:"bold",transition:"all 0.2s ease"};return m.jsxs(m.Fragment,{children:[r&&m.jsx("div",{style:{position:"absolute",top:0,left:0,right:0,bottom:0,zIndex:9,pointerEvents:"auto"},onMouseEnter:()=>f(!0),onMouseLeave:()=>{f(!1),w(!1)}}),m.jsxs("div",{style:P,children:[m.jsx("div",{style:$,onClick:()=>w(!v),title:"分享",children:m.jsx("span",{children:"📤"})}),v&&n.map((C,L)=>{const k=Zc[C];if(!k)return null;const M={width:y.button,height:y.button,borderRadius:"50%",backgroundColor:k.color,color:"#fff",border:"none",display:"flex",alignItems:"center",justifyContent:"center",cursor:"pointer",boxShadow:"0 2px 8px rgba(0,0,0,0.15)",fontSize:y.icon,fontWeight:"bold",animation:`shareButtonSlideIn 0.3s ease-out ${L*.05}s both`,transition:"all 0.2s ease"};return m.jsx("div",{style:M,onClick:()=>g(C),onMouseEnter:E=>E.currentTarget.style.transform="scale(1.1)",onMouseLeave:E=>E.currentTarget.style.transform="scale(1)",title:`分享到 ${k.name}`,children:k.icon},C)})]}),m.jsx("style",{children:RH})]})}function DH(e={}){return{name:"social-share",version:"1.0.0",config:e,hooks:{renderOverlay:t=>t.imageState.isLoaded?m.jsx(zH,{config:e,context:t}):null}}}const OH="SocialSharePlugin",jH="社交分享：在商品图片上显示社交分享按钮，支持 6 大平台、悬停展开、自定义尺寸与分享回调。",MH="2.0.0",TH=["ecommerce","电商核心"],NH=[{name:"platforms",type:'Array<"facebook"|"twitter"|"pinterest"|"linkedin"|"whatsapp"|"wechat">',default:'["facebook","twitter","pinterest"]',description:"分享平台列表"},{name:"position",type:'"top-left" | "top-right" | "bottom-left" | "bottom-right"',default:'"top-right"',description:"主按钮位置"},{name:"showOnHover",type:"boolean",default:"false",description:"悬停显示模式"},{name:"title",type:"string",default:'"分享图片"',description:"分享标题"},{name:"description",type:"string",default:'""',description:"分享描述"},{name:"ogImage",type:"string",default:"undefined",description:"Pinterest 等使用的媒体图"},{name:"size",type:'"small" | "medium" | "large"',default:'"medium"',description:"按钮尺寸"},{name:"onShare",type:"(platform) => void",default:"undefined",description:"分享回调"},{name:"style",type:"React.CSSProperties",default:"{}",description:"自定义容器样式"}],AH=`// 1. 指定分享平台，点击展开具体入口
const ShareImage = withPlugins(LazyLoadImageCore, [
  createSocialSharePlugin({
    platforms: ["facebook", "twitter", "wechat"],
    title: "Amazing Product",
    description: "Check out this amazing product!",
    onShare: (platform) => track(platform),
  }),
]);

// 2. 悬停才显示分享按钮
createSocialSharePlugin({
  platforms: ["facebook", "twitter", "linkedin", "whatsapp"],
  position: "top-right",
  showOnHover: true,
});

// 3. 在组件中使用
<ShareImage src="https://picsum.photos/id/237/500/400" alt="商品图" />;`,BH=[{name:"默认分享按钮",description:"点击主按钮展开具体平台，再点平台进行分享。",src:"https://picsum.photos/id/237/500/400",config:{platforms:["facebook","twitter","pinterest"],position:"top-right",showOnHover:!1,title:"Amazing Product",description:"Check out this amazing product!"}},{name:"悬停显示（鼠标悬停时出现）",description:"默认隐藏，鼠标悬停图片才显示分享按钮。",src:"https://picsum.photos/id/247/500/400",config:{platforms:["facebook","twitter","linkedin","whatsapp"],position:"top-right",showOnHover:!0,size:"medium"}},{name:"更多平台（包含微信）",description:"小尺寸、右下角，覆盖 6 个平台。",src:"https://picsum.photos/id/257/500/400",config:{platforms:["facebook","twitter","pinterest","linkedin","whatsapp","wechat"],position:"bottom-right",showOnHover:!1,size:"small"}},{name:"大尺寸按钮",description:"左上角大尺寸分享按钮。",src:"https://picsum.photos/id/267/500/400",config:{platforms:["facebook","twitter","pinterest"],position:"top-left",showOnHover:!1,size:"large"}}],UH=["支持 6 大社交平台：Facebook / Twitter / Pinterest / LinkedIn / WhatsApp / WeChat","悬停显示模式","3 种尺寸可选（small / medium / large）","4 个位置可选","展开 / 收起动画","分享回调通知","自定义分享标题和描述"],FH=["电商产品分享","内容营销推广","作品集展示","照片 / 图片社区","礼物推荐分享","房产 / 旅游分享"],WH=["`showOnHover: true` 时分享条只在悬停出现；示例页默认常驻便于观察。","微信没有可直接打开的分享 URL，走 `onShare` 回调由业务方接入。"],VH={name:OH,description:jH,since:MH,tags:TH,config:NH,example:AH,examples:BH,features:UH,useCases:FH,notes:WH},HH={small:{size:48,iconSize:20},medium:{size:64,iconSize:28},large:{size:80,iconSize:36}},GH={center:{top:"50%",left:"50%",transform:"translate(-50%, -50%)"},"top-left":{top:20,left:20},"top-right":{top:20,right:20},"bottom-left":{bottom:20,left:20},"bottom-right":{bottom:20,right:20}},Jc=`
  @keyframes videoModalFadeIn { from { opacity: 0; } to { opacity: 1; } }
  @keyframes videoPosterPulse {
    0%, 100% { transform: scale(1); }
    50% { transform: scale(1.05); }
  }
`;function qH({config:e,context:t}){const{videoUrl:n,autoPlay:o=!0,loop:r=!1,muted:i=!0,playButtonPosition:s="center",playButtonSize:a="large",playButtonStyle:l={},showPlayButton:c=!0,onPlay:u,playInModal:d=!0,playIcon:p}=e,[f,v]=T.useState(!1),w=()=>{v(!0),u==null||u()},b=HH[a],h={position:"absolute",...GH[s],width:b.size,height:b.size,borderRadius:"50%",backgroundColor:"rgba(0, 0, 0, 0.7)",border:"3px solid rgba(255, 255, 255, 0.9)",display:"flex",alignItems:"center",justifyContent:"center",cursor:"pointer",zIndex:10,transition:"all 0.3s ease",...l};return f&&d?m.jsxs(m.Fragment,{children:[m.jsxs("div",{style:{position:"fixed",top:0,left:0,right:0,bottom:0,backgroundColor:"rgba(0, 0, 0, 0.9)",zIndex:9999,display:"flex",alignItems:"center",justifyContent:"center",animation:"videoModalFadeIn 0.3s ease-out"},onClick:()=>v(!1),children:[m.jsx("button",{style:{position:"absolute",top:20,right:20,width:40,height:40,borderRadius:"50%",backgroundColor:"rgba(255,255,255,0.2)",border:"2px solid white",color:"white",fontSize:24,cursor:"pointer",display:"flex",alignItems:"center",justifyContent:"center",zIndex:10001},onClick:()=>v(!1),children:"×"}),m.jsx("video",{src:n,controls:!0,autoPlay:o,loop:r,muted:i,style:{maxWidth:"90%",maxHeight:"90%",borderRadius:8,boxShadow:"0 10px 40px rgba(0,0,0,0.5)"},onClick:g=>g.stopPropagation()})]}),m.jsx("style",{children:Jc})]}):f&&!d?m.jsxs("div",{style:{position:"absolute",top:0,left:0,right:0,bottom:0,backgroundColor:"#000",zIndex:10},children:[m.jsx("button",{style:{position:"absolute",top:10,right:10,width:32,height:32,borderRadius:"50%",backgroundColor:"rgba(255,255,255,0.2)",border:"2px solid white",color:"white",fontSize:20,cursor:"pointer",display:"flex",alignItems:"center",justifyContent:"center",zIndex:11},onClick:()=>v(!1),children:"×"}),m.jsx("video",{src:n,controls:!0,autoPlay:o,loop:r,muted:i,style:{width:"100%",height:"100%",objectFit:"contain"}})]}):c?m.jsxs(m.Fragment,{children:[m.jsx("div",{style:h,onClick:w,onMouseEnter:g=>{g.currentTarget.style.backgroundColor="rgba(0, 0, 0, 0.85)",s==="center"?g.currentTarget.style.transform="translate(-50%, -50%) scale(1.1)":g.currentTarget.style.transform="scale(1.1)"},onMouseLeave:g=>{g.currentTarget.style.backgroundColor="rgba(0, 0, 0, 0.7)",s==="center"?g.currentTarget.style.transform="translate(-50%, -50%) scale(1)":g.currentTarget.style.transform="scale(1)"},title:"播放视频",children:p??m.jsx("svg",{width:b.iconSize,height:b.iconSize,viewBox:"0 0 24 24",fill:"white",style:{marginLeft:2},children:m.jsx("path",{d:"M8 5v14l11-7z"})})}),m.jsx("style",{children:Jc})]}):null}function QH(e){return{name:"video-poster",version:"1.0.0",config:e,hooks:{renderOverlay:t=>t.imageState.isLoaded?m.jsx(qH,{config:e,context:t}):null}}}const KH="VideoPosterPlugin",YH="视频海报：将图片作为视频封面，点击播放视频（模态框或内联），支持自动播放、循环、静音与自定义按钮。",XH="2.0.0",ZH=["ecommerce","电商核心"],JH=[{name:"videoUrl",type:"string",default:"undefined",description:"视频 URL"},{name:"autoPlay",type:"boolean",default:"true",description:"自动播放"},{name:"loop",type:"boolean",default:"false",description:"循环播放"},{name:"muted",type:"boolean",default:"true",description:"静音（移动端自动播放需静音）"},{name:"playButtonPosition",type:'"center" | "top-left" | "top-right" | "bottom-left" | "bottom-right"',default:'"center"',description:"播放按钮位置"},{name:"playButtonSize",type:'"small" | "medium" | "large"',default:'"large"',description:"按钮尺寸"},{name:"playButtonStyle",type:"React.CSSProperties",default:"{}",description:"自定义按钮样式"},{name:"showPlayButton",type:"boolean",default:"true",description:"是否显示播放按钮"},{name:"playInModal",type:"boolean",default:"true",description:"模态框播放（否则内联）"},{name:"playIcon",type:"ReactNode",default:"undefined",description:"自定义播放图标"},{name:"onPlay",type:"() => void",default:"undefined",description:"播放回调"}],eG=`// 1. 点击播放按钮，在模态框中播放视频
const VideoImage = withPlugins(LazyLoadImageCore, [
  createVideoPosterPlugin({
    videoUrl: "https://example.com/clip.mp4",
    playInModal: true,
    muted: true,
  }),
]);

// 2. 内联播放（直接在图片位置播放，带循环与自动播放）
createVideoPosterPlugin({
  videoUrl: "https://example.com/clip.mp4",
  playInModal: false,
  autoPlay: true,
  loop: true,
  muted: true,
});

// 3. 在组件中使用
<VideoImage src="https://picsum.photos/id/1015/500/300" alt="商品视频封面" />;`,tG=[{name:"基础视频海报（模态框播放）",description:"点击图片中心播放按钮，在模态框中播放视频。",src:"https://picsum.photos/id/1015/500/300",config:{videoUrl:"https://www.w3schools.com/html/mov_bbb.mp4",playButtonPosition:"center",playButtonSize:"large"}},{name:"内联播放模式",description:"视频直接在图片位置播放，不弹出模态框。",src:"https://picsum.photos/id/1018/500/300",config:{videoUrl:"https://www.w3schools.com/html/movie.mp4",playInModal:!1,playButtonPosition:"center",playButtonSize:"medium",autoPlay:!0,loop:!0,muted:!0}},{name:"自定义播放按钮样式",description:"按钮位于右下角，红色背景，小尺寸。",src:"https://picsum.photos/id/1019/500/300",config:{videoUrl:"https://www.w3schools.com/html/mov_bbb.mp4",playButtonPosition:"bottom-right",playButtonSize:"small",playButtonStyle:{backgroundColor:"rgba(255, 59, 48, 0.9)",border:"2px solid white"}}},{name:"自定义播放图标",description:"示例以默认三角形呈现；可用 playIcon 替换为自定义图标（如 “PLAY” 文字）。",src:"https://picsum.photos/id/1020/500/300",config:{videoUrl:"https://www.w3schools.com/html/mov_bbb.mp4",playButtonPosition:"center",playButtonSize:"large"}},{name:"不同按钮位置",description:"播放按钮位于左上角，绿色背景。",src:"https://picsum.photos/id/1021/500/300",config:{videoUrl:"https://www.w3schools.com/html/mov_bbb.mp4",playButtonPosition:"top-left",playButtonSize:"small",playButtonStyle:{backgroundColor:"rgba(52, 199, 89, 0.9)"}}}],nG=["使用提示：确保视频 URL 可访问，否则播放会失败；移动端自动播放可能受浏览器限制，建议设置 muted=true；大视频文件建议使用流媒体服务；模态框播放体验更好但会阻断其它交互；内联播放适合小尺寸视频预览。"],oG=["模态框播放（全屏）","内联播放（图片位置直接播）","自定义播放按钮大小 / 位置 / 样式","多位置支持（center / top-left / bottom-left / bottom-right）","播放控制（自动播放 / 循环 / 静音）","自定义图标"],rG=["视频网站","在线教育","电商平台（商品视频展示）","新闻媒体","视频博客","企业官网"],iG={name:KH,description:YH,since:XH,tags:ZH,config:JH,example:eG,examples:tG,notes:nG,features:oG,useCases:rG};function sG(){return typeof navigator>"u"?"en":(navigator.language||navigator.userLanguage||"en").split("-")[0].toLowerCase()}function aG(e){const{localeMap:t,defaultLocale:n="en",currentLocale:o,autoDetect:r=!0,detectLocale:i,fallbackSrc:s}=e;let a=0;return{name:`localization-${++a}`,version:"1.0.0",config:e,hooks:{onLoad:l=>{const c=l.src;let u=o;!u&&r&&(u=i?i():sG()),u=u||n;let d=t[u];return!d&&u!==n&&(d=t[n]),d=d||s||c,d}}}}const lG="LocalizationPlugin",cG="国际化：根据用户语言环境自动切换图片，支持手动指定、自动检测、自定义检测函数与后备图片。",uG="2.0.0",dG=["ecommerce","电商核心"],pG=[{name:"localeMap",type:"Record<string, string>",default:"undefined",description:"语言 → 图片 URL 映射"},{name:"defaultLocale",type:"string",default:'"en"',description:"默认语言（后备）"},{name:"currentLocale",type:"string",default:"undefined",description:"手动指定当前语言"},{name:"autoDetect",type:"boolean",default:"true",description:"是否自动检测浏览器语言"},{name:"detectLocale",type:"() => string",default:"undefined",description:"自定义语言检测函数"},{name:"fallbackSrc",type:"string",default:"undefined",description:"最终后备图片 URL"}],mG=`// 1. 按浏览器语言自动切换图片
const I18nImage = withPlugins(LazyLoadImageCore, [
  createLocalizationPlugin({
    localeMap: {
      en: "https://cdn.example.com/en.jpg",
      zh: "https://cdn.example.com/zh.jpg",
    },
    autoDetect: true,
    defaultLocale: "en",
  }),
]);

// 2. 手动指定语言（不自动检测）
createLocalizationPlugin({
  localeMap: { en: "https://cdn.example.com/en.jpg", zh: "https://cdn.example.com/zh.jpg" },
  currentLocale: "zh",
  autoDetect: false,
});

// 3. 在组件中使用
<I18nImage src="https://picsum.photos/id/1015/500/300" alt="多语言图片" />;`,gG=[{name:"手动切换语言",description:"手动指定 currentLocale 展示对应语言图片（此处以 en 为例）。",src:"https://picsum.photos/id/1015/500/300",config:{localeMap:{en:"https://picsum.photos/id/1015/500/300",zh:"https://picsum.photos/id/1016/500/300",ja:"https://picsum.photos/id/1018/500/300",ko:"https://picsum.photos/id/1019/500/300"},currentLocale:"en",autoDetect:!1,defaultLocale:"en"}},{name:"自动检测浏览器语言",description:"根据浏览器语言自动选择图片（支持 en/zh/fr/de/es）。",src:"https://picsum.photos/id/1020/500/300",config:{localeMap:{en:"https://picsum.photos/id/1020/500/300",zh:"https://picsum.photos/id/1021/500/300",fr:"https://picsum.photos/id/1022/500/300",de:"https://picsum.photos/id/1023/500/300",es:"https://picsum.photos/id/1024/500/300"},autoDetect:!0,defaultLocale:"en"}},{name:"自定义语言检测",description:"通过 detectLocale() 从 localStorage 读取偏好（示例中简写为自动检测）。",src:"https://picsum.photos/id/1025/500/300",config:{localeMap:{en:"https://picsum.photos/id/1025/500/300",zh:"https://picsum.photos/id/1026/500/300",ja:"https://picsum.photos/id/1027/500/300"},defaultLocale:"en",autoDetect:!0}},{name:"后备图片机制",description:"请求的语言（ru）不在映射中 → 显示 fallbackSrc 后备图片。",src:"https://picsum.photos/id/1030/500/300",config:{localeMap:{en:"https://picsum.photos/id/1028/500/300",zh:"https://picsum.photos/id/1029/500/300"},currentLocale:"ru",defaultLocale:"en",fallbackSrc:"https://picsum.photos/id/1030/500/300"}}],fG=["最佳实践：始终提供 defaultLocale 作为后备；localeMap 至少包含常用语言（en、zh 等）；图片 URL 应指向稳定可访问的资源；建议使用 CDN 加速不同地区的图片加载；可结合用户设置和浏览器检测；开发环境建议打开 console 查看语言检测日志。"],hG=["多语言支持（任意语言环境）","自动检测浏览器语言","默认回退语言","自定义检测函数","后备机制（最终后备图片 URL）","动态切换（运行时切换语言）"],yG=["国际化网站","品牌宣传","多语言 App","电商平台（商品本地化展示）","新闻媒体","在线教育"],vG={name:lG,description:cG,since:uG,tags:dG,config:pG,example:mG,examples:gG,notes:fG,features:hG,useCases:yG},wG={small:{size:32,iconSize:16},medium:{size:40,iconSize:20},large:{size:48,iconSize:24}},xG={"top-left":{top:10,left:10},"top-right":{top:10,right:10},"bottom-left":{bottom:10,left:10},"bottom-right":{bottom:10,right:10}},bG=`
  @keyframes downloadSpin {
    from { transform: rotate(0deg); }
    to { transform: rotate(360deg); }
  }
`;function PG({config:e,context:t}){const{filename:n,position:o="top-right",size:r="medium",buttonStyle:i={},showOnHover:s=!1,onBeforeDownload:a,onDownloadSuccess:l,onDownloadError:c,customIcon:u,showTooltip:d=!0,tooltipText:p="下载图片"}=e,[f,v]=T.useState(!1),[w,b]=T.useState(!1),h=wG[r],g=async P=>{P.stopPropagation();try{b(!0),await(a==null?void 0:a(t.src));const $=n||t.src.split("/").pop()||"download.jpg",C=await(await fetch(t.src)).blob(),L=window.URL.createObjectURL(C),k=document.createElement("a");k.href=L,k.download=$,document.body.appendChild(k),k.click(),document.body.removeChild(k),window.URL.revokeObjectURL(L),l==null||l($)}catch($){console.error("[DownloadButtonPlugin] Download failed:",$),c==null||c($)}finally{b(!1)}},y={position:"absolute",...xG[o],width:h.size,height:h.size,borderRadius:"50%",backgroundColor:"rgba(0, 0, 0, 0.6)",border:"2px solid rgba(255, 255, 255, 0.8)",display:"flex",alignItems:"center",justifyContent:"center",cursor:w?"wait":"pointer",zIndex:10,opacity:s&&!f?0:1,transform:f?"scale(1.1)":"scale(1)",transition:"all 0.3s ease",...i};return m.jsxs(m.Fragment,{children:[s&&m.jsx("div",{style:{position:"absolute",top:0,left:0,right:0,bottom:0,zIndex:9,pointerEvents:"auto"},onMouseEnter:()=>v(!0),onMouseLeave:()=>v(!1)}),m.jsx("div",{style:y,onClick:g,title:d?p:void 0,children:u??(w?m.jsx("svg",{width:h.iconSize,height:h.iconSize,viewBox:"0 0 24 24",fill:"white",style:{animation:"downloadSpin 1s linear infinite"},children:m.jsx("circle",{cx:"12",cy:"12",r:"10",stroke:"white",strokeWidth:"2",fill:"none",strokeDasharray:"31.4",strokeDashoffset:"10"})}):m.jsx("svg",{width:h.iconSize,height:h.iconSize,viewBox:"0 0 24 24",fill:"white",children:m.jsx("path",{d:"M19 9h-4V3H9v6H5l7 7 7-7zM5 18v2h14v-2H5z"})}))}),m.jsx("style",{children:bG})]})}function $G(e={}){return{name:"download-button",version:"1.0.0",config:e,hooks:{renderOverlay:t=>t.imageState.isLoaded?m.jsx(PG,{config:e,context:t}):null}}}const SG="DownloadButtonPlugin",CG="下载按钮：为图片添加一键下载功能，支持多位置、自定义样式、悬停显示与生命周期回调。",LG="2.0.0",kG=["ecommerce","电商核心"],IG=[{name:"filename",type:"string",default:"undefined",description:"下载文件名"},{name:"position",type:'"top-left" | "top-right" | "bottom-left" | "bottom-right"',default:'"top-right"',description:"按钮位置"},{name:"size",type:'"small" | "medium" | "large"',default:'"medium"',description:"按钮尺寸"},{name:"buttonStyle",type:"React.CSSProperties",default:"{}",description:"自定义按钮样式"},{name:"showOnHover",type:"boolean",default:"false",description:"仅悬停时显示"},{name:"onBeforeDownload",type:"(src) => void | Promise<void>",default:"undefined",description:"下载前回调（可做权限校验）"},{name:"onDownloadSuccess",type:"(filename) => void",default:"undefined",description:"下载成功回调"},{name:"onDownloadError",type:"(error) => void",default:"undefined",description:"下载失败回调"},{name:"customIcon",type:"ReactNode",default:"undefined",description:"自定义图标"},{name:"tooltipText",type:"string",default:'"下载图片"',description:"提示文案"}],_G=`// 1. 右上角下载按钮，成功后回调
const DownloadImage = withPlugins(LazyLoadImageCore, [
  createDownloadButtonPlugin({
    position: "top-right",
    filename: "my-image.jpg",
    onDownloadSuccess: (name) => console.log(name),
  }),
]);

// 2. 仅悬停时显示下载按钮
createDownloadButtonPlugin({
  position: "top-left",
  size: "large",
  showOnHover: true,
  tooltipText: "点击下载高清图片",
});

// 3. 在组件中使用
<DownloadImage src="https://picsum.photos/id/1015/500/300" alt="可下载图片" />;`,EG=[{name:"基础下载功能",description:"点击右上角下载按钮，保存图片（文件名 my-image.jpg）。",src:"https://picsum.photos/id/1015/500/300",config:{filename:"my-image.jpg",position:"top-right",size:"medium"}},{name:"悬停显示按钮",description:"默认隐藏，鼠标悬停图片左上角出现大号下载按钮。",src:"https://picsum.photos/id/1018/500/300",config:{position:"top-left",size:"large",showOnHover:!0,tooltipText:"点击下载高清图片"}},{name:"自定义位置和大小",description:"左下角小号绿色下载按钮。",src:"https://picsum.photos/id/1019/500/300",config:{position:"bottom-left",size:"small",buttonStyle:{backgroundColor:"rgba(52, 199, 89, 0.9)"}}},{name:"自定义按钮样式",description:"右下角红色方形下载按钮。",src:"https://picsum.photos/id/1020/500/300",config:{position:"bottom-right",size:"medium",buttonStyle:{backgroundColor:"rgba(255, 59, 48, 0.9)",borderRadius:"8px",border:"none"},tooltipText:"下载原图"}},{name:"下载生命周期回调",description:"下载前后触发回调（可权限校验 / 统计上报）；示例中省略函数，见用法示例。",src:"https://picsum.photos/id/1021/500/300",config:{filename:"premium-photo.jpg",position:"top-right",size:"large"}},{name:"自定义下载图标",description:"示例以默认图标呈现；可用 customIcon 替换为自定义图标。",src:"https://picsum.photos/id/1022/500/300",config:{position:"top-right",size:"medium",buttonStyle:{backgroundColor:"rgba(88, 86, 214, 0.9)"}}}],RG=["下载提示：下载需要图片 URL 支持 CORS，否则可能失败；跨域图片需服务器设置 Access-Control-Allow-Origin；filename 应包含合适的文件扩展名（.jpg / .png 等）；大文件下载时会有短暂延迟，建议显示加载状态；移动端下载体验可能因浏览器而异；可在 onBeforeDownload 中进行权限检查。"],zG=["一键下载（点击按钮即可下载图片）","多位置支持（4 个角落）","自定义样式（大小 / 颜色 / 形状）","悬停显示模式","生命周期回调（下载前 / 后 / 失败）","自定义图标"],DG=["图片网站（用户下载高清图）","设计平台（下载设计作品）","新闻媒体","电商平台（下载商品图片）","在线教育（下载教学资料）","企业官网（下载宣传图）"],OG={name:SG,description:CG,since:LG,tags:kG,config:IG,example:_G,examples:EG,notes:RG,features:zG,useCases:DG},jG=Object.assign(C7,{meta:M7}),MG=Object.assign(U7,{meta:Z7}),TG=Object.assign(nH,{meta:mH}),NG=Object.assign(yH,{meta:IH}),AG=Object.assign(DH,{meta:VH}),BG=Object.assign(QH,{meta:iG}),UG=Object.assign(aG,{meta:vG}),FG=Object.assign($G,{meta:OG}),hr=(()=>{const e=new Map;function t(r){let i=e.get(r);return i||(i={current:0,queue:[]},e.set(r,i)),i}async function n(r,i,s,a){const l=t(r);if(l.current<i){l.current+=1,s&&console.debug(`[ConcurrencyGate] acquire immediate: ${r} -> ${l.current}/${i}`);return}s&&console.debug(`[ConcurrencyGate] queued: ${r} size=${l.queue.length+1}`),await new Promise((c,u)=>{const d={resolve:()=>{d.timer&&clearTimeout(d.timer),l.current+=1,s&&console.debug(`[ConcurrencyGate] acquire from queue: ${r} -> ${l.current}/${i}`),c()},reject:u};a&&a>0&&(d.timer=setTimeout(()=>{const p=l.queue.indexOf(d);p>=0&&l.queue.splice(p,1),s&&console.debug(`[ConcurrencyGate] acquire timeout: ${r} after ${a}ms`),u==null||u(new Error(`acquire timeout for ${r}`))},a)),l.queue.push(d)})}function o(r,i,s){const a=t(r);a.current>0&&(a.current-=1),s&&console.debug(`[ConcurrencyGate] release: ${r} -> ${a.current}/${i}`);const l=a.queue.shift();l&&l.resolve()}return{acquire:n,release:o}})();function rs(e,t){if(t==="global")return"__global__";try{return`host:${new URL(e,typeof window<"u"?window.location.origin:"http://localhost").hostname}`}catch{return"__global__"}}function WG(e={}){const{maxConcurrent:t=4,scope:n="global",adaptive:o=!0,acquireTimeoutMs:r=8e3,debug:i=!1}=e;function s(a,l){var u,d;if(!o)return a;const c=(u=l.networkInfo)==null?void 0:u.effectiveType;if((d=l.networkInfo)!=null&&d.saveData)return 1;switch(c){case"slow-2g":case"2g":return 1;case"3g":return Math.max(1,Math.floor(a/2));case"4g":default:return a}}return{name:"concurrency-control",version:"1.0.0",config:e,hooks:{onLoad:async a=>{var u;const l=rs(a.src,n),c=s(t,a);try{await hr.acquire(l,c,i,r)}catch(d){i&&console.debug("[ConcurrencyControl] proceed without permit due to:",d);return}try{(u=a.sharedData)==null||u.set("cc:key",l)}catch{}},onLoadSuccess:a=>{var u;const l=((u=a.sharedData)==null?void 0:u.get("cc:key"))||rs(a.src,n),c=s(t,a);hr.release(l,c,i)},onLoadError:a=>{var u;const l=((u=a.sharedData)==null?void 0:u.get("cc:key"))||rs(a.src,n),c=s(t,a);return hr.release(l,c,i),!0},onUnmount:a=>{var c,u;const l=(c=a.sharedData)==null?void 0:c.get("cc:key");if(typeof l=="string"){const d=s(t,a);hr.release(l,d,i);try{(u=a.sharedData)==null||u.delete("cc:key")}catch{}}}}}}const VG="ConcurrencyControlPlugin",HG="并发控制：限制同时加载数量，支持按域名分片与网络自适应。",GG="2.0.0",qG=["loading","加载策略"],QG=[{name:"maxConcurrent",type:"number",default:"4",description:"并发上限（4g 情况的上限）"},{name:"scope",type:'"global" | "perHost"',default:'"global"',description:"作用域：全局或按域名分片"},{name:"adaptive",type:"boolean",default:"true",description:"是否根据网络自适应并发（saveData/2g/3g 降低并发）"},{name:"acquireTimeoutMs",type:"number",default:"8000",description:"获取并发许可的超时（毫秒），超时后不阻塞加载，避免饥饿"},{name:"debug",type:"boolean",default:"false",description:"调试输出"}],KG=`const LazyImage = withPlugins(LazyLoadImageCore, [
  createConcurrencyControlPlugin({
    maxConcurrent: 6,
    scope: "perHost", // 按域名分片，避免单域阻塞
    adaptive: true,    // 弱网自动降低并发
  }),
]);`,YG=[{name:"全局并发限制",description:"限制整页同时加载不超过 4 张，避免带宽被瞬间打满。",config:{maxConcurrent:4,scope:"global"}},{name:"按域名分片",description:"每个域名独立并发配额，混合多 CDN 时不互相拖累。",config:{maxConcurrent:6,scope:"perHost",adaptive:!0}}],XG=["全局或按域名（perHost）分片并发门控","弱网（saveData / 2g / 3g）下自适应降低并发","acquireTimeoutMs 后不阻塞加载，避免饥饿"],ZG=["瀑布流海量图片，避免一次性发起上百请求","弱网环境限制并发以保住首屏体验"],JG=["acquireTimeoutMs 保证极端情况下不会永久挂起。","与 ScrollIdle 搭配可进一步错峰、降低峰值并发。","并发许可在加载完成后释放，供队列中下一张使用。"],eq={name:VG,description:HG,since:GG,tags:qG,config:QG,example:KG,examples:YG,features:XG,useCases:ZG,notes:JG};function tq(e,t,n){try{const o=new URL(e,typeof window<"u"?window.location.origin:"http://localhost");return o.searchParams.set(t,n),o.toString()}catch{const o=e.includes("?")?"&":"?";return`${e}${o}${encodeURIComponent(t)}=${encodeURIComponent(n)}`}}function nq(e={}){const{respectSaveData:t=!0,fallbackQuality:n=.6,disablePreload:o=!0,qualityParam:r="quality"}=e;return{name:"data-saver",version:"1.0.0",config:e,hooks:{transformProps:i=>{var s;try{const a=((s=navigator==null?void 0:navigator.connection)==null?void 0:s.saveData)===!0;if(!t||!a)return i;const l=Math.max(0,Math.min(1,n)),c=tq(i.src,r,String(l)),u={...i,src:c};return o&&(u.loading="lazy"),u}catch{return i}}}}}const oq="DataSaverPlugin",rq="省流模式：saveData 开启时降低质量参数并禁用预加载。",iq="2.0.0",sq=["loading","加载策略"],aq=[{name:"respectSaveData",type:"boolean",default:"true",description:"仅在 navigator.connection.saveData=true 时降质（关闭则强制降质）"},{name:"fallbackQuality",type:"number",default:"0.6",description:"0..1"},{name:"disablePreload",type:"boolean",default:"true",description:"省流量模式下禁用 preload / prefetch 预取"},{name:"qualityParam",type:"string",default:'"quality"',description:'query param name, e.g. "quality" or "q"'}],lq=`const LazyImage = withPlugins(LazyLoadImageCore, [
  createDataSaverPlugin({
    respectSaveData: true, // 尊重系统省流开关
    fallbackQuality: 0.5,  // 省流时质量降到 0.5
    qualityParam: "q",     // 追加 ?q=0.5
  }),
]);`,cq=[{name:"尊重系统省流",description:"检测到 saveData 时自动降质并禁用预加载，仅在省流模式下生效。",config:{respectSaveData:!0,fallbackQuality:.5,qualityParam:"q"}},{name:"始终省流",description:"忽略系统开关，始终追加低质量参数，适合极端省流场景。",config:{respectSaveData:!1,fallbackQuality:.4,disablePreload:!0}}],uq=["读取 navigator.connection.saveData，开启时自动降质","自动追加质量查询参数（如 ?q=0.6）","可选禁用预加载以进一步省流"],dq=["移动端弱流量用户自动减负","按运营策略全局降质"],pq=["依赖业务 CDN 支持对应质量参数，否则参数无效。","respectSaveData=false 时按 fallbackQuality 强制降质（无视系统开关）。","与 ImageOptimization 叠加时，省流质量会进一步覆盖优化质量。"],mq={name:oq,description:rq,since:iq,tags:sq,config:aq,example:lq,examples:cq,features:uq,useCases:dq,notes:pq},gq=typeof window<"u"&&window.requestIdleCallback?window.requestIdleCallback:(e,t)=>setTimeout(e,(t==null?void 0:t.timeout)??0);function fq(e={}){const{enabled:t=!0,timeoutMs:n=600}=e;return{name:"decode-after-idle",version:"1.0.0",config:e,hooks:{onLoadSuccess:o=>{var i;if(!t)return;const r=(i=o.imageRef)==null?void 0:i.current;!r||!r.decode||gq(async()=>{var s;try{await((s=r.decode)==null?void 0:s.call(r))}catch{}},{timeout:n})},transformProps:o=>({...o,decoding:"async"})}}}const hq="DecodeAfterIdlePlugin",yq="空闲解码：图片加载成功后延迟到浏览器空闲时段再执行 img.decode()，避免大图解码阻塞主线程，提升交互流畅度。",vq="2.0.0",wq=["loading","加载策略","解码","性能"],xq=[{name:"enabled",type:"boolean",default:"true",description:"是否启用空闲解码"},{name:"timeoutMs",type:"number",default:"600",description:"最长等待空闲的兜底时间(ms)"}],bq=`import { LazyLoadImageCore, createDecodeAfterIdlePlugin, withPlugins } from "vane-lazy-image";

const LazyImage = withPlugins(LazyLoadImageCore, [
  createDecodeAfterIdlePlugin({ enabled: true, timeoutMs: 1000 }),
]);

<LazyImage src="https://picsum.photos/seed/decode/1200/800" alt="空闲解码示例" />`,Pq=[{name:"默认空闲解码",description:"成功后于空闲时段执行 decode，并设置 decoding=async。",src:"https://picsum.photos/seed/decode/1200/800",config:{}},{name:"自定义超时",description:"放宽最长等待空闲时间到 1000ms。",src:"https://picsum.photos/seed/decode-timeout/1200/800",config:{timeoutMs:1e3}}],$q=["成功后 requestIdleCallback 内调用 img.decode()",'自动设置 decoding="async"',"requestIdleCallback 不可用时回退 setTimeout"],Sq=["图片密集型信息流防止解码卡顿","首屏后延迟解码，优先保证交互响应"],Cq=["timeoutMs 控制最长等待空闲的兜底时间","decode 失败被静默忽略，不影响显示"],Lq={name:hq,description:yq,since:vq,tags:wq,config:xq,example:bq,examples:Pq,features:$q,useCases:Sq,notes:Cq};function is(e,t="anonymous"){if(typeof document>"u")return;const n=`lli-preconnect-${e}`;if(document.getElementById(n))return;const o=document.createElement("link");o.id=n,o.rel="preconnect",o.href=e,t&&(o.crossOrigin=t),document.head.appendChild(o)}function eu(e){if(typeof document>"u")return;const t=`lli-preconnect-${e}`,n=document.getElementById(t);n&&n.remove()}function ss(e){try{const t=new URL(e,typeof window<"u"?window.location.origin:"http://localhost");return`${t.protocol}//${t.host}`}catch{return null}}const kq=Gp("lli-preconnect-","已预连");function Iq(e={}){const{showBadge:t=!1}=e;return{name:"preconnect",version:"2.0.0",config:e,hooks:{onMount:n=>{const o=ss(n.src);o&&is(o,e.crossOrigin??"anonymous"),e.domains&&Array.isArray(e.domains)&&e.domains.forEach(r=>is(r,e.crossOrigin??"anonymous"))},onUnmount:n=>{const o=ss(n.src);o&&eu(o),e.domains&&Array.isArray(e.domains)&&e.domains.forEach(r=>eu(r))},onSrcChange:(n,o,r)=>{const i=ss(r);i&&is(i,e.crossOrigin??"anonymous")},renderOverlay:()=>t?T.createElement(kq):null}}}const _q="PreconnectPlugin",Eq="DNS 预连接：提前与图片域名建立连接，可配置跨域。",Rq="2.0.0",zq=["loading","加载策略"],Dq=[{name:"domains",type:"string[]",description:"额外预连接域名"},{name:"crossOrigin",type:"string | null",description:'"anonymous" | "use-credentials" | null'},{name:"showBadge",type:"boolean",default:"false",description:"是否在卡片上显示「已预连 N」徽标（便于观察注入效果）"}],Oq=`const LazyImage = withPlugins(LazyLoadImageCore, [
  createPreconnectPlugin({
    domains: ["https://cdn.example.com", "https://img.example.com"],
    crossOrigin: "anonymous",
  }),
]);`,jq=[{name:"基础预连接",description:"为图片 CDN 域名提前建连，消除首图 DNS/TLS 往返，更快出现。",config:{domains:["https://picsum.photos"],crossOrigin:"anonymous",showBadge:!0}},{name:"多域名预连接",description:"同时预连接多个静态资源域名，适合跨 CDN 的图片源。",config:{domains:["https://picsum.photos","https://fastly.picsum.photos"],crossOrigin:"anonymous"}}],Mq=['挂载时注入 <link rel="preconnect">，提前完成 DNS/TCP/TLS 握手',"支持跨域凭证配置（crossOrigin: anonymous / use-credentials）","与浏览器默认预连接策略互补，相同域名不会重复注入"],Tq=["图片托管在独立 CDN 域名时，消除首图握手延迟","瀑布流列表首屏涉及多个静态资源域名"],Nq=["仅注入预连接提示，不保证一定建连，实际收益取决于浏览器调度。","不宜预连接过多域名，以免占用有限的连接资源。","已在本插件内去重，重复传入相同域名只会注入一次。"],Aq={name:_q,description:Eq,since:Rq,tags:zq,config:Dq,example:Oq,examples:jq,features:Mq,useCases:Tq,notes:Nq},Bq=Object.assign(WG,{meta:eq}),Uq=Object.assign(nq,{meta:mq}),Fq=Object.assign(fq,{meta:Lq}),Wq=Object.assign(Iq,{meta:Aq});function Vq(e={}){const{durationMs:t=400,easing:n="ease"}=e;return{name:"fade-in",version:"1.0.0",config:e,hooks:{onMount:o=>{let r=0;const i=()=>{var a;const s=(a=o.imageRef)==null?void 0:a.current;if(!s){r++<60&&requestAnimationFrame(i);return}try{s.style.opacity="0",s.style.transition=`opacity ${t}ms ${n}`}catch{}};i()},onLoadSuccess:o=>{var i;const r=(i=o.imageRef)==null?void 0:i.current;if(r)try{r.style.opacity="1"}catch{}}}}}const Hq="FadeInPlugin",Gq="加载完成后淡入显示，可自定义时长与缓动函数。",qq="2.0.0",Qq=["visual","视觉"],Kq=[{name:"durationMs",type:"number",default:"400",description:"淡入时长 ms"},{name:"easing",type:"string",default:"ease",description:"缓动函数（CSS easing）"}],Yq=`// 加载完成后淡入
const FadeImage = withPlugins(LazyLoadImageCore, [
  createFadeInPlugin({ durationMs: 450 }),
]);

<FadeImage src="https://picsum.photos/seed/fadein/600/400" alt="淡入" />;`,Xq=[{name:"默认淡入",description:"450ms 标准 ease 淡入，干净利落。",src:"https://picsum.photos/seed/fadein-default/600/400",config:{durationMs:450}},{name:"慢速缓出",description:"800ms ease-out，让图片「缓缓浮现」。",src:"https://picsum.photos/seed/fadein-slow/600/400",config:{durationMs:800,easing:"ease-out"}}],Zq=["加载成功淡入显示","时长可调","缓动函数可定制（ease / ease-out / cubic-bezier 等）","与 BlurUp 互补"],Jq=["画廊 / 相册图片入场","内容型站点图片显现","与滚动进入联动的柔和出现","任意需要「渐显」的场景"],eQ=["easing 接受任意 CSS timing-function 字符串。","与 Transition 不同，FadeIn 仅处理「淡入」单一维度，更简单。"],tQ={name:Hq,description:Gq,since:qq,tags:Qq,config:Kq,example:Yq,examples:Xq,features:Zq,useCases:Jq,notes:eQ},nQ=Object.assign(Vq,{meta:tQ});var oQ=Object.defineProperty,rQ=(e,t,n)=>t in e?oQ(e,t,{enumerable:!0,configurable:!0,writable:!0,value:n}):e[t]=n,On=(e,t,n)=>rQ(e,typeof t!="symbol"?t+"":t,n);let ml=class{constructor(t,n){if(On(this,"cache"),On(this,"maxSize"),On(this,"onEvict"),t<=0)throw new Error("LRUCache maxSize must be greater than 0");this.cache=new Map,this.maxSize=t,this.onEvict=n}get(t){const n=this.cache.get(t);return n!==void 0&&(this.cache.delete(t),this.cache.set(t,n)),n}set(t,n){if(this.cache.has(t)&&this.cache.delete(t),this.cache.set(t,n),this.cache.size>this.maxSize){const o=this.cache.keys().next().value;if(o!==void 0){const r=this.cache.get(o);if(this.cache.delete(o),this.onEvict&&r!==void 0)try{this.onEvict(o,r)}catch(i){console.warn("[LRUCache] onEvict callback error:",i)}}}}delete(t){const n=this.cache.get(t),o=this.cache.delete(t);if(o&&this.onEvict&&n!==void 0)try{this.onEvict(t,n)}catch(r){console.warn("[LRUCache] onEvict callback error:",r)}return o}has(t){return this.cache.has(t)}clear(){this.onEvict&&this.cache.forEach((t,n)=>{try{this.onEvict(n,t)}catch(o){console.warn("[LRUCache] onEvict callback error:",o)}}),this.cache.clear()}get size(){return this.cache.size}keys(){return this.cache.keys()}values(){return this.cache.values()}forEach(t){this.cache.forEach(t)}};class iQ{constructor(t=1e3,n=10){On(this,"samples",[]),On(this,"windowSize"),On(this,"maxSamples"),this.windowSize=t,this.maxSamples=n}addSample(t){const n=Date.now();this.samples.push({bytes:t,timestamp:n});const o=n-this.windowSize;this.samples=this.samples.filter(r=>r.timestamp>o),this.samples.length>this.maxSamples&&this.samples.shift()}getSpeed(){if(this.samples.length<2)return 0;const t=this.samples[0],n=this.samples[this.samples.length-1],o=n.bytes-t.bytes,r=(n.timestamp-t.timestamp)/1e3;return r<=0?0:o/r}estimateTimeRemaining(t,n){const o=this.getSpeed();return o<=0||n<=0?0:(n-t)/o}reset(){this.samples=[]}}const yr=new ml(It.CACHE_SIZE_INFLIGHT),mn=new ml(It.CACHE_SIZE_CONTROLLERS,(e,t)=>{try{t.abort()}catch{}}),as=new ml(It.CACHE_SIZE_OBJECT_URLS,(e,t)=>{try{URL.revokeObjectURL(t)}catch{}});function sQ(e={}){const{enabled:t=!0,cacheKeyFn:n,timeout:o=It.TIMEOUT,maxRetries:r=It.MAX_RETRIES,retryDelay:i=It.RETRY_DELAY,retryBackoff:s=It.RETRY_BACKOFF}=e,a=v=>{l(v.src)},l=v=>{const w=n?n(v):v,b=mn.get(w);if(b){try{b.abort()}catch{}mn.delete(w)}},c=v=>{u(v.src)},u=v=>{const w=n?n(v):v,b=as.get(w);if(b){try{URL.revokeObjectURL(b)}catch{}as.delete(w)}},d=v=>{var w,b;try{(w=v.sharedData)!=null&&w.has("fetch-loader:object-url")&&v.sharedData.delete("fetch-loader:object-url"),(b=v.sharedData)!=null&&b.has("fetch-loader:blob")&&v.sharedData.delete("fetch-loader:blob")}catch{}};async function p(v,w,b=0){try{const h=fetch(v,{signal:w}),g=new Promise((P,$)=>{setTimeout(()=>{$(new Error(`Fetch timeout after ${o}ms`))},o)}),y=await Promise.race([h,g]);if(!y.ok)throw y.status>=sa.CLIENT_ERROR_MIN&&y.status<sa.CLIENT_ERROR_MAX?new Error(`HTTP ${y.status}: ${y.statusText}`):new Error(`Server error: ${y.status}`);return y}catch(h){if(w.aborted||h.name==="AbortError"||b>=r||h.message&&(h.message.includes("404")||h.message.includes("403")||h.message.includes("401")))throw h;const g=i*Math.pow(s,b);if(console.debug(`[FetchLoader] Retrying (${b+1}/${r}) after ${g}ms for ${v}`),await new Promise(y=>setTimeout(y,g)),w.aborted)throw new Error("Request aborted during retry delay");return p(v,w,b+1)}}async function f(v){const w=v.src,b=n?n(w):w;if(yr.has(b))return yr.get(b);const h=(async()=>{var $,C,L;const g=new AbortController,{signal:y}=g;mn.set(b,g);const P=new iQ;try{const k=await p(w,y);if(!k.body){mn.delete(b);return}const M=k.headers.get("content-length"),E=M?parseInt(M,10):0,F=k.body.getReader(),H=[];let O=0;try{for(;;){const{done:me,value:ee}=await F.read();if(me)break;if(ee){H.push(ee),O+=ee.length,P.addSample(O);const _={loaded:O,total:E,percent:E>0?Math.round(O/E*100):0,indeterminate:E===0,speed:P.getSpeed(),estimatedTime:P.estimateTimeRemaining(O,E),timestamp:Date.now()};($=v.bus)==null||$.emit("progress",_)}}}finally{F.releaseLock()}const j=new Blob(H),V=URL.createObjectURL(j);as.set(b,V),mn.delete(b);try{(C=v.sharedData)==null||C.set("fetch-loader:blob",j),(L=v.sharedData)==null||L.set("fetch-loader:object-url",V)}catch{}return V}catch(k){if(mn.delete(b),k.name==="AbortError"||y.aborted)return;console.warn(`[FetchLoader] Failed to load ${w}:`,k.message);return}finally{yr.delete(b)}})();return yr.set(b,h),h}return{name:"fetch-loader",version:"1.1.0",description:"fetch 流式加载并返回 objectURL；失败返回 undefined（P1-6）",priority:10,timeout:0,config:e,hooks:{async onLoad(v){if(t)try{return await f(v)}catch(w){console.warn("[FetchLoader] onLoad error:",w);return}},onSrcChange(v,w){l(w),u(w),d(v)},onUnmount(v){a(v),c(v),d(v)}}}}const aQ="FetchLoaderPlugin",lQ="fetch 流式加载器：将图片以 blob/objectURL 形式加载，支持进度上报（speed/ETA）、超时、指数退避重试、请求去重与 objectURL 自动回收。高优先级（domain priority 10），先于其他插件执行。",cQ="2.0.0",uQ=["loading","加载策略"],dQ=[{name:"enabled",type:"boolean",default:"true",description:"是否启用 fetch 加载（关闭后走浏览器默认加载）"},{name:"cacheKeyFn",type:"(src: string) => string",description:"自定义去重键，默认使用 src"},{name:"maxCacheSize",type:"number",description:"in-flight 请求缓存最大条目数"},{name:"maxControllers",type:"number",description:"AbortController 缓存上限，淘汰时自动 abort"},{name:"maxObjectUrls",type:"number",description:"objectURL 缓存上限，淘汰时自动 revokeObjectURL"},{name:"timeout",type:"number",default:"30000",description:"单次请求超时（毫秒）"},{name:"maxRetries",type:"number",default:"3",description:"最大重试次数（4xx 不重试）"},{name:"retryDelay",type:"number",default:"1000",description:"首次重试延迟（毫秒）"},{name:"retryBackoff",type:"number",default:"2",description:"重试退避倍数"}],pQ=`const LazyImage = withPlugins(LazyLoadImageCore, [
  createFetchLoaderPlugin({
    timeout: 20000,    // 20s 超时
    maxRetries: 5,     // 最多重试 5 次
    retryBackoff: 2,   // 指数退避
  }),
]);`,mQ=[{name:"默认 fetch 加载",description:"流式加载 + 真实进度（速度 / ETA）+ 自动去重与 objectURL 回收。",config:{timeout:3e4,maxRetries:3,retryBackoff:2}},{name:"弱网增强重试",description:"更长超时与更多重试，适合不稳定网络环境。",config:{timeout:45e3,maxRetries:6,retryDelay:1500,retryBackoff:2}}],gQ=["以 fetch 把图片读为 Blob/objectURL，支持流式进度（速度 / ETA）","请求超时 + 指数退避重试（4xx 不重试）","in-flight 请求去重、AbortController / objectURL 自动回收","高优先级（domain priority 10），先于其它插件执行"],fQ=["需要真实下载进度条的大图 / 原图","不稳定网络下需要重试保障"],hQ=["关闭 enabled 则走浏览器默认 <img> 加载。","objectURL 由插件在卸载 / 淘汰时自动 revoke，避免内存泄漏。","cacheKeyFn 为函数，需在“用法示例”中以代码传入；静态预览使用纯配置。"],yQ={name:aQ,description:lQ,since:cQ,tags:uQ,config:dQ,example:pQ,examples:mQ,features:gQ,useCases:fQ,notes:hQ},vQ=Object.assign(sQ,{meta:yQ}),wQ="CacheIDBPlugin",xQ="IndexedDB 持久缓存：跨会话缓存图片 Blob/dataURL，支持 TTL。",bQ="2.0.0",PQ=["cache","缓存"],$Q=[{name:"enabled",type:"boolean",default:"true",description:"是否启用 IndexedDB 缓存（关闭后每次都走网络）"},{name:"dbName",type:"string",default:'"LLI-Cache"',description:"IndexedDB 数据库名，多实例共用同一个库"},{name:"storeName",type:"string",default:'"images"',description:"对象仓库名，缓存条目存在该 store 下"},{name:"ttlMs",type:"number",default:"604800000",description:"过期时间（毫秒）"},{name:"debug",type:"boolean",description:"是否输出读写 / 命中调试日志"}],SQ=`const LazyImage = withPlugins(LazyLoadImageCore, [
  createIDBCachePlugin({
    dbName: "LLI-Cache",
    storeName: "images",
    ttlMs: 7 * 24 * 60 * 60 * 1000, // 7 天
  }),
]);`,CQ=[{name:"默认持久缓存",description:"跨会话缓存图片 Blob，刷新 / 重开应用仍命中，秒开头部图。",config:{ttlMs:6048e5}},{name:"自定义库与过期",description:"独立库名隔离业务数据，30 天过期。",config:{dbName:"App-Img",storeName:"photos",ttlMs:2592e6}}],LQ=["用 IndexedDB 持久化图片 Blob / dataURL","支持 TTL（默认 7 天），过期自动清理","优先存 Blob，其次 dataURL，节省空间"],kQ=["离线优先 / PWA 图片缓存","重开应用仍需秒开的头部图、用户头像"],IQ=["仅在支持 IndexedDB 的环境生效，SSR / Node 端无副作用。","与 CachePrewarmPlugin 配合可实现“进入视口即落盘”。","多实例请使用不同 dbName / storeName 避免相互覆盖。"],_Q={name:wQ,description:xQ,since:bQ,tags:PQ,config:$Q,example:SQ,examples:CQ,features:LQ,useCases:kQ,notes:IQ},EQ=Object.assign(KO,{meta:_Q});function RQ(e={}){const{debounceMs:t=200,maxWaitMs:n=1200,onlyWhenIntersecting:o=!0,debug:r=!1}=e,i="viewport-debounce:inView";return{name:"viewport-debounce",version:"2.0.0",config:e,hooks:{onEnterViewport:s=>{var a;try{(a=s.sharedData)==null||a.set(i,!0)}catch{}if(r)try{console.debug("[ViewportDebounce] enter",s.src)}catch{}},onLeaveViewport:s=>{var a;try{(a=s.sharedData)==null||a.set(i,!1)}catch{}if(r)try{console.debug("[ViewportDebounce] leave",s.src)}catch{}},onBeforeLoad:async s=>{var c;const a=Date.now(),l=u=>new Promise(d=>setTimeout(d,u));for(;;){const u=!!((c=s.sharedData)!=null&&c.get(i)),d=Date.now()-a;if(!u&&o&&d<n){if(r)try{console.debug("[ViewportDebounce] aborted (left before stable)",s.src)}catch{}return!1}if(d>=t){if(r)try{console.debug("[ViewportDebounce] stable, proceed",s.src,{elapsed:d})}catch{}return!0}await l(30)}},onUnmount:s=>{var a;try{(a=s.sharedData)==null||a.delete(i)}catch{}}}}}const zQ="ViewportDebouncePlugin",DQ="视口防抖（v2 真实实现）：进入视口后并不立即加载，而是等待元素「稳定停留 debounceMs」才放行；若期间离开视口且未达 maxWaitMs 上限，则中止本次加载，真正避免快速滚动时误加载/重复加载。",OQ="2.0.0",jQ=["viewport","视口与交互","防抖"],MQ=[{name:"debounceMs",type:"number",default:"200",description:"进入视口后需稳定停留的时长（毫秒），到时才放行加载"},{name:"maxWaitMs",type:"number",default:"1200",description:"最长等待上限，避免快速来回一直不加载（饥饿保护）"},{name:"onlyWhenIntersecting",type:"boolean",default:"true",description:"仅在进入视口时门控；若离开且未达 maxWaitMs 则中止本次加载"},{name:"debug",type:"boolean",default:"false",description:"是否输出调试日志"}],TQ=`const StableImage = withPlugins(LazyLoadImageCore, [
  // 进入视口稳定 200ms 才加载，快速划过直接放弃
  createViewportDebouncePlugin({ debounceMs: 200, maxWaitMs: 1200 }),
]);

<StableImage src="https://picsum.photos/id/1015/500/300" alt="视口防抖示例" />;`,NQ=[{name:"默认防抖（200ms）",description:"快速滚动时抑制抖动：元素需稳定停留 200ms 才加载，一闪而过的不加载。",src:"https://picsum.photos/id/1015/500/300",config:{debounceMs:200}},{name:"加大防抖间隔",description:"300ms 间隔，更适合惯性较大的移动端滚动。",src:"https://picsum.photos/id/1020/500/300",config:{debounceMs:300}},{name:"开启调试日志",description:"控制台输出稳定/中止判定日志，便于排查。",src:"https://picsum.photos/id/1025/500/300",config:{debounceMs:200,debug:!0}}],AQ=["门控钩子真正延迟加载到稳定期","快速划过（离开未达上限）中止加载","maxWaitMs 饥饿保护","可调防抖间隔与上限","调试日志输出"],BQ=["快速滚动列表 / 瀑布流","移动端惯性滚动","防止抖动导致的重复加载","仅加载用户真正停留浏览的图片"],UQ=["依赖引擎门控能力（onBeforeLoad 返回 false 中止加载），已在本插件中落地；与 ViewportAware 的 rootMargin 搭配可进一步调优触发时机。"],FQ={name:zQ,description:DQ,since:OQ,tags:jQ,config:MQ,example:TQ,examples:NQ,features:AQ,useCases:BQ,notes:UQ},WQ="CacheMemoryPlugin",VQ="内存 LRU 缓存：会话内缓存图片数据，可配置容量与过期时间。",HQ="2.0.0",GQ=["cache","缓存"],qQ=[{name:"enabled",type:"boolean",default:"true",description:"是否启用内存缓存"},{name:"maxEntries",type:"number",default:"200",description:"LRU 最大条目"},{name:"ttlMs",type:"number",description:"过期时间，默认不过期"},{name:"debug",type:"boolean",default:"false",description:"是否输出 LRU 命中 / 淘汰调试日志"}],QQ=`const LazyImage = withPlugins(LazyLoadImageCore, [
  createMemoryCachePlugin({
    maxEntries: 300,
    ttlMs: 5 * 60 * 1000, // 5 分钟过期
  }),
]);`,KQ=[{name:"默认内存缓存",description:"会话内 LRU 缓存（默认 200 条），同一图片重复访问零网络。",config:{maxEntries:200}},{name:"限定过期时间",description:"5 分钟后条目失效，在命中率与内存占用之间取得平衡。",config:{maxEntries:300,ttlMs:3e5}}],YQ=["会话内 LRU 缓存（默认 200 条）","可选 TTL 过期时间","内存受限时自动淘汰最久未用条目"],XQ=["同一图片在列表 / 详情多处复用","快速来回切换的画廊、相册"],ZQ=["内存缓存不跨会话，刷新页面即失效。","需要跨会话持久请配合 IDBCachePlugin。","命中时直接返回已缓存数据，跳过网络请求。"],JQ={name:WQ,description:VQ,since:HQ,tags:GQ,config:qQ,example:QQ,examples:KQ,features:YQ,useCases:XQ,notes:ZQ},eK=Object.assign(RQ,{meta:FQ}),tK=Object.assign(XO,{meta:JQ});function nK(e,t,n,o){const r=e.src,i=o.get(r);i&&clearTimeout(i);const s=(t.baseDelayMs??500)*Math.pow(2,Math.max(0,n-1)),a=t.jitter?Math.random()*.25*s:0,l=s+a,c=setTimeout(()=>{var d;o.delete(r);const u=(d=e.imageRef)==null?void 0:d.current;if(u)try{const p=`${r}${r.includes("?")?"&":"?"}retry=${Date.now()}&n=${n}`;u.src=p}catch{}},l);o.set(r,c)}function oK(e={}){const{maxRetries:t=2}=e,n=new Map,o=r=>`retry-count:${r}`;return{name:"retry-on-error",version:"1.1.0",description:"图片加载失败后退避重试；计数按 src 隔离、定时器可取消（P2-5）",config:e,hooks:{onLoadError:(r,i)=>{var l,c,u,d;try{(l=r.sharedData)==null||l.set("had-error",!0)}catch{}const s=o(r.src),a=Number(((c=r.sharedData)==null?void 0:c.get(s))??0)+1;if(a<=t)return(u=r.sharedData)==null||u.set(s,a),nK(r,e,a,n),!0;try{(d=r.sharedData)==null||d.set(s,a)}catch{}return!1},onSrcChange:(r,i)=>{const s=n.get(i);s&&(clearTimeout(s),n.delete(i))},onUnmount:()=>{n.forEach(r=>clearTimeout(r)),n.clear()},renderOverlay:r=>{var l;const i=Number(((l=r.sharedData)==null?void 0:l.get(o(r.src)))??0);if(i<=0)return null;const s=i>t,a={position:"absolute",top:6,right:6,zIndex:10,fontSize:12,fontWeight:600,color:"#fff",background:s?"rgba(108,117,125,0.9)":"rgba(255,149,0,0.92)",padding:"2px 8px",borderRadius:4};return T.createElement("div",{style:a},s?`重试失败 (${t})`:`重试中 ${i}/${t}`)}}}}const rK="RetryOnErrorPlugin",iK="失败重试：图片加载失败后按指数退避（可选抖动）自动重试，提升网络抖动 / 瞬时故障下的自愈成功率，并提供重试进度角标。",sK="2.0.0",aK=["network","网络","重试","自愈"],lK=[{name:"maxRetries",type:"number",default:"2",description:"最大重试次数"},{name:"baseDelayMs",type:"number",description:"退避基准毫秒（默认 500）"},{name:"jitter",type:"boolean",description:"是否在退避基础上叠加随机抖动"}],cK=`import { LazyLoadImageCore, createRetryOnErrorPlugin, withPlugins } from "vane-lazy-image";

const LazyImage = withPlugins(LazyLoadImageCore, [
  createRetryOnErrorPlugin({ maxRetries: 3, baseDelayMs: 400, jitter: true }),
]);

// 故意触发失败以观察指数退避重试
<LazyImage src="https://invalid.example.com/x.png" alt="失败重试示例" />`,uK=[{name:"自动重试",description:"失败后指数退避重试，用尽后角标显示『重试失败』（演示用无效地址）。",src:"https://invalid.example.com/retry.png",config:{maxRetries:3,baseDelayMs:400}},{name:"带抖动退避",description:"在指数退避基础上叠加随机抖动，避免重试风暴。",src:"https://invalid.example.com/retry-jitter.png",config:{maxRetries:2,baseDelayMs:600,jitter:!0}}],dK=["指数退避重试：delay = baseDelayMs * 2^(n-1)","可选 jitter 抖动避免重试风暴","角标实时显示『重试中 n/max』与『重试失败(max)』","用尽后放行错误给下游插件（ErrorOverlay / ErrorBadge）"],pK=["弱网 / 瞬时 5xx 自愈","与手动重试（ErrorOverlay）互补"],mK=["maxRetries 默认 2，baseDelayMs 默认 500","重试用 ?retry=时间戳&n=count 防止缓存命中","重试用尽返回 false，错误继续向下游传播"],gK={name:rK,description:iK,since:sK,tags:aK,config:lK,example:cK,examples:uK,features:dK,useCases:pK,notes:mK},fK=Object.assign(oK,{meta:gK});var hK=Object.defineProperty,yK=(e,t,n)=>t in e?hK(e,t,{enumerable:!0,configurable:!0,writable:!0,value:n}):e[t]=n,vK=(e,t,n)=>yK(e,t+"",n);function qp(e,t,n){const{fetchPriority:o="high",as:r="image",imageSrcSet:i,imageSizes:s}=n||{};x.useEffect(()=>{if(!t||!e)return;const a=(()=>{try{return new URL(e,document.baseURI).href}catch{return e}})();if(Array.from(document.querySelectorAll('link[rel="preload"]')).find(c=>c.href===a))return;const l=document.createElement("link");return l.rel="preload",l.as=r,l.href=e,o!=="auto"&&l.setAttribute("fetchpriority",o),i&&(l.setAttribute("imagesrcset",i),s&&l.setAttribute("imagesizes",s)),document.head.appendChild(l),()=>{l.parentNode===document.head&&document.head.removeChild(l)}},[e,t,o,r,i,s])}function wK(e,t){qp(e,t)}function xK(e,t){const n=(t==null?void 0:t.enabled)!==!1,o=(t==null?void 0:t.hookTimeout)??0;return function(...r){if(!n)return e.apply(this,r);if(o>0){const i=setTimeout(()=>{},o);try{const s=e.apply(this,r);return clearTimeout(i),s}catch(s){clearTimeout(i),t!=null&&t.debug&&console.warn(`[sandbox:${t==null?void 0:t.pluginName}] 钩子异常已被捕获`,s);return}}try{return e.apply(this,r)}catch(i){t!=null&&t.debug&&console.warn(`[sandbox:${t==null?void 0:t.pluginName}] 钩子异常已被捕获`,i);return}}}class bK{constructor(){vK(this,"nodes",new Map)}addPlugin(t,n=[],o=[],r=[]){this.nodes.set(t,{deps:[...n],optDeps:[...o],conflicts:[...r]})}detectCycles(){const t=new Set,n=new Set,o=[],r=[],i=l=>{if(n.has(l)){const d=o.indexOf(l);d>=0&&r.push([...o.slice(d),l]);return}if(t.has(l))return;t.add(l),n.add(l),o.push(l);const c=this.nodes.get(l),u=c?[...c.deps,...c.optDeps]:[];for(const d of u)this.nodes.has(d)&&i(d);o.pop(),n.delete(l)};for(const l of this.nodes.keys())i(l);const s=new Set,a=[];for(const l of r){const c=[...l].sort().join("|");s.has(c)||(s.add(c),a.push(l))}return a}getTopologicalOrder(t){if(this.detectCycles().length>0)return[];const n=new Map;for(const i of t)n.set(i,0);for(const i of t){const s=this.nodes.get(i);if(s)for(const a of s.deps)n.has(a)&&n.set(a,(n.get(a)||0)+1)}const o=[];for(const[i,s]of n)s===0&&o.push(i);o.sort();const r=[];for(;o.length;){const i=o.shift();r.push(i);const s=this.nodes.get(i);if(s)for(const a of s.deps){if(!n.has(a))continue;const l=(n.get(a)||0)-1;n.set(a,l),l===0&&(o.push(a),o.sort())}}return r.length===t.length?r:[]}checkConflicts(t,n){const o=this.nodes.get(t);if(!o)return{hasConflict:!1,conflicts:[]};const r=o.conflicts.filter(i=>n.has(i));return{hasConflict:r.length>0,conflicts:r}}checkDependencies(t,n){const o=this.nodes.get(t);if(!o)return{satisfied:!0,missing:[]};const r=o.deps.filter(i=>!n.has(i));return{satisfied:r.length===0,missing:r}}}const PK="2.0.0",ls=Object.freeze(Object.defineProperty({__proto__:null,DependencyResolver:bK,FETCH_LOADER_DEFAULTS:It,FILTER_PRESETS:MO,HTTP_STATUS:sa,IDBCache:Fp,IMAGE_FETCH_PRIORITY:mO,IMAGE_LOADING_STRATEGY:pO,INTERSECTION_OBSERVER_DEFAULTS:uO,LAZY_IMAGE_CORE_VERSION:PK,LazyLoadImageCore:jp,MemoryCache:ni,PERFORMANCE_DEFAULTS:cO,PLUGIN_EVENTS:lO,PLUGIN_PRIORITY:aO,THROTTLE_DELAYS:dO,addGlobalContextListener:Tp,cleanupObserverPool:oO,compareVersions:Fn,createA11yPlugin:V4,createAdaptiveQualityPlugin:GW,createAltTextPlugin:nV,createAnimatedCursorPlugin:NW,createAntiHotlinkPlugin:qW,createAspectRatioSpacerPlugin:bV,createAuthPlugin:QW,createBadgePlugin:wW,createBatteryAwarePlugin:BW,createBlurUpPlugin:OV,createBorderGlowPlugin:xW,createCDNFallbackPlugin:KW,createCachePrewarmPlugin:x9,createCaptionPlugin:w7,createColorExtractionPlugin:bW,createColorSwatchPlugin:NG,createComparisonPlugin:PW,createConcurrencyControlPlugin:Bq,createCropPlugin:$W,createCustomEffectsPlugin:OW,createDataSaverPlugin:Uq,createDecodeAfterIdlePlugin:Fq,createDepthMapPlugin:AW,createDominantColorPlugin:SW,createDownloadButtonPlugin:FG,createErrorBadgePlugin:oV,createErrorOverlayPlugin:rV,createErrorTrackingPlugin:iV,createEventLoggerPlugin:sV,createExifOrientationPlugin:UW,createFadeInPlugin:nQ,createFallbackImagePlugin:b9,createFetchLoaderPlugin:vQ,createFilterPlugin:CW,createGalleryPlugin:x7,createGlitchEffectPlugin:MW,createHoverPrefetchPlugin:FW,createHoverZoomPlugin:b7,createIDBCachePlugin:EQ,createImageOptimizationPlugin:YW,createInventoryStatusPlugin:TG,createLocalizationPlugin:UG,createLqipPlugin:LW,createMemoryCachePlugin:tK,createMemoryPressureAbortPlugin:WW,createMorphPlugin:TW,createNetworkAnalyticsPlugin:XW,createOfflinePlugin:w9,createOverlayInfoPlugin:kW,createParallaxPlugin:IW,createPerformanceMonitor:dl,createPerformanceMonitorPlugin:aV,createPreconnectPlugin:Wq,createPredictiveLoadingPlugin:VW,createPriceTagPlugin:jG,createPriorityLoadingPlugin:HW,createProgressOverlayPlugin:_W,createPromoBadgePlugin:MG,createRedactionPlugin:EW,createResponsivePlugin:ZW,createRetryOnErrorPlugin:fK,createRevealAnimationPlugin:jW,createSEOPlugin:H4,createScrollIdlePlugin:W4,createSkeletonPlugin:P7,createSocialSharePlugin:AG,createSvgPlaceholderPlugin:RW,createTransitionPlugin:zW,createUserBehaviorPlugin:lV,createVideoPosterPlugin:BG,createViewportAwarePlugin:eV,createViewportDebouncePlugin:eK,createViewportDwellPlugin:tV,createWatermarkPlugin:DW,createWebPPlugin:JW,formatVersion:e4,getGlobalContextStats:bO,getGlobalDeviceInfo:xO,getGlobalMonitorManager:QD,getGlobalNetworkInfo:ti,getObserverPoolDetails:nO,getObserverPoolStats:eO,globalContext:qo,isValidVersion:JO,isVersionEqual:t4,isVersionGreater:n4,isVersionInRange:ZO,isVersionLess:o4,observeElement:Op,observerPool:Vt,parseVersion:Hp,resetGlobalMonitorManager:KD,resetObserverPoolStats:rO,resolveDependencyOrder:pl,setObserverPoolDebugMode:tO,unobserveElement:JD,useImagePreload:wK,useLCPPreload:qp,withPlugins:DO,wrapPluginHook:xK},Symbol.toStringTag,{value:"Module"})),LY={ecommerce:"电商核心",interaction:"视觉效果与交互",visual:"视觉与效果",perf:"性能与网络",robust:"稳健性与错误处理",viewport:"视口与交互",a11y:"可访问性与 SEO",other:"其他"},$K={PriceTagPlugin:{category:"ecommerce",title:"价格标签"},PromoBadgePlugin:{category:"ecommerce",title:"促销徽标"},InventoryStatusPlugin:{category:"ecommerce",title:"库存状态"},ColorSwatchPlugin:{category:"ecommerce",title:"颜色样本"},SocialSharePlugin:{category:"ecommerce",title:"社交分享"},VideoPosterPlugin:{category:"ecommerce",title:"视频封面"},LocalizationPlugin:{category:"ecommerce",title:"本地化"},DownloadButtonPlugin:{category:"ecommerce",title:"下载按钮"},RevealAnimationPlugin:{category:"interaction",title:"揭示动画"},GlitchEffectPlugin:{category:"interaction",title:"故障特效"},MorphPlugin:{category:"interaction",title:"形变"},AnimatedCursorPlugin:{category:"interaction",title:"动态光标"},DepthMapPlugin:{category:"interaction",title:"深度图 (3D)"},SkeletonPlugin:{category:"visual",title:"骨架屏"},BorderGlowPlugin:{category:"visual",title:"边框辉光"},CaptionPlugin:{category:"visual",title:"图片说明"},FilterPlugin:{category:"visual",title:"滤镜"},GalleryPlugin:{category:"visual",title:"画廊"},OverlayInfoPlugin:{category:"visual",title:"信息蒙层"},ProgressOverlayPlugin:{category:"visual",title:"进度蒙层"},BlurUpPlugin:{category:"visual",title:"模糊渐显"},FadeInPlugin:{category:"visual",title:"淡入"},TransitionPlugin:{category:"visual",title:"过渡"},ParallaxPlugin:{category:"visual",title:"视差"},ColorExtractionPlugin:{category:"visual",title:"色彩提取"},RedactionPlugin:{category:"visual",title:"打码"},HoverZoomPlugin:{category:"visual",title:"悬停放大"},WatermarkPlugin:{category:"visual",title:"水印"},CustomEffectsPlugin:{category:"visual",title:"自定义效果"},PreconnectPlugin:{category:"perf",title:"预连接"},PriorityLoadingPlugin:{category:"perf",title:"优先级加载"},CachePrewarmPlugin:{category:"perf",title:"缓存预热"},CacheMemoryPlugin:{category:"perf",title:"内存缓存"},CacheIDBPlugin:{category:"perf",title:"IndexedDB 缓存"},ConcurrencyControlPlugin:{category:"perf",title:"并发控制"},ScrollIdlePlugin:{category:"perf",title:"滚动空闲"},NetworkAnalyticsPlugin:{category:"perf",title:"网络分析"},PredictiveLoadingPlugin:{category:"perf",title:"预测加载"},DataSaverPlugin:{category:"perf",title:"省流量"},ImageOptimizationPlugin:{category:"perf",title:"图片优化"},FetchLoaderPlugin:{category:"perf",title:"Fetch 加载"},ErrorBadgePlugin:{category:"robust",title:"错误徽标"},ErrorOverlayPlugin:{category:"robust",title:"错误蒙层"},FallbackImagePlugin:{category:"robust",title:"兜底图"},RetryOnErrorPlugin:{category:"robust",title:"失败重试"},ErrorTrackingPlugin:{category:"robust",title:"错误追踪"},OfflinePlugin:{category:"robust",title:"离线"},MemoryPressureAbortPlugin:{category:"robust",title:"内存压力中止"},DecodeAfterIdlePlugin:{category:"robust",title:"空闲解码"},AntiHotlinkPlugin:{category:"robust",title:"防盗链"},CDNFallbackPlugin:{category:"robust",title:"CDN 回退"},AuthPlugin:{category:"robust",title:"鉴权"},ViewportAwarePlugin:{category:"viewport",title:"视口感知"},ViewportDebouncePlugin:{category:"viewport",title:"视口防抖"},ViewportDwellPlugin:{category:"viewport",title:"视口驻留"},HoverPrefetchPlugin:{category:"viewport",title:"悬停预取"},UserBehaviorPlugin:{category:"viewport",title:"用户行为"},A11yPlugin:{category:"a11y",title:"无障碍"},AltTextPlugin:{category:"a11y",title:"替代文本"},ExifOrientationPlugin:{category:"a11y",title:"EXIF 方向"},AspectRatioSpacerPlugin:{category:"a11y",title:"宽高比占位"},ResponsivePlugin:{category:"a11y",title:"响应式"},SEOPlugin:{category:"a11y",title:"SEO"},BadgePlugin:{category:"other",title:"徽标"},DominantColorPlugin:{category:"other",title:"主色"},EventLoggerPlugin:{category:"other",title:"事件日志"},LQIPPlugin:{category:"other",title:"LQIP 低清预览"},PerformanceMonitorPlugin:{category:"other",title:"性能监控"},AdaptiveQualityPlugin:{category:"other",title:"自适应质量"},BatteryAwarePlugin:{category:"other",title:"电量感知"},CropPlugin:{category:"other",title:"裁剪"},ComparisonPlugin:{category:"other",title:"对比"},SvgPlaceholderPlugin:{category:"other",title:"SVG 占位"},WebPPlugin:{category:"other",title:"WebP"}};function SK(e){return e.replace(/Plugin$/,"").replace(/([a-z0-9])([A-Z])/g,"$1-$2").replace(/([A-Z])([A-Z][a-z])/g,"$1-$2").toLowerCase()}const tu=Object.assign({"../../../src/custom-plugins/A11yPlugin/doc.json":P0,"../../../src/custom-plugins/AdaptiveQualityPlugin/doc.json":M0,"../../../src/custom-plugins/AltTextPlugin/doc.json":Y0,"../../../src/custom-plugins/AnimatedCursorPlugin/doc.json":uy,"../../../src/custom-plugins/AntiHotlinkPlugin/doc.json":Sy,"../../../src/custom-plugins/AspectRatioSpacerPlugin/doc.json":Ny,"../../../src/custom-plugins/AuthPlugin/doc.json":Zy,"../../../src/custom-plugins/BadgePlugin/doc.json":pv,"../../../src/custom-plugins/BatteryAwarePlugin/doc.json":Lv,"../../../src/custom-plugins/BlurUpPlugin/doc.json":Bv,"../../../src/custom-plugins/BorderGlowPlugin/doc.json":e1,"../../../src/custom-plugins/CDNFallbackPlugin/doc.json":g1,"../../../src/custom-plugins/CacheIDBPlugin/doc.json":I1,"../../../src/custom-plugins/CacheMemoryPlugin/doc.json":F1,"../../../src/custom-plugins/CachePrewarmPlugin/doc.json":nw,"../../../src/custom-plugins/CaptionPlugin/doc.json":hw,"../../../src/custom-plugins/CarouselPlugin/doc.json":_w,"../../../src/custom-plugins/ColorExtractionPlugin/doc.json":Ww,"../../../src/custom-plugins/ColorSwatchPlugin/doc.json":ox,"../../../src/custom-plugins/ComparisonPlugin/doc.json":yx,"../../../src/custom-plugins/ConcurrencyControlPlugin/doc.json":Rx,"../../../src/custom-plugins/CounterPlugin/doc.json":Hx,"../../../src/custom-plugins/CropPlugin/doc.json":ib,"../../../src/custom-plugins/CustomEffectsPlugin/doc.json":wb,"../../../src/custom-plugins/DataSaverPlugin/doc.json":Db,"../../../src/custom-plugins/DecodeAfterIdlePlugin/doc.json":qb,"../../../src/custom-plugins/DepthMapPlugin/doc.json":aP,"../../../src/custom-plugins/DominantColorPlugin/doc.json":bP,"../../../src/custom-plugins/DownloadButtonPlugin/doc.json":jP,"../../../src/custom-plugins/ErrorBadgePlugin/doc.json":KP,"../../../src/custom-plugins/ErrorOverlayPlugin/doc.json":c$,"../../../src/custom-plugins/ErrorTrackingPlugin/doc.json":$$,"../../../src/custom-plugins/EventLoggerPlugin/doc.json":T$,"../../../src/custom-plugins/ExifOrientationPlugin/doc.json":X$,"../../../src/custom-plugins/FadeInPlugin/doc.json":dS,"../../../src/custom-plugins/FallbackImagePlugin/doc.json":CS,"../../../src/custom-plugins/FavoritePlugin/doc.json":NS,"../../../src/custom-plugins/FetchLoaderPlugin/doc.json":ZS,"../../../src/custom-plugins/FilterPlugin/doc.json":pC,"../../../src/custom-plugins/FullscreenPlugin/doc.json":LC,"../../../src/custom-plugins/GalleryPlugin/doc.json":BC,"../../../src/custom-plugins/GlitchEffectPlugin/doc.json":e2,"../../../src/custom-plugins/HotspotPlugin/doc.json":g2,"../../../src/custom-plugins/HoverPrefetchPlugin/doc.json":I2,"../../../src/custom-plugins/HoverZoomPlugin/doc.json":F2,"../../../src/custom-plugins/ImageOptimizationPlugin/doc.json":nL,"../../../src/custom-plugins/IndicatorPlugin/doc.json":fL,"../../../src/custom-plugins/InventoryStatusPlugin/doc.json":_L,"../../../src/custom-plugins/LQIPPlugin/doc.json":WL,"../../../src/custom-plugins/LocalizationPlugin/doc.json":ok,"../../../src/custom-plugins/MemoryPressureAbortPlugin/doc.json":hk,"../../../src/custom-plugins/MorphPlugin/doc.json":Ek,"../../../src/custom-plugins/NetworkAnalyticsPlugin/doc.json":Vk,"../../../src/custom-plugins/OfflinePlugin/doc.json":rI,"../../../src/custom-plugins/OverlayInfoPlugin/doc.json":vI,"../../../src/custom-plugins/ParallaxPlugin/doc.json":zI,"../../../src/custom-plugins/PerformanceMonitorPlugin/doc.json":GI,"../../../src/custom-plugins/PreconnectPlugin/doc.json":s_,"../../../src/custom-plugins/PredictiveLoadingPlugin/doc.json":x_,"../../../src/custom-plugins/PriceTagPlugin/doc.json":O_,"../../../src/custom-plugins/PriorityLoadingPlugin/doc.json":Q_,"../../../src/custom-plugins/ProgressOverlayPlugin/doc.json":lE,"../../../src/custom-plugins/PromoBadgePlugin/doc.json":PE,"../../../src/custom-plugins/RedactionPlugin/doc.json":ME,"../../../src/custom-plugins/ResponsivePlugin/doc.json":YE,"../../../src/custom-plugins/RetryOnErrorPlugin/doc.json":uR,"../../../src/custom-plugins/RevealAnimationPlugin/doc.json":SR,"../../../src/custom-plugins/SEOPlugin/doc.json":NR,"../../../src/custom-plugins/ScrollIdlePlugin/doc.json":ZR,"../../../src/custom-plugins/SkeletonPlugin/doc.json":p5,"../../../src/custom-plugins/SocialSharePlugin/doc.json":L5,"../../../src/custom-plugins/Spin360Plugin/doc.json":A5,"../../../src/custom-plugins/SvgPlaceholderPlugin/doc.json":J5,"../../../src/custom-plugins/ThumbPreloadPlugin/doc.json":m3,"../../../src/custom-plugins/ThumbSyncPlugin/doc.json":L3,"../../../src/custom-plugins/TransitionPlugin/doc.json":B3,"../../../src/custom-plugins/UserBehaviorPlugin/doc.json":ez,"../../../src/custom-plugins/VideoPosterPlugin/doc.json":gz,"../../../src/custom-plugins/ViewportAwarePlugin/doc.json":Iz,"../../../src/custom-plugins/ViewportDebouncePlugin/doc.json":Fz,"../../../src/custom-plugins/ViewportDwellPlugin/doc.json":nD,"../../../src/custom-plugins/WatermarkPlugin/doc.json":hD,"../../../src/custom-plugins/WebPPlugin/doc.json":ED,"../../../src/custom-plugins/ZoomControlPlugin/doc.json":WD}),Uo=Object.keys(tu).map(e=>{const t=e.split("/").slice(-2)[0],n=tu[e],o=$K[t];if(!o)return null;const r="create"+n.name;return{id:SK(t),dir:t,title:o.title,category:o.category,factoryName:r,example:n.example||"",description:n.description||"",tags:n.tags||[],config:n.config||[],examples:n.examples||[],features:n.features||[],useCases:n.useCases||[],notes:n.notes||[],doc:n}}).filter(Boolean),CK={ecommerce:[],interaction:[],visual:[],perf:[],robust:[],viewport:[],a11y:[],other:[]};for(const e of Uo)CK[e.category].push(e);function LK(e){return Uo.find(t=>t.id===e)}function kY(e){const t=LK(e);if(!t)return;const n=ls[t.factoryName];if(typeof n=="function")return n;for(const o of Object.keys(ls)){const r=ls[o];if(typeof r=="function"&&r.meta&&r.meta.name===t.dir)return r}}const Qp=[{id:"error-resilience",title:"错误韧性组合",description:"错误覆盖层 + 徽标 + 兜底图 + 自动重试 + 事件日志，构建失败的优雅降级链路。",component:"ComboErrorResilienceDemo",plugins:[{name:"ErrorOverlay 错误覆盖层",role:"加载失败时显示重试遮罩，引导用户重试"},{name:"ErrorBadge 错误徽标",role:"角落错误标记，快速识别失败项"},{name:"FallbackImage 兜底图",role:"加载失败回退到占位图，避免空白"},{name:"RetryOnError 自动重试",role:"失败后按策略自动重连，提升成功率"},{name:"EventLogger 事件日志",role:"记录加载/错误事件，便于监控排查"}],code:`import {
  LazyLoadImageCore,
  createErrorOverlayPlugin,
  createErrorBadgePlugin,
  createFallbackImagePlugin,
  createRetryOnErrorPlugin,
  createEventLoggerPlugin,
  withPlugins,
} from "vane-lazy-image";

const LazyImage = withPlugins(LazyLoadImageCore, [
  createErrorOverlayPlugin({ retryText: "重试" }),
  createErrorBadgePlugin({}),
  createFallbackImagePlugin({ fallbackSrc: "/404.jpg" }),
  createRetryOnErrorPlugin({ maxRetries: 1 }),
  createEventLoggerPlugin({ enabled: true }),
]);

// 用法
<LazyImage src="https://invalid.example.com/not-found.jpg" alt="错误触发示例" />`},{id:"performance",title:"性能与网络组合",description:"预连接 + 加载优先级 + 自适应质量 + 图片优化，端到端加速图片加载。",component:"ComboPerformanceDemo",plugins:[{name:"Preconnect 预连接",role:"提前与图片域名建连，省去 DNS/TLS 往返"},{name:"PriorityLoading 优先级加载",role:"LCP 等关键图高优先级，避免被挤占"},{name:"AdaptiveQuality 自适应质量",role:"按网络/设备动态降质，省流量提速"},{name:"ImageOptimization 图片优化",role:"自动选择最优格式与尺寸"}],code:`import {
  LazyLoadImageCore,
  createPreconnectPlugin,
  createPriorityLoadingPlugin,
  createAdaptiveQualityPlugin,
  createImageOptimizationPlugin,
  withPlugins,
} from "vane-lazy-image";

const LazyImage = withPlugins(LazyLoadImageCore, [
  createPreconnectPlugin({ domains: ["https://picsum.photos"] }),
  createPriorityLoadingPlugin({ priority: "high" }),
  createAdaptiveQualityPlugin({}),
  createImageOptimizationPlugin({}),
]);

// 用法
<LazyImage src="https://picsum.photos/seed/perf-combo/800/600" alt="性能优化示例" />`},{id:"visual-effects",title:"视觉与效果组合",description:"模糊渐显 + 淡入 + 边框辉光 + 图片说明 + 水印，叠加出精致视觉层次。",component:"ComboVisualEffectsDemo",plugins:[{name:"BlurUp 模糊渐显",role:"低清模糊图过渡到清晰大图"},{name:"FadeIn 淡入",role:"加载完成平滑淡入"},{name:"BorderGlow 边框辉光",role:"聚焦时边框发光，突出主体"},{name:"Caption 图片说明",role:"底部说明文字，补充语境"},{name:"Watermark 水印",role:"右下角水印，版权标识"}],code:`import {
  LazyLoadImageCore,
  createBlurUpPlugin,
  createFadeInPlugin,
  createBorderGlowPlugin,
  createCaptionPlugin,
  createWatermarkPlugin,
  withPlugins,
} from "vane-lazy-image";

const LazyImage = withPlugins(LazyLoadImageCore, [
  createBlurUpPlugin({ startBlur: 6, endBlur: 0, durationMs: 450 }),
  createFadeInPlugin({ durationMs: 450 }),
  createBorderGlowPlugin({}),
  createCaptionPlugin({ text: "组合示例：视觉与效果" }),
  createWatermarkPlugin({ text: "DEMO", position: "bottom-right", opacity: 0.6 }),
]);

// 用法
<LazyImage src="https://picsum.photos/seed/visual-combo/800/600" alt="视觉效果示例" />`},{id:"cache-storage",title:"缓存与存储组合",description:"内存 + IndexedDB + 视口预热，构建多级缓存降低重复请求。",component:"ComboCacheDemo",plugins:[{name:"MemoryCache 内存缓存",role:"最快命中，首屏零网络"},{name:"IDBCache IndexedDB 缓存",role:"跨会话持久，重启仍命中"},{name:"CachePrewarm 缓存预热",role:"进入视口即预取，滚动无等待"}],code:`import {
  LazyLoadImageCore,
  createMemoryCachePlugin,
  createIDBCachePlugin,
  createCachePrewarmPlugin,
  withPlugins,
} from "vane-lazy-image";

const LazyImage = withPlugins(LazyLoadImageCore, [
  createMemoryCachePlugin({ maxEntries: 200 }),
  createIDBCachePlugin({}),
  createCachePrewarmPlugin({ trigger: "enter", preferMemory: true }),
]);

// 用法
<LazyImage src="https://picsum.photos/seed/cache-combo/800/600" alt="缓存组合示例" />`},{id:"viewport-interaction",title:"视口与交互组合",description:"视口感知 + 视口防抖 + 悬停预取 + 滚动空闲，协同控制加载时机。",component:"ComboViewportInteractionDemo",plugins:[{name:"ViewportAware 视口感知",role:"进入视口才真正加载"},{name:"ViewportDebounce 视口防抖",role:"抑制滚动抖动，避免频繁触发"},{name:"HoverPrefetch 悬停预取",role:"鼠标悬停提前拉取，零延迟"},{name:"ScrollIdle 滚动空闲",role:"页面空闲后再补加载，不抢主线程"}],code:`import {
  LazyLoadImageCore,
  createViewportAwarePlugin,
  createViewportDebouncePlugin,
  createHoverPrefetchPlugin,
  createScrollIdlePlugin,
  withPlugins,
} from "vane-lazy-image";

const LazyImage = withPlugins(LazyLoadImageCore, [
  createViewportAwarePlugin({}),
  createViewportDebouncePlugin({}),
  createHoverPrefetchPlugin({}),
  createScrollIdlePlugin({}),
]);

// 用法
<LazyImage src="https://picsum.photos/seed/viewport-combo/800/600" alt="视口交互示例" />`},{id:"a11y-seo",title:"可访问性与 SEO 组合",description:"可访问性 + SEO + 宽高比占位 + 响应式 + WebP + 替代文本，提升页面质量。",component:"ComboA11ySeoDemo",plugins:[{name:"A11y 可访问性",role:"补全无障碍属性，适配读屏"},{name:"SEO",role:"注入结构化 SEO 属性"},{name:"AspectRatioSpacer 宽高比占位",role:"预留宽高，杜绝布局抖动"},{name:"Responsive 响应式",role:"srcset 多尺寸自适应屏幕"},{name:"WebP",role:"优先 WebP，体积更小"},{name:"AltText 替代文本",role:"自动补全 alt，利于读屏与 SEO"}],code:`import {
  LazyLoadImageCore,
  createA11yPlugin,
  createSEOPlugin,
  createAspectRatioSpacerPlugin,
  createResponsivePlugin,
  createWebPPlugin,
  createAltTextPlugin,
  withPlugins,
} from "vane-lazy-image";

const LazyImage = withPlugins(LazyLoadImageCore, [
  createA11yPlugin({}),
  createSEOPlugin({}),
  createAspectRatioSpacerPlugin({ ratio: 4 / 3 }),
  createResponsivePlugin({}),
  createWebPPlugin({}),
  createAltTextPlugin({ prefix: "Demo" }),
]);

// 用法
<LazyImage src="https://picsum.photos/seed/a11y-seo-combo/800/600" alt="可访问性与 SEO 组合示例" />`},{id:"visual-effects-plus",title:"视觉增强 Plus",description:"SVG 占位 + Blur-Up + Skeleton + 滤镜 + 悬停放大 + 辉光 + 说明 + 画廊灯箱，重负载视觉叠加。",component:"ComboVisualEffectsPlusDemo",plugins:[{name:"SvgPlaceholder SVG 占位",role:"动画 SVG 骨架，加载前即可见"},{name:"BlurUp 模糊渐显",role:"模糊到清晰过渡"},{name:"Skeleton 骨架屏",role:"shimmer 占位，提示加载中"},{name:"Filter 滤镜",role:"悬停灰度滤镜，焦点突出"},{name:"HoverZoom 悬停放大",role:"悬停轻微放大，增强交互"},{name:"BorderGlow 边框辉光",role:"边框发光，强调主体"},{name:"Caption 图片说明",role:"底部说明文字"},{name:"Gallery 画廊",role:"点击灯箱预览大图"}],code:`import {
  LazyLoadImageCore,
  createSvgPlaceholderPlugin,
  createBlurUpPlugin,
  createSkeletonPlugin,
  createFilterPlugin,
  createHoverZoomPlugin,
  createBorderGlowPlugin,
  createCaptionPlugin,
  createGalleryPlugin,
  withPlugins,
} from "vane-lazy-image";

const LazyImage = withPlugins(LazyLoadImageCore, [
  createSvgPlaceholderPlugin({ svgContent: "<svg>…</svg>", background: "transparent", showWhen: "loading", fadeOutOnLoaded: true }),
  createBlurUpPlugin({ startBlur: 8, endBlur: 0, durationMs: 450 }),
  createSkeletonPlugin({ type: "shimmer", showWhen: "loading", borderRadius: 8, zIndex: 1 }),
  createFilterPlugin({ filter: "grayscale", amount: 1, hover: true }),
  createHoverZoomPlugin({ scale: 1.12, durationMs: 180 }),
  createBorderGlowPlugin({ color: "rgba(0,153,255,0.6)", blurPx: 12, spreadPx: 2 }),
  createCaptionPlugin({ text: "视觉增强组合（Plus）", position: "bottom" }),
  createGalleryPlugin({ buttonText: "Open", enableLightbox: true }),
]);

// 用法
<LazyImage src="https://picsum.photos/seed/visual-plus/800/600" alt="视觉效果 Plus 示例" />`},{id:"responsive-seo-webp",title:"响应式 + SEO + WebP",description:"响应式 srcset + WebP 优先 + SEO/LCP 优化 + 宽高比占位 + 模糊渐显，兼顾体验与排名。",component:"ComboResponsiveSeoWebPDemo",plugins:[{name:"Responsive 响应式",role:"按视口下发多尺寸 srcset"},{name:"WebP",role:"浏览器支持时优先 WebP"},{name:"SEO",role:"LCP 标记 + preload，提升排名"},{name:"AspectRatioSpacer 宽高比占位",role:"预留宽高，防抖动"},{name:"Caption 图片说明",role:"底部说明文字"},{name:"BlurUp 模糊渐显",role:"模糊到清晰过渡"}],code:`import {
  LazyLoadImageCore,
  createResponsivePlugin,
  createWebPPlugin,
  createSEOPlugin,
  createAspectRatioSpacerPlugin,
  createCaptionPlugin,
  createBlurUpPlugin,
  withPlugins,
} from "vane-lazy-image";

const LazyImage = withPlugins(LazyLoadImageCore, [
  createResponsivePlugin({ variants: [{ width: 400 }, { width: 800 }, { width: 1200 }], sizes: "(max-width: 800px) 100vw, 800px" }),
  createWebPPlugin({ replaceExtensions: ["jpg", "jpeg", "png"], testSupport: true }),
  createSEOPlugin({ altFallback: "示例图片", priority: "lcp", preload: true, title: "演示图像" }),
  createAspectRatioSpacerPlugin({ ratio: 4 / 3 }),
  createCaptionPlugin({ text: "响应式 + WebP + SEO 组合" }),
  createBlurUpPlugin({ startBlur: 8, endBlur: 0, durationMs: 450 }),
]);

// 用法
<LazyImage src="https://picsum.photos/seed/responsive-combo/800/600" alt="响应式 SEO WebP 组合示例" />`},{id:"engine-perf",title:"性能优化综合（引擎层）",description:"离线降级 + 预连接 + 缓存预热 + 优先级加载，串成端到端链路，并实时展示 GlobalContext 在线/离线与 ObserverPool 共享。",component:"ComboEnginePerfDemo",plugins:[{name:"Offline 离线降级",role:"由 GlobalContext online/offline 驱动徽标与缓存回退"},{name:"Preconnect 预连接",role:"提前与图片域名建连，省 DNS/TLS 往返"},{name:"CachePrewarm 缓存预热",role:"进入视口即预取，滚动无等待"},{name:"PriorityLoading 优先级加载",role:"关键图高优先级，避免被挤占"}],code:`import {
  LazyLoadImageCore,
  createOfflinePlugin,
  createPreconnectPlugin,
  createCachePrewarmPlugin,
  createPriorityLoadingPlugin,
  withPlugins,
} from "vane-lazy-image";

const LazyImage = withPlugins(LazyLoadImageCore, [
  createOfflinePlugin({ showBadge: true }),
  createPreconnectPlugin({ domains: ["https://picsum.photos"], showBadge: true }),
  createCachePrewarmPlugin({ trigger: "enter", showBadge: true }),
  createPriorityLoadingPlugin({ priority: "high" }),
]);

// 用法
<LazyImage src="https://picsum.photos/seed/engine-perf/800/600" alt="性能优化综合示例" />
// 在 DevTools → Network 勾选 Offline，离线徽标会即时出现（GlobalContext online/offline 驱动）`},{id:"interaction-overlay",title:"交互与叠层组合",description:"视口感知 + 防抖 + 悬停预取 + 滚动空闲 + 进度蒙层 + 信息蒙层 + 骨架，强化交互与反馈。",component:"ComboInteractionOverlayDemo",plugins:[{name:"ViewportAware 视口感知",role:"进入视口才加载"},{name:"ViewportDebounce 视口防抖",role:"抑制滚动抖动"},{name:"HoverPrefetch 悬停预取",role:"悬停预拉取下一张"},{name:"ScrollIdle 滚动空闲",role:"空闲后补加载"},{name:"ProgressOverlay 进度蒙层",role:"加载进度条与百分比"},{name:"OverlayInfo 信息蒙层",role:"底部信息条，展示来源"},{name:"Skeleton 骨架屏",role:"shimmer 占位，提示加载中"}],code:`import {
  LazyLoadImageCore,
  createViewportAwarePlugin,
  createViewportDebouncePlugin,
  createHoverPrefetchPlugin,
  createScrollIdlePlugin,
  createProgressOverlayPlugin,
  createOverlayInfoPlugin,
  createSkeletonPlugin,
  withPlugins,
} from "vane-lazy-image";

const LazyImage = withPlugins(LazyLoadImageCore, [
  createViewportAwarePlugin(),
  createViewportDebouncePlugin({ debounceMs: 160 }),
  createHoverPrefetchPlugin({ target: "container", trigger: "mouseenter", as: "image", max: 1, dedupe: true, getNextSrc: (ctx) => ctx.src }),
  createScrollIdlePlugin({ idleMs: 160, maxWaitMs: 1200, onlyWhenIntersecting: true }),
  createProgressOverlayPlugin({ showWhen: "loading", height: 3, color: "#4a90e2", showPercentText: true }),
  createOverlayInfoPlugin({ content: (ctx) => \`Interact • \${new URL(ctx.src, window.location.origin).pathname}\`, position: "bottom", background: "rgba(0,0,0,0.35)", color: "#fff", showWhen: "loading", zIndex: 4 }),
  createSkeletonPlugin({ type: "shimmer", showWhen: "loading", borderRadius: 6, zIndex: 1 }),
]);

// 用法
<LazyImage src="https://picsum.photos/seed/interaction-combo/800/600" alt="交互与叠层组合示例" />`}],Kp=[{id:"plugin-sandbox",title:"插件沙箱",description:"自包含 try/catch 沙箱隔离插件钩子执行。",component:"PluginSandboxDemo"},{id:"performance-monitoring",title:"性能监控系统",description:"全局性能监控与报告。",component:"PerformanceMonitoringDemo"},{id:"engine-infra",title:"引擎性能基础设施",description:"GlobalContext 全局上下文 + ObserverPool 共享观察池的实时可观察面板。",component:"EngineInfraDemo"},{id:"plugin-hot-reload",title:"插件热更新",description:"运行时注册 / 注销插件。",component:"PluginHotReloadDemo"},{id:"dependency-resolver",title:"依赖解析器",description:"拓扑排序 / 环检测 / 冲突校验。",component:"DependencyResolverDemo"}],kK=Object.assign({"../combos/ComboA11ySeoDemo.tsx":()=>S(()=>import("./ComboA11ySeoDemo-CwcBLilK.js"),__vite__mapDeps([0,1]),import.meta.url),"../combos/ComboCacheDemo.tsx":()=>S(()=>import("./ComboCacheDemo-CHWqD5PJ.js"),__vite__mapDeps([2,1]),import.meta.url),"../combos/ComboEnginePerfDemo.tsx":()=>S(()=>import("./ComboEnginePerfDemo-BKMkcCI2.js"),__vite__mapDeps([3,1]),import.meta.url),"../combos/ComboErrorResilienceDemo.tsx":()=>S(()=>import("./ComboErrorResilienceDemo-C8vFSIs2.js"),__vite__mapDeps([4,1]),import.meta.url),"../combos/ComboInteractionOverlayDemo.tsx":()=>S(()=>import("./ComboInteractionOverlayDemo-COQayuTz.js"),__vite__mapDeps([5,1]),import.meta.url),"../combos/ComboPerformanceDemo.tsx":()=>S(()=>import("./ComboPerformanceDemo-BMj088OY.js"),__vite__mapDeps([6,1]),import.meta.url),"../combos/ComboResponsiveSeoWebPDemo.tsx":()=>S(()=>import("./ComboResponsiveSeoWebPDemo-qLPF8l8t.js"),__vite__mapDeps([7,1]),import.meta.url),"../combos/ComboViewportInteractionDemo.tsx":()=>S(()=>import("./ComboViewportInteractionDemo-CAZthHBd.js"),__vite__mapDeps([8,1]),import.meta.url),"../combos/ComboVisualEffectsDemo.tsx":()=>S(()=>import("./ComboVisualEffectsDemo-2Wi9CSdg.js"),__vite__mapDeps([9,1]),import.meta.url),"../combos/ComboVisualEffectsPlusDemo.tsx":()=>S(()=>import("./ComboVisualEffectsPlusDemo-DN4-8xN-.js"),__vite__mapDeps([10,1]),import.meta.url)}),IK=Object.assign({"../combos/ComboA11ySeoDemo.tsx":Hh,"../combos/ComboCacheDemo.tsx":Gh,"../combos/ComboEnginePerfDemo.tsx":qh,"../combos/ComboErrorResilienceDemo.tsx":Qh,"../combos/ComboInteractionOverlayDemo.tsx":Kh,"../combos/ComboPerformanceDemo.tsx":Yh,"../combos/ComboResponsiveSeoWebPDemo.tsx":Xh,"../combos/ComboViewportInteractionDemo.tsx":Zh,"../combos/ComboVisualEffectsDemo.tsx":Jh,"../combos/ComboVisualEffectsPlusDemo.tsx":e0}),_K=Object.assign({"../advanced/DependencyResolverDemo.tsx":()=>S(()=>import("./DependencyResolverDemo-DAJ2HYnt.js"),__vite__mapDeps([11,1,12]),import.meta.url),"../advanced/EngineInfraDemo.tsx":()=>S(()=>import("./EngineInfraDemo-Dm3ey2-g.js"),__vite__mapDeps([13,1]),import.meta.url),"../advanced/PerformanceMonitoringDemo.tsx":()=>S(()=>import("./PerformanceMonitoringDemo-C81t1p88.js"),__vite__mapDeps([14,1]),import.meta.url),"../advanced/PluginHotReloadDemo.tsx":()=>S(()=>import("./PluginHotReloadDemo-CiUyD3gL.js"),__vite__mapDeps([15,1]),import.meta.url),"../advanced/PluginSandboxDemo.tsx":()=>S(()=>import("./PluginSandboxDemo-j20Alu6e.js"),__vite__mapDeps([16,12,1]),import.meta.url)}),EK=Object.assign({"../advanced/DependencyResolverDemo.tsx":t0,"../advanced/EngineInfraDemo.tsx":n0,"../advanced/PerformanceMonitoringDemo.tsx":o0,"../advanced/PluginHotReloadDemo.tsx":r0,"../advanced/PluginSandboxDemo.tsx":i0}),RK=Object.assign({"../scenarios/VirtualGridDemo.tsx":()=>S(()=>import("./VirtualGridDemo-CO2VigSe.js"),__vite__mapDeps([17,18,1]),import.meta.url),"../scenarios/VirtualHorizontalListDemo.tsx":()=>S(()=>import("./VirtualHorizontalListDemo-CfRi_Ra_.js"),__vite__mapDeps([19,18,1]),import.meta.url),"../scenarios/VirtualVerticalListDemo.tsx":()=>S(()=>import("./VirtualVerticalListDemo-DrKUAc9o.js"),__vite__mapDeps([20,18,1]),import.meta.url)}),zK=Object.assign({"../scenarios/VirtualGridDemo.tsx":s0,"../scenarios/VirtualHorizontalListDemo.tsx":a0,"../scenarios/VirtualVerticalListDemo.tsx":l0});function gl(e,t,n){const o=e[`../${n}`];return{Stage:o?x.lazy(()=>o().then(i=>({default:i.default}))):()=>null,source:t[`../${n}`]??""}}const DK=Qp.map(e=>{const t=`combos/${e.component}.tsx`,{Stage:n,source:o}=gl(kK,IK,t);return{meta:{slug:e.id,title:e.title,group:"combo",description:e.description,plugins:e.plugins,code:e.code},Stage:n,file:`${e.component}.tsx`,source:o}}),OK=Kp.map(e=>{const t=`advanced/${e.component}.tsx`,{Stage:n,source:o}=gl(_K,EK,t);return{meta:{slug:e.id,title:e.title,group:"advanced",description:e.description},Stage:n,file:`${e.component}.tsx`,source:o}}),jK=[{slug:"virtual-vertical",title:"虚拟滚动 · 纵向列表",file:"scenarios/VirtualVerticalListDemo.tsx"},{slug:"virtual-horizontal",title:"虚拟滚动 · 横向列表",file:"scenarios/VirtualHorizontalListDemo.tsx"},{slug:"virtual-grid",title:"虚拟滚动 · 网格",file:"scenarios/VirtualGridDemo.tsx"}],MK=jK.map(e=>{const{Stage:t,source:n}=gl(RK,zK,e.file);return{meta:{slug:e.slug,title:e.title,group:"scenario"},Stage:t,file:e.file.split("/").pop(),source:n}}),oi=[...DK,...OK,...MK],TK=["combo","advanced","scenario"];function IY(e){return oi.filter(t=>t.meta.group===e)}function _Y(e){return oi.find(t=>t.meta.slug===e)}const Yp={combo:{label:"组合示例",hint:"多插件协同的真实业务组合"},advanced:{label:"高级功能",hint:"底层能力与引擎设施"},scenario:{label:"场景示例",hint:"虚拟滚动等长列表组合"}},NK="import|from|export|default|function|return|const|let|var|new|if|else|for|of|in|while|switch|case|break|continue|type|interface|extends|implements|as|satisfies|await|async|throw|try|catch|finally|class|typeof|instanceof|delete|void|yield",AK="true|false|null|undefined|this|super",BK="number|string|boolean|object|any|unknown|never|React|HTMLElement|void",nu=new RegExp([String.raw`(\/\/[^\n]*|\/\*[\s\S]*?\*\/)`,String.raw`(\`(?:\\[\s\S]|[^\\\`])*\`|"(?:\\[\s\S]|[^\\"])*"|'(?:\\[\s\S]|[^\\'])*')`,String.raw`\b(${NK})\b`,String.raw`\b(${AK})\b`,String.raw`\b(${BK})\b`,String.raw`(<\/?[A-Za-z][\w.$]*)`,String.raw`\b(\d+(?:\.\d+)?)\b`].join("|"),"g"),ou=["tok-comment","tok-string","tok-kw","tok-lit","tok-type","tok-tag","tok-num"];function UK(e){const t=[];let n=0;nu.lastIndex=0;let o;for(;o=nu.exec(e);){o.index>n&&t.push({text:e.slice(n,o.index),cls:null});const r=ou.findIndex((i,s)=>o[s+1]!==void 0);t.push({text:o[0],cls:r>=0?ou[r]:null}),n=o.index+o[0].length}return n<e.length&&t.push({text:e.slice(n),cls:null}),t}function ru(e){try{const t=document.createElement("textarea");t.value=e,t.setAttribute("readonly",""),t.style.position="fixed",t.style.opacity="0",document.body.appendChild(t),t.select();const n=document.execCommand("copy");return document.body.removeChild(t),n}catch{return!1}}function FK({code:e,title:t="tsx",collapseAfter:n=24,maxHeight:o}){const[r,i]=x.useState("idle"),[s,a]=x.useState(!1),l=x.useMemo(()=>e.replace(/\s+$/,"").split(`
`),[e]),c=n>0&&l.length>n,u=c&&!s?l.slice(0,n).join(`
`):e,d=x.useMemo(()=>UK(u),[u]),p=x.useCallback(async()=>{var v;let f=!1;if((v=navigator.clipboard)!=null&&v.writeText)try{await navigator.clipboard.writeText(e),f=!0}catch{f=ru(e)}else f=ru(e);i(f?"ok":"fail"),window.setTimeout(()=>i("idle"),1600)},[e]);return m.jsxs("div",{className:"code",children:[m.jsxs("div",{className:"code-head",children:[m.jsx("span",{children:t}),m.jsxs("span",{style:{display:"flex",gap:6,alignItems:"center"},children:[m.jsxs("span",{children:[l.length," 行"]}),m.jsx("button",{type:"button",className:`code-copy${r==="ok"?" is-ok":r==="fail"?" is-fail":""}`,onClick:p,children:r==="ok"?"已复制":r==="fail"?"复制失败":"复制"})]})]}),m.jsx("pre",{style:o?{maxHeight:o}:{maxHeight:"none"},children:m.jsx("code",{children:d.map((f,v)=>f.cls?m.jsx("span",{className:f.cls,children:f.text},v):m.jsx(T.Fragment,{children:f.text},v))})}),c?m.jsx("button",{type:"button",className:"code-more",onClick:()=>a(f=>!f),children:s?"收起":`展开余下 ${l.length-n} 行`}):null]})}function Xp(e){return e.props??e.config??[]}function WK({doc:e}){var r,i,s;const t=Xp(e),n=e.events??[],o=e.methods??[];return m.jsxs(m.Fragment,{children:[m.jsxs("div",{className:"doc-sec",children:[m.jsx("h5",{children:"属性 Props"}),t.length?m.jsxs("table",{className:"doc-table",children:[m.jsx("thead",{children:m.jsxs("tr",{children:[m.jsx("th",{children:"属性"}),m.jsx("th",{children:"类型"}),m.jsx("th",{children:"默认"}),m.jsx("th",{children:"说明"})]})}),m.jsx("tbody",{children:t.map(a=>m.jsxs("tr",{children:[m.jsx("td",{children:m.jsx("code",{children:a.name})}),m.jsx("td",{children:m.jsx("code",{className:"dim",children:a.type})}),m.jsx("td",{children:m.jsx("code",{className:"dim",children:a.default??"-"})}),m.jsx("td",{children:a.description??"—"})]},a.name))})]}):m.jsx("p",{className:"doc-note",children:"无可配置属性，工厂零参调用即可。"})]}),m.jsxs("div",{className:"doc-sec",children:[m.jsx("h5",{children:"事件 Events"}),n.length?m.jsxs("table",{className:"doc-table",children:[m.jsx("thead",{children:m.jsxs("tr",{children:[m.jsx("th",{children:"事件"}),m.jsx("th",{children:"触发时机"}),m.jsx("th",{children:"说明"})]})}),m.jsx("tbody",{children:n.map(a=>m.jsxs("tr",{children:[m.jsx("td",{children:m.jsx("code",{children:a.name})}),m.jsx("td",{children:a.when}),m.jsx("td",{children:a.description})]},a.name))})]}):m.jsx("p",{className:"doc-note",children:"不参与任何事件。"})]}),m.jsxs("div",{className:"doc-sec",children:[m.jsx("h5",{children:"方法 Methods"}),o.length?m.jsxs("table",{className:"doc-table",children:[m.jsx("thead",{children:m.jsxs("tr",{children:[m.jsx("th",{children:"方法"}),m.jsx("th",{children:"签名"}),m.jsx("th",{children:"说明"})]})}),m.jsx("tbody",{children:o.map(a=>m.jsxs("tr",{children:[m.jsx("td",{children:m.jsx("code",{children:a.name})}),m.jsx("td",{children:m.jsx("code",{className:"dim",children:a.signature})}),m.jsx("td",{children:a.description})]},a.name))})]}):m.jsx("p",{className:"doc-note",children:e.methodsNote??"不调用上下文方法。"})]}),m.jsxs("div",{className:"doc-cols",children:[(r=e.features)!=null&&r.length?m.jsxs("div",{children:[m.jsx("h5",{children:"能做"}),m.jsx("ul",{children:e.features.map(a=>m.jsx("li",{children:a},a))})]}):null,(i=e.useCases)!=null&&i.length?m.jsxs("div",{children:[m.jsx("h5",{children:"适合"}),m.jsx("ul",{children:e.useCases.map(a=>m.jsx("li",{children:a},a))})]}):null,(s=e.notes)!=null&&s.length?m.jsxs("div",{children:[m.jsx("h5",{children:"注意"}),m.jsx("ul",{children:e.notes.map(a=>m.jsx("li",{children:a},a))})]}):null]})]})}function VK({factory:e,priority:t,summary:n,doc:o,defaultOpen:r=!0}){var s,a;const i={props:Xp(o).length,events:((s=o.events)==null?void 0:s.length)??0,methods:((a=o.methods)==null?void 0:a.length)??0};return m.jsxs("details",{className:"api-plug",open:r,children:[m.jsxs("summary",{children:[m.jsx("code",{children:e}),m.jsxs("span",{className:"tag tag-accent",children:["priority ",t]}),m.jsx("span",{className:"api-plug-desc",children:n}),m.jsxs("span",{className:"api-plug-n",children:[i.props," 属性 · ",i.events," 事件 · ",i.methods," 方法"]})]}),m.jsx("div",{className:"api-plug-body",children:m.jsx(WK,{doc:o})})]})}const HK=/create[A-Z]\w*Plugin/g;function GK(e){return(e.match(/create[A-Z]\w*Plugin/)??[e])[0]}function Zp(e){return e.dir?`create${e.dir}`:GK(e.factory)}function qK(e){return new Set(e.match(HK)??[])}function QK(e,t){const n=qK(e);return t.filter(o=>n.has(Zp(o))).sort((o,r)=>o.priority-r.priority)}function KK({source:e,plugins:t,heading:n="本页用到的插件"}){const o=x.useMemo(()=>QK(e,t),[e,t]);return o.length===0?null:m.jsxs("section",{className:"api-sec",children:[m.jsxs("div",{className:"api-sec-head",children:[m.jsxs("h2",{className:"api-sec-title",children:[n," · ",o.length," 个"]}),m.jsxs("p",{className:"api-sec-sub",children:["就是上面代码里装配的全部成员。属性是工厂参数，事件是父组件传进来的回调， 方法是插件读取 / 调用的上下文能力 —— 表内容与 ",m.jsx("code",{children:"doc.json"})," 同源，随包发布。"]})]}),o.map(r=>m.jsx(VK,{factory:Zp(r),priority:r.priority,summary:r.summary??r.doc.description??"",doc:r.doc},r.factory))]})}const YK=Uo.map((e,t)=>({factory:e.factoryName,priority:t,summary:e.description,doc:e.doc}));function XK({entry:e,order:t}){const{meta:n,Stage:o,file:r,source:i}=e;return m.jsxs("section",{className:"page","data-demo":n.slug,children:[m.jsxs("div",{className:"page-header",children:[m.jsxs("div",{style:{display:"flex",alignItems:"center",gap:10,marginBottom:6},children:[m.jsx("span",{style:{fontFamily:"var(--ff-mono, monospace)",fontSize:"0.8em",color:"var(--text-2)",border:"1px solid var(--accent-line)",borderRadius:6,padding:"1px 8px"},children:String(t).padStart(2,"0")}),m.jsx("span",{style:{fontSize:"0.78em",color:"var(--accent-2)",letterSpacing:.04*1+"em"},children:Yp[n.group].label})]}),m.jsx("h1",{className:"page-title",children:n.title}),n.description?m.jsx("p",{className:"page-desc",children:n.description}):null]}),m.jsx("div",{className:"demo-stage-wrap",children:m.jsx(x.Suspense,{fallback:m.jsx("div",{className:"loading",children:"加载中…"}),children:m.jsx(o,{})})}),i?m.jsxs("div",{className:"demo-source",children:[m.jsxs("h4",{className:"block-title",children:["完整源码 · ",r]}),m.jsx(FK,{code:i,title:r})]}):null,i?m.jsx(KK,{source:i,plugins:YK}):null]})}const ZK=[{id:"a1-poster-wall",code:"A1",cat:"vod",title:"竖版海报墙",ref:{site:"olehdtv",page:"影视列表页",url:"https://www.olehdtv.com/index.php/vod/type/id/2.html"},pain:"一屏 20 张 2:3 竖图，首屏那几张直接决定 LCP；占位没做好就是满屏跳动。",tone:"dark",plugs:[{fn:"createPriorityLoadingPlugin",arg:'{ priority: "high" }',why:"首屏海报压过下游请求"},{fn:"createAspectRatioSpacerPlugin",arg:"{ ratio: 2 / 3 }",why:"2:3 占位，加载前后零抖动"},{fn:"createBlurUpPlugin",arg:"{ startBlur: 14, endBlur: 0, durationMs: 520 }",why:"低清糊图先出，避免大片留白"},{fn:"createFadeInPlugin",arg:'{ durationMs: 320, easing: "ease-out" }',why:"边缘不发灰，切换更顺"}]},{id:"a2-episode-row",code:"A2",cat:"vod",title:"剧集选集横滑",ref:{site:"爱奇艺 / olehdtv",page:"播放页选集条",url:"https://www.olehdtv.com/index.php/vod/type/id/2.html"},pain:"手指一滑过 16 集，若不加约束会同时发起十几个请求，抢掉正片的带宽。",tone:"dark",plugs:[{fn:"createViewportAwarePlugin",arg:'{ rootMargin: "120px", once: true }',why:"只在进入视口时开始加载"},{fn:"createConcurrencyControlPlugin",arg:'{ maxConcurrent: 4, scope: "global" }',why:"横滑瞬间的请求洪峰压平"},{fn:"createMemoryCachePlugin",arg:"{ maxEntries: 120, ttlMs: 1800000 }",why:"来回滑不重复请求"},{fn:"createSkeletonPlugin",arg:'{ type: "shimmer", borderRadius: 4 }',why:"空槽有稳定的视觉重量"}]},{id:"a3-recommend-side",code:"A3",cat:"vod",title:"播放页相关推荐",ref:{site:"Netflix / 爱奇艺",page:"播放页右侧推荐列",url:"https://www.olehdtv.com/index.php/vod/type/id/2.html"},pain:"正片在播，侧栏却还在发请求；滚到底一批，滚回来又一批。",tone:"dark",plugs:[{fn:"createViewportDebouncePlugin",arg:"{ debounceMs: 200, onlyWhenIntersecting: true }",why:"滚动停稳再发请求"},{fn:"createIDBCachePlugin",arg:'{ dbName: "vane-vod", ttlMs: 259200000 }',why:"跨会话复用，回看不发请求"},{fn:"createSkeletonPlugin",arg:'{ type: "shimmer", borderRadius: 4 }',why:"侧栏不会突然长高"}]},{id:"a4-cast-avatar",code:"A4",cat:"vod",title:"演职人员头像",ref:{site:"影视详情页",page:"演职人员区块",url:"https://www.olehdtv.com/index.php/vod/type/id/2.html"},pain:"演员库的图常年失效、比例五花八门，裁圆之后边缘还容易露出白底。",tone:"dark",plugs:[{fn:"createCropPlugin",arg:"{ enabled: true, focusPoint: { x: 0.5, y: 0.4 } }",why:"按脸部中心裁方图"},{fn:"createFallbackImagePlugin",arg:'{ fallbackSrc: "…/cast-fallback" }',why:"缺图不留破图占位"},{fn:"createColorExtractionPlugin",arg:"{ setContainerBg: true, sampleSize: 6 }",why:"主色铺底，圆形边缘不露白"}],note:"第 4 位演员故意给了失效地址，可直接看到兜底链路。"},{id:"a5-paid-poster",code:"A5",cat:"vod",title:"会员专享海报（鉴权）",ref:{site:"会员专区",page:"付费墙海报",url:"https://www.olehdtv.com/index.php/vod/type/id/2.html"},pain:"付费内容走私有图源，凭证过期就 401；破图或白屏都会直接掉付费转化。",tone:"dark",plugs:[{fn:"createAuthPlugin",arg:'{ tokenParam: "access_token" }',why:"把登录态拼进图片地址"},{fn:"createRetryOnErrorPlugin",arg:"{ maxRetries: 2, baseDelayMs: 400 }",why:"凭证刚续期时的瞬时失败可自愈"},{fn:"createErrorOverlayPlugin",arg:'{ retryText: "重新鉴权" }',why:"失败要给明确出口"}],note:"依赖演示站受保护接口（pnpm serve:demo）；token 换成 expired-token 即进入 401 失败态。"},{id:"a6-tiered-quality",code:"A6",cat:"vod",title:"分档清晰度",ref:{site:"影视详情页",page:"剧照区",url:"https://www.olehdtv.com/index.php/vod/type/id/2.html"},pain:"同一张剧照，桌面要 1280、手机 3G 只该给 400；一套写死就是两头不讨好。",tone:"dark",plugs:[{fn:"createAdaptiveQualityPlugin",arg:"{ lowQ: 40, highQ: 80, saveDataQuality: 35 }",why:"按网络类型定质量"},{fn:"createResponsivePlugin",arg:"{ variants: [400, 800, 1200], sizes }",why:"生成 srcset 交给浏览器挑"},{fn:"createDataSaverPlugin",arg:"{ respectSaveData: true, fallbackQuality: 0.6 }",why:"尊重系统省流量开关"}],note:"图床模板是 picsum 的 /宽/高，真实项目替换 buildSrc 即可。"}],JK=[{id:"c1-bili-cover-grid",code:"C1",cat:"video",title:"推荐流封面栅格",ref:{site:"bilibili",page:"首页推荐流",url:"https://www.bilibili.com/"},pain:"16:9 封面 + 右下时长胶囊；一屏十几条，抢占不到视口就不该发请求。",tone:"light",plugs:[{fn:"createAspectRatioSpacerPlugin",arg:"{ ratio: 16 / 9 }",why:"封面比例固定，栅格不塌"},{fn:"createBadgePlugin",arg:'{ text: dur, position: "bottom-right" }',why:"时长胶囊，逐条装配"},{fn:"createViewportDwellPlugin",arg:"{ dwellMs: 180, onlyWhenIntersecting: true }",why:"快速滑过不算真正看到"},{fn:"createFadeInPlugin",arg:"{ durationMs: 260 }",why:"白底上的切换更柔和"},{fn:"createVideoPosterPlugin",arg:"{ playInModal: true }",why:"置顶条点封面起播"}],note:"时长逐条不同，用 useMemo 固定 withPlugins 的组件身份，避免重渲染整块重挂。"},{id:"c2-hero-banner",code:"C2",cat:"video",title:"首页运营 Banner",ref:{site:"bilibili / YouTube",page:"首页顶部轮播",url:"https://www.youtube.com/"},pain:"整站 LCP 就是这张大图，晚 300ms 就是指标上的一次降级。",tone:"light",plugs:[{fn:"createPriorityLoadingPlugin",arg:'{ priority: "high" }',why:"唯一该抢带宽的图"},{fn:"createPreconnectPlugin",arg:'{ domains: ["https://picsum.photos"] }',why:"提前建连省一个 RTT"},{fn:"createLqipPlugin",arg:"{ lqipSrc: (src) => …, blur: 16 }",why:"20px 低清先铺满"}]},{id:"c3-watch-side-list",code:"C3",cat:"video",title:"接下来播放列",ref:{site:"YouTube",page:"播放页右侧列表",url:"https://www.youtube.com/"},pain:"滚动时一帧十几个请求，直接和正在播放的视频抢带宽。",tone:"dark",plugs:[{fn:"createScrollIdlePlugin",arg:"{ idleMs: 120, maxWaitMs: 900 }",why:"滚动停了才放行"},{fn:"createViewportAwarePlugin",arg:'{ rootMargin: "160px", once: true }',why:"提前一屏但与滚动解耦"},{fn:"createMemoryCachePlugin",arg:"{ maxEntries: 80 }",why:"切视频不重复拉封面"}]},{id:"c4-uploader-avatar",code:"C4",cat:"video",title:"UP 主头像（直播中）",ref:{site:"bilibili",page:"UP 主卡片",url:"https://www.bilibili.com/"},pain:"头像小、数量多、缺图率高；直播中还要有状态信号。",tone:"light",plugs:[{fn:"createCropPlugin",arg:"{ focusPoint: { x: 0.5, y: 0.35 } }",why:"脸部居中裁方"},{fn:"createBorderGlowPlugin",arg:'{ color: "rgba(251,114,153,.75)" }',why:"直播中的信号灯"},{fn:"createFallbackImagePlugin",arg:"{ fallbackSrc: … }",why:"缺图有人形兜底"}]},{id:"c5-hover-preview",code:"C5",cat:"video",title:"悬停起播预览",ref:{site:"bilibili / YouTube",page:"封面悬停预览",url:"https://www.bilibili.com/"},pain:"悬停 300ms 才真的要预览，但这 300ms 里把下一帧取回来，体验差别巨大。",tone:"dark",plugs:[{fn:"createHoverPrefetchPlugin",arg:'{ trigger: "mouseenter", max: 2 }',why:"悬停即预取下一帧"},{fn:"createFetchLoaderPlugin",arg:"{ enabled: true, timeout: 20000 }",why:"拿到进度、可中断、可复用"},{fn:"createTransitionPlugin",arg:"{ durationMs: 260 }",why:"帧切换不闪"}],note:"真实项目把「下一帧」换成视频首帧图或雪碧图分片。"},{id:"c6-saver-mode",code:"C6",cat:"video",title:"移动端省流模式",ref:{site:"bilibili",page:"移动端省流",url:"https://www.bilibili.com/"},pain:"用户开着省流量、电量只剩 15%，这时还按桌面规格拉图就是纯粹的浪费。",tone:"dark",plugs:[{fn:"createDataSaverPlugin",arg:"{ respectSaveData: true, fallbackQuality: 0.6 }",why:"尊重 Save-Data"},{fn:"createBatteryAwarePlugin",arg:"{ lowBatteryThreshold: 0.2, downgradeWidth: 640 }",why:"低电量降档"},{fn:"createNetworkAnalyticsPlugin",arg:"{ trackCDN: true }",why:"量化省了多少字节"}]}],eY=[{id:"b1-jd-search-grid",code:"B1",cat:"ecommerce",title:"搜索结果双列流",ref:{site:"jd.com",page:"搜索结果页",url:"https://www.jd.com/"},pain:"一屏 20 张 1:1 主图，来回切排序会重复拉图，请求洪峰还会挤掉首屏。",tone:"light",plugs:[{fn:"createMemoryCachePlugin",arg:"{ maxEntries: 240, ttlMs: 900000 }",why:"切排序不重复请求"},{fn:"createSkeletonPlugin",arg:'{ type: "shimmer" }',why:"灰块占位，栅格不塌"},{fn:"createConcurrencyControlPlugin",arg:"{ maxConcurrent: 6 }",why:"20 张图压平请求洪峰"},{fn:"createFadeInPlugin",arg:"{ durationMs: 220 }",why:"白底上切换更柔和"}]},{id:"b2-sku-gallery-zoom",code:"B2",cat:"ecommerce",title:"商详主图联动",ref:{site:"jd.com",page:"商品详情页",url:"https://www.jd.com/"},pain:"4 张主图来回切，切一次拉一次；放大镜做过头就是拖影。",tone:"light",plugs:[{fn:"createGalleryPlugin",arg:"{ enableLightbox: true }",why:"点开看大图"},{fn:"createHoverZoomPlugin",arg:"{ scale: 1.08, durationMs: 180 }",why:"轻放大不出拖影"},{fn:"createColorSwatchPlugin",arg:"{ maxColors: 5 }",why:"色卡即 SKU 入口"},{fn:"createPreconnectPlugin",arg:'{ domains: ["https://picsum.photos"] }',why:"提前建连"}]},{id:"b3-flash-sale",code:"B3",cat:"ecommerce",title:"秒杀主推位",ref:{site:"jd.com",page:"秒杀会场",url:"https://www.jd.com/"},pain:"同一张图上要同时挂价格、促销、库存、进度四个信息层，还不能互相遮挡。",tone:"light",plugs:[{fn:"createPriorityLoadingPlugin",arg:'{ priority: "high" }',why:"会场唯一大图"},{fn:"createPriceTagPlugin",arg:"{ price: 1299, originalPrice: 2599 }",why:"价格 + 省钱额"},{fn:"createPromoBadgePlugin",arg:'{ type: "hot", pulse: true }',why:"促销标呼吸"},{fn:"createInventoryStatusPlugin",arg:'{ status: "low-stock" }',why:"库存紧张"},{fn:"createProgressOverlayPlugin",arg:"{ showPercentText: true }",why:"真实百分比进度"},{fn:"createBadgePlugin",arg:'{ text: "已售 2.3 万件" }',why:"销量角标"}]},{id:"b4-review-grid",code:"B4",cat:"ecommerce",title:"买家秀九宫格",ref:{site:"淘宝 / 京东",page:"评价区",url:"https://www.jd.com/"},pain:"UGC 图会 404、比例乱、还可能带手机号；运营侧看不到坏图。",tone:"light",plugs:[{fn:"createFallbackImagePlugin",arg:"{ fallbackSrc: … }",why:"缺图不留破图"},{fn:"createErrorBadgePlugin",arg:'{ text: "失效" }',why:"坏图可被定位"},{fn:"createRedactionPlugin",arg:"{ boxes: [...] }",why:"隐私区域打码"},{fn:"createConcurrencyControlPlugin",arg:'{ maxConcurrent: 4, scope: "viewport" }',why:"评论区限流"}],note:"第 3 张是失效地址，可直接看到兜底 + 「失效」角标；第 1 张上有一块打码区域。"},{id:"b5-cart-recs",code:"B5",cat:"ecommerce",title:"猜你喜欢横滑",ref:{site:"淘宝 / 京东",page:"购物车页",url:"https://www.jd.com/"},pain:"横滑是「滑一点看一点」，等滑到才请求，用户眼里就是一片白。",tone:"light",plugs:[{fn:"createViewportAwarePlugin",arg:'{ rootMargin: "200px" }',why:"进视口才加载"},{fn:"createPredictiveLoadingPlugin",arg:'{ strategy: "increment", maxPreload: 2 }',why:"按方向预热后两张"},{fn:"createHoverPrefetchPlugin",arg:'{ trigger: "mouseenter", max: 1 }',why:"悬停再补一张"}]},{id:"b6-hotlink-guard",code:"B6",cat:"ecommerce",title:"图床防盗链",ref:{site:"电商图床",page:"商品图直链",url:"https://www.jd.com/"},pain:"主域带 Referer 校验，直链一律 403；没有回退策略就是一片破图。",tone:"light",plugs:[{fn:"createAntiHotlinkPlugin",arg:'{ allowedDomains: ["picsum.photos"] }',why:"域名白名单"},{fn:"createCDNFallbackPlugin",arg:"{ cdnBases: [...] }",why:"主域挂了换备域"},{fn:"createFallbackImagePlugin",arg:"{ fallbackSrc: … }",why:"最后一道兜底"}],note:"第三张用的是完全不存在的域，用来固定演示「主域失败 → 兜底」这条链路。"},{id:"b7-multi-currency",code:"B7",cat:"ecommerce",title:"多语言商品卡",ref:{site:"跨境站点",page:"商品列表",url:"https://www.jd.com/"},pain:"同一 SKU 要出 4 种语言与 4 种货币，价格符号和文案都得跟着换。",tone:"light",plugs:[{fn:"createLocalizationPlugin",arg:"{ currentLocale: code }",why:"按 locale 切文案"},{fn:"createPriceTagPlugin",arg:"{ currency, price }",why:"货币符号随 locale"}]},{id:"b8-format-webp",code:"B8",cat:"ecommerce",title:"图片格式优化",ref:{site:"电商列表页",page:"商品图",url:"https://www.jd.com/"},pain:"同一张图，Chromium 该给 WebP，Safari 老版本只能给 JPEG；写死就是浪费。",tone:"light",plugs:[{fn:"createWebPPlugin",arg:"{ rewrite: true }",why:"嗅探后改写后缀"},{fn:"createImageOptimizationPlugin",arg:"{ maxWidth: 800, quality: 0.82 }",why:"图床侧再压一道"},{fn:"createSvgPlaceholderPlugin",arg:"{ svgContent: … }",why:"灰底 SVG 占位"}]}],tY=[{id:"d1-xhs-masonry",code:"D1",cat:"social",title:"三列不等高瀑布流",ref:{site:"小红书",page:"首页发现",url:"https://www.xiaohongshu.com/"},pain:"每条笔记比例不同，没有按条占位，滑到一半整列会突然错位。",tone:"light",plugs:[{fn:"createAspectRatioSpacerPlugin",arg:"{ ratio: item.ratio }",why:"按条占位，列不跳动"},{fn:"createViewportAwarePlugin",arg:'{ rootMargin: "150px" }',why:"进视口才加载"},{fn:"createBlurUpPlugin",arg:"{ startBlur: 10 }",why:"糊图先出"},{fn:"createConcurrencyControlPlugin",arg:"{ maxConcurrent: 5 }",why:"瀑布流限并发"}],note:"比例逐条不同，所以 withPlugins 放进 useMemo 按比例缓存组件身份。"},{id:"d2-nine-grid-lightbox",code:"D2",cat:"social",title:"九宫格 → 灯箱",ref:{site:"微博 / 小红书",page:"笔记详情的九宫格",url:"https://www.xiaohongshu.com/"},pain:"九张图铺满屏，用户真正想看的是其中一张的高清版。",tone:"light",plugs:[{fn:"createGalleryPlugin",arg:"{ enableLightbox: true }",why:"点开进灯箱"},{fn:"createTransitionPlugin",arg:"{ durationMs: 240 }",why:"切换不闪"},{fn:"createSkeletonPlugin",arg:'{ type: "pulse" }',why:"空格有稳定视觉重量"}]},{id:"d3-article-images",code:"D3",cat:"social",title:"长文配图",ref:{site:"知乎 / 公众号",page:"长文正文",url:"https://www.zhihu.com/"},pain:"正文图一旦晚到，段落就被整体推下去；没有 alt 还会丢检索流量。",tone:"light",plugs:[{fn:"createAspectRatioSpacerPlugin",arg:"{ ratio: 16 / 9 }",why:"先占住高度"},{fn:"createLqipPlugin",arg:"{ lqipSrc: (src) => …, blur: 18 }",why:"24px 低清先出"},{fn:"createSEOPlugin",arg:'{ altFallback: "文章配图" }',why:"alt 与结构化"}]},{id:"d4-follow-avatars",code:"D4",cat:"social",title:"关注推荐列表",ref:{site:"社交产品",page:"关注推荐",url:"https://www.xiaohongshu.com/"},pain:"几十个 38px 小头像，单个失败会留下一个空洞，整行都显得脏。",tone:"light",plugs:[{fn:"createCropPlugin",arg:"{ focusPoint: { x: 0.5, y: 0.45 } }",why:"人脸居中裁方"},{fn:"createRetryOnErrorPlugin",arg:"{ maxRetries: 2, jitter: true }",why:"抖动重试一次"},{fn:"createFallbackImagePlugin",arg:"{ fallbackSrc: … }",why:"最后给默认剪影"}]},{id:"d5-share-card",code:"D5",cat:"social",title:"分享卡片",ref:{site:"内容社区",page:"图片分享/图注",url:"https://www.xiaohongshu.com/"},pain:"分享位、图注、拍摄参数都要贴在图上，还得在悬停时才出现。",tone:"dark",plugs:[{fn:"createSocialSharePlugin",arg:"{ showOnHover: true }",why:"分享入口"},{fn:"createCaptionPlugin",arg:'{ position: "bottom" }',why:"图注常驻"},{fn:"createOverlayInfoPlugin",arg:'{ position: "top", trigger: "hover" }',why:"参数蒙层"}]}],nY=[{id:"e1-news-mixed",code:"E1",cat:"news",title:"头条大图 + 列表小图",ref:{site:"新浪 / 网易",page:"新闻首页",url:"https://news.sina.com.cn/"},pain:"首屏只有一张图该抢带宽，剩下几十张小图应该等滚动停稳。",tone:"light",plugs:[{fn:"createPriorityLoadingPlugin",arg:'{ priority: "high" }',why:"头条就是 LCP"},{fn:"createResponsivePlugin",arg:"{ variants: [400, 800, 1200] }",why:"按容器宽度出图"},{fn:"createViewportDebouncePlugin",arg:"{ debounceMs: 160 }",why:"滚动停稳再发"}]},{id:"e2-photo-set",code:"E2",cat:"news",title:"组图 / 图集翻页",ref:{site:"门户图集",page:"组图浏览",url:"https://news.sina.com.cn/"},pain:"一图一页地翻，每张都要等；没有进度反馈就会以为卡住了。",tone:"dark",plugs:[{fn:"createGalleryPlugin",arg:"{ enableLightbox: true }",why:"全屏看图"},{fn:"createProgressOverlayPlugin",arg:"{ height: 3 }",why:"细进度条"},{fn:"createPreconnectPlugin",arg:'{ domains: ["https://picsum.photos"] }',why:"翻页前先建连"}]},{id:"e3-inline-anti-cls",code:"E3",cat:"news",title:"正文图防 CLS",ref:{site:"资讯正文",page:"内嵌图",url:"https://news.sina.com.cn/"},pain:"图片没有预设高度，加载完成的一瞬间把下面几段全推下去。",tone:"light",plugs:[{fn:"createAspectRatioSpacerPlugin",arg:"{ ratio: 4 / 3 }",why:"先把高度占住"},{fn:"createSkeletonPlugin",arg:'{ type: "shimmer" }',why:"占位有质感"},{fn:"createSEOPlugin",arg:'{ aspectRatio: "4:3" }',why:"alt 与结构化"}]},{id:"e4-dead-links",code:"E4",cat:"news",title:"失效外链",ref:{site:"老牌资讯站",page:"历史文章配图",url:"https://news.sina.com.cn/"},pain:"2019 年的图床早就迁移了，没人上报你就永远不知道有多少破图。",tone:"light",plugs:[{fn:"createCDNFallbackPlugin",arg:"{ cdnBases: [...] }",why:"备域兜一次"},{fn:"createFallbackImagePlugin",arg:"{ fallbackSrc: … }",why:"兜底图收场"},{fn:"createErrorTrackingPlugin",arg:"{ report, showBadge: true }",why:"失败可上报"}],note:"控制台执行 window.__vaneDeadLink 可看到失败上报的原始记录。"},{id:"e5-a11y-gov",code:"E5",cat:"news",title:"无障碍政务站",ref:{site:"公共服务站点",page:"政策图解",url:"https://www.gov.cn/"},pain:"读屏软件读不出「图片加载中」，运营漏填 alt 就是一次合规风险。",tone:"light",plugs:[{fn:"createA11yPlugin",arg:"{ statusText: … }",why:"朗读状态"},{fn:"createAltTextPlugin",arg:'{ derive: true, prefix: "示意图：" }',why:"alt 自动推导"},{fn:"createSEOPlugin",arg:"{ enabled: true }",why:"alt + 结构化"}],note:"第一张故意留空 alt，插件会按标题推导出「示意图：办事大厅引导图」。"}],oY=[{id:"f1-unsplash-masonry",code:"F1",cat:"gallery",title:"瀑布流无限滚动",ref:{site:"Unsplash",page:"探索页",url:"https://unsplash.com/"},pain:"图库用户会反复回看同一批图，每次都重新拉一遍纯属浪费。",tone:"dark",plugs:[{fn:"createIDBCachePlugin",arg:'{ dbName: "vane-gallery" }',why:"落 IndexedDB 复用"},{fn:"createConcurrencyControlPlugin",arg:"{ maxConcurrent: 6 }",why:"限并发"},{fn:"createViewportAwarePlugin",arg:'{ rootMargin: "240px" }',why:"提前一屏"},{fn:"createSkeletonPlugin",arg:'{ type: "shimmer" }',why:"暗色骨架"}],note:"刷新第二次打开：这些图会直接从 IndexedDB 出，Network 面板不再发请求。"},{id:"f2-lightbox-download",code:"F2",cat:"gallery",title:"灯箱 + 下载 + 色板",ref:{site:"Pexels",page:"图片详情",url:"https://www.pexels.com/"},pain:"看图、下载、取色是三件事，分散在三个组件里就很难保持一致。",tone:"dark",plugs:[{fn:"createGalleryPlugin",arg:'{ buttonText: "全屏" }',why:"灯箱看图"},{fn:"createDownloadButtonPlugin",arg:'{ filename: "vane-photo.jpg" }',why:"下载带正确后缀"},{fn:"createColorSwatchPlugin",arg:"{ maxColors: 5 }",why:"主色板可取色"}]},{id:"f3-exif-upright",code:"F3",cat:"gallery",title:"手机竖图纠偏",ref:{site:"摄影社区",page:"用户直传",url:"https://unsplash.com/"},pain:"iPhone 直传的竖图带 Orientation=6，不纠正就是躺着的。",tone:"dark",plugs:[{fn:"createExifOrientationPlugin",arg:"{ enabled: true }",why:"读 EXIF 转正"},{fn:"createCropPlugin",arg:"{ focusPoint: { x: 0.5, y: 0.42 } }",why:"转正后裁 4:5"}],note:"占位图不带 EXIF，插件读到缺失标记时按 1 处理；换成自己拍的直传图即可看到转正效果。"},{id:"f4-before-after",code:"F4",cat:"gallery",title:"原图 / 滤镜对比",ref:{site:"摄影社区",page:"作品对比",url:"https://unsplash.com/"},pain:"「调色前后」说服力最强，但自己做拖拽分割线很容易做出错位。",tone:"dark",plugs:[{fn:"createComparisonPlugin",arg:"{ beforeSrc, afterSrc, start: 0.5 }",why:"可拖拽分隔条"},{fn:"createFilterPlugin",arg:'{ filter: "grayscale" }',why:"预设缩略"}]},{id:"f5-artwork-detail",code:"F5",cat:"gallery",title:"作品详情氛围",ref:{site:"数字艺术平台",page:"作品详情",url:"https://unsplash.com/"},pain:"作品页要有氛围：主色铺底、入场形变、下一件提前备好。",tone:"dark",plugs:[{fn:"createDominantColorPlugin",arg:"{ color: rgba }",why:"主色铺容器底"},{fn:"createCustomEffectsPlugin",arg:"{ hoverImageStyle }",why:"悬停上浮提亮"},{fn:"createMorphPlugin",arg:'{ type: "elastic" }',why:"入场形变"},{fn:"createCachePrewarmPlugin",arg:'{ trigger: "enter" }',why:"预热下一件"}]}],rY=[{id:"g1-admin-avatars",code:"G1",cat:"admin",title:"成员列表小头像",ref:{site:"Ant Design Pro",page:"用户管理列表",url:"https://pro.ant.design/"},pain:"一屏 40 个 22px 头像，翻页就重拉，主线程也跟着抖。",tone:"light",plugs:[{fn:"createCropPlugin",arg:"{ focusPoint: { x: 0.5, y: 0.5 } }",why:"小尺寸也不变形"},{fn:"createMemoryCachePlugin",arg:"{ maxEntries: 400 }",why:"翻页不重复请求"},{fn:"createFallbackImagePlugin",arg:"{ fallbackSrc: … }",why:"缺图不留空洞"}]},{id:"g2-ticket-attachments",code:"G2",cat:"admin",title:"工单附件缩略",ref:{site:"工单系统",page:"附件列表",url:"https://pro.ant.design/"},pain:"附件走鉴权接口，越权时给一张破图，用户根本不知道发生了什么。",tone:"light",plugs:[{fn:"createAuthPlugin",arg:'{ tokenParam: "access_token" }',why:"带上登录态"},{fn:"createErrorBadgePlugin",arg:'{ text: "无权限" }',why:"失败要可读"},{fn:"createGalleryPlugin",arg:"{ enableLightbox: true }",why:"点开放大"}],note:"第三张用过期凭证，返回 401 invalid_token，右上角出现「无权限」角标。需 pnpm serve:demo。"},{id:"g3-protected-401",code:"G3",cat:"admin",title:"受保护资源三态",ref:{site:"SaaS 后台",page:"受保护图片",url:"https://pro.ant.design/"},pain:"200 / 401 / 403 三种结果必须在 UI 上区分开，否则排查全靠猜。",tone:"light",plugs:[{fn:"createAuthPlugin",arg:'{ token: "demo-token-1f2e3d" }',why:"按凭证取图"},{fn:"createRetryOnErrorPlugin",arg:"{ maxRetries: 1 }",why:"瞬时失败自愈"},{fn:"createErrorOverlayPlugin",arg:'{ retryText: "重试" }',why:"给出可点出口"}],note:"接口是演示站自带的 /protected/image：401 missing_credentials、401 invalid_token、403 insufficient_scope。"},{id:"g4-table-image-cell",code:"G4",cat:"admin",title:"表格图片列",ref:{site:"后台列表",page:"商品/资产表格",url:"https://pro.ant.design/"},pain:"行高固定，缩略图一失败就把整行撑开或塌掉。",tone:"light",plugs:[{fn:"createSkeletonPlugin",arg:'{ type: "pulse" }',why:"骨架与图同尺寸"},{fn:"createFallbackImagePlugin",arg:"{ fallbackSrc: … }",why:"缺图不塌行"},{fn:"createErrorBadgePlugin",arg:'{ text: "!" }',why:"角标提示异常"}]}],iY=[{id:"h1-listing-gallery",code:"H1",cat:"travel",title:"房源图集横滑",ref:{site:"贝壳 / Airbnb",page:"房源详情",url:"https://www.ke.com/"},pain:"1 主图 + 4 缩略，切一次拉一次；比例不统一就上下跳。",tone:"dark",plugs:[{fn:"createAspectRatioSpacerPlugin",arg:"{ ratio: 4 / 3 }",why:"统一比例不跳"},{fn:"createGalleryPlugin",arg:"{ enableLightbox: true }",why:"看图集"},{fn:"createHoverPrefetchPlugin",arg:"{ max: 1, getNextSrc }",why:"悬停预取下一张"}]},{id:"h2-hotel-card",code:"H2",cat:"travel",title:"酒店列表卡",ref:{site:"携程",page:"酒店搜索结果",url:"https://www.ctrip.com/"},pain:"会员价、促销标、剩余房量——三条业务信息必须压在同一个图上。",tone:"light",plugs:[{fn:"createPriceTagPlugin",arg:"{ price: 486, discount }",why:"会员价 + 划线价"},{fn:"createPromoBadgePlugin",arg:'{ text: "限时特惠" }',why:"促销标"},{fn:"createBadgePlugin",arg:'{ text: "仅剩 2 间" }',why:"库存角标"}]},{id:"h3-offline-favs",code:"H3",cat:"travel",title:"离线收藏夹",ref:{site:"出行 App",page:"我的收藏",url:"https://www.ctrip.com/"},pain:"用户在高铁上打开收藏夹，断网时不该只剩一片空框。",tone:"light",plugs:[{fn:"createIDBCachePlugin",arg:'{ dbName: "vane-travel" }',why:"提前落库"},{fn:"createOfflinePlugin",arg:"{ warm: true, showBadge: true }",why:"断网切占位"},{fn:"createErrorBadgePlugin",arg:'{ text: "离线" }',why:"说明当前状态"}]}],sY=[{id:"i1-3g-skeleton",code:"I1",cat:"mobile",title:"3G 慢网加载",ref:{site:"移动端信息流",page:"3G 环境首屏",url:"https://www.bilibili.com/"},pain:"650ms RTT 下，没有进度反馈的等待会被用户当成「卡死」。",tone:"light",plugs:[{fn:"createNetworkAnalyticsPlugin",arg:"{ trackCDN: true }",why:"采集耗时与字节"},{fn:"createSkeletonPlugin",arg:'{ type: "shimmer" }',why:"骨架占位"},{fn:"createProgressOverlayPlugin",arg:"{ showPercentText: true }",why:"真实百分比"}]},{id:"i2-saver-battery",code:"I2",cat:"mobile",title:"省流量 + 低电量",ref:{site:"移动端商城",page:"降级模式",url:"https://www.jd.com/"},pain:"用户开了省流量、电量只剩 15%，还按桌面规格拉图就是纯浪费。",tone:"light",plugs:[{fn:"createDataSaverPlugin",arg:"{ respectSaveData: true }",why:"尊重系统开关"},{fn:"createBatteryAwarePlugin",arg:"{ lowBatteryThreshold: 0.2 }",why:"低电量降档"},{fn:"createAdaptiveQualityPlugin",arg:"{ lowQ: 40, highQ: 80 }",why:"按网络定质量"}]},{id:"i3-memory-pressure",code:"I3",cat:"mobile",title:"内存压力中止",ref:{site:"低端安卓",page:"长列表滚动",url:"https://www.bilibili.com/"},pain:"离开视口的图还占着解码位图，低端机滚两次就掉帧甚至被系统杀掉。",tone:"light",plugs:[{fn:"createMemoryPressureAbortPlugin",arg:"{ abortOnLeave: true }",why:"离屏即 abort"},{fn:"createDecodeAfterIdlePlugin",arg:"{ timeoutMs: 600 }",why:"空闲再解码"}]},{id:"i4-offline-recover",code:"I4",cat:"mobile",title:"断网 → 恢复",ref:{site:"移动端内容站",page:"地铁断网",url:"https://www.bilibili.com/"},pain:"断网时是空框，恢复后还得手动刷新——用户会觉得「这 App 坏了」。",tone:"light",plugs:[{fn:"createOfflinePlugin",arg:"{ warm: true }",why:"断网占位 + 恢复重取"},{fn:"createRetryOnErrorPlugin",arg:"{ maxRetries: 3, jitter: true }",why:"指数退避重试"},{fn:"createErrorTrackingPlugin",arg:"{ report }",why:"失败可追踪"}],note:"window.__vaneOfflineErrors 里是失败记录。"},{id:"i5-perf-beacon",code:"I5",cat:"mobile",title:"首屏性能埋点",ref:{site:"内容站数据看板",page:"图片性能",url:"https://www.bilibili.com/"},pain:"说「图片慢」没有数字支撑，优化就只能靠猜。",tone:"dark",plugs:[{fn:"createPerformanceMonitorPlugin",arg:"{ showOverlay: true }",why:"实时耗时浮层"},{fn:"createEventLoggerPlugin",arg:'{ prefix: "[VANE]" }',why:"事件进控制台"},{fn:"createUserBehaviorPlugin",arg:"{ onReport }",why:"曝光/点击上报"},{fn:"createViewportDwellPlugin",arg:"{ dwellMs: 250 }",why:"去抖真实曝光"}]}],aY=[{id:"j1-brand-parallax",code:"J1",cat:"marketing",title:"品牌页视差首屏",ref:{site:"品牌落地页",page:"新品专题",url:"https://www.apple.com/"},pain:"静态大图撑不起「质感」，加动效又容易吃满主线程。",tone:"dark",plugs:[{fn:"createParallaxPlugin",arg:'{ strength: 0.18, axis: "y" }',why:"背景慢一层"},{fn:"createRevealAnimationPlugin",arg:'{ animation: "fade-up" }',why:"分块揭示"},{fn:"createFadeInPlugin",arg:"{ durationMs: 400 }",why:"整体淡入"}]},{id:"j2-glitch-poster",code:"J2",cat:"marketing",title:"故障风海报",ref:{site:"音乐节 / 潮流活动",page:"主视觉海报",url:"https://www.boilerroom.tv/"},pain:"故障特效做不好就是掉帧；开成常驻动画更会一直占着合成层。",tone:"dark",plugs:[{fn:"createGlitchEffectPlugin",arg:"{ triggerOnHover: true, duration: 900 }",why:"悬停触发一次"},{fn:"createFilterPlugin",arg:'{ filter: "contrast" }',why:"底片先压对比"}]},{id:"j3-watermark-guard",code:"J3",cat:"marketing",title:"版权图水印",ref:{site:"素材站",page:"预览图",url:"https://www.pexels.com/"},pain:"预览图要能被截图溯源，同时不能被别站直接外链。",tone:"dark",plugs:[{fn:"createWatermarkPlugin",arg:'{ text: "© VANE STUDIO" }',why:"可见水印"},{fn:"createAntiHotlinkPlugin",arg:'{ allowedDomains: ["picsum.photos"] }',why:"引用限制"}],note:"水印是 DOM 叠层而非烧进图片，真实业务还要配合服务端签名 URL。"},{id:"j4-depth-card",code:"J4",cat:"marketing",title:"3D 深度卡片",ref:{site:"产品官网",page:"产品卡",url:"https://www.apple.com/"},pain:"产品图的「手感」靠位移与光影，但自己写 tilt 很容易飘。",tone:"dark",plugs:[{fn:"createDepthMapPlugin",arg:'{ style: "tilt", maxTilt: 18 }',why:"指针跟随倾斜"},{fn:"createAnimatedCursorPlugin",arg:'{ style: "zoom-in" }',why:"光标跟随放大"}]}],EY=[{id:"vod",label:"影视点播",en:"VOD",blurb:"图少但单图大，LCP 与付费墙失败态决定体验。"},{id:"video",label:"视频社区",en:"VIDEO",blurb:"封面海量且单图小，唯一目标是别和视频抢带宽。"},{id:"ecommerce",label:"电商",en:"COMMERCE",blurb:"主图/缩略/评价图并存，SKU 切换要秒开。"},{id:"social",label:"图文社区",en:"SOCIAL",blurb:"不等高瀑布流，UGC 图质量与可用性都不可控。"},{id:"news",label:"资讯门户",en:"NEWS",blurb:"正文图决定 CLS，外链图常年失效。"},{id:"gallery",label:"图库摄影",en:"GALLERY",blurb:"以图为主业，缩略与全尺寸要分档，回访要命中缓存。"},{id:"admin",label:"后台 SaaS",en:"ADMIN",blurb:"表格里的小图与受保护附件，失败必须可解释。"},{id:"travel",label:"出行房产",en:"TRAVEL",blurb:"图集横滑 + 价格角标，弱网与离线是常态。"},{id:"mobile",label:"移动弱网",en:"MOBILE",blurb:"3G、低电量、内存压力、断网恢复的全链路。"},{id:"marketing",label:"营销创意",en:"MARKETING",blurb:"视觉即卖点，动效与版权保护同时要。"}],ua=[...ZK,...JK,...eY,...tY,...nY,...oY,...rY,...iY,...sY,...aY],lY=Object.assign({"../specs/a1-poster-wall.tsx":()=>S(()=>import("./a1-poster-wall-DOslrHh4.js"),[],import.meta.url),"../specs/a2-episode-row.tsx":()=>S(()=>import("./a2-episode-row-D1-G82ez.js"),[],import.meta.url),"../specs/a3-recommend-side.tsx":()=>S(()=>import("./a3-recommend-side-BmQ_yN5h.js"),[],import.meta.url),"../specs/a4-cast-avatar.tsx":()=>S(()=>import("./a4-cast-avatar-Cz_KmUPR.js"),[],import.meta.url),"../specs/a5-paid-poster.tsx":()=>S(()=>import("./a5-paid-poster-fcH-YtyK.js"),[],import.meta.url),"../specs/a6-tiered-quality.tsx":()=>S(()=>import("./a6-tiered-quality-bfo3asCG.js"),[],import.meta.url),"../specs/b1-jd-search-grid.tsx":()=>S(()=>import("./b1-jd-search-grid-nHytzRIV.js"),[],import.meta.url),"../specs/b2-sku-gallery-zoom.tsx":()=>S(()=>import("./b2-sku-gallery-zoom-Ds1VNeWs.js"),[],import.meta.url),"../specs/b3-flash-sale.tsx":()=>S(()=>import("./b3-flash-sale-r7FB5oeM.js"),[],import.meta.url),"../specs/b4-review-grid.tsx":()=>S(()=>import("./b4-review-grid-CbrN45TJ.js"),[],import.meta.url),"../specs/b5-cart-recs.tsx":()=>S(()=>import("./b5-cart-recs-C1mYBZBZ.js"),[],import.meta.url),"../specs/b6-hotlink-guard.tsx":()=>S(()=>import("./b6-hotlink-guard-BIJUE7pC.js"),[],import.meta.url),"../specs/b7-multi-currency.tsx":()=>S(()=>import("./b7-multi-currency-Cu4cPhpN.js"),[],import.meta.url),"../specs/b8-format-webp.tsx":()=>S(()=>import("./b8-format-webp-CgofGjXS.js"),[],import.meta.url),"../specs/c1-bili-cover-grid.tsx":()=>S(()=>import("./c1-bili-cover-grid-jyPstSGY.js"),[],import.meta.url),"../specs/c2-hero-banner.tsx":()=>S(()=>import("./c2-hero-banner-ChN7s6a5.js"),[],import.meta.url),"../specs/c3-watch-side-list.tsx":()=>S(()=>import("./c3-watch-side-list-E1oBsawH.js"),[],import.meta.url),"../specs/c4-uploader-avatar.tsx":()=>S(()=>import("./c4-uploader-avatar-CVsmtqsj.js"),[],import.meta.url),"../specs/c5-hover-preview.tsx":()=>S(()=>import("./c5-hover-preview-DFGXszTo.js"),[],import.meta.url),"../specs/c6-saver-mode.tsx":()=>S(()=>import("./c6-saver-mode-fSx6XRns.js"),[],import.meta.url),"../specs/d1-xhs-masonry.tsx":()=>S(()=>import("./d1-xhs-masonry-nEalNDkX.js"),[],import.meta.url),"../specs/d2-nine-grid-lightbox.tsx":()=>S(()=>import("./d2-nine-grid-lightbox-Cixsnn1p.js"),[],import.meta.url),"../specs/d3-article-images.tsx":()=>S(()=>import("./d3-article-images-I4JJRjWX.js"),[],import.meta.url),"../specs/d4-follow-avatars.tsx":()=>S(()=>import("./d4-follow-avatars-CDXGoJ_o.js"),[],import.meta.url),"../specs/d5-share-card.tsx":()=>S(()=>import("./d5-share-card-CvKNqOe1.js"),[],import.meta.url),"../specs/e1-news-mixed.tsx":()=>S(()=>import("./e1-news-mixed-BndgFYb_.js"),[],import.meta.url),"../specs/e2-photo-set.tsx":()=>S(()=>import("./e2-photo-set-Dfr4aFAE.js"),[],import.meta.url),"../specs/e3-inline-anti-cls.tsx":()=>S(()=>import("./e3-inline-anti-cls-FqYreDMS.js"),[],import.meta.url),"../specs/e4-dead-links.tsx":()=>S(()=>import("./e4-dead-links-BGBeurDo.js"),[],import.meta.url),"../specs/e5-a11y-gov.tsx":()=>S(()=>import("./e5-a11y-gov-CAvfz6-l.js"),[],import.meta.url),"../specs/f1-unsplash-masonry.tsx":()=>S(()=>import("./f1-unsplash-masonry-CXMTO7pj.js"),[],import.meta.url),"../specs/f2-lightbox-download.tsx":()=>S(()=>import("./f2-lightbox-download-CzCZO8BC.js"),[],import.meta.url),"../specs/f3-exif-upright.tsx":()=>S(()=>import("./f3-exif-upright-DPehFTSK.js"),[],import.meta.url),"../specs/f4-before-after.tsx":()=>S(()=>import("./f4-before-after-BNOKMbPg.js"),[],import.meta.url),"../specs/f5-artwork-detail.tsx":()=>S(()=>import("./f5-artwork-detail-D0k_xw8n.js"),[],import.meta.url),"../specs/g1-admin-avatars.tsx":()=>S(()=>import("./g1-admin-avatars-DNn1IqVg.js"),[],import.meta.url),"../specs/g2-ticket-attachments.tsx":()=>S(()=>import("./g2-ticket-attachments-BKtC13Ry.js"),[],import.meta.url),"../specs/g3-protected-401.tsx":()=>S(()=>import("./g3-protected-401-DSrkZI92.js"),[],import.meta.url),"../specs/g4-table-image-cell.tsx":()=>S(()=>import("./g4-table-image-cell-DsiT3Mrx.js"),[],import.meta.url),"../specs/h1-listing-gallery.tsx":()=>S(()=>import("./h1-listing-gallery-BckuoN7x.js"),[],import.meta.url),"../specs/h2-hotel-card.tsx":()=>S(()=>import("./h2-hotel-card-BJXqcW1I.js"),[],import.meta.url),"../specs/h3-offline-favs.tsx":()=>S(()=>import("./h3-offline-favs-BoWOGmyi.js"),[],import.meta.url),"../specs/i1-3g-skeleton.tsx":()=>S(()=>import("./i1-3g-skeleton-BoYuB_qq.js"),[],import.meta.url),"../specs/i2-saver-battery.tsx":()=>S(()=>import("./i2-saver-battery-ChcgJaQ9.js"),[],import.meta.url),"../specs/i3-memory-pressure.tsx":()=>S(()=>import("./i3-memory-pressure-ClrK_E9f.js"),[],import.meta.url),"../specs/i4-offline-recover.tsx":()=>S(()=>import("./i4-offline-recover-CIyePJ1y.js"),[],import.meta.url),"../specs/i5-perf-beacon.tsx":()=>S(()=>import("./i5-perf-beacon-UwvBeWLy.js"),[],import.meta.url),"../specs/j1-brand-parallax.tsx":()=>S(()=>import("./j1-brand-parallax-9KsYEuyS.js"),[],import.meta.url),"../specs/j2-glitch-poster.tsx":()=>S(()=>import("./j2-glitch-poster-DVvjoHCW.js"),[],import.meta.url),"../specs/j3-watermark-guard.tsx":()=>S(()=>import("./j3-watermark-guard-Bqxnta2p.js"),[],import.meta.url),"../specs/j4-depth-card.tsx":()=>S(()=>import("./j4-depth-card-B1GVXxpf.js"),[],import.meta.url)}),cY=Object.assign({"../specs/a1-poster-wall.tsx":()=>S(()=>import("./a1-poster-wall-Cykks--R.js"),[],import.meta.url).then(e=>e.default),"../specs/a2-episode-row.tsx":()=>S(()=>import("./a2-episode-row-Db43v__l.js"),[],import.meta.url).then(e=>e.default),"../specs/a3-recommend-side.tsx":()=>S(()=>import("./a3-recommend-side-DiUSc9Re.js"),[],import.meta.url).then(e=>e.default),"../specs/a4-cast-avatar.tsx":()=>S(()=>import("./a4-cast-avatar-BbUD-CJX.js"),[],import.meta.url).then(e=>e.default),"../specs/a5-paid-poster.tsx":()=>S(()=>import("./a5-paid-poster-DKA6BZ32.js"),[],import.meta.url).then(e=>e.default),"../specs/a6-tiered-quality.tsx":()=>S(()=>import("./a6-tiered-quality-B-7ywTLS.js"),[],import.meta.url).then(e=>e.default),"../specs/b1-jd-search-grid.tsx":()=>S(()=>import("./b1-jd-search-grid-BTLAA9Xs.js"),[],import.meta.url).then(e=>e.default),"../specs/b2-sku-gallery-zoom.tsx":()=>S(()=>import("./b2-sku-gallery-zoom-BiMFArMI.js"),[],import.meta.url).then(e=>e.default),"../specs/b3-flash-sale.tsx":()=>S(()=>import("./b3-flash-sale-kfVC10uN.js"),[],import.meta.url).then(e=>e.default),"../specs/b4-review-grid.tsx":()=>S(()=>import("./b4-review-grid-CX4kHiCU.js"),[],import.meta.url).then(e=>e.default),"../specs/b5-cart-recs.tsx":()=>S(()=>import("./b5-cart-recs-KR-m6cak.js"),[],import.meta.url).then(e=>e.default),"../specs/b6-hotlink-guard.tsx":()=>S(()=>import("./b6-hotlink-guard-BqgB0L1N.js"),[],import.meta.url).then(e=>e.default),"../specs/b7-multi-currency.tsx":()=>S(()=>import("./b7-multi-currency-ByQRPY-Z.js"),[],import.meta.url).then(e=>e.default),"../specs/b8-format-webp.tsx":()=>S(()=>import("./b8-format-webp-DaYLYmx1.js"),[],import.meta.url).then(e=>e.default),"../specs/c1-bili-cover-grid.tsx":()=>S(()=>import("./c1-bili-cover-grid-CKvu6Sdf.js"),[],import.meta.url).then(e=>e.default),"../specs/c2-hero-banner.tsx":()=>S(()=>import("./c2-hero-banner-B-n13Bps.js"),[],import.meta.url).then(e=>e.default),"../specs/c3-watch-side-list.tsx":()=>S(()=>import("./c3-watch-side-list-BYTQpqA9.js"),[],import.meta.url).then(e=>e.default),"../specs/c4-uploader-avatar.tsx":()=>S(()=>import("./c4-uploader-avatar-BeQJwtbY.js"),[],import.meta.url).then(e=>e.default),"../specs/c5-hover-preview.tsx":()=>S(()=>import("./c5-hover-preview-CJEeMz_6.js"),[],import.meta.url).then(e=>e.default),"../specs/c6-saver-mode.tsx":()=>S(()=>import("./c6-saver-mode-C8DhIPWq.js"),[],import.meta.url).then(e=>e.default),"../specs/d1-xhs-masonry.tsx":()=>S(()=>import("./d1-xhs-masonry-CWJbzt4c.js"),[],import.meta.url).then(e=>e.default),"../specs/d2-nine-grid-lightbox.tsx":()=>S(()=>import("./d2-nine-grid-lightbox-w3sTa-yE.js"),[],import.meta.url).then(e=>e.default),"../specs/d3-article-images.tsx":()=>S(()=>import("./d3-article-images-BD5U4y_Q.js"),[],import.meta.url).then(e=>e.default),"../specs/d4-follow-avatars.tsx":()=>S(()=>import("./d4-follow-avatars-Q7P9oMN0.js"),[],import.meta.url).then(e=>e.default),"../specs/d5-share-card.tsx":()=>S(()=>import("./d5-share-card-jiTztKOk.js"),[],import.meta.url).then(e=>e.default),"../specs/e1-news-mixed.tsx":()=>S(()=>import("./e1-news-mixed-NIKr9bH5.js"),[],import.meta.url).then(e=>e.default),"../specs/e2-photo-set.tsx":()=>S(()=>import("./e2-photo-set-BJnQfYY6.js"),[],import.meta.url).then(e=>e.default),"../specs/e3-inline-anti-cls.tsx":()=>S(()=>import("./e3-inline-anti-cls-CUSbthow.js"),[],import.meta.url).then(e=>e.default),"../specs/e4-dead-links.tsx":()=>S(()=>import("./e4-dead-links-D9yCWP81.js"),[],import.meta.url).then(e=>e.default),"../specs/e5-a11y-gov.tsx":()=>S(()=>import("./e5-a11y-gov-sO_ki5Vg.js"),[],import.meta.url).then(e=>e.default),"../specs/f1-unsplash-masonry.tsx":()=>S(()=>import("./f1-unsplash-masonry-73bYgqc7.js"),[],import.meta.url).then(e=>e.default),"../specs/f2-lightbox-download.tsx":()=>S(()=>import("./f2-lightbox-download-D_NE0Fsa.js"),[],import.meta.url).then(e=>e.default),"../specs/f3-exif-upright.tsx":()=>S(()=>import("./f3-exif-upright-C5GoMu0l.js"),[],import.meta.url).then(e=>e.default),"../specs/f4-before-after.tsx":()=>S(()=>import("./f4-before-after-DFiCucPs.js"),[],import.meta.url).then(e=>e.default),"../specs/f5-artwork-detail.tsx":()=>S(()=>import("./f5-artwork-detail-C2JEb2Hy.js"),[],import.meta.url).then(e=>e.default),"../specs/g1-admin-avatars.tsx":()=>S(()=>import("./g1-admin-avatars-etpgKsg9.js"),[],import.meta.url).then(e=>e.default),"../specs/g2-ticket-attachments.tsx":()=>S(()=>import("./g2-ticket-attachments-BxIe67Y4.js"),[],import.meta.url).then(e=>e.default),"../specs/g3-protected-401.tsx":()=>S(()=>import("./g3-protected-401-CdofLwHJ.js"),[],import.meta.url).then(e=>e.default),"../specs/g4-table-image-cell.tsx":()=>S(()=>import("./g4-table-image-cell-rdsAs6jI.js"),[],import.meta.url).then(e=>e.default),"../specs/h1-listing-gallery.tsx":()=>S(()=>import("./h1-listing-gallery-BQwnbOpB.js"),[],import.meta.url).then(e=>e.default),"../specs/h2-hotel-card.tsx":()=>S(()=>import("./h2-hotel-card-DE_6fJuJ.js"),[],import.meta.url).then(e=>e.default),"../specs/h3-offline-favs.tsx":()=>S(()=>import("./h3-offline-favs-92izyaJ2.js"),[],import.meta.url).then(e=>e.default),"../specs/i1-3g-skeleton.tsx":()=>S(()=>import("./i1-3g-skeleton-obeP0y7t.js"),[],import.meta.url).then(e=>e.default),"../specs/i2-saver-battery.tsx":()=>S(()=>import("./i2-saver-battery-DUHeKUzY.js"),[],import.meta.url).then(e=>e.default),"../specs/i3-memory-pressure.tsx":()=>S(()=>import("./i3-memory-pressure-Ps-AJR0F.js"),[],import.meta.url).then(e=>e.default),"../specs/i4-offline-recover.tsx":()=>S(()=>import("./i4-offline-recover-DM-9Evhx.js"),[],import.meta.url).then(e=>e.default),"../specs/i5-perf-beacon.tsx":()=>S(()=>import("./i5-perf-beacon-BxKRE338.js"),[],import.meta.url).then(e=>e.default),"../specs/j1-brand-parallax.tsx":()=>S(()=>import("./j1-brand-parallax-BmwG9TzE.js"),[],import.meta.url).then(e=>e.default),"../specs/j2-glitch-poster.tsx":()=>S(()=>import("./j2-glitch-poster-E__I8osg.js"),[],import.meta.url).then(e=>e.default),"../specs/j3-watermark-guard.tsx":()=>S(()=>import("./j3-watermark-guard-BppDCfw7.js"),[],import.meta.url).then(e=>e.default),"../specs/j4-depth-card.tsx":()=>S(()=>import("./j4-depth-card-C5D3N5E2.js"),[],import.meta.url).then(e=>e.default)}),Jp=e=>`../specs/${e}.tsx`;function RY(e){return lY[Jp(e)]}function zY(e){return cY[Jp(e)]}function DY(e){return ua.filter(t=>t.cat===e)}function uY(e){return Array.from(new Set(e.plugs.map(t=>t.fn)))}function OY(e){const n=["import {","  LazyLoadImageCore,",...uY(e).sort().map(r=>`  ${r},`),"  withPlugins,",'} from "vane-lazy-image";'].join(`
`),o=e.plugs.map(r=>`  ${r.fn}(${r.arg??""}),`).join(`
`);return[`// ${e.code} ${e.title} · 最小可用版`,`// ${e.pain}`,n,"","const LazyImage = withPlugins(LazyLoadImageCore, [",o,"]);","","// 版式与数据由业务侧负责，这一层只解决「怎么取图」",'<LazyImage src={src} alt={alt} loading="lazy" />'].join(`
`)}const dY=x.lazy(()=>S(()=>import("./Home-DRZwJKL8.js"),[],import.meta.url).then(e=>({default:e.Home}))),pY=x.lazy(()=>S(()=>import("./PluginDetail-Bu3x9bsh.js"),[],import.meta.url).then(e=>({default:e.PluginDetail}))),iu=x.lazy(()=>S(()=>import("./CombosPage-zRdPEI0c.js"),[],import.meta.url).then(e=>({default:e.CombosPage}))),su=x.lazy(()=>S(()=>import("./AdvancedPage-DbG8XbMV.js"),[],import.meta.url).then(e=>({default:e.AdvancedPage}))),mY=x.lazy(()=>S(()=>import("./ScenariosPage-CRPH8oV9.js"),[],import.meta.url).then(e=>({default:e.ScenariosPage}))),gY=x.lazy(()=>S(()=>import("./WorkshopPage-BGkhgYG_.js"),[],import.meta.url).then(e=>({default:e.WorkshopPage}))),fY=x.lazy(()=>S(()=>import("./GalleryPage-BsTt2iYq.js"),[],import.meta.url).then(e=>({default:e.GalleryPage}))),hY={pkg:"vane-lazy-image",brand:"V",subtitle:"图片懒加载 / plugin index",nav:[{to:"/",label:"总览",hint:"overview"},{to:"/workshop",label:"插件工坊",hint:`${Uo.length} plugins`},{to:"/combos",label:"组合示例",hint:`${Qp.length} combos`},{to:"/advanced",label:"高级功能",hint:`${Kp.length} advanced`},{to:"/scenarios",label:"场景示例",hint:`${ua.length} plates`},{to:"/gallery",label:"商品图集",hint:"gallery"}],routes:[{path:"/",element:m.jsx(dY,{})},{path:"/plugin/:id",element:m.jsx(pY,{})},{path:"/combos",element:m.jsx(iu,{})},{path:"/combo/:id",element:m.jsx(iu,{})},{path:"/advanced",element:m.jsx(su,{})},{path:"/advanced/:id",element:m.jsx(su,{})},{path:"/scenarios",element:m.jsx(mY,{})},{path:"/workshop",element:m.jsx(gY,{})},{path:"/gallery",element:m.jsx(fY,{})}],crumb:e=>e.startsWith("/plugin/")?"plugin · 插件详情":e.startsWith("/combo")?"combo · 组合示例":e.startsWith("/advanced")?"advanced · 高级功能":e.startsWith("/scenarios")?"scenario · 场景示例":e.startsWith("/workshop")?"workshop · 插件工坊":e.startsWith("/gallery")?"gallery · 商品图集":"index · 总览",demos:{label:"逐项示例",groups:TK.map(e=>({key:e,label:Yp[e].label})),entries:oi,detail:(e,t)=>m.jsx(XK,{entry:e,order:t})},footer:[`${Uo.length} PLUGINS · ${ua.length} PLATES`,`${oi.length} DEMOS · D1-A / D2-A`]};function yY(){return m.jsx(Fh,{config:hY})}const em="vane-demo-env",au={offline:!1,slow:!1,battery:!1};function fl(){try{const e=sessionStorage.getItem(em);if(!e)return{...au};const t=JSON.parse(e);return{offline:!!t.offline,slow:!!t.slow,battery:!!t.battery}}catch{return{...au}}}function vY(e){try{sessionStorage.setItem(em,JSON.stringify(e))}catch{}}function wY(e=fl()){return e.offline||e.slow||e.battery}let Zt=null;const da=new Set;function jY(){return Zt||(Zt=fl()),Zt}function MY(e){Zt={...e},vY(Zt),tm(Zt),da.forEach(t=>{try{t(Zt)}catch{}})}function TY(e){return da.add(e),()=>{da.delete(e)}}function tm(e){try{Object.defineProperty(navigator,"onLine",{configurable:!0,get:()=>!e.offline})}catch{}try{window.dispatchEvent(new Event(e.offline?"offline":"online"))}catch{}try{const t=e.slow?"2g":"4g",n=navigator.connection,o=r=>(Object.defineProperty(r,"effectiveType",{configurable:!0,get:()=>t}),Object.defineProperty(r,"saveData",{configurable:!0,get:()=>e.slow}),Object.defineProperty(r,"downlink",{configurable:!0,get:()=>e.slow?.3:10}),Object.defineProperty(r,"rtt",{configurable:!0,get:()=>e.slow?900:50}),r);if(n){o(n);try{n.dispatchEvent(new Event("change"))}catch{}}else Object.defineProperty(navigator,"connection",{configurable:!0,value:o({addEventListener(){},removeEventListener(){},dispatchEvent(){return!0}})})}catch{}try{navigator.getBattery=()=>Promise.resolve({level:e.battery?.08:.92,charging:!e.battery,chargingTime:e.battery?1/0:0,dischargingTime:e.battery?900:1/0,addEventListener(){},removeEventListener(){}})}catch{}try{Object.defineProperty(navigator,"deviceMemory",{configurable:!0,get:()=>e.battery?1:8})}catch{}}function xY(){const e=fl();wY(e)&&tm(e)}xY();try{performance.setResourceTimingBufferSize(1e3)}catch{}xp(document.getElementById("root")).render(m.jsx(yY,{}));export{Wq as $,Kp as A,$G as B,Qp as C,V4 as D,H4 as E,bV as F,ZW as G,JW as H,nV as I,C7 as J,tK as K,ia as L,EQ as M,x9 as N,_6 as O,CK as P,M7 as Q,T as R,ua as S,ti as T,B6 as U,eO as V,Tp as W,w9 as X,Np as Y,OG as Z,S as _,LY as a,MW as a$,HW as a0,rV as a1,oV as a2,b9 as a3,fK as a4,sV as a5,eV as a6,eK as a7,FW as a8,W4 as a9,NG as aA,jG as aB,MG as aC,TG as aD,EW as aE,VW as aF,qW as aG,KW as aH,UG as aI,BG as aJ,LW as aK,zW as aL,BW as aM,XW as aN,AG as aO,iV as aP,FG as aQ,UW as aR,PW as aS,SW as aT,OW as aU,TW as aV,WW as aW,Fq as aX,lV as aY,IW as aZ,jW as a_,_W as aa,kW as ab,P7 as ac,GW as ad,YW as ae,w7 as af,OV as ag,nQ as ah,xW as ai,DW as aj,RW as ak,CW as al,b7 as am,x7 as an,xO as ao,bO as ap,vQ as aq,aV as ar,hO as as,wW as at,tV as au,Bq as av,$W as aw,bW as ax,QW as ay,Uq as az,MY as b,AW as b0,NW as b1,LK as c,kY as d,FK as e,VK as f,jY as g,_Y as h,IY as i,m as j,zY as k,RY as l,OY as m,DY as n,EY as o,Uo as p,kO as q,x as r,TY as s,G9 as t,uh as u,o7 as v,jp as w,QH as x,DO as y,iG as z};
