const __vite__mapDeps=(i,m=__vite__mapDeps,d=(m.f||(m.f=["./ComboA11ySeoDemo-BuXso3lG.js","./DemoLayout-Sq_ocd_i.js","./ComboCacheDemo-3C3l_Yb7.js","./ComboEnginePerfDemo-CRcCKEYj.js","./ComboErrorResilienceDemo-CWqviEFR.js","./ComboInteractionOverlayDemo-EeWP7vhq.js","./ComboPerformanceDemo-DmX1LwZC.js","./ComboResponsiveSeoWebPDemo-CCNP1hFN.js","./ComboViewportInteractionDemo-BlaEcsMr.js","./ComboVisualEffectsDemo-CbkoFlBU.js","./ComboVisualEffectsPlusDemo-DFeKPyTB.js","./DependencyResolverDemo-ylCoyMAR.js","./advanced-CevqN9nb.js","./EngineInfraDemo-tK6KQP8K.js","./PerformanceMonitoringDemo-vOLtGvv0.js","./PluginHotReloadDemo-Ca846w2v.js","./PluginSandboxDemo-CyAMVRdw.js","./VirtualGridDemo--A7mc-GP.js","./index.esm-ec0InUil.js","./VirtualHorizontalListDemo-Cvt_WAhN.js","./VirtualVerticalListDemo-Dqn8S5nt.js"])))=>i.map(i=>d[i]);
var im=Object.defineProperty;var am=(e,t,n)=>t in e?im(e,t,{enumerable:!0,configurable:!0,writable:!0,value:n}):e[t]=n;var wl=(e,t,n)=>am(e,typeof t!="symbol"?t+"":t,n);function lm(e,t){for(var n=0;n<t.length;n++){const o=t[n];if(typeof o!="string"&&!Array.isArray(o)){for(const r in o)if(r!=="default"&&!(r in e)){const s=Object.getOwnPropertyDescriptor(o,r);s&&Object.defineProperty(e,r,s.get?s:{enumerable:!0,get:()=>o[r]})}}}return Object.freeze(Object.defineProperty(e,Symbol.toStringTag,{value:"Module"}))}(function(){const t=document.createElement("link").relList;if(t&&t.supports&&t.supports("modulepreload"))return;for(const r of document.querySelectorAll('link[rel="modulepreload"]'))o(r);new MutationObserver(r=>{for(const s of r)if(s.type==="childList")for(const i of s.addedNodes)i.tagName==="LINK"&&i.rel==="modulepreload"&&o(i)}).observe(document,{childList:!0,subtree:!0});function n(r){const s={};return r.integrity&&(s.integrity=r.integrity),r.referrerPolicy&&(s.referrerPolicy=r.referrerPolicy),r.crossOrigin==="use-credentials"?s.credentials="include":r.crossOrigin==="anonymous"?s.credentials="omit":s.credentials="same-origin",s}function o(r){if(r.ep)return;r.ep=!0;const s=n(r);fetch(r.href,s)}})();function cm(e){return e&&e.__esModule&&Object.prototype.hasOwnProperty.call(e,"default")?e.default:e}var cu={exports:{}},as={},uu={exports:{}},B={};/**
 * @license React
 * react.production.min.js
 *
 * Copyright (c) Facebook, Inc. and its affiliates.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */var Wo=Symbol.for("react.element"),um=Symbol.for("react.portal"),dm=Symbol.for("react.fragment"),pm=Symbol.for("react.strict_mode"),mm=Symbol.for("react.profiler"),gm=Symbol.for("react.provider"),fm=Symbol.for("react.context"),hm=Symbol.for("react.forward_ref"),ym=Symbol.for("react.suspense"),vm=Symbol.for("react.memo"),wm=Symbol.for("react.lazy"),xl=Symbol.iterator;function xm(e){return e===null||typeof e!="object"?null:(e=xl&&e[xl]||e["@@iterator"],typeof e=="function"?e:null)}var du={isMounted:function(){return!1},enqueueForceUpdate:function(){},enqueueReplaceState:function(){},enqueueSetState:function(){}},pu=Object.assign,mu={};function Wn(e,t,n){this.props=e,this.context=t,this.refs=mu,this.updater=n||du}Wn.prototype.isReactComponent={};Wn.prototype.setState=function(e,t){if(typeof e!="object"&&typeof e!="function"&&e!=null)throw Error("setState(...): takes an object of state variables to update or a function which returns an object of state variables.");this.updater.enqueueSetState(this,e,t,"setState")};Wn.prototype.forceUpdate=function(e){this.updater.enqueueForceUpdate(this,e,"forceUpdate")};function gu(){}gu.prototype=Wn.prototype;function fa(e,t,n){this.props=e,this.context=t,this.refs=mu,this.updater=n||du}var ha=fa.prototype=new gu;ha.constructor=fa;pu(ha,Wn.prototype);ha.isPureReactComponent=!0;var bl=Array.isArray,fu=Object.prototype.hasOwnProperty,ya={current:null},hu={key:!0,ref:!0,__self:!0,__source:!0};function yu(e,t,n){var o,r={},s=null,i=null;if(t!=null)for(o in t.ref!==void 0&&(i=t.ref),t.key!==void 0&&(s=""+t.key),t)fu.call(t,o)&&!hu.hasOwnProperty(o)&&(r[o]=t[o]);var a=arguments.length-2;if(a===1)r.children=n;else if(1<a){for(var l=Array(a),c=0;c<a;c++)l[c]=arguments[c+2];r.children=l}if(e&&e.defaultProps)for(o in a=e.defaultProps,a)r[o]===void 0&&(r[o]=a[o]);return{$$typeof:Wo,type:e,key:s,ref:i,props:r,_owner:ya.current}}function bm(e,t){return{$$typeof:Wo,type:e.type,key:t,ref:e.ref,props:e.props,_owner:e._owner}}function va(e){return typeof e=="object"&&e!==null&&e.$$typeof===Wo}function Pm(e){var t={"=":"=0",":":"=2"};return"$"+e.replace(/[=:]/g,function(n){return t[n]})}var Pl=/\/+/g;function Ls(e,t){return typeof e=="object"&&e!==null&&e.key!=null?Pm(""+e.key):t.toString(36)}function br(e,t,n,o,r){var s=typeof e;(s==="undefined"||s==="boolean")&&(e=null);var i=!1;if(e===null)i=!0;else switch(s){case"string":case"number":i=!0;break;case"object":switch(e.$$typeof){case Wo:case um:i=!0}}if(i)return i=e,r=r(i),e=o===""?"."+Ls(i,0):o,bl(r)?(n="",e!=null&&(n=e.replace(Pl,"$&/")+"/"),br(r,t,n,"",function(c){return c})):r!=null&&(va(r)&&(r=bm(r,n+(!r.key||i&&i.key===r.key?"":(""+r.key).replace(Pl,"$&/")+"/")+e)),t.push(r)),1;if(i=0,o=o===""?".":o+":",bl(e))for(var a=0;a<e.length;a++){s=e[a];var l=o+Ls(s,a);i+=br(s,t,n,l,r)}else if(l=xm(e),typeof l=="function")for(e=l.call(e),a=0;!(s=e.next()).done;)s=s.value,l=o+Ls(s,a++),i+=br(s,t,n,l,r);else if(s==="object")throw t=String(e),Error("Objects are not valid as a React child (found: "+(t==="[object Object]"?"object with keys {"+Object.keys(e).join(", ")+"}":t)+"). If you meant to render a collection of children, use an array instead.");return i}function Xo(e,t,n){if(e==null)return e;var o=[],r=0;return br(e,o,"","",function(s){return t.call(n,s,r++)}),o}function $m(e){if(e._status===-1){var t=e._result;t=t(),t.then(function(n){(e._status===0||e._status===-1)&&(e._status=1,e._result=n)},function(n){(e._status===0||e._status===-1)&&(e._status=2,e._result=n)}),e._status===-1&&(e._status=0,e._result=t)}if(e._status===1)return e._result.default;throw e._result}var Ie={current:null},Pr={transition:null},Sm={ReactCurrentDispatcher:Ie,ReactCurrentBatchConfig:Pr,ReactCurrentOwner:ya};function vu(){throw Error("act(...) is not supported in production builds of React.")}B.Children={map:Xo,forEach:function(e,t,n){Xo(e,function(){t.apply(this,arguments)},n)},count:function(e){var t=0;return Xo(e,function(){t++}),t},toArray:function(e){return Xo(e,function(t){return t})||[]},only:function(e){if(!va(e))throw Error("React.Children.only expected to receive a single React element child.");return e}};B.Component=Wn;B.Fragment=dm;B.Profiler=mm;B.PureComponent=fa;B.StrictMode=pm;B.Suspense=ym;B.__SECRET_INTERNALS_DO_NOT_USE_OR_YOU_WILL_BE_FIRED=Sm;B.act=vu;B.cloneElement=function(e,t,n){if(e==null)throw Error("React.cloneElement(...): The argument must be a React element, but you passed "+e+".");var o=pu({},e.props),r=e.key,s=e.ref,i=e._owner;if(t!=null){if(t.ref!==void 0&&(s=t.ref,i=ya.current),t.key!==void 0&&(r=""+t.key),e.type&&e.type.defaultProps)var a=e.type.defaultProps;for(l in t)fu.call(t,l)&&!hu.hasOwnProperty(l)&&(o[l]=t[l]===void 0&&a!==void 0?a[l]:t[l])}var l=arguments.length-2;if(l===1)o.children=n;else if(1<l){a=Array(l);for(var c=0;c<l;c++)a[c]=arguments[c+2];o.children=a}return{$$typeof:Wo,type:e.type,key:r,ref:s,props:o,_owner:i}};B.createContext=function(e){return e={$$typeof:fm,_currentValue:e,_currentValue2:e,_threadCount:0,Provider:null,Consumer:null,_defaultValue:null,_globalName:null},e.Provider={$$typeof:gm,_context:e},e.Consumer=e};B.createElement=yu;B.createFactory=function(e){var t=yu.bind(null,e);return t.type=e,t};B.createRef=function(){return{current:null}};B.forwardRef=function(e){return{$$typeof:hm,render:e}};B.isValidElement=va;B.lazy=function(e){return{$$typeof:wm,_payload:{_status:-1,_result:e},_init:$m}};B.memo=function(e,t){return{$$typeof:vm,type:e,compare:t===void 0?null:t}};B.startTransition=function(e){var t=Pr.transition;Pr.transition={};try{e()}finally{Pr.transition=t}};B.unstable_act=vu;B.useCallback=function(e,t){return Ie.current.useCallback(e,t)};B.useContext=function(e){return Ie.current.useContext(e)};B.useDebugValue=function(){};B.useDeferredValue=function(e){return Ie.current.useDeferredValue(e)};B.useEffect=function(e,t){return Ie.current.useEffect(e,t)};B.useId=function(){return Ie.current.useId()};B.useImperativeHandle=function(e,t,n){return Ie.current.useImperativeHandle(e,t,n)};B.useInsertionEffect=function(e,t){return Ie.current.useInsertionEffect(e,t)};B.useLayoutEffect=function(e,t){return Ie.current.useLayoutEffect(e,t)};B.useMemo=function(e,t){return Ie.current.useMemo(e,t)};B.useReducer=function(e,t,n){return Ie.current.useReducer(e,t,n)};B.useRef=function(e){return Ie.current.useRef(e)};B.useState=function(e){return Ie.current.useState(e)};B.useSyncExternalStore=function(e,t,n){return Ie.current.useSyncExternalStore(e,t,n)};B.useTransition=function(){return Ie.current.useTransition()};B.version="18.3.1";uu.exports=B;var x=uu.exports;const N=cm(x),Cm=lm({__proto__:null,default:N},[x]);/**
 * @license React
 * react-jsx-runtime.production.min.js
 *
 * Copyright (c) Facebook, Inc. and its affiliates.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */var Lm=x,Im=Symbol.for("react.element"),km=Symbol.for("react.fragment"),_m=Object.prototype.hasOwnProperty,Em=Lm.__SECRET_INTERNALS_DO_NOT_USE_OR_YOU_WILL_BE_FIRED.ReactCurrentOwner,Rm={key:!0,ref:!0,__self:!0,__source:!0};function wu(e,t,n){var o,r={},s=null,i=null;n!==void 0&&(s=""+n),t.key!==void 0&&(s=""+t.key),t.ref!==void 0&&(i=t.ref);for(o in t)_m.call(t,o)&&!Rm.hasOwnProperty(o)&&(r[o]=t[o]);if(e&&e.defaultProps)for(o in t=e.defaultProps,t)r[o]===void 0&&(r[o]=t[o]);return{$$typeof:Im,type:e,key:s,ref:i,props:r,_owner:Em.current}}as.Fragment=km;as.jsx=wu;as.jsxs=wu;cu.exports=as;var m=cu.exports,xu={exports:{}},Ae={},bu={exports:{}},Pu={};/**
 * @license React
 * scheduler.production.min.js
 *
 * Copyright (c) Facebook, Inc. and its affiliates.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */(function(e){function t(R,M){var T=R.length;R.push(M);e:for(;0<T;){var H=T-1>>>1,W=R[H];if(0<r(W,M))R[H]=M,R[T]=W,T=H;else break e}}function n(R){return R.length===0?null:R[0]}function o(R){if(R.length===0)return null;var M=R[0],T=R.pop();if(T!==M){R[0]=T;e:for(var H=0,W=R.length,G=W>>>1;H<G;){var q=2*(H+1)-1,le=R[q],pe=q+1,ee=R[pe];if(0>r(le,T))pe<W&&0>r(ee,le)?(R[H]=ee,R[pe]=T,H=pe):(R[H]=le,R[q]=T,H=q);else if(pe<W&&0>r(ee,T))R[H]=ee,R[pe]=T,H=pe;else break e}}return M}function r(R,M){var T=R.sortIndex-M.sortIndex;return T!==0?T:R.id-M.id}if(typeof performance=="object"&&typeof performance.now=="function"){var s=performance;e.unstable_now=function(){return s.now()}}else{var i=Date,a=i.now();e.unstable_now=function(){return i.now()-a}}var l=[],c=[],u=1,d=null,p=3,f=!1,v=!1,w=!1,b=typeof setTimeout=="function"?setTimeout:null,h=typeof clearTimeout=="function"?clearTimeout:null,g=typeof setImmediate<"u"?setImmediate:null;typeof navigator<"u"&&navigator.scheduling!==void 0&&navigator.scheduling.isInputPending!==void 0&&navigator.scheduling.isInputPending.bind(navigator.scheduling);function y(R){for(var M=n(c);M!==null;){if(M.callback===null)o(c);else if(M.startTime<=R)o(c),M.sortIndex=M.expirationTime,t(l,M);else break;M=n(c)}}function P(R){if(w=!1,y(R),!v)if(n(l)!==null)v=!0,re($);else{var M=n(c);M!==null&&K(P,M.startTime-R)}}function $(R,M){v=!1,w&&(w=!1,h(_),_=-1),f=!0;var T=p;try{for(y(M),d=n(l);d!==null&&(!(d.expirationTime>M)||R&&!j());){var H=d.callback;if(typeof H=="function"){d.callback=null,p=d.priorityLevel;var W=H(d.expirationTime<=M);M=e.unstable_now(),typeof W=="function"?d.callback=W:d===n(l)&&o(l),y(M)}else o(l);d=n(l)}if(d!==null)var G=!0;else{var q=n(c);q!==null&&K(P,q.startTime-M),G=!1}return G}finally{d=null,p=T,f=!1}}var I=!1,k=null,_=-1,S=5,L=-1;function j(){return!(e.unstable_now()-L<S)}function A(){if(k!==null){var R=e.unstable_now();L=R;var M=!0;try{M=k(!0,R)}finally{M?z():(I=!1,k=null)}}else I=!1}var z;if(typeof g=="function")z=function(){g(A)};else if(typeof MessageChannel<"u"){var O=new MessageChannel,U=O.port2;O.port1.onmessage=A,z=function(){U.postMessage(null)}}else z=function(){b(A,0)};function re(R){k=R,I||(I=!0,z())}function K(R,M){_=b(function(){R(e.unstable_now())},M)}e.unstable_IdlePriority=5,e.unstable_ImmediatePriority=1,e.unstable_LowPriority=4,e.unstable_NormalPriority=3,e.unstable_Profiling=null,e.unstable_UserBlockingPriority=2,e.unstable_cancelCallback=function(R){R.callback=null},e.unstable_continueExecution=function(){v||f||(v=!0,re($))},e.unstable_forceFrameRate=function(R){0>R||125<R?console.error("forceFrameRate takes a positive int between 0 and 125, forcing frame rates higher than 125 fps is not supported"):S=0<R?Math.floor(1e3/R):5},e.unstable_getCurrentPriorityLevel=function(){return p},e.unstable_getFirstCallbackNode=function(){return n(l)},e.unstable_next=function(R){switch(p){case 1:case 2:case 3:var M=3;break;default:M=p}var T=p;p=M;try{return R()}finally{p=T}},e.unstable_pauseExecution=function(){},e.unstable_requestPaint=function(){},e.unstable_runWithPriority=function(R,M){switch(R){case 1:case 2:case 3:case 4:case 5:break;default:R=3}var T=p;p=R;try{return M()}finally{p=T}},e.unstable_scheduleCallback=function(R,M,T){var H=e.unstable_now();switch(typeof T=="object"&&T!==null?(T=T.delay,T=typeof T=="number"&&0<T?H+T:H):T=H,R){case 1:var W=-1;break;case 2:W=250;break;case 5:W=1073741823;break;case 4:W=1e4;break;default:W=5e3}return W=T+W,R={id:u++,callback:M,priorityLevel:R,startTime:T,expirationTime:W,sortIndex:-1},T>H?(R.sortIndex=T,t(c,R),n(l)===null&&R===n(c)&&(w?(h(_),_=-1):w=!0,K(P,T-H))):(R.sortIndex=W,t(l,R),v||f||(v=!0,re($))),R},e.unstable_shouldYield=j,e.unstable_wrapCallback=function(R){var M=p;return function(){var T=p;p=M;try{return R.apply(this,arguments)}finally{p=T}}}})(Pu);bu.exports=Pu;var zm=bu.exports;/**
 * @license React
 * react-dom.production.min.js
 *
 * Copyright (c) Facebook, Inc. and its affiliates.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */var Om=x,Ne=zm;function E(e){for(var t="https://reactjs.org/docs/error-decoder.html?invariant="+e,n=1;n<arguments.length;n++)t+="&args[]="+encodeURIComponent(arguments[n]);return"Minified React error #"+e+"; visit "+t+" for the full message or use the non-minified dev environment for full errors and additional helpful warnings."}var $u=new Set,$o={};function ln(e,t){Mn(e,t),Mn(e+"Capture",t)}function Mn(e,t){for($o[e]=t,e=0;e<t.length;e++)$u.add(t[e])}var mt=!(typeof window>"u"||typeof window.document>"u"||typeof window.document.createElement>"u"),pi=Object.prototype.hasOwnProperty,Dm=/^[:A-Z_a-z\u00C0-\u00D6\u00D8-\u00F6\u00F8-\u02FF\u0370-\u037D\u037F-\u1FFF\u200C-\u200D\u2070-\u218F\u2C00-\u2FEF\u3001-\uD7FF\uF900-\uFDCF\uFDF0-\uFFFD][:A-Z_a-z\u00C0-\u00D6\u00D8-\u00F6\u00F8-\u02FF\u0370-\u037D\u037F-\u1FFF\u200C-\u200D\u2070-\u218F\u2C00-\u2FEF\u3001-\uD7FF\uF900-\uFDCF\uFDF0-\uFFFD\-.0-9\u00B7\u0300-\u036F\u203F-\u2040]*$/,$l={},Sl={};function Mm(e){return pi.call(Sl,e)?!0:pi.call($l,e)?!1:Dm.test(e)?Sl[e]=!0:($l[e]=!0,!1)}function jm(e,t,n,o){if(n!==null&&n.type===0)return!1;switch(typeof t){case"function":case"symbol":return!0;case"boolean":return o?!1:n!==null?!n.acceptsBooleans:(e=e.toLowerCase().slice(0,5),e!=="data-"&&e!=="aria-");default:return!1}}function Tm(e,t,n,o){if(t===null||typeof t>"u"||jm(e,t,n,o))return!0;if(o)return!1;if(n!==null)switch(n.type){case 3:return!t;case 4:return t===!1;case 5:return isNaN(t);case 6:return isNaN(t)||1>t}return!1}function ke(e,t,n,o,r,s,i){this.acceptsBooleans=t===2||t===3||t===4,this.attributeName=o,this.attributeNamespace=r,this.mustUseProperty=n,this.propertyName=e,this.type=t,this.sanitizeURL=s,this.removeEmptyString=i}var ve={};"children dangerouslySetInnerHTML defaultValue defaultChecked innerHTML suppressContentEditableWarning suppressHydrationWarning style".split(" ").forEach(function(e){ve[e]=new ke(e,0,!1,e,null,!1,!1)});[["acceptCharset","accept-charset"],["className","class"],["htmlFor","for"],["httpEquiv","http-equiv"]].forEach(function(e){var t=e[0];ve[t]=new ke(t,1,!1,e[1],null,!1,!1)});["contentEditable","draggable","spellCheck","value"].forEach(function(e){ve[e]=new ke(e,2,!1,e.toLowerCase(),null,!1,!1)});["autoReverse","externalResourcesRequired","focusable","preserveAlpha"].forEach(function(e){ve[e]=new ke(e,2,!1,e,null,!1,!1)});"allowFullScreen async autoFocus autoPlay controls default defer disabled disablePictureInPicture disableRemotePlayback formNoValidate hidden loop noModule noValidate open playsInline readOnly required reversed scoped seamless itemScope".split(" ").forEach(function(e){ve[e]=new ke(e,3,!1,e.toLowerCase(),null,!1,!1)});["checked","multiple","muted","selected"].forEach(function(e){ve[e]=new ke(e,3,!0,e,null,!1,!1)});["capture","download"].forEach(function(e){ve[e]=new ke(e,4,!1,e,null,!1,!1)});["cols","rows","size","span"].forEach(function(e){ve[e]=new ke(e,6,!1,e,null,!1,!1)});["rowSpan","start"].forEach(function(e){ve[e]=new ke(e,5,!1,e.toLowerCase(),null,!1,!1)});var wa=/[\-:]([a-z])/g;function xa(e){return e[1].toUpperCase()}"accent-height alignment-baseline arabic-form baseline-shift cap-height clip-path clip-rule color-interpolation color-interpolation-filters color-profile color-rendering dominant-baseline enable-background fill-opacity fill-rule flood-color flood-opacity font-family font-size font-size-adjust font-stretch font-style font-variant font-weight glyph-name glyph-orientation-horizontal glyph-orientation-vertical horiz-adv-x horiz-origin-x image-rendering letter-spacing lighting-color marker-end marker-mid marker-start overline-position overline-thickness paint-order panose-1 pointer-events rendering-intent shape-rendering stop-color stop-opacity strikethrough-position strikethrough-thickness stroke-dasharray stroke-dashoffset stroke-linecap stroke-linejoin stroke-miterlimit stroke-opacity stroke-width text-anchor text-decoration text-rendering underline-position underline-thickness unicode-bidi unicode-range units-per-em v-alphabetic v-hanging v-ideographic v-mathematical vector-effect vert-adv-y vert-origin-x vert-origin-y word-spacing writing-mode xmlns:xlink x-height".split(" ").forEach(function(e){var t=e.replace(wa,xa);ve[t]=new ke(t,1,!1,e,null,!1,!1)});"xlink:actuate xlink:arcrole xlink:role xlink:show xlink:title xlink:type".split(" ").forEach(function(e){var t=e.replace(wa,xa);ve[t]=new ke(t,1,!1,e,"http://www.w3.org/1999/xlink",!1,!1)});["xml:base","xml:lang","xml:space"].forEach(function(e){var t=e.replace(wa,xa);ve[t]=new ke(t,1,!1,e,"http://www.w3.org/XML/1998/namespace",!1,!1)});["tabIndex","crossOrigin"].forEach(function(e){ve[e]=new ke(e,1,!1,e.toLowerCase(),null,!1,!1)});ve.xlinkHref=new ke("xlinkHref",1,!1,"xlink:href","http://www.w3.org/1999/xlink",!0,!1);["src","href","action","formAction"].forEach(function(e){ve[e]=new ke(e,1,!1,e.toLowerCase(),null,!0,!0)});function ba(e,t,n,o){var r=ve.hasOwnProperty(t)?ve[t]:null;(r!==null?r.type!==0:o||!(2<t.length)||t[0]!=="o"&&t[0]!=="O"||t[1]!=="n"&&t[1]!=="N")&&(Tm(t,n,r,o)&&(n=null),o||r===null?Mm(t)&&(n===null?e.removeAttribute(t):e.setAttribute(t,""+n)):r.mustUseProperty?e[r.propertyName]=n===null?r.type===3?!1:"":n:(t=r.attributeName,o=r.attributeNamespace,n===null?e.removeAttribute(t):(r=r.type,n=r===3||r===4&&n===!0?"":""+n,o?e.setAttributeNS(o,t,n):e.setAttribute(t,n))))}var yt=Om.__SECRET_INTERNALS_DO_NOT_USE_OR_YOU_WILL_BE_FIRED,Zo=Symbol.for("react.element"),fn=Symbol.for("react.portal"),hn=Symbol.for("react.fragment"),Pa=Symbol.for("react.strict_mode"),mi=Symbol.for("react.profiler"),Su=Symbol.for("react.provider"),Cu=Symbol.for("react.context"),$a=Symbol.for("react.forward_ref"),gi=Symbol.for("react.suspense"),fi=Symbol.for("react.suspense_list"),Sa=Symbol.for("react.memo"),bt=Symbol.for("react.lazy"),Lu=Symbol.for("react.offscreen"),Cl=Symbol.iterator;function Jn(e){return e===null||typeof e!="object"?null:(e=Cl&&e[Cl]||e["@@iterator"],typeof e=="function"?e:null)}var oe=Object.assign,Is;function ao(e){if(Is===void 0)try{throw Error()}catch(n){var t=n.stack.trim().match(/\n( *(at )?)/);Is=t&&t[1]||""}return`
`+Is+e}var ks=!1;function _s(e,t){if(!e||ks)return"";ks=!0;var n=Error.prepareStackTrace;Error.prepareStackTrace=void 0;try{if(t)if(t=function(){throw Error()},Object.defineProperty(t.prototype,"props",{set:function(){throw Error()}}),typeof Reflect=="object"&&Reflect.construct){try{Reflect.construct(t,[])}catch(c){var o=c}Reflect.construct(e,[],t)}else{try{t.call()}catch(c){o=c}e.call(t.prototype)}else{try{throw Error()}catch(c){o=c}e()}}catch(c){if(c&&o&&typeof c.stack=="string"){for(var r=c.stack.split(`
`),s=o.stack.split(`
`),i=r.length-1,a=s.length-1;1<=i&&0<=a&&r[i]!==s[a];)a--;for(;1<=i&&0<=a;i--,a--)if(r[i]!==s[a]){if(i!==1||a!==1)do if(i--,a--,0>a||r[i]!==s[a]){var l=`
`+r[i].replace(" at new "," at ");return e.displayName&&l.includes("<anonymous>")&&(l=l.replace("<anonymous>",e.displayName)),l}while(1<=i&&0<=a);break}}}finally{ks=!1,Error.prepareStackTrace=n}return(e=e?e.displayName||e.name:"")?ao(e):""}function Nm(e){switch(e.tag){case 5:return ao(e.type);case 16:return ao("Lazy");case 13:return ao("Suspense");case 19:return ao("SuspenseList");case 0:case 2:case 15:return e=_s(e.type,!1),e;case 11:return e=_s(e.type.render,!1),e;case 1:return e=_s(e.type,!0),e;default:return""}}function hi(e){if(e==null)return null;if(typeof e=="function")return e.displayName||e.name||null;if(typeof e=="string")return e;switch(e){case hn:return"Fragment";case fn:return"Portal";case mi:return"Profiler";case Pa:return"StrictMode";case gi:return"Suspense";case fi:return"SuspenseList"}if(typeof e=="object")switch(e.$$typeof){case Cu:return(e.displayName||"Context")+".Consumer";case Su:return(e._context.displayName||"Context")+".Provider";case $a:var t=e.render;return e=e.displayName,e||(e=t.displayName||t.name||"",e=e!==""?"ForwardRef("+e+")":"ForwardRef"),e;case Sa:return t=e.displayName||null,t!==null?t:hi(e.type)||"Memo";case bt:t=e._payload,e=e._init;try{return hi(e(t))}catch{}}return null}function Am(e){var t=e.type;switch(e.tag){case 24:return"Cache";case 9:return(t.displayName||"Context")+".Consumer";case 10:return(t._context.displayName||"Context")+".Provider";case 18:return"DehydratedFragment";case 11:return e=t.render,e=e.displayName||e.name||"",t.displayName||(e!==""?"ForwardRef("+e+")":"ForwardRef");case 7:return"Fragment";case 5:return t;case 4:return"Portal";case 3:return"Root";case 6:return"Text";case 16:return hi(t);case 8:return t===Pa?"StrictMode":"Mode";case 22:return"Offscreen";case 12:return"Profiler";case 21:return"Scope";case 13:return"Suspense";case 19:return"SuspenseList";case 25:return"TracingMarker";case 1:case 0:case 17:case 2:case 14:case 15:if(typeof t=="function")return t.displayName||t.name||null;if(typeof t=="string")return t}return null}function Nt(e){switch(typeof e){case"boolean":case"number":case"string":case"undefined":return e;case"object":return e;default:return""}}function Iu(e){var t=e.type;return(e=e.nodeName)&&e.toLowerCase()==="input"&&(t==="checkbox"||t==="radio")}function Bm(e){var t=Iu(e)?"checked":"value",n=Object.getOwnPropertyDescriptor(e.constructor.prototype,t),o=""+e[t];if(!e.hasOwnProperty(t)&&typeof n<"u"&&typeof n.get=="function"&&typeof n.set=="function"){var r=n.get,s=n.set;return Object.defineProperty(e,t,{configurable:!0,get:function(){return r.call(this)},set:function(i){o=""+i,s.call(this,i)}}),Object.defineProperty(e,t,{enumerable:n.enumerable}),{getValue:function(){return o},setValue:function(i){o=""+i},stopTracking:function(){e._valueTracker=null,delete e[t]}}}}function Jo(e){e._valueTracker||(e._valueTracker=Bm(e))}function ku(e){if(!e)return!1;var t=e._valueTracker;if(!t)return!0;var n=t.getValue(),o="";return e&&(o=Iu(e)?e.checked?"true":"false":e.value),e=o,e!==n?(t.setValue(e),!0):!1}function Or(e){if(e=e||(typeof document<"u"?document:void 0),typeof e>"u")return null;try{return e.activeElement||e.body}catch{return e.body}}function yi(e,t){var n=t.checked;return oe({},t,{defaultChecked:void 0,defaultValue:void 0,value:void 0,checked:n??e._wrapperState.initialChecked})}function Ll(e,t){var n=t.defaultValue==null?"":t.defaultValue,o=t.checked!=null?t.checked:t.defaultChecked;n=Nt(t.value!=null?t.value:n),e._wrapperState={initialChecked:o,initialValue:n,controlled:t.type==="checkbox"||t.type==="radio"?t.checked!=null:t.value!=null}}function _u(e,t){t=t.checked,t!=null&&ba(e,"checked",t,!1)}function vi(e,t){_u(e,t);var n=Nt(t.value),o=t.type;if(n!=null)o==="number"?(n===0&&e.value===""||e.value!=n)&&(e.value=""+n):e.value!==""+n&&(e.value=""+n);else if(o==="submit"||o==="reset"){e.removeAttribute("value");return}t.hasOwnProperty("value")?wi(e,t.type,n):t.hasOwnProperty("defaultValue")&&wi(e,t.type,Nt(t.defaultValue)),t.checked==null&&t.defaultChecked!=null&&(e.defaultChecked=!!t.defaultChecked)}function Il(e,t,n){if(t.hasOwnProperty("value")||t.hasOwnProperty("defaultValue")){var o=t.type;if(!(o!=="submit"&&o!=="reset"||t.value!==void 0&&t.value!==null))return;t=""+e._wrapperState.initialValue,n||t===e.value||(e.value=t),e.defaultValue=t}n=e.name,n!==""&&(e.name=""),e.defaultChecked=!!e._wrapperState.initialChecked,n!==""&&(e.name=n)}function wi(e,t,n){(t!=="number"||Or(e.ownerDocument)!==e)&&(n==null?e.defaultValue=""+e._wrapperState.initialValue:e.defaultValue!==""+n&&(e.defaultValue=""+n))}var lo=Array.isArray;function In(e,t,n,o){if(e=e.options,t){t={};for(var r=0;r<n.length;r++)t["$"+n[r]]=!0;for(n=0;n<e.length;n++)r=t.hasOwnProperty("$"+e[n].value),e[n].selected!==r&&(e[n].selected=r),r&&o&&(e[n].defaultSelected=!0)}else{for(n=""+Nt(n),t=null,r=0;r<e.length;r++){if(e[r].value===n){e[r].selected=!0,o&&(e[r].defaultSelected=!0);return}t!==null||e[r].disabled||(t=e[r])}t!==null&&(t.selected=!0)}}function xi(e,t){if(t.dangerouslySetInnerHTML!=null)throw Error(E(91));return oe({},t,{value:void 0,defaultValue:void 0,children:""+e._wrapperState.initialValue})}function kl(e,t){var n=t.value;if(n==null){if(n=t.children,t=t.defaultValue,n!=null){if(t!=null)throw Error(E(92));if(lo(n)){if(1<n.length)throw Error(E(93));n=n[0]}t=n}t==null&&(t=""),n=t}e._wrapperState={initialValue:Nt(n)}}function Eu(e,t){var n=Nt(t.value),o=Nt(t.defaultValue);n!=null&&(n=""+n,n!==e.value&&(e.value=n),t.defaultValue==null&&e.defaultValue!==n&&(e.defaultValue=n)),o!=null&&(e.defaultValue=""+o)}function _l(e){var t=e.textContent;t===e._wrapperState.initialValue&&t!==""&&t!==null&&(e.value=t)}function Ru(e){switch(e){case"svg":return"http://www.w3.org/2000/svg";case"math":return"http://www.w3.org/1998/Math/MathML";default:return"http://www.w3.org/1999/xhtml"}}function bi(e,t){return e==null||e==="http://www.w3.org/1999/xhtml"?Ru(t):e==="http://www.w3.org/2000/svg"&&t==="foreignObject"?"http://www.w3.org/1999/xhtml":e}var er,zu=function(e){return typeof MSApp<"u"&&MSApp.execUnsafeLocalFunction?function(t,n,o,r){MSApp.execUnsafeLocalFunction(function(){return e(t,n,o,r)})}:e}(function(e,t){if(e.namespaceURI!=="http://www.w3.org/2000/svg"||"innerHTML"in e)e.innerHTML=t;else{for(er=er||document.createElement("div"),er.innerHTML="<svg>"+t.valueOf().toString()+"</svg>",t=er.firstChild;e.firstChild;)e.removeChild(e.firstChild);for(;t.firstChild;)e.appendChild(t.firstChild)}});function So(e,t){if(t){var n=e.firstChild;if(n&&n===e.lastChild&&n.nodeType===3){n.nodeValue=t;return}}e.textContent=t}var go={animationIterationCount:!0,aspectRatio:!0,borderImageOutset:!0,borderImageSlice:!0,borderImageWidth:!0,boxFlex:!0,boxFlexGroup:!0,boxOrdinalGroup:!0,columnCount:!0,columns:!0,flex:!0,flexGrow:!0,flexPositive:!0,flexShrink:!0,flexNegative:!0,flexOrder:!0,gridArea:!0,gridRow:!0,gridRowEnd:!0,gridRowSpan:!0,gridRowStart:!0,gridColumn:!0,gridColumnEnd:!0,gridColumnSpan:!0,gridColumnStart:!0,fontWeight:!0,lineClamp:!0,lineHeight:!0,opacity:!0,order:!0,orphans:!0,tabSize:!0,widows:!0,zIndex:!0,zoom:!0,fillOpacity:!0,floodOpacity:!0,stopOpacity:!0,strokeDasharray:!0,strokeDashoffset:!0,strokeMiterlimit:!0,strokeOpacity:!0,strokeWidth:!0},Um=["Webkit","ms","Moz","O"];Object.keys(go).forEach(function(e){Um.forEach(function(t){t=t+e.charAt(0).toUpperCase()+e.substring(1),go[t]=go[e]})});function Ou(e,t,n){return t==null||typeof t=="boolean"||t===""?"":n||typeof t!="number"||t===0||go.hasOwnProperty(e)&&go[e]?(""+t).trim():t+"px"}function Du(e,t){e=e.style;for(var n in t)if(t.hasOwnProperty(n)){var o=n.indexOf("--")===0,r=Ou(n,t[n],o);n==="float"&&(n="cssFloat"),o?e.setProperty(n,r):e[n]=r}}var Fm=oe({menuitem:!0},{area:!0,base:!0,br:!0,col:!0,embed:!0,hr:!0,img:!0,input:!0,keygen:!0,link:!0,meta:!0,param:!0,source:!0,track:!0,wbr:!0});function Pi(e,t){if(t){if(Fm[e]&&(t.children!=null||t.dangerouslySetInnerHTML!=null))throw Error(E(137,e));if(t.dangerouslySetInnerHTML!=null){if(t.children!=null)throw Error(E(60));if(typeof t.dangerouslySetInnerHTML!="object"||!("__html"in t.dangerouslySetInnerHTML))throw Error(E(61))}if(t.style!=null&&typeof t.style!="object")throw Error(E(62))}}function $i(e,t){if(e.indexOf("-")===-1)return typeof t.is=="string";switch(e){case"annotation-xml":case"color-profile":case"font-face":case"font-face-src":case"font-face-uri":case"font-face-format":case"font-face-name":case"missing-glyph":return!1;default:return!0}}var Si=null;function Ca(e){return e=e.target||e.srcElement||window,e.correspondingUseElement&&(e=e.correspondingUseElement),e.nodeType===3?e.parentNode:e}var Ci=null,kn=null,_n=null;function El(e){if(e=Go(e)){if(typeof Ci!="function")throw Error(E(280));var t=e.stateNode;t&&(t=ps(t),Ci(e.stateNode,e.type,t))}}function Mu(e){kn?_n?_n.push(e):_n=[e]:kn=e}function ju(){if(kn){var e=kn,t=_n;if(_n=kn=null,El(e),t)for(e=0;e<t.length;e++)El(t[e])}}function Tu(e,t){return e(t)}function Nu(){}var Es=!1;function Au(e,t,n){if(Es)return e(t,n);Es=!0;try{return Tu(e,t,n)}finally{Es=!1,(kn!==null||_n!==null)&&(Nu(),ju())}}function Co(e,t){var n=e.stateNode;if(n===null)return null;var o=ps(n);if(o===null)return null;n=o[t];e:switch(t){case"onClick":case"onClickCapture":case"onDoubleClick":case"onDoubleClickCapture":case"onMouseDown":case"onMouseDownCapture":case"onMouseMove":case"onMouseMoveCapture":case"onMouseUp":case"onMouseUpCapture":case"onMouseEnter":(o=!o.disabled)||(e=e.type,o=!(e==="button"||e==="input"||e==="select"||e==="textarea")),e=!o;break e;default:e=!1}if(e)return null;if(n&&typeof n!="function")throw Error(E(231,t,typeof n));return n}var Li=!1;if(mt)try{var eo={};Object.defineProperty(eo,"passive",{get:function(){Li=!0}}),window.addEventListener("test",eo,eo),window.removeEventListener("test",eo,eo)}catch{Li=!1}function Wm(e,t,n,o,r,s,i,a,l){var c=Array.prototype.slice.call(arguments,3);try{t.apply(n,c)}catch(u){this.onError(u)}}var fo=!1,Dr=null,Mr=!1,Ii=null,Vm={onError:function(e){fo=!0,Dr=e}};function Hm(e,t,n,o,r,s,i,a,l){fo=!1,Dr=null,Wm.apply(Vm,arguments)}function Gm(e,t,n,o,r,s,i,a,l){if(Hm.apply(this,arguments),fo){if(fo){var c=Dr;fo=!1,Dr=null}else throw Error(E(198));Mr||(Mr=!0,Ii=c)}}function cn(e){var t=e,n=e;if(e.alternate)for(;t.return;)t=t.return;else{e=t;do t=e,t.flags&4098&&(n=t.return),e=t.return;while(e)}return t.tag===3?n:null}function Bu(e){if(e.tag===13){var t=e.memoizedState;if(t===null&&(e=e.alternate,e!==null&&(t=e.memoizedState)),t!==null)return t.dehydrated}return null}function Rl(e){if(cn(e)!==e)throw Error(E(188))}function qm(e){var t=e.alternate;if(!t){if(t=cn(e),t===null)throw Error(E(188));return t!==e?null:e}for(var n=e,o=t;;){var r=n.return;if(r===null)break;var s=r.alternate;if(s===null){if(o=r.return,o!==null){n=o;continue}break}if(r.child===s.child){for(s=r.child;s;){if(s===n)return Rl(r),e;if(s===o)return Rl(r),t;s=s.sibling}throw Error(E(188))}if(n.return!==o.return)n=r,o=s;else{for(var i=!1,a=r.child;a;){if(a===n){i=!0,n=r,o=s;break}if(a===o){i=!0,o=r,n=s;break}a=a.sibling}if(!i){for(a=s.child;a;){if(a===n){i=!0,n=s,o=r;break}if(a===o){i=!0,o=s,n=r;break}a=a.sibling}if(!i)throw Error(E(189))}}if(n.alternate!==o)throw Error(E(190))}if(n.tag!==3)throw Error(E(188));return n.stateNode.current===n?e:t}function Uu(e){return e=qm(e),e!==null?Fu(e):null}function Fu(e){if(e.tag===5||e.tag===6)return e;for(e=e.child;e!==null;){var t=Fu(e);if(t!==null)return t;e=e.sibling}return null}var Wu=Ne.unstable_scheduleCallback,zl=Ne.unstable_cancelCallback,Qm=Ne.unstable_shouldYield,Km=Ne.unstable_requestPaint,ie=Ne.unstable_now,Ym=Ne.unstable_getCurrentPriorityLevel,La=Ne.unstable_ImmediatePriority,Vu=Ne.unstable_UserBlockingPriority,jr=Ne.unstable_NormalPriority,Xm=Ne.unstable_LowPriority,Hu=Ne.unstable_IdlePriority,ls=null,st=null;function Zm(e){if(st&&typeof st.onCommitFiberRoot=="function")try{st.onCommitFiberRoot(ls,e,void 0,(e.current.flags&128)===128)}catch{}}var Ze=Math.clz32?Math.clz32:tg,Jm=Math.log,eg=Math.LN2;function tg(e){return e>>>=0,e===0?32:31-(Jm(e)/eg|0)|0}var tr=64,nr=4194304;function co(e){switch(e&-e){case 1:return 1;case 2:return 2;case 4:return 4;case 8:return 8;case 16:return 16;case 32:return 32;case 64:case 128:case 256:case 512:case 1024:case 2048:case 4096:case 8192:case 16384:case 32768:case 65536:case 131072:case 262144:case 524288:case 1048576:case 2097152:return e&4194240;case 4194304:case 8388608:case 16777216:case 33554432:case 67108864:return e&130023424;case 134217728:return 134217728;case 268435456:return 268435456;case 536870912:return 536870912;case 1073741824:return 1073741824;default:return e}}function Tr(e,t){var n=e.pendingLanes;if(n===0)return 0;var o=0,r=e.suspendedLanes,s=e.pingedLanes,i=n&268435455;if(i!==0){var a=i&~r;a!==0?o=co(a):(s&=i,s!==0&&(o=co(s)))}else i=n&~r,i!==0?o=co(i):s!==0&&(o=co(s));if(o===0)return 0;if(t!==0&&t!==o&&!(t&r)&&(r=o&-o,s=t&-t,r>=s||r===16&&(s&4194240)!==0))return t;if(o&4&&(o|=n&16),t=e.entangledLanes,t!==0)for(e=e.entanglements,t&=o;0<t;)n=31-Ze(t),r=1<<n,o|=e[n],t&=~r;return o}function ng(e,t){switch(e){case 1:case 2:case 4:return t+250;case 8:case 16:case 32:case 64:case 128:case 256:case 512:case 1024:case 2048:case 4096:case 8192:case 16384:case 32768:case 65536:case 131072:case 262144:case 524288:case 1048576:case 2097152:return t+5e3;case 4194304:case 8388608:case 16777216:case 33554432:case 67108864:return-1;case 134217728:case 268435456:case 536870912:case 1073741824:return-1;default:return-1}}function og(e,t){for(var n=e.suspendedLanes,o=e.pingedLanes,r=e.expirationTimes,s=e.pendingLanes;0<s;){var i=31-Ze(s),a=1<<i,l=r[i];l===-1?(!(a&n)||a&o)&&(r[i]=ng(a,t)):l<=t&&(e.expiredLanes|=a),s&=~a}}function ki(e){return e=e.pendingLanes&-1073741825,e!==0?e:e&1073741824?1073741824:0}function Gu(){var e=tr;return tr<<=1,!(tr&4194240)&&(tr=64),e}function Rs(e){for(var t=[],n=0;31>n;n++)t.push(e);return t}function Vo(e,t,n){e.pendingLanes|=t,t!==536870912&&(e.suspendedLanes=0,e.pingedLanes=0),e=e.eventTimes,t=31-Ze(t),e[t]=n}function rg(e,t){var n=e.pendingLanes&~t;e.pendingLanes=t,e.suspendedLanes=0,e.pingedLanes=0,e.expiredLanes&=t,e.mutableReadLanes&=t,e.entangledLanes&=t,t=e.entanglements;var o=e.eventTimes;for(e=e.expirationTimes;0<n;){var r=31-Ze(n),s=1<<r;t[r]=0,o[r]=-1,e[r]=-1,n&=~s}}function Ia(e,t){var n=e.entangledLanes|=t;for(e=e.entanglements;n;){var o=31-Ze(n),r=1<<o;r&t|e[o]&t&&(e[o]|=t),n&=~r}}var Q=0;function qu(e){return e&=-e,1<e?4<e?e&268435455?16:536870912:4:1}var Qu,ka,Ku,Yu,Xu,_i=!1,or=[],_t=null,Et=null,Rt=null,Lo=new Map,Io=new Map,$t=[],sg="mousedown mouseup touchcancel touchend touchstart auxclick dblclick pointercancel pointerdown pointerup dragend dragstart drop compositionend compositionstart keydown keypress keyup input textInput copy cut paste click change contextmenu reset submit".split(" ");function Ol(e,t){switch(e){case"focusin":case"focusout":_t=null;break;case"dragenter":case"dragleave":Et=null;break;case"mouseover":case"mouseout":Rt=null;break;case"pointerover":case"pointerout":Lo.delete(t.pointerId);break;case"gotpointercapture":case"lostpointercapture":Io.delete(t.pointerId)}}function to(e,t,n,o,r,s){return e===null||e.nativeEvent!==s?(e={blockedOn:t,domEventName:n,eventSystemFlags:o,nativeEvent:s,targetContainers:[r]},t!==null&&(t=Go(t),t!==null&&ka(t)),e):(e.eventSystemFlags|=o,t=e.targetContainers,r!==null&&t.indexOf(r)===-1&&t.push(r),e)}function ig(e,t,n,o,r){switch(t){case"focusin":return _t=to(_t,e,t,n,o,r),!0;case"dragenter":return Et=to(Et,e,t,n,o,r),!0;case"mouseover":return Rt=to(Rt,e,t,n,o,r),!0;case"pointerover":var s=r.pointerId;return Lo.set(s,to(Lo.get(s)||null,e,t,n,o,r)),!0;case"gotpointercapture":return s=r.pointerId,Io.set(s,to(Io.get(s)||null,e,t,n,o,r)),!0}return!1}function Zu(e){var t=Kt(e.target);if(t!==null){var n=cn(t);if(n!==null){if(t=n.tag,t===13){if(t=Bu(n),t!==null){e.blockedOn=t,Xu(e.priority,function(){Ku(n)});return}}else if(t===3&&n.stateNode.current.memoizedState.isDehydrated){e.blockedOn=n.tag===3?n.stateNode.containerInfo:null;return}}}e.blockedOn=null}function $r(e){if(e.blockedOn!==null)return!1;for(var t=e.targetContainers;0<t.length;){var n=Ei(e.domEventName,e.eventSystemFlags,t[0],e.nativeEvent);if(n===null){n=e.nativeEvent;var o=new n.constructor(n.type,n);Si=o,n.target.dispatchEvent(o),Si=null}else return t=Go(n),t!==null&&ka(t),e.blockedOn=n,!1;t.shift()}return!0}function Dl(e,t,n){$r(e)&&n.delete(t)}function ag(){_i=!1,_t!==null&&$r(_t)&&(_t=null),Et!==null&&$r(Et)&&(Et=null),Rt!==null&&$r(Rt)&&(Rt=null),Lo.forEach(Dl),Io.forEach(Dl)}function no(e,t){e.blockedOn===t&&(e.blockedOn=null,_i||(_i=!0,Ne.unstable_scheduleCallback(Ne.unstable_NormalPriority,ag)))}function ko(e){function t(r){return no(r,e)}if(0<or.length){no(or[0],e);for(var n=1;n<or.length;n++){var o=or[n];o.blockedOn===e&&(o.blockedOn=null)}}for(_t!==null&&no(_t,e),Et!==null&&no(Et,e),Rt!==null&&no(Rt,e),Lo.forEach(t),Io.forEach(t),n=0;n<$t.length;n++)o=$t[n],o.blockedOn===e&&(o.blockedOn=null);for(;0<$t.length&&(n=$t[0],n.blockedOn===null);)Zu(n),n.blockedOn===null&&$t.shift()}var En=yt.ReactCurrentBatchConfig,Nr=!0;function lg(e,t,n,o){var r=Q,s=En.transition;En.transition=null;try{Q=1,_a(e,t,n,o)}finally{Q=r,En.transition=s}}function cg(e,t,n,o){var r=Q,s=En.transition;En.transition=null;try{Q=4,_a(e,t,n,o)}finally{Q=r,En.transition=s}}function _a(e,t,n,o){if(Nr){var r=Ei(e,t,n,o);if(r===null)Us(e,t,o,Ar,n),Ol(e,o);else if(ig(r,e,t,n,o))o.stopPropagation();else if(Ol(e,o),t&4&&-1<sg.indexOf(e)){for(;r!==null;){var s=Go(r);if(s!==null&&Qu(s),s=Ei(e,t,n,o),s===null&&Us(e,t,o,Ar,n),s===r)break;r=s}r!==null&&o.stopPropagation()}else Us(e,t,o,null,n)}}var Ar=null;function Ei(e,t,n,o){if(Ar=null,e=Ca(o),e=Kt(e),e!==null)if(t=cn(e),t===null)e=null;else if(n=t.tag,n===13){if(e=Bu(t),e!==null)return e;e=null}else if(n===3){if(t.stateNode.current.memoizedState.isDehydrated)return t.tag===3?t.stateNode.containerInfo:null;e=null}else t!==e&&(e=null);return Ar=e,null}function Ju(e){switch(e){case"cancel":case"click":case"close":case"contextmenu":case"copy":case"cut":case"auxclick":case"dblclick":case"dragend":case"dragstart":case"drop":case"focusin":case"focusout":case"input":case"invalid":case"keydown":case"keypress":case"keyup":case"mousedown":case"mouseup":case"paste":case"pause":case"play":case"pointercancel":case"pointerdown":case"pointerup":case"ratechange":case"reset":case"resize":case"seeked":case"submit":case"touchcancel":case"touchend":case"touchstart":case"volumechange":case"change":case"selectionchange":case"textInput":case"compositionstart":case"compositionend":case"compositionupdate":case"beforeblur":case"afterblur":case"beforeinput":case"blur":case"fullscreenchange":case"focus":case"hashchange":case"popstate":case"select":case"selectstart":return 1;case"drag":case"dragenter":case"dragexit":case"dragleave":case"dragover":case"mousemove":case"mouseout":case"mouseover":case"pointermove":case"pointerout":case"pointerover":case"scroll":case"toggle":case"touchmove":case"wheel":case"mouseenter":case"mouseleave":case"pointerenter":case"pointerleave":return 4;case"message":switch(Ym()){case La:return 1;case Vu:return 4;case jr:case Xm:return 16;case Hu:return 536870912;default:return 16}default:return 16}}var Ct=null,Ea=null,Sr=null;function ed(){if(Sr)return Sr;var e,t=Ea,n=t.length,o,r="value"in Ct?Ct.value:Ct.textContent,s=r.length;for(e=0;e<n&&t[e]===r[e];e++);var i=n-e;for(o=1;o<=i&&t[n-o]===r[s-o];o++);return Sr=r.slice(e,1<o?1-o:void 0)}function Cr(e){var t=e.keyCode;return"charCode"in e?(e=e.charCode,e===0&&t===13&&(e=13)):e=t,e===10&&(e=13),32<=e||e===13?e:0}function rr(){return!0}function Ml(){return!1}function Be(e){function t(n,o,r,s,i){this._reactName=n,this._targetInst=r,this.type=o,this.nativeEvent=s,this.target=i,this.currentTarget=null;for(var a in e)e.hasOwnProperty(a)&&(n=e[a],this[a]=n?n(s):s[a]);return this.isDefaultPrevented=(s.defaultPrevented!=null?s.defaultPrevented:s.returnValue===!1)?rr:Ml,this.isPropagationStopped=Ml,this}return oe(t.prototype,{preventDefault:function(){this.defaultPrevented=!0;var n=this.nativeEvent;n&&(n.preventDefault?n.preventDefault():typeof n.returnValue!="unknown"&&(n.returnValue=!1),this.isDefaultPrevented=rr)},stopPropagation:function(){var n=this.nativeEvent;n&&(n.stopPropagation?n.stopPropagation():typeof n.cancelBubble!="unknown"&&(n.cancelBubble=!0),this.isPropagationStopped=rr)},persist:function(){},isPersistent:rr}),t}var Vn={eventPhase:0,bubbles:0,cancelable:0,timeStamp:function(e){return e.timeStamp||Date.now()},defaultPrevented:0,isTrusted:0},Ra=Be(Vn),Ho=oe({},Vn,{view:0,detail:0}),ug=Be(Ho),zs,Os,oo,cs=oe({},Ho,{screenX:0,screenY:0,clientX:0,clientY:0,pageX:0,pageY:0,ctrlKey:0,shiftKey:0,altKey:0,metaKey:0,getModifierState:za,button:0,buttons:0,relatedTarget:function(e){return e.relatedTarget===void 0?e.fromElement===e.srcElement?e.toElement:e.fromElement:e.relatedTarget},movementX:function(e){return"movementX"in e?e.movementX:(e!==oo&&(oo&&e.type==="mousemove"?(zs=e.screenX-oo.screenX,Os=e.screenY-oo.screenY):Os=zs=0,oo=e),zs)},movementY:function(e){return"movementY"in e?e.movementY:Os}}),jl=Be(cs),dg=oe({},cs,{dataTransfer:0}),pg=Be(dg),mg=oe({},Ho,{relatedTarget:0}),Ds=Be(mg),gg=oe({},Vn,{animationName:0,elapsedTime:0,pseudoElement:0}),fg=Be(gg),hg=oe({},Vn,{clipboardData:function(e){return"clipboardData"in e?e.clipboardData:window.clipboardData}}),yg=Be(hg),vg=oe({},Vn,{data:0}),Tl=Be(vg),wg={Esc:"Escape",Spacebar:" ",Left:"ArrowLeft",Up:"ArrowUp",Right:"ArrowRight",Down:"ArrowDown",Del:"Delete",Win:"OS",Menu:"ContextMenu",Apps:"ContextMenu",Scroll:"ScrollLock",MozPrintableKey:"Unidentified"},xg={8:"Backspace",9:"Tab",12:"Clear",13:"Enter",16:"Shift",17:"Control",18:"Alt",19:"Pause",20:"CapsLock",27:"Escape",32:" ",33:"PageUp",34:"PageDown",35:"End",36:"Home",37:"ArrowLeft",38:"ArrowUp",39:"ArrowRight",40:"ArrowDown",45:"Insert",46:"Delete",112:"F1",113:"F2",114:"F3",115:"F4",116:"F5",117:"F6",118:"F7",119:"F8",120:"F9",121:"F10",122:"F11",123:"F12",144:"NumLock",145:"ScrollLock",224:"Meta"},bg={Alt:"altKey",Control:"ctrlKey",Meta:"metaKey",Shift:"shiftKey"};function Pg(e){var t=this.nativeEvent;return t.getModifierState?t.getModifierState(e):(e=bg[e])?!!t[e]:!1}function za(){return Pg}var $g=oe({},Ho,{key:function(e){if(e.key){var t=wg[e.key]||e.key;if(t!=="Unidentified")return t}return e.type==="keypress"?(e=Cr(e),e===13?"Enter":String.fromCharCode(e)):e.type==="keydown"||e.type==="keyup"?xg[e.keyCode]||"Unidentified":""},code:0,location:0,ctrlKey:0,shiftKey:0,altKey:0,metaKey:0,repeat:0,locale:0,getModifierState:za,charCode:function(e){return e.type==="keypress"?Cr(e):0},keyCode:function(e){return e.type==="keydown"||e.type==="keyup"?e.keyCode:0},which:function(e){return e.type==="keypress"?Cr(e):e.type==="keydown"||e.type==="keyup"?e.keyCode:0}}),Sg=Be($g),Cg=oe({},cs,{pointerId:0,width:0,height:0,pressure:0,tangentialPressure:0,tiltX:0,tiltY:0,twist:0,pointerType:0,isPrimary:0}),Nl=Be(Cg),Lg=oe({},Ho,{touches:0,targetTouches:0,changedTouches:0,altKey:0,metaKey:0,ctrlKey:0,shiftKey:0,getModifierState:za}),Ig=Be(Lg),kg=oe({},Vn,{propertyName:0,elapsedTime:0,pseudoElement:0}),_g=Be(kg),Eg=oe({},cs,{deltaX:function(e){return"deltaX"in e?e.deltaX:"wheelDeltaX"in e?-e.wheelDeltaX:0},deltaY:function(e){return"deltaY"in e?e.deltaY:"wheelDeltaY"in e?-e.wheelDeltaY:"wheelDelta"in e?-e.wheelDelta:0},deltaZ:0,deltaMode:0}),Rg=Be(Eg),zg=[9,13,27,32],Oa=mt&&"CompositionEvent"in window,ho=null;mt&&"documentMode"in document&&(ho=document.documentMode);var Og=mt&&"TextEvent"in window&&!ho,td=mt&&(!Oa||ho&&8<ho&&11>=ho),Al=" ",Bl=!1;function nd(e,t){switch(e){case"keyup":return zg.indexOf(t.keyCode)!==-1;case"keydown":return t.keyCode!==229;case"keypress":case"mousedown":case"focusout":return!0;default:return!1}}function od(e){return e=e.detail,typeof e=="object"&&"data"in e?e.data:null}var yn=!1;function Dg(e,t){switch(e){case"compositionend":return od(t);case"keypress":return t.which!==32?null:(Bl=!0,Al);case"textInput":return e=t.data,e===Al&&Bl?null:e;default:return null}}function Mg(e,t){if(yn)return e==="compositionend"||!Oa&&nd(e,t)?(e=ed(),Sr=Ea=Ct=null,yn=!1,e):null;switch(e){case"paste":return null;case"keypress":if(!(t.ctrlKey||t.altKey||t.metaKey)||t.ctrlKey&&t.altKey){if(t.char&&1<t.char.length)return t.char;if(t.which)return String.fromCharCode(t.which)}return null;case"compositionend":return td&&t.locale!=="ko"?null:t.data;default:return null}}var jg={color:!0,date:!0,datetime:!0,"datetime-local":!0,email:!0,month:!0,number:!0,password:!0,range:!0,search:!0,tel:!0,text:!0,time:!0,url:!0,week:!0};function Ul(e){var t=e&&e.nodeName&&e.nodeName.toLowerCase();return t==="input"?!!jg[e.type]:t==="textarea"}function rd(e,t,n,o){Mu(o),t=Br(t,"onChange"),0<t.length&&(n=new Ra("onChange","change",null,n,o),e.push({event:n,listeners:t}))}var yo=null,_o=null;function Tg(e){fd(e,0)}function us(e){var t=xn(e);if(ku(t))return e}function Ng(e,t){if(e==="change")return t}var sd=!1;if(mt){var Ms;if(mt){var js="oninput"in document;if(!js){var Fl=document.createElement("div");Fl.setAttribute("oninput","return;"),js=typeof Fl.oninput=="function"}Ms=js}else Ms=!1;sd=Ms&&(!document.documentMode||9<document.documentMode)}function Wl(){yo&&(yo.detachEvent("onpropertychange",id),_o=yo=null)}function id(e){if(e.propertyName==="value"&&us(_o)){var t=[];rd(t,_o,e,Ca(e)),Au(Tg,t)}}function Ag(e,t,n){e==="focusin"?(Wl(),yo=t,_o=n,yo.attachEvent("onpropertychange",id)):e==="focusout"&&Wl()}function Bg(e){if(e==="selectionchange"||e==="keyup"||e==="keydown")return us(_o)}function Ug(e,t){if(e==="click")return us(t)}function Fg(e,t){if(e==="input"||e==="change")return us(t)}function Wg(e,t){return e===t&&(e!==0||1/e===1/t)||e!==e&&t!==t}var et=typeof Object.is=="function"?Object.is:Wg;function Eo(e,t){if(et(e,t))return!0;if(typeof e!="object"||e===null||typeof t!="object"||t===null)return!1;var n=Object.keys(e),o=Object.keys(t);if(n.length!==o.length)return!1;for(o=0;o<n.length;o++){var r=n[o];if(!pi.call(t,r)||!et(e[r],t[r]))return!1}return!0}function Vl(e){for(;e&&e.firstChild;)e=e.firstChild;return e}function Hl(e,t){var n=Vl(e);e=0;for(var o;n;){if(n.nodeType===3){if(o=e+n.textContent.length,e<=t&&o>=t)return{node:n,offset:t-e};e=o}e:{for(;n;){if(n.nextSibling){n=n.nextSibling;break e}n=n.parentNode}n=void 0}n=Vl(n)}}function ad(e,t){return e&&t?e===t?!0:e&&e.nodeType===3?!1:t&&t.nodeType===3?ad(e,t.parentNode):"contains"in e?e.contains(t):e.compareDocumentPosition?!!(e.compareDocumentPosition(t)&16):!1:!1}function ld(){for(var e=window,t=Or();t instanceof e.HTMLIFrameElement;){try{var n=typeof t.contentWindow.location.href=="string"}catch{n=!1}if(n)e=t.contentWindow;else break;t=Or(e.document)}return t}function Da(e){var t=e&&e.nodeName&&e.nodeName.toLowerCase();return t&&(t==="input"&&(e.type==="text"||e.type==="search"||e.type==="tel"||e.type==="url"||e.type==="password")||t==="textarea"||e.contentEditable==="true")}function Vg(e){var t=ld(),n=e.focusedElem,o=e.selectionRange;if(t!==n&&n&&n.ownerDocument&&ad(n.ownerDocument.documentElement,n)){if(o!==null&&Da(n)){if(t=o.start,e=o.end,e===void 0&&(e=t),"selectionStart"in n)n.selectionStart=t,n.selectionEnd=Math.min(e,n.value.length);else if(e=(t=n.ownerDocument||document)&&t.defaultView||window,e.getSelection){e=e.getSelection();var r=n.textContent.length,s=Math.min(o.start,r);o=o.end===void 0?s:Math.min(o.end,r),!e.extend&&s>o&&(r=o,o=s,s=r),r=Hl(n,s);var i=Hl(n,o);r&&i&&(e.rangeCount!==1||e.anchorNode!==r.node||e.anchorOffset!==r.offset||e.focusNode!==i.node||e.focusOffset!==i.offset)&&(t=t.createRange(),t.setStart(r.node,r.offset),e.removeAllRanges(),s>o?(e.addRange(t),e.extend(i.node,i.offset)):(t.setEnd(i.node,i.offset),e.addRange(t)))}}for(t=[],e=n;e=e.parentNode;)e.nodeType===1&&t.push({element:e,left:e.scrollLeft,top:e.scrollTop});for(typeof n.focus=="function"&&n.focus(),n=0;n<t.length;n++)e=t[n],e.element.scrollLeft=e.left,e.element.scrollTop=e.top}}var Hg=mt&&"documentMode"in document&&11>=document.documentMode,vn=null,Ri=null,vo=null,zi=!1;function Gl(e,t,n){var o=n.window===n?n.document:n.nodeType===9?n:n.ownerDocument;zi||vn==null||vn!==Or(o)||(o=vn,"selectionStart"in o&&Da(o)?o={start:o.selectionStart,end:o.selectionEnd}:(o=(o.ownerDocument&&o.ownerDocument.defaultView||window).getSelection(),o={anchorNode:o.anchorNode,anchorOffset:o.anchorOffset,focusNode:o.focusNode,focusOffset:o.focusOffset}),vo&&Eo(vo,o)||(vo=o,o=Br(Ri,"onSelect"),0<o.length&&(t=new Ra("onSelect","select",null,t,n),e.push({event:t,listeners:o}),t.target=vn)))}function sr(e,t){var n={};return n[e.toLowerCase()]=t.toLowerCase(),n["Webkit"+e]="webkit"+t,n["Moz"+e]="moz"+t,n}var wn={animationend:sr("Animation","AnimationEnd"),animationiteration:sr("Animation","AnimationIteration"),animationstart:sr("Animation","AnimationStart"),transitionend:sr("Transition","TransitionEnd")},Ts={},cd={};mt&&(cd=document.createElement("div").style,"AnimationEvent"in window||(delete wn.animationend.animation,delete wn.animationiteration.animation,delete wn.animationstart.animation),"TransitionEvent"in window||delete wn.transitionend.transition);function ds(e){if(Ts[e])return Ts[e];if(!wn[e])return e;var t=wn[e],n;for(n in t)if(t.hasOwnProperty(n)&&n in cd)return Ts[e]=t[n];return e}var ud=ds("animationend"),dd=ds("animationiteration"),pd=ds("animationstart"),md=ds("transitionend"),gd=new Map,ql="abort auxClick cancel canPlay canPlayThrough click close contextMenu copy cut drag dragEnd dragEnter dragExit dragLeave dragOver dragStart drop durationChange emptied encrypted ended error gotPointerCapture input invalid keyDown keyPress keyUp load loadedData loadedMetadata loadStart lostPointerCapture mouseDown mouseMove mouseOut mouseOver mouseUp paste pause play playing pointerCancel pointerDown pointerMove pointerOut pointerOver pointerUp progress rateChange reset resize seeked seeking stalled submit suspend timeUpdate touchCancel touchEnd touchStart volumeChange scroll toggle touchMove waiting wheel".split(" ");function Bt(e,t){gd.set(e,t),ln(t,[e])}for(var Ns=0;Ns<ql.length;Ns++){var As=ql[Ns],Gg=As.toLowerCase(),qg=As[0].toUpperCase()+As.slice(1);Bt(Gg,"on"+qg)}Bt(ud,"onAnimationEnd");Bt(dd,"onAnimationIteration");Bt(pd,"onAnimationStart");Bt("dblclick","onDoubleClick");Bt("focusin","onFocus");Bt("focusout","onBlur");Bt(md,"onTransitionEnd");Mn("onMouseEnter",["mouseout","mouseover"]);Mn("onMouseLeave",["mouseout","mouseover"]);Mn("onPointerEnter",["pointerout","pointerover"]);Mn("onPointerLeave",["pointerout","pointerover"]);ln("onChange","change click focusin focusout input keydown keyup selectionchange".split(" "));ln("onSelect","focusout contextmenu dragend focusin keydown keyup mousedown mouseup selectionchange".split(" "));ln("onBeforeInput",["compositionend","keypress","textInput","paste"]);ln("onCompositionEnd","compositionend focusout keydown keypress keyup mousedown".split(" "));ln("onCompositionStart","compositionstart focusout keydown keypress keyup mousedown".split(" "));ln("onCompositionUpdate","compositionupdate focusout keydown keypress keyup mousedown".split(" "));var uo="abort canplay canplaythrough durationchange emptied encrypted ended error loadeddata loadedmetadata loadstart pause play playing progress ratechange resize seeked seeking stalled suspend timeupdate volumechange waiting".split(" "),Qg=new Set("cancel close invalid load scroll toggle".split(" ").concat(uo));function Ql(e,t,n){var o=e.type||"unknown-event";e.currentTarget=n,Gm(o,t,void 0,e),e.currentTarget=null}function fd(e,t){t=(t&4)!==0;for(var n=0;n<e.length;n++){var o=e[n],r=o.event;o=o.listeners;e:{var s=void 0;if(t)for(var i=o.length-1;0<=i;i--){var a=o[i],l=a.instance,c=a.currentTarget;if(a=a.listener,l!==s&&r.isPropagationStopped())break e;Ql(r,a,c),s=l}else for(i=0;i<o.length;i++){if(a=o[i],l=a.instance,c=a.currentTarget,a=a.listener,l!==s&&r.isPropagationStopped())break e;Ql(r,a,c),s=l}}}if(Mr)throw e=Ii,Mr=!1,Ii=null,e}function X(e,t){var n=t[Ti];n===void 0&&(n=t[Ti]=new Set);var o=e+"__bubble";n.has(o)||(hd(t,e,2,!1),n.add(o))}function Bs(e,t,n){var o=0;t&&(o|=4),hd(n,e,o,t)}var ir="_reactListening"+Math.random().toString(36).slice(2);function Ro(e){if(!e[ir]){e[ir]=!0,$u.forEach(function(n){n!=="selectionchange"&&(Qg.has(n)||Bs(n,!1,e),Bs(n,!0,e))});var t=e.nodeType===9?e:e.ownerDocument;t===null||t[ir]||(t[ir]=!0,Bs("selectionchange",!1,t))}}function hd(e,t,n,o){switch(Ju(t)){case 1:var r=lg;break;case 4:r=cg;break;default:r=_a}n=r.bind(null,t,n,e),r=void 0,!Li||t!=="touchstart"&&t!=="touchmove"&&t!=="wheel"||(r=!0),o?r!==void 0?e.addEventListener(t,n,{capture:!0,passive:r}):e.addEventListener(t,n,!0):r!==void 0?e.addEventListener(t,n,{passive:r}):e.addEventListener(t,n,!1)}function Us(e,t,n,o,r){var s=o;if(!(t&1)&&!(t&2)&&o!==null)e:for(;;){if(o===null)return;var i=o.tag;if(i===3||i===4){var a=o.stateNode.containerInfo;if(a===r||a.nodeType===8&&a.parentNode===r)break;if(i===4)for(i=o.return;i!==null;){var l=i.tag;if((l===3||l===4)&&(l=i.stateNode.containerInfo,l===r||l.nodeType===8&&l.parentNode===r))return;i=i.return}for(;a!==null;){if(i=Kt(a),i===null)return;if(l=i.tag,l===5||l===6){o=s=i;continue e}a=a.parentNode}}o=o.return}Au(function(){var c=s,u=Ca(n),d=[];e:{var p=gd.get(e);if(p!==void 0){var f=Ra,v=e;switch(e){case"keypress":if(Cr(n)===0)break e;case"keydown":case"keyup":f=Sg;break;case"focusin":v="focus",f=Ds;break;case"focusout":v="blur",f=Ds;break;case"beforeblur":case"afterblur":f=Ds;break;case"click":if(n.button===2)break e;case"auxclick":case"dblclick":case"mousedown":case"mousemove":case"mouseup":case"mouseout":case"mouseover":case"contextmenu":f=jl;break;case"drag":case"dragend":case"dragenter":case"dragexit":case"dragleave":case"dragover":case"dragstart":case"drop":f=pg;break;case"touchcancel":case"touchend":case"touchmove":case"touchstart":f=Ig;break;case ud:case dd:case pd:f=fg;break;case md:f=_g;break;case"scroll":f=ug;break;case"wheel":f=Rg;break;case"copy":case"cut":case"paste":f=yg;break;case"gotpointercapture":case"lostpointercapture":case"pointercancel":case"pointerdown":case"pointermove":case"pointerout":case"pointerover":case"pointerup":f=Nl}var w=(t&4)!==0,b=!w&&e==="scroll",h=w?p!==null?p+"Capture":null:p;w=[];for(var g=c,y;g!==null;){y=g;var P=y.stateNode;if(y.tag===5&&P!==null&&(y=P,h!==null&&(P=Co(g,h),P!=null&&w.push(zo(g,P,y)))),b)break;g=g.return}0<w.length&&(p=new f(p,v,null,n,u),d.push({event:p,listeners:w}))}}if(!(t&7)){e:{if(p=e==="mouseover"||e==="pointerover",f=e==="mouseout"||e==="pointerout",p&&n!==Si&&(v=n.relatedTarget||n.fromElement)&&(Kt(v)||v[gt]))break e;if((f||p)&&(p=u.window===u?u:(p=u.ownerDocument)?p.defaultView||p.parentWindow:window,f?(v=n.relatedTarget||n.toElement,f=c,v=v?Kt(v):null,v!==null&&(b=cn(v),v!==b||v.tag!==5&&v.tag!==6)&&(v=null)):(f=null,v=c),f!==v)){if(w=jl,P="onMouseLeave",h="onMouseEnter",g="mouse",(e==="pointerout"||e==="pointerover")&&(w=Nl,P="onPointerLeave",h="onPointerEnter",g="pointer"),b=f==null?p:xn(f),y=v==null?p:xn(v),p=new w(P,g+"leave",f,n,u),p.target=b,p.relatedTarget=y,P=null,Kt(u)===c&&(w=new w(h,g+"enter",v,n,u),w.target=y,w.relatedTarget=b,P=w),b=P,f&&v)t:{for(w=f,h=v,g=0,y=w;y;y=dn(y))g++;for(y=0,P=h;P;P=dn(P))y++;for(;0<g-y;)w=dn(w),g--;for(;0<y-g;)h=dn(h),y--;for(;g--;){if(w===h||h!==null&&w===h.alternate)break t;w=dn(w),h=dn(h)}w=null}else w=null;f!==null&&Kl(d,p,f,w,!1),v!==null&&b!==null&&Kl(d,b,v,w,!0)}}e:{if(p=c?xn(c):window,f=p.nodeName&&p.nodeName.toLowerCase(),f==="select"||f==="input"&&p.type==="file")var $=Ng;else if(Ul(p))if(sd)$=Fg;else{$=Bg;var I=Ag}else(f=p.nodeName)&&f.toLowerCase()==="input"&&(p.type==="checkbox"||p.type==="radio")&&($=Ug);if($&&($=$(e,c))){rd(d,$,n,u);break e}I&&I(e,p,c),e==="focusout"&&(I=p._wrapperState)&&I.controlled&&p.type==="number"&&wi(p,"number",p.value)}switch(I=c?xn(c):window,e){case"focusin":(Ul(I)||I.contentEditable==="true")&&(vn=I,Ri=c,vo=null);break;case"focusout":vo=Ri=vn=null;break;case"mousedown":zi=!0;break;case"contextmenu":case"mouseup":case"dragend":zi=!1,Gl(d,n,u);break;case"selectionchange":if(Hg)break;case"keydown":case"keyup":Gl(d,n,u)}var k;if(Oa)e:{switch(e){case"compositionstart":var _="onCompositionStart";break e;case"compositionend":_="onCompositionEnd";break e;case"compositionupdate":_="onCompositionUpdate";break e}_=void 0}else yn?nd(e,n)&&(_="onCompositionEnd"):e==="keydown"&&n.keyCode===229&&(_="onCompositionStart");_&&(td&&n.locale!=="ko"&&(yn||_!=="onCompositionStart"?_==="onCompositionEnd"&&yn&&(k=ed()):(Ct=u,Ea="value"in Ct?Ct.value:Ct.textContent,yn=!0)),I=Br(c,_),0<I.length&&(_=new Tl(_,e,null,n,u),d.push({event:_,listeners:I}),k?_.data=k:(k=od(n),k!==null&&(_.data=k)))),(k=Og?Dg(e,n):Mg(e,n))&&(c=Br(c,"onBeforeInput"),0<c.length&&(u=new Tl("onBeforeInput","beforeinput",null,n,u),d.push({event:u,listeners:c}),u.data=k))}fd(d,t)})}function zo(e,t,n){return{instance:e,listener:t,currentTarget:n}}function Br(e,t){for(var n=t+"Capture",o=[];e!==null;){var r=e,s=r.stateNode;r.tag===5&&s!==null&&(r=s,s=Co(e,n),s!=null&&o.unshift(zo(e,s,r)),s=Co(e,t),s!=null&&o.push(zo(e,s,r))),e=e.return}return o}function dn(e){if(e===null)return null;do e=e.return;while(e&&e.tag!==5);return e||null}function Kl(e,t,n,o,r){for(var s=t._reactName,i=[];n!==null&&n!==o;){var a=n,l=a.alternate,c=a.stateNode;if(l!==null&&l===o)break;a.tag===5&&c!==null&&(a=c,r?(l=Co(n,s),l!=null&&i.unshift(zo(n,l,a))):r||(l=Co(n,s),l!=null&&i.push(zo(n,l,a)))),n=n.return}i.length!==0&&e.push({event:t,listeners:i})}var Kg=/\r\n?/g,Yg=/\u0000|\uFFFD/g;function Yl(e){return(typeof e=="string"?e:""+e).replace(Kg,`
`).replace(Yg,"")}function ar(e,t,n){if(t=Yl(t),Yl(e)!==t&&n)throw Error(E(425))}function Ur(){}var Oi=null,Di=null;function Mi(e,t){return e==="textarea"||e==="noscript"||typeof t.children=="string"||typeof t.children=="number"||typeof t.dangerouslySetInnerHTML=="object"&&t.dangerouslySetInnerHTML!==null&&t.dangerouslySetInnerHTML.__html!=null}var ji=typeof setTimeout=="function"?setTimeout:void 0,Xg=typeof clearTimeout=="function"?clearTimeout:void 0,Xl=typeof Promise=="function"?Promise:void 0,Zg=typeof queueMicrotask=="function"?queueMicrotask:typeof Xl<"u"?function(e){return Xl.resolve(null).then(e).catch(Jg)}:ji;function Jg(e){setTimeout(function(){throw e})}function Fs(e,t){var n=t,o=0;do{var r=n.nextSibling;if(e.removeChild(n),r&&r.nodeType===8)if(n=r.data,n==="/$"){if(o===0){e.removeChild(r),ko(t);return}o--}else n!=="$"&&n!=="$?"&&n!=="$!"||o++;n=r}while(n);ko(t)}function zt(e){for(;e!=null;e=e.nextSibling){var t=e.nodeType;if(t===1||t===3)break;if(t===8){if(t=e.data,t==="$"||t==="$!"||t==="$?")break;if(t==="/$")return null}}return e}function Zl(e){e=e.previousSibling;for(var t=0;e;){if(e.nodeType===8){var n=e.data;if(n==="$"||n==="$!"||n==="$?"){if(t===0)return e;t--}else n==="/$"&&t++}e=e.previousSibling}return null}var Hn=Math.random().toString(36).slice(2),rt="__reactFiber$"+Hn,Oo="__reactProps$"+Hn,gt="__reactContainer$"+Hn,Ti="__reactEvents$"+Hn,ef="__reactListeners$"+Hn,tf="__reactHandles$"+Hn;function Kt(e){var t=e[rt];if(t)return t;for(var n=e.parentNode;n;){if(t=n[gt]||n[rt]){if(n=t.alternate,t.child!==null||n!==null&&n.child!==null)for(e=Zl(e);e!==null;){if(n=e[rt])return n;e=Zl(e)}return t}e=n,n=e.parentNode}return null}function Go(e){return e=e[rt]||e[gt],!e||e.tag!==5&&e.tag!==6&&e.tag!==13&&e.tag!==3?null:e}function xn(e){if(e.tag===5||e.tag===6)return e.stateNode;throw Error(E(33))}function ps(e){return e[Oo]||null}var Ni=[],bn=-1;function Ut(e){return{current:e}}function Z(e){0>bn||(e.current=Ni[bn],Ni[bn]=null,bn--)}function Y(e,t){bn++,Ni[bn]=e.current,e.current=t}var At={},$e=Ut(At),Re=Ut(!1),tn=At;function jn(e,t){var n=e.type.contextTypes;if(!n)return At;var o=e.stateNode;if(o&&o.__reactInternalMemoizedUnmaskedChildContext===t)return o.__reactInternalMemoizedMaskedChildContext;var r={},s;for(s in n)r[s]=t[s];return o&&(e=e.stateNode,e.__reactInternalMemoizedUnmaskedChildContext=t,e.__reactInternalMemoizedMaskedChildContext=r),r}function ze(e){return e=e.childContextTypes,e!=null}function Fr(){Z(Re),Z($e)}function Jl(e,t,n){if($e.current!==At)throw Error(E(168));Y($e,t),Y(Re,n)}function yd(e,t,n){var o=e.stateNode;if(t=t.childContextTypes,typeof o.getChildContext!="function")return n;o=o.getChildContext();for(var r in o)if(!(r in t))throw Error(E(108,Am(e)||"Unknown",r));return oe({},n,o)}function Wr(e){return e=(e=e.stateNode)&&e.__reactInternalMemoizedMergedChildContext||At,tn=$e.current,Y($e,e),Y(Re,Re.current),!0}function ec(e,t,n){var o=e.stateNode;if(!o)throw Error(E(169));n?(e=yd(e,t,tn),o.__reactInternalMemoizedMergedChildContext=e,Z(Re),Z($e),Y($e,e)):Z(Re),Y(Re,n)}var lt=null,ms=!1,Ws=!1;function vd(e){lt===null?lt=[e]:lt.push(e)}function nf(e){ms=!0,vd(e)}function Ft(){if(!Ws&&lt!==null){Ws=!0;var e=0,t=Q;try{var n=lt;for(Q=1;e<n.length;e++){var o=n[e];do o=o(!0);while(o!==null)}lt=null,ms=!1}catch(r){throw lt!==null&&(lt=lt.slice(e+1)),Wu(La,Ft),r}finally{Q=t,Ws=!1}}return null}var Pn=[],$n=0,Vr=null,Hr=0,Fe=[],We=0,nn=null,ct=1,ut="";function Ht(e,t){Pn[$n++]=Hr,Pn[$n++]=Vr,Vr=e,Hr=t}function wd(e,t,n){Fe[We++]=ct,Fe[We++]=ut,Fe[We++]=nn,nn=e;var o=ct;e=ut;var r=32-Ze(o)-1;o&=~(1<<r),n+=1;var s=32-Ze(t)+r;if(30<s){var i=r-r%5;s=(o&(1<<i)-1).toString(32),o>>=i,r-=i,ct=1<<32-Ze(t)+r|n<<r|o,ut=s+e}else ct=1<<s|n<<r|o,ut=e}function Ma(e){e.return!==null&&(Ht(e,1),wd(e,1,0))}function ja(e){for(;e===Vr;)Vr=Pn[--$n],Pn[$n]=null,Hr=Pn[--$n],Pn[$n]=null;for(;e===nn;)nn=Fe[--We],Fe[We]=null,ut=Fe[--We],Fe[We]=null,ct=Fe[--We],Fe[We]=null}var Te=null,je=null,J=!1,Xe=null;function xd(e,t){var n=Ve(5,null,null,0);n.elementType="DELETED",n.stateNode=t,n.return=e,t=e.deletions,t===null?(e.deletions=[n],e.flags|=16):t.push(n)}function tc(e,t){switch(e.tag){case 5:var n=e.type;return t=t.nodeType!==1||n.toLowerCase()!==t.nodeName.toLowerCase()?null:t,t!==null?(e.stateNode=t,Te=e,je=zt(t.firstChild),!0):!1;case 6:return t=e.pendingProps===""||t.nodeType!==3?null:t,t!==null?(e.stateNode=t,Te=e,je=null,!0):!1;case 13:return t=t.nodeType!==8?null:t,t!==null?(n=nn!==null?{id:ct,overflow:ut}:null,e.memoizedState={dehydrated:t,treeContext:n,retryLane:1073741824},n=Ve(18,null,null,0),n.stateNode=t,n.return=e,e.child=n,Te=e,je=null,!0):!1;default:return!1}}function Ai(e){return(e.mode&1)!==0&&(e.flags&128)===0}function Bi(e){if(J){var t=je;if(t){var n=t;if(!tc(e,t)){if(Ai(e))throw Error(E(418));t=zt(n.nextSibling);var o=Te;t&&tc(e,t)?xd(o,n):(e.flags=e.flags&-4097|2,J=!1,Te=e)}}else{if(Ai(e))throw Error(E(418));e.flags=e.flags&-4097|2,J=!1,Te=e}}}function nc(e){for(e=e.return;e!==null&&e.tag!==5&&e.tag!==3&&e.tag!==13;)e=e.return;Te=e}function lr(e){if(e!==Te)return!1;if(!J)return nc(e),J=!0,!1;var t;if((t=e.tag!==3)&&!(t=e.tag!==5)&&(t=e.type,t=t!=="head"&&t!=="body"&&!Mi(e.type,e.memoizedProps)),t&&(t=je)){if(Ai(e))throw bd(),Error(E(418));for(;t;)xd(e,t),t=zt(t.nextSibling)}if(nc(e),e.tag===13){if(e=e.memoizedState,e=e!==null?e.dehydrated:null,!e)throw Error(E(317));e:{for(e=e.nextSibling,t=0;e;){if(e.nodeType===8){var n=e.data;if(n==="/$"){if(t===0){je=zt(e.nextSibling);break e}t--}else n!=="$"&&n!=="$!"&&n!=="$?"||t++}e=e.nextSibling}je=null}}else je=Te?zt(e.stateNode.nextSibling):null;return!0}function bd(){for(var e=je;e;)e=zt(e.nextSibling)}function Tn(){je=Te=null,J=!1}function Ta(e){Xe===null?Xe=[e]:Xe.push(e)}var of=yt.ReactCurrentBatchConfig;function ro(e,t,n){if(e=n.ref,e!==null&&typeof e!="function"&&typeof e!="object"){if(n._owner){if(n=n._owner,n){if(n.tag!==1)throw Error(E(309));var o=n.stateNode}if(!o)throw Error(E(147,e));var r=o,s=""+e;return t!==null&&t.ref!==null&&typeof t.ref=="function"&&t.ref._stringRef===s?t.ref:(t=function(i){var a=r.refs;i===null?delete a[s]:a[s]=i},t._stringRef=s,t)}if(typeof e!="string")throw Error(E(284));if(!n._owner)throw Error(E(290,e))}return e}function cr(e,t){throw e=Object.prototype.toString.call(t),Error(E(31,e==="[object Object]"?"object with keys {"+Object.keys(t).join(", ")+"}":e))}function oc(e){var t=e._init;return t(e._payload)}function Pd(e){function t(h,g){if(e){var y=h.deletions;y===null?(h.deletions=[g],h.flags|=16):y.push(g)}}function n(h,g){if(!e)return null;for(;g!==null;)t(h,g),g=g.sibling;return null}function o(h,g){for(h=new Map;g!==null;)g.key!==null?h.set(g.key,g):h.set(g.index,g),g=g.sibling;return h}function r(h,g){return h=jt(h,g),h.index=0,h.sibling=null,h}function s(h,g,y){return h.index=y,e?(y=h.alternate,y!==null?(y=y.index,y<g?(h.flags|=2,g):y):(h.flags|=2,g)):(h.flags|=1048576,g)}function i(h){return e&&h.alternate===null&&(h.flags|=2),h}function a(h,g,y,P){return g===null||g.tag!==6?(g=Ys(y,h.mode,P),g.return=h,g):(g=r(g,y),g.return=h,g)}function l(h,g,y,P){var $=y.type;return $===hn?u(h,g,y.props.children,P,y.key):g!==null&&(g.elementType===$||typeof $=="object"&&$!==null&&$.$$typeof===bt&&oc($)===g.type)?(P=r(g,y.props),P.ref=ro(h,g,y),P.return=h,P):(P=zr(y.type,y.key,y.props,null,h.mode,P),P.ref=ro(h,g,y),P.return=h,P)}function c(h,g,y,P){return g===null||g.tag!==4||g.stateNode.containerInfo!==y.containerInfo||g.stateNode.implementation!==y.implementation?(g=Xs(y,h.mode,P),g.return=h,g):(g=r(g,y.children||[]),g.return=h,g)}function u(h,g,y,P,$){return g===null||g.tag!==7?(g=en(y,h.mode,P,$),g.return=h,g):(g=r(g,y),g.return=h,g)}function d(h,g,y){if(typeof g=="string"&&g!==""||typeof g=="number")return g=Ys(""+g,h.mode,y),g.return=h,g;if(typeof g=="object"&&g!==null){switch(g.$$typeof){case Zo:return y=zr(g.type,g.key,g.props,null,h.mode,y),y.ref=ro(h,null,g),y.return=h,y;case fn:return g=Xs(g,h.mode,y),g.return=h,g;case bt:var P=g._init;return d(h,P(g._payload),y)}if(lo(g)||Jn(g))return g=en(g,h.mode,y,null),g.return=h,g;cr(h,g)}return null}function p(h,g,y,P){var $=g!==null?g.key:null;if(typeof y=="string"&&y!==""||typeof y=="number")return $!==null?null:a(h,g,""+y,P);if(typeof y=="object"&&y!==null){switch(y.$$typeof){case Zo:return y.key===$?l(h,g,y,P):null;case fn:return y.key===$?c(h,g,y,P):null;case bt:return $=y._init,p(h,g,$(y._payload),P)}if(lo(y)||Jn(y))return $!==null?null:u(h,g,y,P,null);cr(h,y)}return null}function f(h,g,y,P,$){if(typeof P=="string"&&P!==""||typeof P=="number")return h=h.get(y)||null,a(g,h,""+P,$);if(typeof P=="object"&&P!==null){switch(P.$$typeof){case Zo:return h=h.get(P.key===null?y:P.key)||null,l(g,h,P,$);case fn:return h=h.get(P.key===null?y:P.key)||null,c(g,h,P,$);case bt:var I=P._init;return f(h,g,y,I(P._payload),$)}if(lo(P)||Jn(P))return h=h.get(y)||null,u(g,h,P,$,null);cr(g,P)}return null}function v(h,g,y,P){for(var $=null,I=null,k=g,_=g=0,S=null;k!==null&&_<y.length;_++){k.index>_?(S=k,k=null):S=k.sibling;var L=p(h,k,y[_],P);if(L===null){k===null&&(k=S);break}e&&k&&L.alternate===null&&t(h,k),g=s(L,g,_),I===null?$=L:I.sibling=L,I=L,k=S}if(_===y.length)return n(h,k),J&&Ht(h,_),$;if(k===null){for(;_<y.length;_++)k=d(h,y[_],P),k!==null&&(g=s(k,g,_),I===null?$=k:I.sibling=k,I=k);return J&&Ht(h,_),$}for(k=o(h,k);_<y.length;_++)S=f(k,h,_,y[_],P),S!==null&&(e&&S.alternate!==null&&k.delete(S.key===null?_:S.key),g=s(S,g,_),I===null?$=S:I.sibling=S,I=S);return e&&k.forEach(function(j){return t(h,j)}),J&&Ht(h,_),$}function w(h,g,y,P){var $=Jn(y);if(typeof $!="function")throw Error(E(150));if(y=$.call(y),y==null)throw Error(E(151));for(var I=$=null,k=g,_=g=0,S=null,L=y.next();k!==null&&!L.done;_++,L=y.next()){k.index>_?(S=k,k=null):S=k.sibling;var j=p(h,k,L.value,P);if(j===null){k===null&&(k=S);break}e&&k&&j.alternate===null&&t(h,k),g=s(j,g,_),I===null?$=j:I.sibling=j,I=j,k=S}if(L.done)return n(h,k),J&&Ht(h,_),$;if(k===null){for(;!L.done;_++,L=y.next())L=d(h,L.value,P),L!==null&&(g=s(L,g,_),I===null?$=L:I.sibling=L,I=L);return J&&Ht(h,_),$}for(k=o(h,k);!L.done;_++,L=y.next())L=f(k,h,_,L.value,P),L!==null&&(e&&L.alternate!==null&&k.delete(L.key===null?_:L.key),g=s(L,g,_),I===null?$=L:I.sibling=L,I=L);return e&&k.forEach(function(A){return t(h,A)}),J&&Ht(h,_),$}function b(h,g,y,P){if(typeof y=="object"&&y!==null&&y.type===hn&&y.key===null&&(y=y.props.children),typeof y=="object"&&y!==null){switch(y.$$typeof){case Zo:e:{for(var $=y.key,I=g;I!==null;){if(I.key===$){if($=y.type,$===hn){if(I.tag===7){n(h,I.sibling),g=r(I,y.props.children),g.return=h,h=g;break e}}else if(I.elementType===$||typeof $=="object"&&$!==null&&$.$$typeof===bt&&oc($)===I.type){n(h,I.sibling),g=r(I,y.props),g.ref=ro(h,I,y),g.return=h,h=g;break e}n(h,I);break}else t(h,I);I=I.sibling}y.type===hn?(g=en(y.props.children,h.mode,P,y.key),g.return=h,h=g):(P=zr(y.type,y.key,y.props,null,h.mode,P),P.ref=ro(h,g,y),P.return=h,h=P)}return i(h);case fn:e:{for(I=y.key;g!==null;){if(g.key===I)if(g.tag===4&&g.stateNode.containerInfo===y.containerInfo&&g.stateNode.implementation===y.implementation){n(h,g.sibling),g=r(g,y.children||[]),g.return=h,h=g;break e}else{n(h,g);break}else t(h,g);g=g.sibling}g=Xs(y,h.mode,P),g.return=h,h=g}return i(h);case bt:return I=y._init,b(h,g,I(y._payload),P)}if(lo(y))return v(h,g,y,P);if(Jn(y))return w(h,g,y,P);cr(h,y)}return typeof y=="string"&&y!==""||typeof y=="number"?(y=""+y,g!==null&&g.tag===6?(n(h,g.sibling),g=r(g,y),g.return=h,h=g):(n(h,g),g=Ys(y,h.mode,P),g.return=h,h=g),i(h)):n(h,g)}return b}var Nn=Pd(!0),$d=Pd(!1),Gr=Ut(null),qr=null,Sn=null,Na=null;function Aa(){Na=Sn=qr=null}function Ba(e){var t=Gr.current;Z(Gr),e._currentValue=t}function Ui(e,t,n){for(;e!==null;){var o=e.alternate;if((e.childLanes&t)!==t?(e.childLanes|=t,o!==null&&(o.childLanes|=t)):o!==null&&(o.childLanes&t)!==t&&(o.childLanes|=t),e===n)break;e=e.return}}function Rn(e,t){qr=e,Na=Sn=null,e=e.dependencies,e!==null&&e.firstContext!==null&&(e.lanes&t&&(Ee=!0),e.firstContext=null)}function Ge(e){var t=e._currentValue;if(Na!==e)if(e={context:e,memoizedValue:t,next:null},Sn===null){if(qr===null)throw Error(E(308));Sn=e,qr.dependencies={lanes:0,firstContext:e}}else Sn=Sn.next=e;return t}var Yt=null;function Ua(e){Yt===null?Yt=[e]:Yt.push(e)}function Sd(e,t,n,o){var r=t.interleaved;return r===null?(n.next=n,Ua(t)):(n.next=r.next,r.next=n),t.interleaved=n,ft(e,o)}function ft(e,t){e.lanes|=t;var n=e.alternate;for(n!==null&&(n.lanes|=t),n=e,e=e.return;e!==null;)e.childLanes|=t,n=e.alternate,n!==null&&(n.childLanes|=t),n=e,e=e.return;return n.tag===3?n.stateNode:null}var Pt=!1;function Fa(e){e.updateQueue={baseState:e.memoizedState,firstBaseUpdate:null,lastBaseUpdate:null,shared:{pending:null,interleaved:null,lanes:0},effects:null}}function Cd(e,t){e=e.updateQueue,t.updateQueue===e&&(t.updateQueue={baseState:e.baseState,firstBaseUpdate:e.firstBaseUpdate,lastBaseUpdate:e.lastBaseUpdate,shared:e.shared,effects:e.effects})}function dt(e,t){return{eventTime:e,lane:t,tag:0,payload:null,callback:null,next:null}}function Ot(e,t,n){var o=e.updateQueue;if(o===null)return null;if(o=o.shared,F&2){var r=o.pending;return r===null?t.next=t:(t.next=r.next,r.next=t),o.pending=t,ft(e,n)}return r=o.interleaved,r===null?(t.next=t,Ua(o)):(t.next=r.next,r.next=t),o.interleaved=t,ft(e,n)}function Lr(e,t,n){if(t=t.updateQueue,t!==null&&(t=t.shared,(n&4194240)!==0)){var o=t.lanes;o&=e.pendingLanes,n|=o,t.lanes=n,Ia(e,n)}}function rc(e,t){var n=e.updateQueue,o=e.alternate;if(o!==null&&(o=o.updateQueue,n===o)){var r=null,s=null;if(n=n.firstBaseUpdate,n!==null){do{var i={eventTime:n.eventTime,lane:n.lane,tag:n.tag,payload:n.payload,callback:n.callback,next:null};s===null?r=s=i:s=s.next=i,n=n.next}while(n!==null);s===null?r=s=t:s=s.next=t}else r=s=t;n={baseState:o.baseState,firstBaseUpdate:r,lastBaseUpdate:s,shared:o.shared,effects:o.effects},e.updateQueue=n;return}e=n.lastBaseUpdate,e===null?n.firstBaseUpdate=t:e.next=t,n.lastBaseUpdate=t}function Qr(e,t,n,o){var r=e.updateQueue;Pt=!1;var s=r.firstBaseUpdate,i=r.lastBaseUpdate,a=r.shared.pending;if(a!==null){r.shared.pending=null;var l=a,c=l.next;l.next=null,i===null?s=c:i.next=c,i=l;var u=e.alternate;u!==null&&(u=u.updateQueue,a=u.lastBaseUpdate,a!==i&&(a===null?u.firstBaseUpdate=c:a.next=c,u.lastBaseUpdate=l))}if(s!==null){var d=r.baseState;i=0,u=c=l=null,a=s;do{var p=a.lane,f=a.eventTime;if((o&p)===p){u!==null&&(u=u.next={eventTime:f,lane:0,tag:a.tag,payload:a.payload,callback:a.callback,next:null});e:{var v=e,w=a;switch(p=t,f=n,w.tag){case 1:if(v=w.payload,typeof v=="function"){d=v.call(f,d,p);break e}d=v;break e;case 3:v.flags=v.flags&-65537|128;case 0:if(v=w.payload,p=typeof v=="function"?v.call(f,d,p):v,p==null)break e;d=oe({},d,p);break e;case 2:Pt=!0}}a.callback!==null&&a.lane!==0&&(e.flags|=64,p=r.effects,p===null?r.effects=[a]:p.push(a))}else f={eventTime:f,lane:p,tag:a.tag,payload:a.payload,callback:a.callback,next:null},u===null?(c=u=f,l=d):u=u.next=f,i|=p;if(a=a.next,a===null){if(a=r.shared.pending,a===null)break;p=a,a=p.next,p.next=null,r.lastBaseUpdate=p,r.shared.pending=null}}while(!0);if(u===null&&(l=d),r.baseState=l,r.firstBaseUpdate=c,r.lastBaseUpdate=u,t=r.shared.interleaved,t!==null){r=t;do i|=r.lane,r=r.next;while(r!==t)}else s===null&&(r.shared.lanes=0);rn|=i,e.lanes=i,e.memoizedState=d}}function sc(e,t,n){if(e=t.effects,t.effects=null,e!==null)for(t=0;t<e.length;t++){var o=e[t],r=o.callback;if(r!==null){if(o.callback=null,o=n,typeof r!="function")throw Error(E(191,r));r.call(o)}}}var qo={},it=Ut(qo),Do=Ut(qo),Mo=Ut(qo);function Xt(e){if(e===qo)throw Error(E(174));return e}function Wa(e,t){switch(Y(Mo,t),Y(Do,e),Y(it,qo),e=t.nodeType,e){case 9:case 11:t=(t=t.documentElement)?t.namespaceURI:bi(null,"");break;default:e=e===8?t.parentNode:t,t=e.namespaceURI||null,e=e.tagName,t=bi(t,e)}Z(it),Y(it,t)}function An(){Z(it),Z(Do),Z(Mo)}function Ld(e){Xt(Mo.current);var t=Xt(it.current),n=bi(t,e.type);t!==n&&(Y(Do,e),Y(it,n))}function Va(e){Do.current===e&&(Z(it),Z(Do))}var te=Ut(0);function Kr(e){for(var t=e;t!==null;){if(t.tag===13){var n=t.memoizedState;if(n!==null&&(n=n.dehydrated,n===null||n.data==="$?"||n.data==="$!"))return t}else if(t.tag===19&&t.memoizedProps.revealOrder!==void 0){if(t.flags&128)return t}else if(t.child!==null){t.child.return=t,t=t.child;continue}if(t===e)break;for(;t.sibling===null;){if(t.return===null||t.return===e)return null;t=t.return}t.sibling.return=t.return,t=t.sibling}return null}var Vs=[];function Ha(){for(var e=0;e<Vs.length;e++)Vs[e]._workInProgressVersionPrimary=null;Vs.length=0}var Ir=yt.ReactCurrentDispatcher,Hs=yt.ReactCurrentBatchConfig,on=0,ne=null,ue=null,ge=null,Yr=!1,wo=!1,jo=0,rf=0;function xe(){throw Error(E(321))}function Ga(e,t){if(t===null)return!1;for(var n=0;n<t.length&&n<e.length;n++)if(!et(e[n],t[n]))return!1;return!0}function qa(e,t,n,o,r,s){if(on=s,ne=t,t.memoizedState=null,t.updateQueue=null,t.lanes=0,Ir.current=e===null||e.memoizedState===null?cf:uf,e=n(o,r),wo){s=0;do{if(wo=!1,jo=0,25<=s)throw Error(E(301));s+=1,ge=ue=null,t.updateQueue=null,Ir.current=df,e=n(o,r)}while(wo)}if(Ir.current=Xr,t=ue!==null&&ue.next!==null,on=0,ge=ue=ne=null,Yr=!1,t)throw Error(E(300));return e}function Qa(){var e=jo!==0;return jo=0,e}function ot(){var e={memoizedState:null,baseState:null,baseQueue:null,queue:null,next:null};return ge===null?ne.memoizedState=ge=e:ge=ge.next=e,ge}function qe(){if(ue===null){var e=ne.alternate;e=e!==null?e.memoizedState:null}else e=ue.next;var t=ge===null?ne.memoizedState:ge.next;if(t!==null)ge=t,ue=e;else{if(e===null)throw Error(E(310));ue=e,e={memoizedState:ue.memoizedState,baseState:ue.baseState,baseQueue:ue.baseQueue,queue:ue.queue,next:null},ge===null?ne.memoizedState=ge=e:ge=ge.next=e}return ge}function To(e,t){return typeof t=="function"?t(e):t}function Gs(e){var t=qe(),n=t.queue;if(n===null)throw Error(E(311));n.lastRenderedReducer=e;var o=ue,r=o.baseQueue,s=n.pending;if(s!==null){if(r!==null){var i=r.next;r.next=s.next,s.next=i}o.baseQueue=r=s,n.pending=null}if(r!==null){s=r.next,o=o.baseState;var a=i=null,l=null,c=s;do{var u=c.lane;if((on&u)===u)l!==null&&(l=l.next={lane:0,action:c.action,hasEagerState:c.hasEagerState,eagerState:c.eagerState,next:null}),o=c.hasEagerState?c.eagerState:e(o,c.action);else{var d={lane:u,action:c.action,hasEagerState:c.hasEagerState,eagerState:c.eagerState,next:null};l===null?(a=l=d,i=o):l=l.next=d,ne.lanes|=u,rn|=u}c=c.next}while(c!==null&&c!==s);l===null?i=o:l.next=a,et(o,t.memoizedState)||(Ee=!0),t.memoizedState=o,t.baseState=i,t.baseQueue=l,n.lastRenderedState=o}if(e=n.interleaved,e!==null){r=e;do s=r.lane,ne.lanes|=s,rn|=s,r=r.next;while(r!==e)}else r===null&&(n.lanes=0);return[t.memoizedState,n.dispatch]}function qs(e){var t=qe(),n=t.queue;if(n===null)throw Error(E(311));n.lastRenderedReducer=e;var o=n.dispatch,r=n.pending,s=t.memoizedState;if(r!==null){n.pending=null;var i=r=r.next;do s=e(s,i.action),i=i.next;while(i!==r);et(s,t.memoizedState)||(Ee=!0),t.memoizedState=s,t.baseQueue===null&&(t.baseState=s),n.lastRenderedState=s}return[s,o]}function Id(){}function kd(e,t){var n=ne,o=qe(),r=t(),s=!et(o.memoizedState,r);if(s&&(o.memoizedState=r,Ee=!0),o=o.queue,Ka(Rd.bind(null,n,o,e),[e]),o.getSnapshot!==t||s||ge!==null&&ge.memoizedState.tag&1){if(n.flags|=2048,No(9,Ed.bind(null,n,o,r,t),void 0,null),fe===null)throw Error(E(349));on&30||_d(n,t,r)}return r}function _d(e,t,n){e.flags|=16384,e={getSnapshot:t,value:n},t=ne.updateQueue,t===null?(t={lastEffect:null,stores:null},ne.updateQueue=t,t.stores=[e]):(n=t.stores,n===null?t.stores=[e]:n.push(e))}function Ed(e,t,n,o){t.value=n,t.getSnapshot=o,zd(t)&&Od(e)}function Rd(e,t,n){return n(function(){zd(t)&&Od(e)})}function zd(e){var t=e.getSnapshot;e=e.value;try{var n=t();return!et(e,n)}catch{return!0}}function Od(e){var t=ft(e,1);t!==null&&Je(t,e,1,-1)}function ic(e){var t=ot();return typeof e=="function"&&(e=e()),t.memoizedState=t.baseState=e,e={pending:null,interleaved:null,lanes:0,dispatch:null,lastRenderedReducer:To,lastRenderedState:e},t.queue=e,e=e.dispatch=lf.bind(null,ne,e),[t.memoizedState,e]}function No(e,t,n,o){return e={tag:e,create:t,destroy:n,deps:o,next:null},t=ne.updateQueue,t===null?(t={lastEffect:null,stores:null},ne.updateQueue=t,t.lastEffect=e.next=e):(n=t.lastEffect,n===null?t.lastEffect=e.next=e:(o=n.next,n.next=e,e.next=o,t.lastEffect=e)),e}function Dd(){return qe().memoizedState}function kr(e,t,n,o){var r=ot();ne.flags|=e,r.memoizedState=No(1|t,n,void 0,o===void 0?null:o)}function gs(e,t,n,o){var r=qe();o=o===void 0?null:o;var s=void 0;if(ue!==null){var i=ue.memoizedState;if(s=i.destroy,o!==null&&Ga(o,i.deps)){r.memoizedState=No(t,n,s,o);return}}ne.flags|=e,r.memoizedState=No(1|t,n,s,o)}function ac(e,t){return kr(8390656,8,e,t)}function Ka(e,t){return gs(2048,8,e,t)}function Md(e,t){return gs(4,2,e,t)}function jd(e,t){return gs(4,4,e,t)}function Td(e,t){if(typeof t=="function")return e=e(),t(e),function(){t(null)};if(t!=null)return e=e(),t.current=e,function(){t.current=null}}function Nd(e,t,n){return n=n!=null?n.concat([e]):null,gs(4,4,Td.bind(null,t,e),n)}function Ya(){}function Ad(e,t){var n=qe();t=t===void 0?null:t;var o=n.memoizedState;return o!==null&&t!==null&&Ga(t,o[1])?o[0]:(n.memoizedState=[e,t],e)}function Bd(e,t){var n=qe();t=t===void 0?null:t;var o=n.memoizedState;return o!==null&&t!==null&&Ga(t,o[1])?o[0]:(e=e(),n.memoizedState=[e,t],e)}function Ud(e,t,n){return on&21?(et(n,t)||(n=Gu(),ne.lanes|=n,rn|=n,e.baseState=!0),t):(e.baseState&&(e.baseState=!1,Ee=!0),e.memoizedState=n)}function sf(e,t){var n=Q;Q=n!==0&&4>n?n:4,e(!0);var o=Hs.transition;Hs.transition={};try{e(!1),t()}finally{Q=n,Hs.transition=o}}function Fd(){return qe().memoizedState}function af(e,t,n){var o=Mt(e);if(n={lane:o,action:n,hasEagerState:!1,eagerState:null,next:null},Wd(e))Vd(t,n);else if(n=Sd(e,t,n,o),n!==null){var r=Le();Je(n,e,o,r),Hd(n,t,o)}}function lf(e,t,n){var o=Mt(e),r={lane:o,action:n,hasEagerState:!1,eagerState:null,next:null};if(Wd(e))Vd(t,r);else{var s=e.alternate;if(e.lanes===0&&(s===null||s.lanes===0)&&(s=t.lastRenderedReducer,s!==null))try{var i=t.lastRenderedState,a=s(i,n);if(r.hasEagerState=!0,r.eagerState=a,et(a,i)){var l=t.interleaved;l===null?(r.next=r,Ua(t)):(r.next=l.next,l.next=r),t.interleaved=r;return}}catch{}finally{}n=Sd(e,t,r,o),n!==null&&(r=Le(),Je(n,e,o,r),Hd(n,t,o))}}function Wd(e){var t=e.alternate;return e===ne||t!==null&&t===ne}function Vd(e,t){wo=Yr=!0;var n=e.pending;n===null?t.next=t:(t.next=n.next,n.next=t),e.pending=t}function Hd(e,t,n){if(n&4194240){var o=t.lanes;o&=e.pendingLanes,n|=o,t.lanes=n,Ia(e,n)}}var Xr={readContext:Ge,useCallback:xe,useContext:xe,useEffect:xe,useImperativeHandle:xe,useInsertionEffect:xe,useLayoutEffect:xe,useMemo:xe,useReducer:xe,useRef:xe,useState:xe,useDebugValue:xe,useDeferredValue:xe,useTransition:xe,useMutableSource:xe,useSyncExternalStore:xe,useId:xe,unstable_isNewReconciler:!1},cf={readContext:Ge,useCallback:function(e,t){return ot().memoizedState=[e,t===void 0?null:t],e},useContext:Ge,useEffect:ac,useImperativeHandle:function(e,t,n){return n=n!=null?n.concat([e]):null,kr(4194308,4,Td.bind(null,t,e),n)},useLayoutEffect:function(e,t){return kr(4194308,4,e,t)},useInsertionEffect:function(e,t){return kr(4,2,e,t)},useMemo:function(e,t){var n=ot();return t=t===void 0?null:t,e=e(),n.memoizedState=[e,t],e},useReducer:function(e,t,n){var o=ot();return t=n!==void 0?n(t):t,o.memoizedState=o.baseState=t,e={pending:null,interleaved:null,lanes:0,dispatch:null,lastRenderedReducer:e,lastRenderedState:t},o.queue=e,e=e.dispatch=af.bind(null,ne,e),[o.memoizedState,e]},useRef:function(e){var t=ot();return e={current:e},t.memoizedState=e},useState:ic,useDebugValue:Ya,useDeferredValue:function(e){return ot().memoizedState=e},useTransition:function(){var e=ic(!1),t=e[0];return e=sf.bind(null,e[1]),ot().memoizedState=e,[t,e]},useMutableSource:function(){},useSyncExternalStore:function(e,t,n){var o=ne,r=ot();if(J){if(n===void 0)throw Error(E(407));n=n()}else{if(n=t(),fe===null)throw Error(E(349));on&30||_d(o,t,n)}r.memoizedState=n;var s={value:n,getSnapshot:t};return r.queue=s,ac(Rd.bind(null,o,s,e),[e]),o.flags|=2048,No(9,Ed.bind(null,o,s,n,t),void 0,null),n},useId:function(){var e=ot(),t=fe.identifierPrefix;if(J){var n=ut,o=ct;n=(o&~(1<<32-Ze(o)-1)).toString(32)+n,t=":"+t+"R"+n,n=jo++,0<n&&(t+="H"+n.toString(32)),t+=":"}else n=rf++,t=":"+t+"r"+n.toString(32)+":";return e.memoizedState=t},unstable_isNewReconciler:!1},uf={readContext:Ge,useCallback:Ad,useContext:Ge,useEffect:Ka,useImperativeHandle:Nd,useInsertionEffect:Md,useLayoutEffect:jd,useMemo:Bd,useReducer:Gs,useRef:Dd,useState:function(){return Gs(To)},useDebugValue:Ya,useDeferredValue:function(e){var t=qe();return Ud(t,ue.memoizedState,e)},useTransition:function(){var e=Gs(To)[0],t=qe().memoizedState;return[e,t]},useMutableSource:Id,useSyncExternalStore:kd,useId:Fd,unstable_isNewReconciler:!1},df={readContext:Ge,useCallback:Ad,useContext:Ge,useEffect:Ka,useImperativeHandle:Nd,useInsertionEffect:Md,useLayoutEffect:jd,useMemo:Bd,useReducer:qs,useRef:Dd,useState:function(){return qs(To)},useDebugValue:Ya,useDeferredValue:function(e){var t=qe();return ue===null?t.memoizedState=e:Ud(t,ue.memoizedState,e)},useTransition:function(){var e=qs(To)[0],t=qe().memoizedState;return[e,t]},useMutableSource:Id,useSyncExternalStore:kd,useId:Fd,unstable_isNewReconciler:!1};function Ke(e,t){if(e&&e.defaultProps){t=oe({},t),e=e.defaultProps;for(var n in e)t[n]===void 0&&(t[n]=e[n]);return t}return t}function Fi(e,t,n,o){t=e.memoizedState,n=n(o,t),n=n==null?t:oe({},t,n),e.memoizedState=n,e.lanes===0&&(e.updateQueue.baseState=n)}var fs={isMounted:function(e){return(e=e._reactInternals)?cn(e)===e:!1},enqueueSetState:function(e,t,n){e=e._reactInternals;var o=Le(),r=Mt(e),s=dt(o,r);s.payload=t,n!=null&&(s.callback=n),t=Ot(e,s,r),t!==null&&(Je(t,e,r,o),Lr(t,e,r))},enqueueReplaceState:function(e,t,n){e=e._reactInternals;var o=Le(),r=Mt(e),s=dt(o,r);s.tag=1,s.payload=t,n!=null&&(s.callback=n),t=Ot(e,s,r),t!==null&&(Je(t,e,r,o),Lr(t,e,r))},enqueueForceUpdate:function(e,t){e=e._reactInternals;var n=Le(),o=Mt(e),r=dt(n,o);r.tag=2,t!=null&&(r.callback=t),t=Ot(e,r,o),t!==null&&(Je(t,e,o,n),Lr(t,e,o))}};function lc(e,t,n,o,r,s,i){return e=e.stateNode,typeof e.shouldComponentUpdate=="function"?e.shouldComponentUpdate(o,s,i):t.prototype&&t.prototype.isPureReactComponent?!Eo(n,o)||!Eo(r,s):!0}function Gd(e,t,n){var o=!1,r=At,s=t.contextType;return typeof s=="object"&&s!==null?s=Ge(s):(r=ze(t)?tn:$e.current,o=t.contextTypes,s=(o=o!=null)?jn(e,r):At),t=new t(n,s),e.memoizedState=t.state!==null&&t.state!==void 0?t.state:null,t.updater=fs,e.stateNode=t,t._reactInternals=e,o&&(e=e.stateNode,e.__reactInternalMemoizedUnmaskedChildContext=r,e.__reactInternalMemoizedMaskedChildContext=s),t}function cc(e,t,n,o){e=t.state,typeof t.componentWillReceiveProps=="function"&&t.componentWillReceiveProps(n,o),typeof t.UNSAFE_componentWillReceiveProps=="function"&&t.UNSAFE_componentWillReceiveProps(n,o),t.state!==e&&fs.enqueueReplaceState(t,t.state,null)}function Wi(e,t,n,o){var r=e.stateNode;r.props=n,r.state=e.memoizedState,r.refs={},Fa(e);var s=t.contextType;typeof s=="object"&&s!==null?r.context=Ge(s):(s=ze(t)?tn:$e.current,r.context=jn(e,s)),r.state=e.memoizedState,s=t.getDerivedStateFromProps,typeof s=="function"&&(Fi(e,t,s,n),r.state=e.memoizedState),typeof t.getDerivedStateFromProps=="function"||typeof r.getSnapshotBeforeUpdate=="function"||typeof r.UNSAFE_componentWillMount!="function"&&typeof r.componentWillMount!="function"||(t=r.state,typeof r.componentWillMount=="function"&&r.componentWillMount(),typeof r.UNSAFE_componentWillMount=="function"&&r.UNSAFE_componentWillMount(),t!==r.state&&fs.enqueueReplaceState(r,r.state,null),Qr(e,n,r,o),r.state=e.memoizedState),typeof r.componentDidMount=="function"&&(e.flags|=4194308)}function Bn(e,t){try{var n="",o=t;do n+=Nm(o),o=o.return;while(o);var r=n}catch(s){r=`
Error generating stack: `+s.message+`
`+s.stack}return{value:e,source:t,stack:r,digest:null}}function Qs(e,t,n){return{value:e,source:null,stack:n??null,digest:t??null}}function Vi(e,t){try{console.error(t.value)}catch(n){setTimeout(function(){throw n})}}var pf=typeof WeakMap=="function"?WeakMap:Map;function qd(e,t,n){n=dt(-1,n),n.tag=3,n.payload={element:null};var o=t.value;return n.callback=function(){Jr||(Jr=!0,ea=o),Vi(e,t)},n}function Qd(e,t,n){n=dt(-1,n),n.tag=3;var o=e.type.getDerivedStateFromError;if(typeof o=="function"){var r=t.value;n.payload=function(){return o(r)},n.callback=function(){Vi(e,t)}}var s=e.stateNode;return s!==null&&typeof s.componentDidCatch=="function"&&(n.callback=function(){Vi(e,t),typeof o!="function"&&(Dt===null?Dt=new Set([this]):Dt.add(this));var i=t.stack;this.componentDidCatch(t.value,{componentStack:i!==null?i:""})}),n}function uc(e,t,n){var o=e.pingCache;if(o===null){o=e.pingCache=new pf;var r=new Set;o.set(t,r)}else r=o.get(t),r===void 0&&(r=new Set,o.set(t,r));r.has(n)||(r.add(n),e=Lf.bind(null,e,t,n),t.then(e,e))}function dc(e){do{var t;if((t=e.tag===13)&&(t=e.memoizedState,t=t!==null?t.dehydrated!==null:!0),t)return e;e=e.return}while(e!==null);return null}function pc(e,t,n,o,r){return e.mode&1?(e.flags|=65536,e.lanes=r,e):(e===t?e.flags|=65536:(e.flags|=128,n.flags|=131072,n.flags&=-52805,n.tag===1&&(n.alternate===null?n.tag=17:(t=dt(-1,1),t.tag=2,Ot(n,t,1))),n.lanes|=1),e)}var mf=yt.ReactCurrentOwner,Ee=!1;function Ce(e,t,n,o){t.child=e===null?$d(t,null,n,o):Nn(t,e.child,n,o)}function mc(e,t,n,o,r){n=n.render;var s=t.ref;return Rn(t,r),o=qa(e,t,n,o,s,r),n=Qa(),e!==null&&!Ee?(t.updateQueue=e.updateQueue,t.flags&=-2053,e.lanes&=~r,ht(e,t,r)):(J&&n&&Ma(t),t.flags|=1,Ce(e,t,o,r),t.child)}function gc(e,t,n,o,r){if(e===null){var s=n.type;return typeof s=="function"&&!rl(s)&&s.defaultProps===void 0&&n.compare===null&&n.defaultProps===void 0?(t.tag=15,t.type=s,Kd(e,t,s,o,r)):(e=zr(n.type,null,o,t,t.mode,r),e.ref=t.ref,e.return=t,t.child=e)}if(s=e.child,!(e.lanes&r)){var i=s.memoizedProps;if(n=n.compare,n=n!==null?n:Eo,n(i,o)&&e.ref===t.ref)return ht(e,t,r)}return t.flags|=1,e=jt(s,o),e.ref=t.ref,e.return=t,t.child=e}function Kd(e,t,n,o,r){if(e!==null){var s=e.memoizedProps;if(Eo(s,o)&&e.ref===t.ref)if(Ee=!1,t.pendingProps=o=s,(e.lanes&r)!==0)e.flags&131072&&(Ee=!0);else return t.lanes=e.lanes,ht(e,t,r)}return Hi(e,t,n,o,r)}function Yd(e,t,n){var o=t.pendingProps,r=o.children,s=e!==null?e.memoizedState:null;if(o.mode==="hidden")if(!(t.mode&1))t.memoizedState={baseLanes:0,cachePool:null,transitions:null},Y(Ln,Me),Me|=n;else{if(!(n&1073741824))return e=s!==null?s.baseLanes|n:n,t.lanes=t.childLanes=1073741824,t.memoizedState={baseLanes:e,cachePool:null,transitions:null},t.updateQueue=null,Y(Ln,Me),Me|=e,null;t.memoizedState={baseLanes:0,cachePool:null,transitions:null},o=s!==null?s.baseLanes:n,Y(Ln,Me),Me|=o}else s!==null?(o=s.baseLanes|n,t.memoizedState=null):o=n,Y(Ln,Me),Me|=o;return Ce(e,t,r,n),t.child}function Xd(e,t){var n=t.ref;(e===null&&n!==null||e!==null&&e.ref!==n)&&(t.flags|=512,t.flags|=2097152)}function Hi(e,t,n,o,r){var s=ze(n)?tn:$e.current;return s=jn(t,s),Rn(t,r),n=qa(e,t,n,o,s,r),o=Qa(),e!==null&&!Ee?(t.updateQueue=e.updateQueue,t.flags&=-2053,e.lanes&=~r,ht(e,t,r)):(J&&o&&Ma(t),t.flags|=1,Ce(e,t,n,r),t.child)}function fc(e,t,n,o,r){if(ze(n)){var s=!0;Wr(t)}else s=!1;if(Rn(t,r),t.stateNode===null)_r(e,t),Gd(t,n,o),Wi(t,n,o,r),o=!0;else if(e===null){var i=t.stateNode,a=t.memoizedProps;i.props=a;var l=i.context,c=n.contextType;typeof c=="object"&&c!==null?c=Ge(c):(c=ze(n)?tn:$e.current,c=jn(t,c));var u=n.getDerivedStateFromProps,d=typeof u=="function"||typeof i.getSnapshotBeforeUpdate=="function";d||typeof i.UNSAFE_componentWillReceiveProps!="function"&&typeof i.componentWillReceiveProps!="function"||(a!==o||l!==c)&&cc(t,i,o,c),Pt=!1;var p=t.memoizedState;i.state=p,Qr(t,o,i,r),l=t.memoizedState,a!==o||p!==l||Re.current||Pt?(typeof u=="function"&&(Fi(t,n,u,o),l=t.memoizedState),(a=Pt||lc(t,n,a,o,p,l,c))?(d||typeof i.UNSAFE_componentWillMount!="function"&&typeof i.componentWillMount!="function"||(typeof i.componentWillMount=="function"&&i.componentWillMount(),typeof i.UNSAFE_componentWillMount=="function"&&i.UNSAFE_componentWillMount()),typeof i.componentDidMount=="function"&&(t.flags|=4194308)):(typeof i.componentDidMount=="function"&&(t.flags|=4194308),t.memoizedProps=o,t.memoizedState=l),i.props=o,i.state=l,i.context=c,o=a):(typeof i.componentDidMount=="function"&&(t.flags|=4194308),o=!1)}else{i=t.stateNode,Cd(e,t),a=t.memoizedProps,c=t.type===t.elementType?a:Ke(t.type,a),i.props=c,d=t.pendingProps,p=i.context,l=n.contextType,typeof l=="object"&&l!==null?l=Ge(l):(l=ze(n)?tn:$e.current,l=jn(t,l));var f=n.getDerivedStateFromProps;(u=typeof f=="function"||typeof i.getSnapshotBeforeUpdate=="function")||typeof i.UNSAFE_componentWillReceiveProps!="function"&&typeof i.componentWillReceiveProps!="function"||(a!==d||p!==l)&&cc(t,i,o,l),Pt=!1,p=t.memoizedState,i.state=p,Qr(t,o,i,r);var v=t.memoizedState;a!==d||p!==v||Re.current||Pt?(typeof f=="function"&&(Fi(t,n,f,o),v=t.memoizedState),(c=Pt||lc(t,n,c,o,p,v,l)||!1)?(u||typeof i.UNSAFE_componentWillUpdate!="function"&&typeof i.componentWillUpdate!="function"||(typeof i.componentWillUpdate=="function"&&i.componentWillUpdate(o,v,l),typeof i.UNSAFE_componentWillUpdate=="function"&&i.UNSAFE_componentWillUpdate(o,v,l)),typeof i.componentDidUpdate=="function"&&(t.flags|=4),typeof i.getSnapshotBeforeUpdate=="function"&&(t.flags|=1024)):(typeof i.componentDidUpdate!="function"||a===e.memoizedProps&&p===e.memoizedState||(t.flags|=4),typeof i.getSnapshotBeforeUpdate!="function"||a===e.memoizedProps&&p===e.memoizedState||(t.flags|=1024),t.memoizedProps=o,t.memoizedState=v),i.props=o,i.state=v,i.context=l,o=c):(typeof i.componentDidUpdate!="function"||a===e.memoizedProps&&p===e.memoizedState||(t.flags|=4),typeof i.getSnapshotBeforeUpdate!="function"||a===e.memoizedProps&&p===e.memoizedState||(t.flags|=1024),o=!1)}return Gi(e,t,n,o,s,r)}function Gi(e,t,n,o,r,s){Xd(e,t);var i=(t.flags&128)!==0;if(!o&&!i)return r&&ec(t,n,!1),ht(e,t,s);o=t.stateNode,mf.current=t;var a=i&&typeof n.getDerivedStateFromError!="function"?null:o.render();return t.flags|=1,e!==null&&i?(t.child=Nn(t,e.child,null,s),t.child=Nn(t,null,a,s)):Ce(e,t,a,s),t.memoizedState=o.state,r&&ec(t,n,!0),t.child}function Zd(e){var t=e.stateNode;t.pendingContext?Jl(e,t.pendingContext,t.pendingContext!==t.context):t.context&&Jl(e,t.context,!1),Wa(e,t.containerInfo)}function hc(e,t,n,o,r){return Tn(),Ta(r),t.flags|=256,Ce(e,t,n,o),t.child}var qi={dehydrated:null,treeContext:null,retryLane:0};function Qi(e){return{baseLanes:e,cachePool:null,transitions:null}}function Jd(e,t,n){var o=t.pendingProps,r=te.current,s=!1,i=(t.flags&128)!==0,a;if((a=i)||(a=e!==null&&e.memoizedState===null?!1:(r&2)!==0),a?(s=!0,t.flags&=-129):(e===null||e.memoizedState!==null)&&(r|=1),Y(te,r&1),e===null)return Bi(t),e=t.memoizedState,e!==null&&(e=e.dehydrated,e!==null)?(t.mode&1?e.data==="$!"?t.lanes=8:t.lanes=1073741824:t.lanes=1,null):(i=o.children,e=o.fallback,s?(o=t.mode,s=t.child,i={mode:"hidden",children:i},!(o&1)&&s!==null?(s.childLanes=0,s.pendingProps=i):s=vs(i,o,0,null),e=en(e,o,n,null),s.return=t,e.return=t,s.sibling=e,t.child=s,t.child.memoizedState=Qi(n),t.memoizedState=qi,e):Xa(t,i));if(r=e.memoizedState,r!==null&&(a=r.dehydrated,a!==null))return gf(e,t,i,o,a,r,n);if(s){s=o.fallback,i=t.mode,r=e.child,a=r.sibling;var l={mode:"hidden",children:o.children};return!(i&1)&&t.child!==r?(o=t.child,o.childLanes=0,o.pendingProps=l,t.deletions=null):(o=jt(r,l),o.subtreeFlags=r.subtreeFlags&14680064),a!==null?s=jt(a,s):(s=en(s,i,n,null),s.flags|=2),s.return=t,o.return=t,o.sibling=s,t.child=o,o=s,s=t.child,i=e.child.memoizedState,i=i===null?Qi(n):{baseLanes:i.baseLanes|n,cachePool:null,transitions:i.transitions},s.memoizedState=i,s.childLanes=e.childLanes&~n,t.memoizedState=qi,o}return s=e.child,e=s.sibling,o=jt(s,{mode:"visible",children:o.children}),!(t.mode&1)&&(o.lanes=n),o.return=t,o.sibling=null,e!==null&&(n=t.deletions,n===null?(t.deletions=[e],t.flags|=16):n.push(e)),t.child=o,t.memoizedState=null,o}function Xa(e,t){return t=vs({mode:"visible",children:t},e.mode,0,null),t.return=e,e.child=t}function ur(e,t,n,o){return o!==null&&Ta(o),Nn(t,e.child,null,n),e=Xa(t,t.pendingProps.children),e.flags|=2,t.memoizedState=null,e}function gf(e,t,n,o,r,s,i){if(n)return t.flags&256?(t.flags&=-257,o=Qs(Error(E(422))),ur(e,t,i,o)):t.memoizedState!==null?(t.child=e.child,t.flags|=128,null):(s=o.fallback,r=t.mode,o=vs({mode:"visible",children:o.children},r,0,null),s=en(s,r,i,null),s.flags|=2,o.return=t,s.return=t,o.sibling=s,t.child=o,t.mode&1&&Nn(t,e.child,null,i),t.child.memoizedState=Qi(i),t.memoizedState=qi,s);if(!(t.mode&1))return ur(e,t,i,null);if(r.data==="$!"){if(o=r.nextSibling&&r.nextSibling.dataset,o)var a=o.dgst;return o=a,s=Error(E(419)),o=Qs(s,o,void 0),ur(e,t,i,o)}if(a=(i&e.childLanes)!==0,Ee||a){if(o=fe,o!==null){switch(i&-i){case 4:r=2;break;case 16:r=8;break;case 64:case 128:case 256:case 512:case 1024:case 2048:case 4096:case 8192:case 16384:case 32768:case 65536:case 131072:case 262144:case 524288:case 1048576:case 2097152:case 4194304:case 8388608:case 16777216:case 33554432:case 67108864:r=32;break;case 536870912:r=268435456;break;default:r=0}r=r&(o.suspendedLanes|i)?0:r,r!==0&&r!==s.retryLane&&(s.retryLane=r,ft(e,r),Je(o,e,r,-1))}return ol(),o=Qs(Error(E(421))),ur(e,t,i,o)}return r.data==="$?"?(t.flags|=128,t.child=e.child,t=If.bind(null,e),r._reactRetry=t,null):(e=s.treeContext,je=zt(r.nextSibling),Te=t,J=!0,Xe=null,e!==null&&(Fe[We++]=ct,Fe[We++]=ut,Fe[We++]=nn,ct=e.id,ut=e.overflow,nn=t),t=Xa(t,o.children),t.flags|=4096,t)}function yc(e,t,n){e.lanes|=t;var o=e.alternate;o!==null&&(o.lanes|=t),Ui(e.return,t,n)}function Ks(e,t,n,o,r){var s=e.memoizedState;s===null?e.memoizedState={isBackwards:t,rendering:null,renderingStartTime:0,last:o,tail:n,tailMode:r}:(s.isBackwards=t,s.rendering=null,s.renderingStartTime=0,s.last=o,s.tail=n,s.tailMode=r)}function ep(e,t,n){var o=t.pendingProps,r=o.revealOrder,s=o.tail;if(Ce(e,t,o.children,n),o=te.current,o&2)o=o&1|2,t.flags|=128;else{if(e!==null&&e.flags&128)e:for(e=t.child;e!==null;){if(e.tag===13)e.memoizedState!==null&&yc(e,n,t);else if(e.tag===19)yc(e,n,t);else if(e.child!==null){e.child.return=e,e=e.child;continue}if(e===t)break e;for(;e.sibling===null;){if(e.return===null||e.return===t)break e;e=e.return}e.sibling.return=e.return,e=e.sibling}o&=1}if(Y(te,o),!(t.mode&1))t.memoizedState=null;else switch(r){case"forwards":for(n=t.child,r=null;n!==null;)e=n.alternate,e!==null&&Kr(e)===null&&(r=n),n=n.sibling;n=r,n===null?(r=t.child,t.child=null):(r=n.sibling,n.sibling=null),Ks(t,!1,r,n,s);break;case"backwards":for(n=null,r=t.child,t.child=null;r!==null;){if(e=r.alternate,e!==null&&Kr(e)===null){t.child=r;break}e=r.sibling,r.sibling=n,n=r,r=e}Ks(t,!0,n,null,s);break;case"together":Ks(t,!1,null,null,void 0);break;default:t.memoizedState=null}return t.child}function _r(e,t){!(t.mode&1)&&e!==null&&(e.alternate=null,t.alternate=null,t.flags|=2)}function ht(e,t,n){if(e!==null&&(t.dependencies=e.dependencies),rn|=t.lanes,!(n&t.childLanes))return null;if(e!==null&&t.child!==e.child)throw Error(E(153));if(t.child!==null){for(e=t.child,n=jt(e,e.pendingProps),t.child=n,n.return=t;e.sibling!==null;)e=e.sibling,n=n.sibling=jt(e,e.pendingProps),n.return=t;n.sibling=null}return t.child}function ff(e,t,n){switch(t.tag){case 3:Zd(t),Tn();break;case 5:Ld(t);break;case 1:ze(t.type)&&Wr(t);break;case 4:Wa(t,t.stateNode.containerInfo);break;case 10:var o=t.type._context,r=t.memoizedProps.value;Y(Gr,o._currentValue),o._currentValue=r;break;case 13:if(o=t.memoizedState,o!==null)return o.dehydrated!==null?(Y(te,te.current&1),t.flags|=128,null):n&t.child.childLanes?Jd(e,t,n):(Y(te,te.current&1),e=ht(e,t,n),e!==null?e.sibling:null);Y(te,te.current&1);break;case 19:if(o=(n&t.childLanes)!==0,e.flags&128){if(o)return ep(e,t,n);t.flags|=128}if(r=t.memoizedState,r!==null&&(r.rendering=null,r.tail=null,r.lastEffect=null),Y(te,te.current),o)break;return null;case 22:case 23:return t.lanes=0,Yd(e,t,n)}return ht(e,t,n)}var tp,Ki,np,op;tp=function(e,t){for(var n=t.child;n!==null;){if(n.tag===5||n.tag===6)e.appendChild(n.stateNode);else if(n.tag!==4&&n.child!==null){n.child.return=n,n=n.child;continue}if(n===t)break;for(;n.sibling===null;){if(n.return===null||n.return===t)return;n=n.return}n.sibling.return=n.return,n=n.sibling}};Ki=function(){};np=function(e,t,n,o){var r=e.memoizedProps;if(r!==o){e=t.stateNode,Xt(it.current);var s=null;switch(n){case"input":r=yi(e,r),o=yi(e,o),s=[];break;case"select":r=oe({},r,{value:void 0}),o=oe({},o,{value:void 0}),s=[];break;case"textarea":r=xi(e,r),o=xi(e,o),s=[];break;default:typeof r.onClick!="function"&&typeof o.onClick=="function"&&(e.onclick=Ur)}Pi(n,o);var i;n=null;for(c in r)if(!o.hasOwnProperty(c)&&r.hasOwnProperty(c)&&r[c]!=null)if(c==="style"){var a=r[c];for(i in a)a.hasOwnProperty(i)&&(n||(n={}),n[i]="")}else c!=="dangerouslySetInnerHTML"&&c!=="children"&&c!=="suppressContentEditableWarning"&&c!=="suppressHydrationWarning"&&c!=="autoFocus"&&($o.hasOwnProperty(c)?s||(s=[]):(s=s||[]).push(c,null));for(c in o){var l=o[c];if(a=r!=null?r[c]:void 0,o.hasOwnProperty(c)&&l!==a&&(l!=null||a!=null))if(c==="style")if(a){for(i in a)!a.hasOwnProperty(i)||l&&l.hasOwnProperty(i)||(n||(n={}),n[i]="");for(i in l)l.hasOwnProperty(i)&&a[i]!==l[i]&&(n||(n={}),n[i]=l[i])}else n||(s||(s=[]),s.push(c,n)),n=l;else c==="dangerouslySetInnerHTML"?(l=l?l.__html:void 0,a=a?a.__html:void 0,l!=null&&a!==l&&(s=s||[]).push(c,l)):c==="children"?typeof l!="string"&&typeof l!="number"||(s=s||[]).push(c,""+l):c!=="suppressContentEditableWarning"&&c!=="suppressHydrationWarning"&&($o.hasOwnProperty(c)?(l!=null&&c==="onScroll"&&X("scroll",e),s||a===l||(s=[])):(s=s||[]).push(c,l))}n&&(s=s||[]).push("style",n);var c=s;(t.updateQueue=c)&&(t.flags|=4)}};op=function(e,t,n,o){n!==o&&(t.flags|=4)};function so(e,t){if(!J)switch(e.tailMode){case"hidden":t=e.tail;for(var n=null;t!==null;)t.alternate!==null&&(n=t),t=t.sibling;n===null?e.tail=null:n.sibling=null;break;case"collapsed":n=e.tail;for(var o=null;n!==null;)n.alternate!==null&&(o=n),n=n.sibling;o===null?t||e.tail===null?e.tail=null:e.tail.sibling=null:o.sibling=null}}function be(e){var t=e.alternate!==null&&e.alternate.child===e.child,n=0,o=0;if(t)for(var r=e.child;r!==null;)n|=r.lanes|r.childLanes,o|=r.subtreeFlags&14680064,o|=r.flags&14680064,r.return=e,r=r.sibling;else for(r=e.child;r!==null;)n|=r.lanes|r.childLanes,o|=r.subtreeFlags,o|=r.flags,r.return=e,r=r.sibling;return e.subtreeFlags|=o,e.childLanes=n,t}function hf(e,t,n){var o=t.pendingProps;switch(ja(t),t.tag){case 2:case 16:case 15:case 0:case 11:case 7:case 8:case 12:case 9:case 14:return be(t),null;case 1:return ze(t.type)&&Fr(),be(t),null;case 3:return o=t.stateNode,An(),Z(Re),Z($e),Ha(),o.pendingContext&&(o.context=o.pendingContext,o.pendingContext=null),(e===null||e.child===null)&&(lr(t)?t.flags|=4:e===null||e.memoizedState.isDehydrated&&!(t.flags&256)||(t.flags|=1024,Xe!==null&&(oa(Xe),Xe=null))),Ki(e,t),be(t),null;case 5:Va(t);var r=Xt(Mo.current);if(n=t.type,e!==null&&t.stateNode!=null)np(e,t,n,o,r),e.ref!==t.ref&&(t.flags|=512,t.flags|=2097152);else{if(!o){if(t.stateNode===null)throw Error(E(166));return be(t),null}if(e=Xt(it.current),lr(t)){o=t.stateNode,n=t.type;var s=t.memoizedProps;switch(o[rt]=t,o[Oo]=s,e=(t.mode&1)!==0,n){case"dialog":X("cancel",o),X("close",o);break;case"iframe":case"object":case"embed":X("load",o);break;case"video":case"audio":for(r=0;r<uo.length;r++)X(uo[r],o);break;case"source":X("error",o);break;case"img":case"image":case"link":X("error",o),X("load",o);break;case"details":X("toggle",o);break;case"input":Ll(o,s),X("invalid",o);break;case"select":o._wrapperState={wasMultiple:!!s.multiple},X("invalid",o);break;case"textarea":kl(o,s),X("invalid",o)}Pi(n,s),r=null;for(var i in s)if(s.hasOwnProperty(i)){var a=s[i];i==="children"?typeof a=="string"?o.textContent!==a&&(s.suppressHydrationWarning!==!0&&ar(o.textContent,a,e),r=["children",a]):typeof a=="number"&&o.textContent!==""+a&&(s.suppressHydrationWarning!==!0&&ar(o.textContent,a,e),r=["children",""+a]):$o.hasOwnProperty(i)&&a!=null&&i==="onScroll"&&X("scroll",o)}switch(n){case"input":Jo(o),Il(o,s,!0);break;case"textarea":Jo(o),_l(o);break;case"select":case"option":break;default:typeof s.onClick=="function"&&(o.onclick=Ur)}o=r,t.updateQueue=o,o!==null&&(t.flags|=4)}else{i=r.nodeType===9?r:r.ownerDocument,e==="http://www.w3.org/1999/xhtml"&&(e=Ru(n)),e==="http://www.w3.org/1999/xhtml"?n==="script"?(e=i.createElement("div"),e.innerHTML="<script><\/script>",e=e.removeChild(e.firstChild)):typeof o.is=="string"?e=i.createElement(n,{is:o.is}):(e=i.createElement(n),n==="select"&&(i=e,o.multiple?i.multiple=!0:o.size&&(i.size=o.size))):e=i.createElementNS(e,n),e[rt]=t,e[Oo]=o,tp(e,t,!1,!1),t.stateNode=e;e:{switch(i=$i(n,o),n){case"dialog":X("cancel",e),X("close",e),r=o;break;case"iframe":case"object":case"embed":X("load",e),r=o;break;case"video":case"audio":for(r=0;r<uo.length;r++)X(uo[r],e);r=o;break;case"source":X("error",e),r=o;break;case"img":case"image":case"link":X("error",e),X("load",e),r=o;break;case"details":X("toggle",e),r=o;break;case"input":Ll(e,o),r=yi(e,o),X("invalid",e);break;case"option":r=o;break;case"select":e._wrapperState={wasMultiple:!!o.multiple},r=oe({},o,{value:void 0}),X("invalid",e);break;case"textarea":kl(e,o),r=xi(e,o),X("invalid",e);break;default:r=o}Pi(n,r),a=r;for(s in a)if(a.hasOwnProperty(s)){var l=a[s];s==="style"?Du(e,l):s==="dangerouslySetInnerHTML"?(l=l?l.__html:void 0,l!=null&&zu(e,l)):s==="children"?typeof l=="string"?(n!=="textarea"||l!=="")&&So(e,l):typeof l=="number"&&So(e,""+l):s!=="suppressContentEditableWarning"&&s!=="suppressHydrationWarning"&&s!=="autoFocus"&&($o.hasOwnProperty(s)?l!=null&&s==="onScroll"&&X("scroll",e):l!=null&&ba(e,s,l,i))}switch(n){case"input":Jo(e),Il(e,o,!1);break;case"textarea":Jo(e),_l(e);break;case"option":o.value!=null&&e.setAttribute("value",""+Nt(o.value));break;case"select":e.multiple=!!o.multiple,s=o.value,s!=null?In(e,!!o.multiple,s,!1):o.defaultValue!=null&&In(e,!!o.multiple,o.defaultValue,!0);break;default:typeof r.onClick=="function"&&(e.onclick=Ur)}switch(n){case"button":case"input":case"select":case"textarea":o=!!o.autoFocus;break e;case"img":o=!0;break e;default:o=!1}}o&&(t.flags|=4)}t.ref!==null&&(t.flags|=512,t.flags|=2097152)}return be(t),null;case 6:if(e&&t.stateNode!=null)op(e,t,e.memoizedProps,o);else{if(typeof o!="string"&&t.stateNode===null)throw Error(E(166));if(n=Xt(Mo.current),Xt(it.current),lr(t)){if(o=t.stateNode,n=t.memoizedProps,o[rt]=t,(s=o.nodeValue!==n)&&(e=Te,e!==null))switch(e.tag){case 3:ar(o.nodeValue,n,(e.mode&1)!==0);break;case 5:e.memoizedProps.suppressHydrationWarning!==!0&&ar(o.nodeValue,n,(e.mode&1)!==0)}s&&(t.flags|=4)}else o=(n.nodeType===9?n:n.ownerDocument).createTextNode(o),o[rt]=t,t.stateNode=o}return be(t),null;case 13:if(Z(te),o=t.memoizedState,e===null||e.memoizedState!==null&&e.memoizedState.dehydrated!==null){if(J&&je!==null&&t.mode&1&&!(t.flags&128))bd(),Tn(),t.flags|=98560,s=!1;else if(s=lr(t),o!==null&&o.dehydrated!==null){if(e===null){if(!s)throw Error(E(318));if(s=t.memoizedState,s=s!==null?s.dehydrated:null,!s)throw Error(E(317));s[rt]=t}else Tn(),!(t.flags&128)&&(t.memoizedState=null),t.flags|=4;be(t),s=!1}else Xe!==null&&(oa(Xe),Xe=null),s=!0;if(!s)return t.flags&65536?t:null}return t.flags&128?(t.lanes=n,t):(o=o!==null,o!==(e!==null&&e.memoizedState!==null)&&o&&(t.child.flags|=8192,t.mode&1&&(e===null||te.current&1?de===0&&(de=3):ol())),t.updateQueue!==null&&(t.flags|=4),be(t),null);case 4:return An(),Ki(e,t),e===null&&Ro(t.stateNode.containerInfo),be(t),null;case 10:return Ba(t.type._context),be(t),null;case 17:return ze(t.type)&&Fr(),be(t),null;case 19:if(Z(te),s=t.memoizedState,s===null)return be(t),null;if(o=(t.flags&128)!==0,i=s.rendering,i===null)if(o)so(s,!1);else{if(de!==0||e!==null&&e.flags&128)for(e=t.child;e!==null;){if(i=Kr(e),i!==null){for(t.flags|=128,so(s,!1),o=i.updateQueue,o!==null&&(t.updateQueue=o,t.flags|=4),t.subtreeFlags=0,o=n,n=t.child;n!==null;)s=n,e=o,s.flags&=14680066,i=s.alternate,i===null?(s.childLanes=0,s.lanes=e,s.child=null,s.subtreeFlags=0,s.memoizedProps=null,s.memoizedState=null,s.updateQueue=null,s.dependencies=null,s.stateNode=null):(s.childLanes=i.childLanes,s.lanes=i.lanes,s.child=i.child,s.subtreeFlags=0,s.deletions=null,s.memoizedProps=i.memoizedProps,s.memoizedState=i.memoizedState,s.updateQueue=i.updateQueue,s.type=i.type,e=i.dependencies,s.dependencies=e===null?null:{lanes:e.lanes,firstContext:e.firstContext}),n=n.sibling;return Y(te,te.current&1|2),t.child}e=e.sibling}s.tail!==null&&ie()>Un&&(t.flags|=128,o=!0,so(s,!1),t.lanes=4194304)}else{if(!o)if(e=Kr(i),e!==null){if(t.flags|=128,o=!0,n=e.updateQueue,n!==null&&(t.updateQueue=n,t.flags|=4),so(s,!0),s.tail===null&&s.tailMode==="hidden"&&!i.alternate&&!J)return be(t),null}else 2*ie()-s.renderingStartTime>Un&&n!==1073741824&&(t.flags|=128,o=!0,so(s,!1),t.lanes=4194304);s.isBackwards?(i.sibling=t.child,t.child=i):(n=s.last,n!==null?n.sibling=i:t.child=i,s.last=i)}return s.tail!==null?(t=s.tail,s.rendering=t,s.tail=t.sibling,s.renderingStartTime=ie(),t.sibling=null,n=te.current,Y(te,o?n&1|2:n&1),t):(be(t),null);case 22:case 23:return nl(),o=t.memoizedState!==null,e!==null&&e.memoizedState!==null!==o&&(t.flags|=8192),o&&t.mode&1?Me&1073741824&&(be(t),t.subtreeFlags&6&&(t.flags|=8192)):be(t),null;case 24:return null;case 25:return null}throw Error(E(156,t.tag))}function yf(e,t){switch(ja(t),t.tag){case 1:return ze(t.type)&&Fr(),e=t.flags,e&65536?(t.flags=e&-65537|128,t):null;case 3:return An(),Z(Re),Z($e),Ha(),e=t.flags,e&65536&&!(e&128)?(t.flags=e&-65537|128,t):null;case 5:return Va(t),null;case 13:if(Z(te),e=t.memoizedState,e!==null&&e.dehydrated!==null){if(t.alternate===null)throw Error(E(340));Tn()}return e=t.flags,e&65536?(t.flags=e&-65537|128,t):null;case 19:return Z(te),null;case 4:return An(),null;case 10:return Ba(t.type._context),null;case 22:case 23:return nl(),null;case 24:return null;default:return null}}var dr=!1,Pe=!1,vf=typeof WeakSet=="function"?WeakSet:Set,D=null;function Cn(e,t){var n=e.ref;if(n!==null)if(typeof n=="function")try{n(null)}catch(o){se(e,t,o)}else n.current=null}function Yi(e,t,n){try{n()}catch(o){se(e,t,o)}}var vc=!1;function wf(e,t){if(Oi=Nr,e=ld(),Da(e)){if("selectionStart"in e)var n={start:e.selectionStart,end:e.selectionEnd};else e:{n=(n=e.ownerDocument)&&n.defaultView||window;var o=n.getSelection&&n.getSelection();if(o&&o.rangeCount!==0){n=o.anchorNode;var r=o.anchorOffset,s=o.focusNode;o=o.focusOffset;try{n.nodeType,s.nodeType}catch{n=null;break e}var i=0,a=-1,l=-1,c=0,u=0,d=e,p=null;t:for(;;){for(var f;d!==n||r!==0&&d.nodeType!==3||(a=i+r),d!==s||o!==0&&d.nodeType!==3||(l=i+o),d.nodeType===3&&(i+=d.nodeValue.length),(f=d.firstChild)!==null;)p=d,d=f;for(;;){if(d===e)break t;if(p===n&&++c===r&&(a=i),p===s&&++u===o&&(l=i),(f=d.nextSibling)!==null)break;d=p,p=d.parentNode}d=f}n=a===-1||l===-1?null:{start:a,end:l}}else n=null}n=n||{start:0,end:0}}else n=null;for(Di={focusedElem:e,selectionRange:n},Nr=!1,D=t;D!==null;)if(t=D,e=t.child,(t.subtreeFlags&1028)!==0&&e!==null)e.return=t,D=e;else for(;D!==null;){t=D;try{var v=t.alternate;if(t.flags&1024)switch(t.tag){case 0:case 11:case 15:break;case 1:if(v!==null){var w=v.memoizedProps,b=v.memoizedState,h=t.stateNode,g=h.getSnapshotBeforeUpdate(t.elementType===t.type?w:Ke(t.type,w),b);h.__reactInternalSnapshotBeforeUpdate=g}break;case 3:var y=t.stateNode.containerInfo;y.nodeType===1?y.textContent="":y.nodeType===9&&y.documentElement&&y.removeChild(y.documentElement);break;case 5:case 6:case 4:case 17:break;default:throw Error(E(163))}}catch(P){se(t,t.return,P)}if(e=t.sibling,e!==null){e.return=t.return,D=e;break}D=t.return}return v=vc,vc=!1,v}function xo(e,t,n){var o=t.updateQueue;if(o=o!==null?o.lastEffect:null,o!==null){var r=o=o.next;do{if((r.tag&e)===e){var s=r.destroy;r.destroy=void 0,s!==void 0&&Yi(t,n,s)}r=r.next}while(r!==o)}}function hs(e,t){if(t=t.updateQueue,t=t!==null?t.lastEffect:null,t!==null){var n=t=t.next;do{if((n.tag&e)===e){var o=n.create;n.destroy=o()}n=n.next}while(n!==t)}}function Xi(e){var t=e.ref;if(t!==null){var n=e.stateNode;switch(e.tag){case 5:e=n;break;default:e=n}typeof t=="function"?t(e):t.current=e}}function rp(e){var t=e.alternate;t!==null&&(e.alternate=null,rp(t)),e.child=null,e.deletions=null,e.sibling=null,e.tag===5&&(t=e.stateNode,t!==null&&(delete t[rt],delete t[Oo],delete t[Ti],delete t[ef],delete t[tf])),e.stateNode=null,e.return=null,e.dependencies=null,e.memoizedProps=null,e.memoizedState=null,e.pendingProps=null,e.stateNode=null,e.updateQueue=null}function sp(e){return e.tag===5||e.tag===3||e.tag===4}function wc(e){e:for(;;){for(;e.sibling===null;){if(e.return===null||sp(e.return))return null;e=e.return}for(e.sibling.return=e.return,e=e.sibling;e.tag!==5&&e.tag!==6&&e.tag!==18;){if(e.flags&2||e.child===null||e.tag===4)continue e;e.child.return=e,e=e.child}if(!(e.flags&2))return e.stateNode}}function Zi(e,t,n){var o=e.tag;if(o===5||o===6)e=e.stateNode,t?n.nodeType===8?n.parentNode.insertBefore(e,t):n.insertBefore(e,t):(n.nodeType===8?(t=n.parentNode,t.insertBefore(e,n)):(t=n,t.appendChild(e)),n=n._reactRootContainer,n!=null||t.onclick!==null||(t.onclick=Ur));else if(o!==4&&(e=e.child,e!==null))for(Zi(e,t,n),e=e.sibling;e!==null;)Zi(e,t,n),e=e.sibling}function Ji(e,t,n){var o=e.tag;if(o===5||o===6)e=e.stateNode,t?n.insertBefore(e,t):n.appendChild(e);else if(o!==4&&(e=e.child,e!==null))for(Ji(e,t,n),e=e.sibling;e!==null;)Ji(e,t,n),e=e.sibling}var he=null,Ye=!1;function wt(e,t,n){for(n=n.child;n!==null;)ip(e,t,n),n=n.sibling}function ip(e,t,n){if(st&&typeof st.onCommitFiberUnmount=="function")try{st.onCommitFiberUnmount(ls,n)}catch{}switch(n.tag){case 5:Pe||Cn(n,t);case 6:var o=he,r=Ye;he=null,wt(e,t,n),he=o,Ye=r,he!==null&&(Ye?(e=he,n=n.stateNode,e.nodeType===8?e.parentNode.removeChild(n):e.removeChild(n)):he.removeChild(n.stateNode));break;case 18:he!==null&&(Ye?(e=he,n=n.stateNode,e.nodeType===8?Fs(e.parentNode,n):e.nodeType===1&&Fs(e,n),ko(e)):Fs(he,n.stateNode));break;case 4:o=he,r=Ye,he=n.stateNode.containerInfo,Ye=!0,wt(e,t,n),he=o,Ye=r;break;case 0:case 11:case 14:case 15:if(!Pe&&(o=n.updateQueue,o!==null&&(o=o.lastEffect,o!==null))){r=o=o.next;do{var s=r,i=s.destroy;s=s.tag,i!==void 0&&(s&2||s&4)&&Yi(n,t,i),r=r.next}while(r!==o)}wt(e,t,n);break;case 1:if(!Pe&&(Cn(n,t),o=n.stateNode,typeof o.componentWillUnmount=="function"))try{o.props=n.memoizedProps,o.state=n.memoizedState,o.componentWillUnmount()}catch(a){se(n,t,a)}wt(e,t,n);break;case 21:wt(e,t,n);break;case 22:n.mode&1?(Pe=(o=Pe)||n.memoizedState!==null,wt(e,t,n),Pe=o):wt(e,t,n);break;default:wt(e,t,n)}}function xc(e){var t=e.updateQueue;if(t!==null){e.updateQueue=null;var n=e.stateNode;n===null&&(n=e.stateNode=new vf),t.forEach(function(o){var r=kf.bind(null,e,o);n.has(o)||(n.add(o),o.then(r,r))})}}function Qe(e,t){var n=t.deletions;if(n!==null)for(var o=0;o<n.length;o++){var r=n[o];try{var s=e,i=t,a=i;e:for(;a!==null;){switch(a.tag){case 5:he=a.stateNode,Ye=!1;break e;case 3:he=a.stateNode.containerInfo,Ye=!0;break e;case 4:he=a.stateNode.containerInfo,Ye=!0;break e}a=a.return}if(he===null)throw Error(E(160));ip(s,i,r),he=null,Ye=!1;var l=r.alternate;l!==null&&(l.return=null),r.return=null}catch(c){se(r,t,c)}}if(t.subtreeFlags&12854)for(t=t.child;t!==null;)ap(t,e),t=t.sibling}function ap(e,t){var n=e.alternate,o=e.flags;switch(e.tag){case 0:case 11:case 14:case 15:if(Qe(t,e),tt(e),o&4){try{xo(3,e,e.return),hs(3,e)}catch(w){se(e,e.return,w)}try{xo(5,e,e.return)}catch(w){se(e,e.return,w)}}break;case 1:Qe(t,e),tt(e),o&512&&n!==null&&Cn(n,n.return);break;case 5:if(Qe(t,e),tt(e),o&512&&n!==null&&Cn(n,n.return),e.flags&32){var r=e.stateNode;try{So(r,"")}catch(w){se(e,e.return,w)}}if(o&4&&(r=e.stateNode,r!=null)){var s=e.memoizedProps,i=n!==null?n.memoizedProps:s,a=e.type,l=e.updateQueue;if(e.updateQueue=null,l!==null)try{a==="input"&&s.type==="radio"&&s.name!=null&&_u(r,s),$i(a,i);var c=$i(a,s);for(i=0;i<l.length;i+=2){var u=l[i],d=l[i+1];u==="style"?Du(r,d):u==="dangerouslySetInnerHTML"?zu(r,d):u==="children"?So(r,d):ba(r,u,d,c)}switch(a){case"input":vi(r,s);break;case"textarea":Eu(r,s);break;case"select":var p=r._wrapperState.wasMultiple;r._wrapperState.wasMultiple=!!s.multiple;var f=s.value;f!=null?In(r,!!s.multiple,f,!1):p!==!!s.multiple&&(s.defaultValue!=null?In(r,!!s.multiple,s.defaultValue,!0):In(r,!!s.multiple,s.multiple?[]:"",!1))}r[Oo]=s}catch(w){se(e,e.return,w)}}break;case 6:if(Qe(t,e),tt(e),o&4){if(e.stateNode===null)throw Error(E(162));r=e.stateNode,s=e.memoizedProps;try{r.nodeValue=s}catch(w){se(e,e.return,w)}}break;case 3:if(Qe(t,e),tt(e),o&4&&n!==null&&n.memoizedState.isDehydrated)try{ko(t.containerInfo)}catch(w){se(e,e.return,w)}break;case 4:Qe(t,e),tt(e);break;case 13:Qe(t,e),tt(e),r=e.child,r.flags&8192&&(s=r.memoizedState!==null,r.stateNode.isHidden=s,!s||r.alternate!==null&&r.alternate.memoizedState!==null||(el=ie())),o&4&&xc(e);break;case 22:if(u=n!==null&&n.memoizedState!==null,e.mode&1?(Pe=(c=Pe)||u,Qe(t,e),Pe=c):Qe(t,e),tt(e),o&8192){if(c=e.memoizedState!==null,(e.stateNode.isHidden=c)&&!u&&e.mode&1)for(D=e,u=e.child;u!==null;){for(d=D=u;D!==null;){switch(p=D,f=p.child,p.tag){case 0:case 11:case 14:case 15:xo(4,p,p.return);break;case 1:Cn(p,p.return);var v=p.stateNode;if(typeof v.componentWillUnmount=="function"){o=p,n=p.return;try{t=o,v.props=t.memoizedProps,v.state=t.memoizedState,v.componentWillUnmount()}catch(w){se(o,n,w)}}break;case 5:Cn(p,p.return);break;case 22:if(p.memoizedState!==null){Pc(d);continue}}f!==null?(f.return=p,D=f):Pc(d)}u=u.sibling}e:for(u=null,d=e;;){if(d.tag===5){if(u===null){u=d;try{r=d.stateNode,c?(s=r.style,typeof s.setProperty=="function"?s.setProperty("display","none","important"):s.display="none"):(a=d.stateNode,l=d.memoizedProps.style,i=l!=null&&l.hasOwnProperty("display")?l.display:null,a.style.display=Ou("display",i))}catch(w){se(e,e.return,w)}}}else if(d.tag===6){if(u===null)try{d.stateNode.nodeValue=c?"":d.memoizedProps}catch(w){se(e,e.return,w)}}else if((d.tag!==22&&d.tag!==23||d.memoizedState===null||d===e)&&d.child!==null){d.child.return=d,d=d.child;continue}if(d===e)break e;for(;d.sibling===null;){if(d.return===null||d.return===e)break e;u===d&&(u=null),d=d.return}u===d&&(u=null),d.sibling.return=d.return,d=d.sibling}}break;case 19:Qe(t,e),tt(e),o&4&&xc(e);break;case 21:break;default:Qe(t,e),tt(e)}}function tt(e){var t=e.flags;if(t&2){try{e:{for(var n=e.return;n!==null;){if(sp(n)){var o=n;break e}n=n.return}throw Error(E(160))}switch(o.tag){case 5:var r=o.stateNode;o.flags&32&&(So(r,""),o.flags&=-33);var s=wc(e);Ji(e,s,r);break;case 3:case 4:var i=o.stateNode.containerInfo,a=wc(e);Zi(e,a,i);break;default:throw Error(E(161))}}catch(l){se(e,e.return,l)}e.flags&=-3}t&4096&&(e.flags&=-4097)}function xf(e,t,n){D=e,lp(e)}function lp(e,t,n){for(var o=(e.mode&1)!==0;D!==null;){var r=D,s=r.child;if(r.tag===22&&o){var i=r.memoizedState!==null||dr;if(!i){var a=r.alternate,l=a!==null&&a.memoizedState!==null||Pe;a=dr;var c=Pe;if(dr=i,(Pe=l)&&!c)for(D=r;D!==null;)i=D,l=i.child,i.tag===22&&i.memoizedState!==null?$c(r):l!==null?(l.return=i,D=l):$c(r);for(;s!==null;)D=s,lp(s),s=s.sibling;D=r,dr=a,Pe=c}bc(e)}else r.subtreeFlags&8772&&s!==null?(s.return=r,D=s):bc(e)}}function bc(e){for(;D!==null;){var t=D;if(t.flags&8772){var n=t.alternate;try{if(t.flags&8772)switch(t.tag){case 0:case 11:case 15:Pe||hs(5,t);break;case 1:var o=t.stateNode;if(t.flags&4&&!Pe)if(n===null)o.componentDidMount();else{var r=t.elementType===t.type?n.memoizedProps:Ke(t.type,n.memoizedProps);o.componentDidUpdate(r,n.memoizedState,o.__reactInternalSnapshotBeforeUpdate)}var s=t.updateQueue;s!==null&&sc(t,s,o);break;case 3:var i=t.updateQueue;if(i!==null){if(n=null,t.child!==null)switch(t.child.tag){case 5:n=t.child.stateNode;break;case 1:n=t.child.stateNode}sc(t,i,n)}break;case 5:var a=t.stateNode;if(n===null&&t.flags&4){n=a;var l=t.memoizedProps;switch(t.type){case"button":case"input":case"select":case"textarea":l.autoFocus&&n.focus();break;case"img":l.src&&(n.src=l.src)}}break;case 6:break;case 4:break;case 12:break;case 13:if(t.memoizedState===null){var c=t.alternate;if(c!==null){var u=c.memoizedState;if(u!==null){var d=u.dehydrated;d!==null&&ko(d)}}}break;case 19:case 17:case 21:case 22:case 23:case 25:break;default:throw Error(E(163))}Pe||t.flags&512&&Xi(t)}catch(p){se(t,t.return,p)}}if(t===e){D=null;break}if(n=t.sibling,n!==null){n.return=t.return,D=n;break}D=t.return}}function Pc(e){for(;D!==null;){var t=D;if(t===e){D=null;break}var n=t.sibling;if(n!==null){n.return=t.return,D=n;break}D=t.return}}function $c(e){for(;D!==null;){var t=D;try{switch(t.tag){case 0:case 11:case 15:var n=t.return;try{hs(4,t)}catch(l){se(t,n,l)}break;case 1:var o=t.stateNode;if(typeof o.componentDidMount=="function"){var r=t.return;try{o.componentDidMount()}catch(l){se(t,r,l)}}var s=t.return;try{Xi(t)}catch(l){se(t,s,l)}break;case 5:var i=t.return;try{Xi(t)}catch(l){se(t,i,l)}}}catch(l){se(t,t.return,l)}if(t===e){D=null;break}var a=t.sibling;if(a!==null){a.return=t.return,D=a;break}D=t.return}}var bf=Math.ceil,Zr=yt.ReactCurrentDispatcher,Za=yt.ReactCurrentOwner,He=yt.ReactCurrentBatchConfig,F=0,fe=null,ce=null,ye=0,Me=0,Ln=Ut(0),de=0,Ao=null,rn=0,ys=0,Ja=0,bo=null,_e=null,el=0,Un=1/0,at=null,Jr=!1,ea=null,Dt=null,pr=!1,Lt=null,es=0,Po=0,ta=null,Er=-1,Rr=0;function Le(){return F&6?ie():Er!==-1?Er:Er=ie()}function Mt(e){return e.mode&1?F&2&&ye!==0?ye&-ye:of.transition!==null?(Rr===0&&(Rr=Gu()),Rr):(e=Q,e!==0||(e=window.event,e=e===void 0?16:Ju(e.type)),e):1}function Je(e,t,n,o){if(50<Po)throw Po=0,ta=null,Error(E(185));Vo(e,n,o),(!(F&2)||e!==fe)&&(e===fe&&(!(F&2)&&(ys|=n),de===4&&St(e,ye)),Oe(e,o),n===1&&F===0&&!(t.mode&1)&&(Un=ie()+500,ms&&Ft()))}function Oe(e,t){var n=e.callbackNode;og(e,t);var o=Tr(e,e===fe?ye:0);if(o===0)n!==null&&zl(n),e.callbackNode=null,e.callbackPriority=0;else if(t=o&-o,e.callbackPriority!==t){if(n!=null&&zl(n),t===1)e.tag===0?nf(Sc.bind(null,e)):vd(Sc.bind(null,e)),Zg(function(){!(F&6)&&Ft()}),n=null;else{switch(qu(o)){case 1:n=La;break;case 4:n=Vu;break;case 16:n=jr;break;case 536870912:n=Hu;break;default:n=jr}n=hp(n,cp.bind(null,e))}e.callbackPriority=t,e.callbackNode=n}}function cp(e,t){if(Er=-1,Rr=0,F&6)throw Error(E(327));var n=e.callbackNode;if(zn()&&e.callbackNode!==n)return null;var o=Tr(e,e===fe?ye:0);if(o===0)return null;if(o&30||o&e.expiredLanes||t)t=ts(e,o);else{t=o;var r=F;F|=2;var s=dp();(fe!==e||ye!==t)&&(at=null,Un=ie()+500,Jt(e,t));do try{Sf();break}catch(a){up(e,a)}while(!0);Aa(),Zr.current=s,F=r,ce!==null?t=0:(fe=null,ye=0,t=de)}if(t!==0){if(t===2&&(r=ki(e),r!==0&&(o=r,t=na(e,r))),t===1)throw n=Ao,Jt(e,0),St(e,o),Oe(e,ie()),n;if(t===6)St(e,o);else{if(r=e.current.alternate,!(o&30)&&!Pf(r)&&(t=ts(e,o),t===2&&(s=ki(e),s!==0&&(o=s,t=na(e,s))),t===1))throw n=Ao,Jt(e,0),St(e,o),Oe(e,ie()),n;switch(e.finishedWork=r,e.finishedLanes=o,t){case 0:case 1:throw Error(E(345));case 2:Gt(e,_e,at);break;case 3:if(St(e,o),(o&130023424)===o&&(t=el+500-ie(),10<t)){if(Tr(e,0)!==0)break;if(r=e.suspendedLanes,(r&o)!==o){Le(),e.pingedLanes|=e.suspendedLanes&r;break}e.timeoutHandle=ji(Gt.bind(null,e,_e,at),t);break}Gt(e,_e,at);break;case 4:if(St(e,o),(o&4194240)===o)break;for(t=e.eventTimes,r=-1;0<o;){var i=31-Ze(o);s=1<<i,i=t[i],i>r&&(r=i),o&=~s}if(o=r,o=ie()-o,o=(120>o?120:480>o?480:1080>o?1080:1920>o?1920:3e3>o?3e3:4320>o?4320:1960*bf(o/1960))-o,10<o){e.timeoutHandle=ji(Gt.bind(null,e,_e,at),o);break}Gt(e,_e,at);break;case 5:Gt(e,_e,at);break;default:throw Error(E(329))}}}return Oe(e,ie()),e.callbackNode===n?cp.bind(null,e):null}function na(e,t){var n=bo;return e.current.memoizedState.isDehydrated&&(Jt(e,t).flags|=256),e=ts(e,t),e!==2&&(t=_e,_e=n,t!==null&&oa(t)),e}function oa(e){_e===null?_e=e:_e.push.apply(_e,e)}function Pf(e){for(var t=e;;){if(t.flags&16384){var n=t.updateQueue;if(n!==null&&(n=n.stores,n!==null))for(var o=0;o<n.length;o++){var r=n[o],s=r.getSnapshot;r=r.value;try{if(!et(s(),r))return!1}catch{return!1}}}if(n=t.child,t.subtreeFlags&16384&&n!==null)n.return=t,t=n;else{if(t===e)break;for(;t.sibling===null;){if(t.return===null||t.return===e)return!0;t=t.return}t.sibling.return=t.return,t=t.sibling}}return!0}function St(e,t){for(t&=~Ja,t&=~ys,e.suspendedLanes|=t,e.pingedLanes&=~t,e=e.expirationTimes;0<t;){var n=31-Ze(t),o=1<<n;e[n]=-1,t&=~o}}function Sc(e){if(F&6)throw Error(E(327));zn();var t=Tr(e,0);if(!(t&1))return Oe(e,ie()),null;var n=ts(e,t);if(e.tag!==0&&n===2){var o=ki(e);o!==0&&(t=o,n=na(e,o))}if(n===1)throw n=Ao,Jt(e,0),St(e,t),Oe(e,ie()),n;if(n===6)throw Error(E(345));return e.finishedWork=e.current.alternate,e.finishedLanes=t,Gt(e,_e,at),Oe(e,ie()),null}function tl(e,t){var n=F;F|=1;try{return e(t)}finally{F=n,F===0&&(Un=ie()+500,ms&&Ft())}}function sn(e){Lt!==null&&Lt.tag===0&&!(F&6)&&zn();var t=F;F|=1;var n=He.transition,o=Q;try{if(He.transition=null,Q=1,e)return e()}finally{Q=o,He.transition=n,F=t,!(F&6)&&Ft()}}function nl(){Me=Ln.current,Z(Ln)}function Jt(e,t){e.finishedWork=null,e.finishedLanes=0;var n=e.timeoutHandle;if(n!==-1&&(e.timeoutHandle=-1,Xg(n)),ce!==null)for(n=ce.return;n!==null;){var o=n;switch(ja(o),o.tag){case 1:o=o.type.childContextTypes,o!=null&&Fr();break;case 3:An(),Z(Re),Z($e),Ha();break;case 5:Va(o);break;case 4:An();break;case 13:Z(te);break;case 19:Z(te);break;case 10:Ba(o.type._context);break;case 22:case 23:nl()}n=n.return}if(fe=e,ce=e=jt(e.current,null),ye=Me=t,de=0,Ao=null,Ja=ys=rn=0,_e=bo=null,Yt!==null){for(t=0;t<Yt.length;t++)if(n=Yt[t],o=n.interleaved,o!==null){n.interleaved=null;var r=o.next,s=n.pending;if(s!==null){var i=s.next;s.next=r,o.next=i}n.pending=o}Yt=null}return e}function up(e,t){do{var n=ce;try{if(Aa(),Ir.current=Xr,Yr){for(var o=ne.memoizedState;o!==null;){var r=o.queue;r!==null&&(r.pending=null),o=o.next}Yr=!1}if(on=0,ge=ue=ne=null,wo=!1,jo=0,Za.current=null,n===null||n.return===null){de=1,Ao=t,ce=null;break}e:{var s=e,i=n.return,a=n,l=t;if(t=ye,a.flags|=32768,l!==null&&typeof l=="object"&&typeof l.then=="function"){var c=l,u=a,d=u.tag;if(!(u.mode&1)&&(d===0||d===11||d===15)){var p=u.alternate;p?(u.updateQueue=p.updateQueue,u.memoizedState=p.memoizedState,u.lanes=p.lanes):(u.updateQueue=null,u.memoizedState=null)}var f=dc(i);if(f!==null){f.flags&=-257,pc(f,i,a,s,t),f.mode&1&&uc(s,c,t),t=f,l=c;var v=t.updateQueue;if(v===null){var w=new Set;w.add(l),t.updateQueue=w}else v.add(l);break e}else{if(!(t&1)){uc(s,c,t),ol();break e}l=Error(E(426))}}else if(J&&a.mode&1){var b=dc(i);if(b!==null){!(b.flags&65536)&&(b.flags|=256),pc(b,i,a,s,t),Ta(Bn(l,a));break e}}s=l=Bn(l,a),de!==4&&(de=2),bo===null?bo=[s]:bo.push(s),s=i;do{switch(s.tag){case 3:s.flags|=65536,t&=-t,s.lanes|=t;var h=qd(s,l,t);rc(s,h);break e;case 1:a=l;var g=s.type,y=s.stateNode;if(!(s.flags&128)&&(typeof g.getDerivedStateFromError=="function"||y!==null&&typeof y.componentDidCatch=="function"&&(Dt===null||!Dt.has(y)))){s.flags|=65536,t&=-t,s.lanes|=t;var P=Qd(s,a,t);rc(s,P);break e}}s=s.return}while(s!==null)}mp(n)}catch($){t=$,ce===n&&n!==null&&(ce=n=n.return);continue}break}while(!0)}function dp(){var e=Zr.current;return Zr.current=Xr,e===null?Xr:e}function ol(){(de===0||de===3||de===2)&&(de=4),fe===null||!(rn&268435455)&&!(ys&268435455)||St(fe,ye)}function ts(e,t){var n=F;F|=2;var o=dp();(fe!==e||ye!==t)&&(at=null,Jt(e,t));do try{$f();break}catch(r){up(e,r)}while(!0);if(Aa(),F=n,Zr.current=o,ce!==null)throw Error(E(261));return fe=null,ye=0,de}function $f(){for(;ce!==null;)pp(ce)}function Sf(){for(;ce!==null&&!Qm();)pp(ce)}function pp(e){var t=fp(e.alternate,e,Me);e.memoizedProps=e.pendingProps,t===null?mp(e):ce=t,Za.current=null}function mp(e){var t=e;do{var n=t.alternate;if(e=t.return,t.flags&32768){if(n=yf(n,t),n!==null){n.flags&=32767,ce=n;return}if(e!==null)e.flags|=32768,e.subtreeFlags=0,e.deletions=null;else{de=6,ce=null;return}}else if(n=hf(n,t,Me),n!==null){ce=n;return}if(t=t.sibling,t!==null){ce=t;return}ce=t=e}while(t!==null);de===0&&(de=5)}function Gt(e,t,n){var o=Q,r=He.transition;try{He.transition=null,Q=1,Cf(e,t,n,o)}finally{He.transition=r,Q=o}return null}function Cf(e,t,n,o){do zn();while(Lt!==null);if(F&6)throw Error(E(327));n=e.finishedWork;var r=e.finishedLanes;if(n===null)return null;if(e.finishedWork=null,e.finishedLanes=0,n===e.current)throw Error(E(177));e.callbackNode=null,e.callbackPriority=0;var s=n.lanes|n.childLanes;if(rg(e,s),e===fe&&(ce=fe=null,ye=0),!(n.subtreeFlags&2064)&&!(n.flags&2064)||pr||(pr=!0,hp(jr,function(){return zn(),null})),s=(n.flags&15990)!==0,n.subtreeFlags&15990||s){s=He.transition,He.transition=null;var i=Q;Q=1;var a=F;F|=4,Za.current=null,wf(e,n),ap(n,e),Vg(Di),Nr=!!Oi,Di=Oi=null,e.current=n,xf(n),Km(),F=a,Q=i,He.transition=s}else e.current=n;if(pr&&(pr=!1,Lt=e,es=r),s=e.pendingLanes,s===0&&(Dt=null),Zm(n.stateNode),Oe(e,ie()),t!==null)for(o=e.onRecoverableError,n=0;n<t.length;n++)r=t[n],o(r.value,{componentStack:r.stack,digest:r.digest});if(Jr)throw Jr=!1,e=ea,ea=null,e;return es&1&&e.tag!==0&&zn(),s=e.pendingLanes,s&1?e===ta?Po++:(Po=0,ta=e):Po=0,Ft(),null}function zn(){if(Lt!==null){var e=qu(es),t=He.transition,n=Q;try{if(He.transition=null,Q=16>e?16:e,Lt===null)var o=!1;else{if(e=Lt,Lt=null,es=0,F&6)throw Error(E(331));var r=F;for(F|=4,D=e.current;D!==null;){var s=D,i=s.child;if(D.flags&16){var a=s.deletions;if(a!==null){for(var l=0;l<a.length;l++){var c=a[l];for(D=c;D!==null;){var u=D;switch(u.tag){case 0:case 11:case 15:xo(8,u,s)}var d=u.child;if(d!==null)d.return=u,D=d;else for(;D!==null;){u=D;var p=u.sibling,f=u.return;if(rp(u),u===c){D=null;break}if(p!==null){p.return=f,D=p;break}D=f}}}var v=s.alternate;if(v!==null){var w=v.child;if(w!==null){v.child=null;do{var b=w.sibling;w.sibling=null,w=b}while(w!==null)}}D=s}}if(s.subtreeFlags&2064&&i!==null)i.return=s,D=i;else e:for(;D!==null;){if(s=D,s.flags&2048)switch(s.tag){case 0:case 11:case 15:xo(9,s,s.return)}var h=s.sibling;if(h!==null){h.return=s.return,D=h;break e}D=s.return}}var g=e.current;for(D=g;D!==null;){i=D;var y=i.child;if(i.subtreeFlags&2064&&y!==null)y.return=i,D=y;else e:for(i=g;D!==null;){if(a=D,a.flags&2048)try{switch(a.tag){case 0:case 11:case 15:hs(9,a)}}catch($){se(a,a.return,$)}if(a===i){D=null;break e}var P=a.sibling;if(P!==null){P.return=a.return,D=P;break e}D=a.return}}if(F=r,Ft(),st&&typeof st.onPostCommitFiberRoot=="function")try{st.onPostCommitFiberRoot(ls,e)}catch{}o=!0}return o}finally{Q=n,He.transition=t}}return!1}function Cc(e,t,n){t=Bn(n,t),t=qd(e,t,1),e=Ot(e,t,1),t=Le(),e!==null&&(Vo(e,1,t),Oe(e,t))}function se(e,t,n){if(e.tag===3)Cc(e,e,n);else for(;t!==null;){if(t.tag===3){Cc(t,e,n);break}else if(t.tag===1){var o=t.stateNode;if(typeof t.type.getDerivedStateFromError=="function"||typeof o.componentDidCatch=="function"&&(Dt===null||!Dt.has(o))){e=Bn(n,e),e=Qd(t,e,1),t=Ot(t,e,1),e=Le(),t!==null&&(Vo(t,1,e),Oe(t,e));break}}t=t.return}}function Lf(e,t,n){var o=e.pingCache;o!==null&&o.delete(t),t=Le(),e.pingedLanes|=e.suspendedLanes&n,fe===e&&(ye&n)===n&&(de===4||de===3&&(ye&130023424)===ye&&500>ie()-el?Jt(e,0):Ja|=n),Oe(e,t)}function gp(e,t){t===0&&(e.mode&1?(t=nr,nr<<=1,!(nr&130023424)&&(nr=4194304)):t=1);var n=Le();e=ft(e,t),e!==null&&(Vo(e,t,n),Oe(e,n))}function If(e){var t=e.memoizedState,n=0;t!==null&&(n=t.retryLane),gp(e,n)}function kf(e,t){var n=0;switch(e.tag){case 13:var o=e.stateNode,r=e.memoizedState;r!==null&&(n=r.retryLane);break;case 19:o=e.stateNode;break;default:throw Error(E(314))}o!==null&&o.delete(t),gp(e,n)}var fp;fp=function(e,t,n){if(e!==null)if(e.memoizedProps!==t.pendingProps||Re.current)Ee=!0;else{if(!(e.lanes&n)&&!(t.flags&128))return Ee=!1,ff(e,t,n);Ee=!!(e.flags&131072)}else Ee=!1,J&&t.flags&1048576&&wd(t,Hr,t.index);switch(t.lanes=0,t.tag){case 2:var o=t.type;_r(e,t),e=t.pendingProps;var r=jn(t,$e.current);Rn(t,n),r=qa(null,t,o,e,r,n);var s=Qa();return t.flags|=1,typeof r=="object"&&r!==null&&typeof r.render=="function"&&r.$$typeof===void 0?(t.tag=1,t.memoizedState=null,t.updateQueue=null,ze(o)?(s=!0,Wr(t)):s=!1,t.memoizedState=r.state!==null&&r.state!==void 0?r.state:null,Fa(t),r.updater=fs,t.stateNode=r,r._reactInternals=t,Wi(t,o,e,n),t=Gi(null,t,o,!0,s,n)):(t.tag=0,J&&s&&Ma(t),Ce(null,t,r,n),t=t.child),t;case 16:o=t.elementType;e:{switch(_r(e,t),e=t.pendingProps,r=o._init,o=r(o._payload),t.type=o,r=t.tag=Ef(o),e=Ke(o,e),r){case 0:t=Hi(null,t,o,e,n);break e;case 1:t=fc(null,t,o,e,n);break e;case 11:t=mc(null,t,o,e,n);break e;case 14:t=gc(null,t,o,Ke(o.type,e),n);break e}throw Error(E(306,o,""))}return t;case 0:return o=t.type,r=t.pendingProps,r=t.elementType===o?r:Ke(o,r),Hi(e,t,o,r,n);case 1:return o=t.type,r=t.pendingProps,r=t.elementType===o?r:Ke(o,r),fc(e,t,o,r,n);case 3:e:{if(Zd(t),e===null)throw Error(E(387));o=t.pendingProps,s=t.memoizedState,r=s.element,Cd(e,t),Qr(t,o,null,n);var i=t.memoizedState;if(o=i.element,s.isDehydrated)if(s={element:o,isDehydrated:!1,cache:i.cache,pendingSuspenseBoundaries:i.pendingSuspenseBoundaries,transitions:i.transitions},t.updateQueue.baseState=s,t.memoizedState=s,t.flags&256){r=Bn(Error(E(423)),t),t=hc(e,t,o,n,r);break e}else if(o!==r){r=Bn(Error(E(424)),t),t=hc(e,t,o,n,r);break e}else for(je=zt(t.stateNode.containerInfo.firstChild),Te=t,J=!0,Xe=null,n=$d(t,null,o,n),t.child=n;n;)n.flags=n.flags&-3|4096,n=n.sibling;else{if(Tn(),o===r){t=ht(e,t,n);break e}Ce(e,t,o,n)}t=t.child}return t;case 5:return Ld(t),e===null&&Bi(t),o=t.type,r=t.pendingProps,s=e!==null?e.memoizedProps:null,i=r.children,Mi(o,r)?i=null:s!==null&&Mi(o,s)&&(t.flags|=32),Xd(e,t),Ce(e,t,i,n),t.child;case 6:return e===null&&Bi(t),null;case 13:return Jd(e,t,n);case 4:return Wa(t,t.stateNode.containerInfo),o=t.pendingProps,e===null?t.child=Nn(t,null,o,n):Ce(e,t,o,n),t.child;case 11:return o=t.type,r=t.pendingProps,r=t.elementType===o?r:Ke(o,r),mc(e,t,o,r,n);case 7:return Ce(e,t,t.pendingProps,n),t.child;case 8:return Ce(e,t,t.pendingProps.children,n),t.child;case 12:return Ce(e,t,t.pendingProps.children,n),t.child;case 10:e:{if(o=t.type._context,r=t.pendingProps,s=t.memoizedProps,i=r.value,Y(Gr,o._currentValue),o._currentValue=i,s!==null)if(et(s.value,i)){if(s.children===r.children&&!Re.current){t=ht(e,t,n);break e}}else for(s=t.child,s!==null&&(s.return=t);s!==null;){var a=s.dependencies;if(a!==null){i=s.child;for(var l=a.firstContext;l!==null;){if(l.context===o){if(s.tag===1){l=dt(-1,n&-n),l.tag=2;var c=s.updateQueue;if(c!==null){c=c.shared;var u=c.pending;u===null?l.next=l:(l.next=u.next,u.next=l),c.pending=l}}s.lanes|=n,l=s.alternate,l!==null&&(l.lanes|=n),Ui(s.return,n,t),a.lanes|=n;break}l=l.next}}else if(s.tag===10)i=s.type===t.type?null:s.child;else if(s.tag===18){if(i=s.return,i===null)throw Error(E(341));i.lanes|=n,a=i.alternate,a!==null&&(a.lanes|=n),Ui(i,n,t),i=s.sibling}else i=s.child;if(i!==null)i.return=s;else for(i=s;i!==null;){if(i===t){i=null;break}if(s=i.sibling,s!==null){s.return=i.return,i=s;break}i=i.return}s=i}Ce(e,t,r.children,n),t=t.child}return t;case 9:return r=t.type,o=t.pendingProps.children,Rn(t,n),r=Ge(r),o=o(r),t.flags|=1,Ce(e,t,o,n),t.child;case 14:return o=t.type,r=Ke(o,t.pendingProps),r=Ke(o.type,r),gc(e,t,o,r,n);case 15:return Kd(e,t,t.type,t.pendingProps,n);case 17:return o=t.type,r=t.pendingProps,r=t.elementType===o?r:Ke(o,r),_r(e,t),t.tag=1,ze(o)?(e=!0,Wr(t)):e=!1,Rn(t,n),Gd(t,o,r),Wi(t,o,r,n),Gi(null,t,o,!0,e,n);case 19:return ep(e,t,n);case 22:return Yd(e,t,n)}throw Error(E(156,t.tag))};function hp(e,t){return Wu(e,t)}function _f(e,t,n,o){this.tag=e,this.key=n,this.sibling=this.child=this.return=this.stateNode=this.type=this.elementType=null,this.index=0,this.ref=null,this.pendingProps=t,this.dependencies=this.memoizedState=this.updateQueue=this.memoizedProps=null,this.mode=o,this.subtreeFlags=this.flags=0,this.deletions=null,this.childLanes=this.lanes=0,this.alternate=null}function Ve(e,t,n,o){return new _f(e,t,n,o)}function rl(e){return e=e.prototype,!(!e||!e.isReactComponent)}function Ef(e){if(typeof e=="function")return rl(e)?1:0;if(e!=null){if(e=e.$$typeof,e===$a)return 11;if(e===Sa)return 14}return 2}function jt(e,t){var n=e.alternate;return n===null?(n=Ve(e.tag,t,e.key,e.mode),n.elementType=e.elementType,n.type=e.type,n.stateNode=e.stateNode,n.alternate=e,e.alternate=n):(n.pendingProps=t,n.type=e.type,n.flags=0,n.subtreeFlags=0,n.deletions=null),n.flags=e.flags&14680064,n.childLanes=e.childLanes,n.lanes=e.lanes,n.child=e.child,n.memoizedProps=e.memoizedProps,n.memoizedState=e.memoizedState,n.updateQueue=e.updateQueue,t=e.dependencies,n.dependencies=t===null?null:{lanes:t.lanes,firstContext:t.firstContext},n.sibling=e.sibling,n.index=e.index,n.ref=e.ref,n}function zr(e,t,n,o,r,s){var i=2;if(o=e,typeof e=="function")rl(e)&&(i=1);else if(typeof e=="string")i=5;else e:switch(e){case hn:return en(n.children,r,s,t);case Pa:i=8,r|=8;break;case mi:return e=Ve(12,n,t,r|2),e.elementType=mi,e.lanes=s,e;case gi:return e=Ve(13,n,t,r),e.elementType=gi,e.lanes=s,e;case fi:return e=Ve(19,n,t,r),e.elementType=fi,e.lanes=s,e;case Lu:return vs(n,r,s,t);default:if(typeof e=="object"&&e!==null)switch(e.$$typeof){case Su:i=10;break e;case Cu:i=9;break e;case $a:i=11;break e;case Sa:i=14;break e;case bt:i=16,o=null;break e}throw Error(E(130,e==null?e:typeof e,""))}return t=Ve(i,n,t,r),t.elementType=e,t.type=o,t.lanes=s,t}function en(e,t,n,o){return e=Ve(7,e,o,t),e.lanes=n,e}function vs(e,t,n,o){return e=Ve(22,e,o,t),e.elementType=Lu,e.lanes=n,e.stateNode={isHidden:!1},e}function Ys(e,t,n){return e=Ve(6,e,null,t),e.lanes=n,e}function Xs(e,t,n){return t=Ve(4,e.children!==null?e.children:[],e.key,t),t.lanes=n,t.stateNode={containerInfo:e.containerInfo,pendingChildren:null,implementation:e.implementation},t}function Rf(e,t,n,o,r){this.tag=t,this.containerInfo=e,this.finishedWork=this.pingCache=this.current=this.pendingChildren=null,this.timeoutHandle=-1,this.callbackNode=this.pendingContext=this.context=null,this.callbackPriority=0,this.eventTimes=Rs(0),this.expirationTimes=Rs(-1),this.entangledLanes=this.finishedLanes=this.mutableReadLanes=this.expiredLanes=this.pingedLanes=this.suspendedLanes=this.pendingLanes=0,this.entanglements=Rs(0),this.identifierPrefix=o,this.onRecoverableError=r,this.mutableSourceEagerHydrationData=null}function sl(e,t,n,o,r,s,i,a,l){return e=new Rf(e,t,n,a,l),t===1?(t=1,s===!0&&(t|=8)):t=0,s=Ve(3,null,null,t),e.current=s,s.stateNode=e,s.memoizedState={element:o,isDehydrated:n,cache:null,transitions:null,pendingSuspenseBoundaries:null},Fa(s),e}function zf(e,t,n){var o=3<arguments.length&&arguments[3]!==void 0?arguments[3]:null;return{$$typeof:fn,key:o==null?null:""+o,children:e,containerInfo:t,implementation:n}}function yp(e){if(!e)return At;e=e._reactInternals;e:{if(cn(e)!==e||e.tag!==1)throw Error(E(170));var t=e;do{switch(t.tag){case 3:t=t.stateNode.context;break e;case 1:if(ze(t.type)){t=t.stateNode.__reactInternalMemoizedMergedChildContext;break e}}t=t.return}while(t!==null);throw Error(E(171))}if(e.tag===1){var n=e.type;if(ze(n))return yd(e,n,t)}return t}function vp(e,t,n,o,r,s,i,a,l){return e=sl(n,o,!0,e,r,s,i,a,l),e.context=yp(null),n=e.current,o=Le(),r=Mt(n),s=dt(o,r),s.callback=t??null,Ot(n,s,r),e.current.lanes=r,Vo(e,r,o),Oe(e,o),e}function ws(e,t,n,o){var r=t.current,s=Le(),i=Mt(r);return n=yp(n),t.context===null?t.context=n:t.pendingContext=n,t=dt(s,i),t.payload={element:e},o=o===void 0?null:o,o!==null&&(t.callback=o),e=Ot(r,t,i),e!==null&&(Je(e,r,i,s),Lr(e,r,i)),i}function ns(e){if(e=e.current,!e.child)return null;switch(e.child.tag){case 5:return e.child.stateNode;default:return e.child.stateNode}}function Lc(e,t){if(e=e.memoizedState,e!==null&&e.dehydrated!==null){var n=e.retryLane;e.retryLane=n!==0&&n<t?n:t}}function il(e,t){Lc(e,t),(e=e.alternate)&&Lc(e,t)}function Of(){return null}var wp=typeof reportError=="function"?reportError:function(e){console.error(e)};function al(e){this._internalRoot=e}xs.prototype.render=al.prototype.render=function(e){var t=this._internalRoot;if(t===null)throw Error(E(409));ws(e,t,null,null)};xs.prototype.unmount=al.prototype.unmount=function(){var e=this._internalRoot;if(e!==null){this._internalRoot=null;var t=e.containerInfo;sn(function(){ws(null,e,null,null)}),t[gt]=null}};function xs(e){this._internalRoot=e}xs.prototype.unstable_scheduleHydration=function(e){if(e){var t=Yu();e={blockedOn:null,target:e,priority:t};for(var n=0;n<$t.length&&t!==0&&t<$t[n].priority;n++);$t.splice(n,0,e),n===0&&Zu(e)}};function ll(e){return!(!e||e.nodeType!==1&&e.nodeType!==9&&e.nodeType!==11)}function bs(e){return!(!e||e.nodeType!==1&&e.nodeType!==9&&e.nodeType!==11&&(e.nodeType!==8||e.nodeValue!==" react-mount-point-unstable "))}function Ic(){}function Df(e,t,n,o,r){if(r){if(typeof o=="function"){var s=o;o=function(){var c=ns(i);s.call(c)}}var i=vp(t,o,e,0,null,!1,!1,"",Ic);return e._reactRootContainer=i,e[gt]=i.current,Ro(e.nodeType===8?e.parentNode:e),sn(),i}for(;r=e.lastChild;)e.removeChild(r);if(typeof o=="function"){var a=o;o=function(){var c=ns(l);a.call(c)}}var l=sl(e,0,!1,null,null,!1,!1,"",Ic);return e._reactRootContainer=l,e[gt]=l.current,Ro(e.nodeType===8?e.parentNode:e),sn(function(){ws(t,l,n,o)}),l}function Ps(e,t,n,o,r){var s=n._reactRootContainer;if(s){var i=s;if(typeof r=="function"){var a=r;r=function(){var l=ns(i);a.call(l)}}ws(t,i,e,r)}else i=Df(n,t,e,r,o);return ns(i)}Qu=function(e){switch(e.tag){case 3:var t=e.stateNode;if(t.current.memoizedState.isDehydrated){var n=co(t.pendingLanes);n!==0&&(Ia(t,n|1),Oe(t,ie()),!(F&6)&&(Un=ie()+500,Ft()))}break;case 13:sn(function(){var o=ft(e,1);if(o!==null){var r=Le();Je(o,e,1,r)}}),il(e,1)}};ka=function(e){if(e.tag===13){var t=ft(e,134217728);if(t!==null){var n=Le();Je(t,e,134217728,n)}il(e,134217728)}};Ku=function(e){if(e.tag===13){var t=Mt(e),n=ft(e,t);if(n!==null){var o=Le();Je(n,e,t,o)}il(e,t)}};Yu=function(){return Q};Xu=function(e,t){var n=Q;try{return Q=e,t()}finally{Q=n}};Ci=function(e,t,n){switch(t){case"input":if(vi(e,n),t=n.name,n.type==="radio"&&t!=null){for(n=e;n.parentNode;)n=n.parentNode;for(n=n.querySelectorAll("input[name="+JSON.stringify(""+t)+'][type="radio"]'),t=0;t<n.length;t++){var o=n[t];if(o!==e&&o.form===e.form){var r=ps(o);if(!r)throw Error(E(90));ku(o),vi(o,r)}}}break;case"textarea":Eu(e,n);break;case"select":t=n.value,t!=null&&In(e,!!n.multiple,t,!1)}};Tu=tl;Nu=sn;var Mf={usingClientEntryPoint:!1,Events:[Go,xn,ps,Mu,ju,tl]},io={findFiberByHostInstance:Kt,bundleType:0,version:"18.3.1",rendererPackageName:"react-dom"},jf={bundleType:io.bundleType,version:io.version,rendererPackageName:io.rendererPackageName,rendererConfig:io.rendererConfig,overrideHookState:null,overrideHookStateDeletePath:null,overrideHookStateRenamePath:null,overrideProps:null,overridePropsDeletePath:null,overridePropsRenamePath:null,setErrorHandler:null,setSuspenseHandler:null,scheduleUpdate:null,currentDispatcherRef:yt.ReactCurrentDispatcher,findHostInstanceByFiber:function(e){return e=Uu(e),e===null?null:e.stateNode},findFiberByHostInstance:io.findFiberByHostInstance||Of,findHostInstancesForRefresh:null,scheduleRefresh:null,scheduleRoot:null,setRefreshHandler:null,getCurrentFiber:null,reconcilerVersion:"18.3.1-next-f1338f8080-20240426"};if(typeof __REACT_DEVTOOLS_GLOBAL_HOOK__<"u"){var mr=__REACT_DEVTOOLS_GLOBAL_HOOK__;if(!mr.isDisabled&&mr.supportsFiber)try{ls=mr.inject(jf),st=mr}catch{}}Ae.__SECRET_INTERNALS_DO_NOT_USE_OR_YOU_WILL_BE_FIRED=Mf;Ae.createPortal=function(e,t){var n=2<arguments.length&&arguments[2]!==void 0?arguments[2]:null;if(!ll(t))throw Error(E(200));return zf(e,t,null,n)};Ae.createRoot=function(e,t){if(!ll(e))throw Error(E(299));var n=!1,o="",r=wp;return t!=null&&(t.unstable_strictMode===!0&&(n=!0),t.identifierPrefix!==void 0&&(o=t.identifierPrefix),t.onRecoverableError!==void 0&&(r=t.onRecoverableError)),t=sl(e,1,!1,null,null,n,!1,o,r),e[gt]=t.current,Ro(e.nodeType===8?e.parentNode:e),new al(t)};Ae.findDOMNode=function(e){if(e==null)return null;if(e.nodeType===1)return e;var t=e._reactInternals;if(t===void 0)throw typeof e.render=="function"?Error(E(188)):(e=Object.keys(e).join(","),Error(E(268,e)));return e=Uu(t),e=e===null?null:e.stateNode,e};Ae.flushSync=function(e){return sn(e)};Ae.hydrate=function(e,t,n){if(!bs(t))throw Error(E(200));return Ps(null,e,t,!0,n)};Ae.hydrateRoot=function(e,t,n){if(!ll(e))throw Error(E(405));var o=n!=null&&n.hydratedSources||null,r=!1,s="",i=wp;if(n!=null&&(n.unstable_strictMode===!0&&(r=!0),n.identifierPrefix!==void 0&&(s=n.identifierPrefix),n.onRecoverableError!==void 0&&(i=n.onRecoverableError)),t=vp(t,null,e,1,n??null,r,!1,s,i),e[gt]=t.current,Ro(e),o)for(e=0;e<o.length;e++)n=o[e],r=n._getVersion,r=r(n._source),t.mutableSourceEagerHydrationData==null?t.mutableSourceEagerHydrationData=[n,r]:t.mutableSourceEagerHydrationData.push(n,r);return new xs(t)};Ae.render=function(e,t,n){if(!bs(t))throw Error(E(200));return Ps(null,e,t,!1,n)};Ae.unmountComponentAtNode=function(e){if(!bs(e))throw Error(E(40));return e._reactRootContainer?(sn(function(){Ps(null,null,e,!1,function(){e._reactRootContainer=null,e[gt]=null})}),!0):!1};Ae.unstable_batchedUpdates=tl;Ae.unstable_renderSubtreeIntoContainer=function(e,t,n,o){if(!bs(n))throw Error(E(200));if(e==null||e._reactInternals===void 0)throw Error(E(38));return Ps(e,t,n,!1,o)};Ae.version="18.3.1-next-f1338f8080-20240426";function xp(){if(!(typeof __REACT_DEVTOOLS_GLOBAL_HOOK__>"u"||typeof __REACT_DEVTOOLS_GLOBAL_HOOK__.checkDCE!="function"))try{__REACT_DEVTOOLS_GLOBAL_HOOK__.checkDCE(xp)}catch(e){console.error(e)}}xp(),xu.exports=Ae;var Tf=xu.exports,bp,kc=Tf;bp=kc.createRoot,kc.hydrateRoot;/**
 * @remix-run/router v1.23.4
 *
 * Copyright (c) Remix Software Inc.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE.md file in the root directory of this source tree.
 *
 * @license MIT
 */function Bo(){return Bo=Object.assign?Object.assign.bind():function(e){for(var t=1;t<arguments.length;t++){var n=arguments[t];for(var o in n)({}).hasOwnProperty.call(n,o)&&(e[o]=n[o])}return e},Bo.apply(null,arguments)}var It;(function(e){e.Pop="POP",e.Push="PUSH",e.Replace="REPLACE"})(It||(It={}));const _c="popstate";function Nf(e){e===void 0&&(e={});function t(r,s){let{pathname:i="/",search:a="",hash:l=""}=un(r.location.hash.substr(1));return!i.startsWith("/")&&!i.startsWith(".")&&(i="/"+i),ra("",{pathname:i,search:a,hash:l},s.state&&s.state.usr||null,s.state&&s.state.key||"default")}function n(r,s){let i=r.document.querySelector("base"),a="";if(i&&i.getAttribute("href")){let l=r.location.href,c=l.indexOf("#");a=c===-1?l:l.slice(0,c)}return a+"#"+(typeof s=="string"?s:os(s))}function o(r,s){cl(r.pathname.charAt(0)==="/","relative pathnames are not supported in hash history.push("+JSON.stringify(s)+")")}return Bf(t,n,o,e)}function ae(e,t){if(e===!1||e===null||typeof e>"u")throw new Error(t)}function cl(e,t){if(!e){typeof console<"u"&&console.warn(t);try{throw new Error(t)}catch{}}}function Af(){return Math.random().toString(36).substr(2,8)}function Ec(e,t){return{usr:e.state,key:e.key,idx:t}}function ra(e,t,n,o){return n===void 0&&(n=null),Bo({pathname:typeof e=="string"?e:e.pathname,search:"",hash:""},typeof t=="string"?un(t):t,{state:n,key:t&&t.key||o||Af()})}function os(e){let{pathname:t="/",search:n="",hash:o=""}=e;return n&&n!=="?"&&(t+=n.charAt(0)==="?"?n:"?"+n),o&&o!=="#"&&(t+=o.charAt(0)==="#"?o:"#"+o),t}function un(e){let t={};if(e){let n=e.indexOf("#");n>=0&&(t.hash=e.substr(n),e=e.substr(0,n));let o=e.indexOf("?");o>=0&&(t.search=e.substr(o),e=e.substr(0,o)),e&&(t.pathname=e)}return t}function Bf(e,t,n,o){o===void 0&&(o={});let{window:r=document.defaultView,v5Compat:s=!1}=o,i=r.history,a=It.Pop,l=null,c=u();c==null&&(c=0,i.replaceState(Bo({},i.state,{idx:c}),""));function u(){return(i.state||{idx:null}).idx}function d(){a=It.Pop;let b=u(),h=b==null?null:b-c;c=b,l&&l({action:a,location:w.location,delta:h})}function p(b,h){a=It.Push;let g=ra(w.location,b,h);n&&n(g,b),c=u()+1;let y=Ec(g,c),P=w.createHref(g);try{i.pushState(y,"",P)}catch($){if($ instanceof DOMException&&$.name==="DataCloneError")throw $;r.location.assign(P)}s&&l&&l({action:a,location:w.location,delta:1})}function f(b,h){a=It.Replace;let g=ra(w.location,b,h);n&&n(g,b),c=u();let y=Ec(g,c),P=w.createHref(g);i.replaceState(y,"",P),s&&l&&l({action:a,location:w.location,delta:0})}function v(b){let h=r.location.origin!=="null"?r.location.origin:r.location.href,g=typeof b=="string"?b:os(b);return g=g.replace(/ $/,"%20"),ae(h,"No window.location.(origin|href) available to create URL for href: "+g),new URL(g,h)}let w={get action(){return a},get location(){return e(r,i)},listen(b){if(l)throw new Error("A history only accepts one active listener");return r.addEventListener(_c,d),l=b,()=>{r.removeEventListener(_c,d),l=null}},createHref(b){return t(r,b)},createURL:v,encodeLocation(b){let h=v(b);return{pathname:h.pathname,search:h.search,hash:h.hash}},push:p,replace:f,go(b){return i.go(b)}};return w}var Rc;(function(e){e.data="data",e.deferred="deferred",e.redirect="redirect",e.error="error"})(Rc||(Rc={}));function Uf(e,t,n){return n===void 0&&(n="/"),Ff(e,t,n)}function Ff(e,t,n,o){let r=typeof t=="string"?un(t):t,s=ul(r.pathname||"/",n);if(s==null)return null;let i=Pp(e);Wf(i);let a=null,l=th(s);for(let c=0;a==null&&c<i.length;++c)a=Zf(i[c],l);return a}function Pp(e,t,n,o){t===void 0&&(t=[]),n===void 0&&(n=[]),o===void 0&&(o="");let r=(s,i,a)=>{let l={relativePath:a===void 0?s.path||"":a,caseSensitive:s.caseSensitive===!0,childrenIndex:i,route:s};l.relativePath.startsWith("/")&&(ae(l.relativePath.startsWith(o),'Absolute route path "'+l.relativePath+'" nested under path '+('"'+o+'" is not valid. An absolute child route path ')+"must start with the combined path of all its parent routes."),l.relativePath=l.relativePath.slice(o.length));let c=Tt([o,l.relativePath]),u=n.concat(l);s.children&&s.children.length>0&&(ae(s.index!==!0,"Index routes must not have child routes. Please remove "+('all child routes from route path "'+c+'".')),Pp(s.children,t,u,c)),!(s.path==null&&!s.index)&&t.push({path:c,score:Yf(c,s.index),routesMeta:u})};return e.forEach((s,i)=>{var a;if(s.path===""||!((a=s.path)!=null&&a.includes("?")))r(s,i);else for(let l of $p(s.path))r(s,i,l)}),t}function $p(e){let t=e.split("/");if(t.length===0)return[];let[n,...o]=t,r=n.endsWith("?"),s=n.replace(/\?$/,"");if(o.length===0)return r?[s,""]:[s];let i=$p(o.join("/")),a=[];return a.push(...i.map(l=>l===""?s:[s,l].join("/"))),r&&a.push(...i),a.map(l=>e.startsWith("/")&&l===""?"/":l)}function Wf(e){e.sort((t,n)=>t.score!==n.score?n.score-t.score:Xf(t.routesMeta.map(o=>o.childrenIndex),n.routesMeta.map(o=>o.childrenIndex)))}const Vf=/^:[\w-]+$/,Hf=3,Gf=2,qf=1,Qf=10,Kf=-2,zc=e=>e==="*";function Yf(e,t){let n=e.split("/"),o=n.length;return n.some(zc)&&(o+=Kf),t&&(o+=Gf),n.filter(r=>!zc(r)).reduce((r,s)=>r+(Vf.test(s)?Hf:s===""?qf:Qf),o)}function Xf(e,t){return e.length===t.length&&e.slice(0,-1).every((o,r)=>o===t[r])?e[e.length-1]-t[t.length-1]:0}function Zf(e,t,n){let{routesMeta:o}=e,r={},s="/",i=[];for(let a=0;a<o.length;++a){let l=o[a],c=a===o.length-1,u=s==="/"?t:t.slice(s.length)||"/",d=Jf({path:l.relativePath,caseSensitive:l.caseSensitive,end:c},u),p=l.route;if(!d)return null;Object.assign(r,d.params),i.push({params:r,pathname:Tt([s,d.pathname]),pathnameBase:rh(Tt([s,d.pathnameBase])),route:p}),d.pathnameBase!=="/"&&(s=Tt([s,d.pathnameBase]))}return i}function Jf(e,t){typeof e=="string"&&(e={path:e,caseSensitive:!1,end:!0});let[n,o]=eh(e.path,e.caseSensitive,e.end),r=t.match(n);if(!r)return null;let s=r[0],i=s.replace(/(.)\/+$/,"$1"),a=r.slice(1);return{params:o.reduce((c,u,d)=>{let{paramName:p,isOptional:f}=u;if(p==="*"){let w=a[d]||"";i=s.slice(0,s.length-w.length).replace(/(.)\/+$/,"$1")}const v=a[d];return f&&!v?c[p]=void 0:c[p]=(v||"").replace(/%2F/g,"/"),c},{}),pathname:s,pathnameBase:i,pattern:e}}function eh(e,t,n){t===void 0&&(t=!1),n===void 0&&(n=!0),cl(e==="*"||!e.endsWith("*")||e.endsWith("/*"),'Route path "'+e+'" will be treated as if it were '+('"'+e.replace(/\*$/,"/*")+'" because the `*` character must ')+"always follow a `/` in the pattern. To get rid of this warning, "+('please change the route path to "'+e.replace(/\*$/,"/*")+'".'));let o=[],r="^"+e.replace(/\/*\*?$/,"").replace(/^\/*/,"/").replace(/[\\.*+^${}|()[\]]/g,"\\$&").replace(/\/:([\w-]+)(\?)?/g,(i,a,l)=>(o.push({paramName:a,isOptional:l!=null}),l?"/?([^\\/]+)?":"/([^\\/]+)"));return e.endsWith("*")?(o.push({paramName:"*"}),r+=e==="*"||e==="/*"?"(.*)$":"(?:\\/(.+)|\\/*)$"):n?r+="\\/*$":e!==""&&e!=="/"&&(r+="(?:(?=\\/|$))"),[new RegExp(r,t?void 0:"i"),o]}function th(e){try{return e.split("/").map(t=>decodeURIComponent(t).replace(/\//g,"%2F")).join("/")}catch(t){return cl(!1,'The URL path "'+e+'" could not be decoded because it is is a malformed URL segment. This is probably due to a bad percent '+("encoding ("+t+").")),e}}function ul(e,t){if(t==="/")return e;if(!e.toLowerCase().startsWith(t.toLowerCase()))return null;let n=t.endsWith("/")?t.length-1:t.length,o=e.charAt(n);return o&&o!=="/"?null:e.slice(n)||"/"}function nh(e,t){t===void 0&&(t="/");let{pathname:n,search:o="",hash:r=""}=typeof e=="string"?un(e):e,s;return n?(n=Sp(n),n.startsWith("/")?s=Oc(n.substring(1),"/"):s=Oc(n,t)):s=t,{pathname:s,search:sh(o),hash:ih(r)}}function Oc(e,t){let n=t.replace(/\/+$/,"").split("/");return e.split("/").forEach(r=>{r===".."?n.length>1&&n.pop():r!=="."&&n.push(r)}),n.length>1?n.join("/"):"/"}function Zs(e,t,n,o){return"Cannot include a '"+e+"' character in a manually specified "+("`to."+t+"` field ["+JSON.stringify(o)+"].  Please separate it out to the ")+("`to."+n+"` field. Alternatively you may provide the full path as ")+'a string in <Link to="..."> and the router will parse it for you.'}function oh(e){return e.filter((t,n)=>n===0||t.route.path&&t.route.path.length>0)}function dl(e,t){let n=oh(e);return t?n.map((o,r)=>r===n.length-1?o.pathname:o.pathnameBase):n.map(o=>o.pathnameBase)}function pl(e,t,n,o){o===void 0&&(o=!1);let r;typeof e=="string"?r=un(e):(r=Bo({},e),ae(!r.pathname||!r.pathname.includes("?"),Zs("?","pathname","search",r)),ae(!r.pathname||!r.pathname.includes("#"),Zs("#","pathname","hash",r)),ae(!r.search||!r.search.includes("#"),Zs("#","search","hash",r)));let s=e===""||r.pathname==="",i=s?"/":r.pathname,a;if(i==null)a=n;else{let d=t.length-1;if(!o&&i.startsWith("..")){let p=i.split("/");for(;p[0]==="..";)p.shift(),d-=1;r.pathname=p.join("/")}a=d>=0?t[d]:"/"}let l=nh(r,a),c=i&&i!=="/"&&i.endsWith("/"),u=(s||i===".")&&n.endsWith("/");return!l.pathname.endsWith("/")&&(c||u)&&(l.pathname+="/"),l}const Sp=e=>e.replace(/\/\/+/g,"/"),Tt=e=>Sp(e.join("/")),rh=e=>e.replace(/\/+$/,"").replace(/^\/*/,"/"),sh=e=>!e||e==="?"?"":e.startsWith("?")?e:"?"+e,ih=e=>!e||e==="#"?"":e.startsWith("#")?e:"#"+e;function ah(e){return e!=null&&typeof e.status=="number"&&typeof e.statusText=="string"&&typeof e.internal=="boolean"&&"data"in e}const Cp=["post","put","patch","delete"];new Set(Cp);const lh=["get",...Cp];new Set(lh);/**
 * React Router v6.30.6
 *
 * Copyright (c) Remix Software Inc.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE.md file in the root directory of this source tree.
 *
 * @license MIT
 */function Uo(){return Uo=Object.assign?Object.assign.bind():function(e){for(var t=1;t<arguments.length;t++){var n=arguments[t];for(var o in n)({}).hasOwnProperty.call(n,o)&&(e[o]=n[o])}return e},Uo.apply(null,arguments)}const ml=x.createContext(null),ch=x.createContext(null),Wt=x.createContext(null),$s=x.createContext(null),vt=x.createContext({outlet:null,matches:[],isDataRoute:!1}),Lp=x.createContext(null);function uh(e,t){let{relative:n}=t===void 0?{}:t;Gn()||ae(!1);let{basename:o,navigator:r}=x.useContext(Wt),{hash:s,pathname:i,search:a}=_p(e,{relative:n}),l=i;return o!=="/"&&(l=i==="/"?o:Tt([o,i])),r.createHref({pathname:l,search:a,hash:s})}function Gn(){return x.useContext($s)!=null}function qn(){return Gn()||ae(!1),x.useContext($s).location}function Ip(e){x.useContext(Wt).static||x.useLayoutEffect(e)}function kp(){let{isDataRoute:e}=x.useContext(vt);return e?Sh():dh()}function dh(){Gn()||ae(!1);let e=x.useContext(ml),{basename:t,future:n,navigator:o}=x.useContext(Wt),{matches:r}=x.useContext(vt),{pathname:s}=qn(),i=JSON.stringify(dl(r,n.v7_relativeSplatPath)),a=x.useRef(!1);return Ip(()=>{a.current=!0}),x.useCallback(function(c,u){if(u===void 0&&(u={}),!a.current)return;if(typeof c=="number"){o.go(c);return}let d=pl(c,JSON.parse(i),s,u.relative==="path");e==null&&t!=="/"&&(d.pathname=d.pathname==="/"?t:Tt([t,d.pathname])),(u.replace?o.replace:o.push)(d,u.state,u)},[t,o,i,s,e])}function ph(){let{matches:e}=x.useContext(vt),t=e[e.length-1];return t?t.params:{}}function _p(e,t){let{relative:n}=t===void 0?{}:t,{future:o}=x.useContext(Wt),{matches:r}=x.useContext(vt),{pathname:s}=qn(),i=JSON.stringify(dl(r,o.v7_relativeSplatPath));return x.useMemo(()=>pl(e,JSON.parse(i),s,n==="path"),[e,i,s,n])}function mh(e,t){return gh(e,t)}function gh(e,t,n,o){Gn()||ae(!1);let{navigator:r}=x.useContext(Wt),{matches:s}=x.useContext(vt),i=s[s.length-1],a=i?i.params:{};i&&i.pathname;let l=i?i.pathnameBase:"/";i&&i.route;let c=qn(),u;if(t){var d;let b=typeof t=="string"?un(t):t;l==="/"||(d=b.pathname)!=null&&d.startsWith(l)||ae(!1),u=b}else u=c;let p=u.pathname||"/",f=p;if(l!=="/"){let b=l.replace(/^\//,"").split("/");f="/"+p.replace(/^\//,"").split("/").slice(b.length).join("/")}let v=Uf(e,{pathname:f}),w=wh(v&&v.map(b=>Object.assign({},b,{params:Object.assign({},a,b.params),pathname:Tt([l,r.encodeLocation?r.encodeLocation(b.pathname).pathname:b.pathname]),pathnameBase:b.pathnameBase==="/"?l:Tt([l,r.encodeLocation?r.encodeLocation(b.pathnameBase).pathname:b.pathnameBase])})),s,n,o);return t&&w?x.createElement($s.Provider,{value:{location:Uo({pathname:"/",search:"",hash:"",state:null,key:"default"},u),navigationType:It.Pop}},w):w}function fh(){let e=$h(),t=ah(e)?e.status+" "+e.statusText:e instanceof Error?e.message:JSON.stringify(e),n=e instanceof Error?e.stack:null,r={padding:"0.5rem",backgroundColor:"rgba(200,200,200, 0.5)"};return x.createElement(x.Fragment,null,x.createElement("h2",null,"Unexpected Application Error!"),x.createElement("h3",{style:{fontStyle:"italic"}},t),n?x.createElement("pre",{style:r},n):null,null)}const hh=x.createElement(fh,null);class yh extends x.Component{constructor(t){super(t),this.state={location:t.location,revalidation:t.revalidation,error:t.error}}static getDerivedStateFromError(t){return{error:t}}static getDerivedStateFromProps(t,n){return n.location!==t.location||n.revalidation!=="idle"&&t.revalidation==="idle"?{error:t.error,location:t.location,revalidation:t.revalidation}:{error:t.error!==void 0?t.error:n.error,location:n.location,revalidation:t.revalidation||n.revalidation}}componentDidCatch(t,n){console.error("React Router caught the following error during render",t,n)}render(){return this.state.error!==void 0?x.createElement(vt.Provider,{value:this.props.routeContext},x.createElement(Lp.Provider,{value:this.state.error,children:this.props.component})):this.props.children}}function vh(e){let{routeContext:t,match:n,children:o}=e,r=x.useContext(ml);return r&&r.static&&r.staticContext&&(n.route.errorElement||n.route.ErrorBoundary)&&(r.staticContext._deepestRenderedBoundaryId=n.route.id),x.createElement(vt.Provider,{value:t},o)}function wh(e,t,n,o){var r;if(t===void 0&&(t=[]),n===void 0&&(n=null),o===void 0&&(o=null),e==null){var s;if(!n)return null;if(n.errors)e=n.matches;else if((s=o)!=null&&s.v7_partialHydration&&t.length===0&&!n.initialized&&n.matches.length>0)e=n.matches;else return null}let i=e,a=(r=n)==null?void 0:r.errors;if(a!=null){let u=i.findIndex(d=>d.route.id&&(a==null?void 0:a[d.route.id])!==void 0);u>=0||ae(!1),i=i.slice(0,Math.min(i.length,u+1))}let l=!1,c=-1;if(n&&o&&o.v7_partialHydration)for(let u=0;u<i.length;u++){let d=i[u];if((d.route.HydrateFallback||d.route.hydrateFallbackElement)&&(c=u),d.route.id){let{loaderData:p,errors:f}=n,v=d.route.loader&&p[d.route.id]===void 0&&(!f||f[d.route.id]===void 0);if(d.route.lazy||v){l=!0,c>=0?i=i.slice(0,c+1):i=[i[0]];break}}}return i.reduceRight((u,d,p)=>{let f,v=!1,w=null,b=null;n&&(f=a&&d.route.id?a[d.route.id]:void 0,w=d.route.errorElement||hh,l&&(c<0&&p===0?(Ch("route-fallback"),v=!0,b=null):c===p&&(v=!0,b=d.route.hydrateFallbackElement||null)));let h=t.concat(i.slice(0,p+1)),g=()=>{let y;return f?y=w:v?y=b:d.route.Component?y=x.createElement(d.route.Component,null):d.route.element?y=d.route.element:y=u,x.createElement(vh,{match:d,routeContext:{outlet:u,matches:h,isDataRoute:n!=null},children:y})};return n&&(d.route.ErrorBoundary||d.route.errorElement||p===0)?x.createElement(yh,{location:n.location,revalidation:n.revalidation,component:w,error:f,children:g(),routeContext:{outlet:null,matches:h,isDataRoute:!0}}):g()},null)}var Ep=function(e){return e.UseBlocker="useBlocker",e.UseRevalidator="useRevalidator",e.UseNavigateStable="useNavigate",e}(Ep||{}),Rp=function(e){return e.UseBlocker="useBlocker",e.UseLoaderData="useLoaderData",e.UseActionData="useActionData",e.UseRouteError="useRouteError",e.UseNavigation="useNavigation",e.UseRouteLoaderData="useRouteLoaderData",e.UseMatches="useMatches",e.UseRevalidator="useRevalidator",e.UseNavigateStable="useNavigate",e.UseRouteId="useRouteId",e}(Rp||{});function xh(e){let t=x.useContext(ml);return t||ae(!1),t}function bh(e){let t=x.useContext(ch);return t||ae(!1),t}function Ph(e){let t=x.useContext(vt);return t||ae(!1),t}function zp(e){let t=Ph(),n=t.matches[t.matches.length-1];return n.route.id||ae(!1),n.route.id}function $h(){var e;let t=x.useContext(Lp),n=bh(),o=zp();return t!==void 0?t:(e=n.errors)==null?void 0:e[o]}function Sh(){let{router:e}=xh(Ep.UseNavigateStable),t=zp(Rp.UseNavigateStable),n=x.useRef(!1);return Ip(()=>{n.current=!0}),x.useCallback(function(r,s){s===void 0&&(s={}),n.current&&(typeof r=="number"?e.navigate(r):e.navigate(r,Uo({fromRouteId:t},s)))},[e,t])}const Dc={};function Ch(e,t,n){Dc[e]||(Dc[e]=!0)}function Lh(e,t){e==null||e.v7_startTransition,e==null||e.v7_relativeSplatPath}function sa(e){let{to:t,replace:n,state:o,relative:r}=e;Gn()||ae(!1);let{future:s,static:i}=x.useContext(Wt),{matches:a}=x.useContext(vt),{pathname:l}=qn(),c=kp(),u=pl(t,dl(a,s.v7_relativeSplatPath),l,r==="path"),d=JSON.stringify(u);return x.useEffect(()=>c(JSON.parse(d),{replace:n,state:o,relative:r}),[c,d,r,n,o]),null}function po(e){ae(!1)}function Ih(e){let{basename:t="/",children:n=null,location:o,navigationType:r=It.Pop,navigator:s,static:i=!1,future:a}=e;Gn()&&ae(!1);let l=t.replace(/^\/*/,"/"),c=x.useMemo(()=>({basename:l,navigator:s,static:i,future:Uo({v7_relativeSplatPath:!1},a)}),[l,a,s,i]);typeof o=="string"&&(o=un(o));let{pathname:u="/",search:d="",hash:p="",state:f=null,key:v="default"}=o,w=x.useMemo(()=>{let b=ul(u,l);return b==null?null:{location:{pathname:b,search:d,hash:p,state:f,key:v},navigationType:r}},[l,u,d,p,f,v,r]);return w==null?null:x.createElement(Wt.Provider,{value:c},x.createElement($s.Provider,{children:n,value:w}))}function kh(e){let{children:t,location:n}=e;return mh(ia(t),n)}new Promise(()=>{});function ia(e,t){t===void 0&&(t=[]);let n=[];return x.Children.forEach(e,(o,r)=>{if(!x.isValidElement(o))return;let s=[...t,r];if(o.type===x.Fragment){n.push.apply(n,ia(o.props.children,s));return}o.type!==po&&ae(!1),!o.props.index||!o.props.children||ae(!1);let i={id:o.props.id||s.join("-"),caseSensitive:o.props.caseSensitive,element:o.props.element,Component:o.props.Component,index:o.props.index,path:o.props.path,loader:o.props.loader,action:o.props.action,errorElement:o.props.errorElement,ErrorBoundary:o.props.ErrorBoundary,hasErrorBoundary:o.props.ErrorBoundary!=null||o.props.errorElement!=null,shouldRevalidate:o.props.shouldRevalidate,handle:o.props.handle,lazy:o.props.lazy};o.props.children&&(i.children=ia(o.props.children,s)),n.push(i)}),n}/**
 * React Router DOM v6.30.6
 *
 * Copyright (c) Remix Software Inc.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE.md file in the root directory of this source tree.
 *
 * @license MIT
 */function aa(){return aa=Object.assign?Object.assign.bind():function(e){for(var t=1;t<arguments.length;t++){var n=arguments[t];for(var o in n)({}).hasOwnProperty.call(n,o)&&(e[o]=n[o])}return e},aa.apply(null,arguments)}function _h(e,t){if(e==null)return{};var n={};for(var o in e)if({}.hasOwnProperty.call(e,o)){if(t.indexOf(o)!==-1)continue;n[o]=e[o]}return n}function Eh(e){return!!(e.metaKey||e.altKey||e.ctrlKey||e.shiftKey)}function Rh(e,t){return e.button===0&&(!t||t==="_self")&&!Eh(e)}const zh=["onClick","relative","reloadDocument","replace","state","target","to","preventScrollReset","viewTransition"],Oh="6";try{window.__reactRouterVersion=Oh}catch{}const Dh="startTransition",Mc=Cm[Dh];function Mh(e){let{basename:t,children:n,future:o,window:r}=e,s=x.useRef();s.current==null&&(s.current=Nf({window:r,v5Compat:!0}));let i=s.current,[a,l]=x.useState({action:i.action,location:i.location}),{v7_startTransition:c}=o||{},u=x.useCallback(d=>{c&&Mc?Mc(()=>l(d)):l(d)},[l,c]);return x.useLayoutEffect(()=>i.listen(u),[i,u]),x.useEffect(()=>Lh(o),[o]),x.createElement(Ih,{basename:t,children:n,location:a.location,navigationType:a.action,navigator:i,future:o})}const jh=typeof window<"u"&&typeof window.document<"u"&&typeof window.document.createElement<"u",Th=/^(?:[a-z][a-z0-9+.-]*:|\/\/)/i,la=x.forwardRef(function(t,n){let{onClick:o,relative:r,reloadDocument:s,replace:i,state:a,target:l,to:c,preventScrollReset:u,viewTransition:d}=t,p=_h(t,zh),{basename:f}=x.useContext(Wt),v,w=!1;if(typeof c=="string"&&Th.test(c)&&(v=c,jh))try{let y=new URL(window.location.href),P=c.startsWith("//")?new URL(y.protocol+c):new URL(c),$=ul(P.pathname,f);P.origin===y.origin&&$!=null?c=$+P.search+P.hash:w=!0}catch{}let b=uh(c,{relative:r}),h=Nh(c,{replace:i,state:a,target:l,preventScrollReset:u,relative:r,viewTransition:d});function g(y){o&&o(y),y.defaultPrevented||h(y)}return x.createElement("a",aa({},p,{href:v||b,onClick:w||s?o:g,ref:n,target:l}))});var jc;(function(e){e.UseScrollRestoration="useScrollRestoration",e.UseSubmit="useSubmit",e.UseSubmitFetcher="useSubmitFetcher",e.UseFetcher="useFetcher",e.useViewTransitionState="useViewTransitionState"})(jc||(jc={}));var Tc;(function(e){e.UseFetcher="useFetcher",e.UseFetchers="useFetchers",e.UseScrollRestoration="useScrollRestoration"})(Tc||(Tc={}));function Nh(e,t){let{target:n,replace:o,state:r,preventScrollReset:s,relative:i,viewTransition:a}=t===void 0?{}:t,l=kp(),c=qn(),u=_p(e,{relative:i});return x.useCallback(d=>{if(Rh(d,n)){d.preventDefault();let p=o!==void 0?o:os(c)===os(u);l(e,{replace:p,state:r,preventScrollReset:s,relative:i,viewTransition:a})}},[c,l,u,o,r,n,e,s,i,a])}const Ah="https://github.com/frankvane/vane-components";class Bh extends N.Component{constructor(){super(...arguments);wl(this,"state",{error:null})}static getDerivedStateFromError(n){return{error:n}}render(){var n;return this.state.error?m.jsxs("div",{className:"crash",role:"alert",children:[m.jsx("h3",{children:"这个页面炸了"}),m.jsx("pre",{children:String(((n=this.state.error)==null?void 0:n.stack)||this.state.error)}),m.jsx("button",{type:"button",onClick:()=>this.setState({error:null}),children:"重试"})]}):this.props.children}}function Op(e,t){return String(e.entries.indexOf(t)+1).padStart(2,"0")}function Uh({demos:e,pathname:t}){var l;const{groups:n,entries:o,label:r}=e,s=(l=o.find(c=>t===`/demo/${c.meta.slug}`))==null?void 0:l.meta.group,[i,a]=x.useState(()=>{var u;const c=(u=n[0])==null?void 0:u.key;return Object.fromEntries(n.map(d=>[d.key,d.key===(s??c)]))});return x.useEffect(()=>{s&&a(c=>c[s]?c:{...c,[s]:!0})},[s]),m.jsxs("div",{className:"nav-section",children:[m.jsxs("div",{className:"nav-section-head",children:[m.jsx("span",{children:r}),m.jsxs("code",{children:[o.length," demos"]})]}),n.map(c=>{const u=o.filter(p=>p.meta.group===c.key);if(u.length===0)return null;const d=i[c.key]??!1;return m.jsxs("div",{className:"nav-group",children:[m.jsxs("button",{type:"button",className:`nav-group-head${s===c.key?" is-current":""}`,onClick:()=>a(p=>({...p,[c.key]:!d})),"aria-expanded":d,children:[m.jsx("span",{className:`nav-caret${d?" is-open":""}`,"aria-hidden":!0,children:"▸"}),c.label,m.jsx("code",{children:u.length})]}),d?m.jsx("div",{className:"nav-list",children:u.map(p=>m.jsxs(la,{to:`/demo/${p.meta.slug}`,className:`nav-sub${t===`/demo/${p.meta.slug}`?" is-active":""}`,children:[m.jsx("em",{"aria-hidden":!0,children:Op(e,p)}),p.meta.title]},p.meta.slug))}):null]},c.key)})]})}function Fh({demos:e}){var a;const{slug:t}=ph(),{entries:n,detail:o}=e,r=t?n.find(l=>l.meta.slug===t):void 0,s=(a=n[0])==null?void 0:a.meta.slug;if(!r)return m.jsx(sa,{to:s?`/demo/${s}`:"/",replace:!0});const i=n.indexOf(r)+1;return m.jsx(N.Fragment,{children:o(r,i)},r.meta.slug)}function Wh({config:e}){var d,p;const{pathname:t}=qn(),[n,o]=x.useState(!1),[r,s]=x.useState(!1);x.useEffect(()=>o(!1),[t]);const i=x.useCallback(()=>s(f=>!f),[]);x.useEffect(()=>{const f=v=>{const w=v.target,b=w&&(w.tagName==="INPUT"||w.tagName==="TEXTAREA"||w.isContentEditable);v.key==="Escape"&&o(!1),!b&&(v.key==="g"||v.key==="G")&&!v.metaKey&&!v.ctrlKey&&s(h=>!h)};return window.addEventListener("keydown",f),()=>window.removeEventListener("keydown",f)},[]);const a=e.demos,l=(d=a.entries[0])==null?void 0:d.meta.slug,c=x.useMemo(()=>{if(!t.startsWith("/demo"))return e.crumb(t);const f=t.replace(/^\/demo\/?/,""),v=a.entries.find(w=>w.meta.slug===f);return v?`demo ${Op(a,v)} · ${v.meta.title}`:"demo · 逐项示例"},[t,e,a]),u=x.useMemo(()=>e.nav.map((f,v)=>({...f,no:String(v+1).padStart(2,"0")})),[e.nav]);return m.jsxs("div",{className:`shell${n?" is-nav-open":""}${r?" is-guides":""}`,children:[m.jsx("a",{className:"skip-link",href:"#main",onClick:f=>{f.preventDefault();const v=document.getElementById("main");v==null||v.setAttribute("tabindex","-1"),v==null||v.focus(),v==null||v.scrollIntoView({block:"start"})},children:"跳到内容"}),m.jsxs("aside",{className:"side","aria-label":"站点导航",children:[m.jsxs(la,{to:"/",className:"brand",children:[m.jsx("span",{className:"brand-mark","aria-hidden":!0,children:e.brand}),m.jsxs("span",{children:[m.jsx("strong",{children:e.pkg}),m.jsx("em",{children:e.subtitle})]})]}),m.jsxs("nav",{children:[u.map(f=>m.jsxs(la,{to:f.to,className:`nav-item${t===f.to?" is-active":""}`,"aria-current":t===f.to?"page":void 0,children:[m.jsx("em",{"aria-hidden":!0,children:f.no}),m.jsx("span",{children:f.label}),f.hint?m.jsx("code",{children:f.hint}):null]},f.to)),m.jsx(Uh,{demos:e.demos,pathname:t})]}),m.jsxs("div",{className:"side-foot",children:[m.jsx("p",{children:e.footer[0]}),m.jsx("p",{className:"muted",children:e.footer[1]})]})]}),m.jsx("button",{type:"button",className:"scrim","aria-label":"关闭导航",tabIndex:n?0:-1,onClick:()=>o(!1)}),m.jsxs("div",{className:"main",id:"main",children:[m.jsxs("header",{className:"topbar",children:[m.jsx("button",{type:"button",className:"nav-toggle","aria-label":n?"关闭导航":"打开导航","aria-expanded":n,onClick:()=>o(f=>!f),children:m.jsx("span",{"aria-hidden":!0})}),m.jsx("span",{className:"crumb",children:c}),m.jsxs("div",{className:"topbar-right",children:[(p=e.stats)==null?void 0:p.map(f=>m.jsxs("span",{className:"topbar-stat",title:f.title,children:[m.jsx("b",{children:f.value})," ",f.label]},f.label)),m.jsxs("button",{type:"button",className:"topbar-btn","aria-pressed":r,onClick:i,title:"显示栏位参考线（快捷键 G）",children:[m.jsx("i",{"aria-hidden":!0}),"guides"]}),m.jsx("a",{className:"topbar-link",href:e.sourceUrl??Ah,target:"_blank",rel:"noreferrer",children:"source ↗"})]})]}),m.jsx("div",{className:"guides","aria-hidden":!0}),m.jsx(x.Suspense,{fallback:m.jsx("div",{className:"loading",children:"loading modules…"}),children:m.jsx(Bh,{children:m.jsxs(kh,{children:[e.routes.map(f=>m.jsx(po,{path:f.path,element:f.element},f.path)),m.jsx(po,{path:"/demo",element:m.jsx(sa,{to:l?`/demo/${l}`:"/",replace:!0})}),m.jsx(po,{path:"/demo/:slug",element:m.jsx(Fh,{demos:e.demos})}),m.jsx(po,{path:"*",element:m.jsx(sa,{to:"/",replace:!0})})]})})})]})]})}function Vh({config:e}){return m.jsx(Mh,{children:m.jsx(Wh,{config:e})})}const Hh="modulepreload",Gh=function(e,t){return new URL(e,t).href},Nc={},C=function(t,n,o){let r=Promise.resolve();if(n&&n.length>0){const i=document.getElementsByTagName("link"),a=document.querySelector("meta[property=csp-nonce]"),l=(a==null?void 0:a.nonce)||(a==null?void 0:a.getAttribute("nonce"));r=Promise.allSettled(n.map(c=>{if(c=Gh(c,o),c in Nc)return;Nc[c]=!0;const u=c.endsWith(".css"),d=u?'[rel="stylesheet"]':"";if(!!o)for(let v=i.length-1;v>=0;v--){const w=i[v];if(w.href===c&&(!u||w.rel==="stylesheet"))return}else if(document.querySelector(`link[href="${c}"]${d}`))return;const f=document.createElement("link");if(f.rel=u?"stylesheet":Hh,u||(f.as="script"),f.crossOrigin="",f.href=c,l&&f.setAttribute("nonce",l),document.head.appendChild(f),u)return new Promise((v,w)=>{f.addEventListener("load",v),f.addEventListener("error",()=>w(new Error(`Unable to preload CSS for ${c}`)))})}))}function s(i){const a=new Event("vite:preloadError",{cancelable:!0});if(a.payload=i,window.dispatchEvent(a),!a.defaultPrevented)throw i}return r.then(i=>{for(const a of i||[])a.status==="rejected"&&s(a.reason);return t().catch(s)})},qh=`import {
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
`,Qh=`import {
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
`,Kh=`import {
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
`,Yh=`import {
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
`,Xh=`import {
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
`,Zh=`import {
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
`,Jh=`import {
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
`,e0=`import {
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
`,t0=`import {
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
`,n0=`import {
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
`,o0=`import {
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
`,r0=`import {
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
`,s0=`import {
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

`,i0=`import {
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

`,a0=`import {
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
`,c0=`import * as ReactWindow from "react-window";

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
`,d0="A11yPlugin",p0="无障碍支持：将装饰性图片设为 aria-hidden、自定义 aria-label、注入 role=img 与 aria-busy，并通过 aria-live 区域播报加载状态，提升读屏可用性。",m0="2.0.0",g0=["a11y","可访问性","SEO"],f0=[{name:"onMount",when:"组件挂载完成、插件注册后执行一次（返回的清理函数在 manager.clear 时逆序执行）",description:"初始化副作用：注册监听、起定时器、建观察器；必须返回清理函数或配合 onUnmount 收尾"},{name:"renderOverlay",when:"每次渲染，覆盖在图片容器之上",description:"骨架屏、错误占位、水印、加载动画"}],h0=[],y0="只读取 context 字段（props / state / data），不调用上下文方法",v0=[{name:"enabled",type:"boolean",default:"true",description:"是否启用无障碍增强"},{name:"decorative",type:"boolean",default:"false",description:"标记为装饰性图片（aria-hidden=true 并清空 alt）"},{name:"ariaLabel",type:"string | ((ctx) => string)",default:"undefined",description:"自定义 aria-label（函数型，参见用法示例）"},{name:"statusText",type:"{ loading?; loaded?; error? }",default:"undefined",description:"视觉隐藏的状态播报文本"}],w0=`const A11yImage = withPlugins(LazyLoadImageCore, [
  createA11yPlugin({
    ariaLabel: (ctx) => \`商品主图 \${ctx.src}\`,
    statusText: { loading: "加载中…", loaded: "已加载", error: "加载失败" },
  }),
]);

// 装饰性图片也可直接跳过读屏
<A11yImage src="https://picsum.photos/id/1015/500/300" alt="" />;`,x0=[{name:"装饰性图片",description:"decorative=true 时清空 alt 并设 aria-hidden，读屏跳过。",src:"https://picsum.photos/id/1015/500/300",config:{decorative:!0}},{name:"自定义 aria-label（字符串）",description:"为图片设置区别于 alt 的 aria-label。",src:"https://picsum.photos/id/1021/500/300",config:{ariaLabel:"商品主图"}},{name:"加载状态播报",description:"视觉隐藏区域以 aria-live 播报加载中/完成/失败。",src:"https://picsum.photos/id/1026/500/300",config:{statusText:{loading:"加载中…",loaded:"已加载",error:"加载失败"}}}],b0=["装饰性图片 aria-hidden","自定义 aria-label（字符串或函数）","role=img 明确语义","aria-busy 随加载态切换","aria-live 状态播报（视觉隐藏）","可关闭"],P0=["无障碍合规（WCAG）","读屏器适配","装饰性背景图","加载状态可读"],$0=["ariaLabel 支持函数型，但静态预览仅支持字符串；函数用法见用法示例。"],S0={name:d0,description:p0,since:m0,tags:g0,events:f0,methods:h0,methodsNote:y0,config:v0,example:w0,examples:x0,features:b0,useCases:P0,notes:$0},C0="AdaptiveQualityPlugin",L0="自适应画质：根据网络类型（effectiveType）与省流模式（saveData）动态调整图片质量参数，弱网/省流自动降质，支持 realtime 实时监听。",I0="2.0.0",k0=["other","网络","性能","省流量"],_0=[{name:"onMount",when:"组件挂载完成、插件注册后执行一次（返回的清理函数在 manager.clear 时逆序执行）",description:"初始化副作用：注册监听、起定时器、建观察器；必须返回清理函数或配合 onUnmount 收尾"},{name:"transformProps",when:"渲染前链式改写图片 props",description:"补 sizes / 占位色 / 解码策略等"}],E0=[],R0="只读取 context 字段（props / state / data），不调用上下文方法",z0=[{name:"lowQ",type:"number",default:"40(2g/3g)",description:"低速网络质量值(1~100)"},{name:"highQ",type:"number",default:"80(4g)",description:"高速网络质量值(1~100)"},{name:"saveDataQuality",type:"number",default:"35",description:"省流模式质量值(1~100)"},{name:"overrideEffectiveType",type:'"4g" | "3g" | "2g" | "slow-2g"',default:"undefined",description:"Demo/测试覆盖网络类型"},{name:"overrideSaveData",type:"boolean",default:"undefined",description:"Demo/测试覆盖省流开关"},{name:"mode",type:'"once" | "realtime"',default:'"once"',description:"once 仅初始一次 / realtime 监听变化"}],O0=`const AqImage = withPlugins(LazyLoadImageCore, [
  createAdaptiveQualityPlugin({ lowQ: 45, highQ: 85, mode: "realtime" }),
]);

<AqImage src="https://picsum.photos/id/1015/500/300" alt="自适应画质示例" />;`,D0=[{name:"默认一次性调速",description:"初始按网络设置质量，加载一次。",src:"https://picsum.photos/id/1015/500/300",config:{mode:"once"}},{name:"实时监听网络",description:"mode=realtime，网络变化时自动重新计算质量。",src:"https://picsum.photos/id/1021/500/300",config:{mode:"realtime"}},{name:"模拟弱网降质",description:"overrideEffectiveType=2g，演示低速下自动降质。",src:"https://picsum.photos/id/1026/500/300",config:{overrideEffectiveType:"2g",overrideSaveData:!0}}],M0=["按网络类型调速","省流模式降质","realtime 实时监听","手动覆盖（Demo）","质量参数可配"],j0=["弱网体验优化","流量节省","全球 CDN 适配","移动端画质策略"],T0=["overrideEffectiveType / overrideSaveData 仅用于 Demo 测试覆盖真实网络信息；质量参数通过 URL ?q= 注入，适用于支持该参数的图床。"],N0={name:C0,description:L0,since:I0,tags:k0,events:_0,methods:E0,methodsNote:R0,config:z0,example:O0,examples:D0,features:M0,useCases:j0,notes:T0},A0="AltTextPlugin",B0="替代文本：当图片未提供 alt 时，按前缀或自定义 derive 函数自动生成 alt，提升可访问性与 SEO；已有 alt 则不覆盖。",U0="2.0.0",F0=["a11y","可访问性","SEO"],W0=[{name:"transformProps",when:"渲染前链式改写图片 props",description:"补 sizes / 占位色 / 解码策略等"}],V0=[],H0="只读取 context 字段（props / state / data），不调用上下文方法",G0=[{name:"derive",type:"(src: string) => string",default:"undefined",description:"自定义推导函数（函数型，参见用法示例）"},{name:"prefix",type:"string",default:'"Image"',description:'默认推导前缀（如 "Image"）'}],q0=`const AltImage = withPlugins(LazyLoadImageCore, [
  createAltTextPlugin({
    derive: (src) => \`图片 \${new URL(src).pathname}\`,
  }),
]);

// 不传 alt 时自动补全；传了 alt 则不覆盖
<AltImage src="https://picsum.photos/id/1015/500/300" alt="" />;`,Q0=[{name:"默认前缀派生",description:"不传 alt，按 prefix 自动生成 alt。",src:"https://picsum.photos/id/1015/500/300",config:{prefix:"产品图"}},{name:"已有 alt 不覆盖",description:"传入 alt 时插件保留原值，不做替换。",src:"https://picsum.photos/id/1021/500/300",config:{prefix:"Image"}}],K0=["alt 缺失自动派生","自定义前缀","自定义 derive 函数","不覆盖已有 alt"],Y0=["批量图片 alt 补全","SEO 优化","读屏适配","用户未填 alt 兜底"],X0=["derive 为函数型配置，静态预览仅支持 prefix；函数用法见用法示例。"],Z0={name:A0,description:B0,since:U0,tags:F0,events:W0,methods:V0,methodsNote:H0,config:G0,example:q0,examples:Q0,features:K0,useCases:Y0,notes:X0},J0="AnimatedCursorPlugin",ey="自定义光标动画：为图片叠加系统光标（放大镜/十字/抓手等）或自定义光标（圆点/圆环/加号）+ 跟随动画 + 点击涟漪 + 文字提示，纯 CSS+JS 无依赖。",ty="2.0.0",ny=["interaction","视觉效果与交互","visual"],oy=[{name:"renderOverlay",when:"每次渲染，覆盖在图片容器之上",description:"骨架屏、错误占位、水印、加载动画"}],ry=[],sy="只读取 context 字段（props / state / data），不调用上下文方法",iy=[{name:"style",type:'"zoom-in" | "zoom-out" | "pointer" | "crosshair" | "move" | "grab" | "custom-dot" | "custom-ring" | "custom-plus" | "none"',default:'"zoom-in"',description:"光标样式"},{name:"enableFollower",type:"boolean",default:"true",description:"是否启用跟随光标"},{name:"followerColor",type:"string",default:'"rgba(59, 130, 246, 0.5)"',description:"跟随光标颜色"},{name:"followerSize",type:"number",default:"40",description:"跟随光标大小（px）"},{name:"followerDelay",type:"number",default:"0.1",description:"跟随延迟系数（越大越跟手）"},{name:"scaleOnHover",type:"boolean",default:"true",description:"悬停时跟随光标缩放"},{name:"hoverScale",type:"number",default:"1.5",description:"悬停缩放比例"},{name:"customIcon",type:"string",default:'""',description:"自定义光标图标 URL"},{name:"cursorText",type:"string",default:'""',description:"光标附带文字"},{name:"showRipple",type:"boolean",default:"false",description:"点击时产生涟漪"}],ay=`// 1. 放大镜光标 + 蓝色跟随圆点
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
});`,ly=[{name:"zoom-in 放大镜 + 跟随圆点",description:"系统放大镜光标，叠加半透明蓝色跟随圆点，暗示可放大查看。",src:"https://picsum.photos/id/110/400/300",config:{style:"zoom-in",enableFollower:!0,followerColor:"rgba(59,130,246,0.5)",followerSize:40}},{name:"custom-dot 自定义圆点 + 点击涟漪",description:"自定义圆点跟随光标，点击产生涟漪动画，互动感强。",src:"https://picsum.photos/id/119/400/300",config:{style:"custom-dot",showRipple:!0,followerSize:44,followerColor:"rgba(255,99,132,0.5)"}},{name:"custom-ring 圆环 + 文字提示",description:"圆环跟随光标并附带文字提示，适合“查看大图”引导。",src:"https://picsum.photos/id/122/400/300",config:{style:"custom-ring",cursorText:"查看大图",followerSize:56,followerColor:"rgba(16,185,129,0.6)"}},{name:"crosshair 十字光标",description:"十字准星光标，适合素材 / 设计类站点定位。",src:"https://picsum.photos/id/129/400/300",config:{style:"crosshair",enableFollower:!0,followerSize:36}},{name:"custom-plus 加号光标",description:"加号光标，强调“可添加 / 收藏”等操作。",src:"https://picsum.photos/id/133/400/300",config:{style:"custom-plus",enableFollower:!0,followerSize:40,scaleOnHover:!0}}],cy=["10 种光标样式（系统光标 + 自定义圆点 / 圆环 / 加号）","跟随光标：颜色、大小、延迟系数可调","悬停时跟随光标缩放","点击涟漪动画","可附带文字提示","支持自定义图标 URL","纯 CSS + 轻量 JS，无依赖"],uy=["商品详情放大预览","画廊 / 素材站点","设计工具类页面","交互演示与引导","收藏 / 添加操作的视觉暗示","创意作品集"],dy=["效果需鼠标在图片上移动 / 悬停 / 点击才会体现，静态截图仅展示初始态。","移动端无指针设备，建议配合触摸反馈降级，或仅保留 enableFollower 等轻效果。"],py={name:J0,description:ey,since:ty,tags:ny,events:oy,methods:ry,methodsNote:sy,config:iy,example:ay,examples:ly,features:cy,useCases:uy,notes:dy},my="AntiHotlinkPlugin",gy="防盗链：为图片 URL 追加动态签名 token 或 referer 标记，配合域名白名单与 referer 校验，防止资源被第三方直链盗用。",fy="2.0.0",hy=["network","网络","防盗链","签名"],yy=[{name:"transformProps",when:"渲染前链式改写图片 props",description:"补 sizes / 占位色 / 解码策略等"}],vy=[],wy="只读取 context 字段（props / state / data），不调用上下文方法",xy=[{name:"allowedDomains",type:"string[]",description:"域名白名单；仅放行列表内域，其余源原样通过"},{name:"checkReferer",type:"boolean",default:"false",description:"无 referrer 时附加 ref=direct 标记（仅浏览器环境有效）"},{name:"generateToken",type:"(src: string) => string | undefined",description:"为 URL 生成签名 token（函数型，仅顶层示例展示）"},{name:"tokenParam",type:"string",default:'"token"',description:"追加到查询参数的键名"}],by=`import { LazyLoadImageCore, createAntiHotlinkPlugin, withPlugins } from "vane-lazy-image";

const LazyImage = withPlugins(LazyLoadImageCore, [
  createAntiHotlinkPlugin({
    generateToken: (src) => signSrc(src),
    tokenParam: "sig",
    allowedDomains: ["images.example.com"],
  }),
]);

<LazyImage src="https://images.example.com/photo.jpg" alt="防盗链示例" />`,Py=[{name:"白名单 + referer 校验",description:"仅放行 picsum.photos；无 referer 时附加 ref=direct 标记。",src:"https://picsum.photos/seed/hotlink/800/600",config:{allowedDomains:["picsum.photos"],checkReferer:!0}},{name:"仅域名白名单放行",description:"命中白名单则原样通过，否则不注入任何参数。",src:"https://picsum.photos/seed/hotlink-2/800/600",config:{allowedDomains:["picsum.photos"]}}],$y=["generateToken 为 URL 追加签名参数，防直链盗用","allowedDomains 白名单：仅放行指定域，其余原样通过","checkReferer：无 referrer 时附加 ref=direct 标记","通用参数追加兜底（无 URL 对象时拼接 query）"],Sy=["OSS / 云存储等需签名才能访问的图片","限制仅本站 referer 可加载"],Cy=["generateToken 为函数型，无法进入静态预览配置，仅顶层示例展示","allowedDomains 为空时对所有源注入 token","checkReferer 仅在浏览器环境有效"],Ly={name:my,description:gy,since:fy,tags:hy,events:yy,methods:vy,methodsNote:wy,config:xy,example:by,examples:Py,features:$y,useCases:Sy,notes:Cy},Iy="AspectRatioSpacerPlugin",ky="宽高比占位：在容器上预留固定宽高比，图片加载前后保持布局稳定，杜绝 CLS（布局抖动）。",_y="2.0.0",Ey=["a11y","可访问性","视觉"],Ry=[{name:"onMount",when:"组件挂载完成、插件注册后执行一次（返回的清理函数在 manager.clear 时逆序执行）",description:"初始化副作用：注册监听、起定时器、建观察器；必须返回清理函数或配合 onUnmount 收尾"},{name:"transformProps",when:"渲染前链式改写图片 props",description:"补 sizes / 占位色 / 解码策略等"}],zy=[],Oy="只读取 context 字段（props / state / data），不调用上下文方法",Dy=[{name:"ratio",type:"number",default:"4/3",description:"宽/高比，如 4/3、16/9，或直接传数字"}],My=`const RatioImage = withPlugins(LazyLoadImageCore, [
  createAspectRatioSpacerPlugin({ ratio: 4 / 3 }),
]);

<RatioImage src="https://picsum.photos/id/1015/500/300" alt="宽高比占位示例" />;`,jy=[{name:"4:3 占位",description:"常见图文比例，加载前后无跳动。",src:"https://picsum.photos/id/1015/500/300",config:{ratio:1.3333}},{name:"16:9 占位",description:"视频/横幅比例。",src:"https://picsum.photos/id/1021/500/300",config:{ratio:1.7778}},{name:"正方形占位",description:"ratio=1，头像/方形卡片。",src:"https://picsum.photos/id/1026/500/300",config:{ratio:1}}],Ty=["预留宽高比","基于 CSS aspect-ratio","防布局抖动（CLS）","任意比例"],Ny=["瀑布流/列表占位","LCP 稳定","移动端响应式","避免滚动跳动"],Ay=["ratio 在静态预览中建议传数字（如 1.3333 表示 4/3），便于配置表与查看源码展示。"],By={name:Iy,description:ky,since:_y,tags:Ey,events:Ry,methods:zy,methodsNote:Oy,config:Dy,example:My,examples:jy,features:Ty,useCases:Ny,notes:Ay},Uy="AuthPlugin",Fy="鉴权：为私有图片 URL 追加访问凭证 token（查询参数），并可配置 crossOrigin 与 referrerPolicy，满足需登录态才能访问的图片源鉴权需求。",Wy="2.0.0",Vy=["network","网络","鉴权","私有资源"],Hy=[{name:"transformProps",when:"渲染前链式改写图片 props",description:"补 sizes / 占位色 / 解码策略等"}],Gy=[],qy="只读取 context 字段（props / state / data），不调用上下文方法",Qy=[{name:"token",type:"string | (() => string | undefined)",description:"访问凭证；支持函数动态获取（函数型仅顶层示例展示）"},{name:"tokenParam",type:"string",description:"追加到查询参数的键名"},{name:"crossOrigin",type:'"anonymous" | "use-credentials"',description:"img 的 crossOrigin 属性"},{name:"referrerPolicy",type:"React.HTMLAttributeReferrerPolicy",description:"img 的 referrerPolicy 属性"}],Ky=`import { LazyLoadImageCore, createAuthPlugin, withPlugins } from "vane-lazy-image";

const LazyImage = withPlugins(LazyLoadImageCore, [
  createAuthPlugin({
    token: () => getAccessToken(),
    tokenParam: "token",
    crossOrigin: "anonymous",
  }),
]);

<LazyImage src="https://private.example.com/photo.jpg" alt="鉴权示例" />`,Yy=[{name:"静态 token",description:"为图片 URL 追加固定访问凭证参数。",src:"https://picsum.photos/seed/auth/800/600",config:{token:"sk-demo-123",tokenParam:"token"}},{name:"跨域 + 无 referrer",description:"追加凭证的同时配置跨域与 referrer 策略。",src:"https://picsum.photos/seed/auth-2/800/600",config:{token:"sk-demo-123",crossOrigin:"anonymous",referrerPolicy:"no-referrer"}}],Xy=["为图片 URL 追加 token 查询参数完成鉴权","支持 crossOrigin / referrerPolicy 跨域鉴权配置","token 支持函数动态获取（如刷新令牌）"],Zy=["需登录态才能访问的私有图片 / 云存储","带鉴权的用户头像 / 相册"],Jy=["token 函数型仅顶层示例展示；静态字符串可直接用于静态预览","与 AntiHotlink 区别：Auth 注入访问凭证，AntiHotlink 注入防盗链签名，二者可叠加","tokenParam 已存在则不重复追加"],ev={name:Uy,description:Fy,since:Wy,tags:Vy,events:Hy,methods:Gy,methodsNote:qy,config:Qy,example:Ky,examples:Yy,features:Xy,useCases:Zy,notes:Jy},tv="BadgePlugin",nv="角标徽章：在图片四角或中心叠加文字徽章，可按加载状态（always/loading/loaded/error）显示，支持自定义文字、颜色、字号与形状。",ov="2.0.0",rv=["other","视觉","徽标"],sv=[{name:"renderOverlay",when:"每次渲染，覆盖在图片容器之上",description:"骨架屏、错误占位、水印、加载动画"}],iv=[],av="只读取 context 字段（props / state / data），不调用上下文方法",lv=[{name:"text",type:"string | ((context) => string)",default:'"Badge"',description:"徽章文字（支持函数动态生成）"},{name:"position",type:'"top-left" | "top-right" | "bottom-left" | "bottom-right" | "center"',default:'"top-left"',description:"徽章位置（四角或中心）"},{name:"bgColor",type:"string",default:'"rgba(0,0,0,0.6)"',description:"背景色"},{name:"color",type:"string",default:'"#fff"',description:"文字色"},{name:"fontSize",type:"number",default:"12",description:"字号(px)"},{name:"padding",type:"string",default:'"2px 6px"',description:"内边距"},{name:"borderRadius",type:"number",default:"4",description:"圆角(px)"},{name:"zIndex",type:"number",default:"3",description:"层级"},{name:"showWhen",type:'"always" | "loading" | "loaded" | "error"',default:'"loaded"',description:"显示时机"},{name:"enabled",type:"boolean",default:"true",description:"是否启用"}],cv=`const BadgeImage = withPlugins(LazyLoadImageCore, [
  createBadgePlugin({ text: "NEW", position: "top-left", bgColor: "#c62828", showWhen: "always" }),
]);

<BadgeImage src="https://picsum.photos/id/1015/500/300" alt="角标示例" />;`,uv=[{name:"常驻徽标",description:"左上角红色 NEW 徽标，始终显示。",src:"https://picsum.photos/id/1015/500/300",config:{text:"NEW",position:"top-left",bgColor:"#c62828",showWhen:"always"}},{name:"加载时显示",description:"加载中显示 Loading 徽标，加载完成隐藏。",src:"https://picsum.photos/id/1021/500/300",config:{text:"Loading",position:"top-right",bgColor:"rgba(0,0,0,0.6)",showWhen:"loading"}},{name:"加载成功后显示",description:"加载完成后显示 Done 徽标。",src:"https://picsum.photos/id/1026/500/300",config:{text:"Done",position:"bottom-right",bgColor:"#2e7d32",showWhen:"loaded"}},{name:"自定义样式",description:"橙色大字号圆角徽标，居中。",src:"https://picsum.photos/id/1031/500/300",config:{text:"HOT",position:"center",bgColor:"#b35c00",color:"#fff",fontSize:16,borderRadius:20}}],dv=["角标 / 中心两种布局","五位置（四角 + 中心）","按加载状态显示","自定义文字/颜色/字号/圆角","支持函数文案","可关闭"],pv=["商品标签","状态提示","进度/完成标记","活动角标"],mv=["text 支持函数型（按 context 动态生成），静态预览仅支持字符串；函数用法见用法示例。"],gv={name:tv,description:nv,since:ov,tags:rv,events:sv,methods:iv,methodsNote:av,config:lv,example:cv,examples:uv,features:dv,useCases:pv,notes:mv},fv="BatteryAwarePlugin",hv="电量感知：当设备电量低于阈值或开启省流模式时，自动将图片请求宽度降级并禁用预连接，兼顾体验与续航/流量。",yv="2.0.0",vv=["other","加载策略","性能","省流量"],wv=[{name:"onLoad",when:"加载流程开始、需要确定最终图片地址时",description:"自定义加载逻辑，返回最终图片 URL（objectURL / dataURL / 原地址）"},{name:"transformProps",when:"渲染前链式改写图片 props",description:"补 sizes / 占位色 / 解码策略等"}],xv=[],bv="只读取 context 字段（props / state / data），不调用上下文方法",Pv=[{name:"enabled",type:"boolean",default:"true",description:"是否启用"},{name:"lowBatteryThreshold",type:"number",default:"0.2",description:"低电量阈值(0~1)"},{name:"downgradeWidth",type:"number",default:"640",description:"降级时的请求宽度(px)"},{name:"disablePreconnect",type:"boolean",default:"true",description:"低电量时是否禁用预连接"}],$v=`const BatteryImage = withPlugins(LazyLoadImageCore, [
  createBatteryAwarePlugin({ lowBatteryThreshold: 0.3, downgradeWidth: 480 }),
]);

<BatteryImage src="https://picsum.photos/id/1015/500/300" alt="电量感知示例" />;`,Sv=[{name:"默认降级",description:"电量<20% 或省流时降宽至 640 并禁用预连接。",src:"https://picsum.photos/id/1015/500/300",config:{enabled:!0}},{name:"放宽阈值",description:"电量<30% 才降级，更保守。",src:"https://picsum.photos/id/1021/500/300",config:{lowBatteryThreshold:.3}},{name:"保留预连接",description:"disablePreconnect=false，降级时仍允许预连接。",src:"https://picsum.photos/id/1026/500/300",config:{disablePreconnect:!1}}],Cv=["低电量自动降宽","省流模式联动","可禁用预连接","可关闭"],Lv=["移动端续航优化","流量节省","弱网/低电场景","全球低端设备"],Iv=["依赖 navigator.getBattery() 与网络 saveData；不支持的环境（如桌面/无该 API）不降级，不影响加载。"],kv={name:fv,description:hv,since:yv,tags:vv,events:wv,methods:xv,methodsNote:bv,config:Pv,example:$v,examples:Sv,features:Cv,useCases:Lv,notes:Iv},_v="BlurUpPlugin",Ev="模糊放大占位：加载期为图片注入 blur 滤镜，加载成功后过渡到清晰，避免「白屏 → 清晰图」的突兀切换。",Rv="2.0.0",zv=["visual","视觉"],Ov=[{name:"transformProps",when:"渲染前链式改写图片 props",description:"补 sizes / 占位色 / 解码策略等"}],Dv=[],Mv="只读取 context 字段（props / state / data），不调用上下文方法",jv=[{name:"startBlur",type:"number",default:"8",description:"起始模糊半径 px"},{name:"endBlur",type:"number",default:"0",description:"结束模糊半径 px"},{name:"durationMs",type:"number",default:"400",description:"过渡时长 ms"}],Tv=`// 模糊渐显：从 8px 模糊过渡到清晰
const BlurImage = withPlugins(LazyLoadImageCore, [
  createBlurUpPlugin({
    startBlur: 8,
    endBlur: 0,
    durationMs: 450,
  }),
]);

<BlurImage src="https://picsum.photos/seed/blurup/600/400" alt="模糊渐显" />;`,Nv=[{name:"柔和模糊渐显",description:"8px 起始模糊，450ms 平滑过渡到清晰。",src:"https://picsum.photos/seed/blurup-soft/600/400",config:{startBlur:8,endBlur:0,durationMs:450}},{name:"强模糊长过渡",description:"16px 大模糊，700ms 慢过渡，营造「水雾散去」感。",src:"https://picsum.photos/seed/blurup-strong/600/400",config:{startBlur:16,endBlur:0,durationMs:700}}],Av=["加载期模糊占位，避免白屏突兀","加载成功平滑过渡到清晰","起始 / 结束模糊与时长可调","常与 Skeleton / LQIP 配合"],Bv=["图片画廊 / 相册","首屏大图加载","内容型站点图片过渡","与骨架屏互补的视觉占位"],Uv=["与 Skeleton 叠加时建议 blur 图层级略高于骨架，过渡更自然。","durationMs 过大会让「清晰」显得迟缓，一般 300~500ms 为宜。"],Fv={name:_v,description:Ev,since:Rv,tags:zv,events:Ov,methods:Dv,methodsNote:Mv,config:jv,example:Tv,examples:Nv,features:Av,useCases:Bv,notes:Uv},Wv="BorderGlowPlugin",Vv="边框光晕：加载成功后为卡片应用发光阴影，悬停时增强。",Hv="2.0.0",Gv=["visual","视觉"],qv=[{name:"onUnmount",when:"组件卸载前执行一次",description:"释放监听、定时器与观察器；与 onMount 成对出现，避免泄漏"},{name:"onLoadSuccess",when:"图片成功解码可显示时",description:"拿到最终 displaySrc 做后续动作（上报、预取下张、淡入）"}],Qv=[],Kv="只读取 context 字段（props / state / data），不调用上下文方法",Yv=[{name:"color",type:"string",default:"rgba(0, 153, 255, 0.6)",description:"辉光颜色"},{name:"blurPx",type:"number",default:"12",description:"辉光模糊半径 px"},{name:"spreadPx",type:"number",default:"2",description:"辉光扩散 px"},{name:"hoverMultiplier",type:"number",default:"1.4",description:"悬停时辉光强度倍数"}],Xv=`// 加载成功后卡片发光，悬停增强
const GlowImage = withPlugins(LazyLoadImageCore, [
  createBorderGlowPlugin({
    color: "rgba(0, 153, 255, 0.6)",
    blurPx: 12,
    spreadPx: 2,
    hoverMultiplier: 1.4,
  }),
]);

<GlowImage src="https://picsum.photos/seed/glow/600/400" alt="边框辉光" />;`,Zv=[{name:"基础辉光",description:"蓝色柔光，悬停轻微增强，突出主体卡片。",src:"https://picsum.photos/seed/glow-basic/600/400",config:{color:"rgba(0, 153, 255, 0.6)",blurPx:12,spreadPx:2,hoverMultiplier:1.4}},{name:"强霓虹辉光",description:"品红大模糊半径，悬停强度放大约 1.6 倍。",src:"https://picsum.photos/seed/glow-neon/600/400",config:{color:"rgba(255, 0, 128, 0.7)",blurPx:24,spreadPx:4,hoverMultiplier:1.6}},{name:"柔和暖光",description:"暖橙色低饱和辉光，适配温馨主题。",src:"https://picsum.photos/seed/glow-warm/600/400",config:{color:"rgba(255, 170, 0, 0.5)",blurPx:18,spreadPx:2,hoverMultiplier:1.3}}],Jv=["加载成功后自动为卡片加发光阴影","悬停增强辉光强度","颜色 / 模糊 / 扩散均可调","智能定位外层卡片，避免被父容器 overflow 裁剪","卸载时自动还原原始阴影"],ew=["商品主图聚焦","精选 / 推荐位强调","卡片悬停交互反馈","暗色背景下的视觉点睛"],tw=["辉光优先作用在外层卡片（向上两层），以规避父容器 overflow:hidden 把光晕裁掉。","插件在 onUnmount 还原原始 box-shadow，不会污染其它样式。","与 CustomEffects 的 containerStyle 叠加时，两者都会合并进容器样式。"],nw={name:Wv,description:Vv,since:Hv,tags:Gv,events:qv,methods:Qv,methodsNote:Kv,config:Yv,example:Xv,examples:Zv,features:Jv,useCases:ew,notes:tw},ow="CDNFallbackPlugin",rw="CDN 回退：主 CDN 域名加载失败时，按序切换备用 CDN 域名（保留路径与查询参数），实现跨厂商容灾，避免单点故障导致破图。",sw="2.0.0",iw=["network","网络","CDN","容灾"],aw=[{name:"onUnmount",when:"组件卸载前执行一次",description:"释放监听、定时器与观察器；与 onMount 成对出现，避免泄漏"},{name:"onLoadError",when:"加载失败（网络错误、解码失败、超时）",description:"返回 true 表示错误已被处理（如切换备用源），否则继续走默认降级"},{name:"onSrcChange",when:"src 变化、切换到新图时",description:"重置状态、清理旧缓存、重新进入懒加载判定"}],lw=[],cw="只读取 context 字段（props / state / data），不调用上下文方法",uw=[{name:"cdnBases",type:"string[]",description:'备用 CDN 基址列表，首个即主用 CDN。e.g. ["https://cdn1.example.com", "https://cdn2.example.com"]'}],dw=`import { LazyLoadImageCore, createCDNFallbackPlugin, withPlugins } from "vane-lazy-image";

const LazyImage = withPlugins(LazyLoadImageCore, [
  createCDNFallbackPlugin({
    cdnBases: ["https://cdn1.example.com", "https://cdn2.example.com"],
  }),
]);

<LazyImage src="https://cdn0.example.com/photo.jpg" alt="CDN 回退示例" />`,pw=[{name:"多 CDN 回退",description:"主用 picsum.photos 命中；真实故障场景填入备用域名可自动切换（演示用同源避免 404）。",src:"https://picsum.photos/seed/cdn/800/600",config:{cdnBases:["https://picsum.photos","https://fastly.picsum.photos"]}}],mw=["onLoad 用 cdnBases[0] 作为主用 CDN 重写 host","onLoadError 按序切换下一个 CDN 并改写 img.src 触发重试","切换时保留路径 / 查询参数，附加 cdnFallback 缓存破坏参数"],gw=["多活 CDN、跨云厂商容灾","主源站故障时无缝切到备用源"],fw=["cdnBases 为必填，首个即主用 CDN","演示用同源 CDN 避免 404；生产请填入真实备用域名，主域失败会自动切换","切换逻辑替换协议 / host / port，路径与 query 不变"],hw={name:ow,description:rw,since:sw,tags:iw,events:aw,methods:lw,methodsNote:cw,config:uw,example:dw,examples:pw,features:mw,useCases:gw,notes:fw},yw="CacheIDBPlugin",vw="IndexedDB 持久缓存：跨会话缓存图片 Blob/dataURL，支持 TTL。",ww="2.0.0",xw=["cache","缓存"],bw=[{name:"onUnmount",when:"组件卸载前执行一次",description:"释放监听、定时器与观察器；与 onMount 成对出现，避免泄漏"},{name:"onLoad",when:"加载流程开始、需要确定最终图片地址时",description:"自定义加载逻辑，返回最终图片 URL（objectURL / dataURL / 原地址）"},{name:"onLoadSuccess",when:"图片成功解码可显示时",description:"拿到最终 displaySrc 做后续动作（上报、预取下张、淡入）"},{name:"onSrcChange",when:"src 变化、切换到新图时",description:"重置状态、清理旧缓存、重新进入懒加载判定"},{name:"cache:hit",when:"命中 IndexedDB 缓存、跳过网络请求时",description:"携带 { level, src }，可用于统计缓存命中率"}],Pw=[],$w="只读取 context 字段（props / state / data），不调用上下文方法",Sw=[{name:"enabled",type:"boolean",default:"true",description:"是否启用 IndexedDB 缓存（关闭后每次都走网络）"},{name:"dbName",type:"string",default:'"LLI-Cache"',description:"IndexedDB 数据库名，多实例共用同一个库"},{name:"storeName",type:"string",default:'"images"',description:"对象仓库名，缓存条目存在该 store 下"},{name:"ttlMs",type:"number",default:"604800000",description:"过期时间（毫秒）"},{name:"debug",type:"boolean",description:"是否输出读写 / 命中调试日志"}],Cw=`const LazyImage = withPlugins(LazyLoadImageCore, [
  createIDBCachePlugin({
    dbName: "LLI-Cache",
    storeName: "images",
    ttlMs: 7 * 24 * 60 * 60 * 1000, // 7 天
  }),
]);`,Lw=[{name:"默认持久缓存",description:"跨会话缓存图片 Blob，刷新 / 重开应用仍命中，秒开头部图。",config:{ttlMs:6048e5}},{name:"自定义库与过期",description:"独立库名隔离业务数据，30 天过期。",config:{dbName:"App-Img",storeName:"photos",ttlMs:2592e6}}],Iw=["用 IndexedDB 持久化图片 Blob / dataURL","支持 TTL（默认 7 天），过期自动清理","优先存 Blob，其次 dataURL，节省空间"],kw=["离线优先 / PWA 图片缓存","重开应用仍需秒开的头部图、用户头像"],_w=["仅在支持 IndexedDB 的环境生效，SSR / Node 端无副作用。","与 CachePrewarmPlugin 配合可实现“进入视口即落盘”。","多实例请使用不同 dbName / storeName 避免相互覆盖。"],Ew={name:yw,description:vw,since:ww,tags:xw,events:bw,methods:Pw,methodsNote:$w,config:Sw,example:Cw,examples:Lw,features:Iw,useCases:kw,notes:_w},Rw="CacheMemoryPlugin",zw="内存 LRU 缓存：会话内缓存图片数据，可配置容量与过期时间。",Ow="2.0.0",Dw=["cache","缓存"],Mw=[{name:"onUnmount",when:"组件卸载前执行一次",description:"释放监听、定时器与观察器；与 onMount 成对出现，避免泄漏"},{name:"onLoad",when:"加载流程开始、需要确定最终图片地址时",description:"自定义加载逻辑，返回最终图片 URL（objectURL / dataURL / 原地址）"},{name:"onLoadSuccess",when:"图片成功解码可显示时",description:"拿到最终 displaySrc 做后续动作（上报、预取下张、淡入）"},{name:"onSrcChange",when:"src 变化、切换到新图时",description:"重置状态、清理旧缓存、重新进入懒加载判定"}],jw=[],Tw="只读取 context 字段（props / state / data），不调用上下文方法",Nw=[{name:"enabled",type:"boolean",default:"true",description:"是否启用内存缓存"},{name:"maxEntries",type:"number",default:"200",description:"LRU 最大条目"},{name:"ttlMs",type:"number",description:"过期时间，默认不过期"},{name:"debug",type:"boolean",default:"false",description:"是否输出 LRU 命中 / 淘汰调试日志"}],Aw=`const LazyImage = withPlugins(LazyLoadImageCore, [
  createMemoryCachePlugin({
    maxEntries: 300,
    ttlMs: 5 * 60 * 1000, // 5 分钟过期
  }),
]);`,Bw=[{name:"默认内存缓存",description:"会话内 LRU 缓存（默认 200 条），同一图片重复访问零网络。",config:{maxEntries:200}},{name:"限定过期时间",description:"5 分钟后条目失效，在命中率与内存占用之间取得平衡。",config:{maxEntries:300,ttlMs:3e5}}],Uw=["会话内 LRU 缓存（默认 200 条）","可选 TTL 过期时间","内存受限时自动淘汰最久未用条目"],Fw=["同一图片在列表 / 详情多处复用","快速来回切换的画廊、相册"],Ww=["内存缓存不跨会话，刷新页面即失效。","需要跨会话持久请配合 IDBCachePlugin。","命中时直接返回已缓存数据，跳过网络请求。"],Vw={name:Rw,description:zw,since:Ow,tags:Dw,events:Mw,methods:jw,methodsNote:Tw,config:Nw,example:Aw,examples:Bw,features:Uw,useCases:Fw,notes:Ww},Hw="CachePrewarmPlugin",Gw="缓存预热：进入视口或挂载时把图片预热到内存/IDB 缓存。",qw="2.0.0",Qw=["cache","缓存"],Kw=[{name:"onMount",when:"组件挂载完成、插件注册后执行一次（返回的清理函数在 manager.clear 时逆序执行）",description:"初始化副作用：注册监听、起定时器、建观察器；必须返回清理函数或配合 onUnmount 收尾"},{name:"onEnterViewport",when:"元素进入视口（IntersectionObserver）",description:"触发懒加载、开始请求、曝光上报"},{name:"renderOverlay",when:"每次渲染，覆盖在图片容器之上",description:"骨架屏、错误占位、水印、加载动画"}],Yw=[],Xw="只读取 context 字段（props / state / data），不调用上下文方法",Zw=[{name:"enabled",type:"boolean",default:"true",description:"是否启用预热"},{name:"trigger",type:'"enter" | "mount"',default:'"enter"',description:"触发时机：进入视口或挂载"},{name:"preferMemory",type:"boolean",default:"true",description:"预热时优先写内存"},{name:"debug",type:"boolean",default:"false",description:"是否输出预热调试日志"},{name:"showBadge",type:"boolean",default:"false",description:"是否在卡片上显示预热状态徽标（便于观察）"}],Jw=`const LazyImage = withPlugins(LazyLoadImageCore, [
  createCachePrewarmPlugin({
    trigger: "enter",    // 进入视口即预热
    preferMemory: true,  // 优先写入内存缓存
  }),
]);`,e1=[{name:"进入视口预热",description:"图片刚进视口就提前取回并写入缓存，滚动时无等待、点击放大秒开。",config:{trigger:"enter",preferMemory:!0,showBadge:!0}},{name:"挂载即预热",description:"组件挂载即预热，适合首屏已知必看的图（如详情页主图）。",config:{trigger:"mount",preferMemory:!1}}],t1=["进入视口 / 挂载时提前 fetch 并写入 Memory / IDB 缓存","内置重入保护（prewarming / prewarmed 集合），避免重复预热","优先写入内存（objectURL），跨会话持久交给 IDB"],n1=["商品详情页主图：进入视口即预热，查看大图零延迟","轮播首图：挂载即预热，切换时无白屏"],o1=["依赖 MemoryCachePlugin / IDBCachePlugin 提供底层存储。","预热失败或超时（10s）不影响正常加载，仅跳过预热。","与 CacheIDBPlugin 配合可实现“进入视口即落盘”。"],r1={name:Hw,description:Gw,since:qw,tags:Qw,events:Kw,methods:Yw,methodsNote:Xw,config:Zw,example:Jw,examples:e1,features:t1,useCases:n1,notes:o1},s1="CaptionPlugin",i1="图片说明文字覆盖层，支持样式定制。",a1="2.0.0",l1=["visual","视觉"],c1=[{name:"renderOverlay",when:"每次渲染，覆盖在图片容器之上",description:"骨架屏、错误占位、水印、加载动画"}],u1=[],d1="只读取 context 字段（props / state / data），不调用上下文方法",p1=[{name:"text",type:"string | ((src?: string) => string)",default:'""',description:"说明文字；可传函数按 src 派生"},{name:"position",type:'"top" | "bottom"',default:'"bottom"',description:"文字位置"},{name:"bg",type:"string",default:"rgba(0,0,0,0.62)",description:"背景色"},{name:"color",type:"string",default:"#fff",description:"文字颜色"}],m1=`// 底部说明文字
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
});`,g1=[{name:"底部说明",description:"半透明黑底白字，落在图片底部作图注。",src:"https://picsum.photos/seed/cap-bottom/600/400",config:{text:"日落海岸线",position:"bottom"}},{name:"顶部标题条",description:"顶部深色背景条，作标题 / 分类标签。",src:"https://picsum.photos/seed/cap-top/600/400",config:{text:"Gallery • 2026",position:"top",bg:"rgba(0,0,0,0.6)",color:"#fff"}},{name:"暖色图注",description:"自定义暖色背景与文字色，贴合活动主题。",src:"https://picsum.photos/seed/cap-warm/600/400",config:{text:"限时特惠",position:"bottom",bg:"rgba(160,48,16,0.88)",color:"#fff"}}],f1=["顶部 / 底部两种位置","背景与文字颜色可定制","文本支持静态或函数动态派生","作为覆盖层渲染，不干扰图片本身"],h1=["图库 / 相册图注","新闻 / 博客配图说明","商品图标题条","活动海报角标文字"],y1=["text 传函数时可按 src 动态生成，但场景示例画廊使用静态文本以保证实时预览。","与 OverlayInfo 的区别：Caption 聚焦单一说明文案，OverlayInfo 更通用（任意文本 + 触发时机）。"],v1={name:s1,description:i1,since:a1,tags:l1,events:c1,methods:u1,methodsNote:d1,config:p1,example:m1,examples:g1,features:f1,useCases:h1,notes:y1},w1="CarouselPlugin",x1="自动轮播（gallery 增强插件）：在工具条渲染 播放/暂停 按钮，按 interval 循环切换主图；悬停图集根容器可暂停。",b1="2.1.0",P1=["gallery","图集","轮播","自动播放"],$1=[{name:"galleryToolbarArea",when:"渲染图库工具栏时",description:"缩放、下载、分享等图库级操作"}],S1=[{name:"setActiveIndex",signature:"ctx.setActiveIndex(i: number): void",description:"切换图库当前激活图索引，并联动缩略图与预加载"}],C1=[{name:"interval",type:"number",default:"3000",description:"每帧停留时长（ms）"},{name:"autoStart",type:"boolean",default:"false",description:"初始是否自动播放"},{name:"pauseOnHover",type:"boolean",default:"true",description:"悬停图集根容器时暂停"}],L1=`import { GalleryCore } from "vane-lazy-image/gallery";
import { createCarouselPlugin } from "vane-lazy-image/custom-plugins/CarouselPlugin";

<GalleryCore images={images} plugins={[createCarouselPlugin({ interval: 2500 })]} />`,I1=[{name:"自动轮播",description:"点击 播放 后每 2.5s 切换一张，悬停图集暂停；计数/指示点同步刷新。",config:{interval:2500,autoStart:!0}}],k1=["播放/暂停按钮","循环切换主图","悬停暂停","与计数/指示点同步"],_1=["商品自动展示","首页轮播图集","展品巡览"],E1=["len<2 时不渲染按钮；activeIndex 为协调态，轮播时缩略条/指示点同步。"],R1={name:w1,description:x1,since:b1,tags:P1,events:$1,methods:S1,config:C1,example:L1,examples:I1,features:k1,useCases:_1,notes:E1},z1="ColorExtractionPlugin",O1="主色提取：canvas 采样图片主色，可设置容器背景或显示色卡。",D1="2.0.0",M1=["visual","视觉"],j1=[{name:"onMount",when:"组件挂载完成、插件注册后执行一次（返回的清理函数在 manager.clear 时逆序执行）",description:"初始化副作用：注册监听、起定时器、建观察器；必须返回清理函数或配合 onUnmount 收尾"},{name:"onLoadSuccess",when:"图片成功解码可显示时",description:"拿到最终 displaySrc 做后续动作（上报、预取下张、淡入）"},{name:"transformProps",when:"渲染前链式改写图片 props",description:"补 sizes / 占位色 / 解码策略等"},{name:"renderOverlay",when:"每次渲染，覆盖在图片容器之上",description:"骨架屏、错误占位、水印、加载动画"}],T1=[],N1="只读取 context 字段（props / state / data），不调用上下文方法",A1=[{name:"setContainerBg",type:"boolean",default:"true",description:"是否把容器背景设为主色"},{name:"sampleSize",type:"number",default:"4",description:"采样步长 px，越大越快越不精确"},{name:"showOverlay",type:"boolean",default:"true",description:"是否在右上角显示主色卡"}],B1=`// 提取主色填充容器 + 显示色卡
const TintImage = withPlugins(LazyLoadImageCore, [
  createColorExtractionPlugin({
    setContainerBg: true,
    sampleSize: 4,
    showOverlay: true,
  }),
]);

<TintImage src="https://picsum.photos/seed/color/600/400" alt="主色提取" crossOrigin="anonymous" />;`,U1=[{name:"主色填充容器 + 色卡",description:"提取主色作为卡片背景，并在右上角显示色卡。",src:"https://picsum.photos/seed/color-full/600/400",config:{setContainerBg:!0,sampleSize:4,showOverlay:!0}},{name:"仅色卡",description:"不改动容器背景，只在角上显示提取到的主色卡。",src:"https://picsum.photos/seed/color-chip/600/400",config:{setContainerBg:!1,showOverlay:!0}}],F1=["canvas 采样主色","可选填充容器背景","可选角标色卡展示","采样精度 / 速度可调"],W1=["按图自动配色（背景 / 阴影）","色彩主题联动","色卡 / 调色板展示","设计工具取色"],V1=['读取像素需在 <img> 上设置 crossOrigin="anonymous"，且图片服务器需允许跨域，否则 canvas 被污染无法取色（会静默失败）。',"sampleSize 越大采样越稀疏、越快但越不精确。"],H1={name:z1,description:O1,since:D1,tags:M1,events:j1,methods:T1,methodsNote:N1,config:A1,example:B1,examples:U1,features:F1,useCases:W1,notes:V1},G1="ColorSwatchPlugin",q1="颜色选择器：自动提取商品图片主要颜色，支持交互选择、颜色代码显示与悬停放大。",Q1="2.0.0",K1=["ecommerce","电商核心"],Y1=[{name:"onMount",when:"组件挂载完成、插件注册后执行一次（返回的清理函数在 manager.clear 时逆序执行）",description:"初始化副作用：注册监听、起定时器、建观察器；必须返回清理函数或配合 onUnmount 收尾"},{name:"transformProps",when:"渲染前链式改写图片 props",description:"补 sizes / 占位色 / 解码策略等"},{name:"renderOverlay",when:"每次渲染，覆盖在图片容器之上",description:"骨架屏、错误占位、水印、加载动画"}],X1=[],Z1="只读取 context 字段（props / state / data），不调用上下文方法",J1=[{name:"maxColors",type:"number",default:"5",description:"提取颜色数量上限"},{name:"showPalette",type:"boolean",default:"true",description:"是否显示色板"},{name:"position",type:'"bottom" | "overlay" | "bottom-center"',default:'"bottom"',description:"色板位置"},{name:"swatchSize",type:"number",default:"32",description:"色块尺寸（px）"},{name:"interactive",type:"boolean",default:"true",description:"是否可点击选择"},{name:"showColorCode",type:"boolean",default:"false",description:"是否显示 HEX 代码"},{name:"gap",type:"number",default:"8",description:"色块间距（px）"},{name:"onColorSelect",type:"(color) => void",default:"undefined",description:"颜色选择回调"},{name:"style",type:"React.CSSProperties",default:"{}",description:"自定义叠加样式"}],ex=`// 1. 可交互色板（点击选择颜色）
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
<SwatchImage src="https://picsum.photos/id/100/500/400" alt="服装图" />;`,tx=[{name:"底部色板（可交互）",description:"点击色块可选择颜色，悬停放大。",src:"https://picsum.photos/id/100/500/400",config:{maxColors:6,showPalette:!0,position:"bottom",interactive:!0,swatchSize:36}},{name:"居中叠加",description:"色板居中浮于图片之上。",src:"https://picsum.photos/id/106/500/400",config:{maxColors:5,showPalette:!0,position:"overlay",interactive:!0,swatchSize:40,gap:10}},{name:"显示颜色代码",description:"每个色块下方显示 HEX 代码。",src:"https://picsum.photos/id/116/500/400",config:{maxColors:5,showPalette:!0,position:"bottom-center",interactive:!0,swatchSize:32,showColorCode:!0,gap:12}},{name:"多颜色小色块",description:"更多颜色、更小色块、更小间距。",src:"https://picsum.photos/id/129/500/400",config:{maxColors:8,showPalette:!0,position:"bottom",interactive:!0,swatchSize:24,gap:6}}],nx=["跨域提示：本示例使用的 picsum.photos 图片没有 CORS 头，无法提取真实颜色，当前显示的是默认演示色。实际使用中请确保图片服务器配置了正确的 CORS 头，或使用同域图片，插件才能正确提取图片的真实颜色。"],ox=["自动提取图片主要颜色","智能过滤黑白和透明色","可配置提取颜色数量","3 种显示位置（底部 / 居中 / 底部居中）","交互式颜色选择","显示 HEX 颜色代码","悬停放大效果","选中状态标识"],rx=["服装多颜色选择","艺术品 / 设计作品配色","家具 / 装饰品颜色筛选","鞋包配色选择","礼品个性化定制"],sx={name:G1,description:q1,since:Q1,tags:K1,events:Y1,methods:X1,methodsNote:Z1,config:J1,example:ex,examples:tx,notes:nx,features:ox,useCases:rx},ix="ComparisonPlugin",ax="前后对比（v2 真实实现）：用可拖拽分隔条对比 beforeSrc / afterSrc 两张图，拖动实时比较差异（如调色前后、装修前后、A/B 图）。不再是写死文字角标。",lx="2.0.0",cx=["other","视觉","对比","交互"],ux=[{name:"renderOverlay",when:"每次渲染，覆盖在图片容器之上",description:"骨架屏、错误占位、水印、加载动画"}],dx=[],px="只读取 context 字段（props / state / data），不调用上下文方法",mx=[{name:"beforeSrc",type:"string",default:"主图 src",description:"左侧（拖动前）对比图；默认用主图"},{name:"afterSrc",type:"string",default:"主图 src",description:"右侧（拖动后）对比图；默认用主图"},{name:"labelBefore",type:"string",default:"前",description:"左图标签文字"},{name:"labelAfter",type:"string",default:"后",description:"右图标签文字"},{name:"start",type:"number",default:"0.5",description:"初始分割位置（0~1）"}],gx=`const CompareImage = withPlugins(LazyLoadImageCore, [
  createComparisonPlugin({
    beforeSrc: "https://picsum.photos/id/1015/800/600",
    afterSrc: "https://picsum.photos/id/1016/800/600",
    labelBefore: "原图", labelAfter: "处理后",
  }),
]);

<CompareImage src="https://picsum.photos/id/1016/800/600" alt="前后对比示例" />;`,fx=[{name:"基础对比",description:"提供 beforeSrc / afterSrc 两张图，拖动中间把手即可对比。",src:"https://picsum.photos/id/1016/800/600",config:{beforeSrc:"https://picsum.photos/id/1015/800/600",afterSrc:"https://picsum.photos/id/1016/800/600",labelBefore:"原图",labelAfter:"处理后"}},{name:"自定义起始位置",description:"start=0.3 让初始分割更偏左。",src:"https://picsum.photos/id/1021/800/600",config:{beforeSrc:"https://picsum.photos/id/1020/800/600",afterSrc:"https://picsum.photos/id/1021/800/600",start:.3}},{name:"单图自对比（调色）",description:"只传 afterSrc，before 用主图，演示同一张图的两种状态。",src:"https://picsum.photos/id/1025/800/600",config:{afterSrc:"https://picsum.photos/id/1025/800/600",labelBefore:"原图",labelAfter:"滤镜"}}],hx=["可拖拽分隔条对比两图（指针/触摸）","左右标签可自定义","初始分割位置可调","左图按分割宽度自适应裁剪，始终铺满容器"],yx=["装修前后 / 调色前后对比","A/B 图组对比","图像增强效果演示","教学 / 设计稿对照"],vx=["v2 起为真实拖拽交互，旧版仅渲染写死文字角标。对比层覆盖在 Core 主图之上，拖动区域占满容器。"],wx={name:ix,description:ax,since:lx,tags:cx,events:ux,methods:dx,methodsNote:px,config:mx,example:gx,examples:fx,features:hx,useCases:yx,notes:vx},xx="ConcurrencyControlPlugin",bx="并发控制：限制同时加载数量，支持按域名分片与网络自适应。",Px="2.0.0",$x=["loading","加载策略"],Sx=[{name:"onUnmount",when:"组件卸载前执行一次",description:"释放监听、定时器与观察器；与 onMount 成对出现，避免泄漏"},{name:"onLoad",when:"加载流程开始、需要确定最终图片地址时",description:"自定义加载逻辑，返回最终图片 URL（objectURL / dataURL / 原地址）"},{name:"onLoadSuccess",when:"图片成功解码可显示时",description:"拿到最终 displaySrc 做后续动作（上报、预取下张、淡入）"},{name:"onLoadError",when:"加载失败（网络错误、解码失败、超时）",description:"返回 true 表示错误已被处理（如切换备用源），否则继续走默认降级"}],Cx=[],Lx="只读取 context 字段（props / state / data），不调用上下文方法",Ix=[{name:"maxConcurrent",type:"number",default:"4",description:"并发上限（4g 情况的上限）"},{name:"scope",type:'"global" | "perHost"',default:'"global"',description:"作用域：全局或按域名分片"},{name:"adaptive",type:"boolean",default:"true",description:"是否根据网络自适应并发（saveData/2g/3g 降低并发）"},{name:"acquireTimeoutMs",type:"number",default:"8000",description:"获取并发许可的超时（毫秒），超时后不阻塞加载，避免饥饿"},{name:"debug",type:"boolean",default:"false",description:"调试输出"}],kx=`const LazyImage = withPlugins(LazyLoadImageCore, [
  createConcurrencyControlPlugin({
    maxConcurrent: 6,
    scope: "perHost", // 按域名分片，避免单域阻塞
    adaptive: true,    // 弱网自动降低并发
  }),
]);`,_x=[{name:"全局并发限制",description:"限制整页同时加载不超过 4 张，避免带宽被瞬间打满。",config:{maxConcurrent:4,scope:"global"}},{name:"按域名分片",description:"每个域名独立并发配额，混合多 CDN 时不互相拖累。",config:{maxConcurrent:6,scope:"perHost",adaptive:!0}}],Ex=["全局或按域名（perHost）分片并发门控","弱网（saveData / 2g / 3g）下自适应降低并发","acquireTimeoutMs 后不阻塞加载，避免饥饿"],Rx=["瀑布流海量图片，避免一次性发起上百请求","弱网环境限制并发以保住首屏体验"],zx=["acquireTimeoutMs 保证极端情况下不会永久挂起。","与 ScrollIdle 搭配可进一步错峰、降低峰值并发。","并发许可在加载完成后释放，供队列中下一张使用。"],Ox={name:xx,description:bx,since:Px,tags:$x,events:Sx,methods:Cx,methodsNote:Lx,config:Ix,example:kx,examples:_x,features:Ex,useCases:Rx,notes:zx},Dx="CounterPlugin",Mx="图片计数指示器（gallery 增强插件）：在工具条渲染「当前 / 总数」，绑定 activeIndex。",jx="2.1.0",Tx=["gallery","图集","计数","指示器"],Nx=[{name:"galleryToolbarArea",when:"渲染图库工具栏时",description:"缩放、下载、分享等图库级操作"}],Ax=[],Bx="只读取 context 字段（props / state / data），不调用上下文方法",Ux=[{name:"prefix",type:"string",default:"",description:"前缀文案"},{name:"separator",type:"string",default:" / ",description:"当前与总数之间的分隔符"}],Fx=`import { GalleryCore } from "vane-lazy-image/gallery";
import { createCounterPlugin } from "vane-lazy-image/custom-plugins/CounterPlugin";

<GalleryCore images={images} plugins={[createCounterPlugin()]} />`,Wx=[{name:"基础计数",description:"工具条显示「3 / 8」，随 activeIndex 刷新。",config:{}}],Vx=["当前/总数计数","绑定 activeIndex","tabular-nums 等宽数字"],Hx=["电商商品图集","相册","多图轮播"],Gx=["与 ThumbSync / Indicator 共用同一 activeIndex 协调态。"],qx={name:Dx,description:Mx,since:jx,tags:Tx,events:Nx,methods:Ax,methodsNote:Bx,config:Ux,example:Fx,examples:Wx,features:Vx,useCases:Hx,notes:Gx},Qx="CropPlugin",Kx="焦点裁剪：通过 object-fit: cover 与 object-position 将裁剪焦点设在指定相对坐标，统一多图主体构图。",Yx="2.0.0",Xx=["other","视觉","裁剪"],Zx=[{name:"transformProps",when:"渲染前链式改写图片 props",description:"补 sizes / 占位色 / 解码策略等"},{name:"renderOverlay",when:"每次渲染，覆盖在图片容器之上",description:"骨架屏、错误占位、水印、加载动画"}],Jx=[],eb="只读取 context 字段（props / state / data），不调用上下文方法",tb=[{name:"enabled",type:"boolean",default:"true",description:"是否启用裁剪"},{name:"focusPoint",type:"{ x: number; y: number }",default:"{ x: 0.5, y: 0.5 }",description:"裁剪焦点(0~1 相对坐标)"},{name:"showLabel",type:"boolean",default:"true",description:"是否在图片左上角显示焦点标识（生产版式建议关闭）"}],nb=`const CropImage = withPlugins(LazyLoadImageCore, [
  createCropPlugin({ focusPoint: { x: 0.3, y: 0.4 } }),
]);

<CropImage src="https://picsum.photos/id/1015/500/300" alt="焦点裁剪示例" />;`,ob=[{name:"居中焦点（默认）",description:"x=0.5,y=0.5，主体居中裁切。",src:"https://picsum.photos/id/1015/500/300",config:{focusPoint:{x:.5,y:.5}}},{name:"左上方焦点",description:"x=0.3,y=0.3，主体偏左上裁切。",src:"https://picsum.photos/id/1021/500/300",config:{focusPoint:{x:.3,y:.3}}},{name:"右下焦点",description:"x=0.7,y=0.7，突出右下主体。",src:"https://picsum.photos/id/1026/500/300",config:{focusPoint:{x:.7,y:.7}}}],rb=["object-position 焦点裁剪","cover 填充","任意焦点坐标","可关闭","overlay 标识焦点（showLabel 可关）"],sb=["头像/封面统一构图","商品主图裁剪","列表缩略图","跨尺寸适配"],ib=["当前为最小实现：通过 CSS object-position 模拟裁剪焦点；加载容器需固定宽高以体现裁切效果。","showLabel: false 可隐藏左上角焦点标识，适合直接接入真实版式。"],ab={name:Qx,description:Kx,since:Yx,tags:Xx,events:Zx,methods:Jx,methodsNote:eb,config:tb,example:nb,examples:ob,features:rb,useCases:sb,notes:ib},lb="CustomEffectsPlugin",cb="自定义效果逃逸舱：把内置视觉插件覆盖不到的任意 CSS 效果（filter / transform / transition / className）直接注入图片与容器，无需新造组件。旧版 CustomEffects 展示页的 v2 等效形态。",ub="2.0.0",db=["visual","视觉","自定义"],pb=[{name:"onUnmount",when:"组件卸载前执行一次",description:"释放监听、定时器与观察器；与 onMount 成对出现，避免泄漏"},{name:"onLoadSuccess",when:"图片成功解码可显示时",description:"拿到最终 displaySrc 做后续动作（上报、预取下张、淡入）"},{name:"transformProps",when:"渲染前链式改写图片 props",description:"补 sizes / 占位色 / 解码策略等"}],mb=[],gb="只读取 context 字段（props / state / data），不调用上下文方法",fb=[{name:"imageStyle",type:"React.CSSProperties",default:"{}",description:'应用到 <img> 的任意内联样式，如 { filter: "contrast(1.2) saturate(1.4)" }'},{name:"imageClassName",type:"string",default:'""',description:"附加到 <img> 的 className"},{name:"containerStyle",type:"React.CSSProperties",default:"{}",description:"应用到容器（卡片）的任意内联样式"},{name:"containerClassName",type:"string",default:'""',description:"附加到容器的 className"},{name:"hoverImageStyle",type:"React.CSSProperties",default:"{}",description:'悬停时叠加到 <img> 的样式（移出还原），如 { transform: "scale(1.08)" }'}],hb=`// 任意 CSS 效果逃逸舱：内置插件没有的视觉，直接以样式注入
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

<ArtImage src="https://picsum.photos/seed/custom/600/400" alt="自定义效果" />;`,yb=[{name:"复古胶片滤镜（静态）",description:"sepia + 对比度 + 饱和度组合，模拟胶片质感，并给容器加圆角。",src:"https://picsum.photos/seed/custom-film/600/400",config:{imageStyle:{filter:"sepia(0.45) contrast(1.1) saturate(1.3)",transition:"filter 240ms ease"},containerStyle:{borderRadius:16,overflow:"hidden",boxShadow:"0 6px 20px rgba(0,0,0,0.18)"}}},{name:"悬停放大 + 轻微旋转",description:"平常静态，鼠标悬停时图片放大并旋转 2°，移出自动还原。",src:"https://picsum.photos/seed/custom-hover/600/400",config:{imageStyle:{transition:"transform 220ms ease"},hoverImageStyle:{transform:"scale(1.08) rotate(2deg)"}}},{name:"叠加到内置插件之上",description:"与 BorderGlow / Caption 等内置插件叠加：用逃逸舱补一个渐变描边。",src:"https://picsum.photos/seed/custom-combo/600/400",config:{imageClassName:"custom-art-frame",containerStyle:{padding:6,background:"linear-gradient(135deg,#ff9a9e,#fad0c4)",borderRadius:12}}}],vb=["注入任意 CSS filter（模糊 / 灰度 / 复古 / 色相旋转等）","注入任意 transform（缩放 / 旋转 / 位移）","为 <img> 与容器分别附加 className 与内联样式","hoverImageStyle 支持悬停态，移出自动还原","优先级靠前，可叠加在其它视觉插件之上","无需为一次性效果新建组件，几行配置即可"],wb=["内置视觉插件未覆盖的特殊滤镜 / 调色需求","活动主题需要临时换肤、加描边 / 圆角","悬停微交互（放大、旋转、投影）","演示或 A/B 实验时的快速视觉验证","替代旧版 CustomEffects 展示页的任意效果组合"],xb=["imageStyle / containerStyle 合并进核心渲染的 style，后者优先级更高（叠加而非覆盖）。","插件会自动保留核心自带的 opacity 渐显：你给 imageStyle.transition 设值时，会追加 opacity 180ms 而非覆盖它。","hoverImageStyle 通过注入一条纯 CSS `:hover` 规则实现，由浏览器原生处理进入/离开——不触碰 React 受控的内联样式，因此不会出现「移出后图片消失」的旧问题。","与内置插件叠加时，建议把 CustomEffects 放在 withPlugins 数组靠前位置（其 priority=50 已处理）。","需要函数式动态样式时，可在业务侧先算出 style 对象再传入，本插件保持配置式以便文档化。"],bb={name:lb,description:cb,since:ub,tags:db,events:pb,methods:mb,methodsNote:gb,config:fb,example:hb,examples:yb,features:vb,useCases:wb,notes:xb},Pb="DataSaverPlugin",$b="省流模式：saveData 开启时降低质量参数并禁用预加载。",Sb="2.0.0",Cb=["loading","加载策略"],Lb=[{name:"transformProps",when:"渲染前链式改写图片 props",description:"补 sizes / 占位色 / 解码策略等"}],Ib=[],kb="只读取 context 字段（props / state / data），不调用上下文方法",_b=[{name:"respectSaveData",type:"boolean",default:"true",description:"仅在 navigator.connection.saveData=true 时降质（关闭则强制降质）"},{name:"fallbackQuality",type:"number",default:"0.6",description:"0..1"},{name:"disablePreload",type:"boolean",default:"true",description:"省流量模式下禁用 preload / prefetch 预取"},{name:"qualityParam",type:"string",default:'"quality"',description:'query param name, e.g. "quality" or "q"'}],Eb=`const LazyImage = withPlugins(LazyLoadImageCore, [
  createDataSaverPlugin({
    respectSaveData: true, // 尊重系统省流开关
    fallbackQuality: 0.5,  // 省流时质量降到 0.5
    qualityParam: "q",     // 追加 ?q=0.5
  }),
]);`,Rb=[{name:"尊重系统省流",description:"检测到 saveData 时自动降质并禁用预加载，仅在省流模式下生效。",config:{respectSaveData:!0,fallbackQuality:.5,qualityParam:"q"}},{name:"始终省流",description:"忽略系统开关，始终追加低质量参数，适合极端省流场景。",config:{respectSaveData:!1,fallbackQuality:.4,disablePreload:!0}}],zb=["读取 navigator.connection.saveData，开启时自动降质","自动追加质量查询参数（如 ?q=0.6）","可选禁用预加载以进一步省流"],Ob=["移动端弱流量用户自动减负","按运营策略全局降质"],Db=["依赖业务 CDN 支持对应质量参数，否则参数无效。","respectSaveData=false 时按 fallbackQuality 强制降质（无视系统开关）。","与 ImageOptimization 叠加时，省流质量会进一步覆盖优化质量。"],Mb={name:Pb,description:$b,since:Sb,tags:Cb,events:Lb,methods:Ib,methodsNote:kb,config:_b,example:Eb,examples:Rb,features:zb,useCases:Ob,notes:Db},jb="DecodeAfterIdlePlugin",Tb="空闲解码：图片加载成功后延迟到浏览器空闲时段再执行 img.decode()，避免大图解码阻塞主线程，提升交互流畅度。",Nb="2.0.0",Ab=["loading","加载策略","解码","性能"],Bb=[{name:"onLoadSuccess",when:"图片成功解码可显示时",description:"拿到最终 displaySrc 做后续动作（上报、预取下张、淡入）"},{name:"transformProps",when:"渲染前链式改写图片 props",description:"补 sizes / 占位色 / 解码策略等"}],Ub=[],Fb="只读取 context 字段（props / state / data），不调用上下文方法",Wb=[{name:"enabled",type:"boolean",default:"true",description:"是否启用空闲解码"},{name:"timeoutMs",type:"number",default:"600",description:"最长等待空闲的兜底时间(ms)"}],Vb=`import { LazyLoadImageCore, createDecodeAfterIdlePlugin, withPlugins } from "vane-lazy-image";

const LazyImage = withPlugins(LazyLoadImageCore, [
  createDecodeAfterIdlePlugin({ enabled: true, timeoutMs: 1000 }),
]);

<LazyImage src="https://picsum.photos/seed/decode/1200/800" alt="空闲解码示例" />`,Hb=[{name:"默认空闲解码",description:"成功后于空闲时段执行 decode，并设置 decoding=async。",src:"https://picsum.photos/seed/decode/1200/800",config:{}},{name:"自定义超时",description:"放宽最长等待空闲时间到 1000ms。",src:"https://picsum.photos/seed/decode-timeout/1200/800",config:{timeoutMs:1e3}}],Gb=["成功后 requestIdleCallback 内调用 img.decode()",'自动设置 decoding="async"',"requestIdleCallback 不可用时回退 setTimeout"],qb=["图片密集型信息流防止解码卡顿","首屏后延迟解码，优先保证交互响应"],Qb=["timeoutMs 控制最长等待空闲的兜底时间","decode 失败被静默忽略，不影响显示"],Kb={name:jb,description:Tb,since:Nb,tags:Ab,events:Bb,methods:Ub,methodsNote:Fb,config:Wb,example:Vb,examples:Hb,features:Gb,useCases:qb,notes:Qb},Yb="DepthMapPlugin",Xb="3D 视差深度效果：鼠标跟随的倾斜 / 视差 / 浮动 / 3D 旋转，带光泽与阴影，纯 CSS transforms 无依赖。",Zb="2.0.0",Jb=["interaction","视觉效果与交互","visual"],eP=[{name:"renderOverlay",when:"每次渲染，覆盖在图片容器之上",description:"骨架屏、错误占位、水印、加载动画"}],tP=[],nP="只读取 context 字段（props / state / data），不调用上下文方法",oP=[{name:"style",type:'"tilt" | "parallax" | "float" | "rotate-3d"',default:'"tilt"',description:"深度效果样式"},{name:"intensity",type:"number",default:"0.5",description:"效果强度 0~1"},{name:"maxTilt",type:"number",default:"20",description:"最大倾斜角度"},{name:"enablePerspective",type:"boolean",default:"true",description:"启用透视效果"},{name:"perspective",type:"number",default:"1000",description:"透视距离（px）"},{name:"enableGlare",type:"boolean",default:"true",description:"启用光泽效果"},{name:"glareColor",type:"string",default:'"rgba(255, 255, 255, 0.3)"',description:"光泽颜色"},{name:"glareOpacity",type:"number",default:"0.5",description:"光泽不透明度 0~1"},{name:"enableShadow",type:"boolean",default:"true",description:"启用阴影"},{name:"transitionDuration",type:"number",default:"300",description:"过渡时长（毫秒）"},{name:"resetOnLeave",type:"boolean",default:"true",description:"离开时重置"}],rP=`// 1. 鼠标跟随倾斜
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
});`,sP=[{name:"tilt 倾斜（鼠标跟随）",description:"鼠标移动时图片随指针方向倾斜，带光泽高光，质感类似实体卡片。",src:"https://picsum.photos/id/122/400/300",config:{style:"tilt",maxTilt:15,intensity:.5,enableGlare:!0}},{name:"parallax 视差",description:"图片内部图层随鼠标产生位移差，营造纵深感。",src:"https://picsum.photos/id/129/400/300",config:{style:"parallax",intensity:.6,enablePerspective:!0,perspective:1e3}},{name:"rotate-3d 3D 旋转",description:"围绕多轴的 3D 旋转，配合阴影更具立体感。",src:"https://picsum.photos/id/133/400/300",config:{style:"rotate-3d",intensity:.7,enableShadow:!0,resetOnLeave:!0}},{name:"float 浮动",description:"轻微持续上下浮动的呼吸感，适合装饰性产品图。",src:"https://picsum.photos/id/142/400/300",config:{style:"float",intensity:.4,enableGlare:!1}}],iP=["4 种深度样式（倾斜 / 视差 / 浮动 / 3D 旋转）","鼠标跟随实时响应","光泽（glare）与阴影可开关并调参","透视距离可调","离开时一键重置（resetOnLeave）","纯 CSS transforms，无依赖"],aP=["产品 3D 展示","卡片悬浮交互","3D 封面 / 海报","作品集与个人主页","落地页英雄区","会员 / 旗舰商品位"],lP=["效果依赖鼠标移动产生视差，静态截图仅为初始平面态；移动设备体验有限，建议作为渐进增强。","intensity 与 maxTilt 控制幅度，强度过高在低端设备上可能引起卡顿，可按需下调。"],cP={name:Yb,description:Xb,since:Zb,tags:Jb,events:eP,methods:tP,methodsNote:nP,config:oP,example:rP,examples:sP,features:iP,useCases:aP,notes:lP},uP="DominantColorPlugin",dP="主色占位：在加载完成前用指定颜色或 LQIP 采样平均色填充容器背景，减少白屏、提升视觉连贯性。",pP="2.0.0",mP=["other","视觉","占位"],gP=[{name:"onMount",when:"组件挂载完成、插件注册后执行一次（返回的清理函数在 manager.clear 时逆序执行）",description:"初始化副作用：注册监听、起定时器、建观察器；必须返回清理函数或配合 onUnmount 收尾"}],fP=[],hP="只读取 context 字段（props / state / data），不调用上下文方法",yP=[{name:"color",type:"string",default:"rgba(0,0,0,0.06)",description:"指定背景色（未提供时尝试从 lqip 采样）"},{name:"lqipSrc",type:"string | ((src) => string)",default:"undefined",description:"低清预览图地址或生成函数（用于采样平均色）"}],vP=`const ColorImage = withPlugins(LazyLoadImageCore, [
  createDominantColorPlugin({
    lqipSrc: (src) => src + "?w=20", // 用小图采样主色
  }),
]);

<ColorImage src="https://picsum.photos/id/1015/500/300" alt="主色占位示例" />;`,wP=[{name:"指定背景色",description:"直接指定浅灰背景，加载前不白屏。",src:"https://picsum.photos/id/1015/500/300",config:{color:"#e9ecef"}},{name:"LQIP 采样主色",description:"用小图采样平均色填充（跨域图需 CORS，失败则回退默认色）。",src:"https://picsum.photos/id/1021/500/300",config:{lqipSrc:"https://picsum.photos/id/1021/20/20"}},{name:"暖色背景",description:"指定暖色背景，营造色调一致感。",src:"https://picsum.photos/id/1026/500/300",config:{color:"#f8d7da"}}],xP=["指定颜色占位","LQIP 采样平均色","加载前不白屏","采样失败安全回退","可关闭"],bP=["相册/画廊占位","Pinterest 风布局","慢网白屏治理","品牌色调统一"],PP=["lqipSrc 采样需要图片服务器配置 CORS 头；跨域失败会自动回退到 color（默认浅灰），不影响加载。"],$P={name:uP,description:dP,since:pP,tags:mP,events:gP,methods:fP,methodsNote:hP,config:yP,example:vP,examples:wP,features:xP,useCases:bP,notes:PP},SP="DownloadButtonPlugin",CP="下载按钮：为图片添加一键下载功能，支持多位置、自定义样式、悬停显示与生命周期回调。",LP="2.0.0",IP=["ecommerce","电商核心"],kP=[{name:"renderOverlay",when:"每次渲染，覆盖在图片容器之上",description:"骨架屏、错误占位、水印、加载动画"}],_P=[],EP="只读取 context 字段（props / state / data），不调用上下文方法",RP=[{name:"filename",type:"string",default:"undefined",description:"下载文件名"},{name:"position",type:'"top-left" | "top-right" | "bottom-left" | "bottom-right"',default:'"top-right"',description:"按钮位置"},{name:"size",type:'"small" | "medium" | "large"',default:'"medium"',description:"按钮尺寸"},{name:"buttonStyle",type:"React.CSSProperties",default:"{}",description:"自定义按钮样式"},{name:"showOnHover",type:"boolean",default:"false",description:"仅悬停时显示"},{name:"onBeforeDownload",type:"(src) => void | Promise<void>",default:"undefined",description:"下载前回调（可做权限校验）"},{name:"onDownloadSuccess",type:"(filename) => void",default:"undefined",description:"下载成功回调"},{name:"onDownloadError",type:"(error) => void",default:"undefined",description:"下载失败回调"},{name:"customIcon",type:"ReactNode",default:"undefined",description:"自定义图标"},{name:"tooltipText",type:"string",default:'"下载图片"',description:"提示文案"}],zP=`// 1. 右上角下载按钮，成功后回调
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
<DownloadImage src="https://picsum.photos/id/1015/500/300" alt="可下载图片" />;`,OP=[{name:"基础下载功能",description:"点击右上角下载按钮，保存图片（文件名 my-image.jpg）。",src:"https://picsum.photos/id/1015/500/300",config:{filename:"my-image.jpg",position:"top-right",size:"medium"}},{name:"悬停显示按钮",description:"默认隐藏，鼠标悬停图片左上角出现大号下载按钮。",src:"https://picsum.photos/id/1018/500/300",config:{position:"top-left",size:"large",showOnHover:!0,tooltipText:"点击下载高清图片"}},{name:"自定义位置和大小",description:"左下角小号绿色下载按钮。",src:"https://picsum.photos/id/1019/500/300",config:{position:"bottom-left",size:"small",buttonStyle:{backgroundColor:"rgba(52, 199, 89, 0.9)"}}},{name:"自定义按钮样式",description:"右下角红色方形下载按钮。",src:"https://picsum.photos/id/1020/500/300",config:{position:"bottom-right",size:"medium",buttonStyle:{backgroundColor:"rgba(255, 59, 48, 0.9)",borderRadius:"8px",border:"none"},tooltipText:"下载原图"}},{name:"下载生命周期回调",description:"下载前后触发回调（可权限校验 / 统计上报）；示例中省略函数，见用法示例。",src:"https://picsum.photos/id/1021/500/300",config:{filename:"premium-photo.jpg",position:"top-right",size:"large"}},{name:"自定义下载图标",description:"示例以默认图标呈现；可用 customIcon 替换为自定义图标。",src:"https://picsum.photos/id/1022/500/300",config:{position:"top-right",size:"medium",buttonStyle:{backgroundColor:"rgba(88, 86, 214, 0.9)"}}}],DP=["下载提示：下载需要图片 URL 支持 CORS，否则可能失败；跨域图片需服务器设置 Access-Control-Allow-Origin；filename 应包含合适的文件扩展名（.jpg / .png 等）；大文件下载时会有短暂延迟，建议显示加载状态；移动端下载体验可能因浏览器而异；可在 onBeforeDownload 中进行权限检查。"],MP=["一键下载（点击按钮即可下载图片）","多位置支持（4 个角落）","自定义样式（大小 / 颜色 / 形状）","悬停显示模式","生命周期回调（下载前 / 后 / 失败）","自定义图标"],jP=["图片网站（用户下载高清图）","设计平台（下载设计作品）","新闻媒体","电商平台（下载商品图片）","在线教育（下载教学资料）","企业官网（下载宣传图）"],TP={name:SP,description:CP,since:LP,tags:IP,events:kP,methods:_P,methodsNote:EP,config:RP,example:zP,examples:OP,notes:DP,features:MP,useCases:jP},NP="ErrorBadgePlugin",AP="错误徽标：图片加载失败（或回退成功后）在指定角落显示错误徽标，便于在大批量图片列表中快速定位失败项。",BP="2.0.0",UP=["error","错误处理","错误反馈"],FP=[{name:"onLoadError",when:"加载失败（网络错误、解码失败、超时）",description:"返回 true 表示错误已被处理（如切换备用源），否则继续走默认降级"},{name:"renderOverlay",when:"每次渲染，覆盖在图片容器之上",description:"骨架屏、错误占位、水印、加载动画"}],WP=[],VP="只读取 context 字段（props / state / data），不调用上下文方法",HP=[{name:"text",type:"string | ((context: LazyImageContext) => string)",default:'"Error"',description:"徽标文字；支持函数按 ctx 动态生成（函数型仅顶层示例展示）"},{name:"position",type:'"top-left" | "top-right" | "bottom-left" | "bottom-right" | "center"',default:'"top-right"',description:"徽标定位角落"},{name:"bgColor",type:"string",default:'"rgba(220, 53, 69, 0.85)"',description:"背景色"},{name:"color",type:"string",default:'"#fff"',description:"文字颜色"},{name:"fontSize",type:"number",default:"12",description:"字号(px)"},{name:"padding",type:"string",default:'"2px 6px"',description:"内边距"},{name:"borderRadius",type:"number",default:"4",description:"圆角(px)"},{name:"zIndex",type:"number",default:"100",description:"层级，默认较高避免被其它覆盖层遮挡"},{name:"persistAfterFallback",type:"boolean",default:"true",description:"回退图加载成功后是否仍显示徽标"}],GP=`import { LazyLoadImageCore, createErrorBadgePlugin, withPlugins } from "vane-lazy-image";

const LazyImage = withPlugins(LazyLoadImageCore, [
  createErrorBadgePlugin({
    text: (ctx) => \`加载失败: \${ctx.src}\`,
    position: "bottom-right",
    bgColor: "rgba(220,53,69,0.9)",
  }),
]);

// 故意触发失败以观察徽标
<LazyImage src="https://invalid.example.com/x.png" alt="错误徽标示例" />`,qP=[{name:"默认错误徽标",description:"加载失败后，在右上角显示红底 Error 徽标。",src:"https://invalid.example.com/error-badge.png",config:{}},{name:"自定义文案与位置",description:"底部右侧、深色背景 + 高亮文字的失败徽标。",src:"https://invalid.example.com/error-badge-2.png",config:{text:"图片加载失败",position:"bottom-right",bgColor:"rgba(0,0,0,0.7)",color:"#ffd166"}}],QP=["加载或回退失败后，在图片角落显示错误徽标","支持 5 种定位（四角 + 居中）与背景/文字/字号/圆角定制","persistAfterFallback：回退图已显示仍保留徽标，便于排查","通过 sharedData 标记 had-error，与 FallbackImage / RetryOnError / ErrorOverlay 联动"],KP=["图片墙 / 商品列表快速识别加载失败项","大批量图片加载健康度可视化"],YP=["text 支持函数型 (ctx) => string，但函数无法进入静态预览配置，仅顶层示例展示","默认 zIndex=100，高于多数覆盖层，避免被遮挡","与 ErrorOverlay 区别：徽标是轻量角标，覆盖层是整图遮罩"],XP={name:NP,description:AP,since:BP,tags:UP,events:FP,methods:WP,methodsNote:VP,config:HP,example:GP,examples:qP,features:QP,useCases:KP,notes:YP},ZP="ErrorOverlayPlugin",JP="错误覆盖层：图片加载失败时显示半透明遮罩与可选『重试』按钮，引导用户手动重试，适用于商品主图等关键图。",e$="2.0.0",t$=["error","错误处理","错误反馈","重试"],n$=[{name:"renderOverlay",when:"每次渲染，覆盖在图片容器之上",description:"骨架屏、错误占位、水印、加载动画"}],o$=[],r$="只读取 context 字段（props / state / data），不调用上下文方法",s$=[{name:"message",type:"string | ((context: LazyImageContext) => string)",default:"undefined（回退『加载失败』）",description:"遮罩提示文案；支持函数按 ctx 动态生成（函数型仅顶层示例展示）"},{name:"background",type:"string",default:'"rgba(220, 53, 69, 0.18)"',description:"遮罩背景色"},{name:"color",type:"string",default:'"#b00020"',description:"文字颜色"},{name:"zIndex",type:"number",default:"10",description:"遮罩层级"},{name:"showRetry",type:"boolean",default:"true",description:"是否显示重试按钮"},{name:"retryText",type:"string",default:'"重试"',description:"重试按钮文字"},{name:"persistAfterFallback",type:"boolean",default:"true",description:"回退图加载成功后是否仍显示遮罩"}],i$=`import { LazyLoadImageCore, createErrorOverlayPlugin, withPlugins } from "vane-lazy-image";

const LazyImage = withPlugins(LazyLoadImageCore, [
  createErrorOverlayPlugin({
    message: (ctx) => \`图片加载失败：\${ctx.src}\`,
    retryText: "点我重试",
  }),
]);

// 故意触发失败以观察遮罩与重试按钮
<LazyImage src="https://invalid.example.com/x.png" alt="错误覆盖层示例" />`,a$=[{name:"默认重试遮罩",description:"失败时整图遮罩 + 重试按钮（默认文案『重试』）。",src:"https://invalid.example.com/error-overlay.png",config:{retryText:"重试"}},{name:"自定义文案与配色",description:"深色遮罩 + 白色文字 + 自定义提示文案。",src:"https://invalid.example.com/error-overlay-2.png",config:{message:"图片暂时无法加载",background:"rgba(0,0,0,0.4)",color:"#fff"}}],l$=["失败时整图半透明遮罩 + 可选重试按钮","重试通过 cache-bust 参数（?retry=时间戳）重新请求，绕过缓存","自定义文案 / 背景 / 文字色 / 层级","persistAfterFallback：回退后仍显示遮罩"],c$=["商品主图 / 头图失败后友好提示并支持手动重试","与 RetryOnError 组合：自动重试 + 手动重试双保险"],u$=["showRetry 默认开启；message 支持函数型（仅顶层示例展示）","重试逻辑直接改写 img.src，不依赖外部状态","点击重试使用 Date.now() 做缓存破坏，确保重新发起请求"],d$={name:ZP,description:JP,since:e$,tags:t$,events:n$,methods:o$,methodsNote:r$,config:s$,example:i$,examples:a$,features:l$,useCases:c$,notes:u$},p$="ErrorTrackingPlugin",m$="错误追踪：在图片加载失败时上报失败详情（地址 / 错误信息 / 网络 / 设备 / 次数）到自定义函数或上报端点，并可显示错误计数角标，用于生产环境图片错误监控。",g$="2.0.0",f$=["error","错误处理","监控","可观测"],h$=[{name:"onLoadError",when:"加载失败（网络错误、解码失败、超时）",description:"返回 true 表示错误已被处理（如切换备用源），否则继续走默认降级"},{name:"renderOverlay",when:"每次渲染，覆盖在图片容器之上",description:"骨架屏、错误占位、水印、加载动画"}],y$=[],v$="只读取 context 字段（props / state / data），不调用上下文方法",w$=[{name:"reportEndpoint",type:"string",description:"错误上报端点（POST JSON，带 5s 超时与 keepalive）"},{name:"report",type:"(payload: any) => void",description:"自定义上报函数（与端点二选一或并存）"},{name:"showBadge",type:"boolean",default:"false",description:"是否显示错误计数角标（需显式开启）"},{name:"badgeText",type:"string",default:'"Error"',description:"角标前缀文字"},{name:"badgeColor",type:"string",default:'"#fff"',description:"角标文字色"},{name:"badgeBg",type:"string",default:'"rgba(220,53,69,0.8)"',description:"角标背景色"}],x$=`import { LazyLoadImageCore, createErrorTrackingPlugin, withPlugins } from "vane-lazy-image";

const LazyImage = withPlugins(LazyLoadImageCore, [
  createErrorTrackingPlugin({
    report: (payload) => {
      console.warn("图片加载失败", payload);
    },
    showBadge: true,
  }),
]);

// 故意触发失败以观察上报与角标
<LazyImage src="https://invalid.example.com/x.png" alt="错误追踪示例" />`,b$=[{name:"错误计数角标",description:"开启角标，失败后右上角显示累计错误次数。",src:"https://invalid.example.com/error-tracking.png",config:{showBadge:!0,badgeText:"Err"}},{name:"端点上报",description:"失败后 POST 上报到采集端点（演示端点可能 404，代码已静默忽略）。",src:"https://invalid.example.com/error-tracking-2.png",config:{reportEndpoint:"/api/img-errors",showBadge:!0}}],P$=["onLoadError 采集 src / message / network / device / 累计次数","内置 1 秒防抖，避免高频重复上报","report 自定义函数 或 reportEndpoint 端点二选一 / 并存","可选角标显示错误次数"],$$=["生产环境图片错误率监控与告警","定位经常性失败的图片源 / CDN"],S$=["showBadge 默认 false，需显式开启才显示角标","端点上报带 5s 超时与 keepalive，页面卸载也能送达","report 为函数型，无法进入静态预览配置，仅顶层示例展示"],C$={name:p$,description:m$,since:g$,tags:f$,events:h$,methods:y$,methodsNote:v$,config:w$,example:x$,examples:b$,features:P$,useCases:$$,notes:S$},L$="EventLoggerPlugin",I$="事件日志：在控制台记录图片加载全生命周期事件（before-load / load-success / load-error / enter-viewport / leave-viewport / progress），便于调试与监控。",k$="2.0.0",_$=["other","监控","调试"],E$=[{name:"onBeforeLoad",when:"发起图片请求之前",description:"返回 false 可阻断本次加载（如权限校验、占位策略）"},{name:"onLoadSuccess",when:"图片成功解码可显示时",description:"拿到最终 displaySrc 做后续动作（上报、预取下张、淡入）"},{name:"onLoadError",when:"加载失败（网络错误、解码失败、超时）",description:"返回 true 表示错误已被处理（如切换备用源），否则继续走默认降级"},{name:"onProgress",when:'加载进度更新（由 withPlugins 订阅 bus 的 "progress" 桥接）',description:"展示进度条 / 百分比；仅对支持进度上报的 loader 生效"},{name:"onEnterViewport",when:"元素进入视口（IntersectionObserver）",description:"触发懒加载、开始请求、曝光上报"},{name:"onLeaveViewport",when:"元素离开视口",description:"暂停 / 中止在途请求、回收资源"}],R$=[],z$="只读取 context 字段（props / state / data），不调用上下文方法",O$=[{name:"enabled",type:"boolean",default:"true",description:"是否启用日志"},{name:"prefix",type:"string",default:'"[LLI]"',description:"日志前缀，便于过滤"}],D$=`const LogImage = withPlugins(LazyLoadImageCore, [
  createEventLoggerPlugin({ prefix: "[IMG]" }),
]);

<LogImage src="https://picsum.photos/id/1015/500/300" alt="事件日志示例" />;`,M$=[{name:"默认日志",description:"使用默认 [LLI] 前缀记录全部事件。",src:"https://picsum.photos/id/1015/500/300",config:{enabled:!0}},{name:"自定义前缀",description:"改用 [IMG] 前缀，便于在控制台分组过滤。",src:"https://picsum.photos/id/1021/500/300",config:{prefix:"[IMG]"}},{name:"关闭日志",description:"enabled=false 时不输出任何日志。",src:"https://picsum.photos/id/1026/500/300",config:{enabled:!1}}],j$=["全生命周期事件记录","可自定义前缀","可关闭","零业务侵入"],T$=["调试加载流程","加载监控埋点","性能问题排查","教学演示"],N$=["仅用于开发/调试，生产环境建议按需关闭以避免控制台噪音。"],A$={name:L$,description:I$,since:k$,tags:_$,events:E$,methods:R$,methodsNote:z$,config:O$,example:D$,examples:M$,features:j$,useCases:T$,notes:N$},B$="ExifOrientationPlugin",U$="EXIF 方向：根据图片自带的方向信息（EXIF Orientation）自动校正显示，避免手机竖拍照片横显。",F$="2.0.0",W$=["a11y","可访问性","加载策略"],V$=[{name:"transformProps",when:"渲染前链式改写图片 props",description:"补 sizes / 占位色 / 解码策略等"}],H$=[],G$="只读取 context 字段（props / state / data），不调用上下文方法",q$=[{name:"enabled",type:"boolean",default:"true",description:"是否启用方向校正"}],Q$=`const OrientImage = withPlugins(LazyLoadImageCore, [
  createExifOrientationPlugin({ enabled: true }),
]);

<OrientImage src="https://picsum.photos/id/1015/500/300" alt="方向校正示例" />;`,K$=[{name:"启用方向校正（默认）",description:"imageOrientation: from-image，跟随 EXIF 方向。",src:"https://picsum.photos/id/1015/500/300",config:{enabled:!0}},{name:"关闭校正",description:"enabled=false 时不注入方向样式。",src:"https://picsum.photos/id/1021/500/300",config:{enabled:!1}}],Y$=["按 EXIF Orientation 自动校正","imageOrientation: from-image","无需手动旋转","可关闭"],X$=["手机/相机照片","用户上传图","竖拍横显修复"],Z$=["依赖浏览器对 image-orientation: from-image 的支持，现代浏览器均已支持。"],J$={name:B$,description:U$,since:F$,tags:W$,events:V$,methods:H$,methodsNote:G$,config:q$,example:Q$,examples:K$,features:Y$,useCases:X$,notes:Z$},eS="FadeInPlugin",tS="加载完成后淡入显示，可自定义时长与缓动函数。",nS="2.0.0",oS=["visual","视觉"],rS=[{name:"onMount",when:"组件挂载完成、插件注册后执行一次（返回的清理函数在 manager.clear 时逆序执行）",description:"初始化副作用：注册监听、起定时器、建观察器；必须返回清理函数或配合 onUnmount 收尾"},{name:"onLoadSuccess",when:"图片成功解码可显示时",description:"拿到最终 displaySrc 做后续动作（上报、预取下张、淡入）"}],sS=[],iS="只读取 context 字段（props / state / data），不调用上下文方法",aS=[{name:"durationMs",type:"number",default:"400",description:"淡入时长 ms"},{name:"easing",type:"string",default:"ease",description:"缓动函数（CSS easing）"}],lS=`// 加载完成后淡入
const FadeImage = withPlugins(LazyLoadImageCore, [
  createFadeInPlugin({ durationMs: 450 }),
]);

<FadeImage src="https://picsum.photos/seed/fadein/600/400" alt="淡入" />;`,cS=[{name:"默认淡入",description:"450ms 标准 ease 淡入，干净利落。",src:"https://picsum.photos/seed/fadein-default/600/400",config:{durationMs:450}},{name:"慢速缓出",description:"800ms ease-out，让图片「缓缓浮现」。",src:"https://picsum.photos/seed/fadein-slow/600/400",config:{durationMs:800,easing:"ease-out"}}],uS=["加载成功淡入显示","时长可调","缓动函数可定制（ease / ease-out / cubic-bezier 等）","与 BlurUp 互补"],dS=["画廊 / 相册图片入场","内容型站点图片显现","与滚动进入联动的柔和出现","任意需要「渐显」的场景"],pS=["easing 接受任意 CSS timing-function 字符串。","与 Transition 不同，FadeIn 仅处理「淡入」单一维度，更简单。"],mS={name:eS,description:tS,since:nS,tags:oS,events:rS,methods:sS,methodsNote:iS,config:aS,example:lS,examples:cS,features:uS,useCases:dS,notes:pS},gS="FallbackImagePlugin",fS="兜底图：图片加载失败时自动切换到备用图片地址，避免出现破图空白，是最基础的失败降级手段。",hS="2.0.0",yS=["network","网络","兜底","降级"],vS=[{name:"onLoadError",when:"加载失败（网络错误、解码失败、超时）",description:"返回 true 表示错误已被处理（如切换备用源），否则继续走默认降级"}],wS=[],xS="只读取 context 字段（props / state / data），不调用上下文方法",bS=[{name:"fallbackSrc",type:"string",description:'兜底图地址，建议使用始终可访问的占位图或 data URI。e.g. "/404.jpg"'}],PS=`import { LazyLoadImageCore, createFallbackImagePlugin, withPlugins } from "vane-lazy-image";

const LazyImage = withPlugins(LazyLoadImageCore, [
  createFallbackImagePlugin({ fallbackSrc: "/404.jpg" }),
]);

<LazyImage src="https://invalid.example.com/broken.png" alt="兜底图示例" />`,$S=[{name:"基础兜底图",description:"原图失败 → 自动切换到兜底图正常显示（演示用始终可访问的占位图）。",src:"https://invalid.example.com/broken.png",config:{fallbackSrc:"https://picsum.photos/seed/fallback/400/300"}}],SS=["onLoadError 直接改写 img.src 为兜底地址","标记 had-error，供 ErrorBadge 等插件联动","兜底成功后仍可配合其它错误插件展示状态"],CS=["保证任何失败都不出现破图","与错误徽标 / 追踪组合，兜底 + 可观测"],LS=["fallbackSrc 为必填；建议使用始终可访问的占位图或 data URI，避免兜底本身再失败","兜底成功后若仍有 ErrorBadge(persistAfterFallback)，可继续显示徽标便于排查"],IS={name:gS,description:fS,since:hS,tags:yS,events:vS,methods:wS,methodsNote:xS,config:bS,example:PS,examples:$S,features:SS,useCases:CS,notes:LS},kS="FavoritePlugin",_S="收藏切换（gallery 增强插件）：在工具条渲染心形按钮，绑定 context.favorited 协调态，点击切换并回调 onChange。",ES="2.1.0",RS=["gallery","图集","收藏","喜欢"],zS=[{name:"galleryToolbarArea",when:"渲染图库工具栏时",description:"缩放、下载、分享等图库级操作"}],OS=[{name:"setFavorited",signature:"ctx.setFavorited(v: boolean): void",description:"写入收藏态并触发重渲染（收藏按钮的唯一致入口）"}],DS=[{name:"onChange",type:"(favorited: boolean) => void",default:"-",description:"切换时回调（持久化/上报）"},{name:"activeColor",type:"string",default:"#ff5a5f",description:"激活态颜色"}],MS=`import { GalleryCore } from "vane-lazy-image/gallery";
import { createFavoritePlugin } from "vane-lazy-image/custom-plugins/FavoritePlugin";

<GalleryCore images={images} plugins={[createFavoritePlugin({ onChange: setFav })]} />`,jS=[{name:"收藏商品",description:"点击心形在 ♡/♥ 间切换，激活态变红；onChange 上报调用方做持久化。",config:{}}],TS=["心形切换","协调态绑定","onChange 回调","激活色可配"],NS=["商品收藏","心愿单","喜欢标记"],AS=["favorited 为 useState 协调态，切换即重渲染；不跨会话持久化（由 onChange 接管）。"],BS={name:kS,description:_S,since:ES,tags:RS,events:zS,methods:OS,config:DS,example:MS,examples:jS,features:TS,useCases:NS,notes:AS},US="FetchLoaderPlugin",FS="fetch 流式加载器：将图片以 blob/objectURL 形式加载，支持进度上报（speed/ETA）、超时、指数退避重试、请求去重与 objectURL 自动回收。高优先级（domain priority 10），先于其他插件执行。",WS="2.0.0",VS=["loading","加载策略"],HS=[{name:"onUnmount",when:"组件卸载前执行一次",description:"释放监听、定时器与观察器；与 onMount 成对出现，避免泄漏"},{name:"onLoad",when:"加载流程开始、需要确定最终图片地址时",description:"自定义加载逻辑，返回最终图片 URL（objectURL / dataURL / 原地址）"},{name:"onSrcChange",when:"src 变化、切换到新图时",description:"重置状态、清理旧缓存、重新进入懒加载判定"},{name:"progress",when:"流式加载进度更新时",description:"广播 { loaded, total }，桥接到 onProgress 钩子"}],GS=[],qS="只读取 context 字段（props / state / data），不调用上下文方法",QS=[{name:"enabled",type:"boolean",default:"true",description:"是否启用 fetch 加载（关闭后走浏览器默认加载）"},{name:"cacheKeyFn",type:"(src: string) => string",description:"自定义去重键，默认使用 src"},{name:"maxCacheSize",type:"number",description:"in-flight 请求缓存最大条目数"},{name:"maxControllers",type:"number",description:"AbortController 缓存上限，淘汰时自动 abort"},{name:"maxObjectUrls",type:"number",description:"objectURL 缓存上限，淘汰时自动 revokeObjectURL"},{name:"timeout",type:"number",default:"30000",description:"单次请求超时（毫秒）"},{name:"maxRetries",type:"number",default:"3",description:"最大重试次数（4xx 不重试）"},{name:"retryDelay",type:"number",default:"1000",description:"首次重试延迟（毫秒）"},{name:"retryBackoff",type:"number",default:"2",description:"重试退避倍数"}],KS=`const LazyImage = withPlugins(LazyLoadImageCore, [
  createFetchLoaderPlugin({
    timeout: 20000,    // 20s 超时
    maxRetries: 5,     // 最多重试 5 次
    retryBackoff: 2,   // 指数退避
  }),
]);`,YS=[{name:"默认 fetch 加载",description:"流式加载 + 真实进度（速度 / ETA）+ 自动去重与 objectURL 回收。",config:{timeout:3e4,maxRetries:3,retryBackoff:2}},{name:"弱网增强重试",description:"更长超时与更多重试，适合不稳定网络环境。",config:{timeout:45e3,maxRetries:6,retryDelay:1500,retryBackoff:2}}],XS=["以 fetch 把图片读为 Blob/objectURL，支持流式进度（速度 / ETA）","请求超时 + 指数退避重试（4xx 不重试）","in-flight 请求去重、AbortController / objectURL 自动回收","高优先级（domain priority 10），先于其它插件执行"],ZS=["需要真实下载进度条的大图 / 原图","不稳定网络下需要重试保障"],JS=["关闭 enabled 则走浏览器默认 <img> 加载。","objectURL 由插件在卸载 / 淘汰时自动 revoke，避免内存泄漏。","cacheKeyFn 为函数，需在“用法示例”中以代码传入；静态预览使用纯配置。"],eC={name:US,description:FS,since:WS,tags:VS,events:HS,methods:GS,methodsNote:qS,config:QS,example:KS,examples:YS,features:XS,useCases:ZS,notes:JS},tC="FilterPlugin",nC="CSS 滤镜：灰度/复古/亮度/对比度/饱和度，悬停可恢复原图。",oC="2.0.0",rC=["visual","视觉"],sC=[{name:"onUnmount",when:"组件卸载前执行一次",description:"释放监听、定时器与观察器；与 onMount 成对出现，避免泄漏"},{name:"onLoadSuccess",when:"图片成功解码可显示时",description:"拿到最终 displaySrc 做后续动作（上报、预取下张、淡入）"}],iC=[],aC="只读取 context 字段（props / state / data），不调用上下文方法",lC=[{name:"filter",type:'"none" | "grayscale" | "sepia" | "brightness" | "contrast" | "saturate"',default:'"none"',description:"滤镜类型"},{name:"amount",type:"number",default:"undefined",description:"滤镜强度（多数类型 0~1）"},{name:"hover",type:"boolean",default:"false",description:"悬停时恢复原图"}],cC=`// 灰度显示，悬停恢复原彩图
const FilterImage = withPlugins(LazyLoadImageCore, [
  createFilterPlugin({
    filter: "grayscale",
    amount: 1,
    hover: true,
  }),
]);

<FilterImage src="https://picsum.photos/seed/filter/600/400" alt="滤镜" />;`,uC=[{name:"灰度 + 悬停还原",description:"默认灰度，鼠标悬停瞬间恢复彩色，制造焦点对比。",src:"https://picsum.photos/seed/filter-gray/600/400",config:{filter:"grayscale",amount:1,hover:!0}},{name:"复古暖调",description:"sepia 中度做旧，营造怀旧氛围。",src:"https://picsum.photos/seed/filter-sepia/600/400",config:{filter:"sepia",amount:.6}},{name:"高对比增强",description:"提升对比度，让画面更有张力。",src:"https://picsum.photos/seed/filter-contrast/600/400",config:{filter:"contrast",amount:1.4}}],dC=["内置 grayscale / sepia / brightness / contrast / saturate 预设","amount 控制强度","hover 模式悬停恢复原图","纯 CSS filter，零额外绘制开销"],pC=["商品列表统一灰度，hover 高亮","怀旧 / 复古风格相册","强调主体前的视觉降噪","活动主题统一调色"],mC=["hover:true 时滤镜在鼠标移入时移除、移出时恢复。","需要组合滤镜（如 contrast+saturate）或更复杂效果，可用 CustomEffectsPlugin 的 imageStyle.filter 任意写。"],gC={name:tC,description:nC,since:oC,tags:rC,events:sC,methods:iC,methodsNote:aC,config:lC,example:cC,examples:uC,features:dC,useCases:pC,notes:mC},fC="FullscreenPlugin",hC="全屏切换（gallery 增强插件）：在工具条渲染 全屏/退出 按钮，对图集根容器调用 requestFullscreen。",yC="2.1.0",vC=["gallery","图集","全屏","沉浸式"],wC=[{name:"galleryToolbarArea",when:"渲染图库工具栏时",description:"缩放、下载、分享等图库级操作"}],xC=[],bC="只读取 context 字段（props / state / data），不调用上下文方法",PC=[{name:"enterLabel",type:"string",default:"⛶ 全屏",description:"进入全屏按钮文案"},{name:"exitLabel",type:"string",default:"✕ 退出",description:"退出全屏按钮文案"}],$C=`import { GalleryCore } from "vane-lazy-image/gallery";
import { createFullscreenPlugin } from "vane-lazy-image/custom-plugins/FullscreenPlugin";

<GalleryCore images={images} plugins={[createFullscreenPlugin()]} />`,SC=[{name:"沉浸浏览",description:"点击 全屏 将整张图集容器进入全屏（含缩略条/工具条），再点退出恢复。",config:{}}],CC=["全屏/退出按钮","fullscreenchange 同步态","基于 [data-gallery-root] 锚点"],LC=["商品沉浸看款","展会大屏展示","详情页全屏浏览"],IC=["通过当前按钮向上查找 [data-gallery-root] 锚点，不依赖内核暴露 DOM 节点。"],kC={name:fC,description:hC,since:yC,tags:vC,events:wC,methods:xC,methodsNote:bC,config:PC,example:$C,examples:SC,features:CC,useCases:LC,notes:IC},_C="GalleryPlugin",EC="画廊灯箱：图片上叠加打开按钮，进入灯箱或新窗口查看原图。",RC="2.0.0",zC=["visual","视觉"],OC=[{name:"renderOverlay",when:"每次渲染，覆盖在图片容器之上",description:"骨架屏、错误占位、水印、加载动画"}],DC=[],MC="只读取 context 字段（props / state / data），不调用上下文方法",jC=[{name:"buttonText",type:"string",default:'"Open"',description:"打开按钮文案"},{name:"enableLightbox",type:"boolean",default:"true",description:"是否启用内置灯箱"},{name:"overlayZIndex",type:"number",default:"10",description:"灯箱层叠顺序"},{name:"buttonStyle",type:"React.CSSProperties",default:"{}",description:"按钮自定义样式（缩略图场景可缩成小号半透明胶囊）"}],TC=`// 点击按钮进入灯箱查看大图
const GalleryImage = withPlugins(LazyLoadImageCore, [
  createGalleryPlugin({
    buttonText: "查看大图",
    enableLightbox: true,
    overlayZIndex: 20,
  }),
]);

<GalleryImage src="https://picsum.photos/seed/gallery/600/400" alt="画廊" />;`,NC=[{name:"灯箱预览",description:"叠加「查看大图」按钮，点击进入全屏灯箱看原图。",src:"https://picsum.photos/seed/gallery-lb/600/400",config:{buttonText:"查看大图",enableLightbox:!0,overlayZIndex:20}},{name:"新窗口打开",description:"关闭内置灯箱，点击按钮以新窗口打开原图。",src:"https://picsum.photos/seed/gallery-win/600/400",config:{buttonText:"Open",enableLightbox:!1}}],AC=["覆盖层打开按钮","内置灯箱查看大图（默认开启）","可改为新窗口打开","灯箱层级可调"],BC=["电商商品图放大查看","相册 / 作品集灯箱","详情页看图","地图 / 截图放大"],UC=["enableLightbox:false 时按钮以新窗口打开原图，适合轻量场景。","灯箱层级 overlayZIndex 需高于页面其它浮层，避免被遮挡。"],FC={name:_C,description:EC,since:RC,tags:zC,events:OC,methods:DC,methodsNote:MC,config:jC,example:TC,examples:NC,features:AC,useCases:BC,notes:UC},WC="GlitchEffectPlugin",VC="故障艺术效果：赛博朋克风格 RGB 分离 / 扫描线 / 数字失真 / 混合 / 强烈五种风格，纯 CSS 无依赖，支持持续、一次性、悬停触发。",HC="2.0.0",GC=["interaction","视觉效果与交互","visual"],qC=[{name:"renderOverlay",when:"每次渲染，覆盖在图片容器之上",description:"骨架屏、错误占位、水印、加载动画"}],QC=[],KC="只读取 context 字段（props / state / data），不调用上下文方法",YC=[{name:"style",type:'"rgb-split" | "scan-lines" | "digital" | "glitch-mix" | "intense"',default:'"glitch-mix"',description:"故障风格"},{name:"continuous",type:"boolean",default:"false",description:"是否持续动画"},{name:"duration",type:"number",default:"1000",description:"一次性触发时长（毫秒）"},{name:"intensity",type:"number",default:"0.7",description:"效果强度 0~1"},{name:"triggerOnHover",type:"boolean",default:"false",description:"是否悬停触发"},{name:"rgbOffset",type:"number",default:"3",description:"RGB 分离距离（px）"},{name:"scanLineCount",type:"number",default:"30",description:"扫描线数量"},{name:"animateScanLines",type:"boolean",default:"true",description:"扫描线是否动画"}],XC=`// 1. 持续 RGB 分离故障特效
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
createGlitchEffectPlugin({ style: "glitch-mix", triggerOnHover: true });`,ZC=[{name:"glitch-mix 混合（持续）",description:"混合风格默认效果，持续播放，适合做氛围封面。",src:"https://picsum.photos/id/1043/400/300",config:{style:"glitch-mix",continuous:!0,intensity:.7}},{name:"rgb-split RGB 分离（持续）",description:"红蓝通道错位产生色散，赛博朋克典型观感。",src:"https://picsum.photos/id/1062/400/300",config:{style:"rgb-split",continuous:!0,rgbOffset:5}},{name:"scan-lines 扫描线（悬停触发）",description:"叠加扫描线纹理，悬停时启动，平时保持干净。",src:"https://picsum.photos/id/1074/400/300",config:{style:"scan-lines",triggerOnHover:!0,scanLineCount:40,animateScanLines:!0}},{name:"digital 数字失真（一次性）",description:"加载/进入时触发一次数字故障，随后恢复清晰。",src:"https://picsum.photos/id/1080/400/300",config:{style:"digital",continuous:!1,duration:900}},{name:"intense 高强度",description:"强度拉满的强烈故障，冲击力强，适合标题位。",src:"https://picsum.photos/id/1084/400/300",config:{style:"intense",continuous:!0,intensity:1}}],JC=["5 种故障风格（RGB 分离 / 扫描线 / 数字失真 / 混合 / 强烈）","三种触发模式：持续 / 一次性 / 悬停触发","效果强度 0~1 可调","扫描线数量与是否动画可配","RGB 错位距离可调","纯 CSS 实现，无运行时依赖"],eL=["赛博朋克风格站点","海报 / 专辑封面","活动营销页","游戏官网","暗色主题视觉","品牌焕新 / 限时活动"],tL=["持续动画（continuous: true）会一直占用合成层，建议对大图或大量实例谨慎使用。","阅读型内容可用 triggerOnHover: true，仅在鼠标悬停时播放，避免干扰。"],nL={name:WC,description:VC,since:HC,tags:GC,events:qC,methods:QC,methodsNote:KC,config:YC,example:XC,examples:ZC,features:JC,useCases:eL,notes:tL},oL="HotspotPlugin",rL="主图热点标注（gallery 增强插件）：在 galleryOverlay 按百分比定位可交互热点，点击弹出标签气泡（含可选链接）。",sL="2.1.0",iL=["gallery","图集","热点","标注"],aL=[{name:"galleryOverlay",when:"渲染图库大图浮层时",description:"大图视图、切换器、关闭按钮等浮层内容"}],lL=[],cL="只读取 context 字段（props / state / data），不调用上下文方法",uL=[{name:"hotspots",type:"Hotspot[]",default:"[]",description:"热点集合（图集级，所有主图共用），含 x/y(0-100)/label/href?"}],dL=`import { GalleryCore } from "vane-lazy-image/gallery";
import { createHotspotPlugin } from "vane-lazy-image/custom-plugins/HotspotPlugin";

<GalleryCore images={images} plugins={[createHotspotPlugin({ hotspots: [{ x: 50, y: 50, label: "核心卖点" }] })]} />`,pL=[{name:"圈点讲解",description:"在主图叠加红点标记，点击展开卖点文案；可带 href 跳转详情。热点坐标相对主图百分比。",config:{hotspots:[{x:40,y:35,label:"防水面料"},{x:65,y:70,label:"透气网眼"}]}}],mL=["百分比定位","点击气泡","可选链接","多热点"],gL=["商品卖点讲解","局部细节标注","区域介绍"],fL=["hotspots 为图集级（所有主图共用同一组坐标）；气泡 pointerEvents 在带 href 时可点击。"],hL={name:oL,description:rL,since:sL,tags:iL,events:aL,methods:lL,methodsNote:cL,config:uL,example:dL,examples:pL,features:mL,useCases:gL,notes:fL},yL="HoverPrefetchPlugin",vL="悬停预取：当用户将鼠标悬停（或触摸）在图片上时，提前向浏览器插入 preload 链接拉取下一张资源，实现零延迟切换。",wL="2.0.0",xL=["viewport","视口与交互","预取","性能"],bL=[{name:"onMount",when:"组件挂载完成、插件注册后执行一次（返回的清理函数在 manager.clear 时逆序执行）",description:"初始化副作用：注册监听、起定时器、建观察器；必须返回清理函数或配合 onUnmount 收尾"},{name:"onUnmount",when:"组件卸载前执行一次",description:"释放监听、定时器与观察器；与 onMount 成对出现，避免泄漏"},{name:"renderOverlay",when:"每次渲染，覆盖在图片容器之上",description:"骨架屏、错误占位、水印、加载动画"}],PL=[],$L="只读取 context 字段（props / state / data），不调用上下文方法",SL=[{name:"getNextSrc",type:"(context) => string | string[] | Promise<...>",default:"undefined",description:"计算需要预取的下一张图片（函数型，参见用法示例）"},{name:"target",type:'"container" | "image"',default:'"container"',description:"绑定事件的目标（容器或图片元素）"},{name:"trigger",type:'"mouseenter" | "touchstart"',default:'"mouseenter"',description:"触发事件类型"},{name:"as",type:'"image" | "fetch"',default:'"image"',description:"预取资源类型"},{name:"max",type:"number",default:"2",description:"预取的最大数量"},{name:"dedupe",type:"boolean",default:"true",description:"去重，避免重复插入相同的预取链接"},{name:"crossOrigin",type:'"anonymous" | "use-credentials" | null',default:'"anonymous"',description:"跨域策略"},{name:"showBadge",type:"boolean",default:"false",description:"是否在卡片上显示「已预取 N」徽标（便于观察注入效果）"},{name:"debug",type:"boolean",default:"false",description:"是否输出调试日志"}],CL=`const PrefetchImage = withPlugins(LazyLoadImageCore, [
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
<PrefetchImage src="https://picsum.photos/id/1015/500/300" alt="悬停预取示例" />;`,LL=[{name:"容器悬停预取（默认）",description:"鼠标进入容器即插入 preload，预取下一张图片（默认按 URL 末尾数字派生），卡片左上角显示「已预取 N」。",src:"https://picsum.photos/id/1015/500/300",config:{target:"container",trigger:"mouseenter",max:2,as:"image",showBadge:!0}},{name:"图片悬停预取",description:"事件直接绑定在图片元素上。",src:"https://picsum.photos/id/1021/500/300",config:{target:"image",trigger:"mouseenter",max:1}},{name:"触摸预取",description:"移动端用 touchstart 触发预取。",src:"https://picsum.photos/id/1026/500/300",config:{target:"container",trigger:"touchstart",max:1}}],IL=["悬停 / 触摸即预取","容器或图片元素两种绑定目标","mouseenter / touchstart 两种触发","预取数量上限与去重","自定义跨域策略","调试日志输出"],kL=["商品画廊下一张预览","图片轮播预加载","列表项快速切换","移动端触摸预载"],_L=["必须提供 `getNextSrc` 才会真正预取；不传时只绑定事件、不产生请求。","`showBadge: true` 会在卡片上显示「已预取 N」，是验收该插件最直接的方式。"],EL={name:yL,description:vL,since:wL,tags:xL,events:bL,methods:PL,methodsNote:$L,config:SL,example:CL,examples:LL,features:IL,useCases:kL,notes:_L},RL="HoverZoomPlugin",zL="悬停放大：鼠标悬停时放大显示图片局部。",OL="2.0.0",DL=["visual","视觉"],ML=[{name:"onUnmount",when:"组件卸载前执行一次",description:"释放监听、定时器与观察器；与 onMount 成对出现，避免泄漏"},{name:"onLoadSuccess",when:"图片成功解码可显示时",description:"拿到最终 displaySrc 做后续动作（上报、预取下张、淡入）"}],jL=[],TL="只读取 context 字段（props / state / data），不调用上下文方法",NL=[{name:"scale",type:"number",default:"1.08",description:"放大倍数"},{name:"durationMs",type:"number",default:"180",description:"过渡时长 ms"}],AL=`// 悬停放大 1.15 倍
const ZoomImage = withPlugins(LazyLoadImageCore, [
  createHoverZoomPlugin({ scale: 1.15, durationMs: 180 }),
]);

<ZoomImage src="https://picsum.photos/seed/hoverzoom/600/400" alt="悬停放大" />;`,BL=[{name:"悬停放大 1.15",description:"鼠标悬停放大到 1.15 倍，180ms 平滑过渡。",src:"https://picsum.photos/seed/hoverzoom-115/600/400",config:{scale:1.15,durationMs:180}},{name:"轻微放大",description:"克制的 1.08 倍，仅给一点点呼吸感。",src:"https://picsum.photos/seed/hoverzoom-108/600/400",config:{scale:1.08,durationMs:200}}],UL=["悬停平滑放大","放大倍数可调","过渡时长可调","常与 Caption / BorderGlow 叠加"],FL=["商品图悬停预览细节","相册悬停聚焦","卡片悬停微交互","与灯箱配合的轻量前奏"],WL=["放大会溢出原尺寸，通常需父容器 overflow:hidden 裁切，仅放大中心区域。","与 Transition 的 fromScale 不同，HoverZoom 仅在 hover 时触发。"],VL={name:RL,description:zL,since:OL,tags:DL,events:ML,methods:jL,methodsNote:TL,config:NL,example:AL,examples:BL,features:UL,useCases:FL,notes:WL},HL="ImageOptimizationPlugin",GL="图片优化：自动追加宽度/质量/格式查询参数。",qL="2.0.0",QL=["network","网络"],KL=[{name:"transformProps",when:"渲染前链式改写图片 props",description:"补 sizes / 占位色 / 解码策略等"}],YL=[],XL="只读取 context 字段（props / state / data），不调用上下文方法",ZL=[{name:"enabled",type:"boolean",default:"true",description:"是否启用 URL 改写优化"},{name:"maxWidth",type:"number",default:"1920",description:"最大宽度（像素）"},{name:"quality",type:"number",default:"0.85",description:"0..1"},{name:"format",type:'"auto" | "webp" | "jpg" | "png"',default:'"auto"',description:"目标格式；auto 交给浏览器 / CDN 协商"},{name:"widthParam",type:"string",default:'"w"',description:'例如 "w"'},{name:"qualityParam",type:"string",default:'"q"',description:'例如 "q"'},{name:"formatParam",type:"string",default:'"format"',description:'例如 "format"'}],JL=`const LazyImage = withPlugins(LazyLoadImageCore, [
  createImageOptimizationPlugin({
    maxWidth: 1200,
    quality: 0.8,
    format: "webp",
    widthParam: "w",
    qualityParam: "q",
    formatParam: "format",
  }),
]);`,e2=[{name:"自动 webp + 约束宽度",description:"自动选择最优格式（按 Accept 协商 webp），并把宽度限制在 1200。",config:{maxWidth:1200,quality:.8,format:"webp"}},{name:"固定 jpg 中质量",description:"统一输出 jpg、质量 0.7，适合对兼容性要求较高的场景。",config:{maxWidth:800,quality:.7,format:"jpg"}}],t2=["自动追加宽度 / 质量 / 格式查询参数","format=auto 按 Accept 头协商 webp","参数名可配置以适配不同 CDN / 图片网关"],n2=["任意源图统一走优化网关（imgix / 云存储样式）","响应式不同屏宽下发不同尺寸"],o2=["需图片服务支持对应参数，否则仅作为普通查询参数透传。","与 DataSaver 叠加时，省流质量会进一步覆盖此处质量。","format=auto 依赖浏览器 Accept 头，无需手动指定。"],r2={name:HL,description:GL,since:qL,tags:QL,events:KL,methods:YL,methodsNote:XL,config:ZL,example:JL,examples:e2,features:t2,useCases:n2,notes:o2},s2="IndicatorPlugin",i2="圆点指示器（gallery 增强插件）：在工具条渲染圆点，点击第 N 点跳转到对应主图。",a2="2.1.0",l2=["gallery","图集","指示点","进度"],c2=[{name:"galleryToolbarArea",when:"渲染图库工具栏时",description:"缩放、下载、分享等图库级操作"}],u2=[{name:"setActiveIndex",signature:"ctx.setActiveIndex(i: number): void",description:"切换图库当前激活图索引，并联动缩略图与预加载"}],d2=[{name:"size",type:"number",default:"8",description:"圆点直径（px）"},{name:"gap",type:"number",default:"6",description:"圆点间距（px）"},{name:"activeColor",type:"string",default:"#2b7de9",description:"选中圆点颜色"},{name:"idleColor",type:"string",default:"rgba(0,0,0,0.25)",description:"未选中圆点颜色"}],p2=`import { GalleryCore } from "vane-lazy-image/gallery";
import { createIndicatorPlugin } from "vane-lazy-image/custom-plugins/IndicatorPlugin";

<GalleryCore images={images} plugins={[createIndicatorPlugin()]} />`,m2=[{name:"基础指示点",description:"圆点显示位置进度，点击跳转。",config:{}}],g2=["圆点指示器","点击跳转","选中态高亮"],f2=["电商商品图集","轮播进度","相册"],h2=["与 ThumbSync 缩略条互补：缩略条看缩略图、圆点看位置进度。"],y2={name:s2,description:i2,since:a2,tags:l2,events:c2,methods:u2,config:d2,example:p2,examples:m2,features:g2,useCases:f2,notes:h2},v2="InventoryStatusPlugin",w2="库存状态：实时显示商品库存状态（有货/低库存/缺货/预订），支持自动刷新和低库存预警。",x2="2.0.0",b2=["ecommerce","电商核心"],P2=[{name:"renderOverlay",when:"每次渲染，覆盖在图片容器之上",description:"骨架屏、错误占位、水印、加载动画"}],$2=[],S2="只读取 context 字段（props / state / data），不调用上下文方法",C2=[{name:"status",type:'"in-stock" | "out-of-stock" | "low-stock" | "pre-order"',default:'"in-stock"',description:"初始库存状态"},{name:"stockCount",type:"number",default:"undefined",description:"库存数量"},{name:"lowStockThreshold",type:"number",default:"10",description:"低库存阈值"},{name:"showBadge",type:"boolean",default:"true",description:"是否显示角标"},{name:"autoRefresh",type:"boolean",default:"false",description:"是否自动刷新库存"},{name:"refreshInterval",type:"number",default:"30000",description:"刷新间隔（毫秒）"},{name:"fetchStock",type:"() => Promise<{ status?; count? }>",default:"undefined",description:"自定义库存获取函数"},{name:"onStatusChange",type:"(status) => void",default:"undefined",description:"状态变更回调"},{name:"position",type:'"top-left" | "top-right" | "bottom-left" | "bottom-right"',default:'"top-right"',description:"角标位置"},{name:"style",type:"React.CSSProperties",default:"{}",description:"自定义叠加样式"}],L2=`// 1. 静态库存状态
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
<StockImage src="https://picsum.photos/id/164/280/280" alt="商品图" />;`,I2=[{name:"有货（100 件）",description:"绿色角标，显示库存数量。",src:"https://picsum.photos/id/152/280/280",config:{status:"in-stock",stockCount:100,showBadge:!0,position:"top-right"}},{name:"库存紧张（5 件）",description:"低于阈值 → 橙色预警角标。",src:"https://picsum.photos/id/164/280/280",config:{status:"low-stock",stockCount:5,lowStockThreshold:10,showBadge:!0,position:"top-right"}},{name:"缺货",description:"红色缺货角标。",src:"https://picsum.photos/id/177/280/280",config:{status:"out-of-stock",stockCount:0,showBadge:!0,position:"top-right"}},{name:"预订",description:"蓝色预订角标。",src:"https://picsum.photos/id/183/280/280",config:{status:"pre-order",showBadge:!0,position:"top-right"}},{name:"自动刷新库存（每 5 秒）",description:"通过 fetchStock 定时刷新状态（示例中省略函数，可配 interval）。",src:"https://picsum.photos/id/225/400/300",config:{status:"in-stock",stockCount:50,showBadge:!0,autoRefresh:!0,refreshInterval:5e3,position:"top-right"}}],k2=["4 种库存状态：有货 / 低库存 / 缺货 / 预订","显示实时库存数量","低库存阈值预警","自动刷新库存（可配置间隔）","库存变更回调通知","颜色编码（绿=有货 / 橙=低库存 / 红=缺货 / 蓝=预订）"],_2=["电商产品列表页","库存管理系统","在线商城首页","门票 / 课程售卖","限时抢购活动"],E2=["`stockCount <= lowStockThreshold` 时会自动归为「库存紧张」，无需手动改 `status`。","`autoRefresh` 需配合 `refreshInterval` 与 `fetchStock` 才有意义，静态示例页不会轮询。"],R2={name:v2,description:w2,since:x2,tags:b2,events:P2,methods:$2,methodsNote:S2,config:C2,example:L2,examples:I2,features:k2,useCases:_2,notes:E2},z2="LQIPPlugin",O2="低清预览（LQIP）：在清晰图加载期间叠加模糊的小图作为占位，加载完成后自动隐藏，实现渐进式加载体验。",D2="2.0.0",M2=["other","视觉","占位","渐进加载"],j2=[{name:"renderOverlay",when:"每次渲染，覆盖在图片容器之上",description:"骨架屏、错误占位、水印、加载动画"}],T2=[],N2="只读取 context 字段（props / state / data），不调用上下文方法",A2=[{name:"lqipSrc",type:"string | ((src) => string)",default:"undefined",description:"低清预览图地址或生成函数"},{name:"blur",type:"number",default:"12",description:"模糊半径(px)"},{name:"opacity",type:"number",default:"1",description:"不透明度(0~1)"},{name:"zIndex",type:"number",default:"2",description:"叠加层级"}],B2=`const LqipImage = withPlugins(LazyLoadImageCore, [
  createLqipPlugin({ lqipSrc: (src) => src + "?w=20", blur: 14 }),
]);

<LqipImage src="https://picsum.photos/id/1015/500/300" alt="LQIP 示例" />;`,U2=[{name:"模糊小图占位",description:"14px 模糊小图作为加载期占位。",src:"https://picsum.photos/id/1015/500/300",config:{lqipSrc:"https://picsum.photos/id/1015/20/20",blur:14}},{name:"低不透明度",description:"降低占位图不透明度，弱化视觉存在。",src:"https://picsum.photos/id/1021/500/300",config:{lqipSrc:"https://picsum.photos/id/1021/20/20",blur:12,opacity:.6}},{name:"清晰后淡出",description:"加载完成自动隐藏模糊层，过渡到清晰图。",src:"https://picsum.photos/id/1026/500/300",config:{lqipSrc:"https://picsum.photos/id/1026/20/20",blur:16}}],F2=["模糊低清占位","可调模糊/透明度/层级","加载完成自动隐藏","支持函数/字符串来源","渐进式加载"],W2=["渐进式图片加载","慢网占位","画廊/相册","提升感知性能"],V2=["lqipSrc 为函数型配置，静态预览使用字符串小图；函数用法见用法示例。"],H2={name:z2,description:O2,since:D2,tags:M2,events:j2,methods:T2,methodsNote:N2,config:A2,example:B2,examples:U2,features:F2,useCases:W2,notes:V2},G2="LocalizationPlugin",q2="国际化：根据用户语言环境自动切换图片，支持手动指定、自动检测、自定义检测函数与后备图片。",Q2="2.0.0",K2=["ecommerce","电商核心"],Y2=[{name:"onLoad",when:"加载流程开始、需要确定最终图片地址时",description:"自定义加载逻辑，返回最终图片 URL（objectURL / dataURL / 原地址）"}],X2=[],Z2="只读取 context 字段（props / state / data），不调用上下文方法",J2=[{name:"localeMap",type:"Record<string, string>",default:"undefined",description:"语言 → 图片 URL 映射"},{name:"defaultLocale",type:"string",default:'"en"',description:"默认语言（后备）"},{name:"currentLocale",type:"string",default:"undefined",description:"手动指定当前语言"},{name:"autoDetect",type:"boolean",default:"true",description:"是否自动检测浏览器语言"},{name:"detectLocale",type:"() => string",default:"undefined",description:"自定义语言检测函数"},{name:"fallbackSrc",type:"string",default:"undefined",description:"最终后备图片 URL"}],eI=`// 1. 按浏览器语言自动切换图片
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
<I18nImage src="https://picsum.photos/id/1015/500/300" alt="多语言图片" />;`,tI=[{name:"手动切换语言",description:"手动指定 currentLocale 展示对应语言图片（此处以 en 为例）。",src:"https://picsum.photos/id/1015/500/300",config:{localeMap:{en:"https://picsum.photos/id/1015/500/300",zh:"https://picsum.photos/id/1016/500/300",ja:"https://picsum.photos/id/1018/500/300",ko:"https://picsum.photos/id/1019/500/300"},currentLocale:"en",autoDetect:!1,defaultLocale:"en"}},{name:"自动检测浏览器语言",description:"根据浏览器语言自动选择图片（支持 en/zh/fr/de/es）。",src:"https://picsum.photos/id/1020/500/300",config:{localeMap:{en:"https://picsum.photos/id/1020/500/300",zh:"https://picsum.photos/id/1021/500/300",fr:"https://picsum.photos/id/1022/500/300",de:"https://picsum.photos/id/1023/500/300",es:"https://picsum.photos/id/1024/500/300"},autoDetect:!0,defaultLocale:"en"}},{name:"自定义语言检测",description:"通过 detectLocale() 从 localStorage 读取偏好（示例中简写为自动检测）。",src:"https://picsum.photos/id/1025/500/300",config:{localeMap:{en:"https://picsum.photos/id/1025/500/300",zh:"https://picsum.photos/id/1026/500/300",ja:"https://picsum.photos/id/1027/500/300"},defaultLocale:"en",autoDetect:!0}},{name:"后备图片机制",description:"请求的语言（ru）不在映射中 → 显示 fallbackSrc 后备图片。",src:"https://picsum.photos/id/1030/500/300",config:{localeMap:{en:"https://picsum.photos/id/1028/500/300",zh:"https://picsum.photos/id/1029/500/300"},currentLocale:"ru",defaultLocale:"en",fallbackSrc:"https://picsum.photos/id/1030/500/300"}}],nI=["最佳实践：始终提供 defaultLocale 作为后备；localeMap 至少包含常用语言（en、zh 等）；图片 URL 应指向稳定可访问的资源；建议使用 CDN 加速不同地区的图片加载；可结合用户设置和浏览器检测；开发环境建议打开 console 查看语言检测日志。"],oI=["多语言支持（任意语言环境）","自动检测浏览器语言","默认回退语言","自定义检测函数","后备机制（最终后备图片 URL）","动态切换（运行时切换语言）"],rI=["国际化网站","品牌宣传","多语言 App","电商平台（商品本地化展示）","新闻媒体","在线教育"],sI={name:G2,description:q2,since:Q2,tags:K2,events:Y2,methods:X2,methodsNote:Z2,config:J2,example:eI,examples:tI,notes:nI,features:oI,useCases:rI},iI="MemoryPressureAbortPlugin",aI="内存压力降级 + 离开中止（v2 真实实现）：低内存 / 移动端 / 省流时把图片重写为低清版本；离开视口且仍在加载时，调用 context.reset() 真正取消在途元素加载，回收内存。",lI="2.0.0",cI=["loading","加载策略","降质","中止","低端设备"],uI=[{name:"onLoad",when:"加载流程开始、需要确定最终图片地址时",description:"自定义加载逻辑，返回最终图片 URL（objectURL / dataURL / 原地址）"},{name:"onLeaveViewport",when:"元素离开视口",description:"暂停 / 中止在途请求、回收资源"}],dI=[{name:"reset",signature:"ctx.reset(): void",description:"重置到初始状态（清空错误与进度，不主动重新发起加载）"}],pI=[{name:"enabled",type:"boolean",default:"true",description:"是否启用"},{name:"deviceMemoryThreshold",type:"number",default:"4",description:"设备内存 ≤ 该阈值(GB)时启用降质"},{name:"preferOnMobile",type:"boolean",default:"true",description:"移动端或省流模式时强制启用降质"},{name:"lowWidth",type:"number",default:"640",description:"重写到的低清晰度宽度参数"},{name:"abortOnLeave",type:"boolean",default:"true",description:"离开视口且仍在加载时，是否中止在途加载（context.reset）"}],mI=`import { LazyLoadImageCore, createMemoryPressureAbortPlugin, withPlugins } from "vane-lazy-image";

const LazyImage = withPlugins(LazyLoadImageCore, [
  // 命中压力条件时降质；用户滑走仍在加载的图会被中止
  createMemoryPressureAbortPlugin({ lowWidth: 480 }),
]);

<LazyImage src="https://picsum.photos/seed/mem/1200/800" alt="内存压力降级示例" />`,gI=[{name:"默认降级 + 离开中止",description:"低内存/移动端/省流命中即低清；离开视口且在加载中的图会被 context.reset 取消。",src:"https://picsum.photos/seed/mem/1200/800",config:{}},{name:"激进降质",description:"更低宽度 + 移动端强制降质。",src:"https://picsum.photos/seed/mem-aggressive/1200/800",config:{lowWidth:320,deviceMemoryThreshold:8,preferOnMobile:!0}},{name:"仅降质不中止",description:"abortOnLeave=false，只做低清重写，不在离开时取消加载。",src:"https://picsum.photos/seed/mem-noabort/1200/800",config:{abortOnLeave:!1}}],fI=["三条件任一即触发低清重写（onLoad 返回改写 URL）","unsplash / 360buy 优化 w 参数；通用源附加 ?w&auto=format&fit=crop","离开视口且在加载 → context.reset() 真正取消元素在途加载","abortOnLeave 可开关"],hI=["低端设备防 OOM（降质）","快速滑动列表回收在途请求（中止）","弱网 / 省流节省流量"],yI=["中止通过 context.reset() 移除 <img> 元素来取消其下载，是图片元素层面的真实中止；若使用 FetchLoaderPlugin，可在 fetch 层进一步中断。","降质判定依赖 navigator.deviceMemory 与 deviceInfo.type。"],vI={name:iI,description:aI,since:lI,tags:cI,events:uI,methods:dI,config:pI,example:mI,examples:gI,features:fI,useCases:hI,notes:yI},wI="MorphPlugin",xI="形变过渡效果：圆角/缩放/旋转/倾斜/弹性/液态等多种形变动画，纯 CSS transforms，支持加载触发、悬停触发与持续动画。",bI="2.0.0",PI=["interaction","视觉效果与交互","visual"],$I=[{name:"onLoadSuccess",when:"图片成功解码可显示时",description:"拿到最终 displaySrc 做后续动作（上报、预取下张、淡入）"}],SI=[],CI="只读取 context 字段（props / state / data），不调用上下文方法",LI=[{name:"type",type:'"circle-to-square" | "square-to-circle" | "rounded-corners" | "scale-morph" | "rotate-morph" | "skew-morph" | "elastic" | "liquid" | "custom"',default:'"elastic"',description:"形变类型"},{name:"duration",type:"number",default:"800",description:"持续时间（毫秒）"},{name:"delay",type:"number",default:"0",description:"延迟（毫秒）"},{name:"easing",type:"string",default:'"cubic-bezier(0.68, -0.55, 0.265, 1.55)"',description:"缓动函数"},{name:"triggerOnHover",type:"boolean",default:"false",description:"是否悬停触发"},{name:"continuous",type:"boolean",default:"false",description:"是否持续动画"},{name:"fromBorderRadius",type:"string",default:'"50%"',description:"rounded-corners 起始圆角"},{name:"toBorderRadius",type:"string",default:'"0%"',description:"rounded-corners 结束圆角"},{name:"fromScale",type:"number",default:"1",description:"scale-morph 起始缩放"},{name:"toScale",type:"number",default:"1",description:"scale-morph 结束缩放"},{name:"fromRotate",type:"number",default:"0",description:"rotate-morph 起始角度"},{name:"toRotate",type:"number",default:"0",description:"rotate-morph 结束角度"},{name:"fromSkew",type:"number",default:"0",description:"skew-morph 起始倾斜"},{name:"toSkew",type:"number",default:"0",description:"skew-morph 结束倾斜"}],II=`// 1. 弹性形变
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
});`,kI=[{name:"elastic 弹性形变",description:"加载完成后以弹性缓动“弹”入，适合头像与卡片。",src:"https://picsum.photos/id/1080/400/300",config:{type:"elastic",duration:1e3,easing:"cubic-bezier(0.68, -0.55, 0.265, 1.55)"}},{name:"rounded-corners 圆角过渡",description:"从圆形过渡为圆角矩形，强调形态变化。",src:"https://picsum.photos/id/1084/400/300",config:{type:"rounded-corners",fromBorderRadius:"50%",toBorderRadius:"12%",duration:900}},{name:"scale-morph 缩放形变",description:"从 0.85 倍放大到原尺寸，配合淡入更自然。",src:"https://picsum.photos/id/110/400/300",config:{type:"scale-morph",fromScale:.85,toScale:1,duration:800}},{name:"rotate-morph 旋转形变",description:"带角度旋转的进入，动感十足。",src:"https://picsum.photos/id/111/400/300",config:{type:"rotate-morph",fromRotate:-12,toRotate:0,duration:900}},{name:"liquid 液态（持续）",description:"持续液态流动效果，适合做背景或装饰图。",src:"https://picsum.photos/id/119/400/300",config:{type:"liquid",continuous:!0,duration:2e3}}],_I=["9 种形变类型（圆角 / 缩放 / 旋转 / 倾斜 / 弹性 / 液态等）","三种触发：加载触发 / 悬停触发 / 持续动画","圆角、缩放、旋转、倾斜均参数化起止值","弹性缓动可定制","纯 CSS transforms，性能好","无运行时依赖"],EI=["头像形变入场","按钮 / 卡片交互反馈","Logo 动画","加载态过渡","图片墙动态呈现","装饰性背景图"],RI=["continuous: true 会持续播放；配合 triggerOnHover: true 可在鼠标悬停时播放单次，更省资源。","悬停触发的场景需在图片上移动 / 悬停鼠标才能看到形变，静态截图仅展示初始态。"],zI={name:wI,description:xI,since:bI,tags:PI,events:$I,methods:SI,methodsNote:CI,config:LI,example:II,examples:kI,features:_I,useCases:EI,notes:RI},OI="NetworkAnalyticsPlugin",DI="网络分析：上报加载耗时、成功率与 CDN 分布。",MI="2.0.0",jI=["network","网络"],TI=[{name:"onMount",when:"组件挂载完成、插件注册后执行一次（返回的清理函数在 manager.clear 时逆序执行）",description:"初始化副作用：注册监听、起定时器、建观察器；必须返回清理函数或配合 onUnmount 收尾"},{name:"onUnmount",when:"组件卸载前执行一次",description:"释放监听、定时器与观察器；与 onMount 成对出现，避免泄漏"},{name:"onLoadSuccess",when:"图片成功解码可显示时",description:"拿到最终 displaySrc 做后续动作（上报、预取下张、淡入）"},{name:"onLoadError",when:"加载失败（网络错误、解码失败、超时）",description:"返回 true 表示错误已被处理（如切换备用源），否则继续走默认降级"}],NI=[],AI="只读取 context 字段（props / state / data），不调用上下文方法",BI=[{name:"reportEndpoint",type:"string",description:"上报地址（POST JSON）；留空则只在本地统计"},{name:"report",type:"(event: string, data: Record<string, any>) => void",description:"自定义上报函数（若提供则优先使用）"},{name:"trackCDN",type:"boolean",description:"是否按图片域名分组统计，便于比较不同 CDN 表现"}],UI=`const LazyImage = withPlugins(LazyLoadImageCore, [
  createNetworkAnalyticsPlugin({
    trackCDN: true,
    report: (event, data) => {
      // event: "load" | "error" | "cache-hit" ...
      // data:  { src, durationMs, host, cached }
      analytics.track(event, data);
    },
  }),
]);`,FI=[{name:"本地调试上报",description:"未配置端点时写入 console，便于本地观察耗时与命中情况。",config:{trackCDN:!0}},{name:"上报到监控端点",description:"把事件 POST 到监控服务（keepalive，不阻塞页面卸载）。",config:{reportEndpoint:"https://api.example.com/lli",trackCDN:!0}}],WI=["上报加载耗时、成功率、CDN 分布","内置事件去重 + 100ms 防抖，避免刷屏","优先使用自定义 report 函数，其次 reportEndpoint"],VI=["线上图片加载性能监控","定位慢 CDN / 高失败率域名"],HI=["不提供 reportEndpoint 也不提供 report 时，默认 console.debug 输出。","上报事件含 src / host / durationMs / cached 等字段。","report 为函数，需在“用法示例”中以代码传入；静态预览使用纯配置（无端点时仅本地打点）。"],GI={name:OI,description:DI,since:MI,tags:jI,events:TI,methods:NI,methodsNote:AI,config:BI,example:UI,examples:FI,features:WI,useCases:VI,notes:HI},qI="OfflinePlugin",QI="离线降级（v2 真实实现）：在线时把资源预热进 Cache Storage；离线时优先从缓存取同域资源，否则回退 offlineSrc / 内置 SVG 占位图，并在离线时显示状态徽标。不再是纯提示层。",KI="2.0.0",YI=["loading","加载策略","离线","省流"],XI=[{name:"onLoad",when:"加载流程开始、需要确定最终图片地址时",description:"自定义加载逻辑，返回最终图片 URL（objectURL / dataURL / 原地址）"},{name:"renderOverlay",when:"每次渲染，覆盖在图片容器之上",description:"骨架屏、错误占位、水印、加载动画"}],ZI=[],JI="只读取 context 字段（props / state / data），不调用上下文方法",ek=[{name:"offlineSrc",type:"string",default:"内置 SVG 离线占位图（data URI）",description:"离线且无缓存时回退的占位图，建议用 data URI 避免再次走网络"},{name:"cacheName",type:"string",default:"vane-lazy-image-offline",description:"Cache Storage 名称，用于预热与离线回退"},{name:"warm",type:"boolean",default:"true",description:"在线时是否把资源写入 Cache Storage 预热"},{name:"showBadge",type:"boolean",default:"true",description:"离线时是否显示「离线模式」徽标"}],tk=`import { LazyLoadImageCore, createOfflinePlugin, withPlugins } from "vane-lazy-image";

const LazyImage = withPlugins(LazyLoadImageCore, [
  // 离线时回退到内置占位图，并在离线时显示徽标
  createOfflinePlugin({}),
]);

// 同域资源在线时会自动预热，离线可直接从缓存读取
<LazyImage src="/images/photo.jpg" alt="离线降级示例" />`,nk=[{name:"默认离线降级",description:"在线正常加载并预热；断网后同域资源走缓存，跨域资源回退到内置 SVG 占位图，并出现「离线模式」徽标。",src:"https://picsum.photos/seed/offline/800/600",config:{}},{name:"自定义离线占位图",description:"指定 offlineSrc 作为断网回退图（建议 data URI）。",src:"https://picsum.photos/seed/offline2/800/600",config:{offlineSrc:"data:image/svg+xml;utf8,%3Csvg xmlns='http://www.w3.org/2000/svg' width='400' height='300'%3E%3Crect width='100%25' height='100%25' fill='%23ffe0b2'/%3E%3Ctext x='50%25' y='50%25' fill='%23e65100' text-anchor='middle' font-size='22'%3E无网络%3C/text%3E%3C/svg%3E"}},{name:"关闭徽标",description:"showBadge=false，仅做离线资源回退，不显示提示。",src:"https://picsum.photos/seed/offline3/800/600",config:{showBadge:!1}}],ok=["在线预热进 Cache Storage（真实写入）","离线从缓存读取同域资源","无缓存回退 offlineSrc / 内置 SVG 占位","在线 / 离线状态统一取自 GlobalContext（全 App 单处监听）+ 状态徽标","warm / showBadge 可开关"],rk=["弱网 / 断网时的优雅降级","离线优先 PWA 应用的图片缓存","省流用户避免无效请求"],sk=["跨域 no-cors 资源缓存后无法读取为 blob，因此跨域图片离线时会回退到 offlineSrc 占位图（预期降级）；同域资源可真正离线显示。","完整 Service Worker 级别离线由宿主应用负责，本插件提供组件级缓存/回退兜底。"],ik={name:qI,description:QI,since:KI,tags:YI,events:XI,methods:ZI,methodsNote:JI,config:ek,example:tk,examples:nk,features:ok,useCases:rk,notes:sk},ak="OverlayInfoPlugin",lk="信息覆盖层：显示自定义文本，支持常显或悬停触发。",ck="2.0.0",uk=["visual","视觉"],dk=[{name:"renderOverlay",when:"每次渲染，覆盖在图片容器之上",description:"骨架屏、错误占位、水印、加载动画"}],pk=[],mk="只读取 context 字段（props / state / data），不调用上下文方法",gk=[{name:"content",type:"string | ((context: LazyImageContext) => string)",default:'""',description:"覆盖层文本；可传函数按 context 派生"},{name:"position",type:'"top" | "bottom" | "center"',default:'"bottom"',description:"文本位置"},{name:"background",type:"string",default:"rgba(0,0,0,0.62)",description:"背景色"},{name:"color",type:"string",default:"#fff",description:"文字颜色"},{name:"fontSize",type:"number",default:"12",description:"字号 px"},{name:"padding",type:"string",default:"6px 10px",description:"内边距"},{name:"borderRadius",type:"number",default:"0",description:"圆角 px"},{name:"zIndex",type:"number",default:"2",description:"层叠顺序"},{name:"showWhen",type:'"always" | "loading" | "loaded" | "error"',default:'"always"',description:"何时显示"},{name:"trigger",type:'"always" | "hover"',default:'"always"',description:"触发方式"}],fk=`// 底部信息条（常显）
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
});`,hk=[{name:"底部信息条（常显）",description:"半透明黑底白字信息条，常显于底部。",src:"https://picsum.photos/seed/overlay-bottom/600/400",config:{content:"来源：picsum.photos",position:"bottom",background:"rgba(0,0,0,0.62)",color:"#fff",showWhen:"always",trigger:"always"}},{name:"悬停显示信息",description:"平时干净，鼠标悬停时居中浮出提示文字。",src:"https://picsum.photos/seed/overlay-hover/600/400",config:{content:"悬停查看详情",position:"center",background:"rgba(0,0,0,0.62)",color:"#fff",showWhen:"always",trigger:"hover"}}],yk=["顶部 / 底部 / 居中三位置","文本支持静态或函数动态派生","背景 / 颜色 / 字号 / 圆角可调","可常显或悬停触发","可按加载状态（loading/loaded/error）显示"],vk=["图片来源 / 版权信息","悬停浮出操作提示","加载 / 错误态文案","图库元信息展示"],wk=["content 传函数时可按 context（含 imageState / src）派生，但场景示例画廊用静态文本以保证实时预览。","与 Caption 的区别：OverlayInfo 更通用（任意文本 + 触发时机 + 加载态），Caption 专注单一图注。"],xk={name:ak,description:lk,since:ck,tags:uk,events:dk,methods:pk,methodsNote:mk,config:gk,example:fk,examples:hk,features:yk,useCases:vk,notes:wk},bk="ParallaxPlugin",Pk="视差滚动：随页面滚动按强度偏移图片位置。",$k="2.0.0",Sk=["visual","视觉"],Ck=[{name:"onMount",when:"组件挂载完成、插件注册后执行一次（返回的清理函数在 manager.clear 时逆序执行）",description:"初始化副作用：注册监听、起定时器、建观察器；必须返回清理函数或配合 onUnmount 收尾"},{name:"onUnmount",when:"组件卸载前执行一次",description:"释放监听、定时器与观察器；与 onMount 成对出现，避免泄漏"}],Lk=[],Ik="只读取 context 字段（props / state / data），不调用上下文方法",kk=[{name:"strength",type:"number",default:"0.2",description:"偏移强度 0..1"},{name:"axis",type:'"y" | "x"',default:'"y"',description:"偏移轴向"}],_k=`// 垂直视差：滚动时图片缓慢位移
const ParallaxImage = withPlugins(LazyLoadImageCore, [
  createParallaxPlugin({ strength: 0.2, axis: "y" }),
]);

<ParallaxImage src="https://picsum.photos/seed/parallax/600/400" alt="视差" />;`,Ek=[{name:"垂直视差",description:"中等强度 y 轴视差，滚动时图片缓移，营造纵深。",src:"https://picsum.photos/seed/parallax-y/600/400",config:{strength:.2,axis:"y"}},{name:"轻微视差",description:"低强度视差，含蓄的层次感，不喧宾夺主。",src:"https://picsum.photos/seed/parallax-light/600/400",config:{strength:.1,axis:"y"}}],Rk=["随滚动偏移图片（y / x 轴）","强度可调（0~1）","纯 transform 实现，性能友好","增强页面纵深与动感"],zk=["落地页 / Hero 区背景","长图文滚动叙事","作品集视差画廊","需要纵深氛围的视觉场景"],Ok=["视差依赖页面滚动，demo 小卡片内滚动幅度有限，效果在长页面更明显。","strength 过大可能导致图片露出边缘，建议配合 overflow:hidden 容器。"],Dk={name:bk,description:Pk,since:$k,tags:Sk,events:Ck,methods:Lk,methodsNote:Ik,config:kk,example:_k,examples:Ek,features:Rk,useCases:zk,notes:Ok},Mk="PerformanceMonitorPlugin",jk="性能监控：统计单张图片的加载耗时，可选在四角叠加实时展示耗时面板，并在加载完成时通过 onReport 上报。",Tk="2.0.0",Nk=["other","监控","性能"],Ak=[{name:"onLoadSuccess",when:"图片成功解码可显示时",description:"拿到最终 displaySrc 做后续动作（上报、预取下张、淡入）"},{name:"renderOverlay",when:"每次渲染，覆盖在图片容器之上",description:"骨架屏、错误占位、水印、加载动画"}],Bk=[],Uk="只读取 context 字段（props / state / data），不调用上下文方法",Fk=[{name:"showOverlay",type:"boolean",default:"true",description:"是否在图片上叠加耗时面板"},{name:"overlayPosition",type:'"top-left" | "top-right" | "bottom-left" | "bottom-right"',default:'"top-right"',description:"面板位置（四角）"},{name:"color",type:"string",default:'"#fff"',description:"文字色"},{name:"background",type:"string",default:'"rgba(0,0,0,0.45)"',description:"面板背景"},{name:"onReport",type:"(data: { src; durationMs; network?; device? }) => void",default:"undefined",description:"加载完成上报回调"}],Wk=`const PerfImage = withPlugins(LazyLoadImageCore, [
  createPerformanceMonitorPlugin({
    overlayPosition: "bottom-left",
    onReport: (data) => console.log("perf", data),
  }),
]);

<PerfImage src="https://picsum.photos/id/1015/500/300" alt="性能监控示例" />;`,Vk=[{name:"默认耗时面板",description:"右上角显示 Loaded in N ms。",src:"https://picsum.photos/id/1015/500/300",config:{showOverlay:!0}},{name:"左下角面板",description:"面板移动到左下角。",src:"https://picsum.photos/id/1021/500/300",config:{overlayPosition:"bottom-left"}},{name:"自定义配色",description:"蓝色背景 + 白字，突出展示。",src:"https://picsum.photos/id/1026/500/300",config:{background:"rgba(33,118,255,0.6)",color:"#fff"}}],Hk=["加载耗时统计","四角面板可选","自定义配色","onReport 上报","防抖去重"],Gk=["LCP/加载耗时测量","性能优化验证","监控告警","A/B 对比"],qk=["onReport 为函数型配置，静态预览仅展示面板；函数用法见用法示例。"],Qk={name:Mk,description:jk,since:Tk,tags:Nk,events:Ak,methods:Bk,methodsNote:Uk,config:Fk,example:Wk,examples:Vk,features:Hk,useCases:Gk,notes:qk},Kk="PreconnectPlugin",Yk="DNS 预连接：提前与图片域名建立连接，可配置跨域。",Xk="2.0.0",Zk=["loading","加载策略"],Jk=[{name:"onMount",when:"组件挂载完成、插件注册后执行一次（返回的清理函数在 manager.clear 时逆序执行）",description:"初始化副作用：注册监听、起定时器、建观察器；必须返回清理函数或配合 onUnmount 收尾"},{name:"onUnmount",when:"组件卸载前执行一次",description:"释放监听、定时器与观察器；与 onMount 成对出现，避免泄漏"},{name:"onSrcChange",when:"src 变化、切换到新图时",description:"重置状态、清理旧缓存、重新进入懒加载判定"},{name:"renderOverlay",when:"每次渲染，覆盖在图片容器之上",description:"骨架屏、错误占位、水印、加载动画"}],e_=[],t_="只读取 context 字段（props / state / data），不调用上下文方法",n_=[{name:"domains",type:"string[]",description:"额外预连接域名"},{name:"crossOrigin",type:"string | null",description:'"anonymous" | "use-credentials" | null'},{name:"showBadge",type:"boolean",default:"false",description:"是否在卡片上显示「已预连 N」徽标（便于观察注入效果）"}],o_=`const LazyImage = withPlugins(LazyLoadImageCore, [
  createPreconnectPlugin({
    domains: ["https://cdn.example.com", "https://img.example.com"],
    crossOrigin: "anonymous",
  }),
]);`,r_=[{name:"基础预连接",description:"为图片 CDN 域名提前建连，消除首图 DNS/TLS 往返，更快出现。",config:{domains:["https://picsum.photos"],crossOrigin:"anonymous",showBadge:!0}},{name:"多域名预连接",description:"同时预连接多个静态资源域名，适合跨 CDN 的图片源。",config:{domains:["https://picsum.photos","https://fastly.picsum.photos"],crossOrigin:"anonymous"}}],s_=['挂载时注入 <link rel="preconnect">，提前完成 DNS/TCP/TLS 握手',"支持跨域凭证配置（crossOrigin: anonymous / use-credentials）","与浏览器默认预连接策略互补，相同域名不会重复注入"],i_=["图片托管在独立 CDN 域名时，消除首图握手延迟","瀑布流列表首屏涉及多个静态资源域名"],a_=["仅注入预连接提示，不保证一定建连，实际收益取决于浏览器调度。","不宜预连接过多域名，以免占用有限的连接资源。","已在本插件内去重，重复传入相同域名只会注入一次。"],l_={name:Kk,description:Yk,since:Xk,tags:Zk,events:Jk,methods:e_,methodsNote:t_,config:n_,example:o_,examples:r_,features:s_,useCases:i_,notes:a_},c_="PredictiveLoadingPlugin",u_='预测性预加载（v2 真实实现）：未提供 predict 时，内置启发式按 URL 末尾数字段递增/递减派生「下一张」并注入 <link rel="preload"> 预取；也可传入 predict 自定义预测目标。',d_="2.0.0",p_=["loading","加载策略","预取"],m_=[{name:"onMount",when:"组件挂载完成、插件注册后执行一次（返回的清理函数在 manager.clear 时逆序执行）",description:"初始化副作用：注册监听、起定时器、建观察器；必须返回清理函数或配合 onUnmount 收尾"}],g_=[],f_="只读取 context 字段（props / state / data），不调用上下文方法",h_=[{name:"model",type:'"heuristic" | "ml"',default:'"heuristic"',description:"预测模型；ml 当前同样走启发式（真正模型由 predict 提供）"},{name:"strategy",type:'"increment" | "decrement"',default:'"increment"',description:"内置启发式：派生方向（递增/递减 URL 末尾数字段）"},{name:"predict",type:"(context) => string[] | Promise<string[]>",default:"未设置（用内置启发式）",description:"自定义预测：返回需要预加载的图片链接列表，优先级高于内置启发式"},{name:"maxPreload",type:"number",default:"3",description:"单次最多预取数量"},{name:"as",type:'"image" | "fetch"',default:'"image"',description:"preload 资源类型"},{name:"crossOrigin",type:'"anonymous" | "use-credentials" | null',default:'"anonymous"',description:"跨域策略"}],y_=`const LazyImage = withPlugins(LazyLoadImageCore, [
  // 无 predict：内置启发式按 URL 末尾数字递增预取下 3 张
  createPredictiveLoadingPlugin({ model: "heuristic", strategy: "increment", maxPreload: 3 }),
]);

// 例：src=.../id/1015/ 会预取 .../id/1016/、1017/、1018/
<LazyImage src="https://picsum.photos/id/1015/500/300" alt="预测预加载示例" />;`,v_=[{name:"内置启发式递增",description:"按 URL 末尾数字递增派生下 3 张并预取（如相册下一页）。",src:"https://picsum.photos/id/1015/500/300",config:{model:"heuristic",strategy:"increment",maxPreload:3}},{name:"内置启发式递减",description:"递减派生上一张方向预取。",src:"https://picsum.photos/id/1020/500/300",config:{strategy:"decrement",maxPreload:3}},{name:"自定义预测",description:"用业务上下文决定预加载目标，限制为 3 张。",src:"https://picsum.photos/id/1018/500/300",config:{maxPreload:3}}],w_=["内置启发式真实派生「下一张」并注入 preload（非空头）","predict 自定义预测优先级更高","strategy 递增/递减可选","maxPreload 限制数量，相同 href 不重复注入"],x_=["相册 / 轮播：预加载下一张，切换无白屏","详情页：预加载相关推荐图"],b_=["仅注入 preload 提示，实际加载仍由浏览器调度；preload 在 Network 面板可见（见 HoverPrefetch 同类展示）。","URL 中无数字段时启发式无候选，可改用 predict 显式给出。"],P_={name:c_,description:u_,since:d_,tags:p_,events:m_,methods:g_,methodsNote:f_,config:h_,example:y_,examples:v_,features:w_,useCases:x_,notes:b_},$_="PriceTagPlugin",S_="商品价格标签：在图片上叠加价格信息，支持原价、折扣、节省金额、异步价格获取与淡入动画。",C_="2.0.0",L_=["ecommerce","电商核心"],I_=[{name:"renderOverlay",when:"每次渲染，覆盖在图片容器之上",description:"骨架屏、错误占位、水印、加载动画"}],k_=[],__="只读取 context 字段（props / state / data），不调用上下文方法",E_=[{name:"price",type:"number",default:"undefined",description:"当前价格"},{name:"currency",type:"string",default:'"$"',description:"货币符号"},{name:"position",type:'"top-left" | "top-right" | "bottom-left" | "bottom-right"',default:'"top-right"',description:"标签位置（四角）"},{name:"originalPrice",type:"number",default:"undefined",description:"原价（划线显示）"},{name:"discount",type:"string",default:"undefined",description:"折扣文案，如 “40% OFF”"},{name:"showSavings",type:"boolean",default:"false",description:"是否计算并显示节省金额"},{name:"backgroundColor",type:"string",default:'"#c62828"',description:"标签背景色"},{name:"textColor",type:"string",default:'"#fff"',description:"标签文字色"},{name:"animate",type:"boolean",default:"true",description:"淡入动画"},{name:"style",type:"React.CSSProperties",default:"{}",description:"自定义叠加样式"},{name:"fetchPrice",type:"(context) => Promise<{ price; originalPrice?; discount? }>",default:"undefined",description:"异步获取价格（API 集成）"},{name:"loadingText",type:"string",default:'"加载中..."',description:"异步加载文案"},{name:"errorText",type:"string",default:'"价格获取失败"',description:"异步失败文案"}],R_=`// 1. 组装带价格标签的懒加载图片组件
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
});`,z_=[{name:"完整价格信息（带折扣和节省金额）",description:"原价划线 + 折扣标签 + 自动计算节省金额，落在左下角。",src:"https://picsum.photos/id/180/400/300",config:{price:299.99,currency:"$",position:"bottom-left",originalPrice:499.99,discount:"40% OFF",showSavings:!0}},{name:"简单价格标签",description:"仅当前价 + 货币符号，落在左上角。",src:"https://picsum.photos/id/201/400/300",config:{price:1999,currency:"¥",position:"top-left"}},{name:"自定义样式价格标签",description:"自定义背景色 / 文字色 / 圆角与内边距。",src:"https://picsum.photos/id/250/400/300",config:{price:59.99,currency:"€",position:"bottom-right",backgroundColor:"#4ECDC4",textColor:"#1A535C",style:{borderRadius:"8px",padding:"12px 16px"}}},{name:"异步获取价格（模拟 API）",description:"真实场景通过 fetchPrice 异步拉取价格；示例以静态值代替，可见“查询价格 / 价格查询失败”状态（见用法示例中的 fetchPrice）。",src:"https://picsum.photos/id/260/400/300",config:{currency:"¥",position:"top-right",showSavings:!0,price:1299.99,originalPrice:1999,discount:"限时优惠"}}],O_=["显示当前价格、原价、折扣标签","计算并显示节省金额","支持多种货币符号","4 个位置可选（四角）","淡入动画效果","完全自定义样式","支持异步价格数据获取（API 集成）","显示加载和错误状态"],D_=["电商产品列表","促销活动页面","特价商品展示","移动端商城","从 API 动态获取价格的场景","跨境电商实时汇率转换"],M_=["`fetchPrice` 返回后覆盖静态 `price`，接真实商品价格时用它，不必改组件。","配置 `originalPrice` 且高于 `price` 时展示划线价，`showSavings` 额外显示省额。"],j_={name:$_,description:S_,since:C_,tags:L_,events:I_,methods:k_,methodsNote:__,config:E_,example:R_,examples:z_,features:O_,useCases:D_,notes:M_},T_="PriorityLoadingPlugin",N_="优先级加载：按 high/medium/low 切换 eager/lazy 与 rootMargin。",A_="2.0.0",B_=["loading","加载策略"],U_=[{name:"transformProps",when:"渲染前链式改写图片 props",description:"补 sizes / 占位色 / 解码策略等"}],F_=[],W_="只读取 context 字段（props / state / data），不调用上下文方法",V_=[{name:"priority",type:'"high" | "medium" | "low"',default:'"medium"',description:"加载优先级：high→loading=eager / low→lazy+大 rootMargin / medium→lazy"}],H_=`// LCP / 首屏主图：立即加载
const HeroImage = withPlugins(LazyLoadImageCore, [
  createPriorityLoadingPlugin({ priority: "high" }),
]);

// 折叠区/长列表底部图：延后加载
const BelowImage = withPlugins(LazyLoadImageCore, [
  createPriorityLoadingPlugin({ priority: "low" }),
]);`,G_=[{name:"首屏 LCP 图（high）",description:"关键图立即 eager 加载，缩短最大内容绘制时间。",config:{priority:"high"}},{name:"折叠区图（low）",description:"非首屏图延后加载，rootMargin 更大，滚动临近才加载。",config:{priority:"low"}}],q_=["high → loading=eager、rootMargin=0，立即加载","low → loading=lazy、rootMargin 更大，更晚加载","medium → 默认 lazy + 适中 rootMargin（约 200px）"],Q_=["把 LCP / 首屏主图设为 high","把长列表底部、折叠内容图设为 low，错峰加载"],K_=["仅调整 loading 与 rootMargin，不会阻塞其它插件生效。","与 ScrollIdle、ConcurrencyControl 叠加时可协同控制加载节奏。","rootMargin 会被合并进核心的 IntersectionObserver 参数。"],Y_={name:T_,description:N_,since:A_,tags:B_,events:U_,methods:F_,methodsNote:W_,config:V_,example:H_,examples:G_,features:q_,useCases:Q_,notes:K_},X_="ProgressOverlayPlugin",Z_="加载进度条覆盖层：百分比文本与 indeterminate 模式。",J_="2.0.0",eE=["visual","视觉"],tE=[{name:"onProgress",when:'加载进度更新（由 withPlugins 订阅 bus 的 "progress" 桥接）',description:"展示进度条 / 百分比；仅对支持进度上报的 loader 生效"},{name:"renderOverlay",when:"每次渲染，覆盖在图片容器之上",description:"骨架屏、错误占位、水印、加载动画"}],nE=[],oE="只读取 context 字段（props / state / data），不调用上下文方法",rE=[{name:"showWhen",type:'"always" | "loading"',default:'"loading"',description:"何时显示"},{name:"height",type:"number",default:"3",description:"进度条高度 px"},{name:"color",type:"string",default:"#4a90e2",description:"进度条颜色"},{name:"background",type:"string",default:"transparent",description:"背景遮罩色"},{name:"showPercentText",type:"boolean",default:"false",description:"是否显示百分比文本"}],sE=`// 顶部进度条 + 百分比文本
const ProgressImage = withPlugins(LazyLoadImageCore, [
  createProgressOverlayPlugin({
    showWhen: "loading",
    height: 3,
    color: "#4a90e2",n    showPercentText: true,
  }),
]);

<ProgressImage src="https://picsum.photos/seed/progress/600/400" alt="进度蒙层" />;`,iE=[{name:"顶部进度条 + 百分比",description:"细进度条置于顶部，并显示实时百分比。",src:"https://picsum.photos/seed/progress-top/600/400",config:{showWhen:"loading",height:3,color:"#4a90e2",showPercentText:!0}},{name:"半透明遮罩 + 百分比",description:"加载期覆盖半透明遮罩，中心显示百分比，适合大图。",src:"https://picsum.photos/seed/progress-mask/600/400",config:{showWhen:"loading",height:4,color:"#22c55e",background:"rgba(0,0,0,0.12)",showPercentText:!0}}],aE=["顶部 / 覆盖式进度条","实时百分比文本","颜色 / 高度 / 背景可调","加载完成后自动消失"],lE=["大图 / 慢网络加载反馈","视频封面缓冲提示","需要明确进度感知的场景","与 Skeleton 配合提升占位体验"],cE=["进度数据来自内核 progress 事件，跨域或缓存命中时可能很快跳到 100%。","与 Skeleton 同时使用时，进度条层级通常高于骨架。"],uE={name:X_,description:Z_,since:J_,tags:eE,events:tE,methods:nE,methodsNote:oE,config:rE,example:sE,examples:iE,features:aE,useCases:lE,notes:cE},dE="PromoBadgePlugin",pE="促销角标：在商品图片上显示 NEW/HOT/SALE 等促销标签，支持脉冲动画和丝带样式，可叠加多个。",mE="2.0.0",gE=["ecommerce","电商核心"],fE=[{name:"renderOverlay",when:"每次渲染，覆盖在图片容器之上",description:"骨架屏、错误占位、水印、加载动画"}],hE=[],yE="只读取 context 字段（props / state / data），不调用上下文方法",vE=[{name:"type",type:'"new" | "hot" | "sale" | "limited" | "bestseller" | "custom"',default:'"hot"',description:"预设标签类型"},{name:"text",type:"string",default:"undefined",description:"自定义文案（type=custom 时生效）"},{name:"position",type:'"top-left" | "top-right" | "bottom-left" | "bottom-right"',default:'"top-left"',description:"角标位置（四角）"},{name:"backgroundColor",type:"string",default:"undefined",description:"背景色"},{name:"color",type:"string",default:"undefined",description:"文字色"},{name:"animate",type:"boolean",default:"true",description:"淡入动画"},{name:"pulse",type:"boolean",default:"false",description:"脉冲呼吸动画"},{name:"ribbon",type:"boolean",default:"false",description:"丝带样式（倾斜 45°）"},{name:"style",type:"React.CSSProperties",default:"{}",description:"自定义叠加样式"}],wE=`// 1. 单个促销角标
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
<HotSaleImage src="https://picsum.photos/id/220/500/400" alt="促销商品" />;`,xE=[{name:"NEW 新品标签",description:"左上角绿色 NEW 角标。",src:"https://picsum.photos/id/168/300/300",config:{type:"new",position:"top-left"}},{name:"HOT 热门标签（脉冲动画）",description:"右上角红色 HOT，带脉冲呼吸效果。",src:"https://picsum.photos/id/175/300/300",config:{type:"hot",position:"top-right",pulse:!0}},{name:"SALE 促销丝带",description:"右上角红色丝带（倾斜 45°）。",src:"https://picsum.photos/id/188/300/300",config:{type:"sale",position:"top-right",ribbon:!0}},{name:"LIMITED 限量标签",description:"右上角紫色 LIMITED，带脉冲。",src:"https://picsum.photos/id/196/300/300",config:{type:"limited",position:"top-right",pulse:!0}},{name:"BESTSELLER 畅销标签",description:"右下角橙色 BEST 角标。",src:"https://picsum.photos/id/203/300/300",config:{type:"bestseller",position:"bottom-right"}},{name:"自定义标签（VIP 专享）",description:"自定义文案、背景色与文字色。",src:"https://picsum.photos/id/211/300/300",config:{type:"custom",text:"VIP专享",position:"top-left",backgroundColor:"#FFD700",color:"#000"}},{name:"多个标签组合",description:"一张图同时叠加 NEW + SALE（丝带）+ HOT（脉冲），不同位置不同样式。",src:"https://picsum.photos/id/220/500/400",configs:[{type:"new",position:"top-left"},{type:"sale",position:"top-right",ribbon:!0},{type:"hot",position:"bottom-right",pulse:!0}]}],bE=["6 种预设类型：NEW / HOT / SALE / LIMITED / BESTSELLER / custom","支持自定义文字、背景色、文字颜色","脉冲动画效果（吸引注意力）","丝带样式（倾斜 45°）","4 个位置可选（四角）","支持同一图片显示多个标签"],PE=["新品上市标记","热销商品突出","促销活动标识","限时限量提醒","VIP / 会员专享"],$E=["`type` 只是预设（new/hot/sale/limited/bestseller），`text` 可覆盖预设文案与颜色。","`ribbon: true` 渲染角部绶带，容器需 overflow:hidden 才不会溢出圆角。"],SE={name:dE,description:pE,since:mE,tags:gE,events:fE,methods:hE,methodsNote:yE,config:vE,example:wE,examples:xE,features:bE,useCases:PE,notes:$E},CE="RedactionPlugin",LE="隐私打码：在指定百分比区域叠加模糊或色块遮挡。",IE="2.0.0",kE=["visual","视觉"],_E=[{name:"renderOverlay",when:"每次渲染，覆盖在图片容器之上",description:"骨架屏、错误占位、水印、加载动画"}],EE=[],RE="只读取 context 字段（props / state / data），不调用上下文方法",zE=[{name:"enabled",type:"boolean",default:"true",description:"是否启用"},{name:"boxes",type:"RedactionBox[]",default:"[]",description:"遮挡区域：{ x, y, w, h (0~1), blur?, color? }"},{name:"zIndex",type:"number",default:"3",description:"层叠顺序"}],OE=`// 局部打码（如人脸 / 车牌）
const RedactedImage = withPlugins(LazyLoadImageCore, [
  createRedactionPlugin({
    boxes: [
      { x: 0.40, y: 0.30, w: 0.20, h: 0.15, blur: 8 },
    ],
  }),
]);

<RedactedImage src="https://picsum.photos/seed/redaction/600/400" alt="打码" />;`,DE=[{name:"局部模糊打码",description:"在图片 40%/30% 处覆盖一块 20%×15% 的模糊区域（如人脸）。",src:"https://picsum.photos/seed/redaction-blur/600/400",config:{enabled:!0,boxes:[{x:.4,y:.3,w:.2,h:.15,blur:8}]}},{name:"色块遮挡",description:"用半透明色块遮挡敏感区域，不依赖模糊。",src:"https://picsum.photos/seed/redaction-block/600/400",config:{enabled:!0,boxes:[{x:.1,y:.7,w:.35,h:.12,color:"rgba(0,0,0,0.85)"}]}}],ME=["按百分比坐标划定遮挡区（自适应尺寸）","支持模糊（blur）或纯色块两种遮挡","可同时覆盖多个区域","整体启停"],jE=["人脸 / 车牌隐私打码","敏感信息遮挡","截图脱敏","合规图片发布"],TE=["坐标使用 0~1 的相对比例，图片缩放时遮挡区自动跟随。","blur 通过 backdrop-filter 实现；若浏览器不支持会以纯色块兜底。","打码是覆盖层，不改变原图像素，导出原图不会被脱敏。"],NE={name:CE,description:LE,since:IE,tags:kE,events:_E,methods:EE,methodsNote:RE,config:zE,example:OE,examples:DE,features:ME,useCases:jE,notes:TE},AE="ResponsivePlugin",BE="响应式图片：注入 srcset/sizes 多宽度资源，浏览器按视口选择最佳尺寸，兼顾清晰度与流量。",UE="2.0.0",FE=["a11y","可访问性","网络","响应式"],WE=[{name:"onLoadSuccess",when:"图片成功解码可显示时",description:"拿到最终 displaySrc 做后续动作（上报、预取下张、淡入）"},{name:"transformProps",when:"渲染前链式改写图片 props",description:"补 sizes / 占位色 / 解码策略等"}],VE=[],HE="只读取 context 字段（props / state / data），不调用上下文方法",GE=[{name:"enabled",type:"boolean",default:"true",description:"是否启用响应式"},{name:"variants",type:"{ width: number; src?: string }[]",default:"[{400},{800},{1200}]",description:"宽度变体列表"},{name:"buildSrc",type:"(baseSrc, width) => string",default:"defaultBuildSrc（追加 ?w=）",description:"自定义链接生成（函数型，参见用法示例）"},{name:"sizes",type:"string",default:'"(max-width: 800px) 100vw, 800px"',description:"sizes 属性"}],qE=`const ResponsiveImage = withPlugins(LazyLoadImageCore, [
  createResponsivePlugin({
    variants: [{ width: 400 }, { width: 800 }, { width: 1200 }],
    sizes: "(max-width: 800px) 100vw, 800px",
    buildSrc: (base, w) => \`\${base}?w=\${w}\`,
  }),
]);

<ResponsiveImage src="https://picsum.photos/id/1015/500/300" alt="响应式示例" />;`,QE=[{name:"默认多宽度",description:"注入 400/800/1200 三档 srcset。",src:"https://picsum.photos/id/1015/500/300",config:{variants:[{width:400},{width:800},{width:1200}],sizes:"(max-width: 800px) 100vw, 800px"}},{name:"自定义尺寸档位",description:"仅 320/640 两档，适合轻量场景。",src:"https://picsum.photos/id/1021/500/300",config:{variants:[{width:320},{width:640}],sizes:"(max-width: 640px) 100vw, 640px"}},{name:"关闭响应式",description:"enabled=false 时不注入 srcset。",src:"https://picsum.photos/id/1026/500/300",config:{enabled:!1}}],KE=["srcset 多宽度","自定义 buildSrc","sizes 响应式","自动适配屏幕/Retina","可关闭"],YE=["响应式画廊","移动端流量优化","Retina 高清","CMS 图片"],XE=["buildSrc 为函数型配置，静态预览使用默认追加 ?w= 策略；自定义用法见用法示例。"],ZE={name:AE,description:BE,since:UE,tags:FE,events:WE,methods:VE,methodsNote:HE,config:GE,example:qE,examples:QE,features:KE,useCases:YE,notes:XE},JE="RetryOnErrorPlugin",eR="失败重试：图片加载失败后按指数退避（可选抖动）自动重试，提升网络抖动 / 瞬时故障下的自愈成功率，并提供重试进度角标。",tR="2.0.0",nR=["network","网络","重试","自愈"],oR=[{name:"onUnmount",when:"组件卸载前执行一次",description:"释放监听、定时器与观察器；与 onMount 成对出现，避免泄漏"},{name:"onLoadError",when:"加载失败（网络错误、解码失败、超时）",description:"返回 true 表示错误已被处理（如切换备用源），否则继续走默认降级"},{name:"onSrcChange",when:"src 变化、切换到新图时",description:"重置状态、清理旧缓存、重新进入懒加载判定"},{name:"renderOverlay",when:"每次渲染，覆盖在图片容器之上",description:"骨架屏、错误占位、水印、加载动画"}],rR=[],sR="只读取 context 字段（props / state / data），不调用上下文方法",iR=[{name:"maxRetries",type:"number",default:"2",description:"最大重试次数"},{name:"baseDelayMs",type:"number",description:"退避基准毫秒（默认 500）"},{name:"jitter",type:"boolean",description:"是否在退避基础上叠加随机抖动"}],aR=`import { LazyLoadImageCore, createRetryOnErrorPlugin, withPlugins } from "vane-lazy-image";

const LazyImage = withPlugins(LazyLoadImageCore, [
  createRetryOnErrorPlugin({ maxRetries: 3, baseDelayMs: 400, jitter: true }),
]);

// 故意触发失败以观察指数退避重试
<LazyImage src="https://invalid.example.com/x.png" alt="失败重试示例" />`,lR=[{name:"自动重试",description:"失败后指数退避重试，用尽后角标显示『重试失败』（演示用无效地址）。",src:"https://invalid.example.com/retry.png",config:{maxRetries:3,baseDelayMs:400}},{name:"带抖动退避",description:"在指数退避基础上叠加随机抖动，避免重试风暴。",src:"https://invalid.example.com/retry-jitter.png",config:{maxRetries:2,baseDelayMs:600,jitter:!0}}],cR=["指数退避重试：delay = baseDelayMs * 2^(n-1)","可选 jitter 抖动避免重试风暴","角标实时显示『重试中 n/max』与『重试失败(max)』","用尽后放行错误给下游插件（ErrorOverlay / ErrorBadge）"],uR=["弱网 / 瞬时 5xx 自愈","与手动重试（ErrorOverlay）互补"],dR=["maxRetries 默认 2，baseDelayMs 默认 500","重试用 ?retry=时间戳&n=count 防止缓存命中","重试用尽返回 false，错误继续向下游传播"],pR={name:JE,description:eR,since:tR,tags:nR,events:oR,methods:rR,methodsNote:sR,config:iR,example:aR,examples:lR,features:cR,useCases:uR,notes:dR},mR="RevealAnimationPlugin",gR="图片揭示动画：为图片加载添加各种进场动画（淡入/缩放/旋转/翻转/弹跳/弹性等 16 种预设 + 自定义），纯 CSS 无依赖。",fR="2.0.0",hR=["interaction","视觉效果与交互","visual"],yR=[{name:"onLoadSuccess",when:"图片成功解码可显示时",description:"拿到最终 displaySrc 做后续动作（上报、预取下张、淡入）"}],vR=[],wR="只读取 context 字段（props / state / data），不调用上下文方法",xR=[{name:"animation",type:'"fade" | "fade-up" | "fade-down" | "fade-left" | "fade-right" | "zoom-in" | "zoom-out" | "rotate-in" | "flip-x" | "flip-y" | "slide-up" | "slide-down" | "slide-left" | "slide-right" | "bounce" | "elastic" | "custom"',default:'"fade-up"',description:"动画类型"},{name:"duration",type:"number",default:"600",description:"持续时间（毫秒）"},{name:"delay",type:"number",default:"0",description:"延迟（毫秒）"},{name:"easing",type:"string",default:'"ease-out"',description:"缓动函数"},{name:"customAnimation",type:"string",default:'""',description:"自定义动画名（animation 为 custom 时生效）"},{name:"customKeyframes",type:"string",default:'""',description:"自定义 keyframes 文本"},{name:"fillMode",type:'"none" | "forwards" | "backwards" | "both"',default:'"both"',description:"动画填充模式"},{name:"disabled",type:"boolean",default:"false",description:"是否禁用"}],bR=`// 1. 组装带揭示动画的懒加载图片
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
});`,PR=[{name:"淡入上浮（默认）",description:"fade-up：图片加载完成后从下方淡入上浮，最通用的进场效果。",src:"https://picsum.photos/id/1018/400/300",config:{animation:"fade-up",duration:700,easing:"ease-out"}},{name:"缩放进入 zoom-in",description:"图片由 1.2 倍缩放回落至原尺寸并淡入，适合主视觉。",src:"https://picsum.photos/id/1015/400/300",config:{animation:"zoom-in",duration:800}},{name:"旋转进入 rotate-in",description:"带轻微旋转的进场，动感更强。",src:"https://picsum.photos/id/1024/400/300",config:{animation:"rotate-in",duration:900,delay:100}},{name:"弹跳 bounce",description:"带回弹缓冲的进场，活泼、吸引注意。",src:"https://picsum.photos/id/1039/400/300",config:{animation:"bounce",duration:1e3}},{name:"弹性 elastic + 自定义时长",description:"弹性缓动 + 更长时长，强调“弹出”质感。",src:"https://picsum.photos/id/1043/400/300",config:{animation:"elastic",duration:1200,easing:"cubic-bezier(0.68, -0.55, 0.265, 1.55)"}},{name:"自定义关键帧 custom",description:"通过 customAnimation 指定动画名，并以 customKeyframes 注入关键帧文本，可做任意效果。",src:"https://picsum.photos/id/1050/400/300",config:{animation:"custom",customAnimation:"myReveal",customKeyframes:"@keyframes myReveal { from { opacity: 0; transform: scale(1.2) rotate(8deg); } to { opacity: 1; transform: none; } }"}}],$R=["16 种预设动画（淡入/缩放/旋转/翻转/滑动/弹跳/弹性）","支持自定义动画名 + 关键帧文本","可配置时长、延迟、缓动函数","fill 模式控制动画结束态","可一键禁用（disabled，适配低端设备）","纯 CSS 实现，无运行时依赖"],SR=["图片列表进场","瀑布流懒加载","轮播图切换","首屏内容揭示","卡片/区块入场动画","营销落地页视觉点缀"],CR=["动画在图片加载完成后触发一次；再次滚动不会重复播放。","低端设备或开启“减少动态效果”偏好时，可设 disabled: true 关闭动画。"],LR={name:mR,description:gR,since:fR,tags:hR,events:yR,methods:vR,methodsNote:wR,config:xR,example:bR,examples:PR,features:$R,useCases:SR,notes:CR},IR="SEOPlugin",kR="SEO 增强：alt/title 回退、固定容器宽高比减少 CLS、将首屏关键图设为 LCP 优先（eager + preload），提升搜索排名与加载体验。",_R="2.0.0",ER=["a11y","可访问性","SEO"],RR=[{name:"onMount",when:"组件挂载完成、插件注册后执行一次（返回的清理函数在 manager.clear 时逆序执行）",description:"初始化副作用：注册监听、起定时器、建观察器；必须返回清理函数或配合 onUnmount 收尾"},{name:"transformProps",when:"渲染前链式改写图片 props",description:"补 sizes / 占位色 / 解码策略等"}],zR=[],OR="只读取 context 字段（props / state / data），不调用上下文方法",DR=[{name:"enabled",type:"boolean",default:"true",description:"是否启用"},{name:"altFallback",type:"string",default:"undefined",description:"未提供 alt 时的回退值"},{name:"title",type:"string",default:"undefined",description:"图片 title（提示与关键词）"},{name:"aspectRatio",type:"string",default:"undefined",description:'固定容器宽高比（如 "4/3"），减少 CLS'},{name:"priority",type:'"auto" | "lcp"',default:'"auto"',description:"lcp 时设为 eager 加载"},{name:"preload",type:"boolean",default:"false",description:"挂载时注入 preload 预载"}],MR=`const SeoImage = withPlugins(LazyLoadImageCore, [
  createSEOPlugin({
    altFallback: "示例图片",
    title: "演示图像",
    aspectRatio: "4/3",
    priority: "lcp",
    preload: true,
  }),
]);

<SeoImage src="https://picsum.photos/id/1015/500/300" alt="" />;`,jR=[{name:"LCP 关键图",description:"首屏关键图：eager + preload + 固定比例，优化 LCP。",src:"https://picsum.photos/id/1015/500/300",config:{altFallback:"示例图片",title:"演示图像",aspectRatio:"4/3",priority:"lcp",preload:!0}},{name:"alt/title 回退",description:"补充 alt 与 title，利于读屏与 SEO。",src:"https://picsum.photos/id/1021/500/300",config:{altFallback:"商品图",title:"热销商品"}},{name:"仅固定比例",description:"aspectRatio 防 CLS，其余默认。",src:"https://picsum.photos/id/1026/500/300",config:{aspectRatio:"16/9"}}],TR=["alt 回退","title 设置","aspect-ratio 防 CLS","LCP 优先（eager）","preload 预载","可关闭"],NR=["首屏 LCP 优化","SEO 排名","结构化标签","CLS 治理"],AR=['priority:"lcp" 会强制 eager 加载，请勿对所有图片使用，仅用于首屏关键图。'],BR={name:IR,description:kR,since:_R,tags:ER,events:RR,methods:zR,methodsNote:OR,config:DR,example:MR,examples:jR,features:TR,useCases:NR,notes:AR},UR="ScrollIdlePlugin",FR="滚动空闲加载：滚动停止后再发起加载，避免与滚动争抢带宽。",WR="2.0.0",VR=["loading","加载策略"],HR=[{name:"onMount",when:"组件挂载完成、插件注册后执行一次（返回的清理函数在 manager.clear 时逆序执行）",description:"初始化副作用：注册监听、起定时器、建观察器；必须返回清理函数或配合 onUnmount 收尾"},{name:"onUnmount",when:"组件卸载前执行一次",description:"释放监听、定时器与观察器；与 onMount 成对出现，避免泄漏"},{name:"onLoad",when:"加载流程开始、需要确定最终图片地址时",description:"自定义加载逻辑，返回最终图片 URL（objectURL / dataURL / 原地址）"}],GR=[],qR="只读取 context 字段（props / state / data），不调用上下文方法",QR=[{name:"idleMs",type:"number",default:"120",description:"判定为“空闲”的静止时间（毫秒）"},{name:"onlyWhenIntersecting",type:"boolean",default:"true",description:"是否仅在进入视口后生效（否则所有加载都会等待空闲）"},{name:"maxWaitMs",type:"number",default:"1200",description:"最长等待空闲的时间（毫秒），超过则直接继续加载，避免长时间滚动导致饥饿"},{name:"target",type:'"window" | "container"',default:'"window"',description:"监听对象：window 或容器（容器将使用 context.containerRef.current）"},{name:"axis",type:'"vertical" | "horizontal" | "both"',default:'"vertical"',description:"滚动轴向：vertical/horizontal/both（目前用于调试标注，可按需扩展策略）"},{name:"debug",type:"boolean",default:"false",description:"调试输出"}],KR=`const LazyImage = withPlugins(LazyLoadImageCore, [
  createScrollIdlePlugin({
    idleMs: 160,
    onlyWhenIntersecting: true,
    maxWaitMs: 1200, // 最多等 1.2s，避免饥饿
  }),
]);`,YR=[{name:"滚动停止后加载",description:"用户停止滚动 160ms 后再加载，滚动过程中不打断主线程与带宽。",config:{idleMs:160,onlyWhenIntersecting:!0,maxWaitMs:1200}},{name:"更敏感空闲",description:"80ms 即判定空闲，适合加载较轻的图标 / 缩略图。",config:{idleMs:80,maxWaitMs:800}}],XR=["监听滚动，空闲（停止滚动 idleMs）后才发起加载","默认仅进入视口后生效，不拖累首屏外元素","maxWaitMs 兜底，防止长时间连续滚动导致饥饿","支持 window / 容器两种监听对象"],ZR=["长列表滚动时避免与主线程 / 带宽争抢","低端机滚动卡顿优化"],JR=["与 ConcurrencyControl 叠加效果最佳。","maxWaitMs 务必设置，否则连续滚动可能长期不加载。","容器模式会使用 context.containerRef.current 作为监听目标。"],e5={name:UR,description:FR,since:WR,tags:VR,events:HR,methods:GR,methodsNote:qR,config:QR,example:KR,examples:YR,features:XR,useCases:ZR,notes:JR},t5="SkeletonPlugin",n5="骨架屏占位：加载期显示 shimmer/pulse 骨架动画。",o5="2.0.0",r5=["visual","视觉"],s5=[{name:"renderOverlay",when:"每次渲染，覆盖在图片容器之上",description:"骨架屏、错误占位、水印、加载动画"}],i5=[],a5="只读取 context 字段（props / state / data），不调用上下文方法",l5=[{name:"type",type:'"shimmer" | "pulse"',default:'"shimmer"',description:"动画类型"},{name:"backgroundColor",type:"string",default:"#e5e7eb",description:"底色"},{name:"highlightColor",type:"string",default:"#f3f4f6",description:"shimmer 高亮色"},{name:"borderRadius",type:"number",default:"6",description:"圆角 px"},{name:"zIndex",type:"number",default:"1",description:"层叠顺序"},{name:"showWhen",type:'"always" | "loading"',default:'"loading"',description:"何时显示"}],c5=`// 加载期 shimmer 骨架占位
const SkeletonImage = withPlugins(LazyLoadImageCore, [
  createSkeletonPlugin({
    type: "shimmer",
    borderRadius: 8,
    showWhen: "loading",
  }),
]);

<SkeletonImage src="https://picsum.photos/seed/skeleton/600/400" alt="骨架屏" />;`,u5=[{name:"Shimmer 骨架",description:"流光骨架，提示内容加载中，圆角 8。",src:"https://picsum.photos/seed/skeleton-shimmer/600/400",config:{type:"shimmer",borderRadius:8,showWhen:"loading"}},{name:"Pulse 骨架",description:"呼吸式明暗变化，更克制的占位动画。",src:"https://picsum.photos/seed/skeleton-pulse/600/400",config:{type:"pulse",backgroundColor:"#eee",highlightColor:"#f5f5f5",borderRadius:8}}],d5=["shimmer（流光）/ pulse（呼吸）两种动画","底色 / 高亮色 / 圆角可调","加载完成自动淡出","零图片请求，首屏即见"],p5=["列表 / 卡片加载占位","首屏骨架屏","与 BlurUp / LQIP 配合的兜底占位","弱网环境体验优化"],m5=['showWhen:"loading" 表示仅在加载期显示，图片就绪后自动让位。',"与 BlurUp 叠加时，建议骨架层级低于模糊图（zIndex 较小）。"],g5={name:t5,description:n5,since:o5,tags:r5,events:s5,methods:i5,methodsNote:a5,config:l5,example:c5,examples:u5,features:d5,useCases:p5,notes:m5},f5="SocialSharePlugin",h5="社交分享：在商品图片上显示社交分享按钮，支持 6 大平台、悬停展开、自定义尺寸与分享回调。",y5="2.0.0",v5=["ecommerce","电商核心"],w5=[{name:"renderOverlay",when:"每次渲染，覆盖在图片容器之上",description:"骨架屏、错误占位、水印、加载动画"}],x5=[],b5="只读取 context 字段（props / state / data），不调用上下文方法",P5=[{name:"platforms",type:'Array<"facebook"|"twitter"|"pinterest"|"linkedin"|"whatsapp"|"wechat">',default:'["facebook","twitter","pinterest"]',description:"分享平台列表"},{name:"position",type:'"top-left" | "top-right" | "bottom-left" | "bottom-right"',default:'"top-right"',description:"主按钮位置"},{name:"showOnHover",type:"boolean",default:"false",description:"悬停显示模式"},{name:"title",type:"string",default:'"分享图片"',description:"分享标题"},{name:"description",type:"string",default:'""',description:"分享描述"},{name:"ogImage",type:"string",default:"undefined",description:"Pinterest 等使用的媒体图"},{name:"size",type:'"small" | "medium" | "large"',default:'"medium"',description:"按钮尺寸"},{name:"onShare",type:"(platform) => void",default:"undefined",description:"分享回调"},{name:"style",type:"React.CSSProperties",default:"{}",description:"自定义容器样式"}],$5=`// 1. 指定分享平台，点击展开具体入口
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
<ShareImage src="https://picsum.photos/id/237/500/400" alt="商品图" />;`,S5=[{name:"默认分享按钮",description:"点击主按钮展开具体平台，再点平台进行分享。",src:"https://picsum.photos/id/237/500/400",config:{platforms:["facebook","twitter","pinterest"],position:"top-right",showOnHover:!1,title:"Amazing Product",description:"Check out this amazing product!"}},{name:"悬停显示（鼠标悬停时出现）",description:"默认隐藏，鼠标悬停图片才显示分享按钮。",src:"https://picsum.photos/id/247/500/400",config:{platforms:["facebook","twitter","linkedin","whatsapp"],position:"top-right",showOnHover:!0,size:"medium"}},{name:"更多平台（包含微信）",description:"小尺寸、右下角，覆盖 6 个平台。",src:"https://picsum.photos/id/257/500/400",config:{platforms:["facebook","twitter","pinterest","linkedin","whatsapp","wechat"],position:"bottom-right",showOnHover:!1,size:"small"}},{name:"大尺寸按钮",description:"左上角大尺寸分享按钮。",src:"https://picsum.photos/id/267/500/400",config:{platforms:["facebook","twitter","pinterest"],position:"top-left",showOnHover:!1,size:"large"}}],C5=["支持 6 大社交平台：Facebook / Twitter / Pinterest / LinkedIn / WhatsApp / WeChat","悬停显示模式","3 种尺寸可选（small / medium / large）","4 个位置可选","展开 / 收起动画","分享回调通知","自定义分享标题和描述"],L5=["电商产品分享","内容营销推广","作品集展示","照片 / 图片社区","礼物推荐分享","房产 / 旅游分享"],I5=["`showOnHover: true` 时分享条只在悬停出现；示例页默认常驻便于观察。","微信没有可直接打开的分享 URL，走 `onShare` 回调由业务方接入。"],k5={name:f5,description:h5,since:y5,tags:v5,events:w5,methods:x5,methodsNote:b5,config:P5,example:$5,examples:S5,features:C5,useCases:L5,notes:I5},_5="Spin360Plugin",E5="360° 环物旋转（gallery 核心插件）：把 images 当逐帧序列，拖拽或自动播放切换帧，覆盖主图显示。",R5="2.1.0",z5=["gallery","图集","360","环物","旋转"],O5=[{name:"galleryOverlay",when:"渲染图库大图浮层时",description:"大图视图、切换器、关闭按钮等浮层内容"}],D5=[{name:"setFrameIndex",signature:"ctx.setFrameIndex(i: number): void",description:"切换 360° 环物当前帧（写入图集协调态，触发重新渲染）"}],M5=[{name:"sensitivity",type:"number",default:"6",description:"拖拽灵敏度：像素位移超过该值才翻一帧"},{name:"autoPlay",type:"boolean",default:"false",description:"是否自动旋转"},{name:"autoPlayInterval",type:"number",default:"120",description:"自动旋转间隔（ms）"}],j5=`import { GalleryCore } from "vane-lazy-image/gallery";
import { createSpin360Plugin } from "vane-lazy-image/custom-plugins/Spin360Plugin";

<GalleryCore images={frames} plugins={[createSpin360Plugin({ autoPlay: true })]} />`,T5=[{name:"拖拽旋转",description:"在画布上左右拖拽切换 360 帧。",config:{autoPlay:!1}},{name:"自动旋转",description:"autoPlay 开启后自动逐帧旋转，适合展示。",config:{autoPlay:!0,autoPlayInterval:120}}],N5=["拖拽旋转 360°","自动播放","帧计数显示","逐帧序列（images 即帧）"],A5=["商品 360 环物展示","模型/预览图旋转","全景预览"],B5=["images 数组即 360 帧序列；少于 2 帧时不渲染。覆盖层 zIndex 5，独立于底层主图加载。"],U5={name:_5,description:E5,since:R5,tags:z5,events:O5,methods:D5,config:M5,example:j5,examples:T5,features:N5,useCases:A5,notes:B5},F5="SvgPlaceholderPlugin",W5="SVG 占位：在加载期间注入自定义 SVG 占位内容（如骨架、品牌图形），加载成功后淡出，增强加载反馈与品牌感。",V5="2.0.0",H5=["other","视觉","占位"],G5=[{name:"renderOverlay",when:"每次渲染，覆盖在图片容器之上",description:"骨架屏、错误占位、水印、加载动画"}],q5=[],Q5="只读取 context 字段（props / state / data），不调用上下文方法",K5=[{name:"svgContent",type:"string | ((context) => string)",default:"undefined",description:"SVG 字符串或动态生成函数"},{name:"background",type:"string",default:'"transparent"',description:"叠加层背景"},{name:"opacity",type:"number",default:"1",description:"不透明度(0~1)"},{name:"zIndex",type:"number",default:"3",description:"叠加层级"},{name:"showWhen",type:'"always" | "idle" | "loading" | "loaded" | "error"',default:'"loading"',description:"显示条件"},{name:"fadeOutOnLoaded",type:"boolean",default:"true",description:"加载成功后是否淡出"}],Y5=`const SvgImage = withPlugins(LazyLoadImageCore, [
  createSvgPlaceholderPlugin({
    svgContent: () => \`<svg viewBox='0 0 100 100'><circle cx='50' cy='50' r='40' fill='#ddd'/></svg>\`,
    showWhen: "loading",
  }),
]);

<SvgImage src="https://picsum.photos/id/1015/500/300" alt="SVG 占位示例" />;`,X5=[{name:"圆形骨架占位",description:"加载期显示灰色圆形 SVG 占位，完成后淡出。",src:"https://picsum.photos/id/1015/500/300",config:{svgContent:"<svg viewBox='0 0 100 100'><circle cx='50' cy='50' r='40' fill='#ddd'/></svg>",showWhen:"loading"}},{name:"带背景占位",description:"浅色背景衬托占位 SVG。",src:"https://picsum.photos/id/1021/500/300",config:{svgContent:"<svg viewBox='0 0 100 100'><rect x='10' y='10' width='80' height='80' rx='8' fill='#eee'/></svg>",background:"#fafafa"}},{name:"常驻标识",description:"showWhen=always，占位层持续显示。",src:"https://picsum.photos/id/1026/500/300",config:{svgContent:"<svg viewBox='0 0 100 100'><rect width='100' height='100' fill='rgba(0,0,0,0.04)'/></svg>",showWhen:"always"}}],Z5=["注入任意 SVG 占位","加载时/常驻/多状态显示","淡出过渡","背景/透明度/层级可调","函数/字符串来源"],J5=["动画骨架屏","品牌图形占位","加载反馈","差异化占位"],e3=["svgContent 支持函数型（按 context 动态生成），静态预览使用字符串；函数用法见用法示例。"],t3={name:F5,description:W5,since:V5,tags:H5,events:G5,methods:q5,methodsNote:Q5,config:K5,example:Y5,examples:X5,features:Z5,useCases:J5,notes:e3},n3="ThumbPreloadPlugin",o3="相邻图预加载（gallery 增强插件）：监听主图切换事件，预加载后续若干张到浏览器缓存，使切换近乎瞬时。",r3="2.1.0",s3=["gallery","图集","预加载","性能"],i3=[{name:"onActiveChange",when:"图库当前激活图切换后",description:"同步缩略图高亮、预加载相邻图、更新 URL"}],a3=[],l3="只读取 context 字段（props / state / data），不调用上下文方法",c3=[{name:"lookahead",type:"number",default:"1",description:"向后预加载张数"},{name:"alsoPrevious",type:"boolean",default:"false",description:"是否也预加载前一张"}],u3=`import { GalleryCore } from "vane-lazy-image/gallery";
import { createThumbPreloadPlugin } from "vane-lazy-image/custom-plugins/ThumbPreloadPlugin";

<GalleryCore images={images} plugins={[createThumbPreloadPlugin({ lookahead: 2 })]} />`,d3=[{name:"预加载相邻图",description:"切换主图后预热后 2 张（及前一张），缩略条点击切换零白屏；同 URL 只预热一次。",config:{lookahead:2,alsoPrevious:!0}}],p3=["onActiveChange 监听","相邻图预热","模块级去重","纯副作用无 UI"],m3=["大图图集","弱网流畅切换","电商商品多图"],g3=["不渲染 UI；预热在 GalleryCore 的切换 effect 内执行，安全副作用。"],f3={name:n3,description:o3,since:r3,tags:s3,events:i3,methods:a3,methodsNote:l3,config:c3,example:u3,examples:d3,features:p3,useCases:m3,notes:g3},h3="ThumbSyncPlugin",y3="缩略图联动（gallery 核心插件）：渲染缩略图条，点击缩略图切换主图，选中态描边高亮。",v3="2.1.0",w3=["gallery","图集","缩略","联动"],x3=[{name:"galleryThumbArea",when:"渲染图库缩略图条时",description:"底部 / 侧边缩略图列表"}],b3=[{name:"setActiveIndex",signature:"ctx.setActiveIndex(i: number): void",description:"切换图库当前激活图索引，并联动缩略图与预加载"}],P3=[{name:"gap",type:"number",default:"8",description:"缩略图间距（px）"},{name:"thumbWidth",type:"number",default:"64",description:"缩略图宽（px）"},{name:"thumbHeight",type:"number",default:"64",description:"缩略图高（px）"},{name:"showActiveRing",type:"boolean",default:"true",description:"选中缩略图描边高亮"},{name:"radius",type:"number",default:"6",description:"缩略图圆角（px）"}],$3=`import { GalleryCore } from "vane-lazy-image/gallery";
import { createThumbSyncPlugin } from "vane-lazy-image/custom-plugins/ThumbSyncPlugin";

<GalleryCore images={images} plugins={[createThumbSyncPlugin()]} />`,S3=[{name:"基础缩略联动",description:"点击缩略图切换主图，选中态描边；键盘左右键也可切换（Core 级支持）。",config:{}}],C3=["缩略图条渲染","点击切换主图","选中态描边","键盘左右键切换（GalleryCore 级）"],L3=["电商商品图集","多图详情页","相册"],I3=["activeIndex 由 useGalleryRuntime 用 useState 持有，切换即主图重渲染，无需手动 forceUpdate。"],k3={name:h3,description:y3,since:v3,tags:w3,events:x3,methods:b3,config:P3,example:$3,examples:S3,features:C3,useCases:L3,notes:I3},_3="TransitionPlugin",E3="加载成功过渡动画：从指定透明度/缩放到目标值的平滑过渡。",R3="2.0.0",z3=["visual","视觉"],O3=[{name:"onMount",when:"组件挂载完成、插件注册后执行一次（返回的清理函数在 manager.clear 时逆序执行）",description:"初始化副作用：注册监听、起定时器、建观察器；必须返回清理函数或配合 onUnmount 收尾"},{name:"onLoadSuccess",when:"图片成功解码可显示时",description:"拿到最终 displaySrc 做后续动作（上报、预取下张、淡入）"}],D3=[],M3="只读取 context 字段（props / state / data），不调用上下文方法",j3=[{name:"durationMs",type:"number",default:"400",description:"过渡时长 ms"},{name:"easing",type:"string",default:"ease",description:"缓动函数"},{name:"fromOpacity",type:"number",default:"0",description:"起始透明度"},{name:"toOpacity",type:"number",default:"1",description:"结束透明度"},{name:"fromScale",type:"number",default:"1",description:"起始缩放"},{name:"toScale",type:"number",default:"1",description:"结束缩放"}],T3=`// 缩放 + 淡入过渡
const TransImage = withPlugins(LazyLoadImageCore, [
  createTransitionPlugin({
    durationMs: 500,
    fromOpacity: 0,
    toOpacity: 1,
    fromScale: 1.05,
    toScale: 1,
  }),
]);

<TransImage src="https://picsum.photos/seed/transition/600/400" alt="过渡" />;`,N3=[{name:"缩放淡入",description:"从 1.05 倍淡入到原尺寸，轻盈的入场感。",src:"https://picsum.photos/seed/transition-zoom/600/400",config:{durationMs:500,fromOpacity:0,toOpacity:1,fromScale:1.05,toScale:1}},{name:"纯淡入",description:"仅透明度过渡，不含缩放。",src:"https://picsum.photos/seed/transition-fade/600/400",config:{durationMs:400,fromOpacity:0,toOpacity:1}}],A3=["透明度 + 缩放双维度过渡","起始 / 结束值均可定制","时长与缓动可调","相比 FadeIn 更灵活"],B3=["图片入场动画","卡片翻转 / 弹出图","需要缩放感的场景","与视差 / 滚动联动"],U3=["fromScale=toScale=1 时退化为纯淡入，等价于更轻量的 FadeIn。","缩放在 transform 上实现，注意父容器 overflow 与定位。"],F3={name:_3,description:E3,since:R3,tags:z3,events:O3,methods:D3,methodsNote:M3,config:j3,example:T3,examples:N3,features:A3,useCases:B3,notes:U3},W3="UserBehaviorPlugin",V3="用户行为：实时统计每张图片的视口驻留时长、点击次数、进入/离开次数，并在图片上叠加可视化面板，卸载时统一上报。",H3="2.0.0",G3=["viewport","视口与交互","数据","分析"],q3=[{name:"onMount",when:"组件挂载完成、插件注册后执行一次（返回的清理函数在 manager.clear 时逆序执行）",description:"初始化副作用：注册监听、起定时器、建观察器；必须返回清理函数或配合 onUnmount 收尾"},{name:"onUnmount",when:"组件卸载前执行一次",description:"释放监听、定时器与观察器；与 onMount 成对出现，避免泄漏"},{name:"onLoadSuccess",when:"图片成功解码可显示时",description:"拿到最终 displaySrc 做后续动作（上报、预取下张、淡入）"},{name:"onEnterViewport",when:"元素进入视口（IntersectionObserver）",description:"触发懒加载、开始请求、曝光上报"},{name:"onLeaveViewport",when:"元素离开视口",description:"暂停 / 中止在途请求、回收资源"},{name:"transformProps",when:"渲染前链式改写图片 props",description:"补 sizes / 占位色 / 解码策略等"},{name:"renderOverlay",when:"每次渲染，覆盖在图片容器之上",description:"骨架屏、错误占位、水印、加载动画"}],Q3=[],K3="只读取 context 字段（props / state / data），不调用上下文方法",Y3=[{name:"enabled",type:"boolean",default:"true",description:"是否启用统计与面板"},{name:"onReport",type:"(data: { src; dwellMs; clicks; enters; leaves }) => void",default:"undefined",description:"卸载时上报回调（默认打印到控制台）"},{name:"showOverlay",type:"boolean",default:"true",description:"是否在图片角落显示统计面板（生产版式建议关闭）"}],X3=`const BehaviorImage = withPlugins(LazyLoadImageCore, [
  createUserBehaviorPlugin({
    onReport: (data) => {
      // 上报到分析后端
      console.log("behavior", data);
    },
  }),
]);

// 在组件中使用
<BehaviorImage src="https://picsum.photos/id/1015/500/300" alt="用户行为示例" />;`,Z3=[{name:"默认统计面板",description:"右上角实时显示驻留、点击、进入/离开数据。",src:"https://picsum.photos/id/1015/500/300",config:{enabled:!0}},{name:"关闭统计",description:"enabled=false 时不渲染面板也不统计。",src:"https://picsum.photos/id/1021/500/300",config:{enabled:!1}}],J3=["实时统计驻留时长","点击次数统计","进入 / 离开次数统计","视口状态指示（绿/红点）","卸载时统一上报","可通过 enabled 关闭"],ez=["内容热度分析","广告位效果评估","UX 研究与转化漏斗","图片曝光与互动埋点"],tz=["统计结果在卸载时通过 `onReport` 上报（默认打印控制台），示例页用面板实时展示。","`enabled: false` 可整体关闭统计与面板，不影响图片加载。","showOverlay: false 只上报数据、不渲染角标，适合直接接入真实版式。"],nz={name:W3,description:V3,since:H3,tags:G3,events:q3,methods:Q3,methodsNote:K3,config:Y3,example:X3,examples:Z3,features:J3,useCases:ez,notes:tz},oz="VideoPosterPlugin",rz="视频海报：将图片作为视频封面，点击播放视频（模态框或内联），支持自动播放、循环、静音与自定义按钮。",sz="2.0.0",iz=["ecommerce","电商核心"],az=[{name:"renderOverlay",when:"每次渲染，覆盖在图片容器之上",description:"骨架屏、错误占位、水印、加载动画"}],lz=[],cz="只读取 context 字段（props / state / data），不调用上下文方法",uz=[{name:"videoUrl",type:"string",default:"undefined",description:"视频 URL"},{name:"autoPlay",type:"boolean",default:"true",description:"自动播放"},{name:"loop",type:"boolean",default:"false",description:"循环播放"},{name:"muted",type:"boolean",default:"true",description:"静音（移动端自动播放需静音）"},{name:"playButtonPosition",type:'"center" | "top-left" | "top-right" | "bottom-left" | "bottom-right"',default:'"center"',description:"播放按钮位置"},{name:"playButtonSize",type:'"small" | "medium" | "large"',default:'"large"',description:"按钮尺寸"},{name:"playButtonStyle",type:"React.CSSProperties",default:"{}",description:"自定义按钮样式"},{name:"showPlayButton",type:"boolean",default:"true",description:"是否显示播放按钮"},{name:"playInModal",type:"boolean",default:"true",description:"模态框播放（否则内联）"},{name:"playIcon",type:"ReactNode",default:"undefined",description:"自定义播放图标"},{name:"onPlay",type:"() => void",default:"undefined",description:"播放回调"}],dz=`// 1. 点击播放按钮，在模态框中播放视频
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
<VideoImage src="https://picsum.photos/id/1015/500/300" alt="商品视频封面" />;`,pz=[{name:"基础视频海报（模态框播放）",description:"点击图片中心播放按钮，在模态框中播放视频。",src:"https://picsum.photos/id/1015/500/300",config:{videoUrl:"https://www.w3schools.com/html/mov_bbb.mp4",playButtonPosition:"center",playButtonSize:"large"}},{name:"内联播放模式",description:"视频直接在图片位置播放，不弹出模态框。",src:"https://picsum.photos/id/1018/500/300",config:{videoUrl:"https://www.w3schools.com/html/movie.mp4",playInModal:!1,playButtonPosition:"center",playButtonSize:"medium",autoPlay:!0,loop:!0,muted:!0}},{name:"自定义播放按钮样式",description:"按钮位于右下角，红色背景，小尺寸。",src:"https://picsum.photos/id/1019/500/300",config:{videoUrl:"https://www.w3schools.com/html/mov_bbb.mp4",playButtonPosition:"bottom-right",playButtonSize:"small",playButtonStyle:{backgroundColor:"rgba(255, 59, 48, 0.9)",border:"2px solid white"}}},{name:"自定义播放图标",description:"示例以默认三角形呈现；可用 playIcon 替换为自定义图标（如 “PLAY” 文字）。",src:"https://picsum.photos/id/1020/500/300",config:{videoUrl:"https://www.w3schools.com/html/mov_bbb.mp4",playButtonPosition:"center",playButtonSize:"large"}},{name:"不同按钮位置",description:"播放按钮位于左上角，绿色背景。",src:"https://picsum.photos/id/1021/500/300",config:{videoUrl:"https://www.w3schools.com/html/mov_bbb.mp4",playButtonPosition:"top-left",playButtonSize:"small",playButtonStyle:{backgroundColor:"rgba(52, 199, 89, 0.9)"}}}],mz=["使用提示：确保视频 URL 可访问，否则播放会失败；移动端自动播放可能受浏览器限制，建议设置 muted=true；大视频文件建议使用流媒体服务；模态框播放体验更好但会阻断其它交互；内联播放适合小尺寸视频预览。"],gz=["模态框播放（全屏）","内联播放（图片位置直接播）","自定义播放按钮大小 / 位置 / 样式","多位置支持（center / top-left / bottom-left / bottom-right）","播放控制（自动播放 / 循环 / 静音）","自定义图标"],fz=["视频网站","在线教育","电商平台（商品视频展示）","新闻媒体","视频博客","企业官网"],hz={name:oz,description:rz,since:sz,tags:iz,events:az,methods:lz,methodsNote:cz,config:uz,example:dz,examples:pz,notes:mz,features:gz,useCases:fz},yz="ViewportAwarePlugin",vz="视口感知加载：真正把 IntersectionObserver 的 rootMargin / threshold / once 下发给核心，控制图片「提前多少距离 / 多灵敏」才触发加载，并在四角显示绿/灰指示点辅助观察。",wz="2.0.0",xz=["viewport","视口与交互","懒加载"],bz=[{name:"onEnterViewport",when:"元素进入视口（IntersectionObserver）",description:"触发懒加载、开始请求、曝光上报"},{name:"onLeaveViewport",when:"元素离开视口",description:"暂停 / 中止在途请求、回收资源"},{name:"transformProps",when:"渲染前链式改写图片 props",description:"补 sizes / 占位色 / 解码策略等"},{name:"renderOverlay",when:"每次渲染，覆盖在图片容器之上",description:"骨架屏、错误占位、水印、加载动画"}],Pz=[],$z="只读取 context 字段（props / state / data），不调用上下文方法",Sz=[{name:"rootMargin",type:"string",default:"未设置（沿用 Core 默认 0px）",description:'IO 边距，控制提前/延后触发。如 "200px" 表示进入视口前 200px 就开始加载（预加载），"-50px" 表示进入后再等 50px'},{name:"threshold",type:"number | number[]",default:"未设置",description:"IO 触发阈值（0~1），控制加载灵敏度"},{name:"once",type:"boolean",default:"true",description:"是否只加载一次：true=进入视口加载后停止观察（省资源）；false=持续观察"},{name:"unobserveOnVisible",type:"boolean",default:"由 once 推导",description:"显式下发，优先级高于 once"},{name:"showDot",type:"boolean",default:"false",description:"是否显示视口指示点（仅辅助观察，非核心能力）"},{name:"dotPosition",type:'"top-left" | "top-right" | "bottom-left" | "bottom-right"',default:'"bottom-right"',description:"指示点位置"},{name:"hideWhenOut",type:"boolean",default:"false",description:"离开视口时隐藏指示点"}],Cz=`const ViewportImage = withPlugins(LazyLoadImageCore, [
  // 提前 200px 预加载，进入视口即就绪，滚动更顺滑
  createViewportAwarePlugin({ rootMargin: "200px", threshold: 0.01, showDot: true }),
]);

<ViewportImage src="https://picsum.photos/id/1015/500/300" alt="视口感知示例" />;`,Lz=[{name:"提前预加载（rootMargin 200px）",description:"元素进入视口前 200px 就开始加载，滚到时图片已就绪，消除白屏。",src:"https://picsum.photos/id/1015/500/300",config:{rootMargin:"200px",threshold:.01,showDot:!0}},{name:"严格进入才加载（rootMargin 0px）",description:"默认行为：图片真正进入视口边缘才触发加载。",src:"https://picsum.photos/id/1024/500/300",config:{rootMargin:"0px",showDot:!0,dotPosition:"top-left"}},{name:"离开时隐藏指示点",description:"仅在进入视口显示绿点，离开后隐藏。",src:"https://picsum.photos/id/1035/500/300",config:{rootMargin:"100px",showDot:!0,dotPosition:"top-right",hideWhenOut:!0}}],Iz=["rootMargin 真正下发，控制提前/延后加载距离","threshold 调节加载灵敏度","once / unobserveOnVisible 控制是否只加载一次","四角可选指示点（辅助观察真实 IO 状态）","onEnterViewport / onLeaveViewport 事件钩子"],kz=["长列表滚动预加载（rootMargin 提前量）","调试图片加载时机（配合指示点）","无限滚动 / 瀑布流场景","首屏 LCP 图片前的视口调度"],_z=["核心能力是 transformProps 把 IO 配置下发给核心，而不是装饰层；showDot 仅为观察辅助，可关闭。","once=false 仅表示持续观察，核心仍按加载状态只加载一次；如需「离开再回来重新加载」请配合 reload/reset 钩子。"],Ez={name:yz,description:vz,since:wz,tags:xz,events:bz,methods:Pz,methodsNote:$z,config:Sz,example:Cz,examples:Lz,features:Iz,useCases:kz,notes:_z},Rz="ViewportDebouncePlugin",zz="视口防抖（v2 真实实现）：进入视口后并不立即加载，而是等待元素「稳定停留 debounceMs」才放行；若期间离开视口且未达 maxWaitMs 上限，则中止本次加载，真正避免快速滚动时误加载/重复加载。",Oz="2.0.0",Dz=["viewport","视口与交互","防抖"],Mz=[{name:"onUnmount",when:"组件卸载前执行一次",description:"释放监听、定时器与观察器；与 onMount 成对出现，避免泄漏"},{name:"onBeforeLoad",when:"发起图片请求之前",description:"返回 false 可阻断本次加载（如权限校验、占位策略）"},{name:"onEnterViewport",when:"元素进入视口（IntersectionObserver）",description:"触发懒加载、开始请求、曝光上报"},{name:"onLeaveViewport",when:"元素离开视口",description:"暂停 / 中止在途请求、回收资源"}],jz=[],Tz="只读取 context 字段（props / state / data），不调用上下文方法",Nz=[{name:"debounceMs",type:"number",default:"200",description:"进入视口后需稳定停留的时长（毫秒），到时才放行加载"},{name:"maxWaitMs",type:"number",default:"1200",description:"最长等待上限，避免快速来回一直不加载（饥饿保护）"},{name:"onlyWhenIntersecting",type:"boolean",default:"true",description:"仅在进入视口时门控；若离开且未达 maxWaitMs 则中止本次加载"},{name:"debug",type:"boolean",default:"false",description:"是否输出调试日志"}],Az=`const StableImage = withPlugins(LazyLoadImageCore, [
  // 进入视口稳定 200ms 才加载，快速划过直接放弃
  createViewportDebouncePlugin({ debounceMs: 200, maxWaitMs: 1200 }),
]);

<StableImage src="https://picsum.photos/id/1015/500/300" alt="视口防抖示例" />;`,Bz=[{name:"默认防抖（200ms）",description:"快速滚动时抑制抖动：元素需稳定停留 200ms 才加载，一闪而过的不加载。",src:"https://picsum.photos/id/1015/500/300",config:{debounceMs:200}},{name:"加大防抖间隔",description:"300ms 间隔，更适合惯性较大的移动端滚动。",src:"https://picsum.photos/id/1020/500/300",config:{debounceMs:300}},{name:"开启调试日志",description:"控制台输出稳定/中止判定日志，便于排查。",src:"https://picsum.photos/id/1025/500/300",config:{debounceMs:200,debug:!0}}],Uz=["门控钩子真正延迟加载到稳定期","快速划过（离开未达上限）中止加载","maxWaitMs 饥饿保护","可调防抖间隔与上限","调试日志输出"],Fz=["快速滚动列表 / 瀑布流","移动端惯性滚动","防止抖动导致的重复加载","仅加载用户真正停留浏览的图片"],Wz=["依赖引擎门控能力（onBeforeLoad 返回 false 中止加载），已在本插件中落地；与 ViewportAware 的 rootMargin 搭配可进一步调优触发时机。"],Vz={name:Rz,description:zz,since:Oz,tags:Dz,events:Mz,methods:jz,methodsNote:Tz,config:Nz,example:Az,examples:Bz,features:Uz,useCases:Fz,notes:Wz},Hz="ViewportDwellPlugin",Gz="视口驻留门控（v2 真实实现）：在真正加载前要求图片在视口内持续停留 dwellMs，快速划过（停留不足且离开）则中止加载；超过 maxWaitMs 后放行以防饥饿。",qz="2.0.0",Qz=["viewport","视口与交互","驻留","省流量"],Kz=[{name:"onUnmount",when:"组件卸载前执行一次",description:"释放监听、定时器与观察器；与 onMount 成对出现，避免泄漏"},{name:"onBeforeLoad",when:"发起图片请求之前",description:"返回 false 可阻断本次加载（如权限校验、占位策略）"},{name:"onEnterViewport",when:"元素进入视口（IntersectionObserver）",description:"触发懒加载、开始请求、曝光上报"},{name:"onLeaveViewport",when:"元素离开视口",description:"暂停 / 中止在途请求、回收资源"}],Yz=[],Xz="只读取 context 字段（props / state / data），不调用上下文方法",Zz=[{name:"dwellMs",type:"number",default:"250",description:"需要在视口中持续停留的时间（毫秒），不足视为「划过」不加载"},{name:"maxWaitMs",type:"number",default:"1500",description:"最长等待时间（毫秒），超时仍允许加载以防饥饿"},{name:"onlyWhenIntersecting",type:"boolean",default:"true",description:"仅在进入视口时应用驻留判断；离开且未达上限则中止"},{name:"debug",type:"boolean",default:"false",description:"是否输出调试日志"}],Jz=`const DwellImage = withPlugins(LazyLoadImageCore, [
  // 停留不足 250ms 的划过不加载，长留才加载
  createViewportDwellPlugin({ dwellMs: 250, maxWaitMs: 1500 }),
]);

<DwellImage src="https://picsum.photos/id/1015/500/300" alt="视口驻留示例" />;`,eO=[{name:"默认驻留（250ms）",description:"划过即中止，停留足够才加载，提升命中率。",src:"https://picsum.photos/id/1015/500/300",config:{dwellMs:250}},{name:"延长驻留时间",description:"400ms 驻留门槛，适合快速浏览场景。",src:"https://picsum.photos/id/1021/500/300",config:{dwellMs:400}},{name:"开启调试日志",description:"控制台输出驻留门控过程，便于调参。",src:"https://picsum.photos/id/1026/500/300",config:{dwellMs:250,debug:!0}}],tO=["门控钩子真正延迟/中止加载（非空头）","驻留时间不足且离开 → 中止加载","maxWaitMs 饥饿保护（超时放行）","仅在进入视口时生效","调试日志输出"],nO=["无限滚动信息流","防止快速滑动误加载","节省带宽与请求数","提升有效加载命中率"],oO=["v2 起通过引擎 onBeforeLoad 门控真实生效（旧版写在被引擎丢弃的钩子上，实际未拦截）；与 ViewportAware 的 rootMargin 搭配可进一步调优触发时机。"],rO={name:Hz,description:Gz,since:qz,tags:Qz,events:Kz,methods:Yz,methodsNote:Xz,config:Zz,example:Jz,examples:eO,features:tO,useCases:nO,notes:oO},sO="WatermarkPlugin",iO="文字水印覆盖层：支持四角/中心定位、动态文本与样式定制。",aO="2.0.0",lO=["visual","视觉"],cO=[{name:"renderOverlay",when:"每次渲染，覆盖在图片容器之上",description:"骨架屏、错误占位、水印、加载动画"}],uO=[],dO="只读取 context 字段（props / state / data），不调用上下文方法",pO=[{name:"text",type:"string | ((src: string) => string)",default:'"© 2024 Vane"',description:"水印文本；可传函数按 src 动态生成"},{name:"position",type:'"top-left" | "top-right" | "bottom-left" | "bottom-right" | "center"',default:'"bottom-right"',description:"水印位置"},{name:"opacity",type:"number",default:"0.8",description:"0~1 透明度"},{name:"fontSize",type:"number",default:"12",description:"px 字号"},{name:"color",type:"string",default:'"#fff"',description:"文字颜色"},{name:"offsetX",type:"number",default:"8",description:"px 水平偏移"},{name:"offsetY",type:"number",default:"8",description:"px 垂直偏移"},{name:"zIndex",type:"number",default:"2",description:"层叠顺序"},{name:"enabled",type:"boolean",default:"true",description:"是否启用"}],mO=`// 版权水印：右下角、半透明
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
});`,gO=[{name:"版权水印（右下角）",description:"半透明白字落在右下角，常见版权标识场景。",src:"https://picsum.photos/seed/wm-copyright/600/400",config:{text:"© 2026 Vane",position:"bottom-right",opacity:.6,fontSize:14,color:"#ffffff"}},{name:"中心品牌水印",description:"居中、低透明度大字，适合图库/作品集防盗用。",src:"https://picsum.photos/seed/wm-center/600/400",config:{text:"VANE",position:"center",opacity:.22,fontSize:30,color:"#ffffff"}},{name:"左上角说明水印",description:"左上角小字，作来源/批次标注。",src:"https://picsum.photos/seed/wm-topleft/600/400",config:{text:"内部素材 • 勿外传",position:"top-left",opacity:.85,fontSize:12,color:"#ffd400"}}],fO=["五位置可选（四角 + 中心）","文本支持静态字符串或函数动态派生","可调透明度 / 字号 / 颜色 / 偏移","可整体启停（enabled）","层叠顺序可控（zIndex）"],hO=["图片版权 / 品牌标识","图库与作品集防盗用","内部素材来源 / 批次标注","活动海报统一角标","按用户 / 租户动态打标"],yO=["text 传函数时按图片 src 动态生成（如嵌入 ID），但场景示例画廊需用静态文本以保证实时预览。","中心水印透明度建议低于 0.3，避免遮挡主体内容。","水印为覆盖层（renderOverlay），不参与图片本身像素，导出原图不会被打标。"],vO={name:sO,description:iO,since:aO,tags:lO,events:cO,methods:uO,methodsNote:dO,config:pO,example:mO,examples:gO,features:fO,useCases:hO,notes:yO},wO="WebPPlugin",xO="WebP 优先：在支持 WebP 的环境中自动将图片重写为 .webp（或自定义链接），失败时回退原图，体积更小加载更快。",bO="2.0.0",PO=["other","网络","性能","WebP"],$O=[{name:"onLoad",when:"加载流程开始、需要确定最终图片地址时",description:"自定义加载逻辑，返回最终图片 URL（objectURL / dataURL / 原地址）"},{name:"onLoadError",when:"加载失败（网络错误、解码失败、超时）",description:"返回 true 表示错误已被处理（如切换备用源），否则继续走默认降级"}],SO=[],CO="只读取 context 字段（props / state / data），不调用上下文方法",LO=[{name:"enabled",type:"boolean",default:"true",description:"是否启用"},{name:"rewrite",type:"(src, ctx) => string | undefined",default:"undefined",description:"自定义重写函数：返回 webp 链接"},{name:"replaceExtensions",type:"string[]",default:'["jpg", "jpeg", "png"]',description:"需替换为 .webp 的扩展名"},{name:"appendQueryParam",type:"string",default:"undefined",description:'追加的查询参数，如 "format=webp"'},{name:"onDomains",type:"string[]",default:"[]（不限制）",description:"限定生效域名"},{name:"testSupport",type:"boolean",default:"true",description:"运行前检测浏览器是否支持 webp"}],IO=`const WebPImage = withPlugins(LazyLoadImageCore, [
  createWebPPlugin({
    replaceExtensions: ["jpg", "jpeg", "png"],
    testSupport: true,
  }),
]);

<WebPImage src="https://example.com/photo.jpg" alt="WebP 示例" />;`,kO=[{name:"默认 WebP 优化",description:"对支持的图床自动重写（本示例用无扩展名 URL，不触发改写，仅展示配置）。",src:"https://picsum.photos/id/1015/500/300",config:{enabled:!0}},{name:"限定域名",description:"仅在指定域名生效，避免误改其它资源。",src:"https://picsum.photos/id/1021/500/300",config:{onDomains:["cdn.example.com"]}},{name:"跳过支持检测",description:"testSupport=false 直接尝试改写（需图床确实提供 webp）。",src:"https://picsum.photos/id/1026/500/300",config:{testSupport:!1}}],_O=["自动 WebP 改写","扩展名替换","查询参数追加","域名限定","支持检测","失败回退原图"],EO=["图片体积优化","现代浏览器加速","CDN WebP 支持","流量节省"],RO=["启用后若 webp 链接加载失败会自动回退到原图，不会白屏；示例中的 picsum 链接无扩展名，不会触发扩展名改写，可安全预览。"],zO={name:wO,description:xO,since:bO,tags:PO,events:$O,methods:SO,methodsNote:CO,config:LO,example:IO,examples:kO,features:_O,useCases:EO,notes:RO},OO="ZoomControlPlugin",DO="按钮式缩放控制（gallery 增强插件）：在工具条渲染 − / 重置 / + 按钮，调整 context.zoom，GalleryCore 对主图施加 scale 变换。",MO="2.1.0",jO=["gallery","图集","缩放","放大"],TO=[{name:"galleryToolbarArea",when:"渲染图库工具栏时",description:"缩放、下载、分享等图库级操作"}],NO=[{name:"setZoom",signature:"ctx.setZoom(z: number): void",description:"设置图库缩放比例（按钮式缩放控制的写入入口）"}],AO=[{name:"step",type:"number",default:"0.5",description:"每步缩放增量"},{name:"min",type:"number",default:"1",description:"最小缩放"},{name:"max",type:"number",default:"4",description:"最大缩放"}],BO=`import { GalleryCore } from "vane-lazy-image/gallery";
import { createZoomControlPlugin } from "vane-lazy-image/custom-plugins/ZoomControlPlugin";

<GalleryCore images={images} plugins={[createZoomControlPlugin()]} />`,UO=[{name:"主图缩放",description:"点击 + 放大主图（scale 变换），>1 时主图区可滚动查看细节；点击重置回到 100%。",config:{}}],FO=["−/重置/+ 按钮","实时 scale 变换","缩放范围限制","与主图区滚动联动"],WO=["商品细节查看","高清图放大","材质纹理 inspection"],VO=["zoom 经 GalleryCore 的 context.zoom 施加到主图区；为协调态，切换即重渲染。"],HO={name:OO,description:DO,since:MO,tags:jO,events:TO,methods:NO,config:AO,example:BO,examples:UO,features:FO,useCases:WO,notes:VO};var GO=Object.defineProperty,qO=(e,t,n)=>t in e?GO(e,t,{enumerable:!0,configurable:!0,writable:!0,value:n}):e[t]=n,Qt=(e,t,n)=>qO(e,typeof t!="symbol"?t+"":t,n);let QO=class{constructor(t,n={}){Qt(this,"id"),Qt(this,"config"),Qt(this,"metrics"),Qt(this,"startTime"),Qt(this,"endTime"),this.id=t,this.config={enabled:n.enabled??!0,collectVitals:n.collectVitals??!0,enableDebug:n.enableDebug??!1,retentionTime:n.retentionTime??5*60*1e3},this.metrics={marks:{},measures:{},custom:{}},this.startTime=this.now(),this.config.collectVitals&&this.collectWebVitals(),this.config.enableDebug&&console.debug(`[PerformanceMonitor] Created: ${this.id}`)}now(){return performance.now()}mark(t){if(!this.config.enabled)return;const n=this.now();if(this.metrics.marks[t]=n,typeof performance<"u"&&performance.mark)try{performance.mark(`${this.id}:${t}`)}catch{}this.config.enableDebug&&console.debug(`[PerformanceMonitor] Mark: ${t} @ ${n.toFixed(2)}ms`)}measure(t,n,o){if(!this.config.enabled)return;const r=this.metrics.marks[n];if(r===void 0){console.warn(`[PerformanceMonitor] Start mark not found: ${n}`);return}const s=o?this.metrics.marks[o]:this.now();if(s===void 0){console.warn(`[PerformanceMonitor] End mark not found: ${o}`);return}const i=s-r;if(this.metrics.measures[t]=i,typeof performance<"u"&&performance.measure)try{performance.measure(`${this.id}:${t}`,`${this.id}:${n}`,o?`${this.id}:${o}`:void 0)}catch{}return this.config.enableDebug&&console.debug(`[PerformanceMonitor] Measure: ${t} = ${i.toFixed(2)}ms`),i}setCustomMetric(t,n){this.config.enabled&&(this.metrics.custom[t]=n)}collectWebVitals(){if(!(typeof performance>"u")){if(this.metrics.vitals={},performance.timing){const t=performance.timing,n=t.navigationStart;t.responseStart&&(this.metrics.vitals.ttfb=t.responseStart-n)}if(typeof PerformanceObserver<"u")try{new PerformanceObserver(t=>{const n=t.getEntries().find(o=>o.name==="first-contentful-paint");n&&this.metrics.vitals&&(this.metrics.vitals.fcp=n.startTime)}).observe({entryTypes:["paint"]}),new PerformanceObserver(t=>{const n=t.getEntries(),o=n[n.length-1];o&&this.metrics.vitals&&(this.metrics.vitals.lcp=o.startTime)}).observe({entryTypes:["largest-contentful-paint"]})}catch{}}}end(){this.endTime||(this.endTime=this.now(),this.mark("end"),this.config.enableDebug&&console.debug(`[PerformanceMonitor] Ended: ${this.id}`))}analyzeCriticalPath(){const t=this.metrics.marks,n={};return t.mount!==void 0&&t["load-start"]!==void 0&&(n.discoveryDelay=t["load-start"]-t.mount),t["load-start"]!==void 0&&t["load-end"]!==void 0&&(n.loadDelay=t["load-end"]-t["load-start"]),t["load-end"]!==void 0&&t["render-end"]!==void 0&&(n.renderDelay=t["render-end"]-t["load-end"]),Object.keys(n).length>0?n:void 0}generateRecommendations(){var o;const t=[],n=this.analyzeCriticalPath();return n!=null&&n.discoveryDelay&&n.discoveryDelay>100&&t.push(`发现延迟较高 (${n.discoveryDelay.toFixed(0)}ms)，考虑使用 preload 或提前触发加载`),n!=null&&n.loadDelay&&n.loadDelay>2e3&&t.push(`加载延迟较高 (${n.loadDelay.toFixed(0)}ms)，考虑优化图片大小或使用 CDN`),n!=null&&n.renderDelay&&n.renderDelay>50&&t.push(`渲染延迟较高 (${n.renderDelay.toFixed(0)}ms)，考虑优化渲染逻辑`),(o=this.metrics.vitals)!=null&&o.lcp&&this.metrics.vitals.lcp>2500&&t.push(`LCP 较慢 (${this.metrics.vitals.lcp.toFixed(0)}ms)，建议优化首屏图片加载`),t}getReport(){const t=this.endTime?this.endTime-this.startTime:this.now()-this.startTime;return{id:this.id,startTime:this.startTime,endTime:this.endTime,duration:t,metrics:this.metrics,criticalPath:this.analyzeCriticalPath(),recommendations:this.generateRecommendations()}}dispose(){if(typeof performance<"u")try{performance.getEntriesByType("mark").forEach(t=>{t.name.startsWith(`${this.id}:`)&&performance.clearMarks(t.name)}),performance.getEntriesByType("measure").forEach(t=>{t.name.startsWith(`${this.id}:`)&&performance.clearMeasures(t.name)})}catch{}this.config.enableDebug&&console.debug(`[PerformanceMonitor] Disposed: ${this.id}`)}};function gl(e,t){return new QO(e,t)}let KO=class{constructor(t={}){Qt(this,"monitors",new Map),Qt(this,"config"),this.config=t}getOrCreate(t){let n=this.monitors.get(t);return n||(n=gl(t,this.config),this.monitors.set(t,n)),n}getAllReports(){return Array.from(this.monitors.values()).map(t=>t.getReport())}cleanup(t=5*60*1e3){const n=performance.now();this.monitors.forEach((o,r)=>{const s=o.getReport();s.endTime&&n-s.endTime>t&&(o.dispose(),this.monitors.delete(r))})}disposeAll(){this.monitors.forEach(t=>t.dispose()),this.monitors.clear()}},On=null;function YO(e){return On||(On=new KO(e)),On}function XO(){On&&(On.disposeAll(),On=null)}var ZO=Object.defineProperty,JO=(e,t,n)=>t in e?ZO(e,t,{enumerable:!0,configurable:!0,writable:!0,value:n}):e[t]=n,nt=(e,t,n)=>JO(e,typeof t!="symbol"?t+"":t,n);const Dp=class gn{constructor(){nt(this,"observers",new Map),nt(this,"elementToKey",new Map),nt(this,"observerCallbacks",new Map),nt(this,"observerStats",new Map),nt(this,"rootIds",new WeakMap),nt(this,"rootIdCounter",0),nt(this,"totalCallbackExecutions",0),nt(this,"debugMode",!1),nt(this,"cleanupTimer")}static supportsIntersectionObserver(){return typeof IntersectionObserver<"u"}static getInstance(){return gn.instance||(gn.instance=new gn),gn.instance}setDebugMode(t){this.debugMode=t,t&&(console.log("[ObserverPool] Debug mode enabled"),console.log("[ObserverPool] Current stats:",this.getStats()))}startAutoCleanup(){typeof window>"u"||this.cleanupTimer||(this.cleanupTimer=setInterval(()=>{const t=Date.now(),n=6e4;if(this.observers.size===0){this.stopAutoCleanup();return}this.observerStats.forEach((o,r)=>{if(t-o.lastUsedAt>n&&o.elementCount===0){const s=this.observers.get(r);s&&(s.disconnect(),this.observers.delete(r),this.observerCallbacks.delete(r),this.observerStats.delete(r),this.debugMode&&console.log(`[ObserverPool] Auto-cleaned idle observer: ${r}`))}})},6e4))}stopAutoCleanup(){this.cleanupTimer&&(clearInterval(this.cleanupTimer),this.cleanupTimer=void 0)}getRootId(t){if(!t)return"null";let n=this.rootIds.get(t);return n||(n=`r${++this.rootIdCounter}`,this.rootIds.set(t,n)),n}getConfigKey(t){const{root:n,rootMargin:o="0px",threshold:r=0}=t,s=`root-${this.getRootId(n)}`,i=Array.isArray(r)?r.join(","):String(r);return`${s}|${o}|${i}`}observe(t,n,o={},r=!1){if(!gn.supportsIntersectionObserver()){try{n(!0)}catch(d){this.debugMode&&console.warn("[ObserverPool] fallback callback failed",d)}return()=>{}}const s=this.getConfigKey(o),i=Date.now();if(!this.observers.has(s)){let d;try{d=new IntersectionObserver(p=>{p.forEach(f=>{const v=this.observerCallbacks.get(s);v&&v.forEach(w=>{if(w.element===f.target){this.totalCallbackExecutions++;const b=this.observerStats.get(s);b&&(b.totalCallbacks++,b.lastUsedAt=Date.now()),w.callback(f.isIntersecting),w.unobserveOnVisible&&f.isIntersecting&&this.unobserve(f.target)}})})},{root:o.root||null,rootMargin:o.rootMargin||"0px",threshold:o.threshold??0})}catch(p){this.debugMode&&console.warn("[ObserverPool] IntersectionObserver unavailable, fallback to eager",p);try{n(!0)}catch{}return()=>{}}this.startAutoCleanup(),this.observers.set(s,d),this.observerCallbacks.set(s,new Set),this.observerStats.set(s,{key:s,elementCount:0,createdAt:i,lastUsedAt:i,totalCallbacks:0}),this.debugMode&&console.log(`[ObserverPool] Created new observer for config: ${s}`)}const a=this.observers.get(s),l=this.observerCallbacks.get(s),c={element:t,callback:n,unobserveOnVisible:r,addedAt:i};l.add(c),this.elementToKey.set(t,s);const u=this.observerStats.get(s);return u&&(u.elementCount++,u.lastUsedAt=i),a.observe(t),this.debugMode&&console.log(`[ObserverPool] Observing element, total: ${this.elementToKey.size}`),()=>this.unobserve(t)}unobserve(t){const n=this.elementToKey.get(t);if(!n)return;const o=this.observers.get(n),r=this.observerCallbacks.get(n);if(o&&r){o.unobserve(t);let s=0;Array.from(r).forEach(a=>{a.element===t&&(r.delete(a),s++)}),this.elementToKey.delete(t);const i=this.observerStats.get(n);i&&(i.elementCount=Math.max(0,i.elementCount-Math.max(1,s)),i.lastUsedAt=Date.now()),r.size===0&&this.debugMode&&console.log(`[ObserverPool] Observer ${n} has no elements (will auto-clean later)`)}}disconnectAll(){this.observers.forEach(t=>t.disconnect()),this.observers.clear(),this.observerCallbacks.clear(),this.elementToKey.clear(),this.observerStats.clear(),this.stopAutoCleanup(),this.debugMode&&console.log("[ObserverPool] Disconnected all observers")}getObserverCount(){return this.observers.size}getElementCount(){return this.elementToKey.size}getStats(){const t=this.observers.size,n=this.elementToKey.size,o=t>0?n/t:0,r=Date.now();let s,i,a;this.observerStats.forEach(u=>{const d=r-u.createdAt;(!s||d>s.age)&&(s={key:u.key,age:d}),(!i||d<i.age)&&(i={key:u.key,age:d}),(!a||u.elementCount>a.elementCount)&&(a={key:u.key,elementCount:u.elementCount})});const l=t*1024+n*100,c=l>1024*1024?`${(l/(1024*1024)).toFixed(2)} MB`:`${(l/1024).toFixed(2)} KB`;return{observerCount:t,elementCount:n,averageElementsPerObserver:Math.round(o*100)/100,oldestObserver:s,newestObserver:i,mostUsedObserver:a,totalCallbackExecutions:this.totalCallbackExecutions,memoryEstimate:c}}getObserverDetails(){return Array.from(this.observerStats.values())}cleanup(){let t=0;return this.observerCallbacks.forEach((n,o)=>{if(n.size===0){const r=this.observers.get(o);r&&(r.disconnect(),this.observers.delete(o),this.observerCallbacks.delete(o),this.observerStats.delete(o),t++)}}),this.debugMode&&console.log(`[ObserverPool] Manual cleanup: removed ${t} idle observers`),t}resetStats(){this.totalCallbackExecutions=0,this.observerStats.forEach(t=>{t.totalCallbacks=0}),this.debugMode&&console.log("[ObserverPool] Stats reset")}};nt(Dp,"instance");let eD=Dp;const Vt=eD.getInstance(),Mp=(e,t,n,o)=>Vt.observe(e,t,n,o),tD=e=>Vt.unobserve(e),nD=()=>Vt.getStats(),oD=e=>Vt.setDebugMode(e),rD=()=>Vt.getObserverDetails(),sD=()=>Vt.cleanup(),iD=()=>Vt.resetStats();function aD(e,t){switch(t.type){case"LOAD_START":return{status:"loading",displaySrc:t.payload.src,error:null,requestId:t.payload.requestId};case"LOAD_SUCCESS":return t.payload.requestId!==e.requestId?e:{...e,status:"loaded",displaySrc:t.payload.src||e.displaySrc,error:null};case"LOAD_ERROR":return t.payload.requestId!==e.requestId?e:{...e,status:"error",error:t.payload.error};case"RESET":return{status:"idle",displaySrc:null,error:null,requestId:e.requestId};default:return e}}function xt(e,t){if(!e||!t||e===t)return!0;try{const n=typeof document<"u"?document.baseURI:"http://localhost/";return new URL(e,n).href===new URL(t,n).href}catch{return!1}}function lD(e,t){const{root:n,rootMargin:o="200px 0px",threshold:r=0,unobserveOnVisible:s=!1}=t||{},[i,a]=x.useState(!1),l=x.useMemo(()=>JSON.stringify({rootMargin:o,threshold:r,unobserveOnVisible:s}),[o,r,s]);return x.useEffect(()=>{const c=e.current;if(!c)return;const u=Mp(c,d=>{a(d)},{root:n||null,rootMargin:o,threshold:r},s);return()=>{u()}},[l,n]),{inView:i}}const jp=x.forwardRef((e,t)=>{const{src:n,alt:o="",root:r,rootMargin:s,threshold:i,unobserveOnVisible:a,loading:l="lazy",isLCP:c=!1,fetchPriority:u="auto",enablePerformanceMonitor:d=!1,onBeforeLoad:p,onLoadStart:f,onLoadSuccess:v,onLoadError:w,onEnterViewport:b,onLeaveViewport:h,children:g,containerStyle:y,containerClassName:P,imageStyle:$,imageClassName:I,aspectRatio:k,srcSet:_,sizes:S}=e,L=x.useRef(null),j=x.useRef(null),A=x.useRef(null),z=x.useRef(null);x.useEffect(()=>(d&&!z.current&&(z.current=gl(`lazy-image-${n}`,{enabled:!0,collectVitals:!1,enableDebug:!1}),z.current.mark("mount")),()=>{z.current&&(z.current.end(),z.current.dispose(),z.current=null)}),[d,n]);const[O,U]=x.useReducer(aD,{status:"idle",displaySrc:null,error:null,requestId:0}),re=x.useRef(null),K=x.useRef(null),R=x.useRef(0),M=x.useRef(!1),T=x.useRef(n),H=x.useRef(0),W=x.useRef(null),[G,q]=x.useState(0),le=5,pe=300,ee=x.useMemo(()=>!(c||l==="eager"),[c,l]),{inView:we}=lD(L,{root:r,rootMargin:s,threshold:i,unobserveOnVisible:a}),Qn=x.useMemo(()=>c?"eager":l==="auto"?"lazy":l,[c,l]),Ko=x.useMemo(()=>c?"high":u,[c,u]),Ss=x.useRef(!1);x.useEffect(()=>{var V,De;we&&!Ss.current?((V=z.current)==null||V.mark("enter-viewport"),b==null||b()):!we&&Ss.current&&((De=z.current)==null||De.mark("leave-viewport"),h==null||h()),Ss.current=we},[we,b,h]);const vl=x.useCallback(()=>{H.current>=le||(H.current+=1,W.current&&clearTimeout(W.current),W.current=setTimeout(()=>{W.current=null,q(V=>V+1)},pe))},[]),Yo=x.useCallback(async()=>{var me;if(!n.trim()){M.current=!1,re.current=null,K.current=null,U({type:"RESET"});return}if(M.current||K.current===n)return;M.current=!0,re.current=n;const V=++R.current;(me=z.current)==null||me.mark("load-start"),A.current&&A.current.abort(),A.current=new AbortController;const De=A.current;f==null||f();try{const Se=await Promise.resolve(p==null?void 0:p());if(De.signal.aborted||R.current!==V)return;H.current=0;const Ue=Se||n;if(!Ue.trim()){M.current=!1,U({type:"RESET"});return}U({type:"LOAD_START",payload:{src:Ue,requestId:V}})}catch(Se){if(De.signal.aborted||R.current!==V)return;if((Se==null?void 0:Se.message)==="LLI_PLUGIN_GATE"){M.current=!1,U({type:"RESET"}),vl();return}M.current=!1,K.current=n;const Ue=Se instanceof Error?Se:new Error(String(Se));U({type:"LOAD_ERROR",payload:{error:Ue,requestId:V}}),w==null||w(Ue)}},[n,p,f,w,vl]);x.useEffect(()=>{var V;T.current!==n&&(T.current=n,(V=A.current)==null||V.abort(),A.current=null,R.current+=1,M.current=!1,re.current=null,K.current=null,H.current=0,W.current&&(clearTimeout(W.current),W.current=null),U({type:"RESET"}))},[n]),x.useEffect(()=>{ee?we&&Yo():Yo()},[we,n,ee,G]),x.useEffect(()=>()=>{A.current&&(A.current.abort(),A.current=null),W.current&&(clearTimeout(W.current),W.current=null)},[]);const Cs=x.useCallback(()=>{U({type:"RESET"})},[]);x.useImperativeHandle(t,()=>({reload:()=>{var V;(V=A.current)==null||V.abort(),A.current=null,R.current+=1,M.current=!1,re.current=null,K.current=null,H.current=0,Cs(),(!ee||we)&&Yo()},reset:()=>{var V;(V=A.current)==null||V.abort(),A.current=null,R.current+=1,M.current=!1,re.current=null,K.current=null,Cs()},getState:()=>({isIdle:O.status==="idle",isLoading:O.status==="loading",isLoaded:O.status==="loaded",isError:O.status==="error"}),getPerformanceReport:()=>{var V;return((V=z.current)==null?void 0:V.getReport())||null}}),[we,Yo,ee,O.status,Cs]);const sm=x.useMemo(()=>({position:"relative",width:"100%",height:"auto",...k!==void 0?{aspectRatio:String(k)}:null,overflow:"hidden",background:O.status==="error"?"#fee":"#f5f5f5",...y&&(y.background||y.backgroundColor)?null:{color:"#4a4a4a"},display:"flex",alignItems:"center",justifyContent:"center",...y}),[y,O.status,k]);return m.jsxs("div",{ref:V=>{L.current=V,e.containerRefExternal&&(e.containerRefExternal.current=V)},className:P,style:sm,children:[O.status==="loading"&&m.jsx("div",{style:{position:"absolute",inset:0,display:"flex",alignItems:"center",justifyContent:"center",pointerEvents:"none",zIndex:2},children:m.jsx("span",{style:{color:"inherit",fontSize:12},children:"Loading..."})}),O.displaySrc?m.jsx("img",{"data-lli-request":O.requestId,"data-lli-src":O.displaySrc,ref:V=>{j.current=V,e.imageRefExternal&&(e.imageRefExternal.current=V)},src:O.displaySrc,alt:o,srcSet:_,sizes:S,loading:Qn,...Ko!=="auto"&&{fetchpriority:Ko},crossOrigin:e.crossOrigin??void 0,decoding:e.decoding??void 0,referrerPolicy:e.referrerPolicy??void 0,onLoad:V=>{var Yn,Xn,Zn;if(O.status!=="loading"&&O.status!=="error")return;const De=V.currentTarget,me=(De.currentSrc||De.src||"").trim(),Se=(O.displaySrc||"").trim(),Ue=(De.getAttribute("src")||"").trim(),Kn=O.status==="error";if(Kn){if(!me||xt(me,Se)||!xt(me,Ue))return}else if(me&&!xt(me,Se)&&!xt(me,Ue))return;M.current=!1,K.current=null,(Yn=z.current)==null||Yn.mark("load-end"),(Xn=z.current)==null||Xn.measure("load-duration","load-start","load-end"),(Zn=z.current)==null||Zn.measure("total-duration","mount","load-end"),U({type:"LOAD_SUCCESS",payload:{requestId:O.requestId,...Kn?{src:me||Ue}:null}}),v==null||v(me||Se||void 0)},onError:V=>{var Xn,Zn;if(O.status!=="loading"&&O.status!=="error")return;const De=V.currentTarget,me=(De.currentSrc||De.src||"").trim(),Se=(O.displaySrc||"").trim(),Ue=(De.getAttribute("src")||"").trim(),Kn=O.status==="error";if(Kn){if(!me||xt(me,Se)||!xt(me,Ue))return}else if(me&&!xt(me,Se)&&!xt(me,Ue))return;Kn||(M.current=!1,K.current=n),(Xn=z.current)==null||Xn.mark("load-error"),(Zn=z.current)==null||Zn.measure("error-duration","load-start","load-error");const Yn=new Error("Image load error");U({type:"LOAD_ERROR",payload:{error:Yn,requestId:O.requestId}}),w==null||w(Yn)},style:{width:"100%",height:"auto",objectFit:"cover",opacity:O.status==="loaded"?1:0,transition:"opacity 180ms ease",...$},className:I}):null,g]})});jp.displayName="LazyLoadImageCore";const cD={CRITICAL:10,HIGH:50,NORMAL:100,LOW:150,DEBUG:200},uD={BEFORE_LOAD:"onBeforeLoad",LOAD_START:"onLoadStart",LOAD_SUCCESS:"onLoadSuccess",LOAD_ERROR:"onLoadError",LOAD:"onLoad",ENTER_VIEWPORT:"onEnterViewport",LEAVE_VIEWPORT:"onLeaveViewport",MOUNT:"onMount",UNMOUNT:"onUnmount",PROGRESS:"onProgress",SRC_CHANGE:"onSrcChange",NETWORK_CHANGE:"onNetworkChange",RESIZE:"onResize",RETRY:"onRetry"},kt={TIMEOUT:3e4,MAX_RETRIES:3,RETRY_DELAY:1e3,RETRY_BACKOFF:2,CACHE_SIZE_INFLIGHT:50,CACHE_SIZE_CONTROLLERS:50,CACHE_SIZE_OBJECT_URLS:100},ca={CLIENT_ERROR_MIN:400,CLIENT_ERROR_MAX:500,SERVER_ERROR_MIN:500,SERVER_ERROR_MAX:600,OK:200,NOT_FOUND:404,FORBIDDEN:403,UNAUTHORIZED:401,INTERNAL_SERVER_ERROR:500,SERVICE_UNAVAILABLE:503},dD={RETENTION_TIME:5*60*1e3,HIGH_DISCOVERY_DELAY_THRESHOLD:100,HIGH_LOAD_DELAY_THRESHOLD:2e3,HIGH_RENDER_DELAY_THRESHOLD:50,SLOW_LCP_THRESHOLD:2500},pD={ROOT_MARGIN:"200px 0px",THRESHOLD:0,UNOBSERVE_ON_VISIBLE:!1},mD={NETWORK_CHANGE:1e3,WINDOW_RESIZE:300,SCROLL:100},gD={LAZY:"lazy",EAGER:"eager",AUTO:"auto"},fD={HIGH:"high",LOW:"low",AUTO:"auto"};function Tp(e){const t=new Map(e.map(a=>[a.name,a])),n=[];for(const a of e)for(const l of a.dependencies??[])t.has(l)||n.push(`${a.name} -> ${l}`);const o=[],r=new Set,s=[...e],i=a=>(a.dependencies??[]).every(l=>r.has(l)||!t.has(l));for(;s.length>0;){const a=s.filter(i);if(a.length===0)throw new Error(`[vane/plugin-core] 插件循环依赖: ${s.map(c=>c.name).join(" <-> ")}`);let l=a[0];for(const c of a)(c.priority??0)>(l.priority??0)&&(l=c);o.push(l),r.add(l.name),s.splice(s.indexOf(l),1)}return n.length>0&&console.warn(`[vane/plugin-core] 以下插件依赖未注册，将被忽略:
  ${n.join(`
  `)}`),o}function Np(e,t){try{return Tp(e)}catch(n){return t==null||t(n),e}}async function hD(e,t={}){const{timeout:n=3e3,name:o="anonymous",hook:r="unknown"}=t;if(!n||n<=0)return await e();let s;const i=new Promise((a,l)=>{s=setTimeout(()=>{l(new Error(`[vane/plugin-core] 插件 ${o} 的钩子 ${r} 超时(${n}ms)`))},n)});try{return await Promise.race([Promise.resolve().then(e),i])}finally{s&&clearTimeout(s)}}const yD=new Set(["onMount","onUnmount","onPropsChange","onError"]);function vD(e={}){const t=e.logger??console,n=e.sandbox??!0,o=e.timeout??3e3,r=[];let s=[];const i=new Map,a=new Map,l=new Set;let c=0,u=null,d=0;const p=(S,L,j)=>{r.push({plugin:S,hook:L,error:j})},f=()=>{c+=1,u=null},v=(S,L=new Set)=>S.enabled===!1?!1:L.has(S.name)?!0:(L.add(S.name),(S.dependencies??[]).every(j=>{const A=i.get(j);return!A||v(A,L)})),w=()=>{if(u)return u;const S=[...i.values()].filter(L=>v(L)?!0:(p(L.name,"dependencies",new Error("依赖已停用")),!1));return u=Np(S,L=>p("[order]","resolveDependencyOrder",L))},b=S=>{const L=s.filter(([j])=>!S||j===S).reverse();s=S?s.filter(([j])=>j!==S):[];for(const[,j]of L)try{j()}catch(A){t.warn("[vane] cleanup failed",A)}},h=S=>{var L;return Promise.resolve((L=S.destroy)==null?void 0:L.call(S)).catch(j=>t.warn(`[vane] destroy failed: ${S.name}`,j))},g=async(S,L,j,A,z)=>{var K,R;const O=L==="onUnmount";if(L==="onMount"||O){if(l.has(S.name)!==O)return{};O?l.delete(S.name):l.add(S.name)}const U=(K=S.hooks)==null?void 0:K[L];if(typeof U!="function")return{};let re;try{const M=()=>U(j,...A);re=S.sandbox??n?await hD(M,{timeout:S.timeout??o,name:S.name,hook:L}):await M()}catch(M){return z!==c?{}:(p(S.name,L,M),t.warn(`[vane] ${L} failed: ${S.name}`,M),(R=e.onError)==null||R.call(e,S.name,L,M),{stop:L==="onError"})}return z!==c?{}:yD.has(L)&&typeof re=="function"?(s.push([S.name,re]),{}):{value:re}},y=async(S,L,j)=>{const A=c;for(const z of w()){if(A!==c)return;const O=await g(z,S,L,j,A);if(O.stop)return;if(O.value===!1)return!1;if(O.value!==void 0&&O.value!==!0)return O.value}},P=(S,L,...j)=>y(S,L,j),$=S=>{i.get(S.name)&&a.get(S.name)!==S&&(t.warn(`[vane] duplicate plugin, destroy old: ${S.name}`),_(S.name)),i.set(S.name,{...S,enabled:S.enabled??!0}),a.set(S.name,S),l.delete(S.name),f(),S.init&&Promise.resolve(S.init()).catch(L=>{t.warn(`[vane] init failed: ${S.name}`,L)})},I=S=>S.forEach($),k=S=>{i.delete(S),a.delete(S),l.delete(S),u=null},_=S=>{const L=i.get(S);L&&(f(),b(S),h(L),k(S))};return{register:$,registerAll:I,unregister:_,getPlugin:S=>i.get(S),getAllPlugins:()=>[...i.values()],getEnabledPlugins:()=>[...i.values()].filter(S=>S.enabled!==!1),getExecutionOrder:()=>[...w()],enable:S=>{const L=i.get(S);L&&(L.enabled=!0,u=null)},disable:S=>{const L=i.get(S);L&&(L.enabled=!1,u=null)},has:S=>i.has(S),executeHook:P,clear:()=>{f(),d+=1,b();const S=[...i.values()].map(h);return i.clear(),a.clear(),l.clear(),Promise.all(S).then(()=>{})},getErrors:()=>[...r],align:async(S,L)=>{const j=++d,A=new Map(S.map(z=>[z.name,z]));for(const z of[...i.keys()]){if(j!==d)return;if(a.get(z)===A.get(z))continue;const O=i.get(z);f(),await g(O,"onUnmount",L,[],c),b(z),await h(O),k(z)}for(const z of S){if(j!==d)return;a.get(z.name)!==z&&$(z)}},peekOrder:w}}var wD=Object.defineProperty,xD=(e,t,n)=>t in e?wD(e,t,{enumerable:!0,configurable:!0,writable:!0,value:n}):e[t]=n,qt=(e,t,n)=>xD(e,typeof t!="symbol"?t+"":t,n);const Ap=class mo{constructor(){qt(this,"networkInfo"),qt(this,"deviceInfo"),qt(this,"listeners",new Set),qt(this,"initialized",!1),qt(this,"disposeFns",[]),qt(this,"resizeTimer"),this.initListeners()}static getInstance(){return mo.instance||(mo.instance=new mo),mo.instance}ensureInitialized(){this.initialized||this.initListeners()}initListeners(){if(typeof window>"u"||this.initialized)return;this.initialized=!0;const t=typeof navigator<"u"?navigator:void 0,n=(t==null?void 0:t.connection)||(t==null?void 0:t.mozConnection)||(t==null?void 0:t.webkitConnection);if(n){const s=()=>{this.networkInfo=void 0,this.notifyListeners()};n.addEventListener("change",s),this.disposeFns.push(()=>n.removeEventListener("change",s))}const o=()=>{this.networkInfo=void 0,this.notifyListeners()};window.addEventListener("online",o),window.addEventListener("offline",o),this.disposeFns.push(()=>{window.removeEventListener("online",o),window.removeEventListener("offline",o)});const r=()=>{this.resizeTimer&&clearTimeout(this.resizeTimer),this.resizeTimer=window.setTimeout(()=>{this.resizeTimer=void 0,this.deviceInfo=void 0,this.notifyListeners()},300)};window.addEventListener("resize",r),this.disposeFns.push(()=>{window.removeEventListener("resize",r),this.resizeTimer&&(clearTimeout(this.resizeTimer),this.resizeTimer=void 0)})}dispose(){this.disposeFns.forEach(t=>{try{t()}catch{}}),this.disposeFns=[],this.initialized=!1,this.networkInfo=void 0,this.deviceInfo=void 0}getNetworkInfo(){return this.ensureInitialized(),this.networkInfo||(this.networkInfo=this.detectNetwork()),this.networkInfo}getDeviceInfo(){return this.ensureInitialized(),this.deviceInfo||(this.deviceInfo=this.detectDevice()),this.deviceInfo}detectNetwork(){if(typeof navigator>"u")return;const t=navigator,n=(t==null?void 0:t.connection)||(t==null?void 0:t.mozConnection)||(t==null?void 0:t.webkitConnection);return{online:t.onLine!==void 0?t.onLine:!0,effectiveType:(n==null?void 0:n.effectiveType)||"4g",downlink:Number((n==null?void 0:n.downlink)||10),rtt:Number((n==null?void 0:n.rtt)||50),saveData:!!(n!=null&&n.saveData)}}detectDevice(){const t=typeof window<"u"?window.innerWidth:1024,n=typeof window<"u"?window.innerHeight:768,o=typeof window<"u"&&window.devicePixelRatio||1,r=typeof navigator<"u"&&navigator.userAgent||"",s=/Mobile|Android|iPhone|iPad/i.test(r);return{type:/iPad|Tablet/i.test(r)?"tablet":s?"mobile":"desktop",os:r,browser:r,devicePixelRatio:o,viewportWidth:t,viewportHeight:n,isTouchDevice:typeof window<"u"&&"ontouchstart"in window,isRetina:o>=2}}addListener(t){return this.ensureInitialized(),this.listeners.add(t),()=>this.listeners.delete(t)}notifyListeners(){this.listeners.forEach(t=>{try{t()}catch(n){console.error("[GlobalContext] Listener error:",n)}})}refreshNetworkInfo(){this.networkInfo=void 0,this.networkInfo=this.detectNetwork(),this.notifyListeners()}refreshDeviceInfo(){this.deviceInfo=void 0,this.deviceInfo=this.detectDevice(),this.notifyListeners()}getStats(){return{listenersCount:this.listeners.size,hasNetworkInfo:!!this.networkInfo,hasDeviceInfo:!!this.deviceInfo}}};qt(Ap,"instance");let bD=Ap;const Qo=bD.getInstance(),rs=()=>Qo.getNetworkInfo(),PD=()=>Qo.getDeviceInfo(),Bp=e=>Qo.addListener(e),$D=()=>Qo.getStats();function SD(){const e=new Map,t=new Map;let n=0;const o=(a,l)=>{const c=e.get(a);if(c){if(n>=50){console.warn(`[PluginBus] emit depth exceeded: "${a}"`);return}n+=1;for(const u of[...c])try{u(l)}catch(d){console.warn(`[PluginBus] handler error for event "${a}"`,d)}n-=1}},r=(a,l)=>{let c=e.get(a);return c||(c=new Set,e.set(a,c)),c.add(l),()=>{c==null||c.delete(l)}},s=(a,l)=>{const c=u=>{try{l(u)}finally{i(a,c)}};return r(a,c)},i=(a,l)=>{var c;if(!l){e.delete(a);return}(c=e.get(a))==null||c.delete(l)};return{emit:o,on:r,once:s,off:i,getData:a=>t.get(a),setData:(a,l)=>{const c=t.get(a);t.set(a,l),c!==l&&o(a,l)},deleteData:a=>{const l=t.has(a);t.delete(a),l&&o(a,void 0)},hasData:a=>t.has(a),getAll:()=>{const a=Object.create(null);return t.forEach((l,c)=>{a[c]=l}),a},clear:()=>{e.clear(),t.clear()}}}var CD=Object.defineProperty,LD=(e,t,n)=>t in e?CD(e,t,{enumerable:!0,configurable:!0,writable:!0,value:n}):e[t]=n,ID=(e,t,n)=>LD(e,t+"",n);let Up=class extends N.Component{constructor(){super(...arguments),ID(this,"state",{error:null})}static getDerivedStateFromError(t){return{error:t}}componentDidUpdate(t){var r,s;const n=t.resetKeys??[],o=this.props.resetKeys??[];this.state.error&&(n.length!==o.length||n.some((i,a)=>!Object.is(i,o[a])))&&((s=(r=this.props).onReset)==null||s.call(r),this.setState({error:null}))}componentDidCatch(t,n){var o,r;console.warn("[vane/plugin-core] 插件渲染错误已被隔离",t,n),(r=(o=this.props).onError)==null||r.call(o,t,n)}render(){const{error:t}=this.state;return t?this.props.fallback?this.props.fallback(t):null:this.props.children}},gr=null;function kD(e=!1){if(gr&&!e)return gr;const t=typeof window<"u"?window.innerWidth:1024,n=typeof window<"u"?window.innerHeight:768,o=typeof window<"u"&&window.devicePixelRatio||1,r=typeof navigator<"u"&&navigator.userAgent||"",s=/iPad|Tablet/i.test(r),i=/Mobile|Android|iPhone/i.test(r),a=typeof window<"u"&&("ontouchstart"in window||(navigator.maxTouchPoints??0)>0);return gr={type:s?"tablet":i?"mobile":"desktop",os:r,browser:r,devicePixelRatio:o,viewportWidth:t,viewportHeight:n,isTouchDevice:a,isRetina:o>=2},gr}function Ac(e,t){if(Object.is(e,t))return!0;if(typeof e!="object"||typeof t!="object"||e===null||t===null)return!1;const n=Object.keys(e),o=Object.keys(t);return n.length!==o.length?!1:n.every(r=>Object.is(e[r],t[r]))}function _D(e){const{plugins:t,props:n,data:o,initialState:r,containerRef:s,enableDebug:i=!1,managerOptions:a,extendContext:l}=e,c=x.useRef(null),u=s??c,d=x.useRef(null);d.current||(d.current=vD(a));const p=d.current,f=x.useRef(null);f.current||(f.current=SD());const v=f.current,w=x.useRef(new Map),[b,h]=x.useState(r??{}),[,g]=x.useState(0),y=x.useCallback(()=>g(G=>G+1),[]),P=x.useMemo(()=>kD(),[]),$=x.useRef(n);Ac($.current,n)||($.current=n);const I=$.current,k=x.useRef(o);Ac(k.current,o)||(k.current=o);const _=k.current,S=x.useRef(null),L=x.useMemo(()=>{const G={props:I,data:_,bus:v,refs:{container:u,getContainer:()=>u.current},state:b,setState:q=>h(le=>({...le,...q})),shared:w.current,deviceInfo:P,forceUpdate:y,getSize:()=>{const q=u.current;return q?{width:q.offsetWidth,height:q.offsetHeight}:{width:0,height:0}},logger:console};return l?l(G):G},[I,_,b,P,v,l]);x.useLayoutEffect(()=>{S.current=L},[L]);const j=x.useRef(t),A=j.current;A!==t&&(A.length!==t.length||t.some((G,q)=>G!==A[q]))&&(j.current=t);const z=j.current,O=x.useRef(0);x.useLayoutEffect(()=>{const G=++O.current,q=S.current;return p.align(z,q).then(()=>{O.current===G&&(i&&console.debug("[vane/plugin-core] plugins registered:",z.map(le=>le.name).join("|")),p.executeHook("onMount",q))}),()=>{O.current+=1}},[z,p,i]),x.useLayoutEffect(()=>()=>{const G=S.current;if(!p.getExecutionOrder().some(q=>{var le;return typeof((le=q.hooks)==null?void 0:le.onUnmount)=="function"})){p.clear();return}p.executeHook("onUnmount",G).finally(()=>p.clear())},[p]);const U=p.peekOrder(),re=x.useRef([]),K=x.useMemo(()=>{const G=new Map(z.map(ee=>[ee.name,ee])),q=z.filter(ee=>{var we;return ee.enabled!==!1&&((we=p.getPlugin(ee.name))==null?void 0:we.enabled)!==!1}),le=U.length===q.length?U.map(ee=>G.get(ee.name)??ee):Np(q),pe=re.current;return pe.length===le.length&&le.every((ee,we)=>ee===pe[we])?pe:(re.current=le,le)},[z,p,U]),R=x.useRef(L);R.current=L;const M=x.useCallback((G,q)=>{var ee;const le=R.current;let pe=q;for(const we of K){const Qn=(ee=we.hooks)==null?void 0:ee[G];if(typeof Qn=="function")try{pe=G==="transformData"?Qn(le,pe):Qn(pe)}catch(Ko){(le.logger??console).warn(`[plugin-core] ${we.name}.${G} 执行失败，已跳过`,Ko)}}return pe},[K]),T=x.useCallback(G=>M("transformProps",G),[M]),H=x.useCallback(G=>M("transformData",G),[M]),W=x.useCallback((G,...q)=>p.executeHook(G,S.current,...q),[p]);return{manager:p,bus:v,context:L,state:b,setState:L.setState,execute:W,transformProps:T,transformData:H,orderedPlugins:K}}x.createContext(null);function fr(e,t,n){var r,s;if(e.enabled===!1||typeof((r=e.hooks)==null?void 0:r[t])!="function")return!1;const o=(s=e.config)==null?void 0:s.slotPosition;return n==="before"?o==="before":n==="footer"?o===void 0||o==="after"||o==="footer":o===void 0||o==="after"}function ED(e,t){var n,o;return(((n=e.config)==null?void 0:n.order)??0)-(((o=t.config)==null?void 0:o.order)??0)||(t.priority??0)-(e.priority??0)}function hr(e,t,n){const o=new Set;return e.map(r=>{var s;if(o.has(r.name))return null;o.add(r.name);try{const i=(s=r.hooks)==null?void 0:s[n],a=i==null?void 0:i(t);return a==null?null:m.jsx(Up,{children:a},`vane-slot-${r.name}`)}catch(i){return console.warn(`[vane/plugin-core] 插件 ${r.name} 的 ${n} 渲染失败`,i),null}})}function RD(e,t,n){const o={headerBefore:[],overlay:[],headerAfter:[],footer:[]};for(const r of e)fr(r,"renderHeader","before")?o.headerBefore.push(r):fr(r,"renderHeader","after")&&o.headerAfter.push(r),fr(r,"renderOverlay","after")&&o.overlay.push(r),fr(r,"renderFooter","footer")&&o.footer.push(r);for(const r of Object.keys(o))o[r].sort(ED);return m.jsxs(m.Fragment,{children:[hr(o.headerBefore,t,"renderHeader"),n,hr(o.overlay,t,"renderOverlay"),hr(o.headerAfter,t,"renderHeader"),hr(o.footer,t,"renderFooter")]})}const zD=1e3,OD=100;function DD(e){const t=e.priority??OD;return{...e,priority:zD-t}}function MD(e){return e.map(DD)}function jD(e,t){const n=Array.isArray(t)?{plugins:t}:t,{plugins:o,enableDebug:r=!1}=n,s=x.forwardRef((i,a)=>{const l=x.useMemo(()=>MD(o),[o.map(z=>z.name).join("|")]),c=x.useRef(null),[u,d]=x.useState({isIdle:!0,isLoading:!1,isLoaded:!1,isError:!1}),[p,f]=x.useState(!1),[v,w]=x.useState(()=>rs()),b=x.useRef({loadStartTime:0}),h=x.useRef(i.src),g=x.useRef(null),y=x.useCallback(z=>({...z,src:i.src,imageState:u,isIntersecting:p,imageRef:c,containerRef:z.refs.container,networkInfo:v,sharedData:z.shared,performanceData:b.current,reload:()=>{var O;return(O=g.current)==null?void 0:O.reload()},reset:()=>{var O;return(O=g.current)==null?void 0:O.reset()}}),[i.src,u,p,v]),P=_D({plugins:l,props:i,enableDebug:r,extendContext:y}),$=x.useCallback((z,...O)=>P.execute(z,...O),[P.manager]);x.useEffect(()=>{$("onMount")},[$]),x.useEffect(()=>P.bus.on("progress",z=>{$("onProgress",z)}),[$,P.bus]),x.useEffect(()=>{const z=h.current;z!==i.src&&(h.current=i.src,d({isIdle:!0,isLoading:!1,isLoaded:!1,isError:!1}),b.current={loadStartTime:0},$("onSrcChange",z,i.src))},[i.src,$]),x.useEffect(()=>Bp(()=>{w(rs()),$("onNetworkChange"),$("onResize")}),[$]);const I=x.useCallback(async()=>{if(await $("onBeforeLoad")===!1)throw new Error("LLI_PLUGIN_GATE");const z=await $("onLoad");return d({isIdle:!1,isLoading:!0,isLoaded:!1,isError:!1}),z},[$]),k=x.useCallback(()=>{b.current={loadStartTime:performance.now()}},[$]),_=x.useCallback(z=>{const O=performance.now();b.current={...b.current,loadEndTime:O,duration:O-b.current.loadStartTime},d({isIdle:!1,isLoading:!1,isLoaded:!0,isError:!1}),$("onLoadSuccess",z??"")},[$]),S=x.useCallback(z=>{d({isIdle:!1,isLoading:!1,isLoaded:!1,isError:!0}),$("onLoadError",z)},[$]),L=x.useCallback(()=>{f(!0),$("onEnterViewport")},[$]),j=x.useCallback(()=>{f(!1),$("onLeaveViewport")},[$]),A={...P.transformProps(i),containerRefExternal:P.context.refs.container,imageRefExternal:c,children:m.jsx(Up,{children:RD(P.orderedPlugins,P.context,i.children)}),onBeforeLoad:I,onLoadStart:k,onLoadSuccess:_,onLoadError:S,onEnterViewport:L,onLeaveViewport:j};return m.jsx(e,{ref:z=>{g.current=z,typeof a=="function"?a(z):a&&(a.current=z)},...A})});return s.displayName="WithPlugins(LazyLoadImageCore)",s}function TD(e){const t=(e==null?void 0:e.filter)??"none",n=(e==null?void 0:e.amount)??1;switch(t){case"none":return"none";case"grayscale":return`grayscale(${Math.max(0,Math.min(1,n))})`;case"sepia":return`sepia(${Math.max(0,Math.min(1,n))})`;case"brightness":return`brightness(${n})`;case"contrast":return`contrast(${n})`;case"saturate":return`saturate(${n})`;default:return"none"}}const ND=e=>{const t=TD(e),n=!!(e!=null&&e.hover);return{name:"filter",hooks:{onLoadSuccess(o){var s;const r=(s=o.imageRef)==null?void 0:s.current;if(r&&(r.style.filter=t,n&&t!=="none")){const i=()=>{r.style.filter="none"},a=()=>{r.style.filter=t};r.__lliFilterEnter=i,r.__lliFilterLeave=a,r.addEventListener("mouseenter",i),r.addEventListener("mouseleave",a)}},onUnmount(o){var a;const r=(a=o.imageRef)==null?void 0:a.current;if(!r)return;const s=r.__lliFilterEnter,i=r.__lliFilterLeave;s&&r.removeEventListener("mouseenter",s),i&&r.removeEventListener("mouseleave",i),r.style.filter=""}}}},AD={grayscaleSoft:{filter:"grayscale",amount:.6,hover:!0},sepiaWarm:{filter:"sepia",amount:.5},brightBoost:{filter:"brightness",amount:1.2},contrastPunch:{filter:"contrast",amount:1.3},saturateVivid:{filter:"saturate",amount:1.4}},BD="FilterPlugin",UD="CSS 滤镜：灰度/复古/亮度/对比度/饱和度，悬停可恢复原图。",FD="2.0.0",WD=["visual","视觉"],VD=[{name:"onUnmount",when:"组件卸载前执行一次",description:"释放监听、定时器与观察器；与 onMount 成对出现，避免泄漏"},{name:"onLoadSuccess",when:"图片成功解码可显示时",description:"拿到最终 displaySrc 做后续动作（上报、预取下张、淡入）"}],HD=[],GD="只读取 context 字段（props / state / data），不调用上下文方法",qD=[{name:"filter",type:'"none" | "grayscale" | "sepia" | "brightness" | "contrast" | "saturate"',default:'"none"',description:"滤镜类型"},{name:"amount",type:"number",default:"undefined",description:"滤镜强度（多数类型 0~1）"},{name:"hover",type:"boolean",default:"false",description:"悬停时恢复原图"}],QD=`// 灰度显示，悬停恢复原彩图
const FilterImage = withPlugins(LazyLoadImageCore, [
  createFilterPlugin({
    filter: "grayscale",
    amount: 1,
    hover: true,
  }),
]);

<FilterImage src="https://picsum.photos/seed/filter/600/400" alt="滤镜" />;`,KD=[{name:"灰度 + 悬停还原",description:"默认灰度，鼠标悬停瞬间恢复彩色，制造焦点对比。",src:"https://picsum.photos/seed/filter-gray/600/400",config:{filter:"grayscale",amount:1,hover:!0}},{name:"复古暖调",description:"sepia 中度做旧，营造怀旧氛围。",src:"https://picsum.photos/seed/filter-sepia/600/400",config:{filter:"sepia",amount:.6}},{name:"高对比增强",description:"提升对比度，让画面更有张力。",src:"https://picsum.photos/seed/filter-contrast/600/400",config:{filter:"contrast",amount:1.4}}],YD=["内置 grayscale / sepia / brightness / contrast / saturate 预设","amount 控制强度","hover 模式悬停恢复原图","纯 CSS filter，零额外绘制开销"],XD=["商品列表统一灰度，hover 高亮","怀旧 / 复古风格相册","强调主体前的视觉降噪","活动主题统一调色"],ZD=["hover:true 时滤镜在鼠标移入时移除、移出时恢复。","需要组合滤镜（如 contrast+saturate）或更复杂效果，可用 CustomEffectsPlugin 的 imageStyle.filter 任意写。"],JD={name:BD,description:UD,since:FD,tags:WD,events:VD,methods:HD,methodsNote:GD,config:qD,example:QD,examples:KD,features:YD,useCases:XD,notes:ZD};let Js=null;function Fp(e,t){return Js||(Js=new Promise((n,o)=>{const r=indexedDB.open(e,1);r.onupgradeneeded=()=>{const s=r.result;s.objectStoreNames.contains(t)||s.createObjectStore(t)},r.onsuccess=()=>n(r.result),r.onerror=()=>o(r.error)})),Js}async function Wp(e,t){try{const n=await Fp(t.dbName,t.storeName),o=n.transaction(t.storeName,"readonly").objectStore(t.storeName),r=await new Promise((s,i)=>{const a=o.get(e);a.onsuccess=()=>s(a.result),a.onerror=()=>i(a.error)});if(!r)return;if(t.ttlMs>0&&Date.now()-r.time>t.ttlMs){try{n.transaction(t.storeName,"readwrite").objectStore(t.storeName).delete(e)}catch{}return}return r}catch(n){if(t.debug)try{console.warn("[IDBCache] get failed",n)}catch{}return}}async function Vp(e,t,n){try{const o=(await Fp(n.dbName,n.storeName)).transaction(n.storeName,"readwrite").objectStore(n.storeName),r=typeof t=="string"?{value:t,time:Date.now()}:{blob:t,time:Date.now(),mime:t.type};await new Promise((s,i)=>{const a=o.put(r,e);a.onsuccess=()=>s(),a.onerror=()=>i(a.error)})}catch(o){if(n.debug)try{console.warn("[IDBCache] set failed",o)}catch{}}}const Hp={get:Wp,set:Vp};function e4(e){try{const t=e.split(","),n=t[0].match(/:(.*?);/),o=n?n[1]:"application/octet-stream",r=atob(t[1]);let s=r.length;const i=new Uint8Array(s);for(;s--;)i[s]=r.charCodeAt(s);return new Blob([i],{type:o})}catch{return null}}function t4(e={}){const{enabled:t=!0,dbName:n="LLI-Cache",storeName:o="images",ttlMs:r=7*24*60*60*1e3,debug:s=!1}=e,i=new Map,a=new Set,l=new Set;return{name:"cache-idb",version:"1.0.0",config:e,hooks:{onLoad:async c=>{var u,d,p,f;if(t){if(a.has(c.src)){if(s)try{console.warn("[IDBCache] Prevented reentry for",c.src)}catch{}return}a.add(c.src);try{const v=await Wp(c.src,{dbName:n,storeName:o,ttlMs:r,debug:s});if(v){if(s)try{console.debug("[IDBCache] hit",{src:c.src})}catch{}if((u=c.bus)==null||u.emit("cache:hit",{level:"idb",src:c.src}),v.blob){let w=(d=c.sharedData)==null?void 0:d.get("fetch-loader:object-url");if(!w){w=URL.createObjectURL(v.blob),i.set(c.src,w);try{(p=c.sharedData)==null||p.set("fetch-loader:object-url",w),(f=c.sharedData)==null||f.set("fetch-loader:blob",v.blob)}catch{}}return w}return v.value}return}finally{a.delete(c.src)}}},onLoadSuccess:async(c,u)=>{var d;if(t){if(l.has(c.src)){if(s)try{console.warn("[IDBCache] Write already in progress for",c.src)}catch{}return}l.add(c.src);try{let p=(d=c.sharedData)==null?void 0:d.get("fetch-loader:blob");if(p&&i.get(c.src)===u&&(p=void 0),!p&&u.startsWith("blob:")){if(i.get(c.src)===u)return;try{const f=await fetch(u);f.ok&&(p=await f.blob())}catch{}}if(!p&&u.startsWith("data:")){const f=e4(u);f&&(p=f)}if(p){if(await Vp(c.src,p,{dbName:n,storeName:o,debug:s}),s)try{console.debug("[IDBCache] ✅ Stored blob successfully:",{src:c.src,size:p.size,type:p.type})}catch{}}else if(s)try{console.warn("[IDBCache] ⚠️ No blob available, skip write:",{src:c.src,displaySrc:u})}catch{}}catch{}finally{l.delete(c.src)}if(s)try{console.debug("[IDBCache] set",{src:c.src})}catch{}}},onSrcChange:(c,u)=>{const d=i.get(u);if(d){try{URL.revokeObjectURL(d)}catch{}i.delete(u)}},onUnmount:c=>{const u=i.get(c.src);if(u){try{URL.revokeObjectURL(u)}catch{}i.delete(c.src)}}}}}const an=new Map,pt=[];function Gp(){return Date.now()}function n4(e){if(!(e<=0))for(;pt.length>e;){const t=pt.shift();t&&an.has(t)&&an.delete(t)}}function qp(e){const t=pt.indexOf(e);t>=0&&pt.splice(t,1),pt.push(e)}function ua(e,t){const n=an.get(e);if(n){if(t&&t>0&&Gp()-n.time>t){an.delete(e);const o=pt.indexOf(e);o>=0&&pt.splice(o,1);return}return qp(e),n.value}}function da(e,t,n){an.set(e,{value:t,time:Gp()}),qp(e),n4(n)}const ss={get:ua,set:da,has:(e,t)=>ua(e,t)!==void 0,clear:()=>{an.clear(),pt.splice(0,pt.length)},size:()=>an.size};function o4(e={}){const{enabled:t=!0,maxEntries:n=200,ttlMs:o,debug:r=!1}=e,s=new Map,i=new Set,a=new Map,l=100;function c(u,d,p){const f=`${d}:${p.src}`,v=Date.now(),w=a.get(f)||0;v-w<l||(a.set(f,v),u==null||u.emit(d,p),setTimeout(()=>{a.delete(f)},1e3))}return{name:"cache-memory",version:"1.0.0",config:e,hooks:{onLoad:async u=>{var d,p,f;if(t){if(i.has(u.src)){if(r)try{console.warn("[MemoryCache] Prevented reentry for",u.src)}catch{}return}i.add(u.src);try{const v=ua(u.src,o);if(v){if(r)try{console.debug("[MemoryCache] hit",{src:u.src,isBlob:v instanceof Blob})}catch{}if(c(u.bus,"cache:hit",{level:"memory",src:u.src}),v instanceof Blob){let w=(d=u.sharedData)==null?void 0:d.get("fetch-loader:object-url");if(!w){w=URL.createObjectURL(v),s.set(u.src,w);try{(p=u.sharedData)==null||p.set("fetch-loader:object-url",w),(f=u.sharedData)==null||f.set("fetch-loader:blob",v)}catch{}}return w}if(!v.startsWith("blob:"))return v}return}finally{i.delete(u.src)}}},onLoadSuccess:(u,d)=>{var f;if(!t)return;const p=(f=u.sharedData)==null?void 0:f.get("fetch-loader:blob");if(p instanceof Blob?da(u.src,p,n):d.startsWith("blob:")||da(u.src,d,n),r)try{console.debug("[MemoryCache] set",{src:u.src,length:d.length})}catch{}},onSrcChange:(u,d,p)=>{if(!t)return;c(u.bus,"cache:src-change",{oldSrc:d,newSrc:p,src:d});const f=s.get(d);if(f){try{URL.revokeObjectURL(f)}catch{}s.delete(d)}},onUnmount:u=>{const d=s.get(u.src);if(d){try{URL.revokeObjectURL(d)}catch{}s.delete(u.src)}}}}}function Fn(e,t){const n=e.split(".").map(Number),o=t.split(".").map(Number),r=Math.max(n.length,o.length);for(let s=0;s<r;s++){const i=n[s]||0,a=o[s]||0;if(i>a)return 1;if(i<a)return-1}return 0}function r4(e,t,n){return!(t&&Fn(e,t)<0||n&&Fn(e,n)>0)}function Qp(e){const[t=0,n=0,o=0]=e.split(".").map(Number);return{major:t,minor:n,patch:o}}function s4(e){const t=e.split(".");return t.length<1||t.length>3?!1:t.every(n=>{const o=Number(n);return!isNaN(o)&&o>=0&&Number.isInteger(o)})}function i4(e){const{major:t,minor:n,patch:o}=Qp(e);return`${t}.${n}.${o}`}function a4(e,t){return Fn(e,t)===0}function l4(e,t){return Fn(e,t)>0}function c4(e,t){return Fn(e,t)<0}const ei=(()=>{const e=new Map;function t(s,i){const a=e.get(s);if(a&&a.initialized)return a.idleMs=i>0?i:a.idleMs,a;const l={isIdle:!0,timer:null,idleWaiters:new Set,idleMs:i>0?i:120,initialized:!1,refCount:0,cleanup:void 0},c=()=>{l.isIdle=!1,l.timer&&clearTimeout(l.timer),l.timer=setTimeout(()=>{l.isIdle=!0,l.idleWaiters.forEach(u=>{try{u()}catch{}}),l.idleWaiters.clear()},l.idleMs)};if(s==="window")window.addEventListener("scroll",c,{passive:!0}),window.addEventListener("wheel",c,{passive:!0}),window.addEventListener("touchmove",c,{passive:!0}),l.cleanup=()=>{window.removeEventListener("scroll",c),window.removeEventListener("wheel",c),window.removeEventListener("touchmove",c)};else{try{s.addEventListener("scroll",c,{passive:!0}),s.addEventListener("wheel",c,{passive:!0}),s.addEventListener("touchmove",c,{passive:!0})}catch{}l.cleanup=()=>{try{s.removeEventListener("scroll",c),s.removeEventListener("wheel",c),s.removeEventListener("touchmove",c)}catch{}}}return l.initialized=!0,e.set(s,l),l}async function n(s,i,a){const l=t(s,i);l.isIdle||await new Promise(c=>{let u=null;const d=()=>{u&&clearTimeout(u),c()};l.idleWaiters.add(d),typeof a=="number"&&a>0&&(u=setTimeout(()=>{l.idleWaiters.delete(d),c()},a))})}function o(s,i){const a=t(s,i);return a.refCount+=1,a}function r(s){var a;const i=e.get(s);if(i&&(i.refCount-=1,!(i.refCount>0))){try{(a=i.cleanup)==null||a.call(i)}catch{}i.timer&&clearTimeout(i.timer),i.timer=null,i.idleWaiters.forEach(l=>{try{l()}catch{}}),i.idleWaiters.clear(),e.delete(s)}}return{ensure:t,acquire:o,release:r,waitForIdle:n}})();function u4(e={}){const{idleMs:t=120,onlyWhenIntersecting:n=!0,maxWaitMs:o=1200,target:r="window",axis:s="vertical",debug:i=!1}=e;return{name:"scroll-idle",version:"1.0.0",config:e,hooks:{onMount:a=>{var u,d;const l=((u=a.containerRef)==null?void 0:u.current)||null,c=r==="container"&&l?l:"window";ei.acquire(c,t);try{(d=a.sharedData)==null||d.set("scroll-idle:target",c)}catch{}if(i)try{console.debug("[ScrollIdle] mount",{idleMs:t,target:r,axis:s,hasContainer:!!l})}catch{}},onUnmount:a=>{var c,u;let l;try{l=(c=a.sharedData)==null?void 0:c.get("scroll-idle:target"),(u=a.sharedData)==null||u.delete("scroll-idle:target")}catch{}l&&ei.release(l)},onLoad:async a=>{var l;if(a.props.loading!=="eager"&&(!n||a.isIntersecting)){const c=((l=a.containerRef)==null?void 0:l.current)||null,u=r==="container"&&c?c:"window";i&&console.debug(`[ScrollIdle] waiting for idle ${t}ms (max ${o}ms)`,{target:r,axis:s});try{await ei.waitForIdle(u,t,o)}catch{}}}}}}const d4="ScrollIdlePlugin",p4="滚动空闲加载：滚动停止后再发起加载，避免与滚动争抢带宽。",m4="2.0.0",g4=["loading","加载策略"],f4=[{name:"onMount",when:"组件挂载完成、插件注册后执行一次（返回的清理函数在 manager.clear 时逆序执行）",description:"初始化副作用：注册监听、起定时器、建观察器；必须返回清理函数或配合 onUnmount 收尾"},{name:"onUnmount",when:"组件卸载前执行一次",description:"释放监听、定时器与观察器；与 onMount 成对出现，避免泄漏"},{name:"onLoad",when:"加载流程开始、需要确定最终图片地址时",description:"自定义加载逻辑，返回最终图片 URL（objectURL / dataURL / 原地址）"}],h4=[],y4="只读取 context 字段（props / state / data），不调用上下文方法",v4=[{name:"idleMs",type:"number",default:"120",description:"判定为“空闲”的静止时间（毫秒）"},{name:"onlyWhenIntersecting",type:"boolean",default:"true",description:"是否仅在进入视口后生效（否则所有加载都会等待空闲）"},{name:"maxWaitMs",type:"number",default:"1200",description:"最长等待空闲的时间（毫秒），超过则直接继续加载，避免长时间滚动导致饥饿"},{name:"target",type:'"window" | "container"',default:'"window"',description:"监听对象：window 或容器（容器将使用 context.containerRef.current）"},{name:"axis",type:'"vertical" | "horizontal" | "both"',default:'"vertical"',description:"滚动轴向：vertical/horizontal/both（目前用于调试标注，可按需扩展策略）"},{name:"debug",type:"boolean",default:"false",description:"调试输出"}],w4=`const LazyImage = withPlugins(LazyLoadImageCore, [
  createScrollIdlePlugin({
    idleMs: 160,
    onlyWhenIntersecting: true,
    maxWaitMs: 1200, // 最多等 1.2s，避免饥饿
  }),
]);`,x4=[{name:"滚动停止后加载",description:"用户停止滚动 160ms 后再加载，滚动过程中不打断主线程与带宽。",config:{idleMs:160,onlyWhenIntersecting:!0,maxWaitMs:1200}},{name:"更敏感空闲",description:"80ms 即判定空闲，适合加载较轻的图标 / 缩略图。",config:{idleMs:80,maxWaitMs:800}}],b4=["监听滚动，空闲（停止滚动 idleMs）后才发起加载","默认仅进入视口后生效，不拖累首屏外元素","maxWaitMs 兜底，防止长时间连续滚动导致饥饿","支持 window / 容器两种监听对象"],P4=["长列表滚动时避免与主线程 / 带宽争抢","低端机滚动卡顿优化"],$4=["与 ConcurrencyControl 叠加效果最佳。","maxWaitMs 务必设置，否则连续滚动可能长期不加载。","容器模式会使用 context.containerRef.current 作为监听目标。"],S4={name:d4,description:p4,since:m4,tags:g4,events:f4,methods:h4,methodsNote:y4,config:v4,example:w4,examples:x4,features:b4,useCases:P4,notes:$4};function C4(e,t){const{ariaLabel:n}=e;if(n)return typeof n=="function"?n(t):n}const L4=({ctx:e,config:t})=>{var r,s,i;const{imageState:n}=e,o=n.isError?((r=t.statusText)==null?void 0:r.error)??"图片加载失败":n.isLoaded?((s=t.statusText)==null?void 0:s.loaded)??"图片加载完成":n.isLoading?((i=t.statusText)==null?void 0:i.loading)??"图片加载中":"图片未加载";return x.useEffect(()=>{var l;const a=(l=e.imageRef)==null?void 0:l.current;if(!(!a||!t.enabled))try{a.setAttribute("aria-busy",n.isLoading?"true":"false")}catch{}},[e.imageRef,t.enabled,n.isLoading]),m.jsx("span",{role:"status","aria-live":"polite",style:{position:"absolute",width:1,height:1,padding:0,margin:-1,overflow:"hidden",clip:"rect(0, 0, 0, 0)",whiteSpace:"nowrap",border:0},children:o})};function I4(e={}){const{enabled:t=!0,decorative:n=!1}=e;return{name:"a11y",version:"1.0.0",config:e,hooks:{onMount:o=>{var s;if(!t)return;const r=(s=o.imageRef)==null?void 0:s.current;if(r)try{n&&(r.setAttribute("aria-hidden","true"),r.setAttribute("alt",""));const i=C4(e,o);i&&r.setAttribute("aria-label",i),r.setAttribute("role","img")}catch{}},renderOverlay:o=>t?m.jsx(L4,{ctx:o,config:e}):null}}}const k4="A11yPlugin",_4="无障碍支持：将装饰性图片设为 aria-hidden、自定义 aria-label、注入 role=img 与 aria-busy，并通过 aria-live 区域播报加载状态，提升读屏可用性。",E4="2.0.0",R4=["a11y","可访问性","SEO"],z4=[{name:"onMount",when:"组件挂载完成、插件注册后执行一次（返回的清理函数在 manager.clear 时逆序执行）",description:"初始化副作用：注册监听、起定时器、建观察器；必须返回清理函数或配合 onUnmount 收尾"},{name:"renderOverlay",when:"每次渲染，覆盖在图片容器之上",description:"骨架屏、错误占位、水印、加载动画"}],O4=[],D4="只读取 context 字段（props / state / data），不调用上下文方法",M4=[{name:"enabled",type:"boolean",default:"true",description:"是否启用无障碍增强"},{name:"decorative",type:"boolean",default:"false",description:"标记为装饰性图片（aria-hidden=true 并清空 alt）"},{name:"ariaLabel",type:"string | ((ctx) => string)",default:"undefined",description:"自定义 aria-label（函数型，参见用法示例）"},{name:"statusText",type:"{ loading?; loaded?; error? }",default:"undefined",description:"视觉隐藏的状态播报文本"}],j4=`const A11yImage = withPlugins(LazyLoadImageCore, [
  createA11yPlugin({
    ariaLabel: (ctx) => \`商品主图 \${ctx.src}\`,
    statusText: { loading: "加载中…", loaded: "已加载", error: "加载失败" },
  }),
]);

// 装饰性图片也可直接跳过读屏
<A11yImage src="https://picsum.photos/id/1015/500/300" alt="" />;`,T4=[{name:"装饰性图片",description:"decorative=true 时清空 alt 并设 aria-hidden，读屏跳过。",src:"https://picsum.photos/id/1015/500/300",config:{decorative:!0}},{name:"自定义 aria-label（字符串）",description:"为图片设置区别于 alt 的 aria-label。",src:"https://picsum.photos/id/1021/500/300",config:{ariaLabel:"商品主图"}},{name:"加载状态播报",description:"视觉隐藏区域以 aria-live 播报加载中/完成/失败。",src:"https://picsum.photos/id/1026/500/300",config:{statusText:{loading:"加载中…",loaded:"已加载",error:"加载失败"}}}],N4=["装饰性图片 aria-hidden","自定义 aria-label（字符串或函数）","role=img 明确语义","aria-busy 随加载态切换","aria-live 状态播报（视觉隐藏）","可关闭"],A4=["无障碍合规（WCAG）","读屏器适配","装饰性背景图","加载状态可读"],B4=["ariaLabel 支持函数型，但静态预览仅支持字符串；函数用法见用法示例。"],U4={name:k4,description:_4,since:E4,tags:R4,events:z4,methods:O4,methodsNote:D4,config:M4,example:j4,examples:T4,features:N4,useCases:A4,notes:B4};function F4(e){try{const t=document.createElement("link");return t.rel="preload",t.as="image",t.href=e,document.head.appendChild(t),()=>{try{document.head.removeChild(t)}catch{}}}catch{return()=>{}}}function W4(e={}){const{enabled:t=!0,altFallback:n,title:o,aspectRatio:r,priority:s="auto",preload:i=!1}=e;return{name:"seo",version:"1.0.0",config:e,hooks:{transformProps:a=>{if(!t)return a;const l={...a};return(!l.alt||l.alt==="")&&n&&(l.alt=n),s==="lcp"&&(l.loading="eager",l.rootMargin="0px"),r&&(l.containerStyle={...l.containerStyle||{},aspectRatio:r}),l},onMount:a=>{var c,u,d;if(!t)return;let l;if(i&&(l=F4(a.src)),o)try{(u=(c=a.imageRef)==null?void 0:c.current)==null||u.setAttribute("title",o)}catch{}if(n&&((d=a.imageRef)!=null&&d.current)){const p=a.imageRef.current;if(p.getAttribute("alt")===null||p.getAttribute("alt")==="")try{p.setAttribute("alt",n)}catch{}}return l}}}}const V4="SEOPlugin",H4="SEO 增强：alt/title 回退、固定容器宽高比减少 CLS、将首屏关键图设为 LCP 优先（eager + preload），提升搜索排名与加载体验。",G4="2.0.0",q4=["a11y","可访问性","SEO"],Q4=[{name:"onMount",when:"组件挂载完成、插件注册后执行一次（返回的清理函数在 manager.clear 时逆序执行）",description:"初始化副作用：注册监听、起定时器、建观察器；必须返回清理函数或配合 onUnmount 收尾"},{name:"transformProps",when:"渲染前链式改写图片 props",description:"补 sizes / 占位色 / 解码策略等"}],K4=[],Y4="只读取 context 字段（props / state / data），不调用上下文方法",X4=[{name:"enabled",type:"boolean",default:"true",description:"是否启用"},{name:"altFallback",type:"string",default:"undefined",description:"未提供 alt 时的回退值"},{name:"title",type:"string",default:"undefined",description:"图片 title（提示与关键词）"},{name:"aspectRatio",type:"string",default:"undefined",description:'固定容器宽高比（如 "4/3"），减少 CLS'},{name:"priority",type:'"auto" | "lcp"',default:'"auto"',description:"lcp 时设为 eager 加载"},{name:"preload",type:"boolean",default:"false",description:"挂载时注入 preload 预载"}],Z4=`const SeoImage = withPlugins(LazyLoadImageCore, [
  createSEOPlugin({
    altFallback: "示例图片",
    title: "演示图像",
    aspectRatio: "4/3",
    priority: "lcp",
    preload: true,
  }),
]);

<SeoImage src="https://picsum.photos/id/1015/500/300" alt="" />;`,J4=[{name:"LCP 关键图",description:"首屏关键图：eager + preload + 固定比例，优化 LCP。",src:"https://picsum.photos/id/1015/500/300",config:{altFallback:"示例图片",title:"演示图像",aspectRatio:"4/3",priority:"lcp",preload:!0}},{name:"alt/title 回退",description:"补充 alt 与 title，利于读屏与 SEO。",src:"https://picsum.photos/id/1021/500/300",config:{altFallback:"商品图",title:"热销商品"}},{name:"仅固定比例",description:"aspectRatio 防 CLS，其余默认。",src:"https://picsum.photos/id/1026/500/300",config:{aspectRatio:"16/9"}}],e6=["alt 回退","title 设置","aspect-ratio 防 CLS","LCP 优先（eager）","preload 预载","可关闭"],t6=["首屏 LCP 优化","SEO 排名","结构化标签","CLS 治理"],n6=['priority:"lcp" 会强制 eager 加载，请勿对所有图片使用，仅用于首屏关键图。'],o6={name:V4,description:H4,since:G4,tags:q4,events:Q4,methods:K4,methodsNote:Y4,config:X4,example:Z4,examples:J4,features:e6,useCases:t6,notes:n6},r6=Object.assign(u4,{meta:S4}),s6=Object.assign(I4,{meta:U4}),i6=Object.assign(W4,{meta:o6});function a6(e={}){const{text:t="Badge",position:n="top-left",bgColor:o="rgba(0,0,0,0.6)",color:r="#fff",fontSize:s=12,padding:i="2px 6px",borderRadius:a=4,zIndex:l=3,showWhen:c="loaded",enabled:u=!0}=e;return{name:"badge",version:"1.0.0",config:e,hooks:{renderOverlay:d=>{if(!u)return null;const{imageState:p}=d;if(!(c==="always"||c==="loading"&&p.isLoading||c==="loaded"&&p.isLoaded||c==="error"&&p.isError))return null;const f=typeof t=="function"?t(d):t;return m.jsx("div",{style:{position:"absolute",pointerEvents:"none",background:o,color:r,fontSize:s,padding:i,borderRadius:a,zIndex:l,lineHeight:1.2,fontWeight:500,...{"top-left":{top:8,left:8},"top-right":{top:8,right:8},"bottom-left":{bottom:8,left:8},"bottom-right":{bottom:8,right:8},center:{top:"50%",left:"50%",transform:"translate(-50%, -50%)"}}[n]},children:f})}}}}const l6="BadgePlugin",c6="角标徽章：在图片四角或中心叠加文字徽章，可按加载状态（always/loading/loaded/error）显示，支持自定义文字、颜色、字号与形状。",u6="2.0.0",d6=["other","视觉","徽标"],p6=[{name:"renderOverlay",when:"每次渲染，覆盖在图片容器之上",description:"骨架屏、错误占位、水印、加载动画"}],m6=[],g6="只读取 context 字段（props / state / data），不调用上下文方法",f6=[{name:"text",type:"string | ((context) => string)",default:'"Badge"',description:"徽章文字（支持函数动态生成）"},{name:"position",type:'"top-left" | "top-right" | "bottom-left" | "bottom-right" | "center"',default:'"top-left"',description:"徽章位置（四角或中心）"},{name:"bgColor",type:"string",default:'"rgba(0,0,0,0.6)"',description:"背景色"},{name:"color",type:"string",default:'"#fff"',description:"文字色"},{name:"fontSize",type:"number",default:"12",description:"字号(px)"},{name:"padding",type:"string",default:'"2px 6px"',description:"内边距"},{name:"borderRadius",type:"number",default:"4",description:"圆角(px)"},{name:"zIndex",type:"number",default:"3",description:"层级"},{name:"showWhen",type:'"always" | "loading" | "loaded" | "error"',default:'"loaded"',description:"显示时机"},{name:"enabled",type:"boolean",default:"true",description:"是否启用"}],h6=`const BadgeImage = withPlugins(LazyLoadImageCore, [
  createBadgePlugin({ text: "NEW", position: "top-left", bgColor: "#c62828", showWhen: "always" }),
]);

<BadgeImage src="https://picsum.photos/id/1015/500/300" alt="角标示例" />;`,y6=[{name:"常驻徽标",description:"左上角红色 NEW 徽标，始终显示。",src:"https://picsum.photos/id/1015/500/300",config:{text:"NEW",position:"top-left",bgColor:"#c62828",showWhen:"always"}},{name:"加载时显示",description:"加载中显示 Loading 徽标，加载完成隐藏。",src:"https://picsum.photos/id/1021/500/300",config:{text:"Loading",position:"top-right",bgColor:"rgba(0,0,0,0.6)",showWhen:"loading"}},{name:"加载成功后显示",description:"加载完成后显示 Done 徽标。",src:"https://picsum.photos/id/1026/500/300",config:{text:"Done",position:"bottom-right",bgColor:"#2e7d32",showWhen:"loaded"}},{name:"自定义样式",description:"橙色大字号圆角徽标，居中。",src:"https://picsum.photos/id/1031/500/300",config:{text:"HOT",position:"center",bgColor:"#b35c00",color:"#fff",fontSize:16,borderRadius:20}}],v6=["角标 / 中心两种布局","五位置（四角 + 中心）","按加载状态显示","自定义文字/颜色/字号/圆角","支持函数文案","可关闭"],w6=["商品标签","状态提示","进度/完成标记","活动角标"],x6=["text 支持函数型（按 context 动态生成），静态预览仅支持字符串；函数用法见用法示例。"],b6={name:l6,description:c6,since:u6,tags:d6,events:p6,methods:m6,methodsNote:g6,config:f6,example:h6,examples:y6,features:v6,useCases:w6,notes:x6},P6=e=>{const t=(e==null?void 0:e.color)??"rgba(0, 153, 255, 0.6)",n=Math.max(0,(e==null?void 0:e.blurPx)??12),o=Math.max(0,(e==null?void 0:e.spreadPx)??2),r=Math.max(1,(e==null?void 0:e.hoverMultiplier)??1.4),s=`0 0 ${n}px ${o}px ${t}`,i=`0 0 ${Math.round(n*r)}px ${Math.round(o*r)}px ${t}`;return{name:"border-glow",hooks:{onLoadSuccess(a){var w,b;const l=(w=a.containerRef)==null?void 0:w.current,c=(l==null?void 0:l.parentElement)??null,u=(c==null?void 0:c.parentElement)??null,d=(b=a.imageRef)==null?void 0:b.current,p=u||c||l||d;if(!p)return;a.__lliGlowTarget=p,p.__lliPrevShadow=p.style.boxShadow||"",p.__lliPrevTransition=p.style.transition||"",p.style.boxShadow=p.__lliPrevShadow?`${p.__lliPrevShadow}, ${s}`:s,p.style.transition=p.style.transition?`${p.style.transition}, box-shadow 160ms ease`:"box-shadow 160ms ease",d&&(d.style.borderRadius=d.style.borderRadius||"6px");const f=()=>{p.style.boxShadow=p.__lliPrevShadow?`${p.__lliPrevShadow}, ${i}`:i},v=()=>{p.style.boxShadow=p.__lliPrevShadow?`${p.__lliPrevShadow}, ${s}`:s};p.__lliGlowEnter=f,p.__lliGlowLeave=v,p.addEventListener("mouseenter",f),p.addEventListener("mouseleave",v)},onUnmount(a){const l=a.__lliGlowTarget;if(!l)return;const c=l.__lliGlowEnter,u=l.__lliGlowLeave;c&&l.removeEventListener("mouseenter",c),u&&l.removeEventListener("mouseleave",u),l.style.boxShadow=l.__lliPrevShadow||"",l.style.transition=l.__lliPrevTransition||"",delete l.__lliPrevShadow,delete l.__lliPrevTransition,delete l.__lliGlowEnter,delete l.__lliGlowLeave,delete a.__lliGlowTarget}}}},$6="BorderGlowPlugin",S6="边框光晕：加载成功后为卡片应用发光阴影，悬停时增强。",C6="2.0.0",L6=["visual","视觉"],I6=[{name:"onUnmount",when:"组件卸载前执行一次",description:"释放监听、定时器与观察器；与 onMount 成对出现，避免泄漏"},{name:"onLoadSuccess",when:"图片成功解码可显示时",description:"拿到最终 displaySrc 做后续动作（上报、预取下张、淡入）"}],k6=[],_6="只读取 context 字段（props / state / data），不调用上下文方法",E6=[{name:"color",type:"string",default:"rgba(0, 153, 255, 0.6)",description:"辉光颜色"},{name:"blurPx",type:"number",default:"12",description:"辉光模糊半径 px"},{name:"spreadPx",type:"number",default:"2",description:"辉光扩散 px"},{name:"hoverMultiplier",type:"number",default:"1.4",description:"悬停时辉光强度倍数"}],R6=`// 加载成功后卡片发光，悬停增强
const GlowImage = withPlugins(LazyLoadImageCore, [
  createBorderGlowPlugin({
    color: "rgba(0, 153, 255, 0.6)",
    blurPx: 12,
    spreadPx: 2,
    hoverMultiplier: 1.4,
  }),
]);

<GlowImage src="https://picsum.photos/seed/glow/600/400" alt="边框辉光" />;`,z6=[{name:"基础辉光",description:"蓝色柔光，悬停轻微增强，突出主体卡片。",src:"https://picsum.photos/seed/glow-basic/600/400",config:{color:"rgba(0, 153, 255, 0.6)",blurPx:12,spreadPx:2,hoverMultiplier:1.4}},{name:"强霓虹辉光",description:"品红大模糊半径，悬停强度放大约 1.6 倍。",src:"https://picsum.photos/seed/glow-neon/600/400",config:{color:"rgba(255, 0, 128, 0.7)",blurPx:24,spreadPx:4,hoverMultiplier:1.6}},{name:"柔和暖光",description:"暖橙色低饱和辉光，适配温馨主题。",src:"https://picsum.photos/seed/glow-warm/600/400",config:{color:"rgba(255, 170, 0, 0.5)",blurPx:18,spreadPx:2,hoverMultiplier:1.3}}],O6=["加载成功后自动为卡片加发光阴影","悬停增强辉光强度","颜色 / 模糊 / 扩散均可调","智能定位外层卡片，避免被父容器 overflow 裁剪","卸载时自动还原原始阴影"],D6=["商品主图聚焦","精选 / 推荐位强调","卡片悬停交互反馈","暗色背景下的视觉点睛"],M6=["辉光优先作用在外层卡片（向上两层），以规避父容器 overflow:hidden 把光晕裁掉。","插件在 onUnmount 还原原始 box-shadow，不会污染其它样式。","与 CustomEffects 的 containerStyle 叠加时，两者都会合并进容器样式。"],j6={name:$6,description:S6,since:C6,tags:L6,events:I6,methods:k6,methodsNote:_6,config:E6,example:R6,examples:z6,features:O6,useCases:D6,notes:M6};function T6(e,t=4){try{const n=document.createElement("canvas"),o=Math.min(e.naturalWidth||e.width,256),r=Math.min(e.naturalHeight||e.height,256);if(!o||!r)return null;n.width=o,n.height=r;const s=n.getContext("2d");if(!s)return null;s.drawImage(e,0,0,o,r);const i=s.getImageData(0,0,o,r).data,a=Math.max(1,Math.floor(Number(t))||1);let l=0,c=0,u=0,d=0;for(let p=0;p<r;p+=a)for(let f=0;f<o;f+=a){const v=(p*o+f)*4;i[v+3]!==0&&(l+=i[v],c+=i[v+1],u+=i[v+2],d++)}return d?(l=Math.round(l/d),c=Math.round(c/d),u=Math.round(u/d),`rgb(${l}, ${c}, ${u})`):null}catch{return null}}function N6(e={}){const{setContainerBg:t=!0,sampleSize:n=4,showOverlay:o=!0}=e;return{name:"color-extraction",version:"1.0.0",config:e,hooks:{transformProps:r=>({...r,crossOrigin:"anonymous"}),onMount:r=>{var s,i;try{(i=(s=r.imageRef)==null?void 0:s.current)==null||i.setAttribute("crossOrigin","anonymous")}catch{}},onLoadSuccess:r=>{var a,l,c;const s=(a=r.imageRef)==null?void 0:a.current;if(!s)return;const i=T6(s,n);if(t&&i)try{const u=(l=r.containerRef)==null?void 0:l.current;u&&(u.style.background=`linear-gradient(90deg, ${i} 0%, rgba(0,0,0,0.06) 100%)`)}catch{}try{(c=r.sharedData)==null||c.set("dominant-color",i)}catch{}try{s.__lliDominantColor=i}catch{}},renderOverlay:r=>o?m.jsx(()=>{const[s,i]=N.useState(null);return N.useEffect(()=>{let a=!0;const l=requestAnimationFrame(()=>{var u,d,p;if(!a)return;const c=((d=(u=r.imageRef)==null?void 0:u.current)==null?void 0:d.__lliDominantColor)||((p=r.sharedData)==null?void 0:p.get("dominant-color"))||null;i(c||null)});return()=>{a=!1,cancelAnimationFrame(l)}},[r]),m.jsxs("div",{style:{position:"absolute",top:8,right:8,background:"rgba(0,0,0,0.55)",color:"#fff",fontSize:12,padding:"6px 8px",borderRadius:6,zIndex:5,display:"flex",alignItems:"center",gap:8,boxShadow:"0 2px 8px rgba(0,0,0,0.2)"},children:[m.jsx("span",{style:{width:16,height:16,borderRadius:4,background:s||"transparent",border:"1px solid rgba(255,255,255,0.35)"}}),m.jsx("span",{children:s||"未提取"})]})},{}):null}}}const A6="ColorExtractionPlugin",B6="主色提取：canvas 采样图片主色，可设置容器背景或显示色卡。",U6="2.0.0",F6=["visual","视觉"],W6=[{name:"onMount",when:"组件挂载完成、插件注册后执行一次（返回的清理函数在 manager.clear 时逆序执行）",description:"初始化副作用：注册监听、起定时器、建观察器；必须返回清理函数或配合 onUnmount 收尾"},{name:"onLoadSuccess",when:"图片成功解码可显示时",description:"拿到最终 displaySrc 做后续动作（上报、预取下张、淡入）"},{name:"transformProps",when:"渲染前链式改写图片 props",description:"补 sizes / 占位色 / 解码策略等"},{name:"renderOverlay",when:"每次渲染，覆盖在图片容器之上",description:"骨架屏、错误占位、水印、加载动画"}],V6=[],H6="只读取 context 字段（props / state / data），不调用上下文方法",G6=[{name:"setContainerBg",type:"boolean",default:"true",description:"是否把容器背景设为主色"},{name:"sampleSize",type:"number",default:"4",description:"采样步长 px，越大越快越不精确"},{name:"showOverlay",type:"boolean",default:"true",description:"是否在右上角显示主色卡"}],q6=`// 提取主色填充容器 + 显示色卡
const TintImage = withPlugins(LazyLoadImageCore, [
  createColorExtractionPlugin({
    setContainerBg: true,
    sampleSize: 4,
    showOverlay: true,
  }),
]);

<TintImage src="https://picsum.photos/seed/color/600/400" alt="主色提取" crossOrigin="anonymous" />;`,Q6=[{name:"主色填充容器 + 色卡",description:"提取主色作为卡片背景，并在右上角显示色卡。",src:"https://picsum.photos/seed/color-full/600/400",config:{setContainerBg:!0,sampleSize:4,showOverlay:!0}},{name:"仅色卡",description:"不改动容器背景，只在角上显示提取到的主色卡。",src:"https://picsum.photos/seed/color-chip/600/400",config:{setContainerBg:!1,showOverlay:!0}}],K6=["canvas 采样主色","可选填充容器背景","可选角标色卡展示","采样精度 / 速度可调"],Y6=["按图自动配色（背景 / 阴影）","色彩主题联动","色卡 / 调色板展示","设计工具取色"],X6=['读取像素需在 <img> 上设置 crossOrigin="anonymous"，且图片服务器需允许跨域，否则 canvas 被污染无法取色（会静默失败）。',"sampleSize 越大采样越稀疏、越快但越不精确。"],Z6={name:A6,description:B6,since:U6,tags:F6,events:W6,methods:V6,methodsNote:H6,config:G6,example:q6,examples:Q6,features:K6,useCases:Y6,notes:X6};function J6(e={}){const{beforeSrc:t,afterSrc:n,labelBefore:o="前",labelAfter:r="后",start:s=.5}=e,i=({context:a})=>{const[l,c]=N.useState(Math.min(1,Math.max(0,s))),u=N.useRef(null),d=N.useRef(!1),p=N.useCallback(P=>{const $=u.current;if(!$)return;const I=$.getBoundingClientRect();if(I.width===0)return;const k=(P-I.left)/I.width;c(Math.min(1,Math.max(0,k)))},[]),f=P=>{var $,I;d.current=!0;try{(I=($=P.target).setPointerCapture)==null||I.call($,P.pointerId)}catch{}p(P.clientX)},v=P=>{d.current&&p(P.clientX)},w=P=>{var $,I;d.current=!1;try{(I=($=P.target).releasePointerCapture)==null||I.call($,P.pointerId)}catch{}},b=t??a.src,h=n??a.src,g=Math.max(1e-4,l),y={position:"absolute",top:8,padding:"2px 8px",background:"rgba(0,0,0,0.55)",color:"#fff",fontSize:12,borderRadius:4,pointerEvents:"none",zIndex:3};return m.jsxs("div",{ref:u,onPointerDown:f,onPointerMove:v,onPointerUp:w,onPointerLeave:w,style:{position:"absolute",inset:0,overflow:"hidden",cursor:"ew-resize",touchAction:"none",userSelect:"none",zIndex:4},title:"拖动对比",children:[m.jsx("img",{src:h,alt:r,draggable:!1,style:{position:"absolute",inset:0,width:"100%",height:"100%",objectFit:"cover"}}),m.jsx("div",{style:{position:"absolute",inset:0,width:`${l*100}%`,overflow:"hidden"},children:m.jsx("img",{src:b,alt:o,draggable:!1,style:{position:"absolute",inset:0,width:`${100/g}%`,height:"100%",objectFit:"cover"}})}),m.jsx("div",{style:{position:"absolute",top:0,bottom:0,left:`${l*100}%`,width:2,background:"#fff",transform:"translateX(-1px)",zIndex:2,pointerEvents:"none"},children:m.jsx("div",{style:{position:"absolute",top:"50%",left:"50%",transform:"translate(-50%, -50%)",width:28,height:28,borderRadius:999,background:"#fff",color:"#333",display:"flex",alignItems:"center",justifyContent:"center",fontSize:14,boxShadow:"0 1px 4px rgba(0,0,0,0.4)"},children:"⇆"})}),m.jsx("div",{style:{...y,left:8},children:o}),m.jsx("div",{style:{...y,right:8},children:r})]})};return{name:"comparison",version:"2.0.0",config:e,hooks:{renderOverlay:a=>m.jsx(i,{context:a})}}}const eM="ComparisonPlugin",tM="前后对比（v2 真实实现）：用可拖拽分隔条对比 beforeSrc / afterSrc 两张图，拖动实时比较差异（如调色前后、装修前后、A/B 图）。不再是写死文字角标。",nM="2.0.0",oM=["other","视觉","对比","交互"],rM=[{name:"renderOverlay",when:"每次渲染，覆盖在图片容器之上",description:"骨架屏、错误占位、水印、加载动画"}],sM=[],iM="只读取 context 字段（props / state / data），不调用上下文方法",aM=[{name:"beforeSrc",type:"string",default:"主图 src",description:"左侧（拖动前）对比图；默认用主图"},{name:"afterSrc",type:"string",default:"主图 src",description:"右侧（拖动后）对比图；默认用主图"},{name:"labelBefore",type:"string",default:"前",description:"左图标签文字"},{name:"labelAfter",type:"string",default:"后",description:"右图标签文字"},{name:"start",type:"number",default:"0.5",description:"初始分割位置（0~1）"}],lM=`const CompareImage = withPlugins(LazyLoadImageCore, [
  createComparisonPlugin({
    beforeSrc: "https://picsum.photos/id/1015/800/600",
    afterSrc: "https://picsum.photos/id/1016/800/600",
    labelBefore: "原图", labelAfter: "处理后",
  }),
]);

<CompareImage src="https://picsum.photos/id/1016/800/600" alt="前后对比示例" />;`,cM=[{name:"基础对比",description:"提供 beforeSrc / afterSrc 两张图，拖动中间把手即可对比。",src:"https://picsum.photos/id/1016/800/600",config:{beforeSrc:"https://picsum.photos/id/1015/800/600",afterSrc:"https://picsum.photos/id/1016/800/600",labelBefore:"原图",labelAfter:"处理后"}},{name:"自定义起始位置",description:"start=0.3 让初始分割更偏左。",src:"https://picsum.photos/id/1021/800/600",config:{beforeSrc:"https://picsum.photos/id/1020/800/600",afterSrc:"https://picsum.photos/id/1021/800/600",start:.3}},{name:"单图自对比（调色）",description:"只传 afterSrc，before 用主图，演示同一张图的两种状态。",src:"https://picsum.photos/id/1025/800/600",config:{afterSrc:"https://picsum.photos/id/1025/800/600",labelBefore:"原图",labelAfter:"滤镜"}}],uM=["可拖拽分隔条对比两图（指针/触摸）","左右标签可自定义","初始分割位置可调","左图按分割宽度自适应裁剪，始终铺满容器"],dM=["装修前后 / 调色前后对比","A/B 图组对比","图像增强效果演示","教学 / 设计稿对照"],pM=["v2 起为真实拖拽交互，旧版仅渲染写死文字角标。对比层覆盖在 Core 主图之上，拖动区域占满容器。"],mM={name:eM,description:tM,since:nM,tags:oM,events:rM,methods:sM,methodsNote:iM,config:aM,example:lM,examples:cM,features:uM,useCases:dM,notes:pM};function gM(e={}){const{enabled:t=!0,focusPoint:n={x:.5,y:.5},showLabel:o=!0}=e;return{name:"crop",version:"0.1.0",config:e,hooks:{transformProps:r=>{if(!t)return r;const s={...r.imageStyle||{},objectFit:"cover",objectPosition:`${Math.round(n.x*100)}% ${Math.round(n.y*100)}%`};return{...r,imageStyle:s}},renderOverlay:r=>!t||!o?null:m.jsxs("div",{style:{position:"absolute",top:8,left:8,background:"rgba(255,165,0,0.8)",color:"#000",padding:"4px 6px",borderRadius:4,fontSize:12},children:["CropPlugin · focus ",n.x.toFixed(2),",",n.y.toFixed(2)]})}}}const fM="CropPlugin",hM="焦点裁剪：通过 object-fit: cover 与 object-position 将裁剪焦点设在指定相对坐标，统一多图主体构图。",yM="2.0.0",vM=["other","视觉","裁剪"],wM=[{name:"transformProps",when:"渲染前链式改写图片 props",description:"补 sizes / 占位色 / 解码策略等"},{name:"renderOverlay",when:"每次渲染，覆盖在图片容器之上",description:"骨架屏、错误占位、水印、加载动画"}],xM=[],bM="只读取 context 字段（props / state / data），不调用上下文方法",PM=[{name:"enabled",type:"boolean",default:"true",description:"是否启用裁剪"},{name:"focusPoint",type:"{ x: number; y: number }",default:"{ x: 0.5, y: 0.5 }",description:"裁剪焦点(0~1 相对坐标)"},{name:"showLabel",type:"boolean",default:"true",description:"是否在图片左上角显示焦点标识（生产版式建议关闭）"}],$M=`const CropImage = withPlugins(LazyLoadImageCore, [
  createCropPlugin({ focusPoint: { x: 0.3, y: 0.4 } }),
]);

<CropImage src="https://picsum.photos/id/1015/500/300" alt="焦点裁剪示例" />;`,SM=[{name:"居中焦点（默认）",description:"x=0.5,y=0.5，主体居中裁切。",src:"https://picsum.photos/id/1015/500/300",config:{focusPoint:{x:.5,y:.5}}},{name:"左上方焦点",description:"x=0.3,y=0.3，主体偏左上裁切。",src:"https://picsum.photos/id/1021/500/300",config:{focusPoint:{x:.3,y:.3}}},{name:"右下焦点",description:"x=0.7,y=0.7，突出右下主体。",src:"https://picsum.photos/id/1026/500/300",config:{focusPoint:{x:.7,y:.7}}}],CM=["object-position 焦点裁剪","cover 填充","任意焦点坐标","可关闭","overlay 标识焦点（showLabel 可关）"],LM=["头像/封面统一构图","商品主图裁剪","列表缩略图","跨尺寸适配"],IM=["当前为最小实现：通过 CSS object-position 模拟裁剪焦点；加载容器需固定宽高以体现裁切效果。","showLabel: false 可隐藏左上角焦点标识，适合直接接入真实版式。"],kM={name:fM,description:hM,since:yM,tags:vM,events:wM,methods:xM,methodsNote:bM,config:PM,example:$M,examples:SM,features:CM,useCases:LM,notes:IM};function _M(e,t){const{lqipSrc:n}=t;if(n)return typeof n=="function"?n(e):n}async function EM(e){try{const t=new Image;t.crossOrigin="anonymous";const n=new Promise((d,p)=>{t.onload=()=>d(t),t.onerror=p});t.src=e;const o=await n,r=document.createElement("canvas");r.width=Math.max(1,Math.min(16,o.naturalWidth)),r.height=Math.max(1,Math.min(16,o.naturalHeight));const s=r.getContext("2d");if(!s)return;s.drawImage(o,0,0,r.width,r.height);const i=s.getImageData(0,0,r.width,r.height).data;let a=0,l=0,c=0,u=0;for(let d=0;d<i.length;d+=4)a+=i[d],l+=i[d+1],c+=i[d+2],u++;return a=Math.round(a/u),l=Math.round(l/u),c=Math.round(c/u),`rgb(${a}, ${l}, ${c})`}catch{return}}function RM(e={}){const t=e.color??"rgba(0,0,0,0.06)";return{name:"dominant-color",version:"1.0.0",config:e,hooks:{onMount:n=>{var r;const o=(r=n.containerRef)==null?void 0:r.current;if(o)try{const s=_M(n.src,e);if(s)EM(s).then(i=>{try{o.style.background=i||t}catch{}}).catch(()=>{try{o.style.background=t}catch{}});else try{o.style.background=t}catch{}}catch{try{o.style.background=t}catch{}}}}}}const zM="DominantColorPlugin",OM="主色占位：在加载完成前用指定颜色或 LQIP 采样平均色填充容器背景，减少白屏、提升视觉连贯性。",DM="2.0.0",MM=["other","视觉","占位"],jM=[{name:"onMount",when:"组件挂载完成、插件注册后执行一次（返回的清理函数在 manager.clear 时逆序执行）",description:"初始化副作用：注册监听、起定时器、建观察器；必须返回清理函数或配合 onUnmount 收尾"}],TM=[],NM="只读取 context 字段（props / state / data），不调用上下文方法",AM=[{name:"color",type:"string",default:"rgba(0,0,0,0.06)",description:"指定背景色（未提供时尝试从 lqip 采样）"},{name:"lqipSrc",type:"string | ((src) => string)",default:"undefined",description:"低清预览图地址或生成函数（用于采样平均色）"}],BM=`const ColorImage = withPlugins(LazyLoadImageCore, [
  createDominantColorPlugin({
    lqipSrc: (src) => src + "?w=20", // 用小图采样主色
  }),
]);

<ColorImage src="https://picsum.photos/id/1015/500/300" alt="主色占位示例" />;`,UM=[{name:"指定背景色",description:"直接指定浅灰背景，加载前不白屏。",src:"https://picsum.photos/id/1015/500/300",config:{color:"#e9ecef"}},{name:"LQIP 采样主色",description:"用小图采样平均色填充（跨域图需 CORS，失败则回退默认色）。",src:"https://picsum.photos/id/1021/500/300",config:{lqipSrc:"https://picsum.photos/id/1021/20/20"}},{name:"暖色背景",description:"指定暖色背景，营造色调一致感。",src:"https://picsum.photos/id/1026/500/300",config:{color:"#f8d7da"}}],FM=["指定颜色占位","LQIP 采样平均色","加载前不白屏","采样失败安全回退","可关闭"],WM=["相册/画廊占位","Pinterest 风布局","慢网白屏治理","品牌色调统一"],VM=["lqipSrc 采样需要图片服务器配置 CORS 头；跨域失败会自动回退到 color（默认浅灰），不影响加载。"],HM={name:zM,description:OM,since:DM,tags:MM,events:jM,methods:TM,methodsNote:NM,config:AM,example:BM,examples:UM,features:FM,useCases:WM,notes:VM};function GM(e,t){const{lqipSrc:n}=t;if(n)return typeof n=="function"?n(e):n}function qM(e={}){const{blur:t=12,opacity:n=1,zIndex:o=2}=e;return{name:"lqip",version:"1.0.0",config:e,hooks:{renderOverlay:r=>{const{imageState:s,src:i}=r,a=GM(i,e);if(!a||s.isLoaded)return null;const l={position:"absolute",inset:0,backgroundImage:`url(${a})`,backgroundSize:"cover",backgroundPosition:"center",filter:`blur(${t}px)`,opacity:n,zIndex:o,pointerEvents:"none",transition:"opacity 300ms ease"};return m.jsx("div",{style:l})}}}}const QM="LQIPPlugin",KM="低清预览（LQIP）：在清晰图加载期间叠加模糊的小图作为占位，加载完成后自动隐藏，实现渐进式加载体验。",YM="2.0.0",XM=["other","视觉","占位","渐进加载"],ZM=[{name:"renderOverlay",when:"每次渲染，覆盖在图片容器之上",description:"骨架屏、错误占位、水印、加载动画"}],JM=[],ej="只读取 context 字段（props / state / data），不调用上下文方法",tj=[{name:"lqipSrc",type:"string | ((src) => string)",default:"undefined",description:"低清预览图地址或生成函数"},{name:"blur",type:"number",default:"12",description:"模糊半径(px)"},{name:"opacity",type:"number",default:"1",description:"不透明度(0~1)"},{name:"zIndex",type:"number",default:"2",description:"叠加层级"}],nj=`const LqipImage = withPlugins(LazyLoadImageCore, [
  createLqipPlugin({ lqipSrc: (src) => src + "?w=20", blur: 14 }),
]);

<LqipImage src="https://picsum.photos/id/1015/500/300" alt="LQIP 示例" />;`,oj=[{name:"模糊小图占位",description:"14px 模糊小图作为加载期占位。",src:"https://picsum.photos/id/1015/500/300",config:{lqipSrc:"https://picsum.photos/id/1015/20/20",blur:14}},{name:"低不透明度",description:"降低占位图不透明度，弱化视觉存在。",src:"https://picsum.photos/id/1021/500/300",config:{lqipSrc:"https://picsum.photos/id/1021/20/20",blur:12,opacity:.6}},{name:"清晰后淡出",description:"加载完成自动隐藏模糊层，过渡到清晰图。",src:"https://picsum.photos/id/1026/500/300",config:{lqipSrc:"https://picsum.photos/id/1026/20/20",blur:16}}],rj=["模糊低清占位","可调模糊/透明度/层级","加载完成自动隐藏","支持函数/字符串来源","渐进式加载"],sj=["渐进式图片加载","慢网占位","画廊/相册","提升感知性能"],ij=["lqipSrc 为函数型配置，静态预览使用字符串小图；函数用法见用法示例。"],aj={name:QM,description:KM,since:YM,tags:XM,events:ZM,methods:JM,methodsNote:ej,config:tj,example:nj,examples:oj,features:rj,useCases:sj,notes:ij};function lj({context:e,cfg:t}){const{position:n="bottom",background:o="rgba(0,0,0,0.62)",color:r="#fff",fontSize:s=12,padding:i="6px 8px",borderRadius:a=4,zIndex:l=4,showWhen:c="loading",trigger:u="always"}=t,{imageState:d}=e,p=c==="always"||c==="loading"&&d.isLoading||c==="loaded"&&d.isLoaded||c==="error"&&d.isError,[f,v]=N.useState(!1);if(!(u==="always"?p:p&&f))return m.jsx("div",{style:{position:"absolute",inset:0,zIndex:l,pointerEvents:u==="hover"?"auto":"none"},onMouseEnter:()=>v(!0),onMouseLeave:()=>v(!1)});const w=typeof t.content=="function"?t.content(e):t.content||"Loading...";return m.jsx("div",{style:{position:"absolute",inset:0,zIndex:l,pointerEvents:u==="hover"?"auto":"none"},onMouseEnter:()=>v(!0),onMouseLeave:()=>v(!1),children:m.jsx("div",{style:{position:"absolute",left:8,right:8,background:o,color:r,fontSize:s,padding:i,borderRadius:a,zIndex:l,pointerEvents:u==="hover"?"auto":"none",textAlign:"center",...{top:{top:8},bottom:{bottom:8},center:{top:"50%",transform:"translateY(-50%)"}}[n]},children:w})})}function cj(e={}){return{name:"overlay-info",version:"1.0.0",config:e,hooks:{renderOverlay:t=>m.jsx(lj,{context:t,cfg:e})}}}const uj="OverlayInfoPlugin",dj="信息覆盖层：显示自定义文本，支持常显或悬停触发。",pj="2.0.0",mj=["visual","视觉"],gj=[{name:"renderOverlay",when:"每次渲染，覆盖在图片容器之上",description:"骨架屏、错误占位、水印、加载动画"}],fj=[],hj="只读取 context 字段（props / state / data），不调用上下文方法",yj=[{name:"content",type:"string | ((context: LazyImageContext) => string)",default:'""',description:"覆盖层文本；可传函数按 context 派生"},{name:"position",type:'"top" | "bottom" | "center"',default:'"bottom"',description:"文本位置"},{name:"background",type:"string",default:"rgba(0,0,0,0.62)",description:"背景色"},{name:"color",type:"string",default:"#fff",description:"文字颜色"},{name:"fontSize",type:"number",default:"12",description:"字号 px"},{name:"padding",type:"string",default:"6px 10px",description:"内边距"},{name:"borderRadius",type:"number",default:"0",description:"圆角 px"},{name:"zIndex",type:"number",default:"2",description:"层叠顺序"},{name:"showWhen",type:'"always" | "loading" | "loaded" | "error"',default:'"always"',description:"何时显示"},{name:"trigger",type:'"always" | "hover"',default:'"always"',description:"触发方式"}],vj=`// 底部信息条（常显）
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
});`,wj=[{name:"底部信息条（常显）",description:"半透明黑底白字信息条，常显于底部。",src:"https://picsum.photos/seed/overlay-bottom/600/400",config:{content:"来源：picsum.photos",position:"bottom",background:"rgba(0,0,0,0.62)",color:"#fff",showWhen:"always",trigger:"always"}},{name:"悬停显示信息",description:"平时干净，鼠标悬停时居中浮出提示文字。",src:"https://picsum.photos/seed/overlay-hover/600/400",config:{content:"悬停查看详情",position:"center",background:"rgba(0,0,0,0.62)",color:"#fff",showWhen:"always",trigger:"hover"}}],xj=["顶部 / 底部 / 居中三位置","文本支持静态或函数动态派生","背景 / 颜色 / 字号 / 圆角可调","可常显或悬停触发","可按加载状态（loading/loaded/error）显示"],bj=["图片来源 / 版权信息","悬停浮出操作提示","加载 / 错误态文案","图库元信息展示"],Pj=["content 传函数时可按 context（含 imageState / src）派生，但场景示例画廊用静态文本以保证实时预览。","与 Caption 的区别：OverlayInfo 更通用（任意文本 + 触发时机 + 加载态），Caption 专注单一图注。"],$j={name:uj,description:dj,since:pj,tags:mj,events:gj,methods:fj,methodsNote:hj,config:yj,example:vj,examples:wj,features:xj,useCases:bj,notes:Pj};function Sj(e={}){const t=Math.max(0,Math.min(1,e.strength??.2)),n=e.axis??"y";function o(r){const s=r.getBoundingClientRect(),i=typeof window<"u"?window.innerHeight:800,a=(s.top+s.height/2-i/2)/i*(t*100),l=n==="x"?a:0,c=n==="y"?a:0;r.style.transform=`translate(${l}px, ${c}px)`}return{name:"parallax",version:"1.0.0",config:e,hooks:{onMount:r=>{let s=0;const i=()=>{var c;const l=(c=r.imageRef)==null?void 0:c.current;if(!l){s++<60&&requestAnimationFrame(i);return}a(l)},a=l=>{r.__lliParallaxImg=l,l.style.willChange="transform";let c=!1,u=null;const d=()=>{c||(u=requestAnimationFrame(()=>{o(l),c=!1}),c=!0)},p=()=>{c||(u=requestAnimationFrame(()=>{o(l),c=!1}),c=!0)};return l.__lliParallaxScroll=d,l.__lliParallaxResize=p,l.__lliParallaxRafId=u,window.addEventListener("scroll",d,{passive:!0}),window.addEventListener("resize",p,{passive:!0}),o(l),()=>{l.__lliParallaxRafId!==null&&cancelAnimationFrame(l.__lliParallaxRafId)}};i()},onUnmount:r=>{var l;const s=r.__lliParallaxImg||((l=r.imageRef)==null?void 0:l.current);if(!s)return;if(s.__lliParallaxRafId!==null)try{cancelAnimationFrame(s.__lliParallaxRafId)}catch{}const i=s.__lliParallaxScroll,a=s.__lliParallaxResize;i&&window.removeEventListener("scroll",i),a&&window.removeEventListener("resize",a),s.style.transform="",s.style.willChange="",delete s.__lliParallaxScroll,delete s.__lliParallaxResize,delete s.__lliParallaxRafId}}}}const Cj="ParallaxPlugin",Lj="视差滚动：随页面滚动按强度偏移图片位置。",Ij="2.0.0",kj=["visual","视觉"],_j=[{name:"onMount",when:"组件挂载完成、插件注册后执行一次（返回的清理函数在 manager.clear 时逆序执行）",description:"初始化副作用：注册监听、起定时器、建观察器；必须返回清理函数或配合 onUnmount 收尾"},{name:"onUnmount",when:"组件卸载前执行一次",description:"释放监听、定时器与观察器；与 onMount 成对出现，避免泄漏"}],Ej=[],Rj="只读取 context 字段（props / state / data），不调用上下文方法",zj=[{name:"strength",type:"number",default:"0.2",description:"偏移强度 0..1"},{name:"axis",type:'"y" | "x"',default:'"y"',description:"偏移轴向"}],Oj=`// 垂直视差：滚动时图片缓慢位移
const ParallaxImage = withPlugins(LazyLoadImageCore, [
  createParallaxPlugin({ strength: 0.2, axis: "y" }),
]);

<ParallaxImage src="https://picsum.photos/seed/parallax/600/400" alt="视差" />;`,Dj=[{name:"垂直视差",description:"中等强度 y 轴视差，滚动时图片缓移，营造纵深。",src:"https://picsum.photos/seed/parallax-y/600/400",config:{strength:.2,axis:"y"}},{name:"轻微视差",description:"低强度视差，含蓄的层次感，不喧宾夺主。",src:"https://picsum.photos/seed/parallax-light/600/400",config:{strength:.1,axis:"y"}}],Mj=["随滚动偏移图片（y / x 轴）","强度可调（0~1）","纯 transform 实现，性能友好","增强页面纵深与动感"],jj=["落地页 / Hero 区背景","长图文滚动叙事","作品集视差画廊","需要纵深氛围的视觉场景"],Tj=["视差依赖页面滚动，demo 小卡片内滚动幅度有限，效果在长页面更明显。","strength 过大可能导致图片露出边缘，建议配合 overflow:hidden 容器。"],Nj={name:Cj,description:Lj,since:Ij,tags:kj,events:_j,methods:Ej,methodsNote:Rj,config:zj,example:Oj,examples:Dj,features:Mj,useCases:jj,notes:Tj};function Aj({bus:e,loading:t,showWhen:n="loading",height:o=3,color:r="#3b82f6",background:s="rgba(0,0,0,0.15)",showPercentText:i=!0}){const[a,l]=x.useState(null),[c,u]=x.useState(0),d=N.useRef(null);x.useEffect(()=>{const v=e==null?void 0:e.on("progress",w=>{l(w),w.indeterminate?d.current||(d.current=window.setInterval(()=>{u(b=>b<90?b+3:b)},160)):(u(w.percent??0),d.current&&(clearInterval(d.current),d.current=null))});return()=>{v==null||v(),d.current&&(clearInterval(d.current),d.current=null)}},[e]);const p=n==="always"?!0:t,f=a!=null&&a.indeterminate?c:(a==null?void 0:a.percent)??0;return p?m.jsxs("div",{style:{position:"absolute",inset:0,pointerEvents:"none",background:s,display:"flex",alignItems:"flex-end",zIndex:10},children:[m.jsx("div",{style:{width:`${f}%`,height:o,background:r,transition:"width 200ms ease"}}),i&&m.jsx("div",{style:{position:"absolute",left:"50%",top:"50%",transform:"translate(-50%, -50%)",fontSize:12,color:"#fff",textShadow:"0 1px 2px rgba(0,0,0,0.5)",textAlign:"center",pointerEvents:"none"},children:a!=null&&a.indeterminate?`加载中… ${f}%`:`${f}%`})]}):null}function Bj(e={}){return{name:"progress-overlay",version:"1.0.0",config:e,hooks:{renderOverlay:({bus:t,imageState:n})=>m.jsx(Aj,{bus:t,loading:n.isLoading,showWhen:e.showWhen,height:e.height,color:e.color,background:e.background,showPercentText:e.showPercentText??!0}),onProgress:()=>{}}}}const Uj="ProgressOverlayPlugin",Fj="加载进度条覆盖层：百分比文本与 indeterminate 模式。",Wj="2.0.0",Vj=["visual","视觉"],Hj=[{name:"onProgress",when:'加载进度更新（由 withPlugins 订阅 bus 的 "progress" 桥接）',description:"展示进度条 / 百分比；仅对支持进度上报的 loader 生效"},{name:"renderOverlay",when:"每次渲染，覆盖在图片容器之上",description:"骨架屏、错误占位、水印、加载动画"}],Gj=[],qj="只读取 context 字段（props / state / data），不调用上下文方法",Qj=[{name:"showWhen",type:'"always" | "loading"',default:'"loading"',description:"何时显示"},{name:"height",type:"number",default:"3",description:"进度条高度 px"},{name:"color",type:"string",default:"#4a90e2",description:"进度条颜色"},{name:"background",type:"string",default:"transparent",description:"背景遮罩色"},{name:"showPercentText",type:"boolean",default:"false",description:"是否显示百分比文本"}],Kj=`// 顶部进度条 + 百分比文本
const ProgressImage = withPlugins(LazyLoadImageCore, [
  createProgressOverlayPlugin({
    showWhen: "loading",
    height: 3,
    color: "#4a90e2",n    showPercentText: true,
  }),
]);

<ProgressImage src="https://picsum.photos/seed/progress/600/400" alt="进度蒙层" />;`,Yj=[{name:"顶部进度条 + 百分比",description:"细进度条置于顶部，并显示实时百分比。",src:"https://picsum.photos/seed/progress-top/600/400",config:{showWhen:"loading",height:3,color:"#4a90e2",showPercentText:!0}},{name:"半透明遮罩 + 百分比",description:"加载期覆盖半透明遮罩，中心显示百分比，适合大图。",src:"https://picsum.photos/seed/progress-mask/600/400",config:{showWhen:"loading",height:4,color:"#22c55e",background:"rgba(0,0,0,0.12)",showPercentText:!0}}],Xj=["顶部 / 覆盖式进度条","实时百分比文本","颜色 / 高度 / 背景可调","加载完成后自动消失"],Zj=["大图 / 慢网络加载反馈","视频封面缓冲提示","需要明确进度感知的场景","与 Skeleton 配合提升占位体验"],Jj=["进度数据来自内核 progress 事件，跨域或缓存命中时可能很快跳到 100%。","与 Skeleton 同时使用时，进度条层级通常高于骨架。"],eT={name:Uj,description:Fj,since:Wj,tags:Vj,events:Hj,methods:Gj,methodsNote:qj,config:Qj,example:Kj,examples:Yj,features:Xj,useCases:Zj,notes:Jj};function tT(e={}){const{enabled:t=!0,boxes:n=[],zIndex:o=3}=e;return{name:"redaction",version:"1.0.0",config:e,hooks:{renderOverlay:r=>!t||!n.length?null:m.jsx("div",{style:{position:"absolute",inset:0,pointerEvents:"none",zIndex:o},children:n.map((s,i)=>m.jsx("div",{style:{position:"absolute",left:`${s.x*100}%`,top:`${s.y*100}%`,width:`${s.w*100}%`,height:`${s.h*100}%`,background:s.color??"rgba(0,0,0,0.55)",backdropFilter:s.blur?`blur(${s.blur}px)`:void 0,borderRadius:6}},i))})}}}const nT="RedactionPlugin",oT="隐私打码：在指定百分比区域叠加模糊或色块遮挡。",rT="2.0.0",sT=["visual","视觉"],iT=[{name:"renderOverlay",when:"每次渲染，覆盖在图片容器之上",description:"骨架屏、错误占位、水印、加载动画"}],aT=[],lT="只读取 context 字段（props / state / data），不调用上下文方法",cT=[{name:"enabled",type:"boolean",default:"true",description:"是否启用"},{name:"boxes",type:"RedactionBox[]",default:"[]",description:"遮挡区域：{ x, y, w, h (0~1), blur?, color? }"},{name:"zIndex",type:"number",default:"3",description:"层叠顺序"}],uT=`// 局部打码（如人脸 / 车牌）
const RedactedImage = withPlugins(LazyLoadImageCore, [
  createRedactionPlugin({
    boxes: [
      { x: 0.40, y: 0.30, w: 0.20, h: 0.15, blur: 8 },
    ],
  }),
]);

<RedactedImage src="https://picsum.photos/seed/redaction/600/400" alt="打码" />;`,dT=[{name:"局部模糊打码",description:"在图片 40%/30% 处覆盖一块 20%×15% 的模糊区域（如人脸）。",src:"https://picsum.photos/seed/redaction-blur/600/400",config:{enabled:!0,boxes:[{x:.4,y:.3,w:.2,h:.15,blur:8}]}},{name:"色块遮挡",description:"用半透明色块遮挡敏感区域，不依赖模糊。",src:"https://picsum.photos/seed/redaction-block/600/400",config:{enabled:!0,boxes:[{x:.1,y:.7,w:.35,h:.12,color:"rgba(0,0,0,0.85)"}]}}],pT=["按百分比坐标划定遮挡区（自适应尺寸）","支持模糊（blur）或纯色块两种遮挡","可同时覆盖多个区域","整体启停"],mT=["人脸 / 车牌隐私打码","敏感信息遮挡","截图脱敏","合规图片发布"],gT=["坐标使用 0~1 的相对比例，图片缩放时遮挡区自动跟随。","blur 通过 backdrop-filter 实现；若浏览器不支持会以纯色块兜底。","打码是覆盖层，不改变原图像素，导出原图不会被脱敏。"],fT={name:nT,description:oT,since:rT,tags:sT,events:iT,methods:aT,methodsNote:lT,config:cT,example:uT,examples:dT,features:pT,useCases:mT,notes:gT},hT=new Set(["script","iframe","object","embed","foreignobject","base","meta","link","style"]),yT=new Set(["href","xlink:href","src","action","formaction","poster","background","cite","data","codebase","longdesc","usemap"]),vT=["http:","https:","blob:","mailto:","tel:","data:image/"];function wT(e){const t=Array.from(e.trim().toLowerCase()).filter(n=>n.charCodeAt(0)>32).join("");return!t||t.startsWith("#")||t.startsWith("./")||t.startsWith("../")||t.startsWith("/")?!0:t.startsWith("data:")?t.startsWith("data:image/"):/^(javascript|vbscript|file):/.test(t)?!1:vT.some(n=>t.startsWith(n))||!t.includes(":")}function xT(e){var t,n;if(!e||typeof DOMParser>"u")return"";try{const o=new DOMParser;let r=o.parseFromString(e,"image/svg+xml").documentElement;if((!r||r.nodeName.toLowerCase()==="parsererror")&&(r=((n=(t=o.parseFromString(e,"text/html"))==null?void 0:t.body)==null?void 0:n.querySelector("svg"))??null),!r)return"";const s=a=>{if(hT.has(a.tagName.toLowerCase())){a.remove();return}Array.from(a.attributes).forEach(l=>{const c=l.name.toLowerCase();if(c.startsWith("on")){a.removeAttribute(l.name);return}if(c==="style"){/expression|javascript:|vbscript:|url\s*\(\s*['"]?(javascript|vbscript)/i.test(l.value)&&a.removeAttribute(l.name);return}yT.has(c)&&!wT(l.value)&&a.removeAttribute(l.name)}),Array.from(a.children).forEach(s)};s(r);const i=typeof XMLSerializer<"u"?new XMLSerializer:null;return i?i.serializeToString(r):r.outerHTML||""}catch{return""}}function bT({context:e,config:t}){const{imageState:n}=e,{background:o="transparent",opacity:r=1,zIndex:s=3,showWhen:i="loading",fadeOutOnLoaded:a=!0}=t;if(!(()=>{switch(i){case"always":return!0;case"idle":return n.isIdle;case"loading":return n.isLoading;case"loaded":return n.isLoaded;case"error":return n.isError;default:return n.isLoading}})())return null;const l=typeof t.svgContent=="function"?t.svgContent(e):t.svgContent;let c=null;if(typeof l=="string"){const d=xT(l);d&&(c=m.jsx("img",{src:`data:image/svg+xml;charset=utf-8,${encodeURIComponent(d)}`,alt:"",style:{width:"60%",height:"60%",objectFit:"contain"}}))}else l!=null&&(c=l);const u={position:"absolute",inset:0,display:"flex",alignItems:"center",justifyContent:"center",background:o,zIndex:s,pointerEvents:"none",opacity:a&&n.isLoaded?0:r,transition:a?"opacity 240ms ease":void 0,padding:"min(40px, 10%)"};return m.jsx("div",{style:u,"aria-hidden":!0,children:c})}function PT(e={}){return{name:"svg-placeholder",version:"1.1.0",description:"SVG 占位覆盖层（字符串经白名单清洗后以 data URL 渲染，移除 HTML 注入点）",config:e,hooks:{renderOverlay:t=>m.jsx(bT,{context:t,config:e})}}}const $T="SvgPlaceholderPlugin",ST="SVG 占位：在加载期间注入自定义 SVG 占位内容（如骨架、品牌图形），加载成功后淡出，增强加载反馈与品牌感。",CT="2.0.0",LT=["other","视觉","占位"],IT=[{name:"renderOverlay",when:"每次渲染，覆盖在图片容器之上",description:"骨架屏、错误占位、水印、加载动画"}],kT=[],_T="只读取 context 字段（props / state / data），不调用上下文方法",ET=[{name:"svgContent",type:"string | ((context) => string)",default:"undefined",description:"SVG 字符串或动态生成函数"},{name:"background",type:"string",default:'"transparent"',description:"叠加层背景"},{name:"opacity",type:"number",default:"1",description:"不透明度(0~1)"},{name:"zIndex",type:"number",default:"3",description:"叠加层级"},{name:"showWhen",type:'"always" | "idle" | "loading" | "loaded" | "error"',default:'"loading"',description:"显示条件"},{name:"fadeOutOnLoaded",type:"boolean",default:"true",description:"加载成功后是否淡出"}],RT=`const SvgImage = withPlugins(LazyLoadImageCore, [
  createSvgPlaceholderPlugin({
    svgContent: () => \`<svg viewBox='0 0 100 100'><circle cx='50' cy='50' r='40' fill='#ddd'/></svg>\`,
    showWhen: "loading",
  }),
]);

<SvgImage src="https://picsum.photos/id/1015/500/300" alt="SVG 占位示例" />;`,zT=[{name:"圆形骨架占位",description:"加载期显示灰色圆形 SVG 占位，完成后淡出。",src:"https://picsum.photos/id/1015/500/300",config:{svgContent:"<svg viewBox='0 0 100 100'><circle cx='50' cy='50' r='40' fill='#ddd'/></svg>",showWhen:"loading"}},{name:"带背景占位",description:"浅色背景衬托占位 SVG。",src:"https://picsum.photos/id/1021/500/300",config:{svgContent:"<svg viewBox='0 0 100 100'><rect x='10' y='10' width='80' height='80' rx='8' fill='#eee'/></svg>",background:"#fafafa"}},{name:"常驻标识",description:"showWhen=always，占位层持续显示。",src:"https://picsum.photos/id/1026/500/300",config:{svgContent:"<svg viewBox='0 0 100 100'><rect width='100' height='100' fill='rgba(0,0,0,0.04)'/></svg>",showWhen:"always"}}],OT=["注入任意 SVG 占位","加载时/常驻/多状态显示","淡出过渡","背景/透明度/层级可调","函数/字符串来源"],DT=["动画骨架屏","品牌图形占位","加载反馈","差异化占位"],MT=["svgContent 支持函数型（按 context 动态生成），静态预览使用字符串；函数用法见用法示例。"],jT={name:$T,description:ST,since:CT,tags:LT,events:IT,methods:kT,methodsNote:_T,config:ET,example:RT,examples:zT,features:OT,useCases:DT,notes:MT};function TT(e,t){var o;const n=(o=e.imageRef)==null?void 0:o.current;if(n)try{n.style.opacity=String(t.fromOpacity??0),n.style.transform=`scale(${t.fromScale??.98})`,n.style.transition=`opacity ${t.durationMs??300}ms ${t.easing??"ease"}, transform ${t.durationMs??300}ms ${t.easing??"ease"}`}catch{}}function NT(e,t){var o;const n=(o=e.imageRef)==null?void 0:o.current;if(n)try{n.style.opacity=String(t.toOpacity??1),n.style.transform=`scale(${t.toScale??1})`}catch{}}function AT(e={}){return{name:"transition",version:"1.0.0",config:e,hooks:{onMount:t=>{TT(t,e)},onLoadSuccess:t=>{NT(t,e)}}}}const BT="TransitionPlugin",UT="加载成功过渡动画：从指定透明度/缩放到目标值的平滑过渡。",FT="2.0.0",WT=["visual","视觉"],VT=[{name:"onMount",when:"组件挂载完成、插件注册后执行一次（返回的清理函数在 manager.clear 时逆序执行）",description:"初始化副作用：注册监听、起定时器、建观察器；必须返回清理函数或配合 onUnmount 收尾"},{name:"onLoadSuccess",when:"图片成功解码可显示时",description:"拿到最终 displaySrc 做后续动作（上报、预取下张、淡入）"}],HT=[],GT="只读取 context 字段（props / state / data），不调用上下文方法",qT=[{name:"durationMs",type:"number",default:"400",description:"过渡时长 ms"},{name:"easing",type:"string",default:"ease",description:"缓动函数"},{name:"fromOpacity",type:"number",default:"0",description:"起始透明度"},{name:"toOpacity",type:"number",default:"1",description:"结束透明度"},{name:"fromScale",type:"number",default:"1",description:"起始缩放"},{name:"toScale",type:"number",default:"1",description:"结束缩放"}],QT=`// 缩放 + 淡入过渡
const TransImage = withPlugins(LazyLoadImageCore, [
  createTransitionPlugin({
    durationMs: 500,
    fromOpacity: 0,
    toOpacity: 1,
    fromScale: 1.05,
    toScale: 1,
  }),
]);

<TransImage src="https://picsum.photos/seed/transition/600/400" alt="过渡" />;`,KT=[{name:"缩放淡入",description:"从 1.05 倍淡入到原尺寸，轻盈的入场感。",src:"https://picsum.photos/seed/transition-zoom/600/400",config:{durationMs:500,fromOpacity:0,toOpacity:1,fromScale:1.05,toScale:1}},{name:"纯淡入",description:"仅透明度过渡，不含缩放。",src:"https://picsum.photos/seed/transition-fade/600/400",config:{durationMs:400,fromOpacity:0,toOpacity:1}}],YT=["透明度 + 缩放双维度过渡","起始 / 结束值均可定制","时长与缓动可调","相比 FadeIn 更灵活"],XT=["图片入场动画","卡片翻转 / 弹出图","需要缩放感的场景","与视差 / 滚动联动"],ZT=["fromScale=toScale=1 时退化为纯淡入，等价于更轻量的 FadeIn。","缩放在 transform 上实现，注意父容器 overflow 与定位。"],JT={name:BT,description:UT,since:FT,tags:WT,events:VT,methods:HT,methodsNote:GT,config:qT,example:QT,examples:KT,features:YT,useCases:XT,notes:ZT};function e8(e={}){const{text:t="© 2024 Vane",position:n="bottom-right",opacity:o=.8,fontSize:r=12,color:s="#fff",offsetX:i=8,offsetY:a=8,zIndex:l=2,enabled:c=!0}=e;return{name:"watermark",version:"1.0.0",config:e,hooks:{renderOverlay:u=>{if(!c)return null;const d=typeof t=="function"?t(u.src):t;return m.jsx("div",{"aria-hidden":"true",style:{position:"absolute",pointerEvents:"none",color:s,opacity:o,fontSize:r,fontWeight:500,textShadow:"0 1px 2px rgba(0,0,0,0.55)",zIndex:l,...{"top-left":{top:a,left:i},"top-right":{top:a,right:i},"bottom-left":{bottom:a,left:i},"bottom-right":{bottom:a,right:i},center:{top:"50%",left:"50%",transform:"translate(-50%, -50%)"}}[n]},children:d})}}}}const t8="WatermarkPlugin",n8="文字水印覆盖层：支持四角/中心定位、动态文本与样式定制。",o8="2.0.0",r8=["visual","视觉"],s8=[{name:"renderOverlay",when:"每次渲染，覆盖在图片容器之上",description:"骨架屏、错误占位、水印、加载动画"}],i8=[],a8="只读取 context 字段（props / state / data），不调用上下文方法",l8=[{name:"text",type:"string | ((src: string) => string)",default:'"© 2024 Vane"',description:"水印文本；可传函数按 src 动态生成"},{name:"position",type:'"top-left" | "top-right" | "bottom-left" | "bottom-right" | "center"',default:'"bottom-right"',description:"水印位置"},{name:"opacity",type:"number",default:"0.8",description:"0~1 透明度"},{name:"fontSize",type:"number",default:"12",description:"px 字号"},{name:"color",type:"string",default:'"#fff"',description:"文字颜色"},{name:"offsetX",type:"number",default:"8",description:"px 水平偏移"},{name:"offsetY",type:"number",default:"8",description:"px 垂直偏移"},{name:"zIndex",type:"number",default:"2",description:"层叠顺序"},{name:"enabled",type:"boolean",default:"true",description:"是否启用"}],c8=`// 版权水印：右下角、半透明
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
});`,u8=[{name:"版权水印（右下角）",description:"半透明白字落在右下角，常见版权标识场景。",src:"https://picsum.photos/seed/wm-copyright/600/400",config:{text:"© 2026 Vane",position:"bottom-right",opacity:.6,fontSize:14,color:"#ffffff"}},{name:"中心品牌水印",description:"居中、低透明度大字，适合图库/作品集防盗用。",src:"https://picsum.photos/seed/wm-center/600/400",config:{text:"VANE",position:"center",opacity:.22,fontSize:30,color:"#ffffff"}},{name:"左上角说明水印",description:"左上角小字，作来源/批次标注。",src:"https://picsum.photos/seed/wm-topleft/600/400",config:{text:"内部素材 • 勿外传",position:"top-left",opacity:.85,fontSize:12,color:"#ffd400"}}],d8=["五位置可选（四角 + 中心）","文本支持静态字符串或函数动态派生","可调透明度 / 字号 / 颜色 / 偏移","可整体启停（enabled）","层叠顺序可控（zIndex）"],p8=["图片版权 / 品牌标识","图库与作品集防盗用","内部素材来源 / 批次标注","活动海报统一角标","按用户 / 租户动态打标"],m8=["text 传函数时按图片 src 动态生成（如嵌入 ID），但场景示例画廊需用静态文本以保证实时预览。","中心水印透明度建议低于 0.3，避免遮挡主体内容。","水印为覆盖层（renderOverlay），不参与图片本身像素，导出原图不会被打标。"],g8={name:t8,description:n8,since:o8,tags:r8,events:s8,methods:i8,methodsNote:a8,config:l8,example:c8,examples:u8,features:d8,useCases:p8,notes:m8};let f8=0;function h8(e){return Object.entries(e).map(([t,n])=>n==null?"":`${t.replace(/[A-Z]/g,o=>"-"+o.toLowerCase())}: ${n};`).filter(Boolean).join(" ")}const y8=e=>{const t=(e==null?void 0:e.imageStyle)??{},n=(e==null?void 0:e.containerStyle)??{},o=(e==null?void 0:e.hoverImageStyle)??{},r=Object.keys(o).length>0,s=`lli-custom-${++f8}`;let i=null;const a=[t.transition,"opacity 180ms ease"].filter(Boolean).join(", ");return{name:"custom-effects",priority:50,hooks:{transformProps(l){const c={...l.imageStyle||{},...t,transition:a},u={...l.containerStyle||{},...n},d=[l.imageClassName,e==null?void 0:e.imageClassName,r?s:null].filter(Boolean).join(" "),p=[l.containerClassName,e==null?void 0:e.containerClassName].filter(Boolean).join(" ");return{...l,imageStyle:c,imageClassName:d,containerStyle:u,containerClassName:p}},onLoadSuccess(){!r||typeof document>"u"||i||(i=document.createElement("style"),i.setAttribute("data-lli-custom",s),i.textContent=`.${s}:hover { ${h8(o)} }`,document.head.appendChild(i))},onUnmount(){i&&i.parentNode&&(i.parentNode.removeChild(i),i=null)}}}},v8="CustomEffectsPlugin",w8="自定义效果逃逸舱：把内置视觉插件覆盖不到的任意 CSS 效果（filter / transform / transition / className）直接注入图片与容器，无需新造组件。旧版 CustomEffects 展示页的 v2 等效形态。",x8="2.0.0",b8=["visual","视觉","自定义"],P8=[{name:"onUnmount",when:"组件卸载前执行一次",description:"释放监听、定时器与观察器；与 onMount 成对出现，避免泄漏"},{name:"onLoadSuccess",when:"图片成功解码可显示时",description:"拿到最终 displaySrc 做后续动作（上报、预取下张、淡入）"},{name:"transformProps",when:"渲染前链式改写图片 props",description:"补 sizes / 占位色 / 解码策略等"}],$8=[],S8="只读取 context 字段（props / state / data），不调用上下文方法",C8=[{name:"imageStyle",type:"React.CSSProperties",default:"{}",description:'应用到 <img> 的任意内联样式，如 { filter: "contrast(1.2) saturate(1.4)" }'},{name:"imageClassName",type:"string",default:'""',description:"附加到 <img> 的 className"},{name:"containerStyle",type:"React.CSSProperties",default:"{}",description:"应用到容器（卡片）的任意内联样式"},{name:"containerClassName",type:"string",default:'""',description:"附加到容器的 className"},{name:"hoverImageStyle",type:"React.CSSProperties",default:"{}",description:'悬停时叠加到 <img> 的样式（移出还原），如 { transform: "scale(1.08)" }'}],L8=`// 任意 CSS 效果逃逸舱：内置插件没有的视觉，直接以样式注入
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

<ArtImage src="https://picsum.photos/seed/custom/600/400" alt="自定义效果" />;`,I8=[{name:"复古胶片滤镜（静态）",description:"sepia + 对比度 + 饱和度组合，模拟胶片质感，并给容器加圆角。",src:"https://picsum.photos/seed/custom-film/600/400",config:{imageStyle:{filter:"sepia(0.45) contrast(1.1) saturate(1.3)",transition:"filter 240ms ease"},containerStyle:{borderRadius:16,overflow:"hidden",boxShadow:"0 6px 20px rgba(0,0,0,0.18)"}}},{name:"悬停放大 + 轻微旋转",description:"平常静态，鼠标悬停时图片放大并旋转 2°，移出自动还原。",src:"https://picsum.photos/seed/custom-hover/600/400",config:{imageStyle:{transition:"transform 220ms ease"},hoverImageStyle:{transform:"scale(1.08) rotate(2deg)"}}},{name:"叠加到内置插件之上",description:"与 BorderGlow / Caption 等内置插件叠加：用逃逸舱补一个渐变描边。",src:"https://picsum.photos/seed/custom-combo/600/400",config:{imageClassName:"custom-art-frame",containerStyle:{padding:6,background:"linear-gradient(135deg,#ff9a9e,#fad0c4)",borderRadius:12}}}],k8=["注入任意 CSS filter（模糊 / 灰度 / 复古 / 色相旋转等）","注入任意 transform（缩放 / 旋转 / 位移）","为 <img> 与容器分别附加 className 与内联样式","hoverImageStyle 支持悬停态，移出自动还原","优先级靠前，可叠加在其它视觉插件之上","无需为一次性效果新建组件，几行配置即可"],_8=["内置视觉插件未覆盖的特殊滤镜 / 调色需求","活动主题需要临时换肤、加描边 / 圆角","悬停微交互（放大、旋转、投影）","演示或 A/B 实验时的快速视觉验证","替代旧版 CustomEffects 展示页的任意效果组合"],E8=["imageStyle / containerStyle 合并进核心渲染的 style，后者优先级更高（叠加而非覆盖）。","插件会自动保留核心自带的 opacity 渐显：你给 imageStyle.transition 设值时，会追加 opacity 180ms 而非覆盖它。","hoverImageStyle 通过注入一条纯 CSS `:hover` 规则实现，由浏览器原生处理进入/离开——不触碰 React 受控的内联样式，因此不会出现「移出后图片消失」的旧问题。","与内置插件叠加时，建议把 CustomEffects 放在 withPlugins 数组靠前位置（其 priority=50 已处理）。","需要函数式动态样式时，可在业务侧先算出 style 对象再传入，本插件保持配置式以便文档化。"],R8={name:v8,description:w8,since:x8,tags:b8,events:P8,methods:$8,methodsNote:S8,config:C8,example:L8,examples:I8,features:k8,useCases:_8,notes:E8},z8={fade:"@keyframes reveal-fade { from { opacity: 0; } to { opacity: 1; } }","fade-up":"@keyframes reveal-fade-up { from { opacity: 0; transform: translateY(30px); } to { opacity: 1; transform: translateY(0); } }","fade-down":"@keyframes reveal-fade-down { from { opacity: 0; transform: translateY(-30px); } to { opacity: 1; transform: translateY(0); } }","fade-left":"@keyframes reveal-fade-left { from { opacity: 0; transform: translateX(30px); } to { opacity: 1; transform: translateX(0); } }","fade-right":"@keyframes reveal-fade-right { from { opacity: 0; transform: translateX(-30px); } to { opacity: 1; transform: translateX(0); } }","zoom-in":"@keyframes reveal-zoom-in { from { opacity: 0; transform: scale(0.8); } to { opacity: 1; transform: scale(1); } }","zoom-out":"@keyframes reveal-zoom-out { from { opacity: 0; transform: scale(1.2); } to { opacity: 1; transform: scale(1); } }","rotate-in":"@keyframes reveal-rotate-in { from { opacity: 0; transform: rotate(-180deg) scale(0.5); } to { opacity: 1; transform: rotate(0deg) scale(1); } }","flip-x":"@keyframes reveal-flip-x { from { opacity: 0; transform: perspective(400px) rotateX(-90deg); } to { opacity: 1; transform: perspective(400px) rotateX(0deg); } }","flip-y":"@keyframes reveal-flip-y { from { opacity: 0; transform: perspective(400px) rotateY(-90deg); } to { opacity: 1; transform: perspective(400px) rotateY(0deg); } }","slide-up":"@keyframes reveal-slide-up { from { transform: translateY(100%); } to { transform: translateY(0); } }","slide-down":"@keyframes reveal-slide-down { from { transform: translateY(-100%); } to { transform: translateY(0); } }","slide-left":"@keyframes reveal-slide-left { from { transform: translateX(100%); } to { transform: translateX(0); } }","slide-right":"@keyframes reveal-slide-right { from { transform: translateX(-100%); } to { transform: translateX(0); } }",bounce:"@keyframes reveal-bounce { from { opacity: 0; transform: scale(0.3) translateY(-50px); } 50% { opacity: 1; transform: scale(1.05) translateY(0); } 70% { transform: scale(0.95); } to { opacity: 1; transform: scale(1); } }",elastic:"@keyframes reveal-elastic { from { opacity: 0; transform: scale(0); } 50% { opacity: 1; transform: scale(1.2); } 75% { transform: scale(0.9); } 90% { transform: scale(1.05); } to { opacity: 1; transform: scale(1); } }"};function Bc(e,t){if(typeof document>"u"||document.getElementById(e))return;const n=document.createElement("style");n.id=e,n.textContent=t,document.head.appendChild(n)}function O8(e={}){const{animation:t="fade-up",duration:n=600,delay:o=0,easing:r="ease-out",customAnimation:s,customKeyframes:i,fillMode:a="both",disabled:l=!1}=e;return t!=="custom"?Bc(`reveal-animation-${t}`,z8[t]??""):i&&s&&Bc(`reveal-animation-custom-${s}`,i),{name:"reveal-animation",version:"1.0.0",config:e,hooks:{onLoadSuccess:c=>{var p;if(l)return;const u=(p=c.imageRef)==null?void 0:p.current;if(!u)return;const d=t==="custom"?s||"none":`reveal-${t}`;if(u.style.animation=`${d} ${n}ms ${r} ${o}ms ${a}`,a==="none"||a==="backwards"){const f=()=>{u.style.animation="",u.removeEventListener("animationend",f)};u.addEventListener("animationend",f)}}}}}const D8="RevealAnimationPlugin",M8="图片揭示动画：为图片加载添加各种进场动画（淡入/缩放/旋转/翻转/弹跳/弹性等 16 种预设 + 自定义），纯 CSS 无依赖。",j8="2.0.0",T8=["interaction","视觉效果与交互","visual"],N8=[{name:"onLoadSuccess",when:"图片成功解码可显示时",description:"拿到最终 displaySrc 做后续动作（上报、预取下张、淡入）"}],A8=[],B8="只读取 context 字段（props / state / data），不调用上下文方法",U8=[{name:"animation",type:'"fade" | "fade-up" | "fade-down" | "fade-left" | "fade-right" | "zoom-in" | "zoom-out" | "rotate-in" | "flip-x" | "flip-y" | "slide-up" | "slide-down" | "slide-left" | "slide-right" | "bounce" | "elastic" | "custom"',default:'"fade-up"',description:"动画类型"},{name:"duration",type:"number",default:"600",description:"持续时间（毫秒）"},{name:"delay",type:"number",default:"0",description:"延迟（毫秒）"},{name:"easing",type:"string",default:'"ease-out"',description:"缓动函数"},{name:"customAnimation",type:"string",default:'""',description:"自定义动画名（animation 为 custom 时生效）"},{name:"customKeyframes",type:"string",default:'""',description:"自定义 keyframes 文本"},{name:"fillMode",type:'"none" | "forwards" | "backwards" | "both"',default:'"both"',description:"动画填充模式"},{name:"disabled",type:"boolean",default:"false",description:"是否禁用"}],F8=`// 1. 组装带揭示动画的懒加载图片
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
});`,W8=[{name:"淡入上浮（默认）",description:"fade-up：图片加载完成后从下方淡入上浮，最通用的进场效果。",src:"https://picsum.photos/id/1018/400/300",config:{animation:"fade-up",duration:700,easing:"ease-out"}},{name:"缩放进入 zoom-in",description:"图片由 1.2 倍缩放回落至原尺寸并淡入，适合主视觉。",src:"https://picsum.photos/id/1015/400/300",config:{animation:"zoom-in",duration:800}},{name:"旋转进入 rotate-in",description:"带轻微旋转的进场，动感更强。",src:"https://picsum.photos/id/1024/400/300",config:{animation:"rotate-in",duration:900,delay:100}},{name:"弹跳 bounce",description:"带回弹缓冲的进场，活泼、吸引注意。",src:"https://picsum.photos/id/1039/400/300",config:{animation:"bounce",duration:1e3}},{name:"弹性 elastic + 自定义时长",description:"弹性缓动 + 更长时长，强调“弹出”质感。",src:"https://picsum.photos/id/1043/400/300",config:{animation:"elastic",duration:1200,easing:"cubic-bezier(0.68, -0.55, 0.265, 1.55)"}},{name:"自定义关键帧 custom",description:"通过 customAnimation 指定动画名，并以 customKeyframes 注入关键帧文本，可做任意效果。",src:"https://picsum.photos/id/1050/400/300",config:{animation:"custom",customAnimation:"myReveal",customKeyframes:"@keyframes myReveal { from { opacity: 0; transform: scale(1.2) rotate(8deg); } to { opacity: 1; transform: none; } }"}}],V8=["16 种预设动画（淡入/缩放/旋转/翻转/滑动/弹跳/弹性）","支持自定义动画名 + 关键帧文本","可配置时长、延迟、缓动函数","fill 模式控制动画结束态","可一键禁用（disabled，适配低端设备）","纯 CSS 实现，无运行时依赖"],H8=["图片列表进场","瀑布流懒加载","轮播图切换","首屏内容揭示","卡片/区块入场动画","营销落地页视觉点缀"],G8=["动画在图片加载完成后触发一次；再次滚动不会重复播放。","低端设备或开启“减少动态效果”偏好时，可设 disabled: true 关闭动画。"],q8={name:D8,description:M8,since:j8,tags:T8,events:N8,methods:A8,methodsNote:B8,config:U8,example:F8,examples:W8,features:V8,useCases:H8,notes:G8};function Q8(){if(typeof document>"u"||document.getElementById("glitch-effect-styles"))return;const e=document.createElement("style");e.id="glitch-effect-styles",e.textContent=`
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
  `,document.head.appendChild(e)}const K8=({config:e})=>{const{style:t="glitch-mix",continuous:n=!1,duration:o=1e3,intensity:r=.7,triggerOnHover:s=!1,rgbOffset:i=3,scanLineCount:a=30,animateScanLines:l=!0}=e,[c,u]=x.useState(!1),[d,p]=x.useState(!1);x.useEffect(()=>{if(Q8(),!n&&!s){u(!0);const h=setTimeout(()=>u(!1),o);return()=>clearTimeout(h)}},[n,s,o]);const f=n||c||s&&d,v={position:"absolute",inset:0,background:`linear-gradient(90deg, rgba(255,0,0,${r*.15}) 0%, transparent ${i*2}px, transparent calc(100% - ${i*2}px), rgba(0,255,255,${r*.15}) 100%)`,mixBlendMode:"color",animation:f?"glitch-rgb-split 0.5s ease-in-out infinite":"none",pointerEvents:"none"},w=Array.from({length:a},(h,g)=>m.jsx("div",{style:{position:"absolute",left:0,right:0,height:"1px",top:`${g/a*100}%`,background:`rgba(255,255,255,${r*.1})`,animation:l&&f?`scan-line-move ${2+Math.random()*2}s linear infinite`:"none",animationDelay:`${Math.random()*2}s`}},g)),b=h=>{const g=[{main:"rgba(255,0,0,0.15)",secondary:"rgba(0,255,255,0.15)"},{main:"rgba(0,255,0,0.15)",secondary:"rgba(255,0,255,0.15)"},{main:"rgba(0,100,255,0.15)",secondary:"rgba(255,255,0,0.15)"}],y=g[h-1]||g[0];return{position:"absolute",inset:0,background:`linear-gradient(${h*45}deg, ${y.main} 0%, transparent 30%, transparent 70%, ${y.secondary} 100%)`,animation:f?`glitch-anim ${.4+h*.1}s infinite ${h%2===0?"normal":"reverse"}`:"none",animationDelay:`${h*.06}s`,opacity:r*.7,mixBlendMode:"screen",pointerEvents:"none",filter:`blur(${r*.5}px)`}};return m.jsxs("div",{style:{position:"absolute",inset:0,pointerEvents:s?"auto":"none",overflow:"hidden"},onMouseEnter:()=>s&&p(!0),onMouseLeave:()=>s&&p(!1),children:[(t==="rgb-split"||t==="glitch-mix"||t==="intense")&&f&&m.jsx("div",{style:v}),(t==="scan-lines"||t==="glitch-mix")&&f&&w,(t==="digital"||t==="glitch-mix"||t==="intense")&&f&&m.jsxs(m.Fragment,{children:[m.jsx("div",{style:b(1)}),m.jsx("div",{style:b(2)}),t==="intense"&&m.jsx("div",{style:b(3)})]}),t==="intense"&&f&&m.jsx("div",{style:{position:"absolute",inset:0,background:`repeating-linear-gradient(0deg, rgba(0,255,0,${r*.03}) 0px, rgba(0,255,0,0) 2px, rgba(0,255,0,0) 4px, rgba(0,255,0,${r*.03}) 6px)`,animation:"glitch-anim 0.8s ease-in-out infinite",pointerEvents:"none",opacity:.5}})]})};function Y8(e={}){return{name:"glitch-effect",version:"1.0.0",config:e,hooks:{renderOverlay:t=>m.jsx(K8,{config:e,context:t})}}}const X8="GlitchEffectPlugin",Z8="故障艺术效果：赛博朋克风格 RGB 分离 / 扫描线 / 数字失真 / 混合 / 强烈五种风格，纯 CSS 无依赖，支持持续、一次性、悬停触发。",J8="2.0.0",eN=["interaction","视觉效果与交互","visual"],tN=[{name:"renderOverlay",when:"每次渲染，覆盖在图片容器之上",description:"骨架屏、错误占位、水印、加载动画"}],nN=[],oN="只读取 context 字段（props / state / data），不调用上下文方法",rN=[{name:"style",type:'"rgb-split" | "scan-lines" | "digital" | "glitch-mix" | "intense"',default:'"glitch-mix"',description:"故障风格"},{name:"continuous",type:"boolean",default:"false",description:"是否持续动画"},{name:"duration",type:"number",default:"1000",description:"一次性触发时长（毫秒）"},{name:"intensity",type:"number",default:"0.7",description:"效果强度 0~1"},{name:"triggerOnHover",type:"boolean",default:"false",description:"是否悬停触发"},{name:"rgbOffset",type:"number",default:"3",description:"RGB 分离距离（px）"},{name:"scanLineCount",type:"number",default:"30",description:"扫描线数量"},{name:"animateScanLines",type:"boolean",default:"true",description:"扫描线是否动画"}],sN=`// 1. 持续 RGB 分离故障特效
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
createGlitchEffectPlugin({ style: "glitch-mix", triggerOnHover: true });`,iN=[{name:"glitch-mix 混合（持续）",description:"混合风格默认效果，持续播放，适合做氛围封面。",src:"https://picsum.photos/id/1043/400/300",config:{style:"glitch-mix",continuous:!0,intensity:.7}},{name:"rgb-split RGB 分离（持续）",description:"红蓝通道错位产生色散，赛博朋克典型观感。",src:"https://picsum.photos/id/1062/400/300",config:{style:"rgb-split",continuous:!0,rgbOffset:5}},{name:"scan-lines 扫描线（悬停触发）",description:"叠加扫描线纹理，悬停时启动，平时保持干净。",src:"https://picsum.photos/id/1074/400/300",config:{style:"scan-lines",triggerOnHover:!0,scanLineCount:40,animateScanLines:!0}},{name:"digital 数字失真（一次性）",description:"加载/进入时触发一次数字故障，随后恢复清晰。",src:"https://picsum.photos/id/1080/400/300",config:{style:"digital",continuous:!1,duration:900}},{name:"intense 高强度",description:"强度拉满的强烈故障，冲击力强，适合标题位。",src:"https://picsum.photos/id/1084/400/300",config:{style:"intense",continuous:!0,intensity:1}}],aN=["5 种故障风格（RGB 分离 / 扫描线 / 数字失真 / 混合 / 强烈）","三种触发模式：持续 / 一次性 / 悬停触发","效果强度 0~1 可调","扫描线数量与是否动画可配","RGB 错位距离可调","纯 CSS 实现，无运行时依赖"],lN=["赛博朋克风格站点","海报 / 专辑封面","活动营销页","游戏官网","暗色主题视觉","品牌焕新 / 限时活动"],cN=["持续动画（continuous: true）会一直占用合成层，建议对大图或大量实例谨慎使用。","阅读型内容可用 triggerOnHover: true，仅在鼠标悬停时播放，避免干扰。"],uN={name:X8,description:Z8,since:J8,tags:eN,events:tN,methods:nN,methodsNote:oN,config:rN,example:sN,examples:iN,features:aN,useCases:lN,notes:cN},Uc={"circle-to-square":()=>"@keyframes morph-circle-to-square { from { border-radius: 50%; transform: scale(0.9); } to { border-radius: 0%; transform: scale(1); } }","square-to-circle":()=>"@keyframes morph-square-to-circle { from { border-radius: 0%; transform: scale(1); } to { border-radius: 50%; transform: scale(0.9); } }","rounded-corners":e=>`@keyframes morph-rounded-corners { from { border-radius: ${e.fromBorderRadius??"50%"}; } to { border-radius: ${e.toBorderRadius??"0%"}; } }`,"scale-morph":e=>`@keyframes morph-scale { from { transform: scale(${e.fromScale??1}); } to { transform: scale(${e.toScale??1}); } }`,"rotate-morph":e=>`@keyframes morph-rotate { from { transform: rotate(${e.fromRotate??0}deg); } to { transform: rotate(${e.toRotate??0}deg); } }`,"skew-morph":e=>`@keyframes morph-skew { from { transform: skewX(${e.fromSkew??0}deg) skewY(${e.fromSkew??0}deg); } to { transform: skewX(${e.toSkew??0}deg) skewY(${e.toSkew??0}deg); } }`,elastic:()=>"@keyframes morph-elastic { 0% { transform: scale(0.8); } 30% { transform: scale(1.1); } 50% { transform: scale(0.95); } 70% { transform: scale(1.02); } 100% { transform: scale(1); } }",liquid:()=>"@keyframes morph-liquid { 0% { border-radius: 30% 70% 70% 30% / 30% 30% 70% 70%; transform: rotate(0deg); } 25% { border-radius: 58% 42% 75% 25% / 76% 46% 54% 24%; } 50% { border-radius: 50% 50% 33% 67% / 55% 27% 73% 45%; transform: rotate(180deg); } 75% { border-radius: 33% 67% 58% 42% / 63% 68% 32% 37%; } 100% { border-radius: 30% 70% 70% 30% / 30% 30% 70% 70%; transform: rotate(360deg); } }",custom:e=>e.customTransform?`@keyframes morph-custom { from { ${e.customTransform.from} } to { ${e.customTransform.to} } }`:""},dN={"circle-to-square":"morph-circle-to-square","square-to-circle":"morph-square-to-circle","rounded-corners":"morph-rounded-corners","scale-morph":"morph-scale","rotate-morph":"morph-rotate","skew-morph":"morph-skew",elastic:"morph-elastic",liquid:"morph-liquid",custom:"morph-custom"};function pN(e,t){if(typeof document>"u"||!t||document.getElementById(e))return;const n=document.createElement("style");n.id=e,n.textContent=t,document.head.appendChild(n)}function mN(e={}){const{type:t="elastic",duration:n=800,delay:o=0,easing:r="cubic-bezier(0.68, -0.55, 0.265, 1.55)",triggerOnHover:s=!1,continuous:i=!1}=e,a=(Uc[t]??Uc.elastic)(e);pN(`morph-plugin-${t}`,a);const l=dN[t]??"morph-elastic";return{name:"morph",version:"1.0.0",config:e,hooks:{onLoadSuccess:c=>{var d;const u=(d=c.imageRef)==null?void 0:d.current;if(u){if(i){u.style.animation=`${l} ${n}ms ${r} ${o}ms infinite alternate`;return}if(s){const p=()=>{u.style.animation=`${l} ${n}ms ${r} ${o}ms both`},f=()=>{u.style.animation=""};u.addEventListener("mouseenter",p),u.addEventListener("mouseleave",f);return}u.style.animation=`${l} ${n}ms ${r} ${o}ms both`}}}}}const gN="MorphPlugin",fN="形变过渡效果：圆角/缩放/旋转/倾斜/弹性/液态等多种形变动画，纯 CSS transforms，支持加载触发、悬停触发与持续动画。",hN="2.0.0",yN=["interaction","视觉效果与交互","visual"],vN=[{name:"onLoadSuccess",when:"图片成功解码可显示时",description:"拿到最终 displaySrc 做后续动作（上报、预取下张、淡入）"}],wN=[],xN="只读取 context 字段（props / state / data），不调用上下文方法",bN=[{name:"type",type:'"circle-to-square" | "square-to-circle" | "rounded-corners" | "scale-morph" | "rotate-morph" | "skew-morph" | "elastic" | "liquid" | "custom"',default:'"elastic"',description:"形变类型"},{name:"duration",type:"number",default:"800",description:"持续时间（毫秒）"},{name:"delay",type:"number",default:"0",description:"延迟（毫秒）"},{name:"easing",type:"string",default:'"cubic-bezier(0.68, -0.55, 0.265, 1.55)"',description:"缓动函数"},{name:"triggerOnHover",type:"boolean",default:"false",description:"是否悬停触发"},{name:"continuous",type:"boolean",default:"false",description:"是否持续动画"},{name:"fromBorderRadius",type:"string",default:'"50%"',description:"rounded-corners 起始圆角"},{name:"toBorderRadius",type:"string",default:'"0%"',description:"rounded-corners 结束圆角"},{name:"fromScale",type:"number",default:"1",description:"scale-morph 起始缩放"},{name:"toScale",type:"number",default:"1",description:"scale-morph 结束缩放"},{name:"fromRotate",type:"number",default:"0",description:"rotate-morph 起始角度"},{name:"toRotate",type:"number",default:"0",description:"rotate-morph 结束角度"},{name:"fromSkew",type:"number",default:"0",description:"skew-morph 起始倾斜"},{name:"toSkew",type:"number",default:"0",description:"skew-morph 结束倾斜"}],PN=`// 1. 弹性形变
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
});`,$N=[{name:"elastic 弹性形变",description:"加载完成后以弹性缓动“弹”入，适合头像与卡片。",src:"https://picsum.photos/id/1080/400/300",config:{type:"elastic",duration:1e3,easing:"cubic-bezier(0.68, -0.55, 0.265, 1.55)"}},{name:"rounded-corners 圆角过渡",description:"从圆形过渡为圆角矩形，强调形态变化。",src:"https://picsum.photos/id/1084/400/300",config:{type:"rounded-corners",fromBorderRadius:"50%",toBorderRadius:"12%",duration:900}},{name:"scale-morph 缩放形变",description:"从 0.85 倍放大到原尺寸，配合淡入更自然。",src:"https://picsum.photos/id/110/400/300",config:{type:"scale-morph",fromScale:.85,toScale:1,duration:800}},{name:"rotate-morph 旋转形变",description:"带角度旋转的进入，动感十足。",src:"https://picsum.photos/id/111/400/300",config:{type:"rotate-morph",fromRotate:-12,toRotate:0,duration:900}},{name:"liquid 液态（持续）",description:"持续液态流动效果，适合做背景或装饰图。",src:"https://picsum.photos/id/119/400/300",config:{type:"liquid",continuous:!0,duration:2e3}}],SN=["9 种形变类型（圆角 / 缩放 / 旋转 / 倾斜 / 弹性 / 液态等）","三种触发：加载触发 / 悬停触发 / 持续动画","圆角、缩放、旋转、倾斜均参数化起止值","弹性缓动可定制","纯 CSS transforms，性能好","无运行时依赖"],CN=["头像形变入场","按钮 / 卡片交互反馈","Logo 动画","加载态过渡","图片墙动态呈现","装饰性背景图"],LN=["continuous: true 会持续播放；配合 triggerOnHover: true 可在鼠标悬停时播放单次，更省资源。","悬停触发的场景需在图片上移动 / 悬停鼠标才能看到形变，静态截图仅展示初始态。"],IN={name:gN,description:fN,since:hN,tags:yN,events:vN,methods:wN,methodsNote:xN,config:bN,example:PN,examples:$N,features:SN,useCases:CN,notes:LN},kN=({config:e})=>{const{style:t="zoom-in",enableFollower:n=!0,followerColor:o="rgba(59, 130, 246, 0.5)",followerSize:r=40,followerDelay:s=.1,scaleOnHover:i=!0,hoverScale:a=1.5,customIcon:l,cursorText:c,showRipple:u=!1}=e,[d,p]=x.useState(!1),[f,v]=x.useState({x:0,y:0}),[w,b]=x.useState({x:0,y:0}),[h,g]=x.useState([]),y=x.useRef(null),P=x.useRef(void 0),$=l?`url(${l}), auto`:{"zoom-in":"zoom-in","zoom-out":"zoom-out",pointer:"pointer",crosshair:"crosshair",move:"move",grab:"grab","custom-dot":"none","custom-ring":"none","custom-plus":"none",none:"none"}[t]??"auto";x.useEffect(()=>{if(!n)return;const O=()=>{b(U=>({x:U.x+(f.x-U.x)*(1-s),y:U.y+(f.y-U.y)*(1-s)})),P.current=requestAnimationFrame(O)};return P.current=requestAnimationFrame(O),()=>{P.current&&cancelAnimationFrame(P.current)}},[f,n,s]);const I=O=>{if(!y.current)return;const U=y.current.getBoundingClientRect();v({x:O.clientX-U.left,y:O.clientY-U.top})},k=O=>{if(!u||!y.current)return;const U=y.current.getBoundingClientRect(),re=Date.now();g(K=>[...K,{id:re,x:O.clientX-U.left,y:O.clientY-U.top}]),setTimeout(()=>g(K=>K.filter(R=>R.id!==re)),1e3)},_=d&&i?a:1,S={position:"absolute",inset:0,cursor:$,overflow:"hidden",zIndex:5},L={position:"absolute",left:w.x,top:w.y,width:r,height:r,transform:`translate(-50%, -50%) scale(${_})`,backgroundColor:o,borderRadius:"50%",pointerEvents:"none",transition:"transform 0.3s ease",zIndex:10},j={position:"absolute",left:w.x,top:w.y,width:r,height:r,border:"2px solid #3b82f6",borderRadius:"50%",transform:`translate(-50%, -50%) scale(${_})`,pointerEvents:"none",transition:"transform 0.2s ease",zIndex:11},A={position:"absolute",left:w.x,top:w.y,width:20,height:20,transform:"translate(-50%, -50%)",pointerEvents:"none",zIndex:11},z={position:"absolute",left:f.x+15,top:f.y-10,padding:"4px 8px",fontSize:12,color:"#fff",backgroundColor:"rgba(0,0,0,0.8)",borderRadius:4,pointerEvents:"none",whiteSpace:"nowrap",zIndex:12};return m.jsxs("div",{ref:y,style:S,onMouseMove:I,onMouseEnter:()=>p(!0),onMouseLeave:()=>p(!1),onClick:k,children:[n&&m.jsx("div",{style:L}),t==="custom-dot"&&m.jsx("div",{style:L}),t==="custom-ring"&&m.jsx("div",{style:j}),t==="custom-plus"&&m.jsx("div",{style:A,children:m.jsxs("svg",{width:"20",height:"20",viewBox:"0 0 20 20",fill:"none",children:[m.jsx("line",{x1:"10",y1:"0",x2:"10",y2:"20",stroke:"#3b82f6",strokeWidth:"2"}),m.jsx("line",{x1:"0",y1:"10",x2:"20",y2:"10",stroke:"#3b82f6",strokeWidth:"2"})]})}),c&&d&&m.jsx("div",{style:z,children:c}),h.map(O=>m.jsx("div",{style:{position:"absolute",left:O.x,top:O.y,width:0,height:0,border:"2px solid rgba(59, 130, 246, 0.8)",borderRadius:"50%",transform:"translate(-50%, -50%)",animation:"ripple-expand 1s ease-out forwards",pointerEvents:"none"}},O.id)),u&&m.jsx("style",{children:"@keyframes ripple-expand { from { width: 0; height: 0; opacity: 1; } to { width: 80px; height: 80px; opacity: 0; } }"})]})};function _N(e={}){return{name:"animated-cursor",version:"1.0.0",config:e,hooks:{renderOverlay:t=>m.jsx(kN,{config:e,context:t})}}}const EN="AnimatedCursorPlugin",RN="自定义光标动画：为图片叠加系统光标（放大镜/十字/抓手等）或自定义光标（圆点/圆环/加号）+ 跟随动画 + 点击涟漪 + 文字提示，纯 CSS+JS 无依赖。",zN="2.0.0",ON=["interaction","视觉效果与交互","visual"],DN=[{name:"renderOverlay",when:"每次渲染，覆盖在图片容器之上",description:"骨架屏、错误占位、水印、加载动画"}],MN=[],jN="只读取 context 字段（props / state / data），不调用上下文方法",TN=[{name:"style",type:'"zoom-in" | "zoom-out" | "pointer" | "crosshair" | "move" | "grab" | "custom-dot" | "custom-ring" | "custom-plus" | "none"',default:'"zoom-in"',description:"光标样式"},{name:"enableFollower",type:"boolean",default:"true",description:"是否启用跟随光标"},{name:"followerColor",type:"string",default:'"rgba(59, 130, 246, 0.5)"',description:"跟随光标颜色"},{name:"followerSize",type:"number",default:"40",description:"跟随光标大小（px）"},{name:"followerDelay",type:"number",default:"0.1",description:"跟随延迟系数（越大越跟手）"},{name:"scaleOnHover",type:"boolean",default:"true",description:"悬停时跟随光标缩放"},{name:"hoverScale",type:"number",default:"1.5",description:"悬停缩放比例"},{name:"customIcon",type:"string",default:'""',description:"自定义光标图标 URL"},{name:"cursorText",type:"string",default:'""',description:"光标附带文字"},{name:"showRipple",type:"boolean",default:"false",description:"点击时产生涟漪"}],NN=`// 1. 放大镜光标 + 蓝色跟随圆点
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
});`,AN=[{name:"zoom-in 放大镜 + 跟随圆点",description:"系统放大镜光标，叠加半透明蓝色跟随圆点，暗示可放大查看。",src:"https://picsum.photos/id/110/400/300",config:{style:"zoom-in",enableFollower:!0,followerColor:"rgba(59,130,246,0.5)",followerSize:40}},{name:"custom-dot 自定义圆点 + 点击涟漪",description:"自定义圆点跟随光标，点击产生涟漪动画，互动感强。",src:"https://picsum.photos/id/119/400/300",config:{style:"custom-dot",showRipple:!0,followerSize:44,followerColor:"rgba(255,99,132,0.5)"}},{name:"custom-ring 圆环 + 文字提示",description:"圆环跟随光标并附带文字提示，适合“查看大图”引导。",src:"https://picsum.photos/id/122/400/300",config:{style:"custom-ring",cursorText:"查看大图",followerSize:56,followerColor:"rgba(16,185,129,0.6)"}},{name:"crosshair 十字光标",description:"十字准星光标，适合素材 / 设计类站点定位。",src:"https://picsum.photos/id/129/400/300",config:{style:"crosshair",enableFollower:!0,followerSize:36}},{name:"custom-plus 加号光标",description:"加号光标，强调“可添加 / 收藏”等操作。",src:"https://picsum.photos/id/133/400/300",config:{style:"custom-plus",enableFollower:!0,followerSize:40,scaleOnHover:!0}}],BN=["10 种光标样式（系统光标 + 自定义圆点 / 圆环 / 加号）","跟随光标：颜色、大小、延迟系数可调","悬停时跟随光标缩放","点击涟漪动画","可附带文字提示","支持自定义图标 URL","纯 CSS + 轻量 JS，无依赖"],UN=["商品详情放大预览","画廊 / 素材站点","设计工具类页面","交互演示与引导","收藏 / 添加操作的视觉暗示","创意作品集"],FN=["效果需鼠标在图片上移动 / 悬停 / 点击才会体现，静态截图仅展示初始态。","移动端无指针设备，建议配合触摸反馈降级，或仅保留 enableFollower 等轻效果。"],WN={name:EN,description:RN,since:zN,tags:ON,events:DN,methods:MN,methodsNote:jN,config:TN,example:NN,examples:AN,features:BN,useCases:UN,notes:FN},VN=({config:e})=>{const{style:t="tilt",intensity:n=.5,maxTilt:o=20,enablePerspective:r=!0,perspective:s=1e3,enableGlare:i=!0,glareColor:a="rgba(255, 255, 255, 0.3)",glareOpacity:l=.5,enableShadow:c=!0,transitionDuration:u=300,resetOnLeave:d=!0}=e,[p,f]=x.useState({rotateX:0,rotateY:0,translateZ:0,translateY:0}),[v,w]=x.useState({x:50,y:50}),b=N.useRef(null),h=I=>{if(!b.current)return;const k=b.current.getBoundingClientRect(),_=(I.clientX-k.left)/k.width-.5,S=(I.clientY-k.top)/k.height-.5;let L={rotateX:0,rotateY:0,translateZ:0,translateY:0};switch(t){case"tilt":L={rotateX:-S*o*n,rotateY:_*o*n,translateZ:0,translateY:0};break;case"parallax":L={rotateX:-S*o*n*.5,rotateY:_*o*n*.5,translateZ:Math.abs(_+S)*10*n,translateY:0};break;case"float":L={rotateX:0,rotateY:0,translateZ:-S*50*n,translateY:-S*40*n};break;case"rotate-3d":L={rotateX:-S*o*n*1.5,rotateY:_*o*n*1.5,translateZ:15*n,translateY:0};break}f(L),w({x:(I.clientX-k.left)/k.width*100,y:(I.clientY-k.top)/k.height*100})},g=()=>{d&&f({rotateX:0,rotateY:0,translateZ:0,translateY:0}),w({x:50,y:50})},y={position:"absolute",inset:0,transformStyle:"preserve-3d",perspective:r?`${s}px`:void 0,transition:`transform ${u}ms ease-out`,zIndex:1},P={position:"absolute",inset:0,transform:`translateY(${p.translateY}px) rotateX(${p.rotateX}deg) rotateY(${p.rotateY}deg) translateZ(${p.translateZ}px)`,transformStyle:"preserve-3d",transition:d?`transform ${u}ms ease-out`:"none",boxShadow:c?`${p.rotateY*.5}px ${p.rotateX*.5+p.translateY*.3}px ${20+Math.abs(p.translateZ)*.5}px rgba(0,0,0,0.3)`:"none"},$={position:"absolute",inset:0,background:`radial-gradient(circle at ${v.x}% ${v.y}%, ${a} 0%, transparent 50%)`,opacity:l,pointerEvents:"none",mixBlendMode:"overlay",transition:d?`opacity ${u}ms ease-out`:"none"};return m.jsx("div",{ref:b,style:y,onMouseMove:h,onMouseLeave:g,children:m.jsx("div",{style:P,children:i&&m.jsx("div",{style:$})})})};function HN(e={}){return{name:"depth-map",version:"1.0.0",config:e,hooks:{renderOverlay:t=>m.jsx(VN,{config:e,context:t})}}}const GN="DepthMapPlugin",qN="3D 视差深度效果：鼠标跟随的倾斜 / 视差 / 浮动 / 3D 旋转，带光泽与阴影，纯 CSS transforms 无依赖。",QN="2.0.0",KN=["interaction","视觉效果与交互","visual"],YN=[{name:"renderOverlay",when:"每次渲染，覆盖在图片容器之上",description:"骨架屏、错误占位、水印、加载动画"}],XN=[],ZN="只读取 context 字段（props / state / data），不调用上下文方法",JN=[{name:"style",type:'"tilt" | "parallax" | "float" | "rotate-3d"',default:'"tilt"',description:"深度效果样式"},{name:"intensity",type:"number",default:"0.5",description:"效果强度 0~1"},{name:"maxTilt",type:"number",default:"20",description:"最大倾斜角度"},{name:"enablePerspective",type:"boolean",default:"true",description:"启用透视效果"},{name:"perspective",type:"number",default:"1000",description:"透视距离（px）"},{name:"enableGlare",type:"boolean",default:"true",description:"启用光泽效果"},{name:"glareColor",type:"string",default:'"rgba(255, 255, 255, 0.3)"',description:"光泽颜色"},{name:"glareOpacity",type:"number",default:"0.5",description:"光泽不透明度 0~1"},{name:"enableShadow",type:"boolean",default:"true",description:"启用阴影"},{name:"transitionDuration",type:"number",default:"300",description:"过渡时长（毫秒）"},{name:"resetOnLeave",type:"boolean",default:"true",description:"离开时重置"}],eA=`// 1. 鼠标跟随倾斜
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
});`,tA=[{name:"tilt 倾斜（鼠标跟随）",description:"鼠标移动时图片随指针方向倾斜，带光泽高光，质感类似实体卡片。",src:"https://picsum.photos/id/122/400/300",config:{style:"tilt",maxTilt:15,intensity:.5,enableGlare:!0}},{name:"parallax 视差",description:"图片内部图层随鼠标产生位移差，营造纵深感。",src:"https://picsum.photos/id/129/400/300",config:{style:"parallax",intensity:.6,enablePerspective:!0,perspective:1e3}},{name:"rotate-3d 3D 旋转",description:"围绕多轴的 3D 旋转，配合阴影更具立体感。",src:"https://picsum.photos/id/133/400/300",config:{style:"rotate-3d",intensity:.7,enableShadow:!0,resetOnLeave:!0}},{name:"float 浮动",description:"轻微持续上下浮动的呼吸感，适合装饰性产品图。",src:"https://picsum.photos/id/142/400/300",config:{style:"float",intensity:.4,enableGlare:!1}}],nA=["4 种深度样式（倾斜 / 视差 / 浮动 / 3D 旋转）","鼠标跟随实时响应","光泽（glare）与阴影可开关并调参","透视距离可调","离开时一键重置（resetOnLeave）","纯 CSS transforms，无依赖"],oA=["产品 3D 展示","卡片悬浮交互","3D 封面 / 海报","作品集与个人主页","落地页英雄区","会员 / 旗舰商品位"],rA=["效果依赖鼠标移动产生视差，静态截图仅为初始平面态；移动设备体验有限，建议作为渐进增强。","intensity 与 maxTilt 控制幅度，强度过高在低端设备上可能引起卡顿，可按需下调。"],sA={name:GN,description:qN,since:QN,tags:KN,events:YN,methods:XN,methodsNote:ZN,config:JN,example:eA,examples:tA,features:nA,useCases:oA,notes:rA};async function iA(){var e;try{const t=navigator;if(t&&typeof t.getBattery=="function")return((e=await t.getBattery())==null?void 0:e.level)??null}catch{}return null}function aA(e,t){try{const n=new URL(e,window.location.href);return n.searchParams.set("w",String(t)),n.searchParams.set("auto","format"),n.searchParams.set("fit","crop"),n.toString()}catch{return e}}function lA(e){var t;return!!((t=e.networkInfo)!=null&&t.saveData)}function cA(e={}){const{enabled:t=!0,lowBatteryThreshold:n=.2,downgradeWidth:o=640,disablePreconnect:r=!0}=e;return{name:"battery-aware",version:"1.0.0",config:e,hooks:{onLoad:async s=>{if(!t)return;const i=await iA(),a=i!==null?i<=n:!1,l=lA(s);if(a||l)return aA(s.src,o)},transformProps:s=>{if(!t)return s;const i={...s};return i.loading="lazy",r&&(i["data-disable-preconnect"]="true"),i}}}}const uA="BatteryAwarePlugin",dA="电量感知：当设备电量低于阈值或开启省流模式时，自动将图片请求宽度降级并禁用预连接，兼顾体验与续航/流量。",pA="2.0.0",mA=["other","加载策略","性能","省流量"],gA=[{name:"onLoad",when:"加载流程开始、需要确定最终图片地址时",description:"自定义加载逻辑，返回最终图片 URL（objectURL / dataURL / 原地址）"},{name:"transformProps",when:"渲染前链式改写图片 props",description:"补 sizes / 占位色 / 解码策略等"}],fA=[],hA="只读取 context 字段（props / state / data），不调用上下文方法",yA=[{name:"enabled",type:"boolean",default:"true",description:"是否启用"},{name:"lowBatteryThreshold",type:"number",default:"0.2",description:"低电量阈值(0~1)"},{name:"downgradeWidth",type:"number",default:"640",description:"降级时的请求宽度(px)"},{name:"disablePreconnect",type:"boolean",default:"true",description:"低电量时是否禁用预连接"}],vA=`const BatteryImage = withPlugins(LazyLoadImageCore, [
  createBatteryAwarePlugin({ lowBatteryThreshold: 0.3, downgradeWidth: 480 }),
]);

<BatteryImage src="https://picsum.photos/id/1015/500/300" alt="电量感知示例" />;`,wA=[{name:"默认降级",description:"电量<20% 或省流时降宽至 640 并禁用预连接。",src:"https://picsum.photos/id/1015/500/300",config:{enabled:!0}},{name:"放宽阈值",description:"电量<30% 才降级，更保守。",src:"https://picsum.photos/id/1021/500/300",config:{lowBatteryThreshold:.3}},{name:"保留预连接",description:"disablePreconnect=false，降级时仍允许预连接。",src:"https://picsum.photos/id/1026/500/300",config:{disablePreconnect:!1}}],xA=["低电量自动降宽","省流模式联动","可禁用预连接","可关闭"],bA=["移动端续航优化","流量节省","弱网/低电场景","全球低端设备"],PA=["依赖 navigator.getBattery() 与网络 saveData；不支持的环境（如桌面/无该 API）不降级，不影响加载。"],$A={name:uA,description:dA,since:pA,tags:mA,events:gA,methods:fA,methodsNote:hA,config:yA,example:vA,examples:wA,features:xA,useCases:bA,notes:PA};function SA(e={}){const{enabled:t=!0}=e;return{name:"exif-orientation",version:"1.0.0",config:e,hooks:{transformProps:n=>{if(!t)return n;const o={...n.imageStyle||{},imageOrientation:"from-image"};return{...n,imageStyle:o}}}}}const CA="ExifOrientationPlugin",LA="EXIF 方向：根据图片自带的方向信息（EXIF Orientation）自动校正显示，避免手机竖拍照片横显。",IA="2.0.0",kA=["a11y","可访问性","加载策略"],_A=[{name:"transformProps",when:"渲染前链式改写图片 props",description:"补 sizes / 占位色 / 解码策略等"}],EA=[],RA="只读取 context 字段（props / state / data），不调用上下文方法",zA=[{name:"enabled",type:"boolean",default:"true",description:"是否启用方向校正"}],OA=`const OrientImage = withPlugins(LazyLoadImageCore, [
  createExifOrientationPlugin({ enabled: true }),
]);

<OrientImage src="https://picsum.photos/id/1015/500/300" alt="方向校正示例" />;`,DA=[{name:"启用方向校正（默认）",description:"imageOrientation: from-image，跟随 EXIF 方向。",src:"https://picsum.photos/id/1015/500/300",config:{enabled:!0}},{name:"关闭校正",description:"enabled=false 时不注入方向样式。",src:"https://picsum.photos/id/1021/500/300",config:{enabled:!1}}],MA=["按 EXIF Orientation 自动校正","imageOrientation: from-image","无需手动旋转","可关闭"],jA=["手机/相机照片","用户上传图","竖拍横显修复"],TA=["依赖浏览器对 image-orientation: from-image 的支持，现代浏览器均已支持。"],NA={name:CA,description:LA,since:IA,tags:kA,events:_A,methods:EA,methodsNote:RA,config:zA,example:OA,examples:DA,features:MA,useCases:jA,notes:TA};function Kp(e,t){return()=>{const[n,o]=N.useState(0);return N.useEffect(()=>{const r=()=>{try{const i=document.querySelectorAll(`link[id^="${e}"]`).length;o(i)}catch{}};r();const s=setInterval(r,400);return()=>clearInterval(s)},[]),m.jsxs("div",{style:{position:"absolute",top:8,left:8,background:"#1565c0",color:"#fff",fontSize:12,padding:"4px 8px",borderRadius:6,zIndex:6,pointerEvents:"none"},children:[t,"：",n]})}}function AA(e,t="image",n="anonymous"){const o=`lli-hoverprefetch-${t}-${e}`;try{if(typeof document>"u"||document.getElementById(o))return null;const r=document.createElement("link");return r.id=o,r.setAttribute("rel","preload"),r.setAttribute("as",t||"image"),r.setAttribute("href",e),n&&r.setAttribute("crossorigin",n),document.head.appendChild(r),o}catch{return null}}function BA(e){var t;try{if(typeof document>"u")return;(t=document.getElementById(e))==null||t.remove()}catch{}}function UA(e){const t=e.match(/(\d+)(?=[^\d]*$)/);if(!t)return;const n=t[0],o=parseInt(n,10);if(Number.isNaN(o))return;const r=e.replace(n,String(o+1));return r!==e?r:void 0}const FA=Kp("lli-hoverprefetch-","已预取");function WA(e={}){const{getNextSrc:t,target:n="container",trigger:o="mouseenter",as:r="image",max:s=2,dedupe:i=!0,crossOrigin:a="anonymous",showBadge:l=!1,debug:c=!1}=e,u=new Set,d=new Set,p=30,f=100;async function v(w){try{let b=t?await Promise.resolve(t(w)):void 0;if(b||(b=UA(w.src)),!b)return;(Array.isArray(b)?b:[b]).slice(0,Math.max(1,s)).forEach(h=>{if(i&&d.has(h))return;const g=AA(h,r,a);if(g&&u.add(g),d.add(h),c)try{console.debug("[HoverPrefetch] preload",{href:h,as:r})}catch{}})}catch(b){if(c)try{console.debug("[HoverPrefetch] error",b)}catch{}}}return{name:"hover-prefetch",version:"2.1.0",description:"悬停预取下一张图片；image 目标延迟绑定，preload link 在卸载时移除（P2-3）",config:e,hooks:{onMount:w=>{var I;const b=()=>v(w);let h=null,g=null,y=0;const P=()=>{var L,j;const k=(L=w.containerRef)==null?void 0:L.current,_=(j=w.imageRef)==null?void 0:j.current,S=n==="container"?k:_;return S?(S.addEventListener(o,b,{passive:!0}),h=()=>{try{S.removeEventListener(o,b)}catch{}},!0):!1},$=()=>{P()||n==="image"&&y<p&&(y+=1,g=setTimeout($,f))};$(),(I=w.sharedData)==null||I.set("hover-prefetch:cleanup",()=>{g&&clearTimeout(g),h&&h()})},onUnmount:w=>{var h,g;const b=(h=w.sharedData)==null?void 0:h.get("hover-prefetch:cleanup");if(typeof b=="function")try{b()}catch{}(g=w.sharedData)==null||g.delete("hover-prefetch:cleanup"),u.forEach(y=>BA(y)),u.clear(),d.clear()},renderOverlay:()=>l?N.createElement(FA):null}}}const VA="HoverPrefetchPlugin",HA="悬停预取：当用户将鼠标悬停（或触摸）在图片上时，提前向浏览器插入 preload 链接拉取下一张资源，实现零延迟切换。",GA="2.0.0",qA=["viewport","视口与交互","预取","性能"],QA=[{name:"onMount",when:"组件挂载完成、插件注册后执行一次（返回的清理函数在 manager.clear 时逆序执行）",description:"初始化副作用：注册监听、起定时器、建观察器；必须返回清理函数或配合 onUnmount 收尾"},{name:"onUnmount",when:"组件卸载前执行一次",description:"释放监听、定时器与观察器；与 onMount 成对出现，避免泄漏"},{name:"renderOverlay",when:"每次渲染，覆盖在图片容器之上",description:"骨架屏、错误占位、水印、加载动画"}],KA=[],YA="只读取 context 字段（props / state / data），不调用上下文方法",XA=[{name:"getNextSrc",type:"(context) => string | string[] | Promise<...>",default:"undefined",description:"计算需要预取的下一张图片（函数型，参见用法示例）"},{name:"target",type:'"container" | "image"',default:'"container"',description:"绑定事件的目标（容器或图片元素）"},{name:"trigger",type:'"mouseenter" | "touchstart"',default:'"mouseenter"',description:"触发事件类型"},{name:"as",type:'"image" | "fetch"',default:'"image"',description:"预取资源类型"},{name:"max",type:"number",default:"2",description:"预取的最大数量"},{name:"dedupe",type:"boolean",default:"true",description:"去重，避免重复插入相同的预取链接"},{name:"crossOrigin",type:'"anonymous" | "use-credentials" | null',default:'"anonymous"',description:"跨域策略"},{name:"showBadge",type:"boolean",default:"false",description:"是否在卡片上显示「已预取 N」徽标（便于观察注入效果）"},{name:"debug",type:"boolean",default:"false",description:"是否输出调试日志"}],ZA=`const PrefetchImage = withPlugins(LazyLoadImageCore, [
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
<PrefetchImage src="https://picsum.photos/id/1015/500/300" alt="悬停预取示例" />;`,JA=[{name:"容器悬停预取（默认）",description:"鼠标进入容器即插入 preload，预取下一张图片（默认按 URL 末尾数字派生），卡片左上角显示「已预取 N」。",src:"https://picsum.photos/id/1015/500/300",config:{target:"container",trigger:"mouseenter",max:2,as:"image",showBadge:!0}},{name:"图片悬停预取",description:"事件直接绑定在图片元素上。",src:"https://picsum.photos/id/1021/500/300",config:{target:"image",trigger:"mouseenter",max:1}},{name:"触摸预取",description:"移动端用 touchstart 触发预取。",src:"https://picsum.photos/id/1026/500/300",config:{target:"container",trigger:"touchstart",max:1}}],eB=["悬停 / 触摸即预取","容器或图片元素两种绑定目标","mouseenter / touchstart 两种触发","预取数量上限与去重","自定义跨域策略","调试日志输出"],tB=["商品画廊下一张预览","图片轮播预加载","列表项快速切换","移动端触摸预载"],nB=["必须提供 `getNextSrc` 才会真正预取；不传时只绑定事件、不产生请求。","`showBadge: true` 会在卡片上显示「已预取 N」，是验收该插件最直接的方式。"],oB={name:VA,description:HA,since:GA,tags:qA,events:QA,methods:KA,methodsNote:YA,config:XA,example:ZA,examples:JA,features:eB,useCases:tB,notes:nB};function rB(e,t){try{const n=new URL(e,window.location.href),o=n.host,r=n.searchParams;return/images\.unsplash\.com$/i.test(o)||/img\d+\.360buyimg\.com$/i.test(o)?(r.set("w",String(t)),r.set("auto","format"),r.set("fit","crop"),n.search=r.toString(),n.toString()):((!n.search||n.search==="")&&(n.search=`?w=${t}&auto=format&fit=crop`),n.toString())}catch{return e}}function sB(e={}){const{enabled:t=!0,deviceMemoryThreshold:n=4,preferOnMobile:o=!0,lowWidth:r=640,abortOnLeave:s=!0}=e,i=a=>{var d,p,f;const l=Number(((d=typeof navigator<"u"?navigator:void 0)==null?void 0:d.deviceMemory)||8),c=((p=a.deviceInfo)==null?void 0:p.type)==="mobile",u=!!((f=a.networkInfo)!=null&&f.saveData);return l&&l<=n||o&&c||u};return{name:"memory-pressure-abort",version:"2.0.0",config:e,hooks:{onLoad:a=>{if(t&&i(a))return rB(a.src,r)},onLeaveViewport:a=>{var c;if(!t||!s)return;const l=a.imageState;if(l&&l.isLoading)try{(c=a.reset)==null||c.call(a)}catch{}}}}}const iB="MemoryPressureAbortPlugin",aB="内存压力降级 + 离开中止（v2 真实实现）：低内存 / 移动端 / 省流时把图片重写为低清版本；离开视口且仍在加载时，调用 context.reset() 真正取消在途元素加载，回收内存。",lB="2.0.0",cB=["loading","加载策略","降质","中止","低端设备"],uB=[{name:"onLoad",when:"加载流程开始、需要确定最终图片地址时",description:"自定义加载逻辑，返回最终图片 URL（objectURL / dataURL / 原地址）"},{name:"onLeaveViewport",when:"元素离开视口",description:"暂停 / 中止在途请求、回收资源"}],dB=[{name:"reset",signature:"ctx.reset(): void",description:"重置到初始状态（清空错误与进度，不主动重新发起加载）"}],pB=[{name:"enabled",type:"boolean",default:"true",description:"是否启用"},{name:"deviceMemoryThreshold",type:"number",default:"4",description:"设备内存 ≤ 该阈值(GB)时启用降质"},{name:"preferOnMobile",type:"boolean",default:"true",description:"移动端或省流模式时强制启用降质"},{name:"lowWidth",type:"number",default:"640",description:"重写到的低清晰度宽度参数"},{name:"abortOnLeave",type:"boolean",default:"true",description:"离开视口且仍在加载时，是否中止在途加载（context.reset）"}],mB=`import { LazyLoadImageCore, createMemoryPressureAbortPlugin, withPlugins } from "vane-lazy-image";

const LazyImage = withPlugins(LazyLoadImageCore, [
  // 命中压力条件时降质；用户滑走仍在加载的图会被中止
  createMemoryPressureAbortPlugin({ lowWidth: 480 }),
]);

<LazyImage src="https://picsum.photos/seed/mem/1200/800" alt="内存压力降级示例" />`,gB=[{name:"默认降级 + 离开中止",description:"低内存/移动端/省流命中即低清；离开视口且在加载中的图会被 context.reset 取消。",src:"https://picsum.photos/seed/mem/1200/800",config:{}},{name:"激进降质",description:"更低宽度 + 移动端强制降质。",src:"https://picsum.photos/seed/mem-aggressive/1200/800",config:{lowWidth:320,deviceMemoryThreshold:8,preferOnMobile:!0}},{name:"仅降质不中止",description:"abortOnLeave=false，只做低清重写，不在离开时取消加载。",src:"https://picsum.photos/seed/mem-noabort/1200/800",config:{abortOnLeave:!1}}],fB=["三条件任一即触发低清重写（onLoad 返回改写 URL）","unsplash / 360buy 优化 w 参数；通用源附加 ?w&auto=format&fit=crop","离开视口且在加载 → context.reset() 真正取消元素在途加载","abortOnLeave 可开关"],hB=["低端设备防 OOM（降质）","快速滑动列表回收在途请求（中止）","弱网 / 省流节省流量"],yB=["中止通过 context.reset() 移除 <img> 元素来取消其下载，是图片元素层面的真实中止；若使用 FetchLoaderPlugin，可在 fetch 层进一步中断。","降质判定依赖 navigator.deviceMemory 与 deviceInfo.type。"],vB={name:iB,description:aB,since:lB,tags:cB,events:uB,methods:dB,config:pB,example:mB,examples:gB,features:fB,useCases:hB,notes:yB};function wB(e,t,n="anonymous"){if(!(typeof document>"u"))try{const o=`lli-preload-${t}-${e}`;if(document.getElementById(o))return;const r=document.createElement("link");r.id=o,r.rel="preload",r.setAttribute("as",t),r.href=e,n&&r.setAttribute("crossorigin",n),document.head.appendChild(r)}catch{}}function xB(e,t,n){const o=[],r=e.match(/(\d+)(?=[^\d]*$)/)||e.match(/(\d+)(?=[^\d]*[)\s]?$)/);if(!r)return o;const s=r[0];let i=parseInt(s,10);if(Number.isNaN(i))return o;const a=s.length;for(let l=1;l<=n&&(i=t==="increment"?i+l:i-l,!(i<0));l++){const c=e.replace(s,String(i).padStart(a,"0"));c!==e&&o.push(c)}return o}function bB(e={}){const{model:t="heuristic",strategy:n="increment",predict:o,maxPreload:r=3,as:s="image",crossOrigin:i="anonymous"}=e;return{name:"predictive-loading",version:"2.0.0",config:e,hooks:{onMount:a=>{try{(o?Promise.resolve(o(a)):Promise.resolve(xB(a.src,n,r))).then(l=>{(Array.isArray(l)?l.slice(0,r):[]).forEach(c=>wB(c,s,i))}).catch(()=>{})}catch{}}}}}const PB="PredictiveLoadingPlugin",$B='预测性预加载（v2 真实实现）：未提供 predict 时，内置启发式按 URL 末尾数字段递增/递减派生「下一张」并注入 <link rel="preload"> 预取；也可传入 predict 自定义预测目标。',SB="2.0.0",CB=["loading","加载策略","预取"],LB=[{name:"onMount",when:"组件挂载完成、插件注册后执行一次（返回的清理函数在 manager.clear 时逆序执行）",description:"初始化副作用：注册监听、起定时器、建观察器；必须返回清理函数或配合 onUnmount 收尾"}],IB=[],kB="只读取 context 字段（props / state / data），不调用上下文方法",_B=[{name:"model",type:'"heuristic" | "ml"',default:'"heuristic"',description:"预测模型；ml 当前同样走启发式（真正模型由 predict 提供）"},{name:"strategy",type:'"increment" | "decrement"',default:'"increment"',description:"内置启发式：派生方向（递增/递减 URL 末尾数字段）"},{name:"predict",type:"(context) => string[] | Promise<string[]>",default:"未设置（用内置启发式）",description:"自定义预测：返回需要预加载的图片链接列表，优先级高于内置启发式"},{name:"maxPreload",type:"number",default:"3",description:"单次最多预取数量"},{name:"as",type:'"image" | "fetch"',default:'"image"',description:"preload 资源类型"},{name:"crossOrigin",type:'"anonymous" | "use-credentials" | null',default:'"anonymous"',description:"跨域策略"}],EB=`const LazyImage = withPlugins(LazyLoadImageCore, [
  // 无 predict：内置启发式按 URL 末尾数字递增预取下 3 张
  createPredictiveLoadingPlugin({ model: "heuristic", strategy: "increment", maxPreload: 3 }),
]);

// 例：src=.../id/1015/ 会预取 .../id/1016/、1017/、1018/
<LazyImage src="https://picsum.photos/id/1015/500/300" alt="预测预加载示例" />;`,RB=[{name:"内置启发式递增",description:"按 URL 末尾数字递增派生下 3 张并预取（如相册下一页）。",src:"https://picsum.photos/id/1015/500/300",config:{model:"heuristic",strategy:"increment",maxPreload:3}},{name:"内置启发式递减",description:"递减派生上一张方向预取。",src:"https://picsum.photos/id/1020/500/300",config:{strategy:"decrement",maxPreload:3}},{name:"自定义预测",description:"用业务上下文决定预加载目标，限制为 3 张。",src:"https://picsum.photos/id/1018/500/300",config:{maxPreload:3}}],zB=["内置启发式真实派生「下一张」并注入 preload（非空头）","predict 自定义预测优先级更高","strategy 递增/递减可选","maxPreload 限制数量，相同 href 不重复注入"],OB=["相册 / 轮播：预加载下一张，切换无白屏","详情页：预加载相关推荐图"],DB=["仅注入 preload 提示，实际加载仍由浏览器调度；preload 在 Network 面板可见（见 HoverPrefetch 同类展示）。","URL 中无数字段时启发式无候选，可改用 predict 显式给出。"],MB={name:PB,description:$B,since:SB,tags:CB,events:LB,methods:IB,methodsNote:kB,config:_B,example:EB,examples:RB,features:zB,useCases:OB,notes:DB};function jB(e={}){const{priority:t="medium"}=e;return{name:"priority-loading",version:"1.0.0",config:e,hooks:{transformProps:n=>{switch(t){case"high":return{...n,loading:"eager",rootMargin:"0px"};case"low":return{...n,loading:"lazy",rootMargin:n.rootMargin??"400px"};case"medium":default:return{...n,loading:"lazy",rootMargin:n.rootMargin??"200px"}}}}}}const TB="PriorityLoadingPlugin",NB="优先级加载：按 high/medium/low 切换 eager/lazy 与 rootMargin。",AB="2.0.0",BB=["loading","加载策略"],UB=[{name:"transformProps",when:"渲染前链式改写图片 props",description:"补 sizes / 占位色 / 解码策略等"}],FB=[],WB="只读取 context 字段（props / state / data），不调用上下文方法",VB=[{name:"priority",type:'"high" | "medium" | "low"',default:'"medium"',description:"加载优先级：high→loading=eager / low→lazy+大 rootMargin / medium→lazy"}],HB=`// LCP / 首屏主图：立即加载
const HeroImage = withPlugins(LazyLoadImageCore, [
  createPriorityLoadingPlugin({ priority: "high" }),
]);

// 折叠区/长列表底部图：延后加载
const BelowImage = withPlugins(LazyLoadImageCore, [
  createPriorityLoadingPlugin({ priority: "low" }),
]);`,GB=[{name:"首屏 LCP 图（high）",description:"关键图立即 eager 加载，缩短最大内容绘制时间。",config:{priority:"high"}},{name:"折叠区图（low）",description:"非首屏图延后加载，rootMargin 更大，滚动临近才加载。",config:{priority:"low"}}],qB=["high → loading=eager、rootMargin=0，立即加载","low → loading=lazy、rootMargin 更大，更晚加载","medium → 默认 lazy + 适中 rootMargin（约 200px）"],QB=["把 LCP / 首屏主图设为 high","把长列表底部、折叠内容图设为 low，错峰加载"],KB=["仅调整 loading 与 rootMargin，不会阻塞其它插件生效。","与 ScrollIdle、ConcurrencyControl 叠加时可协同控制加载节奏。","rootMargin 会被合并进核心的 IntersectionObserver 参数。"],YB={name:TB,description:NB,since:AB,tags:BB,events:UB,methods:FB,methodsNote:WB,config:VB,example:HB,examples:GB,features:qB,useCases:QB,notes:KB};function Fc(e,t){try{const n=Math.max(1,Math.min(100,Math.round(t)));e.searchParams.set("q",String(n))}catch{}}function XB(){const e=typeof navigator<"u"?navigator:void 0;return(e==null?void 0:e.connection)||(e==null?void 0:e.mozConnection)||(e==null?void 0:e.webkitConnection)}function Wc(e){const t=rs();if(e.overrideSaveData??(t==null?void 0:t.saveData))return e.saveDataQuality??35;const n=e.overrideEffectiveType??(t==null?void 0:t.effectiveType)??"4g";return n==="slow-2g"||n==="2g"?e.lowQ??40:n==="3g"?e.lowQ??55:e.highQ??80}function ZB(e={}){return{name:"adaptive-quality",version:"1.0.0",config:e,hooks:{transformProps:t=>{const n={...t};try{const o=new URL(n.src,typeof window<"u"?window.location.origin:"http://localhost"),r=Wc(e);Fc(o,r),n.src=o.toString()}catch{}return n},onMount:t=>{var s,i,a,l;const{mode:n="once"}=e;if(n!=="realtime")return;const o=XB();if(!o)return;const r=c=>{var u;try{const d=(u=t.imageRef)==null?void 0:u.current,p=(d==null?void 0:d.src)||t.src,f=new URL(p,typeof window<"u"?window.location.origin:"http://localhost"),v=Wc(e);Fc(f,v),d?d.src=f.toString():t.src=f.toString()}catch{}};try{if(typeof o.addEventListener=="function")o.addEventListener("change",r),(s=t.sharedData)==null||s.set("aqp-handler",r),(i=t.sharedData)==null||i.set("aqp-conn",o);else if("onchange"in o){const c=o.onchange;o.onchange=u=>{try{typeof c=="function"&&c.call(o,u)}catch{}r(u)},(a=t.sharedData)==null||a.set("aqp-conn",o),(l=t.sharedData)==null||l.set("aqp-onchange-patched",!0)}}catch{}return()=>{var c,u,d;try{const p=(c=t.sharedData)==null?void 0:c.get("aqp-conn"),f=(u=t.sharedData)==null?void 0:u.get("aqp-handler");if(p&&f&&typeof p.removeEventListener=="function")p.removeEventListener("change",f);else if(p&&((d=t.sharedData)!=null&&d.get("aqp-onchange-patched")))try{p.onchange=null}catch{}}catch{}}}}}}const JB="AdaptiveQualityPlugin",eU="自适应画质：根据网络类型（effectiveType）与省流模式（saveData）动态调整图片质量参数，弱网/省流自动降质，支持 realtime 实时监听。",tU="2.0.0",nU=["other","网络","性能","省流量"],oU=[{name:"onMount",when:"组件挂载完成、插件注册后执行一次（返回的清理函数在 manager.clear 时逆序执行）",description:"初始化副作用：注册监听、起定时器、建观察器；必须返回清理函数或配合 onUnmount 收尾"},{name:"transformProps",when:"渲染前链式改写图片 props",description:"补 sizes / 占位色 / 解码策略等"}],rU=[],sU="只读取 context 字段（props / state / data），不调用上下文方法",iU=[{name:"lowQ",type:"number",default:"40(2g/3g)",description:"低速网络质量值(1~100)"},{name:"highQ",type:"number",default:"80(4g)",description:"高速网络质量值(1~100)"},{name:"saveDataQuality",type:"number",default:"35",description:"省流模式质量值(1~100)"},{name:"overrideEffectiveType",type:'"4g" | "3g" | "2g" | "slow-2g"',default:"undefined",description:"Demo/测试覆盖网络类型"},{name:"overrideSaveData",type:"boolean",default:"undefined",description:"Demo/测试覆盖省流开关"},{name:"mode",type:'"once" | "realtime"',default:'"once"',description:"once 仅初始一次 / realtime 监听变化"}],aU=`const AqImage = withPlugins(LazyLoadImageCore, [
  createAdaptiveQualityPlugin({ lowQ: 45, highQ: 85, mode: "realtime" }),
]);

<AqImage src="https://picsum.photos/id/1015/500/300" alt="自适应画质示例" />;`,lU=[{name:"默认一次性调速",description:"初始按网络设置质量，加载一次。",src:"https://picsum.photos/id/1015/500/300",config:{mode:"once"}},{name:"实时监听网络",description:"mode=realtime，网络变化时自动重新计算质量。",src:"https://picsum.photos/id/1021/500/300",config:{mode:"realtime"}},{name:"模拟弱网降质",description:"overrideEffectiveType=2g，演示低速下自动降质。",src:"https://picsum.photos/id/1026/500/300",config:{overrideEffectiveType:"2g",overrideSaveData:!0}}],cU=["按网络类型调速","省流模式降质","realtime 实时监听","手动覆盖（Demo）","质量参数可配"],uU=["弱网体验优化","流量节省","全球 CDN 适配","移动端画质策略"],dU=["overrideEffectiveType / overrideSaveData 仅用于 Demo 测试覆盖真实网络信息；质量参数通过 URL ?q= 注入，适用于支持该参数的图床。"],pU={name:JB,description:eU,since:tU,tags:nU,events:oU,methods:rU,methodsNote:sU,config:iU,example:aU,examples:lU,features:cU,useCases:uU,notes:dU};function mU(e){try{return new URL(e,typeof window<"u"?window.location.origin:"http://localhost").hostname}catch{return null}}function Vc(e,t,n){try{const o=new URL(e,typeof window<"u"?window.location.origin:"http://localhost");return o.searchParams.set(t,n),o.toString()}catch{const o=e.includes("?")?"&":"?";return`${e}${o}${encodeURIComponent(t)}=${encodeURIComponent(n)}`}}function gU(e={}){const{allowedDomains:t,checkReferer:n=!1,generateToken:o,tokenParam:r="token"}=e;return{name:"anti-hotlink",version:"1.0.0",config:e,hooks:{transformProps:s=>{if(Array.isArray(t)&&t.length>0){const l=mU(s.src);if(!l||!t.includes(l))return s}if(n&&typeof document<"u"&&!document.referrer){const l=Vc(s.src,"ref","direct");return{...s,src:l}}const i=o==null?void 0:o(s.src);if(!i)return s;const a=Vc(s.src,r,i);return{...s,src:a}}}}}const fU="AntiHotlinkPlugin",hU="防盗链：为图片 URL 追加动态签名 token 或 referer 标记，配合域名白名单与 referer 校验，防止资源被第三方直链盗用。",yU="2.0.0",vU=["network","网络","防盗链","签名"],wU=[{name:"transformProps",when:"渲染前链式改写图片 props",description:"补 sizes / 占位色 / 解码策略等"}],xU=[],bU="只读取 context 字段（props / state / data），不调用上下文方法",PU=[{name:"allowedDomains",type:"string[]",description:"域名白名单；仅放行列表内域，其余源原样通过"},{name:"checkReferer",type:"boolean",default:"false",description:"无 referrer 时附加 ref=direct 标记（仅浏览器环境有效）"},{name:"generateToken",type:"(src: string) => string | undefined",description:"为 URL 生成签名 token（函数型，仅顶层示例展示）"},{name:"tokenParam",type:"string",default:'"token"',description:"追加到查询参数的键名"}],$U=`import { LazyLoadImageCore, createAntiHotlinkPlugin, withPlugins } from "vane-lazy-image";

const LazyImage = withPlugins(LazyLoadImageCore, [
  createAntiHotlinkPlugin({
    generateToken: (src) => signSrc(src),
    tokenParam: "sig",
    allowedDomains: ["images.example.com"],
  }),
]);

<LazyImage src="https://images.example.com/photo.jpg" alt="防盗链示例" />`,SU=[{name:"白名单 + referer 校验",description:"仅放行 picsum.photos；无 referer 时附加 ref=direct 标记。",src:"https://picsum.photos/seed/hotlink/800/600",config:{allowedDomains:["picsum.photos"],checkReferer:!0}},{name:"仅域名白名单放行",description:"命中白名单则原样通过，否则不注入任何参数。",src:"https://picsum.photos/seed/hotlink-2/800/600",config:{allowedDomains:["picsum.photos"]}}],CU=["generateToken 为 URL 追加签名参数，防直链盗用","allowedDomains 白名单：仅放行指定域，其余原样通过","checkReferer：无 referrer 时附加 ref=direct 标记","通用参数追加兜底（无 URL 对象时拼接 query）"],LU=["OSS / 云存储等需签名才能访问的图片","限制仅本站 referer 可加载"],IU=["generateToken 为函数型，无法进入静态预览配置，仅顶层示例展示","allowedDomains 为空时对所有源注入 token","checkReferer 仅在浏览器环境有效"],kU={name:fU,description:hU,since:yU,tags:vU,events:wU,methods:xU,methodsNote:bU,config:PU,example:$U,examples:SU,features:CU,useCases:LU,notes:IU};function _U(e,t,n){try{e.searchParams.get(t)||e.searchParams.set(t,n)}catch{}}function EU(e={}){return{name:"auth",version:"1.0.0",config:e,hooks:{transformProps:t=>{const n={...t};try{const o=typeof e.token=="function"?e.token():e.token;if(o){const r=new URL(n.src,typeof window<"u"?window.location.origin:"http://localhost");_U(r,e.tokenParam??"token",o),n.src=r.toString()}e.crossOrigin&&(n.crossOrigin=e.crossOrigin),e.referrerPolicy&&(n.referrerPolicy=e.referrerPolicy)}catch{}return n}}}}const RU="AuthPlugin",zU="鉴权：为私有图片 URL 追加访问凭证 token（查询参数），并可配置 crossOrigin 与 referrerPolicy，满足需登录态才能访问的图片源鉴权需求。",OU="2.0.0",DU=["network","网络","鉴权","私有资源"],MU=[{name:"transformProps",when:"渲染前链式改写图片 props",description:"补 sizes / 占位色 / 解码策略等"}],jU=[],TU="只读取 context 字段（props / state / data），不调用上下文方法",NU=[{name:"token",type:"string | (() => string | undefined)",description:"访问凭证；支持函数动态获取（函数型仅顶层示例展示）"},{name:"tokenParam",type:"string",description:"追加到查询参数的键名"},{name:"crossOrigin",type:'"anonymous" | "use-credentials"',description:"img 的 crossOrigin 属性"},{name:"referrerPolicy",type:"React.HTMLAttributeReferrerPolicy",description:"img 的 referrerPolicy 属性"}],AU=`import { LazyLoadImageCore, createAuthPlugin, withPlugins } from "vane-lazy-image";

const LazyImage = withPlugins(LazyLoadImageCore, [
  createAuthPlugin({
    token: () => getAccessToken(),
    tokenParam: "token",
    crossOrigin: "anonymous",
  }),
]);

<LazyImage src="https://private.example.com/photo.jpg" alt="鉴权示例" />`,BU=[{name:"静态 token",description:"为图片 URL 追加固定访问凭证参数。",src:"https://picsum.photos/seed/auth/800/600",config:{token:"sk-demo-123",tokenParam:"token"}},{name:"跨域 + 无 referrer",description:"追加凭证的同时配置跨域与 referrer 策略。",src:"https://picsum.photos/seed/auth-2/800/600",config:{token:"sk-demo-123",crossOrigin:"anonymous",referrerPolicy:"no-referrer"}}],UU=["为图片 URL 追加 token 查询参数完成鉴权","支持 crossOrigin / referrerPolicy 跨域鉴权配置","token 支持函数动态获取（如刷新令牌）"],FU=["需登录态才能访问的私有图片 / 云存储","带鉴权的用户头像 / 相册"],WU=["token 函数型仅顶层示例展示；静态字符串可直接用于静态预览","与 AntiHotlink 区别：Auth 注入访问凭证，AntiHotlink 注入防盗链签名，二者可叠加","tokenParam 已存在则不重复追加"],VU={name:RU,description:zU,since:OU,tags:DU,events:MU,methods:jU,methodsNote:TU,config:NU,example:AU,examples:BU,features:UU,useCases:FU,notes:WU},yr="cdn-attempts",ti="cdn-index";function HU(e,t){try{const n=new URL(e,typeof window<"u"?window.location.origin:"http://localhost"),o=new URL(t);return n.protocol=o.protocol,n.hostname=o.hostname,n.port=o.port,n.toString()}catch{return e}}function GU(e){const t=e.cdnBases||[],n=Math.max(1,e.maxAttempts??t.length+1),o=e.cacheBust??!1;return{name:"cdn-fallback",version:"1.1.0",description:"原始地址加载失败后按顺序回退到 CDN，带尝试次数上限（P0-3）",config:e,hooks:{onLoadError:r=>{var l,c,u,d;if(!t.length)return!1;const s=Number(((l=r.sharedData)==null?void 0:l.get(yr))??0)+1;try{(c=r.sharedData)==null||c.set(yr,s)}catch{}if(s>=n)return!1;const i=(s-1)%t.length;try{(u=r.sharedData)==null||u.set(ti,i)}catch{}const a=(d=r.imageRef)==null?void 0:d.current;if(a){const p=HU(r.src,t[i]),f=o?`${p}${p.includes("?")?"&":"?"}cdnFallback=${s}`:p;try{a.src=f}catch{}}return!0},onSrcChange:(r,s)=>{var i,a;try{(i=r.sharedData)==null||i.set(yr,0),(a=r.sharedData)==null||a.set(ti,0)}catch{}},onUnmount:r=>{var s,i;try{(s=r.sharedData)==null||s.set(yr,0),(i=r.sharedData)==null||i.set(ti,0)}catch{}}}}}const qU="CDNFallbackPlugin",QU="CDN 回退：主 CDN 域名加载失败时，按序切换备用 CDN 域名（保留路径与查询参数），实现跨厂商容灾，避免单点故障导致破图。",KU="2.0.0",YU=["network","网络","CDN","容灾"],XU=[{name:"onUnmount",when:"组件卸载前执行一次",description:"释放监听、定时器与观察器；与 onMount 成对出现，避免泄漏"},{name:"onLoadError",when:"加载失败（网络错误、解码失败、超时）",description:"返回 true 表示错误已被处理（如切换备用源），否则继续走默认降级"},{name:"onSrcChange",when:"src 变化、切换到新图时",description:"重置状态、清理旧缓存、重新进入懒加载判定"}],ZU=[],JU="只读取 context 字段（props / state / data），不调用上下文方法",eF=[{name:"cdnBases",type:"string[]",description:'备用 CDN 基址列表，首个即主用 CDN。e.g. ["https://cdn1.example.com", "https://cdn2.example.com"]'}],tF=`import { LazyLoadImageCore, createCDNFallbackPlugin, withPlugins } from "vane-lazy-image";

const LazyImage = withPlugins(LazyLoadImageCore, [
  createCDNFallbackPlugin({
    cdnBases: ["https://cdn1.example.com", "https://cdn2.example.com"],
  }),
]);

<LazyImage src="https://cdn0.example.com/photo.jpg" alt="CDN 回退示例" />`,nF=[{name:"多 CDN 回退",description:"主用 picsum.photos 命中；真实故障场景填入备用域名可自动切换（演示用同源避免 404）。",src:"https://picsum.photos/seed/cdn/800/600",config:{cdnBases:["https://picsum.photos","https://fastly.picsum.photos"]}}],oF=["onLoad 用 cdnBases[0] 作为主用 CDN 重写 host","onLoadError 按序切换下一个 CDN 并改写 img.src 触发重试","切换时保留路径 / 查询参数，附加 cdnFallback 缓存破坏参数"],rF=["多活 CDN、跨云厂商容灾","主源站故障时无缝切到备用源"],sF=["cdnBases 为必填，首个即主用 CDN","演示用同源 CDN 避免 404；生产请填入真实备用域名，主域失败会自动切换","切换逻辑替换协议 / host / port，路径与 query 不变"],iF={name:qU,description:QU,since:KU,tags:YU,events:XU,methods:ZU,methodsNote:JU,config:eF,example:tF,examples:nF,features:oF,useCases:rF,notes:sF};function aF(e,t){try{const n=new URL(e,typeof window<"u"?window.location.origin:"http://localhost");return Object.entries(t).forEach(([o,r])=>{r!=null&&n.searchParams.set(o,String(r))}),n.toString()}catch{const n=Object.keys(t).filter(s=>t[s]!==void 0&&t[s]!==null);if(n.length===0)return e;const o=e.includes("?")?"&":"?",r=n.map(s=>`${encodeURIComponent(s)}=${encodeURIComponent(String(t[s]))}`).join("&");return`${e}${o}${r}`}}function lF(e={}){const{enabled:t=!0,maxWidth:n=1920,quality:o=.85,format:r="auto",widthParam:s="w",qualityParam:i="q",formatParam:a="format"}=e;return{name:"image-optimization",version:"1.0.0",config:e,hooks:{transformProps:l=>{if(!t)return l;try{const c=typeof window<"u"?Math.max(1,window.devicePixelRatio||1):1,u=typeof window<"u"&&window.innerWidth||n,d=Math.min(Math.round(u*c),n),p=aF(l.src,{[s]:d,[i]:Math.max(0,Math.min(1,o)),[a]:r});return{...l,src:p}}catch{return l}}}}}const cF="ImageOptimizationPlugin",uF="图片优化：自动追加宽度/质量/格式查询参数。",dF="2.0.0",pF=["network","网络"],mF=[{name:"transformProps",when:"渲染前链式改写图片 props",description:"补 sizes / 占位色 / 解码策略等"}],gF=[],fF="只读取 context 字段（props / state / data），不调用上下文方法",hF=[{name:"enabled",type:"boolean",default:"true",description:"是否启用 URL 改写优化"},{name:"maxWidth",type:"number",default:"1920",description:"最大宽度（像素）"},{name:"quality",type:"number",default:"0.85",description:"0..1"},{name:"format",type:'"auto" | "webp" | "jpg" | "png"',default:'"auto"',description:"目标格式；auto 交给浏览器 / CDN 协商"},{name:"widthParam",type:"string",default:'"w"',description:'例如 "w"'},{name:"qualityParam",type:"string",default:'"q"',description:'例如 "q"'},{name:"formatParam",type:"string",default:'"format"',description:'例如 "format"'}],yF=`const LazyImage = withPlugins(LazyLoadImageCore, [
  createImageOptimizationPlugin({
    maxWidth: 1200,
    quality: 0.8,
    format: "webp",
    widthParam: "w",
    qualityParam: "q",
    formatParam: "format",
  }),
]);`,vF=[{name:"自动 webp + 约束宽度",description:"自动选择最优格式（按 Accept 协商 webp），并把宽度限制在 1200。",config:{maxWidth:1200,quality:.8,format:"webp"}},{name:"固定 jpg 中质量",description:"统一输出 jpg、质量 0.7，适合对兼容性要求较高的场景。",config:{maxWidth:800,quality:.7,format:"jpg"}}],wF=["自动追加宽度 / 质量 / 格式查询参数","format=auto 按 Accept 头协商 webp","参数名可配置以适配不同 CDN / 图片网关"],xF=["任意源图统一走优化网关（imgix / 云存储样式）","响应式不同屏宽下发不同尺寸"],bF=["需图片服务支持对应参数，否则仅作为普通查询参数透传。","与 DataSaver 叠加时，省流质量会进一步覆盖此处质量。","format=auto 依赖浏览器 Accept 头，无需手动指定。"],PF={name:cF,description:uF,since:dF,tags:pF,events:mF,methods:gF,methodsNote:fF,config:hF,example:yF,examples:vF,features:wF,useCases:xF,notes:bF};function Hc(e){try{return new URL(e,typeof window<"u"?window.location.origin:"http://localhost").hostname}catch{return null}}async function $F(e,t){try{await fetch(e,{method:"POST",headers:{"Content-Type":"application/json"},body:JSON.stringify(t),keepalive:!0})}catch{}}const ni=new Map,SF=100;function vr(e,t,n){const o=`${t}:${n.src||""}`,r=Date.now(),s=ni.get(o)||0;if(!(r-s<SF))if(ni.set(o,r),setTimeout(()=>{ni.delete(o)},1e3),typeof e.report=="function")try{e.report(t,n)}catch{}else if(e.reportEndpoint)$F(e.reportEndpoint,{event:t,...n});else try{console.debug("[LLI][net]",t,n)}catch{}}function CF(e={}){return{name:"network-analytics",version:"1.0.0",config:e,hooks:{onMount:t=>{vr(e,"mount",{src:t.src,time:Date.now()})},onLoadSuccess:(t,n)=>{const o=e.trackCDN?Hc(t.src):null;vr(e,"load-success",{src:t.src,displaySrc:n,host:o,time:Date.now()})},onLoadError:(t,n)=>{const o=e.trackCDN?Hc(t.src):null,r=n instanceof Error?n.message:String(n||"unknown");return vr(e,"load-error",{src:t.src,message:r,host:o,time:Date.now()}),!1},onUnmount:t=>{vr(e,"unmount",{src:t.src,time:Date.now()})}}}}const LF="NetworkAnalyticsPlugin",IF="网络分析：上报加载耗时、成功率与 CDN 分布。",kF="2.0.0",_F=["network","网络"],EF=[{name:"onMount",when:"组件挂载完成、插件注册后执行一次（返回的清理函数在 manager.clear 时逆序执行）",description:"初始化副作用：注册监听、起定时器、建观察器；必须返回清理函数或配合 onUnmount 收尾"},{name:"onUnmount",when:"组件卸载前执行一次",description:"释放监听、定时器与观察器；与 onMount 成对出现，避免泄漏"},{name:"onLoadSuccess",when:"图片成功解码可显示时",description:"拿到最终 displaySrc 做后续动作（上报、预取下张、淡入）"},{name:"onLoadError",when:"加载失败（网络错误、解码失败、超时）",description:"返回 true 表示错误已被处理（如切换备用源），否则继续走默认降级"}],RF=[],zF="只读取 context 字段（props / state / data），不调用上下文方法",OF=[{name:"reportEndpoint",type:"string",description:"上报地址（POST JSON）；留空则只在本地统计"},{name:"report",type:"(event: string, data: Record<string, any>) => void",description:"自定义上报函数（若提供则优先使用）"},{name:"trackCDN",type:"boolean",description:"是否按图片域名分组统计，便于比较不同 CDN 表现"}],DF=`const LazyImage = withPlugins(LazyLoadImageCore, [
  createNetworkAnalyticsPlugin({
    trackCDN: true,
    report: (event, data) => {
      // event: "load" | "error" | "cache-hit" ...
      // data:  { src, durationMs, host, cached }
      analytics.track(event, data);
    },
  }),
]);`,MF=[{name:"本地调试上报",description:"未配置端点时写入 console，便于本地观察耗时与命中情况。",config:{trackCDN:!0}},{name:"上报到监控端点",description:"把事件 POST 到监控服务（keepalive，不阻塞页面卸载）。",config:{reportEndpoint:"https://api.example.com/lli",trackCDN:!0}}],jF=["上报加载耗时、成功率、CDN 分布","内置事件去重 + 100ms 防抖，避免刷屏","优先使用自定义 report 函数，其次 reportEndpoint"],TF=["线上图片加载性能监控","定位慢 CDN / 高失败率域名"],NF=["不提供 reportEndpoint 也不提供 report 时，默认 console.debug 输出。","上报事件含 src / host / durationMs / cached 等字段。","report 为函数，需在“用法示例”中以代码传入；静态预览使用纯配置（无端点时仅本地打点）。"],AF={name:LF,description:IF,since:kF,tags:_F,events:EF,methods:RF,methodsNote:zF,config:OF,example:DF,examples:MF,features:jF,useCases:TF,notes:NF};function BF(e,t){try{const n=new URL(e);return n.searchParams.set("w",String(t)),n.toString()}catch{return e.includes("?")?`${e}&w=${t}`:`${e}?w=${t}`}}function UF(e={}){const{enabled:t=!0,variants:n=[{width:400},{width:800},{width:1200}],buildSrc:o=BF,sizes:r="(max-width: 800px) 100vw, 800px"}=e;return{name:"responsive",version:"1.0.0",config:e,hooks:{transformProps:s=>{if(!t||!s.src)return s;const i=n.map(a=>`${a.src??o(s.src,a.width)} ${a.width}w`);return{...s,srcSet:s.srcSet??i.join(", "),sizes:s.sizes??r}},onLoadSuccess:(s,i)=>{var u;if(!t||i.startsWith("blob:")||i.startsWith("data:"))return;const a=(u=s.imageRef)==null?void 0:u.current;if(!a)return;const l=s.src,c=n.map(d=>`${d.src??o(l,d.width)} ${d.width}w`);try{a.getAttribute("srcset")||a.setAttribute("srcset",c.join(", ")),a.getAttribute("sizes")||a.setAttribute("sizes",r)}catch{}}}}}const FF="ResponsivePlugin",WF="响应式图片：注入 srcset/sizes 多宽度资源，浏览器按视口选择最佳尺寸，兼顾清晰度与流量。",VF="2.0.0",HF=["a11y","可访问性","网络","响应式"],GF=[{name:"onLoadSuccess",when:"图片成功解码可显示时",description:"拿到最终 displaySrc 做后续动作（上报、预取下张、淡入）"},{name:"transformProps",when:"渲染前链式改写图片 props",description:"补 sizes / 占位色 / 解码策略等"}],qF=[],QF="只读取 context 字段（props / state / data），不调用上下文方法",KF=[{name:"enabled",type:"boolean",default:"true",description:"是否启用响应式"},{name:"variants",type:"{ width: number; src?: string }[]",default:"[{400},{800},{1200}]",description:"宽度变体列表"},{name:"buildSrc",type:"(baseSrc, width) => string",default:"defaultBuildSrc（追加 ?w=）",description:"自定义链接生成（函数型，参见用法示例）"},{name:"sizes",type:"string",default:'"(max-width: 800px) 100vw, 800px"',description:"sizes 属性"}],YF=`const ResponsiveImage = withPlugins(LazyLoadImageCore, [
  createResponsivePlugin({
    variants: [{ width: 400 }, { width: 800 }, { width: 1200 }],
    sizes: "(max-width: 800px) 100vw, 800px",
    buildSrc: (base, w) => \`\${base}?w=\${w}\`,
  }),
]);

<ResponsiveImage src="https://picsum.photos/id/1015/500/300" alt="响应式示例" />;`,XF=[{name:"默认多宽度",description:"注入 400/800/1200 三档 srcset。",src:"https://picsum.photos/id/1015/500/300",config:{variants:[{width:400},{width:800},{width:1200}],sizes:"(max-width: 800px) 100vw, 800px"}},{name:"自定义尺寸档位",description:"仅 320/640 两档，适合轻量场景。",src:"https://picsum.photos/id/1021/500/300",config:{variants:[{width:320},{width:640}],sizes:"(max-width: 640px) 100vw, 640px"}},{name:"关闭响应式",description:"enabled=false 时不注入 srcset。",src:"https://picsum.photos/id/1026/500/300",config:{enabled:!1}}],ZF=["srcset 多宽度","自定义 buildSrc","sizes 响应式","自动适配屏幕/Retina","可关闭"],JF=["响应式画廊","移动端流量优化","Retina 高清","CMS 图片"],eW=["buildSrc 为函数型配置，静态预览使用默认追加 ?w= 策略；自定义用法见用法示例。"],tW={name:FF,description:WF,since:VF,tags:HF,events:GF,methods:qF,methodsNote:QF,config:KF,example:YF,examples:XF,features:ZF,useCases:JF,notes:eW};let oi=null;function nW(){return oi||(oi=new Promise(e=>{try{const t=document.createElement("canvas");t.width=1,t.height=1;const n=t.toDataURL("image/webp");e(typeof n=="string"&&n.indexOf("data:image/webp")===0)}catch{e(!1)}}),oi)}function oW(e,t){if(!t||t.length===0)return!0;try{const n=new URL(e);return t.some(o=>n.hostname.includes(o))}catch{return!1}}function rW(e,t){if(!t)return e;try{const n=new URL(e),[o,r]=t.split("=");return o&&n.searchParams.set(o,r??""),n.toString()}catch{return e.includes("?")?`${e}&${t}`:`${e}?${t}`}}function sW(e,t){const n=e.lastIndexOf(".");if(n<0)return e;const o=e.substring(n+1).toLowerCase();return t.includes(o)?`${e.substring(0,n)}.webp`:e}function iW(e={}){const{enabled:t=!0,rewrite:n,replaceExtensions:o=["jpg","jpeg","png"],appendQueryParam:r,onDomains:s,testSupport:i=!0}=e;return{name:"webp",version:"1.0.0",config:e,hooks:{onLoad:async a=>{var u,d;if(!t)return;const l=a.src;if(!oW(l,s)||i&&!await nW())return;let c;if(n)c=n(l,a);else{const p=sW(l,o);c=rW(p,r)}if(!(!c||c===l)){try{(u=a.sharedData)==null||u.set("webp:original",l),(d=a.sharedData)==null||d.set("webp:rewritten",c)}catch{}return c}},onLoadError:a=>{var d,p,f;const l=(d=a.sharedData)==null?void 0:d.get("webp:original"),c=(p=a.sharedData)==null?void 0:p.get("webp:rewritten"),u=(f=a.imageRef)==null?void 0:f.current;if(u&&l&&c&&u.src===c){try{u.src=l}catch{}return!0}return!1}}}}const aW="WebPPlugin",lW="WebP 优先：在支持 WebP 的环境中自动将图片重写为 .webp（或自定义链接），失败时回退原图，体积更小加载更快。",cW="2.0.0",uW=["other","网络","性能","WebP"],dW=[{name:"onLoad",when:"加载流程开始、需要确定最终图片地址时",description:"自定义加载逻辑，返回最终图片 URL（objectURL / dataURL / 原地址）"},{name:"onLoadError",when:"加载失败（网络错误、解码失败、超时）",description:"返回 true 表示错误已被处理（如切换备用源），否则继续走默认降级"}],pW=[],mW="只读取 context 字段（props / state / data），不调用上下文方法",gW=[{name:"enabled",type:"boolean",default:"true",description:"是否启用"},{name:"rewrite",type:"(src, ctx) => string | undefined",default:"undefined",description:"自定义重写函数：返回 webp 链接"},{name:"replaceExtensions",type:"string[]",default:'["jpg", "jpeg", "png"]',description:"需替换为 .webp 的扩展名"},{name:"appendQueryParam",type:"string",default:"undefined",description:'追加的查询参数，如 "format=webp"'},{name:"onDomains",type:"string[]",default:"[]（不限制）",description:"限定生效域名"},{name:"testSupport",type:"boolean",default:"true",description:"运行前检测浏览器是否支持 webp"}],fW=`const WebPImage = withPlugins(LazyLoadImageCore, [
  createWebPPlugin({
    replaceExtensions: ["jpg", "jpeg", "png"],
    testSupport: true,
  }),
]);

<WebPImage src="https://example.com/photo.jpg" alt="WebP 示例" />;`,hW=[{name:"默认 WebP 优化",description:"对支持的图床自动重写（本示例用无扩展名 URL，不触发改写，仅展示配置）。",src:"https://picsum.photos/id/1015/500/300",config:{enabled:!0}},{name:"限定域名",description:"仅在指定域名生效，避免误改其它资源。",src:"https://picsum.photos/id/1021/500/300",config:{onDomains:["cdn.example.com"]}},{name:"跳过支持检测",description:"testSupport=false 直接尝试改写（需图床确实提供 webp）。",src:"https://picsum.photos/id/1026/500/300",config:{testSupport:!1}}],yW=["自动 WebP 改写","扩展名替换","查询参数追加","域名限定","支持检测","失败回退原图"],vW=["图片体积优化","现代浏览器加速","CDN WebP 支持","流量节省"],wW=["启用后若 webp 链接加载失败会自动回退到原图，不会白屏；示例中的 picsum 链接无扩展名，不会触发扩展名改写，可安全预览。"],xW={name:aW,description:lW,since:cW,tags:uW,events:dW,methods:pW,methodsNote:mW,config:gW,example:fW,examples:hW,features:yW,useCases:vW,notes:wW};function bW({context:e,cfg:t}){if(!t.showDot||t.hideWhenOut&&!e.isIntersecting)return null;const n=t.dotPosition??"bottom-right",o={position:"absolute",width:10,height:10,borderRadius:999,background:e.isIntersecting?"#28a745":"#6c757d",zIndex:10};return n.includes("top")?o.top=6:o.bottom=6,n.includes("left")?o.left=6:o.right=6,m.jsx("div",{style:o,title:e.isIntersecting?"in-view":"out-of-view"})}function PW(e={}){const{rootMargin:t,threshold:n,once:o,unobserveOnVisible:r,showDot:s,dotPosition:i,hideWhenOut:a}=e,l=o!==void 0?o:r;return{name:"viewport-aware",version:"2.0.0",config:e,hooks:{transformProps:c=>({...c,...t!==void 0?{rootMargin:t}:null,...n!==void 0?{threshold:n}:null,...l!==void 0?{unobserveOnVisible:l}:null}),renderOverlay:c=>m.jsx(bW,{context:c,cfg:{showDot:s,dotPosition:i,hideWhenOut:a}}),onEnterViewport:c=>{var u,d;try{(d=(u=c.imageRef)==null?void 0:u.current)==null||d.setAttribute("data-in-view","1")}catch{}},onLeaveViewport:c=>{var u,d;try{(d=(u=c.imageRef)==null?void 0:u.current)==null||d.setAttribute("data-in-view","0")}catch{}}}}}const $W="ViewportAwarePlugin",SW="视口感知加载：真正把 IntersectionObserver 的 rootMargin / threshold / once 下发给核心，控制图片「提前多少距离 / 多灵敏」才触发加载，并在四角显示绿/灰指示点辅助观察。",CW="2.0.0",LW=["viewport","视口与交互","懒加载"],IW=[{name:"onEnterViewport",when:"元素进入视口（IntersectionObserver）",description:"触发懒加载、开始请求、曝光上报"},{name:"onLeaveViewport",when:"元素离开视口",description:"暂停 / 中止在途请求、回收资源"},{name:"transformProps",when:"渲染前链式改写图片 props",description:"补 sizes / 占位色 / 解码策略等"},{name:"renderOverlay",when:"每次渲染，覆盖在图片容器之上",description:"骨架屏、错误占位、水印、加载动画"}],kW=[],_W="只读取 context 字段（props / state / data），不调用上下文方法",EW=[{name:"rootMargin",type:"string",default:"未设置（沿用 Core 默认 0px）",description:'IO 边距，控制提前/延后触发。如 "200px" 表示进入视口前 200px 就开始加载（预加载），"-50px" 表示进入后再等 50px'},{name:"threshold",type:"number | number[]",default:"未设置",description:"IO 触发阈值（0~1），控制加载灵敏度"},{name:"once",type:"boolean",default:"true",description:"是否只加载一次：true=进入视口加载后停止观察（省资源）；false=持续观察"},{name:"unobserveOnVisible",type:"boolean",default:"由 once 推导",description:"显式下发，优先级高于 once"},{name:"showDot",type:"boolean",default:"false",description:"是否显示视口指示点（仅辅助观察，非核心能力）"},{name:"dotPosition",type:'"top-left" | "top-right" | "bottom-left" | "bottom-right"',default:'"bottom-right"',description:"指示点位置"},{name:"hideWhenOut",type:"boolean",default:"false",description:"离开视口时隐藏指示点"}],RW=`const ViewportImage = withPlugins(LazyLoadImageCore, [
  // 提前 200px 预加载，进入视口即就绪，滚动更顺滑
  createViewportAwarePlugin({ rootMargin: "200px", threshold: 0.01, showDot: true }),
]);

<ViewportImage src="https://picsum.photos/id/1015/500/300" alt="视口感知示例" />;`,zW=[{name:"提前预加载（rootMargin 200px）",description:"元素进入视口前 200px 就开始加载，滚到时图片已就绪，消除白屏。",src:"https://picsum.photos/id/1015/500/300",config:{rootMargin:"200px",threshold:.01,showDot:!0}},{name:"严格进入才加载（rootMargin 0px）",description:"默认行为：图片真正进入视口边缘才触发加载。",src:"https://picsum.photos/id/1024/500/300",config:{rootMargin:"0px",showDot:!0,dotPosition:"top-left"}},{name:"离开时隐藏指示点",description:"仅在进入视口显示绿点，离开后隐藏。",src:"https://picsum.photos/id/1035/500/300",config:{rootMargin:"100px",showDot:!0,dotPosition:"top-right",hideWhenOut:!0}}],OW=["rootMargin 真正下发，控制提前/延后加载距离","threshold 调节加载灵敏度","once / unobserveOnVisible 控制是否只加载一次","四角可选指示点（辅助观察真实 IO 状态）","onEnterViewport / onLeaveViewport 事件钩子"],DW=["长列表滚动预加载（rootMargin 提前量）","调试图片加载时机（配合指示点）","无限滚动 / 瀑布流场景","首屏 LCP 图片前的视口调度"],MW=["核心能力是 transformProps 把 IO 配置下发给核心，而不是装饰层；showDot 仅为观察辅助，可关闭。","once=false 仅表示持续观察，核心仍按加载状态只加载一次；如需「离开再回来重新加载」请配合 reload/reset 钩子。"],jW={name:$W,description:SW,since:CW,tags:LW,events:IW,methods:kW,methodsNote:_W,config:EW,example:RW,examples:zW,features:OW,useCases:DW,notes:MW};function TW(e={}){const{dwellMs:t=250,maxWaitMs:n=1500,onlyWhenIntersecting:o=!0,debug:r=!1}=e,s="viewport-dwell:inView";return{name:"viewport-dwell",version:"2.0.0",config:e,hooks:{onEnterViewport:i=>{var a;try{(a=i.sharedData)==null||a.set(s,!0)}catch{}if(r)try{console.debug("[ViewportDwell] enter",i.src)}catch{}},onLeaveViewport:i=>{var a;try{(a=i.sharedData)==null||a.set(s,!1)}catch{}if(r)try{console.debug("[ViewportDwell] leave",i.src)}catch{}},onBeforeLoad:async i=>{var c;const a=Date.now(),l=u=>new Promise(d=>setTimeout(d,u));if(r)try{console.debug("[ViewportDwell] gating",{src:i.src,dwellMs:t,maxWaitMs:n})}catch{}for(;;){const u=!!((c=i.sharedData)!=null&&c.get(s)),d=Date.now()-a;if(!u&&o&&d<n){if(r)try{console.debug("[ViewportDwell] aborted (left before dwell)",i.src)}catch{}return!1}if(d>=t){if(r)try{console.debug("[ViewportDwell] proceed",i.src,{elapsed:d})}catch{}return!0}await l(30)}},onUnmount:i=>{var a;try{(a=i.sharedData)==null||a.delete(s)}catch{}}}}}const NW="ViewportDwellPlugin",AW="视口驻留门控（v2 真实实现）：在真正加载前要求图片在视口内持续停留 dwellMs，快速划过（停留不足且离开）则中止加载；超过 maxWaitMs 后放行以防饥饿。",BW="2.0.0",UW=["viewport","视口与交互","驻留","省流量"],FW=[{name:"onUnmount",when:"组件卸载前执行一次",description:"释放监听、定时器与观察器；与 onMount 成对出现，避免泄漏"},{name:"onBeforeLoad",when:"发起图片请求之前",description:"返回 false 可阻断本次加载（如权限校验、占位策略）"},{name:"onEnterViewport",when:"元素进入视口（IntersectionObserver）",description:"触发懒加载、开始请求、曝光上报"},{name:"onLeaveViewport",when:"元素离开视口",description:"暂停 / 中止在途请求、回收资源"}],WW=[],VW="只读取 context 字段（props / state / data），不调用上下文方法",HW=[{name:"dwellMs",type:"number",default:"250",description:"需要在视口中持续停留的时间（毫秒），不足视为「划过」不加载"},{name:"maxWaitMs",type:"number",default:"1500",description:"最长等待时间（毫秒），超时仍允许加载以防饥饿"},{name:"onlyWhenIntersecting",type:"boolean",default:"true",description:"仅在进入视口时应用驻留判断；离开且未达上限则中止"},{name:"debug",type:"boolean",default:"false",description:"是否输出调试日志"}],GW=`const DwellImage = withPlugins(LazyLoadImageCore, [
  // 停留不足 250ms 的划过不加载，长留才加载
  createViewportDwellPlugin({ dwellMs: 250, maxWaitMs: 1500 }),
]);

<DwellImage src="https://picsum.photos/id/1015/500/300" alt="视口驻留示例" />;`,qW=[{name:"默认驻留（250ms）",description:"划过即中止，停留足够才加载，提升命中率。",src:"https://picsum.photos/id/1015/500/300",config:{dwellMs:250}},{name:"延长驻留时间",description:"400ms 驻留门槛，适合快速浏览场景。",src:"https://picsum.photos/id/1021/500/300",config:{dwellMs:400}},{name:"开启调试日志",description:"控制台输出驻留门控过程，便于调参。",src:"https://picsum.photos/id/1026/500/300",config:{dwellMs:250,debug:!0}}],QW=["门控钩子真正延迟/中止加载（非空头）","驻留时间不足且离开 → 中止加载","maxWaitMs 饥饿保护（超时放行）","仅在进入视口时生效","调试日志输出"],KW=["无限滚动信息流","防止快速滑动误加载","节省带宽与请求数","提升有效加载命中率"],YW=["v2 起通过引擎 onBeforeLoad 门控真实生效（旧版写在被引擎丢弃的钩子上，实际未拦截）；与 ViewportAware 的 rootMargin 搭配可进一步调优触发时机。"],XW={name:NW,description:AW,since:BW,tags:UW,events:FW,methods:WW,methodsNote:VW,config:HW,example:GW,examples:qW,features:QW,useCases:KW,notes:YW};function ZW(e,t="Image"){try{const n=new URL(e,typeof window<"u"?window.location.origin:"http://localhost").pathname.replace(/\/+$/,"");return`${t} • ${n}`}catch{return t}}function JW(e={}){return{name:"alt-text",version:"1.0.0",config:e,hooks:{transformProps:t=>{const n=t.alt;if(typeof n=="string"&&n.trim().length>0)return t;const o=e.derive?e.derive(t.src):ZW(t.src,e.prefix??"Image");return{...t,alt:o}}}}}const eV="AltTextPlugin",tV="替代文本：当图片未提供 alt 时，按前缀或自定义 derive 函数自动生成 alt，提升可访问性与 SEO；已有 alt 则不覆盖。",nV="2.0.0",oV=["a11y","可访问性","SEO"],rV=[{name:"transformProps",when:"渲染前链式改写图片 props",description:"补 sizes / 占位色 / 解码策略等"}],sV=[],iV="只读取 context 字段（props / state / data），不调用上下文方法",aV=[{name:"derive",type:"(src: string) => string",default:"undefined",description:"自定义推导函数（函数型，参见用法示例）"},{name:"prefix",type:"string",default:'"Image"',description:'默认推导前缀（如 "Image"）'}],lV=`const AltImage = withPlugins(LazyLoadImageCore, [
  createAltTextPlugin({
    derive: (src) => \`图片 \${new URL(src).pathname}\`,
  }),
]);

// 不传 alt 时自动补全；传了 alt 则不覆盖
<AltImage src="https://picsum.photos/id/1015/500/300" alt="" />;`,cV=[{name:"默认前缀派生",description:"不传 alt，按 prefix 自动生成 alt。",src:"https://picsum.photos/id/1015/500/300",config:{prefix:"产品图"}},{name:"已有 alt 不覆盖",description:"传入 alt 时插件保留原值，不做替换。",src:"https://picsum.photos/id/1021/500/300",config:{prefix:"Image"}}],uV=["alt 缺失自动派生","自定义前缀","自定义 derive 函数","不覆盖已有 alt"],dV=["批量图片 alt 补全","SEO 优化","读屏适配","用户未填 alt 兜底"],pV=["derive 为函数型配置，静态预览仅支持 prefix；函数用法见用法示例。"],mV={name:eV,description:tV,since:nV,tags:oV,events:rV,methods:sV,methodsNote:iV,config:aV,example:lV,examples:cV,features:uV,useCases:dV,notes:pV};function gV(e={}){const{text:t="Error",position:n="top-right",bgColor:o="rgba(220, 53, 69, 0.85)",color:r="#fff",fontSize:s=12,padding:i="2px 6px",borderRadius:a=4,zIndex:l=100,persistAfterFallback:c=!0}=e;return{name:"error-badge",version:"1.0.0",config:e,hooks:{onLoadError:u=>{var d;try{(d=u.sharedData)==null||d.set("had-error",!0)}catch{}return!1},renderOverlay:u=>{var f;const d=!!((f=u.sharedData)!=null&&f.get("had-error"));if(!(u.imageState.isError||c&&d))return null;const p=typeof t=="function"?t(u):t;return m.jsx("div",{style:{position:"absolute",inset:0,pointerEvents:"none",zIndex:l},children:m.jsx("div",{style:{position:"absolute",background:o,color:r,fontSize:s,padding:i,borderRadius:a,lineHeight:1.2,fontWeight:600,...{"top-left":{top:8,left:8},"top-right":{top:8,right:8},"bottom-left":{bottom:8,left:8},"bottom-right":{bottom:8,right:8},center:{top:"50%",left:"50%",transform:"translate(-50%, -50%)"}}[n]},children:p})})}}}}const fV="ErrorBadgePlugin",hV="错误徽标：图片加载失败（或回退成功后）在指定角落显示错误徽标，便于在大批量图片列表中快速定位失败项。",yV="2.0.0",vV=["error","错误处理","错误反馈"],wV=[{name:"onLoadError",when:"加载失败（网络错误、解码失败、超时）",description:"返回 true 表示错误已被处理（如切换备用源），否则继续走默认降级"},{name:"renderOverlay",when:"每次渲染，覆盖在图片容器之上",description:"骨架屏、错误占位、水印、加载动画"}],xV=[],bV="只读取 context 字段（props / state / data），不调用上下文方法",PV=[{name:"text",type:"string | ((context: LazyImageContext) => string)",default:'"Error"',description:"徽标文字；支持函数按 ctx 动态生成（函数型仅顶层示例展示）"},{name:"position",type:'"top-left" | "top-right" | "bottom-left" | "bottom-right" | "center"',default:'"top-right"',description:"徽标定位角落"},{name:"bgColor",type:"string",default:'"rgba(220, 53, 69, 0.85)"',description:"背景色"},{name:"color",type:"string",default:'"#fff"',description:"文字颜色"},{name:"fontSize",type:"number",default:"12",description:"字号(px)"},{name:"padding",type:"string",default:'"2px 6px"',description:"内边距"},{name:"borderRadius",type:"number",default:"4",description:"圆角(px)"},{name:"zIndex",type:"number",default:"100",description:"层级，默认较高避免被其它覆盖层遮挡"},{name:"persistAfterFallback",type:"boolean",default:"true",description:"回退图加载成功后是否仍显示徽标"}],$V=`import { LazyLoadImageCore, createErrorBadgePlugin, withPlugins } from "vane-lazy-image";

const LazyImage = withPlugins(LazyLoadImageCore, [
  createErrorBadgePlugin({
    text: (ctx) => \`加载失败: \${ctx.src}\`,
    position: "bottom-right",
    bgColor: "rgba(220,53,69,0.9)",
  }),
]);

// 故意触发失败以观察徽标
<LazyImage src="https://invalid.example.com/x.png" alt="错误徽标示例" />`,SV=[{name:"默认错误徽标",description:"加载失败后，在右上角显示红底 Error 徽标。",src:"https://invalid.example.com/error-badge.png",config:{}},{name:"自定义文案与位置",description:"底部右侧、深色背景 + 高亮文字的失败徽标。",src:"https://invalid.example.com/error-badge-2.png",config:{text:"图片加载失败",position:"bottom-right",bgColor:"rgba(0,0,0,0.7)",color:"#ffd166"}}],CV=["加载或回退失败后，在图片角落显示错误徽标","支持 5 种定位（四角 + 居中）与背景/文字/字号/圆角定制","persistAfterFallback：回退图已显示仍保留徽标，便于排查","通过 sharedData 标记 had-error，与 FallbackImage / RetryOnError / ErrorOverlay 联动"],LV=["图片墙 / 商品列表快速识别加载失败项","大批量图片加载健康度可视化"],IV=["text 支持函数型 (ctx) => string，但函数无法进入静态预览配置，仅顶层示例展示","默认 zIndex=100，高于多数覆盖层，避免被遮挡","与 ErrorOverlay 区别：徽标是轻量角标，覆盖层是整图遮罩"],kV={name:fV,description:hV,since:yV,tags:vV,events:wV,methods:xV,methodsNote:bV,config:PV,example:$V,examples:SV,features:CV,useCases:LV,notes:IV};function _V({context:e,cfg:t}){var u;const{imageState:n,imageRef:o,src:r}=e,s=!!((u=e.sharedData)!=null&&u.get("had-error")),i=n.isError||(t.persistAfterFallback??!0)&&s,a=x.useMemo(()=>(typeof t.message=="function"?t.message(e):t.message)??"加载失败",[t.message,e]);if(!i)return null;const l=()=>{const d=o==null?void 0:o.current;if(d)try{const p=`${r}${r.includes("?")?"&":"?"}retry=${Date.now()}`;d.src=p}catch{}},c={position:"absolute",inset:0,background:t.background??"rgba(220, 53, 69, 0.18)",color:t.color??"#b00020",zIndex:t.zIndex??10,display:"flex",alignItems:"center",justifyContent:"center",pointerEvents:"auto",gap:8,fontSize:13,fontWeight:500};return m.jsxs("div",{style:c,children:[m.jsx("span",{children:a}),t.showRetry!==!1&&m.jsxs("button",{onClick:l,style:{padding:"4px 8px",fontSize:12},children:[" ",t.retryText??"重试"," "]})]})}function EV(e={}){return{name:"error-overlay",version:"1.0.0",config:e,hooks:{renderOverlay:t=>m.jsx(_V,{context:t,cfg:e})}}}const RV="ErrorOverlayPlugin",zV="错误覆盖层：图片加载失败时显示半透明遮罩与可选『重试』按钮，引导用户手动重试，适用于商品主图等关键图。",OV="2.0.0",DV=["error","错误处理","错误反馈","重试"],MV=[{name:"renderOverlay",when:"每次渲染，覆盖在图片容器之上",description:"骨架屏、错误占位、水印、加载动画"}],jV=[],TV="只读取 context 字段（props / state / data），不调用上下文方法",NV=[{name:"message",type:"string | ((context: LazyImageContext) => string)",default:"undefined（回退『加载失败』）",description:"遮罩提示文案；支持函数按 ctx 动态生成（函数型仅顶层示例展示）"},{name:"background",type:"string",default:'"rgba(220, 53, 69, 0.18)"',description:"遮罩背景色"},{name:"color",type:"string",default:'"#b00020"',description:"文字颜色"},{name:"zIndex",type:"number",default:"10",description:"遮罩层级"},{name:"showRetry",type:"boolean",default:"true",description:"是否显示重试按钮"},{name:"retryText",type:"string",default:'"重试"',description:"重试按钮文字"},{name:"persistAfterFallback",type:"boolean",default:"true",description:"回退图加载成功后是否仍显示遮罩"}],AV=`import { LazyLoadImageCore, createErrorOverlayPlugin, withPlugins } from "vane-lazy-image";

const LazyImage = withPlugins(LazyLoadImageCore, [
  createErrorOverlayPlugin({
    message: (ctx) => \`图片加载失败：\${ctx.src}\`,
    retryText: "点我重试",
  }),
]);

// 故意触发失败以观察遮罩与重试按钮
<LazyImage src="https://invalid.example.com/x.png" alt="错误覆盖层示例" />`,BV=[{name:"默认重试遮罩",description:"失败时整图遮罩 + 重试按钮（默认文案『重试』）。",src:"https://invalid.example.com/error-overlay.png",config:{retryText:"重试"}},{name:"自定义文案与配色",description:"深色遮罩 + 白色文字 + 自定义提示文案。",src:"https://invalid.example.com/error-overlay-2.png",config:{message:"图片暂时无法加载",background:"rgba(0,0,0,0.4)",color:"#fff"}}],UV=["失败时整图半透明遮罩 + 可选重试按钮","重试通过 cache-bust 参数（?retry=时间戳）重新请求，绕过缓存","自定义文案 / 背景 / 文字色 / 层级","persistAfterFallback：回退后仍显示遮罩"],FV=["商品主图 / 头图失败后友好提示并支持手动重试","与 RetryOnError 组合：自动重试 + 手动重试双保险"],WV=["showRetry 默认开启；message 支持函数型（仅顶层示例展示）","重试逻辑直接改写 img.src，不依赖外部状态","点击重试使用 Date.now() 做缓存破坏，确保重新发起请求"],VV={name:RV,description:zV,since:OV,tags:DV,events:MV,methods:jV,methodsNote:TV,config:NV,example:AV,examples:BV,features:UV,useCases:FV,notes:WV},ri=new Map,HV=1e3;function GV(e,t){const n=t.src||"",o=Date.now(),r=ri.get(n)||0;if(!(o-r<HV)){ri.set(n,o);try{if(e.report&&e.report(t),e.reportEndpoint){const s=new AbortController,i=setTimeout(()=>s.abort(),5e3);fetch(e.reportEndpoint,{method:"POST",headers:{"Content-Type":"application/json"},body:JSON.stringify(t),keepalive:!0,signal:s.signal}).catch(()=>{}).finally(()=>{clearTimeout(i)})}}catch{}setTimeout(()=>{ri.delete(n)},5e3)}}function qV(e={}){return{name:"error-tracking",version:"1.0.0",config:e,hooks:{onLoadError:(t,n)=>{var i,a,l;const o="error-count",r=Number(((i=t.sharedData)==null?void 0:i.get(o))??0)+1;(a=t.sharedData)==null||a.set(o,r);const s={src:t.src,message:n instanceof Error?n.message:String(n||"unknown"),stack:n instanceof Error?n.stack:void 0,time:Date.now(),network:t.networkInfo,device:t.deviceInfo,count:r};GV(e,s);try{(l=t.sharedData)==null||l.set("had-error",!0)}catch{}return!0},renderOverlay:t=>{var r;if(!e.showBadge)return null;const n=Number(((r=t.sharedData)==null?void 0:r.get("error-count"))??0);if(n<=0)return null;const o={position:"absolute",top:6,right:6,zIndex:10,fontSize:12,color:e.badgeColor??"#fff",background:e.badgeBg??"rgba(220,53,69,0.8)",padding:"2px 6px",borderRadius:4};return m.jsxs("div",{style:o,children:[e.badgeText??"Error"," × ",n]})}}}}const QV="ErrorTrackingPlugin",KV="错误追踪：在图片加载失败时上报失败详情（地址 / 错误信息 / 网络 / 设备 / 次数）到自定义函数或上报端点，并可显示错误计数角标，用于生产环境图片错误监控。",YV="2.0.0",XV=["error","错误处理","监控","可观测"],ZV=[{name:"onLoadError",when:"加载失败（网络错误、解码失败、超时）",description:"返回 true 表示错误已被处理（如切换备用源），否则继续走默认降级"},{name:"renderOverlay",when:"每次渲染，覆盖在图片容器之上",description:"骨架屏、错误占位、水印、加载动画"}],JV=[],e9="只读取 context 字段（props / state / data），不调用上下文方法",t9=[{name:"reportEndpoint",type:"string",description:"错误上报端点（POST JSON，带 5s 超时与 keepalive）"},{name:"report",type:"(payload: any) => void",description:"自定义上报函数（与端点二选一或并存）"},{name:"showBadge",type:"boolean",default:"false",description:"是否显示错误计数角标（需显式开启）"},{name:"badgeText",type:"string",default:'"Error"',description:"角标前缀文字"},{name:"badgeColor",type:"string",default:'"#fff"',description:"角标文字色"},{name:"badgeBg",type:"string",default:'"rgba(220,53,69,0.8)"',description:"角标背景色"}],n9=`import { LazyLoadImageCore, createErrorTrackingPlugin, withPlugins } from "vane-lazy-image";

const LazyImage = withPlugins(LazyLoadImageCore, [
  createErrorTrackingPlugin({
    report: (payload) => {
      console.warn("图片加载失败", payload);
    },
    showBadge: true,
  }),
]);

// 故意触发失败以观察上报与角标
<LazyImage src="https://invalid.example.com/x.png" alt="错误追踪示例" />`,o9=[{name:"错误计数角标",description:"开启角标，失败后右上角显示累计错误次数。",src:"https://invalid.example.com/error-tracking.png",config:{showBadge:!0,badgeText:"Err"}},{name:"端点上报",description:"失败后 POST 上报到采集端点（演示端点可能 404，代码已静默忽略）。",src:"https://invalid.example.com/error-tracking-2.png",config:{reportEndpoint:"/api/img-errors",showBadge:!0}}],r9=["onLoadError 采集 src / message / network / device / 累计次数","内置 1 秒防抖，避免高频重复上报","report 自定义函数 或 reportEndpoint 端点二选一 / 并存","可选角标显示错误次数"],s9=["生产环境图片错误率监控与告警","定位经常性失败的图片源 / CDN"],i9=["showBadge 默认 false，需显式开启才显示角标","端点上报带 5s 超时与 keepalive，页面卸载也能送达","report 为函数型，无法进入静态预览配置，仅顶层示例展示"],a9={name:QV,description:KV,since:YV,tags:XV,events:ZV,methods:JV,methodsNote:e9,config:t9,example:n9,examples:o9,features:r9,useCases:s9,notes:i9};function pn(e,...t){try{console.log(e,...t)}catch{}}function l9(e={}){const{enabled:t=!0,prefix:n="[LLI]"}=e;return{name:"event-logger",version:"1.0.0",config:e,hooks:{onBeforeLoad:o=>(t&&pn(n,"before-load",o.src),!0),onLoadSuccess:(o,r)=>{t&&pn(n,"load-success",{src:o.src,displaySrc:r})},onLoadError:(o,r)=>(t&&pn(n,"load-error",{src:o.src,error:r}),!0),onEnterViewport:o=>{t&&pn(n,"enter-viewport",o.src)},onLeaveViewport:o=>{t&&pn(n,"leave-viewport",o.src)},onProgress:(o,r)=>{t&&pn(n,"progress",r.percent)}}}}const c9="EventLoggerPlugin",u9="事件日志：在控制台记录图片加载全生命周期事件（before-load / load-success / load-error / enter-viewport / leave-viewport / progress），便于调试与监控。",d9="2.0.0",p9=["other","监控","调试"],m9=[{name:"onBeforeLoad",when:"发起图片请求之前",description:"返回 false 可阻断本次加载（如权限校验、占位策略）"},{name:"onLoadSuccess",when:"图片成功解码可显示时",description:"拿到最终 displaySrc 做后续动作（上报、预取下张、淡入）"},{name:"onLoadError",when:"加载失败（网络错误、解码失败、超时）",description:"返回 true 表示错误已被处理（如切换备用源），否则继续走默认降级"},{name:"onProgress",when:'加载进度更新（由 withPlugins 订阅 bus 的 "progress" 桥接）',description:"展示进度条 / 百分比；仅对支持进度上报的 loader 生效"},{name:"onEnterViewport",when:"元素进入视口（IntersectionObserver）",description:"触发懒加载、开始请求、曝光上报"},{name:"onLeaveViewport",when:"元素离开视口",description:"暂停 / 中止在途请求、回收资源"}],g9=[],f9="只读取 context 字段（props / state / data），不调用上下文方法",h9=[{name:"enabled",type:"boolean",default:"true",description:"是否启用日志"},{name:"prefix",type:"string",default:'"[LLI]"',description:"日志前缀，便于过滤"}],y9=`const LogImage = withPlugins(LazyLoadImageCore, [
  createEventLoggerPlugin({ prefix: "[IMG]" }),
]);

<LogImage src="https://picsum.photos/id/1015/500/300" alt="事件日志示例" />;`,v9=[{name:"默认日志",description:"使用默认 [LLI] 前缀记录全部事件。",src:"https://picsum.photos/id/1015/500/300",config:{enabled:!0}},{name:"自定义前缀",description:"改用 [IMG] 前缀，便于在控制台分组过滤。",src:"https://picsum.photos/id/1021/500/300",config:{prefix:"[IMG]"}},{name:"关闭日志",description:"enabled=false 时不输出任何日志。",src:"https://picsum.photos/id/1026/500/300",config:{enabled:!1}}],w9=["全生命周期事件记录","可自定义前缀","可关闭","零业务侵入"],x9=["调试加载流程","加载监控埋点","性能问题排查","教学演示"],b9=["仅用于开发/调试，生产环境建议按需关闭以避免控制台噪音。"],P9={name:c9,description:u9,since:d9,tags:p9,events:m9,methods:g9,methodsNote:f9,config:h9,example:y9,examples:v9,features:w9,useCases:x9,notes:b9};function $9({context:e,cfg:t}){const n=e.performanceData||{duration:void 0};if(!t.showOverlay||!e.imageState.isLoaded)return null;const o=t.overlayPosition??"top-right",r={position:"absolute",zIndex:9,background:t.background??"rgba(0,0,0,0.45)",color:t.color??"#fff",fontSize:12,padding:"2px 6px",borderRadius:4};return o.includes("top")&&(r.top=6),o.includes("bottom")&&(r.bottom=6),o.includes("left")&&(r.left=6),o.includes("right")&&(r.right=6),m.jsxs("div",{style:r,children:["Loaded in ",Math.round(n.duration||0)," ms"]})}function S9(e={}){const t=new Set,n=100,o=new Map;return{name:"performance-monitor",version:"1.0.0",config:e,hooks:{onLoadSuccess:r=>{if(t.has(r.src))return;const s=Date.now(),i=o.get(r.src)||0;if(s-i<n)return;o.set(r.src,s),t.add(r.src);const a=r.performanceData||{duration:0},l={src:r.src,durationMs:Math.round(a.duration||0),network:r.networkInfo,device:r.deviceInfo};try{e.onReport&&e.onReport(l)}catch{}},renderOverlay:r=>m.jsx($9,{context:r,cfg:e})}}}const C9="PerformanceMonitorPlugin",L9="性能监控：统计单张图片的加载耗时，可选在四角叠加实时展示耗时面板，并在加载完成时通过 onReport 上报。",I9="2.0.0",k9=["other","监控","性能"],_9=[{name:"onLoadSuccess",when:"图片成功解码可显示时",description:"拿到最终 displaySrc 做后续动作（上报、预取下张、淡入）"},{name:"renderOverlay",when:"每次渲染，覆盖在图片容器之上",description:"骨架屏、错误占位、水印、加载动画"}],E9=[],R9="只读取 context 字段（props / state / data），不调用上下文方法",z9=[{name:"showOverlay",type:"boolean",default:"true",description:"是否在图片上叠加耗时面板"},{name:"overlayPosition",type:'"top-left" | "top-right" | "bottom-left" | "bottom-right"',default:'"top-right"',description:"面板位置（四角）"},{name:"color",type:"string",default:'"#fff"',description:"文字色"},{name:"background",type:"string",default:'"rgba(0,0,0,0.45)"',description:"面板背景"},{name:"onReport",type:"(data: { src; durationMs; network?; device? }) => void",default:"undefined",description:"加载完成上报回调"}],O9=`const PerfImage = withPlugins(LazyLoadImageCore, [
  createPerformanceMonitorPlugin({
    overlayPosition: "bottom-left",
    onReport: (data) => console.log("perf", data),
  }),
]);

<PerfImage src="https://picsum.photos/id/1015/500/300" alt="性能监控示例" />;`,D9=[{name:"默认耗时面板",description:"右上角显示 Loaded in N ms。",src:"https://picsum.photos/id/1015/500/300",config:{showOverlay:!0}},{name:"左下角面板",description:"面板移动到左下角。",src:"https://picsum.photos/id/1021/500/300",config:{overlayPosition:"bottom-left"}},{name:"自定义配色",description:"蓝色背景 + 白字，突出展示。",src:"https://picsum.photos/id/1026/500/300",config:{background:"rgba(33,118,255,0.6)",color:"#fff"}}],M9=["加载耗时统计","四角面板可选","自定义配色","onReport 上报","防抖去重"],j9=["LCP/加载耗时测量","性能优化验证","监控告警","A/B 对比"],T9=["onReport 为函数型配置，静态预览仅展示面板；函数用法见用法示例。"],N9={name:C9,description:L9,since:I9,tags:k9,events:_9,methods:E9,methodsNote:R9,config:z9,example:O9,examples:D9,features:M9,useCases:j9,notes:T9};function A9(e={}){const{enabled:t=!0,showOverlay:n=!0,onReport:o}=e;return{name:"user-behavior",version:"1.0.0",config:e,hooks:{transformProps:r=>({...r,unobserveOnVisible:!1}),onMount:r=>{var s,i,a,l,c;if(t)try{(s=r.sharedData)==null||s.set("ub:clicks",0),(i=r.sharedData)==null||i.set("ub:dwell",0),(a=r.sharedData)==null||a.set("ub:enters",0),(l=r.sharedData)==null||l.set("ub:leaves",0),(c=r.sharedData)==null||c.set("ub:enterTs",0)}catch{}},onLoadSuccess:r=>{var a;if(!t)return;const s=(a=r.imageRef)==null?void 0:a.current;if(!s)return;s.__lliUBClicks=s.__lliUBClicks||0,s.__lliUBEnterTs=s.__lliUBEnterTs||0,s.__lliUBDwell=s.__lliUBDwell||0,s.__lliUBEnters=s.__lliUBEnters||0,s.__lliUBLeaves=s.__lliUBLeaves||0;const i=()=>{var l,c;s.__lliUBClicks+=1;try{const u=(((l=r.sharedData)==null?void 0:l.get("ub:clicks"))||0)+1;(c=r.sharedData)==null||c.set("ub:clicks",u)}catch{}};s.__lliUBClickHandler=i;try{s.addEventListener("click",i)}catch{}},onEnterViewport:r=>{var i,a,l,c;if(!t)return;const s=(i=r.imageRef)==null?void 0:i.current;s&&(s.__lliUBEnterTs=Date.now(),s.__lliUBEnters=(s.__lliUBEnters||0)+1);try{const u=(((a=r.sharedData)==null?void 0:a.get("ub:enters"))||0)+1;(l=r.sharedData)==null||l.set("ub:enters",u),(c=r.sharedData)==null||c.set("ub:enterTs",Date.now())}catch{}},onLeaveViewport:r=>{var i,a,l,c,u,d,p;if(!t)return;const s=(i=r.imageRef)==null?void 0:i.current;if(s){const f=s.__lliUBEnterTs||0;f&&(s.__lliUBDwell=(s.__lliUBDwell||0)+(Date.now()-f)),s.__lliUBEnterTs=0,s.__lliUBLeaves=(s.__lliUBLeaves||0)+1}try{const f=(((a=r.sharedData)==null?void 0:a.get("ub:leaves"))||0)+1;(l=r.sharedData)==null||l.set("ub:leaves",f);const v=((c=r.sharedData)==null?void 0:c.get("ub:enterTs"))||0;if(v){const w=(((u=r.sharedData)==null?void 0:u.get("ub:dwell"))||0)+(Date.now()-v);(d=r.sharedData)==null||d.set("ub:dwell",w),(p=r.sharedData)==null||p.set("ub:enterTs",0)}}catch{}},onUnmount:r=>{var f,v,w,b,h,g,y,P,$,I,k;if(!t)return;const s=(f=r.imageRef)==null?void 0:f.current;if(s&&s.__lliUBClickHandler)try{s.removeEventListener("click",s.__lliUBClickHandler)}catch{}const i=((v=r.sharedData)==null?void 0:v.get("ub:enterTs"))||0,a=(((w=r.sharedData)==null?void 0:w.get("ub:dwell"))||0)+(i?Date.now()-i:0),l=s?(s.__lliUBDwell||0)+(s.__lliUBEnterTs?Date.now()-s.__lliUBEnterTs:0):0,c=(s==null?void 0:s.__lliUBClicks)??(((b=r.sharedData)==null?void 0:b.get("ub:clicks"))||0),u=(s==null?void 0:s.__lliUBEnters)??(((h=r.sharedData)==null?void 0:h.get("ub:enters"))||0),d=(s==null?void 0:s.__lliUBLeaves)??(((g=r.sharedData)==null?void 0:g.get("ub:leaves"))||0),p={src:r.src,dwellMs:l||a||0,clicks:c,enters:u,leaves:d};try{o?o(p):console.log("[UserBehavior]",p)}catch{}s&&(delete s.__lliUBClickHandler,delete s.__lliUBClicks,delete s.__lliUBEnterTs,delete s.__lliUBDwell,delete s.__lliUBEnters,delete s.__lliUBLeaves);try{(y=r.sharedData)==null||y.delete("ub:clicks"),(P=r.sharedData)==null||P.delete("ub:dwell"),($=r.sharedData)==null||$.delete("ub:enters"),(I=r.sharedData)==null||I.delete("ub:leaves"),(k=r.sharedData)==null||k.delete("ub:enterTs")}catch{}},renderOverlay:r=>!t||!n?null:m.jsx(()=>{const[s,i]=N.useState({dwellMs:0,clicks:0,enters:0,leaves:0,inView:!1});return N.useEffect(()=>{let a=!0,l=0;const c=()=>{var w,b,h,g,y,P;if(!a)return;const u=(w=r.imageRef)==null?void 0:w.current,d=(u==null?void 0:u.__lliUBEnterTs)||0,p=((u==null?void 0:u.__lliUBDwell)||0)+(d?Date.now()-d:0),f=((b=r.sharedData)==null?void 0:b.get("ub:enterTs"))||0,v=(((h=r.sharedData)==null?void 0:h.get("ub:dwell"))||0)+(f?Date.now()-f:0);i({dwellMs:p||v||0,clicks:(u==null?void 0:u.__lliUBClicks)??(((g=r.sharedData)==null?void 0:g.get("ub:clicks"))||0),enters:(u==null?void 0:u.__lliUBEnters)??(((y=r.sharedData)==null?void 0:y.get("ub:enters"))||0),leaves:(u==null?void 0:u.__lliUBLeaves)??(((P=r.sharedData)==null?void 0:P.get("ub:leaves"))||0),inView:r.isIntersecting}),l=requestAnimationFrame(c)};return l=requestAnimationFrame(c),()=>{a=!1;try{cancelAnimationFrame(l)}catch{}}},[r]),m.jsxs("div",{style:{position:"absolute",top:8,right:8,background:"#1565c0",color:"#fff",fontSize:12,padding:"6px 8px",borderRadius:6,zIndex:5,boxShadow:"0 2px 8px rgba(0,0,0,0.2)",lineHeight:1.4},children:[m.jsxs("div",{style:{display:"flex",alignItems:"center",marginBottom:4},children:[(a=>m.jsx("span",{style:{display:"inline-block",width:8,height:8,borderRadius:8,background:a?"#4caf50":"#f44336",marginRight:6}}))(s.inView),m.jsx("strong",{children:"视口"})]}),m.jsxs("div",{children:["驻留：",Math.round(s.dwellMs/100)/10,"s"]}),m.jsxs("div",{children:["点击：",s.clicks]}),m.jsxs("div",{children:["进入：",s.enters,"，离开：",s.leaves]}),m.jsx("div",{style:{marginTop:4,opacity:.85},children:"提示：点击或慢慢滚动"})]})},{})}}}const B9="UserBehaviorPlugin",U9="用户行为：实时统计每张图片的视口驻留时长、点击次数、进入/离开次数，并在图片上叠加可视化面板，卸载时统一上报。",F9="2.0.0",W9=["viewport","视口与交互","数据","分析"],V9=[{name:"onMount",when:"组件挂载完成、插件注册后执行一次（返回的清理函数在 manager.clear 时逆序执行）",description:"初始化副作用：注册监听、起定时器、建观察器；必须返回清理函数或配合 onUnmount 收尾"},{name:"onUnmount",when:"组件卸载前执行一次",description:"释放监听、定时器与观察器；与 onMount 成对出现，避免泄漏"},{name:"onLoadSuccess",when:"图片成功解码可显示时",description:"拿到最终 displaySrc 做后续动作（上报、预取下张、淡入）"},{name:"onEnterViewport",when:"元素进入视口（IntersectionObserver）",description:"触发懒加载、开始请求、曝光上报"},{name:"onLeaveViewport",when:"元素离开视口",description:"暂停 / 中止在途请求、回收资源"},{name:"transformProps",when:"渲染前链式改写图片 props",description:"补 sizes / 占位色 / 解码策略等"},{name:"renderOverlay",when:"每次渲染，覆盖在图片容器之上",description:"骨架屏、错误占位、水印、加载动画"}],H9=[],G9="只读取 context 字段（props / state / data），不调用上下文方法",q9=[{name:"enabled",type:"boolean",default:"true",description:"是否启用统计与面板"},{name:"onReport",type:"(data: { src; dwellMs; clicks; enters; leaves }) => void",default:"undefined",description:"卸载时上报回调（默认打印到控制台）"},{name:"showOverlay",type:"boolean",default:"true",description:"是否在图片角落显示统计面板（生产版式建议关闭）"}],Q9=`const BehaviorImage = withPlugins(LazyLoadImageCore, [
  createUserBehaviorPlugin({
    onReport: (data) => {
      // 上报到分析后端
      console.log("behavior", data);
    },
  }),
]);

// 在组件中使用
<BehaviorImage src="https://picsum.photos/id/1015/500/300" alt="用户行为示例" />;`,K9=[{name:"默认统计面板",description:"右上角实时显示驻留、点击、进入/离开数据。",src:"https://picsum.photos/id/1015/500/300",config:{enabled:!0}},{name:"关闭统计",description:"enabled=false 时不渲染面板也不统计。",src:"https://picsum.photos/id/1021/500/300",config:{enabled:!1}}],Y9=["实时统计驻留时长","点击次数统计","进入 / 离开次数统计","视口状态指示（绿/红点）","卸载时统一上报","可通过 enabled 关闭"],X9=["内容热度分析","广告位效果评估","UX 研究与转化漏斗","图片曝光与互动埋点"],Z9=["统计结果在卸载时通过 `onReport` 上报（默认打印控制台），示例页用面板实时展示。","`enabled: false` 可整体关闭统计与面板，不影响图片加载。","showOverlay: false 只上报数据、不渲染角标，适合直接接入真实版式。"],J9={name:B9,description:U9,since:F9,tags:W9,events:V9,methods:H9,methodsNote:G9,config:q9,example:Q9,examples:K9,features:Y9,useCases:X9,notes:Z9},e7=Object.assign(a6,{meta:b6}),t7=Object.assign(P6,{meta:j6}),n7=Object.assign(N6,{meta:Z6}),o7=Object.assign(J6,{meta:mM}),r7=Object.assign(gM,{meta:kM}),s7=Object.assign(RM,{meta:HM}),i7=Object.assign(ND,{meta:JD}),a7=Object.assign(qM,{meta:aj}),l7=Object.assign(cj,{meta:$j}),c7=Object.assign(Sj,{meta:Nj}),u7=Object.assign(Bj,{meta:eT}),d7=Object.assign(tT,{meta:fT}),p7=Object.assign(PT,{meta:jT}),m7=Object.assign(AT,{meta:JT}),g7=Object.assign(e8,{meta:g8}),f7=Object.assign(y8,{meta:R8}),h7=Object.assign(O8,{meta:q8}),y7=Object.assign(Y8,{meta:uN}),v7=Object.assign(mN,{meta:IN}),w7=Object.assign(_N,{meta:WN}),x7=Object.assign(HN,{meta:sA}),b7=Object.assign(cA,{meta:$A}),P7=Object.assign(SA,{meta:NA}),$7=Object.assign(WA,{meta:oB}),S7=Object.assign(sB,{meta:vB}),C7=Object.assign(bB,{meta:MB}),L7=Object.assign(jB,{meta:YB}),I7=Object.assign(ZB,{meta:pU}),k7=Object.assign(gU,{meta:kU}),_7=Object.assign(EU,{meta:VU}),E7=Object.assign(GU,{meta:iF}),R7=Object.assign(lF,{meta:PF}),z7=Object.assign(CF,{meta:AF}),O7=Object.assign(UF,{meta:tW}),D7=Object.assign(iW,{meta:xW}),M7=Object.assign(PW,{meta:jW}),j7=Object.assign(TW,{meta:XW}),T7=Object.assign(JW,{meta:mV}),N7=Object.assign(gV,{meta:kV}),A7=Object.assign(EV,{meta:VV}),B7=Object.assign(qV,{meta:a9}),U7=Object.assign(l9,{meta:P9}),F7=Object.assign(S9,{meta:N9}),W7=Object.assign(A9,{meta:J9});function V7(e={}){const{ratio:t=4/3}=e;return{name:"aspect-ratio-spacer",version:"1.0.0",config:e,hooks:{transformProps:n=>{var r;const o=(r=n.containerStyle)==null?void 0:r.aspectRatio;return{...n,containerStyle:{...n.containerStyle||{},...o!==void 0?null:{aspectRatio:String(t)}}}},onMount:n=>{var r;const o=(r=n.containerRef)==null?void 0:r.current;if(o)try{o.style.aspectRatio||(o.style.aspectRatio=String(t))}catch{}}}}}const H7="AspectRatioSpacerPlugin",G7="宽高比占位：在容器上预留固定宽高比，图片加载前后保持布局稳定，杜绝 CLS（布局抖动）。",q7="2.0.0",Q7=["a11y","可访问性","视觉"],K7=[{name:"onMount",when:"组件挂载完成、插件注册后执行一次（返回的清理函数在 manager.clear 时逆序执行）",description:"初始化副作用：注册监听、起定时器、建观察器；必须返回清理函数或配合 onUnmount 收尾"},{name:"transformProps",when:"渲染前链式改写图片 props",description:"补 sizes / 占位色 / 解码策略等"}],Y7=[],X7="只读取 context 字段（props / state / data），不调用上下文方法",Z7=[{name:"ratio",type:"number",default:"4/3",description:"宽/高比，如 4/3、16/9，或直接传数字"}],J7=`const RatioImage = withPlugins(LazyLoadImageCore, [
  createAspectRatioSpacerPlugin({ ratio: 4 / 3 }),
]);

<RatioImage src="https://picsum.photos/id/1015/500/300" alt="宽高比占位示例" />;`,eH=[{name:"4:3 占位",description:"常见图文比例，加载前后无跳动。",src:"https://picsum.photos/id/1015/500/300",config:{ratio:1.3333}},{name:"16:9 占位",description:"视频/横幅比例。",src:"https://picsum.photos/id/1021/500/300",config:{ratio:1.7778}},{name:"正方形占位",description:"ratio=1，头像/方形卡片。",src:"https://picsum.photos/id/1026/500/300",config:{ratio:1}}],tH=["预留宽高比","基于 CSS aspect-ratio","防布局抖动（CLS）","任意比例"],nH=["瀑布流/列表占位","LCP 稳定","移动端响应式","避免滚动跳动"],oH=["ratio 在静态预览中建议传数字（如 1.3333 表示 4/3），便于配置表与查看源码展示。"],rH={name:H7,description:G7,since:q7,tags:Q7,events:K7,methods:Y7,methodsNote:X7,config:Z7,example:J7,examples:eH,features:tH,useCases:nH,notes:oH},sH=Object.assign(V7,{meta:rH});function iH(e={}){const{startBlur:t=8,endBlur:n=0,durationMs:o=400}=e;return{name:"blur-up",version:"1.0.0",config:e,hooks:{transformProps:r=>{var p,f,v,w;const s=(((p=r.imageStyle)==null?void 0:p.filter)||"").replace(/blur\([^)]*\)/,"").trim(),i=s?`${s} blur(${t}px)`:`blur(${t}px)`,a=(f=r.imageStyle)==null?void 0:f.transition,l=`${a&&/opacity\s*\d*ms/.test(a)?a:"opacity 180ms ease"}, filter ${o}ms ease`,c=(v=r.imageStyle)==null?void 0:v.willChange,u=c?`${c}, filter`:"filter",d=(w=r.imageStyle)==null?void 0:w.opacity;return{...r,imageStyle:{...r.imageStyle||{},...d===void 0?{opacity:1}:null,filter:i,transition:l,willChange:u}}},onBeforeLoad:r=>{var i;const s=(i=r.imageRef)==null?void 0:i.current;if(!s)return!0;try{const a=(s.style.filter||"").replace(/blur\([^)]*\)/,"").trim();s.__lliPrevFilterNoBlur=a;const l=a?`${a} blur(${t}px)`:`blur(${t}px)`;s.style.filter=l;const c=s.style.transition||"";s.style.transition=c?`${c}, filter ${o}ms ease`:`filter ${o}ms ease`}catch{}return!0},onLoadSuccess:r=>{var i;const s=(i=r.imageRef)==null?void 0:i.current;if(s)try{const a=s.__lliPrevFilterNoBlur??(s.style.filter||"").replace(/blur\([^)]*\)/,"").trim(),l=n>0?a?`${a} blur(${n}px)`:`blur(${n}px)`:a;s.style.filter=l}catch{}},onUnmount:r=>{var i;const s=(i=r.imageRef)==null?void 0:i.current;if(s)try{s.__lliPrevFilterNoBlur!==void 0&&(s.style.filter=s.__lliPrevFilterNoBlur||"",delete s.__lliPrevFilterNoBlur)}catch{}}}}}const aH="BlurUpPlugin",lH="模糊放大占位：加载期为图片注入 blur 滤镜，加载成功后过渡到清晰，避免「白屏 → 清晰图」的突兀切换。",cH="2.0.0",uH=["visual","视觉"],dH=[{name:"transformProps",when:"渲染前链式改写图片 props",description:"补 sizes / 占位色 / 解码策略等"}],pH=[],mH="只读取 context 字段（props / state / data），不调用上下文方法",gH=[{name:"startBlur",type:"number",default:"8",description:"起始模糊半径 px"},{name:"endBlur",type:"number",default:"0",description:"结束模糊半径 px"},{name:"durationMs",type:"number",default:"400",description:"过渡时长 ms"}],fH=`// 模糊渐显：从 8px 模糊过渡到清晰
const BlurImage = withPlugins(LazyLoadImageCore, [
  createBlurUpPlugin({
    startBlur: 8,
    endBlur: 0,
    durationMs: 450,
  }),
]);

<BlurImage src="https://picsum.photos/seed/blurup/600/400" alt="模糊渐显" />;`,hH=[{name:"柔和模糊渐显",description:"8px 起始模糊，450ms 平滑过渡到清晰。",src:"https://picsum.photos/seed/blurup-soft/600/400",config:{startBlur:8,endBlur:0,durationMs:450}},{name:"强模糊长过渡",description:"16px 大模糊，700ms 慢过渡，营造「水雾散去」感。",src:"https://picsum.photos/seed/blurup-strong/600/400",config:{startBlur:16,endBlur:0,durationMs:700}}],yH=["加载期模糊占位，避免白屏突兀","加载成功平滑过渡到清晰","起始 / 结束模糊与时长可调","常与 Skeleton / LQIP 配合"],vH=["图片画廊 / 相册","首屏大图加载","内容型站点图片过渡","与骨架屏互补的视觉占位"],wH=["与 Skeleton 叠加时建议 blur 图层级略高于骨架，过渡更自然。","durationMs 过大会让「清晰」显得迟缓，一般 300~500ms 为宜。"],xH={name:aH,description:lH,since:cH,tags:uH,events:dH,methods:pH,methodsNote:mH,config:gH,example:fH,examples:hH,features:yH,useCases:vH,notes:wH},bH=Object.assign(iH,{meta:xH}),PH="data:image/svg+xml;utf8,"+encodeURIComponent("<svg xmlns='http://www.w3.org/2000/svg' width='400' height='300'><rect width='100%' height='100%' fill='#eceff1'/><g fill='none' stroke='#90a4ae' stroke-width='6'><path d='M60 170 L140 170 L175 110 L235 210 L275 160 L340 160'/><circle cx='200' cy='225' r='8' fill='#90a4ae' stroke='none'/></g><text x='200' y='265' font-family='sans-serif' font-size='22' fill='#607d8b' text-anchor='middle'>离线占位</text></svg>");function $H(e={}){const{offlineSrc:t=PH,cacheName:n="vane-lazy-image-offline",warm:o=!0,showBadge:r=!0}=e,s=i=>i.networkInfo?i.networkInfo.online:typeof navigator<"u"?navigator.onLine:!0;return{name:"offline",version:"2.0.0",config:e,hooks:{onLoad:async i=>{if(s(i)){if(o&&typeof caches<"u")try{const a=await caches.open(n);if(!await a.match(i.src)){const l=await fetch(i.src);l&&l.ok&&await a.put(i.src,l.clone())}}catch{}return}if(typeof caches<"u")try{const a=await(await caches.open(n)).match(i.src);if(a){const l=await a.blob();return URL.createObjectURL(l)}}catch{}return t},renderOverlay:i=>!r||s(i)?null:m.jsx("div",{style:{position:"absolute",top:8,left:8,background:"#c62828",color:"#fff",fontSize:12,padding:"4px 8px",borderRadius:6,zIndex:6},children:"离线模式"})}}}const SH="OfflinePlugin",CH="离线降级（v2 真实实现）：在线时把资源预热进 Cache Storage；离线时优先从缓存取同域资源，否则回退 offlineSrc / 内置 SVG 占位图，并在离线时显示状态徽标。不再是纯提示层。",LH="2.0.0",IH=["loading","加载策略","离线","省流"],kH=[{name:"onLoad",when:"加载流程开始、需要确定最终图片地址时",description:"自定义加载逻辑，返回最终图片 URL（objectURL / dataURL / 原地址）"},{name:"renderOverlay",when:"每次渲染，覆盖在图片容器之上",description:"骨架屏、错误占位、水印、加载动画"}],_H=[],EH="只读取 context 字段（props / state / data），不调用上下文方法",RH=[{name:"offlineSrc",type:"string",default:"内置 SVG 离线占位图（data URI）",description:"离线且无缓存时回退的占位图，建议用 data URI 避免再次走网络"},{name:"cacheName",type:"string",default:"vane-lazy-image-offline",description:"Cache Storage 名称，用于预热与离线回退"},{name:"warm",type:"boolean",default:"true",description:"在线时是否把资源写入 Cache Storage 预热"},{name:"showBadge",type:"boolean",default:"true",description:"离线时是否显示「离线模式」徽标"}],zH=`import { LazyLoadImageCore, createOfflinePlugin, withPlugins } from "vane-lazy-image";

const LazyImage = withPlugins(LazyLoadImageCore, [
  // 离线时回退到内置占位图，并在离线时显示徽标
  createOfflinePlugin({}),
]);

// 同域资源在线时会自动预热，离线可直接从缓存读取
<LazyImage src="/images/photo.jpg" alt="离线降级示例" />`,OH=[{name:"默认离线降级",description:"在线正常加载并预热；断网后同域资源走缓存，跨域资源回退到内置 SVG 占位图，并出现「离线模式」徽标。",src:"https://picsum.photos/seed/offline/800/600",config:{}},{name:"自定义离线占位图",description:"指定 offlineSrc 作为断网回退图（建议 data URI）。",src:"https://picsum.photos/seed/offline2/800/600",config:{offlineSrc:"data:image/svg+xml;utf8,%3Csvg xmlns='http://www.w3.org/2000/svg' width='400' height='300'%3E%3Crect width='100%25' height='100%25' fill='%23ffe0b2'/%3E%3Ctext x='50%25' y='50%25' fill='%23e65100' text-anchor='middle' font-size='22'%3E无网络%3C/text%3E%3C/svg%3E"}},{name:"关闭徽标",description:"showBadge=false，仅做离线资源回退，不显示提示。",src:"https://picsum.photos/seed/offline3/800/600",config:{showBadge:!1}}],DH=["在线预热进 Cache Storage（真实写入）","离线从缓存读取同域资源","无缓存回退 offlineSrc / 内置 SVG 占位","在线 / 离线状态统一取自 GlobalContext（全 App 单处监听）+ 状态徽标","warm / showBadge 可开关"],MH=["弱网 / 断网时的优雅降级","离线优先 PWA 应用的图片缓存","省流用户避免无效请求"],jH=["跨域 no-cors 资源缓存后无法读取为 blob，因此跨域图片离线时会回退到 offlineSrc 占位图（预期降级）；同域资源可真正离线显示。","完整 Service Worker 级别离线由宿主应用负责，本插件提供组件级缓存/回退兜底。"],TH={name:SH,description:CH,since:LH,tags:IH,events:kH,methods:_H,methodsNote:EH,config:RH,example:zH,examples:OH,features:DH,useCases:MH,notes:jH},si=new Set,pa=new Set;async function Gc(e,t,n){if(si.has(e)||pa.has(e)){if(n)try{console.debug("[CachePrewarm] skipped (already in progress or cached)",e)}catch{}return}si.add(e);try{const o=new AbortController,r=setTimeout(()=>o.abort(),1e4),s=await fetch(e,{cache:"force-cache",signal:o.signal});if(clearTimeout(r),!s.ok)return;const i=await s.blob();if(t&&ss.set(e,i,200),await Hp.set(e,i,{dbName:"LLI-Cache",storeName:"images",debug:n}),pa.add(e),n)try{console.debug("[CachePrewarm] prewarmed",{src:e,size:i.size})}catch{}}catch(o){if(n&&(o==null?void 0:o.name)!=="AbortError")try{console.warn("[CachePrewarm] failed",o)}catch{}}finally{si.delete(e)}}const NH=({src:e})=>{const[t,n]=N.useState(!1);return N.useEffect(()=>{const o=()=>n(pa.has(e));o();const r=setInterval(o,400);return()=>clearInterval(r)},[e]),m.jsx("div",{style:{position:"absolute",top:8,left:8,background:t?"#2e7d32":"#b35c00",color:"#fff",fontSize:12,padding:"4px 8px",borderRadius:6,zIndex:6,pointerEvents:"none"},children:t?"已预热 ✓":"预热中…"})};function AH(e={}){const{enabled:t=!0,trigger:n="enter",preferMemory:o=!0,showBadge:r=!1,debug:s=!1}=e;return{name:"cache-prewarm",version:"2.0.0",config:e,hooks:{onMount:i=>{!t||n!=="mount"||ss.get(i.src)||Gc(i.src,o,s)},onEnterViewport:i=>{!t||n!=="enter"||ss.get(i.src)||Gc(i.src,o,s)},renderOverlay:i=>r?N.createElement(NH,{src:i.src}):null}}}const BH="CachePrewarmPlugin",UH="缓存预热：进入视口或挂载时把图片预热到内存/IDB 缓存。",FH="2.0.0",WH=["cache","缓存"],VH=[{name:"onMount",when:"组件挂载完成、插件注册后执行一次（返回的清理函数在 manager.clear 时逆序执行）",description:"初始化副作用：注册监听、起定时器、建观察器；必须返回清理函数或配合 onUnmount 收尾"},{name:"onEnterViewport",when:"元素进入视口（IntersectionObserver）",description:"触发懒加载、开始请求、曝光上报"},{name:"renderOverlay",when:"每次渲染，覆盖在图片容器之上",description:"骨架屏、错误占位、水印、加载动画"}],HH=[],GH="只读取 context 字段（props / state / data），不调用上下文方法",qH=[{name:"enabled",type:"boolean",default:"true",description:"是否启用预热"},{name:"trigger",type:'"enter" | "mount"',default:'"enter"',description:"触发时机：进入视口或挂载"},{name:"preferMemory",type:"boolean",default:"true",description:"预热时优先写内存"},{name:"debug",type:"boolean",default:"false",description:"是否输出预热调试日志"},{name:"showBadge",type:"boolean",default:"false",description:"是否在卡片上显示预热状态徽标（便于观察）"}],QH=`const LazyImage = withPlugins(LazyLoadImageCore, [
  createCachePrewarmPlugin({
    trigger: "enter",    // 进入视口即预热
    preferMemory: true,  // 优先写入内存缓存
  }),
]);`,KH=[{name:"进入视口预热",description:"图片刚进视口就提前取回并写入缓存，滚动时无等待、点击放大秒开。",config:{trigger:"enter",preferMemory:!0,showBadge:!0}},{name:"挂载即预热",description:"组件挂载即预热，适合首屏已知必看的图（如详情页主图）。",config:{trigger:"mount",preferMemory:!1}}],YH=["进入视口 / 挂载时提前 fetch 并写入 Memory / IDB 缓存","内置重入保护（prewarming / prewarmed 集合），避免重复预热","优先写入内存（objectURL），跨会话持久交给 IDB"],XH=["商品详情页主图：进入视口即预热，查看大图零延迟","轮播首图：挂载即预热，切换时无白屏"],ZH=["依赖 MemoryCachePlugin / IDBCachePlugin 提供底层存储。","预热失败或超时（10s）不影响正常加载，仅跳过预热。","与 CacheIDBPlugin 配合可实现“进入视口即落盘”。"],JH={name:BH,description:UH,since:FH,tags:WH,events:VH,methods:HH,methodsNote:GH,config:qH,example:QH,examples:KH,features:YH,useCases:XH,notes:ZH};function eG(e){const{fallbackSrc:t}=e;return{name:"fallback-image",version:"1.1.0",description:"失败后回退到占位图；每个 src 只回退一次，避免回退图自身失败导致死循环（P0-2）",config:e,hooks:{onLoadError:(n,o)=>{var i,a,l,c;try{(i=n.sharedData)==null||i.set("had-error",!0)}catch{}const r=`fallback-applied:${n.src}`;if((a=n.sharedData)!=null&&a.get(r))return!1;try{(l=n.sharedData)==null||l.set(r,!0)}catch{}const s=(c=n.imageRef)==null?void 0:c.current;if(!s)return!0;try{s.src=t}catch{}return!0}}}}const tG="FallbackImagePlugin",nG="兜底图：图片加载失败时自动切换到备用图片地址，避免出现破图空白，是最基础的失败降级手段。",oG="2.0.0",rG=["network","网络","兜底","降级"],sG=[{name:"onLoadError",when:"加载失败（网络错误、解码失败、超时）",description:"返回 true 表示错误已被处理（如切换备用源），否则继续走默认降级"}],iG=[],aG="只读取 context 字段（props / state / data），不调用上下文方法",lG=[{name:"fallbackSrc",type:"string",description:'兜底图地址，建议使用始终可访问的占位图或 data URI。e.g. "/404.jpg"'}],cG=`import { LazyLoadImageCore, createFallbackImagePlugin, withPlugins } from "vane-lazy-image";

const LazyImage = withPlugins(LazyLoadImageCore, [
  createFallbackImagePlugin({ fallbackSrc: "/404.jpg" }),
]);

<LazyImage src="https://invalid.example.com/broken.png" alt="兜底图示例" />`,uG=[{name:"基础兜底图",description:"原图失败 → 自动切换到兜底图正常显示（演示用始终可访问的占位图）。",src:"https://invalid.example.com/broken.png",config:{fallbackSrc:"https://picsum.photos/seed/fallback/400/300"}}],dG=["onLoadError 直接改写 img.src 为兜底地址","标记 had-error，供 ErrorBadge 等插件联动","兜底成功后仍可配合其它错误插件展示状态"],pG=["保证任何失败都不出现破图","与错误徽标 / 追踪组合，兜底 + 可观测"],mG=["fallbackSrc 为必填；建议使用始终可访问的占位图或 data URI，避免兜底本身再失败","兜底成功后若仍有 ErrorBadge(persistAfterFallback)，可继续显示徽标便于排查"],gG={name:tG,description:nG,since:oG,tags:rG,events:sG,methods:iG,methodsNote:aG,config:lG,example:cG,examples:uG,features:dG,useCases:pG,notes:mG},fG=Object.assign($H,{meta:TH}),hG=Object.assign(AH,{meta:JH}),yG=Object.assign(eG,{meta:gG}),vG=e=>{const t=(e==null?void 0:e.position)??"bottom",n=(e==null?void 0:e.bg)??"rgba(0,0,0,0.62)",o=(e==null?void 0:e.color)??"#fff";return{name:"caption",hooks:{renderOverlay(r){const s=r.src,i=typeof(e==null?void 0:e.text)=="function"?e==null?void 0:e.text(s):(e==null?void 0:e.text)??"";if(!i)return null;const a={position:"absolute",left:0,right:0,[t]:0,padding:"6px 10px",background:n,color:o,fontSize:12,zIndex:2,pointerEvents:"none"};return m.jsx("div",{style:a,children:i})}}}},wG="CaptionPlugin",xG="图片说明文字覆盖层，支持样式定制。",bG="2.0.0",PG=["visual","视觉"],$G=[{name:"renderOverlay",when:"每次渲染，覆盖在图片容器之上",description:"骨架屏、错误占位、水印、加载动画"}],SG=[],CG="只读取 context 字段（props / state / data），不调用上下文方法",LG=[{name:"text",type:"string | ((src?: string) => string)",default:'""',description:"说明文字；可传函数按 src 派生"},{name:"position",type:'"top" | "bottom"',default:'"bottom"',description:"文字位置"},{name:"bg",type:"string",default:"rgba(0,0,0,0.62)",description:"背景色"},{name:"color",type:"string",default:"#fff",description:"文字颜色"}],IG=`// 底部说明文字
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
});`,kG=[{name:"底部说明",description:"半透明黑底白字，落在图片底部作图注。",src:"https://picsum.photos/seed/cap-bottom/600/400",config:{text:"日落海岸线",position:"bottom"}},{name:"顶部标题条",description:"顶部深色背景条，作标题 / 分类标签。",src:"https://picsum.photos/seed/cap-top/600/400",config:{text:"Gallery • 2026",position:"top",bg:"rgba(0,0,0,0.6)",color:"#fff"}},{name:"暖色图注",description:"自定义暖色背景与文字色，贴合活动主题。",src:"https://picsum.photos/seed/cap-warm/600/400",config:{text:"限时特惠",position:"bottom",bg:"rgba(160,48,16,0.88)",color:"#fff"}}],_G=["顶部 / 底部两种位置","背景与文字颜色可定制","文本支持静态或函数动态派生","作为覆盖层渲染，不干扰图片本身"],EG=["图库 / 相册图注","新闻 / 博客配图说明","商品图标题条","活动海报角标文字"],RG=["text 传函数时可按 src 动态生成，但场景示例画廊使用静态文本以保证实时预览。","与 OverlayInfo 的区别：Caption 聚焦单一说明文案，OverlayInfo 更通用（任意文本 + 触发时机）。"],zG={name:wG,description:xG,since:bG,tags:PG,events:$G,methods:SG,methodsNote:CG,config:LG,example:IG,examples:kG,features:_G,useCases:EG,notes:RG},OG=e=>{const t=(e==null?void 0:e.buttonText)??"Open",n=(e==null?void 0:e.enableLightbox)??!0,o=(e==null?void 0:e.overlayZIndex)??10,r=(e==null?void 0:e.buttonStyle)??{};return{name:"gallery",hooks:{renderOverlay(s){return m.jsx(()=>{const[i,a]=N.useState(!1),[l,c]=N.useState(!1),u=()=>{if(n)a(!0);else{const d=s.src??"";d&&window.open(d,"_blank")}};return N.useEffect(()=>{const d=p=>{p.key==="Escape"&&a(!1)};return window.addEventListener("keydown",d),()=>window.removeEventListener("keydown",d)},[]),m.jsxs(m.Fragment,{children:[m.jsx("div",{style:{position:"absolute",inset:0,zIndex:o,pointerEvents:"auto",background:l?"rgba(0,0,0,0.08)":"transparent",transition:"background 160ms ease"},onMouseEnter:()=>c(!0),onMouseLeave:()=>c(!1),onClick:d=>{d.stopPropagation(),u()}}),m.jsx("button",{type:"button",style:{position:"absolute",top:8,right:8,zIndex:o+1,padding:"8px 12px",borderRadius:8,border:"none",background:"rgba(0,0,0,0.65)",color:"#fff",fontSize:13,boxShadow:"0 2px 6px rgba(0,0,0,0.25)",cursor:"pointer",...r},onClick:d=>{d.stopPropagation(),u()},children:t}),n&&i?m.jsx("div",{style:{position:"fixed",inset:0,background:"rgba(0,0,0,0.85)",display:"flex",alignItems:"center",justifyContent:"center",zIndex:9999,cursor:"zoom-out"},onClick:()=>a(!1),children:m.jsx("img",{src:s.src??"",alt:s.props.alt??"",style:{maxWidth:"90%",maxHeight:"90%"}})}):null]})},{})}}}},DG="GalleryPlugin",MG="画廊灯箱：图片上叠加打开按钮，进入灯箱或新窗口查看原图。",jG="2.0.0",TG=["visual","视觉"],NG=[{name:"renderOverlay",when:"每次渲染，覆盖在图片容器之上",description:"骨架屏、错误占位、水印、加载动画"}],AG=[],BG="只读取 context 字段（props / state / data），不调用上下文方法",UG=[{name:"buttonText",type:"string",default:'"Open"',description:"打开按钮文案"},{name:"enableLightbox",type:"boolean",default:"true",description:"是否启用内置灯箱"},{name:"overlayZIndex",type:"number",default:"10",description:"灯箱层叠顺序"},{name:"buttonStyle",type:"React.CSSProperties",default:"{}",description:"按钮自定义样式（缩略图场景可缩成小号半透明胶囊）"}],FG=`// 点击按钮进入灯箱查看大图
const GalleryImage = withPlugins(LazyLoadImageCore, [
  createGalleryPlugin({
    buttonText: "查看大图",
    enableLightbox: true,
    overlayZIndex: 20,
  }),
]);

<GalleryImage src="https://picsum.photos/seed/gallery/600/400" alt="画廊" />;`,WG=[{name:"灯箱预览",description:"叠加「查看大图」按钮，点击进入全屏灯箱看原图。",src:"https://picsum.photos/seed/gallery-lb/600/400",config:{buttonText:"查看大图",enableLightbox:!0,overlayZIndex:20}},{name:"新窗口打开",description:"关闭内置灯箱，点击按钮以新窗口打开原图。",src:"https://picsum.photos/seed/gallery-win/600/400",config:{buttonText:"Open",enableLightbox:!1}}],VG=["覆盖层打开按钮","内置灯箱查看大图（默认开启）","可改为新窗口打开","灯箱层级可调"],HG=["电商商品图放大查看","相册 / 作品集灯箱","详情页看图","地图 / 截图放大"],GG=["enableLightbox:false 时按钮以新窗口打开原图，适合轻量场景。","灯箱层级 overlayZIndex 需高于页面其它浮层，避免被遮挡。"],qG={name:DG,description:MG,since:jG,tags:TG,events:NG,methods:AG,methodsNote:BG,config:UG,example:FG,examples:WG,features:VG,useCases:HG,notes:GG},QG=e=>{const t=Math.max(1,(e==null?void 0:e.scale)??1.08),n=Math.max(0,(e==null?void 0:e.durationMs)??180);return{name:"hover-zoom",hooks:{onLoadSuccess(o){var a;const r=(a=o.imageRef)==null?void 0:a.current;if(!r)return;r.style.transition=`transform ${n}ms ease`;const s=()=>{r.style.transform=`scale(${t})`},i=()=>{r.style.transform="scale(1)"};r.__lliHoverEnter=s,r.__lliHoverLeave=i,r.addEventListener("mouseenter",s),r.addEventListener("mouseleave",i)},onUnmount(o){var a;const r=(a=o.imageRef)==null?void 0:a.current;if(!r)return;const s=r.__lliHoverEnter,i=r.__lliHoverLeave;s&&r.removeEventListener("mouseenter",s),i&&r.removeEventListener("mouseleave",i),r.style.transition="",r.style.transform=""}}}},KG="HoverZoomPlugin",YG="悬停放大：鼠标悬停时放大显示图片局部。",XG="2.0.0",ZG=["visual","视觉"],JG=[{name:"onUnmount",when:"组件卸载前执行一次",description:"释放监听、定时器与观察器；与 onMount 成对出现，避免泄漏"},{name:"onLoadSuccess",when:"图片成功解码可显示时",description:"拿到最终 displaySrc 做后续动作（上报、预取下张、淡入）"}],eq=[],tq="只读取 context 字段（props / state / data），不调用上下文方法",nq=[{name:"scale",type:"number",default:"1.08",description:"放大倍数"},{name:"durationMs",type:"number",default:"180",description:"过渡时长 ms"}],oq=`// 悬停放大 1.15 倍
const ZoomImage = withPlugins(LazyLoadImageCore, [
  createHoverZoomPlugin({ scale: 1.15, durationMs: 180 }),
]);

<ZoomImage src="https://picsum.photos/seed/hoverzoom/600/400" alt="悬停放大" />;`,rq=[{name:"悬停放大 1.15",description:"鼠标悬停放大到 1.15 倍，180ms 平滑过渡。",src:"https://picsum.photos/seed/hoverzoom-115/600/400",config:{scale:1.15,durationMs:180}},{name:"轻微放大",description:"克制的 1.08 倍，仅给一点点呼吸感。",src:"https://picsum.photos/seed/hoverzoom-108/600/400",config:{scale:1.08,durationMs:200}}],sq=["悬停平滑放大","放大倍数可调","过渡时长可调","常与 Caption / BorderGlow 叠加"],iq=["商品图悬停预览细节","相册悬停聚焦","卡片悬停微交互","与灯箱配合的轻量前奏"],aq=["放大会溢出原尺寸，通常需父容器 overflow:hidden 裁切，仅放大中心区域。","与 Transition 的 fromScale 不同，HoverZoom 仅在 hover 时触发。"],lq={name:KG,description:YG,since:XG,tags:ZG,events:JG,methods:eq,methodsNote:tq,config:nq,example:oq,examples:rq,features:sq,useCases:iq,notes:aq},qc="lli-skeleton-style",cq=`
@keyframes lli-skeleton-shimmer {
  0% { background-position: 200% 0; }
  100% { background-position: -200% 0; }
}
@keyframes lli-skeleton-pulse {
  0%, 100% { opacity: 0.85; }
  50% { opacity: 0.6; }
}
`;function uq(){if(!(typeof document>"u"))try{if(document.getElementById(qc))return;const e=document.createElement("style");e.id=qc,e.textContent=cq,document.head.appendChild(e)}catch{}}function dq({imageState:e,type:t="shimmer",backgroundColor:n="#e5e7eb",highlightColor:o="#f3f4f6",borderRadius:r=4,zIndex:s=2,showWhen:i="loading"}){if(!(i==="always"||e.isLoading))return null;uq();const a={position:"absolute",inset:0,borderRadius:r,overflow:"hidden",pointerEvents:"none",zIndex:s},l={width:"100%",height:"100%",backgroundImage:`linear-gradient(90deg, ${n} 0%, ${n} 35%, ${o} 50%, ${n} 65%, ${n} 100%)`,backgroundSize:"200% 100%",animation:"lli-skeleton-shimmer 1200ms ease-in-out infinite"};return m.jsx("div",{style:a,children:m.jsx("div",{style:t==="shimmer"?l:{width:"100%",height:"100%",background:n,animation:"lli-skeleton-pulse 1200ms ease-in-out infinite"}})})}function pq(e={}){return{name:"skeleton",version:"1.0.0",config:e,hooks:{renderOverlay:t=>m.jsx(dq,{imageState:t.imageState,type:e.type,backgroundColor:e.backgroundColor,highlightColor:e.highlightColor,borderRadius:e.borderRadius,zIndex:e.zIndex,showWhen:e.showWhen})}}}const mq="SkeletonPlugin",gq="骨架屏占位：加载期显示 shimmer/pulse 骨架动画。",fq="2.0.0",hq=["visual","视觉"],yq=[{name:"renderOverlay",when:"每次渲染，覆盖在图片容器之上",description:"骨架屏、错误占位、水印、加载动画"}],vq=[],wq="只读取 context 字段（props / state / data），不调用上下文方法",xq=[{name:"type",type:'"shimmer" | "pulse"',default:'"shimmer"',description:"动画类型"},{name:"backgroundColor",type:"string",default:"#e5e7eb",description:"底色"},{name:"highlightColor",type:"string",default:"#f3f4f6",description:"shimmer 高亮色"},{name:"borderRadius",type:"number",default:"6",description:"圆角 px"},{name:"zIndex",type:"number",default:"1",description:"层叠顺序"},{name:"showWhen",type:'"always" | "loading"',default:'"loading"',description:"何时显示"}],bq=`// 加载期 shimmer 骨架占位
const SkeletonImage = withPlugins(LazyLoadImageCore, [
  createSkeletonPlugin({
    type: "shimmer",
    borderRadius: 8,
    showWhen: "loading",
  }),
]);

<SkeletonImage src="https://picsum.photos/seed/skeleton/600/400" alt="骨架屏" />;`,Pq=[{name:"Shimmer 骨架",description:"流光骨架，提示内容加载中，圆角 8。",src:"https://picsum.photos/seed/skeleton-shimmer/600/400",config:{type:"shimmer",borderRadius:8,showWhen:"loading"}},{name:"Pulse 骨架",description:"呼吸式明暗变化，更克制的占位动画。",src:"https://picsum.photos/seed/skeleton-pulse/600/400",config:{type:"pulse",backgroundColor:"#eee",highlightColor:"#f5f5f5",borderRadius:8}}],$q=["shimmer（流光）/ pulse（呼吸）两种动画","底色 / 高亮色 / 圆角可调","加载完成自动淡出","零图片请求，首屏即见"],Sq=["列表 / 卡片加载占位","首屏骨架屏","与 BlurUp / LQIP 配合的兜底占位","弱网环境体验优化"],Cq=['showWhen:"loading" 表示仅在加载期显示，图片就绪后自动让位。',"与 BlurUp 叠加时，建议骨架层级低于模糊图（zIndex 较小）。"],Lq={name:mq,description:gq,since:fq,tags:hq,events:yq,methods:vq,methodsNote:wq,config:xq,example:bq,examples:Pq,features:$q,useCases:Sq,notes:Cq},Iq=Object.assign(vG,{meta:zG}),kq=Object.assign(OG,{meta:qG}),_q=Object.assign(QG,{meta:lq}),Eq=Object.assign(pq,{meta:Lq}),Rq={"top-left":{top:10,left:10},"top-right":{top:10,right:10},"bottom-left":{bottom:10,left:10},"bottom-right":{bottom:10,right:10}},ii=`
  @keyframes priceTagFadeIn {
    from { opacity: 0; transform: translateY(-10px); }
    to { opacity: 1; transform: translateY(0); }
  }
`;function zq({config:e,context:t}){const{price:n,currency:o="$",position:r="top-right",originalPrice:s,discount:i,showSavings:a=!1,style:l={},animate:c=!0,backgroundColor:u="#c62828",textColor:d="#fff",fetchPrice:p,loadingText:f="加载中...",errorText:v="价格获取失败"}=e,[w,b]=N.useState(null),[h,g]=N.useState(!!p),[y,P]=N.useState(!1);N.useEffect(()=>{if(!p)return;let L=!0;return(async()=>{try{g(!0),P(!1);const j=await p(t);L&&b(j)}catch(j){console.error("[PriceTagPlugin] fetchPrice failed:",j),L&&P(!0)}finally{L&&g(!1)}})(),()=>{L=!1}},[p,t]);const $=(w==null?void 0:w.price)??n,I=(w==null?void 0:w.originalPrice)??s,k=(w==null?void 0:w.discount)??i,_=a&&I!=null&&typeof $=="number"&&typeof I=="number"?I-$:null,S={position:"absolute",...Rq[r],backgroundColor:u,color:d,padding:"8px 12px",borderRadius:4,fontWeight:"bold",fontSize:16,boxShadow:"0 2px 8px rgba(0,0,0,0.15)",zIndex:10,animation:c?"priceTagFadeIn 0.3s ease-out":"none",...l};return h?m.jsxs(m.Fragment,{children:[m.jsx("div",{style:S,children:m.jsx("div",{style:{fontSize:14,opacity:.8},children:f})}),c&&m.jsx("style",{children:ii})]}):y?m.jsxs(m.Fragment,{children:[m.jsx("div",{style:{...S,backgroundColor:"#e74c3c"},children:m.jsx("div",{style:{fontSize:12},children:v})}),c&&m.jsx("style",{children:ii})]}):$==null&&$!==0?null:m.jsxs(m.Fragment,{children:[m.jsxs("div",{style:S,children:[k&&m.jsx("div",{style:{fontSize:11,fontWeight:"normal",marginBottom:2,opacity:.9},children:k}),m.jsx("div",{style:{display:"flex",alignItems:"baseline",gap:4},children:m.jsxs("span",{style:{fontSize:20},children:[o,$]})}),I!=null&&m.jsxs("div",{style:{fontSize:12,textDecoration:"line-through",opacity:.7,marginTop:2},children:[o,I]}),_!=null&&_>0&&m.jsxs("div",{style:{fontSize:11,marginTop:4,backgroundColor:"rgba(255,255,255,0.2)",padding:"2px 6px",borderRadius:2},children:["省 ",o,_.toFixed(2)]})]}),c&&m.jsx("style",{children:ii})]})}function Oq(e={}){return{name:"price-tag",version:"1.0.0",config:e,hooks:{renderOverlay:t=>t.imageState.isLoaded?m.jsx(zq,{config:e,context:t}):null}}}const Dq="PriceTagPlugin",Mq="商品价格标签：在图片上叠加价格信息，支持原价、折扣、节省金额、异步价格获取与淡入动画。",jq="2.0.0",Tq=["ecommerce","电商核心"],Nq=[{name:"renderOverlay",when:"每次渲染，覆盖在图片容器之上",description:"骨架屏、错误占位、水印、加载动画"}],Aq=[],Bq="只读取 context 字段（props / state / data），不调用上下文方法",Uq=[{name:"price",type:"number",default:"undefined",description:"当前价格"},{name:"currency",type:"string",default:'"$"',description:"货币符号"},{name:"position",type:'"top-left" | "top-right" | "bottom-left" | "bottom-right"',default:'"top-right"',description:"标签位置（四角）"},{name:"originalPrice",type:"number",default:"undefined",description:"原价（划线显示）"},{name:"discount",type:"string",default:"undefined",description:"折扣文案，如 “40% OFF”"},{name:"showSavings",type:"boolean",default:"false",description:"是否计算并显示节省金额"},{name:"backgroundColor",type:"string",default:'"#c62828"',description:"标签背景色"},{name:"textColor",type:"string",default:'"#fff"',description:"标签文字色"},{name:"animate",type:"boolean",default:"true",description:"淡入动画"},{name:"style",type:"React.CSSProperties",default:"{}",description:"自定义叠加样式"},{name:"fetchPrice",type:"(context) => Promise<{ price; originalPrice?; discount? }>",default:"undefined",description:"异步获取价格（API 集成）"},{name:"loadingText",type:"string",default:'"加载中..."',description:"异步加载文案"},{name:"errorText",type:"string",default:'"价格获取失败"',description:"异步失败文案"}],Fq=`// 1. 组装带价格标签的懒加载图片组件
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
});`,Wq=[{name:"完整价格信息（带折扣和节省金额）",description:"原价划线 + 折扣标签 + 自动计算节省金额，落在左下角。",src:"https://picsum.photos/id/180/400/300",config:{price:299.99,currency:"$",position:"bottom-left",originalPrice:499.99,discount:"40% OFF",showSavings:!0}},{name:"简单价格标签",description:"仅当前价 + 货币符号，落在左上角。",src:"https://picsum.photos/id/201/400/300",config:{price:1999,currency:"¥",position:"top-left"}},{name:"自定义样式价格标签",description:"自定义背景色 / 文字色 / 圆角与内边距。",src:"https://picsum.photos/id/250/400/300",config:{price:59.99,currency:"€",position:"bottom-right",backgroundColor:"#4ECDC4",textColor:"#1A535C",style:{borderRadius:"8px",padding:"12px 16px"}}},{name:"异步获取价格（模拟 API）",description:"真实场景通过 fetchPrice 异步拉取价格；示例以静态值代替，可见“查询价格 / 价格查询失败”状态（见用法示例中的 fetchPrice）。",src:"https://picsum.photos/id/260/400/300",config:{currency:"¥",position:"top-right",showSavings:!0,price:1299.99,originalPrice:1999,discount:"限时优惠"}}],Vq=["显示当前价格、原价、折扣标签","计算并显示节省金额","支持多种货币符号","4 个位置可选（四角）","淡入动画效果","完全自定义样式","支持异步价格数据获取（API 集成）","显示加载和错误状态"],Hq=["电商产品列表","促销活动页面","特价商品展示","移动端商城","从 API 动态获取价格的场景","跨境电商实时汇率转换"],Gq=["`fetchPrice` 返回后覆盖静态 `price`，接真实商品价格时用它，不必改组件。","配置 `originalPrice` 且高于 `price` 时展示划线价，`showSavings` 额外显示省额。"],qq={name:Dq,description:Mq,since:jq,tags:Tq,events:Nq,methods:Aq,methodsNote:Bq,config:Uq,example:Fq,examples:Wq,features:Vq,useCases:Hq,notes:Gq},Qc={new:{text:"NEW",bg:"#2e7d32",color:"#fff"},hot:{text:"HOT",bg:"#c4390f",color:"#fff"},sale:{text:"SALE",bg:"#c62828",color:"#fff"},limited:{text:"LIMITED",bg:"#6a1b9a",color:"#fff"},bestseller:{text:"BEST",bg:"#b35c00",color:"#fff"},custom:{text:"NEW",bg:"#1565c0",color:"#fff"}},Qq={"top-left":{top:10,left:10},"top-right":{top:10,right:10},"bottom-left":{bottom:10,left:10},"bottom-right":{bottom:10,right:10}},Kq=`
  @keyframes promoBadgeFadeIn {
    from { opacity: 0; transform: scale(0.8); }
    to { opacity: 1; transform: scale(1); }
  }
  @keyframes promoBadgePulse {
    0%, 100% { transform: scale(1); box-shadow: 0 2px 6px rgba(0,0,0,0.2); }
    50% { transform: scale(1.1); box-shadow: 0 4px 12px rgba(0,0,0,0.3); }
  }
`;let Yq=0;function Xq({config:e,context:t}){const{type:n="hot",text:o,position:r="top-left",color:s,backgroundColor:i,animate:a=!0,pulse:l=!1,ribbon:c=!1,style:u={}}=e,d=Qc[n]??Qc.hot,p=n==="custom"&&o?o:d.text,f=i??d.bg,v=s??d.color,w=c?{padding:"6px 16px",transform:r.includes("left")?"rotate(-45deg) translateX(-20px)":"rotate(45deg) translateX(20px)",transformOrigin:"center",boxShadow:"0 4px 12px rgba(0,0,0,0.3)",top:c?-5:10,left:c?-5:10,right:c?-5:10,bottom:c?-5:10}:{},b={position:"absolute",...Qq[r],backgroundColor:f,color:v,padding:c?"6px 16px":"4px 10px",borderRadius:c?2:4,fontWeight:"bold",fontSize:12,textTransform:"uppercase",letterSpacing:"0.5px",boxShadow:c?"0 4px 12px rgba(0,0,0,0.3)":"0 2px 6px rgba(0,0,0,0.2)",zIndex:10,animation:a?l?"promoBadgePulse 1.5s ease-in-out infinite":"promoBadgeFadeIn 0.4s ease-out":"none",...w,...u};return m.jsxs(m.Fragment,{children:[m.jsx("div",{style:b,children:p}),a&&m.jsx("style",{children:Kq})]})}function Zq(e={}){return{name:`promo-badge-${++Yq}`,version:"1.0.0",config:e,hooks:{renderOverlay:t=>t.imageState.isLoaded?m.jsx(Xq,{config:e,context:t}):null}}}const Jq="PromoBadgePlugin",eQ="促销角标：在商品图片上显示 NEW/HOT/SALE 等促销标签，支持脉冲动画和丝带样式，可叠加多个。",tQ="2.0.0",nQ=["ecommerce","电商核心"],oQ=[{name:"renderOverlay",when:"每次渲染，覆盖在图片容器之上",description:"骨架屏、错误占位、水印、加载动画"}],rQ=[],sQ="只读取 context 字段（props / state / data），不调用上下文方法",iQ=[{name:"type",type:'"new" | "hot" | "sale" | "limited" | "bestseller" | "custom"',default:'"hot"',description:"预设标签类型"},{name:"text",type:"string",default:"undefined",description:"自定义文案（type=custom 时生效）"},{name:"position",type:'"top-left" | "top-right" | "bottom-left" | "bottom-right"',default:'"top-left"',description:"角标位置（四角）"},{name:"backgroundColor",type:"string",default:"undefined",description:"背景色"},{name:"color",type:"string",default:"undefined",description:"文字色"},{name:"animate",type:"boolean",default:"true",description:"淡入动画"},{name:"pulse",type:"boolean",default:"false",description:"脉冲呼吸动画"},{name:"ribbon",type:"boolean",default:"false",description:"丝带样式（倾斜 45°）"},{name:"style",type:"React.CSSProperties",default:"{}",description:"自定义叠加样式"}],aQ=`// 1. 单个促销角标
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
<HotSaleImage src="https://picsum.photos/id/220/500/400" alt="促销商品" />;`,lQ=[{name:"NEW 新品标签",description:"左上角绿色 NEW 角标。",src:"https://picsum.photos/id/168/300/300",config:{type:"new",position:"top-left"}},{name:"HOT 热门标签（脉冲动画）",description:"右上角红色 HOT，带脉冲呼吸效果。",src:"https://picsum.photos/id/175/300/300",config:{type:"hot",position:"top-right",pulse:!0}},{name:"SALE 促销丝带",description:"右上角红色丝带（倾斜 45°）。",src:"https://picsum.photos/id/188/300/300",config:{type:"sale",position:"top-right",ribbon:!0}},{name:"LIMITED 限量标签",description:"右上角紫色 LIMITED，带脉冲。",src:"https://picsum.photos/id/196/300/300",config:{type:"limited",position:"top-right",pulse:!0}},{name:"BESTSELLER 畅销标签",description:"右下角橙色 BEST 角标。",src:"https://picsum.photos/id/203/300/300",config:{type:"bestseller",position:"bottom-right"}},{name:"自定义标签（VIP 专享）",description:"自定义文案、背景色与文字色。",src:"https://picsum.photos/id/211/300/300",config:{type:"custom",text:"VIP专享",position:"top-left",backgroundColor:"#FFD700",color:"#000"}},{name:"多个标签组合",description:"一张图同时叠加 NEW + SALE（丝带）+ HOT（脉冲），不同位置不同样式。",src:"https://picsum.photos/id/220/500/400",configs:[{type:"new",position:"top-left"},{type:"sale",position:"top-right",ribbon:!0},{type:"hot",position:"bottom-right",pulse:!0}]}],cQ=["6 种预设类型：NEW / HOT / SALE / LIMITED / BESTSELLER / custom","支持自定义文字、背景色、文字颜色","脉冲动画效果（吸引注意力）","丝带样式（倾斜 45°）","4 个位置可选（四角）","支持同一图片显示多个标签"],uQ=["新品上市标记","热销商品突出","促销活动标识","限时限量提醒","VIP / 会员专享"],dQ=["`type` 只是预设（new/hot/sale/limited/bestseller），`text` 可覆盖预设文案与颜色。","`ribbon: true` 渲染角部绶带，容器需 overflow:hidden 才不会溢出圆角。"],pQ={name:Jq,description:eQ,since:tQ,tags:nQ,events:oQ,methods:rQ,methodsNote:sQ,config:iQ,example:aQ,examples:lQ,features:cQ,useCases:uQ,notes:dQ},Kc={"in-stock":{text:"有货",bg:"#4CAF50",color:"#fff",icon:"✓"},"out-of-stock":{text:"缺货",bg:"#F44336",color:"#fff",icon:"✕"},"low-stock":{text:"库存紧张",bg:"#FF9800",color:"#fff",icon:"⚠"},"pre-order":{text:"预订",bg:"#2196F3",color:"#fff",icon:"🕐"}},mQ={"top-left":{top:10,left:10},"top-right":{top:10,right:10},"bottom-left":{bottom:10,left:10},"bottom-right":{bottom:10,right:10}},gQ=`
  @keyframes inventoryFadeIn {
    from { opacity: 0; transform: translateY(-5px); }
    to { opacity: 1; transform: translateY(0); }
  }
`;function fQ({config:e,context:t}){const{status:n,stockCount:o,lowStockThreshold:r=10,showBadge:s=!0,autoRefresh:i=!1,refreshInterval:a=3e4,fetchStock:l,onStatusChange:c,position:u="top-right",style:d={}}=e,[p,f]=N.useState(n),[v,w]=N.useState(o);if(N.useEffect(()=>{if(!i||!l)return;const y=setInterval(async()=>{try{const P=await l();P.status!==void 0&&f(P.status),P.count!==void 0&&w(P.count),P.status!==void 0&&(c==null||c(P.status))}catch(P){console.error("[InventoryStatusPlugin] fetchStock failed:",P)}},a);return()=>clearInterval(y)},[i,l,a,c]),!s)return null;let b=p??"in-stock";v!==void 0&&(v===0?b="out-of-stock":v<=r?b="low-stock":b!=="pre-order"&&(b="in-stock"));const h=Kc[b]??Kc["in-stock"],g={position:"absolute",...mQ[u],backgroundColor:h.bg,color:h.color,padding:"6px 12px",borderRadius:4,fontSize:13,fontWeight:600,boxShadow:"0 2px 8px rgba(0,0,0,0.15)",zIndex:10,display:"flex",alignItems:"center",gap:4,animation:"inventoryFadeIn 0.3s ease-out",...d};return m.jsxs(m.Fragment,{children:[m.jsxs("div",{style:g,children:[m.jsx("span",{children:h.icon}),m.jsx("span",{children:h.text}),v!==void 0&&b!=="out-of-stock"&&m.jsxs("span",{style:{marginLeft:4,fontSize:11,opacity:.9},children:["(",v,")"]})]}),m.jsx("style",{children:gQ})]})}function hQ(e={}){return{name:"inventory-status",version:"1.0.0",config:e,hooks:{renderOverlay:t=>t.imageState.isLoaded?m.jsx(fQ,{config:e,context:t}):null}}}const yQ="InventoryStatusPlugin",vQ="库存状态：实时显示商品库存状态（有货/低库存/缺货/预订），支持自动刷新和低库存预警。",wQ="2.0.0",xQ=["ecommerce","电商核心"],bQ=[{name:"renderOverlay",when:"每次渲染，覆盖在图片容器之上",description:"骨架屏、错误占位、水印、加载动画"}],PQ=[],$Q="只读取 context 字段（props / state / data），不调用上下文方法",SQ=[{name:"status",type:'"in-stock" | "out-of-stock" | "low-stock" | "pre-order"',default:'"in-stock"',description:"初始库存状态"},{name:"stockCount",type:"number",default:"undefined",description:"库存数量"},{name:"lowStockThreshold",type:"number",default:"10",description:"低库存阈值"},{name:"showBadge",type:"boolean",default:"true",description:"是否显示角标"},{name:"autoRefresh",type:"boolean",default:"false",description:"是否自动刷新库存"},{name:"refreshInterval",type:"number",default:"30000",description:"刷新间隔（毫秒）"},{name:"fetchStock",type:"() => Promise<{ status?; count? }>",default:"undefined",description:"自定义库存获取函数"},{name:"onStatusChange",type:"(status) => void",default:"undefined",description:"状态变更回调"},{name:"position",type:'"top-left" | "top-right" | "bottom-left" | "bottom-right"',default:'"top-right"',description:"角标位置"},{name:"style",type:"React.CSSProperties",default:"{}",description:"自定义叠加样式"}],CQ=`// 1. 静态库存状态
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
<StockImage src="https://picsum.photos/id/164/280/280" alt="商品图" />;`,LQ=[{name:"有货（100 件）",description:"绿色角标，显示库存数量。",src:"https://picsum.photos/id/152/280/280",config:{status:"in-stock",stockCount:100,showBadge:!0,position:"top-right"}},{name:"库存紧张（5 件）",description:"低于阈值 → 橙色预警角标。",src:"https://picsum.photos/id/164/280/280",config:{status:"low-stock",stockCount:5,lowStockThreshold:10,showBadge:!0,position:"top-right"}},{name:"缺货",description:"红色缺货角标。",src:"https://picsum.photos/id/177/280/280",config:{status:"out-of-stock",stockCount:0,showBadge:!0,position:"top-right"}},{name:"预订",description:"蓝色预订角标。",src:"https://picsum.photos/id/183/280/280",config:{status:"pre-order",showBadge:!0,position:"top-right"}},{name:"自动刷新库存（每 5 秒）",description:"通过 fetchStock 定时刷新状态（示例中省略函数，可配 interval）。",src:"https://picsum.photos/id/225/400/300",config:{status:"in-stock",stockCount:50,showBadge:!0,autoRefresh:!0,refreshInterval:5e3,position:"top-right"}}],IQ=["4 种库存状态：有货 / 低库存 / 缺货 / 预订","显示实时库存数量","低库存阈值预警","自动刷新库存（可配置间隔）","库存变更回调通知","颜色编码（绿=有货 / 橙=低库存 / 红=缺货 / 蓝=预订）"],kQ=["电商产品列表页","库存管理系统","在线商城首页","门票 / 课程售卖","限时抢购活动"],_Q=["`stockCount <= lowStockThreshold` 时会自动归为「库存紧张」，无需手动改 `status`。","`autoRefresh` 需配合 `refreshInterval` 与 `fetchStock` 才有意义，静态示例页不会轮询。"],EQ={name:yQ,description:vQ,since:wQ,tags:xQ,events:bQ,methods:PQ,methodsNote:$Q,config:SQ,example:CQ,examples:LQ,features:IQ,useCases:kQ,notes:_Q},Yc=["rgb(255, 99, 71)","rgb(70, 130, 180)","rgb(60, 179, 113)","rgb(255, 215, 0)","rgb(238, 130, 238)"],RQ={bottom:{bottom:10,left:10,right:10},overlay:{top:"50%",left:"50%",transform:"translate(-50%, -50%)"},"bottom-center":{bottom:10,left:"50%",transform:"translateX(-50%)"}},zQ=`
  @keyframes colorSwatchFadeIn {
    from { opacity: 0; transform: translateY(10px); }
    to { opacity: 1; transform: translateY(0); }
  }
`;function Xc(e,t){const n=document.createElement("canvas"),o=n.getContext("2d");if(!o)return[];const r=.1;n.width=e.naturalWidth*r,n.height=e.naturalHeight*r;try{o.drawImage(e,0,0,n.width,n.height);const s=o.getImageData(0,0,n.width,n.height).data,i=new Map;for(let l=0;l<s.length;l+=4*10){const c=s[l],u=s[l+1],d=s[l+2];if(s[l+3]<128||c>240&&u>240&&d>240||c<15&&u<15&&d<15)continue;const p=`rgb(${Math.round(c/32)*32}, ${Math.round(u/32)*32}, ${Math.round(d/32)*32})`;i.set(p,(i.get(p)||0)+1)}const a=Array.from(i.entries()).sort((l,c)=>c[1]-l[1]).slice(0,t).map(([l])=>l);return a.length?a:Yc.slice(0,t)}catch(s){return console.error("[ColorSwatchPlugin] extractColors failed (可能是跨域问题):",s),Yc.slice(0,t)}}function Zc(e){const t=e.match(/\d+/g);if(!t)return e;const[n,o,r]=t.map(Number);return`#${((1<<24)+(n<<16)+(o<<8)+r).toString(16).slice(1)}`}function OQ({config:e,context:t}){const{maxColors:n=5,showPalette:o=!0,position:r="bottom",onColorSelect:s,swatchSize:i=32,interactive:a=!0,style:l={},showColorCode:c=!1,gap:u=8}=e,[d,p]=N.useState([]),[f,v]=N.useState(null),[w,b]=N.useState(null);if(N.useEffect(()=>{var P;const y=(P=t.imageRef)==null?void 0:P.current;if(y)if(y.complete&&y.naturalWidth>0)p(Xc(y,n));else{const $=()=>p(Xc(y,n));return y.addEventListener("load",$),()=>y.removeEventListener("load",$)}},[t.imageRef,n]),!o||d.length===0)return null;const h=y=>{a&&(v(y),s==null||s(y))},g={position:"absolute",...RQ[r],display:"flex",alignItems:"center",gap:`${u}px`,padding:8,backgroundColor:"rgba(255, 255, 255, 0.9)",borderRadius:8,boxShadow:"0 2px 12px rgba(0,0,0,0.15)",zIndex:10,animation:"colorSwatchFadeIn 0.4s ease-out",...l};return m.jsxs(m.Fragment,{children:[m.jsx("div",{style:g,children:d.map(y=>{const P=f===y,$=w===y,I={width:`${i}px`,height:`${i}px`,backgroundColor:y,borderRadius:"50%",cursor:a?"pointer":"default",border:P?"3px solid #333":"2px solid rgba(0,0,0,0.1)",boxShadow:$?"0 4px 12px rgba(0,0,0,0.3)":"0 2px 6px rgba(0,0,0,0.15)",transform:$?"scale(1.15)":"scale(1)",transition:"all 0.2s ease",position:"relative"};return m.jsxs("div",{style:{textAlign:"center"},children:[m.jsx("div",{style:I,onClick:()=>h(y),onMouseEnter:()=>b(y),onMouseLeave:()=>b(null),title:Zc(y)}),c&&m.jsx("div",{style:{fontSize:10,marginTop:4,color:"#666",fontFamily:"monospace"},children:Zc(y)})]},y)})}),m.jsx("style",{children:zQ})]})}function DQ(e={}){return{name:"color-swatch",version:"1.0.0",config:e,hooks:{transformProps:t=>({...t,crossOrigin:t.crossOrigin??"anonymous"}),onMount:t=>{var n,o;try{(o=(n=t.imageRef)==null?void 0:n.current)==null||o.setAttribute("crossOrigin","anonymous")}catch{}},renderOverlay:t=>{var n;return!t.imageState.isLoaded||!((n=t.imageRef)!=null&&n.current)?null:m.jsx(OQ,{config:e,context:t})}}}}const MQ="ColorSwatchPlugin",jQ="颜色选择器：自动提取商品图片主要颜色，支持交互选择、颜色代码显示与悬停放大。",TQ="2.0.0",NQ=["ecommerce","电商核心"],AQ=[{name:"onMount",when:"组件挂载完成、插件注册后执行一次（返回的清理函数在 manager.clear 时逆序执行）",description:"初始化副作用：注册监听、起定时器、建观察器；必须返回清理函数或配合 onUnmount 收尾"},{name:"transformProps",when:"渲染前链式改写图片 props",description:"补 sizes / 占位色 / 解码策略等"},{name:"renderOverlay",when:"每次渲染，覆盖在图片容器之上",description:"骨架屏、错误占位、水印、加载动画"}],BQ=[],UQ="只读取 context 字段（props / state / data），不调用上下文方法",FQ=[{name:"maxColors",type:"number",default:"5",description:"提取颜色数量上限"},{name:"showPalette",type:"boolean",default:"true",description:"是否显示色板"},{name:"position",type:'"bottom" | "overlay" | "bottom-center"',default:'"bottom"',description:"色板位置"},{name:"swatchSize",type:"number",default:"32",description:"色块尺寸（px）"},{name:"interactive",type:"boolean",default:"true",description:"是否可点击选择"},{name:"showColorCode",type:"boolean",default:"false",description:"是否显示 HEX 代码"},{name:"gap",type:"number",default:"8",description:"色块间距（px）"},{name:"onColorSelect",type:"(color) => void",default:"undefined",description:"颜色选择回调"},{name:"style",type:"React.CSSProperties",default:"{}",description:"自定义叠加样式"}],WQ=`// 1. 可交互色板（点击选择颜色）
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
<SwatchImage src="https://picsum.photos/id/100/500/400" alt="服装图" />;`,VQ=[{name:"底部色板（可交互）",description:"点击色块可选择颜色，悬停放大。",src:"https://picsum.photos/id/100/500/400",config:{maxColors:6,showPalette:!0,position:"bottom",interactive:!0,swatchSize:36}},{name:"居中叠加",description:"色板居中浮于图片之上。",src:"https://picsum.photos/id/106/500/400",config:{maxColors:5,showPalette:!0,position:"overlay",interactive:!0,swatchSize:40,gap:10}},{name:"显示颜色代码",description:"每个色块下方显示 HEX 代码。",src:"https://picsum.photos/id/116/500/400",config:{maxColors:5,showPalette:!0,position:"bottom-center",interactive:!0,swatchSize:32,showColorCode:!0,gap:12}},{name:"多颜色小色块",description:"更多颜色、更小色块、更小间距。",src:"https://picsum.photos/id/129/500/400",config:{maxColors:8,showPalette:!0,position:"bottom",interactive:!0,swatchSize:24,gap:6}}],HQ=["跨域提示：本示例使用的 picsum.photos 图片没有 CORS 头，无法提取真实颜色，当前显示的是默认演示色。实际使用中请确保图片服务器配置了正确的 CORS 头，或使用同域图片，插件才能正确提取图片的真实颜色。"],GQ=["自动提取图片主要颜色","智能过滤黑白和透明色","可配置提取颜色数量","3 种显示位置（底部 / 居中 / 底部居中）","交互式颜色选择","显示 HEX 颜色代码","悬停放大效果","选中状态标识"],qQ=["服装多颜色选择","艺术品 / 设计作品配色","家具 / 装饰品颜色筛选","鞋包配色选择","礼品个性化定制"],QQ={name:MQ,description:jQ,since:TQ,tags:NQ,events:AQ,methods:BQ,methodsNote:UQ,config:FQ,example:WQ,examples:VQ,notes:HQ,features:GQ,useCases:qQ},Jc={facebook:{name:"Facebook",icon:"f",color:"#1877F2",getShareUrl:e=>`https://www.facebook.com/sharer/sharer.php?u=${encodeURIComponent(e.url)}`},twitter:{name:"Twitter",icon:"𝕏",color:"#000000",getShareUrl:e=>`https://twitter.com/intent/tweet?url=${encodeURIComponent(e.url)}&text=${encodeURIComponent(e.title)}`},pinterest:{name:"Pinterest",icon:"P",color:"#E60023",getShareUrl:e=>`https://pinterest.com/pin/create/button/?url=${encodeURIComponent(e.url)}&media=${encodeURIComponent(e.ogImage)}&description=${encodeURIComponent(e.description||e.title)}`},linkedin:{name:"LinkedIn",icon:"in",color:"#0A66C2",getShareUrl:e=>`https://www.linkedin.com/sharing/share-offsite/?url=${encodeURIComponent(e.url)}`},whatsapp:{name:"WhatsApp",icon:"W",color:"#25D366",getShareUrl:e=>`https://wa.me/?text=${encodeURIComponent(e.title+" "+e.url)}`},wechat:{name:"WeChat",icon:"微",color:"#07C160",getShareUrl:e=>e.url}},KQ={small:{button:28,icon:14},medium:{button:36,icon:16},large:{button:44,icon:18}},YQ={"top-right":{top:10,right:10},"bottom-right":{bottom:10,right:10},"top-left":{top:10,left:10},"bottom-left":{bottom:10,left:10}},XQ=`
  @keyframes shareButtonSlideIn {
    from { opacity: 0; transform: translateX(20px); }
    to { opacity: 1; transform: translateX(0); }
  }
`;function ZQ({config:e,context:t}){const{platforms:n=["facebook","twitter","pinterest"],position:o="top-right",showOnHover:r=!1,url:s,title:i="分享图片",description:a="",ogImage:l,onShare:c,style:u={},size:d="medium"}=e,[p,f]=N.useState(!r),[v,w]=N.useState(!1),b=s??(typeof window<"u"?window.location.href:""),h={url:b,title:i,description:a,ogImage:l??t.src},g=I=>{var _;const k=Jc[I];k&&(I==="wechat"?(alert("请复制链接到微信分享"),(_=navigator.clipboard)==null||_.writeText(b)):window.open(k.getShareUrl(h),"_blank","width=600,height=400"),c==null||c(I))},y=KQ[d],P={position:"absolute",...YQ[o],display:"flex",flexDirection:"column",gap:6,zIndex:10,opacity:p?1:0,transform:p?"scale(1)":"scale(0.8)",transition:"all 0.3s ease",pointerEvents:"auto",...u},$={width:y.button,height:y.button,borderRadius:"50%",backgroundColor:"#fff",border:"2px solid #ddd",display:"flex",alignItems:"center",justifyContent:"center",cursor:"pointer",boxShadow:"0 2px 8px rgba(0,0,0,0.15)",fontSize:y.icon,fontWeight:"bold",transition:"all 0.2s ease"};return m.jsxs(m.Fragment,{children:[r&&m.jsx("div",{style:{position:"absolute",top:0,left:0,right:0,bottom:0,zIndex:9,pointerEvents:"auto"},onMouseEnter:()=>f(!0),onMouseLeave:()=>{f(!1),w(!1)}}),m.jsxs("div",{style:P,children:[m.jsx("div",{style:$,onClick:()=>w(!v),title:"分享",children:m.jsx("span",{children:"📤"})}),v&&n.map((I,k)=>{const _=Jc[I];if(!_)return null;const S={width:y.button,height:y.button,borderRadius:"50%",backgroundColor:_.color,color:"#fff",border:"none",display:"flex",alignItems:"center",justifyContent:"center",cursor:"pointer",boxShadow:"0 2px 8px rgba(0,0,0,0.15)",fontSize:y.icon,fontWeight:"bold",animation:`shareButtonSlideIn 0.3s ease-out ${k*.05}s both`,transition:"all 0.2s ease"};return m.jsx("div",{style:S,onClick:()=>g(I),onMouseEnter:L=>L.currentTarget.style.transform="scale(1.1)",onMouseLeave:L=>L.currentTarget.style.transform="scale(1)",title:`分享到 ${_.name}`,children:_.icon},I)})]}),m.jsx("style",{children:XQ})]})}function JQ(e={}){return{name:"social-share",version:"1.0.0",config:e,hooks:{renderOverlay:t=>t.imageState.isLoaded?m.jsx(ZQ,{config:e,context:t}):null}}}const eK="SocialSharePlugin",tK="社交分享：在商品图片上显示社交分享按钮，支持 6 大平台、悬停展开、自定义尺寸与分享回调。",nK="2.0.0",oK=["ecommerce","电商核心"],rK=[{name:"renderOverlay",when:"每次渲染，覆盖在图片容器之上",description:"骨架屏、错误占位、水印、加载动画"}],sK=[],iK="只读取 context 字段（props / state / data），不调用上下文方法",aK=[{name:"platforms",type:'Array<"facebook"|"twitter"|"pinterest"|"linkedin"|"whatsapp"|"wechat">',default:'["facebook","twitter","pinterest"]',description:"分享平台列表"},{name:"position",type:'"top-left" | "top-right" | "bottom-left" | "bottom-right"',default:'"top-right"',description:"主按钮位置"},{name:"showOnHover",type:"boolean",default:"false",description:"悬停显示模式"},{name:"title",type:"string",default:'"分享图片"',description:"分享标题"},{name:"description",type:"string",default:'""',description:"分享描述"},{name:"ogImage",type:"string",default:"undefined",description:"Pinterest 等使用的媒体图"},{name:"size",type:'"small" | "medium" | "large"',default:'"medium"',description:"按钮尺寸"},{name:"onShare",type:"(platform) => void",default:"undefined",description:"分享回调"},{name:"style",type:"React.CSSProperties",default:"{}",description:"自定义容器样式"}],lK=`// 1. 指定分享平台，点击展开具体入口
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
<ShareImage src="https://picsum.photos/id/237/500/400" alt="商品图" />;`,cK=[{name:"默认分享按钮",description:"点击主按钮展开具体平台，再点平台进行分享。",src:"https://picsum.photos/id/237/500/400",config:{platforms:["facebook","twitter","pinterest"],position:"top-right",showOnHover:!1,title:"Amazing Product",description:"Check out this amazing product!"}},{name:"悬停显示（鼠标悬停时出现）",description:"默认隐藏，鼠标悬停图片才显示分享按钮。",src:"https://picsum.photos/id/247/500/400",config:{platforms:["facebook","twitter","linkedin","whatsapp"],position:"top-right",showOnHover:!0,size:"medium"}},{name:"更多平台（包含微信）",description:"小尺寸、右下角，覆盖 6 个平台。",src:"https://picsum.photos/id/257/500/400",config:{platforms:["facebook","twitter","pinterest","linkedin","whatsapp","wechat"],position:"bottom-right",showOnHover:!1,size:"small"}},{name:"大尺寸按钮",description:"左上角大尺寸分享按钮。",src:"https://picsum.photos/id/267/500/400",config:{platforms:["facebook","twitter","pinterest"],position:"top-left",showOnHover:!1,size:"large"}}],uK=["支持 6 大社交平台：Facebook / Twitter / Pinterest / LinkedIn / WhatsApp / WeChat","悬停显示模式","3 种尺寸可选（small / medium / large）","4 个位置可选","展开 / 收起动画","分享回调通知","自定义分享标题和描述"],dK=["电商产品分享","内容营销推广","作品集展示","照片 / 图片社区","礼物推荐分享","房产 / 旅游分享"],pK=["`showOnHover: true` 时分享条只在悬停出现；示例页默认常驻便于观察。","微信没有可直接打开的分享 URL，走 `onShare` 回调由业务方接入。"],mK={name:eK,description:tK,since:nK,tags:oK,events:rK,methods:sK,methodsNote:iK,config:aK,example:lK,examples:cK,features:uK,useCases:dK,notes:pK},gK={small:{size:48,iconSize:20},medium:{size:64,iconSize:28},large:{size:80,iconSize:36}},fK={center:{top:"50%",left:"50%",transform:"translate(-50%, -50%)"},"top-left":{top:20,left:20},"top-right":{top:20,right:20},"bottom-left":{bottom:20,left:20},"bottom-right":{bottom:20,right:20}},eu=`
  @keyframes videoModalFadeIn { from { opacity: 0; } to { opacity: 1; } }
  @keyframes videoPosterPulse {
    0%, 100% { transform: scale(1); }
    50% { transform: scale(1.05); }
  }
`;function hK({config:e,context:t}){const{videoUrl:n,autoPlay:o=!0,loop:r=!1,muted:s=!0,playButtonPosition:i="center",playButtonSize:a="large",playButtonStyle:l={},showPlayButton:c=!0,onPlay:u,playInModal:d=!0,playIcon:p}=e,[f,v]=N.useState(!1),w=()=>{v(!0),u==null||u()},b=gK[a],h={position:"absolute",...fK[i],width:b.size,height:b.size,borderRadius:"50%",backgroundColor:"rgba(0, 0, 0, 0.7)",border:"3px solid rgba(255, 255, 255, 0.9)",display:"flex",alignItems:"center",justifyContent:"center",cursor:"pointer",zIndex:10,transition:"all 0.3s ease",...l};return f&&d?m.jsxs(m.Fragment,{children:[m.jsxs("div",{style:{position:"fixed",top:0,left:0,right:0,bottom:0,backgroundColor:"rgba(0, 0, 0, 0.9)",zIndex:9999,display:"flex",alignItems:"center",justifyContent:"center",animation:"videoModalFadeIn 0.3s ease-out"},onClick:()=>v(!1),children:[m.jsx("button",{style:{position:"absolute",top:20,right:20,width:40,height:40,borderRadius:"50%",backgroundColor:"rgba(255,255,255,0.2)",border:"2px solid white",color:"white",fontSize:24,cursor:"pointer",display:"flex",alignItems:"center",justifyContent:"center",zIndex:10001},onClick:()=>v(!1),children:"×"}),m.jsx("video",{src:n,controls:!0,autoPlay:o,loop:r,muted:s,style:{maxWidth:"90%",maxHeight:"90%",borderRadius:8,boxShadow:"0 10px 40px rgba(0,0,0,0.5)"},onClick:g=>g.stopPropagation()})]}),m.jsx("style",{children:eu})]}):f&&!d?m.jsxs("div",{style:{position:"absolute",top:0,left:0,right:0,bottom:0,backgroundColor:"#000",zIndex:10},children:[m.jsx("button",{style:{position:"absolute",top:10,right:10,width:32,height:32,borderRadius:"50%",backgroundColor:"rgba(255,255,255,0.2)",border:"2px solid white",color:"white",fontSize:20,cursor:"pointer",display:"flex",alignItems:"center",justifyContent:"center",zIndex:11},onClick:()=>v(!1),children:"×"}),m.jsx("video",{src:n,controls:!0,autoPlay:o,loop:r,muted:s,style:{width:"100%",height:"100%",objectFit:"contain"}})]}):c?m.jsxs(m.Fragment,{children:[m.jsx("div",{style:h,onClick:w,onMouseEnter:g=>{g.currentTarget.style.backgroundColor="rgba(0, 0, 0, 0.85)",i==="center"?g.currentTarget.style.transform="translate(-50%, -50%) scale(1.1)":g.currentTarget.style.transform="scale(1.1)"},onMouseLeave:g=>{g.currentTarget.style.backgroundColor="rgba(0, 0, 0, 0.7)",i==="center"?g.currentTarget.style.transform="translate(-50%, -50%) scale(1)":g.currentTarget.style.transform="scale(1)"},title:"播放视频",children:p??m.jsx("svg",{width:b.iconSize,height:b.iconSize,viewBox:"0 0 24 24",fill:"white",style:{marginLeft:2},children:m.jsx("path",{d:"M8 5v14l11-7z"})})}),m.jsx("style",{children:eu})]}):null}function yK(e){return{name:"video-poster",version:"1.0.0",config:e,hooks:{renderOverlay:t=>t.imageState.isLoaded?m.jsx(hK,{config:e,context:t}):null}}}const vK="VideoPosterPlugin",wK="视频海报：将图片作为视频封面，点击播放视频（模态框或内联），支持自动播放、循环、静音与自定义按钮。",xK="2.0.0",bK=["ecommerce","电商核心"],PK=[{name:"renderOverlay",when:"每次渲染，覆盖在图片容器之上",description:"骨架屏、错误占位、水印、加载动画"}],$K=[],SK="只读取 context 字段（props / state / data），不调用上下文方法",CK=[{name:"videoUrl",type:"string",default:"undefined",description:"视频 URL"},{name:"autoPlay",type:"boolean",default:"true",description:"自动播放"},{name:"loop",type:"boolean",default:"false",description:"循环播放"},{name:"muted",type:"boolean",default:"true",description:"静音（移动端自动播放需静音）"},{name:"playButtonPosition",type:'"center" | "top-left" | "top-right" | "bottom-left" | "bottom-right"',default:'"center"',description:"播放按钮位置"},{name:"playButtonSize",type:'"small" | "medium" | "large"',default:'"large"',description:"按钮尺寸"},{name:"playButtonStyle",type:"React.CSSProperties",default:"{}",description:"自定义按钮样式"},{name:"showPlayButton",type:"boolean",default:"true",description:"是否显示播放按钮"},{name:"playInModal",type:"boolean",default:"true",description:"模态框播放（否则内联）"},{name:"playIcon",type:"ReactNode",default:"undefined",description:"自定义播放图标"},{name:"onPlay",type:"() => void",default:"undefined",description:"播放回调"}],LK=`// 1. 点击播放按钮，在模态框中播放视频
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
<VideoImage src="https://picsum.photos/id/1015/500/300" alt="商品视频封面" />;`,IK=[{name:"基础视频海报（模态框播放）",description:"点击图片中心播放按钮，在模态框中播放视频。",src:"https://picsum.photos/id/1015/500/300",config:{videoUrl:"https://www.w3schools.com/html/mov_bbb.mp4",playButtonPosition:"center",playButtonSize:"large"}},{name:"内联播放模式",description:"视频直接在图片位置播放，不弹出模态框。",src:"https://picsum.photos/id/1018/500/300",config:{videoUrl:"https://www.w3schools.com/html/movie.mp4",playInModal:!1,playButtonPosition:"center",playButtonSize:"medium",autoPlay:!0,loop:!0,muted:!0}},{name:"自定义播放按钮样式",description:"按钮位于右下角，红色背景，小尺寸。",src:"https://picsum.photos/id/1019/500/300",config:{videoUrl:"https://www.w3schools.com/html/mov_bbb.mp4",playButtonPosition:"bottom-right",playButtonSize:"small",playButtonStyle:{backgroundColor:"rgba(255, 59, 48, 0.9)",border:"2px solid white"}}},{name:"自定义播放图标",description:"示例以默认三角形呈现；可用 playIcon 替换为自定义图标（如 “PLAY” 文字）。",src:"https://picsum.photos/id/1020/500/300",config:{videoUrl:"https://www.w3schools.com/html/mov_bbb.mp4",playButtonPosition:"center",playButtonSize:"large"}},{name:"不同按钮位置",description:"播放按钮位于左上角，绿色背景。",src:"https://picsum.photos/id/1021/500/300",config:{videoUrl:"https://www.w3schools.com/html/mov_bbb.mp4",playButtonPosition:"top-left",playButtonSize:"small",playButtonStyle:{backgroundColor:"rgba(52, 199, 89, 0.9)"}}}],kK=["使用提示：确保视频 URL 可访问，否则播放会失败；移动端自动播放可能受浏览器限制，建议设置 muted=true；大视频文件建议使用流媒体服务；模态框播放体验更好但会阻断其它交互；内联播放适合小尺寸视频预览。"],_K=["模态框播放（全屏）","内联播放（图片位置直接播）","自定义播放按钮大小 / 位置 / 样式","多位置支持（center / top-left / bottom-left / bottom-right）","播放控制（自动播放 / 循环 / 静音）","自定义图标"],EK=["视频网站","在线教育","电商平台（商品视频展示）","新闻媒体","视频博客","企业官网"],RK={name:vK,description:wK,since:xK,tags:bK,events:PK,methods:$K,methodsNote:SK,config:CK,example:LK,examples:IK,notes:kK,features:_K,useCases:EK};function zK(){return typeof navigator>"u"?"en":(navigator.language||navigator.userLanguage||"en").split("-")[0].toLowerCase()}function OK(e){const{localeMap:t,defaultLocale:n="en",currentLocale:o,autoDetect:r=!0,detectLocale:s,fallbackSrc:i}=e;let a=0;return{name:`localization-${++a}`,version:"1.0.0",config:e,hooks:{onLoad:l=>{const c=l.src;let u=o;!u&&r&&(u=s?s():zK()),u=u||n;let d=t[u];return!d&&u!==n&&(d=t[n]),d=d||i||c,d}}}}const DK="LocalizationPlugin",MK="国际化：根据用户语言环境自动切换图片，支持手动指定、自动检测、自定义检测函数与后备图片。",jK="2.0.0",TK=["ecommerce","电商核心"],NK=[{name:"onLoad",when:"加载流程开始、需要确定最终图片地址时",description:"自定义加载逻辑，返回最终图片 URL（objectURL / dataURL / 原地址）"}],AK=[],BK="只读取 context 字段（props / state / data），不调用上下文方法",UK=[{name:"localeMap",type:"Record<string, string>",default:"undefined",description:"语言 → 图片 URL 映射"},{name:"defaultLocale",type:"string",default:'"en"',description:"默认语言（后备）"},{name:"currentLocale",type:"string",default:"undefined",description:"手动指定当前语言"},{name:"autoDetect",type:"boolean",default:"true",description:"是否自动检测浏览器语言"},{name:"detectLocale",type:"() => string",default:"undefined",description:"自定义语言检测函数"},{name:"fallbackSrc",type:"string",default:"undefined",description:"最终后备图片 URL"}],FK=`// 1. 按浏览器语言自动切换图片
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
<I18nImage src="https://picsum.photos/id/1015/500/300" alt="多语言图片" />;`,WK=[{name:"手动切换语言",description:"手动指定 currentLocale 展示对应语言图片（此处以 en 为例）。",src:"https://picsum.photos/id/1015/500/300",config:{localeMap:{en:"https://picsum.photos/id/1015/500/300",zh:"https://picsum.photos/id/1016/500/300",ja:"https://picsum.photos/id/1018/500/300",ko:"https://picsum.photos/id/1019/500/300"},currentLocale:"en",autoDetect:!1,defaultLocale:"en"}},{name:"自动检测浏览器语言",description:"根据浏览器语言自动选择图片（支持 en/zh/fr/de/es）。",src:"https://picsum.photos/id/1020/500/300",config:{localeMap:{en:"https://picsum.photos/id/1020/500/300",zh:"https://picsum.photos/id/1021/500/300",fr:"https://picsum.photos/id/1022/500/300",de:"https://picsum.photos/id/1023/500/300",es:"https://picsum.photos/id/1024/500/300"},autoDetect:!0,defaultLocale:"en"}},{name:"自定义语言检测",description:"通过 detectLocale() 从 localStorage 读取偏好（示例中简写为自动检测）。",src:"https://picsum.photos/id/1025/500/300",config:{localeMap:{en:"https://picsum.photos/id/1025/500/300",zh:"https://picsum.photos/id/1026/500/300",ja:"https://picsum.photos/id/1027/500/300"},defaultLocale:"en",autoDetect:!0}},{name:"后备图片机制",description:"请求的语言（ru）不在映射中 → 显示 fallbackSrc 后备图片。",src:"https://picsum.photos/id/1030/500/300",config:{localeMap:{en:"https://picsum.photos/id/1028/500/300",zh:"https://picsum.photos/id/1029/500/300"},currentLocale:"ru",defaultLocale:"en",fallbackSrc:"https://picsum.photos/id/1030/500/300"}}],VK=["最佳实践：始终提供 defaultLocale 作为后备；localeMap 至少包含常用语言（en、zh 等）；图片 URL 应指向稳定可访问的资源；建议使用 CDN 加速不同地区的图片加载；可结合用户设置和浏览器检测；开发环境建议打开 console 查看语言检测日志。"],HK=["多语言支持（任意语言环境）","自动检测浏览器语言","默认回退语言","自定义检测函数","后备机制（最终后备图片 URL）","动态切换（运行时切换语言）"],GK=["国际化网站","品牌宣传","多语言 App","电商平台（商品本地化展示）","新闻媒体","在线教育"],qK={name:DK,description:MK,since:jK,tags:TK,events:NK,methods:AK,methodsNote:BK,config:UK,example:FK,examples:WK,notes:VK,features:HK,useCases:GK},QK={small:{size:32,iconSize:16},medium:{size:40,iconSize:20},large:{size:48,iconSize:24}},KK={"top-left":{top:10,left:10},"top-right":{top:10,right:10},"bottom-left":{bottom:10,left:10},"bottom-right":{bottom:10,right:10}},YK=`
  @keyframes downloadSpin {
    from { transform: rotate(0deg); }
    to { transform: rotate(360deg); }
  }
`;function XK({config:e,context:t}){const{filename:n,position:o="top-right",size:r="medium",buttonStyle:s={},showOnHover:i=!1,onBeforeDownload:a,onDownloadSuccess:l,onDownloadError:c,customIcon:u,showTooltip:d=!0,tooltipText:p="下载图片"}=e,[f,v]=N.useState(!1),[w,b]=N.useState(!1),h=QK[r],g=async P=>{P.stopPropagation();try{b(!0),await(a==null?void 0:a(t.src));const $=n||t.src.split("/").pop()||"download.jpg",I=await(await fetch(t.src)).blob(),k=window.URL.createObjectURL(I),_=document.createElement("a");_.href=k,_.download=$,document.body.appendChild(_),_.click(),document.body.removeChild(_),window.URL.revokeObjectURL(k),l==null||l($)}catch($){console.error("[DownloadButtonPlugin] Download failed:",$),c==null||c($)}finally{b(!1)}},y={position:"absolute",...KK[o],width:h.size,height:h.size,borderRadius:"50%",backgroundColor:"rgba(0, 0, 0, 0.6)",border:"2px solid rgba(255, 255, 255, 0.8)",display:"flex",alignItems:"center",justifyContent:"center",cursor:w?"wait":"pointer",zIndex:10,opacity:i&&!f?0:1,transform:f?"scale(1.1)":"scale(1)",transition:"all 0.3s ease",...s};return m.jsxs(m.Fragment,{children:[i&&m.jsx("div",{style:{position:"absolute",top:0,left:0,right:0,bottom:0,zIndex:9,pointerEvents:"auto"},onMouseEnter:()=>v(!0),onMouseLeave:()=>v(!1)}),m.jsx("div",{style:y,onClick:g,title:d?p:void 0,children:u??(w?m.jsx("svg",{width:h.iconSize,height:h.iconSize,viewBox:"0 0 24 24",fill:"white",style:{animation:"downloadSpin 1s linear infinite"},children:m.jsx("circle",{cx:"12",cy:"12",r:"10",stroke:"white",strokeWidth:"2",fill:"none",strokeDasharray:"31.4",strokeDashoffset:"10"})}):m.jsx("svg",{width:h.iconSize,height:h.iconSize,viewBox:"0 0 24 24",fill:"white",children:m.jsx("path",{d:"M19 9h-4V3H9v6H5l7 7 7-7zM5 18v2h14v-2H5z"})}))}),m.jsx("style",{children:YK})]})}function ZK(e={}){return{name:"download-button",version:"1.0.0",config:e,hooks:{renderOverlay:t=>t.imageState.isLoaded?m.jsx(XK,{config:e,context:t}):null}}}const JK="DownloadButtonPlugin",eY="下载按钮：为图片添加一键下载功能，支持多位置、自定义样式、悬停显示与生命周期回调。",tY="2.0.0",nY=["ecommerce","电商核心"],oY=[{name:"renderOverlay",when:"每次渲染，覆盖在图片容器之上",description:"骨架屏、错误占位、水印、加载动画"}],rY=[],sY="只读取 context 字段（props / state / data），不调用上下文方法",iY=[{name:"filename",type:"string",default:"undefined",description:"下载文件名"},{name:"position",type:'"top-left" | "top-right" | "bottom-left" | "bottom-right"',default:'"top-right"',description:"按钮位置"},{name:"size",type:'"small" | "medium" | "large"',default:'"medium"',description:"按钮尺寸"},{name:"buttonStyle",type:"React.CSSProperties",default:"{}",description:"自定义按钮样式"},{name:"showOnHover",type:"boolean",default:"false",description:"仅悬停时显示"},{name:"onBeforeDownload",type:"(src) => void | Promise<void>",default:"undefined",description:"下载前回调（可做权限校验）"},{name:"onDownloadSuccess",type:"(filename) => void",default:"undefined",description:"下载成功回调"},{name:"onDownloadError",type:"(error) => void",default:"undefined",description:"下载失败回调"},{name:"customIcon",type:"ReactNode",default:"undefined",description:"自定义图标"},{name:"tooltipText",type:"string",default:'"下载图片"',description:"提示文案"}],aY=`// 1. 右上角下载按钮，成功后回调
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
<DownloadImage src="https://picsum.photos/id/1015/500/300" alt="可下载图片" />;`,lY=[{name:"基础下载功能",description:"点击右上角下载按钮，保存图片（文件名 my-image.jpg）。",src:"https://picsum.photos/id/1015/500/300",config:{filename:"my-image.jpg",position:"top-right",size:"medium"}},{name:"悬停显示按钮",description:"默认隐藏，鼠标悬停图片左上角出现大号下载按钮。",src:"https://picsum.photos/id/1018/500/300",config:{position:"top-left",size:"large",showOnHover:!0,tooltipText:"点击下载高清图片"}},{name:"自定义位置和大小",description:"左下角小号绿色下载按钮。",src:"https://picsum.photos/id/1019/500/300",config:{position:"bottom-left",size:"small",buttonStyle:{backgroundColor:"rgba(52, 199, 89, 0.9)"}}},{name:"自定义按钮样式",description:"右下角红色方形下载按钮。",src:"https://picsum.photos/id/1020/500/300",config:{position:"bottom-right",size:"medium",buttonStyle:{backgroundColor:"rgba(255, 59, 48, 0.9)",borderRadius:"8px",border:"none"},tooltipText:"下载原图"}},{name:"下载生命周期回调",description:"下载前后触发回调（可权限校验 / 统计上报）；示例中省略函数，见用法示例。",src:"https://picsum.photos/id/1021/500/300",config:{filename:"premium-photo.jpg",position:"top-right",size:"large"}},{name:"自定义下载图标",description:"示例以默认图标呈现；可用 customIcon 替换为自定义图标。",src:"https://picsum.photos/id/1022/500/300",config:{position:"top-right",size:"medium",buttonStyle:{backgroundColor:"rgba(88, 86, 214, 0.9)"}}}],cY=["下载提示：下载需要图片 URL 支持 CORS，否则可能失败；跨域图片需服务器设置 Access-Control-Allow-Origin；filename 应包含合适的文件扩展名（.jpg / .png 等）；大文件下载时会有短暂延迟，建议显示加载状态；移动端下载体验可能因浏览器而异；可在 onBeforeDownload 中进行权限检查。"],uY=["一键下载（点击按钮即可下载图片）","多位置支持（4 个角落）","自定义样式（大小 / 颜色 / 形状）","悬停显示模式","生命周期回调（下载前 / 后 / 失败）","自定义图标"],dY=["图片网站（用户下载高清图）","设计平台（下载设计作品）","新闻媒体","电商平台（下载商品图片）","在线教育（下载教学资料）","企业官网（下载宣传图）"],pY={name:JK,description:eY,since:tY,tags:nY,events:oY,methods:rY,methodsNote:sY,config:iY,example:aY,examples:lY,notes:cY,features:uY,useCases:dY},mY=Object.assign(Oq,{meta:qq}),gY=Object.assign(Zq,{meta:pQ}),fY=Object.assign(hQ,{meta:EQ}),hY=Object.assign(DQ,{meta:QQ}),yY=Object.assign(JQ,{meta:mK}),vY=Object.assign(yK,{meta:RK}),wY=Object.assign(OK,{meta:qK}),xY=Object.assign(ZK,{meta:pY}),wr=(()=>{const e=new Map;function t(r){let s=e.get(r);return s||(s={current:0,queue:[]},e.set(r,s)),s}async function n(r,s,i,a){const l=t(r);if(l.current<s){l.current+=1,i&&console.debug(`[ConcurrencyGate] acquire immediate: ${r} -> ${l.current}/${s}`);return}i&&console.debug(`[ConcurrencyGate] queued: ${r} size=${l.queue.length+1}`),await new Promise((c,u)=>{const d={resolve:()=>{d.timer&&clearTimeout(d.timer),l.current+=1,i&&console.debug(`[ConcurrencyGate] acquire from queue: ${r} -> ${l.current}/${s}`),c()},reject:u};a&&a>0&&(d.timer=setTimeout(()=>{const p=l.queue.indexOf(d);p>=0&&l.queue.splice(p,1),i&&console.debug(`[ConcurrencyGate] acquire timeout: ${r} after ${a}ms`),u==null||u(new Error(`acquire timeout for ${r}`))},a)),l.queue.push(d)})}function o(r,s,i){const a=t(r);a.current>0&&(a.current-=1),i&&console.debug(`[ConcurrencyGate] release: ${r} -> ${a.current}/${s}`);const l=a.queue.shift();l&&l.resolve()}return{acquire:n,release:o}})();function ai(e,t){if(t==="global")return"__global__";try{return`host:${new URL(e,typeof window<"u"?window.location.origin:"http://localhost").hostname}`}catch{return"__global__"}}function bY(e={}){const{maxConcurrent:t=4,scope:n="global",adaptive:o=!0,acquireTimeoutMs:r=8e3,debug:s=!1}=e;function i(a,l){var u,d;if(!o)return a;const c=(u=l.networkInfo)==null?void 0:u.effectiveType;if((d=l.networkInfo)!=null&&d.saveData)return 1;switch(c){case"slow-2g":case"2g":return 1;case"3g":return Math.max(1,Math.floor(a/2));case"4g":default:return a}}return{name:"concurrency-control",version:"1.0.0",config:e,hooks:{onLoad:async a=>{var u;const l=ai(a.src,n),c=i(t,a);try{await wr.acquire(l,c,s,r)}catch(d){s&&console.debug("[ConcurrencyControl] proceed without permit due to:",d);return}try{(u=a.sharedData)==null||u.set("cc:key",l)}catch{}},onLoadSuccess:a=>{var u;const l=((u=a.sharedData)==null?void 0:u.get("cc:key"))||ai(a.src,n),c=i(t,a);wr.release(l,c,s)},onLoadError:a=>{var u;const l=((u=a.sharedData)==null?void 0:u.get("cc:key"))||ai(a.src,n),c=i(t,a);return wr.release(l,c,s),!0},onUnmount:a=>{var c,u;const l=(c=a.sharedData)==null?void 0:c.get("cc:key");if(typeof l=="string"){const d=i(t,a);wr.release(l,d,s);try{(u=a.sharedData)==null||u.delete("cc:key")}catch{}}}}}}const PY="ConcurrencyControlPlugin",$Y="并发控制：限制同时加载数量，支持按域名分片与网络自适应。",SY="2.0.0",CY=["loading","加载策略"],LY=[{name:"onUnmount",when:"组件卸载前执行一次",description:"释放监听、定时器与观察器；与 onMount 成对出现，避免泄漏"},{name:"onLoad",when:"加载流程开始、需要确定最终图片地址时",description:"自定义加载逻辑，返回最终图片 URL（objectURL / dataURL / 原地址）"},{name:"onLoadSuccess",when:"图片成功解码可显示时",description:"拿到最终 displaySrc 做后续动作（上报、预取下张、淡入）"},{name:"onLoadError",when:"加载失败（网络错误、解码失败、超时）",description:"返回 true 表示错误已被处理（如切换备用源），否则继续走默认降级"}],IY=[],kY="只读取 context 字段（props / state / data），不调用上下文方法",_Y=[{name:"maxConcurrent",type:"number",default:"4",description:"并发上限（4g 情况的上限）"},{name:"scope",type:'"global" | "perHost"',default:'"global"',description:"作用域：全局或按域名分片"},{name:"adaptive",type:"boolean",default:"true",description:"是否根据网络自适应并发（saveData/2g/3g 降低并发）"},{name:"acquireTimeoutMs",type:"number",default:"8000",description:"获取并发许可的超时（毫秒），超时后不阻塞加载，避免饥饿"},{name:"debug",type:"boolean",default:"false",description:"调试输出"}],EY=`const LazyImage = withPlugins(LazyLoadImageCore, [
  createConcurrencyControlPlugin({
    maxConcurrent: 6,
    scope: "perHost", // 按域名分片，避免单域阻塞
    adaptive: true,    // 弱网自动降低并发
  }),
]);`,RY=[{name:"全局并发限制",description:"限制整页同时加载不超过 4 张，避免带宽被瞬间打满。",config:{maxConcurrent:4,scope:"global"}},{name:"按域名分片",description:"每个域名独立并发配额，混合多 CDN 时不互相拖累。",config:{maxConcurrent:6,scope:"perHost",adaptive:!0}}],zY=["全局或按域名（perHost）分片并发门控","弱网（saveData / 2g / 3g）下自适应降低并发","acquireTimeoutMs 后不阻塞加载，避免饥饿"],OY=["瀑布流海量图片，避免一次性发起上百请求","弱网环境限制并发以保住首屏体验"],DY=["acquireTimeoutMs 保证极端情况下不会永久挂起。","与 ScrollIdle 搭配可进一步错峰、降低峰值并发。","并发许可在加载完成后释放，供队列中下一张使用。"],MY={name:PY,description:$Y,since:SY,tags:CY,events:LY,methods:IY,methodsNote:kY,config:_Y,example:EY,examples:RY,features:zY,useCases:OY,notes:DY};function jY(e,t,n){try{const o=new URL(e,typeof window<"u"?window.location.origin:"http://localhost");return o.searchParams.set(t,n),o.toString()}catch{const o=e.includes("?")?"&":"?";return`${e}${o}${encodeURIComponent(t)}=${encodeURIComponent(n)}`}}function TY(e={}){const{respectSaveData:t=!0,fallbackQuality:n=.6,disablePreload:o=!0,qualityParam:r="quality"}=e;return{name:"data-saver",version:"1.0.0",config:e,hooks:{transformProps:s=>{var i;try{const a=((i=navigator==null?void 0:navigator.connection)==null?void 0:i.saveData)===!0;if(!t||!a)return s;const l=Math.max(0,Math.min(1,n)),c=jY(s.src,r,String(l)),u={...s,src:c};return o&&(u.loading="lazy"),u}catch{return s}}}}}const NY="DataSaverPlugin",AY="省流模式：saveData 开启时降低质量参数并禁用预加载。",BY="2.0.0",UY=["loading","加载策略"],FY=[{name:"transformProps",when:"渲染前链式改写图片 props",description:"补 sizes / 占位色 / 解码策略等"}],WY=[],VY="只读取 context 字段（props / state / data），不调用上下文方法",HY=[{name:"respectSaveData",type:"boolean",default:"true",description:"仅在 navigator.connection.saveData=true 时降质（关闭则强制降质）"},{name:"fallbackQuality",type:"number",default:"0.6",description:"0..1"},{name:"disablePreload",type:"boolean",default:"true",description:"省流量模式下禁用 preload / prefetch 预取"},{name:"qualityParam",type:"string",default:'"quality"',description:'query param name, e.g. "quality" or "q"'}],GY=`const LazyImage = withPlugins(LazyLoadImageCore, [
  createDataSaverPlugin({
    respectSaveData: true, // 尊重系统省流开关
    fallbackQuality: 0.5,  // 省流时质量降到 0.5
    qualityParam: "q",     // 追加 ?q=0.5
  }),
]);`,qY=[{name:"尊重系统省流",description:"检测到 saveData 时自动降质并禁用预加载，仅在省流模式下生效。",config:{respectSaveData:!0,fallbackQuality:.5,qualityParam:"q"}},{name:"始终省流",description:"忽略系统开关，始终追加低质量参数，适合极端省流场景。",config:{respectSaveData:!1,fallbackQuality:.4,disablePreload:!0}}],QY=["读取 navigator.connection.saveData，开启时自动降质","自动追加质量查询参数（如 ?q=0.6）","可选禁用预加载以进一步省流"],KY=["移动端弱流量用户自动减负","按运营策略全局降质"],YY=["依赖业务 CDN 支持对应质量参数，否则参数无效。","respectSaveData=false 时按 fallbackQuality 强制降质（无视系统开关）。","与 ImageOptimization 叠加时，省流质量会进一步覆盖优化质量。"],XY={name:NY,description:AY,since:BY,tags:UY,events:FY,methods:WY,methodsNote:VY,config:HY,example:GY,examples:qY,features:QY,useCases:KY,notes:YY},ZY=typeof window<"u"&&window.requestIdleCallback?window.requestIdleCallback:(e,t)=>setTimeout(e,(t==null?void 0:t.timeout)??0);function JY(e={}){const{enabled:t=!0,timeoutMs:n=600}=e;return{name:"decode-after-idle",version:"1.0.0",config:e,hooks:{onLoadSuccess:o=>{var s;if(!t)return;const r=(s=o.imageRef)==null?void 0:s.current;!r||!r.decode||ZY(async()=>{var i;try{await((i=r.decode)==null?void 0:i.call(r))}catch{}},{timeout:n})},transformProps:o=>({...o,decoding:"async"})}}}const eX="DecodeAfterIdlePlugin",tX="空闲解码：图片加载成功后延迟到浏览器空闲时段再执行 img.decode()，避免大图解码阻塞主线程，提升交互流畅度。",nX="2.0.0",oX=["loading","加载策略","解码","性能"],rX=[{name:"onLoadSuccess",when:"图片成功解码可显示时",description:"拿到最终 displaySrc 做后续动作（上报、预取下张、淡入）"},{name:"transformProps",when:"渲染前链式改写图片 props",description:"补 sizes / 占位色 / 解码策略等"}],sX=[],iX="只读取 context 字段（props / state / data），不调用上下文方法",aX=[{name:"enabled",type:"boolean",default:"true",description:"是否启用空闲解码"},{name:"timeoutMs",type:"number",default:"600",description:"最长等待空闲的兜底时间(ms)"}],lX=`import { LazyLoadImageCore, createDecodeAfterIdlePlugin, withPlugins } from "vane-lazy-image";

const LazyImage = withPlugins(LazyLoadImageCore, [
  createDecodeAfterIdlePlugin({ enabled: true, timeoutMs: 1000 }),
]);

<LazyImage src="https://picsum.photos/seed/decode/1200/800" alt="空闲解码示例" />`,cX=[{name:"默认空闲解码",description:"成功后于空闲时段执行 decode，并设置 decoding=async。",src:"https://picsum.photos/seed/decode/1200/800",config:{}},{name:"自定义超时",description:"放宽最长等待空闲时间到 1000ms。",src:"https://picsum.photos/seed/decode-timeout/1200/800",config:{timeoutMs:1e3}}],uX=["成功后 requestIdleCallback 内调用 img.decode()",'自动设置 decoding="async"',"requestIdleCallback 不可用时回退 setTimeout"],dX=["图片密集型信息流防止解码卡顿","首屏后延迟解码，优先保证交互响应"],pX=["timeoutMs 控制最长等待空闲的兜底时间","decode 失败被静默忽略，不影响显示"],mX={name:eX,description:tX,since:nX,tags:oX,events:rX,methods:sX,methodsNote:iX,config:aX,example:lX,examples:cX,features:uX,useCases:dX,notes:pX};function li(e,t="anonymous"){if(typeof document>"u")return;const n=`lli-preconnect-${e}`;if(document.getElementById(n))return;const o=document.createElement("link");o.id=n,o.rel="preconnect",o.href=e,t&&(o.crossOrigin=t),document.head.appendChild(o)}function tu(e){if(typeof document>"u")return;const t=`lli-preconnect-${e}`,n=document.getElementById(t);n&&n.remove()}function ci(e){try{const t=new URL(e,typeof window<"u"?window.location.origin:"http://localhost");return`${t.protocol}//${t.host}`}catch{return null}}const gX=Kp("lli-preconnect-","已预连");function fX(e={}){const{showBadge:t=!1}=e;return{name:"preconnect",version:"2.0.0",config:e,hooks:{onMount:n=>{const o=ci(n.src);o&&li(o,e.crossOrigin??"anonymous"),e.domains&&Array.isArray(e.domains)&&e.domains.forEach(r=>li(r,e.crossOrigin??"anonymous"))},onUnmount:n=>{const o=ci(n.src);o&&tu(o),e.domains&&Array.isArray(e.domains)&&e.domains.forEach(r=>tu(r))},onSrcChange:(n,o,r)=>{const s=ci(r);s&&li(s,e.crossOrigin??"anonymous")},renderOverlay:()=>t?N.createElement(gX):null}}}const hX="PreconnectPlugin",yX="DNS 预连接：提前与图片域名建立连接，可配置跨域。",vX="2.0.0",wX=["loading","加载策略"],xX=[{name:"onMount",when:"组件挂载完成、插件注册后执行一次（返回的清理函数在 manager.clear 时逆序执行）",description:"初始化副作用：注册监听、起定时器、建观察器；必须返回清理函数或配合 onUnmount 收尾"},{name:"onUnmount",when:"组件卸载前执行一次",description:"释放监听、定时器与观察器；与 onMount 成对出现，避免泄漏"},{name:"onSrcChange",when:"src 变化、切换到新图时",description:"重置状态、清理旧缓存、重新进入懒加载判定"},{name:"renderOverlay",when:"每次渲染，覆盖在图片容器之上",description:"骨架屏、错误占位、水印、加载动画"}],bX=[],PX="只读取 context 字段（props / state / data），不调用上下文方法",$X=[{name:"domains",type:"string[]",description:"额外预连接域名"},{name:"crossOrigin",type:"string | null",description:'"anonymous" | "use-credentials" | null'},{name:"showBadge",type:"boolean",default:"false",description:"是否在卡片上显示「已预连 N」徽标（便于观察注入效果）"}],SX=`const LazyImage = withPlugins(LazyLoadImageCore, [
  createPreconnectPlugin({
    domains: ["https://cdn.example.com", "https://img.example.com"],
    crossOrigin: "anonymous",
  }),
]);`,CX=[{name:"基础预连接",description:"为图片 CDN 域名提前建连，消除首图 DNS/TLS 往返，更快出现。",config:{domains:["https://picsum.photos"],crossOrigin:"anonymous",showBadge:!0}},{name:"多域名预连接",description:"同时预连接多个静态资源域名，适合跨 CDN 的图片源。",config:{domains:["https://picsum.photos","https://fastly.picsum.photos"],crossOrigin:"anonymous"}}],LX=['挂载时注入 <link rel="preconnect">，提前完成 DNS/TCP/TLS 握手',"支持跨域凭证配置（crossOrigin: anonymous / use-credentials）","与浏览器默认预连接策略互补，相同域名不会重复注入"],IX=["图片托管在独立 CDN 域名时，消除首图握手延迟","瀑布流列表首屏涉及多个静态资源域名"],kX=["仅注入预连接提示，不保证一定建连，实际收益取决于浏览器调度。","不宜预连接过多域名，以免占用有限的连接资源。","已在本插件内去重，重复传入相同域名只会注入一次。"],_X={name:hX,description:yX,since:vX,tags:wX,events:xX,methods:bX,methodsNote:PX,config:$X,example:SX,examples:CX,features:LX,useCases:IX,notes:kX},EX=Object.assign(bY,{meta:MY}),RX=Object.assign(TY,{meta:XY}),zX=Object.assign(JY,{meta:mX}),OX=Object.assign(fX,{meta:_X});function DX(e={}){const{durationMs:t=400,easing:n="ease"}=e;return{name:"fade-in",version:"1.0.0",config:e,hooks:{onMount:o=>{let r=0;const s=()=>{var a;const i=(a=o.imageRef)==null?void 0:a.current;if(!i){r++<60&&requestAnimationFrame(s);return}try{i.style.opacity="0",i.style.transition=`opacity ${t}ms ${n}`}catch{}};s()},onLoadSuccess:o=>{var s;const r=(s=o.imageRef)==null?void 0:s.current;if(r)try{r.style.opacity="1"}catch{}}}}}const MX="FadeInPlugin",jX="加载完成后淡入显示，可自定义时长与缓动函数。",TX="2.0.0",NX=["visual","视觉"],AX=[{name:"onMount",when:"组件挂载完成、插件注册后执行一次（返回的清理函数在 manager.clear 时逆序执行）",description:"初始化副作用：注册监听、起定时器、建观察器；必须返回清理函数或配合 onUnmount 收尾"},{name:"onLoadSuccess",when:"图片成功解码可显示时",description:"拿到最终 displaySrc 做后续动作（上报、预取下张、淡入）"}],BX=[],UX="只读取 context 字段（props / state / data），不调用上下文方法",FX=[{name:"durationMs",type:"number",default:"400",description:"淡入时长 ms"},{name:"easing",type:"string",default:"ease",description:"缓动函数（CSS easing）"}],WX=`// 加载完成后淡入
const FadeImage = withPlugins(LazyLoadImageCore, [
  createFadeInPlugin({ durationMs: 450 }),
]);

<FadeImage src="https://picsum.photos/seed/fadein/600/400" alt="淡入" />;`,VX=[{name:"默认淡入",description:"450ms 标准 ease 淡入，干净利落。",src:"https://picsum.photos/seed/fadein-default/600/400",config:{durationMs:450}},{name:"慢速缓出",description:"800ms ease-out，让图片「缓缓浮现」。",src:"https://picsum.photos/seed/fadein-slow/600/400",config:{durationMs:800,easing:"ease-out"}}],HX=["加载成功淡入显示","时长可调","缓动函数可定制（ease / ease-out / cubic-bezier 等）","与 BlurUp 互补"],GX=["画廊 / 相册图片入场","内容型站点图片显现","与滚动进入联动的柔和出现","任意需要「渐显」的场景"],qX=["easing 接受任意 CSS timing-function 字符串。","与 Transition 不同，FadeIn 仅处理「淡入」单一维度，更简单。"],QX={name:MX,description:jX,since:TX,tags:NX,events:AX,methods:BX,methodsNote:UX,config:FX,example:WX,examples:VX,features:HX,useCases:GX,notes:qX},KX=Object.assign(DX,{meta:QX});var YX=Object.defineProperty,XX=(e,t,n)=>t in e?YX(e,t,{enumerable:!0,configurable:!0,writable:!0,value:n}):e[t]=n,Dn=(e,t,n)=>XX(e,typeof t!="symbol"?t+"":t,n);let fl=class{constructor(t,n){if(Dn(this,"cache"),Dn(this,"maxSize"),Dn(this,"onEvict"),t<=0)throw new Error("LRUCache maxSize must be greater than 0");this.cache=new Map,this.maxSize=t,this.onEvict=n}get(t){const n=this.cache.get(t);return n!==void 0&&(this.cache.delete(t),this.cache.set(t,n)),n}set(t,n){if(this.cache.has(t)&&this.cache.delete(t),this.cache.set(t,n),this.cache.size>this.maxSize){const o=this.cache.keys().next().value;if(o!==void 0){const r=this.cache.get(o);if(this.cache.delete(o),this.onEvict&&r!==void 0)try{this.onEvict(o,r)}catch(s){console.warn("[LRUCache] onEvict callback error:",s)}}}}delete(t){const n=this.cache.get(t),o=this.cache.delete(t);if(o&&this.onEvict&&n!==void 0)try{this.onEvict(t,n)}catch(r){console.warn("[LRUCache] onEvict callback error:",r)}return o}has(t){return this.cache.has(t)}clear(){this.onEvict&&this.cache.forEach((t,n)=>{try{this.onEvict(n,t)}catch(o){console.warn("[LRUCache] onEvict callback error:",o)}}),this.cache.clear()}get size(){return this.cache.size}keys(){return this.cache.keys()}values(){return this.cache.values()}forEach(t){this.cache.forEach(t)}};class ZX{constructor(t=1e3,n=10){Dn(this,"samples",[]),Dn(this,"windowSize"),Dn(this,"maxSamples"),this.windowSize=t,this.maxSamples=n}addSample(t){const n=Date.now();this.samples.push({bytes:t,timestamp:n});const o=n-this.windowSize;this.samples=this.samples.filter(r=>r.timestamp>o),this.samples.length>this.maxSamples&&this.samples.shift()}getSpeed(){if(this.samples.length<2)return 0;const t=this.samples[0],n=this.samples[this.samples.length-1],o=n.bytes-t.bytes,r=(n.timestamp-t.timestamp)/1e3;return r<=0?0:o/r}estimateTimeRemaining(t,n){const o=this.getSpeed();return o<=0||n<=0?0:(n-t)/o}reset(){this.samples=[]}}const xr=new fl(kt.CACHE_SIZE_INFLIGHT),mn=new fl(kt.CACHE_SIZE_CONTROLLERS,(e,t)=>{try{t.abort()}catch{}}),ui=new fl(kt.CACHE_SIZE_OBJECT_URLS,(e,t)=>{try{URL.revokeObjectURL(t)}catch{}});function JX(e={}){const{enabled:t=!0,cacheKeyFn:n,timeout:o=kt.TIMEOUT,maxRetries:r=kt.MAX_RETRIES,retryDelay:s=kt.RETRY_DELAY,retryBackoff:i=kt.RETRY_BACKOFF}=e,a=v=>{l(v.src)},l=v=>{const w=n?n(v):v,b=mn.get(w);if(b){try{b.abort()}catch{}mn.delete(w)}},c=v=>{u(v.src)},u=v=>{const w=n?n(v):v,b=ui.get(w);if(b){try{URL.revokeObjectURL(b)}catch{}ui.delete(w)}},d=v=>{var w,b;try{(w=v.sharedData)!=null&&w.has("fetch-loader:object-url")&&v.sharedData.delete("fetch-loader:object-url"),(b=v.sharedData)!=null&&b.has("fetch-loader:blob")&&v.sharedData.delete("fetch-loader:blob")}catch{}};async function p(v,w,b=0){try{const h=fetch(v,{signal:w}),g=new Promise((P,$)=>{setTimeout(()=>{$(new Error(`Fetch timeout after ${o}ms`))},o)}),y=await Promise.race([h,g]);if(!y.ok)throw y.status>=ca.CLIENT_ERROR_MIN&&y.status<ca.CLIENT_ERROR_MAX?new Error(`HTTP ${y.status}: ${y.statusText}`):new Error(`Server error: ${y.status}`);return y}catch(h){if(w.aborted||h.name==="AbortError"||b>=r||h.message&&(h.message.includes("404")||h.message.includes("403")||h.message.includes("401")))throw h;const g=s*Math.pow(i,b);if(console.debug(`[FetchLoader] Retrying (${b+1}/${r}) after ${g}ms for ${v}`),await new Promise(y=>setTimeout(y,g)),w.aborted)throw new Error("Request aborted during retry delay");return p(v,w,b+1)}}async function f(v){const w=v.src,b=n?n(w):w;if(xr.has(b))return xr.get(b);const h=(async()=>{var $,I,k;const g=new AbortController,{signal:y}=g;mn.set(b,g);const P=new ZX;try{const _=await p(w,y);if(!_.body){mn.delete(b);return}const S=_.headers.get("content-length"),L=S?parseInt(S,10):0,j=_.body.getReader(),A=[];let z=0;try{for(;;){const{done:re,value:K}=await j.read();if(re)break;if(K){A.push(K),z+=K.length,P.addSample(z);const R={loaded:z,total:L,percent:L>0?Math.round(z/L*100):0,indeterminate:L===0,speed:P.getSpeed(),estimatedTime:P.estimateTimeRemaining(z,L),timestamp:Date.now()};($=v.bus)==null||$.emit("progress",R)}}}finally{j.releaseLock()}const O=new Blob(A),U=URL.createObjectURL(O);ui.set(b,U),mn.delete(b);try{(I=v.sharedData)==null||I.set("fetch-loader:blob",O),(k=v.sharedData)==null||k.set("fetch-loader:object-url",U)}catch{}return U}catch(_){if(mn.delete(b),_.name==="AbortError"||y.aborted)return;console.warn(`[FetchLoader] Failed to load ${w}:`,_.message);return}finally{xr.delete(b)}})();return xr.set(b,h),h}return{name:"fetch-loader",version:"1.1.0",description:"fetch 流式加载并返回 objectURL；失败返回 undefined（P1-6）",priority:10,timeout:0,config:e,hooks:{async onLoad(v){if(t)try{return await f(v)}catch(w){console.warn("[FetchLoader] onLoad error:",w);return}},onSrcChange(v,w){l(w),u(w),d(v)},onUnmount(v){a(v),c(v),d(v)}}}}const eZ="FetchLoaderPlugin",tZ="fetch 流式加载器：将图片以 blob/objectURL 形式加载，支持进度上报（speed/ETA）、超时、指数退避重试、请求去重与 objectURL 自动回收。高优先级（domain priority 10），先于其他插件执行。",nZ="2.0.0",oZ=["loading","加载策略"],rZ=[{name:"onUnmount",when:"组件卸载前执行一次",description:"释放监听、定时器与观察器；与 onMount 成对出现，避免泄漏"},{name:"onLoad",when:"加载流程开始、需要确定最终图片地址时",description:"自定义加载逻辑，返回最终图片 URL（objectURL / dataURL / 原地址）"},{name:"onSrcChange",when:"src 变化、切换到新图时",description:"重置状态、清理旧缓存、重新进入懒加载判定"},{name:"progress",when:"流式加载进度更新时",description:"广播 { loaded, total }，桥接到 onProgress 钩子"}],sZ=[],iZ="只读取 context 字段（props / state / data），不调用上下文方法",aZ=[{name:"enabled",type:"boolean",default:"true",description:"是否启用 fetch 加载（关闭后走浏览器默认加载）"},{name:"cacheKeyFn",type:"(src: string) => string",description:"自定义去重键，默认使用 src"},{name:"maxCacheSize",type:"number",description:"in-flight 请求缓存最大条目数"},{name:"maxControllers",type:"number",description:"AbortController 缓存上限，淘汰时自动 abort"},{name:"maxObjectUrls",type:"number",description:"objectURL 缓存上限，淘汰时自动 revokeObjectURL"},{name:"timeout",type:"number",default:"30000",description:"单次请求超时（毫秒）"},{name:"maxRetries",type:"number",default:"3",description:"最大重试次数（4xx 不重试）"},{name:"retryDelay",type:"number",default:"1000",description:"首次重试延迟（毫秒）"},{name:"retryBackoff",type:"number",default:"2",description:"重试退避倍数"}],lZ=`const LazyImage = withPlugins(LazyLoadImageCore, [
  createFetchLoaderPlugin({
    timeout: 20000,    // 20s 超时
    maxRetries: 5,     // 最多重试 5 次
    retryBackoff: 2,   // 指数退避
  }),
]);`,cZ=[{name:"默认 fetch 加载",description:"流式加载 + 真实进度（速度 / ETA）+ 自动去重与 objectURL 回收。",config:{timeout:3e4,maxRetries:3,retryBackoff:2}},{name:"弱网增强重试",description:"更长超时与更多重试，适合不稳定网络环境。",config:{timeout:45e3,maxRetries:6,retryDelay:1500,retryBackoff:2}}],uZ=["以 fetch 把图片读为 Blob/objectURL，支持流式进度（速度 / ETA）","请求超时 + 指数退避重试（4xx 不重试）","in-flight 请求去重、AbortController / objectURL 自动回收","高优先级（domain priority 10），先于其它插件执行"],dZ=["需要真实下载进度条的大图 / 原图","不稳定网络下需要重试保障"],pZ=["关闭 enabled 则走浏览器默认 <img> 加载。","objectURL 由插件在卸载 / 淘汰时自动 revoke，避免内存泄漏。","cacheKeyFn 为函数，需在“用法示例”中以代码传入；静态预览使用纯配置。"],mZ={name:eZ,description:tZ,since:nZ,tags:oZ,events:rZ,methods:sZ,methodsNote:iZ,config:aZ,example:lZ,examples:cZ,features:uZ,useCases:dZ,notes:pZ},gZ=Object.assign(JX,{meta:mZ}),fZ="CacheIDBPlugin",hZ="IndexedDB 持久缓存：跨会话缓存图片 Blob/dataURL，支持 TTL。",yZ="2.0.0",vZ=["cache","缓存"],wZ=[{name:"onUnmount",when:"组件卸载前执行一次",description:"释放监听、定时器与观察器；与 onMount 成对出现，避免泄漏"},{name:"onLoad",when:"加载流程开始、需要确定最终图片地址时",description:"自定义加载逻辑，返回最终图片 URL（objectURL / dataURL / 原地址）"},{name:"onLoadSuccess",when:"图片成功解码可显示时",description:"拿到最终 displaySrc 做后续动作（上报、预取下张、淡入）"},{name:"onSrcChange",when:"src 变化、切换到新图时",description:"重置状态、清理旧缓存、重新进入懒加载判定"},{name:"cache:hit",when:"命中 IndexedDB 缓存、跳过网络请求时",description:"携带 { level, src }，可用于统计缓存命中率"}],xZ=[],bZ="只读取 context 字段（props / state / data），不调用上下文方法",PZ=[{name:"enabled",type:"boolean",default:"true",description:"是否启用 IndexedDB 缓存（关闭后每次都走网络）"},{name:"dbName",type:"string",default:'"LLI-Cache"',description:"IndexedDB 数据库名，多实例共用同一个库"},{name:"storeName",type:"string",default:'"images"',description:"对象仓库名，缓存条目存在该 store 下"},{name:"ttlMs",type:"number",default:"604800000",description:"过期时间（毫秒）"},{name:"debug",type:"boolean",description:"是否输出读写 / 命中调试日志"}],$Z=`const LazyImage = withPlugins(LazyLoadImageCore, [
  createIDBCachePlugin({
    dbName: "LLI-Cache",
    storeName: "images",
    ttlMs: 7 * 24 * 60 * 60 * 1000, // 7 天
  }),
]);`,SZ=[{name:"默认持久缓存",description:"跨会话缓存图片 Blob，刷新 / 重开应用仍命中，秒开头部图。",config:{ttlMs:6048e5}},{name:"自定义库与过期",description:"独立库名隔离业务数据，30 天过期。",config:{dbName:"App-Img",storeName:"photos",ttlMs:2592e6}}],CZ=["用 IndexedDB 持久化图片 Blob / dataURL","支持 TTL（默认 7 天），过期自动清理","优先存 Blob，其次 dataURL，节省空间"],LZ=["离线优先 / PWA 图片缓存","重开应用仍需秒开的头部图、用户头像"],IZ=["仅在支持 IndexedDB 的环境生效，SSR / Node 端无副作用。","与 CachePrewarmPlugin 配合可实现“进入视口即落盘”。","多实例请使用不同 dbName / storeName 避免相互覆盖。"],kZ={name:fZ,description:hZ,since:yZ,tags:vZ,events:wZ,methods:xZ,methodsNote:bZ,config:PZ,example:$Z,examples:SZ,features:CZ,useCases:LZ,notes:IZ},_Z=Object.assign(t4,{meta:kZ});function EZ(e={}){const{debounceMs:t=200,maxWaitMs:n=1200,onlyWhenIntersecting:o=!0,debug:r=!1}=e,s="viewport-debounce:inView";return{name:"viewport-debounce",version:"2.0.0",config:e,hooks:{onEnterViewport:i=>{var a;try{(a=i.sharedData)==null||a.set(s,!0)}catch{}if(r)try{console.debug("[ViewportDebounce] enter",i.src)}catch{}},onLeaveViewport:i=>{var a;try{(a=i.sharedData)==null||a.set(s,!1)}catch{}if(r)try{console.debug("[ViewportDebounce] leave",i.src)}catch{}},onBeforeLoad:async i=>{var c;const a=Date.now(),l=u=>new Promise(d=>setTimeout(d,u));for(;;){const u=!!((c=i.sharedData)!=null&&c.get(s)),d=Date.now()-a;if(!u&&o&&d<n){if(r)try{console.debug("[ViewportDebounce] aborted (left before stable)",i.src)}catch{}return!1}if(d>=t){if(r)try{console.debug("[ViewportDebounce] stable, proceed",i.src,{elapsed:d})}catch{}return!0}await l(30)}},onUnmount:i=>{var a;try{(a=i.sharedData)==null||a.delete(s)}catch{}}}}}const RZ="ViewportDebouncePlugin",zZ="视口防抖（v2 真实实现）：进入视口后并不立即加载，而是等待元素「稳定停留 debounceMs」才放行；若期间离开视口且未达 maxWaitMs 上限，则中止本次加载，真正避免快速滚动时误加载/重复加载。",OZ="2.0.0",DZ=["viewport","视口与交互","防抖"],MZ=[{name:"onUnmount",when:"组件卸载前执行一次",description:"释放监听、定时器与观察器；与 onMount 成对出现，避免泄漏"},{name:"onBeforeLoad",when:"发起图片请求之前",description:"返回 false 可阻断本次加载（如权限校验、占位策略）"},{name:"onEnterViewport",when:"元素进入视口（IntersectionObserver）",description:"触发懒加载、开始请求、曝光上报"},{name:"onLeaveViewport",when:"元素离开视口",description:"暂停 / 中止在途请求、回收资源"}],jZ=[],TZ="只读取 context 字段（props / state / data），不调用上下文方法",NZ=[{name:"debounceMs",type:"number",default:"200",description:"进入视口后需稳定停留的时长（毫秒），到时才放行加载"},{name:"maxWaitMs",type:"number",default:"1200",description:"最长等待上限，避免快速来回一直不加载（饥饿保护）"},{name:"onlyWhenIntersecting",type:"boolean",default:"true",description:"仅在进入视口时门控；若离开且未达 maxWaitMs 则中止本次加载"},{name:"debug",type:"boolean",default:"false",description:"是否输出调试日志"}],AZ=`const StableImage = withPlugins(LazyLoadImageCore, [
  // 进入视口稳定 200ms 才加载，快速划过直接放弃
  createViewportDebouncePlugin({ debounceMs: 200, maxWaitMs: 1200 }),
]);

<StableImage src="https://picsum.photos/id/1015/500/300" alt="视口防抖示例" />;`,BZ=[{name:"默认防抖（200ms）",description:"快速滚动时抑制抖动：元素需稳定停留 200ms 才加载，一闪而过的不加载。",src:"https://picsum.photos/id/1015/500/300",config:{debounceMs:200}},{name:"加大防抖间隔",description:"300ms 间隔，更适合惯性较大的移动端滚动。",src:"https://picsum.photos/id/1020/500/300",config:{debounceMs:300}},{name:"开启调试日志",description:"控制台输出稳定/中止判定日志，便于排查。",src:"https://picsum.photos/id/1025/500/300",config:{debounceMs:200,debug:!0}}],UZ=["门控钩子真正延迟加载到稳定期","快速划过（离开未达上限）中止加载","maxWaitMs 饥饿保护","可调防抖间隔与上限","调试日志输出"],FZ=["快速滚动列表 / 瀑布流","移动端惯性滚动","防止抖动导致的重复加载","仅加载用户真正停留浏览的图片"],WZ=["依赖引擎门控能力（onBeforeLoad 返回 false 中止加载），已在本插件中落地；与 ViewportAware 的 rootMargin 搭配可进一步调优触发时机。"],VZ={name:RZ,description:zZ,since:OZ,tags:DZ,events:MZ,methods:jZ,methodsNote:TZ,config:NZ,example:AZ,examples:BZ,features:UZ,useCases:FZ,notes:WZ},HZ="CacheMemoryPlugin",GZ="内存 LRU 缓存：会话内缓存图片数据，可配置容量与过期时间。",qZ="2.0.0",QZ=["cache","缓存"],KZ=[{name:"onUnmount",when:"组件卸载前执行一次",description:"释放监听、定时器与观察器；与 onMount 成对出现，避免泄漏"},{name:"onLoad",when:"加载流程开始、需要确定最终图片地址时",description:"自定义加载逻辑，返回最终图片 URL（objectURL / dataURL / 原地址）"},{name:"onLoadSuccess",when:"图片成功解码可显示时",description:"拿到最终 displaySrc 做后续动作（上报、预取下张、淡入）"},{name:"onSrcChange",when:"src 变化、切换到新图时",description:"重置状态、清理旧缓存、重新进入懒加载判定"}],YZ=[],XZ="只读取 context 字段（props / state / data），不调用上下文方法",ZZ=[{name:"enabled",type:"boolean",default:"true",description:"是否启用内存缓存"},{name:"maxEntries",type:"number",default:"200",description:"LRU 最大条目"},{name:"ttlMs",type:"number",description:"过期时间，默认不过期"},{name:"debug",type:"boolean",default:"false",description:"是否输出 LRU 命中 / 淘汰调试日志"}],JZ=`const LazyImage = withPlugins(LazyLoadImageCore, [
  createMemoryCachePlugin({
    maxEntries: 300,
    ttlMs: 5 * 60 * 1000, // 5 分钟过期
  }),
]);`,eJ=[{name:"默认内存缓存",description:"会话内 LRU 缓存（默认 200 条），同一图片重复访问零网络。",config:{maxEntries:200}},{name:"限定过期时间",description:"5 分钟后条目失效，在命中率与内存占用之间取得平衡。",config:{maxEntries:300,ttlMs:3e5}}],tJ=["会话内 LRU 缓存（默认 200 条）","可选 TTL 过期时间","内存受限时自动淘汰最久未用条目"],nJ=["同一图片在列表 / 详情多处复用","快速来回切换的画廊、相册"],oJ=["内存缓存不跨会话，刷新页面即失效。","需要跨会话持久请配合 IDBCachePlugin。","命中时直接返回已缓存数据，跳过网络请求。"],rJ={name:HZ,description:GZ,since:qZ,tags:QZ,events:KZ,methods:YZ,methodsNote:XZ,config:ZZ,example:JZ,examples:eJ,features:tJ,useCases:nJ,notes:oJ},sJ=Object.assign(EZ,{meta:VZ}),iJ=Object.assign(o4,{meta:rJ});function aJ(e,t,n,o){const r=e.src,s=o.get(r);s&&clearTimeout(s);const i=(t.baseDelayMs??500)*Math.pow(2,Math.max(0,n-1)),a=t.jitter?Math.random()*.25*i:0,l=i+a,c=setTimeout(()=>{var d;o.delete(r);const u=(d=e.imageRef)==null?void 0:d.current;if(u)try{const p=`${r}${r.includes("?")?"&":"?"}retry=${Date.now()}&n=${n}`;u.src=p}catch{}},l);o.set(r,c)}function lJ(e={}){const{maxRetries:t=2}=e,n=new Map,o=r=>`retry-count:${r}`;return{name:"retry-on-error",version:"1.1.0",description:"图片加载失败后退避重试；计数按 src 隔离、定时器可取消（P2-5）",config:e,hooks:{onLoadError:(r,s)=>{var l,c,u,d;try{(l=r.sharedData)==null||l.set("had-error",!0)}catch{}const i=o(r.src),a=Number(((c=r.sharedData)==null?void 0:c.get(i))??0)+1;if(a<=t)return(u=r.sharedData)==null||u.set(i,a),aJ(r,e,a,n),!0;try{(d=r.sharedData)==null||d.set(i,a)}catch{}return!1},onSrcChange:(r,s)=>{const i=n.get(s);i&&(clearTimeout(i),n.delete(s))},onUnmount:()=>{n.forEach(r=>clearTimeout(r)),n.clear()},renderOverlay:r=>{var l;const s=Number(((l=r.sharedData)==null?void 0:l.get(o(r.src)))??0);if(s<=0)return null;const i=s>t,a={position:"absolute",top:6,right:6,zIndex:10,fontSize:12,fontWeight:600,color:"#fff",background:i?"rgba(108,117,125,0.9)":"rgba(255,149,0,0.92)",padding:"2px 8px",borderRadius:4};return N.createElement("div",{style:a},i?`重试失败 (${t})`:`重试中 ${s}/${t}`)}}}}const cJ="RetryOnErrorPlugin",uJ="失败重试：图片加载失败后按指数退避（可选抖动）自动重试，提升网络抖动 / 瞬时故障下的自愈成功率，并提供重试进度角标。",dJ="2.0.0",pJ=["network","网络","重试","自愈"],mJ=[{name:"onUnmount",when:"组件卸载前执行一次",description:"释放监听、定时器与观察器；与 onMount 成对出现，避免泄漏"},{name:"onLoadError",when:"加载失败（网络错误、解码失败、超时）",description:"返回 true 表示错误已被处理（如切换备用源），否则继续走默认降级"},{name:"onSrcChange",when:"src 变化、切换到新图时",description:"重置状态、清理旧缓存、重新进入懒加载判定"},{name:"renderOverlay",when:"每次渲染，覆盖在图片容器之上",description:"骨架屏、错误占位、水印、加载动画"}],gJ=[],fJ="只读取 context 字段（props / state / data），不调用上下文方法",hJ=[{name:"maxRetries",type:"number",default:"2",description:"最大重试次数"},{name:"baseDelayMs",type:"number",description:"退避基准毫秒（默认 500）"},{name:"jitter",type:"boolean",description:"是否在退避基础上叠加随机抖动"}],yJ=`import { LazyLoadImageCore, createRetryOnErrorPlugin, withPlugins } from "vane-lazy-image";

const LazyImage = withPlugins(LazyLoadImageCore, [
  createRetryOnErrorPlugin({ maxRetries: 3, baseDelayMs: 400, jitter: true }),
]);

// 故意触发失败以观察指数退避重试
<LazyImage src="https://invalid.example.com/x.png" alt="失败重试示例" />`,vJ=[{name:"自动重试",description:"失败后指数退避重试，用尽后角标显示『重试失败』（演示用无效地址）。",src:"https://invalid.example.com/retry.png",config:{maxRetries:3,baseDelayMs:400}},{name:"带抖动退避",description:"在指数退避基础上叠加随机抖动，避免重试风暴。",src:"https://invalid.example.com/retry-jitter.png",config:{maxRetries:2,baseDelayMs:600,jitter:!0}}],wJ=["指数退避重试：delay = baseDelayMs * 2^(n-1)","可选 jitter 抖动避免重试风暴","角标实时显示『重试中 n/max』与『重试失败(max)』","用尽后放行错误给下游插件（ErrorOverlay / ErrorBadge）"],xJ=["弱网 / 瞬时 5xx 自愈","与手动重试（ErrorOverlay）互补"],bJ=["maxRetries 默认 2，baseDelayMs 默认 500","重试用 ?retry=时间戳&n=count 防止缓存命中","重试用尽返回 false，错误继续向下游传播"],PJ={name:cJ,description:uJ,since:dJ,tags:pJ,events:mJ,methods:gJ,methodsNote:fJ,config:hJ,example:yJ,examples:vJ,features:wJ,useCases:xJ,notes:bJ},$J=Object.assign(lJ,{meta:PJ});var SJ=Object.defineProperty,CJ=(e,t,n)=>t in e?SJ(e,t,{enumerable:!0,configurable:!0,writable:!0,value:n}):e[t]=n,LJ=(e,t,n)=>CJ(e,t+"",n);function Yp(e,t,n){const{fetchPriority:o="high",as:r="image",imageSrcSet:s,imageSizes:i}=n||{};x.useEffect(()=>{if(!t||!e)return;const a=(()=>{try{return new URL(e,document.baseURI).href}catch{return e}})();if(Array.from(document.querySelectorAll('link[rel="preload"]')).find(c=>c.href===a))return;const l=document.createElement("link");return l.rel="preload",l.as=r,l.href=e,o!=="auto"&&l.setAttribute("fetchpriority",o),s&&(l.setAttribute("imagesrcset",s),i&&l.setAttribute("imagesizes",i)),document.head.appendChild(l),()=>{l.parentNode===document.head&&document.head.removeChild(l)}},[e,t,o,r,s,i])}function IJ(e,t){Yp(e,t)}function kJ(e,t){const n=(t==null?void 0:t.enabled)!==!1,o=(t==null?void 0:t.hookTimeout)??0;return function(...r){if(!n)return e.apply(this,r);if(o>0){const s=setTimeout(()=>{},o);try{const i=e.apply(this,r);return clearTimeout(s),i}catch(i){clearTimeout(s),t!=null&&t.debug&&console.warn(`[sandbox:${t==null?void 0:t.pluginName}] 钩子异常已被捕获`,i);return}}try{return e.apply(this,r)}catch(s){t!=null&&t.debug&&console.warn(`[sandbox:${t==null?void 0:t.pluginName}] 钩子异常已被捕获`,s);return}}}class _J{constructor(){LJ(this,"nodes",new Map)}addPlugin(t,n=[],o=[],r=[]){this.nodes.set(t,{deps:[...n],optDeps:[...o],conflicts:[...r]})}detectCycles(){const t=new Set,n=new Set,o=[],r=[],s=l=>{if(n.has(l)){const d=o.indexOf(l);d>=0&&r.push([...o.slice(d),l]);return}if(t.has(l))return;t.add(l),n.add(l),o.push(l);const c=this.nodes.get(l),u=c?[...c.deps,...c.optDeps]:[];for(const d of u)this.nodes.has(d)&&s(d);o.pop(),n.delete(l)};for(const l of this.nodes.keys())s(l);const i=new Set,a=[];for(const l of r){const c=[...l].sort().join("|");i.has(c)||(i.add(c),a.push(l))}return a}getTopologicalOrder(t){if(this.detectCycles().length>0)return[];const n=new Map;for(const s of t)n.set(s,0);for(const s of t){const i=this.nodes.get(s);if(i)for(const a of i.deps)n.has(a)&&n.set(a,(n.get(a)||0)+1)}const o=[];for(const[s,i]of n)i===0&&o.push(s);o.sort();const r=[];for(;o.length;){const s=o.shift();r.push(s);const i=this.nodes.get(s);if(i)for(const a of i.deps){if(!n.has(a))continue;const l=(n.get(a)||0)-1;n.set(a,l),l===0&&(o.push(a),o.sort())}}return r.length===t.length?r:[]}checkConflicts(t,n){const o=this.nodes.get(t);if(!o)return{hasConflict:!1,conflicts:[]};const r=o.conflicts.filter(s=>n.has(s));return{hasConflict:r.length>0,conflicts:r}}checkDependencies(t,n){const o=this.nodes.get(t);if(!o)return{satisfied:!0,missing:[]};const r=o.deps.filter(s=>!n.has(s));return{satisfied:r.length===0,missing:r}}}const EJ="2.0.0",di=Object.freeze(Object.defineProperty({__proto__:null,DependencyResolver:_J,FETCH_LOADER_DEFAULTS:kt,FILTER_PRESETS:AD,HTTP_STATUS:ca,IDBCache:Hp,IMAGE_FETCH_PRIORITY:fD,IMAGE_LOADING_STRATEGY:gD,INTERSECTION_OBSERVER_DEFAULTS:pD,LAZY_IMAGE_CORE_VERSION:EJ,LazyLoadImageCore:jp,MemoryCache:ss,PERFORMANCE_DEFAULTS:dD,PLUGIN_EVENTS:uD,PLUGIN_PRIORITY:cD,THROTTLE_DELAYS:mD,addGlobalContextListener:Bp,cleanupObserverPool:sD,compareVersions:Fn,createA11yPlugin:s6,createAdaptiveQualityPlugin:I7,createAltTextPlugin:T7,createAnimatedCursorPlugin:w7,createAntiHotlinkPlugin:k7,createAspectRatioSpacerPlugin:sH,createAuthPlugin:_7,createBadgePlugin:e7,createBatteryAwarePlugin:b7,createBlurUpPlugin:bH,createBorderGlowPlugin:t7,createCDNFallbackPlugin:E7,createCachePrewarmPlugin:hG,createCaptionPlugin:Iq,createColorExtractionPlugin:n7,createColorSwatchPlugin:hY,createComparisonPlugin:o7,createConcurrencyControlPlugin:EX,createCropPlugin:r7,createCustomEffectsPlugin:f7,createDataSaverPlugin:RX,createDecodeAfterIdlePlugin:zX,createDepthMapPlugin:x7,createDominantColorPlugin:s7,createDownloadButtonPlugin:xY,createErrorBadgePlugin:N7,createErrorOverlayPlugin:A7,createErrorTrackingPlugin:B7,createEventLoggerPlugin:U7,createExifOrientationPlugin:P7,createFadeInPlugin:KX,createFallbackImagePlugin:yG,createFetchLoaderPlugin:gZ,createFilterPlugin:i7,createGalleryPlugin:kq,createGlitchEffectPlugin:y7,createHoverPrefetchPlugin:$7,createHoverZoomPlugin:_q,createIDBCachePlugin:_Z,createImageOptimizationPlugin:R7,createInventoryStatusPlugin:fY,createLocalizationPlugin:wY,createLqipPlugin:a7,createMemoryCachePlugin:iJ,createMemoryPressureAbortPlugin:S7,createMorphPlugin:v7,createNetworkAnalyticsPlugin:z7,createOfflinePlugin:fG,createOverlayInfoPlugin:l7,createParallaxPlugin:c7,createPerformanceMonitor:gl,createPerformanceMonitorPlugin:F7,createPreconnectPlugin:OX,createPredictiveLoadingPlugin:C7,createPriceTagPlugin:mY,createPriorityLoadingPlugin:L7,createProgressOverlayPlugin:u7,createPromoBadgePlugin:gY,createRedactionPlugin:d7,createResponsivePlugin:O7,createRetryOnErrorPlugin:$J,createRevealAnimationPlugin:h7,createSEOPlugin:i6,createScrollIdlePlugin:r6,createSkeletonPlugin:Eq,createSocialSharePlugin:yY,createSvgPlaceholderPlugin:p7,createTransitionPlugin:m7,createUserBehaviorPlugin:W7,createVideoPosterPlugin:vY,createViewportAwarePlugin:M7,createViewportDebouncePlugin:sJ,createViewportDwellPlugin:j7,createWatermarkPlugin:g7,createWebPPlugin:D7,formatVersion:i4,getGlobalContextStats:$D,getGlobalDeviceInfo:PD,getGlobalMonitorManager:YO,getGlobalNetworkInfo:rs,getObserverPoolDetails:rD,getObserverPoolStats:nD,globalContext:Qo,isValidVersion:s4,isVersionEqual:a4,isVersionGreater:l4,isVersionInRange:r4,isVersionLess:c4,observeElement:Mp,observerPool:Vt,parseVersion:Qp,resetGlobalMonitorManager:XO,resetObserverPoolStats:iD,resolveDependencyOrder:Tp,setObserverPoolDebugMode:oD,unobserveElement:tD,useImagePreload:IJ,useLCPPreload:Yp,withPlugins:jD,wrapPluginHook:kJ},Symbol.toStringTag,{value:"Module"})),Dee={ecommerce:"电商核心",interaction:"视觉效果与交互",visual:"视觉与效果",perf:"性能与网络",robust:"稳健性与错误处理",viewport:"视口与交互",a11y:"可访问性与 SEO",other:"其他"},RJ={PriceTagPlugin:{category:"ecommerce",title:"价格标签"},PromoBadgePlugin:{category:"ecommerce",title:"促销徽标"},InventoryStatusPlugin:{category:"ecommerce",title:"库存状态"},ColorSwatchPlugin:{category:"ecommerce",title:"颜色样本"},SocialSharePlugin:{category:"ecommerce",title:"社交分享"},VideoPosterPlugin:{category:"ecommerce",title:"视频封面"},LocalizationPlugin:{category:"ecommerce",title:"本地化"},DownloadButtonPlugin:{category:"ecommerce",title:"下载按钮"},RevealAnimationPlugin:{category:"interaction",title:"揭示动画"},GlitchEffectPlugin:{category:"interaction",title:"故障特效"},MorphPlugin:{category:"interaction",title:"形变"},AnimatedCursorPlugin:{category:"interaction",title:"动态光标"},DepthMapPlugin:{category:"interaction",title:"深度图 (3D)"},SkeletonPlugin:{category:"visual",title:"骨架屏"},BorderGlowPlugin:{category:"visual",title:"边框辉光"},CaptionPlugin:{category:"visual",title:"图片说明"},FilterPlugin:{category:"visual",title:"滤镜"},GalleryPlugin:{category:"visual",title:"画廊"},OverlayInfoPlugin:{category:"visual",title:"信息蒙层"},ProgressOverlayPlugin:{category:"visual",title:"进度蒙层"},BlurUpPlugin:{category:"visual",title:"模糊渐显"},FadeInPlugin:{category:"visual",title:"淡入"},TransitionPlugin:{category:"visual",title:"过渡"},ParallaxPlugin:{category:"visual",title:"视差"},ColorExtractionPlugin:{category:"visual",title:"色彩提取"},RedactionPlugin:{category:"visual",title:"打码"},HoverZoomPlugin:{category:"visual",title:"悬停放大"},WatermarkPlugin:{category:"visual",title:"水印"},CustomEffectsPlugin:{category:"visual",title:"自定义效果"},PreconnectPlugin:{category:"perf",title:"预连接"},PriorityLoadingPlugin:{category:"perf",title:"优先级加载"},CachePrewarmPlugin:{category:"perf",title:"缓存预热"},CacheMemoryPlugin:{category:"perf",title:"内存缓存"},CacheIDBPlugin:{category:"perf",title:"IndexedDB 缓存"},ConcurrencyControlPlugin:{category:"perf",title:"并发控制"},ScrollIdlePlugin:{category:"perf",title:"滚动空闲"},NetworkAnalyticsPlugin:{category:"perf",title:"网络分析"},PredictiveLoadingPlugin:{category:"perf",title:"预测加载"},DataSaverPlugin:{category:"perf",title:"省流量"},ImageOptimizationPlugin:{category:"perf",title:"图片优化"},FetchLoaderPlugin:{category:"perf",title:"Fetch 加载"},ErrorBadgePlugin:{category:"robust",title:"错误徽标"},ErrorOverlayPlugin:{category:"robust",title:"错误蒙层"},FallbackImagePlugin:{category:"robust",title:"兜底图"},RetryOnErrorPlugin:{category:"robust",title:"失败重试"},ErrorTrackingPlugin:{category:"robust",title:"错误追踪"},OfflinePlugin:{category:"robust",title:"离线"},MemoryPressureAbortPlugin:{category:"robust",title:"内存压力中止"},DecodeAfterIdlePlugin:{category:"robust",title:"空闲解码"},AntiHotlinkPlugin:{category:"robust",title:"防盗链"},CDNFallbackPlugin:{category:"robust",title:"CDN 回退"},AuthPlugin:{category:"robust",title:"鉴权"},ViewportAwarePlugin:{category:"viewport",title:"视口感知"},ViewportDebouncePlugin:{category:"viewport",title:"视口防抖"},ViewportDwellPlugin:{category:"viewport",title:"视口驻留"},HoverPrefetchPlugin:{category:"viewport",title:"悬停预取"},UserBehaviorPlugin:{category:"viewport",title:"用户行为"},A11yPlugin:{category:"a11y",title:"无障碍"},AltTextPlugin:{category:"a11y",title:"替代文本"},ExifOrientationPlugin:{category:"a11y",title:"EXIF 方向"},AspectRatioSpacerPlugin:{category:"a11y",title:"宽高比占位"},ResponsivePlugin:{category:"a11y",title:"响应式"},SEOPlugin:{category:"a11y",title:"SEO"},BadgePlugin:{category:"other",title:"徽标"},DominantColorPlugin:{category:"other",title:"主色"},EventLoggerPlugin:{category:"other",title:"事件日志"},LQIPPlugin:{category:"other",title:"LQIP 低清预览"},PerformanceMonitorPlugin:{category:"other",title:"性能监控"},AdaptiveQualityPlugin:{category:"other",title:"自适应质量"},BatteryAwarePlugin:{category:"other",title:"电量感知"},CropPlugin:{category:"other",title:"裁剪"},ComparisonPlugin:{category:"other",title:"对比"},SvgPlaceholderPlugin:{category:"other",title:"SVG 占位"},WebPPlugin:{category:"other",title:"WebP"}};function zJ(e){return e.replace(/Plugin$/,"").replace(/([a-z0-9])([A-Z])/g,"$1-$2").replace(/([A-Z])([A-Z][a-z])/g,"$1-$2").toLowerCase()}const nu=Object.assign({"../../../src/custom-plugins/A11yPlugin/doc.json":S0,"../../../src/custom-plugins/AdaptiveQualityPlugin/doc.json":N0,"../../../src/custom-plugins/AltTextPlugin/doc.json":Z0,"../../../src/custom-plugins/AnimatedCursorPlugin/doc.json":py,"../../../src/custom-plugins/AntiHotlinkPlugin/doc.json":Ly,"../../../src/custom-plugins/AspectRatioSpacerPlugin/doc.json":By,"../../../src/custom-plugins/AuthPlugin/doc.json":ev,"../../../src/custom-plugins/BadgePlugin/doc.json":gv,"../../../src/custom-plugins/BatteryAwarePlugin/doc.json":kv,"../../../src/custom-plugins/BlurUpPlugin/doc.json":Fv,"../../../src/custom-plugins/BorderGlowPlugin/doc.json":nw,"../../../src/custom-plugins/CDNFallbackPlugin/doc.json":hw,"../../../src/custom-plugins/CacheIDBPlugin/doc.json":Ew,"../../../src/custom-plugins/CacheMemoryPlugin/doc.json":Vw,"../../../src/custom-plugins/CachePrewarmPlugin/doc.json":r1,"../../../src/custom-plugins/CaptionPlugin/doc.json":v1,"../../../src/custom-plugins/CarouselPlugin/doc.json":R1,"../../../src/custom-plugins/ColorExtractionPlugin/doc.json":H1,"../../../src/custom-plugins/ColorSwatchPlugin/doc.json":sx,"../../../src/custom-plugins/ComparisonPlugin/doc.json":wx,"../../../src/custom-plugins/ConcurrencyControlPlugin/doc.json":Ox,"../../../src/custom-plugins/CounterPlugin/doc.json":qx,"../../../src/custom-plugins/CropPlugin/doc.json":ab,"../../../src/custom-plugins/CustomEffectsPlugin/doc.json":bb,"../../../src/custom-plugins/DataSaverPlugin/doc.json":Mb,"../../../src/custom-plugins/DecodeAfterIdlePlugin/doc.json":Kb,"../../../src/custom-plugins/DepthMapPlugin/doc.json":cP,"../../../src/custom-plugins/DominantColorPlugin/doc.json":$P,"../../../src/custom-plugins/DownloadButtonPlugin/doc.json":TP,"../../../src/custom-plugins/ErrorBadgePlugin/doc.json":XP,"../../../src/custom-plugins/ErrorOverlayPlugin/doc.json":d$,"../../../src/custom-plugins/ErrorTrackingPlugin/doc.json":C$,"../../../src/custom-plugins/EventLoggerPlugin/doc.json":A$,"../../../src/custom-plugins/ExifOrientationPlugin/doc.json":J$,"../../../src/custom-plugins/FadeInPlugin/doc.json":mS,"../../../src/custom-plugins/FallbackImagePlugin/doc.json":IS,"../../../src/custom-plugins/FavoritePlugin/doc.json":BS,"../../../src/custom-plugins/FetchLoaderPlugin/doc.json":eC,"../../../src/custom-plugins/FilterPlugin/doc.json":gC,"../../../src/custom-plugins/FullscreenPlugin/doc.json":kC,"../../../src/custom-plugins/GalleryPlugin/doc.json":FC,"../../../src/custom-plugins/GlitchEffectPlugin/doc.json":nL,"../../../src/custom-plugins/HotspotPlugin/doc.json":hL,"../../../src/custom-plugins/HoverPrefetchPlugin/doc.json":EL,"../../../src/custom-plugins/HoverZoomPlugin/doc.json":VL,"../../../src/custom-plugins/ImageOptimizationPlugin/doc.json":r2,"../../../src/custom-plugins/IndicatorPlugin/doc.json":y2,"../../../src/custom-plugins/InventoryStatusPlugin/doc.json":R2,"../../../src/custom-plugins/LQIPPlugin/doc.json":H2,"../../../src/custom-plugins/LocalizationPlugin/doc.json":sI,"../../../src/custom-plugins/MemoryPressureAbortPlugin/doc.json":vI,"../../../src/custom-plugins/MorphPlugin/doc.json":zI,"../../../src/custom-plugins/NetworkAnalyticsPlugin/doc.json":GI,"../../../src/custom-plugins/OfflinePlugin/doc.json":ik,"../../../src/custom-plugins/OverlayInfoPlugin/doc.json":xk,"../../../src/custom-plugins/ParallaxPlugin/doc.json":Dk,"../../../src/custom-plugins/PerformanceMonitorPlugin/doc.json":Qk,"../../../src/custom-plugins/PreconnectPlugin/doc.json":l_,"../../../src/custom-plugins/PredictiveLoadingPlugin/doc.json":P_,"../../../src/custom-plugins/PriceTagPlugin/doc.json":j_,"../../../src/custom-plugins/PriorityLoadingPlugin/doc.json":Y_,"../../../src/custom-plugins/ProgressOverlayPlugin/doc.json":uE,"../../../src/custom-plugins/PromoBadgePlugin/doc.json":SE,"../../../src/custom-plugins/RedactionPlugin/doc.json":NE,"../../../src/custom-plugins/ResponsivePlugin/doc.json":ZE,"../../../src/custom-plugins/RetryOnErrorPlugin/doc.json":pR,"../../../src/custom-plugins/RevealAnimationPlugin/doc.json":LR,"../../../src/custom-plugins/SEOPlugin/doc.json":BR,"../../../src/custom-plugins/ScrollIdlePlugin/doc.json":e5,"../../../src/custom-plugins/SkeletonPlugin/doc.json":g5,"../../../src/custom-plugins/SocialSharePlugin/doc.json":k5,"../../../src/custom-plugins/Spin360Plugin/doc.json":U5,"../../../src/custom-plugins/SvgPlaceholderPlugin/doc.json":t3,"../../../src/custom-plugins/ThumbPreloadPlugin/doc.json":f3,"../../../src/custom-plugins/ThumbSyncPlugin/doc.json":k3,"../../../src/custom-plugins/TransitionPlugin/doc.json":F3,"../../../src/custom-plugins/UserBehaviorPlugin/doc.json":nz,"../../../src/custom-plugins/VideoPosterPlugin/doc.json":hz,"../../../src/custom-plugins/ViewportAwarePlugin/doc.json":Ez,"../../../src/custom-plugins/ViewportDebouncePlugin/doc.json":Vz,"../../../src/custom-plugins/ViewportDwellPlugin/doc.json":rO,"../../../src/custom-plugins/WatermarkPlugin/doc.json":vO,"../../../src/custom-plugins/WebPPlugin/doc.json":zO,"../../../src/custom-plugins/ZoomControlPlugin/doc.json":HO}),Fo=Object.keys(nu).map(e=>{const t=e.split("/").slice(-2)[0],n=nu[e],o=RJ[t];if(!o)return null;const r="create"+n.name;return{id:zJ(t),dir:t,title:o.title,category:o.category,factoryName:r,example:n.example||"",description:n.description||"",tags:n.tags||[],config:n.config||[],examples:n.examples||[],features:n.features||[],useCases:n.useCases||[],notes:n.notes||[],doc:n}}).filter(Boolean),OJ={ecommerce:[],interaction:[],visual:[],perf:[],robust:[],viewport:[],a11y:[],other:[]};for(const e of Fo)OJ[e.category].push(e);function DJ(e){return Fo.find(t=>t.id===e)}function Mee(e){const t=DJ(e);if(!t)return;const n=di[t.factoryName];if(typeof n=="function")return n;for(const o of Object.keys(di)){const r=di[o];if(typeof r=="function"&&r.meta&&r.meta.name===t.dir)return r}}const Xp=[{id:"error-resilience",title:"错误韧性组合",description:"错误覆盖层 + 徽标 + 兜底图 + 自动重试 + 事件日志，构建失败的优雅降级链路。",component:"ComboErrorResilienceDemo",plugins:[{name:"ErrorOverlay 错误覆盖层",role:"加载失败时显示重试遮罩，引导用户重试"},{name:"ErrorBadge 错误徽标",role:"角落错误标记，快速识别失败项"},{name:"FallbackImage 兜底图",role:"加载失败回退到占位图，避免空白"},{name:"RetryOnError 自动重试",role:"失败后按策略自动重连，提升成功率"},{name:"EventLogger 事件日志",role:"记录加载/错误事件，便于监控排查"}],code:`import {
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
<LazyImage src="https://picsum.photos/seed/interaction-combo/800/600" alt="交互与叠层组合示例" />`}],Zp=[{id:"plugin-sandbox",title:"插件沙箱",description:"自包含 try/catch 沙箱隔离插件钩子执行。",component:"PluginSandboxDemo"},{id:"performance-monitoring",title:"性能监控系统",description:"全局性能监控与报告。",component:"PerformanceMonitoringDemo"},{id:"engine-infra",title:"引擎性能基础设施",description:"GlobalContext 全局上下文 + ObserverPool 共享观察池的实时可观察面板。",component:"EngineInfraDemo"},{id:"plugin-hot-reload",title:"插件热更新",description:"运行时注册 / 注销插件。",component:"PluginHotReloadDemo"},{id:"dependency-resolver",title:"依赖解析器",description:"拓扑排序 / 环检测 / 冲突校验。",component:"DependencyResolverDemo"}],MJ=Object.assign({"../combos/ComboA11ySeoDemo.tsx":()=>C(()=>import("./ComboA11ySeoDemo-BuXso3lG.js"),__vite__mapDeps([0,1]),import.meta.url),"../combos/ComboCacheDemo.tsx":()=>C(()=>import("./ComboCacheDemo-3C3l_Yb7.js"),__vite__mapDeps([2,1]),import.meta.url),"../combos/ComboEnginePerfDemo.tsx":()=>C(()=>import("./ComboEnginePerfDemo-CRcCKEYj.js"),__vite__mapDeps([3,1]),import.meta.url),"../combos/ComboErrorResilienceDemo.tsx":()=>C(()=>import("./ComboErrorResilienceDemo-CWqviEFR.js"),__vite__mapDeps([4,1]),import.meta.url),"../combos/ComboInteractionOverlayDemo.tsx":()=>C(()=>import("./ComboInteractionOverlayDemo-EeWP7vhq.js"),__vite__mapDeps([5,1]),import.meta.url),"../combos/ComboPerformanceDemo.tsx":()=>C(()=>import("./ComboPerformanceDemo-DmX1LwZC.js"),__vite__mapDeps([6,1]),import.meta.url),"../combos/ComboResponsiveSeoWebPDemo.tsx":()=>C(()=>import("./ComboResponsiveSeoWebPDemo-CCNP1hFN.js"),__vite__mapDeps([7,1]),import.meta.url),"../combos/ComboViewportInteractionDemo.tsx":()=>C(()=>import("./ComboViewportInteractionDemo-BlaEcsMr.js"),__vite__mapDeps([8,1]),import.meta.url),"../combos/ComboVisualEffectsDemo.tsx":()=>C(()=>import("./ComboVisualEffectsDemo-CbkoFlBU.js"),__vite__mapDeps([9,1]),import.meta.url),"../combos/ComboVisualEffectsPlusDemo.tsx":()=>C(()=>import("./ComboVisualEffectsPlusDemo-DFeKPyTB.js"),__vite__mapDeps([10,1]),import.meta.url)}),jJ=Object.assign({"../combos/ComboA11ySeoDemo.tsx":qh,"../combos/ComboCacheDemo.tsx":Qh,"../combos/ComboEnginePerfDemo.tsx":Kh,"../combos/ComboErrorResilienceDemo.tsx":Yh,"../combos/ComboInteractionOverlayDemo.tsx":Xh,"../combos/ComboPerformanceDemo.tsx":Zh,"../combos/ComboResponsiveSeoWebPDemo.tsx":Jh,"../combos/ComboViewportInteractionDemo.tsx":e0,"../combos/ComboVisualEffectsDemo.tsx":t0,"../combos/ComboVisualEffectsPlusDemo.tsx":n0}),TJ=Object.assign({"../advanced/DependencyResolverDemo.tsx":()=>C(()=>import("./DependencyResolverDemo-ylCoyMAR.js"),__vite__mapDeps([11,1,12]),import.meta.url),"../advanced/EngineInfraDemo.tsx":()=>C(()=>import("./EngineInfraDemo-tK6KQP8K.js"),__vite__mapDeps([13,1]),import.meta.url),"../advanced/PerformanceMonitoringDemo.tsx":()=>C(()=>import("./PerformanceMonitoringDemo-vOLtGvv0.js"),__vite__mapDeps([14,1]),import.meta.url),"../advanced/PluginHotReloadDemo.tsx":()=>C(()=>import("./PluginHotReloadDemo-Ca846w2v.js"),__vite__mapDeps([15,1]),import.meta.url),"../advanced/PluginSandboxDemo.tsx":()=>C(()=>import("./PluginSandboxDemo-CyAMVRdw.js"),__vite__mapDeps([16,12,1]),import.meta.url)}),NJ=Object.assign({"../advanced/DependencyResolverDemo.tsx":o0,"../advanced/EngineInfraDemo.tsx":r0,"../advanced/PerformanceMonitoringDemo.tsx":s0,"../advanced/PluginHotReloadDemo.tsx":i0,"../advanced/PluginSandboxDemo.tsx":a0}),AJ=Object.assign({"../scenarios/VirtualGridDemo.tsx":()=>C(()=>import("./VirtualGridDemo--A7mc-GP.js"),__vite__mapDeps([17,18,1]),import.meta.url),"../scenarios/VirtualHorizontalListDemo.tsx":()=>C(()=>import("./VirtualHorizontalListDemo-Cvt_WAhN.js"),__vite__mapDeps([19,18,1]),import.meta.url),"../scenarios/VirtualVerticalListDemo.tsx":()=>C(()=>import("./VirtualVerticalListDemo-Dqn8S5nt.js"),__vite__mapDeps([20,18,1]),import.meta.url)}),BJ=Object.assign({"../scenarios/VirtualGridDemo.tsx":l0,"../scenarios/VirtualHorizontalListDemo.tsx":c0,"../scenarios/VirtualVerticalListDemo.tsx":u0});function hl(e,t,n){const o=e[`../${n}`];return{Stage:o?x.lazy(()=>o().then(s=>({default:s.default}))):()=>null,source:t[`../${n}`]??""}}const UJ=Xp.map(e=>{const t=`combos/${e.component}.tsx`,{Stage:n,source:o}=hl(MJ,jJ,t);return{meta:{slug:e.id,title:e.title,group:"combo",description:e.description,plugins:e.plugins,code:e.code},Stage:n,file:`${e.component}.tsx`,source:o}}),FJ=Zp.map(e=>{const t=`advanced/${e.component}.tsx`,{Stage:n,source:o}=hl(TJ,NJ,t);return{meta:{slug:e.id,title:e.title,group:"advanced",description:e.description},Stage:n,file:`${e.component}.tsx`,source:o}}),WJ=[{slug:"virtual-vertical",title:"虚拟滚动 · 纵向列表",file:"scenarios/VirtualVerticalListDemo.tsx"},{slug:"virtual-horizontal",title:"虚拟滚动 · 横向列表",file:"scenarios/VirtualHorizontalListDemo.tsx"},{slug:"virtual-grid",title:"虚拟滚动 · 网格",file:"scenarios/VirtualGridDemo.tsx"}],VJ=WJ.map(e=>{const{Stage:t,source:n}=hl(AJ,BJ,e.file);return{meta:{slug:e.slug,title:e.title,group:"scenario"},Stage:t,file:e.file.split("/").pop(),source:n}}),is=[...UJ,...FJ,...VJ],HJ=["combo","advanced","scenario"];function jee(e){return is.filter(t=>t.meta.group===e)}function Tee(e){return is.find(t=>t.meta.slug===e)}const Jp={combo:{label:"组合示例",hint:"多插件协同的真实业务组合"},advanced:{label:"高级功能",hint:"底层能力与引擎设施"},scenario:{label:"场景示例",hint:"虚拟滚动等长列表组合"}},GJ="import|from|export|default|function|return|const|let|var|new|if|else|for|of|in|while|switch|case|break|continue|type|interface|extends|implements|as|satisfies|await|async|throw|try|catch|finally|class|typeof|instanceof|delete|void|yield",qJ="true|false|null|undefined|this|super",QJ="number|string|boolean|object|any|unknown|never|React|HTMLElement|void",ou=new RegExp([String.raw`(\/\/[^\n]*|\/\*[\s\S]*?\*\/)`,String.raw`(\`(?:\\[\s\S]|[^\\\`])*\`|"(?:\\[\s\S]|[^\\"])*"|'(?:\\[\s\S]|[^\\'])*')`,String.raw`\b(${GJ})\b`,String.raw`\b(${qJ})\b`,String.raw`\b(${QJ})\b`,String.raw`(<\/?[A-Za-z][\w.$]*)`,String.raw`\b(\d+(?:\.\d+)?)\b`].join("|"),"g"),ru=["tok-comment","tok-string","tok-kw","tok-lit","tok-type","tok-tag","tok-num"];function KJ(e){const t=[];let n=0;ou.lastIndex=0;let o;for(;o=ou.exec(e);){o.index>n&&t.push({text:e.slice(n,o.index),cls:null});const r=ru.findIndex((s,i)=>o[i+1]!==void 0);t.push({text:o[0],cls:r>=0?ru[r]:null}),n=o.index+o[0].length}return n<e.length&&t.push({text:e.slice(n),cls:null}),t}function su(e){try{const t=document.createElement("textarea");t.value=e,t.setAttribute("readonly",""),t.style.position="fixed",t.style.opacity="0",document.body.appendChild(t),t.select();const n=document.execCommand("copy");return document.body.removeChild(t),n}catch{return!1}}function YJ({code:e,title:t="tsx",collapseAfter:n=24,maxHeight:o}){const[r,s]=x.useState("idle"),[i,a]=x.useState(!1),l=x.useMemo(()=>e.replace(/\s+$/,"").split(`
`),[e]),c=n>0&&l.length>n,u=c&&!i?l.slice(0,n).join(`
`):e,d=x.useMemo(()=>KJ(u),[u]),p=x.useCallback(async()=>{var v;let f=!1;if((v=navigator.clipboard)!=null&&v.writeText)try{await navigator.clipboard.writeText(e),f=!0}catch{f=su(e)}else f=su(e);s(f?"ok":"fail"),window.setTimeout(()=>s("idle"),1600)},[e]);return m.jsxs("div",{className:"code",children:[m.jsxs("div",{className:"code-head",children:[m.jsx("span",{children:t}),m.jsxs("span",{style:{display:"flex",gap:6,alignItems:"center"},children:[m.jsxs("span",{children:[l.length," 行"]}),m.jsx("button",{type:"button",className:`code-copy${r==="ok"?" is-ok":r==="fail"?" is-fail":""}`,onClick:p,children:r==="ok"?"已复制":r==="fail"?"复制失败":"复制"})]})]}),m.jsx("pre",{style:o?{maxHeight:o}:{maxHeight:"none"},children:m.jsx("code",{children:d.map((f,v)=>f.cls?m.jsx("span",{className:f.cls,children:f.text},v):m.jsx(N.Fragment,{children:f.text},v))})}),c?m.jsx("button",{type:"button",className:"code-more",onClick:()=>a(f=>!f),children:i?"收起":`展开余下 ${l.length-n} 行`}):null]})}function em(e){return e.props??e.config??[]}function XJ({doc:e}){var r,s,i;const t=em(e),n=e.events??[],o=e.methods??[];return m.jsxs(m.Fragment,{children:[m.jsxs("div",{className:"doc-sec",children:[m.jsx("h5",{children:"属性 Props"}),t.length?m.jsxs("table",{className:"doc-table",children:[m.jsx("thead",{children:m.jsxs("tr",{children:[m.jsx("th",{children:"属性"}),m.jsx("th",{children:"类型"}),m.jsx("th",{children:"默认"}),m.jsx("th",{children:"说明"})]})}),m.jsx("tbody",{children:t.map(a=>m.jsxs("tr",{children:[m.jsx("td",{children:m.jsx("code",{children:a.name})}),m.jsx("td",{children:m.jsx("code",{className:"dim",children:a.type})}),m.jsx("td",{children:m.jsx("code",{className:"dim",children:a.default??"-"})}),m.jsx("td",{children:a.description??"—"})]},a.name))})]}):m.jsx("p",{className:"doc-note",children:"无可配置属性，工厂零参调用即可。"})]}),m.jsxs("div",{className:"doc-sec",children:[m.jsx("h5",{children:"事件 Events"}),n.length?m.jsxs("table",{className:"doc-table",children:[m.jsx("thead",{children:m.jsxs("tr",{children:[m.jsx("th",{children:"事件"}),m.jsx("th",{children:"触发时机"}),m.jsx("th",{children:"说明"})]})}),m.jsx("tbody",{children:n.map(a=>m.jsxs("tr",{children:[m.jsx("td",{children:m.jsx("code",{children:a.name})}),m.jsx("td",{children:a.when}),m.jsx("td",{children:a.description})]},a.name))})]}):m.jsx("p",{className:"doc-note",children:"不参与任何事件。"})]}),m.jsxs("div",{className:"doc-sec",children:[m.jsx("h5",{children:"方法 Methods"}),o.length?m.jsxs("table",{className:"doc-table",children:[m.jsx("thead",{children:m.jsxs("tr",{children:[m.jsx("th",{children:"方法"}),m.jsx("th",{children:"签名"}),m.jsx("th",{children:"说明"})]})}),m.jsx("tbody",{children:o.map(a=>m.jsxs("tr",{children:[m.jsx("td",{children:m.jsx("code",{children:a.name})}),m.jsx("td",{children:m.jsx("code",{className:"dim",children:a.signature})}),m.jsx("td",{children:a.description})]},a.name))})]}):m.jsx("p",{className:"doc-note",children:e.methodsNote??"不调用上下文方法。"})]}),m.jsxs("div",{className:"doc-cols",children:[(r=e.features)!=null&&r.length?m.jsxs("div",{children:[m.jsx("h5",{children:"能做"}),m.jsx("ul",{children:e.features.map(a=>m.jsx("li",{children:a},a))})]}):null,(s=e.useCases)!=null&&s.length?m.jsxs("div",{children:[m.jsx("h5",{children:"适合"}),m.jsx("ul",{children:e.useCases.map(a=>m.jsx("li",{children:a},a))})]}):null,(i=e.notes)!=null&&i.length?m.jsxs("div",{children:[m.jsx("h5",{children:"注意"}),m.jsx("ul",{children:e.notes.map(a=>m.jsx("li",{children:a},a))})]}):null]})]})}function ZJ({factory:e,priority:t,summary:n,doc:o,defaultOpen:r=!0}){var i,a;const s={props:em(o).length,events:((i=o.events)==null?void 0:i.length)??0,methods:((a=o.methods)==null?void 0:a.length)??0};return m.jsxs("details",{className:"api-plug",open:r,children:[m.jsxs("summary",{children:[m.jsx("code",{children:e}),m.jsxs("span",{className:"tag tag-accent",children:["priority ",t]}),m.jsx("span",{className:"api-plug-desc",children:n}),m.jsxs("span",{className:"api-plug-n",children:[s.props," 属性 · ",s.events," 事件 · ",s.methods," 方法"]})]}),m.jsx("div",{className:"api-plug-body",children:m.jsx(XJ,{doc:o})})]})}const JJ=/create[A-Z]\w*Plugin/g;function eee(e){return(e.match(/create[A-Z]\w*Plugin/)??[e])[0]}function tm(e){return e.dir?`create${e.dir}`:eee(e.factory)}function tee(e){return new Set(e.match(JJ)??[])}function nee(e,t){const n=tee(e);return t.filter(o=>n.has(tm(o))).sort((o,r)=>o.priority-r.priority)}function oee({source:e,plugins:t,heading:n="本页用到的插件"}){const o=x.useMemo(()=>nee(e,t),[e,t]);return o.length===0?null:m.jsxs("section",{className:"api-sec",children:[m.jsxs("div",{className:"api-sec-head",children:[m.jsxs("h2",{className:"api-sec-title",children:[n," · ",o.length," 个"]}),m.jsxs("p",{className:"api-sec-sub",children:["就是上面代码里装配的全部成员。属性是工厂参数，事件是父组件传进来的回调， 方法是插件读取 / 调用的上下文能力 —— 表内容与 ",m.jsx("code",{children:"doc.json"})," 同源，随包发布。"]})]}),o.map(r=>m.jsx(ZJ,{factory:tm(r),priority:r.priority,summary:r.summary??r.doc.description??"",doc:r.doc},r.factory))]})}const ree=Fo.map((e,t)=>({factory:e.factoryName,priority:t,summary:e.description,doc:e.doc}));function see({entry:e,order:t}){const{meta:n,Stage:o,file:r,source:s}=e;return m.jsxs("section",{className:"page","data-demo":n.slug,children:[m.jsxs("div",{className:"page-header",children:[m.jsxs("div",{style:{display:"flex",alignItems:"center",gap:10,marginBottom:6},children:[m.jsx("span",{style:{fontFamily:"var(--ff-mono, monospace)",fontSize:"0.8em",color:"var(--text-2)",border:"1px solid var(--accent-line)",borderRadius:6,padding:"1px 8px"},children:String(t).padStart(2,"0")}),m.jsx("span",{style:{fontSize:"0.78em",color:"var(--accent-2)",letterSpacing:.04*1+"em"},children:Jp[n.group].label})]}),m.jsx("h1",{className:"page-title",children:n.title}),n.description?m.jsx("p",{className:"page-desc",children:n.description}):null]}),m.jsx("div",{className:"demo-stage-wrap",children:m.jsx(x.Suspense,{fallback:m.jsx("div",{className:"loading",children:"加载中…"}),children:m.jsx(o,{})})}),s?m.jsxs("div",{className:"demo-source",children:[m.jsxs("h4",{className:"block-title",children:["完整源码 · ",r]}),m.jsx(YJ,{code:s,title:r})]}):null,s?m.jsx(oee,{source:s,plugins:ree}):null]})}const iee=[{id:"a1-poster-wall",code:"A1",cat:"vod",title:"竖版海报墙",ref:{site:"olehdtv",page:"影视列表页",url:"https://www.olehdtv.com/index.php/vod/type/id/2.html"},pain:"一屏 20 张 2:3 竖图，首屏那几张直接决定 LCP；占位没做好就是满屏跳动。",tone:"dark",plugs:[{fn:"createPriorityLoadingPlugin",arg:'{ priority: "high" }',why:"首屏海报压过下游请求"},{fn:"createAspectRatioSpacerPlugin",arg:"{ ratio: 2 / 3 }",why:"2:3 占位，加载前后零抖动"},{fn:"createBlurUpPlugin",arg:"{ startBlur: 14, endBlur: 0, durationMs: 520 }",why:"低清糊图先出，避免大片留白"},{fn:"createFadeInPlugin",arg:'{ durationMs: 320, easing: "ease-out" }',why:"边缘不发灰，切换更顺"}]},{id:"a2-episode-row",code:"A2",cat:"vod",title:"剧集选集横滑",ref:{site:"爱奇艺 / olehdtv",page:"播放页选集条",url:"https://www.olehdtv.com/index.php/vod/type/id/2.html"},pain:"手指一滑过 16 集，若不加约束会同时发起十几个请求，抢掉正片的带宽。",tone:"dark",plugs:[{fn:"createViewportAwarePlugin",arg:'{ rootMargin: "120px", once: true }',why:"只在进入视口时开始加载"},{fn:"createConcurrencyControlPlugin",arg:'{ maxConcurrent: 4, scope: "global" }',why:"横滑瞬间的请求洪峰压平"},{fn:"createMemoryCachePlugin",arg:"{ maxEntries: 120, ttlMs: 1800000 }",why:"来回滑不重复请求"},{fn:"createSkeletonPlugin",arg:'{ type: "shimmer", borderRadius: 4 }',why:"空槽有稳定的视觉重量"}]},{id:"a3-recommend-side",code:"A3",cat:"vod",title:"播放页相关推荐",ref:{site:"Netflix / 爱奇艺",page:"播放页右侧推荐列",url:"https://www.olehdtv.com/index.php/vod/type/id/2.html"},pain:"正片在播，侧栏却还在发请求；滚到底一批，滚回来又一批。",tone:"dark",plugs:[{fn:"createViewportDebouncePlugin",arg:"{ debounceMs: 200, onlyWhenIntersecting: true }",why:"滚动停稳再发请求"},{fn:"createIDBCachePlugin",arg:'{ dbName: "vane-vod", ttlMs: 259200000 }',why:"跨会话复用，回看不发请求"},{fn:"createSkeletonPlugin",arg:'{ type: "shimmer", borderRadius: 4 }',why:"侧栏不会突然长高"}]},{id:"a4-cast-avatar",code:"A4",cat:"vod",title:"演职人员头像",ref:{site:"影视详情页",page:"演职人员区块",url:"https://www.olehdtv.com/index.php/vod/type/id/2.html"},pain:"演员库的图常年失效、比例五花八门，裁圆之后边缘还容易露出白底。",tone:"dark",plugs:[{fn:"createCropPlugin",arg:"{ enabled: true, focusPoint: { x: 0.5, y: 0.4 } }",why:"按脸部中心裁方图"},{fn:"createFallbackImagePlugin",arg:'{ fallbackSrc: "…/cast-fallback" }',why:"缺图不留破图占位"},{fn:"createColorExtractionPlugin",arg:"{ setContainerBg: true, sampleSize: 6 }",why:"主色铺底，圆形边缘不露白"}],note:"第 4 位演员故意给了失效地址，可直接看到兜底链路。"},{id:"a5-paid-poster",code:"A5",cat:"vod",title:"会员专享海报（鉴权）",ref:{site:"会员专区",page:"付费墙海报",url:"https://www.olehdtv.com/index.php/vod/type/id/2.html"},pain:"付费内容走私有图源，凭证过期就 401；破图或白屏都会直接掉付费转化。",tone:"dark",plugs:[{fn:"createAuthPlugin",arg:'{ tokenParam: "access_token" }',why:"把登录态拼进图片地址"},{fn:"createRetryOnErrorPlugin",arg:"{ maxRetries: 2, baseDelayMs: 400 }",why:"凭证刚续期时的瞬时失败可自愈"},{fn:"createErrorOverlayPlugin",arg:'{ retryText: "重新鉴权" }',why:"失败要给明确出口"}],note:"依赖演示站受保护接口（pnpm serve:demo）；token 换成 expired-token 即进入 401 失败态。"},{id:"a6-tiered-quality",code:"A6",cat:"vod",title:"分档清晰度",ref:{site:"影视详情页",page:"剧照区",url:"https://www.olehdtv.com/index.php/vod/type/id/2.html"},pain:"同一张剧照，桌面要 1280、手机 3G 只该给 400；一套写死就是两头不讨好。",tone:"dark",plugs:[{fn:"createAdaptiveQualityPlugin",arg:"{ lowQ: 40, highQ: 80, saveDataQuality: 35 }",why:"按网络类型定质量"},{fn:"createResponsivePlugin",arg:"{ variants: [400, 800, 1200], sizes }",why:"生成 srcset 交给浏览器挑"},{fn:"createDataSaverPlugin",arg:"{ respectSaveData: true, fallbackQuality: 0.6 }",why:"尊重系统省流量开关"}],note:"图床模板是 picsum 的 /宽/高，真实项目替换 buildSrc 即可。"}],aee=[{id:"c1-bili-cover-grid",code:"C1",cat:"video",title:"推荐流封面栅格",ref:{site:"bilibili",page:"首页推荐流",url:"https://www.bilibili.com/"},pain:"16:9 封面 + 右下时长胶囊；一屏十几条，抢占不到视口就不该发请求。",tone:"light",plugs:[{fn:"createAspectRatioSpacerPlugin",arg:"{ ratio: 16 / 9 }",why:"封面比例固定，栅格不塌"},{fn:"createBadgePlugin",arg:'{ text: dur, position: "bottom-right" }',why:"时长胶囊，逐条装配"},{fn:"createViewportDwellPlugin",arg:"{ dwellMs: 180, onlyWhenIntersecting: true }",why:"快速滑过不算真正看到"},{fn:"createFadeInPlugin",arg:"{ durationMs: 260 }",why:"白底上的切换更柔和"},{fn:"createVideoPosterPlugin",arg:"{ playInModal: true }",why:"置顶条点封面起播"}],note:"时长逐条不同，用 useMemo 固定 withPlugins 的组件身份，避免重渲染整块重挂。"},{id:"c2-hero-banner",code:"C2",cat:"video",title:"首页运营 Banner",ref:{site:"bilibili / YouTube",page:"首页顶部轮播",url:"https://www.youtube.com/"},pain:"整站 LCP 就是这张大图，晚 300ms 就是指标上的一次降级。",tone:"light",plugs:[{fn:"createPriorityLoadingPlugin",arg:'{ priority: "high" }',why:"唯一该抢带宽的图"},{fn:"createPreconnectPlugin",arg:'{ domains: ["https://picsum.photos"] }',why:"提前建连省一个 RTT"},{fn:"createLqipPlugin",arg:"{ lqipSrc: (src) => …, blur: 16 }",why:"20px 低清先铺满"}]},{id:"c3-watch-side-list",code:"C3",cat:"video",title:"接下来播放列",ref:{site:"YouTube",page:"播放页右侧列表",url:"https://www.youtube.com/"},pain:"滚动时一帧十几个请求，直接和正在播放的视频抢带宽。",tone:"dark",plugs:[{fn:"createScrollIdlePlugin",arg:"{ idleMs: 120, maxWaitMs: 900 }",why:"滚动停了才放行"},{fn:"createViewportAwarePlugin",arg:'{ rootMargin: "160px", once: true }',why:"提前一屏但与滚动解耦"},{fn:"createMemoryCachePlugin",arg:"{ maxEntries: 80 }",why:"切视频不重复拉封面"}]},{id:"c4-uploader-avatar",code:"C4",cat:"video",title:"UP 主头像（直播中）",ref:{site:"bilibili",page:"UP 主卡片",url:"https://www.bilibili.com/"},pain:"头像小、数量多、缺图率高；直播中还要有状态信号。",tone:"light",plugs:[{fn:"createCropPlugin",arg:"{ focusPoint: { x: 0.5, y: 0.35 } }",why:"脸部居中裁方"},{fn:"createBorderGlowPlugin",arg:'{ color: "rgba(251,114,153,.75)" }',why:"直播中的信号灯"},{fn:"createFallbackImagePlugin",arg:"{ fallbackSrc: … }",why:"缺图有人形兜底"}]},{id:"c5-hover-preview",code:"C5",cat:"video",title:"悬停起播预览",ref:{site:"bilibili / YouTube",page:"封面悬停预览",url:"https://www.bilibili.com/"},pain:"悬停 300ms 才真的要预览，但这 300ms 里把下一帧取回来，体验差别巨大。",tone:"dark",plugs:[{fn:"createHoverPrefetchPlugin",arg:'{ trigger: "mouseenter", max: 2 }',why:"悬停即预取下一帧"},{fn:"createFetchLoaderPlugin",arg:"{ enabled: true, timeout: 20000 }",why:"拿到进度、可中断、可复用"},{fn:"createTransitionPlugin",arg:"{ durationMs: 260 }",why:"帧切换不闪"}],note:"真实项目把「下一帧」换成视频首帧图或雪碧图分片。"},{id:"c6-saver-mode",code:"C6",cat:"video",title:"移动端省流模式",ref:{site:"bilibili",page:"移动端省流",url:"https://www.bilibili.com/"},pain:"用户开着省流量、电量只剩 15%，这时还按桌面规格拉图就是纯粹的浪费。",tone:"dark",plugs:[{fn:"createDataSaverPlugin",arg:"{ respectSaveData: true, fallbackQuality: 0.6 }",why:"尊重 Save-Data"},{fn:"createBatteryAwarePlugin",arg:"{ lowBatteryThreshold: 0.2, downgradeWidth: 640 }",why:"低电量降档"},{fn:"createNetworkAnalyticsPlugin",arg:"{ trackCDN: true }",why:"量化省了多少字节"}]}],lee=[{id:"b1-jd-search-grid",code:"B1",cat:"ecommerce",title:"搜索结果双列流",ref:{site:"jd.com",page:"搜索结果页",url:"https://www.jd.com/"},pain:"一屏 20 张 1:1 主图，来回切排序会重复拉图，请求洪峰还会挤掉首屏。",tone:"light",plugs:[{fn:"createMemoryCachePlugin",arg:"{ maxEntries: 240, ttlMs: 900000 }",why:"切排序不重复请求"},{fn:"createSkeletonPlugin",arg:'{ type: "shimmer" }',why:"灰块占位，栅格不塌"},{fn:"createConcurrencyControlPlugin",arg:"{ maxConcurrent: 6 }",why:"20 张图压平请求洪峰"},{fn:"createFadeInPlugin",arg:"{ durationMs: 220 }",why:"白底上切换更柔和"}]},{id:"b2-sku-gallery-zoom",code:"B2",cat:"ecommerce",title:"商详主图联动",ref:{site:"jd.com",page:"商品详情页",url:"https://www.jd.com/"},pain:"4 张主图来回切，切一次拉一次；放大镜做过头就是拖影。",tone:"light",plugs:[{fn:"createGalleryPlugin",arg:"{ enableLightbox: true }",why:"点开看大图"},{fn:"createHoverZoomPlugin",arg:"{ scale: 1.08, durationMs: 180 }",why:"轻放大不出拖影"},{fn:"createColorSwatchPlugin",arg:"{ maxColors: 5 }",why:"色卡即 SKU 入口"},{fn:"createPreconnectPlugin",arg:'{ domains: ["https://picsum.photos"] }',why:"提前建连"}]},{id:"b3-flash-sale",code:"B3",cat:"ecommerce",title:"秒杀主推位",ref:{site:"jd.com",page:"秒杀会场",url:"https://www.jd.com/"},pain:"同一张图上要同时挂价格、促销、库存、进度四个信息层，还不能互相遮挡。",tone:"light",plugs:[{fn:"createPriorityLoadingPlugin",arg:'{ priority: "high" }',why:"会场唯一大图"},{fn:"createPriceTagPlugin",arg:"{ price: 1299, originalPrice: 2599 }",why:"价格 + 省钱额"},{fn:"createPromoBadgePlugin",arg:'{ type: "hot", pulse: true }',why:"促销标呼吸"},{fn:"createInventoryStatusPlugin",arg:'{ status: "low-stock" }',why:"库存紧张"},{fn:"createProgressOverlayPlugin",arg:"{ showPercentText: true }",why:"真实百分比进度"},{fn:"createBadgePlugin",arg:'{ text: "已售 2.3 万件" }',why:"销量角标"}]},{id:"b4-review-grid",code:"B4",cat:"ecommerce",title:"买家秀九宫格",ref:{site:"淘宝 / 京东",page:"评价区",url:"https://www.jd.com/"},pain:"UGC 图会 404、比例乱、还可能带手机号；运营侧看不到坏图。",tone:"light",plugs:[{fn:"createFallbackImagePlugin",arg:"{ fallbackSrc: … }",why:"缺图不留破图"},{fn:"createErrorBadgePlugin",arg:'{ text: "失效" }',why:"坏图可被定位"},{fn:"createRedactionPlugin",arg:"{ boxes: [...] }",why:"隐私区域打码"},{fn:"createConcurrencyControlPlugin",arg:'{ maxConcurrent: 4, scope: "viewport" }',why:"评论区限流"}],note:"第 3 张是失效地址，可直接看到兜底 + 「失效」角标；第 1 张上有一块打码区域。"},{id:"b5-cart-recs",code:"B5",cat:"ecommerce",title:"猜你喜欢横滑",ref:{site:"淘宝 / 京东",page:"购物车页",url:"https://www.jd.com/"},pain:"横滑是「滑一点看一点」，等滑到才请求，用户眼里就是一片白。",tone:"light",plugs:[{fn:"createViewportAwarePlugin",arg:'{ rootMargin: "200px" }',why:"进视口才加载"},{fn:"createPredictiveLoadingPlugin",arg:'{ strategy: "increment", maxPreload: 2 }',why:"按方向预热后两张"},{fn:"createHoverPrefetchPlugin",arg:'{ trigger: "mouseenter", max: 1 }',why:"悬停再补一张"}]},{id:"b6-hotlink-guard",code:"B6",cat:"ecommerce",title:"图床防盗链",ref:{site:"电商图床",page:"商品图直链",url:"https://www.jd.com/"},pain:"主域带 Referer 校验，直链一律 403；没有回退策略就是一片破图。",tone:"light",plugs:[{fn:"createAntiHotlinkPlugin",arg:'{ allowedDomains: ["picsum.photos"] }',why:"域名白名单"},{fn:"createCDNFallbackPlugin",arg:"{ cdnBases: [...] }",why:"主域挂了换备域"},{fn:"createFallbackImagePlugin",arg:"{ fallbackSrc: … }",why:"最后一道兜底"}],note:"第三张用的是完全不存在的域，用来固定演示「主域失败 → 兜底」这条链路。"},{id:"b7-multi-currency",code:"B7",cat:"ecommerce",title:"多语言商品卡",ref:{site:"跨境站点",page:"商品列表",url:"https://www.jd.com/"},pain:"同一 SKU 要出 4 种语言与 4 种货币，价格符号和文案都得跟着换。",tone:"light",plugs:[{fn:"createLocalizationPlugin",arg:"{ currentLocale: code }",why:"按 locale 切文案"},{fn:"createPriceTagPlugin",arg:"{ currency, price }",why:"货币符号随 locale"}]},{id:"b8-format-webp",code:"B8",cat:"ecommerce",title:"图片格式优化",ref:{site:"电商列表页",page:"商品图",url:"https://www.jd.com/"},pain:"同一张图，Chromium 该给 WebP，Safari 老版本只能给 JPEG；写死就是浪费。",tone:"light",plugs:[{fn:"createWebPPlugin",arg:"{ rewrite: true }",why:"嗅探后改写后缀"},{fn:"createImageOptimizationPlugin",arg:"{ maxWidth: 800, quality: 0.82 }",why:"图床侧再压一道"},{fn:"createSvgPlaceholderPlugin",arg:"{ svgContent: … }",why:"灰底 SVG 占位"}]}],cee=[{id:"d1-xhs-masonry",code:"D1",cat:"social",title:"三列不等高瀑布流",ref:{site:"小红书",page:"首页发现",url:"https://www.xiaohongshu.com/"},pain:"每条笔记比例不同，没有按条占位，滑到一半整列会突然错位。",tone:"light",plugs:[{fn:"createAspectRatioSpacerPlugin",arg:"{ ratio: item.ratio }",why:"按条占位，列不跳动"},{fn:"createViewportAwarePlugin",arg:'{ rootMargin: "150px" }',why:"进视口才加载"},{fn:"createBlurUpPlugin",arg:"{ startBlur: 10 }",why:"糊图先出"},{fn:"createConcurrencyControlPlugin",arg:"{ maxConcurrent: 5 }",why:"瀑布流限并发"}],note:"比例逐条不同，所以 withPlugins 放进 useMemo 按比例缓存组件身份。"},{id:"d2-nine-grid-lightbox",code:"D2",cat:"social",title:"九宫格 → 灯箱",ref:{site:"微博 / 小红书",page:"笔记详情的九宫格",url:"https://www.xiaohongshu.com/"},pain:"九张图铺满屏，用户真正想看的是其中一张的高清版。",tone:"light",plugs:[{fn:"createGalleryPlugin",arg:"{ enableLightbox: true }",why:"点开进灯箱"},{fn:"createTransitionPlugin",arg:"{ durationMs: 240 }",why:"切换不闪"},{fn:"createSkeletonPlugin",arg:'{ type: "pulse" }',why:"空格有稳定视觉重量"}]},{id:"d3-article-images",code:"D3",cat:"social",title:"长文配图",ref:{site:"知乎 / 公众号",page:"长文正文",url:"https://www.zhihu.com/"},pain:"正文图一旦晚到，段落就被整体推下去；没有 alt 还会丢检索流量。",tone:"light",plugs:[{fn:"createAspectRatioSpacerPlugin",arg:"{ ratio: 16 / 9 }",why:"先占住高度"},{fn:"createLqipPlugin",arg:"{ lqipSrc: (src) => …, blur: 18 }",why:"24px 低清先出"},{fn:"createSEOPlugin",arg:'{ altFallback: "文章配图" }',why:"alt 与结构化"}]},{id:"d4-follow-avatars",code:"D4",cat:"social",title:"关注推荐列表",ref:{site:"社交产品",page:"关注推荐",url:"https://www.xiaohongshu.com/"},pain:"几十个 38px 小头像，单个失败会留下一个空洞，整行都显得脏。",tone:"light",plugs:[{fn:"createCropPlugin",arg:"{ focusPoint: { x: 0.5, y: 0.45 } }",why:"人脸居中裁方"},{fn:"createRetryOnErrorPlugin",arg:"{ maxRetries: 2, jitter: true }",why:"抖动重试一次"},{fn:"createFallbackImagePlugin",arg:"{ fallbackSrc: … }",why:"最后给默认剪影"}]},{id:"d5-share-card",code:"D5",cat:"social",title:"分享卡片",ref:{site:"内容社区",page:"图片分享/图注",url:"https://www.xiaohongshu.com/"},pain:"分享位、图注、拍摄参数都要贴在图上，还得在悬停时才出现。",tone:"dark",plugs:[{fn:"createSocialSharePlugin",arg:"{ showOnHover: true }",why:"分享入口"},{fn:"createCaptionPlugin",arg:'{ position: "bottom" }',why:"图注常驻"},{fn:"createOverlayInfoPlugin",arg:'{ position: "top", trigger: "hover" }',why:"参数蒙层"}]}],uee=[{id:"e1-news-mixed",code:"E1",cat:"news",title:"头条大图 + 列表小图",ref:{site:"新浪 / 网易",page:"新闻首页",url:"https://news.sina.com.cn/"},pain:"首屏只有一张图该抢带宽，剩下几十张小图应该等滚动停稳。",tone:"light",plugs:[{fn:"createPriorityLoadingPlugin",arg:'{ priority: "high" }',why:"头条就是 LCP"},{fn:"createResponsivePlugin",arg:"{ variants: [400, 800, 1200] }",why:"按容器宽度出图"},{fn:"createViewportDebouncePlugin",arg:"{ debounceMs: 160 }",why:"滚动停稳再发"}]},{id:"e2-photo-set",code:"E2",cat:"news",title:"组图 / 图集翻页",ref:{site:"门户图集",page:"组图浏览",url:"https://news.sina.com.cn/"},pain:"一图一页地翻，每张都要等；没有进度反馈就会以为卡住了。",tone:"dark",plugs:[{fn:"createGalleryPlugin",arg:"{ enableLightbox: true }",why:"全屏看图"},{fn:"createProgressOverlayPlugin",arg:"{ height: 3 }",why:"细进度条"},{fn:"createPreconnectPlugin",arg:'{ domains: ["https://picsum.photos"] }',why:"翻页前先建连"}]},{id:"e3-inline-anti-cls",code:"E3",cat:"news",title:"正文图防 CLS",ref:{site:"资讯正文",page:"内嵌图",url:"https://news.sina.com.cn/"},pain:"图片没有预设高度，加载完成的一瞬间把下面几段全推下去。",tone:"light",plugs:[{fn:"createAspectRatioSpacerPlugin",arg:"{ ratio: 4 / 3 }",why:"先把高度占住"},{fn:"createSkeletonPlugin",arg:'{ type: "shimmer" }',why:"占位有质感"},{fn:"createSEOPlugin",arg:'{ aspectRatio: "4:3" }',why:"alt 与结构化"}]},{id:"e4-dead-links",code:"E4",cat:"news",title:"失效外链",ref:{site:"老牌资讯站",page:"历史文章配图",url:"https://news.sina.com.cn/"},pain:"2019 年的图床早就迁移了，没人上报你就永远不知道有多少破图。",tone:"light",plugs:[{fn:"createCDNFallbackPlugin",arg:"{ cdnBases: [...] }",why:"备域兜一次"},{fn:"createFallbackImagePlugin",arg:"{ fallbackSrc: … }",why:"兜底图收场"},{fn:"createErrorTrackingPlugin",arg:"{ report, showBadge: true }",why:"失败可上报"}],note:"控制台执行 window.__vaneDeadLink 可看到失败上报的原始记录。"},{id:"e5-a11y-gov",code:"E5",cat:"news",title:"无障碍政务站",ref:{site:"公共服务站点",page:"政策图解",url:"https://www.gov.cn/"},pain:"读屏软件读不出「图片加载中」，运营漏填 alt 就是一次合规风险。",tone:"light",plugs:[{fn:"createA11yPlugin",arg:"{ statusText: … }",why:"朗读状态"},{fn:"createAltTextPlugin",arg:'{ derive: true, prefix: "示意图：" }',why:"alt 自动推导"},{fn:"createSEOPlugin",arg:"{ enabled: true }",why:"alt + 结构化"}],note:"第一张故意留空 alt，插件会按标题推导出「示意图：办事大厅引导图」。"}],dee=[{id:"f1-unsplash-masonry",code:"F1",cat:"gallery",title:"瀑布流无限滚动",ref:{site:"Unsplash",page:"探索页",url:"https://unsplash.com/"},pain:"图库用户会反复回看同一批图，每次都重新拉一遍纯属浪费。",tone:"dark",plugs:[{fn:"createIDBCachePlugin",arg:'{ dbName: "vane-gallery" }',why:"落 IndexedDB 复用"},{fn:"createConcurrencyControlPlugin",arg:"{ maxConcurrent: 6 }",why:"限并发"},{fn:"createViewportAwarePlugin",arg:'{ rootMargin: "240px" }',why:"提前一屏"},{fn:"createSkeletonPlugin",arg:'{ type: "shimmer" }',why:"暗色骨架"}],note:"刷新第二次打开：这些图会直接从 IndexedDB 出，Network 面板不再发请求。"},{id:"f2-lightbox-download",code:"F2",cat:"gallery",title:"灯箱 + 下载 + 色板",ref:{site:"Pexels",page:"图片详情",url:"https://www.pexels.com/"},pain:"看图、下载、取色是三件事，分散在三个组件里就很难保持一致。",tone:"dark",plugs:[{fn:"createGalleryPlugin",arg:'{ buttonText: "全屏" }',why:"灯箱看图"},{fn:"createDownloadButtonPlugin",arg:'{ filename: "vane-photo.jpg" }',why:"下载带正确后缀"},{fn:"createColorSwatchPlugin",arg:"{ maxColors: 5 }",why:"主色板可取色"}]},{id:"f3-exif-upright",code:"F3",cat:"gallery",title:"手机竖图纠偏",ref:{site:"摄影社区",page:"用户直传",url:"https://unsplash.com/"},pain:"iPhone 直传的竖图带 Orientation=6，不纠正就是躺着的。",tone:"dark",plugs:[{fn:"createExifOrientationPlugin",arg:"{ enabled: true }",why:"读 EXIF 转正"},{fn:"createCropPlugin",arg:"{ focusPoint: { x: 0.5, y: 0.42 } }",why:"转正后裁 4:5"}],note:"占位图不带 EXIF，插件读到缺失标记时按 1 处理；换成自己拍的直传图即可看到转正效果。"},{id:"f4-before-after",code:"F4",cat:"gallery",title:"原图 / 滤镜对比",ref:{site:"摄影社区",page:"作品对比",url:"https://unsplash.com/"},pain:"「调色前后」说服力最强，但自己做拖拽分割线很容易做出错位。",tone:"dark",plugs:[{fn:"createComparisonPlugin",arg:"{ beforeSrc, afterSrc, start: 0.5 }",why:"可拖拽分隔条"},{fn:"createFilterPlugin",arg:'{ filter: "grayscale" }',why:"预设缩略"}]},{id:"f5-artwork-detail",code:"F5",cat:"gallery",title:"作品详情氛围",ref:{site:"数字艺术平台",page:"作品详情",url:"https://unsplash.com/"},pain:"作品页要有氛围：主色铺底、入场形变、下一件提前备好。",tone:"dark",plugs:[{fn:"createDominantColorPlugin",arg:"{ color: rgba }",why:"主色铺容器底"},{fn:"createCustomEffectsPlugin",arg:"{ hoverImageStyle }",why:"悬停上浮提亮"},{fn:"createMorphPlugin",arg:'{ type: "elastic" }',why:"入场形变"},{fn:"createCachePrewarmPlugin",arg:'{ trigger: "enter" }',why:"预热下一件"}]}],pee=[{id:"g1-admin-avatars",code:"G1",cat:"admin",title:"成员列表小头像",ref:{site:"Ant Design Pro",page:"用户管理列表",url:"https://pro.ant.design/"},pain:"一屏 40 个 22px 头像，翻页就重拉，主线程也跟着抖。",tone:"light",plugs:[{fn:"createCropPlugin",arg:"{ focusPoint: { x: 0.5, y: 0.5 } }",why:"小尺寸也不变形"},{fn:"createMemoryCachePlugin",arg:"{ maxEntries: 400 }",why:"翻页不重复请求"},{fn:"createFallbackImagePlugin",arg:"{ fallbackSrc: … }",why:"缺图不留空洞"}]},{id:"g2-ticket-attachments",code:"G2",cat:"admin",title:"工单附件缩略",ref:{site:"工单系统",page:"附件列表",url:"https://pro.ant.design/"},pain:"附件走鉴权接口，越权时给一张破图，用户根本不知道发生了什么。",tone:"light",plugs:[{fn:"createAuthPlugin",arg:'{ tokenParam: "access_token" }',why:"带上登录态"},{fn:"createErrorBadgePlugin",arg:'{ text: "无权限" }',why:"失败要可读"},{fn:"createGalleryPlugin",arg:"{ enableLightbox: true }",why:"点开放大"}],note:"第三张用过期凭证，返回 401 invalid_token，右上角出现「无权限」角标。需 pnpm serve:demo。"},{id:"g3-protected-401",code:"G3",cat:"admin",title:"受保护资源三态",ref:{site:"SaaS 后台",page:"受保护图片",url:"https://pro.ant.design/"},pain:"200 / 401 / 403 三种结果必须在 UI 上区分开，否则排查全靠猜。",tone:"light",plugs:[{fn:"createAuthPlugin",arg:'{ token: "demo-token-1f2e3d" }',why:"按凭证取图"},{fn:"createRetryOnErrorPlugin",arg:"{ maxRetries: 1 }",why:"瞬时失败自愈"},{fn:"createErrorOverlayPlugin",arg:'{ retryText: "重试" }',why:"给出可点出口"}],note:"接口是演示站自带的 /protected/image：401 missing_credentials、401 invalid_token、403 insufficient_scope。"},{id:"g4-table-image-cell",code:"G4",cat:"admin",title:"表格图片列",ref:{site:"后台列表",page:"商品/资产表格",url:"https://pro.ant.design/"},pain:"行高固定，缩略图一失败就把整行撑开或塌掉。",tone:"light",plugs:[{fn:"createSkeletonPlugin",arg:'{ type: "pulse" }',why:"骨架与图同尺寸"},{fn:"createFallbackImagePlugin",arg:"{ fallbackSrc: … }",why:"缺图不塌行"},{fn:"createErrorBadgePlugin",arg:'{ text: "!" }',why:"角标提示异常"}]}],mee=[{id:"h1-listing-gallery",code:"H1",cat:"travel",title:"房源图集横滑",ref:{site:"贝壳 / Airbnb",page:"房源详情",url:"https://www.ke.com/"},pain:"1 主图 + 4 缩略，切一次拉一次；比例不统一就上下跳。",tone:"dark",plugs:[{fn:"createAspectRatioSpacerPlugin",arg:"{ ratio: 4 / 3 }",why:"统一比例不跳"},{fn:"createGalleryPlugin",arg:"{ enableLightbox: true }",why:"看图集"},{fn:"createHoverPrefetchPlugin",arg:"{ max: 1, getNextSrc }",why:"悬停预取下一张"}]},{id:"h2-hotel-card",code:"H2",cat:"travel",title:"酒店列表卡",ref:{site:"携程",page:"酒店搜索结果",url:"https://www.ctrip.com/"},pain:"会员价、促销标、剩余房量——三条业务信息必须压在同一个图上。",tone:"light",plugs:[{fn:"createPriceTagPlugin",arg:"{ price: 486, discount }",why:"会员价 + 划线价"},{fn:"createPromoBadgePlugin",arg:'{ text: "限时特惠" }',why:"促销标"},{fn:"createBadgePlugin",arg:'{ text: "仅剩 2 间" }',why:"库存角标"}]},{id:"h3-offline-favs",code:"H3",cat:"travel",title:"离线收藏夹",ref:{site:"出行 App",page:"我的收藏",url:"https://www.ctrip.com/"},pain:"用户在高铁上打开收藏夹，断网时不该只剩一片空框。",tone:"light",plugs:[{fn:"createIDBCachePlugin",arg:'{ dbName: "vane-travel" }',why:"提前落库"},{fn:"createOfflinePlugin",arg:"{ warm: true, showBadge: true }",why:"断网切占位"},{fn:"createErrorBadgePlugin",arg:'{ text: "离线" }',why:"说明当前状态"}]}],gee=[{id:"i1-3g-skeleton",code:"I1",cat:"mobile",title:"3G 慢网加载",ref:{site:"移动端信息流",page:"3G 环境首屏",url:"https://www.bilibili.com/"},pain:"650ms RTT 下，没有进度反馈的等待会被用户当成「卡死」。",tone:"light",plugs:[{fn:"createNetworkAnalyticsPlugin",arg:"{ trackCDN: true }",why:"采集耗时与字节"},{fn:"createSkeletonPlugin",arg:'{ type: "shimmer" }',why:"骨架占位"},{fn:"createProgressOverlayPlugin",arg:"{ showPercentText: true }",why:"真实百分比"}]},{id:"i2-saver-battery",code:"I2",cat:"mobile",title:"省流量 + 低电量",ref:{site:"移动端商城",page:"降级模式",url:"https://www.jd.com/"},pain:"用户开了省流量、电量只剩 15%，还按桌面规格拉图就是纯浪费。",tone:"light",plugs:[{fn:"createDataSaverPlugin",arg:"{ respectSaveData: true }",why:"尊重系统开关"},{fn:"createBatteryAwarePlugin",arg:"{ lowBatteryThreshold: 0.2 }",why:"低电量降档"},{fn:"createAdaptiveQualityPlugin",arg:"{ lowQ: 40, highQ: 80 }",why:"按网络定质量"}]},{id:"i3-memory-pressure",code:"I3",cat:"mobile",title:"内存压力中止",ref:{site:"低端安卓",page:"长列表滚动",url:"https://www.bilibili.com/"},pain:"离开视口的图还占着解码位图，低端机滚两次就掉帧甚至被系统杀掉。",tone:"light",plugs:[{fn:"createMemoryPressureAbortPlugin",arg:"{ abortOnLeave: true }",why:"离屏即 abort"},{fn:"createDecodeAfterIdlePlugin",arg:"{ timeoutMs: 600 }",why:"空闲再解码"}]},{id:"i4-offline-recover",code:"I4",cat:"mobile",title:"断网 → 恢复",ref:{site:"移动端内容站",page:"地铁断网",url:"https://www.bilibili.com/"},pain:"断网时是空框，恢复后还得手动刷新——用户会觉得「这 App 坏了」。",tone:"light",plugs:[{fn:"createOfflinePlugin",arg:"{ warm: true }",why:"断网占位 + 恢复重取"},{fn:"createRetryOnErrorPlugin",arg:"{ maxRetries: 3, jitter: true }",why:"指数退避重试"},{fn:"createErrorTrackingPlugin",arg:"{ report }",why:"失败可追踪"}],note:"window.__vaneOfflineErrors 里是失败记录。"},{id:"i5-perf-beacon",code:"I5",cat:"mobile",title:"首屏性能埋点",ref:{site:"内容站数据看板",page:"图片性能",url:"https://www.bilibili.com/"},pain:"说「图片慢」没有数字支撑，优化就只能靠猜。",tone:"dark",plugs:[{fn:"createPerformanceMonitorPlugin",arg:"{ showOverlay: true }",why:"实时耗时浮层"},{fn:"createEventLoggerPlugin",arg:'{ prefix: "[VANE]" }',why:"事件进控制台"},{fn:"createUserBehaviorPlugin",arg:"{ onReport }",why:"曝光/点击上报"},{fn:"createViewportDwellPlugin",arg:"{ dwellMs: 250 }",why:"去抖真实曝光"}]}],fee=[{id:"j1-brand-parallax",code:"J1",cat:"marketing",title:"品牌页视差首屏",ref:{site:"品牌落地页",page:"新品专题",url:"https://www.apple.com/"},pain:"静态大图撑不起「质感」，加动效又容易吃满主线程。",tone:"dark",plugs:[{fn:"createParallaxPlugin",arg:'{ strength: 0.18, axis: "y" }',why:"背景慢一层"},{fn:"createRevealAnimationPlugin",arg:'{ animation: "fade-up" }',why:"分块揭示"},{fn:"createFadeInPlugin",arg:"{ durationMs: 400 }",why:"整体淡入"}]},{id:"j2-glitch-poster",code:"J2",cat:"marketing",title:"故障风海报",ref:{site:"音乐节 / 潮流活动",page:"主视觉海报",url:"https://www.boilerroom.tv/"},pain:"故障特效做不好就是掉帧；开成常驻动画更会一直占着合成层。",tone:"dark",plugs:[{fn:"createGlitchEffectPlugin",arg:"{ triggerOnHover: true, duration: 900 }",why:"悬停触发一次"},{fn:"createFilterPlugin",arg:'{ filter: "contrast" }',why:"底片先压对比"}]},{id:"j3-watermark-guard",code:"J3",cat:"marketing",title:"版权图水印",ref:{site:"素材站",page:"预览图",url:"https://www.pexels.com/"},pain:"预览图要能被截图溯源，同时不能被别站直接外链。",tone:"dark",plugs:[{fn:"createWatermarkPlugin",arg:'{ text: "© VANE STUDIO" }',why:"可见水印"},{fn:"createAntiHotlinkPlugin",arg:'{ allowedDomains: ["picsum.photos"] }',why:"引用限制"}],note:"水印是 DOM 叠层而非烧进图片，真实业务还要配合服务端签名 URL。"},{id:"j4-depth-card",code:"J4",cat:"marketing",title:"3D 深度卡片",ref:{site:"产品官网",page:"产品卡",url:"https://www.apple.com/"},pain:"产品图的「手感」靠位移与光影，但自己写 tilt 很容易飘。",tone:"dark",plugs:[{fn:"createDepthMapPlugin",arg:'{ style: "tilt", maxTilt: 18 }',why:"指针跟随倾斜"},{fn:"createAnimatedCursorPlugin",arg:'{ style: "zoom-in" }',why:"光标跟随放大"}]}],Nee=[{id:"vod",label:"影视点播",en:"VOD",blurb:"图少但单图大，LCP 与付费墙失败态决定体验。"},{id:"video",label:"视频社区",en:"VIDEO",blurb:"封面海量且单图小，唯一目标是别和视频抢带宽。"},{id:"ecommerce",label:"电商",en:"COMMERCE",blurb:"主图/缩略/评价图并存，SKU 切换要秒开。"},{id:"social",label:"图文社区",en:"SOCIAL",blurb:"不等高瀑布流，UGC 图质量与可用性都不可控。"},{id:"news",label:"资讯门户",en:"NEWS",blurb:"正文图决定 CLS，外链图常年失效。"},{id:"gallery",label:"图库摄影",en:"GALLERY",blurb:"以图为主业，缩略与全尺寸要分档，回访要命中缓存。"},{id:"admin",label:"后台 SaaS",en:"ADMIN",blurb:"表格里的小图与受保护附件，失败必须可解释。"},{id:"travel",label:"出行房产",en:"TRAVEL",blurb:"图集横滑 + 价格角标，弱网与离线是常态。"},{id:"mobile",label:"移动弱网",en:"MOBILE",blurb:"3G、低电量、内存压力、断网恢复的全链路。"},{id:"marketing",label:"营销创意",en:"MARKETING",blurb:"视觉即卖点，动效与版权保护同时要。"}],ma=[...iee,...aee,...lee,...cee,...uee,...dee,...pee,...mee,...gee,...fee],hee=Object.assign({"../specs/a1-poster-wall.tsx":()=>C(()=>import("./a1-poster-wall-D_GxPacX.js"),[],import.meta.url),"../specs/a2-episode-row.tsx":()=>C(()=>import("./a2-episode-row-BngKsWmd.js"),[],import.meta.url),"../specs/a3-recommend-side.tsx":()=>C(()=>import("./a3-recommend-side-yqpwbENk.js"),[],import.meta.url),"../specs/a4-cast-avatar.tsx":()=>C(()=>import("./a4-cast-avatar-HUqhhtvY.js"),[],import.meta.url),"../specs/a5-paid-poster.tsx":()=>C(()=>import("./a5-paid-poster-BQ4lODcx.js"),[],import.meta.url),"../specs/a6-tiered-quality.tsx":()=>C(()=>import("./a6-tiered-quality-C5y8iT5K.js"),[],import.meta.url),"../specs/b1-jd-search-grid.tsx":()=>C(()=>import("./b1-jd-search-grid-Bm8-aPe-.js"),[],import.meta.url),"../specs/b2-sku-gallery-zoom.tsx":()=>C(()=>import("./b2-sku-gallery-zoom-z68fBaeY.js"),[],import.meta.url),"../specs/b3-flash-sale.tsx":()=>C(()=>import("./b3-flash-sale-DTdl0VVT.js"),[],import.meta.url),"../specs/b4-review-grid.tsx":()=>C(()=>import("./b4-review-grid-BXcy8T8L.js"),[],import.meta.url),"../specs/b5-cart-recs.tsx":()=>C(()=>import("./b5-cart-recs-C4ARdhAV.js"),[],import.meta.url),"../specs/b6-hotlink-guard.tsx":()=>C(()=>import("./b6-hotlink-guard-6voMp9oL.js"),[],import.meta.url),"../specs/b7-multi-currency.tsx":()=>C(()=>import("./b7-multi-currency-DSeJEWlX.js"),[],import.meta.url),"../specs/b8-format-webp.tsx":()=>C(()=>import("./b8-format-webp-B1wb8IkF.js"),[],import.meta.url),"../specs/c1-bili-cover-grid.tsx":()=>C(()=>import("./c1-bili-cover-grid-DTewWayQ.js"),[],import.meta.url),"../specs/c2-hero-banner.tsx":()=>C(()=>import("./c2-hero-banner-Dd51A50I.js"),[],import.meta.url),"../specs/c3-watch-side-list.tsx":()=>C(()=>import("./c3-watch-side-list-D24mahHm.js"),[],import.meta.url),"../specs/c4-uploader-avatar.tsx":()=>C(()=>import("./c4-uploader-avatar-4E0R2mFT.js"),[],import.meta.url),"../specs/c5-hover-preview.tsx":()=>C(()=>import("./c5-hover-preview-BzBNqyUN.js"),[],import.meta.url),"../specs/c6-saver-mode.tsx":()=>C(()=>import("./c6-saver-mode-Cy9BYy-U.js"),[],import.meta.url),"../specs/d1-xhs-masonry.tsx":()=>C(()=>import("./d1-xhs-masonry-PdZY4TFf.js"),[],import.meta.url),"../specs/d2-nine-grid-lightbox.tsx":()=>C(()=>import("./d2-nine-grid-lightbox-D16-6RNH.js"),[],import.meta.url),"../specs/d3-article-images.tsx":()=>C(()=>import("./d3-article-images-J72WJqEf.js"),[],import.meta.url),"../specs/d4-follow-avatars.tsx":()=>C(()=>import("./d4-follow-avatars-Cqocf5U-.js"),[],import.meta.url),"../specs/d5-share-card.tsx":()=>C(()=>import("./d5-share-card-CbP8wc81.js"),[],import.meta.url),"../specs/e1-news-mixed.tsx":()=>C(()=>import("./e1-news-mixed-Dt7aajjW.js"),[],import.meta.url),"../specs/e2-photo-set.tsx":()=>C(()=>import("./e2-photo-set-CRxJ6J0x.js"),[],import.meta.url),"../specs/e3-inline-anti-cls.tsx":()=>C(()=>import("./e3-inline-anti-cls-B-9hNRWR.js"),[],import.meta.url),"../specs/e4-dead-links.tsx":()=>C(()=>import("./e4-dead-links-CZ07lUsK.js"),[],import.meta.url),"../specs/e5-a11y-gov.tsx":()=>C(()=>import("./e5-a11y-gov-DgeWM321.js"),[],import.meta.url),"../specs/f1-unsplash-masonry.tsx":()=>C(()=>import("./f1-unsplash-masonry-DSaGhreA.js"),[],import.meta.url),"../specs/f2-lightbox-download.tsx":()=>C(()=>import("./f2-lightbox-download-DG0Ep8Qs.js"),[],import.meta.url),"../specs/f3-exif-upright.tsx":()=>C(()=>import("./f3-exif-upright-Dgd38DVY.js"),[],import.meta.url),"../specs/f4-before-after.tsx":()=>C(()=>import("./f4-before-after-DwrpuJKk.js"),[],import.meta.url),"../specs/f5-artwork-detail.tsx":()=>C(()=>import("./f5-artwork-detail-Dhs9iTq3.js"),[],import.meta.url),"../specs/g1-admin-avatars.tsx":()=>C(()=>import("./g1-admin-avatars-DRmfuP_H.js"),[],import.meta.url),"../specs/g2-ticket-attachments.tsx":()=>C(()=>import("./g2-ticket-attachments-LOS_1cee.js"),[],import.meta.url),"../specs/g3-protected-401.tsx":()=>C(()=>import("./g3-protected-401-CWPR9R2c.js"),[],import.meta.url),"../specs/g4-table-image-cell.tsx":()=>C(()=>import("./g4-table-image-cell-BU63fhQf.js"),[],import.meta.url),"../specs/h1-listing-gallery.tsx":()=>C(()=>import("./h1-listing-gallery-Dgw81oqJ.js"),[],import.meta.url),"../specs/h2-hotel-card.tsx":()=>C(()=>import("./h2-hotel-card-Ch8fCWH5.js"),[],import.meta.url),"../specs/h3-offline-favs.tsx":()=>C(()=>import("./h3-offline-favs-2_rBonlv.js"),[],import.meta.url),"../specs/i1-3g-skeleton.tsx":()=>C(()=>import("./i1-3g-skeleton-DdxxfLVt.js"),[],import.meta.url),"../specs/i2-saver-battery.tsx":()=>C(()=>import("./i2-saver-battery-Czu0mXLc.js"),[],import.meta.url),"../specs/i3-memory-pressure.tsx":()=>C(()=>import("./i3-memory-pressure-um1YNNne.js"),[],import.meta.url),"../specs/i4-offline-recover.tsx":()=>C(()=>import("./i4-offline-recover-C-hFnJjo.js"),[],import.meta.url),"../specs/i5-perf-beacon.tsx":()=>C(()=>import("./i5-perf-beacon-C03031su.js"),[],import.meta.url),"../specs/j1-brand-parallax.tsx":()=>C(()=>import("./j1-brand-parallax-CWMnfLuP.js"),[],import.meta.url),"../specs/j2-glitch-poster.tsx":()=>C(()=>import("./j2-glitch-poster-CczxA3bi.js"),[],import.meta.url),"../specs/j3-watermark-guard.tsx":()=>C(()=>import("./j3-watermark-guard-C_d-xHCE.js"),[],import.meta.url),"../specs/j4-depth-card.tsx":()=>C(()=>import("./j4-depth-card-CFKaxzg9.js"),[],import.meta.url)}),yee=Object.assign({"../specs/a1-poster-wall.tsx":()=>C(()=>import("./a1-poster-wall-Cykks--R.js"),[],import.meta.url).then(e=>e.default),"../specs/a2-episode-row.tsx":()=>C(()=>import("./a2-episode-row-Db43v__l.js"),[],import.meta.url).then(e=>e.default),"../specs/a3-recommend-side.tsx":()=>C(()=>import("./a3-recommend-side-DiUSc9Re.js"),[],import.meta.url).then(e=>e.default),"../specs/a4-cast-avatar.tsx":()=>C(()=>import("./a4-cast-avatar-BbUD-CJX.js"),[],import.meta.url).then(e=>e.default),"../specs/a5-paid-poster.tsx":()=>C(()=>import("./a5-paid-poster-DKA6BZ32.js"),[],import.meta.url).then(e=>e.default),"../specs/a6-tiered-quality.tsx":()=>C(()=>import("./a6-tiered-quality-B-7ywTLS.js"),[],import.meta.url).then(e=>e.default),"../specs/b1-jd-search-grid.tsx":()=>C(()=>import("./b1-jd-search-grid-BTLAA9Xs.js"),[],import.meta.url).then(e=>e.default),"../specs/b2-sku-gallery-zoom.tsx":()=>C(()=>import("./b2-sku-gallery-zoom-BiMFArMI.js"),[],import.meta.url).then(e=>e.default),"../specs/b3-flash-sale.tsx":()=>C(()=>import("./b3-flash-sale-kfVC10uN.js"),[],import.meta.url).then(e=>e.default),"../specs/b4-review-grid.tsx":()=>C(()=>import("./b4-review-grid-CX4kHiCU.js"),[],import.meta.url).then(e=>e.default),"../specs/b5-cart-recs.tsx":()=>C(()=>import("./b5-cart-recs-KR-m6cak.js"),[],import.meta.url).then(e=>e.default),"../specs/b6-hotlink-guard.tsx":()=>C(()=>import("./b6-hotlink-guard-BqgB0L1N.js"),[],import.meta.url).then(e=>e.default),"../specs/b7-multi-currency.tsx":()=>C(()=>import("./b7-multi-currency-ByQRPY-Z.js"),[],import.meta.url).then(e=>e.default),"../specs/b8-format-webp.tsx":()=>C(()=>import("./b8-format-webp-DaYLYmx1.js"),[],import.meta.url).then(e=>e.default),"../specs/c1-bili-cover-grid.tsx":()=>C(()=>import("./c1-bili-cover-grid-CKvu6Sdf.js"),[],import.meta.url).then(e=>e.default),"../specs/c2-hero-banner.tsx":()=>C(()=>import("./c2-hero-banner-B-n13Bps.js"),[],import.meta.url).then(e=>e.default),"../specs/c3-watch-side-list.tsx":()=>C(()=>import("./c3-watch-side-list-BYTQpqA9.js"),[],import.meta.url).then(e=>e.default),"../specs/c4-uploader-avatar.tsx":()=>C(()=>import("./c4-uploader-avatar-BeQJwtbY.js"),[],import.meta.url).then(e=>e.default),"../specs/c5-hover-preview.tsx":()=>C(()=>import("./c5-hover-preview-CJEeMz_6.js"),[],import.meta.url).then(e=>e.default),"../specs/c6-saver-mode.tsx":()=>C(()=>import("./c6-saver-mode-C8DhIPWq.js"),[],import.meta.url).then(e=>e.default),"../specs/d1-xhs-masonry.tsx":()=>C(()=>import("./d1-xhs-masonry-CWJbzt4c.js"),[],import.meta.url).then(e=>e.default),"../specs/d2-nine-grid-lightbox.tsx":()=>C(()=>import("./d2-nine-grid-lightbox-w3sTa-yE.js"),[],import.meta.url).then(e=>e.default),"../specs/d3-article-images.tsx":()=>C(()=>import("./d3-article-images-BD5U4y_Q.js"),[],import.meta.url).then(e=>e.default),"../specs/d4-follow-avatars.tsx":()=>C(()=>import("./d4-follow-avatars-Q7P9oMN0.js"),[],import.meta.url).then(e=>e.default),"../specs/d5-share-card.tsx":()=>C(()=>import("./d5-share-card-jiTztKOk.js"),[],import.meta.url).then(e=>e.default),"../specs/e1-news-mixed.tsx":()=>C(()=>import("./e1-news-mixed-NIKr9bH5.js"),[],import.meta.url).then(e=>e.default),"../specs/e2-photo-set.tsx":()=>C(()=>import("./e2-photo-set-BJnQfYY6.js"),[],import.meta.url).then(e=>e.default),"../specs/e3-inline-anti-cls.tsx":()=>C(()=>import("./e3-inline-anti-cls-CUSbthow.js"),[],import.meta.url).then(e=>e.default),"../specs/e4-dead-links.tsx":()=>C(()=>import("./e4-dead-links-D9yCWP81.js"),[],import.meta.url).then(e=>e.default),"../specs/e5-a11y-gov.tsx":()=>C(()=>import("./e5-a11y-gov-sO_ki5Vg.js"),[],import.meta.url).then(e=>e.default),"../specs/f1-unsplash-masonry.tsx":()=>C(()=>import("./f1-unsplash-masonry-73bYgqc7.js"),[],import.meta.url).then(e=>e.default),"../specs/f2-lightbox-download.tsx":()=>C(()=>import("./f2-lightbox-download-D_NE0Fsa.js"),[],import.meta.url).then(e=>e.default),"../specs/f3-exif-upright.tsx":()=>C(()=>import("./f3-exif-upright-C5GoMu0l.js"),[],import.meta.url).then(e=>e.default),"../specs/f4-before-after.tsx":()=>C(()=>import("./f4-before-after-DFiCucPs.js"),[],import.meta.url).then(e=>e.default),"../specs/f5-artwork-detail.tsx":()=>C(()=>import("./f5-artwork-detail-C2JEb2Hy.js"),[],import.meta.url).then(e=>e.default),"../specs/g1-admin-avatars.tsx":()=>C(()=>import("./g1-admin-avatars-etpgKsg9.js"),[],import.meta.url).then(e=>e.default),"../specs/g2-ticket-attachments.tsx":()=>C(()=>import("./g2-ticket-attachments-BxIe67Y4.js"),[],import.meta.url).then(e=>e.default),"../specs/g3-protected-401.tsx":()=>C(()=>import("./g3-protected-401-CdofLwHJ.js"),[],import.meta.url).then(e=>e.default),"../specs/g4-table-image-cell.tsx":()=>C(()=>import("./g4-table-image-cell-rdsAs6jI.js"),[],import.meta.url).then(e=>e.default),"../specs/h1-listing-gallery.tsx":()=>C(()=>import("./h1-listing-gallery-BQwnbOpB.js"),[],import.meta.url).then(e=>e.default),"../specs/h2-hotel-card.tsx":()=>C(()=>import("./h2-hotel-card-DE_6fJuJ.js"),[],import.meta.url).then(e=>e.default),"../specs/h3-offline-favs.tsx":()=>C(()=>import("./h3-offline-favs-92izyaJ2.js"),[],import.meta.url).then(e=>e.default),"../specs/i1-3g-skeleton.tsx":()=>C(()=>import("./i1-3g-skeleton-obeP0y7t.js"),[],import.meta.url).then(e=>e.default),"../specs/i2-saver-battery.tsx":()=>C(()=>import("./i2-saver-battery-DUHeKUzY.js"),[],import.meta.url).then(e=>e.default),"../specs/i3-memory-pressure.tsx":()=>C(()=>import("./i3-memory-pressure-Ps-AJR0F.js"),[],import.meta.url).then(e=>e.default),"../specs/i4-offline-recover.tsx":()=>C(()=>import("./i4-offline-recover-DM-9Evhx.js"),[],import.meta.url).then(e=>e.default),"../specs/i5-perf-beacon.tsx":()=>C(()=>import("./i5-perf-beacon-BxKRE338.js"),[],import.meta.url).then(e=>e.default),"../specs/j1-brand-parallax.tsx":()=>C(()=>import("./j1-brand-parallax-BmwG9TzE.js"),[],import.meta.url).then(e=>e.default),"../specs/j2-glitch-poster.tsx":()=>C(()=>import("./j2-glitch-poster-E__I8osg.js"),[],import.meta.url).then(e=>e.default),"../specs/j3-watermark-guard.tsx":()=>C(()=>import("./j3-watermark-guard-BppDCfw7.js"),[],import.meta.url).then(e=>e.default),"../specs/j4-depth-card.tsx":()=>C(()=>import("./j4-depth-card-C5D3N5E2.js"),[],import.meta.url).then(e=>e.default)}),nm=e=>`../specs/${e}.tsx`;function Aee(e){return hee[nm(e)]}function Bee(e){return yee[nm(e)]}function Uee(e){return ma.filter(t=>t.cat===e)}function vee(e){return Array.from(new Set(e.plugs.map(t=>t.fn)))}function Fee(e){const n=["import {","  LazyLoadImageCore,",...vee(e).sort().map(r=>`  ${r},`),"  withPlugins,",'} from "vane-lazy-image";'].join(`
`),o=e.plugs.map(r=>`  ${r.fn}(${r.arg??""}),`).join(`
`);return[`// ${e.code} ${e.title} · 最小可用版`,`// ${e.pain}`,n,"","const LazyImage = withPlugins(LazyLoadImageCore, [",o,"]);","","// 版式与数据由业务侧负责，这一层只解决「怎么取图」",'<LazyImage src={src} alt={alt} loading="lazy" />'].join(`
`)}const wee=x.lazy(()=>C(()=>import("./Home-Bt9nxp8h.js"),[],import.meta.url).then(e=>({default:e.Home}))),xee=x.lazy(()=>C(()=>import("./PluginDetail-NEmedE2m.js"),[],import.meta.url).then(e=>({default:e.PluginDetail}))),iu=x.lazy(()=>C(()=>import("./CombosPage-DOjN4Shc.js"),[],import.meta.url).then(e=>({default:e.CombosPage}))),au=x.lazy(()=>C(()=>import("./AdvancedPage-BxC153pa.js"),[],import.meta.url).then(e=>({default:e.AdvancedPage}))),bee=x.lazy(()=>C(()=>import("./ScenariosPage-C6R0uRaE.js"),[],import.meta.url).then(e=>({default:e.ScenariosPage}))),Pee=x.lazy(()=>C(()=>import("./WorkshopPage-BXSC_W5r.js"),[],import.meta.url).then(e=>({default:e.WorkshopPage}))),$ee=x.lazy(()=>C(()=>import("./GalleryPage-PBeSwFYN.js"),[],import.meta.url).then(e=>({default:e.GalleryPage}))),See={pkg:"vane-lazy-image",brand:"V",subtitle:"图片懒加载 / plugin index",nav:[{to:"/",label:"总览",hint:"overview"},{to:"/workshop",label:"插件工坊",hint:`${Fo.length} plugins`},{to:"/combos",label:"组合示例",hint:`${Xp.length} combos`},{to:"/advanced",label:"高级功能",hint:`${Zp.length} advanced`},{to:"/scenarios",label:"场景示例",hint:`${ma.length} plates`},{to:"/gallery",label:"商品图集",hint:"gallery"}],routes:[{path:"/",element:m.jsx(wee,{})},{path:"/plugin/:id",element:m.jsx(xee,{})},{path:"/combos",element:m.jsx(iu,{})},{path:"/combo/:id",element:m.jsx(iu,{})},{path:"/advanced",element:m.jsx(au,{})},{path:"/advanced/:id",element:m.jsx(au,{})},{path:"/scenarios",element:m.jsx(bee,{})},{path:"/workshop",element:m.jsx(Pee,{})},{path:"/gallery",element:m.jsx($ee,{})}],crumb:e=>e.startsWith("/plugin/")?"plugin · 插件详情":e.startsWith("/combo")?"combo · 组合示例":e.startsWith("/advanced")?"advanced · 高级功能":e.startsWith("/scenarios")?"scenario · 场景示例":e.startsWith("/workshop")?"workshop · 插件工坊":e.startsWith("/gallery")?"gallery · 商品图集":"index · 总览",demos:{label:"逐项示例",groups:HJ.map(e=>({key:e,label:Jp[e].label})),entries:is,detail:(e,t)=>m.jsx(see,{entry:e,order:t})},footer:[`${Fo.length} PLUGINS · ${ma.length} PLATES`,`${is.length} DEMOS · D1-A / D2-A`]};function Cee(){return m.jsx(Vh,{config:See})}const om="vane-demo-env",lu={offline:!1,slow:!1,battery:!1};function yl(){try{const e=sessionStorage.getItem(om);if(!e)return{...lu};const t=JSON.parse(e);return{offline:!!t.offline,slow:!!t.slow,battery:!!t.battery}}catch{return{...lu}}}function Lee(e){try{sessionStorage.setItem(om,JSON.stringify(e))}catch{}}function Iee(e=yl()){return e.offline||e.slow||e.battery}let Zt=null;const ga=new Set;function Wee(){return Zt||(Zt=yl()),Zt}function Vee(e){Zt={...e},Lee(Zt),rm(Zt),ga.forEach(t=>{try{t(Zt)}catch{}})}function Hee(e){return ga.add(e),()=>{ga.delete(e)}}function rm(e){try{Object.defineProperty(navigator,"onLine",{configurable:!0,get:()=>!e.offline})}catch{}try{window.dispatchEvent(new Event(e.offline?"offline":"online"))}catch{}try{const t=e.slow?"2g":"4g",n=navigator.connection,o=r=>(Object.defineProperty(r,"effectiveType",{configurable:!0,get:()=>t}),Object.defineProperty(r,"saveData",{configurable:!0,get:()=>e.slow}),Object.defineProperty(r,"downlink",{configurable:!0,get:()=>e.slow?.3:10}),Object.defineProperty(r,"rtt",{configurable:!0,get:()=>e.slow?900:50}),r);if(n){o(n);try{n.dispatchEvent(new Event("change"))}catch{}}else Object.defineProperty(navigator,"connection",{configurable:!0,value:o({addEventListener(){},removeEventListener(){},dispatchEvent(){return!0}})})}catch{}try{navigator.getBattery=()=>Promise.resolve({level:e.battery?.08:.92,charging:!e.battery,chargingTime:e.battery?1/0:0,dischargingTime:e.battery?900:1/0,addEventListener(){},removeEventListener(){}})}catch{}try{Object.defineProperty(navigator,"deviceMemory",{configurable:!0,get:()=>e.battery?1:8})}catch{}}function kee(){const e=yl();Iee(e)&&rm(e)}kee();try{performance.setResourceTimingBufferSize(1e3)}catch{}bp(document.getElementById("root")).render(m.jsx(Cee,{}));export{OX as $,Zp as A,s6 as B,Xp as C,i6 as D,lq as E,sH as F,mM as G,RK as H,O7 as I,pY as J,D7 as K,la as L,T7 as M,iJ as N,_Z as O,OJ as P,hG as Q,N as R,ma as S,rs as T,nD as U,Oq as V,Bp as W,qq as X,yK as Y,fG as Z,C as _,Dee as a,y7 as a$,L7 as a0,A7 as a1,N7 as a2,yG as a3,$J as a4,U7 as a5,M7 as a6,sJ as a7,$7 as a8,r6 as a9,hY as aA,mY as aB,gY as aC,fY as aD,d7 as aE,C7 as aF,k7 as aG,E7 as aH,wY as aI,vY as aJ,a7 as aK,m7 as aL,b7 as aM,z7 as aN,yY as aO,B7 as aP,xY as aQ,P7 as aR,o7 as aS,s7 as aT,f7 as aU,v7 as aV,S7 as aW,zX as aX,W7 as aY,c7 as aZ,h7 as a_,u7 as aa,l7 as ab,Eq as ac,I7 as ad,R7 as ae,Iq as af,bH as ag,KX as ah,t7 as ai,g7 as aj,p7 as ak,i7 as al,_q as am,kq as an,PD as ao,$D as ap,gZ as aq,F7 as ar,vD as as,e7 as at,j7 as au,EX as av,r7 as aw,n7 as ax,_7 as ay,RX as az,Vee as b,x7 as b0,w7 as b1,DJ as c,Mee as d,jD as e,YJ as f,Wee as g,ZJ as h,Tee as i,m as j,jee as k,Aee as l,Fee as m,Bee as n,Uee as o,Nee as p,Fo as q,x as r,Hee as s,Up as t,ph as u,J6 as v,jp as w,QG as x,_D as y,ZK as z};
