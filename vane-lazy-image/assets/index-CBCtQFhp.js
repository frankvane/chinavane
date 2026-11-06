const __vite__mapDeps=(i,m=__vite__mapDeps,d=(m.f||(m.f=["./ComboA11ySeoDemo-Sr_zMI5x.js","./DemoLayout-CIyUTyZs.js","./ComboCacheDemo-DD6y2fwm.js","./ComboEnginePerfDemo-DaIlOr-C.js","./ComboErrorResilienceDemo-uMtX8wDn.js","./ComboInteractionOverlayDemo-C82_o1MJ.js","./ComboPerformanceDemo-DmEEqqMJ.js","./ComboResponsiveSeoWebPDemo-Bt6OoyWu.js","./ComboViewportInteractionDemo-BHKPAS3v.js","./ComboVisualEffectsDemo--WOXa24b.js","./ComboVisualEffectsPlusDemo-Clv9-n7x.js","./DependencyResolverDemo-CzeJ9Mn_.js","./advanced-Cn1IoZZP.js","./EngineInfraDemo-BA8QE3Pg.js","./PerformanceMonitoringDemo-CG1A0wCC.js","./PluginHotReloadDemo-DOfPkn2_.js","./PluginSandboxDemo-CEDKQ0x_.js","./VirtualGridDemo-DJqaFsJ9.js","./index.esm-BLSm-G_S.js","./VirtualHorizontalListDemo-HjQT6urZ.js","./VirtualVerticalListDemo-aP4_l3JE.js"])))=>i.map(i=>d[i]);
var lm=Object.defineProperty;var cm=(e,t,n)=>t in e?lm(e,t,{enumerable:!0,configurable:!0,writable:!0,value:n}):e[t]=n;var wl=(e,t,n)=>cm(e,typeof t!="symbol"?t+"":t,n);function um(e,t){for(var n=0;n<t.length;n++){const o=t[n];if(typeof o!="string"&&!Array.isArray(o)){for(const r in o)if(r!=="default"&&!(r in e)){const s=Object.getOwnPropertyDescriptor(o,r);s&&Object.defineProperty(e,r,s.get?s:{enumerable:!0,get:()=>o[r]})}}}return Object.freeze(Object.defineProperty(e,Symbol.toStringTag,{value:"Module"}))}(function(){const t=document.createElement("link").relList;if(t&&t.supports&&t.supports("modulepreload"))return;for(const r of document.querySelectorAll('link[rel="modulepreload"]'))o(r);new MutationObserver(r=>{for(const s of r)if(s.type==="childList")for(const i of s.addedNodes)i.tagName==="LINK"&&i.rel==="modulepreload"&&o(i)}).observe(document,{childList:!0,subtree:!0});function n(r){const s={};return r.integrity&&(s.integrity=r.integrity),r.referrerPolicy&&(s.referrerPolicy=r.referrerPolicy),r.crossOrigin==="use-credentials"?s.credentials="include":r.crossOrigin==="anonymous"?s.credentials="omit":s.credentials="same-origin",s}function o(r){if(r.ep)return;r.ep=!0;const s=n(r);fetch(r.href,s)}})();function dm(e){return e&&e.__esModule&&Object.prototype.hasOwnProperty.call(e,"default")?e.default:e}var du={exports:{}},ls={},pu={exports:{}},B={};/**
 * @license React
 * react.production.min.js
 *
 * Copyright (c) Facebook, Inc. and its affiliates.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */var Wo=Symbol.for("react.element"),pm=Symbol.for("react.portal"),mm=Symbol.for("react.fragment"),gm=Symbol.for("react.strict_mode"),fm=Symbol.for("react.profiler"),hm=Symbol.for("react.provider"),ym=Symbol.for("react.context"),vm=Symbol.for("react.forward_ref"),wm=Symbol.for("react.suspense"),xm=Symbol.for("react.memo"),bm=Symbol.for("react.lazy"),xl=Symbol.iterator;function Pm(e){return e===null||typeof e!="object"?null:(e=xl&&e[xl]||e["@@iterator"],typeof e=="function"?e:null)}var mu={isMounted:function(){return!1},enqueueForceUpdate:function(){},enqueueReplaceState:function(){},enqueueSetState:function(){}},gu=Object.assign,fu={};function Wn(e,t,n){this.props=e,this.context=t,this.refs=fu,this.updater=n||mu}Wn.prototype.isReactComponent={};Wn.prototype.setState=function(e,t){if(typeof e!="object"&&typeof e!="function"&&e!=null)throw Error("setState(...): takes an object of state variables to update or a function which returns an object of state variables.");this.updater.enqueueSetState(this,e,t,"setState")};Wn.prototype.forceUpdate=function(e){this.updater.enqueueForceUpdate(this,e,"forceUpdate")};function hu(){}hu.prototype=Wn.prototype;function fa(e,t,n){this.props=e,this.context=t,this.refs=fu,this.updater=n||mu}var ha=fa.prototype=new hu;ha.constructor=fa;gu(ha,Wn.prototype);ha.isPureReactComponent=!0;var bl=Array.isArray,yu=Object.prototype.hasOwnProperty,ya={current:null},vu={key:!0,ref:!0,__self:!0,__source:!0};function wu(e,t,n){var o,r={},s=null,i=null;if(t!=null)for(o in t.ref!==void 0&&(i=t.ref),t.key!==void 0&&(s=""+t.key),t)yu.call(t,o)&&!vu.hasOwnProperty(o)&&(r[o]=t[o]);var a=arguments.length-2;if(a===1)r.children=n;else if(1<a){for(var l=Array(a),c=0;c<a;c++)l[c]=arguments[c+2];r.children=l}if(e&&e.defaultProps)for(o in a=e.defaultProps,a)r[o]===void 0&&(r[o]=a[o]);return{$$typeof:Wo,type:e,key:s,ref:i,props:r,_owner:ya.current}}function $m(e,t){return{$$typeof:Wo,type:e.type,key:t,ref:e.ref,props:e.props,_owner:e._owner}}function va(e){return typeof e=="object"&&e!==null&&e.$$typeof===Wo}function Sm(e){var t={"=":"=0",":":"=2"};return"$"+e.replace(/[=:]/g,function(n){return t[n]})}var Pl=/\/+/g;function Is(e,t){return typeof e=="object"&&e!==null&&e.key!=null?Sm(""+e.key):t.toString(36)}function Pr(e,t,n,o,r){var s=typeof e;(s==="undefined"||s==="boolean")&&(e=null);var i=!1;if(e===null)i=!0;else switch(s){case"string":case"number":i=!0;break;case"object":switch(e.$$typeof){case Wo:case pm:i=!0}}if(i)return i=e,r=r(i),e=o===""?"."+Is(i,0):o,bl(r)?(n="",e!=null&&(n=e.replace(Pl,"$&/")+"/"),Pr(r,t,n,"",function(c){return c})):r!=null&&(va(r)&&(r=$m(r,n+(!r.key||i&&i.key===r.key?"":(""+r.key).replace(Pl,"$&/")+"/")+e)),t.push(r)),1;if(i=0,o=o===""?".":o+":",bl(e))for(var a=0;a<e.length;a++){s=e[a];var l=o+Is(s,a);i+=Pr(s,t,n,l,r)}else if(l=Pm(e),typeof l=="function")for(e=l.call(e),a=0;!(s=e.next()).done;)s=s.value,l=o+Is(s,a++),i+=Pr(s,t,n,l,r);else if(s==="object")throw t=String(e),Error("Objects are not valid as a React child (found: "+(t==="[object Object]"?"object with keys {"+Object.keys(e).join(", ")+"}":t)+"). If you meant to render a collection of children, use an array instead.");return i}function Zo(e,t,n){if(e==null)return e;var o=[],r=0;return Pr(e,o,"","",function(s){return t.call(n,s,r++)}),o}function Cm(e){if(e._status===-1){var t=e._result;t=t(),t.then(function(n){(e._status===0||e._status===-1)&&(e._status=1,e._result=n)},function(n){(e._status===0||e._status===-1)&&(e._status=2,e._result=n)}),e._status===-1&&(e._status=0,e._result=t)}if(e._status===1)return e._result.default;throw e._result}var Ie={current:null},$r={transition:null},Lm={ReactCurrentDispatcher:Ie,ReactCurrentBatchConfig:$r,ReactCurrentOwner:ya};function xu(){throw Error("act(...) is not supported in production builds of React.")}B.Children={map:Zo,forEach:function(e,t,n){Zo(e,function(){t.apply(this,arguments)},n)},count:function(e){var t=0;return Zo(e,function(){t++}),t},toArray:function(e){return Zo(e,function(t){return t})||[]},only:function(e){if(!va(e))throw Error("React.Children.only expected to receive a single React element child.");return e}};B.Component=Wn;B.Fragment=mm;B.Profiler=fm;B.PureComponent=fa;B.StrictMode=gm;B.Suspense=wm;B.__SECRET_INTERNALS_DO_NOT_USE_OR_YOU_WILL_BE_FIRED=Lm;B.act=xu;B.cloneElement=function(e,t,n){if(e==null)throw Error("React.cloneElement(...): The argument must be a React element, but you passed "+e+".");var o=gu({},e.props),r=e.key,s=e.ref,i=e._owner;if(t!=null){if(t.ref!==void 0&&(s=t.ref,i=ya.current),t.key!==void 0&&(r=""+t.key),e.type&&e.type.defaultProps)var a=e.type.defaultProps;for(l in t)yu.call(t,l)&&!vu.hasOwnProperty(l)&&(o[l]=t[l]===void 0&&a!==void 0?a[l]:t[l])}var l=arguments.length-2;if(l===1)o.children=n;else if(1<l){a=Array(l);for(var c=0;c<l;c++)a[c]=arguments[c+2];o.children=a}return{$$typeof:Wo,type:e.type,key:r,ref:s,props:o,_owner:i}};B.createContext=function(e){return e={$$typeof:ym,_currentValue:e,_currentValue2:e,_threadCount:0,Provider:null,Consumer:null,_defaultValue:null,_globalName:null},e.Provider={$$typeof:hm,_context:e},e.Consumer=e};B.createElement=wu;B.createFactory=function(e){var t=wu.bind(null,e);return t.type=e,t};B.createRef=function(){return{current:null}};B.forwardRef=function(e){return{$$typeof:vm,render:e}};B.isValidElement=va;B.lazy=function(e){return{$$typeof:bm,_payload:{_status:-1,_result:e},_init:Cm}};B.memo=function(e,t){return{$$typeof:xm,type:e,compare:t===void 0?null:t}};B.startTransition=function(e){var t=$r.transition;$r.transition={};try{e()}finally{$r.transition=t}};B.unstable_act=xu;B.useCallback=function(e,t){return Ie.current.useCallback(e,t)};B.useContext=function(e){return Ie.current.useContext(e)};B.useDebugValue=function(){};B.useDeferredValue=function(e){return Ie.current.useDeferredValue(e)};B.useEffect=function(e,t){return Ie.current.useEffect(e,t)};B.useId=function(){return Ie.current.useId()};B.useImperativeHandle=function(e,t,n){return Ie.current.useImperativeHandle(e,t,n)};B.useInsertionEffect=function(e,t){return Ie.current.useInsertionEffect(e,t)};B.useLayoutEffect=function(e,t){return Ie.current.useLayoutEffect(e,t)};B.useMemo=function(e,t){return Ie.current.useMemo(e,t)};B.useReducer=function(e,t,n){return Ie.current.useReducer(e,t,n)};B.useRef=function(e){return Ie.current.useRef(e)};B.useState=function(e){return Ie.current.useState(e)};B.useSyncExternalStore=function(e,t,n){return Ie.current.useSyncExternalStore(e,t,n)};B.useTransition=function(){return Ie.current.useTransition()};B.version="18.3.1";pu.exports=B;var x=pu.exports;const A=dm(x),Im=um({__proto__:null,default:A},[x]);/**
 * @license React
 * react-jsx-runtime.production.min.js
 *
 * Copyright (c) Facebook, Inc. and its affiliates.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */var km=x,_m=Symbol.for("react.element"),Em=Symbol.for("react.fragment"),Rm=Object.prototype.hasOwnProperty,zm=km.__SECRET_INTERNALS_DO_NOT_USE_OR_YOU_WILL_BE_FIRED.ReactCurrentOwner,Om={key:!0,ref:!0,__self:!0,__source:!0};function bu(e,t,n){var o,r={},s=null,i=null;n!==void 0&&(s=""+n),t.key!==void 0&&(s=""+t.key),t.ref!==void 0&&(i=t.ref);for(o in t)Rm.call(t,o)&&!Om.hasOwnProperty(o)&&(r[o]=t[o]);if(e&&e.defaultProps)for(o in t=e.defaultProps,t)r[o]===void 0&&(r[o]=t[o]);return{$$typeof:_m,type:e,key:s,ref:i,props:r,_owner:zm.current}}ls.Fragment=Em;ls.jsx=bu;ls.jsxs=bu;du.exports=ls;var m=du.exports,Pu={exports:{}},Be={},$u={exports:{}},Su={};/**
 * @license React
 * scheduler.production.min.js
 *
 * Copyright (c) Facebook, Inc. and its affiliates.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */(function(e){function t(R,M){var T=R.length;R.push(M);e:for(;0<T;){var H=T-1>>>1,V=R[H];if(0<r(V,M))R[H]=M,R[T]=V,T=H;else break e}}function n(R){return R.length===0?null:R[0]}function o(R){if(R.length===0)return null;var M=R[0],T=R.pop();if(T!==M){R[0]=T;e:for(var H=0,V=R.length,G=V>>>1;H<G;){var q=2*(H+1)-1,le=R[q],pe=q+1,ee=R[pe];if(0>r(le,T))pe<V&&0>r(ee,le)?(R[H]=ee,R[pe]=T,H=pe):(R[H]=le,R[q]=T,H=q);else if(pe<V&&0>r(ee,T))R[H]=ee,R[pe]=T,H=pe;else break e}}return M}function r(R,M){var T=R.sortIndex-M.sortIndex;return T!==0?T:R.id-M.id}if(typeof performance=="object"&&typeof performance.now=="function"){var s=performance;e.unstable_now=function(){return s.now()}}else{var i=Date,a=i.now();e.unstable_now=function(){return i.now()-a}}var l=[],c=[],u=1,d=null,p=3,g=!1,v=!1,w=!1,b=typeof setTimeout=="function"?setTimeout:null,y=typeof clearTimeout=="function"?clearTimeout:null,f=typeof setImmediate<"u"?setImmediate:null;typeof navigator<"u"&&navigator.scheduling!==void 0&&navigator.scheduling.isInputPending!==void 0&&navigator.scheduling.isInputPending.bind(navigator.scheduling);function h(R){for(var M=n(c);M!==null;){if(M.callback===null)o(c);else if(M.startTime<=R)o(c),M.sortIndex=M.expirationTime,t(l,M);else break;M=n(c)}}function P(R){if(w=!1,h(R),!v)if(n(l)!==null)v=!0,re($);else{var M=n(c);M!==null&&K(P,M.startTime-R)}}function $(R,M){v=!1,w&&(w=!1,y(_),_=-1),g=!0;var T=p;try{for(h(M),d=n(l);d!==null&&(!(d.expirationTime>M)||R&&!j());){var H=d.callback;if(typeof H=="function"){d.callback=null,p=d.priorityLevel;var V=H(d.expirationTime<=M);M=e.unstable_now(),typeof V=="function"?d.callback=V:d===n(l)&&o(l),h(M)}else o(l);d=n(l)}if(d!==null)var G=!0;else{var q=n(c);q!==null&&K(P,q.startTime-M),G=!1}return G}finally{d=null,p=T,g=!1}}var I=!1,k=null,_=-1,S=5,L=-1;function j(){return!(e.unstable_now()-L<S)}function N(){if(k!==null){var R=e.unstable_now();L=R;var M=!0;try{M=k(!0,R)}finally{M?z():(I=!1,k=null)}}else I=!1}var z;if(typeof f=="function")z=function(){f(N)};else if(typeof MessageChannel<"u"){var O=new MessageChannel,U=O.port2;O.port1.onmessage=N,z=function(){U.postMessage(null)}}else z=function(){b(N,0)};function re(R){k=R,I||(I=!0,z())}function K(R,M){_=b(function(){R(e.unstable_now())},M)}e.unstable_IdlePriority=5,e.unstable_ImmediatePriority=1,e.unstable_LowPriority=4,e.unstable_NormalPriority=3,e.unstable_Profiling=null,e.unstable_UserBlockingPriority=2,e.unstable_cancelCallback=function(R){R.callback=null},e.unstable_continueExecution=function(){v||g||(v=!0,re($))},e.unstable_forceFrameRate=function(R){0>R||125<R?console.error("forceFrameRate takes a positive int between 0 and 125, forcing frame rates higher than 125 fps is not supported"):S=0<R?Math.floor(1e3/R):5},e.unstable_getCurrentPriorityLevel=function(){return p},e.unstable_getFirstCallbackNode=function(){return n(l)},e.unstable_next=function(R){switch(p){case 1:case 2:case 3:var M=3;break;default:M=p}var T=p;p=M;try{return R()}finally{p=T}},e.unstable_pauseExecution=function(){},e.unstable_requestPaint=function(){},e.unstable_runWithPriority=function(R,M){switch(R){case 1:case 2:case 3:case 4:case 5:break;default:R=3}var T=p;p=R;try{return M()}finally{p=T}},e.unstable_scheduleCallback=function(R,M,T){var H=e.unstable_now();switch(typeof T=="object"&&T!==null?(T=T.delay,T=typeof T=="number"&&0<T?H+T:H):T=H,R){case 1:var V=-1;break;case 2:V=250;break;case 5:V=1073741823;break;case 4:V=1e4;break;default:V=5e3}return V=T+V,R={id:u++,callback:M,priorityLevel:R,startTime:T,expirationTime:V,sortIndex:-1},T>H?(R.sortIndex=T,t(c,R),n(l)===null&&R===n(c)&&(w?(y(_),_=-1):w=!0,K(P,T-H))):(R.sortIndex=V,t(l,R),v||g||(v=!0,re($))),R},e.unstable_shouldYield=j,e.unstable_wrapCallback=function(R){var M=p;return function(){var T=p;p=M;try{return R.apply(this,arguments)}finally{p=T}}}})(Su);$u.exports=Su;var Dm=$u.exports;/**
 * @license React
 * react-dom.production.min.js
 *
 * Copyright (c) Facebook, Inc. and its affiliates.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */var Mm=x,Ae=Dm;function E(e){for(var t="https://reactjs.org/docs/error-decoder.html?invariant="+e,n=1;n<arguments.length;n++)t+="&args[]="+encodeURIComponent(arguments[n]);return"Minified React error #"+e+"; visit "+t+" for the full message or use the non-minified dev environment for full errors and additional helpful warnings."}var Cu=new Set,So={};function cn(e,t){jn(e,t),jn(e+"Capture",t)}function jn(e,t){for(So[e]=t,e=0;e<t.length;e++)Cu.add(t[e])}var gt=!(typeof window>"u"||typeof window.document>"u"||typeof window.document.createElement>"u"),pi=Object.prototype.hasOwnProperty,jm=/^[:A-Z_a-z\u00C0-\u00D6\u00D8-\u00F6\u00F8-\u02FF\u0370-\u037D\u037F-\u1FFF\u200C-\u200D\u2070-\u218F\u2C00-\u2FEF\u3001-\uD7FF\uF900-\uFDCF\uFDF0-\uFFFD][:A-Z_a-z\u00C0-\u00D6\u00D8-\u00F6\u00F8-\u02FF\u0370-\u037D\u037F-\u1FFF\u200C-\u200D\u2070-\u218F\u2C00-\u2FEF\u3001-\uD7FF\uF900-\uFDCF\uFDF0-\uFFFD\-.0-9\u00B7\u0300-\u036F\u203F-\u2040]*$/,$l={},Sl={};function Tm(e){return pi.call(Sl,e)?!0:pi.call($l,e)?!1:jm.test(e)?Sl[e]=!0:($l[e]=!0,!1)}function Nm(e,t,n,o){if(n!==null&&n.type===0)return!1;switch(typeof t){case"function":case"symbol":return!0;case"boolean":return o?!1:n!==null?!n.acceptsBooleans:(e=e.toLowerCase().slice(0,5),e!=="data-"&&e!=="aria-");default:return!1}}function Am(e,t,n,o){if(t===null||typeof t>"u"||Nm(e,t,n,o))return!0;if(o)return!1;if(n!==null)switch(n.type){case 3:return!t;case 4:return t===!1;case 5:return isNaN(t);case 6:return isNaN(t)||1>t}return!1}function ke(e,t,n,o,r,s,i){this.acceptsBooleans=t===2||t===3||t===4,this.attributeName=o,this.attributeNamespace=r,this.mustUseProperty=n,this.propertyName=e,this.type=t,this.sanitizeURL=s,this.removeEmptyString=i}var ve={};"children dangerouslySetInnerHTML defaultValue defaultChecked innerHTML suppressContentEditableWarning suppressHydrationWarning style".split(" ").forEach(function(e){ve[e]=new ke(e,0,!1,e,null,!1,!1)});[["acceptCharset","accept-charset"],["className","class"],["htmlFor","for"],["httpEquiv","http-equiv"]].forEach(function(e){var t=e[0];ve[t]=new ke(t,1,!1,e[1],null,!1,!1)});["contentEditable","draggable","spellCheck","value"].forEach(function(e){ve[e]=new ke(e,2,!1,e.toLowerCase(),null,!1,!1)});["autoReverse","externalResourcesRequired","focusable","preserveAlpha"].forEach(function(e){ve[e]=new ke(e,2,!1,e,null,!1,!1)});"allowFullScreen async autoFocus autoPlay controls default defer disabled disablePictureInPicture disableRemotePlayback formNoValidate hidden loop noModule noValidate open playsInline readOnly required reversed scoped seamless itemScope".split(" ").forEach(function(e){ve[e]=new ke(e,3,!1,e.toLowerCase(),null,!1,!1)});["checked","multiple","muted","selected"].forEach(function(e){ve[e]=new ke(e,3,!0,e,null,!1,!1)});["capture","download"].forEach(function(e){ve[e]=new ke(e,4,!1,e,null,!1,!1)});["cols","rows","size","span"].forEach(function(e){ve[e]=new ke(e,6,!1,e,null,!1,!1)});["rowSpan","start"].forEach(function(e){ve[e]=new ke(e,5,!1,e.toLowerCase(),null,!1,!1)});var wa=/[\-:]([a-z])/g;function xa(e){return e[1].toUpperCase()}"accent-height alignment-baseline arabic-form baseline-shift cap-height clip-path clip-rule color-interpolation color-interpolation-filters color-profile color-rendering dominant-baseline enable-background fill-opacity fill-rule flood-color flood-opacity font-family font-size font-size-adjust font-stretch font-style font-variant font-weight glyph-name glyph-orientation-horizontal glyph-orientation-vertical horiz-adv-x horiz-origin-x image-rendering letter-spacing lighting-color marker-end marker-mid marker-start overline-position overline-thickness paint-order panose-1 pointer-events rendering-intent shape-rendering stop-color stop-opacity strikethrough-position strikethrough-thickness stroke-dasharray stroke-dashoffset stroke-linecap stroke-linejoin stroke-miterlimit stroke-opacity stroke-width text-anchor text-decoration text-rendering underline-position underline-thickness unicode-bidi unicode-range units-per-em v-alphabetic v-hanging v-ideographic v-mathematical vector-effect vert-adv-y vert-origin-x vert-origin-y word-spacing writing-mode xmlns:xlink x-height".split(" ").forEach(function(e){var t=e.replace(wa,xa);ve[t]=new ke(t,1,!1,e,null,!1,!1)});"xlink:actuate xlink:arcrole xlink:role xlink:show xlink:title xlink:type".split(" ").forEach(function(e){var t=e.replace(wa,xa);ve[t]=new ke(t,1,!1,e,"http://www.w3.org/1999/xlink",!1,!1)});["xml:base","xml:lang","xml:space"].forEach(function(e){var t=e.replace(wa,xa);ve[t]=new ke(t,1,!1,e,"http://www.w3.org/XML/1998/namespace",!1,!1)});["tabIndex","crossOrigin"].forEach(function(e){ve[e]=new ke(e,1,!1,e.toLowerCase(),null,!1,!1)});ve.xlinkHref=new ke("xlinkHref",1,!1,"xlink:href","http://www.w3.org/1999/xlink",!0,!1);["src","href","action","formAction"].forEach(function(e){ve[e]=new ke(e,1,!1,e.toLowerCase(),null,!0,!0)});function ba(e,t,n,o){var r=ve.hasOwnProperty(t)?ve[t]:null;(r!==null?r.type!==0:o||!(2<t.length)||t[0]!=="o"&&t[0]!=="O"||t[1]!=="n"&&t[1]!=="N")&&(Am(t,n,r,o)&&(n=null),o||r===null?Tm(t)&&(n===null?e.removeAttribute(t):e.setAttribute(t,""+n)):r.mustUseProperty?e[r.propertyName]=n===null?r.type===3?!1:"":n:(t=r.attributeName,o=r.attributeNamespace,n===null?e.removeAttribute(t):(r=r.type,n=r===3||r===4&&n===!0?"":""+n,o?e.setAttributeNS(o,t,n):e.setAttribute(t,n))))}var vt=Mm.__SECRET_INTERNALS_DO_NOT_USE_OR_YOU_WILL_BE_FIRED,Jo=Symbol.for("react.element"),hn=Symbol.for("react.portal"),yn=Symbol.for("react.fragment"),Pa=Symbol.for("react.strict_mode"),mi=Symbol.for("react.profiler"),Lu=Symbol.for("react.provider"),Iu=Symbol.for("react.context"),$a=Symbol.for("react.forward_ref"),gi=Symbol.for("react.suspense"),fi=Symbol.for("react.suspense_list"),Sa=Symbol.for("react.memo"),Pt=Symbol.for("react.lazy"),ku=Symbol.for("react.offscreen"),Cl=Symbol.iterator;function eo(e){return e===null||typeof e!="object"?null:(e=Cl&&e[Cl]||e["@@iterator"],typeof e=="function"?e:null)}var oe=Object.assign,ks;function lo(e){if(ks===void 0)try{throw Error()}catch(n){var t=n.stack.trim().match(/\n( *(at )?)/);ks=t&&t[1]||""}return`
`+ks+e}var _s=!1;function Es(e,t){if(!e||_s)return"";_s=!0;var n=Error.prepareStackTrace;Error.prepareStackTrace=void 0;try{if(t)if(t=function(){throw Error()},Object.defineProperty(t.prototype,"props",{set:function(){throw Error()}}),typeof Reflect=="object"&&Reflect.construct){try{Reflect.construct(t,[])}catch(c){var o=c}Reflect.construct(e,[],t)}else{try{t.call()}catch(c){o=c}e.call(t.prototype)}else{try{throw Error()}catch(c){o=c}e()}}catch(c){if(c&&o&&typeof c.stack=="string"){for(var r=c.stack.split(`
`),s=o.stack.split(`
`),i=r.length-1,a=s.length-1;1<=i&&0<=a&&r[i]!==s[a];)a--;for(;1<=i&&0<=a;i--,a--)if(r[i]!==s[a]){if(i!==1||a!==1)do if(i--,a--,0>a||r[i]!==s[a]){var l=`
`+r[i].replace(" at new "," at ");return e.displayName&&l.includes("<anonymous>")&&(l=l.replace("<anonymous>",e.displayName)),l}while(1<=i&&0<=a);break}}}finally{_s=!1,Error.prepareStackTrace=n}return(e=e?e.displayName||e.name:"")?lo(e):""}function Bm(e){switch(e.tag){case 5:return lo(e.type);case 16:return lo("Lazy");case 13:return lo("Suspense");case 19:return lo("SuspenseList");case 0:case 2:case 15:return e=Es(e.type,!1),e;case 11:return e=Es(e.type.render,!1),e;case 1:return e=Es(e.type,!0),e;default:return""}}function hi(e){if(e==null)return null;if(typeof e=="function")return e.displayName||e.name||null;if(typeof e=="string")return e;switch(e){case yn:return"Fragment";case hn:return"Portal";case mi:return"Profiler";case Pa:return"StrictMode";case gi:return"Suspense";case fi:return"SuspenseList"}if(typeof e=="object")switch(e.$$typeof){case Iu:return(e.displayName||"Context")+".Consumer";case Lu:return(e._context.displayName||"Context")+".Provider";case $a:var t=e.render;return e=e.displayName,e||(e=t.displayName||t.name||"",e=e!==""?"ForwardRef("+e+")":"ForwardRef"),e;case Sa:return t=e.displayName||null,t!==null?t:hi(e.type)||"Memo";case Pt:t=e._payload,e=e._init;try{return hi(e(t))}catch{}}return null}function Um(e){var t=e.type;switch(e.tag){case 24:return"Cache";case 9:return(t.displayName||"Context")+".Consumer";case 10:return(t._context.displayName||"Context")+".Provider";case 18:return"DehydratedFragment";case 11:return e=t.render,e=e.displayName||e.name||"",t.displayName||(e!==""?"ForwardRef("+e+")":"ForwardRef");case 7:return"Fragment";case 5:return t;case 4:return"Portal";case 3:return"Root";case 6:return"Text";case 16:return hi(t);case 8:return t===Pa?"StrictMode":"Mode";case 22:return"Offscreen";case 12:return"Profiler";case 21:return"Scope";case 13:return"Suspense";case 19:return"SuspenseList";case 25:return"TracingMarker";case 1:case 0:case 17:case 2:case 14:case 15:if(typeof t=="function")return t.displayName||t.name||null;if(typeof t=="string")return t}return null}function At(e){switch(typeof e){case"boolean":case"number":case"string":case"undefined":return e;case"object":return e;default:return""}}function _u(e){var t=e.type;return(e=e.nodeName)&&e.toLowerCase()==="input"&&(t==="checkbox"||t==="radio")}function Fm(e){var t=_u(e)?"checked":"value",n=Object.getOwnPropertyDescriptor(e.constructor.prototype,t),o=""+e[t];if(!e.hasOwnProperty(t)&&typeof n<"u"&&typeof n.get=="function"&&typeof n.set=="function"){var r=n.get,s=n.set;return Object.defineProperty(e,t,{configurable:!0,get:function(){return r.call(this)},set:function(i){o=""+i,s.call(this,i)}}),Object.defineProperty(e,t,{enumerable:n.enumerable}),{getValue:function(){return o},setValue:function(i){o=""+i},stopTracking:function(){e._valueTracker=null,delete e[t]}}}}function er(e){e._valueTracker||(e._valueTracker=Fm(e))}function Eu(e){if(!e)return!1;var t=e._valueTracker;if(!t)return!0;var n=t.getValue(),o="";return e&&(o=_u(e)?e.checked?"true":"false":e.value),e=o,e!==n?(t.setValue(e),!0):!1}function Dr(e){if(e=e||(typeof document<"u"?document:void 0),typeof e>"u")return null;try{return e.activeElement||e.body}catch{return e.body}}function yi(e,t){var n=t.checked;return oe({},t,{defaultChecked:void 0,defaultValue:void 0,value:void 0,checked:n??e._wrapperState.initialChecked})}function Ll(e,t){var n=t.defaultValue==null?"":t.defaultValue,o=t.checked!=null?t.checked:t.defaultChecked;n=At(t.value!=null?t.value:n),e._wrapperState={initialChecked:o,initialValue:n,controlled:t.type==="checkbox"||t.type==="radio"?t.checked!=null:t.value!=null}}function Ru(e,t){t=t.checked,t!=null&&ba(e,"checked",t,!1)}function vi(e,t){Ru(e,t);var n=At(t.value),o=t.type;if(n!=null)o==="number"?(n===0&&e.value===""||e.value!=n)&&(e.value=""+n):e.value!==""+n&&(e.value=""+n);else if(o==="submit"||o==="reset"){e.removeAttribute("value");return}t.hasOwnProperty("value")?wi(e,t.type,n):t.hasOwnProperty("defaultValue")&&wi(e,t.type,At(t.defaultValue)),t.checked==null&&t.defaultChecked!=null&&(e.defaultChecked=!!t.defaultChecked)}function Il(e,t,n){if(t.hasOwnProperty("value")||t.hasOwnProperty("defaultValue")){var o=t.type;if(!(o!=="submit"&&o!=="reset"||t.value!==void 0&&t.value!==null))return;t=""+e._wrapperState.initialValue,n||t===e.value||(e.value=t),e.defaultValue=t}n=e.name,n!==""&&(e.name=""),e.defaultChecked=!!e._wrapperState.initialChecked,n!==""&&(e.name=n)}function wi(e,t,n){(t!=="number"||Dr(e.ownerDocument)!==e)&&(n==null?e.defaultValue=""+e._wrapperState.initialValue:e.defaultValue!==""+n&&(e.defaultValue=""+n))}var co=Array.isArray;function kn(e,t,n,o){if(e=e.options,t){t={};for(var r=0;r<n.length;r++)t["$"+n[r]]=!0;for(n=0;n<e.length;n++)r=t.hasOwnProperty("$"+e[n].value),e[n].selected!==r&&(e[n].selected=r),r&&o&&(e[n].defaultSelected=!0)}else{for(n=""+At(n),t=null,r=0;r<e.length;r++){if(e[r].value===n){e[r].selected=!0,o&&(e[r].defaultSelected=!0);return}t!==null||e[r].disabled||(t=e[r])}t!==null&&(t.selected=!0)}}function xi(e,t){if(t.dangerouslySetInnerHTML!=null)throw Error(E(91));return oe({},t,{value:void 0,defaultValue:void 0,children:""+e._wrapperState.initialValue})}function kl(e,t){var n=t.value;if(n==null){if(n=t.children,t=t.defaultValue,n!=null){if(t!=null)throw Error(E(92));if(co(n)){if(1<n.length)throw Error(E(93));n=n[0]}t=n}t==null&&(t=""),n=t}e._wrapperState={initialValue:At(n)}}function zu(e,t){var n=At(t.value),o=At(t.defaultValue);n!=null&&(n=""+n,n!==e.value&&(e.value=n),t.defaultValue==null&&e.defaultValue!==n&&(e.defaultValue=n)),o!=null&&(e.defaultValue=""+o)}function _l(e){var t=e.textContent;t===e._wrapperState.initialValue&&t!==""&&t!==null&&(e.value=t)}function Ou(e){switch(e){case"svg":return"http://www.w3.org/2000/svg";case"math":return"http://www.w3.org/1998/Math/MathML";default:return"http://www.w3.org/1999/xhtml"}}function bi(e,t){return e==null||e==="http://www.w3.org/1999/xhtml"?Ou(t):e==="http://www.w3.org/2000/svg"&&t==="foreignObject"?"http://www.w3.org/1999/xhtml":e}var tr,Du=function(e){return typeof MSApp<"u"&&MSApp.execUnsafeLocalFunction?function(t,n,o,r){MSApp.execUnsafeLocalFunction(function(){return e(t,n,o,r)})}:e}(function(e,t){if(e.namespaceURI!=="http://www.w3.org/2000/svg"||"innerHTML"in e)e.innerHTML=t;else{for(tr=tr||document.createElement("div"),tr.innerHTML="<svg>"+t.valueOf().toString()+"</svg>",t=tr.firstChild;e.firstChild;)e.removeChild(e.firstChild);for(;t.firstChild;)e.appendChild(t.firstChild)}});function Co(e,t){if(t){var n=e.firstChild;if(n&&n===e.lastChild&&n.nodeType===3){n.nodeValue=t;return}}e.textContent=t}var fo={animationIterationCount:!0,aspectRatio:!0,borderImageOutset:!0,borderImageSlice:!0,borderImageWidth:!0,boxFlex:!0,boxFlexGroup:!0,boxOrdinalGroup:!0,columnCount:!0,columns:!0,flex:!0,flexGrow:!0,flexPositive:!0,flexShrink:!0,flexNegative:!0,flexOrder:!0,gridArea:!0,gridRow:!0,gridRowEnd:!0,gridRowSpan:!0,gridRowStart:!0,gridColumn:!0,gridColumnEnd:!0,gridColumnSpan:!0,gridColumnStart:!0,fontWeight:!0,lineClamp:!0,lineHeight:!0,opacity:!0,order:!0,orphans:!0,tabSize:!0,widows:!0,zIndex:!0,zoom:!0,fillOpacity:!0,floodOpacity:!0,stopOpacity:!0,strokeDasharray:!0,strokeDashoffset:!0,strokeMiterlimit:!0,strokeOpacity:!0,strokeWidth:!0},Vm=["Webkit","ms","Moz","O"];Object.keys(fo).forEach(function(e){Vm.forEach(function(t){t=t+e.charAt(0).toUpperCase()+e.substring(1),fo[t]=fo[e]})});function Mu(e,t,n){return t==null||typeof t=="boolean"||t===""?"":n||typeof t!="number"||t===0||fo.hasOwnProperty(e)&&fo[e]?(""+t).trim():t+"px"}function ju(e,t){e=e.style;for(var n in t)if(t.hasOwnProperty(n)){var o=n.indexOf("--")===0,r=Mu(n,t[n],o);n==="float"&&(n="cssFloat"),o?e.setProperty(n,r):e[n]=r}}var Wm=oe({menuitem:!0},{area:!0,base:!0,br:!0,col:!0,embed:!0,hr:!0,img:!0,input:!0,keygen:!0,link:!0,meta:!0,param:!0,source:!0,track:!0,wbr:!0});function Pi(e,t){if(t){if(Wm[e]&&(t.children!=null||t.dangerouslySetInnerHTML!=null))throw Error(E(137,e));if(t.dangerouslySetInnerHTML!=null){if(t.children!=null)throw Error(E(60));if(typeof t.dangerouslySetInnerHTML!="object"||!("__html"in t.dangerouslySetInnerHTML))throw Error(E(61))}if(t.style!=null&&typeof t.style!="object")throw Error(E(62))}}function $i(e,t){if(e.indexOf("-")===-1)return typeof t.is=="string";switch(e){case"annotation-xml":case"color-profile":case"font-face":case"font-face-src":case"font-face-uri":case"font-face-format":case"font-face-name":case"missing-glyph":return!1;default:return!0}}var Si=null;function Ca(e){return e=e.target||e.srcElement||window,e.correspondingUseElement&&(e=e.correspondingUseElement),e.nodeType===3?e.parentNode:e}var Ci=null,_n=null,En=null;function El(e){if(e=qo(e)){if(typeof Ci!="function")throw Error(E(280));var t=e.stateNode;t&&(t=ms(t),Ci(e.stateNode,e.type,t))}}function Tu(e){_n?En?En.push(e):En=[e]:_n=e}function Nu(){if(_n){var e=_n,t=En;if(En=_n=null,El(e),t)for(e=0;e<t.length;e++)El(t[e])}}function Au(e,t){return e(t)}function Bu(){}var Rs=!1;function Uu(e,t,n){if(Rs)return e(t,n);Rs=!0;try{return Au(e,t,n)}finally{Rs=!1,(_n!==null||En!==null)&&(Bu(),Nu())}}function Lo(e,t){var n=e.stateNode;if(n===null)return null;var o=ms(n);if(o===null)return null;n=o[t];e:switch(t){case"onClick":case"onClickCapture":case"onDoubleClick":case"onDoubleClickCapture":case"onMouseDown":case"onMouseDownCapture":case"onMouseMove":case"onMouseMoveCapture":case"onMouseUp":case"onMouseUpCapture":case"onMouseEnter":(o=!o.disabled)||(e=e.type,o=!(e==="button"||e==="input"||e==="select"||e==="textarea")),e=!o;break e;default:e=!1}if(e)return null;if(n&&typeof n!="function")throw Error(E(231,t,typeof n));return n}var Li=!1;if(gt)try{var to={};Object.defineProperty(to,"passive",{get:function(){Li=!0}}),window.addEventListener("test",to,to),window.removeEventListener("test",to,to)}catch{Li=!1}function Hm(e,t,n,o,r,s,i,a,l){var c=Array.prototype.slice.call(arguments,3);try{t.apply(n,c)}catch(u){this.onError(u)}}var ho=!1,Mr=null,jr=!1,Ii=null,Gm={onError:function(e){ho=!0,Mr=e}};function qm(e,t,n,o,r,s,i,a,l){ho=!1,Mr=null,Hm.apply(Gm,arguments)}function Qm(e,t,n,o,r,s,i,a,l){if(qm.apply(this,arguments),ho){if(ho){var c=Mr;ho=!1,Mr=null}else throw Error(E(198));jr||(jr=!0,Ii=c)}}function un(e){var t=e,n=e;if(e.alternate)for(;t.return;)t=t.return;else{e=t;do t=e,t.flags&4098&&(n=t.return),e=t.return;while(e)}return t.tag===3?n:null}function Fu(e){if(e.tag===13){var t=e.memoizedState;if(t===null&&(e=e.alternate,e!==null&&(t=e.memoizedState)),t!==null)return t.dehydrated}return null}function Rl(e){if(un(e)!==e)throw Error(E(188))}function Km(e){var t=e.alternate;if(!t){if(t=un(e),t===null)throw Error(E(188));return t!==e?null:e}for(var n=e,o=t;;){var r=n.return;if(r===null)break;var s=r.alternate;if(s===null){if(o=r.return,o!==null){n=o;continue}break}if(r.child===s.child){for(s=r.child;s;){if(s===n)return Rl(r),e;if(s===o)return Rl(r),t;s=s.sibling}throw Error(E(188))}if(n.return!==o.return)n=r,o=s;else{for(var i=!1,a=r.child;a;){if(a===n){i=!0,n=r,o=s;break}if(a===o){i=!0,o=r,n=s;break}a=a.sibling}if(!i){for(a=s.child;a;){if(a===n){i=!0,n=s,o=r;break}if(a===o){i=!0,o=s,n=r;break}a=a.sibling}if(!i)throw Error(E(189))}}if(n.alternate!==o)throw Error(E(190))}if(n.tag!==3)throw Error(E(188));return n.stateNode.current===n?e:t}function Vu(e){return e=Km(e),e!==null?Wu(e):null}function Wu(e){if(e.tag===5||e.tag===6)return e;for(e=e.child;e!==null;){var t=Wu(e);if(t!==null)return t;e=e.sibling}return null}var Hu=Ae.unstable_scheduleCallback,zl=Ae.unstable_cancelCallback,Ym=Ae.unstable_shouldYield,Xm=Ae.unstable_requestPaint,ie=Ae.unstable_now,Zm=Ae.unstable_getCurrentPriorityLevel,La=Ae.unstable_ImmediatePriority,Gu=Ae.unstable_UserBlockingPriority,Tr=Ae.unstable_NormalPriority,Jm=Ae.unstable_LowPriority,qu=Ae.unstable_IdlePriority,cs=null,it=null;function eg(e){if(it&&typeof it.onCommitFiberRoot=="function")try{it.onCommitFiberRoot(cs,e,void 0,(e.current.flags&128)===128)}catch{}}var Je=Math.clz32?Math.clz32:og,tg=Math.log,ng=Math.LN2;function og(e){return e>>>=0,e===0?32:31-(tg(e)/ng|0)|0}var nr=64,or=4194304;function uo(e){switch(e&-e){case 1:return 1;case 2:return 2;case 4:return 4;case 8:return 8;case 16:return 16;case 32:return 32;case 64:case 128:case 256:case 512:case 1024:case 2048:case 4096:case 8192:case 16384:case 32768:case 65536:case 131072:case 262144:case 524288:case 1048576:case 2097152:return e&4194240;case 4194304:case 8388608:case 16777216:case 33554432:case 67108864:return e&130023424;case 134217728:return 134217728;case 268435456:return 268435456;case 536870912:return 536870912;case 1073741824:return 1073741824;default:return e}}function Nr(e,t){var n=e.pendingLanes;if(n===0)return 0;var o=0,r=e.suspendedLanes,s=e.pingedLanes,i=n&268435455;if(i!==0){var a=i&~r;a!==0?o=uo(a):(s&=i,s!==0&&(o=uo(s)))}else i=n&~r,i!==0?o=uo(i):s!==0&&(o=uo(s));if(o===0)return 0;if(t!==0&&t!==o&&!(t&r)&&(r=o&-o,s=t&-t,r>=s||r===16&&(s&4194240)!==0))return t;if(o&4&&(o|=n&16),t=e.entangledLanes,t!==0)for(e=e.entanglements,t&=o;0<t;)n=31-Je(t),r=1<<n,o|=e[n],t&=~r;return o}function rg(e,t){switch(e){case 1:case 2:case 4:return t+250;case 8:case 16:case 32:case 64:case 128:case 256:case 512:case 1024:case 2048:case 4096:case 8192:case 16384:case 32768:case 65536:case 131072:case 262144:case 524288:case 1048576:case 2097152:return t+5e3;case 4194304:case 8388608:case 16777216:case 33554432:case 67108864:return-1;case 134217728:case 268435456:case 536870912:case 1073741824:return-1;default:return-1}}function sg(e,t){for(var n=e.suspendedLanes,o=e.pingedLanes,r=e.expirationTimes,s=e.pendingLanes;0<s;){var i=31-Je(s),a=1<<i,l=r[i];l===-1?(!(a&n)||a&o)&&(r[i]=rg(a,t)):l<=t&&(e.expiredLanes|=a),s&=~a}}function ki(e){return e=e.pendingLanes&-1073741825,e!==0?e:e&1073741824?1073741824:0}function Qu(){var e=nr;return nr<<=1,!(nr&4194240)&&(nr=64),e}function zs(e){for(var t=[],n=0;31>n;n++)t.push(e);return t}function Ho(e,t,n){e.pendingLanes|=t,t!==536870912&&(e.suspendedLanes=0,e.pingedLanes=0),e=e.eventTimes,t=31-Je(t),e[t]=n}function ig(e,t){var n=e.pendingLanes&~t;e.pendingLanes=t,e.suspendedLanes=0,e.pingedLanes=0,e.expiredLanes&=t,e.mutableReadLanes&=t,e.entangledLanes&=t,t=e.entanglements;var o=e.eventTimes;for(e=e.expirationTimes;0<n;){var r=31-Je(n),s=1<<r;t[r]=0,o[r]=-1,e[r]=-1,n&=~s}}function Ia(e,t){var n=e.entangledLanes|=t;for(e=e.entanglements;n;){var o=31-Je(n),r=1<<o;r&t|e[o]&t&&(e[o]|=t),n&=~r}}var Q=0;function Ku(e){return e&=-e,1<e?4<e?e&268435455?16:536870912:4:1}var Yu,ka,Xu,Zu,Ju,_i=!1,rr=[],Et=null,Rt=null,zt=null,Io=new Map,ko=new Map,St=[],ag="mousedown mouseup touchcancel touchend touchstart auxclick dblclick pointercancel pointerdown pointerup dragend dragstart drop compositionend compositionstart keydown keypress keyup input textInput copy cut paste click change contextmenu reset submit".split(" ");function Ol(e,t){switch(e){case"focusin":case"focusout":Et=null;break;case"dragenter":case"dragleave":Rt=null;break;case"mouseover":case"mouseout":zt=null;break;case"pointerover":case"pointerout":Io.delete(t.pointerId);break;case"gotpointercapture":case"lostpointercapture":ko.delete(t.pointerId)}}function no(e,t,n,o,r,s){return e===null||e.nativeEvent!==s?(e={blockedOn:t,domEventName:n,eventSystemFlags:o,nativeEvent:s,targetContainers:[r]},t!==null&&(t=qo(t),t!==null&&ka(t)),e):(e.eventSystemFlags|=o,t=e.targetContainers,r!==null&&t.indexOf(r)===-1&&t.push(r),e)}function lg(e,t,n,o,r){switch(t){case"focusin":return Et=no(Et,e,t,n,o,r),!0;case"dragenter":return Rt=no(Rt,e,t,n,o,r),!0;case"mouseover":return zt=no(zt,e,t,n,o,r),!0;case"pointerover":var s=r.pointerId;return Io.set(s,no(Io.get(s)||null,e,t,n,o,r)),!0;case"gotpointercapture":return s=r.pointerId,ko.set(s,no(ko.get(s)||null,e,t,n,o,r)),!0}return!1}function ed(e){var t=Yt(e.target);if(t!==null){var n=un(t);if(n!==null){if(t=n.tag,t===13){if(t=Fu(n),t!==null){e.blockedOn=t,Ju(e.priority,function(){Xu(n)});return}}else if(t===3&&n.stateNode.current.memoizedState.isDehydrated){e.blockedOn=n.tag===3?n.stateNode.containerInfo:null;return}}}e.blockedOn=null}function Sr(e){if(e.blockedOn!==null)return!1;for(var t=e.targetContainers;0<t.length;){var n=Ei(e.domEventName,e.eventSystemFlags,t[0],e.nativeEvent);if(n===null){n=e.nativeEvent;var o=new n.constructor(n.type,n);Si=o,n.target.dispatchEvent(o),Si=null}else return t=qo(n),t!==null&&ka(t),e.blockedOn=n,!1;t.shift()}return!0}function Dl(e,t,n){Sr(e)&&n.delete(t)}function cg(){_i=!1,Et!==null&&Sr(Et)&&(Et=null),Rt!==null&&Sr(Rt)&&(Rt=null),zt!==null&&Sr(zt)&&(zt=null),Io.forEach(Dl),ko.forEach(Dl)}function oo(e,t){e.blockedOn===t&&(e.blockedOn=null,_i||(_i=!0,Ae.unstable_scheduleCallback(Ae.unstable_NormalPriority,cg)))}function _o(e){function t(r){return oo(r,e)}if(0<rr.length){oo(rr[0],e);for(var n=1;n<rr.length;n++){var o=rr[n];o.blockedOn===e&&(o.blockedOn=null)}}for(Et!==null&&oo(Et,e),Rt!==null&&oo(Rt,e),zt!==null&&oo(zt,e),Io.forEach(t),ko.forEach(t),n=0;n<St.length;n++)o=St[n],o.blockedOn===e&&(o.blockedOn=null);for(;0<St.length&&(n=St[0],n.blockedOn===null);)ed(n),n.blockedOn===null&&St.shift()}var Rn=vt.ReactCurrentBatchConfig,Ar=!0;function ug(e,t,n,o){var r=Q,s=Rn.transition;Rn.transition=null;try{Q=1,_a(e,t,n,o)}finally{Q=r,Rn.transition=s}}function dg(e,t,n,o){var r=Q,s=Rn.transition;Rn.transition=null;try{Q=4,_a(e,t,n,o)}finally{Q=r,Rn.transition=s}}function _a(e,t,n,o){if(Ar){var r=Ei(e,t,n,o);if(r===null)Fs(e,t,o,Br,n),Ol(e,o);else if(lg(r,e,t,n,o))o.stopPropagation();else if(Ol(e,o),t&4&&-1<ag.indexOf(e)){for(;r!==null;){var s=qo(r);if(s!==null&&Yu(s),s=Ei(e,t,n,o),s===null&&Fs(e,t,o,Br,n),s===r)break;r=s}r!==null&&o.stopPropagation()}else Fs(e,t,o,null,n)}}var Br=null;function Ei(e,t,n,o){if(Br=null,e=Ca(o),e=Yt(e),e!==null)if(t=un(e),t===null)e=null;else if(n=t.tag,n===13){if(e=Fu(t),e!==null)return e;e=null}else if(n===3){if(t.stateNode.current.memoizedState.isDehydrated)return t.tag===3?t.stateNode.containerInfo:null;e=null}else t!==e&&(e=null);return Br=e,null}function td(e){switch(e){case"cancel":case"click":case"close":case"contextmenu":case"copy":case"cut":case"auxclick":case"dblclick":case"dragend":case"dragstart":case"drop":case"focusin":case"focusout":case"input":case"invalid":case"keydown":case"keypress":case"keyup":case"mousedown":case"mouseup":case"paste":case"pause":case"play":case"pointercancel":case"pointerdown":case"pointerup":case"ratechange":case"reset":case"resize":case"seeked":case"submit":case"touchcancel":case"touchend":case"touchstart":case"volumechange":case"change":case"selectionchange":case"textInput":case"compositionstart":case"compositionend":case"compositionupdate":case"beforeblur":case"afterblur":case"beforeinput":case"blur":case"fullscreenchange":case"focus":case"hashchange":case"popstate":case"select":case"selectstart":return 1;case"drag":case"dragenter":case"dragexit":case"dragleave":case"dragover":case"mousemove":case"mouseout":case"mouseover":case"pointermove":case"pointerout":case"pointerover":case"scroll":case"toggle":case"touchmove":case"wheel":case"mouseenter":case"mouseleave":case"pointerenter":case"pointerleave":return 4;case"message":switch(Zm()){case La:return 1;case Gu:return 4;case Tr:case Jm:return 16;case qu:return 536870912;default:return 16}default:return 16}}var Lt=null,Ea=null,Cr=null;function nd(){if(Cr)return Cr;var e,t=Ea,n=t.length,o,r="value"in Lt?Lt.value:Lt.textContent,s=r.length;for(e=0;e<n&&t[e]===r[e];e++);var i=n-e;for(o=1;o<=i&&t[n-o]===r[s-o];o++);return Cr=r.slice(e,1<o?1-o:void 0)}function Lr(e){var t=e.keyCode;return"charCode"in e?(e=e.charCode,e===0&&t===13&&(e=13)):e=t,e===10&&(e=13),32<=e||e===13?e:0}function sr(){return!0}function Ml(){return!1}function Ue(e){function t(n,o,r,s,i){this._reactName=n,this._targetInst=r,this.type=o,this.nativeEvent=s,this.target=i,this.currentTarget=null;for(var a in e)e.hasOwnProperty(a)&&(n=e[a],this[a]=n?n(s):s[a]);return this.isDefaultPrevented=(s.defaultPrevented!=null?s.defaultPrevented:s.returnValue===!1)?sr:Ml,this.isPropagationStopped=Ml,this}return oe(t.prototype,{preventDefault:function(){this.defaultPrevented=!0;var n=this.nativeEvent;n&&(n.preventDefault?n.preventDefault():typeof n.returnValue!="unknown"&&(n.returnValue=!1),this.isDefaultPrevented=sr)},stopPropagation:function(){var n=this.nativeEvent;n&&(n.stopPropagation?n.stopPropagation():typeof n.cancelBubble!="unknown"&&(n.cancelBubble=!0),this.isPropagationStopped=sr)},persist:function(){},isPersistent:sr}),t}var Hn={eventPhase:0,bubbles:0,cancelable:0,timeStamp:function(e){return e.timeStamp||Date.now()},defaultPrevented:0,isTrusted:0},Ra=Ue(Hn),Go=oe({},Hn,{view:0,detail:0}),pg=Ue(Go),Os,Ds,ro,us=oe({},Go,{screenX:0,screenY:0,clientX:0,clientY:0,pageX:0,pageY:0,ctrlKey:0,shiftKey:0,altKey:0,metaKey:0,getModifierState:za,button:0,buttons:0,relatedTarget:function(e){return e.relatedTarget===void 0?e.fromElement===e.srcElement?e.toElement:e.fromElement:e.relatedTarget},movementX:function(e){return"movementX"in e?e.movementX:(e!==ro&&(ro&&e.type==="mousemove"?(Os=e.screenX-ro.screenX,Ds=e.screenY-ro.screenY):Ds=Os=0,ro=e),Os)},movementY:function(e){return"movementY"in e?e.movementY:Ds}}),jl=Ue(us),mg=oe({},us,{dataTransfer:0}),gg=Ue(mg),fg=oe({},Go,{relatedTarget:0}),Ms=Ue(fg),hg=oe({},Hn,{animationName:0,elapsedTime:0,pseudoElement:0}),yg=Ue(hg),vg=oe({},Hn,{clipboardData:function(e){return"clipboardData"in e?e.clipboardData:window.clipboardData}}),wg=Ue(vg),xg=oe({},Hn,{data:0}),Tl=Ue(xg),bg={Esc:"Escape",Spacebar:" ",Left:"ArrowLeft",Up:"ArrowUp",Right:"ArrowRight",Down:"ArrowDown",Del:"Delete",Win:"OS",Menu:"ContextMenu",Apps:"ContextMenu",Scroll:"ScrollLock",MozPrintableKey:"Unidentified"},Pg={8:"Backspace",9:"Tab",12:"Clear",13:"Enter",16:"Shift",17:"Control",18:"Alt",19:"Pause",20:"CapsLock",27:"Escape",32:" ",33:"PageUp",34:"PageDown",35:"End",36:"Home",37:"ArrowLeft",38:"ArrowUp",39:"ArrowRight",40:"ArrowDown",45:"Insert",46:"Delete",112:"F1",113:"F2",114:"F3",115:"F4",116:"F5",117:"F6",118:"F7",119:"F8",120:"F9",121:"F10",122:"F11",123:"F12",144:"NumLock",145:"ScrollLock",224:"Meta"},$g={Alt:"altKey",Control:"ctrlKey",Meta:"metaKey",Shift:"shiftKey"};function Sg(e){var t=this.nativeEvent;return t.getModifierState?t.getModifierState(e):(e=$g[e])?!!t[e]:!1}function za(){return Sg}var Cg=oe({},Go,{key:function(e){if(e.key){var t=bg[e.key]||e.key;if(t!=="Unidentified")return t}return e.type==="keypress"?(e=Lr(e),e===13?"Enter":String.fromCharCode(e)):e.type==="keydown"||e.type==="keyup"?Pg[e.keyCode]||"Unidentified":""},code:0,location:0,ctrlKey:0,shiftKey:0,altKey:0,metaKey:0,repeat:0,locale:0,getModifierState:za,charCode:function(e){return e.type==="keypress"?Lr(e):0},keyCode:function(e){return e.type==="keydown"||e.type==="keyup"?e.keyCode:0},which:function(e){return e.type==="keypress"?Lr(e):e.type==="keydown"||e.type==="keyup"?e.keyCode:0}}),Lg=Ue(Cg),Ig=oe({},us,{pointerId:0,width:0,height:0,pressure:0,tangentialPressure:0,tiltX:0,tiltY:0,twist:0,pointerType:0,isPrimary:0}),Nl=Ue(Ig),kg=oe({},Go,{touches:0,targetTouches:0,changedTouches:0,altKey:0,metaKey:0,ctrlKey:0,shiftKey:0,getModifierState:za}),_g=Ue(kg),Eg=oe({},Hn,{propertyName:0,elapsedTime:0,pseudoElement:0}),Rg=Ue(Eg),zg=oe({},us,{deltaX:function(e){return"deltaX"in e?e.deltaX:"wheelDeltaX"in e?-e.wheelDeltaX:0},deltaY:function(e){return"deltaY"in e?e.deltaY:"wheelDeltaY"in e?-e.wheelDeltaY:"wheelDelta"in e?-e.wheelDelta:0},deltaZ:0,deltaMode:0}),Og=Ue(zg),Dg=[9,13,27,32],Oa=gt&&"CompositionEvent"in window,yo=null;gt&&"documentMode"in document&&(yo=document.documentMode);var Mg=gt&&"TextEvent"in window&&!yo,od=gt&&(!Oa||yo&&8<yo&&11>=yo),Al=" ",Bl=!1;function rd(e,t){switch(e){case"keyup":return Dg.indexOf(t.keyCode)!==-1;case"keydown":return t.keyCode!==229;case"keypress":case"mousedown":case"focusout":return!0;default:return!1}}function sd(e){return e=e.detail,typeof e=="object"&&"data"in e?e.data:null}var vn=!1;function jg(e,t){switch(e){case"compositionend":return sd(t);case"keypress":return t.which!==32?null:(Bl=!0,Al);case"textInput":return e=t.data,e===Al&&Bl?null:e;default:return null}}function Tg(e,t){if(vn)return e==="compositionend"||!Oa&&rd(e,t)?(e=nd(),Cr=Ea=Lt=null,vn=!1,e):null;switch(e){case"paste":return null;case"keypress":if(!(t.ctrlKey||t.altKey||t.metaKey)||t.ctrlKey&&t.altKey){if(t.char&&1<t.char.length)return t.char;if(t.which)return String.fromCharCode(t.which)}return null;case"compositionend":return od&&t.locale!=="ko"?null:t.data;default:return null}}var Ng={color:!0,date:!0,datetime:!0,"datetime-local":!0,email:!0,month:!0,number:!0,password:!0,range:!0,search:!0,tel:!0,text:!0,time:!0,url:!0,week:!0};function Ul(e){var t=e&&e.nodeName&&e.nodeName.toLowerCase();return t==="input"?!!Ng[e.type]:t==="textarea"}function id(e,t,n,o){Tu(o),t=Ur(t,"onChange"),0<t.length&&(n=new Ra("onChange","change",null,n,o),e.push({event:n,listeners:t}))}var vo=null,Eo=null;function Ag(e){yd(e,0)}function ds(e){var t=bn(e);if(Eu(t))return e}function Bg(e,t){if(e==="change")return t}var ad=!1;if(gt){var js;if(gt){var Ts="oninput"in document;if(!Ts){var Fl=document.createElement("div");Fl.setAttribute("oninput","return;"),Ts=typeof Fl.oninput=="function"}js=Ts}else js=!1;ad=js&&(!document.documentMode||9<document.documentMode)}function Vl(){vo&&(vo.detachEvent("onpropertychange",ld),Eo=vo=null)}function ld(e){if(e.propertyName==="value"&&ds(Eo)){var t=[];id(t,Eo,e,Ca(e)),Uu(Ag,t)}}function Ug(e,t,n){e==="focusin"?(Vl(),vo=t,Eo=n,vo.attachEvent("onpropertychange",ld)):e==="focusout"&&Vl()}function Fg(e){if(e==="selectionchange"||e==="keyup"||e==="keydown")return ds(Eo)}function Vg(e,t){if(e==="click")return ds(t)}function Wg(e,t){if(e==="input"||e==="change")return ds(t)}function Hg(e,t){return e===t&&(e!==0||1/e===1/t)||e!==e&&t!==t}var tt=typeof Object.is=="function"?Object.is:Hg;function Ro(e,t){if(tt(e,t))return!0;if(typeof e!="object"||e===null||typeof t!="object"||t===null)return!1;var n=Object.keys(e),o=Object.keys(t);if(n.length!==o.length)return!1;for(o=0;o<n.length;o++){var r=n[o];if(!pi.call(t,r)||!tt(e[r],t[r]))return!1}return!0}function Wl(e){for(;e&&e.firstChild;)e=e.firstChild;return e}function Hl(e,t){var n=Wl(e);e=0;for(var o;n;){if(n.nodeType===3){if(o=e+n.textContent.length,e<=t&&o>=t)return{node:n,offset:t-e};e=o}e:{for(;n;){if(n.nextSibling){n=n.nextSibling;break e}n=n.parentNode}n=void 0}n=Wl(n)}}function cd(e,t){return e&&t?e===t?!0:e&&e.nodeType===3?!1:t&&t.nodeType===3?cd(e,t.parentNode):"contains"in e?e.contains(t):e.compareDocumentPosition?!!(e.compareDocumentPosition(t)&16):!1:!1}function ud(){for(var e=window,t=Dr();t instanceof e.HTMLIFrameElement;){try{var n=typeof t.contentWindow.location.href=="string"}catch{n=!1}if(n)e=t.contentWindow;else break;t=Dr(e.document)}return t}function Da(e){var t=e&&e.nodeName&&e.nodeName.toLowerCase();return t&&(t==="input"&&(e.type==="text"||e.type==="search"||e.type==="tel"||e.type==="url"||e.type==="password")||t==="textarea"||e.contentEditable==="true")}function Gg(e){var t=ud(),n=e.focusedElem,o=e.selectionRange;if(t!==n&&n&&n.ownerDocument&&cd(n.ownerDocument.documentElement,n)){if(o!==null&&Da(n)){if(t=o.start,e=o.end,e===void 0&&(e=t),"selectionStart"in n)n.selectionStart=t,n.selectionEnd=Math.min(e,n.value.length);else if(e=(t=n.ownerDocument||document)&&t.defaultView||window,e.getSelection){e=e.getSelection();var r=n.textContent.length,s=Math.min(o.start,r);o=o.end===void 0?s:Math.min(o.end,r),!e.extend&&s>o&&(r=o,o=s,s=r),r=Hl(n,s);var i=Hl(n,o);r&&i&&(e.rangeCount!==1||e.anchorNode!==r.node||e.anchorOffset!==r.offset||e.focusNode!==i.node||e.focusOffset!==i.offset)&&(t=t.createRange(),t.setStart(r.node,r.offset),e.removeAllRanges(),s>o?(e.addRange(t),e.extend(i.node,i.offset)):(t.setEnd(i.node,i.offset),e.addRange(t)))}}for(t=[],e=n;e=e.parentNode;)e.nodeType===1&&t.push({element:e,left:e.scrollLeft,top:e.scrollTop});for(typeof n.focus=="function"&&n.focus(),n=0;n<t.length;n++)e=t[n],e.element.scrollLeft=e.left,e.element.scrollTop=e.top}}var qg=gt&&"documentMode"in document&&11>=document.documentMode,wn=null,Ri=null,wo=null,zi=!1;function Gl(e,t,n){var o=n.window===n?n.document:n.nodeType===9?n:n.ownerDocument;zi||wn==null||wn!==Dr(o)||(o=wn,"selectionStart"in o&&Da(o)?o={start:o.selectionStart,end:o.selectionEnd}:(o=(o.ownerDocument&&o.ownerDocument.defaultView||window).getSelection(),o={anchorNode:o.anchorNode,anchorOffset:o.anchorOffset,focusNode:o.focusNode,focusOffset:o.focusOffset}),wo&&Ro(wo,o)||(wo=o,o=Ur(Ri,"onSelect"),0<o.length&&(t=new Ra("onSelect","select",null,t,n),e.push({event:t,listeners:o}),t.target=wn)))}function ir(e,t){var n={};return n[e.toLowerCase()]=t.toLowerCase(),n["Webkit"+e]="webkit"+t,n["Moz"+e]="moz"+t,n}var xn={animationend:ir("Animation","AnimationEnd"),animationiteration:ir("Animation","AnimationIteration"),animationstart:ir("Animation","AnimationStart"),transitionend:ir("Transition","TransitionEnd")},Ns={},dd={};gt&&(dd=document.createElement("div").style,"AnimationEvent"in window||(delete xn.animationend.animation,delete xn.animationiteration.animation,delete xn.animationstart.animation),"TransitionEvent"in window||delete xn.transitionend.transition);function ps(e){if(Ns[e])return Ns[e];if(!xn[e])return e;var t=xn[e],n;for(n in t)if(t.hasOwnProperty(n)&&n in dd)return Ns[e]=t[n];return e}var pd=ps("animationend"),md=ps("animationiteration"),gd=ps("animationstart"),fd=ps("transitionend"),hd=new Map,ql="abort auxClick cancel canPlay canPlayThrough click close contextMenu copy cut drag dragEnd dragEnter dragExit dragLeave dragOver dragStart drop durationChange emptied encrypted ended error gotPointerCapture input invalid keyDown keyPress keyUp load loadedData loadedMetadata loadStart lostPointerCapture mouseDown mouseMove mouseOut mouseOver mouseUp paste pause play playing pointerCancel pointerDown pointerMove pointerOut pointerOver pointerUp progress rateChange reset resize seeked seeking stalled submit suspend timeUpdate touchCancel touchEnd touchStart volumeChange scroll toggle touchMove waiting wheel".split(" ");function Ut(e,t){hd.set(e,t),cn(t,[e])}for(var As=0;As<ql.length;As++){var Bs=ql[As],Qg=Bs.toLowerCase(),Kg=Bs[0].toUpperCase()+Bs.slice(1);Ut(Qg,"on"+Kg)}Ut(pd,"onAnimationEnd");Ut(md,"onAnimationIteration");Ut(gd,"onAnimationStart");Ut("dblclick","onDoubleClick");Ut("focusin","onFocus");Ut("focusout","onBlur");Ut(fd,"onTransitionEnd");jn("onMouseEnter",["mouseout","mouseover"]);jn("onMouseLeave",["mouseout","mouseover"]);jn("onPointerEnter",["pointerout","pointerover"]);jn("onPointerLeave",["pointerout","pointerover"]);cn("onChange","change click focusin focusout input keydown keyup selectionchange".split(" "));cn("onSelect","focusout contextmenu dragend focusin keydown keyup mousedown mouseup selectionchange".split(" "));cn("onBeforeInput",["compositionend","keypress","textInput","paste"]);cn("onCompositionEnd","compositionend focusout keydown keypress keyup mousedown".split(" "));cn("onCompositionStart","compositionstart focusout keydown keypress keyup mousedown".split(" "));cn("onCompositionUpdate","compositionupdate focusout keydown keypress keyup mousedown".split(" "));var po="abort canplay canplaythrough durationchange emptied encrypted ended error loadeddata loadedmetadata loadstart pause play playing progress ratechange resize seeked seeking stalled suspend timeupdate volumechange waiting".split(" "),Yg=new Set("cancel close invalid load scroll toggle".split(" ").concat(po));function Ql(e,t,n){var o=e.type||"unknown-event";e.currentTarget=n,Qm(o,t,void 0,e),e.currentTarget=null}function yd(e,t){t=(t&4)!==0;for(var n=0;n<e.length;n++){var o=e[n],r=o.event;o=o.listeners;e:{var s=void 0;if(t)for(var i=o.length-1;0<=i;i--){var a=o[i],l=a.instance,c=a.currentTarget;if(a=a.listener,l!==s&&r.isPropagationStopped())break e;Ql(r,a,c),s=l}else for(i=0;i<o.length;i++){if(a=o[i],l=a.instance,c=a.currentTarget,a=a.listener,l!==s&&r.isPropagationStopped())break e;Ql(r,a,c),s=l}}}if(jr)throw e=Ii,jr=!1,Ii=null,e}function X(e,t){var n=t[Ti];n===void 0&&(n=t[Ti]=new Set);var o=e+"__bubble";n.has(o)||(vd(t,e,2,!1),n.add(o))}function Us(e,t,n){var o=0;t&&(o|=4),vd(n,e,o,t)}var ar="_reactListening"+Math.random().toString(36).slice(2);function zo(e){if(!e[ar]){e[ar]=!0,Cu.forEach(function(n){n!=="selectionchange"&&(Yg.has(n)||Us(n,!1,e),Us(n,!0,e))});var t=e.nodeType===9?e:e.ownerDocument;t===null||t[ar]||(t[ar]=!0,Us("selectionchange",!1,t))}}function vd(e,t,n,o){switch(td(t)){case 1:var r=ug;break;case 4:r=dg;break;default:r=_a}n=r.bind(null,t,n,e),r=void 0,!Li||t!=="touchstart"&&t!=="touchmove"&&t!=="wheel"||(r=!0),o?r!==void 0?e.addEventListener(t,n,{capture:!0,passive:r}):e.addEventListener(t,n,!0):r!==void 0?e.addEventListener(t,n,{passive:r}):e.addEventListener(t,n,!1)}function Fs(e,t,n,o,r){var s=o;if(!(t&1)&&!(t&2)&&o!==null)e:for(;;){if(o===null)return;var i=o.tag;if(i===3||i===4){var a=o.stateNode.containerInfo;if(a===r||a.nodeType===8&&a.parentNode===r)break;if(i===4)for(i=o.return;i!==null;){var l=i.tag;if((l===3||l===4)&&(l=i.stateNode.containerInfo,l===r||l.nodeType===8&&l.parentNode===r))return;i=i.return}for(;a!==null;){if(i=Yt(a),i===null)return;if(l=i.tag,l===5||l===6){o=s=i;continue e}a=a.parentNode}}o=o.return}Uu(function(){var c=s,u=Ca(n),d=[];e:{var p=hd.get(e);if(p!==void 0){var g=Ra,v=e;switch(e){case"keypress":if(Lr(n)===0)break e;case"keydown":case"keyup":g=Lg;break;case"focusin":v="focus",g=Ms;break;case"focusout":v="blur",g=Ms;break;case"beforeblur":case"afterblur":g=Ms;break;case"click":if(n.button===2)break e;case"auxclick":case"dblclick":case"mousedown":case"mousemove":case"mouseup":case"mouseout":case"mouseover":case"contextmenu":g=jl;break;case"drag":case"dragend":case"dragenter":case"dragexit":case"dragleave":case"dragover":case"dragstart":case"drop":g=gg;break;case"touchcancel":case"touchend":case"touchmove":case"touchstart":g=_g;break;case pd:case md:case gd:g=yg;break;case fd:g=Rg;break;case"scroll":g=pg;break;case"wheel":g=Og;break;case"copy":case"cut":case"paste":g=wg;break;case"gotpointercapture":case"lostpointercapture":case"pointercancel":case"pointerdown":case"pointermove":case"pointerout":case"pointerover":case"pointerup":g=Nl}var w=(t&4)!==0,b=!w&&e==="scroll",y=w?p!==null?p+"Capture":null:p;w=[];for(var f=c,h;f!==null;){h=f;var P=h.stateNode;if(h.tag===5&&P!==null&&(h=P,y!==null&&(P=Lo(f,y),P!=null&&w.push(Oo(f,P,h)))),b)break;f=f.return}0<w.length&&(p=new g(p,v,null,n,u),d.push({event:p,listeners:w}))}}if(!(t&7)){e:{if(p=e==="mouseover"||e==="pointerover",g=e==="mouseout"||e==="pointerout",p&&n!==Si&&(v=n.relatedTarget||n.fromElement)&&(Yt(v)||v[ft]))break e;if((g||p)&&(p=u.window===u?u:(p=u.ownerDocument)?p.defaultView||p.parentWindow:window,g?(v=n.relatedTarget||n.toElement,g=c,v=v?Yt(v):null,v!==null&&(b=un(v),v!==b||v.tag!==5&&v.tag!==6)&&(v=null)):(g=null,v=c),g!==v)){if(w=jl,P="onMouseLeave",y="onMouseEnter",f="mouse",(e==="pointerout"||e==="pointerover")&&(w=Nl,P="onPointerLeave",y="onPointerEnter",f="pointer"),b=g==null?p:bn(g),h=v==null?p:bn(v),p=new w(P,f+"leave",g,n,u),p.target=b,p.relatedTarget=h,P=null,Yt(u)===c&&(w=new w(y,f+"enter",v,n,u),w.target=h,w.relatedTarget=b,P=w),b=P,g&&v)t:{for(w=g,y=v,f=0,h=w;h;h=pn(h))f++;for(h=0,P=y;P;P=pn(P))h++;for(;0<f-h;)w=pn(w),f--;for(;0<h-f;)y=pn(y),h--;for(;f--;){if(w===y||y!==null&&w===y.alternate)break t;w=pn(w),y=pn(y)}w=null}else w=null;g!==null&&Kl(d,p,g,w,!1),v!==null&&b!==null&&Kl(d,b,v,w,!0)}}e:{if(p=c?bn(c):window,g=p.nodeName&&p.nodeName.toLowerCase(),g==="select"||g==="input"&&p.type==="file")var $=Bg;else if(Ul(p))if(ad)$=Wg;else{$=Fg;var I=Ug}else(g=p.nodeName)&&g.toLowerCase()==="input"&&(p.type==="checkbox"||p.type==="radio")&&($=Vg);if($&&($=$(e,c))){id(d,$,n,u);break e}I&&I(e,p,c),e==="focusout"&&(I=p._wrapperState)&&I.controlled&&p.type==="number"&&wi(p,"number",p.value)}switch(I=c?bn(c):window,e){case"focusin":(Ul(I)||I.contentEditable==="true")&&(wn=I,Ri=c,wo=null);break;case"focusout":wo=Ri=wn=null;break;case"mousedown":zi=!0;break;case"contextmenu":case"mouseup":case"dragend":zi=!1,Gl(d,n,u);break;case"selectionchange":if(qg)break;case"keydown":case"keyup":Gl(d,n,u)}var k;if(Oa)e:{switch(e){case"compositionstart":var _="onCompositionStart";break e;case"compositionend":_="onCompositionEnd";break e;case"compositionupdate":_="onCompositionUpdate";break e}_=void 0}else vn?rd(e,n)&&(_="onCompositionEnd"):e==="keydown"&&n.keyCode===229&&(_="onCompositionStart");_&&(od&&n.locale!=="ko"&&(vn||_!=="onCompositionStart"?_==="onCompositionEnd"&&vn&&(k=nd()):(Lt=u,Ea="value"in Lt?Lt.value:Lt.textContent,vn=!0)),I=Ur(c,_),0<I.length&&(_=new Tl(_,e,null,n,u),d.push({event:_,listeners:I}),k?_.data=k:(k=sd(n),k!==null&&(_.data=k)))),(k=Mg?jg(e,n):Tg(e,n))&&(c=Ur(c,"onBeforeInput"),0<c.length&&(u=new Tl("onBeforeInput","beforeinput",null,n,u),d.push({event:u,listeners:c}),u.data=k))}yd(d,t)})}function Oo(e,t,n){return{instance:e,listener:t,currentTarget:n}}function Ur(e,t){for(var n=t+"Capture",o=[];e!==null;){var r=e,s=r.stateNode;r.tag===5&&s!==null&&(r=s,s=Lo(e,n),s!=null&&o.unshift(Oo(e,s,r)),s=Lo(e,t),s!=null&&o.push(Oo(e,s,r))),e=e.return}return o}function pn(e){if(e===null)return null;do e=e.return;while(e&&e.tag!==5);return e||null}function Kl(e,t,n,o,r){for(var s=t._reactName,i=[];n!==null&&n!==o;){var a=n,l=a.alternate,c=a.stateNode;if(l!==null&&l===o)break;a.tag===5&&c!==null&&(a=c,r?(l=Lo(n,s),l!=null&&i.unshift(Oo(n,l,a))):r||(l=Lo(n,s),l!=null&&i.push(Oo(n,l,a)))),n=n.return}i.length!==0&&e.push({event:t,listeners:i})}var Xg=/\r\n?/g,Zg=/\u0000|\uFFFD/g;function Yl(e){return(typeof e=="string"?e:""+e).replace(Xg,`
`).replace(Zg,"")}function lr(e,t,n){if(t=Yl(t),Yl(e)!==t&&n)throw Error(E(425))}function Fr(){}var Oi=null,Di=null;function Mi(e,t){return e==="textarea"||e==="noscript"||typeof t.children=="string"||typeof t.children=="number"||typeof t.dangerouslySetInnerHTML=="object"&&t.dangerouslySetInnerHTML!==null&&t.dangerouslySetInnerHTML.__html!=null}var ji=typeof setTimeout=="function"?setTimeout:void 0,Jg=typeof clearTimeout=="function"?clearTimeout:void 0,Xl=typeof Promise=="function"?Promise:void 0,ef=typeof queueMicrotask=="function"?queueMicrotask:typeof Xl<"u"?function(e){return Xl.resolve(null).then(e).catch(tf)}:ji;function tf(e){setTimeout(function(){throw e})}function Vs(e,t){var n=t,o=0;do{var r=n.nextSibling;if(e.removeChild(n),r&&r.nodeType===8)if(n=r.data,n==="/$"){if(o===0){e.removeChild(r),_o(t);return}o--}else n!=="$"&&n!=="$?"&&n!=="$!"||o++;n=r}while(n);_o(t)}function Ot(e){for(;e!=null;e=e.nextSibling){var t=e.nodeType;if(t===1||t===3)break;if(t===8){if(t=e.data,t==="$"||t==="$!"||t==="$?")break;if(t==="/$")return null}}return e}function Zl(e){e=e.previousSibling;for(var t=0;e;){if(e.nodeType===8){var n=e.data;if(n==="$"||n==="$!"||n==="$?"){if(t===0)return e;t--}else n==="/$"&&t++}e=e.previousSibling}return null}var Gn=Math.random().toString(36).slice(2),st="__reactFiber$"+Gn,Do="__reactProps$"+Gn,ft="__reactContainer$"+Gn,Ti="__reactEvents$"+Gn,nf="__reactListeners$"+Gn,of="__reactHandles$"+Gn;function Yt(e){var t=e[st];if(t)return t;for(var n=e.parentNode;n;){if(t=n[ft]||n[st]){if(n=t.alternate,t.child!==null||n!==null&&n.child!==null)for(e=Zl(e);e!==null;){if(n=e[st])return n;e=Zl(e)}return t}e=n,n=e.parentNode}return null}function qo(e){return e=e[st]||e[ft],!e||e.tag!==5&&e.tag!==6&&e.tag!==13&&e.tag!==3?null:e}function bn(e){if(e.tag===5||e.tag===6)return e.stateNode;throw Error(E(33))}function ms(e){return e[Do]||null}var Ni=[],Pn=-1;function Ft(e){return{current:e}}function Z(e){0>Pn||(e.current=Ni[Pn],Ni[Pn]=null,Pn--)}function Y(e,t){Pn++,Ni[Pn]=e.current,e.current=t}var Bt={},$e=Ft(Bt),ze=Ft(!1),nn=Bt;function Tn(e,t){var n=e.type.contextTypes;if(!n)return Bt;var o=e.stateNode;if(o&&o.__reactInternalMemoizedUnmaskedChildContext===t)return o.__reactInternalMemoizedMaskedChildContext;var r={},s;for(s in n)r[s]=t[s];return o&&(e=e.stateNode,e.__reactInternalMemoizedUnmaskedChildContext=t,e.__reactInternalMemoizedMaskedChildContext=r),r}function Oe(e){return e=e.childContextTypes,e!=null}function Vr(){Z(ze),Z($e)}function Jl(e,t,n){if($e.current!==Bt)throw Error(E(168));Y($e,t),Y(ze,n)}function wd(e,t,n){var o=e.stateNode;if(t=t.childContextTypes,typeof o.getChildContext!="function")return n;o=o.getChildContext();for(var r in o)if(!(r in t))throw Error(E(108,Um(e)||"Unknown",r));return oe({},n,o)}function Wr(e){return e=(e=e.stateNode)&&e.__reactInternalMemoizedMergedChildContext||Bt,nn=$e.current,Y($e,e),Y(ze,ze.current),!0}function ec(e,t,n){var o=e.stateNode;if(!o)throw Error(E(169));n?(e=wd(e,t,nn),o.__reactInternalMemoizedMergedChildContext=e,Z(ze),Z($e),Y($e,e)):Z(ze),Y(ze,n)}var ct=null,gs=!1,Ws=!1;function xd(e){ct===null?ct=[e]:ct.push(e)}function rf(e){gs=!0,xd(e)}function Vt(){if(!Ws&&ct!==null){Ws=!0;var e=0,t=Q;try{var n=ct;for(Q=1;e<n.length;e++){var o=n[e];do o=o(!0);while(o!==null)}ct=null,gs=!1}catch(r){throw ct!==null&&(ct=ct.slice(e+1)),Hu(La,Vt),r}finally{Q=t,Ws=!1}}return null}var $n=[],Sn=0,Hr=null,Gr=0,Ve=[],We=0,on=null,ut=1,dt="";function Gt(e,t){$n[Sn++]=Gr,$n[Sn++]=Hr,Hr=e,Gr=t}function bd(e,t,n){Ve[We++]=ut,Ve[We++]=dt,Ve[We++]=on,on=e;var o=ut;e=dt;var r=32-Je(o)-1;o&=~(1<<r),n+=1;var s=32-Je(t)+r;if(30<s){var i=r-r%5;s=(o&(1<<i)-1).toString(32),o>>=i,r-=i,ut=1<<32-Je(t)+r|n<<r|o,dt=s+e}else ut=1<<s|n<<r|o,dt=e}function Ma(e){e.return!==null&&(Gt(e,1),bd(e,1,0))}function ja(e){for(;e===Hr;)Hr=$n[--Sn],$n[Sn]=null,Gr=$n[--Sn],$n[Sn]=null;for(;e===on;)on=Ve[--We],Ve[We]=null,dt=Ve[--We],Ve[We]=null,ut=Ve[--We],Ve[We]=null}var Ne=null,Te=null,J=!1,Ze=null;function Pd(e,t){var n=He(5,null,null,0);n.elementType="DELETED",n.stateNode=t,n.return=e,t=e.deletions,t===null?(e.deletions=[n],e.flags|=16):t.push(n)}function tc(e,t){switch(e.tag){case 5:var n=e.type;return t=t.nodeType!==1||n.toLowerCase()!==t.nodeName.toLowerCase()?null:t,t!==null?(e.stateNode=t,Ne=e,Te=Ot(t.firstChild),!0):!1;case 6:return t=e.pendingProps===""||t.nodeType!==3?null:t,t!==null?(e.stateNode=t,Ne=e,Te=null,!0):!1;case 13:return t=t.nodeType!==8?null:t,t!==null?(n=on!==null?{id:ut,overflow:dt}:null,e.memoizedState={dehydrated:t,treeContext:n,retryLane:1073741824},n=He(18,null,null,0),n.stateNode=t,n.return=e,e.child=n,Ne=e,Te=null,!0):!1;default:return!1}}function Ai(e){return(e.mode&1)!==0&&(e.flags&128)===0}function Bi(e){if(J){var t=Te;if(t){var n=t;if(!tc(e,t)){if(Ai(e))throw Error(E(418));t=Ot(n.nextSibling);var o=Ne;t&&tc(e,t)?Pd(o,n):(e.flags=e.flags&-4097|2,J=!1,Ne=e)}}else{if(Ai(e))throw Error(E(418));e.flags=e.flags&-4097|2,J=!1,Ne=e}}}function nc(e){for(e=e.return;e!==null&&e.tag!==5&&e.tag!==3&&e.tag!==13;)e=e.return;Ne=e}function cr(e){if(e!==Ne)return!1;if(!J)return nc(e),J=!0,!1;var t;if((t=e.tag!==3)&&!(t=e.tag!==5)&&(t=e.type,t=t!=="head"&&t!=="body"&&!Mi(e.type,e.memoizedProps)),t&&(t=Te)){if(Ai(e))throw $d(),Error(E(418));for(;t;)Pd(e,t),t=Ot(t.nextSibling)}if(nc(e),e.tag===13){if(e=e.memoizedState,e=e!==null?e.dehydrated:null,!e)throw Error(E(317));e:{for(e=e.nextSibling,t=0;e;){if(e.nodeType===8){var n=e.data;if(n==="/$"){if(t===0){Te=Ot(e.nextSibling);break e}t--}else n!=="$"&&n!=="$!"&&n!=="$?"||t++}e=e.nextSibling}Te=null}}else Te=Ne?Ot(e.stateNode.nextSibling):null;return!0}function $d(){for(var e=Te;e;)e=Ot(e.nextSibling)}function Nn(){Te=Ne=null,J=!1}function Ta(e){Ze===null?Ze=[e]:Ze.push(e)}var sf=vt.ReactCurrentBatchConfig;function so(e,t,n){if(e=n.ref,e!==null&&typeof e!="function"&&typeof e!="object"){if(n._owner){if(n=n._owner,n){if(n.tag!==1)throw Error(E(309));var o=n.stateNode}if(!o)throw Error(E(147,e));var r=o,s=""+e;return t!==null&&t.ref!==null&&typeof t.ref=="function"&&t.ref._stringRef===s?t.ref:(t=function(i){var a=r.refs;i===null?delete a[s]:a[s]=i},t._stringRef=s,t)}if(typeof e!="string")throw Error(E(284));if(!n._owner)throw Error(E(290,e))}return e}function ur(e,t){throw e=Object.prototype.toString.call(t),Error(E(31,e==="[object Object]"?"object with keys {"+Object.keys(t).join(", ")+"}":e))}function oc(e){var t=e._init;return t(e._payload)}function Sd(e){function t(y,f){if(e){var h=y.deletions;h===null?(y.deletions=[f],y.flags|=16):h.push(f)}}function n(y,f){if(!e)return null;for(;f!==null;)t(y,f),f=f.sibling;return null}function o(y,f){for(y=new Map;f!==null;)f.key!==null?y.set(f.key,f):y.set(f.index,f),f=f.sibling;return y}function r(y,f){return y=Tt(y,f),y.index=0,y.sibling=null,y}function s(y,f,h){return y.index=h,e?(h=y.alternate,h!==null?(h=h.index,h<f?(y.flags|=2,f):h):(y.flags|=2,f)):(y.flags|=1048576,f)}function i(y){return e&&y.alternate===null&&(y.flags|=2),y}function a(y,f,h,P){return f===null||f.tag!==6?(f=Xs(h,y.mode,P),f.return=y,f):(f=r(f,h),f.return=y,f)}function l(y,f,h,P){var $=h.type;return $===yn?u(y,f,h.props.children,P,h.key):f!==null&&(f.elementType===$||typeof $=="object"&&$!==null&&$.$$typeof===Pt&&oc($)===f.type)?(P=r(f,h.props),P.ref=so(y,f,h),P.return=y,P):(P=Or(h.type,h.key,h.props,null,y.mode,P),P.ref=so(y,f,h),P.return=y,P)}function c(y,f,h,P){return f===null||f.tag!==4||f.stateNode.containerInfo!==h.containerInfo||f.stateNode.implementation!==h.implementation?(f=Zs(h,y.mode,P),f.return=y,f):(f=r(f,h.children||[]),f.return=y,f)}function u(y,f,h,P,$){return f===null||f.tag!==7?(f=tn(h,y.mode,P,$),f.return=y,f):(f=r(f,h),f.return=y,f)}function d(y,f,h){if(typeof f=="string"&&f!==""||typeof f=="number")return f=Xs(""+f,y.mode,h),f.return=y,f;if(typeof f=="object"&&f!==null){switch(f.$$typeof){case Jo:return h=Or(f.type,f.key,f.props,null,y.mode,h),h.ref=so(y,null,f),h.return=y,h;case hn:return f=Zs(f,y.mode,h),f.return=y,f;case Pt:var P=f._init;return d(y,P(f._payload),h)}if(co(f)||eo(f))return f=tn(f,y.mode,h,null),f.return=y,f;ur(y,f)}return null}function p(y,f,h,P){var $=f!==null?f.key:null;if(typeof h=="string"&&h!==""||typeof h=="number")return $!==null?null:a(y,f,""+h,P);if(typeof h=="object"&&h!==null){switch(h.$$typeof){case Jo:return h.key===$?l(y,f,h,P):null;case hn:return h.key===$?c(y,f,h,P):null;case Pt:return $=h._init,p(y,f,$(h._payload),P)}if(co(h)||eo(h))return $!==null?null:u(y,f,h,P,null);ur(y,h)}return null}function g(y,f,h,P,$){if(typeof P=="string"&&P!==""||typeof P=="number")return y=y.get(h)||null,a(f,y,""+P,$);if(typeof P=="object"&&P!==null){switch(P.$$typeof){case Jo:return y=y.get(P.key===null?h:P.key)||null,l(f,y,P,$);case hn:return y=y.get(P.key===null?h:P.key)||null,c(f,y,P,$);case Pt:var I=P._init;return g(y,f,h,I(P._payload),$)}if(co(P)||eo(P))return y=y.get(h)||null,u(f,y,P,$,null);ur(f,P)}return null}function v(y,f,h,P){for(var $=null,I=null,k=f,_=f=0,S=null;k!==null&&_<h.length;_++){k.index>_?(S=k,k=null):S=k.sibling;var L=p(y,k,h[_],P);if(L===null){k===null&&(k=S);break}e&&k&&L.alternate===null&&t(y,k),f=s(L,f,_),I===null?$=L:I.sibling=L,I=L,k=S}if(_===h.length)return n(y,k),J&&Gt(y,_),$;if(k===null){for(;_<h.length;_++)k=d(y,h[_],P),k!==null&&(f=s(k,f,_),I===null?$=k:I.sibling=k,I=k);return J&&Gt(y,_),$}for(k=o(y,k);_<h.length;_++)S=g(k,y,_,h[_],P),S!==null&&(e&&S.alternate!==null&&k.delete(S.key===null?_:S.key),f=s(S,f,_),I===null?$=S:I.sibling=S,I=S);return e&&k.forEach(function(j){return t(y,j)}),J&&Gt(y,_),$}function w(y,f,h,P){var $=eo(h);if(typeof $!="function")throw Error(E(150));if(h=$.call(h),h==null)throw Error(E(151));for(var I=$=null,k=f,_=f=0,S=null,L=h.next();k!==null&&!L.done;_++,L=h.next()){k.index>_?(S=k,k=null):S=k.sibling;var j=p(y,k,L.value,P);if(j===null){k===null&&(k=S);break}e&&k&&j.alternate===null&&t(y,k),f=s(j,f,_),I===null?$=j:I.sibling=j,I=j,k=S}if(L.done)return n(y,k),J&&Gt(y,_),$;if(k===null){for(;!L.done;_++,L=h.next())L=d(y,L.value,P),L!==null&&(f=s(L,f,_),I===null?$=L:I.sibling=L,I=L);return J&&Gt(y,_),$}for(k=o(y,k);!L.done;_++,L=h.next())L=g(k,y,_,L.value,P),L!==null&&(e&&L.alternate!==null&&k.delete(L.key===null?_:L.key),f=s(L,f,_),I===null?$=L:I.sibling=L,I=L);return e&&k.forEach(function(N){return t(y,N)}),J&&Gt(y,_),$}function b(y,f,h,P){if(typeof h=="object"&&h!==null&&h.type===yn&&h.key===null&&(h=h.props.children),typeof h=="object"&&h!==null){switch(h.$$typeof){case Jo:e:{for(var $=h.key,I=f;I!==null;){if(I.key===$){if($=h.type,$===yn){if(I.tag===7){n(y,I.sibling),f=r(I,h.props.children),f.return=y,y=f;break e}}else if(I.elementType===$||typeof $=="object"&&$!==null&&$.$$typeof===Pt&&oc($)===I.type){n(y,I.sibling),f=r(I,h.props),f.ref=so(y,I,h),f.return=y,y=f;break e}n(y,I);break}else t(y,I);I=I.sibling}h.type===yn?(f=tn(h.props.children,y.mode,P,h.key),f.return=y,y=f):(P=Or(h.type,h.key,h.props,null,y.mode,P),P.ref=so(y,f,h),P.return=y,y=P)}return i(y);case hn:e:{for(I=h.key;f!==null;){if(f.key===I)if(f.tag===4&&f.stateNode.containerInfo===h.containerInfo&&f.stateNode.implementation===h.implementation){n(y,f.sibling),f=r(f,h.children||[]),f.return=y,y=f;break e}else{n(y,f);break}else t(y,f);f=f.sibling}f=Zs(h,y.mode,P),f.return=y,y=f}return i(y);case Pt:return I=h._init,b(y,f,I(h._payload),P)}if(co(h))return v(y,f,h,P);if(eo(h))return w(y,f,h,P);ur(y,h)}return typeof h=="string"&&h!==""||typeof h=="number"?(h=""+h,f!==null&&f.tag===6?(n(y,f.sibling),f=r(f,h),f.return=y,y=f):(n(y,f),f=Xs(h,y.mode,P),f.return=y,y=f),i(y)):n(y,f)}return b}var An=Sd(!0),Cd=Sd(!1),qr=Ft(null),Qr=null,Cn=null,Na=null;function Aa(){Na=Cn=Qr=null}function Ba(e){var t=qr.current;Z(qr),e._currentValue=t}function Ui(e,t,n){for(;e!==null;){var o=e.alternate;if((e.childLanes&t)!==t?(e.childLanes|=t,o!==null&&(o.childLanes|=t)):o!==null&&(o.childLanes&t)!==t&&(o.childLanes|=t),e===n)break;e=e.return}}function zn(e,t){Qr=e,Na=Cn=null,e=e.dependencies,e!==null&&e.firstContext!==null&&(e.lanes&t&&(Re=!0),e.firstContext=null)}function qe(e){var t=e._currentValue;if(Na!==e)if(e={context:e,memoizedValue:t,next:null},Cn===null){if(Qr===null)throw Error(E(308));Cn=e,Qr.dependencies={lanes:0,firstContext:e}}else Cn=Cn.next=e;return t}var Xt=null;function Ua(e){Xt===null?Xt=[e]:Xt.push(e)}function Ld(e,t,n,o){var r=t.interleaved;return r===null?(n.next=n,Ua(t)):(n.next=r.next,r.next=n),t.interleaved=n,ht(e,o)}function ht(e,t){e.lanes|=t;var n=e.alternate;for(n!==null&&(n.lanes|=t),n=e,e=e.return;e!==null;)e.childLanes|=t,n=e.alternate,n!==null&&(n.childLanes|=t),n=e,e=e.return;return n.tag===3?n.stateNode:null}var $t=!1;function Fa(e){e.updateQueue={baseState:e.memoizedState,firstBaseUpdate:null,lastBaseUpdate:null,shared:{pending:null,interleaved:null,lanes:0},effects:null}}function Id(e,t){e=e.updateQueue,t.updateQueue===e&&(t.updateQueue={baseState:e.baseState,firstBaseUpdate:e.firstBaseUpdate,lastBaseUpdate:e.lastBaseUpdate,shared:e.shared,effects:e.effects})}function pt(e,t){return{eventTime:e,lane:t,tag:0,payload:null,callback:null,next:null}}function Dt(e,t,n){var o=e.updateQueue;if(o===null)return null;if(o=o.shared,F&2){var r=o.pending;return r===null?t.next=t:(t.next=r.next,r.next=t),o.pending=t,ht(e,n)}return r=o.interleaved,r===null?(t.next=t,Ua(o)):(t.next=r.next,r.next=t),o.interleaved=t,ht(e,n)}function Ir(e,t,n){if(t=t.updateQueue,t!==null&&(t=t.shared,(n&4194240)!==0)){var o=t.lanes;o&=e.pendingLanes,n|=o,t.lanes=n,Ia(e,n)}}function rc(e,t){var n=e.updateQueue,o=e.alternate;if(o!==null&&(o=o.updateQueue,n===o)){var r=null,s=null;if(n=n.firstBaseUpdate,n!==null){do{var i={eventTime:n.eventTime,lane:n.lane,tag:n.tag,payload:n.payload,callback:n.callback,next:null};s===null?r=s=i:s=s.next=i,n=n.next}while(n!==null);s===null?r=s=t:s=s.next=t}else r=s=t;n={baseState:o.baseState,firstBaseUpdate:r,lastBaseUpdate:s,shared:o.shared,effects:o.effects},e.updateQueue=n;return}e=n.lastBaseUpdate,e===null?n.firstBaseUpdate=t:e.next=t,n.lastBaseUpdate=t}function Kr(e,t,n,o){var r=e.updateQueue;$t=!1;var s=r.firstBaseUpdate,i=r.lastBaseUpdate,a=r.shared.pending;if(a!==null){r.shared.pending=null;var l=a,c=l.next;l.next=null,i===null?s=c:i.next=c,i=l;var u=e.alternate;u!==null&&(u=u.updateQueue,a=u.lastBaseUpdate,a!==i&&(a===null?u.firstBaseUpdate=c:a.next=c,u.lastBaseUpdate=l))}if(s!==null){var d=r.baseState;i=0,u=c=l=null,a=s;do{var p=a.lane,g=a.eventTime;if((o&p)===p){u!==null&&(u=u.next={eventTime:g,lane:0,tag:a.tag,payload:a.payload,callback:a.callback,next:null});e:{var v=e,w=a;switch(p=t,g=n,w.tag){case 1:if(v=w.payload,typeof v=="function"){d=v.call(g,d,p);break e}d=v;break e;case 3:v.flags=v.flags&-65537|128;case 0:if(v=w.payload,p=typeof v=="function"?v.call(g,d,p):v,p==null)break e;d=oe({},d,p);break e;case 2:$t=!0}}a.callback!==null&&a.lane!==0&&(e.flags|=64,p=r.effects,p===null?r.effects=[a]:p.push(a))}else g={eventTime:g,lane:p,tag:a.tag,payload:a.payload,callback:a.callback,next:null},u===null?(c=u=g,l=d):u=u.next=g,i|=p;if(a=a.next,a===null){if(a=r.shared.pending,a===null)break;p=a,a=p.next,p.next=null,r.lastBaseUpdate=p,r.shared.pending=null}}while(!0);if(u===null&&(l=d),r.baseState=l,r.firstBaseUpdate=c,r.lastBaseUpdate=u,t=r.shared.interleaved,t!==null){r=t;do i|=r.lane,r=r.next;while(r!==t)}else s===null&&(r.shared.lanes=0);sn|=i,e.lanes=i,e.memoizedState=d}}function sc(e,t,n){if(e=t.effects,t.effects=null,e!==null)for(t=0;t<e.length;t++){var o=e[t],r=o.callback;if(r!==null){if(o.callback=null,o=n,typeof r!="function")throw Error(E(191,r));r.call(o)}}}var Qo={},at=Ft(Qo),Mo=Ft(Qo),jo=Ft(Qo);function Zt(e){if(e===Qo)throw Error(E(174));return e}function Va(e,t){switch(Y(jo,t),Y(Mo,e),Y(at,Qo),e=t.nodeType,e){case 9:case 11:t=(t=t.documentElement)?t.namespaceURI:bi(null,"");break;default:e=e===8?t.parentNode:t,t=e.namespaceURI||null,e=e.tagName,t=bi(t,e)}Z(at),Y(at,t)}function Bn(){Z(at),Z(Mo),Z(jo)}function kd(e){Zt(jo.current);var t=Zt(at.current),n=bi(t,e.type);t!==n&&(Y(Mo,e),Y(at,n))}function Wa(e){Mo.current===e&&(Z(at),Z(Mo))}var te=Ft(0);function Yr(e){for(var t=e;t!==null;){if(t.tag===13){var n=t.memoizedState;if(n!==null&&(n=n.dehydrated,n===null||n.data==="$?"||n.data==="$!"))return t}else if(t.tag===19&&t.memoizedProps.revealOrder!==void 0){if(t.flags&128)return t}else if(t.child!==null){t.child.return=t,t=t.child;continue}if(t===e)break;for(;t.sibling===null;){if(t.return===null||t.return===e)return null;t=t.return}t.sibling.return=t.return,t=t.sibling}return null}var Hs=[];function Ha(){for(var e=0;e<Hs.length;e++)Hs[e]._workInProgressVersionPrimary=null;Hs.length=0}var kr=vt.ReactCurrentDispatcher,Gs=vt.ReactCurrentBatchConfig,rn=0,ne=null,ue=null,ge=null,Xr=!1,xo=!1,To=0,af=0;function xe(){throw Error(E(321))}function Ga(e,t){if(t===null)return!1;for(var n=0;n<t.length&&n<e.length;n++)if(!tt(e[n],t[n]))return!1;return!0}function qa(e,t,n,o,r,s){if(rn=s,ne=t,t.memoizedState=null,t.updateQueue=null,t.lanes=0,kr.current=e===null||e.memoizedState===null?df:pf,e=n(o,r),xo){s=0;do{if(xo=!1,To=0,25<=s)throw Error(E(301));s+=1,ge=ue=null,t.updateQueue=null,kr.current=mf,e=n(o,r)}while(xo)}if(kr.current=Zr,t=ue!==null&&ue.next!==null,rn=0,ge=ue=ne=null,Xr=!1,t)throw Error(E(300));return e}function Qa(){var e=To!==0;return To=0,e}function rt(){var e={memoizedState:null,baseState:null,baseQueue:null,queue:null,next:null};return ge===null?ne.memoizedState=ge=e:ge=ge.next=e,ge}function Qe(){if(ue===null){var e=ne.alternate;e=e!==null?e.memoizedState:null}else e=ue.next;var t=ge===null?ne.memoizedState:ge.next;if(t!==null)ge=t,ue=e;else{if(e===null)throw Error(E(310));ue=e,e={memoizedState:ue.memoizedState,baseState:ue.baseState,baseQueue:ue.baseQueue,queue:ue.queue,next:null},ge===null?ne.memoizedState=ge=e:ge=ge.next=e}return ge}function No(e,t){return typeof t=="function"?t(e):t}function qs(e){var t=Qe(),n=t.queue;if(n===null)throw Error(E(311));n.lastRenderedReducer=e;var o=ue,r=o.baseQueue,s=n.pending;if(s!==null){if(r!==null){var i=r.next;r.next=s.next,s.next=i}o.baseQueue=r=s,n.pending=null}if(r!==null){s=r.next,o=o.baseState;var a=i=null,l=null,c=s;do{var u=c.lane;if((rn&u)===u)l!==null&&(l=l.next={lane:0,action:c.action,hasEagerState:c.hasEagerState,eagerState:c.eagerState,next:null}),o=c.hasEagerState?c.eagerState:e(o,c.action);else{var d={lane:u,action:c.action,hasEagerState:c.hasEagerState,eagerState:c.eagerState,next:null};l===null?(a=l=d,i=o):l=l.next=d,ne.lanes|=u,sn|=u}c=c.next}while(c!==null&&c!==s);l===null?i=o:l.next=a,tt(o,t.memoizedState)||(Re=!0),t.memoizedState=o,t.baseState=i,t.baseQueue=l,n.lastRenderedState=o}if(e=n.interleaved,e!==null){r=e;do s=r.lane,ne.lanes|=s,sn|=s,r=r.next;while(r!==e)}else r===null&&(n.lanes=0);return[t.memoizedState,n.dispatch]}function Qs(e){var t=Qe(),n=t.queue;if(n===null)throw Error(E(311));n.lastRenderedReducer=e;var o=n.dispatch,r=n.pending,s=t.memoizedState;if(r!==null){n.pending=null;var i=r=r.next;do s=e(s,i.action),i=i.next;while(i!==r);tt(s,t.memoizedState)||(Re=!0),t.memoizedState=s,t.baseQueue===null&&(t.baseState=s),n.lastRenderedState=s}return[s,o]}function _d(){}function Ed(e,t){var n=ne,o=Qe(),r=t(),s=!tt(o.memoizedState,r);if(s&&(o.memoizedState=r,Re=!0),o=o.queue,Ka(Od.bind(null,n,o,e),[e]),o.getSnapshot!==t||s||ge!==null&&ge.memoizedState.tag&1){if(n.flags|=2048,Ao(9,zd.bind(null,n,o,r,t),void 0,null),fe===null)throw Error(E(349));rn&30||Rd(n,t,r)}return r}function Rd(e,t,n){e.flags|=16384,e={getSnapshot:t,value:n},t=ne.updateQueue,t===null?(t={lastEffect:null,stores:null},ne.updateQueue=t,t.stores=[e]):(n=t.stores,n===null?t.stores=[e]:n.push(e))}function zd(e,t,n,o){t.value=n,t.getSnapshot=o,Dd(t)&&Md(e)}function Od(e,t,n){return n(function(){Dd(t)&&Md(e)})}function Dd(e){var t=e.getSnapshot;e=e.value;try{var n=t();return!tt(e,n)}catch{return!0}}function Md(e){var t=ht(e,1);t!==null&&et(t,e,1,-1)}function ic(e){var t=rt();return typeof e=="function"&&(e=e()),t.memoizedState=t.baseState=e,e={pending:null,interleaved:null,lanes:0,dispatch:null,lastRenderedReducer:No,lastRenderedState:e},t.queue=e,e=e.dispatch=uf.bind(null,ne,e),[t.memoizedState,e]}function Ao(e,t,n,o){return e={tag:e,create:t,destroy:n,deps:o,next:null},t=ne.updateQueue,t===null?(t={lastEffect:null,stores:null},ne.updateQueue=t,t.lastEffect=e.next=e):(n=t.lastEffect,n===null?t.lastEffect=e.next=e:(o=n.next,n.next=e,e.next=o,t.lastEffect=e)),e}function jd(){return Qe().memoizedState}function _r(e,t,n,o){var r=rt();ne.flags|=e,r.memoizedState=Ao(1|t,n,void 0,o===void 0?null:o)}function fs(e,t,n,o){var r=Qe();o=o===void 0?null:o;var s=void 0;if(ue!==null){var i=ue.memoizedState;if(s=i.destroy,o!==null&&Ga(o,i.deps)){r.memoizedState=Ao(t,n,s,o);return}}ne.flags|=e,r.memoizedState=Ao(1|t,n,s,o)}function ac(e,t){return _r(8390656,8,e,t)}function Ka(e,t){return fs(2048,8,e,t)}function Td(e,t){return fs(4,2,e,t)}function Nd(e,t){return fs(4,4,e,t)}function Ad(e,t){if(typeof t=="function")return e=e(),t(e),function(){t(null)};if(t!=null)return e=e(),t.current=e,function(){t.current=null}}function Bd(e,t,n){return n=n!=null?n.concat([e]):null,fs(4,4,Ad.bind(null,t,e),n)}function Ya(){}function Ud(e,t){var n=Qe();t=t===void 0?null:t;var o=n.memoizedState;return o!==null&&t!==null&&Ga(t,o[1])?o[0]:(n.memoizedState=[e,t],e)}function Fd(e,t){var n=Qe();t=t===void 0?null:t;var o=n.memoizedState;return o!==null&&t!==null&&Ga(t,o[1])?o[0]:(e=e(),n.memoizedState=[e,t],e)}function Vd(e,t,n){return rn&21?(tt(n,t)||(n=Qu(),ne.lanes|=n,sn|=n,e.baseState=!0),t):(e.baseState&&(e.baseState=!1,Re=!0),e.memoizedState=n)}function lf(e,t){var n=Q;Q=n!==0&&4>n?n:4,e(!0);var o=Gs.transition;Gs.transition={};try{e(!1),t()}finally{Q=n,Gs.transition=o}}function Wd(){return Qe().memoizedState}function cf(e,t,n){var o=jt(e);if(n={lane:o,action:n,hasEagerState:!1,eagerState:null,next:null},Hd(e))Gd(t,n);else if(n=Ld(e,t,n,o),n!==null){var r=Le();et(n,e,o,r),qd(n,t,o)}}function uf(e,t,n){var o=jt(e),r={lane:o,action:n,hasEagerState:!1,eagerState:null,next:null};if(Hd(e))Gd(t,r);else{var s=e.alternate;if(e.lanes===0&&(s===null||s.lanes===0)&&(s=t.lastRenderedReducer,s!==null))try{var i=t.lastRenderedState,a=s(i,n);if(r.hasEagerState=!0,r.eagerState=a,tt(a,i)){var l=t.interleaved;l===null?(r.next=r,Ua(t)):(r.next=l.next,l.next=r),t.interleaved=r;return}}catch{}finally{}n=Ld(e,t,r,o),n!==null&&(r=Le(),et(n,e,o,r),qd(n,t,o))}}function Hd(e){var t=e.alternate;return e===ne||t!==null&&t===ne}function Gd(e,t){xo=Xr=!0;var n=e.pending;n===null?t.next=t:(t.next=n.next,n.next=t),e.pending=t}function qd(e,t,n){if(n&4194240){var o=t.lanes;o&=e.pendingLanes,n|=o,t.lanes=n,Ia(e,n)}}var Zr={readContext:qe,useCallback:xe,useContext:xe,useEffect:xe,useImperativeHandle:xe,useInsertionEffect:xe,useLayoutEffect:xe,useMemo:xe,useReducer:xe,useRef:xe,useState:xe,useDebugValue:xe,useDeferredValue:xe,useTransition:xe,useMutableSource:xe,useSyncExternalStore:xe,useId:xe,unstable_isNewReconciler:!1},df={readContext:qe,useCallback:function(e,t){return rt().memoizedState=[e,t===void 0?null:t],e},useContext:qe,useEffect:ac,useImperativeHandle:function(e,t,n){return n=n!=null?n.concat([e]):null,_r(4194308,4,Ad.bind(null,t,e),n)},useLayoutEffect:function(e,t){return _r(4194308,4,e,t)},useInsertionEffect:function(e,t){return _r(4,2,e,t)},useMemo:function(e,t){var n=rt();return t=t===void 0?null:t,e=e(),n.memoizedState=[e,t],e},useReducer:function(e,t,n){var o=rt();return t=n!==void 0?n(t):t,o.memoizedState=o.baseState=t,e={pending:null,interleaved:null,lanes:0,dispatch:null,lastRenderedReducer:e,lastRenderedState:t},o.queue=e,e=e.dispatch=cf.bind(null,ne,e),[o.memoizedState,e]},useRef:function(e){var t=rt();return e={current:e},t.memoizedState=e},useState:ic,useDebugValue:Ya,useDeferredValue:function(e){return rt().memoizedState=e},useTransition:function(){var e=ic(!1),t=e[0];return e=lf.bind(null,e[1]),rt().memoizedState=e,[t,e]},useMutableSource:function(){},useSyncExternalStore:function(e,t,n){var o=ne,r=rt();if(J){if(n===void 0)throw Error(E(407));n=n()}else{if(n=t(),fe===null)throw Error(E(349));rn&30||Rd(o,t,n)}r.memoizedState=n;var s={value:n,getSnapshot:t};return r.queue=s,ac(Od.bind(null,o,s,e),[e]),o.flags|=2048,Ao(9,zd.bind(null,o,s,n,t),void 0,null),n},useId:function(){var e=rt(),t=fe.identifierPrefix;if(J){var n=dt,o=ut;n=(o&~(1<<32-Je(o)-1)).toString(32)+n,t=":"+t+"R"+n,n=To++,0<n&&(t+="H"+n.toString(32)),t+=":"}else n=af++,t=":"+t+"r"+n.toString(32)+":";return e.memoizedState=t},unstable_isNewReconciler:!1},pf={readContext:qe,useCallback:Ud,useContext:qe,useEffect:Ka,useImperativeHandle:Bd,useInsertionEffect:Td,useLayoutEffect:Nd,useMemo:Fd,useReducer:qs,useRef:jd,useState:function(){return qs(No)},useDebugValue:Ya,useDeferredValue:function(e){var t=Qe();return Vd(t,ue.memoizedState,e)},useTransition:function(){var e=qs(No)[0],t=Qe().memoizedState;return[e,t]},useMutableSource:_d,useSyncExternalStore:Ed,useId:Wd,unstable_isNewReconciler:!1},mf={readContext:qe,useCallback:Ud,useContext:qe,useEffect:Ka,useImperativeHandle:Bd,useInsertionEffect:Td,useLayoutEffect:Nd,useMemo:Fd,useReducer:Qs,useRef:jd,useState:function(){return Qs(No)},useDebugValue:Ya,useDeferredValue:function(e){var t=Qe();return ue===null?t.memoizedState=e:Vd(t,ue.memoizedState,e)},useTransition:function(){var e=Qs(No)[0],t=Qe().memoizedState;return[e,t]},useMutableSource:_d,useSyncExternalStore:Ed,useId:Wd,unstable_isNewReconciler:!1};function Ye(e,t){if(e&&e.defaultProps){t=oe({},t),e=e.defaultProps;for(var n in e)t[n]===void 0&&(t[n]=e[n]);return t}return t}function Fi(e,t,n,o){t=e.memoizedState,n=n(o,t),n=n==null?t:oe({},t,n),e.memoizedState=n,e.lanes===0&&(e.updateQueue.baseState=n)}var hs={isMounted:function(e){return(e=e._reactInternals)?un(e)===e:!1},enqueueSetState:function(e,t,n){e=e._reactInternals;var o=Le(),r=jt(e),s=pt(o,r);s.payload=t,n!=null&&(s.callback=n),t=Dt(e,s,r),t!==null&&(et(t,e,r,o),Ir(t,e,r))},enqueueReplaceState:function(e,t,n){e=e._reactInternals;var o=Le(),r=jt(e),s=pt(o,r);s.tag=1,s.payload=t,n!=null&&(s.callback=n),t=Dt(e,s,r),t!==null&&(et(t,e,r,o),Ir(t,e,r))},enqueueForceUpdate:function(e,t){e=e._reactInternals;var n=Le(),o=jt(e),r=pt(n,o);r.tag=2,t!=null&&(r.callback=t),t=Dt(e,r,o),t!==null&&(et(t,e,o,n),Ir(t,e,o))}};function lc(e,t,n,o,r,s,i){return e=e.stateNode,typeof e.shouldComponentUpdate=="function"?e.shouldComponentUpdate(o,s,i):t.prototype&&t.prototype.isPureReactComponent?!Ro(n,o)||!Ro(r,s):!0}function Qd(e,t,n){var o=!1,r=Bt,s=t.contextType;return typeof s=="object"&&s!==null?s=qe(s):(r=Oe(t)?nn:$e.current,o=t.contextTypes,s=(o=o!=null)?Tn(e,r):Bt),t=new t(n,s),e.memoizedState=t.state!==null&&t.state!==void 0?t.state:null,t.updater=hs,e.stateNode=t,t._reactInternals=e,o&&(e=e.stateNode,e.__reactInternalMemoizedUnmaskedChildContext=r,e.__reactInternalMemoizedMaskedChildContext=s),t}function cc(e,t,n,o){e=t.state,typeof t.componentWillReceiveProps=="function"&&t.componentWillReceiveProps(n,o),typeof t.UNSAFE_componentWillReceiveProps=="function"&&t.UNSAFE_componentWillReceiveProps(n,o),t.state!==e&&hs.enqueueReplaceState(t,t.state,null)}function Vi(e,t,n,o){var r=e.stateNode;r.props=n,r.state=e.memoizedState,r.refs={},Fa(e);var s=t.contextType;typeof s=="object"&&s!==null?r.context=qe(s):(s=Oe(t)?nn:$e.current,r.context=Tn(e,s)),r.state=e.memoizedState,s=t.getDerivedStateFromProps,typeof s=="function"&&(Fi(e,t,s,n),r.state=e.memoizedState),typeof t.getDerivedStateFromProps=="function"||typeof r.getSnapshotBeforeUpdate=="function"||typeof r.UNSAFE_componentWillMount!="function"&&typeof r.componentWillMount!="function"||(t=r.state,typeof r.componentWillMount=="function"&&r.componentWillMount(),typeof r.UNSAFE_componentWillMount=="function"&&r.UNSAFE_componentWillMount(),t!==r.state&&hs.enqueueReplaceState(r,r.state,null),Kr(e,n,r,o),r.state=e.memoizedState),typeof r.componentDidMount=="function"&&(e.flags|=4194308)}function Un(e,t){try{var n="",o=t;do n+=Bm(o),o=o.return;while(o);var r=n}catch(s){r=`
Error generating stack: `+s.message+`
`+s.stack}return{value:e,source:t,stack:r,digest:null}}function Ks(e,t,n){return{value:e,source:null,stack:n??null,digest:t??null}}function Wi(e,t){try{console.error(t.value)}catch(n){setTimeout(function(){throw n})}}var gf=typeof WeakMap=="function"?WeakMap:Map;function Kd(e,t,n){n=pt(-1,n),n.tag=3,n.payload={element:null};var o=t.value;return n.callback=function(){es||(es=!0,ea=o),Wi(e,t)},n}function Yd(e,t,n){n=pt(-1,n),n.tag=3;var o=e.type.getDerivedStateFromError;if(typeof o=="function"){var r=t.value;n.payload=function(){return o(r)},n.callback=function(){Wi(e,t)}}var s=e.stateNode;return s!==null&&typeof s.componentDidCatch=="function"&&(n.callback=function(){Wi(e,t),typeof o!="function"&&(Mt===null?Mt=new Set([this]):Mt.add(this));var i=t.stack;this.componentDidCatch(t.value,{componentStack:i!==null?i:""})}),n}function uc(e,t,n){var o=e.pingCache;if(o===null){o=e.pingCache=new gf;var r=new Set;o.set(t,r)}else r=o.get(t),r===void 0&&(r=new Set,o.set(t,r));r.has(n)||(r.add(n),e=kf.bind(null,e,t,n),t.then(e,e))}function dc(e){do{var t;if((t=e.tag===13)&&(t=e.memoizedState,t=t!==null?t.dehydrated!==null:!0),t)return e;e=e.return}while(e!==null);return null}function pc(e,t,n,o,r){return e.mode&1?(e.flags|=65536,e.lanes=r,e):(e===t?e.flags|=65536:(e.flags|=128,n.flags|=131072,n.flags&=-52805,n.tag===1&&(n.alternate===null?n.tag=17:(t=pt(-1,1),t.tag=2,Dt(n,t,1))),n.lanes|=1),e)}var ff=vt.ReactCurrentOwner,Re=!1;function Ce(e,t,n,o){t.child=e===null?Cd(t,null,n,o):An(t,e.child,n,o)}function mc(e,t,n,o,r){n=n.render;var s=t.ref;return zn(t,r),o=qa(e,t,n,o,s,r),n=Qa(),e!==null&&!Re?(t.updateQueue=e.updateQueue,t.flags&=-2053,e.lanes&=~r,yt(e,t,r)):(J&&n&&Ma(t),t.flags|=1,Ce(e,t,o,r),t.child)}function gc(e,t,n,o,r){if(e===null){var s=n.type;return typeof s=="function"&&!rl(s)&&s.defaultProps===void 0&&n.compare===null&&n.defaultProps===void 0?(t.tag=15,t.type=s,Xd(e,t,s,o,r)):(e=Or(n.type,null,o,t,t.mode,r),e.ref=t.ref,e.return=t,t.child=e)}if(s=e.child,!(e.lanes&r)){var i=s.memoizedProps;if(n=n.compare,n=n!==null?n:Ro,n(i,o)&&e.ref===t.ref)return yt(e,t,r)}return t.flags|=1,e=Tt(s,o),e.ref=t.ref,e.return=t,t.child=e}function Xd(e,t,n,o,r){if(e!==null){var s=e.memoizedProps;if(Ro(s,o)&&e.ref===t.ref)if(Re=!1,t.pendingProps=o=s,(e.lanes&r)!==0)e.flags&131072&&(Re=!0);else return t.lanes=e.lanes,yt(e,t,r)}return Hi(e,t,n,o,r)}function Zd(e,t,n){var o=t.pendingProps,r=o.children,s=e!==null?e.memoizedState:null;if(o.mode==="hidden")if(!(t.mode&1))t.memoizedState={baseLanes:0,cachePool:null,transitions:null},Y(In,je),je|=n;else{if(!(n&1073741824))return e=s!==null?s.baseLanes|n:n,t.lanes=t.childLanes=1073741824,t.memoizedState={baseLanes:e,cachePool:null,transitions:null},t.updateQueue=null,Y(In,je),je|=e,null;t.memoizedState={baseLanes:0,cachePool:null,transitions:null},o=s!==null?s.baseLanes:n,Y(In,je),je|=o}else s!==null?(o=s.baseLanes|n,t.memoizedState=null):o=n,Y(In,je),je|=o;return Ce(e,t,r,n),t.child}function Jd(e,t){var n=t.ref;(e===null&&n!==null||e!==null&&e.ref!==n)&&(t.flags|=512,t.flags|=2097152)}function Hi(e,t,n,o,r){var s=Oe(n)?nn:$e.current;return s=Tn(t,s),zn(t,r),n=qa(e,t,n,o,s,r),o=Qa(),e!==null&&!Re?(t.updateQueue=e.updateQueue,t.flags&=-2053,e.lanes&=~r,yt(e,t,r)):(J&&o&&Ma(t),t.flags|=1,Ce(e,t,n,r),t.child)}function fc(e,t,n,o,r){if(Oe(n)){var s=!0;Wr(t)}else s=!1;if(zn(t,r),t.stateNode===null)Er(e,t),Qd(t,n,o),Vi(t,n,o,r),o=!0;else if(e===null){var i=t.stateNode,a=t.memoizedProps;i.props=a;var l=i.context,c=n.contextType;typeof c=="object"&&c!==null?c=qe(c):(c=Oe(n)?nn:$e.current,c=Tn(t,c));var u=n.getDerivedStateFromProps,d=typeof u=="function"||typeof i.getSnapshotBeforeUpdate=="function";d||typeof i.UNSAFE_componentWillReceiveProps!="function"&&typeof i.componentWillReceiveProps!="function"||(a!==o||l!==c)&&cc(t,i,o,c),$t=!1;var p=t.memoizedState;i.state=p,Kr(t,o,i,r),l=t.memoizedState,a!==o||p!==l||ze.current||$t?(typeof u=="function"&&(Fi(t,n,u,o),l=t.memoizedState),(a=$t||lc(t,n,a,o,p,l,c))?(d||typeof i.UNSAFE_componentWillMount!="function"&&typeof i.componentWillMount!="function"||(typeof i.componentWillMount=="function"&&i.componentWillMount(),typeof i.UNSAFE_componentWillMount=="function"&&i.UNSAFE_componentWillMount()),typeof i.componentDidMount=="function"&&(t.flags|=4194308)):(typeof i.componentDidMount=="function"&&(t.flags|=4194308),t.memoizedProps=o,t.memoizedState=l),i.props=o,i.state=l,i.context=c,o=a):(typeof i.componentDidMount=="function"&&(t.flags|=4194308),o=!1)}else{i=t.stateNode,Id(e,t),a=t.memoizedProps,c=t.type===t.elementType?a:Ye(t.type,a),i.props=c,d=t.pendingProps,p=i.context,l=n.contextType,typeof l=="object"&&l!==null?l=qe(l):(l=Oe(n)?nn:$e.current,l=Tn(t,l));var g=n.getDerivedStateFromProps;(u=typeof g=="function"||typeof i.getSnapshotBeforeUpdate=="function")||typeof i.UNSAFE_componentWillReceiveProps!="function"&&typeof i.componentWillReceiveProps!="function"||(a!==d||p!==l)&&cc(t,i,o,l),$t=!1,p=t.memoizedState,i.state=p,Kr(t,o,i,r);var v=t.memoizedState;a!==d||p!==v||ze.current||$t?(typeof g=="function"&&(Fi(t,n,g,o),v=t.memoizedState),(c=$t||lc(t,n,c,o,p,v,l)||!1)?(u||typeof i.UNSAFE_componentWillUpdate!="function"&&typeof i.componentWillUpdate!="function"||(typeof i.componentWillUpdate=="function"&&i.componentWillUpdate(o,v,l),typeof i.UNSAFE_componentWillUpdate=="function"&&i.UNSAFE_componentWillUpdate(o,v,l)),typeof i.componentDidUpdate=="function"&&(t.flags|=4),typeof i.getSnapshotBeforeUpdate=="function"&&(t.flags|=1024)):(typeof i.componentDidUpdate!="function"||a===e.memoizedProps&&p===e.memoizedState||(t.flags|=4),typeof i.getSnapshotBeforeUpdate!="function"||a===e.memoizedProps&&p===e.memoizedState||(t.flags|=1024),t.memoizedProps=o,t.memoizedState=v),i.props=o,i.state=v,i.context=l,o=c):(typeof i.componentDidUpdate!="function"||a===e.memoizedProps&&p===e.memoizedState||(t.flags|=4),typeof i.getSnapshotBeforeUpdate!="function"||a===e.memoizedProps&&p===e.memoizedState||(t.flags|=1024),o=!1)}return Gi(e,t,n,o,s,r)}function Gi(e,t,n,o,r,s){Jd(e,t);var i=(t.flags&128)!==0;if(!o&&!i)return r&&ec(t,n,!1),yt(e,t,s);o=t.stateNode,ff.current=t;var a=i&&typeof n.getDerivedStateFromError!="function"?null:o.render();return t.flags|=1,e!==null&&i?(t.child=An(t,e.child,null,s),t.child=An(t,null,a,s)):Ce(e,t,a,s),t.memoizedState=o.state,r&&ec(t,n,!0),t.child}function ep(e){var t=e.stateNode;t.pendingContext?Jl(e,t.pendingContext,t.pendingContext!==t.context):t.context&&Jl(e,t.context,!1),Va(e,t.containerInfo)}function hc(e,t,n,o,r){return Nn(),Ta(r),t.flags|=256,Ce(e,t,n,o),t.child}var qi={dehydrated:null,treeContext:null,retryLane:0};function Qi(e){return{baseLanes:e,cachePool:null,transitions:null}}function tp(e,t,n){var o=t.pendingProps,r=te.current,s=!1,i=(t.flags&128)!==0,a;if((a=i)||(a=e!==null&&e.memoizedState===null?!1:(r&2)!==0),a?(s=!0,t.flags&=-129):(e===null||e.memoizedState!==null)&&(r|=1),Y(te,r&1),e===null)return Bi(t),e=t.memoizedState,e!==null&&(e=e.dehydrated,e!==null)?(t.mode&1?e.data==="$!"?t.lanes=8:t.lanes=1073741824:t.lanes=1,null):(i=o.children,e=o.fallback,s?(o=t.mode,s=t.child,i={mode:"hidden",children:i},!(o&1)&&s!==null?(s.childLanes=0,s.pendingProps=i):s=ws(i,o,0,null),e=tn(e,o,n,null),s.return=t,e.return=t,s.sibling=e,t.child=s,t.child.memoizedState=Qi(n),t.memoizedState=qi,e):Xa(t,i));if(r=e.memoizedState,r!==null&&(a=r.dehydrated,a!==null))return hf(e,t,i,o,a,r,n);if(s){s=o.fallback,i=t.mode,r=e.child,a=r.sibling;var l={mode:"hidden",children:o.children};return!(i&1)&&t.child!==r?(o=t.child,o.childLanes=0,o.pendingProps=l,t.deletions=null):(o=Tt(r,l),o.subtreeFlags=r.subtreeFlags&14680064),a!==null?s=Tt(a,s):(s=tn(s,i,n,null),s.flags|=2),s.return=t,o.return=t,o.sibling=s,t.child=o,o=s,s=t.child,i=e.child.memoizedState,i=i===null?Qi(n):{baseLanes:i.baseLanes|n,cachePool:null,transitions:i.transitions},s.memoizedState=i,s.childLanes=e.childLanes&~n,t.memoizedState=qi,o}return s=e.child,e=s.sibling,o=Tt(s,{mode:"visible",children:o.children}),!(t.mode&1)&&(o.lanes=n),o.return=t,o.sibling=null,e!==null&&(n=t.deletions,n===null?(t.deletions=[e],t.flags|=16):n.push(e)),t.child=o,t.memoizedState=null,o}function Xa(e,t){return t=ws({mode:"visible",children:t},e.mode,0,null),t.return=e,e.child=t}function dr(e,t,n,o){return o!==null&&Ta(o),An(t,e.child,null,n),e=Xa(t,t.pendingProps.children),e.flags|=2,t.memoizedState=null,e}function hf(e,t,n,o,r,s,i){if(n)return t.flags&256?(t.flags&=-257,o=Ks(Error(E(422))),dr(e,t,i,o)):t.memoizedState!==null?(t.child=e.child,t.flags|=128,null):(s=o.fallback,r=t.mode,o=ws({mode:"visible",children:o.children},r,0,null),s=tn(s,r,i,null),s.flags|=2,o.return=t,s.return=t,o.sibling=s,t.child=o,t.mode&1&&An(t,e.child,null,i),t.child.memoizedState=Qi(i),t.memoizedState=qi,s);if(!(t.mode&1))return dr(e,t,i,null);if(r.data==="$!"){if(o=r.nextSibling&&r.nextSibling.dataset,o)var a=o.dgst;return o=a,s=Error(E(419)),o=Ks(s,o,void 0),dr(e,t,i,o)}if(a=(i&e.childLanes)!==0,Re||a){if(o=fe,o!==null){switch(i&-i){case 4:r=2;break;case 16:r=8;break;case 64:case 128:case 256:case 512:case 1024:case 2048:case 4096:case 8192:case 16384:case 32768:case 65536:case 131072:case 262144:case 524288:case 1048576:case 2097152:case 4194304:case 8388608:case 16777216:case 33554432:case 67108864:r=32;break;case 536870912:r=268435456;break;default:r=0}r=r&(o.suspendedLanes|i)?0:r,r!==0&&r!==s.retryLane&&(s.retryLane=r,ht(e,r),et(o,e,r,-1))}return ol(),o=Ks(Error(E(421))),dr(e,t,i,o)}return r.data==="$?"?(t.flags|=128,t.child=e.child,t=_f.bind(null,e),r._reactRetry=t,null):(e=s.treeContext,Te=Ot(r.nextSibling),Ne=t,J=!0,Ze=null,e!==null&&(Ve[We++]=ut,Ve[We++]=dt,Ve[We++]=on,ut=e.id,dt=e.overflow,on=t),t=Xa(t,o.children),t.flags|=4096,t)}function yc(e,t,n){e.lanes|=t;var o=e.alternate;o!==null&&(o.lanes|=t),Ui(e.return,t,n)}function Ys(e,t,n,o,r){var s=e.memoizedState;s===null?e.memoizedState={isBackwards:t,rendering:null,renderingStartTime:0,last:o,tail:n,tailMode:r}:(s.isBackwards=t,s.rendering=null,s.renderingStartTime=0,s.last=o,s.tail=n,s.tailMode=r)}function np(e,t,n){var o=t.pendingProps,r=o.revealOrder,s=o.tail;if(Ce(e,t,o.children,n),o=te.current,o&2)o=o&1|2,t.flags|=128;else{if(e!==null&&e.flags&128)e:for(e=t.child;e!==null;){if(e.tag===13)e.memoizedState!==null&&yc(e,n,t);else if(e.tag===19)yc(e,n,t);else if(e.child!==null){e.child.return=e,e=e.child;continue}if(e===t)break e;for(;e.sibling===null;){if(e.return===null||e.return===t)break e;e=e.return}e.sibling.return=e.return,e=e.sibling}o&=1}if(Y(te,o),!(t.mode&1))t.memoizedState=null;else switch(r){case"forwards":for(n=t.child,r=null;n!==null;)e=n.alternate,e!==null&&Yr(e)===null&&(r=n),n=n.sibling;n=r,n===null?(r=t.child,t.child=null):(r=n.sibling,n.sibling=null),Ys(t,!1,r,n,s);break;case"backwards":for(n=null,r=t.child,t.child=null;r!==null;){if(e=r.alternate,e!==null&&Yr(e)===null){t.child=r;break}e=r.sibling,r.sibling=n,n=r,r=e}Ys(t,!0,n,null,s);break;case"together":Ys(t,!1,null,null,void 0);break;default:t.memoizedState=null}return t.child}function Er(e,t){!(t.mode&1)&&e!==null&&(e.alternate=null,t.alternate=null,t.flags|=2)}function yt(e,t,n){if(e!==null&&(t.dependencies=e.dependencies),sn|=t.lanes,!(n&t.childLanes))return null;if(e!==null&&t.child!==e.child)throw Error(E(153));if(t.child!==null){for(e=t.child,n=Tt(e,e.pendingProps),t.child=n,n.return=t;e.sibling!==null;)e=e.sibling,n=n.sibling=Tt(e,e.pendingProps),n.return=t;n.sibling=null}return t.child}function yf(e,t,n){switch(t.tag){case 3:ep(t),Nn();break;case 5:kd(t);break;case 1:Oe(t.type)&&Wr(t);break;case 4:Va(t,t.stateNode.containerInfo);break;case 10:var o=t.type._context,r=t.memoizedProps.value;Y(qr,o._currentValue),o._currentValue=r;break;case 13:if(o=t.memoizedState,o!==null)return o.dehydrated!==null?(Y(te,te.current&1),t.flags|=128,null):n&t.child.childLanes?tp(e,t,n):(Y(te,te.current&1),e=yt(e,t,n),e!==null?e.sibling:null);Y(te,te.current&1);break;case 19:if(o=(n&t.childLanes)!==0,e.flags&128){if(o)return np(e,t,n);t.flags|=128}if(r=t.memoizedState,r!==null&&(r.rendering=null,r.tail=null,r.lastEffect=null),Y(te,te.current),o)break;return null;case 22:case 23:return t.lanes=0,Zd(e,t,n)}return yt(e,t,n)}var op,Ki,rp,sp;op=function(e,t){for(var n=t.child;n!==null;){if(n.tag===5||n.tag===6)e.appendChild(n.stateNode);else if(n.tag!==4&&n.child!==null){n.child.return=n,n=n.child;continue}if(n===t)break;for(;n.sibling===null;){if(n.return===null||n.return===t)return;n=n.return}n.sibling.return=n.return,n=n.sibling}};Ki=function(){};rp=function(e,t,n,o){var r=e.memoizedProps;if(r!==o){e=t.stateNode,Zt(at.current);var s=null;switch(n){case"input":r=yi(e,r),o=yi(e,o),s=[];break;case"select":r=oe({},r,{value:void 0}),o=oe({},o,{value:void 0}),s=[];break;case"textarea":r=xi(e,r),o=xi(e,o),s=[];break;default:typeof r.onClick!="function"&&typeof o.onClick=="function"&&(e.onclick=Fr)}Pi(n,o);var i;n=null;for(c in r)if(!o.hasOwnProperty(c)&&r.hasOwnProperty(c)&&r[c]!=null)if(c==="style"){var a=r[c];for(i in a)a.hasOwnProperty(i)&&(n||(n={}),n[i]="")}else c!=="dangerouslySetInnerHTML"&&c!=="children"&&c!=="suppressContentEditableWarning"&&c!=="suppressHydrationWarning"&&c!=="autoFocus"&&(So.hasOwnProperty(c)?s||(s=[]):(s=s||[]).push(c,null));for(c in o){var l=o[c];if(a=r!=null?r[c]:void 0,o.hasOwnProperty(c)&&l!==a&&(l!=null||a!=null))if(c==="style")if(a){for(i in a)!a.hasOwnProperty(i)||l&&l.hasOwnProperty(i)||(n||(n={}),n[i]="");for(i in l)l.hasOwnProperty(i)&&a[i]!==l[i]&&(n||(n={}),n[i]=l[i])}else n||(s||(s=[]),s.push(c,n)),n=l;else c==="dangerouslySetInnerHTML"?(l=l?l.__html:void 0,a=a?a.__html:void 0,l!=null&&a!==l&&(s=s||[]).push(c,l)):c==="children"?typeof l!="string"&&typeof l!="number"||(s=s||[]).push(c,""+l):c!=="suppressContentEditableWarning"&&c!=="suppressHydrationWarning"&&(So.hasOwnProperty(c)?(l!=null&&c==="onScroll"&&X("scroll",e),s||a===l||(s=[])):(s=s||[]).push(c,l))}n&&(s=s||[]).push("style",n);var c=s;(t.updateQueue=c)&&(t.flags|=4)}};sp=function(e,t,n,o){n!==o&&(t.flags|=4)};function io(e,t){if(!J)switch(e.tailMode){case"hidden":t=e.tail;for(var n=null;t!==null;)t.alternate!==null&&(n=t),t=t.sibling;n===null?e.tail=null:n.sibling=null;break;case"collapsed":n=e.tail;for(var o=null;n!==null;)n.alternate!==null&&(o=n),n=n.sibling;o===null?t||e.tail===null?e.tail=null:e.tail.sibling=null:o.sibling=null}}function be(e){var t=e.alternate!==null&&e.alternate.child===e.child,n=0,o=0;if(t)for(var r=e.child;r!==null;)n|=r.lanes|r.childLanes,o|=r.subtreeFlags&14680064,o|=r.flags&14680064,r.return=e,r=r.sibling;else for(r=e.child;r!==null;)n|=r.lanes|r.childLanes,o|=r.subtreeFlags,o|=r.flags,r.return=e,r=r.sibling;return e.subtreeFlags|=o,e.childLanes=n,t}function vf(e,t,n){var o=t.pendingProps;switch(ja(t),t.tag){case 2:case 16:case 15:case 0:case 11:case 7:case 8:case 12:case 9:case 14:return be(t),null;case 1:return Oe(t.type)&&Vr(),be(t),null;case 3:return o=t.stateNode,Bn(),Z(ze),Z($e),Ha(),o.pendingContext&&(o.context=o.pendingContext,o.pendingContext=null),(e===null||e.child===null)&&(cr(t)?t.flags|=4:e===null||e.memoizedState.isDehydrated&&!(t.flags&256)||(t.flags|=1024,Ze!==null&&(oa(Ze),Ze=null))),Ki(e,t),be(t),null;case 5:Wa(t);var r=Zt(jo.current);if(n=t.type,e!==null&&t.stateNode!=null)rp(e,t,n,o,r),e.ref!==t.ref&&(t.flags|=512,t.flags|=2097152);else{if(!o){if(t.stateNode===null)throw Error(E(166));return be(t),null}if(e=Zt(at.current),cr(t)){o=t.stateNode,n=t.type;var s=t.memoizedProps;switch(o[st]=t,o[Do]=s,e=(t.mode&1)!==0,n){case"dialog":X("cancel",o),X("close",o);break;case"iframe":case"object":case"embed":X("load",o);break;case"video":case"audio":for(r=0;r<po.length;r++)X(po[r],o);break;case"source":X("error",o);break;case"img":case"image":case"link":X("error",o),X("load",o);break;case"details":X("toggle",o);break;case"input":Ll(o,s),X("invalid",o);break;case"select":o._wrapperState={wasMultiple:!!s.multiple},X("invalid",o);break;case"textarea":kl(o,s),X("invalid",o)}Pi(n,s),r=null;for(var i in s)if(s.hasOwnProperty(i)){var a=s[i];i==="children"?typeof a=="string"?o.textContent!==a&&(s.suppressHydrationWarning!==!0&&lr(o.textContent,a,e),r=["children",a]):typeof a=="number"&&o.textContent!==""+a&&(s.suppressHydrationWarning!==!0&&lr(o.textContent,a,e),r=["children",""+a]):So.hasOwnProperty(i)&&a!=null&&i==="onScroll"&&X("scroll",o)}switch(n){case"input":er(o),Il(o,s,!0);break;case"textarea":er(o),_l(o);break;case"select":case"option":break;default:typeof s.onClick=="function"&&(o.onclick=Fr)}o=r,t.updateQueue=o,o!==null&&(t.flags|=4)}else{i=r.nodeType===9?r:r.ownerDocument,e==="http://www.w3.org/1999/xhtml"&&(e=Ou(n)),e==="http://www.w3.org/1999/xhtml"?n==="script"?(e=i.createElement("div"),e.innerHTML="<script><\/script>",e=e.removeChild(e.firstChild)):typeof o.is=="string"?e=i.createElement(n,{is:o.is}):(e=i.createElement(n),n==="select"&&(i=e,o.multiple?i.multiple=!0:o.size&&(i.size=o.size))):e=i.createElementNS(e,n),e[st]=t,e[Do]=o,op(e,t,!1,!1),t.stateNode=e;e:{switch(i=$i(n,o),n){case"dialog":X("cancel",e),X("close",e),r=o;break;case"iframe":case"object":case"embed":X("load",e),r=o;break;case"video":case"audio":for(r=0;r<po.length;r++)X(po[r],e);r=o;break;case"source":X("error",e),r=o;break;case"img":case"image":case"link":X("error",e),X("load",e),r=o;break;case"details":X("toggle",e),r=o;break;case"input":Ll(e,o),r=yi(e,o),X("invalid",e);break;case"option":r=o;break;case"select":e._wrapperState={wasMultiple:!!o.multiple},r=oe({},o,{value:void 0}),X("invalid",e);break;case"textarea":kl(e,o),r=xi(e,o),X("invalid",e);break;default:r=o}Pi(n,r),a=r;for(s in a)if(a.hasOwnProperty(s)){var l=a[s];s==="style"?ju(e,l):s==="dangerouslySetInnerHTML"?(l=l?l.__html:void 0,l!=null&&Du(e,l)):s==="children"?typeof l=="string"?(n!=="textarea"||l!=="")&&Co(e,l):typeof l=="number"&&Co(e,""+l):s!=="suppressContentEditableWarning"&&s!=="suppressHydrationWarning"&&s!=="autoFocus"&&(So.hasOwnProperty(s)?l!=null&&s==="onScroll"&&X("scroll",e):l!=null&&ba(e,s,l,i))}switch(n){case"input":er(e),Il(e,o,!1);break;case"textarea":er(e),_l(e);break;case"option":o.value!=null&&e.setAttribute("value",""+At(o.value));break;case"select":e.multiple=!!o.multiple,s=o.value,s!=null?kn(e,!!o.multiple,s,!1):o.defaultValue!=null&&kn(e,!!o.multiple,o.defaultValue,!0);break;default:typeof r.onClick=="function"&&(e.onclick=Fr)}switch(n){case"button":case"input":case"select":case"textarea":o=!!o.autoFocus;break e;case"img":o=!0;break e;default:o=!1}}o&&(t.flags|=4)}t.ref!==null&&(t.flags|=512,t.flags|=2097152)}return be(t),null;case 6:if(e&&t.stateNode!=null)sp(e,t,e.memoizedProps,o);else{if(typeof o!="string"&&t.stateNode===null)throw Error(E(166));if(n=Zt(jo.current),Zt(at.current),cr(t)){if(o=t.stateNode,n=t.memoizedProps,o[st]=t,(s=o.nodeValue!==n)&&(e=Ne,e!==null))switch(e.tag){case 3:lr(o.nodeValue,n,(e.mode&1)!==0);break;case 5:e.memoizedProps.suppressHydrationWarning!==!0&&lr(o.nodeValue,n,(e.mode&1)!==0)}s&&(t.flags|=4)}else o=(n.nodeType===9?n:n.ownerDocument).createTextNode(o),o[st]=t,t.stateNode=o}return be(t),null;case 13:if(Z(te),o=t.memoizedState,e===null||e.memoizedState!==null&&e.memoizedState.dehydrated!==null){if(J&&Te!==null&&t.mode&1&&!(t.flags&128))$d(),Nn(),t.flags|=98560,s=!1;else if(s=cr(t),o!==null&&o.dehydrated!==null){if(e===null){if(!s)throw Error(E(318));if(s=t.memoizedState,s=s!==null?s.dehydrated:null,!s)throw Error(E(317));s[st]=t}else Nn(),!(t.flags&128)&&(t.memoizedState=null),t.flags|=4;be(t),s=!1}else Ze!==null&&(oa(Ze),Ze=null),s=!0;if(!s)return t.flags&65536?t:null}return t.flags&128?(t.lanes=n,t):(o=o!==null,o!==(e!==null&&e.memoizedState!==null)&&o&&(t.child.flags|=8192,t.mode&1&&(e===null||te.current&1?de===0&&(de=3):ol())),t.updateQueue!==null&&(t.flags|=4),be(t),null);case 4:return Bn(),Ki(e,t),e===null&&zo(t.stateNode.containerInfo),be(t),null;case 10:return Ba(t.type._context),be(t),null;case 17:return Oe(t.type)&&Vr(),be(t),null;case 19:if(Z(te),s=t.memoizedState,s===null)return be(t),null;if(o=(t.flags&128)!==0,i=s.rendering,i===null)if(o)io(s,!1);else{if(de!==0||e!==null&&e.flags&128)for(e=t.child;e!==null;){if(i=Yr(e),i!==null){for(t.flags|=128,io(s,!1),o=i.updateQueue,o!==null&&(t.updateQueue=o,t.flags|=4),t.subtreeFlags=0,o=n,n=t.child;n!==null;)s=n,e=o,s.flags&=14680066,i=s.alternate,i===null?(s.childLanes=0,s.lanes=e,s.child=null,s.subtreeFlags=0,s.memoizedProps=null,s.memoizedState=null,s.updateQueue=null,s.dependencies=null,s.stateNode=null):(s.childLanes=i.childLanes,s.lanes=i.lanes,s.child=i.child,s.subtreeFlags=0,s.deletions=null,s.memoizedProps=i.memoizedProps,s.memoizedState=i.memoizedState,s.updateQueue=i.updateQueue,s.type=i.type,e=i.dependencies,s.dependencies=e===null?null:{lanes:e.lanes,firstContext:e.firstContext}),n=n.sibling;return Y(te,te.current&1|2),t.child}e=e.sibling}s.tail!==null&&ie()>Fn&&(t.flags|=128,o=!0,io(s,!1),t.lanes=4194304)}else{if(!o)if(e=Yr(i),e!==null){if(t.flags|=128,o=!0,n=e.updateQueue,n!==null&&(t.updateQueue=n,t.flags|=4),io(s,!0),s.tail===null&&s.tailMode==="hidden"&&!i.alternate&&!J)return be(t),null}else 2*ie()-s.renderingStartTime>Fn&&n!==1073741824&&(t.flags|=128,o=!0,io(s,!1),t.lanes=4194304);s.isBackwards?(i.sibling=t.child,t.child=i):(n=s.last,n!==null?n.sibling=i:t.child=i,s.last=i)}return s.tail!==null?(t=s.tail,s.rendering=t,s.tail=t.sibling,s.renderingStartTime=ie(),t.sibling=null,n=te.current,Y(te,o?n&1|2:n&1),t):(be(t),null);case 22:case 23:return nl(),o=t.memoizedState!==null,e!==null&&e.memoizedState!==null!==o&&(t.flags|=8192),o&&t.mode&1?je&1073741824&&(be(t),t.subtreeFlags&6&&(t.flags|=8192)):be(t),null;case 24:return null;case 25:return null}throw Error(E(156,t.tag))}function wf(e,t){switch(ja(t),t.tag){case 1:return Oe(t.type)&&Vr(),e=t.flags,e&65536?(t.flags=e&-65537|128,t):null;case 3:return Bn(),Z(ze),Z($e),Ha(),e=t.flags,e&65536&&!(e&128)?(t.flags=e&-65537|128,t):null;case 5:return Wa(t),null;case 13:if(Z(te),e=t.memoizedState,e!==null&&e.dehydrated!==null){if(t.alternate===null)throw Error(E(340));Nn()}return e=t.flags,e&65536?(t.flags=e&-65537|128,t):null;case 19:return Z(te),null;case 4:return Bn(),null;case 10:return Ba(t.type._context),null;case 22:case 23:return nl(),null;case 24:return null;default:return null}}var pr=!1,Pe=!1,xf=typeof WeakSet=="function"?WeakSet:Set,D=null;function Ln(e,t){var n=e.ref;if(n!==null)if(typeof n=="function")try{n(null)}catch(o){se(e,t,o)}else n.current=null}function Yi(e,t,n){try{n()}catch(o){se(e,t,o)}}var vc=!1;function bf(e,t){if(Oi=Ar,e=ud(),Da(e)){if("selectionStart"in e)var n={start:e.selectionStart,end:e.selectionEnd};else e:{n=(n=e.ownerDocument)&&n.defaultView||window;var o=n.getSelection&&n.getSelection();if(o&&o.rangeCount!==0){n=o.anchorNode;var r=o.anchorOffset,s=o.focusNode;o=o.focusOffset;try{n.nodeType,s.nodeType}catch{n=null;break e}var i=0,a=-1,l=-1,c=0,u=0,d=e,p=null;t:for(;;){for(var g;d!==n||r!==0&&d.nodeType!==3||(a=i+r),d!==s||o!==0&&d.nodeType!==3||(l=i+o),d.nodeType===3&&(i+=d.nodeValue.length),(g=d.firstChild)!==null;)p=d,d=g;for(;;){if(d===e)break t;if(p===n&&++c===r&&(a=i),p===s&&++u===o&&(l=i),(g=d.nextSibling)!==null)break;d=p,p=d.parentNode}d=g}n=a===-1||l===-1?null:{start:a,end:l}}else n=null}n=n||{start:0,end:0}}else n=null;for(Di={focusedElem:e,selectionRange:n},Ar=!1,D=t;D!==null;)if(t=D,e=t.child,(t.subtreeFlags&1028)!==0&&e!==null)e.return=t,D=e;else for(;D!==null;){t=D;try{var v=t.alternate;if(t.flags&1024)switch(t.tag){case 0:case 11:case 15:break;case 1:if(v!==null){var w=v.memoizedProps,b=v.memoizedState,y=t.stateNode,f=y.getSnapshotBeforeUpdate(t.elementType===t.type?w:Ye(t.type,w),b);y.__reactInternalSnapshotBeforeUpdate=f}break;case 3:var h=t.stateNode.containerInfo;h.nodeType===1?h.textContent="":h.nodeType===9&&h.documentElement&&h.removeChild(h.documentElement);break;case 5:case 6:case 4:case 17:break;default:throw Error(E(163))}}catch(P){se(t,t.return,P)}if(e=t.sibling,e!==null){e.return=t.return,D=e;break}D=t.return}return v=vc,vc=!1,v}function bo(e,t,n){var o=t.updateQueue;if(o=o!==null?o.lastEffect:null,o!==null){var r=o=o.next;do{if((r.tag&e)===e){var s=r.destroy;r.destroy=void 0,s!==void 0&&Yi(t,n,s)}r=r.next}while(r!==o)}}function ys(e,t){if(t=t.updateQueue,t=t!==null?t.lastEffect:null,t!==null){var n=t=t.next;do{if((n.tag&e)===e){var o=n.create;n.destroy=o()}n=n.next}while(n!==t)}}function Xi(e){var t=e.ref;if(t!==null){var n=e.stateNode;switch(e.tag){case 5:e=n;break;default:e=n}typeof t=="function"?t(e):t.current=e}}function ip(e){var t=e.alternate;t!==null&&(e.alternate=null,ip(t)),e.child=null,e.deletions=null,e.sibling=null,e.tag===5&&(t=e.stateNode,t!==null&&(delete t[st],delete t[Do],delete t[Ti],delete t[nf],delete t[of])),e.stateNode=null,e.return=null,e.dependencies=null,e.memoizedProps=null,e.memoizedState=null,e.pendingProps=null,e.stateNode=null,e.updateQueue=null}function ap(e){return e.tag===5||e.tag===3||e.tag===4}function wc(e){e:for(;;){for(;e.sibling===null;){if(e.return===null||ap(e.return))return null;e=e.return}for(e.sibling.return=e.return,e=e.sibling;e.tag!==5&&e.tag!==6&&e.tag!==18;){if(e.flags&2||e.child===null||e.tag===4)continue e;e.child.return=e,e=e.child}if(!(e.flags&2))return e.stateNode}}function Zi(e,t,n){var o=e.tag;if(o===5||o===6)e=e.stateNode,t?n.nodeType===8?n.parentNode.insertBefore(e,t):n.insertBefore(e,t):(n.nodeType===8?(t=n.parentNode,t.insertBefore(e,n)):(t=n,t.appendChild(e)),n=n._reactRootContainer,n!=null||t.onclick!==null||(t.onclick=Fr));else if(o!==4&&(e=e.child,e!==null))for(Zi(e,t,n),e=e.sibling;e!==null;)Zi(e,t,n),e=e.sibling}function Ji(e,t,n){var o=e.tag;if(o===5||o===6)e=e.stateNode,t?n.insertBefore(e,t):n.appendChild(e);else if(o!==4&&(e=e.child,e!==null))for(Ji(e,t,n),e=e.sibling;e!==null;)Ji(e,t,n),e=e.sibling}var he=null,Xe=!1;function xt(e,t,n){for(n=n.child;n!==null;)lp(e,t,n),n=n.sibling}function lp(e,t,n){if(it&&typeof it.onCommitFiberUnmount=="function")try{it.onCommitFiberUnmount(cs,n)}catch{}switch(n.tag){case 5:Pe||Ln(n,t);case 6:var o=he,r=Xe;he=null,xt(e,t,n),he=o,Xe=r,he!==null&&(Xe?(e=he,n=n.stateNode,e.nodeType===8?e.parentNode.removeChild(n):e.removeChild(n)):he.removeChild(n.stateNode));break;case 18:he!==null&&(Xe?(e=he,n=n.stateNode,e.nodeType===8?Vs(e.parentNode,n):e.nodeType===1&&Vs(e,n),_o(e)):Vs(he,n.stateNode));break;case 4:o=he,r=Xe,he=n.stateNode.containerInfo,Xe=!0,xt(e,t,n),he=o,Xe=r;break;case 0:case 11:case 14:case 15:if(!Pe&&(o=n.updateQueue,o!==null&&(o=o.lastEffect,o!==null))){r=o=o.next;do{var s=r,i=s.destroy;s=s.tag,i!==void 0&&(s&2||s&4)&&Yi(n,t,i),r=r.next}while(r!==o)}xt(e,t,n);break;case 1:if(!Pe&&(Ln(n,t),o=n.stateNode,typeof o.componentWillUnmount=="function"))try{o.props=n.memoizedProps,o.state=n.memoizedState,o.componentWillUnmount()}catch(a){se(n,t,a)}xt(e,t,n);break;case 21:xt(e,t,n);break;case 22:n.mode&1?(Pe=(o=Pe)||n.memoizedState!==null,xt(e,t,n),Pe=o):xt(e,t,n);break;default:xt(e,t,n)}}function xc(e){var t=e.updateQueue;if(t!==null){e.updateQueue=null;var n=e.stateNode;n===null&&(n=e.stateNode=new xf),t.forEach(function(o){var r=Ef.bind(null,e,o);n.has(o)||(n.add(o),o.then(r,r))})}}function Ke(e,t){var n=t.deletions;if(n!==null)for(var o=0;o<n.length;o++){var r=n[o];try{var s=e,i=t,a=i;e:for(;a!==null;){switch(a.tag){case 5:he=a.stateNode,Xe=!1;break e;case 3:he=a.stateNode.containerInfo,Xe=!0;break e;case 4:he=a.stateNode.containerInfo,Xe=!0;break e}a=a.return}if(he===null)throw Error(E(160));lp(s,i,r),he=null,Xe=!1;var l=r.alternate;l!==null&&(l.return=null),r.return=null}catch(c){se(r,t,c)}}if(t.subtreeFlags&12854)for(t=t.child;t!==null;)cp(t,e),t=t.sibling}function cp(e,t){var n=e.alternate,o=e.flags;switch(e.tag){case 0:case 11:case 14:case 15:if(Ke(t,e),nt(e),o&4){try{bo(3,e,e.return),ys(3,e)}catch(w){se(e,e.return,w)}try{bo(5,e,e.return)}catch(w){se(e,e.return,w)}}break;case 1:Ke(t,e),nt(e),o&512&&n!==null&&Ln(n,n.return);break;case 5:if(Ke(t,e),nt(e),o&512&&n!==null&&Ln(n,n.return),e.flags&32){var r=e.stateNode;try{Co(r,"")}catch(w){se(e,e.return,w)}}if(o&4&&(r=e.stateNode,r!=null)){var s=e.memoizedProps,i=n!==null?n.memoizedProps:s,a=e.type,l=e.updateQueue;if(e.updateQueue=null,l!==null)try{a==="input"&&s.type==="radio"&&s.name!=null&&Ru(r,s),$i(a,i);var c=$i(a,s);for(i=0;i<l.length;i+=2){var u=l[i],d=l[i+1];u==="style"?ju(r,d):u==="dangerouslySetInnerHTML"?Du(r,d):u==="children"?Co(r,d):ba(r,u,d,c)}switch(a){case"input":vi(r,s);break;case"textarea":zu(r,s);break;case"select":var p=r._wrapperState.wasMultiple;r._wrapperState.wasMultiple=!!s.multiple;var g=s.value;g!=null?kn(r,!!s.multiple,g,!1):p!==!!s.multiple&&(s.defaultValue!=null?kn(r,!!s.multiple,s.defaultValue,!0):kn(r,!!s.multiple,s.multiple?[]:"",!1))}r[Do]=s}catch(w){se(e,e.return,w)}}break;case 6:if(Ke(t,e),nt(e),o&4){if(e.stateNode===null)throw Error(E(162));r=e.stateNode,s=e.memoizedProps;try{r.nodeValue=s}catch(w){se(e,e.return,w)}}break;case 3:if(Ke(t,e),nt(e),o&4&&n!==null&&n.memoizedState.isDehydrated)try{_o(t.containerInfo)}catch(w){se(e,e.return,w)}break;case 4:Ke(t,e),nt(e);break;case 13:Ke(t,e),nt(e),r=e.child,r.flags&8192&&(s=r.memoizedState!==null,r.stateNode.isHidden=s,!s||r.alternate!==null&&r.alternate.memoizedState!==null||(el=ie())),o&4&&xc(e);break;case 22:if(u=n!==null&&n.memoizedState!==null,e.mode&1?(Pe=(c=Pe)||u,Ke(t,e),Pe=c):Ke(t,e),nt(e),o&8192){if(c=e.memoizedState!==null,(e.stateNode.isHidden=c)&&!u&&e.mode&1)for(D=e,u=e.child;u!==null;){for(d=D=u;D!==null;){switch(p=D,g=p.child,p.tag){case 0:case 11:case 14:case 15:bo(4,p,p.return);break;case 1:Ln(p,p.return);var v=p.stateNode;if(typeof v.componentWillUnmount=="function"){o=p,n=p.return;try{t=o,v.props=t.memoizedProps,v.state=t.memoizedState,v.componentWillUnmount()}catch(w){se(o,n,w)}}break;case 5:Ln(p,p.return);break;case 22:if(p.memoizedState!==null){Pc(d);continue}}g!==null?(g.return=p,D=g):Pc(d)}u=u.sibling}e:for(u=null,d=e;;){if(d.tag===5){if(u===null){u=d;try{r=d.stateNode,c?(s=r.style,typeof s.setProperty=="function"?s.setProperty("display","none","important"):s.display="none"):(a=d.stateNode,l=d.memoizedProps.style,i=l!=null&&l.hasOwnProperty("display")?l.display:null,a.style.display=Mu("display",i))}catch(w){se(e,e.return,w)}}}else if(d.tag===6){if(u===null)try{d.stateNode.nodeValue=c?"":d.memoizedProps}catch(w){se(e,e.return,w)}}else if((d.tag!==22&&d.tag!==23||d.memoizedState===null||d===e)&&d.child!==null){d.child.return=d,d=d.child;continue}if(d===e)break e;for(;d.sibling===null;){if(d.return===null||d.return===e)break e;u===d&&(u=null),d=d.return}u===d&&(u=null),d.sibling.return=d.return,d=d.sibling}}break;case 19:Ke(t,e),nt(e),o&4&&xc(e);break;case 21:break;default:Ke(t,e),nt(e)}}function nt(e){var t=e.flags;if(t&2){try{e:{for(var n=e.return;n!==null;){if(ap(n)){var o=n;break e}n=n.return}throw Error(E(160))}switch(o.tag){case 5:var r=o.stateNode;o.flags&32&&(Co(r,""),o.flags&=-33);var s=wc(e);Ji(e,s,r);break;case 3:case 4:var i=o.stateNode.containerInfo,a=wc(e);Zi(e,a,i);break;default:throw Error(E(161))}}catch(l){se(e,e.return,l)}e.flags&=-3}t&4096&&(e.flags&=-4097)}function Pf(e,t,n){D=e,up(e)}function up(e,t,n){for(var o=(e.mode&1)!==0;D!==null;){var r=D,s=r.child;if(r.tag===22&&o){var i=r.memoizedState!==null||pr;if(!i){var a=r.alternate,l=a!==null&&a.memoizedState!==null||Pe;a=pr;var c=Pe;if(pr=i,(Pe=l)&&!c)for(D=r;D!==null;)i=D,l=i.child,i.tag===22&&i.memoizedState!==null?$c(r):l!==null?(l.return=i,D=l):$c(r);for(;s!==null;)D=s,up(s),s=s.sibling;D=r,pr=a,Pe=c}bc(e)}else r.subtreeFlags&8772&&s!==null?(s.return=r,D=s):bc(e)}}function bc(e){for(;D!==null;){var t=D;if(t.flags&8772){var n=t.alternate;try{if(t.flags&8772)switch(t.tag){case 0:case 11:case 15:Pe||ys(5,t);break;case 1:var o=t.stateNode;if(t.flags&4&&!Pe)if(n===null)o.componentDidMount();else{var r=t.elementType===t.type?n.memoizedProps:Ye(t.type,n.memoizedProps);o.componentDidUpdate(r,n.memoizedState,o.__reactInternalSnapshotBeforeUpdate)}var s=t.updateQueue;s!==null&&sc(t,s,o);break;case 3:var i=t.updateQueue;if(i!==null){if(n=null,t.child!==null)switch(t.child.tag){case 5:n=t.child.stateNode;break;case 1:n=t.child.stateNode}sc(t,i,n)}break;case 5:var a=t.stateNode;if(n===null&&t.flags&4){n=a;var l=t.memoizedProps;switch(t.type){case"button":case"input":case"select":case"textarea":l.autoFocus&&n.focus();break;case"img":l.src&&(n.src=l.src)}}break;case 6:break;case 4:break;case 12:break;case 13:if(t.memoizedState===null){var c=t.alternate;if(c!==null){var u=c.memoizedState;if(u!==null){var d=u.dehydrated;d!==null&&_o(d)}}}break;case 19:case 17:case 21:case 22:case 23:case 25:break;default:throw Error(E(163))}Pe||t.flags&512&&Xi(t)}catch(p){se(t,t.return,p)}}if(t===e){D=null;break}if(n=t.sibling,n!==null){n.return=t.return,D=n;break}D=t.return}}function Pc(e){for(;D!==null;){var t=D;if(t===e){D=null;break}var n=t.sibling;if(n!==null){n.return=t.return,D=n;break}D=t.return}}function $c(e){for(;D!==null;){var t=D;try{switch(t.tag){case 0:case 11:case 15:var n=t.return;try{ys(4,t)}catch(l){se(t,n,l)}break;case 1:var o=t.stateNode;if(typeof o.componentDidMount=="function"){var r=t.return;try{o.componentDidMount()}catch(l){se(t,r,l)}}var s=t.return;try{Xi(t)}catch(l){se(t,s,l)}break;case 5:var i=t.return;try{Xi(t)}catch(l){se(t,i,l)}}}catch(l){se(t,t.return,l)}if(t===e){D=null;break}var a=t.sibling;if(a!==null){a.return=t.return,D=a;break}D=t.return}}var $f=Math.ceil,Jr=vt.ReactCurrentDispatcher,Za=vt.ReactCurrentOwner,Ge=vt.ReactCurrentBatchConfig,F=0,fe=null,ce=null,ye=0,je=0,In=Ft(0),de=0,Bo=null,sn=0,vs=0,Ja=0,Po=null,Ee=null,el=0,Fn=1/0,lt=null,es=!1,ea=null,Mt=null,mr=!1,It=null,ts=0,$o=0,ta=null,Rr=-1,zr=0;function Le(){return F&6?ie():Rr!==-1?Rr:Rr=ie()}function jt(e){return e.mode&1?F&2&&ye!==0?ye&-ye:sf.transition!==null?(zr===0&&(zr=Qu()),zr):(e=Q,e!==0||(e=window.event,e=e===void 0?16:td(e.type)),e):1}function et(e,t,n,o){if(50<$o)throw $o=0,ta=null,Error(E(185));Ho(e,n,o),(!(F&2)||e!==fe)&&(e===fe&&(!(F&2)&&(vs|=n),de===4&&Ct(e,ye)),De(e,o),n===1&&F===0&&!(t.mode&1)&&(Fn=ie()+500,gs&&Vt()))}function De(e,t){var n=e.callbackNode;sg(e,t);var o=Nr(e,e===fe?ye:0);if(o===0)n!==null&&zl(n),e.callbackNode=null,e.callbackPriority=0;else if(t=o&-o,e.callbackPriority!==t){if(n!=null&&zl(n),t===1)e.tag===0?rf(Sc.bind(null,e)):xd(Sc.bind(null,e)),ef(function(){!(F&6)&&Vt()}),n=null;else{switch(Ku(o)){case 1:n=La;break;case 4:n=Gu;break;case 16:n=Tr;break;case 536870912:n=qu;break;default:n=Tr}n=vp(n,dp.bind(null,e))}e.callbackPriority=t,e.callbackNode=n}}function dp(e,t){if(Rr=-1,zr=0,F&6)throw Error(E(327));var n=e.callbackNode;if(On()&&e.callbackNode!==n)return null;var o=Nr(e,e===fe?ye:0);if(o===0)return null;if(o&30||o&e.expiredLanes||t)t=ns(e,o);else{t=o;var r=F;F|=2;var s=mp();(fe!==e||ye!==t)&&(lt=null,Fn=ie()+500,en(e,t));do try{Lf();break}catch(a){pp(e,a)}while(!0);Aa(),Jr.current=s,F=r,ce!==null?t=0:(fe=null,ye=0,t=de)}if(t!==0){if(t===2&&(r=ki(e),r!==0&&(o=r,t=na(e,r))),t===1)throw n=Bo,en(e,0),Ct(e,o),De(e,ie()),n;if(t===6)Ct(e,o);else{if(r=e.current.alternate,!(o&30)&&!Sf(r)&&(t=ns(e,o),t===2&&(s=ki(e),s!==0&&(o=s,t=na(e,s))),t===1))throw n=Bo,en(e,0),Ct(e,o),De(e,ie()),n;switch(e.finishedWork=r,e.finishedLanes=o,t){case 0:case 1:throw Error(E(345));case 2:qt(e,Ee,lt);break;case 3:if(Ct(e,o),(o&130023424)===o&&(t=el+500-ie(),10<t)){if(Nr(e,0)!==0)break;if(r=e.suspendedLanes,(r&o)!==o){Le(),e.pingedLanes|=e.suspendedLanes&r;break}e.timeoutHandle=ji(qt.bind(null,e,Ee,lt),t);break}qt(e,Ee,lt);break;case 4:if(Ct(e,o),(o&4194240)===o)break;for(t=e.eventTimes,r=-1;0<o;){var i=31-Je(o);s=1<<i,i=t[i],i>r&&(r=i),o&=~s}if(o=r,o=ie()-o,o=(120>o?120:480>o?480:1080>o?1080:1920>o?1920:3e3>o?3e3:4320>o?4320:1960*$f(o/1960))-o,10<o){e.timeoutHandle=ji(qt.bind(null,e,Ee,lt),o);break}qt(e,Ee,lt);break;case 5:qt(e,Ee,lt);break;default:throw Error(E(329))}}}return De(e,ie()),e.callbackNode===n?dp.bind(null,e):null}function na(e,t){var n=Po;return e.current.memoizedState.isDehydrated&&(en(e,t).flags|=256),e=ns(e,t),e!==2&&(t=Ee,Ee=n,t!==null&&oa(t)),e}function oa(e){Ee===null?Ee=e:Ee.push.apply(Ee,e)}function Sf(e){for(var t=e;;){if(t.flags&16384){var n=t.updateQueue;if(n!==null&&(n=n.stores,n!==null))for(var o=0;o<n.length;o++){var r=n[o],s=r.getSnapshot;r=r.value;try{if(!tt(s(),r))return!1}catch{return!1}}}if(n=t.child,t.subtreeFlags&16384&&n!==null)n.return=t,t=n;else{if(t===e)break;for(;t.sibling===null;){if(t.return===null||t.return===e)return!0;t=t.return}t.sibling.return=t.return,t=t.sibling}}return!0}function Ct(e,t){for(t&=~Ja,t&=~vs,e.suspendedLanes|=t,e.pingedLanes&=~t,e=e.expirationTimes;0<t;){var n=31-Je(t),o=1<<n;e[n]=-1,t&=~o}}function Sc(e){if(F&6)throw Error(E(327));On();var t=Nr(e,0);if(!(t&1))return De(e,ie()),null;var n=ns(e,t);if(e.tag!==0&&n===2){var o=ki(e);o!==0&&(t=o,n=na(e,o))}if(n===1)throw n=Bo,en(e,0),Ct(e,t),De(e,ie()),n;if(n===6)throw Error(E(345));return e.finishedWork=e.current.alternate,e.finishedLanes=t,qt(e,Ee,lt),De(e,ie()),null}function tl(e,t){var n=F;F|=1;try{return e(t)}finally{F=n,F===0&&(Fn=ie()+500,gs&&Vt())}}function an(e){It!==null&&It.tag===0&&!(F&6)&&On();var t=F;F|=1;var n=Ge.transition,o=Q;try{if(Ge.transition=null,Q=1,e)return e()}finally{Q=o,Ge.transition=n,F=t,!(F&6)&&Vt()}}function nl(){je=In.current,Z(In)}function en(e,t){e.finishedWork=null,e.finishedLanes=0;var n=e.timeoutHandle;if(n!==-1&&(e.timeoutHandle=-1,Jg(n)),ce!==null)for(n=ce.return;n!==null;){var o=n;switch(ja(o),o.tag){case 1:o=o.type.childContextTypes,o!=null&&Vr();break;case 3:Bn(),Z(ze),Z($e),Ha();break;case 5:Wa(o);break;case 4:Bn();break;case 13:Z(te);break;case 19:Z(te);break;case 10:Ba(o.type._context);break;case 22:case 23:nl()}n=n.return}if(fe=e,ce=e=Tt(e.current,null),ye=je=t,de=0,Bo=null,Ja=vs=sn=0,Ee=Po=null,Xt!==null){for(t=0;t<Xt.length;t++)if(n=Xt[t],o=n.interleaved,o!==null){n.interleaved=null;var r=o.next,s=n.pending;if(s!==null){var i=s.next;s.next=r,o.next=i}n.pending=o}Xt=null}return e}function pp(e,t){do{var n=ce;try{if(Aa(),kr.current=Zr,Xr){for(var o=ne.memoizedState;o!==null;){var r=o.queue;r!==null&&(r.pending=null),o=o.next}Xr=!1}if(rn=0,ge=ue=ne=null,xo=!1,To=0,Za.current=null,n===null||n.return===null){de=1,Bo=t,ce=null;break}e:{var s=e,i=n.return,a=n,l=t;if(t=ye,a.flags|=32768,l!==null&&typeof l=="object"&&typeof l.then=="function"){var c=l,u=a,d=u.tag;if(!(u.mode&1)&&(d===0||d===11||d===15)){var p=u.alternate;p?(u.updateQueue=p.updateQueue,u.memoizedState=p.memoizedState,u.lanes=p.lanes):(u.updateQueue=null,u.memoizedState=null)}var g=dc(i);if(g!==null){g.flags&=-257,pc(g,i,a,s,t),g.mode&1&&uc(s,c,t),t=g,l=c;var v=t.updateQueue;if(v===null){var w=new Set;w.add(l),t.updateQueue=w}else v.add(l);break e}else{if(!(t&1)){uc(s,c,t),ol();break e}l=Error(E(426))}}else if(J&&a.mode&1){var b=dc(i);if(b!==null){!(b.flags&65536)&&(b.flags|=256),pc(b,i,a,s,t),Ta(Un(l,a));break e}}s=l=Un(l,a),de!==4&&(de=2),Po===null?Po=[s]:Po.push(s),s=i;do{switch(s.tag){case 3:s.flags|=65536,t&=-t,s.lanes|=t;var y=Kd(s,l,t);rc(s,y);break e;case 1:a=l;var f=s.type,h=s.stateNode;if(!(s.flags&128)&&(typeof f.getDerivedStateFromError=="function"||h!==null&&typeof h.componentDidCatch=="function"&&(Mt===null||!Mt.has(h)))){s.flags|=65536,t&=-t,s.lanes|=t;var P=Yd(s,a,t);rc(s,P);break e}}s=s.return}while(s!==null)}fp(n)}catch($){t=$,ce===n&&n!==null&&(ce=n=n.return);continue}break}while(!0)}function mp(){var e=Jr.current;return Jr.current=Zr,e===null?Zr:e}function ol(){(de===0||de===3||de===2)&&(de=4),fe===null||!(sn&268435455)&&!(vs&268435455)||Ct(fe,ye)}function ns(e,t){var n=F;F|=2;var o=mp();(fe!==e||ye!==t)&&(lt=null,en(e,t));do try{Cf();break}catch(r){pp(e,r)}while(!0);if(Aa(),F=n,Jr.current=o,ce!==null)throw Error(E(261));return fe=null,ye=0,de}function Cf(){for(;ce!==null;)gp(ce)}function Lf(){for(;ce!==null&&!Ym();)gp(ce)}function gp(e){var t=yp(e.alternate,e,je);e.memoizedProps=e.pendingProps,t===null?fp(e):ce=t,Za.current=null}function fp(e){var t=e;do{var n=t.alternate;if(e=t.return,t.flags&32768){if(n=wf(n,t),n!==null){n.flags&=32767,ce=n;return}if(e!==null)e.flags|=32768,e.subtreeFlags=0,e.deletions=null;else{de=6,ce=null;return}}else if(n=vf(n,t,je),n!==null){ce=n;return}if(t=t.sibling,t!==null){ce=t;return}ce=t=e}while(t!==null);de===0&&(de=5)}function qt(e,t,n){var o=Q,r=Ge.transition;try{Ge.transition=null,Q=1,If(e,t,n,o)}finally{Ge.transition=r,Q=o}return null}function If(e,t,n,o){do On();while(It!==null);if(F&6)throw Error(E(327));n=e.finishedWork;var r=e.finishedLanes;if(n===null)return null;if(e.finishedWork=null,e.finishedLanes=0,n===e.current)throw Error(E(177));e.callbackNode=null,e.callbackPriority=0;var s=n.lanes|n.childLanes;if(ig(e,s),e===fe&&(ce=fe=null,ye=0),!(n.subtreeFlags&2064)&&!(n.flags&2064)||mr||(mr=!0,vp(Tr,function(){return On(),null})),s=(n.flags&15990)!==0,n.subtreeFlags&15990||s){s=Ge.transition,Ge.transition=null;var i=Q;Q=1;var a=F;F|=4,Za.current=null,bf(e,n),cp(n,e),Gg(Di),Ar=!!Oi,Di=Oi=null,e.current=n,Pf(n),Xm(),F=a,Q=i,Ge.transition=s}else e.current=n;if(mr&&(mr=!1,It=e,ts=r),s=e.pendingLanes,s===0&&(Mt=null),eg(n.stateNode),De(e,ie()),t!==null)for(o=e.onRecoverableError,n=0;n<t.length;n++)r=t[n],o(r.value,{componentStack:r.stack,digest:r.digest});if(es)throw es=!1,e=ea,ea=null,e;return ts&1&&e.tag!==0&&On(),s=e.pendingLanes,s&1?e===ta?$o++:($o=0,ta=e):$o=0,Vt(),null}function On(){if(It!==null){var e=Ku(ts),t=Ge.transition,n=Q;try{if(Ge.transition=null,Q=16>e?16:e,It===null)var o=!1;else{if(e=It,It=null,ts=0,F&6)throw Error(E(331));var r=F;for(F|=4,D=e.current;D!==null;){var s=D,i=s.child;if(D.flags&16){var a=s.deletions;if(a!==null){for(var l=0;l<a.length;l++){var c=a[l];for(D=c;D!==null;){var u=D;switch(u.tag){case 0:case 11:case 15:bo(8,u,s)}var d=u.child;if(d!==null)d.return=u,D=d;else for(;D!==null;){u=D;var p=u.sibling,g=u.return;if(ip(u),u===c){D=null;break}if(p!==null){p.return=g,D=p;break}D=g}}}var v=s.alternate;if(v!==null){var w=v.child;if(w!==null){v.child=null;do{var b=w.sibling;w.sibling=null,w=b}while(w!==null)}}D=s}}if(s.subtreeFlags&2064&&i!==null)i.return=s,D=i;else e:for(;D!==null;){if(s=D,s.flags&2048)switch(s.tag){case 0:case 11:case 15:bo(9,s,s.return)}var y=s.sibling;if(y!==null){y.return=s.return,D=y;break e}D=s.return}}var f=e.current;for(D=f;D!==null;){i=D;var h=i.child;if(i.subtreeFlags&2064&&h!==null)h.return=i,D=h;else e:for(i=f;D!==null;){if(a=D,a.flags&2048)try{switch(a.tag){case 0:case 11:case 15:ys(9,a)}}catch($){se(a,a.return,$)}if(a===i){D=null;break e}var P=a.sibling;if(P!==null){P.return=a.return,D=P;break e}D=a.return}}if(F=r,Vt(),it&&typeof it.onPostCommitFiberRoot=="function")try{it.onPostCommitFiberRoot(cs,e)}catch{}o=!0}return o}finally{Q=n,Ge.transition=t}}return!1}function Cc(e,t,n){t=Un(n,t),t=Kd(e,t,1),e=Dt(e,t,1),t=Le(),e!==null&&(Ho(e,1,t),De(e,t))}function se(e,t,n){if(e.tag===3)Cc(e,e,n);else for(;t!==null;){if(t.tag===3){Cc(t,e,n);break}else if(t.tag===1){var o=t.stateNode;if(typeof t.type.getDerivedStateFromError=="function"||typeof o.componentDidCatch=="function"&&(Mt===null||!Mt.has(o))){e=Un(n,e),e=Yd(t,e,1),t=Dt(t,e,1),e=Le(),t!==null&&(Ho(t,1,e),De(t,e));break}}t=t.return}}function kf(e,t,n){var o=e.pingCache;o!==null&&o.delete(t),t=Le(),e.pingedLanes|=e.suspendedLanes&n,fe===e&&(ye&n)===n&&(de===4||de===3&&(ye&130023424)===ye&&500>ie()-el?en(e,0):Ja|=n),De(e,t)}function hp(e,t){t===0&&(e.mode&1?(t=or,or<<=1,!(or&130023424)&&(or=4194304)):t=1);var n=Le();e=ht(e,t),e!==null&&(Ho(e,t,n),De(e,n))}function _f(e){var t=e.memoizedState,n=0;t!==null&&(n=t.retryLane),hp(e,n)}function Ef(e,t){var n=0;switch(e.tag){case 13:var o=e.stateNode,r=e.memoizedState;r!==null&&(n=r.retryLane);break;case 19:o=e.stateNode;break;default:throw Error(E(314))}o!==null&&o.delete(t),hp(e,n)}var yp;yp=function(e,t,n){if(e!==null)if(e.memoizedProps!==t.pendingProps||ze.current)Re=!0;else{if(!(e.lanes&n)&&!(t.flags&128))return Re=!1,yf(e,t,n);Re=!!(e.flags&131072)}else Re=!1,J&&t.flags&1048576&&bd(t,Gr,t.index);switch(t.lanes=0,t.tag){case 2:var o=t.type;Er(e,t),e=t.pendingProps;var r=Tn(t,$e.current);zn(t,n),r=qa(null,t,o,e,r,n);var s=Qa();return t.flags|=1,typeof r=="object"&&r!==null&&typeof r.render=="function"&&r.$$typeof===void 0?(t.tag=1,t.memoizedState=null,t.updateQueue=null,Oe(o)?(s=!0,Wr(t)):s=!1,t.memoizedState=r.state!==null&&r.state!==void 0?r.state:null,Fa(t),r.updater=hs,t.stateNode=r,r._reactInternals=t,Vi(t,o,e,n),t=Gi(null,t,o,!0,s,n)):(t.tag=0,J&&s&&Ma(t),Ce(null,t,r,n),t=t.child),t;case 16:o=t.elementType;e:{switch(Er(e,t),e=t.pendingProps,r=o._init,o=r(o._payload),t.type=o,r=t.tag=zf(o),e=Ye(o,e),r){case 0:t=Hi(null,t,o,e,n);break e;case 1:t=fc(null,t,o,e,n);break e;case 11:t=mc(null,t,o,e,n);break e;case 14:t=gc(null,t,o,Ye(o.type,e),n);break e}throw Error(E(306,o,""))}return t;case 0:return o=t.type,r=t.pendingProps,r=t.elementType===o?r:Ye(o,r),Hi(e,t,o,r,n);case 1:return o=t.type,r=t.pendingProps,r=t.elementType===o?r:Ye(o,r),fc(e,t,o,r,n);case 3:e:{if(ep(t),e===null)throw Error(E(387));o=t.pendingProps,s=t.memoizedState,r=s.element,Id(e,t),Kr(t,o,null,n);var i=t.memoizedState;if(o=i.element,s.isDehydrated)if(s={element:o,isDehydrated:!1,cache:i.cache,pendingSuspenseBoundaries:i.pendingSuspenseBoundaries,transitions:i.transitions},t.updateQueue.baseState=s,t.memoizedState=s,t.flags&256){r=Un(Error(E(423)),t),t=hc(e,t,o,n,r);break e}else if(o!==r){r=Un(Error(E(424)),t),t=hc(e,t,o,n,r);break e}else for(Te=Ot(t.stateNode.containerInfo.firstChild),Ne=t,J=!0,Ze=null,n=Cd(t,null,o,n),t.child=n;n;)n.flags=n.flags&-3|4096,n=n.sibling;else{if(Nn(),o===r){t=yt(e,t,n);break e}Ce(e,t,o,n)}t=t.child}return t;case 5:return kd(t),e===null&&Bi(t),o=t.type,r=t.pendingProps,s=e!==null?e.memoizedProps:null,i=r.children,Mi(o,r)?i=null:s!==null&&Mi(o,s)&&(t.flags|=32),Jd(e,t),Ce(e,t,i,n),t.child;case 6:return e===null&&Bi(t),null;case 13:return tp(e,t,n);case 4:return Va(t,t.stateNode.containerInfo),o=t.pendingProps,e===null?t.child=An(t,null,o,n):Ce(e,t,o,n),t.child;case 11:return o=t.type,r=t.pendingProps,r=t.elementType===o?r:Ye(o,r),mc(e,t,o,r,n);case 7:return Ce(e,t,t.pendingProps,n),t.child;case 8:return Ce(e,t,t.pendingProps.children,n),t.child;case 12:return Ce(e,t,t.pendingProps.children,n),t.child;case 10:e:{if(o=t.type._context,r=t.pendingProps,s=t.memoizedProps,i=r.value,Y(qr,o._currentValue),o._currentValue=i,s!==null)if(tt(s.value,i)){if(s.children===r.children&&!ze.current){t=yt(e,t,n);break e}}else for(s=t.child,s!==null&&(s.return=t);s!==null;){var a=s.dependencies;if(a!==null){i=s.child;for(var l=a.firstContext;l!==null;){if(l.context===o){if(s.tag===1){l=pt(-1,n&-n),l.tag=2;var c=s.updateQueue;if(c!==null){c=c.shared;var u=c.pending;u===null?l.next=l:(l.next=u.next,u.next=l),c.pending=l}}s.lanes|=n,l=s.alternate,l!==null&&(l.lanes|=n),Ui(s.return,n,t),a.lanes|=n;break}l=l.next}}else if(s.tag===10)i=s.type===t.type?null:s.child;else if(s.tag===18){if(i=s.return,i===null)throw Error(E(341));i.lanes|=n,a=i.alternate,a!==null&&(a.lanes|=n),Ui(i,n,t),i=s.sibling}else i=s.child;if(i!==null)i.return=s;else for(i=s;i!==null;){if(i===t){i=null;break}if(s=i.sibling,s!==null){s.return=i.return,i=s;break}i=i.return}s=i}Ce(e,t,r.children,n),t=t.child}return t;case 9:return r=t.type,o=t.pendingProps.children,zn(t,n),r=qe(r),o=o(r),t.flags|=1,Ce(e,t,o,n),t.child;case 14:return o=t.type,r=Ye(o,t.pendingProps),r=Ye(o.type,r),gc(e,t,o,r,n);case 15:return Xd(e,t,t.type,t.pendingProps,n);case 17:return o=t.type,r=t.pendingProps,r=t.elementType===o?r:Ye(o,r),Er(e,t),t.tag=1,Oe(o)?(e=!0,Wr(t)):e=!1,zn(t,n),Qd(t,o,r),Vi(t,o,r,n),Gi(null,t,o,!0,e,n);case 19:return np(e,t,n);case 22:return Zd(e,t,n)}throw Error(E(156,t.tag))};function vp(e,t){return Hu(e,t)}function Rf(e,t,n,o){this.tag=e,this.key=n,this.sibling=this.child=this.return=this.stateNode=this.type=this.elementType=null,this.index=0,this.ref=null,this.pendingProps=t,this.dependencies=this.memoizedState=this.updateQueue=this.memoizedProps=null,this.mode=o,this.subtreeFlags=this.flags=0,this.deletions=null,this.childLanes=this.lanes=0,this.alternate=null}function He(e,t,n,o){return new Rf(e,t,n,o)}function rl(e){return e=e.prototype,!(!e||!e.isReactComponent)}function zf(e){if(typeof e=="function")return rl(e)?1:0;if(e!=null){if(e=e.$$typeof,e===$a)return 11;if(e===Sa)return 14}return 2}function Tt(e,t){var n=e.alternate;return n===null?(n=He(e.tag,t,e.key,e.mode),n.elementType=e.elementType,n.type=e.type,n.stateNode=e.stateNode,n.alternate=e,e.alternate=n):(n.pendingProps=t,n.type=e.type,n.flags=0,n.subtreeFlags=0,n.deletions=null),n.flags=e.flags&14680064,n.childLanes=e.childLanes,n.lanes=e.lanes,n.child=e.child,n.memoizedProps=e.memoizedProps,n.memoizedState=e.memoizedState,n.updateQueue=e.updateQueue,t=e.dependencies,n.dependencies=t===null?null:{lanes:t.lanes,firstContext:t.firstContext},n.sibling=e.sibling,n.index=e.index,n.ref=e.ref,n}function Or(e,t,n,o,r,s){var i=2;if(o=e,typeof e=="function")rl(e)&&(i=1);else if(typeof e=="string")i=5;else e:switch(e){case yn:return tn(n.children,r,s,t);case Pa:i=8,r|=8;break;case mi:return e=He(12,n,t,r|2),e.elementType=mi,e.lanes=s,e;case gi:return e=He(13,n,t,r),e.elementType=gi,e.lanes=s,e;case fi:return e=He(19,n,t,r),e.elementType=fi,e.lanes=s,e;case ku:return ws(n,r,s,t);default:if(typeof e=="object"&&e!==null)switch(e.$$typeof){case Lu:i=10;break e;case Iu:i=9;break e;case $a:i=11;break e;case Sa:i=14;break e;case Pt:i=16,o=null;break e}throw Error(E(130,e==null?e:typeof e,""))}return t=He(i,n,t,r),t.elementType=e,t.type=o,t.lanes=s,t}function tn(e,t,n,o){return e=He(7,e,o,t),e.lanes=n,e}function ws(e,t,n,o){return e=He(22,e,o,t),e.elementType=ku,e.lanes=n,e.stateNode={isHidden:!1},e}function Xs(e,t,n){return e=He(6,e,null,t),e.lanes=n,e}function Zs(e,t,n){return t=He(4,e.children!==null?e.children:[],e.key,t),t.lanes=n,t.stateNode={containerInfo:e.containerInfo,pendingChildren:null,implementation:e.implementation},t}function Of(e,t,n,o,r){this.tag=t,this.containerInfo=e,this.finishedWork=this.pingCache=this.current=this.pendingChildren=null,this.timeoutHandle=-1,this.callbackNode=this.pendingContext=this.context=null,this.callbackPriority=0,this.eventTimes=zs(0),this.expirationTimes=zs(-1),this.entangledLanes=this.finishedLanes=this.mutableReadLanes=this.expiredLanes=this.pingedLanes=this.suspendedLanes=this.pendingLanes=0,this.entanglements=zs(0),this.identifierPrefix=o,this.onRecoverableError=r,this.mutableSourceEagerHydrationData=null}function sl(e,t,n,o,r,s,i,a,l){return e=new Of(e,t,n,a,l),t===1?(t=1,s===!0&&(t|=8)):t=0,s=He(3,null,null,t),e.current=s,s.stateNode=e,s.memoizedState={element:o,isDehydrated:n,cache:null,transitions:null,pendingSuspenseBoundaries:null},Fa(s),e}function Df(e,t,n){var o=3<arguments.length&&arguments[3]!==void 0?arguments[3]:null;return{$$typeof:hn,key:o==null?null:""+o,children:e,containerInfo:t,implementation:n}}function wp(e){if(!e)return Bt;e=e._reactInternals;e:{if(un(e)!==e||e.tag!==1)throw Error(E(170));var t=e;do{switch(t.tag){case 3:t=t.stateNode.context;break e;case 1:if(Oe(t.type)){t=t.stateNode.__reactInternalMemoizedMergedChildContext;break e}}t=t.return}while(t!==null);throw Error(E(171))}if(e.tag===1){var n=e.type;if(Oe(n))return wd(e,n,t)}return t}function xp(e,t,n,o,r,s,i,a,l){return e=sl(n,o,!0,e,r,s,i,a,l),e.context=wp(null),n=e.current,o=Le(),r=jt(n),s=pt(o,r),s.callback=t??null,Dt(n,s,r),e.current.lanes=r,Ho(e,r,o),De(e,o),e}function xs(e,t,n,o){var r=t.current,s=Le(),i=jt(r);return n=wp(n),t.context===null?t.context=n:t.pendingContext=n,t=pt(s,i),t.payload={element:e},o=o===void 0?null:o,o!==null&&(t.callback=o),e=Dt(r,t,i),e!==null&&(et(e,r,i,s),Ir(e,r,i)),i}function os(e){if(e=e.current,!e.child)return null;switch(e.child.tag){case 5:return e.child.stateNode;default:return e.child.stateNode}}function Lc(e,t){if(e=e.memoizedState,e!==null&&e.dehydrated!==null){var n=e.retryLane;e.retryLane=n!==0&&n<t?n:t}}function il(e,t){Lc(e,t),(e=e.alternate)&&Lc(e,t)}function Mf(){return null}var bp=typeof reportError=="function"?reportError:function(e){console.error(e)};function al(e){this._internalRoot=e}bs.prototype.render=al.prototype.render=function(e){var t=this._internalRoot;if(t===null)throw Error(E(409));xs(e,t,null,null)};bs.prototype.unmount=al.prototype.unmount=function(){var e=this._internalRoot;if(e!==null){this._internalRoot=null;var t=e.containerInfo;an(function(){xs(null,e,null,null)}),t[ft]=null}};function bs(e){this._internalRoot=e}bs.prototype.unstable_scheduleHydration=function(e){if(e){var t=Zu();e={blockedOn:null,target:e,priority:t};for(var n=0;n<St.length&&t!==0&&t<St[n].priority;n++);St.splice(n,0,e),n===0&&ed(e)}};function ll(e){return!(!e||e.nodeType!==1&&e.nodeType!==9&&e.nodeType!==11)}function Ps(e){return!(!e||e.nodeType!==1&&e.nodeType!==9&&e.nodeType!==11&&(e.nodeType!==8||e.nodeValue!==" react-mount-point-unstable "))}function Ic(){}function jf(e,t,n,o,r){if(r){if(typeof o=="function"){var s=o;o=function(){var c=os(i);s.call(c)}}var i=xp(t,o,e,0,null,!1,!1,"",Ic);return e._reactRootContainer=i,e[ft]=i.current,zo(e.nodeType===8?e.parentNode:e),an(),i}for(;r=e.lastChild;)e.removeChild(r);if(typeof o=="function"){var a=o;o=function(){var c=os(l);a.call(c)}}var l=sl(e,0,!1,null,null,!1,!1,"",Ic);return e._reactRootContainer=l,e[ft]=l.current,zo(e.nodeType===8?e.parentNode:e),an(function(){xs(t,l,n,o)}),l}function $s(e,t,n,o,r){var s=n._reactRootContainer;if(s){var i=s;if(typeof r=="function"){var a=r;r=function(){var l=os(i);a.call(l)}}xs(t,i,e,r)}else i=jf(n,t,e,r,o);return os(i)}Yu=function(e){switch(e.tag){case 3:var t=e.stateNode;if(t.current.memoizedState.isDehydrated){var n=uo(t.pendingLanes);n!==0&&(Ia(t,n|1),De(t,ie()),!(F&6)&&(Fn=ie()+500,Vt()))}break;case 13:an(function(){var o=ht(e,1);if(o!==null){var r=Le();et(o,e,1,r)}}),il(e,1)}};ka=function(e){if(e.tag===13){var t=ht(e,134217728);if(t!==null){var n=Le();et(t,e,134217728,n)}il(e,134217728)}};Xu=function(e){if(e.tag===13){var t=jt(e),n=ht(e,t);if(n!==null){var o=Le();et(n,e,t,o)}il(e,t)}};Zu=function(){return Q};Ju=function(e,t){var n=Q;try{return Q=e,t()}finally{Q=n}};Ci=function(e,t,n){switch(t){case"input":if(vi(e,n),t=n.name,n.type==="radio"&&t!=null){for(n=e;n.parentNode;)n=n.parentNode;for(n=n.querySelectorAll("input[name="+JSON.stringify(""+t)+'][type="radio"]'),t=0;t<n.length;t++){var o=n[t];if(o!==e&&o.form===e.form){var r=ms(o);if(!r)throw Error(E(90));Eu(o),vi(o,r)}}}break;case"textarea":zu(e,n);break;case"select":t=n.value,t!=null&&kn(e,!!n.multiple,t,!1)}};Au=tl;Bu=an;var Tf={usingClientEntryPoint:!1,Events:[qo,bn,ms,Tu,Nu,tl]},ao={findFiberByHostInstance:Yt,bundleType:0,version:"18.3.1",rendererPackageName:"react-dom"},Nf={bundleType:ao.bundleType,version:ao.version,rendererPackageName:ao.rendererPackageName,rendererConfig:ao.rendererConfig,overrideHookState:null,overrideHookStateDeletePath:null,overrideHookStateRenamePath:null,overrideProps:null,overridePropsDeletePath:null,overridePropsRenamePath:null,setErrorHandler:null,setSuspenseHandler:null,scheduleUpdate:null,currentDispatcherRef:vt.ReactCurrentDispatcher,findHostInstanceByFiber:function(e){return e=Vu(e),e===null?null:e.stateNode},findFiberByHostInstance:ao.findFiberByHostInstance||Mf,findHostInstancesForRefresh:null,scheduleRefresh:null,scheduleRoot:null,setRefreshHandler:null,getCurrentFiber:null,reconcilerVersion:"18.3.1-next-f1338f8080-20240426"};if(typeof __REACT_DEVTOOLS_GLOBAL_HOOK__<"u"){var gr=__REACT_DEVTOOLS_GLOBAL_HOOK__;if(!gr.isDisabled&&gr.supportsFiber)try{cs=gr.inject(Nf),it=gr}catch{}}Be.__SECRET_INTERNALS_DO_NOT_USE_OR_YOU_WILL_BE_FIRED=Tf;Be.createPortal=function(e,t){var n=2<arguments.length&&arguments[2]!==void 0?arguments[2]:null;if(!ll(t))throw Error(E(200));return Df(e,t,null,n)};Be.createRoot=function(e,t){if(!ll(e))throw Error(E(299));var n=!1,o="",r=bp;return t!=null&&(t.unstable_strictMode===!0&&(n=!0),t.identifierPrefix!==void 0&&(o=t.identifierPrefix),t.onRecoverableError!==void 0&&(r=t.onRecoverableError)),t=sl(e,1,!1,null,null,n,!1,o,r),e[ft]=t.current,zo(e.nodeType===8?e.parentNode:e),new al(t)};Be.findDOMNode=function(e){if(e==null)return null;if(e.nodeType===1)return e;var t=e._reactInternals;if(t===void 0)throw typeof e.render=="function"?Error(E(188)):(e=Object.keys(e).join(","),Error(E(268,e)));return e=Vu(t),e=e===null?null:e.stateNode,e};Be.flushSync=function(e){return an(e)};Be.hydrate=function(e,t,n){if(!Ps(t))throw Error(E(200));return $s(null,e,t,!0,n)};Be.hydrateRoot=function(e,t,n){if(!ll(e))throw Error(E(405));var o=n!=null&&n.hydratedSources||null,r=!1,s="",i=bp;if(n!=null&&(n.unstable_strictMode===!0&&(r=!0),n.identifierPrefix!==void 0&&(s=n.identifierPrefix),n.onRecoverableError!==void 0&&(i=n.onRecoverableError)),t=xp(t,null,e,1,n??null,r,!1,s,i),e[ft]=t.current,zo(e),o)for(e=0;e<o.length;e++)n=o[e],r=n._getVersion,r=r(n._source),t.mutableSourceEagerHydrationData==null?t.mutableSourceEagerHydrationData=[n,r]:t.mutableSourceEagerHydrationData.push(n,r);return new bs(t)};Be.render=function(e,t,n){if(!Ps(t))throw Error(E(200));return $s(null,e,t,!1,n)};Be.unmountComponentAtNode=function(e){if(!Ps(e))throw Error(E(40));return e._reactRootContainer?(an(function(){$s(null,null,e,!1,function(){e._reactRootContainer=null,e[ft]=null})}),!0):!1};Be.unstable_batchedUpdates=tl;Be.unstable_renderSubtreeIntoContainer=function(e,t,n,o){if(!Ps(n))throw Error(E(200));if(e==null||e._reactInternals===void 0)throw Error(E(38));return $s(e,t,n,!1,o)};Be.version="18.3.1-next-f1338f8080-20240426";function Pp(){if(!(typeof __REACT_DEVTOOLS_GLOBAL_HOOK__>"u"||typeof __REACT_DEVTOOLS_GLOBAL_HOOK__.checkDCE!="function"))try{__REACT_DEVTOOLS_GLOBAL_HOOK__.checkDCE(Pp)}catch(e){console.error(e)}}Pp(),Pu.exports=Be;var Af=Pu.exports,$p,kc=Af;$p=kc.createRoot,kc.hydrateRoot;/**
 * @remix-run/router v1.23.4
 *
 * Copyright (c) Remix Software Inc.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE.md file in the root directory of this source tree.
 *
 * @license MIT
 */function Uo(){return Uo=Object.assign?Object.assign.bind():function(e){for(var t=1;t<arguments.length;t++){var n=arguments[t];for(var o in n)({}).hasOwnProperty.call(n,o)&&(e[o]=n[o])}return e},Uo.apply(null,arguments)}var kt;(function(e){e.Pop="POP",e.Push="PUSH",e.Replace="REPLACE"})(kt||(kt={}));const _c="popstate";function Bf(e){e===void 0&&(e={});function t(r,s){let{pathname:i="/",search:a="",hash:l=""}=dn(r.location.hash.substr(1));return!i.startsWith("/")&&!i.startsWith(".")&&(i="/"+i),ra("",{pathname:i,search:a,hash:l},s.state&&s.state.usr||null,s.state&&s.state.key||"default")}function n(r,s){let i=r.document.querySelector("base"),a="";if(i&&i.getAttribute("href")){let l=r.location.href,c=l.indexOf("#");a=c===-1?l:l.slice(0,c)}return a+"#"+(typeof s=="string"?s:rs(s))}function o(r,s){cl(r.pathname.charAt(0)==="/","relative pathnames are not supported in hash history.push("+JSON.stringify(s)+")")}return Ff(t,n,o,e)}function ae(e,t){if(e===!1||e===null||typeof e>"u")throw new Error(t)}function cl(e,t){if(!e){typeof console<"u"&&console.warn(t);try{throw new Error(t)}catch{}}}function Uf(){return Math.random().toString(36).substr(2,8)}function Ec(e,t){return{usr:e.state,key:e.key,idx:t}}function ra(e,t,n,o){return n===void 0&&(n=null),Uo({pathname:typeof e=="string"?e:e.pathname,search:"",hash:""},typeof t=="string"?dn(t):t,{state:n,key:t&&t.key||o||Uf()})}function rs(e){let{pathname:t="/",search:n="",hash:o=""}=e;return n&&n!=="?"&&(t+=n.charAt(0)==="?"?n:"?"+n),o&&o!=="#"&&(t+=o.charAt(0)==="#"?o:"#"+o),t}function dn(e){let t={};if(e){let n=e.indexOf("#");n>=0&&(t.hash=e.substr(n),e=e.substr(0,n));let o=e.indexOf("?");o>=0&&(t.search=e.substr(o),e=e.substr(0,o)),e&&(t.pathname=e)}return t}function Ff(e,t,n,o){o===void 0&&(o={});let{window:r=document.defaultView,v5Compat:s=!1}=o,i=r.history,a=kt.Pop,l=null,c=u();c==null&&(c=0,i.replaceState(Uo({},i.state,{idx:c}),""));function u(){return(i.state||{idx:null}).idx}function d(){a=kt.Pop;let b=u(),y=b==null?null:b-c;c=b,l&&l({action:a,location:w.location,delta:y})}function p(b,y){a=kt.Push;let f=ra(w.location,b,y);n&&n(f,b),c=u()+1;let h=Ec(f,c),P=w.createHref(f);try{i.pushState(h,"",P)}catch($){if($ instanceof DOMException&&$.name==="DataCloneError")throw $;r.location.assign(P)}s&&l&&l({action:a,location:w.location,delta:1})}function g(b,y){a=kt.Replace;let f=ra(w.location,b,y);n&&n(f,b),c=u();let h=Ec(f,c),P=w.createHref(f);i.replaceState(h,"",P),s&&l&&l({action:a,location:w.location,delta:0})}function v(b){let y=r.location.origin!=="null"?r.location.origin:r.location.href,f=typeof b=="string"?b:rs(b);return f=f.replace(/ $/,"%20"),ae(y,"No window.location.(origin|href) available to create URL for href: "+f),new URL(f,y)}let w={get action(){return a},get location(){return e(r,i)},listen(b){if(l)throw new Error("A history only accepts one active listener");return r.addEventListener(_c,d),l=b,()=>{r.removeEventListener(_c,d),l=null}},createHref(b){return t(r,b)},createURL:v,encodeLocation(b){let y=v(b);return{pathname:y.pathname,search:y.search,hash:y.hash}},push:p,replace:g,go(b){return i.go(b)}};return w}var Rc;(function(e){e.data="data",e.deferred="deferred",e.redirect="redirect",e.error="error"})(Rc||(Rc={}));function Vf(e,t,n){return n===void 0&&(n="/"),Wf(e,t,n)}function Wf(e,t,n,o){let r=typeof t=="string"?dn(t):t,s=ul(r.pathname||"/",n);if(s==null)return null;let i=Sp(e);Hf(i);let a=null,l=oh(s);for(let c=0;a==null&&c<i.length;++c)a=eh(i[c],l);return a}function Sp(e,t,n,o){t===void 0&&(t=[]),n===void 0&&(n=[]),o===void 0&&(o="");let r=(s,i,a)=>{let l={relativePath:a===void 0?s.path||"":a,caseSensitive:s.caseSensitive===!0,childrenIndex:i,route:s};l.relativePath.startsWith("/")&&(ae(l.relativePath.startsWith(o),'Absolute route path "'+l.relativePath+'" nested under path '+('"'+o+'" is not valid. An absolute child route path ')+"must start with the combined path of all its parent routes."),l.relativePath=l.relativePath.slice(o.length));let c=Nt([o,l.relativePath]),u=n.concat(l);s.children&&s.children.length>0&&(ae(s.index!==!0,"Index routes must not have child routes. Please remove "+('all child routes from route path "'+c+'".')),Sp(s.children,t,u,c)),!(s.path==null&&!s.index)&&t.push({path:c,score:Zf(c,s.index),routesMeta:u})};return e.forEach((s,i)=>{var a;if(s.path===""||!((a=s.path)!=null&&a.includes("?")))r(s,i);else for(let l of Cp(s.path))r(s,i,l)}),t}function Cp(e){let t=e.split("/");if(t.length===0)return[];let[n,...o]=t,r=n.endsWith("?"),s=n.replace(/\?$/,"");if(o.length===0)return r?[s,""]:[s];let i=Cp(o.join("/")),a=[];return a.push(...i.map(l=>l===""?s:[s,l].join("/"))),r&&a.push(...i),a.map(l=>e.startsWith("/")&&l===""?"/":l)}function Hf(e){e.sort((t,n)=>t.score!==n.score?n.score-t.score:Jf(t.routesMeta.map(o=>o.childrenIndex),n.routesMeta.map(o=>o.childrenIndex)))}const Gf=/^:[\w-]+$/,qf=3,Qf=2,Kf=1,Yf=10,Xf=-2,zc=e=>e==="*";function Zf(e,t){let n=e.split("/"),o=n.length;return n.some(zc)&&(o+=Xf),t&&(o+=Qf),n.filter(r=>!zc(r)).reduce((r,s)=>r+(Gf.test(s)?qf:s===""?Kf:Yf),o)}function Jf(e,t){return e.length===t.length&&e.slice(0,-1).every((o,r)=>o===t[r])?e[e.length-1]-t[t.length-1]:0}function eh(e,t,n){let{routesMeta:o}=e,r={},s="/",i=[];for(let a=0;a<o.length;++a){let l=o[a],c=a===o.length-1,u=s==="/"?t:t.slice(s.length)||"/",d=th({path:l.relativePath,caseSensitive:l.caseSensitive,end:c},u),p=l.route;if(!d)return null;Object.assign(r,d.params),i.push({params:r,pathname:Nt([s,d.pathname]),pathnameBase:ih(Nt([s,d.pathnameBase])),route:p}),d.pathnameBase!=="/"&&(s=Nt([s,d.pathnameBase]))}return i}function th(e,t){typeof e=="string"&&(e={path:e,caseSensitive:!1,end:!0});let[n,o]=nh(e.path,e.caseSensitive,e.end),r=t.match(n);if(!r)return null;let s=r[0],i=s.replace(/(.)\/+$/,"$1"),a=r.slice(1);return{params:o.reduce((c,u,d)=>{let{paramName:p,isOptional:g}=u;if(p==="*"){let w=a[d]||"";i=s.slice(0,s.length-w.length).replace(/(.)\/+$/,"$1")}const v=a[d];return g&&!v?c[p]=void 0:c[p]=(v||"").replace(/%2F/g,"/"),c},{}),pathname:s,pathnameBase:i,pattern:e}}function nh(e,t,n){t===void 0&&(t=!1),n===void 0&&(n=!0),cl(e==="*"||!e.endsWith("*")||e.endsWith("/*"),'Route path "'+e+'" will be treated as if it were '+('"'+e.replace(/\*$/,"/*")+'" because the `*` character must ')+"always follow a `/` in the pattern. To get rid of this warning, "+('please change the route path to "'+e.replace(/\*$/,"/*")+'".'));let o=[],r="^"+e.replace(/\/*\*?$/,"").replace(/^\/*/,"/").replace(/[\\.*+^${}|()[\]]/g,"\\$&").replace(/\/:([\w-]+)(\?)?/g,(i,a,l)=>(o.push({paramName:a,isOptional:l!=null}),l?"/?([^\\/]+)?":"/([^\\/]+)"));return e.endsWith("*")?(o.push({paramName:"*"}),r+=e==="*"||e==="/*"?"(.*)$":"(?:\\/(.+)|\\/*)$"):n?r+="\\/*$":e!==""&&e!=="/"&&(r+="(?:(?=\\/|$))"),[new RegExp(r,t?void 0:"i"),o]}function oh(e){try{return e.split("/").map(t=>decodeURIComponent(t).replace(/\//g,"%2F")).join("/")}catch(t){return cl(!1,'The URL path "'+e+'" could not be decoded because it is is a malformed URL segment. This is probably due to a bad percent '+("encoding ("+t+").")),e}}function ul(e,t){if(t==="/")return e;if(!e.toLowerCase().startsWith(t.toLowerCase()))return null;let n=t.endsWith("/")?t.length-1:t.length,o=e.charAt(n);return o&&o!=="/"?null:e.slice(n)||"/"}function rh(e,t){t===void 0&&(t="/");let{pathname:n,search:o="",hash:r=""}=typeof e=="string"?dn(e):e,s;return n?(n=Lp(n),n.startsWith("/")?s=Oc(n.substring(1),"/"):s=Oc(n,t)):s=t,{pathname:s,search:ah(o),hash:lh(r)}}function Oc(e,t){let n=t.replace(/\/+$/,"").split("/");return e.split("/").forEach(r=>{r===".."?n.length>1&&n.pop():r!=="."&&n.push(r)}),n.length>1?n.join("/"):"/"}function Js(e,t,n,o){return"Cannot include a '"+e+"' character in a manually specified "+("`to."+t+"` field ["+JSON.stringify(o)+"].  Please separate it out to the ")+("`to."+n+"` field. Alternatively you may provide the full path as ")+'a string in <Link to="..."> and the router will parse it for you.'}function sh(e){return e.filter((t,n)=>n===0||t.route.path&&t.route.path.length>0)}function dl(e,t){let n=sh(e);return t?n.map((o,r)=>r===n.length-1?o.pathname:o.pathnameBase):n.map(o=>o.pathnameBase)}function pl(e,t,n,o){o===void 0&&(o=!1);let r;typeof e=="string"?r=dn(e):(r=Uo({},e),ae(!r.pathname||!r.pathname.includes("?"),Js("?","pathname","search",r)),ae(!r.pathname||!r.pathname.includes("#"),Js("#","pathname","hash",r)),ae(!r.search||!r.search.includes("#"),Js("#","search","hash",r)));let s=e===""||r.pathname==="",i=s?"/":r.pathname,a;if(i==null)a=n;else{let d=t.length-1;if(!o&&i.startsWith("..")){let p=i.split("/");for(;p[0]==="..";)p.shift(),d-=1;r.pathname=p.join("/")}a=d>=0?t[d]:"/"}let l=rh(r,a),c=i&&i!=="/"&&i.endsWith("/"),u=(s||i===".")&&n.endsWith("/");return!l.pathname.endsWith("/")&&(c||u)&&(l.pathname+="/"),l}const Lp=e=>e.replace(/\/\/+/g,"/"),Nt=e=>Lp(e.join("/")),ih=e=>e.replace(/\/+$/,"").replace(/^\/*/,"/"),ah=e=>!e||e==="?"?"":e.startsWith("?")?e:"?"+e,lh=e=>!e||e==="#"?"":e.startsWith("#")?e:"#"+e;function ch(e){return e!=null&&typeof e.status=="number"&&typeof e.statusText=="string"&&typeof e.internal=="boolean"&&"data"in e}const Ip=["post","put","patch","delete"];new Set(Ip);const uh=["get",...Ip];new Set(uh);/**
 * React Router v6.30.6
 *
 * Copyright (c) Remix Software Inc.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE.md file in the root directory of this source tree.
 *
 * @license MIT
 */function Fo(){return Fo=Object.assign?Object.assign.bind():function(e){for(var t=1;t<arguments.length;t++){var n=arguments[t];for(var o in n)({}).hasOwnProperty.call(n,o)&&(e[o]=n[o])}return e},Fo.apply(null,arguments)}const ml=x.createContext(null),dh=x.createContext(null),Wt=x.createContext(null),Ss=x.createContext(null),wt=x.createContext({outlet:null,matches:[],isDataRoute:!1}),kp=x.createContext(null);function ph(e,t){let{relative:n}=t===void 0?{}:t;qn()||ae(!1);let{basename:o,navigator:r}=x.useContext(Wt),{hash:s,pathname:i,search:a}=Rp(e,{relative:n}),l=i;return o!=="/"&&(l=i==="/"?o:Nt([o,i])),r.createHref({pathname:l,search:a,hash:s})}function qn(){return x.useContext(Ss)!=null}function Qn(){return qn()||ae(!1),x.useContext(Ss).location}function _p(e){x.useContext(Wt).static||x.useLayoutEffect(e)}function Ep(){let{isDataRoute:e}=x.useContext(wt);return e?Lh():mh()}function mh(){qn()||ae(!1);let e=x.useContext(ml),{basename:t,future:n,navigator:o}=x.useContext(Wt),{matches:r}=x.useContext(wt),{pathname:s}=Qn(),i=JSON.stringify(dl(r,n.v7_relativeSplatPath)),a=x.useRef(!1);return _p(()=>{a.current=!0}),x.useCallback(function(c,u){if(u===void 0&&(u={}),!a.current)return;if(typeof c=="number"){o.go(c);return}let d=pl(c,JSON.parse(i),s,u.relative==="path");e==null&&t!=="/"&&(d.pathname=d.pathname==="/"?t:Nt([t,d.pathname])),(u.replace?o.replace:o.push)(d,u.state,u)},[t,o,i,s,e])}function gh(){let{matches:e}=x.useContext(wt),t=e[e.length-1];return t?t.params:{}}function Rp(e,t){let{relative:n}=t===void 0?{}:t,{future:o}=x.useContext(Wt),{matches:r}=x.useContext(wt),{pathname:s}=Qn(),i=JSON.stringify(dl(r,o.v7_relativeSplatPath));return x.useMemo(()=>pl(e,JSON.parse(i),s,n==="path"),[e,i,s,n])}function fh(e,t){return hh(e,t)}function hh(e,t,n,o){qn()||ae(!1);let{navigator:r}=x.useContext(Wt),{matches:s}=x.useContext(wt),i=s[s.length-1],a=i?i.params:{};i&&i.pathname;let l=i?i.pathnameBase:"/";i&&i.route;let c=Qn(),u;if(t){var d;let b=typeof t=="string"?dn(t):t;l==="/"||(d=b.pathname)!=null&&d.startsWith(l)||ae(!1),u=b}else u=c;let p=u.pathname||"/",g=p;if(l!=="/"){let b=l.replace(/^\//,"").split("/");g="/"+p.replace(/^\//,"").split("/").slice(b.length).join("/")}let v=Vf(e,{pathname:g}),w=bh(v&&v.map(b=>Object.assign({},b,{params:Object.assign({},a,b.params),pathname:Nt([l,r.encodeLocation?r.encodeLocation(b.pathname).pathname:b.pathname]),pathnameBase:b.pathnameBase==="/"?l:Nt([l,r.encodeLocation?r.encodeLocation(b.pathnameBase).pathname:b.pathnameBase])})),s,n,o);return t&&w?x.createElement(Ss.Provider,{value:{location:Fo({pathname:"/",search:"",hash:"",state:null,key:"default"},u),navigationType:kt.Pop}},w):w}function yh(){let e=Ch(),t=ch(e)?e.status+" "+e.statusText:e instanceof Error?e.message:JSON.stringify(e),n=e instanceof Error?e.stack:null,r={padding:"0.5rem",backgroundColor:"rgba(200,200,200, 0.5)"};return x.createElement(x.Fragment,null,x.createElement("h2",null,"Unexpected Application Error!"),x.createElement("h3",{style:{fontStyle:"italic"}},t),n?x.createElement("pre",{style:r},n):null,null)}const vh=x.createElement(yh,null);class wh extends x.Component{constructor(t){super(t),this.state={location:t.location,revalidation:t.revalidation,error:t.error}}static getDerivedStateFromError(t){return{error:t}}static getDerivedStateFromProps(t,n){return n.location!==t.location||n.revalidation!=="idle"&&t.revalidation==="idle"?{error:t.error,location:t.location,revalidation:t.revalidation}:{error:t.error!==void 0?t.error:n.error,location:n.location,revalidation:t.revalidation||n.revalidation}}componentDidCatch(t,n){console.error("React Router caught the following error during render",t,n)}render(){return this.state.error!==void 0?x.createElement(wt.Provider,{value:this.props.routeContext},x.createElement(kp.Provider,{value:this.state.error,children:this.props.component})):this.props.children}}function xh(e){let{routeContext:t,match:n,children:o}=e,r=x.useContext(ml);return r&&r.static&&r.staticContext&&(n.route.errorElement||n.route.ErrorBoundary)&&(r.staticContext._deepestRenderedBoundaryId=n.route.id),x.createElement(wt.Provider,{value:t},o)}function bh(e,t,n,o){var r;if(t===void 0&&(t=[]),n===void 0&&(n=null),o===void 0&&(o=null),e==null){var s;if(!n)return null;if(n.errors)e=n.matches;else if((s=o)!=null&&s.v7_partialHydration&&t.length===0&&!n.initialized&&n.matches.length>0)e=n.matches;else return null}let i=e,a=(r=n)==null?void 0:r.errors;if(a!=null){let u=i.findIndex(d=>d.route.id&&(a==null?void 0:a[d.route.id])!==void 0);u>=0||ae(!1),i=i.slice(0,Math.min(i.length,u+1))}let l=!1,c=-1;if(n&&o&&o.v7_partialHydration)for(let u=0;u<i.length;u++){let d=i[u];if((d.route.HydrateFallback||d.route.hydrateFallbackElement)&&(c=u),d.route.id){let{loaderData:p,errors:g}=n,v=d.route.loader&&p[d.route.id]===void 0&&(!g||g[d.route.id]===void 0);if(d.route.lazy||v){l=!0,c>=0?i=i.slice(0,c+1):i=[i[0]];break}}}return i.reduceRight((u,d,p)=>{let g,v=!1,w=null,b=null;n&&(g=a&&d.route.id?a[d.route.id]:void 0,w=d.route.errorElement||vh,l&&(c<0&&p===0?(Ih("route-fallback"),v=!0,b=null):c===p&&(v=!0,b=d.route.hydrateFallbackElement||null)));let y=t.concat(i.slice(0,p+1)),f=()=>{let h;return g?h=w:v?h=b:d.route.Component?h=x.createElement(d.route.Component,null):d.route.element?h=d.route.element:h=u,x.createElement(xh,{match:d,routeContext:{outlet:u,matches:y,isDataRoute:n!=null},children:h})};return n&&(d.route.ErrorBoundary||d.route.errorElement||p===0)?x.createElement(wh,{location:n.location,revalidation:n.revalidation,component:w,error:g,children:f(),routeContext:{outlet:null,matches:y,isDataRoute:!0}}):f()},null)}var zp=function(e){return e.UseBlocker="useBlocker",e.UseRevalidator="useRevalidator",e.UseNavigateStable="useNavigate",e}(zp||{}),Op=function(e){return e.UseBlocker="useBlocker",e.UseLoaderData="useLoaderData",e.UseActionData="useActionData",e.UseRouteError="useRouteError",e.UseNavigation="useNavigation",e.UseRouteLoaderData="useRouteLoaderData",e.UseMatches="useMatches",e.UseRevalidator="useRevalidator",e.UseNavigateStable="useNavigate",e.UseRouteId="useRouteId",e}(Op||{});function Ph(e){let t=x.useContext(ml);return t||ae(!1),t}function $h(e){let t=x.useContext(dh);return t||ae(!1),t}function Sh(e){let t=x.useContext(wt);return t||ae(!1),t}function Dp(e){let t=Sh(),n=t.matches[t.matches.length-1];return n.route.id||ae(!1),n.route.id}function Ch(){var e;let t=x.useContext(kp),n=$h(),o=Dp();return t!==void 0?t:(e=n.errors)==null?void 0:e[o]}function Lh(){let{router:e}=Ph(zp.UseNavigateStable),t=Dp(Op.UseNavigateStable),n=x.useRef(!1);return _p(()=>{n.current=!0}),x.useCallback(function(r,s){s===void 0&&(s={}),n.current&&(typeof r=="number"?e.navigate(r):e.navigate(r,Fo({fromRouteId:t},s)))},[e,t])}const Dc={};function Ih(e,t,n){Dc[e]||(Dc[e]=!0)}function kh(e,t){e==null||e.v7_startTransition,e==null||e.v7_relativeSplatPath}function sa(e){let{to:t,replace:n,state:o,relative:r}=e;qn()||ae(!1);let{future:s,static:i}=x.useContext(Wt),{matches:a}=x.useContext(wt),{pathname:l}=Qn(),c=Ep(),u=pl(t,dl(a,s.v7_relativeSplatPath),l,r==="path"),d=JSON.stringify(u);return x.useEffect(()=>c(JSON.parse(d),{replace:n,state:o,relative:r}),[c,d,r,n,o]),null}function mo(e){ae(!1)}function _h(e){let{basename:t="/",children:n=null,location:o,navigationType:r=kt.Pop,navigator:s,static:i=!1,future:a}=e;qn()&&ae(!1);let l=t.replace(/^\/*/,"/"),c=x.useMemo(()=>({basename:l,navigator:s,static:i,future:Fo({v7_relativeSplatPath:!1},a)}),[l,a,s,i]);typeof o=="string"&&(o=dn(o));let{pathname:u="/",search:d="",hash:p="",state:g=null,key:v="default"}=o,w=x.useMemo(()=>{let b=ul(u,l);return b==null?null:{location:{pathname:b,search:d,hash:p,state:g,key:v},navigationType:r}},[l,u,d,p,g,v,r]);return w==null?null:x.createElement(Wt.Provider,{value:c},x.createElement(Ss.Provider,{children:n,value:w}))}function Eh(e){let{children:t,location:n}=e;return fh(ia(t),n)}new Promise(()=>{});function ia(e,t){t===void 0&&(t=[]);let n=[];return x.Children.forEach(e,(o,r)=>{if(!x.isValidElement(o))return;let s=[...t,r];if(o.type===x.Fragment){n.push.apply(n,ia(o.props.children,s));return}o.type!==mo&&ae(!1),!o.props.index||!o.props.children||ae(!1);let i={id:o.props.id||s.join("-"),caseSensitive:o.props.caseSensitive,element:o.props.element,Component:o.props.Component,index:o.props.index,path:o.props.path,loader:o.props.loader,action:o.props.action,errorElement:o.props.errorElement,ErrorBoundary:o.props.ErrorBoundary,hasErrorBoundary:o.props.ErrorBoundary!=null||o.props.errorElement!=null,shouldRevalidate:o.props.shouldRevalidate,handle:o.props.handle,lazy:o.props.lazy};o.props.children&&(i.children=ia(o.props.children,s)),n.push(i)}),n}/**
 * React Router DOM v6.30.6
 *
 * Copyright (c) Remix Software Inc.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE.md file in the root directory of this source tree.
 *
 * @license MIT
 */function aa(){return aa=Object.assign?Object.assign.bind():function(e){for(var t=1;t<arguments.length;t++){var n=arguments[t];for(var o in n)({}).hasOwnProperty.call(n,o)&&(e[o]=n[o])}return e},aa.apply(null,arguments)}function Rh(e,t){if(e==null)return{};var n={};for(var o in e)if({}.hasOwnProperty.call(e,o)){if(t.indexOf(o)!==-1)continue;n[o]=e[o]}return n}function zh(e){return!!(e.metaKey||e.altKey||e.ctrlKey||e.shiftKey)}function Oh(e,t){return e.button===0&&(!t||t==="_self")&&!zh(e)}const Dh=["onClick","relative","reloadDocument","replace","state","target","to","preventScrollReset","viewTransition"],Mh="6";try{window.__reactRouterVersion=Mh}catch{}const jh="startTransition",Mc=Im[jh];function Th(e){let{basename:t,children:n,future:o,window:r}=e,s=x.useRef();s.current==null&&(s.current=Bf({window:r,v5Compat:!0}));let i=s.current,[a,l]=x.useState({action:i.action,location:i.location}),{v7_startTransition:c}=o||{},u=x.useCallback(d=>{c&&Mc?Mc(()=>l(d)):l(d)},[l,c]);return x.useLayoutEffect(()=>i.listen(u),[i,u]),x.useEffect(()=>kh(o),[o]),x.createElement(_h,{basename:t,children:n,location:a.location,navigationType:a.action,navigator:i,future:o})}const Nh=typeof window<"u"&&typeof window.document<"u"&&typeof window.document.createElement<"u",Ah=/^(?:[a-z][a-z0-9+.-]*:|\/\/)/i,la=x.forwardRef(function(t,n){let{onClick:o,relative:r,reloadDocument:s,replace:i,state:a,target:l,to:c,preventScrollReset:u,viewTransition:d}=t,p=Rh(t,Dh),{basename:g}=x.useContext(Wt),v,w=!1;if(typeof c=="string"&&Ah.test(c)&&(v=c,Nh))try{let h=new URL(window.location.href),P=c.startsWith("//")?new URL(h.protocol+c):new URL(c),$=ul(P.pathname,g);P.origin===h.origin&&$!=null?c=$+P.search+P.hash:w=!0}catch{}let b=ph(c,{relative:r}),y=Bh(c,{replace:i,state:a,target:l,preventScrollReset:u,relative:r,viewTransition:d});function f(h){o&&o(h),h.defaultPrevented||y(h)}return x.createElement("a",aa({},p,{href:v||b,onClick:w||s?o:f,ref:n,target:l}))});var jc;(function(e){e.UseScrollRestoration="useScrollRestoration",e.UseSubmit="useSubmit",e.UseSubmitFetcher="useSubmitFetcher",e.UseFetcher="useFetcher",e.useViewTransitionState="useViewTransitionState"})(jc||(jc={}));var Tc;(function(e){e.UseFetcher="useFetcher",e.UseFetchers="useFetchers",e.UseScrollRestoration="useScrollRestoration"})(Tc||(Tc={}));function Bh(e,t){let{target:n,replace:o,state:r,preventScrollReset:s,relative:i,viewTransition:a}=t===void 0?{}:t,l=Ep(),c=Qn(),u=Rp(e,{relative:i});return x.useCallback(d=>{if(Oh(d,n)){d.preventDefault();let p=o!==void 0?o:rs(c)===rs(u);l(e,{replace:p,state:r,preventScrollReset:s,relative:i,viewTransition:a})}},[c,l,u,o,r,n,e,s,i,a])}const Uh="https://github.com/frankvane/vane-components";class Fh extends A.Component{constructor(){super(...arguments);wl(this,"state",{error:null})}static getDerivedStateFromError(n){return{error:n}}render(){var n;return this.state.error?m.jsxs("div",{className:"crash",role:"alert",children:[m.jsx("h3",{children:"这个页面炸了"}),m.jsx("pre",{children:String(((n=this.state.error)==null?void 0:n.stack)||this.state.error)}),m.jsx("button",{type:"button",onClick:()=>this.setState({error:null}),children:"重试"})]}):this.props.children}}function Mp(e,t){return String(e.entries.indexOf(t)+1).padStart(2,"0")}function Vh({demos:e,pathname:t}){var l;const{groups:n,entries:o,label:r}=e,s=(l=o.find(c=>t===`/demo/${c.meta.slug}`))==null?void 0:l.meta.group,[i,a]=x.useState(()=>{var u;const c=(u=n[0])==null?void 0:u.key;return Object.fromEntries(n.map(d=>[d.key,d.key===(s??c)]))});return x.useEffect(()=>{s&&a(c=>c[s]?c:{...c,[s]:!0})},[s]),m.jsxs("div",{className:"nav-section",children:[m.jsxs("div",{className:"nav-section-head",children:[m.jsx("span",{children:r}),m.jsxs("code",{children:[o.length," demos"]})]}),n.map(c=>{const u=o.filter(p=>p.meta.group===c.key);if(u.length===0)return null;const d=i[c.key]??!1;return m.jsxs("div",{className:"nav-group",children:[m.jsxs("button",{type:"button",className:`nav-group-head${s===c.key?" is-current":""}`,onClick:()=>a(p=>({...p,[c.key]:!d})),"aria-expanded":d,children:[m.jsx("span",{className:`nav-caret${d?" is-open":""}`,"aria-hidden":!0,children:"▸"}),c.label,m.jsx("code",{children:u.length})]}),d?m.jsx("div",{className:"nav-list",children:u.map(p=>m.jsxs(la,{to:`/demo/${p.meta.slug}`,className:`nav-sub${t===`/demo/${p.meta.slug}`?" is-active":""}`,children:[m.jsx("em",{"aria-hidden":!0,children:Mp(e,p)}),p.meta.title]},p.meta.slug))}):null]},c.key)})]})}function Wh({demos:e}){var a;const{slug:t}=gh(),{entries:n,detail:o}=e,r=t?n.find(l=>l.meta.slug===t):void 0,s=(a=n[0])==null?void 0:a.meta.slug;if(!r)return m.jsx(sa,{to:s?`/demo/${s}`:"/",replace:!0});const i=n.indexOf(r)+1;return m.jsx(A.Fragment,{children:o(r,i)},r.meta.slug)}function Hh({config:e}){var d,p;const{pathname:t}=Qn(),[n,o]=x.useState(!1),[r,s]=x.useState(!1);x.useEffect(()=>o(!1),[t]);const i=x.useCallback(()=>s(g=>!g),[]);x.useEffect(()=>{const g=v=>{const w=v.target,b=w&&(w.tagName==="INPUT"||w.tagName==="TEXTAREA"||w.isContentEditable);v.key==="Escape"&&o(!1),!b&&(v.key==="g"||v.key==="G")&&!v.metaKey&&!v.ctrlKey&&s(y=>!y)};return window.addEventListener("keydown",g),()=>window.removeEventListener("keydown",g)},[]);const a=e.demos,l=(d=a.entries[0])==null?void 0:d.meta.slug,c=x.useMemo(()=>{if(!t.startsWith("/demo"))return e.crumb(t);const g=t.replace(/^\/demo\/?/,""),v=a.entries.find(w=>w.meta.slug===g);return v?`demo ${Mp(a,v)} · ${v.meta.title}`:"demo · 逐项示例"},[t,e,a]),u=x.useMemo(()=>e.nav.map((g,v)=>({...g,no:String(v+1).padStart(2,"0")})),[e.nav]);return m.jsxs("div",{className:`shell${n?" is-nav-open":""}${r?" is-guides":""}`,children:[m.jsx("a",{className:"skip-link",href:"#main",onClick:g=>{g.preventDefault();const v=document.getElementById("main");v==null||v.setAttribute("tabindex","-1"),v==null||v.focus(),v==null||v.scrollIntoView({block:"start"})},children:"跳到内容"}),m.jsxs("aside",{className:"side","aria-label":"站点导航",children:[m.jsxs(la,{to:"/",className:"brand",children:[m.jsx("span",{className:"brand-mark","aria-hidden":!0,children:e.brand}),m.jsxs("span",{children:[m.jsx("strong",{children:e.pkg}),m.jsx("em",{children:e.subtitle})]})]}),m.jsxs("nav",{children:[u.map(g=>m.jsxs(la,{to:g.to,className:`nav-item${t===g.to?" is-active":""}`,"aria-current":t===g.to?"page":void 0,children:[m.jsx("em",{"aria-hidden":!0,children:g.no}),m.jsx("span",{children:g.label}),g.hint?m.jsx("code",{children:g.hint}):null]},g.to)),m.jsx(Vh,{demos:e.demos,pathname:t})]}),m.jsxs("div",{className:"side-foot",children:[m.jsx("p",{children:e.footer[0]}),m.jsx("p",{className:"muted",children:e.footer[1]})]})]}),m.jsx("button",{type:"button",className:"scrim","aria-label":"关闭导航",tabIndex:n?0:-1,onClick:()=>o(!1)}),m.jsxs("div",{className:"main",id:"main",children:[m.jsxs("header",{className:"topbar",children:[m.jsx("button",{type:"button",className:"nav-toggle","aria-label":n?"关闭导航":"打开导航","aria-expanded":n,onClick:()=>o(g=>!g),children:m.jsx("span",{"aria-hidden":!0})}),m.jsx("span",{className:"crumb",children:c}),m.jsxs("div",{className:"topbar-right",children:[(p=e.stats)==null?void 0:p.map(g=>m.jsxs("span",{className:"topbar-stat",title:g.title,children:[m.jsx("b",{children:g.value})," ",g.label]},g.label)),m.jsxs("button",{type:"button",className:"topbar-btn","aria-pressed":r,onClick:i,title:"显示栏位参考线（快捷键 G）",children:[m.jsx("i",{"aria-hidden":!0}),"guides"]}),m.jsx("a",{className:"topbar-link",href:e.sourceUrl??Uh,target:"_blank",rel:"noreferrer",children:"source ↗"})]})]}),m.jsx("div",{className:"guides","aria-hidden":!0}),m.jsx(x.Suspense,{fallback:m.jsx("div",{className:"loading",children:"loading modules…"}),children:m.jsx(Fh,{children:m.jsxs(Eh,{children:[e.routes.map(g=>m.jsx(mo,{path:g.path,element:g.element},g.path)),m.jsx(mo,{path:"/demo",element:m.jsx(sa,{to:l?`/demo/${l}`:"/",replace:!0})}),m.jsx(mo,{path:"/demo/:slug",element:m.jsx(Wh,{demos:e.demos})}),m.jsx(mo,{path:"*",element:m.jsx(sa,{to:"/",replace:!0})})]})})})]})]})}function Gh({config:e}){return m.jsx(Th,{children:m.jsx(Hh,{config:e})})}const qh="modulepreload",Qh=function(e,t){return new URL(e,t).href},Nc={},C=function(t,n,o){let r=Promise.resolve();if(n&&n.length>0){const i=document.getElementsByTagName("link"),a=document.querySelector("meta[property=csp-nonce]"),l=(a==null?void 0:a.nonce)||(a==null?void 0:a.getAttribute("nonce"));r=Promise.allSettled(n.map(c=>{if(c=Qh(c,o),c in Nc)return;Nc[c]=!0;const u=c.endsWith(".css"),d=u?'[rel="stylesheet"]':"";if(!!o)for(let v=i.length-1;v>=0;v--){const w=i[v];if(w.href===c&&(!u||w.rel==="stylesheet"))return}else if(document.querySelector(`link[href="${c}"]${d}`))return;const g=document.createElement("link");if(g.rel=u?"stylesheet":qh,u||(g.as="script"),g.crossOrigin="",g.href=c,l&&g.setAttribute("nonce",l),document.head.appendChild(g),u)return new Promise((v,w)=>{g.addEventListener("load",v),g.addEventListener("error",()=>w(new Error(`Unable to preload CSS for ${c}`)))})}))}function s(i){const a=new Event("vite:preloadError",{cancelable:!0});if(a.payload=i,window.dispatchEvent(a),!a.defaultPrevented)throw i}return r.then(i=>{for(const a of i||[])a.status==="rejected"&&s(a.reason);return t().catch(s)})},Kh=`import {
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

const LazyImage = withPlugins(LazyLoadImageCore, [
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
`,Yh=`import {
  LazyLoadImageCore,
  createCachePrewarmPlugin,
  createIDBCachePlugin,
  createMemoryCachePlugin,
  withPlugins,
} from "vane-lazy-image";

import { DemoLayout } from "../components/DemoLayout";
import React from "react";

const LazyImage = withPlugins(LazyLoadImageCore, [
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
`,Xh=`import {
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
      withPlugins(LazyLoadImageCore, [
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
`,Zh=`import {
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

const LazyImage = withPlugins(LazyLoadImageCore, [
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
`,Jh=`import {
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

const LazyImage = withPlugins(LazyLoadImageCore, [
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
`,e0=`import {
  LazyLoadImageCore,
  createAdaptiveQualityPlugin,
  createImageOptimizationPlugin,
  createPreconnectPlugin,
  createPriorityLoadingPlugin,
  withPlugins,
} from "vane-lazy-image";

import { DemoLayout } from "../components/DemoLayout";
import React from "react";

const LazyImage = withPlugins(LazyLoadImageCore, [
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
`,t0=`import {
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

const LazyImage = withPlugins(LazyLoadImageCore, [
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
`,n0=`import {
  LazyLoadImageCore,
  createHoverPrefetchPlugin,
  createScrollIdlePlugin,
  createViewportAwarePlugin,
  createViewportDebouncePlugin,
  withPlugins,
} from "vane-lazy-image";

import { DemoLayout } from "../components/DemoLayout";
import React from "react";

const LazyImage = withPlugins(LazyLoadImageCore, [
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
`,o0=`import {
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

const LazyImage = withPlugins(LazyLoadImageCore, [
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
`,r0=`import {
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

const LazyImage = withPlugins(LazyLoadImageCore, [
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
`,s0=`import {
  LazyLoadImageCore,
  createFadeInPlugin,
  createWatermarkPlugin,
  withPlugins,
} from "vane-lazy-image";
import React, { useState } from "react";

import type { LazyImagePlugin } from "vane-lazy-image";

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
  const [registeredPlugins, setRegisteredPlugins] = useState<LazyImagePlugin[]>([]);
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
    } catch (error) {
      addLog(
        \`解析失败: \${error instanceof Error ? error.message : String(error)}\`,
        "error"
      );
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
    } catch (error) {
      addLog(
        \`解析失败: \${error instanceof Error ? error.message : String(error)}\`,
        "error"
      );
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
    } catch (error) {
      addLog(
        \`⚠️ 检测到循环依赖: \${error instanceof Error ? error.message : String(error)}\`,
        "error"
      );
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
    } catch (error) {
      addLog(
        \`⚠️ 解析失败: \${error instanceof Error ? error.message : String(error)}\`,
        "error"
      );
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
`,i0=`import {
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
      withPlugins(LazyLoadImageCore, [
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
`,a0=`import {
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

`,l0=`import {
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
    console.log("[热更新] 重新创建组件，当前插件:", activePlugins.map((p) => p.name));
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
      .some((p) => p.name === badge.name);
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
      .some((p) => p.name === "badge");
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
    allPlugins.forEach((plugin) => pluginManager.unregister(plugin.name));

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

`,c0=`import {
  LazyLoadImageCore,
  withPlugins,
} from "vane-lazy-image";
import React, { useMemo, useState } from "react";
import {
  SandboxConfig,
  wrapPluginHook,
} from "vane-lazy-image/advanced";

import type {
  LazyImageContext,
  LazyImagePlugin,
} from "vane-lazy-image";

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
  const unsafePlugin = useMemo<LazyImagePlugin>(() => ({
    name: "UnsafePlugin",
    version: "1.0.0",
    hooks: {
      onLoadSuccess: (_context: LazyImageContext, _displaySrc?: string) => {
        addLog("不安全插件: onLoadSuccess 被调用", "error");
        throw new Error("❌ 模拟插件错误：这是一个故意的错误！");
      },
    },
  }), []);

  // 创建安全插件 - 使用沙箱包装
  const safePlugin = useMemo<LazyImagePlugin>(() => {
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
          (_context: LazyImageContext, _displaySrc?: string) => {
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
`,u0=`import * as ReactWindow from "react-window";

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

const LazyImage = withPlugins(LazyLoadImageCore, [
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

/**
 * react-window v2 的 Grid 在 v1 类型里不存在，这里按「运行时探测到的可选组件」声明；
 * v1 的 FixedSizeGrid 有完整类型，直接使用，保留原有的新版优先逻辑。
 */
type VirtualComponent = React.ComponentType<Record<string, unknown>>;
const GridNew = (ReactWindow as { Grid?: VirtualComponent }).Grid;
const GridOld = ReactWindow.FixedSizeGrid;

/** 两版 grid 实例暴露的取容器方法与内部字段 */
interface GridApi {
  getElement?: () => HTMLElement | null;
  getOuterElement?: () => HTMLElement | null;
  getRootElement?: () => HTMLElement | null;
  _outerRef?: { current?: HTMLElement | null };
  _outerElement?: HTMLElement;
}

export default function VirtualGridDemo() {
  const gridOuterRef = React.useRef<HTMLDivElement | null>(null);
  const gridRef = React.useRef<GridApi | null>(null);
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
            {Cell}
          </GridOld>
        )}
      </div>
    </DemoLayout>
  );
}
`,d0=`import * as ReactWindow from "react-window";

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

const LazyImage = withPlugins(LazyLoadImageCore, [
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

/**
 * react-window v2 的 Grid 在 v1 类型里不存在，这里按「运行时探测到的可选组件」声明；
 * v1 的 FixedSizeList 有完整类型，直接使用，保留原有的新版优先逻辑。
 */
type VirtualComponent = React.ComponentType<Record<string, unknown>>;
const GridNew = (ReactWindow as { Grid?: VirtualComponent }).Grid;
const ListOld = ReactWindow.FixedSizeList;

/** 两版列表实例暴露的取容器方法与内部字段 */
interface ListApi {
  getElement?: () => HTMLElement | null;
  getOuterElement?: () => HTMLElement | null;
  getRootElement?: () => HTMLElement | null;
  _outerRef?: { current?: HTMLElement | null };
  _outerElement?: HTMLElement;
}

export default function VirtualHorizontalListDemo() {
  const listOuterRef = React.useRef<HTMLDivElement | null>(null);
  const gridRef = React.useRef<ListApi | null>(null);
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
            {Cell}
          </ListOld>
        )}
      </div>
    </DemoLayout>
  );
}
`,p0=`import * as ReactWindow from "react-window";

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

const LazyImage = withPlugins(LazyLoadImageCore, [
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

/**
 * react-window v2 的 List 在 v1 类型里不存在，这里按「运行时探测到的可选组件」声明；
 * v1 的 FixedSizeList 有完整类型，直接使用，保留原有的新版优先逻辑。
 */
type VirtualComponent = React.ComponentType<Record<string, unknown>>;
const ListNew = (ReactWindow as { List?: VirtualComponent }).List;
const ListOld = ReactWindow.FixedSizeList;

/** 两版列表实例暴露的取容器方法与内部字段 */
interface ListApi {
  getElement?: () => HTMLElement | null;
  getOuterElement?: () => HTMLElement | null;
  getRootElement?: () => HTMLElement | null;
  _outerRef?: { current?: HTMLElement | null };
  _outerElement?: HTMLElement;
}

export default function VirtualVerticalListDemo() {
  const listOuterRef = React.useRef<HTMLDivElement | null>(null);
  const listRef = React.useRef<ListApi | null>(null);
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
            rowComponent={RowComponent}
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
            {RowComponent}
          </ListOld>
        )}
      </div>
    </DemoLayout>
  );
}
`,m0="A11yPlugin",g0="无障碍支持：将装饰性图片设为 aria-hidden、自定义 aria-label、注入 role=img 与 aria-busy，并通过 aria-live 区域播报加载状态，提升读屏可用性。",f0="2.0.0",h0=["a11y","可访问性","SEO"],y0=[{name:"onMount",when:"组件挂载完成、插件注册后执行一次（返回的清理函数在 manager.clear 时逆序执行）",description:"初始化副作用：注册监听、起定时器、建观察器；必须返回清理函数或配合 onUnmount 收尾"},{name:"renderOverlay",when:"每次渲染，覆盖在图片容器之上",description:"骨架屏、错误占位、水印、加载动画"}],v0=[],w0="只读取 context 字段（props / state / data），不调用上下文方法",x0=[{name:"enabled",type:"boolean",default:"true",description:"是否启用无障碍增强"},{name:"decorative",type:"boolean",default:"false",description:"标记为装饰性图片（aria-hidden=true 并清空 alt）"},{name:"ariaLabel",type:"string | ((ctx) => string)",default:"undefined",description:"自定义 aria-label（函数型，参见用法示例）"},{name:"statusText",type:"{ loading?; loaded?; error? }",default:"undefined",description:"视觉隐藏的状态播报文本"}],b0=`const A11yImage = withPlugins(LazyLoadImageCore, [
  createA11yPlugin({
    ariaLabel: (ctx) => \`商品主图 \${ctx.src}\`,
    statusText: { loading: "加载中…", loaded: "已加载", error: "加载失败" },
  }),
]);

// 装饰性图片也可直接跳过读屏
<A11yImage src="https://picsum.photos/id/1015/500/300" alt="" />;`,P0=[{name:"装饰性图片",description:"decorative=true 时清空 alt 并设 aria-hidden，读屏跳过。",src:"https://picsum.photos/id/1015/500/300",config:{decorative:!0}},{name:"自定义 aria-label（字符串）",description:"为图片设置区别于 alt 的 aria-label。",src:"https://picsum.photos/id/1021/500/300",config:{ariaLabel:"商品主图"}},{name:"加载状态播报",description:"视觉隐藏区域以 aria-live 播报加载中/完成/失败。",src:"https://picsum.photos/id/1026/500/300",config:{statusText:{loading:"加载中…",loaded:"已加载",error:"加载失败"}}}],$0=["装饰性图片 aria-hidden","自定义 aria-label（字符串或函数）","role=img 明确语义","aria-busy 随加载态切换","aria-live 状态播报（视觉隐藏）","可关闭"],S0=["无障碍合规（WCAG）","读屏器适配","装饰性背景图","加载状态可读"],C0=["ariaLabel 支持函数型，但静态预览仅支持字符串；函数用法见用法示例。"],L0={name:m0,description:g0,since:f0,tags:h0,events:y0,methods:v0,methodsNote:w0,config:x0,example:b0,examples:P0,features:$0,useCases:S0,notes:C0},I0="AdaptiveQualityPlugin",k0="自适应画质：根据网络类型（effectiveType）与省流模式（saveData）动态调整图片质量参数，弱网/省流自动降质，支持 realtime 实时监听。",_0="2.0.0",E0=["other","网络","性能","省流量"],R0=[{name:"onMount",when:"组件挂载完成、插件注册后执行一次（返回的清理函数在 manager.clear 时逆序执行）",description:"初始化副作用：注册监听、起定时器、建观察器；必须返回清理函数或配合 onUnmount 收尾"},{name:"transformProps",when:"渲染前链式改写图片 props",description:"补 sizes / 占位色 / 解码策略等"}],z0=[],O0="只读取 context 字段（props / state / data），不调用上下文方法",D0=[{name:"lowQ",type:"number",default:"40(2g/3g)",description:"低速网络质量值(1~100)"},{name:"highQ",type:"number",default:"80(4g)",description:"高速网络质量值(1~100)"},{name:"saveDataQuality",type:"number",default:"35",description:"省流模式质量值(1~100)"},{name:"overrideEffectiveType",type:'"4g" | "3g" | "2g" | "slow-2g"',default:"undefined",description:"Demo/测试覆盖网络类型"},{name:"overrideSaveData",type:"boolean",default:"undefined",description:"Demo/测试覆盖省流开关"},{name:"mode",type:'"once" | "realtime"',default:'"once"',description:"once 仅初始一次 / realtime 监听变化"}],M0=`const AqImage = withPlugins(LazyLoadImageCore, [
  createAdaptiveQualityPlugin({ lowQ: 45, highQ: 85, mode: "realtime" }),
]);

<AqImage src="https://picsum.photos/id/1015/500/300" alt="自适应画质示例" />;`,j0=[{name:"默认一次性调速",description:"初始按网络设置质量，加载一次。",src:"https://picsum.photos/id/1015/500/300",config:{mode:"once"}},{name:"实时监听网络",description:"mode=realtime，网络变化时自动重新计算质量。",src:"https://picsum.photos/id/1021/500/300",config:{mode:"realtime"}},{name:"模拟弱网降质",description:"overrideEffectiveType=2g，演示低速下自动降质。",src:"https://picsum.photos/id/1026/500/300",config:{overrideEffectiveType:"2g",overrideSaveData:!0}}],T0=["按网络类型调速","省流模式降质","realtime 实时监听","手动覆盖（Demo）","质量参数可配"],N0=["弱网体验优化","流量节省","全球 CDN 适配","移动端画质策略"],A0=["overrideEffectiveType / overrideSaveData 仅用于 Demo 测试覆盖真实网络信息；质量参数通过 URL ?q= 注入，适用于支持该参数的图床。"],B0={name:I0,description:k0,since:_0,tags:E0,events:R0,methods:z0,methodsNote:O0,config:D0,example:M0,examples:j0,features:T0,useCases:N0,notes:A0},U0="AltTextPlugin",F0="替代文本：当图片未提供 alt 时，按前缀或自定义 derive 函数自动生成 alt，提升可访问性与 SEO；已有 alt 则不覆盖。",V0="2.0.0",W0=["a11y","可访问性","SEO"],H0=[{name:"transformProps",when:"渲染前链式改写图片 props",description:"补 sizes / 占位色 / 解码策略等"}],G0=[],q0="只读取 context 字段（props / state / data），不调用上下文方法",Q0=[{name:"derive",type:"(src: string) => string",default:"undefined",description:"自定义推导函数（函数型，参见用法示例）"},{name:"prefix",type:"string",default:'"Image"',description:'默认推导前缀（如 "Image"）'}],K0=`const AltImage = withPlugins(LazyLoadImageCore, [
  createAltTextPlugin({
    derive: (src) => \`图片 \${new URL(src).pathname}\`,
  }),
]);

// 不传 alt 时自动补全；传了 alt 则不覆盖
<AltImage src="https://picsum.photos/id/1015/500/300" alt="" />;`,Y0=[{name:"默认前缀派生",description:"不传 alt，按 prefix 自动生成 alt。",src:"https://picsum.photos/id/1015/500/300",config:{prefix:"产品图"}},{name:"已有 alt 不覆盖",description:"传入 alt 时插件保留原值，不做替换。",src:"https://picsum.photos/id/1021/500/300",config:{prefix:"Image"}}],X0=["alt 缺失自动派生","自定义前缀","自定义 derive 函数","不覆盖已有 alt"],Z0=["批量图片 alt 补全","SEO 优化","读屏适配","用户未填 alt 兜底"],J0=["derive 为函数型配置，静态预览仅支持 prefix；函数用法见用法示例。"],ey={name:U0,description:F0,since:V0,tags:W0,events:H0,methods:G0,methodsNote:q0,config:Q0,example:K0,examples:Y0,features:X0,useCases:Z0,notes:J0},ty="AnimatedCursorPlugin",ny="自定义光标动画：为图片叠加系统光标（放大镜/十字/抓手等）或自定义光标（圆点/圆环/加号）+ 跟随动画 + 点击涟漪 + 文字提示，纯 CSS+JS 无依赖。",oy="2.0.0",ry=["interaction","视觉效果与交互","visual"],sy=[{name:"renderOverlay",when:"每次渲染，覆盖在图片容器之上",description:"骨架屏、错误占位、水印、加载动画"}],iy=[],ay="只读取 context 字段（props / state / data），不调用上下文方法",ly=[{name:"style",type:'"zoom-in" | "zoom-out" | "pointer" | "crosshair" | "move" | "grab" | "custom-dot" | "custom-ring" | "custom-plus" | "none"',default:'"zoom-in"',description:"光标样式"},{name:"enableFollower",type:"boolean",default:"true",description:"是否启用跟随光标"},{name:"followerColor",type:"string",default:'"rgba(59, 130, 246, 0.5)"',description:"跟随光标颜色"},{name:"followerSize",type:"number",default:"40",description:"跟随光标大小（px）"},{name:"followerDelay",type:"number",default:"0.1",description:"跟随延迟系数（越大越跟手）"},{name:"scaleOnHover",type:"boolean",default:"true",description:"悬停时跟随光标缩放"},{name:"hoverScale",type:"number",default:"1.5",description:"悬停缩放比例"},{name:"customIcon",type:"string",default:'""',description:"自定义光标图标 URL"},{name:"cursorText",type:"string",default:'""',description:"光标附带文字"},{name:"showRipple",type:"boolean",default:"false",description:"点击时产生涟漪"}],cy=`// 1. 放大镜光标 + 蓝色跟随圆点
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
});`,uy=[{name:"zoom-in 放大镜 + 跟随圆点",description:"系统放大镜光标，叠加半透明蓝色跟随圆点，暗示可放大查看。",src:"https://picsum.photos/id/110/400/300",config:{style:"zoom-in",enableFollower:!0,followerColor:"rgba(59,130,246,0.5)",followerSize:40}},{name:"custom-dot 自定义圆点 + 点击涟漪",description:"自定义圆点跟随光标，点击产生涟漪动画，互动感强。",src:"https://picsum.photos/id/119/400/300",config:{style:"custom-dot",showRipple:!0,followerSize:44,followerColor:"rgba(255,99,132,0.5)"}},{name:"custom-ring 圆环 + 文字提示",description:"圆环跟随光标并附带文字提示，适合“查看大图”引导。",src:"https://picsum.photos/id/122/400/300",config:{style:"custom-ring",cursorText:"查看大图",followerSize:56,followerColor:"rgba(16,185,129,0.6)"}},{name:"crosshair 十字光标",description:"十字准星光标，适合素材 / 设计类站点定位。",src:"https://picsum.photos/id/129/400/300",config:{style:"crosshair",enableFollower:!0,followerSize:36}},{name:"custom-plus 加号光标",description:"加号光标，强调“可添加 / 收藏”等操作。",src:"https://picsum.photos/id/133/400/300",config:{style:"custom-plus",enableFollower:!0,followerSize:40,scaleOnHover:!0}}],dy=["10 种光标样式（系统光标 + 自定义圆点 / 圆环 / 加号）","跟随光标：颜色、大小、延迟系数可调","悬停时跟随光标缩放","点击涟漪动画","可附带文字提示","支持自定义图标 URL","纯 CSS + 轻量 JS，无依赖"],py=["商品详情放大预览","画廊 / 素材站点","设计工具类页面","交互演示与引导","收藏 / 添加操作的视觉暗示","创意作品集"],my=["效果需鼠标在图片上移动 / 悬停 / 点击才会体现，静态截图仅展示初始态。","移动端无指针设备，建议配合触摸反馈降级，或仅保留 enableFollower 等轻效果。"],gy={name:ty,description:ny,since:oy,tags:ry,events:sy,methods:iy,methodsNote:ay,config:ly,example:cy,examples:uy,features:dy,useCases:py,notes:my},fy="AntiHotlinkPlugin",hy="防盗链：为图片 URL 追加动态签名 token 或 referer 标记，配合域名白名单与 referer 校验，防止资源被第三方直链盗用。",yy="2.0.0",vy=["network","网络","防盗链","签名"],wy=[{name:"transformProps",when:"渲染前链式改写图片 props",description:"补 sizes / 占位色 / 解码策略等"}],xy=[],by="只读取 context 字段（props / state / data），不调用上下文方法",Py=[{name:"allowedDomains",type:"string[]",description:"域名白名单；仅放行列表内域，其余源原样通过"},{name:"checkReferer",type:"boolean",default:"false",description:"无 referrer 时附加 ref=direct 标记（仅浏览器环境有效）"},{name:"generateToken",type:"(src: string) => string | undefined",description:"为 URL 生成签名 token（函数型，仅顶层示例展示）"},{name:"tokenParam",type:"string",default:'"token"',description:"追加到查询参数的键名"}],$y=`import { LazyLoadImageCore, createAntiHotlinkPlugin, withPlugins } from "vane-lazy-image";

const LazyImage = withPlugins(LazyLoadImageCore, [
  createAntiHotlinkPlugin({
    generateToken: (src) => signSrc(src),
    tokenParam: "sig",
    allowedDomains: ["images.example.com"],
  }),
]);

<LazyImage src="https://images.example.com/photo.jpg" alt="防盗链示例" />`,Sy=[{name:"白名单 + referer 校验",description:"仅放行 picsum.photos；无 referer 时附加 ref=direct 标记。",src:"https://picsum.photos/seed/hotlink/800/600",config:{allowedDomains:["picsum.photos"],checkReferer:!0}},{name:"仅域名白名单放行",description:"命中白名单则原样通过，否则不注入任何参数。",src:"https://picsum.photos/seed/hotlink-2/800/600",config:{allowedDomains:["picsum.photos"]}}],Cy=["generateToken 为 URL 追加签名参数，防直链盗用","allowedDomains 白名单：仅放行指定域，其余原样通过","checkReferer：无 referrer 时附加 ref=direct 标记","通用参数追加兜底（无 URL 对象时拼接 query）"],Ly=["OSS / 云存储等需签名才能访问的图片","限制仅本站 referer 可加载"],Iy=["generateToken 为函数型，无法进入静态预览配置，仅顶层示例展示","allowedDomains 为空时对所有源注入 token","checkReferer 仅在浏览器环境有效"],ky={name:fy,description:hy,since:yy,tags:vy,events:wy,methods:xy,methodsNote:by,config:Py,example:$y,examples:Sy,features:Cy,useCases:Ly,notes:Iy},_y="AspectRatioSpacerPlugin",Ey="宽高比占位：在容器上预留固定宽高比，图片加载前后保持布局稳定，杜绝 CLS（布局抖动）。",Ry="2.0.0",zy=["a11y","可访问性","视觉"],Oy=[{name:"onMount",when:"组件挂载完成、插件注册后执行一次（返回的清理函数在 manager.clear 时逆序执行）",description:"初始化副作用：注册监听、起定时器、建观察器；必须返回清理函数或配合 onUnmount 收尾"},{name:"transformProps",when:"渲染前链式改写图片 props",description:"补 sizes / 占位色 / 解码策略等"}],Dy=[],My="只读取 context 字段（props / state / data），不调用上下文方法",jy=[{name:"ratio",type:"number",default:"4/3",description:"宽/高比，如 4/3、16/9，或直接传数字"}],Ty=`const RatioImage = withPlugins(LazyLoadImageCore, [
  createAspectRatioSpacerPlugin({ ratio: 4 / 3 }),
]);

<RatioImage src="https://picsum.photos/id/1015/500/300" alt="宽高比占位示例" />;`,Ny=[{name:"4:3 占位",description:"常见图文比例，加载前后无跳动。",src:"https://picsum.photos/id/1015/500/300",config:{ratio:1.3333}},{name:"16:9 占位",description:"视频/横幅比例。",src:"https://picsum.photos/id/1021/500/300",config:{ratio:1.7778}},{name:"正方形占位",description:"ratio=1，头像/方形卡片。",src:"https://picsum.photos/id/1026/500/300",config:{ratio:1}}],Ay=["预留宽高比","基于 CSS aspect-ratio","防布局抖动（CLS）","任意比例"],By=["瀑布流/列表占位","LCP 稳定","移动端响应式","避免滚动跳动"],Uy=["ratio 在静态预览中建议传数字（如 1.3333 表示 4/3），便于配置表与查看源码展示。"],Fy={name:_y,description:Ey,since:Ry,tags:zy,events:Oy,methods:Dy,methodsNote:My,config:jy,example:Ty,examples:Ny,features:Ay,useCases:By,notes:Uy},Vy="AuthPlugin",Wy="鉴权：为私有图片 URL 追加访问凭证 token（查询参数），并可配置 crossOrigin 与 referrerPolicy，满足需登录态才能访问的图片源鉴权需求。",Hy="2.0.0",Gy=["network","网络","鉴权","私有资源"],qy=[{name:"transformProps",when:"渲染前链式改写图片 props",description:"补 sizes / 占位色 / 解码策略等"}],Qy=[],Ky="只读取 context 字段（props / state / data），不调用上下文方法",Yy=[{name:"token",type:"string | (() => string | undefined)",description:"访问凭证；支持函数动态获取（函数型仅顶层示例展示）"},{name:"tokenParam",type:"string",description:"追加到查询参数的键名"},{name:"crossOrigin",type:'"anonymous" | "use-credentials"',description:"img 的 crossOrigin 属性"},{name:"referrerPolicy",type:"React.HTMLAttributeReferrerPolicy",description:"img 的 referrerPolicy 属性"}],Xy=`import { LazyLoadImageCore, createAuthPlugin, withPlugins } from "vane-lazy-image";

const LazyImage = withPlugins(LazyLoadImageCore, [
  createAuthPlugin({
    token: () => getAccessToken(),
    tokenParam: "token",
    crossOrigin: "anonymous",
  }),
]);

<LazyImage src="https://private.example.com/photo.jpg" alt="鉴权示例" />`,Zy=[{name:"静态 token",description:"为图片 URL 追加固定访问凭证参数。",src:"https://picsum.photos/seed/auth/800/600",config:{token:"sk-demo-123",tokenParam:"token"}},{name:"跨域 + 无 referrer",description:"追加凭证的同时配置跨域与 referrer 策略。",src:"https://picsum.photos/seed/auth-2/800/600",config:{token:"sk-demo-123",crossOrigin:"anonymous",referrerPolicy:"no-referrer"}}],Jy=["为图片 URL 追加 token 查询参数完成鉴权","支持 crossOrigin / referrerPolicy 跨域鉴权配置","token 支持函数动态获取（如刷新令牌）"],ev=["需登录态才能访问的私有图片 / 云存储","带鉴权的用户头像 / 相册"],tv=["token 函数型仅顶层示例展示；静态字符串可直接用于静态预览","与 AntiHotlink 区别：Auth 注入访问凭证，AntiHotlink 注入防盗链签名，二者可叠加","tokenParam 已存在则不重复追加"],nv={name:Vy,description:Wy,since:Hy,tags:Gy,events:qy,methods:Qy,methodsNote:Ky,config:Yy,example:Xy,examples:Zy,features:Jy,useCases:ev,notes:tv},ov="BadgePlugin",rv="角标徽章：在图片四角或中心叠加文字徽章，可按加载状态（always/loading/loaded/error）显示，支持自定义文字、颜色、字号与形状。",sv="2.0.0",iv=["other","视觉","徽标"],av=[{name:"renderOverlay",when:"每次渲染，覆盖在图片容器之上",description:"骨架屏、错误占位、水印、加载动画"}],lv=[],cv="只读取 context 字段（props / state / data），不调用上下文方法",uv=[{name:"text",type:"string | ((context) => string)",default:'"Badge"',description:"徽章文字（支持函数动态生成）"},{name:"position",type:'"top-left" | "top-right" | "bottom-left" | "bottom-right" | "center"',default:'"top-left"',description:"徽章位置（四角或中心）"},{name:"bgColor",type:"string",default:'"rgba(0,0,0,0.6)"',description:"背景色"},{name:"color",type:"string",default:'"#fff"',description:"文字色"},{name:"fontSize",type:"number",default:"12",description:"字号(px)"},{name:"padding",type:"string",default:'"2px 6px"',description:"内边距"},{name:"borderRadius",type:"number",default:"4",description:"圆角(px)"},{name:"zIndex",type:"number",default:"3",description:"层级"},{name:"showWhen",type:'"always" | "loading" | "loaded" | "error"',default:'"loaded"',description:"显示时机"},{name:"enabled",type:"boolean",default:"true",description:"是否启用"}],dv=`const BadgeImage = withPlugins(LazyLoadImageCore, [
  createBadgePlugin({ text: "NEW", position: "top-left", bgColor: "#c62828", showWhen: "always" }),
]);

<BadgeImage src="https://picsum.photos/id/1015/500/300" alt="角标示例" />;`,pv=[{name:"常驻徽标",description:"左上角红色 NEW 徽标，始终显示。",src:"https://picsum.photos/id/1015/500/300",config:{text:"NEW",position:"top-left",bgColor:"#c62828",showWhen:"always"}},{name:"加载时显示",description:"加载中显示 Loading 徽标，加载完成隐藏。",src:"https://picsum.photos/id/1021/500/300",config:{text:"Loading",position:"top-right",bgColor:"rgba(0,0,0,0.6)",showWhen:"loading"}},{name:"加载成功后显示",description:"加载完成后显示 Done 徽标。",src:"https://picsum.photos/id/1026/500/300",config:{text:"Done",position:"bottom-right",bgColor:"#2e7d32",showWhen:"loaded"}},{name:"自定义样式",description:"橙色大字号圆角徽标，居中。",src:"https://picsum.photos/id/1031/500/300",config:{text:"HOT",position:"center",bgColor:"#b35c00",color:"#fff",fontSize:16,borderRadius:20}}],mv=["角标 / 中心两种布局","五位置（四角 + 中心）","按加载状态显示","自定义文字/颜色/字号/圆角","支持函数文案","可关闭"],gv=["商品标签","状态提示","进度/完成标记","活动角标"],fv=["text 支持函数型（按 context 动态生成），静态预览仅支持字符串；函数用法见用法示例。"],hv={name:ov,description:rv,since:sv,tags:iv,events:av,methods:lv,methodsNote:cv,config:uv,example:dv,examples:pv,features:mv,useCases:gv,notes:fv},yv="BatteryAwarePlugin",vv="电量感知：当设备电量低于阈值或开启省流模式时，自动将图片请求宽度降级并禁用预连接，兼顾体验与续航/流量。",wv="2.0.0",xv=["other","加载策略","性能","省流量"],bv=[{name:"onLoad",when:"加载流程开始、需要确定最终图片地址时",description:"自定义加载逻辑，返回最终图片 URL（objectURL / dataURL / 原地址）"},{name:"transformProps",when:"渲染前链式改写图片 props",description:"补 sizes / 占位色 / 解码策略等"}],Pv=[],$v="只读取 context 字段（props / state / data），不调用上下文方法",Sv=[{name:"enabled",type:"boolean",default:"true",description:"是否启用"},{name:"lowBatteryThreshold",type:"number",default:"0.2",description:"低电量阈值(0~1)"},{name:"downgradeWidth",type:"number",default:"640",description:"降级时的请求宽度(px)"},{name:"disablePreconnect",type:"boolean",default:"true",description:"低电量时是否禁用预连接"}],Cv=`const BatteryImage = withPlugins(LazyLoadImageCore, [
  createBatteryAwarePlugin({ lowBatteryThreshold: 0.3, downgradeWidth: 480 }),
]);

<BatteryImage src="https://picsum.photos/id/1015/500/300" alt="电量感知示例" />;`,Lv=[{name:"默认降级",description:"电量<20% 或省流时降宽至 640 并禁用预连接。",src:"https://picsum.photos/id/1015/500/300",config:{enabled:!0}},{name:"放宽阈值",description:"电量<30% 才降级，更保守。",src:"https://picsum.photos/id/1021/500/300",config:{lowBatteryThreshold:.3}},{name:"保留预连接",description:"disablePreconnect=false，降级时仍允许预连接。",src:"https://picsum.photos/id/1026/500/300",config:{disablePreconnect:!1}}],Iv=["低电量自动降宽","省流模式联动","可禁用预连接","可关闭"],kv=["移动端续航优化","流量节省","弱网/低电场景","全球低端设备"],_v=["依赖 navigator.getBattery() 与网络 saveData；不支持的环境（如桌面/无该 API）不降级，不影响加载。"],Ev={name:yv,description:vv,since:wv,tags:xv,events:bv,methods:Pv,methodsNote:$v,config:Sv,example:Cv,examples:Lv,features:Iv,useCases:kv,notes:_v},Rv="BlurUpPlugin",zv="模糊放大占位：加载期为图片注入 blur 滤镜，加载成功后过渡到清晰，避免「白屏 → 清晰图」的突兀切换。",Ov="2.0.0",Dv=["visual","视觉"],Mv=[{name:"transformProps",when:"渲染前链式改写图片 props",description:"补 sizes / 占位色 / 解码策略等"}],jv=[],Tv="只读取 context 字段（props / state / data），不调用上下文方法",Nv=[{name:"startBlur",type:"number",default:"8",description:"起始模糊半径 px"},{name:"endBlur",type:"number",default:"0",description:"结束模糊半径 px"},{name:"durationMs",type:"number",default:"400",description:"过渡时长 ms"}],Av=`// 模糊渐显：从 8px 模糊过渡到清晰
const BlurImage = withPlugins(LazyLoadImageCore, [
  createBlurUpPlugin({
    startBlur: 8,
    endBlur: 0,
    durationMs: 450,
  }),
]);

<BlurImage src="https://picsum.photos/seed/blurup/600/400" alt="模糊渐显" />;`,Bv=[{name:"柔和模糊渐显",description:"8px 起始模糊，450ms 平滑过渡到清晰。",src:"https://picsum.photos/seed/blurup-soft/600/400",config:{startBlur:8,endBlur:0,durationMs:450}},{name:"强模糊长过渡",description:"16px 大模糊，700ms 慢过渡，营造「水雾散去」感。",src:"https://picsum.photos/seed/blurup-strong/600/400",config:{startBlur:16,endBlur:0,durationMs:700}}],Uv=["加载期模糊占位，避免白屏突兀","加载成功平滑过渡到清晰","起始 / 结束模糊与时长可调","常与 Skeleton / LQIP 配合"],Fv=["图片画廊 / 相册","首屏大图加载","内容型站点图片过渡","与骨架屏互补的视觉占位"],Vv=["与 Skeleton 叠加时建议 blur 图层级略高于骨架，过渡更自然。","durationMs 过大会让「清晰」显得迟缓，一般 300~500ms 为宜。"],Wv={name:Rv,description:zv,since:Ov,tags:Dv,events:Mv,methods:jv,methodsNote:Tv,config:Nv,example:Av,examples:Bv,features:Uv,useCases:Fv,notes:Vv},Hv="BorderGlowPlugin",Gv="边框光晕：加载成功后为卡片应用发光阴影，悬停时增强。",qv="2.0.0",Qv=["visual","视觉"],Kv=[{name:"onUnmount",when:"组件卸载前执行一次",description:"释放监听、定时器与观察器；与 onMount 成对出现，避免泄漏"},{name:"onLoadSuccess",when:"图片成功解码可显示时",description:"拿到最终 displaySrc 做后续动作（上报、预取下张、淡入）"}],Yv=[],Xv="只读取 context 字段（props / state / data），不调用上下文方法",Zv=[{name:"color",type:"string",default:"rgba(0, 153, 255, 0.6)",description:"辉光颜色"},{name:"blurPx",type:"number",default:"12",description:"辉光模糊半径 px"},{name:"spreadPx",type:"number",default:"2",description:"辉光扩散 px"},{name:"hoverMultiplier",type:"number",default:"1.4",description:"悬停时辉光强度倍数"}],Jv=`// 加载成功后卡片发光，悬停增强
const GlowImage = withPlugins(LazyLoadImageCore, [
  createBorderGlowPlugin({
    color: "rgba(0, 153, 255, 0.6)",
    blurPx: 12,
    spreadPx: 2,
    hoverMultiplier: 1.4,
  }),
]);

<GlowImage src="https://picsum.photos/seed/glow/600/400" alt="边框辉光" />;`,ew=[{name:"基础辉光",description:"蓝色柔光，悬停轻微增强，突出主体卡片。",src:"https://picsum.photos/seed/glow-basic/600/400",config:{color:"rgba(0, 153, 255, 0.6)",blurPx:12,spreadPx:2,hoverMultiplier:1.4}},{name:"强霓虹辉光",description:"品红大模糊半径，悬停强度放大约 1.6 倍。",src:"https://picsum.photos/seed/glow-neon/600/400",config:{color:"rgba(255, 0, 128, 0.7)",blurPx:24,spreadPx:4,hoverMultiplier:1.6}},{name:"柔和暖光",description:"暖橙色低饱和辉光，适配温馨主题。",src:"https://picsum.photos/seed/glow-warm/600/400",config:{color:"rgba(255, 170, 0, 0.5)",blurPx:18,spreadPx:2,hoverMultiplier:1.3}}],tw=["加载成功后自动为卡片加发光阴影","悬停增强辉光强度","颜色 / 模糊 / 扩散均可调","智能定位外层卡片，避免被父容器 overflow 裁剪","卸载时自动还原原始阴影"],nw=["商品主图聚焦","精选 / 推荐位强调","卡片悬停交互反馈","暗色背景下的视觉点睛"],ow=["辉光优先作用在外层卡片（向上两层），以规避父容器 overflow:hidden 把光晕裁掉。","插件在 onUnmount 还原原始 box-shadow，不会污染其它样式。","与 CustomEffects 的 containerStyle 叠加时，两者都会合并进容器样式。"],rw={name:Hv,description:Gv,since:qv,tags:Qv,events:Kv,methods:Yv,methodsNote:Xv,config:Zv,example:Jv,examples:ew,features:tw,useCases:nw,notes:ow},sw="CDNFallbackPlugin",iw="CDN 回退：主 CDN 域名加载失败时，按序切换备用 CDN 域名（保留路径与查询参数），实现跨厂商容灾，避免单点故障导致破图。",aw="2.0.0",lw=["network","网络","CDN","容灾"],cw=[{name:"onUnmount",when:"组件卸载前执行一次",description:"释放监听、定时器与观察器；与 onMount 成对出现，避免泄漏"},{name:"onLoadError",when:"加载失败（网络错误、解码失败、超时）",description:"返回 true 表示错误已被处理（如切换备用源），否则继续走默认降级"},{name:"onSrcChange",when:"src 变化、切换到新图时",description:"重置状态、清理旧缓存、重新进入懒加载判定"}],uw=[],dw="只读取 context 字段（props / state / data），不调用上下文方法",pw=[{name:"cdnBases",type:"string[]",description:'备用 CDN 基址列表，首个即主用 CDN。e.g. ["https://cdn1.example.com", "https://cdn2.example.com"]'}],mw=`import { LazyLoadImageCore, createCDNFallbackPlugin, withPlugins } from "vane-lazy-image";

const LazyImage = withPlugins(LazyLoadImageCore, [
  createCDNFallbackPlugin({
    cdnBases: ["https://cdn1.example.com", "https://cdn2.example.com"],
  }),
]);

<LazyImage src="https://cdn0.example.com/photo.jpg" alt="CDN 回退示例" />`,gw=[{name:"多 CDN 回退",description:"主用 picsum.photos 命中；真实故障场景填入备用域名可自动切换（演示用同源避免 404）。",src:"https://picsum.photos/seed/cdn/800/600",config:{cdnBases:["https://picsum.photos","https://fastly.picsum.photos"]}}],fw=["onLoad 用 cdnBases[0] 作为主用 CDN 重写 host","onLoadError 按序切换下一个 CDN 并改写 img.src 触发重试","切换时保留路径 / 查询参数，附加 cdnFallback 缓存破坏参数"],hw=["多活 CDN、跨云厂商容灾","主源站故障时无缝切到备用源"],yw=["cdnBases 为必填，首个即主用 CDN","演示用同源 CDN 避免 404；生产请填入真实备用域名，主域失败会自动切换","切换逻辑替换协议 / host / port，路径与 query 不变"],vw={name:sw,description:iw,since:aw,tags:lw,events:cw,methods:uw,methodsNote:dw,config:pw,example:mw,examples:gw,features:fw,useCases:hw,notes:yw},ww="CacheIDBPlugin",xw="IndexedDB 持久缓存：跨会话缓存图片 Blob/dataURL，支持 TTL。",bw="2.0.0",Pw=["cache","缓存"],$w=[{name:"onUnmount",when:"组件卸载前执行一次",description:"释放监听、定时器与观察器；与 onMount 成对出现，避免泄漏"},{name:"onLoad",when:"加载流程开始、需要确定最终图片地址时",description:"自定义加载逻辑，返回最终图片 URL（objectURL / dataURL / 原地址）"},{name:"onLoadSuccess",when:"图片成功解码可显示时",description:"拿到最终 displaySrc 做后续动作（上报、预取下张、淡入）"},{name:"onSrcChange",when:"src 变化、切换到新图时",description:"重置状态、清理旧缓存、重新进入懒加载判定"},{name:"cache:hit",when:"命中 IndexedDB 缓存、跳过网络请求时",description:"携带 { level, src }，可用于统计缓存命中率"}],Sw=[],Cw="只读取 context 字段（props / state / data），不调用上下文方法",Lw=[{name:"enabled",type:"boolean",default:"true",description:"是否启用 IndexedDB 缓存（关闭后每次都走网络）"},{name:"dbName",type:"string",default:'"LLI-Cache"',description:"IndexedDB 数据库名，多实例共用同一个库"},{name:"storeName",type:"string",default:'"images"',description:"对象仓库名，缓存条目存在该 store 下"},{name:"ttlMs",type:"number",default:"604800000",description:"过期时间（毫秒）"},{name:"debug",type:"boolean",description:"是否输出读写 / 命中调试日志"}],Iw=`const LazyImage = withPlugins(LazyLoadImageCore, [
  createIDBCachePlugin({
    dbName: "LLI-Cache",
    storeName: "images",
    ttlMs: 7 * 24 * 60 * 60 * 1000, // 7 天
  }),
]);`,kw=[{name:"默认持久缓存",description:"跨会话缓存图片 Blob，刷新 / 重开应用仍命中，秒开头部图。",config:{ttlMs:6048e5}},{name:"自定义库与过期",description:"独立库名隔离业务数据，30 天过期。",config:{dbName:"App-Img",storeName:"photos",ttlMs:2592e6}}],_w=["用 IndexedDB 持久化图片 Blob / dataURL","支持 TTL（默认 7 天），过期自动清理","优先存 Blob，其次 dataURL，节省空间"],Ew=["离线优先 / PWA 图片缓存","重开应用仍需秒开的头部图、用户头像"],Rw=["仅在支持 IndexedDB 的环境生效，SSR / Node 端无副作用。","与 CachePrewarmPlugin 配合可实现“进入视口即落盘”。","多实例请使用不同 dbName / storeName 避免相互覆盖。"],zw={name:ww,description:xw,since:bw,tags:Pw,events:$w,methods:Sw,methodsNote:Cw,config:Lw,example:Iw,examples:kw,features:_w,useCases:Ew,notes:Rw},Ow="CacheMemoryPlugin",Dw="内存 LRU 缓存：会话内缓存图片数据，可配置容量与过期时间。",Mw="2.0.0",jw=["cache","缓存"],Tw=[{name:"onUnmount",when:"组件卸载前执行一次",description:"释放监听、定时器与观察器；与 onMount 成对出现，避免泄漏"},{name:"onLoad",when:"加载流程开始、需要确定最终图片地址时",description:"自定义加载逻辑，返回最终图片 URL（objectURL / dataURL / 原地址）"},{name:"onLoadSuccess",when:"图片成功解码可显示时",description:"拿到最终 displaySrc 做后续动作（上报、预取下张、淡入）"},{name:"onSrcChange",when:"src 变化、切换到新图时",description:"重置状态、清理旧缓存、重新进入懒加载判定"}],Nw=[],Aw="只读取 context 字段（props / state / data），不调用上下文方法",Bw=[{name:"enabled",type:"boolean",default:"true",description:"是否启用内存缓存"},{name:"maxEntries",type:"number",default:"200",description:"LRU 最大条目"},{name:"ttlMs",type:"number",description:"过期时间，默认不过期"},{name:"debug",type:"boolean",default:"false",description:"是否输出 LRU 命中 / 淘汰调试日志"}],Uw=`const LazyImage = withPlugins(LazyLoadImageCore, [
  createMemoryCachePlugin({
    maxEntries: 300,
    ttlMs: 5 * 60 * 1000, // 5 分钟过期
  }),
]);`,Fw=[{name:"默认内存缓存",description:"会话内 LRU 缓存（默认 200 条），同一图片重复访问零网络。",config:{maxEntries:200}},{name:"限定过期时间",description:"5 分钟后条目失效，在命中率与内存占用之间取得平衡。",config:{maxEntries:300,ttlMs:3e5}}],Vw=["会话内 LRU 缓存（默认 200 条）","可选 TTL 过期时间","内存受限时自动淘汰最久未用条目"],Ww=["同一图片在列表 / 详情多处复用","快速来回切换的画廊、相册"],Hw=["内存缓存不跨会话，刷新页面即失效。","需要跨会话持久请配合 IDBCachePlugin。","命中时直接返回已缓存数据，跳过网络请求。"],Gw={name:Ow,description:Dw,since:Mw,tags:jw,events:Tw,methods:Nw,methodsNote:Aw,config:Bw,example:Uw,examples:Fw,features:Vw,useCases:Ww,notes:Hw},qw="CachePrewarmPlugin",Qw="缓存预热：进入视口或挂载时把图片预热到内存/IDB 缓存。",Kw="2.0.0",Yw=["cache","缓存"],Xw=[{name:"onMount",when:"组件挂载完成、插件注册后执行一次（返回的清理函数在 manager.clear 时逆序执行）",description:"初始化副作用：注册监听、起定时器、建观察器；必须返回清理函数或配合 onUnmount 收尾"},{name:"onEnterViewport",when:"元素进入视口（IntersectionObserver）",description:"触发懒加载、开始请求、曝光上报"},{name:"renderOverlay",when:"每次渲染，覆盖在图片容器之上",description:"骨架屏、错误占位、水印、加载动画"}],Zw=[],Jw="只读取 context 字段（props / state / data），不调用上下文方法",e1=[{name:"enabled",type:"boolean",default:"true",description:"是否启用预热"},{name:"trigger",type:'"enter" | "mount"',default:'"enter"',description:"触发时机：进入视口或挂载"},{name:"preferMemory",type:"boolean",default:"true",description:"预热时优先写内存"},{name:"debug",type:"boolean",default:"false",description:"是否输出预热调试日志"},{name:"showBadge",type:"boolean",default:"false",description:"是否在卡片上显示预热状态徽标（便于观察）"}],t1=`const LazyImage = withPlugins(LazyLoadImageCore, [
  createCachePrewarmPlugin({
    trigger: "enter",    // 进入视口即预热
    preferMemory: true,  // 优先写入内存缓存
  }),
]);`,n1=[{name:"进入视口预热",description:"图片刚进视口就提前取回并写入缓存，滚动时无等待、点击放大秒开。",config:{trigger:"enter",preferMemory:!0,showBadge:!0}},{name:"挂载即预热",description:"组件挂载即预热，适合首屏已知必看的图（如详情页主图）。",config:{trigger:"mount",preferMemory:!1}}],o1=["进入视口 / 挂载时提前 fetch 并写入 Memory / IDB 缓存","内置重入保护（prewarming / prewarmed 集合），避免重复预热","优先写入内存（objectURL），跨会话持久交给 IDB"],r1=["商品详情页主图：进入视口即预热，查看大图零延迟","轮播首图：挂载即预热，切换时无白屏"],s1=["依赖 MemoryCachePlugin / IDBCachePlugin 提供底层存储。","预热失败或超时（10s）不影响正常加载，仅跳过预热。","与 CacheIDBPlugin 配合可实现“进入视口即落盘”。"],i1={name:qw,description:Qw,since:Kw,tags:Yw,events:Xw,methods:Zw,methodsNote:Jw,config:e1,example:t1,examples:n1,features:o1,useCases:r1,notes:s1},a1="CaptionPlugin",l1="图片说明文字覆盖层，支持样式定制。",c1="2.0.0",u1=["visual","视觉"],d1=[{name:"renderOverlay",when:"每次渲染，覆盖在图片容器之上",description:"骨架屏、错误占位、水印、加载动画"}],p1=[],m1="只读取 context 字段（props / state / data），不调用上下文方法",g1=[{name:"text",type:"string | ((src?: string) => string)",default:'""',description:"说明文字；可传函数按 src 派生"},{name:"position",type:'"top" | "bottom"',default:'"bottom"',description:"文字位置"},{name:"bg",type:"string",default:"rgba(0,0,0,0.62)",description:"背景色"},{name:"color",type:"string",default:"#fff",description:"文字颜色"}],f1=`// 底部说明文字
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
});`,h1=[{name:"底部说明",description:"半透明黑底白字，落在图片底部作图注。",src:"https://picsum.photos/seed/cap-bottom/600/400",config:{text:"日落海岸线",position:"bottom"}},{name:"顶部标题条",description:"顶部深色背景条，作标题 / 分类标签。",src:"https://picsum.photos/seed/cap-top/600/400",config:{text:"Gallery • 2026",position:"top",bg:"rgba(0,0,0,0.6)",color:"#fff"}},{name:"暖色图注",description:"自定义暖色背景与文字色，贴合活动主题。",src:"https://picsum.photos/seed/cap-warm/600/400",config:{text:"限时特惠",position:"bottom",bg:"rgba(160,48,16,0.88)",color:"#fff"}}],y1=["顶部 / 底部两种位置","背景与文字颜色可定制","文本支持静态或函数动态派生","作为覆盖层渲染，不干扰图片本身"],v1=["图库 / 相册图注","新闻 / 博客配图说明","商品图标题条","活动海报角标文字"],w1=["text 传函数时可按 src 动态生成，但场景示例画廊使用静态文本以保证实时预览。","与 OverlayInfo 的区别：Caption 聚焦单一说明文案，OverlayInfo 更通用（任意文本 + 触发时机）。"],x1={name:a1,description:l1,since:c1,tags:u1,events:d1,methods:p1,methodsNote:m1,config:g1,example:f1,examples:h1,features:y1,useCases:v1,notes:w1},b1="CarouselPlugin",P1="自动轮播（gallery 增强插件）：在工具条渲染 播放/暂停 按钮，按 interval 循环切换主图；悬停图集根容器可暂停。",$1="2.1.0",S1=["gallery","图集","轮播","自动播放"],C1=[{name:"galleryToolbarArea",when:"渲染图库工具栏时",description:"缩放、下载、分享等图库级操作"}],L1=[{name:"setActiveIndex",signature:"ctx.setActiveIndex(i: number): void",description:"切换图库当前激活图索引，并联动缩略图与预加载"}],I1=[{name:"interval",type:"number",default:"3000",description:"每帧停留时长（ms）"},{name:"autoStart",type:"boolean",default:"false",description:"初始是否自动播放"},{name:"pauseOnHover",type:"boolean",default:"true",description:"悬停图集根容器时暂停"}],k1=`import { GalleryCore } from "vane-lazy-image/gallery";
import { createCarouselPlugin } from "vane-lazy-image/custom-plugins/CarouselPlugin";

<GalleryCore images={images} plugins={[createCarouselPlugin({ interval: 2500 })]} />`,_1=[{name:"自动轮播",description:"点击 播放 后每 2.5s 切换一张，悬停图集暂停；计数/指示点同步刷新。",config:{interval:2500,autoStart:!0}}],E1=["播放/暂停按钮","循环切换主图","悬停暂停","与计数/指示点同步"],R1=["商品自动展示","首页轮播图集","展品巡览"],z1=["len<2 时不渲染按钮；activeIndex 为协调态，轮播时缩略条/指示点同步。"],O1={name:b1,description:P1,since:$1,tags:S1,events:C1,methods:L1,config:I1,example:k1,examples:_1,features:E1,useCases:R1,notes:z1},D1="ColorExtractionPlugin",M1="主色提取：canvas 采样图片主色，可设置容器背景或显示色卡。",j1="2.0.0",T1=["visual","视觉"],N1=[{name:"onMount",when:"组件挂载完成、插件注册后执行一次（返回的清理函数在 manager.clear 时逆序执行）",description:"初始化副作用：注册监听、起定时器、建观察器；必须返回清理函数或配合 onUnmount 收尾"},{name:"onLoadSuccess",when:"图片成功解码可显示时",description:"拿到最终 displaySrc 做后续动作（上报、预取下张、淡入）"},{name:"transformProps",when:"渲染前链式改写图片 props",description:"补 sizes / 占位色 / 解码策略等"},{name:"renderOverlay",when:"每次渲染，覆盖在图片容器之上",description:"骨架屏、错误占位、水印、加载动画"}],A1=[],B1="只读取 context 字段（props / state / data），不调用上下文方法",U1=[{name:"setContainerBg",type:"boolean",default:"true",description:"是否把容器背景设为主色"},{name:"sampleSize",type:"number",default:"4",description:"采样步长 px，越大越快越不精确"},{name:"showOverlay",type:"boolean",default:"true",description:"是否在右上角显示主色卡"}],F1=`// 提取主色填充容器 + 显示色卡
const TintImage = withPlugins(LazyLoadImageCore, [
  createColorExtractionPlugin({
    setContainerBg: true,
    sampleSize: 4,
    showOverlay: true,
  }),
]);

<TintImage src="https://picsum.photos/seed/color/600/400" alt="主色提取" crossOrigin="anonymous" />;`,V1=[{name:"主色填充容器 + 色卡",description:"提取主色作为卡片背景，并在右上角显示色卡。",src:"https://picsum.photos/seed/color-full/600/400",config:{setContainerBg:!0,sampleSize:4,showOverlay:!0}},{name:"仅色卡",description:"不改动容器背景，只在角上显示提取到的主色卡。",src:"https://picsum.photos/seed/color-chip/600/400",config:{setContainerBg:!1,showOverlay:!0}}],W1=["canvas 采样主色","可选填充容器背景","可选角标色卡展示","采样精度 / 速度可调"],H1=["按图自动配色（背景 / 阴影）","色彩主题联动","色卡 / 调色板展示","设计工具取色"],G1=['读取像素需在 <img> 上设置 crossOrigin="anonymous"，且图片服务器需允许跨域，否则 canvas 被污染无法取色（会静默失败）。',"sampleSize 越大采样越稀疏、越快但越不精确。"],q1={name:D1,description:M1,since:j1,tags:T1,events:N1,methods:A1,methodsNote:B1,config:U1,example:F1,examples:V1,features:W1,useCases:H1,notes:G1},Q1="ColorSwatchPlugin",K1="颜色选择器：自动提取商品图片主要颜色，支持交互选择、颜色代码显示与悬停放大。",Y1="2.0.0",X1=["ecommerce","电商核心"],Z1=[{name:"onMount",when:"组件挂载完成、插件注册后执行一次（返回的清理函数在 manager.clear 时逆序执行）",description:"初始化副作用：注册监听、起定时器、建观察器；必须返回清理函数或配合 onUnmount 收尾"},{name:"transformProps",when:"渲染前链式改写图片 props",description:"补 sizes / 占位色 / 解码策略等"},{name:"renderOverlay",when:"每次渲染，覆盖在图片容器之上",description:"骨架屏、错误占位、水印、加载动画"}],J1=[],ex="只读取 context 字段（props / state / data），不调用上下文方法",tx=[{name:"maxColors",type:"number",default:"5",description:"提取颜色数量上限"},{name:"showPalette",type:"boolean",default:"true",description:"是否显示色板"},{name:"position",type:'"bottom" | "overlay" | "bottom-center"',default:'"bottom"',description:"色板位置"},{name:"swatchSize",type:"number",default:"32",description:"色块尺寸（px）"},{name:"interactive",type:"boolean",default:"true",description:"是否可点击选择"},{name:"showColorCode",type:"boolean",default:"false",description:"是否显示 HEX 代码"},{name:"gap",type:"number",default:"8",description:"色块间距（px）"},{name:"onColorSelect",type:"(color) => void",default:"undefined",description:"颜色选择回调"},{name:"style",type:"React.CSSProperties",default:"{}",description:"自定义叠加样式"}],nx=`// 1. 可交互色板（点击选择颜色）
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
<SwatchImage src="https://picsum.photos/id/100/500/400" alt="服装图" />;`,ox=[{name:"底部色板（可交互）",description:"点击色块可选择颜色，悬停放大。",src:"https://picsum.photos/id/100/500/400",config:{maxColors:6,showPalette:!0,position:"bottom",interactive:!0,swatchSize:36}},{name:"居中叠加",description:"色板居中浮于图片之上。",src:"https://picsum.photos/id/106/500/400",config:{maxColors:5,showPalette:!0,position:"overlay",interactive:!0,swatchSize:40,gap:10}},{name:"显示颜色代码",description:"每个色块下方显示 HEX 代码。",src:"https://picsum.photos/id/116/500/400",config:{maxColors:5,showPalette:!0,position:"bottom-center",interactive:!0,swatchSize:32,showColorCode:!0,gap:12}},{name:"多颜色小色块",description:"更多颜色、更小色块、更小间距。",src:"https://picsum.photos/id/129/500/400",config:{maxColors:8,showPalette:!0,position:"bottom",interactive:!0,swatchSize:24,gap:6}}],rx=["跨域提示：本示例使用的 picsum.photos 图片没有 CORS 头，无法提取真实颜色，当前显示的是默认演示色。实际使用中请确保图片服务器配置了正确的 CORS 头，或使用同域图片，插件才能正确提取图片的真实颜色。"],sx=["自动提取图片主要颜色","智能过滤黑白和透明色","可配置提取颜色数量","3 种显示位置（底部 / 居中 / 底部居中）","交互式颜色选择","显示 HEX 颜色代码","悬停放大效果","选中状态标识"],ix=["服装多颜色选择","艺术品 / 设计作品配色","家具 / 装饰品颜色筛选","鞋包配色选择","礼品个性化定制"],ax={name:Q1,description:K1,since:Y1,tags:X1,events:Z1,methods:J1,methodsNote:ex,config:tx,example:nx,examples:ox,notes:rx,features:sx,useCases:ix},lx="ComparisonPlugin",cx="前后对比（v2 真实实现）：用可拖拽分隔条对比 beforeSrc / afterSrc 两张图，拖动实时比较差异（如调色前后、装修前后、A/B 图）。不再是写死文字角标。",ux="2.0.0",dx=["other","视觉","对比","交互"],px=[{name:"renderOverlay",when:"每次渲染，覆盖在图片容器之上",description:"骨架屏、错误占位、水印、加载动画"}],mx=[],gx="只读取 context 字段（props / state / data），不调用上下文方法",fx=[{name:"beforeSrc",type:"string",default:"主图 src",description:"左侧（拖动前）对比图；默认用主图"},{name:"afterSrc",type:"string",default:"主图 src",description:"右侧（拖动后）对比图；默认用主图"},{name:"labelBefore",type:"string",default:"前",description:"左图标签文字"},{name:"labelAfter",type:"string",default:"后",description:"右图标签文字"},{name:"start",type:"number",default:"0.5",description:"初始分割位置（0~1）"}],hx=`const CompareImage = withPlugins(LazyLoadImageCore, [
  createComparisonPlugin({
    beforeSrc: "https://picsum.photos/id/1015/800/600",
    afterSrc: "https://picsum.photos/id/1016/800/600",
    labelBefore: "原图", labelAfter: "处理后",
  }),
]);

<CompareImage src="https://picsum.photos/id/1016/800/600" alt="前后对比示例" />;`,yx=[{name:"基础对比",description:"提供 beforeSrc / afterSrc 两张图，拖动中间把手即可对比。",src:"https://picsum.photos/id/1016/800/600",config:{beforeSrc:"https://picsum.photos/id/1015/800/600",afterSrc:"https://picsum.photos/id/1016/800/600",labelBefore:"原图",labelAfter:"处理后"}},{name:"自定义起始位置",description:"start=0.3 让初始分割更偏左。",src:"https://picsum.photos/id/1021/800/600",config:{beforeSrc:"https://picsum.photos/id/1020/800/600",afterSrc:"https://picsum.photos/id/1021/800/600",start:.3}},{name:"单图自对比（调色）",description:"只传 afterSrc，before 用主图，演示同一张图的两种状态。",src:"https://picsum.photos/id/1025/800/600",config:{afterSrc:"https://picsum.photos/id/1025/800/600",labelBefore:"原图",labelAfter:"滤镜"}}],vx=["可拖拽分隔条对比两图（指针/触摸）","左右标签可自定义","初始分割位置可调","左图按分割宽度自适应裁剪，始终铺满容器"],wx=["装修前后 / 调色前后对比","A/B 图组对比","图像增强效果演示","教学 / 设计稿对照"],xx=["v2 起为真实拖拽交互，旧版仅渲染写死文字角标。对比层覆盖在 Core 主图之上，拖动区域占满容器。"],bx={name:lx,description:cx,since:ux,tags:dx,events:px,methods:mx,methodsNote:gx,config:fx,example:hx,examples:yx,features:vx,useCases:wx,notes:xx},Px="ConcurrencyControlPlugin",$x="并发控制：限制同时加载数量，支持按域名分片与网络自适应。",Sx="2.0.0",Cx=["loading","加载策略"],Lx=[{name:"onUnmount",when:"组件卸载前执行一次",description:"释放监听、定时器与观察器；与 onMount 成对出现，避免泄漏"},{name:"onLoad",when:"加载流程开始、需要确定最终图片地址时",description:"自定义加载逻辑，返回最终图片 URL（objectURL / dataURL / 原地址）"},{name:"onLoadSuccess",when:"图片成功解码可显示时",description:"拿到最终 displaySrc 做后续动作（上报、预取下张、淡入）"},{name:"onLoadError",when:"加载失败（网络错误、解码失败、超时）",description:"返回 true 表示错误已被处理（如切换备用源），否则继续走默认降级"}],Ix=[],kx="只读取 context 字段（props / state / data），不调用上下文方法",_x=[{name:"maxConcurrent",type:"number",default:"4",description:"并发上限（4g 情况的上限）"},{name:"scope",type:'"global" | "perHost"',default:'"global"',description:"作用域：全局或按域名分片"},{name:"adaptive",type:"boolean",default:"true",description:"是否根据网络自适应并发（saveData/2g/3g 降低并发）"},{name:"acquireTimeoutMs",type:"number",default:"8000",description:"获取并发许可的超时（毫秒），超时后不阻塞加载，避免饥饿"},{name:"debug",type:"boolean",default:"false",description:"调试输出"}],Ex=`const LazyImage = withPlugins(LazyLoadImageCore, [
  createConcurrencyControlPlugin({
    maxConcurrent: 6,
    scope: "perHost", // 按域名分片，避免单域阻塞
    adaptive: true,    // 弱网自动降低并发
  }),
]);`,Rx=[{name:"全局并发限制",description:"限制整页同时加载不超过 4 张，避免带宽被瞬间打满。",config:{maxConcurrent:4,scope:"global"}},{name:"按域名分片",description:"每个域名独立并发配额，混合多 CDN 时不互相拖累。",config:{maxConcurrent:6,scope:"perHost",adaptive:!0}}],zx=["全局或按域名（perHost）分片并发门控","弱网（saveData / 2g / 3g）下自适应降低并发","acquireTimeoutMs 后不阻塞加载，避免饥饿"],Ox=["瀑布流海量图片，避免一次性发起上百请求","弱网环境限制并发以保住首屏体验"],Dx=["acquireTimeoutMs 保证极端情况下不会永久挂起。","与 ScrollIdle 搭配可进一步错峰、降低峰值并发。","并发许可在加载完成后释放，供队列中下一张使用。"],Mx={name:Px,description:$x,since:Sx,tags:Cx,events:Lx,methods:Ix,methodsNote:kx,config:_x,example:Ex,examples:Rx,features:zx,useCases:Ox,notes:Dx},jx="CounterPlugin",Tx="图片计数指示器（gallery 增强插件）：在工具条渲染「当前 / 总数」，绑定 activeIndex。",Nx="2.1.0",Ax=["gallery","图集","计数","指示器"],Bx=[{name:"galleryToolbarArea",when:"渲染图库工具栏时",description:"缩放、下载、分享等图库级操作"}],Ux=[],Fx="只读取 context 字段（props / state / data），不调用上下文方法",Vx=[{name:"prefix",type:"string",default:"",description:"前缀文案"},{name:"separator",type:"string",default:" / ",description:"当前与总数之间的分隔符"}],Wx=`import { GalleryCore } from "vane-lazy-image/gallery";
import { createCounterPlugin } from "vane-lazy-image/custom-plugins/CounterPlugin";

<GalleryCore images={images} plugins={[createCounterPlugin()]} />`,Hx=[{name:"基础计数",description:"工具条显示「3 / 8」，随 activeIndex 刷新。",config:{}}],Gx=["当前/总数计数","绑定 activeIndex","tabular-nums 等宽数字"],qx=["电商商品图集","相册","多图轮播"],Qx=["与 ThumbSync / Indicator 共用同一 activeIndex 协调态。"],Kx={name:jx,description:Tx,since:Nx,tags:Ax,events:Bx,methods:Ux,methodsNote:Fx,config:Vx,example:Wx,examples:Hx,features:Gx,useCases:qx,notes:Qx},Yx="CropPlugin",Xx="焦点裁剪：通过 object-fit: cover 与 object-position 将裁剪焦点设在指定相对坐标，统一多图主体构图。",Zx="2.0.0",Jx=["other","视觉","裁剪"],eb=[{name:"transformProps",when:"渲染前链式改写图片 props",description:"补 sizes / 占位色 / 解码策略等"},{name:"renderOverlay",when:"每次渲染，覆盖在图片容器之上",description:"骨架屏、错误占位、水印、加载动画"}],tb=[],nb="只读取 context 字段（props / state / data），不调用上下文方法",ob=[{name:"enabled",type:"boolean",default:"true",description:"是否启用裁剪"},{name:"focusPoint",type:"{ x: number; y: number }",default:"{ x: 0.5, y: 0.5 }",description:"裁剪焦点(0~1 相对坐标)"},{name:"showLabel",type:"boolean",default:"true",description:"是否在图片左上角显示焦点标识（生产版式建议关闭）"}],rb=`const CropImage = withPlugins(LazyLoadImageCore, [
  createCropPlugin({ focusPoint: { x: 0.3, y: 0.4 } }),
]);

<CropImage src="https://picsum.photos/id/1015/500/300" alt="焦点裁剪示例" />;`,sb=[{name:"居中焦点（默认）",description:"x=0.5,y=0.5，主体居中裁切。",src:"https://picsum.photos/id/1015/500/300",config:{focusPoint:{x:.5,y:.5}}},{name:"左上方焦点",description:"x=0.3,y=0.3，主体偏左上裁切。",src:"https://picsum.photos/id/1021/500/300",config:{focusPoint:{x:.3,y:.3}}},{name:"右下焦点",description:"x=0.7,y=0.7，突出右下主体。",src:"https://picsum.photos/id/1026/500/300",config:{focusPoint:{x:.7,y:.7}}}],ib=["object-position 焦点裁剪","cover 填充","任意焦点坐标","可关闭","overlay 标识焦点（showLabel 可关）"],ab=["头像/封面统一构图","商品主图裁剪","列表缩略图","跨尺寸适配"],lb=["当前为最小实现：通过 CSS object-position 模拟裁剪焦点；加载容器需固定宽高以体现裁切效果。","showLabel: false 可隐藏左上角焦点标识，适合直接接入真实版式。"],cb={name:Yx,description:Xx,since:Zx,tags:Jx,events:eb,methods:tb,methodsNote:nb,config:ob,example:rb,examples:sb,features:ib,useCases:ab,notes:lb},ub="CustomEffectsPlugin",db="自定义效果逃逸舱：把内置视觉插件覆盖不到的任意 CSS 效果（filter / transform / transition / className）直接注入图片与容器，无需新造组件。旧版 CustomEffects 展示页的 v2 等效形态。",pb="2.0.0",mb=["visual","视觉","自定义"],gb=[{name:"onUnmount",when:"组件卸载前执行一次",description:"释放监听、定时器与观察器；与 onMount 成对出现，避免泄漏"},{name:"onLoadSuccess",when:"图片成功解码可显示时",description:"拿到最终 displaySrc 做后续动作（上报、预取下张、淡入）"},{name:"transformProps",when:"渲染前链式改写图片 props",description:"补 sizes / 占位色 / 解码策略等"}],fb=[],hb="只读取 context 字段（props / state / data），不调用上下文方法",yb=[{name:"imageStyle",type:"React.CSSProperties",default:"{}",description:'应用到 <img> 的任意内联样式，如 { filter: "contrast(1.2) saturate(1.4)" }'},{name:"imageClassName",type:"string",default:'""',description:"附加到 <img> 的 className"},{name:"containerStyle",type:"React.CSSProperties",default:"{}",description:"应用到容器（卡片）的任意内联样式"},{name:"containerClassName",type:"string",default:'""',description:"附加到容器的 className"},{name:"hoverImageStyle",type:"React.CSSProperties",default:"{}",description:'悬停时叠加到 <img> 的样式（移出还原），如 { transform: "scale(1.08)" }'}],vb=`// 任意 CSS 效果逃逸舱：内置插件没有的视觉，直接以样式注入
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

<ArtImage src="https://picsum.photos/seed/custom/600/400" alt="自定义效果" />;`,wb=[{name:"复古胶片滤镜（静态）",description:"sepia + 对比度 + 饱和度组合，模拟胶片质感，并给容器加圆角。",src:"https://picsum.photos/seed/custom-film/600/400",config:{imageStyle:{filter:"sepia(0.45) contrast(1.1) saturate(1.3)",transition:"filter 240ms ease"},containerStyle:{borderRadius:16,overflow:"hidden",boxShadow:"0 6px 20px rgba(0,0,0,0.18)"}}},{name:"悬停放大 + 轻微旋转",description:"平常静态，鼠标悬停时图片放大并旋转 2°，移出自动还原。",src:"https://picsum.photos/seed/custom-hover/600/400",config:{imageStyle:{transition:"transform 220ms ease"},hoverImageStyle:{transform:"scale(1.08) rotate(2deg)"}}},{name:"叠加到内置插件之上",description:"与 BorderGlow / Caption 等内置插件叠加：用逃逸舱补一个渐变描边。",src:"https://picsum.photos/seed/custom-combo/600/400",config:{imageClassName:"custom-art-frame",containerStyle:{padding:6,background:"linear-gradient(135deg,#ff9a9e,#fad0c4)",borderRadius:12}}}],xb=["注入任意 CSS filter（模糊 / 灰度 / 复古 / 色相旋转等）","注入任意 transform（缩放 / 旋转 / 位移）","为 <img> 与容器分别附加 className 与内联样式","hoverImageStyle 支持悬停态，移出自动还原","优先级靠前，可叠加在其它视觉插件之上","无需为一次性效果新建组件，几行配置即可"],bb=["内置视觉插件未覆盖的特殊滤镜 / 调色需求","活动主题需要临时换肤、加描边 / 圆角","悬停微交互（放大、旋转、投影）","演示或 A/B 实验时的快速视觉验证","替代旧版 CustomEffects 展示页的任意效果组合"],Pb=["imageStyle / containerStyle 合并进核心渲染的 style，后者优先级更高（叠加而非覆盖）。","插件会自动保留核心自带的 opacity 渐显：你给 imageStyle.transition 设值时，会追加 opacity 180ms 而非覆盖它。","hoverImageStyle 通过注入一条纯 CSS `:hover` 规则实现，由浏览器原生处理进入/离开——不触碰 React 受控的内联样式，因此不会出现「移出后图片消失」的旧问题。","与内置插件叠加时，建议把 CustomEffects 放在 withPlugins 数组靠前位置（其 priority=50 已处理）。","需要函数式动态样式时，可在业务侧先算出 style 对象再传入，本插件保持配置式以便文档化。"],$b={name:ub,description:db,since:pb,tags:mb,events:gb,methods:fb,methodsNote:hb,config:yb,example:vb,examples:wb,features:xb,useCases:bb,notes:Pb},Sb="DataSaverPlugin",Cb="省流模式：saveData 开启时降低质量参数并禁用预加载。",Lb="2.0.0",Ib=["loading","加载策略"],kb=[{name:"transformProps",when:"渲染前链式改写图片 props",description:"补 sizes / 占位色 / 解码策略等"}],_b=[],Eb="只读取 context 字段（props / state / data），不调用上下文方法",Rb=[{name:"respectSaveData",type:"boolean",default:"true",description:"仅在 navigator.connection.saveData=true 时降质（关闭则强制降质）"},{name:"fallbackQuality",type:"number",default:"0.6",description:"0..1"},{name:"disablePreload",type:"boolean",default:"true",description:"省流量模式下禁用 preload / prefetch 预取"},{name:"qualityParam",type:"string",default:'"quality"',description:'query param name, e.g. "quality" or "q"'}],zb=`const LazyImage = withPlugins(LazyLoadImageCore, [
  createDataSaverPlugin({
    respectSaveData: true, // 尊重系统省流开关
    fallbackQuality: 0.5,  // 省流时质量降到 0.5
    qualityParam: "q",     // 追加 ?q=0.5
  }),
]);`,Ob=[{name:"尊重系统省流",description:"检测到 saveData 时自动降质并禁用预加载，仅在省流模式下生效。",config:{respectSaveData:!0,fallbackQuality:.5,qualityParam:"q"}},{name:"始终省流",description:"忽略系统开关，始终追加低质量参数，适合极端省流场景。",config:{respectSaveData:!1,fallbackQuality:.4,disablePreload:!0}}],Db=["读取 navigator.connection.saveData，开启时自动降质","自动追加质量查询参数（如 ?q=0.6）","可选禁用预加载以进一步省流"],Mb=["移动端弱流量用户自动减负","按运营策略全局降质"],jb=["依赖业务 CDN 支持对应质量参数，否则参数无效。","respectSaveData=false 时按 fallbackQuality 强制降质（无视系统开关）。","与 ImageOptimization 叠加时，省流质量会进一步覆盖优化质量。"],Tb={name:Sb,description:Cb,since:Lb,tags:Ib,events:kb,methods:_b,methodsNote:Eb,config:Rb,example:zb,examples:Ob,features:Db,useCases:Mb,notes:jb},Nb="DecodeAfterIdlePlugin",Ab="空闲解码：图片加载成功后延迟到浏览器空闲时段再执行 img.decode()，避免大图解码阻塞主线程，提升交互流畅度。",Bb="2.0.0",Ub=["loading","加载策略","解码","性能"],Fb=[{name:"onLoadSuccess",when:"图片成功解码可显示时",description:"拿到最终 displaySrc 做后续动作（上报、预取下张、淡入）"},{name:"transformProps",when:"渲染前链式改写图片 props",description:"补 sizes / 占位色 / 解码策略等"}],Vb=[],Wb="只读取 context 字段（props / state / data），不调用上下文方法",Hb=[{name:"enabled",type:"boolean",default:"true",description:"是否启用空闲解码"},{name:"timeoutMs",type:"number",default:"600",description:"最长等待空闲的兜底时间(ms)"}],Gb=`import { LazyLoadImageCore, createDecodeAfterIdlePlugin, withPlugins } from "vane-lazy-image";

const LazyImage = withPlugins(LazyLoadImageCore, [
  createDecodeAfterIdlePlugin({ enabled: true, timeoutMs: 1000 }),
]);

<LazyImage src="https://picsum.photos/seed/decode/1200/800" alt="空闲解码示例" />`,qb=[{name:"默认空闲解码",description:"成功后于空闲时段执行 decode，并设置 decoding=async。",src:"https://picsum.photos/seed/decode/1200/800",config:{}},{name:"自定义超时",description:"放宽最长等待空闲时间到 1000ms。",src:"https://picsum.photos/seed/decode-timeout/1200/800",config:{timeoutMs:1e3}}],Qb=["成功后 requestIdleCallback 内调用 img.decode()",'自动设置 decoding="async"',"requestIdleCallback 不可用时回退 setTimeout"],Kb=["图片密集型信息流防止解码卡顿","首屏后延迟解码，优先保证交互响应"],Yb=["timeoutMs 控制最长等待空闲的兜底时间","decode 失败被静默忽略，不影响显示"],Xb={name:Nb,description:Ab,since:Bb,tags:Ub,events:Fb,methods:Vb,methodsNote:Wb,config:Hb,example:Gb,examples:qb,features:Qb,useCases:Kb,notes:Yb},Zb="DepthMapPlugin",Jb="3D 视差深度效果：鼠标跟随的倾斜 / 视差 / 浮动 / 3D 旋转，带光泽与阴影，纯 CSS transforms 无依赖。",eP="2.0.0",tP=["interaction","视觉效果与交互","visual"],nP=[{name:"renderOverlay",when:"每次渲染，覆盖在图片容器之上",description:"骨架屏、错误占位、水印、加载动画"}],oP=[],rP="只读取 context 字段（props / state / data），不调用上下文方法",sP=[{name:"style",type:'"tilt" | "parallax" | "float" | "rotate-3d"',default:'"tilt"',description:"深度效果样式"},{name:"intensity",type:"number",default:"0.5",description:"效果强度 0~1"},{name:"maxTilt",type:"number",default:"20",description:"最大倾斜角度"},{name:"enablePerspective",type:"boolean",default:"true",description:"启用透视效果"},{name:"perspective",type:"number",default:"1000",description:"透视距离（px）"},{name:"enableGlare",type:"boolean",default:"true",description:"启用光泽效果"},{name:"glareColor",type:"string",default:'"rgba(255, 255, 255, 0.3)"',description:"光泽颜色"},{name:"glareOpacity",type:"number",default:"0.5",description:"光泽不透明度 0~1"},{name:"enableShadow",type:"boolean",default:"true",description:"启用阴影"},{name:"transitionDuration",type:"number",default:"300",description:"过渡时长（毫秒）"},{name:"resetOnLeave",type:"boolean",default:"true",description:"离开时重置"}],iP=`// 1. 鼠标跟随倾斜
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
});`,aP=[{name:"tilt 倾斜（鼠标跟随）",description:"鼠标移动时图片随指针方向倾斜，带光泽高光，质感类似实体卡片。",src:"https://picsum.photos/id/122/400/300",config:{style:"tilt",maxTilt:15,intensity:.5,enableGlare:!0}},{name:"parallax 视差",description:"图片内部图层随鼠标产生位移差，营造纵深感。",src:"https://picsum.photos/id/129/400/300",config:{style:"parallax",intensity:.6,enablePerspective:!0,perspective:1e3}},{name:"rotate-3d 3D 旋转",description:"围绕多轴的 3D 旋转，配合阴影更具立体感。",src:"https://picsum.photos/id/133/400/300",config:{style:"rotate-3d",intensity:.7,enableShadow:!0,resetOnLeave:!0}},{name:"float 浮动",description:"轻微持续上下浮动的呼吸感，适合装饰性产品图。",src:"https://picsum.photos/id/142/400/300",config:{style:"float",intensity:.4,enableGlare:!1}}],lP=["4 种深度样式（倾斜 / 视差 / 浮动 / 3D 旋转）","鼠标跟随实时响应","光泽（glare）与阴影可开关并调参","透视距离可调","离开时一键重置（resetOnLeave）","纯 CSS transforms，无依赖"],cP=["产品 3D 展示","卡片悬浮交互","3D 封面 / 海报","作品集与个人主页","落地页英雄区","会员 / 旗舰商品位"],uP=["效果依赖鼠标移动产生视差，静态截图仅为初始平面态；移动设备体验有限，建议作为渐进增强。","intensity 与 maxTilt 控制幅度，强度过高在低端设备上可能引起卡顿，可按需下调。"],dP={name:Zb,description:Jb,since:eP,tags:tP,events:nP,methods:oP,methodsNote:rP,config:sP,example:iP,examples:aP,features:lP,useCases:cP,notes:uP},pP="DominantColorPlugin",mP="主色占位：在加载完成前用指定颜色或 LQIP 采样平均色填充容器背景，减少白屏、提升视觉连贯性。",gP="2.0.0",fP=["other","视觉","占位"],hP=[{name:"onMount",when:"组件挂载完成、插件注册后执行一次（返回的清理函数在 manager.clear 时逆序执行）",description:"初始化副作用：注册监听、起定时器、建观察器；必须返回清理函数或配合 onUnmount 收尾"}],yP=[],vP="只读取 context 字段（props / state / data），不调用上下文方法",wP=[{name:"color",type:"string",default:"rgba(0,0,0,0.06)",description:"指定背景色（未提供时尝试从 lqip 采样）"},{name:"lqipSrc",type:"string | ((src) => string)",default:"undefined",description:"低清预览图地址或生成函数（用于采样平均色）"}],xP=`const ColorImage = withPlugins(LazyLoadImageCore, [
  createDominantColorPlugin({
    lqipSrc: (src) => src + "?w=20", // 用小图采样主色
  }),
]);

<ColorImage src="https://picsum.photos/id/1015/500/300" alt="主色占位示例" />;`,bP=[{name:"指定背景色",description:"直接指定浅灰背景，加载前不白屏。",src:"https://picsum.photos/id/1015/500/300",config:{color:"#e9ecef"}},{name:"LQIP 采样主色",description:"用小图采样平均色填充（跨域图需 CORS，失败则回退默认色）。",src:"https://picsum.photos/id/1021/500/300",config:{lqipSrc:"https://picsum.photos/id/1021/20/20"}},{name:"暖色背景",description:"指定暖色背景，营造色调一致感。",src:"https://picsum.photos/id/1026/500/300",config:{color:"#f8d7da"}}],PP=["指定颜色占位","LQIP 采样平均色","加载前不白屏","采样失败安全回退","可关闭"],$P=["相册/画廊占位","Pinterest 风布局","慢网白屏治理","品牌色调统一"],SP=["lqipSrc 采样需要图片服务器配置 CORS 头；跨域失败会自动回退到 color（默认浅灰），不影响加载。"],CP={name:pP,description:mP,since:gP,tags:fP,events:hP,methods:yP,methodsNote:vP,config:wP,example:xP,examples:bP,features:PP,useCases:$P,notes:SP},LP="DownloadButtonPlugin",IP="下载按钮：为图片添加一键下载功能，支持多位置、自定义样式、悬停显示与生命周期回调。",kP="2.0.0",_P=["ecommerce","电商核心"],EP=[{name:"renderOverlay",when:"每次渲染，覆盖在图片容器之上",description:"骨架屏、错误占位、水印、加载动画"}],RP=[],zP="只读取 context 字段（props / state / data），不调用上下文方法",OP=[{name:"filename",type:"string",default:"undefined",description:"下载文件名"},{name:"position",type:'"top-left" | "top-right" | "bottom-left" | "bottom-right"',default:'"top-right"',description:"按钮位置"},{name:"size",type:'"small" | "medium" | "large"',default:'"medium"',description:"按钮尺寸"},{name:"buttonStyle",type:"React.CSSProperties",default:"{}",description:"自定义按钮样式"},{name:"showOnHover",type:"boolean",default:"false",description:"仅悬停时显示"},{name:"onBeforeDownload",type:"(src) => void | Promise<void>",default:"undefined",description:"下载前回调（可做权限校验）"},{name:"onDownloadSuccess",type:"(filename) => void",default:"undefined",description:"下载成功回调"},{name:"onDownloadError",type:"(error) => void",default:"undefined",description:"下载失败回调"},{name:"customIcon",type:"ReactNode",default:"undefined",description:"自定义图标"},{name:"tooltipText",type:"string",default:'"下载图片"',description:"提示文案"}],DP=`// 1. 右上角下载按钮，成功后回调
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
<DownloadImage src="https://picsum.photos/id/1015/500/300" alt="可下载图片" />;`,MP=[{name:"基础下载功能",description:"点击右上角下载按钮，保存图片（文件名 my-image.jpg）。",src:"https://picsum.photos/id/1015/500/300",config:{filename:"my-image.jpg",position:"top-right",size:"medium"}},{name:"悬停显示按钮",description:"默认隐藏，鼠标悬停图片左上角出现大号下载按钮。",src:"https://picsum.photos/id/1018/500/300",config:{position:"top-left",size:"large",showOnHover:!0,tooltipText:"点击下载高清图片"}},{name:"自定义位置和大小",description:"左下角小号绿色下载按钮。",src:"https://picsum.photos/id/1019/500/300",config:{position:"bottom-left",size:"small",buttonStyle:{backgroundColor:"rgba(52, 199, 89, 0.9)"}}},{name:"自定义按钮样式",description:"右下角红色方形下载按钮。",src:"https://picsum.photos/id/1020/500/300",config:{position:"bottom-right",size:"medium",buttonStyle:{backgroundColor:"rgba(255, 59, 48, 0.9)",borderRadius:"8px",border:"none"},tooltipText:"下载原图"}},{name:"下载生命周期回调",description:"下载前后触发回调（可权限校验 / 统计上报）；示例中省略函数，见用法示例。",src:"https://picsum.photos/id/1021/500/300",config:{filename:"premium-photo.jpg",position:"top-right",size:"large"}},{name:"自定义下载图标",description:"示例以默认图标呈现；可用 customIcon 替换为自定义图标。",src:"https://picsum.photos/id/1022/500/300",config:{position:"top-right",size:"medium",buttonStyle:{backgroundColor:"rgba(88, 86, 214, 0.9)"}}}],jP=["下载提示：下载需要图片 URL 支持 CORS，否则可能失败；跨域图片需服务器设置 Access-Control-Allow-Origin；filename 应包含合适的文件扩展名（.jpg / .png 等）；大文件下载时会有短暂延迟，建议显示加载状态；移动端下载体验可能因浏览器而异；可在 onBeforeDownload 中进行权限检查。"],TP=["一键下载（点击按钮即可下载图片）","多位置支持（4 个角落）","自定义样式（大小 / 颜色 / 形状）","悬停显示模式","生命周期回调（下载前 / 后 / 失败）","自定义图标"],NP=["图片网站（用户下载高清图）","设计平台（下载设计作品）","新闻媒体","电商平台（下载商品图片）","在线教育（下载教学资料）","企业官网（下载宣传图）"],AP={name:LP,description:IP,since:kP,tags:_P,events:EP,methods:RP,methodsNote:zP,config:OP,example:DP,examples:MP,notes:jP,features:TP,useCases:NP},BP="ErrorBadgePlugin",UP="错误徽标：图片加载失败（或回退成功后）在指定角落显示错误徽标，便于在大批量图片列表中快速定位失败项。",FP="2.0.0",VP=["error","错误处理","错误反馈"],WP=[{name:"onLoadError",when:"加载失败（网络错误、解码失败、超时）",description:"返回 true 表示错误已被处理（如切换备用源），否则继续走默认降级"},{name:"renderOverlay",when:"每次渲染，覆盖在图片容器之上",description:"骨架屏、错误占位、水印、加载动画"}],HP=[],GP="只读取 context 字段（props / state / data），不调用上下文方法",qP=[{name:"text",type:"string | ((context: LazyImageContext) => string)",default:'"Error"',description:"徽标文字；支持函数按 ctx 动态生成（函数型仅顶层示例展示）"},{name:"position",type:'"top-left" | "top-right" | "bottom-left" | "bottom-right" | "center"',default:'"top-right"',description:"徽标定位角落"},{name:"bgColor",type:"string",default:'"rgba(220, 53, 69, 0.85)"',description:"背景色"},{name:"color",type:"string",default:'"#fff"',description:"文字颜色"},{name:"fontSize",type:"number",default:"12",description:"字号(px)"},{name:"padding",type:"string",default:'"2px 6px"',description:"内边距"},{name:"borderRadius",type:"number",default:"4",description:"圆角(px)"},{name:"zIndex",type:"number",default:"100",description:"层级，默认较高避免被其它覆盖层遮挡"},{name:"persistAfterFallback",type:"boolean",default:"true",description:"回退图加载成功后是否仍显示徽标"}],QP=`import { LazyLoadImageCore, createErrorBadgePlugin, withPlugins } from "vane-lazy-image";

const LazyImage = withPlugins(LazyLoadImageCore, [
  createErrorBadgePlugin({
    text: (ctx) => \`加载失败: \${ctx.src}\`,
    position: "bottom-right",
    bgColor: "rgba(220,53,69,0.9)",
  }),
]);

// 故意触发失败以观察徽标
<LazyImage src="https://invalid.example.com/x.png" alt="错误徽标示例" />`,KP=[{name:"默认错误徽标",description:"加载失败后，在右上角显示红底 Error 徽标。",src:"https://invalid.example.com/error-badge.png",config:{}},{name:"自定义文案与位置",description:"底部右侧、深色背景 + 高亮文字的失败徽标。",src:"https://invalid.example.com/error-badge-2.png",config:{text:"图片加载失败",position:"bottom-right",bgColor:"rgba(0,0,0,0.7)",color:"#ffd166"}}],YP=["加载或回退失败后，在图片角落显示错误徽标","支持 5 种定位（四角 + 居中）与背景/文字/字号/圆角定制","persistAfterFallback：回退图已显示仍保留徽标，便于排查","通过 sharedData 标记 had-error，与 FallbackImage / RetryOnError / ErrorOverlay 联动"],XP=["图片墙 / 商品列表快速识别加载失败项","大批量图片加载健康度可视化"],ZP=["text 支持函数型 (ctx) => string，但函数无法进入静态预览配置，仅顶层示例展示","默认 zIndex=100，高于多数覆盖层，避免被遮挡","与 ErrorOverlay 区别：徽标是轻量角标，覆盖层是整图遮罩"],JP={name:BP,description:UP,since:FP,tags:VP,events:WP,methods:HP,methodsNote:GP,config:qP,example:QP,examples:KP,features:YP,useCases:XP,notes:ZP},e$="ErrorOverlayPlugin",t$="错误覆盖层：图片加载失败时显示半透明遮罩与可选『重试』按钮，引导用户手动重试，适用于商品主图等关键图。",n$="2.0.0",o$=["error","错误处理","错误反馈","重试"],r$=[{name:"renderOverlay",when:"每次渲染，覆盖在图片容器之上",description:"骨架屏、错误占位、水印、加载动画"}],s$=[],i$="只读取 context 字段（props / state / data），不调用上下文方法",a$=[{name:"message",type:"string | ((context: LazyImageContext) => string)",default:"undefined（回退『加载失败』）",description:"遮罩提示文案；支持函数按 ctx 动态生成（函数型仅顶层示例展示）"},{name:"background",type:"string",default:'"rgba(220, 53, 69, 0.18)"',description:"遮罩背景色"},{name:"color",type:"string",default:'"#b00020"',description:"文字颜色"},{name:"zIndex",type:"number",default:"10",description:"遮罩层级"},{name:"showRetry",type:"boolean",default:"true",description:"是否显示重试按钮"},{name:"retryText",type:"string",default:'"重试"',description:"重试按钮文字"},{name:"persistAfterFallback",type:"boolean",default:"true",description:"回退图加载成功后是否仍显示遮罩"}],l$=`import { LazyLoadImageCore, createErrorOverlayPlugin, withPlugins } from "vane-lazy-image";

const LazyImage = withPlugins(LazyLoadImageCore, [
  createErrorOverlayPlugin({
    message: (ctx) => \`图片加载失败：\${ctx.src}\`,
    retryText: "点我重试",
  }),
]);

// 故意触发失败以观察遮罩与重试按钮
<LazyImage src="https://invalid.example.com/x.png" alt="错误覆盖层示例" />`,c$=[{name:"默认重试遮罩",description:"失败时整图遮罩 + 重试按钮（默认文案『重试』）。",src:"https://invalid.example.com/error-overlay.png",config:{retryText:"重试"}},{name:"自定义文案与配色",description:"深色遮罩 + 白色文字 + 自定义提示文案。",src:"https://invalid.example.com/error-overlay-2.png",config:{message:"图片暂时无法加载",background:"rgba(0,0,0,0.4)",color:"#fff"}}],u$=["失败时整图半透明遮罩 + 可选重试按钮","重试通过 cache-bust 参数（?retry=时间戳）重新请求，绕过缓存","自定义文案 / 背景 / 文字色 / 层级","persistAfterFallback：回退后仍显示遮罩"],d$=["商品主图 / 头图失败后友好提示并支持手动重试","与 RetryOnError 组合：自动重试 + 手动重试双保险"],p$=["showRetry 默认开启；message 支持函数型（仅顶层示例展示）","重试逻辑直接改写 img.src，不依赖外部状态","点击重试使用 Date.now() 做缓存破坏，确保重新发起请求"],m$={name:e$,description:t$,since:n$,tags:o$,events:r$,methods:s$,methodsNote:i$,config:a$,example:l$,examples:c$,features:u$,useCases:d$,notes:p$},g$="ErrorTrackingPlugin",f$="错误追踪：在图片加载失败时上报失败详情（地址 / 错误信息 / 网络 / 设备 / 次数）到自定义函数或上报端点，并可显示错误计数角标，用于生产环境图片错误监控。",h$="2.0.0",y$=["error","错误处理","监控","可观测"],v$=[{name:"onLoadError",when:"加载失败（网络错误、解码失败、超时）",description:"返回 true 表示错误已被处理（如切换备用源），否则继续走默认降级"},{name:"renderOverlay",when:"每次渲染，覆盖在图片容器之上",description:"骨架屏、错误占位、水印、加载动画"}],w$=[],x$="只读取 context 字段（props / state / data），不调用上下文方法",b$=[{name:"reportEndpoint",type:"string",description:"错误上报端点（POST JSON，带 5s 超时与 keepalive）"},{name:"report",type:"(payload: any) => void",description:"自定义上报函数（与端点二选一或并存）"},{name:"showBadge",type:"boolean",default:"false",description:"是否显示错误计数角标（需显式开启）"},{name:"badgeText",type:"string",default:'"Error"',description:"角标前缀文字"},{name:"badgeColor",type:"string",default:'"#fff"',description:"角标文字色"},{name:"badgeBg",type:"string",default:'"rgba(220,53,69,0.8)"',description:"角标背景色"}],P$=`import { LazyLoadImageCore, createErrorTrackingPlugin, withPlugins } from "vane-lazy-image";

const LazyImage = withPlugins(LazyLoadImageCore, [
  createErrorTrackingPlugin({
    report: (payload) => {
      console.warn("图片加载失败", payload);
    },
    showBadge: true,
  }),
]);

// 故意触发失败以观察上报与角标
<LazyImage src="https://invalid.example.com/x.png" alt="错误追踪示例" />`,$$=[{name:"错误计数角标",description:"开启角标，失败后右上角显示累计错误次数。",src:"https://invalid.example.com/error-tracking.png",config:{showBadge:!0,badgeText:"Err"}},{name:"端点上报",description:"失败后 POST 上报到采集端点（演示端点可能 404，代码已静默忽略）。",src:"https://invalid.example.com/error-tracking-2.png",config:{reportEndpoint:"/api/img-errors",showBadge:!0}}],S$=["onLoadError 采集 src / message / network / device / 累计次数","内置 1 秒防抖，避免高频重复上报","report 自定义函数 或 reportEndpoint 端点二选一 / 并存","可选角标显示错误次数"],C$=["生产环境图片错误率监控与告警","定位经常性失败的图片源 / CDN"],L$=["showBadge 默认 false，需显式开启才显示角标","端点上报带 5s 超时与 keepalive，页面卸载也能送达","report 为函数型，无法进入静态预览配置，仅顶层示例展示"],I$={name:g$,description:f$,since:h$,tags:y$,events:v$,methods:w$,methodsNote:x$,config:b$,example:P$,examples:$$,features:S$,useCases:C$,notes:L$},k$="EventLoggerPlugin",_$="事件日志：在控制台记录图片加载全生命周期事件（before-load / load-success / load-error / enter-viewport / leave-viewport / progress），便于调试与监控。",E$="2.0.0",R$=["other","监控","调试"],z$=[{name:"onBeforeLoad",when:"发起图片请求之前",description:"返回 false 可阻断本次加载（如权限校验、占位策略）"},{name:"onLoadSuccess",when:"图片成功解码可显示时",description:"拿到最终 displaySrc 做后续动作（上报、预取下张、淡入）"},{name:"onLoadError",when:"加载失败（网络错误、解码失败、超时）",description:"返回 true 表示错误已被处理（如切换备用源），否则继续走默认降级"},{name:"onProgress",when:'加载进度更新（由 withPlugins 订阅 bus 的 "progress" 桥接）',description:"展示进度条 / 百分比；仅对支持进度上报的 loader 生效"},{name:"onEnterViewport",when:"元素进入视口（IntersectionObserver）",description:"触发懒加载、开始请求、曝光上报"},{name:"onLeaveViewport",when:"元素离开视口",description:"暂停 / 中止在途请求、回收资源"}],O$=[],D$="只读取 context 字段（props / state / data），不调用上下文方法",M$=[{name:"enabled",type:"boolean",default:"true",description:"是否启用日志"},{name:"prefix",type:"string",default:'"[LLI]"',description:"日志前缀，便于过滤"}],j$=`const LogImage = withPlugins(LazyLoadImageCore, [
  createEventLoggerPlugin({ prefix: "[IMG]" }),
]);

<LogImage src="https://picsum.photos/id/1015/500/300" alt="事件日志示例" />;`,T$=[{name:"默认日志",description:"使用默认 [LLI] 前缀记录全部事件。",src:"https://picsum.photos/id/1015/500/300",config:{enabled:!0}},{name:"自定义前缀",description:"改用 [IMG] 前缀，便于在控制台分组过滤。",src:"https://picsum.photos/id/1021/500/300",config:{prefix:"[IMG]"}},{name:"关闭日志",description:"enabled=false 时不输出任何日志。",src:"https://picsum.photos/id/1026/500/300",config:{enabled:!1}}],N$=["全生命周期事件记录","可自定义前缀","可关闭","零业务侵入"],A$=["调试加载流程","加载监控埋点","性能问题排查","教学演示"],B$=["仅用于开发/调试，生产环境建议按需关闭以避免控制台噪音。"],U$={name:k$,description:_$,since:E$,tags:R$,events:z$,methods:O$,methodsNote:D$,config:M$,example:j$,examples:T$,features:N$,useCases:A$,notes:B$},F$="ExifOrientationPlugin",V$="EXIF 方向：根据图片自带的方向信息（EXIF Orientation）自动校正显示，避免手机竖拍照片横显。",W$="2.0.0",H$=["a11y","可访问性","加载策略"],G$=[{name:"transformProps",when:"渲染前链式改写图片 props",description:"补 sizes / 占位色 / 解码策略等"}],q$=[],Q$="只读取 context 字段（props / state / data），不调用上下文方法",K$=[{name:"enabled",type:"boolean",default:"true",description:"是否启用方向校正"}],Y$=`const OrientImage = withPlugins(LazyLoadImageCore, [
  createExifOrientationPlugin({ enabled: true }),
]);

<OrientImage src="https://picsum.photos/id/1015/500/300" alt="方向校正示例" />;`,X$=[{name:"启用方向校正（默认）",description:"imageOrientation: from-image，跟随 EXIF 方向。",src:"https://picsum.photos/id/1015/500/300",config:{enabled:!0}},{name:"关闭校正",description:"enabled=false 时不注入方向样式。",src:"https://picsum.photos/id/1021/500/300",config:{enabled:!1}}],Z$=["按 EXIF Orientation 自动校正","imageOrientation: from-image","无需手动旋转","可关闭"],J$=["手机/相机照片","用户上传图","竖拍横显修复"],eS=["依赖浏览器对 image-orientation: from-image 的支持，现代浏览器均已支持。"],tS={name:F$,description:V$,since:W$,tags:H$,events:G$,methods:q$,methodsNote:Q$,config:K$,example:Y$,examples:X$,features:Z$,useCases:J$,notes:eS},nS="FadeInPlugin",oS="加载完成后淡入显示，可自定义时长与缓动函数。",rS="2.0.0",sS=["visual","视觉"],iS=[{name:"onMount",when:"组件挂载完成、插件注册后执行一次（返回的清理函数在 manager.clear 时逆序执行）",description:"初始化副作用：注册监听、起定时器、建观察器；必须返回清理函数或配合 onUnmount 收尾"},{name:"onLoadSuccess",when:"图片成功解码可显示时",description:"拿到最终 displaySrc 做后续动作（上报、预取下张、淡入）"}],aS=[],lS="只读取 context 字段（props / state / data），不调用上下文方法",cS=[{name:"durationMs",type:"number",default:"400",description:"淡入时长 ms"},{name:"easing",type:"string",default:"ease",description:"缓动函数（CSS easing）"}],uS=`// 加载完成后淡入
const FadeImage = withPlugins(LazyLoadImageCore, [
  createFadeInPlugin({ durationMs: 450 }),
]);

<FadeImage src="https://picsum.photos/seed/fadein/600/400" alt="淡入" />;`,dS=[{name:"默认淡入",description:"450ms 标准 ease 淡入，干净利落。",src:"https://picsum.photos/seed/fadein-default/600/400",config:{durationMs:450}},{name:"慢速缓出",description:"800ms ease-out，让图片「缓缓浮现」。",src:"https://picsum.photos/seed/fadein-slow/600/400",config:{durationMs:800,easing:"ease-out"}}],pS=["加载成功淡入显示","时长可调","缓动函数可定制（ease / ease-out / cubic-bezier 等）","与 BlurUp 互补"],mS=["画廊 / 相册图片入场","内容型站点图片显现","与滚动进入联动的柔和出现","任意需要「渐显」的场景"],gS=["easing 接受任意 CSS timing-function 字符串。","与 Transition 不同，FadeIn 仅处理「淡入」单一维度，更简单。"],fS={name:nS,description:oS,since:rS,tags:sS,events:iS,methods:aS,methodsNote:lS,config:cS,example:uS,examples:dS,features:pS,useCases:mS,notes:gS},hS="FallbackImagePlugin",yS="兜底图：图片加载失败时自动切换到备用图片地址，避免出现破图空白，是最基础的失败降级手段。",vS="2.0.0",wS=["network","网络","兜底","降级"],xS=[{name:"onLoadError",when:"加载失败（网络错误、解码失败、超时）",description:"返回 true 表示错误已被处理（如切换备用源），否则继续走默认降级"}],bS=[],PS="只读取 context 字段（props / state / data），不调用上下文方法",$S=[{name:"fallbackSrc",type:"string",description:'兜底图地址，建议使用始终可访问的占位图或 data URI。e.g. "/404.jpg"'}],SS=`import { LazyLoadImageCore, createFallbackImagePlugin, withPlugins } from "vane-lazy-image";

const LazyImage = withPlugins(LazyLoadImageCore, [
  createFallbackImagePlugin({ fallbackSrc: "/404.jpg" }),
]);

<LazyImage src="https://invalid.example.com/broken.png" alt="兜底图示例" />`,CS=[{name:"基础兜底图",description:"原图失败 → 自动切换到兜底图正常显示（演示用始终可访问的占位图）。",src:"https://invalid.example.com/broken.png",config:{fallbackSrc:"https://picsum.photos/seed/fallback/400/300"}}],LS=["onLoadError 直接改写 img.src 为兜底地址","标记 had-error，供 ErrorBadge 等插件联动","兜底成功后仍可配合其它错误插件展示状态"],IS=["保证任何失败都不出现破图","与错误徽标 / 追踪组合，兜底 + 可观测"],kS=["fallbackSrc 为必填；建议使用始终可访问的占位图或 data URI，避免兜底本身再失败","兜底成功后若仍有 ErrorBadge(persistAfterFallback)，可继续显示徽标便于排查"],_S={name:hS,description:yS,since:vS,tags:wS,events:xS,methods:bS,methodsNote:PS,config:$S,example:SS,examples:CS,features:LS,useCases:IS,notes:kS},ES="FavoritePlugin",RS="收藏切换（gallery 增强插件）：在工具条渲染心形按钮，绑定 context.favorited 协调态，点击切换并回调 onChange。",zS="2.1.0",OS=["gallery","图集","收藏","喜欢"],DS=[{name:"galleryToolbarArea",when:"渲染图库工具栏时",description:"缩放、下载、分享等图库级操作"}],MS=[{name:"setFavorited",signature:"ctx.setFavorited(v: boolean): void",description:"写入收藏态并触发重渲染（收藏按钮的唯一致入口）"}],jS=[{name:"onChange",type:"(favorited: boolean) => void",default:"-",description:"切换时回调（持久化/上报）"},{name:"activeColor",type:"string",default:"#ff5a5f",description:"激活态颜色"}],TS=`import { GalleryCore } from "vane-lazy-image/gallery";
import { createFavoritePlugin } from "vane-lazy-image/custom-plugins/FavoritePlugin";

<GalleryCore images={images} plugins={[createFavoritePlugin({ onChange: setFav })]} />`,NS=[{name:"收藏商品",description:"点击心形在 ♡/♥ 间切换，激活态变红；onChange 上报调用方做持久化。",config:{}}],AS=["心形切换","协调态绑定","onChange 回调","激活色可配"],BS=["商品收藏","心愿单","喜欢标记"],US=["favorited 为 useState 协调态，切换即重渲染；不跨会话持久化（由 onChange 接管）。"],FS={name:ES,description:RS,since:zS,tags:OS,events:DS,methods:MS,config:jS,example:TS,examples:NS,features:AS,useCases:BS,notes:US},VS="FetchLoaderPlugin",WS="fetch 流式加载器：将图片以 blob/objectURL 形式加载，支持进度上报（speed/ETA）、超时、指数退避重试、请求去重与 objectURL 自动回收。高优先级（domain priority 10），先于其他插件执行。",HS="2.0.0",GS=["loading","加载策略"],qS=[{name:"onUnmount",when:"组件卸载前执行一次",description:"释放监听、定时器与观察器；与 onMount 成对出现，避免泄漏"},{name:"onLoad",when:"加载流程开始、需要确定最终图片地址时",description:"自定义加载逻辑，返回最终图片 URL（objectURL / dataURL / 原地址）"},{name:"onSrcChange",when:"src 变化、切换到新图时",description:"重置状态、清理旧缓存、重新进入懒加载判定"},{name:"progress",when:"流式加载进度更新时",description:"广播 { loaded, total }，桥接到 onProgress 钩子"}],QS=[],KS="只读取 context 字段（props / state / data），不调用上下文方法",YS=[{name:"enabled",type:"boolean",default:"true",description:"是否启用 fetch 加载（关闭后走浏览器默认加载）"},{name:"cacheKeyFn",type:"(src: string) => string",description:"自定义去重键，默认使用 src"},{name:"maxCacheSize",type:"number",description:"in-flight 请求缓存最大条目数"},{name:"maxControllers",type:"number",description:"AbortController 缓存上限，淘汰时自动 abort"},{name:"maxObjectUrls",type:"number",description:"objectURL 缓存上限，淘汰时自动 revokeObjectURL"},{name:"timeout",type:"number",default:"30000",description:"单次请求超时（毫秒）"},{name:"maxRetries",type:"number",default:"3",description:"最大重试次数（4xx 不重试）"},{name:"retryDelay",type:"number",default:"1000",description:"首次重试延迟（毫秒）"},{name:"retryBackoff",type:"number",default:"2",description:"重试退避倍数"}],XS=`const LazyImage = withPlugins(LazyLoadImageCore, [
  createFetchLoaderPlugin({
    timeout: 20000,    // 20s 超时
    maxRetries: 5,     // 最多重试 5 次
    retryBackoff: 2,   // 指数退避
  }),
]);`,ZS=[{name:"默认 fetch 加载",description:"流式加载 + 真实进度（速度 / ETA）+ 自动去重与 objectURL 回收。",config:{timeout:3e4,maxRetries:3,retryBackoff:2}},{name:"弱网增强重试",description:"更长超时与更多重试，适合不稳定网络环境。",config:{timeout:45e3,maxRetries:6,retryDelay:1500,retryBackoff:2}}],JS=["以 fetch 把图片读为 Blob/objectURL，支持流式进度（速度 / ETA）","请求超时 + 指数退避重试（4xx 不重试）","in-flight 请求去重、AbortController / objectURL 自动回收","高优先级（domain priority 10），先于其它插件执行"],eC=["需要真实下载进度条的大图 / 原图","不稳定网络下需要重试保障"],tC=["关闭 enabled 则走浏览器默认 <img> 加载。","objectURL 由插件在卸载 / 淘汰时自动 revoke，避免内存泄漏。","cacheKeyFn 为函数，需在“用法示例”中以代码传入；静态预览使用纯配置。"],nC={name:VS,description:WS,since:HS,tags:GS,events:qS,methods:QS,methodsNote:KS,config:YS,example:XS,examples:ZS,features:JS,useCases:eC,notes:tC},oC="FilterPlugin",rC="CSS 滤镜：灰度/复古/亮度/对比度/饱和度，悬停可恢复原图。",sC="2.0.0",iC=["visual","视觉"],aC=[{name:"onUnmount",when:"组件卸载前执行一次",description:"释放监听、定时器与观察器；与 onMount 成对出现，避免泄漏"},{name:"onLoadSuccess",when:"图片成功解码可显示时",description:"拿到最终 displaySrc 做后续动作（上报、预取下张、淡入）"}],lC=[],cC="只读取 context 字段（props / state / data），不调用上下文方法",uC=[{name:"filter",type:'"none" | "grayscale" | "sepia" | "brightness" | "contrast" | "saturate"',default:'"none"',description:"滤镜类型"},{name:"amount",type:"number",default:"undefined",description:"滤镜强度（多数类型 0~1）"},{name:"hover",type:"boolean",default:"false",description:"悬停时恢复原图"}],dC=`// 灰度显示，悬停恢复原彩图
const FilterImage = withPlugins(LazyLoadImageCore, [
  createFilterPlugin({
    filter: "grayscale",
    amount: 1,
    hover: true,
  }),
]);

<FilterImage src="https://picsum.photos/seed/filter/600/400" alt="滤镜" />;`,pC=[{name:"灰度 + 悬停还原",description:"默认灰度，鼠标悬停瞬间恢复彩色，制造焦点对比。",src:"https://picsum.photos/seed/filter-gray/600/400",config:{filter:"grayscale",amount:1,hover:!0}},{name:"复古暖调",description:"sepia 中度做旧，营造怀旧氛围。",src:"https://picsum.photos/seed/filter-sepia/600/400",config:{filter:"sepia",amount:.6}},{name:"高对比增强",description:"提升对比度，让画面更有张力。",src:"https://picsum.photos/seed/filter-contrast/600/400",config:{filter:"contrast",amount:1.4}}],mC=["内置 grayscale / sepia / brightness / contrast / saturate 预设","amount 控制强度","hover 模式悬停恢复原图","纯 CSS filter，零额外绘制开销"],gC=["商品列表统一灰度，hover 高亮","怀旧 / 复古风格相册","强调主体前的视觉降噪","活动主题统一调色"],fC=["hover:true 时滤镜在鼠标移入时移除、移出时恢复。","需要组合滤镜（如 contrast+saturate）或更复杂效果，可用 CustomEffectsPlugin 的 imageStyle.filter 任意写。"],hC={name:oC,description:rC,since:sC,tags:iC,events:aC,methods:lC,methodsNote:cC,config:uC,example:dC,examples:pC,features:mC,useCases:gC,notes:fC},yC="FullscreenPlugin",vC="全屏切换（gallery 增强插件）：在工具条渲染 全屏/退出 按钮，对图集根容器调用 requestFullscreen。",wC="2.1.0",xC=["gallery","图集","全屏","沉浸式"],bC=[{name:"galleryToolbarArea",when:"渲染图库工具栏时",description:"缩放、下载、分享等图库级操作"}],PC=[],$C="只读取 context 字段（props / state / data），不调用上下文方法",SC=[{name:"enterLabel",type:"string",default:"⛶ 全屏",description:"进入全屏按钮文案"},{name:"exitLabel",type:"string",default:"✕ 退出",description:"退出全屏按钮文案"}],CC=`import { GalleryCore } from "vane-lazy-image/gallery";
import { createFullscreenPlugin } from "vane-lazy-image/custom-plugins/FullscreenPlugin";

<GalleryCore images={images} plugins={[createFullscreenPlugin()]} />`,LC=[{name:"沉浸浏览",description:"点击 全屏 将整张图集容器进入全屏（含缩略条/工具条），再点退出恢复。",config:{}}],IC=["全屏/退出按钮","fullscreenchange 同步态","基于 [data-gallery-root] 锚点"],kC=["商品沉浸看款","展会大屏展示","详情页全屏浏览"],_C=["通过当前按钮向上查找 [data-gallery-root] 锚点，不依赖内核暴露 DOM 节点。"],EC={name:yC,description:vC,since:wC,tags:xC,events:bC,methods:PC,methodsNote:$C,config:SC,example:CC,examples:LC,features:IC,useCases:kC,notes:_C},RC="GalleryPlugin",zC="画廊灯箱：图片上叠加打开按钮，进入灯箱或新窗口查看原图。",OC="2.0.0",DC=["visual","视觉"],MC=[{name:"renderOverlay",when:"每次渲染，覆盖在图片容器之上",description:"骨架屏、错误占位、水印、加载动画"}],jC=[],TC="只读取 context 字段（props / state / data），不调用上下文方法",NC=[{name:"buttonText",type:"string",default:'"Open"',description:"打开按钮文案"},{name:"enableLightbox",type:"boolean",default:"true",description:"是否启用内置灯箱"},{name:"overlayZIndex",type:"number",default:"10",description:"灯箱层叠顺序"},{name:"buttonStyle",type:"React.CSSProperties",default:"{}",description:"按钮自定义样式（缩略图场景可缩成小号半透明胶囊）"}],AC=`// 点击按钮进入灯箱查看大图
const GalleryImage = withPlugins(LazyLoadImageCore, [
  createGalleryPlugin({
    buttonText: "查看大图",
    enableLightbox: true,
    overlayZIndex: 20,
  }),
]);

<GalleryImage src="https://picsum.photos/seed/gallery/600/400" alt="画廊" />;`,BC=[{name:"灯箱预览",description:"叠加「查看大图」按钮，点击进入全屏灯箱看原图。",src:"https://picsum.photos/seed/gallery-lb/600/400",config:{buttonText:"查看大图",enableLightbox:!0,overlayZIndex:20}},{name:"新窗口打开",description:"关闭内置灯箱，点击按钮以新窗口打开原图。",src:"https://picsum.photos/seed/gallery-win/600/400",config:{buttonText:"Open",enableLightbox:!1}}],UC=["覆盖层打开按钮","内置灯箱查看大图（默认开启）","可改为新窗口打开","灯箱层级可调"],FC=["电商商品图放大查看","相册 / 作品集灯箱","详情页看图","地图 / 截图放大"],VC=["enableLightbox:false 时按钮以新窗口打开原图，适合轻量场景。","灯箱层级 overlayZIndex 需高于页面其它浮层，避免被遮挡。"],WC={name:RC,description:zC,since:OC,tags:DC,events:MC,methods:jC,methodsNote:TC,config:NC,example:AC,examples:BC,features:UC,useCases:FC,notes:VC},HC="GlitchEffectPlugin",GC="故障艺术效果：赛博朋克风格 RGB 分离 / 扫描线 / 数字失真 / 混合 / 强烈五种风格，纯 CSS 无依赖，支持持续、一次性、悬停触发。",qC="2.0.0",QC=["interaction","视觉效果与交互","visual"],KC=[{name:"renderOverlay",when:"每次渲染，覆盖在图片容器之上",description:"骨架屏、错误占位、水印、加载动画"}],YC=[],XC="只读取 context 字段（props / state / data），不调用上下文方法",ZC=[{name:"style",type:'"rgb-split" | "scan-lines" | "digital" | "glitch-mix" | "intense"',default:'"glitch-mix"',description:"故障风格"},{name:"continuous",type:"boolean",default:"false",description:"是否持续动画"},{name:"duration",type:"number",default:"1000",description:"一次性触发时长（毫秒）"},{name:"intensity",type:"number",default:"0.7",description:"效果强度 0~1"},{name:"triggerOnHover",type:"boolean",default:"false",description:"是否悬停触发"},{name:"rgbOffset",type:"number",default:"3",description:"RGB 分离距离（px）"},{name:"scanLineCount",type:"number",default:"30",description:"扫描线数量"},{name:"animateScanLines",type:"boolean",default:"true",description:"扫描线是否动画"}],JC=`// 1. 持续 RGB 分离故障特效
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
createGlitchEffectPlugin({ style: "glitch-mix", triggerOnHover: true });`,eL=[{name:"glitch-mix 混合（持续）",description:"混合风格默认效果，持续播放，适合做氛围封面。",src:"https://picsum.photos/id/1043/400/300",config:{style:"glitch-mix",continuous:!0,intensity:.7}},{name:"rgb-split RGB 分离（持续）",description:"红蓝通道错位产生色散，赛博朋克典型观感。",src:"https://picsum.photos/id/1062/400/300",config:{style:"rgb-split",continuous:!0,rgbOffset:5}},{name:"scan-lines 扫描线（悬停触发）",description:"叠加扫描线纹理，悬停时启动，平时保持干净。",src:"https://picsum.photos/id/1074/400/300",config:{style:"scan-lines",triggerOnHover:!0,scanLineCount:40,animateScanLines:!0}},{name:"digital 数字失真（一次性）",description:"加载/进入时触发一次数字故障，随后恢复清晰。",src:"https://picsum.photos/id/1080/400/300",config:{style:"digital",continuous:!1,duration:900}},{name:"intense 高强度",description:"强度拉满的强烈故障，冲击力强，适合标题位。",src:"https://picsum.photos/id/1084/400/300",config:{style:"intense",continuous:!0,intensity:1}}],tL=["5 种故障风格（RGB 分离 / 扫描线 / 数字失真 / 混合 / 强烈）","三种触发模式：持续 / 一次性 / 悬停触发","效果强度 0~1 可调","扫描线数量与是否动画可配","RGB 错位距离可调","纯 CSS 实现，无运行时依赖"],nL=["赛博朋克风格站点","海报 / 专辑封面","活动营销页","游戏官网","暗色主题视觉","品牌焕新 / 限时活动"],oL=["持续动画（continuous: true）会一直占用合成层，建议对大图或大量实例谨慎使用。","阅读型内容可用 triggerOnHover: true，仅在鼠标悬停时播放，避免干扰。"],rL={name:HC,description:GC,since:qC,tags:QC,events:KC,methods:YC,methodsNote:XC,config:ZC,example:JC,examples:eL,features:tL,useCases:nL,notes:oL},sL="HotspotPlugin",iL="主图热点标注（gallery 增强插件）：在 galleryOverlay 按百分比定位可交互热点，点击弹出标签气泡（含可选链接）。",aL="2.1.0",lL=["gallery","图集","热点","标注"],cL=[{name:"galleryOverlay",when:"渲染图库大图浮层时",description:"大图视图、切换器、关闭按钮等浮层内容"}],uL=[],dL="只读取 context 字段（props / state / data），不调用上下文方法",pL=[{name:"hotspots",type:"Hotspot[]",default:"[]",description:"热点集合（图集级，所有主图共用），含 x/y(0-100)/label/href?"}],mL=`import { GalleryCore } from "vane-lazy-image/gallery";
import { createHotspotPlugin } from "vane-lazy-image/custom-plugins/HotspotPlugin";

<GalleryCore images={images} plugins={[createHotspotPlugin({ hotspots: [{ x: 50, y: 50, label: "核心卖点" }] })]} />`,gL=[{name:"圈点讲解",description:"在主图叠加红点标记，点击展开卖点文案；可带 href 跳转详情。热点坐标相对主图百分比。",config:{hotspots:[{x:40,y:35,label:"防水面料"},{x:65,y:70,label:"透气网眼"}]}}],fL=["百分比定位","点击气泡","可选链接","多热点"],hL=["商品卖点讲解","局部细节标注","区域介绍"],yL=["hotspots 为图集级（所有主图共用同一组坐标）；气泡 pointerEvents 在带 href 时可点击。"],vL={name:sL,description:iL,since:aL,tags:lL,events:cL,methods:uL,methodsNote:dL,config:pL,example:mL,examples:gL,features:fL,useCases:hL,notes:yL},wL="HoverPrefetchPlugin",xL="悬停预取：当用户将鼠标悬停（或触摸）在图片上时，提前向浏览器插入 preload 链接拉取下一张资源，实现零延迟切换。",bL="2.0.0",PL=["viewport","视口与交互","预取","性能"],$L=[{name:"onMount",when:"组件挂载完成、插件注册后执行一次（返回的清理函数在 manager.clear 时逆序执行）",description:"初始化副作用：注册监听、起定时器、建观察器；必须返回清理函数或配合 onUnmount 收尾"},{name:"onUnmount",when:"组件卸载前执行一次",description:"释放监听、定时器与观察器；与 onMount 成对出现，避免泄漏"},{name:"renderOverlay",when:"每次渲染，覆盖在图片容器之上",description:"骨架屏、错误占位、水印、加载动画"}],SL=[],CL="只读取 context 字段（props / state / data），不调用上下文方法",LL=[{name:"getNextSrc",type:"(context) => string | string[] | Promise<...>",default:"undefined",description:"计算需要预取的下一张图片（函数型，参见用法示例）"},{name:"target",type:'"container" | "image"',default:'"container"',description:"绑定事件的目标（容器或图片元素）"},{name:"trigger",type:'"mouseenter" | "touchstart"',default:'"mouseenter"',description:"触发事件类型"},{name:"as",type:'"image" | "fetch"',default:'"image"',description:"预取资源类型"},{name:"max",type:"number",default:"2",description:"预取的最大数量"},{name:"dedupe",type:"boolean",default:"true",description:"去重，避免重复插入相同的预取链接"},{name:"crossOrigin",type:'"anonymous" | "use-credentials" | null',default:'"anonymous"',description:"跨域策略"},{name:"showBadge",type:"boolean",default:"false",description:"是否在卡片上显示「已预取 N」徽标（便于观察注入效果）"},{name:"debug",type:"boolean",default:"false",description:"是否输出调试日志"}],IL=`const PrefetchImage = withPlugins(LazyLoadImageCore, [
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
<PrefetchImage src="https://picsum.photos/id/1015/500/300" alt="悬停预取示例" />;`,kL=[{name:"容器悬停预取（默认）",description:"鼠标进入容器即插入 preload，预取下一张图片（默认按 URL 末尾数字派生），卡片左上角显示「已预取 N」。",src:"https://picsum.photos/id/1015/500/300",config:{target:"container",trigger:"mouseenter",max:2,as:"image",showBadge:!0}},{name:"图片悬停预取",description:"事件直接绑定在图片元素上。",src:"https://picsum.photos/id/1021/500/300",config:{target:"image",trigger:"mouseenter",max:1}},{name:"触摸预取",description:"移动端用 touchstart 触发预取。",src:"https://picsum.photos/id/1026/500/300",config:{target:"container",trigger:"touchstart",max:1}}],_L=["悬停 / 触摸即预取","容器或图片元素两种绑定目标","mouseenter / touchstart 两种触发","预取数量上限与去重","自定义跨域策略","调试日志输出"],EL=["商品画廊下一张预览","图片轮播预加载","列表项快速切换","移动端触摸预载"],RL=["必须提供 `getNextSrc` 才会真正预取；不传时只绑定事件、不产生请求。","`showBadge: true` 会在卡片上显示「已预取 N」，是验收该插件最直接的方式。"],zL={name:wL,description:xL,since:bL,tags:PL,events:$L,methods:SL,methodsNote:CL,config:LL,example:IL,examples:kL,features:_L,useCases:EL,notes:RL},OL="HoverZoomPlugin",DL="悬停放大：鼠标悬停时放大显示图片局部。",ML="2.0.0",jL=["visual","视觉"],TL=[{name:"onUnmount",when:"组件卸载前执行一次",description:"释放监听、定时器与观察器；与 onMount 成对出现，避免泄漏"},{name:"onLoadSuccess",when:"图片成功解码可显示时",description:"拿到最终 displaySrc 做后续动作（上报、预取下张、淡入）"}],NL=[],AL="只读取 context 字段（props / state / data），不调用上下文方法",BL=[{name:"scale",type:"number",default:"1.08",description:"放大倍数"},{name:"durationMs",type:"number",default:"180",description:"过渡时长 ms"}],UL=`// 悬停放大 1.15 倍
const ZoomImage = withPlugins(LazyLoadImageCore, [
  createHoverZoomPlugin({ scale: 1.15, durationMs: 180 }),
]);

<ZoomImage src="https://picsum.photos/seed/hoverzoom/600/400" alt="悬停放大" />;`,FL=[{name:"悬停放大 1.15",description:"鼠标悬停放大到 1.15 倍，180ms 平滑过渡。",src:"https://picsum.photos/seed/hoverzoom-115/600/400",config:{scale:1.15,durationMs:180}},{name:"轻微放大",description:"克制的 1.08 倍，仅给一点点呼吸感。",src:"https://picsum.photos/seed/hoverzoom-108/600/400",config:{scale:1.08,durationMs:200}}],VL=["悬停平滑放大","放大倍数可调","过渡时长可调","常与 Caption / BorderGlow 叠加"],WL=["商品图悬停预览细节","相册悬停聚焦","卡片悬停微交互","与灯箱配合的轻量前奏"],HL=["放大会溢出原尺寸，通常需父容器 overflow:hidden 裁切，仅放大中心区域。","与 Transition 的 fromScale 不同，HoverZoom 仅在 hover 时触发。"],GL={name:OL,description:DL,since:ML,tags:jL,events:TL,methods:NL,methodsNote:AL,config:BL,example:UL,examples:FL,features:VL,useCases:WL,notes:HL},qL="ImageOptimizationPlugin",QL="图片优化：自动追加宽度/质量/格式查询参数。",KL="2.0.0",YL=["network","网络"],XL=[{name:"transformProps",when:"渲染前链式改写图片 props",description:"补 sizes / 占位色 / 解码策略等"}],ZL=[],JL="只读取 context 字段（props / state / data），不调用上下文方法",e2=[{name:"enabled",type:"boolean",default:"true",description:"是否启用 URL 改写优化"},{name:"maxWidth",type:"number",default:"1920",description:"最大宽度（像素）"},{name:"quality",type:"number",default:"0.85",description:"0..1"},{name:"format",type:'"auto" | "webp" | "jpg" | "png"',default:'"auto"',description:"目标格式；auto 交给浏览器 / CDN 协商"},{name:"widthParam",type:"string",default:'"w"',description:'例如 "w"'},{name:"qualityParam",type:"string",default:'"q"',description:'例如 "q"'},{name:"formatParam",type:"string",default:'"format"',description:'例如 "format"'}],t2=`const LazyImage = withPlugins(LazyLoadImageCore, [
  createImageOptimizationPlugin({
    maxWidth: 1200,
    quality: 0.8,
    format: "webp",
    widthParam: "w",
    qualityParam: "q",
    formatParam: "format",
  }),
]);`,n2=[{name:"自动 webp + 约束宽度",description:"自动选择最优格式（按 Accept 协商 webp），并把宽度限制在 1200。",config:{maxWidth:1200,quality:.8,format:"webp"}},{name:"固定 jpg 中质量",description:"统一输出 jpg、质量 0.7，适合对兼容性要求较高的场景。",config:{maxWidth:800,quality:.7,format:"jpg"}}],o2=["自动追加宽度 / 质量 / 格式查询参数","format=auto 按 Accept 头协商 webp","参数名可配置以适配不同 CDN / 图片网关"],r2=["任意源图统一走优化网关（imgix / 云存储样式）","响应式不同屏宽下发不同尺寸"],s2=["需图片服务支持对应参数，否则仅作为普通查询参数透传。","与 DataSaver 叠加时，省流质量会进一步覆盖此处质量。","format=auto 依赖浏览器 Accept 头，无需手动指定。"],i2={name:qL,description:QL,since:KL,tags:YL,events:XL,methods:ZL,methodsNote:JL,config:e2,example:t2,examples:n2,features:o2,useCases:r2,notes:s2},a2="IndicatorPlugin",l2="圆点指示器（gallery 增强插件）：在工具条渲染圆点，点击第 N 点跳转到对应主图。",c2="2.1.0",u2=["gallery","图集","指示点","进度"],d2=[{name:"galleryToolbarArea",when:"渲染图库工具栏时",description:"缩放、下载、分享等图库级操作"}],p2=[{name:"setActiveIndex",signature:"ctx.setActiveIndex(i: number): void",description:"切换图库当前激活图索引，并联动缩略图与预加载"}],m2=[{name:"size",type:"number",default:"8",description:"圆点直径（px）"},{name:"gap",type:"number",default:"6",description:"圆点间距（px）"},{name:"activeColor",type:"string",default:"#2b7de9",description:"选中圆点颜色"},{name:"idleColor",type:"string",default:"rgba(0,0,0,0.25)",description:"未选中圆点颜色"}],g2=`import { GalleryCore } from "vane-lazy-image/gallery";
import { createIndicatorPlugin } from "vane-lazy-image/custom-plugins/IndicatorPlugin";

<GalleryCore images={images} plugins={[createIndicatorPlugin()]} />`,f2=[{name:"基础指示点",description:"圆点显示位置进度，点击跳转。",config:{}}],h2=["圆点指示器","点击跳转","选中态高亮"],y2=["电商商品图集","轮播进度","相册"],v2=["与 ThumbSync 缩略条互补：缩略条看缩略图、圆点看位置进度。"],w2={name:a2,description:l2,since:c2,tags:u2,events:d2,methods:p2,config:m2,example:g2,examples:f2,features:h2,useCases:y2,notes:v2},x2="InventoryStatusPlugin",b2="库存状态：实时显示商品库存状态（有货/低库存/缺货/预订），支持自动刷新和低库存预警。",P2="2.0.0",$2=["ecommerce","电商核心"],S2=[{name:"renderOverlay",when:"每次渲染，覆盖在图片容器之上",description:"骨架屏、错误占位、水印、加载动画"}],C2=[],L2="只读取 context 字段（props / state / data），不调用上下文方法",I2=[{name:"status",type:'"in-stock" | "out-of-stock" | "low-stock" | "pre-order"',default:'"in-stock"',description:"初始库存状态"},{name:"stockCount",type:"number",default:"undefined",description:"库存数量"},{name:"lowStockThreshold",type:"number",default:"10",description:"低库存阈值"},{name:"showBadge",type:"boolean",default:"true",description:"是否显示角标"},{name:"autoRefresh",type:"boolean",default:"false",description:"是否自动刷新库存"},{name:"refreshInterval",type:"number",default:"30000",description:"刷新间隔（毫秒）"},{name:"fetchStock",type:"() => Promise<{ status?; count? }>",default:"undefined",description:"自定义库存获取函数"},{name:"onStatusChange",type:"(status) => void",default:"undefined",description:"状态变更回调"},{name:"position",type:'"top-left" | "top-right" | "bottom-left" | "bottom-right"',default:'"top-right"',description:"角标位置"},{name:"style",type:"React.CSSProperties",default:"{}",description:"自定义叠加样式"}],k2=`// 1. 静态库存状态
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
<StockImage src="https://picsum.photos/id/164/280/280" alt="商品图" />;`,_2=[{name:"有货（100 件）",description:"绿色角标，显示库存数量。",src:"https://picsum.photos/id/152/280/280",config:{status:"in-stock",stockCount:100,showBadge:!0,position:"top-right"}},{name:"库存紧张（5 件）",description:"低于阈值 → 橙色预警角标。",src:"https://picsum.photos/id/164/280/280",config:{status:"low-stock",stockCount:5,lowStockThreshold:10,showBadge:!0,position:"top-right"}},{name:"缺货",description:"红色缺货角标。",src:"https://picsum.photos/id/177/280/280",config:{status:"out-of-stock",stockCount:0,showBadge:!0,position:"top-right"}},{name:"预订",description:"蓝色预订角标。",src:"https://picsum.photos/id/183/280/280",config:{status:"pre-order",showBadge:!0,position:"top-right"}},{name:"自动刷新库存（每 5 秒）",description:"通过 fetchStock 定时刷新状态（示例中省略函数，可配 interval）。",src:"https://picsum.photos/id/225/400/300",config:{status:"in-stock",stockCount:50,showBadge:!0,autoRefresh:!0,refreshInterval:5e3,position:"top-right"}}],E2=["4 种库存状态：有货 / 低库存 / 缺货 / 预订","显示实时库存数量","低库存阈值预警","自动刷新库存（可配置间隔）","库存变更回调通知","颜色编码（绿=有货 / 橙=低库存 / 红=缺货 / 蓝=预订）"],R2=["电商产品列表页","库存管理系统","在线商城首页","门票 / 课程售卖","限时抢购活动"],z2=["`stockCount <= lowStockThreshold` 时会自动归为「库存紧张」，无需手动改 `status`。","`autoRefresh` 需配合 `refreshInterval` 与 `fetchStock` 才有意义，静态示例页不会轮询。"],O2={name:x2,description:b2,since:P2,tags:$2,events:S2,methods:C2,methodsNote:L2,config:I2,example:k2,examples:_2,features:E2,useCases:R2,notes:z2},D2="LQIPPlugin",M2="低清预览（LQIP）：在清晰图加载期间叠加模糊的小图作为占位，加载完成后自动隐藏，实现渐进式加载体验。",j2="2.0.0",T2=["other","视觉","占位","渐进加载"],N2=[{name:"renderOverlay",when:"每次渲染，覆盖在图片容器之上",description:"骨架屏、错误占位、水印、加载动画"}],A2=[],B2="只读取 context 字段（props / state / data），不调用上下文方法",U2=[{name:"lqipSrc",type:"string | ((src) => string)",default:"undefined",description:"低清预览图地址或生成函数"},{name:"blur",type:"number",default:"12",description:"模糊半径(px)"},{name:"opacity",type:"number",default:"1",description:"不透明度(0~1)"},{name:"zIndex",type:"number",default:"2",description:"叠加层级"}],F2=`const LqipImage = withPlugins(LazyLoadImageCore, [
  createLqipPlugin({ lqipSrc: (src) => src + "?w=20", blur: 14 }),
]);

<LqipImage src="https://picsum.photos/id/1015/500/300" alt="LQIP 示例" />;`,V2=[{name:"模糊小图占位",description:"14px 模糊小图作为加载期占位。",src:"https://picsum.photos/id/1015/500/300",config:{lqipSrc:"https://picsum.photos/id/1015/20/20",blur:14}},{name:"低不透明度",description:"降低占位图不透明度，弱化视觉存在。",src:"https://picsum.photos/id/1021/500/300",config:{lqipSrc:"https://picsum.photos/id/1021/20/20",blur:12,opacity:.6}},{name:"清晰后淡出",description:"加载完成自动隐藏模糊层，过渡到清晰图。",src:"https://picsum.photos/id/1026/500/300",config:{lqipSrc:"https://picsum.photos/id/1026/20/20",blur:16}}],W2=["模糊低清占位","可调模糊/透明度/层级","加载完成自动隐藏","支持函数/字符串来源","渐进式加载"],H2=["渐进式图片加载","慢网占位","画廊/相册","提升感知性能"],G2=["lqipSrc 为函数型配置，静态预览使用字符串小图；函数用法见用法示例。"],q2={name:D2,description:M2,since:j2,tags:T2,events:N2,methods:A2,methodsNote:B2,config:U2,example:F2,examples:V2,features:W2,useCases:H2,notes:G2},Q2="LocalizationPlugin",K2="国际化：根据用户语言环境自动切换图片，支持手动指定、自动检测、自定义检测函数与后备图片。",Y2="2.0.0",X2=["ecommerce","电商核心"],Z2=[{name:"onLoad",when:"加载流程开始、需要确定最终图片地址时",description:"自定义加载逻辑，返回最终图片 URL（objectURL / dataURL / 原地址）"}],J2=[],eI="只读取 context 字段（props / state / data），不调用上下文方法",tI=[{name:"localeMap",type:"Record<string, string>",default:"undefined",description:"语言 → 图片 URL 映射"},{name:"defaultLocale",type:"string",default:'"en"',description:"默认语言（后备）"},{name:"currentLocale",type:"string",default:"undefined",description:"手动指定当前语言"},{name:"autoDetect",type:"boolean",default:"true",description:"是否自动检测浏览器语言"},{name:"detectLocale",type:"() => string",default:"undefined",description:"自定义语言检测函数"},{name:"fallbackSrc",type:"string",default:"undefined",description:"最终后备图片 URL"}],nI=`// 1. 按浏览器语言自动切换图片
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
<I18nImage src="https://picsum.photos/id/1015/500/300" alt="多语言图片" />;`,oI=[{name:"手动切换语言",description:"手动指定 currentLocale 展示对应语言图片（此处以 en 为例）。",src:"https://picsum.photos/id/1015/500/300",config:{localeMap:{en:"https://picsum.photos/id/1015/500/300",zh:"https://picsum.photos/id/1016/500/300",ja:"https://picsum.photos/id/1018/500/300",ko:"https://picsum.photos/id/1019/500/300"},currentLocale:"en",autoDetect:!1,defaultLocale:"en"}},{name:"自动检测浏览器语言",description:"根据浏览器语言自动选择图片（支持 en/zh/fr/de/es）。",src:"https://picsum.photos/id/1020/500/300",config:{localeMap:{en:"https://picsum.photos/id/1020/500/300",zh:"https://picsum.photos/id/1021/500/300",fr:"https://picsum.photos/id/1022/500/300",de:"https://picsum.photos/id/1023/500/300",es:"https://picsum.photos/id/1024/500/300"},autoDetect:!0,defaultLocale:"en"}},{name:"自定义语言检测",description:"通过 detectLocale() 从 localStorage 读取偏好（示例中简写为自动检测）。",src:"https://picsum.photos/id/1025/500/300",config:{localeMap:{en:"https://picsum.photos/id/1025/500/300",zh:"https://picsum.photos/id/1026/500/300",ja:"https://picsum.photos/id/1027/500/300"},defaultLocale:"en",autoDetect:!0}},{name:"后备图片机制",description:"请求的语言（ru）不在映射中 → 显示 fallbackSrc 后备图片。",src:"https://picsum.photos/id/1030/500/300",config:{localeMap:{en:"https://picsum.photos/id/1028/500/300",zh:"https://picsum.photos/id/1029/500/300"},currentLocale:"ru",defaultLocale:"en",fallbackSrc:"https://picsum.photos/id/1030/500/300"}}],rI=["最佳实践：始终提供 defaultLocale 作为后备；localeMap 至少包含常用语言（en、zh 等）；图片 URL 应指向稳定可访问的资源；建议使用 CDN 加速不同地区的图片加载；可结合用户设置和浏览器检测；开发环境建议打开 console 查看语言检测日志。"],sI=["多语言支持（任意语言环境）","自动检测浏览器语言","默认回退语言","自定义检测函数","后备机制（最终后备图片 URL）","动态切换（运行时切换语言）"],iI=["国际化网站","品牌宣传","多语言 App","电商平台（商品本地化展示）","新闻媒体","在线教育"],aI={name:Q2,description:K2,since:Y2,tags:X2,events:Z2,methods:J2,methodsNote:eI,config:tI,example:nI,examples:oI,notes:rI,features:sI,useCases:iI},lI="MemoryPressureAbortPlugin",cI="内存压力降级 + 离开中止（v2 真实实现）：低内存 / 移动端 / 省流时把图片重写为低清版本；离开视口且仍在加载时，调用 context.reset() 真正取消在途元素加载，回收内存。",uI="2.0.0",dI=["loading","加载策略","降质","中止","低端设备"],pI=[{name:"onLoad",when:"加载流程开始、需要确定最终图片地址时",description:"自定义加载逻辑，返回最终图片 URL（objectURL / dataURL / 原地址）"},{name:"onLeaveViewport",when:"元素离开视口",description:"暂停 / 中止在途请求、回收资源"}],mI=[{name:"reset",signature:"ctx.reset(): void",description:"重置到初始状态（清空错误与进度，不主动重新发起加载）"}],gI=[{name:"enabled",type:"boolean",default:"true",description:"是否启用"},{name:"deviceMemoryThreshold",type:"number",default:"4",description:"设备内存 ≤ 该阈值(GB)时启用降质"},{name:"preferOnMobile",type:"boolean",default:"true",description:"移动端或省流模式时强制启用降质"},{name:"lowWidth",type:"number",default:"640",description:"重写到的低清晰度宽度参数"},{name:"abortOnLeave",type:"boolean",default:"true",description:"离开视口且仍在加载时，是否中止在途加载（context.reset）"}],fI=`import { LazyLoadImageCore, createMemoryPressureAbortPlugin, withPlugins } from "vane-lazy-image";

const LazyImage = withPlugins(LazyLoadImageCore, [
  // 命中压力条件时降质；用户滑走仍在加载的图会被中止
  createMemoryPressureAbortPlugin({ lowWidth: 480 }),
]);

<LazyImage src="https://picsum.photos/seed/mem/1200/800" alt="内存压力降级示例" />`,hI=[{name:"默认降级 + 离开中止",description:"低内存/移动端/省流命中即低清；离开视口且在加载中的图会被 context.reset 取消。",src:"https://picsum.photos/seed/mem/1200/800",config:{}},{name:"激进降质",description:"更低宽度 + 移动端强制降质。",src:"https://picsum.photos/seed/mem-aggressive/1200/800",config:{lowWidth:320,deviceMemoryThreshold:8,preferOnMobile:!0}},{name:"仅降质不中止",description:"abortOnLeave=false，只做低清重写，不在离开时取消加载。",src:"https://picsum.photos/seed/mem-noabort/1200/800",config:{abortOnLeave:!1}}],yI=["三条件任一即触发低清重写（onLoad 返回改写 URL）","unsplash / 360buy 优化 w 参数；通用源附加 ?w&auto=format&fit=crop","离开视口且在加载 → context.reset() 真正取消元素在途加载","abortOnLeave 可开关"],vI=["低端设备防 OOM（降质）","快速滑动列表回收在途请求（中止）","弱网 / 省流节省流量"],wI=["中止通过 context.reset() 移除 <img> 元素来取消其下载，是图片元素层面的真实中止；若使用 FetchLoaderPlugin，可在 fetch 层进一步中断。","降质判定依赖 navigator.deviceMemory 与 deviceInfo.type。"],xI={name:lI,description:cI,since:uI,tags:dI,events:pI,methods:mI,config:gI,example:fI,examples:hI,features:yI,useCases:vI,notes:wI},bI="MorphPlugin",PI="形变过渡效果：圆角/缩放/旋转/倾斜/弹性/液态等多种形变动画，纯 CSS transforms，支持加载触发、悬停触发与持续动画。",$I="2.0.0",SI=["interaction","视觉效果与交互","visual"],CI=[{name:"onLoadSuccess",when:"图片成功解码可显示时",description:"拿到最终 displaySrc 做后续动作（上报、预取下张、淡入）"}],LI=[],II="只读取 context 字段（props / state / data），不调用上下文方法",kI=[{name:"type",type:'"circle-to-square" | "square-to-circle" | "rounded-corners" | "scale-morph" | "rotate-morph" | "skew-morph" | "elastic" | "liquid" | "custom"',default:'"elastic"',description:"形变类型"},{name:"duration",type:"number",default:"800",description:"持续时间（毫秒）"},{name:"delay",type:"number",default:"0",description:"延迟（毫秒）"},{name:"easing",type:"string",default:'"cubic-bezier(0.68, -0.55, 0.265, 1.55)"',description:"缓动函数"},{name:"triggerOnHover",type:"boolean",default:"false",description:"是否悬停触发"},{name:"continuous",type:"boolean",default:"false",description:"是否持续动画"},{name:"fromBorderRadius",type:"string",default:'"50%"',description:"rounded-corners 起始圆角"},{name:"toBorderRadius",type:"string",default:'"0%"',description:"rounded-corners 结束圆角"},{name:"fromScale",type:"number",default:"1",description:"scale-morph 起始缩放"},{name:"toScale",type:"number",default:"1",description:"scale-morph 结束缩放"},{name:"fromRotate",type:"number",default:"0",description:"rotate-morph 起始角度"},{name:"toRotate",type:"number",default:"0",description:"rotate-morph 结束角度"},{name:"fromSkew",type:"number",default:"0",description:"skew-morph 起始倾斜"},{name:"toSkew",type:"number",default:"0",description:"skew-morph 结束倾斜"}],_I=`// 1. 弹性形变
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
});`,EI=[{name:"elastic 弹性形变",description:"加载完成后以弹性缓动“弹”入，适合头像与卡片。",src:"https://picsum.photos/id/1080/400/300",config:{type:"elastic",duration:1e3,easing:"cubic-bezier(0.68, -0.55, 0.265, 1.55)"}},{name:"rounded-corners 圆角过渡",description:"从圆形过渡为圆角矩形，强调形态变化。",src:"https://picsum.photos/id/1084/400/300",config:{type:"rounded-corners",fromBorderRadius:"50%",toBorderRadius:"12%",duration:900}},{name:"scale-morph 缩放形变",description:"从 0.85 倍放大到原尺寸，配合淡入更自然。",src:"https://picsum.photos/id/110/400/300",config:{type:"scale-morph",fromScale:.85,toScale:1,duration:800}},{name:"rotate-morph 旋转形变",description:"带角度旋转的进入，动感十足。",src:"https://picsum.photos/id/111/400/300",config:{type:"rotate-morph",fromRotate:-12,toRotate:0,duration:900}},{name:"liquid 液态（持续）",description:"持续液态流动效果，适合做背景或装饰图。",src:"https://picsum.photos/id/119/400/300",config:{type:"liquid",continuous:!0,duration:2e3}}],RI=["9 种形变类型（圆角 / 缩放 / 旋转 / 倾斜 / 弹性 / 液态等）","三种触发：加载触发 / 悬停触发 / 持续动画","圆角、缩放、旋转、倾斜均参数化起止值","弹性缓动可定制","纯 CSS transforms，性能好","无运行时依赖"],zI=["头像形变入场","按钮 / 卡片交互反馈","Logo 动画","加载态过渡","图片墙动态呈现","装饰性背景图"],OI=["continuous: true 会持续播放；配合 triggerOnHover: true 可在鼠标悬停时播放单次，更省资源。","悬停触发的场景需在图片上移动 / 悬停鼠标才能看到形变，静态截图仅展示初始态。"],DI={name:bI,description:PI,since:$I,tags:SI,events:CI,methods:LI,methodsNote:II,config:kI,example:_I,examples:EI,features:RI,useCases:zI,notes:OI},MI="NetworkAnalyticsPlugin",jI="网络分析：上报加载耗时、成功率与 CDN 分布。",TI="2.0.0",NI=["network","网络"],AI=[{name:"onMount",when:"组件挂载完成、插件注册后执行一次（返回的清理函数在 manager.clear 时逆序执行）",description:"初始化副作用：注册监听、起定时器、建观察器；必须返回清理函数或配合 onUnmount 收尾"},{name:"onUnmount",when:"组件卸载前执行一次",description:"释放监听、定时器与观察器；与 onMount 成对出现，避免泄漏"},{name:"onLoadSuccess",when:"图片成功解码可显示时",description:"拿到最终 displaySrc 做后续动作（上报、预取下张、淡入）"},{name:"onLoadError",when:"加载失败（网络错误、解码失败、超时）",description:"返回 true 表示错误已被处理（如切换备用源），否则继续走默认降级"}],BI=[],UI="只读取 context 字段（props / state / data），不调用上下文方法",FI=[{name:"reportEndpoint",type:"string",description:"上报地址（POST JSON）；留空则只在本地统计"},{name:"report",type:"(event: string, data: Record<string, any>) => void",description:"自定义上报函数（若提供则优先使用）"},{name:"trackCDN",type:"boolean",description:"是否按图片域名分组统计，便于比较不同 CDN 表现"}],VI=`const LazyImage = withPlugins(LazyLoadImageCore, [
  createNetworkAnalyticsPlugin({
    trackCDN: true,
    report: (event, data) => {
      // event: "load" | "error" | "cache-hit" ...
      // data:  { src, durationMs, host, cached }
      analytics.track(event, data);
    },
  }),
]);`,WI=[{name:"本地调试上报",description:"未配置端点时写入 console，便于本地观察耗时与命中情况。",config:{trackCDN:!0}},{name:"上报到监控端点",description:"把事件 POST 到监控服务（keepalive，不阻塞页面卸载）。",config:{reportEndpoint:"https://api.example.com/lli",trackCDN:!0}}],HI=["上报加载耗时、成功率、CDN 分布","内置事件去重 + 100ms 防抖，避免刷屏","优先使用自定义 report 函数，其次 reportEndpoint"],GI=["线上图片加载性能监控","定位慢 CDN / 高失败率域名"],qI=["不提供 reportEndpoint 也不提供 report 时，默认 console.debug 输出。","上报事件含 src / host / durationMs / cached 等字段。","report 为函数，需在“用法示例”中以代码传入；静态预览使用纯配置（无端点时仅本地打点）。"],QI={name:MI,description:jI,since:TI,tags:NI,events:AI,methods:BI,methodsNote:UI,config:FI,example:VI,examples:WI,features:HI,useCases:GI,notes:qI},KI="OfflinePlugin",YI="离线降级（v2 真实实现）：在线时把资源预热进 Cache Storage；离线时优先从缓存取同域资源，否则回退 offlineSrc / 内置 SVG 占位图，并在离线时显示状态徽标。不再是纯提示层。",XI="2.0.0",ZI=["loading","加载策略","离线","省流"],JI=[{name:"onLoad",when:"加载流程开始、需要确定最终图片地址时",description:"自定义加载逻辑，返回最终图片 URL（objectURL / dataURL / 原地址）"},{name:"renderOverlay",when:"每次渲染，覆盖在图片容器之上",description:"骨架屏、错误占位、水印、加载动画"}],ek=[],tk="只读取 context 字段（props / state / data），不调用上下文方法",nk=[{name:"offlineSrc",type:"string",default:"内置 SVG 离线占位图（data URI）",description:"离线且无缓存时回退的占位图，建议用 data URI 避免再次走网络"},{name:"cacheName",type:"string",default:"vane-lazy-image-offline",description:"Cache Storage 名称，用于预热与离线回退"},{name:"warm",type:"boolean",default:"true",description:"在线时是否把资源写入 Cache Storage 预热"},{name:"showBadge",type:"boolean",default:"true",description:"离线时是否显示「离线模式」徽标"}],ok=`import { LazyLoadImageCore, createOfflinePlugin, withPlugins } from "vane-lazy-image";

const LazyImage = withPlugins(LazyLoadImageCore, [
  // 离线时回退到内置占位图，并在离线时显示徽标
  createOfflinePlugin({}),
]);

// 同域资源在线时会自动预热，离线可直接从缓存读取
<LazyImage src="/images/photo.jpg" alt="离线降级示例" />`,rk=[{name:"默认离线降级",description:"在线正常加载并预热；断网后同域资源走缓存，跨域资源回退到内置 SVG 占位图，并出现「离线模式」徽标。",src:"https://picsum.photos/seed/offline/800/600",config:{}},{name:"自定义离线占位图",description:"指定 offlineSrc 作为断网回退图（建议 data URI）。",src:"https://picsum.photos/seed/offline2/800/600",config:{offlineSrc:"data:image/svg+xml;utf8,%3Csvg xmlns='http://www.w3.org/2000/svg' width='400' height='300'%3E%3Crect width='100%25' height='100%25' fill='%23ffe0b2'/%3E%3Ctext x='50%25' y='50%25' fill='%23e65100' text-anchor='middle' font-size='22'%3E无网络%3C/text%3E%3C/svg%3E"}},{name:"关闭徽标",description:"showBadge=false，仅做离线资源回退，不显示提示。",src:"https://picsum.photos/seed/offline3/800/600",config:{showBadge:!1}}],sk=["在线预热进 Cache Storage（真实写入）","离线从缓存读取同域资源","无缓存回退 offlineSrc / 内置 SVG 占位","在线 / 离线状态统一取自 GlobalContext（全 App 单处监听）+ 状态徽标","warm / showBadge 可开关"],ik=["弱网 / 断网时的优雅降级","离线优先 PWA 应用的图片缓存","省流用户避免无效请求"],ak=["跨域 no-cors 资源缓存后无法读取为 blob，因此跨域图片离线时会回退到 offlineSrc 占位图（预期降级）；同域资源可真正离线显示。","完整 Service Worker 级别离线由宿主应用负责，本插件提供组件级缓存/回退兜底。"],lk={name:KI,description:YI,since:XI,tags:ZI,events:JI,methods:ek,methodsNote:tk,config:nk,example:ok,examples:rk,features:sk,useCases:ik,notes:ak},ck="OverlayInfoPlugin",uk="信息覆盖层：显示自定义文本，支持常显或悬停触发。",dk="2.0.0",pk=["visual","视觉"],mk=[{name:"renderOverlay",when:"每次渲染，覆盖在图片容器之上",description:"骨架屏、错误占位、水印、加载动画"}],gk=[],fk="只读取 context 字段（props / state / data），不调用上下文方法",hk=[{name:"content",type:"string | ((context: LazyImageContext) => string)",default:'""',description:"覆盖层文本；可传函数按 context 派生"},{name:"position",type:'"top" | "bottom" | "center"',default:'"bottom"',description:"文本位置"},{name:"background",type:"string",default:"rgba(0,0,0,0.62)",description:"背景色"},{name:"color",type:"string",default:"#fff",description:"文字颜色"},{name:"fontSize",type:"number",default:"12",description:"字号 px"},{name:"padding",type:"string",default:"6px 10px",description:"内边距"},{name:"borderRadius",type:"number",default:"0",description:"圆角 px"},{name:"zIndex",type:"number",default:"2",description:"层叠顺序"},{name:"showWhen",type:'"always" | "loading" | "loaded" | "error"',default:'"always"',description:"何时显示"},{name:"trigger",type:'"always" | "hover"',default:'"always"',description:"触发方式"}],yk=`// 底部信息条（常显）
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
});`,vk=[{name:"底部信息条（常显）",description:"半透明黑底白字信息条，常显于底部。",src:"https://picsum.photos/seed/overlay-bottom/600/400",config:{content:"来源：picsum.photos",position:"bottom",background:"rgba(0,0,0,0.62)",color:"#fff",showWhen:"always",trigger:"always"}},{name:"悬停显示信息",description:"平时干净，鼠标悬停时居中浮出提示文字。",src:"https://picsum.photos/seed/overlay-hover/600/400",config:{content:"悬停查看详情",position:"center",background:"rgba(0,0,0,0.62)",color:"#fff",showWhen:"always",trigger:"hover"}}],wk=["顶部 / 底部 / 居中三位置","文本支持静态或函数动态派生","背景 / 颜色 / 字号 / 圆角可调","可常显或悬停触发","可按加载状态（loading/loaded/error）显示"],xk=["图片来源 / 版权信息","悬停浮出操作提示","加载 / 错误态文案","图库元信息展示"],bk=["content 传函数时可按 context（含 imageState / src）派生，但场景示例画廊用静态文本以保证实时预览。","与 Caption 的区别：OverlayInfo 更通用（任意文本 + 触发时机 + 加载态），Caption 专注单一图注。"],Pk={name:ck,description:uk,since:dk,tags:pk,events:mk,methods:gk,methodsNote:fk,config:hk,example:yk,examples:vk,features:wk,useCases:xk,notes:bk},$k="ParallaxPlugin",Sk="视差滚动：随页面滚动按强度偏移图片位置。",Ck="2.0.0",Lk=["visual","视觉"],Ik=[{name:"onMount",when:"组件挂载完成、插件注册后执行一次（返回的清理函数在 manager.clear 时逆序执行）",description:"初始化副作用：注册监听、起定时器、建观察器；必须返回清理函数或配合 onUnmount 收尾"},{name:"onUnmount",when:"组件卸载前执行一次",description:"释放监听、定时器与观察器；与 onMount 成对出现，避免泄漏"}],kk=[],_k="只读取 context 字段（props / state / data），不调用上下文方法",Ek=[{name:"strength",type:"number",default:"0.2",description:"偏移强度 0..1"},{name:"axis",type:'"y" | "x"',default:'"y"',description:"偏移轴向"}],Rk=`// 垂直视差：滚动时图片缓慢位移
const ParallaxImage = withPlugins(LazyLoadImageCore, [
  createParallaxPlugin({ strength: 0.2, axis: "y" }),
]);

<ParallaxImage src="https://picsum.photos/seed/parallax/600/400" alt="视差" />;`,zk=[{name:"垂直视差",description:"中等强度 y 轴视差，滚动时图片缓移，营造纵深。",src:"https://picsum.photos/seed/parallax-y/600/400",config:{strength:.2,axis:"y"}},{name:"轻微视差",description:"低强度视差，含蓄的层次感，不喧宾夺主。",src:"https://picsum.photos/seed/parallax-light/600/400",config:{strength:.1,axis:"y"}}],Ok=["随滚动偏移图片（y / x 轴）","强度可调（0~1）","纯 transform 实现，性能友好","增强页面纵深与动感"],Dk=["落地页 / Hero 区背景","长图文滚动叙事","作品集视差画廊","需要纵深氛围的视觉场景"],Mk=["视差依赖页面滚动，demo 小卡片内滚动幅度有限，效果在长页面更明显。","strength 过大可能导致图片露出边缘，建议配合 overflow:hidden 容器。"],jk={name:$k,description:Sk,since:Ck,tags:Lk,events:Ik,methods:kk,methodsNote:_k,config:Ek,example:Rk,examples:zk,features:Ok,useCases:Dk,notes:Mk},Tk="PerformanceMonitorPlugin",Nk="性能监控：统计单张图片的加载耗时，可选在四角叠加实时展示耗时面板，并在加载完成时通过 onReport 上报。",Ak="2.0.0",Bk=["other","监控","性能"],Uk=[{name:"onLoadSuccess",when:"图片成功解码可显示时",description:"拿到最终 displaySrc 做后续动作（上报、预取下张、淡入）"},{name:"renderOverlay",when:"每次渲染，覆盖在图片容器之上",description:"骨架屏、错误占位、水印、加载动画"}],Fk=[],Vk="只读取 context 字段（props / state / data），不调用上下文方法",Wk=[{name:"showOverlay",type:"boolean",default:"true",description:"是否在图片上叠加耗时面板"},{name:"overlayPosition",type:'"top-left" | "top-right" | "bottom-left" | "bottom-right"',default:'"top-right"',description:"面板位置（四角）"},{name:"color",type:"string",default:'"#fff"',description:"文字色"},{name:"background",type:"string",default:'"rgba(0,0,0,0.45)"',description:"面板背景"},{name:"onReport",type:"(data: { src; durationMs; network?; device? }) => void",default:"undefined",description:"加载完成上报回调"}],Hk=`const PerfImage = withPlugins(LazyLoadImageCore, [
  createPerformanceMonitorPlugin({
    overlayPosition: "bottom-left",
    onReport: (data) => console.log("perf", data),
  }),
]);

<PerfImage src="https://picsum.photos/id/1015/500/300" alt="性能监控示例" />;`,Gk=[{name:"默认耗时面板",description:"右上角显示 Loaded in N ms。",src:"https://picsum.photos/id/1015/500/300",config:{showOverlay:!0}},{name:"左下角面板",description:"面板移动到左下角。",src:"https://picsum.photos/id/1021/500/300",config:{overlayPosition:"bottom-left"}},{name:"自定义配色",description:"蓝色背景 + 白字，突出展示。",src:"https://picsum.photos/id/1026/500/300",config:{background:"rgba(33,118,255,0.6)",color:"#fff"}}],qk=["加载耗时统计","四角面板可选","自定义配色","onReport 上报","防抖去重"],Qk=["LCP/加载耗时测量","性能优化验证","监控告警","A/B 对比"],Kk=["onReport 为函数型配置，静态预览仅展示面板；函数用法见用法示例。"],Yk={name:Tk,description:Nk,since:Ak,tags:Bk,events:Uk,methods:Fk,methodsNote:Vk,config:Wk,example:Hk,examples:Gk,features:qk,useCases:Qk,notes:Kk},Xk="PreconnectPlugin",Zk="DNS 预连接：提前与图片域名建立连接，可配置跨域。",Jk="2.0.0",e_=["loading","加载策略"],t_=[{name:"onMount",when:"组件挂载完成、插件注册后执行一次（返回的清理函数在 manager.clear 时逆序执行）",description:"初始化副作用：注册监听、起定时器、建观察器；必须返回清理函数或配合 onUnmount 收尾"},{name:"onUnmount",when:"组件卸载前执行一次",description:"释放监听、定时器与观察器；与 onMount 成对出现，避免泄漏"},{name:"onSrcChange",when:"src 变化、切换到新图时",description:"重置状态、清理旧缓存、重新进入懒加载判定"},{name:"renderOverlay",when:"每次渲染，覆盖在图片容器之上",description:"骨架屏、错误占位、水印、加载动画"}],n_=[],o_="只读取 context 字段（props / state / data），不调用上下文方法",r_=[{name:"domains",type:"string[]",description:"额外预连接域名"},{name:"crossOrigin",type:"string | null",description:'"anonymous" | "use-credentials" | null'},{name:"showBadge",type:"boolean",default:"false",description:"是否在卡片上显示「已预连 N」徽标（便于观察注入效果）"}],s_=`const LazyImage = withPlugins(LazyLoadImageCore, [
  createPreconnectPlugin({
    domains: ["https://cdn.example.com", "https://img.example.com"],
    crossOrigin: "anonymous",
  }),
]);`,i_=[{name:"基础预连接",description:"为图片 CDN 域名提前建连，消除首图 DNS/TLS 往返，更快出现。",config:{domains:["https://picsum.photos"],crossOrigin:"anonymous",showBadge:!0}},{name:"多域名预连接",description:"同时预连接多个静态资源域名，适合跨 CDN 的图片源。",config:{domains:["https://picsum.photos","https://fastly.picsum.photos"],crossOrigin:"anonymous"}}],a_=['挂载时注入 <link rel="preconnect">，提前完成 DNS/TCP/TLS 握手',"支持跨域凭证配置（crossOrigin: anonymous / use-credentials）","与浏览器默认预连接策略互补，相同域名不会重复注入"],l_=["图片托管在独立 CDN 域名时，消除首图握手延迟","瀑布流列表首屏涉及多个静态资源域名"],c_=["仅注入预连接提示，不保证一定建连，实际收益取决于浏览器调度。","不宜预连接过多域名，以免占用有限的连接资源。","已在本插件内去重，重复传入相同域名只会注入一次。"],u_={name:Xk,description:Zk,since:Jk,tags:e_,events:t_,methods:n_,methodsNote:o_,config:r_,example:s_,examples:i_,features:a_,useCases:l_,notes:c_},d_="PredictiveLoadingPlugin",p_='预测性预加载（v2 真实实现）：未提供 predict 时，内置启发式按 URL 末尾数字段递增/递减派生「下一张」并注入 <link rel="preload"> 预取；也可传入 predict 自定义预测目标。',m_="2.0.0",g_=["loading","加载策略","预取"],f_=[{name:"onMount",when:"组件挂载完成、插件注册后执行一次（返回的清理函数在 manager.clear 时逆序执行）",description:"初始化副作用：注册监听、起定时器、建观察器；必须返回清理函数或配合 onUnmount 收尾"}],h_=[],y_="只读取 context 字段（props / state / data），不调用上下文方法",v_=[{name:"model",type:'"heuristic" | "ml"',default:'"heuristic"',description:"预测模型；ml 当前同样走启发式（真正模型由 predict 提供）"},{name:"strategy",type:'"increment" | "decrement"',default:'"increment"',description:"内置启发式：派生方向（递增/递减 URL 末尾数字段）"},{name:"predict",type:"(context) => string[] | Promise<string[]>",default:"未设置（用内置启发式）",description:"自定义预测：返回需要预加载的图片链接列表，优先级高于内置启发式"},{name:"maxPreload",type:"number",default:"3",description:"单次最多预取数量"},{name:"as",type:'"image" | "fetch"',default:'"image"',description:"preload 资源类型"},{name:"crossOrigin",type:'"anonymous" | "use-credentials" | null',default:'"anonymous"',description:"跨域策略"}],w_=`const LazyImage = withPlugins(LazyLoadImageCore, [
  // 无 predict：内置启发式按 URL 末尾数字递增预取下 3 张
  createPredictiveLoadingPlugin({ model: "heuristic", strategy: "increment", maxPreload: 3 }),
]);

// 例：src=.../id/1015/ 会预取 .../id/1016/、1017/、1018/
<LazyImage src="https://picsum.photos/id/1015/500/300" alt="预测预加载示例" />;`,x_=[{name:"内置启发式递增",description:"按 URL 末尾数字递增派生下 3 张并预取（如相册下一页）。",src:"https://picsum.photos/id/1015/500/300",config:{model:"heuristic",strategy:"increment",maxPreload:3}},{name:"内置启发式递减",description:"递减派生上一张方向预取。",src:"https://picsum.photos/id/1020/500/300",config:{strategy:"decrement",maxPreload:3}},{name:"自定义预测",description:"用业务上下文决定预加载目标，限制为 3 张。",src:"https://picsum.photos/id/1018/500/300",config:{maxPreload:3}}],b_=["内置启发式真实派生「下一张」并注入 preload（非空头）","predict 自定义预测优先级更高","strategy 递增/递减可选","maxPreload 限制数量，相同 href 不重复注入"],P_=["相册 / 轮播：预加载下一张，切换无白屏","详情页：预加载相关推荐图"],$_=["仅注入 preload 提示，实际加载仍由浏览器调度；preload 在 Network 面板可见（见 HoverPrefetch 同类展示）。","URL 中无数字段时启发式无候选，可改用 predict 显式给出。"],S_={name:d_,description:p_,since:m_,tags:g_,events:f_,methods:h_,methodsNote:y_,config:v_,example:w_,examples:x_,features:b_,useCases:P_,notes:$_},C_="PriceTagPlugin",L_="商品价格标签：在图片上叠加价格信息，支持原价、折扣、节省金额、异步价格获取与淡入动画。",I_="2.0.0",k_=["ecommerce","电商核心"],__=[{name:"renderOverlay",when:"每次渲染，覆盖在图片容器之上",description:"骨架屏、错误占位、水印、加载动画"}],E_=[],R_="只读取 context 字段（props / state / data），不调用上下文方法",z_=[{name:"price",type:"number",default:"undefined",description:"当前价格"},{name:"currency",type:"string",default:'"$"',description:"货币符号"},{name:"position",type:'"top-left" | "top-right" | "bottom-left" | "bottom-right"',default:'"top-right"',description:"标签位置（四角）"},{name:"originalPrice",type:"number",default:"undefined",description:"原价（划线显示）"},{name:"discount",type:"string",default:"undefined",description:"折扣文案，如 “40% OFF”"},{name:"showSavings",type:"boolean",default:"false",description:"是否计算并显示节省金额"},{name:"backgroundColor",type:"string",default:'"#c62828"',description:"标签背景色"},{name:"textColor",type:"string",default:'"#fff"',description:"标签文字色"},{name:"animate",type:"boolean",default:"true",description:"淡入动画"},{name:"style",type:"React.CSSProperties",default:"{}",description:"自定义叠加样式"},{name:"fetchPrice",type:"(context) => Promise<{ price; originalPrice?; discount? }>",default:"undefined",description:"异步获取价格（API 集成）"},{name:"loadingText",type:"string",default:'"加载中..."',description:"异步加载文案"},{name:"errorText",type:"string",default:'"价格获取失败"',description:"异步失败文案"}],O_=`// 1. 组装带价格标签的懒加载图片组件
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
});`,D_=[{name:"完整价格信息（带折扣和节省金额）",description:"原价划线 + 折扣标签 + 自动计算节省金额，落在左下角。",src:"https://picsum.photos/id/180/400/300",config:{price:299.99,currency:"$",position:"bottom-left",originalPrice:499.99,discount:"40% OFF",showSavings:!0}},{name:"简单价格标签",description:"仅当前价 + 货币符号，落在左上角。",src:"https://picsum.photos/id/201/400/300",config:{price:1999,currency:"¥",position:"top-left"}},{name:"自定义样式价格标签",description:"自定义背景色 / 文字色 / 圆角与内边距。",src:"https://picsum.photos/id/250/400/300",config:{price:59.99,currency:"€",position:"bottom-right",backgroundColor:"#4ECDC4",textColor:"#1A535C",style:{borderRadius:"8px",padding:"12px 16px"}}},{name:"异步获取价格（模拟 API）",description:"真实场景通过 fetchPrice 异步拉取价格；示例以静态值代替，可见“查询价格 / 价格查询失败”状态（见用法示例中的 fetchPrice）。",src:"https://picsum.photos/id/260/400/300",config:{currency:"¥",position:"top-right",showSavings:!0,price:1299.99,originalPrice:1999,discount:"限时优惠"}}],M_=["显示当前价格、原价、折扣标签","计算并显示节省金额","支持多种货币符号","4 个位置可选（四角）","淡入动画效果","完全自定义样式","支持异步价格数据获取（API 集成）","显示加载和错误状态"],j_=["电商产品列表","促销活动页面","特价商品展示","移动端商城","从 API 动态获取价格的场景","跨境电商实时汇率转换"],T_=["`fetchPrice` 返回后覆盖静态 `price`，接真实商品价格时用它，不必改组件。","配置 `originalPrice` 且高于 `price` 时展示划线价，`showSavings` 额外显示省额。"],N_={name:C_,description:L_,since:I_,tags:k_,events:__,methods:E_,methodsNote:R_,config:z_,example:O_,examples:D_,features:M_,useCases:j_,notes:T_},A_="PriorityLoadingPlugin",B_="优先级加载：按 high/medium/low 切换 eager/lazy 与 rootMargin。",U_="2.0.0",F_=["loading","加载策略"],V_=[{name:"transformProps",when:"渲染前链式改写图片 props",description:"补 sizes / 占位色 / 解码策略等"}],W_=[],H_="只读取 context 字段（props / state / data），不调用上下文方法",G_=[{name:"priority",type:'"high" | "medium" | "low"',default:'"medium"',description:"加载优先级：high→loading=eager / low→lazy+大 rootMargin / medium→lazy"}],q_=`// LCP / 首屏主图：立即加载
const HeroImage = withPlugins(LazyLoadImageCore, [
  createPriorityLoadingPlugin({ priority: "high" }),
]);

// 折叠区/长列表底部图：延后加载
const BelowImage = withPlugins(LazyLoadImageCore, [
  createPriorityLoadingPlugin({ priority: "low" }),
]);`,Q_=[{name:"首屏 LCP 图（high）",description:"关键图立即 eager 加载，缩短最大内容绘制时间。",config:{priority:"high"}},{name:"折叠区图（low）",description:"非首屏图延后加载，rootMargin 更大，滚动临近才加载。",config:{priority:"low"}}],K_=["high → loading=eager、rootMargin=0，立即加载","low → loading=lazy、rootMargin 更大，更晚加载","medium → 默认 lazy + 适中 rootMargin（约 200px）"],Y_=["把 LCP / 首屏主图设为 high","把长列表底部、折叠内容图设为 low，错峰加载"],X_=["仅调整 loading 与 rootMargin，不会阻塞其它插件生效。","与 ScrollIdle、ConcurrencyControl 叠加时可协同控制加载节奏。","rootMargin 会被合并进核心的 IntersectionObserver 参数。"],Z_={name:A_,description:B_,since:U_,tags:F_,events:V_,methods:W_,methodsNote:H_,config:G_,example:q_,examples:Q_,features:K_,useCases:Y_,notes:X_},J_="ProgressOverlayPlugin",eE="加载进度条覆盖层：百分比文本与 indeterminate 模式。",tE="2.0.0",nE=["visual","视觉"],oE=[{name:"onProgress",when:'加载进度更新（由 withPlugins 订阅 bus 的 "progress" 桥接）',description:"展示进度条 / 百分比；仅对支持进度上报的 loader 生效"},{name:"renderOverlay",when:"每次渲染，覆盖在图片容器之上",description:"骨架屏、错误占位、水印、加载动画"}],rE=[],sE="只读取 context 字段（props / state / data），不调用上下文方法",iE=[{name:"showWhen",type:'"always" | "loading"',default:'"loading"',description:"何时显示"},{name:"height",type:"number",default:"3",description:"进度条高度 px"},{name:"color",type:"string",default:"#4a90e2",description:"进度条颜色"},{name:"background",type:"string",default:"transparent",description:"背景遮罩色"},{name:"showPercentText",type:"boolean",default:"false",description:"是否显示百分比文本"}],aE=`// 顶部进度条 + 百分比文本
const ProgressImage = withPlugins(LazyLoadImageCore, [
  createProgressOverlayPlugin({
    showWhen: "loading",
    height: 3,
    color: "#4a90e2",n    showPercentText: true,
  }),
]);

<ProgressImage src="https://picsum.photos/seed/progress/600/400" alt="进度蒙层" />;`,lE=[{name:"顶部进度条 + 百分比",description:"细进度条置于顶部，并显示实时百分比。",src:"https://picsum.photos/seed/progress-top/600/400",config:{showWhen:"loading",height:3,color:"#4a90e2",showPercentText:!0}},{name:"半透明遮罩 + 百分比",description:"加载期覆盖半透明遮罩，中心显示百分比，适合大图。",src:"https://picsum.photos/seed/progress-mask/600/400",config:{showWhen:"loading",height:4,color:"#22c55e",background:"rgba(0,0,0,0.12)",showPercentText:!0}}],cE=["顶部 / 覆盖式进度条","实时百分比文本","颜色 / 高度 / 背景可调","加载完成后自动消失"],uE=["大图 / 慢网络加载反馈","视频封面缓冲提示","需要明确进度感知的场景","与 Skeleton 配合提升占位体验"],dE=["进度数据来自内核 progress 事件，跨域或缓存命中时可能很快跳到 100%。","与 Skeleton 同时使用时，进度条层级通常高于骨架。"],pE={name:J_,description:eE,since:tE,tags:nE,events:oE,methods:rE,methodsNote:sE,config:iE,example:aE,examples:lE,features:cE,useCases:uE,notes:dE},mE="PromoBadgePlugin",gE="促销角标：在商品图片上显示 NEW/HOT/SALE 等促销标签，支持脉冲动画和丝带样式，可叠加多个。",fE="2.0.0",hE=["ecommerce","电商核心"],yE=[{name:"renderOverlay",when:"每次渲染，覆盖在图片容器之上",description:"骨架屏、错误占位、水印、加载动画"}],vE=[],wE="只读取 context 字段（props / state / data），不调用上下文方法",xE=[{name:"type",type:'"new" | "hot" | "sale" | "limited" | "bestseller" | "custom"',default:'"hot"',description:"预设标签类型"},{name:"text",type:"string",default:"undefined",description:"自定义文案（type=custom 时生效）"},{name:"position",type:'"top-left" | "top-right" | "bottom-left" | "bottom-right"',default:'"top-left"',description:"角标位置（四角）"},{name:"backgroundColor",type:"string",default:"undefined",description:"背景色"},{name:"color",type:"string",default:"undefined",description:"文字色"},{name:"animate",type:"boolean",default:"true",description:"淡入动画"},{name:"pulse",type:"boolean",default:"false",description:"脉冲呼吸动画"},{name:"ribbon",type:"boolean",default:"false",description:"丝带样式（倾斜 45°）"},{name:"style",type:"React.CSSProperties",default:"{}",description:"自定义叠加样式"}],bE=`// 1. 单个促销角标
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
<HotSaleImage src="https://picsum.photos/id/220/500/400" alt="促销商品" />;`,PE=[{name:"NEW 新品标签",description:"左上角绿色 NEW 角标。",src:"https://picsum.photos/id/168/300/300",config:{type:"new",position:"top-left"}},{name:"HOT 热门标签（脉冲动画）",description:"右上角红色 HOT，带脉冲呼吸效果。",src:"https://picsum.photos/id/175/300/300",config:{type:"hot",position:"top-right",pulse:!0}},{name:"SALE 促销丝带",description:"右上角红色丝带（倾斜 45°）。",src:"https://picsum.photos/id/188/300/300",config:{type:"sale",position:"top-right",ribbon:!0}},{name:"LIMITED 限量标签",description:"右上角紫色 LIMITED，带脉冲。",src:"https://picsum.photos/id/196/300/300",config:{type:"limited",position:"top-right",pulse:!0}},{name:"BESTSELLER 畅销标签",description:"右下角橙色 BEST 角标。",src:"https://picsum.photos/id/203/300/300",config:{type:"bestseller",position:"bottom-right"}},{name:"自定义标签（VIP 专享）",description:"自定义文案、背景色与文字色。",src:"https://picsum.photos/id/211/300/300",config:{type:"custom",text:"VIP专享",position:"top-left",backgroundColor:"#FFD700",color:"#000"}},{name:"多个标签组合",description:"一张图同时叠加 NEW + SALE（丝带）+ HOT（脉冲），不同位置不同样式。",src:"https://picsum.photos/id/220/500/400",configs:[{type:"new",position:"top-left"},{type:"sale",position:"top-right",ribbon:!0},{type:"hot",position:"bottom-right",pulse:!0}]}],$E=["6 种预设类型：NEW / HOT / SALE / LIMITED / BESTSELLER / custom","支持自定义文字、背景色、文字颜色","脉冲动画效果（吸引注意力）","丝带样式（倾斜 45°）","4 个位置可选（四角）","支持同一图片显示多个标签"],SE=["新品上市标记","热销商品突出","促销活动标识","限时限量提醒","VIP / 会员专享"],CE=["`type` 只是预设（new/hot/sale/limited/bestseller），`text` 可覆盖预设文案与颜色。","`ribbon: true` 渲染角部绶带，容器需 overflow:hidden 才不会溢出圆角。"],LE={name:mE,description:gE,since:fE,tags:hE,events:yE,methods:vE,methodsNote:wE,config:xE,example:bE,examples:PE,features:$E,useCases:SE,notes:CE},IE="RedactionPlugin",kE="隐私打码：在指定百分比区域叠加模糊或色块遮挡。",_E="2.0.0",EE=["visual","视觉"],RE=[{name:"renderOverlay",when:"每次渲染，覆盖在图片容器之上",description:"骨架屏、错误占位、水印、加载动画"}],zE=[],OE="只读取 context 字段（props / state / data），不调用上下文方法",DE=[{name:"enabled",type:"boolean",default:"true",description:"是否启用"},{name:"boxes",type:"RedactionBox[]",default:"[]",description:"遮挡区域：{ x, y, w, h (0~1), blur?, color? }"},{name:"zIndex",type:"number",default:"3",description:"层叠顺序"}],ME=`// 局部打码（如人脸 / 车牌）
const RedactedImage = withPlugins(LazyLoadImageCore, [
  createRedactionPlugin({
    boxes: [
      { x: 0.40, y: 0.30, w: 0.20, h: 0.15, blur: 8 },
    ],
  }),
]);

<RedactedImage src="https://picsum.photos/seed/redaction/600/400" alt="打码" />;`,jE=[{name:"局部模糊打码",description:"在图片 40%/30% 处覆盖一块 20%×15% 的模糊区域（如人脸）。",src:"https://picsum.photos/seed/redaction-blur/600/400",config:{enabled:!0,boxes:[{x:.4,y:.3,w:.2,h:.15,blur:8}]}},{name:"色块遮挡",description:"用半透明色块遮挡敏感区域，不依赖模糊。",src:"https://picsum.photos/seed/redaction-block/600/400",config:{enabled:!0,boxes:[{x:.1,y:.7,w:.35,h:.12,color:"rgba(0,0,0,0.85)"}]}}],TE=["按百分比坐标划定遮挡区（自适应尺寸）","支持模糊（blur）或纯色块两种遮挡","可同时覆盖多个区域","整体启停"],NE=["人脸 / 车牌隐私打码","敏感信息遮挡","截图脱敏","合规图片发布"],AE=["坐标使用 0~1 的相对比例，图片缩放时遮挡区自动跟随。","blur 通过 backdrop-filter 实现；若浏览器不支持会以纯色块兜底。","打码是覆盖层，不改变原图像素，导出原图不会被脱敏。"],BE={name:IE,description:kE,since:_E,tags:EE,events:RE,methods:zE,methodsNote:OE,config:DE,example:ME,examples:jE,features:TE,useCases:NE,notes:AE},UE="ResponsivePlugin",FE="响应式图片：注入 srcset/sizes 多宽度资源，浏览器按视口选择最佳尺寸，兼顾清晰度与流量。",VE="2.0.0",WE=["a11y","可访问性","网络","响应式"],HE=[{name:"onLoadSuccess",when:"图片成功解码可显示时",description:"拿到最终 displaySrc 做后续动作（上报、预取下张、淡入）"},{name:"transformProps",when:"渲染前链式改写图片 props",description:"补 sizes / 占位色 / 解码策略等"}],GE=[],qE="只读取 context 字段（props / state / data），不调用上下文方法",QE=[{name:"enabled",type:"boolean",default:"true",description:"是否启用响应式"},{name:"variants",type:"{ width: number; src?: string }[]",default:"[{400},{800},{1200}]",description:"宽度变体列表"},{name:"buildSrc",type:"(baseSrc, width) => string",default:"defaultBuildSrc（追加 ?w=）",description:"自定义链接生成（函数型，参见用法示例）"},{name:"sizes",type:"string",default:'"(max-width: 800px) 100vw, 800px"',description:"sizes 属性"}],KE=`const ResponsiveImage = withPlugins(LazyLoadImageCore, [
  createResponsivePlugin({
    variants: [{ width: 400 }, { width: 800 }, { width: 1200 }],
    sizes: "(max-width: 800px) 100vw, 800px",
    buildSrc: (base, w) => \`\${base}?w=\${w}\`,
  }),
]);

<ResponsiveImage src="https://picsum.photos/id/1015/500/300" alt="响应式示例" />;`,YE=[{name:"默认多宽度",description:"注入 400/800/1200 三档 srcset。",src:"https://picsum.photos/id/1015/500/300",config:{variants:[{width:400},{width:800},{width:1200}],sizes:"(max-width: 800px) 100vw, 800px"}},{name:"自定义尺寸档位",description:"仅 320/640 两档，适合轻量场景。",src:"https://picsum.photos/id/1021/500/300",config:{variants:[{width:320},{width:640}],sizes:"(max-width: 640px) 100vw, 640px"}},{name:"关闭响应式",description:"enabled=false 时不注入 srcset。",src:"https://picsum.photos/id/1026/500/300",config:{enabled:!1}}],XE=["srcset 多宽度","自定义 buildSrc","sizes 响应式","自动适配屏幕/Retina","可关闭"],ZE=["响应式画廊","移动端流量优化","Retina 高清","CMS 图片"],JE=["buildSrc 为函数型配置，静态预览使用默认追加 ?w= 策略；自定义用法见用法示例。"],eR={name:UE,description:FE,since:VE,tags:WE,events:HE,methods:GE,methodsNote:qE,config:QE,example:KE,examples:YE,features:XE,useCases:ZE,notes:JE},tR="RetryOnErrorPlugin",nR="失败重试：图片加载失败后按指数退避（可选抖动）自动重试，提升网络抖动 / 瞬时故障下的自愈成功率，并提供重试进度角标。",oR="2.0.0",rR=["network","网络","重试","自愈"],sR=[{name:"onUnmount",when:"组件卸载前执行一次",description:"释放监听、定时器与观察器；与 onMount 成对出现，避免泄漏"},{name:"onLoadError",when:"加载失败（网络错误、解码失败、超时）",description:"返回 true 表示错误已被处理（如切换备用源），否则继续走默认降级"},{name:"onSrcChange",when:"src 变化、切换到新图时",description:"重置状态、清理旧缓存、重新进入懒加载判定"},{name:"renderOverlay",when:"每次渲染，覆盖在图片容器之上",description:"骨架屏、错误占位、水印、加载动画"}],iR=[],aR="只读取 context 字段（props / state / data），不调用上下文方法",lR=[{name:"maxRetries",type:"number",default:"2",description:"最大重试次数"},{name:"baseDelayMs",type:"number",description:"退避基准毫秒（默认 500）"},{name:"jitter",type:"boolean",description:"是否在退避基础上叠加随机抖动"}],cR=`import { LazyLoadImageCore, createRetryOnErrorPlugin, withPlugins } from "vane-lazy-image";

const LazyImage = withPlugins(LazyLoadImageCore, [
  createRetryOnErrorPlugin({ maxRetries: 3, baseDelayMs: 400, jitter: true }),
]);

// 故意触发失败以观察指数退避重试
<LazyImage src="https://invalid.example.com/x.png" alt="失败重试示例" />`,uR=[{name:"自动重试",description:"失败后指数退避重试，用尽后角标显示『重试失败』（演示用无效地址）。",src:"https://invalid.example.com/retry.png",config:{maxRetries:3,baseDelayMs:400}},{name:"带抖动退避",description:"在指数退避基础上叠加随机抖动，避免重试风暴。",src:"https://invalid.example.com/retry-jitter.png",config:{maxRetries:2,baseDelayMs:600,jitter:!0}}],dR=["指数退避重试：delay = baseDelayMs * 2^(n-1)","可选 jitter 抖动避免重试风暴","角标实时显示『重试中 n/max』与『重试失败(max)』","用尽后放行错误给下游插件（ErrorOverlay / ErrorBadge）"],pR=["弱网 / 瞬时 5xx 自愈","与手动重试（ErrorOverlay）互补"],mR=["maxRetries 默认 2，baseDelayMs 默认 500","重试用 ?retry=时间戳&n=count 防止缓存命中","重试用尽返回 false，错误继续向下游传播"],gR={name:tR,description:nR,since:oR,tags:rR,events:sR,methods:iR,methodsNote:aR,config:lR,example:cR,examples:uR,features:dR,useCases:pR,notes:mR},fR="RevealAnimationPlugin",hR="图片揭示动画：为图片加载添加各种进场动画（淡入/缩放/旋转/翻转/弹跳/弹性等 16 种预设 + 自定义），纯 CSS 无依赖。",yR="2.0.0",vR=["interaction","视觉效果与交互","visual"],wR=[{name:"onLoadSuccess",when:"图片成功解码可显示时",description:"拿到最终 displaySrc 做后续动作（上报、预取下张、淡入）"}],xR=[],bR="只读取 context 字段（props / state / data），不调用上下文方法",PR=[{name:"animation",type:'"fade" | "fade-up" | "fade-down" | "fade-left" | "fade-right" | "zoom-in" | "zoom-out" | "rotate-in" | "flip-x" | "flip-y" | "slide-up" | "slide-down" | "slide-left" | "slide-right" | "bounce" | "elastic" | "custom"',default:'"fade-up"',description:"动画类型"},{name:"duration",type:"number",default:"600",description:"持续时间（毫秒）"},{name:"delay",type:"number",default:"0",description:"延迟（毫秒）"},{name:"easing",type:"string",default:'"ease-out"',description:"缓动函数"},{name:"customAnimation",type:"string",default:'""',description:"自定义动画名（animation 为 custom 时生效）"},{name:"customKeyframes",type:"string",default:'""',description:"自定义 keyframes 文本"},{name:"fillMode",type:'"none" | "forwards" | "backwards" | "both"',default:'"both"',description:"动画填充模式"},{name:"disabled",type:"boolean",default:"false",description:"是否禁用"}],$R=`// 1. 组装带揭示动画的懒加载图片
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
});`,SR=[{name:"淡入上浮（默认）",description:"fade-up：图片加载完成后从下方淡入上浮，最通用的进场效果。",src:"https://picsum.photos/id/1018/400/300",config:{animation:"fade-up",duration:700,easing:"ease-out"}},{name:"缩放进入 zoom-in",description:"图片由 1.2 倍缩放回落至原尺寸并淡入，适合主视觉。",src:"https://picsum.photos/id/1015/400/300",config:{animation:"zoom-in",duration:800}},{name:"旋转进入 rotate-in",description:"带轻微旋转的进场，动感更强。",src:"https://picsum.photos/id/1024/400/300",config:{animation:"rotate-in",duration:900,delay:100}},{name:"弹跳 bounce",description:"带回弹缓冲的进场，活泼、吸引注意。",src:"https://picsum.photos/id/1039/400/300",config:{animation:"bounce",duration:1e3}},{name:"弹性 elastic + 自定义时长",description:"弹性缓动 + 更长时长，强调“弹出”质感。",src:"https://picsum.photos/id/1043/400/300",config:{animation:"elastic",duration:1200,easing:"cubic-bezier(0.68, -0.55, 0.265, 1.55)"}},{name:"自定义关键帧 custom",description:"通过 customAnimation 指定动画名，并以 customKeyframes 注入关键帧文本，可做任意效果。",src:"https://picsum.photos/id/1050/400/300",config:{animation:"custom",customAnimation:"myReveal",customKeyframes:"@keyframes myReveal { from { opacity: 0; transform: scale(1.2) rotate(8deg); } to { opacity: 1; transform: none; } }"}}],CR=["16 种预设动画（淡入/缩放/旋转/翻转/滑动/弹跳/弹性）","支持自定义动画名 + 关键帧文本","可配置时长、延迟、缓动函数","fill 模式控制动画结束态","可一键禁用（disabled，适配低端设备）","纯 CSS 实现，无运行时依赖"],LR=["图片列表进场","瀑布流懒加载","轮播图切换","首屏内容揭示","卡片/区块入场动画","营销落地页视觉点缀"],IR=["动画在图片加载完成后触发一次；再次滚动不会重复播放。","低端设备或开启“减少动态效果”偏好时，可设 disabled: true 关闭动画。"],kR={name:fR,description:hR,since:yR,tags:vR,events:wR,methods:xR,methodsNote:bR,config:PR,example:$R,examples:SR,features:CR,useCases:LR,notes:IR},_R="SEOPlugin",ER="SEO 增强：alt/title 回退、固定容器宽高比减少 CLS、将首屏关键图设为 LCP 优先（eager + preload），提升搜索排名与加载体验。",RR="2.0.0",zR=["a11y","可访问性","SEO"],OR=[{name:"onMount",when:"组件挂载完成、插件注册后执行一次（返回的清理函数在 manager.clear 时逆序执行）",description:"初始化副作用：注册监听、起定时器、建观察器；必须返回清理函数或配合 onUnmount 收尾"},{name:"transformProps",when:"渲染前链式改写图片 props",description:"补 sizes / 占位色 / 解码策略等"}],DR=[],MR="只读取 context 字段（props / state / data），不调用上下文方法",jR=[{name:"enabled",type:"boolean",default:"true",description:"是否启用"},{name:"altFallback",type:"string",default:"undefined",description:"未提供 alt 时的回退值"},{name:"title",type:"string",default:"undefined",description:"图片 title（提示与关键词）"},{name:"aspectRatio",type:"string",default:"undefined",description:'固定容器宽高比（如 "4/3"），减少 CLS'},{name:"priority",type:'"auto" | "lcp"',default:'"auto"',description:"lcp 时设为 eager 加载"},{name:"preload",type:"boolean",default:"false",description:"挂载时注入 preload 预载"}],TR=`const SeoImage = withPlugins(LazyLoadImageCore, [
  createSEOPlugin({
    altFallback: "示例图片",
    title: "演示图像",
    aspectRatio: "4/3",
    priority: "lcp",
    preload: true,
  }),
]);

<SeoImage src="https://picsum.photos/id/1015/500/300" alt="" />;`,NR=[{name:"LCP 关键图",description:"首屏关键图：eager + preload + 固定比例，优化 LCP。",src:"https://picsum.photos/id/1015/500/300",config:{altFallback:"示例图片",title:"演示图像",aspectRatio:"4/3",priority:"lcp",preload:!0}},{name:"alt/title 回退",description:"补充 alt 与 title，利于读屏与 SEO。",src:"https://picsum.photos/id/1021/500/300",config:{altFallback:"商品图",title:"热销商品"}},{name:"仅固定比例",description:"aspectRatio 防 CLS，其余默认。",src:"https://picsum.photos/id/1026/500/300",config:{aspectRatio:"16/9"}}],AR=["alt 回退","title 设置","aspect-ratio 防 CLS","LCP 优先（eager）","preload 预载","可关闭"],BR=["首屏 LCP 优化","SEO 排名","结构化标签","CLS 治理"],UR=['priority:"lcp" 会强制 eager 加载，请勿对所有图片使用，仅用于首屏关键图。'],FR={name:_R,description:ER,since:RR,tags:zR,events:OR,methods:DR,methodsNote:MR,config:jR,example:TR,examples:NR,features:AR,useCases:BR,notes:UR},VR="ScrollIdlePlugin",WR="滚动空闲加载：滚动停止后再发起加载，避免与滚动争抢带宽。",HR="2.0.0",GR=["loading","加载策略"],qR=[{name:"onMount",when:"组件挂载完成、插件注册后执行一次（返回的清理函数在 manager.clear 时逆序执行）",description:"初始化副作用：注册监听、起定时器、建观察器；必须返回清理函数或配合 onUnmount 收尾"},{name:"onUnmount",when:"组件卸载前执行一次",description:"释放监听、定时器与观察器；与 onMount 成对出现，避免泄漏"},{name:"onLoad",when:"加载流程开始、需要确定最终图片地址时",description:"自定义加载逻辑，返回最终图片 URL（objectURL / dataURL / 原地址）"}],QR=[],KR="只读取 context 字段（props / state / data），不调用上下文方法",YR=[{name:"idleMs",type:"number",default:"120",description:"判定为“空闲”的静止时间（毫秒）"},{name:"onlyWhenIntersecting",type:"boolean",default:"true",description:"是否仅在进入视口后生效（否则所有加载都会等待空闲）"},{name:"maxWaitMs",type:"number",default:"1200",description:"最长等待空闲的时间（毫秒），超过则直接继续加载，避免长时间滚动导致饥饿"},{name:"target",type:'"window" | "container"',default:'"window"',description:"监听对象：window 或容器（容器将使用 context.containerRef.current）"},{name:"axis",type:'"vertical" | "horizontal" | "both"',default:'"vertical"',description:"滚动轴向：vertical/horizontal/both（目前用于调试标注，可按需扩展策略）"},{name:"debug",type:"boolean",default:"false",description:"调试输出"}],XR=`const LazyImage = withPlugins(LazyLoadImageCore, [
  createScrollIdlePlugin({
    idleMs: 160,
    onlyWhenIntersecting: true,
    maxWaitMs: 1200, // 最多等 1.2s，避免饥饿
  }),
]);`,ZR=[{name:"滚动停止后加载",description:"用户停止滚动 160ms 后再加载，滚动过程中不打断主线程与带宽。",config:{idleMs:160,onlyWhenIntersecting:!0,maxWaitMs:1200}},{name:"更敏感空闲",description:"80ms 即判定空闲，适合加载较轻的图标 / 缩略图。",config:{idleMs:80,maxWaitMs:800}}],JR=["监听滚动，空闲（停止滚动 idleMs）后才发起加载","默认仅进入视口后生效，不拖累首屏外元素","maxWaitMs 兜底，防止长时间连续滚动导致饥饿","支持 window / 容器两种监听对象"],e5=["长列表滚动时避免与主线程 / 带宽争抢","低端机滚动卡顿优化"],t5=["与 ConcurrencyControl 叠加效果最佳。","maxWaitMs 务必设置，否则连续滚动可能长期不加载。","容器模式会使用 context.containerRef.current 作为监听目标。"],n5={name:VR,description:WR,since:HR,tags:GR,events:qR,methods:QR,methodsNote:KR,config:YR,example:XR,examples:ZR,features:JR,useCases:e5,notes:t5},o5="SkeletonPlugin",r5="骨架屏占位：加载期显示 shimmer/pulse 骨架动画。",s5="2.0.0",i5=["visual","视觉"],a5=[{name:"renderOverlay",when:"每次渲染，覆盖在图片容器之上",description:"骨架屏、错误占位、水印、加载动画"}],l5=[],c5="只读取 context 字段（props / state / data），不调用上下文方法",u5=[{name:"type",type:'"shimmer" | "pulse"',default:'"shimmer"',description:"动画类型"},{name:"backgroundColor",type:"string",default:"#e5e7eb",description:"底色"},{name:"highlightColor",type:"string",default:"#f3f4f6",description:"shimmer 高亮色"},{name:"borderRadius",type:"number",default:"6",description:"圆角 px"},{name:"zIndex",type:"number",default:"1",description:"层叠顺序"},{name:"showWhen",type:'"always" | "loading"',default:'"loading"',description:"何时显示"}],d5=`// 加载期 shimmer 骨架占位
const SkeletonImage = withPlugins(LazyLoadImageCore, [
  createSkeletonPlugin({
    type: "shimmer",
    borderRadius: 8,
    showWhen: "loading",
  }),
]);

<SkeletonImage src="https://picsum.photos/seed/skeleton/600/400" alt="骨架屏" />;`,p5=[{name:"Shimmer 骨架",description:"流光骨架，提示内容加载中，圆角 8。",src:"https://picsum.photos/seed/skeleton-shimmer/600/400",config:{type:"shimmer",borderRadius:8,showWhen:"loading"}},{name:"Pulse 骨架",description:"呼吸式明暗变化，更克制的占位动画。",src:"https://picsum.photos/seed/skeleton-pulse/600/400",config:{type:"pulse",backgroundColor:"#eee",highlightColor:"#f5f5f5",borderRadius:8}}],m5=["shimmer（流光）/ pulse（呼吸）两种动画","底色 / 高亮色 / 圆角可调","加载完成自动淡出","零图片请求，首屏即见"],g5=["列表 / 卡片加载占位","首屏骨架屏","与 BlurUp / LQIP 配合的兜底占位","弱网环境体验优化"],f5=['showWhen:"loading" 表示仅在加载期显示，图片就绪后自动让位。',"与 BlurUp 叠加时，建议骨架层级低于模糊图（zIndex 较小）。"],h5={name:o5,description:r5,since:s5,tags:i5,events:a5,methods:l5,methodsNote:c5,config:u5,example:d5,examples:p5,features:m5,useCases:g5,notes:f5},y5="SocialSharePlugin",v5="社交分享：在商品图片上显示社交分享按钮，支持 6 大平台、悬停展开、自定义尺寸与分享回调。",w5="2.0.0",x5=["ecommerce","电商核心"],b5=[{name:"renderOverlay",when:"每次渲染，覆盖在图片容器之上",description:"骨架屏、错误占位、水印、加载动画"}],P5=[],$5="只读取 context 字段（props / state / data），不调用上下文方法",S5=[{name:"platforms",type:'Array<"facebook"|"twitter"|"pinterest"|"linkedin"|"whatsapp"|"wechat">',default:'["facebook","twitter","pinterest"]',description:"分享平台列表"},{name:"position",type:'"top-left" | "top-right" | "bottom-left" | "bottom-right"',default:'"top-right"',description:"主按钮位置"},{name:"showOnHover",type:"boolean",default:"false",description:"悬停显示模式"},{name:"title",type:"string",default:'"分享图片"',description:"分享标题"},{name:"description",type:"string",default:'""',description:"分享描述"},{name:"ogImage",type:"string",default:"undefined",description:"Pinterest 等使用的媒体图"},{name:"size",type:'"small" | "medium" | "large"',default:'"medium"',description:"按钮尺寸"},{name:"onShare",type:"(platform) => void",default:"undefined",description:"分享回调"},{name:"style",type:"React.CSSProperties",default:"{}",description:"自定义容器样式"}],C5=`// 1. 指定分享平台，点击展开具体入口
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
<ShareImage src="https://picsum.photos/id/237/500/400" alt="商品图" />;`,L5=[{name:"默认分享按钮",description:"点击主按钮展开具体平台，再点平台进行分享。",src:"https://picsum.photos/id/237/500/400",config:{platforms:["facebook","twitter","pinterest"],position:"top-right",showOnHover:!1,title:"Amazing Product",description:"Check out this amazing product!"}},{name:"悬停显示（鼠标悬停时出现）",description:"默认隐藏，鼠标悬停图片才显示分享按钮。",src:"https://picsum.photos/id/247/500/400",config:{platforms:["facebook","twitter","linkedin","whatsapp"],position:"top-right",showOnHover:!0,size:"medium"}},{name:"更多平台（包含微信）",description:"小尺寸、右下角，覆盖 6 个平台。",src:"https://picsum.photos/id/257/500/400",config:{platforms:["facebook","twitter","pinterest","linkedin","whatsapp","wechat"],position:"bottom-right",showOnHover:!1,size:"small"}},{name:"大尺寸按钮",description:"左上角大尺寸分享按钮。",src:"https://picsum.photos/id/267/500/400",config:{platforms:["facebook","twitter","pinterest"],position:"top-left",showOnHover:!1,size:"large"}}],I5=["支持 6 大社交平台：Facebook / Twitter / Pinterest / LinkedIn / WhatsApp / WeChat","悬停显示模式","3 种尺寸可选（small / medium / large）","4 个位置可选","展开 / 收起动画","分享回调通知","自定义分享标题和描述"],k5=["电商产品分享","内容营销推广","作品集展示","照片 / 图片社区","礼物推荐分享","房产 / 旅游分享"],_5=["`showOnHover: true` 时分享条只在悬停出现；示例页默认常驻便于观察。","微信没有可直接打开的分享 URL，走 `onShare` 回调由业务方接入。"],E5={name:y5,description:v5,since:w5,tags:x5,events:b5,methods:P5,methodsNote:$5,config:S5,example:C5,examples:L5,features:I5,useCases:k5,notes:_5},R5="Spin360Plugin",z5="360° 环物旋转（gallery 核心插件）：把 images 当逐帧序列，拖拽或自动播放切换帧，覆盖主图显示。",O5="2.1.0",D5=["gallery","图集","360","环物","旋转"],M5=[{name:"galleryOverlay",when:"渲染图库大图浮层时",description:"大图视图、切换器、关闭按钮等浮层内容"}],j5=[{name:"setFrameIndex",signature:"ctx.setFrameIndex(i: number): void",description:"切换 360° 环物当前帧（写入图集协调态，触发重新渲染）"}],T5=[{name:"sensitivity",type:"number",default:"6",description:"拖拽灵敏度：像素位移超过该值才翻一帧"},{name:"autoPlay",type:"boolean",default:"false",description:"是否自动旋转"},{name:"autoPlayInterval",type:"number",default:"120",description:"自动旋转间隔（ms）"}],N5=`import { GalleryCore } from "vane-lazy-image/gallery";
import { createSpin360Plugin } from "vane-lazy-image/custom-plugins/Spin360Plugin";

<GalleryCore images={frames} plugins={[createSpin360Plugin({ autoPlay: true })]} />`,A5=[{name:"拖拽旋转",description:"在画布上左右拖拽切换 360 帧。",config:{autoPlay:!1}},{name:"自动旋转",description:"autoPlay 开启后自动逐帧旋转，适合展示。",config:{autoPlay:!0,autoPlayInterval:120}}],B5=["拖拽旋转 360°","自动播放","帧计数显示","逐帧序列（images 即帧）"],U5=["商品 360 环物展示","模型/预览图旋转","全景预览"],F5=["images 数组即 360 帧序列；少于 2 帧时不渲染。覆盖层 zIndex 5，独立于底层主图加载。"],V5={name:R5,description:z5,since:O5,tags:D5,events:M5,methods:j5,config:T5,example:N5,examples:A5,features:B5,useCases:U5,notes:F5},W5="SvgPlaceholderPlugin",H5="SVG 占位：在加载期间注入自定义 SVG 占位内容（如骨架、品牌图形），加载成功后淡出，增强加载反馈与品牌感。",G5="2.0.0",q5=["other","视觉","占位"],Q5=[{name:"renderOverlay",when:"每次渲染，覆盖在图片容器之上",description:"骨架屏、错误占位、水印、加载动画"}],K5=[],Y5="只读取 context 字段（props / state / data），不调用上下文方法",X5=[{name:"svgContent",type:"string | ((context) => string)",default:"undefined",description:"SVG 字符串或动态生成函数"},{name:"background",type:"string",default:'"transparent"',description:"叠加层背景"},{name:"opacity",type:"number",default:"1",description:"不透明度(0~1)"},{name:"zIndex",type:"number",default:"3",description:"叠加层级"},{name:"showWhen",type:'"always" | "idle" | "loading" | "loaded" | "error"',default:'"loading"',description:"显示条件"},{name:"fadeOutOnLoaded",type:"boolean",default:"true",description:"加载成功后是否淡出"}],Z5=`const SvgImage = withPlugins(LazyLoadImageCore, [
  createSvgPlaceholderPlugin({
    svgContent: () => \`<svg viewBox='0 0 100 100'><circle cx='50' cy='50' r='40' fill='#ddd'/></svg>\`,
    showWhen: "loading",
  }),
]);

<SvgImage src="https://picsum.photos/id/1015/500/300" alt="SVG 占位示例" />;`,J5=[{name:"圆形骨架占位",description:"加载期显示灰色圆形 SVG 占位，完成后淡出。",src:"https://picsum.photos/id/1015/500/300",config:{svgContent:"<svg viewBox='0 0 100 100'><circle cx='50' cy='50' r='40' fill='#ddd'/></svg>",showWhen:"loading"}},{name:"带背景占位",description:"浅色背景衬托占位 SVG。",src:"https://picsum.photos/id/1021/500/300",config:{svgContent:"<svg viewBox='0 0 100 100'><rect x='10' y='10' width='80' height='80' rx='8' fill='#eee'/></svg>",background:"#fafafa"}},{name:"常驻标识",description:"showWhen=always，占位层持续显示。",src:"https://picsum.photos/id/1026/500/300",config:{svgContent:"<svg viewBox='0 0 100 100'><rect width='100' height='100' fill='rgba(0,0,0,0.04)'/></svg>",showWhen:"always"}}],e3=["注入任意 SVG 占位","加载时/常驻/多状态显示","淡出过渡","背景/透明度/层级可调","函数/字符串来源"],t3=["动画骨架屏","品牌图形占位","加载反馈","差异化占位"],n3=["svgContent 支持函数型（按 context 动态生成），静态预览使用字符串；函数用法见用法示例。"],o3={name:W5,description:H5,since:G5,tags:q5,events:Q5,methods:K5,methodsNote:Y5,config:X5,example:Z5,examples:J5,features:e3,useCases:t3,notes:n3},r3="ThumbPreloadPlugin",s3="相邻图预加载（gallery 增强插件）：监听主图切换事件，预加载后续若干张到浏览器缓存，使切换近乎瞬时。",i3="2.1.0",a3=["gallery","图集","预加载","性能"],l3=[{name:"onActiveChange",when:"图库当前激活图切换后",description:"同步缩略图高亮、预加载相邻图、更新 URL"}],c3=[],u3="只读取 context 字段（props / state / data），不调用上下文方法",d3=[{name:"lookahead",type:"number",default:"1",description:"向后预加载张数"},{name:"alsoPrevious",type:"boolean",default:"false",description:"是否也预加载前一张"}],p3=`import { GalleryCore } from "vane-lazy-image/gallery";
import { createThumbPreloadPlugin } from "vane-lazy-image/custom-plugins/ThumbPreloadPlugin";

<GalleryCore images={images} plugins={[createThumbPreloadPlugin({ lookahead: 2 })]} />`,m3=[{name:"预加载相邻图",description:"切换主图后预热后 2 张（及前一张），缩略条点击切换零白屏；同 URL 只预热一次。",config:{lookahead:2,alsoPrevious:!0}}],g3=["onActiveChange 监听","相邻图预热","模块级去重","纯副作用无 UI"],f3=["大图图集","弱网流畅切换","电商商品多图"],h3=["不渲染 UI；预热在 GalleryCore 的切换 effect 内执行，安全副作用。"],y3={name:r3,description:s3,since:i3,tags:a3,events:l3,methods:c3,methodsNote:u3,config:d3,example:p3,examples:m3,features:g3,useCases:f3,notes:h3},v3="ThumbSyncPlugin",w3="缩略图联动（gallery 核心插件）：渲染缩略图条，点击缩略图切换主图，选中态描边高亮。",x3="2.1.0",b3=["gallery","图集","缩略","联动"],P3=[{name:"galleryThumbArea",when:"渲染图库缩略图条时",description:"底部 / 侧边缩略图列表"}],$3=[{name:"setActiveIndex",signature:"ctx.setActiveIndex(i: number): void",description:"切换图库当前激活图索引，并联动缩略图与预加载"}],S3=[{name:"gap",type:"number",default:"8",description:"缩略图间距（px）"},{name:"thumbWidth",type:"number",default:"64",description:"缩略图宽（px）"},{name:"thumbHeight",type:"number",default:"64",description:"缩略图高（px）"},{name:"showActiveRing",type:"boolean",default:"true",description:"选中缩略图描边高亮"},{name:"radius",type:"number",default:"6",description:"缩略图圆角（px）"}],C3=`import { GalleryCore } from "vane-lazy-image/gallery";
import { createThumbSyncPlugin } from "vane-lazy-image/custom-plugins/ThumbSyncPlugin";

<GalleryCore images={images} plugins={[createThumbSyncPlugin()]} />`,L3=[{name:"基础缩略联动",description:"点击缩略图切换主图，选中态描边；键盘左右键也可切换（Core 级支持）。",config:{}}],I3=["缩略图条渲染","点击切换主图","选中态描边","键盘左右键切换（GalleryCore 级）"],k3=["电商商品图集","多图详情页","相册"],_3=["activeIndex 由 useGalleryRuntime 用 useState 持有，切换即主图重渲染，无需手动 forceUpdate。"],E3={name:v3,description:w3,since:x3,tags:b3,events:P3,methods:$3,config:S3,example:C3,examples:L3,features:I3,useCases:k3,notes:_3},R3="TransitionPlugin",z3="加载成功过渡动画：从指定透明度/缩放到目标值的平滑过渡。",O3="2.0.0",D3=["visual","视觉"],M3=[{name:"onMount",when:"组件挂载完成、插件注册后执行一次（返回的清理函数在 manager.clear 时逆序执行）",description:"初始化副作用：注册监听、起定时器、建观察器；必须返回清理函数或配合 onUnmount 收尾"},{name:"onLoadSuccess",when:"图片成功解码可显示时",description:"拿到最终 displaySrc 做后续动作（上报、预取下张、淡入）"}],j3=[],T3="只读取 context 字段（props / state / data），不调用上下文方法",N3=[{name:"durationMs",type:"number",default:"400",description:"过渡时长 ms"},{name:"easing",type:"string",default:"ease",description:"缓动函数"},{name:"fromOpacity",type:"number",default:"0",description:"起始透明度"},{name:"toOpacity",type:"number",default:"1",description:"结束透明度"},{name:"fromScale",type:"number",default:"1",description:"起始缩放"},{name:"toScale",type:"number",default:"1",description:"结束缩放"}],A3=`// 缩放 + 淡入过渡
const TransImage = withPlugins(LazyLoadImageCore, [
  createTransitionPlugin({
    durationMs: 500,
    fromOpacity: 0,
    toOpacity: 1,
    fromScale: 1.05,
    toScale: 1,
  }),
]);

<TransImage src="https://picsum.photos/seed/transition/600/400" alt="过渡" />;`,B3=[{name:"缩放淡入",description:"从 1.05 倍淡入到原尺寸，轻盈的入场感。",src:"https://picsum.photos/seed/transition-zoom/600/400",config:{durationMs:500,fromOpacity:0,toOpacity:1,fromScale:1.05,toScale:1}},{name:"纯淡入",description:"仅透明度过渡，不含缩放。",src:"https://picsum.photos/seed/transition-fade/600/400",config:{durationMs:400,fromOpacity:0,toOpacity:1}}],U3=["透明度 + 缩放双维度过渡","起始 / 结束值均可定制","时长与缓动可调","相比 FadeIn 更灵活"],F3=["图片入场动画","卡片翻转 / 弹出图","需要缩放感的场景","与视差 / 滚动联动"],V3=["fromScale=toScale=1 时退化为纯淡入，等价于更轻量的 FadeIn。","缩放在 transform 上实现，注意父容器 overflow 与定位。"],W3={name:R3,description:z3,since:O3,tags:D3,events:M3,methods:j3,methodsNote:T3,config:N3,example:A3,examples:B3,features:U3,useCases:F3,notes:V3},H3="UserBehaviorPlugin",G3="用户行为：实时统计每张图片的视口驻留时长、点击次数、进入/离开次数，并在图片上叠加可视化面板，卸载时统一上报。",q3="2.0.0",Q3=["viewport","视口与交互","数据","分析"],K3=[{name:"onMount",when:"组件挂载完成、插件注册后执行一次（返回的清理函数在 manager.clear 时逆序执行）",description:"初始化副作用：注册监听、起定时器、建观察器；必须返回清理函数或配合 onUnmount 收尾"},{name:"onUnmount",when:"组件卸载前执行一次",description:"释放监听、定时器与观察器；与 onMount 成对出现，避免泄漏"},{name:"onLoadSuccess",when:"图片成功解码可显示时",description:"拿到最终 displaySrc 做后续动作（上报、预取下张、淡入）"},{name:"onEnterViewport",when:"元素进入视口（IntersectionObserver）",description:"触发懒加载、开始请求、曝光上报"},{name:"onLeaveViewport",when:"元素离开视口",description:"暂停 / 中止在途请求、回收资源"},{name:"transformProps",when:"渲染前链式改写图片 props",description:"补 sizes / 占位色 / 解码策略等"},{name:"renderOverlay",when:"每次渲染，覆盖在图片容器之上",description:"骨架屏、错误占位、水印、加载动画"}],Y3=[],X3="只读取 context 字段（props / state / data），不调用上下文方法",Z3=[{name:"enabled",type:"boolean",default:"true",description:"是否启用统计与面板"},{name:"onReport",type:"(data: { src; dwellMs; clicks; enters; leaves }) => void",default:"undefined",description:"卸载时上报回调（默认打印到控制台）"},{name:"showOverlay",type:"boolean",default:"true",description:"是否在图片角落显示统计面板（生产版式建议关闭）"}],J3=`const BehaviorImage = withPlugins(LazyLoadImageCore, [
  createUserBehaviorPlugin({
    onReport: (data) => {
      // 上报到分析后端
      console.log("behavior", data);
    },
  }),
]);

// 在组件中使用
<BehaviorImage src="https://picsum.photos/id/1015/500/300" alt="用户行为示例" />;`,ez=[{name:"默认统计面板",description:"右上角实时显示驻留、点击、进入/离开数据。",src:"https://picsum.photos/id/1015/500/300",config:{enabled:!0}},{name:"关闭统计",description:"enabled=false 时不渲染面板也不统计。",src:"https://picsum.photos/id/1021/500/300",config:{enabled:!1}}],tz=["实时统计驻留时长","点击次数统计","进入 / 离开次数统计","视口状态指示（绿/红点）","卸载时统一上报","可通过 enabled 关闭"],nz=["内容热度分析","广告位效果评估","UX 研究与转化漏斗","图片曝光与互动埋点"],oz=["统计结果在卸载时通过 `onReport` 上报（默认打印控制台），示例页用面板实时展示。","`enabled: false` 可整体关闭统计与面板，不影响图片加载。","showOverlay: false 只上报数据、不渲染角标，适合直接接入真实版式。"],rz={name:H3,description:G3,since:q3,tags:Q3,events:K3,methods:Y3,methodsNote:X3,config:Z3,example:J3,examples:ez,features:tz,useCases:nz,notes:oz},sz="VideoPosterPlugin",iz="视频海报：将图片作为视频封面，点击播放视频（模态框或内联），支持自动播放、循环、静音与自定义按钮。",az="2.0.0",lz=["ecommerce","电商核心"],cz=[{name:"renderOverlay",when:"每次渲染，覆盖在图片容器之上",description:"骨架屏、错误占位、水印、加载动画"}],uz=[],dz="只读取 context 字段（props / state / data），不调用上下文方法",pz=[{name:"videoUrl",type:"string",default:"undefined",description:"视频 URL"},{name:"autoPlay",type:"boolean",default:"true",description:"自动播放"},{name:"loop",type:"boolean",default:"false",description:"循环播放"},{name:"muted",type:"boolean",default:"true",description:"静音（移动端自动播放需静音）"},{name:"playButtonPosition",type:'"center" | "top-left" | "top-right" | "bottom-left" | "bottom-right"',default:'"center"',description:"播放按钮位置"},{name:"playButtonSize",type:'"small" | "medium" | "large"',default:'"large"',description:"按钮尺寸"},{name:"playButtonStyle",type:"React.CSSProperties",default:"{}",description:"自定义按钮样式"},{name:"showPlayButton",type:"boolean",default:"true",description:"是否显示播放按钮"},{name:"playInModal",type:"boolean",default:"true",description:"模态框播放（否则内联）"},{name:"playIcon",type:"ReactNode",default:"undefined",description:"自定义播放图标"},{name:"onPlay",type:"() => void",default:"undefined",description:"播放回调"}],mz=`// 1. 点击播放按钮，在模态框中播放视频
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
<VideoImage src="https://picsum.photos/id/1015/500/300" alt="商品视频封面" />;`,gz=[{name:"基础视频海报（模态框播放）",description:"点击图片中心播放按钮，在模态框中播放视频。",src:"https://picsum.photos/id/1015/500/300",config:{videoUrl:"https://www.w3schools.com/html/mov_bbb.mp4",playButtonPosition:"center",playButtonSize:"large"}},{name:"内联播放模式",description:"视频直接在图片位置播放，不弹出模态框。",src:"https://picsum.photos/id/1018/500/300",config:{videoUrl:"https://www.w3schools.com/html/movie.mp4",playInModal:!1,playButtonPosition:"center",playButtonSize:"medium",autoPlay:!0,loop:!0,muted:!0}},{name:"自定义播放按钮样式",description:"按钮位于右下角，红色背景，小尺寸。",src:"https://picsum.photos/id/1019/500/300",config:{videoUrl:"https://www.w3schools.com/html/mov_bbb.mp4",playButtonPosition:"bottom-right",playButtonSize:"small",playButtonStyle:{backgroundColor:"rgba(255, 59, 48, 0.9)",border:"2px solid white"}}},{name:"自定义播放图标",description:"示例以默认三角形呈现；可用 playIcon 替换为自定义图标（如 “PLAY” 文字）。",src:"https://picsum.photos/id/1020/500/300",config:{videoUrl:"https://www.w3schools.com/html/mov_bbb.mp4",playButtonPosition:"center",playButtonSize:"large"}},{name:"不同按钮位置",description:"播放按钮位于左上角，绿色背景。",src:"https://picsum.photos/id/1021/500/300",config:{videoUrl:"https://www.w3schools.com/html/mov_bbb.mp4",playButtonPosition:"top-left",playButtonSize:"small",playButtonStyle:{backgroundColor:"rgba(52, 199, 89, 0.9)"}}}],fz=["使用提示：确保视频 URL 可访问，否则播放会失败；移动端自动播放可能受浏览器限制，建议设置 muted=true；大视频文件建议使用流媒体服务；模态框播放体验更好但会阻断其它交互；内联播放适合小尺寸视频预览。"],hz=["模态框播放（全屏）","内联播放（图片位置直接播）","自定义播放按钮大小 / 位置 / 样式","多位置支持（center / top-left / bottom-left / bottom-right）","播放控制（自动播放 / 循环 / 静音）","自定义图标"],yz=["视频网站","在线教育","电商平台（商品视频展示）","新闻媒体","视频博客","企业官网"],vz={name:sz,description:iz,since:az,tags:lz,events:cz,methods:uz,methodsNote:dz,config:pz,example:mz,examples:gz,notes:fz,features:hz,useCases:yz},wz="ViewportAwarePlugin",xz="视口感知加载：真正把 IntersectionObserver 的 rootMargin / threshold / once 下发给核心，控制图片「提前多少距离 / 多灵敏」才触发加载，并在四角显示绿/灰指示点辅助观察。",bz="2.0.0",Pz=["viewport","视口与交互","懒加载"],$z=[{name:"onEnterViewport",when:"元素进入视口（IntersectionObserver）",description:"触发懒加载、开始请求、曝光上报"},{name:"onLeaveViewport",when:"元素离开视口",description:"暂停 / 中止在途请求、回收资源"},{name:"transformProps",when:"渲染前链式改写图片 props",description:"补 sizes / 占位色 / 解码策略等"},{name:"renderOverlay",when:"每次渲染，覆盖在图片容器之上",description:"骨架屏、错误占位、水印、加载动画"}],Sz=[],Cz="只读取 context 字段（props / state / data），不调用上下文方法",Lz=[{name:"rootMargin",type:"string",default:"未设置（沿用 Core 默认 0px）",description:'IO 边距，控制提前/延后触发。如 "200px" 表示进入视口前 200px 就开始加载（预加载），"-50px" 表示进入后再等 50px'},{name:"threshold",type:"number | number[]",default:"未设置",description:"IO 触发阈值（0~1），控制加载灵敏度"},{name:"once",type:"boolean",default:"true",description:"是否只加载一次：true=进入视口加载后停止观察（省资源）；false=持续观察"},{name:"unobserveOnVisible",type:"boolean",default:"由 once 推导",description:"显式下发，优先级高于 once"},{name:"showDot",type:"boolean",default:"false",description:"是否显示视口指示点（仅辅助观察，非核心能力）"},{name:"dotPosition",type:'"top-left" | "top-right" | "bottom-left" | "bottom-right"',default:'"bottom-right"',description:"指示点位置"},{name:"hideWhenOut",type:"boolean",default:"false",description:"离开视口时隐藏指示点"}],Iz=`const ViewportImage = withPlugins(LazyLoadImageCore, [
  // 提前 200px 预加载，进入视口即就绪，滚动更顺滑
  createViewportAwarePlugin({ rootMargin: "200px", threshold: 0.01, showDot: true }),
]);

<ViewportImage src="https://picsum.photos/id/1015/500/300" alt="视口感知示例" />;`,kz=[{name:"提前预加载（rootMargin 200px）",description:"元素进入视口前 200px 就开始加载，滚到时图片已就绪，消除白屏。",src:"https://picsum.photos/id/1015/500/300",config:{rootMargin:"200px",threshold:.01,showDot:!0}},{name:"严格进入才加载（rootMargin 0px）",description:"默认行为：图片真正进入视口边缘才触发加载。",src:"https://picsum.photos/id/1024/500/300",config:{rootMargin:"0px",showDot:!0,dotPosition:"top-left"}},{name:"离开时隐藏指示点",description:"仅在进入视口显示绿点，离开后隐藏。",src:"https://picsum.photos/id/1035/500/300",config:{rootMargin:"100px",showDot:!0,dotPosition:"top-right",hideWhenOut:!0}}],_z=["rootMargin 真正下发，控制提前/延后加载距离","threshold 调节加载灵敏度","once / unobserveOnVisible 控制是否只加载一次","四角可选指示点（辅助观察真实 IO 状态）","onEnterViewport / onLeaveViewport 事件钩子"],Ez=["长列表滚动预加载（rootMargin 提前量）","调试图片加载时机（配合指示点）","无限滚动 / 瀑布流场景","首屏 LCP 图片前的视口调度"],Rz=["核心能力是 transformProps 把 IO 配置下发给核心，而不是装饰层；showDot 仅为观察辅助，可关闭。","once=false 仅表示持续观察，核心仍按加载状态只加载一次；如需「离开再回来重新加载」请配合 reload/reset 钩子。"],zz={name:wz,description:xz,since:bz,tags:Pz,events:$z,methods:Sz,methodsNote:Cz,config:Lz,example:Iz,examples:kz,features:_z,useCases:Ez,notes:Rz},Oz="ViewportDebouncePlugin",Dz="视口防抖（v2 真实实现）：进入视口后并不立即加载，而是等待元素「稳定停留 debounceMs」才放行；若期间离开视口且未达 maxWaitMs 上限，则中止本次加载，真正避免快速滚动时误加载/重复加载。",Mz="2.0.0",jz=["viewport","视口与交互","防抖"],Tz=[{name:"onUnmount",when:"组件卸载前执行一次",description:"释放监听、定时器与观察器；与 onMount 成对出现，避免泄漏"},{name:"onBeforeLoad",when:"发起图片请求之前",description:"返回 false 可阻断本次加载（如权限校验、占位策略）"},{name:"onEnterViewport",when:"元素进入视口（IntersectionObserver）",description:"触发懒加载、开始请求、曝光上报"},{name:"onLeaveViewport",when:"元素离开视口",description:"暂停 / 中止在途请求、回收资源"}],Nz=[],Az="只读取 context 字段（props / state / data），不调用上下文方法",Bz=[{name:"debounceMs",type:"number",default:"200",description:"进入视口后需稳定停留的时长（毫秒），到时才放行加载"},{name:"maxWaitMs",type:"number",default:"1200",description:"最长等待上限，避免快速来回一直不加载（饥饿保护）"},{name:"onlyWhenIntersecting",type:"boolean",default:"true",description:"仅在进入视口时门控；若离开且未达 maxWaitMs 则中止本次加载"},{name:"debug",type:"boolean",default:"false",description:"是否输出调试日志"}],Uz=`const StableImage = withPlugins(LazyLoadImageCore, [
  // 进入视口稳定 200ms 才加载，快速划过直接放弃
  createViewportDebouncePlugin({ debounceMs: 200, maxWaitMs: 1200 }),
]);

<StableImage src="https://picsum.photos/id/1015/500/300" alt="视口防抖示例" />;`,Fz=[{name:"默认防抖（200ms）",description:"快速滚动时抑制抖动：元素需稳定停留 200ms 才加载，一闪而过的不加载。",src:"https://picsum.photos/id/1015/500/300",config:{debounceMs:200}},{name:"加大防抖间隔",description:"300ms 间隔，更适合惯性较大的移动端滚动。",src:"https://picsum.photos/id/1020/500/300",config:{debounceMs:300}},{name:"开启调试日志",description:"控制台输出稳定/中止判定日志，便于排查。",src:"https://picsum.photos/id/1025/500/300",config:{debounceMs:200,debug:!0}}],Vz=["门控钩子真正延迟加载到稳定期","快速划过（离开未达上限）中止加载","maxWaitMs 饥饿保护","可调防抖间隔与上限","调试日志输出"],Wz=["快速滚动列表 / 瀑布流","移动端惯性滚动","防止抖动导致的重复加载","仅加载用户真正停留浏览的图片"],Hz=["依赖引擎门控能力（onBeforeLoad 返回 false 中止加载），已在本插件中落地；与 ViewportAware 的 rootMargin 搭配可进一步调优触发时机。"],Gz={name:Oz,description:Dz,since:Mz,tags:jz,events:Tz,methods:Nz,methodsNote:Az,config:Bz,example:Uz,examples:Fz,features:Vz,useCases:Wz,notes:Hz},qz="ViewportDwellPlugin",Qz="视口驻留门控（v2 真实实现）：在真正加载前要求图片在视口内持续停留 dwellMs，快速划过（停留不足且离开）则中止加载；超过 maxWaitMs 后放行以防饥饿。",Kz="2.0.0",Yz=["viewport","视口与交互","驻留","省流量"],Xz=[{name:"onUnmount",when:"组件卸载前执行一次",description:"释放监听、定时器与观察器；与 onMount 成对出现，避免泄漏"},{name:"onBeforeLoad",when:"发起图片请求之前",description:"返回 false 可阻断本次加载（如权限校验、占位策略）"},{name:"onEnterViewport",when:"元素进入视口（IntersectionObserver）",description:"触发懒加载、开始请求、曝光上报"},{name:"onLeaveViewport",when:"元素离开视口",description:"暂停 / 中止在途请求、回收资源"}],Zz=[],Jz="只读取 context 字段（props / state / data），不调用上下文方法",eO=[{name:"dwellMs",type:"number",default:"250",description:"需要在视口中持续停留的时间（毫秒），不足视为「划过」不加载"},{name:"maxWaitMs",type:"number",default:"1500",description:"最长等待时间（毫秒），超时仍允许加载以防饥饿"},{name:"onlyWhenIntersecting",type:"boolean",default:"true",description:"仅在进入视口时应用驻留判断；离开且未达上限则中止"},{name:"debug",type:"boolean",default:"false",description:"是否输出调试日志"}],tO=`const DwellImage = withPlugins(LazyLoadImageCore, [
  // 停留不足 250ms 的划过不加载，长留才加载
  createViewportDwellPlugin({ dwellMs: 250, maxWaitMs: 1500 }),
]);

<DwellImage src="https://picsum.photos/id/1015/500/300" alt="视口驻留示例" />;`,nO=[{name:"默认驻留（250ms）",description:"划过即中止，停留足够才加载，提升命中率。",src:"https://picsum.photos/id/1015/500/300",config:{dwellMs:250}},{name:"延长驻留时间",description:"400ms 驻留门槛，适合快速浏览场景。",src:"https://picsum.photos/id/1021/500/300",config:{dwellMs:400}},{name:"开启调试日志",description:"控制台输出驻留门控过程，便于调参。",src:"https://picsum.photos/id/1026/500/300",config:{dwellMs:250,debug:!0}}],oO=["门控钩子真正延迟/中止加载（非空头）","驻留时间不足且离开 → 中止加载","maxWaitMs 饥饿保护（超时放行）","仅在进入视口时生效","调试日志输出"],rO=["无限滚动信息流","防止快速滑动误加载","节省带宽与请求数","提升有效加载命中率"],sO=["v2 起通过引擎 onBeforeLoad 门控真实生效（旧版写在被引擎丢弃的钩子上，实际未拦截）；与 ViewportAware 的 rootMargin 搭配可进一步调优触发时机。"],iO={name:qz,description:Qz,since:Kz,tags:Yz,events:Xz,methods:Zz,methodsNote:Jz,config:eO,example:tO,examples:nO,features:oO,useCases:rO,notes:sO},aO="WatermarkPlugin",lO="文字水印覆盖层：支持四角/中心定位、动态文本与样式定制。",cO="2.0.0",uO=["visual","视觉"],dO=[{name:"renderOverlay",when:"每次渲染，覆盖在图片容器之上",description:"骨架屏、错误占位、水印、加载动画"}],pO=[],mO="只读取 context 字段（props / state / data），不调用上下文方法",gO=[{name:"text",type:"string | ((src: string) => string)",default:'"© 2024 Vane"',description:"水印文本；可传函数按 src 动态生成"},{name:"position",type:'"top-left" | "top-right" | "bottom-left" | "bottom-right" | "center"',default:'"bottom-right"',description:"水印位置"},{name:"opacity",type:"number",default:"0.8",description:"0~1 透明度"},{name:"fontSize",type:"number",default:"12",description:"px 字号"},{name:"color",type:"string",default:'"#fff"',description:"文字颜色"},{name:"offsetX",type:"number",default:"8",description:"px 水平偏移"},{name:"offsetY",type:"number",default:"8",description:"px 垂直偏移"},{name:"zIndex",type:"number",default:"2",description:"层叠顺序"},{name:"enabled",type:"boolean",default:"true",description:"是否启用"}],fO=`// 版权水印：右下角、半透明
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
});`,hO=[{name:"版权水印（右下角）",description:"半透明白字落在右下角，常见版权标识场景。",src:"https://picsum.photos/seed/wm-copyright/600/400",config:{text:"© 2026 Vane",position:"bottom-right",opacity:.6,fontSize:14,color:"#ffffff"}},{name:"中心品牌水印",description:"居中、低透明度大字，适合图库/作品集防盗用。",src:"https://picsum.photos/seed/wm-center/600/400",config:{text:"VANE",position:"center",opacity:.22,fontSize:30,color:"#ffffff"}},{name:"左上角说明水印",description:"左上角小字，作来源/批次标注。",src:"https://picsum.photos/seed/wm-topleft/600/400",config:{text:"内部素材 • 勿外传",position:"top-left",opacity:.85,fontSize:12,color:"#ffd400"}}],yO=["五位置可选（四角 + 中心）","文本支持静态字符串或函数动态派生","可调透明度 / 字号 / 颜色 / 偏移","可整体启停（enabled）","层叠顺序可控（zIndex）"],vO=["图片版权 / 品牌标识","图库与作品集防盗用","内部素材来源 / 批次标注","活动海报统一角标","按用户 / 租户动态打标"],wO=["text 传函数时按图片 src 动态生成（如嵌入 ID），但场景示例画廊需用静态文本以保证实时预览。","中心水印透明度建议低于 0.3，避免遮挡主体内容。","水印为覆盖层（renderOverlay），不参与图片本身像素，导出原图不会被打标。"],xO={name:aO,description:lO,since:cO,tags:uO,events:dO,methods:pO,methodsNote:mO,config:gO,example:fO,examples:hO,features:yO,useCases:vO,notes:wO},bO="WebPPlugin",PO="WebP 优先：在支持 WebP 的环境中自动将图片重写为 .webp（或自定义链接），失败时回退原图，体积更小加载更快。",$O="2.0.0",SO=["other","网络","性能","WebP"],CO=[{name:"onLoad",when:"加载流程开始、需要确定最终图片地址时",description:"自定义加载逻辑，返回最终图片 URL（objectURL / dataURL / 原地址）"},{name:"onLoadError",when:"加载失败（网络错误、解码失败、超时）",description:"返回 true 表示错误已被处理（如切换备用源），否则继续走默认降级"}],LO=[],IO="只读取 context 字段（props / state / data），不调用上下文方法",kO=[{name:"enabled",type:"boolean",default:"true",description:"是否启用"},{name:"rewrite",type:"(src, ctx) => string | undefined",default:"undefined",description:"自定义重写函数：返回 webp 链接"},{name:"replaceExtensions",type:"string[]",default:'["jpg", "jpeg", "png"]',description:"需替换为 .webp 的扩展名"},{name:"appendQueryParam",type:"string",default:"undefined",description:'追加的查询参数，如 "format=webp"'},{name:"onDomains",type:"string[]",default:"[]（不限制）",description:"限定生效域名"},{name:"testSupport",type:"boolean",default:"true",description:"运行前检测浏览器是否支持 webp"}],_O=`const WebPImage = withPlugins(LazyLoadImageCore, [
  createWebPPlugin({
    replaceExtensions: ["jpg", "jpeg", "png"],
    testSupport: true,
  }),
]);

<WebPImage src="https://example.com/photo.jpg" alt="WebP 示例" />;`,EO=[{name:"默认 WebP 优化",description:"对支持的图床自动重写（本示例用无扩展名 URL，不触发改写，仅展示配置）。",src:"https://picsum.photos/id/1015/500/300",config:{enabled:!0}},{name:"限定域名",description:"仅在指定域名生效，避免误改其它资源。",src:"https://picsum.photos/id/1021/500/300",config:{onDomains:["cdn.example.com"]}},{name:"跳过支持检测",description:"testSupport=false 直接尝试改写（需图床确实提供 webp）。",src:"https://picsum.photos/id/1026/500/300",config:{testSupport:!1}}],RO=["自动 WebP 改写","扩展名替换","查询参数追加","域名限定","支持检测","失败回退原图"],zO=["图片体积优化","现代浏览器加速","CDN WebP 支持","流量节省"],OO=["启用后若 webp 链接加载失败会自动回退到原图，不会白屏；示例中的 picsum 链接无扩展名，不会触发扩展名改写，可安全预览。"],DO={name:bO,description:PO,since:$O,tags:SO,events:CO,methods:LO,methodsNote:IO,config:kO,example:_O,examples:EO,features:RO,useCases:zO,notes:OO},MO="ZoomControlPlugin",jO="按钮式缩放控制（gallery 增强插件）：在工具条渲染 − / 重置 / + 按钮，调整 context.zoom，GalleryCore 对主图施加 scale 变换。",TO="2.1.0",NO=["gallery","图集","缩放","放大"],AO=[{name:"galleryToolbarArea",when:"渲染图库工具栏时",description:"缩放、下载、分享等图库级操作"}],BO=[{name:"setZoom",signature:"ctx.setZoom(z: number): void",description:"设置图库缩放比例（按钮式缩放控制的写入入口）"}],UO=[{name:"step",type:"number",default:"0.5",description:"每步缩放增量"},{name:"min",type:"number",default:"1",description:"最小缩放"},{name:"max",type:"number",default:"4",description:"最大缩放"}],FO=`import { GalleryCore } from "vane-lazy-image/gallery";
import { createZoomControlPlugin } from "vane-lazy-image/custom-plugins/ZoomControlPlugin";

<GalleryCore images={images} plugins={[createZoomControlPlugin()]} />`,VO=[{name:"主图缩放",description:"点击 + 放大主图（scale 变换），>1 时主图区可滚动查看细节；点击重置回到 100%。",config:{}}],WO=["−/重置/+ 按钮","实时 scale 变换","缩放范围限制","与主图区滚动联动"],HO=["商品细节查看","高清图放大","材质纹理 inspection"],GO=["zoom 经 GalleryCore 的 context.zoom 施加到主图区；为协调态，切换即重渲染。"],qO={name:MO,description:jO,since:TO,tags:NO,events:AO,methods:BO,config:UO,example:FO,examples:VO,features:WO,useCases:HO,notes:GO};var QO=Object.defineProperty,KO=(e,t,n)=>t in e?QO(e,t,{enumerable:!0,configurable:!0,writable:!0,value:n}):e[t]=n,Kt=(e,t,n)=>KO(e,typeof t!="symbol"?t+"":t,n);let YO=class{constructor(t,n={}){Kt(this,"id"),Kt(this,"config"),Kt(this,"metrics"),Kt(this,"startTime"),Kt(this,"endTime"),this.id=t,this.config={enabled:n.enabled??!0,collectVitals:n.collectVitals??!0,enableDebug:n.enableDebug??!1,retentionTime:n.retentionTime??5*60*1e3},this.metrics={marks:{},measures:{},custom:{}},this.startTime=this.now(),this.config.collectVitals&&this.collectWebVitals(),this.config.enableDebug&&console.debug(`[PerformanceMonitor] Created: ${this.id}`)}now(){return performance.now()}mark(t){if(!this.config.enabled)return;const n=this.now();if(this.metrics.marks[t]=n,typeof performance<"u"&&performance.mark)try{performance.mark(`${this.id}:${t}`)}catch{}this.config.enableDebug&&console.debug(`[PerformanceMonitor] Mark: ${t} @ ${n.toFixed(2)}ms`)}measure(t,n,o){if(!this.config.enabled)return;const r=this.metrics.marks[n];if(r===void 0){console.warn(`[PerformanceMonitor] Start mark not found: ${n}`);return}const s=o?this.metrics.marks[o]:this.now();if(s===void 0){console.warn(`[PerformanceMonitor] End mark not found: ${o}`);return}const i=s-r;if(this.metrics.measures[t]=i,typeof performance<"u"&&performance.measure)try{performance.measure(`${this.id}:${t}`,`${this.id}:${n}`,o?`${this.id}:${o}`:void 0)}catch{}return this.config.enableDebug&&console.debug(`[PerformanceMonitor] Measure: ${t} = ${i.toFixed(2)}ms`),i}setCustomMetric(t,n){this.config.enabled&&(this.metrics.custom[t]=n)}collectWebVitals(){if(!(typeof performance>"u")){if(this.metrics.vitals={},performance.timing){const t=performance.timing,n=t.navigationStart;t.responseStart&&(this.metrics.vitals.ttfb=t.responseStart-n)}if(typeof PerformanceObserver<"u")try{new PerformanceObserver(t=>{const n=t.getEntries().find(o=>o.name==="first-contentful-paint");n&&this.metrics.vitals&&(this.metrics.vitals.fcp=n.startTime)}).observe({entryTypes:["paint"]}),new PerformanceObserver(t=>{const n=t.getEntries(),o=n[n.length-1];o&&this.metrics.vitals&&(this.metrics.vitals.lcp=o.startTime)}).observe({entryTypes:["largest-contentful-paint"]})}catch{}}}end(){this.endTime||(this.endTime=this.now(),this.mark("end"),this.config.enableDebug&&console.debug(`[PerformanceMonitor] Ended: ${this.id}`))}analyzeCriticalPath(){const t=this.metrics.marks,n={};return t.mount!==void 0&&t["load-start"]!==void 0&&(n.discoveryDelay=t["load-start"]-t.mount),t["load-start"]!==void 0&&t["load-end"]!==void 0&&(n.loadDelay=t["load-end"]-t["load-start"]),t["load-end"]!==void 0&&t["render-end"]!==void 0&&(n.renderDelay=t["render-end"]-t["load-end"]),Object.keys(n).length>0?n:void 0}generateRecommendations(){var o;const t=[],n=this.analyzeCriticalPath();return n!=null&&n.discoveryDelay&&n.discoveryDelay>100&&t.push(`发现延迟较高 (${n.discoveryDelay.toFixed(0)}ms)，考虑使用 preload 或提前触发加载`),n!=null&&n.loadDelay&&n.loadDelay>2e3&&t.push(`加载延迟较高 (${n.loadDelay.toFixed(0)}ms)，考虑优化图片大小或使用 CDN`),n!=null&&n.renderDelay&&n.renderDelay>50&&t.push(`渲染延迟较高 (${n.renderDelay.toFixed(0)}ms)，考虑优化渲染逻辑`),(o=this.metrics.vitals)!=null&&o.lcp&&this.metrics.vitals.lcp>2500&&t.push(`LCP 较慢 (${this.metrics.vitals.lcp.toFixed(0)}ms)，建议优化首屏图片加载`),t}getReport(){const t=this.endTime?this.endTime-this.startTime:this.now()-this.startTime;return{id:this.id,startTime:this.startTime,endTime:this.endTime,duration:t,metrics:this.metrics,criticalPath:this.analyzeCriticalPath(),recommendations:this.generateRecommendations()}}dispose(){if(typeof performance<"u")try{performance.getEntriesByType("mark").forEach(t=>{t.name.startsWith(`${this.id}:`)&&performance.clearMarks(t.name)}),performance.getEntriesByType("measure").forEach(t=>{t.name.startsWith(`${this.id}:`)&&performance.clearMeasures(t.name)})}catch{}this.config.enableDebug&&console.debug(`[PerformanceMonitor] Disposed: ${this.id}`)}};function gl(e,t){return new YO(e,t)}let XO=class{constructor(t={}){Kt(this,"monitors",new Map),Kt(this,"config"),this.config=t}getOrCreate(t){let n=this.monitors.get(t);return n||(n=gl(t,this.config),this.monitors.set(t,n)),n}getAllReports(){return Array.from(this.monitors.values()).map(t=>t.getReport())}cleanup(t=5*60*1e3){const n=performance.now();this.monitors.forEach((o,r)=>{const s=o.getReport();s.endTime&&n-s.endTime>t&&(o.dispose(),this.monitors.delete(r))})}disposeAll(){this.monitors.forEach(t=>t.dispose()),this.monitors.clear()}},Dn=null;function ZO(e){return Dn||(Dn=new XO(e)),Dn}function JO(){Dn&&(Dn.disposeAll(),Dn=null)}var eD=Object.defineProperty,tD=(e,t,n)=>t in e?eD(e,t,{enumerable:!0,configurable:!0,writable:!0,value:n}):e[t]=n,ot=(e,t,n)=>tD(e,typeof t!="symbol"?t+"":t,n);const jp=class fn{constructor(){ot(this,"observers",new Map),ot(this,"elementToKey",new Map),ot(this,"observerCallbacks",new Map),ot(this,"observerStats",new Map),ot(this,"rootIds",new WeakMap),ot(this,"rootIdCounter",0),ot(this,"totalCallbackExecutions",0),ot(this,"debugMode",!1),ot(this,"cleanupTimer")}static supportsIntersectionObserver(){return typeof IntersectionObserver<"u"}static getInstance(){return fn.instance||(fn.instance=new fn),fn.instance}setDebugMode(t){this.debugMode=t,t&&(console.log("[ObserverPool] Debug mode enabled"),console.log("[ObserverPool] Current stats:",this.getStats()))}startAutoCleanup(){typeof window>"u"||this.cleanupTimer||(this.cleanupTimer=setInterval(()=>{const t=Date.now(),n=6e4;if(this.observers.size===0){this.stopAutoCleanup();return}this.observerStats.forEach((o,r)=>{if(t-o.lastUsedAt>n&&o.elementCount===0){const s=this.observers.get(r);s&&(s.disconnect(),this.observers.delete(r),this.observerCallbacks.delete(r),this.observerStats.delete(r),this.debugMode&&console.log(`[ObserverPool] Auto-cleaned idle observer: ${r}`))}})},6e4))}stopAutoCleanup(){this.cleanupTimer&&(clearInterval(this.cleanupTimer),this.cleanupTimer=void 0)}getRootId(t){if(!t)return"null";let n=this.rootIds.get(t);return n||(n=`r${++this.rootIdCounter}`,this.rootIds.set(t,n)),n}getConfigKey(t){const{root:n,rootMargin:o="0px",threshold:r=0}=t,s=`root-${this.getRootId(n)}`,i=Array.isArray(r)?r.join(","):String(r);return`${s}|${o}|${i}`}observe(t,n,o={},r=!1){if(!fn.supportsIntersectionObserver()){try{n(!0)}catch(d){this.debugMode&&console.warn("[ObserverPool] fallback callback failed",d)}return()=>{}}const s=this.getConfigKey(o),i=Date.now();if(!this.observers.has(s)){let d;try{d=new IntersectionObserver(p=>{p.forEach(g=>{const v=this.observerCallbacks.get(s);v&&v.forEach(w=>{if(w.element===g.target){this.totalCallbackExecutions++;const b=this.observerStats.get(s);b&&(b.totalCallbacks++,b.lastUsedAt=Date.now()),w.callback(g.isIntersecting),w.unobserveOnVisible&&g.isIntersecting&&this.unobserve(g.target)}})})},{root:o.root||null,rootMargin:o.rootMargin||"0px",threshold:o.threshold??0})}catch(p){this.debugMode&&console.warn("[ObserverPool] IntersectionObserver unavailable, fallback to eager",p);try{n(!0)}catch{}return()=>{}}this.startAutoCleanup(),this.observers.set(s,d),this.observerCallbacks.set(s,new Set),this.observerStats.set(s,{key:s,elementCount:0,createdAt:i,lastUsedAt:i,totalCallbacks:0}),this.debugMode&&console.log(`[ObserverPool] Created new observer for config: ${s}`)}const a=this.observers.get(s),l=this.observerCallbacks.get(s),c={element:t,callback:n,unobserveOnVisible:r,addedAt:i};l.add(c),this.elementToKey.set(t,s);const u=this.observerStats.get(s);return u&&(u.elementCount++,u.lastUsedAt=i),a.observe(t),this.debugMode&&console.log(`[ObserverPool] Observing element, total: ${this.elementToKey.size}`),()=>this.unobserve(t)}unobserve(t){const n=this.elementToKey.get(t);if(!n)return;const o=this.observers.get(n),r=this.observerCallbacks.get(n);if(o&&r){o.unobserve(t);let s=0;Array.from(r).forEach(a=>{a.element===t&&(r.delete(a),s++)}),this.elementToKey.delete(t);const i=this.observerStats.get(n);i&&(i.elementCount=Math.max(0,i.elementCount-Math.max(1,s)),i.lastUsedAt=Date.now()),r.size===0&&this.debugMode&&console.log(`[ObserverPool] Observer ${n} has no elements (will auto-clean later)`)}}disconnectAll(){this.observers.forEach(t=>t.disconnect()),this.observers.clear(),this.observerCallbacks.clear(),this.elementToKey.clear(),this.observerStats.clear(),this.stopAutoCleanup(),this.debugMode&&console.log("[ObserverPool] Disconnected all observers")}getObserverCount(){return this.observers.size}getElementCount(){return this.elementToKey.size}getStats(){const t=this.observers.size,n=this.elementToKey.size,o=t>0?n/t:0,r=Date.now();let s,i,a;this.observerStats.forEach(u=>{const d=r-u.createdAt;(!s||d>s.age)&&(s={key:u.key,age:d}),(!i||d<i.age)&&(i={key:u.key,age:d}),(!a||u.elementCount>a.elementCount)&&(a={key:u.key,elementCount:u.elementCount})});const l=t*1024+n*100,c=l>1024*1024?`${(l/(1024*1024)).toFixed(2)} MB`:`${(l/1024).toFixed(2)} KB`;return{observerCount:t,elementCount:n,averageElementsPerObserver:Math.round(o*100)/100,oldestObserver:s,newestObserver:i,mostUsedObserver:a,totalCallbackExecutions:this.totalCallbackExecutions,memoryEstimate:c}}getObserverDetails(){return Array.from(this.observerStats.values())}cleanup(){let t=0;return this.observerCallbacks.forEach((n,o)=>{if(n.size===0){const r=this.observers.get(o);r&&(r.disconnect(),this.observers.delete(o),this.observerCallbacks.delete(o),this.observerStats.delete(o),t++)}}),this.debugMode&&console.log(`[ObserverPool] Manual cleanup: removed ${t} idle observers`),t}resetStats(){this.totalCallbackExecutions=0,this.observerStats.forEach(t=>{t.totalCallbacks=0}),this.debugMode&&console.log("[ObserverPool] Stats reset")}};ot(jp,"instance");let nD=jp;const Ht=nD.getInstance(),Tp=(e,t,n,o)=>Ht.observe(e,t,n,o),oD=e=>Ht.unobserve(e),rD=()=>Ht.getStats(),sD=e=>Ht.setDebugMode(e),iD=()=>Ht.getObserverDetails(),aD=()=>Ht.cleanup(),lD=()=>Ht.resetStats();function cD(e,t){switch(t.type){case"LOAD_START":return{status:"loading",displaySrc:t.payload.src,error:null,requestId:t.payload.requestId};case"LOAD_SUCCESS":return t.payload.requestId!==e.requestId?e:{...e,status:"loaded",displaySrc:t.payload.src||e.displaySrc,error:null};case"LOAD_ERROR":return t.payload.requestId!==e.requestId?e:{...e,status:"error",error:t.payload.error};case"RESET":return{status:"idle",displaySrc:null,error:null,requestId:e.requestId};default:return e}}function bt(e,t){if(!e||!t||e===t)return!0;try{const n=typeof document<"u"?document.baseURI:"http://localhost/";return new URL(e,n).href===new URL(t,n).href}catch{return!1}}function uD(e,t){const{root:n,rootMargin:o="200px 0px",threshold:r=0,unobserveOnVisible:s=!1}=t||{},[i,a]=x.useState(!1),l=x.useMemo(()=>JSON.stringify({rootMargin:o,threshold:r,unobserveOnVisible:s}),[o,r,s]);return x.useEffect(()=>{const c=e.current;if(!c)return;const u=Tp(c,d=>{a(d)},{root:n||null,rootMargin:o,threshold:r},s);return()=>{u()}},[l,n]),{inView:i}}const Np=x.forwardRef((e,t)=>{const{src:n,alt:o="",root:r,rootMargin:s,threshold:i,unobserveOnVisible:a,loading:l="lazy",isLCP:c=!1,fetchPriority:u="auto",enablePerformanceMonitor:d=!1,onBeforeLoad:p,onLoadStart:g,onLoadSuccess:v,onLoadError:w,onEnterViewport:b,onLeaveViewport:y,children:f,containerStyle:h,containerClassName:P,imageStyle:$,imageClassName:I,aspectRatio:k,srcSet:_,sizes:S}=e,L=x.useRef(null),j=x.useRef(null),N=x.useRef(null),z=x.useRef(null);x.useEffect(()=>(d&&!z.current&&(z.current=gl(`lazy-image-${n}`,{enabled:!0,collectVitals:!1,enableDebug:!1}),z.current.mark("mount")),()=>{z.current&&(z.current.end(),z.current.dispose(),z.current=null)}),[d,n]);const[O,U]=x.useReducer(cD,{status:"idle",displaySrc:null,error:null,requestId:0}),re=x.useRef(null),K=x.useRef(null),R=x.useRef(0),M=x.useRef(!1),T=x.useRef(n),H=x.useRef(0),V=x.useRef(null),[G,q]=x.useState(0),le=5,pe=300,ee=x.useMemo(()=>!(c||l==="eager"),[c,l]),{inView:we}=uD(L,{root:r,rootMargin:s,threshold:i,unobserveOnVisible:a}),Kn=x.useMemo(()=>c?"eager":l==="auto"?"lazy":l,[c,l]),Yo=x.useMemo(()=>c?"high":u,[c,u]),Cs=x.useRef(!1);x.useEffect(()=>{var W,Me;we&&!Cs.current?((W=z.current)==null||W.mark("enter-viewport"),b==null||b()):!we&&Cs.current&&((Me=z.current)==null||Me.mark("leave-viewport"),y==null||y()),Cs.current=we},[we,b,y]);const vl=x.useCallback(()=>{H.current>=le||(H.current+=1,V.current&&clearTimeout(V.current),V.current=setTimeout(()=>{V.current=null,q(W=>W+1)},pe))},[]),Xo=x.useCallback(async()=>{var me;if(!n.trim()){M.current=!1,re.current=null,K.current=null,U({type:"RESET"});return}if(M.current||K.current===n)return;M.current=!0,re.current=n;const W=++R.current;(me=z.current)==null||me.mark("load-start"),N.current&&N.current.abort(),N.current=new AbortController;const Me=N.current;g==null||g();try{const _e=await Promise.resolve(p==null?void 0:p());if(Me.signal.aborted||R.current!==W)return;H.current=0;const Fe=_e||n;if(!Fe.trim()){M.current=!1,U({type:"RESET"});return}U({type:"LOAD_START",payload:{src:Fe,requestId:W}})}catch(_e){if(Me.signal.aborted||R.current!==W)return;if(_e instanceof Error&&_e.message==="LLI_PLUGIN_GATE"){M.current=!1,U({type:"RESET"}),vl();return}M.current=!1,K.current=n;const Fe=_e instanceof Error?_e:new Error(String(_e));U({type:"LOAD_ERROR",payload:{error:Fe,requestId:W}}),w==null||w(Fe)}},[n,p,g,w,vl]);x.useEffect(()=>{var W;T.current!==n&&(T.current=n,(W=N.current)==null||W.abort(),N.current=null,R.current+=1,M.current=!1,re.current=null,K.current=null,H.current=0,V.current&&(clearTimeout(V.current),V.current=null),U({type:"RESET"}))},[n]),x.useEffect(()=>{ee?we&&Xo():Xo()},[we,n,ee,G]),x.useEffect(()=>()=>{N.current&&(N.current.abort(),N.current=null),V.current&&(clearTimeout(V.current),V.current=null)},[]);const Ls=x.useCallback(()=>{U({type:"RESET"})},[]);x.useImperativeHandle(t,()=>({reload:()=>{var W;(W=N.current)==null||W.abort(),N.current=null,R.current+=1,M.current=!1,re.current=null,K.current=null,H.current=0,Ls(),(!ee||we)&&Xo()},reset:()=>{var W;(W=N.current)==null||W.abort(),N.current=null,R.current+=1,M.current=!1,re.current=null,K.current=null,Ls()},getState:()=>({isIdle:O.status==="idle",isLoading:O.status==="loading",isLoaded:O.status==="loaded",isError:O.status==="error"}),getPerformanceReport:()=>{var W;return((W=z.current)==null?void 0:W.getReport())||null}}),[we,Xo,ee,O.status,Ls]);const am=x.useMemo(()=>({position:"relative",width:"100%",height:"auto",...k!==void 0?{aspectRatio:String(k)}:null,overflow:"hidden",background:O.status==="error"?"#fee":"#f5f5f5",...h&&(h.background||h.backgroundColor)?null:{color:"#4a4a4a"},display:"flex",alignItems:"center",justifyContent:"center",...h}),[h,O.status,k]);return m.jsxs("div",{ref:W=>{L.current=W,e.containerRefExternal&&(e.containerRefExternal.current=W)},className:P,style:am,children:[O.status==="loading"&&m.jsx("div",{style:{position:"absolute",inset:0,display:"flex",alignItems:"center",justifyContent:"center",pointerEvents:"none",zIndex:2},children:m.jsx("span",{style:{color:"inherit",fontSize:12},children:"Loading..."})}),O.displaySrc?m.jsx("img",{"data-lli-request":O.requestId,"data-lli-src":O.displaySrc,ref:W=>{j.current=W,e.imageRefExternal&&(e.imageRefExternal.current=W)},src:O.displaySrc,alt:o,srcSet:_,sizes:S,loading:Kn,...Yo!=="auto"&&{fetchpriority:Yo},crossOrigin:e.crossOrigin??void 0,decoding:e.decoding??void 0,referrerPolicy:e.referrerPolicy??void 0,onLoad:W=>{var Xn,Zn,Jn;if(O.status!=="loading"&&O.status!=="error")return;const Me=W.currentTarget,me=(Me.currentSrc||Me.src||"").trim(),_e=(O.displaySrc||"").trim(),Fe=(Me.getAttribute("src")||"").trim(),Yn=O.status==="error";if(Yn){if(!me||bt(me,_e)||!bt(me,Fe))return}else if(me&&!bt(me,_e)&&!bt(me,Fe))return;M.current=!1,K.current=null,(Xn=z.current)==null||Xn.mark("load-end"),(Zn=z.current)==null||Zn.measure("load-duration","load-start","load-end"),(Jn=z.current)==null||Jn.measure("total-duration","mount","load-end"),U({type:"LOAD_SUCCESS",payload:{requestId:O.requestId,...Yn?{src:me||Fe}:null}}),v==null||v(me||_e||void 0)},onError:W=>{var Zn,Jn;if(O.status!=="loading"&&O.status!=="error")return;const Me=W.currentTarget,me=(Me.currentSrc||Me.src||"").trim(),_e=(O.displaySrc||"").trim(),Fe=(Me.getAttribute("src")||"").trim(),Yn=O.status==="error";if(Yn){if(!me||bt(me,_e)||!bt(me,Fe))return}else if(me&&!bt(me,_e)&&!bt(me,Fe))return;Yn||(M.current=!1,K.current=n),(Zn=z.current)==null||Zn.mark("load-error"),(Jn=z.current)==null||Jn.measure("error-duration","load-start","load-error");const Xn=new Error("Image load error");U({type:"LOAD_ERROR",payload:{error:Xn,requestId:O.requestId}}),w==null||w(Xn)},style:{width:"100%",height:"auto",objectFit:"cover",opacity:O.status==="loaded"?1:0,transition:"opacity 180ms ease",...$},className:I}):null,f]})});Np.displayName="LazyLoadImageCore";const dD={CRITICAL:10,HIGH:50,NORMAL:100,LOW:150,DEBUG:200},pD={BEFORE_LOAD:"onBeforeLoad",LOAD_START:"onLoadStart",LOAD_SUCCESS:"onLoadSuccess",LOAD_ERROR:"onLoadError",LOAD:"onLoad",ENTER_VIEWPORT:"onEnterViewport",LEAVE_VIEWPORT:"onLeaveViewport",MOUNT:"onMount",UNMOUNT:"onUnmount",PROGRESS:"onProgress",SRC_CHANGE:"onSrcChange",NETWORK_CHANGE:"onNetworkChange",RESIZE:"onResize",RETRY:"onRetry"},_t={TIMEOUT:3e4,MAX_RETRIES:3,RETRY_DELAY:1e3,RETRY_BACKOFF:2,CACHE_SIZE_INFLIGHT:50,CACHE_SIZE_CONTROLLERS:50,CACHE_SIZE_OBJECT_URLS:100},ca={CLIENT_ERROR_MIN:400,CLIENT_ERROR_MAX:500,SERVER_ERROR_MIN:500,SERVER_ERROR_MAX:600,OK:200,NOT_FOUND:404,FORBIDDEN:403,UNAUTHORIZED:401,INTERNAL_SERVER_ERROR:500,SERVICE_UNAVAILABLE:503},mD={RETENTION_TIME:5*60*1e3,HIGH_DISCOVERY_DELAY_THRESHOLD:100,HIGH_LOAD_DELAY_THRESHOLD:2e3,HIGH_RENDER_DELAY_THRESHOLD:50,SLOW_LCP_THRESHOLD:2500},gD={ROOT_MARGIN:"200px 0px",THRESHOLD:0,UNOBSERVE_ON_VISIBLE:!1},fD={NETWORK_CHANGE:1e3,WINDOW_RESIZE:300,SCROLL:100},hD={LAZY:"lazy",EAGER:"eager",AUTO:"auto"},yD={HIGH:"high",LOW:"low",AUTO:"auto"};function Ap(e){const t=new Map(e.map(a=>[a.name,a])),n=[];for(const a of e)for(const l of a.dependencies??[])t.has(l)||n.push(`${a.name} -> ${l}`);const o=[],r=new Set,s=[...e],i=a=>(a.dependencies??[]).every(l=>r.has(l)||!t.has(l));for(;s.length>0;){const a=s.filter(i);if(a.length===0)throw new Error(`[vane/plugin-core] 插件循环依赖: ${s.map(c=>c.name).join(" <-> ")}`);let l=a[0];for(const c of a)(c.priority??0)>(l.priority??0)&&(l=c);o.push(l),r.add(l.name),s.splice(s.indexOf(l),1)}return n.length>0&&console.warn(`[vane/plugin-core] 以下插件依赖未注册，将被忽略:
  ${n.join(`
  `)}`),o}function Bp(e,t){try{return Ap(e)}catch(n){return t==null||t(n),e}}async function vD(e,t={}){const{timeout:n=3e3,name:o="anonymous",hook:r="unknown"}=t;if(!n||n<=0)return await e();let s;const i=new Promise((a,l)=>{s=setTimeout(()=>{l(new Error(`[vane/plugin-core] 插件 ${o} 的钩子 ${r} 超时(${n}ms)`))},n)});try{return await Promise.race([Promise.resolve().then(e),i])}finally{s&&clearTimeout(s)}}const wD=new Set(["onMount","onUnmount","onPropsChange","onError"]);function xD(e={}){const t=e.logger??console,n=e.sandbox??!0,o=e.timeout??3e3,r=[];let s=[];const i=new Map,a=new Map,l=new Set;let c=0,u=null,d=0;const p=(S,L,j)=>{r.push({plugin:S,hook:L,error:j})},g=()=>{c+=1,u=null},v=(S,L=new Set)=>S.enabled===!1?!1:L.has(S.name)?!0:(L.add(S.name),(S.dependencies??[]).every(j=>{const N=i.get(j);return!N||v(N,L)})),w=()=>{if(u)return u;const S=[...i.values()].filter(L=>v(L)?!0:(p(L.name,"dependencies",new Error("依赖已停用")),!1));return u=Bp(S,L=>p("[order]","resolveDependencyOrder",L))},b=S=>{const L=s.filter(([j])=>!S||j===S).reverse();s=S?s.filter(([j])=>j!==S):[];for(const[,j]of L)try{j()}catch(N){t.warn("[vane] cleanup failed",N)}},y=S=>{var L;return Promise.resolve((L=S.destroy)==null?void 0:L.call(S)).catch(j=>t.warn(`[vane] destroy failed: ${S.name}`,j))},f=async(S,L,j,N,z)=>{var K,R;const O=L==="onUnmount";if(L==="onMount"||O){if(l.has(S.name)!==O)return{};O?l.delete(S.name):l.add(S.name)}const U=(K=S.hooks)==null?void 0:K[L];if(typeof U!="function")return{};let re;try{const M=()=>U(j,...N);re=S.sandbox??n?await vD(M,{timeout:S.timeout??o,name:S.name,hook:L}):await M()}catch(M){return z!==c?{}:(p(S.name,L,M),t.warn(`[vane] ${L} failed: ${S.name}`,M),(R=e.onError)==null||R.call(e,S.name,L,M),{stop:L==="onError"})}return z!==c?{}:wD.has(L)&&typeof re=="function"?(s.push([S.name,re]),{}):{value:re}},h=async(S,L,j)=>{const N=c;for(const z of w()){if(N!==c)return;const O=await f(z,S,L,j,N);if(O.stop)return;if(O.value===!1)return!1;if(O.value!==void 0&&O.value!==!0)return O.value}},P=(S,L,...j)=>h(S,L,j),$=S=>{i.get(S.name)&&a.get(S.name)!==S&&(t.warn(`[vane] duplicate plugin, destroy old: ${S.name}`),_(S.name)),i.set(S.name,{...S,enabled:S.enabled??!0}),a.set(S.name,S),l.delete(S.name),g(),S.init&&Promise.resolve(S.init()).catch(L=>{t.warn(`[vane] init failed: ${S.name}`,L)})},I=S=>S.forEach($),k=S=>{i.delete(S),a.delete(S),l.delete(S),u=null},_=S=>{const L=i.get(S);L&&(g(),b(S),y(L),k(S))};return{register:$,registerAll:I,unregister:_,getPlugin:S=>i.get(S),getAllPlugins:()=>[...i.values()],getEnabledPlugins:()=>[...i.values()].filter(S=>S.enabled!==!1),getExecutionOrder:()=>[...w()],enable:S=>{const L=i.get(S);L&&(L.enabled=!0,u=null)},disable:S=>{const L=i.get(S);L&&(L.enabled=!1,u=null)},has:S=>i.has(S),executeHook:P,clear:()=>{g(),d+=1,b();const S=[...i.values()].map(y);return i.clear(),a.clear(),l.clear(),Promise.all(S).then(()=>{})},getErrors:()=>[...r],align:async(S,L)=>{const j=++d,N=new Map(S.map(z=>[z.name,z]));for(const z of[...i.keys()]){if(j!==d)return;if(a.get(z)===N.get(z))continue;const O=i.get(z);g(),await f(O,"onUnmount",L,[],c),b(z),await y(O),k(z)}for(const z of S){if(j!==d)return;a.get(z.name)!==z&&$(z)}},peekOrder:w}}var bD=Object.defineProperty,PD=(e,t,n)=>t in e?bD(e,t,{enumerable:!0,configurable:!0,writable:!0,value:n}):e[t]=n,Qt=(e,t,n)=>PD(e,typeof t!="symbol"?t+"":t,n);const Up=class go{constructor(){Qt(this,"networkInfo"),Qt(this,"deviceInfo"),Qt(this,"listeners",new Set),Qt(this,"initialized",!1),Qt(this,"disposeFns",[]),Qt(this,"resizeTimer"),this.initListeners()}static getInstance(){return go.instance||(go.instance=new go),go.instance}ensureInitialized(){this.initialized||this.initListeners()}initListeners(){if(typeof window>"u"||this.initialized)return;this.initialized=!0;const t=typeof navigator<"u"?navigator:void 0,n=(t==null?void 0:t.connection)||(t==null?void 0:t.mozConnection)||(t==null?void 0:t.webkitConnection);if(n){const s=()=>{this.networkInfo=void 0,this.notifyListeners()};n.addEventListener("change",s),this.disposeFns.push(()=>n.removeEventListener("change",s))}const o=()=>{this.networkInfo=void 0,this.notifyListeners()};window.addEventListener("online",o),window.addEventListener("offline",o),this.disposeFns.push(()=>{window.removeEventListener("online",o),window.removeEventListener("offline",o)});const r=()=>{this.resizeTimer&&clearTimeout(this.resizeTimer),this.resizeTimer=window.setTimeout(()=>{this.resizeTimer=void 0,this.deviceInfo=void 0,this.notifyListeners()},300)};window.addEventListener("resize",r),this.disposeFns.push(()=>{window.removeEventListener("resize",r),this.resizeTimer&&(clearTimeout(this.resizeTimer),this.resizeTimer=void 0)})}dispose(){this.disposeFns.forEach(t=>{try{t()}catch{}}),this.disposeFns=[],this.initialized=!1,this.networkInfo=void 0,this.deviceInfo=void 0}getNetworkInfo(){return this.ensureInitialized(),this.networkInfo||(this.networkInfo=this.detectNetwork()),this.networkInfo}getDeviceInfo(){return this.ensureInitialized(),this.deviceInfo||(this.deviceInfo=this.detectDevice()),this.deviceInfo}detectNetwork(){if(typeof navigator>"u")return;const t=navigator,n=t.connection||t.mozConnection||t.webkitConnection;return{online:t.onLine!==void 0?t.onLine:!0,effectiveType:(n==null?void 0:n.effectiveType)||"4g",downlink:Number((n==null?void 0:n.downlink)||10),rtt:Number((n==null?void 0:n.rtt)||50),saveData:!!(n!=null&&n.saveData)}}detectDevice(){const t=typeof window<"u"?window.innerWidth:1024,n=typeof window<"u"?window.innerHeight:768,o=typeof window<"u"&&window.devicePixelRatio||1,r=typeof navigator<"u"&&navigator.userAgent||"",s=/Mobile|Android|iPhone|iPad/i.test(r);return{type:/iPad|Tablet/i.test(r)?"tablet":s?"mobile":"desktop",os:r,browser:r,devicePixelRatio:o,viewportWidth:t,viewportHeight:n,isTouchDevice:typeof window<"u"&&"ontouchstart"in window,isRetina:o>=2}}addListener(t){return this.ensureInitialized(),this.listeners.add(t),()=>this.listeners.delete(t)}notifyListeners(){this.listeners.forEach(t=>{try{t()}catch(n){console.error("[GlobalContext] Listener error:",n)}})}refreshNetworkInfo(){this.networkInfo=void 0,this.networkInfo=this.detectNetwork(),this.notifyListeners()}refreshDeviceInfo(){this.deviceInfo=void 0,this.deviceInfo=this.detectDevice(),this.notifyListeners()}getStats(){return{listenersCount:this.listeners.size,hasNetworkInfo:!!this.networkInfo,hasDeviceInfo:!!this.deviceInfo}}};Qt(Up,"instance");let $D=Up;const Ko=$D.getInstance(),ss=()=>Ko.getNetworkInfo(),SD=()=>Ko.getDeviceInfo(),Fp=e=>Ko.addListener(e),CD=()=>Ko.getStats();function LD(){const e=new Map,t=new Map;let n=0;const o=(a,l)=>{const c=e.get(a);if(c){if(n>=50){console.warn(`[PluginBus] emit depth exceeded: "${a}"`);return}n+=1;for(const u of[...c])try{u(l)}catch(d){console.warn(`[PluginBus] handler error for event "${a}"`,d)}n-=1}},r=(a,l)=>{let c=e.get(a);c||(c=new Set,e.set(a,c));const u=l;return c.add(u),()=>{c==null||c.delete(u)}},s=(a,l)=>{const c=u=>{try{l(u)}finally{i(a,c)}};return r(a,c)},i=(a,l)=>{var c;if(!l){e.delete(a);return}(c=e.get(a))==null||c.delete(l)};return{emit:o,on:r,once:s,off:i,getData:a=>t.get(a),setData:(a,l)=>{const c=t.get(a);t.set(a,l),c!==l&&o(a,l)},deleteData:a=>{const l=t.has(a);t.delete(a),l&&o(a,void 0)},hasData:a=>t.has(a),getAll:()=>{const a=Object.create(null);return t.forEach((l,c)=>{a[c]=l}),a},clear:()=>{e.clear(),t.clear()}}}var ID=Object.defineProperty,kD=(e,t,n)=>t in e?ID(e,t,{enumerable:!0,configurable:!0,writable:!0,value:n}):e[t]=n,_D=(e,t,n)=>kD(e,t+"",n);let Vp=class extends A.Component{constructor(){super(...arguments),_D(this,"state",{error:null})}static getDerivedStateFromError(t){return{error:t}}componentDidUpdate(t){var r,s;const n=t.resetKeys??[],o=this.props.resetKeys??[];this.state.error&&(n.length!==o.length||n.some((i,a)=>!Object.is(i,o[a])))&&((s=(r=this.props).onReset)==null||s.call(r),this.setState({error:null}))}componentDidCatch(t,n){var o,r;console.warn("[vane/plugin-core] 插件渲染错误已被隔离",t,n),(r=(o=this.props).onError)==null||r.call(o,t,n)}render(){const{error:t}=this.state;return t?this.props.fallback?this.props.fallback(t):null:this.props.children}},fr=null;function ED(e=!1){if(fr&&!e)return fr;const t=typeof window<"u"?window.innerWidth:1024,n=typeof window<"u"?window.innerHeight:768,o=typeof window<"u"&&window.devicePixelRatio||1,r=typeof navigator<"u"&&navigator.userAgent||"",s=/iPad|Tablet/i.test(r),i=/Mobile|Android|iPhone/i.test(r),a=typeof window<"u"&&("ontouchstart"in window||(navigator.maxTouchPoints??0)>0);return fr={type:s?"tablet":i?"mobile":"desktop",os:r,browser:r,devicePixelRatio:o,viewportWidth:t,viewportHeight:n,isTouchDevice:a,isRetina:o>=2},fr}function Ac(e,t){if(Object.is(e,t))return!0;if(typeof e!="object"||typeof t!="object"||e===null||t===null)return!1;const n=Object.keys(e),o=Object.keys(t);return n.length!==o.length?!1:n.every(r=>Object.is(e[r],t[r]))}function RD(e){const{plugins:t,props:n,data:o,initialState:r,containerRef:s,enableDebug:i=!1,managerOptions:a,extendContext:l}=e,c=x.useRef(null),u=s??c,d=x.useRef(null);d.current||(d.current=xD(a));const p=d.current,g=x.useRef(null);g.current||(g.current=LD());const v=g.current,w=x.useRef(new Map),[b,y]=x.useState(r??{}),[,f]=x.useState(0),h=x.useCallback(()=>f(G=>G+1),[]),P=x.useMemo(()=>ED(),[]),$=x.useRef(n);Ac($.current,n)||($.current=n);const I=$.current,k=x.useRef(o);Ac(k.current,o)||(k.current=o);const _=k.current,S=x.useRef(null),L=x.useMemo(()=>{const G={props:I,data:_,bus:v,refs:{container:u,getContainer:()=>u.current},state:b,setState:q=>y(le=>({...le,...q})),shared:w.current,deviceInfo:P,forceUpdate:h,getSize:()=>{const q=u.current;return q?{width:q.offsetWidth,height:q.offsetHeight}:{width:0,height:0}},logger:console};return l?l(G):G},[I,_,b,P,v,l]);x.useLayoutEffect(()=>{S.current=L},[L]);const j=x.useRef(t),N=j.current;N!==t&&(N.length!==t.length||t.some((G,q)=>G!==N[q]))&&(j.current=t);const z=j.current,O=x.useRef(0);x.useLayoutEffect(()=>{const G=++O.current,q=S.current;return p.align(z,q).then(()=>{O.current===G&&(i&&console.debug("[vane/plugin-core] plugins registered:",z.map(le=>le.name).join("|")),p.executeHook("onMount",q))}),()=>{O.current+=1}},[z,p,i]),x.useLayoutEffect(()=>()=>{const G=S.current;if(!p.getExecutionOrder().some(q=>{var le;return typeof((le=q.hooks)==null?void 0:le.onUnmount)=="function"})){p.clear();return}p.executeHook("onUnmount",G).finally(()=>p.clear())},[p]);const U=p.peekOrder(),re=x.useRef([]),K=x.useMemo(()=>{const G=new Map(z.map(ee=>[ee.name,ee])),q=z.filter(ee=>{var we;return ee.enabled!==!1&&((we=p.getPlugin(ee.name))==null?void 0:we.enabled)!==!1}),le=U.length===q.length?U.map(ee=>G.get(ee.name)??ee):Bp(q),pe=re.current;return pe.length===le.length&&le.every((ee,we)=>ee===pe[we])?pe:(re.current=le,le)},[z,p,U]),R=x.useRef(L);R.current=L;const M=x.useCallback((G,q)=>{var ee;const le=R.current;let pe=q;for(const we of K){const Kn=(ee=we.hooks)==null?void 0:ee[G];if(typeof Kn=="function")try{pe=G==="transformData"?Kn(le,pe):Kn(pe)}catch(Yo){(le.logger??console).warn(`[plugin-core] ${we.name}.${G} 执行失败，已跳过`,Yo)}}return pe},[K]),T=x.useCallback(G=>M("transformProps",G),[M]),H=x.useCallback(G=>M("transformData",G),[M]),V=x.useCallback((G,...q)=>p.executeHook(G,S.current,...q),[p]);return{manager:p,bus:v,context:L,state:b,setState:L.setState,execute:V,transformProps:T,transformData:H,orderedPlugins:K}}x.createContext(null);function hr(e,t,n){var r,s;if(e.enabled===!1||typeof((r=e.hooks)==null?void 0:r[t])!="function")return!1;const o=(s=e.config)==null?void 0:s.slotPosition;return n==="before"?o==="before":n==="footer"?o===void 0||o==="after"||o==="footer":o===void 0||o==="after"}function zD(e,t){var n,o;return(((n=e.config)==null?void 0:n.order)??0)-(((o=t.config)==null?void 0:o.order)??0)||(t.priority??0)-(e.priority??0)}function yr(e,t,n){const o=new Set;return e.map(r=>{var s;if(o.has(r.name))return null;o.add(r.name);try{const i=(s=r.hooks)==null?void 0:s[n],a=i==null?void 0:i(t);return a==null?null:m.jsx(Vp,{children:a},`vane-slot-${r.name}`)}catch(i){return console.warn(`[vane/plugin-core] 插件 ${r.name} 的 ${n} 渲染失败`,i),null}})}function OD(e,t,n){const o={headerBefore:[],overlay:[],headerAfter:[],footer:[]};for(const r of e)hr(r,"renderHeader","before")?o.headerBefore.push(r):hr(r,"renderHeader","after")&&o.headerAfter.push(r),hr(r,"renderOverlay","after")&&o.overlay.push(r),hr(r,"renderFooter","footer")&&o.footer.push(r);for(const r of Object.keys(o))o[r].sort(zD);return m.jsxs(m.Fragment,{children:[yr(o.headerBefore,t,"renderHeader"),n,yr(o.overlay,t,"renderOverlay"),yr(o.headerAfter,t,"renderHeader"),yr(o.footer,t,"renderFooter")]})}const DD=1e3,MD=100;function jD(e){const t=e.priority??MD;return{...e,priority:DD-t}}function TD(e){return e.map(jD)}function ND(e,t){const n=Array.isArray(t)?{plugins:t}:t,{plugins:o,enableDebug:r=!1}=n,s=x.forwardRef((i,a)=>{const l=x.useMemo(()=>TD(o),[o.map(z=>z.name).join("|")]),c=x.useRef(null),[u,d]=x.useState({isIdle:!0,isLoading:!1,isLoaded:!1,isError:!1}),[p,g]=x.useState(!1),[v,w]=x.useState(()=>ss()),b=x.useRef({loadStartTime:0}),y=x.useRef(i.src),f=x.useRef(null),h=x.useCallback(z=>({...z,src:i.src,imageState:u,isIntersecting:p,imageRef:c,containerRef:z.refs.container,networkInfo:v,sharedData:z.shared,performanceData:b.current,reload:()=>{var O;return(O=f.current)==null?void 0:O.reload()},reset:()=>{var O;return(O=f.current)==null?void 0:O.reset()}}),[i.src,u,p,v]),P=RD({plugins:l,props:i,enableDebug:r,extendContext:h}),$=x.useCallback((z,...O)=>P.execute(z,...O),[P.manager]);x.useEffect(()=>{$("onMount")},[$]),x.useEffect(()=>P.bus.on("progress",z=>{$("onProgress",z)}),[$,P.bus]),x.useEffect(()=>{const z=y.current;z!==i.src&&(y.current=i.src,d({isIdle:!0,isLoading:!1,isLoaded:!1,isError:!1}),b.current={loadStartTime:0},$("onSrcChange",z,i.src))},[i.src,$]),x.useEffect(()=>Fp(()=>{w(ss()),$("onNetworkChange"),$("onResize")}),[$]);const I=x.useCallback(async()=>{if(await $("onBeforeLoad")===!1)throw new Error("LLI_PLUGIN_GATE");const z=await $("onLoad");return d({isIdle:!1,isLoading:!0,isLoaded:!1,isError:!1}),z},[$]),k=x.useCallback(()=>{b.current={loadStartTime:performance.now()}},[]),_=x.useCallback(z=>{const O=performance.now();b.current={...b.current,loadEndTime:O,duration:O-b.current.loadStartTime},d({isIdle:!1,isLoading:!1,isLoaded:!0,isError:!1}),$("onLoadSuccess",z??"")},[$]),S=x.useCallback(z=>{d({isIdle:!1,isLoading:!1,isLoaded:!1,isError:!0}),$("onLoadError",z)},[$]),L=x.useCallback(()=>{g(!0),$("onEnterViewport")},[$]),j=x.useCallback(()=>{g(!1),$("onLeaveViewport")},[$]),N={...P.transformProps(i),containerRefExternal:P.context.refs.container,imageRefExternal:c,children:m.jsx(Vp,{children:OD(P.orderedPlugins,P.context,i.children)}),onBeforeLoad:I,onLoadStart:k,onLoadSuccess:_,onLoadError:S,onEnterViewport:L,onLeaveViewport:j};return m.jsx(e,{ref:z=>{f.current=z,typeof a=="function"?a(z):a&&(a.current=z)},...N})});return s.displayName="WithPlugins(LazyLoadImageCore)",s}function AD(e){const t=(e==null?void 0:e.filter)??"none",n=(e==null?void 0:e.amount)??1;switch(t){case"none":return"none";case"grayscale":return`grayscale(${Math.max(0,Math.min(1,n))})`;case"sepia":return`sepia(${Math.max(0,Math.min(1,n))})`;case"brightness":return`brightness(${n})`;case"contrast":return`contrast(${n})`;case"saturate":return`saturate(${n})`;default:return"none"}}const BD=e=>{const t=AD(e),n=!!(e!=null&&e.hover);return{name:"filter",hooks:{onLoadSuccess(o){var s;const r=(s=o.imageRef)==null?void 0:s.current;if(r&&(r.style.filter=t,n&&t!=="none")){const i=()=>{r.style.filter="none"},a=()=>{r.style.filter=t};r.__lliFilterEnter=i,r.__lliFilterLeave=a,r.addEventListener("mouseenter",i),r.addEventListener("mouseleave",a)}},onUnmount(o){var a;const r=(a=o.imageRef)==null?void 0:a.current;if(!r)return;const s=r.__lliFilterEnter,i=r.__lliFilterLeave;s&&r.removeEventListener("mouseenter",s),i&&r.removeEventListener("mouseleave",i),r.style.filter=""}}}},UD={grayscaleSoft:{filter:"grayscale",amount:.6,hover:!0},sepiaWarm:{filter:"sepia",amount:.5},brightBoost:{filter:"brightness",amount:1.2},contrastPunch:{filter:"contrast",amount:1.3},saturateVivid:{filter:"saturate",amount:1.4}},FD="FilterPlugin",VD="CSS 滤镜：灰度/复古/亮度/对比度/饱和度，悬停可恢复原图。",WD="2.0.0",HD=["visual","视觉"],GD=[{name:"onUnmount",when:"组件卸载前执行一次",description:"释放监听、定时器与观察器；与 onMount 成对出现，避免泄漏"},{name:"onLoadSuccess",when:"图片成功解码可显示时",description:"拿到最终 displaySrc 做后续动作（上报、预取下张、淡入）"}],qD=[],QD="只读取 context 字段（props / state / data），不调用上下文方法",KD=[{name:"filter",type:'"none" | "grayscale" | "sepia" | "brightness" | "contrast" | "saturate"',default:'"none"',description:"滤镜类型"},{name:"amount",type:"number",default:"undefined",description:"滤镜强度（多数类型 0~1）"},{name:"hover",type:"boolean",default:"false",description:"悬停时恢复原图"}],YD=`// 灰度显示，悬停恢复原彩图
const FilterImage = withPlugins(LazyLoadImageCore, [
  createFilterPlugin({
    filter: "grayscale",
    amount: 1,
    hover: true,
  }),
]);

<FilterImage src="https://picsum.photos/seed/filter/600/400" alt="滤镜" />;`,XD=[{name:"灰度 + 悬停还原",description:"默认灰度，鼠标悬停瞬间恢复彩色，制造焦点对比。",src:"https://picsum.photos/seed/filter-gray/600/400",config:{filter:"grayscale",amount:1,hover:!0}},{name:"复古暖调",description:"sepia 中度做旧，营造怀旧氛围。",src:"https://picsum.photos/seed/filter-sepia/600/400",config:{filter:"sepia",amount:.6}},{name:"高对比增强",description:"提升对比度，让画面更有张力。",src:"https://picsum.photos/seed/filter-contrast/600/400",config:{filter:"contrast",amount:1.4}}],ZD=["内置 grayscale / sepia / brightness / contrast / saturate 预设","amount 控制强度","hover 模式悬停恢复原图","纯 CSS filter，零额外绘制开销"],JD=["商品列表统一灰度，hover 高亮","怀旧 / 复古风格相册","强调主体前的视觉降噪","活动主题统一调色"],e4=["hover:true 时滤镜在鼠标移入时移除、移出时恢复。","需要组合滤镜（如 contrast+saturate）或更复杂效果，可用 CustomEffectsPlugin 的 imageStyle.filter 任意写。"],t4={name:FD,description:VD,since:WD,tags:HD,events:GD,methods:qD,methodsNote:QD,config:KD,example:YD,examples:XD,features:ZD,useCases:JD,notes:e4};let ei=null;function Wp(e,t){return ei||(ei=new Promise((n,o)=>{const r=indexedDB.open(e,1);r.onupgradeneeded=()=>{const s=r.result;s.objectStoreNames.contains(t)||s.createObjectStore(t)},r.onsuccess=()=>n(r.result),r.onerror=()=>o(r.error)})),ei}async function Hp(e,t){try{const n=await Wp(t.dbName,t.storeName),o=n.transaction(t.storeName,"readonly").objectStore(t.storeName),r=await new Promise((s,i)=>{const a=o.get(e);a.onsuccess=()=>s(a.result),a.onerror=()=>i(a.error)});if(!r)return;if(t.ttlMs>0&&Date.now()-r.time>t.ttlMs){try{n.transaction(t.storeName,"readwrite").objectStore(t.storeName).delete(e)}catch{}return}return r}catch(n){if(t.debug)try{console.warn("[IDBCache] get failed",n)}catch{}return}}async function Gp(e,t,n){try{const o=(await Wp(n.dbName,n.storeName)).transaction(n.storeName,"readwrite").objectStore(n.storeName),r=typeof t=="string"?{value:t,time:Date.now()}:{blob:t,time:Date.now(),mime:t.type};await new Promise((s,i)=>{const a=o.put(r,e);a.onsuccess=()=>s(),a.onerror=()=>i(a.error)})}catch(o){if(n.debug)try{console.warn("[IDBCache] set failed",o)}catch{}}}const qp={get:Hp,set:Gp};function n4(e){try{const t=e.split(","),n=t[0].match(/:(.*?);/),o=n?n[1]:"application/octet-stream",r=atob(t[1]);let s=r.length;const i=new Uint8Array(s);for(;s--;)i[s]=r.charCodeAt(s);return new Blob([i],{type:o})}catch{return null}}function o4(e={}){const{enabled:t=!0,dbName:n="LLI-Cache",storeName:o="images",ttlMs:r=7*24*60*60*1e3,debug:s=!1}=e,i=new Map,a=new Set,l=new Set;return{name:"cache-idb",version:"1.0.0",config:e,hooks:{onLoad:async c=>{var u,d,p,g;if(t){if(a.has(c.src)){if(s)try{console.warn("[IDBCache] Prevented reentry for",c.src)}catch{}return}a.add(c.src);try{const v=await Hp(c.src,{dbName:n,storeName:o,ttlMs:r,debug:s});if(v){if(s)try{console.debug("[IDBCache] hit",{src:c.src})}catch{}if((u=c.bus)==null||u.emit("cache:hit",{level:"idb",src:c.src}),v.blob){let w=(d=c.sharedData)==null?void 0:d.get("fetch-loader:object-url");if(!w){w=URL.createObjectURL(v.blob),i.set(c.src,w);try{(p=c.sharedData)==null||p.set("fetch-loader:object-url",w),(g=c.sharedData)==null||g.set("fetch-loader:blob",v.blob)}catch{}}return w}return v.value}return}finally{a.delete(c.src)}}},onLoadSuccess:async(c,u)=>{var d;if(t){if(l.has(c.src)){if(s)try{console.warn("[IDBCache] Write already in progress for",c.src)}catch{}return}l.add(c.src);try{let p=(d=c.sharedData)==null?void 0:d.get("fetch-loader:blob");if(p&&i.get(c.src)===u&&(p=void 0),!p&&u.startsWith("blob:")){if(i.get(c.src)===u)return;try{const g=await fetch(u);g.ok&&(p=await g.blob())}catch{}}if(!p&&u.startsWith("data:")){const g=n4(u);g&&(p=g)}if(p){if(await Gp(c.src,p,{dbName:n,storeName:o,debug:s}),s)try{console.debug("[IDBCache] ✅ Stored blob successfully:",{src:c.src,size:p.size,type:p.type})}catch{}}else if(s)try{console.warn("[IDBCache] ⚠️ No blob available, skip write:",{src:c.src,displaySrc:u})}catch{}}catch{}finally{l.delete(c.src)}if(s)try{console.debug("[IDBCache] set",{src:c.src})}catch{}}},onSrcChange:(c,u)=>{const d=i.get(u);if(d){try{URL.revokeObjectURL(d)}catch{}i.delete(u)}},onUnmount:c=>{const u=i.get(c.src);if(u){try{URL.revokeObjectURL(u)}catch{}i.delete(c.src)}}}}}const ln=new Map,mt=[];function Qp(){return Date.now()}function r4(e){if(!(e<=0))for(;mt.length>e;){const t=mt.shift();t&&ln.has(t)&&ln.delete(t)}}function Kp(e){const t=mt.indexOf(e);t>=0&&mt.splice(t,1),mt.push(e)}function ua(e,t){const n=ln.get(e);if(n){if(t&&t>0&&Qp()-n.time>t){ln.delete(e);const o=mt.indexOf(e);o>=0&&mt.splice(o,1);return}return Kp(e),n.value}}function da(e,t,n){ln.set(e,{value:t,time:Qp()}),Kp(e),r4(n)}const is={get:ua,set:da,has:(e,t)=>ua(e,t)!==void 0,clear:()=>{ln.clear(),mt.splice(0,mt.length)},size:()=>ln.size};function s4(e={}){const{enabled:t=!0,maxEntries:n=200,ttlMs:o,debug:r=!1}=e,s=new Map,i=new Set,a=new Map,l=100;function c(u,d,p){const g=`${d}:${p.src}`,v=Date.now(),w=a.get(g)||0;v-w<l||(a.set(g,v),u==null||u.emit(d,p),setTimeout(()=>{a.delete(g)},1e3))}return{name:"cache-memory",version:"1.0.0",config:e,hooks:{onLoad:async u=>{var d,p,g;if(t){if(i.has(u.src)){if(r)try{console.warn("[MemoryCache] Prevented reentry for",u.src)}catch{}return}i.add(u.src);try{const v=ua(u.src,o);if(v){if(r)try{console.debug("[MemoryCache] hit",{src:u.src,isBlob:v instanceof Blob})}catch{}if(c(u.bus,"cache:hit",{level:"memory",src:u.src}),v instanceof Blob){let w=(d=u.sharedData)==null?void 0:d.get("fetch-loader:object-url");if(!w){w=URL.createObjectURL(v),s.set(u.src,w);try{(p=u.sharedData)==null||p.set("fetch-loader:object-url",w),(g=u.sharedData)==null||g.set("fetch-loader:blob",v)}catch{}}return w}if(!v.startsWith("blob:"))return v}return}finally{i.delete(u.src)}}},onLoadSuccess:(u,d)=>{var g;if(!t)return;const p=(g=u.sharedData)==null?void 0:g.get("fetch-loader:blob");if(p instanceof Blob?da(u.src,p,n):d.startsWith("blob:")||da(u.src,d,n),r)try{console.debug("[MemoryCache] set",{src:u.src,length:d.length})}catch{}},onSrcChange:(u,d,p)=>{if(!t)return;c(u.bus,"cache:src-change",{oldSrc:d,newSrc:p,src:d});const g=s.get(d);if(g){try{URL.revokeObjectURL(g)}catch{}s.delete(d)}},onUnmount:u=>{const d=s.get(u.src);if(d){try{URL.revokeObjectURL(d)}catch{}s.delete(u.src)}}}}}function Vn(e,t){const n=e.split(".").map(Number),o=t.split(".").map(Number),r=Math.max(n.length,o.length);for(let s=0;s<r;s++){const i=n[s]||0,a=o[s]||0;if(i>a)return 1;if(i<a)return-1}return 0}function i4(e,t,n){return!(t&&Vn(e,t)<0||n&&Vn(e,n)>0)}function Yp(e){const[t=0,n=0,o=0]=e.split(".").map(Number);return{major:t,minor:n,patch:o}}function a4(e){const t=e.split(".");return t.length<1||t.length>3?!1:t.every(n=>{const o=Number(n);return!isNaN(o)&&o>=0&&Number.isInteger(o)})}function l4(e){const{major:t,minor:n,patch:o}=Yp(e);return`${t}.${n}.${o}`}function c4(e,t){return Vn(e,t)===0}function u4(e,t){return Vn(e,t)>0}function d4(e,t){return Vn(e,t)<0}const ti=(()=>{const e=new Map;function t(s,i){const a=e.get(s);if(a&&a.initialized)return a.idleMs=i>0?i:a.idleMs,a;const l={isIdle:!0,timer:null,idleWaiters:new Set,idleMs:i>0?i:120,initialized:!1,refCount:0,cleanup:void 0},c=()=>{l.isIdle=!1,l.timer&&clearTimeout(l.timer),l.timer=setTimeout(()=>{l.isIdle=!0,l.idleWaiters.forEach(u=>{try{u()}catch{}}),l.idleWaiters.clear()},l.idleMs)};if(s==="window")window.addEventListener("scroll",c,{passive:!0}),window.addEventListener("wheel",c,{passive:!0}),window.addEventListener("touchmove",c,{passive:!0}),l.cleanup=()=>{window.removeEventListener("scroll",c),window.removeEventListener("wheel",c),window.removeEventListener("touchmove",c)};else{try{s.addEventListener("scroll",c,{passive:!0}),s.addEventListener("wheel",c,{passive:!0}),s.addEventListener("touchmove",c,{passive:!0})}catch{}l.cleanup=()=>{try{s.removeEventListener("scroll",c),s.removeEventListener("wheel",c),s.removeEventListener("touchmove",c)}catch{}}}return l.initialized=!0,e.set(s,l),l}async function n(s,i,a){const l=t(s,i);l.isIdle||await new Promise(c=>{let u=null;const d=()=>{u&&clearTimeout(u),c()};l.idleWaiters.add(d),typeof a=="number"&&a>0&&(u=setTimeout(()=>{l.idleWaiters.delete(d),c()},a))})}function o(s,i){const a=t(s,i);return a.refCount+=1,a}function r(s){var a;const i=e.get(s);if(i&&(i.refCount-=1,!(i.refCount>0))){try{(a=i.cleanup)==null||a.call(i)}catch{}i.timer&&clearTimeout(i.timer),i.timer=null,i.idleWaiters.forEach(l=>{try{l()}catch{}}),i.idleWaiters.clear(),e.delete(s)}}return{ensure:t,acquire:o,release:r,waitForIdle:n}})();function p4(e={}){const{idleMs:t=120,onlyWhenIntersecting:n=!0,maxWaitMs:o=1200,target:r="window",axis:s="vertical",debug:i=!1}=e;return{name:"scroll-idle",version:"1.0.0",config:e,hooks:{onMount:a=>{var u,d;const l=((u=a.containerRef)==null?void 0:u.current)||null,c=r==="container"&&l?l:"window";ti.acquire(c,t);try{(d=a.sharedData)==null||d.set("scroll-idle:target",c)}catch{}if(i)try{console.debug("[ScrollIdle] mount",{idleMs:t,target:r,axis:s,hasContainer:!!l})}catch{}},onUnmount:a=>{var c,u;let l;try{l=(c=a.sharedData)==null?void 0:c.get("scroll-idle:target"),(u=a.sharedData)==null||u.delete("scroll-idle:target")}catch{}l&&ti.release(l)},onLoad:async a=>{var l;if(a.props.loading!=="eager"&&(!n||a.isIntersecting)){const c=((l=a.containerRef)==null?void 0:l.current)||null,u=r==="container"&&c?c:"window";i&&console.debug(`[ScrollIdle] waiting for idle ${t}ms (max ${o}ms)`,{target:r,axis:s});try{await ti.waitForIdle(u,t,o)}catch{}}}}}}const m4="ScrollIdlePlugin",g4="滚动空闲加载：滚动停止后再发起加载，避免与滚动争抢带宽。",f4="2.0.0",h4=["loading","加载策略"],y4=[{name:"onMount",when:"组件挂载完成、插件注册后执行一次（返回的清理函数在 manager.clear 时逆序执行）",description:"初始化副作用：注册监听、起定时器、建观察器；必须返回清理函数或配合 onUnmount 收尾"},{name:"onUnmount",when:"组件卸载前执行一次",description:"释放监听、定时器与观察器；与 onMount 成对出现，避免泄漏"},{name:"onLoad",when:"加载流程开始、需要确定最终图片地址时",description:"自定义加载逻辑，返回最终图片 URL（objectURL / dataURL / 原地址）"}],v4=[],w4="只读取 context 字段（props / state / data），不调用上下文方法",x4=[{name:"idleMs",type:"number",default:"120",description:"判定为“空闲”的静止时间（毫秒）"},{name:"onlyWhenIntersecting",type:"boolean",default:"true",description:"是否仅在进入视口后生效（否则所有加载都会等待空闲）"},{name:"maxWaitMs",type:"number",default:"1200",description:"最长等待空闲的时间（毫秒），超过则直接继续加载，避免长时间滚动导致饥饿"},{name:"target",type:'"window" | "container"',default:'"window"',description:"监听对象：window 或容器（容器将使用 context.containerRef.current）"},{name:"axis",type:'"vertical" | "horizontal" | "both"',default:'"vertical"',description:"滚动轴向：vertical/horizontal/both（目前用于调试标注，可按需扩展策略）"},{name:"debug",type:"boolean",default:"false",description:"调试输出"}],b4=`const LazyImage = withPlugins(LazyLoadImageCore, [
  createScrollIdlePlugin({
    idleMs: 160,
    onlyWhenIntersecting: true,
    maxWaitMs: 1200, // 最多等 1.2s，避免饥饿
  }),
]);`,P4=[{name:"滚动停止后加载",description:"用户停止滚动 160ms 后再加载，滚动过程中不打断主线程与带宽。",config:{idleMs:160,onlyWhenIntersecting:!0,maxWaitMs:1200}},{name:"更敏感空闲",description:"80ms 即判定空闲，适合加载较轻的图标 / 缩略图。",config:{idleMs:80,maxWaitMs:800}}],$4=["监听滚动，空闲（停止滚动 idleMs）后才发起加载","默认仅进入视口后生效，不拖累首屏外元素","maxWaitMs 兜底，防止长时间连续滚动导致饥饿","支持 window / 容器两种监听对象"],S4=["长列表滚动时避免与主线程 / 带宽争抢","低端机滚动卡顿优化"],C4=["与 ConcurrencyControl 叠加效果最佳。","maxWaitMs 务必设置，否则连续滚动可能长期不加载。","容器模式会使用 context.containerRef.current 作为监听目标。"],L4={name:m4,description:g4,since:f4,tags:h4,events:y4,methods:v4,methodsNote:w4,config:x4,example:b4,examples:P4,features:$4,useCases:S4,notes:C4};function I4({ctx:e,config:t}){var r,s,i;const{imageState:n}=e,o=n.isError?((r=t.statusText)==null?void 0:r.error)??"图片加载失败":n.isLoaded?((s=t.statusText)==null?void 0:s.loaded)??"图片加载完成":n.isLoading?((i=t.statusText)==null?void 0:i.loading)??"图片加载中":"图片未加载";return x.useEffect(()=>{var l;const a=(l=e.imageRef)==null?void 0:l.current;if(!(!a||!t.enabled))try{a.setAttribute("aria-busy",n.isLoading?"true":"false")}catch{}},[e.imageRef,t.enabled,n.isLoading]),m.jsx("span",{role:"status","aria-live":"polite",style:{position:"absolute",width:1,height:1,padding:0,margin:-1,overflow:"hidden",clip:"rect(0, 0, 0, 0)",whiteSpace:"nowrap",border:0},children:o})}function k4(e,t){const{ariaLabel:n}=e;if(n)return typeof n=="function"?n(t):n}function _4(e={}){const{enabled:t=!0,decorative:n=!1}=e;return{name:"a11y",version:"1.0.0",config:e,hooks:{onMount:o=>{var s;if(!t)return;const r=(s=o.imageRef)==null?void 0:s.current;if(r)try{n&&(r.setAttribute("aria-hidden","true"),r.setAttribute("alt",""));const i=k4(e,o);i&&r.setAttribute("aria-label",i),r.setAttribute("role","img")}catch{}},renderOverlay:o=>t?m.jsx(I4,{ctx:o,config:e}):null}}}const E4="A11yPlugin",R4="无障碍支持：将装饰性图片设为 aria-hidden、自定义 aria-label、注入 role=img 与 aria-busy，并通过 aria-live 区域播报加载状态，提升读屏可用性。",z4="2.0.0",O4=["a11y","可访问性","SEO"],D4=[{name:"onMount",when:"组件挂载完成、插件注册后执行一次（返回的清理函数在 manager.clear 时逆序执行）",description:"初始化副作用：注册监听、起定时器、建观察器；必须返回清理函数或配合 onUnmount 收尾"},{name:"renderOverlay",when:"每次渲染，覆盖在图片容器之上",description:"骨架屏、错误占位、水印、加载动画"}],M4=[],j4="只读取 context 字段（props / state / data），不调用上下文方法",T4=[{name:"enabled",type:"boolean",default:"true",description:"是否启用无障碍增强"},{name:"decorative",type:"boolean",default:"false",description:"标记为装饰性图片（aria-hidden=true 并清空 alt）"},{name:"ariaLabel",type:"string | ((ctx) => string)",default:"undefined",description:"自定义 aria-label（函数型，参见用法示例）"},{name:"statusText",type:"{ loading?; loaded?; error? }",default:"undefined",description:"视觉隐藏的状态播报文本"}],N4=`const A11yImage = withPlugins(LazyLoadImageCore, [
  createA11yPlugin({
    ariaLabel: (ctx) => \`商品主图 \${ctx.src}\`,
    statusText: { loading: "加载中…", loaded: "已加载", error: "加载失败" },
  }),
]);

// 装饰性图片也可直接跳过读屏
<A11yImage src="https://picsum.photos/id/1015/500/300" alt="" />;`,A4=[{name:"装饰性图片",description:"decorative=true 时清空 alt 并设 aria-hidden，读屏跳过。",src:"https://picsum.photos/id/1015/500/300",config:{decorative:!0}},{name:"自定义 aria-label（字符串）",description:"为图片设置区别于 alt 的 aria-label。",src:"https://picsum.photos/id/1021/500/300",config:{ariaLabel:"商品主图"}},{name:"加载状态播报",description:"视觉隐藏区域以 aria-live 播报加载中/完成/失败。",src:"https://picsum.photos/id/1026/500/300",config:{statusText:{loading:"加载中…",loaded:"已加载",error:"加载失败"}}}],B4=["装饰性图片 aria-hidden","自定义 aria-label（字符串或函数）","role=img 明确语义","aria-busy 随加载态切换","aria-live 状态播报（视觉隐藏）","可关闭"],U4=["无障碍合规（WCAG）","读屏器适配","装饰性背景图","加载状态可读"],F4=["ariaLabel 支持函数型，但静态预览仅支持字符串；函数用法见用法示例。"],V4={name:E4,description:R4,since:z4,tags:O4,events:D4,methods:M4,methodsNote:j4,config:T4,example:N4,examples:A4,features:B4,useCases:U4,notes:F4};function W4(e){try{const t=document.createElement("link");return t.rel="preload",t.as="image",t.href=e,document.head.appendChild(t),()=>{try{document.head.removeChild(t)}catch{}}}catch{return()=>{}}}function H4(e={}){const{enabled:t=!0,altFallback:n,title:o,aspectRatio:r,priority:s="auto",preload:i=!1}=e;return{name:"seo",version:"1.0.0",config:e,hooks:{transformProps:a=>{if(!t)return a;const l={...a};return(!l.alt||l.alt==="")&&n&&(l.alt=n),s==="lcp"&&(l.loading="eager",l.rootMargin="0px"),r&&(l.containerStyle={...l.containerStyle||{},aspectRatio:r}),l},onMount:a=>{var c,u,d;if(!t)return;let l;if(i&&(l=W4(a.src)),o)try{(u=(c=a.imageRef)==null?void 0:c.current)==null||u.setAttribute("title",o)}catch{}if(n&&((d=a.imageRef)!=null&&d.current)){const p=a.imageRef.current;if(p.getAttribute("alt")===null||p.getAttribute("alt")==="")try{p.setAttribute("alt",n)}catch{}}return l}}}}const G4="SEOPlugin",q4="SEO 增强：alt/title 回退、固定容器宽高比减少 CLS、将首屏关键图设为 LCP 优先（eager + preload），提升搜索排名与加载体验。",Q4="2.0.0",K4=["a11y","可访问性","SEO"],Y4=[{name:"onMount",when:"组件挂载完成、插件注册后执行一次（返回的清理函数在 manager.clear 时逆序执行）",description:"初始化副作用：注册监听、起定时器、建观察器；必须返回清理函数或配合 onUnmount 收尾"},{name:"transformProps",when:"渲染前链式改写图片 props",description:"补 sizes / 占位色 / 解码策略等"}],X4=[],Z4="只读取 context 字段（props / state / data），不调用上下文方法",J4=[{name:"enabled",type:"boolean",default:"true",description:"是否启用"},{name:"altFallback",type:"string",default:"undefined",description:"未提供 alt 时的回退值"},{name:"title",type:"string",default:"undefined",description:"图片 title（提示与关键词）"},{name:"aspectRatio",type:"string",default:"undefined",description:'固定容器宽高比（如 "4/3"），减少 CLS'},{name:"priority",type:'"auto" | "lcp"',default:'"auto"',description:"lcp 时设为 eager 加载"},{name:"preload",type:"boolean",default:"false",description:"挂载时注入 preload 预载"}],e6=`const SeoImage = withPlugins(LazyLoadImageCore, [
  createSEOPlugin({
    altFallback: "示例图片",
    title: "演示图像",
    aspectRatio: "4/3",
    priority: "lcp",
    preload: true,
  }),
]);

<SeoImage src="https://picsum.photos/id/1015/500/300" alt="" />;`,t6=[{name:"LCP 关键图",description:"首屏关键图：eager + preload + 固定比例，优化 LCP。",src:"https://picsum.photos/id/1015/500/300",config:{altFallback:"示例图片",title:"演示图像",aspectRatio:"4/3",priority:"lcp",preload:!0}},{name:"alt/title 回退",description:"补充 alt 与 title，利于读屏与 SEO。",src:"https://picsum.photos/id/1021/500/300",config:{altFallback:"商品图",title:"热销商品"}},{name:"仅固定比例",description:"aspectRatio 防 CLS，其余默认。",src:"https://picsum.photos/id/1026/500/300",config:{aspectRatio:"16/9"}}],n6=["alt 回退","title 设置","aspect-ratio 防 CLS","LCP 优先（eager）","preload 预载","可关闭"],o6=["首屏 LCP 优化","SEO 排名","结构化标签","CLS 治理"],r6=['priority:"lcp" 会强制 eager 加载，请勿对所有图片使用，仅用于首屏关键图。'],s6={name:G4,description:q4,since:Q4,tags:K4,events:Y4,methods:X4,methodsNote:Z4,config:J4,example:e6,examples:t6,features:n6,useCases:o6,notes:r6},i6=Object.assign(p4,{meta:L4}),a6=Object.assign(_4,{meta:V4}),l6=Object.assign(H4,{meta:s6});function c6(e={}){const{text:t="Badge",position:n="top-left",bgColor:o="rgba(0,0,0,0.6)",color:r="#fff",fontSize:s=12,padding:i="2px 6px",borderRadius:a=4,zIndex:l=3,showWhen:c="loaded",enabled:u=!0}=e;return{name:"badge",version:"1.0.0",config:e,hooks:{renderOverlay:d=>{if(!u)return null;const{imageState:p}=d;if(!(c==="always"||c==="loading"&&p.isLoading||c==="loaded"&&p.isLoaded||c==="error"&&p.isError))return null;const g=typeof t=="function"?t(d):t;return m.jsx("div",{style:{position:"absolute",pointerEvents:"none",background:o,color:r,fontSize:s,padding:i,borderRadius:a,zIndex:l,lineHeight:1.2,fontWeight:500,...{"top-left":{top:8,left:8},"top-right":{top:8,right:8},"bottom-left":{bottom:8,left:8},"bottom-right":{bottom:8,right:8},center:{top:"50%",left:"50%",transform:"translate(-50%, -50%)"}}[n]},children:g})}}}}const u6="BadgePlugin",d6="角标徽章：在图片四角或中心叠加文字徽章，可按加载状态（always/loading/loaded/error）显示，支持自定义文字、颜色、字号与形状。",p6="2.0.0",m6=["other","视觉","徽标"],g6=[{name:"renderOverlay",when:"每次渲染，覆盖在图片容器之上",description:"骨架屏、错误占位、水印、加载动画"}],f6=[],h6="只读取 context 字段（props / state / data），不调用上下文方法",y6=[{name:"text",type:"string | ((context) => string)",default:'"Badge"',description:"徽章文字（支持函数动态生成）"},{name:"position",type:'"top-left" | "top-right" | "bottom-left" | "bottom-right" | "center"',default:'"top-left"',description:"徽章位置（四角或中心）"},{name:"bgColor",type:"string",default:'"rgba(0,0,0,0.6)"',description:"背景色"},{name:"color",type:"string",default:'"#fff"',description:"文字色"},{name:"fontSize",type:"number",default:"12",description:"字号(px)"},{name:"padding",type:"string",default:'"2px 6px"',description:"内边距"},{name:"borderRadius",type:"number",default:"4",description:"圆角(px)"},{name:"zIndex",type:"number",default:"3",description:"层级"},{name:"showWhen",type:'"always" | "loading" | "loaded" | "error"',default:'"loaded"',description:"显示时机"},{name:"enabled",type:"boolean",default:"true",description:"是否启用"}],v6=`const BadgeImage = withPlugins(LazyLoadImageCore, [
  createBadgePlugin({ text: "NEW", position: "top-left", bgColor: "#c62828", showWhen: "always" }),
]);

<BadgeImage src="https://picsum.photos/id/1015/500/300" alt="角标示例" />;`,w6=[{name:"常驻徽标",description:"左上角红色 NEW 徽标，始终显示。",src:"https://picsum.photos/id/1015/500/300",config:{text:"NEW",position:"top-left",bgColor:"#c62828",showWhen:"always"}},{name:"加载时显示",description:"加载中显示 Loading 徽标，加载完成隐藏。",src:"https://picsum.photos/id/1021/500/300",config:{text:"Loading",position:"top-right",bgColor:"rgba(0,0,0,0.6)",showWhen:"loading"}},{name:"加载成功后显示",description:"加载完成后显示 Done 徽标。",src:"https://picsum.photos/id/1026/500/300",config:{text:"Done",position:"bottom-right",bgColor:"#2e7d32",showWhen:"loaded"}},{name:"自定义样式",description:"橙色大字号圆角徽标，居中。",src:"https://picsum.photos/id/1031/500/300",config:{text:"HOT",position:"center",bgColor:"#b35c00",color:"#fff",fontSize:16,borderRadius:20}}],x6=["角标 / 中心两种布局","五位置（四角 + 中心）","按加载状态显示","自定义文字/颜色/字号/圆角","支持函数文案","可关闭"],b6=["商品标签","状态提示","进度/完成标记","活动角标"],P6=["text 支持函数型（按 context 动态生成），静态预览仅支持字符串；函数用法见用法示例。"],$6={name:u6,description:d6,since:p6,tags:m6,events:g6,methods:f6,methodsNote:h6,config:y6,example:v6,examples:w6,features:x6,useCases:b6,notes:P6},S6=e=>{const t=(e==null?void 0:e.color)??"rgba(0, 153, 255, 0.6)",n=Math.max(0,(e==null?void 0:e.blurPx)??12),o=Math.max(0,(e==null?void 0:e.spreadPx)??2),r=Math.max(1,(e==null?void 0:e.hoverMultiplier)??1.4),s=`0 0 ${n}px ${o}px ${t}`,i=`0 0 ${Math.round(n*r)}px ${Math.round(o*r)}px ${t}`;return{name:"border-glow",hooks:{onLoadSuccess(a){var w,b;const l=((w=a.containerRef)==null?void 0:w.current)??null,c=(l==null?void 0:l.parentElement)??null,u=(c==null?void 0:c.parentElement)??null,d=(b=a.imageRef)==null?void 0:b.current,p=u||c||l||d;if(!p)return;a.__lliGlowTarget=p,p.__lliPrevShadow=p.style.boxShadow||"",p.__lliPrevTransition=p.style.transition||"",p.style.boxShadow=p.__lliPrevShadow?`${p.__lliPrevShadow}, ${s}`:s,p.style.transition=p.style.transition?`${p.style.transition}, box-shadow 160ms ease`:"box-shadow 160ms ease",d&&(d.style.borderRadius=d.style.borderRadius||"6px");const g=()=>{p.style.boxShadow=p.__lliPrevShadow?`${p.__lliPrevShadow}, ${i}`:i},v=()=>{p.style.boxShadow=p.__lliPrevShadow?`${p.__lliPrevShadow}, ${s}`:s};p.__lliGlowEnter=g,p.__lliGlowLeave=v,p.addEventListener("mouseenter",g),p.addEventListener("mouseleave",v)},onUnmount(a){const l=a.__lliGlowTarget;if(!l)return;const c=l.__lliGlowEnter,u=l.__lliGlowLeave;c&&l.removeEventListener("mouseenter",c),u&&l.removeEventListener("mouseleave",u),l.style.boxShadow=l.__lliPrevShadow||"",l.style.transition=l.__lliPrevTransition||"",delete l.__lliPrevShadow,delete l.__lliPrevTransition,delete l.__lliGlowEnter,delete l.__lliGlowLeave,delete a.__lliGlowTarget}}}},C6="BorderGlowPlugin",L6="边框光晕：加载成功后为卡片应用发光阴影，悬停时增强。",I6="2.0.0",k6=["visual","视觉"],_6=[{name:"onUnmount",when:"组件卸载前执行一次",description:"释放监听、定时器与观察器；与 onMount 成对出现，避免泄漏"},{name:"onLoadSuccess",when:"图片成功解码可显示时",description:"拿到最终 displaySrc 做后续动作（上报、预取下张、淡入）"}],E6=[],R6="只读取 context 字段（props / state / data），不调用上下文方法",z6=[{name:"color",type:"string",default:"rgba(0, 153, 255, 0.6)",description:"辉光颜色"},{name:"blurPx",type:"number",default:"12",description:"辉光模糊半径 px"},{name:"spreadPx",type:"number",default:"2",description:"辉光扩散 px"},{name:"hoverMultiplier",type:"number",default:"1.4",description:"悬停时辉光强度倍数"}],O6=`// 加载成功后卡片发光，悬停增强
const GlowImage = withPlugins(LazyLoadImageCore, [
  createBorderGlowPlugin({
    color: "rgba(0, 153, 255, 0.6)",
    blurPx: 12,
    spreadPx: 2,
    hoverMultiplier: 1.4,
  }),
]);

<GlowImage src="https://picsum.photos/seed/glow/600/400" alt="边框辉光" />;`,D6=[{name:"基础辉光",description:"蓝色柔光，悬停轻微增强，突出主体卡片。",src:"https://picsum.photos/seed/glow-basic/600/400",config:{color:"rgba(0, 153, 255, 0.6)",blurPx:12,spreadPx:2,hoverMultiplier:1.4}},{name:"强霓虹辉光",description:"品红大模糊半径，悬停强度放大约 1.6 倍。",src:"https://picsum.photos/seed/glow-neon/600/400",config:{color:"rgba(255, 0, 128, 0.7)",blurPx:24,spreadPx:4,hoverMultiplier:1.6}},{name:"柔和暖光",description:"暖橙色低饱和辉光，适配温馨主题。",src:"https://picsum.photos/seed/glow-warm/600/400",config:{color:"rgba(255, 170, 0, 0.5)",blurPx:18,spreadPx:2,hoverMultiplier:1.3}}],M6=["加载成功后自动为卡片加发光阴影","悬停增强辉光强度","颜色 / 模糊 / 扩散均可调","智能定位外层卡片，避免被父容器 overflow 裁剪","卸载时自动还原原始阴影"],j6=["商品主图聚焦","精选 / 推荐位强调","卡片悬停交互反馈","暗色背景下的视觉点睛"],T6=["辉光优先作用在外层卡片（向上两层），以规避父容器 overflow:hidden 把光晕裁掉。","插件在 onUnmount 还原原始 box-shadow，不会污染其它样式。","与 CustomEffects 的 containerStyle 叠加时，两者都会合并进容器样式。"],N6={name:C6,description:L6,since:I6,tags:k6,events:_6,methods:E6,methodsNote:R6,config:z6,example:O6,examples:D6,features:M6,useCases:j6,notes:T6};function A6(e,t=4){try{const n=document.createElement("canvas"),o=Math.min(e.naturalWidth||e.width,256),r=Math.min(e.naturalHeight||e.height,256);if(!o||!r)return null;n.width=o,n.height=r;const s=n.getContext("2d");if(!s)return null;s.drawImage(e,0,0,o,r);const i=s.getImageData(0,0,o,r).data,a=Math.max(1,Math.floor(Number(t))||1);let l=0,c=0,u=0,d=0;for(let p=0;p<r;p+=a)for(let g=0;g<o;g+=a){const v=(p*o+g)*4;i[v+3]!==0&&(l+=i[v],c+=i[v+1],u+=i[v+2],d++)}return d?(l=Math.round(l/d),c=Math.round(c/d),u=Math.round(u/d),`rgb(${l}, ${c}, ${u})`):null}catch{return null}}function B6(e={}){const{setContainerBg:t=!0,sampleSize:n=4,showOverlay:o=!0}=e;return{name:"color-extraction",version:"1.0.0",config:e,hooks:{transformProps:r=>({...r,crossOrigin:"anonymous"}),onMount:r=>{var s,i;try{(i=(s=r.imageRef)==null?void 0:s.current)==null||i.setAttribute("crossOrigin","anonymous")}catch{}},onLoadSuccess:r=>{var a,l,c;const s=(a=r.imageRef)==null?void 0:a.current;if(!s)return;const i=A6(s,n);if(t&&i)try{const u=(l=r.containerRef)==null?void 0:l.current;u&&(u.style.background=`linear-gradient(90deg, ${i} 0%, rgba(0,0,0,0.06) 100%)`)}catch{}try{(c=r.sharedData)==null||c.set("dominant-color",i)}catch{}try{s.__lliDominantColor=i}catch{}},renderOverlay:r=>o?m.jsx(()=>{const[s,i]=A.useState(null);return A.useEffect(()=>{let a=!0;const l=requestAnimationFrame(()=>{var u,d,p;if(!a)return;const c=((d=(u=r.imageRef)==null?void 0:u.current)==null?void 0:d.__lliDominantColor)||((p=r.sharedData)==null?void 0:p.get("dominant-color"))||null;i(c||null)});return()=>{a=!1,cancelAnimationFrame(l)}},[]),m.jsxs("div",{style:{position:"absolute",top:8,right:8,background:"rgba(0,0,0,0.55)",color:"#fff",fontSize:12,padding:"6px 8px",borderRadius:6,zIndex:5,display:"flex",alignItems:"center",gap:8,boxShadow:"0 2px 8px rgba(0,0,0,0.2)"},children:[m.jsx("span",{style:{width:16,height:16,borderRadius:4,background:s||"transparent",border:"1px solid rgba(255,255,255,0.35)"}}),m.jsx("span",{children:s||"未提取"})]})},{}):null}}}const U6="ColorExtractionPlugin",F6="主色提取：canvas 采样图片主色，可设置容器背景或显示色卡。",V6="2.0.0",W6=["visual","视觉"],H6=[{name:"onMount",when:"组件挂载完成、插件注册后执行一次（返回的清理函数在 manager.clear 时逆序执行）",description:"初始化副作用：注册监听、起定时器、建观察器；必须返回清理函数或配合 onUnmount 收尾"},{name:"onLoadSuccess",when:"图片成功解码可显示时",description:"拿到最终 displaySrc 做后续动作（上报、预取下张、淡入）"},{name:"transformProps",when:"渲染前链式改写图片 props",description:"补 sizes / 占位色 / 解码策略等"},{name:"renderOverlay",when:"每次渲染，覆盖在图片容器之上",description:"骨架屏、错误占位、水印、加载动画"}],G6=[],q6="只读取 context 字段（props / state / data），不调用上下文方法",Q6=[{name:"setContainerBg",type:"boolean",default:"true",description:"是否把容器背景设为主色"},{name:"sampleSize",type:"number",default:"4",description:"采样步长 px，越大越快越不精确"},{name:"showOverlay",type:"boolean",default:"true",description:"是否在右上角显示主色卡"}],K6=`// 提取主色填充容器 + 显示色卡
const TintImage = withPlugins(LazyLoadImageCore, [
  createColorExtractionPlugin({
    setContainerBg: true,
    sampleSize: 4,
    showOverlay: true,
  }),
]);

<TintImage src="https://picsum.photos/seed/color/600/400" alt="主色提取" crossOrigin="anonymous" />;`,Y6=[{name:"主色填充容器 + 色卡",description:"提取主色作为卡片背景，并在右上角显示色卡。",src:"https://picsum.photos/seed/color-full/600/400",config:{setContainerBg:!0,sampleSize:4,showOverlay:!0}},{name:"仅色卡",description:"不改动容器背景，只在角上显示提取到的主色卡。",src:"https://picsum.photos/seed/color-chip/600/400",config:{setContainerBg:!1,showOverlay:!0}}],X6=["canvas 采样主色","可选填充容器背景","可选角标色卡展示","采样精度 / 速度可调"],Z6=["按图自动配色（背景 / 阴影）","色彩主题联动","色卡 / 调色板展示","设计工具取色"],J6=['读取像素需在 <img> 上设置 crossOrigin="anonymous"，且图片服务器需允许跨域，否则 canvas 被污染无法取色（会静默失败）。',"sampleSize 越大采样越稀疏、越快但越不精确。"],eM={name:U6,description:F6,since:V6,tags:W6,events:H6,methods:G6,methodsNote:q6,config:Q6,example:K6,examples:Y6,features:X6,useCases:Z6,notes:J6};function tM(e={}){const{beforeSrc:t,afterSrc:n,labelBefore:o="前",labelAfter:r="后",start:s=.5}=e,i=({context:a})=>{const[l,c]=A.useState(Math.min(1,Math.max(0,s))),u=A.useRef(null),d=A.useRef(!1),p=A.useCallback(P=>{const $=u.current;if(!$)return;const I=$.getBoundingClientRect();if(I.width===0)return;const k=(P-I.left)/I.width;c(Math.min(1,Math.max(0,k)))},[]),g=P=>{var $,I;d.current=!0;try{(I=($=P.target).setPointerCapture)==null||I.call($,P.pointerId)}catch{}p(P.clientX)},v=P=>{d.current&&p(P.clientX)},w=P=>{var $,I;d.current=!1;try{(I=($=P.target).releasePointerCapture)==null||I.call($,P.pointerId)}catch{}},b=t??a.src,y=n??a.src,f=Math.max(1e-4,l),h={position:"absolute",top:8,padding:"2px 8px",background:"rgba(0,0,0,0.55)",color:"#fff",fontSize:12,borderRadius:4,pointerEvents:"none",zIndex:3};return m.jsxs("div",{ref:u,onPointerDown:g,onPointerMove:v,onPointerUp:w,onPointerLeave:w,style:{position:"absolute",inset:0,overflow:"hidden",cursor:"ew-resize",touchAction:"none",userSelect:"none",zIndex:4},title:"拖动对比",children:[m.jsx("img",{src:y,alt:r,draggable:!1,style:{position:"absolute",inset:0,width:"100%",height:"100%",objectFit:"cover"}}),m.jsx("div",{style:{position:"absolute",inset:0,width:`${l*100}%`,overflow:"hidden"},children:m.jsx("img",{src:b,alt:o,draggable:!1,style:{position:"absolute",inset:0,width:`${100/f}%`,height:"100%",objectFit:"cover"}})}),m.jsx("div",{style:{position:"absolute",top:0,bottom:0,left:`${l*100}%`,width:2,background:"#fff",transform:"translateX(-1px)",zIndex:2,pointerEvents:"none"},children:m.jsx("div",{style:{position:"absolute",top:"50%",left:"50%",transform:"translate(-50%, -50%)",width:28,height:28,borderRadius:999,background:"#fff",color:"#333",display:"flex",alignItems:"center",justifyContent:"center",fontSize:14,boxShadow:"0 1px 4px rgba(0,0,0,0.4)"},children:"⇆"})}),m.jsx("div",{style:{...h,left:8},children:o}),m.jsx("div",{style:{...h,right:8},children:r})]})};return{name:"comparison",version:"2.0.0",config:e,hooks:{renderOverlay:a=>m.jsx(i,{context:a})}}}const nM="ComparisonPlugin",oM="前后对比（v2 真实实现）：用可拖拽分隔条对比 beforeSrc / afterSrc 两张图，拖动实时比较差异（如调色前后、装修前后、A/B 图）。不再是写死文字角标。",rM="2.0.0",sM=["other","视觉","对比","交互"],iM=[{name:"renderOverlay",when:"每次渲染，覆盖在图片容器之上",description:"骨架屏、错误占位、水印、加载动画"}],aM=[],lM="只读取 context 字段（props / state / data），不调用上下文方法",cM=[{name:"beforeSrc",type:"string",default:"主图 src",description:"左侧（拖动前）对比图；默认用主图"},{name:"afterSrc",type:"string",default:"主图 src",description:"右侧（拖动后）对比图；默认用主图"},{name:"labelBefore",type:"string",default:"前",description:"左图标签文字"},{name:"labelAfter",type:"string",default:"后",description:"右图标签文字"},{name:"start",type:"number",default:"0.5",description:"初始分割位置（0~1）"}],uM=`const CompareImage = withPlugins(LazyLoadImageCore, [
  createComparisonPlugin({
    beforeSrc: "https://picsum.photos/id/1015/800/600",
    afterSrc: "https://picsum.photos/id/1016/800/600",
    labelBefore: "原图", labelAfter: "处理后",
  }),
]);

<CompareImage src="https://picsum.photos/id/1016/800/600" alt="前后对比示例" />;`,dM=[{name:"基础对比",description:"提供 beforeSrc / afterSrc 两张图，拖动中间把手即可对比。",src:"https://picsum.photos/id/1016/800/600",config:{beforeSrc:"https://picsum.photos/id/1015/800/600",afterSrc:"https://picsum.photos/id/1016/800/600",labelBefore:"原图",labelAfter:"处理后"}},{name:"自定义起始位置",description:"start=0.3 让初始分割更偏左。",src:"https://picsum.photos/id/1021/800/600",config:{beforeSrc:"https://picsum.photos/id/1020/800/600",afterSrc:"https://picsum.photos/id/1021/800/600",start:.3}},{name:"单图自对比（调色）",description:"只传 afterSrc，before 用主图，演示同一张图的两种状态。",src:"https://picsum.photos/id/1025/800/600",config:{afterSrc:"https://picsum.photos/id/1025/800/600",labelBefore:"原图",labelAfter:"滤镜"}}],pM=["可拖拽分隔条对比两图（指针/触摸）","左右标签可自定义","初始分割位置可调","左图按分割宽度自适应裁剪，始终铺满容器"],mM=["装修前后 / 调色前后对比","A/B 图组对比","图像增强效果演示","教学 / 设计稿对照"],gM=["v2 起为真实拖拽交互，旧版仅渲染写死文字角标。对比层覆盖在 Core 主图之上，拖动区域占满容器。"],fM={name:nM,description:oM,since:rM,tags:sM,events:iM,methods:aM,methodsNote:lM,config:cM,example:uM,examples:dM,features:pM,useCases:mM,notes:gM};function hM(e={}){const{enabled:t=!0,focusPoint:n={x:.5,y:.5},showLabel:o=!0}=e;return{name:"crop",version:"0.1.0",config:e,hooks:{transformProps:r=>{if(!t)return r;const s={...r.imageStyle||{},objectFit:"cover",objectPosition:`${Math.round(n.x*100)}% ${Math.round(n.y*100)}%`};return{...r,imageStyle:s}},renderOverlay:()=>!t||!o?null:m.jsxs("div",{style:{position:"absolute",top:8,left:8,background:"rgba(255,165,0,0.8)",color:"#000",padding:"4px 6px",borderRadius:4,fontSize:12},children:["CropPlugin · focus ",n.x.toFixed(2),",",n.y.toFixed(2)]})}}}const yM="CropPlugin",vM="焦点裁剪：通过 object-fit: cover 与 object-position 将裁剪焦点设在指定相对坐标，统一多图主体构图。",wM="2.0.0",xM=["other","视觉","裁剪"],bM=[{name:"transformProps",when:"渲染前链式改写图片 props",description:"补 sizes / 占位色 / 解码策略等"},{name:"renderOverlay",when:"每次渲染，覆盖在图片容器之上",description:"骨架屏、错误占位、水印、加载动画"}],PM=[],$M="只读取 context 字段（props / state / data），不调用上下文方法",SM=[{name:"enabled",type:"boolean",default:"true",description:"是否启用裁剪"},{name:"focusPoint",type:"{ x: number; y: number }",default:"{ x: 0.5, y: 0.5 }",description:"裁剪焦点(0~1 相对坐标)"},{name:"showLabel",type:"boolean",default:"true",description:"是否在图片左上角显示焦点标识（生产版式建议关闭）"}],CM=`const CropImage = withPlugins(LazyLoadImageCore, [
  createCropPlugin({ focusPoint: { x: 0.3, y: 0.4 } }),
]);

<CropImage src="https://picsum.photos/id/1015/500/300" alt="焦点裁剪示例" />;`,LM=[{name:"居中焦点（默认）",description:"x=0.5,y=0.5，主体居中裁切。",src:"https://picsum.photos/id/1015/500/300",config:{focusPoint:{x:.5,y:.5}}},{name:"左上方焦点",description:"x=0.3,y=0.3，主体偏左上裁切。",src:"https://picsum.photos/id/1021/500/300",config:{focusPoint:{x:.3,y:.3}}},{name:"右下焦点",description:"x=0.7,y=0.7，突出右下主体。",src:"https://picsum.photos/id/1026/500/300",config:{focusPoint:{x:.7,y:.7}}}],IM=["object-position 焦点裁剪","cover 填充","任意焦点坐标","可关闭","overlay 标识焦点（showLabel 可关）"],kM=["头像/封面统一构图","商品主图裁剪","列表缩略图","跨尺寸适配"],_M=["当前为最小实现：通过 CSS object-position 模拟裁剪焦点；加载容器需固定宽高以体现裁切效果。","showLabel: false 可隐藏左上角焦点标识，适合直接接入真实版式。"],EM={name:yM,description:vM,since:wM,tags:xM,events:bM,methods:PM,methodsNote:$M,config:SM,example:CM,examples:LM,features:IM,useCases:kM,notes:_M};function RM(e,t){const{lqipSrc:n}=t;if(n)return typeof n=="function"?n(e):n}async function zM(e){try{const t=new Image;t.crossOrigin="anonymous";const n=new Promise((d,p)=>{t.onload=()=>d(t),t.onerror=p});t.src=e;const o=await n,r=document.createElement("canvas");r.width=Math.max(1,Math.min(16,o.naturalWidth)),r.height=Math.max(1,Math.min(16,o.naturalHeight));const s=r.getContext("2d");if(!s)return;s.drawImage(o,0,0,r.width,r.height);const i=s.getImageData(0,0,r.width,r.height).data;let a=0,l=0,c=0,u=0;for(let d=0;d<i.length;d+=4)a+=i[d],l+=i[d+1],c+=i[d+2],u++;return a=Math.round(a/u),l=Math.round(l/u),c=Math.round(c/u),`rgb(${a}, ${l}, ${c})`}catch{return}}function OM(e={}){const t=e.color??"rgba(0,0,0,0.06)";return{name:"dominant-color",version:"1.0.0",config:e,hooks:{onMount:n=>{var r;const o=(r=n.containerRef)==null?void 0:r.current;if(o)try{const s=RM(n.src,e);if(s)zM(s).then(i=>{try{o.style.background=i||t}catch{}}).catch(()=>{try{o.style.background=t}catch{}});else try{o.style.background=t}catch{}}catch{try{o.style.background=t}catch{}}}}}}const DM="DominantColorPlugin",MM="主色占位：在加载完成前用指定颜色或 LQIP 采样平均色填充容器背景，减少白屏、提升视觉连贯性。",jM="2.0.0",TM=["other","视觉","占位"],NM=[{name:"onMount",when:"组件挂载完成、插件注册后执行一次（返回的清理函数在 manager.clear 时逆序执行）",description:"初始化副作用：注册监听、起定时器、建观察器；必须返回清理函数或配合 onUnmount 收尾"}],AM=[],BM="只读取 context 字段（props / state / data），不调用上下文方法",UM=[{name:"color",type:"string",default:"rgba(0,0,0,0.06)",description:"指定背景色（未提供时尝试从 lqip 采样）"},{name:"lqipSrc",type:"string | ((src) => string)",default:"undefined",description:"低清预览图地址或生成函数（用于采样平均色）"}],FM=`const ColorImage = withPlugins(LazyLoadImageCore, [
  createDominantColorPlugin({
    lqipSrc: (src) => src + "?w=20", // 用小图采样主色
  }),
]);

<ColorImage src="https://picsum.photos/id/1015/500/300" alt="主色占位示例" />;`,VM=[{name:"指定背景色",description:"直接指定浅灰背景，加载前不白屏。",src:"https://picsum.photos/id/1015/500/300",config:{color:"#e9ecef"}},{name:"LQIP 采样主色",description:"用小图采样平均色填充（跨域图需 CORS，失败则回退默认色）。",src:"https://picsum.photos/id/1021/500/300",config:{lqipSrc:"https://picsum.photos/id/1021/20/20"}},{name:"暖色背景",description:"指定暖色背景，营造色调一致感。",src:"https://picsum.photos/id/1026/500/300",config:{color:"#f8d7da"}}],WM=["指定颜色占位","LQIP 采样平均色","加载前不白屏","采样失败安全回退","可关闭"],HM=["相册/画廊占位","Pinterest 风布局","慢网白屏治理","品牌色调统一"],GM=["lqipSrc 采样需要图片服务器配置 CORS 头；跨域失败会自动回退到 color（默认浅灰），不影响加载。"],qM={name:DM,description:MM,since:jM,tags:TM,events:NM,methods:AM,methodsNote:BM,config:UM,example:FM,examples:VM,features:WM,useCases:HM,notes:GM};function QM(e,t){const{lqipSrc:n}=t;if(n)return typeof n=="function"?n(e):n}function KM(e={}){const{blur:t=12,opacity:n=1,zIndex:o=2}=e;return{name:"lqip",version:"1.0.0",config:e,hooks:{renderOverlay:r=>{const{imageState:s,src:i}=r,a=QM(i,e);if(!a||s.isLoaded)return null;const l={position:"absolute",inset:0,backgroundImage:`url(${a})`,backgroundSize:"cover",backgroundPosition:"center",filter:`blur(${t}px)`,opacity:n,zIndex:o,pointerEvents:"none",transition:"opacity 300ms ease"};return m.jsx("div",{style:l})}}}}const YM="LQIPPlugin",XM="低清预览（LQIP）：在清晰图加载期间叠加模糊的小图作为占位，加载完成后自动隐藏，实现渐进式加载体验。",ZM="2.0.0",JM=["other","视觉","占位","渐进加载"],ej=[{name:"renderOverlay",when:"每次渲染，覆盖在图片容器之上",description:"骨架屏、错误占位、水印、加载动画"}],tj=[],nj="只读取 context 字段（props / state / data），不调用上下文方法",oj=[{name:"lqipSrc",type:"string | ((src) => string)",default:"undefined",description:"低清预览图地址或生成函数"},{name:"blur",type:"number",default:"12",description:"模糊半径(px)"},{name:"opacity",type:"number",default:"1",description:"不透明度(0~1)"},{name:"zIndex",type:"number",default:"2",description:"叠加层级"}],rj=`const LqipImage = withPlugins(LazyLoadImageCore, [
  createLqipPlugin({ lqipSrc: (src) => src + "?w=20", blur: 14 }),
]);

<LqipImage src="https://picsum.photos/id/1015/500/300" alt="LQIP 示例" />;`,sj=[{name:"模糊小图占位",description:"14px 模糊小图作为加载期占位。",src:"https://picsum.photos/id/1015/500/300",config:{lqipSrc:"https://picsum.photos/id/1015/20/20",blur:14}},{name:"低不透明度",description:"降低占位图不透明度，弱化视觉存在。",src:"https://picsum.photos/id/1021/500/300",config:{lqipSrc:"https://picsum.photos/id/1021/20/20",blur:12,opacity:.6}},{name:"清晰后淡出",description:"加载完成自动隐藏模糊层，过渡到清晰图。",src:"https://picsum.photos/id/1026/500/300",config:{lqipSrc:"https://picsum.photos/id/1026/20/20",blur:16}}],ij=["模糊低清占位","可调模糊/透明度/层级","加载完成自动隐藏","支持函数/字符串来源","渐进式加载"],aj=["渐进式图片加载","慢网占位","画廊/相册","提升感知性能"],lj=["lqipSrc 为函数型配置，静态预览使用字符串小图；函数用法见用法示例。"],cj={name:YM,description:XM,since:ZM,tags:JM,events:ej,methods:tj,methodsNote:nj,config:oj,example:rj,examples:sj,features:ij,useCases:aj,notes:lj};function uj({context:e,cfg:t}){const{position:n="bottom",background:o="rgba(0,0,0,0.62)",color:r="#fff",fontSize:s=12,padding:i="6px 8px",borderRadius:a=4,zIndex:l=4,showWhen:c="loading",trigger:u="always"}=t,{imageState:d}=e,p=c==="always"||c==="loading"&&d.isLoading||c==="loaded"&&d.isLoaded||c==="error"&&d.isError,[g,v]=A.useState(!1);if(!(u==="always"?p:p&&g))return m.jsx("div",{style:{position:"absolute",inset:0,zIndex:l,pointerEvents:u==="hover"?"auto":"none"},onMouseEnter:()=>v(!0),onMouseLeave:()=>v(!1)});const w=typeof t.content=="function"?t.content(e):t.content||"Loading...";return m.jsx("div",{style:{position:"absolute",inset:0,zIndex:l,pointerEvents:u==="hover"?"auto":"none"},onMouseEnter:()=>v(!0),onMouseLeave:()=>v(!1),children:m.jsx("div",{style:{position:"absolute",left:8,right:8,background:o,color:r,fontSize:s,padding:i,borderRadius:a,zIndex:l,pointerEvents:u==="hover"?"auto":"none",textAlign:"center",...{top:{top:8},bottom:{bottom:8},center:{top:"50%",transform:"translateY(-50%)"}}[n]},children:w})})}function dj(e={}){return{name:"overlay-info",version:"1.0.0",config:e,hooks:{renderOverlay:t=>m.jsx(uj,{context:t,cfg:e})}}}const pj="OverlayInfoPlugin",mj="信息覆盖层：显示自定义文本，支持常显或悬停触发。",gj="2.0.0",fj=["visual","视觉"],hj=[{name:"renderOverlay",when:"每次渲染，覆盖在图片容器之上",description:"骨架屏、错误占位、水印、加载动画"}],yj=[],vj="只读取 context 字段（props / state / data），不调用上下文方法",wj=[{name:"content",type:"string | ((context: LazyImageContext) => string)",default:'""',description:"覆盖层文本；可传函数按 context 派生"},{name:"position",type:'"top" | "bottom" | "center"',default:'"bottom"',description:"文本位置"},{name:"background",type:"string",default:"rgba(0,0,0,0.62)",description:"背景色"},{name:"color",type:"string",default:"#fff",description:"文字颜色"},{name:"fontSize",type:"number",default:"12",description:"字号 px"},{name:"padding",type:"string",default:"6px 10px",description:"内边距"},{name:"borderRadius",type:"number",default:"0",description:"圆角 px"},{name:"zIndex",type:"number",default:"2",description:"层叠顺序"},{name:"showWhen",type:'"always" | "loading" | "loaded" | "error"',default:'"always"',description:"何时显示"},{name:"trigger",type:'"always" | "hover"',default:'"always"',description:"触发方式"}],xj=`// 底部信息条（常显）
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
});`,bj=[{name:"底部信息条（常显）",description:"半透明黑底白字信息条，常显于底部。",src:"https://picsum.photos/seed/overlay-bottom/600/400",config:{content:"来源：picsum.photos",position:"bottom",background:"rgba(0,0,0,0.62)",color:"#fff",showWhen:"always",trigger:"always"}},{name:"悬停显示信息",description:"平时干净，鼠标悬停时居中浮出提示文字。",src:"https://picsum.photos/seed/overlay-hover/600/400",config:{content:"悬停查看详情",position:"center",background:"rgba(0,0,0,0.62)",color:"#fff",showWhen:"always",trigger:"hover"}}],Pj=["顶部 / 底部 / 居中三位置","文本支持静态或函数动态派生","背景 / 颜色 / 字号 / 圆角可调","可常显或悬停触发","可按加载状态（loading/loaded/error）显示"],$j=["图片来源 / 版权信息","悬停浮出操作提示","加载 / 错误态文案","图库元信息展示"],Sj=["content 传函数时可按 context（含 imageState / src）派生，但场景示例画廊用静态文本以保证实时预览。","与 Caption 的区别：OverlayInfo 更通用（任意文本 + 触发时机 + 加载态），Caption 专注单一图注。"],Cj={name:pj,description:mj,since:gj,tags:fj,events:hj,methods:yj,methodsNote:vj,config:wj,example:xj,examples:bj,features:Pj,useCases:$j,notes:Sj};function Lj(e={}){const t=Math.max(0,Math.min(1,e.strength??.2)),n=e.axis??"y";function o(r){const s=r.getBoundingClientRect(),i=typeof window<"u"?window.innerHeight:800,a=(s.top+s.height/2-i/2)/i*(t*100),l=n==="x"?a:0,c=n==="y"?a:0;r.style.transform=`translate(${l}px, ${c}px)`}return{name:"parallax",version:"1.0.0",config:e,hooks:{onMount:r=>{let s=0;const i=()=>{var c;const l=(c=r.imageRef)==null?void 0:c.current;if(!l){s++<60&&requestAnimationFrame(i);return}a(l)},a=l=>{r.__lliParallaxImg=l,l.style.willChange="transform";let c=!1,u=null;const d=()=>{c||(u=requestAnimationFrame(()=>{o(l),c=!1}),c=!0)},p=()=>{c||(u=requestAnimationFrame(()=>{o(l),c=!1}),c=!0)};return l.__lliParallaxScroll=d,l.__lliParallaxResize=p,l.__lliParallaxRafId=u,window.addEventListener("scroll",d,{passive:!0}),window.addEventListener("resize",p,{passive:!0}),o(l),()=>{l.__lliParallaxRafId!=null&&cancelAnimationFrame(l.__lliParallaxRafId)}};i()},onUnmount:r=>{var l;const s=r.__lliParallaxImg||((l=r.imageRef)==null?void 0:l.current);if(!s)return;if(s.__lliParallaxRafId!=null)try{cancelAnimationFrame(s.__lliParallaxRafId)}catch{}const i=s.__lliParallaxScroll,a=s.__lliParallaxResize;i&&window.removeEventListener("scroll",i),a&&window.removeEventListener("resize",a),s.style.transform="",s.style.willChange="",delete s.__lliParallaxScroll,delete s.__lliParallaxResize,delete s.__lliParallaxRafId}}}}const Ij="ParallaxPlugin",kj="视差滚动：随页面滚动按强度偏移图片位置。",_j="2.0.0",Ej=["visual","视觉"],Rj=[{name:"onMount",when:"组件挂载完成、插件注册后执行一次（返回的清理函数在 manager.clear 时逆序执行）",description:"初始化副作用：注册监听、起定时器、建观察器；必须返回清理函数或配合 onUnmount 收尾"},{name:"onUnmount",when:"组件卸载前执行一次",description:"释放监听、定时器与观察器；与 onMount 成对出现，避免泄漏"}],zj=[],Oj="只读取 context 字段（props / state / data），不调用上下文方法",Dj=[{name:"strength",type:"number",default:"0.2",description:"偏移强度 0..1"},{name:"axis",type:'"y" | "x"',default:'"y"',description:"偏移轴向"}],Mj=`// 垂直视差：滚动时图片缓慢位移
const ParallaxImage = withPlugins(LazyLoadImageCore, [
  createParallaxPlugin({ strength: 0.2, axis: "y" }),
]);

<ParallaxImage src="https://picsum.photos/seed/parallax/600/400" alt="视差" />;`,jj=[{name:"垂直视差",description:"中等强度 y 轴视差，滚动时图片缓移，营造纵深。",src:"https://picsum.photos/seed/parallax-y/600/400",config:{strength:.2,axis:"y"}},{name:"轻微视差",description:"低强度视差，含蓄的层次感，不喧宾夺主。",src:"https://picsum.photos/seed/parallax-light/600/400",config:{strength:.1,axis:"y"}}],Tj=["随滚动偏移图片（y / x 轴）","强度可调（0~1）","纯 transform 实现，性能友好","增强页面纵深与动感"],Nj=["落地页 / Hero 区背景","长图文滚动叙事","作品集视差画廊","需要纵深氛围的视觉场景"],Aj=["视差依赖页面滚动，demo 小卡片内滚动幅度有限，效果在长页面更明显。","strength 过大可能导致图片露出边缘，建议配合 overflow:hidden 容器。"],Bj={name:Ij,description:kj,since:_j,tags:Ej,events:Rj,methods:zj,methodsNote:Oj,config:Dj,example:Mj,examples:jj,features:Tj,useCases:Nj,notes:Aj};function Uj({bus:e,loading:t,showWhen:n="loading",height:o=3,color:r="#3b82f6",background:s="rgba(0,0,0,0.15)",showPercentText:i=!0}){const[a,l]=x.useState(null),[c,u]=x.useState(0),d=A.useRef(null);x.useEffect(()=>{const v=e==null?void 0:e.on("progress",w=>{l(w),w.indeterminate?d.current||(d.current=window.setInterval(()=>{u(b=>b<90?b+3:b)},160)):(u(w.percent??0),d.current&&(clearInterval(d.current),d.current=null))});return()=>{v==null||v(),d.current&&(clearInterval(d.current),d.current=null)}},[e]);const p=n==="always"?!0:t,g=a!=null&&a.indeterminate?c:(a==null?void 0:a.percent)??0;return p?m.jsxs("div",{style:{position:"absolute",inset:0,pointerEvents:"none",background:s,display:"flex",alignItems:"flex-end",zIndex:10},children:[m.jsx("div",{style:{width:`${g}%`,height:o,background:r,transition:"width 200ms ease"}}),i&&m.jsx("div",{style:{position:"absolute",left:"50%",top:"50%",transform:"translate(-50%, -50%)",fontSize:12,color:"#fff",textShadow:"0 1px 2px rgba(0,0,0,0.5)",textAlign:"center",pointerEvents:"none"},children:a!=null&&a.indeterminate?`加载中… ${g}%`:`${g}%`})]}):null}function Fj(e={}){return{name:"progress-overlay",version:"1.0.0",config:e,hooks:{renderOverlay:({bus:t,imageState:n})=>m.jsx(Uj,{bus:t,loading:n.isLoading,showWhen:e.showWhen,height:e.height,color:e.color,background:e.background,showPercentText:e.showPercentText??!0}),onProgress:()=>{}}}}const Vj="ProgressOverlayPlugin",Wj="加载进度条覆盖层：百分比文本与 indeterminate 模式。",Hj="2.0.0",Gj=["visual","视觉"],qj=[{name:"onProgress",when:'加载进度更新（由 withPlugins 订阅 bus 的 "progress" 桥接）',description:"展示进度条 / 百分比；仅对支持进度上报的 loader 生效"},{name:"renderOverlay",when:"每次渲染，覆盖在图片容器之上",description:"骨架屏、错误占位、水印、加载动画"}],Qj=[],Kj="只读取 context 字段（props / state / data），不调用上下文方法",Yj=[{name:"showWhen",type:'"always" | "loading"',default:'"loading"',description:"何时显示"},{name:"height",type:"number",default:"3",description:"进度条高度 px"},{name:"color",type:"string",default:"#4a90e2",description:"进度条颜色"},{name:"background",type:"string",default:"transparent",description:"背景遮罩色"},{name:"showPercentText",type:"boolean",default:"false",description:"是否显示百分比文本"}],Xj=`// 顶部进度条 + 百分比文本
const ProgressImage = withPlugins(LazyLoadImageCore, [
  createProgressOverlayPlugin({
    showWhen: "loading",
    height: 3,
    color: "#4a90e2",n    showPercentText: true,
  }),
]);

<ProgressImage src="https://picsum.photos/seed/progress/600/400" alt="进度蒙层" />;`,Zj=[{name:"顶部进度条 + 百分比",description:"细进度条置于顶部，并显示实时百分比。",src:"https://picsum.photos/seed/progress-top/600/400",config:{showWhen:"loading",height:3,color:"#4a90e2",showPercentText:!0}},{name:"半透明遮罩 + 百分比",description:"加载期覆盖半透明遮罩，中心显示百分比，适合大图。",src:"https://picsum.photos/seed/progress-mask/600/400",config:{showWhen:"loading",height:4,color:"#22c55e",background:"rgba(0,0,0,0.12)",showPercentText:!0}}],Jj=["顶部 / 覆盖式进度条","实时百分比文本","颜色 / 高度 / 背景可调","加载完成后自动消失"],eT=["大图 / 慢网络加载反馈","视频封面缓冲提示","需要明确进度感知的场景","与 Skeleton 配合提升占位体验"],tT=["进度数据来自内核 progress 事件，跨域或缓存命中时可能很快跳到 100%。","与 Skeleton 同时使用时，进度条层级通常高于骨架。"],nT={name:Vj,description:Wj,since:Hj,tags:Gj,events:qj,methods:Qj,methodsNote:Kj,config:Yj,example:Xj,examples:Zj,features:Jj,useCases:eT,notes:tT};function oT(e={}){const{enabled:t=!0,boxes:n=[],zIndex:o=3}=e;return{name:"redaction",version:"1.0.0",config:e,hooks:{renderOverlay:()=>!t||!n.length?null:m.jsx("div",{style:{position:"absolute",inset:0,pointerEvents:"none",zIndex:o},children:n.map((r,s)=>m.jsx("div",{style:{position:"absolute",left:`${r.x*100}%`,top:`${r.y*100}%`,width:`${r.w*100}%`,height:`${r.h*100}%`,background:r.color??"rgba(0,0,0,0.55)",backdropFilter:r.blur?`blur(${r.blur}px)`:void 0,borderRadius:6}},s))})}}}const rT="RedactionPlugin",sT="隐私打码：在指定百分比区域叠加模糊或色块遮挡。",iT="2.0.0",aT=["visual","视觉"],lT=[{name:"renderOverlay",when:"每次渲染，覆盖在图片容器之上",description:"骨架屏、错误占位、水印、加载动画"}],cT=[],uT="只读取 context 字段（props / state / data），不调用上下文方法",dT=[{name:"enabled",type:"boolean",default:"true",description:"是否启用"},{name:"boxes",type:"RedactionBox[]",default:"[]",description:"遮挡区域：{ x, y, w, h (0~1), blur?, color? }"},{name:"zIndex",type:"number",default:"3",description:"层叠顺序"}],pT=`// 局部打码（如人脸 / 车牌）
const RedactedImage = withPlugins(LazyLoadImageCore, [
  createRedactionPlugin({
    boxes: [
      { x: 0.40, y: 0.30, w: 0.20, h: 0.15, blur: 8 },
    ],
  }),
]);

<RedactedImage src="https://picsum.photos/seed/redaction/600/400" alt="打码" />;`,mT=[{name:"局部模糊打码",description:"在图片 40%/30% 处覆盖一块 20%×15% 的模糊区域（如人脸）。",src:"https://picsum.photos/seed/redaction-blur/600/400",config:{enabled:!0,boxes:[{x:.4,y:.3,w:.2,h:.15,blur:8}]}},{name:"色块遮挡",description:"用半透明色块遮挡敏感区域，不依赖模糊。",src:"https://picsum.photos/seed/redaction-block/600/400",config:{enabled:!0,boxes:[{x:.1,y:.7,w:.35,h:.12,color:"rgba(0,0,0,0.85)"}]}}],gT=["按百分比坐标划定遮挡区（自适应尺寸）","支持模糊（blur）或纯色块两种遮挡","可同时覆盖多个区域","整体启停"],fT=["人脸 / 车牌隐私打码","敏感信息遮挡","截图脱敏","合规图片发布"],hT=["坐标使用 0~1 的相对比例，图片缩放时遮挡区自动跟随。","blur 通过 backdrop-filter 实现；若浏览器不支持会以纯色块兜底。","打码是覆盖层，不改变原图像素，导出原图不会被脱敏。"],yT={name:rT,description:sT,since:iT,tags:aT,events:lT,methods:cT,methodsNote:uT,config:dT,example:pT,examples:mT,features:gT,useCases:fT,notes:hT};function vT({context:e,config:t,sanitizeSvg:n}){const{imageState:o}=e,{background:r="transparent",opacity:s=1,zIndex:i=3,showWhen:a="loading",fadeOutOnLoaded:l=!0}=t;if(!(()=>{switch(a){case"always":return!0;case"idle":return o.isIdle;case"loading":return o.isLoading;case"loaded":return o.isLoaded;case"error":return o.isError;default:return o.isLoading}})())return null;const c=typeof t.svgContent=="function"?t.svgContent(e):t.svgContent;let u=null;if(typeof c=="string"){const p=n(c);p&&(u=m.jsx("img",{src:`data:image/svg+xml;charset=utf-8,${encodeURIComponent(p)}`,alt:"",style:{width:"60%",height:"60%",objectFit:"contain"}}))}else c!=null&&(u=c);const d={position:"absolute",inset:0,display:"flex",alignItems:"center",justifyContent:"center",background:r,zIndex:i,pointerEvents:"none",opacity:l&&o.isLoaded?0:s,transition:l?"opacity 240ms ease":void 0,padding:"min(40px, 10%)"};return m.jsx("div",{style:d,"aria-hidden":!0,children:u})}const wT=new Set(["script","iframe","object","embed","foreignobject","base","meta","link","style"]),xT=new Set(["href","xlink:href","src","action","formaction","poster","background","cite","data","codebase","longdesc","usemap"]),bT=["http:","https:","blob:","mailto:","tel:","data:image/"];function PT(e){const t=Array.from(e.trim().toLowerCase()).filter(n=>n.charCodeAt(0)>32).join("");return!t||t.startsWith("#")||t.startsWith("./")||t.startsWith("../")||t.startsWith("/")?!0:t.startsWith("data:")?t.startsWith("data:image/"):/^(javascript|vbscript|file):/.test(t)?!1:bT.some(n=>t.startsWith(n))||!t.includes(":")}function $T(e){var t,n;if(!e||typeof DOMParser>"u")return"";try{const o=new DOMParser;let r=o.parseFromString(e,"image/svg+xml").documentElement;if((!r||r.nodeName.toLowerCase()==="parsererror")&&(r=((n=(t=o.parseFromString(e,"text/html"))==null?void 0:t.body)==null?void 0:n.querySelector("svg"))??null),!r)return"";const s=a=>{if(wT.has(a.tagName.toLowerCase())){a.remove();return}Array.from(a.attributes).forEach(l=>{const c=l.name.toLowerCase();if(c.startsWith("on")){a.removeAttribute(l.name);return}if(c==="style"){/expression|javascript:|vbscript:|url\s*\(\s*['"]?(javascript|vbscript)/i.test(l.value)&&a.removeAttribute(l.name);return}xT.has(c)&&!PT(l.value)&&a.removeAttribute(l.name)}),Array.from(a.children).forEach(s)};s(r);const i=typeof XMLSerializer<"u"?new XMLSerializer:null;return i?i.serializeToString(r):r.outerHTML||""}catch{return""}}function ST(e={}){return{name:"svg-placeholder",version:"1.1.0",description:"SVG 占位覆盖层（字符串经白名单清洗后以 data URL 渲染，移除 HTML 注入点）",config:e,hooks:{renderOverlay:t=>m.jsx(vT,{context:t,config:e,sanitizeSvg:$T})}}}const CT="SvgPlaceholderPlugin",LT="SVG 占位：在加载期间注入自定义 SVG 占位内容（如骨架、品牌图形），加载成功后淡出，增强加载反馈与品牌感。",IT="2.0.0",kT=["other","视觉","占位"],_T=[{name:"renderOverlay",when:"每次渲染，覆盖在图片容器之上",description:"骨架屏、错误占位、水印、加载动画"}],ET=[],RT="只读取 context 字段（props / state / data），不调用上下文方法",zT=[{name:"svgContent",type:"string | ((context) => string)",default:"undefined",description:"SVG 字符串或动态生成函数"},{name:"background",type:"string",default:'"transparent"',description:"叠加层背景"},{name:"opacity",type:"number",default:"1",description:"不透明度(0~1)"},{name:"zIndex",type:"number",default:"3",description:"叠加层级"},{name:"showWhen",type:'"always" | "idle" | "loading" | "loaded" | "error"',default:'"loading"',description:"显示条件"},{name:"fadeOutOnLoaded",type:"boolean",default:"true",description:"加载成功后是否淡出"}],OT=`const SvgImage = withPlugins(LazyLoadImageCore, [
  createSvgPlaceholderPlugin({
    svgContent: () => \`<svg viewBox='0 0 100 100'><circle cx='50' cy='50' r='40' fill='#ddd'/></svg>\`,
    showWhen: "loading",
  }),
]);

<SvgImage src="https://picsum.photos/id/1015/500/300" alt="SVG 占位示例" />;`,DT=[{name:"圆形骨架占位",description:"加载期显示灰色圆形 SVG 占位，完成后淡出。",src:"https://picsum.photos/id/1015/500/300",config:{svgContent:"<svg viewBox='0 0 100 100'><circle cx='50' cy='50' r='40' fill='#ddd'/></svg>",showWhen:"loading"}},{name:"带背景占位",description:"浅色背景衬托占位 SVG。",src:"https://picsum.photos/id/1021/500/300",config:{svgContent:"<svg viewBox='0 0 100 100'><rect x='10' y='10' width='80' height='80' rx='8' fill='#eee'/></svg>",background:"#fafafa"}},{name:"常驻标识",description:"showWhen=always，占位层持续显示。",src:"https://picsum.photos/id/1026/500/300",config:{svgContent:"<svg viewBox='0 0 100 100'><rect width='100' height='100' fill='rgba(0,0,0,0.04)'/></svg>",showWhen:"always"}}],MT=["注入任意 SVG 占位","加载时/常驻/多状态显示","淡出过渡","背景/透明度/层级可调","函数/字符串来源"],jT=["动画骨架屏","品牌图形占位","加载反馈","差异化占位"],TT=["svgContent 支持函数型（按 context 动态生成），静态预览使用字符串；函数用法见用法示例。"],NT={name:CT,description:LT,since:IT,tags:kT,events:_T,methods:ET,methodsNote:RT,config:zT,example:OT,examples:DT,features:MT,useCases:jT,notes:TT};function AT(e,t){var o;const n=(o=e.imageRef)==null?void 0:o.current;if(n)try{n.style.opacity=String(t.fromOpacity??0),n.style.transform=`scale(${t.fromScale??.98})`,n.style.transition=`opacity ${t.durationMs??300}ms ${t.easing??"ease"}, transform ${t.durationMs??300}ms ${t.easing??"ease"}`}catch{}}function BT(e,t){var o;const n=(o=e.imageRef)==null?void 0:o.current;if(n)try{n.style.opacity=String(t.toOpacity??1),n.style.transform=`scale(${t.toScale??1})`}catch{}}function UT(e={}){return{name:"transition",version:"1.0.0",config:e,hooks:{onMount:t=>{AT(t,e)},onLoadSuccess:t=>{BT(t,e)}}}}const FT="TransitionPlugin",VT="加载成功过渡动画：从指定透明度/缩放到目标值的平滑过渡。",WT="2.0.0",HT=["visual","视觉"],GT=[{name:"onMount",when:"组件挂载完成、插件注册后执行一次（返回的清理函数在 manager.clear 时逆序执行）",description:"初始化副作用：注册监听、起定时器、建观察器；必须返回清理函数或配合 onUnmount 收尾"},{name:"onLoadSuccess",when:"图片成功解码可显示时",description:"拿到最终 displaySrc 做后续动作（上报、预取下张、淡入）"}],qT=[],QT="只读取 context 字段（props / state / data），不调用上下文方法",KT=[{name:"durationMs",type:"number",default:"400",description:"过渡时长 ms"},{name:"easing",type:"string",default:"ease",description:"缓动函数"},{name:"fromOpacity",type:"number",default:"0",description:"起始透明度"},{name:"toOpacity",type:"number",default:"1",description:"结束透明度"},{name:"fromScale",type:"number",default:"1",description:"起始缩放"},{name:"toScale",type:"number",default:"1",description:"结束缩放"}],YT=`// 缩放 + 淡入过渡
const TransImage = withPlugins(LazyLoadImageCore, [
  createTransitionPlugin({
    durationMs: 500,
    fromOpacity: 0,
    toOpacity: 1,
    fromScale: 1.05,
    toScale: 1,
  }),
]);

<TransImage src="https://picsum.photos/seed/transition/600/400" alt="过渡" />;`,XT=[{name:"缩放淡入",description:"从 1.05 倍淡入到原尺寸，轻盈的入场感。",src:"https://picsum.photos/seed/transition-zoom/600/400",config:{durationMs:500,fromOpacity:0,toOpacity:1,fromScale:1.05,toScale:1}},{name:"纯淡入",description:"仅透明度过渡，不含缩放。",src:"https://picsum.photos/seed/transition-fade/600/400",config:{durationMs:400,fromOpacity:0,toOpacity:1}}],ZT=["透明度 + 缩放双维度过渡","起始 / 结束值均可定制","时长与缓动可调","相比 FadeIn 更灵活"],JT=["图片入场动画","卡片翻转 / 弹出图","需要缩放感的场景","与视差 / 滚动联动"],e8=["fromScale=toScale=1 时退化为纯淡入，等价于更轻量的 FadeIn。","缩放在 transform 上实现，注意父容器 overflow 与定位。"],t8={name:FT,description:VT,since:WT,tags:HT,events:GT,methods:qT,methodsNote:QT,config:KT,example:YT,examples:XT,features:ZT,useCases:JT,notes:e8};function n8(e={}){const{text:t="© 2024 Vane",position:n="bottom-right",opacity:o=.8,fontSize:r=12,color:s="#fff",offsetX:i=8,offsetY:a=8,zIndex:l=2,enabled:c=!0}=e;return{name:"watermark",version:"1.0.0",config:e,hooks:{renderOverlay:u=>{if(!c)return null;const d=typeof t=="function"?t(u.src):t;return m.jsx("div",{"aria-hidden":"true",style:{position:"absolute",pointerEvents:"none",color:s,opacity:o,fontSize:r,fontWeight:500,textShadow:"0 1px 2px rgba(0,0,0,0.55)",zIndex:l,...{"top-left":{top:a,left:i},"top-right":{top:a,right:i},"bottom-left":{bottom:a,left:i},"bottom-right":{bottom:a,right:i},center:{top:"50%",left:"50%",transform:"translate(-50%, -50%)"}}[n]},children:d})}}}}const o8="WatermarkPlugin",r8="文字水印覆盖层：支持四角/中心定位、动态文本与样式定制。",s8="2.0.0",i8=["visual","视觉"],a8=[{name:"renderOverlay",when:"每次渲染，覆盖在图片容器之上",description:"骨架屏、错误占位、水印、加载动画"}],l8=[],c8="只读取 context 字段（props / state / data），不调用上下文方法",u8=[{name:"text",type:"string | ((src: string) => string)",default:'"© 2024 Vane"',description:"水印文本；可传函数按 src 动态生成"},{name:"position",type:'"top-left" | "top-right" | "bottom-left" | "bottom-right" | "center"',default:'"bottom-right"',description:"水印位置"},{name:"opacity",type:"number",default:"0.8",description:"0~1 透明度"},{name:"fontSize",type:"number",default:"12",description:"px 字号"},{name:"color",type:"string",default:'"#fff"',description:"文字颜色"},{name:"offsetX",type:"number",default:"8",description:"px 水平偏移"},{name:"offsetY",type:"number",default:"8",description:"px 垂直偏移"},{name:"zIndex",type:"number",default:"2",description:"层叠顺序"},{name:"enabled",type:"boolean",default:"true",description:"是否启用"}],d8=`// 版权水印：右下角、半透明
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
});`,p8=[{name:"版权水印（右下角）",description:"半透明白字落在右下角，常见版权标识场景。",src:"https://picsum.photos/seed/wm-copyright/600/400",config:{text:"© 2026 Vane",position:"bottom-right",opacity:.6,fontSize:14,color:"#ffffff"}},{name:"中心品牌水印",description:"居中、低透明度大字，适合图库/作品集防盗用。",src:"https://picsum.photos/seed/wm-center/600/400",config:{text:"VANE",position:"center",opacity:.22,fontSize:30,color:"#ffffff"}},{name:"左上角说明水印",description:"左上角小字，作来源/批次标注。",src:"https://picsum.photos/seed/wm-topleft/600/400",config:{text:"内部素材 • 勿外传",position:"top-left",opacity:.85,fontSize:12,color:"#ffd400"}}],m8=["五位置可选（四角 + 中心）","文本支持静态字符串或函数动态派生","可调透明度 / 字号 / 颜色 / 偏移","可整体启停（enabled）","层叠顺序可控（zIndex）"],g8=["图片版权 / 品牌标识","图库与作品集防盗用","内部素材来源 / 批次标注","活动海报统一角标","按用户 / 租户动态打标"],f8=["text 传函数时按图片 src 动态生成（如嵌入 ID），但场景示例画廊需用静态文本以保证实时预览。","中心水印透明度建议低于 0.3，避免遮挡主体内容。","水印为覆盖层（renderOverlay），不参与图片本身像素，导出原图不会被打标。"],h8={name:o8,description:r8,since:s8,tags:i8,events:a8,methods:l8,methodsNote:c8,config:u8,example:d8,examples:p8,features:m8,useCases:g8,notes:f8};let y8=0;function v8(e){return Object.entries(e).map(([t,n])=>n==null?"":`${t.replace(/[A-Z]/g,o=>"-"+o.toLowerCase())}: ${n};`).filter(Boolean).join(" ")}const w8=e=>{const t=(e==null?void 0:e.imageStyle)??{},n=(e==null?void 0:e.containerStyle)??{},o=(e==null?void 0:e.hoverImageStyle)??{},r=Object.keys(o).length>0,s=`lli-custom-${++y8}`;let i=null;const a=[t.transition,"opacity 180ms ease"].filter(Boolean).join(", ");return{name:"custom-effects",priority:50,hooks:{transformProps(l){const c={...l.imageStyle||{},...t,transition:a},u={...l.containerStyle||{},...n},d=[l.imageClassName,e==null?void 0:e.imageClassName,r?s:null].filter(Boolean).join(" "),p=[l.containerClassName,e==null?void 0:e.containerClassName].filter(Boolean).join(" ");return{...l,imageStyle:c,imageClassName:d,containerStyle:u,containerClassName:p}},onLoadSuccess(){!r||typeof document>"u"||i||(i=document.createElement("style"),i.setAttribute("data-lli-custom",s),i.textContent=`.${s}:hover { ${v8(o)} }`,document.head.appendChild(i))},onUnmount(){i&&i.parentNode&&(i.parentNode.removeChild(i),i=null)}}}},x8="CustomEffectsPlugin",b8="自定义效果逃逸舱：把内置视觉插件覆盖不到的任意 CSS 效果（filter / transform / transition / className）直接注入图片与容器，无需新造组件。旧版 CustomEffects 展示页的 v2 等效形态。",P8="2.0.0",$8=["visual","视觉","自定义"],S8=[{name:"onUnmount",when:"组件卸载前执行一次",description:"释放监听、定时器与观察器；与 onMount 成对出现，避免泄漏"},{name:"onLoadSuccess",when:"图片成功解码可显示时",description:"拿到最终 displaySrc 做后续动作（上报、预取下张、淡入）"},{name:"transformProps",when:"渲染前链式改写图片 props",description:"补 sizes / 占位色 / 解码策略等"}],C8=[],L8="只读取 context 字段（props / state / data），不调用上下文方法",I8=[{name:"imageStyle",type:"React.CSSProperties",default:"{}",description:'应用到 <img> 的任意内联样式，如 { filter: "contrast(1.2) saturate(1.4)" }'},{name:"imageClassName",type:"string",default:'""',description:"附加到 <img> 的 className"},{name:"containerStyle",type:"React.CSSProperties",default:"{}",description:"应用到容器（卡片）的任意内联样式"},{name:"containerClassName",type:"string",default:'""',description:"附加到容器的 className"},{name:"hoverImageStyle",type:"React.CSSProperties",default:"{}",description:'悬停时叠加到 <img> 的样式（移出还原），如 { transform: "scale(1.08)" }'}],k8=`// 任意 CSS 效果逃逸舱：内置插件没有的视觉，直接以样式注入
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

<ArtImage src="https://picsum.photos/seed/custom/600/400" alt="自定义效果" />;`,_8=[{name:"复古胶片滤镜（静态）",description:"sepia + 对比度 + 饱和度组合，模拟胶片质感，并给容器加圆角。",src:"https://picsum.photos/seed/custom-film/600/400",config:{imageStyle:{filter:"sepia(0.45) contrast(1.1) saturate(1.3)",transition:"filter 240ms ease"},containerStyle:{borderRadius:16,overflow:"hidden",boxShadow:"0 6px 20px rgba(0,0,0,0.18)"}}},{name:"悬停放大 + 轻微旋转",description:"平常静态，鼠标悬停时图片放大并旋转 2°，移出自动还原。",src:"https://picsum.photos/seed/custom-hover/600/400",config:{imageStyle:{transition:"transform 220ms ease"},hoverImageStyle:{transform:"scale(1.08) rotate(2deg)"}}},{name:"叠加到内置插件之上",description:"与 BorderGlow / Caption 等内置插件叠加：用逃逸舱补一个渐变描边。",src:"https://picsum.photos/seed/custom-combo/600/400",config:{imageClassName:"custom-art-frame",containerStyle:{padding:6,background:"linear-gradient(135deg,#ff9a9e,#fad0c4)",borderRadius:12}}}],E8=["注入任意 CSS filter（模糊 / 灰度 / 复古 / 色相旋转等）","注入任意 transform（缩放 / 旋转 / 位移）","为 <img> 与容器分别附加 className 与内联样式","hoverImageStyle 支持悬停态，移出自动还原","优先级靠前，可叠加在其它视觉插件之上","无需为一次性效果新建组件，几行配置即可"],R8=["内置视觉插件未覆盖的特殊滤镜 / 调色需求","活动主题需要临时换肤、加描边 / 圆角","悬停微交互（放大、旋转、投影）","演示或 A/B 实验时的快速视觉验证","替代旧版 CustomEffects 展示页的任意效果组合"],z8=["imageStyle / containerStyle 合并进核心渲染的 style，后者优先级更高（叠加而非覆盖）。","插件会自动保留核心自带的 opacity 渐显：你给 imageStyle.transition 设值时，会追加 opacity 180ms 而非覆盖它。","hoverImageStyle 通过注入一条纯 CSS `:hover` 规则实现，由浏览器原生处理进入/离开——不触碰 React 受控的内联样式，因此不会出现「移出后图片消失」的旧问题。","与内置插件叠加时，建议把 CustomEffects 放在 withPlugins 数组靠前位置（其 priority=50 已处理）。","需要函数式动态样式时，可在业务侧先算出 style 对象再传入，本插件保持配置式以便文档化。"],O8={name:x8,description:b8,since:P8,tags:$8,events:S8,methods:C8,methodsNote:L8,config:I8,example:k8,examples:_8,features:E8,useCases:R8,notes:z8},D8={fade:"@keyframes reveal-fade { from { opacity: 0; } to { opacity: 1; } }","fade-up":"@keyframes reveal-fade-up { from { opacity: 0; transform: translateY(30px); } to { opacity: 1; transform: translateY(0); } }","fade-down":"@keyframes reveal-fade-down { from { opacity: 0; transform: translateY(-30px); } to { opacity: 1; transform: translateY(0); } }","fade-left":"@keyframes reveal-fade-left { from { opacity: 0; transform: translateX(30px); } to { opacity: 1; transform: translateX(0); } }","fade-right":"@keyframes reveal-fade-right { from { opacity: 0; transform: translateX(-30px); } to { opacity: 1; transform: translateX(0); } }","zoom-in":"@keyframes reveal-zoom-in { from { opacity: 0; transform: scale(0.8); } to { opacity: 1; transform: scale(1); } }","zoom-out":"@keyframes reveal-zoom-out { from { opacity: 0; transform: scale(1.2); } to { opacity: 1; transform: scale(1); } }","rotate-in":"@keyframes reveal-rotate-in { from { opacity: 0; transform: rotate(-180deg) scale(0.5); } to { opacity: 1; transform: rotate(0deg) scale(1); } }","flip-x":"@keyframes reveal-flip-x { from { opacity: 0; transform: perspective(400px) rotateX(-90deg); } to { opacity: 1; transform: perspective(400px) rotateX(0deg); } }","flip-y":"@keyframes reveal-flip-y { from { opacity: 0; transform: perspective(400px) rotateY(-90deg); } to { opacity: 1; transform: perspective(400px) rotateY(0deg); } }","slide-up":"@keyframes reveal-slide-up { from { transform: translateY(100%); } to { transform: translateY(0); } }","slide-down":"@keyframes reveal-slide-down { from { transform: translateY(-100%); } to { transform: translateY(0); } }","slide-left":"@keyframes reveal-slide-left { from { transform: translateX(100%); } to { transform: translateX(0); } }","slide-right":"@keyframes reveal-slide-right { from { transform: translateX(-100%); } to { transform: translateX(0); } }",bounce:"@keyframes reveal-bounce { from { opacity: 0; transform: scale(0.3) translateY(-50px); } 50% { opacity: 1; transform: scale(1.05) translateY(0); } 70% { transform: scale(0.95); } to { opacity: 1; transform: scale(1); } }",elastic:"@keyframes reveal-elastic { from { opacity: 0; transform: scale(0); } 50% { opacity: 1; transform: scale(1.2); } 75% { transform: scale(0.9); } 90% { transform: scale(1.05); } to { opacity: 1; transform: scale(1); } }"};function Bc(e,t){if(typeof document>"u"||document.getElementById(e))return;const n=document.createElement("style");n.id=e,n.textContent=t,document.head.appendChild(n)}function M8(e={}){const{animation:t="fade-up",duration:n=600,delay:o=0,easing:r="ease-out",customAnimation:s,customKeyframes:i,fillMode:a="both",disabled:l=!1}=e;return t!=="custom"?Bc(`reveal-animation-${t}`,D8[t]??""):i&&s&&Bc(`reveal-animation-custom-${s}`,i),{name:"reveal-animation",version:"1.0.0",config:e,hooks:{onLoadSuccess:c=>{var p;if(l)return;const u=(p=c.imageRef)==null?void 0:p.current;if(!u)return;const d=t==="custom"?s||"none":`reveal-${t}`;if(u.style.animation=`${d} ${n}ms ${r} ${o}ms ${a}`,a==="none"||a==="backwards"){const g=()=>{u.style.animation="",u.removeEventListener("animationend",g)};u.addEventListener("animationend",g)}}}}}const j8="RevealAnimationPlugin",T8="图片揭示动画：为图片加载添加各种进场动画（淡入/缩放/旋转/翻转/弹跳/弹性等 16 种预设 + 自定义），纯 CSS 无依赖。",N8="2.0.0",A8=["interaction","视觉效果与交互","visual"],B8=[{name:"onLoadSuccess",when:"图片成功解码可显示时",description:"拿到最终 displaySrc 做后续动作（上报、预取下张、淡入）"}],U8=[],F8="只读取 context 字段（props / state / data），不调用上下文方法",V8=[{name:"animation",type:'"fade" | "fade-up" | "fade-down" | "fade-left" | "fade-right" | "zoom-in" | "zoom-out" | "rotate-in" | "flip-x" | "flip-y" | "slide-up" | "slide-down" | "slide-left" | "slide-right" | "bounce" | "elastic" | "custom"',default:'"fade-up"',description:"动画类型"},{name:"duration",type:"number",default:"600",description:"持续时间（毫秒）"},{name:"delay",type:"number",default:"0",description:"延迟（毫秒）"},{name:"easing",type:"string",default:'"ease-out"',description:"缓动函数"},{name:"customAnimation",type:"string",default:'""',description:"自定义动画名（animation 为 custom 时生效）"},{name:"customKeyframes",type:"string",default:'""',description:"自定义 keyframes 文本"},{name:"fillMode",type:'"none" | "forwards" | "backwards" | "both"',default:'"both"',description:"动画填充模式"},{name:"disabled",type:"boolean",default:"false",description:"是否禁用"}],W8=`// 1. 组装带揭示动画的懒加载图片
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
});`,H8=[{name:"淡入上浮（默认）",description:"fade-up：图片加载完成后从下方淡入上浮，最通用的进场效果。",src:"https://picsum.photos/id/1018/400/300",config:{animation:"fade-up",duration:700,easing:"ease-out"}},{name:"缩放进入 zoom-in",description:"图片由 1.2 倍缩放回落至原尺寸并淡入，适合主视觉。",src:"https://picsum.photos/id/1015/400/300",config:{animation:"zoom-in",duration:800}},{name:"旋转进入 rotate-in",description:"带轻微旋转的进场，动感更强。",src:"https://picsum.photos/id/1024/400/300",config:{animation:"rotate-in",duration:900,delay:100}},{name:"弹跳 bounce",description:"带回弹缓冲的进场，活泼、吸引注意。",src:"https://picsum.photos/id/1039/400/300",config:{animation:"bounce",duration:1e3}},{name:"弹性 elastic + 自定义时长",description:"弹性缓动 + 更长时长，强调“弹出”质感。",src:"https://picsum.photos/id/1043/400/300",config:{animation:"elastic",duration:1200,easing:"cubic-bezier(0.68, -0.55, 0.265, 1.55)"}},{name:"自定义关键帧 custom",description:"通过 customAnimation 指定动画名，并以 customKeyframes 注入关键帧文本，可做任意效果。",src:"https://picsum.photos/id/1050/400/300",config:{animation:"custom",customAnimation:"myReveal",customKeyframes:"@keyframes myReveal { from { opacity: 0; transform: scale(1.2) rotate(8deg); } to { opacity: 1; transform: none; } }"}}],G8=["16 种预设动画（淡入/缩放/旋转/翻转/滑动/弹跳/弹性）","支持自定义动画名 + 关键帧文本","可配置时长、延迟、缓动函数","fill 模式控制动画结束态","可一键禁用（disabled，适配低端设备）","纯 CSS 实现，无运行时依赖"],q8=["图片列表进场","瀑布流懒加载","轮播图切换","首屏内容揭示","卡片/区块入场动画","营销落地页视觉点缀"],Q8=["动画在图片加载完成后触发一次；再次滚动不会重复播放。","低端设备或开启“减少动态效果”偏好时，可设 disabled: true 关闭动画。"],K8={name:j8,description:T8,since:N8,tags:A8,events:B8,methods:U8,methodsNote:F8,config:V8,example:W8,examples:H8,features:G8,useCases:q8,notes:Q8};function Y8(){if(typeof document>"u"||document.getElementById("glitch-effect-styles"))return;const e=document.createElement("style");e.id="glitch-effect-styles",e.textContent=`
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
  `,document.head.appendChild(e)}const X8=({config:e})=>{const{style:t="glitch-mix",continuous:n=!1,duration:o=1e3,intensity:r=.7,triggerOnHover:s=!1,rgbOffset:i=3,scanLineCount:a=30,animateScanLines:l=!0}=e,[c,u]=x.useState(!1),[d,p]=x.useState(!1);x.useEffect(()=>{if(Y8(),!n&&!s){u(!0);const y=setTimeout(()=>u(!1),o);return()=>clearTimeout(y)}},[n,s,o]);const g=n||c||s&&d,v={position:"absolute",inset:0,background:`linear-gradient(90deg, rgba(255,0,0,${r*.15}) 0%, transparent ${i*2}px, transparent calc(100% - ${i*2}px), rgba(0,255,255,${r*.15}) 100%)`,mixBlendMode:"color",animation:g?"glitch-rgb-split 0.5s ease-in-out infinite":"none",pointerEvents:"none"},w=Array.from({length:a},(y,f)=>m.jsx("div",{style:{position:"absolute",left:0,right:0,height:"1px",top:`${f/a*100}%`,background:`rgba(255,255,255,${r*.1})`,animation:l&&g?`scan-line-move ${2+Math.random()*2}s linear infinite`:"none",animationDelay:`${Math.random()*2}s`}},f)),b=y=>{const f=[{main:"rgba(255,0,0,0.15)",secondary:"rgba(0,255,255,0.15)"},{main:"rgba(0,255,0,0.15)",secondary:"rgba(255,0,255,0.15)"},{main:"rgba(0,100,255,0.15)",secondary:"rgba(255,255,0,0.15)"}],h=f[y-1]||f[0];return{position:"absolute",inset:0,background:`linear-gradient(${y*45}deg, ${h.main} 0%, transparent 30%, transparent 70%, ${h.secondary} 100%)`,animation:g?`glitch-anim ${.4+y*.1}s infinite ${y%2===0?"normal":"reverse"}`:"none",animationDelay:`${y*.06}s`,opacity:r*.7,mixBlendMode:"screen",pointerEvents:"none",filter:`blur(${r*.5}px)`}};return m.jsxs("div",{style:{position:"absolute",inset:0,pointerEvents:s?"auto":"none",overflow:"hidden"},onMouseEnter:()=>s&&p(!0),onMouseLeave:()=>s&&p(!1),children:[(t==="rgb-split"||t==="glitch-mix"||t==="intense")&&g&&m.jsx("div",{style:v}),(t==="scan-lines"||t==="glitch-mix")&&g&&w,(t==="digital"||t==="glitch-mix"||t==="intense")&&g&&m.jsxs(m.Fragment,{children:[m.jsx("div",{style:b(1)}),m.jsx("div",{style:b(2)}),t==="intense"&&m.jsx("div",{style:b(3)})]}),t==="intense"&&g&&m.jsx("div",{style:{position:"absolute",inset:0,background:`repeating-linear-gradient(0deg, rgba(0,255,0,${r*.03}) 0px, rgba(0,255,0,0) 2px, rgba(0,255,0,0) 4px, rgba(0,255,0,${r*.03}) 6px)`,animation:"glitch-anim 0.8s ease-in-out infinite",pointerEvents:"none",opacity:.5}})]})};function Z8(e={}){return{name:"glitch-effect",version:"1.0.0",config:e,hooks:{renderOverlay:t=>m.jsx(X8,{config:e,context:t})}}}const J8="GlitchEffectPlugin",eN="故障艺术效果：赛博朋克风格 RGB 分离 / 扫描线 / 数字失真 / 混合 / 强烈五种风格，纯 CSS 无依赖，支持持续、一次性、悬停触发。",tN="2.0.0",nN=["interaction","视觉效果与交互","visual"],oN=[{name:"renderOverlay",when:"每次渲染，覆盖在图片容器之上",description:"骨架屏、错误占位、水印、加载动画"}],rN=[],sN="只读取 context 字段（props / state / data），不调用上下文方法",iN=[{name:"style",type:'"rgb-split" | "scan-lines" | "digital" | "glitch-mix" | "intense"',default:'"glitch-mix"',description:"故障风格"},{name:"continuous",type:"boolean",default:"false",description:"是否持续动画"},{name:"duration",type:"number",default:"1000",description:"一次性触发时长（毫秒）"},{name:"intensity",type:"number",default:"0.7",description:"效果强度 0~1"},{name:"triggerOnHover",type:"boolean",default:"false",description:"是否悬停触发"},{name:"rgbOffset",type:"number",default:"3",description:"RGB 分离距离（px）"},{name:"scanLineCount",type:"number",default:"30",description:"扫描线数量"},{name:"animateScanLines",type:"boolean",default:"true",description:"扫描线是否动画"}],aN=`// 1. 持续 RGB 分离故障特效
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
createGlitchEffectPlugin({ style: "glitch-mix", triggerOnHover: true });`,lN=[{name:"glitch-mix 混合（持续）",description:"混合风格默认效果，持续播放，适合做氛围封面。",src:"https://picsum.photos/id/1043/400/300",config:{style:"glitch-mix",continuous:!0,intensity:.7}},{name:"rgb-split RGB 分离（持续）",description:"红蓝通道错位产生色散，赛博朋克典型观感。",src:"https://picsum.photos/id/1062/400/300",config:{style:"rgb-split",continuous:!0,rgbOffset:5}},{name:"scan-lines 扫描线（悬停触发）",description:"叠加扫描线纹理，悬停时启动，平时保持干净。",src:"https://picsum.photos/id/1074/400/300",config:{style:"scan-lines",triggerOnHover:!0,scanLineCount:40,animateScanLines:!0}},{name:"digital 数字失真（一次性）",description:"加载/进入时触发一次数字故障，随后恢复清晰。",src:"https://picsum.photos/id/1080/400/300",config:{style:"digital",continuous:!1,duration:900}},{name:"intense 高强度",description:"强度拉满的强烈故障，冲击力强，适合标题位。",src:"https://picsum.photos/id/1084/400/300",config:{style:"intense",continuous:!0,intensity:1}}],cN=["5 种故障风格（RGB 分离 / 扫描线 / 数字失真 / 混合 / 强烈）","三种触发模式：持续 / 一次性 / 悬停触发","效果强度 0~1 可调","扫描线数量与是否动画可配","RGB 错位距离可调","纯 CSS 实现，无运行时依赖"],uN=["赛博朋克风格站点","海报 / 专辑封面","活动营销页","游戏官网","暗色主题视觉","品牌焕新 / 限时活动"],dN=["持续动画（continuous: true）会一直占用合成层，建议对大图或大量实例谨慎使用。","阅读型内容可用 triggerOnHover: true，仅在鼠标悬停时播放，避免干扰。"],pN={name:J8,description:eN,since:tN,tags:nN,events:oN,methods:rN,methodsNote:sN,config:iN,example:aN,examples:lN,features:cN,useCases:uN,notes:dN},Uc={"circle-to-square":()=>"@keyframes morph-circle-to-square { from { border-radius: 50%; transform: scale(0.9); } to { border-radius: 0%; transform: scale(1); } }","square-to-circle":()=>"@keyframes morph-square-to-circle { from { border-radius: 0%; transform: scale(1); } to { border-radius: 50%; transform: scale(0.9); } }","rounded-corners":e=>`@keyframes morph-rounded-corners { from { border-radius: ${e.fromBorderRadius??"50%"}; } to { border-radius: ${e.toBorderRadius??"0%"}; } }`,"scale-morph":e=>`@keyframes morph-scale { from { transform: scale(${e.fromScale??1}); } to { transform: scale(${e.toScale??1}); } }`,"rotate-morph":e=>`@keyframes morph-rotate { from { transform: rotate(${e.fromRotate??0}deg); } to { transform: rotate(${e.toRotate??0}deg); } }`,"skew-morph":e=>`@keyframes morph-skew { from { transform: skewX(${e.fromSkew??0}deg) skewY(${e.fromSkew??0}deg); } to { transform: skewX(${e.toSkew??0}deg) skewY(${e.toSkew??0}deg); } }`,elastic:()=>"@keyframes morph-elastic { 0% { transform: scale(0.8); } 30% { transform: scale(1.1); } 50% { transform: scale(0.95); } 70% { transform: scale(1.02); } 100% { transform: scale(1); } }",liquid:()=>"@keyframes morph-liquid { 0% { border-radius: 30% 70% 70% 30% / 30% 30% 70% 70%; transform: rotate(0deg); } 25% { border-radius: 58% 42% 75% 25% / 76% 46% 54% 24%; } 50% { border-radius: 50% 50% 33% 67% / 55% 27% 73% 45%; transform: rotate(180deg); } 75% { border-radius: 33% 67% 58% 42% / 63% 68% 32% 37%; } 100% { border-radius: 30% 70% 70% 30% / 30% 30% 70% 70%; transform: rotate(360deg); } }",custom:e=>e.customTransform?`@keyframes morph-custom { from { ${e.customTransform.from} } to { ${e.customTransform.to} } }`:""},mN={"circle-to-square":"morph-circle-to-square","square-to-circle":"morph-square-to-circle","rounded-corners":"morph-rounded-corners","scale-morph":"morph-scale","rotate-morph":"morph-rotate","skew-morph":"morph-skew",elastic:"morph-elastic",liquid:"morph-liquid",custom:"morph-custom"};function gN(e,t){if(typeof document>"u"||!t||document.getElementById(e))return;const n=document.createElement("style");n.id=e,n.textContent=t,document.head.appendChild(n)}function fN(e={}){const{type:t="elastic",duration:n=800,delay:o=0,easing:r="cubic-bezier(0.68, -0.55, 0.265, 1.55)",triggerOnHover:s=!1,continuous:i=!1}=e,a=(Uc[t]??Uc.elastic)(e);gN(`morph-plugin-${t}`,a);const l=mN[t]??"morph-elastic";return{name:"morph",version:"1.0.0",config:e,hooks:{onLoadSuccess:c=>{var d;const u=(d=c.imageRef)==null?void 0:d.current;if(u){if(i){u.style.animation=`${l} ${n}ms ${r} ${o}ms infinite alternate`;return}if(s){const p=()=>{u.style.animation=`${l} ${n}ms ${r} ${o}ms both`},g=()=>{u.style.animation=""};u.addEventListener("mouseenter",p),u.addEventListener("mouseleave",g);return}u.style.animation=`${l} ${n}ms ${r} ${o}ms both`}}}}}const hN="MorphPlugin",yN="形变过渡效果：圆角/缩放/旋转/倾斜/弹性/液态等多种形变动画，纯 CSS transforms，支持加载触发、悬停触发与持续动画。",vN="2.0.0",wN=["interaction","视觉效果与交互","visual"],xN=[{name:"onLoadSuccess",when:"图片成功解码可显示时",description:"拿到最终 displaySrc 做后续动作（上报、预取下张、淡入）"}],bN=[],PN="只读取 context 字段（props / state / data），不调用上下文方法",$N=[{name:"type",type:'"circle-to-square" | "square-to-circle" | "rounded-corners" | "scale-morph" | "rotate-morph" | "skew-morph" | "elastic" | "liquid" | "custom"',default:'"elastic"',description:"形变类型"},{name:"duration",type:"number",default:"800",description:"持续时间（毫秒）"},{name:"delay",type:"number",default:"0",description:"延迟（毫秒）"},{name:"easing",type:"string",default:'"cubic-bezier(0.68, -0.55, 0.265, 1.55)"',description:"缓动函数"},{name:"triggerOnHover",type:"boolean",default:"false",description:"是否悬停触发"},{name:"continuous",type:"boolean",default:"false",description:"是否持续动画"},{name:"fromBorderRadius",type:"string",default:'"50%"',description:"rounded-corners 起始圆角"},{name:"toBorderRadius",type:"string",default:'"0%"',description:"rounded-corners 结束圆角"},{name:"fromScale",type:"number",default:"1",description:"scale-morph 起始缩放"},{name:"toScale",type:"number",default:"1",description:"scale-morph 结束缩放"},{name:"fromRotate",type:"number",default:"0",description:"rotate-morph 起始角度"},{name:"toRotate",type:"number",default:"0",description:"rotate-morph 结束角度"},{name:"fromSkew",type:"number",default:"0",description:"skew-morph 起始倾斜"},{name:"toSkew",type:"number",default:"0",description:"skew-morph 结束倾斜"}],SN=`// 1. 弹性形变
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
});`,CN=[{name:"elastic 弹性形变",description:"加载完成后以弹性缓动“弹”入，适合头像与卡片。",src:"https://picsum.photos/id/1080/400/300",config:{type:"elastic",duration:1e3,easing:"cubic-bezier(0.68, -0.55, 0.265, 1.55)"}},{name:"rounded-corners 圆角过渡",description:"从圆形过渡为圆角矩形，强调形态变化。",src:"https://picsum.photos/id/1084/400/300",config:{type:"rounded-corners",fromBorderRadius:"50%",toBorderRadius:"12%",duration:900}},{name:"scale-morph 缩放形变",description:"从 0.85 倍放大到原尺寸，配合淡入更自然。",src:"https://picsum.photos/id/110/400/300",config:{type:"scale-morph",fromScale:.85,toScale:1,duration:800}},{name:"rotate-morph 旋转形变",description:"带角度旋转的进入，动感十足。",src:"https://picsum.photos/id/111/400/300",config:{type:"rotate-morph",fromRotate:-12,toRotate:0,duration:900}},{name:"liquid 液态（持续）",description:"持续液态流动效果，适合做背景或装饰图。",src:"https://picsum.photos/id/119/400/300",config:{type:"liquid",continuous:!0,duration:2e3}}],LN=["9 种形变类型（圆角 / 缩放 / 旋转 / 倾斜 / 弹性 / 液态等）","三种触发：加载触发 / 悬停触发 / 持续动画","圆角、缩放、旋转、倾斜均参数化起止值","弹性缓动可定制","纯 CSS transforms，性能好","无运行时依赖"],IN=["头像形变入场","按钮 / 卡片交互反馈","Logo 动画","加载态过渡","图片墙动态呈现","装饰性背景图"],kN=["continuous: true 会持续播放；配合 triggerOnHover: true 可在鼠标悬停时播放单次，更省资源。","悬停触发的场景需在图片上移动 / 悬停鼠标才能看到形变，静态截图仅展示初始态。"],_N={name:hN,description:yN,since:vN,tags:wN,events:xN,methods:bN,methodsNote:PN,config:$N,example:SN,examples:CN,features:LN,useCases:IN,notes:kN},EN=({config:e})=>{const{style:t="zoom-in",enableFollower:n=!0,followerColor:o="rgba(59, 130, 246, 0.5)",followerSize:r=40,followerDelay:s=.1,scaleOnHover:i=!0,hoverScale:a=1.5,customIcon:l,cursorText:c,showRipple:u=!1}=e,[d,p]=x.useState(!1),[g,v]=x.useState({x:0,y:0}),[w,b]=x.useState({x:0,y:0}),[y,f]=x.useState([]),h=x.useRef(null),P=x.useRef(void 0),$=l?`url(${l}), auto`:{"zoom-in":"zoom-in","zoom-out":"zoom-out",pointer:"pointer",crosshair:"crosshair",move:"move",grab:"grab","custom-dot":"none","custom-ring":"none","custom-plus":"none",none:"none"}[t]??"auto";x.useEffect(()=>{if(!n)return;const O=()=>{b(U=>({x:U.x+(g.x-U.x)*(1-s),y:U.y+(g.y-U.y)*(1-s)})),P.current=requestAnimationFrame(O)};return P.current=requestAnimationFrame(O),()=>{P.current&&cancelAnimationFrame(P.current)}},[g,n,s]);const I=O=>{if(!h.current)return;const U=h.current.getBoundingClientRect();v({x:O.clientX-U.left,y:O.clientY-U.top})},k=O=>{if(!u||!h.current)return;const U=h.current.getBoundingClientRect(),re=Date.now();f(K=>[...K,{id:re,x:O.clientX-U.left,y:O.clientY-U.top}]),setTimeout(()=>f(K=>K.filter(R=>R.id!==re)),1e3)},_=d&&i?a:1,S={position:"absolute",inset:0,cursor:$,overflow:"hidden",zIndex:5},L={position:"absolute",left:w.x,top:w.y,width:r,height:r,transform:`translate(-50%, -50%) scale(${_})`,backgroundColor:o,borderRadius:"50%",pointerEvents:"none",transition:"transform 0.3s ease",zIndex:10},j={position:"absolute",left:w.x,top:w.y,width:r,height:r,border:"2px solid #3b82f6",borderRadius:"50%",transform:`translate(-50%, -50%) scale(${_})`,pointerEvents:"none",transition:"transform 0.2s ease",zIndex:11},N={position:"absolute",left:w.x,top:w.y,width:20,height:20,transform:"translate(-50%, -50%)",pointerEvents:"none",zIndex:11},z={position:"absolute",left:g.x+15,top:g.y-10,padding:"4px 8px",fontSize:12,color:"#fff",backgroundColor:"rgba(0,0,0,0.8)",borderRadius:4,pointerEvents:"none",whiteSpace:"nowrap",zIndex:12};return m.jsxs("div",{ref:h,style:S,onMouseMove:I,onMouseEnter:()=>p(!0),onMouseLeave:()=>p(!1),onClick:k,children:[n&&m.jsx("div",{style:L}),t==="custom-dot"&&m.jsx("div",{style:L}),t==="custom-ring"&&m.jsx("div",{style:j}),t==="custom-plus"&&m.jsx("div",{style:N,children:m.jsxs("svg",{width:"20",height:"20",viewBox:"0 0 20 20",fill:"none",children:[m.jsx("line",{x1:"10",y1:"0",x2:"10",y2:"20",stroke:"#3b82f6",strokeWidth:"2"}),m.jsx("line",{x1:"0",y1:"10",x2:"20",y2:"10",stroke:"#3b82f6",strokeWidth:"2"})]})}),c&&d&&m.jsx("div",{style:z,children:c}),y.map(O=>m.jsx("div",{style:{position:"absolute",left:O.x,top:O.y,width:0,height:0,border:"2px solid rgba(59, 130, 246, 0.8)",borderRadius:"50%",transform:"translate(-50%, -50%)",animation:"ripple-expand 1s ease-out forwards",pointerEvents:"none"}},O.id)),u&&m.jsx("style",{children:"@keyframes ripple-expand { from { width: 0; height: 0; opacity: 1; } to { width: 80px; height: 80px; opacity: 0; } }"})]})};function RN(e={}){return{name:"animated-cursor",version:"1.0.0",config:e,hooks:{renderOverlay:t=>m.jsx(EN,{config:e,context:t})}}}const zN="AnimatedCursorPlugin",ON="自定义光标动画：为图片叠加系统光标（放大镜/十字/抓手等）或自定义光标（圆点/圆环/加号）+ 跟随动画 + 点击涟漪 + 文字提示，纯 CSS+JS 无依赖。",DN="2.0.0",MN=["interaction","视觉效果与交互","visual"],jN=[{name:"renderOverlay",when:"每次渲染，覆盖在图片容器之上",description:"骨架屏、错误占位、水印、加载动画"}],TN=[],NN="只读取 context 字段（props / state / data），不调用上下文方法",AN=[{name:"style",type:'"zoom-in" | "zoom-out" | "pointer" | "crosshair" | "move" | "grab" | "custom-dot" | "custom-ring" | "custom-plus" | "none"',default:'"zoom-in"',description:"光标样式"},{name:"enableFollower",type:"boolean",default:"true",description:"是否启用跟随光标"},{name:"followerColor",type:"string",default:'"rgba(59, 130, 246, 0.5)"',description:"跟随光标颜色"},{name:"followerSize",type:"number",default:"40",description:"跟随光标大小（px）"},{name:"followerDelay",type:"number",default:"0.1",description:"跟随延迟系数（越大越跟手）"},{name:"scaleOnHover",type:"boolean",default:"true",description:"悬停时跟随光标缩放"},{name:"hoverScale",type:"number",default:"1.5",description:"悬停缩放比例"},{name:"customIcon",type:"string",default:'""',description:"自定义光标图标 URL"},{name:"cursorText",type:"string",default:'""',description:"光标附带文字"},{name:"showRipple",type:"boolean",default:"false",description:"点击时产生涟漪"}],BN=`// 1. 放大镜光标 + 蓝色跟随圆点
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
});`,UN=[{name:"zoom-in 放大镜 + 跟随圆点",description:"系统放大镜光标，叠加半透明蓝色跟随圆点，暗示可放大查看。",src:"https://picsum.photos/id/110/400/300",config:{style:"zoom-in",enableFollower:!0,followerColor:"rgba(59,130,246,0.5)",followerSize:40}},{name:"custom-dot 自定义圆点 + 点击涟漪",description:"自定义圆点跟随光标，点击产生涟漪动画，互动感强。",src:"https://picsum.photos/id/119/400/300",config:{style:"custom-dot",showRipple:!0,followerSize:44,followerColor:"rgba(255,99,132,0.5)"}},{name:"custom-ring 圆环 + 文字提示",description:"圆环跟随光标并附带文字提示，适合“查看大图”引导。",src:"https://picsum.photos/id/122/400/300",config:{style:"custom-ring",cursorText:"查看大图",followerSize:56,followerColor:"rgba(16,185,129,0.6)"}},{name:"crosshair 十字光标",description:"十字准星光标，适合素材 / 设计类站点定位。",src:"https://picsum.photos/id/129/400/300",config:{style:"crosshair",enableFollower:!0,followerSize:36}},{name:"custom-plus 加号光标",description:"加号光标，强调“可添加 / 收藏”等操作。",src:"https://picsum.photos/id/133/400/300",config:{style:"custom-plus",enableFollower:!0,followerSize:40,scaleOnHover:!0}}],FN=["10 种光标样式（系统光标 + 自定义圆点 / 圆环 / 加号）","跟随光标：颜色、大小、延迟系数可调","悬停时跟随光标缩放","点击涟漪动画","可附带文字提示","支持自定义图标 URL","纯 CSS + 轻量 JS，无依赖"],VN=["商品详情放大预览","画廊 / 素材站点","设计工具类页面","交互演示与引导","收藏 / 添加操作的视觉暗示","创意作品集"],WN=["效果需鼠标在图片上移动 / 悬停 / 点击才会体现，静态截图仅展示初始态。","移动端无指针设备，建议配合触摸反馈降级，或仅保留 enableFollower 等轻效果。"],HN={name:zN,description:ON,since:DN,tags:MN,events:jN,methods:TN,methodsNote:NN,config:AN,example:BN,examples:UN,features:FN,useCases:VN,notes:WN},GN=({config:e})=>{const{style:t="tilt",intensity:n=.5,maxTilt:o=20,enablePerspective:r=!0,perspective:s=1e3,enableGlare:i=!0,glareColor:a="rgba(255, 255, 255, 0.3)",glareOpacity:l=.5,enableShadow:c=!0,transitionDuration:u=300,resetOnLeave:d=!0}=e,[p,g]=x.useState({rotateX:0,rotateY:0,translateZ:0,translateY:0}),[v,w]=x.useState({x:50,y:50}),b=A.useRef(null),y=I=>{if(!b.current)return;const k=b.current.getBoundingClientRect(),_=(I.clientX-k.left)/k.width-.5,S=(I.clientY-k.top)/k.height-.5;let L={rotateX:0,rotateY:0,translateZ:0,translateY:0};switch(t){case"tilt":L={rotateX:-S*o*n,rotateY:_*o*n,translateZ:0,translateY:0};break;case"parallax":L={rotateX:-S*o*n*.5,rotateY:_*o*n*.5,translateZ:Math.abs(_+S)*10*n,translateY:0};break;case"float":L={rotateX:0,rotateY:0,translateZ:-S*50*n,translateY:-S*40*n};break;case"rotate-3d":L={rotateX:-S*o*n*1.5,rotateY:_*o*n*1.5,translateZ:15*n,translateY:0};break}g(L),w({x:(I.clientX-k.left)/k.width*100,y:(I.clientY-k.top)/k.height*100})},f=()=>{d&&g({rotateX:0,rotateY:0,translateZ:0,translateY:0}),w({x:50,y:50})},h={position:"absolute",inset:0,transformStyle:"preserve-3d",perspective:r?`${s}px`:void 0,transition:`transform ${u}ms ease-out`,zIndex:1},P={position:"absolute",inset:0,transform:`translateY(${p.translateY}px) rotateX(${p.rotateX}deg) rotateY(${p.rotateY}deg) translateZ(${p.translateZ}px)`,transformStyle:"preserve-3d",transition:d?`transform ${u}ms ease-out`:"none",boxShadow:c?`${p.rotateY*.5}px ${p.rotateX*.5+p.translateY*.3}px ${20+Math.abs(p.translateZ)*.5}px rgba(0,0,0,0.3)`:"none"},$={position:"absolute",inset:0,background:`radial-gradient(circle at ${v.x}% ${v.y}%, ${a} 0%, transparent 50%)`,opacity:l,pointerEvents:"none",mixBlendMode:"overlay",transition:d?`opacity ${u}ms ease-out`:"none"};return m.jsx("div",{ref:b,style:h,onMouseMove:y,onMouseLeave:f,children:m.jsx("div",{style:P,children:i&&m.jsx("div",{style:$})})})};function qN(e={}){return{name:"depth-map",version:"1.0.0",config:e,hooks:{renderOverlay:t=>m.jsx(GN,{config:e,context:t})}}}const QN="DepthMapPlugin",KN="3D 视差深度效果：鼠标跟随的倾斜 / 视差 / 浮动 / 3D 旋转，带光泽与阴影，纯 CSS transforms 无依赖。",YN="2.0.0",XN=["interaction","视觉效果与交互","visual"],ZN=[{name:"renderOverlay",when:"每次渲染，覆盖在图片容器之上",description:"骨架屏、错误占位、水印、加载动画"}],JN=[],eA="只读取 context 字段（props / state / data），不调用上下文方法",tA=[{name:"style",type:'"tilt" | "parallax" | "float" | "rotate-3d"',default:'"tilt"',description:"深度效果样式"},{name:"intensity",type:"number",default:"0.5",description:"效果强度 0~1"},{name:"maxTilt",type:"number",default:"20",description:"最大倾斜角度"},{name:"enablePerspective",type:"boolean",default:"true",description:"启用透视效果"},{name:"perspective",type:"number",default:"1000",description:"透视距离（px）"},{name:"enableGlare",type:"boolean",default:"true",description:"启用光泽效果"},{name:"glareColor",type:"string",default:'"rgba(255, 255, 255, 0.3)"',description:"光泽颜色"},{name:"glareOpacity",type:"number",default:"0.5",description:"光泽不透明度 0~1"},{name:"enableShadow",type:"boolean",default:"true",description:"启用阴影"},{name:"transitionDuration",type:"number",default:"300",description:"过渡时长（毫秒）"},{name:"resetOnLeave",type:"boolean",default:"true",description:"离开时重置"}],nA=`// 1. 鼠标跟随倾斜
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
});`,oA=[{name:"tilt 倾斜（鼠标跟随）",description:"鼠标移动时图片随指针方向倾斜，带光泽高光，质感类似实体卡片。",src:"https://picsum.photos/id/122/400/300",config:{style:"tilt",maxTilt:15,intensity:.5,enableGlare:!0}},{name:"parallax 视差",description:"图片内部图层随鼠标产生位移差，营造纵深感。",src:"https://picsum.photos/id/129/400/300",config:{style:"parallax",intensity:.6,enablePerspective:!0,perspective:1e3}},{name:"rotate-3d 3D 旋转",description:"围绕多轴的 3D 旋转，配合阴影更具立体感。",src:"https://picsum.photos/id/133/400/300",config:{style:"rotate-3d",intensity:.7,enableShadow:!0,resetOnLeave:!0}},{name:"float 浮动",description:"轻微持续上下浮动的呼吸感，适合装饰性产品图。",src:"https://picsum.photos/id/142/400/300",config:{style:"float",intensity:.4,enableGlare:!1}}],rA=["4 种深度样式（倾斜 / 视差 / 浮动 / 3D 旋转）","鼠标跟随实时响应","光泽（glare）与阴影可开关并调参","透视距离可调","离开时一键重置（resetOnLeave）","纯 CSS transforms，无依赖"],sA=["产品 3D 展示","卡片悬浮交互","3D 封面 / 海报","作品集与个人主页","落地页英雄区","会员 / 旗舰商品位"],iA=["效果依赖鼠标移动产生视差，静态截图仅为初始平面态；移动设备体验有限，建议作为渐进增强。","intensity 与 maxTilt 控制幅度，强度过高在低端设备上可能引起卡顿，可按需下调。"],aA={name:QN,description:KN,since:YN,tags:XN,events:ZN,methods:JN,methodsNote:eA,config:tA,example:nA,examples:oA,features:rA,useCases:sA,notes:iA};async function lA(){var e;try{const t=typeof navigator<"u"?navigator:void 0;if(t&&typeof t.getBattery=="function")return((e=await t.getBattery())==null?void 0:e.level)??null}catch{}return null}function cA(e,t){try{const n=new URL(e,window.location.href);return n.searchParams.set("w",String(t)),n.searchParams.set("auto","format"),n.searchParams.set("fit","crop"),n.toString()}catch{return e}}function uA(e){var t;return!!((t=e.networkInfo)!=null&&t.saveData)}function dA(e={}){const{enabled:t=!0,lowBatteryThreshold:n=.2,downgradeWidth:o=640,disablePreconnect:r=!0}=e;return{name:"battery-aware",version:"1.0.0",config:e,hooks:{onLoad:async s=>{if(!t)return;const i=await lA(),a=i!==null?i<=n:!1,l=uA(s);if(a||l)return cA(s.src,o)},transformProps:s=>{if(!t)return s;const i={...s};return i.loading="lazy",r&&(i["data-disable-preconnect"]="true"),i}}}}const pA="BatteryAwarePlugin",mA="电量感知：当设备电量低于阈值或开启省流模式时，自动将图片请求宽度降级并禁用预连接，兼顾体验与续航/流量。",gA="2.0.0",fA=["other","加载策略","性能","省流量"],hA=[{name:"onLoad",when:"加载流程开始、需要确定最终图片地址时",description:"自定义加载逻辑，返回最终图片 URL（objectURL / dataURL / 原地址）"},{name:"transformProps",when:"渲染前链式改写图片 props",description:"补 sizes / 占位色 / 解码策略等"}],yA=[],vA="只读取 context 字段（props / state / data），不调用上下文方法",wA=[{name:"enabled",type:"boolean",default:"true",description:"是否启用"},{name:"lowBatteryThreshold",type:"number",default:"0.2",description:"低电量阈值(0~1)"},{name:"downgradeWidth",type:"number",default:"640",description:"降级时的请求宽度(px)"},{name:"disablePreconnect",type:"boolean",default:"true",description:"低电量时是否禁用预连接"}],xA=`const BatteryImage = withPlugins(LazyLoadImageCore, [
  createBatteryAwarePlugin({ lowBatteryThreshold: 0.3, downgradeWidth: 480 }),
]);

<BatteryImage src="https://picsum.photos/id/1015/500/300" alt="电量感知示例" />;`,bA=[{name:"默认降级",description:"电量<20% 或省流时降宽至 640 并禁用预连接。",src:"https://picsum.photos/id/1015/500/300",config:{enabled:!0}},{name:"放宽阈值",description:"电量<30% 才降级，更保守。",src:"https://picsum.photos/id/1021/500/300",config:{lowBatteryThreshold:.3}},{name:"保留预连接",description:"disablePreconnect=false，降级时仍允许预连接。",src:"https://picsum.photos/id/1026/500/300",config:{disablePreconnect:!1}}],PA=["低电量自动降宽","省流模式联动","可禁用预连接","可关闭"],$A=["移动端续航优化","流量节省","弱网/低电场景","全球低端设备"],SA=["依赖 navigator.getBattery() 与网络 saveData；不支持的环境（如桌面/无该 API）不降级，不影响加载。"],CA={name:pA,description:mA,since:gA,tags:fA,events:hA,methods:yA,methodsNote:vA,config:wA,example:xA,examples:bA,features:PA,useCases:$A,notes:SA};function LA(e={}){const{enabled:t=!0}=e;return{name:"exif-orientation",version:"1.0.0",config:e,hooks:{transformProps:n=>{if(!t)return n;const o={...n.imageStyle||{},imageOrientation:"from-image"};return{...n,imageStyle:o}}}}}const IA="ExifOrientationPlugin",kA="EXIF 方向：根据图片自带的方向信息（EXIF Orientation）自动校正显示，避免手机竖拍照片横显。",_A="2.0.0",EA=["a11y","可访问性","加载策略"],RA=[{name:"transformProps",when:"渲染前链式改写图片 props",description:"补 sizes / 占位色 / 解码策略等"}],zA=[],OA="只读取 context 字段（props / state / data），不调用上下文方法",DA=[{name:"enabled",type:"boolean",default:"true",description:"是否启用方向校正"}],MA=`const OrientImage = withPlugins(LazyLoadImageCore, [
  createExifOrientationPlugin({ enabled: true }),
]);

<OrientImage src="https://picsum.photos/id/1015/500/300" alt="方向校正示例" />;`,jA=[{name:"启用方向校正（默认）",description:"imageOrientation: from-image，跟随 EXIF 方向。",src:"https://picsum.photos/id/1015/500/300",config:{enabled:!0}},{name:"关闭校正",description:"enabled=false 时不注入方向样式。",src:"https://picsum.photos/id/1021/500/300",config:{enabled:!1}}],TA=["按 EXIF Orientation 自动校正","imageOrientation: from-image","无需手动旋转","可关闭"],NA=["手机/相机照片","用户上传图","竖拍横显修复"],AA=["依赖浏览器对 image-orientation: from-image 的支持，现代浏览器均已支持。"],BA={name:IA,description:kA,since:_A,tags:EA,events:RA,methods:zA,methodsNote:OA,config:DA,example:MA,examples:jA,features:TA,useCases:NA,notes:AA};function Xp(e,t){return()=>{const[n,o]=A.useState(0);return A.useEffect(()=>{const r=()=>{try{const i=document.querySelectorAll(`link[id^="${e}"]`).length;o(i)}catch{}};r();const s=setInterval(r,400);return()=>clearInterval(s)},[]),m.jsxs("div",{style:{position:"absolute",top:8,left:8,background:"#1565c0",color:"#fff",fontSize:12,padding:"4px 8px",borderRadius:6,zIndex:6,pointerEvents:"none"},children:[t,"：",n]})}}function UA(e,t="image",n="anonymous"){const o=`lli-hoverprefetch-${t}-${e}`;try{if(typeof document>"u"||document.getElementById(o))return null;const r=document.createElement("link");return r.id=o,r.setAttribute("rel","preload"),r.setAttribute("as",t||"image"),r.setAttribute("href",e),n&&r.setAttribute("crossorigin",n),document.head.appendChild(r),o}catch{return null}}function FA(e){var t;try{if(typeof document>"u")return;(t=document.getElementById(e))==null||t.remove()}catch{}}function VA(e){const t=e.match(/(\d+)(?=[^\d]*$)/);if(!t)return;const n=t[0],o=parseInt(n,10);if(Number.isNaN(o))return;const r=e.replace(n,String(o+1));return r!==e?r:void 0}const WA=Xp("lli-hoverprefetch-","已预取");function HA(e={}){const{getNextSrc:t,target:n="container",trigger:o="mouseenter",as:r="image",max:s=2,dedupe:i=!0,crossOrigin:a="anonymous",showBadge:l=!1,debug:c=!1}=e,u=new Set,d=new Set,p=30,g=100;async function v(w){try{let b=t?await Promise.resolve(t(w)):void 0;if(b||(b=VA(w.src)),!b)return;(Array.isArray(b)?b:[b]).slice(0,Math.max(1,s)).forEach(y=>{if(i&&d.has(y))return;const f=UA(y,r,a);if(f&&u.add(f),d.add(y),c)try{console.debug("[HoverPrefetch] preload",{href:y,as:r})}catch{}})}catch(b){if(c)try{console.debug("[HoverPrefetch] error",b)}catch{}}}return{name:"hover-prefetch",version:"2.1.0",description:"悬停预取下一张图片；image 目标延迟绑定，preload link 在卸载时移除（P2-3）",config:e,hooks:{onMount:w=>{var I;const b=()=>v(w);let y=null,f=null,h=0;const P=()=>{var L,j;const k=(L=w.containerRef)==null?void 0:L.current,_=(j=w.imageRef)==null?void 0:j.current,S=n==="container"?k:_;return S?(S.addEventListener(o,b,{passive:!0}),y=()=>{try{S.removeEventListener(o,b)}catch{}},!0):!1},$=()=>{P()||n==="image"&&h<p&&(h+=1,f=setTimeout($,g))};$(),(I=w.sharedData)==null||I.set("hover-prefetch:cleanup",()=>{f&&clearTimeout(f),y&&y()})},onUnmount:w=>{var y,f;const b=(y=w.sharedData)==null?void 0:y.get("hover-prefetch:cleanup");if(typeof b=="function")try{b()}catch{}(f=w.sharedData)==null||f.delete("hover-prefetch:cleanup"),u.forEach(h=>FA(h)),u.clear(),d.clear()},renderOverlay:()=>l?A.createElement(WA):null}}}const GA="HoverPrefetchPlugin",qA="悬停预取：当用户将鼠标悬停（或触摸）在图片上时，提前向浏览器插入 preload 链接拉取下一张资源，实现零延迟切换。",QA="2.0.0",KA=["viewport","视口与交互","预取","性能"],YA=[{name:"onMount",when:"组件挂载完成、插件注册后执行一次（返回的清理函数在 manager.clear 时逆序执行）",description:"初始化副作用：注册监听、起定时器、建观察器；必须返回清理函数或配合 onUnmount 收尾"},{name:"onUnmount",when:"组件卸载前执行一次",description:"释放监听、定时器与观察器；与 onMount 成对出现，避免泄漏"},{name:"renderOverlay",when:"每次渲染，覆盖在图片容器之上",description:"骨架屏、错误占位、水印、加载动画"}],XA=[],ZA="只读取 context 字段（props / state / data），不调用上下文方法",JA=[{name:"getNextSrc",type:"(context) => string | string[] | Promise<...>",default:"undefined",description:"计算需要预取的下一张图片（函数型，参见用法示例）"},{name:"target",type:'"container" | "image"',default:'"container"',description:"绑定事件的目标（容器或图片元素）"},{name:"trigger",type:'"mouseenter" | "touchstart"',default:'"mouseenter"',description:"触发事件类型"},{name:"as",type:'"image" | "fetch"',default:'"image"',description:"预取资源类型"},{name:"max",type:"number",default:"2",description:"预取的最大数量"},{name:"dedupe",type:"boolean",default:"true",description:"去重，避免重复插入相同的预取链接"},{name:"crossOrigin",type:'"anonymous" | "use-credentials" | null',default:'"anonymous"',description:"跨域策略"},{name:"showBadge",type:"boolean",default:"false",description:"是否在卡片上显示「已预取 N」徽标（便于观察注入效果）"},{name:"debug",type:"boolean",default:"false",description:"是否输出调试日志"}],eB=`const PrefetchImage = withPlugins(LazyLoadImageCore, [
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
<PrefetchImage src="https://picsum.photos/id/1015/500/300" alt="悬停预取示例" />;`,tB=[{name:"容器悬停预取（默认）",description:"鼠标进入容器即插入 preload，预取下一张图片（默认按 URL 末尾数字派生），卡片左上角显示「已预取 N」。",src:"https://picsum.photos/id/1015/500/300",config:{target:"container",trigger:"mouseenter",max:2,as:"image",showBadge:!0}},{name:"图片悬停预取",description:"事件直接绑定在图片元素上。",src:"https://picsum.photos/id/1021/500/300",config:{target:"image",trigger:"mouseenter",max:1}},{name:"触摸预取",description:"移动端用 touchstart 触发预取。",src:"https://picsum.photos/id/1026/500/300",config:{target:"container",trigger:"touchstart",max:1}}],nB=["悬停 / 触摸即预取","容器或图片元素两种绑定目标","mouseenter / touchstart 两种触发","预取数量上限与去重","自定义跨域策略","调试日志输出"],oB=["商品画廊下一张预览","图片轮播预加载","列表项快速切换","移动端触摸预载"],rB=["必须提供 `getNextSrc` 才会真正预取；不传时只绑定事件、不产生请求。","`showBadge: true` 会在卡片上显示「已预取 N」，是验收该插件最直接的方式。"],sB={name:GA,description:qA,since:QA,tags:KA,events:YA,methods:XA,methodsNote:ZA,config:JA,example:eB,examples:tB,features:nB,useCases:oB,notes:rB};function iB(e,t){try{const n=new URL(e,window.location.href),o=n.host,r=n.searchParams;return/images\.unsplash\.com$/i.test(o)||/img\d+\.360buyimg\.com$/i.test(o)?(r.set("w",String(t)),r.set("auto","format"),r.set("fit","crop"),n.search=r.toString(),n.toString()):((!n.search||n.search==="")&&(n.search=`?w=${t}&auto=format&fit=crop`),n.toString())}catch{return e}}function aB(e={}){const{enabled:t=!0,deviceMemoryThreshold:n=4,preferOnMobile:o=!0,lowWidth:r=640,abortOnLeave:s=!0}=e,i=a=>{var d,p,g;const l=Number(((d=typeof navigator<"u"?navigator:void 0)==null?void 0:d.deviceMemory)||8),c=((p=a.deviceInfo)==null?void 0:p.type)==="mobile",u=!!((g=a.networkInfo)!=null&&g.saveData);return l&&l<=n||o&&c||u};return{name:"memory-pressure-abort",version:"2.0.0",config:e,hooks:{onLoad:a=>{if(t&&i(a))return iB(a.src,r)},onLeaveViewport:a=>{var c;if(!t||!s)return;const l=a.imageState;if(l&&l.isLoading)try{(c=a.reset)==null||c.call(a)}catch{}}}}}const lB="MemoryPressureAbortPlugin",cB="内存压力降级 + 离开中止（v2 真实实现）：低内存 / 移动端 / 省流时把图片重写为低清版本；离开视口且仍在加载时，调用 context.reset() 真正取消在途元素加载，回收内存。",uB="2.0.0",dB=["loading","加载策略","降质","中止","低端设备"],pB=[{name:"onLoad",when:"加载流程开始、需要确定最终图片地址时",description:"自定义加载逻辑，返回最终图片 URL（objectURL / dataURL / 原地址）"},{name:"onLeaveViewport",when:"元素离开视口",description:"暂停 / 中止在途请求、回收资源"}],mB=[{name:"reset",signature:"ctx.reset(): void",description:"重置到初始状态（清空错误与进度，不主动重新发起加载）"}],gB=[{name:"enabled",type:"boolean",default:"true",description:"是否启用"},{name:"deviceMemoryThreshold",type:"number",default:"4",description:"设备内存 ≤ 该阈值(GB)时启用降质"},{name:"preferOnMobile",type:"boolean",default:"true",description:"移动端或省流模式时强制启用降质"},{name:"lowWidth",type:"number",default:"640",description:"重写到的低清晰度宽度参数"},{name:"abortOnLeave",type:"boolean",default:"true",description:"离开视口且仍在加载时，是否中止在途加载（context.reset）"}],fB=`import { LazyLoadImageCore, createMemoryPressureAbortPlugin, withPlugins } from "vane-lazy-image";

const LazyImage = withPlugins(LazyLoadImageCore, [
  // 命中压力条件时降质；用户滑走仍在加载的图会被中止
  createMemoryPressureAbortPlugin({ lowWidth: 480 }),
]);

<LazyImage src="https://picsum.photos/seed/mem/1200/800" alt="内存压力降级示例" />`,hB=[{name:"默认降级 + 离开中止",description:"低内存/移动端/省流命中即低清；离开视口且在加载中的图会被 context.reset 取消。",src:"https://picsum.photos/seed/mem/1200/800",config:{}},{name:"激进降质",description:"更低宽度 + 移动端强制降质。",src:"https://picsum.photos/seed/mem-aggressive/1200/800",config:{lowWidth:320,deviceMemoryThreshold:8,preferOnMobile:!0}},{name:"仅降质不中止",description:"abortOnLeave=false，只做低清重写，不在离开时取消加载。",src:"https://picsum.photos/seed/mem-noabort/1200/800",config:{abortOnLeave:!1}}],yB=["三条件任一即触发低清重写（onLoad 返回改写 URL）","unsplash / 360buy 优化 w 参数；通用源附加 ?w&auto=format&fit=crop","离开视口且在加载 → context.reset() 真正取消元素在途加载","abortOnLeave 可开关"],vB=["低端设备防 OOM（降质）","快速滑动列表回收在途请求（中止）","弱网 / 省流节省流量"],wB=["中止通过 context.reset() 移除 <img> 元素来取消其下载，是图片元素层面的真实中止；若使用 FetchLoaderPlugin，可在 fetch 层进一步中断。","降质判定依赖 navigator.deviceMemory 与 deviceInfo.type。"],xB={name:lB,description:cB,since:uB,tags:dB,events:pB,methods:mB,config:gB,example:fB,examples:hB,features:yB,useCases:vB,notes:wB};function bB(e,t,n="anonymous"){if(!(typeof document>"u"))try{const o=`lli-preload-${t}-${e}`;if(document.getElementById(o))return;const r=document.createElement("link");r.id=o,r.rel="preload",r.setAttribute("as",t),r.href=e,n&&r.setAttribute("crossorigin",n),document.head.appendChild(r)}catch{}}function PB(e,t,n){const o=[],r=e.match(/(\d+)(?=[^\d]*$)/)||e.match(/(\d+)(?=[^\d]*[)\s]?$)/);if(!r)return o;const s=r[0];let i=parseInt(s,10);if(Number.isNaN(i))return o;const a=s.length;for(let l=1;l<=n&&(i=t==="increment"?i+l:i-l,!(i<0));l++){const c=e.replace(s,String(i).padStart(a,"0"));c!==e&&o.push(c)}return o}function $B(e={}){const{strategy:t="increment",predict:n,maxPreload:o=3,as:r="image",crossOrigin:s="anonymous"}=e;return{name:"predictive-loading",version:"2.0.0",config:e,hooks:{onMount:i=>{try{(n?Promise.resolve(n(i)):Promise.resolve(PB(i.src,t,o))).then(a=>{(Array.isArray(a)?a.slice(0,o):[]).forEach(l=>bB(l,r,s))}).catch(()=>{})}catch{}}}}}const SB="PredictiveLoadingPlugin",CB='预测性预加载（v2 真实实现）：未提供 predict 时，内置启发式按 URL 末尾数字段递增/递减派生「下一张」并注入 <link rel="preload"> 预取；也可传入 predict 自定义预测目标。',LB="2.0.0",IB=["loading","加载策略","预取"],kB=[{name:"onMount",when:"组件挂载完成、插件注册后执行一次（返回的清理函数在 manager.clear 时逆序执行）",description:"初始化副作用：注册监听、起定时器、建观察器；必须返回清理函数或配合 onUnmount 收尾"}],_B=[],EB="只读取 context 字段（props / state / data），不调用上下文方法",RB=[{name:"model",type:'"heuristic" | "ml"',default:'"heuristic"',description:"预测模型；ml 当前同样走启发式（真正模型由 predict 提供）"},{name:"strategy",type:'"increment" | "decrement"',default:'"increment"',description:"内置启发式：派生方向（递增/递减 URL 末尾数字段）"},{name:"predict",type:"(context) => string[] | Promise<string[]>",default:"未设置（用内置启发式）",description:"自定义预测：返回需要预加载的图片链接列表，优先级高于内置启发式"},{name:"maxPreload",type:"number",default:"3",description:"单次最多预取数量"},{name:"as",type:'"image" | "fetch"',default:'"image"',description:"preload 资源类型"},{name:"crossOrigin",type:'"anonymous" | "use-credentials" | null',default:'"anonymous"',description:"跨域策略"}],zB=`const LazyImage = withPlugins(LazyLoadImageCore, [
  // 无 predict：内置启发式按 URL 末尾数字递增预取下 3 张
  createPredictiveLoadingPlugin({ model: "heuristic", strategy: "increment", maxPreload: 3 }),
]);

// 例：src=.../id/1015/ 会预取 .../id/1016/、1017/、1018/
<LazyImage src="https://picsum.photos/id/1015/500/300" alt="预测预加载示例" />;`,OB=[{name:"内置启发式递增",description:"按 URL 末尾数字递增派生下 3 张并预取（如相册下一页）。",src:"https://picsum.photos/id/1015/500/300",config:{model:"heuristic",strategy:"increment",maxPreload:3}},{name:"内置启发式递减",description:"递减派生上一张方向预取。",src:"https://picsum.photos/id/1020/500/300",config:{strategy:"decrement",maxPreload:3}},{name:"自定义预测",description:"用业务上下文决定预加载目标，限制为 3 张。",src:"https://picsum.photos/id/1018/500/300",config:{maxPreload:3}}],DB=["内置启发式真实派生「下一张」并注入 preload（非空头）","predict 自定义预测优先级更高","strategy 递增/递减可选","maxPreload 限制数量，相同 href 不重复注入"],MB=["相册 / 轮播：预加载下一张，切换无白屏","详情页：预加载相关推荐图"],jB=["仅注入 preload 提示，实际加载仍由浏览器调度；preload 在 Network 面板可见（见 HoverPrefetch 同类展示）。","URL 中无数字段时启发式无候选，可改用 predict 显式给出。"],TB={name:SB,description:CB,since:LB,tags:IB,events:kB,methods:_B,methodsNote:EB,config:RB,example:zB,examples:OB,features:DB,useCases:MB,notes:jB};function NB(e={}){const{priority:t="medium"}=e;return{name:"priority-loading",version:"1.0.0",config:e,hooks:{transformProps:n=>{switch(t){case"high":return{...n,loading:"eager",rootMargin:"0px"};case"low":return{...n,loading:"lazy",rootMargin:n.rootMargin??"400px"};case"medium":default:return{...n,loading:"lazy",rootMargin:n.rootMargin??"200px"}}}}}}const AB="PriorityLoadingPlugin",BB="优先级加载：按 high/medium/low 切换 eager/lazy 与 rootMargin。",UB="2.0.0",FB=["loading","加载策略"],VB=[{name:"transformProps",when:"渲染前链式改写图片 props",description:"补 sizes / 占位色 / 解码策略等"}],WB=[],HB="只读取 context 字段（props / state / data），不调用上下文方法",GB=[{name:"priority",type:'"high" | "medium" | "low"',default:'"medium"',description:"加载优先级：high→loading=eager / low→lazy+大 rootMargin / medium→lazy"}],qB=`// LCP / 首屏主图：立即加载
const HeroImage = withPlugins(LazyLoadImageCore, [
  createPriorityLoadingPlugin({ priority: "high" }),
]);

// 折叠区/长列表底部图：延后加载
const BelowImage = withPlugins(LazyLoadImageCore, [
  createPriorityLoadingPlugin({ priority: "low" }),
]);`,QB=[{name:"首屏 LCP 图（high）",description:"关键图立即 eager 加载，缩短最大内容绘制时间。",config:{priority:"high"}},{name:"折叠区图（low）",description:"非首屏图延后加载，rootMargin 更大，滚动临近才加载。",config:{priority:"low"}}],KB=["high → loading=eager、rootMargin=0，立即加载","low → loading=lazy、rootMargin 更大，更晚加载","medium → 默认 lazy + 适中 rootMargin（约 200px）"],YB=["把 LCP / 首屏主图设为 high","把长列表底部、折叠内容图设为 low，错峰加载"],XB=["仅调整 loading 与 rootMargin，不会阻塞其它插件生效。","与 ScrollIdle、ConcurrencyControl 叠加时可协同控制加载节奏。","rootMargin 会被合并进核心的 IntersectionObserver 参数。"],ZB={name:AB,description:BB,since:UB,tags:FB,events:VB,methods:WB,methodsNote:HB,config:GB,example:qB,examples:QB,features:KB,useCases:YB,notes:XB};function Fc(e,t){try{const n=Math.max(1,Math.min(100,Math.round(t)));e.searchParams.set("q",String(n))}catch{}}function JB(){const e=typeof navigator<"u"?navigator:void 0;return(e==null?void 0:e.connection)||(e==null?void 0:e.mozConnection)||(e==null?void 0:e.webkitConnection)}function Vc(e){const t=ss();if(e.overrideSaveData??(t==null?void 0:t.saveData))return e.saveDataQuality??35;const n=e.overrideEffectiveType??(t==null?void 0:t.effectiveType)??"4g";return n==="slow-2g"||n==="2g"?e.lowQ??40:n==="3g"?e.lowQ??55:e.highQ??80}function eU(e={}){return{name:"adaptive-quality",version:"1.0.0",config:e,hooks:{transformProps:t=>{const n={...t};try{const o=new URL(n.src,typeof window<"u"?window.location.origin:"http://localhost"),r=Vc(e);Fc(o,r),n.src=o.toString()}catch{}return n},onMount:t=>{var s,i,a,l;const{mode:n="once"}=e;if(n!=="realtime")return;const o=JB();if(!o)return;const r=c=>{var u;try{const d=(u=t.imageRef)==null?void 0:u.current,p=(d==null?void 0:d.src)||t.src,g=new URL(p,typeof window<"u"?window.location.origin:"http://localhost"),v=Vc(e);Fc(g,v),d?d.src=g.toString():t.src=g.toString()}catch{}};try{if(typeof o.addEventListener=="function")o.addEventListener("change",r),(s=t.sharedData)==null||s.set("aqp-handler",r),(i=t.sharedData)==null||i.set("aqp-conn",o);else if("onchange"in o){const c=o.onchange;o.onchange=u=>{try{typeof c=="function"&&c.call(o,u)}catch{}r(u)},(a=t.sharedData)==null||a.set("aqp-conn",o),(l=t.sharedData)==null||l.set("aqp-onchange-patched",!0)}}catch{}return()=>{var c,u,d;try{const p=(c=t.sharedData)==null?void 0:c.get("aqp-conn"),g=(u=t.sharedData)==null?void 0:u.get("aqp-handler");if(p&&g&&typeof p.removeEventListener=="function")p.removeEventListener("change",g);else if(p&&((d=t.sharedData)!=null&&d.get("aqp-onchange-patched")))try{p.onchange=null}catch{}}catch{}}}}}}const tU="AdaptiveQualityPlugin",nU="自适应画质：根据网络类型（effectiveType）与省流模式（saveData）动态调整图片质量参数，弱网/省流自动降质，支持 realtime 实时监听。",oU="2.0.0",rU=["other","网络","性能","省流量"],sU=[{name:"onMount",when:"组件挂载完成、插件注册后执行一次（返回的清理函数在 manager.clear 时逆序执行）",description:"初始化副作用：注册监听、起定时器、建观察器；必须返回清理函数或配合 onUnmount 收尾"},{name:"transformProps",when:"渲染前链式改写图片 props",description:"补 sizes / 占位色 / 解码策略等"}],iU=[],aU="只读取 context 字段（props / state / data），不调用上下文方法",lU=[{name:"lowQ",type:"number",default:"40(2g/3g)",description:"低速网络质量值(1~100)"},{name:"highQ",type:"number",default:"80(4g)",description:"高速网络质量值(1~100)"},{name:"saveDataQuality",type:"number",default:"35",description:"省流模式质量值(1~100)"},{name:"overrideEffectiveType",type:'"4g" | "3g" | "2g" | "slow-2g"',default:"undefined",description:"Demo/测试覆盖网络类型"},{name:"overrideSaveData",type:"boolean",default:"undefined",description:"Demo/测试覆盖省流开关"},{name:"mode",type:'"once" | "realtime"',default:'"once"',description:"once 仅初始一次 / realtime 监听变化"}],cU=`const AqImage = withPlugins(LazyLoadImageCore, [
  createAdaptiveQualityPlugin({ lowQ: 45, highQ: 85, mode: "realtime" }),
]);

<AqImage src="https://picsum.photos/id/1015/500/300" alt="自适应画质示例" />;`,uU=[{name:"默认一次性调速",description:"初始按网络设置质量，加载一次。",src:"https://picsum.photos/id/1015/500/300",config:{mode:"once"}},{name:"实时监听网络",description:"mode=realtime，网络变化时自动重新计算质量。",src:"https://picsum.photos/id/1021/500/300",config:{mode:"realtime"}},{name:"模拟弱网降质",description:"overrideEffectiveType=2g，演示低速下自动降质。",src:"https://picsum.photos/id/1026/500/300",config:{overrideEffectiveType:"2g",overrideSaveData:!0}}],dU=["按网络类型调速","省流模式降质","realtime 实时监听","手动覆盖（Demo）","质量参数可配"],pU=["弱网体验优化","流量节省","全球 CDN 适配","移动端画质策略"],mU=["overrideEffectiveType / overrideSaveData 仅用于 Demo 测试覆盖真实网络信息；质量参数通过 URL ?q= 注入，适用于支持该参数的图床。"],gU={name:tU,description:nU,since:oU,tags:rU,events:sU,methods:iU,methodsNote:aU,config:lU,example:cU,examples:uU,features:dU,useCases:pU,notes:mU};function fU(e){try{return new URL(e,typeof window<"u"?window.location.origin:"http://localhost").hostname}catch{return null}}function Wc(e,t,n){try{const o=new URL(e,typeof window<"u"?window.location.origin:"http://localhost");return o.searchParams.set(t,n),o.toString()}catch{const o=e.includes("?")?"&":"?";return`${e}${o}${encodeURIComponent(t)}=${encodeURIComponent(n)}`}}function hU(e={}){const{allowedDomains:t,checkReferer:n=!1,generateToken:o,tokenParam:r="token"}=e;return{name:"anti-hotlink",version:"1.0.0",config:e,hooks:{transformProps:s=>{if(Array.isArray(t)&&t.length>0){const l=fU(s.src);if(!l||!t.includes(l))return s}if(n&&typeof document<"u"&&!document.referrer){const l=Wc(s.src,"ref","direct");return{...s,src:l}}const i=o==null?void 0:o(s.src);if(!i)return s;const a=Wc(s.src,r,i);return{...s,src:a}}}}}const yU="AntiHotlinkPlugin",vU="防盗链：为图片 URL 追加动态签名 token 或 referer 标记，配合域名白名单与 referer 校验，防止资源被第三方直链盗用。",wU="2.0.0",xU=["network","网络","防盗链","签名"],bU=[{name:"transformProps",when:"渲染前链式改写图片 props",description:"补 sizes / 占位色 / 解码策略等"}],PU=[],$U="只读取 context 字段（props / state / data），不调用上下文方法",SU=[{name:"allowedDomains",type:"string[]",description:"域名白名单；仅放行列表内域，其余源原样通过"},{name:"checkReferer",type:"boolean",default:"false",description:"无 referrer 时附加 ref=direct 标记（仅浏览器环境有效）"},{name:"generateToken",type:"(src: string) => string | undefined",description:"为 URL 生成签名 token（函数型，仅顶层示例展示）"},{name:"tokenParam",type:"string",default:'"token"',description:"追加到查询参数的键名"}],CU=`import { LazyLoadImageCore, createAntiHotlinkPlugin, withPlugins } from "vane-lazy-image";

const LazyImage = withPlugins(LazyLoadImageCore, [
  createAntiHotlinkPlugin({
    generateToken: (src) => signSrc(src),
    tokenParam: "sig",
    allowedDomains: ["images.example.com"],
  }),
]);

<LazyImage src="https://images.example.com/photo.jpg" alt="防盗链示例" />`,LU=[{name:"白名单 + referer 校验",description:"仅放行 picsum.photos；无 referer 时附加 ref=direct 标记。",src:"https://picsum.photos/seed/hotlink/800/600",config:{allowedDomains:["picsum.photos"],checkReferer:!0}},{name:"仅域名白名单放行",description:"命中白名单则原样通过，否则不注入任何参数。",src:"https://picsum.photos/seed/hotlink-2/800/600",config:{allowedDomains:["picsum.photos"]}}],IU=["generateToken 为 URL 追加签名参数，防直链盗用","allowedDomains 白名单：仅放行指定域，其余原样通过","checkReferer：无 referrer 时附加 ref=direct 标记","通用参数追加兜底（无 URL 对象时拼接 query）"],kU=["OSS / 云存储等需签名才能访问的图片","限制仅本站 referer 可加载"],_U=["generateToken 为函数型，无法进入静态预览配置，仅顶层示例展示","allowedDomains 为空时对所有源注入 token","checkReferer 仅在浏览器环境有效"],EU={name:yU,description:vU,since:wU,tags:xU,events:bU,methods:PU,methodsNote:$U,config:SU,example:CU,examples:LU,features:IU,useCases:kU,notes:_U};function RU(e,t,n){try{e.searchParams.get(t)||e.searchParams.set(t,n)}catch{}}function zU(e={}){return{name:"auth",version:"1.0.0",config:e,hooks:{transformProps:t=>{const n={...t};try{const o=typeof e.token=="function"?e.token():e.token;if(o){const r=new URL(n.src,typeof window<"u"?window.location.origin:"http://localhost");RU(r,e.tokenParam??"token",o),n.src=r.toString()}e.crossOrigin&&(n.crossOrigin=e.crossOrigin),e.referrerPolicy&&(n.referrerPolicy=e.referrerPolicy)}catch{}return n}}}}const OU="AuthPlugin",DU="鉴权：为私有图片 URL 追加访问凭证 token（查询参数），并可配置 crossOrigin 与 referrerPolicy，满足需登录态才能访问的图片源鉴权需求。",MU="2.0.0",jU=["network","网络","鉴权","私有资源"],TU=[{name:"transformProps",when:"渲染前链式改写图片 props",description:"补 sizes / 占位色 / 解码策略等"}],NU=[],AU="只读取 context 字段（props / state / data），不调用上下文方法",BU=[{name:"token",type:"string | (() => string | undefined)",description:"访问凭证；支持函数动态获取（函数型仅顶层示例展示）"},{name:"tokenParam",type:"string",description:"追加到查询参数的键名"},{name:"crossOrigin",type:'"anonymous" | "use-credentials"',description:"img 的 crossOrigin 属性"},{name:"referrerPolicy",type:"React.HTMLAttributeReferrerPolicy",description:"img 的 referrerPolicy 属性"}],UU=`import { LazyLoadImageCore, createAuthPlugin, withPlugins } from "vane-lazy-image";

const LazyImage = withPlugins(LazyLoadImageCore, [
  createAuthPlugin({
    token: () => getAccessToken(),
    tokenParam: "token",
    crossOrigin: "anonymous",
  }),
]);

<LazyImage src="https://private.example.com/photo.jpg" alt="鉴权示例" />`,FU=[{name:"静态 token",description:"为图片 URL 追加固定访问凭证参数。",src:"https://picsum.photos/seed/auth/800/600",config:{token:"sk-demo-123",tokenParam:"token"}},{name:"跨域 + 无 referrer",description:"追加凭证的同时配置跨域与 referrer 策略。",src:"https://picsum.photos/seed/auth-2/800/600",config:{token:"sk-demo-123",crossOrigin:"anonymous",referrerPolicy:"no-referrer"}}],VU=["为图片 URL 追加 token 查询参数完成鉴权","支持 crossOrigin / referrerPolicy 跨域鉴权配置","token 支持函数动态获取（如刷新令牌）"],WU=["需登录态才能访问的私有图片 / 云存储","带鉴权的用户头像 / 相册"],HU=["token 函数型仅顶层示例展示；静态字符串可直接用于静态预览","与 AntiHotlink 区别：Auth 注入访问凭证，AntiHotlink 注入防盗链签名，二者可叠加","tokenParam 已存在则不重复追加"],GU={name:OU,description:DU,since:MU,tags:jU,events:TU,methods:NU,methodsNote:AU,config:BU,example:UU,examples:FU,features:VU,useCases:WU,notes:HU},vr="cdn-attempts",ni="cdn-index";function qU(e,t){try{const n=new URL(e,typeof window<"u"?window.location.origin:"http://localhost"),o=new URL(t);return n.protocol=o.protocol,n.hostname=o.hostname,n.port=o.port,n.toString()}catch{return e}}function QU(e){const t=e.cdnBases||[],n=Math.max(1,e.maxAttempts??t.length+1),o=e.cacheBust??!1;return{name:"cdn-fallback",version:"1.1.0",description:"原始地址加载失败后按顺序回退到 CDN，带尝试次数上限（P0-3）",config:e,hooks:{onLoadError:r=>{var l,c,u,d;if(!t.length)return!1;const s=Number(((l=r.sharedData)==null?void 0:l.get(vr))??0)+1;try{(c=r.sharedData)==null||c.set(vr,s)}catch{}if(s>=n)return!1;const i=(s-1)%t.length;try{(u=r.sharedData)==null||u.set(ni,i)}catch{}const a=(d=r.imageRef)==null?void 0:d.current;if(a){const p=qU(r.src,t[i]),g=o?`${p}${p.includes("?")?"&":"?"}cdnFallback=${s}`:p;try{a.src=g}catch{}}return!0},onSrcChange:(r,s)=>{var i,a;try{(i=r.sharedData)==null||i.set(vr,0),(a=r.sharedData)==null||a.set(ni,0)}catch{}},onUnmount:r=>{var s,i;try{(s=r.sharedData)==null||s.set(vr,0),(i=r.sharedData)==null||i.set(ni,0)}catch{}}}}}const KU="CDNFallbackPlugin",YU="CDN 回退：主 CDN 域名加载失败时，按序切换备用 CDN 域名（保留路径与查询参数），实现跨厂商容灾，避免单点故障导致破图。",XU="2.0.0",ZU=["network","网络","CDN","容灾"],JU=[{name:"onUnmount",when:"组件卸载前执行一次",description:"释放监听、定时器与观察器；与 onMount 成对出现，避免泄漏"},{name:"onLoadError",when:"加载失败（网络错误、解码失败、超时）",description:"返回 true 表示错误已被处理（如切换备用源），否则继续走默认降级"},{name:"onSrcChange",when:"src 变化、切换到新图时",description:"重置状态、清理旧缓存、重新进入懒加载判定"}],eF=[],tF="只读取 context 字段（props / state / data），不调用上下文方法",nF=[{name:"cdnBases",type:"string[]",description:'备用 CDN 基址列表，首个即主用 CDN。e.g. ["https://cdn1.example.com", "https://cdn2.example.com"]'}],oF=`import { LazyLoadImageCore, createCDNFallbackPlugin, withPlugins } from "vane-lazy-image";

const LazyImage = withPlugins(LazyLoadImageCore, [
  createCDNFallbackPlugin({
    cdnBases: ["https://cdn1.example.com", "https://cdn2.example.com"],
  }),
]);

<LazyImage src="https://cdn0.example.com/photo.jpg" alt="CDN 回退示例" />`,rF=[{name:"多 CDN 回退",description:"主用 picsum.photos 命中；真实故障场景填入备用域名可自动切换（演示用同源避免 404）。",src:"https://picsum.photos/seed/cdn/800/600",config:{cdnBases:["https://picsum.photos","https://fastly.picsum.photos"]}}],sF=["onLoad 用 cdnBases[0] 作为主用 CDN 重写 host","onLoadError 按序切换下一个 CDN 并改写 img.src 触发重试","切换时保留路径 / 查询参数，附加 cdnFallback 缓存破坏参数"],iF=["多活 CDN、跨云厂商容灾","主源站故障时无缝切到备用源"],aF=["cdnBases 为必填，首个即主用 CDN","演示用同源 CDN 避免 404；生产请填入真实备用域名，主域失败会自动切换","切换逻辑替换协议 / host / port，路径与 query 不变"],lF={name:KU,description:YU,since:XU,tags:ZU,events:JU,methods:eF,methodsNote:tF,config:nF,example:oF,examples:rF,features:sF,useCases:iF,notes:aF};function cF(e,t){try{const n=new URL(e,typeof window<"u"?window.location.origin:"http://localhost");return Object.entries(t).forEach(([o,r])=>{r!=null&&n.searchParams.set(o,String(r))}),n.toString()}catch{const n=Object.keys(t).filter(s=>t[s]!==void 0&&t[s]!==null);if(n.length===0)return e;const o=e.includes("?")?"&":"?",r=n.map(s=>`${encodeURIComponent(s)}=${encodeURIComponent(String(t[s]))}`).join("&");return`${e}${o}${r}`}}function uF(e={}){const{enabled:t=!0,maxWidth:n=1920,quality:o=.85,format:r="auto",widthParam:s="w",qualityParam:i="q",formatParam:a="format"}=e;return{name:"image-optimization",version:"1.0.0",config:e,hooks:{transformProps:l=>{if(!t)return l;try{const c=typeof window<"u"?Math.max(1,window.devicePixelRatio||1):1,u=typeof window<"u"&&window.innerWidth||n,d=Math.min(Math.round(u*c),n),p=cF(l.src,{[s]:d,[i]:Math.max(0,Math.min(1,o)),[a]:r});return{...l,src:p}}catch{return l}}}}}const dF="ImageOptimizationPlugin",pF="图片优化：自动追加宽度/质量/格式查询参数。",mF="2.0.0",gF=["network","网络"],fF=[{name:"transformProps",when:"渲染前链式改写图片 props",description:"补 sizes / 占位色 / 解码策略等"}],hF=[],yF="只读取 context 字段（props / state / data），不调用上下文方法",vF=[{name:"enabled",type:"boolean",default:"true",description:"是否启用 URL 改写优化"},{name:"maxWidth",type:"number",default:"1920",description:"最大宽度（像素）"},{name:"quality",type:"number",default:"0.85",description:"0..1"},{name:"format",type:'"auto" | "webp" | "jpg" | "png"',default:'"auto"',description:"目标格式；auto 交给浏览器 / CDN 协商"},{name:"widthParam",type:"string",default:'"w"',description:'例如 "w"'},{name:"qualityParam",type:"string",default:'"q"',description:'例如 "q"'},{name:"formatParam",type:"string",default:'"format"',description:'例如 "format"'}],wF=`const LazyImage = withPlugins(LazyLoadImageCore, [
  createImageOptimizationPlugin({
    maxWidth: 1200,
    quality: 0.8,
    format: "webp",
    widthParam: "w",
    qualityParam: "q",
    formatParam: "format",
  }),
]);`,xF=[{name:"自动 webp + 约束宽度",description:"自动选择最优格式（按 Accept 协商 webp），并把宽度限制在 1200。",config:{maxWidth:1200,quality:.8,format:"webp"}},{name:"固定 jpg 中质量",description:"统一输出 jpg、质量 0.7，适合对兼容性要求较高的场景。",config:{maxWidth:800,quality:.7,format:"jpg"}}],bF=["自动追加宽度 / 质量 / 格式查询参数","format=auto 按 Accept 头协商 webp","参数名可配置以适配不同 CDN / 图片网关"],PF=["任意源图统一走优化网关（imgix / 云存储样式）","响应式不同屏宽下发不同尺寸"],$F=["需图片服务支持对应参数，否则仅作为普通查询参数透传。","与 DataSaver 叠加时，省流质量会进一步覆盖此处质量。","format=auto 依赖浏览器 Accept 头，无需手动指定。"],SF={name:dF,description:pF,since:mF,tags:gF,events:fF,methods:hF,methodsNote:yF,config:vF,example:wF,examples:xF,features:bF,useCases:PF,notes:$F};function Hc(e){try{return new URL(e,typeof window<"u"?window.location.origin:"http://localhost").hostname}catch{return null}}async function CF(e,t){try{await fetch(e,{method:"POST",headers:{"Content-Type":"application/json"},body:JSON.stringify(t),keepalive:!0})}catch{}}const oi=new Map,LF=100;function wr(e,t,n){const o=`${t}:${n.src||""}`,r=Date.now(),s=oi.get(o)||0;if(!(r-s<LF))if(oi.set(o,r),setTimeout(()=>{oi.delete(o)},1e3),typeof e.report=="function")try{e.report(t,n)}catch{}else if(e.reportEndpoint)CF(e.reportEndpoint,{event:t,...n});else try{console.debug("[LLI][net]",t,n)}catch{}}function IF(e={}){return{name:"network-analytics",version:"1.0.0",config:e,hooks:{onMount:t=>{wr(e,"mount",{src:t.src,time:Date.now()})},onLoadSuccess:(t,n)=>{const o=e.trackCDN?Hc(t.src):null;wr(e,"load-success",{src:t.src,displaySrc:n,host:o,time:Date.now()})},onLoadError:(t,n)=>{const o=e.trackCDN?Hc(t.src):null,r=n instanceof Error?n.message:String(n||"unknown");return wr(e,"load-error",{src:t.src,message:r,host:o,time:Date.now()}),!1},onUnmount:t=>{wr(e,"unmount",{src:t.src,time:Date.now()})}}}}const kF="NetworkAnalyticsPlugin",_F="网络分析：上报加载耗时、成功率与 CDN 分布。",EF="2.0.0",RF=["network","网络"],zF=[{name:"onMount",when:"组件挂载完成、插件注册后执行一次（返回的清理函数在 manager.clear 时逆序执行）",description:"初始化副作用：注册监听、起定时器、建观察器；必须返回清理函数或配合 onUnmount 收尾"},{name:"onUnmount",when:"组件卸载前执行一次",description:"释放监听、定时器与观察器；与 onMount 成对出现，避免泄漏"},{name:"onLoadSuccess",when:"图片成功解码可显示时",description:"拿到最终 displaySrc 做后续动作（上报、预取下张、淡入）"},{name:"onLoadError",when:"加载失败（网络错误、解码失败、超时）",description:"返回 true 表示错误已被处理（如切换备用源），否则继续走默认降级"}],OF=[],DF="只读取 context 字段（props / state / data），不调用上下文方法",MF=[{name:"reportEndpoint",type:"string",description:"上报地址（POST JSON）；留空则只在本地统计"},{name:"report",type:"(event: string, data: Record<string, any>) => void",description:"自定义上报函数（若提供则优先使用）"},{name:"trackCDN",type:"boolean",description:"是否按图片域名分组统计，便于比较不同 CDN 表现"}],jF=`const LazyImage = withPlugins(LazyLoadImageCore, [
  createNetworkAnalyticsPlugin({
    trackCDN: true,
    report: (event, data) => {
      // event: "load" | "error" | "cache-hit" ...
      // data:  { src, durationMs, host, cached }
      analytics.track(event, data);
    },
  }),
]);`,TF=[{name:"本地调试上报",description:"未配置端点时写入 console，便于本地观察耗时与命中情况。",config:{trackCDN:!0}},{name:"上报到监控端点",description:"把事件 POST 到监控服务（keepalive，不阻塞页面卸载）。",config:{reportEndpoint:"https://api.example.com/lli",trackCDN:!0}}],NF=["上报加载耗时、成功率、CDN 分布","内置事件去重 + 100ms 防抖，避免刷屏","优先使用自定义 report 函数，其次 reportEndpoint"],AF=["线上图片加载性能监控","定位慢 CDN / 高失败率域名"],BF=["不提供 reportEndpoint 也不提供 report 时，默认 console.debug 输出。","上报事件含 src / host / durationMs / cached 等字段。","report 为函数，需在“用法示例”中以代码传入；静态预览使用纯配置（无端点时仅本地打点）。"],UF={name:kF,description:_F,since:EF,tags:RF,events:zF,methods:OF,methodsNote:DF,config:MF,example:jF,examples:TF,features:NF,useCases:AF,notes:BF};function FF(e,t){try{const n=new URL(e);return n.searchParams.set("w",String(t)),n.toString()}catch{return e.includes("?")?`${e}&w=${t}`:`${e}?w=${t}`}}function VF(e={}){const{enabled:t=!0,variants:n=[{width:400},{width:800},{width:1200}],buildSrc:o=FF,sizes:r="(max-width: 800px) 100vw, 800px"}=e;return{name:"responsive",version:"1.0.0",config:e,hooks:{transformProps:s=>{if(!t||!s.src)return s;const i=n.map(a=>`${a.src??o(s.src,a.width)} ${a.width}w`);return{...s,srcSet:s.srcSet??i.join(", "),sizes:s.sizes??r}},onLoadSuccess:(s,i)=>{var u;if(!t||i.startsWith("blob:")||i.startsWith("data:"))return;const a=(u=s.imageRef)==null?void 0:u.current;if(!a)return;const l=s.src,c=n.map(d=>`${d.src??o(l,d.width)} ${d.width}w`);try{a.getAttribute("srcset")||a.setAttribute("srcset",c.join(", ")),a.getAttribute("sizes")||a.setAttribute("sizes",r)}catch{}}}}}const WF="ResponsivePlugin",HF="响应式图片：注入 srcset/sizes 多宽度资源，浏览器按视口选择最佳尺寸，兼顾清晰度与流量。",GF="2.0.0",qF=["a11y","可访问性","网络","响应式"],QF=[{name:"onLoadSuccess",when:"图片成功解码可显示时",description:"拿到最终 displaySrc 做后续动作（上报、预取下张、淡入）"},{name:"transformProps",when:"渲染前链式改写图片 props",description:"补 sizes / 占位色 / 解码策略等"}],KF=[],YF="只读取 context 字段（props / state / data），不调用上下文方法",XF=[{name:"enabled",type:"boolean",default:"true",description:"是否启用响应式"},{name:"variants",type:"{ width: number; src?: string }[]",default:"[{400},{800},{1200}]",description:"宽度变体列表"},{name:"buildSrc",type:"(baseSrc, width) => string",default:"defaultBuildSrc（追加 ?w=）",description:"自定义链接生成（函数型，参见用法示例）"},{name:"sizes",type:"string",default:'"(max-width: 800px) 100vw, 800px"',description:"sizes 属性"}],ZF=`const ResponsiveImage = withPlugins(LazyLoadImageCore, [
  createResponsivePlugin({
    variants: [{ width: 400 }, { width: 800 }, { width: 1200 }],
    sizes: "(max-width: 800px) 100vw, 800px",
    buildSrc: (base, w) => \`\${base}?w=\${w}\`,
  }),
]);

<ResponsiveImage src="https://picsum.photos/id/1015/500/300" alt="响应式示例" />;`,JF=[{name:"默认多宽度",description:"注入 400/800/1200 三档 srcset。",src:"https://picsum.photos/id/1015/500/300",config:{variants:[{width:400},{width:800},{width:1200}],sizes:"(max-width: 800px) 100vw, 800px"}},{name:"自定义尺寸档位",description:"仅 320/640 两档，适合轻量场景。",src:"https://picsum.photos/id/1021/500/300",config:{variants:[{width:320},{width:640}],sizes:"(max-width: 640px) 100vw, 640px"}},{name:"关闭响应式",description:"enabled=false 时不注入 srcset。",src:"https://picsum.photos/id/1026/500/300",config:{enabled:!1}}],eV=["srcset 多宽度","自定义 buildSrc","sizes 响应式","自动适配屏幕/Retina","可关闭"],tV=["响应式画廊","移动端流量优化","Retina 高清","CMS 图片"],nV=["buildSrc 为函数型配置，静态预览使用默认追加 ?w= 策略；自定义用法见用法示例。"],oV={name:WF,description:HF,since:GF,tags:qF,events:QF,methods:KF,methodsNote:YF,config:XF,example:ZF,examples:JF,features:eV,useCases:tV,notes:nV};let ri=null;function rV(){return ri||(ri=new Promise(e=>{try{const t=document.createElement("canvas");t.width=1,t.height=1;const n=t.toDataURL("image/webp");e(typeof n=="string"&&n.indexOf("data:image/webp")===0)}catch{e(!1)}}),ri)}function sV(e,t){if(!t||t.length===0)return!0;try{const n=new URL(e);return t.some(o=>n.hostname.includes(o))}catch{return!1}}function iV(e,t){if(!t)return e;try{const n=new URL(e),[o,r]=t.split("=");return o&&n.searchParams.set(o,r??""),n.toString()}catch{return e.includes("?")?`${e}&${t}`:`${e}?${t}`}}function aV(e,t){const n=e.lastIndexOf(".");if(n<0)return e;const o=e.substring(n+1).toLowerCase();return t.includes(o)?`${e.substring(0,n)}.webp`:e}function lV(e={}){const{enabled:t=!0,rewrite:n,replaceExtensions:o=["jpg","jpeg","png"],appendQueryParam:r,onDomains:s,testSupport:i=!0}=e;return{name:"webp",version:"1.0.0",config:e,hooks:{onLoad:async a=>{var u,d;if(!t)return;const l=a.src;if(!sV(l,s)||i&&!await rV())return;let c;if(n)c=n(l,a);else{const p=aV(l,o);c=iV(p,r)}if(!(!c||c===l)){try{(u=a.sharedData)==null||u.set("webp:original",l),(d=a.sharedData)==null||d.set("webp:rewritten",c)}catch{}return c}},onLoadError:a=>{var d,p,g;const l=(d=a.sharedData)==null?void 0:d.get("webp:original"),c=(p=a.sharedData)==null?void 0:p.get("webp:rewritten"),u=(g=a.imageRef)==null?void 0:g.current;if(u&&l&&c&&u.src===c){try{u.src=l}catch{}return!0}return!1}}}}const cV="WebPPlugin",uV="WebP 优先：在支持 WebP 的环境中自动将图片重写为 .webp（或自定义链接），失败时回退原图，体积更小加载更快。",dV="2.0.0",pV=["other","网络","性能","WebP"],mV=[{name:"onLoad",when:"加载流程开始、需要确定最终图片地址时",description:"自定义加载逻辑，返回最终图片 URL（objectURL / dataURL / 原地址）"},{name:"onLoadError",when:"加载失败（网络错误、解码失败、超时）",description:"返回 true 表示错误已被处理（如切换备用源），否则继续走默认降级"}],gV=[],fV="只读取 context 字段（props / state / data），不调用上下文方法",hV=[{name:"enabled",type:"boolean",default:"true",description:"是否启用"},{name:"rewrite",type:"(src, ctx) => string | undefined",default:"undefined",description:"自定义重写函数：返回 webp 链接"},{name:"replaceExtensions",type:"string[]",default:'["jpg", "jpeg", "png"]',description:"需替换为 .webp 的扩展名"},{name:"appendQueryParam",type:"string",default:"undefined",description:'追加的查询参数，如 "format=webp"'},{name:"onDomains",type:"string[]",default:"[]（不限制）",description:"限定生效域名"},{name:"testSupport",type:"boolean",default:"true",description:"运行前检测浏览器是否支持 webp"}],yV=`const WebPImage = withPlugins(LazyLoadImageCore, [
  createWebPPlugin({
    replaceExtensions: ["jpg", "jpeg", "png"],
    testSupport: true,
  }),
]);

<WebPImage src="https://example.com/photo.jpg" alt="WebP 示例" />;`,vV=[{name:"默认 WebP 优化",description:"对支持的图床自动重写（本示例用无扩展名 URL，不触发改写，仅展示配置）。",src:"https://picsum.photos/id/1015/500/300",config:{enabled:!0}},{name:"限定域名",description:"仅在指定域名生效，避免误改其它资源。",src:"https://picsum.photos/id/1021/500/300",config:{onDomains:["cdn.example.com"]}},{name:"跳过支持检测",description:"testSupport=false 直接尝试改写（需图床确实提供 webp）。",src:"https://picsum.photos/id/1026/500/300",config:{testSupport:!1}}],wV=["自动 WebP 改写","扩展名替换","查询参数追加","域名限定","支持检测","失败回退原图"],xV=["图片体积优化","现代浏览器加速","CDN WebP 支持","流量节省"],bV=["启用后若 webp 链接加载失败会自动回退到原图，不会白屏；示例中的 picsum 链接无扩展名，不会触发扩展名改写，可安全预览。"],PV={name:cV,description:uV,since:dV,tags:pV,events:mV,methods:gV,methodsNote:fV,config:hV,example:yV,examples:vV,features:wV,useCases:xV,notes:bV};function $V({context:e,cfg:t}){if(!t.showDot||t.hideWhenOut&&!e.isIntersecting)return null;const n=t.dotPosition??"bottom-right",o={position:"absolute",width:10,height:10,borderRadius:999,background:e.isIntersecting?"#28a745":"#6c757d",zIndex:10};return n.includes("top")?o.top=6:o.bottom=6,n.includes("left")?o.left=6:o.right=6,m.jsx("div",{style:o,title:e.isIntersecting?"in-view":"out-of-view"})}function SV(e={}){const{rootMargin:t,threshold:n,once:o,unobserveOnVisible:r,showDot:s,dotPosition:i,hideWhenOut:a}=e,l=o!==void 0?o:r;return{name:"viewport-aware",version:"2.0.0",config:e,hooks:{transformProps:c=>({...c,...t!==void 0?{rootMargin:t}:null,...n!==void 0?{threshold:n}:null,...l!==void 0?{unobserveOnVisible:l}:null}),renderOverlay:c=>m.jsx($V,{context:c,cfg:{showDot:s,dotPosition:i,hideWhenOut:a}}),onEnterViewport:c=>{var u,d;try{(d=(u=c.imageRef)==null?void 0:u.current)==null||d.setAttribute("data-in-view","1")}catch{}},onLeaveViewport:c=>{var u,d;try{(d=(u=c.imageRef)==null?void 0:u.current)==null||d.setAttribute("data-in-view","0")}catch{}}}}}const CV="ViewportAwarePlugin",LV="视口感知加载：真正把 IntersectionObserver 的 rootMargin / threshold / once 下发给核心，控制图片「提前多少距离 / 多灵敏」才触发加载，并在四角显示绿/灰指示点辅助观察。",IV="2.0.0",kV=["viewport","视口与交互","懒加载"],_V=[{name:"onEnterViewport",when:"元素进入视口（IntersectionObserver）",description:"触发懒加载、开始请求、曝光上报"},{name:"onLeaveViewport",when:"元素离开视口",description:"暂停 / 中止在途请求、回收资源"},{name:"transformProps",when:"渲染前链式改写图片 props",description:"补 sizes / 占位色 / 解码策略等"},{name:"renderOverlay",when:"每次渲染，覆盖在图片容器之上",description:"骨架屏、错误占位、水印、加载动画"}],EV=[],RV="只读取 context 字段（props / state / data），不调用上下文方法",zV=[{name:"rootMargin",type:"string",default:"未设置（沿用 Core 默认 0px）",description:'IO 边距，控制提前/延后触发。如 "200px" 表示进入视口前 200px 就开始加载（预加载），"-50px" 表示进入后再等 50px'},{name:"threshold",type:"number | number[]",default:"未设置",description:"IO 触发阈值（0~1），控制加载灵敏度"},{name:"once",type:"boolean",default:"true",description:"是否只加载一次：true=进入视口加载后停止观察（省资源）；false=持续观察"},{name:"unobserveOnVisible",type:"boolean",default:"由 once 推导",description:"显式下发，优先级高于 once"},{name:"showDot",type:"boolean",default:"false",description:"是否显示视口指示点（仅辅助观察，非核心能力）"},{name:"dotPosition",type:'"top-left" | "top-right" | "bottom-left" | "bottom-right"',default:'"bottom-right"',description:"指示点位置"},{name:"hideWhenOut",type:"boolean",default:"false",description:"离开视口时隐藏指示点"}],OV=`const ViewportImage = withPlugins(LazyLoadImageCore, [
  // 提前 200px 预加载，进入视口即就绪，滚动更顺滑
  createViewportAwarePlugin({ rootMargin: "200px", threshold: 0.01, showDot: true }),
]);

<ViewportImage src="https://picsum.photos/id/1015/500/300" alt="视口感知示例" />;`,DV=[{name:"提前预加载（rootMargin 200px）",description:"元素进入视口前 200px 就开始加载，滚到时图片已就绪，消除白屏。",src:"https://picsum.photos/id/1015/500/300",config:{rootMargin:"200px",threshold:.01,showDot:!0}},{name:"严格进入才加载（rootMargin 0px）",description:"默认行为：图片真正进入视口边缘才触发加载。",src:"https://picsum.photos/id/1024/500/300",config:{rootMargin:"0px",showDot:!0,dotPosition:"top-left"}},{name:"离开时隐藏指示点",description:"仅在进入视口显示绿点，离开后隐藏。",src:"https://picsum.photos/id/1035/500/300",config:{rootMargin:"100px",showDot:!0,dotPosition:"top-right",hideWhenOut:!0}}],MV=["rootMargin 真正下发，控制提前/延后加载距离","threshold 调节加载灵敏度","once / unobserveOnVisible 控制是否只加载一次","四角可选指示点（辅助观察真实 IO 状态）","onEnterViewport / onLeaveViewport 事件钩子"],jV=["长列表滚动预加载（rootMargin 提前量）","调试图片加载时机（配合指示点）","无限滚动 / 瀑布流场景","首屏 LCP 图片前的视口调度"],TV=["核心能力是 transformProps 把 IO 配置下发给核心，而不是装饰层；showDot 仅为观察辅助，可关闭。","once=false 仅表示持续观察，核心仍按加载状态只加载一次；如需「离开再回来重新加载」请配合 reload/reset 钩子。"],NV={name:CV,description:LV,since:IV,tags:kV,events:_V,methods:EV,methodsNote:RV,config:zV,example:OV,examples:DV,features:MV,useCases:jV,notes:TV};function AV(e={}){const{dwellMs:t=250,maxWaitMs:n=1500,onlyWhenIntersecting:o=!0,debug:r=!1}=e,s="viewport-dwell:inView";return{name:"viewport-dwell",version:"2.0.0",config:e,hooks:{onEnterViewport:i=>{var a;try{(a=i.sharedData)==null||a.set(s,!0)}catch{}if(r)try{console.debug("[ViewportDwell] enter",i.src)}catch{}},onLeaveViewport:i=>{var a;try{(a=i.sharedData)==null||a.set(s,!1)}catch{}if(r)try{console.debug("[ViewportDwell] leave",i.src)}catch{}},onBeforeLoad:async i=>{var c;const a=Date.now(),l=u=>new Promise(d=>setTimeout(d,u));if(r)try{console.debug("[ViewportDwell] gating",{src:i.src,dwellMs:t,maxWaitMs:n})}catch{}for(;;){const u=!!((c=i.sharedData)!=null&&c.get(s)),d=Date.now()-a;if(!u&&o&&d<n){if(r)try{console.debug("[ViewportDwell] aborted (left before dwell)",i.src)}catch{}return!1}if(d>=t){if(r)try{console.debug("[ViewportDwell] proceed",i.src,{elapsed:d})}catch{}return!0}await l(30)}},onUnmount:i=>{var a;try{(a=i.sharedData)==null||a.delete(s)}catch{}}}}}const BV="ViewportDwellPlugin",UV="视口驻留门控（v2 真实实现）：在真正加载前要求图片在视口内持续停留 dwellMs，快速划过（停留不足且离开）则中止加载；超过 maxWaitMs 后放行以防饥饿。",FV="2.0.0",VV=["viewport","视口与交互","驻留","省流量"],WV=[{name:"onUnmount",when:"组件卸载前执行一次",description:"释放监听、定时器与观察器；与 onMount 成对出现，避免泄漏"},{name:"onBeforeLoad",when:"发起图片请求之前",description:"返回 false 可阻断本次加载（如权限校验、占位策略）"},{name:"onEnterViewport",when:"元素进入视口（IntersectionObserver）",description:"触发懒加载、开始请求、曝光上报"},{name:"onLeaveViewport",when:"元素离开视口",description:"暂停 / 中止在途请求、回收资源"}],HV=[],GV="只读取 context 字段（props / state / data），不调用上下文方法",qV=[{name:"dwellMs",type:"number",default:"250",description:"需要在视口中持续停留的时间（毫秒），不足视为「划过」不加载"},{name:"maxWaitMs",type:"number",default:"1500",description:"最长等待时间（毫秒），超时仍允许加载以防饥饿"},{name:"onlyWhenIntersecting",type:"boolean",default:"true",description:"仅在进入视口时应用驻留判断；离开且未达上限则中止"},{name:"debug",type:"boolean",default:"false",description:"是否输出调试日志"}],QV=`const DwellImage = withPlugins(LazyLoadImageCore, [
  // 停留不足 250ms 的划过不加载，长留才加载
  createViewportDwellPlugin({ dwellMs: 250, maxWaitMs: 1500 }),
]);

<DwellImage src="https://picsum.photos/id/1015/500/300" alt="视口驻留示例" />;`,KV=[{name:"默认驻留（250ms）",description:"划过即中止，停留足够才加载，提升命中率。",src:"https://picsum.photos/id/1015/500/300",config:{dwellMs:250}},{name:"延长驻留时间",description:"400ms 驻留门槛，适合快速浏览场景。",src:"https://picsum.photos/id/1021/500/300",config:{dwellMs:400}},{name:"开启调试日志",description:"控制台输出驻留门控过程，便于调参。",src:"https://picsum.photos/id/1026/500/300",config:{dwellMs:250,debug:!0}}],YV=["门控钩子真正延迟/中止加载（非空头）","驻留时间不足且离开 → 中止加载","maxWaitMs 饥饿保护（超时放行）","仅在进入视口时生效","调试日志输出"],XV=["无限滚动信息流","防止快速滑动误加载","节省带宽与请求数","提升有效加载命中率"],ZV=["v2 起通过引擎 onBeforeLoad 门控真实生效（旧版写在被引擎丢弃的钩子上，实际未拦截）；与 ViewportAware 的 rootMargin 搭配可进一步调优触发时机。"],JV={name:BV,description:UV,since:FV,tags:VV,events:WV,methods:HV,methodsNote:GV,config:qV,example:QV,examples:KV,features:YV,useCases:XV,notes:ZV};function eW(e,t="Image"){try{const n=new URL(e,typeof window<"u"?window.location.origin:"http://localhost").pathname.replace(/\/+$/,"");return`${t} • ${n}`}catch{return t}}function tW(e={}){return{name:"alt-text",version:"1.0.0",config:e,hooks:{transformProps:t=>{const n=t.alt;if(typeof n=="string"&&n.trim().length>0)return t;const o=e.derive?e.derive(t.src):eW(t.src,e.prefix??"Image");return{...t,alt:o}}}}}const nW="AltTextPlugin",oW="替代文本：当图片未提供 alt 时，按前缀或自定义 derive 函数自动生成 alt，提升可访问性与 SEO；已有 alt 则不覆盖。",rW="2.0.0",sW=["a11y","可访问性","SEO"],iW=[{name:"transformProps",when:"渲染前链式改写图片 props",description:"补 sizes / 占位色 / 解码策略等"}],aW=[],lW="只读取 context 字段（props / state / data），不调用上下文方法",cW=[{name:"derive",type:"(src: string) => string",default:"undefined",description:"自定义推导函数（函数型，参见用法示例）"},{name:"prefix",type:"string",default:'"Image"',description:'默认推导前缀（如 "Image"）'}],uW=`const AltImage = withPlugins(LazyLoadImageCore, [
  createAltTextPlugin({
    derive: (src) => \`图片 \${new URL(src).pathname}\`,
  }),
]);

// 不传 alt 时自动补全；传了 alt 则不覆盖
<AltImage src="https://picsum.photos/id/1015/500/300" alt="" />;`,dW=[{name:"默认前缀派生",description:"不传 alt，按 prefix 自动生成 alt。",src:"https://picsum.photos/id/1015/500/300",config:{prefix:"产品图"}},{name:"已有 alt 不覆盖",description:"传入 alt 时插件保留原值，不做替换。",src:"https://picsum.photos/id/1021/500/300",config:{prefix:"Image"}}],pW=["alt 缺失自动派生","自定义前缀","自定义 derive 函数","不覆盖已有 alt"],mW=["批量图片 alt 补全","SEO 优化","读屏适配","用户未填 alt 兜底"],gW=["derive 为函数型配置，静态预览仅支持 prefix；函数用法见用法示例。"],fW={name:nW,description:oW,since:rW,tags:sW,events:iW,methods:aW,methodsNote:lW,config:cW,example:uW,examples:dW,features:pW,useCases:mW,notes:gW};function hW(e={}){const{text:t="Error",position:n="top-right",bgColor:o="rgba(220, 53, 69, 0.85)",color:r="#fff",fontSize:s=12,padding:i="2px 6px",borderRadius:a=4,zIndex:l=100,persistAfterFallback:c=!0}=e;return{name:"error-badge",version:"1.0.0",config:e,hooks:{onLoadError:u=>{var d;try{(d=u.sharedData)==null||d.set("had-error",!0)}catch{}return!1},renderOverlay:u=>{var g;const d=!!((g=u.sharedData)!=null&&g.get("had-error"));if(!(u.imageState.isError||c&&d))return null;const p=typeof t=="function"?t(u):t;return m.jsx("div",{style:{position:"absolute",inset:0,pointerEvents:"none",zIndex:l},children:m.jsx("div",{style:{position:"absolute",background:o,color:r,fontSize:s,padding:i,borderRadius:a,lineHeight:1.2,fontWeight:600,...{"top-left":{top:8,left:8},"top-right":{top:8,right:8},"bottom-left":{bottom:8,left:8},"bottom-right":{bottom:8,right:8},center:{top:"50%",left:"50%",transform:"translate(-50%, -50%)"}}[n]},children:p})})}}}}const yW="ErrorBadgePlugin",vW="错误徽标：图片加载失败（或回退成功后）在指定角落显示错误徽标，便于在大批量图片列表中快速定位失败项。",wW="2.0.0",xW=["error","错误处理","错误反馈"],bW=[{name:"onLoadError",when:"加载失败（网络错误、解码失败、超时）",description:"返回 true 表示错误已被处理（如切换备用源），否则继续走默认降级"},{name:"renderOverlay",when:"每次渲染，覆盖在图片容器之上",description:"骨架屏、错误占位、水印、加载动画"}],PW=[],$W="只读取 context 字段（props / state / data），不调用上下文方法",SW=[{name:"text",type:"string | ((context: LazyImageContext) => string)",default:'"Error"',description:"徽标文字；支持函数按 ctx 动态生成（函数型仅顶层示例展示）"},{name:"position",type:'"top-left" | "top-right" | "bottom-left" | "bottom-right" | "center"',default:'"top-right"',description:"徽标定位角落"},{name:"bgColor",type:"string",default:'"rgba(220, 53, 69, 0.85)"',description:"背景色"},{name:"color",type:"string",default:'"#fff"',description:"文字颜色"},{name:"fontSize",type:"number",default:"12",description:"字号(px)"},{name:"padding",type:"string",default:'"2px 6px"',description:"内边距"},{name:"borderRadius",type:"number",default:"4",description:"圆角(px)"},{name:"zIndex",type:"number",default:"100",description:"层级，默认较高避免被其它覆盖层遮挡"},{name:"persistAfterFallback",type:"boolean",default:"true",description:"回退图加载成功后是否仍显示徽标"}],CW=`import { LazyLoadImageCore, createErrorBadgePlugin, withPlugins } from "vane-lazy-image";

const LazyImage = withPlugins(LazyLoadImageCore, [
  createErrorBadgePlugin({
    text: (ctx) => \`加载失败: \${ctx.src}\`,
    position: "bottom-right",
    bgColor: "rgba(220,53,69,0.9)",
  }),
]);

// 故意触发失败以观察徽标
<LazyImage src="https://invalid.example.com/x.png" alt="错误徽标示例" />`,LW=[{name:"默认错误徽标",description:"加载失败后，在右上角显示红底 Error 徽标。",src:"https://invalid.example.com/error-badge.png",config:{}},{name:"自定义文案与位置",description:"底部右侧、深色背景 + 高亮文字的失败徽标。",src:"https://invalid.example.com/error-badge-2.png",config:{text:"图片加载失败",position:"bottom-right",bgColor:"rgba(0,0,0,0.7)",color:"#ffd166"}}],IW=["加载或回退失败后，在图片角落显示错误徽标","支持 5 种定位（四角 + 居中）与背景/文字/字号/圆角定制","persistAfterFallback：回退图已显示仍保留徽标，便于排查","通过 sharedData 标记 had-error，与 FallbackImage / RetryOnError / ErrorOverlay 联动"],kW=["图片墙 / 商品列表快速识别加载失败项","大批量图片加载健康度可视化"],_W=["text 支持函数型 (ctx) => string，但函数无法进入静态预览配置，仅顶层示例展示","默认 zIndex=100，高于多数覆盖层，避免被遮挡","与 ErrorOverlay 区别：徽标是轻量角标，覆盖层是整图遮罩"],EW={name:yW,description:vW,since:wW,tags:xW,events:bW,methods:PW,methodsNote:$W,config:SW,example:CW,examples:LW,features:IW,useCases:kW,notes:_W};function RW({context:e,cfg:t}){var d;const{imageState:n,imageRef:o,src:r}=e,s=!!((d=e.sharedData)!=null&&d.get("had-error")),i=n.isError||(t.persistAfterFallback??!0)&&s,a=t.message,l=x.useMemo(()=>(typeof a=="function"?a(e):a)??"加载失败",[a,e]);if(!i)return null;const c=()=>{const p=o==null?void 0:o.current;if(p)try{const g=`${r}${r.includes("?")?"&":"?"}retry=${Date.now()}`;p.src=g}catch{}},u={position:"absolute",inset:0,background:t.background??"rgba(220, 53, 69, 0.18)",color:t.color??"#b00020",zIndex:t.zIndex??10,display:"flex",alignItems:"center",justifyContent:"center",pointerEvents:"auto",gap:8,fontSize:13,fontWeight:500};return m.jsxs("div",{style:u,children:[m.jsx("span",{children:l}),t.showRetry!==!1&&m.jsxs("button",{onClick:c,style:{padding:"4px 8px",fontSize:12},children:[" ",t.retryText??"重试"," "]})]})}function zW(e={}){return{name:"error-overlay",version:"1.0.0",config:e,hooks:{renderOverlay:t=>m.jsx(RW,{context:t,cfg:e})}}}const OW="ErrorOverlayPlugin",DW="错误覆盖层：图片加载失败时显示半透明遮罩与可选『重试』按钮，引导用户手动重试，适用于商品主图等关键图。",MW="2.0.0",jW=["error","错误处理","错误反馈","重试"],TW=[{name:"renderOverlay",when:"每次渲染，覆盖在图片容器之上",description:"骨架屏、错误占位、水印、加载动画"}],NW=[],AW="只读取 context 字段（props / state / data），不调用上下文方法",BW=[{name:"message",type:"string | ((context: LazyImageContext) => string)",default:"undefined（回退『加载失败』）",description:"遮罩提示文案；支持函数按 ctx 动态生成（函数型仅顶层示例展示）"},{name:"background",type:"string",default:'"rgba(220, 53, 69, 0.18)"',description:"遮罩背景色"},{name:"color",type:"string",default:'"#b00020"',description:"文字颜色"},{name:"zIndex",type:"number",default:"10",description:"遮罩层级"},{name:"showRetry",type:"boolean",default:"true",description:"是否显示重试按钮"},{name:"retryText",type:"string",default:'"重试"',description:"重试按钮文字"},{name:"persistAfterFallback",type:"boolean",default:"true",description:"回退图加载成功后是否仍显示遮罩"}],UW=`import { LazyLoadImageCore, createErrorOverlayPlugin, withPlugins } from "vane-lazy-image";

const LazyImage = withPlugins(LazyLoadImageCore, [
  createErrorOverlayPlugin({
    message: (ctx) => \`图片加载失败：\${ctx.src}\`,
    retryText: "点我重试",
  }),
]);

// 故意触发失败以观察遮罩与重试按钮
<LazyImage src="https://invalid.example.com/x.png" alt="错误覆盖层示例" />`,FW=[{name:"默认重试遮罩",description:"失败时整图遮罩 + 重试按钮（默认文案『重试』）。",src:"https://invalid.example.com/error-overlay.png",config:{retryText:"重试"}},{name:"自定义文案与配色",description:"深色遮罩 + 白色文字 + 自定义提示文案。",src:"https://invalid.example.com/error-overlay-2.png",config:{message:"图片暂时无法加载",background:"rgba(0,0,0,0.4)",color:"#fff"}}],VW=["失败时整图半透明遮罩 + 可选重试按钮","重试通过 cache-bust 参数（?retry=时间戳）重新请求，绕过缓存","自定义文案 / 背景 / 文字色 / 层级","persistAfterFallback：回退后仍显示遮罩"],WW=["商品主图 / 头图失败后友好提示并支持手动重试","与 RetryOnError 组合：自动重试 + 手动重试双保险"],HW=["showRetry 默认开启；message 支持函数型（仅顶层示例展示）","重试逻辑直接改写 img.src，不依赖外部状态","点击重试使用 Date.now() 做缓存破坏，确保重新发起请求"],GW={name:OW,description:DW,since:MW,tags:jW,events:TW,methods:NW,methodsNote:AW,config:BW,example:UW,examples:FW,features:VW,useCases:WW,notes:HW},si=new Map,qW=1e3;function QW(e,t){const n=t.src||"",o=Date.now(),r=si.get(n)||0;if(!(o-r<qW)){si.set(n,o);try{if(e.report&&e.report(t),e.reportEndpoint){const s=new AbortController,i=setTimeout(()=>s.abort(),5e3);fetch(e.reportEndpoint,{method:"POST",headers:{"Content-Type":"application/json"},body:JSON.stringify(t),keepalive:!0,signal:s.signal}).catch(()=>{}).finally(()=>{clearTimeout(i)})}}catch{}setTimeout(()=>{si.delete(n)},5e3)}}function KW(e={}){return{name:"error-tracking",version:"1.0.0",config:e,hooks:{onLoadError:(t,n)=>{var i,a,l;const o="error-count",r=Number(((i=t.sharedData)==null?void 0:i.get(o))??0)+1;(a=t.sharedData)==null||a.set(o,r);const s={src:t.src,message:n instanceof Error?n.message:String(n||"unknown"),stack:n instanceof Error?n.stack:void 0,time:Date.now(),network:t.networkInfo,device:t.deviceInfo,count:r};QW(e,s);try{(l=t.sharedData)==null||l.set("had-error",!0)}catch{}return!0},renderOverlay:t=>{var r;if(!e.showBadge)return null;const n=Number(((r=t.sharedData)==null?void 0:r.get("error-count"))??0);if(n<=0)return null;const o={position:"absolute",top:6,right:6,zIndex:10,fontSize:12,color:e.badgeColor??"#fff",background:e.badgeBg??"rgba(220,53,69,0.8)",padding:"2px 6px",borderRadius:4};return m.jsxs("div",{style:o,children:[e.badgeText??"Error"," × ",n]})}}}}const YW="ErrorTrackingPlugin",XW="错误追踪：在图片加载失败时上报失败详情（地址 / 错误信息 / 网络 / 设备 / 次数）到自定义函数或上报端点，并可显示错误计数角标，用于生产环境图片错误监控。",ZW="2.0.0",JW=["error","错误处理","监控","可观测"],e9=[{name:"onLoadError",when:"加载失败（网络错误、解码失败、超时）",description:"返回 true 表示错误已被处理（如切换备用源），否则继续走默认降级"},{name:"renderOverlay",when:"每次渲染，覆盖在图片容器之上",description:"骨架屏、错误占位、水印、加载动画"}],t9=[],n9="只读取 context 字段（props / state / data），不调用上下文方法",o9=[{name:"reportEndpoint",type:"string",description:"错误上报端点（POST JSON，带 5s 超时与 keepalive）"},{name:"report",type:"(payload: any) => void",description:"自定义上报函数（与端点二选一或并存）"},{name:"showBadge",type:"boolean",default:"false",description:"是否显示错误计数角标（需显式开启）"},{name:"badgeText",type:"string",default:'"Error"',description:"角标前缀文字"},{name:"badgeColor",type:"string",default:'"#fff"',description:"角标文字色"},{name:"badgeBg",type:"string",default:'"rgba(220,53,69,0.8)"',description:"角标背景色"}],r9=`import { LazyLoadImageCore, createErrorTrackingPlugin, withPlugins } from "vane-lazy-image";

const LazyImage = withPlugins(LazyLoadImageCore, [
  createErrorTrackingPlugin({
    report: (payload) => {
      console.warn("图片加载失败", payload);
    },
    showBadge: true,
  }),
]);

// 故意触发失败以观察上报与角标
<LazyImage src="https://invalid.example.com/x.png" alt="错误追踪示例" />`,s9=[{name:"错误计数角标",description:"开启角标，失败后右上角显示累计错误次数。",src:"https://invalid.example.com/error-tracking.png",config:{showBadge:!0,badgeText:"Err"}},{name:"端点上报",description:"失败后 POST 上报到采集端点（演示端点可能 404，代码已静默忽略）。",src:"https://invalid.example.com/error-tracking-2.png",config:{reportEndpoint:"/api/img-errors",showBadge:!0}}],i9=["onLoadError 采集 src / message / network / device / 累计次数","内置 1 秒防抖，避免高频重复上报","report 自定义函数 或 reportEndpoint 端点二选一 / 并存","可选角标显示错误次数"],a9=["生产环境图片错误率监控与告警","定位经常性失败的图片源 / CDN"],l9=["showBadge 默认 false，需显式开启才显示角标","端点上报带 5s 超时与 keepalive，页面卸载也能送达","report 为函数型，无法进入静态预览配置，仅顶层示例展示"],c9={name:YW,description:XW,since:ZW,tags:JW,events:e9,methods:t9,methodsNote:n9,config:o9,example:r9,examples:s9,features:i9,useCases:a9,notes:l9};function mn(e,...t){try{console.log(e,...t)}catch{}}function u9(e={}){const{enabled:t=!0,prefix:n="[LLI]"}=e;return{name:"event-logger",version:"1.0.0",config:e,hooks:{onBeforeLoad:o=>(t&&mn(n,"before-load",o.src),!0),onLoadSuccess:(o,r)=>{t&&mn(n,"load-success",{src:o.src,displaySrc:r})},onLoadError:(o,r)=>(t&&mn(n,"load-error",{src:o.src,error:r}),!0),onEnterViewport:o=>{t&&mn(n,"enter-viewport",o.src)},onLeaveViewport:o=>{t&&mn(n,"leave-viewport",o.src)},onProgress:(o,r)=>{t&&mn(n,"progress",r.percent)}}}}const d9="EventLoggerPlugin",p9="事件日志：在控制台记录图片加载全生命周期事件（before-load / load-success / load-error / enter-viewport / leave-viewport / progress），便于调试与监控。",m9="2.0.0",g9=["other","监控","调试"],f9=[{name:"onBeforeLoad",when:"发起图片请求之前",description:"返回 false 可阻断本次加载（如权限校验、占位策略）"},{name:"onLoadSuccess",when:"图片成功解码可显示时",description:"拿到最终 displaySrc 做后续动作（上报、预取下张、淡入）"},{name:"onLoadError",when:"加载失败（网络错误、解码失败、超时）",description:"返回 true 表示错误已被处理（如切换备用源），否则继续走默认降级"},{name:"onProgress",when:'加载进度更新（由 withPlugins 订阅 bus 的 "progress" 桥接）',description:"展示进度条 / 百分比；仅对支持进度上报的 loader 生效"},{name:"onEnterViewport",when:"元素进入视口（IntersectionObserver）",description:"触发懒加载、开始请求、曝光上报"},{name:"onLeaveViewport",when:"元素离开视口",description:"暂停 / 中止在途请求、回收资源"}],h9=[],y9="只读取 context 字段（props / state / data），不调用上下文方法",v9=[{name:"enabled",type:"boolean",default:"true",description:"是否启用日志"},{name:"prefix",type:"string",default:'"[LLI]"',description:"日志前缀，便于过滤"}],w9=`const LogImage = withPlugins(LazyLoadImageCore, [
  createEventLoggerPlugin({ prefix: "[IMG]" }),
]);

<LogImage src="https://picsum.photos/id/1015/500/300" alt="事件日志示例" />;`,x9=[{name:"默认日志",description:"使用默认 [LLI] 前缀记录全部事件。",src:"https://picsum.photos/id/1015/500/300",config:{enabled:!0}},{name:"自定义前缀",description:"改用 [IMG] 前缀，便于在控制台分组过滤。",src:"https://picsum.photos/id/1021/500/300",config:{prefix:"[IMG]"}},{name:"关闭日志",description:"enabled=false 时不输出任何日志。",src:"https://picsum.photos/id/1026/500/300",config:{enabled:!1}}],b9=["全生命周期事件记录","可自定义前缀","可关闭","零业务侵入"],P9=["调试加载流程","加载监控埋点","性能问题排查","教学演示"],$9=["仅用于开发/调试，生产环境建议按需关闭以避免控制台噪音。"],S9={name:d9,description:p9,since:m9,tags:g9,events:f9,methods:h9,methodsNote:y9,config:v9,example:w9,examples:x9,features:b9,useCases:P9,notes:$9};function C9({context:e,cfg:t}){const n=e.performanceData||{duration:void 0};if(!t.showOverlay||!e.imageState.isLoaded)return null;const o=t.overlayPosition??"top-right",r={position:"absolute",zIndex:9,background:t.background??"rgba(0,0,0,0.45)",color:t.color??"#fff",fontSize:12,padding:"2px 6px",borderRadius:4};return o.includes("top")&&(r.top=6),o.includes("bottom")&&(r.bottom=6),o.includes("left")&&(r.left=6),o.includes("right")&&(r.right=6),m.jsxs("div",{style:r,children:["Loaded in ",Math.round(n.duration||0)," ms"]})}function L9(e={}){const t=new Set,n=100,o=new Map;return{name:"performance-monitor",version:"1.0.0",config:e,hooks:{onLoadSuccess:r=>{if(t.has(r.src))return;const s=Date.now(),i=o.get(r.src)||0;if(s-i<n)return;o.set(r.src,s),t.add(r.src);const a=r.performanceData||{duration:0},l={src:r.src,durationMs:Math.round(a.duration||0),network:r.networkInfo,device:r.deviceInfo};try{e.onReport&&e.onReport(l)}catch{}},renderOverlay:r=>m.jsx(C9,{context:r,cfg:e})}}}const I9="PerformanceMonitorPlugin",k9="性能监控：统计单张图片的加载耗时，可选在四角叠加实时展示耗时面板，并在加载完成时通过 onReport 上报。",_9="2.0.0",E9=["other","监控","性能"],R9=[{name:"onLoadSuccess",when:"图片成功解码可显示时",description:"拿到最终 displaySrc 做后续动作（上报、预取下张、淡入）"},{name:"renderOverlay",when:"每次渲染，覆盖在图片容器之上",description:"骨架屏、错误占位、水印、加载动画"}],z9=[],O9="只读取 context 字段（props / state / data），不调用上下文方法",D9=[{name:"showOverlay",type:"boolean",default:"true",description:"是否在图片上叠加耗时面板"},{name:"overlayPosition",type:'"top-left" | "top-right" | "bottom-left" | "bottom-right"',default:'"top-right"',description:"面板位置（四角）"},{name:"color",type:"string",default:'"#fff"',description:"文字色"},{name:"background",type:"string",default:'"rgba(0,0,0,0.45)"',description:"面板背景"},{name:"onReport",type:"(data: { src; durationMs; network?; device? }) => void",default:"undefined",description:"加载完成上报回调"}],M9=`const PerfImage = withPlugins(LazyLoadImageCore, [
  createPerformanceMonitorPlugin({
    overlayPosition: "bottom-left",
    onReport: (data) => console.log("perf", data),
  }),
]);

<PerfImage src="https://picsum.photos/id/1015/500/300" alt="性能监控示例" />;`,j9=[{name:"默认耗时面板",description:"右上角显示 Loaded in N ms。",src:"https://picsum.photos/id/1015/500/300",config:{showOverlay:!0}},{name:"左下角面板",description:"面板移动到左下角。",src:"https://picsum.photos/id/1021/500/300",config:{overlayPosition:"bottom-left"}},{name:"自定义配色",description:"蓝色背景 + 白字，突出展示。",src:"https://picsum.photos/id/1026/500/300",config:{background:"rgba(33,118,255,0.6)",color:"#fff"}}],T9=["加载耗时统计","四角面板可选","自定义配色","onReport 上报","防抖去重"],N9=["LCP/加载耗时测量","性能优化验证","监控告警","A/B 对比"],A9=["onReport 为函数型配置，静态预览仅展示面板；函数用法见用法示例。"],B9={name:I9,description:k9,since:_9,tags:E9,events:R9,methods:z9,methodsNote:O9,config:D9,example:M9,examples:j9,features:T9,useCases:N9,notes:A9};function Se(e){return typeof e=="number"?e:0}function U9(e={}){const{enabled:t=!0,showOverlay:n=!0,onReport:o}=e;return{name:"user-behavior",version:"1.0.0",config:e,hooks:{transformProps:r=>({...r,unobserveOnVisible:!1}),onMount:r=>{var s,i,a,l,c;if(t)try{(s=r.sharedData)==null||s.set("ub:clicks",0),(i=r.sharedData)==null||i.set("ub:dwell",0),(a=r.sharedData)==null||a.set("ub:enters",0),(l=r.sharedData)==null||l.set("ub:leaves",0),(c=r.sharedData)==null||c.set("ub:enterTs",0)}catch{}},onLoadSuccess:r=>{var a;if(!t)return;const s=(a=r.imageRef)==null?void 0:a.current;if(!s)return;s.__lliUBClicks=s.__lliUBClicks||0,s.__lliUBEnterTs=s.__lliUBEnterTs||0,s.__lliUBDwell=s.__lliUBDwell||0,s.__lliUBEnters=s.__lliUBEnters||0,s.__lliUBLeaves=s.__lliUBLeaves||0;const i=()=>{var l,c;s.__lliUBClicks=(s.__lliUBClicks||0)+1;try{const u=Se((l=r.sharedData)==null?void 0:l.get("ub:clicks"))+1;(c=r.sharedData)==null||c.set("ub:clicks",u)}catch{}};s.__lliUBClickHandler=i;try{s.addEventListener("click",i)}catch{}},onEnterViewport:r=>{var i,a,l,c;if(!t)return;const s=(i=r.imageRef)==null?void 0:i.current;s&&(s.__lliUBEnterTs=Date.now(),s.__lliUBEnters=(s.__lliUBEnters||0)+1);try{const u=Se((a=r.sharedData)==null?void 0:a.get("ub:enters"))+1;(l=r.sharedData)==null||l.set("ub:enters",u),(c=r.sharedData)==null||c.set("ub:enterTs",Date.now())}catch{}},onLeaveViewport:r=>{var i,a,l,c,u,d,p;if(!t)return;const s=(i=r.imageRef)==null?void 0:i.current;if(s){const g=s.__lliUBEnterTs||0;g&&(s.__lliUBDwell=(s.__lliUBDwell||0)+(Date.now()-g)),s.__lliUBEnterTs=0,s.__lliUBLeaves=(s.__lliUBLeaves||0)+1}try{const g=Se((a=r.sharedData)==null?void 0:a.get("ub:leaves"))+1;(l=r.sharedData)==null||l.set("ub:leaves",g);const v=Se((c=r.sharedData)==null?void 0:c.get("ub:enterTs"));if(v){const w=Se((u=r.sharedData)==null?void 0:u.get("ub:dwell"))+(Date.now()-v);(d=r.sharedData)==null||d.set("ub:dwell",w),(p=r.sharedData)==null||p.set("ub:enterTs",0)}}catch{}},onUnmount:r=>{var g,v,w,b,y,f,h,P,$,I,k;if(!t)return;const s=(g=r.imageRef)==null?void 0:g.current;if(s&&s.__lliUBClickHandler)try{s.removeEventListener("click",s.__lliUBClickHandler)}catch{}const i=Se((v=r.sharedData)==null?void 0:v.get("ub:enterTs")),a=Se((w=r.sharedData)==null?void 0:w.get("ub:dwell"))+(i?Date.now()-i:0),l=s?(s.__lliUBDwell||0)+(s.__lliUBEnterTs?Date.now()-s.__lliUBEnterTs:0):0,c=(s==null?void 0:s.__lliUBClicks)??Se((b=r.sharedData)==null?void 0:b.get("ub:clicks")),u=(s==null?void 0:s.__lliUBEnters)??Se((y=r.sharedData)==null?void 0:y.get("ub:enters")),d=(s==null?void 0:s.__lliUBLeaves)??Se((f=r.sharedData)==null?void 0:f.get("ub:leaves")),p={src:r.src,dwellMs:l||a||0,clicks:c,enters:u,leaves:d};try{o?o(p):console.log("[UserBehavior]",p)}catch{}s&&(delete s.__lliUBClickHandler,delete s.__lliUBClicks,delete s.__lliUBEnterTs,delete s.__lliUBDwell,delete s.__lliUBEnters,delete s.__lliUBLeaves);try{(h=r.sharedData)==null||h.delete("ub:clicks"),(P=r.sharedData)==null||P.delete("ub:dwell"),($=r.sharedData)==null||$.delete("ub:enters"),(I=r.sharedData)==null||I.delete("ub:leaves"),(k=r.sharedData)==null||k.delete("ub:enterTs")}catch{}},renderOverlay:r=>!t||!n?null:m.jsx(()=>{const[s,i]=A.useState({dwellMs:0,clicks:0,enters:0,leaves:0,inView:!1});return A.useEffect(()=>{let a=!0,l=0;const c=()=>{var w,b,y,f,h,P;if(!a)return;const u=(w=r.imageRef)==null?void 0:w.current,d=(u==null?void 0:u.__lliUBEnterTs)||0,p=((u==null?void 0:u.__lliUBDwell)||0)+(d?Date.now()-d:0),g=Se((b=r.sharedData)==null?void 0:b.get("ub:enterTs")),v=Se((y=r.sharedData)==null?void 0:y.get("ub:dwell"))+(g?Date.now()-g:0);i({dwellMs:p||v||0,clicks:(u==null?void 0:u.__lliUBClicks)??Se((f=r.sharedData)==null?void 0:f.get("ub:clicks")),enters:(u==null?void 0:u.__lliUBEnters)??Se((h=r.sharedData)==null?void 0:h.get("ub:enters")),leaves:(u==null?void 0:u.__lliUBLeaves)??Se((P=r.sharedData)==null?void 0:P.get("ub:leaves")),inView:r.isIntersecting}),l=requestAnimationFrame(c)};return l=requestAnimationFrame(c),()=>{a=!1;try{cancelAnimationFrame(l)}catch{}}},[]),m.jsxs("div",{style:{position:"absolute",top:8,right:8,background:"#1565c0",color:"#fff",fontSize:12,padding:"6px 8px",borderRadius:6,zIndex:5,boxShadow:"0 2px 8px rgba(0,0,0,0.2)",lineHeight:1.4},children:[m.jsxs("div",{style:{display:"flex",alignItems:"center",marginBottom:4},children:[(a=>m.jsx("span",{style:{display:"inline-block",width:8,height:8,borderRadius:8,background:a?"#4caf50":"#f44336",marginRight:6}}))(s.inView),m.jsx("strong",{children:"视口"})]}),m.jsxs("div",{children:["驻留：",Math.round(s.dwellMs/100)/10,"s"]}),m.jsxs("div",{children:["点击：",s.clicks]}),m.jsxs("div",{children:["进入：",s.enters,"，离开：",s.leaves]}),m.jsx("div",{style:{marginTop:4,opacity:.85},children:"提示：点击或慢慢滚动"})]})},{})}}}const F9="UserBehaviorPlugin",V9="用户行为：实时统计每张图片的视口驻留时长、点击次数、进入/离开次数，并在图片上叠加可视化面板，卸载时统一上报。",W9="2.0.0",H9=["viewport","视口与交互","数据","分析"],G9=[{name:"onMount",when:"组件挂载完成、插件注册后执行一次（返回的清理函数在 manager.clear 时逆序执行）",description:"初始化副作用：注册监听、起定时器、建观察器；必须返回清理函数或配合 onUnmount 收尾"},{name:"onUnmount",when:"组件卸载前执行一次",description:"释放监听、定时器与观察器；与 onMount 成对出现，避免泄漏"},{name:"onLoadSuccess",when:"图片成功解码可显示时",description:"拿到最终 displaySrc 做后续动作（上报、预取下张、淡入）"},{name:"onEnterViewport",when:"元素进入视口（IntersectionObserver）",description:"触发懒加载、开始请求、曝光上报"},{name:"onLeaveViewport",when:"元素离开视口",description:"暂停 / 中止在途请求、回收资源"},{name:"transformProps",when:"渲染前链式改写图片 props",description:"补 sizes / 占位色 / 解码策略等"},{name:"renderOverlay",when:"每次渲染，覆盖在图片容器之上",description:"骨架屏、错误占位、水印、加载动画"}],q9=[],Q9="只读取 context 字段（props / state / data），不调用上下文方法",K9=[{name:"enabled",type:"boolean",default:"true",description:"是否启用统计与面板"},{name:"onReport",type:"(data: { src; dwellMs; clicks; enters; leaves }) => void",default:"undefined",description:"卸载时上报回调（默认打印到控制台）"},{name:"showOverlay",type:"boolean",default:"true",description:"是否在图片角落显示统计面板（生产版式建议关闭）"}],Y9=`const BehaviorImage = withPlugins(LazyLoadImageCore, [
  createUserBehaviorPlugin({
    onReport: (data) => {
      // 上报到分析后端
      console.log("behavior", data);
    },
  }),
]);

// 在组件中使用
<BehaviorImage src="https://picsum.photos/id/1015/500/300" alt="用户行为示例" />;`,X9=[{name:"默认统计面板",description:"右上角实时显示驻留、点击、进入/离开数据。",src:"https://picsum.photos/id/1015/500/300",config:{enabled:!0}},{name:"关闭统计",description:"enabled=false 时不渲染面板也不统计。",src:"https://picsum.photos/id/1021/500/300",config:{enabled:!1}}],Z9=["实时统计驻留时长","点击次数统计","进入 / 离开次数统计","视口状态指示（绿/红点）","卸载时统一上报","可通过 enabled 关闭"],J9=["内容热度分析","广告位效果评估","UX 研究与转化漏斗","图片曝光与互动埋点"],e7=["统计结果在卸载时通过 `onReport` 上报（默认打印控制台），示例页用面板实时展示。","`enabled: false` 可整体关闭统计与面板，不影响图片加载。","showOverlay: false 只上报数据、不渲染角标，适合直接接入真实版式。"],t7={name:F9,description:V9,since:W9,tags:H9,events:G9,methods:q9,methodsNote:Q9,config:K9,example:Y9,examples:X9,features:Z9,useCases:J9,notes:e7},n7=Object.assign(c6,{meta:$6}),o7=Object.assign(S6,{meta:N6}),r7=Object.assign(B6,{meta:eM}),s7=Object.assign(tM,{meta:fM}),i7=Object.assign(hM,{meta:EM}),a7=Object.assign(OM,{meta:qM}),l7=Object.assign(BD,{meta:t4}),c7=Object.assign(KM,{meta:cj}),u7=Object.assign(dj,{meta:Cj}),d7=Object.assign(Lj,{meta:Bj}),p7=Object.assign(Fj,{meta:nT}),m7=Object.assign(oT,{meta:yT}),g7=Object.assign(ST,{meta:NT}),f7=Object.assign(UT,{meta:t8}),h7=Object.assign(n8,{meta:h8}),y7=Object.assign(w8,{meta:O8}),v7=Object.assign(M8,{meta:K8}),w7=Object.assign(Z8,{meta:pN}),x7=Object.assign(fN,{meta:_N}),b7=Object.assign(RN,{meta:HN}),P7=Object.assign(qN,{meta:aA}),$7=Object.assign(dA,{meta:CA}),S7=Object.assign(LA,{meta:BA}),C7=Object.assign(HA,{meta:sB}),L7=Object.assign(aB,{meta:xB}),I7=Object.assign($B,{meta:TB}),k7=Object.assign(NB,{meta:ZB}),_7=Object.assign(eU,{meta:gU}),E7=Object.assign(hU,{meta:EU}),R7=Object.assign(zU,{meta:GU}),z7=Object.assign(QU,{meta:lF}),O7=Object.assign(uF,{meta:SF}),D7=Object.assign(IF,{meta:UF}),M7=Object.assign(VF,{meta:oV}),j7=Object.assign(lV,{meta:PV}),T7=Object.assign(SV,{meta:NV}),N7=Object.assign(AV,{meta:JV}),A7=Object.assign(tW,{meta:fW}),B7=Object.assign(hW,{meta:EW}),U7=Object.assign(zW,{meta:GW}),F7=Object.assign(KW,{meta:c9}),V7=Object.assign(u9,{meta:S9}),W7=Object.assign(L9,{meta:B9}),H7=Object.assign(U9,{meta:t7});function G7(e={}){const{ratio:t=4/3}=e;return{name:"aspect-ratio-spacer",version:"1.0.0",config:e,hooks:{transformProps:n=>{var r;const o=(r=n.containerStyle)==null?void 0:r.aspectRatio;return{...n,containerStyle:{...n.containerStyle||{},...o!==void 0?null:{aspectRatio:String(t)}}}},onMount:n=>{var r;const o=(r=n.containerRef)==null?void 0:r.current;if(o)try{o.style.aspectRatio||(o.style.aspectRatio=String(t))}catch{}}}}}const q7="AspectRatioSpacerPlugin",Q7="宽高比占位：在容器上预留固定宽高比，图片加载前后保持布局稳定，杜绝 CLS（布局抖动）。",K7="2.0.0",Y7=["a11y","可访问性","视觉"],X7=[{name:"onMount",when:"组件挂载完成、插件注册后执行一次（返回的清理函数在 manager.clear 时逆序执行）",description:"初始化副作用：注册监听、起定时器、建观察器；必须返回清理函数或配合 onUnmount 收尾"},{name:"transformProps",when:"渲染前链式改写图片 props",description:"补 sizes / 占位色 / 解码策略等"}],Z7=[],J7="只读取 context 字段（props / state / data），不调用上下文方法",eH=[{name:"ratio",type:"number",default:"4/3",description:"宽/高比，如 4/3、16/9，或直接传数字"}],tH=`const RatioImage = withPlugins(LazyLoadImageCore, [
  createAspectRatioSpacerPlugin({ ratio: 4 / 3 }),
]);

<RatioImage src="https://picsum.photos/id/1015/500/300" alt="宽高比占位示例" />;`,nH=[{name:"4:3 占位",description:"常见图文比例，加载前后无跳动。",src:"https://picsum.photos/id/1015/500/300",config:{ratio:1.3333}},{name:"16:9 占位",description:"视频/横幅比例。",src:"https://picsum.photos/id/1021/500/300",config:{ratio:1.7778}},{name:"正方形占位",description:"ratio=1，头像/方形卡片。",src:"https://picsum.photos/id/1026/500/300",config:{ratio:1}}],oH=["预留宽高比","基于 CSS aspect-ratio","防布局抖动（CLS）","任意比例"],rH=["瀑布流/列表占位","LCP 稳定","移动端响应式","避免滚动跳动"],sH=["ratio 在静态预览中建议传数字（如 1.3333 表示 4/3），便于配置表与查看源码展示。"],iH={name:q7,description:Q7,since:K7,tags:Y7,events:X7,methods:Z7,methodsNote:J7,config:eH,example:tH,examples:nH,features:oH,useCases:rH,notes:sH},aH=Object.assign(G7,{meta:iH});function lH(e={}){const{startBlur:t=8,endBlur:n=0,durationMs:o=400}=e;return{name:"blur-up",version:"1.0.0",config:e,hooks:{transformProps:r=>{var p,g,v,w;const s=(((p=r.imageStyle)==null?void 0:p.filter)||"").replace(/blur\([^)]*\)/,"").trim(),i=s?`${s} blur(${t}px)`:`blur(${t}px)`,a=(g=r.imageStyle)==null?void 0:g.transition,l=`${a&&/opacity\s*\d*ms/.test(a)?a:"opacity 180ms ease"}, filter ${o}ms ease`,c=(v=r.imageStyle)==null?void 0:v.willChange,u=c?`${c}, filter`:"filter",d=(w=r.imageStyle)==null?void 0:w.opacity;return{...r,imageStyle:{...r.imageStyle||{},...d===void 0?{opacity:1}:null,filter:i,transition:l,willChange:u}}},onBeforeLoad:r=>{var i;const s=(i=r.imageRef)==null?void 0:i.current;if(!s)return!0;try{const a=(s.style.filter||"").replace(/blur\([^)]*\)/,"").trim();s.__lliPrevFilterNoBlur=a;const l=a?`${a} blur(${t}px)`:`blur(${t}px)`;s.style.filter=l;const c=s.style.transition||"";s.style.transition=c?`${c}, filter ${o}ms ease`:`filter ${o}ms ease`}catch{}return!0},onLoadSuccess:r=>{var i;const s=(i=r.imageRef)==null?void 0:i.current;if(s)try{const a=s.__lliPrevFilterNoBlur??(s.style.filter||"").replace(/blur\([^)]*\)/,"").trim(),l=n>0?a?`${a} blur(${n}px)`:`blur(${n}px)`:a;s.style.filter=l}catch{}},onUnmount:r=>{var i;const s=(i=r.imageRef)==null?void 0:i.current;if(s)try{s.__lliPrevFilterNoBlur!==void 0&&(s.style.filter=s.__lliPrevFilterNoBlur||"",delete s.__lliPrevFilterNoBlur)}catch{}}}}}const cH="BlurUpPlugin",uH="模糊放大占位：加载期为图片注入 blur 滤镜，加载成功后过渡到清晰，避免「白屏 → 清晰图」的突兀切换。",dH="2.0.0",pH=["visual","视觉"],mH=[{name:"transformProps",when:"渲染前链式改写图片 props",description:"补 sizes / 占位色 / 解码策略等"}],gH=[],fH="只读取 context 字段（props / state / data），不调用上下文方法",hH=[{name:"startBlur",type:"number",default:"8",description:"起始模糊半径 px"},{name:"endBlur",type:"number",default:"0",description:"结束模糊半径 px"},{name:"durationMs",type:"number",default:"400",description:"过渡时长 ms"}],yH=`// 模糊渐显：从 8px 模糊过渡到清晰
const BlurImage = withPlugins(LazyLoadImageCore, [
  createBlurUpPlugin({
    startBlur: 8,
    endBlur: 0,
    durationMs: 450,
  }),
]);

<BlurImage src="https://picsum.photos/seed/blurup/600/400" alt="模糊渐显" />;`,vH=[{name:"柔和模糊渐显",description:"8px 起始模糊，450ms 平滑过渡到清晰。",src:"https://picsum.photos/seed/blurup-soft/600/400",config:{startBlur:8,endBlur:0,durationMs:450}},{name:"强模糊长过渡",description:"16px 大模糊，700ms 慢过渡，营造「水雾散去」感。",src:"https://picsum.photos/seed/blurup-strong/600/400",config:{startBlur:16,endBlur:0,durationMs:700}}],wH=["加载期模糊占位，避免白屏突兀","加载成功平滑过渡到清晰","起始 / 结束模糊与时长可调","常与 Skeleton / LQIP 配合"],xH=["图片画廊 / 相册","首屏大图加载","内容型站点图片过渡","与骨架屏互补的视觉占位"],bH=["与 Skeleton 叠加时建议 blur 图层级略高于骨架，过渡更自然。","durationMs 过大会让「清晰」显得迟缓，一般 300~500ms 为宜。"],PH={name:cH,description:uH,since:dH,tags:pH,events:mH,methods:gH,methodsNote:fH,config:hH,example:yH,examples:vH,features:wH,useCases:xH,notes:bH},$H=Object.assign(lH,{meta:PH}),SH="data:image/svg+xml;utf8,"+encodeURIComponent("<svg xmlns='http://www.w3.org/2000/svg' width='400' height='300'><rect width='100%' height='100%' fill='#eceff1'/><g fill='none' stroke='#90a4ae' stroke-width='6'><path d='M60 170 L140 170 L175 110 L235 210 L275 160 L340 160'/><circle cx='200' cy='225' r='8' fill='#90a4ae' stroke='none'/></g><text x='200' y='265' font-family='sans-serif' font-size='22' fill='#607d8b' text-anchor='middle'>离线占位</text></svg>");function CH(e={}){const{offlineSrc:t=SH,cacheName:n="vane-lazy-image-offline",warm:o=!0,showBadge:r=!0}=e,s=i=>i.networkInfo?i.networkInfo.online:typeof navigator<"u"?navigator.onLine:!0;return{name:"offline",version:"2.0.0",config:e,hooks:{onLoad:async i=>{if(s(i)){if(o&&typeof caches<"u")try{const a=await caches.open(n);if(!await a.match(i.src)){const l=await fetch(i.src);l&&l.ok&&await a.put(i.src,l.clone())}}catch{}return}if(typeof caches<"u")try{const a=await(await caches.open(n)).match(i.src);if(a){const l=await a.blob();return URL.createObjectURL(l)}}catch{}return t},renderOverlay:i=>!r||s(i)?null:m.jsx("div",{style:{position:"absolute",top:8,left:8,background:"#c62828",color:"#fff",fontSize:12,padding:"4px 8px",borderRadius:6,zIndex:6},children:"离线模式"})}}}const LH="OfflinePlugin",IH="离线降级（v2 真实实现）：在线时把资源预热进 Cache Storage；离线时优先从缓存取同域资源，否则回退 offlineSrc / 内置 SVG 占位图，并在离线时显示状态徽标。不再是纯提示层。",kH="2.0.0",_H=["loading","加载策略","离线","省流"],EH=[{name:"onLoad",when:"加载流程开始、需要确定最终图片地址时",description:"自定义加载逻辑，返回最终图片 URL（objectURL / dataURL / 原地址）"},{name:"renderOverlay",when:"每次渲染，覆盖在图片容器之上",description:"骨架屏、错误占位、水印、加载动画"}],RH=[],zH="只读取 context 字段（props / state / data），不调用上下文方法",OH=[{name:"offlineSrc",type:"string",default:"内置 SVG 离线占位图（data URI）",description:"离线且无缓存时回退的占位图，建议用 data URI 避免再次走网络"},{name:"cacheName",type:"string",default:"vane-lazy-image-offline",description:"Cache Storage 名称，用于预热与离线回退"},{name:"warm",type:"boolean",default:"true",description:"在线时是否把资源写入 Cache Storage 预热"},{name:"showBadge",type:"boolean",default:"true",description:"离线时是否显示「离线模式」徽标"}],DH=`import { LazyLoadImageCore, createOfflinePlugin, withPlugins } from "vane-lazy-image";

const LazyImage = withPlugins(LazyLoadImageCore, [
  // 离线时回退到内置占位图，并在离线时显示徽标
  createOfflinePlugin({}),
]);

// 同域资源在线时会自动预热，离线可直接从缓存读取
<LazyImage src="/images/photo.jpg" alt="离线降级示例" />`,MH=[{name:"默认离线降级",description:"在线正常加载并预热；断网后同域资源走缓存，跨域资源回退到内置 SVG 占位图，并出现「离线模式」徽标。",src:"https://picsum.photos/seed/offline/800/600",config:{}},{name:"自定义离线占位图",description:"指定 offlineSrc 作为断网回退图（建议 data URI）。",src:"https://picsum.photos/seed/offline2/800/600",config:{offlineSrc:"data:image/svg+xml;utf8,%3Csvg xmlns='http://www.w3.org/2000/svg' width='400' height='300'%3E%3Crect width='100%25' height='100%25' fill='%23ffe0b2'/%3E%3Ctext x='50%25' y='50%25' fill='%23e65100' text-anchor='middle' font-size='22'%3E无网络%3C/text%3E%3C/svg%3E"}},{name:"关闭徽标",description:"showBadge=false，仅做离线资源回退，不显示提示。",src:"https://picsum.photos/seed/offline3/800/600",config:{showBadge:!1}}],jH=["在线预热进 Cache Storage（真实写入）","离线从缓存读取同域资源","无缓存回退 offlineSrc / 内置 SVG 占位","在线 / 离线状态统一取自 GlobalContext（全 App 单处监听）+ 状态徽标","warm / showBadge 可开关"],TH=["弱网 / 断网时的优雅降级","离线优先 PWA 应用的图片缓存","省流用户避免无效请求"],NH=["跨域 no-cors 资源缓存后无法读取为 blob，因此跨域图片离线时会回退到 offlineSrc 占位图（预期降级）；同域资源可真正离线显示。","完整 Service Worker 级别离线由宿主应用负责，本插件提供组件级缓存/回退兜底。"],AH={name:LH,description:IH,since:kH,tags:_H,events:EH,methods:RH,methodsNote:zH,config:OH,example:DH,examples:MH,features:jH,useCases:TH,notes:NH};function BH({src:e,prewarmed:t}){const[n,o]=x.useState(!1);return x.useEffect(()=>{const r=()=>o(t.has(e));r();const s=setInterval(r,400);return()=>clearInterval(s)},[e,t]),m.jsx("div",{style:{position:"absolute",top:8,left:8,background:n?"#2e7d32":"#b35c00",color:"#fff",fontSize:12,padding:"4px 8px",borderRadius:6,zIndex:6,pointerEvents:"none"},children:n?"已预热 ✓":"预热中…"})}const ii=new Set,pa=new Set;async function Gc(e,t,n){if(ii.has(e)||pa.has(e)){if(n)try{console.debug("[CachePrewarm] skipped (already in progress or cached)",e)}catch{}return}ii.add(e);try{const o=new AbortController,r=setTimeout(()=>o.abort(),1e4),s=await fetch(e,{cache:"force-cache",signal:o.signal});if(clearTimeout(r),!s.ok)return;const i=await s.blob();if(t&&is.set(e,i,200),await qp.set(e,i,{dbName:"LLI-Cache",storeName:"images",debug:n}),pa.add(e),n)try{console.debug("[CachePrewarm] prewarmed",{src:e,size:i.size})}catch{}}catch(o){const r=typeof o=="object"&&o!==null&&"name"in o&&o.name==="AbortError";if(n&&!r)try{console.warn("[CachePrewarm] failed",o)}catch{}}finally{ii.delete(e)}}function UH(e={}){const{enabled:t=!0,trigger:n="enter",preferMemory:o=!0,showBadge:r=!1,debug:s=!1}=e;return{name:"cache-prewarm",version:"2.0.0",config:e,hooks:{onMount:i=>{!t||n!=="mount"||is.get(i.src)||Gc(i.src,o,s)},onEnterViewport:i=>{!t||n!=="enter"||is.get(i.src)||Gc(i.src,o,s)},renderOverlay:i=>r?A.createElement(BH,{src:i.src,prewarmed:pa}):null}}}const FH="CachePrewarmPlugin",VH="缓存预热：进入视口或挂载时把图片预热到内存/IDB 缓存。",WH="2.0.0",HH=["cache","缓存"],GH=[{name:"onMount",when:"组件挂载完成、插件注册后执行一次（返回的清理函数在 manager.clear 时逆序执行）",description:"初始化副作用：注册监听、起定时器、建观察器；必须返回清理函数或配合 onUnmount 收尾"},{name:"onEnterViewport",when:"元素进入视口（IntersectionObserver）",description:"触发懒加载、开始请求、曝光上报"},{name:"renderOverlay",when:"每次渲染，覆盖在图片容器之上",description:"骨架屏、错误占位、水印、加载动画"}],qH=[],QH="只读取 context 字段（props / state / data），不调用上下文方法",KH=[{name:"enabled",type:"boolean",default:"true",description:"是否启用预热"},{name:"trigger",type:'"enter" | "mount"',default:'"enter"',description:"触发时机：进入视口或挂载"},{name:"preferMemory",type:"boolean",default:"true",description:"预热时优先写内存"},{name:"debug",type:"boolean",default:"false",description:"是否输出预热调试日志"},{name:"showBadge",type:"boolean",default:"false",description:"是否在卡片上显示预热状态徽标（便于观察）"}],YH=`const LazyImage = withPlugins(LazyLoadImageCore, [
  createCachePrewarmPlugin({
    trigger: "enter",    // 进入视口即预热
    preferMemory: true,  // 优先写入内存缓存
  }),
]);`,XH=[{name:"进入视口预热",description:"图片刚进视口就提前取回并写入缓存，滚动时无等待、点击放大秒开。",config:{trigger:"enter",preferMemory:!0,showBadge:!0}},{name:"挂载即预热",description:"组件挂载即预热，适合首屏已知必看的图（如详情页主图）。",config:{trigger:"mount",preferMemory:!1}}],ZH=["进入视口 / 挂载时提前 fetch 并写入 Memory / IDB 缓存","内置重入保护（prewarming / prewarmed 集合），避免重复预热","优先写入内存（objectURL），跨会话持久交给 IDB"],JH=["商品详情页主图：进入视口即预热，查看大图零延迟","轮播首图：挂载即预热，切换时无白屏"],eG=["依赖 MemoryCachePlugin / IDBCachePlugin 提供底层存储。","预热失败或超时（10s）不影响正常加载，仅跳过预热。","与 CacheIDBPlugin 配合可实现“进入视口即落盘”。"],tG={name:FH,description:VH,since:WH,tags:HH,events:GH,methods:qH,methodsNote:QH,config:KH,example:YH,examples:XH,features:ZH,useCases:JH,notes:eG};function nG(e){const{fallbackSrc:t}=e;return{name:"fallback-image",version:"1.1.0",description:"失败后回退到占位图；每个 src 只回退一次，避免回退图自身失败导致死循环（P0-2）",config:e,hooks:{onLoadError:(n,o)=>{var i,a,l,c;try{(i=n.sharedData)==null||i.set("had-error",!0)}catch{}const r=`fallback-applied:${n.src}`;if((a=n.sharedData)!=null&&a.get(r))return!1;try{(l=n.sharedData)==null||l.set(r,!0)}catch{}const s=(c=n.imageRef)==null?void 0:c.current;if(!s)return!0;try{s.src=t}catch{}return!0}}}}const oG="FallbackImagePlugin",rG="兜底图：图片加载失败时自动切换到备用图片地址，避免出现破图空白，是最基础的失败降级手段。",sG="2.0.0",iG=["network","网络","兜底","降级"],aG=[{name:"onLoadError",when:"加载失败（网络错误、解码失败、超时）",description:"返回 true 表示错误已被处理（如切换备用源），否则继续走默认降级"}],lG=[],cG="只读取 context 字段（props / state / data），不调用上下文方法",uG=[{name:"fallbackSrc",type:"string",description:'兜底图地址，建议使用始终可访问的占位图或 data URI。e.g. "/404.jpg"'}],dG=`import { LazyLoadImageCore, createFallbackImagePlugin, withPlugins } from "vane-lazy-image";

const LazyImage = withPlugins(LazyLoadImageCore, [
  createFallbackImagePlugin({ fallbackSrc: "/404.jpg" }),
]);

<LazyImage src="https://invalid.example.com/broken.png" alt="兜底图示例" />`,pG=[{name:"基础兜底图",description:"原图失败 → 自动切换到兜底图正常显示（演示用始终可访问的占位图）。",src:"https://invalid.example.com/broken.png",config:{fallbackSrc:"https://picsum.photos/seed/fallback/400/300"}}],mG=["onLoadError 直接改写 img.src 为兜底地址","标记 had-error，供 ErrorBadge 等插件联动","兜底成功后仍可配合其它错误插件展示状态"],gG=["保证任何失败都不出现破图","与错误徽标 / 追踪组合，兜底 + 可观测"],fG=["fallbackSrc 为必填；建议使用始终可访问的占位图或 data URI，避免兜底本身再失败","兜底成功后若仍有 ErrorBadge(persistAfterFallback)，可继续显示徽标便于排查"],hG={name:oG,description:rG,since:sG,tags:iG,events:aG,methods:lG,methodsNote:cG,config:uG,example:dG,examples:pG,features:mG,useCases:gG,notes:fG},yG=Object.assign(CH,{meta:AH}),vG=Object.assign(UH,{meta:tG}),wG=Object.assign(nG,{meta:hG}),xG=e=>{const t=(e==null?void 0:e.position)??"bottom",n=(e==null?void 0:e.bg)??"rgba(0,0,0,0.62)",o=(e==null?void 0:e.color)??"#fff";return{name:"caption",hooks:{renderOverlay(r){const s=r.src,i=typeof(e==null?void 0:e.text)=="function"?e==null?void 0:e.text(s):(e==null?void 0:e.text)??"";if(!i)return null;const a={position:"absolute",left:0,right:0,[t]:0,padding:"6px 10px",background:n,color:o,fontSize:12,zIndex:2,pointerEvents:"none"};return m.jsx("div",{style:a,children:i})}}}},bG="CaptionPlugin",PG="图片说明文字覆盖层，支持样式定制。",$G="2.0.0",SG=["visual","视觉"],CG=[{name:"renderOverlay",when:"每次渲染，覆盖在图片容器之上",description:"骨架屏、错误占位、水印、加载动画"}],LG=[],IG="只读取 context 字段（props / state / data），不调用上下文方法",kG=[{name:"text",type:"string | ((src?: string) => string)",default:'""',description:"说明文字；可传函数按 src 派生"},{name:"position",type:'"top" | "bottom"',default:'"bottom"',description:"文字位置"},{name:"bg",type:"string",default:"rgba(0,0,0,0.62)",description:"背景色"},{name:"color",type:"string",default:"#fff",description:"文字颜色"}],_G=`// 底部说明文字
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
});`,EG=[{name:"底部说明",description:"半透明黑底白字，落在图片底部作图注。",src:"https://picsum.photos/seed/cap-bottom/600/400",config:{text:"日落海岸线",position:"bottom"}},{name:"顶部标题条",description:"顶部深色背景条，作标题 / 分类标签。",src:"https://picsum.photos/seed/cap-top/600/400",config:{text:"Gallery • 2026",position:"top",bg:"rgba(0,0,0,0.6)",color:"#fff"}},{name:"暖色图注",description:"自定义暖色背景与文字色，贴合活动主题。",src:"https://picsum.photos/seed/cap-warm/600/400",config:{text:"限时特惠",position:"bottom",bg:"rgba(160,48,16,0.88)",color:"#fff"}}],RG=["顶部 / 底部两种位置","背景与文字颜色可定制","文本支持静态或函数动态派生","作为覆盖层渲染，不干扰图片本身"],zG=["图库 / 相册图注","新闻 / 博客配图说明","商品图标题条","活动海报角标文字"],OG=["text 传函数时可按 src 动态生成，但场景示例画廊使用静态文本以保证实时预览。","与 OverlayInfo 的区别：Caption 聚焦单一说明文案，OverlayInfo 更通用（任意文本 + 触发时机）。"],DG={name:bG,description:PG,since:$G,tags:SG,events:CG,methods:LG,methodsNote:IG,config:kG,example:_G,examples:EG,features:RG,useCases:zG,notes:OG},MG=e=>{const t=(e==null?void 0:e.buttonText)??"Open",n=(e==null?void 0:e.enableLightbox)??!0,o=(e==null?void 0:e.overlayZIndex)??10,r=(e==null?void 0:e.buttonStyle)??{};return{name:"gallery",hooks:{renderOverlay(s){return m.jsx(()=>{const[i,a]=A.useState(!1),[l,c]=A.useState(!1),u=()=>{if(n)a(!0);else{const d=s.src??"";d&&window.open(d,"_blank")}};return A.useEffect(()=>{const d=p=>{p.key==="Escape"&&a(!1)};return window.addEventListener("keydown",d),()=>window.removeEventListener("keydown",d)},[]),m.jsxs(m.Fragment,{children:[m.jsx("div",{style:{position:"absolute",inset:0,zIndex:o,pointerEvents:"auto",background:l?"rgba(0,0,0,0.08)":"transparent",transition:"background 160ms ease"},onMouseEnter:()=>c(!0),onMouseLeave:()=>c(!1),onClick:d=>{d.stopPropagation(),u()}}),m.jsx("button",{type:"button",style:{position:"absolute",top:8,right:8,zIndex:o+1,padding:"8px 12px",borderRadius:8,border:"none",background:"rgba(0,0,0,0.65)",color:"#fff",fontSize:13,boxShadow:"0 2px 6px rgba(0,0,0,0.25)",cursor:"pointer",...r},onClick:d=>{d.stopPropagation(),u()},children:t}),n&&i?m.jsx("div",{style:{position:"fixed",inset:0,background:"rgba(0,0,0,0.85)",display:"flex",alignItems:"center",justifyContent:"center",zIndex:9999,cursor:"zoom-out"},onClick:()=>a(!1),children:m.jsx("img",{src:s.src??"",alt:s.props.alt??"",style:{maxWidth:"90%",maxHeight:"90%"}})}):null]})},{})}}}},jG="GalleryPlugin",TG="画廊灯箱：图片上叠加打开按钮，进入灯箱或新窗口查看原图。",NG="2.0.0",AG=["visual","视觉"],BG=[{name:"renderOverlay",when:"每次渲染，覆盖在图片容器之上",description:"骨架屏、错误占位、水印、加载动画"}],UG=[],FG="只读取 context 字段（props / state / data），不调用上下文方法",VG=[{name:"buttonText",type:"string",default:'"Open"',description:"打开按钮文案"},{name:"enableLightbox",type:"boolean",default:"true",description:"是否启用内置灯箱"},{name:"overlayZIndex",type:"number",default:"10",description:"灯箱层叠顺序"},{name:"buttonStyle",type:"React.CSSProperties",default:"{}",description:"按钮自定义样式（缩略图场景可缩成小号半透明胶囊）"}],WG=`// 点击按钮进入灯箱查看大图
const GalleryImage = withPlugins(LazyLoadImageCore, [
  createGalleryPlugin({
    buttonText: "查看大图",
    enableLightbox: true,
    overlayZIndex: 20,
  }),
]);

<GalleryImage src="https://picsum.photos/seed/gallery/600/400" alt="画廊" />;`,HG=[{name:"灯箱预览",description:"叠加「查看大图」按钮，点击进入全屏灯箱看原图。",src:"https://picsum.photos/seed/gallery-lb/600/400",config:{buttonText:"查看大图",enableLightbox:!0,overlayZIndex:20}},{name:"新窗口打开",description:"关闭内置灯箱，点击按钮以新窗口打开原图。",src:"https://picsum.photos/seed/gallery-win/600/400",config:{buttonText:"Open",enableLightbox:!1}}],GG=["覆盖层打开按钮","内置灯箱查看大图（默认开启）","可改为新窗口打开","灯箱层级可调"],qG=["电商商品图放大查看","相册 / 作品集灯箱","详情页看图","地图 / 截图放大"],QG=["enableLightbox:false 时按钮以新窗口打开原图，适合轻量场景。","灯箱层级 overlayZIndex 需高于页面其它浮层，避免被遮挡。"],KG={name:jG,description:TG,since:NG,tags:AG,events:BG,methods:UG,methodsNote:FG,config:VG,example:WG,examples:HG,features:GG,useCases:qG,notes:QG},YG=e=>{const t=Math.max(1,(e==null?void 0:e.scale)??1.08),n=Math.max(0,(e==null?void 0:e.durationMs)??180);return{name:"hover-zoom",hooks:{onLoadSuccess(o){var a;const r=(a=o.imageRef)==null?void 0:a.current;if(!r)return;r.style.transition=`transform ${n}ms ease`;const s=()=>{r.style.transform=`scale(${t})`},i=()=>{r.style.transform="scale(1)"};r.__lliHoverEnter=s,r.__lliHoverLeave=i,r.addEventListener("mouseenter",s),r.addEventListener("mouseleave",i)},onUnmount(o){var a;const r=(a=o.imageRef)==null?void 0:a.current;if(!r)return;const s=r.__lliHoverEnter,i=r.__lliHoverLeave;s&&r.removeEventListener("mouseenter",s),i&&r.removeEventListener("mouseleave",i),r.style.transition="",r.style.transform=""}}}},XG="HoverZoomPlugin",ZG="悬停放大：鼠标悬停时放大显示图片局部。",JG="2.0.0",eq=["visual","视觉"],tq=[{name:"onUnmount",when:"组件卸载前执行一次",description:"释放监听、定时器与观察器；与 onMount 成对出现，避免泄漏"},{name:"onLoadSuccess",when:"图片成功解码可显示时",description:"拿到最终 displaySrc 做后续动作（上报、预取下张、淡入）"}],nq=[],oq="只读取 context 字段（props / state / data），不调用上下文方法",rq=[{name:"scale",type:"number",default:"1.08",description:"放大倍数"},{name:"durationMs",type:"number",default:"180",description:"过渡时长 ms"}],sq=`// 悬停放大 1.15 倍
const ZoomImage = withPlugins(LazyLoadImageCore, [
  createHoverZoomPlugin({ scale: 1.15, durationMs: 180 }),
]);

<ZoomImage src="https://picsum.photos/seed/hoverzoom/600/400" alt="悬停放大" />;`,iq=[{name:"悬停放大 1.15",description:"鼠标悬停放大到 1.15 倍，180ms 平滑过渡。",src:"https://picsum.photos/seed/hoverzoom-115/600/400",config:{scale:1.15,durationMs:180}},{name:"轻微放大",description:"克制的 1.08 倍，仅给一点点呼吸感。",src:"https://picsum.photos/seed/hoverzoom-108/600/400",config:{scale:1.08,durationMs:200}}],aq=["悬停平滑放大","放大倍数可调","过渡时长可调","常与 Caption / BorderGlow 叠加"],lq=["商品图悬停预览细节","相册悬停聚焦","卡片悬停微交互","与灯箱配合的轻量前奏"],cq=["放大会溢出原尺寸，通常需父容器 overflow:hidden 裁切，仅放大中心区域。","与 Transition 的 fromScale 不同，HoverZoom 仅在 hover 时触发。"],uq={name:XG,description:ZG,since:JG,tags:eq,events:tq,methods:nq,methodsNote:oq,config:rq,example:sq,examples:iq,features:aq,useCases:lq,notes:cq},qc="lli-skeleton-style",dq=`
@keyframes lli-skeleton-shimmer {
  0% { background-position: 200% 0; }
  100% { background-position: -200% 0; }
}
@keyframes lli-skeleton-pulse {
  0%, 100% { opacity: 0.85; }
  50% { opacity: 0.6; }
}
`;function pq(){if(!(typeof document>"u"))try{if(document.getElementById(qc))return;const e=document.createElement("style");e.id=qc,e.textContent=dq,document.head.appendChild(e)}catch{}}function mq({imageState:e,type:t="shimmer",backgroundColor:n="#e5e7eb",highlightColor:o="#f3f4f6",borderRadius:r=4,zIndex:s=2,showWhen:i="loading"}){if(!(i==="always"||e.isLoading))return null;pq();const a={position:"absolute",inset:0,borderRadius:r,overflow:"hidden",pointerEvents:"none",zIndex:s},l={width:"100%",height:"100%",backgroundImage:`linear-gradient(90deg, ${n} 0%, ${n} 35%, ${o} 50%, ${n} 65%, ${n} 100%)`,backgroundSize:"200% 100%",animation:"lli-skeleton-shimmer 1200ms ease-in-out infinite"};return m.jsx("div",{style:a,children:m.jsx("div",{style:t==="shimmer"?l:{width:"100%",height:"100%",background:n,animation:"lli-skeleton-pulse 1200ms ease-in-out infinite"}})})}function gq(e={}){return{name:"skeleton",version:"1.0.0",config:e,hooks:{renderOverlay:t=>m.jsx(mq,{imageState:t.imageState,type:e.type,backgroundColor:e.backgroundColor,highlightColor:e.highlightColor,borderRadius:e.borderRadius,zIndex:e.zIndex,showWhen:e.showWhen})}}}const fq="SkeletonPlugin",hq="骨架屏占位：加载期显示 shimmer/pulse 骨架动画。",yq="2.0.0",vq=["visual","视觉"],wq=[{name:"renderOverlay",when:"每次渲染，覆盖在图片容器之上",description:"骨架屏、错误占位、水印、加载动画"}],xq=[],bq="只读取 context 字段（props / state / data），不调用上下文方法",Pq=[{name:"type",type:'"shimmer" | "pulse"',default:'"shimmer"',description:"动画类型"},{name:"backgroundColor",type:"string",default:"#e5e7eb",description:"底色"},{name:"highlightColor",type:"string",default:"#f3f4f6",description:"shimmer 高亮色"},{name:"borderRadius",type:"number",default:"6",description:"圆角 px"},{name:"zIndex",type:"number",default:"1",description:"层叠顺序"},{name:"showWhen",type:'"always" | "loading"',default:'"loading"',description:"何时显示"}],$q=`// 加载期 shimmer 骨架占位
const SkeletonImage = withPlugins(LazyLoadImageCore, [
  createSkeletonPlugin({
    type: "shimmer",
    borderRadius: 8,
    showWhen: "loading",
  }),
]);

<SkeletonImage src="https://picsum.photos/seed/skeleton/600/400" alt="骨架屏" />;`,Sq=[{name:"Shimmer 骨架",description:"流光骨架，提示内容加载中，圆角 8。",src:"https://picsum.photos/seed/skeleton-shimmer/600/400",config:{type:"shimmer",borderRadius:8,showWhen:"loading"}},{name:"Pulse 骨架",description:"呼吸式明暗变化，更克制的占位动画。",src:"https://picsum.photos/seed/skeleton-pulse/600/400",config:{type:"pulse",backgroundColor:"#eee",highlightColor:"#f5f5f5",borderRadius:8}}],Cq=["shimmer（流光）/ pulse（呼吸）两种动画","底色 / 高亮色 / 圆角可调","加载完成自动淡出","零图片请求，首屏即见"],Lq=["列表 / 卡片加载占位","首屏骨架屏","与 BlurUp / LQIP 配合的兜底占位","弱网环境体验优化"],Iq=['showWhen:"loading" 表示仅在加载期显示，图片就绪后自动让位。',"与 BlurUp 叠加时，建议骨架层级低于模糊图（zIndex 较小）。"],kq={name:fq,description:hq,since:yq,tags:vq,events:wq,methods:xq,methodsNote:bq,config:Pq,example:$q,examples:Sq,features:Cq,useCases:Lq,notes:Iq},_q=Object.assign(xG,{meta:DG}),Eq=Object.assign(MG,{meta:KG}),Rq=Object.assign(YG,{meta:uq}),zq=Object.assign(gq,{meta:kq}),Oq={"top-left":{top:10,left:10},"top-right":{top:10,right:10},"bottom-left":{bottom:10,left:10},"bottom-right":{bottom:10,right:10}},ai=`
  @keyframes priceTagFadeIn {
    from { opacity: 0; transform: translateY(-10px); }
    to { opacity: 1; transform: translateY(0); }
  }
`;function Dq({config:e,context:t}){const{price:n,currency:o="$",position:r="top-right",originalPrice:s,discount:i,showSavings:a=!1,style:l={},animate:c=!0,backgroundColor:u="#c62828",textColor:d="#fff",fetchPrice:p,loadingText:g="加载中...",errorText:v="价格获取失败"}=e,[w,b]=A.useState(null),[y,f]=A.useState(!!p),[h,P]=A.useState(!1);A.useEffect(()=>{if(!p)return;let L=!0;return(async()=>{try{f(!0),P(!1);const j=await p(t);L&&b(j)}catch(j){console.error("[PriceTagPlugin] fetchPrice failed:",j),L&&P(!0)}finally{L&&f(!1)}})(),()=>{L=!1}},[p,t]);const $=(w==null?void 0:w.price)??n,I=(w==null?void 0:w.originalPrice)??s,k=(w==null?void 0:w.discount)??i,_=a&&I!=null&&typeof $=="number"&&typeof I=="number"?I-$:null,S={position:"absolute",...Oq[r],backgroundColor:u,color:d,padding:"8px 12px",borderRadius:4,fontWeight:"bold",fontSize:16,boxShadow:"0 2px 8px rgba(0,0,0,0.15)",zIndex:10,animation:c?"priceTagFadeIn 0.3s ease-out":"none",...l};return y?m.jsxs(m.Fragment,{children:[m.jsx("div",{style:S,children:m.jsx("div",{style:{fontSize:14,opacity:.8},children:g})}),c&&m.jsx("style",{children:ai})]}):h?m.jsxs(m.Fragment,{children:[m.jsx("div",{style:{...S,backgroundColor:"#e74c3c"},children:m.jsx("div",{style:{fontSize:12},children:v})}),c&&m.jsx("style",{children:ai})]}):$==null&&$!==0?null:m.jsxs(m.Fragment,{children:[m.jsxs("div",{style:S,children:[k&&m.jsx("div",{style:{fontSize:11,fontWeight:"normal",marginBottom:2,opacity:.9},children:k}),m.jsx("div",{style:{display:"flex",alignItems:"baseline",gap:4},children:m.jsxs("span",{style:{fontSize:20},children:[o,$]})}),I!=null&&m.jsxs("div",{style:{fontSize:12,textDecoration:"line-through",opacity:.7,marginTop:2},children:[o,I]}),_!=null&&_>0&&m.jsxs("div",{style:{fontSize:11,marginTop:4,backgroundColor:"rgba(255,255,255,0.2)",padding:"2px 6px",borderRadius:2},children:["省 ",o,_.toFixed(2)]})]}),c&&m.jsx("style",{children:ai})]})}function Mq(e={}){return{name:"price-tag",version:"1.0.0",config:e,hooks:{renderOverlay:t=>t.imageState.isLoaded?m.jsx(Dq,{config:e,context:t}):null}}}const jq="PriceTagPlugin",Tq="商品价格标签：在图片上叠加价格信息，支持原价、折扣、节省金额、异步价格获取与淡入动画。",Nq="2.0.0",Aq=["ecommerce","电商核心"],Bq=[{name:"renderOverlay",when:"每次渲染，覆盖在图片容器之上",description:"骨架屏、错误占位、水印、加载动画"}],Uq=[],Fq="只读取 context 字段（props / state / data），不调用上下文方法",Vq=[{name:"price",type:"number",default:"undefined",description:"当前价格"},{name:"currency",type:"string",default:'"$"',description:"货币符号"},{name:"position",type:'"top-left" | "top-right" | "bottom-left" | "bottom-right"',default:'"top-right"',description:"标签位置（四角）"},{name:"originalPrice",type:"number",default:"undefined",description:"原价（划线显示）"},{name:"discount",type:"string",default:"undefined",description:"折扣文案，如 “40% OFF”"},{name:"showSavings",type:"boolean",default:"false",description:"是否计算并显示节省金额"},{name:"backgroundColor",type:"string",default:'"#c62828"',description:"标签背景色"},{name:"textColor",type:"string",default:'"#fff"',description:"标签文字色"},{name:"animate",type:"boolean",default:"true",description:"淡入动画"},{name:"style",type:"React.CSSProperties",default:"{}",description:"自定义叠加样式"},{name:"fetchPrice",type:"(context) => Promise<{ price; originalPrice?; discount? }>",default:"undefined",description:"异步获取价格（API 集成）"},{name:"loadingText",type:"string",default:'"加载中..."',description:"异步加载文案"},{name:"errorText",type:"string",default:'"价格获取失败"',description:"异步失败文案"}],Wq=`// 1. 组装带价格标签的懒加载图片组件
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
});`,Hq=[{name:"完整价格信息（带折扣和节省金额）",description:"原价划线 + 折扣标签 + 自动计算节省金额，落在左下角。",src:"https://picsum.photos/id/180/400/300",config:{price:299.99,currency:"$",position:"bottom-left",originalPrice:499.99,discount:"40% OFF",showSavings:!0}},{name:"简单价格标签",description:"仅当前价 + 货币符号，落在左上角。",src:"https://picsum.photos/id/201/400/300",config:{price:1999,currency:"¥",position:"top-left"}},{name:"自定义样式价格标签",description:"自定义背景色 / 文字色 / 圆角与内边距。",src:"https://picsum.photos/id/250/400/300",config:{price:59.99,currency:"€",position:"bottom-right",backgroundColor:"#4ECDC4",textColor:"#1A535C",style:{borderRadius:"8px",padding:"12px 16px"}}},{name:"异步获取价格（模拟 API）",description:"真实场景通过 fetchPrice 异步拉取价格；示例以静态值代替，可见“查询价格 / 价格查询失败”状态（见用法示例中的 fetchPrice）。",src:"https://picsum.photos/id/260/400/300",config:{currency:"¥",position:"top-right",showSavings:!0,price:1299.99,originalPrice:1999,discount:"限时优惠"}}],Gq=["显示当前价格、原价、折扣标签","计算并显示节省金额","支持多种货币符号","4 个位置可选（四角）","淡入动画效果","完全自定义样式","支持异步价格数据获取（API 集成）","显示加载和错误状态"],qq=["电商产品列表","促销活动页面","特价商品展示","移动端商城","从 API 动态获取价格的场景","跨境电商实时汇率转换"],Qq=["`fetchPrice` 返回后覆盖静态 `price`，接真实商品价格时用它，不必改组件。","配置 `originalPrice` 且高于 `price` 时展示划线价，`showSavings` 额外显示省额。"],Kq={name:jq,description:Tq,since:Nq,tags:Aq,events:Bq,methods:Uq,methodsNote:Fq,config:Vq,example:Wq,examples:Hq,features:Gq,useCases:qq,notes:Qq},Qc={new:{text:"NEW",bg:"#2e7d32",color:"#fff"},hot:{text:"HOT",bg:"#c4390f",color:"#fff"},sale:{text:"SALE",bg:"#c62828",color:"#fff"},limited:{text:"LIMITED",bg:"#6a1b9a",color:"#fff"},bestseller:{text:"BEST",bg:"#b35c00",color:"#fff"},custom:{text:"NEW",bg:"#1565c0",color:"#fff"}},Yq={"top-left":{top:10,left:10},"top-right":{top:10,right:10},"bottom-left":{bottom:10,left:10},"bottom-right":{bottom:10,right:10}},Xq=`
  @keyframes promoBadgeFadeIn {
    from { opacity: 0; transform: scale(0.8); }
    to { opacity: 1; transform: scale(1); }
  }
  @keyframes promoBadgePulse {
    0%, 100% { transform: scale(1); box-shadow: 0 2px 6px rgba(0,0,0,0.2); }
    50% { transform: scale(1.1); box-shadow: 0 4px 12px rgba(0,0,0,0.3); }
  }
`;function Zq({config:e}){const{type:t="hot",text:n,position:o="top-left",color:r,backgroundColor:s,animate:i=!0,pulse:a=!1,ribbon:l=!1,style:c={}}=e,u=Qc[t]??Qc.hot,d=t==="custom"&&n?n:u.text,p=s??u.bg,g=r??u.color,v=l?{padding:"6px 16px",transform:o.includes("left")?"rotate(-45deg) translateX(-20px)":"rotate(45deg) translateX(20px)",transformOrigin:"center",boxShadow:"0 4px 12px rgba(0,0,0,0.3)",top:l?-5:10,left:l?-5:10,right:l?-5:10,bottom:l?-5:10}:{},w={position:"absolute",...Yq[o],backgroundColor:p,color:g,padding:l?"6px 16px":"4px 10px",borderRadius:l?2:4,fontWeight:"bold",fontSize:12,textTransform:"uppercase",letterSpacing:"0.5px",boxShadow:l?"0 4px 12px rgba(0,0,0,0.3)":"0 2px 6px rgba(0,0,0,0.2)",zIndex:10,animation:i?a?"promoBadgePulse 1.5s ease-in-out infinite":"promoBadgeFadeIn 0.4s ease-out":"none",...v,...c};return m.jsxs(m.Fragment,{children:[m.jsx("div",{style:w,children:d}),i&&m.jsx("style",{children:Xq})]})}let Jq=0;function eQ(e={}){return{name:`promo-badge-${++Jq}`,version:"1.0.0",config:e,hooks:{renderOverlay:t=>t.imageState.isLoaded?m.jsx(Zq,{config:e}):null}}}const tQ="PromoBadgePlugin",nQ="促销角标：在商品图片上显示 NEW/HOT/SALE 等促销标签，支持脉冲动画和丝带样式，可叠加多个。",oQ="2.0.0",rQ=["ecommerce","电商核心"],sQ=[{name:"renderOverlay",when:"每次渲染，覆盖在图片容器之上",description:"骨架屏、错误占位、水印、加载动画"}],iQ=[],aQ="只读取 context 字段（props / state / data），不调用上下文方法",lQ=[{name:"type",type:'"new" | "hot" | "sale" | "limited" | "bestseller" | "custom"',default:'"hot"',description:"预设标签类型"},{name:"text",type:"string",default:"undefined",description:"自定义文案（type=custom 时生效）"},{name:"position",type:'"top-left" | "top-right" | "bottom-left" | "bottom-right"',default:'"top-left"',description:"角标位置（四角）"},{name:"backgroundColor",type:"string",default:"undefined",description:"背景色"},{name:"color",type:"string",default:"undefined",description:"文字色"},{name:"animate",type:"boolean",default:"true",description:"淡入动画"},{name:"pulse",type:"boolean",default:"false",description:"脉冲呼吸动画"},{name:"ribbon",type:"boolean",default:"false",description:"丝带样式（倾斜 45°）"},{name:"style",type:"React.CSSProperties",default:"{}",description:"自定义叠加样式"}],cQ=`// 1. 单个促销角标
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
<HotSaleImage src="https://picsum.photos/id/220/500/400" alt="促销商品" />;`,uQ=[{name:"NEW 新品标签",description:"左上角绿色 NEW 角标。",src:"https://picsum.photos/id/168/300/300",config:{type:"new",position:"top-left"}},{name:"HOT 热门标签（脉冲动画）",description:"右上角红色 HOT，带脉冲呼吸效果。",src:"https://picsum.photos/id/175/300/300",config:{type:"hot",position:"top-right",pulse:!0}},{name:"SALE 促销丝带",description:"右上角红色丝带（倾斜 45°）。",src:"https://picsum.photos/id/188/300/300",config:{type:"sale",position:"top-right",ribbon:!0}},{name:"LIMITED 限量标签",description:"右上角紫色 LIMITED，带脉冲。",src:"https://picsum.photos/id/196/300/300",config:{type:"limited",position:"top-right",pulse:!0}},{name:"BESTSELLER 畅销标签",description:"右下角橙色 BEST 角标。",src:"https://picsum.photos/id/203/300/300",config:{type:"bestseller",position:"bottom-right"}},{name:"自定义标签（VIP 专享）",description:"自定义文案、背景色与文字色。",src:"https://picsum.photos/id/211/300/300",config:{type:"custom",text:"VIP专享",position:"top-left",backgroundColor:"#FFD700",color:"#000"}},{name:"多个标签组合",description:"一张图同时叠加 NEW + SALE（丝带）+ HOT（脉冲），不同位置不同样式。",src:"https://picsum.photos/id/220/500/400",configs:[{type:"new",position:"top-left"},{type:"sale",position:"top-right",ribbon:!0},{type:"hot",position:"bottom-right",pulse:!0}]}],dQ=["6 种预设类型：NEW / HOT / SALE / LIMITED / BESTSELLER / custom","支持自定义文字、背景色、文字颜色","脉冲动画效果（吸引注意力）","丝带样式（倾斜 45°）","4 个位置可选（四角）","支持同一图片显示多个标签"],pQ=["新品上市标记","热销商品突出","促销活动标识","限时限量提醒","VIP / 会员专享"],mQ=["`type` 只是预设（new/hot/sale/limited/bestseller），`text` 可覆盖预设文案与颜色。","`ribbon: true` 渲染角部绶带，容器需 overflow:hidden 才不会溢出圆角。"],gQ={name:tQ,description:nQ,since:oQ,tags:rQ,events:sQ,methods:iQ,methodsNote:aQ,config:lQ,example:cQ,examples:uQ,features:dQ,useCases:pQ,notes:mQ},Kc={"in-stock":{text:"有货",bg:"#4CAF50",color:"#fff",icon:"✓"},"out-of-stock":{text:"缺货",bg:"#F44336",color:"#fff",icon:"✕"},"low-stock":{text:"库存紧张",bg:"#FF9800",color:"#fff",icon:"⚠"},"pre-order":{text:"预订",bg:"#2196F3",color:"#fff",icon:"🕐"}},fQ={"top-left":{top:10,left:10},"top-right":{top:10,right:10},"bottom-left":{bottom:10,left:10},"bottom-right":{bottom:10,right:10}},hQ=`
  @keyframes inventoryFadeIn {
    from { opacity: 0; transform: translateY(-5px); }
    to { opacity: 1; transform: translateY(0); }
  }
`;function yQ({config:e}){const{status:t,stockCount:n,lowStockThreshold:o=10,showBadge:r=!0,autoRefresh:s=!1,refreshInterval:i=3e4,fetchStock:a,onStatusChange:l,position:c="top-right",style:u={}}=e,[d,p]=A.useState(t),[g,v]=A.useState(n);if(A.useEffect(()=>{if(!s||!a)return;const f=setInterval(async()=>{try{const h=await a();h.status!==void 0&&p(h.status),h.count!==void 0&&v(h.count),h.status!==void 0&&(l==null||l(h.status))}catch(h){console.error("[InventoryStatusPlugin] fetchStock failed:",h)}},i);return()=>clearInterval(f)},[s,a,i,l]),!r)return null;let w=d??"in-stock";g!==void 0&&(g===0?w="out-of-stock":g<=o?w="low-stock":w!=="pre-order"&&(w="in-stock"));const b=Kc[w]??Kc["in-stock"],y={position:"absolute",...fQ[c],backgroundColor:b.bg,color:b.color,padding:"6px 12px",borderRadius:4,fontSize:13,fontWeight:600,boxShadow:"0 2px 8px rgba(0,0,0,0.15)",zIndex:10,display:"flex",alignItems:"center",gap:4,animation:"inventoryFadeIn 0.3s ease-out",...u};return m.jsxs(m.Fragment,{children:[m.jsxs("div",{style:y,children:[m.jsx("span",{children:b.icon}),m.jsx("span",{children:b.text}),g!==void 0&&w!=="out-of-stock"&&m.jsxs("span",{style:{marginLeft:4,fontSize:11,opacity:.9},children:["(",g,")"]})]}),m.jsx("style",{children:hQ})]})}function vQ(e={}){return{name:"inventory-status",version:"1.0.0",config:e,hooks:{renderOverlay:t=>t.imageState.isLoaded?m.jsx(yQ,{config:e}):null}}}const wQ="InventoryStatusPlugin",xQ="库存状态：实时显示商品库存状态（有货/低库存/缺货/预订），支持自动刷新和低库存预警。",bQ="2.0.0",PQ=["ecommerce","电商核心"],$Q=[{name:"renderOverlay",when:"每次渲染，覆盖在图片容器之上",description:"骨架屏、错误占位、水印、加载动画"}],SQ=[],CQ="只读取 context 字段（props / state / data），不调用上下文方法",LQ=[{name:"status",type:'"in-stock" | "out-of-stock" | "low-stock" | "pre-order"',default:'"in-stock"',description:"初始库存状态"},{name:"stockCount",type:"number",default:"undefined",description:"库存数量"},{name:"lowStockThreshold",type:"number",default:"10",description:"低库存阈值"},{name:"showBadge",type:"boolean",default:"true",description:"是否显示角标"},{name:"autoRefresh",type:"boolean",default:"false",description:"是否自动刷新库存"},{name:"refreshInterval",type:"number",default:"30000",description:"刷新间隔（毫秒）"},{name:"fetchStock",type:"() => Promise<{ status?; count? }>",default:"undefined",description:"自定义库存获取函数"},{name:"onStatusChange",type:"(status) => void",default:"undefined",description:"状态变更回调"},{name:"position",type:'"top-left" | "top-right" | "bottom-left" | "bottom-right"',default:'"top-right"',description:"角标位置"},{name:"style",type:"React.CSSProperties",default:"{}",description:"自定义叠加样式"}],IQ=`// 1. 静态库存状态
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
<StockImage src="https://picsum.photos/id/164/280/280" alt="商品图" />;`,kQ=[{name:"有货（100 件）",description:"绿色角标，显示库存数量。",src:"https://picsum.photos/id/152/280/280",config:{status:"in-stock",stockCount:100,showBadge:!0,position:"top-right"}},{name:"库存紧张（5 件）",description:"低于阈值 → 橙色预警角标。",src:"https://picsum.photos/id/164/280/280",config:{status:"low-stock",stockCount:5,lowStockThreshold:10,showBadge:!0,position:"top-right"}},{name:"缺货",description:"红色缺货角标。",src:"https://picsum.photos/id/177/280/280",config:{status:"out-of-stock",stockCount:0,showBadge:!0,position:"top-right"}},{name:"预订",description:"蓝色预订角标。",src:"https://picsum.photos/id/183/280/280",config:{status:"pre-order",showBadge:!0,position:"top-right"}},{name:"自动刷新库存（每 5 秒）",description:"通过 fetchStock 定时刷新状态（示例中省略函数，可配 interval）。",src:"https://picsum.photos/id/225/400/300",config:{status:"in-stock",stockCount:50,showBadge:!0,autoRefresh:!0,refreshInterval:5e3,position:"top-right"}}],_Q=["4 种库存状态：有货 / 低库存 / 缺货 / 预订","显示实时库存数量","低库存阈值预警","自动刷新库存（可配置间隔）","库存变更回调通知","颜色编码（绿=有货 / 橙=低库存 / 红=缺货 / 蓝=预订）"],EQ=["电商产品列表页","库存管理系统","在线商城首页","门票 / 课程售卖","限时抢购活动"],RQ=["`stockCount <= lowStockThreshold` 时会自动归为「库存紧张」，无需手动改 `status`。","`autoRefresh` 需配合 `refreshInterval` 与 `fetchStock` 才有意义，静态示例页不会轮询。"],zQ={name:wQ,description:xQ,since:bQ,tags:PQ,events:$Q,methods:SQ,methodsNote:CQ,config:LQ,example:IQ,examples:kQ,features:_Q,useCases:EQ,notes:RQ},Yc=["rgb(255, 99, 71)","rgb(70, 130, 180)","rgb(60, 179, 113)","rgb(255, 215, 0)","rgb(238, 130, 238)"],OQ={bottom:{bottom:10,left:10,right:10},overlay:{top:"50%",left:"50%",transform:"translate(-50%, -50%)"},"bottom-center":{bottom:10,left:"50%",transform:"translateX(-50%)"}},DQ=`
  @keyframes colorSwatchFadeIn {
    from { opacity: 0; transform: translateY(10px); }
    to { opacity: 1; transform: translateY(0); }
  }
`;function Xc(e,t){const n=document.createElement("canvas"),o=n.getContext("2d");if(!o)return[];const r=.1;n.width=e.naturalWidth*r,n.height=e.naturalHeight*r;try{o.drawImage(e,0,0,n.width,n.height);const s=o.getImageData(0,0,n.width,n.height).data,i=new Map;for(let l=0;l<s.length;l+=4*10){const c=s[l],u=s[l+1],d=s[l+2];if(s[l+3]<128||c>240&&u>240&&d>240||c<15&&u<15&&d<15)continue;const p=`rgb(${Math.round(c/32)*32}, ${Math.round(u/32)*32}, ${Math.round(d/32)*32})`;i.set(p,(i.get(p)||0)+1)}const a=Array.from(i.entries()).sort((l,c)=>c[1]-l[1]).slice(0,t).map(([l])=>l);return a.length?a:Yc.slice(0,t)}catch(s){return console.error("[ColorSwatchPlugin] extractColors failed (可能是跨域问题):",s),Yc.slice(0,t)}}function Zc(e){const t=e.match(/\d+/g);if(!t)return e;const[n,o,r]=t.map(Number);return`#${((1<<24)+(n<<16)+(o<<8)+r).toString(16).slice(1)}`}function MQ({config:e,context:t}){const{maxColors:n=5,showPalette:o=!0,position:r="bottom",onColorSelect:s,swatchSize:i=32,interactive:a=!0,style:l={},showColorCode:c=!1,gap:u=8}=e,[d,p]=A.useState([]),[g,v]=A.useState(null),[w,b]=A.useState(null);if(A.useEffect(()=>{var P;const h=(P=t.imageRef)==null?void 0:P.current;if(h)if(h.complete&&h.naturalWidth>0)p(Xc(h,n));else{const $=()=>p(Xc(h,n));return h.addEventListener("load",$),()=>h.removeEventListener("load",$)}},[t.imageRef,n]),!o||d.length===0)return null;const y=h=>{a&&(v(h),s==null||s(h))},f={position:"absolute",...OQ[r],display:"flex",alignItems:"center",gap:`${u}px`,padding:8,backgroundColor:"rgba(255, 255, 255, 0.9)",borderRadius:8,boxShadow:"0 2px 12px rgba(0,0,0,0.15)",zIndex:10,animation:"colorSwatchFadeIn 0.4s ease-out",...l};return m.jsxs(m.Fragment,{children:[m.jsx("div",{style:f,children:d.map(h=>{const P=g===h,$=w===h,I={width:`${i}px`,height:`${i}px`,backgroundColor:h,borderRadius:"50%",cursor:a?"pointer":"default",border:P?"3px solid #333":"2px solid rgba(0,0,0,0.1)",boxShadow:$?"0 4px 12px rgba(0,0,0,0.3)":"0 2px 6px rgba(0,0,0,0.15)",transform:$?"scale(1.15)":"scale(1)",transition:"all 0.2s ease",position:"relative"};return m.jsxs("div",{style:{textAlign:"center"},children:[m.jsx("div",{style:I,onClick:()=>y(h),onMouseEnter:()=>b(h),onMouseLeave:()=>b(null),title:Zc(h)}),c&&m.jsx("div",{style:{fontSize:10,marginTop:4,color:"#666",fontFamily:"monospace"},children:Zc(h)})]},h)})}),m.jsx("style",{children:DQ})]})}function jQ(e={}){return{name:"color-swatch",version:"1.0.0",config:e,hooks:{transformProps:t=>({...t,crossOrigin:t.crossOrigin??"anonymous"}),onMount:t=>{var n,o;try{(o=(n=t.imageRef)==null?void 0:n.current)==null||o.setAttribute("crossOrigin","anonymous")}catch{}},renderOverlay:t=>{var n;return!t.imageState.isLoaded||!((n=t.imageRef)!=null&&n.current)?null:m.jsx(MQ,{config:e,context:t})}}}}const TQ="ColorSwatchPlugin",NQ="颜色选择器：自动提取商品图片主要颜色，支持交互选择、颜色代码显示与悬停放大。",AQ="2.0.0",BQ=["ecommerce","电商核心"],UQ=[{name:"onMount",when:"组件挂载完成、插件注册后执行一次（返回的清理函数在 manager.clear 时逆序执行）",description:"初始化副作用：注册监听、起定时器、建观察器；必须返回清理函数或配合 onUnmount 收尾"},{name:"transformProps",when:"渲染前链式改写图片 props",description:"补 sizes / 占位色 / 解码策略等"},{name:"renderOverlay",when:"每次渲染，覆盖在图片容器之上",description:"骨架屏、错误占位、水印、加载动画"}],FQ=[],VQ="只读取 context 字段（props / state / data），不调用上下文方法",WQ=[{name:"maxColors",type:"number",default:"5",description:"提取颜色数量上限"},{name:"showPalette",type:"boolean",default:"true",description:"是否显示色板"},{name:"position",type:'"bottom" | "overlay" | "bottom-center"',default:'"bottom"',description:"色板位置"},{name:"swatchSize",type:"number",default:"32",description:"色块尺寸（px）"},{name:"interactive",type:"boolean",default:"true",description:"是否可点击选择"},{name:"showColorCode",type:"boolean",default:"false",description:"是否显示 HEX 代码"},{name:"gap",type:"number",default:"8",description:"色块间距（px）"},{name:"onColorSelect",type:"(color) => void",default:"undefined",description:"颜色选择回调"},{name:"style",type:"React.CSSProperties",default:"{}",description:"自定义叠加样式"}],HQ=`// 1. 可交互色板（点击选择颜色）
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
<SwatchImage src="https://picsum.photos/id/100/500/400" alt="服装图" />;`,GQ=[{name:"底部色板（可交互）",description:"点击色块可选择颜色，悬停放大。",src:"https://picsum.photos/id/100/500/400",config:{maxColors:6,showPalette:!0,position:"bottom",interactive:!0,swatchSize:36}},{name:"居中叠加",description:"色板居中浮于图片之上。",src:"https://picsum.photos/id/106/500/400",config:{maxColors:5,showPalette:!0,position:"overlay",interactive:!0,swatchSize:40,gap:10}},{name:"显示颜色代码",description:"每个色块下方显示 HEX 代码。",src:"https://picsum.photos/id/116/500/400",config:{maxColors:5,showPalette:!0,position:"bottom-center",interactive:!0,swatchSize:32,showColorCode:!0,gap:12}},{name:"多颜色小色块",description:"更多颜色、更小色块、更小间距。",src:"https://picsum.photos/id/129/500/400",config:{maxColors:8,showPalette:!0,position:"bottom",interactive:!0,swatchSize:24,gap:6}}],qQ=["跨域提示：本示例使用的 picsum.photos 图片没有 CORS 头，无法提取真实颜色，当前显示的是默认演示色。实际使用中请确保图片服务器配置了正确的 CORS 头，或使用同域图片，插件才能正确提取图片的真实颜色。"],QQ=["自动提取图片主要颜色","智能过滤黑白和透明色","可配置提取颜色数量","3 种显示位置（底部 / 居中 / 底部居中）","交互式颜色选择","显示 HEX 颜色代码","悬停放大效果","选中状态标识"],KQ=["服装多颜色选择","艺术品 / 设计作品配色","家具 / 装饰品颜色筛选","鞋包配色选择","礼品个性化定制"],YQ={name:TQ,description:NQ,since:AQ,tags:BQ,events:UQ,methods:FQ,methodsNote:VQ,config:WQ,example:HQ,examples:GQ,notes:qQ,features:QQ,useCases:KQ},Jc={facebook:{name:"Facebook",icon:"f",color:"#1877F2",getShareUrl:e=>`https://www.facebook.com/sharer/sharer.php?u=${encodeURIComponent(e.url)}`},twitter:{name:"Twitter",icon:"𝕏",color:"#000000",getShareUrl:e=>`https://twitter.com/intent/tweet?url=${encodeURIComponent(e.url)}&text=${encodeURIComponent(e.title)}`},pinterest:{name:"Pinterest",icon:"P",color:"#E60023",getShareUrl:e=>`https://pinterest.com/pin/create/button/?url=${encodeURIComponent(e.url)}&media=${encodeURIComponent(e.ogImage)}&description=${encodeURIComponent(e.description||e.title)}`},linkedin:{name:"LinkedIn",icon:"in",color:"#0A66C2",getShareUrl:e=>`https://www.linkedin.com/sharing/share-offsite/?url=${encodeURIComponent(e.url)}`},whatsapp:{name:"WhatsApp",icon:"W",color:"#25D366",getShareUrl:e=>`https://wa.me/?text=${encodeURIComponent(e.title+" "+e.url)}`},wechat:{name:"WeChat",icon:"微",color:"#07C160",getShareUrl:e=>e.url}},XQ={small:{button:28,icon:14},medium:{button:36,icon:16},large:{button:44,icon:18}},ZQ={"top-right":{top:10,right:10},"bottom-right":{bottom:10,right:10},"top-left":{top:10,left:10},"bottom-left":{bottom:10,left:10}},JQ=`
  @keyframes shareButtonSlideIn {
    from { opacity: 0; transform: translateX(20px); }
    to { opacity: 1; transform: translateX(0); }
  }
`;function eK({config:e,context:t}){const{platforms:n=["facebook","twitter","pinterest"],position:o="top-right",showOnHover:r=!1,url:s,title:i="分享图片",description:a="",ogImage:l,onShare:c,style:u={},size:d="medium"}=e,[p,g]=A.useState(!r),[v,w]=A.useState(!1),b=s??(typeof window<"u"?window.location.href:""),y={url:b,title:i,description:a,ogImage:l??t.src},f=I=>{var _;const k=Jc[I];k&&(I==="wechat"?(alert("请复制链接到微信分享"),(_=navigator.clipboard)==null||_.writeText(b)):window.open(k.getShareUrl(y),"_blank","width=600,height=400"),c==null||c(I))},h=XQ[d],P={position:"absolute",...ZQ[o],display:"flex",flexDirection:"column",gap:6,zIndex:10,opacity:p?1:0,transform:p?"scale(1)":"scale(0.8)",transition:"all 0.3s ease",pointerEvents:"auto",...u},$={width:h.button,height:h.button,borderRadius:"50%",backgroundColor:"#fff",border:"2px solid #ddd",display:"flex",alignItems:"center",justifyContent:"center",cursor:"pointer",boxShadow:"0 2px 8px rgba(0,0,0,0.15)",fontSize:h.icon,fontWeight:"bold",transition:"all 0.2s ease"};return m.jsxs(m.Fragment,{children:[r&&m.jsx("div",{style:{position:"absolute",top:0,left:0,right:0,bottom:0,zIndex:9,pointerEvents:"auto"},onMouseEnter:()=>g(!0),onMouseLeave:()=>{g(!1),w(!1)}}),m.jsxs("div",{style:P,children:[m.jsx("div",{style:$,onClick:()=>w(!v),title:"分享",children:m.jsx("span",{children:"📤"})}),v&&n.map((I,k)=>{const _=Jc[I];if(!_)return null;const S={width:h.button,height:h.button,borderRadius:"50%",backgroundColor:_.color,color:"#fff",border:"none",display:"flex",alignItems:"center",justifyContent:"center",cursor:"pointer",boxShadow:"0 2px 8px rgba(0,0,0,0.15)",fontSize:h.icon,fontWeight:"bold",animation:`shareButtonSlideIn 0.3s ease-out ${k*.05}s both`,transition:"all 0.2s ease"};return m.jsx("div",{style:S,onClick:()=>f(I),onMouseEnter:L=>L.currentTarget.style.transform="scale(1.1)",onMouseLeave:L=>L.currentTarget.style.transform="scale(1)",title:`分享到 ${_.name}`,children:_.icon},I)})]}),m.jsx("style",{children:JQ})]})}function tK(e={}){return{name:"social-share",version:"1.0.0",config:e,hooks:{renderOverlay:t=>t.imageState.isLoaded?m.jsx(eK,{config:e,context:t}):null}}}const nK="SocialSharePlugin",oK="社交分享：在商品图片上显示社交分享按钮，支持 6 大平台、悬停展开、自定义尺寸与分享回调。",rK="2.0.0",sK=["ecommerce","电商核心"],iK=[{name:"renderOverlay",when:"每次渲染，覆盖在图片容器之上",description:"骨架屏、错误占位、水印、加载动画"}],aK=[],lK="只读取 context 字段（props / state / data），不调用上下文方法",cK=[{name:"platforms",type:'Array<"facebook"|"twitter"|"pinterest"|"linkedin"|"whatsapp"|"wechat">',default:'["facebook","twitter","pinterest"]',description:"分享平台列表"},{name:"position",type:'"top-left" | "top-right" | "bottom-left" | "bottom-right"',default:'"top-right"',description:"主按钮位置"},{name:"showOnHover",type:"boolean",default:"false",description:"悬停显示模式"},{name:"title",type:"string",default:'"分享图片"',description:"分享标题"},{name:"description",type:"string",default:'""',description:"分享描述"},{name:"ogImage",type:"string",default:"undefined",description:"Pinterest 等使用的媒体图"},{name:"size",type:'"small" | "medium" | "large"',default:'"medium"',description:"按钮尺寸"},{name:"onShare",type:"(platform) => void",default:"undefined",description:"分享回调"},{name:"style",type:"React.CSSProperties",default:"{}",description:"自定义容器样式"}],uK=`// 1. 指定分享平台，点击展开具体入口
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
<ShareImage src="https://picsum.photos/id/237/500/400" alt="商品图" />;`,dK=[{name:"默认分享按钮",description:"点击主按钮展开具体平台，再点平台进行分享。",src:"https://picsum.photos/id/237/500/400",config:{platforms:["facebook","twitter","pinterest"],position:"top-right",showOnHover:!1,title:"Amazing Product",description:"Check out this amazing product!"}},{name:"悬停显示（鼠标悬停时出现）",description:"默认隐藏，鼠标悬停图片才显示分享按钮。",src:"https://picsum.photos/id/247/500/400",config:{platforms:["facebook","twitter","linkedin","whatsapp"],position:"top-right",showOnHover:!0,size:"medium"}},{name:"更多平台（包含微信）",description:"小尺寸、右下角，覆盖 6 个平台。",src:"https://picsum.photos/id/257/500/400",config:{platforms:["facebook","twitter","pinterest","linkedin","whatsapp","wechat"],position:"bottom-right",showOnHover:!1,size:"small"}},{name:"大尺寸按钮",description:"左上角大尺寸分享按钮。",src:"https://picsum.photos/id/267/500/400",config:{platforms:["facebook","twitter","pinterest"],position:"top-left",showOnHover:!1,size:"large"}}],pK=["支持 6 大社交平台：Facebook / Twitter / Pinterest / LinkedIn / WhatsApp / WeChat","悬停显示模式","3 种尺寸可选（small / medium / large）","4 个位置可选","展开 / 收起动画","分享回调通知","自定义分享标题和描述"],mK=["电商产品分享","内容营销推广","作品集展示","照片 / 图片社区","礼物推荐分享","房产 / 旅游分享"],gK=["`showOnHover: true` 时分享条只在悬停出现；示例页默认常驻便于观察。","微信没有可直接打开的分享 URL，走 `onShare` 回调由业务方接入。"],fK={name:nK,description:oK,since:rK,tags:sK,events:iK,methods:aK,methodsNote:lK,config:cK,example:uK,examples:dK,features:pK,useCases:mK,notes:gK},hK={small:{size:48,iconSize:20},medium:{size:64,iconSize:28},large:{size:80,iconSize:36}},yK={center:{top:"50%",left:"50%",transform:"translate(-50%, -50%)"},"top-left":{top:20,left:20},"top-right":{top:20,right:20},"bottom-left":{bottom:20,left:20},"bottom-right":{bottom:20,right:20}},eu=`
  @keyframes videoModalFadeIn { from { opacity: 0; } to { opacity: 1; } }
  @keyframes videoPosterPulse {
    0%, 100% { transform: scale(1); }
    50% { transform: scale(1.05); }
  }
`;function vK({config:e}){const{videoUrl:t,autoPlay:n=!0,loop:o=!1,muted:r=!0,playButtonPosition:s="center",playButtonSize:i="large",playButtonStyle:a={},showPlayButton:l=!0,onPlay:c,playInModal:u=!0,playIcon:d}=e,[p,g]=A.useState(!1),v=()=>{g(!0),c==null||c()},w=hK[i],b={position:"absolute",...yK[s],width:w.size,height:w.size,borderRadius:"50%",backgroundColor:"rgba(0, 0, 0, 0.7)",border:"3px solid rgba(255, 255, 255, 0.9)",display:"flex",alignItems:"center",justifyContent:"center",cursor:"pointer",zIndex:10,transition:"all 0.3s ease",...a};return p&&u?m.jsxs(m.Fragment,{children:[m.jsxs("div",{style:{position:"fixed",top:0,left:0,right:0,bottom:0,backgroundColor:"rgba(0, 0, 0, 0.9)",zIndex:9999,display:"flex",alignItems:"center",justifyContent:"center",animation:"videoModalFadeIn 0.3s ease-out"},onClick:()=>g(!1),children:[m.jsx("button",{style:{position:"absolute",top:20,right:20,width:40,height:40,borderRadius:"50%",backgroundColor:"rgba(255,255,255,0.2)",border:"2px solid white",color:"white",fontSize:24,cursor:"pointer",display:"flex",alignItems:"center",justifyContent:"center",zIndex:10001},onClick:()=>g(!1),children:"×"}),m.jsx("video",{src:t,controls:!0,autoPlay:n,loop:o,muted:r,style:{maxWidth:"90%",maxHeight:"90%",borderRadius:8,boxShadow:"0 10px 40px rgba(0,0,0,0.5)"},onClick:y=>y.stopPropagation()})]}),m.jsx("style",{children:eu})]}):p&&!u?m.jsxs("div",{style:{position:"absolute",top:0,left:0,right:0,bottom:0,backgroundColor:"#000",zIndex:10},children:[m.jsx("button",{style:{position:"absolute",top:10,right:10,width:32,height:32,borderRadius:"50%",backgroundColor:"rgba(255,255,255,0.2)",border:"2px solid white",color:"white",fontSize:20,cursor:"pointer",display:"flex",alignItems:"center",justifyContent:"center",zIndex:11},onClick:()=>g(!1),children:"×"}),m.jsx("video",{src:t,controls:!0,autoPlay:n,loop:o,muted:r,style:{width:"100%",height:"100%",objectFit:"contain"}})]}):l?m.jsxs(m.Fragment,{children:[m.jsx("div",{style:b,onClick:v,onMouseEnter:y=>{y.currentTarget.style.backgroundColor="rgba(0, 0, 0, 0.85)",s==="center"?y.currentTarget.style.transform="translate(-50%, -50%) scale(1.1)":y.currentTarget.style.transform="scale(1.1)"},onMouseLeave:y=>{y.currentTarget.style.backgroundColor="rgba(0, 0, 0, 0.7)",s==="center"?y.currentTarget.style.transform="translate(-50%, -50%) scale(1)":y.currentTarget.style.transform="scale(1)"},title:"播放视频",children:d??m.jsx("svg",{width:w.iconSize,height:w.iconSize,viewBox:"0 0 24 24",fill:"white",style:{marginLeft:2},children:m.jsx("path",{d:"M8 5v14l11-7z"})})}),m.jsx("style",{children:eu})]}):null}function wK(e){return{name:"video-poster",version:"1.0.0",config:e,hooks:{renderOverlay:t=>t.imageState.isLoaded?m.jsx(vK,{config:e}):null}}}const xK="VideoPosterPlugin",bK="视频海报：将图片作为视频封面，点击播放视频（模态框或内联），支持自动播放、循环、静音与自定义按钮。",PK="2.0.0",$K=["ecommerce","电商核心"],SK=[{name:"renderOverlay",when:"每次渲染，覆盖在图片容器之上",description:"骨架屏、错误占位、水印、加载动画"}],CK=[],LK="只读取 context 字段（props / state / data），不调用上下文方法",IK=[{name:"videoUrl",type:"string",default:"undefined",description:"视频 URL"},{name:"autoPlay",type:"boolean",default:"true",description:"自动播放"},{name:"loop",type:"boolean",default:"false",description:"循环播放"},{name:"muted",type:"boolean",default:"true",description:"静音（移动端自动播放需静音）"},{name:"playButtonPosition",type:'"center" | "top-left" | "top-right" | "bottom-left" | "bottom-right"',default:'"center"',description:"播放按钮位置"},{name:"playButtonSize",type:'"small" | "medium" | "large"',default:'"large"',description:"按钮尺寸"},{name:"playButtonStyle",type:"React.CSSProperties",default:"{}",description:"自定义按钮样式"},{name:"showPlayButton",type:"boolean",default:"true",description:"是否显示播放按钮"},{name:"playInModal",type:"boolean",default:"true",description:"模态框播放（否则内联）"},{name:"playIcon",type:"ReactNode",default:"undefined",description:"自定义播放图标"},{name:"onPlay",type:"() => void",default:"undefined",description:"播放回调"}],kK=`// 1. 点击播放按钮，在模态框中播放视频
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
<VideoImage src="https://picsum.photos/id/1015/500/300" alt="商品视频封面" />;`,_K=[{name:"基础视频海报（模态框播放）",description:"点击图片中心播放按钮，在模态框中播放视频。",src:"https://picsum.photos/id/1015/500/300",config:{videoUrl:"https://www.w3schools.com/html/mov_bbb.mp4",playButtonPosition:"center",playButtonSize:"large"}},{name:"内联播放模式",description:"视频直接在图片位置播放，不弹出模态框。",src:"https://picsum.photos/id/1018/500/300",config:{videoUrl:"https://www.w3schools.com/html/movie.mp4",playInModal:!1,playButtonPosition:"center",playButtonSize:"medium",autoPlay:!0,loop:!0,muted:!0}},{name:"自定义播放按钮样式",description:"按钮位于右下角，红色背景，小尺寸。",src:"https://picsum.photos/id/1019/500/300",config:{videoUrl:"https://www.w3schools.com/html/mov_bbb.mp4",playButtonPosition:"bottom-right",playButtonSize:"small",playButtonStyle:{backgroundColor:"rgba(255, 59, 48, 0.9)",border:"2px solid white"}}},{name:"自定义播放图标",description:"示例以默认三角形呈现；可用 playIcon 替换为自定义图标（如 “PLAY” 文字）。",src:"https://picsum.photos/id/1020/500/300",config:{videoUrl:"https://www.w3schools.com/html/mov_bbb.mp4",playButtonPosition:"center",playButtonSize:"large"}},{name:"不同按钮位置",description:"播放按钮位于左上角，绿色背景。",src:"https://picsum.photos/id/1021/500/300",config:{videoUrl:"https://www.w3schools.com/html/mov_bbb.mp4",playButtonPosition:"top-left",playButtonSize:"small",playButtonStyle:{backgroundColor:"rgba(52, 199, 89, 0.9)"}}}],EK=["使用提示：确保视频 URL 可访问，否则播放会失败；移动端自动播放可能受浏览器限制，建议设置 muted=true；大视频文件建议使用流媒体服务；模态框播放体验更好但会阻断其它交互；内联播放适合小尺寸视频预览。"],RK=["模态框播放（全屏）","内联播放（图片位置直接播）","自定义播放按钮大小 / 位置 / 样式","多位置支持（center / top-left / bottom-left / bottom-right）","播放控制（自动播放 / 循环 / 静音）","自定义图标"],zK=["视频网站","在线教育","电商平台（商品视频展示）","新闻媒体","视频博客","企业官网"],OK={name:xK,description:bK,since:PK,tags:$K,events:SK,methods:CK,methodsNote:LK,config:IK,example:kK,examples:_K,notes:EK,features:RK,useCases:zK};function DK(){return typeof navigator>"u"?"en":(navigator.language||navigator.userLanguage||"en").split("-")[0].toLowerCase()}function MK(e){const{localeMap:t,defaultLocale:n="en",currentLocale:o,autoDetect:r=!0,detectLocale:s,fallbackSrc:i}=e;let a=0;return{name:`localization-${++a}`,version:"1.0.0",config:e,hooks:{onLoad:l=>{const c=l.src;let u=o;!u&&r&&(u=s?s():DK()),u=u||n;let d=t[u];return!d&&u!==n&&(d=t[n]),d=d||i||c,d}}}}const jK="LocalizationPlugin",TK="国际化：根据用户语言环境自动切换图片，支持手动指定、自动检测、自定义检测函数与后备图片。",NK="2.0.0",AK=["ecommerce","电商核心"],BK=[{name:"onLoad",when:"加载流程开始、需要确定最终图片地址时",description:"自定义加载逻辑，返回最终图片 URL（objectURL / dataURL / 原地址）"}],UK=[],FK="只读取 context 字段（props / state / data），不调用上下文方法",VK=[{name:"localeMap",type:"Record<string, string>",default:"undefined",description:"语言 → 图片 URL 映射"},{name:"defaultLocale",type:"string",default:'"en"',description:"默认语言（后备）"},{name:"currentLocale",type:"string",default:"undefined",description:"手动指定当前语言"},{name:"autoDetect",type:"boolean",default:"true",description:"是否自动检测浏览器语言"},{name:"detectLocale",type:"() => string",default:"undefined",description:"自定义语言检测函数"},{name:"fallbackSrc",type:"string",default:"undefined",description:"最终后备图片 URL"}],WK=`// 1. 按浏览器语言自动切换图片
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
<I18nImage src="https://picsum.photos/id/1015/500/300" alt="多语言图片" />;`,HK=[{name:"手动切换语言",description:"手动指定 currentLocale 展示对应语言图片（此处以 en 为例）。",src:"https://picsum.photos/id/1015/500/300",config:{localeMap:{en:"https://picsum.photos/id/1015/500/300",zh:"https://picsum.photos/id/1016/500/300",ja:"https://picsum.photos/id/1018/500/300",ko:"https://picsum.photos/id/1019/500/300"},currentLocale:"en",autoDetect:!1,defaultLocale:"en"}},{name:"自动检测浏览器语言",description:"根据浏览器语言自动选择图片（支持 en/zh/fr/de/es）。",src:"https://picsum.photos/id/1020/500/300",config:{localeMap:{en:"https://picsum.photos/id/1020/500/300",zh:"https://picsum.photos/id/1021/500/300",fr:"https://picsum.photos/id/1022/500/300",de:"https://picsum.photos/id/1023/500/300",es:"https://picsum.photos/id/1024/500/300"},autoDetect:!0,defaultLocale:"en"}},{name:"自定义语言检测",description:"通过 detectLocale() 从 localStorage 读取偏好（示例中简写为自动检测）。",src:"https://picsum.photos/id/1025/500/300",config:{localeMap:{en:"https://picsum.photos/id/1025/500/300",zh:"https://picsum.photos/id/1026/500/300",ja:"https://picsum.photos/id/1027/500/300"},defaultLocale:"en",autoDetect:!0}},{name:"后备图片机制",description:"请求的语言（ru）不在映射中 → 显示 fallbackSrc 后备图片。",src:"https://picsum.photos/id/1030/500/300",config:{localeMap:{en:"https://picsum.photos/id/1028/500/300",zh:"https://picsum.photos/id/1029/500/300"},currentLocale:"ru",defaultLocale:"en",fallbackSrc:"https://picsum.photos/id/1030/500/300"}}],GK=["最佳实践：始终提供 defaultLocale 作为后备；localeMap 至少包含常用语言（en、zh 等）；图片 URL 应指向稳定可访问的资源；建议使用 CDN 加速不同地区的图片加载；可结合用户设置和浏览器检测；开发环境建议打开 console 查看语言检测日志。"],qK=["多语言支持（任意语言环境）","自动检测浏览器语言","默认回退语言","自定义检测函数","后备机制（最终后备图片 URL）","动态切换（运行时切换语言）"],QK=["国际化网站","品牌宣传","多语言 App","电商平台（商品本地化展示）","新闻媒体","在线教育"],KK={name:jK,description:TK,since:NK,tags:AK,events:BK,methods:UK,methodsNote:FK,config:VK,example:WK,examples:HK,notes:GK,features:qK,useCases:QK},YK={small:{size:32,iconSize:16},medium:{size:40,iconSize:20},large:{size:48,iconSize:24}},XK={"top-left":{top:10,left:10},"top-right":{top:10,right:10},"bottom-left":{bottom:10,left:10},"bottom-right":{bottom:10,right:10}},ZK=`
  @keyframes downloadSpin {
    from { transform: rotate(0deg); }
    to { transform: rotate(360deg); }
  }
`;function JK({config:e,context:t}){const{filename:n,position:o="top-right",size:r="medium",buttonStyle:s={},showOnHover:i=!1,onBeforeDownload:a,onDownloadSuccess:l,onDownloadError:c,customIcon:u,showTooltip:d=!0,tooltipText:p="下载图片"}=e,[g,v]=A.useState(!1),[w,b]=A.useState(!1),y=YK[r],f=async P=>{P.stopPropagation();try{b(!0),await(a==null?void 0:a(t.src));const $=n||t.src.split("/").pop()||"download.jpg",I=await(await fetch(t.src)).blob(),k=window.URL.createObjectURL(I),_=document.createElement("a");_.href=k,_.download=$,document.body.appendChild(_),_.click(),document.body.removeChild(_),window.URL.revokeObjectURL(k),l==null||l($)}catch($){console.error("[DownloadButtonPlugin] Download failed:",$),c==null||c($)}finally{b(!1)}},h={position:"absolute",...XK[o],width:y.size,height:y.size,borderRadius:"50%",backgroundColor:"rgba(0, 0, 0, 0.6)",border:"2px solid rgba(255, 255, 255, 0.8)",display:"flex",alignItems:"center",justifyContent:"center",cursor:w?"wait":"pointer",zIndex:10,opacity:i&&!g?0:1,transform:g?"scale(1.1)":"scale(1)",transition:"all 0.3s ease",...s};return m.jsxs(m.Fragment,{children:[i&&m.jsx("div",{style:{position:"absolute",top:0,left:0,right:0,bottom:0,zIndex:9,pointerEvents:"auto"},onMouseEnter:()=>v(!0),onMouseLeave:()=>v(!1)}),m.jsx("div",{style:h,onClick:f,title:d?p:void 0,children:u??(w?m.jsx("svg",{width:y.iconSize,height:y.iconSize,viewBox:"0 0 24 24",fill:"white",style:{animation:"downloadSpin 1s linear infinite"},children:m.jsx("circle",{cx:"12",cy:"12",r:"10",stroke:"white",strokeWidth:"2",fill:"none",strokeDasharray:"31.4",strokeDashoffset:"10"})}):m.jsx("svg",{width:y.iconSize,height:y.iconSize,viewBox:"0 0 24 24",fill:"white",children:m.jsx("path",{d:"M19 9h-4V3H9v6H5l7 7 7-7zM5 18v2h14v-2H5z"})}))}),m.jsx("style",{children:ZK})]})}function eY(e={}){return{name:"download-button",version:"1.0.0",config:e,hooks:{renderOverlay:t=>t.imageState.isLoaded?m.jsx(JK,{config:e,context:t}):null}}}const tY="DownloadButtonPlugin",nY="下载按钮：为图片添加一键下载功能，支持多位置、自定义样式、悬停显示与生命周期回调。",oY="2.0.0",rY=["ecommerce","电商核心"],sY=[{name:"renderOverlay",when:"每次渲染，覆盖在图片容器之上",description:"骨架屏、错误占位、水印、加载动画"}],iY=[],aY="只读取 context 字段（props / state / data），不调用上下文方法",lY=[{name:"filename",type:"string",default:"undefined",description:"下载文件名"},{name:"position",type:'"top-left" | "top-right" | "bottom-left" | "bottom-right"',default:'"top-right"',description:"按钮位置"},{name:"size",type:'"small" | "medium" | "large"',default:'"medium"',description:"按钮尺寸"},{name:"buttonStyle",type:"React.CSSProperties",default:"{}",description:"自定义按钮样式"},{name:"showOnHover",type:"boolean",default:"false",description:"仅悬停时显示"},{name:"onBeforeDownload",type:"(src) => void | Promise<void>",default:"undefined",description:"下载前回调（可做权限校验）"},{name:"onDownloadSuccess",type:"(filename) => void",default:"undefined",description:"下载成功回调"},{name:"onDownloadError",type:"(error) => void",default:"undefined",description:"下载失败回调"},{name:"customIcon",type:"ReactNode",default:"undefined",description:"自定义图标"},{name:"tooltipText",type:"string",default:'"下载图片"',description:"提示文案"}],cY=`// 1. 右上角下载按钮，成功后回调
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
<DownloadImage src="https://picsum.photos/id/1015/500/300" alt="可下载图片" />;`,uY=[{name:"基础下载功能",description:"点击右上角下载按钮，保存图片（文件名 my-image.jpg）。",src:"https://picsum.photos/id/1015/500/300",config:{filename:"my-image.jpg",position:"top-right",size:"medium"}},{name:"悬停显示按钮",description:"默认隐藏，鼠标悬停图片左上角出现大号下载按钮。",src:"https://picsum.photos/id/1018/500/300",config:{position:"top-left",size:"large",showOnHover:!0,tooltipText:"点击下载高清图片"}},{name:"自定义位置和大小",description:"左下角小号绿色下载按钮。",src:"https://picsum.photos/id/1019/500/300",config:{position:"bottom-left",size:"small",buttonStyle:{backgroundColor:"rgba(52, 199, 89, 0.9)"}}},{name:"自定义按钮样式",description:"右下角红色方形下载按钮。",src:"https://picsum.photos/id/1020/500/300",config:{position:"bottom-right",size:"medium",buttonStyle:{backgroundColor:"rgba(255, 59, 48, 0.9)",borderRadius:"8px",border:"none"},tooltipText:"下载原图"}},{name:"下载生命周期回调",description:"下载前后触发回调（可权限校验 / 统计上报）；示例中省略函数，见用法示例。",src:"https://picsum.photos/id/1021/500/300",config:{filename:"premium-photo.jpg",position:"top-right",size:"large"}},{name:"自定义下载图标",description:"示例以默认图标呈现；可用 customIcon 替换为自定义图标。",src:"https://picsum.photos/id/1022/500/300",config:{position:"top-right",size:"medium",buttonStyle:{backgroundColor:"rgba(88, 86, 214, 0.9)"}}}],dY=["下载提示：下载需要图片 URL 支持 CORS，否则可能失败；跨域图片需服务器设置 Access-Control-Allow-Origin；filename 应包含合适的文件扩展名（.jpg / .png 等）；大文件下载时会有短暂延迟，建议显示加载状态；移动端下载体验可能因浏览器而异；可在 onBeforeDownload 中进行权限检查。"],pY=["一键下载（点击按钮即可下载图片）","多位置支持（4 个角落）","自定义样式（大小 / 颜色 / 形状）","悬停显示模式","生命周期回调（下载前 / 后 / 失败）","自定义图标"],mY=["图片网站（用户下载高清图）","设计平台（下载设计作品）","新闻媒体","电商平台（下载商品图片）","在线教育（下载教学资料）","企业官网（下载宣传图）"],gY={name:tY,description:nY,since:oY,tags:rY,events:sY,methods:iY,methodsNote:aY,config:lY,example:cY,examples:uY,notes:dY,features:pY,useCases:mY},fY=Object.assign(Mq,{meta:Kq}),hY=Object.assign(eQ,{meta:gQ}),yY=Object.assign(vQ,{meta:zQ}),vY=Object.assign(jQ,{meta:YQ}),wY=Object.assign(tK,{meta:fK}),xY=Object.assign(wK,{meta:OK}),bY=Object.assign(MK,{meta:KK}),PY=Object.assign(eY,{meta:gY}),xr=(()=>{const e=new Map;function t(r){let s=e.get(r);return s||(s={current:0,queue:[]},e.set(r,s)),s}async function n(r,s,i,a){const l=t(r);if(l.current<s){l.current+=1,i&&console.debug(`[ConcurrencyGate] acquire immediate: ${r} -> ${l.current}/${s}`);return}i&&console.debug(`[ConcurrencyGate] queued: ${r} size=${l.queue.length+1}`),await new Promise((c,u)=>{const d={resolve:()=>{d.timer&&clearTimeout(d.timer),l.current+=1,i&&console.debug(`[ConcurrencyGate] acquire from queue: ${r} -> ${l.current}/${s}`),c()},reject:u};a&&a>0&&(d.timer=setTimeout(()=>{const p=l.queue.indexOf(d);p>=0&&l.queue.splice(p,1),i&&console.debug(`[ConcurrencyGate] acquire timeout: ${r} after ${a}ms`),u==null||u(new Error(`acquire timeout for ${r}`))},a)),l.queue.push(d)})}function o(r,s,i){const a=t(r);a.current>0&&(a.current-=1),i&&console.debug(`[ConcurrencyGate] release: ${r} -> ${a.current}/${s}`);const l=a.queue.shift();l&&l.resolve()}return{acquire:n,release:o}})();function li(e,t){if(t==="global")return"__global__";try{return`host:${new URL(e,typeof window<"u"?window.location.origin:"http://localhost").hostname}`}catch{return"__global__"}}function $Y(e={}){const{maxConcurrent:t=4,scope:n="global",adaptive:o=!0,acquireTimeoutMs:r=8e3,debug:s=!1}=e;function i(a,l){var u,d;if(!o)return a;const c=(u=l.networkInfo)==null?void 0:u.effectiveType;if((d=l.networkInfo)!=null&&d.saveData)return 1;switch(c){case"slow-2g":case"2g":return 1;case"3g":return Math.max(1,Math.floor(a/2));case"4g":default:return a}}return{name:"concurrency-control",version:"1.0.0",config:e,hooks:{onLoad:async a=>{var u;const l=li(a.src,n),c=i(t,a);try{await xr.acquire(l,c,s,r)}catch(d){s&&console.debug("[ConcurrencyControl] proceed without permit due to:",d);return}try{(u=a.sharedData)==null||u.set("cc:key",l)}catch{}},onLoadSuccess:a=>{var u;const l=((u=a.sharedData)==null?void 0:u.get("cc:key"))||li(a.src,n),c=i(t,a);xr.release(l,c,s)},onLoadError:a=>{var u;const l=((u=a.sharedData)==null?void 0:u.get("cc:key"))||li(a.src,n),c=i(t,a);return xr.release(l,c,s),!0},onUnmount:a=>{var c,u;const l=(c=a.sharedData)==null?void 0:c.get("cc:key");if(typeof l=="string"){const d=i(t,a);xr.release(l,d,s);try{(u=a.sharedData)==null||u.delete("cc:key")}catch{}}}}}}const SY="ConcurrencyControlPlugin",CY="并发控制：限制同时加载数量，支持按域名分片与网络自适应。",LY="2.0.0",IY=["loading","加载策略"],kY=[{name:"onUnmount",when:"组件卸载前执行一次",description:"释放监听、定时器与观察器；与 onMount 成对出现，避免泄漏"},{name:"onLoad",when:"加载流程开始、需要确定最终图片地址时",description:"自定义加载逻辑，返回最终图片 URL（objectURL / dataURL / 原地址）"},{name:"onLoadSuccess",when:"图片成功解码可显示时",description:"拿到最终 displaySrc 做后续动作（上报、预取下张、淡入）"},{name:"onLoadError",when:"加载失败（网络错误、解码失败、超时）",description:"返回 true 表示错误已被处理（如切换备用源），否则继续走默认降级"}],_Y=[],EY="只读取 context 字段（props / state / data），不调用上下文方法",RY=[{name:"maxConcurrent",type:"number",default:"4",description:"并发上限（4g 情况的上限）"},{name:"scope",type:'"global" | "perHost"',default:'"global"',description:"作用域：全局或按域名分片"},{name:"adaptive",type:"boolean",default:"true",description:"是否根据网络自适应并发（saveData/2g/3g 降低并发）"},{name:"acquireTimeoutMs",type:"number",default:"8000",description:"获取并发许可的超时（毫秒），超时后不阻塞加载，避免饥饿"},{name:"debug",type:"boolean",default:"false",description:"调试输出"}],zY=`const LazyImage = withPlugins(LazyLoadImageCore, [
  createConcurrencyControlPlugin({
    maxConcurrent: 6,
    scope: "perHost", // 按域名分片，避免单域阻塞
    adaptive: true,    // 弱网自动降低并发
  }),
]);`,OY=[{name:"全局并发限制",description:"限制整页同时加载不超过 4 张，避免带宽被瞬间打满。",config:{maxConcurrent:4,scope:"global"}},{name:"按域名分片",description:"每个域名独立并发配额，混合多 CDN 时不互相拖累。",config:{maxConcurrent:6,scope:"perHost",adaptive:!0}}],DY=["全局或按域名（perHost）分片并发门控","弱网（saveData / 2g / 3g）下自适应降低并发","acquireTimeoutMs 后不阻塞加载，避免饥饿"],MY=["瀑布流海量图片，避免一次性发起上百请求","弱网环境限制并发以保住首屏体验"],jY=["acquireTimeoutMs 保证极端情况下不会永久挂起。","与 ScrollIdle 搭配可进一步错峰、降低峰值并发。","并发许可在加载完成后释放，供队列中下一张使用。"],TY={name:SY,description:CY,since:LY,tags:IY,events:kY,methods:_Y,methodsNote:EY,config:RY,example:zY,examples:OY,features:DY,useCases:MY,notes:jY};function NY(e,t,n){try{const o=new URL(e,typeof window<"u"?window.location.origin:"http://localhost");return o.searchParams.set(t,n),o.toString()}catch{const o=e.includes("?")?"&":"?";return`${e}${o}${encodeURIComponent(t)}=${encodeURIComponent(n)}`}}function AY(e={}){const{respectSaveData:t=!0,fallbackQuality:n=.6,disablePreload:o=!0,qualityParam:r="quality"}=e;return{name:"data-saver",version:"1.0.0",config:e,hooks:{transformProps:s=>{var i;try{const a=((i=navigator==null?void 0:navigator.connection)==null?void 0:i.saveData)===!0;if(!t||!a)return s;const l=Math.max(0,Math.min(1,n)),c=NY(s.src,r,String(l)),u={...s,src:c};return o&&(u.loading="lazy"),u}catch{return s}}}}}const BY="DataSaverPlugin",UY="省流模式：saveData 开启时降低质量参数并禁用预加载。",FY="2.0.0",VY=["loading","加载策略"],WY=[{name:"transformProps",when:"渲染前链式改写图片 props",description:"补 sizes / 占位色 / 解码策略等"}],HY=[],GY="只读取 context 字段（props / state / data），不调用上下文方法",qY=[{name:"respectSaveData",type:"boolean",default:"true",description:"仅在 navigator.connection.saveData=true 时降质（关闭则强制降质）"},{name:"fallbackQuality",type:"number",default:"0.6",description:"0..1"},{name:"disablePreload",type:"boolean",default:"true",description:"省流量模式下禁用 preload / prefetch 预取"},{name:"qualityParam",type:"string",default:'"quality"',description:'query param name, e.g. "quality" or "q"'}],QY=`const LazyImage = withPlugins(LazyLoadImageCore, [
  createDataSaverPlugin({
    respectSaveData: true, // 尊重系统省流开关
    fallbackQuality: 0.5,  // 省流时质量降到 0.5
    qualityParam: "q",     // 追加 ?q=0.5
  }),
]);`,KY=[{name:"尊重系统省流",description:"检测到 saveData 时自动降质并禁用预加载，仅在省流模式下生效。",config:{respectSaveData:!0,fallbackQuality:.5,qualityParam:"q"}},{name:"始终省流",description:"忽略系统开关，始终追加低质量参数，适合极端省流场景。",config:{respectSaveData:!1,fallbackQuality:.4,disablePreload:!0}}],YY=["读取 navigator.connection.saveData，开启时自动降质","自动追加质量查询参数（如 ?q=0.6）","可选禁用预加载以进一步省流"],XY=["移动端弱流量用户自动减负","按运营策略全局降质"],ZY=["依赖业务 CDN 支持对应质量参数，否则参数无效。","respectSaveData=false 时按 fallbackQuality 强制降质（无视系统开关）。","与 ImageOptimization 叠加时，省流质量会进一步覆盖优化质量。"],JY={name:BY,description:UY,since:FY,tags:VY,events:WY,methods:HY,methodsNote:GY,config:qY,example:QY,examples:KY,features:YY,useCases:XY,notes:ZY},eX=typeof window<"u"&&window.requestIdleCallback?window.requestIdleCallback:(e,t)=>{setTimeout(e,(t==null?void 0:t.timeout)??0)};function tX(e={}){const{enabled:t=!0,timeoutMs:n=600}=e;return{name:"decode-after-idle",version:"1.0.0",config:e,hooks:{onLoadSuccess:o=>{var s;if(!t)return;const r=(s=o.imageRef)==null?void 0:s.current;!r||!r.decode||eX(async()=>{try{await r.decode()}catch{}},{timeout:n})},transformProps:o=>({...o,decoding:"async"})}}}const nX="DecodeAfterIdlePlugin",oX="空闲解码：图片加载成功后延迟到浏览器空闲时段再执行 img.decode()，避免大图解码阻塞主线程，提升交互流畅度。",rX="2.0.0",sX=["loading","加载策略","解码","性能"],iX=[{name:"onLoadSuccess",when:"图片成功解码可显示时",description:"拿到最终 displaySrc 做后续动作（上报、预取下张、淡入）"},{name:"transformProps",when:"渲染前链式改写图片 props",description:"补 sizes / 占位色 / 解码策略等"}],aX=[],lX="只读取 context 字段（props / state / data），不调用上下文方法",cX=[{name:"enabled",type:"boolean",default:"true",description:"是否启用空闲解码"},{name:"timeoutMs",type:"number",default:"600",description:"最长等待空闲的兜底时间(ms)"}],uX=`import { LazyLoadImageCore, createDecodeAfterIdlePlugin, withPlugins } from "vane-lazy-image";

const LazyImage = withPlugins(LazyLoadImageCore, [
  createDecodeAfterIdlePlugin({ enabled: true, timeoutMs: 1000 }),
]);

<LazyImage src="https://picsum.photos/seed/decode/1200/800" alt="空闲解码示例" />`,dX=[{name:"默认空闲解码",description:"成功后于空闲时段执行 decode，并设置 decoding=async。",src:"https://picsum.photos/seed/decode/1200/800",config:{}},{name:"自定义超时",description:"放宽最长等待空闲时间到 1000ms。",src:"https://picsum.photos/seed/decode-timeout/1200/800",config:{timeoutMs:1e3}}],pX=["成功后 requestIdleCallback 内调用 img.decode()",'自动设置 decoding="async"',"requestIdleCallback 不可用时回退 setTimeout"],mX=["图片密集型信息流防止解码卡顿","首屏后延迟解码，优先保证交互响应"],gX=["timeoutMs 控制最长等待空闲的兜底时间","decode 失败被静默忽略，不影响显示"],fX={name:nX,description:oX,since:rX,tags:sX,events:iX,methods:aX,methodsNote:lX,config:cX,example:uX,examples:dX,features:pX,useCases:mX,notes:gX};function ci(e,t="anonymous"){if(typeof document>"u")return;const n=`lli-preconnect-${e}`;if(document.getElementById(n))return;const o=document.createElement("link");o.id=n,o.rel="preconnect",o.href=e,t&&(o.crossOrigin=t),document.head.appendChild(o)}function tu(e){if(typeof document>"u")return;const t=`lli-preconnect-${e}`,n=document.getElementById(t);n&&n.remove()}function ui(e){try{const t=new URL(e,typeof window<"u"?window.location.origin:"http://localhost");return`${t.protocol}//${t.host}`}catch{return null}}const hX=Xp("lli-preconnect-","已预连");function yX(e={}){const{showBadge:t=!1}=e;return{name:"preconnect",version:"2.0.0",config:e,hooks:{onMount:n=>{const o=ui(n.src);o&&ci(o,e.crossOrigin??"anonymous"),e.domains&&Array.isArray(e.domains)&&e.domains.forEach(r=>ci(r,e.crossOrigin??"anonymous"))},onUnmount:n=>{const o=ui(n.src);o&&tu(o),e.domains&&Array.isArray(e.domains)&&e.domains.forEach(r=>tu(r))},onSrcChange:(n,o,r)=>{const s=ui(r);s&&ci(s,e.crossOrigin??"anonymous")},renderOverlay:()=>t?A.createElement(hX):null}}}const vX="PreconnectPlugin",wX="DNS 预连接：提前与图片域名建立连接，可配置跨域。",xX="2.0.0",bX=["loading","加载策略"],PX=[{name:"onMount",when:"组件挂载完成、插件注册后执行一次（返回的清理函数在 manager.clear 时逆序执行）",description:"初始化副作用：注册监听、起定时器、建观察器；必须返回清理函数或配合 onUnmount 收尾"},{name:"onUnmount",when:"组件卸载前执行一次",description:"释放监听、定时器与观察器；与 onMount 成对出现，避免泄漏"},{name:"onSrcChange",when:"src 变化、切换到新图时",description:"重置状态、清理旧缓存、重新进入懒加载判定"},{name:"renderOverlay",when:"每次渲染，覆盖在图片容器之上",description:"骨架屏、错误占位、水印、加载动画"}],$X=[],SX="只读取 context 字段（props / state / data），不调用上下文方法",CX=[{name:"domains",type:"string[]",description:"额外预连接域名"},{name:"crossOrigin",type:"string | null",description:'"anonymous" | "use-credentials" | null'},{name:"showBadge",type:"boolean",default:"false",description:"是否在卡片上显示「已预连 N」徽标（便于观察注入效果）"}],LX=`const LazyImage = withPlugins(LazyLoadImageCore, [
  createPreconnectPlugin({
    domains: ["https://cdn.example.com", "https://img.example.com"],
    crossOrigin: "anonymous",
  }),
]);`,IX=[{name:"基础预连接",description:"为图片 CDN 域名提前建连，消除首图 DNS/TLS 往返，更快出现。",config:{domains:["https://picsum.photos"],crossOrigin:"anonymous",showBadge:!0}},{name:"多域名预连接",description:"同时预连接多个静态资源域名，适合跨 CDN 的图片源。",config:{domains:["https://picsum.photos","https://fastly.picsum.photos"],crossOrigin:"anonymous"}}],kX=['挂载时注入 <link rel="preconnect">，提前完成 DNS/TCP/TLS 握手',"支持跨域凭证配置（crossOrigin: anonymous / use-credentials）","与浏览器默认预连接策略互补，相同域名不会重复注入"],_X=["图片托管在独立 CDN 域名时，消除首图握手延迟","瀑布流列表首屏涉及多个静态资源域名"],EX=["仅注入预连接提示，不保证一定建连，实际收益取决于浏览器调度。","不宜预连接过多域名，以免占用有限的连接资源。","已在本插件内去重，重复传入相同域名只会注入一次。"],RX={name:vX,description:wX,since:xX,tags:bX,events:PX,methods:$X,methodsNote:SX,config:CX,example:LX,examples:IX,features:kX,useCases:_X,notes:EX},zX=Object.assign($Y,{meta:TY}),OX=Object.assign(AY,{meta:JY}),DX=Object.assign(tX,{meta:fX}),MX=Object.assign(yX,{meta:RX});function jX(e={}){const{durationMs:t=400,easing:n="ease"}=e;return{name:"fade-in",version:"1.0.0",config:e,hooks:{onMount:o=>{let r=0;const s=()=>{var a;const i=(a=o.imageRef)==null?void 0:a.current;if(!i){r++<60&&requestAnimationFrame(s);return}try{i.style.opacity="0",i.style.transition=`opacity ${t}ms ${n}`}catch{}};s()},onLoadSuccess:o=>{var s;const r=(s=o.imageRef)==null?void 0:s.current;if(r)try{r.style.opacity="1"}catch{}}}}}const TX="FadeInPlugin",NX="加载完成后淡入显示，可自定义时长与缓动函数。",AX="2.0.0",BX=["visual","视觉"],UX=[{name:"onMount",when:"组件挂载完成、插件注册后执行一次（返回的清理函数在 manager.clear 时逆序执行）",description:"初始化副作用：注册监听、起定时器、建观察器；必须返回清理函数或配合 onUnmount 收尾"},{name:"onLoadSuccess",when:"图片成功解码可显示时",description:"拿到最终 displaySrc 做后续动作（上报、预取下张、淡入）"}],FX=[],VX="只读取 context 字段（props / state / data），不调用上下文方法",WX=[{name:"durationMs",type:"number",default:"400",description:"淡入时长 ms"},{name:"easing",type:"string",default:"ease",description:"缓动函数（CSS easing）"}],HX=`// 加载完成后淡入
const FadeImage = withPlugins(LazyLoadImageCore, [
  createFadeInPlugin({ durationMs: 450 }),
]);

<FadeImage src="https://picsum.photos/seed/fadein/600/400" alt="淡入" />;`,GX=[{name:"默认淡入",description:"450ms 标准 ease 淡入，干净利落。",src:"https://picsum.photos/seed/fadein-default/600/400",config:{durationMs:450}},{name:"慢速缓出",description:"800ms ease-out，让图片「缓缓浮现」。",src:"https://picsum.photos/seed/fadein-slow/600/400",config:{durationMs:800,easing:"ease-out"}}],qX=["加载成功淡入显示","时长可调","缓动函数可定制（ease / ease-out / cubic-bezier 等）","与 BlurUp 互补"],QX=["画廊 / 相册图片入场","内容型站点图片显现","与滚动进入联动的柔和出现","任意需要「渐显」的场景"],KX=["easing 接受任意 CSS timing-function 字符串。","与 Transition 不同，FadeIn 仅处理「淡入」单一维度，更简单。"],YX={name:TX,description:NX,since:AX,tags:BX,events:UX,methods:FX,methodsNote:VX,config:WX,example:HX,examples:GX,features:qX,useCases:QX,notes:KX},XX=Object.assign(jX,{meta:YX});var ZX=Object.defineProperty,JX=(e,t,n)=>t in e?ZX(e,t,{enumerable:!0,configurable:!0,writable:!0,value:n}):e[t]=n,Mn=(e,t,n)=>JX(e,typeof t!="symbol"?t+"":t,n);class fl{constructor(t,n){if(Mn(this,"cache"),Mn(this,"maxSize"),Mn(this,"onEvict"),t<=0)throw new Error("LRUCache maxSize must be greater than 0");this.cache=new Map,this.maxSize=t,this.onEvict=n}get(t){const n=this.cache.get(t);return n!==void 0&&(this.cache.delete(t),this.cache.set(t,n)),n}set(t,n){if(this.cache.has(t)&&this.cache.delete(t),this.cache.set(t,n),this.cache.size>this.maxSize){const o=this.cache.keys().next().value;if(o!==void 0){const r=this.cache.get(o);if(this.cache.delete(o),this.onEvict&&r!==void 0)try{this.onEvict(o,r)}catch(s){console.warn("[LRUCache] onEvict callback error:",s)}}}}delete(t){const n=this.cache.get(t),o=this.cache.delete(t);if(o&&this.onEvict&&n!==void 0)try{this.onEvict(t,n)}catch(r){console.warn("[LRUCache] onEvict callback error:",r)}return o}has(t){return this.cache.has(t)}clear(){this.onEvict&&this.cache.forEach((t,n)=>{try{this.onEvict(n,t)}catch(o){console.warn("[LRUCache] onEvict callback error:",o)}}),this.cache.clear()}get size(){return this.cache.size}keys(){return this.cache.keys()}values(){return this.cache.values()}forEach(t){this.cache.forEach(t)}}class eZ{constructor(t=1e3,n=10){Mn(this,"samples",[]),Mn(this,"windowSize"),Mn(this,"maxSamples"),this.windowSize=t,this.maxSamples=n}addSample(t){const n=Date.now();this.samples.push({bytes:t,timestamp:n});const o=n-this.windowSize;this.samples=this.samples.filter(r=>r.timestamp>o),this.samples.length>this.maxSamples&&this.samples.shift()}getSpeed(){if(this.samples.length<2)return 0;const t=this.samples[0],n=this.samples[this.samples.length-1],o=n.bytes-t.bytes,r=(n.timestamp-t.timestamp)/1e3;return r<=0?0:o/r}estimateTimeRemaining(t,n){const o=this.getSpeed();return o<=0||n<=0?0:(n-t)/o}reset(){this.samples=[]}}const br=new fl(_t.CACHE_SIZE_INFLIGHT),gn=new fl(_t.CACHE_SIZE_CONTROLLERS,(e,t)=>{try{t.abort()}catch{}}),di=new fl(_t.CACHE_SIZE_OBJECT_URLS,(e,t)=>{try{URL.revokeObjectURL(t)}catch{}});function tZ(e={}){const{enabled:t=!0,cacheKeyFn:n,timeout:o=_t.TIMEOUT,maxRetries:r=_t.MAX_RETRIES,retryDelay:s=_t.RETRY_DELAY,retryBackoff:i=_t.RETRY_BACKOFF}=e,a=v=>{l(v.src)},l=v=>{const w=n?n(v):v,b=gn.get(w);if(b){try{b.abort()}catch{}gn.delete(w)}},c=v=>{u(v.src)},u=v=>{const w=n?n(v):v,b=di.get(w);if(b){try{URL.revokeObjectURL(b)}catch{}di.delete(w)}},d=v=>{var w,b;try{(w=v.sharedData)!=null&&w.has("fetch-loader:object-url")&&v.sharedData.delete("fetch-loader:object-url"),(b=v.sharedData)!=null&&b.has("fetch-loader:blob")&&v.sharedData.delete("fetch-loader:blob")}catch{}};async function p(v,w,b=0){try{const y=fetch(v,{signal:w}),f=new Promise((P,$)=>{setTimeout(()=>{$(new Error(`Fetch timeout after ${o}ms`))},o)}),h=await Promise.race([y,f]);if(!h.ok)throw h.status>=ca.CLIENT_ERROR_MIN&&h.status<ca.CLIENT_ERROR_MAX?new Error(`HTTP ${h.status}: ${h.statusText}`):new Error(`Server error: ${h.status}`);return h}catch(y){const f=y;if(w.aborted||f.name==="AbortError"||b>=r||f.message&&(f.message.includes("404")||f.message.includes("403")||f.message.includes("401")))throw y;const h=s*Math.pow(i,b);if(console.debug(`[FetchLoader] Retrying (${b+1}/${r}) after ${h}ms for ${v}`),await new Promise(P=>setTimeout(P,h)),w.aborted)throw new Error("Request aborted during retry delay");return p(v,w,b+1)}}async function g(v){const w=v.src,b=n?n(w):w;if(br.has(b))return br.get(b);const y=(async()=>{var $,I,k;const f=new AbortController,{signal:h}=f;gn.set(b,f);const P=new eZ;try{const _=await p(w,h);if(!_.body){gn.delete(b);return}const S=_.headers.get("content-length"),L=S?parseInt(S,10):0,j=_.body.getReader(),N=[];let z=0;try{for(;;){const{done:re,value:K}=await j.read();if(re)break;if(K){N.push(K),z+=K.length,P.addSample(z);const R={loaded:z,total:L,percent:L>0?Math.round(z/L*100):0,indeterminate:L===0,speed:P.getSpeed(),estimatedTime:P.estimateTimeRemaining(z,L),timestamp:Date.now()};($=v.bus)==null||$.emit("progress",R)}}}finally{j.releaseLock()}const O=new Blob(N),U=URL.createObjectURL(O);di.set(b,U),gn.delete(b);try{(I=v.sharedData)==null||I.set("fetch-loader:blob",O),(k=v.sharedData)==null||k.set("fetch-loader:object-url",U)}catch{}return U}catch(_){gn.delete(b);const S=_;if(S.name==="AbortError"||h.aborted)return;console.warn(`[FetchLoader] Failed to load ${w}:`,S.message);return}finally{br.delete(b)}})();return br.set(b,y),y}return{name:"fetch-loader",version:"1.1.0",description:"fetch 流式加载并返回 objectURL；失败返回 undefined（P1-6）",priority:10,timeout:0,config:e,hooks:{async onLoad(v){if(t)try{return await g(v)}catch(w){console.warn("[FetchLoader] onLoad error:",w);return}},onSrcChange(v,w){l(w),u(w),d(v)},onUnmount(v){a(v),c(v),d(v)}}}}const nZ="FetchLoaderPlugin",oZ="fetch 流式加载器：将图片以 blob/objectURL 形式加载，支持进度上报（speed/ETA）、超时、指数退避重试、请求去重与 objectURL 自动回收。高优先级（domain priority 10），先于其他插件执行。",rZ="2.0.0",sZ=["loading","加载策略"],iZ=[{name:"onUnmount",when:"组件卸载前执行一次",description:"释放监听、定时器与观察器；与 onMount 成对出现，避免泄漏"},{name:"onLoad",when:"加载流程开始、需要确定最终图片地址时",description:"自定义加载逻辑，返回最终图片 URL（objectURL / dataURL / 原地址）"},{name:"onSrcChange",when:"src 变化、切换到新图时",description:"重置状态、清理旧缓存、重新进入懒加载判定"},{name:"progress",when:"流式加载进度更新时",description:"广播 { loaded, total }，桥接到 onProgress 钩子"}],aZ=[],lZ="只读取 context 字段（props / state / data），不调用上下文方法",cZ=[{name:"enabled",type:"boolean",default:"true",description:"是否启用 fetch 加载（关闭后走浏览器默认加载）"},{name:"cacheKeyFn",type:"(src: string) => string",description:"自定义去重键，默认使用 src"},{name:"maxCacheSize",type:"number",description:"in-flight 请求缓存最大条目数"},{name:"maxControllers",type:"number",description:"AbortController 缓存上限，淘汰时自动 abort"},{name:"maxObjectUrls",type:"number",description:"objectURL 缓存上限，淘汰时自动 revokeObjectURL"},{name:"timeout",type:"number",default:"30000",description:"单次请求超时（毫秒）"},{name:"maxRetries",type:"number",default:"3",description:"最大重试次数（4xx 不重试）"},{name:"retryDelay",type:"number",default:"1000",description:"首次重试延迟（毫秒）"},{name:"retryBackoff",type:"number",default:"2",description:"重试退避倍数"}],uZ=`const LazyImage = withPlugins(LazyLoadImageCore, [
  createFetchLoaderPlugin({
    timeout: 20000,    // 20s 超时
    maxRetries: 5,     // 最多重试 5 次
    retryBackoff: 2,   // 指数退避
  }),
]);`,dZ=[{name:"默认 fetch 加载",description:"流式加载 + 真实进度（速度 / ETA）+ 自动去重与 objectURL 回收。",config:{timeout:3e4,maxRetries:3,retryBackoff:2}},{name:"弱网增强重试",description:"更长超时与更多重试，适合不稳定网络环境。",config:{timeout:45e3,maxRetries:6,retryDelay:1500,retryBackoff:2}}],pZ=["以 fetch 把图片读为 Blob/objectURL，支持流式进度（速度 / ETA）","请求超时 + 指数退避重试（4xx 不重试）","in-flight 请求去重、AbortController / objectURL 自动回收","高优先级（domain priority 10），先于其它插件执行"],mZ=["需要真实下载进度条的大图 / 原图","不稳定网络下需要重试保障"],gZ=["关闭 enabled 则走浏览器默认 <img> 加载。","objectURL 由插件在卸载 / 淘汰时自动 revoke，避免内存泄漏。","cacheKeyFn 为函数，需在“用法示例”中以代码传入；静态预览使用纯配置。"],fZ={name:nZ,description:oZ,since:rZ,tags:sZ,events:iZ,methods:aZ,methodsNote:lZ,config:cZ,example:uZ,examples:dZ,features:pZ,useCases:mZ,notes:gZ},hZ=Object.assign(tZ,{meta:fZ}),yZ="CacheIDBPlugin",vZ="IndexedDB 持久缓存：跨会话缓存图片 Blob/dataURL，支持 TTL。",wZ="2.0.0",xZ=["cache","缓存"],bZ=[{name:"onUnmount",when:"组件卸载前执行一次",description:"释放监听、定时器与观察器；与 onMount 成对出现，避免泄漏"},{name:"onLoad",when:"加载流程开始、需要确定最终图片地址时",description:"自定义加载逻辑，返回最终图片 URL（objectURL / dataURL / 原地址）"},{name:"onLoadSuccess",when:"图片成功解码可显示时",description:"拿到最终 displaySrc 做后续动作（上报、预取下张、淡入）"},{name:"onSrcChange",when:"src 变化、切换到新图时",description:"重置状态、清理旧缓存、重新进入懒加载判定"},{name:"cache:hit",when:"命中 IndexedDB 缓存、跳过网络请求时",description:"携带 { level, src }，可用于统计缓存命中率"}],PZ=[],$Z="只读取 context 字段（props / state / data），不调用上下文方法",SZ=[{name:"enabled",type:"boolean",default:"true",description:"是否启用 IndexedDB 缓存（关闭后每次都走网络）"},{name:"dbName",type:"string",default:'"LLI-Cache"',description:"IndexedDB 数据库名，多实例共用同一个库"},{name:"storeName",type:"string",default:'"images"',description:"对象仓库名，缓存条目存在该 store 下"},{name:"ttlMs",type:"number",default:"604800000",description:"过期时间（毫秒）"},{name:"debug",type:"boolean",description:"是否输出读写 / 命中调试日志"}],CZ=`const LazyImage = withPlugins(LazyLoadImageCore, [
  createIDBCachePlugin({
    dbName: "LLI-Cache",
    storeName: "images",
    ttlMs: 7 * 24 * 60 * 60 * 1000, // 7 天
  }),
]);`,LZ=[{name:"默认持久缓存",description:"跨会话缓存图片 Blob，刷新 / 重开应用仍命中，秒开头部图。",config:{ttlMs:6048e5}},{name:"自定义库与过期",description:"独立库名隔离业务数据，30 天过期。",config:{dbName:"App-Img",storeName:"photos",ttlMs:2592e6}}],IZ=["用 IndexedDB 持久化图片 Blob / dataURL","支持 TTL（默认 7 天），过期自动清理","优先存 Blob，其次 dataURL，节省空间"],kZ=["离线优先 / PWA 图片缓存","重开应用仍需秒开的头部图、用户头像"],_Z=["仅在支持 IndexedDB 的环境生效，SSR / Node 端无副作用。","与 CachePrewarmPlugin 配合可实现“进入视口即落盘”。","多实例请使用不同 dbName / storeName 避免相互覆盖。"],EZ={name:yZ,description:vZ,since:wZ,tags:xZ,events:bZ,methods:PZ,methodsNote:$Z,config:SZ,example:CZ,examples:LZ,features:IZ,useCases:kZ,notes:_Z},RZ=Object.assign(o4,{meta:EZ});function zZ(e={}){const{debounceMs:t=200,maxWaitMs:n=1200,onlyWhenIntersecting:o=!0,debug:r=!1}=e,s="viewport-debounce:inView";return{name:"viewport-debounce",version:"2.0.0",config:e,hooks:{onEnterViewport:i=>{var a;try{(a=i.sharedData)==null||a.set(s,!0)}catch{}if(r)try{console.debug("[ViewportDebounce] enter",i.src)}catch{}},onLeaveViewport:i=>{var a;try{(a=i.sharedData)==null||a.set(s,!1)}catch{}if(r)try{console.debug("[ViewportDebounce] leave",i.src)}catch{}},onBeforeLoad:async i=>{var c;const a=Date.now(),l=u=>new Promise(d=>setTimeout(d,u));for(;;){const u=!!((c=i.sharedData)!=null&&c.get(s)),d=Date.now()-a;if(!u&&o&&d<n){if(r)try{console.debug("[ViewportDebounce] aborted (left before stable)",i.src)}catch{}return!1}if(d>=t){if(r)try{console.debug("[ViewportDebounce] stable, proceed",i.src,{elapsed:d})}catch{}return!0}await l(30)}},onUnmount:i=>{var a;try{(a=i.sharedData)==null||a.delete(s)}catch{}}}}}const OZ="ViewportDebouncePlugin",DZ="视口防抖（v2 真实实现）：进入视口后并不立即加载，而是等待元素「稳定停留 debounceMs」才放行；若期间离开视口且未达 maxWaitMs 上限，则中止本次加载，真正避免快速滚动时误加载/重复加载。",MZ="2.0.0",jZ=["viewport","视口与交互","防抖"],TZ=[{name:"onUnmount",when:"组件卸载前执行一次",description:"释放监听、定时器与观察器；与 onMount 成对出现，避免泄漏"},{name:"onBeforeLoad",when:"发起图片请求之前",description:"返回 false 可阻断本次加载（如权限校验、占位策略）"},{name:"onEnterViewport",when:"元素进入视口（IntersectionObserver）",description:"触发懒加载、开始请求、曝光上报"},{name:"onLeaveViewport",when:"元素离开视口",description:"暂停 / 中止在途请求、回收资源"}],NZ=[],AZ="只读取 context 字段（props / state / data），不调用上下文方法",BZ=[{name:"debounceMs",type:"number",default:"200",description:"进入视口后需稳定停留的时长（毫秒），到时才放行加载"},{name:"maxWaitMs",type:"number",default:"1200",description:"最长等待上限，避免快速来回一直不加载（饥饿保护）"},{name:"onlyWhenIntersecting",type:"boolean",default:"true",description:"仅在进入视口时门控；若离开且未达 maxWaitMs 则中止本次加载"},{name:"debug",type:"boolean",default:"false",description:"是否输出调试日志"}],UZ=`const StableImage = withPlugins(LazyLoadImageCore, [
  // 进入视口稳定 200ms 才加载，快速划过直接放弃
  createViewportDebouncePlugin({ debounceMs: 200, maxWaitMs: 1200 }),
]);

<StableImage src="https://picsum.photos/id/1015/500/300" alt="视口防抖示例" />;`,FZ=[{name:"默认防抖（200ms）",description:"快速滚动时抑制抖动：元素需稳定停留 200ms 才加载，一闪而过的不加载。",src:"https://picsum.photos/id/1015/500/300",config:{debounceMs:200}},{name:"加大防抖间隔",description:"300ms 间隔，更适合惯性较大的移动端滚动。",src:"https://picsum.photos/id/1020/500/300",config:{debounceMs:300}},{name:"开启调试日志",description:"控制台输出稳定/中止判定日志，便于排查。",src:"https://picsum.photos/id/1025/500/300",config:{debounceMs:200,debug:!0}}],VZ=["门控钩子真正延迟加载到稳定期","快速划过（离开未达上限）中止加载","maxWaitMs 饥饿保护","可调防抖间隔与上限","调试日志输出"],WZ=["快速滚动列表 / 瀑布流","移动端惯性滚动","防止抖动导致的重复加载","仅加载用户真正停留浏览的图片"],HZ=["依赖引擎门控能力（onBeforeLoad 返回 false 中止加载），已在本插件中落地；与 ViewportAware 的 rootMargin 搭配可进一步调优触发时机。"],GZ={name:OZ,description:DZ,since:MZ,tags:jZ,events:TZ,methods:NZ,methodsNote:AZ,config:BZ,example:UZ,examples:FZ,features:VZ,useCases:WZ,notes:HZ},qZ="CacheMemoryPlugin",QZ="内存 LRU 缓存：会话内缓存图片数据，可配置容量与过期时间。",KZ="2.0.0",YZ=["cache","缓存"],XZ=[{name:"onUnmount",when:"组件卸载前执行一次",description:"释放监听、定时器与观察器；与 onMount 成对出现，避免泄漏"},{name:"onLoad",when:"加载流程开始、需要确定最终图片地址时",description:"自定义加载逻辑，返回最终图片 URL（objectURL / dataURL / 原地址）"},{name:"onLoadSuccess",when:"图片成功解码可显示时",description:"拿到最终 displaySrc 做后续动作（上报、预取下张、淡入）"},{name:"onSrcChange",when:"src 变化、切换到新图时",description:"重置状态、清理旧缓存、重新进入懒加载判定"}],ZZ=[],JZ="只读取 context 字段（props / state / data），不调用上下文方法",eJ=[{name:"enabled",type:"boolean",default:"true",description:"是否启用内存缓存"},{name:"maxEntries",type:"number",default:"200",description:"LRU 最大条目"},{name:"ttlMs",type:"number",description:"过期时间，默认不过期"},{name:"debug",type:"boolean",default:"false",description:"是否输出 LRU 命中 / 淘汰调试日志"}],tJ=`const LazyImage = withPlugins(LazyLoadImageCore, [
  createMemoryCachePlugin({
    maxEntries: 300,
    ttlMs: 5 * 60 * 1000, // 5 分钟过期
  }),
]);`,nJ=[{name:"默认内存缓存",description:"会话内 LRU 缓存（默认 200 条），同一图片重复访问零网络。",config:{maxEntries:200}},{name:"限定过期时间",description:"5 分钟后条目失效，在命中率与内存占用之间取得平衡。",config:{maxEntries:300,ttlMs:3e5}}],oJ=["会话内 LRU 缓存（默认 200 条）","可选 TTL 过期时间","内存受限时自动淘汰最久未用条目"],rJ=["同一图片在列表 / 详情多处复用","快速来回切换的画廊、相册"],sJ=["内存缓存不跨会话，刷新页面即失效。","需要跨会话持久请配合 IDBCachePlugin。","命中时直接返回已缓存数据，跳过网络请求。"],iJ={name:qZ,description:QZ,since:KZ,tags:YZ,events:XZ,methods:ZZ,methodsNote:JZ,config:eJ,example:tJ,examples:nJ,features:oJ,useCases:rJ,notes:sJ},aJ=Object.assign(zZ,{meta:GZ}),lJ=Object.assign(s4,{meta:iJ});function cJ(e,t,n,o){const r=e.src,s=o.get(r);s&&clearTimeout(s);const i=(t.baseDelayMs??500)*Math.pow(2,Math.max(0,n-1)),a=t.jitter?Math.random()*.25*i:0,l=i+a,c=setTimeout(()=>{var d;o.delete(r);const u=(d=e.imageRef)==null?void 0:d.current;if(u)try{const p=`${r}${r.includes("?")?"&":"?"}retry=${Date.now()}&n=${n}`;u.src=p}catch{}},l);o.set(r,c)}function uJ(e={}){const{maxRetries:t=2}=e,n=new Map,o=r=>`retry-count:${r}`;return{name:"retry-on-error",version:"1.1.0",description:"图片加载失败后退避重试；计数按 src 隔离、定时器可取消（P2-5）",config:e,hooks:{onLoadError:(r,s)=>{var l,c,u,d;try{(l=r.sharedData)==null||l.set("had-error",!0)}catch{}const i=o(r.src),a=Number(((c=r.sharedData)==null?void 0:c.get(i))??0)+1;if(a<=t)return(u=r.sharedData)==null||u.set(i,a),cJ(r,e,a,n),!0;try{(d=r.sharedData)==null||d.set(i,a)}catch{}return!1},onSrcChange:(r,s)=>{const i=n.get(s);i&&(clearTimeout(i),n.delete(s))},onUnmount:()=>{n.forEach(r=>clearTimeout(r)),n.clear()},renderOverlay:r=>{var l;const s=Number(((l=r.sharedData)==null?void 0:l.get(o(r.src)))??0);if(s<=0)return null;const i=s>t,a={position:"absolute",top:6,right:6,zIndex:10,fontSize:12,fontWeight:600,color:"#fff",background:i?"rgba(108,117,125,0.9)":"rgba(255,149,0,0.92)",padding:"2px 8px",borderRadius:4};return A.createElement("div",{style:a},i?`重试失败 (${t})`:`重试中 ${s}/${t}`)}}}}const dJ="RetryOnErrorPlugin",pJ="失败重试：图片加载失败后按指数退避（可选抖动）自动重试，提升网络抖动 / 瞬时故障下的自愈成功率，并提供重试进度角标。",mJ="2.0.0",gJ=["network","网络","重试","自愈"],fJ=[{name:"onUnmount",when:"组件卸载前执行一次",description:"释放监听、定时器与观察器；与 onMount 成对出现，避免泄漏"},{name:"onLoadError",when:"加载失败（网络错误、解码失败、超时）",description:"返回 true 表示错误已被处理（如切换备用源），否则继续走默认降级"},{name:"onSrcChange",when:"src 变化、切换到新图时",description:"重置状态、清理旧缓存、重新进入懒加载判定"},{name:"renderOverlay",when:"每次渲染，覆盖在图片容器之上",description:"骨架屏、错误占位、水印、加载动画"}],hJ=[],yJ="只读取 context 字段（props / state / data），不调用上下文方法",vJ=[{name:"maxRetries",type:"number",default:"2",description:"最大重试次数"},{name:"baseDelayMs",type:"number",description:"退避基准毫秒（默认 500）"},{name:"jitter",type:"boolean",description:"是否在退避基础上叠加随机抖动"}],wJ=`import { LazyLoadImageCore, createRetryOnErrorPlugin, withPlugins } from "vane-lazy-image";

const LazyImage = withPlugins(LazyLoadImageCore, [
  createRetryOnErrorPlugin({ maxRetries: 3, baseDelayMs: 400, jitter: true }),
]);

// 故意触发失败以观察指数退避重试
<LazyImage src="https://invalid.example.com/x.png" alt="失败重试示例" />`,xJ=[{name:"自动重试",description:"失败后指数退避重试，用尽后角标显示『重试失败』（演示用无效地址）。",src:"https://invalid.example.com/retry.png",config:{maxRetries:3,baseDelayMs:400}},{name:"带抖动退避",description:"在指数退避基础上叠加随机抖动，避免重试风暴。",src:"https://invalid.example.com/retry-jitter.png",config:{maxRetries:2,baseDelayMs:600,jitter:!0}}],bJ=["指数退避重试：delay = baseDelayMs * 2^(n-1)","可选 jitter 抖动避免重试风暴","角标实时显示『重试中 n/max』与『重试失败(max)』","用尽后放行错误给下游插件（ErrorOverlay / ErrorBadge）"],PJ=["弱网 / 瞬时 5xx 自愈","与手动重试（ErrorOverlay）互补"],$J=["maxRetries 默认 2，baseDelayMs 默认 500","重试用 ?retry=时间戳&n=count 防止缓存命中","重试用尽返回 false，错误继续向下游传播"],SJ={name:dJ,description:pJ,since:mJ,tags:gJ,events:fJ,methods:hJ,methodsNote:yJ,config:vJ,example:wJ,examples:xJ,features:bJ,useCases:PJ,notes:$J},CJ=Object.assign(uJ,{meta:SJ});var LJ=Object.defineProperty,IJ=(e,t,n)=>t in e?LJ(e,t,{enumerable:!0,configurable:!0,writable:!0,value:n}):e[t]=n,kJ=(e,t,n)=>IJ(e,t+"",n);function Zp(e,t,n){const{fetchPriority:o="high",as:r="image",imageSrcSet:s,imageSizes:i}=n||{};x.useEffect(()=>{if(!t||!e)return;const a=(()=>{try{return new URL(e,document.baseURI).href}catch{return e}})();if(Array.from(document.querySelectorAll('link[rel="preload"]')).find(c=>c.href===a))return;const l=document.createElement("link");return l.rel="preload",l.as=r,l.href=e,o!=="auto"&&l.setAttribute("fetchpriority",o),s&&(l.setAttribute("imagesrcset",s),i&&l.setAttribute("imagesizes",i)),document.head.appendChild(l),()=>{l.parentNode===document.head&&document.head.removeChild(l)}},[e,t,o,r,s,i])}function _J(e,t){Zp(e,t)}function EJ(e,t){const n=(t==null?void 0:t.enabled)!==!1,o=(t==null?void 0:t.hookTimeout)??0,r=e;return function(...s){if(!n)return r.apply(this,s);if(o>0){const i=setTimeout(()=>{},o);try{const a=r.apply(this,s);return clearTimeout(i),a}catch(a){clearTimeout(i),t!=null&&t.debug&&console.warn(`[sandbox:${t==null?void 0:t.pluginName}] 钩子异常已被捕获`,a);return}}try{return r.apply(this,s)}catch(i){t!=null&&t.debug&&console.warn(`[sandbox:${t==null?void 0:t.pluginName}] 钩子异常已被捕获`,i);return}}}class RJ{constructor(){kJ(this,"nodes",new Map)}addPlugin(t,n=[],o=[],r=[]){this.nodes.set(t,{deps:[...n],optDeps:[...o],conflicts:[...r]})}detectCycles(){const t=new Set,n=new Set,o=[],r=[],s=l=>{if(n.has(l)){const d=o.indexOf(l);d>=0&&r.push([...o.slice(d),l]);return}if(t.has(l))return;t.add(l),n.add(l),o.push(l);const c=this.nodes.get(l),u=c?[...c.deps,...c.optDeps]:[];for(const d of u)this.nodes.has(d)&&s(d);o.pop(),n.delete(l)};for(const l of this.nodes.keys())s(l);const i=new Set,a=[];for(const l of r){const c=[...l].sort().join("|");i.has(c)||(i.add(c),a.push(l))}return a}getTopologicalOrder(t){if(this.detectCycles().length>0)return[];const n=new Map;for(const s of t)n.set(s,0);for(const s of t){const i=this.nodes.get(s);if(i)for(const a of i.deps)n.has(a)&&n.set(a,(n.get(a)||0)+1)}const o=[];for(const[s,i]of n)i===0&&o.push(s);o.sort();const r=[];for(;o.length;){const s=o.shift();r.push(s);const i=this.nodes.get(s);if(i)for(const a of i.deps){if(!n.has(a))continue;const l=(n.get(a)||0)-1;n.set(a,l),l===0&&(o.push(a),o.sort())}}return r.length===t.length?r:[]}checkConflicts(t,n){const o=this.nodes.get(t);if(!o)return{hasConflict:!1,conflicts:[]};const r=o.conflicts.filter(s=>n.has(s));return{hasConflict:r.length>0,conflicts:r}}checkDependencies(t,n){const o=this.nodes.get(t);if(!o)return{satisfied:!0,missing:[]};const r=o.deps.filter(s=>!n.has(s));return{satisfied:r.length===0,missing:r}}}const zJ="2.0.0",nu=Object.freeze(Object.defineProperty({__proto__:null,DependencyResolver:RJ,FETCH_LOADER_DEFAULTS:_t,FILTER_PRESETS:UD,HTTP_STATUS:ca,IDBCache:qp,IMAGE_FETCH_PRIORITY:yD,IMAGE_LOADING_STRATEGY:hD,INTERSECTION_OBSERVER_DEFAULTS:gD,LAZY_IMAGE_CORE_VERSION:zJ,LazyLoadImageCore:Np,MemoryCache:is,PERFORMANCE_DEFAULTS:mD,PLUGIN_EVENTS:pD,PLUGIN_PRIORITY:dD,THROTTLE_DELAYS:fD,addGlobalContextListener:Fp,cleanupObserverPool:aD,compareVersions:Vn,createA11yPlugin:a6,createAdaptiveQualityPlugin:_7,createAltTextPlugin:A7,createAnimatedCursorPlugin:b7,createAntiHotlinkPlugin:E7,createAspectRatioSpacerPlugin:aH,createAuthPlugin:R7,createBadgePlugin:n7,createBatteryAwarePlugin:$7,createBlurUpPlugin:$H,createBorderGlowPlugin:o7,createCDNFallbackPlugin:z7,createCachePrewarmPlugin:vG,createCaptionPlugin:_q,createColorExtractionPlugin:r7,createColorSwatchPlugin:vY,createComparisonPlugin:s7,createConcurrencyControlPlugin:zX,createCropPlugin:i7,createCustomEffectsPlugin:y7,createDataSaverPlugin:OX,createDecodeAfterIdlePlugin:DX,createDepthMapPlugin:P7,createDominantColorPlugin:a7,createDownloadButtonPlugin:PY,createErrorBadgePlugin:B7,createErrorOverlayPlugin:U7,createErrorTrackingPlugin:F7,createEventLoggerPlugin:V7,createExifOrientationPlugin:S7,createFadeInPlugin:XX,createFallbackImagePlugin:wG,createFetchLoaderPlugin:hZ,createFilterPlugin:l7,createGalleryPlugin:Eq,createGlitchEffectPlugin:w7,createHoverPrefetchPlugin:C7,createHoverZoomPlugin:Rq,createIDBCachePlugin:RZ,createImageOptimizationPlugin:O7,createInventoryStatusPlugin:yY,createLocalizationPlugin:bY,createLqipPlugin:c7,createMemoryCachePlugin:lJ,createMemoryPressureAbortPlugin:L7,createMorphPlugin:x7,createNetworkAnalyticsPlugin:D7,createOfflinePlugin:yG,createOverlayInfoPlugin:u7,createParallaxPlugin:d7,createPerformanceMonitor:gl,createPerformanceMonitorPlugin:W7,createPreconnectPlugin:MX,createPredictiveLoadingPlugin:I7,createPriceTagPlugin:fY,createPriorityLoadingPlugin:k7,createProgressOverlayPlugin:p7,createPromoBadgePlugin:hY,createRedactionPlugin:m7,createResponsivePlugin:M7,createRetryOnErrorPlugin:CJ,createRevealAnimationPlugin:v7,createSEOPlugin:l6,createScrollIdlePlugin:i6,createSkeletonPlugin:zq,createSocialSharePlugin:wY,createSvgPlaceholderPlugin:g7,createTransitionPlugin:f7,createUserBehaviorPlugin:H7,createVideoPosterPlugin:xY,createViewportAwarePlugin:T7,createViewportDebouncePlugin:aJ,createViewportDwellPlugin:N7,createWatermarkPlugin:h7,createWebPPlugin:j7,formatVersion:l4,getGlobalContextStats:CD,getGlobalDeviceInfo:SD,getGlobalMonitorManager:ZO,getGlobalNetworkInfo:ss,getObserverPoolDetails:iD,getObserverPoolStats:rD,globalContext:Ko,isValidVersion:a4,isVersionEqual:c4,isVersionGreater:u4,isVersionInRange:i4,isVersionLess:d4,observeElement:Tp,observerPool:Ht,parseVersion:Yp,resetGlobalMonitorManager:JO,resetObserverPoolStats:lD,resolveDependencyOrder:Ap,setObserverPoolDebugMode:sD,unobserveElement:oD,useImagePreload:_J,useLCPPreload:Zp,withPlugins:ND,wrapPluginHook:EJ},Symbol.toStringTag,{value:"Module"}));function ou(e){return typeof e=="function"}const Mee={ecommerce:"电商核心",interaction:"视觉效果与交互",visual:"视觉与效果",perf:"性能与网络",robust:"稳健性与错误处理",viewport:"视口与交互",a11y:"可访问性与 SEO",other:"其他"},OJ={PriceTagPlugin:{category:"ecommerce",title:"价格标签"},PromoBadgePlugin:{category:"ecommerce",title:"促销徽标"},InventoryStatusPlugin:{category:"ecommerce",title:"库存状态"},ColorSwatchPlugin:{category:"ecommerce",title:"颜色样本"},SocialSharePlugin:{category:"ecommerce",title:"社交分享"},VideoPosterPlugin:{category:"ecommerce",title:"视频封面"},LocalizationPlugin:{category:"ecommerce",title:"本地化"},DownloadButtonPlugin:{category:"ecommerce",title:"下载按钮"},RevealAnimationPlugin:{category:"interaction",title:"揭示动画"},GlitchEffectPlugin:{category:"interaction",title:"故障特效"},MorphPlugin:{category:"interaction",title:"形变"},AnimatedCursorPlugin:{category:"interaction",title:"动态光标"},DepthMapPlugin:{category:"interaction",title:"深度图 (3D)"},SkeletonPlugin:{category:"visual",title:"骨架屏"},BorderGlowPlugin:{category:"visual",title:"边框辉光"},CaptionPlugin:{category:"visual",title:"图片说明"},FilterPlugin:{category:"visual",title:"滤镜"},GalleryPlugin:{category:"visual",title:"画廊"},OverlayInfoPlugin:{category:"visual",title:"信息蒙层"},ProgressOverlayPlugin:{category:"visual",title:"进度蒙层"},BlurUpPlugin:{category:"visual",title:"模糊渐显"},FadeInPlugin:{category:"visual",title:"淡入"},TransitionPlugin:{category:"visual",title:"过渡"},ParallaxPlugin:{category:"visual",title:"视差"},ColorExtractionPlugin:{category:"visual",title:"色彩提取"},RedactionPlugin:{category:"visual",title:"打码"},HoverZoomPlugin:{category:"visual",title:"悬停放大"},WatermarkPlugin:{category:"visual",title:"水印"},CustomEffectsPlugin:{category:"visual",title:"自定义效果"},PreconnectPlugin:{category:"perf",title:"预连接"},PriorityLoadingPlugin:{category:"perf",title:"优先级加载"},CachePrewarmPlugin:{category:"perf",title:"缓存预热"},CacheMemoryPlugin:{category:"perf",title:"内存缓存"},CacheIDBPlugin:{category:"perf",title:"IndexedDB 缓存"},ConcurrencyControlPlugin:{category:"perf",title:"并发控制"},ScrollIdlePlugin:{category:"perf",title:"滚动空闲"},NetworkAnalyticsPlugin:{category:"perf",title:"网络分析"},PredictiveLoadingPlugin:{category:"perf",title:"预测加载"},DataSaverPlugin:{category:"perf",title:"省流量"},ImageOptimizationPlugin:{category:"perf",title:"图片优化"},FetchLoaderPlugin:{category:"perf",title:"Fetch 加载"},ErrorBadgePlugin:{category:"robust",title:"错误徽标"},ErrorOverlayPlugin:{category:"robust",title:"错误蒙层"},FallbackImagePlugin:{category:"robust",title:"兜底图"},RetryOnErrorPlugin:{category:"robust",title:"失败重试"},ErrorTrackingPlugin:{category:"robust",title:"错误追踪"},OfflinePlugin:{category:"robust",title:"离线"},MemoryPressureAbortPlugin:{category:"robust",title:"内存压力中止"},DecodeAfterIdlePlugin:{category:"robust",title:"空闲解码"},AntiHotlinkPlugin:{category:"robust",title:"防盗链"},CDNFallbackPlugin:{category:"robust",title:"CDN 回退"},AuthPlugin:{category:"robust",title:"鉴权"},ViewportAwarePlugin:{category:"viewport",title:"视口感知"},ViewportDebouncePlugin:{category:"viewport",title:"视口防抖"},ViewportDwellPlugin:{category:"viewport",title:"视口驻留"},HoverPrefetchPlugin:{category:"viewport",title:"悬停预取"},UserBehaviorPlugin:{category:"viewport",title:"用户行为"},A11yPlugin:{category:"a11y",title:"无障碍"},AltTextPlugin:{category:"a11y",title:"替代文本"},ExifOrientationPlugin:{category:"a11y",title:"EXIF 方向"},AspectRatioSpacerPlugin:{category:"a11y",title:"宽高比占位"},ResponsivePlugin:{category:"a11y",title:"响应式"},SEOPlugin:{category:"a11y",title:"SEO"},BadgePlugin:{category:"other",title:"徽标"},DominantColorPlugin:{category:"other",title:"主色"},EventLoggerPlugin:{category:"other",title:"事件日志"},LQIPPlugin:{category:"other",title:"LQIP 低清预览"},PerformanceMonitorPlugin:{category:"other",title:"性能监控"},AdaptiveQualityPlugin:{category:"other",title:"自适应质量"},BatteryAwarePlugin:{category:"other",title:"电量感知"},CropPlugin:{category:"other",title:"裁剪"},ComparisonPlugin:{category:"other",title:"对比"},SvgPlaceholderPlugin:{category:"other",title:"SVG 占位"},WebPPlugin:{category:"other",title:"WebP"}};function DJ(e){return e.replace(/Plugin$/,"").replace(/([a-z0-9])([A-Z])/g,"$1-$2").replace(/([A-Z])([A-Z][a-z])/g,"$1-$2").toLowerCase()}const ru=Object.assign({"../../../src/custom-plugins/A11yPlugin/doc.json":L0,"../../../src/custom-plugins/AdaptiveQualityPlugin/doc.json":B0,"../../../src/custom-plugins/AltTextPlugin/doc.json":ey,"../../../src/custom-plugins/AnimatedCursorPlugin/doc.json":gy,"../../../src/custom-plugins/AntiHotlinkPlugin/doc.json":ky,"../../../src/custom-plugins/AspectRatioSpacerPlugin/doc.json":Fy,"../../../src/custom-plugins/AuthPlugin/doc.json":nv,"../../../src/custom-plugins/BadgePlugin/doc.json":hv,"../../../src/custom-plugins/BatteryAwarePlugin/doc.json":Ev,"../../../src/custom-plugins/BlurUpPlugin/doc.json":Wv,"../../../src/custom-plugins/BorderGlowPlugin/doc.json":rw,"../../../src/custom-plugins/CDNFallbackPlugin/doc.json":vw,"../../../src/custom-plugins/CacheIDBPlugin/doc.json":zw,"../../../src/custom-plugins/CacheMemoryPlugin/doc.json":Gw,"../../../src/custom-plugins/CachePrewarmPlugin/doc.json":i1,"../../../src/custom-plugins/CaptionPlugin/doc.json":x1,"../../../src/custom-plugins/CarouselPlugin/doc.json":O1,"../../../src/custom-plugins/ColorExtractionPlugin/doc.json":q1,"../../../src/custom-plugins/ColorSwatchPlugin/doc.json":ax,"../../../src/custom-plugins/ComparisonPlugin/doc.json":bx,"../../../src/custom-plugins/ConcurrencyControlPlugin/doc.json":Mx,"../../../src/custom-plugins/CounterPlugin/doc.json":Kx,"../../../src/custom-plugins/CropPlugin/doc.json":cb,"../../../src/custom-plugins/CustomEffectsPlugin/doc.json":$b,"../../../src/custom-plugins/DataSaverPlugin/doc.json":Tb,"../../../src/custom-plugins/DecodeAfterIdlePlugin/doc.json":Xb,"../../../src/custom-plugins/DepthMapPlugin/doc.json":dP,"../../../src/custom-plugins/DominantColorPlugin/doc.json":CP,"../../../src/custom-plugins/DownloadButtonPlugin/doc.json":AP,"../../../src/custom-plugins/ErrorBadgePlugin/doc.json":JP,"../../../src/custom-plugins/ErrorOverlayPlugin/doc.json":m$,"../../../src/custom-plugins/ErrorTrackingPlugin/doc.json":I$,"../../../src/custom-plugins/EventLoggerPlugin/doc.json":U$,"../../../src/custom-plugins/ExifOrientationPlugin/doc.json":tS,"../../../src/custom-plugins/FadeInPlugin/doc.json":fS,"../../../src/custom-plugins/FallbackImagePlugin/doc.json":_S,"../../../src/custom-plugins/FavoritePlugin/doc.json":FS,"../../../src/custom-plugins/FetchLoaderPlugin/doc.json":nC,"../../../src/custom-plugins/FilterPlugin/doc.json":hC,"../../../src/custom-plugins/FullscreenPlugin/doc.json":EC,"../../../src/custom-plugins/GalleryPlugin/doc.json":WC,"../../../src/custom-plugins/GlitchEffectPlugin/doc.json":rL,"../../../src/custom-plugins/HotspotPlugin/doc.json":vL,"../../../src/custom-plugins/HoverPrefetchPlugin/doc.json":zL,"../../../src/custom-plugins/HoverZoomPlugin/doc.json":GL,"../../../src/custom-plugins/ImageOptimizationPlugin/doc.json":i2,"../../../src/custom-plugins/IndicatorPlugin/doc.json":w2,"../../../src/custom-plugins/InventoryStatusPlugin/doc.json":O2,"../../../src/custom-plugins/LQIPPlugin/doc.json":q2,"../../../src/custom-plugins/LocalizationPlugin/doc.json":aI,"../../../src/custom-plugins/MemoryPressureAbortPlugin/doc.json":xI,"../../../src/custom-plugins/MorphPlugin/doc.json":DI,"../../../src/custom-plugins/NetworkAnalyticsPlugin/doc.json":QI,"../../../src/custom-plugins/OfflinePlugin/doc.json":lk,"../../../src/custom-plugins/OverlayInfoPlugin/doc.json":Pk,"../../../src/custom-plugins/ParallaxPlugin/doc.json":jk,"../../../src/custom-plugins/PerformanceMonitorPlugin/doc.json":Yk,"../../../src/custom-plugins/PreconnectPlugin/doc.json":u_,"../../../src/custom-plugins/PredictiveLoadingPlugin/doc.json":S_,"../../../src/custom-plugins/PriceTagPlugin/doc.json":N_,"../../../src/custom-plugins/PriorityLoadingPlugin/doc.json":Z_,"../../../src/custom-plugins/ProgressOverlayPlugin/doc.json":pE,"../../../src/custom-plugins/PromoBadgePlugin/doc.json":LE,"../../../src/custom-plugins/RedactionPlugin/doc.json":BE,"../../../src/custom-plugins/ResponsivePlugin/doc.json":eR,"../../../src/custom-plugins/RetryOnErrorPlugin/doc.json":gR,"../../../src/custom-plugins/RevealAnimationPlugin/doc.json":kR,"../../../src/custom-plugins/SEOPlugin/doc.json":FR,"../../../src/custom-plugins/ScrollIdlePlugin/doc.json":n5,"../../../src/custom-plugins/SkeletonPlugin/doc.json":h5,"../../../src/custom-plugins/SocialSharePlugin/doc.json":E5,"../../../src/custom-plugins/Spin360Plugin/doc.json":V5,"../../../src/custom-plugins/SvgPlaceholderPlugin/doc.json":o3,"../../../src/custom-plugins/ThumbPreloadPlugin/doc.json":y3,"../../../src/custom-plugins/ThumbSyncPlugin/doc.json":E3,"../../../src/custom-plugins/TransitionPlugin/doc.json":W3,"../../../src/custom-plugins/UserBehaviorPlugin/doc.json":rz,"../../../src/custom-plugins/VideoPosterPlugin/doc.json":vz,"../../../src/custom-plugins/ViewportAwarePlugin/doc.json":zz,"../../../src/custom-plugins/ViewportDebouncePlugin/doc.json":Gz,"../../../src/custom-plugins/ViewportDwellPlugin/doc.json":iO,"../../../src/custom-plugins/WatermarkPlugin/doc.json":xO,"../../../src/custom-plugins/WebPPlugin/doc.json":DO,"../../../src/custom-plugins/ZoomControlPlugin/doc.json":qO}),Vo=Object.keys(ru).map(e=>{const t=e.split("/").slice(-2)[0],n=ru[e],o=OJ[t];if(!o)return null;const r="create"+n.name;return{id:DJ(t),dir:t,title:o.title,category:o.category,factoryName:r,example:n.example||"",description:n.description||"",tags:n.tags||[],config:n.config||[],examples:n.examples||[],features:n.features||[],useCases:n.useCases||[],notes:n.notes||[],doc:n}}).filter(Boolean),MJ={ecommerce:[],interaction:[],visual:[],perf:[],robust:[],viewport:[],a11y:[],other:[]};for(const e of Vo)MJ[e.category].push(e);function jJ(e){return Vo.find(t=>t.id===e)}function jee(e){const t=jJ(e);if(!t)return;const n=nu,o=n[t.factoryName];if(ou(o))return o;for(const r of Object.keys(nu)){const s=n[r];if(ou(s)&&s.meta&&s.meta.name===t.dir)return s}}const Jp=[{id:"error-resilience",title:"错误韧性组合",description:"错误覆盖层 + 徽标 + 兜底图 + 自动重试 + 事件日志，构建失败的优雅降级链路。",component:"ComboErrorResilienceDemo",plugins:[{name:"ErrorOverlay 错误覆盖层",role:"加载失败时显示重试遮罩，引导用户重试"},{name:"ErrorBadge 错误徽标",role:"角落错误标记，快速识别失败项"},{name:"FallbackImage 兜底图",role:"加载失败回退到占位图，避免空白"},{name:"RetryOnError 自动重试",role:"失败后按策略自动重连，提升成功率"},{name:"EventLogger 事件日志",role:"记录加载/错误事件，便于监控排查"}],code:`import {
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
<LazyImage src="https://picsum.photos/seed/interaction-combo/800/600" alt="交互与叠层组合示例" />`}],em=[{id:"plugin-sandbox",title:"插件沙箱",description:"自包含 try/catch 沙箱隔离插件钩子执行。",component:"PluginSandboxDemo"},{id:"performance-monitoring",title:"性能监控系统",description:"全局性能监控与报告。",component:"PerformanceMonitoringDemo"},{id:"engine-infra",title:"引擎性能基础设施",description:"GlobalContext 全局上下文 + ObserverPool 共享观察池的实时可观察面板。",component:"EngineInfraDemo"},{id:"plugin-hot-reload",title:"插件热更新",description:"运行时注册 / 注销插件。",component:"PluginHotReloadDemo"},{id:"dependency-resolver",title:"依赖解析器",description:"拓扑排序 / 环检测 / 冲突校验。",component:"DependencyResolverDemo"}],TJ=Object.assign({"../combos/ComboA11ySeoDemo.tsx":()=>C(()=>import("./ComboA11ySeoDemo-Sr_zMI5x.js"),__vite__mapDeps([0,1]),import.meta.url),"../combos/ComboCacheDemo.tsx":()=>C(()=>import("./ComboCacheDemo-DD6y2fwm.js"),__vite__mapDeps([2,1]),import.meta.url),"../combos/ComboEnginePerfDemo.tsx":()=>C(()=>import("./ComboEnginePerfDemo-DaIlOr-C.js"),__vite__mapDeps([3,1]),import.meta.url),"../combos/ComboErrorResilienceDemo.tsx":()=>C(()=>import("./ComboErrorResilienceDemo-uMtX8wDn.js"),__vite__mapDeps([4,1]),import.meta.url),"../combos/ComboInteractionOverlayDemo.tsx":()=>C(()=>import("./ComboInteractionOverlayDemo-C82_o1MJ.js"),__vite__mapDeps([5,1]),import.meta.url),"../combos/ComboPerformanceDemo.tsx":()=>C(()=>import("./ComboPerformanceDemo-DmEEqqMJ.js"),__vite__mapDeps([6,1]),import.meta.url),"../combos/ComboResponsiveSeoWebPDemo.tsx":()=>C(()=>import("./ComboResponsiveSeoWebPDemo-Bt6OoyWu.js"),__vite__mapDeps([7,1]),import.meta.url),"../combos/ComboViewportInteractionDemo.tsx":()=>C(()=>import("./ComboViewportInteractionDemo-BHKPAS3v.js"),__vite__mapDeps([8,1]),import.meta.url),"../combos/ComboVisualEffectsDemo.tsx":()=>C(()=>import("./ComboVisualEffectsDemo--WOXa24b.js"),__vite__mapDeps([9,1]),import.meta.url),"../combos/ComboVisualEffectsPlusDemo.tsx":()=>C(()=>import("./ComboVisualEffectsPlusDemo-Clv9-n7x.js"),__vite__mapDeps([10,1]),import.meta.url)}),NJ=Object.assign({"../combos/ComboA11ySeoDemo.tsx":Kh,"../combos/ComboCacheDemo.tsx":Yh,"../combos/ComboEnginePerfDemo.tsx":Xh,"../combos/ComboErrorResilienceDemo.tsx":Zh,"../combos/ComboInteractionOverlayDemo.tsx":Jh,"../combos/ComboPerformanceDemo.tsx":e0,"../combos/ComboResponsiveSeoWebPDemo.tsx":t0,"../combos/ComboViewportInteractionDemo.tsx":n0,"../combos/ComboVisualEffectsDemo.tsx":o0,"../combos/ComboVisualEffectsPlusDemo.tsx":r0}),AJ=Object.assign({"../advanced/DependencyResolverDemo.tsx":()=>C(()=>import("./DependencyResolverDemo-CzeJ9Mn_.js"),__vite__mapDeps([11,1,12]),import.meta.url),"../advanced/EngineInfraDemo.tsx":()=>C(()=>import("./EngineInfraDemo-BA8QE3Pg.js"),__vite__mapDeps([13,1]),import.meta.url),"../advanced/PerformanceMonitoringDemo.tsx":()=>C(()=>import("./PerformanceMonitoringDemo-CG1A0wCC.js"),__vite__mapDeps([14,1]),import.meta.url),"../advanced/PluginHotReloadDemo.tsx":()=>C(()=>import("./PluginHotReloadDemo-DOfPkn2_.js"),__vite__mapDeps([15,1]),import.meta.url),"../advanced/PluginSandboxDemo.tsx":()=>C(()=>import("./PluginSandboxDemo-CEDKQ0x_.js"),__vite__mapDeps([16,12,1]),import.meta.url)}),BJ=Object.assign({"../advanced/DependencyResolverDemo.tsx":s0,"../advanced/EngineInfraDemo.tsx":i0,"../advanced/PerformanceMonitoringDemo.tsx":a0,"../advanced/PluginHotReloadDemo.tsx":l0,"../advanced/PluginSandboxDemo.tsx":c0}),UJ=Object.assign({"../scenarios/VirtualGridDemo.tsx":()=>C(()=>import("./VirtualGridDemo-DJqaFsJ9.js"),__vite__mapDeps([17,18,1]),import.meta.url),"../scenarios/VirtualHorizontalListDemo.tsx":()=>C(()=>import("./VirtualHorizontalListDemo-HjQT6urZ.js"),__vite__mapDeps([19,18,1]),import.meta.url),"../scenarios/VirtualVerticalListDemo.tsx":()=>C(()=>import("./VirtualVerticalListDemo-aP4_l3JE.js"),__vite__mapDeps([20,18,1]),import.meta.url)}),FJ=Object.assign({"../scenarios/VirtualGridDemo.tsx":u0,"../scenarios/VirtualHorizontalListDemo.tsx":d0,"../scenarios/VirtualVerticalListDemo.tsx":p0});function hl(e,t,n){const o=e[`../${n}`];return{Stage:o?x.lazy(()=>o().then(s=>({default:s.default}))):()=>null,source:t[`../${n}`]??""}}const VJ=Jp.map(e=>{const t=`combos/${e.component}.tsx`,{Stage:n,source:o}=hl(TJ,NJ,t);return{meta:{slug:e.id,title:e.title,group:"combo",description:e.description,plugins:e.plugins,code:e.code},Stage:n,file:`${e.component}.tsx`,source:o}}),WJ=em.map(e=>{const t=`advanced/${e.component}.tsx`,{Stage:n,source:o}=hl(AJ,BJ,t);return{meta:{slug:e.id,title:e.title,group:"advanced",description:e.description},Stage:n,file:`${e.component}.tsx`,source:o}}),HJ=[{slug:"virtual-vertical",title:"虚拟滚动 · 纵向列表",file:"scenarios/VirtualVerticalListDemo.tsx"},{slug:"virtual-horizontal",title:"虚拟滚动 · 横向列表",file:"scenarios/VirtualHorizontalListDemo.tsx"},{slug:"virtual-grid",title:"虚拟滚动 · 网格",file:"scenarios/VirtualGridDemo.tsx"}],GJ=HJ.map(e=>{const{Stage:t,source:n}=hl(UJ,FJ,e.file);return{meta:{slug:e.slug,title:e.title,group:"scenario"},Stage:t,file:e.file.split("/").pop(),source:n}}),as=[...VJ,...WJ,...GJ],qJ=["combo","advanced","scenario"];function Tee(e){return as.filter(t=>t.meta.group===e)}function Nee(e){return as.find(t=>t.meta.slug===e)}const tm={combo:{label:"组合示例",hint:"多插件协同的真实业务组合"},advanced:{label:"高级功能",hint:"底层能力与引擎设施"},scenario:{label:"场景示例",hint:"虚拟滚动等长列表组合"}},QJ="import|from|export|default|function|return|const|let|var|new|if|else|for|of|in|while|switch|case|break|continue|type|interface|extends|implements|as|satisfies|await|async|throw|try|catch|finally|class|typeof|instanceof|delete|void|yield",KJ="true|false|null|undefined|this|super",YJ="number|string|boolean|object|any|unknown|never|React|HTMLElement|void",su=new RegExp([String.raw`(\/\/[^\n]*|\/\*[\s\S]*?\*\/)`,String.raw`(\`(?:\\[\s\S]|[^\\\`])*\`|"(?:\\[\s\S]|[^\\"])*"|'(?:\\[\s\S]|[^\\'])*')`,String.raw`\b(${QJ})\b`,String.raw`\b(${KJ})\b`,String.raw`\b(${YJ})\b`,String.raw`(<\/?[A-Za-z][\w.$]*)`,String.raw`\b(\d+(?:\.\d+)?)\b`].join("|"),"g"),iu=["tok-comment","tok-string","tok-kw","tok-lit","tok-type","tok-tag","tok-num"];function XJ(e){const t=[];let n=0;su.lastIndex=0;let o;for(;o=su.exec(e);){o.index>n&&t.push({text:e.slice(n,o.index),cls:null});const r=iu.findIndex((s,i)=>o[i+1]!==void 0);t.push({text:o[0],cls:r>=0?iu[r]:null}),n=o.index+o[0].length}return n<e.length&&t.push({text:e.slice(n),cls:null}),t}function au(e){try{const t=document.createElement("textarea");t.value=e,t.setAttribute("readonly",""),t.style.position="fixed",t.style.opacity="0",document.body.appendChild(t),t.select();const n=document.execCommand("copy");return document.body.removeChild(t),n}catch{return!1}}function ZJ({code:e,title:t="tsx",collapseAfter:n=24,maxHeight:o}){const[r,s]=x.useState("idle"),[i,a]=x.useState(!1),l=x.useMemo(()=>e.replace(/\s+$/,"").split(`
`),[e]),c=n>0&&l.length>n,u=c&&!i?l.slice(0,n).join(`
`):e,d=x.useMemo(()=>XJ(u),[u]),p=x.useCallback(async()=>{var v;let g=!1;if((v=navigator.clipboard)!=null&&v.writeText)try{await navigator.clipboard.writeText(e),g=!0}catch{g=au(e)}else g=au(e);s(g?"ok":"fail"),window.setTimeout(()=>s("idle"),1600)},[e]);return m.jsxs("div",{className:"code",children:[m.jsxs("div",{className:"code-head",children:[m.jsx("span",{children:t}),m.jsxs("span",{style:{display:"flex",gap:6,alignItems:"center"},children:[m.jsxs("span",{children:[l.length," 行"]}),m.jsx("button",{type:"button",className:`code-copy${r==="ok"?" is-ok":r==="fail"?" is-fail":""}`,onClick:p,children:r==="ok"?"已复制":r==="fail"?"复制失败":"复制"})]})]}),m.jsx("pre",{style:o?{maxHeight:o}:{maxHeight:"none"},children:m.jsx("code",{children:d.map((g,v)=>g.cls?m.jsx("span",{className:g.cls,children:g.text},v):m.jsx(A.Fragment,{children:g.text},v))})}),c?m.jsx("button",{type:"button",className:"code-more",onClick:()=>a(g=>!g),children:i?"收起":`展开余下 ${l.length-n} 行`}):null]})}function nm(e){return e.props??e.config??[]}function JJ({doc:e}){var r,s,i;const t=nm(e),n=e.events??[],o=e.methods??[];return m.jsxs(m.Fragment,{children:[m.jsxs("div",{className:"doc-sec",children:[m.jsx("h5",{children:"属性 Props"}),t.length?m.jsxs("table",{className:"doc-table",children:[m.jsx("thead",{children:m.jsxs("tr",{children:[m.jsx("th",{children:"属性"}),m.jsx("th",{children:"类型"}),m.jsx("th",{children:"默认"}),m.jsx("th",{children:"说明"})]})}),m.jsx("tbody",{children:t.map(a=>m.jsxs("tr",{children:[m.jsx("td",{children:m.jsx("code",{children:a.name})}),m.jsx("td",{children:m.jsx("code",{className:"dim",children:a.type})}),m.jsx("td",{children:m.jsx("code",{className:"dim",children:a.default??"-"})}),m.jsx("td",{children:a.description??"—"})]},a.name))})]}):m.jsx("p",{className:"doc-note",children:"无可配置属性，工厂零参调用即可。"})]}),m.jsxs("div",{className:"doc-sec",children:[m.jsx("h5",{children:"事件 Events"}),n.length?m.jsxs("table",{className:"doc-table",children:[m.jsx("thead",{children:m.jsxs("tr",{children:[m.jsx("th",{children:"事件"}),m.jsx("th",{children:"触发时机"}),m.jsx("th",{children:"说明"})]})}),m.jsx("tbody",{children:n.map(a=>m.jsxs("tr",{children:[m.jsx("td",{children:m.jsx("code",{children:a.name})}),m.jsx("td",{children:a.when}),m.jsx("td",{children:a.description})]},a.name))})]}):m.jsx("p",{className:"doc-note",children:"不参与任何事件。"})]}),m.jsxs("div",{className:"doc-sec",children:[m.jsx("h5",{children:"方法 Methods"}),o.length?m.jsxs("table",{className:"doc-table",children:[m.jsx("thead",{children:m.jsxs("tr",{children:[m.jsx("th",{children:"方法"}),m.jsx("th",{children:"签名"}),m.jsx("th",{children:"说明"})]})}),m.jsx("tbody",{children:o.map(a=>m.jsxs("tr",{children:[m.jsx("td",{children:m.jsx("code",{children:a.name})}),m.jsx("td",{children:m.jsx("code",{className:"dim",children:a.signature})}),m.jsx("td",{children:a.description})]},a.name))})]}):m.jsx("p",{className:"doc-note",children:e.methodsNote??"不调用上下文方法。"})]}),m.jsxs("div",{className:"doc-cols",children:[(r=e.features)!=null&&r.length?m.jsxs("div",{children:[m.jsx("h5",{children:"能做"}),m.jsx("ul",{children:e.features.map(a=>m.jsx("li",{children:a},a))})]}):null,(s=e.useCases)!=null&&s.length?m.jsxs("div",{children:[m.jsx("h5",{children:"适合"}),m.jsx("ul",{children:e.useCases.map(a=>m.jsx("li",{children:a},a))})]}):null,(i=e.notes)!=null&&i.length?m.jsxs("div",{children:[m.jsx("h5",{children:"注意"}),m.jsx("ul",{children:e.notes.map(a=>m.jsx("li",{children:a},a))})]}):null]})]})}function eee({factory:e,priority:t,summary:n,doc:o,defaultOpen:r=!0}){var i,a;const s={props:nm(o).length,events:((i=o.events)==null?void 0:i.length)??0,methods:((a=o.methods)==null?void 0:a.length)??0};return m.jsxs("details",{className:"api-plug",open:r,children:[m.jsxs("summary",{children:[m.jsx("code",{children:e}),m.jsxs("span",{className:"tag tag-accent",children:["priority ",t]}),m.jsx("span",{className:"api-plug-desc",children:n}),m.jsxs("span",{className:"api-plug-n",children:[s.props," 属性 · ",s.events," 事件 · ",s.methods," 方法"]})]}),m.jsx("div",{className:"api-plug-body",children:m.jsx(JJ,{doc:o})})]})}const tee=/create[A-Z]\w*Plugin/g;function nee(e){return(e.match(/create[A-Z]\w*Plugin/)??[e])[0]}function om(e){return e.dir?`create${e.dir}`:nee(e.factory)}function oee(e){return new Set(e.match(tee)??[])}function ree(e,t){const n=oee(e);return t.filter(o=>n.has(om(o))).sort((o,r)=>o.priority-r.priority)}function see({source:e,plugins:t,heading:n="本页用到的插件"}){const o=x.useMemo(()=>ree(e,t),[e,t]);return o.length===0?null:m.jsxs("section",{className:"api-sec",children:[m.jsxs("div",{className:"api-sec-head",children:[m.jsxs("h2",{className:"api-sec-title",children:[n," · ",o.length," 个"]}),m.jsxs("p",{className:"api-sec-sub",children:["就是上面代码里装配的全部成员。属性是工厂参数，事件是父组件传进来的回调， 方法是插件读取 / 调用的上下文能力 —— 表内容与 ",m.jsx("code",{children:"doc.json"})," 同源，随包发布。"]})]}),o.map(r=>m.jsx(eee,{factory:om(r),priority:r.priority,summary:r.summary??r.doc.description??"",doc:r.doc},r.factory))]})}const iee=Vo.map((e,t)=>({factory:e.factoryName,priority:t,summary:e.description,doc:e.doc}));function aee({entry:e,order:t}){const{meta:n,Stage:o,file:r,source:s}=e;return m.jsxs("section",{className:"page","data-demo":n.slug,children:[m.jsxs("div",{className:"page-header",children:[m.jsxs("div",{style:{display:"flex",alignItems:"center",gap:10,marginBottom:6},children:[m.jsx("span",{style:{fontFamily:"var(--ff-mono, monospace)",fontSize:"0.8em",color:"var(--text-2)",border:"1px solid var(--accent-line)",borderRadius:6,padding:"1px 8px"},children:String(t).padStart(2,"0")}),m.jsx("span",{style:{fontSize:"0.78em",color:"var(--accent-2)",letterSpacing:.04*1+"em"},children:tm[n.group].label})]}),m.jsx("h1",{className:"page-title",children:n.title}),n.description?m.jsx("p",{className:"page-desc",children:n.description}):null]}),m.jsx("div",{className:"demo-stage-wrap",children:m.jsx(x.Suspense,{fallback:m.jsx("div",{className:"loading",children:"加载中…"}),children:m.jsx(o,{})})}),s?m.jsxs("div",{className:"demo-source",children:[m.jsxs("h4",{className:"block-title",children:["完整源码 · ",r]}),m.jsx(ZJ,{code:s,title:r})]}):null,s?m.jsx(see,{source:s,plugins:iee}):null]})}const lee=[{id:"a1-poster-wall",code:"A1",cat:"vod",title:"竖版海报墙",ref:{site:"olehdtv",page:"影视列表页",url:"https://www.olehdtv.com/index.php/vod/type/id/2.html"},pain:"一屏 20 张 2:3 竖图，首屏那几张直接决定 LCP；占位没做好就是满屏跳动。",tone:"dark",plugs:[{fn:"createPriorityLoadingPlugin",arg:'{ priority: "high" }',why:"首屏海报压过下游请求"},{fn:"createAspectRatioSpacerPlugin",arg:"{ ratio: 2 / 3 }",why:"2:3 占位，加载前后零抖动"},{fn:"createBlurUpPlugin",arg:"{ startBlur: 14, endBlur: 0, durationMs: 520 }",why:"低清糊图先出，避免大片留白"},{fn:"createFadeInPlugin",arg:'{ durationMs: 320, easing: "ease-out" }',why:"边缘不发灰，切换更顺"}]},{id:"a2-episode-row",code:"A2",cat:"vod",title:"剧集选集横滑",ref:{site:"爱奇艺 / olehdtv",page:"播放页选集条",url:"https://www.olehdtv.com/index.php/vod/type/id/2.html"},pain:"手指一滑过 16 集，若不加约束会同时发起十几个请求，抢掉正片的带宽。",tone:"dark",plugs:[{fn:"createViewportAwarePlugin",arg:'{ rootMargin: "120px", once: true }',why:"只在进入视口时开始加载"},{fn:"createConcurrencyControlPlugin",arg:'{ maxConcurrent: 4, scope: "global" }',why:"横滑瞬间的请求洪峰压平"},{fn:"createMemoryCachePlugin",arg:"{ maxEntries: 120, ttlMs: 1800000 }",why:"来回滑不重复请求"},{fn:"createSkeletonPlugin",arg:'{ type: "shimmer", borderRadius: 4 }',why:"空槽有稳定的视觉重量"}]},{id:"a3-recommend-side",code:"A3",cat:"vod",title:"播放页相关推荐",ref:{site:"Netflix / 爱奇艺",page:"播放页右侧推荐列",url:"https://www.olehdtv.com/index.php/vod/type/id/2.html"},pain:"正片在播，侧栏却还在发请求；滚到底一批，滚回来又一批。",tone:"dark",plugs:[{fn:"createViewportDebouncePlugin",arg:"{ debounceMs: 200, onlyWhenIntersecting: true }",why:"滚动停稳再发请求"},{fn:"createIDBCachePlugin",arg:'{ dbName: "vane-vod", ttlMs: 259200000 }',why:"跨会话复用，回看不发请求"},{fn:"createSkeletonPlugin",arg:'{ type: "shimmer", borderRadius: 4 }',why:"侧栏不会突然长高"}]},{id:"a4-cast-avatar",code:"A4",cat:"vod",title:"演职人员头像",ref:{site:"影视详情页",page:"演职人员区块",url:"https://www.olehdtv.com/index.php/vod/type/id/2.html"},pain:"演员库的图常年失效、比例五花八门，裁圆之后边缘还容易露出白底。",tone:"dark",plugs:[{fn:"createCropPlugin",arg:"{ enabled: true, focusPoint: { x: 0.5, y: 0.4 } }",why:"按脸部中心裁方图"},{fn:"createFallbackImagePlugin",arg:'{ fallbackSrc: "…/cast-fallback" }',why:"缺图不留破图占位"},{fn:"createColorExtractionPlugin",arg:"{ setContainerBg: true, sampleSize: 6 }",why:"主色铺底，圆形边缘不露白"}],note:"第 4 位演员故意给了失效地址，可直接看到兜底链路。"},{id:"a5-paid-poster",code:"A5",cat:"vod",title:"会员专享海报（鉴权）",ref:{site:"会员专区",page:"付费墙海报",url:"https://www.olehdtv.com/index.php/vod/type/id/2.html"},pain:"付费内容走私有图源，凭证过期就 401；破图或白屏都会直接掉付费转化。",tone:"dark",plugs:[{fn:"createAuthPlugin",arg:'{ tokenParam: "access_token" }',why:"把登录态拼进图片地址"},{fn:"createRetryOnErrorPlugin",arg:"{ maxRetries: 2, baseDelayMs: 400 }",why:"凭证刚续期时的瞬时失败可自愈"},{fn:"createErrorOverlayPlugin",arg:'{ retryText: "重新鉴权" }',why:"失败要给明确出口"}],note:"依赖演示站受保护接口（pnpm serve:demo）；token 换成 expired-token 即进入 401 失败态。"},{id:"a6-tiered-quality",code:"A6",cat:"vod",title:"分档清晰度",ref:{site:"影视详情页",page:"剧照区",url:"https://www.olehdtv.com/index.php/vod/type/id/2.html"},pain:"同一张剧照，桌面要 1280、手机 3G 只该给 400；一套写死就是两头不讨好。",tone:"dark",plugs:[{fn:"createAdaptiveQualityPlugin",arg:"{ lowQ: 40, highQ: 80, saveDataQuality: 35 }",why:"按网络类型定质量"},{fn:"createResponsivePlugin",arg:"{ variants: [400, 800, 1200], sizes }",why:"生成 srcset 交给浏览器挑"},{fn:"createDataSaverPlugin",arg:"{ respectSaveData: true, fallbackQuality: 0.6 }",why:"尊重系统省流量开关"}],note:"图床模板是 picsum 的 /宽/高，真实项目替换 buildSrc 即可。"}],cee=[{id:"c1-bili-cover-grid",code:"C1",cat:"video",title:"推荐流封面栅格",ref:{site:"bilibili",page:"首页推荐流",url:"https://www.bilibili.com/"},pain:"16:9 封面 + 右下时长胶囊；一屏十几条，抢占不到视口就不该发请求。",tone:"light",plugs:[{fn:"createAspectRatioSpacerPlugin",arg:"{ ratio: 16 / 9 }",why:"封面比例固定，栅格不塌"},{fn:"createBadgePlugin",arg:'{ text: dur, position: "bottom-right" }',why:"时长胶囊，逐条装配"},{fn:"createViewportDwellPlugin",arg:"{ dwellMs: 180, onlyWhenIntersecting: true }",why:"快速滑过不算真正看到"},{fn:"createFadeInPlugin",arg:"{ durationMs: 260 }",why:"白底上的切换更柔和"},{fn:"createVideoPosterPlugin",arg:"{ playInModal: true }",why:"置顶条点封面起播"}],note:"时长逐条不同，用 useMemo 固定 withPlugins 的组件身份，避免重渲染整块重挂。"},{id:"c2-hero-banner",code:"C2",cat:"video",title:"首页运营 Banner",ref:{site:"bilibili / YouTube",page:"首页顶部轮播",url:"https://www.youtube.com/"},pain:"整站 LCP 就是这张大图，晚 300ms 就是指标上的一次降级。",tone:"light",plugs:[{fn:"createPriorityLoadingPlugin",arg:'{ priority: "high" }',why:"唯一该抢带宽的图"},{fn:"createPreconnectPlugin",arg:'{ domains: ["https://picsum.photos"] }',why:"提前建连省一个 RTT"},{fn:"createLqipPlugin",arg:"{ lqipSrc: (src) => …, blur: 16 }",why:"20px 低清先铺满"}]},{id:"c3-watch-side-list",code:"C3",cat:"video",title:"接下来播放列",ref:{site:"YouTube",page:"播放页右侧列表",url:"https://www.youtube.com/"},pain:"滚动时一帧十几个请求，直接和正在播放的视频抢带宽。",tone:"dark",plugs:[{fn:"createScrollIdlePlugin",arg:"{ idleMs: 120, maxWaitMs: 900 }",why:"滚动停了才放行"},{fn:"createViewportAwarePlugin",arg:'{ rootMargin: "160px", once: true }',why:"提前一屏但与滚动解耦"},{fn:"createMemoryCachePlugin",arg:"{ maxEntries: 80 }",why:"切视频不重复拉封面"}]},{id:"c4-uploader-avatar",code:"C4",cat:"video",title:"UP 主头像（直播中）",ref:{site:"bilibili",page:"UP 主卡片",url:"https://www.bilibili.com/"},pain:"头像小、数量多、缺图率高；直播中还要有状态信号。",tone:"light",plugs:[{fn:"createCropPlugin",arg:"{ focusPoint: { x: 0.5, y: 0.35 } }",why:"脸部居中裁方"},{fn:"createBorderGlowPlugin",arg:'{ color: "rgba(251,114,153,.75)" }',why:"直播中的信号灯"},{fn:"createFallbackImagePlugin",arg:"{ fallbackSrc: … }",why:"缺图有人形兜底"}]},{id:"c5-hover-preview",code:"C5",cat:"video",title:"悬停起播预览",ref:{site:"bilibili / YouTube",page:"封面悬停预览",url:"https://www.bilibili.com/"},pain:"悬停 300ms 才真的要预览，但这 300ms 里把下一帧取回来，体验差别巨大。",tone:"dark",plugs:[{fn:"createHoverPrefetchPlugin",arg:'{ trigger: "mouseenter", max: 2 }',why:"悬停即预取下一帧"},{fn:"createFetchLoaderPlugin",arg:"{ enabled: true, timeout: 20000 }",why:"拿到进度、可中断、可复用"},{fn:"createTransitionPlugin",arg:"{ durationMs: 260 }",why:"帧切换不闪"}],note:"真实项目把「下一帧」换成视频首帧图或雪碧图分片。"},{id:"c6-saver-mode",code:"C6",cat:"video",title:"移动端省流模式",ref:{site:"bilibili",page:"移动端省流",url:"https://www.bilibili.com/"},pain:"用户开着省流量、电量只剩 15%，这时还按桌面规格拉图就是纯粹的浪费。",tone:"dark",plugs:[{fn:"createDataSaverPlugin",arg:"{ respectSaveData: true, fallbackQuality: 0.6 }",why:"尊重 Save-Data"},{fn:"createBatteryAwarePlugin",arg:"{ lowBatteryThreshold: 0.2, downgradeWidth: 640 }",why:"低电量降档"},{fn:"createNetworkAnalyticsPlugin",arg:"{ trackCDN: true }",why:"量化省了多少字节"}]}],uee=[{id:"b1-jd-search-grid",code:"B1",cat:"ecommerce",title:"搜索结果双列流",ref:{site:"jd.com",page:"搜索结果页",url:"https://www.jd.com/"},pain:"一屏 20 张 1:1 主图，来回切排序会重复拉图，请求洪峰还会挤掉首屏。",tone:"light",plugs:[{fn:"createMemoryCachePlugin",arg:"{ maxEntries: 240, ttlMs: 900000 }",why:"切排序不重复请求"},{fn:"createSkeletonPlugin",arg:'{ type: "shimmer" }',why:"灰块占位，栅格不塌"},{fn:"createConcurrencyControlPlugin",arg:"{ maxConcurrent: 6 }",why:"20 张图压平请求洪峰"},{fn:"createFadeInPlugin",arg:"{ durationMs: 220 }",why:"白底上切换更柔和"}]},{id:"b2-sku-gallery-zoom",code:"B2",cat:"ecommerce",title:"商详主图联动",ref:{site:"jd.com",page:"商品详情页",url:"https://www.jd.com/"},pain:"4 张主图来回切，切一次拉一次；放大镜做过头就是拖影。",tone:"light",plugs:[{fn:"createGalleryPlugin",arg:"{ enableLightbox: true }",why:"点开看大图"},{fn:"createHoverZoomPlugin",arg:"{ scale: 1.08, durationMs: 180 }",why:"轻放大不出拖影"},{fn:"createColorSwatchPlugin",arg:"{ maxColors: 5 }",why:"色卡即 SKU 入口"},{fn:"createPreconnectPlugin",arg:'{ domains: ["https://picsum.photos"] }',why:"提前建连"}]},{id:"b3-flash-sale",code:"B3",cat:"ecommerce",title:"秒杀主推位",ref:{site:"jd.com",page:"秒杀会场",url:"https://www.jd.com/"},pain:"同一张图上要同时挂价格、促销、库存、进度四个信息层，还不能互相遮挡。",tone:"light",plugs:[{fn:"createPriorityLoadingPlugin",arg:'{ priority: "high" }',why:"会场唯一大图"},{fn:"createPriceTagPlugin",arg:"{ price: 1299, originalPrice: 2599 }",why:"价格 + 省钱额"},{fn:"createPromoBadgePlugin",arg:'{ type: "hot", pulse: true }',why:"促销标呼吸"},{fn:"createInventoryStatusPlugin",arg:'{ status: "low-stock" }',why:"库存紧张"},{fn:"createProgressOverlayPlugin",arg:"{ showPercentText: true }",why:"真实百分比进度"},{fn:"createBadgePlugin",arg:'{ text: "已售 2.3 万件" }',why:"销量角标"}]},{id:"b4-review-grid",code:"B4",cat:"ecommerce",title:"买家秀九宫格",ref:{site:"淘宝 / 京东",page:"评价区",url:"https://www.jd.com/"},pain:"UGC 图会 404、比例乱、还可能带手机号；运营侧看不到坏图。",tone:"light",plugs:[{fn:"createFallbackImagePlugin",arg:"{ fallbackSrc: … }",why:"缺图不留破图"},{fn:"createErrorBadgePlugin",arg:'{ text: "失效" }',why:"坏图可被定位"},{fn:"createRedactionPlugin",arg:"{ boxes: [...] }",why:"隐私区域打码"},{fn:"createConcurrencyControlPlugin",arg:'{ maxConcurrent: 4, scope: "viewport" }',why:"评论区限流"}],note:"第 3 张是失效地址，可直接看到兜底 + 「失效」角标；第 1 张上有一块打码区域。"},{id:"b5-cart-recs",code:"B5",cat:"ecommerce",title:"猜你喜欢横滑",ref:{site:"淘宝 / 京东",page:"购物车页",url:"https://www.jd.com/"},pain:"横滑是「滑一点看一点」，等滑到才请求，用户眼里就是一片白。",tone:"light",plugs:[{fn:"createViewportAwarePlugin",arg:'{ rootMargin: "200px" }',why:"进视口才加载"},{fn:"createPredictiveLoadingPlugin",arg:'{ strategy: "increment", maxPreload: 2 }',why:"按方向预热后两张"},{fn:"createHoverPrefetchPlugin",arg:'{ trigger: "mouseenter", max: 1 }',why:"悬停再补一张"}]},{id:"b6-hotlink-guard",code:"B6",cat:"ecommerce",title:"图床防盗链",ref:{site:"电商图床",page:"商品图直链",url:"https://www.jd.com/"},pain:"主域带 Referer 校验，直链一律 403；没有回退策略就是一片破图。",tone:"light",plugs:[{fn:"createAntiHotlinkPlugin",arg:'{ allowedDomains: ["picsum.photos"] }',why:"域名白名单"},{fn:"createCDNFallbackPlugin",arg:"{ cdnBases: [...] }",why:"主域挂了换备域"},{fn:"createFallbackImagePlugin",arg:"{ fallbackSrc: … }",why:"最后一道兜底"}],note:"第三张用的是完全不存在的域，用来固定演示「主域失败 → 兜底」这条链路。"},{id:"b7-multi-currency",code:"B7",cat:"ecommerce",title:"多语言商品卡",ref:{site:"跨境站点",page:"商品列表",url:"https://www.jd.com/"},pain:"同一 SKU 要出 4 种语言与 4 种货币，价格符号和文案都得跟着换。",tone:"light",plugs:[{fn:"createLocalizationPlugin",arg:"{ currentLocale: code }",why:"按 locale 切文案"},{fn:"createPriceTagPlugin",arg:"{ currency, price }",why:"货币符号随 locale"}]},{id:"b8-format-webp",code:"B8",cat:"ecommerce",title:"图片格式优化",ref:{site:"电商列表页",page:"商品图",url:"https://www.jd.com/"},pain:"同一张图，Chromium 该给 WebP，Safari 老版本只能给 JPEG；写死就是浪费。",tone:"light",plugs:[{fn:"createWebPPlugin",arg:"{ rewrite: true }",why:"嗅探后改写后缀"},{fn:"createImageOptimizationPlugin",arg:"{ maxWidth: 800, quality: 0.82 }",why:"图床侧再压一道"},{fn:"createSvgPlaceholderPlugin",arg:"{ svgContent: … }",why:"灰底 SVG 占位"}]}],dee=[{id:"d1-xhs-masonry",code:"D1",cat:"social",title:"三列不等高瀑布流",ref:{site:"小红书",page:"首页发现",url:"https://www.xiaohongshu.com/"},pain:"每条笔记比例不同，没有按条占位，滑到一半整列会突然错位。",tone:"light",plugs:[{fn:"createAspectRatioSpacerPlugin",arg:"{ ratio: item.ratio }",why:"按条占位，列不跳动"},{fn:"createViewportAwarePlugin",arg:'{ rootMargin: "150px" }',why:"进视口才加载"},{fn:"createBlurUpPlugin",arg:"{ startBlur: 10 }",why:"糊图先出"},{fn:"createConcurrencyControlPlugin",arg:"{ maxConcurrent: 5 }",why:"瀑布流限并发"}],note:"比例逐条不同，所以 withPlugins 放进 useMemo 按比例缓存组件身份。"},{id:"d2-nine-grid-lightbox",code:"D2",cat:"social",title:"九宫格 → 灯箱",ref:{site:"微博 / 小红书",page:"笔记详情的九宫格",url:"https://www.xiaohongshu.com/"},pain:"九张图铺满屏，用户真正想看的是其中一张的高清版。",tone:"light",plugs:[{fn:"createGalleryPlugin",arg:"{ enableLightbox: true }",why:"点开进灯箱"},{fn:"createTransitionPlugin",arg:"{ durationMs: 240 }",why:"切换不闪"},{fn:"createSkeletonPlugin",arg:'{ type: "pulse" }',why:"空格有稳定视觉重量"}]},{id:"d3-article-images",code:"D3",cat:"social",title:"长文配图",ref:{site:"知乎 / 公众号",page:"长文正文",url:"https://www.zhihu.com/"},pain:"正文图一旦晚到，段落就被整体推下去；没有 alt 还会丢检索流量。",tone:"light",plugs:[{fn:"createAspectRatioSpacerPlugin",arg:"{ ratio: 16 / 9 }",why:"先占住高度"},{fn:"createLqipPlugin",arg:"{ lqipSrc: (src) => …, blur: 18 }",why:"24px 低清先出"},{fn:"createSEOPlugin",arg:'{ altFallback: "文章配图" }',why:"alt 与结构化"}]},{id:"d4-follow-avatars",code:"D4",cat:"social",title:"关注推荐列表",ref:{site:"社交产品",page:"关注推荐",url:"https://www.xiaohongshu.com/"},pain:"几十个 38px 小头像，单个失败会留下一个空洞，整行都显得脏。",tone:"light",plugs:[{fn:"createCropPlugin",arg:"{ focusPoint: { x: 0.5, y: 0.45 } }",why:"人脸居中裁方"},{fn:"createRetryOnErrorPlugin",arg:"{ maxRetries: 2, jitter: true }",why:"抖动重试一次"},{fn:"createFallbackImagePlugin",arg:"{ fallbackSrc: … }",why:"最后给默认剪影"}]},{id:"d5-share-card",code:"D5",cat:"social",title:"分享卡片",ref:{site:"内容社区",page:"图片分享/图注",url:"https://www.xiaohongshu.com/"},pain:"分享位、图注、拍摄参数都要贴在图上，还得在悬停时才出现。",tone:"dark",plugs:[{fn:"createSocialSharePlugin",arg:"{ showOnHover: true }",why:"分享入口"},{fn:"createCaptionPlugin",arg:'{ position: "bottom" }',why:"图注常驻"},{fn:"createOverlayInfoPlugin",arg:'{ position: "top", trigger: "hover" }',why:"参数蒙层"}]}],pee=[{id:"e1-news-mixed",code:"E1",cat:"news",title:"头条大图 + 列表小图",ref:{site:"新浪 / 网易",page:"新闻首页",url:"https://news.sina.com.cn/"},pain:"首屏只有一张图该抢带宽，剩下几十张小图应该等滚动停稳。",tone:"light",plugs:[{fn:"createPriorityLoadingPlugin",arg:'{ priority: "high" }',why:"头条就是 LCP"},{fn:"createResponsivePlugin",arg:"{ variants: [400, 800, 1200] }",why:"按容器宽度出图"},{fn:"createViewportDebouncePlugin",arg:"{ debounceMs: 160 }",why:"滚动停稳再发"}]},{id:"e2-photo-set",code:"E2",cat:"news",title:"组图 / 图集翻页",ref:{site:"门户图集",page:"组图浏览",url:"https://news.sina.com.cn/"},pain:"一图一页地翻，每张都要等；没有进度反馈就会以为卡住了。",tone:"dark",plugs:[{fn:"createGalleryPlugin",arg:"{ enableLightbox: true }",why:"全屏看图"},{fn:"createProgressOverlayPlugin",arg:"{ height: 3 }",why:"细进度条"},{fn:"createPreconnectPlugin",arg:'{ domains: ["https://picsum.photos"] }',why:"翻页前先建连"}]},{id:"e3-inline-anti-cls",code:"E3",cat:"news",title:"正文图防 CLS",ref:{site:"资讯正文",page:"内嵌图",url:"https://news.sina.com.cn/"},pain:"图片没有预设高度，加载完成的一瞬间把下面几段全推下去。",tone:"light",plugs:[{fn:"createAspectRatioSpacerPlugin",arg:"{ ratio: 4 / 3 }",why:"先把高度占住"},{fn:"createSkeletonPlugin",arg:'{ type: "shimmer" }',why:"占位有质感"},{fn:"createSEOPlugin",arg:'{ aspectRatio: "4:3" }',why:"alt 与结构化"}]},{id:"e4-dead-links",code:"E4",cat:"news",title:"失效外链",ref:{site:"老牌资讯站",page:"历史文章配图",url:"https://news.sina.com.cn/"},pain:"2019 年的图床早就迁移了，没人上报你就永远不知道有多少破图。",tone:"light",plugs:[{fn:"createCDNFallbackPlugin",arg:"{ cdnBases: [...] }",why:"备域兜一次"},{fn:"createFallbackImagePlugin",arg:"{ fallbackSrc: … }",why:"兜底图收场"},{fn:"createErrorTrackingPlugin",arg:"{ report, showBadge: true }",why:"失败可上报"}],note:"控制台执行 window.__vaneDeadLink 可看到失败上报的原始记录。"},{id:"e5-a11y-gov",code:"E5",cat:"news",title:"无障碍政务站",ref:{site:"公共服务站点",page:"政策图解",url:"https://www.gov.cn/"},pain:"读屏软件读不出「图片加载中」，运营漏填 alt 就是一次合规风险。",tone:"light",plugs:[{fn:"createA11yPlugin",arg:"{ statusText: … }",why:"朗读状态"},{fn:"createAltTextPlugin",arg:'{ derive: true, prefix: "示意图：" }',why:"alt 自动推导"},{fn:"createSEOPlugin",arg:"{ enabled: true }",why:"alt + 结构化"}],note:"第一张故意留空 alt，插件会按标题推导出「示意图：办事大厅引导图」。"}],mee=[{id:"f1-unsplash-masonry",code:"F1",cat:"gallery",title:"瀑布流无限滚动",ref:{site:"Unsplash",page:"探索页",url:"https://unsplash.com/"},pain:"图库用户会反复回看同一批图，每次都重新拉一遍纯属浪费。",tone:"dark",plugs:[{fn:"createIDBCachePlugin",arg:'{ dbName: "vane-gallery" }',why:"落 IndexedDB 复用"},{fn:"createConcurrencyControlPlugin",arg:"{ maxConcurrent: 6 }",why:"限并发"},{fn:"createViewportAwarePlugin",arg:'{ rootMargin: "240px" }',why:"提前一屏"},{fn:"createSkeletonPlugin",arg:'{ type: "shimmer" }',why:"暗色骨架"}],note:"刷新第二次打开：这些图会直接从 IndexedDB 出，Network 面板不再发请求。"},{id:"f2-lightbox-download",code:"F2",cat:"gallery",title:"灯箱 + 下载 + 色板",ref:{site:"Pexels",page:"图片详情",url:"https://www.pexels.com/"},pain:"看图、下载、取色是三件事，分散在三个组件里就很难保持一致。",tone:"dark",plugs:[{fn:"createGalleryPlugin",arg:'{ buttonText: "全屏" }',why:"灯箱看图"},{fn:"createDownloadButtonPlugin",arg:'{ filename: "vane-photo.jpg" }',why:"下载带正确后缀"},{fn:"createColorSwatchPlugin",arg:"{ maxColors: 5 }",why:"主色板可取色"}]},{id:"f3-exif-upright",code:"F3",cat:"gallery",title:"手机竖图纠偏",ref:{site:"摄影社区",page:"用户直传",url:"https://unsplash.com/"},pain:"iPhone 直传的竖图带 Orientation=6，不纠正就是躺着的。",tone:"dark",plugs:[{fn:"createExifOrientationPlugin",arg:"{ enabled: true }",why:"读 EXIF 转正"},{fn:"createCropPlugin",arg:"{ focusPoint: { x: 0.5, y: 0.42 } }",why:"转正后裁 4:5"}],note:"占位图不带 EXIF，插件读到缺失标记时按 1 处理；换成自己拍的直传图即可看到转正效果。"},{id:"f4-before-after",code:"F4",cat:"gallery",title:"原图 / 滤镜对比",ref:{site:"摄影社区",page:"作品对比",url:"https://unsplash.com/"},pain:"「调色前后」说服力最强，但自己做拖拽分割线很容易做出错位。",tone:"dark",plugs:[{fn:"createComparisonPlugin",arg:"{ beforeSrc, afterSrc, start: 0.5 }",why:"可拖拽分隔条"},{fn:"createFilterPlugin",arg:'{ filter: "grayscale" }',why:"预设缩略"}]},{id:"f5-artwork-detail",code:"F5",cat:"gallery",title:"作品详情氛围",ref:{site:"数字艺术平台",page:"作品详情",url:"https://unsplash.com/"},pain:"作品页要有氛围：主色铺底、入场形变、下一件提前备好。",tone:"dark",plugs:[{fn:"createDominantColorPlugin",arg:"{ color: rgba }",why:"主色铺容器底"},{fn:"createCustomEffectsPlugin",arg:"{ hoverImageStyle }",why:"悬停上浮提亮"},{fn:"createMorphPlugin",arg:'{ type: "elastic" }',why:"入场形变"},{fn:"createCachePrewarmPlugin",arg:'{ trigger: "enter" }',why:"预热下一件"}]}],gee=[{id:"g1-admin-avatars",code:"G1",cat:"admin",title:"成员列表小头像",ref:{site:"Ant Design Pro",page:"用户管理列表",url:"https://pro.ant.design/"},pain:"一屏 40 个 22px 头像，翻页就重拉，主线程也跟着抖。",tone:"light",plugs:[{fn:"createCropPlugin",arg:"{ focusPoint: { x: 0.5, y: 0.5 } }",why:"小尺寸也不变形"},{fn:"createMemoryCachePlugin",arg:"{ maxEntries: 400 }",why:"翻页不重复请求"},{fn:"createFallbackImagePlugin",arg:"{ fallbackSrc: … }",why:"缺图不留空洞"}]},{id:"g2-ticket-attachments",code:"G2",cat:"admin",title:"工单附件缩略",ref:{site:"工单系统",page:"附件列表",url:"https://pro.ant.design/"},pain:"附件走鉴权接口，越权时给一张破图，用户根本不知道发生了什么。",tone:"light",plugs:[{fn:"createAuthPlugin",arg:'{ tokenParam: "access_token" }',why:"带上登录态"},{fn:"createErrorBadgePlugin",arg:'{ text: "无权限" }',why:"失败要可读"},{fn:"createGalleryPlugin",arg:"{ enableLightbox: true }",why:"点开放大"}],note:"第三张用过期凭证，返回 401 invalid_token，右上角出现「无权限」角标。需 pnpm serve:demo。"},{id:"g3-protected-401",code:"G3",cat:"admin",title:"受保护资源三态",ref:{site:"SaaS 后台",page:"受保护图片",url:"https://pro.ant.design/"},pain:"200 / 401 / 403 三种结果必须在 UI 上区分开，否则排查全靠猜。",tone:"light",plugs:[{fn:"createAuthPlugin",arg:'{ token: "demo-token-1f2e3d" }',why:"按凭证取图"},{fn:"createRetryOnErrorPlugin",arg:"{ maxRetries: 1 }",why:"瞬时失败自愈"},{fn:"createErrorOverlayPlugin",arg:'{ retryText: "重试" }',why:"给出可点出口"}],note:"接口是演示站自带的 /protected/image：401 missing_credentials、401 invalid_token、403 insufficient_scope。"},{id:"g4-table-image-cell",code:"G4",cat:"admin",title:"表格图片列",ref:{site:"后台列表",page:"商品/资产表格",url:"https://pro.ant.design/"},pain:"行高固定，缩略图一失败就把整行撑开或塌掉。",tone:"light",plugs:[{fn:"createSkeletonPlugin",arg:'{ type: "pulse" }',why:"骨架与图同尺寸"},{fn:"createFallbackImagePlugin",arg:"{ fallbackSrc: … }",why:"缺图不塌行"},{fn:"createErrorBadgePlugin",arg:'{ text: "!" }',why:"角标提示异常"}]}],fee=[{id:"h1-listing-gallery",code:"H1",cat:"travel",title:"房源图集横滑",ref:{site:"贝壳 / Airbnb",page:"房源详情",url:"https://www.ke.com/"},pain:"1 主图 + 4 缩略，切一次拉一次；比例不统一就上下跳。",tone:"dark",plugs:[{fn:"createAspectRatioSpacerPlugin",arg:"{ ratio: 4 / 3 }",why:"统一比例不跳"},{fn:"createGalleryPlugin",arg:"{ enableLightbox: true }",why:"看图集"},{fn:"createHoverPrefetchPlugin",arg:"{ max: 1, getNextSrc }",why:"悬停预取下一张"}]},{id:"h2-hotel-card",code:"H2",cat:"travel",title:"酒店列表卡",ref:{site:"携程",page:"酒店搜索结果",url:"https://www.ctrip.com/"},pain:"会员价、促销标、剩余房量——三条业务信息必须压在同一个图上。",tone:"light",plugs:[{fn:"createPriceTagPlugin",arg:"{ price: 486, discount }",why:"会员价 + 划线价"},{fn:"createPromoBadgePlugin",arg:'{ text: "限时特惠" }',why:"促销标"},{fn:"createBadgePlugin",arg:'{ text: "仅剩 2 间" }',why:"库存角标"}]},{id:"h3-offline-favs",code:"H3",cat:"travel",title:"离线收藏夹",ref:{site:"出行 App",page:"我的收藏",url:"https://www.ctrip.com/"},pain:"用户在高铁上打开收藏夹，断网时不该只剩一片空框。",tone:"light",plugs:[{fn:"createIDBCachePlugin",arg:'{ dbName: "vane-travel" }',why:"提前落库"},{fn:"createOfflinePlugin",arg:"{ warm: true, showBadge: true }",why:"断网切占位"},{fn:"createErrorBadgePlugin",arg:'{ text: "离线" }',why:"说明当前状态"}]}],hee=[{id:"i1-3g-skeleton",code:"I1",cat:"mobile",title:"3G 慢网加载",ref:{site:"移动端信息流",page:"3G 环境首屏",url:"https://www.bilibili.com/"},pain:"650ms RTT 下，没有进度反馈的等待会被用户当成「卡死」。",tone:"light",plugs:[{fn:"createNetworkAnalyticsPlugin",arg:"{ trackCDN: true }",why:"采集耗时与字节"},{fn:"createSkeletonPlugin",arg:'{ type: "shimmer" }',why:"骨架占位"},{fn:"createProgressOverlayPlugin",arg:"{ showPercentText: true }",why:"真实百分比"}]},{id:"i2-saver-battery",code:"I2",cat:"mobile",title:"省流量 + 低电量",ref:{site:"移动端商城",page:"降级模式",url:"https://www.jd.com/"},pain:"用户开了省流量、电量只剩 15%，还按桌面规格拉图就是纯浪费。",tone:"light",plugs:[{fn:"createDataSaverPlugin",arg:"{ respectSaveData: true }",why:"尊重系统开关"},{fn:"createBatteryAwarePlugin",arg:"{ lowBatteryThreshold: 0.2 }",why:"低电量降档"},{fn:"createAdaptiveQualityPlugin",arg:"{ lowQ: 40, highQ: 80 }",why:"按网络定质量"}]},{id:"i3-memory-pressure",code:"I3",cat:"mobile",title:"内存压力中止",ref:{site:"低端安卓",page:"长列表滚动",url:"https://www.bilibili.com/"},pain:"离开视口的图还占着解码位图，低端机滚两次就掉帧甚至被系统杀掉。",tone:"light",plugs:[{fn:"createMemoryPressureAbortPlugin",arg:"{ abortOnLeave: true }",why:"离屏即 abort"},{fn:"createDecodeAfterIdlePlugin",arg:"{ timeoutMs: 600 }",why:"空闲再解码"}]},{id:"i4-offline-recover",code:"I4",cat:"mobile",title:"断网 → 恢复",ref:{site:"移动端内容站",page:"地铁断网",url:"https://www.bilibili.com/"},pain:"断网时是空框，恢复后还得手动刷新——用户会觉得「这 App 坏了」。",tone:"light",plugs:[{fn:"createOfflinePlugin",arg:"{ warm: true }",why:"断网占位 + 恢复重取"},{fn:"createRetryOnErrorPlugin",arg:"{ maxRetries: 3, jitter: true }",why:"指数退避重试"},{fn:"createErrorTrackingPlugin",arg:"{ report }",why:"失败可追踪"}],note:"window.__vaneOfflineErrors 里是失败记录。"},{id:"i5-perf-beacon",code:"I5",cat:"mobile",title:"首屏性能埋点",ref:{site:"内容站数据看板",page:"图片性能",url:"https://www.bilibili.com/"},pain:"说「图片慢」没有数字支撑，优化就只能靠猜。",tone:"dark",plugs:[{fn:"createPerformanceMonitorPlugin",arg:"{ showOverlay: true }",why:"实时耗时浮层"},{fn:"createEventLoggerPlugin",arg:'{ prefix: "[VANE]" }',why:"事件进控制台"},{fn:"createUserBehaviorPlugin",arg:"{ onReport }",why:"曝光/点击上报"},{fn:"createViewportDwellPlugin",arg:"{ dwellMs: 250 }",why:"去抖真实曝光"}]}],yee=[{id:"j1-brand-parallax",code:"J1",cat:"marketing",title:"品牌页视差首屏",ref:{site:"品牌落地页",page:"新品专题",url:"https://www.apple.com/"},pain:"静态大图撑不起「质感」，加动效又容易吃满主线程。",tone:"dark",plugs:[{fn:"createParallaxPlugin",arg:'{ strength: 0.18, axis: "y" }',why:"背景慢一层"},{fn:"createRevealAnimationPlugin",arg:'{ animation: "fade-up" }',why:"分块揭示"},{fn:"createFadeInPlugin",arg:"{ durationMs: 400 }",why:"整体淡入"}]},{id:"j2-glitch-poster",code:"J2",cat:"marketing",title:"故障风海报",ref:{site:"音乐节 / 潮流活动",page:"主视觉海报",url:"https://www.boilerroom.tv/"},pain:"故障特效做不好就是掉帧；开成常驻动画更会一直占着合成层。",tone:"dark",plugs:[{fn:"createGlitchEffectPlugin",arg:"{ triggerOnHover: true, duration: 900 }",why:"悬停触发一次"},{fn:"createFilterPlugin",arg:'{ filter: "contrast" }',why:"底片先压对比"}]},{id:"j3-watermark-guard",code:"J3",cat:"marketing",title:"版权图水印",ref:{site:"素材站",page:"预览图",url:"https://www.pexels.com/"},pain:"预览图要能被截图溯源，同时不能被别站直接外链。",tone:"dark",plugs:[{fn:"createWatermarkPlugin",arg:'{ text: "© VANE STUDIO" }',why:"可见水印"},{fn:"createAntiHotlinkPlugin",arg:'{ allowedDomains: ["picsum.photos"] }',why:"引用限制"}],note:"水印是 DOM 叠层而非烧进图片，真实业务还要配合服务端签名 URL。"},{id:"j4-depth-card",code:"J4",cat:"marketing",title:"3D 深度卡片",ref:{site:"产品官网",page:"产品卡",url:"https://www.apple.com/"},pain:"产品图的「手感」靠位移与光影，但自己写 tilt 很容易飘。",tone:"dark",plugs:[{fn:"createDepthMapPlugin",arg:'{ style: "tilt", maxTilt: 18 }',why:"指针跟随倾斜"},{fn:"createAnimatedCursorPlugin",arg:'{ style: "zoom-in" }',why:"光标跟随放大"}]}],Aee=[{id:"vod",label:"影视点播",en:"VOD",blurb:"图少但单图大，LCP 与付费墙失败态决定体验。"},{id:"video",label:"视频社区",en:"VIDEO",blurb:"封面海量且单图小，唯一目标是别和视频抢带宽。"},{id:"ecommerce",label:"电商",en:"COMMERCE",blurb:"主图/缩略/评价图并存，SKU 切换要秒开。"},{id:"social",label:"图文社区",en:"SOCIAL",blurb:"不等高瀑布流，UGC 图质量与可用性都不可控。"},{id:"news",label:"资讯门户",en:"NEWS",blurb:"正文图决定 CLS，外链图常年失效。"},{id:"gallery",label:"图库摄影",en:"GALLERY",blurb:"以图为主业，缩略与全尺寸要分档，回访要命中缓存。"},{id:"admin",label:"后台 SaaS",en:"ADMIN",blurb:"表格里的小图与受保护附件，失败必须可解释。"},{id:"travel",label:"出行房产",en:"TRAVEL",blurb:"图集横滑 + 价格角标，弱网与离线是常态。"},{id:"mobile",label:"移动弱网",en:"MOBILE",blurb:"3G、低电量、内存压力、断网恢复的全链路。"},{id:"marketing",label:"营销创意",en:"MARKETING",blurb:"视觉即卖点，动效与版权保护同时要。"}],ma=[...lee,...cee,...uee,...dee,...pee,...mee,...gee,...fee,...hee,...yee],vee=Object.assign({"../specs/a1-poster-wall.tsx":()=>C(()=>import("./a1-poster-wall-B6ed4b1w.js"),[],import.meta.url),"../specs/a2-episode-row.tsx":()=>C(()=>import("./a2-episode-row-BukD9T_p.js"),[],import.meta.url),"../specs/a3-recommend-side.tsx":()=>C(()=>import("./a3-recommend-side-CDwQpVLL.js"),[],import.meta.url),"../specs/a4-cast-avatar.tsx":()=>C(()=>import("./a4-cast-avatar-CoFebrKQ.js"),[],import.meta.url),"../specs/a5-paid-poster.tsx":()=>C(()=>import("./a5-paid-poster-BMBjFdt-.js"),[],import.meta.url),"../specs/a6-tiered-quality.tsx":()=>C(()=>import("./a6-tiered-quality-B-3-Wab4.js"),[],import.meta.url),"../specs/b1-jd-search-grid.tsx":()=>C(()=>import("./b1-jd-search-grid-BzrXgMdv.js"),[],import.meta.url),"../specs/b2-sku-gallery-zoom.tsx":()=>C(()=>import("./b2-sku-gallery-zoom-BQKjVaSk.js"),[],import.meta.url),"../specs/b3-flash-sale.tsx":()=>C(()=>import("./b3-flash-sale-fKyY5_dI.js"),[],import.meta.url),"../specs/b4-review-grid.tsx":()=>C(()=>import("./b4-review-grid-cj4_etBE.js"),[],import.meta.url),"../specs/b5-cart-recs.tsx":()=>C(()=>import("./b5-cart-recs-Ck18i8uv.js"),[],import.meta.url),"../specs/b6-hotlink-guard.tsx":()=>C(()=>import("./b6-hotlink-guard-CahHz0E0.js"),[],import.meta.url),"../specs/b7-multi-currency.tsx":()=>C(()=>import("./b7-multi-currency-D6WqSMBd.js"),[],import.meta.url),"../specs/b8-format-webp.tsx":()=>C(()=>import("./b8-format-webp-BXpIVlEe.js"),[],import.meta.url),"../specs/c1-bili-cover-grid.tsx":()=>C(()=>import("./c1-bili-cover-grid-BgFQUlX_.js"),[],import.meta.url),"../specs/c2-hero-banner.tsx":()=>C(()=>import("./c2-hero-banner-_alFgls-.js"),[],import.meta.url),"../specs/c3-watch-side-list.tsx":()=>C(()=>import("./c3-watch-side-list-CGLewLis.js"),[],import.meta.url),"../specs/c4-uploader-avatar.tsx":()=>C(()=>import("./c4-uploader-avatar-BEVADILi.js"),[],import.meta.url),"../specs/c5-hover-preview.tsx":()=>C(()=>import("./c5-hover-preview-BWRvSpoL.js"),[],import.meta.url),"../specs/c6-saver-mode.tsx":()=>C(()=>import("./c6-saver-mode-B7C8qz8H.js"),[],import.meta.url),"../specs/d1-xhs-masonry.tsx":()=>C(()=>import("./d1-xhs-masonry-Dw1amSO6.js"),[],import.meta.url),"../specs/d2-nine-grid-lightbox.tsx":()=>C(()=>import("./d2-nine-grid-lightbox-DdnjYs45.js"),[],import.meta.url),"../specs/d3-article-images.tsx":()=>C(()=>import("./d3-article-images-Bo_SNKCx.js"),[],import.meta.url),"../specs/d4-follow-avatars.tsx":()=>C(()=>import("./d4-follow-avatars-Dt_Dx46B.js"),[],import.meta.url),"../specs/d5-share-card.tsx":()=>C(()=>import("./d5-share-card-DqfjZNJa.js"),[],import.meta.url),"../specs/e1-news-mixed.tsx":()=>C(()=>import("./e1-news-mixed-cTzCR2uB.js"),[],import.meta.url),"../specs/e2-photo-set.tsx":()=>C(()=>import("./e2-photo-set-bpNFP3DQ.js"),[],import.meta.url),"../specs/e3-inline-anti-cls.tsx":()=>C(()=>import("./e3-inline-anti-cls-BmHNRh1o.js"),[],import.meta.url),"../specs/e4-dead-links.tsx":()=>C(()=>import("./e4-dead-links-ClbfiuJO.js"),[],import.meta.url),"../specs/e5-a11y-gov.tsx":()=>C(()=>import("./e5-a11y-gov-BubP4ybv.js"),[],import.meta.url),"../specs/f1-unsplash-masonry.tsx":()=>C(()=>import("./f1-unsplash-masonry-DOlI-ZhH.js"),[],import.meta.url),"../specs/f2-lightbox-download.tsx":()=>C(()=>import("./f2-lightbox-download-oPk1lx-b.js"),[],import.meta.url),"../specs/f3-exif-upright.tsx":()=>C(()=>import("./f3-exif-upright-uvC2X5KV.js"),[],import.meta.url),"../specs/f4-before-after.tsx":()=>C(()=>import("./f4-before-after-C1Juxki-.js"),[],import.meta.url),"../specs/f5-artwork-detail.tsx":()=>C(()=>import("./f5-artwork-detail-JjTDjvDe.js"),[],import.meta.url),"../specs/g1-admin-avatars.tsx":()=>C(()=>import("./g1-admin-avatars-iAuYwT15.js"),[],import.meta.url),"../specs/g2-ticket-attachments.tsx":()=>C(()=>import("./g2-ticket-attachments-CdIuCIQp.js"),[],import.meta.url),"../specs/g3-protected-401.tsx":()=>C(()=>import("./g3-protected-401-p5PtjvNa.js"),[],import.meta.url),"../specs/g4-table-image-cell.tsx":()=>C(()=>import("./g4-table-image-cell-DADPlnxG.js"),[],import.meta.url),"../specs/h1-listing-gallery.tsx":()=>C(()=>import("./h1-listing-gallery-BDMYU7Ag.js"),[],import.meta.url),"../specs/h2-hotel-card.tsx":()=>C(()=>import("./h2-hotel-card-D96TQTJi.js"),[],import.meta.url),"../specs/h3-offline-favs.tsx":()=>C(()=>import("./h3-offline-favs-C0kxA4lx.js"),[],import.meta.url),"../specs/i1-3g-skeleton.tsx":()=>C(()=>import("./i1-3g-skeleton-DanjafZ1.js"),[],import.meta.url),"../specs/i2-saver-battery.tsx":()=>C(()=>import("./i2-saver-battery-7HPujcsc.js"),[],import.meta.url),"../specs/i3-memory-pressure.tsx":()=>C(()=>import("./i3-memory-pressure-DGaKJWBd.js"),[],import.meta.url),"../specs/i4-offline-recover.tsx":()=>C(()=>import("./i4-offline-recover-BNXq0ZTK.js"),[],import.meta.url),"../specs/i5-perf-beacon.tsx":()=>C(()=>import("./i5-perf-beacon-DcDfB0Vf.js"),[],import.meta.url),"../specs/j1-brand-parallax.tsx":()=>C(()=>import("./j1-brand-parallax-BYwKLGBl.js"),[],import.meta.url),"../specs/j2-glitch-poster.tsx":()=>C(()=>import("./j2-glitch-poster-BPC1eTcS.js"),[],import.meta.url),"../specs/j3-watermark-guard.tsx":()=>C(()=>import("./j3-watermark-guard-pYeYXrdw.js"),[],import.meta.url),"../specs/j4-depth-card.tsx":()=>C(()=>import("./j4-depth-card-BwaHc_Rz.js"),[],import.meta.url)}),wee=Object.assign({"../specs/a1-poster-wall.tsx":()=>C(()=>import("./a1-poster-wall-CM4xrHAO.js"),[],import.meta.url).then(e=>e.default),"../specs/a2-episode-row.tsx":()=>C(()=>import("./a2-episode-row-Dtf1h4ZA.js"),[],import.meta.url).then(e=>e.default),"../specs/a3-recommend-side.tsx":()=>C(()=>import("./a3-recommend-side-OKLAqdfj.js"),[],import.meta.url).then(e=>e.default),"../specs/a4-cast-avatar.tsx":()=>C(()=>import("./a4-cast-avatar-DZvo-K26.js"),[],import.meta.url).then(e=>e.default),"../specs/a5-paid-poster.tsx":()=>C(()=>import("./a5-paid-poster-BseO7uAP.js"),[],import.meta.url).then(e=>e.default),"../specs/a6-tiered-quality.tsx":()=>C(()=>import("./a6-tiered-quality-CMWgBLa6.js"),[],import.meta.url).then(e=>e.default),"../specs/b1-jd-search-grid.tsx":()=>C(()=>import("./b1-jd-search-grid-BoKfR-nJ.js"),[],import.meta.url).then(e=>e.default),"../specs/b2-sku-gallery-zoom.tsx":()=>C(()=>import("./b2-sku-gallery-zoom-adbEIaSb.js"),[],import.meta.url).then(e=>e.default),"../specs/b3-flash-sale.tsx":()=>C(()=>import("./b3-flash-sale-wXYwmzUk.js"),[],import.meta.url).then(e=>e.default),"../specs/b4-review-grid.tsx":()=>C(()=>import("./b4-review-grid-CmWqPRoo.js"),[],import.meta.url).then(e=>e.default),"../specs/b5-cart-recs.tsx":()=>C(()=>import("./b5-cart-recs-BZJjg3eu.js"),[],import.meta.url).then(e=>e.default),"../specs/b6-hotlink-guard.tsx":()=>C(()=>import("./b6-hotlink-guard-M7567u3r.js"),[],import.meta.url).then(e=>e.default),"../specs/b7-multi-currency.tsx":()=>C(()=>import("./b7-multi-currency-RXNRlxSI.js"),[],import.meta.url).then(e=>e.default),"../specs/b8-format-webp.tsx":()=>C(()=>import("./b8-format-webp-C1Zv0n1j.js"),[],import.meta.url).then(e=>e.default),"../specs/c1-bili-cover-grid.tsx":()=>C(()=>import("./c1-bili-cover-grid-DQkijP0X.js"),[],import.meta.url).then(e=>e.default),"../specs/c2-hero-banner.tsx":()=>C(()=>import("./c2-hero-banner-Nmg5a9-j.js"),[],import.meta.url).then(e=>e.default),"../specs/c3-watch-side-list.tsx":()=>C(()=>import("./c3-watch-side-list-BNRiDFsF.js"),[],import.meta.url).then(e=>e.default),"../specs/c4-uploader-avatar.tsx":()=>C(()=>import("./c4-uploader-avatar-C6lTuFHB.js"),[],import.meta.url).then(e=>e.default),"../specs/c5-hover-preview.tsx":()=>C(()=>import("./c5-hover-preview-CAy_-AFv.js"),[],import.meta.url).then(e=>e.default),"../specs/c6-saver-mode.tsx":()=>C(()=>import("./c6-saver-mode-rCPKsOdh.js"),[],import.meta.url).then(e=>e.default),"../specs/d1-xhs-masonry.tsx":()=>C(()=>import("./d1-xhs-masonry-BAwaMJLF.js"),[],import.meta.url).then(e=>e.default),"../specs/d2-nine-grid-lightbox.tsx":()=>C(()=>import("./d2-nine-grid-lightbox-CqMLAD-c.js"),[],import.meta.url).then(e=>e.default),"../specs/d3-article-images.tsx":()=>C(()=>import("./d3-article-images-sTLb9tle.js"),[],import.meta.url).then(e=>e.default),"../specs/d4-follow-avatars.tsx":()=>C(()=>import("./d4-follow-avatars-B2omQ64x.js"),[],import.meta.url).then(e=>e.default),"../specs/d5-share-card.tsx":()=>C(()=>import("./d5-share-card-Coiodj-c.js"),[],import.meta.url).then(e=>e.default),"../specs/e1-news-mixed.tsx":()=>C(()=>import("./e1-news-mixed-BcKyViK3.js"),[],import.meta.url).then(e=>e.default),"../specs/e2-photo-set.tsx":()=>C(()=>import("./e2-photo-set-BBgmM3ES.js"),[],import.meta.url).then(e=>e.default),"../specs/e3-inline-anti-cls.tsx":()=>C(()=>import("./e3-inline-anti-cls-BuyJhCFz.js"),[],import.meta.url).then(e=>e.default),"../specs/e4-dead-links.tsx":()=>C(()=>import("./e4-dead-links-jHyA9rW6.js"),[],import.meta.url).then(e=>e.default),"../specs/e5-a11y-gov.tsx":()=>C(()=>import("./e5-a11y-gov-DXbYifLh.js"),[],import.meta.url).then(e=>e.default),"../specs/f1-unsplash-masonry.tsx":()=>C(()=>import("./f1-unsplash-masonry-DxPIENO-.js"),[],import.meta.url).then(e=>e.default),"../specs/f2-lightbox-download.tsx":()=>C(()=>import("./f2-lightbox-download-DvWM_yxG.js"),[],import.meta.url).then(e=>e.default),"../specs/f3-exif-upright.tsx":()=>C(()=>import("./f3-exif-upright-BAC_OFyz.js"),[],import.meta.url).then(e=>e.default),"../specs/f4-before-after.tsx":()=>C(()=>import("./f4-before-after-orwUu3g7.js"),[],import.meta.url).then(e=>e.default),"../specs/f5-artwork-detail.tsx":()=>C(()=>import("./f5-artwork-detail-Csdo7j0q.js"),[],import.meta.url).then(e=>e.default),"../specs/g1-admin-avatars.tsx":()=>C(()=>import("./g1-admin-avatars-CN5vRqoo.js"),[],import.meta.url).then(e=>e.default),"../specs/g2-ticket-attachments.tsx":()=>C(()=>import("./g2-ticket-attachments-DhyWMkLd.js"),[],import.meta.url).then(e=>e.default),"../specs/g3-protected-401.tsx":()=>C(()=>import("./g3-protected-401-BGsNK6I2.js"),[],import.meta.url).then(e=>e.default),"../specs/g4-table-image-cell.tsx":()=>C(()=>import("./g4-table-image-cell-B79NC7Ab.js"),[],import.meta.url).then(e=>e.default),"../specs/h1-listing-gallery.tsx":()=>C(()=>import("./h1-listing-gallery-DbnpdBTn.js"),[],import.meta.url).then(e=>e.default),"../specs/h2-hotel-card.tsx":()=>C(()=>import("./h2-hotel-card-B6Wq_lji.js"),[],import.meta.url).then(e=>e.default),"../specs/h3-offline-favs.tsx":()=>C(()=>import("./h3-offline-favs-BlcaFgxR.js"),[],import.meta.url).then(e=>e.default),"../specs/i1-3g-skeleton.tsx":()=>C(()=>import("./i1-3g-skeleton-BmCK5wFN.js"),[],import.meta.url).then(e=>e.default),"../specs/i2-saver-battery.tsx":()=>C(()=>import("./i2-saver-battery-hI1Od7i9.js"),[],import.meta.url).then(e=>e.default),"../specs/i3-memory-pressure.tsx":()=>C(()=>import("./i3-memory-pressure-BygOxVq2.js"),[],import.meta.url).then(e=>e.default),"../specs/i4-offline-recover.tsx":()=>C(()=>import("./i4-offline-recover-BCcqQLXD.js"),[],import.meta.url).then(e=>e.default),"../specs/i5-perf-beacon.tsx":()=>C(()=>import("./i5-perf-beacon-DH0pbAUU.js"),[],import.meta.url).then(e=>e.default),"../specs/j1-brand-parallax.tsx":()=>C(()=>import("./j1-brand-parallax-M8c-9J-O.js"),[],import.meta.url).then(e=>e.default),"../specs/j2-glitch-poster.tsx":()=>C(()=>import("./j2-glitch-poster-D8SnUzJy.js"),[],import.meta.url).then(e=>e.default),"../specs/j3-watermark-guard.tsx":()=>C(()=>import("./j3-watermark-guard-Q4vPgsdj.js"),[],import.meta.url).then(e=>e.default),"../specs/j4-depth-card.tsx":()=>C(()=>import("./j4-depth-card-CnuORoSU.js"),[],import.meta.url).then(e=>e.default)}),rm=e=>`../specs/${e}.tsx`;function Bee(e){return vee[rm(e)]}function Uee(e){return wee[rm(e)]}function Fee(e){return ma.filter(t=>t.cat===e)}function xee(e){return Array.from(new Set(e.plugs.map(t=>t.fn)))}function Vee(e){const n=["import {","  LazyLoadImageCore,",...xee(e).sort().map(r=>`  ${r},`),"  withPlugins,",'} from "vane-lazy-image";'].join(`
`),o=e.plugs.map(r=>`  ${r.fn}(${r.arg??""}),`).join(`
`);return[`// ${e.code} ${e.title} · 最小可用版`,`// ${e.pain}`,n,"","const LazyImage = withPlugins(LazyLoadImageCore, [",o,"]);","","// 版式与数据由业务侧负责，这一层只解决「怎么取图」",'<LazyImage src={src} alt={alt} loading="lazy" />'].join(`
`)}const bee=x.lazy(()=>C(()=>import("./Home-B4s7c9FR.js"),[],import.meta.url).then(e=>({default:e.Home}))),Pee=x.lazy(()=>C(()=>import("./PluginDetail-CKZJHtQG.js"),[],import.meta.url).then(e=>({default:e.PluginDetail}))),lu=x.lazy(()=>C(()=>import("./CombosPage-DCdUpzYl.js"),[],import.meta.url).then(e=>({default:e.CombosPage}))),cu=x.lazy(()=>C(()=>import("./AdvancedPage-DPe73JGx.js"),[],import.meta.url).then(e=>({default:e.AdvancedPage}))),$ee=x.lazy(()=>C(()=>import("./ScenariosPage-DjY50kJj.js"),[],import.meta.url).then(e=>({default:e.ScenariosPage}))),See=x.lazy(()=>C(()=>import("./WorkshopPage-DXOFpAzv.js"),[],import.meta.url).then(e=>({default:e.WorkshopPage}))),Cee=x.lazy(()=>C(()=>import("./GalleryPage-B9L4ScMi.js"),[],import.meta.url).then(e=>({default:e.GalleryPage}))),Lee={pkg:"vane-lazy-image",brand:"V",subtitle:"图片懒加载 / plugin index",nav:[{to:"/",label:"总览",hint:"overview"},{to:"/workshop",label:"插件工坊",hint:`${Vo.length} plugins`},{to:"/combos",label:"组合示例",hint:`${Jp.length} combos`},{to:"/advanced",label:"高级功能",hint:`${em.length} advanced`},{to:"/scenarios",label:"场景示例",hint:`${ma.length} plates`},{to:"/gallery",label:"商品图集",hint:"gallery"}],routes:[{path:"/",element:m.jsx(bee,{})},{path:"/plugin/:id",element:m.jsx(Pee,{})},{path:"/combos",element:m.jsx(lu,{})},{path:"/combo/:id",element:m.jsx(lu,{})},{path:"/advanced",element:m.jsx(cu,{})},{path:"/advanced/:id",element:m.jsx(cu,{})},{path:"/scenarios",element:m.jsx($ee,{})},{path:"/workshop",element:m.jsx(See,{})},{path:"/gallery",element:m.jsx(Cee,{})}],crumb:e=>e.startsWith("/plugin/")?"plugin · 插件详情":e.startsWith("/combo")?"combo · 组合示例":e.startsWith("/advanced")?"advanced · 高级功能":e.startsWith("/scenarios")?"scenario · 场景示例":e.startsWith("/workshop")?"workshop · 插件工坊":e.startsWith("/gallery")?"gallery · 商品图集":"index · 总览",demos:{label:"逐项示例",groups:qJ.map(e=>({key:e,label:tm[e].label})),entries:as,detail:(e,t)=>m.jsx(aee,{entry:e,order:t})},footer:[`${Vo.length} PLUGINS · ${ma.length} PLATES`,`${as.length} DEMOS · D1-A / D2-A`]};function Iee(){return m.jsx(Gh,{config:Lee})}const sm="vane-demo-env",uu={offline:!1,slow:!1,battery:!1};function yl(){try{const e=sessionStorage.getItem(sm);if(!e)return{...uu};const t=JSON.parse(e);return{offline:!!t.offline,slow:!!t.slow,battery:!!t.battery}}catch{return{...uu}}}function kee(e){try{sessionStorage.setItem(sm,JSON.stringify(e))}catch{}}function _ee(e=yl()){return e.offline||e.slow||e.battery}let Jt=null;const ga=new Set;function Wee(){return Jt||(Jt=yl()),Jt}function Hee(e){Jt={...e},kee(Jt),im(Jt),ga.forEach(t=>{try{t(Jt)}catch{}})}function Gee(e){return ga.add(e),()=>{ga.delete(e)}}function im(e){var t;try{Object.defineProperty(navigator,"onLine",{configurable:!0,get:()=>!e.offline})}catch{}try{window.dispatchEvent(new Event(e.offline?"offline":"online"))}catch{}try{const n=e.slow?"2g":"4g",r=navigator.connection,s=i=>(Object.defineProperty(i,"effectiveType",{configurable:!0,get:()=>n}),Object.defineProperty(i,"saveData",{configurable:!0,get:()=>e.slow}),Object.defineProperty(i,"downlink",{configurable:!0,get:()=>e.slow?.3:10}),Object.defineProperty(i,"rtt",{configurable:!0,get:()=>e.slow?900:50}),i);if(r){s(r);try{(t=r.dispatchEvent)==null||t.call(r,new Event("change"))}catch{}}else Object.defineProperty(navigator,"connection",{configurable:!0,value:s({addEventListener(){},removeEventListener(){},dispatchEvent(){return!0}})})}catch{}try{navigator.getBattery=()=>Promise.resolve({level:e.battery?.08:.92,charging:!e.battery,chargingTime:e.battery?1/0:0,dischargingTime:e.battery?900:1/0,addEventListener(){},removeEventListener(){}})}catch{}try{Object.defineProperty(navigator,"deviceMemory",{configurable:!0,get:()=>e.battery?1:8})}catch{}}function Eee(){const e=yl();_ee(e)&&im(e)}Eee();try{performance.setResourceTimingBufferSize(1e3)}catch{}$p(document.getElementById("root")).render(m.jsx(Iee,{}));export{MX as $,em as A,a6 as B,Jp as C,l6 as D,uq as E,aH as F,fM as G,M7 as H,j7 as I,gY as J,A7 as K,la as L,lJ as M,RZ as N,ND as O,MJ as P,vG as Q,A as R,ma as S,ss as T,rD as U,Mq as V,Fp as W,Kq as X,OK as Y,yG as Z,C as _,Mee as a,w7 as a$,k7 as a0,U7 as a1,B7 as a2,wG as a3,CJ as a4,V7 as a5,T7 as a6,aJ as a7,C7 as a8,i6 as a9,vY as aA,fY as aB,hY as aC,yY as aD,m7 as aE,I7 as aF,E7 as aG,z7 as aH,bY as aI,xY as aJ,c7 as aK,f7 as aL,$7 as aM,D7 as aN,wY as aO,F7 as aP,PY as aQ,S7 as aR,s7 as aS,a7 as aT,y7 as aU,x7 as aV,L7 as aW,DX as aX,H7 as aY,d7 as aZ,v7 as a_,p7 as aa,u7 as ab,zq as ac,_7 as ad,O7 as ae,_q as af,$H as ag,XX as ah,o7 as ai,h7 as aj,g7 as ak,l7 as al,Rq as am,Eq as an,SD as ao,CD as ap,hZ as aq,W7 as ar,xD as as,n7 as at,N7 as au,zX as av,i7 as aw,r7 as ax,R7 as ay,OX as az,Hee as b,P7 as b0,b7 as b1,jJ as c,jee as d,ZJ as e,eee as f,Wee as g,Nee as h,Tee as i,m as j,Uee as k,Bee as l,Vee as m,Fee as n,Aee as o,Vo as p,Vp as q,x as r,Gee as s,wK as t,gh as u,tM as v,Np as w,YG as x,RD as y,eY as z};
