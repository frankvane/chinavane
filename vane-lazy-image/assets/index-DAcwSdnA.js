const __vite__mapDeps=(i,m=__vite__mapDeps,d=(m.f||(m.f=["./ComboA11ySeoDemo-BqQtH8gV.js","./DemoLayout-DeWQXu-O.js","./ComboCacheDemo-CZSSwUqI.js","./ComboEnginePerfDemo-cZoHZYEF.js","./ComboErrorResilienceDemo-DOc6yJIF.js","./ComboInteractionOverlayDemo-kS8GvDKm.js","./ComboPerformanceDemo-UmS9-FFx.js","./ComboResponsiveSeoWebPDemo-Dk0ISuqP.js","./ComboViewportInteractionDemo-CAgoaGhd.js","./ComboVisualEffectsDemo-D7Le-FUu.js","./ComboVisualEffectsPlusDemo-CyyRAMhK.js","./DependencyResolverDemo-D0656uR3.js","./advanced-CevqN9nb.js","./EngineInfraDemo-DqP2-4QJ.js","./PerformanceMonitoringDemo-DGQOwNnf.js","./PluginHotReloadDemo-CGmrSwaL.js","./PluginSandboxDemo-BbdJuDk0.js","./VirtualGridDemo-KYTVuHfh.js","./index.esm-0htXRPqr.js","./VirtualHorizontalListDemo-C2o568bQ.js","./VirtualVerticalListDemo-CpBYpSVO.js"])))=>i.map(i=>d[i]);
var Qg=Object.defineProperty;var Kg=(e,t,n)=>t in e?Qg(e,t,{enumerable:!0,configurable:!0,writable:!0,value:n}):e[t]=n;var wc=(e,t,n)=>Kg(e,typeof t!="symbol"?t+"":t,n);function Yg(e,t){for(var n=0;n<t.length;n++){const o=t[n];if(typeof o!="string"&&!Array.isArray(o)){for(const r in o)if(r!=="default"&&!(r in e)){const a=Object.getOwnPropertyDescriptor(o,r);a&&Object.defineProperty(e,r,a.get?a:{enumerable:!0,get:()=>o[r]})}}}return Object.freeze(Object.defineProperty(e,Symbol.toStringTag,{value:"Module"}))}(function(){const t=document.createElement("link").relList;if(t&&t.supports&&t.supports("modulepreload"))return;for(const r of document.querySelectorAll('link[rel="modulepreload"]'))o(r);new MutationObserver(r=>{for(const a of r)if(a.type==="childList")for(const i of a.addedNodes)i.tagName==="LINK"&&i.rel==="modulepreload"&&o(i)}).observe(document,{childList:!0,subtree:!0});function n(r){const a={};return r.integrity&&(a.integrity=r.integrity),r.referrerPolicy&&(a.referrerPolicy=r.referrerPolicy),r.crossOrigin==="use-credentials"?a.credentials="include":r.crossOrigin==="anonymous"?a.credentials="omit":a.credentials="same-origin",a}function o(r){if(r.ep)return;r.ep=!0;const a=n(r);fetch(r.href,a)}})();var aa=typeof globalThis<"u"?globalThis:typeof window<"u"?window:typeof global<"u"?global:typeof self<"u"?self:{};function Ta(e){return e&&e.__esModule&&Object.prototype.hasOwnProperty.call(e,"default")?e.default:e}var kd={exports:{}},ja={},Ld={exports:{}},V={};/**
 * @license React
 * react.production.min.js
 *
 * Copyright (c) Facebook, Inc. and its affiliates.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */var dr=Symbol.for("react.element"),Xg=Symbol.for("react.portal"),Zg=Symbol.for("react.fragment"),Jg=Symbol.for("react.strict_mode"),ef=Symbol.for("react.profiler"),tf=Symbol.for("react.provider"),nf=Symbol.for("react.context"),of=Symbol.for("react.forward_ref"),rf=Symbol.for("react.suspense"),af=Symbol.for("react.memo"),sf=Symbol.for("react.lazy"),xc=Symbol.iterator;function lf(e){return e===null||typeof e!="object"?null:(e=xc&&e[xc]||e["@@iterator"],typeof e=="function"?e:null)}var Id={isMounted:function(){return!1},enqueueForceUpdate:function(){},enqueueReplaceState:function(){},enqueueSetState:function(){}},_d=Object.assign,Ed={};function lo(e,t,n){this.props=e,this.context=t,this.refs=Ed,this.updater=n||Id}lo.prototype.isReactComponent={};lo.prototype.setState=function(e,t){if(typeof e!="object"&&typeof e!="function"&&e!=null)throw Error("setState(...): takes an object of state variables to update or a function which returns an object of state variables.");this.updater.enqueueSetState(this,e,t,"setState")};lo.prototype.forceUpdate=function(e){this.updater.enqueueForceUpdate(this,e,"forceUpdate")};function Rd(){}Rd.prototype=lo.prototype;function Xs(e,t,n){this.props=e,this.context=t,this.refs=Ed,this.updater=n||Id}var Zs=Xs.prototype=new Rd;Zs.constructor=Xs;_d(Zs,lo.prototype);Zs.isPureReactComponent=!0;var Pc=Array.isArray,zd=Object.prototype.hasOwnProperty,Js={current:null},Od={key:!0,ref:!0,__self:!0,__source:!0};function Dd(e,t,n){var o,r={},a=null,i=null;if(t!=null)for(o in t.ref!==void 0&&(i=t.ref),t.key!==void 0&&(a=""+t.key),t)zd.call(t,o)&&!Od.hasOwnProperty(o)&&(r[o]=t[o]);var s=arguments.length-2;if(s===1)r.children=n;else if(1<s){for(var l=Array(s),c=0;c<s;c++)l[c]=arguments[c+2];r.children=l}if(e&&e.defaultProps)for(o in s=e.defaultProps,s)r[o]===void 0&&(r[o]=s[o]);return{$$typeof:dr,type:e,key:a,ref:i,props:r,_owner:Js.current}}function cf(e,t){return{$$typeof:dr,type:e.type,key:t,ref:e.ref,props:e.props,_owner:e._owner}}function el(e){return typeof e=="object"&&e!==null&&e.$$typeof===dr}function uf(e){var t={"=":"=0",":":"=2"};return"$"+e.replace(/[=:]/g,function(n){return t[n]})}var $c=/\/+/g;function ti(e,t){return typeof e=="object"&&e!==null&&e.key!=null?uf(""+e.key):t.toString(36)}function Gr(e,t,n,o,r){var a=typeof e;(a==="undefined"||a==="boolean")&&(e=null);var i=!1;if(e===null)i=!0;else switch(a){case"string":case"number":i=!0;break;case"object":switch(e.$$typeof){case dr:case Xg:i=!0}}if(i)return i=e,r=r(i),e=o===""?"."+ti(i,0):o,Pc(r)?(n="",e!=null&&(n=e.replace($c,"$&/")+"/"),Gr(r,t,n,"",function(c){return c})):r!=null&&(el(r)&&(r=cf(r,n+(!r.key||i&&i.key===r.key?"":(""+r.key).replace($c,"$&/")+"/")+e)),t.push(r)),1;if(i=0,o=o===""?".":o+":",Pc(e))for(var s=0;s<e.length;s++){a=e[s];var l=o+ti(a,s);i+=Gr(a,t,n,l,r)}else if(l=lf(e),typeof l=="function")for(e=l.call(e),s=0;!(a=e.next()).done;)a=a.value,l=o+ti(a,s++),i+=Gr(a,t,n,l,r);else if(a==="object")throw t=String(e),Error("Objects are not valid as a React child (found: "+(t==="[object Object]"?"object with keys {"+Object.keys(e).join(", ")+"}":t)+"). If you meant to render a collection of children, use an array instead.");return i}function xr(e,t,n){if(e==null)return e;var o=[],r=0;return Gr(e,o,"","",function(a){return t.call(n,a,r++)}),o}function df(e){if(e._status===-1){var t=e._result;t=t(),t.then(function(n){(e._status===0||e._status===-1)&&(e._status=1,e._result=n)},function(n){(e._status===0||e._status===-1)&&(e._status=2,e._result=n)}),e._status===-1&&(e._status=0,e._result=t)}if(e._status===1)return e._result.default;throw e._result}var Re={current:null},qr={transition:null},pf={ReactCurrentDispatcher:Re,ReactCurrentBatchConfig:qr,ReactCurrentOwner:Js};function Td(){throw Error("act(...) is not supported in production builds of React.")}V.Children={map:xr,forEach:function(e,t,n){xr(e,function(){t.apply(this,arguments)},n)},count:function(e){var t=0;return xr(e,function(){t++}),t},toArray:function(e){return xr(e,function(t){return t})||[]},only:function(e){if(!el(e))throw Error("React.Children.only expected to receive a single React element child.");return e}};V.Component=lo;V.Fragment=Zg;V.Profiler=ef;V.PureComponent=Xs;V.StrictMode=Jg;V.Suspense=rf;V.__SECRET_INTERNALS_DO_NOT_USE_OR_YOU_WILL_BE_FIRED=pf;V.act=Td;V.cloneElement=function(e,t,n){if(e==null)throw Error("React.cloneElement(...): The argument must be a React element, but you passed "+e+".");var o=_d({},e.props),r=e.key,a=e.ref,i=e._owner;if(t!=null){if(t.ref!==void 0&&(a=t.ref,i=Js.current),t.key!==void 0&&(r=""+t.key),e.type&&e.type.defaultProps)var s=e.type.defaultProps;for(l in t)zd.call(t,l)&&!Od.hasOwnProperty(l)&&(o[l]=t[l]===void 0&&s!==void 0?s[l]:t[l])}var l=arguments.length-2;if(l===1)o.children=n;else if(1<l){s=Array(l);for(var c=0;c<l;c++)s[c]=arguments[c+2];o.children=s}return{$$typeof:dr,type:e.type,key:r,ref:a,props:o,_owner:i}};V.createContext=function(e){return e={$$typeof:nf,_currentValue:e,_currentValue2:e,_threadCount:0,Provider:null,Consumer:null,_defaultValue:null,_globalName:null},e.Provider={$$typeof:tf,_context:e},e.Consumer=e};V.createElement=Dd;V.createFactory=function(e){var t=Dd.bind(null,e);return t.type=e,t};V.createRef=function(){return{current:null}};V.forwardRef=function(e){return{$$typeof:of,render:e}};V.isValidElement=el;V.lazy=function(e){return{$$typeof:sf,_payload:{_status:-1,_result:e},_init:df}};V.memo=function(e,t){return{$$typeof:af,type:e,compare:t===void 0?null:t}};V.startTransition=function(e){var t=qr.transition;qr.transition={};try{e()}finally{qr.transition=t}};V.unstable_act=Td;V.useCallback=function(e,t){return Re.current.useCallback(e,t)};V.useContext=function(e){return Re.current.useContext(e)};V.useDebugValue=function(){};V.useDeferredValue=function(e){return Re.current.useDeferredValue(e)};V.useEffect=function(e,t){return Re.current.useEffect(e,t)};V.useId=function(){return Re.current.useId()};V.useImperativeHandle=function(e,t,n){return Re.current.useImperativeHandle(e,t,n)};V.useInsertionEffect=function(e,t){return Re.current.useInsertionEffect(e,t)};V.useLayoutEffect=function(e,t){return Re.current.useLayoutEffect(e,t)};V.useMemo=function(e,t){return Re.current.useMemo(e,t)};V.useReducer=function(e,t,n){return Re.current.useReducer(e,t,n)};V.useRef=function(e){return Re.current.useRef(e)};V.useState=function(e){return Re.current.useState(e)};V.useSyncExternalStore=function(e,t,n){return Re.current.useSyncExternalStore(e,t,n)};V.useTransition=function(){return Re.current.useTransition()};V.version="18.3.1";Ld.exports=V;var S=Ld.exports;const N=Ta(S),mf=Yg({__proto__:null,default:N},[S]);/**
 * @license React
 * react-jsx-runtime.production.min.js
 *
 * Copyright (c) Facebook, Inc. and its affiliates.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */var gf=S,ff=Symbol.for("react.element"),hf=Symbol.for("react.fragment"),yf=Object.prototype.hasOwnProperty,vf=gf.__SECRET_INTERNALS_DO_NOT_USE_OR_YOU_WILL_BE_FIRED.ReactCurrentOwner,bf={key:!0,ref:!0,__self:!0,__source:!0};function jd(e,t,n){var o,r={},a=null,i=null;n!==void 0&&(a=""+n),t.key!==void 0&&(a=""+t.key),t.ref!==void 0&&(i=t.ref);for(o in t)yf.call(t,o)&&!bf.hasOwnProperty(o)&&(r[o]=t[o]);if(e&&e.defaultProps)for(o in t=e.defaultProps,t)r[o]===void 0&&(r[o]=t[o]);return{$$typeof:ff,type:e,key:a,ref:i,props:r,_owner:vf.current}}ja.Fragment=hf;ja.jsx=jd;ja.jsxs=jd;kd.exports=ja;var y=kd.exports,Ad={exports:{}},Ve={},Md={exports:{}},Bd={};/**
 * @license React
 * scheduler.production.min.js
 *
 * Copyright (c) Facebook, Inc. and its affiliates.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */(function(e){function t(E,z){var O=E.length;E.push(z);e:for(;0<O;){var j=O-1>>>1,B=E[j];if(0<r(B,z))E[j]=z,E[O]=B,O=j;else break e}}function n(E){return E.length===0?null:E[0]}function o(E){if(E.length===0)return null;var z=E[0],O=E.pop();if(O!==z){E[0]=O;e:for(var j=0,B=E.length,me=B>>>1;j<me;){var K=2*(j+1)-1,ie=E[K],ue=K+1,se=E[ue];if(0>r(ie,O))ue<B&&0>r(se,ie)?(E[j]=se,E[ue]=O,j=ue):(E[j]=ie,E[K]=O,j=K);else if(ue<B&&0>r(se,O))E[j]=se,E[ue]=O,j=ue;else break e}}return z}function r(E,z){var O=E.sortIndex-z.sortIndex;return O!==0?O:E.id-z.id}if(typeof performance=="object"&&typeof performance.now=="function"){var a=performance;e.unstable_now=function(){return a.now()}}else{var i=Date,s=i.now();e.unstable_now=function(){return i.now()-s}}var l=[],c=[],u=1,d=null,p=3,h=!1,v=!1,w=!1,$=typeof setTimeout=="function"?setTimeout:null,f=typeof clearTimeout=="function"?clearTimeout:null,m=typeof setImmediate<"u"?setImmediate:null;typeof navigator<"u"&&navigator.scheduling!==void 0&&navigator.scheduling.isInputPending!==void 0&&navigator.scheduling.isInputPending.bind(navigator.scheduling);function g(E){for(var z=n(c);z!==null;){if(z.callback===null)o(c);else if(z.startTime<=E)o(c),z.sortIndex=z.expirationTime,t(l,z);else break;z=n(c)}}function b(E){if(w=!1,g(E),!v)if(n(l)!==null)v=!0,G(x);else{var z=n(c);z!==null&&H(b,z.startTime-E)}}function x(E,z){v=!1,w&&(w=!1,f(k),k=-1),h=!0;var O=p;try{for(g(z),d=n(l);d!==null&&(!(d.expirationTime>z)||E&&!M());){var j=d.callback;if(typeof j=="function"){d.callback=null,p=d.priorityLevel;var B=j(d.expirationTime<=z);z=e.unstable_now(),typeof B=="function"?d.callback=B:d===n(l)&&o(l),g(z)}else o(l);d=n(l)}if(d!==null)var me=!0;else{var K=n(c);K!==null&&H(b,K.startTime-z),me=!1}return me}finally{d=null,p=O,h=!1}}var P=!1,C=null,k=-1,I=5,_=-1;function M(){return!(e.unstable_now()-_<I)}function F(){if(C!==null){var E=e.unstable_now();_=E;var z=!0;try{z=C(!0,E)}finally{z?D():(P=!1,C=null)}}else P=!1}var D;if(typeof m=="function")D=function(){m(F)};else if(typeof MessageChannel<"u"){var T=new MessageChannel,U=T.port2;T.port1.onmessage=F,D=function(){U.postMessage(null)}}else D=function(){$(F,0)};function G(E){C=E,P||(P=!0,D())}function H(E,z){k=$(function(){E(e.unstable_now())},z)}e.unstable_IdlePriority=5,e.unstable_ImmediatePriority=1,e.unstable_LowPriority=4,e.unstable_NormalPriority=3,e.unstable_Profiling=null,e.unstable_UserBlockingPriority=2,e.unstable_cancelCallback=function(E){E.callback=null},e.unstable_continueExecution=function(){v||h||(v=!0,G(x))},e.unstable_forceFrameRate=function(E){0>E||125<E?console.error("forceFrameRate takes a positive int between 0 and 125, forcing frame rates higher than 125 fps is not supported"):I=0<E?Math.floor(1e3/E):5},e.unstable_getCurrentPriorityLevel=function(){return p},e.unstable_getFirstCallbackNode=function(){return n(l)},e.unstable_next=function(E){switch(p){case 1:case 2:case 3:var z=3;break;default:z=p}var O=p;p=z;try{return E()}finally{p=O}},e.unstable_pauseExecution=function(){},e.unstable_requestPaint=function(){},e.unstable_runWithPriority=function(E,z){switch(E){case 1:case 2:case 3:case 4:case 5:break;default:E=3}var O=p;p=E;try{return z()}finally{p=O}},e.unstable_scheduleCallback=function(E,z,O){var j=e.unstable_now();switch(typeof O=="object"&&O!==null?(O=O.delay,O=typeof O=="number"&&0<O?j+O:j):O=j,E){case 1:var B=-1;break;case 2:B=250;break;case 5:B=1073741823;break;case 4:B=1e4;break;default:B=5e3}return B=O+B,E={id:u++,callback:z,priorityLevel:E,startTime:O,expirationTime:B,sortIndex:-1},O>j?(E.sortIndex=O,t(c,E),n(l)===null&&E===n(c)&&(w?(f(k),k=-1):w=!0,H(b,O-j))):(E.sortIndex=B,t(l,E),v||h||(v=!0,G(x))),E},e.unstable_shouldYield=M,e.unstable_wrapCallback=function(E){var z=p;return function(){var O=p;p=z;try{return E.apply(this,arguments)}finally{p=O}}}})(Bd);Md.exports=Bd;var wf=Md.exports;/**
 * @license React
 * react-dom.production.min.js
 *
 * Copyright (c) Facebook, Inc. and its affiliates.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */var xf=S,We=wf;function R(e){for(var t="https://reactjs.org/docs/error-decoder.html?invariant="+e,n=1;n<arguments.length;n++)t+="&args[]="+encodeURIComponent(arguments[n]);return"Minified React error #"+e+"; visit "+t+" for the full message or use the non-minified dev environment for full errors and additional helpful warnings."}var Nd=new Set,Ho={};function Pn(e,t){eo(e,t),eo(e+"Capture",t)}function eo(e,t){for(Ho[e]=t,e=0;e<t.length;e++)Nd.add(t[e])}var Pt=!(typeof window>"u"||typeof window.document>"u"||typeof window.document.createElement>"u"),Wi=Object.prototype.hasOwnProperty,Pf=/^[:A-Z_a-z\u00C0-\u00D6\u00D8-\u00F6\u00F8-\u02FF\u0370-\u037D\u037F-\u1FFF\u200C-\u200D\u2070-\u218F\u2C00-\u2FEF\u3001-\uD7FF\uF900-\uFDCF\uFDF0-\uFFFD][:A-Z_a-z\u00C0-\u00D6\u00D8-\u00F6\u00F8-\u02FF\u0370-\u037D\u037F-\u1FFF\u200C-\u200D\u2070-\u218F\u2C00-\u2FEF\u3001-\uD7FF\uF900-\uFDCF\uFDF0-\uFFFD\-.0-9\u00B7\u0300-\u036F\u203F-\u2040]*$/,Sc={},Cc={};function $f(e){return Wi.call(Cc,e)?!0:Wi.call(Sc,e)?!1:Pf.test(e)?Cc[e]=!0:(Sc[e]=!0,!1)}function Sf(e,t,n,o){if(n!==null&&n.type===0)return!1;switch(typeof t){case"function":case"symbol":return!0;case"boolean":return o?!1:n!==null?!n.acceptsBooleans:(e=e.toLowerCase().slice(0,5),e!=="data-"&&e!=="aria-");default:return!1}}function Cf(e,t,n,o){if(t===null||typeof t>"u"||Sf(e,t,n,o))return!0;if(o)return!1;if(n!==null)switch(n.type){case 3:return!t;case 4:return t===!1;case 5:return isNaN(t);case 6:return isNaN(t)||1>t}return!1}function ze(e,t,n,o,r,a,i){this.acceptsBooleans=t===2||t===3||t===4,this.attributeName=o,this.attributeNamespace=r,this.mustUseProperty=n,this.propertyName=e,this.type=t,this.sanitizeURL=a,this.removeEmptyString=i}var xe={};"children dangerouslySetInnerHTML defaultValue defaultChecked innerHTML suppressContentEditableWarning suppressHydrationWarning style".split(" ").forEach(function(e){xe[e]=new ze(e,0,!1,e,null,!1,!1)});[["acceptCharset","accept-charset"],["className","class"],["htmlFor","for"],["httpEquiv","http-equiv"]].forEach(function(e){var t=e[0];xe[t]=new ze(t,1,!1,e[1],null,!1,!1)});["contentEditable","draggable","spellCheck","value"].forEach(function(e){xe[e]=new ze(e,2,!1,e.toLowerCase(),null,!1,!1)});["autoReverse","externalResourcesRequired","focusable","preserveAlpha"].forEach(function(e){xe[e]=new ze(e,2,!1,e,null,!1,!1)});"allowFullScreen async autoFocus autoPlay controls default defer disabled disablePictureInPicture disableRemotePlayback formNoValidate hidden loop noModule noValidate open playsInline readOnly required reversed scoped seamless itemScope".split(" ").forEach(function(e){xe[e]=new ze(e,3,!1,e.toLowerCase(),null,!1,!1)});["checked","multiple","muted","selected"].forEach(function(e){xe[e]=new ze(e,3,!0,e,null,!1,!1)});["capture","download"].forEach(function(e){xe[e]=new ze(e,4,!1,e,null,!1,!1)});["cols","rows","size","span"].forEach(function(e){xe[e]=new ze(e,6,!1,e,null,!1,!1)});["rowSpan","start"].forEach(function(e){xe[e]=new ze(e,5,!1,e.toLowerCase(),null,!1,!1)});var tl=/[\-:]([a-z])/g;function nl(e){return e[1].toUpperCase()}"accent-height alignment-baseline arabic-form baseline-shift cap-height clip-path clip-rule color-interpolation color-interpolation-filters color-profile color-rendering dominant-baseline enable-background fill-opacity fill-rule flood-color flood-opacity font-family font-size font-size-adjust font-stretch font-style font-variant font-weight glyph-name glyph-orientation-horizontal glyph-orientation-vertical horiz-adv-x horiz-origin-x image-rendering letter-spacing lighting-color marker-end marker-mid marker-start overline-position overline-thickness paint-order panose-1 pointer-events rendering-intent shape-rendering stop-color stop-opacity strikethrough-position strikethrough-thickness stroke-dasharray stroke-dashoffset stroke-linecap stroke-linejoin stroke-miterlimit stroke-opacity stroke-width text-anchor text-decoration text-rendering underline-position underline-thickness unicode-bidi unicode-range units-per-em v-alphabetic v-hanging v-ideographic v-mathematical vector-effect vert-adv-y vert-origin-x vert-origin-y word-spacing writing-mode xmlns:xlink x-height".split(" ").forEach(function(e){var t=e.replace(tl,nl);xe[t]=new ze(t,1,!1,e,null,!1,!1)});"xlink:actuate xlink:arcrole xlink:role xlink:show xlink:title xlink:type".split(" ").forEach(function(e){var t=e.replace(tl,nl);xe[t]=new ze(t,1,!1,e,"http://www.w3.org/1999/xlink",!1,!1)});["xml:base","xml:lang","xml:space"].forEach(function(e){var t=e.replace(tl,nl);xe[t]=new ze(t,1,!1,e,"http://www.w3.org/XML/1998/namespace",!1,!1)});["tabIndex","crossOrigin"].forEach(function(e){xe[e]=new ze(e,1,!1,e.toLowerCase(),null,!1,!1)});xe.xlinkHref=new ze("xlinkHref",1,!1,"xlink:href","http://www.w3.org/1999/xlink",!0,!1);["src","href","action","formAction"].forEach(function(e){xe[e]=new ze(e,1,!1,e.toLowerCase(),null,!0,!0)});function ol(e,t,n,o){var r=xe.hasOwnProperty(t)?xe[t]:null;(r!==null?r.type!==0:o||!(2<t.length)||t[0]!=="o"&&t[0]!=="O"||t[1]!=="n"&&t[1]!=="N")&&(Cf(t,n,r,o)&&(n=null),o||r===null?$f(t)&&(n===null?e.removeAttribute(t):e.setAttribute(t,""+n)):r.mustUseProperty?e[r.propertyName]=n===null?r.type===3?!1:"":n:(t=r.attributeName,o=r.attributeNamespace,n===null?e.removeAttribute(t):(r=r.type,n=r===3||r===4&&n===!0?"":""+n,o?e.setAttributeNS(o,t,n):e.setAttribute(t,n))))}var kt=xf.__SECRET_INTERNALS_DO_NOT_USE_OR_YOU_WILL_BE_FIRED,Pr=Symbol.for("react.element"),On=Symbol.for("react.portal"),Dn=Symbol.for("react.fragment"),rl=Symbol.for("react.strict_mode"),Vi=Symbol.for("react.profiler"),Fd=Symbol.for("react.provider"),Ud=Symbol.for("react.context"),al=Symbol.for("react.forward_ref"),Hi=Symbol.for("react.suspense"),Gi=Symbol.for("react.suspense_list"),il=Symbol.for("react.memo"),zt=Symbol.for("react.lazy"),Wd=Symbol.for("react.offscreen"),kc=Symbol.iterator;function bo(e){return e===null||typeof e!="object"?null:(e=kc&&e[kc]||e["@@iterator"],typeof e=="function"?e:null)}var re=Object.assign,ni;function Io(e){if(ni===void 0)try{throw Error()}catch(n){var t=n.stack.trim().match(/\n( *(at )?)/);ni=t&&t[1]||""}return`
`+ni+e}var oi=!1;function ri(e,t){if(!e||oi)return"";oi=!0;var n=Error.prepareStackTrace;Error.prepareStackTrace=void 0;try{if(t)if(t=function(){throw Error()},Object.defineProperty(t.prototype,"props",{set:function(){throw Error()}}),typeof Reflect=="object"&&Reflect.construct){try{Reflect.construct(t,[])}catch(c){var o=c}Reflect.construct(e,[],t)}else{try{t.call()}catch(c){o=c}e.call(t.prototype)}else{try{throw Error()}catch(c){o=c}e()}}catch(c){if(c&&o&&typeof c.stack=="string"){for(var r=c.stack.split(`
`),a=o.stack.split(`
`),i=r.length-1,s=a.length-1;1<=i&&0<=s&&r[i]!==a[s];)s--;for(;1<=i&&0<=s;i--,s--)if(r[i]!==a[s]){if(i!==1||s!==1)do if(i--,s--,0>s||r[i]!==a[s]){var l=`
`+r[i].replace(" at new "," at ");return e.displayName&&l.includes("<anonymous>")&&(l=l.replace("<anonymous>",e.displayName)),l}while(1<=i&&0<=s);break}}}finally{oi=!1,Error.prepareStackTrace=n}return(e=e?e.displayName||e.name:"")?Io(e):""}function kf(e){switch(e.tag){case 5:return Io(e.type);case 16:return Io("Lazy");case 13:return Io("Suspense");case 19:return Io("SuspenseList");case 0:case 2:case 15:return e=ri(e.type,!1),e;case 11:return e=ri(e.type.render,!1),e;case 1:return e=ri(e.type,!0),e;default:return""}}function qi(e){if(e==null)return null;if(typeof e=="function")return e.displayName||e.name||null;if(typeof e=="string")return e;switch(e){case Dn:return"Fragment";case On:return"Portal";case Vi:return"Profiler";case rl:return"StrictMode";case Hi:return"Suspense";case Gi:return"SuspenseList"}if(typeof e=="object")switch(e.$$typeof){case Ud:return(e.displayName||"Context")+".Consumer";case Fd:return(e._context.displayName||"Context")+".Provider";case al:var t=e.render;return e=e.displayName,e||(e=t.displayName||t.name||"",e=e!==""?"ForwardRef("+e+")":"ForwardRef"),e;case il:return t=e.displayName||null,t!==null?t:qi(e.type)||"Memo";case zt:t=e._payload,e=e._init;try{return qi(e(t))}catch{}}return null}function Lf(e){var t=e.type;switch(e.tag){case 24:return"Cache";case 9:return(t.displayName||"Context")+".Consumer";case 10:return(t._context.displayName||"Context")+".Provider";case 18:return"DehydratedFragment";case 11:return e=t.render,e=e.displayName||e.name||"",t.displayName||(e!==""?"ForwardRef("+e+")":"ForwardRef");case 7:return"Fragment";case 5:return t;case 4:return"Portal";case 3:return"Root";case 6:return"Text";case 16:return qi(t);case 8:return t===rl?"StrictMode":"Mode";case 22:return"Offscreen";case 12:return"Profiler";case 21:return"Scope";case 13:return"Suspense";case 19:return"SuspenseList";case 25:return"TracingMarker";case 1:case 0:case 17:case 2:case 14:case 15:if(typeof t=="function")return t.displayName||t.name||null;if(typeof t=="string")return t}return null}function Yt(e){switch(typeof e){case"boolean":case"number":case"string":case"undefined":return e;case"object":return e;default:return""}}function Vd(e){var t=e.type;return(e=e.nodeName)&&e.toLowerCase()==="input"&&(t==="checkbox"||t==="radio")}function If(e){var t=Vd(e)?"checked":"value",n=Object.getOwnPropertyDescriptor(e.constructor.prototype,t),o=""+e[t];if(!e.hasOwnProperty(t)&&typeof n<"u"&&typeof n.get=="function"&&typeof n.set=="function"){var r=n.get,a=n.set;return Object.defineProperty(e,t,{configurable:!0,get:function(){return r.call(this)},set:function(i){o=""+i,a.call(this,i)}}),Object.defineProperty(e,t,{enumerable:n.enumerable}),{getValue:function(){return o},setValue:function(i){o=""+i},stopTracking:function(){e._valueTracker=null,delete e[t]}}}}function $r(e){e._valueTracker||(e._valueTracker=If(e))}function Hd(e){if(!e)return!1;var t=e._valueTracker;if(!t)return!0;var n=t.getValue(),o="";return e&&(o=Vd(e)?e.checked?"true":"false":e.value),e=o,e!==n?(t.setValue(e),!0):!1}function ia(e){if(e=e||(typeof document<"u"?document:void 0),typeof e>"u")return null;try{return e.activeElement||e.body}catch{return e.body}}function Qi(e,t){var n=t.checked;return re({},t,{defaultChecked:void 0,defaultValue:void 0,value:void 0,checked:n??e._wrapperState.initialChecked})}function Lc(e,t){var n=t.defaultValue==null?"":t.defaultValue,o=t.checked!=null?t.checked:t.defaultChecked;n=Yt(t.value!=null?t.value:n),e._wrapperState={initialChecked:o,initialValue:n,controlled:t.type==="checkbox"||t.type==="radio"?t.checked!=null:t.value!=null}}function Gd(e,t){t=t.checked,t!=null&&ol(e,"checked",t,!1)}function Ki(e,t){Gd(e,t);var n=Yt(t.value),o=t.type;if(n!=null)o==="number"?(n===0&&e.value===""||e.value!=n)&&(e.value=""+n):e.value!==""+n&&(e.value=""+n);else if(o==="submit"||o==="reset"){e.removeAttribute("value");return}t.hasOwnProperty("value")?Yi(e,t.type,n):t.hasOwnProperty("defaultValue")&&Yi(e,t.type,Yt(t.defaultValue)),t.checked==null&&t.defaultChecked!=null&&(e.defaultChecked=!!t.defaultChecked)}function Ic(e,t,n){if(t.hasOwnProperty("value")||t.hasOwnProperty("defaultValue")){var o=t.type;if(!(o!=="submit"&&o!=="reset"||t.value!==void 0&&t.value!==null))return;t=""+e._wrapperState.initialValue,n||t===e.value||(e.value=t),e.defaultValue=t}n=e.name,n!==""&&(e.name=""),e.defaultChecked=!!e._wrapperState.initialChecked,n!==""&&(e.name=n)}function Yi(e,t,n){(t!=="number"||ia(e.ownerDocument)!==e)&&(n==null?e.defaultValue=""+e._wrapperState.initialValue:e.defaultValue!==""+n&&(e.defaultValue=""+n))}var _o=Array.isArray;function Gn(e,t,n,o){if(e=e.options,t){t={};for(var r=0;r<n.length;r++)t["$"+n[r]]=!0;for(n=0;n<e.length;n++)r=t.hasOwnProperty("$"+e[n].value),e[n].selected!==r&&(e[n].selected=r),r&&o&&(e[n].defaultSelected=!0)}else{for(n=""+Yt(n),t=null,r=0;r<e.length;r++){if(e[r].value===n){e[r].selected=!0,o&&(e[r].defaultSelected=!0);return}t!==null||e[r].disabled||(t=e[r])}t!==null&&(t.selected=!0)}}function Xi(e,t){if(t.dangerouslySetInnerHTML!=null)throw Error(R(91));return re({},t,{value:void 0,defaultValue:void 0,children:""+e._wrapperState.initialValue})}function _c(e,t){var n=t.value;if(n==null){if(n=t.children,t=t.defaultValue,n!=null){if(t!=null)throw Error(R(92));if(_o(n)){if(1<n.length)throw Error(R(93));n=n[0]}t=n}t==null&&(t=""),n=t}e._wrapperState={initialValue:Yt(n)}}function qd(e,t){var n=Yt(t.value),o=Yt(t.defaultValue);n!=null&&(n=""+n,n!==e.value&&(e.value=n),t.defaultValue==null&&e.defaultValue!==n&&(e.defaultValue=n)),o!=null&&(e.defaultValue=""+o)}function Ec(e){var t=e.textContent;t===e._wrapperState.initialValue&&t!==""&&t!==null&&(e.value=t)}function Qd(e){switch(e){case"svg":return"http://www.w3.org/2000/svg";case"math":return"http://www.w3.org/1998/Math/MathML";default:return"http://www.w3.org/1999/xhtml"}}function Zi(e,t){return e==null||e==="http://www.w3.org/1999/xhtml"?Qd(t):e==="http://www.w3.org/2000/svg"&&t==="foreignObject"?"http://www.w3.org/1999/xhtml":e}var Sr,Kd=function(e){return typeof MSApp<"u"&&MSApp.execUnsafeLocalFunction?function(t,n,o,r){MSApp.execUnsafeLocalFunction(function(){return e(t,n,o,r)})}:e}(function(e,t){if(e.namespaceURI!=="http://www.w3.org/2000/svg"||"innerHTML"in e)e.innerHTML=t;else{for(Sr=Sr||document.createElement("div"),Sr.innerHTML="<svg>"+t.valueOf().toString()+"</svg>",t=Sr.firstChild;e.firstChild;)e.removeChild(e.firstChild);for(;t.firstChild;)e.appendChild(t.firstChild)}});function Go(e,t){if(t){var n=e.firstChild;if(n&&n===e.lastChild&&n.nodeType===3){n.nodeValue=t;return}}e.textContent=t}var jo={animationIterationCount:!0,aspectRatio:!0,borderImageOutset:!0,borderImageSlice:!0,borderImageWidth:!0,boxFlex:!0,boxFlexGroup:!0,boxOrdinalGroup:!0,columnCount:!0,columns:!0,flex:!0,flexGrow:!0,flexPositive:!0,flexShrink:!0,flexNegative:!0,flexOrder:!0,gridArea:!0,gridRow:!0,gridRowEnd:!0,gridRowSpan:!0,gridRowStart:!0,gridColumn:!0,gridColumnEnd:!0,gridColumnSpan:!0,gridColumnStart:!0,fontWeight:!0,lineClamp:!0,lineHeight:!0,opacity:!0,order:!0,orphans:!0,tabSize:!0,widows:!0,zIndex:!0,zoom:!0,fillOpacity:!0,floodOpacity:!0,stopOpacity:!0,strokeDasharray:!0,strokeDashoffset:!0,strokeMiterlimit:!0,strokeOpacity:!0,strokeWidth:!0},_f=["Webkit","ms","Moz","O"];Object.keys(jo).forEach(function(e){_f.forEach(function(t){t=t+e.charAt(0).toUpperCase()+e.substring(1),jo[t]=jo[e]})});function Yd(e,t,n){return t==null||typeof t=="boolean"||t===""?"":n||typeof t!="number"||t===0||jo.hasOwnProperty(e)&&jo[e]?(""+t).trim():t+"px"}function Xd(e,t){e=e.style;for(var n in t)if(t.hasOwnProperty(n)){var o=n.indexOf("--")===0,r=Yd(n,t[n],o);n==="float"&&(n="cssFloat"),o?e.setProperty(n,r):e[n]=r}}var Ef=re({menuitem:!0},{area:!0,base:!0,br:!0,col:!0,embed:!0,hr:!0,img:!0,input:!0,keygen:!0,link:!0,meta:!0,param:!0,source:!0,track:!0,wbr:!0});function Ji(e,t){if(t){if(Ef[e]&&(t.children!=null||t.dangerouslySetInnerHTML!=null))throw Error(R(137,e));if(t.dangerouslySetInnerHTML!=null){if(t.children!=null)throw Error(R(60));if(typeof t.dangerouslySetInnerHTML!="object"||!("__html"in t.dangerouslySetInnerHTML))throw Error(R(61))}if(t.style!=null&&typeof t.style!="object")throw Error(R(62))}}function es(e,t){if(e.indexOf("-")===-1)return typeof t.is=="string";switch(e){case"annotation-xml":case"color-profile":case"font-face":case"font-face-src":case"font-face-uri":case"font-face-format":case"font-face-name":case"missing-glyph":return!1;default:return!0}}var ts=null;function sl(e){return e=e.target||e.srcElement||window,e.correspondingUseElement&&(e=e.correspondingUseElement),e.nodeType===3?e.parentNode:e}var ns=null,qn=null,Qn=null;function Rc(e){if(e=gr(e)){if(typeof ns!="function")throw Error(R(280));var t=e.stateNode;t&&(t=Fa(t),ns(e.stateNode,e.type,t))}}function Zd(e){qn?Qn?Qn.push(e):Qn=[e]:qn=e}function Jd(){if(qn){var e=qn,t=Qn;if(Qn=qn=null,Rc(e),t)for(e=0;e<t.length;e++)Rc(t[e])}}function ep(e,t){return e(t)}function tp(){}var ai=!1;function np(e,t,n){if(ai)return e(t,n);ai=!0;try{return ep(e,t,n)}finally{ai=!1,(qn!==null||Qn!==null)&&(tp(),Jd())}}function qo(e,t){var n=e.stateNode;if(n===null)return null;var o=Fa(n);if(o===null)return null;n=o[t];e:switch(t){case"onClick":case"onClickCapture":case"onDoubleClick":case"onDoubleClickCapture":case"onMouseDown":case"onMouseDownCapture":case"onMouseMove":case"onMouseMoveCapture":case"onMouseUp":case"onMouseUpCapture":case"onMouseEnter":(o=!o.disabled)||(e=e.type,o=!(e==="button"||e==="input"||e==="select"||e==="textarea")),e=!o;break e;default:e=!1}if(e)return null;if(n&&typeof n!="function")throw Error(R(231,t,typeof n));return n}var os=!1;if(Pt)try{var wo={};Object.defineProperty(wo,"passive",{get:function(){os=!0}}),window.addEventListener("test",wo,wo),window.removeEventListener("test",wo,wo)}catch{os=!1}function Rf(e,t,n,o,r,a,i,s,l){var c=Array.prototype.slice.call(arguments,3);try{t.apply(n,c)}catch(u){this.onError(u)}}var Ao=!1,sa=null,la=!1,rs=null,zf={onError:function(e){Ao=!0,sa=e}};function Of(e,t,n,o,r,a,i,s,l){Ao=!1,sa=null,Rf.apply(zf,arguments)}function Df(e,t,n,o,r,a,i,s,l){if(Of.apply(this,arguments),Ao){if(Ao){var c=sa;Ao=!1,sa=null}else throw Error(R(198));la||(la=!0,rs=c)}}function $n(e){var t=e,n=e;if(e.alternate)for(;t.return;)t=t.return;else{e=t;do t=e,t.flags&4098&&(n=t.return),e=t.return;while(e)}return t.tag===3?n:null}function op(e){if(e.tag===13){var t=e.memoizedState;if(t===null&&(e=e.alternate,e!==null&&(t=e.memoizedState)),t!==null)return t.dehydrated}return null}function zc(e){if($n(e)!==e)throw Error(R(188))}function Tf(e){var t=e.alternate;if(!t){if(t=$n(e),t===null)throw Error(R(188));return t!==e?null:e}for(var n=e,o=t;;){var r=n.return;if(r===null)break;var a=r.alternate;if(a===null){if(o=r.return,o!==null){n=o;continue}break}if(r.child===a.child){for(a=r.child;a;){if(a===n)return zc(r),e;if(a===o)return zc(r),t;a=a.sibling}throw Error(R(188))}if(n.return!==o.return)n=r,o=a;else{for(var i=!1,s=r.child;s;){if(s===n){i=!0,n=r,o=a;break}if(s===o){i=!0,o=r,n=a;break}s=s.sibling}if(!i){for(s=a.child;s;){if(s===n){i=!0,n=a,o=r;break}if(s===o){i=!0,o=a,n=r;break}s=s.sibling}if(!i)throw Error(R(189))}}if(n.alternate!==o)throw Error(R(190))}if(n.tag!==3)throw Error(R(188));return n.stateNode.current===n?e:t}function rp(e){return e=Tf(e),e!==null?ap(e):null}function ap(e){if(e.tag===5||e.tag===6)return e;for(e=e.child;e!==null;){var t=ap(e);if(t!==null)return t;e=e.sibling}return null}var ip=We.unstable_scheduleCallback,Oc=We.unstable_cancelCallback,jf=We.unstable_shouldYield,Af=We.unstable_requestPaint,le=We.unstable_now,Mf=We.unstable_getCurrentPriorityLevel,ll=We.unstable_ImmediatePriority,sp=We.unstable_UserBlockingPriority,ca=We.unstable_NormalPriority,Bf=We.unstable_LowPriority,lp=We.unstable_IdlePriority,Aa=null,mt=null;function Nf(e){if(mt&&typeof mt.onCommitFiberRoot=="function")try{mt.onCommitFiberRoot(Aa,e,void 0,(e.current.flags&128)===128)}catch{}}var at=Math.clz32?Math.clz32:Wf,Ff=Math.log,Uf=Math.LN2;function Wf(e){return e>>>=0,e===0?32:31-(Ff(e)/Uf|0)|0}var Cr=64,kr=4194304;function Eo(e){switch(e&-e){case 1:return 1;case 2:return 2;case 4:return 4;case 8:return 8;case 16:return 16;case 32:return 32;case 64:case 128:case 256:case 512:case 1024:case 2048:case 4096:case 8192:case 16384:case 32768:case 65536:case 131072:case 262144:case 524288:case 1048576:case 2097152:return e&4194240;case 4194304:case 8388608:case 16777216:case 33554432:case 67108864:return e&130023424;case 134217728:return 134217728;case 268435456:return 268435456;case 536870912:return 536870912;case 1073741824:return 1073741824;default:return e}}function ua(e,t){var n=e.pendingLanes;if(n===0)return 0;var o=0,r=e.suspendedLanes,a=e.pingedLanes,i=n&268435455;if(i!==0){var s=i&~r;s!==0?o=Eo(s):(a&=i,a!==0&&(o=Eo(a)))}else i=n&~r,i!==0?o=Eo(i):a!==0&&(o=Eo(a));if(o===0)return 0;if(t!==0&&t!==o&&!(t&r)&&(r=o&-o,a=t&-t,r>=a||r===16&&(a&4194240)!==0))return t;if(o&4&&(o|=n&16),t=e.entangledLanes,t!==0)for(e=e.entanglements,t&=o;0<t;)n=31-at(t),r=1<<n,o|=e[n],t&=~r;return o}function Vf(e,t){switch(e){case 1:case 2:case 4:return t+250;case 8:case 16:case 32:case 64:case 128:case 256:case 512:case 1024:case 2048:case 4096:case 8192:case 16384:case 32768:case 65536:case 131072:case 262144:case 524288:case 1048576:case 2097152:return t+5e3;case 4194304:case 8388608:case 16777216:case 33554432:case 67108864:return-1;case 134217728:case 268435456:case 536870912:case 1073741824:return-1;default:return-1}}function Hf(e,t){for(var n=e.suspendedLanes,o=e.pingedLanes,r=e.expirationTimes,a=e.pendingLanes;0<a;){var i=31-at(a),s=1<<i,l=r[i];l===-1?(!(s&n)||s&o)&&(r[i]=Vf(s,t)):l<=t&&(e.expiredLanes|=s),a&=~s}}function as(e){return e=e.pendingLanes&-1073741825,e!==0?e:e&1073741824?1073741824:0}function cp(){var e=Cr;return Cr<<=1,!(Cr&4194240)&&(Cr=64),e}function ii(e){for(var t=[],n=0;31>n;n++)t.push(e);return t}function pr(e,t,n){e.pendingLanes|=t,t!==536870912&&(e.suspendedLanes=0,e.pingedLanes=0),e=e.eventTimes,t=31-at(t),e[t]=n}function Gf(e,t){var n=e.pendingLanes&~t;e.pendingLanes=t,e.suspendedLanes=0,e.pingedLanes=0,e.expiredLanes&=t,e.mutableReadLanes&=t,e.entangledLanes&=t,t=e.entanglements;var o=e.eventTimes;for(e=e.expirationTimes;0<n;){var r=31-at(n),a=1<<r;t[r]=0,o[r]=-1,e[r]=-1,n&=~a}}function cl(e,t){var n=e.entangledLanes|=t;for(e=e.entanglements;n;){var o=31-at(n),r=1<<o;r&t|e[o]&t&&(e[o]|=t),n&=~r}}var Y=0;function up(e){return e&=-e,1<e?4<e?e&268435455?16:536870912:4:1}var dp,ul,pp,mp,gp,is=!1,Lr=[],Ft=null,Ut=null,Wt=null,Qo=new Map,Ko=new Map,Dt=[],qf="mousedown mouseup touchcancel touchend touchstart auxclick dblclick pointercancel pointerdown pointerup dragend dragstart drop compositionend compositionstart keydown keypress keyup input textInput copy cut paste click change contextmenu reset submit".split(" ");function Dc(e,t){switch(e){case"focusin":case"focusout":Ft=null;break;case"dragenter":case"dragleave":Ut=null;break;case"mouseover":case"mouseout":Wt=null;break;case"pointerover":case"pointerout":Qo.delete(t.pointerId);break;case"gotpointercapture":case"lostpointercapture":Ko.delete(t.pointerId)}}function xo(e,t,n,o,r,a){return e===null||e.nativeEvent!==a?(e={blockedOn:t,domEventName:n,eventSystemFlags:o,nativeEvent:a,targetContainers:[r]},t!==null&&(t=gr(t),t!==null&&ul(t)),e):(e.eventSystemFlags|=o,t=e.targetContainers,r!==null&&t.indexOf(r)===-1&&t.push(r),e)}function Qf(e,t,n,o,r){switch(t){case"focusin":return Ft=xo(Ft,e,t,n,o,r),!0;case"dragenter":return Ut=xo(Ut,e,t,n,o,r),!0;case"mouseover":return Wt=xo(Wt,e,t,n,o,r),!0;case"pointerover":var a=r.pointerId;return Qo.set(a,xo(Qo.get(a)||null,e,t,n,o,r)),!0;case"gotpointercapture":return a=r.pointerId,Ko.set(a,xo(Ko.get(a)||null,e,t,n,o,r)),!0}return!1}function fp(e){var t=un(e.target);if(t!==null){var n=$n(t);if(n!==null){if(t=n.tag,t===13){if(t=op(n),t!==null){e.blockedOn=t,gp(e.priority,function(){pp(n)});return}}else if(t===3&&n.stateNode.current.memoizedState.isDehydrated){e.blockedOn=n.tag===3?n.stateNode.containerInfo:null;return}}}e.blockedOn=null}function Qr(e){if(e.blockedOn!==null)return!1;for(var t=e.targetContainers;0<t.length;){var n=ss(e.domEventName,e.eventSystemFlags,t[0],e.nativeEvent);if(n===null){n=e.nativeEvent;var o=new n.constructor(n.type,n);ts=o,n.target.dispatchEvent(o),ts=null}else return t=gr(n),t!==null&&ul(t),e.blockedOn=n,!1;t.shift()}return!0}function Tc(e,t,n){Qr(e)&&n.delete(t)}function Kf(){is=!1,Ft!==null&&Qr(Ft)&&(Ft=null),Ut!==null&&Qr(Ut)&&(Ut=null),Wt!==null&&Qr(Wt)&&(Wt=null),Qo.forEach(Tc),Ko.forEach(Tc)}function Po(e,t){e.blockedOn===t&&(e.blockedOn=null,is||(is=!0,We.unstable_scheduleCallback(We.unstable_NormalPriority,Kf)))}function Yo(e){function t(r){return Po(r,e)}if(0<Lr.length){Po(Lr[0],e);for(var n=1;n<Lr.length;n++){var o=Lr[n];o.blockedOn===e&&(o.blockedOn=null)}}for(Ft!==null&&Po(Ft,e),Ut!==null&&Po(Ut,e),Wt!==null&&Po(Wt,e),Qo.forEach(t),Ko.forEach(t),n=0;n<Dt.length;n++)o=Dt[n],o.blockedOn===e&&(o.blockedOn=null);for(;0<Dt.length&&(n=Dt[0],n.blockedOn===null);)fp(n),n.blockedOn===null&&Dt.shift()}var Kn=kt.ReactCurrentBatchConfig,da=!0;function Yf(e,t,n,o){var r=Y,a=Kn.transition;Kn.transition=null;try{Y=1,dl(e,t,n,o)}finally{Y=r,Kn.transition=a}}function Xf(e,t,n,o){var r=Y,a=Kn.transition;Kn.transition=null;try{Y=4,dl(e,t,n,o)}finally{Y=r,Kn.transition=a}}function dl(e,t,n,o){if(da){var r=ss(e,t,n,o);if(r===null)hi(e,t,o,pa,n),Dc(e,o);else if(Qf(r,e,t,n,o))o.stopPropagation();else if(Dc(e,o),t&4&&-1<qf.indexOf(e)){for(;r!==null;){var a=gr(r);if(a!==null&&dp(a),a=ss(e,t,n,o),a===null&&hi(e,t,o,pa,n),a===r)break;r=a}r!==null&&o.stopPropagation()}else hi(e,t,o,null,n)}}var pa=null;function ss(e,t,n,o){if(pa=null,e=sl(o),e=un(e),e!==null)if(t=$n(e),t===null)e=null;else if(n=t.tag,n===13){if(e=op(t),e!==null)return e;e=null}else if(n===3){if(t.stateNode.current.memoizedState.isDehydrated)return t.tag===3?t.stateNode.containerInfo:null;e=null}else t!==e&&(e=null);return pa=e,null}function hp(e){switch(e){case"cancel":case"click":case"close":case"contextmenu":case"copy":case"cut":case"auxclick":case"dblclick":case"dragend":case"dragstart":case"drop":case"focusin":case"focusout":case"input":case"invalid":case"keydown":case"keypress":case"keyup":case"mousedown":case"mouseup":case"paste":case"pause":case"play":case"pointercancel":case"pointerdown":case"pointerup":case"ratechange":case"reset":case"resize":case"seeked":case"submit":case"touchcancel":case"touchend":case"touchstart":case"volumechange":case"change":case"selectionchange":case"textInput":case"compositionstart":case"compositionend":case"compositionupdate":case"beforeblur":case"afterblur":case"beforeinput":case"blur":case"fullscreenchange":case"focus":case"hashchange":case"popstate":case"select":case"selectstart":return 1;case"drag":case"dragenter":case"dragexit":case"dragleave":case"dragover":case"mousemove":case"mouseout":case"mouseover":case"pointermove":case"pointerout":case"pointerover":case"scroll":case"toggle":case"touchmove":case"wheel":case"mouseenter":case"mouseleave":case"pointerenter":case"pointerleave":return 4;case"message":switch(Mf()){case ll:return 1;case sp:return 4;case ca:case Bf:return 16;case lp:return 536870912;default:return 16}default:return 16}}var jt=null,pl=null,Kr=null;function yp(){if(Kr)return Kr;var e,t=pl,n=t.length,o,r="value"in jt?jt.value:jt.textContent,a=r.length;for(e=0;e<n&&t[e]===r[e];e++);var i=n-e;for(o=1;o<=i&&t[n-o]===r[a-o];o++);return Kr=r.slice(e,1<o?1-o:void 0)}function Yr(e){var t=e.keyCode;return"charCode"in e?(e=e.charCode,e===0&&t===13&&(e=13)):e=t,e===10&&(e=13),32<=e||e===13?e:0}function Ir(){return!0}function jc(){return!1}function He(e){function t(n,o,r,a,i){this._reactName=n,this._targetInst=r,this.type=o,this.nativeEvent=a,this.target=i,this.currentTarget=null;for(var s in e)e.hasOwnProperty(s)&&(n=e[s],this[s]=n?n(a):a[s]);return this.isDefaultPrevented=(a.defaultPrevented!=null?a.defaultPrevented:a.returnValue===!1)?Ir:jc,this.isPropagationStopped=jc,this}return re(t.prototype,{preventDefault:function(){this.defaultPrevented=!0;var n=this.nativeEvent;n&&(n.preventDefault?n.preventDefault():typeof n.returnValue!="unknown"&&(n.returnValue=!1),this.isDefaultPrevented=Ir)},stopPropagation:function(){var n=this.nativeEvent;n&&(n.stopPropagation?n.stopPropagation():typeof n.cancelBubble!="unknown"&&(n.cancelBubble=!0),this.isPropagationStopped=Ir)},persist:function(){},isPersistent:Ir}),t}var co={eventPhase:0,bubbles:0,cancelable:0,timeStamp:function(e){return e.timeStamp||Date.now()},defaultPrevented:0,isTrusted:0},ml=He(co),mr=re({},co,{view:0,detail:0}),Zf=He(mr),si,li,$o,Ma=re({},mr,{screenX:0,screenY:0,clientX:0,clientY:0,pageX:0,pageY:0,ctrlKey:0,shiftKey:0,altKey:0,metaKey:0,getModifierState:gl,button:0,buttons:0,relatedTarget:function(e){return e.relatedTarget===void 0?e.fromElement===e.srcElement?e.toElement:e.fromElement:e.relatedTarget},movementX:function(e){return"movementX"in e?e.movementX:(e!==$o&&($o&&e.type==="mousemove"?(si=e.screenX-$o.screenX,li=e.screenY-$o.screenY):li=si=0,$o=e),si)},movementY:function(e){return"movementY"in e?e.movementY:li}}),Ac=He(Ma),Jf=re({},Ma,{dataTransfer:0}),e0=He(Jf),t0=re({},mr,{relatedTarget:0}),ci=He(t0),n0=re({},co,{animationName:0,elapsedTime:0,pseudoElement:0}),o0=He(n0),r0=re({},co,{clipboardData:function(e){return"clipboardData"in e?e.clipboardData:window.clipboardData}}),a0=He(r0),i0=re({},co,{data:0}),Mc=He(i0),s0={Esc:"Escape",Spacebar:" ",Left:"ArrowLeft",Up:"ArrowUp",Right:"ArrowRight",Down:"ArrowDown",Del:"Delete",Win:"OS",Menu:"ContextMenu",Apps:"ContextMenu",Scroll:"ScrollLock",MozPrintableKey:"Unidentified"},l0={8:"Backspace",9:"Tab",12:"Clear",13:"Enter",16:"Shift",17:"Control",18:"Alt",19:"Pause",20:"CapsLock",27:"Escape",32:" ",33:"PageUp",34:"PageDown",35:"End",36:"Home",37:"ArrowLeft",38:"ArrowUp",39:"ArrowRight",40:"ArrowDown",45:"Insert",46:"Delete",112:"F1",113:"F2",114:"F3",115:"F4",116:"F5",117:"F6",118:"F7",119:"F8",120:"F9",121:"F10",122:"F11",123:"F12",144:"NumLock",145:"ScrollLock",224:"Meta"},c0={Alt:"altKey",Control:"ctrlKey",Meta:"metaKey",Shift:"shiftKey"};function u0(e){var t=this.nativeEvent;return t.getModifierState?t.getModifierState(e):(e=c0[e])?!!t[e]:!1}function gl(){return u0}var d0=re({},mr,{key:function(e){if(e.key){var t=s0[e.key]||e.key;if(t!=="Unidentified")return t}return e.type==="keypress"?(e=Yr(e),e===13?"Enter":String.fromCharCode(e)):e.type==="keydown"||e.type==="keyup"?l0[e.keyCode]||"Unidentified":""},code:0,location:0,ctrlKey:0,shiftKey:0,altKey:0,metaKey:0,repeat:0,locale:0,getModifierState:gl,charCode:function(e){return e.type==="keypress"?Yr(e):0},keyCode:function(e){return e.type==="keydown"||e.type==="keyup"?e.keyCode:0},which:function(e){return e.type==="keypress"?Yr(e):e.type==="keydown"||e.type==="keyup"?e.keyCode:0}}),p0=He(d0),m0=re({},Ma,{pointerId:0,width:0,height:0,pressure:0,tangentialPressure:0,tiltX:0,tiltY:0,twist:0,pointerType:0,isPrimary:0}),Bc=He(m0),g0=re({},mr,{touches:0,targetTouches:0,changedTouches:0,altKey:0,metaKey:0,ctrlKey:0,shiftKey:0,getModifierState:gl}),f0=He(g0),h0=re({},co,{propertyName:0,elapsedTime:0,pseudoElement:0}),y0=He(h0),v0=re({},Ma,{deltaX:function(e){return"deltaX"in e?e.deltaX:"wheelDeltaX"in e?-e.wheelDeltaX:0},deltaY:function(e){return"deltaY"in e?e.deltaY:"wheelDeltaY"in e?-e.wheelDeltaY:"wheelDelta"in e?-e.wheelDelta:0},deltaZ:0,deltaMode:0}),b0=He(v0),w0=[9,13,27,32],fl=Pt&&"CompositionEvent"in window,Mo=null;Pt&&"documentMode"in document&&(Mo=document.documentMode);var x0=Pt&&"TextEvent"in window&&!Mo,vp=Pt&&(!fl||Mo&&8<Mo&&11>=Mo),Nc=" ",Fc=!1;function bp(e,t){switch(e){case"keyup":return w0.indexOf(t.keyCode)!==-1;case"keydown":return t.keyCode!==229;case"keypress":case"mousedown":case"focusout":return!0;default:return!1}}function wp(e){return e=e.detail,typeof e=="object"&&"data"in e?e.data:null}var Tn=!1;function P0(e,t){switch(e){case"compositionend":return wp(t);case"keypress":return t.which!==32?null:(Fc=!0,Nc);case"textInput":return e=t.data,e===Nc&&Fc?null:e;default:return null}}function $0(e,t){if(Tn)return e==="compositionend"||!fl&&bp(e,t)?(e=yp(),Kr=pl=jt=null,Tn=!1,e):null;switch(e){case"paste":return null;case"keypress":if(!(t.ctrlKey||t.altKey||t.metaKey)||t.ctrlKey&&t.altKey){if(t.char&&1<t.char.length)return t.char;if(t.which)return String.fromCharCode(t.which)}return null;case"compositionend":return vp&&t.locale!=="ko"?null:t.data;default:return null}}var S0={color:!0,date:!0,datetime:!0,"datetime-local":!0,email:!0,month:!0,number:!0,password:!0,range:!0,search:!0,tel:!0,text:!0,time:!0,url:!0,week:!0};function Uc(e){var t=e&&e.nodeName&&e.nodeName.toLowerCase();return t==="input"?!!S0[e.type]:t==="textarea"}function xp(e,t,n,o){Zd(o),t=ma(t,"onChange"),0<t.length&&(n=new ml("onChange","change",null,n,o),e.push({event:n,listeners:t}))}var Bo=null,Xo=null;function C0(e){zp(e,0)}function Ba(e){var t=Mn(e);if(Hd(t))return e}function k0(e,t){if(e==="change")return t}var Pp=!1;if(Pt){var ui;if(Pt){var di="oninput"in document;if(!di){var Wc=document.createElement("div");Wc.setAttribute("oninput","return;"),di=typeof Wc.oninput=="function"}ui=di}else ui=!1;Pp=ui&&(!document.documentMode||9<document.documentMode)}function Vc(){Bo&&(Bo.detachEvent("onpropertychange",$p),Xo=Bo=null)}function $p(e){if(e.propertyName==="value"&&Ba(Xo)){var t=[];xp(t,Xo,e,sl(e)),np(C0,t)}}function L0(e,t,n){e==="focusin"?(Vc(),Bo=t,Xo=n,Bo.attachEvent("onpropertychange",$p)):e==="focusout"&&Vc()}function I0(e){if(e==="selectionchange"||e==="keyup"||e==="keydown")return Ba(Xo)}function _0(e,t){if(e==="click")return Ba(t)}function E0(e,t){if(e==="input"||e==="change")return Ba(t)}function R0(e,t){return e===t&&(e!==0||1/e===1/t)||e!==e&&t!==t}var st=typeof Object.is=="function"?Object.is:R0;function Zo(e,t){if(st(e,t))return!0;if(typeof e!="object"||e===null||typeof t!="object"||t===null)return!1;var n=Object.keys(e),o=Object.keys(t);if(n.length!==o.length)return!1;for(o=0;o<n.length;o++){var r=n[o];if(!Wi.call(t,r)||!st(e[r],t[r]))return!1}return!0}function Hc(e){for(;e&&e.firstChild;)e=e.firstChild;return e}function Gc(e,t){var n=Hc(e);e=0;for(var o;n;){if(n.nodeType===3){if(o=e+n.textContent.length,e<=t&&o>=t)return{node:n,offset:t-e};e=o}e:{for(;n;){if(n.nextSibling){n=n.nextSibling;break e}n=n.parentNode}n=void 0}n=Hc(n)}}function Sp(e,t){return e&&t?e===t?!0:e&&e.nodeType===3?!1:t&&t.nodeType===3?Sp(e,t.parentNode):"contains"in e?e.contains(t):e.compareDocumentPosition?!!(e.compareDocumentPosition(t)&16):!1:!1}function Cp(){for(var e=window,t=ia();t instanceof e.HTMLIFrameElement;){try{var n=typeof t.contentWindow.location.href=="string"}catch{n=!1}if(n)e=t.contentWindow;else break;t=ia(e.document)}return t}function hl(e){var t=e&&e.nodeName&&e.nodeName.toLowerCase();return t&&(t==="input"&&(e.type==="text"||e.type==="search"||e.type==="tel"||e.type==="url"||e.type==="password")||t==="textarea"||e.contentEditable==="true")}function z0(e){var t=Cp(),n=e.focusedElem,o=e.selectionRange;if(t!==n&&n&&n.ownerDocument&&Sp(n.ownerDocument.documentElement,n)){if(o!==null&&hl(n)){if(t=o.start,e=o.end,e===void 0&&(e=t),"selectionStart"in n)n.selectionStart=t,n.selectionEnd=Math.min(e,n.value.length);else if(e=(t=n.ownerDocument||document)&&t.defaultView||window,e.getSelection){e=e.getSelection();var r=n.textContent.length,a=Math.min(o.start,r);o=o.end===void 0?a:Math.min(o.end,r),!e.extend&&a>o&&(r=o,o=a,a=r),r=Gc(n,a);var i=Gc(n,o);r&&i&&(e.rangeCount!==1||e.anchorNode!==r.node||e.anchorOffset!==r.offset||e.focusNode!==i.node||e.focusOffset!==i.offset)&&(t=t.createRange(),t.setStart(r.node,r.offset),e.removeAllRanges(),a>o?(e.addRange(t),e.extend(i.node,i.offset)):(t.setEnd(i.node,i.offset),e.addRange(t)))}}for(t=[],e=n;e=e.parentNode;)e.nodeType===1&&t.push({element:e,left:e.scrollLeft,top:e.scrollTop});for(typeof n.focus=="function"&&n.focus(),n=0;n<t.length;n++)e=t[n],e.element.scrollLeft=e.left,e.element.scrollTop=e.top}}var O0=Pt&&"documentMode"in document&&11>=document.documentMode,jn=null,ls=null,No=null,cs=!1;function qc(e,t,n){var o=n.window===n?n.document:n.nodeType===9?n:n.ownerDocument;cs||jn==null||jn!==ia(o)||(o=jn,"selectionStart"in o&&hl(o)?o={start:o.selectionStart,end:o.selectionEnd}:(o=(o.ownerDocument&&o.ownerDocument.defaultView||window).getSelection(),o={anchorNode:o.anchorNode,anchorOffset:o.anchorOffset,focusNode:o.focusNode,focusOffset:o.focusOffset}),No&&Zo(No,o)||(No=o,o=ma(ls,"onSelect"),0<o.length&&(t=new ml("onSelect","select",null,t,n),e.push({event:t,listeners:o}),t.target=jn)))}function _r(e,t){var n={};return n[e.toLowerCase()]=t.toLowerCase(),n["Webkit"+e]="webkit"+t,n["Moz"+e]="moz"+t,n}var An={animationend:_r("Animation","AnimationEnd"),animationiteration:_r("Animation","AnimationIteration"),animationstart:_r("Animation","AnimationStart"),transitionend:_r("Transition","TransitionEnd")},pi={},kp={};Pt&&(kp=document.createElement("div").style,"AnimationEvent"in window||(delete An.animationend.animation,delete An.animationiteration.animation,delete An.animationstart.animation),"TransitionEvent"in window||delete An.transitionend.transition);function Na(e){if(pi[e])return pi[e];if(!An[e])return e;var t=An[e],n;for(n in t)if(t.hasOwnProperty(n)&&n in kp)return pi[e]=t[n];return e}var Lp=Na("animationend"),Ip=Na("animationiteration"),_p=Na("animationstart"),Ep=Na("transitionend"),Rp=new Map,Qc="abort auxClick cancel canPlay canPlayThrough click close contextMenu copy cut drag dragEnd dragEnter dragExit dragLeave dragOver dragStart drop durationChange emptied encrypted ended error gotPointerCapture input invalid keyDown keyPress keyUp load loadedData loadedMetadata loadStart lostPointerCapture mouseDown mouseMove mouseOut mouseOver mouseUp paste pause play playing pointerCancel pointerDown pointerMove pointerOut pointerOver pointerUp progress rateChange reset resize seeked seeking stalled submit suspend timeUpdate touchCancel touchEnd touchStart volumeChange scroll toggle touchMove waiting wheel".split(" ");function Zt(e,t){Rp.set(e,t),Pn(t,[e])}for(var mi=0;mi<Qc.length;mi++){var gi=Qc[mi],D0=gi.toLowerCase(),T0=gi[0].toUpperCase()+gi.slice(1);Zt(D0,"on"+T0)}Zt(Lp,"onAnimationEnd");Zt(Ip,"onAnimationIteration");Zt(_p,"onAnimationStart");Zt("dblclick","onDoubleClick");Zt("focusin","onFocus");Zt("focusout","onBlur");Zt(Ep,"onTransitionEnd");eo("onMouseEnter",["mouseout","mouseover"]);eo("onMouseLeave",["mouseout","mouseover"]);eo("onPointerEnter",["pointerout","pointerover"]);eo("onPointerLeave",["pointerout","pointerover"]);Pn("onChange","change click focusin focusout input keydown keyup selectionchange".split(" "));Pn("onSelect","focusout contextmenu dragend focusin keydown keyup mousedown mouseup selectionchange".split(" "));Pn("onBeforeInput",["compositionend","keypress","textInput","paste"]);Pn("onCompositionEnd","compositionend focusout keydown keypress keyup mousedown".split(" "));Pn("onCompositionStart","compositionstart focusout keydown keypress keyup mousedown".split(" "));Pn("onCompositionUpdate","compositionupdate focusout keydown keypress keyup mousedown".split(" "));var Ro="abort canplay canplaythrough durationchange emptied encrypted ended error loadeddata loadedmetadata loadstart pause play playing progress ratechange resize seeked seeking stalled suspend timeupdate volumechange waiting".split(" "),j0=new Set("cancel close invalid load scroll toggle".split(" ").concat(Ro));function Kc(e,t,n){var o=e.type||"unknown-event";e.currentTarget=n,Df(o,t,void 0,e),e.currentTarget=null}function zp(e,t){t=(t&4)!==0;for(var n=0;n<e.length;n++){var o=e[n],r=o.event;o=o.listeners;e:{var a=void 0;if(t)for(var i=o.length-1;0<=i;i--){var s=o[i],l=s.instance,c=s.currentTarget;if(s=s.listener,l!==a&&r.isPropagationStopped())break e;Kc(r,s,c),a=l}else for(i=0;i<o.length;i++){if(s=o[i],l=s.instance,c=s.currentTarget,s=s.listener,l!==a&&r.isPropagationStopped())break e;Kc(r,s,c),a=l}}}if(la)throw e=rs,la=!1,rs=null,e}function J(e,t){var n=t[gs];n===void 0&&(n=t[gs]=new Set);var o=e+"__bubble";n.has(o)||(Op(t,e,2,!1),n.add(o))}function fi(e,t,n){var o=0;t&&(o|=4),Op(n,e,o,t)}var Er="_reactListening"+Math.random().toString(36).slice(2);function Jo(e){if(!e[Er]){e[Er]=!0,Nd.forEach(function(n){n!=="selectionchange"&&(j0.has(n)||fi(n,!1,e),fi(n,!0,e))});var t=e.nodeType===9?e:e.ownerDocument;t===null||t[Er]||(t[Er]=!0,fi("selectionchange",!1,t))}}function Op(e,t,n,o){switch(hp(t)){case 1:var r=Yf;break;case 4:r=Xf;break;default:r=dl}n=r.bind(null,t,n,e),r=void 0,!os||t!=="touchstart"&&t!=="touchmove"&&t!=="wheel"||(r=!0),o?r!==void 0?e.addEventListener(t,n,{capture:!0,passive:r}):e.addEventListener(t,n,!0):r!==void 0?e.addEventListener(t,n,{passive:r}):e.addEventListener(t,n,!1)}function hi(e,t,n,o,r){var a=o;if(!(t&1)&&!(t&2)&&o!==null)e:for(;;){if(o===null)return;var i=o.tag;if(i===3||i===4){var s=o.stateNode.containerInfo;if(s===r||s.nodeType===8&&s.parentNode===r)break;if(i===4)for(i=o.return;i!==null;){var l=i.tag;if((l===3||l===4)&&(l=i.stateNode.containerInfo,l===r||l.nodeType===8&&l.parentNode===r))return;i=i.return}for(;s!==null;){if(i=un(s),i===null)return;if(l=i.tag,l===5||l===6){o=a=i;continue e}s=s.parentNode}}o=o.return}np(function(){var c=a,u=sl(n),d=[];e:{var p=Rp.get(e);if(p!==void 0){var h=ml,v=e;switch(e){case"keypress":if(Yr(n)===0)break e;case"keydown":case"keyup":h=p0;break;case"focusin":v="focus",h=ci;break;case"focusout":v="blur",h=ci;break;case"beforeblur":case"afterblur":h=ci;break;case"click":if(n.button===2)break e;case"auxclick":case"dblclick":case"mousedown":case"mousemove":case"mouseup":case"mouseout":case"mouseover":case"contextmenu":h=Ac;break;case"drag":case"dragend":case"dragenter":case"dragexit":case"dragleave":case"dragover":case"dragstart":case"drop":h=e0;break;case"touchcancel":case"touchend":case"touchmove":case"touchstart":h=f0;break;case Lp:case Ip:case _p:h=o0;break;case Ep:h=y0;break;case"scroll":h=Zf;break;case"wheel":h=b0;break;case"copy":case"cut":case"paste":h=a0;break;case"gotpointercapture":case"lostpointercapture":case"pointercancel":case"pointerdown":case"pointermove":case"pointerout":case"pointerover":case"pointerup":h=Bc}var w=(t&4)!==0,$=!w&&e==="scroll",f=w?p!==null?p+"Capture":null:p;w=[];for(var m=c,g;m!==null;){g=m;var b=g.stateNode;if(g.tag===5&&b!==null&&(g=b,f!==null&&(b=qo(m,f),b!=null&&w.push(er(m,b,g)))),$)break;m=m.return}0<w.length&&(p=new h(p,v,null,n,u),d.push({event:p,listeners:w}))}}if(!(t&7)){e:{if(p=e==="mouseover"||e==="pointerover",h=e==="mouseout"||e==="pointerout",p&&n!==ts&&(v=n.relatedTarget||n.fromElement)&&(un(v)||v[$t]))break e;if((h||p)&&(p=u.window===u?u:(p=u.ownerDocument)?p.defaultView||p.parentWindow:window,h?(v=n.relatedTarget||n.toElement,h=c,v=v?un(v):null,v!==null&&($=$n(v),v!==$||v.tag!==5&&v.tag!==6)&&(v=null)):(h=null,v=c),h!==v)){if(w=Ac,b="onMouseLeave",f="onMouseEnter",m="mouse",(e==="pointerout"||e==="pointerover")&&(w=Bc,b="onPointerLeave",f="onPointerEnter",m="pointer"),$=h==null?p:Mn(h),g=v==null?p:Mn(v),p=new w(b,m+"leave",h,n,u),p.target=$,p.relatedTarget=g,b=null,un(u)===c&&(w=new w(f,m+"enter",v,n,u),w.target=g,w.relatedTarget=$,b=w),$=b,h&&v)t:{for(w=h,f=v,m=0,g=w;g;g=Ln(g))m++;for(g=0,b=f;b;b=Ln(b))g++;for(;0<m-g;)w=Ln(w),m--;for(;0<g-m;)f=Ln(f),g--;for(;m--;){if(w===f||f!==null&&w===f.alternate)break t;w=Ln(w),f=Ln(f)}w=null}else w=null;h!==null&&Yc(d,p,h,w,!1),v!==null&&$!==null&&Yc(d,$,v,w,!0)}}e:{if(p=c?Mn(c):window,h=p.nodeName&&p.nodeName.toLowerCase(),h==="select"||h==="input"&&p.type==="file")var x=k0;else if(Uc(p))if(Pp)x=E0;else{x=I0;var P=L0}else(h=p.nodeName)&&h.toLowerCase()==="input"&&(p.type==="checkbox"||p.type==="radio")&&(x=_0);if(x&&(x=x(e,c))){xp(d,x,n,u);break e}P&&P(e,p,c),e==="focusout"&&(P=p._wrapperState)&&P.controlled&&p.type==="number"&&Yi(p,"number",p.value)}switch(P=c?Mn(c):window,e){case"focusin":(Uc(P)||P.contentEditable==="true")&&(jn=P,ls=c,No=null);break;case"focusout":No=ls=jn=null;break;case"mousedown":cs=!0;break;case"contextmenu":case"mouseup":case"dragend":cs=!1,qc(d,n,u);break;case"selectionchange":if(O0)break;case"keydown":case"keyup":qc(d,n,u)}var C;if(fl)e:{switch(e){case"compositionstart":var k="onCompositionStart";break e;case"compositionend":k="onCompositionEnd";break e;case"compositionupdate":k="onCompositionUpdate";break e}k=void 0}else Tn?bp(e,n)&&(k="onCompositionEnd"):e==="keydown"&&n.keyCode===229&&(k="onCompositionStart");k&&(vp&&n.locale!=="ko"&&(Tn||k!=="onCompositionStart"?k==="onCompositionEnd"&&Tn&&(C=yp()):(jt=u,pl="value"in jt?jt.value:jt.textContent,Tn=!0)),P=ma(c,k),0<P.length&&(k=new Mc(k,e,null,n,u),d.push({event:k,listeners:P}),C?k.data=C:(C=wp(n),C!==null&&(k.data=C)))),(C=x0?P0(e,n):$0(e,n))&&(c=ma(c,"onBeforeInput"),0<c.length&&(u=new Mc("onBeforeInput","beforeinput",null,n,u),d.push({event:u,listeners:c}),u.data=C))}zp(d,t)})}function er(e,t,n){return{instance:e,listener:t,currentTarget:n}}function ma(e,t){for(var n=t+"Capture",o=[];e!==null;){var r=e,a=r.stateNode;r.tag===5&&a!==null&&(r=a,a=qo(e,n),a!=null&&o.unshift(er(e,a,r)),a=qo(e,t),a!=null&&o.push(er(e,a,r))),e=e.return}return o}function Ln(e){if(e===null)return null;do e=e.return;while(e&&e.tag!==5);return e||null}function Yc(e,t,n,o,r){for(var a=t._reactName,i=[];n!==null&&n!==o;){var s=n,l=s.alternate,c=s.stateNode;if(l!==null&&l===o)break;s.tag===5&&c!==null&&(s=c,r?(l=qo(n,a),l!=null&&i.unshift(er(n,l,s))):r||(l=qo(n,a),l!=null&&i.push(er(n,l,s)))),n=n.return}i.length!==0&&e.push({event:t,listeners:i})}var A0=/\r\n?/g,M0=/\u0000|\uFFFD/g;function Xc(e){return(typeof e=="string"?e:""+e).replace(A0,`
`).replace(M0,"")}function Rr(e,t,n){if(t=Xc(t),Xc(e)!==t&&n)throw Error(R(425))}function ga(){}var us=null,ds=null;function ps(e,t){return e==="textarea"||e==="noscript"||typeof t.children=="string"||typeof t.children=="number"||typeof t.dangerouslySetInnerHTML=="object"&&t.dangerouslySetInnerHTML!==null&&t.dangerouslySetInnerHTML.__html!=null}var ms=typeof setTimeout=="function"?setTimeout:void 0,B0=typeof clearTimeout=="function"?clearTimeout:void 0,Zc=typeof Promise=="function"?Promise:void 0,N0=typeof queueMicrotask=="function"?queueMicrotask:typeof Zc<"u"?function(e){return Zc.resolve(null).then(e).catch(F0)}:ms;function F0(e){setTimeout(function(){throw e})}function yi(e,t){var n=t,o=0;do{var r=n.nextSibling;if(e.removeChild(n),r&&r.nodeType===8)if(n=r.data,n==="/$"){if(o===0){e.removeChild(r),Yo(t);return}o--}else n!=="$"&&n!=="$?"&&n!=="$!"||o++;n=r}while(n);Yo(t)}function Vt(e){for(;e!=null;e=e.nextSibling){var t=e.nodeType;if(t===1||t===3)break;if(t===8){if(t=e.data,t==="$"||t==="$!"||t==="$?")break;if(t==="/$")return null}}return e}function Jc(e){e=e.previousSibling;for(var t=0;e;){if(e.nodeType===8){var n=e.data;if(n==="$"||n==="$!"||n==="$?"){if(t===0)return e;t--}else n==="/$"&&t++}e=e.previousSibling}return null}var uo=Math.random().toString(36).slice(2),pt="__reactFiber$"+uo,tr="__reactProps$"+uo,$t="__reactContainer$"+uo,gs="__reactEvents$"+uo,U0="__reactListeners$"+uo,W0="__reactHandles$"+uo;function un(e){var t=e[pt];if(t)return t;for(var n=e.parentNode;n;){if(t=n[$t]||n[pt]){if(n=t.alternate,t.child!==null||n!==null&&n.child!==null)for(e=Jc(e);e!==null;){if(n=e[pt])return n;e=Jc(e)}return t}e=n,n=e.parentNode}return null}function gr(e){return e=e[pt]||e[$t],!e||e.tag!==5&&e.tag!==6&&e.tag!==13&&e.tag!==3?null:e}function Mn(e){if(e.tag===5||e.tag===6)return e.stateNode;throw Error(R(33))}function Fa(e){return e[tr]||null}var fs=[],Bn=-1;function Jt(e){return{current:e}}function ee(e){0>Bn||(e.current=fs[Bn],fs[Bn]=null,Bn--)}function X(e,t){Bn++,fs[Bn]=e.current,e.current=t}var Xt={},ke=Jt(Xt),je=Jt(!1),hn=Xt;function to(e,t){var n=e.type.contextTypes;if(!n)return Xt;var o=e.stateNode;if(o&&o.__reactInternalMemoizedUnmaskedChildContext===t)return o.__reactInternalMemoizedMaskedChildContext;var r={},a;for(a in n)r[a]=t[a];return o&&(e=e.stateNode,e.__reactInternalMemoizedUnmaskedChildContext=t,e.__reactInternalMemoizedMaskedChildContext=r),r}function Ae(e){return e=e.childContextTypes,e!=null}function fa(){ee(je),ee(ke)}function eu(e,t,n){if(ke.current!==Xt)throw Error(R(168));X(ke,t),X(je,n)}function Dp(e,t,n){var o=e.stateNode;if(t=t.childContextTypes,typeof o.getChildContext!="function")return n;o=o.getChildContext();for(var r in o)if(!(r in t))throw Error(R(108,Lf(e)||"Unknown",r));return re({},n,o)}function ha(e){return e=(e=e.stateNode)&&e.__reactInternalMemoizedMergedChildContext||Xt,hn=ke.current,X(ke,e),X(je,je.current),!0}function tu(e,t,n){var o=e.stateNode;if(!o)throw Error(R(169));n?(e=Dp(e,t,hn),o.__reactInternalMemoizedMergedChildContext=e,ee(je),ee(ke),X(ke,e)):ee(je),X(je,n)}var yt=null,Ua=!1,vi=!1;function Tp(e){yt===null?yt=[e]:yt.push(e)}function V0(e){Ua=!0,Tp(e)}function en(){if(!vi&&yt!==null){vi=!0;var e=0,t=Y;try{var n=yt;for(Y=1;e<n.length;e++){var o=n[e];do o=o(!0);while(o!==null)}yt=null,Ua=!1}catch(r){throw yt!==null&&(yt=yt.slice(e+1)),ip(ll,en),r}finally{Y=t,vi=!1}}return null}var Nn=[],Fn=0,ya=null,va=0,Qe=[],Ke=0,yn=null,vt=1,bt="";function an(e,t){Nn[Fn++]=va,Nn[Fn++]=ya,ya=e,va=t}function jp(e,t,n){Qe[Ke++]=vt,Qe[Ke++]=bt,Qe[Ke++]=yn,yn=e;var o=vt;e=bt;var r=32-at(o)-1;o&=~(1<<r),n+=1;var a=32-at(t)+r;if(30<a){var i=r-r%5;a=(o&(1<<i)-1).toString(32),o>>=i,r-=i,vt=1<<32-at(t)+r|n<<r|o,bt=a+e}else vt=1<<a|n<<r|o,bt=e}function yl(e){e.return!==null&&(an(e,1),jp(e,1,0))}function vl(e){for(;e===ya;)ya=Nn[--Fn],Nn[Fn]=null,va=Nn[--Fn],Nn[Fn]=null;for(;e===yn;)yn=Qe[--Ke],Qe[Ke]=null,bt=Qe[--Ke],Qe[Ke]=null,vt=Qe[--Ke],Qe[Ke]=null}var Ue=null,Fe=null,te=!1,rt=null;function Ap(e,t){var n=Ye(5,null,null,0);n.elementType="DELETED",n.stateNode=t,n.return=e,t=e.deletions,t===null?(e.deletions=[n],e.flags|=16):t.push(n)}function nu(e,t){switch(e.tag){case 5:var n=e.type;return t=t.nodeType!==1||n.toLowerCase()!==t.nodeName.toLowerCase()?null:t,t!==null?(e.stateNode=t,Ue=e,Fe=Vt(t.firstChild),!0):!1;case 6:return t=e.pendingProps===""||t.nodeType!==3?null:t,t!==null?(e.stateNode=t,Ue=e,Fe=null,!0):!1;case 13:return t=t.nodeType!==8?null:t,t!==null?(n=yn!==null?{id:vt,overflow:bt}:null,e.memoizedState={dehydrated:t,treeContext:n,retryLane:1073741824},n=Ye(18,null,null,0),n.stateNode=t,n.return=e,e.child=n,Ue=e,Fe=null,!0):!1;default:return!1}}function hs(e){return(e.mode&1)!==0&&(e.flags&128)===0}function ys(e){if(te){var t=Fe;if(t){var n=t;if(!nu(e,t)){if(hs(e))throw Error(R(418));t=Vt(n.nextSibling);var o=Ue;t&&nu(e,t)?Ap(o,n):(e.flags=e.flags&-4097|2,te=!1,Ue=e)}}else{if(hs(e))throw Error(R(418));e.flags=e.flags&-4097|2,te=!1,Ue=e}}}function ou(e){for(e=e.return;e!==null&&e.tag!==5&&e.tag!==3&&e.tag!==13;)e=e.return;Ue=e}function zr(e){if(e!==Ue)return!1;if(!te)return ou(e),te=!0,!1;var t;if((t=e.tag!==3)&&!(t=e.tag!==5)&&(t=e.type,t=t!=="head"&&t!=="body"&&!ps(e.type,e.memoizedProps)),t&&(t=Fe)){if(hs(e))throw Mp(),Error(R(418));for(;t;)Ap(e,t),t=Vt(t.nextSibling)}if(ou(e),e.tag===13){if(e=e.memoizedState,e=e!==null?e.dehydrated:null,!e)throw Error(R(317));e:{for(e=e.nextSibling,t=0;e;){if(e.nodeType===8){var n=e.data;if(n==="/$"){if(t===0){Fe=Vt(e.nextSibling);break e}t--}else n!=="$"&&n!=="$!"&&n!=="$?"||t++}e=e.nextSibling}Fe=null}}else Fe=Ue?Vt(e.stateNode.nextSibling):null;return!0}function Mp(){for(var e=Fe;e;)e=Vt(e.nextSibling)}function no(){Fe=Ue=null,te=!1}function bl(e){rt===null?rt=[e]:rt.push(e)}var H0=kt.ReactCurrentBatchConfig;function So(e,t,n){if(e=n.ref,e!==null&&typeof e!="function"&&typeof e!="object"){if(n._owner){if(n=n._owner,n){if(n.tag!==1)throw Error(R(309));var o=n.stateNode}if(!o)throw Error(R(147,e));var r=o,a=""+e;return t!==null&&t.ref!==null&&typeof t.ref=="function"&&t.ref._stringRef===a?t.ref:(t=function(i){var s=r.refs;i===null?delete s[a]:s[a]=i},t._stringRef=a,t)}if(typeof e!="string")throw Error(R(284));if(!n._owner)throw Error(R(290,e))}return e}function Or(e,t){throw e=Object.prototype.toString.call(t),Error(R(31,e==="[object Object]"?"object with keys {"+Object.keys(t).join(", ")+"}":e))}function ru(e){var t=e._init;return t(e._payload)}function Bp(e){function t(f,m){if(e){var g=f.deletions;g===null?(f.deletions=[m],f.flags|=16):g.push(m)}}function n(f,m){if(!e)return null;for(;m!==null;)t(f,m),m=m.sibling;return null}function o(f,m){for(f=new Map;m!==null;)m.key!==null?f.set(m.key,m):f.set(m.index,m),m=m.sibling;return f}function r(f,m){return f=Qt(f,m),f.index=0,f.sibling=null,f}function a(f,m,g){return f.index=g,e?(g=f.alternate,g!==null?(g=g.index,g<m?(f.flags|=2,m):g):(f.flags|=2,m)):(f.flags|=1048576,m)}function i(f){return e&&f.alternate===null&&(f.flags|=2),f}function s(f,m,g,b){return m===null||m.tag!==6?(m=Ci(g,f.mode,b),m.return=f,m):(m=r(m,g),m.return=f,m)}function l(f,m,g,b){var x=g.type;return x===Dn?u(f,m,g.props.children,b,g.key):m!==null&&(m.elementType===x||typeof x=="object"&&x!==null&&x.$$typeof===zt&&ru(x)===m.type)?(b=r(m,g.props),b.ref=So(f,m,g),b.return=f,b):(b=oa(g.type,g.key,g.props,null,f.mode,b),b.ref=So(f,m,g),b.return=f,b)}function c(f,m,g,b){return m===null||m.tag!==4||m.stateNode.containerInfo!==g.containerInfo||m.stateNode.implementation!==g.implementation?(m=ki(g,f.mode,b),m.return=f,m):(m=r(m,g.children||[]),m.return=f,m)}function u(f,m,g,b,x){return m===null||m.tag!==7?(m=fn(g,f.mode,b,x),m.return=f,m):(m=r(m,g),m.return=f,m)}function d(f,m,g){if(typeof m=="string"&&m!==""||typeof m=="number")return m=Ci(""+m,f.mode,g),m.return=f,m;if(typeof m=="object"&&m!==null){switch(m.$$typeof){case Pr:return g=oa(m.type,m.key,m.props,null,f.mode,g),g.ref=So(f,null,m),g.return=f,g;case On:return m=ki(m,f.mode,g),m.return=f,m;case zt:var b=m._init;return d(f,b(m._payload),g)}if(_o(m)||bo(m))return m=fn(m,f.mode,g,null),m.return=f,m;Or(f,m)}return null}function p(f,m,g,b){var x=m!==null?m.key:null;if(typeof g=="string"&&g!==""||typeof g=="number")return x!==null?null:s(f,m,""+g,b);if(typeof g=="object"&&g!==null){switch(g.$$typeof){case Pr:return g.key===x?l(f,m,g,b):null;case On:return g.key===x?c(f,m,g,b):null;case zt:return x=g._init,p(f,m,x(g._payload),b)}if(_o(g)||bo(g))return x!==null?null:u(f,m,g,b,null);Or(f,g)}return null}function h(f,m,g,b,x){if(typeof b=="string"&&b!==""||typeof b=="number")return f=f.get(g)||null,s(m,f,""+b,x);if(typeof b=="object"&&b!==null){switch(b.$$typeof){case Pr:return f=f.get(b.key===null?g:b.key)||null,l(m,f,b,x);case On:return f=f.get(b.key===null?g:b.key)||null,c(m,f,b,x);case zt:var P=b._init;return h(f,m,g,P(b._payload),x)}if(_o(b)||bo(b))return f=f.get(g)||null,u(m,f,b,x,null);Or(m,b)}return null}function v(f,m,g,b){for(var x=null,P=null,C=m,k=m=0,I=null;C!==null&&k<g.length;k++){C.index>k?(I=C,C=null):I=C.sibling;var _=p(f,C,g[k],b);if(_===null){C===null&&(C=I);break}e&&C&&_.alternate===null&&t(f,C),m=a(_,m,k),P===null?x=_:P.sibling=_,P=_,C=I}if(k===g.length)return n(f,C),te&&an(f,k),x;if(C===null){for(;k<g.length;k++)C=d(f,g[k],b),C!==null&&(m=a(C,m,k),P===null?x=C:P.sibling=C,P=C);return te&&an(f,k),x}for(C=o(f,C);k<g.length;k++)I=h(C,f,k,g[k],b),I!==null&&(e&&I.alternate!==null&&C.delete(I.key===null?k:I.key),m=a(I,m,k),P===null?x=I:P.sibling=I,P=I);return e&&C.forEach(function(M){return t(f,M)}),te&&an(f,k),x}function w(f,m,g,b){var x=bo(g);if(typeof x!="function")throw Error(R(150));if(g=x.call(g),g==null)throw Error(R(151));for(var P=x=null,C=m,k=m=0,I=null,_=g.next();C!==null&&!_.done;k++,_=g.next()){C.index>k?(I=C,C=null):I=C.sibling;var M=p(f,C,_.value,b);if(M===null){C===null&&(C=I);break}e&&C&&M.alternate===null&&t(f,C),m=a(M,m,k),P===null?x=M:P.sibling=M,P=M,C=I}if(_.done)return n(f,C),te&&an(f,k),x;if(C===null){for(;!_.done;k++,_=g.next())_=d(f,_.value,b),_!==null&&(m=a(_,m,k),P===null?x=_:P.sibling=_,P=_);return te&&an(f,k),x}for(C=o(f,C);!_.done;k++,_=g.next())_=h(C,f,k,_.value,b),_!==null&&(e&&_.alternate!==null&&C.delete(_.key===null?k:_.key),m=a(_,m,k),P===null?x=_:P.sibling=_,P=_);return e&&C.forEach(function(F){return t(f,F)}),te&&an(f,k),x}function $(f,m,g,b){if(typeof g=="object"&&g!==null&&g.type===Dn&&g.key===null&&(g=g.props.children),typeof g=="object"&&g!==null){switch(g.$$typeof){case Pr:e:{for(var x=g.key,P=m;P!==null;){if(P.key===x){if(x=g.type,x===Dn){if(P.tag===7){n(f,P.sibling),m=r(P,g.props.children),m.return=f,f=m;break e}}else if(P.elementType===x||typeof x=="object"&&x!==null&&x.$$typeof===zt&&ru(x)===P.type){n(f,P.sibling),m=r(P,g.props),m.ref=So(f,P,g),m.return=f,f=m;break e}n(f,P);break}else t(f,P);P=P.sibling}g.type===Dn?(m=fn(g.props.children,f.mode,b,g.key),m.return=f,f=m):(b=oa(g.type,g.key,g.props,null,f.mode,b),b.ref=So(f,m,g),b.return=f,f=b)}return i(f);case On:e:{for(P=g.key;m!==null;){if(m.key===P)if(m.tag===4&&m.stateNode.containerInfo===g.containerInfo&&m.stateNode.implementation===g.implementation){n(f,m.sibling),m=r(m,g.children||[]),m.return=f,f=m;break e}else{n(f,m);break}else t(f,m);m=m.sibling}m=ki(g,f.mode,b),m.return=f,f=m}return i(f);case zt:return P=g._init,$(f,m,P(g._payload),b)}if(_o(g))return v(f,m,g,b);if(bo(g))return w(f,m,g,b);Or(f,g)}return typeof g=="string"&&g!==""||typeof g=="number"?(g=""+g,m!==null&&m.tag===6?(n(f,m.sibling),m=r(m,g),m.return=f,f=m):(n(f,m),m=Ci(g,f.mode,b),m.return=f,f=m),i(f)):n(f,m)}return $}var oo=Bp(!0),Np=Bp(!1),ba=Jt(null),wa=null,Un=null,wl=null;function xl(){wl=Un=wa=null}function Pl(e){var t=ba.current;ee(ba),e._currentValue=t}function vs(e,t,n){for(;e!==null;){var o=e.alternate;if((e.childLanes&t)!==t?(e.childLanes|=t,o!==null&&(o.childLanes|=t)):o!==null&&(o.childLanes&t)!==t&&(o.childLanes|=t),e===n)break;e=e.return}}function Yn(e,t){wa=e,wl=Un=null,e=e.dependencies,e!==null&&e.firstContext!==null&&(e.lanes&t&&(Te=!0),e.firstContext=null)}function Ze(e){var t=e._currentValue;if(wl!==e)if(e={context:e,memoizedValue:t,next:null},Un===null){if(wa===null)throw Error(R(308));Un=e,wa.dependencies={lanes:0,firstContext:e}}else Un=Un.next=e;return t}var dn=null;function $l(e){dn===null?dn=[e]:dn.push(e)}function Fp(e,t,n,o){var r=t.interleaved;return r===null?(n.next=n,$l(t)):(n.next=r.next,r.next=n),t.interleaved=n,St(e,o)}function St(e,t){e.lanes|=t;var n=e.alternate;for(n!==null&&(n.lanes|=t),n=e,e=e.return;e!==null;)e.childLanes|=t,n=e.alternate,n!==null&&(n.childLanes|=t),n=e,e=e.return;return n.tag===3?n.stateNode:null}var Ot=!1;function Sl(e){e.updateQueue={baseState:e.memoizedState,firstBaseUpdate:null,lastBaseUpdate:null,shared:{pending:null,interleaved:null,lanes:0},effects:null}}function Up(e,t){e=e.updateQueue,t.updateQueue===e&&(t.updateQueue={baseState:e.baseState,firstBaseUpdate:e.firstBaseUpdate,lastBaseUpdate:e.lastBaseUpdate,shared:e.shared,effects:e.effects})}function wt(e,t){return{eventTime:e,lane:t,tag:0,payload:null,callback:null,next:null}}function Ht(e,t,n){var o=e.updateQueue;if(o===null)return null;if(o=o.shared,q&2){var r=o.pending;return r===null?t.next=t:(t.next=r.next,r.next=t),o.pending=t,St(e,n)}return r=o.interleaved,r===null?(t.next=t,$l(o)):(t.next=r.next,r.next=t),o.interleaved=t,St(e,n)}function Xr(e,t,n){if(t=t.updateQueue,t!==null&&(t=t.shared,(n&4194240)!==0)){var o=t.lanes;o&=e.pendingLanes,n|=o,t.lanes=n,cl(e,n)}}function au(e,t){var n=e.updateQueue,o=e.alternate;if(o!==null&&(o=o.updateQueue,n===o)){var r=null,a=null;if(n=n.firstBaseUpdate,n!==null){do{var i={eventTime:n.eventTime,lane:n.lane,tag:n.tag,payload:n.payload,callback:n.callback,next:null};a===null?r=a=i:a=a.next=i,n=n.next}while(n!==null);a===null?r=a=t:a=a.next=t}else r=a=t;n={baseState:o.baseState,firstBaseUpdate:r,lastBaseUpdate:a,shared:o.shared,effects:o.effects},e.updateQueue=n;return}e=n.lastBaseUpdate,e===null?n.firstBaseUpdate=t:e.next=t,n.lastBaseUpdate=t}function xa(e,t,n,o){var r=e.updateQueue;Ot=!1;var a=r.firstBaseUpdate,i=r.lastBaseUpdate,s=r.shared.pending;if(s!==null){r.shared.pending=null;var l=s,c=l.next;l.next=null,i===null?a=c:i.next=c,i=l;var u=e.alternate;u!==null&&(u=u.updateQueue,s=u.lastBaseUpdate,s!==i&&(s===null?u.firstBaseUpdate=c:s.next=c,u.lastBaseUpdate=l))}if(a!==null){var d=r.baseState;i=0,u=c=l=null,s=a;do{var p=s.lane,h=s.eventTime;if((o&p)===p){u!==null&&(u=u.next={eventTime:h,lane:0,tag:s.tag,payload:s.payload,callback:s.callback,next:null});e:{var v=e,w=s;switch(p=t,h=n,w.tag){case 1:if(v=w.payload,typeof v=="function"){d=v.call(h,d,p);break e}d=v;break e;case 3:v.flags=v.flags&-65537|128;case 0:if(v=w.payload,p=typeof v=="function"?v.call(h,d,p):v,p==null)break e;d=re({},d,p);break e;case 2:Ot=!0}}s.callback!==null&&s.lane!==0&&(e.flags|=64,p=r.effects,p===null?r.effects=[s]:p.push(s))}else h={eventTime:h,lane:p,tag:s.tag,payload:s.payload,callback:s.callback,next:null},u===null?(c=u=h,l=d):u=u.next=h,i|=p;if(s=s.next,s===null){if(s=r.shared.pending,s===null)break;p=s,s=p.next,p.next=null,r.lastBaseUpdate=p,r.shared.pending=null}}while(!0);if(u===null&&(l=d),r.baseState=l,r.firstBaseUpdate=c,r.lastBaseUpdate=u,t=r.shared.interleaved,t!==null){r=t;do i|=r.lane,r=r.next;while(r!==t)}else a===null&&(r.shared.lanes=0);bn|=i,e.lanes=i,e.memoizedState=d}}function iu(e,t,n){if(e=t.effects,t.effects=null,e!==null)for(t=0;t<e.length;t++){var o=e[t],r=o.callback;if(r!==null){if(o.callback=null,o=n,typeof r!="function")throw Error(R(191,r));r.call(o)}}}var fr={},gt=Jt(fr),nr=Jt(fr),or=Jt(fr);function pn(e){if(e===fr)throw Error(R(174));return e}function Cl(e,t){switch(X(or,t),X(nr,e),X(gt,fr),e=t.nodeType,e){case 9:case 11:t=(t=t.documentElement)?t.namespaceURI:Zi(null,"");break;default:e=e===8?t.parentNode:t,t=e.namespaceURI||null,e=e.tagName,t=Zi(t,e)}ee(gt),X(gt,t)}function ro(){ee(gt),ee(nr),ee(or)}function Wp(e){pn(or.current);var t=pn(gt.current),n=Zi(t,e.type);t!==n&&(X(nr,e),X(gt,n))}function kl(e){nr.current===e&&(ee(gt),ee(nr))}var ne=Jt(0);function Pa(e){for(var t=e;t!==null;){if(t.tag===13){var n=t.memoizedState;if(n!==null&&(n=n.dehydrated,n===null||n.data==="$?"||n.data==="$!"))return t}else if(t.tag===19&&t.memoizedProps.revealOrder!==void 0){if(t.flags&128)return t}else if(t.child!==null){t.child.return=t,t=t.child;continue}if(t===e)break;for(;t.sibling===null;){if(t.return===null||t.return===e)return null;t=t.return}t.sibling.return=t.return,t=t.sibling}return null}var bi=[];function Ll(){for(var e=0;e<bi.length;e++)bi[e]._workInProgressVersionPrimary=null;bi.length=0}var Zr=kt.ReactCurrentDispatcher,wi=kt.ReactCurrentBatchConfig,vn=0,oe=null,ge=null,ye=null,$a=!1,Fo=!1,rr=0,G0=0;function $e(){throw Error(R(321))}function Il(e,t){if(t===null)return!1;for(var n=0;n<t.length&&n<e.length;n++)if(!st(e[n],t[n]))return!1;return!0}function _l(e,t,n,o,r,a){if(vn=a,oe=t,t.memoizedState=null,t.updateQueue=null,t.lanes=0,Zr.current=e===null||e.memoizedState===null?Y0:X0,e=n(o,r),Fo){a=0;do{if(Fo=!1,rr=0,25<=a)throw Error(R(301));a+=1,ye=ge=null,t.updateQueue=null,Zr.current=Z0,e=n(o,r)}while(Fo)}if(Zr.current=Sa,t=ge!==null&&ge.next!==null,vn=0,ye=ge=oe=null,$a=!1,t)throw Error(R(300));return e}function El(){var e=rr!==0;return rr=0,e}function dt(){var e={memoizedState:null,baseState:null,baseQueue:null,queue:null,next:null};return ye===null?oe.memoizedState=ye=e:ye=ye.next=e,ye}function Je(){if(ge===null){var e=oe.alternate;e=e!==null?e.memoizedState:null}else e=ge.next;var t=ye===null?oe.memoizedState:ye.next;if(t!==null)ye=t,ge=e;else{if(e===null)throw Error(R(310));ge=e,e={memoizedState:ge.memoizedState,baseState:ge.baseState,baseQueue:ge.baseQueue,queue:ge.queue,next:null},ye===null?oe.memoizedState=ye=e:ye=ye.next=e}return ye}function ar(e,t){return typeof t=="function"?t(e):t}function xi(e){var t=Je(),n=t.queue;if(n===null)throw Error(R(311));n.lastRenderedReducer=e;var o=ge,r=o.baseQueue,a=n.pending;if(a!==null){if(r!==null){var i=r.next;r.next=a.next,a.next=i}o.baseQueue=r=a,n.pending=null}if(r!==null){a=r.next,o=o.baseState;var s=i=null,l=null,c=a;do{var u=c.lane;if((vn&u)===u)l!==null&&(l=l.next={lane:0,action:c.action,hasEagerState:c.hasEagerState,eagerState:c.eagerState,next:null}),o=c.hasEagerState?c.eagerState:e(o,c.action);else{var d={lane:u,action:c.action,hasEagerState:c.hasEagerState,eagerState:c.eagerState,next:null};l===null?(s=l=d,i=o):l=l.next=d,oe.lanes|=u,bn|=u}c=c.next}while(c!==null&&c!==a);l===null?i=o:l.next=s,st(o,t.memoizedState)||(Te=!0),t.memoizedState=o,t.baseState=i,t.baseQueue=l,n.lastRenderedState=o}if(e=n.interleaved,e!==null){r=e;do a=r.lane,oe.lanes|=a,bn|=a,r=r.next;while(r!==e)}else r===null&&(n.lanes=0);return[t.memoizedState,n.dispatch]}function Pi(e){var t=Je(),n=t.queue;if(n===null)throw Error(R(311));n.lastRenderedReducer=e;var o=n.dispatch,r=n.pending,a=t.memoizedState;if(r!==null){n.pending=null;var i=r=r.next;do a=e(a,i.action),i=i.next;while(i!==r);st(a,t.memoizedState)||(Te=!0),t.memoizedState=a,t.baseQueue===null&&(t.baseState=a),n.lastRenderedState=a}return[a,o]}function Vp(){}function Hp(e,t){var n=oe,o=Je(),r=t(),a=!st(o.memoizedState,r);if(a&&(o.memoizedState=r,Te=!0),o=o.queue,Rl(Qp.bind(null,n,o,e),[e]),o.getSnapshot!==t||a||ye!==null&&ye.memoizedState.tag&1){if(n.flags|=2048,ir(9,qp.bind(null,n,o,r,t),void 0,null),ve===null)throw Error(R(349));vn&30||Gp(n,t,r)}return r}function Gp(e,t,n){e.flags|=16384,e={getSnapshot:t,value:n},t=oe.updateQueue,t===null?(t={lastEffect:null,stores:null},oe.updateQueue=t,t.stores=[e]):(n=t.stores,n===null?t.stores=[e]:n.push(e))}function qp(e,t,n,o){t.value=n,t.getSnapshot=o,Kp(t)&&Yp(e)}function Qp(e,t,n){return n(function(){Kp(t)&&Yp(e)})}function Kp(e){var t=e.getSnapshot;e=e.value;try{var n=t();return!st(e,n)}catch{return!0}}function Yp(e){var t=St(e,1);t!==null&&it(t,e,1,-1)}function su(e){var t=dt();return typeof e=="function"&&(e=e()),t.memoizedState=t.baseState=e,e={pending:null,interleaved:null,lanes:0,dispatch:null,lastRenderedReducer:ar,lastRenderedState:e},t.queue=e,e=e.dispatch=K0.bind(null,oe,e),[t.memoizedState,e]}function ir(e,t,n,o){return e={tag:e,create:t,destroy:n,deps:o,next:null},t=oe.updateQueue,t===null?(t={lastEffect:null,stores:null},oe.updateQueue=t,t.lastEffect=e.next=e):(n=t.lastEffect,n===null?t.lastEffect=e.next=e:(o=n.next,n.next=e,e.next=o,t.lastEffect=e)),e}function Xp(){return Je().memoizedState}function Jr(e,t,n,o){var r=dt();oe.flags|=e,r.memoizedState=ir(1|t,n,void 0,o===void 0?null:o)}function Wa(e,t,n,o){var r=Je();o=o===void 0?null:o;var a=void 0;if(ge!==null){var i=ge.memoizedState;if(a=i.destroy,o!==null&&Il(o,i.deps)){r.memoizedState=ir(t,n,a,o);return}}oe.flags|=e,r.memoizedState=ir(1|t,n,a,o)}function lu(e,t){return Jr(8390656,8,e,t)}function Rl(e,t){return Wa(2048,8,e,t)}function Zp(e,t){return Wa(4,2,e,t)}function Jp(e,t){return Wa(4,4,e,t)}function em(e,t){if(typeof t=="function")return e=e(),t(e),function(){t(null)};if(t!=null)return e=e(),t.current=e,function(){t.current=null}}function tm(e,t,n){return n=n!=null?n.concat([e]):null,Wa(4,4,em.bind(null,t,e),n)}function zl(){}function nm(e,t){var n=Je();t=t===void 0?null:t;var o=n.memoizedState;return o!==null&&t!==null&&Il(t,o[1])?o[0]:(n.memoizedState=[e,t],e)}function om(e,t){var n=Je();t=t===void 0?null:t;var o=n.memoizedState;return o!==null&&t!==null&&Il(t,o[1])?o[0]:(e=e(),n.memoizedState=[e,t],e)}function rm(e,t,n){return vn&21?(st(n,t)||(n=cp(),oe.lanes|=n,bn|=n,e.baseState=!0),t):(e.baseState&&(e.baseState=!1,Te=!0),e.memoizedState=n)}function q0(e,t){var n=Y;Y=n!==0&&4>n?n:4,e(!0);var o=wi.transition;wi.transition={};try{e(!1),t()}finally{Y=n,wi.transition=o}}function am(){return Je().memoizedState}function Q0(e,t,n){var o=qt(e);if(n={lane:o,action:n,hasEagerState:!1,eagerState:null,next:null},im(e))sm(t,n);else if(n=Fp(e,t,n,o),n!==null){var r=Ee();it(n,e,o,r),lm(n,t,o)}}function K0(e,t,n){var o=qt(e),r={lane:o,action:n,hasEagerState:!1,eagerState:null,next:null};if(im(e))sm(t,r);else{var a=e.alternate;if(e.lanes===0&&(a===null||a.lanes===0)&&(a=t.lastRenderedReducer,a!==null))try{var i=t.lastRenderedState,s=a(i,n);if(r.hasEagerState=!0,r.eagerState=s,st(s,i)){var l=t.interleaved;l===null?(r.next=r,$l(t)):(r.next=l.next,l.next=r),t.interleaved=r;return}}catch{}finally{}n=Fp(e,t,r,o),n!==null&&(r=Ee(),it(n,e,o,r),lm(n,t,o))}}function im(e){var t=e.alternate;return e===oe||t!==null&&t===oe}function sm(e,t){Fo=$a=!0;var n=e.pending;n===null?t.next=t:(t.next=n.next,n.next=t),e.pending=t}function lm(e,t,n){if(n&4194240){var o=t.lanes;o&=e.pendingLanes,n|=o,t.lanes=n,cl(e,n)}}var Sa={readContext:Ze,useCallback:$e,useContext:$e,useEffect:$e,useImperativeHandle:$e,useInsertionEffect:$e,useLayoutEffect:$e,useMemo:$e,useReducer:$e,useRef:$e,useState:$e,useDebugValue:$e,useDeferredValue:$e,useTransition:$e,useMutableSource:$e,useSyncExternalStore:$e,useId:$e,unstable_isNewReconciler:!1},Y0={readContext:Ze,useCallback:function(e,t){return dt().memoizedState=[e,t===void 0?null:t],e},useContext:Ze,useEffect:lu,useImperativeHandle:function(e,t,n){return n=n!=null?n.concat([e]):null,Jr(4194308,4,em.bind(null,t,e),n)},useLayoutEffect:function(e,t){return Jr(4194308,4,e,t)},useInsertionEffect:function(e,t){return Jr(4,2,e,t)},useMemo:function(e,t){var n=dt();return t=t===void 0?null:t,e=e(),n.memoizedState=[e,t],e},useReducer:function(e,t,n){var o=dt();return t=n!==void 0?n(t):t,o.memoizedState=o.baseState=t,e={pending:null,interleaved:null,lanes:0,dispatch:null,lastRenderedReducer:e,lastRenderedState:t},o.queue=e,e=e.dispatch=Q0.bind(null,oe,e),[o.memoizedState,e]},useRef:function(e){var t=dt();return e={current:e},t.memoizedState=e},useState:su,useDebugValue:zl,useDeferredValue:function(e){return dt().memoizedState=e},useTransition:function(){var e=su(!1),t=e[0];return e=q0.bind(null,e[1]),dt().memoizedState=e,[t,e]},useMutableSource:function(){},useSyncExternalStore:function(e,t,n){var o=oe,r=dt();if(te){if(n===void 0)throw Error(R(407));n=n()}else{if(n=t(),ve===null)throw Error(R(349));vn&30||Gp(o,t,n)}r.memoizedState=n;var a={value:n,getSnapshot:t};return r.queue=a,lu(Qp.bind(null,o,a,e),[e]),o.flags|=2048,ir(9,qp.bind(null,o,a,n,t),void 0,null),n},useId:function(){var e=dt(),t=ve.identifierPrefix;if(te){var n=bt,o=vt;n=(o&~(1<<32-at(o)-1)).toString(32)+n,t=":"+t+"R"+n,n=rr++,0<n&&(t+="H"+n.toString(32)),t+=":"}else n=G0++,t=":"+t+"r"+n.toString(32)+":";return e.memoizedState=t},unstable_isNewReconciler:!1},X0={readContext:Ze,useCallback:nm,useContext:Ze,useEffect:Rl,useImperativeHandle:tm,useInsertionEffect:Zp,useLayoutEffect:Jp,useMemo:om,useReducer:xi,useRef:Xp,useState:function(){return xi(ar)},useDebugValue:zl,useDeferredValue:function(e){var t=Je();return rm(t,ge.memoizedState,e)},useTransition:function(){var e=xi(ar)[0],t=Je().memoizedState;return[e,t]},useMutableSource:Vp,useSyncExternalStore:Hp,useId:am,unstable_isNewReconciler:!1},Z0={readContext:Ze,useCallback:nm,useContext:Ze,useEffect:Rl,useImperativeHandle:tm,useInsertionEffect:Zp,useLayoutEffect:Jp,useMemo:om,useReducer:Pi,useRef:Xp,useState:function(){return Pi(ar)},useDebugValue:zl,useDeferredValue:function(e){var t=Je();return ge===null?t.memoizedState=e:rm(t,ge.memoizedState,e)},useTransition:function(){var e=Pi(ar)[0],t=Je().memoizedState;return[e,t]},useMutableSource:Vp,useSyncExternalStore:Hp,useId:am,unstable_isNewReconciler:!1};function nt(e,t){if(e&&e.defaultProps){t=re({},t),e=e.defaultProps;for(var n in e)t[n]===void 0&&(t[n]=e[n]);return t}return t}function bs(e,t,n,o){t=e.memoizedState,n=n(o,t),n=n==null?t:re({},t,n),e.memoizedState=n,e.lanes===0&&(e.updateQueue.baseState=n)}var Va={isMounted:function(e){return(e=e._reactInternals)?$n(e)===e:!1},enqueueSetState:function(e,t,n){e=e._reactInternals;var o=Ee(),r=qt(e),a=wt(o,r);a.payload=t,n!=null&&(a.callback=n),t=Ht(e,a,r),t!==null&&(it(t,e,r,o),Xr(t,e,r))},enqueueReplaceState:function(e,t,n){e=e._reactInternals;var o=Ee(),r=qt(e),a=wt(o,r);a.tag=1,a.payload=t,n!=null&&(a.callback=n),t=Ht(e,a,r),t!==null&&(it(t,e,r,o),Xr(t,e,r))},enqueueForceUpdate:function(e,t){e=e._reactInternals;var n=Ee(),o=qt(e),r=wt(n,o);r.tag=2,t!=null&&(r.callback=t),t=Ht(e,r,o),t!==null&&(it(t,e,o,n),Xr(t,e,o))}};function cu(e,t,n,o,r,a,i){return e=e.stateNode,typeof e.shouldComponentUpdate=="function"?e.shouldComponentUpdate(o,a,i):t.prototype&&t.prototype.isPureReactComponent?!Zo(n,o)||!Zo(r,a):!0}function cm(e,t,n){var o=!1,r=Xt,a=t.contextType;return typeof a=="object"&&a!==null?a=Ze(a):(r=Ae(t)?hn:ke.current,o=t.contextTypes,a=(o=o!=null)?to(e,r):Xt),t=new t(n,a),e.memoizedState=t.state!==null&&t.state!==void 0?t.state:null,t.updater=Va,e.stateNode=t,t._reactInternals=e,o&&(e=e.stateNode,e.__reactInternalMemoizedUnmaskedChildContext=r,e.__reactInternalMemoizedMaskedChildContext=a),t}function uu(e,t,n,o){e=t.state,typeof t.componentWillReceiveProps=="function"&&t.componentWillReceiveProps(n,o),typeof t.UNSAFE_componentWillReceiveProps=="function"&&t.UNSAFE_componentWillReceiveProps(n,o),t.state!==e&&Va.enqueueReplaceState(t,t.state,null)}function ws(e,t,n,o){var r=e.stateNode;r.props=n,r.state=e.memoizedState,r.refs={},Sl(e);var a=t.contextType;typeof a=="object"&&a!==null?r.context=Ze(a):(a=Ae(t)?hn:ke.current,r.context=to(e,a)),r.state=e.memoizedState,a=t.getDerivedStateFromProps,typeof a=="function"&&(bs(e,t,a,n),r.state=e.memoizedState),typeof t.getDerivedStateFromProps=="function"||typeof r.getSnapshotBeforeUpdate=="function"||typeof r.UNSAFE_componentWillMount!="function"&&typeof r.componentWillMount!="function"||(t=r.state,typeof r.componentWillMount=="function"&&r.componentWillMount(),typeof r.UNSAFE_componentWillMount=="function"&&r.UNSAFE_componentWillMount(),t!==r.state&&Va.enqueueReplaceState(r,r.state,null),xa(e,n,r,o),r.state=e.memoizedState),typeof r.componentDidMount=="function"&&(e.flags|=4194308)}function ao(e,t){try{var n="",o=t;do n+=kf(o),o=o.return;while(o);var r=n}catch(a){r=`
Error generating stack: `+a.message+`
`+a.stack}return{value:e,source:t,stack:r,digest:null}}function $i(e,t,n){return{value:e,source:null,stack:n??null,digest:t??null}}function xs(e,t){try{console.error(t.value)}catch(n){setTimeout(function(){throw n})}}var J0=typeof WeakMap=="function"?WeakMap:Map;function um(e,t,n){n=wt(-1,n),n.tag=3,n.payload={element:null};var o=t.value;return n.callback=function(){ka||(ka=!0,Rs=o),xs(e,t)},n}function dm(e,t,n){n=wt(-1,n),n.tag=3;var o=e.type.getDerivedStateFromError;if(typeof o=="function"){var r=t.value;n.payload=function(){return o(r)},n.callback=function(){xs(e,t)}}var a=e.stateNode;return a!==null&&typeof a.componentDidCatch=="function"&&(n.callback=function(){xs(e,t),typeof o!="function"&&(Gt===null?Gt=new Set([this]):Gt.add(this));var i=t.stack;this.componentDidCatch(t.value,{componentStack:i!==null?i:""})}),n}function du(e,t,n){var o=e.pingCache;if(o===null){o=e.pingCache=new J0;var r=new Set;o.set(t,r)}else r=o.get(t),r===void 0&&(r=new Set,o.set(t,r));r.has(n)||(r.add(n),e=mh.bind(null,e,t,n),t.then(e,e))}function pu(e){do{var t;if((t=e.tag===13)&&(t=e.memoizedState,t=t!==null?t.dehydrated!==null:!0),t)return e;e=e.return}while(e!==null);return null}function mu(e,t,n,o,r){return e.mode&1?(e.flags|=65536,e.lanes=r,e):(e===t?e.flags|=65536:(e.flags|=128,n.flags|=131072,n.flags&=-52805,n.tag===1&&(n.alternate===null?n.tag=17:(t=wt(-1,1),t.tag=2,Ht(n,t,1))),n.lanes|=1),e)}var eh=kt.ReactCurrentOwner,Te=!1;function _e(e,t,n,o){t.child=e===null?Np(t,null,n,o):oo(t,e.child,n,o)}function gu(e,t,n,o,r){n=n.render;var a=t.ref;return Yn(t,r),o=_l(e,t,n,o,a,r),n=El(),e!==null&&!Te?(t.updateQueue=e.updateQueue,t.flags&=-2053,e.lanes&=~r,Ct(e,t,r)):(te&&n&&yl(t),t.flags|=1,_e(e,t,o,r),t.child)}function fu(e,t,n,o,r){if(e===null){var a=n.type;return typeof a=="function"&&!Nl(a)&&a.defaultProps===void 0&&n.compare===null&&n.defaultProps===void 0?(t.tag=15,t.type=a,pm(e,t,a,o,r)):(e=oa(n.type,null,o,t,t.mode,r),e.ref=t.ref,e.return=t,t.child=e)}if(a=e.child,!(e.lanes&r)){var i=a.memoizedProps;if(n=n.compare,n=n!==null?n:Zo,n(i,o)&&e.ref===t.ref)return Ct(e,t,r)}return t.flags|=1,e=Qt(a,o),e.ref=t.ref,e.return=t,t.child=e}function pm(e,t,n,o,r){if(e!==null){var a=e.memoizedProps;if(Zo(a,o)&&e.ref===t.ref)if(Te=!1,t.pendingProps=o=a,(e.lanes&r)!==0)e.flags&131072&&(Te=!0);else return t.lanes=e.lanes,Ct(e,t,r)}return Ps(e,t,n,o,r)}function mm(e,t,n){var o=t.pendingProps,r=o.children,a=e!==null?e.memoizedState:null;if(o.mode==="hidden")if(!(t.mode&1))t.memoizedState={baseLanes:0,cachePool:null,transitions:null},X(Vn,Ne),Ne|=n;else{if(!(n&1073741824))return e=a!==null?a.baseLanes|n:n,t.lanes=t.childLanes=1073741824,t.memoizedState={baseLanes:e,cachePool:null,transitions:null},t.updateQueue=null,X(Vn,Ne),Ne|=e,null;t.memoizedState={baseLanes:0,cachePool:null,transitions:null},o=a!==null?a.baseLanes:n,X(Vn,Ne),Ne|=o}else a!==null?(o=a.baseLanes|n,t.memoizedState=null):o=n,X(Vn,Ne),Ne|=o;return _e(e,t,r,n),t.child}function gm(e,t){var n=t.ref;(e===null&&n!==null||e!==null&&e.ref!==n)&&(t.flags|=512,t.flags|=2097152)}function Ps(e,t,n,o,r){var a=Ae(n)?hn:ke.current;return a=to(t,a),Yn(t,r),n=_l(e,t,n,o,a,r),o=El(),e!==null&&!Te?(t.updateQueue=e.updateQueue,t.flags&=-2053,e.lanes&=~r,Ct(e,t,r)):(te&&o&&yl(t),t.flags|=1,_e(e,t,n,r),t.child)}function hu(e,t,n,o,r){if(Ae(n)){var a=!0;ha(t)}else a=!1;if(Yn(t,r),t.stateNode===null)ea(e,t),cm(t,n,o),ws(t,n,o,r),o=!0;else if(e===null){var i=t.stateNode,s=t.memoizedProps;i.props=s;var l=i.context,c=n.contextType;typeof c=="object"&&c!==null?c=Ze(c):(c=Ae(n)?hn:ke.current,c=to(t,c));var u=n.getDerivedStateFromProps,d=typeof u=="function"||typeof i.getSnapshotBeforeUpdate=="function";d||typeof i.UNSAFE_componentWillReceiveProps!="function"&&typeof i.componentWillReceiveProps!="function"||(s!==o||l!==c)&&uu(t,i,o,c),Ot=!1;var p=t.memoizedState;i.state=p,xa(t,o,i,r),l=t.memoizedState,s!==o||p!==l||je.current||Ot?(typeof u=="function"&&(bs(t,n,u,o),l=t.memoizedState),(s=Ot||cu(t,n,s,o,p,l,c))?(d||typeof i.UNSAFE_componentWillMount!="function"&&typeof i.componentWillMount!="function"||(typeof i.componentWillMount=="function"&&i.componentWillMount(),typeof i.UNSAFE_componentWillMount=="function"&&i.UNSAFE_componentWillMount()),typeof i.componentDidMount=="function"&&(t.flags|=4194308)):(typeof i.componentDidMount=="function"&&(t.flags|=4194308),t.memoizedProps=o,t.memoizedState=l),i.props=o,i.state=l,i.context=c,o=s):(typeof i.componentDidMount=="function"&&(t.flags|=4194308),o=!1)}else{i=t.stateNode,Up(e,t),s=t.memoizedProps,c=t.type===t.elementType?s:nt(t.type,s),i.props=c,d=t.pendingProps,p=i.context,l=n.contextType,typeof l=="object"&&l!==null?l=Ze(l):(l=Ae(n)?hn:ke.current,l=to(t,l));var h=n.getDerivedStateFromProps;(u=typeof h=="function"||typeof i.getSnapshotBeforeUpdate=="function")||typeof i.UNSAFE_componentWillReceiveProps!="function"&&typeof i.componentWillReceiveProps!="function"||(s!==d||p!==l)&&uu(t,i,o,l),Ot=!1,p=t.memoizedState,i.state=p,xa(t,o,i,r);var v=t.memoizedState;s!==d||p!==v||je.current||Ot?(typeof h=="function"&&(bs(t,n,h,o),v=t.memoizedState),(c=Ot||cu(t,n,c,o,p,v,l)||!1)?(u||typeof i.UNSAFE_componentWillUpdate!="function"&&typeof i.componentWillUpdate!="function"||(typeof i.componentWillUpdate=="function"&&i.componentWillUpdate(o,v,l),typeof i.UNSAFE_componentWillUpdate=="function"&&i.UNSAFE_componentWillUpdate(o,v,l)),typeof i.componentDidUpdate=="function"&&(t.flags|=4),typeof i.getSnapshotBeforeUpdate=="function"&&(t.flags|=1024)):(typeof i.componentDidUpdate!="function"||s===e.memoizedProps&&p===e.memoizedState||(t.flags|=4),typeof i.getSnapshotBeforeUpdate!="function"||s===e.memoizedProps&&p===e.memoizedState||(t.flags|=1024),t.memoizedProps=o,t.memoizedState=v),i.props=o,i.state=v,i.context=l,o=c):(typeof i.componentDidUpdate!="function"||s===e.memoizedProps&&p===e.memoizedState||(t.flags|=4),typeof i.getSnapshotBeforeUpdate!="function"||s===e.memoizedProps&&p===e.memoizedState||(t.flags|=1024),o=!1)}return $s(e,t,n,o,a,r)}function $s(e,t,n,o,r,a){gm(e,t);var i=(t.flags&128)!==0;if(!o&&!i)return r&&tu(t,n,!1),Ct(e,t,a);o=t.stateNode,eh.current=t;var s=i&&typeof n.getDerivedStateFromError!="function"?null:o.render();return t.flags|=1,e!==null&&i?(t.child=oo(t,e.child,null,a),t.child=oo(t,null,s,a)):_e(e,t,s,a),t.memoizedState=o.state,r&&tu(t,n,!0),t.child}function fm(e){var t=e.stateNode;t.pendingContext?eu(e,t.pendingContext,t.pendingContext!==t.context):t.context&&eu(e,t.context,!1),Cl(e,t.containerInfo)}function yu(e,t,n,o,r){return no(),bl(r),t.flags|=256,_e(e,t,n,o),t.child}var Ss={dehydrated:null,treeContext:null,retryLane:0};function Cs(e){return{baseLanes:e,cachePool:null,transitions:null}}function hm(e,t,n){var o=t.pendingProps,r=ne.current,a=!1,i=(t.flags&128)!==0,s;if((s=i)||(s=e!==null&&e.memoizedState===null?!1:(r&2)!==0),s?(a=!0,t.flags&=-129):(e===null||e.memoizedState!==null)&&(r|=1),X(ne,r&1),e===null)return ys(t),e=t.memoizedState,e!==null&&(e=e.dehydrated,e!==null)?(t.mode&1?e.data==="$!"?t.lanes=8:t.lanes=1073741824:t.lanes=1,null):(i=o.children,e=o.fallback,a?(o=t.mode,a=t.child,i={mode:"hidden",children:i},!(o&1)&&a!==null?(a.childLanes=0,a.pendingProps=i):a=qa(i,o,0,null),e=fn(e,o,n,null),a.return=t,e.return=t,a.sibling=e,t.child=a,t.child.memoizedState=Cs(n),t.memoizedState=Ss,e):Ol(t,i));if(r=e.memoizedState,r!==null&&(s=r.dehydrated,s!==null))return th(e,t,i,o,s,r,n);if(a){a=o.fallback,i=t.mode,r=e.child,s=r.sibling;var l={mode:"hidden",children:o.children};return!(i&1)&&t.child!==r?(o=t.child,o.childLanes=0,o.pendingProps=l,t.deletions=null):(o=Qt(r,l),o.subtreeFlags=r.subtreeFlags&14680064),s!==null?a=Qt(s,a):(a=fn(a,i,n,null),a.flags|=2),a.return=t,o.return=t,o.sibling=a,t.child=o,o=a,a=t.child,i=e.child.memoizedState,i=i===null?Cs(n):{baseLanes:i.baseLanes|n,cachePool:null,transitions:i.transitions},a.memoizedState=i,a.childLanes=e.childLanes&~n,t.memoizedState=Ss,o}return a=e.child,e=a.sibling,o=Qt(a,{mode:"visible",children:o.children}),!(t.mode&1)&&(o.lanes=n),o.return=t,o.sibling=null,e!==null&&(n=t.deletions,n===null?(t.deletions=[e],t.flags|=16):n.push(e)),t.child=o,t.memoizedState=null,o}function Ol(e,t){return t=qa({mode:"visible",children:t},e.mode,0,null),t.return=e,e.child=t}function Dr(e,t,n,o){return o!==null&&bl(o),oo(t,e.child,null,n),e=Ol(t,t.pendingProps.children),e.flags|=2,t.memoizedState=null,e}function th(e,t,n,o,r,a,i){if(n)return t.flags&256?(t.flags&=-257,o=$i(Error(R(422))),Dr(e,t,i,o)):t.memoizedState!==null?(t.child=e.child,t.flags|=128,null):(a=o.fallback,r=t.mode,o=qa({mode:"visible",children:o.children},r,0,null),a=fn(a,r,i,null),a.flags|=2,o.return=t,a.return=t,o.sibling=a,t.child=o,t.mode&1&&oo(t,e.child,null,i),t.child.memoizedState=Cs(i),t.memoizedState=Ss,a);if(!(t.mode&1))return Dr(e,t,i,null);if(r.data==="$!"){if(o=r.nextSibling&&r.nextSibling.dataset,o)var s=o.dgst;return o=s,a=Error(R(419)),o=$i(a,o,void 0),Dr(e,t,i,o)}if(s=(i&e.childLanes)!==0,Te||s){if(o=ve,o!==null){switch(i&-i){case 4:r=2;break;case 16:r=8;break;case 64:case 128:case 256:case 512:case 1024:case 2048:case 4096:case 8192:case 16384:case 32768:case 65536:case 131072:case 262144:case 524288:case 1048576:case 2097152:case 4194304:case 8388608:case 16777216:case 33554432:case 67108864:r=32;break;case 536870912:r=268435456;break;default:r=0}r=r&(o.suspendedLanes|i)?0:r,r!==0&&r!==a.retryLane&&(a.retryLane=r,St(e,r),it(o,e,r,-1))}return Bl(),o=$i(Error(R(421))),Dr(e,t,i,o)}return r.data==="$?"?(t.flags|=128,t.child=e.child,t=gh.bind(null,e),r._reactRetry=t,null):(e=a.treeContext,Fe=Vt(r.nextSibling),Ue=t,te=!0,rt=null,e!==null&&(Qe[Ke++]=vt,Qe[Ke++]=bt,Qe[Ke++]=yn,vt=e.id,bt=e.overflow,yn=t),t=Ol(t,o.children),t.flags|=4096,t)}function vu(e,t,n){e.lanes|=t;var o=e.alternate;o!==null&&(o.lanes|=t),vs(e.return,t,n)}function Si(e,t,n,o,r){var a=e.memoizedState;a===null?e.memoizedState={isBackwards:t,rendering:null,renderingStartTime:0,last:o,tail:n,tailMode:r}:(a.isBackwards=t,a.rendering=null,a.renderingStartTime=0,a.last=o,a.tail=n,a.tailMode=r)}function ym(e,t,n){var o=t.pendingProps,r=o.revealOrder,a=o.tail;if(_e(e,t,o.children,n),o=ne.current,o&2)o=o&1|2,t.flags|=128;else{if(e!==null&&e.flags&128)e:for(e=t.child;e!==null;){if(e.tag===13)e.memoizedState!==null&&vu(e,n,t);else if(e.tag===19)vu(e,n,t);else if(e.child!==null){e.child.return=e,e=e.child;continue}if(e===t)break e;for(;e.sibling===null;){if(e.return===null||e.return===t)break e;e=e.return}e.sibling.return=e.return,e=e.sibling}o&=1}if(X(ne,o),!(t.mode&1))t.memoizedState=null;else switch(r){case"forwards":for(n=t.child,r=null;n!==null;)e=n.alternate,e!==null&&Pa(e)===null&&(r=n),n=n.sibling;n=r,n===null?(r=t.child,t.child=null):(r=n.sibling,n.sibling=null),Si(t,!1,r,n,a);break;case"backwards":for(n=null,r=t.child,t.child=null;r!==null;){if(e=r.alternate,e!==null&&Pa(e)===null){t.child=r;break}e=r.sibling,r.sibling=n,n=r,r=e}Si(t,!0,n,null,a);break;case"together":Si(t,!1,null,null,void 0);break;default:t.memoizedState=null}return t.child}function ea(e,t){!(t.mode&1)&&e!==null&&(e.alternate=null,t.alternate=null,t.flags|=2)}function Ct(e,t,n){if(e!==null&&(t.dependencies=e.dependencies),bn|=t.lanes,!(n&t.childLanes))return null;if(e!==null&&t.child!==e.child)throw Error(R(153));if(t.child!==null){for(e=t.child,n=Qt(e,e.pendingProps),t.child=n,n.return=t;e.sibling!==null;)e=e.sibling,n=n.sibling=Qt(e,e.pendingProps),n.return=t;n.sibling=null}return t.child}function nh(e,t,n){switch(t.tag){case 3:fm(t),no();break;case 5:Wp(t);break;case 1:Ae(t.type)&&ha(t);break;case 4:Cl(t,t.stateNode.containerInfo);break;case 10:var o=t.type._context,r=t.memoizedProps.value;X(ba,o._currentValue),o._currentValue=r;break;case 13:if(o=t.memoizedState,o!==null)return o.dehydrated!==null?(X(ne,ne.current&1),t.flags|=128,null):n&t.child.childLanes?hm(e,t,n):(X(ne,ne.current&1),e=Ct(e,t,n),e!==null?e.sibling:null);X(ne,ne.current&1);break;case 19:if(o=(n&t.childLanes)!==0,e.flags&128){if(o)return ym(e,t,n);t.flags|=128}if(r=t.memoizedState,r!==null&&(r.rendering=null,r.tail=null,r.lastEffect=null),X(ne,ne.current),o)break;return null;case 22:case 23:return t.lanes=0,mm(e,t,n)}return Ct(e,t,n)}var vm,ks,bm,wm;vm=function(e,t){for(var n=t.child;n!==null;){if(n.tag===5||n.tag===6)e.appendChild(n.stateNode);else if(n.tag!==4&&n.child!==null){n.child.return=n,n=n.child;continue}if(n===t)break;for(;n.sibling===null;){if(n.return===null||n.return===t)return;n=n.return}n.sibling.return=n.return,n=n.sibling}};ks=function(){};bm=function(e,t,n,o){var r=e.memoizedProps;if(r!==o){e=t.stateNode,pn(gt.current);var a=null;switch(n){case"input":r=Qi(e,r),o=Qi(e,o),a=[];break;case"select":r=re({},r,{value:void 0}),o=re({},o,{value:void 0}),a=[];break;case"textarea":r=Xi(e,r),o=Xi(e,o),a=[];break;default:typeof r.onClick!="function"&&typeof o.onClick=="function"&&(e.onclick=ga)}Ji(n,o);var i;n=null;for(c in r)if(!o.hasOwnProperty(c)&&r.hasOwnProperty(c)&&r[c]!=null)if(c==="style"){var s=r[c];for(i in s)s.hasOwnProperty(i)&&(n||(n={}),n[i]="")}else c!=="dangerouslySetInnerHTML"&&c!=="children"&&c!=="suppressContentEditableWarning"&&c!=="suppressHydrationWarning"&&c!=="autoFocus"&&(Ho.hasOwnProperty(c)?a||(a=[]):(a=a||[]).push(c,null));for(c in o){var l=o[c];if(s=r!=null?r[c]:void 0,o.hasOwnProperty(c)&&l!==s&&(l!=null||s!=null))if(c==="style")if(s){for(i in s)!s.hasOwnProperty(i)||l&&l.hasOwnProperty(i)||(n||(n={}),n[i]="");for(i in l)l.hasOwnProperty(i)&&s[i]!==l[i]&&(n||(n={}),n[i]=l[i])}else n||(a||(a=[]),a.push(c,n)),n=l;else c==="dangerouslySetInnerHTML"?(l=l?l.__html:void 0,s=s?s.__html:void 0,l!=null&&s!==l&&(a=a||[]).push(c,l)):c==="children"?typeof l!="string"&&typeof l!="number"||(a=a||[]).push(c,""+l):c!=="suppressContentEditableWarning"&&c!=="suppressHydrationWarning"&&(Ho.hasOwnProperty(c)?(l!=null&&c==="onScroll"&&J("scroll",e),a||s===l||(a=[])):(a=a||[]).push(c,l))}n&&(a=a||[]).push("style",n);var c=a;(t.updateQueue=c)&&(t.flags|=4)}};wm=function(e,t,n,o){n!==o&&(t.flags|=4)};function Co(e,t){if(!te)switch(e.tailMode){case"hidden":t=e.tail;for(var n=null;t!==null;)t.alternate!==null&&(n=t),t=t.sibling;n===null?e.tail=null:n.sibling=null;break;case"collapsed":n=e.tail;for(var o=null;n!==null;)n.alternate!==null&&(o=n),n=n.sibling;o===null?t||e.tail===null?e.tail=null:e.tail.sibling=null:o.sibling=null}}function Se(e){var t=e.alternate!==null&&e.alternate.child===e.child,n=0,o=0;if(t)for(var r=e.child;r!==null;)n|=r.lanes|r.childLanes,o|=r.subtreeFlags&14680064,o|=r.flags&14680064,r.return=e,r=r.sibling;else for(r=e.child;r!==null;)n|=r.lanes|r.childLanes,o|=r.subtreeFlags,o|=r.flags,r.return=e,r=r.sibling;return e.subtreeFlags|=o,e.childLanes=n,t}function oh(e,t,n){var o=t.pendingProps;switch(vl(t),t.tag){case 2:case 16:case 15:case 0:case 11:case 7:case 8:case 12:case 9:case 14:return Se(t),null;case 1:return Ae(t.type)&&fa(),Se(t),null;case 3:return o=t.stateNode,ro(),ee(je),ee(ke),Ll(),o.pendingContext&&(o.context=o.pendingContext,o.pendingContext=null),(e===null||e.child===null)&&(zr(t)?t.flags|=4:e===null||e.memoizedState.isDehydrated&&!(t.flags&256)||(t.flags|=1024,rt!==null&&(Ds(rt),rt=null))),ks(e,t),Se(t),null;case 5:kl(t);var r=pn(or.current);if(n=t.type,e!==null&&t.stateNode!=null)bm(e,t,n,o,r),e.ref!==t.ref&&(t.flags|=512,t.flags|=2097152);else{if(!o){if(t.stateNode===null)throw Error(R(166));return Se(t),null}if(e=pn(gt.current),zr(t)){o=t.stateNode,n=t.type;var a=t.memoizedProps;switch(o[pt]=t,o[tr]=a,e=(t.mode&1)!==0,n){case"dialog":J("cancel",o),J("close",o);break;case"iframe":case"object":case"embed":J("load",o);break;case"video":case"audio":for(r=0;r<Ro.length;r++)J(Ro[r],o);break;case"source":J("error",o);break;case"img":case"image":case"link":J("error",o),J("load",o);break;case"details":J("toggle",o);break;case"input":Lc(o,a),J("invalid",o);break;case"select":o._wrapperState={wasMultiple:!!a.multiple},J("invalid",o);break;case"textarea":_c(o,a),J("invalid",o)}Ji(n,a),r=null;for(var i in a)if(a.hasOwnProperty(i)){var s=a[i];i==="children"?typeof s=="string"?o.textContent!==s&&(a.suppressHydrationWarning!==!0&&Rr(o.textContent,s,e),r=["children",s]):typeof s=="number"&&o.textContent!==""+s&&(a.suppressHydrationWarning!==!0&&Rr(o.textContent,s,e),r=["children",""+s]):Ho.hasOwnProperty(i)&&s!=null&&i==="onScroll"&&J("scroll",o)}switch(n){case"input":$r(o),Ic(o,a,!0);break;case"textarea":$r(o),Ec(o);break;case"select":case"option":break;default:typeof a.onClick=="function"&&(o.onclick=ga)}o=r,t.updateQueue=o,o!==null&&(t.flags|=4)}else{i=r.nodeType===9?r:r.ownerDocument,e==="http://www.w3.org/1999/xhtml"&&(e=Qd(n)),e==="http://www.w3.org/1999/xhtml"?n==="script"?(e=i.createElement("div"),e.innerHTML="<script><\/script>",e=e.removeChild(e.firstChild)):typeof o.is=="string"?e=i.createElement(n,{is:o.is}):(e=i.createElement(n),n==="select"&&(i=e,o.multiple?i.multiple=!0:o.size&&(i.size=o.size))):e=i.createElementNS(e,n),e[pt]=t,e[tr]=o,vm(e,t,!1,!1),t.stateNode=e;e:{switch(i=es(n,o),n){case"dialog":J("cancel",e),J("close",e),r=o;break;case"iframe":case"object":case"embed":J("load",e),r=o;break;case"video":case"audio":for(r=0;r<Ro.length;r++)J(Ro[r],e);r=o;break;case"source":J("error",e),r=o;break;case"img":case"image":case"link":J("error",e),J("load",e),r=o;break;case"details":J("toggle",e),r=o;break;case"input":Lc(e,o),r=Qi(e,o),J("invalid",e);break;case"option":r=o;break;case"select":e._wrapperState={wasMultiple:!!o.multiple},r=re({},o,{value:void 0}),J("invalid",e);break;case"textarea":_c(e,o),r=Xi(e,o),J("invalid",e);break;default:r=o}Ji(n,r),s=r;for(a in s)if(s.hasOwnProperty(a)){var l=s[a];a==="style"?Xd(e,l):a==="dangerouslySetInnerHTML"?(l=l?l.__html:void 0,l!=null&&Kd(e,l)):a==="children"?typeof l=="string"?(n!=="textarea"||l!=="")&&Go(e,l):typeof l=="number"&&Go(e,""+l):a!=="suppressContentEditableWarning"&&a!=="suppressHydrationWarning"&&a!=="autoFocus"&&(Ho.hasOwnProperty(a)?l!=null&&a==="onScroll"&&J("scroll",e):l!=null&&ol(e,a,l,i))}switch(n){case"input":$r(e),Ic(e,o,!1);break;case"textarea":$r(e),Ec(e);break;case"option":o.value!=null&&e.setAttribute("value",""+Yt(o.value));break;case"select":e.multiple=!!o.multiple,a=o.value,a!=null?Gn(e,!!o.multiple,a,!1):o.defaultValue!=null&&Gn(e,!!o.multiple,o.defaultValue,!0);break;default:typeof r.onClick=="function"&&(e.onclick=ga)}switch(n){case"button":case"input":case"select":case"textarea":o=!!o.autoFocus;break e;case"img":o=!0;break e;default:o=!1}}o&&(t.flags|=4)}t.ref!==null&&(t.flags|=512,t.flags|=2097152)}return Se(t),null;case 6:if(e&&t.stateNode!=null)wm(e,t,e.memoizedProps,o);else{if(typeof o!="string"&&t.stateNode===null)throw Error(R(166));if(n=pn(or.current),pn(gt.current),zr(t)){if(o=t.stateNode,n=t.memoizedProps,o[pt]=t,(a=o.nodeValue!==n)&&(e=Ue,e!==null))switch(e.tag){case 3:Rr(o.nodeValue,n,(e.mode&1)!==0);break;case 5:e.memoizedProps.suppressHydrationWarning!==!0&&Rr(o.nodeValue,n,(e.mode&1)!==0)}a&&(t.flags|=4)}else o=(n.nodeType===9?n:n.ownerDocument).createTextNode(o),o[pt]=t,t.stateNode=o}return Se(t),null;case 13:if(ee(ne),o=t.memoizedState,e===null||e.memoizedState!==null&&e.memoizedState.dehydrated!==null){if(te&&Fe!==null&&t.mode&1&&!(t.flags&128))Mp(),no(),t.flags|=98560,a=!1;else if(a=zr(t),o!==null&&o.dehydrated!==null){if(e===null){if(!a)throw Error(R(318));if(a=t.memoizedState,a=a!==null?a.dehydrated:null,!a)throw Error(R(317));a[pt]=t}else no(),!(t.flags&128)&&(t.memoizedState=null),t.flags|=4;Se(t),a=!1}else rt!==null&&(Ds(rt),rt=null),a=!0;if(!a)return t.flags&65536?t:null}return t.flags&128?(t.lanes=n,t):(o=o!==null,o!==(e!==null&&e.memoizedState!==null)&&o&&(t.child.flags|=8192,t.mode&1&&(e===null||ne.current&1?fe===0&&(fe=3):Bl())),t.updateQueue!==null&&(t.flags|=4),Se(t),null);case 4:return ro(),ks(e,t),e===null&&Jo(t.stateNode.containerInfo),Se(t),null;case 10:return Pl(t.type._context),Se(t),null;case 17:return Ae(t.type)&&fa(),Se(t),null;case 19:if(ee(ne),a=t.memoizedState,a===null)return Se(t),null;if(o=(t.flags&128)!==0,i=a.rendering,i===null)if(o)Co(a,!1);else{if(fe!==0||e!==null&&e.flags&128)for(e=t.child;e!==null;){if(i=Pa(e),i!==null){for(t.flags|=128,Co(a,!1),o=i.updateQueue,o!==null&&(t.updateQueue=o,t.flags|=4),t.subtreeFlags=0,o=n,n=t.child;n!==null;)a=n,e=o,a.flags&=14680066,i=a.alternate,i===null?(a.childLanes=0,a.lanes=e,a.child=null,a.subtreeFlags=0,a.memoizedProps=null,a.memoizedState=null,a.updateQueue=null,a.dependencies=null,a.stateNode=null):(a.childLanes=i.childLanes,a.lanes=i.lanes,a.child=i.child,a.subtreeFlags=0,a.deletions=null,a.memoizedProps=i.memoizedProps,a.memoizedState=i.memoizedState,a.updateQueue=i.updateQueue,a.type=i.type,e=i.dependencies,a.dependencies=e===null?null:{lanes:e.lanes,firstContext:e.firstContext}),n=n.sibling;return X(ne,ne.current&1|2),t.child}e=e.sibling}a.tail!==null&&le()>io&&(t.flags|=128,o=!0,Co(a,!1),t.lanes=4194304)}else{if(!o)if(e=Pa(i),e!==null){if(t.flags|=128,o=!0,n=e.updateQueue,n!==null&&(t.updateQueue=n,t.flags|=4),Co(a,!0),a.tail===null&&a.tailMode==="hidden"&&!i.alternate&&!te)return Se(t),null}else 2*le()-a.renderingStartTime>io&&n!==1073741824&&(t.flags|=128,o=!0,Co(a,!1),t.lanes=4194304);a.isBackwards?(i.sibling=t.child,t.child=i):(n=a.last,n!==null?n.sibling=i:t.child=i,a.last=i)}return a.tail!==null?(t=a.tail,a.rendering=t,a.tail=t.sibling,a.renderingStartTime=le(),t.sibling=null,n=ne.current,X(ne,o?n&1|2:n&1),t):(Se(t),null);case 22:case 23:return Ml(),o=t.memoizedState!==null,e!==null&&e.memoizedState!==null!==o&&(t.flags|=8192),o&&t.mode&1?Ne&1073741824&&(Se(t),t.subtreeFlags&6&&(t.flags|=8192)):Se(t),null;case 24:return null;case 25:return null}throw Error(R(156,t.tag))}function rh(e,t){switch(vl(t),t.tag){case 1:return Ae(t.type)&&fa(),e=t.flags,e&65536?(t.flags=e&-65537|128,t):null;case 3:return ro(),ee(je),ee(ke),Ll(),e=t.flags,e&65536&&!(e&128)?(t.flags=e&-65537|128,t):null;case 5:return kl(t),null;case 13:if(ee(ne),e=t.memoizedState,e!==null&&e.dehydrated!==null){if(t.alternate===null)throw Error(R(340));no()}return e=t.flags,e&65536?(t.flags=e&-65537|128,t):null;case 19:return ee(ne),null;case 4:return ro(),null;case 10:return Pl(t.type._context),null;case 22:case 23:return Ml(),null;case 24:return null;default:return null}}var Tr=!1,Ce=!1,ah=typeof WeakSet=="function"?WeakSet:Set,A=null;function Wn(e,t){var n=e.ref;if(n!==null)if(typeof n=="function")try{n(null)}catch(o){ae(e,t,o)}else n.current=null}function Ls(e,t,n){try{n()}catch(o){ae(e,t,o)}}var bu=!1;function ih(e,t){if(us=da,e=Cp(),hl(e)){if("selectionStart"in e)var n={start:e.selectionStart,end:e.selectionEnd};else e:{n=(n=e.ownerDocument)&&n.defaultView||window;var o=n.getSelection&&n.getSelection();if(o&&o.rangeCount!==0){n=o.anchorNode;var r=o.anchorOffset,a=o.focusNode;o=o.focusOffset;try{n.nodeType,a.nodeType}catch{n=null;break e}var i=0,s=-1,l=-1,c=0,u=0,d=e,p=null;t:for(;;){for(var h;d!==n||r!==0&&d.nodeType!==3||(s=i+r),d!==a||o!==0&&d.nodeType!==3||(l=i+o),d.nodeType===3&&(i+=d.nodeValue.length),(h=d.firstChild)!==null;)p=d,d=h;for(;;){if(d===e)break t;if(p===n&&++c===r&&(s=i),p===a&&++u===o&&(l=i),(h=d.nextSibling)!==null)break;d=p,p=d.parentNode}d=h}n=s===-1||l===-1?null:{start:s,end:l}}else n=null}n=n||{start:0,end:0}}else n=null;for(ds={focusedElem:e,selectionRange:n},da=!1,A=t;A!==null;)if(t=A,e=t.child,(t.subtreeFlags&1028)!==0&&e!==null)e.return=t,A=e;else for(;A!==null;){t=A;try{var v=t.alternate;if(t.flags&1024)switch(t.tag){case 0:case 11:case 15:break;case 1:if(v!==null){var w=v.memoizedProps,$=v.memoizedState,f=t.stateNode,m=f.getSnapshotBeforeUpdate(t.elementType===t.type?w:nt(t.type,w),$);f.__reactInternalSnapshotBeforeUpdate=m}break;case 3:var g=t.stateNode.containerInfo;g.nodeType===1?g.textContent="":g.nodeType===9&&g.documentElement&&g.removeChild(g.documentElement);break;case 5:case 6:case 4:case 17:break;default:throw Error(R(163))}}catch(b){ae(t,t.return,b)}if(e=t.sibling,e!==null){e.return=t.return,A=e;break}A=t.return}return v=bu,bu=!1,v}function Uo(e,t,n){var o=t.updateQueue;if(o=o!==null?o.lastEffect:null,o!==null){var r=o=o.next;do{if((r.tag&e)===e){var a=r.destroy;r.destroy=void 0,a!==void 0&&Ls(t,n,a)}r=r.next}while(r!==o)}}function Ha(e,t){if(t=t.updateQueue,t=t!==null?t.lastEffect:null,t!==null){var n=t=t.next;do{if((n.tag&e)===e){var o=n.create;n.destroy=o()}n=n.next}while(n!==t)}}function Is(e){var t=e.ref;if(t!==null){var n=e.stateNode;switch(e.tag){case 5:e=n;break;default:e=n}typeof t=="function"?t(e):t.current=e}}function xm(e){var t=e.alternate;t!==null&&(e.alternate=null,xm(t)),e.child=null,e.deletions=null,e.sibling=null,e.tag===5&&(t=e.stateNode,t!==null&&(delete t[pt],delete t[tr],delete t[gs],delete t[U0],delete t[W0])),e.stateNode=null,e.return=null,e.dependencies=null,e.memoizedProps=null,e.memoizedState=null,e.pendingProps=null,e.stateNode=null,e.updateQueue=null}function Pm(e){return e.tag===5||e.tag===3||e.tag===4}function wu(e){e:for(;;){for(;e.sibling===null;){if(e.return===null||Pm(e.return))return null;e=e.return}for(e.sibling.return=e.return,e=e.sibling;e.tag!==5&&e.tag!==6&&e.tag!==18;){if(e.flags&2||e.child===null||e.tag===4)continue e;e.child.return=e,e=e.child}if(!(e.flags&2))return e.stateNode}}function _s(e,t,n){var o=e.tag;if(o===5||o===6)e=e.stateNode,t?n.nodeType===8?n.parentNode.insertBefore(e,t):n.insertBefore(e,t):(n.nodeType===8?(t=n.parentNode,t.insertBefore(e,n)):(t=n,t.appendChild(e)),n=n._reactRootContainer,n!=null||t.onclick!==null||(t.onclick=ga));else if(o!==4&&(e=e.child,e!==null))for(_s(e,t,n),e=e.sibling;e!==null;)_s(e,t,n),e=e.sibling}function Es(e,t,n){var o=e.tag;if(o===5||o===6)e=e.stateNode,t?n.insertBefore(e,t):n.appendChild(e);else if(o!==4&&(e=e.child,e!==null))for(Es(e,t,n),e=e.sibling;e!==null;)Es(e,t,n),e=e.sibling}var be=null,ot=!1;function Et(e,t,n){for(n=n.child;n!==null;)$m(e,t,n),n=n.sibling}function $m(e,t,n){if(mt&&typeof mt.onCommitFiberUnmount=="function")try{mt.onCommitFiberUnmount(Aa,n)}catch{}switch(n.tag){case 5:Ce||Wn(n,t);case 6:var o=be,r=ot;be=null,Et(e,t,n),be=o,ot=r,be!==null&&(ot?(e=be,n=n.stateNode,e.nodeType===8?e.parentNode.removeChild(n):e.removeChild(n)):be.removeChild(n.stateNode));break;case 18:be!==null&&(ot?(e=be,n=n.stateNode,e.nodeType===8?yi(e.parentNode,n):e.nodeType===1&&yi(e,n),Yo(e)):yi(be,n.stateNode));break;case 4:o=be,r=ot,be=n.stateNode.containerInfo,ot=!0,Et(e,t,n),be=o,ot=r;break;case 0:case 11:case 14:case 15:if(!Ce&&(o=n.updateQueue,o!==null&&(o=o.lastEffect,o!==null))){r=o=o.next;do{var a=r,i=a.destroy;a=a.tag,i!==void 0&&(a&2||a&4)&&Ls(n,t,i),r=r.next}while(r!==o)}Et(e,t,n);break;case 1:if(!Ce&&(Wn(n,t),o=n.stateNode,typeof o.componentWillUnmount=="function"))try{o.props=n.memoizedProps,o.state=n.memoizedState,o.componentWillUnmount()}catch(s){ae(n,t,s)}Et(e,t,n);break;case 21:Et(e,t,n);break;case 22:n.mode&1?(Ce=(o=Ce)||n.memoizedState!==null,Et(e,t,n),Ce=o):Et(e,t,n);break;default:Et(e,t,n)}}function xu(e){var t=e.updateQueue;if(t!==null){e.updateQueue=null;var n=e.stateNode;n===null&&(n=e.stateNode=new ah),t.forEach(function(o){var r=fh.bind(null,e,o);n.has(o)||(n.add(o),o.then(r,r))})}}function tt(e,t){var n=t.deletions;if(n!==null)for(var o=0;o<n.length;o++){var r=n[o];try{var a=e,i=t,s=i;e:for(;s!==null;){switch(s.tag){case 5:be=s.stateNode,ot=!1;break e;case 3:be=s.stateNode.containerInfo,ot=!0;break e;case 4:be=s.stateNode.containerInfo,ot=!0;break e}s=s.return}if(be===null)throw Error(R(160));$m(a,i,r),be=null,ot=!1;var l=r.alternate;l!==null&&(l.return=null),r.return=null}catch(c){ae(r,t,c)}}if(t.subtreeFlags&12854)for(t=t.child;t!==null;)Sm(t,e),t=t.sibling}function Sm(e,t){var n=e.alternate,o=e.flags;switch(e.tag){case 0:case 11:case 14:case 15:if(tt(t,e),ct(e),o&4){try{Uo(3,e,e.return),Ha(3,e)}catch(w){ae(e,e.return,w)}try{Uo(5,e,e.return)}catch(w){ae(e,e.return,w)}}break;case 1:tt(t,e),ct(e),o&512&&n!==null&&Wn(n,n.return);break;case 5:if(tt(t,e),ct(e),o&512&&n!==null&&Wn(n,n.return),e.flags&32){var r=e.stateNode;try{Go(r,"")}catch(w){ae(e,e.return,w)}}if(o&4&&(r=e.stateNode,r!=null)){var a=e.memoizedProps,i=n!==null?n.memoizedProps:a,s=e.type,l=e.updateQueue;if(e.updateQueue=null,l!==null)try{s==="input"&&a.type==="radio"&&a.name!=null&&Gd(r,a),es(s,i);var c=es(s,a);for(i=0;i<l.length;i+=2){var u=l[i],d=l[i+1];u==="style"?Xd(r,d):u==="dangerouslySetInnerHTML"?Kd(r,d):u==="children"?Go(r,d):ol(r,u,d,c)}switch(s){case"input":Ki(r,a);break;case"textarea":qd(r,a);break;case"select":var p=r._wrapperState.wasMultiple;r._wrapperState.wasMultiple=!!a.multiple;var h=a.value;h!=null?Gn(r,!!a.multiple,h,!1):p!==!!a.multiple&&(a.defaultValue!=null?Gn(r,!!a.multiple,a.defaultValue,!0):Gn(r,!!a.multiple,a.multiple?[]:"",!1))}r[tr]=a}catch(w){ae(e,e.return,w)}}break;case 6:if(tt(t,e),ct(e),o&4){if(e.stateNode===null)throw Error(R(162));r=e.stateNode,a=e.memoizedProps;try{r.nodeValue=a}catch(w){ae(e,e.return,w)}}break;case 3:if(tt(t,e),ct(e),o&4&&n!==null&&n.memoizedState.isDehydrated)try{Yo(t.containerInfo)}catch(w){ae(e,e.return,w)}break;case 4:tt(t,e),ct(e);break;case 13:tt(t,e),ct(e),r=e.child,r.flags&8192&&(a=r.memoizedState!==null,r.stateNode.isHidden=a,!a||r.alternate!==null&&r.alternate.memoizedState!==null||(jl=le())),o&4&&xu(e);break;case 22:if(u=n!==null&&n.memoizedState!==null,e.mode&1?(Ce=(c=Ce)||u,tt(t,e),Ce=c):tt(t,e),ct(e),o&8192){if(c=e.memoizedState!==null,(e.stateNode.isHidden=c)&&!u&&e.mode&1)for(A=e,u=e.child;u!==null;){for(d=A=u;A!==null;){switch(p=A,h=p.child,p.tag){case 0:case 11:case 14:case 15:Uo(4,p,p.return);break;case 1:Wn(p,p.return);var v=p.stateNode;if(typeof v.componentWillUnmount=="function"){o=p,n=p.return;try{t=o,v.props=t.memoizedProps,v.state=t.memoizedState,v.componentWillUnmount()}catch(w){ae(o,n,w)}}break;case 5:Wn(p,p.return);break;case 22:if(p.memoizedState!==null){$u(d);continue}}h!==null?(h.return=p,A=h):$u(d)}u=u.sibling}e:for(u=null,d=e;;){if(d.tag===5){if(u===null){u=d;try{r=d.stateNode,c?(a=r.style,typeof a.setProperty=="function"?a.setProperty("display","none","important"):a.display="none"):(s=d.stateNode,l=d.memoizedProps.style,i=l!=null&&l.hasOwnProperty("display")?l.display:null,s.style.display=Yd("display",i))}catch(w){ae(e,e.return,w)}}}else if(d.tag===6){if(u===null)try{d.stateNode.nodeValue=c?"":d.memoizedProps}catch(w){ae(e,e.return,w)}}else if((d.tag!==22&&d.tag!==23||d.memoizedState===null||d===e)&&d.child!==null){d.child.return=d,d=d.child;continue}if(d===e)break e;for(;d.sibling===null;){if(d.return===null||d.return===e)break e;u===d&&(u=null),d=d.return}u===d&&(u=null),d.sibling.return=d.return,d=d.sibling}}break;case 19:tt(t,e),ct(e),o&4&&xu(e);break;case 21:break;default:tt(t,e),ct(e)}}function ct(e){var t=e.flags;if(t&2){try{e:{for(var n=e.return;n!==null;){if(Pm(n)){var o=n;break e}n=n.return}throw Error(R(160))}switch(o.tag){case 5:var r=o.stateNode;o.flags&32&&(Go(r,""),o.flags&=-33);var a=wu(e);Es(e,a,r);break;case 3:case 4:var i=o.stateNode.containerInfo,s=wu(e);_s(e,s,i);break;default:throw Error(R(161))}}catch(l){ae(e,e.return,l)}e.flags&=-3}t&4096&&(e.flags&=-4097)}function sh(e,t,n){A=e,Cm(e)}function Cm(e,t,n){for(var o=(e.mode&1)!==0;A!==null;){var r=A,a=r.child;if(r.tag===22&&o){var i=r.memoizedState!==null||Tr;if(!i){var s=r.alternate,l=s!==null&&s.memoizedState!==null||Ce;s=Tr;var c=Ce;if(Tr=i,(Ce=l)&&!c)for(A=r;A!==null;)i=A,l=i.child,i.tag===22&&i.memoizedState!==null?Su(r):l!==null?(l.return=i,A=l):Su(r);for(;a!==null;)A=a,Cm(a),a=a.sibling;A=r,Tr=s,Ce=c}Pu(e)}else r.subtreeFlags&8772&&a!==null?(a.return=r,A=a):Pu(e)}}function Pu(e){for(;A!==null;){var t=A;if(t.flags&8772){var n=t.alternate;try{if(t.flags&8772)switch(t.tag){case 0:case 11:case 15:Ce||Ha(5,t);break;case 1:var o=t.stateNode;if(t.flags&4&&!Ce)if(n===null)o.componentDidMount();else{var r=t.elementType===t.type?n.memoizedProps:nt(t.type,n.memoizedProps);o.componentDidUpdate(r,n.memoizedState,o.__reactInternalSnapshotBeforeUpdate)}var a=t.updateQueue;a!==null&&iu(t,a,o);break;case 3:var i=t.updateQueue;if(i!==null){if(n=null,t.child!==null)switch(t.child.tag){case 5:n=t.child.stateNode;break;case 1:n=t.child.stateNode}iu(t,i,n)}break;case 5:var s=t.stateNode;if(n===null&&t.flags&4){n=s;var l=t.memoizedProps;switch(t.type){case"button":case"input":case"select":case"textarea":l.autoFocus&&n.focus();break;case"img":l.src&&(n.src=l.src)}}break;case 6:break;case 4:break;case 12:break;case 13:if(t.memoizedState===null){var c=t.alternate;if(c!==null){var u=c.memoizedState;if(u!==null){var d=u.dehydrated;d!==null&&Yo(d)}}}break;case 19:case 17:case 21:case 22:case 23:case 25:break;default:throw Error(R(163))}Ce||t.flags&512&&Is(t)}catch(p){ae(t,t.return,p)}}if(t===e){A=null;break}if(n=t.sibling,n!==null){n.return=t.return,A=n;break}A=t.return}}function $u(e){for(;A!==null;){var t=A;if(t===e){A=null;break}var n=t.sibling;if(n!==null){n.return=t.return,A=n;break}A=t.return}}function Su(e){for(;A!==null;){var t=A;try{switch(t.tag){case 0:case 11:case 15:var n=t.return;try{Ha(4,t)}catch(l){ae(t,n,l)}break;case 1:var o=t.stateNode;if(typeof o.componentDidMount=="function"){var r=t.return;try{o.componentDidMount()}catch(l){ae(t,r,l)}}var a=t.return;try{Is(t)}catch(l){ae(t,a,l)}break;case 5:var i=t.return;try{Is(t)}catch(l){ae(t,i,l)}}}catch(l){ae(t,t.return,l)}if(t===e){A=null;break}var s=t.sibling;if(s!==null){s.return=t.return,A=s;break}A=t.return}}var lh=Math.ceil,Ca=kt.ReactCurrentDispatcher,Dl=kt.ReactCurrentOwner,Xe=kt.ReactCurrentBatchConfig,q=0,ve=null,de=null,we=0,Ne=0,Vn=Jt(0),fe=0,sr=null,bn=0,Ga=0,Tl=0,Wo=null,De=null,jl=0,io=1/0,ht=null,ka=!1,Rs=null,Gt=null,jr=!1,At=null,La=0,Vo=0,zs=null,ta=-1,na=0;function Ee(){return q&6?le():ta!==-1?ta:ta=le()}function qt(e){return e.mode&1?q&2&&we!==0?we&-we:H0.transition!==null?(na===0&&(na=cp()),na):(e=Y,e!==0||(e=window.event,e=e===void 0?16:hp(e.type)),e):1}function it(e,t,n,o){if(50<Vo)throw Vo=0,zs=null,Error(R(185));pr(e,n,o),(!(q&2)||e!==ve)&&(e===ve&&(!(q&2)&&(Ga|=n),fe===4&&Tt(e,we)),Me(e,o),n===1&&q===0&&!(t.mode&1)&&(io=le()+500,Ua&&en()))}function Me(e,t){var n=e.callbackNode;Hf(e,t);var o=ua(e,e===ve?we:0);if(o===0)n!==null&&Oc(n),e.callbackNode=null,e.callbackPriority=0;else if(t=o&-o,e.callbackPriority!==t){if(n!=null&&Oc(n),t===1)e.tag===0?V0(Cu.bind(null,e)):Tp(Cu.bind(null,e)),N0(function(){!(q&6)&&en()}),n=null;else{switch(up(o)){case 1:n=ll;break;case 4:n=sp;break;case 16:n=ca;break;case 536870912:n=lp;break;default:n=ca}n=Om(n,km.bind(null,e))}e.callbackPriority=t,e.callbackNode=n}}function km(e,t){if(ta=-1,na=0,q&6)throw Error(R(327));var n=e.callbackNode;if(Xn()&&e.callbackNode!==n)return null;var o=ua(e,e===ve?we:0);if(o===0)return null;if(o&30||o&e.expiredLanes||t)t=Ia(e,o);else{t=o;var r=q;q|=2;var a=Im();(ve!==e||we!==t)&&(ht=null,io=le()+500,gn(e,t));do try{dh();break}catch(s){Lm(e,s)}while(!0);xl(),Ca.current=a,q=r,de!==null?t=0:(ve=null,we=0,t=fe)}if(t!==0){if(t===2&&(r=as(e),r!==0&&(o=r,t=Os(e,r))),t===1)throw n=sr,gn(e,0),Tt(e,o),Me(e,le()),n;if(t===6)Tt(e,o);else{if(r=e.current.alternate,!(o&30)&&!ch(r)&&(t=Ia(e,o),t===2&&(a=as(e),a!==0&&(o=a,t=Os(e,a))),t===1))throw n=sr,gn(e,0),Tt(e,o),Me(e,le()),n;switch(e.finishedWork=r,e.finishedLanes=o,t){case 0:case 1:throw Error(R(345));case 2:sn(e,De,ht);break;case 3:if(Tt(e,o),(o&130023424)===o&&(t=jl+500-le(),10<t)){if(ua(e,0)!==0)break;if(r=e.suspendedLanes,(r&o)!==o){Ee(),e.pingedLanes|=e.suspendedLanes&r;break}e.timeoutHandle=ms(sn.bind(null,e,De,ht),t);break}sn(e,De,ht);break;case 4:if(Tt(e,o),(o&4194240)===o)break;for(t=e.eventTimes,r=-1;0<o;){var i=31-at(o);a=1<<i,i=t[i],i>r&&(r=i),o&=~a}if(o=r,o=le()-o,o=(120>o?120:480>o?480:1080>o?1080:1920>o?1920:3e3>o?3e3:4320>o?4320:1960*lh(o/1960))-o,10<o){e.timeoutHandle=ms(sn.bind(null,e,De,ht),o);break}sn(e,De,ht);break;case 5:sn(e,De,ht);break;default:throw Error(R(329))}}}return Me(e,le()),e.callbackNode===n?km.bind(null,e):null}function Os(e,t){var n=Wo;return e.current.memoizedState.isDehydrated&&(gn(e,t).flags|=256),e=Ia(e,t),e!==2&&(t=De,De=n,t!==null&&Ds(t)),e}function Ds(e){De===null?De=e:De.push.apply(De,e)}function ch(e){for(var t=e;;){if(t.flags&16384){var n=t.updateQueue;if(n!==null&&(n=n.stores,n!==null))for(var o=0;o<n.length;o++){var r=n[o],a=r.getSnapshot;r=r.value;try{if(!st(a(),r))return!1}catch{return!1}}}if(n=t.child,t.subtreeFlags&16384&&n!==null)n.return=t,t=n;else{if(t===e)break;for(;t.sibling===null;){if(t.return===null||t.return===e)return!0;t=t.return}t.sibling.return=t.return,t=t.sibling}}return!0}function Tt(e,t){for(t&=~Tl,t&=~Ga,e.suspendedLanes|=t,e.pingedLanes&=~t,e=e.expirationTimes;0<t;){var n=31-at(t),o=1<<n;e[n]=-1,t&=~o}}function Cu(e){if(q&6)throw Error(R(327));Xn();var t=ua(e,0);if(!(t&1))return Me(e,le()),null;var n=Ia(e,t);if(e.tag!==0&&n===2){var o=as(e);o!==0&&(t=o,n=Os(e,o))}if(n===1)throw n=sr,gn(e,0),Tt(e,t),Me(e,le()),n;if(n===6)throw Error(R(345));return e.finishedWork=e.current.alternate,e.finishedLanes=t,sn(e,De,ht),Me(e,le()),null}function Al(e,t){var n=q;q|=1;try{return e(t)}finally{q=n,q===0&&(io=le()+500,Ua&&en())}}function wn(e){At!==null&&At.tag===0&&!(q&6)&&Xn();var t=q;q|=1;var n=Xe.transition,o=Y;try{if(Xe.transition=null,Y=1,e)return e()}finally{Y=o,Xe.transition=n,q=t,!(q&6)&&en()}}function Ml(){Ne=Vn.current,ee(Vn)}function gn(e,t){e.finishedWork=null,e.finishedLanes=0;var n=e.timeoutHandle;if(n!==-1&&(e.timeoutHandle=-1,B0(n)),de!==null)for(n=de.return;n!==null;){var o=n;switch(vl(o),o.tag){case 1:o=o.type.childContextTypes,o!=null&&fa();break;case 3:ro(),ee(je),ee(ke),Ll();break;case 5:kl(o);break;case 4:ro();break;case 13:ee(ne);break;case 19:ee(ne);break;case 10:Pl(o.type._context);break;case 22:case 23:Ml()}n=n.return}if(ve=e,de=e=Qt(e.current,null),we=Ne=t,fe=0,sr=null,Tl=Ga=bn=0,De=Wo=null,dn!==null){for(t=0;t<dn.length;t++)if(n=dn[t],o=n.interleaved,o!==null){n.interleaved=null;var r=o.next,a=n.pending;if(a!==null){var i=a.next;a.next=r,o.next=i}n.pending=o}dn=null}return e}function Lm(e,t){do{var n=de;try{if(xl(),Zr.current=Sa,$a){for(var o=oe.memoizedState;o!==null;){var r=o.queue;r!==null&&(r.pending=null),o=o.next}$a=!1}if(vn=0,ye=ge=oe=null,Fo=!1,rr=0,Dl.current=null,n===null||n.return===null){fe=1,sr=t,de=null;break}e:{var a=e,i=n.return,s=n,l=t;if(t=we,s.flags|=32768,l!==null&&typeof l=="object"&&typeof l.then=="function"){var c=l,u=s,d=u.tag;if(!(u.mode&1)&&(d===0||d===11||d===15)){var p=u.alternate;p?(u.updateQueue=p.updateQueue,u.memoizedState=p.memoizedState,u.lanes=p.lanes):(u.updateQueue=null,u.memoizedState=null)}var h=pu(i);if(h!==null){h.flags&=-257,mu(h,i,s,a,t),h.mode&1&&du(a,c,t),t=h,l=c;var v=t.updateQueue;if(v===null){var w=new Set;w.add(l),t.updateQueue=w}else v.add(l);break e}else{if(!(t&1)){du(a,c,t),Bl();break e}l=Error(R(426))}}else if(te&&s.mode&1){var $=pu(i);if($!==null){!($.flags&65536)&&($.flags|=256),mu($,i,s,a,t),bl(ao(l,s));break e}}a=l=ao(l,s),fe!==4&&(fe=2),Wo===null?Wo=[a]:Wo.push(a),a=i;do{switch(a.tag){case 3:a.flags|=65536,t&=-t,a.lanes|=t;var f=um(a,l,t);au(a,f);break e;case 1:s=l;var m=a.type,g=a.stateNode;if(!(a.flags&128)&&(typeof m.getDerivedStateFromError=="function"||g!==null&&typeof g.componentDidCatch=="function"&&(Gt===null||!Gt.has(g)))){a.flags|=65536,t&=-t,a.lanes|=t;var b=dm(a,s,t);au(a,b);break e}}a=a.return}while(a!==null)}Em(n)}catch(x){t=x,de===n&&n!==null&&(de=n=n.return);continue}break}while(!0)}function Im(){var e=Ca.current;return Ca.current=Sa,e===null?Sa:e}function Bl(){(fe===0||fe===3||fe===2)&&(fe=4),ve===null||!(bn&268435455)&&!(Ga&268435455)||Tt(ve,we)}function Ia(e,t){var n=q;q|=2;var o=Im();(ve!==e||we!==t)&&(ht=null,gn(e,t));do try{uh();break}catch(r){Lm(e,r)}while(!0);if(xl(),q=n,Ca.current=o,de!==null)throw Error(R(261));return ve=null,we=0,fe}function uh(){for(;de!==null;)_m(de)}function dh(){for(;de!==null&&!jf();)_m(de)}function _m(e){var t=zm(e.alternate,e,Ne);e.memoizedProps=e.pendingProps,t===null?Em(e):de=t,Dl.current=null}function Em(e){var t=e;do{var n=t.alternate;if(e=t.return,t.flags&32768){if(n=rh(n,t),n!==null){n.flags&=32767,de=n;return}if(e!==null)e.flags|=32768,e.subtreeFlags=0,e.deletions=null;else{fe=6,de=null;return}}else if(n=oh(n,t,Ne),n!==null){de=n;return}if(t=t.sibling,t!==null){de=t;return}de=t=e}while(t!==null);fe===0&&(fe=5)}function sn(e,t,n){var o=Y,r=Xe.transition;try{Xe.transition=null,Y=1,ph(e,t,n,o)}finally{Xe.transition=r,Y=o}return null}function ph(e,t,n,o){do Xn();while(At!==null);if(q&6)throw Error(R(327));n=e.finishedWork;var r=e.finishedLanes;if(n===null)return null;if(e.finishedWork=null,e.finishedLanes=0,n===e.current)throw Error(R(177));e.callbackNode=null,e.callbackPriority=0;var a=n.lanes|n.childLanes;if(Gf(e,a),e===ve&&(de=ve=null,we=0),!(n.subtreeFlags&2064)&&!(n.flags&2064)||jr||(jr=!0,Om(ca,function(){return Xn(),null})),a=(n.flags&15990)!==0,n.subtreeFlags&15990||a){a=Xe.transition,Xe.transition=null;var i=Y;Y=1;var s=q;q|=4,Dl.current=null,ih(e,n),Sm(n,e),z0(ds),da=!!us,ds=us=null,e.current=n,sh(n),Af(),q=s,Y=i,Xe.transition=a}else e.current=n;if(jr&&(jr=!1,At=e,La=r),a=e.pendingLanes,a===0&&(Gt=null),Nf(n.stateNode),Me(e,le()),t!==null)for(o=e.onRecoverableError,n=0;n<t.length;n++)r=t[n],o(r.value,{componentStack:r.stack,digest:r.digest});if(ka)throw ka=!1,e=Rs,Rs=null,e;return La&1&&e.tag!==0&&Xn(),a=e.pendingLanes,a&1?e===zs?Vo++:(Vo=0,zs=e):Vo=0,en(),null}function Xn(){if(At!==null){var e=up(La),t=Xe.transition,n=Y;try{if(Xe.transition=null,Y=16>e?16:e,At===null)var o=!1;else{if(e=At,At=null,La=0,q&6)throw Error(R(331));var r=q;for(q|=4,A=e.current;A!==null;){var a=A,i=a.child;if(A.flags&16){var s=a.deletions;if(s!==null){for(var l=0;l<s.length;l++){var c=s[l];for(A=c;A!==null;){var u=A;switch(u.tag){case 0:case 11:case 15:Uo(8,u,a)}var d=u.child;if(d!==null)d.return=u,A=d;else for(;A!==null;){u=A;var p=u.sibling,h=u.return;if(xm(u),u===c){A=null;break}if(p!==null){p.return=h,A=p;break}A=h}}}var v=a.alternate;if(v!==null){var w=v.child;if(w!==null){v.child=null;do{var $=w.sibling;w.sibling=null,w=$}while(w!==null)}}A=a}}if(a.subtreeFlags&2064&&i!==null)i.return=a,A=i;else e:for(;A!==null;){if(a=A,a.flags&2048)switch(a.tag){case 0:case 11:case 15:Uo(9,a,a.return)}var f=a.sibling;if(f!==null){f.return=a.return,A=f;break e}A=a.return}}var m=e.current;for(A=m;A!==null;){i=A;var g=i.child;if(i.subtreeFlags&2064&&g!==null)g.return=i,A=g;else e:for(i=m;A!==null;){if(s=A,s.flags&2048)try{switch(s.tag){case 0:case 11:case 15:Ha(9,s)}}catch(x){ae(s,s.return,x)}if(s===i){A=null;break e}var b=s.sibling;if(b!==null){b.return=s.return,A=b;break e}A=s.return}}if(q=r,en(),mt&&typeof mt.onPostCommitFiberRoot=="function")try{mt.onPostCommitFiberRoot(Aa,e)}catch{}o=!0}return o}finally{Y=n,Xe.transition=t}}return!1}function ku(e,t,n){t=ao(n,t),t=um(e,t,1),e=Ht(e,t,1),t=Ee(),e!==null&&(pr(e,1,t),Me(e,t))}function ae(e,t,n){if(e.tag===3)ku(e,e,n);else for(;t!==null;){if(t.tag===3){ku(t,e,n);break}else if(t.tag===1){var o=t.stateNode;if(typeof t.type.getDerivedStateFromError=="function"||typeof o.componentDidCatch=="function"&&(Gt===null||!Gt.has(o))){e=ao(n,e),e=dm(t,e,1),t=Ht(t,e,1),e=Ee(),t!==null&&(pr(t,1,e),Me(t,e));break}}t=t.return}}function mh(e,t,n){var o=e.pingCache;o!==null&&o.delete(t),t=Ee(),e.pingedLanes|=e.suspendedLanes&n,ve===e&&(we&n)===n&&(fe===4||fe===3&&(we&130023424)===we&&500>le()-jl?gn(e,0):Tl|=n),Me(e,t)}function Rm(e,t){t===0&&(e.mode&1?(t=kr,kr<<=1,!(kr&130023424)&&(kr=4194304)):t=1);var n=Ee();e=St(e,t),e!==null&&(pr(e,t,n),Me(e,n))}function gh(e){var t=e.memoizedState,n=0;t!==null&&(n=t.retryLane),Rm(e,n)}function fh(e,t){var n=0;switch(e.tag){case 13:var o=e.stateNode,r=e.memoizedState;r!==null&&(n=r.retryLane);break;case 19:o=e.stateNode;break;default:throw Error(R(314))}o!==null&&o.delete(t),Rm(e,n)}var zm;zm=function(e,t,n){if(e!==null)if(e.memoizedProps!==t.pendingProps||je.current)Te=!0;else{if(!(e.lanes&n)&&!(t.flags&128))return Te=!1,nh(e,t,n);Te=!!(e.flags&131072)}else Te=!1,te&&t.flags&1048576&&jp(t,va,t.index);switch(t.lanes=0,t.tag){case 2:var o=t.type;ea(e,t),e=t.pendingProps;var r=to(t,ke.current);Yn(t,n),r=_l(null,t,o,e,r,n);var a=El();return t.flags|=1,typeof r=="object"&&r!==null&&typeof r.render=="function"&&r.$$typeof===void 0?(t.tag=1,t.memoizedState=null,t.updateQueue=null,Ae(o)?(a=!0,ha(t)):a=!1,t.memoizedState=r.state!==null&&r.state!==void 0?r.state:null,Sl(t),r.updater=Va,t.stateNode=r,r._reactInternals=t,ws(t,o,e,n),t=$s(null,t,o,!0,a,n)):(t.tag=0,te&&a&&yl(t),_e(null,t,r,n),t=t.child),t;case 16:o=t.elementType;e:{switch(ea(e,t),e=t.pendingProps,r=o._init,o=r(o._payload),t.type=o,r=t.tag=yh(o),e=nt(o,e),r){case 0:t=Ps(null,t,o,e,n);break e;case 1:t=hu(null,t,o,e,n);break e;case 11:t=gu(null,t,o,e,n);break e;case 14:t=fu(null,t,o,nt(o.type,e),n);break e}throw Error(R(306,o,""))}return t;case 0:return o=t.type,r=t.pendingProps,r=t.elementType===o?r:nt(o,r),Ps(e,t,o,r,n);case 1:return o=t.type,r=t.pendingProps,r=t.elementType===o?r:nt(o,r),hu(e,t,o,r,n);case 3:e:{if(fm(t),e===null)throw Error(R(387));o=t.pendingProps,a=t.memoizedState,r=a.element,Up(e,t),xa(t,o,null,n);var i=t.memoizedState;if(o=i.element,a.isDehydrated)if(a={element:o,isDehydrated:!1,cache:i.cache,pendingSuspenseBoundaries:i.pendingSuspenseBoundaries,transitions:i.transitions},t.updateQueue.baseState=a,t.memoizedState=a,t.flags&256){r=ao(Error(R(423)),t),t=yu(e,t,o,n,r);break e}else if(o!==r){r=ao(Error(R(424)),t),t=yu(e,t,o,n,r);break e}else for(Fe=Vt(t.stateNode.containerInfo.firstChild),Ue=t,te=!0,rt=null,n=Np(t,null,o,n),t.child=n;n;)n.flags=n.flags&-3|4096,n=n.sibling;else{if(no(),o===r){t=Ct(e,t,n);break e}_e(e,t,o,n)}t=t.child}return t;case 5:return Wp(t),e===null&&ys(t),o=t.type,r=t.pendingProps,a=e!==null?e.memoizedProps:null,i=r.children,ps(o,r)?i=null:a!==null&&ps(o,a)&&(t.flags|=32),gm(e,t),_e(e,t,i,n),t.child;case 6:return e===null&&ys(t),null;case 13:return hm(e,t,n);case 4:return Cl(t,t.stateNode.containerInfo),o=t.pendingProps,e===null?t.child=oo(t,null,o,n):_e(e,t,o,n),t.child;case 11:return o=t.type,r=t.pendingProps,r=t.elementType===o?r:nt(o,r),gu(e,t,o,r,n);case 7:return _e(e,t,t.pendingProps,n),t.child;case 8:return _e(e,t,t.pendingProps.children,n),t.child;case 12:return _e(e,t,t.pendingProps.children,n),t.child;case 10:e:{if(o=t.type._context,r=t.pendingProps,a=t.memoizedProps,i=r.value,X(ba,o._currentValue),o._currentValue=i,a!==null)if(st(a.value,i)){if(a.children===r.children&&!je.current){t=Ct(e,t,n);break e}}else for(a=t.child,a!==null&&(a.return=t);a!==null;){var s=a.dependencies;if(s!==null){i=a.child;for(var l=s.firstContext;l!==null;){if(l.context===o){if(a.tag===1){l=wt(-1,n&-n),l.tag=2;var c=a.updateQueue;if(c!==null){c=c.shared;var u=c.pending;u===null?l.next=l:(l.next=u.next,u.next=l),c.pending=l}}a.lanes|=n,l=a.alternate,l!==null&&(l.lanes|=n),vs(a.return,n,t),s.lanes|=n;break}l=l.next}}else if(a.tag===10)i=a.type===t.type?null:a.child;else if(a.tag===18){if(i=a.return,i===null)throw Error(R(341));i.lanes|=n,s=i.alternate,s!==null&&(s.lanes|=n),vs(i,n,t),i=a.sibling}else i=a.child;if(i!==null)i.return=a;else for(i=a;i!==null;){if(i===t){i=null;break}if(a=i.sibling,a!==null){a.return=i.return,i=a;break}i=i.return}a=i}_e(e,t,r.children,n),t=t.child}return t;case 9:return r=t.type,o=t.pendingProps.children,Yn(t,n),r=Ze(r),o=o(r),t.flags|=1,_e(e,t,o,n),t.child;case 14:return o=t.type,r=nt(o,t.pendingProps),r=nt(o.type,r),fu(e,t,o,r,n);case 15:return pm(e,t,t.type,t.pendingProps,n);case 17:return o=t.type,r=t.pendingProps,r=t.elementType===o?r:nt(o,r),ea(e,t),t.tag=1,Ae(o)?(e=!0,ha(t)):e=!1,Yn(t,n),cm(t,o,r),ws(t,o,r,n),$s(null,t,o,!0,e,n);case 19:return ym(e,t,n);case 22:return mm(e,t,n)}throw Error(R(156,t.tag))};function Om(e,t){return ip(e,t)}function hh(e,t,n,o){this.tag=e,this.key=n,this.sibling=this.child=this.return=this.stateNode=this.type=this.elementType=null,this.index=0,this.ref=null,this.pendingProps=t,this.dependencies=this.memoizedState=this.updateQueue=this.memoizedProps=null,this.mode=o,this.subtreeFlags=this.flags=0,this.deletions=null,this.childLanes=this.lanes=0,this.alternate=null}function Ye(e,t,n,o){return new hh(e,t,n,o)}function Nl(e){return e=e.prototype,!(!e||!e.isReactComponent)}function yh(e){if(typeof e=="function")return Nl(e)?1:0;if(e!=null){if(e=e.$$typeof,e===al)return 11;if(e===il)return 14}return 2}function Qt(e,t){var n=e.alternate;return n===null?(n=Ye(e.tag,t,e.key,e.mode),n.elementType=e.elementType,n.type=e.type,n.stateNode=e.stateNode,n.alternate=e,e.alternate=n):(n.pendingProps=t,n.type=e.type,n.flags=0,n.subtreeFlags=0,n.deletions=null),n.flags=e.flags&14680064,n.childLanes=e.childLanes,n.lanes=e.lanes,n.child=e.child,n.memoizedProps=e.memoizedProps,n.memoizedState=e.memoizedState,n.updateQueue=e.updateQueue,t=e.dependencies,n.dependencies=t===null?null:{lanes:t.lanes,firstContext:t.firstContext},n.sibling=e.sibling,n.index=e.index,n.ref=e.ref,n}function oa(e,t,n,o,r,a){var i=2;if(o=e,typeof e=="function")Nl(e)&&(i=1);else if(typeof e=="string")i=5;else e:switch(e){case Dn:return fn(n.children,r,a,t);case rl:i=8,r|=8;break;case Vi:return e=Ye(12,n,t,r|2),e.elementType=Vi,e.lanes=a,e;case Hi:return e=Ye(13,n,t,r),e.elementType=Hi,e.lanes=a,e;case Gi:return e=Ye(19,n,t,r),e.elementType=Gi,e.lanes=a,e;case Wd:return qa(n,r,a,t);default:if(typeof e=="object"&&e!==null)switch(e.$$typeof){case Fd:i=10;break e;case Ud:i=9;break e;case al:i=11;break e;case il:i=14;break e;case zt:i=16,o=null;break e}throw Error(R(130,e==null?e:typeof e,""))}return t=Ye(i,n,t,r),t.elementType=e,t.type=o,t.lanes=a,t}function fn(e,t,n,o){return e=Ye(7,e,o,t),e.lanes=n,e}function qa(e,t,n,o){return e=Ye(22,e,o,t),e.elementType=Wd,e.lanes=n,e.stateNode={isHidden:!1},e}function Ci(e,t,n){return e=Ye(6,e,null,t),e.lanes=n,e}function ki(e,t,n){return t=Ye(4,e.children!==null?e.children:[],e.key,t),t.lanes=n,t.stateNode={containerInfo:e.containerInfo,pendingChildren:null,implementation:e.implementation},t}function vh(e,t,n,o,r){this.tag=t,this.containerInfo=e,this.finishedWork=this.pingCache=this.current=this.pendingChildren=null,this.timeoutHandle=-1,this.callbackNode=this.pendingContext=this.context=null,this.callbackPriority=0,this.eventTimes=ii(0),this.expirationTimes=ii(-1),this.entangledLanes=this.finishedLanes=this.mutableReadLanes=this.expiredLanes=this.pingedLanes=this.suspendedLanes=this.pendingLanes=0,this.entanglements=ii(0),this.identifierPrefix=o,this.onRecoverableError=r,this.mutableSourceEagerHydrationData=null}function Fl(e,t,n,o,r,a,i,s,l){return e=new vh(e,t,n,s,l),t===1?(t=1,a===!0&&(t|=8)):t=0,a=Ye(3,null,null,t),e.current=a,a.stateNode=e,a.memoizedState={element:o,isDehydrated:n,cache:null,transitions:null,pendingSuspenseBoundaries:null},Sl(a),e}function bh(e,t,n){var o=3<arguments.length&&arguments[3]!==void 0?arguments[3]:null;return{$$typeof:On,key:o==null?null:""+o,children:e,containerInfo:t,implementation:n}}function Dm(e){if(!e)return Xt;e=e._reactInternals;e:{if($n(e)!==e||e.tag!==1)throw Error(R(170));var t=e;do{switch(t.tag){case 3:t=t.stateNode.context;break e;case 1:if(Ae(t.type)){t=t.stateNode.__reactInternalMemoizedMergedChildContext;break e}}t=t.return}while(t!==null);throw Error(R(171))}if(e.tag===1){var n=e.type;if(Ae(n))return Dp(e,n,t)}return t}function Tm(e,t,n,o,r,a,i,s,l){return e=Fl(n,o,!0,e,r,a,i,s,l),e.context=Dm(null),n=e.current,o=Ee(),r=qt(n),a=wt(o,r),a.callback=t??null,Ht(n,a,r),e.current.lanes=r,pr(e,r,o),Me(e,o),e}function Qa(e,t,n,o){var r=t.current,a=Ee(),i=qt(r);return n=Dm(n),t.context===null?t.context=n:t.pendingContext=n,t=wt(a,i),t.payload={element:e},o=o===void 0?null:o,o!==null&&(t.callback=o),e=Ht(r,t,i),e!==null&&(it(e,r,i,a),Xr(e,r,i)),i}function _a(e){if(e=e.current,!e.child)return null;switch(e.child.tag){case 5:return e.child.stateNode;default:return e.child.stateNode}}function Lu(e,t){if(e=e.memoizedState,e!==null&&e.dehydrated!==null){var n=e.retryLane;e.retryLane=n!==0&&n<t?n:t}}function Ul(e,t){Lu(e,t),(e=e.alternate)&&Lu(e,t)}function wh(){return null}var jm=typeof reportError=="function"?reportError:function(e){console.error(e)};function Wl(e){this._internalRoot=e}Ka.prototype.render=Wl.prototype.render=function(e){var t=this._internalRoot;if(t===null)throw Error(R(409));Qa(e,t,null,null)};Ka.prototype.unmount=Wl.prototype.unmount=function(){var e=this._internalRoot;if(e!==null){this._internalRoot=null;var t=e.containerInfo;wn(function(){Qa(null,e,null,null)}),t[$t]=null}};function Ka(e){this._internalRoot=e}Ka.prototype.unstable_scheduleHydration=function(e){if(e){var t=mp();e={blockedOn:null,target:e,priority:t};for(var n=0;n<Dt.length&&t!==0&&t<Dt[n].priority;n++);Dt.splice(n,0,e),n===0&&fp(e)}};function Vl(e){return!(!e||e.nodeType!==1&&e.nodeType!==9&&e.nodeType!==11)}function Ya(e){return!(!e||e.nodeType!==1&&e.nodeType!==9&&e.nodeType!==11&&(e.nodeType!==8||e.nodeValue!==" react-mount-point-unstable "))}function Iu(){}function xh(e,t,n,o,r){if(r){if(typeof o=="function"){var a=o;o=function(){var c=_a(i);a.call(c)}}var i=Tm(t,o,e,0,null,!1,!1,"",Iu);return e._reactRootContainer=i,e[$t]=i.current,Jo(e.nodeType===8?e.parentNode:e),wn(),i}for(;r=e.lastChild;)e.removeChild(r);if(typeof o=="function"){var s=o;o=function(){var c=_a(l);s.call(c)}}var l=Fl(e,0,!1,null,null,!1,!1,"",Iu);return e._reactRootContainer=l,e[$t]=l.current,Jo(e.nodeType===8?e.parentNode:e),wn(function(){Qa(t,l,n,o)}),l}function Xa(e,t,n,o,r){var a=n._reactRootContainer;if(a){var i=a;if(typeof r=="function"){var s=r;r=function(){var l=_a(i);s.call(l)}}Qa(t,i,e,r)}else i=xh(n,t,e,r,o);return _a(i)}dp=function(e){switch(e.tag){case 3:var t=e.stateNode;if(t.current.memoizedState.isDehydrated){var n=Eo(t.pendingLanes);n!==0&&(cl(t,n|1),Me(t,le()),!(q&6)&&(io=le()+500,en()))}break;case 13:wn(function(){var o=St(e,1);if(o!==null){var r=Ee();it(o,e,1,r)}}),Ul(e,1)}};ul=function(e){if(e.tag===13){var t=St(e,134217728);if(t!==null){var n=Ee();it(t,e,134217728,n)}Ul(e,134217728)}};pp=function(e){if(e.tag===13){var t=qt(e),n=St(e,t);if(n!==null){var o=Ee();it(n,e,t,o)}Ul(e,t)}};mp=function(){return Y};gp=function(e,t){var n=Y;try{return Y=e,t()}finally{Y=n}};ns=function(e,t,n){switch(t){case"input":if(Ki(e,n),t=n.name,n.type==="radio"&&t!=null){for(n=e;n.parentNode;)n=n.parentNode;for(n=n.querySelectorAll("input[name="+JSON.stringify(""+t)+'][type="radio"]'),t=0;t<n.length;t++){var o=n[t];if(o!==e&&o.form===e.form){var r=Fa(o);if(!r)throw Error(R(90));Hd(o),Ki(o,r)}}}break;case"textarea":qd(e,n);break;case"select":t=n.value,t!=null&&Gn(e,!!n.multiple,t,!1)}};ep=Al;tp=wn;var Ph={usingClientEntryPoint:!1,Events:[gr,Mn,Fa,Zd,Jd,Al]},ko={findFiberByHostInstance:un,bundleType:0,version:"18.3.1",rendererPackageName:"react-dom"},$h={bundleType:ko.bundleType,version:ko.version,rendererPackageName:ko.rendererPackageName,rendererConfig:ko.rendererConfig,overrideHookState:null,overrideHookStateDeletePath:null,overrideHookStateRenamePath:null,overrideProps:null,overridePropsDeletePath:null,overridePropsRenamePath:null,setErrorHandler:null,setSuspenseHandler:null,scheduleUpdate:null,currentDispatcherRef:kt.ReactCurrentDispatcher,findHostInstanceByFiber:function(e){return e=rp(e),e===null?null:e.stateNode},findFiberByHostInstance:ko.findFiberByHostInstance||wh,findHostInstancesForRefresh:null,scheduleRefresh:null,scheduleRoot:null,setRefreshHandler:null,getCurrentFiber:null,reconcilerVersion:"18.3.1-next-f1338f8080-20240426"};if(typeof __REACT_DEVTOOLS_GLOBAL_HOOK__<"u"){var Ar=__REACT_DEVTOOLS_GLOBAL_HOOK__;if(!Ar.isDisabled&&Ar.supportsFiber)try{Aa=Ar.inject($h),mt=Ar}catch{}}Ve.__SECRET_INTERNALS_DO_NOT_USE_OR_YOU_WILL_BE_FIRED=Ph;Ve.createPortal=function(e,t){var n=2<arguments.length&&arguments[2]!==void 0?arguments[2]:null;if(!Vl(t))throw Error(R(200));return bh(e,t,null,n)};Ve.createRoot=function(e,t){if(!Vl(e))throw Error(R(299));var n=!1,o="",r=jm;return t!=null&&(t.unstable_strictMode===!0&&(n=!0),t.identifierPrefix!==void 0&&(o=t.identifierPrefix),t.onRecoverableError!==void 0&&(r=t.onRecoverableError)),t=Fl(e,1,!1,null,null,n,!1,o,r),e[$t]=t.current,Jo(e.nodeType===8?e.parentNode:e),new Wl(t)};Ve.findDOMNode=function(e){if(e==null)return null;if(e.nodeType===1)return e;var t=e._reactInternals;if(t===void 0)throw typeof e.render=="function"?Error(R(188)):(e=Object.keys(e).join(","),Error(R(268,e)));return e=rp(t),e=e===null?null:e.stateNode,e};Ve.flushSync=function(e){return wn(e)};Ve.hydrate=function(e,t,n){if(!Ya(t))throw Error(R(200));return Xa(null,e,t,!0,n)};Ve.hydrateRoot=function(e,t,n){if(!Vl(e))throw Error(R(405));var o=n!=null&&n.hydratedSources||null,r=!1,a="",i=jm;if(n!=null&&(n.unstable_strictMode===!0&&(r=!0),n.identifierPrefix!==void 0&&(a=n.identifierPrefix),n.onRecoverableError!==void 0&&(i=n.onRecoverableError)),t=Tm(t,null,e,1,n??null,r,!1,a,i),e[$t]=t.current,Jo(e),o)for(e=0;e<o.length;e++)n=o[e],r=n._getVersion,r=r(n._source),t.mutableSourceEagerHydrationData==null?t.mutableSourceEagerHydrationData=[n,r]:t.mutableSourceEagerHydrationData.push(n,r);return new Ka(t)};Ve.render=function(e,t,n){if(!Ya(t))throw Error(R(200));return Xa(null,e,t,!1,n)};Ve.unmountComponentAtNode=function(e){if(!Ya(e))throw Error(R(40));return e._reactRootContainer?(wn(function(){Xa(null,null,e,!1,function(){e._reactRootContainer=null,e[$t]=null})}),!0):!1};Ve.unstable_batchedUpdates=Al;Ve.unstable_renderSubtreeIntoContainer=function(e,t,n,o){if(!Ya(n))throw Error(R(200));if(e==null||e._reactInternals===void 0)throw Error(R(38));return Xa(e,t,n,!1,o)};Ve.version="18.3.1-next-f1338f8080-20240426";function Am(){if(!(typeof __REACT_DEVTOOLS_GLOBAL_HOOK__>"u"||typeof __REACT_DEVTOOLS_GLOBAL_HOOK__.checkDCE!="function"))try{__REACT_DEVTOOLS_GLOBAL_HOOK__.checkDCE(Am)}catch(e){console.error(e)}}Am(),Ad.exports=Ve;var Sh=Ad.exports,Mm,_u=Sh;Mm=_u.createRoot,_u.hydrateRoot;/**
 * @remix-run/router v1.23.4
 *
 * Copyright (c) Remix Software Inc.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE.md file in the root directory of this source tree.
 *
 * @license MIT
 */function lr(){return lr=Object.assign?Object.assign.bind():function(e){for(var t=1;t<arguments.length;t++){var n=arguments[t];for(var o in n)({}).hasOwnProperty.call(n,o)&&(e[o]=n[o])}return e},lr.apply(null,arguments)}var Mt;(function(e){e.Pop="POP",e.Push="PUSH",e.Replace="REPLACE"})(Mt||(Mt={}));const Eu="popstate";function Ch(e){e===void 0&&(e={});function t(r,a){let{pathname:i="/",search:s="",hash:l=""}=Sn(r.location.hash.substr(1));return!i.startsWith("/")&&!i.startsWith(".")&&(i="/"+i),Ts("",{pathname:i,search:s,hash:l},a.state&&a.state.usr||null,a.state&&a.state.key||"default")}function n(r,a){let i=r.document.querySelector("base"),s="";if(i&&i.getAttribute("href")){let l=r.location.href,c=l.indexOf("#");s=c===-1?l:l.slice(0,c)}return s+"#"+(typeof a=="string"?a:Ea(a))}function o(r,a){Hl(r.pathname.charAt(0)==="/","relative pathnames are not supported in hash history.push("+JSON.stringify(a)+")")}return Lh(t,n,o,e)}function ce(e,t){if(e===!1||e===null||typeof e>"u")throw new Error(t)}function Hl(e,t){if(!e){typeof console<"u"&&console.warn(t);try{throw new Error(t)}catch{}}}function kh(){return Math.random().toString(36).substr(2,8)}function Ru(e,t){return{usr:e.state,key:e.key,idx:t}}function Ts(e,t,n,o){return n===void 0&&(n=null),lr({pathname:typeof e=="string"?e:e.pathname,search:"",hash:""},typeof t=="string"?Sn(t):t,{state:n,key:t&&t.key||o||kh()})}function Ea(e){let{pathname:t="/",search:n="",hash:o=""}=e;return n&&n!=="?"&&(t+=n.charAt(0)==="?"?n:"?"+n),o&&o!=="#"&&(t+=o.charAt(0)==="#"?o:"#"+o),t}function Sn(e){let t={};if(e){let n=e.indexOf("#");n>=0&&(t.hash=e.substr(n),e=e.substr(0,n));let o=e.indexOf("?");o>=0&&(t.search=e.substr(o),e=e.substr(0,o)),e&&(t.pathname=e)}return t}function Lh(e,t,n,o){o===void 0&&(o={});let{window:r=document.defaultView,v5Compat:a=!1}=o,i=r.history,s=Mt.Pop,l=null,c=u();c==null&&(c=0,i.replaceState(lr({},i.state,{idx:c}),""));function u(){return(i.state||{idx:null}).idx}function d(){s=Mt.Pop;let $=u(),f=$==null?null:$-c;c=$,l&&l({action:s,location:w.location,delta:f})}function p($,f){s=Mt.Push;let m=Ts(w.location,$,f);n&&n(m,$),c=u()+1;let g=Ru(m,c),b=w.createHref(m);try{i.pushState(g,"",b)}catch(x){if(x instanceof DOMException&&x.name==="DataCloneError")throw x;r.location.assign(b)}a&&l&&l({action:s,location:w.location,delta:1})}function h($,f){s=Mt.Replace;let m=Ts(w.location,$,f);n&&n(m,$),c=u();let g=Ru(m,c),b=w.createHref(m);i.replaceState(g,"",b),a&&l&&l({action:s,location:w.location,delta:0})}function v($){let f=r.location.origin!=="null"?r.location.origin:r.location.href,m=typeof $=="string"?$:Ea($);return m=m.replace(/ $/,"%20"),ce(f,"No window.location.(origin|href) available to create URL for href: "+m),new URL(m,f)}let w={get action(){return s},get location(){return e(r,i)},listen($){if(l)throw new Error("A history only accepts one active listener");return r.addEventListener(Eu,d),l=$,()=>{r.removeEventListener(Eu,d),l=null}},createHref($){return t(r,$)},createURL:v,encodeLocation($){let f=v($);return{pathname:f.pathname,search:f.search,hash:f.hash}},push:p,replace:h,go($){return i.go($)}};return w}var zu;(function(e){e.data="data",e.deferred="deferred",e.redirect="redirect",e.error="error"})(zu||(zu={}));function Ih(e,t,n){return n===void 0&&(n="/"),_h(e,t,n)}function _h(e,t,n,o){let r=typeof t=="string"?Sn(t):t,a=Gl(r.pathname||"/",n);if(a==null)return null;let i=Bm(e);Eh(i);let s=null,l=Uh(a);for(let c=0;s==null&&c<i.length;++c)s=Bh(i[c],l);return s}function Bm(e,t,n,o){t===void 0&&(t=[]),n===void 0&&(n=[]),o===void 0&&(o="");let r=(a,i,s)=>{let l={relativePath:s===void 0?a.path||"":s,caseSensitive:a.caseSensitive===!0,childrenIndex:i,route:a};l.relativePath.startsWith("/")&&(ce(l.relativePath.startsWith(o),'Absolute route path "'+l.relativePath+'" nested under path '+('"'+o+'" is not valid. An absolute child route path ')+"must start with the combined path of all its parent routes."),l.relativePath=l.relativePath.slice(o.length));let c=Kt([o,l.relativePath]),u=n.concat(l);a.children&&a.children.length>0&&(ce(a.index!==!0,"Index routes must not have child routes. Please remove "+('all child routes from route path "'+c+'".')),Bm(a.children,t,u,c)),!(a.path==null&&!a.index)&&t.push({path:c,score:Ah(c,a.index),routesMeta:u})};return e.forEach((a,i)=>{var s;if(a.path===""||!((s=a.path)!=null&&s.includes("?")))r(a,i);else for(let l of Nm(a.path))r(a,i,l)}),t}function Nm(e){let t=e.split("/");if(t.length===0)return[];let[n,...o]=t,r=n.endsWith("?"),a=n.replace(/\?$/,"");if(o.length===0)return r?[a,""]:[a];let i=Nm(o.join("/")),s=[];return s.push(...i.map(l=>l===""?a:[a,l].join("/"))),r&&s.push(...i),s.map(l=>e.startsWith("/")&&l===""?"/":l)}function Eh(e){e.sort((t,n)=>t.score!==n.score?n.score-t.score:Mh(t.routesMeta.map(o=>o.childrenIndex),n.routesMeta.map(o=>o.childrenIndex)))}const Rh=/^:[\w-]+$/,zh=3,Oh=2,Dh=1,Th=10,jh=-2,Ou=e=>e==="*";function Ah(e,t){let n=e.split("/"),o=n.length;return n.some(Ou)&&(o+=jh),t&&(o+=Oh),n.filter(r=>!Ou(r)).reduce((r,a)=>r+(Rh.test(a)?zh:a===""?Dh:Th),o)}function Mh(e,t){return e.length===t.length&&e.slice(0,-1).every((o,r)=>o===t[r])?e[e.length-1]-t[t.length-1]:0}function Bh(e,t,n){let{routesMeta:o}=e,r={},a="/",i=[];for(let s=0;s<o.length;++s){let l=o[s],c=s===o.length-1,u=a==="/"?t:t.slice(a.length)||"/",d=Nh({path:l.relativePath,caseSensitive:l.caseSensitive,end:c},u),p=l.route;if(!d)return null;Object.assign(r,d.params),i.push({params:r,pathname:Kt([a,d.pathname]),pathnameBase:Hh(Kt([a,d.pathnameBase])),route:p}),d.pathnameBase!=="/"&&(a=Kt([a,d.pathnameBase]))}return i}function Nh(e,t){typeof e=="string"&&(e={path:e,caseSensitive:!1,end:!0});let[n,o]=Fh(e.path,e.caseSensitive,e.end),r=t.match(n);if(!r)return null;let a=r[0],i=a.replace(/(.)\/+$/,"$1"),s=r.slice(1);return{params:o.reduce((c,u,d)=>{let{paramName:p,isOptional:h}=u;if(p==="*"){let w=s[d]||"";i=a.slice(0,a.length-w.length).replace(/(.)\/+$/,"$1")}const v=s[d];return h&&!v?c[p]=void 0:c[p]=(v||"").replace(/%2F/g,"/"),c},{}),pathname:a,pathnameBase:i,pattern:e}}function Fh(e,t,n){t===void 0&&(t=!1),n===void 0&&(n=!0),Hl(e==="*"||!e.endsWith("*")||e.endsWith("/*"),'Route path "'+e+'" will be treated as if it were '+('"'+e.replace(/\*$/,"/*")+'" because the `*` character must ')+"always follow a `/` in the pattern. To get rid of this warning, "+('please change the route path to "'+e.replace(/\*$/,"/*")+'".'));let o=[],r="^"+e.replace(/\/*\*?$/,"").replace(/^\/*/,"/").replace(/[\\.*+^${}|()[\]]/g,"\\$&").replace(/\/:([\w-]+)(\?)?/g,(i,s,l)=>(o.push({paramName:s,isOptional:l!=null}),l?"/?([^\\/]+)?":"/([^\\/]+)"));return e.endsWith("*")?(o.push({paramName:"*"}),r+=e==="*"||e==="/*"?"(.*)$":"(?:\\/(.+)|\\/*)$"):n?r+="\\/*$":e!==""&&e!=="/"&&(r+="(?:(?=\\/|$))"),[new RegExp(r,t?void 0:"i"),o]}function Uh(e){try{return e.split("/").map(t=>decodeURIComponent(t).replace(/\//g,"%2F")).join("/")}catch(t){return Hl(!1,'The URL path "'+e+'" could not be decoded because it is is a malformed URL segment. This is probably due to a bad percent '+("encoding ("+t+").")),e}}function Gl(e,t){if(t==="/")return e;if(!e.toLowerCase().startsWith(t.toLowerCase()))return null;let n=t.endsWith("/")?t.length-1:t.length,o=e.charAt(n);return o&&o!=="/"?null:e.slice(n)||"/"}function Wh(e,t){t===void 0&&(t="/");let{pathname:n,search:o="",hash:r=""}=typeof e=="string"?Sn(e):e,a;return n?(n=Fm(n),n.startsWith("/")?a=Du(n.substring(1),"/"):a=Du(n,t)):a=t,{pathname:a,search:Gh(o),hash:qh(r)}}function Du(e,t){let n=t.replace(/\/+$/,"").split("/");return e.split("/").forEach(r=>{r===".."?n.length>1&&n.pop():r!=="."&&n.push(r)}),n.length>1?n.join("/"):"/"}function Li(e,t,n,o){return"Cannot include a '"+e+"' character in a manually specified "+("`to."+t+"` field ["+JSON.stringify(o)+"].  Please separate it out to the ")+("`to."+n+"` field. Alternatively you may provide the full path as ")+'a string in <Link to="..."> and the router will parse it for you.'}function Vh(e){return e.filter((t,n)=>n===0||t.route.path&&t.route.path.length>0)}function ql(e,t){let n=Vh(e);return t?n.map((o,r)=>r===n.length-1?o.pathname:o.pathnameBase):n.map(o=>o.pathnameBase)}function Ql(e,t,n,o){o===void 0&&(o=!1);let r;typeof e=="string"?r=Sn(e):(r=lr({},e),ce(!r.pathname||!r.pathname.includes("?"),Li("?","pathname","search",r)),ce(!r.pathname||!r.pathname.includes("#"),Li("#","pathname","hash",r)),ce(!r.search||!r.search.includes("#"),Li("#","search","hash",r)));let a=e===""||r.pathname==="",i=a?"/":r.pathname,s;if(i==null)s=n;else{let d=t.length-1;if(!o&&i.startsWith("..")){let p=i.split("/");for(;p[0]==="..";)p.shift(),d-=1;r.pathname=p.join("/")}s=d>=0?t[d]:"/"}let l=Wh(r,s),c=i&&i!=="/"&&i.endsWith("/"),u=(a||i===".")&&n.endsWith("/");return!l.pathname.endsWith("/")&&(c||u)&&(l.pathname+="/"),l}const Fm=e=>e.replace(/\/\/+/g,"/"),Kt=e=>Fm(e.join("/")),Hh=e=>e.replace(/\/+$/,"").replace(/^\/*/,"/"),Gh=e=>!e||e==="?"?"":e.startsWith("?")?e:"?"+e,qh=e=>!e||e==="#"?"":e.startsWith("#")?e:"#"+e;function Qh(e){return e!=null&&typeof e.status=="number"&&typeof e.statusText=="string"&&typeof e.internal=="boolean"&&"data"in e}const Um=["post","put","patch","delete"];new Set(Um);const Kh=["get",...Um];new Set(Kh);/**
 * React Router v6.30.6
 *
 * Copyright (c) Remix Software Inc.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE.md file in the root directory of this source tree.
 *
 * @license MIT
 */function cr(){return cr=Object.assign?Object.assign.bind():function(e){for(var t=1;t<arguments.length;t++){var n=arguments[t];for(var o in n)({}).hasOwnProperty.call(n,o)&&(e[o]=n[o])}return e},cr.apply(null,arguments)}const Kl=S.createContext(null),Yh=S.createContext(null),tn=S.createContext(null),Za=S.createContext(null),Lt=S.createContext({outlet:null,matches:[],isDataRoute:!1}),Wm=S.createContext(null);function Xh(e,t){let{relative:n}=t===void 0?{}:t;po()||ce(!1);let{basename:o,navigator:r}=S.useContext(tn),{hash:a,pathname:i,search:s}=Gm(e,{relative:n}),l=i;return o!=="/"&&(l=i==="/"?o:Kt([o,i])),r.createHref({pathname:l,search:s,hash:a})}function po(){return S.useContext(Za)!=null}function mo(){return po()||ce(!1),S.useContext(Za).location}function Vm(e){S.useContext(tn).static||S.useLayoutEffect(e)}function Hm(){let{isDataRoute:e}=S.useContext(Lt);return e?dy():Zh()}function Zh(){po()||ce(!1);let e=S.useContext(Kl),{basename:t,future:n,navigator:o}=S.useContext(tn),{matches:r}=S.useContext(Lt),{pathname:a}=mo(),i=JSON.stringify(ql(r,n.v7_relativeSplatPath)),s=S.useRef(!1);return Vm(()=>{s.current=!0}),S.useCallback(function(c,u){if(u===void 0&&(u={}),!s.current)return;if(typeof c=="number"){o.go(c);return}let d=Ql(c,JSON.parse(i),a,u.relative==="path");e==null&&t!=="/"&&(d.pathname=d.pathname==="/"?t:Kt([t,d.pathname])),(u.replace?o.replace:o.push)(d,u.state,u)},[t,o,i,a,e])}function Jh(){let{matches:e}=S.useContext(Lt),t=e[e.length-1];return t?t.params:{}}function Gm(e,t){let{relative:n}=t===void 0?{}:t,{future:o}=S.useContext(tn),{matches:r}=S.useContext(Lt),{pathname:a}=mo(),i=JSON.stringify(ql(r,o.v7_relativeSplatPath));return S.useMemo(()=>Ql(e,JSON.parse(i),a,n==="path"),[e,i,a,n])}function ey(e,t){return ty(e,t)}function ty(e,t,n,o){po()||ce(!1);let{navigator:r}=S.useContext(tn),{matches:a}=S.useContext(Lt),i=a[a.length-1],s=i?i.params:{};i&&i.pathname;let l=i?i.pathnameBase:"/";i&&i.route;let c=mo(),u;if(t){var d;let $=typeof t=="string"?Sn(t):t;l==="/"||(d=$.pathname)!=null&&d.startsWith(l)||ce(!1),u=$}else u=c;let p=u.pathname||"/",h=p;if(l!=="/"){let $=l.replace(/^\//,"").split("/");h="/"+p.replace(/^\//,"").split("/").slice($.length).join("/")}let v=Ih(e,{pathname:h}),w=iy(v&&v.map($=>Object.assign({},$,{params:Object.assign({},s,$.params),pathname:Kt([l,r.encodeLocation?r.encodeLocation($.pathname).pathname:$.pathname]),pathnameBase:$.pathnameBase==="/"?l:Kt([l,r.encodeLocation?r.encodeLocation($.pathnameBase).pathname:$.pathnameBase])})),a,n,o);return t&&w?S.createElement(Za.Provider,{value:{location:cr({pathname:"/",search:"",hash:"",state:null,key:"default"},u),navigationType:Mt.Pop}},w):w}function ny(){let e=uy(),t=Qh(e)?e.status+" "+e.statusText:e instanceof Error?e.message:JSON.stringify(e),n=e instanceof Error?e.stack:null,r={padding:"0.5rem",backgroundColor:"rgba(200,200,200, 0.5)"};return S.createElement(S.Fragment,null,S.createElement("h2",null,"Unexpected Application Error!"),S.createElement("h3",{style:{fontStyle:"italic"}},t),n?S.createElement("pre",{style:r},n):null,null)}const oy=S.createElement(ny,null);class ry extends S.Component{constructor(t){super(t),this.state={location:t.location,revalidation:t.revalidation,error:t.error}}static getDerivedStateFromError(t){return{error:t}}static getDerivedStateFromProps(t,n){return n.location!==t.location||n.revalidation!=="idle"&&t.revalidation==="idle"?{error:t.error,location:t.location,revalidation:t.revalidation}:{error:t.error!==void 0?t.error:n.error,location:n.location,revalidation:t.revalidation||n.revalidation}}componentDidCatch(t,n){console.error("React Router caught the following error during render",t,n)}render(){return this.state.error!==void 0?S.createElement(Lt.Provider,{value:this.props.routeContext},S.createElement(Wm.Provider,{value:this.state.error,children:this.props.component})):this.props.children}}function ay(e){let{routeContext:t,match:n,children:o}=e,r=S.useContext(Kl);return r&&r.static&&r.staticContext&&(n.route.errorElement||n.route.ErrorBoundary)&&(r.staticContext._deepestRenderedBoundaryId=n.route.id),S.createElement(Lt.Provider,{value:t},o)}function iy(e,t,n,o){var r;if(t===void 0&&(t=[]),n===void 0&&(n=null),o===void 0&&(o=null),e==null){var a;if(!n)return null;if(n.errors)e=n.matches;else if((a=o)!=null&&a.v7_partialHydration&&t.length===0&&!n.initialized&&n.matches.length>0)e=n.matches;else return null}let i=e,s=(r=n)==null?void 0:r.errors;if(s!=null){let u=i.findIndex(d=>d.route.id&&(s==null?void 0:s[d.route.id])!==void 0);u>=0||ce(!1),i=i.slice(0,Math.min(i.length,u+1))}let l=!1,c=-1;if(n&&o&&o.v7_partialHydration)for(let u=0;u<i.length;u++){let d=i[u];if((d.route.HydrateFallback||d.route.hydrateFallbackElement)&&(c=u),d.route.id){let{loaderData:p,errors:h}=n,v=d.route.loader&&p[d.route.id]===void 0&&(!h||h[d.route.id]===void 0);if(d.route.lazy||v){l=!0,c>=0?i=i.slice(0,c+1):i=[i[0]];break}}}return i.reduceRight((u,d,p)=>{let h,v=!1,w=null,$=null;n&&(h=s&&d.route.id?s[d.route.id]:void 0,w=d.route.errorElement||oy,l&&(c<0&&p===0?(py("route-fallback"),v=!0,$=null):c===p&&(v=!0,$=d.route.hydrateFallbackElement||null)));let f=t.concat(i.slice(0,p+1)),m=()=>{let g;return h?g=w:v?g=$:d.route.Component?g=S.createElement(d.route.Component,null):d.route.element?g=d.route.element:g=u,S.createElement(ay,{match:d,routeContext:{outlet:u,matches:f,isDataRoute:n!=null},children:g})};return n&&(d.route.ErrorBoundary||d.route.errorElement||p===0)?S.createElement(ry,{location:n.location,revalidation:n.revalidation,component:w,error:h,children:m(),routeContext:{outlet:null,matches:f,isDataRoute:!0}}):m()},null)}var qm=function(e){return e.UseBlocker="useBlocker",e.UseRevalidator="useRevalidator",e.UseNavigateStable="useNavigate",e}(qm||{}),Qm=function(e){return e.UseBlocker="useBlocker",e.UseLoaderData="useLoaderData",e.UseActionData="useActionData",e.UseRouteError="useRouteError",e.UseNavigation="useNavigation",e.UseRouteLoaderData="useRouteLoaderData",e.UseMatches="useMatches",e.UseRevalidator="useRevalidator",e.UseNavigateStable="useNavigate",e.UseRouteId="useRouteId",e}(Qm||{});function sy(e){let t=S.useContext(Kl);return t||ce(!1),t}function ly(e){let t=S.useContext(Yh);return t||ce(!1),t}function cy(e){let t=S.useContext(Lt);return t||ce(!1),t}function Km(e){let t=cy(),n=t.matches[t.matches.length-1];return n.route.id||ce(!1),n.route.id}function uy(){var e;let t=S.useContext(Wm),n=ly(),o=Km();return t!==void 0?t:(e=n.errors)==null?void 0:e[o]}function dy(){let{router:e}=sy(qm.UseNavigateStable),t=Km(Qm.UseNavigateStable),n=S.useRef(!1);return Vm(()=>{n.current=!0}),S.useCallback(function(r,a){a===void 0&&(a={}),n.current&&(typeof r=="number"?e.navigate(r):e.navigate(r,cr({fromRouteId:t},a)))},[e,t])}const Tu={};function py(e,t,n){Tu[e]||(Tu[e]=!0)}function my(e,t){e==null||e.v7_startTransition,e==null||e.v7_relativeSplatPath}function js(e){let{to:t,replace:n,state:o,relative:r}=e;po()||ce(!1);let{future:a,static:i}=S.useContext(tn),{matches:s}=S.useContext(Lt),{pathname:l}=mo(),c=Hm(),u=Ql(t,ql(s,a.v7_relativeSplatPath),l,r==="path"),d=JSON.stringify(u);return S.useEffect(()=>c(JSON.parse(d),{replace:n,state:o,relative:r}),[c,d,r,n,o]),null}function zo(e){ce(!1)}function gy(e){let{basename:t="/",children:n=null,location:o,navigationType:r=Mt.Pop,navigator:a,static:i=!1,future:s}=e;po()&&ce(!1);let l=t.replace(/^\/*/,"/"),c=S.useMemo(()=>({basename:l,navigator:a,static:i,future:cr({v7_relativeSplatPath:!1},s)}),[l,s,a,i]);typeof o=="string"&&(o=Sn(o));let{pathname:u="/",search:d="",hash:p="",state:h=null,key:v="default"}=o,w=S.useMemo(()=>{let $=Gl(u,l);return $==null?null:{location:{pathname:$,search:d,hash:p,state:h,key:v},navigationType:r}},[l,u,d,p,h,v,r]);return w==null?null:S.createElement(tn.Provider,{value:c},S.createElement(Za.Provider,{children:n,value:w}))}function fy(e){let{children:t,location:n}=e;return ey(As(t),n)}new Promise(()=>{});function As(e,t){t===void 0&&(t=[]);let n=[];return S.Children.forEach(e,(o,r)=>{if(!S.isValidElement(o))return;let a=[...t,r];if(o.type===S.Fragment){n.push.apply(n,As(o.props.children,a));return}o.type!==zo&&ce(!1),!o.props.index||!o.props.children||ce(!1);let i={id:o.props.id||a.join("-"),caseSensitive:o.props.caseSensitive,element:o.props.element,Component:o.props.Component,index:o.props.index,path:o.props.path,loader:o.props.loader,action:o.props.action,errorElement:o.props.errorElement,ErrorBoundary:o.props.ErrorBoundary,hasErrorBoundary:o.props.ErrorBoundary!=null||o.props.errorElement!=null,shouldRevalidate:o.props.shouldRevalidate,handle:o.props.handle,lazy:o.props.lazy};o.props.children&&(i.children=As(o.props.children,a)),n.push(i)}),n}/**
 * React Router DOM v6.30.6
 *
 * Copyright (c) Remix Software Inc.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE.md file in the root directory of this source tree.
 *
 * @license MIT
 */function Ms(){return Ms=Object.assign?Object.assign.bind():function(e){for(var t=1;t<arguments.length;t++){var n=arguments[t];for(var o in n)({}).hasOwnProperty.call(n,o)&&(e[o]=n[o])}return e},Ms.apply(null,arguments)}function hy(e,t){if(e==null)return{};var n={};for(var o in e)if({}.hasOwnProperty.call(e,o)){if(t.indexOf(o)!==-1)continue;n[o]=e[o]}return n}function yy(e){return!!(e.metaKey||e.altKey||e.ctrlKey||e.shiftKey)}function vy(e,t){return e.button===0&&(!t||t==="_self")&&!yy(e)}const by=["onClick","relative","reloadDocument","replace","state","target","to","preventScrollReset","viewTransition"],wy="6";try{window.__reactRouterVersion=wy}catch{}const xy="startTransition",ju=mf[xy];function Py(e){let{basename:t,children:n,future:o,window:r}=e,a=S.useRef();a.current==null&&(a.current=Ch({window:r,v5Compat:!0}));let i=a.current,[s,l]=S.useState({action:i.action,location:i.location}),{v7_startTransition:c}=o||{},u=S.useCallback(d=>{c&&ju?ju(()=>l(d)):l(d)},[l,c]);return S.useLayoutEffect(()=>i.listen(u),[i,u]),S.useEffect(()=>my(o),[o]),S.createElement(gy,{basename:t,children:n,location:s.location,navigationType:s.action,navigator:i,future:o})}const $y=typeof window<"u"&&typeof window.document<"u"&&typeof window.document.createElement<"u",Sy=/^(?:[a-z][a-z0-9+.-]*:|\/\/)/i,Bs=S.forwardRef(function(t,n){let{onClick:o,relative:r,reloadDocument:a,replace:i,state:s,target:l,to:c,preventScrollReset:u,viewTransition:d}=t,p=hy(t,by),{basename:h}=S.useContext(tn),v,w=!1;if(typeof c=="string"&&Sy.test(c)&&(v=c,$y))try{let g=new URL(window.location.href),b=c.startsWith("//")?new URL(g.protocol+c):new URL(c),x=Gl(b.pathname,h);b.origin===g.origin&&x!=null?c=x+b.search+b.hash:w=!0}catch{}let $=Xh(c,{relative:r}),f=Cy(c,{replace:i,state:s,target:l,preventScrollReset:u,relative:r,viewTransition:d});function m(g){o&&o(g),g.defaultPrevented||f(g)}return S.createElement("a",Ms({},p,{href:v||$,onClick:w||a?o:m,ref:n,target:l}))});var Au;(function(e){e.UseScrollRestoration="useScrollRestoration",e.UseSubmit="useSubmit",e.UseSubmitFetcher="useSubmitFetcher",e.UseFetcher="useFetcher",e.useViewTransitionState="useViewTransitionState"})(Au||(Au={}));var Mu;(function(e){e.UseFetcher="useFetcher",e.UseFetchers="useFetchers",e.UseScrollRestoration="useScrollRestoration"})(Mu||(Mu={}));function Cy(e,t){let{target:n,replace:o,state:r,preventScrollReset:a,relative:i,viewTransition:s}=t===void 0?{}:t,l=Hm(),c=mo(),u=Gm(e,{relative:i});return S.useCallback(d=>{if(vy(d,n)){d.preventDefault();let p=o!==void 0?o:Ea(c)===Ea(u);l(e,{replace:p,state:r,preventScrollReset:a,relative:i,viewTransition:s})}},[c,l,u,o,r,n,e,a,i,s])}const ky="https://github.com/frankvane/vane-components";class Ly extends N.Component{constructor(){super(...arguments);wc(this,"state",{error:null})}static getDerivedStateFromError(n){return{error:n}}render(){var n;return this.state.error?y.jsxs("div",{className:"crash",role:"alert",children:[y.jsx("h3",{children:"这个页面炸了"}),y.jsx("pre",{children:String(((n=this.state.error)==null?void 0:n.stack)||this.state.error)}),y.jsx("button",{type:"button",onClick:()=>this.setState({error:null}),children:"重试"})]}):this.props.children}}function Ym(e,t){return String(e.entries.indexOf(t)+1).padStart(2,"0")}function Iy({demos:e,pathname:t}){var l;const{groups:n,entries:o,label:r}=e,a=(l=o.find(c=>t===`/demo/${c.meta.slug}`))==null?void 0:l.meta.group,[i,s]=S.useState(()=>{var u;const c=(u=n[0])==null?void 0:u.key;return Object.fromEntries(n.map(d=>[d.key,d.key===(a??c)]))});return S.useEffect(()=>{a&&s(c=>c[a]?c:{...c,[a]:!0})},[a]),y.jsxs("div",{className:"nav-section",children:[y.jsxs("div",{className:"nav-section-head",children:[y.jsx("span",{children:r}),y.jsxs("code",{children:[o.length," demos"]})]}),n.map(c=>{const u=o.filter(p=>p.meta.group===c.key);if(u.length===0)return null;const d=i[c.key]??!1;return y.jsxs("div",{className:"nav-group",children:[y.jsxs("button",{type:"button",className:`nav-group-head${a===c.key?" is-current":""}`,onClick:()=>s(p=>({...p,[c.key]:!d})),"aria-expanded":d,children:[y.jsx("span",{className:`nav-caret${d?" is-open":""}`,"aria-hidden":!0,children:"▸"}),c.label,y.jsx("code",{children:u.length})]}),d?y.jsx("div",{className:"nav-list",children:u.map(p=>y.jsxs(Bs,{to:`/demo/${p.meta.slug}`,className:`nav-sub${t===`/demo/${p.meta.slug}`?" is-active":""}`,children:[y.jsx("em",{"aria-hidden":!0,children:Ym(e,p)}),p.meta.title]},p.meta.slug))}):null]},c.key)})]})}function _y({demos:e}){const{slug:t}=Jh(),{entries:n,detail:o}=e,r=t?n.find(i=>i.meta.slug===t):void 0;if(!r)return y.jsx(js,{to:`/demo/${n[0].meta.slug}`,replace:!0});const a=n.indexOf(r)+1;return y.jsx(N.Fragment,{children:o(r,a)},r.meta.slug)}function Ey({config:e}){var u;const{pathname:t}=mo(),[n,o]=S.useState(!1),[r,a]=S.useState(!1);S.useEffect(()=>o(!1),[t]);const i=S.useCallback(()=>a(d=>!d),[]);S.useEffect(()=>{const d=p=>{const h=p.target,v=h&&(h.tagName==="INPUT"||h.tagName==="TEXTAREA"||h.isContentEditable);p.key==="Escape"&&o(!1),!v&&(p.key==="g"||p.key==="G")&&!p.metaKey&&!p.ctrlKey&&a(w=>!w)};return window.addEventListener("keydown",d),()=>window.removeEventListener("keydown",d)},[]);const s=e.demos,l=S.useMemo(()=>{if(!t.startsWith("/demo"))return e.crumb(t);const d=t.replace(/^\/demo\/?/,""),p=s.entries.find(h=>h.meta.slug===d);return p?`demo ${Ym(s,p)} · ${p.meta.title}`:"demo · 逐项示例"},[t,e,s]),c=S.useMemo(()=>e.nav.map((d,p)=>({...d,no:String(p+1).padStart(2,"0")})),[e.nav]);return y.jsxs("div",{className:`shell${n?" is-nav-open":""}${r?" is-guides":""}`,children:[y.jsx("a",{className:"skip-link",href:"#main",onClick:d=>{d.preventDefault();const p=document.getElementById("main");p==null||p.setAttribute("tabindex","-1"),p==null||p.focus(),p==null||p.scrollIntoView({block:"start"})},children:"跳到内容"}),y.jsxs("aside",{className:"side","aria-label":"站点导航",children:[y.jsxs(Bs,{to:"/",className:"brand",children:[y.jsx("span",{className:"brand-mark","aria-hidden":!0,children:e.brand}),y.jsxs("span",{children:[y.jsx("strong",{children:e.pkg}),y.jsx("em",{children:e.subtitle})]})]}),y.jsxs("nav",{children:[c.map(d=>y.jsxs(Bs,{to:d.to,className:`nav-item${t===d.to?" is-active":""}`,"aria-current":t===d.to?"page":void 0,children:[y.jsx("em",{"aria-hidden":!0,children:d.no}),y.jsx("span",{children:d.label}),d.hint?y.jsx("code",{children:d.hint}):null]},d.to)),y.jsx(Iy,{demos:e.demos,pathname:t})]}),y.jsxs("div",{className:"side-foot",children:[y.jsx("p",{children:e.footer[0]}),y.jsx("p",{className:"muted",children:e.footer[1]})]})]}),y.jsx("button",{type:"button",className:"scrim","aria-label":"关闭导航",tabIndex:n?0:-1,onClick:()=>o(!1)}),y.jsxs("div",{className:"main",id:"main",children:[y.jsxs("header",{className:"topbar",children:[y.jsx("button",{type:"button",className:"nav-toggle","aria-label":n?"关闭导航":"打开导航","aria-expanded":n,onClick:()=>o(d=>!d),children:y.jsx("span",{"aria-hidden":!0})}),y.jsx("span",{className:"crumb",children:l}),y.jsxs("div",{className:"topbar-right",children:[(u=e.stats)==null?void 0:u.map(d=>y.jsxs("span",{className:"topbar-stat",title:d.title,children:[y.jsx("b",{children:d.value})," ",d.label]},d.label)),y.jsxs("button",{type:"button",className:"topbar-btn","aria-pressed":r,onClick:i,title:"显示栏位参考线（快捷键 G）",children:[y.jsx("i",{"aria-hidden":!0}),"guides"]}),y.jsx("a",{className:"topbar-link",href:e.sourceUrl??ky,target:"_blank",rel:"noreferrer",children:"source ↗"})]})]}),y.jsx("div",{className:"guides","aria-hidden":!0}),y.jsx(S.Suspense,{fallback:y.jsx("div",{className:"loading",children:"loading modules…"}),children:y.jsx(Ly,{children:y.jsxs(fy,{children:[e.routes.map(d=>y.jsx(zo,{path:d.path,element:d.element},d.path)),y.jsx(zo,{path:"/demo",element:y.jsx(js,{to:`/demo/${e.demos.entries[0].meta.slug}`,replace:!0})}),y.jsx(zo,{path:"/demo/:slug",element:y.jsx(_y,{demos:e.demos})}),y.jsx(zo,{path:"*",element:y.jsx(js,{to:"/",replace:!0})})]})})})]})]})}function Ry({config:e}){return y.jsx(Py,{children:y.jsx(Ey,{config:e})})}const zy="modulepreload",Oy=function(e,t){return new URL(e,t).href},Bu={},L=function(t,n,o){let r=Promise.resolve();if(n&&n.length>0){const i=document.getElementsByTagName("link"),s=document.querySelector("meta[property=csp-nonce]"),l=(s==null?void 0:s.nonce)||(s==null?void 0:s.getAttribute("nonce"));r=Promise.allSettled(n.map(c=>{if(c=Oy(c,o),c in Bu)return;Bu[c]=!0;const u=c.endsWith(".css"),d=u?'[rel="stylesheet"]':"";if(!!o)for(let v=i.length-1;v>=0;v--){const w=i[v];if(w.href===c&&(!u||w.rel==="stylesheet"))return}else if(document.querySelector(`link[href="${c}"]${d}`))return;const h=document.createElement("link");if(h.rel=u?"stylesheet":zy,u||(h.as="script"),h.crossOrigin="",h.href=c,l&&h.setAttribute("nonce",l),document.head.appendChild(h),u)return new Promise((v,w)=>{h.addEventListener("load",v),h.addEventListener("error",()=>w(new Error(`Unable to preload CSS for ${c}`)))})}))}function a(i){const s=new Event("vite:preloadError",{cancelable:!0});if(s.payload=i,window.dispatchEvent(s),!s.defaultPrevented)throw i}return r.then(i=>{for(const s of i||[])s.status==="rejected"&&a(s.reason);return t().catch(a)})},Dy=`import {
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
`,Ty=`import {
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
`,jy=`import {
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
`,Ay=`import {
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
`,My=`import {
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
`,By=`import {
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
`,Ny=`import {
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
`,Fy=`import {
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
`,Uy=`import {
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
`,Wy=`import {
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
`,Vy=`import {
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
`,Hy=`import {
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
`,Gy=`import {
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

`,qy=`import {
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

`,Qy=`import {
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
`,Ky=`import * as ReactWindow from "react-window";

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
`,Yy=`import * as ReactWindow from "react-window";

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
`,Xy=`import * as ReactWindow from "react-window";

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
`,Zy="A11yPlugin",Jy="无障碍支持：将装饰性图片设为 aria-hidden、自定义 aria-label、注入 role=img 与 aria-busy，并通过 aria-live 区域播报加载状态，提升读屏可用性。",ev="2.0.0",tv=["a11y","可访问性","SEO"],nv=[{name:"enabled",type:"boolean",default:"true",description:"是否启用无障碍增强"},{name:"decorative",type:"boolean",default:"false",description:"标记为装饰性图片（aria-hidden=true 并清空 alt）"},{name:"ariaLabel",type:"string | ((ctx) => string)",default:"undefined",description:"自定义 aria-label（函数型，参见用法示例）"},{name:"statusText",type:"{ loading?; loaded?; error? }",default:"undefined",description:"视觉隐藏的状态播报文本"}],ov=`const A11yImage = withPlugins(LazyLoadImageCore, [
  createA11yPlugin({
    ariaLabel: (ctx) => \`商品主图 \${ctx.src}\`,
    statusText: { loading: "加载中…", loaded: "已加载", error: "加载失败" },
  }),
]);

// 装饰性图片也可直接跳过读屏
<A11yImage src="https://picsum.photos/id/1015/500/300" alt="" />;`,rv=[{name:"装饰性图片",description:"decorative=true 时清空 alt 并设 aria-hidden，读屏跳过。",src:"https://picsum.photos/id/1015/500/300",config:{decorative:!0}},{name:"自定义 aria-label（字符串）",description:"为图片设置区别于 alt 的 aria-label。",src:"https://picsum.photos/id/1021/500/300",config:{ariaLabel:"商品主图"}},{name:"加载状态播报",description:"视觉隐藏区域以 aria-live 播报加载中/完成/失败。",src:"https://picsum.photos/id/1026/500/300",config:{statusText:{loading:"加载中…",loaded:"已加载",error:"加载失败"}}}],av=["装饰性图片 aria-hidden","自定义 aria-label（字符串或函数）","role=img 明确语义","aria-busy 随加载态切换","aria-live 状态播报（视觉隐藏）","可关闭"],iv=["无障碍合规（WCAG）","读屏器适配","装饰性背景图","加载状态可读"],sv=["ariaLabel 支持函数型，但静态预览仅支持字符串；函数用法见用法示例。"],lv={name:Zy,description:Jy,since:ev,tags:tv,config:nv,example:ov,examples:rv,features:av,useCases:iv,notes:sv},cv="AdaptiveQualityPlugin",uv="自适应画质：根据网络类型（effectiveType）与省流模式（saveData）动态调整图片质量参数，弱网/省流自动降质，支持 realtime 实时监听。",dv="2.0.0",pv=["other","网络","性能","省流量"],mv=[{name:"lowQ",type:"number",default:"40(2g/3g)",description:"低速网络质量值(1~100)"},{name:"highQ",type:"number",default:"80(4g)",description:"高速网络质量值(1~100)"},{name:"saveDataQuality",type:"number",default:"35",description:"省流模式质量值(1~100)"},{name:"overrideEffectiveType",type:'"4g" | "3g" | "2g" | "slow-2g"',default:"undefined",description:"Demo/测试覆盖网络类型"},{name:"overrideSaveData",type:"boolean",default:"undefined",description:"Demo/测试覆盖省流开关"},{name:"mode",type:'"once" | "realtime"',default:'"once"',description:"once 仅初始一次 / realtime 监听变化"}],gv=`const AqImage = withPlugins(LazyLoadImageCore, [
  createAdaptiveQualityPlugin({ lowQ: 45, highQ: 85, mode: "realtime" }),
]);

<AqImage src="https://picsum.photos/id/1015/500/300" alt="自适应画质示例" />;`,fv=[{name:"默认一次性调速",description:"初始按网络设置质量，加载一次。",src:"https://picsum.photos/id/1015/500/300",config:{mode:"once"}},{name:"实时监听网络",description:"mode=realtime，网络变化时自动重新计算质量。",src:"https://picsum.photos/id/1021/500/300",config:{mode:"realtime"}},{name:"模拟弱网降质",description:"overrideEffectiveType=2g，演示低速下自动降质。",src:"https://picsum.photos/id/1026/500/300",config:{overrideEffectiveType:"2g",overrideSaveData:!0}}],hv=["按网络类型调速","省流模式降质","realtime 实时监听","手动覆盖（Demo）","质量参数可配"],yv=["弱网体验优化","流量节省","全球 CDN 适配","移动端画质策略"],vv=["overrideEffectiveType / overrideSaveData 仅用于 Demo 测试覆盖真实网络信息；质量参数通过 URL ?q= 注入，适用于支持该参数的图床。"],bv={name:cv,description:uv,since:dv,tags:pv,config:mv,example:gv,examples:fv,features:hv,useCases:yv,notes:vv},wv="AltTextPlugin",xv="替代文本：当图片未提供 alt 时，按前缀或自定义 derive 函数自动生成 alt，提升可访问性与 SEO；已有 alt 则不覆盖。",Pv="2.0.0",$v=["a11y","可访问性","SEO"],Sv=[{name:"derive",type:"(src: string) => string",default:"undefined",description:"自定义推导函数（函数型，参见用法示例）"},{name:"prefix",type:"string",default:'"Image"',description:'默认推导前缀（如 "Image"）'}],Cv=`const AltImage = withPlugins(LazyLoadImageCore, [
  createAltTextPlugin({
    derive: (src) => \`图片 \${new URL(src).pathname}\`,
  }),
]);

// 不传 alt 时自动补全；传了 alt 则不覆盖
<AltImage src="https://picsum.photos/id/1015/500/300" alt="" />;`,kv=[{name:"默认前缀派生",description:"不传 alt，按 prefix 自动生成 alt。",src:"https://picsum.photos/id/1015/500/300",config:{prefix:"产品图"}},{name:"已有 alt 不覆盖",description:"传入 alt 时插件保留原值，不做替换。",src:"https://picsum.photos/id/1021/500/300",config:{prefix:"Image"}}],Lv=["alt 缺失自动派生","自定义前缀","自定义 derive 函数","不覆盖已有 alt"],Iv=["批量图片 alt 补全","SEO 优化","读屏适配","用户未填 alt 兜底"],_v=["derive 为函数型配置，静态预览仅支持 prefix；函数用法见用法示例。"],Ev={name:wv,description:xv,since:Pv,tags:$v,config:Sv,example:Cv,examples:kv,features:Lv,useCases:Iv,notes:_v},Rv="AnimatedCursorPlugin",zv="自定义光标动画：为图片叠加系统光标（放大镜/十字/抓手等）或自定义光标（圆点/圆环/加号）+ 跟随动画 + 点击涟漪 + 文字提示，纯 CSS+JS 无依赖。",Ov="2.0.0",Dv=["interaction","视觉效果与交互","visual"],Tv=[{name:"style",type:'"zoom-in" | "zoom-out" | "pointer" | "crosshair" | "move" | "grab" | "custom-dot" | "custom-ring" | "custom-plus" | "none"',default:'"zoom-in"',description:"光标样式"},{name:"enableFollower",type:"boolean",default:"true",description:"是否启用跟随光标"},{name:"followerColor",type:"string",default:'"rgba(59, 130, 246, 0.5)"',description:"跟随光标颜色"},{name:"followerSize",type:"number",default:"40",description:"跟随光标大小（px）"},{name:"followerDelay",type:"number",default:"0.1",description:"跟随延迟系数（越大越跟手）"},{name:"scaleOnHover",type:"boolean",default:"true",description:"悬停时跟随光标缩放"},{name:"hoverScale",type:"number",default:"1.5",description:"悬停缩放比例"},{name:"customIcon",type:"string",default:'""',description:"自定义光标图标 URL"},{name:"cursorText",type:"string",default:'""',description:"光标附带文字"},{name:"showRipple",type:"boolean",default:"false",description:"点击时产生涟漪"}],jv=`// 1. 放大镜光标 + 蓝色跟随圆点
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
});`,Av=[{name:"zoom-in 放大镜 + 跟随圆点",description:"系统放大镜光标，叠加半透明蓝色跟随圆点，暗示可放大查看。",src:"https://picsum.photos/id/110/400/300",config:{style:"zoom-in",enableFollower:!0,followerColor:"rgba(59,130,246,0.5)",followerSize:40}},{name:"custom-dot 自定义圆点 + 点击涟漪",description:"自定义圆点跟随光标，点击产生涟漪动画，互动感强。",src:"https://picsum.photos/id/119/400/300",config:{style:"custom-dot",showRipple:!0,followerSize:44,followerColor:"rgba(255,99,132,0.5)"}},{name:"custom-ring 圆环 + 文字提示",description:"圆环跟随光标并附带文字提示，适合“查看大图”引导。",src:"https://picsum.photos/id/122/400/300",config:{style:"custom-ring",cursorText:"查看大图",followerSize:56,followerColor:"rgba(16,185,129,0.6)"}},{name:"crosshair 十字光标",description:"十字准星光标，适合素材 / 设计类站点定位。",src:"https://picsum.photos/id/129/400/300",config:{style:"crosshair",enableFollower:!0,followerSize:36}},{name:"custom-plus 加号光标",description:"加号光标，强调“可添加 / 收藏”等操作。",src:"https://picsum.photos/id/133/400/300",config:{style:"custom-plus",enableFollower:!0,followerSize:40,scaleOnHover:!0}}],Mv=["10 种光标样式（系统光标 + 自定义圆点 / 圆环 / 加号）","跟随光标：颜色、大小、延迟系数可调","悬停时跟随光标缩放","点击涟漪动画","可附带文字提示","支持自定义图标 URL","纯 CSS + 轻量 JS，无依赖"],Bv=["商品详情放大预览","画廊 / 素材站点","设计工具类页面","交互演示与引导","收藏 / 添加操作的视觉暗示","创意作品集"],Nv=["效果需鼠标在图片上移动 / 悬停 / 点击才会体现，静态截图仅展示初始态。","移动端无指针设备，建议配合触摸反馈降级，或仅保留 enableFollower 等轻效果。"],Fv={name:Rv,description:zv,since:Ov,tags:Dv,config:Tv,example:jv,examples:Av,features:Mv,useCases:Bv,notes:Nv},Uv="AntiHotlinkPlugin",Wv="防盗链：为图片 URL 追加动态签名 token 或 referer 标记，配合域名白名单与 referer 校验，防止资源被第三方直链盗用。",Vv="2.0.0",Hv=["network","网络","防盗链","签名"],Gv=[{name:"allowedDomains",type:"string[]",description:"域名白名单；仅放行列表内域，其余源原样通过"},{name:"checkReferer",type:"boolean",default:"false",description:"无 referrer 时附加 ref=direct 标记（仅浏览器环境有效）"},{name:"generateToken",type:"(src: string) => string | undefined",description:"为 URL 生成签名 token（函数型，仅顶层示例展示）"},{name:"tokenParam",type:"string",default:'"token"',description:"追加到查询参数的键名"}],qv=`import { LazyLoadImageCore, createAntiHotlinkPlugin, withPlugins } from "vane-lazy-image";

const LazyImage = withPlugins(LazyLoadImageCore, [
  createAntiHotlinkPlugin({
    generateToken: (src) => signSrc(src),
    tokenParam: "sig",
    allowedDomains: ["images.example.com"],
  }),
]);

<LazyImage src="https://images.example.com/photo.jpg" alt="防盗链示例" />`,Qv=[{name:"白名单 + referer 校验",description:"仅放行 picsum.photos；无 referer 时附加 ref=direct 标记。",src:"https://picsum.photos/seed/hotlink/800/600",config:{allowedDomains:["picsum.photos"],checkReferer:!0}},{name:"仅域名白名单放行",description:"命中白名单则原样通过，否则不注入任何参数。",src:"https://picsum.photos/seed/hotlink-2/800/600",config:{allowedDomains:["picsum.photos"]}}],Kv=["generateToken 为 URL 追加签名参数，防直链盗用","allowedDomains 白名单：仅放行指定域，其余原样通过","checkReferer：无 referrer 时附加 ref=direct 标记","通用参数追加兜底（无 URL 对象时拼接 query）"],Yv=["OSS / 云存储等需签名才能访问的图片","限制仅本站 referer 可加载"],Xv=["generateToken 为函数型，无法进入静态预览配置，仅顶层示例展示","allowedDomains 为空时对所有源注入 token","checkReferer 仅在浏览器环境有效"],Zv={name:Uv,description:Wv,since:Vv,tags:Hv,config:Gv,example:qv,examples:Qv,features:Kv,useCases:Yv,notes:Xv},Jv="AspectRatioSpacerPlugin",e1="宽高比占位：在容器上预留固定宽高比，图片加载前后保持布局稳定，杜绝 CLS（布局抖动）。",t1="2.0.0",n1=["a11y","可访问性","视觉"],o1=[{name:"ratio",type:"number",default:"4/3",description:"宽/高比，如 4/3、16/9，或直接传数字"}],r1=`const RatioImage = withPlugins(LazyLoadImageCore, [
  createAspectRatioSpacerPlugin({ ratio: 4 / 3 }),
]);

<RatioImage src="https://picsum.photos/id/1015/500/300" alt="宽高比占位示例" />;`,a1=[{name:"4:3 占位",description:"常见图文比例，加载前后无跳动。",src:"https://picsum.photos/id/1015/500/300",config:{ratio:1.3333}},{name:"16:9 占位",description:"视频/横幅比例。",src:"https://picsum.photos/id/1021/500/300",config:{ratio:1.7778}},{name:"正方形占位",description:"ratio=1，头像/方形卡片。",src:"https://picsum.photos/id/1026/500/300",config:{ratio:1}}],i1=["预留宽高比","基于 CSS aspect-ratio","防布局抖动（CLS）","任意比例"],s1=["瀑布流/列表占位","LCP 稳定","移动端响应式","避免滚动跳动"],l1=["ratio 在静态预览中建议传数字（如 1.3333 表示 4/3），便于配置表与查看源码展示。"],c1={name:Jv,description:e1,since:t1,tags:n1,config:o1,example:r1,examples:a1,features:i1,useCases:s1,notes:l1},u1="AuthPlugin",d1="鉴权：为私有图片 URL 追加访问凭证 token（查询参数），并可配置 crossOrigin 与 referrerPolicy，满足需登录态才能访问的图片源鉴权需求。",p1="2.0.0",m1=["network","网络","鉴权","私有资源"],g1=[{name:"token",type:"string | (() => string | undefined)",description:"访问凭证；支持函数动态获取（函数型仅顶层示例展示）"},{name:"tokenParam",type:"string",description:"追加到查询参数的键名"},{name:"crossOrigin",type:'"anonymous" | "use-credentials"',description:"img 的 crossOrigin 属性"},{name:"referrerPolicy",type:"React.HTMLAttributeReferrerPolicy",description:"img 的 referrerPolicy 属性"}],f1=`import { LazyLoadImageCore, createAuthPlugin, withPlugins } from "vane-lazy-image";

const LazyImage = withPlugins(LazyLoadImageCore, [
  createAuthPlugin({
    token: () => getAccessToken(),
    tokenParam: "token",
    crossOrigin: "anonymous",
  }),
]);

<LazyImage src="https://private.example.com/photo.jpg" alt="鉴权示例" />`,h1=[{name:"静态 token",description:"为图片 URL 追加固定访问凭证参数。",src:"https://picsum.photos/seed/auth/800/600",config:{token:"sk-demo-123",tokenParam:"token"}},{name:"跨域 + 无 referrer",description:"追加凭证的同时配置跨域与 referrer 策略。",src:"https://picsum.photos/seed/auth-2/800/600",config:{token:"sk-demo-123",crossOrigin:"anonymous",referrerPolicy:"no-referrer"}}],y1=["为图片 URL 追加 token 查询参数完成鉴权","支持 crossOrigin / referrerPolicy 跨域鉴权配置","token 支持函数动态获取（如刷新令牌）"],v1=["需登录态才能访问的私有图片 / 云存储","带鉴权的用户头像 / 相册"],b1=["token 函数型仅顶层示例展示；静态字符串可直接用于静态预览","与 AntiHotlink 区别：Auth 注入访问凭证，AntiHotlink 注入防盗链签名，二者可叠加","tokenParam 已存在则不重复追加"],w1={name:u1,description:d1,since:p1,tags:m1,config:g1,example:f1,examples:h1,features:y1,useCases:v1,notes:b1},x1="BadgePlugin",P1="角标徽章：在图片四角或中心叠加文字徽章，可按加载状态（always/loading/loaded/error）显示，支持自定义文字、颜色、字号与形状。",$1="2.0.0",S1=["other","视觉","徽标"],C1=[{name:"text",type:"string | ((context) => string)",default:'"Badge"',description:"徽章文字（支持函数动态生成）"},{name:"position",type:'"top-left" | "top-right" | "bottom-left" | "bottom-right" | "center"',default:'"top-left"',description:"徽章位置（四角或中心）"},{name:"bgColor",type:"string",default:'"rgba(0,0,0,0.6)"',description:"背景色"},{name:"color",type:"string",default:'"#fff"',description:"文字色"},{name:"fontSize",type:"number",default:"12",description:"字号(px)"},{name:"padding",type:"string",default:'"2px 6px"',description:"内边距"},{name:"borderRadius",type:"number",default:"4",description:"圆角(px)"},{name:"zIndex",type:"number",default:"3",description:"层级"},{name:"showWhen",type:'"always" | "loading" | "loaded" | "error"',default:'"loaded"',description:"显示时机"},{name:"enabled",type:"boolean",default:"true",description:"是否启用"}],k1=`const BadgeImage = withPlugins(LazyLoadImageCore, [
  createBadgePlugin({ text: "NEW", position: "top-left", bgColor: "#c62828", showWhen: "always" }),
]);

<BadgeImage src="https://picsum.photos/id/1015/500/300" alt="角标示例" />;`,L1=[{name:"常驻徽标",description:"左上角红色 NEW 徽标，始终显示。",src:"https://picsum.photos/id/1015/500/300",config:{text:"NEW",position:"top-left",bgColor:"#c62828",showWhen:"always"}},{name:"加载时显示",description:"加载中显示 Loading 徽标，加载完成隐藏。",src:"https://picsum.photos/id/1021/500/300",config:{text:"Loading",position:"top-right",bgColor:"rgba(0,0,0,0.6)",showWhen:"loading"}},{name:"加载成功后显示",description:"加载完成后显示 Done 徽标。",src:"https://picsum.photos/id/1026/500/300",config:{text:"Done",position:"bottom-right",bgColor:"#2e7d32",showWhen:"loaded"}},{name:"自定义样式",description:"橙色大字号圆角徽标，居中。",src:"https://picsum.photos/id/1031/500/300",config:{text:"HOT",position:"center",bgColor:"#b35c00",color:"#fff",fontSize:16,borderRadius:20}}],I1=["角标 / 中心两种布局","五位置（四角 + 中心）","按加载状态显示","自定义文字/颜色/字号/圆角","支持函数文案","可关闭"],_1=["商品标签","状态提示","进度/完成标记","活动角标"],E1=["text 支持函数型（按 context 动态生成），静态预览仅支持字符串；函数用法见用法示例。"],R1={name:x1,description:P1,since:$1,tags:S1,config:C1,example:k1,examples:L1,features:I1,useCases:_1,notes:E1},z1="BatteryAwarePlugin",O1="电量感知：当设备电量低于阈值或开启省流模式时，自动将图片请求宽度降级并禁用预连接，兼顾体验与续航/流量。",D1="2.0.0",T1=["other","加载策略","性能","省流量"],j1=[{name:"enabled",type:"boolean",default:"true",description:"是否启用"},{name:"lowBatteryThreshold",type:"number",default:"0.2",description:"低电量阈值(0~1)"},{name:"downgradeWidth",type:"number",default:"640",description:"降级时的请求宽度(px)"},{name:"disablePreconnect",type:"boolean",default:"true",description:"低电量时是否禁用预连接"}],A1=`const BatteryImage = withPlugins(LazyLoadImageCore, [
  createBatteryAwarePlugin({ lowBatteryThreshold: 0.3, downgradeWidth: 480 }),
]);

<BatteryImage src="https://picsum.photos/id/1015/500/300" alt="电量感知示例" />;`,M1=[{name:"默认降级",description:"电量<20% 或省流时降宽至 640 并禁用预连接。",src:"https://picsum.photos/id/1015/500/300",config:{enabled:!0}},{name:"放宽阈值",description:"电量<30% 才降级，更保守。",src:"https://picsum.photos/id/1021/500/300",config:{lowBatteryThreshold:.3}},{name:"保留预连接",description:"disablePreconnect=false，降级时仍允许预连接。",src:"https://picsum.photos/id/1026/500/300",config:{disablePreconnect:!1}}],B1=["低电量自动降宽","省流模式联动","可禁用预连接","可关闭"],N1=["移动端续航优化","流量节省","弱网/低电场景","全球低端设备"],F1=["依赖 navigator.getBattery() 与网络 saveData；不支持的环境（如桌面/无该 API）不降级，不影响加载。"],U1={name:z1,description:O1,since:D1,tags:T1,config:j1,example:A1,examples:M1,features:B1,useCases:N1,notes:F1},W1="BlurUpPlugin",V1="模糊放大占位：加载期为图片注入 blur 滤镜，加载成功后过渡到清晰，避免「白屏 → 清晰图」的突兀切换。",H1="2.0.0",G1=["visual","视觉"],q1=[{name:"startBlur",type:"number",default:"8",description:"起始模糊半径 px"},{name:"endBlur",type:"number",default:"0",description:"结束模糊半径 px"},{name:"durationMs",type:"number",default:"400",description:"过渡时长 ms"}],Q1=`// 模糊渐显：从 8px 模糊过渡到清晰
const BlurImage = withPlugins(LazyLoadImageCore, [
  createBlurUpPlugin({
    startBlur: 8,
    endBlur: 0,
    durationMs: 450,
  }),
]);

<BlurImage src="https://picsum.photos/seed/blurup/600/400" alt="模糊渐显" />;`,K1=[{name:"柔和模糊渐显",description:"8px 起始模糊，450ms 平滑过渡到清晰。",src:"https://picsum.photos/seed/blurup-soft/600/400",config:{startBlur:8,endBlur:0,durationMs:450}},{name:"强模糊长过渡",description:"16px 大模糊，700ms 慢过渡，营造「水雾散去」感。",src:"https://picsum.photos/seed/blurup-strong/600/400",config:{startBlur:16,endBlur:0,durationMs:700}}],Y1=["加载期模糊占位，避免白屏突兀","加载成功平滑过渡到清晰","起始 / 结束模糊与时长可调","常与 Skeleton / LQIP 配合"],X1=["图片画廊 / 相册","首屏大图加载","内容型站点图片过渡","与骨架屏互补的视觉占位"],Z1=["与 Skeleton 叠加时建议 blur 图层级略高于骨架，过渡更自然。","durationMs 过大会让「清晰」显得迟缓，一般 300~500ms 为宜。"],J1={name:W1,description:V1,since:H1,tags:G1,config:q1,example:Q1,examples:K1,features:Y1,useCases:X1,notes:Z1},eb="BorderGlowPlugin",tb="边框光晕：加载成功后为卡片应用发光阴影，悬停时增强。",nb="2.0.0",ob=["visual","视觉"],rb=[{name:"color",type:"string",default:"rgba(0, 153, 255, 0.6)",description:"辉光颜色"},{name:"blurPx",type:"number",default:"12",description:"辉光模糊半径 px"},{name:"spreadPx",type:"number",default:"2",description:"辉光扩散 px"},{name:"hoverMultiplier",type:"number",default:"1.4",description:"悬停时辉光强度倍数"}],ab=`// 加载成功后卡片发光，悬停增强
const GlowImage = withPlugins(LazyLoadImageCore, [
  createBorderGlowPlugin({
    color: "rgba(0, 153, 255, 0.6)",
    blurPx: 12,
    spreadPx: 2,
    hoverMultiplier: 1.4,
  }),
]);

<GlowImage src="https://picsum.photos/seed/glow/600/400" alt="边框辉光" />;`,ib=[{name:"基础辉光",description:"蓝色柔光，悬停轻微增强，突出主体卡片。",src:"https://picsum.photos/seed/glow-basic/600/400",config:{color:"rgba(0, 153, 255, 0.6)",blurPx:12,spreadPx:2,hoverMultiplier:1.4}},{name:"强霓虹辉光",description:"品红大模糊半径，悬停强度放大约 1.6 倍。",src:"https://picsum.photos/seed/glow-neon/600/400",config:{color:"rgba(255, 0, 128, 0.7)",blurPx:24,spreadPx:4,hoverMultiplier:1.6}},{name:"柔和暖光",description:"暖橙色低饱和辉光，适配温馨主题。",src:"https://picsum.photos/seed/glow-warm/600/400",config:{color:"rgba(255, 170, 0, 0.5)",blurPx:18,spreadPx:2,hoverMultiplier:1.3}}],sb=["加载成功后自动为卡片加发光阴影","悬停增强辉光强度","颜色 / 模糊 / 扩散均可调","智能定位外层卡片，避免被父容器 overflow 裁剪","卸载时自动还原原始阴影"],lb=["商品主图聚焦","精选 / 推荐位强调","卡片悬停交互反馈","暗色背景下的视觉点睛"],cb=["辉光优先作用在外层卡片（向上两层），以规避父容器 overflow:hidden 把光晕裁掉。","插件在 onUnmount 还原原始 box-shadow，不会污染其它样式。","与 CustomEffects 的 containerStyle 叠加时，两者都会合并进容器样式。"],ub={name:eb,description:tb,since:nb,tags:ob,config:rb,example:ab,examples:ib,features:sb,useCases:lb,notes:cb},db="CDNFallbackPlugin",pb="CDN 回退：主 CDN 域名加载失败时，按序切换备用 CDN 域名（保留路径与查询参数），实现跨厂商容灾，避免单点故障导致破图。",mb="2.0.0",gb=["network","网络","CDN","容灾"],fb=[{name:"cdnBases",type:"string[]",description:'备用 CDN 基址列表，首个即主用 CDN。e.g. ["https://cdn1.example.com", "https://cdn2.example.com"]'}],hb=`import { LazyLoadImageCore, createCDNFallbackPlugin, withPlugins } from "vane-lazy-image";

const LazyImage = withPlugins(LazyLoadImageCore, [
  createCDNFallbackPlugin({
    cdnBases: ["https://cdn1.example.com", "https://cdn2.example.com"],
  }),
]);

<LazyImage src="https://cdn0.example.com/photo.jpg" alt="CDN 回退示例" />`,yb=[{name:"多 CDN 回退",description:"主用 picsum.photos 命中；真实故障场景填入备用域名可自动切换（演示用同源避免 404）。",src:"https://picsum.photos/seed/cdn/800/600",config:{cdnBases:["https://picsum.photos","https://fastly.picsum.photos"]}}],vb=["onLoad 用 cdnBases[0] 作为主用 CDN 重写 host","onLoadError 按序切换下一个 CDN 并改写 img.src 触发重试","切换时保留路径 / 查询参数，附加 cdnFallback 缓存破坏参数"],bb=["多活 CDN、跨云厂商容灾","主源站故障时无缝切到备用源"],wb=["cdnBases 为必填，首个即主用 CDN","演示用同源 CDN 避免 404；生产请填入真实备用域名，主域失败会自动切换","切换逻辑替换协议 / host / port，路径与 query 不变"],xb={name:db,description:pb,since:mb,tags:gb,config:fb,example:hb,examples:yb,features:vb,useCases:bb,notes:wb},Pb="CacheIDBPlugin",$b="IndexedDB 持久缓存：跨会话缓存图片 Blob/dataURL，支持 TTL。",Sb="2.0.0",Cb=["cache","缓存"],kb=[{name:"enabled",type:"boolean",default:"true",description:"是否启用 IndexedDB 缓存（关闭后每次都走网络）"},{name:"dbName",type:"string",default:'"LLI-Cache"',description:"IndexedDB 数据库名，多实例共用同一个库"},{name:"storeName",type:"string",default:'"images"',description:"对象仓库名，缓存条目存在该 store 下"},{name:"ttlMs",type:"number",default:"604800000",description:"过期时间（毫秒）"},{name:"debug",type:"boolean",description:"是否输出读写 / 命中调试日志"}],Lb=`const LazyImage = withPlugins(LazyLoadImageCore, [
  createIDBCachePlugin({
    dbName: "LLI-Cache",
    storeName: "images",
    ttlMs: 7 * 24 * 60 * 60 * 1000, // 7 天
  }),
]);`,Ib=[{name:"默认持久缓存",description:"跨会话缓存图片 Blob，刷新 / 重开应用仍命中，秒开头部图。",config:{ttlMs:6048e5}},{name:"自定义库与过期",description:"独立库名隔离业务数据，30 天过期。",config:{dbName:"App-Img",storeName:"photos",ttlMs:2592e6}}],_b=["用 IndexedDB 持久化图片 Blob / dataURL","支持 TTL（默认 7 天），过期自动清理","优先存 Blob，其次 dataURL，节省空间"],Eb=["离线优先 / PWA 图片缓存","重开应用仍需秒开的头部图、用户头像"],Rb=["仅在支持 IndexedDB 的环境生效，SSR / Node 端无副作用。","与 CachePrewarmPlugin 配合可实现“进入视口即落盘”。","多实例请使用不同 dbName / storeName 避免相互覆盖。"],zb={name:Pb,description:$b,since:Sb,tags:Cb,config:kb,example:Lb,examples:Ib,features:_b,useCases:Eb,notes:Rb},Ob="CacheMemoryPlugin",Db="内存 LRU 缓存：会话内缓存图片数据，可配置容量与过期时间。",Tb="2.0.0",jb=["cache","缓存"],Ab=[{name:"enabled",type:"boolean",default:"true",description:"是否启用内存缓存"},{name:"maxEntries",type:"number",default:"200",description:"LRU 最大条目"},{name:"ttlMs",type:"number",description:"过期时间，默认不过期"},{name:"debug",type:"boolean",default:"false",description:"是否输出 LRU 命中 / 淘汰调试日志"}],Mb=`const LazyImage = withPlugins(LazyLoadImageCore, [
  createMemoryCachePlugin({
    maxEntries: 300,
    ttlMs: 5 * 60 * 1000, // 5 分钟过期
  }),
]);`,Bb=[{name:"默认内存缓存",description:"会话内 LRU 缓存（默认 200 条），同一图片重复访问零网络。",config:{maxEntries:200}},{name:"限定过期时间",description:"5 分钟后条目失效，在命中率与内存占用之间取得平衡。",config:{maxEntries:300,ttlMs:3e5}}],Nb=["会话内 LRU 缓存（默认 200 条）","可选 TTL 过期时间","内存受限时自动淘汰最久未用条目"],Fb=["同一图片在列表 / 详情多处复用","快速来回切换的画廊、相册"],Ub=["内存缓存不跨会话，刷新页面即失效。","需要跨会话持久请配合 IDBCachePlugin。","命中时直接返回已缓存数据，跳过网络请求。"],Wb={name:Ob,description:Db,since:Tb,tags:jb,config:Ab,example:Mb,examples:Bb,features:Nb,useCases:Fb,notes:Ub},Vb="CachePrewarmPlugin",Hb="缓存预热：进入视口或挂载时把图片预热到内存/IDB 缓存。",Gb="2.0.0",qb=["cache","缓存"],Qb=[{name:"enabled",type:"boolean",default:"true",description:"是否启用预热"},{name:"trigger",type:'"enter" | "mount"',default:'"enter"',description:"触发时机：进入视口或挂载"},{name:"preferMemory",type:"boolean",default:"true",description:"预热时优先写内存"},{name:"debug",type:"boolean",default:"false",description:"是否输出预热调试日志"},{name:"showBadge",type:"boolean",default:"false",description:"是否在卡片上显示预热状态徽标（便于观察）"}],Kb=`const LazyImage = withPlugins(LazyLoadImageCore, [
  createCachePrewarmPlugin({
    trigger: "enter",    // 进入视口即预热
    preferMemory: true,  // 优先写入内存缓存
  }),
]);`,Yb=[{name:"进入视口预热",description:"图片刚进视口就提前取回并写入缓存，滚动时无等待、点击放大秒开。",config:{trigger:"enter",preferMemory:!0,showBadge:!0}},{name:"挂载即预热",description:"组件挂载即预热，适合首屏已知必看的图（如详情页主图）。",config:{trigger:"mount",preferMemory:!1}}],Xb=["进入视口 / 挂载时提前 fetch 并写入 Memory / IDB 缓存","内置重入保护（prewarming / prewarmed 集合），避免重复预热","优先写入内存（objectURL），跨会话持久交给 IDB"],Zb=["商品详情页主图：进入视口即预热，查看大图零延迟","轮播首图：挂载即预热，切换时无白屏"],Jb=["依赖 MemoryCachePlugin / IDBCachePlugin 提供底层存储。","预热失败或超时（10s）不影响正常加载，仅跳过预热。","与 CacheIDBPlugin 配合可实现“进入视口即落盘”。"],ew={name:Vb,description:Hb,since:Gb,tags:qb,config:Qb,example:Kb,examples:Yb,features:Xb,useCases:Zb,notes:Jb},tw="CaptionPlugin",nw="图片说明文字覆盖层，支持样式定制。",ow="2.0.0",rw=["visual","视觉"],aw=[{name:"text",type:"string | ((src?: string) => string)",default:'""',description:"说明文字；可传函数按 src 派生"},{name:"position",type:'"top" | "bottom"',default:'"bottom"',description:"文字位置"},{name:"bg",type:"string",default:"rgba(0,0,0,0.62)",description:"背景色"},{name:"color",type:"string",default:"#fff",description:"文字颜色"}],iw=`// 底部说明文字
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
});`,sw=[{name:"底部说明",description:"半透明黑底白字，落在图片底部作图注。",src:"https://picsum.photos/seed/cap-bottom/600/400",config:{text:"日落海岸线",position:"bottom"}},{name:"顶部标题条",description:"顶部深色背景条，作标题 / 分类标签。",src:"https://picsum.photos/seed/cap-top/600/400",config:{text:"Gallery • 2026",position:"top",bg:"rgba(0,0,0,0.6)",color:"#fff"}},{name:"暖色图注",description:"自定义暖色背景与文字色，贴合活动主题。",src:"https://picsum.photos/seed/cap-warm/600/400",config:{text:"限时特惠",position:"bottom",bg:"rgba(160,48,16,0.88)",color:"#fff"}}],lw=["顶部 / 底部两种位置","背景与文字颜色可定制","文本支持静态或函数动态派生","作为覆盖层渲染，不干扰图片本身"],cw=["图库 / 相册图注","新闻 / 博客配图说明","商品图标题条","活动海报角标文字"],uw=["text 传函数时可按 src 动态生成，但场景示例画廊使用静态文本以保证实时预览。","与 OverlayInfo 的区别：Caption 聚焦单一说明文案，OverlayInfo 更通用（任意文本 + 触发时机）。"],dw={name:tw,description:nw,since:ow,tags:rw,config:aw,example:iw,examples:sw,features:lw,useCases:cw,notes:uw},pw="CarouselPlugin",mw="自动轮播（gallery 增强插件）：在工具条渲染 播放/暂停 按钮，按 interval 循环切换主图；悬停图集根容器可暂停。",gw="2.1.0",fw=["gallery","图集","轮播","自动播放"],hw=[{name:"interval",type:"number",default:"3000",description:"每帧停留时长（ms）"},{name:"autoStart",type:"boolean",default:"false",description:"初始是否自动播放"},{name:"pauseOnHover",type:"boolean",default:"true",description:"悬停图集根容器时暂停"}],yw=`import { GalleryCore } from "vane-lazy-image/gallery";
import { createCarouselPlugin } from "vane-lazy-image/custom-plugins/CarouselPlugin";

<GalleryCore images={images} plugins={[createCarouselPlugin({ interval: 2500 })]} />`,vw=[{name:"自动轮播",description:"点击 播放 后每 2.5s 切换一张，悬停图集暂停；计数/指示点同步刷新。",config:{interval:2500,autoStart:!0}}],bw=["播放/暂停按钮","循环切换主图","悬停暂停","与计数/指示点同步"],ww=["商品自动展示","首页轮播图集","展品巡览"],xw=["len<2 时不渲染按钮；activeIndex 为协调态，轮播时缩略条/指示点同步。"],Pw={name:pw,description:mw,since:gw,tags:fw,config:hw,example:yw,examples:vw,features:bw,useCases:ww,notes:xw},$w="ColorExtractionPlugin",Sw="主色提取：canvas 采样图片主色，可设置容器背景或显示色卡。",Cw="2.0.0",kw=["visual","视觉"],Lw=[{name:"setContainerBg",type:"boolean",default:"true",description:"是否把容器背景设为主色"},{name:"sampleSize",type:"number",default:"4",description:"采样步长 px，越大越快越不精确"},{name:"showOverlay",type:"boolean",default:"true",description:"是否在右上角显示主色卡"}],Iw=`// 提取主色填充容器 + 显示色卡
const TintImage = withPlugins(LazyLoadImageCore, [
  createColorExtractionPlugin({
    setContainerBg: true,
    sampleSize: 4,
    showOverlay: true,
  }),
]);

<TintImage src="https://picsum.photos/seed/color/600/400" alt="主色提取" crossOrigin="anonymous" />;`,_w=[{name:"主色填充容器 + 色卡",description:"提取主色作为卡片背景，并在右上角显示色卡。",src:"https://picsum.photos/seed/color-full/600/400",config:{setContainerBg:!0,sampleSize:4,showOverlay:!0}},{name:"仅色卡",description:"不改动容器背景，只在角上显示提取到的主色卡。",src:"https://picsum.photos/seed/color-chip/600/400",config:{setContainerBg:!1,showOverlay:!0}}],Ew=["canvas 采样主色","可选填充容器背景","可选角标色卡展示","采样精度 / 速度可调"],Rw=["按图自动配色（背景 / 阴影）","色彩主题联动","色卡 / 调色板展示","设计工具取色"],zw=['读取像素需在 <img> 上设置 crossOrigin="anonymous"，且图片服务器需允许跨域，否则 canvas 被污染无法取色（会静默失败）。',"sampleSize 越大采样越稀疏、越快但越不精确。"],Ow={name:$w,description:Sw,since:Cw,tags:kw,config:Lw,example:Iw,examples:_w,features:Ew,useCases:Rw,notes:zw},Dw="ColorSwatchPlugin",Tw="颜色选择器：自动提取商品图片主要颜色，支持交互选择、颜色代码显示与悬停放大。",jw="2.0.0",Aw=["ecommerce","电商核心"],Mw=[{name:"maxColors",type:"number",default:"5",description:"提取颜色数量上限"},{name:"showPalette",type:"boolean",default:"true",description:"是否显示色板"},{name:"position",type:'"bottom" | "overlay" | "bottom-center"',default:'"bottom"',description:"色板位置"},{name:"swatchSize",type:"number",default:"32",description:"色块尺寸（px）"},{name:"interactive",type:"boolean",default:"true",description:"是否可点击选择"},{name:"showColorCode",type:"boolean",default:"false",description:"是否显示 HEX 代码"},{name:"gap",type:"number",default:"8",description:"色块间距（px）"},{name:"onColorSelect",type:"(color) => void",default:"undefined",description:"颜色选择回调"},{name:"style",type:"React.CSSProperties",default:"{}",description:"自定义叠加样式"}],Bw=`// 1. 可交互色板（点击选择颜色）
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
<SwatchImage src="https://picsum.photos/id/100/500/400" alt="服装图" />;`,Nw=[{name:"底部色板（可交互）",description:"点击色块可选择颜色，悬停放大。",src:"https://picsum.photos/id/100/500/400",config:{maxColors:6,showPalette:!0,position:"bottom",interactive:!0,swatchSize:36}},{name:"居中叠加",description:"色板居中浮于图片之上。",src:"https://picsum.photos/id/106/500/400",config:{maxColors:5,showPalette:!0,position:"overlay",interactive:!0,swatchSize:40,gap:10}},{name:"显示颜色代码",description:"每个色块下方显示 HEX 代码。",src:"https://picsum.photos/id/116/500/400",config:{maxColors:5,showPalette:!0,position:"bottom-center",interactive:!0,swatchSize:32,showColorCode:!0,gap:12}},{name:"多颜色小色块",description:"更多颜色、更小色块、更小间距。",src:"https://picsum.photos/id/129/500/400",config:{maxColors:8,showPalette:!0,position:"bottom",interactive:!0,swatchSize:24,gap:6}}],Fw=["跨域提示：本示例使用的 picsum.photos 图片没有 CORS 头，无法提取真实颜色，当前显示的是默认演示色。实际使用中请确保图片服务器配置了正确的 CORS 头，或使用同域图片，插件才能正确提取图片的真实颜色。"],Uw=["自动提取图片主要颜色","智能过滤黑白和透明色","可配置提取颜色数量","3 种显示位置（底部 / 居中 / 底部居中）","交互式颜色选择","显示 HEX 颜色代码","悬停放大效果","选中状态标识"],Ww=["服装多颜色选择","艺术品 / 设计作品配色","家具 / 装饰品颜色筛选","鞋包配色选择","礼品个性化定制"],Vw={name:Dw,description:Tw,since:jw,tags:Aw,config:Mw,example:Bw,examples:Nw,notes:Fw,features:Uw,useCases:Ww},Hw="ComparisonPlugin",Gw="前后对比（v2 真实实现）：用可拖拽分隔条对比 beforeSrc / afterSrc 两张图，拖动实时比较差异（如调色前后、装修前后、A/B 图）。不再是写死文字角标。",qw="2.0.0",Qw=["other","视觉","对比","交互"],Kw=[{name:"beforeSrc",type:"string",default:"主图 src",description:"左侧（拖动前）对比图；默认用主图"},{name:"afterSrc",type:"string",default:"主图 src",description:"右侧（拖动后）对比图；默认用主图"},{name:"labelBefore",type:"string",default:"前",description:"左图标签文字"},{name:"labelAfter",type:"string",default:"后",description:"右图标签文字"},{name:"start",type:"number",default:"0.5",description:"初始分割位置（0~1）"}],Yw=`const CompareImage = withPlugins(LazyLoadImageCore, [
  createComparisonPlugin({
    beforeSrc: "https://picsum.photos/id/1015/800/600",
    afterSrc: "https://picsum.photos/id/1016/800/600",
    labelBefore: "原图", labelAfter: "处理后",
  }),
]);

<CompareImage src="https://picsum.photos/id/1016/800/600" alt="前后对比示例" />;`,Xw=[{name:"基础对比",description:"提供 beforeSrc / afterSrc 两张图，拖动中间把手即可对比。",src:"https://picsum.photos/id/1016/800/600",config:{beforeSrc:"https://picsum.photos/id/1015/800/600",afterSrc:"https://picsum.photos/id/1016/800/600",labelBefore:"原图",labelAfter:"处理后"}},{name:"自定义起始位置",description:"start=0.3 让初始分割更偏左。",src:"https://picsum.photos/id/1021/800/600",config:{beforeSrc:"https://picsum.photos/id/1020/800/600",afterSrc:"https://picsum.photos/id/1021/800/600",start:.3}},{name:"单图自对比（调色）",description:"只传 afterSrc，before 用主图，演示同一张图的两种状态。",src:"https://picsum.photos/id/1025/800/600",config:{afterSrc:"https://picsum.photos/id/1025/800/600",labelBefore:"原图",labelAfter:"滤镜"}}],Zw=["可拖拽分隔条对比两图（指针/触摸）","左右标签可自定义","初始分割位置可调","左图按分割宽度自适应裁剪，始终铺满容器"],Jw=["装修前后 / 调色前后对比","A/B 图组对比","图像增强效果演示","教学 / 设计稿对照"],ex=["v2 起为真实拖拽交互，旧版仅渲染写死文字角标。对比层覆盖在 Core 主图之上，拖动区域占满容器。"],tx={name:Hw,description:Gw,since:qw,tags:Qw,config:Kw,example:Yw,examples:Xw,features:Zw,useCases:Jw,notes:ex},nx="ConcurrencyControlPlugin",ox="并发控制：限制同时加载数量，支持按域名分片与网络自适应。",rx="2.0.0",ax=["loading","加载策略"],ix=[{name:"maxConcurrent",type:"number",default:"4",description:"并发上限（4g 情况的上限）"},{name:"scope",type:'"global" | "perHost"',default:'"global"',description:"作用域：全局或按域名分片"},{name:"adaptive",type:"boolean",default:"true",description:"是否根据网络自适应并发（saveData/2g/3g 降低并发）"},{name:"acquireTimeoutMs",type:"number",default:"8000",description:"获取并发许可的超时（毫秒），超时后不阻塞加载，避免饥饿"},{name:"debug",type:"boolean",default:"false",description:"调试输出"}],sx=`const LazyImage = withPlugins(LazyLoadImageCore, [
  createConcurrencyControlPlugin({
    maxConcurrent: 6,
    scope: "perHost", // 按域名分片，避免单域阻塞
    adaptive: true,    // 弱网自动降低并发
  }),
]);`,lx=[{name:"全局并发限制",description:"限制整页同时加载不超过 4 张，避免带宽被瞬间打满。",config:{maxConcurrent:4,scope:"global"}},{name:"按域名分片",description:"每个域名独立并发配额，混合多 CDN 时不互相拖累。",config:{maxConcurrent:6,scope:"perHost",adaptive:!0}}],cx=["全局或按域名（perHost）分片并发门控","弱网（saveData / 2g / 3g）下自适应降低并发","acquireTimeoutMs 后不阻塞加载，避免饥饿"],ux=["瀑布流海量图片，避免一次性发起上百请求","弱网环境限制并发以保住首屏体验"],dx=["acquireTimeoutMs 保证极端情况下不会永久挂起。","与 ScrollIdle 搭配可进一步错峰、降低峰值并发。","并发许可在加载完成后释放，供队列中下一张使用。"],px={name:nx,description:ox,since:rx,tags:ax,config:ix,example:sx,examples:lx,features:cx,useCases:ux,notes:dx},mx="CounterPlugin",gx="图片计数指示器（gallery 增强插件）：在工具条渲染「当前 / 总数」，绑定 activeIndex。",fx="2.1.0",hx=["gallery","图集","计数","指示器"],yx=[{name:"prefix",type:"string",default:"",description:"前缀文案"},{name:"separator",type:"string",default:" / ",description:"当前与总数之间的分隔符"}],vx=`import { GalleryCore } from "vane-lazy-image/gallery";
import { createCounterPlugin } from "vane-lazy-image/custom-plugins/CounterPlugin";

<GalleryCore images={images} plugins={[createCounterPlugin()]} />`,bx=[{name:"基础计数",description:"工具条显示「3 / 8」，随 activeIndex 刷新。",config:{}}],wx=["当前/总数计数","绑定 activeIndex","tabular-nums 等宽数字"],xx=["电商商品图集","相册","多图轮播"],Px=["与 ThumbSync / Indicator 共用同一 activeIndex 协调态。"],$x={name:mx,description:gx,since:fx,tags:hx,config:yx,example:vx,examples:bx,features:wx,useCases:xx,notes:Px},Sx="CropPlugin",Cx="焦点裁剪：通过 object-fit: cover 与 object-position 将裁剪焦点设在指定相对坐标，统一多图主体构图。",kx="2.0.0",Lx=["other","视觉","裁剪"],Ix=[{name:"enabled",type:"boolean",default:"true",description:"是否启用裁剪"},{name:"focusPoint",type:"{ x: number; y: number }",default:"{ x: 0.5, y: 0.5 }",description:"裁剪焦点(0~1 相对坐标)"},{name:"showLabel",type:"boolean",default:"true",description:"是否在图片左上角显示焦点标识（生产版式建议关闭）"}],_x=`const CropImage = withPlugins(LazyLoadImageCore, [
  createCropPlugin({ focusPoint: { x: 0.3, y: 0.4 } }),
]);

<CropImage src="https://picsum.photos/id/1015/500/300" alt="焦点裁剪示例" />;`,Ex=[{name:"居中焦点（默认）",description:"x=0.5,y=0.5，主体居中裁切。",src:"https://picsum.photos/id/1015/500/300",config:{focusPoint:{x:.5,y:.5}}},{name:"左上方焦点",description:"x=0.3,y=0.3，主体偏左上裁切。",src:"https://picsum.photos/id/1021/500/300",config:{focusPoint:{x:.3,y:.3}}},{name:"右下焦点",description:"x=0.7,y=0.7，突出右下主体。",src:"https://picsum.photos/id/1026/500/300",config:{focusPoint:{x:.7,y:.7}}}],Rx=["object-position 焦点裁剪","cover 填充","任意焦点坐标","可关闭","overlay 标识焦点（showLabel 可关）"],zx=["头像/封面统一构图","商品主图裁剪","列表缩略图","跨尺寸适配"],Ox=["当前为最小实现：通过 CSS object-position 模拟裁剪焦点；加载容器需固定宽高以体现裁切效果。","showLabel: false 可隐藏左上角焦点标识，适合直接接入真实版式。"],Dx={name:Sx,description:Cx,since:kx,tags:Lx,config:Ix,example:_x,examples:Ex,features:Rx,useCases:zx,notes:Ox},Tx="CustomEffectsPlugin",jx="自定义效果逃逸舱：把内置视觉插件覆盖不到的任意 CSS 效果（filter / transform / transition / className）直接注入图片与容器，无需新造组件。旧版 CustomEffects 展示页的 v2 等效形态。",Ax="2.0.0",Mx=["visual","视觉","自定义"],Bx=[{name:"imageStyle",type:"React.CSSProperties",default:"{}",description:'应用到 <img> 的任意内联样式，如 { filter: "contrast(1.2) saturate(1.4)" }'},{name:"imageClassName",type:"string",default:'""',description:"附加到 <img> 的 className"},{name:"containerStyle",type:"React.CSSProperties",default:"{}",description:"应用到容器（卡片）的任意内联样式"},{name:"containerClassName",type:"string",default:'""',description:"附加到容器的 className"},{name:"hoverImageStyle",type:"React.CSSProperties",default:"{}",description:'悬停时叠加到 <img> 的样式（移出还原），如 { transform: "scale(1.08)" }'}],Nx=`// 任意 CSS 效果逃逸舱：内置插件没有的视觉，直接以样式注入
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

<ArtImage src="https://picsum.photos/seed/custom/600/400" alt="自定义效果" />;`,Fx=[{name:"复古胶片滤镜（静态）",description:"sepia + 对比度 + 饱和度组合，模拟胶片质感，并给容器加圆角。",src:"https://picsum.photos/seed/custom-film/600/400",config:{imageStyle:{filter:"sepia(0.45) contrast(1.1) saturate(1.3)",transition:"filter 240ms ease"},containerStyle:{borderRadius:16,overflow:"hidden",boxShadow:"0 6px 20px rgba(0,0,0,0.18)"}}},{name:"悬停放大 + 轻微旋转",description:"平常静态，鼠标悬停时图片放大并旋转 2°，移出自动还原。",src:"https://picsum.photos/seed/custom-hover/600/400",config:{imageStyle:{transition:"transform 220ms ease"},hoverImageStyle:{transform:"scale(1.08) rotate(2deg)"}}},{name:"叠加到内置插件之上",description:"与 BorderGlow / Caption 等内置插件叠加：用逃逸舱补一个渐变描边。",src:"https://picsum.photos/seed/custom-combo/600/400",config:{imageClassName:"custom-art-frame",containerStyle:{padding:6,background:"linear-gradient(135deg,#ff9a9e,#fad0c4)",borderRadius:12}}}],Ux=["注入任意 CSS filter（模糊 / 灰度 / 复古 / 色相旋转等）","注入任意 transform（缩放 / 旋转 / 位移）","为 <img> 与容器分别附加 className 与内联样式","hoverImageStyle 支持悬停态，移出自动还原","优先级靠前，可叠加在其它视觉插件之上","无需为一次性效果新建组件，几行配置即可"],Wx=["内置视觉插件未覆盖的特殊滤镜 / 调色需求","活动主题需要临时换肤、加描边 / 圆角","悬停微交互（放大、旋转、投影）","演示或 A/B 实验时的快速视觉验证","替代旧版 CustomEffects 展示页的任意效果组合"],Vx=["imageStyle / containerStyle 合并进核心渲染的 style，后者优先级更高（叠加而非覆盖）。","插件会自动保留核心自带的 opacity 渐显：你给 imageStyle.transition 设值时，会追加 opacity 180ms 而非覆盖它。","hoverImageStyle 通过注入一条纯 CSS `:hover` 规则实现，由浏览器原生处理进入/离开——不触碰 React 受控的内联样式，因此不会出现「移出后图片消失」的旧问题。","与内置插件叠加时，建议把 CustomEffects 放在 withPlugins 数组靠前位置（其 priority=50 已处理）。","需要函数式动态样式时，可在业务侧先算出 style 对象再传入，本插件保持配置式以便文档化。"],Hx={name:Tx,description:jx,since:Ax,tags:Mx,config:Bx,example:Nx,examples:Fx,features:Ux,useCases:Wx,notes:Vx},Gx="DataSaverPlugin",qx="省流模式：saveData 开启时降低质量参数并禁用预加载。",Qx="2.0.0",Kx=["loading","加载策略"],Yx=[{name:"respectSaveData",type:"boolean",default:"true",description:"仅在 navigator.connection.saveData=true 时降质（关闭则强制降质）"},{name:"fallbackQuality",type:"number",default:"0.6",description:"0..1"},{name:"disablePreload",type:"boolean",default:"true",description:"省流量模式下禁用 preload / prefetch 预取"},{name:"qualityParam",type:"string",default:'"quality"',description:'query param name, e.g. "quality" or "q"'}],Xx=`const LazyImage = withPlugins(LazyLoadImageCore, [
  createDataSaverPlugin({
    respectSaveData: true, // 尊重系统省流开关
    fallbackQuality: 0.5,  // 省流时质量降到 0.5
    qualityParam: "q",     // 追加 ?q=0.5
  }),
]);`,Zx=[{name:"尊重系统省流",description:"检测到 saveData 时自动降质并禁用预加载，仅在省流模式下生效。",config:{respectSaveData:!0,fallbackQuality:.5,qualityParam:"q"}},{name:"始终省流",description:"忽略系统开关，始终追加低质量参数，适合极端省流场景。",config:{respectSaveData:!1,fallbackQuality:.4,disablePreload:!0}}],Jx=["读取 navigator.connection.saveData，开启时自动降质","自动追加质量查询参数（如 ?q=0.6）","可选禁用预加载以进一步省流"],eP=["移动端弱流量用户自动减负","按运营策略全局降质"],tP=["依赖业务 CDN 支持对应质量参数，否则参数无效。","respectSaveData=false 时按 fallbackQuality 强制降质（无视系统开关）。","与 ImageOptimization 叠加时，省流质量会进一步覆盖优化质量。"],nP={name:Gx,description:qx,since:Qx,tags:Kx,config:Yx,example:Xx,examples:Zx,features:Jx,useCases:eP,notes:tP},oP="DecodeAfterIdlePlugin",rP="空闲解码：图片加载成功后延迟到浏览器空闲时段再执行 img.decode()，避免大图解码阻塞主线程，提升交互流畅度。",aP="2.0.0",iP=["loading","加载策略","解码","性能"],sP=[{name:"enabled",type:"boolean",default:"true",description:"是否启用空闲解码"},{name:"timeoutMs",type:"number",default:"600",description:"最长等待空闲的兜底时间(ms)"}],lP=`import { LazyLoadImageCore, createDecodeAfterIdlePlugin, withPlugins } from "vane-lazy-image";

const LazyImage = withPlugins(LazyLoadImageCore, [
  createDecodeAfterIdlePlugin({ enabled: true, timeoutMs: 1000 }),
]);

<LazyImage src="https://picsum.photos/seed/decode/1200/800" alt="空闲解码示例" />`,cP=[{name:"默认空闲解码",description:"成功后于空闲时段执行 decode，并设置 decoding=async。",src:"https://picsum.photos/seed/decode/1200/800",config:{}},{name:"自定义超时",description:"放宽最长等待空闲时间到 1000ms。",src:"https://picsum.photos/seed/decode-timeout/1200/800",config:{timeoutMs:1e3}}],uP=["成功后 requestIdleCallback 内调用 img.decode()",'自动设置 decoding="async"',"requestIdleCallback 不可用时回退 setTimeout"],dP=["图片密集型信息流防止解码卡顿","首屏后延迟解码，优先保证交互响应"],pP=["timeoutMs 控制最长等待空闲的兜底时间","decode 失败被静默忽略，不影响显示"],mP={name:oP,description:rP,since:aP,tags:iP,config:sP,example:lP,examples:cP,features:uP,useCases:dP,notes:pP},gP="DepthMapPlugin",fP="3D 视差深度效果：鼠标跟随的倾斜 / 视差 / 浮动 / 3D 旋转，带光泽与阴影，纯 CSS transforms 无依赖。",hP="2.0.0",yP=["interaction","视觉效果与交互","visual"],vP=[{name:"style",type:'"tilt" | "parallax" | "float" | "rotate-3d"',default:'"tilt"',description:"深度效果样式"},{name:"intensity",type:"number",default:"0.5",description:"效果强度 0~1"},{name:"maxTilt",type:"number",default:"20",description:"最大倾斜角度"},{name:"enablePerspective",type:"boolean",default:"true",description:"启用透视效果"},{name:"perspective",type:"number",default:"1000",description:"透视距离（px）"},{name:"enableGlare",type:"boolean",default:"true",description:"启用光泽效果"},{name:"glareColor",type:"string",default:'"rgba(255, 255, 255, 0.3)"',description:"光泽颜色"},{name:"glareOpacity",type:"number",default:"0.5",description:"光泽不透明度 0~1"},{name:"enableShadow",type:"boolean",default:"true",description:"启用阴影"},{name:"transitionDuration",type:"number",default:"300",description:"过渡时长（毫秒）"},{name:"resetOnLeave",type:"boolean",default:"true",description:"离开时重置"}],bP=`// 1. 鼠标跟随倾斜
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
});`,wP=[{name:"tilt 倾斜（鼠标跟随）",description:"鼠标移动时图片随指针方向倾斜，带光泽高光，质感类似实体卡片。",src:"https://picsum.photos/id/122/400/300",config:{style:"tilt",maxTilt:15,intensity:.5,enableGlare:!0}},{name:"parallax 视差",description:"图片内部图层随鼠标产生位移差，营造纵深感。",src:"https://picsum.photos/id/129/400/300",config:{style:"parallax",intensity:.6,enablePerspective:!0,perspective:1e3}},{name:"rotate-3d 3D 旋转",description:"围绕多轴的 3D 旋转，配合阴影更具立体感。",src:"https://picsum.photos/id/133/400/300",config:{style:"rotate-3d",intensity:.7,enableShadow:!0,resetOnLeave:!0}},{name:"float 浮动",description:"轻微持续上下浮动的呼吸感，适合装饰性产品图。",src:"https://picsum.photos/id/142/400/300",config:{style:"float",intensity:.4,enableGlare:!1}}],xP=["4 种深度样式（倾斜 / 视差 / 浮动 / 3D 旋转）","鼠标跟随实时响应","光泽（glare）与阴影可开关并调参","透视距离可调","离开时一键重置（resetOnLeave）","纯 CSS transforms，无依赖"],PP=["产品 3D 展示","卡片悬浮交互","3D 封面 / 海报","作品集与个人主页","落地页英雄区","会员 / 旗舰商品位"],$P=["效果依赖鼠标移动产生视差，静态截图仅为初始平面态；移动设备体验有限，建议作为渐进增强。","intensity 与 maxTilt 控制幅度，强度过高在低端设备上可能引起卡顿，可按需下调。"],SP={name:gP,description:fP,since:hP,tags:yP,config:vP,example:bP,examples:wP,features:xP,useCases:PP,notes:$P},CP="DominantColorPlugin",kP="主色占位：在加载完成前用指定颜色或 LQIP 采样平均色填充容器背景，减少白屏、提升视觉连贯性。",LP="2.0.0",IP=["other","视觉","占位"],_P=[{name:"color",type:"string",default:"rgba(0,0,0,0.06)",description:"指定背景色（未提供时尝试从 lqip 采样）"},{name:"lqipSrc",type:"string | ((src) => string)",default:"undefined",description:"低清预览图地址或生成函数（用于采样平均色）"}],EP=`const ColorImage = withPlugins(LazyLoadImageCore, [
  createDominantColorPlugin({
    lqipSrc: (src) => src + "?w=20", // 用小图采样主色
  }),
]);

<ColorImage src="https://picsum.photos/id/1015/500/300" alt="主色占位示例" />;`,RP=[{name:"指定背景色",description:"直接指定浅灰背景，加载前不白屏。",src:"https://picsum.photos/id/1015/500/300",config:{color:"#e9ecef"}},{name:"LQIP 采样主色",description:"用小图采样平均色填充（跨域图需 CORS，失败则回退默认色）。",src:"https://picsum.photos/id/1021/500/300",config:{lqipSrc:"https://picsum.photos/id/1021/20/20"}},{name:"暖色背景",description:"指定暖色背景，营造色调一致感。",src:"https://picsum.photos/id/1026/500/300",config:{color:"#f8d7da"}}],zP=["指定颜色占位","LQIP 采样平均色","加载前不白屏","采样失败安全回退","可关闭"],OP=["相册/画廊占位","Pinterest 风布局","慢网白屏治理","品牌色调统一"],DP=["lqipSrc 采样需要图片服务器配置 CORS 头；跨域失败会自动回退到 color（默认浅灰），不影响加载。"],TP={name:CP,description:kP,since:LP,tags:IP,config:_P,example:EP,examples:RP,features:zP,useCases:OP,notes:DP},jP="DownloadButtonPlugin",AP="下载按钮：为图片添加一键下载功能，支持多位置、自定义样式、悬停显示与生命周期回调。",MP="2.0.0",BP=["ecommerce","电商核心"],NP=[{name:"filename",type:"string",default:"undefined",description:"下载文件名"},{name:"position",type:'"top-left" | "top-right" | "bottom-left" | "bottom-right"',default:'"top-right"',description:"按钮位置"},{name:"size",type:'"small" | "medium" | "large"',default:'"medium"',description:"按钮尺寸"},{name:"buttonStyle",type:"React.CSSProperties",default:"{}",description:"自定义按钮样式"},{name:"showOnHover",type:"boolean",default:"false",description:"仅悬停时显示"},{name:"onBeforeDownload",type:"(src) => void | Promise<void>",default:"undefined",description:"下载前回调（可做权限校验）"},{name:"onDownloadSuccess",type:"(filename) => void",default:"undefined",description:"下载成功回调"},{name:"onDownloadError",type:"(error) => void",default:"undefined",description:"下载失败回调"},{name:"customIcon",type:"ReactNode",default:"undefined",description:"自定义图标"},{name:"tooltipText",type:"string",default:'"下载图片"',description:"提示文案"}],FP=`// 1. 右上角下载按钮，成功后回调
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
<DownloadImage src="https://picsum.photos/id/1015/500/300" alt="可下载图片" />;`,UP=[{name:"基础下载功能",description:"点击右上角下载按钮，保存图片（文件名 my-image.jpg）。",src:"https://picsum.photos/id/1015/500/300",config:{filename:"my-image.jpg",position:"top-right",size:"medium"}},{name:"悬停显示按钮",description:"默认隐藏，鼠标悬停图片左上角出现大号下载按钮。",src:"https://picsum.photos/id/1018/500/300",config:{position:"top-left",size:"large",showOnHover:!0,tooltipText:"点击下载高清图片"}},{name:"自定义位置和大小",description:"左下角小号绿色下载按钮。",src:"https://picsum.photos/id/1019/500/300",config:{position:"bottom-left",size:"small",buttonStyle:{backgroundColor:"rgba(52, 199, 89, 0.9)"}}},{name:"自定义按钮样式",description:"右下角红色方形下载按钮。",src:"https://picsum.photos/id/1020/500/300",config:{position:"bottom-right",size:"medium",buttonStyle:{backgroundColor:"rgba(255, 59, 48, 0.9)",borderRadius:"8px",border:"none"},tooltipText:"下载原图"}},{name:"下载生命周期回调",description:"下载前后触发回调（可权限校验 / 统计上报）；示例中省略函数，见用法示例。",src:"https://picsum.photos/id/1021/500/300",config:{filename:"premium-photo.jpg",position:"top-right",size:"large"}},{name:"自定义下载图标",description:"示例以默认图标呈现；可用 customIcon 替换为自定义图标。",src:"https://picsum.photos/id/1022/500/300",config:{position:"top-right",size:"medium",buttonStyle:{backgroundColor:"rgba(88, 86, 214, 0.9)"}}}],WP=["下载提示：下载需要图片 URL 支持 CORS，否则可能失败；跨域图片需服务器设置 Access-Control-Allow-Origin；filename 应包含合适的文件扩展名（.jpg / .png 等）；大文件下载时会有短暂延迟，建议显示加载状态；移动端下载体验可能因浏览器而异；可在 onBeforeDownload 中进行权限检查。"],VP=["一键下载（点击按钮即可下载图片）","多位置支持（4 个角落）","自定义样式（大小 / 颜色 / 形状）","悬停显示模式","生命周期回调（下载前 / 后 / 失败）","自定义图标"],HP=["图片网站（用户下载高清图）","设计平台（下载设计作品）","新闻媒体","电商平台（下载商品图片）","在线教育（下载教学资料）","企业官网（下载宣传图）"],GP={name:jP,description:AP,since:MP,tags:BP,config:NP,example:FP,examples:UP,notes:WP,features:VP,useCases:HP},qP="ErrorBadgePlugin",QP="错误徽标：图片加载失败（或回退成功后）在指定角落显示错误徽标，便于在大批量图片列表中快速定位失败项。",KP="2.0.0",YP=["error","错误处理","错误反馈"],XP=[{name:"text",type:"string | ((context: LazyImageContext) => string)",default:'"Error"',description:"徽标文字；支持函数按 ctx 动态生成（函数型仅顶层示例展示）"},{name:"position",type:'"top-left" | "top-right" | "bottom-left" | "bottom-right" | "center"',default:'"top-right"',description:"徽标定位角落"},{name:"bgColor",type:"string",default:'"rgba(220, 53, 69, 0.85)"',description:"背景色"},{name:"color",type:"string",default:'"#fff"',description:"文字颜色"},{name:"fontSize",type:"number",default:"12",description:"字号(px)"},{name:"padding",type:"string",default:'"2px 6px"',description:"内边距"},{name:"borderRadius",type:"number",default:"4",description:"圆角(px)"},{name:"zIndex",type:"number",default:"100",description:"层级，默认较高避免被其它覆盖层遮挡"},{name:"persistAfterFallback",type:"boolean",default:"true",description:"回退图加载成功后是否仍显示徽标"}],ZP=`import { LazyLoadImageCore, createErrorBadgePlugin, withPlugins } from "vane-lazy-image";

const LazyImage = withPlugins(LazyLoadImageCore, [
  createErrorBadgePlugin({
    text: (ctx) => \`加载失败: \${ctx.src}\`,
    position: "bottom-right",
    bgColor: "rgba(220,53,69,0.9)",
  }),
]);

// 故意触发失败以观察徽标
<LazyImage src="https://invalid.example.com/x.png" alt="错误徽标示例" />`,JP=[{name:"默认错误徽标",description:"加载失败后，在右上角显示红底 Error 徽标。",src:"https://invalid.example.com/error-badge.png",config:{}},{name:"自定义文案与位置",description:"底部右侧、深色背景 + 高亮文字的失败徽标。",src:"https://invalid.example.com/error-badge-2.png",config:{text:"图片加载失败",position:"bottom-right",bgColor:"rgba(0,0,0,0.7)",color:"#ffd166"}}],e$=["加载或回退失败后，在图片角落显示错误徽标","支持 5 种定位（四角 + 居中）与背景/文字/字号/圆角定制","persistAfterFallback：回退图已显示仍保留徽标，便于排查","通过 sharedData 标记 had-error，与 FallbackImage / RetryOnError / ErrorOverlay 联动"],t$=["图片墙 / 商品列表快速识别加载失败项","大批量图片加载健康度可视化"],n$=["text 支持函数型 (ctx) => string，但函数无法进入静态预览配置，仅顶层示例展示","默认 zIndex=100，高于多数覆盖层，避免被遮挡","与 ErrorOverlay 区别：徽标是轻量角标，覆盖层是整图遮罩"],o$={name:qP,description:QP,since:KP,tags:YP,config:XP,example:ZP,examples:JP,features:e$,useCases:t$,notes:n$},r$="ErrorOverlayPlugin",a$="错误覆盖层：图片加载失败时显示半透明遮罩与可选『重试』按钮，引导用户手动重试，适用于商品主图等关键图。",i$="2.0.0",s$=["error","错误处理","错误反馈","重试"],l$=[{name:"message",type:"string | ((context: LazyImageContext) => string)",default:"undefined（回退『加载失败』）",description:"遮罩提示文案；支持函数按 ctx 动态生成（函数型仅顶层示例展示）"},{name:"background",type:"string",default:'"rgba(220, 53, 69, 0.18)"',description:"遮罩背景色"},{name:"color",type:"string",default:'"#b00020"',description:"文字颜色"},{name:"zIndex",type:"number",default:"10",description:"遮罩层级"},{name:"showRetry",type:"boolean",default:"true",description:"是否显示重试按钮"},{name:"retryText",type:"string",default:'"重试"',description:"重试按钮文字"},{name:"persistAfterFallback",type:"boolean",default:"true",description:"回退图加载成功后是否仍显示遮罩"}],c$=`import { LazyLoadImageCore, createErrorOverlayPlugin, withPlugins } from "vane-lazy-image";

const LazyImage = withPlugins(LazyLoadImageCore, [
  createErrorOverlayPlugin({
    message: (ctx) => \`图片加载失败：\${ctx.src}\`,
    retryText: "点我重试",
  }),
]);

// 故意触发失败以观察遮罩与重试按钮
<LazyImage src="https://invalid.example.com/x.png" alt="错误覆盖层示例" />`,u$=[{name:"默认重试遮罩",description:"失败时整图遮罩 + 重试按钮（默认文案『重试』）。",src:"https://invalid.example.com/error-overlay.png",config:{retryText:"重试"}},{name:"自定义文案与配色",description:"深色遮罩 + 白色文字 + 自定义提示文案。",src:"https://invalid.example.com/error-overlay-2.png",config:{message:"图片暂时无法加载",background:"rgba(0,0,0,0.4)",color:"#fff"}}],d$=["失败时整图半透明遮罩 + 可选重试按钮","重试通过 cache-bust 参数（?retry=时间戳）重新请求，绕过缓存","自定义文案 / 背景 / 文字色 / 层级","persistAfterFallback：回退后仍显示遮罩"],p$=["商品主图 / 头图失败后友好提示并支持手动重试","与 RetryOnError 组合：自动重试 + 手动重试双保险"],m$=["showRetry 默认开启；message 支持函数型（仅顶层示例展示）","重试逻辑直接改写 img.src，不依赖外部状态","点击重试使用 Date.now() 做缓存破坏，确保重新发起请求"],g$={name:r$,description:a$,since:i$,tags:s$,config:l$,example:c$,examples:u$,features:d$,useCases:p$,notes:m$},f$="ErrorTrackingPlugin",h$="错误追踪：在图片加载失败时上报失败详情（地址 / 错误信息 / 网络 / 设备 / 次数）到自定义函数或上报端点，并可显示错误计数角标，用于生产环境图片错误监控。",y$="2.0.0",v$=["error","错误处理","监控","可观测"],b$=[{name:"reportEndpoint",type:"string",description:"错误上报端点（POST JSON，带 5s 超时与 keepalive）"},{name:"report",type:"(payload: any) => void",description:"自定义上报函数（与端点二选一或并存）"},{name:"showBadge",type:"boolean",default:"false",description:"是否显示错误计数角标（需显式开启）"},{name:"badgeText",type:"string",default:'"Error"',description:"角标前缀文字"},{name:"badgeColor",type:"string",default:'"#fff"',description:"角标文字色"},{name:"badgeBg",type:"string",default:'"rgba(220,53,69,0.8)"',description:"角标背景色"}],w$=`import { LazyLoadImageCore, createErrorTrackingPlugin, withPlugins } from "vane-lazy-image";

const LazyImage = withPlugins(LazyLoadImageCore, [
  createErrorTrackingPlugin({
    report: (payload) => {
      console.warn("图片加载失败", payload);
    },
    showBadge: true,
  }),
]);

// 故意触发失败以观察上报与角标
<LazyImage src="https://invalid.example.com/x.png" alt="错误追踪示例" />`,x$=[{name:"错误计数角标",description:"开启角标，失败后右上角显示累计错误次数。",src:"https://invalid.example.com/error-tracking.png",config:{showBadge:!0,badgeText:"Err"}},{name:"端点上报",description:"失败后 POST 上报到采集端点（演示端点可能 404，代码已静默忽略）。",src:"https://invalid.example.com/error-tracking-2.png",config:{reportEndpoint:"/api/img-errors",showBadge:!0}}],P$=["onLoadError 采集 src / message / network / device / 累计次数","内置 1 秒防抖，避免高频重复上报","report 自定义函数 或 reportEndpoint 端点二选一 / 并存","可选角标显示错误次数"],$$=["生产环境图片错误率监控与告警","定位经常性失败的图片源 / CDN"],S$=["showBadge 默认 false，需显式开启才显示角标","端点上报带 5s 超时与 keepalive，页面卸载也能送达","report 为函数型，无法进入静态预览配置，仅顶层示例展示"],C$={name:f$,description:h$,since:y$,tags:v$,config:b$,example:w$,examples:x$,features:P$,useCases:$$,notes:S$},k$="EventLoggerPlugin",L$="事件日志：在控制台记录图片加载全生命周期事件（before-load / load-success / load-error / enter-viewport / leave-viewport / progress），便于调试与监控。",I$="2.0.0",_$=["other","监控","调试"],E$=[{name:"enabled",type:"boolean",default:"true",description:"是否启用日志"},{name:"prefix",type:"string",default:'"[LLI]"',description:"日志前缀，便于过滤"}],R$=`const LogImage = withPlugins(LazyLoadImageCore, [
  createEventLoggerPlugin({ prefix: "[IMG]" }),
]);

<LogImage src="https://picsum.photos/id/1015/500/300" alt="事件日志示例" />;`,z$=[{name:"默认日志",description:"使用默认 [LLI] 前缀记录全部事件。",src:"https://picsum.photos/id/1015/500/300",config:{enabled:!0}},{name:"自定义前缀",description:"改用 [IMG] 前缀，便于在控制台分组过滤。",src:"https://picsum.photos/id/1021/500/300",config:{prefix:"[IMG]"}},{name:"关闭日志",description:"enabled=false 时不输出任何日志。",src:"https://picsum.photos/id/1026/500/300",config:{enabled:!1}}],O$=["全生命周期事件记录","可自定义前缀","可关闭","零业务侵入"],D$=["调试加载流程","加载监控埋点","性能问题排查","教学演示"],T$=["仅用于开发/调试，生产环境建议按需关闭以避免控制台噪音。"],j$={name:k$,description:L$,since:I$,tags:_$,config:E$,example:R$,examples:z$,features:O$,useCases:D$,notes:T$},A$="ExifOrientationPlugin",M$="EXIF 方向：根据图片自带的方向信息（EXIF Orientation）自动校正显示，避免手机竖拍照片横显。",B$="2.0.0",N$=["a11y","可访问性","加载策略"],F$=[{name:"enabled",type:"boolean",default:"true",description:"是否启用方向校正"}],U$=`const OrientImage = withPlugins(LazyLoadImageCore, [
  createExifOrientationPlugin({ enabled: true }),
]);

<OrientImage src="https://picsum.photos/id/1015/500/300" alt="方向校正示例" />;`,W$=[{name:"启用方向校正（默认）",description:"imageOrientation: from-image，跟随 EXIF 方向。",src:"https://picsum.photos/id/1015/500/300",config:{enabled:!0}},{name:"关闭校正",description:"enabled=false 时不注入方向样式。",src:"https://picsum.photos/id/1021/500/300",config:{enabled:!1}}],V$=["按 EXIF Orientation 自动校正","imageOrientation: from-image","无需手动旋转","可关闭"],H$=["手机/相机照片","用户上传图","竖拍横显修复"],G$=["依赖浏览器对 image-orientation: from-image 的支持，现代浏览器均已支持。"],q$={name:A$,description:M$,since:B$,tags:N$,config:F$,example:U$,examples:W$,features:V$,useCases:H$,notes:G$},Q$="FadeInPlugin",K$="加载完成后淡入显示，可自定义时长与缓动函数。",Y$="2.0.0",X$=["visual","视觉"],Z$=[{name:"durationMs",type:"number",default:"400",description:"淡入时长 ms"},{name:"easing",type:"string",default:"ease",description:"缓动函数（CSS easing）"}],J$=`// 加载完成后淡入
const FadeImage = withPlugins(LazyLoadImageCore, [
  createFadeInPlugin({ durationMs: 450 }),
]);

<FadeImage src="https://picsum.photos/seed/fadein/600/400" alt="淡入" />;`,eS=[{name:"默认淡入",description:"450ms 标准 ease 淡入，干净利落。",src:"https://picsum.photos/seed/fadein-default/600/400",config:{durationMs:450}},{name:"慢速缓出",description:"800ms ease-out，让图片「缓缓浮现」。",src:"https://picsum.photos/seed/fadein-slow/600/400",config:{durationMs:800,easing:"ease-out"}}],tS=["加载成功淡入显示","时长可调","缓动函数可定制（ease / ease-out / cubic-bezier 等）","与 BlurUp 互补"],nS=["画廊 / 相册图片入场","内容型站点图片显现","与滚动进入联动的柔和出现","任意需要「渐显」的场景"],oS=["easing 接受任意 CSS timing-function 字符串。","与 Transition 不同，FadeIn 仅处理「淡入」单一维度，更简单。"],rS={name:Q$,description:K$,since:Y$,tags:X$,config:Z$,example:J$,examples:eS,features:tS,useCases:nS,notes:oS},aS="FallbackImagePlugin",iS="兜底图：图片加载失败时自动切换到备用图片地址，避免出现破图空白，是最基础的失败降级手段。",sS="2.0.0",lS=["network","网络","兜底","降级"],cS=[{name:"fallbackSrc",type:"string",description:'兜底图地址，建议使用始终可访问的占位图或 data URI。e.g. "/404.jpg"'}],uS=`import { LazyLoadImageCore, createFallbackImagePlugin, withPlugins } from "vane-lazy-image";

const LazyImage = withPlugins(LazyLoadImageCore, [
  createFallbackImagePlugin({ fallbackSrc: "/404.jpg" }),
]);

<LazyImage src="https://invalid.example.com/broken.png" alt="兜底图示例" />`,dS=[{name:"基础兜底图",description:"原图失败 → 自动切换到兜底图正常显示（演示用始终可访问的占位图）。",src:"https://invalid.example.com/broken.png",config:{fallbackSrc:"https://picsum.photos/seed/fallback/400/300"}}],pS=["onLoadError 直接改写 img.src 为兜底地址","标记 had-error，供 ErrorBadge 等插件联动","兜底成功后仍可配合其它错误插件展示状态"],mS=["保证任何失败都不出现破图","与错误徽标 / 追踪组合，兜底 + 可观测"],gS=["fallbackSrc 为必填；建议使用始终可访问的占位图或 data URI，避免兜底本身再失败","兜底成功后若仍有 ErrorBadge(persistAfterFallback)，可继续显示徽标便于排查"],fS={name:aS,description:iS,since:sS,tags:lS,config:cS,example:uS,examples:dS,features:pS,useCases:mS,notes:gS},hS="FavoritePlugin",yS="收藏切换（gallery 增强插件）：在工具条渲染心形按钮，绑定 context.favorited 协调态，点击切换并回调 onChange。",vS="2.1.0",bS=["gallery","图集","收藏","喜欢"],wS=[{name:"onChange",type:"(favorited: boolean) => void",default:"-",description:"切换时回调（持久化/上报）"},{name:"activeColor",type:"string",default:"#ff5a5f",description:"激活态颜色"}],xS=`import { GalleryCore } from "vane-lazy-image/gallery";
import { createFavoritePlugin } from "vane-lazy-image/custom-plugins/FavoritePlugin";

<GalleryCore images={images} plugins={[createFavoritePlugin({ onChange: setFav })]} />`,PS=[{name:"收藏商品",description:"点击心形在 ♡/♥ 间切换，激活态变红；onChange 上报调用方做持久化。",config:{}}],$S=["心形切换","协调态绑定","onChange 回调","激活色可配"],SS=["商品收藏","心愿单","喜欢标记"],CS=["favorited 为 useState 协调态，切换即重渲染；不跨会话持久化（由 onChange 接管）。"],kS={name:hS,description:yS,since:vS,tags:bS,config:wS,example:xS,examples:PS,features:$S,useCases:SS,notes:CS},LS="FetchLoaderPlugin",IS="fetch 流式加载器：将图片以 blob/objectURL 形式加载，支持进度上报（speed/ETA）、超时、指数退避重试、请求去重与 objectURL 自动回收。高优先级（domain priority 10），先于其他插件执行。",_S="2.0.0",ES=["loading","加载策略"],RS=[{name:"enabled",type:"boolean",default:"true",description:"是否启用 fetch 加载（关闭后走浏览器默认加载）"},{name:"cacheKeyFn",type:"(src: string) => string",description:"自定义去重键，默认使用 src"},{name:"maxCacheSize",type:"number",description:"in-flight 请求缓存最大条目数"},{name:"maxControllers",type:"number",description:"AbortController 缓存上限，淘汰时自动 abort"},{name:"maxObjectUrls",type:"number",description:"objectURL 缓存上限，淘汰时自动 revokeObjectURL"},{name:"timeout",type:"number",default:"30000",description:"单次请求超时（毫秒）"},{name:"maxRetries",type:"number",default:"3",description:"最大重试次数（4xx 不重试）"},{name:"retryDelay",type:"number",default:"1000",description:"首次重试延迟（毫秒）"},{name:"retryBackoff",type:"number",default:"2",description:"重试退避倍数"}],zS=`const LazyImage = withPlugins(LazyLoadImageCore, [
  createFetchLoaderPlugin({
    timeout: 20000,    // 20s 超时
    maxRetries: 5,     // 最多重试 5 次
    retryBackoff: 2,   // 指数退避
  }),
]);`,OS=[{name:"默认 fetch 加载",description:"流式加载 + 真实进度（速度 / ETA）+ 自动去重与 objectURL 回收。",config:{timeout:3e4,maxRetries:3,retryBackoff:2}},{name:"弱网增强重试",description:"更长超时与更多重试，适合不稳定网络环境。",config:{timeout:45e3,maxRetries:6,retryDelay:1500,retryBackoff:2}}],DS=["以 fetch 把图片读为 Blob/objectURL，支持流式进度（速度 / ETA）","请求超时 + 指数退避重试（4xx 不重试）","in-flight 请求去重、AbortController / objectURL 自动回收","高优先级（domain priority 10），先于其它插件执行"],TS=["需要真实下载进度条的大图 / 原图","不稳定网络下需要重试保障"],jS=["关闭 enabled 则走浏览器默认 <img> 加载。","objectURL 由插件在卸载 / 淘汰时自动 revoke，避免内存泄漏。","cacheKeyFn 为函数，需在“用法示例”中以代码传入；静态预览使用纯配置。"],AS={name:LS,description:IS,since:_S,tags:ES,config:RS,example:zS,examples:OS,features:DS,useCases:TS,notes:jS},MS="FilterPlugin",BS="CSS 滤镜：灰度/复古/亮度/对比度/饱和度，悬停可恢复原图。",NS="2.0.0",FS=["visual","视觉"],US=[{name:"filter",type:'"none" | "grayscale" | "sepia" | "brightness" | "contrast" | "saturate"',default:'"none"',description:"滤镜类型"},{name:"amount",type:"number",default:"undefined",description:"滤镜强度（多数类型 0~1）"},{name:"hover",type:"boolean",default:"false",description:"悬停时恢复原图"}],WS=`// 灰度显示，悬停恢复原彩图
const FilterImage = withPlugins(LazyLoadImageCore, [
  createFilterPlugin({
    filter: "grayscale",
    amount: 1,
    hover: true,
  }),
]);

<FilterImage src="https://picsum.photos/seed/filter/600/400" alt="滤镜" />;`,VS=[{name:"灰度 + 悬停还原",description:"默认灰度，鼠标悬停瞬间恢复彩色，制造焦点对比。",src:"https://picsum.photos/seed/filter-gray/600/400",config:{filter:"grayscale",amount:1,hover:!0}},{name:"复古暖调",description:"sepia 中度做旧，营造怀旧氛围。",src:"https://picsum.photos/seed/filter-sepia/600/400",config:{filter:"sepia",amount:.6}},{name:"高对比增强",description:"提升对比度，让画面更有张力。",src:"https://picsum.photos/seed/filter-contrast/600/400",config:{filter:"contrast",amount:1.4}}],HS=["内置 grayscale / sepia / brightness / contrast / saturate 预设","amount 控制强度","hover 模式悬停恢复原图","纯 CSS filter，零额外绘制开销"],GS=["商品列表统一灰度，hover 高亮","怀旧 / 复古风格相册","强调主体前的视觉降噪","活动主题统一调色"],qS=["hover:true 时滤镜在鼠标移入时移除、移出时恢复。","需要组合滤镜（如 contrast+saturate）或更复杂效果，可用 CustomEffectsPlugin 的 imageStyle.filter 任意写。"],QS={name:MS,description:BS,since:NS,tags:FS,config:US,example:WS,examples:VS,features:HS,useCases:GS,notes:qS},KS="FullscreenPlugin",YS="全屏切换（gallery 增强插件）：在工具条渲染 全屏/退出 按钮，对图集根容器调用 requestFullscreen。",XS="2.1.0",ZS=["gallery","图集","全屏","沉浸式"],JS=[{name:"enterLabel",type:"string",default:"⛶ 全屏",description:"进入全屏按钮文案"},{name:"exitLabel",type:"string",default:"✕ 退出",description:"退出全屏按钮文案"}],e2=`import { GalleryCore } from "vane-lazy-image/gallery";
import { createFullscreenPlugin } from "vane-lazy-image/custom-plugins/FullscreenPlugin";

<GalleryCore images={images} plugins={[createFullscreenPlugin()]} />`,t2=[{name:"沉浸浏览",description:"点击 全屏 将整张图集容器进入全屏（含缩略条/工具条），再点退出恢复。",config:{}}],n2=["全屏/退出按钮","fullscreenchange 同步态","基于 [data-gallery-root] 锚点"],o2=["商品沉浸看款","展会大屏展示","详情页全屏浏览"],r2=["通过当前按钮向上查找 [data-gallery-root] 锚点，不依赖内核暴露 DOM 节点。"],a2={name:KS,description:YS,since:XS,tags:ZS,config:JS,example:e2,examples:t2,features:n2,useCases:o2,notes:r2},i2="GalleryPlugin",s2="画廊灯箱：图片上叠加打开按钮，进入灯箱或新窗口查看原图。",l2="2.0.0",c2=["visual","视觉"],u2=[{name:"buttonText",type:"string",default:'"Open"',description:"打开按钮文案"},{name:"enableLightbox",type:"boolean",default:"true",description:"是否启用内置灯箱"},{name:"overlayZIndex",type:"number",default:"10",description:"灯箱层叠顺序"},{name:"buttonStyle",type:"React.CSSProperties",default:"{}",description:"按钮自定义样式（缩略图场景可缩成小号半透明胶囊）"}],d2=`// 点击按钮进入灯箱查看大图
const GalleryImage = withPlugins(LazyLoadImageCore, [
  createGalleryPlugin({
    buttonText: "查看大图",
    enableLightbox: true,
    overlayZIndex: 20,
  }),
]);

<GalleryImage src="https://picsum.photos/seed/gallery/600/400" alt="画廊" />;`,p2=[{name:"灯箱预览",description:"叠加「查看大图」按钮，点击进入全屏灯箱看原图。",src:"https://picsum.photos/seed/gallery-lb/600/400",config:{buttonText:"查看大图",enableLightbox:!0,overlayZIndex:20}},{name:"新窗口打开",description:"关闭内置灯箱，点击按钮以新窗口打开原图。",src:"https://picsum.photos/seed/gallery-win/600/400",config:{buttonText:"Open",enableLightbox:!1}}],m2=["覆盖层打开按钮","内置灯箱查看大图（默认开启）","可改为新窗口打开","灯箱层级可调"],g2=["电商商品图放大查看","相册 / 作品集灯箱","详情页看图","地图 / 截图放大"],f2=["enableLightbox:false 时按钮以新窗口打开原图，适合轻量场景。","灯箱层级 overlayZIndex 需高于页面其它浮层，避免被遮挡。"],h2={name:i2,description:s2,since:l2,tags:c2,config:u2,example:d2,examples:p2,features:m2,useCases:g2,notes:f2},y2="GlitchEffectPlugin",v2="故障艺术效果：赛博朋克风格 RGB 分离 / 扫描线 / 数字失真 / 混合 / 强烈五种风格，纯 CSS 无依赖，支持持续、一次性、悬停触发。",b2="2.0.0",w2=["interaction","视觉效果与交互","visual"],x2=[{name:"style",type:'"rgb-split" | "scan-lines" | "digital" | "glitch-mix" | "intense"',default:'"glitch-mix"',description:"故障风格"},{name:"continuous",type:"boolean",default:"false",description:"是否持续动画"},{name:"duration",type:"number",default:"1000",description:"一次性触发时长（毫秒）"},{name:"intensity",type:"number",default:"0.7",description:"效果强度 0~1"},{name:"triggerOnHover",type:"boolean",default:"false",description:"是否悬停触发"},{name:"rgbOffset",type:"number",default:"3",description:"RGB 分离距离（px）"},{name:"scanLineCount",type:"number",default:"30",description:"扫描线数量"},{name:"animateScanLines",type:"boolean",default:"true",description:"扫描线是否动画"}],P2=`// 1. 持续 RGB 分离故障特效
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
createGlitchEffectPlugin({ style: "glitch-mix", triggerOnHover: true });`,$2=[{name:"glitch-mix 混合（持续）",description:"混合风格默认效果，持续播放，适合做氛围封面。",src:"https://picsum.photos/id/1043/400/300",config:{style:"glitch-mix",continuous:!0,intensity:.7}},{name:"rgb-split RGB 分离（持续）",description:"红蓝通道错位产生色散，赛博朋克典型观感。",src:"https://picsum.photos/id/1062/400/300",config:{style:"rgb-split",continuous:!0,rgbOffset:5}},{name:"scan-lines 扫描线（悬停触发）",description:"叠加扫描线纹理，悬停时启动，平时保持干净。",src:"https://picsum.photos/id/1074/400/300",config:{style:"scan-lines",triggerOnHover:!0,scanLineCount:40,animateScanLines:!0}},{name:"digital 数字失真（一次性）",description:"加载/进入时触发一次数字故障，随后恢复清晰。",src:"https://picsum.photos/id/1080/400/300",config:{style:"digital",continuous:!1,duration:900}},{name:"intense 高强度",description:"强度拉满的强烈故障，冲击力强，适合标题位。",src:"https://picsum.photos/id/1084/400/300",config:{style:"intense",continuous:!0,intensity:1}}],S2=["5 种故障风格（RGB 分离 / 扫描线 / 数字失真 / 混合 / 强烈）","三种触发模式：持续 / 一次性 / 悬停触发","效果强度 0~1 可调","扫描线数量与是否动画可配","RGB 错位距离可调","纯 CSS 实现，无运行时依赖"],C2=["赛博朋克风格站点","海报 / 专辑封面","活动营销页","游戏官网","暗色主题视觉","品牌焕新 / 限时活动"],k2=["持续动画（continuous: true）会一直占用合成层，建议对大图或大量实例谨慎使用。","阅读型内容可用 triggerOnHover: true，仅在鼠标悬停时播放，避免干扰。"],L2={name:y2,description:v2,since:b2,tags:w2,config:x2,example:P2,examples:$2,features:S2,useCases:C2,notes:k2},I2="HotspotPlugin",_2="主图热点标注（gallery 增强插件）：在 galleryOverlay 按百分比定位可交互热点，点击弹出标签气泡（含可选链接）。",E2="2.1.0",R2=["gallery","图集","热点","标注"],z2=[{name:"hotspots",type:"Hotspot[]",default:"[]",description:"热点集合（图集级，所有主图共用），含 x/y(0-100)/label/href?"}],O2=`import { GalleryCore } from "vane-lazy-image/gallery";
import { createHotspotPlugin } from "vane-lazy-image/custom-plugins/HotspotPlugin";

<GalleryCore images={images} plugins={[createHotspotPlugin({ hotspots: [{ x: 50, y: 50, label: "核心卖点" }] })]} />`,D2=[{name:"圈点讲解",description:"在主图叠加红点标记，点击展开卖点文案；可带 href 跳转详情。热点坐标相对主图百分比。",config:{hotspots:[{x:40,y:35,label:"防水面料"},{x:65,y:70,label:"透气网眼"}]}}],T2=["百分比定位","点击气泡","可选链接","多热点"],j2=["商品卖点讲解","局部细节标注","区域介绍"],A2=["hotspots 为图集级（所有主图共用同一组坐标）；气泡 pointerEvents 在带 href 时可点击。"],M2={name:I2,description:_2,since:E2,tags:R2,config:z2,example:O2,examples:D2,features:T2,useCases:j2,notes:A2},B2="HoverPrefetchPlugin",N2="悬停预取：当用户将鼠标悬停（或触摸）在图片上时，提前向浏览器插入 preload 链接拉取下一张资源，实现零延迟切换。",F2="2.0.0",U2=["viewport","视口与交互","预取","性能"],W2=[{name:"getNextSrc",type:"(context) => string | string[] | Promise<...>",default:"undefined",description:"计算需要预取的下一张图片（函数型，参见用法示例）"},{name:"target",type:'"container" | "image"',default:'"container"',description:"绑定事件的目标（容器或图片元素）"},{name:"trigger",type:'"mouseenter" | "touchstart"',default:'"mouseenter"',description:"触发事件类型"},{name:"as",type:'"image" | "fetch"',default:'"image"',description:"预取资源类型"},{name:"max",type:"number",default:"2",description:"预取的最大数量"},{name:"dedupe",type:"boolean",default:"true",description:"去重，避免重复插入相同的预取链接"},{name:"crossOrigin",type:'"anonymous" | "use-credentials" | null',default:'"anonymous"',description:"跨域策略"},{name:"showBadge",type:"boolean",default:"false",description:"是否在卡片上显示「已预取 N」徽标（便于观察注入效果）"},{name:"debug",type:"boolean",default:"false",description:"是否输出调试日志"}],V2=`const PrefetchImage = withPlugins(LazyLoadImageCore, [
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
<PrefetchImage src="https://picsum.photos/id/1015/500/300" alt="悬停预取示例" />;`,H2=[{name:"容器悬停预取（默认）",description:"鼠标进入容器即插入 preload，预取下一张图片（默认按 URL 末尾数字派生），卡片左上角显示「已预取 N」。",src:"https://picsum.photos/id/1015/500/300",config:{target:"container",trigger:"mouseenter",max:2,as:"image",showBadge:!0}},{name:"图片悬停预取",description:"事件直接绑定在图片元素上。",src:"https://picsum.photos/id/1021/500/300",config:{target:"image",trigger:"mouseenter",max:1}},{name:"触摸预取",description:"移动端用 touchstart 触发预取。",src:"https://picsum.photos/id/1026/500/300",config:{target:"container",trigger:"touchstart",max:1}}],G2=["悬停 / 触摸即预取","容器或图片元素两种绑定目标","mouseenter / touchstart 两种触发","预取数量上限与去重","自定义跨域策略","调试日志输出"],q2=["商品画廊下一张预览","图片轮播预加载","列表项快速切换","移动端触摸预载"],Q2=["必须提供 `getNextSrc` 才会真正预取；不传时只绑定事件、不产生请求。","`showBadge: true` 会在卡片上显示「已预取 N」，是验收该插件最直接的方式。"],K2={name:B2,description:N2,since:F2,tags:U2,config:W2,example:V2,examples:H2,features:G2,useCases:q2,notes:Q2},Y2="HoverZoomPlugin",X2="悬停放大：鼠标悬停时放大显示图片局部。",Z2="2.0.0",J2=["visual","视觉"],eC=[{name:"scale",type:"number",default:"1.08",description:"放大倍数"},{name:"durationMs",type:"number",default:"180",description:"过渡时长 ms"}],tC=`// 悬停放大 1.15 倍
const ZoomImage = withPlugins(LazyLoadImageCore, [
  createHoverZoomPlugin({ scale: 1.15, durationMs: 180 }),
]);

<ZoomImage src="https://picsum.photos/seed/hoverzoom/600/400" alt="悬停放大" />;`,nC=[{name:"悬停放大 1.15",description:"鼠标悬停放大到 1.15 倍，180ms 平滑过渡。",src:"https://picsum.photos/seed/hoverzoom-115/600/400",config:{scale:1.15,durationMs:180}},{name:"轻微放大",description:"克制的 1.08 倍，仅给一点点呼吸感。",src:"https://picsum.photos/seed/hoverzoom-108/600/400",config:{scale:1.08,durationMs:200}}],oC=["悬停平滑放大","放大倍数可调","过渡时长可调","常与 Caption / BorderGlow 叠加"],rC=["商品图悬停预览细节","相册悬停聚焦","卡片悬停微交互","与灯箱配合的轻量前奏"],aC=["放大会溢出原尺寸，通常需父容器 overflow:hidden 裁切，仅放大中心区域。","与 Transition 的 fromScale 不同，HoverZoom 仅在 hover 时触发。"],iC={name:Y2,description:X2,since:Z2,tags:J2,config:eC,example:tC,examples:nC,features:oC,useCases:rC,notes:aC},sC="ImageOptimizationPlugin",lC="图片优化：自动追加宽度/质量/格式查询参数。",cC="2.0.0",uC=["network","网络"],dC=[{name:"enabled",type:"boolean",default:"true",description:"是否启用 URL 改写优化"},{name:"maxWidth",type:"number",default:"1920",description:"最大宽度（像素）"},{name:"quality",type:"number",default:"0.85",description:"0..1"},{name:"format",type:'"auto" | "webp" | "jpg" | "png"',default:'"auto"',description:"目标格式；auto 交给浏览器 / CDN 协商"},{name:"widthParam",type:"string",default:'"w"',description:'例如 "w"'},{name:"qualityParam",type:"string",default:'"q"',description:'例如 "q"'},{name:"formatParam",type:"string",default:'"format"',description:'例如 "format"'}],pC=`const LazyImage = withPlugins(LazyLoadImageCore, [
  createImageOptimizationPlugin({
    maxWidth: 1200,
    quality: 0.8,
    format: "webp",
    widthParam: "w",
    qualityParam: "q",
    formatParam: "format",
  }),
]);`,mC=[{name:"自动 webp + 约束宽度",description:"自动选择最优格式（按 Accept 协商 webp），并把宽度限制在 1200。",config:{maxWidth:1200,quality:.8,format:"webp"}},{name:"固定 jpg 中质量",description:"统一输出 jpg、质量 0.7，适合对兼容性要求较高的场景。",config:{maxWidth:800,quality:.7,format:"jpg"}}],gC=["自动追加宽度 / 质量 / 格式查询参数","format=auto 按 Accept 头协商 webp","参数名可配置以适配不同 CDN / 图片网关"],fC=["任意源图统一走优化网关（imgix / 云存储样式）","响应式不同屏宽下发不同尺寸"],hC=["需图片服务支持对应参数，否则仅作为普通查询参数透传。","与 DataSaver 叠加时，省流质量会进一步覆盖此处质量。","format=auto 依赖浏览器 Accept 头，无需手动指定。"],yC={name:sC,description:lC,since:cC,tags:uC,config:dC,example:pC,examples:mC,features:gC,useCases:fC,notes:hC},vC="IndicatorPlugin",bC="圆点指示器（gallery 增强插件）：在工具条渲染圆点，点击第 N 点跳转到对应主图。",wC="2.1.0",xC=["gallery","图集","指示点","进度"],PC=[{name:"size",type:"number",default:"8",description:"圆点直径（px）"},{name:"gap",type:"number",default:"6",description:"圆点间距（px）"},{name:"activeColor",type:"string",default:"#2b7de9",description:"选中圆点颜色"},{name:"idleColor",type:"string",default:"rgba(0,0,0,0.25)",description:"未选中圆点颜色"}],$C=`import { GalleryCore } from "vane-lazy-image/gallery";
import { createIndicatorPlugin } from "vane-lazy-image/custom-plugins/IndicatorPlugin";

<GalleryCore images={images} plugins={[createIndicatorPlugin()]} />`,SC=[{name:"基础指示点",description:"圆点显示位置进度，点击跳转。",config:{}}],CC=["圆点指示器","点击跳转","选中态高亮"],kC=["电商商品图集","轮播进度","相册"],LC=["与 ThumbSync 缩略条互补：缩略条看缩略图、圆点看位置进度。"],IC={name:vC,description:bC,since:wC,tags:xC,config:PC,example:$C,examples:SC,features:CC,useCases:kC,notes:LC},_C="InventoryStatusPlugin",EC="库存状态：实时显示商品库存状态（有货/低库存/缺货/预订），支持自动刷新和低库存预警。",RC="2.0.0",zC=["ecommerce","电商核心"],OC=[{name:"status",type:'"in-stock" | "out-of-stock" | "low-stock" | "pre-order"',default:'"in-stock"',description:"初始库存状态"},{name:"stockCount",type:"number",default:"undefined",description:"库存数量"},{name:"lowStockThreshold",type:"number",default:"10",description:"低库存阈值"},{name:"showBadge",type:"boolean",default:"true",description:"是否显示角标"},{name:"autoRefresh",type:"boolean",default:"false",description:"是否自动刷新库存"},{name:"refreshInterval",type:"number",default:"30000",description:"刷新间隔（毫秒）"},{name:"fetchStock",type:"() => Promise<{ status?; count? }>",default:"undefined",description:"自定义库存获取函数"},{name:"onStatusChange",type:"(status) => void",default:"undefined",description:"状态变更回调"},{name:"position",type:'"top-left" | "top-right" | "bottom-left" | "bottom-right"',default:'"top-right"',description:"角标位置"},{name:"style",type:"React.CSSProperties",default:"{}",description:"自定义叠加样式"}],DC=`// 1. 静态库存状态
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
<StockImage src="https://picsum.photos/id/164/280/280" alt="商品图" />;`,TC=[{name:"有货（100 件）",description:"绿色角标，显示库存数量。",src:"https://picsum.photos/id/152/280/280",config:{status:"in-stock",stockCount:100,showBadge:!0,position:"top-right"}},{name:"库存紧张（5 件）",description:"低于阈值 → 橙色预警角标。",src:"https://picsum.photos/id/164/280/280",config:{status:"low-stock",stockCount:5,lowStockThreshold:10,showBadge:!0,position:"top-right"}},{name:"缺货",description:"红色缺货角标。",src:"https://picsum.photos/id/177/280/280",config:{status:"out-of-stock",stockCount:0,showBadge:!0,position:"top-right"}},{name:"预订",description:"蓝色预订角标。",src:"https://picsum.photos/id/183/280/280",config:{status:"pre-order",showBadge:!0,position:"top-right"}},{name:"自动刷新库存（每 5 秒）",description:"通过 fetchStock 定时刷新状态（示例中省略函数，可配 interval）。",src:"https://picsum.photos/id/225/400/300",config:{status:"in-stock",stockCount:50,showBadge:!0,autoRefresh:!0,refreshInterval:5e3,position:"top-right"}}],jC=["4 种库存状态：有货 / 低库存 / 缺货 / 预订","显示实时库存数量","低库存阈值预警","自动刷新库存（可配置间隔）","库存变更回调通知","颜色编码（绿=有货 / 橙=低库存 / 红=缺货 / 蓝=预订）"],AC=["电商产品列表页","库存管理系统","在线商城首页","门票 / 课程售卖","限时抢购活动"],MC=["`stockCount <= lowStockThreshold` 时会自动归为「库存紧张」，无需手动改 `status`。","`autoRefresh` 需配合 `refreshInterval` 与 `fetchStock` 才有意义，静态示例页不会轮询。"],BC={name:_C,description:EC,since:RC,tags:zC,config:OC,example:DC,examples:TC,features:jC,useCases:AC,notes:MC},NC="LQIPPlugin",FC="低清预览（LQIP）：在清晰图加载期间叠加模糊的小图作为占位，加载完成后自动隐藏，实现渐进式加载体验。",UC="2.0.0",WC=["other","视觉","占位","渐进加载"],VC=[{name:"lqipSrc",type:"string | ((src) => string)",default:"undefined",description:"低清预览图地址或生成函数"},{name:"blur",type:"number",default:"12",description:"模糊半径(px)"},{name:"opacity",type:"number",default:"1",description:"不透明度(0~1)"},{name:"zIndex",type:"number",default:"2",description:"叠加层级"}],HC=`const LqipImage = withPlugins(LazyLoadImageCore, [
  createLqipPlugin({ lqipSrc: (src) => src + "?w=20", blur: 14 }),
]);

<LqipImage src="https://picsum.photos/id/1015/500/300" alt="LQIP 示例" />;`,GC=[{name:"模糊小图占位",description:"14px 模糊小图作为加载期占位。",src:"https://picsum.photos/id/1015/500/300",config:{lqipSrc:"https://picsum.photos/id/1015/20/20",blur:14}},{name:"低不透明度",description:"降低占位图不透明度，弱化视觉存在。",src:"https://picsum.photos/id/1021/500/300",config:{lqipSrc:"https://picsum.photos/id/1021/20/20",blur:12,opacity:.6}},{name:"清晰后淡出",description:"加载完成自动隐藏模糊层，过渡到清晰图。",src:"https://picsum.photos/id/1026/500/300",config:{lqipSrc:"https://picsum.photos/id/1026/20/20",blur:16}}],qC=["模糊低清占位","可调模糊/透明度/层级","加载完成自动隐藏","支持函数/字符串来源","渐进式加载"],QC=["渐进式图片加载","慢网占位","画廊/相册","提升感知性能"],KC=["lqipSrc 为函数型配置，静态预览使用字符串小图；函数用法见用法示例。"],YC={name:NC,description:FC,since:UC,tags:WC,config:VC,example:HC,examples:GC,features:qC,useCases:QC,notes:KC},XC="LocalizationPlugin",ZC="国际化：根据用户语言环境自动切换图片，支持手动指定、自动检测、自定义检测函数与后备图片。",JC="2.0.0",ek=["ecommerce","电商核心"],tk=[{name:"localeMap",type:"Record<string, string>",default:"undefined",description:"语言 → 图片 URL 映射"},{name:"defaultLocale",type:"string",default:'"en"',description:"默认语言（后备）"},{name:"currentLocale",type:"string",default:"undefined",description:"手动指定当前语言"},{name:"autoDetect",type:"boolean",default:"true",description:"是否自动检测浏览器语言"},{name:"detectLocale",type:"() => string",default:"undefined",description:"自定义语言检测函数"},{name:"fallbackSrc",type:"string",default:"undefined",description:"最终后备图片 URL"}],nk=`// 1. 按浏览器语言自动切换图片
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
<I18nImage src="https://picsum.photos/id/1015/500/300" alt="多语言图片" />;`,ok=[{name:"手动切换语言",description:"手动指定 currentLocale 展示对应语言图片（此处以 en 为例）。",src:"https://picsum.photos/id/1015/500/300",config:{localeMap:{en:"https://picsum.photos/id/1015/500/300",zh:"https://picsum.photos/id/1016/500/300",ja:"https://picsum.photos/id/1018/500/300",ko:"https://picsum.photos/id/1019/500/300"},currentLocale:"en",autoDetect:!1,defaultLocale:"en"}},{name:"自动检测浏览器语言",description:"根据浏览器语言自动选择图片（支持 en/zh/fr/de/es）。",src:"https://picsum.photos/id/1020/500/300",config:{localeMap:{en:"https://picsum.photos/id/1020/500/300",zh:"https://picsum.photos/id/1021/500/300",fr:"https://picsum.photos/id/1022/500/300",de:"https://picsum.photos/id/1023/500/300",es:"https://picsum.photos/id/1024/500/300"},autoDetect:!0,defaultLocale:"en"}},{name:"自定义语言检测",description:"通过 detectLocale() 从 localStorage 读取偏好（示例中简写为自动检测）。",src:"https://picsum.photos/id/1025/500/300",config:{localeMap:{en:"https://picsum.photos/id/1025/500/300",zh:"https://picsum.photos/id/1026/500/300",ja:"https://picsum.photos/id/1027/500/300"},defaultLocale:"en",autoDetect:!0}},{name:"后备图片机制",description:"请求的语言（ru）不在映射中 → 显示 fallbackSrc 后备图片。",src:"https://picsum.photos/id/1030/500/300",config:{localeMap:{en:"https://picsum.photos/id/1028/500/300",zh:"https://picsum.photos/id/1029/500/300"},currentLocale:"ru",defaultLocale:"en",fallbackSrc:"https://picsum.photos/id/1030/500/300"}}],rk=["最佳实践：始终提供 defaultLocale 作为后备；localeMap 至少包含常用语言（en、zh 等）；图片 URL 应指向稳定可访问的资源；建议使用 CDN 加速不同地区的图片加载；可结合用户设置和浏览器检测；开发环境建议打开 console 查看语言检测日志。"],ak=["多语言支持（任意语言环境）","自动检测浏览器语言","默认回退语言","自定义检测函数","后备机制（最终后备图片 URL）","动态切换（运行时切换语言）"],ik=["国际化网站","品牌宣传","多语言 App","电商平台（商品本地化展示）","新闻媒体","在线教育"],sk={name:XC,description:ZC,since:JC,tags:ek,config:tk,example:nk,examples:ok,notes:rk,features:ak,useCases:ik},lk="MemoryPressureAbortPlugin",ck="内存压力降级 + 离开中止（v2 真实实现）：低内存 / 移动端 / 省流时把图片重写为低清版本；离开视口且仍在加载时，调用 context.reset() 真正取消在途元素加载，回收内存。",uk="2.0.0",dk=["loading","加载策略","降质","中止","低端设备"],pk=[{name:"enabled",type:"boolean",default:"true",description:"是否启用"},{name:"deviceMemoryThreshold",type:"number",default:"4",description:"设备内存 ≤ 该阈值(GB)时启用降质"},{name:"preferOnMobile",type:"boolean",default:"true",description:"移动端或省流模式时强制启用降质"},{name:"lowWidth",type:"number",default:"640",description:"重写到的低清晰度宽度参数"},{name:"abortOnLeave",type:"boolean",default:"true",description:"离开视口且仍在加载时，是否中止在途加载（context.reset）"}],mk=`import { LazyLoadImageCore, createMemoryPressureAbortPlugin, withPlugins } from "vane-lazy-image";

const LazyImage = withPlugins(LazyLoadImageCore, [
  // 命中压力条件时降质；用户滑走仍在加载的图会被中止
  createMemoryPressureAbortPlugin({ lowWidth: 480 }),
]);

<LazyImage src="https://picsum.photos/seed/mem/1200/800" alt="内存压力降级示例" />`,gk=[{name:"默认降级 + 离开中止",description:"低内存/移动端/省流命中即低清；离开视口且在加载中的图会被 context.reset 取消。",src:"https://picsum.photos/seed/mem/1200/800",config:{}},{name:"激进降质",description:"更低宽度 + 移动端强制降质。",src:"https://picsum.photos/seed/mem-aggressive/1200/800",config:{lowWidth:320,deviceMemoryThreshold:8,preferOnMobile:!0}},{name:"仅降质不中止",description:"abortOnLeave=false，只做低清重写，不在离开时取消加载。",src:"https://picsum.photos/seed/mem-noabort/1200/800",config:{abortOnLeave:!1}}],fk=["三条件任一即触发低清重写（onLoad 返回改写 URL）","unsplash / 360buy 优化 w 参数；通用源附加 ?w&auto=format&fit=crop","离开视口且在加载 → context.reset() 真正取消元素在途加载","abortOnLeave 可开关"],hk=["低端设备防 OOM（降质）","快速滑动列表回收在途请求（中止）","弱网 / 省流节省流量"],yk=["中止通过 context.reset() 移除 <img> 元素来取消其下载，是图片元素层面的真实中止；若使用 FetchLoaderPlugin，可在 fetch 层进一步中断。","降质判定依赖 navigator.deviceMemory 与 deviceInfo.type。"],vk={name:lk,description:ck,since:uk,tags:dk,config:pk,example:mk,examples:gk,features:fk,useCases:hk,notes:yk},bk="MorphPlugin",wk="形变过渡效果：圆角/缩放/旋转/倾斜/弹性/液态等多种形变动画，纯 CSS transforms，支持加载触发、悬停触发与持续动画。",xk="2.0.0",Pk=["interaction","视觉效果与交互","visual"],$k=[{name:"type",type:'"circle-to-square" | "square-to-circle" | "rounded-corners" | "scale-morph" | "rotate-morph" | "skew-morph" | "elastic" | "liquid" | "custom"',default:'"elastic"',description:"形变类型"},{name:"duration",type:"number",default:"800",description:"持续时间（毫秒）"},{name:"delay",type:"number",default:"0",description:"延迟（毫秒）"},{name:"easing",type:"string",default:'"cubic-bezier(0.68, -0.55, 0.265, 1.55)"',description:"缓动函数"},{name:"triggerOnHover",type:"boolean",default:"false",description:"是否悬停触发"},{name:"continuous",type:"boolean",default:"false",description:"是否持续动画"},{name:"fromBorderRadius",type:"string",default:'"50%"',description:"rounded-corners 起始圆角"},{name:"toBorderRadius",type:"string",default:'"0%"',description:"rounded-corners 结束圆角"},{name:"fromScale",type:"number",default:"1",description:"scale-morph 起始缩放"},{name:"toScale",type:"number",default:"1",description:"scale-morph 结束缩放"},{name:"fromRotate",type:"number",default:"0",description:"rotate-morph 起始角度"},{name:"toRotate",type:"number",default:"0",description:"rotate-morph 结束角度"},{name:"fromSkew",type:"number",default:"0",description:"skew-morph 起始倾斜"},{name:"toSkew",type:"number",default:"0",description:"skew-morph 结束倾斜"}],Sk=`// 1. 弹性形变
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
});`,Ck=[{name:"elastic 弹性形变",description:"加载完成后以弹性缓动“弹”入，适合头像与卡片。",src:"https://picsum.photos/id/1080/400/300",config:{type:"elastic",duration:1e3,easing:"cubic-bezier(0.68, -0.55, 0.265, 1.55)"}},{name:"rounded-corners 圆角过渡",description:"从圆形过渡为圆角矩形，强调形态变化。",src:"https://picsum.photos/id/1084/400/300",config:{type:"rounded-corners",fromBorderRadius:"50%",toBorderRadius:"12%",duration:900}},{name:"scale-morph 缩放形变",description:"从 0.85 倍放大到原尺寸，配合淡入更自然。",src:"https://picsum.photos/id/110/400/300",config:{type:"scale-morph",fromScale:.85,toScale:1,duration:800}},{name:"rotate-morph 旋转形变",description:"带角度旋转的进入，动感十足。",src:"https://picsum.photos/id/111/400/300",config:{type:"rotate-morph",fromRotate:-12,toRotate:0,duration:900}},{name:"liquid 液态（持续）",description:"持续液态流动效果，适合做背景或装饰图。",src:"https://picsum.photos/id/119/400/300",config:{type:"liquid",continuous:!0,duration:2e3}}],kk=["9 种形变类型（圆角 / 缩放 / 旋转 / 倾斜 / 弹性 / 液态等）","三种触发：加载触发 / 悬停触发 / 持续动画","圆角、缩放、旋转、倾斜均参数化起止值","弹性缓动可定制","纯 CSS transforms，性能好","无运行时依赖"],Lk=["头像形变入场","按钮 / 卡片交互反馈","Logo 动画","加载态过渡","图片墙动态呈现","装饰性背景图"],Ik=["continuous: true 会持续播放；配合 triggerOnHover: true 可在鼠标悬停时播放单次，更省资源。","悬停触发的场景需在图片上移动 / 悬停鼠标才能看到形变，静态截图仅展示初始态。"],_k={name:bk,description:wk,since:xk,tags:Pk,config:$k,example:Sk,examples:Ck,features:kk,useCases:Lk,notes:Ik},Ek="NetworkAnalyticsPlugin",Rk="网络分析：上报加载耗时、成功率与 CDN 分布。",zk="2.0.0",Ok=["network","网络"],Dk=[{name:"reportEndpoint",type:"string",description:"上报地址（POST JSON）；留空则只在本地统计"},{name:"report",type:"(event: string, data: Record<string, any>) => void",description:"自定义上报函数（若提供则优先使用）"},{name:"trackCDN",type:"boolean",description:"是否按图片域名分组统计，便于比较不同 CDN 表现"}],Tk=`const LazyImage = withPlugins(LazyLoadImageCore, [
  createNetworkAnalyticsPlugin({
    trackCDN: true,
    report: (event, data) => {
      // event: "load" | "error" | "cache-hit" ...
      // data:  { src, durationMs, host, cached }
      analytics.track(event, data);
    },
  }),
]);`,jk=[{name:"本地调试上报",description:"未配置端点时写入 console，便于本地观察耗时与命中情况。",config:{trackCDN:!0}},{name:"上报到监控端点",description:"把事件 POST 到监控服务（keepalive，不阻塞页面卸载）。",config:{reportEndpoint:"https://api.example.com/lli",trackCDN:!0}}],Ak=["上报加载耗时、成功率、CDN 分布","内置事件去重 + 100ms 防抖，避免刷屏","优先使用自定义 report 函数，其次 reportEndpoint"],Mk=["线上图片加载性能监控","定位慢 CDN / 高失败率域名"],Bk=["不提供 reportEndpoint 也不提供 report 时，默认 console.debug 输出。","上报事件含 src / host / durationMs / cached 等字段。","report 为函数，需在“用法示例”中以代码传入；静态预览使用纯配置（无端点时仅本地打点）。"],Nk={name:Ek,description:Rk,since:zk,tags:Ok,config:Dk,example:Tk,examples:jk,features:Ak,useCases:Mk,notes:Bk},Fk="OfflinePlugin",Uk="离线降级（v2 真实实现）：在线时把资源预热进 Cache Storage；离线时优先从缓存取同域资源，否则回退 offlineSrc / 内置 SVG 占位图，并在离线时显示状态徽标。不再是纯提示层。",Wk="2.0.0",Vk=["loading","加载策略","离线","省流"],Hk=[{name:"offlineSrc",type:"string",default:"内置 SVG 离线占位图（data URI）",description:"离线且无缓存时回退的占位图，建议用 data URI 避免再次走网络"},{name:"cacheName",type:"string",default:"vane-lazy-image-offline",description:"Cache Storage 名称，用于预热与离线回退"},{name:"warm",type:"boolean",default:"true",description:"在线时是否把资源写入 Cache Storage 预热"},{name:"showBadge",type:"boolean",default:"true",description:"离线时是否显示「离线模式」徽标"}],Gk=`import { LazyLoadImageCore, createOfflinePlugin, withPlugins } from "vane-lazy-image";

const LazyImage = withPlugins(LazyLoadImageCore, [
  // 离线时回退到内置占位图，并在离线时显示徽标
  createOfflinePlugin({}),
]);

// 同域资源在线时会自动预热，离线可直接从缓存读取
<LazyImage src="/images/photo.jpg" alt="离线降级示例" />`,qk=[{name:"默认离线降级",description:"在线正常加载并预热；断网后同域资源走缓存，跨域资源回退到内置 SVG 占位图，并出现「离线模式」徽标。",src:"https://picsum.photos/seed/offline/800/600",config:{}},{name:"自定义离线占位图",description:"指定 offlineSrc 作为断网回退图（建议 data URI）。",src:"https://picsum.photos/seed/offline2/800/600",config:{offlineSrc:"data:image/svg+xml;utf8,%3Csvg xmlns='http://www.w3.org/2000/svg' width='400' height='300'%3E%3Crect width='100%25' height='100%25' fill='%23ffe0b2'/%3E%3Ctext x='50%25' y='50%25' fill='%23e65100' text-anchor='middle' font-size='22'%3E无网络%3C/text%3E%3C/svg%3E"}},{name:"关闭徽标",description:"showBadge=false，仅做离线资源回退，不显示提示。",src:"https://picsum.photos/seed/offline3/800/600",config:{showBadge:!1}}],Qk=["在线预热进 Cache Storage（真实写入）","离线从缓存读取同域资源","无缓存回退 offlineSrc / 内置 SVG 占位","在线 / 离线状态统一取自 GlobalContext（全 App 单处监听）+ 状态徽标","warm / showBadge 可开关"],Kk=["弱网 / 断网时的优雅降级","离线优先 PWA 应用的图片缓存","省流用户避免无效请求"],Yk=["跨域 no-cors 资源缓存后无法读取为 blob，因此跨域图片离线时会回退到 offlineSrc 占位图（预期降级）；同域资源可真正离线显示。","完整 Service Worker 级别离线由宿主应用负责，本插件提供组件级缓存/回退兜底。"],Xk={name:Fk,description:Uk,since:Wk,tags:Vk,config:Hk,example:Gk,examples:qk,features:Qk,useCases:Kk,notes:Yk},Zk="OverlayInfoPlugin",Jk="信息覆盖层：显示自定义文本，支持常显或悬停触发。",eL="2.0.0",tL=["visual","视觉"],nL=[{name:"content",type:"string | ((context: LazyImageContext) => string)",default:'""',description:"覆盖层文本；可传函数按 context 派生"},{name:"position",type:'"top" | "bottom" | "center"',default:'"bottom"',description:"文本位置"},{name:"background",type:"string",default:"rgba(0,0,0,0.62)",description:"背景色"},{name:"color",type:"string",default:"#fff",description:"文字颜色"},{name:"fontSize",type:"number",default:"12",description:"字号 px"},{name:"padding",type:"string",default:"6px 10px",description:"内边距"},{name:"borderRadius",type:"number",default:"0",description:"圆角 px"},{name:"zIndex",type:"number",default:"2",description:"层叠顺序"},{name:"showWhen",type:'"always" | "loading" | "loaded" | "error"',default:'"always"',description:"何时显示"},{name:"trigger",type:'"always" | "hover"',default:'"always"',description:"触发方式"}],oL=`// 底部信息条（常显）
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
});`,rL=[{name:"底部信息条（常显）",description:"半透明黑底白字信息条，常显于底部。",src:"https://picsum.photos/seed/overlay-bottom/600/400",config:{content:"来源：picsum.photos",position:"bottom",background:"rgba(0,0,0,0.62)",color:"#fff",showWhen:"always",trigger:"always"}},{name:"悬停显示信息",description:"平时干净，鼠标悬停时居中浮出提示文字。",src:"https://picsum.photos/seed/overlay-hover/600/400",config:{content:"悬停查看详情",position:"center",background:"rgba(0,0,0,0.62)",color:"#fff",showWhen:"always",trigger:"hover"}}],aL=["顶部 / 底部 / 居中三位置","文本支持静态或函数动态派生","背景 / 颜色 / 字号 / 圆角可调","可常显或悬停触发","可按加载状态（loading/loaded/error）显示"],iL=["图片来源 / 版权信息","悬停浮出操作提示","加载 / 错误态文案","图库元信息展示"],sL=["content 传函数时可按 context（含 imageState / src）派生，但场景示例画廊用静态文本以保证实时预览。","与 Caption 的区别：OverlayInfo 更通用（任意文本 + 触发时机 + 加载态），Caption 专注单一图注。"],lL={name:Zk,description:Jk,since:eL,tags:tL,config:nL,example:oL,examples:rL,features:aL,useCases:iL,notes:sL},cL="ParallaxPlugin",uL="视差滚动：随页面滚动按强度偏移图片位置。",dL="2.0.0",pL=["visual","视觉"],mL=[{name:"strength",type:"number",default:"0.2",description:"偏移强度 0..1"},{name:"axis",type:'"y" | "x"',default:'"y"',description:"偏移轴向"}],gL=`// 垂直视差：滚动时图片缓慢位移
const ParallaxImage = withPlugins(LazyLoadImageCore, [
  createParallaxPlugin({ strength: 0.2, axis: "y" }),
]);

<ParallaxImage src="https://picsum.photos/seed/parallax/600/400" alt="视差" />;`,fL=[{name:"垂直视差",description:"中等强度 y 轴视差，滚动时图片缓移，营造纵深。",src:"https://picsum.photos/seed/parallax-y/600/400",config:{strength:.2,axis:"y"}},{name:"轻微视差",description:"低强度视差，含蓄的层次感，不喧宾夺主。",src:"https://picsum.photos/seed/parallax-light/600/400",config:{strength:.1,axis:"y"}}],hL=["随滚动偏移图片（y / x 轴）","强度可调（0~1）","纯 transform 实现，性能友好","增强页面纵深与动感"],yL=["落地页 / Hero 区背景","长图文滚动叙事","作品集视差画廊","需要纵深氛围的视觉场景"],vL=["视差依赖页面滚动，demo 小卡片内滚动幅度有限，效果在长页面更明显。","strength 过大可能导致图片露出边缘，建议配合 overflow:hidden 容器。"],bL={name:cL,description:uL,since:dL,tags:pL,config:mL,example:gL,examples:fL,features:hL,useCases:yL,notes:vL},wL="PerformanceMonitorPlugin",xL="性能监控：统计单张图片的加载耗时，可选在四角叠加实时展示耗时面板，并在加载完成时通过 onReport 上报。",PL="2.0.0",$L=["other","监控","性能"],SL=[{name:"showOverlay",type:"boolean",default:"true",description:"是否在图片上叠加耗时面板"},{name:"overlayPosition",type:'"top-left" | "top-right" | "bottom-left" | "bottom-right"',default:'"top-right"',description:"面板位置（四角）"},{name:"color",type:"string",default:'"#fff"',description:"文字色"},{name:"background",type:"string",default:'"rgba(0,0,0,0.45)"',description:"面板背景"},{name:"onReport",type:"(data: { src; durationMs; network?; device? }) => void",default:"undefined",description:"加载完成上报回调"}],CL=`const PerfImage = withPlugins(LazyLoadImageCore, [
  createPerformanceMonitorPlugin({
    overlayPosition: "bottom-left",
    onReport: (data) => console.log("perf", data),
  }),
]);

<PerfImage src="https://picsum.photos/id/1015/500/300" alt="性能监控示例" />;`,kL=[{name:"默认耗时面板",description:"右上角显示 Loaded in N ms。",src:"https://picsum.photos/id/1015/500/300",config:{showOverlay:!0}},{name:"左下角面板",description:"面板移动到左下角。",src:"https://picsum.photos/id/1021/500/300",config:{overlayPosition:"bottom-left"}},{name:"自定义配色",description:"蓝色背景 + 白字，突出展示。",src:"https://picsum.photos/id/1026/500/300",config:{background:"rgba(33,118,255,0.6)",color:"#fff"}}],LL=["加载耗时统计","四角面板可选","自定义配色","onReport 上报","防抖去重"],IL=["LCP/加载耗时测量","性能优化验证","监控告警","A/B 对比"],_L=["onReport 为函数型配置，静态预览仅展示面板；函数用法见用法示例。"],EL={name:wL,description:xL,since:PL,tags:$L,config:SL,example:CL,examples:kL,features:LL,useCases:IL,notes:_L},RL="PreconnectPlugin",zL="DNS 预连接：提前与图片域名建立连接，可配置跨域。",OL="2.0.0",DL=["loading","加载策略"],TL=[{name:"domains",type:"string[]",description:"额外预连接域名"},{name:"crossOrigin",type:"string | null",description:'"anonymous" | "use-credentials" | null'},{name:"showBadge",type:"boolean",default:"false",description:"是否在卡片上显示「已预连 N」徽标（便于观察注入效果）"}],jL=`const LazyImage = withPlugins(LazyLoadImageCore, [
  createPreconnectPlugin({
    domains: ["https://cdn.example.com", "https://img.example.com"],
    crossOrigin: "anonymous",
  }),
]);`,AL=[{name:"基础预连接",description:"为图片 CDN 域名提前建连，消除首图 DNS/TLS 往返，更快出现。",config:{domains:["https://picsum.photos"],crossOrigin:"anonymous",showBadge:!0}},{name:"多域名预连接",description:"同时预连接多个静态资源域名，适合跨 CDN 的图片源。",config:{domains:["https://picsum.photos","https://fastly.picsum.photos"],crossOrigin:"anonymous"}}],ML=['挂载时注入 <link rel="preconnect">，提前完成 DNS/TCP/TLS 握手',"支持跨域凭证配置（crossOrigin: anonymous / use-credentials）","与浏览器默认预连接策略互补，相同域名不会重复注入"],BL=["图片托管在独立 CDN 域名时，消除首图握手延迟","瀑布流列表首屏涉及多个静态资源域名"],NL=["仅注入预连接提示，不保证一定建连，实际收益取决于浏览器调度。","不宜预连接过多域名，以免占用有限的连接资源。","已在本插件内去重，重复传入相同域名只会注入一次。"],FL={name:RL,description:zL,since:OL,tags:DL,config:TL,example:jL,examples:AL,features:ML,useCases:BL,notes:NL},UL="PredictiveLoadingPlugin",WL='预测性预加载（v2 真实实现）：未提供 predict 时，内置启发式按 URL 末尾数字段递增/递减派生「下一张」并注入 <link rel="preload"> 预取；也可传入 predict 自定义预测目标。',VL="2.0.0",HL=["loading","加载策略","预取"],GL=[{name:"model",type:'"heuristic" | "ml"',default:'"heuristic"',description:"预测模型；ml 当前同样走启发式（真正模型由 predict 提供）"},{name:"strategy",type:'"increment" | "decrement"',default:'"increment"',description:"内置启发式：派生方向（递增/递减 URL 末尾数字段）"},{name:"predict",type:"(context) => string[] | Promise<string[]>",default:"未设置（用内置启发式）",description:"自定义预测：返回需要预加载的图片链接列表，优先级高于内置启发式"},{name:"maxPreload",type:"number",default:"3",description:"单次最多预取数量"},{name:"as",type:'"image" | "fetch"',default:'"image"',description:"preload 资源类型"},{name:"crossOrigin",type:'"anonymous" | "use-credentials" | null',default:'"anonymous"',description:"跨域策略"}],qL=`const LazyImage = withPlugins(LazyLoadImageCore, [
  // 无 predict：内置启发式按 URL 末尾数字递增预取下 3 张
  createPredictiveLoadingPlugin({ model: "heuristic", strategy: "increment", maxPreload: 3 }),
]);

// 例：src=.../id/1015/ 会预取 .../id/1016/、1017/、1018/
<LazyImage src="https://picsum.photos/id/1015/500/300" alt="预测预加载示例" />;`,QL=[{name:"内置启发式递增",description:"按 URL 末尾数字递增派生下 3 张并预取（如相册下一页）。",src:"https://picsum.photos/id/1015/500/300",config:{model:"heuristic",strategy:"increment",maxPreload:3}},{name:"内置启发式递减",description:"递减派生上一张方向预取。",src:"https://picsum.photos/id/1020/500/300",config:{strategy:"decrement",maxPreload:3}},{name:"自定义预测",description:"用业务上下文决定预加载目标，限制为 3 张。",src:"https://picsum.photos/id/1018/500/300",config:{maxPreload:3}}],KL=["内置启发式真实派生「下一张」并注入 preload（非空头）","predict 自定义预测优先级更高","strategy 递增/递减可选","maxPreload 限制数量，相同 href 不重复注入"],YL=["相册 / 轮播：预加载下一张，切换无白屏","详情页：预加载相关推荐图"],XL=["仅注入 preload 提示，实际加载仍由浏览器调度；preload 在 Network 面板可见（见 HoverPrefetch 同类展示）。","URL 中无数字段时启发式无候选，可改用 predict 显式给出。"],ZL={name:UL,description:WL,since:VL,tags:HL,config:GL,example:qL,examples:QL,features:KL,useCases:YL,notes:XL},JL="PriceTagPlugin",eI="商品价格标签：在图片上叠加价格信息，支持原价、折扣、节省金额、异步价格获取与淡入动画。",tI="2.0.0",nI=["ecommerce","电商核心"],oI=[{name:"price",type:"number",default:"undefined",description:"当前价格"},{name:"currency",type:"string",default:'"$"',description:"货币符号"},{name:"position",type:'"top-left" | "top-right" | "bottom-left" | "bottom-right"',default:'"top-right"',description:"标签位置（四角）"},{name:"originalPrice",type:"number",default:"undefined",description:"原价（划线显示）"},{name:"discount",type:"string",default:"undefined",description:"折扣文案，如 “40% OFF”"},{name:"showSavings",type:"boolean",default:"false",description:"是否计算并显示节省金额"},{name:"backgroundColor",type:"string",default:'"#c62828"',description:"标签背景色"},{name:"textColor",type:"string",default:'"#fff"',description:"标签文字色"},{name:"animate",type:"boolean",default:"true",description:"淡入动画"},{name:"style",type:"React.CSSProperties",default:"{}",description:"自定义叠加样式"},{name:"fetchPrice",type:"(context) => Promise<{ price; originalPrice?; discount? }>",default:"undefined",description:"异步获取价格（API 集成）"},{name:"loadingText",type:"string",default:'"加载中..."',description:"异步加载文案"},{name:"errorText",type:"string",default:'"价格获取失败"',description:"异步失败文案"}],rI=`// 1. 组装带价格标签的懒加载图片组件
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
});`,aI=[{name:"完整价格信息（带折扣和节省金额）",description:"原价划线 + 折扣标签 + 自动计算节省金额，落在左下角。",src:"https://picsum.photos/id/180/400/300",config:{price:299.99,currency:"$",position:"bottom-left",originalPrice:499.99,discount:"40% OFF",showSavings:!0}},{name:"简单价格标签",description:"仅当前价 + 货币符号，落在左上角。",src:"https://picsum.photos/id/201/400/300",config:{price:1999,currency:"¥",position:"top-left"}},{name:"自定义样式价格标签",description:"自定义背景色 / 文字色 / 圆角与内边距。",src:"https://picsum.photos/id/250/400/300",config:{price:59.99,currency:"€",position:"bottom-right",backgroundColor:"#4ECDC4",textColor:"#1A535C",style:{borderRadius:"8px",padding:"12px 16px"}}},{name:"异步获取价格（模拟 API）",description:"真实场景通过 fetchPrice 异步拉取价格；示例以静态值代替，可见“查询价格 / 价格查询失败”状态（见用法示例中的 fetchPrice）。",src:"https://picsum.photos/id/260/400/300",config:{currency:"¥",position:"top-right",showSavings:!0,price:1299.99,originalPrice:1999,discount:"限时优惠"}}],iI=["显示当前价格、原价、折扣标签","计算并显示节省金额","支持多种货币符号","4 个位置可选（四角）","淡入动画效果","完全自定义样式","支持异步价格数据获取（API 集成）","显示加载和错误状态"],sI=["电商产品列表","促销活动页面","特价商品展示","移动端商城","从 API 动态获取价格的场景","跨境电商实时汇率转换"],lI=["`fetchPrice` 返回后覆盖静态 `price`，接真实商品价格时用它，不必改组件。","配置 `originalPrice` 且高于 `price` 时展示划线价，`showSavings` 额外显示省额。"],cI={name:JL,description:eI,since:tI,tags:nI,config:oI,example:rI,examples:aI,features:iI,useCases:sI,notes:lI},uI="PriorityLoadingPlugin",dI="优先级加载：按 high/medium/low 切换 eager/lazy 与 rootMargin。",pI="2.0.0",mI=["loading","加载策略"],gI=[{name:"priority",type:'"high" | "medium" | "low"',default:'"medium"',description:"加载优先级：high→loading=eager / low→lazy+大 rootMargin / medium→lazy"}],fI=`// LCP / 首屏主图：立即加载
const HeroImage = withPlugins(LazyLoadImageCore, [
  createPriorityLoadingPlugin({ priority: "high" }),
]);

// 折叠区/长列表底部图：延后加载
const BelowImage = withPlugins(LazyLoadImageCore, [
  createPriorityLoadingPlugin({ priority: "low" }),
]);`,hI=[{name:"首屏 LCP 图（high）",description:"关键图立即 eager 加载，缩短最大内容绘制时间。",config:{priority:"high"}},{name:"折叠区图（low）",description:"非首屏图延后加载，rootMargin 更大，滚动临近才加载。",config:{priority:"low"}}],yI=["high → loading=eager、rootMargin=0，立即加载","low → loading=lazy、rootMargin 更大，更晚加载","medium → 默认 lazy + 适中 rootMargin（约 200px）"],vI=["把 LCP / 首屏主图设为 high","把长列表底部、折叠内容图设为 low，错峰加载"],bI=["仅调整 loading 与 rootMargin，不会阻塞其它插件生效。","与 ScrollIdle、ConcurrencyControl 叠加时可协同控制加载节奏。","rootMargin 会被合并进核心的 IntersectionObserver 参数。"],wI={name:uI,description:dI,since:pI,tags:mI,config:gI,example:fI,examples:hI,features:yI,useCases:vI,notes:bI},xI="ProgressOverlayPlugin",PI="加载进度条覆盖层：百分比文本与 indeterminate 模式。",$I="2.0.0",SI=["visual","视觉"],CI=[{name:"showWhen",type:'"always" | "loading"',default:'"loading"',description:"何时显示"},{name:"height",type:"number",default:"3",description:"进度条高度 px"},{name:"color",type:"string",default:"#4a90e2",description:"进度条颜色"},{name:"background",type:"string",default:"transparent",description:"背景遮罩色"},{name:"showPercentText",type:"boolean",default:"false",description:"是否显示百分比文本"}],kI=`// 顶部进度条 + 百分比文本
const ProgressImage = withPlugins(LazyLoadImageCore, [
  createProgressOverlayPlugin({
    showWhen: "loading",
    height: 3,
    color: "#4a90e2",n    showPercentText: true,
  }),
]);

<ProgressImage src="https://picsum.photos/seed/progress/600/400" alt="进度蒙层" />;`,LI=[{name:"顶部进度条 + 百分比",description:"细进度条置于顶部，并显示实时百分比。",src:"https://picsum.photos/seed/progress-top/600/400",config:{showWhen:"loading",height:3,color:"#4a90e2",showPercentText:!0}},{name:"半透明遮罩 + 百分比",description:"加载期覆盖半透明遮罩，中心显示百分比，适合大图。",src:"https://picsum.photos/seed/progress-mask/600/400",config:{showWhen:"loading",height:4,color:"#22c55e",background:"rgba(0,0,0,0.12)",showPercentText:!0}}],II=["顶部 / 覆盖式进度条","实时百分比文本","颜色 / 高度 / 背景可调","加载完成后自动消失"],_I=["大图 / 慢网络加载反馈","视频封面缓冲提示","需要明确进度感知的场景","与 Skeleton 配合提升占位体验"],EI=["进度数据来自内核 progress 事件，跨域或缓存命中时可能很快跳到 100%。","与 Skeleton 同时使用时，进度条层级通常高于骨架。"],RI={name:xI,description:PI,since:$I,tags:SI,config:CI,example:kI,examples:LI,features:II,useCases:_I,notes:EI},zI="PromoBadgePlugin",OI="促销角标：在商品图片上显示 NEW/HOT/SALE 等促销标签，支持脉冲动画和丝带样式，可叠加多个。",DI="2.0.0",TI=["ecommerce","电商核心"],jI=[{name:"type",type:'"new" | "hot" | "sale" | "limited" | "bestseller" | "custom"',default:'"hot"',description:"预设标签类型"},{name:"text",type:"string",default:"undefined",description:"自定义文案（type=custom 时生效）"},{name:"position",type:'"top-left" | "top-right" | "bottom-left" | "bottom-right"',default:'"top-left"',description:"角标位置（四角）"},{name:"backgroundColor",type:"string",default:"undefined",description:"背景色"},{name:"color",type:"string",default:"undefined",description:"文字色"},{name:"animate",type:"boolean",default:"true",description:"淡入动画"},{name:"pulse",type:"boolean",default:"false",description:"脉冲呼吸动画"},{name:"ribbon",type:"boolean",default:"false",description:"丝带样式（倾斜 45°）"},{name:"style",type:"React.CSSProperties",default:"{}",description:"自定义叠加样式"}],AI=`// 1. 单个促销角标
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
<HotSaleImage src="https://picsum.photos/id/220/500/400" alt="促销商品" />;`,MI=[{name:"NEW 新品标签",description:"左上角绿色 NEW 角标。",src:"https://picsum.photos/id/168/300/300",config:{type:"new",position:"top-left"}},{name:"HOT 热门标签（脉冲动画）",description:"右上角红色 HOT，带脉冲呼吸效果。",src:"https://picsum.photos/id/175/300/300",config:{type:"hot",position:"top-right",pulse:!0}},{name:"SALE 促销丝带",description:"右上角红色丝带（倾斜 45°）。",src:"https://picsum.photos/id/188/300/300",config:{type:"sale",position:"top-right",ribbon:!0}},{name:"LIMITED 限量标签",description:"右上角紫色 LIMITED，带脉冲。",src:"https://picsum.photos/id/196/300/300",config:{type:"limited",position:"top-right",pulse:!0}},{name:"BESTSELLER 畅销标签",description:"右下角橙色 BEST 角标。",src:"https://picsum.photos/id/203/300/300",config:{type:"bestseller",position:"bottom-right"}},{name:"自定义标签（VIP 专享）",description:"自定义文案、背景色与文字色。",src:"https://picsum.photos/id/211/300/300",config:{type:"custom",text:"VIP专享",position:"top-left",backgroundColor:"#FFD700",color:"#000"}},{name:"多个标签组合",description:"一张图同时叠加 NEW + SALE（丝带）+ HOT（脉冲），不同位置不同样式。",src:"https://picsum.photos/id/220/500/400",configs:[{type:"new",position:"top-left"},{type:"sale",position:"top-right",ribbon:!0},{type:"hot",position:"bottom-right",pulse:!0}]}],BI=["6 种预设类型：NEW / HOT / SALE / LIMITED / BESTSELLER / custom","支持自定义文字、背景色、文字颜色","脉冲动画效果（吸引注意力）","丝带样式（倾斜 45°）","4 个位置可选（四角）","支持同一图片显示多个标签"],NI=["新品上市标记","热销商品突出","促销活动标识","限时限量提醒","VIP / 会员专享"],FI=["`type` 只是预设（new/hot/sale/limited/bestseller），`text` 可覆盖预设文案与颜色。","`ribbon: true` 渲染角部绶带，容器需 overflow:hidden 才不会溢出圆角。"],UI={name:zI,description:OI,since:DI,tags:TI,config:jI,example:AI,examples:MI,features:BI,useCases:NI,notes:FI},WI="RedactionPlugin",VI="隐私打码：在指定百分比区域叠加模糊或色块遮挡。",HI="2.0.0",GI=["visual","视觉"],qI=[{name:"enabled",type:"boolean",default:"true",description:"是否启用"},{name:"boxes",type:"RedactionBox[]",default:"[]",description:"遮挡区域：{ x, y, w, h (0~1), blur?, color? }"},{name:"zIndex",type:"number",default:"3",description:"层叠顺序"}],QI=`// 局部打码（如人脸 / 车牌）
const RedactedImage = withPlugins(LazyLoadImageCore, [
  createRedactionPlugin({
    boxes: [
      { x: 0.40, y: 0.30, w: 0.20, h: 0.15, blur: 8 },
    ],
  }),
]);

<RedactedImage src="https://picsum.photos/seed/redaction/600/400" alt="打码" />;`,KI=[{name:"局部模糊打码",description:"在图片 40%/30% 处覆盖一块 20%×15% 的模糊区域（如人脸）。",src:"https://picsum.photos/seed/redaction-blur/600/400",config:{enabled:!0,boxes:[{x:.4,y:.3,w:.2,h:.15,blur:8}]}},{name:"色块遮挡",description:"用半透明色块遮挡敏感区域，不依赖模糊。",src:"https://picsum.photos/seed/redaction-block/600/400",config:{enabled:!0,boxes:[{x:.1,y:.7,w:.35,h:.12,color:"rgba(0,0,0,0.85)"}]}}],YI=["按百分比坐标划定遮挡区（自适应尺寸）","支持模糊（blur）或纯色块两种遮挡","可同时覆盖多个区域","整体启停"],XI=["人脸 / 车牌隐私打码","敏感信息遮挡","截图脱敏","合规图片发布"],ZI=["坐标使用 0~1 的相对比例，图片缩放时遮挡区自动跟随。","blur 通过 backdrop-filter 实现；若浏览器不支持会以纯色块兜底。","打码是覆盖层，不改变原图像素，导出原图不会被脱敏。"],JI={name:WI,description:VI,since:HI,tags:GI,config:qI,example:QI,examples:KI,features:YI,useCases:XI,notes:ZI},e_="ResponsivePlugin",t_="响应式图片：注入 srcset/sizes 多宽度资源，浏览器按视口选择最佳尺寸，兼顾清晰度与流量。",n_="2.0.0",o_=["a11y","可访问性","网络","响应式"],r_=[{name:"enabled",type:"boolean",default:"true",description:"是否启用响应式"},{name:"variants",type:"{ width: number; src?: string }[]",default:"[{400},{800},{1200}]",description:"宽度变体列表"},{name:"buildSrc",type:"(baseSrc, width) => string",default:"defaultBuildSrc（追加 ?w=）",description:"自定义链接生成（函数型，参见用法示例）"},{name:"sizes",type:"string",default:'"(max-width: 800px) 100vw, 800px"',description:"sizes 属性"}],a_=`const ResponsiveImage = withPlugins(LazyLoadImageCore, [
  createResponsivePlugin({
    variants: [{ width: 400 }, { width: 800 }, { width: 1200 }],
    sizes: "(max-width: 800px) 100vw, 800px",
    buildSrc: (base, w) => \`\${base}?w=\${w}\`,
  }),
]);

<ResponsiveImage src="https://picsum.photos/id/1015/500/300" alt="响应式示例" />;`,i_=[{name:"默认多宽度",description:"注入 400/800/1200 三档 srcset。",src:"https://picsum.photos/id/1015/500/300",config:{variants:[{width:400},{width:800},{width:1200}],sizes:"(max-width: 800px) 100vw, 800px"}},{name:"自定义尺寸档位",description:"仅 320/640 两档，适合轻量场景。",src:"https://picsum.photos/id/1021/500/300",config:{variants:[{width:320},{width:640}],sizes:"(max-width: 640px) 100vw, 640px"}},{name:"关闭响应式",description:"enabled=false 时不注入 srcset。",src:"https://picsum.photos/id/1026/500/300",config:{enabled:!1}}],s_=["srcset 多宽度","自定义 buildSrc","sizes 响应式","自动适配屏幕/Retina","可关闭"],l_=["响应式画廊","移动端流量优化","Retina 高清","CMS 图片"],c_=["buildSrc 为函数型配置，静态预览使用默认追加 ?w= 策略；自定义用法见用法示例。"],u_={name:e_,description:t_,since:n_,tags:o_,config:r_,example:a_,examples:i_,features:s_,useCases:l_,notes:c_},d_="RetryOnErrorPlugin",p_="失败重试：图片加载失败后按指数退避（可选抖动）自动重试，提升网络抖动 / 瞬时故障下的自愈成功率，并提供重试进度角标。",m_="2.0.0",g_=["network","网络","重试","自愈"],f_=[{name:"maxRetries",type:"number",default:"2",description:"最大重试次数"},{name:"baseDelayMs",type:"number",description:"退避基准毫秒（默认 500）"},{name:"jitter",type:"boolean",description:"是否在退避基础上叠加随机抖动"}],h_=`import { LazyLoadImageCore, createRetryOnErrorPlugin, withPlugins } from "vane-lazy-image";

const LazyImage = withPlugins(LazyLoadImageCore, [
  createRetryOnErrorPlugin({ maxRetries: 3, baseDelayMs: 400, jitter: true }),
]);

// 故意触发失败以观察指数退避重试
<LazyImage src="https://invalid.example.com/x.png" alt="失败重试示例" />`,y_=[{name:"自动重试",description:"失败后指数退避重试，用尽后角标显示『重试失败』（演示用无效地址）。",src:"https://invalid.example.com/retry.png",config:{maxRetries:3,baseDelayMs:400}},{name:"带抖动退避",description:"在指数退避基础上叠加随机抖动，避免重试风暴。",src:"https://invalid.example.com/retry-jitter.png",config:{maxRetries:2,baseDelayMs:600,jitter:!0}}],v_=["指数退避重试：delay = baseDelayMs * 2^(n-1)","可选 jitter 抖动避免重试风暴","角标实时显示『重试中 n/max』与『重试失败(max)』","用尽后放行错误给下游插件（ErrorOverlay / ErrorBadge）"],b_=["弱网 / 瞬时 5xx 自愈","与手动重试（ErrorOverlay）互补"],w_=["maxRetries 默认 2，baseDelayMs 默认 500","重试用 ?retry=时间戳&n=count 防止缓存命中","重试用尽返回 false，错误继续向下游传播"],x_={name:d_,description:p_,since:m_,tags:g_,config:f_,example:h_,examples:y_,features:v_,useCases:b_,notes:w_},P_="RevealAnimationPlugin",$_="图片揭示动画：为图片加载添加各种进场动画（淡入/缩放/旋转/翻转/弹跳/弹性等 16 种预设 + 自定义），纯 CSS 无依赖。",S_="2.0.0",C_=["interaction","视觉效果与交互","visual"],k_=[{name:"animation",type:'"fade" | "fade-up" | "fade-down" | "fade-left" | "fade-right" | "zoom-in" | "zoom-out" | "rotate-in" | "flip-x" | "flip-y" | "slide-up" | "slide-down" | "slide-left" | "slide-right" | "bounce" | "elastic" | "custom"',default:'"fade-up"',description:"动画类型"},{name:"duration",type:"number",default:"600",description:"持续时间（毫秒）"},{name:"delay",type:"number",default:"0",description:"延迟（毫秒）"},{name:"easing",type:"string",default:'"ease-out"',description:"缓动函数"},{name:"customAnimation",type:"string",default:'""',description:"自定义动画名（animation 为 custom 时生效）"},{name:"customKeyframes",type:"string",default:'""',description:"自定义 keyframes 文本"},{name:"fillMode",type:'"none" | "forwards" | "backwards" | "both"',default:'"both"',description:"动画填充模式"},{name:"disabled",type:"boolean",default:"false",description:"是否禁用"}],L_=`// 1. 组装带揭示动画的懒加载图片
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
});`,I_=[{name:"淡入上浮（默认）",description:"fade-up：图片加载完成后从下方淡入上浮，最通用的进场效果。",src:"https://picsum.photos/id/1018/400/300",config:{animation:"fade-up",duration:700,easing:"ease-out"}},{name:"缩放进入 zoom-in",description:"图片由 1.2 倍缩放回落至原尺寸并淡入，适合主视觉。",src:"https://picsum.photos/id/1015/400/300",config:{animation:"zoom-in",duration:800}},{name:"旋转进入 rotate-in",description:"带轻微旋转的进场，动感更强。",src:"https://picsum.photos/id/1024/400/300",config:{animation:"rotate-in",duration:900,delay:100}},{name:"弹跳 bounce",description:"带回弹缓冲的进场，活泼、吸引注意。",src:"https://picsum.photos/id/1039/400/300",config:{animation:"bounce",duration:1e3}},{name:"弹性 elastic + 自定义时长",description:"弹性缓动 + 更长时长，强调“弹出”质感。",src:"https://picsum.photos/id/1043/400/300",config:{animation:"elastic",duration:1200,easing:"cubic-bezier(0.68, -0.55, 0.265, 1.55)"}},{name:"自定义关键帧 custom",description:"通过 customAnimation 指定动画名，并以 customKeyframes 注入关键帧文本，可做任意效果。",src:"https://picsum.photos/id/1050/400/300",config:{animation:"custom",customAnimation:"myReveal",customKeyframes:"@keyframes myReveal { from { opacity: 0; transform: scale(1.2) rotate(8deg); } to { opacity: 1; transform: none; } }"}}],__=["16 种预设动画（淡入/缩放/旋转/翻转/滑动/弹跳/弹性）","支持自定义动画名 + 关键帧文本","可配置时长、延迟、缓动函数","fill 模式控制动画结束态","可一键禁用（disabled，适配低端设备）","纯 CSS 实现，无运行时依赖"],E_=["图片列表进场","瀑布流懒加载","轮播图切换","首屏内容揭示","卡片/区块入场动画","营销落地页视觉点缀"],R_=["动画在图片加载完成后触发一次；再次滚动不会重复播放。","低端设备或开启“减少动态效果”偏好时，可设 disabled: true 关闭动画。"],z_={name:P_,description:$_,since:S_,tags:C_,config:k_,example:L_,examples:I_,features:__,useCases:E_,notes:R_},O_="SEOPlugin",D_="SEO 增强：alt/title 回退、固定容器宽高比减少 CLS、将首屏关键图设为 LCP 优先（eager + preload），提升搜索排名与加载体验。",T_="2.0.0",j_=["a11y","可访问性","SEO"],A_=[{name:"enabled",type:"boolean",default:"true",description:"是否启用"},{name:"altFallback",type:"string",default:"undefined",description:"未提供 alt 时的回退值"},{name:"title",type:"string",default:"undefined",description:"图片 title（提示与关键词）"},{name:"aspectRatio",type:"string",default:"undefined",description:'固定容器宽高比（如 "4/3"），减少 CLS'},{name:"priority",type:'"auto" | "lcp"',default:'"auto"',description:"lcp 时设为 eager 加载"},{name:"preload",type:"boolean",default:"false",description:"挂载时注入 preload 预载"}],M_=`const SeoImage = withPlugins(LazyLoadImageCore, [
  createSEOPlugin({
    altFallback: "示例图片",
    title: "演示图像",
    aspectRatio: "4/3",
    priority: "lcp",
    preload: true,
  }),
]);

<SeoImage src="https://picsum.photos/id/1015/500/300" alt="" />;`,B_=[{name:"LCP 关键图",description:"首屏关键图：eager + preload + 固定比例，优化 LCP。",src:"https://picsum.photos/id/1015/500/300",config:{altFallback:"示例图片",title:"演示图像",aspectRatio:"4/3",priority:"lcp",preload:!0}},{name:"alt/title 回退",description:"补充 alt 与 title，利于读屏与 SEO。",src:"https://picsum.photos/id/1021/500/300",config:{altFallback:"商品图",title:"热销商品"}},{name:"仅固定比例",description:"aspectRatio 防 CLS，其余默认。",src:"https://picsum.photos/id/1026/500/300",config:{aspectRatio:"16/9"}}],N_=["alt 回退","title 设置","aspect-ratio 防 CLS","LCP 优先（eager）","preload 预载","可关闭"],F_=["首屏 LCP 优化","SEO 排名","结构化标签","CLS 治理"],U_=['priority:"lcp" 会强制 eager 加载，请勿对所有图片使用，仅用于首屏关键图。'],W_={name:O_,description:D_,since:T_,tags:j_,config:A_,example:M_,examples:B_,features:N_,useCases:F_,notes:U_},V_="ScrollIdlePlugin",H_="滚动空闲加载：滚动停止后再发起加载，避免与滚动争抢带宽。",G_="2.0.0",q_=["loading","加载策略"],Q_=[{name:"idleMs",type:"number",default:"120",description:"判定为“空闲”的静止时间（毫秒）"},{name:"onlyWhenIntersecting",type:"boolean",default:"true",description:"是否仅在进入视口后生效（否则所有加载都会等待空闲）"},{name:"maxWaitMs",type:"number",default:"1200",description:"最长等待空闲的时间（毫秒），超过则直接继续加载，避免长时间滚动导致饥饿"},{name:"target",type:'"window" | "container"',default:'"window"',description:"监听对象：window 或容器（容器将使用 context.containerRef.current）"},{name:"axis",type:'"vertical" | "horizontal" | "both"',default:'"vertical"',description:"滚动轴向：vertical/horizontal/both（目前用于调试标注，可按需扩展策略）"},{name:"debug",type:"boolean",default:"false",description:"调试输出"}],K_=`const LazyImage = withPlugins(LazyLoadImageCore, [
  createScrollIdlePlugin({
    idleMs: 160,
    onlyWhenIntersecting: true,
    maxWaitMs: 1200, // 最多等 1.2s，避免饥饿
  }),
]);`,Y_=[{name:"滚动停止后加载",description:"用户停止滚动 160ms 后再加载，滚动过程中不打断主线程与带宽。",config:{idleMs:160,onlyWhenIntersecting:!0,maxWaitMs:1200}},{name:"更敏感空闲",description:"80ms 即判定空闲，适合加载较轻的图标 / 缩略图。",config:{idleMs:80,maxWaitMs:800}}],X_=["监听滚动，空闲（停止滚动 idleMs）后才发起加载","默认仅进入视口后生效，不拖累首屏外元素","maxWaitMs 兜底，防止长时间连续滚动导致饥饿","支持 window / 容器两种监听对象"],Z_=["长列表滚动时避免与主线程 / 带宽争抢","低端机滚动卡顿优化"],J_=["与 ConcurrencyControl 叠加效果最佳。","maxWaitMs 务必设置，否则连续滚动可能长期不加载。","容器模式会使用 context.containerRef.current 作为监听目标。"],eE={name:V_,description:H_,since:G_,tags:q_,config:Q_,example:K_,examples:Y_,features:X_,useCases:Z_,notes:J_},tE="SkeletonPlugin",nE="骨架屏占位：加载期显示 shimmer/pulse 骨架动画。",oE="2.0.0",rE=["visual","视觉"],aE=[{name:"type",type:'"shimmer" | "pulse"',default:'"shimmer"',description:"动画类型"},{name:"backgroundColor",type:"string",default:"#e5e7eb",description:"底色"},{name:"highlightColor",type:"string",default:"#f3f4f6",description:"shimmer 高亮色"},{name:"borderRadius",type:"number",default:"6",description:"圆角 px"},{name:"zIndex",type:"number",default:"1",description:"层叠顺序"},{name:"showWhen",type:'"always" | "loading"',default:'"loading"',description:"何时显示"}],iE=`// 加载期 shimmer 骨架占位
const SkeletonImage = withPlugins(LazyLoadImageCore, [
  createSkeletonPlugin({
    type: "shimmer",
    borderRadius: 8,
    showWhen: "loading",
  }),
]);

<SkeletonImage src="https://picsum.photos/seed/skeleton/600/400" alt="骨架屏" />;`,sE=[{name:"Shimmer 骨架",description:"流光骨架，提示内容加载中，圆角 8。",src:"https://picsum.photos/seed/skeleton-shimmer/600/400",config:{type:"shimmer",borderRadius:8,showWhen:"loading"}},{name:"Pulse 骨架",description:"呼吸式明暗变化，更克制的占位动画。",src:"https://picsum.photos/seed/skeleton-pulse/600/400",config:{type:"pulse",backgroundColor:"#eee",highlightColor:"#f5f5f5",borderRadius:8}}],lE=["shimmer（流光）/ pulse（呼吸）两种动画","底色 / 高亮色 / 圆角可调","加载完成自动淡出","零图片请求，首屏即见"],cE=["列表 / 卡片加载占位","首屏骨架屏","与 BlurUp / LQIP 配合的兜底占位","弱网环境体验优化"],uE=['showWhen:"loading" 表示仅在加载期显示，图片就绪后自动让位。',"与 BlurUp 叠加时，建议骨架层级低于模糊图（zIndex 较小）。"],dE={name:tE,description:nE,since:oE,tags:rE,config:aE,example:iE,examples:sE,features:lE,useCases:cE,notes:uE},pE="SocialSharePlugin",mE="社交分享：在商品图片上显示社交分享按钮，支持 6 大平台、悬停展开、自定义尺寸与分享回调。",gE="2.0.0",fE=["ecommerce","电商核心"],hE=[{name:"platforms",type:'Array<"facebook"|"twitter"|"pinterest"|"linkedin"|"whatsapp"|"wechat">',default:'["facebook","twitter","pinterest"]',description:"分享平台列表"},{name:"position",type:'"top-left" | "top-right" | "bottom-left" | "bottom-right"',default:'"top-right"',description:"主按钮位置"},{name:"showOnHover",type:"boolean",default:"false",description:"悬停显示模式"},{name:"title",type:"string",default:'"分享图片"',description:"分享标题"},{name:"description",type:"string",default:'""',description:"分享描述"},{name:"ogImage",type:"string",default:"undefined",description:"Pinterest 等使用的媒体图"},{name:"size",type:'"small" | "medium" | "large"',default:'"medium"',description:"按钮尺寸"},{name:"onShare",type:"(platform) => void",default:"undefined",description:"分享回调"},{name:"style",type:"React.CSSProperties",default:"{}",description:"自定义容器样式"}],yE=`// 1. 指定分享平台，点击展开具体入口
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
<ShareImage src="https://picsum.photos/id/237/500/400" alt="商品图" />;`,vE=[{name:"默认分享按钮",description:"点击主按钮展开具体平台，再点平台进行分享。",src:"https://picsum.photos/id/237/500/400",config:{platforms:["facebook","twitter","pinterest"],position:"top-right",showOnHover:!1,title:"Amazing Product",description:"Check out this amazing product!"}},{name:"悬停显示（鼠标悬停时出现）",description:"默认隐藏，鼠标悬停图片才显示分享按钮。",src:"https://picsum.photos/id/247/500/400",config:{platforms:["facebook","twitter","linkedin","whatsapp"],position:"top-right",showOnHover:!0,size:"medium"}},{name:"更多平台（包含微信）",description:"小尺寸、右下角，覆盖 6 个平台。",src:"https://picsum.photos/id/257/500/400",config:{platforms:["facebook","twitter","pinterest","linkedin","whatsapp","wechat"],position:"bottom-right",showOnHover:!1,size:"small"}},{name:"大尺寸按钮",description:"左上角大尺寸分享按钮。",src:"https://picsum.photos/id/267/500/400",config:{platforms:["facebook","twitter","pinterest"],position:"top-left",showOnHover:!1,size:"large"}}],bE=["支持 6 大社交平台：Facebook / Twitter / Pinterest / LinkedIn / WhatsApp / WeChat","悬停显示模式","3 种尺寸可选（small / medium / large）","4 个位置可选","展开 / 收起动画","分享回调通知","自定义分享标题和描述"],wE=["电商产品分享","内容营销推广","作品集展示","照片 / 图片社区","礼物推荐分享","房产 / 旅游分享"],xE=["`showOnHover: true` 时分享条只在悬停出现；示例页默认常驻便于观察。","微信没有可直接打开的分享 URL，走 `onShare` 回调由业务方接入。"],PE={name:pE,description:mE,since:gE,tags:fE,config:hE,example:yE,examples:vE,features:bE,useCases:wE,notes:xE},$E="Spin360Plugin",SE="360° 环物旋转（gallery 核心插件）：把 images 当逐帧序列，拖拽或自动播放切换帧，覆盖主图显示。",CE="2.1.0",kE=["gallery","图集","360","环物","旋转"],LE=[{name:"sensitivity",type:"number",default:"6",description:"拖拽灵敏度：像素位移超过该值才翻一帧"},{name:"autoPlay",type:"boolean",default:"false",description:"是否自动旋转"},{name:"autoPlayInterval",type:"number",default:"120",description:"自动旋转间隔（ms）"}],IE=`import { GalleryCore } from "vane-lazy-image/gallery";
import { createSpin360Plugin } from "vane-lazy-image/custom-plugins/Spin360Plugin";

<GalleryCore images={frames} plugins={[createSpin360Plugin({ autoPlay: true })]} />`,_E=[{name:"拖拽旋转",description:"在画布上左右拖拽切换 360 帧。",config:{autoPlay:!1}},{name:"自动旋转",description:"autoPlay 开启后自动逐帧旋转，适合展示。",config:{autoPlay:!0,autoPlayInterval:120}}],EE=["拖拽旋转 360°","自动播放","帧计数显示","逐帧序列（images 即帧）"],RE=["商品 360 环物展示","模型/预览图旋转","全景预览"],zE=["images 数组即 360 帧序列；少于 2 帧时不渲染。覆盖层 zIndex 5，独立于底层主图加载。"],OE={name:$E,description:SE,since:CE,tags:kE,config:LE,example:IE,examples:_E,features:EE,useCases:RE,notes:zE},DE="SvgPlaceholderPlugin",TE="SVG 占位：在加载期间注入自定义 SVG 占位内容（如骨架、品牌图形），加载成功后淡出，增强加载反馈与品牌感。",jE="2.0.0",AE=["other","视觉","占位"],ME=[{name:"svgContent",type:"string | ((context) => string)",default:"undefined",description:"SVG 字符串或动态生成函数"},{name:"background",type:"string",default:'"transparent"',description:"叠加层背景"},{name:"opacity",type:"number",default:"1",description:"不透明度(0~1)"},{name:"zIndex",type:"number",default:"3",description:"叠加层级"},{name:"showWhen",type:'"always" | "idle" | "loading" | "loaded" | "error"',default:'"loading"',description:"显示条件"},{name:"fadeOutOnLoaded",type:"boolean",default:"true",description:"加载成功后是否淡出"}],BE=`const SvgImage = withPlugins(LazyLoadImageCore, [
  createSvgPlaceholderPlugin({
    svgContent: () => \`<svg viewBox='0 0 100 100'><circle cx='50' cy='50' r='40' fill='#ddd'/></svg>\`,
    showWhen: "loading",
  }),
]);

<SvgImage src="https://picsum.photos/id/1015/500/300" alt="SVG 占位示例" />;`,NE=[{name:"圆形骨架占位",description:"加载期显示灰色圆形 SVG 占位，完成后淡出。",src:"https://picsum.photos/id/1015/500/300",config:{svgContent:"<svg viewBox='0 0 100 100'><circle cx='50' cy='50' r='40' fill='#ddd'/></svg>",showWhen:"loading"}},{name:"带背景占位",description:"浅色背景衬托占位 SVG。",src:"https://picsum.photos/id/1021/500/300",config:{svgContent:"<svg viewBox='0 0 100 100'><rect x='10' y='10' width='80' height='80' rx='8' fill='#eee'/></svg>",background:"#fafafa"}},{name:"常驻标识",description:"showWhen=always，占位层持续显示。",src:"https://picsum.photos/id/1026/500/300",config:{svgContent:"<svg viewBox='0 0 100 100'><rect width='100' height='100' fill='rgba(0,0,0,0.04)'/></svg>",showWhen:"always"}}],FE=["注入任意 SVG 占位","加载时/常驻/多状态显示","淡出过渡","背景/透明度/层级可调","函数/字符串来源"],UE=["动画骨架屏","品牌图形占位","加载反馈","差异化占位"],WE=["svgContent 支持函数型（按 context 动态生成），静态预览使用字符串；函数用法见用法示例。"],VE={name:DE,description:TE,since:jE,tags:AE,config:ME,example:BE,examples:NE,features:FE,useCases:UE,notes:WE},HE="ThumbPreloadPlugin",GE="相邻图预加载（gallery 增强插件）：监听主图切换事件，预加载后续若干张到浏览器缓存，使切换近乎瞬时。",qE="2.1.0",QE=["gallery","图集","预加载","性能"],KE=[{name:"lookahead",type:"number",default:"1",description:"向后预加载张数"},{name:"alsoPrevious",type:"boolean",default:"false",description:"是否也预加载前一张"}],YE=`import { GalleryCore } from "vane-lazy-image/gallery";
import { createThumbPreloadPlugin } from "vane-lazy-image/custom-plugins/ThumbPreloadPlugin";

<GalleryCore images={images} plugins={[createThumbPreloadPlugin({ lookahead: 2 })]} />`,XE=[{name:"预加载相邻图",description:"切换主图后预热后 2 张（及前一张），缩略条点击切换零白屏；同 URL 只预热一次。",config:{lookahead:2,alsoPrevious:!0}}],ZE=["onActiveChange 监听","相邻图预热","模块级去重","纯副作用无 UI"],JE=["大图图集","弱网流畅切换","电商商品多图"],e5=["不渲染 UI；预热在 GalleryCore 的切换 effect 内执行，安全副作用。"],t5={name:HE,description:GE,since:qE,tags:QE,config:KE,example:YE,examples:XE,features:ZE,useCases:JE,notes:e5},n5="ThumbSyncPlugin",o5="缩略图联动（gallery 核心插件）：渲染缩略图条，点击缩略图切换主图，选中态描边高亮。",r5="2.1.0",a5=["gallery","图集","缩略","联动"],i5=[{name:"gap",type:"number",default:"8",description:"缩略图间距（px）"},{name:"thumbWidth",type:"number",default:"64",description:"缩略图宽（px）"},{name:"thumbHeight",type:"number",default:"64",description:"缩略图高（px）"},{name:"showActiveRing",type:"boolean",default:"true",description:"选中缩略图描边高亮"},{name:"radius",type:"number",default:"6",description:"缩略图圆角（px）"}],s5=`import { GalleryCore } from "vane-lazy-image/gallery";
import { createThumbSyncPlugin } from "vane-lazy-image/custom-plugins/ThumbSyncPlugin";

<GalleryCore images={images} plugins={[createThumbSyncPlugin()]} />`,l5=[{name:"基础缩略联动",description:"点击缩略图切换主图，选中态描边；键盘左右键也可切换（Core 级支持）。",config:{}}],c5=["缩略图条渲染","点击切换主图","选中态描边","键盘左右键切换（GalleryCore 级）"],u5=["电商商品图集","多图详情页","相册"],d5=["activeIndex 由 useGalleryRuntime 用 useState 持有，切换即主图重渲染，无需手动 forceUpdate。"],p5={name:n5,description:o5,since:r5,tags:a5,config:i5,example:s5,examples:l5,features:c5,useCases:u5,notes:d5},m5="TransitionPlugin",g5="加载成功过渡动画：从指定透明度/缩放到目标值的平滑过渡。",f5="2.0.0",h5=["visual","视觉"],y5=[{name:"durationMs",type:"number",default:"400",description:"过渡时长 ms"},{name:"easing",type:"string",default:"ease",description:"缓动函数"},{name:"fromOpacity",type:"number",default:"0",description:"起始透明度"},{name:"toOpacity",type:"number",default:"1",description:"结束透明度"},{name:"fromScale",type:"number",default:"1",description:"起始缩放"},{name:"toScale",type:"number",default:"1",description:"结束缩放"}],v5=`// 缩放 + 淡入过渡
const TransImage = withPlugins(LazyLoadImageCore, [
  createTransitionPlugin({
    durationMs: 500,
    fromOpacity: 0,
    toOpacity: 1,
    fromScale: 1.05,
    toScale: 1,
  }),
]);

<TransImage src="https://picsum.photos/seed/transition/600/400" alt="过渡" />;`,b5=[{name:"缩放淡入",description:"从 1.05 倍淡入到原尺寸，轻盈的入场感。",src:"https://picsum.photos/seed/transition-zoom/600/400",config:{durationMs:500,fromOpacity:0,toOpacity:1,fromScale:1.05,toScale:1}},{name:"纯淡入",description:"仅透明度过渡，不含缩放。",src:"https://picsum.photos/seed/transition-fade/600/400",config:{durationMs:400,fromOpacity:0,toOpacity:1}}],w5=["透明度 + 缩放双维度过渡","起始 / 结束值均可定制","时长与缓动可调","相比 FadeIn 更灵活"],x5=["图片入场动画","卡片翻转 / 弹出图","需要缩放感的场景","与视差 / 滚动联动"],P5=["fromScale=toScale=1 时退化为纯淡入，等价于更轻量的 FadeIn。","缩放在 transform 上实现，注意父容器 overflow 与定位。"],$5={name:m5,description:g5,since:f5,tags:h5,config:y5,example:v5,examples:b5,features:w5,useCases:x5,notes:P5},S5="UserBehaviorPlugin",C5="用户行为：实时统计每张图片的视口驻留时长、点击次数、进入/离开次数，并在图片上叠加可视化面板，卸载时统一上报。",k5="2.0.0",L5=["viewport","视口与交互","数据","分析"],I5=[{name:"enabled",type:"boolean",default:"true",description:"是否启用统计与面板"},{name:"onReport",type:"(data: { src; dwellMs; clicks; enters; leaves }) => void",default:"undefined",description:"卸载时上报回调（默认打印到控制台）"},{name:"showOverlay",type:"boolean",default:"true",description:"是否在图片角落显示统计面板（生产版式建议关闭）"}],_5=`const BehaviorImage = withPlugins(LazyLoadImageCore, [
  createUserBehaviorPlugin({
    onReport: (data) => {
      // 上报到分析后端
      console.log("behavior", data);
    },
  }),
]);

// 在组件中使用
<BehaviorImage src="https://picsum.photos/id/1015/500/300" alt="用户行为示例" />;`,E5=[{name:"默认统计面板",description:"右上角实时显示驻留、点击、进入/离开数据。",src:"https://picsum.photos/id/1015/500/300",config:{enabled:!0}},{name:"关闭统计",description:"enabled=false 时不渲染面板也不统计。",src:"https://picsum.photos/id/1021/500/300",config:{enabled:!1}}],R5=["实时统计驻留时长","点击次数统计","进入 / 离开次数统计","视口状态指示（绿/红点）","卸载时统一上报","可通过 enabled 关闭"],z5=["内容热度分析","广告位效果评估","UX 研究与转化漏斗","图片曝光与互动埋点"],O5=["统计结果在卸载时通过 `onReport` 上报（默认打印控制台），示例页用面板实时展示。","`enabled: false` 可整体关闭统计与面板，不影响图片加载。","showOverlay: false 只上报数据、不渲染角标，适合直接接入真实版式。"],D5={name:S5,description:C5,since:k5,tags:L5,config:I5,example:_5,examples:E5,features:R5,useCases:z5,notes:O5},T5="VideoPosterPlugin",j5="视频海报：将图片作为视频封面，点击播放视频（模态框或内联），支持自动播放、循环、静音与自定义按钮。",A5="2.0.0",M5=["ecommerce","电商核心"],B5=[{name:"videoUrl",type:"string",default:"undefined",description:"视频 URL"},{name:"autoPlay",type:"boolean",default:"true",description:"自动播放"},{name:"loop",type:"boolean",default:"false",description:"循环播放"},{name:"muted",type:"boolean",default:"true",description:"静音（移动端自动播放需静音）"},{name:"playButtonPosition",type:'"center" | "top-left" | "top-right" | "bottom-left" | "bottom-right"',default:'"center"',description:"播放按钮位置"},{name:"playButtonSize",type:'"small" | "medium" | "large"',default:'"large"',description:"按钮尺寸"},{name:"playButtonStyle",type:"React.CSSProperties",default:"{}",description:"自定义按钮样式"},{name:"showPlayButton",type:"boolean",default:"true",description:"是否显示播放按钮"},{name:"playInModal",type:"boolean",default:"true",description:"模态框播放（否则内联）"},{name:"playIcon",type:"ReactNode",default:"undefined",description:"自定义播放图标"},{name:"onPlay",type:"() => void",default:"undefined",description:"播放回调"}],N5=`// 1. 点击播放按钮，在模态框中播放视频
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
<VideoImage src="https://picsum.photos/id/1015/500/300" alt="商品视频封面" />;`,F5=[{name:"基础视频海报（模态框播放）",description:"点击图片中心播放按钮，在模态框中播放视频。",src:"https://picsum.photos/id/1015/500/300",config:{videoUrl:"https://www.w3schools.com/html/mov_bbb.mp4",playButtonPosition:"center",playButtonSize:"large"}},{name:"内联播放模式",description:"视频直接在图片位置播放，不弹出模态框。",src:"https://picsum.photos/id/1018/500/300",config:{videoUrl:"https://www.w3schools.com/html/movie.mp4",playInModal:!1,playButtonPosition:"center",playButtonSize:"medium",autoPlay:!0,loop:!0,muted:!0}},{name:"自定义播放按钮样式",description:"按钮位于右下角，红色背景，小尺寸。",src:"https://picsum.photos/id/1019/500/300",config:{videoUrl:"https://www.w3schools.com/html/mov_bbb.mp4",playButtonPosition:"bottom-right",playButtonSize:"small",playButtonStyle:{backgroundColor:"rgba(255, 59, 48, 0.9)",border:"2px solid white"}}},{name:"自定义播放图标",description:"示例以默认三角形呈现；可用 playIcon 替换为自定义图标（如 “PLAY” 文字）。",src:"https://picsum.photos/id/1020/500/300",config:{videoUrl:"https://www.w3schools.com/html/mov_bbb.mp4",playButtonPosition:"center",playButtonSize:"large"}},{name:"不同按钮位置",description:"播放按钮位于左上角，绿色背景。",src:"https://picsum.photos/id/1021/500/300",config:{videoUrl:"https://www.w3schools.com/html/mov_bbb.mp4",playButtonPosition:"top-left",playButtonSize:"small",playButtonStyle:{backgroundColor:"rgba(52, 199, 89, 0.9)"}}}],U5=["使用提示：确保视频 URL 可访问，否则播放会失败；移动端自动播放可能受浏览器限制，建议设置 muted=true；大视频文件建议使用流媒体服务；模态框播放体验更好但会阻断其它交互；内联播放适合小尺寸视频预览。"],W5=["模态框播放（全屏）","内联播放（图片位置直接播）","自定义播放按钮大小 / 位置 / 样式","多位置支持（center / top-left / bottom-left / bottom-right）","播放控制（自动播放 / 循环 / 静音）","自定义图标"],V5=["视频网站","在线教育","电商平台（商品视频展示）","新闻媒体","视频博客","企业官网"],H5={name:T5,description:j5,since:A5,tags:M5,config:B5,example:N5,examples:F5,notes:U5,features:W5,useCases:V5},G5="ViewportAwarePlugin",q5="视口感知加载：真正把 IntersectionObserver 的 rootMargin / threshold / once 下发给核心，控制图片「提前多少距离 / 多灵敏」才触发加载，并在四角显示绿/灰指示点辅助观察。",Q5="2.0.0",K5=["viewport","视口与交互","懒加载"],Y5=[{name:"rootMargin",type:"string",default:"未设置（沿用 Core 默认 0px）",description:'IO 边距，控制提前/延后触发。如 "200px" 表示进入视口前 200px 就开始加载（预加载），"-50px" 表示进入后再等 50px'},{name:"threshold",type:"number | number[]",default:"未设置",description:"IO 触发阈值（0~1），控制加载灵敏度"},{name:"once",type:"boolean",default:"true",description:"是否只加载一次：true=进入视口加载后停止观察（省资源）；false=持续观察"},{name:"unobserveOnVisible",type:"boolean",default:"由 once 推导",description:"显式下发，优先级高于 once"},{name:"showDot",type:"boolean",default:"false",description:"是否显示视口指示点（仅辅助观察，非核心能力）"},{name:"dotPosition",type:'"top-left" | "top-right" | "bottom-left" | "bottom-right"',default:'"bottom-right"',description:"指示点位置"},{name:"hideWhenOut",type:"boolean",default:"false",description:"离开视口时隐藏指示点"}],X5=`const ViewportImage = withPlugins(LazyLoadImageCore, [
  // 提前 200px 预加载，进入视口即就绪，滚动更顺滑
  createViewportAwarePlugin({ rootMargin: "200px", threshold: 0.01, showDot: true }),
]);

<ViewportImage src="https://picsum.photos/id/1015/500/300" alt="视口感知示例" />;`,Z5=[{name:"提前预加载（rootMargin 200px）",description:"元素进入视口前 200px 就开始加载，滚到时图片已就绪，消除白屏。",src:"https://picsum.photos/id/1015/500/300",config:{rootMargin:"200px",threshold:.01,showDot:!0}},{name:"严格进入才加载（rootMargin 0px）",description:"默认行为：图片真正进入视口边缘才触发加载。",src:"https://picsum.photos/id/1024/500/300",config:{rootMargin:"0px",showDot:!0,dotPosition:"top-left"}},{name:"离开时隐藏指示点",description:"仅在进入视口显示绿点，离开后隐藏。",src:"https://picsum.photos/id/1035/500/300",config:{rootMargin:"100px",showDot:!0,dotPosition:"top-right",hideWhenOut:!0}}],J5=["rootMargin 真正下发，控制提前/延后加载距离","threshold 调节加载灵敏度","once / unobserveOnVisible 控制是否只加载一次","四角可选指示点（辅助观察真实 IO 状态）","onEnterViewport / onLeaveViewport 事件钩子"],e3=["长列表滚动预加载（rootMargin 提前量）","调试图片加载时机（配合指示点）","无限滚动 / 瀑布流场景","首屏 LCP 图片前的视口调度"],t3=["核心能力是 transformProps 把 IO 配置下发给核心，而不是装饰层；showDot 仅为观察辅助，可关闭。","once=false 仅表示持续观察，核心仍按加载状态只加载一次；如需「离开再回来重新加载」请配合 reload/reset 钩子。"],n3={name:G5,description:q5,since:Q5,tags:K5,config:Y5,example:X5,examples:Z5,features:J5,useCases:e3,notes:t3},o3="ViewportDebouncePlugin",r3="视口防抖（v2 真实实现）：进入视口后并不立即加载，而是等待元素「稳定停留 debounceMs」才放行；若期间离开视口且未达 maxWaitMs 上限，则中止本次加载，真正避免快速滚动时误加载/重复加载。",a3="2.0.0",i3=["viewport","视口与交互","防抖"],s3=[{name:"debounceMs",type:"number",default:"200",description:"进入视口后需稳定停留的时长（毫秒），到时才放行加载"},{name:"maxWaitMs",type:"number",default:"1200",description:"最长等待上限，避免快速来回一直不加载（饥饿保护）"},{name:"onlyWhenIntersecting",type:"boolean",default:"true",description:"仅在进入视口时门控；若离开且未达 maxWaitMs 则中止本次加载"},{name:"debug",type:"boolean",default:"false",description:"是否输出调试日志"}],l3=`const StableImage = withPlugins(LazyLoadImageCore, [
  // 进入视口稳定 200ms 才加载，快速划过直接放弃
  createViewportDebouncePlugin({ debounceMs: 200, maxWaitMs: 1200 }),
]);

<StableImage src="https://picsum.photos/id/1015/500/300" alt="视口防抖示例" />;`,c3=[{name:"默认防抖（200ms）",description:"快速滚动时抑制抖动：元素需稳定停留 200ms 才加载，一闪而过的不加载。",src:"https://picsum.photos/id/1015/500/300",config:{debounceMs:200}},{name:"加大防抖间隔",description:"300ms 间隔，更适合惯性较大的移动端滚动。",src:"https://picsum.photos/id/1020/500/300",config:{debounceMs:300}},{name:"开启调试日志",description:"控制台输出稳定/中止判定日志，便于排查。",src:"https://picsum.photos/id/1025/500/300",config:{debounceMs:200,debug:!0}}],u3=["门控钩子真正延迟加载到稳定期","快速划过（离开未达上限）中止加载","maxWaitMs 饥饿保护","可调防抖间隔与上限","调试日志输出"],d3=["快速滚动列表 / 瀑布流","移动端惯性滚动","防止抖动导致的重复加载","仅加载用户真正停留浏览的图片"],p3=["依赖引擎门控能力（onBeforeLoad 返回 false 中止加载），已在本插件中落地；与 ViewportAware 的 rootMargin 搭配可进一步调优触发时机。"],m3={name:o3,description:r3,since:a3,tags:i3,config:s3,example:l3,examples:c3,features:u3,useCases:d3,notes:p3},g3="ViewportDwellPlugin",f3="视口驻留门控（v2 真实实现）：在真正加载前要求图片在视口内持续停留 dwellMs，快速划过（停留不足且离开）则中止加载；超过 maxWaitMs 后放行以防饥饿。",h3="2.0.0",y3=["viewport","视口与交互","驻留","省流量"],v3=[{name:"dwellMs",type:"number",default:"250",description:"需要在视口中持续停留的时间（毫秒），不足视为「划过」不加载"},{name:"maxWaitMs",type:"number",default:"1500",description:"最长等待时间（毫秒），超时仍允许加载以防饥饿"},{name:"onlyWhenIntersecting",type:"boolean",default:"true",description:"仅在进入视口时应用驻留判断；离开且未达上限则中止"},{name:"debug",type:"boolean",default:"false",description:"是否输出调试日志"}],b3=`const DwellImage = withPlugins(LazyLoadImageCore, [
  // 停留不足 250ms 的划过不加载，长留才加载
  createViewportDwellPlugin({ dwellMs: 250, maxWaitMs: 1500 }),
]);

<DwellImage src="https://picsum.photos/id/1015/500/300" alt="视口驻留示例" />;`,w3=[{name:"默认驻留（250ms）",description:"划过即中止，停留足够才加载，提升命中率。",src:"https://picsum.photos/id/1015/500/300",config:{dwellMs:250}},{name:"延长驻留时间",description:"400ms 驻留门槛，适合快速浏览场景。",src:"https://picsum.photos/id/1021/500/300",config:{dwellMs:400}},{name:"开启调试日志",description:"控制台输出驻留门控过程，便于调参。",src:"https://picsum.photos/id/1026/500/300",config:{dwellMs:250,debug:!0}}],x3=["门控钩子真正延迟/中止加载（非空头）","驻留时间不足且离开 → 中止加载","maxWaitMs 饥饿保护（超时放行）","仅在进入视口时生效","调试日志输出"],P3=["无限滚动信息流","防止快速滑动误加载","节省带宽与请求数","提升有效加载命中率"],$3=["v2 起通过引擎 onBeforeLoad 门控真实生效（旧版写在被引擎丢弃的钩子上，实际未拦截）；与 ViewportAware 的 rootMargin 搭配可进一步调优触发时机。"],S3={name:g3,description:f3,since:h3,tags:y3,config:v3,example:b3,examples:w3,features:x3,useCases:P3,notes:$3},C3="WatermarkPlugin",k3="文字水印覆盖层：支持四角/中心定位、动态文本与样式定制。",L3="2.0.0",I3=["visual","视觉"],_3=[{name:"text",type:"string | ((src: string) => string)",default:'"© 2024 Vane"',description:"水印文本；可传函数按 src 动态生成"},{name:"position",type:'"top-left" | "top-right" | "bottom-left" | "bottom-right" | "center"',default:'"bottom-right"',description:"水印位置"},{name:"opacity",type:"number",default:"0.8",description:"0~1 透明度"},{name:"fontSize",type:"number",default:"12",description:"px 字号"},{name:"color",type:"string",default:'"#fff"',description:"文字颜色"},{name:"offsetX",type:"number",default:"8",description:"px 水平偏移"},{name:"offsetY",type:"number",default:"8",description:"px 垂直偏移"},{name:"zIndex",type:"number",default:"2",description:"层叠顺序"},{name:"enabled",type:"boolean",default:"true",description:"是否启用"}],E3=`// 版权水印：右下角、半透明
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
});`,R3=[{name:"版权水印（右下角）",description:"半透明白字落在右下角，常见版权标识场景。",src:"https://picsum.photos/seed/wm-copyright/600/400",config:{text:"© 2026 Vane",position:"bottom-right",opacity:.6,fontSize:14,color:"#ffffff"}},{name:"中心品牌水印",description:"居中、低透明度大字，适合图库/作品集防盗用。",src:"https://picsum.photos/seed/wm-center/600/400",config:{text:"VANE",position:"center",opacity:.22,fontSize:30,color:"#ffffff"}},{name:"左上角说明水印",description:"左上角小字，作来源/批次标注。",src:"https://picsum.photos/seed/wm-topleft/600/400",config:{text:"内部素材 • 勿外传",position:"top-left",opacity:.85,fontSize:12,color:"#ffd400"}}],z3=["五位置可选（四角 + 中心）","文本支持静态字符串或函数动态派生","可调透明度 / 字号 / 颜色 / 偏移","可整体启停（enabled）","层叠顺序可控（zIndex）"],O3=["图片版权 / 品牌标识","图库与作品集防盗用","内部素材来源 / 批次标注","活动海报统一角标","按用户 / 租户动态打标"],D3=["text 传函数时按图片 src 动态生成（如嵌入 ID），但场景示例画廊需用静态文本以保证实时预览。","中心水印透明度建议低于 0.3，避免遮挡主体内容。","水印为覆盖层（renderOverlay），不参与图片本身像素，导出原图不会被打标。"],T3={name:C3,description:k3,since:L3,tags:I3,config:_3,example:E3,examples:R3,features:z3,useCases:O3,notes:D3},j3="WebPPlugin",A3="WebP 优先：在支持 WebP 的环境中自动将图片重写为 .webp（或自定义链接），失败时回退原图，体积更小加载更快。",M3="2.0.0",B3=["other","网络","性能","WebP"],N3=[{name:"enabled",type:"boolean",default:"true",description:"是否启用"},{name:"rewrite",type:"(src, ctx) => string | undefined",default:"undefined",description:"自定义重写函数：返回 webp 链接"},{name:"replaceExtensions",type:"string[]",default:'["jpg", "jpeg", "png"]',description:"需替换为 .webp 的扩展名"},{name:"appendQueryParam",type:"string",default:"undefined",description:'追加的查询参数，如 "format=webp"'},{name:"onDomains",type:"string[]",default:"[]（不限制）",description:"限定生效域名"},{name:"testSupport",type:"boolean",default:"true",description:"运行前检测浏览器是否支持 webp"}],F3=`const WebPImage = withPlugins(LazyLoadImageCore, [
  createWebPPlugin({
    replaceExtensions: ["jpg", "jpeg", "png"],
    testSupport: true,
  }),
]);

<WebPImage src="https://example.com/photo.jpg" alt="WebP 示例" />;`,U3=[{name:"默认 WebP 优化",description:"对支持的图床自动重写（本示例用无扩展名 URL，不触发改写，仅展示配置）。",src:"https://picsum.photos/id/1015/500/300",config:{enabled:!0}},{name:"限定域名",description:"仅在指定域名生效，避免误改其它资源。",src:"https://picsum.photos/id/1021/500/300",config:{onDomains:["cdn.example.com"]}},{name:"跳过支持检测",description:"testSupport=false 直接尝试改写（需图床确实提供 webp）。",src:"https://picsum.photos/id/1026/500/300",config:{testSupport:!1}}],W3=["自动 WebP 改写","扩展名替换","查询参数追加","域名限定","支持检测","失败回退原图"],V3=["图片体积优化","现代浏览器加速","CDN WebP 支持","流量节省"],H3=["启用后若 webp 链接加载失败会自动回退到原图，不会白屏；示例中的 picsum 链接无扩展名，不会触发扩展名改写，可安全预览。"],G3={name:j3,description:A3,since:M3,tags:B3,config:N3,example:F3,examples:U3,features:W3,useCases:V3,notes:H3},q3="ZoomControlPlugin",Q3="按钮式缩放控制（gallery 增强插件）：在工具条渲染 − / 重置 / + 按钮，调整 context.zoom，GalleryCore 对主图施加 scale 变换。",K3="2.1.0",Y3=["gallery","图集","缩放","放大"],X3=[{name:"step",type:"number",default:"0.5",description:"每步缩放增量"},{name:"min",type:"number",default:"1",description:"最小缩放"},{name:"max",type:"number",default:"4",description:"最大缩放"}],Z3=`import { GalleryCore } from "vane-lazy-image/gallery";
import { createZoomControlPlugin } from "vane-lazy-image/custom-plugins/ZoomControlPlugin";

<GalleryCore images={images} plugins={[createZoomControlPlugin()]} />`,J3=[{name:"主图缩放",description:"点击 + 放大主图（scale 变换），>1 时主图区可滚动查看细节；点击重置回到 100%。",config:{}}],eR=["−/重置/+ 按钮","实时 scale 变换","缩放范围限制","与主图区滚动联动"],tR=["商品细节查看","高清图放大","材质纹理 inspection"],nR=["zoom 经 GalleryCore 的 context.zoom 施加到主图区；为协调态，切换即重渲染。"],oR={name:q3,description:Q3,since:K3,tags:Y3,config:X3,example:Z3,examples:J3,features:eR,useCases:tR,notes:nR};var rR=Object.defineProperty,aR=(e,t,n)=>t in e?rR(e,t,{enumerable:!0,configurable:!0,writable:!0,value:n}):e[t]=n,cn=(e,t,n)=>aR(e,typeof t!="symbol"?t+"":t,n);let iR=class{constructor(t,n={}){cn(this,"id"),cn(this,"config"),cn(this,"metrics"),cn(this,"startTime"),cn(this,"endTime"),this.id=t,this.config={enabled:n.enabled??!0,collectVitals:n.collectVitals??!0,enableDebug:n.enableDebug??!1,retentionTime:n.retentionTime??5*60*1e3},this.metrics={marks:{},measures:{},custom:{}},this.startTime=this.now(),this.config.collectVitals&&this.collectWebVitals(),this.config.enableDebug&&console.debug(`[PerformanceMonitor] Created: ${this.id}`)}now(){return performance.now()}mark(t){if(!this.config.enabled)return;const n=this.now();if(this.metrics.marks[t]=n,typeof performance<"u"&&performance.mark)try{performance.mark(`${this.id}:${t}`)}catch{}this.config.enableDebug&&console.debug(`[PerformanceMonitor] Mark: ${t} @ ${n.toFixed(2)}ms`)}measure(t,n,o){if(!this.config.enabled)return;const r=this.metrics.marks[n];if(r===void 0){console.warn(`[PerformanceMonitor] Start mark not found: ${n}`);return}const a=o?this.metrics.marks[o]:this.now();if(a===void 0){console.warn(`[PerformanceMonitor] End mark not found: ${o}`);return}const i=a-r;if(this.metrics.measures[t]=i,typeof performance<"u"&&performance.measure)try{performance.measure(`${this.id}:${t}`,`${this.id}:${n}`,o?`${this.id}:${o}`:void 0)}catch{}return this.config.enableDebug&&console.debug(`[PerformanceMonitor] Measure: ${t} = ${i.toFixed(2)}ms`),i}setCustomMetric(t,n){this.config.enabled&&(this.metrics.custom[t]=n)}collectWebVitals(){if(!(typeof performance>"u")){if(this.metrics.vitals={},performance.timing){const t=performance.timing,n=t.navigationStart;t.responseStart&&(this.metrics.vitals.ttfb=t.responseStart-n)}if(typeof PerformanceObserver<"u")try{new PerformanceObserver(t=>{const n=t.getEntries().find(o=>o.name==="first-contentful-paint");n&&this.metrics.vitals&&(this.metrics.vitals.fcp=n.startTime)}).observe({entryTypes:["paint"]}),new PerformanceObserver(t=>{const n=t.getEntries(),o=n[n.length-1];o&&this.metrics.vitals&&(this.metrics.vitals.lcp=o.startTime)}).observe({entryTypes:["largest-contentful-paint"]})}catch{}}}end(){this.endTime||(this.endTime=this.now(),this.mark("end"),this.config.enableDebug&&console.debug(`[PerformanceMonitor] Ended: ${this.id}`))}analyzeCriticalPath(){const t=this.metrics.marks,n={};return t.mount!==void 0&&t["load-start"]!==void 0&&(n.discoveryDelay=t["load-start"]-t.mount),t["load-start"]!==void 0&&t["load-end"]!==void 0&&(n.loadDelay=t["load-end"]-t["load-start"]),t["load-end"]!==void 0&&t["render-end"]!==void 0&&(n.renderDelay=t["render-end"]-t["load-end"]),Object.keys(n).length>0?n:void 0}generateRecommendations(){var o;const t=[],n=this.analyzeCriticalPath();return n!=null&&n.discoveryDelay&&n.discoveryDelay>100&&t.push(`发现延迟较高 (${n.discoveryDelay.toFixed(0)}ms)，考虑使用 preload 或提前触发加载`),n!=null&&n.loadDelay&&n.loadDelay>2e3&&t.push(`加载延迟较高 (${n.loadDelay.toFixed(0)}ms)，考虑优化图片大小或使用 CDN`),n!=null&&n.renderDelay&&n.renderDelay>50&&t.push(`渲染延迟较高 (${n.renderDelay.toFixed(0)}ms)，考虑优化渲染逻辑`),(o=this.metrics.vitals)!=null&&o.lcp&&this.metrics.vitals.lcp>2500&&t.push(`LCP 较慢 (${this.metrics.vitals.lcp.toFixed(0)}ms)，建议优化首屏图片加载`),t}getReport(){const t=this.endTime?this.endTime-this.startTime:this.now()-this.startTime;return{id:this.id,startTime:this.startTime,endTime:this.endTime,duration:t,metrics:this.metrics,criticalPath:this.analyzeCriticalPath(),recommendations:this.generateRecommendations()}}dispose(){if(typeof performance<"u")try{performance.getEntriesByType("mark").forEach(t=>{t.name.startsWith(`${this.id}:`)&&performance.clearMarks(t.name)}),performance.getEntriesByType("measure").forEach(t=>{t.name.startsWith(`${this.id}:`)&&performance.clearMeasures(t.name)})}catch{}this.config.enableDebug&&console.debug(`[PerformanceMonitor] Disposed: ${this.id}`)}};function Yl(e,t){return new iR(e,t)}let sR=class{constructor(t={}){cn(this,"monitors",new Map),cn(this,"config"),this.config=t}getOrCreate(t){let n=this.monitors.get(t);return n||(n=Yl(t,this.config),this.monitors.set(t,n)),n}getAllReports(){return Array.from(this.monitors.values()).map(t=>t.getReport())}cleanup(t=5*60*1e3){const n=performance.now();this.monitors.forEach((o,r)=>{const a=o.getReport();a.endTime&&n-a.endTime>t&&(o.dispose(),this.monitors.delete(r))})}disposeAll(){this.monitors.forEach(t=>t.dispose()),this.monitors.clear()}},Zn=null;function lR(e){return Zn||(Zn=new sR(e)),Zn}function cR(){Zn&&(Zn.disposeAll(),Zn=null)}var uR=Object.defineProperty,dR=(e,t,n)=>t in e?uR(e,t,{enumerable:!0,configurable:!0,writable:!0,value:n}):e[t]=n,ut=(e,t,n)=>dR(e,typeof t!="symbol"?t+"":t,n);const Xm=class Rn{constructor(){ut(this,"observers",new Map),ut(this,"elementToKey",new Map),ut(this,"observerCallbacks",new Map),ut(this,"observerStats",new Map),ut(this,"rootIds",new WeakMap),ut(this,"rootIdCounter",0),ut(this,"totalCallbackExecutions",0),ut(this,"debugMode",!1),ut(this,"cleanupTimer")}static supportsIntersectionObserver(){return typeof IntersectionObserver<"u"}static getInstance(){return Rn.instance||(Rn.instance=new Rn),Rn.instance}setDebugMode(t){this.debugMode=t,t&&(console.log("[ObserverPool] Debug mode enabled"),console.log("[ObserverPool] Current stats:",this.getStats()))}startAutoCleanup(){typeof window>"u"||this.cleanupTimer||(this.cleanupTimer=setInterval(()=>{const t=Date.now(),n=6e4;if(this.observers.size===0){this.stopAutoCleanup();return}this.observerStats.forEach((o,r)=>{if(t-o.lastUsedAt>n&&o.elementCount===0){const a=this.observers.get(r);a&&(a.disconnect(),this.observers.delete(r),this.observerCallbacks.delete(r),this.observerStats.delete(r),this.debugMode&&console.log(`[ObserverPool] Auto-cleaned idle observer: ${r}`))}})},6e4))}stopAutoCleanup(){this.cleanupTimer&&(clearInterval(this.cleanupTimer),this.cleanupTimer=void 0)}getRootId(t){if(!t)return"null";let n=this.rootIds.get(t);return n||(n=`r${++this.rootIdCounter}`,this.rootIds.set(t,n)),n}getConfigKey(t){const{root:n,rootMargin:o="0px",threshold:r=0}=t,a=`root-${this.getRootId(n)}`,i=Array.isArray(r)?r.join(","):String(r);return`${a}|${o}|${i}`}observe(t,n,o={},r=!1){if(!Rn.supportsIntersectionObserver()){try{n(!0)}catch(d){this.debugMode&&console.warn("[ObserverPool] fallback callback failed",d)}return()=>{}}const a=this.getConfigKey(o),i=Date.now();if(!this.observers.has(a)){let d;try{d=new IntersectionObserver(p=>{p.forEach(h=>{const v=this.observerCallbacks.get(a);v&&v.forEach(w=>{if(w.element===h.target){this.totalCallbackExecutions++;const $=this.observerStats.get(a);$&&($.totalCallbacks++,$.lastUsedAt=Date.now()),w.callback(h.isIntersecting),w.unobserveOnVisible&&h.isIntersecting&&this.unobserve(h.target)}})})},{root:o.root||null,rootMargin:o.rootMargin||"0px",threshold:o.threshold??0})}catch(p){this.debugMode&&console.warn("[ObserverPool] IntersectionObserver unavailable, fallback to eager",p);try{n(!0)}catch{}return()=>{}}this.startAutoCleanup(),this.observers.set(a,d),this.observerCallbacks.set(a,new Set),this.observerStats.set(a,{key:a,elementCount:0,createdAt:i,lastUsedAt:i,totalCallbacks:0}),this.debugMode&&console.log(`[ObserverPool] Created new observer for config: ${a}`)}const s=this.observers.get(a),l=this.observerCallbacks.get(a),c={element:t,callback:n,unobserveOnVisible:r,addedAt:i};l.add(c),this.elementToKey.set(t,a);const u=this.observerStats.get(a);return u&&(u.elementCount++,u.lastUsedAt=i),s.observe(t),this.debugMode&&console.log(`[ObserverPool] Observing element, total: ${this.elementToKey.size}`),()=>this.unobserve(t)}unobserve(t){const n=this.elementToKey.get(t);if(!n)return;const o=this.observers.get(n),r=this.observerCallbacks.get(n);if(o&&r){o.unobserve(t);let a=0;Array.from(r).forEach(s=>{s.element===t&&(r.delete(s),a++)}),this.elementToKey.delete(t);const i=this.observerStats.get(n);i&&(i.elementCount=Math.max(0,i.elementCount-Math.max(1,a)),i.lastUsedAt=Date.now()),r.size===0&&this.debugMode&&console.log(`[ObserverPool] Observer ${n} has no elements (will auto-clean later)`)}}disconnectAll(){this.observers.forEach(t=>t.disconnect()),this.observers.clear(),this.observerCallbacks.clear(),this.elementToKey.clear(),this.observerStats.clear(),this.stopAutoCleanup(),this.debugMode&&console.log("[ObserverPool] Disconnected all observers")}getObserverCount(){return this.observers.size}getElementCount(){return this.elementToKey.size}getStats(){const t=this.observers.size,n=this.elementToKey.size,o=t>0?n/t:0,r=Date.now();let a,i,s;this.observerStats.forEach(u=>{const d=r-u.createdAt;(!a||d>a.age)&&(a={key:u.key,age:d}),(!i||d<i.age)&&(i={key:u.key,age:d}),(!s||u.elementCount>s.elementCount)&&(s={key:u.key,elementCount:u.elementCount})});const l=t*1024+n*100,c=l>1024*1024?`${(l/(1024*1024)).toFixed(2)} MB`:`${(l/1024).toFixed(2)} KB`;return{observerCount:t,elementCount:n,averageElementsPerObserver:Math.round(o*100)/100,oldestObserver:a,newestObserver:i,mostUsedObserver:s,totalCallbackExecutions:this.totalCallbackExecutions,memoryEstimate:c}}getObserverDetails(){return Array.from(this.observerStats.values())}cleanup(){let t=0;return this.observerCallbacks.forEach((n,o)=>{if(n.size===0){const r=this.observers.get(o);r&&(r.disconnect(),this.observers.delete(o),this.observerCallbacks.delete(o),this.observerStats.delete(o),t++)}}),this.debugMode&&console.log(`[ObserverPool] Manual cleanup: removed ${t} idle observers`),t}resetStats(){this.totalCallbackExecutions=0,this.observerStats.forEach(t=>{t.totalCallbacks=0}),this.debugMode&&console.log("[ObserverPool] Stats reset")}};ut(Xm,"instance");let pR=Xm;const nn=pR.getInstance(),Zm=(e,t,n,o)=>nn.observe(e,t,n,o),mR=e=>nn.unobserve(e),gR=()=>nn.getStats(),fR=e=>nn.setDebugMode(e),hR=()=>nn.getObserverDetails(),yR=()=>nn.cleanup(),vR=()=>nn.resetStats();function bR(e,t){switch(t.type){case"LOAD_START":return{status:"loading",displaySrc:t.payload.src,error:null,requestId:t.payload.requestId};case"LOAD_SUCCESS":return t.payload.requestId!==e.requestId?e:{...e,status:"loaded",displaySrc:t.payload.src||e.displaySrc,error:null};case"LOAD_ERROR":return t.payload.requestId!==e.requestId?e:{...e,status:"error",error:t.payload.error};case"RESET":return{status:"idle",displaySrc:null,error:null,requestId:e.requestId};default:return e}}function Rt(e,t){if(!e||!t||e===t)return!0;try{const n=typeof document<"u"?document.baseURI:"http://localhost/";return new URL(e,n).href===new URL(t,n).href}catch{return!1}}function wR(e,t){const{root:n,rootMargin:o="200px 0px",threshold:r=0,unobserveOnVisible:a=!1}=t||{},[i,s]=S.useState(!1),l=S.useMemo(()=>JSON.stringify({rootMargin:o,threshold:r,unobserveOnVisible:a}),[o,r,a]);return S.useEffect(()=>{const c=e.current;if(!c)return;const u=Zm(c,d=>{s(d)},{root:n||null,rootMargin:o,threshold:r},a);return()=>{u()}},[l,n]),{inView:i}}const Jm=S.forwardRef((e,t)=>{const{src:n,alt:o="",root:r,rootMargin:a,threshold:i,unobserveOnVisible:s,loading:l="lazy",isLCP:c=!1,fetchPriority:u="auto",enablePerformanceMonitor:d=!1,onBeforeLoad:p,onLoadStart:h,onLoadSuccess:v,onLoadError:w,onEnterViewport:$,onLeaveViewport:f,children:m,containerStyle:g,containerClassName:b,imageStyle:x,imageClassName:P,aspectRatio:C,srcSet:k,sizes:I}=e,_=S.useRef(null),M=S.useRef(null),F=S.useRef(null),D=S.useRef(null);S.useEffect(()=>(d&&!D.current&&(D.current=Yl(`lazy-image-${n}`,{enabled:!0,collectVitals:!1,enableDebug:!1}),D.current.mark("mount")),()=>{D.current&&(D.current.end(),D.current.dispose(),D.current=null)}),[d,n]);const[T,U]=S.useReducer(bR,{status:"idle",displaySrc:null,error:null,requestId:0}),G=S.useRef(null),H=S.useRef(null),E=S.useRef(0),z=S.useRef(!1),O=S.useRef(n),j=S.useRef(0),B=S.useRef(null),[me,K]=S.useState(0),ie=5,ue=300,se=S.useMemo(()=>!(c||l==="eager"),[c,l]),{inView:Pe}=wR(_,{root:r,rootMargin:a,threshold:i,unobserveOnVisible:s}),kn=S.useMemo(()=>c?"eager":l==="auto"?"lazy":l,[c,l]),It=S.useMemo(()=>c?"high":u,[c,u]),lt=S.useRef(!1);S.useEffect(()=>{var Q,Be;Pe&&!lt.current?((Q=D.current)==null||Q.mark("enter-viewport"),$==null||$()):!Pe&&lt.current&&((Be=D.current)==null||Be.mark("leave-viewport"),f==null||f()),lt.current=Pe},[Pe,$,f]);const wr=S.useCallback(()=>{j.current>=ie||(j.current+=1,B.current&&clearTimeout(B.current),B.current=setTimeout(()=>{B.current=null,K(Q=>Q+1)},ue))},[]),_t=S.useCallback(async()=>{var he;if(!n.trim()){z.current=!1,G.current=null,H.current=null,U({type:"RESET"});return}if(z.current||H.current===n)return;z.current=!0,G.current=n;const Q=++E.current;(he=D.current)==null||he.mark("load-start"),F.current&&F.current.abort(),F.current=new AbortController;const Be=F.current;h==null||h();try{const Le=await Promise.resolve(p==null?void 0:p());if(Be.signal.aborted||E.current!==Q)return;j.current=0;const Ge=Le||n;if(!Ge.trim()){z.current=!1,U({type:"RESET"});return}U({type:"LOAD_START",payload:{src:Ge,requestId:Q}})}catch(Le){if(Be.signal.aborted||E.current!==Q)return;if((Le==null?void 0:Le.message)==="LLI_PLUGIN_GATE"){z.current=!1,U({type:"RESET"}),wr();return}z.current=!1,H.current=n;const Ge=Le instanceof Error?Le:new Error(String(Le));U({type:"LOAD_ERROR",payload:{error:Ge,requestId:Q}}),w==null||w(Ge)}},[n,p,h,w,wr]);S.useEffect(()=>{var Q;O.current!==n&&(O.current=n,(Q=F.current)==null||Q.abort(),F.current=null,E.current+=1,z.current=!1,G.current=null,H.current=null,j.current=0,B.current&&(clearTimeout(B.current),B.current=null),U({type:"RESET"}))},[n]),S.useEffect(()=>{se?Pe&&_t():_t()},[Pe,n,se,me]),S.useEffect(()=>()=>{F.current&&(F.current.abort(),F.current=null),B.current&&(clearTimeout(B.current),B.current=null)},[]);const ei=S.useCallback(()=>{U({type:"RESET"})},[]);S.useImperativeHandle(t,()=>({reload:()=>{var Q;(Q=F.current)==null||Q.abort(),F.current=null,E.current+=1,z.current=!1,G.current=null,H.current=null,j.current=0,ei(),(!se||Pe)&&_t()},reset:()=>{var Q;(Q=F.current)==null||Q.abort(),F.current=null,E.current+=1,z.current=!1,G.current=null,H.current=null,ei()},getState:()=>({isIdle:T.status==="idle",isLoading:T.status==="loading",isLoaded:T.status==="loaded",isError:T.status==="error"}),getPerformanceReport:()=>{var Q;return((Q=D.current)==null?void 0:Q.getReport())||null}}),[Pe,_t,se,T.status,ei]);const qg=S.useMemo(()=>({position:"relative",width:"100%",height:"auto",...C!==void 0?{aspectRatio:String(C)}:null,overflow:"hidden",background:T.status==="error"?"#fee":"#f5f5f5",...g&&(g.background||g.backgroundColor)?null:{color:"#4a4a4a"},display:"flex",alignItems:"center",justifyContent:"center",...g}),[g,T.status,C]);return y.jsxs("div",{ref:Q=>{_.current=Q,e.containerRefExternal&&(e.containerRefExternal.current=Q)},className:b,style:qg,children:[T.status==="loading"&&y.jsx("div",{style:{position:"absolute",inset:0,display:"flex",alignItems:"center",justifyContent:"center",pointerEvents:"none",zIndex:2},children:y.jsx("span",{style:{color:"inherit",fontSize:12},children:"Loading..."})}),T.displaySrc?y.jsx("img",{"data-lli-request":T.requestId,"data-lli-src":T.displaySrc,ref:Q=>{M.current=Q,e.imageRefExternal&&(e.imageRefExternal.current=Q)},src:T.displaySrc,alt:o,srcSet:k,sizes:I,loading:kn,...It!=="auto"&&{fetchpriority:It},crossOrigin:e.crossOrigin??void 0,decoding:e.decoding??void 0,referrerPolicy:e.referrerPolicy??void 0,onLoad:Q=>{var ho,yo,vo;if(T.status!=="loading"&&T.status!=="error")return;const Be=Q.currentTarget,he=(Be.currentSrc||Be.src||"").trim(),Le=(T.displaySrc||"").trim(),Ge=(Be.getAttribute("src")||"").trim(),fo=T.status==="error";if(fo){if(!he||Rt(he,Le)||!Rt(he,Ge))return}else if(he&&!Rt(he,Le)&&!Rt(he,Ge))return;z.current=!1,H.current=null,(ho=D.current)==null||ho.mark("load-end"),(yo=D.current)==null||yo.measure("load-duration","load-start","load-end"),(vo=D.current)==null||vo.measure("total-duration","mount","load-end"),U({type:"LOAD_SUCCESS",payload:{requestId:T.requestId,...fo?{src:he||Ge}:null}}),v==null||v(he||Le||void 0)},onError:Q=>{var yo,vo;if(T.status!=="loading"&&T.status!=="error")return;const Be=Q.currentTarget,he=(Be.currentSrc||Be.src||"").trim(),Le=(T.displaySrc||"").trim(),Ge=(Be.getAttribute("src")||"").trim(),fo=T.status==="error";if(fo){if(!he||Rt(he,Le)||!Rt(he,Ge))return}else if(he&&!Rt(he,Le)&&!Rt(he,Ge))return;fo||(z.current=!1,H.current=n),(yo=D.current)==null||yo.mark("load-error"),(vo=D.current)==null||vo.measure("error-duration","load-start","load-error");const ho=new Error("Image load error");U({type:"LOAD_ERROR",payload:{error:ho,requestId:T.requestId}}),w==null||w(ho)},style:{width:"100%",height:"auto",objectFit:"cover",opacity:T.status==="loaded"?1:0,transition:"opacity 180ms ease",...x},className:P}):null,m]})});Jm.displayName="LazyLoadImageCore";const xR={CRITICAL:10,HIGH:50,NORMAL:100,LOW:150,DEBUG:200},PR={BEFORE_LOAD:"onBeforeLoad",LOAD_START:"onLoadStart",LOAD_SUCCESS:"onLoadSuccess",LOAD_ERROR:"onLoadError",LOAD:"onLoad",ENTER_VIEWPORT:"onEnterViewport",LEAVE_VIEWPORT:"onLeaveViewport",MOUNT:"onMount",UNMOUNT:"onUnmount",PROGRESS:"onProgress",SRC_CHANGE:"onSrcChange",NETWORK_CHANGE:"onNetworkChange",RESIZE:"onResize",RETRY:"onRetry"},Bt={TIMEOUT:3e4,MAX_RETRIES:3,RETRY_DELAY:1e3,RETRY_BACKOFF:2,CACHE_SIZE_INFLIGHT:50,CACHE_SIZE_CONTROLLERS:50,CACHE_SIZE_OBJECT_URLS:100},Ns={CLIENT_ERROR_MIN:400,CLIENT_ERROR_MAX:500,SERVER_ERROR_MIN:500,SERVER_ERROR_MAX:600,OK:200,NOT_FOUND:404,FORBIDDEN:403,UNAUTHORIZED:401,INTERNAL_SERVER_ERROR:500,SERVICE_UNAVAILABLE:503},$R={RETENTION_TIME:5*60*1e3,HIGH_DISCOVERY_DELAY_THRESHOLD:100,HIGH_LOAD_DELAY_THRESHOLD:2e3,HIGH_RENDER_DELAY_THRESHOLD:50,SLOW_LCP_THRESHOLD:2500},SR={ROOT_MARGIN:"200px 0px",THRESHOLD:0,UNOBSERVE_ON_VISIBLE:!1},CR={NETWORK_CHANGE:1e3,WINDOW_RESIZE:300,SCROLL:100},kR={LAZY:"lazy",EAGER:"eager",AUTO:"auto"},LR={HIGH:"high",LOW:"low",AUTO:"auto"};function Xl(e){const t=new Map(e.map(s=>[s.name,s])),n=[];for(const s of e)for(const l of s.dependencies??[])t.has(l)||n.push(`${s.name} -> ${l}`);const o=[],r=new Set,a=[...e],i=s=>(s.dependencies??[]).every(l=>r.has(l)||!t.has(l));for(;a.length>0;){const s=a.filter(i);if(s.length===0)throw new Error(`[vane/plugin-core] 插件循环依赖: ${a.map(c=>c.name).join(" <-> ")}`);let l=s[0];for(const c of s)(c.priority??0)>(l.priority??0)&&(l=c);o.push(l),r.add(l.name),a.splice(a.indexOf(l),1)}return n.length>0&&console.warn(`[vane/plugin-core] 以下插件依赖未注册，将被忽略:
  ${n.join(`
  `)}`),o}async function IR(e,t={}){const{timeout:n=3e3,name:o="anonymous",hook:r="unknown"}=t;if(!n||n<=0)return await e();let a;const i=new Promise((s,l)=>{a=setTimeout(()=>{l(new Error(`[vane/plugin-core] 插件 ${o} 的钩子 ${r} 超时(${n}ms)`))},n)});try{return await Promise.race([Promise.resolve().then(e),i])}finally{a&&clearTimeout(a)}}const _R=new Set(["onMount","onUnmount","onPropsChange","onError"]);function ER(e={}){const t=e.logger??console,n=e.sandbox??!0,o=e.timeout??3e3,r=[],a=[],i=new Map,s=()=>Xl([...i.values()].filter(c=>c.enabled!==!1)),l=c=>{i.set(c.name,{...c,enabled:c.enabled??!0}),c.init&&Promise.resolve(c.init()).catch(u=>{t.warn(`[PluginManager] init failed for ${c.name}`,u)})};return{register:l,registerAll:c=>{for(const u of c)l(u)},unregister:c=>{const u=i.get(c);u&&(u.destroy&&Promise.resolve(u.destroy()).catch(d=>{t.warn(`[PluginManager] destroy failed for ${u.name}`,d)}),i.delete(c))},getPlugin:c=>i.get(c),getAllPlugins:()=>[...i.values()],getEnabledPlugins:()=>[...i.values()].filter(c=>c.enabled!==!1),getExecutionOrder:s,enable:c=>{const u=i.get(c);u&&(u.enabled=!0)},disable:c=>{const u=i.get(c);u&&(u.enabled=!1)},has:c=>i.has(c),executeHook:async(c,u,...d)=>{var p,h;for(const v of s()){const w=(p=v.hooks)==null?void 0:p[c];if(typeof w!="function")continue;const $=v.sandbox??n,f=v.timeout??o;let m;try{m=$?await IR(()=>w(u,...d),{timeout:f,name:v.name,hook:String(c)}):await w(u,...d)}catch(g){if(r.push({plugin:v.name,hook:String(c),error:g}),t.warn(`[PluginManager] hook ${String(c)} failed in ${v.name}`,g),(h=e.onError)==null||h.call(e,v.name,String(c),g),c==="onError")break;continue}if(_R.has(String(c))&&typeof m=="function"){a.push(m);continue}if(m===!1)return!1;if(m!==void 0&&m!==!0)return m}},clear:()=>{const c=a.splice(0);for(const u of c.reverse())try{u()}catch(d){t.warn("[PluginManager] cleanup failed",d)}for(const u of i.values())u.destroy&&Promise.resolve(u.destroy()).catch(d=>{t.warn(`[PluginManager] destroy failed for ${u.name}`,d)});i.clear()},getErrors:()=>[...r]}}var RR=Object.defineProperty,zR=(e,t,n)=>t in e?RR(e,t,{enumerable:!0,configurable:!0,writable:!0,value:n}):e[t]=n,ln=(e,t,n)=>zR(e,typeof t!="symbol"?t+"":t,n);const eg=class Oo{constructor(){ln(this,"networkInfo"),ln(this,"deviceInfo"),ln(this,"listeners",new Set),ln(this,"initialized",!1),ln(this,"disposeFns",[]),ln(this,"resizeTimer"),this.initListeners()}static getInstance(){return Oo.instance||(Oo.instance=new Oo),Oo.instance}ensureInitialized(){this.initialized||this.initListeners()}initListeners(){if(typeof window>"u"||this.initialized)return;this.initialized=!0;const t=typeof navigator<"u"?navigator:void 0,n=(t==null?void 0:t.connection)||(t==null?void 0:t.mozConnection)||(t==null?void 0:t.webkitConnection);if(n){const a=()=>{this.networkInfo=void 0,this.notifyListeners()};n.addEventListener("change",a),this.disposeFns.push(()=>n.removeEventListener("change",a))}const o=()=>{this.networkInfo=void 0,this.notifyListeners()};window.addEventListener("online",o),window.addEventListener("offline",o),this.disposeFns.push(()=>{window.removeEventListener("online",o),window.removeEventListener("offline",o)});const r=()=>{this.resizeTimer&&clearTimeout(this.resizeTimer),this.resizeTimer=window.setTimeout(()=>{this.resizeTimer=void 0,this.deviceInfo=void 0,this.notifyListeners()},300)};window.addEventListener("resize",r),this.disposeFns.push(()=>{window.removeEventListener("resize",r),this.resizeTimer&&(clearTimeout(this.resizeTimer),this.resizeTimer=void 0)})}dispose(){this.disposeFns.forEach(t=>{try{t()}catch{}}),this.disposeFns=[],this.initialized=!1,this.networkInfo=void 0,this.deviceInfo=void 0}getNetworkInfo(){return this.ensureInitialized(),this.networkInfo||(this.networkInfo=this.detectNetwork()),this.networkInfo}getDeviceInfo(){return this.ensureInitialized(),this.deviceInfo||(this.deviceInfo=this.detectDevice()),this.deviceInfo}detectNetwork(){if(typeof navigator>"u")return;const t=navigator,n=(t==null?void 0:t.connection)||(t==null?void 0:t.mozConnection)||(t==null?void 0:t.webkitConnection);return{online:t.onLine!==void 0?t.onLine:!0,effectiveType:(n==null?void 0:n.effectiveType)||"4g",downlink:Number((n==null?void 0:n.downlink)||10),rtt:Number((n==null?void 0:n.rtt)||50),saveData:!!(n!=null&&n.saveData)}}detectDevice(){const t=typeof window<"u"?window.innerWidth:1024,n=typeof window<"u"?window.innerHeight:768,o=typeof window<"u"&&window.devicePixelRatio||1,r=typeof navigator<"u"&&navigator.userAgent||"",a=/Mobile|Android|iPhone|iPad/i.test(r);return{type:/iPad|Tablet/i.test(r)?"tablet":a?"mobile":"desktop",os:r,browser:r,devicePixelRatio:o,viewportWidth:t,viewportHeight:n,isTouchDevice:typeof window<"u"&&"ontouchstart"in window,isRetina:o>=2}}addListener(t){return this.ensureInitialized(),this.listeners.add(t),()=>this.listeners.delete(t)}notifyListeners(){this.listeners.forEach(t=>{try{t()}catch(n){console.error("[GlobalContext] Listener error:",n)}})}refreshNetworkInfo(){this.networkInfo=void 0,this.networkInfo=this.detectNetwork(),this.notifyListeners()}refreshDeviceInfo(){this.deviceInfo=void 0,this.deviceInfo=this.detectDevice(),this.notifyListeners()}getStats(){return{listenersCount:this.listeners.size,hasNetworkInfo:!!this.networkInfo,hasDeviceInfo:!!this.deviceInfo}}};ln(eg,"instance");let OR=eg;const hr=OR.getInstance(),Ra=()=>hr.getNetworkInfo(),DR=()=>hr.getDeviceInfo(),tg=e=>hr.addListener(e),TR=()=>hr.getStats();function jR(){const e=new Map,t=new Map,n=(i,s)=>{const l=e.get(i);if(l)for(const c of[...l])try{c(s)}catch(u){console.warn(`[PluginBus] handler error for event "${i}"`,u)}},o=(i,s)=>{let l=e.get(i);return l||(l=new Set,e.set(i,l)),l.add(s),()=>{l==null||l.delete(s)}},r=(i,s)=>{const l=c=>{s(c),a(i,l)};return o(i,l)},a=(i,s)=>{var l;if(!s){e.delete(i);return}(l=e.get(i))==null||l.delete(s)};return{emit:n,on:o,once:r,off:a,getData:i=>t.get(i),setData:(i,s)=>{const l=t.get(i);t.set(i,s),l!==s&&n(i,s)},deleteData:i=>{const s=t.has(i);t.delete(i),s&&n(i,void 0)},hasData:i=>t.has(i),getAll:()=>{const i={};return t.forEach((s,l)=>{i[l]=s}),i},clear:()=>{e.clear(),t.clear()}}}var AR=Object.defineProperty,MR=(e,t,n)=>t in e?AR(e,t,{enumerable:!0,configurable:!0,writable:!0,value:n}):e[t]=n,BR=(e,t,n)=>MR(e,t+"",n);let ng=class extends N.Component{constructor(){super(...arguments),BR(this,"state",{error:null})}static getDerivedStateFromError(t){return{error:t}}componentDidCatch(t,n){var o,r;console.warn("[vane/plugin-core] 插件渲染错误已被隔离",t,n),(r=(o=this.props).onError)==null||r.call(o,t,n)}render(){const{error:t}=this.state;return t?this.props.fallback?this.props.fallback(t):null:this.props.children}},Mr=null;function NR(e=!1){if(Mr&&!e)return Mr;const t=typeof window<"u"?window.innerWidth:1024,n=typeof window<"u"?window.innerHeight:768,o=typeof window<"u"&&window.devicePixelRatio||1,r=typeof navigator<"u"&&navigator.userAgent||"",a=/iPad|Tablet/i.test(r),i=/Mobile|Android|iPhone/i.test(r),s=typeof window<"u"&&("ontouchstart"in window||(navigator.maxTouchPoints??0)>0);return Mr={type:a?"tablet":i?"mobile":"desktop",os:r,browser:r,devicePixelRatio:o,viewportWidth:t,viewportHeight:n,isTouchDevice:s,isRetina:o>=2},Mr}function Nu(e,t){if(Object.is(e,t))return!0;if(typeof e!="object"||typeof t!="object"||e===null||t===null)return!1;const n=Object.keys(e),o=Object.keys(t);return n.length!==o.length?!1:n.every(r=>Object.is(e[r],t[r]))}function FR(e){const{plugins:t,props:n,data:o,initialState:r,containerRef:a,enableDebug:i=!1,managerOptions:s,extendContext:l}=e,c=S.useRef(null),u=a??c,d=S.useRef(null);d.current||(d.current=ER(s));const p=d.current,h=S.useRef(null);h.current||(h.current=jR());const v=h.current,w=S.useRef(new Map),[$,f]=S.useState(r??{}),[,m]=S.useState(0),g=S.useCallback(()=>m(z=>z+1),[]),b=S.useMemo(()=>NR(),[]),x=S.useRef(t),P=x.current;(P.length!==t.length||t.some((z,O)=>z!==P[O]))&&(x.current=t);const C=x.current,k=C.map(z=>z.name).join("|");S.useLayoutEffect(()=>{p.clear(),p.registerAll(C),i&&console.debug("[vane/plugin-core] plugins registered:",k)},[C]),S.useLayoutEffect(()=>()=>{p.executeHook("onUnmount",_.current),p.clear()},[p]);const I=S.useMemo(()=>Xl(C),[C]),_=S.useRef(null),M=S.useRef(n);Nu(M.current,n)||(M.current=n);const F=M.current,D=S.useRef(o);Nu(D.current,o)||(D.current=o);const T=D.current,U=S.useMemo(()=>{const z={props:F,data:T,bus:v,refs:{container:u,getContainer:()=>u.current},state:$,setState:O=>f(j=>({...j,...O})),shared:w.current,deviceInfo:b,forceUpdate:g,getSize:()=>{const O=u.current;return O?{width:O.offsetWidth,height:O.offsetHeight}:{width:0,height:0}},logger:console};return l?l(z):z},[F,T,$,b,v,l]);_.current=U;const G=S.useCallback(z=>{var j,B;let O=z;for(const me of I){const K=(j=me.hooks)==null?void 0:j.transformProps;if(typeof K=="function")try{O=K(O)}catch(ie){(((B=_.current)==null?void 0:B.logger)??console).warn(`[plugin-core] ${me.name}.transformProps 执行失败，已跳过`,ie)}}return O},[I]),H=S.useCallback(z=>{var j,B;let O=z;for(const me of I){const K=(j=me.hooks)==null?void 0:j.transformData;if(typeof K=="function")try{O=K(_.current,O)}catch(ie){(((B=_.current)==null?void 0:B.logger)??console).warn(`[plugin-core] ${me.name}.transformData 执行失败，已跳过`,ie)}}return O},[I]),E=S.useCallback((z,...O)=>p.executeHook(z,_.current,...O),[p]);return{manager:p,bus:v,context:U,state:$,setState:U.setState,execute:E,transformProps:G,transformData:H,orderedPlugins:I}}S.createContext(null);function Br(e,t,n){const{hook:o,position:r="after"}=n;return e.filter(a=>a.enabled!==!1).filter(a=>{var i;return typeof((i=a.hooks)==null?void 0:i[o])=="function"}).filter(a=>{var s;const i=(s=a.config)==null?void 0:s.slotPosition;return r==="before"?i==="before":r==="footer"?i===void 0||i==="after"||i==="footer":i===void 0||i==="after"}).sort((a,i)=>{var s,l;return(((s=a.config)==null?void 0:s.order)??0)-(((l=i.config)==null?void 0:l.order)??0)||(i.priority??0)-(a.priority??0)}).map(a=>{try{const i=a.hooks[o](t);return i==null?null:y.jsx(ng,{children:i},`vane-slot-${a.name}`)}catch(i){return console.warn(`[vane/plugin-core] 插件 ${a.name} 的 ${o} 渲染失败`,i),null}})}function UR(e,t,n){return y.jsxs(y.Fragment,{children:[Br(e,t,{hook:"renderHeader",position:"before"}),n,Br(e,t,{hook:"renderOverlay"}),Br(e,t,{hook:"renderHeader",position:"after"}),Br(e,t,{hook:"renderFooter",position:"footer"})]})}const WR=1e3,VR=100;function HR(e){const t=e.priority??VR;return{...e,priority:WR-t}}function GR(e){return e.map(HR)}function qR(e,t){const n=Array.isArray(t)?{plugins:t}:t,{plugins:o,enableDebug:r=!1}=n,a=S.forwardRef((i,s)=>{const l=S.useMemo(()=>GR(o),[o.map(D=>D.name).join("|")]),c=S.useRef(null),[u,d]=S.useState({isIdle:!0,isLoading:!1,isLoaded:!1,isError:!1}),[p,h]=S.useState(!1),[v,w]=S.useState(()=>Ra()),$=S.useRef({loadStartTime:0}),f=S.useRef(i.src),m=S.useRef(null),g=S.useCallback(D=>({...D,src:i.src,imageState:u,isIntersecting:p,imageRef:c,containerRef:D.refs.container,networkInfo:v,sharedData:D.shared,performanceData:$.current,reload:()=>{var T;return(T=m.current)==null?void 0:T.reload()},reset:()=>{var T;return(T=m.current)==null?void 0:T.reset()}}),[i.src,u,p,v]),b=FR({plugins:l,props:i,enableDebug:r,extendContext:g}),x=S.useCallback((D,...T)=>b.execute(D,...T),[b.manager]);S.useEffect(()=>{x("onMount")},[x]),S.useEffect(()=>b.bus.on("progress",D=>{x("onProgress",D)}),[x,b.bus]),S.useEffect(()=>{const D=f.current;D!==i.src&&(f.current=i.src,d({isIdle:!0,isLoading:!1,isLoaded:!1,isError:!1}),$.current={loadStartTime:0},x("onSrcChange",D,i.src))},[i.src,x]),S.useEffect(()=>tg(()=>{w(Ra()),x("onNetworkChange"),x("onResize")}),[x]);const P=S.useCallback(async()=>{if(await x("onBeforeLoad")===!1)throw new Error("LLI_PLUGIN_GATE");const D=await x("onLoad");return d({isIdle:!1,isLoading:!0,isLoaded:!1,isError:!1}),D},[x]),C=S.useCallback(()=>{$.current={loadStartTime:performance.now()}},[x]),k=S.useCallback(D=>{const T=performance.now();$.current={...$.current,loadEndTime:T,duration:T-$.current.loadStartTime},d({isIdle:!1,isLoading:!1,isLoaded:!0,isError:!1}),x("onLoadSuccess",D??"")},[x]),I=S.useCallback(D=>{d({isIdle:!1,isLoading:!1,isLoaded:!1,isError:!0}),x("onLoadError",D)},[x]),_=S.useCallback(()=>{h(!0),x("onEnterViewport")},[x]),M=S.useCallback(()=>{h(!1),x("onLeaveViewport")},[x]),F={...b.transformProps(i),containerRefExternal:b.context.refs.container,imageRefExternal:c,children:y.jsx(ng,{children:UR(b.orderedPlugins,b.context,i.children)}),onBeforeLoad:P,onLoadStart:C,onLoadSuccess:k,onLoadError:I,onEnterViewport:_,onLeaveViewport:M};return y.jsx(e,{ref:D=>{m.current=D,typeof s=="function"?s(D):s&&(s.current=D)},...F})});return a.displayName="WithPlugins(LazyLoadImageCore)",a}function QR(e){const t=(e==null?void 0:e.filter)??"none",n=(e==null?void 0:e.amount)??1;switch(t){case"none":return"none";case"grayscale":return`grayscale(${Math.max(0,Math.min(1,n))})`;case"sepia":return`sepia(${Math.max(0,Math.min(1,n))})`;case"brightness":return`brightness(${n})`;case"contrast":return`contrast(${n})`;case"saturate":return`saturate(${n})`;default:return"none"}}const KR=e=>{const t=QR(e),n=!!(e!=null&&e.hover);return{name:"filter",hooks:{onLoadSuccess(o){var a;const r=(a=o.imageRef)==null?void 0:a.current;if(r&&(r.style.filter=t,n&&t!=="none")){const i=()=>{r.style.filter="none"},s=()=>{r.style.filter=t};r.__lliFilterEnter=i,r.__lliFilterLeave=s,r.addEventListener("mouseenter",i),r.addEventListener("mouseleave",s)}},onUnmount(o){var s;const r=(s=o.imageRef)==null?void 0:s.current;if(!r)return;const a=r.__lliFilterEnter,i=r.__lliFilterLeave;a&&r.removeEventListener("mouseenter",a),i&&r.removeEventListener("mouseleave",i),r.style.filter=""}}}},YR={grayscaleSoft:{filter:"grayscale",amount:.6,hover:!0},sepiaWarm:{filter:"sepia",amount:.5},brightBoost:{filter:"brightness",amount:1.2},contrastPunch:{filter:"contrast",amount:1.3},saturateVivid:{filter:"saturate",amount:1.4}},XR="FilterPlugin",ZR="CSS 滤镜：灰度/复古/亮度/对比度/饱和度，悬停可恢复原图。",JR="2.0.0",ez=["visual","视觉"],tz=[{name:"filter",type:'"none" | "grayscale" | "sepia" | "brightness" | "contrast" | "saturate"',default:'"none"',description:"滤镜类型"},{name:"amount",type:"number",default:"undefined",description:"滤镜强度（多数类型 0~1）"},{name:"hover",type:"boolean",default:"false",description:"悬停时恢复原图"}],nz=`// 灰度显示，悬停恢复原彩图
const FilterImage = withPlugins(LazyLoadImageCore, [
  createFilterPlugin({
    filter: "grayscale",
    amount: 1,
    hover: true,
  }),
]);

<FilterImage src="https://picsum.photos/seed/filter/600/400" alt="滤镜" />;`,oz=[{name:"灰度 + 悬停还原",description:"默认灰度，鼠标悬停瞬间恢复彩色，制造焦点对比。",src:"https://picsum.photos/seed/filter-gray/600/400",config:{filter:"grayscale",amount:1,hover:!0}},{name:"复古暖调",description:"sepia 中度做旧，营造怀旧氛围。",src:"https://picsum.photos/seed/filter-sepia/600/400",config:{filter:"sepia",amount:.6}},{name:"高对比增强",description:"提升对比度，让画面更有张力。",src:"https://picsum.photos/seed/filter-contrast/600/400",config:{filter:"contrast",amount:1.4}}],rz=["内置 grayscale / sepia / brightness / contrast / saturate 预设","amount 控制强度","hover 模式悬停恢复原图","纯 CSS filter，零额外绘制开销"],az=["商品列表统一灰度，hover 高亮","怀旧 / 复古风格相册","强调主体前的视觉降噪","活动主题统一调色"],iz=["hover:true 时滤镜在鼠标移入时移除、移出时恢复。","需要组合滤镜（如 contrast+saturate）或更复杂效果，可用 CustomEffectsPlugin 的 imageStyle.filter 任意写。"],sz={name:XR,description:ZR,since:JR,tags:ez,config:tz,example:nz,examples:oz,features:rz,useCases:az,notes:iz};let Ii=null;function og(e,t){return Ii||(Ii=new Promise((n,o)=>{const r=indexedDB.open(e,1);r.onupgradeneeded=()=>{const a=r.result;a.objectStoreNames.contains(t)||a.createObjectStore(t)},r.onsuccess=()=>n(r.result),r.onerror=()=>o(r.error)})),Ii}async function rg(e,t){try{const n=await og(t.dbName,t.storeName),o=n.transaction(t.storeName,"readonly").objectStore(t.storeName),r=await new Promise((a,i)=>{const s=o.get(e);s.onsuccess=()=>a(s.result),s.onerror=()=>i(s.error)});if(!r)return;if(t.ttlMs>0&&Date.now()-r.time>t.ttlMs){try{n.transaction(t.storeName,"readwrite").objectStore(t.storeName).delete(e)}catch{}return}return r}catch(n){if(t.debug)try{console.warn("[IDBCache] get failed",n)}catch{}return}}async function ag(e,t,n){try{const o=(await og(n.dbName,n.storeName)).transaction(n.storeName,"readwrite").objectStore(n.storeName),r=typeof t=="string"?{value:t,time:Date.now()}:{blob:t,time:Date.now(),mime:t.type};await new Promise((a,i)=>{const s=o.put(r,e);s.onsuccess=()=>a(),s.onerror=()=>i(s.error)})}catch(o){if(n.debug)try{console.warn("[IDBCache] set failed",o)}catch{}}}const ig={get:rg,set:ag};function lz(e){try{const t=e.split(","),n=t[0].match(/:(.*?);/),o=n?n[1]:"application/octet-stream",r=atob(t[1]);let a=r.length;const i=new Uint8Array(a);for(;a--;)i[a]=r.charCodeAt(a);return new Blob([i],{type:o})}catch{return null}}function cz(e={}){const{enabled:t=!0,dbName:n="LLI-Cache",storeName:o="images",ttlMs:r=7*24*60*60*1e3,debug:a=!1}=e,i=new Map,s=new Set,l=new Set;return{name:"cache-idb",version:"1.0.0",config:e,hooks:{onLoad:async c=>{var u,d,p,h;if(t){if(s.has(c.src)){if(a)try{console.warn("[IDBCache] Prevented reentry for",c.src)}catch{}return}s.add(c.src);try{const v=await rg(c.src,{dbName:n,storeName:o,ttlMs:r,debug:a});if(v){if(a)try{console.debug("[IDBCache] hit",{src:c.src})}catch{}if((u=c.bus)==null||u.emit("cache:hit",{level:"idb",src:c.src}),v.blob){let w=(d=c.sharedData)==null?void 0:d.get("fetch-loader:object-url");if(!w){w=URL.createObjectURL(v.blob),i.set(c.src,w);try{(p=c.sharedData)==null||p.set("fetch-loader:object-url",w),(h=c.sharedData)==null||h.set("fetch-loader:blob",v.blob)}catch{}}return w}return v.value}return}finally{s.delete(c.src)}}},onLoadSuccess:async(c,u)=>{var d;if(t){if(l.has(c.src)){if(a)try{console.warn("[IDBCache] Write already in progress for",c.src)}catch{}return}l.add(c.src);try{let p=(d=c.sharedData)==null?void 0:d.get("fetch-loader:blob");if(p&&i.get(c.src)===u&&(p=void 0),!p&&u.startsWith("blob:")){if(i.get(c.src)===u)return;try{const h=await fetch(u);h.ok&&(p=await h.blob())}catch{}}if(!p&&u.startsWith("data:")){const h=lz(u);h&&(p=h)}if(p){if(await ag(c.src,p,{dbName:n,storeName:o,debug:a}),a)try{console.debug("[IDBCache] ✅ Stored blob successfully:",{src:c.src,size:p.size,type:p.type})}catch{}}else if(a)try{console.warn("[IDBCache] ⚠️ No blob available, skip write:",{src:c.src,displaySrc:u})}catch{}}catch{}finally{l.delete(c.src)}if(a)try{console.debug("[IDBCache] set",{src:c.src})}catch{}}},onSrcChange:(c,u)=>{const d=i.get(u);if(d){try{URL.revokeObjectURL(d)}catch{}i.delete(u)}},onUnmount:c=>{const u=i.get(c.src);if(u){try{URL.revokeObjectURL(u)}catch{}i.delete(c.src)}}}}}const xn=new Map,xt=[];function sg(){return Date.now()}function uz(e){if(!(e<=0))for(;xt.length>e;){const t=xt.shift();t&&xn.has(t)&&xn.delete(t)}}function lg(e){const t=xt.indexOf(e);t>=0&&xt.splice(t,1),xt.push(e)}function Fs(e,t){const n=xn.get(e);if(n){if(t&&t>0&&sg()-n.time>t){xn.delete(e);const o=xt.indexOf(e);o>=0&&xt.splice(o,1);return}return lg(e),n.value}}function Us(e,t,n){xn.set(e,{value:t,time:sg()}),lg(e),uz(n)}const za={get:Fs,set:Us,has:(e,t)=>Fs(e,t)!==void 0,clear:()=>{xn.clear(),xt.splice(0,xt.length)},size:()=>xn.size};function dz(e={}){const{enabled:t=!0,maxEntries:n=200,ttlMs:o,debug:r=!1}=e,a=new Map,i=new Set,s=new Map,l=100;function c(u,d,p){const h=`${d}:${p.src}`,v=Date.now(),w=s.get(h)||0;v-w<l||(s.set(h,v),u==null||u.emit(d,p),setTimeout(()=>{s.delete(h)},1e3))}return{name:"cache-memory",version:"1.0.0",config:e,hooks:{onLoad:async u=>{var d,p,h;if(t){if(i.has(u.src)){if(r)try{console.warn("[MemoryCache] Prevented reentry for",u.src)}catch{}return}i.add(u.src);try{const v=Fs(u.src,o);if(v){if(r)try{console.debug("[MemoryCache] hit",{src:u.src,isBlob:v instanceof Blob})}catch{}if(c(u.bus,"cache:hit",{level:"memory",src:u.src}),v instanceof Blob){let w=(d=u.sharedData)==null?void 0:d.get("fetch-loader:object-url");if(!w){w=URL.createObjectURL(v),a.set(u.src,w);try{(p=u.sharedData)==null||p.set("fetch-loader:object-url",w),(h=u.sharedData)==null||h.set("fetch-loader:blob",v)}catch{}}return w}if(!v.startsWith("blob:"))return v}return}finally{i.delete(u.src)}}},onLoadSuccess:(u,d)=>{var h;if(!t)return;const p=(h=u.sharedData)==null?void 0:h.get("fetch-loader:blob");if(p instanceof Blob?Us(u.src,p,n):d.startsWith("blob:")||Us(u.src,d,n),r)try{console.debug("[MemoryCache] set",{src:u.src,length:d.length})}catch{}},onSrcChange:(u,d,p)=>{if(!t)return;c(u.bus,"cache:src-change",{oldSrc:d,newSrc:p,src:d});const h=a.get(d);if(h){try{URL.revokeObjectURL(h)}catch{}a.delete(d)}},onUnmount:u=>{const d=a.get(u.src);if(d){try{URL.revokeObjectURL(d)}catch{}a.delete(u.src)}}}}}function so(e,t){const n=e.split(".").map(Number),o=t.split(".").map(Number),r=Math.max(n.length,o.length);for(let a=0;a<r;a++){const i=n[a]||0,s=o[a]||0;if(i>s)return 1;if(i<s)return-1}return 0}function pz(e,t,n){return!(t&&so(e,t)<0||n&&so(e,n)>0)}function cg(e){const[t=0,n=0,o=0]=e.split(".").map(Number);return{major:t,minor:n,patch:o}}function mz(e){const t=e.split(".");return t.length<1||t.length>3?!1:t.every(n=>{const o=Number(n);return!isNaN(o)&&o>=0&&Number.isInteger(o)})}function gz(e){const{major:t,minor:n,patch:o}=cg(e);return`${t}.${n}.${o}`}function fz(e,t){return so(e,t)===0}function hz(e,t){return so(e,t)>0}function yz(e,t){return so(e,t)<0}const _i=(()=>{const e=new Map;function t(a,i){const s=e.get(a);if(s&&s.initialized)return s.idleMs=i>0?i:s.idleMs,s;const l={isIdle:!0,timer:null,idleWaiters:new Set,idleMs:i>0?i:120,initialized:!1,refCount:0,cleanup:void 0},c=()=>{l.isIdle=!1,l.timer&&clearTimeout(l.timer),l.timer=setTimeout(()=>{l.isIdle=!0,l.idleWaiters.forEach(u=>{try{u()}catch{}}),l.idleWaiters.clear()},l.idleMs)};if(a==="window")window.addEventListener("scroll",c,{passive:!0}),window.addEventListener("wheel",c,{passive:!0}),window.addEventListener("touchmove",c,{passive:!0}),l.cleanup=()=>{window.removeEventListener("scroll",c),window.removeEventListener("wheel",c),window.removeEventListener("touchmove",c)};else{try{a.addEventListener("scroll",c,{passive:!0}),a.addEventListener("wheel",c,{passive:!0}),a.addEventListener("touchmove",c,{passive:!0})}catch{}l.cleanup=()=>{try{a.removeEventListener("scroll",c),a.removeEventListener("wheel",c),a.removeEventListener("touchmove",c)}catch{}}}return l.initialized=!0,e.set(a,l),l}async function n(a,i,s){const l=t(a,i);l.isIdle||await new Promise(c=>{let u=null;const d=()=>{u&&clearTimeout(u),c()};l.idleWaiters.add(d),typeof s=="number"&&s>0&&(u=setTimeout(()=>{l.idleWaiters.delete(d),c()},s))})}function o(a,i){const s=t(a,i);return s.refCount+=1,s}function r(a){var s;const i=e.get(a);if(i&&(i.refCount-=1,!(i.refCount>0))){try{(s=i.cleanup)==null||s.call(i)}catch{}i.timer&&clearTimeout(i.timer),i.timer=null,i.idleWaiters.forEach(l=>{try{l()}catch{}}),i.idleWaiters.clear(),e.delete(a)}}return{ensure:t,acquire:o,release:r,waitForIdle:n}})();function vz(e={}){const{idleMs:t=120,onlyWhenIntersecting:n=!0,maxWaitMs:o=1200,target:r="window",axis:a="vertical",debug:i=!1}=e;return{name:"scroll-idle",version:"1.0.0",config:e,hooks:{onMount:s=>{var u,d;const l=((u=s.containerRef)==null?void 0:u.current)||null,c=r==="container"&&l?l:"window";_i.acquire(c,t);try{(d=s.sharedData)==null||d.set("scroll-idle:target",c)}catch{}if(i)try{console.debug("[ScrollIdle] mount",{idleMs:t,target:r,axis:a,hasContainer:!!l})}catch{}},onUnmount:s=>{var c,u;let l;try{l=(c=s.sharedData)==null?void 0:c.get("scroll-idle:target"),(u=s.sharedData)==null||u.delete("scroll-idle:target")}catch{}l&&_i.release(l)},onLoad:async s=>{var l;if(s.props.loading!=="eager"&&(!n||s.isIntersecting)){const c=((l=s.containerRef)==null?void 0:l.current)||null,u=r==="container"&&c?c:"window";i&&console.debug(`[ScrollIdle] waiting for idle ${t}ms (max ${o}ms)`,{target:r,axis:a});try{await _i.waitForIdle(u,t,o)}catch{}}}}}}const bz="ScrollIdlePlugin",wz="滚动空闲加载：滚动停止后再发起加载，避免与滚动争抢带宽。",xz="2.0.0",Pz=["loading","加载策略"],$z=[{name:"idleMs",type:"number",default:"120",description:"判定为“空闲”的静止时间（毫秒）"},{name:"onlyWhenIntersecting",type:"boolean",default:"true",description:"是否仅在进入视口后生效（否则所有加载都会等待空闲）"},{name:"maxWaitMs",type:"number",default:"1200",description:"最长等待空闲的时间（毫秒），超过则直接继续加载，避免长时间滚动导致饥饿"},{name:"target",type:'"window" | "container"',default:'"window"',description:"监听对象：window 或容器（容器将使用 context.containerRef.current）"},{name:"axis",type:'"vertical" | "horizontal" | "both"',default:'"vertical"',description:"滚动轴向：vertical/horizontal/both（目前用于调试标注，可按需扩展策略）"},{name:"debug",type:"boolean",default:"false",description:"调试输出"}],Sz=`const LazyImage = withPlugins(LazyLoadImageCore, [
  createScrollIdlePlugin({
    idleMs: 160,
    onlyWhenIntersecting: true,
    maxWaitMs: 1200, // 最多等 1.2s，避免饥饿
  }),
]);`,Cz=[{name:"滚动停止后加载",description:"用户停止滚动 160ms 后再加载，滚动过程中不打断主线程与带宽。",config:{idleMs:160,onlyWhenIntersecting:!0,maxWaitMs:1200}},{name:"更敏感空闲",description:"80ms 即判定空闲，适合加载较轻的图标 / 缩略图。",config:{idleMs:80,maxWaitMs:800}}],kz=["监听滚动，空闲（停止滚动 idleMs）后才发起加载","默认仅进入视口后生效，不拖累首屏外元素","maxWaitMs 兜底，防止长时间连续滚动导致饥饿","支持 window / 容器两种监听对象"],Lz=["长列表滚动时避免与主线程 / 带宽争抢","低端机滚动卡顿优化"],Iz=["与 ConcurrencyControl 叠加效果最佳。","maxWaitMs 务必设置，否则连续滚动可能长期不加载。","容器模式会使用 context.containerRef.current 作为监听目标。"],_z={name:bz,description:wz,since:xz,tags:Pz,config:$z,example:Sz,examples:Cz,features:kz,useCases:Lz,notes:Iz};function Ez(e,t){const{ariaLabel:n}=e;if(n)return typeof n=="function"?n(t):n}const Rz=({ctx:e,config:t})=>{var r,a,i;const{imageState:n}=e,o=n.isError?((r=t.statusText)==null?void 0:r.error)??"图片加载失败":n.isLoaded?((a=t.statusText)==null?void 0:a.loaded)??"图片加载完成":n.isLoading?((i=t.statusText)==null?void 0:i.loading)??"图片加载中":"图片未加载";return S.useEffect(()=>{var l;const s=(l=e.imageRef)==null?void 0:l.current;if(!(!s||!t.enabled))try{s.setAttribute("aria-busy",n.isLoading?"true":"false")}catch{}},[e.imageRef,t.enabled,n.isLoading]),y.jsx("span",{role:"status","aria-live":"polite",style:{position:"absolute",width:1,height:1,padding:0,margin:-1,overflow:"hidden",clip:"rect(0, 0, 0, 0)",whiteSpace:"nowrap",border:0},children:o})};function zz(e={}){const{enabled:t=!0,decorative:n=!1}=e;return{name:"a11y",version:"1.0.0",config:e,hooks:{onMount:o=>{var a;if(!t)return;const r=(a=o.imageRef)==null?void 0:a.current;if(r)try{n&&(r.setAttribute("aria-hidden","true"),r.setAttribute("alt",""));const i=Ez(e,o);i&&r.setAttribute("aria-label",i),r.setAttribute("role","img")}catch{}},renderOverlay:o=>t?y.jsx(Rz,{ctx:o,config:e}):null}}}const Oz="A11yPlugin",Dz="无障碍支持：将装饰性图片设为 aria-hidden、自定义 aria-label、注入 role=img 与 aria-busy，并通过 aria-live 区域播报加载状态，提升读屏可用性。",Tz="2.0.0",jz=["a11y","可访问性","SEO"],Az=[{name:"enabled",type:"boolean",default:"true",description:"是否启用无障碍增强"},{name:"decorative",type:"boolean",default:"false",description:"标记为装饰性图片（aria-hidden=true 并清空 alt）"},{name:"ariaLabel",type:"string | ((ctx) => string)",default:"undefined",description:"自定义 aria-label（函数型，参见用法示例）"},{name:"statusText",type:"{ loading?; loaded?; error? }",default:"undefined",description:"视觉隐藏的状态播报文本"}],Mz=`const A11yImage = withPlugins(LazyLoadImageCore, [
  createA11yPlugin({
    ariaLabel: (ctx) => \`商品主图 \${ctx.src}\`,
    statusText: { loading: "加载中…", loaded: "已加载", error: "加载失败" },
  }),
]);

// 装饰性图片也可直接跳过读屏
<A11yImage src="https://picsum.photos/id/1015/500/300" alt="" />;`,Bz=[{name:"装饰性图片",description:"decorative=true 时清空 alt 并设 aria-hidden，读屏跳过。",src:"https://picsum.photos/id/1015/500/300",config:{decorative:!0}},{name:"自定义 aria-label（字符串）",description:"为图片设置区别于 alt 的 aria-label。",src:"https://picsum.photos/id/1021/500/300",config:{ariaLabel:"商品主图"}},{name:"加载状态播报",description:"视觉隐藏区域以 aria-live 播报加载中/完成/失败。",src:"https://picsum.photos/id/1026/500/300",config:{statusText:{loading:"加载中…",loaded:"已加载",error:"加载失败"}}}],Nz=["装饰性图片 aria-hidden","自定义 aria-label（字符串或函数）","role=img 明确语义","aria-busy 随加载态切换","aria-live 状态播报（视觉隐藏）","可关闭"],Fz=["无障碍合规（WCAG）","读屏器适配","装饰性背景图","加载状态可读"],Uz=["ariaLabel 支持函数型，但静态预览仅支持字符串；函数用法见用法示例。"],Wz={name:Oz,description:Dz,since:Tz,tags:jz,config:Az,example:Mz,examples:Bz,features:Nz,useCases:Fz,notes:Uz};function Vz(e){try{const t=document.createElement("link");return t.rel="preload",t.as="image",t.href=e,document.head.appendChild(t),()=>{try{document.head.removeChild(t)}catch{}}}catch{return()=>{}}}function Hz(e={}){const{enabled:t=!0,altFallback:n,title:o,aspectRatio:r,priority:a="auto",preload:i=!1}=e;return{name:"seo",version:"1.0.0",config:e,hooks:{transformProps:s=>{if(!t)return s;const l={...s};return(!l.alt||l.alt==="")&&n&&(l.alt=n),a==="lcp"&&(l.loading="eager",l.rootMargin="0px"),r&&(l.containerStyle={...l.containerStyle||{},aspectRatio:r}),l},onMount:s=>{var c,u,d;if(!t)return;let l;if(i&&(l=Vz(s.src)),o)try{(u=(c=s.imageRef)==null?void 0:c.current)==null||u.setAttribute("title",o)}catch{}if(n&&((d=s.imageRef)!=null&&d.current)){const p=s.imageRef.current;if(p.getAttribute("alt")===null||p.getAttribute("alt")==="")try{p.setAttribute("alt",n)}catch{}}return l}}}}const Gz="SEOPlugin",qz="SEO 增强：alt/title 回退、固定容器宽高比减少 CLS、将首屏关键图设为 LCP 优先（eager + preload），提升搜索排名与加载体验。",Qz="2.0.0",Kz=["a11y","可访问性","SEO"],Yz=[{name:"enabled",type:"boolean",default:"true",description:"是否启用"},{name:"altFallback",type:"string",default:"undefined",description:"未提供 alt 时的回退值"},{name:"title",type:"string",default:"undefined",description:"图片 title（提示与关键词）"},{name:"aspectRatio",type:"string",default:"undefined",description:'固定容器宽高比（如 "4/3"），减少 CLS'},{name:"priority",type:'"auto" | "lcp"',default:'"auto"',description:"lcp 时设为 eager 加载"},{name:"preload",type:"boolean",default:"false",description:"挂载时注入 preload 预载"}],Xz=`const SeoImage = withPlugins(LazyLoadImageCore, [
  createSEOPlugin({
    altFallback: "示例图片",
    title: "演示图像",
    aspectRatio: "4/3",
    priority: "lcp",
    preload: true,
  }),
]);

<SeoImage src="https://picsum.photos/id/1015/500/300" alt="" />;`,Zz=[{name:"LCP 关键图",description:"首屏关键图：eager + preload + 固定比例，优化 LCP。",src:"https://picsum.photos/id/1015/500/300",config:{altFallback:"示例图片",title:"演示图像",aspectRatio:"4/3",priority:"lcp",preload:!0}},{name:"alt/title 回退",description:"补充 alt 与 title，利于读屏与 SEO。",src:"https://picsum.photos/id/1021/500/300",config:{altFallback:"商品图",title:"热销商品"}},{name:"仅固定比例",description:"aspectRatio 防 CLS，其余默认。",src:"https://picsum.photos/id/1026/500/300",config:{aspectRatio:"16/9"}}],Jz=["alt 回退","title 设置","aspect-ratio 防 CLS","LCP 优先（eager）","preload 预载","可关闭"],e4=["首屏 LCP 优化","SEO 排名","结构化标签","CLS 治理"],t4=['priority:"lcp" 会强制 eager 加载，请勿对所有图片使用，仅用于首屏关键图。'],n4={name:Gz,description:qz,since:Qz,tags:Kz,config:Yz,example:Xz,examples:Zz,features:Jz,useCases:e4,notes:t4},o4=Object.assign(vz,{meta:_z}),r4=Object.assign(zz,{meta:Wz}),a4=Object.assign(Hz,{meta:n4});function i4(e={}){const{text:t="Badge",position:n="top-left",bgColor:o="rgba(0,0,0,0.6)",color:r="#fff",fontSize:a=12,padding:i="2px 6px",borderRadius:s=4,zIndex:l=3,showWhen:c="loaded",enabled:u=!0}=e;return{name:"badge",version:"1.0.0",config:e,hooks:{renderOverlay:d=>{if(!u)return null;const{imageState:p}=d;if(!(c==="always"||c==="loading"&&p.isLoading||c==="loaded"&&p.isLoaded||c==="error"&&p.isError))return null;const h=typeof t=="function"?t(d):t;return y.jsx("div",{style:{position:"absolute",pointerEvents:"none",background:o,color:r,fontSize:a,padding:i,borderRadius:s,zIndex:l,lineHeight:1.2,fontWeight:500,...{"top-left":{top:8,left:8},"top-right":{top:8,right:8},"bottom-left":{bottom:8,left:8},"bottom-right":{bottom:8,right:8},center:{top:"50%",left:"50%",transform:"translate(-50%, -50%)"}}[n]},children:h})}}}}const s4="BadgePlugin",l4="角标徽章：在图片四角或中心叠加文字徽章，可按加载状态（always/loading/loaded/error）显示，支持自定义文字、颜色、字号与形状。",c4="2.0.0",u4=["other","视觉","徽标"],d4=[{name:"text",type:"string | ((context) => string)",default:'"Badge"',description:"徽章文字（支持函数动态生成）"},{name:"position",type:'"top-left" | "top-right" | "bottom-left" | "bottom-right" | "center"',default:'"top-left"',description:"徽章位置（四角或中心）"},{name:"bgColor",type:"string",default:'"rgba(0,0,0,0.6)"',description:"背景色"},{name:"color",type:"string",default:'"#fff"',description:"文字色"},{name:"fontSize",type:"number",default:"12",description:"字号(px)"},{name:"padding",type:"string",default:'"2px 6px"',description:"内边距"},{name:"borderRadius",type:"number",default:"4",description:"圆角(px)"},{name:"zIndex",type:"number",default:"3",description:"层级"},{name:"showWhen",type:'"always" | "loading" | "loaded" | "error"',default:'"loaded"',description:"显示时机"},{name:"enabled",type:"boolean",default:"true",description:"是否启用"}],p4=`const BadgeImage = withPlugins(LazyLoadImageCore, [
  createBadgePlugin({ text: "NEW", position: "top-left", bgColor: "#c62828", showWhen: "always" }),
]);

<BadgeImage src="https://picsum.photos/id/1015/500/300" alt="角标示例" />;`,m4=[{name:"常驻徽标",description:"左上角红色 NEW 徽标，始终显示。",src:"https://picsum.photos/id/1015/500/300",config:{text:"NEW",position:"top-left",bgColor:"#c62828",showWhen:"always"}},{name:"加载时显示",description:"加载中显示 Loading 徽标，加载完成隐藏。",src:"https://picsum.photos/id/1021/500/300",config:{text:"Loading",position:"top-right",bgColor:"rgba(0,0,0,0.6)",showWhen:"loading"}},{name:"加载成功后显示",description:"加载完成后显示 Done 徽标。",src:"https://picsum.photos/id/1026/500/300",config:{text:"Done",position:"bottom-right",bgColor:"#2e7d32",showWhen:"loaded"}},{name:"自定义样式",description:"橙色大字号圆角徽标，居中。",src:"https://picsum.photos/id/1031/500/300",config:{text:"HOT",position:"center",bgColor:"#b35c00",color:"#fff",fontSize:16,borderRadius:20}}],g4=["角标 / 中心两种布局","五位置（四角 + 中心）","按加载状态显示","自定义文字/颜色/字号/圆角","支持函数文案","可关闭"],f4=["商品标签","状态提示","进度/完成标记","活动角标"],h4=["text 支持函数型（按 context 动态生成），静态预览仅支持字符串；函数用法见用法示例。"],y4={name:s4,description:l4,since:c4,tags:u4,config:d4,example:p4,examples:m4,features:g4,useCases:f4,notes:h4},v4=e=>{const t=(e==null?void 0:e.color)??"rgba(0, 153, 255, 0.6)",n=Math.max(0,(e==null?void 0:e.blurPx)??12),o=Math.max(0,(e==null?void 0:e.spreadPx)??2),r=Math.max(1,(e==null?void 0:e.hoverMultiplier)??1.4),a=`0 0 ${n}px ${o}px ${t}`,i=`0 0 ${Math.round(n*r)}px ${Math.round(o*r)}px ${t}`;return{name:"border-glow",hooks:{onLoadSuccess(s){var w,$;const l=(w=s.containerRef)==null?void 0:w.current,c=(l==null?void 0:l.parentElement)??null,u=(c==null?void 0:c.parentElement)??null,d=($=s.imageRef)==null?void 0:$.current,p=u||c||l||d;if(!p)return;s.__lliGlowTarget=p,p.__lliPrevShadow=p.style.boxShadow||"",p.__lliPrevTransition=p.style.transition||"",p.style.boxShadow=p.__lliPrevShadow?`${p.__lliPrevShadow}, ${a}`:a,p.style.transition=p.style.transition?`${p.style.transition}, box-shadow 160ms ease`:"box-shadow 160ms ease",d&&(d.style.borderRadius=d.style.borderRadius||"6px");const h=()=>{p.style.boxShadow=p.__lliPrevShadow?`${p.__lliPrevShadow}, ${i}`:i},v=()=>{p.style.boxShadow=p.__lliPrevShadow?`${p.__lliPrevShadow}, ${a}`:a};p.__lliGlowEnter=h,p.__lliGlowLeave=v,p.addEventListener("mouseenter",h),p.addEventListener("mouseleave",v)},onUnmount(s){const l=s.__lliGlowTarget;if(!l)return;const c=l.__lliGlowEnter,u=l.__lliGlowLeave;c&&l.removeEventListener("mouseenter",c),u&&l.removeEventListener("mouseleave",u),l.style.boxShadow=l.__lliPrevShadow||"",l.style.transition=l.__lliPrevTransition||"",delete l.__lliPrevShadow,delete l.__lliPrevTransition,delete l.__lliGlowEnter,delete l.__lliGlowLeave,delete s.__lliGlowTarget}}}},b4="BorderGlowPlugin",w4="边框光晕：加载成功后为卡片应用发光阴影，悬停时增强。",x4="2.0.0",P4=["visual","视觉"],$4=[{name:"color",type:"string",default:"rgba(0, 153, 255, 0.6)",description:"辉光颜色"},{name:"blurPx",type:"number",default:"12",description:"辉光模糊半径 px"},{name:"spreadPx",type:"number",default:"2",description:"辉光扩散 px"},{name:"hoverMultiplier",type:"number",default:"1.4",description:"悬停时辉光强度倍数"}],S4=`// 加载成功后卡片发光，悬停增强
const GlowImage = withPlugins(LazyLoadImageCore, [
  createBorderGlowPlugin({
    color: "rgba(0, 153, 255, 0.6)",
    blurPx: 12,
    spreadPx: 2,
    hoverMultiplier: 1.4,
  }),
]);

<GlowImage src="https://picsum.photos/seed/glow/600/400" alt="边框辉光" />;`,C4=[{name:"基础辉光",description:"蓝色柔光，悬停轻微增强，突出主体卡片。",src:"https://picsum.photos/seed/glow-basic/600/400",config:{color:"rgba(0, 153, 255, 0.6)",blurPx:12,spreadPx:2,hoverMultiplier:1.4}},{name:"强霓虹辉光",description:"品红大模糊半径，悬停强度放大约 1.6 倍。",src:"https://picsum.photos/seed/glow-neon/600/400",config:{color:"rgba(255, 0, 128, 0.7)",blurPx:24,spreadPx:4,hoverMultiplier:1.6}},{name:"柔和暖光",description:"暖橙色低饱和辉光，适配温馨主题。",src:"https://picsum.photos/seed/glow-warm/600/400",config:{color:"rgba(255, 170, 0, 0.5)",blurPx:18,spreadPx:2,hoverMultiplier:1.3}}],k4=["加载成功后自动为卡片加发光阴影","悬停增强辉光强度","颜色 / 模糊 / 扩散均可调","智能定位外层卡片，避免被父容器 overflow 裁剪","卸载时自动还原原始阴影"],L4=["商品主图聚焦","精选 / 推荐位强调","卡片悬停交互反馈","暗色背景下的视觉点睛"],I4=["辉光优先作用在外层卡片（向上两层），以规避父容器 overflow:hidden 把光晕裁掉。","插件在 onUnmount 还原原始 box-shadow，不会污染其它样式。","与 CustomEffects 的 containerStyle 叠加时，两者都会合并进容器样式。"],_4={name:b4,description:w4,since:x4,tags:P4,config:$4,example:S4,examples:C4,features:k4,useCases:L4,notes:I4};function E4(e,t=4){try{const n=document.createElement("canvas"),o=Math.min(e.naturalWidth||e.width,256),r=Math.min(e.naturalHeight||e.height,256);if(!o||!r)return null;n.width=o,n.height=r;const a=n.getContext("2d");if(!a)return null;a.drawImage(e,0,0,o,r);const i=a.getImageData(0,0,o,r).data,s=Math.max(1,Math.floor(Number(t))||1);let l=0,c=0,u=0,d=0;for(let p=0;p<r;p+=s)for(let h=0;h<o;h+=s){const v=(p*o+h)*4;i[v+3]!==0&&(l+=i[v],c+=i[v+1],u+=i[v+2],d++)}return d?(l=Math.round(l/d),c=Math.round(c/d),u=Math.round(u/d),`rgb(${l}, ${c}, ${u})`):null}catch{return null}}function R4(e={}){const{setContainerBg:t=!0,sampleSize:n=4,showOverlay:o=!0}=e;return{name:"color-extraction",version:"1.0.0",config:e,hooks:{transformProps:r=>({...r,crossOrigin:"anonymous"}),onMount:r=>{var a,i;try{(i=(a=r.imageRef)==null?void 0:a.current)==null||i.setAttribute("crossOrigin","anonymous")}catch{}},onLoadSuccess:r=>{var s,l,c;const a=(s=r.imageRef)==null?void 0:s.current;if(!a)return;const i=E4(a,n);if(t&&i)try{const u=(l=r.containerRef)==null?void 0:l.current;u&&(u.style.background=`linear-gradient(90deg, ${i} 0%, rgba(0,0,0,0.06) 100%)`)}catch{}try{(c=r.sharedData)==null||c.set("dominant-color",i)}catch{}try{a.__lliDominantColor=i}catch{}},renderOverlay:r=>o?y.jsx(()=>{const[a,i]=N.useState(null);return N.useEffect(()=>{let s=!0;const l=requestAnimationFrame(()=>{var u,d,p;if(!s)return;const c=((d=(u=r.imageRef)==null?void 0:u.current)==null?void 0:d.__lliDominantColor)||((p=r.sharedData)==null?void 0:p.get("dominant-color"))||null;i(c||null)});return()=>{s=!1,cancelAnimationFrame(l)}},[r]),y.jsxs("div",{style:{position:"absolute",top:8,right:8,background:"rgba(0,0,0,0.55)",color:"#fff",fontSize:12,padding:"6px 8px",borderRadius:6,zIndex:5,display:"flex",alignItems:"center",gap:8,boxShadow:"0 2px 8px rgba(0,0,0,0.2)"},children:[y.jsx("span",{style:{width:16,height:16,borderRadius:4,background:a||"transparent",border:"1px solid rgba(255,255,255,0.35)"}}),y.jsx("span",{children:a||"未提取"})]})},{}):null}}}const z4="ColorExtractionPlugin",O4="主色提取：canvas 采样图片主色，可设置容器背景或显示色卡。",D4="2.0.0",T4=["visual","视觉"],j4=[{name:"setContainerBg",type:"boolean",default:"true",description:"是否把容器背景设为主色"},{name:"sampleSize",type:"number",default:"4",description:"采样步长 px，越大越快越不精确"},{name:"showOverlay",type:"boolean",default:"true",description:"是否在右上角显示主色卡"}],A4=`// 提取主色填充容器 + 显示色卡
const TintImage = withPlugins(LazyLoadImageCore, [
  createColorExtractionPlugin({
    setContainerBg: true,
    sampleSize: 4,
    showOverlay: true,
  }),
]);

<TintImage src="https://picsum.photos/seed/color/600/400" alt="主色提取" crossOrigin="anonymous" />;`,M4=[{name:"主色填充容器 + 色卡",description:"提取主色作为卡片背景，并在右上角显示色卡。",src:"https://picsum.photos/seed/color-full/600/400",config:{setContainerBg:!0,sampleSize:4,showOverlay:!0}},{name:"仅色卡",description:"不改动容器背景，只在角上显示提取到的主色卡。",src:"https://picsum.photos/seed/color-chip/600/400",config:{setContainerBg:!1,showOverlay:!0}}],B4=["canvas 采样主色","可选填充容器背景","可选角标色卡展示","采样精度 / 速度可调"],N4=["按图自动配色（背景 / 阴影）","色彩主题联动","色卡 / 调色板展示","设计工具取色"],F4=['读取像素需在 <img> 上设置 crossOrigin="anonymous"，且图片服务器需允许跨域，否则 canvas 被污染无法取色（会静默失败）。',"sampleSize 越大采样越稀疏、越快但越不精确。"],U4={name:z4,description:O4,since:D4,tags:T4,config:j4,example:A4,examples:M4,features:B4,useCases:N4,notes:F4};function W4(e={}){const{beforeSrc:t,afterSrc:n,labelBefore:o="前",labelAfter:r="后",start:a=.5}=e,i=({context:s})=>{const[l,c]=N.useState(Math.min(1,Math.max(0,a))),u=N.useRef(null),d=N.useRef(!1),p=N.useCallback(b=>{const x=u.current;if(!x)return;const P=x.getBoundingClientRect();if(P.width===0)return;const C=(b-P.left)/P.width;c(Math.min(1,Math.max(0,C)))},[]),h=b=>{var x,P;d.current=!0;try{(P=(x=b.target).setPointerCapture)==null||P.call(x,b.pointerId)}catch{}p(b.clientX)},v=b=>{d.current&&p(b.clientX)},w=b=>{var x,P;d.current=!1;try{(P=(x=b.target).releasePointerCapture)==null||P.call(x,b.pointerId)}catch{}},$=t??s.src,f=n??s.src,m=Math.max(1e-4,l),g={position:"absolute",top:8,padding:"2px 8px",background:"rgba(0,0,0,0.55)",color:"#fff",fontSize:12,borderRadius:4,pointerEvents:"none",zIndex:3};return y.jsxs("div",{ref:u,onPointerDown:h,onPointerMove:v,onPointerUp:w,onPointerLeave:w,style:{position:"absolute",inset:0,overflow:"hidden",cursor:"ew-resize",touchAction:"none",userSelect:"none",zIndex:4},title:"拖动对比",children:[y.jsx("img",{src:f,alt:r,draggable:!1,style:{position:"absolute",inset:0,width:"100%",height:"100%",objectFit:"cover"}}),y.jsx("div",{style:{position:"absolute",inset:0,width:`${l*100}%`,overflow:"hidden"},children:y.jsx("img",{src:$,alt:o,draggable:!1,style:{position:"absolute",inset:0,width:`${100/m}%`,height:"100%",objectFit:"cover"}})}),y.jsx("div",{style:{position:"absolute",top:0,bottom:0,left:`${l*100}%`,width:2,background:"#fff",transform:"translateX(-1px)",zIndex:2,pointerEvents:"none"},children:y.jsx("div",{style:{position:"absolute",top:"50%",left:"50%",transform:"translate(-50%, -50%)",width:28,height:28,borderRadius:999,background:"#fff",color:"#333",display:"flex",alignItems:"center",justifyContent:"center",fontSize:14,boxShadow:"0 1px 4px rgba(0,0,0,0.4)"},children:"⇆"})}),y.jsx("div",{style:{...g,left:8},children:o}),y.jsx("div",{style:{...g,right:8},children:r})]})};return{name:"comparison",version:"2.0.0",config:e,hooks:{renderOverlay:s=>y.jsx(i,{context:s})}}}const V4="ComparisonPlugin",H4="前后对比（v2 真实实现）：用可拖拽分隔条对比 beforeSrc / afterSrc 两张图，拖动实时比较差异（如调色前后、装修前后、A/B 图）。不再是写死文字角标。",G4="2.0.0",q4=["other","视觉","对比","交互"],Q4=[{name:"beforeSrc",type:"string",default:"主图 src",description:"左侧（拖动前）对比图；默认用主图"},{name:"afterSrc",type:"string",default:"主图 src",description:"右侧（拖动后）对比图；默认用主图"},{name:"labelBefore",type:"string",default:"前",description:"左图标签文字"},{name:"labelAfter",type:"string",default:"后",description:"右图标签文字"},{name:"start",type:"number",default:"0.5",description:"初始分割位置（0~1）"}],K4=`const CompareImage = withPlugins(LazyLoadImageCore, [
  createComparisonPlugin({
    beforeSrc: "https://picsum.photos/id/1015/800/600",
    afterSrc: "https://picsum.photos/id/1016/800/600",
    labelBefore: "原图", labelAfter: "处理后",
  }),
]);

<CompareImage src="https://picsum.photos/id/1016/800/600" alt="前后对比示例" />;`,Y4=[{name:"基础对比",description:"提供 beforeSrc / afterSrc 两张图，拖动中间把手即可对比。",src:"https://picsum.photos/id/1016/800/600",config:{beforeSrc:"https://picsum.photos/id/1015/800/600",afterSrc:"https://picsum.photos/id/1016/800/600",labelBefore:"原图",labelAfter:"处理后"}},{name:"自定义起始位置",description:"start=0.3 让初始分割更偏左。",src:"https://picsum.photos/id/1021/800/600",config:{beforeSrc:"https://picsum.photos/id/1020/800/600",afterSrc:"https://picsum.photos/id/1021/800/600",start:.3}},{name:"单图自对比（调色）",description:"只传 afterSrc，before 用主图，演示同一张图的两种状态。",src:"https://picsum.photos/id/1025/800/600",config:{afterSrc:"https://picsum.photos/id/1025/800/600",labelBefore:"原图",labelAfter:"滤镜"}}],X4=["可拖拽分隔条对比两图（指针/触摸）","左右标签可自定义","初始分割位置可调","左图按分割宽度自适应裁剪，始终铺满容器"],Z4=["装修前后 / 调色前后对比","A/B 图组对比","图像增强效果演示","教学 / 设计稿对照"],J4=["v2 起为真实拖拽交互，旧版仅渲染写死文字角标。对比层覆盖在 Core 主图之上，拖动区域占满容器。"],eO={name:V4,description:H4,since:G4,tags:q4,config:Q4,example:K4,examples:Y4,features:X4,useCases:Z4,notes:J4};function tO(e={}){const{enabled:t=!0,focusPoint:n={x:.5,y:.5},showLabel:o=!0}=e;return{name:"crop",version:"0.1.0",config:e,hooks:{transformProps:r=>{if(!t)return r;const a={...r.imageStyle||{},objectFit:"cover",objectPosition:`${Math.round(n.x*100)}% ${Math.round(n.y*100)}%`};return{...r,imageStyle:a}},renderOverlay:r=>!t||!o?null:y.jsxs("div",{style:{position:"absolute",top:8,left:8,background:"rgba(255,165,0,0.8)",color:"#000",padding:"4px 6px",borderRadius:4,fontSize:12},children:["CropPlugin · focus ",n.x.toFixed(2),",",n.y.toFixed(2)]})}}}const nO="CropPlugin",oO="焦点裁剪：通过 object-fit: cover 与 object-position 将裁剪焦点设在指定相对坐标，统一多图主体构图。",rO="2.0.0",aO=["other","视觉","裁剪"],iO=[{name:"enabled",type:"boolean",default:"true",description:"是否启用裁剪"},{name:"focusPoint",type:"{ x: number; y: number }",default:"{ x: 0.5, y: 0.5 }",description:"裁剪焦点(0~1 相对坐标)"},{name:"showLabel",type:"boolean",default:"true",description:"是否在图片左上角显示焦点标识（生产版式建议关闭）"}],sO=`const CropImage = withPlugins(LazyLoadImageCore, [
  createCropPlugin({ focusPoint: { x: 0.3, y: 0.4 } }),
]);

<CropImage src="https://picsum.photos/id/1015/500/300" alt="焦点裁剪示例" />;`,lO=[{name:"居中焦点（默认）",description:"x=0.5,y=0.5，主体居中裁切。",src:"https://picsum.photos/id/1015/500/300",config:{focusPoint:{x:.5,y:.5}}},{name:"左上方焦点",description:"x=0.3,y=0.3，主体偏左上裁切。",src:"https://picsum.photos/id/1021/500/300",config:{focusPoint:{x:.3,y:.3}}},{name:"右下焦点",description:"x=0.7,y=0.7，突出右下主体。",src:"https://picsum.photos/id/1026/500/300",config:{focusPoint:{x:.7,y:.7}}}],cO=["object-position 焦点裁剪","cover 填充","任意焦点坐标","可关闭","overlay 标识焦点（showLabel 可关）"],uO=["头像/封面统一构图","商品主图裁剪","列表缩略图","跨尺寸适配"],dO=["当前为最小实现：通过 CSS object-position 模拟裁剪焦点；加载容器需固定宽高以体现裁切效果。","showLabel: false 可隐藏左上角焦点标识，适合直接接入真实版式。"],pO={name:nO,description:oO,since:rO,tags:aO,config:iO,example:sO,examples:lO,features:cO,useCases:uO,notes:dO};function mO(e,t){const{lqipSrc:n}=t;if(n)return typeof n=="function"?n(e):n}async function gO(e){try{const t=new Image;t.crossOrigin="anonymous";const n=new Promise((d,p)=>{t.onload=()=>d(t),t.onerror=p});t.src=e;const o=await n,r=document.createElement("canvas");r.width=Math.max(1,Math.min(16,o.naturalWidth)),r.height=Math.max(1,Math.min(16,o.naturalHeight));const a=r.getContext("2d");if(!a)return;a.drawImage(o,0,0,r.width,r.height);const i=a.getImageData(0,0,r.width,r.height).data;let s=0,l=0,c=0,u=0;for(let d=0;d<i.length;d+=4)s+=i[d],l+=i[d+1],c+=i[d+2],u++;return s=Math.round(s/u),l=Math.round(l/u),c=Math.round(c/u),`rgb(${s}, ${l}, ${c})`}catch{return}}function fO(e={}){const t=e.color??"rgba(0,0,0,0.06)";return{name:"dominant-color",version:"1.0.0",config:e,hooks:{onMount:n=>{var r;const o=(r=n.containerRef)==null?void 0:r.current;if(o)try{const a=mO(n.src,e);if(a)gO(a).then(i=>{try{o.style.background=i||t}catch{}}).catch(()=>{try{o.style.background=t}catch{}});else try{o.style.background=t}catch{}}catch{try{o.style.background=t}catch{}}}}}}const hO="DominantColorPlugin",yO="主色占位：在加载完成前用指定颜色或 LQIP 采样平均色填充容器背景，减少白屏、提升视觉连贯性。",vO="2.0.0",bO=["other","视觉","占位"],wO=[{name:"color",type:"string",default:"rgba(0,0,0,0.06)",description:"指定背景色（未提供时尝试从 lqip 采样）"},{name:"lqipSrc",type:"string | ((src) => string)",default:"undefined",description:"低清预览图地址或生成函数（用于采样平均色）"}],xO=`const ColorImage = withPlugins(LazyLoadImageCore, [
  createDominantColorPlugin({
    lqipSrc: (src) => src + "?w=20", // 用小图采样主色
  }),
]);

<ColorImage src="https://picsum.photos/id/1015/500/300" alt="主色占位示例" />;`,PO=[{name:"指定背景色",description:"直接指定浅灰背景，加载前不白屏。",src:"https://picsum.photos/id/1015/500/300",config:{color:"#e9ecef"}},{name:"LQIP 采样主色",description:"用小图采样平均色填充（跨域图需 CORS，失败则回退默认色）。",src:"https://picsum.photos/id/1021/500/300",config:{lqipSrc:"https://picsum.photos/id/1021/20/20"}},{name:"暖色背景",description:"指定暖色背景，营造色调一致感。",src:"https://picsum.photos/id/1026/500/300",config:{color:"#f8d7da"}}],$O=["指定颜色占位","LQIP 采样平均色","加载前不白屏","采样失败安全回退","可关闭"],SO=["相册/画廊占位","Pinterest 风布局","慢网白屏治理","品牌色调统一"],CO=["lqipSrc 采样需要图片服务器配置 CORS 头；跨域失败会自动回退到 color（默认浅灰），不影响加载。"],kO={name:hO,description:yO,since:vO,tags:bO,config:wO,example:xO,examples:PO,features:$O,useCases:SO,notes:CO};function LO(e,t){const{lqipSrc:n}=t;if(n)return typeof n=="function"?n(e):n}function IO(e={}){const{blur:t=12,opacity:n=1,zIndex:o=2}=e;return{name:"lqip",version:"1.0.0",config:e,hooks:{renderOverlay:r=>{const{imageState:a,src:i}=r,s=LO(i,e);if(!s||a.isLoaded)return null;const l={position:"absolute",inset:0,backgroundImage:`url(${s})`,backgroundSize:"cover",backgroundPosition:"center",filter:`blur(${t}px)`,opacity:n,zIndex:o,pointerEvents:"none",transition:"opacity 300ms ease"};return y.jsx("div",{style:l})}}}}const _O="LQIPPlugin",EO="低清预览（LQIP）：在清晰图加载期间叠加模糊的小图作为占位，加载完成后自动隐藏，实现渐进式加载体验。",RO="2.0.0",zO=["other","视觉","占位","渐进加载"],OO=[{name:"lqipSrc",type:"string | ((src) => string)",default:"undefined",description:"低清预览图地址或生成函数"},{name:"blur",type:"number",default:"12",description:"模糊半径(px)"},{name:"opacity",type:"number",default:"1",description:"不透明度(0~1)"},{name:"zIndex",type:"number",default:"2",description:"叠加层级"}],DO=`const LqipImage = withPlugins(LazyLoadImageCore, [
  createLqipPlugin({ lqipSrc: (src) => src + "?w=20", blur: 14 }),
]);

<LqipImage src="https://picsum.photos/id/1015/500/300" alt="LQIP 示例" />;`,TO=[{name:"模糊小图占位",description:"14px 模糊小图作为加载期占位。",src:"https://picsum.photos/id/1015/500/300",config:{lqipSrc:"https://picsum.photos/id/1015/20/20",blur:14}},{name:"低不透明度",description:"降低占位图不透明度，弱化视觉存在。",src:"https://picsum.photos/id/1021/500/300",config:{lqipSrc:"https://picsum.photos/id/1021/20/20",blur:12,opacity:.6}},{name:"清晰后淡出",description:"加载完成自动隐藏模糊层，过渡到清晰图。",src:"https://picsum.photos/id/1026/500/300",config:{lqipSrc:"https://picsum.photos/id/1026/20/20",blur:16}}],jO=["模糊低清占位","可调模糊/透明度/层级","加载完成自动隐藏","支持函数/字符串来源","渐进式加载"],AO=["渐进式图片加载","慢网占位","画廊/相册","提升感知性能"],MO=["lqipSrc 为函数型配置，静态预览使用字符串小图；函数用法见用法示例。"],BO={name:_O,description:EO,since:RO,tags:zO,config:OO,example:DO,examples:TO,features:jO,useCases:AO,notes:MO};function NO({context:e,cfg:t}){const{position:n="bottom",background:o="rgba(0,0,0,0.62)",color:r="#fff",fontSize:a=12,padding:i="6px 8px",borderRadius:s=4,zIndex:l=4,showWhen:c="loading",trigger:u="always"}=t,{imageState:d}=e,p=c==="always"||c==="loading"&&d.isLoading||c==="loaded"&&d.isLoaded||c==="error"&&d.isError,[h,v]=N.useState(!1);if(!(u==="always"?p:p&&h))return y.jsx("div",{style:{position:"absolute",inset:0,zIndex:l,pointerEvents:u==="hover"?"auto":"none"},onMouseEnter:()=>v(!0),onMouseLeave:()=>v(!1)});const w=typeof t.content=="function"?t.content(e):t.content||"Loading...";return y.jsx("div",{style:{position:"absolute",inset:0,zIndex:l,pointerEvents:u==="hover"?"auto":"none"},onMouseEnter:()=>v(!0),onMouseLeave:()=>v(!1),children:y.jsx("div",{style:{position:"absolute",left:8,right:8,background:o,color:r,fontSize:a,padding:i,borderRadius:s,zIndex:l,pointerEvents:u==="hover"?"auto":"none",textAlign:"center",...{top:{top:8},bottom:{bottom:8},center:{top:"50%",transform:"translateY(-50%)"}}[n]},children:w})})}function FO(e={}){return{name:"overlay-info",version:"1.0.0",config:e,hooks:{renderOverlay:t=>y.jsx(NO,{context:t,cfg:e})}}}const UO="OverlayInfoPlugin",WO="信息覆盖层：显示自定义文本，支持常显或悬停触发。",VO="2.0.0",HO=["visual","视觉"],GO=[{name:"content",type:"string | ((context: LazyImageContext) => string)",default:'""',description:"覆盖层文本；可传函数按 context 派生"},{name:"position",type:'"top" | "bottom" | "center"',default:'"bottom"',description:"文本位置"},{name:"background",type:"string",default:"rgba(0,0,0,0.62)",description:"背景色"},{name:"color",type:"string",default:"#fff",description:"文字颜色"},{name:"fontSize",type:"number",default:"12",description:"字号 px"},{name:"padding",type:"string",default:"6px 10px",description:"内边距"},{name:"borderRadius",type:"number",default:"0",description:"圆角 px"},{name:"zIndex",type:"number",default:"2",description:"层叠顺序"},{name:"showWhen",type:'"always" | "loading" | "loaded" | "error"',default:'"always"',description:"何时显示"},{name:"trigger",type:'"always" | "hover"',default:'"always"',description:"触发方式"}],qO=`// 底部信息条（常显）
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
});`,QO=[{name:"底部信息条（常显）",description:"半透明黑底白字信息条，常显于底部。",src:"https://picsum.photos/seed/overlay-bottom/600/400",config:{content:"来源：picsum.photos",position:"bottom",background:"rgba(0,0,0,0.62)",color:"#fff",showWhen:"always",trigger:"always"}},{name:"悬停显示信息",description:"平时干净，鼠标悬停时居中浮出提示文字。",src:"https://picsum.photos/seed/overlay-hover/600/400",config:{content:"悬停查看详情",position:"center",background:"rgba(0,0,0,0.62)",color:"#fff",showWhen:"always",trigger:"hover"}}],KO=["顶部 / 底部 / 居中三位置","文本支持静态或函数动态派生","背景 / 颜色 / 字号 / 圆角可调","可常显或悬停触发","可按加载状态（loading/loaded/error）显示"],YO=["图片来源 / 版权信息","悬停浮出操作提示","加载 / 错误态文案","图库元信息展示"],XO=["content 传函数时可按 context（含 imageState / src）派生，但场景示例画廊用静态文本以保证实时预览。","与 Caption 的区别：OverlayInfo 更通用（任意文本 + 触发时机 + 加载态），Caption 专注单一图注。"],ZO={name:UO,description:WO,since:VO,tags:HO,config:GO,example:qO,examples:QO,features:KO,useCases:YO,notes:XO};function JO(e={}){const t=Math.max(0,Math.min(1,e.strength??.2)),n=e.axis??"y";function o(r){const a=r.getBoundingClientRect(),i=typeof window<"u"?window.innerHeight:800,s=(a.top+a.height/2-i/2)/i*(t*100),l=n==="x"?s:0,c=n==="y"?s:0;r.style.transform=`translate(${l}px, ${c}px)`}return{name:"parallax",version:"1.0.0",config:e,hooks:{onMount:r=>{let a=0;const i=()=>{var c;const l=(c=r.imageRef)==null?void 0:c.current;if(!l){a++<60&&requestAnimationFrame(i);return}s(l)},s=l=>{r.__lliParallaxImg=l,l.style.willChange="transform";let c=!1,u=null;const d=()=>{c||(u=requestAnimationFrame(()=>{o(l),c=!1}),c=!0)},p=()=>{c||(u=requestAnimationFrame(()=>{o(l),c=!1}),c=!0)};return l.__lliParallaxScroll=d,l.__lliParallaxResize=p,l.__lliParallaxRafId=u,window.addEventListener("scroll",d,{passive:!0}),window.addEventListener("resize",p,{passive:!0}),o(l),()=>{l.__lliParallaxRafId!==null&&cancelAnimationFrame(l.__lliParallaxRafId)}};i()},onUnmount:r=>{var l;const a=r.__lliParallaxImg||((l=r.imageRef)==null?void 0:l.current);if(!a)return;if(a.__lliParallaxRafId!==null)try{cancelAnimationFrame(a.__lliParallaxRafId)}catch{}const i=a.__lliParallaxScroll,s=a.__lliParallaxResize;i&&window.removeEventListener("scroll",i),s&&window.removeEventListener("resize",s),a.style.transform="",a.style.willChange="",delete a.__lliParallaxScroll,delete a.__lliParallaxResize,delete a.__lliParallaxRafId}}}}const eD="ParallaxPlugin",tD="视差滚动：随页面滚动按强度偏移图片位置。",nD="2.0.0",oD=["visual","视觉"],rD=[{name:"strength",type:"number",default:"0.2",description:"偏移强度 0..1"},{name:"axis",type:'"y" | "x"',default:'"y"',description:"偏移轴向"}],aD=`// 垂直视差：滚动时图片缓慢位移
const ParallaxImage = withPlugins(LazyLoadImageCore, [
  createParallaxPlugin({ strength: 0.2, axis: "y" }),
]);

<ParallaxImage src="https://picsum.photos/seed/parallax/600/400" alt="视差" />;`,iD=[{name:"垂直视差",description:"中等强度 y 轴视差，滚动时图片缓移，营造纵深。",src:"https://picsum.photos/seed/parallax-y/600/400",config:{strength:.2,axis:"y"}},{name:"轻微视差",description:"低强度视差，含蓄的层次感，不喧宾夺主。",src:"https://picsum.photos/seed/parallax-light/600/400",config:{strength:.1,axis:"y"}}],sD=["随滚动偏移图片（y / x 轴）","强度可调（0~1）","纯 transform 实现，性能友好","增强页面纵深与动感"],lD=["落地页 / Hero 区背景","长图文滚动叙事","作品集视差画廊","需要纵深氛围的视觉场景"],cD=["视差依赖页面滚动，demo 小卡片内滚动幅度有限，效果在长页面更明显。","strength 过大可能导致图片露出边缘，建议配合 overflow:hidden 容器。"],uD={name:eD,description:tD,since:nD,tags:oD,config:rD,example:aD,examples:iD,features:sD,useCases:lD,notes:cD};function dD({bus:e,loading:t,showWhen:n="loading",height:o=3,color:r="#3b82f6",background:a="rgba(0,0,0,0.15)",showPercentText:i=!0}){const[s,l]=S.useState(null),[c,u]=S.useState(0),d=N.useRef(null);S.useEffect(()=>{const v=e==null?void 0:e.on("progress",w=>{l(w),w.indeterminate?d.current||(d.current=window.setInterval(()=>{u($=>$<90?$+3:$)},160)):(u(w.percent??0),d.current&&(clearInterval(d.current),d.current=null))});return()=>{v==null||v(),d.current&&(clearInterval(d.current),d.current=null)}},[e]);const p=n==="always"?!0:t,h=s!=null&&s.indeterminate?c:(s==null?void 0:s.percent)??0;return p?y.jsxs("div",{style:{position:"absolute",inset:0,pointerEvents:"none",background:a,display:"flex",alignItems:"flex-end",zIndex:10},children:[y.jsx("div",{style:{width:`${h}%`,height:o,background:r,transition:"width 200ms ease"}}),i&&y.jsx("div",{style:{position:"absolute",left:"50%",top:"50%",transform:"translate(-50%, -50%)",fontSize:12,color:"#fff",textShadow:"0 1px 2px rgba(0,0,0,0.5)",textAlign:"center",pointerEvents:"none"},children:s!=null&&s.indeterminate?`加载中… ${h}%`:`${h}%`})]}):null}function pD(e={}){return{name:"progress-overlay",version:"1.0.0",config:e,hooks:{renderOverlay:({bus:t,imageState:n})=>y.jsx(dD,{bus:t,loading:n.isLoading,showWhen:e.showWhen,height:e.height,color:e.color,background:e.background,showPercentText:e.showPercentText??!0}),onProgress:()=>{}}}}const mD="ProgressOverlayPlugin",gD="加载进度条覆盖层：百分比文本与 indeterminate 模式。",fD="2.0.0",hD=["visual","视觉"],yD=[{name:"showWhen",type:'"always" | "loading"',default:'"loading"',description:"何时显示"},{name:"height",type:"number",default:"3",description:"进度条高度 px"},{name:"color",type:"string",default:"#4a90e2",description:"进度条颜色"},{name:"background",type:"string",default:"transparent",description:"背景遮罩色"},{name:"showPercentText",type:"boolean",default:"false",description:"是否显示百分比文本"}],vD=`// 顶部进度条 + 百分比文本
const ProgressImage = withPlugins(LazyLoadImageCore, [
  createProgressOverlayPlugin({
    showWhen: "loading",
    height: 3,
    color: "#4a90e2",n    showPercentText: true,
  }),
]);

<ProgressImage src="https://picsum.photos/seed/progress/600/400" alt="进度蒙层" />;`,bD=[{name:"顶部进度条 + 百分比",description:"细进度条置于顶部，并显示实时百分比。",src:"https://picsum.photos/seed/progress-top/600/400",config:{showWhen:"loading",height:3,color:"#4a90e2",showPercentText:!0}},{name:"半透明遮罩 + 百分比",description:"加载期覆盖半透明遮罩，中心显示百分比，适合大图。",src:"https://picsum.photos/seed/progress-mask/600/400",config:{showWhen:"loading",height:4,color:"#22c55e",background:"rgba(0,0,0,0.12)",showPercentText:!0}}],wD=["顶部 / 覆盖式进度条","实时百分比文本","颜色 / 高度 / 背景可调","加载完成后自动消失"],xD=["大图 / 慢网络加载反馈","视频封面缓冲提示","需要明确进度感知的场景","与 Skeleton 配合提升占位体验"],PD=["进度数据来自内核 progress 事件，跨域或缓存命中时可能很快跳到 100%。","与 Skeleton 同时使用时，进度条层级通常高于骨架。"],$D={name:mD,description:gD,since:fD,tags:hD,config:yD,example:vD,examples:bD,features:wD,useCases:xD,notes:PD};function SD(e={}){const{enabled:t=!0,boxes:n=[],zIndex:o=3}=e;return{name:"redaction",version:"1.0.0",config:e,hooks:{renderOverlay:r=>!t||!n.length?null:y.jsx("div",{style:{position:"absolute",inset:0,pointerEvents:"none",zIndex:o},children:n.map((a,i)=>y.jsx("div",{style:{position:"absolute",left:`${a.x*100}%`,top:`${a.y*100}%`,width:`${a.w*100}%`,height:`${a.h*100}%`,background:a.color??"rgba(0,0,0,0.55)",backdropFilter:a.blur?`blur(${a.blur}px)`:void 0,borderRadius:6}},i))})}}}const CD="RedactionPlugin",kD="隐私打码：在指定百分比区域叠加模糊或色块遮挡。",LD="2.0.0",ID=["visual","视觉"],_D=[{name:"enabled",type:"boolean",default:"true",description:"是否启用"},{name:"boxes",type:"RedactionBox[]",default:"[]",description:"遮挡区域：{ x, y, w, h (0~1), blur?, color? }"},{name:"zIndex",type:"number",default:"3",description:"层叠顺序"}],ED=`// 局部打码（如人脸 / 车牌）
const RedactedImage = withPlugins(LazyLoadImageCore, [
  createRedactionPlugin({
    boxes: [
      { x: 0.40, y: 0.30, w: 0.20, h: 0.15, blur: 8 },
    ],
  }),
]);

<RedactedImage src="https://picsum.photos/seed/redaction/600/400" alt="打码" />;`,RD=[{name:"局部模糊打码",description:"在图片 40%/30% 处覆盖一块 20%×15% 的模糊区域（如人脸）。",src:"https://picsum.photos/seed/redaction-blur/600/400",config:{enabled:!0,boxes:[{x:.4,y:.3,w:.2,h:.15,blur:8}]}},{name:"色块遮挡",description:"用半透明色块遮挡敏感区域，不依赖模糊。",src:"https://picsum.photos/seed/redaction-block/600/400",config:{enabled:!0,boxes:[{x:.1,y:.7,w:.35,h:.12,color:"rgba(0,0,0,0.85)"}]}}],zD=["按百分比坐标划定遮挡区（自适应尺寸）","支持模糊（blur）或纯色块两种遮挡","可同时覆盖多个区域","整体启停"],OD=["人脸 / 车牌隐私打码","敏感信息遮挡","截图脱敏","合规图片发布"],DD=["坐标使用 0~1 的相对比例，图片缩放时遮挡区自动跟随。","blur 通过 backdrop-filter 实现；若浏览器不支持会以纯色块兜底。","打码是覆盖层，不改变原图像素，导出原图不会被脱敏。"],TD={name:CD,description:kD,since:LD,tags:ID,config:_D,example:ED,examples:RD,features:zD,useCases:OD,notes:DD},jD=new Set(["script","iframe","object","embed","foreignobject","base","meta","link","style"]),AD=new Set(["href","xlink:href","src","action","formaction","poster","background","cite","data","codebase","longdesc","usemap"]),MD=["http:","https:","blob:","mailto:","tel:","data:image/"];function BD(e){const t=Array.from(e.trim().toLowerCase()).filter(n=>n.charCodeAt(0)>32).join("");return!t||t.startsWith("#")||t.startsWith("./")||t.startsWith("../")||t.startsWith("/")?!0:t.startsWith("data:")?t.startsWith("data:image/"):/^(javascript|vbscript|file):/.test(t)?!1:MD.some(n=>t.startsWith(n))||!t.includes(":")}function ND(e){var t,n;if(!e||typeof DOMParser>"u")return"";try{const o=new DOMParser;let r=o.parseFromString(e,"image/svg+xml").documentElement;if((!r||r.nodeName.toLowerCase()==="parsererror")&&(r=((n=(t=o.parseFromString(e,"text/html"))==null?void 0:t.body)==null?void 0:n.querySelector("svg"))??null),!r)return"";const a=s=>{if(jD.has(s.tagName.toLowerCase())){s.remove();return}Array.from(s.attributes).forEach(l=>{const c=l.name.toLowerCase();if(c.startsWith("on")){s.removeAttribute(l.name);return}if(c==="style"){/expression|javascript:|vbscript:|url\s*\(\s*['"]?(javascript|vbscript)/i.test(l.value)&&s.removeAttribute(l.name);return}AD.has(c)&&!BD(l.value)&&s.removeAttribute(l.name)}),Array.from(s.children).forEach(a)};a(r);const i=typeof XMLSerializer<"u"?new XMLSerializer:null;return i?i.serializeToString(r):r.outerHTML||""}catch{return""}}function FD({context:e,config:t}){const{imageState:n}=e,{background:o="transparent",opacity:r=1,zIndex:a=3,showWhen:i="loading",fadeOutOnLoaded:s=!0}=t;if(!(()=>{switch(i){case"always":return!0;case"idle":return n.isIdle;case"loading":return n.isLoading;case"loaded":return n.isLoaded;case"error":return n.isError;default:return n.isLoading}})())return null;const l=typeof t.svgContent=="function"?t.svgContent(e):t.svgContent;let c=null;if(typeof l=="string"){const d=ND(l);d&&(c=y.jsx("img",{src:`data:image/svg+xml;charset=utf-8,${encodeURIComponent(d)}`,alt:"",style:{width:"60%",height:"60%",objectFit:"contain"}}))}else l!=null&&(c=l);const u={position:"absolute",inset:0,display:"flex",alignItems:"center",justifyContent:"center",background:o,zIndex:a,pointerEvents:"none",opacity:s&&n.isLoaded?0:r,transition:s?"opacity 240ms ease":void 0,padding:"min(40px, 10%)"};return y.jsx("div",{style:u,"aria-hidden":!0,children:c})}function UD(e={}){return{name:"svg-placeholder",version:"1.1.0",description:"SVG 占位覆盖层（字符串经白名单清洗后以 data URL 渲染，移除 HTML 注入点）",config:e,hooks:{renderOverlay:t=>y.jsx(FD,{context:t,config:e})}}}const WD="SvgPlaceholderPlugin",VD="SVG 占位：在加载期间注入自定义 SVG 占位内容（如骨架、品牌图形），加载成功后淡出，增强加载反馈与品牌感。",HD="2.0.0",GD=["other","视觉","占位"],qD=[{name:"svgContent",type:"string | ((context) => string)",default:"undefined",description:"SVG 字符串或动态生成函数"},{name:"background",type:"string",default:'"transparent"',description:"叠加层背景"},{name:"opacity",type:"number",default:"1",description:"不透明度(0~1)"},{name:"zIndex",type:"number",default:"3",description:"叠加层级"},{name:"showWhen",type:'"always" | "idle" | "loading" | "loaded" | "error"',default:'"loading"',description:"显示条件"},{name:"fadeOutOnLoaded",type:"boolean",default:"true",description:"加载成功后是否淡出"}],QD=`const SvgImage = withPlugins(LazyLoadImageCore, [
  createSvgPlaceholderPlugin({
    svgContent: () => \`<svg viewBox='0 0 100 100'><circle cx='50' cy='50' r='40' fill='#ddd'/></svg>\`,
    showWhen: "loading",
  }),
]);

<SvgImage src="https://picsum.photos/id/1015/500/300" alt="SVG 占位示例" />;`,KD=[{name:"圆形骨架占位",description:"加载期显示灰色圆形 SVG 占位，完成后淡出。",src:"https://picsum.photos/id/1015/500/300",config:{svgContent:"<svg viewBox='0 0 100 100'><circle cx='50' cy='50' r='40' fill='#ddd'/></svg>",showWhen:"loading"}},{name:"带背景占位",description:"浅色背景衬托占位 SVG。",src:"https://picsum.photos/id/1021/500/300",config:{svgContent:"<svg viewBox='0 0 100 100'><rect x='10' y='10' width='80' height='80' rx='8' fill='#eee'/></svg>",background:"#fafafa"}},{name:"常驻标识",description:"showWhen=always，占位层持续显示。",src:"https://picsum.photos/id/1026/500/300",config:{svgContent:"<svg viewBox='0 0 100 100'><rect width='100' height='100' fill='rgba(0,0,0,0.04)'/></svg>",showWhen:"always"}}],YD=["注入任意 SVG 占位","加载时/常驻/多状态显示","淡出过渡","背景/透明度/层级可调","函数/字符串来源"],XD=["动画骨架屏","品牌图形占位","加载反馈","差异化占位"],ZD=["svgContent 支持函数型（按 context 动态生成），静态预览使用字符串；函数用法见用法示例。"],JD={name:WD,description:VD,since:HD,tags:GD,config:qD,example:QD,examples:KD,features:YD,useCases:XD,notes:ZD};function e6(e,t){var o;const n=(o=e.imageRef)==null?void 0:o.current;if(n)try{n.style.opacity=String(t.fromOpacity??0),n.style.transform=`scale(${t.fromScale??.98})`,n.style.transition=`opacity ${t.durationMs??300}ms ${t.easing??"ease"}, transform ${t.durationMs??300}ms ${t.easing??"ease"}`}catch{}}function t6(e,t){var o;const n=(o=e.imageRef)==null?void 0:o.current;if(n)try{n.style.opacity=String(t.toOpacity??1),n.style.transform=`scale(${t.toScale??1})`}catch{}}function n6(e={}){return{name:"transition",version:"1.0.0",config:e,hooks:{onMount:t=>{e6(t,e)},onLoadSuccess:t=>{t6(t,e)}}}}const o6="TransitionPlugin",r6="加载成功过渡动画：从指定透明度/缩放到目标值的平滑过渡。",a6="2.0.0",i6=["visual","视觉"],s6=[{name:"durationMs",type:"number",default:"400",description:"过渡时长 ms"},{name:"easing",type:"string",default:"ease",description:"缓动函数"},{name:"fromOpacity",type:"number",default:"0",description:"起始透明度"},{name:"toOpacity",type:"number",default:"1",description:"结束透明度"},{name:"fromScale",type:"number",default:"1",description:"起始缩放"},{name:"toScale",type:"number",default:"1",description:"结束缩放"}],l6=`// 缩放 + 淡入过渡
const TransImage = withPlugins(LazyLoadImageCore, [
  createTransitionPlugin({
    durationMs: 500,
    fromOpacity: 0,
    toOpacity: 1,
    fromScale: 1.05,
    toScale: 1,
  }),
]);

<TransImage src="https://picsum.photos/seed/transition/600/400" alt="过渡" />;`,c6=[{name:"缩放淡入",description:"从 1.05 倍淡入到原尺寸，轻盈的入场感。",src:"https://picsum.photos/seed/transition-zoom/600/400",config:{durationMs:500,fromOpacity:0,toOpacity:1,fromScale:1.05,toScale:1}},{name:"纯淡入",description:"仅透明度过渡，不含缩放。",src:"https://picsum.photos/seed/transition-fade/600/400",config:{durationMs:400,fromOpacity:0,toOpacity:1}}],u6=["透明度 + 缩放双维度过渡","起始 / 结束值均可定制","时长与缓动可调","相比 FadeIn 更灵活"],d6=["图片入场动画","卡片翻转 / 弹出图","需要缩放感的场景","与视差 / 滚动联动"],p6=["fromScale=toScale=1 时退化为纯淡入，等价于更轻量的 FadeIn。","缩放在 transform 上实现，注意父容器 overflow 与定位。"],m6={name:o6,description:r6,since:a6,tags:i6,config:s6,example:l6,examples:c6,features:u6,useCases:d6,notes:p6};function g6(e={}){const{text:t="© 2024 Vane",position:n="bottom-right",opacity:o=.8,fontSize:r=12,color:a="#fff",offsetX:i=8,offsetY:s=8,zIndex:l=2,enabled:c=!0}=e;return{name:"watermark",version:"1.0.0",config:e,hooks:{renderOverlay:u=>{if(!c)return null;const d=typeof t=="function"?t(u.src):t;return y.jsx("div",{"aria-hidden":"true",style:{position:"absolute",pointerEvents:"none",color:a,opacity:o,fontSize:r,fontWeight:500,textShadow:"0 1px 2px rgba(0,0,0,0.55)",zIndex:l,...{"top-left":{top:s,left:i},"top-right":{top:s,right:i},"bottom-left":{bottom:s,left:i},"bottom-right":{bottom:s,right:i},center:{top:"50%",left:"50%",transform:"translate(-50%, -50%)"}}[n]},children:d})}}}}const f6="WatermarkPlugin",h6="文字水印覆盖层：支持四角/中心定位、动态文本与样式定制。",y6="2.0.0",v6=["visual","视觉"],b6=[{name:"text",type:"string | ((src: string) => string)",default:'"© 2024 Vane"',description:"水印文本；可传函数按 src 动态生成"},{name:"position",type:'"top-left" | "top-right" | "bottom-left" | "bottom-right" | "center"',default:'"bottom-right"',description:"水印位置"},{name:"opacity",type:"number",default:"0.8",description:"0~1 透明度"},{name:"fontSize",type:"number",default:"12",description:"px 字号"},{name:"color",type:"string",default:'"#fff"',description:"文字颜色"},{name:"offsetX",type:"number",default:"8",description:"px 水平偏移"},{name:"offsetY",type:"number",default:"8",description:"px 垂直偏移"},{name:"zIndex",type:"number",default:"2",description:"层叠顺序"},{name:"enabled",type:"boolean",default:"true",description:"是否启用"}],w6=`// 版权水印：右下角、半透明
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
});`,x6=[{name:"版权水印（右下角）",description:"半透明白字落在右下角，常见版权标识场景。",src:"https://picsum.photos/seed/wm-copyright/600/400",config:{text:"© 2026 Vane",position:"bottom-right",opacity:.6,fontSize:14,color:"#ffffff"}},{name:"中心品牌水印",description:"居中、低透明度大字，适合图库/作品集防盗用。",src:"https://picsum.photos/seed/wm-center/600/400",config:{text:"VANE",position:"center",opacity:.22,fontSize:30,color:"#ffffff"}},{name:"左上角说明水印",description:"左上角小字，作来源/批次标注。",src:"https://picsum.photos/seed/wm-topleft/600/400",config:{text:"内部素材 • 勿外传",position:"top-left",opacity:.85,fontSize:12,color:"#ffd400"}}],P6=["五位置可选（四角 + 中心）","文本支持静态字符串或函数动态派生","可调透明度 / 字号 / 颜色 / 偏移","可整体启停（enabled）","层叠顺序可控（zIndex）"],$6=["图片版权 / 品牌标识","图库与作品集防盗用","内部素材来源 / 批次标注","活动海报统一角标","按用户 / 租户动态打标"],S6=["text 传函数时按图片 src 动态生成（如嵌入 ID），但场景示例画廊需用静态文本以保证实时预览。","中心水印透明度建议低于 0.3，避免遮挡主体内容。","水印为覆盖层（renderOverlay），不参与图片本身像素，导出原图不会被打标。"],C6={name:f6,description:h6,since:y6,tags:v6,config:b6,example:w6,examples:x6,features:P6,useCases:$6,notes:S6};let k6=0;function L6(e){return Object.entries(e).map(([t,n])=>n==null?"":`${t.replace(/[A-Z]/g,o=>"-"+o.toLowerCase())}: ${n};`).filter(Boolean).join(" ")}const I6=e=>{const t=(e==null?void 0:e.imageStyle)??{},n=(e==null?void 0:e.containerStyle)??{},o=(e==null?void 0:e.hoverImageStyle)??{},r=Object.keys(o).length>0,a=`lli-custom-${++k6}`;let i=null;const s=[t.transition,"opacity 180ms ease"].filter(Boolean).join(", ");return{name:"custom-effects",priority:50,hooks:{transformProps(l){const c={...l.imageStyle||{},...t,transition:s},u={...l.containerStyle||{},...n},d=[l.imageClassName,e==null?void 0:e.imageClassName,r?a:null].filter(Boolean).join(" "),p=[l.containerClassName,e==null?void 0:e.containerClassName].filter(Boolean).join(" ");return{...l,imageStyle:c,imageClassName:d,containerStyle:u,containerClassName:p}},onLoadSuccess(){!r||typeof document>"u"||i||(i=document.createElement("style"),i.setAttribute("data-lli-custom",a),i.textContent=`.${a}:hover { ${L6(o)} }`,document.head.appendChild(i))},onUnmount(){i&&i.parentNode&&(i.parentNode.removeChild(i),i=null)}}}},_6="CustomEffectsPlugin",E6="自定义效果逃逸舱：把内置视觉插件覆盖不到的任意 CSS 效果（filter / transform / transition / className）直接注入图片与容器，无需新造组件。旧版 CustomEffects 展示页的 v2 等效形态。",R6="2.0.0",z6=["visual","视觉","自定义"],O6=[{name:"imageStyle",type:"React.CSSProperties",default:"{}",description:'应用到 <img> 的任意内联样式，如 { filter: "contrast(1.2) saturate(1.4)" }'},{name:"imageClassName",type:"string",default:'""',description:"附加到 <img> 的 className"},{name:"containerStyle",type:"React.CSSProperties",default:"{}",description:"应用到容器（卡片）的任意内联样式"},{name:"containerClassName",type:"string",default:'""',description:"附加到容器的 className"},{name:"hoverImageStyle",type:"React.CSSProperties",default:"{}",description:'悬停时叠加到 <img> 的样式（移出还原），如 { transform: "scale(1.08)" }'}],D6=`// 任意 CSS 效果逃逸舱：内置插件没有的视觉，直接以样式注入
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

<ArtImage src="https://picsum.photos/seed/custom/600/400" alt="自定义效果" />;`,T6=[{name:"复古胶片滤镜（静态）",description:"sepia + 对比度 + 饱和度组合，模拟胶片质感，并给容器加圆角。",src:"https://picsum.photos/seed/custom-film/600/400",config:{imageStyle:{filter:"sepia(0.45) contrast(1.1) saturate(1.3)",transition:"filter 240ms ease"},containerStyle:{borderRadius:16,overflow:"hidden",boxShadow:"0 6px 20px rgba(0,0,0,0.18)"}}},{name:"悬停放大 + 轻微旋转",description:"平常静态，鼠标悬停时图片放大并旋转 2°，移出自动还原。",src:"https://picsum.photos/seed/custom-hover/600/400",config:{imageStyle:{transition:"transform 220ms ease"},hoverImageStyle:{transform:"scale(1.08) rotate(2deg)"}}},{name:"叠加到内置插件之上",description:"与 BorderGlow / Caption 等内置插件叠加：用逃逸舱补一个渐变描边。",src:"https://picsum.photos/seed/custom-combo/600/400",config:{imageClassName:"custom-art-frame",containerStyle:{padding:6,background:"linear-gradient(135deg,#ff9a9e,#fad0c4)",borderRadius:12}}}],j6=["注入任意 CSS filter（模糊 / 灰度 / 复古 / 色相旋转等）","注入任意 transform（缩放 / 旋转 / 位移）","为 <img> 与容器分别附加 className 与内联样式","hoverImageStyle 支持悬停态，移出自动还原","优先级靠前，可叠加在其它视觉插件之上","无需为一次性效果新建组件，几行配置即可"],A6=["内置视觉插件未覆盖的特殊滤镜 / 调色需求","活动主题需要临时换肤、加描边 / 圆角","悬停微交互（放大、旋转、投影）","演示或 A/B 实验时的快速视觉验证","替代旧版 CustomEffects 展示页的任意效果组合"],M6=["imageStyle / containerStyle 合并进核心渲染的 style，后者优先级更高（叠加而非覆盖）。","插件会自动保留核心自带的 opacity 渐显：你给 imageStyle.transition 设值时，会追加 opacity 180ms 而非覆盖它。","hoverImageStyle 通过注入一条纯 CSS `:hover` 规则实现，由浏览器原生处理进入/离开——不触碰 React 受控的内联样式，因此不会出现「移出后图片消失」的旧问题。","与内置插件叠加时，建议把 CustomEffects 放在 withPlugins 数组靠前位置（其 priority=50 已处理）。","需要函数式动态样式时，可在业务侧先算出 style 对象再传入，本插件保持配置式以便文档化。"],B6={name:_6,description:E6,since:R6,tags:z6,config:O6,example:D6,examples:T6,features:j6,useCases:A6,notes:M6},N6={fade:"@keyframes reveal-fade { from { opacity: 0; } to { opacity: 1; } }","fade-up":"@keyframes reveal-fade-up { from { opacity: 0; transform: translateY(30px); } to { opacity: 1; transform: translateY(0); } }","fade-down":"@keyframes reveal-fade-down { from { opacity: 0; transform: translateY(-30px); } to { opacity: 1; transform: translateY(0); } }","fade-left":"@keyframes reveal-fade-left { from { opacity: 0; transform: translateX(30px); } to { opacity: 1; transform: translateX(0); } }","fade-right":"@keyframes reveal-fade-right { from { opacity: 0; transform: translateX(-30px); } to { opacity: 1; transform: translateX(0); } }","zoom-in":"@keyframes reveal-zoom-in { from { opacity: 0; transform: scale(0.8); } to { opacity: 1; transform: scale(1); } }","zoom-out":"@keyframes reveal-zoom-out { from { opacity: 0; transform: scale(1.2); } to { opacity: 1; transform: scale(1); } }","rotate-in":"@keyframes reveal-rotate-in { from { opacity: 0; transform: rotate(-180deg) scale(0.5); } to { opacity: 1; transform: rotate(0deg) scale(1); } }","flip-x":"@keyframes reveal-flip-x { from { opacity: 0; transform: perspective(400px) rotateX(-90deg); } to { opacity: 1; transform: perspective(400px) rotateX(0deg); } }","flip-y":"@keyframes reveal-flip-y { from { opacity: 0; transform: perspective(400px) rotateY(-90deg); } to { opacity: 1; transform: perspective(400px) rotateY(0deg); } }","slide-up":"@keyframes reveal-slide-up { from { transform: translateY(100%); } to { transform: translateY(0); } }","slide-down":"@keyframes reveal-slide-down { from { transform: translateY(-100%); } to { transform: translateY(0); } }","slide-left":"@keyframes reveal-slide-left { from { transform: translateX(100%); } to { transform: translateX(0); } }","slide-right":"@keyframes reveal-slide-right { from { transform: translateX(-100%); } to { transform: translateX(0); } }",bounce:"@keyframes reveal-bounce { from { opacity: 0; transform: scale(0.3) translateY(-50px); } 50% { opacity: 1; transform: scale(1.05) translateY(0); } 70% { transform: scale(0.95); } to { opacity: 1; transform: scale(1); } }",elastic:"@keyframes reveal-elastic { from { opacity: 0; transform: scale(0); } 50% { opacity: 1; transform: scale(1.2); } 75% { transform: scale(0.9); } 90% { transform: scale(1.05); } to { opacity: 1; transform: scale(1); } }"};function Fu(e,t){if(typeof document>"u"||document.getElementById(e))return;const n=document.createElement("style");n.id=e,n.textContent=t,document.head.appendChild(n)}function F6(e={}){const{animation:t="fade-up",duration:n=600,delay:o=0,easing:r="ease-out",customAnimation:a,customKeyframes:i,fillMode:s="both",disabled:l=!1}=e;return t!=="custom"?Fu(`reveal-animation-${t}`,N6[t]??""):i&&a&&Fu(`reveal-animation-custom-${a}`,i),{name:"reveal-animation",version:"1.0.0",config:e,hooks:{onLoadSuccess:c=>{var p;if(l)return;const u=(p=c.imageRef)==null?void 0:p.current;if(!u)return;const d=t==="custom"?a||"none":`reveal-${t}`;if(u.style.animation=`${d} ${n}ms ${r} ${o}ms ${s}`,s==="none"||s==="backwards"){const h=()=>{u.style.animation="",u.removeEventListener("animationend",h)};u.addEventListener("animationend",h)}}}}}const U6="RevealAnimationPlugin",W6="图片揭示动画：为图片加载添加各种进场动画（淡入/缩放/旋转/翻转/弹跳/弹性等 16 种预设 + 自定义），纯 CSS 无依赖。",V6="2.0.0",H6=["interaction","视觉效果与交互","visual"],G6=[{name:"animation",type:'"fade" | "fade-up" | "fade-down" | "fade-left" | "fade-right" | "zoom-in" | "zoom-out" | "rotate-in" | "flip-x" | "flip-y" | "slide-up" | "slide-down" | "slide-left" | "slide-right" | "bounce" | "elastic" | "custom"',default:'"fade-up"',description:"动画类型"},{name:"duration",type:"number",default:"600",description:"持续时间（毫秒）"},{name:"delay",type:"number",default:"0",description:"延迟（毫秒）"},{name:"easing",type:"string",default:'"ease-out"',description:"缓动函数"},{name:"customAnimation",type:"string",default:'""',description:"自定义动画名（animation 为 custom 时生效）"},{name:"customKeyframes",type:"string",default:'""',description:"自定义 keyframes 文本"},{name:"fillMode",type:'"none" | "forwards" | "backwards" | "both"',default:'"both"',description:"动画填充模式"},{name:"disabled",type:"boolean",default:"false",description:"是否禁用"}],q6=`// 1. 组装带揭示动画的懒加载图片
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
});`,Q6=[{name:"淡入上浮（默认）",description:"fade-up：图片加载完成后从下方淡入上浮，最通用的进场效果。",src:"https://picsum.photos/id/1018/400/300",config:{animation:"fade-up",duration:700,easing:"ease-out"}},{name:"缩放进入 zoom-in",description:"图片由 1.2 倍缩放回落至原尺寸并淡入，适合主视觉。",src:"https://picsum.photos/id/1015/400/300",config:{animation:"zoom-in",duration:800}},{name:"旋转进入 rotate-in",description:"带轻微旋转的进场，动感更强。",src:"https://picsum.photos/id/1024/400/300",config:{animation:"rotate-in",duration:900,delay:100}},{name:"弹跳 bounce",description:"带回弹缓冲的进场，活泼、吸引注意。",src:"https://picsum.photos/id/1039/400/300",config:{animation:"bounce",duration:1e3}},{name:"弹性 elastic + 自定义时长",description:"弹性缓动 + 更长时长，强调“弹出”质感。",src:"https://picsum.photos/id/1043/400/300",config:{animation:"elastic",duration:1200,easing:"cubic-bezier(0.68, -0.55, 0.265, 1.55)"}},{name:"自定义关键帧 custom",description:"通过 customAnimation 指定动画名，并以 customKeyframes 注入关键帧文本，可做任意效果。",src:"https://picsum.photos/id/1050/400/300",config:{animation:"custom",customAnimation:"myReveal",customKeyframes:"@keyframes myReveal { from { opacity: 0; transform: scale(1.2) rotate(8deg); } to { opacity: 1; transform: none; } }"}}],K6=["16 种预设动画（淡入/缩放/旋转/翻转/滑动/弹跳/弹性）","支持自定义动画名 + 关键帧文本","可配置时长、延迟、缓动函数","fill 模式控制动画结束态","可一键禁用（disabled，适配低端设备）","纯 CSS 实现，无运行时依赖"],Y6=["图片列表进场","瀑布流懒加载","轮播图切换","首屏内容揭示","卡片/区块入场动画","营销落地页视觉点缀"],X6=["动画在图片加载完成后触发一次；再次滚动不会重复播放。","低端设备或开启“减少动态效果”偏好时，可设 disabled: true 关闭动画。"],Z6={name:U6,description:W6,since:V6,tags:H6,config:G6,example:q6,examples:Q6,features:K6,useCases:Y6,notes:X6};function J6(){if(typeof document>"u"||document.getElementById("glitch-effect-styles"))return;const e=document.createElement("style");e.id="glitch-effect-styles",e.textContent=`
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
  `,document.head.appendChild(e)}const eT=({config:e})=>{const{style:t="glitch-mix",continuous:n=!1,duration:o=1e3,intensity:r=.7,triggerOnHover:a=!1,rgbOffset:i=3,scanLineCount:s=30,animateScanLines:l=!0}=e,[c,u]=S.useState(!1),[d,p]=S.useState(!1);S.useEffect(()=>{if(J6(),!n&&!a){u(!0);const f=setTimeout(()=>u(!1),o);return()=>clearTimeout(f)}},[n,a,o]);const h=n||c||a&&d,v={position:"absolute",inset:0,background:`linear-gradient(90deg, rgba(255,0,0,${r*.15}) 0%, transparent ${i*2}px, transparent calc(100% - ${i*2}px), rgba(0,255,255,${r*.15}) 100%)`,mixBlendMode:"color",animation:h?"glitch-rgb-split 0.5s ease-in-out infinite":"none",pointerEvents:"none"},w=Array.from({length:s},(f,m)=>y.jsx("div",{style:{position:"absolute",left:0,right:0,height:"1px",top:`${m/s*100}%`,background:`rgba(255,255,255,${r*.1})`,animation:l&&h?`scan-line-move ${2+Math.random()*2}s linear infinite`:"none",animationDelay:`${Math.random()*2}s`}},m)),$=f=>{const m=[{main:"rgba(255,0,0,0.15)",secondary:"rgba(0,255,255,0.15)"},{main:"rgba(0,255,0,0.15)",secondary:"rgba(255,0,255,0.15)"},{main:"rgba(0,100,255,0.15)",secondary:"rgba(255,255,0,0.15)"}],g=m[f-1]||m[0];return{position:"absolute",inset:0,background:`linear-gradient(${f*45}deg, ${g.main} 0%, transparent 30%, transparent 70%, ${g.secondary} 100%)`,animation:h?`glitch-anim ${.4+f*.1}s infinite ${f%2===0?"normal":"reverse"}`:"none",animationDelay:`${f*.06}s`,opacity:r*.7,mixBlendMode:"screen",pointerEvents:"none",filter:`blur(${r*.5}px)`}};return y.jsxs("div",{style:{position:"absolute",inset:0,pointerEvents:a?"auto":"none",overflow:"hidden"},onMouseEnter:()=>a&&p(!0),onMouseLeave:()=>a&&p(!1),children:[(t==="rgb-split"||t==="glitch-mix"||t==="intense")&&h&&y.jsx("div",{style:v}),(t==="scan-lines"||t==="glitch-mix")&&h&&w,(t==="digital"||t==="glitch-mix"||t==="intense")&&h&&y.jsxs(y.Fragment,{children:[y.jsx("div",{style:$(1)}),y.jsx("div",{style:$(2)}),t==="intense"&&y.jsx("div",{style:$(3)})]}),t==="intense"&&h&&y.jsx("div",{style:{position:"absolute",inset:0,background:`repeating-linear-gradient(0deg, rgba(0,255,0,${r*.03}) 0px, rgba(0,255,0,0) 2px, rgba(0,255,0,0) 4px, rgba(0,255,0,${r*.03}) 6px)`,animation:"glitch-anim 0.8s ease-in-out infinite",pointerEvents:"none",opacity:.5}})]})};function tT(e={}){return{name:"glitch-effect",version:"1.0.0",config:e,hooks:{renderOverlay:t=>y.jsx(eT,{config:e,context:t})}}}const nT="GlitchEffectPlugin",oT="故障艺术效果：赛博朋克风格 RGB 分离 / 扫描线 / 数字失真 / 混合 / 强烈五种风格，纯 CSS 无依赖，支持持续、一次性、悬停触发。",rT="2.0.0",aT=["interaction","视觉效果与交互","visual"],iT=[{name:"style",type:'"rgb-split" | "scan-lines" | "digital" | "glitch-mix" | "intense"',default:'"glitch-mix"',description:"故障风格"},{name:"continuous",type:"boolean",default:"false",description:"是否持续动画"},{name:"duration",type:"number",default:"1000",description:"一次性触发时长（毫秒）"},{name:"intensity",type:"number",default:"0.7",description:"效果强度 0~1"},{name:"triggerOnHover",type:"boolean",default:"false",description:"是否悬停触发"},{name:"rgbOffset",type:"number",default:"3",description:"RGB 分离距离（px）"},{name:"scanLineCount",type:"number",default:"30",description:"扫描线数量"},{name:"animateScanLines",type:"boolean",default:"true",description:"扫描线是否动画"}],sT=`// 1. 持续 RGB 分离故障特效
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
createGlitchEffectPlugin({ style: "glitch-mix", triggerOnHover: true });`,lT=[{name:"glitch-mix 混合（持续）",description:"混合风格默认效果，持续播放，适合做氛围封面。",src:"https://picsum.photos/id/1043/400/300",config:{style:"glitch-mix",continuous:!0,intensity:.7}},{name:"rgb-split RGB 分离（持续）",description:"红蓝通道错位产生色散，赛博朋克典型观感。",src:"https://picsum.photos/id/1062/400/300",config:{style:"rgb-split",continuous:!0,rgbOffset:5}},{name:"scan-lines 扫描线（悬停触发）",description:"叠加扫描线纹理，悬停时启动，平时保持干净。",src:"https://picsum.photos/id/1074/400/300",config:{style:"scan-lines",triggerOnHover:!0,scanLineCount:40,animateScanLines:!0}},{name:"digital 数字失真（一次性）",description:"加载/进入时触发一次数字故障，随后恢复清晰。",src:"https://picsum.photos/id/1080/400/300",config:{style:"digital",continuous:!1,duration:900}},{name:"intense 高强度",description:"强度拉满的强烈故障，冲击力强，适合标题位。",src:"https://picsum.photos/id/1084/400/300",config:{style:"intense",continuous:!0,intensity:1}}],cT=["5 种故障风格（RGB 分离 / 扫描线 / 数字失真 / 混合 / 强烈）","三种触发模式：持续 / 一次性 / 悬停触发","效果强度 0~1 可调","扫描线数量与是否动画可配","RGB 错位距离可调","纯 CSS 实现，无运行时依赖"],uT=["赛博朋克风格站点","海报 / 专辑封面","活动营销页","游戏官网","暗色主题视觉","品牌焕新 / 限时活动"],dT=["持续动画（continuous: true）会一直占用合成层，建议对大图或大量实例谨慎使用。","阅读型内容可用 triggerOnHover: true，仅在鼠标悬停时播放，避免干扰。"],pT={name:nT,description:oT,since:rT,tags:aT,config:iT,example:sT,examples:lT,features:cT,useCases:uT,notes:dT},Uu={"circle-to-square":()=>"@keyframes morph-circle-to-square { from { border-radius: 50%; transform: scale(0.9); } to { border-radius: 0%; transform: scale(1); } }","square-to-circle":()=>"@keyframes morph-square-to-circle { from { border-radius: 0%; transform: scale(1); } to { border-radius: 50%; transform: scale(0.9); } }","rounded-corners":e=>`@keyframes morph-rounded-corners { from { border-radius: ${e.fromBorderRadius??"50%"}; } to { border-radius: ${e.toBorderRadius??"0%"}; } }`,"scale-morph":e=>`@keyframes morph-scale { from { transform: scale(${e.fromScale??1}); } to { transform: scale(${e.toScale??1}); } }`,"rotate-morph":e=>`@keyframes morph-rotate { from { transform: rotate(${e.fromRotate??0}deg); } to { transform: rotate(${e.toRotate??0}deg); } }`,"skew-morph":e=>`@keyframes morph-skew { from { transform: skewX(${e.fromSkew??0}deg) skewY(${e.fromSkew??0}deg); } to { transform: skewX(${e.toSkew??0}deg) skewY(${e.toSkew??0}deg); } }`,elastic:()=>"@keyframes morph-elastic { 0% { transform: scale(0.8); } 30% { transform: scale(1.1); } 50% { transform: scale(0.95); } 70% { transform: scale(1.02); } 100% { transform: scale(1); } }",liquid:()=>"@keyframes morph-liquid { 0% { border-radius: 30% 70% 70% 30% / 30% 30% 70% 70%; transform: rotate(0deg); } 25% { border-radius: 58% 42% 75% 25% / 76% 46% 54% 24%; } 50% { border-radius: 50% 50% 33% 67% / 55% 27% 73% 45%; transform: rotate(180deg); } 75% { border-radius: 33% 67% 58% 42% / 63% 68% 32% 37%; } 100% { border-radius: 30% 70% 70% 30% / 30% 30% 70% 70%; transform: rotate(360deg); } }",custom:e=>e.customTransform?`@keyframes morph-custom { from { ${e.customTransform.from} } to { ${e.customTransform.to} } }`:""},mT={"circle-to-square":"morph-circle-to-square","square-to-circle":"morph-square-to-circle","rounded-corners":"morph-rounded-corners","scale-morph":"morph-scale","rotate-morph":"morph-rotate","skew-morph":"morph-skew",elastic:"morph-elastic",liquid:"morph-liquid",custom:"morph-custom"};function gT(e,t){if(typeof document>"u"||!t||document.getElementById(e))return;const n=document.createElement("style");n.id=e,n.textContent=t,document.head.appendChild(n)}function fT(e={}){const{type:t="elastic",duration:n=800,delay:o=0,easing:r="cubic-bezier(0.68, -0.55, 0.265, 1.55)",triggerOnHover:a=!1,continuous:i=!1}=e,s=(Uu[t]??Uu.elastic)(e);gT(`morph-plugin-${t}`,s);const l=mT[t]??"morph-elastic";return{name:"morph",version:"1.0.0",config:e,hooks:{onLoadSuccess:c=>{var d;const u=(d=c.imageRef)==null?void 0:d.current;if(u){if(i){u.style.animation=`${l} ${n}ms ${r} ${o}ms infinite alternate`;return}if(a){const p=()=>{u.style.animation=`${l} ${n}ms ${r} ${o}ms both`},h=()=>{u.style.animation=""};u.addEventListener("mouseenter",p),u.addEventListener("mouseleave",h);return}u.style.animation=`${l} ${n}ms ${r} ${o}ms both`}}}}}const hT="MorphPlugin",yT="形变过渡效果：圆角/缩放/旋转/倾斜/弹性/液态等多种形变动画，纯 CSS transforms，支持加载触发、悬停触发与持续动画。",vT="2.0.0",bT=["interaction","视觉效果与交互","visual"],wT=[{name:"type",type:'"circle-to-square" | "square-to-circle" | "rounded-corners" | "scale-morph" | "rotate-morph" | "skew-morph" | "elastic" | "liquid" | "custom"',default:'"elastic"',description:"形变类型"},{name:"duration",type:"number",default:"800",description:"持续时间（毫秒）"},{name:"delay",type:"number",default:"0",description:"延迟（毫秒）"},{name:"easing",type:"string",default:'"cubic-bezier(0.68, -0.55, 0.265, 1.55)"',description:"缓动函数"},{name:"triggerOnHover",type:"boolean",default:"false",description:"是否悬停触发"},{name:"continuous",type:"boolean",default:"false",description:"是否持续动画"},{name:"fromBorderRadius",type:"string",default:'"50%"',description:"rounded-corners 起始圆角"},{name:"toBorderRadius",type:"string",default:'"0%"',description:"rounded-corners 结束圆角"},{name:"fromScale",type:"number",default:"1",description:"scale-morph 起始缩放"},{name:"toScale",type:"number",default:"1",description:"scale-morph 结束缩放"},{name:"fromRotate",type:"number",default:"0",description:"rotate-morph 起始角度"},{name:"toRotate",type:"number",default:"0",description:"rotate-morph 结束角度"},{name:"fromSkew",type:"number",default:"0",description:"skew-morph 起始倾斜"},{name:"toSkew",type:"number",default:"0",description:"skew-morph 结束倾斜"}],xT=`// 1. 弹性形变
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
});`,PT=[{name:"elastic 弹性形变",description:"加载完成后以弹性缓动“弹”入，适合头像与卡片。",src:"https://picsum.photos/id/1080/400/300",config:{type:"elastic",duration:1e3,easing:"cubic-bezier(0.68, -0.55, 0.265, 1.55)"}},{name:"rounded-corners 圆角过渡",description:"从圆形过渡为圆角矩形，强调形态变化。",src:"https://picsum.photos/id/1084/400/300",config:{type:"rounded-corners",fromBorderRadius:"50%",toBorderRadius:"12%",duration:900}},{name:"scale-morph 缩放形变",description:"从 0.85 倍放大到原尺寸，配合淡入更自然。",src:"https://picsum.photos/id/110/400/300",config:{type:"scale-morph",fromScale:.85,toScale:1,duration:800}},{name:"rotate-morph 旋转形变",description:"带角度旋转的进入，动感十足。",src:"https://picsum.photos/id/111/400/300",config:{type:"rotate-morph",fromRotate:-12,toRotate:0,duration:900}},{name:"liquid 液态（持续）",description:"持续液态流动效果，适合做背景或装饰图。",src:"https://picsum.photos/id/119/400/300",config:{type:"liquid",continuous:!0,duration:2e3}}],$T=["9 种形变类型（圆角 / 缩放 / 旋转 / 倾斜 / 弹性 / 液态等）","三种触发：加载触发 / 悬停触发 / 持续动画","圆角、缩放、旋转、倾斜均参数化起止值","弹性缓动可定制","纯 CSS transforms，性能好","无运行时依赖"],ST=["头像形变入场","按钮 / 卡片交互反馈","Logo 动画","加载态过渡","图片墙动态呈现","装饰性背景图"],CT=["continuous: true 会持续播放；配合 triggerOnHover: true 可在鼠标悬停时播放单次，更省资源。","悬停触发的场景需在图片上移动 / 悬停鼠标才能看到形变，静态截图仅展示初始态。"],kT={name:hT,description:yT,since:vT,tags:bT,config:wT,example:xT,examples:PT,features:$T,useCases:ST,notes:CT},LT=({config:e})=>{const{style:t="zoom-in",enableFollower:n=!0,followerColor:o="rgba(59, 130, 246, 0.5)",followerSize:r=40,followerDelay:a=.1,scaleOnHover:i=!0,hoverScale:s=1.5,customIcon:l,cursorText:c,showRipple:u=!1}=e,[d,p]=S.useState(!1),[h,v]=S.useState({x:0,y:0}),[w,$]=S.useState({x:0,y:0}),[f,m]=S.useState([]),g=S.useRef(null),b=S.useRef(void 0),x=l?`url(${l}), auto`:{"zoom-in":"zoom-in","zoom-out":"zoom-out",pointer:"pointer",crosshair:"crosshair",move:"move",grab:"grab","custom-dot":"none","custom-ring":"none","custom-plus":"none",none:"none"}[t]??"auto";S.useEffect(()=>{if(!n)return;const T=()=>{$(U=>({x:U.x+(h.x-U.x)*(1-a),y:U.y+(h.y-U.y)*(1-a)})),b.current=requestAnimationFrame(T)};return b.current=requestAnimationFrame(T),()=>{b.current&&cancelAnimationFrame(b.current)}},[h,n,a]);const P=T=>{if(!g.current)return;const U=g.current.getBoundingClientRect();v({x:T.clientX-U.left,y:T.clientY-U.top})},C=T=>{if(!u||!g.current)return;const U=g.current.getBoundingClientRect(),G=Date.now();m(H=>[...H,{id:G,x:T.clientX-U.left,y:T.clientY-U.top}]),setTimeout(()=>m(H=>H.filter(E=>E.id!==G)),1e3)},k=d&&i?s:1,I={position:"absolute",inset:0,cursor:x,overflow:"hidden",zIndex:5},_={position:"absolute",left:w.x,top:w.y,width:r,height:r,transform:`translate(-50%, -50%) scale(${k})`,backgroundColor:o,borderRadius:"50%",pointerEvents:"none",transition:"transform 0.3s ease",zIndex:10},M={position:"absolute",left:w.x,top:w.y,width:r,height:r,border:"2px solid #3b82f6",borderRadius:"50%",transform:`translate(-50%, -50%) scale(${k})`,pointerEvents:"none",transition:"transform 0.2s ease",zIndex:11},F={position:"absolute",left:w.x,top:w.y,width:20,height:20,transform:"translate(-50%, -50%)",pointerEvents:"none",zIndex:11},D={position:"absolute",left:h.x+15,top:h.y-10,padding:"4px 8px",fontSize:12,color:"#fff",backgroundColor:"rgba(0,0,0,0.8)",borderRadius:4,pointerEvents:"none",whiteSpace:"nowrap",zIndex:12};return y.jsxs("div",{ref:g,style:I,onMouseMove:P,onMouseEnter:()=>p(!0),onMouseLeave:()=>p(!1),onClick:C,children:[n&&y.jsx("div",{style:_}),t==="custom-dot"&&y.jsx("div",{style:_}),t==="custom-ring"&&y.jsx("div",{style:M}),t==="custom-plus"&&y.jsx("div",{style:F,children:y.jsxs("svg",{width:"20",height:"20",viewBox:"0 0 20 20",fill:"none",children:[y.jsx("line",{x1:"10",y1:"0",x2:"10",y2:"20",stroke:"#3b82f6",strokeWidth:"2"}),y.jsx("line",{x1:"0",y1:"10",x2:"20",y2:"10",stroke:"#3b82f6",strokeWidth:"2"})]})}),c&&d&&y.jsx("div",{style:D,children:c}),f.map(T=>y.jsx("div",{style:{position:"absolute",left:T.x,top:T.y,width:0,height:0,border:"2px solid rgba(59, 130, 246, 0.8)",borderRadius:"50%",transform:"translate(-50%, -50%)",animation:"ripple-expand 1s ease-out forwards",pointerEvents:"none"}},T.id)),u&&y.jsx("style",{children:"@keyframes ripple-expand { from { width: 0; height: 0; opacity: 1; } to { width: 80px; height: 80px; opacity: 0; } }"})]})};function IT(e={}){return{name:"animated-cursor",version:"1.0.0",config:e,hooks:{renderOverlay:t=>y.jsx(LT,{config:e,context:t})}}}const _T="AnimatedCursorPlugin",ET="自定义光标动画：为图片叠加系统光标（放大镜/十字/抓手等）或自定义光标（圆点/圆环/加号）+ 跟随动画 + 点击涟漪 + 文字提示，纯 CSS+JS 无依赖。",RT="2.0.0",zT=["interaction","视觉效果与交互","visual"],OT=[{name:"style",type:'"zoom-in" | "zoom-out" | "pointer" | "crosshair" | "move" | "grab" | "custom-dot" | "custom-ring" | "custom-plus" | "none"',default:'"zoom-in"',description:"光标样式"},{name:"enableFollower",type:"boolean",default:"true",description:"是否启用跟随光标"},{name:"followerColor",type:"string",default:'"rgba(59, 130, 246, 0.5)"',description:"跟随光标颜色"},{name:"followerSize",type:"number",default:"40",description:"跟随光标大小（px）"},{name:"followerDelay",type:"number",default:"0.1",description:"跟随延迟系数（越大越跟手）"},{name:"scaleOnHover",type:"boolean",default:"true",description:"悬停时跟随光标缩放"},{name:"hoverScale",type:"number",default:"1.5",description:"悬停缩放比例"},{name:"customIcon",type:"string",default:'""',description:"自定义光标图标 URL"},{name:"cursorText",type:"string",default:'""',description:"光标附带文字"},{name:"showRipple",type:"boolean",default:"false",description:"点击时产生涟漪"}],DT=`// 1. 放大镜光标 + 蓝色跟随圆点
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
});`,TT=[{name:"zoom-in 放大镜 + 跟随圆点",description:"系统放大镜光标，叠加半透明蓝色跟随圆点，暗示可放大查看。",src:"https://picsum.photos/id/110/400/300",config:{style:"zoom-in",enableFollower:!0,followerColor:"rgba(59,130,246,0.5)",followerSize:40}},{name:"custom-dot 自定义圆点 + 点击涟漪",description:"自定义圆点跟随光标，点击产生涟漪动画，互动感强。",src:"https://picsum.photos/id/119/400/300",config:{style:"custom-dot",showRipple:!0,followerSize:44,followerColor:"rgba(255,99,132,0.5)"}},{name:"custom-ring 圆环 + 文字提示",description:"圆环跟随光标并附带文字提示，适合“查看大图”引导。",src:"https://picsum.photos/id/122/400/300",config:{style:"custom-ring",cursorText:"查看大图",followerSize:56,followerColor:"rgba(16,185,129,0.6)"}},{name:"crosshair 十字光标",description:"十字准星光标，适合素材 / 设计类站点定位。",src:"https://picsum.photos/id/129/400/300",config:{style:"crosshair",enableFollower:!0,followerSize:36}},{name:"custom-plus 加号光标",description:"加号光标，强调“可添加 / 收藏”等操作。",src:"https://picsum.photos/id/133/400/300",config:{style:"custom-plus",enableFollower:!0,followerSize:40,scaleOnHover:!0}}],jT=["10 种光标样式（系统光标 + 自定义圆点 / 圆环 / 加号）","跟随光标：颜色、大小、延迟系数可调","悬停时跟随光标缩放","点击涟漪动画","可附带文字提示","支持自定义图标 URL","纯 CSS + 轻量 JS，无依赖"],AT=["商品详情放大预览","画廊 / 素材站点","设计工具类页面","交互演示与引导","收藏 / 添加操作的视觉暗示","创意作品集"],MT=["效果需鼠标在图片上移动 / 悬停 / 点击才会体现，静态截图仅展示初始态。","移动端无指针设备，建议配合触摸反馈降级，或仅保留 enableFollower 等轻效果。"],BT={name:_T,description:ET,since:RT,tags:zT,config:OT,example:DT,examples:TT,features:jT,useCases:AT,notes:MT},NT=({config:e})=>{const{style:t="tilt",intensity:n=.5,maxTilt:o=20,enablePerspective:r=!0,perspective:a=1e3,enableGlare:i=!0,glareColor:s="rgba(255, 255, 255, 0.3)",glareOpacity:l=.5,enableShadow:c=!0,transitionDuration:u=300,resetOnLeave:d=!0}=e,[p,h]=S.useState({rotateX:0,rotateY:0,translateZ:0,translateY:0}),[v,w]=S.useState({x:50,y:50}),$=N.useRef(null),f=P=>{if(!$.current)return;const C=$.current.getBoundingClientRect(),k=(P.clientX-C.left)/C.width-.5,I=(P.clientY-C.top)/C.height-.5;let _={rotateX:0,rotateY:0,translateZ:0,translateY:0};switch(t){case"tilt":_={rotateX:-I*o*n,rotateY:k*o*n,translateZ:0,translateY:0};break;case"parallax":_={rotateX:-I*o*n*.5,rotateY:k*o*n*.5,translateZ:Math.abs(k+I)*10*n,translateY:0};break;case"float":_={rotateX:0,rotateY:0,translateZ:-I*50*n,translateY:-I*40*n};break;case"rotate-3d":_={rotateX:-I*o*n*1.5,rotateY:k*o*n*1.5,translateZ:15*n,translateY:0};break}h(_),w({x:(P.clientX-C.left)/C.width*100,y:(P.clientY-C.top)/C.height*100})},m=()=>{d&&h({rotateX:0,rotateY:0,translateZ:0,translateY:0}),w({x:50,y:50})},g={position:"absolute",inset:0,transformStyle:"preserve-3d",perspective:r?`${a}px`:void 0,transition:`transform ${u}ms ease-out`,zIndex:1},b={position:"absolute",inset:0,transform:`translateY(${p.translateY}px) rotateX(${p.rotateX}deg) rotateY(${p.rotateY}deg) translateZ(${p.translateZ}px)`,transformStyle:"preserve-3d",transition:d?`transform ${u}ms ease-out`:"none",boxShadow:c?`${p.rotateY*.5}px ${p.rotateX*.5+p.translateY*.3}px ${20+Math.abs(p.translateZ)*.5}px rgba(0,0,0,0.3)`:"none"},x={position:"absolute",inset:0,background:`radial-gradient(circle at ${v.x}% ${v.y}%, ${s} 0%, transparent 50%)`,opacity:l,pointerEvents:"none",mixBlendMode:"overlay",transition:d?`opacity ${u}ms ease-out`:"none"};return y.jsx("div",{ref:$,style:g,onMouseMove:f,onMouseLeave:m,children:y.jsx("div",{style:b,children:i&&y.jsx("div",{style:x})})})};function FT(e={}){return{name:"depth-map",version:"1.0.0",config:e,hooks:{renderOverlay:t=>y.jsx(NT,{config:e,context:t})}}}const UT="DepthMapPlugin",WT="3D 视差深度效果：鼠标跟随的倾斜 / 视差 / 浮动 / 3D 旋转，带光泽与阴影，纯 CSS transforms 无依赖。",VT="2.0.0",HT=["interaction","视觉效果与交互","visual"],GT=[{name:"style",type:'"tilt" | "parallax" | "float" | "rotate-3d"',default:'"tilt"',description:"深度效果样式"},{name:"intensity",type:"number",default:"0.5",description:"效果强度 0~1"},{name:"maxTilt",type:"number",default:"20",description:"最大倾斜角度"},{name:"enablePerspective",type:"boolean",default:"true",description:"启用透视效果"},{name:"perspective",type:"number",default:"1000",description:"透视距离（px）"},{name:"enableGlare",type:"boolean",default:"true",description:"启用光泽效果"},{name:"glareColor",type:"string",default:'"rgba(255, 255, 255, 0.3)"',description:"光泽颜色"},{name:"glareOpacity",type:"number",default:"0.5",description:"光泽不透明度 0~1"},{name:"enableShadow",type:"boolean",default:"true",description:"启用阴影"},{name:"transitionDuration",type:"number",default:"300",description:"过渡时长（毫秒）"},{name:"resetOnLeave",type:"boolean",default:"true",description:"离开时重置"}],qT=`// 1. 鼠标跟随倾斜
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
});`,QT=[{name:"tilt 倾斜（鼠标跟随）",description:"鼠标移动时图片随指针方向倾斜，带光泽高光，质感类似实体卡片。",src:"https://picsum.photos/id/122/400/300",config:{style:"tilt",maxTilt:15,intensity:.5,enableGlare:!0}},{name:"parallax 视差",description:"图片内部图层随鼠标产生位移差，营造纵深感。",src:"https://picsum.photos/id/129/400/300",config:{style:"parallax",intensity:.6,enablePerspective:!0,perspective:1e3}},{name:"rotate-3d 3D 旋转",description:"围绕多轴的 3D 旋转，配合阴影更具立体感。",src:"https://picsum.photos/id/133/400/300",config:{style:"rotate-3d",intensity:.7,enableShadow:!0,resetOnLeave:!0}},{name:"float 浮动",description:"轻微持续上下浮动的呼吸感，适合装饰性产品图。",src:"https://picsum.photos/id/142/400/300",config:{style:"float",intensity:.4,enableGlare:!1}}],KT=["4 种深度样式（倾斜 / 视差 / 浮动 / 3D 旋转）","鼠标跟随实时响应","光泽（glare）与阴影可开关并调参","透视距离可调","离开时一键重置（resetOnLeave）","纯 CSS transforms，无依赖"],YT=["产品 3D 展示","卡片悬浮交互","3D 封面 / 海报","作品集与个人主页","落地页英雄区","会员 / 旗舰商品位"],XT=["效果依赖鼠标移动产生视差，静态截图仅为初始平面态；移动设备体验有限，建议作为渐进增强。","intensity 与 maxTilt 控制幅度，强度过高在低端设备上可能引起卡顿，可按需下调。"],ZT={name:UT,description:WT,since:VT,tags:HT,config:GT,example:qT,examples:QT,features:KT,useCases:YT,notes:XT};async function JT(){var e;try{const t=navigator;if(t&&typeof t.getBattery=="function")return((e=await t.getBattery())==null?void 0:e.level)??null}catch{}return null}function ej(e,t){try{const n=new URL(e,window.location.href);return n.searchParams.set("w",String(t)),n.searchParams.set("auto","format"),n.searchParams.set("fit","crop"),n.toString()}catch{return e}}function tj(e){var t;return!!((t=e.networkInfo)!=null&&t.saveData)}function nj(e={}){const{enabled:t=!0,lowBatteryThreshold:n=.2,downgradeWidth:o=640,disablePreconnect:r=!0}=e;return{name:"battery-aware",version:"1.0.0",config:e,hooks:{onLoad:async a=>{if(!t)return;const i=await JT(),s=i!==null?i<=n:!1,l=tj(a);if(s||l)return ej(a.src,o)},transformProps:a=>{if(!t)return a;const i={...a};return i.loading="lazy",r&&(i["data-disable-preconnect"]="true"),i}}}}const oj="BatteryAwarePlugin",rj="电量感知：当设备电量低于阈值或开启省流模式时，自动将图片请求宽度降级并禁用预连接，兼顾体验与续航/流量。",aj="2.0.0",ij=["other","加载策略","性能","省流量"],sj=[{name:"enabled",type:"boolean",default:"true",description:"是否启用"},{name:"lowBatteryThreshold",type:"number",default:"0.2",description:"低电量阈值(0~1)"},{name:"downgradeWidth",type:"number",default:"640",description:"降级时的请求宽度(px)"},{name:"disablePreconnect",type:"boolean",default:"true",description:"低电量时是否禁用预连接"}],lj=`const BatteryImage = withPlugins(LazyLoadImageCore, [
  createBatteryAwarePlugin({ lowBatteryThreshold: 0.3, downgradeWidth: 480 }),
]);

<BatteryImage src="https://picsum.photos/id/1015/500/300" alt="电量感知示例" />;`,cj=[{name:"默认降级",description:"电量<20% 或省流时降宽至 640 并禁用预连接。",src:"https://picsum.photos/id/1015/500/300",config:{enabled:!0}},{name:"放宽阈值",description:"电量<30% 才降级，更保守。",src:"https://picsum.photos/id/1021/500/300",config:{lowBatteryThreshold:.3}},{name:"保留预连接",description:"disablePreconnect=false，降级时仍允许预连接。",src:"https://picsum.photos/id/1026/500/300",config:{disablePreconnect:!1}}],uj=["低电量自动降宽","省流模式联动","可禁用预连接","可关闭"],dj=["移动端续航优化","流量节省","弱网/低电场景","全球低端设备"],pj=["依赖 navigator.getBattery() 与网络 saveData；不支持的环境（如桌面/无该 API）不降级，不影响加载。"],mj={name:oj,description:rj,since:aj,tags:ij,config:sj,example:lj,examples:cj,features:uj,useCases:dj,notes:pj};function gj(e={}){const{enabled:t=!0}=e;return{name:"exif-orientation",version:"1.0.0",config:e,hooks:{transformProps:n=>{if(!t)return n;const o={...n.imageStyle||{},imageOrientation:"from-image"};return{...n,imageStyle:o}}}}}const fj="ExifOrientationPlugin",hj="EXIF 方向：根据图片自带的方向信息（EXIF Orientation）自动校正显示，避免手机竖拍照片横显。",yj="2.0.0",vj=["a11y","可访问性","加载策略"],bj=[{name:"enabled",type:"boolean",default:"true",description:"是否启用方向校正"}],wj=`const OrientImage = withPlugins(LazyLoadImageCore, [
  createExifOrientationPlugin({ enabled: true }),
]);

<OrientImage src="https://picsum.photos/id/1015/500/300" alt="方向校正示例" />;`,xj=[{name:"启用方向校正（默认）",description:"imageOrientation: from-image，跟随 EXIF 方向。",src:"https://picsum.photos/id/1015/500/300",config:{enabled:!0}},{name:"关闭校正",description:"enabled=false 时不注入方向样式。",src:"https://picsum.photos/id/1021/500/300",config:{enabled:!1}}],Pj=["按 EXIF Orientation 自动校正","imageOrientation: from-image","无需手动旋转","可关闭"],$j=["手机/相机照片","用户上传图","竖拍横显修复"],Sj=["依赖浏览器对 image-orientation: from-image 的支持，现代浏览器均已支持。"],Cj={name:fj,description:hj,since:yj,tags:vj,config:bj,example:wj,examples:xj,features:Pj,useCases:$j,notes:Sj};function ug(e,t){return()=>{const[n,o]=N.useState(0);return N.useEffect(()=>{const r=()=>{try{const i=document.querySelectorAll(`link[id^="${e}"]`).length;o(i)}catch{}};r();const a=setInterval(r,400);return()=>clearInterval(a)},[]),y.jsxs("div",{style:{position:"absolute",top:8,left:8,background:"#1565c0",color:"#fff",fontSize:12,padding:"4px 8px",borderRadius:6,zIndex:6,pointerEvents:"none"},children:[t,"：",n]})}}function kj(e,t="image",n="anonymous"){const o=`lli-hoverprefetch-${t}-${e}`;try{if(typeof document>"u"||document.getElementById(o))return null;const r=document.createElement("link");return r.id=o,r.setAttribute("rel","preload"),r.setAttribute("as",t||"image"),r.setAttribute("href",e),n&&r.setAttribute("crossorigin",n),document.head.appendChild(r),o}catch{return null}}function Lj(e){var t;try{if(typeof document>"u")return;(t=document.getElementById(e))==null||t.remove()}catch{}}function Ij(e){const t=e.match(/(\d+)(?=[^\d]*$)/);if(!t)return;const n=t[0],o=parseInt(n,10);if(Number.isNaN(o))return;const r=e.replace(n,String(o+1));return r!==e?r:void 0}const _j=ug("lli-hoverprefetch-","已预取");function Ej(e={}){const{getNextSrc:t,target:n="container",trigger:o="mouseenter",as:r="image",max:a=2,dedupe:i=!0,crossOrigin:s="anonymous",showBadge:l=!1,debug:c=!1}=e,u=new Set,d=new Set,p=30,h=100;async function v(w){try{let $=t?await Promise.resolve(t(w)):void 0;if($||($=Ij(w.src)),!$)return;(Array.isArray($)?$:[$]).slice(0,Math.max(1,a)).forEach(f=>{if(i&&d.has(f))return;const m=kj(f,r,s);if(m&&u.add(m),d.add(f),c)try{console.debug("[HoverPrefetch] preload",{href:f,as:r})}catch{}})}catch($){if(c)try{console.debug("[HoverPrefetch] error",$)}catch{}}}return{name:"hover-prefetch",version:"2.1.0",description:"悬停预取下一张图片；image 目标延迟绑定，preload link 在卸载时移除（P2-3）",config:e,hooks:{onMount:w=>{var P;const $=()=>v(w);let f=null,m=null,g=0;const b=()=>{var _,M;const C=(_=w.containerRef)==null?void 0:_.current,k=(M=w.imageRef)==null?void 0:M.current,I=n==="container"?C:k;return I?(I.addEventListener(o,$,{passive:!0}),f=()=>{try{I.removeEventListener(o,$)}catch{}},!0):!1},x=()=>{b()||n==="image"&&g<p&&(g+=1,m=setTimeout(x,h))};x(),(P=w.sharedData)==null||P.set("hover-prefetch:cleanup",()=>{m&&clearTimeout(m),f&&f()})},onUnmount:w=>{var f,m;const $=(f=w.sharedData)==null?void 0:f.get("hover-prefetch:cleanup");if(typeof $=="function")try{$()}catch{}(m=w.sharedData)==null||m.delete("hover-prefetch:cleanup"),u.forEach(g=>Lj(g)),u.clear(),d.clear()},renderOverlay:()=>l?N.createElement(_j):null}}}const Rj="HoverPrefetchPlugin",zj="悬停预取：当用户将鼠标悬停（或触摸）在图片上时，提前向浏览器插入 preload 链接拉取下一张资源，实现零延迟切换。",Oj="2.0.0",Dj=["viewport","视口与交互","预取","性能"],Tj=[{name:"getNextSrc",type:"(context) => string | string[] | Promise<...>",default:"undefined",description:"计算需要预取的下一张图片（函数型，参见用法示例）"},{name:"target",type:'"container" | "image"',default:'"container"',description:"绑定事件的目标（容器或图片元素）"},{name:"trigger",type:'"mouseenter" | "touchstart"',default:'"mouseenter"',description:"触发事件类型"},{name:"as",type:'"image" | "fetch"',default:'"image"',description:"预取资源类型"},{name:"max",type:"number",default:"2",description:"预取的最大数量"},{name:"dedupe",type:"boolean",default:"true",description:"去重，避免重复插入相同的预取链接"},{name:"crossOrigin",type:'"anonymous" | "use-credentials" | null',default:'"anonymous"',description:"跨域策略"},{name:"showBadge",type:"boolean",default:"false",description:"是否在卡片上显示「已预取 N」徽标（便于观察注入效果）"},{name:"debug",type:"boolean",default:"false",description:"是否输出调试日志"}],jj=`const PrefetchImage = withPlugins(LazyLoadImageCore, [
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
<PrefetchImage src="https://picsum.photos/id/1015/500/300" alt="悬停预取示例" />;`,Aj=[{name:"容器悬停预取（默认）",description:"鼠标进入容器即插入 preload，预取下一张图片（默认按 URL 末尾数字派生），卡片左上角显示「已预取 N」。",src:"https://picsum.photos/id/1015/500/300",config:{target:"container",trigger:"mouseenter",max:2,as:"image",showBadge:!0}},{name:"图片悬停预取",description:"事件直接绑定在图片元素上。",src:"https://picsum.photos/id/1021/500/300",config:{target:"image",trigger:"mouseenter",max:1}},{name:"触摸预取",description:"移动端用 touchstart 触发预取。",src:"https://picsum.photos/id/1026/500/300",config:{target:"container",trigger:"touchstart",max:1}}],Mj=["悬停 / 触摸即预取","容器或图片元素两种绑定目标","mouseenter / touchstart 两种触发","预取数量上限与去重","自定义跨域策略","调试日志输出"],Bj=["商品画廊下一张预览","图片轮播预加载","列表项快速切换","移动端触摸预载"],Nj=["必须提供 `getNextSrc` 才会真正预取；不传时只绑定事件、不产生请求。","`showBadge: true` 会在卡片上显示「已预取 N」，是验收该插件最直接的方式。"],Fj={name:Rj,description:zj,since:Oj,tags:Dj,config:Tj,example:jj,examples:Aj,features:Mj,useCases:Bj,notes:Nj};function Uj(e,t){try{const n=new URL(e,window.location.href),o=n.host,r=n.searchParams;return/images\.unsplash\.com$/i.test(o)||/img\d+\.360buyimg\.com$/i.test(o)?(r.set("w",String(t)),r.set("auto","format"),r.set("fit","crop"),n.search=r.toString(),n.toString()):((!n.search||n.search==="")&&(n.search=`?w=${t}&auto=format&fit=crop`),n.toString())}catch{return e}}function Wj(e={}){const{enabled:t=!0,deviceMemoryThreshold:n=4,preferOnMobile:o=!0,lowWidth:r=640,abortOnLeave:a=!0}=e,i=s=>{var d,p,h;const l=Number(((d=typeof navigator<"u"?navigator:void 0)==null?void 0:d.deviceMemory)||8),c=((p=s.deviceInfo)==null?void 0:p.type)==="mobile",u=!!((h=s.networkInfo)!=null&&h.saveData);return l&&l<=n||o&&c||u};return{name:"memory-pressure-abort",version:"2.0.0",config:e,hooks:{onLoad:s=>{if(t&&i(s))return Uj(s.src,r)},onLeaveViewport:s=>{var c;if(!t||!a)return;const l=s.imageState;if(l&&l.isLoading)try{(c=s.reset)==null||c.call(s)}catch{}}}}}const Vj="MemoryPressureAbortPlugin",Hj="内存压力降级 + 离开中止（v2 真实实现）：低内存 / 移动端 / 省流时把图片重写为低清版本；离开视口且仍在加载时，调用 context.reset() 真正取消在途元素加载，回收内存。",Gj="2.0.0",qj=["loading","加载策略","降质","中止","低端设备"],Qj=[{name:"enabled",type:"boolean",default:"true",description:"是否启用"},{name:"deviceMemoryThreshold",type:"number",default:"4",description:"设备内存 ≤ 该阈值(GB)时启用降质"},{name:"preferOnMobile",type:"boolean",default:"true",description:"移动端或省流模式时强制启用降质"},{name:"lowWidth",type:"number",default:"640",description:"重写到的低清晰度宽度参数"},{name:"abortOnLeave",type:"boolean",default:"true",description:"离开视口且仍在加载时，是否中止在途加载（context.reset）"}],Kj=`import { LazyLoadImageCore, createMemoryPressureAbortPlugin, withPlugins } from "vane-lazy-image";

const LazyImage = withPlugins(LazyLoadImageCore, [
  // 命中压力条件时降质；用户滑走仍在加载的图会被中止
  createMemoryPressureAbortPlugin({ lowWidth: 480 }),
]);

<LazyImage src="https://picsum.photos/seed/mem/1200/800" alt="内存压力降级示例" />`,Yj=[{name:"默认降级 + 离开中止",description:"低内存/移动端/省流命中即低清；离开视口且在加载中的图会被 context.reset 取消。",src:"https://picsum.photos/seed/mem/1200/800",config:{}},{name:"激进降质",description:"更低宽度 + 移动端强制降质。",src:"https://picsum.photos/seed/mem-aggressive/1200/800",config:{lowWidth:320,deviceMemoryThreshold:8,preferOnMobile:!0}},{name:"仅降质不中止",description:"abortOnLeave=false，只做低清重写，不在离开时取消加载。",src:"https://picsum.photos/seed/mem-noabort/1200/800",config:{abortOnLeave:!1}}],Xj=["三条件任一即触发低清重写（onLoad 返回改写 URL）","unsplash / 360buy 优化 w 参数；通用源附加 ?w&auto=format&fit=crop","离开视口且在加载 → context.reset() 真正取消元素在途加载","abortOnLeave 可开关"],Zj=["低端设备防 OOM（降质）","快速滑动列表回收在途请求（中止）","弱网 / 省流节省流量"],Jj=["中止通过 context.reset() 移除 <img> 元素来取消其下载，是图片元素层面的真实中止；若使用 FetchLoaderPlugin，可在 fetch 层进一步中断。","降质判定依赖 navigator.deviceMemory 与 deviceInfo.type。"],eA={name:Vj,description:Hj,since:Gj,tags:qj,config:Qj,example:Kj,examples:Yj,features:Xj,useCases:Zj,notes:Jj};function tA(e,t,n="anonymous"){if(!(typeof document>"u"))try{const o=`lli-preload-${t}-${e}`;if(document.getElementById(o))return;const r=document.createElement("link");r.id=o,r.rel="preload",r.setAttribute("as",t),r.href=e,n&&r.setAttribute("crossorigin",n),document.head.appendChild(r)}catch{}}function nA(e,t,n){const o=[],r=e.match(/(\d+)(?=[^\d]*$)/)||e.match(/(\d+)(?=[^\d]*[)\s]?$)/);if(!r)return o;const a=r[0];let i=parseInt(a,10);if(Number.isNaN(i))return o;const s=a.length;for(let l=1;l<=n&&(i=t==="increment"?i+l:i-l,!(i<0));l++){const c=e.replace(a,String(i).padStart(s,"0"));c!==e&&o.push(c)}return o}function oA(e={}){const{model:t="heuristic",strategy:n="increment",predict:o,maxPreload:r=3,as:a="image",crossOrigin:i="anonymous"}=e;return{name:"predictive-loading",version:"2.0.0",config:e,hooks:{onMount:s=>{try{(o?Promise.resolve(o(s)):Promise.resolve(nA(s.src,n,r))).then(l=>{(Array.isArray(l)?l.slice(0,r):[]).forEach(c=>tA(c,a,i))}).catch(()=>{})}catch{}}}}}const rA="PredictiveLoadingPlugin",aA='预测性预加载（v2 真实实现）：未提供 predict 时，内置启发式按 URL 末尾数字段递增/递减派生「下一张」并注入 <link rel="preload"> 预取；也可传入 predict 自定义预测目标。',iA="2.0.0",sA=["loading","加载策略","预取"],lA=[{name:"model",type:'"heuristic" | "ml"',default:'"heuristic"',description:"预测模型；ml 当前同样走启发式（真正模型由 predict 提供）"},{name:"strategy",type:'"increment" | "decrement"',default:'"increment"',description:"内置启发式：派生方向（递增/递减 URL 末尾数字段）"},{name:"predict",type:"(context) => string[] | Promise<string[]>",default:"未设置（用内置启发式）",description:"自定义预测：返回需要预加载的图片链接列表，优先级高于内置启发式"},{name:"maxPreload",type:"number",default:"3",description:"单次最多预取数量"},{name:"as",type:'"image" | "fetch"',default:'"image"',description:"preload 资源类型"},{name:"crossOrigin",type:'"anonymous" | "use-credentials" | null',default:'"anonymous"',description:"跨域策略"}],cA=`const LazyImage = withPlugins(LazyLoadImageCore, [
  // 无 predict：内置启发式按 URL 末尾数字递增预取下 3 张
  createPredictiveLoadingPlugin({ model: "heuristic", strategy: "increment", maxPreload: 3 }),
]);

// 例：src=.../id/1015/ 会预取 .../id/1016/、1017/、1018/
<LazyImage src="https://picsum.photos/id/1015/500/300" alt="预测预加载示例" />;`,uA=[{name:"内置启发式递增",description:"按 URL 末尾数字递增派生下 3 张并预取（如相册下一页）。",src:"https://picsum.photos/id/1015/500/300",config:{model:"heuristic",strategy:"increment",maxPreload:3}},{name:"内置启发式递减",description:"递减派生上一张方向预取。",src:"https://picsum.photos/id/1020/500/300",config:{strategy:"decrement",maxPreload:3}},{name:"自定义预测",description:"用业务上下文决定预加载目标，限制为 3 张。",src:"https://picsum.photos/id/1018/500/300",config:{maxPreload:3}}],dA=["内置启发式真实派生「下一张」并注入 preload（非空头）","predict 自定义预测优先级更高","strategy 递增/递减可选","maxPreload 限制数量，相同 href 不重复注入"],pA=["相册 / 轮播：预加载下一张，切换无白屏","详情页：预加载相关推荐图"],mA=["仅注入 preload 提示，实际加载仍由浏览器调度；preload 在 Network 面板可见（见 HoverPrefetch 同类展示）。","URL 中无数字段时启发式无候选，可改用 predict 显式给出。"],gA={name:rA,description:aA,since:iA,tags:sA,config:lA,example:cA,examples:uA,features:dA,useCases:pA,notes:mA};function fA(e={}){const{priority:t="medium"}=e;return{name:"priority-loading",version:"1.0.0",config:e,hooks:{transformProps:n=>{switch(t){case"high":return{...n,loading:"eager",rootMargin:"0px"};case"low":return{...n,loading:"lazy",rootMargin:n.rootMargin??"400px"};case"medium":default:return{...n,loading:"lazy",rootMargin:n.rootMargin??"200px"}}}}}}const hA="PriorityLoadingPlugin",yA="优先级加载：按 high/medium/low 切换 eager/lazy 与 rootMargin。",vA="2.0.0",bA=["loading","加载策略"],wA=[{name:"priority",type:'"high" | "medium" | "low"',default:'"medium"',description:"加载优先级：high→loading=eager / low→lazy+大 rootMargin / medium→lazy"}],xA=`// LCP / 首屏主图：立即加载
const HeroImage = withPlugins(LazyLoadImageCore, [
  createPriorityLoadingPlugin({ priority: "high" }),
]);

// 折叠区/长列表底部图：延后加载
const BelowImage = withPlugins(LazyLoadImageCore, [
  createPriorityLoadingPlugin({ priority: "low" }),
]);`,PA=[{name:"首屏 LCP 图（high）",description:"关键图立即 eager 加载，缩短最大内容绘制时间。",config:{priority:"high"}},{name:"折叠区图（low）",description:"非首屏图延后加载，rootMargin 更大，滚动临近才加载。",config:{priority:"low"}}],$A=["high → loading=eager、rootMargin=0，立即加载","low → loading=lazy、rootMargin 更大，更晚加载","medium → 默认 lazy + 适中 rootMargin（约 200px）"],SA=["把 LCP / 首屏主图设为 high","把长列表底部、折叠内容图设为 low，错峰加载"],CA=["仅调整 loading 与 rootMargin，不会阻塞其它插件生效。","与 ScrollIdle、ConcurrencyControl 叠加时可协同控制加载节奏。","rootMargin 会被合并进核心的 IntersectionObserver 参数。"],kA={name:hA,description:yA,since:vA,tags:bA,config:wA,example:xA,examples:PA,features:$A,useCases:SA,notes:CA};function Wu(e,t){try{const n=Math.max(1,Math.min(100,Math.round(t)));e.searchParams.set("q",String(n))}catch{}}function LA(){const e=typeof navigator<"u"?navigator:void 0;return(e==null?void 0:e.connection)||(e==null?void 0:e.mozConnection)||(e==null?void 0:e.webkitConnection)}function Vu(e){const t=Ra();if(e.overrideSaveData??(t==null?void 0:t.saveData))return e.saveDataQuality??35;const n=e.overrideEffectiveType??(t==null?void 0:t.effectiveType)??"4g";return n==="slow-2g"||n==="2g"?e.lowQ??40:n==="3g"?e.lowQ??55:e.highQ??80}function IA(e={}){return{name:"adaptive-quality",version:"1.0.0",config:e,hooks:{transformProps:t=>{const n={...t};try{const o=new URL(n.src,typeof window<"u"?window.location.origin:"http://localhost"),r=Vu(e);Wu(o,r),n.src=o.toString()}catch{}return n},onMount:t=>{var a,i,s,l;const{mode:n="once"}=e;if(n!=="realtime")return;const o=LA();if(!o)return;const r=c=>{var u;try{const d=(u=t.imageRef)==null?void 0:u.current,p=(d==null?void 0:d.src)||t.src,h=new URL(p,typeof window<"u"?window.location.origin:"http://localhost"),v=Vu(e);Wu(h,v),d?d.src=h.toString():t.src=h.toString()}catch{}};try{if(typeof o.addEventListener=="function")o.addEventListener("change",r),(a=t.sharedData)==null||a.set("aqp-handler",r),(i=t.sharedData)==null||i.set("aqp-conn",o);else if("onchange"in o){const c=o.onchange;o.onchange=u=>{try{typeof c=="function"&&c.call(o,u)}catch{}r(u)},(s=t.sharedData)==null||s.set("aqp-conn",o),(l=t.sharedData)==null||l.set("aqp-onchange-patched",!0)}}catch{}return()=>{var c,u,d;try{const p=(c=t.sharedData)==null?void 0:c.get("aqp-conn"),h=(u=t.sharedData)==null?void 0:u.get("aqp-handler");if(p&&h&&typeof p.removeEventListener=="function")p.removeEventListener("change",h);else if(p&&((d=t.sharedData)!=null&&d.get("aqp-onchange-patched")))try{p.onchange=null}catch{}}catch{}}}}}}const _A="AdaptiveQualityPlugin",EA="自适应画质：根据网络类型（effectiveType）与省流模式（saveData）动态调整图片质量参数，弱网/省流自动降质，支持 realtime 实时监听。",RA="2.0.0",zA=["other","网络","性能","省流量"],OA=[{name:"lowQ",type:"number",default:"40(2g/3g)",description:"低速网络质量值(1~100)"},{name:"highQ",type:"number",default:"80(4g)",description:"高速网络质量值(1~100)"},{name:"saveDataQuality",type:"number",default:"35",description:"省流模式质量值(1~100)"},{name:"overrideEffectiveType",type:'"4g" | "3g" | "2g" | "slow-2g"',default:"undefined",description:"Demo/测试覆盖网络类型"},{name:"overrideSaveData",type:"boolean",default:"undefined",description:"Demo/测试覆盖省流开关"},{name:"mode",type:'"once" | "realtime"',default:'"once"',description:"once 仅初始一次 / realtime 监听变化"}],DA=`const AqImage = withPlugins(LazyLoadImageCore, [
  createAdaptiveQualityPlugin({ lowQ: 45, highQ: 85, mode: "realtime" }),
]);

<AqImage src="https://picsum.photos/id/1015/500/300" alt="自适应画质示例" />;`,TA=[{name:"默认一次性调速",description:"初始按网络设置质量，加载一次。",src:"https://picsum.photos/id/1015/500/300",config:{mode:"once"}},{name:"实时监听网络",description:"mode=realtime，网络变化时自动重新计算质量。",src:"https://picsum.photos/id/1021/500/300",config:{mode:"realtime"}},{name:"模拟弱网降质",description:"overrideEffectiveType=2g，演示低速下自动降质。",src:"https://picsum.photos/id/1026/500/300",config:{overrideEffectiveType:"2g",overrideSaveData:!0}}],jA=["按网络类型调速","省流模式降质","realtime 实时监听","手动覆盖（Demo）","质量参数可配"],AA=["弱网体验优化","流量节省","全球 CDN 适配","移动端画质策略"],MA=["overrideEffectiveType / overrideSaveData 仅用于 Demo 测试覆盖真实网络信息；质量参数通过 URL ?q= 注入，适用于支持该参数的图床。"],BA={name:_A,description:EA,since:RA,tags:zA,config:OA,example:DA,examples:TA,features:jA,useCases:AA,notes:MA};function NA(e){try{return new URL(e,typeof window<"u"?window.location.origin:"http://localhost").hostname}catch{return null}}function Hu(e,t,n){try{const o=new URL(e,typeof window<"u"?window.location.origin:"http://localhost");return o.searchParams.set(t,n),o.toString()}catch{const o=e.includes("?")?"&":"?";return`${e}${o}${encodeURIComponent(t)}=${encodeURIComponent(n)}`}}function FA(e={}){const{allowedDomains:t,checkReferer:n=!1,generateToken:o,tokenParam:r="token"}=e;return{name:"anti-hotlink",version:"1.0.0",config:e,hooks:{transformProps:a=>{if(Array.isArray(t)&&t.length>0){const l=NA(a.src);if(!l||!t.includes(l))return a}if(n&&typeof document<"u"&&!document.referrer){const l=Hu(a.src,"ref","direct");return{...a,src:l}}const i=o==null?void 0:o(a.src);if(!i)return a;const s=Hu(a.src,r,i);return{...a,src:s}}}}}const UA="AntiHotlinkPlugin",WA="防盗链：为图片 URL 追加动态签名 token 或 referer 标记，配合域名白名单与 referer 校验，防止资源被第三方直链盗用。",VA="2.0.0",HA=["network","网络","防盗链","签名"],GA=[{name:"allowedDomains",type:"string[]",description:"域名白名单；仅放行列表内域，其余源原样通过"},{name:"checkReferer",type:"boolean",default:"false",description:"无 referrer 时附加 ref=direct 标记（仅浏览器环境有效）"},{name:"generateToken",type:"(src: string) => string | undefined",description:"为 URL 生成签名 token（函数型，仅顶层示例展示）"},{name:"tokenParam",type:"string",default:'"token"',description:"追加到查询参数的键名"}],qA=`import { LazyLoadImageCore, createAntiHotlinkPlugin, withPlugins } from "vane-lazy-image";

const LazyImage = withPlugins(LazyLoadImageCore, [
  createAntiHotlinkPlugin({
    generateToken: (src) => signSrc(src),
    tokenParam: "sig",
    allowedDomains: ["images.example.com"],
  }),
]);

<LazyImage src="https://images.example.com/photo.jpg" alt="防盗链示例" />`,QA=[{name:"白名单 + referer 校验",description:"仅放行 picsum.photos；无 referer 时附加 ref=direct 标记。",src:"https://picsum.photos/seed/hotlink/800/600",config:{allowedDomains:["picsum.photos"],checkReferer:!0}},{name:"仅域名白名单放行",description:"命中白名单则原样通过，否则不注入任何参数。",src:"https://picsum.photos/seed/hotlink-2/800/600",config:{allowedDomains:["picsum.photos"]}}],KA=["generateToken 为 URL 追加签名参数，防直链盗用","allowedDomains 白名单：仅放行指定域，其余原样通过","checkReferer：无 referrer 时附加 ref=direct 标记","通用参数追加兜底（无 URL 对象时拼接 query）"],YA=["OSS / 云存储等需签名才能访问的图片","限制仅本站 referer 可加载"],XA=["generateToken 为函数型，无法进入静态预览配置，仅顶层示例展示","allowedDomains 为空时对所有源注入 token","checkReferer 仅在浏览器环境有效"],ZA={name:UA,description:WA,since:VA,tags:HA,config:GA,example:qA,examples:QA,features:KA,useCases:YA,notes:XA};function JA(e,t,n){try{e.searchParams.get(t)||e.searchParams.set(t,n)}catch{}}function e8(e={}){return{name:"auth",version:"1.0.0",config:e,hooks:{transformProps:t=>{const n={...t};try{const o=typeof e.token=="function"?e.token():e.token;if(o){const r=new URL(n.src,typeof window<"u"?window.location.origin:"http://localhost");JA(r,e.tokenParam??"token",o),n.src=r.toString()}e.crossOrigin&&(n.crossOrigin=e.crossOrigin),e.referrerPolicy&&(n.referrerPolicy=e.referrerPolicy)}catch{}return n}}}}const t8="AuthPlugin",n8="鉴权：为私有图片 URL 追加访问凭证 token（查询参数），并可配置 crossOrigin 与 referrerPolicy，满足需登录态才能访问的图片源鉴权需求。",o8="2.0.0",r8=["network","网络","鉴权","私有资源"],a8=[{name:"token",type:"string | (() => string | undefined)",description:"访问凭证；支持函数动态获取（函数型仅顶层示例展示）"},{name:"tokenParam",type:"string",description:"追加到查询参数的键名"},{name:"crossOrigin",type:'"anonymous" | "use-credentials"',description:"img 的 crossOrigin 属性"},{name:"referrerPolicy",type:"React.HTMLAttributeReferrerPolicy",description:"img 的 referrerPolicy 属性"}],i8=`import { LazyLoadImageCore, createAuthPlugin, withPlugins } from "vane-lazy-image";

const LazyImage = withPlugins(LazyLoadImageCore, [
  createAuthPlugin({
    token: () => getAccessToken(),
    tokenParam: "token",
    crossOrigin: "anonymous",
  }),
]);

<LazyImage src="https://private.example.com/photo.jpg" alt="鉴权示例" />`,s8=[{name:"静态 token",description:"为图片 URL 追加固定访问凭证参数。",src:"https://picsum.photos/seed/auth/800/600",config:{token:"sk-demo-123",tokenParam:"token"}},{name:"跨域 + 无 referrer",description:"追加凭证的同时配置跨域与 referrer 策略。",src:"https://picsum.photos/seed/auth-2/800/600",config:{token:"sk-demo-123",crossOrigin:"anonymous",referrerPolicy:"no-referrer"}}],l8=["为图片 URL 追加 token 查询参数完成鉴权","支持 crossOrigin / referrerPolicy 跨域鉴权配置","token 支持函数动态获取（如刷新令牌）"],c8=["需登录态才能访问的私有图片 / 云存储","带鉴权的用户头像 / 相册"],u8=["token 函数型仅顶层示例展示；静态字符串可直接用于静态预览","与 AntiHotlink 区别：Auth 注入访问凭证，AntiHotlink 注入防盗链签名，二者可叠加","tokenParam 已存在则不重复追加"],d8={name:t8,description:n8,since:o8,tags:r8,config:a8,example:i8,examples:s8,features:l8,useCases:c8,notes:u8},Nr="cdn-attempts",Ei="cdn-index";function p8(e,t){try{const n=new URL(e,typeof window<"u"?window.location.origin:"http://localhost"),o=new URL(t);return n.protocol=o.protocol,n.hostname=o.hostname,n.port=o.port,n.toString()}catch{return e}}function m8(e){const t=e.cdnBases||[],n=Math.max(1,e.maxAttempts??t.length+1),o=e.cacheBust??!1;return{name:"cdn-fallback",version:"1.1.0",description:"原始地址加载失败后按顺序回退到 CDN，带尝试次数上限（P0-3）",config:e,hooks:{onLoadError:r=>{var l,c,u,d;if(!t.length)return!1;const a=Number(((l=r.sharedData)==null?void 0:l.get(Nr))??0)+1;try{(c=r.sharedData)==null||c.set(Nr,a)}catch{}if(a>=n)return!1;const i=(a-1)%t.length;try{(u=r.sharedData)==null||u.set(Ei,i)}catch{}const s=(d=r.imageRef)==null?void 0:d.current;if(s){const p=p8(r.src,t[i]),h=o?`${p}${p.includes("?")?"&":"?"}cdnFallback=${a}`:p;try{s.src=h}catch{}}return!0},onSrcChange:(r,a)=>{var i,s;try{(i=r.sharedData)==null||i.set(Nr,0),(s=r.sharedData)==null||s.set(Ei,0)}catch{}},onUnmount:r=>{var a,i;try{(a=r.sharedData)==null||a.set(Nr,0),(i=r.sharedData)==null||i.set(Ei,0)}catch{}}}}}const g8="CDNFallbackPlugin",f8="CDN 回退：主 CDN 域名加载失败时，按序切换备用 CDN 域名（保留路径与查询参数），实现跨厂商容灾，避免单点故障导致破图。",h8="2.0.0",y8=["network","网络","CDN","容灾"],v8=[{name:"cdnBases",type:"string[]",description:'备用 CDN 基址列表，首个即主用 CDN。e.g. ["https://cdn1.example.com", "https://cdn2.example.com"]'}],b8=`import { LazyLoadImageCore, createCDNFallbackPlugin, withPlugins } from "vane-lazy-image";

const LazyImage = withPlugins(LazyLoadImageCore, [
  createCDNFallbackPlugin({
    cdnBases: ["https://cdn1.example.com", "https://cdn2.example.com"],
  }),
]);

<LazyImage src="https://cdn0.example.com/photo.jpg" alt="CDN 回退示例" />`,w8=[{name:"多 CDN 回退",description:"主用 picsum.photos 命中；真实故障场景填入备用域名可自动切换（演示用同源避免 404）。",src:"https://picsum.photos/seed/cdn/800/600",config:{cdnBases:["https://picsum.photos","https://fastly.picsum.photos"]}}],x8=["onLoad 用 cdnBases[0] 作为主用 CDN 重写 host","onLoadError 按序切换下一个 CDN 并改写 img.src 触发重试","切换时保留路径 / 查询参数，附加 cdnFallback 缓存破坏参数"],P8=["多活 CDN、跨云厂商容灾","主源站故障时无缝切到备用源"],$8=["cdnBases 为必填，首个即主用 CDN","演示用同源 CDN 避免 404；生产请填入真实备用域名，主域失败会自动切换","切换逻辑替换协议 / host / port，路径与 query 不变"],S8={name:g8,description:f8,since:h8,tags:y8,config:v8,example:b8,examples:w8,features:x8,useCases:P8,notes:$8};function C8(e,t){try{const n=new URL(e,typeof window<"u"?window.location.origin:"http://localhost");return Object.entries(t).forEach(([o,r])=>{r!=null&&n.searchParams.set(o,String(r))}),n.toString()}catch{const n=Object.keys(t).filter(a=>t[a]!==void 0&&t[a]!==null);if(n.length===0)return e;const o=e.includes("?")?"&":"?",r=n.map(a=>`${encodeURIComponent(a)}=${encodeURIComponent(String(t[a]))}`).join("&");return`${e}${o}${r}`}}function k8(e={}){const{enabled:t=!0,maxWidth:n=1920,quality:o=.85,format:r="auto",widthParam:a="w",qualityParam:i="q",formatParam:s="format"}=e;return{name:"image-optimization",version:"1.0.0",config:e,hooks:{transformProps:l=>{if(!t)return l;try{const c=typeof window<"u"?Math.max(1,window.devicePixelRatio||1):1,u=typeof window<"u"&&window.innerWidth||n,d=Math.min(Math.round(u*c),n),p=C8(l.src,{[a]:d,[i]:Math.max(0,Math.min(1,o)),[s]:r});return{...l,src:p}}catch{return l}}}}}const L8="ImageOptimizationPlugin",I8="图片优化：自动追加宽度/质量/格式查询参数。",_8="2.0.0",E8=["network","网络"],R8=[{name:"enabled",type:"boolean",default:"true",description:"是否启用 URL 改写优化"},{name:"maxWidth",type:"number",default:"1920",description:"最大宽度（像素）"},{name:"quality",type:"number",default:"0.85",description:"0..1"},{name:"format",type:'"auto" | "webp" | "jpg" | "png"',default:'"auto"',description:"目标格式；auto 交给浏览器 / CDN 协商"},{name:"widthParam",type:"string",default:'"w"',description:'例如 "w"'},{name:"qualityParam",type:"string",default:'"q"',description:'例如 "q"'},{name:"formatParam",type:"string",default:'"format"',description:'例如 "format"'}],z8=`const LazyImage = withPlugins(LazyLoadImageCore, [
  createImageOptimizationPlugin({
    maxWidth: 1200,
    quality: 0.8,
    format: "webp",
    widthParam: "w",
    qualityParam: "q",
    formatParam: "format",
  }),
]);`,O8=[{name:"自动 webp + 约束宽度",description:"自动选择最优格式（按 Accept 协商 webp），并把宽度限制在 1200。",config:{maxWidth:1200,quality:.8,format:"webp"}},{name:"固定 jpg 中质量",description:"统一输出 jpg、质量 0.7，适合对兼容性要求较高的场景。",config:{maxWidth:800,quality:.7,format:"jpg"}}],D8=["自动追加宽度 / 质量 / 格式查询参数","format=auto 按 Accept 头协商 webp","参数名可配置以适配不同 CDN / 图片网关"],T8=["任意源图统一走优化网关（imgix / 云存储样式）","响应式不同屏宽下发不同尺寸"],j8=["需图片服务支持对应参数，否则仅作为普通查询参数透传。","与 DataSaver 叠加时，省流质量会进一步覆盖此处质量。","format=auto 依赖浏览器 Accept 头，无需手动指定。"],A8={name:L8,description:I8,since:_8,tags:E8,config:R8,example:z8,examples:O8,features:D8,useCases:T8,notes:j8};function Gu(e){try{return new URL(e,typeof window<"u"?window.location.origin:"http://localhost").hostname}catch{return null}}async function M8(e,t){try{await fetch(e,{method:"POST",headers:{"Content-Type":"application/json"},body:JSON.stringify(t),keepalive:!0})}catch{}}const Ri=new Map,B8=100;function Fr(e,t,n){const o=`${t}:${n.src||""}`,r=Date.now(),a=Ri.get(o)||0;if(!(r-a<B8))if(Ri.set(o,r),setTimeout(()=>{Ri.delete(o)},1e3),typeof e.report=="function")try{e.report(t,n)}catch{}else if(e.reportEndpoint)M8(e.reportEndpoint,{event:t,...n});else try{console.debug("[LLI][net]",t,n)}catch{}}function N8(e={}){return{name:"network-analytics",version:"1.0.0",config:e,hooks:{onMount:t=>{Fr(e,"mount",{src:t.src,time:Date.now()})},onLoadSuccess:(t,n)=>{const o=e.trackCDN?Gu(t.src):null;Fr(e,"load-success",{src:t.src,displaySrc:n,host:o,time:Date.now()})},onLoadError:(t,n)=>{const o=e.trackCDN?Gu(t.src):null,r=n instanceof Error?n.message:String(n||"unknown");return Fr(e,"load-error",{src:t.src,message:r,host:o,time:Date.now()}),!1},onUnmount:t=>{Fr(e,"unmount",{src:t.src,time:Date.now()})}}}}const F8="NetworkAnalyticsPlugin",U8="网络分析：上报加载耗时、成功率与 CDN 分布。",W8="2.0.0",V8=["network","网络"],H8=[{name:"reportEndpoint",type:"string",description:"上报地址（POST JSON）；留空则只在本地统计"},{name:"report",type:"(event: string, data: Record<string, any>) => void",description:"自定义上报函数（若提供则优先使用）"},{name:"trackCDN",type:"boolean",description:"是否按图片域名分组统计，便于比较不同 CDN 表现"}],G8=`const LazyImage = withPlugins(LazyLoadImageCore, [
  createNetworkAnalyticsPlugin({
    trackCDN: true,
    report: (event, data) => {
      // event: "load" | "error" | "cache-hit" ...
      // data:  { src, durationMs, host, cached }
      analytics.track(event, data);
    },
  }),
]);`,q8=[{name:"本地调试上报",description:"未配置端点时写入 console，便于本地观察耗时与命中情况。",config:{trackCDN:!0}},{name:"上报到监控端点",description:"把事件 POST 到监控服务（keepalive，不阻塞页面卸载）。",config:{reportEndpoint:"https://api.example.com/lli",trackCDN:!0}}],Q8=["上报加载耗时、成功率、CDN 分布","内置事件去重 + 100ms 防抖，避免刷屏","优先使用自定义 report 函数，其次 reportEndpoint"],K8=["线上图片加载性能监控","定位慢 CDN / 高失败率域名"],Y8=["不提供 reportEndpoint 也不提供 report 时，默认 console.debug 输出。","上报事件含 src / host / durationMs / cached 等字段。","report 为函数，需在“用法示例”中以代码传入；静态预览使用纯配置（无端点时仅本地打点）。"],X8={name:F8,description:U8,since:W8,tags:V8,config:H8,example:G8,examples:q8,features:Q8,useCases:K8,notes:Y8};function Z8(e,t){try{const n=new URL(e);return n.searchParams.set("w",String(t)),n.toString()}catch{return e.includes("?")?`${e}&w=${t}`:`${e}?w=${t}`}}function J8(e={}){const{enabled:t=!0,variants:n=[{width:400},{width:800},{width:1200}],buildSrc:o=Z8,sizes:r="(max-width: 800px) 100vw, 800px"}=e;return{name:"responsive",version:"1.0.0",config:e,hooks:{transformProps:a=>{if(!t||!a.src)return a;const i=n.map(s=>`${s.src??o(a.src,s.width)} ${s.width}w`);return{...a,srcSet:a.srcSet??i.join(", "),sizes:a.sizes??r}},onLoadSuccess:(a,i)=>{var u;if(!t||i.startsWith("blob:")||i.startsWith("data:"))return;const s=(u=a.imageRef)==null?void 0:u.current;if(!s)return;const l=a.src,c=n.map(d=>`${d.src??o(l,d.width)} ${d.width}w`);try{s.getAttribute("srcset")||s.setAttribute("srcset",c.join(", ")),s.getAttribute("sizes")||s.setAttribute("sizes",r)}catch{}}}}}const eM="ResponsivePlugin",tM="响应式图片：注入 srcset/sizes 多宽度资源，浏览器按视口选择最佳尺寸，兼顾清晰度与流量。",nM="2.0.0",oM=["a11y","可访问性","网络","响应式"],rM=[{name:"enabled",type:"boolean",default:"true",description:"是否启用响应式"},{name:"variants",type:"{ width: number; src?: string }[]",default:"[{400},{800},{1200}]",description:"宽度变体列表"},{name:"buildSrc",type:"(baseSrc, width) => string",default:"defaultBuildSrc（追加 ?w=）",description:"自定义链接生成（函数型，参见用法示例）"},{name:"sizes",type:"string",default:'"(max-width: 800px) 100vw, 800px"',description:"sizes 属性"}],aM=`const ResponsiveImage = withPlugins(LazyLoadImageCore, [
  createResponsivePlugin({
    variants: [{ width: 400 }, { width: 800 }, { width: 1200 }],
    sizes: "(max-width: 800px) 100vw, 800px",
    buildSrc: (base, w) => \`\${base}?w=\${w}\`,
  }),
]);

<ResponsiveImage src="https://picsum.photos/id/1015/500/300" alt="响应式示例" />;`,iM=[{name:"默认多宽度",description:"注入 400/800/1200 三档 srcset。",src:"https://picsum.photos/id/1015/500/300",config:{variants:[{width:400},{width:800},{width:1200}],sizes:"(max-width: 800px) 100vw, 800px"}},{name:"自定义尺寸档位",description:"仅 320/640 两档，适合轻量场景。",src:"https://picsum.photos/id/1021/500/300",config:{variants:[{width:320},{width:640}],sizes:"(max-width: 640px) 100vw, 640px"}},{name:"关闭响应式",description:"enabled=false 时不注入 srcset。",src:"https://picsum.photos/id/1026/500/300",config:{enabled:!1}}],sM=["srcset 多宽度","自定义 buildSrc","sizes 响应式","自动适配屏幕/Retina","可关闭"],lM=["响应式画廊","移动端流量优化","Retina 高清","CMS 图片"],cM=["buildSrc 为函数型配置，静态预览使用默认追加 ?w= 策略；自定义用法见用法示例。"],uM={name:eM,description:tM,since:nM,tags:oM,config:rM,example:aM,examples:iM,features:sM,useCases:lM,notes:cM};let zi=null;function dM(){return zi||(zi=new Promise(e=>{try{const t=document.createElement("canvas");t.width=1,t.height=1;const n=t.toDataURL("image/webp");e(typeof n=="string"&&n.indexOf("data:image/webp")===0)}catch{e(!1)}}),zi)}function pM(e,t){if(!t||t.length===0)return!0;try{const n=new URL(e);return t.some(o=>n.hostname.includes(o))}catch{return!1}}function mM(e,t){if(!t)return e;try{const n=new URL(e),[o,r]=t.split("=");return o&&n.searchParams.set(o,r??""),n.toString()}catch{return e.includes("?")?`${e}&${t}`:`${e}?${t}`}}function gM(e,t){const n=e.lastIndexOf(".");if(n<0)return e;const o=e.substring(n+1).toLowerCase();return t.includes(o)?`${e.substring(0,n)}.webp`:e}function fM(e={}){const{enabled:t=!0,rewrite:n,replaceExtensions:o=["jpg","jpeg","png"],appendQueryParam:r,onDomains:a,testSupport:i=!0}=e;return{name:"webp",version:"1.0.0",config:e,hooks:{onLoad:async s=>{var u,d;if(!t)return;const l=s.src;if(!pM(l,a)||i&&!await dM())return;let c;if(n)c=n(l,s);else{const p=gM(l,o);c=mM(p,r)}if(!(!c||c===l)){try{(u=s.sharedData)==null||u.set("webp:original",l),(d=s.sharedData)==null||d.set("webp:rewritten",c)}catch{}return c}},onLoadError:s=>{var d,p,h;const l=(d=s.sharedData)==null?void 0:d.get("webp:original"),c=(p=s.sharedData)==null?void 0:p.get("webp:rewritten"),u=(h=s.imageRef)==null?void 0:h.current;if(u&&l&&c&&u.src===c){try{u.src=l}catch{}return!0}return!1}}}}const hM="WebPPlugin",yM="WebP 优先：在支持 WebP 的环境中自动将图片重写为 .webp（或自定义链接），失败时回退原图，体积更小加载更快。",vM="2.0.0",bM=["other","网络","性能","WebP"],wM=[{name:"enabled",type:"boolean",default:"true",description:"是否启用"},{name:"rewrite",type:"(src, ctx) => string | undefined",default:"undefined",description:"自定义重写函数：返回 webp 链接"},{name:"replaceExtensions",type:"string[]",default:'["jpg", "jpeg", "png"]',description:"需替换为 .webp 的扩展名"},{name:"appendQueryParam",type:"string",default:"undefined",description:'追加的查询参数，如 "format=webp"'},{name:"onDomains",type:"string[]",default:"[]（不限制）",description:"限定生效域名"},{name:"testSupport",type:"boolean",default:"true",description:"运行前检测浏览器是否支持 webp"}],xM=`const WebPImage = withPlugins(LazyLoadImageCore, [
  createWebPPlugin({
    replaceExtensions: ["jpg", "jpeg", "png"],
    testSupport: true,
  }),
]);

<WebPImage src="https://example.com/photo.jpg" alt="WebP 示例" />;`,PM=[{name:"默认 WebP 优化",description:"对支持的图床自动重写（本示例用无扩展名 URL，不触发改写，仅展示配置）。",src:"https://picsum.photos/id/1015/500/300",config:{enabled:!0}},{name:"限定域名",description:"仅在指定域名生效，避免误改其它资源。",src:"https://picsum.photos/id/1021/500/300",config:{onDomains:["cdn.example.com"]}},{name:"跳过支持检测",description:"testSupport=false 直接尝试改写（需图床确实提供 webp）。",src:"https://picsum.photos/id/1026/500/300",config:{testSupport:!1}}],$M=["自动 WebP 改写","扩展名替换","查询参数追加","域名限定","支持检测","失败回退原图"],SM=["图片体积优化","现代浏览器加速","CDN WebP 支持","流量节省"],CM=["启用后若 webp 链接加载失败会自动回退到原图，不会白屏；示例中的 picsum 链接无扩展名，不会触发扩展名改写，可安全预览。"],kM={name:hM,description:yM,since:vM,tags:bM,config:wM,example:xM,examples:PM,features:$M,useCases:SM,notes:CM};function LM({context:e,cfg:t}){if(!t.showDot||t.hideWhenOut&&!e.isIntersecting)return null;const n=t.dotPosition??"bottom-right",o={position:"absolute",width:10,height:10,borderRadius:999,background:e.isIntersecting?"#28a745":"#6c757d",zIndex:10};return n.includes("top")?o.top=6:o.bottom=6,n.includes("left")?o.left=6:o.right=6,y.jsx("div",{style:o,title:e.isIntersecting?"in-view":"out-of-view"})}function IM(e={}){const{rootMargin:t,threshold:n,once:o,unobserveOnVisible:r,showDot:a,dotPosition:i,hideWhenOut:s}=e,l=o!==void 0?o:r;return{name:"viewport-aware",version:"2.0.0",config:e,hooks:{transformProps:c=>({...c,...t!==void 0?{rootMargin:t}:null,...n!==void 0?{threshold:n}:null,...l!==void 0?{unobserveOnVisible:l}:null}),renderOverlay:c=>y.jsx(LM,{context:c,cfg:{showDot:a,dotPosition:i,hideWhenOut:s}}),onEnterViewport:c=>{var u,d;try{(d=(u=c.imageRef)==null?void 0:u.current)==null||d.setAttribute("data-in-view","1")}catch{}},onLeaveViewport:c=>{var u,d;try{(d=(u=c.imageRef)==null?void 0:u.current)==null||d.setAttribute("data-in-view","0")}catch{}}}}}const _M="ViewportAwarePlugin",EM="视口感知加载：真正把 IntersectionObserver 的 rootMargin / threshold / once 下发给核心，控制图片「提前多少距离 / 多灵敏」才触发加载，并在四角显示绿/灰指示点辅助观察。",RM="2.0.0",zM=["viewport","视口与交互","懒加载"],OM=[{name:"rootMargin",type:"string",default:"未设置（沿用 Core 默认 0px）",description:'IO 边距，控制提前/延后触发。如 "200px" 表示进入视口前 200px 就开始加载（预加载），"-50px" 表示进入后再等 50px'},{name:"threshold",type:"number | number[]",default:"未设置",description:"IO 触发阈值（0~1），控制加载灵敏度"},{name:"once",type:"boolean",default:"true",description:"是否只加载一次：true=进入视口加载后停止观察（省资源）；false=持续观察"},{name:"unobserveOnVisible",type:"boolean",default:"由 once 推导",description:"显式下发，优先级高于 once"},{name:"showDot",type:"boolean",default:"false",description:"是否显示视口指示点（仅辅助观察，非核心能力）"},{name:"dotPosition",type:'"top-left" | "top-right" | "bottom-left" | "bottom-right"',default:'"bottom-right"',description:"指示点位置"},{name:"hideWhenOut",type:"boolean",default:"false",description:"离开视口时隐藏指示点"}],DM=`const ViewportImage = withPlugins(LazyLoadImageCore, [
  // 提前 200px 预加载，进入视口即就绪，滚动更顺滑
  createViewportAwarePlugin({ rootMargin: "200px", threshold: 0.01, showDot: true }),
]);

<ViewportImage src="https://picsum.photos/id/1015/500/300" alt="视口感知示例" />;`,TM=[{name:"提前预加载（rootMargin 200px）",description:"元素进入视口前 200px 就开始加载，滚到时图片已就绪，消除白屏。",src:"https://picsum.photos/id/1015/500/300",config:{rootMargin:"200px",threshold:.01,showDot:!0}},{name:"严格进入才加载（rootMargin 0px）",description:"默认行为：图片真正进入视口边缘才触发加载。",src:"https://picsum.photos/id/1024/500/300",config:{rootMargin:"0px",showDot:!0,dotPosition:"top-left"}},{name:"离开时隐藏指示点",description:"仅在进入视口显示绿点，离开后隐藏。",src:"https://picsum.photos/id/1035/500/300",config:{rootMargin:"100px",showDot:!0,dotPosition:"top-right",hideWhenOut:!0}}],jM=["rootMargin 真正下发，控制提前/延后加载距离","threshold 调节加载灵敏度","once / unobserveOnVisible 控制是否只加载一次","四角可选指示点（辅助观察真实 IO 状态）","onEnterViewport / onLeaveViewport 事件钩子"],AM=["长列表滚动预加载（rootMargin 提前量）","调试图片加载时机（配合指示点）","无限滚动 / 瀑布流场景","首屏 LCP 图片前的视口调度"],MM=["核心能力是 transformProps 把 IO 配置下发给核心，而不是装饰层；showDot 仅为观察辅助，可关闭。","once=false 仅表示持续观察，核心仍按加载状态只加载一次；如需「离开再回来重新加载」请配合 reload/reset 钩子。"],BM={name:_M,description:EM,since:RM,tags:zM,config:OM,example:DM,examples:TM,features:jM,useCases:AM,notes:MM};function NM(e={}){const{dwellMs:t=250,maxWaitMs:n=1500,onlyWhenIntersecting:o=!0,debug:r=!1}=e,a="viewport-dwell:inView";return{name:"viewport-dwell",version:"2.0.0",config:e,hooks:{onEnterViewport:i=>{var s;try{(s=i.sharedData)==null||s.set(a,!0)}catch{}if(r)try{console.debug("[ViewportDwell] enter",i.src)}catch{}},onLeaveViewport:i=>{var s;try{(s=i.sharedData)==null||s.set(a,!1)}catch{}if(r)try{console.debug("[ViewportDwell] leave",i.src)}catch{}},onBeforeLoad:async i=>{var c;const s=Date.now(),l=u=>new Promise(d=>setTimeout(d,u));if(r)try{console.debug("[ViewportDwell] gating",{src:i.src,dwellMs:t,maxWaitMs:n})}catch{}for(;;){const u=!!((c=i.sharedData)!=null&&c.get(a)),d=Date.now()-s;if(!u&&o&&d<n){if(r)try{console.debug("[ViewportDwell] aborted (left before dwell)",i.src)}catch{}return!1}if(d>=t){if(r)try{console.debug("[ViewportDwell] proceed",i.src,{elapsed:d})}catch{}return!0}await l(30)}},onUnmount:i=>{var s;try{(s=i.sharedData)==null||s.delete(a)}catch{}}}}}const FM="ViewportDwellPlugin",UM="视口驻留门控（v2 真实实现）：在真正加载前要求图片在视口内持续停留 dwellMs，快速划过（停留不足且离开）则中止加载；超过 maxWaitMs 后放行以防饥饿。",WM="2.0.0",VM=["viewport","视口与交互","驻留","省流量"],HM=[{name:"dwellMs",type:"number",default:"250",description:"需要在视口中持续停留的时间（毫秒），不足视为「划过」不加载"},{name:"maxWaitMs",type:"number",default:"1500",description:"最长等待时间（毫秒），超时仍允许加载以防饥饿"},{name:"onlyWhenIntersecting",type:"boolean",default:"true",description:"仅在进入视口时应用驻留判断；离开且未达上限则中止"},{name:"debug",type:"boolean",default:"false",description:"是否输出调试日志"}],GM=`const DwellImage = withPlugins(LazyLoadImageCore, [
  // 停留不足 250ms 的划过不加载，长留才加载
  createViewportDwellPlugin({ dwellMs: 250, maxWaitMs: 1500 }),
]);

<DwellImage src="https://picsum.photos/id/1015/500/300" alt="视口驻留示例" />;`,qM=[{name:"默认驻留（250ms）",description:"划过即中止，停留足够才加载，提升命中率。",src:"https://picsum.photos/id/1015/500/300",config:{dwellMs:250}},{name:"延长驻留时间",description:"400ms 驻留门槛，适合快速浏览场景。",src:"https://picsum.photos/id/1021/500/300",config:{dwellMs:400}},{name:"开启调试日志",description:"控制台输出驻留门控过程，便于调参。",src:"https://picsum.photos/id/1026/500/300",config:{dwellMs:250,debug:!0}}],QM=["门控钩子真正延迟/中止加载（非空头）","驻留时间不足且离开 → 中止加载","maxWaitMs 饥饿保护（超时放行）","仅在进入视口时生效","调试日志输出"],KM=["无限滚动信息流","防止快速滑动误加载","节省带宽与请求数","提升有效加载命中率"],YM=["v2 起通过引擎 onBeforeLoad 门控真实生效（旧版写在被引擎丢弃的钩子上，实际未拦截）；与 ViewportAware 的 rootMargin 搭配可进一步调优触发时机。"],XM={name:FM,description:UM,since:WM,tags:VM,config:HM,example:GM,examples:qM,features:QM,useCases:KM,notes:YM};function ZM(e,t="Image"){try{const n=new URL(e,typeof window<"u"?window.location.origin:"http://localhost").pathname.replace(/\/+$/,"");return`${t} • ${n}`}catch{return t}}function JM(e={}){return{name:"alt-text",version:"1.0.0",config:e,hooks:{transformProps:t=>{const n=t.alt;if(typeof n=="string"&&n.trim().length>0)return t;const o=e.derive?e.derive(t.src):ZM(t.src,e.prefix??"Image");return{...t,alt:o}}}}}const eB="AltTextPlugin",tB="替代文本：当图片未提供 alt 时，按前缀或自定义 derive 函数自动生成 alt，提升可访问性与 SEO；已有 alt 则不覆盖。",nB="2.0.0",oB=["a11y","可访问性","SEO"],rB=[{name:"derive",type:"(src: string) => string",default:"undefined",description:"自定义推导函数（函数型，参见用法示例）"},{name:"prefix",type:"string",default:'"Image"',description:'默认推导前缀（如 "Image"）'}],aB=`const AltImage = withPlugins(LazyLoadImageCore, [
  createAltTextPlugin({
    derive: (src) => \`图片 \${new URL(src).pathname}\`,
  }),
]);

// 不传 alt 时自动补全；传了 alt 则不覆盖
<AltImage src="https://picsum.photos/id/1015/500/300" alt="" />;`,iB=[{name:"默认前缀派生",description:"不传 alt，按 prefix 自动生成 alt。",src:"https://picsum.photos/id/1015/500/300",config:{prefix:"产品图"}},{name:"已有 alt 不覆盖",description:"传入 alt 时插件保留原值，不做替换。",src:"https://picsum.photos/id/1021/500/300",config:{prefix:"Image"}}],sB=["alt 缺失自动派生","自定义前缀","自定义 derive 函数","不覆盖已有 alt"],lB=["批量图片 alt 补全","SEO 优化","读屏适配","用户未填 alt 兜底"],cB=["derive 为函数型配置，静态预览仅支持 prefix；函数用法见用法示例。"],uB={name:eB,description:tB,since:nB,tags:oB,config:rB,example:aB,examples:iB,features:sB,useCases:lB,notes:cB};function dB(e={}){const{text:t="Error",position:n="top-right",bgColor:o="rgba(220, 53, 69, 0.85)",color:r="#fff",fontSize:a=12,padding:i="2px 6px",borderRadius:s=4,zIndex:l=100,persistAfterFallback:c=!0}=e;return{name:"error-badge",version:"1.0.0",config:e,hooks:{onLoadError:u=>{var d;try{(d=u.sharedData)==null||d.set("had-error",!0)}catch{}return!1},renderOverlay:u=>{var h;const d=!!((h=u.sharedData)!=null&&h.get("had-error"));if(!(u.imageState.isError||c&&d))return null;const p=typeof t=="function"?t(u):t;return y.jsx("div",{style:{position:"absolute",inset:0,pointerEvents:"none",zIndex:l},children:y.jsx("div",{style:{position:"absolute",background:o,color:r,fontSize:a,padding:i,borderRadius:s,lineHeight:1.2,fontWeight:600,...{"top-left":{top:8,left:8},"top-right":{top:8,right:8},"bottom-left":{bottom:8,left:8},"bottom-right":{bottom:8,right:8},center:{top:"50%",left:"50%",transform:"translate(-50%, -50%)"}}[n]},children:p})})}}}}const pB="ErrorBadgePlugin",mB="错误徽标：图片加载失败（或回退成功后）在指定角落显示错误徽标，便于在大批量图片列表中快速定位失败项。",gB="2.0.0",fB=["error","错误处理","错误反馈"],hB=[{name:"text",type:"string | ((context: LazyImageContext) => string)",default:'"Error"',description:"徽标文字；支持函数按 ctx 动态生成（函数型仅顶层示例展示）"},{name:"position",type:'"top-left" | "top-right" | "bottom-left" | "bottom-right" | "center"',default:'"top-right"',description:"徽标定位角落"},{name:"bgColor",type:"string",default:'"rgba(220, 53, 69, 0.85)"',description:"背景色"},{name:"color",type:"string",default:'"#fff"',description:"文字颜色"},{name:"fontSize",type:"number",default:"12",description:"字号(px)"},{name:"padding",type:"string",default:'"2px 6px"',description:"内边距"},{name:"borderRadius",type:"number",default:"4",description:"圆角(px)"},{name:"zIndex",type:"number",default:"100",description:"层级，默认较高避免被其它覆盖层遮挡"},{name:"persistAfterFallback",type:"boolean",default:"true",description:"回退图加载成功后是否仍显示徽标"}],yB=`import { LazyLoadImageCore, createErrorBadgePlugin, withPlugins } from "vane-lazy-image";

const LazyImage = withPlugins(LazyLoadImageCore, [
  createErrorBadgePlugin({
    text: (ctx) => \`加载失败: \${ctx.src}\`,
    position: "bottom-right",
    bgColor: "rgba(220,53,69,0.9)",
  }),
]);

// 故意触发失败以观察徽标
<LazyImage src="https://invalid.example.com/x.png" alt="错误徽标示例" />`,vB=[{name:"默认错误徽标",description:"加载失败后，在右上角显示红底 Error 徽标。",src:"https://invalid.example.com/error-badge.png",config:{}},{name:"自定义文案与位置",description:"底部右侧、深色背景 + 高亮文字的失败徽标。",src:"https://invalid.example.com/error-badge-2.png",config:{text:"图片加载失败",position:"bottom-right",bgColor:"rgba(0,0,0,0.7)",color:"#ffd166"}}],bB=["加载或回退失败后，在图片角落显示错误徽标","支持 5 种定位（四角 + 居中）与背景/文字/字号/圆角定制","persistAfterFallback：回退图已显示仍保留徽标，便于排查","通过 sharedData 标记 had-error，与 FallbackImage / RetryOnError / ErrorOverlay 联动"],wB=["图片墙 / 商品列表快速识别加载失败项","大批量图片加载健康度可视化"],xB=["text 支持函数型 (ctx) => string，但函数无法进入静态预览配置，仅顶层示例展示","默认 zIndex=100，高于多数覆盖层，避免被遮挡","与 ErrorOverlay 区别：徽标是轻量角标，覆盖层是整图遮罩"],PB={name:pB,description:mB,since:gB,tags:fB,config:hB,example:yB,examples:vB,features:bB,useCases:wB,notes:xB};function $B({context:e,cfg:t}){var u;const{imageState:n,imageRef:o,src:r}=e,a=!!((u=e.sharedData)!=null&&u.get("had-error")),i=n.isError||(t.persistAfterFallback??!0)&&a,s=S.useMemo(()=>(typeof t.message=="function"?t.message(e):t.message)??"加载失败",[t.message,e]);if(!i)return null;const l=()=>{const d=o==null?void 0:o.current;if(d)try{const p=`${r}${r.includes("?")?"&":"?"}retry=${Date.now()}`;d.src=p}catch{}},c={position:"absolute",inset:0,background:t.background??"rgba(220, 53, 69, 0.18)",color:t.color??"#b00020",zIndex:t.zIndex??10,display:"flex",alignItems:"center",justifyContent:"center",pointerEvents:"auto",gap:8,fontSize:13,fontWeight:500};return y.jsxs("div",{style:c,children:[y.jsx("span",{children:s}),t.showRetry!==!1&&y.jsxs("button",{onClick:l,style:{padding:"4px 8px",fontSize:12},children:[" ",t.retryText??"重试"," "]})]})}function SB(e={}){return{name:"error-overlay",version:"1.0.0",config:e,hooks:{renderOverlay:t=>y.jsx($B,{context:t,cfg:e})}}}const CB="ErrorOverlayPlugin",kB="错误覆盖层：图片加载失败时显示半透明遮罩与可选『重试』按钮，引导用户手动重试，适用于商品主图等关键图。",LB="2.0.0",IB=["error","错误处理","错误反馈","重试"],_B=[{name:"message",type:"string | ((context: LazyImageContext) => string)",default:"undefined（回退『加载失败』）",description:"遮罩提示文案；支持函数按 ctx 动态生成（函数型仅顶层示例展示）"},{name:"background",type:"string",default:'"rgba(220, 53, 69, 0.18)"',description:"遮罩背景色"},{name:"color",type:"string",default:'"#b00020"',description:"文字颜色"},{name:"zIndex",type:"number",default:"10",description:"遮罩层级"},{name:"showRetry",type:"boolean",default:"true",description:"是否显示重试按钮"},{name:"retryText",type:"string",default:'"重试"',description:"重试按钮文字"},{name:"persistAfterFallback",type:"boolean",default:"true",description:"回退图加载成功后是否仍显示遮罩"}],EB=`import { LazyLoadImageCore, createErrorOverlayPlugin, withPlugins } from "vane-lazy-image";

const LazyImage = withPlugins(LazyLoadImageCore, [
  createErrorOverlayPlugin({
    message: (ctx) => \`图片加载失败：\${ctx.src}\`,
    retryText: "点我重试",
  }),
]);

// 故意触发失败以观察遮罩与重试按钮
<LazyImage src="https://invalid.example.com/x.png" alt="错误覆盖层示例" />`,RB=[{name:"默认重试遮罩",description:"失败时整图遮罩 + 重试按钮（默认文案『重试』）。",src:"https://invalid.example.com/error-overlay.png",config:{retryText:"重试"}},{name:"自定义文案与配色",description:"深色遮罩 + 白色文字 + 自定义提示文案。",src:"https://invalid.example.com/error-overlay-2.png",config:{message:"图片暂时无法加载",background:"rgba(0,0,0,0.4)",color:"#fff"}}],zB=["失败时整图半透明遮罩 + 可选重试按钮","重试通过 cache-bust 参数（?retry=时间戳）重新请求，绕过缓存","自定义文案 / 背景 / 文字色 / 层级","persistAfterFallback：回退后仍显示遮罩"],OB=["商品主图 / 头图失败后友好提示并支持手动重试","与 RetryOnError 组合：自动重试 + 手动重试双保险"],DB=["showRetry 默认开启；message 支持函数型（仅顶层示例展示）","重试逻辑直接改写 img.src，不依赖外部状态","点击重试使用 Date.now() 做缓存破坏，确保重新发起请求"],TB={name:CB,description:kB,since:LB,tags:IB,config:_B,example:EB,examples:RB,features:zB,useCases:OB,notes:DB},Oi=new Map,jB=1e3;function AB(e,t){const n=t.src||"",o=Date.now(),r=Oi.get(n)||0;if(!(o-r<jB)){Oi.set(n,o);try{if(e.report&&e.report(t),e.reportEndpoint){const a=new AbortController,i=setTimeout(()=>a.abort(),5e3);fetch(e.reportEndpoint,{method:"POST",headers:{"Content-Type":"application/json"},body:JSON.stringify(t),keepalive:!0,signal:a.signal}).catch(()=>{}).finally(()=>{clearTimeout(i)})}}catch{}setTimeout(()=>{Oi.delete(n)},5e3)}}function MB(e={}){return{name:"error-tracking",version:"1.0.0",config:e,hooks:{onLoadError:(t,n)=>{var i,s,l;const o="error-count",r=Number(((i=t.sharedData)==null?void 0:i.get(o))??0)+1;(s=t.sharedData)==null||s.set(o,r);const a={src:t.src,message:n instanceof Error?n.message:String(n||"unknown"),stack:n instanceof Error?n.stack:void 0,time:Date.now(),network:t.networkInfo,device:t.deviceInfo,count:r};AB(e,a);try{(l=t.sharedData)==null||l.set("had-error",!0)}catch{}return!0},renderOverlay:t=>{var r;if(!e.showBadge)return null;const n=Number(((r=t.sharedData)==null?void 0:r.get("error-count"))??0);if(n<=0)return null;const o={position:"absolute",top:6,right:6,zIndex:10,fontSize:12,color:e.badgeColor??"#fff",background:e.badgeBg??"rgba(220,53,69,0.8)",padding:"2px 6px",borderRadius:4};return y.jsxs("div",{style:o,children:[e.badgeText??"Error"," × ",n]})}}}}const BB="ErrorTrackingPlugin",NB="错误追踪：在图片加载失败时上报失败详情（地址 / 错误信息 / 网络 / 设备 / 次数）到自定义函数或上报端点，并可显示错误计数角标，用于生产环境图片错误监控。",FB="2.0.0",UB=["error","错误处理","监控","可观测"],WB=[{name:"reportEndpoint",type:"string",description:"错误上报端点（POST JSON，带 5s 超时与 keepalive）"},{name:"report",type:"(payload: any) => void",description:"自定义上报函数（与端点二选一或并存）"},{name:"showBadge",type:"boolean",default:"false",description:"是否显示错误计数角标（需显式开启）"},{name:"badgeText",type:"string",default:'"Error"',description:"角标前缀文字"},{name:"badgeColor",type:"string",default:'"#fff"',description:"角标文字色"},{name:"badgeBg",type:"string",default:'"rgba(220,53,69,0.8)"',description:"角标背景色"}],VB=`import { LazyLoadImageCore, createErrorTrackingPlugin, withPlugins } from "vane-lazy-image";

const LazyImage = withPlugins(LazyLoadImageCore, [
  createErrorTrackingPlugin({
    report: (payload) => {
      console.warn("图片加载失败", payload);
    },
    showBadge: true,
  }),
]);

// 故意触发失败以观察上报与角标
<LazyImage src="https://invalid.example.com/x.png" alt="错误追踪示例" />`,HB=[{name:"错误计数角标",description:"开启角标，失败后右上角显示累计错误次数。",src:"https://invalid.example.com/error-tracking.png",config:{showBadge:!0,badgeText:"Err"}},{name:"端点上报",description:"失败后 POST 上报到采集端点（演示端点可能 404，代码已静默忽略）。",src:"https://invalid.example.com/error-tracking-2.png",config:{reportEndpoint:"/api/img-errors",showBadge:!0}}],GB=["onLoadError 采集 src / message / network / device / 累计次数","内置 1 秒防抖，避免高频重复上报","report 自定义函数 或 reportEndpoint 端点二选一 / 并存","可选角标显示错误次数"],qB=["生产环境图片错误率监控与告警","定位经常性失败的图片源 / CDN"],QB=["showBadge 默认 false，需显式开启才显示角标","端点上报带 5s 超时与 keepalive，页面卸载也能送达","report 为函数型，无法进入静态预览配置，仅顶层示例展示"],KB={name:BB,description:NB,since:FB,tags:UB,config:WB,example:VB,examples:HB,features:GB,useCases:qB,notes:QB};function In(e,...t){try{console.log(e,...t)}catch{}}function YB(e={}){const{enabled:t=!0,prefix:n="[LLI]"}=e;return{name:"event-logger",version:"1.0.0",config:e,hooks:{onBeforeLoad:o=>(t&&In(n,"before-load",o.src),!0),onLoadSuccess:(o,r)=>{t&&In(n,"load-success",{src:o.src,displaySrc:r})},onLoadError:(o,r)=>(t&&In(n,"load-error",{src:o.src,error:r}),!0),onEnterViewport:o=>{t&&In(n,"enter-viewport",o.src)},onLeaveViewport:o=>{t&&In(n,"leave-viewport",o.src)},onProgress:(o,r)=>{t&&In(n,"progress",r.percent)}}}}const XB="EventLoggerPlugin",ZB="事件日志：在控制台记录图片加载全生命周期事件（before-load / load-success / load-error / enter-viewport / leave-viewport / progress），便于调试与监控。",JB="2.0.0",eN=["other","监控","调试"],tN=[{name:"enabled",type:"boolean",default:"true",description:"是否启用日志"},{name:"prefix",type:"string",default:'"[LLI]"',description:"日志前缀，便于过滤"}],nN=`const LogImage = withPlugins(LazyLoadImageCore, [
  createEventLoggerPlugin({ prefix: "[IMG]" }),
]);

<LogImage src="https://picsum.photos/id/1015/500/300" alt="事件日志示例" />;`,oN=[{name:"默认日志",description:"使用默认 [LLI] 前缀记录全部事件。",src:"https://picsum.photos/id/1015/500/300",config:{enabled:!0}},{name:"自定义前缀",description:"改用 [IMG] 前缀，便于在控制台分组过滤。",src:"https://picsum.photos/id/1021/500/300",config:{prefix:"[IMG]"}},{name:"关闭日志",description:"enabled=false 时不输出任何日志。",src:"https://picsum.photos/id/1026/500/300",config:{enabled:!1}}],rN=["全生命周期事件记录","可自定义前缀","可关闭","零业务侵入"],aN=["调试加载流程","加载监控埋点","性能问题排查","教学演示"],iN=["仅用于开发/调试，生产环境建议按需关闭以避免控制台噪音。"],sN={name:XB,description:ZB,since:JB,tags:eN,config:tN,example:nN,examples:oN,features:rN,useCases:aN,notes:iN};function lN({context:e,cfg:t}){const n=e.performanceData||{duration:void 0};if(!t.showOverlay||!e.imageState.isLoaded)return null;const o=t.overlayPosition??"top-right",r={position:"absolute",zIndex:9,background:t.background??"rgba(0,0,0,0.45)",color:t.color??"#fff",fontSize:12,padding:"2px 6px",borderRadius:4};return o.includes("top")&&(r.top=6),o.includes("bottom")&&(r.bottom=6),o.includes("left")&&(r.left=6),o.includes("right")&&(r.right=6),y.jsxs("div",{style:r,children:["Loaded in ",Math.round(n.duration||0)," ms"]})}function cN(e={}){const t=new Set,n=100,o=new Map;return{name:"performance-monitor",version:"1.0.0",config:e,hooks:{onLoadSuccess:r=>{if(t.has(r.src))return;const a=Date.now(),i=o.get(r.src)||0;if(a-i<n)return;o.set(r.src,a),t.add(r.src);const s=r.performanceData||{duration:0},l={src:r.src,durationMs:Math.round(s.duration||0),network:r.networkInfo,device:r.deviceInfo};try{e.onReport&&e.onReport(l)}catch{}},renderOverlay:r=>y.jsx(lN,{context:r,cfg:e})}}}const uN="PerformanceMonitorPlugin",dN="性能监控：统计单张图片的加载耗时，可选在四角叠加实时展示耗时面板，并在加载完成时通过 onReport 上报。",pN="2.0.0",mN=["other","监控","性能"],gN=[{name:"showOverlay",type:"boolean",default:"true",description:"是否在图片上叠加耗时面板"},{name:"overlayPosition",type:'"top-left" | "top-right" | "bottom-left" | "bottom-right"',default:'"top-right"',description:"面板位置（四角）"},{name:"color",type:"string",default:'"#fff"',description:"文字色"},{name:"background",type:"string",default:'"rgba(0,0,0,0.45)"',description:"面板背景"},{name:"onReport",type:"(data: { src; durationMs; network?; device? }) => void",default:"undefined",description:"加载完成上报回调"}],fN=`const PerfImage = withPlugins(LazyLoadImageCore, [
  createPerformanceMonitorPlugin({
    overlayPosition: "bottom-left",
    onReport: (data) => console.log("perf", data),
  }),
]);

<PerfImage src="https://picsum.photos/id/1015/500/300" alt="性能监控示例" />;`,hN=[{name:"默认耗时面板",description:"右上角显示 Loaded in N ms。",src:"https://picsum.photos/id/1015/500/300",config:{showOverlay:!0}},{name:"左下角面板",description:"面板移动到左下角。",src:"https://picsum.photos/id/1021/500/300",config:{overlayPosition:"bottom-left"}},{name:"自定义配色",description:"蓝色背景 + 白字，突出展示。",src:"https://picsum.photos/id/1026/500/300",config:{background:"rgba(33,118,255,0.6)",color:"#fff"}}],yN=["加载耗时统计","四角面板可选","自定义配色","onReport 上报","防抖去重"],vN=["LCP/加载耗时测量","性能优化验证","监控告警","A/B 对比"],bN=["onReport 为函数型配置，静态预览仅展示面板；函数用法见用法示例。"],wN={name:uN,description:dN,since:pN,tags:mN,config:gN,example:fN,examples:hN,features:yN,useCases:vN,notes:bN};function xN(e={}){const{enabled:t=!0,showOverlay:n=!0,onReport:o}=e;return{name:"user-behavior",version:"1.0.0",config:e,hooks:{transformProps:r=>({...r,unobserveOnVisible:!1}),onMount:r=>{var a,i,s,l,c;if(t)try{(a=r.sharedData)==null||a.set("ub:clicks",0),(i=r.sharedData)==null||i.set("ub:dwell",0),(s=r.sharedData)==null||s.set("ub:enters",0),(l=r.sharedData)==null||l.set("ub:leaves",0),(c=r.sharedData)==null||c.set("ub:enterTs",0)}catch{}},onLoadSuccess:r=>{var s;if(!t)return;const a=(s=r.imageRef)==null?void 0:s.current;if(!a)return;a.__lliUBClicks=a.__lliUBClicks||0,a.__lliUBEnterTs=a.__lliUBEnterTs||0,a.__lliUBDwell=a.__lliUBDwell||0,a.__lliUBEnters=a.__lliUBEnters||0,a.__lliUBLeaves=a.__lliUBLeaves||0;const i=()=>{var l,c;a.__lliUBClicks+=1;try{const u=(((l=r.sharedData)==null?void 0:l.get("ub:clicks"))||0)+1;(c=r.sharedData)==null||c.set("ub:clicks",u)}catch{}};a.__lliUBClickHandler=i;try{a.addEventListener("click",i)}catch{}},onEnterViewport:r=>{var i,s,l,c;if(!t)return;const a=(i=r.imageRef)==null?void 0:i.current;a&&(a.__lliUBEnterTs=Date.now(),a.__lliUBEnters=(a.__lliUBEnters||0)+1);try{const u=(((s=r.sharedData)==null?void 0:s.get("ub:enters"))||0)+1;(l=r.sharedData)==null||l.set("ub:enters",u),(c=r.sharedData)==null||c.set("ub:enterTs",Date.now())}catch{}},onLeaveViewport:r=>{var i,s,l,c,u,d,p;if(!t)return;const a=(i=r.imageRef)==null?void 0:i.current;if(a){const h=a.__lliUBEnterTs||0;h&&(a.__lliUBDwell=(a.__lliUBDwell||0)+(Date.now()-h)),a.__lliUBEnterTs=0,a.__lliUBLeaves=(a.__lliUBLeaves||0)+1}try{const h=(((s=r.sharedData)==null?void 0:s.get("ub:leaves"))||0)+1;(l=r.sharedData)==null||l.set("ub:leaves",h);const v=((c=r.sharedData)==null?void 0:c.get("ub:enterTs"))||0;if(v){const w=(((u=r.sharedData)==null?void 0:u.get("ub:dwell"))||0)+(Date.now()-v);(d=r.sharedData)==null||d.set("ub:dwell",w),(p=r.sharedData)==null||p.set("ub:enterTs",0)}}catch{}},onUnmount:r=>{var h,v,w,$,f,m,g,b,x,P,C;if(!t)return;const a=(h=r.imageRef)==null?void 0:h.current;if(a&&a.__lliUBClickHandler)try{a.removeEventListener("click",a.__lliUBClickHandler)}catch{}const i=((v=r.sharedData)==null?void 0:v.get("ub:enterTs"))||0,s=(((w=r.sharedData)==null?void 0:w.get("ub:dwell"))||0)+(i?Date.now()-i:0),l=a?(a.__lliUBDwell||0)+(a.__lliUBEnterTs?Date.now()-a.__lliUBEnterTs:0):0,c=(a==null?void 0:a.__lliUBClicks)??((($=r.sharedData)==null?void 0:$.get("ub:clicks"))||0),u=(a==null?void 0:a.__lliUBEnters)??(((f=r.sharedData)==null?void 0:f.get("ub:enters"))||0),d=(a==null?void 0:a.__lliUBLeaves)??(((m=r.sharedData)==null?void 0:m.get("ub:leaves"))||0),p={src:r.src,dwellMs:l||s||0,clicks:c,enters:u,leaves:d};try{o?o(p):console.log("[UserBehavior]",p)}catch{}a&&(delete a.__lliUBClickHandler,delete a.__lliUBClicks,delete a.__lliUBEnterTs,delete a.__lliUBDwell,delete a.__lliUBEnters,delete a.__lliUBLeaves);try{(g=r.sharedData)==null||g.delete("ub:clicks"),(b=r.sharedData)==null||b.delete("ub:dwell"),(x=r.sharedData)==null||x.delete("ub:enters"),(P=r.sharedData)==null||P.delete("ub:leaves"),(C=r.sharedData)==null||C.delete("ub:enterTs")}catch{}},renderOverlay:r=>!t||!n?null:y.jsx(()=>{const[a,i]=N.useState({dwellMs:0,clicks:0,enters:0,leaves:0,inView:!1});return N.useEffect(()=>{let s=!0,l=0;const c=()=>{var w,$,f,m,g,b;if(!s)return;const u=(w=r.imageRef)==null?void 0:w.current,d=(u==null?void 0:u.__lliUBEnterTs)||0,p=((u==null?void 0:u.__lliUBDwell)||0)+(d?Date.now()-d:0),h=(($=r.sharedData)==null?void 0:$.get("ub:enterTs"))||0,v=(((f=r.sharedData)==null?void 0:f.get("ub:dwell"))||0)+(h?Date.now()-h:0);i({dwellMs:p||v||0,clicks:(u==null?void 0:u.__lliUBClicks)??(((m=r.sharedData)==null?void 0:m.get("ub:clicks"))||0),enters:(u==null?void 0:u.__lliUBEnters)??(((g=r.sharedData)==null?void 0:g.get("ub:enters"))||0),leaves:(u==null?void 0:u.__lliUBLeaves)??(((b=r.sharedData)==null?void 0:b.get("ub:leaves"))||0),inView:r.isIntersecting}),l=requestAnimationFrame(c)};return l=requestAnimationFrame(c),()=>{s=!1;try{cancelAnimationFrame(l)}catch{}}},[r]),y.jsxs("div",{style:{position:"absolute",top:8,right:8,background:"#1565c0",color:"#fff",fontSize:12,padding:"6px 8px",borderRadius:6,zIndex:5,boxShadow:"0 2px 8px rgba(0,0,0,0.2)",lineHeight:1.4},children:[y.jsxs("div",{style:{display:"flex",alignItems:"center",marginBottom:4},children:[(s=>y.jsx("span",{style:{display:"inline-block",width:8,height:8,borderRadius:8,background:s?"#4caf50":"#f44336",marginRight:6}}))(a.inView),y.jsx("strong",{children:"视口"})]}),y.jsxs("div",{children:["驻留：",Math.round(a.dwellMs/100)/10,"s"]}),y.jsxs("div",{children:["点击：",a.clicks]}),y.jsxs("div",{children:["进入：",a.enters,"，离开：",a.leaves]}),y.jsx("div",{style:{marginTop:4,opacity:.85},children:"提示：点击或慢慢滚动"})]})},{})}}}const PN="UserBehaviorPlugin",$N="用户行为：实时统计每张图片的视口驻留时长、点击次数、进入/离开次数，并在图片上叠加可视化面板，卸载时统一上报。",SN="2.0.0",CN=["viewport","视口与交互","数据","分析"],kN=[{name:"enabled",type:"boolean",default:"true",description:"是否启用统计与面板"},{name:"onReport",type:"(data: { src; dwellMs; clicks; enters; leaves }) => void",default:"undefined",description:"卸载时上报回调（默认打印到控制台）"},{name:"showOverlay",type:"boolean",default:"true",description:"是否在图片角落显示统计面板（生产版式建议关闭）"}],LN=`const BehaviorImage = withPlugins(LazyLoadImageCore, [
  createUserBehaviorPlugin({
    onReport: (data) => {
      // 上报到分析后端
      console.log("behavior", data);
    },
  }),
]);

// 在组件中使用
<BehaviorImage src="https://picsum.photos/id/1015/500/300" alt="用户行为示例" />;`,IN=[{name:"默认统计面板",description:"右上角实时显示驻留、点击、进入/离开数据。",src:"https://picsum.photos/id/1015/500/300",config:{enabled:!0}},{name:"关闭统计",description:"enabled=false 时不渲染面板也不统计。",src:"https://picsum.photos/id/1021/500/300",config:{enabled:!1}}],_N=["实时统计驻留时长","点击次数统计","进入 / 离开次数统计","视口状态指示（绿/红点）","卸载时统一上报","可通过 enabled 关闭"],EN=["内容热度分析","广告位效果评估","UX 研究与转化漏斗","图片曝光与互动埋点"],RN=["统计结果在卸载时通过 `onReport` 上报（默认打印控制台），示例页用面板实时展示。","`enabled: false` 可整体关闭统计与面板，不影响图片加载。","showOverlay: false 只上报数据、不渲染角标，适合直接接入真实版式。"],zN={name:PN,description:$N,since:SN,tags:CN,config:kN,example:LN,examples:IN,features:_N,useCases:EN,notes:RN},ON=Object.assign(i4,{meta:y4}),DN=Object.assign(v4,{meta:_4}),TN=Object.assign(R4,{meta:U4}),jN=Object.assign(W4,{meta:eO}),AN=Object.assign(tO,{meta:pO}),MN=Object.assign(fO,{meta:kO}),BN=Object.assign(KR,{meta:sz}),NN=Object.assign(IO,{meta:BO}),FN=Object.assign(FO,{meta:ZO}),UN=Object.assign(JO,{meta:uD}),WN=Object.assign(pD,{meta:$D}),VN=Object.assign(SD,{meta:TD}),HN=Object.assign(UD,{meta:JD}),GN=Object.assign(n6,{meta:m6}),qN=Object.assign(g6,{meta:C6}),QN=Object.assign(I6,{meta:B6}),KN=Object.assign(F6,{meta:Z6}),YN=Object.assign(tT,{meta:pT}),XN=Object.assign(fT,{meta:kT}),ZN=Object.assign(IT,{meta:BT}),JN=Object.assign(FT,{meta:ZT}),eF=Object.assign(nj,{meta:mj}),tF=Object.assign(gj,{meta:Cj}),nF=Object.assign(Ej,{meta:Fj}),oF=Object.assign(Wj,{meta:eA}),rF=Object.assign(oA,{meta:gA}),aF=Object.assign(fA,{meta:kA}),iF=Object.assign(IA,{meta:BA}),sF=Object.assign(FA,{meta:ZA}),lF=Object.assign(e8,{meta:d8}),cF=Object.assign(m8,{meta:S8}),uF=Object.assign(k8,{meta:A8}),dF=Object.assign(N8,{meta:X8}),pF=Object.assign(J8,{meta:uM}),mF=Object.assign(fM,{meta:kM}),gF=Object.assign(IM,{meta:BM}),fF=Object.assign(NM,{meta:XM}),hF=Object.assign(JM,{meta:uB}),yF=Object.assign(dB,{meta:PB}),vF=Object.assign(SB,{meta:TB}),bF=Object.assign(MB,{meta:KB}),wF=Object.assign(YB,{meta:sN}),xF=Object.assign(cN,{meta:wN}),PF=Object.assign(xN,{meta:zN});function $F(e={}){const{ratio:t=4/3}=e;return{name:"aspect-ratio-spacer",version:"1.0.0",config:e,hooks:{transformProps:n=>{var r;const o=(r=n.containerStyle)==null?void 0:r.aspectRatio;return{...n,containerStyle:{...n.containerStyle||{},...o!==void 0?null:{aspectRatio:String(t)}}}},onMount:n=>{var r;const o=(r=n.containerRef)==null?void 0:r.current;if(o)try{o.style.aspectRatio||(o.style.aspectRatio=String(t))}catch{}}}}}const SF="AspectRatioSpacerPlugin",CF="宽高比占位：在容器上预留固定宽高比，图片加载前后保持布局稳定，杜绝 CLS（布局抖动）。",kF="2.0.0",LF=["a11y","可访问性","视觉"],IF=[{name:"ratio",type:"number",default:"4/3",description:"宽/高比，如 4/3、16/9，或直接传数字"}],_F=`const RatioImage = withPlugins(LazyLoadImageCore, [
  createAspectRatioSpacerPlugin({ ratio: 4 / 3 }),
]);

<RatioImage src="https://picsum.photos/id/1015/500/300" alt="宽高比占位示例" />;`,EF=[{name:"4:3 占位",description:"常见图文比例，加载前后无跳动。",src:"https://picsum.photos/id/1015/500/300",config:{ratio:1.3333}},{name:"16:9 占位",description:"视频/横幅比例。",src:"https://picsum.photos/id/1021/500/300",config:{ratio:1.7778}},{name:"正方形占位",description:"ratio=1，头像/方形卡片。",src:"https://picsum.photos/id/1026/500/300",config:{ratio:1}}],RF=["预留宽高比","基于 CSS aspect-ratio","防布局抖动（CLS）","任意比例"],zF=["瀑布流/列表占位","LCP 稳定","移动端响应式","避免滚动跳动"],OF=["ratio 在静态预览中建议传数字（如 1.3333 表示 4/3），便于配置表与查看源码展示。"],DF={name:SF,description:CF,since:kF,tags:LF,config:IF,example:_F,examples:EF,features:RF,useCases:zF,notes:OF},TF=Object.assign($F,{meta:DF});function jF(e={}){const{startBlur:t=8,endBlur:n=0,durationMs:o=400}=e;return{name:"blur-up",version:"1.0.0",config:e,hooks:{transformProps:r=>{var p,h,v,w;const a=(((p=r.imageStyle)==null?void 0:p.filter)||"").replace(/blur\([^)]*\)/,"").trim(),i=a?`${a} blur(${t}px)`:`blur(${t}px)`,s=(h=r.imageStyle)==null?void 0:h.transition,l=`${s&&/opacity\s*\d*ms/.test(s)?s:"opacity 180ms ease"}, filter ${o}ms ease`,c=(v=r.imageStyle)==null?void 0:v.willChange,u=c?`${c}, filter`:"filter",d=(w=r.imageStyle)==null?void 0:w.opacity;return{...r,imageStyle:{...r.imageStyle||{},...d===void 0?{opacity:1}:null,filter:i,transition:l,willChange:u}}},onBeforeLoad:r=>{var i;const a=(i=r.imageRef)==null?void 0:i.current;if(!a)return!0;try{const s=(a.style.filter||"").replace(/blur\([^)]*\)/,"").trim();a.__lliPrevFilterNoBlur=s;const l=s?`${s} blur(${t}px)`:`blur(${t}px)`;a.style.filter=l;const c=a.style.transition||"";a.style.transition=c?`${c}, filter ${o}ms ease`:`filter ${o}ms ease`}catch{}return!0},onLoadSuccess:r=>{var i;const a=(i=r.imageRef)==null?void 0:i.current;if(a)try{const s=a.__lliPrevFilterNoBlur??(a.style.filter||"").replace(/blur\([^)]*\)/,"").trim(),l=n>0?s?`${s} blur(${n}px)`:`blur(${n}px)`:s;a.style.filter=l}catch{}},onUnmount:r=>{var i;const a=(i=r.imageRef)==null?void 0:i.current;if(a)try{a.__lliPrevFilterNoBlur!==void 0&&(a.style.filter=a.__lliPrevFilterNoBlur||"",delete a.__lliPrevFilterNoBlur)}catch{}}}}}const AF="BlurUpPlugin",MF="模糊放大占位：加载期为图片注入 blur 滤镜，加载成功后过渡到清晰，避免「白屏 → 清晰图」的突兀切换。",BF="2.0.0",NF=["visual","视觉"],FF=[{name:"startBlur",type:"number",default:"8",description:"起始模糊半径 px"},{name:"endBlur",type:"number",default:"0",description:"结束模糊半径 px"},{name:"durationMs",type:"number",default:"400",description:"过渡时长 ms"}],UF=`// 模糊渐显：从 8px 模糊过渡到清晰
const BlurImage = withPlugins(LazyLoadImageCore, [
  createBlurUpPlugin({
    startBlur: 8,
    endBlur: 0,
    durationMs: 450,
  }),
]);

<BlurImage src="https://picsum.photos/seed/blurup/600/400" alt="模糊渐显" />;`,WF=[{name:"柔和模糊渐显",description:"8px 起始模糊，450ms 平滑过渡到清晰。",src:"https://picsum.photos/seed/blurup-soft/600/400",config:{startBlur:8,endBlur:0,durationMs:450}},{name:"强模糊长过渡",description:"16px 大模糊，700ms 慢过渡，营造「水雾散去」感。",src:"https://picsum.photos/seed/blurup-strong/600/400",config:{startBlur:16,endBlur:0,durationMs:700}}],VF=["加载期模糊占位，避免白屏突兀","加载成功平滑过渡到清晰","起始 / 结束模糊与时长可调","常与 Skeleton / LQIP 配合"],HF=["图片画廊 / 相册","首屏大图加载","内容型站点图片过渡","与骨架屏互补的视觉占位"],GF=["与 Skeleton 叠加时建议 blur 图层级略高于骨架，过渡更自然。","durationMs 过大会让「清晰」显得迟缓，一般 300~500ms 为宜。"],qF={name:AF,description:MF,since:BF,tags:NF,config:FF,example:UF,examples:WF,features:VF,useCases:HF,notes:GF},QF=Object.assign(jF,{meta:qF}),KF="data:image/svg+xml;utf8,"+encodeURIComponent("<svg xmlns='http://www.w3.org/2000/svg' width='400' height='300'><rect width='100%' height='100%' fill='#eceff1'/><g fill='none' stroke='#90a4ae' stroke-width='6'><path d='M60 170 L140 170 L175 110 L235 210 L275 160 L340 160'/><circle cx='200' cy='225' r='8' fill='#90a4ae' stroke='none'/></g><text x='200' y='265' font-family='sans-serif' font-size='22' fill='#607d8b' text-anchor='middle'>离线占位</text></svg>");function YF(e={}){const{offlineSrc:t=KF,cacheName:n="vane-lazy-image-offline",warm:o=!0,showBadge:r=!0}=e,a=i=>i.networkInfo?i.networkInfo.online:typeof navigator<"u"?navigator.onLine:!0;return{name:"offline",version:"2.0.0",config:e,hooks:{onLoad:async i=>{if(a(i)){if(o&&typeof caches<"u")try{const s=await caches.open(n);if(!await s.match(i.src)){const l=await fetch(i.src);l&&l.ok&&await s.put(i.src,l.clone())}}catch{}return}if(typeof caches<"u")try{const s=await(await caches.open(n)).match(i.src);if(s){const l=await s.blob();return URL.createObjectURL(l)}}catch{}return t},renderOverlay:i=>!r||a(i)?null:y.jsx("div",{style:{position:"absolute",top:8,left:8,background:"#c62828",color:"#fff",fontSize:12,padding:"4px 8px",borderRadius:6,zIndex:6},children:"离线模式"})}}}const XF="OfflinePlugin",ZF="离线降级（v2 真实实现）：在线时把资源预热进 Cache Storage；离线时优先从缓存取同域资源，否则回退 offlineSrc / 内置 SVG 占位图，并在离线时显示状态徽标。不再是纯提示层。",JF="2.0.0",eU=["loading","加载策略","离线","省流"],tU=[{name:"offlineSrc",type:"string",default:"内置 SVG 离线占位图（data URI）",description:"离线且无缓存时回退的占位图，建议用 data URI 避免再次走网络"},{name:"cacheName",type:"string",default:"vane-lazy-image-offline",description:"Cache Storage 名称，用于预热与离线回退"},{name:"warm",type:"boolean",default:"true",description:"在线时是否把资源写入 Cache Storage 预热"},{name:"showBadge",type:"boolean",default:"true",description:"离线时是否显示「离线模式」徽标"}],nU=`import { LazyLoadImageCore, createOfflinePlugin, withPlugins } from "vane-lazy-image";

const LazyImage = withPlugins(LazyLoadImageCore, [
  // 离线时回退到内置占位图，并在离线时显示徽标
  createOfflinePlugin({}),
]);

// 同域资源在线时会自动预热，离线可直接从缓存读取
<LazyImage src="/images/photo.jpg" alt="离线降级示例" />`,oU=[{name:"默认离线降级",description:"在线正常加载并预热；断网后同域资源走缓存，跨域资源回退到内置 SVG 占位图，并出现「离线模式」徽标。",src:"https://picsum.photos/seed/offline/800/600",config:{}},{name:"自定义离线占位图",description:"指定 offlineSrc 作为断网回退图（建议 data URI）。",src:"https://picsum.photos/seed/offline2/800/600",config:{offlineSrc:"data:image/svg+xml;utf8,%3Csvg xmlns='http://www.w3.org/2000/svg' width='400' height='300'%3E%3Crect width='100%25' height='100%25' fill='%23ffe0b2'/%3E%3Ctext x='50%25' y='50%25' fill='%23e65100' text-anchor='middle' font-size='22'%3E无网络%3C/text%3E%3C/svg%3E"}},{name:"关闭徽标",description:"showBadge=false，仅做离线资源回退，不显示提示。",src:"https://picsum.photos/seed/offline3/800/600",config:{showBadge:!1}}],rU=["在线预热进 Cache Storage（真实写入）","离线从缓存读取同域资源","无缓存回退 offlineSrc / 内置 SVG 占位","在线 / 离线状态统一取自 GlobalContext（全 App 单处监听）+ 状态徽标","warm / showBadge 可开关"],aU=["弱网 / 断网时的优雅降级","离线优先 PWA 应用的图片缓存","省流用户避免无效请求"],iU=["跨域 no-cors 资源缓存后无法读取为 blob，因此跨域图片离线时会回退到 offlineSrc 占位图（预期降级）；同域资源可真正离线显示。","完整 Service Worker 级别离线由宿主应用负责，本插件提供组件级缓存/回退兜底。"],sU={name:XF,description:ZF,since:JF,tags:eU,config:tU,example:nU,examples:oU,features:rU,useCases:aU,notes:iU},Di=new Set,Ws=new Set;async function qu(e,t,n){if(Di.has(e)||Ws.has(e)){if(n)try{console.debug("[CachePrewarm] skipped (already in progress or cached)",e)}catch{}return}Di.add(e);try{const o=new AbortController,r=setTimeout(()=>o.abort(),1e4),a=await fetch(e,{cache:"force-cache",signal:o.signal});if(clearTimeout(r),!a.ok)return;const i=await a.blob();if(t&&za.set(e,i,200),await ig.set(e,i,{dbName:"LLI-Cache",storeName:"images",debug:n}),Ws.add(e),n)try{console.debug("[CachePrewarm] prewarmed",{src:e,size:i.size})}catch{}}catch(o){if(n&&(o==null?void 0:o.name)!=="AbortError")try{console.warn("[CachePrewarm] failed",o)}catch{}}finally{Di.delete(e)}}const lU=({src:e})=>{const[t,n]=N.useState(!1);return N.useEffect(()=>{const o=()=>n(Ws.has(e));o();const r=setInterval(o,400);return()=>clearInterval(r)},[e]),y.jsx("div",{style:{position:"absolute",top:8,left:8,background:t?"#2e7d32":"#b35c00",color:"#fff",fontSize:12,padding:"4px 8px",borderRadius:6,zIndex:6,pointerEvents:"none"},children:t?"已预热 ✓":"预热中…"})};function cU(e={}){const{enabled:t=!0,trigger:n="enter",preferMemory:o=!0,showBadge:r=!1,debug:a=!1}=e;return{name:"cache-prewarm",version:"2.0.0",config:e,hooks:{onMount:i=>{!t||n!=="mount"||za.get(i.src)||qu(i.src,o,a)},onEnterViewport:i=>{!t||n!=="enter"||za.get(i.src)||qu(i.src,o,a)},renderOverlay:i=>r?N.createElement(lU,{src:i.src}):null}}}const uU="CachePrewarmPlugin",dU="缓存预热：进入视口或挂载时把图片预热到内存/IDB 缓存。",pU="2.0.0",mU=["cache","缓存"],gU=[{name:"enabled",type:"boolean",default:"true",description:"是否启用预热"},{name:"trigger",type:'"enter" | "mount"',default:'"enter"',description:"触发时机：进入视口或挂载"},{name:"preferMemory",type:"boolean",default:"true",description:"预热时优先写内存"},{name:"debug",type:"boolean",default:"false",description:"是否输出预热调试日志"},{name:"showBadge",type:"boolean",default:"false",description:"是否在卡片上显示预热状态徽标（便于观察）"}],fU=`const LazyImage = withPlugins(LazyLoadImageCore, [
  createCachePrewarmPlugin({
    trigger: "enter",    // 进入视口即预热
    preferMemory: true,  // 优先写入内存缓存
  }),
]);`,hU=[{name:"进入视口预热",description:"图片刚进视口就提前取回并写入缓存，滚动时无等待、点击放大秒开。",config:{trigger:"enter",preferMemory:!0,showBadge:!0}},{name:"挂载即预热",description:"组件挂载即预热，适合首屏已知必看的图（如详情页主图）。",config:{trigger:"mount",preferMemory:!1}}],yU=["进入视口 / 挂载时提前 fetch 并写入 Memory / IDB 缓存","内置重入保护（prewarming / prewarmed 集合），避免重复预热","优先写入内存（objectURL），跨会话持久交给 IDB"],vU=["商品详情页主图：进入视口即预热，查看大图零延迟","轮播首图：挂载即预热，切换时无白屏"],bU=["依赖 MemoryCachePlugin / IDBCachePlugin 提供底层存储。","预热失败或超时（10s）不影响正常加载，仅跳过预热。","与 CacheIDBPlugin 配合可实现“进入视口即落盘”。"],wU={name:uU,description:dU,since:pU,tags:mU,config:gU,example:fU,examples:hU,features:yU,useCases:vU,notes:bU};function xU(e){const{fallbackSrc:t}=e;return{name:"fallback-image",version:"1.1.0",description:"失败后回退到占位图；每个 src 只回退一次，避免回退图自身失败导致死循环（P0-2）",config:e,hooks:{onLoadError:(n,o)=>{var i,s,l,c;try{(i=n.sharedData)==null||i.set("had-error",!0)}catch{}const r=`fallback-applied:${n.src}`;if((s=n.sharedData)!=null&&s.get(r))return!1;try{(l=n.sharedData)==null||l.set(r,!0)}catch{}const a=(c=n.imageRef)==null?void 0:c.current;if(!a)return!0;try{a.src=t}catch{}return!0}}}}const PU="FallbackImagePlugin",$U="兜底图：图片加载失败时自动切换到备用图片地址，避免出现破图空白，是最基础的失败降级手段。",SU="2.0.0",CU=["network","网络","兜底","降级"],kU=[{name:"fallbackSrc",type:"string",description:'兜底图地址，建议使用始终可访问的占位图或 data URI。e.g. "/404.jpg"'}],LU=`import { LazyLoadImageCore, createFallbackImagePlugin, withPlugins } from "vane-lazy-image";

const LazyImage = withPlugins(LazyLoadImageCore, [
  createFallbackImagePlugin({ fallbackSrc: "/404.jpg" }),
]);

<LazyImage src="https://invalid.example.com/broken.png" alt="兜底图示例" />`,IU=[{name:"基础兜底图",description:"原图失败 → 自动切换到兜底图正常显示（演示用始终可访问的占位图）。",src:"https://invalid.example.com/broken.png",config:{fallbackSrc:"https://picsum.photos/seed/fallback/400/300"}}],_U=["onLoadError 直接改写 img.src 为兜底地址","标记 had-error，供 ErrorBadge 等插件联动","兜底成功后仍可配合其它错误插件展示状态"],EU=["保证任何失败都不出现破图","与错误徽标 / 追踪组合，兜底 + 可观测"],RU=["fallbackSrc 为必填；建议使用始终可访问的占位图或 data URI，避免兜底本身再失败","兜底成功后若仍有 ErrorBadge(persistAfterFallback)，可继续显示徽标便于排查"],zU={name:PU,description:$U,since:SU,tags:CU,config:kU,example:LU,examples:IU,features:_U,useCases:EU,notes:RU},OU=Object.assign(YF,{meta:sU}),DU=Object.assign(cU,{meta:wU}),TU=Object.assign(xU,{meta:zU}),jU=e=>{const t=(e==null?void 0:e.position)??"bottom",n=(e==null?void 0:e.bg)??"rgba(0,0,0,0.62)",o=(e==null?void 0:e.color)??"#fff";return{name:"caption",hooks:{renderOverlay(r){const a=r.src,i=typeof(e==null?void 0:e.text)=="function"?e==null?void 0:e.text(a):(e==null?void 0:e.text)??"";if(!i)return null;const s={position:"absolute",left:0,right:0,[t]:0,padding:"6px 10px",background:n,color:o,fontSize:12,zIndex:2,pointerEvents:"none"};return y.jsx("div",{style:s,children:i})}}}},AU="CaptionPlugin",MU="图片说明文字覆盖层，支持样式定制。",BU="2.0.0",NU=["visual","视觉"],FU=[{name:"text",type:"string | ((src?: string) => string)",default:'""',description:"说明文字；可传函数按 src 派生"},{name:"position",type:'"top" | "bottom"',default:'"bottom"',description:"文字位置"},{name:"bg",type:"string",default:"rgba(0,0,0,0.62)",description:"背景色"},{name:"color",type:"string",default:"#fff",description:"文字颜色"}],UU=`// 底部说明文字
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
});`,WU=[{name:"底部说明",description:"半透明黑底白字，落在图片底部作图注。",src:"https://picsum.photos/seed/cap-bottom/600/400",config:{text:"日落海岸线",position:"bottom"}},{name:"顶部标题条",description:"顶部深色背景条，作标题 / 分类标签。",src:"https://picsum.photos/seed/cap-top/600/400",config:{text:"Gallery • 2026",position:"top",bg:"rgba(0,0,0,0.6)",color:"#fff"}},{name:"暖色图注",description:"自定义暖色背景与文字色，贴合活动主题。",src:"https://picsum.photos/seed/cap-warm/600/400",config:{text:"限时特惠",position:"bottom",bg:"rgba(160,48,16,0.88)",color:"#fff"}}],VU=["顶部 / 底部两种位置","背景与文字颜色可定制","文本支持静态或函数动态派生","作为覆盖层渲染，不干扰图片本身"],HU=["图库 / 相册图注","新闻 / 博客配图说明","商品图标题条","活动海报角标文字"],GU=["text 传函数时可按 src 动态生成，但场景示例画廊使用静态文本以保证实时预览。","与 OverlayInfo 的区别：Caption 聚焦单一说明文案，OverlayInfo 更通用（任意文本 + 触发时机）。"],qU={name:AU,description:MU,since:BU,tags:NU,config:FU,example:UU,examples:WU,features:VU,useCases:HU,notes:GU},QU=e=>{const t=(e==null?void 0:e.buttonText)??"Open",n=(e==null?void 0:e.enableLightbox)??!0,o=(e==null?void 0:e.overlayZIndex)??10,r=(e==null?void 0:e.buttonStyle)??{};return{name:"gallery",hooks:{renderOverlay(a){return y.jsx(()=>{const[i,s]=N.useState(!1),[l,c]=N.useState(!1),u=()=>{if(n)s(!0);else{const d=a.src??"";d&&window.open(d,"_blank")}};return N.useEffect(()=>{const d=p=>{p.key==="Escape"&&s(!1)};return window.addEventListener("keydown",d),()=>window.removeEventListener("keydown",d)},[]),y.jsxs(y.Fragment,{children:[y.jsx("div",{style:{position:"absolute",inset:0,zIndex:o,pointerEvents:"auto",background:l?"rgba(0,0,0,0.08)":"transparent",transition:"background 160ms ease"},onMouseEnter:()=>c(!0),onMouseLeave:()=>c(!1),onClick:d=>{d.stopPropagation(),u()}}),y.jsx("button",{type:"button",style:{position:"absolute",top:8,right:8,zIndex:o+1,padding:"8px 12px",borderRadius:8,border:"none",background:"rgba(0,0,0,0.65)",color:"#fff",fontSize:13,boxShadow:"0 2px 6px rgba(0,0,0,0.25)",cursor:"pointer",...r},onClick:d=>{d.stopPropagation(),u()},children:t}),n&&i?y.jsx("div",{style:{position:"fixed",inset:0,background:"rgba(0,0,0,0.85)",display:"flex",alignItems:"center",justifyContent:"center",zIndex:9999,cursor:"zoom-out"},onClick:()=>s(!1),children:y.jsx("img",{src:a.src??"",alt:a.props.alt??"",style:{maxWidth:"90%",maxHeight:"90%"}})}):null]})},{})}}}},KU="GalleryPlugin",YU="画廊灯箱：图片上叠加打开按钮，进入灯箱或新窗口查看原图。",XU="2.0.0",ZU=["visual","视觉"],JU=[{name:"buttonText",type:"string",default:'"Open"',description:"打开按钮文案"},{name:"enableLightbox",type:"boolean",default:"true",description:"是否启用内置灯箱"},{name:"overlayZIndex",type:"number",default:"10",description:"灯箱层叠顺序"},{name:"buttonStyle",type:"React.CSSProperties",default:"{}",description:"按钮自定义样式（缩略图场景可缩成小号半透明胶囊）"}],e9=`// 点击按钮进入灯箱查看大图
const GalleryImage = withPlugins(LazyLoadImageCore, [
  createGalleryPlugin({
    buttonText: "查看大图",
    enableLightbox: true,
    overlayZIndex: 20,
  }),
]);

<GalleryImage src="https://picsum.photos/seed/gallery/600/400" alt="画廊" />;`,t9=[{name:"灯箱预览",description:"叠加「查看大图」按钮，点击进入全屏灯箱看原图。",src:"https://picsum.photos/seed/gallery-lb/600/400",config:{buttonText:"查看大图",enableLightbox:!0,overlayZIndex:20}},{name:"新窗口打开",description:"关闭内置灯箱，点击按钮以新窗口打开原图。",src:"https://picsum.photos/seed/gallery-win/600/400",config:{buttonText:"Open",enableLightbox:!1}}],n9=["覆盖层打开按钮","内置灯箱查看大图（默认开启）","可改为新窗口打开","灯箱层级可调"],o9=["电商商品图放大查看","相册 / 作品集灯箱","详情页看图","地图 / 截图放大"],r9=["enableLightbox:false 时按钮以新窗口打开原图，适合轻量场景。","灯箱层级 overlayZIndex 需高于页面其它浮层，避免被遮挡。"],a9={name:KU,description:YU,since:XU,tags:ZU,config:JU,example:e9,examples:t9,features:n9,useCases:o9,notes:r9},i9=e=>{const t=Math.max(1,(e==null?void 0:e.scale)??1.08),n=Math.max(0,(e==null?void 0:e.durationMs)??180);return{name:"hover-zoom",hooks:{onLoadSuccess(o){var s;const r=(s=o.imageRef)==null?void 0:s.current;if(!r)return;r.style.transition=`transform ${n}ms ease`;const a=()=>{r.style.transform=`scale(${t})`},i=()=>{r.style.transform="scale(1)"};r.__lliHoverEnter=a,r.__lliHoverLeave=i,r.addEventListener("mouseenter",a),r.addEventListener("mouseleave",i)},onUnmount(o){var s;const r=(s=o.imageRef)==null?void 0:s.current;if(!r)return;const a=r.__lliHoverEnter,i=r.__lliHoverLeave;a&&r.removeEventListener("mouseenter",a),i&&r.removeEventListener("mouseleave",i),r.style.transition="",r.style.transform=""}}}},s9="HoverZoomPlugin",l9="悬停放大：鼠标悬停时放大显示图片局部。",c9="2.0.0",u9=["visual","视觉"],d9=[{name:"scale",type:"number",default:"1.08",description:"放大倍数"},{name:"durationMs",type:"number",default:"180",description:"过渡时长 ms"}],p9=`// 悬停放大 1.15 倍
const ZoomImage = withPlugins(LazyLoadImageCore, [
  createHoverZoomPlugin({ scale: 1.15, durationMs: 180 }),
]);

<ZoomImage src="https://picsum.photos/seed/hoverzoom/600/400" alt="悬停放大" />;`,m9=[{name:"悬停放大 1.15",description:"鼠标悬停放大到 1.15 倍，180ms 平滑过渡。",src:"https://picsum.photos/seed/hoverzoom-115/600/400",config:{scale:1.15,durationMs:180}},{name:"轻微放大",description:"克制的 1.08 倍，仅给一点点呼吸感。",src:"https://picsum.photos/seed/hoverzoom-108/600/400",config:{scale:1.08,durationMs:200}}],g9=["悬停平滑放大","放大倍数可调","过渡时长可调","常与 Caption / BorderGlow 叠加"],f9=["商品图悬停预览细节","相册悬停聚焦","卡片悬停微交互","与灯箱配合的轻量前奏"],h9=["放大会溢出原尺寸，通常需父容器 overflow:hidden 裁切，仅放大中心区域。","与 Transition 的 fromScale 不同，HoverZoom 仅在 hover 时触发。"],y9={name:s9,description:l9,since:c9,tags:u9,config:d9,example:p9,examples:m9,features:g9,useCases:f9,notes:h9},Qu="lli-skeleton-style",v9=`
@keyframes lli-skeleton-shimmer {
  0% { background-position: 200% 0; }
  100% { background-position: -200% 0; }
}
@keyframes lli-skeleton-pulse {
  0%, 100% { opacity: 0.85; }
  50% { opacity: 0.6; }
}
`;function b9(){if(!(typeof document>"u"))try{if(document.getElementById(Qu))return;const e=document.createElement("style");e.id=Qu,e.textContent=v9,document.head.appendChild(e)}catch{}}function w9({imageState:e,type:t="shimmer",backgroundColor:n="#e5e7eb",highlightColor:o="#f3f4f6",borderRadius:r=4,zIndex:a=2,showWhen:i="loading"}){if(!(i==="always"||e.isLoading))return null;b9();const s={position:"absolute",inset:0,borderRadius:r,overflow:"hidden",pointerEvents:"none",zIndex:a},l={width:"100%",height:"100%",backgroundImage:`linear-gradient(90deg, ${n} 0%, ${n} 35%, ${o} 50%, ${n} 65%, ${n} 100%)`,backgroundSize:"200% 100%",animation:"lli-skeleton-shimmer 1200ms ease-in-out infinite"};return y.jsx("div",{style:s,children:y.jsx("div",{style:t==="shimmer"?l:{width:"100%",height:"100%",background:n,animation:"lli-skeleton-pulse 1200ms ease-in-out infinite"}})})}function x9(e={}){return{name:"skeleton",version:"1.0.0",config:e,hooks:{renderOverlay:t=>y.jsx(w9,{imageState:t.imageState,type:e.type,backgroundColor:e.backgroundColor,highlightColor:e.highlightColor,borderRadius:e.borderRadius,zIndex:e.zIndex,showWhen:e.showWhen})}}}const P9="SkeletonPlugin",$9="骨架屏占位：加载期显示 shimmer/pulse 骨架动画。",S9="2.0.0",C9=["visual","视觉"],k9=[{name:"type",type:'"shimmer" | "pulse"',default:'"shimmer"',description:"动画类型"},{name:"backgroundColor",type:"string",default:"#e5e7eb",description:"底色"},{name:"highlightColor",type:"string",default:"#f3f4f6",description:"shimmer 高亮色"},{name:"borderRadius",type:"number",default:"6",description:"圆角 px"},{name:"zIndex",type:"number",default:"1",description:"层叠顺序"},{name:"showWhen",type:'"always" | "loading"',default:'"loading"',description:"何时显示"}],L9=`// 加载期 shimmer 骨架占位
const SkeletonImage = withPlugins(LazyLoadImageCore, [
  createSkeletonPlugin({
    type: "shimmer",
    borderRadius: 8,
    showWhen: "loading",
  }),
]);

<SkeletonImage src="https://picsum.photos/seed/skeleton/600/400" alt="骨架屏" />;`,I9=[{name:"Shimmer 骨架",description:"流光骨架，提示内容加载中，圆角 8。",src:"https://picsum.photos/seed/skeleton-shimmer/600/400",config:{type:"shimmer",borderRadius:8,showWhen:"loading"}},{name:"Pulse 骨架",description:"呼吸式明暗变化，更克制的占位动画。",src:"https://picsum.photos/seed/skeleton-pulse/600/400",config:{type:"pulse",backgroundColor:"#eee",highlightColor:"#f5f5f5",borderRadius:8}}],_9=["shimmer（流光）/ pulse（呼吸）两种动画","底色 / 高亮色 / 圆角可调","加载完成自动淡出","零图片请求，首屏即见"],E9=["列表 / 卡片加载占位","首屏骨架屏","与 BlurUp / LQIP 配合的兜底占位","弱网环境体验优化"],R9=['showWhen:"loading" 表示仅在加载期显示，图片就绪后自动让位。',"与 BlurUp 叠加时，建议骨架层级低于模糊图（zIndex 较小）。"],z9={name:P9,description:$9,since:S9,tags:C9,config:k9,example:L9,examples:I9,features:_9,useCases:E9,notes:R9},O9=Object.assign(jU,{meta:qU}),D9=Object.assign(QU,{meta:a9}),T9=Object.assign(i9,{meta:y9}),j9=Object.assign(x9,{meta:z9}),A9={"top-left":{top:10,left:10},"top-right":{top:10,right:10},"bottom-left":{bottom:10,left:10},"bottom-right":{bottom:10,right:10}},Ti=`
  @keyframes priceTagFadeIn {
    from { opacity: 0; transform: translateY(-10px); }
    to { opacity: 1; transform: translateY(0); }
  }
`;function M9({config:e,context:t}){const{price:n,currency:o="$",position:r="top-right",originalPrice:a,discount:i,showSavings:s=!1,style:l={},animate:c=!0,backgroundColor:u="#c62828",textColor:d="#fff",fetchPrice:p,loadingText:h="加载中...",errorText:v="价格获取失败"}=e,[w,$]=N.useState(null),[f,m]=N.useState(!!p),[g,b]=N.useState(!1);N.useEffect(()=>{if(!p)return;let _=!0;return(async()=>{try{m(!0),b(!1);const M=await p(t);_&&$(M)}catch(M){console.error("[PriceTagPlugin] fetchPrice failed:",M),_&&b(!0)}finally{_&&m(!1)}})(),()=>{_=!1}},[p,t]);const x=(w==null?void 0:w.price)??n,P=(w==null?void 0:w.originalPrice)??a,C=(w==null?void 0:w.discount)??i,k=s&&P!=null&&typeof x=="number"&&typeof P=="number"?P-x:null,I={position:"absolute",...A9[r],backgroundColor:u,color:d,padding:"8px 12px",borderRadius:4,fontWeight:"bold",fontSize:16,boxShadow:"0 2px 8px rgba(0,0,0,0.15)",zIndex:10,animation:c?"priceTagFadeIn 0.3s ease-out":"none",...l};return f?y.jsxs(y.Fragment,{children:[y.jsx("div",{style:I,children:y.jsx("div",{style:{fontSize:14,opacity:.8},children:h})}),c&&y.jsx("style",{children:Ti})]}):g?y.jsxs(y.Fragment,{children:[y.jsx("div",{style:{...I,backgroundColor:"#e74c3c"},children:y.jsx("div",{style:{fontSize:12},children:v})}),c&&y.jsx("style",{children:Ti})]}):x==null&&x!==0?null:y.jsxs(y.Fragment,{children:[y.jsxs("div",{style:I,children:[C&&y.jsx("div",{style:{fontSize:11,fontWeight:"normal",marginBottom:2,opacity:.9},children:C}),y.jsx("div",{style:{display:"flex",alignItems:"baseline",gap:4},children:y.jsxs("span",{style:{fontSize:20},children:[o,x]})}),P!=null&&y.jsxs("div",{style:{fontSize:12,textDecoration:"line-through",opacity:.7,marginTop:2},children:[o,P]}),k!=null&&k>0&&y.jsxs("div",{style:{fontSize:11,marginTop:4,backgroundColor:"rgba(255,255,255,0.2)",padding:"2px 6px",borderRadius:2},children:["省 ",o,k.toFixed(2)]})]}),c&&y.jsx("style",{children:Ti})]})}function B9(e={}){return{name:"price-tag",version:"1.0.0",config:e,hooks:{renderOverlay:t=>t.imageState.isLoaded?y.jsx(M9,{config:e,context:t}):null}}}const N9="PriceTagPlugin",F9="商品价格标签：在图片上叠加价格信息，支持原价、折扣、节省金额、异步价格获取与淡入动画。",U9="2.0.0",W9=["ecommerce","电商核心"],V9=[{name:"price",type:"number",default:"undefined",description:"当前价格"},{name:"currency",type:"string",default:'"$"',description:"货币符号"},{name:"position",type:'"top-left" | "top-right" | "bottom-left" | "bottom-right"',default:'"top-right"',description:"标签位置（四角）"},{name:"originalPrice",type:"number",default:"undefined",description:"原价（划线显示）"},{name:"discount",type:"string",default:"undefined",description:"折扣文案，如 “40% OFF”"},{name:"showSavings",type:"boolean",default:"false",description:"是否计算并显示节省金额"},{name:"backgroundColor",type:"string",default:'"#c62828"',description:"标签背景色"},{name:"textColor",type:"string",default:'"#fff"',description:"标签文字色"},{name:"animate",type:"boolean",default:"true",description:"淡入动画"},{name:"style",type:"React.CSSProperties",default:"{}",description:"自定义叠加样式"},{name:"fetchPrice",type:"(context) => Promise<{ price; originalPrice?; discount? }>",default:"undefined",description:"异步获取价格（API 集成）"},{name:"loadingText",type:"string",default:'"加载中..."',description:"异步加载文案"},{name:"errorText",type:"string",default:'"价格获取失败"',description:"异步失败文案"}],H9=`// 1. 组装带价格标签的懒加载图片组件
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
});`,G9=[{name:"完整价格信息（带折扣和节省金额）",description:"原价划线 + 折扣标签 + 自动计算节省金额，落在左下角。",src:"https://picsum.photos/id/180/400/300",config:{price:299.99,currency:"$",position:"bottom-left",originalPrice:499.99,discount:"40% OFF",showSavings:!0}},{name:"简单价格标签",description:"仅当前价 + 货币符号，落在左上角。",src:"https://picsum.photos/id/201/400/300",config:{price:1999,currency:"¥",position:"top-left"}},{name:"自定义样式价格标签",description:"自定义背景色 / 文字色 / 圆角与内边距。",src:"https://picsum.photos/id/250/400/300",config:{price:59.99,currency:"€",position:"bottom-right",backgroundColor:"#4ECDC4",textColor:"#1A535C",style:{borderRadius:"8px",padding:"12px 16px"}}},{name:"异步获取价格（模拟 API）",description:"真实场景通过 fetchPrice 异步拉取价格；示例以静态值代替，可见“查询价格 / 价格查询失败”状态（见用法示例中的 fetchPrice）。",src:"https://picsum.photos/id/260/400/300",config:{currency:"¥",position:"top-right",showSavings:!0,price:1299.99,originalPrice:1999,discount:"限时优惠"}}],q9=["显示当前价格、原价、折扣标签","计算并显示节省金额","支持多种货币符号","4 个位置可选（四角）","淡入动画效果","完全自定义样式","支持异步价格数据获取（API 集成）","显示加载和错误状态"],Q9=["电商产品列表","促销活动页面","特价商品展示","移动端商城","从 API 动态获取价格的场景","跨境电商实时汇率转换"],K9=["`fetchPrice` 返回后覆盖静态 `price`，接真实商品价格时用它，不必改组件。","配置 `originalPrice` 且高于 `price` 时展示划线价，`showSavings` 额外显示省额。"],Y9={name:N9,description:F9,since:U9,tags:W9,config:V9,example:H9,examples:G9,features:q9,useCases:Q9,notes:K9},Ku={new:{text:"NEW",bg:"#2e7d32",color:"#fff"},hot:{text:"HOT",bg:"#c4390f",color:"#fff"},sale:{text:"SALE",bg:"#c62828",color:"#fff"},limited:{text:"LIMITED",bg:"#6a1b9a",color:"#fff"},bestseller:{text:"BEST",bg:"#b35c00",color:"#fff"},custom:{text:"NEW",bg:"#1565c0",color:"#fff"}},X9={"top-left":{top:10,left:10},"top-right":{top:10,right:10},"bottom-left":{bottom:10,left:10},"bottom-right":{bottom:10,right:10}},Z9=`
  @keyframes promoBadgeFadeIn {
    from { opacity: 0; transform: scale(0.8); }
    to { opacity: 1; transform: scale(1); }
  }
  @keyframes promoBadgePulse {
    0%, 100% { transform: scale(1); box-shadow: 0 2px 6px rgba(0,0,0,0.2); }
    50% { transform: scale(1.1); box-shadow: 0 4px 12px rgba(0,0,0,0.3); }
  }
`;let J9=0;function eW({config:e,context:t}){const{type:n="hot",text:o,position:r="top-left",color:a,backgroundColor:i,animate:s=!0,pulse:l=!1,ribbon:c=!1,style:u={}}=e,d=Ku[n]??Ku.hot,p=n==="custom"&&o?o:d.text,h=i??d.bg,v=a??d.color,w=c?{padding:"6px 16px",transform:r.includes("left")?"rotate(-45deg) translateX(-20px)":"rotate(45deg) translateX(20px)",transformOrigin:"center",boxShadow:"0 4px 12px rgba(0,0,0,0.3)",top:c?-5:10,left:c?-5:10,right:c?-5:10,bottom:c?-5:10}:{},$={position:"absolute",...X9[r],backgroundColor:h,color:v,padding:c?"6px 16px":"4px 10px",borderRadius:c?2:4,fontWeight:"bold",fontSize:12,textTransform:"uppercase",letterSpacing:"0.5px",boxShadow:c?"0 4px 12px rgba(0,0,0,0.3)":"0 2px 6px rgba(0,0,0,0.2)",zIndex:10,animation:s?l?"promoBadgePulse 1.5s ease-in-out infinite":"promoBadgeFadeIn 0.4s ease-out":"none",...w,...u};return y.jsxs(y.Fragment,{children:[y.jsx("div",{style:$,children:p}),s&&y.jsx("style",{children:Z9})]})}function tW(e={}){return{name:`promo-badge-${++J9}`,version:"1.0.0",config:e,hooks:{renderOverlay:t=>t.imageState.isLoaded?y.jsx(eW,{config:e,context:t}):null}}}const nW="PromoBadgePlugin",oW="促销角标：在商品图片上显示 NEW/HOT/SALE 等促销标签，支持脉冲动画和丝带样式，可叠加多个。",rW="2.0.0",aW=["ecommerce","电商核心"],iW=[{name:"type",type:'"new" | "hot" | "sale" | "limited" | "bestseller" | "custom"',default:'"hot"',description:"预设标签类型"},{name:"text",type:"string",default:"undefined",description:"自定义文案（type=custom 时生效）"},{name:"position",type:'"top-left" | "top-right" | "bottom-left" | "bottom-right"',default:'"top-left"',description:"角标位置（四角）"},{name:"backgroundColor",type:"string",default:"undefined",description:"背景色"},{name:"color",type:"string",default:"undefined",description:"文字色"},{name:"animate",type:"boolean",default:"true",description:"淡入动画"},{name:"pulse",type:"boolean",default:"false",description:"脉冲呼吸动画"},{name:"ribbon",type:"boolean",default:"false",description:"丝带样式（倾斜 45°）"},{name:"style",type:"React.CSSProperties",default:"{}",description:"自定义叠加样式"}],sW=`// 1. 单个促销角标
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
<HotSaleImage src="https://picsum.photos/id/220/500/400" alt="促销商品" />;`,lW=[{name:"NEW 新品标签",description:"左上角绿色 NEW 角标。",src:"https://picsum.photos/id/168/300/300",config:{type:"new",position:"top-left"}},{name:"HOT 热门标签（脉冲动画）",description:"右上角红色 HOT，带脉冲呼吸效果。",src:"https://picsum.photos/id/175/300/300",config:{type:"hot",position:"top-right",pulse:!0}},{name:"SALE 促销丝带",description:"右上角红色丝带（倾斜 45°）。",src:"https://picsum.photos/id/188/300/300",config:{type:"sale",position:"top-right",ribbon:!0}},{name:"LIMITED 限量标签",description:"右上角紫色 LIMITED，带脉冲。",src:"https://picsum.photos/id/196/300/300",config:{type:"limited",position:"top-right",pulse:!0}},{name:"BESTSELLER 畅销标签",description:"右下角橙色 BEST 角标。",src:"https://picsum.photos/id/203/300/300",config:{type:"bestseller",position:"bottom-right"}},{name:"自定义标签（VIP 专享）",description:"自定义文案、背景色与文字色。",src:"https://picsum.photos/id/211/300/300",config:{type:"custom",text:"VIP专享",position:"top-left",backgroundColor:"#FFD700",color:"#000"}},{name:"多个标签组合",description:"一张图同时叠加 NEW + SALE（丝带）+ HOT（脉冲），不同位置不同样式。",src:"https://picsum.photos/id/220/500/400",configs:[{type:"new",position:"top-left"},{type:"sale",position:"top-right",ribbon:!0},{type:"hot",position:"bottom-right",pulse:!0}]}],cW=["6 种预设类型：NEW / HOT / SALE / LIMITED / BESTSELLER / custom","支持自定义文字、背景色、文字颜色","脉冲动画效果（吸引注意力）","丝带样式（倾斜 45°）","4 个位置可选（四角）","支持同一图片显示多个标签"],uW=["新品上市标记","热销商品突出","促销活动标识","限时限量提醒","VIP / 会员专享"],dW=["`type` 只是预设（new/hot/sale/limited/bestseller），`text` 可覆盖预设文案与颜色。","`ribbon: true` 渲染角部绶带，容器需 overflow:hidden 才不会溢出圆角。"],pW={name:nW,description:oW,since:rW,tags:aW,config:iW,example:sW,examples:lW,features:cW,useCases:uW,notes:dW},Yu={"in-stock":{text:"有货",bg:"#4CAF50",color:"#fff",icon:"✓"},"out-of-stock":{text:"缺货",bg:"#F44336",color:"#fff",icon:"✕"},"low-stock":{text:"库存紧张",bg:"#FF9800",color:"#fff",icon:"⚠"},"pre-order":{text:"预订",bg:"#2196F3",color:"#fff",icon:"🕐"}},mW={"top-left":{top:10,left:10},"top-right":{top:10,right:10},"bottom-left":{bottom:10,left:10},"bottom-right":{bottom:10,right:10}},gW=`
  @keyframes inventoryFadeIn {
    from { opacity: 0; transform: translateY(-5px); }
    to { opacity: 1; transform: translateY(0); }
  }
`;function fW({config:e,context:t}){const{status:n,stockCount:o,lowStockThreshold:r=10,showBadge:a=!0,autoRefresh:i=!1,refreshInterval:s=3e4,fetchStock:l,onStatusChange:c,position:u="top-right",style:d={}}=e,[p,h]=N.useState(n),[v,w]=N.useState(o);if(N.useEffect(()=>{if(!i||!l)return;const g=setInterval(async()=>{try{const b=await l();b.status!==void 0&&h(b.status),b.count!==void 0&&w(b.count),b.status!==void 0&&(c==null||c(b.status))}catch(b){console.error("[InventoryStatusPlugin] fetchStock failed:",b)}},s);return()=>clearInterval(g)},[i,l,s,c]),!a)return null;let $=p??"in-stock";v!==void 0&&(v===0?$="out-of-stock":v<=r?$="low-stock":$!=="pre-order"&&($="in-stock"));const f=Yu[$]??Yu["in-stock"],m={position:"absolute",...mW[u],backgroundColor:f.bg,color:f.color,padding:"6px 12px",borderRadius:4,fontSize:13,fontWeight:600,boxShadow:"0 2px 8px rgba(0,0,0,0.15)",zIndex:10,display:"flex",alignItems:"center",gap:4,animation:"inventoryFadeIn 0.3s ease-out",...d};return y.jsxs(y.Fragment,{children:[y.jsxs("div",{style:m,children:[y.jsx("span",{children:f.icon}),y.jsx("span",{children:f.text}),v!==void 0&&$!=="out-of-stock"&&y.jsxs("span",{style:{marginLeft:4,fontSize:11,opacity:.9},children:["(",v,")"]})]}),y.jsx("style",{children:gW})]})}function hW(e={}){return{name:"inventory-status",version:"1.0.0",config:e,hooks:{renderOverlay:t=>t.imageState.isLoaded?y.jsx(fW,{config:e,context:t}):null}}}const yW="InventoryStatusPlugin",vW="库存状态：实时显示商品库存状态（有货/低库存/缺货/预订），支持自动刷新和低库存预警。",bW="2.0.0",wW=["ecommerce","电商核心"],xW=[{name:"status",type:'"in-stock" | "out-of-stock" | "low-stock" | "pre-order"',default:'"in-stock"',description:"初始库存状态"},{name:"stockCount",type:"number",default:"undefined",description:"库存数量"},{name:"lowStockThreshold",type:"number",default:"10",description:"低库存阈值"},{name:"showBadge",type:"boolean",default:"true",description:"是否显示角标"},{name:"autoRefresh",type:"boolean",default:"false",description:"是否自动刷新库存"},{name:"refreshInterval",type:"number",default:"30000",description:"刷新间隔（毫秒）"},{name:"fetchStock",type:"() => Promise<{ status?; count? }>",default:"undefined",description:"自定义库存获取函数"},{name:"onStatusChange",type:"(status) => void",default:"undefined",description:"状态变更回调"},{name:"position",type:'"top-left" | "top-right" | "bottom-left" | "bottom-right"',default:'"top-right"',description:"角标位置"},{name:"style",type:"React.CSSProperties",default:"{}",description:"自定义叠加样式"}],PW=`// 1. 静态库存状态
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
<StockImage src="https://picsum.photos/id/164/280/280" alt="商品图" />;`,$W=[{name:"有货（100 件）",description:"绿色角标，显示库存数量。",src:"https://picsum.photos/id/152/280/280",config:{status:"in-stock",stockCount:100,showBadge:!0,position:"top-right"}},{name:"库存紧张（5 件）",description:"低于阈值 → 橙色预警角标。",src:"https://picsum.photos/id/164/280/280",config:{status:"low-stock",stockCount:5,lowStockThreshold:10,showBadge:!0,position:"top-right"}},{name:"缺货",description:"红色缺货角标。",src:"https://picsum.photos/id/177/280/280",config:{status:"out-of-stock",stockCount:0,showBadge:!0,position:"top-right"}},{name:"预订",description:"蓝色预订角标。",src:"https://picsum.photos/id/183/280/280",config:{status:"pre-order",showBadge:!0,position:"top-right"}},{name:"自动刷新库存（每 5 秒）",description:"通过 fetchStock 定时刷新状态（示例中省略函数，可配 interval）。",src:"https://picsum.photos/id/225/400/300",config:{status:"in-stock",stockCount:50,showBadge:!0,autoRefresh:!0,refreshInterval:5e3,position:"top-right"}}],SW=["4 种库存状态：有货 / 低库存 / 缺货 / 预订","显示实时库存数量","低库存阈值预警","自动刷新库存（可配置间隔）","库存变更回调通知","颜色编码（绿=有货 / 橙=低库存 / 红=缺货 / 蓝=预订）"],CW=["电商产品列表页","库存管理系统","在线商城首页","门票 / 课程售卖","限时抢购活动"],kW=["`stockCount <= lowStockThreshold` 时会自动归为「库存紧张」，无需手动改 `status`。","`autoRefresh` 需配合 `refreshInterval` 与 `fetchStock` 才有意义，静态示例页不会轮询。"],LW={name:yW,description:vW,since:bW,tags:wW,config:xW,example:PW,examples:$W,features:SW,useCases:CW,notes:kW},Xu=["rgb(255, 99, 71)","rgb(70, 130, 180)","rgb(60, 179, 113)","rgb(255, 215, 0)","rgb(238, 130, 238)"],IW={bottom:{bottom:10,left:10,right:10},overlay:{top:"50%",left:"50%",transform:"translate(-50%, -50%)"},"bottom-center":{bottom:10,left:"50%",transform:"translateX(-50%)"}},_W=`
  @keyframes colorSwatchFadeIn {
    from { opacity: 0; transform: translateY(10px); }
    to { opacity: 1; transform: translateY(0); }
  }
`;function Zu(e,t){const n=document.createElement("canvas"),o=n.getContext("2d");if(!o)return[];const r=.1;n.width=e.naturalWidth*r,n.height=e.naturalHeight*r;try{o.drawImage(e,0,0,n.width,n.height);const a=o.getImageData(0,0,n.width,n.height).data,i=new Map;for(let l=0;l<a.length;l+=4*10){const c=a[l],u=a[l+1],d=a[l+2];if(a[l+3]<128||c>240&&u>240&&d>240||c<15&&u<15&&d<15)continue;const p=`rgb(${Math.round(c/32)*32}, ${Math.round(u/32)*32}, ${Math.round(d/32)*32})`;i.set(p,(i.get(p)||0)+1)}const s=Array.from(i.entries()).sort((l,c)=>c[1]-l[1]).slice(0,t).map(([l])=>l);return s.length?s:Xu.slice(0,t)}catch(a){return console.error("[ColorSwatchPlugin] extractColors failed (可能是跨域问题):",a),Xu.slice(0,t)}}function Ju(e){const t=e.match(/\d+/g);if(!t)return e;const[n,o,r]=t.map(Number);return`#${((1<<24)+(n<<16)+(o<<8)+r).toString(16).slice(1)}`}function EW({config:e,context:t}){const{maxColors:n=5,showPalette:o=!0,position:r="bottom",onColorSelect:a,swatchSize:i=32,interactive:s=!0,style:l={},showColorCode:c=!1,gap:u=8}=e,[d,p]=N.useState([]),[h,v]=N.useState(null),[w,$]=N.useState(null);if(N.useEffect(()=>{var b;const g=(b=t.imageRef)==null?void 0:b.current;if(g)if(g.complete&&g.naturalWidth>0)p(Zu(g,n));else{const x=()=>p(Zu(g,n));return g.addEventListener("load",x),()=>g.removeEventListener("load",x)}},[t.imageRef,n]),!o||d.length===0)return null;const f=g=>{s&&(v(g),a==null||a(g))},m={position:"absolute",...IW[r],display:"flex",alignItems:"center",gap:`${u}px`,padding:8,backgroundColor:"rgba(255, 255, 255, 0.9)",borderRadius:8,boxShadow:"0 2px 12px rgba(0,0,0,0.15)",zIndex:10,animation:"colorSwatchFadeIn 0.4s ease-out",...l};return y.jsxs(y.Fragment,{children:[y.jsx("div",{style:m,children:d.map(g=>{const b=h===g,x=w===g,P={width:`${i}px`,height:`${i}px`,backgroundColor:g,borderRadius:"50%",cursor:s?"pointer":"default",border:b?"3px solid #333":"2px solid rgba(0,0,0,0.1)",boxShadow:x?"0 4px 12px rgba(0,0,0,0.3)":"0 2px 6px rgba(0,0,0,0.15)",transform:x?"scale(1.15)":"scale(1)",transition:"all 0.2s ease",position:"relative"};return y.jsxs("div",{style:{textAlign:"center"},children:[y.jsx("div",{style:P,onClick:()=>f(g),onMouseEnter:()=>$(g),onMouseLeave:()=>$(null),title:Ju(g)}),c&&y.jsx("div",{style:{fontSize:10,marginTop:4,color:"#666",fontFamily:"monospace"},children:Ju(g)})]},g)})}),y.jsx("style",{children:_W})]})}function RW(e={}){return{name:"color-swatch",version:"1.0.0",config:e,hooks:{transformProps:t=>({...t,crossOrigin:t.crossOrigin??"anonymous"}),onMount:t=>{var n,o;try{(o=(n=t.imageRef)==null?void 0:n.current)==null||o.setAttribute("crossOrigin","anonymous")}catch{}},renderOverlay:t=>{var n;return!t.imageState.isLoaded||!((n=t.imageRef)!=null&&n.current)?null:y.jsx(EW,{config:e,context:t})}}}}const zW="ColorSwatchPlugin",OW="颜色选择器：自动提取商品图片主要颜色，支持交互选择、颜色代码显示与悬停放大。",DW="2.0.0",TW=["ecommerce","电商核心"],jW=[{name:"maxColors",type:"number",default:"5",description:"提取颜色数量上限"},{name:"showPalette",type:"boolean",default:"true",description:"是否显示色板"},{name:"position",type:'"bottom" | "overlay" | "bottom-center"',default:'"bottom"',description:"色板位置"},{name:"swatchSize",type:"number",default:"32",description:"色块尺寸（px）"},{name:"interactive",type:"boolean",default:"true",description:"是否可点击选择"},{name:"showColorCode",type:"boolean",default:"false",description:"是否显示 HEX 代码"},{name:"gap",type:"number",default:"8",description:"色块间距（px）"},{name:"onColorSelect",type:"(color) => void",default:"undefined",description:"颜色选择回调"},{name:"style",type:"React.CSSProperties",default:"{}",description:"自定义叠加样式"}],AW=`// 1. 可交互色板（点击选择颜色）
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
<SwatchImage src="https://picsum.photos/id/100/500/400" alt="服装图" />;`,MW=[{name:"底部色板（可交互）",description:"点击色块可选择颜色，悬停放大。",src:"https://picsum.photos/id/100/500/400",config:{maxColors:6,showPalette:!0,position:"bottom",interactive:!0,swatchSize:36}},{name:"居中叠加",description:"色板居中浮于图片之上。",src:"https://picsum.photos/id/106/500/400",config:{maxColors:5,showPalette:!0,position:"overlay",interactive:!0,swatchSize:40,gap:10}},{name:"显示颜色代码",description:"每个色块下方显示 HEX 代码。",src:"https://picsum.photos/id/116/500/400",config:{maxColors:5,showPalette:!0,position:"bottom-center",interactive:!0,swatchSize:32,showColorCode:!0,gap:12}},{name:"多颜色小色块",description:"更多颜色、更小色块、更小间距。",src:"https://picsum.photos/id/129/500/400",config:{maxColors:8,showPalette:!0,position:"bottom",interactive:!0,swatchSize:24,gap:6}}],BW=["跨域提示：本示例使用的 picsum.photos 图片没有 CORS 头，无法提取真实颜色，当前显示的是默认演示色。实际使用中请确保图片服务器配置了正确的 CORS 头，或使用同域图片，插件才能正确提取图片的真实颜色。"],NW=["自动提取图片主要颜色","智能过滤黑白和透明色","可配置提取颜色数量","3 种显示位置（底部 / 居中 / 底部居中）","交互式颜色选择","显示 HEX 颜色代码","悬停放大效果","选中状态标识"],FW=["服装多颜色选择","艺术品 / 设计作品配色","家具 / 装饰品颜色筛选","鞋包配色选择","礼品个性化定制"],UW={name:zW,description:OW,since:DW,tags:TW,config:jW,example:AW,examples:MW,notes:BW,features:NW,useCases:FW},ed={facebook:{name:"Facebook",icon:"f",color:"#1877F2",getShareUrl:e=>`https://www.facebook.com/sharer/sharer.php?u=${encodeURIComponent(e.url)}`},twitter:{name:"Twitter",icon:"𝕏",color:"#000000",getShareUrl:e=>`https://twitter.com/intent/tweet?url=${encodeURIComponent(e.url)}&text=${encodeURIComponent(e.title)}`},pinterest:{name:"Pinterest",icon:"P",color:"#E60023",getShareUrl:e=>`https://pinterest.com/pin/create/button/?url=${encodeURIComponent(e.url)}&media=${encodeURIComponent(e.ogImage)}&description=${encodeURIComponent(e.description||e.title)}`},linkedin:{name:"LinkedIn",icon:"in",color:"#0A66C2",getShareUrl:e=>`https://www.linkedin.com/sharing/share-offsite/?url=${encodeURIComponent(e.url)}`},whatsapp:{name:"WhatsApp",icon:"W",color:"#25D366",getShareUrl:e=>`https://wa.me/?text=${encodeURIComponent(e.title+" "+e.url)}`},wechat:{name:"WeChat",icon:"微",color:"#07C160",getShareUrl:e=>e.url}},WW={small:{button:28,icon:14},medium:{button:36,icon:16},large:{button:44,icon:18}},VW={"top-right":{top:10,right:10},"bottom-right":{bottom:10,right:10},"top-left":{top:10,left:10},"bottom-left":{bottom:10,left:10}},HW=`
  @keyframes shareButtonSlideIn {
    from { opacity: 0; transform: translateX(20px); }
    to { opacity: 1; transform: translateX(0); }
  }
`;function GW({config:e,context:t}){const{platforms:n=["facebook","twitter","pinterest"],position:o="top-right",showOnHover:r=!1,url:a,title:i="分享图片",description:s="",ogImage:l,onShare:c,style:u={},size:d="medium"}=e,[p,h]=N.useState(!r),[v,w]=N.useState(!1),$=a??(typeof window<"u"?window.location.href:""),f={url:$,title:i,description:s,ogImage:l??t.src},m=P=>{var k;const C=ed[P];C&&(P==="wechat"?(alert("请复制链接到微信分享"),(k=navigator.clipboard)==null||k.writeText($)):window.open(C.getShareUrl(f),"_blank","width=600,height=400"),c==null||c(P))},g=WW[d],b={position:"absolute",...VW[o],display:"flex",flexDirection:"column",gap:6,zIndex:10,opacity:p?1:0,transform:p?"scale(1)":"scale(0.8)",transition:"all 0.3s ease",pointerEvents:"auto",...u},x={width:g.button,height:g.button,borderRadius:"50%",backgroundColor:"#fff",border:"2px solid #ddd",display:"flex",alignItems:"center",justifyContent:"center",cursor:"pointer",boxShadow:"0 2px 8px rgba(0,0,0,0.15)",fontSize:g.icon,fontWeight:"bold",transition:"all 0.2s ease"};return y.jsxs(y.Fragment,{children:[r&&y.jsx("div",{style:{position:"absolute",top:0,left:0,right:0,bottom:0,zIndex:9,pointerEvents:"auto"},onMouseEnter:()=>h(!0),onMouseLeave:()=>{h(!1),w(!1)}}),y.jsxs("div",{style:b,children:[y.jsx("div",{style:x,onClick:()=>w(!v),title:"分享",children:y.jsx("span",{children:"📤"})}),v&&n.map((P,C)=>{const k=ed[P];if(!k)return null;const I={width:g.button,height:g.button,borderRadius:"50%",backgroundColor:k.color,color:"#fff",border:"none",display:"flex",alignItems:"center",justifyContent:"center",cursor:"pointer",boxShadow:"0 2px 8px rgba(0,0,0,0.15)",fontSize:g.icon,fontWeight:"bold",animation:`shareButtonSlideIn 0.3s ease-out ${C*.05}s both`,transition:"all 0.2s ease"};return y.jsx("div",{style:I,onClick:()=>m(P),onMouseEnter:_=>_.currentTarget.style.transform="scale(1.1)",onMouseLeave:_=>_.currentTarget.style.transform="scale(1)",title:`分享到 ${k.name}`,children:k.icon},P)})]}),y.jsx("style",{children:HW})]})}function qW(e={}){return{name:"social-share",version:"1.0.0",config:e,hooks:{renderOverlay:t=>t.imageState.isLoaded?y.jsx(GW,{config:e,context:t}):null}}}const QW="SocialSharePlugin",KW="社交分享：在商品图片上显示社交分享按钮，支持 6 大平台、悬停展开、自定义尺寸与分享回调。",YW="2.0.0",XW=["ecommerce","电商核心"],ZW=[{name:"platforms",type:'Array<"facebook"|"twitter"|"pinterest"|"linkedin"|"whatsapp"|"wechat">',default:'["facebook","twitter","pinterest"]',description:"分享平台列表"},{name:"position",type:'"top-left" | "top-right" | "bottom-left" | "bottom-right"',default:'"top-right"',description:"主按钮位置"},{name:"showOnHover",type:"boolean",default:"false",description:"悬停显示模式"},{name:"title",type:"string",default:'"分享图片"',description:"分享标题"},{name:"description",type:"string",default:'""',description:"分享描述"},{name:"ogImage",type:"string",default:"undefined",description:"Pinterest 等使用的媒体图"},{name:"size",type:'"small" | "medium" | "large"',default:'"medium"',description:"按钮尺寸"},{name:"onShare",type:"(platform) => void",default:"undefined",description:"分享回调"},{name:"style",type:"React.CSSProperties",default:"{}",description:"自定义容器样式"}],JW=`// 1. 指定分享平台，点击展开具体入口
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
<ShareImage src="https://picsum.photos/id/237/500/400" alt="商品图" />;`,eV=[{name:"默认分享按钮",description:"点击主按钮展开具体平台，再点平台进行分享。",src:"https://picsum.photos/id/237/500/400",config:{platforms:["facebook","twitter","pinterest"],position:"top-right",showOnHover:!1,title:"Amazing Product",description:"Check out this amazing product!"}},{name:"悬停显示（鼠标悬停时出现）",description:"默认隐藏，鼠标悬停图片才显示分享按钮。",src:"https://picsum.photos/id/247/500/400",config:{platforms:["facebook","twitter","linkedin","whatsapp"],position:"top-right",showOnHover:!0,size:"medium"}},{name:"更多平台（包含微信）",description:"小尺寸、右下角，覆盖 6 个平台。",src:"https://picsum.photos/id/257/500/400",config:{platforms:["facebook","twitter","pinterest","linkedin","whatsapp","wechat"],position:"bottom-right",showOnHover:!1,size:"small"}},{name:"大尺寸按钮",description:"左上角大尺寸分享按钮。",src:"https://picsum.photos/id/267/500/400",config:{platforms:["facebook","twitter","pinterest"],position:"top-left",showOnHover:!1,size:"large"}}],tV=["支持 6 大社交平台：Facebook / Twitter / Pinterest / LinkedIn / WhatsApp / WeChat","悬停显示模式","3 种尺寸可选（small / medium / large）","4 个位置可选","展开 / 收起动画","分享回调通知","自定义分享标题和描述"],nV=["电商产品分享","内容营销推广","作品集展示","照片 / 图片社区","礼物推荐分享","房产 / 旅游分享"],oV=["`showOnHover: true` 时分享条只在悬停出现；示例页默认常驻便于观察。","微信没有可直接打开的分享 URL，走 `onShare` 回调由业务方接入。"],rV={name:QW,description:KW,since:YW,tags:XW,config:ZW,example:JW,examples:eV,features:tV,useCases:nV,notes:oV},aV={small:{size:48,iconSize:20},medium:{size:64,iconSize:28},large:{size:80,iconSize:36}},iV={center:{top:"50%",left:"50%",transform:"translate(-50%, -50%)"},"top-left":{top:20,left:20},"top-right":{top:20,right:20},"bottom-left":{bottom:20,left:20},"bottom-right":{bottom:20,right:20}},td=`
  @keyframes videoModalFadeIn { from { opacity: 0; } to { opacity: 1; } }
  @keyframes videoPosterPulse {
    0%, 100% { transform: scale(1); }
    50% { transform: scale(1.05); }
  }
`;function sV({config:e,context:t}){const{videoUrl:n,autoPlay:o=!0,loop:r=!1,muted:a=!0,playButtonPosition:i="center",playButtonSize:s="large",playButtonStyle:l={},showPlayButton:c=!0,onPlay:u,playInModal:d=!0,playIcon:p}=e,[h,v]=N.useState(!1),w=()=>{v(!0),u==null||u()},$=aV[s],f={position:"absolute",...iV[i],width:$.size,height:$.size,borderRadius:"50%",backgroundColor:"rgba(0, 0, 0, 0.7)",border:"3px solid rgba(255, 255, 255, 0.9)",display:"flex",alignItems:"center",justifyContent:"center",cursor:"pointer",zIndex:10,transition:"all 0.3s ease",...l};return h&&d?y.jsxs(y.Fragment,{children:[y.jsxs("div",{style:{position:"fixed",top:0,left:0,right:0,bottom:0,backgroundColor:"rgba(0, 0, 0, 0.9)",zIndex:9999,display:"flex",alignItems:"center",justifyContent:"center",animation:"videoModalFadeIn 0.3s ease-out"},onClick:()=>v(!1),children:[y.jsx("button",{style:{position:"absolute",top:20,right:20,width:40,height:40,borderRadius:"50%",backgroundColor:"rgba(255,255,255,0.2)",border:"2px solid white",color:"white",fontSize:24,cursor:"pointer",display:"flex",alignItems:"center",justifyContent:"center",zIndex:10001},onClick:()=>v(!1),children:"×"}),y.jsx("video",{src:n,controls:!0,autoPlay:o,loop:r,muted:a,style:{maxWidth:"90%",maxHeight:"90%",borderRadius:8,boxShadow:"0 10px 40px rgba(0,0,0,0.5)"},onClick:m=>m.stopPropagation()})]}),y.jsx("style",{children:td})]}):h&&!d?y.jsxs("div",{style:{position:"absolute",top:0,left:0,right:0,bottom:0,backgroundColor:"#000",zIndex:10},children:[y.jsx("button",{style:{position:"absolute",top:10,right:10,width:32,height:32,borderRadius:"50%",backgroundColor:"rgba(255,255,255,0.2)",border:"2px solid white",color:"white",fontSize:20,cursor:"pointer",display:"flex",alignItems:"center",justifyContent:"center",zIndex:11},onClick:()=>v(!1),children:"×"}),y.jsx("video",{src:n,controls:!0,autoPlay:o,loop:r,muted:a,style:{width:"100%",height:"100%",objectFit:"contain"}})]}):c?y.jsxs(y.Fragment,{children:[y.jsx("div",{style:f,onClick:w,onMouseEnter:m=>{m.currentTarget.style.backgroundColor="rgba(0, 0, 0, 0.85)",i==="center"?m.currentTarget.style.transform="translate(-50%, -50%) scale(1.1)":m.currentTarget.style.transform="scale(1.1)"},onMouseLeave:m=>{m.currentTarget.style.backgroundColor="rgba(0, 0, 0, 0.7)",i==="center"?m.currentTarget.style.transform="translate(-50%, -50%) scale(1)":m.currentTarget.style.transform="scale(1)"},title:"播放视频",children:p??y.jsx("svg",{width:$.iconSize,height:$.iconSize,viewBox:"0 0 24 24",fill:"white",style:{marginLeft:2},children:y.jsx("path",{d:"M8 5v14l11-7z"})})}),y.jsx("style",{children:td})]}):null}function lV(e){return{name:"video-poster",version:"1.0.0",config:e,hooks:{renderOverlay:t=>t.imageState.isLoaded?y.jsx(sV,{config:e,context:t}):null}}}const cV="VideoPosterPlugin",uV="视频海报：将图片作为视频封面，点击播放视频（模态框或内联），支持自动播放、循环、静音与自定义按钮。",dV="2.0.0",pV=["ecommerce","电商核心"],mV=[{name:"videoUrl",type:"string",default:"undefined",description:"视频 URL"},{name:"autoPlay",type:"boolean",default:"true",description:"自动播放"},{name:"loop",type:"boolean",default:"false",description:"循环播放"},{name:"muted",type:"boolean",default:"true",description:"静音（移动端自动播放需静音）"},{name:"playButtonPosition",type:'"center" | "top-left" | "top-right" | "bottom-left" | "bottom-right"',default:'"center"',description:"播放按钮位置"},{name:"playButtonSize",type:'"small" | "medium" | "large"',default:'"large"',description:"按钮尺寸"},{name:"playButtonStyle",type:"React.CSSProperties",default:"{}",description:"自定义按钮样式"},{name:"showPlayButton",type:"boolean",default:"true",description:"是否显示播放按钮"},{name:"playInModal",type:"boolean",default:"true",description:"模态框播放（否则内联）"},{name:"playIcon",type:"ReactNode",default:"undefined",description:"自定义播放图标"},{name:"onPlay",type:"() => void",default:"undefined",description:"播放回调"}],gV=`// 1. 点击播放按钮，在模态框中播放视频
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
<VideoImage src="https://picsum.photos/id/1015/500/300" alt="商品视频封面" />;`,fV=[{name:"基础视频海报（模态框播放）",description:"点击图片中心播放按钮，在模态框中播放视频。",src:"https://picsum.photos/id/1015/500/300",config:{videoUrl:"https://www.w3schools.com/html/mov_bbb.mp4",playButtonPosition:"center",playButtonSize:"large"}},{name:"内联播放模式",description:"视频直接在图片位置播放，不弹出模态框。",src:"https://picsum.photos/id/1018/500/300",config:{videoUrl:"https://www.w3schools.com/html/movie.mp4",playInModal:!1,playButtonPosition:"center",playButtonSize:"medium",autoPlay:!0,loop:!0,muted:!0}},{name:"自定义播放按钮样式",description:"按钮位于右下角，红色背景，小尺寸。",src:"https://picsum.photos/id/1019/500/300",config:{videoUrl:"https://www.w3schools.com/html/mov_bbb.mp4",playButtonPosition:"bottom-right",playButtonSize:"small",playButtonStyle:{backgroundColor:"rgba(255, 59, 48, 0.9)",border:"2px solid white"}}},{name:"自定义播放图标",description:"示例以默认三角形呈现；可用 playIcon 替换为自定义图标（如 “PLAY” 文字）。",src:"https://picsum.photos/id/1020/500/300",config:{videoUrl:"https://www.w3schools.com/html/mov_bbb.mp4",playButtonPosition:"center",playButtonSize:"large"}},{name:"不同按钮位置",description:"播放按钮位于左上角，绿色背景。",src:"https://picsum.photos/id/1021/500/300",config:{videoUrl:"https://www.w3schools.com/html/mov_bbb.mp4",playButtonPosition:"top-left",playButtonSize:"small",playButtonStyle:{backgroundColor:"rgba(52, 199, 89, 0.9)"}}}],hV=["使用提示：确保视频 URL 可访问，否则播放会失败；移动端自动播放可能受浏览器限制，建议设置 muted=true；大视频文件建议使用流媒体服务；模态框播放体验更好但会阻断其它交互；内联播放适合小尺寸视频预览。"],yV=["模态框播放（全屏）","内联播放（图片位置直接播）","自定义播放按钮大小 / 位置 / 样式","多位置支持（center / top-left / bottom-left / bottom-right）","播放控制（自动播放 / 循环 / 静音）","自定义图标"],vV=["视频网站","在线教育","电商平台（商品视频展示）","新闻媒体","视频博客","企业官网"],bV={name:cV,description:uV,since:dV,tags:pV,config:mV,example:gV,examples:fV,notes:hV,features:yV,useCases:vV};function wV(){return typeof navigator>"u"?"en":(navigator.language||navigator.userLanguage||"en").split("-")[0].toLowerCase()}function xV(e){const{localeMap:t,defaultLocale:n="en",currentLocale:o,autoDetect:r=!0,detectLocale:a,fallbackSrc:i}=e;let s=0;return{name:`localization-${++s}`,version:"1.0.0",config:e,hooks:{onLoad:l=>{const c=l.src;let u=o;!u&&r&&(u=a?a():wV()),u=u||n;let d=t[u];return!d&&u!==n&&(d=t[n]),d=d||i||c,d}}}}const PV="LocalizationPlugin",$V="国际化：根据用户语言环境自动切换图片，支持手动指定、自动检测、自定义检测函数与后备图片。",SV="2.0.0",CV=["ecommerce","电商核心"],kV=[{name:"localeMap",type:"Record<string, string>",default:"undefined",description:"语言 → 图片 URL 映射"},{name:"defaultLocale",type:"string",default:'"en"',description:"默认语言（后备）"},{name:"currentLocale",type:"string",default:"undefined",description:"手动指定当前语言"},{name:"autoDetect",type:"boolean",default:"true",description:"是否自动检测浏览器语言"},{name:"detectLocale",type:"() => string",default:"undefined",description:"自定义语言检测函数"},{name:"fallbackSrc",type:"string",default:"undefined",description:"最终后备图片 URL"}],LV=`// 1. 按浏览器语言自动切换图片
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
<I18nImage src="https://picsum.photos/id/1015/500/300" alt="多语言图片" />;`,IV=[{name:"手动切换语言",description:"手动指定 currentLocale 展示对应语言图片（此处以 en 为例）。",src:"https://picsum.photos/id/1015/500/300",config:{localeMap:{en:"https://picsum.photos/id/1015/500/300",zh:"https://picsum.photos/id/1016/500/300",ja:"https://picsum.photos/id/1018/500/300",ko:"https://picsum.photos/id/1019/500/300"},currentLocale:"en",autoDetect:!1,defaultLocale:"en"}},{name:"自动检测浏览器语言",description:"根据浏览器语言自动选择图片（支持 en/zh/fr/de/es）。",src:"https://picsum.photos/id/1020/500/300",config:{localeMap:{en:"https://picsum.photos/id/1020/500/300",zh:"https://picsum.photos/id/1021/500/300",fr:"https://picsum.photos/id/1022/500/300",de:"https://picsum.photos/id/1023/500/300",es:"https://picsum.photos/id/1024/500/300"},autoDetect:!0,defaultLocale:"en"}},{name:"自定义语言检测",description:"通过 detectLocale() 从 localStorage 读取偏好（示例中简写为自动检测）。",src:"https://picsum.photos/id/1025/500/300",config:{localeMap:{en:"https://picsum.photos/id/1025/500/300",zh:"https://picsum.photos/id/1026/500/300",ja:"https://picsum.photos/id/1027/500/300"},defaultLocale:"en",autoDetect:!0}},{name:"后备图片机制",description:"请求的语言（ru）不在映射中 → 显示 fallbackSrc 后备图片。",src:"https://picsum.photos/id/1030/500/300",config:{localeMap:{en:"https://picsum.photos/id/1028/500/300",zh:"https://picsum.photos/id/1029/500/300"},currentLocale:"ru",defaultLocale:"en",fallbackSrc:"https://picsum.photos/id/1030/500/300"}}],_V=["最佳实践：始终提供 defaultLocale 作为后备；localeMap 至少包含常用语言（en、zh 等）；图片 URL 应指向稳定可访问的资源；建议使用 CDN 加速不同地区的图片加载；可结合用户设置和浏览器检测；开发环境建议打开 console 查看语言检测日志。"],EV=["多语言支持（任意语言环境）","自动检测浏览器语言","默认回退语言","自定义检测函数","后备机制（最终后备图片 URL）","动态切换（运行时切换语言）"],RV=["国际化网站","品牌宣传","多语言 App","电商平台（商品本地化展示）","新闻媒体","在线教育"],zV={name:PV,description:$V,since:SV,tags:CV,config:kV,example:LV,examples:IV,notes:_V,features:EV,useCases:RV},OV={small:{size:32,iconSize:16},medium:{size:40,iconSize:20},large:{size:48,iconSize:24}},DV={"top-left":{top:10,left:10},"top-right":{top:10,right:10},"bottom-left":{bottom:10,left:10},"bottom-right":{bottom:10,right:10}},TV=`
  @keyframes downloadSpin {
    from { transform: rotate(0deg); }
    to { transform: rotate(360deg); }
  }
`;function jV({config:e,context:t}){const{filename:n,position:o="top-right",size:r="medium",buttonStyle:a={},showOnHover:i=!1,onBeforeDownload:s,onDownloadSuccess:l,onDownloadError:c,customIcon:u,showTooltip:d=!0,tooltipText:p="下载图片"}=e,[h,v]=N.useState(!1),[w,$]=N.useState(!1),f=OV[r],m=async b=>{b.stopPropagation();try{$(!0),await(s==null?void 0:s(t.src));const x=n||t.src.split("/").pop()||"download.jpg",P=await(await fetch(t.src)).blob(),C=window.URL.createObjectURL(P),k=document.createElement("a");k.href=C,k.download=x,document.body.appendChild(k),k.click(),document.body.removeChild(k),window.URL.revokeObjectURL(C),l==null||l(x)}catch(x){console.error("[DownloadButtonPlugin] Download failed:",x),c==null||c(x)}finally{$(!1)}},g={position:"absolute",...DV[o],width:f.size,height:f.size,borderRadius:"50%",backgroundColor:"rgba(0, 0, 0, 0.6)",border:"2px solid rgba(255, 255, 255, 0.8)",display:"flex",alignItems:"center",justifyContent:"center",cursor:w?"wait":"pointer",zIndex:10,opacity:i&&!h?0:1,transform:h?"scale(1.1)":"scale(1)",transition:"all 0.3s ease",...a};return y.jsxs(y.Fragment,{children:[i&&y.jsx("div",{style:{position:"absolute",top:0,left:0,right:0,bottom:0,zIndex:9,pointerEvents:"auto"},onMouseEnter:()=>v(!0),onMouseLeave:()=>v(!1)}),y.jsx("div",{style:g,onClick:m,title:d?p:void 0,children:u??(w?y.jsx("svg",{width:f.iconSize,height:f.iconSize,viewBox:"0 0 24 24",fill:"white",style:{animation:"downloadSpin 1s linear infinite"},children:y.jsx("circle",{cx:"12",cy:"12",r:"10",stroke:"white",strokeWidth:"2",fill:"none",strokeDasharray:"31.4",strokeDashoffset:"10"})}):y.jsx("svg",{width:f.iconSize,height:f.iconSize,viewBox:"0 0 24 24",fill:"white",children:y.jsx("path",{d:"M19 9h-4V3H9v6H5l7 7 7-7zM5 18v2h14v-2H5z"})}))}),y.jsx("style",{children:TV})]})}function AV(e={}){return{name:"download-button",version:"1.0.0",config:e,hooks:{renderOverlay:t=>t.imageState.isLoaded?y.jsx(jV,{config:e,context:t}):null}}}const MV="DownloadButtonPlugin",BV="下载按钮：为图片添加一键下载功能，支持多位置、自定义样式、悬停显示与生命周期回调。",NV="2.0.0",FV=["ecommerce","电商核心"],UV=[{name:"filename",type:"string",default:"undefined",description:"下载文件名"},{name:"position",type:'"top-left" | "top-right" | "bottom-left" | "bottom-right"',default:'"top-right"',description:"按钮位置"},{name:"size",type:'"small" | "medium" | "large"',default:'"medium"',description:"按钮尺寸"},{name:"buttonStyle",type:"React.CSSProperties",default:"{}",description:"自定义按钮样式"},{name:"showOnHover",type:"boolean",default:"false",description:"仅悬停时显示"},{name:"onBeforeDownload",type:"(src) => void | Promise<void>",default:"undefined",description:"下载前回调（可做权限校验）"},{name:"onDownloadSuccess",type:"(filename) => void",default:"undefined",description:"下载成功回调"},{name:"onDownloadError",type:"(error) => void",default:"undefined",description:"下载失败回调"},{name:"customIcon",type:"ReactNode",default:"undefined",description:"自定义图标"},{name:"tooltipText",type:"string",default:'"下载图片"',description:"提示文案"}],WV=`// 1. 右上角下载按钮，成功后回调
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
<DownloadImage src="https://picsum.photos/id/1015/500/300" alt="可下载图片" />;`,VV=[{name:"基础下载功能",description:"点击右上角下载按钮，保存图片（文件名 my-image.jpg）。",src:"https://picsum.photos/id/1015/500/300",config:{filename:"my-image.jpg",position:"top-right",size:"medium"}},{name:"悬停显示按钮",description:"默认隐藏，鼠标悬停图片左上角出现大号下载按钮。",src:"https://picsum.photos/id/1018/500/300",config:{position:"top-left",size:"large",showOnHover:!0,tooltipText:"点击下载高清图片"}},{name:"自定义位置和大小",description:"左下角小号绿色下载按钮。",src:"https://picsum.photos/id/1019/500/300",config:{position:"bottom-left",size:"small",buttonStyle:{backgroundColor:"rgba(52, 199, 89, 0.9)"}}},{name:"自定义按钮样式",description:"右下角红色方形下载按钮。",src:"https://picsum.photos/id/1020/500/300",config:{position:"bottom-right",size:"medium",buttonStyle:{backgroundColor:"rgba(255, 59, 48, 0.9)",borderRadius:"8px",border:"none"},tooltipText:"下载原图"}},{name:"下载生命周期回调",description:"下载前后触发回调（可权限校验 / 统计上报）；示例中省略函数，见用法示例。",src:"https://picsum.photos/id/1021/500/300",config:{filename:"premium-photo.jpg",position:"top-right",size:"large"}},{name:"自定义下载图标",description:"示例以默认图标呈现；可用 customIcon 替换为自定义图标。",src:"https://picsum.photos/id/1022/500/300",config:{position:"top-right",size:"medium",buttonStyle:{backgroundColor:"rgba(88, 86, 214, 0.9)"}}}],HV=["下载提示：下载需要图片 URL 支持 CORS，否则可能失败；跨域图片需服务器设置 Access-Control-Allow-Origin；filename 应包含合适的文件扩展名（.jpg / .png 等）；大文件下载时会有短暂延迟，建议显示加载状态；移动端下载体验可能因浏览器而异；可在 onBeforeDownload 中进行权限检查。"],GV=["一键下载（点击按钮即可下载图片）","多位置支持（4 个角落）","自定义样式（大小 / 颜色 / 形状）","悬停显示模式","生命周期回调（下载前 / 后 / 失败）","自定义图标"],qV=["图片网站（用户下载高清图）","设计平台（下载设计作品）","新闻媒体","电商平台（下载商品图片）","在线教育（下载教学资料）","企业官网（下载宣传图）"],QV={name:MV,description:BV,since:NV,tags:FV,config:UV,example:WV,examples:VV,notes:HV,features:GV,useCases:qV},KV=Object.assign(B9,{meta:Y9}),YV=Object.assign(tW,{meta:pW}),XV=Object.assign(hW,{meta:LW}),ZV=Object.assign(RW,{meta:UW}),JV=Object.assign(qW,{meta:rV}),e7=Object.assign(lV,{meta:bV}),t7=Object.assign(xV,{meta:zV}),n7=Object.assign(AV,{meta:QV}),Ur=(()=>{const e=new Map;function t(r){let a=e.get(r);return a||(a={current:0,queue:[]},e.set(r,a)),a}async function n(r,a,i,s){const l=t(r);if(l.current<a){l.current+=1,i&&console.debug(`[ConcurrencyGate] acquire immediate: ${r} -> ${l.current}/${a}`);return}i&&console.debug(`[ConcurrencyGate] queued: ${r} size=${l.queue.length+1}`),await new Promise((c,u)=>{const d={resolve:()=>{d.timer&&clearTimeout(d.timer),l.current+=1,i&&console.debug(`[ConcurrencyGate] acquire from queue: ${r} -> ${l.current}/${a}`),c()},reject:u};s&&s>0&&(d.timer=setTimeout(()=>{const p=l.queue.indexOf(d);p>=0&&l.queue.splice(p,1),i&&console.debug(`[ConcurrencyGate] acquire timeout: ${r} after ${s}ms`),u==null||u(new Error(`acquire timeout for ${r}`))},s)),l.queue.push(d)})}function o(r,a,i){const s=t(r);s.current>0&&(s.current-=1),i&&console.debug(`[ConcurrencyGate] release: ${r} -> ${s.current}/${a}`);const l=s.queue.shift();l&&l.resolve()}return{acquire:n,release:o}})();function ji(e,t){if(t==="global")return"__global__";try{return`host:${new URL(e,typeof window<"u"?window.location.origin:"http://localhost").hostname}`}catch{return"__global__"}}function o7(e={}){const{maxConcurrent:t=4,scope:n="global",adaptive:o=!0,acquireTimeoutMs:r=8e3,debug:a=!1}=e;function i(s,l){var u,d;if(!o)return s;const c=(u=l.networkInfo)==null?void 0:u.effectiveType;if((d=l.networkInfo)!=null&&d.saveData)return 1;switch(c){case"slow-2g":case"2g":return 1;case"3g":return Math.max(1,Math.floor(s/2));case"4g":default:return s}}return{name:"concurrency-control",version:"1.0.0",config:e,hooks:{onLoad:async s=>{var u;const l=ji(s.src,n),c=i(t,s);try{await Ur.acquire(l,c,a,r)}catch(d){a&&console.debug("[ConcurrencyControl] proceed without permit due to:",d);return}try{(u=s.sharedData)==null||u.set("cc:key",l)}catch{}},onLoadSuccess:s=>{var u;const l=((u=s.sharedData)==null?void 0:u.get("cc:key"))||ji(s.src,n),c=i(t,s);Ur.release(l,c,a)},onLoadError:s=>{var u;const l=((u=s.sharedData)==null?void 0:u.get("cc:key"))||ji(s.src,n),c=i(t,s);return Ur.release(l,c,a),!0},onUnmount:s=>{var c,u;const l=(c=s.sharedData)==null?void 0:c.get("cc:key");if(typeof l=="string"){const d=i(t,s);Ur.release(l,d,a);try{(u=s.sharedData)==null||u.delete("cc:key")}catch{}}}}}}const r7="ConcurrencyControlPlugin",a7="并发控制：限制同时加载数量，支持按域名分片与网络自适应。",i7="2.0.0",s7=["loading","加载策略"],l7=[{name:"maxConcurrent",type:"number",default:"4",description:"并发上限（4g 情况的上限）"},{name:"scope",type:'"global" | "perHost"',default:'"global"',description:"作用域：全局或按域名分片"},{name:"adaptive",type:"boolean",default:"true",description:"是否根据网络自适应并发（saveData/2g/3g 降低并发）"},{name:"acquireTimeoutMs",type:"number",default:"8000",description:"获取并发许可的超时（毫秒），超时后不阻塞加载，避免饥饿"},{name:"debug",type:"boolean",default:"false",description:"调试输出"}],c7=`const LazyImage = withPlugins(LazyLoadImageCore, [
  createConcurrencyControlPlugin({
    maxConcurrent: 6,
    scope: "perHost", // 按域名分片，避免单域阻塞
    adaptive: true,    // 弱网自动降低并发
  }),
]);`,u7=[{name:"全局并发限制",description:"限制整页同时加载不超过 4 张，避免带宽被瞬间打满。",config:{maxConcurrent:4,scope:"global"}},{name:"按域名分片",description:"每个域名独立并发配额，混合多 CDN 时不互相拖累。",config:{maxConcurrent:6,scope:"perHost",adaptive:!0}}],d7=["全局或按域名（perHost）分片并发门控","弱网（saveData / 2g / 3g）下自适应降低并发","acquireTimeoutMs 后不阻塞加载，避免饥饿"],p7=["瀑布流海量图片，避免一次性发起上百请求","弱网环境限制并发以保住首屏体验"],m7=["acquireTimeoutMs 保证极端情况下不会永久挂起。","与 ScrollIdle 搭配可进一步错峰、降低峰值并发。","并发许可在加载完成后释放，供队列中下一张使用。"],g7={name:r7,description:a7,since:i7,tags:s7,config:l7,example:c7,examples:u7,features:d7,useCases:p7,notes:m7};function f7(e,t,n){try{const o=new URL(e,typeof window<"u"?window.location.origin:"http://localhost");return o.searchParams.set(t,n),o.toString()}catch{const o=e.includes("?")?"&":"?";return`${e}${o}${encodeURIComponent(t)}=${encodeURIComponent(n)}`}}function h7(e={}){const{respectSaveData:t=!0,fallbackQuality:n=.6,disablePreload:o=!0,qualityParam:r="quality"}=e;return{name:"data-saver",version:"1.0.0",config:e,hooks:{transformProps:a=>{var i;try{const s=((i=navigator==null?void 0:navigator.connection)==null?void 0:i.saveData)===!0;if(!t||!s)return a;const l=Math.max(0,Math.min(1,n)),c=f7(a.src,r,String(l)),u={...a,src:c};return o&&(u.loading="lazy"),u}catch{return a}}}}}const y7="DataSaverPlugin",v7="省流模式：saveData 开启时降低质量参数并禁用预加载。",b7="2.0.0",w7=["loading","加载策略"],x7=[{name:"respectSaveData",type:"boolean",default:"true",description:"仅在 navigator.connection.saveData=true 时降质（关闭则强制降质）"},{name:"fallbackQuality",type:"number",default:"0.6",description:"0..1"},{name:"disablePreload",type:"boolean",default:"true",description:"省流量模式下禁用 preload / prefetch 预取"},{name:"qualityParam",type:"string",default:'"quality"',description:'query param name, e.g. "quality" or "q"'}],P7=`const LazyImage = withPlugins(LazyLoadImageCore, [
  createDataSaverPlugin({
    respectSaveData: true, // 尊重系统省流开关
    fallbackQuality: 0.5,  // 省流时质量降到 0.5
    qualityParam: "q",     // 追加 ?q=0.5
  }),
]);`,$7=[{name:"尊重系统省流",description:"检测到 saveData 时自动降质并禁用预加载，仅在省流模式下生效。",config:{respectSaveData:!0,fallbackQuality:.5,qualityParam:"q"}},{name:"始终省流",description:"忽略系统开关，始终追加低质量参数，适合极端省流场景。",config:{respectSaveData:!1,fallbackQuality:.4,disablePreload:!0}}],S7=["读取 navigator.connection.saveData，开启时自动降质","自动追加质量查询参数（如 ?q=0.6）","可选禁用预加载以进一步省流"],C7=["移动端弱流量用户自动减负","按运营策略全局降质"],k7=["依赖业务 CDN 支持对应质量参数，否则参数无效。","respectSaveData=false 时按 fallbackQuality 强制降质（无视系统开关）。","与 ImageOptimization 叠加时，省流质量会进一步覆盖优化质量。"],L7={name:y7,description:v7,since:b7,tags:w7,config:x7,example:P7,examples:$7,features:S7,useCases:C7,notes:k7},I7=typeof window<"u"&&window.requestIdleCallback?window.requestIdleCallback:(e,t)=>setTimeout(e,(t==null?void 0:t.timeout)??0);function _7(e={}){const{enabled:t=!0,timeoutMs:n=600}=e;return{name:"decode-after-idle",version:"1.0.0",config:e,hooks:{onLoadSuccess:o=>{var a;if(!t)return;const r=(a=o.imageRef)==null?void 0:a.current;!r||!r.decode||I7(async()=>{var i;try{await((i=r.decode)==null?void 0:i.call(r))}catch{}},{timeout:n})},transformProps:o=>({...o,decoding:"async"})}}}const E7="DecodeAfterIdlePlugin",R7="空闲解码：图片加载成功后延迟到浏览器空闲时段再执行 img.decode()，避免大图解码阻塞主线程，提升交互流畅度。",z7="2.0.0",O7=["loading","加载策略","解码","性能"],D7=[{name:"enabled",type:"boolean",default:"true",description:"是否启用空闲解码"},{name:"timeoutMs",type:"number",default:"600",description:"最长等待空闲的兜底时间(ms)"}],T7=`import { LazyLoadImageCore, createDecodeAfterIdlePlugin, withPlugins } from "vane-lazy-image";

const LazyImage = withPlugins(LazyLoadImageCore, [
  createDecodeAfterIdlePlugin({ enabled: true, timeoutMs: 1000 }),
]);

<LazyImage src="https://picsum.photos/seed/decode/1200/800" alt="空闲解码示例" />`,j7=[{name:"默认空闲解码",description:"成功后于空闲时段执行 decode，并设置 decoding=async。",src:"https://picsum.photos/seed/decode/1200/800",config:{}},{name:"自定义超时",description:"放宽最长等待空闲时间到 1000ms。",src:"https://picsum.photos/seed/decode-timeout/1200/800",config:{timeoutMs:1e3}}],A7=["成功后 requestIdleCallback 内调用 img.decode()",'自动设置 decoding="async"',"requestIdleCallback 不可用时回退 setTimeout"],M7=["图片密集型信息流防止解码卡顿","首屏后延迟解码，优先保证交互响应"],B7=["timeoutMs 控制最长等待空闲的兜底时间","decode 失败被静默忽略，不影响显示"],N7={name:E7,description:R7,since:z7,tags:O7,config:D7,example:T7,examples:j7,features:A7,useCases:M7,notes:B7};function Ai(e,t="anonymous"){if(typeof document>"u")return;const n=`lli-preconnect-${e}`;if(document.getElementById(n))return;const o=document.createElement("link");o.id=n,o.rel="preconnect",o.href=e,t&&(o.crossOrigin=t),document.head.appendChild(o)}function nd(e){if(typeof document>"u")return;const t=`lli-preconnect-${e}`,n=document.getElementById(t);n&&n.remove()}function Mi(e){try{const t=new URL(e,typeof window<"u"?window.location.origin:"http://localhost");return`${t.protocol}//${t.host}`}catch{return null}}const F7=ug("lli-preconnect-","已预连");function U7(e={}){const{showBadge:t=!1}=e;return{name:"preconnect",version:"2.0.0",config:e,hooks:{onMount:n=>{const o=Mi(n.src);o&&Ai(o,e.crossOrigin??"anonymous"),e.domains&&Array.isArray(e.domains)&&e.domains.forEach(r=>Ai(r,e.crossOrigin??"anonymous"))},onUnmount:n=>{const o=Mi(n.src);o&&nd(o),e.domains&&Array.isArray(e.domains)&&e.domains.forEach(r=>nd(r))},onSrcChange:(n,o,r)=>{const a=Mi(r);a&&Ai(a,e.crossOrigin??"anonymous")},renderOverlay:()=>t?N.createElement(F7):null}}}const W7="PreconnectPlugin",V7="DNS 预连接：提前与图片域名建立连接，可配置跨域。",H7="2.0.0",G7=["loading","加载策略"],q7=[{name:"domains",type:"string[]",description:"额外预连接域名"},{name:"crossOrigin",type:"string | null",description:'"anonymous" | "use-credentials" | null'},{name:"showBadge",type:"boolean",default:"false",description:"是否在卡片上显示「已预连 N」徽标（便于观察注入效果）"}],Q7=`const LazyImage = withPlugins(LazyLoadImageCore, [
  createPreconnectPlugin({
    domains: ["https://cdn.example.com", "https://img.example.com"],
    crossOrigin: "anonymous",
  }),
]);`,K7=[{name:"基础预连接",description:"为图片 CDN 域名提前建连，消除首图 DNS/TLS 往返，更快出现。",config:{domains:["https://picsum.photos"],crossOrigin:"anonymous",showBadge:!0}},{name:"多域名预连接",description:"同时预连接多个静态资源域名，适合跨 CDN 的图片源。",config:{domains:["https://picsum.photos","https://fastly.picsum.photos"],crossOrigin:"anonymous"}}],Y7=['挂载时注入 <link rel="preconnect">，提前完成 DNS/TCP/TLS 握手',"支持跨域凭证配置（crossOrigin: anonymous / use-credentials）","与浏览器默认预连接策略互补，相同域名不会重复注入"],X7=["图片托管在独立 CDN 域名时，消除首图握手延迟","瀑布流列表首屏涉及多个静态资源域名"],Z7=["仅注入预连接提示，不保证一定建连，实际收益取决于浏览器调度。","不宜预连接过多域名，以免占用有限的连接资源。","已在本插件内去重，重复传入相同域名只会注入一次。"],J7={name:W7,description:V7,since:H7,tags:G7,config:q7,example:Q7,examples:K7,features:Y7,useCases:X7,notes:Z7},eH=Object.assign(o7,{meta:g7}),tH=Object.assign(h7,{meta:L7}),nH=Object.assign(_7,{meta:N7}),oH=Object.assign(U7,{meta:J7});function rH(e={}){const{durationMs:t=400,easing:n="ease"}=e;return{name:"fade-in",version:"1.0.0",config:e,hooks:{onMount:o=>{let r=0;const a=()=>{var s;const i=(s=o.imageRef)==null?void 0:s.current;if(!i){r++<60&&requestAnimationFrame(a);return}try{i.style.opacity="0",i.style.transition=`opacity ${t}ms ${n}`}catch{}};a()},onLoadSuccess:o=>{var a;const r=(a=o.imageRef)==null?void 0:a.current;if(r)try{r.style.opacity="1"}catch{}}}}}const aH="FadeInPlugin",iH="加载完成后淡入显示，可自定义时长与缓动函数。",sH="2.0.0",lH=["visual","视觉"],cH=[{name:"durationMs",type:"number",default:"400",description:"淡入时长 ms"},{name:"easing",type:"string",default:"ease",description:"缓动函数（CSS easing）"}],uH=`// 加载完成后淡入
const FadeImage = withPlugins(LazyLoadImageCore, [
  createFadeInPlugin({ durationMs: 450 }),
]);

<FadeImage src="https://picsum.photos/seed/fadein/600/400" alt="淡入" />;`,dH=[{name:"默认淡入",description:"450ms 标准 ease 淡入，干净利落。",src:"https://picsum.photos/seed/fadein-default/600/400",config:{durationMs:450}},{name:"慢速缓出",description:"800ms ease-out，让图片「缓缓浮现」。",src:"https://picsum.photos/seed/fadein-slow/600/400",config:{durationMs:800,easing:"ease-out"}}],pH=["加载成功淡入显示","时长可调","缓动函数可定制（ease / ease-out / cubic-bezier 等）","与 BlurUp 互补"],mH=["画廊 / 相册图片入场","内容型站点图片显现","与滚动进入联动的柔和出现","任意需要「渐显」的场景"],gH=["easing 接受任意 CSS timing-function 字符串。","与 Transition 不同，FadeIn 仅处理「淡入」单一维度，更简单。"],fH={name:aH,description:iH,since:sH,tags:lH,config:cH,example:uH,examples:dH,features:pH,useCases:mH,notes:gH},hH=Object.assign(rH,{meta:fH});var yH=Object.defineProperty,vH=(e,t,n)=>t in e?yH(e,t,{enumerable:!0,configurable:!0,writable:!0,value:n}):e[t]=n,Jn=(e,t,n)=>vH(e,typeof t!="symbol"?t+"":t,n);let Zl=class{constructor(t,n){if(Jn(this,"cache"),Jn(this,"maxSize"),Jn(this,"onEvict"),t<=0)throw new Error("LRUCache maxSize must be greater than 0");this.cache=new Map,this.maxSize=t,this.onEvict=n}get(t){const n=this.cache.get(t);return n!==void 0&&(this.cache.delete(t),this.cache.set(t,n)),n}set(t,n){if(this.cache.has(t)&&this.cache.delete(t),this.cache.set(t,n),this.cache.size>this.maxSize){const o=this.cache.keys().next().value;if(o!==void 0){const r=this.cache.get(o);if(this.cache.delete(o),this.onEvict&&r!==void 0)try{this.onEvict(o,r)}catch(a){console.warn("[LRUCache] onEvict callback error:",a)}}}}delete(t){const n=this.cache.get(t),o=this.cache.delete(t);if(o&&this.onEvict&&n!==void 0)try{this.onEvict(t,n)}catch(r){console.warn("[LRUCache] onEvict callback error:",r)}return o}has(t){return this.cache.has(t)}clear(){this.onEvict&&this.cache.forEach((t,n)=>{try{this.onEvict(n,t)}catch(o){console.warn("[LRUCache] onEvict callback error:",o)}}),this.cache.clear()}get size(){return this.cache.size}keys(){return this.cache.keys()}values(){return this.cache.values()}forEach(t){this.cache.forEach(t)}};class bH{constructor(t=1e3,n=10){Jn(this,"samples",[]),Jn(this,"windowSize"),Jn(this,"maxSamples"),this.windowSize=t,this.maxSamples=n}addSample(t){const n=Date.now();this.samples.push({bytes:t,timestamp:n});const o=n-this.windowSize;this.samples=this.samples.filter(r=>r.timestamp>o),this.samples.length>this.maxSamples&&this.samples.shift()}getSpeed(){if(this.samples.length<2)return 0;const t=this.samples[0],n=this.samples[this.samples.length-1],o=n.bytes-t.bytes,r=(n.timestamp-t.timestamp)/1e3;return r<=0?0:o/r}estimateTimeRemaining(t,n){const o=this.getSpeed();return o<=0||n<=0?0:(n-t)/o}reset(){this.samples=[]}}const Wr=new Zl(Bt.CACHE_SIZE_INFLIGHT),_n=new Zl(Bt.CACHE_SIZE_CONTROLLERS,(e,t)=>{try{t.abort()}catch{}}),Bi=new Zl(Bt.CACHE_SIZE_OBJECT_URLS,(e,t)=>{try{URL.revokeObjectURL(t)}catch{}});function wH(e={}){const{enabled:t=!0,cacheKeyFn:n,timeout:o=Bt.TIMEOUT,maxRetries:r=Bt.MAX_RETRIES,retryDelay:a=Bt.RETRY_DELAY,retryBackoff:i=Bt.RETRY_BACKOFF}=e,s=v=>{l(v.src)},l=v=>{const w=n?n(v):v,$=_n.get(w);if($){try{$.abort()}catch{}_n.delete(w)}},c=v=>{u(v.src)},u=v=>{const w=n?n(v):v,$=Bi.get(w);if($){try{URL.revokeObjectURL($)}catch{}Bi.delete(w)}},d=v=>{var w,$;try{(w=v.sharedData)!=null&&w.has("fetch-loader:object-url")&&v.sharedData.delete("fetch-loader:object-url"),($=v.sharedData)!=null&&$.has("fetch-loader:blob")&&v.sharedData.delete("fetch-loader:blob")}catch{}};async function p(v,w,$=0){try{const f=fetch(v,{signal:w}),m=new Promise((b,x)=>{setTimeout(()=>{x(new Error(`Fetch timeout after ${o}ms`))},o)}),g=await Promise.race([f,m]);if(!g.ok)throw g.status>=Ns.CLIENT_ERROR_MIN&&g.status<Ns.CLIENT_ERROR_MAX?new Error(`HTTP ${g.status}: ${g.statusText}`):new Error(`Server error: ${g.status}`);return g}catch(f){if(w.aborted||f.name==="AbortError"||$>=r||f.message&&(f.message.includes("404")||f.message.includes("403")||f.message.includes("401")))throw f;const m=a*Math.pow(i,$);if(console.debug(`[FetchLoader] Retrying (${$+1}/${r}) after ${m}ms for ${v}`),await new Promise(g=>setTimeout(g,m)),w.aborted)throw new Error("Request aborted during retry delay");return p(v,w,$+1)}}async function h(v){const w=v.src,$=n?n(w):w;if(Wr.has($))return Wr.get($);const f=(async()=>{var x,P,C;const m=new AbortController,{signal:g}=m;_n.set($,m);const b=new bH;try{const k=await p(w,g);if(!k.body){_n.delete($);return}const I=k.headers.get("content-length"),_=I?parseInt(I,10):0,M=k.body.getReader(),F=[];let D=0;try{for(;;){const{done:G,value:H}=await M.read();if(G)break;if(H){F.push(H),D+=H.length,b.addSample(D);const E={loaded:D,total:_,percent:_>0?Math.round(D/_*100):0,indeterminate:_===0,speed:b.getSpeed(),estimatedTime:b.estimateTimeRemaining(D,_),timestamp:Date.now()};(x=v.bus)==null||x.emit("progress",E)}}}finally{M.releaseLock()}const T=new Blob(F),U=URL.createObjectURL(T);Bi.set($,U),_n.delete($);try{(P=v.sharedData)==null||P.set("fetch-loader:blob",T),(C=v.sharedData)==null||C.set("fetch-loader:object-url",U)}catch{}return U}catch(k){if(_n.delete($),k.name==="AbortError"||g.aborted)return;console.warn(`[FetchLoader] Failed to load ${w}:`,k.message);return}finally{Wr.delete($)}})();return Wr.set($,f),f}return{name:"fetch-loader",version:"1.1.0",description:"fetch 流式加载并返回 objectURL；失败返回 undefined（P1-6）",priority:10,timeout:0,config:e,hooks:{async onLoad(v){if(t)try{return await h(v)}catch(w){console.warn("[FetchLoader] onLoad error:",w);return}},onSrcChange(v,w){l(w),u(w),d(v)},onUnmount(v){s(v),c(v),d(v)}}}}const xH="FetchLoaderPlugin",PH="fetch 流式加载器：将图片以 blob/objectURL 形式加载，支持进度上报（speed/ETA）、超时、指数退避重试、请求去重与 objectURL 自动回收。高优先级（domain priority 10），先于其他插件执行。",$H="2.0.0",SH=["loading","加载策略"],CH=[{name:"enabled",type:"boolean",default:"true",description:"是否启用 fetch 加载（关闭后走浏览器默认加载）"},{name:"cacheKeyFn",type:"(src: string) => string",description:"自定义去重键，默认使用 src"},{name:"maxCacheSize",type:"number",description:"in-flight 请求缓存最大条目数"},{name:"maxControllers",type:"number",description:"AbortController 缓存上限，淘汰时自动 abort"},{name:"maxObjectUrls",type:"number",description:"objectURL 缓存上限，淘汰时自动 revokeObjectURL"},{name:"timeout",type:"number",default:"30000",description:"单次请求超时（毫秒）"},{name:"maxRetries",type:"number",default:"3",description:"最大重试次数（4xx 不重试）"},{name:"retryDelay",type:"number",default:"1000",description:"首次重试延迟（毫秒）"},{name:"retryBackoff",type:"number",default:"2",description:"重试退避倍数"}],kH=`const LazyImage = withPlugins(LazyLoadImageCore, [
  createFetchLoaderPlugin({
    timeout: 20000,    // 20s 超时
    maxRetries: 5,     // 最多重试 5 次
    retryBackoff: 2,   // 指数退避
  }),
]);`,LH=[{name:"默认 fetch 加载",description:"流式加载 + 真实进度（速度 / ETA）+ 自动去重与 objectURL 回收。",config:{timeout:3e4,maxRetries:3,retryBackoff:2}},{name:"弱网增强重试",description:"更长超时与更多重试，适合不稳定网络环境。",config:{timeout:45e3,maxRetries:6,retryDelay:1500,retryBackoff:2}}],IH=["以 fetch 把图片读为 Blob/objectURL，支持流式进度（速度 / ETA）","请求超时 + 指数退避重试（4xx 不重试）","in-flight 请求去重、AbortController / objectURL 自动回收","高优先级（domain priority 10），先于其它插件执行"],_H=["需要真实下载进度条的大图 / 原图","不稳定网络下需要重试保障"],EH=["关闭 enabled 则走浏览器默认 <img> 加载。","objectURL 由插件在卸载 / 淘汰时自动 revoke，避免内存泄漏。","cacheKeyFn 为函数，需在“用法示例”中以代码传入；静态预览使用纯配置。"],RH={name:xH,description:PH,since:$H,tags:SH,config:CH,example:kH,examples:LH,features:IH,useCases:_H,notes:EH},zH=Object.assign(wH,{meta:RH}),OH="CacheIDBPlugin",DH="IndexedDB 持久缓存：跨会话缓存图片 Blob/dataURL，支持 TTL。",TH="2.0.0",jH=["cache","缓存"],AH=[{name:"enabled",type:"boolean",default:"true",description:"是否启用 IndexedDB 缓存（关闭后每次都走网络）"},{name:"dbName",type:"string",default:'"LLI-Cache"',description:"IndexedDB 数据库名，多实例共用同一个库"},{name:"storeName",type:"string",default:'"images"',description:"对象仓库名，缓存条目存在该 store 下"},{name:"ttlMs",type:"number",default:"604800000",description:"过期时间（毫秒）"},{name:"debug",type:"boolean",description:"是否输出读写 / 命中调试日志"}],MH=`const LazyImage = withPlugins(LazyLoadImageCore, [
  createIDBCachePlugin({
    dbName: "LLI-Cache",
    storeName: "images",
    ttlMs: 7 * 24 * 60 * 60 * 1000, // 7 天
  }),
]);`,BH=[{name:"默认持久缓存",description:"跨会话缓存图片 Blob，刷新 / 重开应用仍命中，秒开头部图。",config:{ttlMs:6048e5}},{name:"自定义库与过期",description:"独立库名隔离业务数据，30 天过期。",config:{dbName:"App-Img",storeName:"photos",ttlMs:2592e6}}],NH=["用 IndexedDB 持久化图片 Blob / dataURL","支持 TTL（默认 7 天），过期自动清理","优先存 Blob，其次 dataURL，节省空间"],FH=["离线优先 / PWA 图片缓存","重开应用仍需秒开的头部图、用户头像"],UH=["仅在支持 IndexedDB 的环境生效，SSR / Node 端无副作用。","与 CachePrewarmPlugin 配合可实现“进入视口即落盘”。","多实例请使用不同 dbName / storeName 避免相互覆盖。"],WH={name:OH,description:DH,since:TH,tags:jH,config:AH,example:MH,examples:BH,features:NH,useCases:FH,notes:UH},VH=Object.assign(cz,{meta:WH});function HH(e={}){const{debounceMs:t=200,maxWaitMs:n=1200,onlyWhenIntersecting:o=!0,debug:r=!1}=e,a="viewport-debounce:inView";return{name:"viewport-debounce",version:"2.0.0",config:e,hooks:{onEnterViewport:i=>{var s;try{(s=i.sharedData)==null||s.set(a,!0)}catch{}if(r)try{console.debug("[ViewportDebounce] enter",i.src)}catch{}},onLeaveViewport:i=>{var s;try{(s=i.sharedData)==null||s.set(a,!1)}catch{}if(r)try{console.debug("[ViewportDebounce] leave",i.src)}catch{}},onBeforeLoad:async i=>{var c;const s=Date.now(),l=u=>new Promise(d=>setTimeout(d,u));for(;;){const u=!!((c=i.sharedData)!=null&&c.get(a)),d=Date.now()-s;if(!u&&o&&d<n){if(r)try{console.debug("[ViewportDebounce] aborted (left before stable)",i.src)}catch{}return!1}if(d>=t){if(r)try{console.debug("[ViewportDebounce] stable, proceed",i.src,{elapsed:d})}catch{}return!0}await l(30)}},onUnmount:i=>{var s;try{(s=i.sharedData)==null||s.delete(a)}catch{}}}}}const GH="ViewportDebouncePlugin",qH="视口防抖（v2 真实实现）：进入视口后并不立即加载，而是等待元素「稳定停留 debounceMs」才放行；若期间离开视口且未达 maxWaitMs 上限，则中止本次加载，真正避免快速滚动时误加载/重复加载。",QH="2.0.0",KH=["viewport","视口与交互","防抖"],YH=[{name:"debounceMs",type:"number",default:"200",description:"进入视口后需稳定停留的时长（毫秒），到时才放行加载"},{name:"maxWaitMs",type:"number",default:"1200",description:"最长等待上限，避免快速来回一直不加载（饥饿保护）"},{name:"onlyWhenIntersecting",type:"boolean",default:"true",description:"仅在进入视口时门控；若离开且未达 maxWaitMs 则中止本次加载"},{name:"debug",type:"boolean",default:"false",description:"是否输出调试日志"}],XH=`const StableImage = withPlugins(LazyLoadImageCore, [
  // 进入视口稳定 200ms 才加载，快速划过直接放弃
  createViewportDebouncePlugin({ debounceMs: 200, maxWaitMs: 1200 }),
]);

<StableImage src="https://picsum.photos/id/1015/500/300" alt="视口防抖示例" />;`,ZH=[{name:"默认防抖（200ms）",description:"快速滚动时抑制抖动：元素需稳定停留 200ms 才加载，一闪而过的不加载。",src:"https://picsum.photos/id/1015/500/300",config:{debounceMs:200}},{name:"加大防抖间隔",description:"300ms 间隔，更适合惯性较大的移动端滚动。",src:"https://picsum.photos/id/1020/500/300",config:{debounceMs:300}},{name:"开启调试日志",description:"控制台输出稳定/中止判定日志，便于排查。",src:"https://picsum.photos/id/1025/500/300",config:{debounceMs:200,debug:!0}}],JH=["门控钩子真正延迟加载到稳定期","快速划过（离开未达上限）中止加载","maxWaitMs 饥饿保护","可调防抖间隔与上限","调试日志输出"],eG=["快速滚动列表 / 瀑布流","移动端惯性滚动","防止抖动导致的重复加载","仅加载用户真正停留浏览的图片"],tG=["依赖引擎门控能力（onBeforeLoad 返回 false 中止加载），已在本插件中落地；与 ViewportAware 的 rootMargin 搭配可进一步调优触发时机。"],nG={name:GH,description:qH,since:QH,tags:KH,config:YH,example:XH,examples:ZH,features:JH,useCases:eG,notes:tG},oG="CacheMemoryPlugin",rG="内存 LRU 缓存：会话内缓存图片数据，可配置容量与过期时间。",aG="2.0.0",iG=["cache","缓存"],sG=[{name:"enabled",type:"boolean",default:"true",description:"是否启用内存缓存"},{name:"maxEntries",type:"number",default:"200",description:"LRU 最大条目"},{name:"ttlMs",type:"number",description:"过期时间，默认不过期"},{name:"debug",type:"boolean",default:"false",description:"是否输出 LRU 命中 / 淘汰调试日志"}],lG=`const LazyImage = withPlugins(LazyLoadImageCore, [
  createMemoryCachePlugin({
    maxEntries: 300,
    ttlMs: 5 * 60 * 1000, // 5 分钟过期
  }),
]);`,cG=[{name:"默认内存缓存",description:"会话内 LRU 缓存（默认 200 条），同一图片重复访问零网络。",config:{maxEntries:200}},{name:"限定过期时间",description:"5 分钟后条目失效，在命中率与内存占用之间取得平衡。",config:{maxEntries:300,ttlMs:3e5}}],uG=["会话内 LRU 缓存（默认 200 条）","可选 TTL 过期时间","内存受限时自动淘汰最久未用条目"],dG=["同一图片在列表 / 详情多处复用","快速来回切换的画廊、相册"],pG=["内存缓存不跨会话，刷新页面即失效。","需要跨会话持久请配合 IDBCachePlugin。","命中时直接返回已缓存数据，跳过网络请求。"],mG={name:oG,description:rG,since:aG,tags:iG,config:sG,example:lG,examples:cG,features:uG,useCases:dG,notes:pG},gG=Object.assign(HH,{meta:nG}),fG=Object.assign(dz,{meta:mG});function hG(e,t,n,o){const r=e.src,a=o.get(r);a&&clearTimeout(a);const i=(t.baseDelayMs??500)*Math.pow(2,Math.max(0,n-1)),s=t.jitter?Math.random()*.25*i:0,l=i+s,c=setTimeout(()=>{var d;o.delete(r);const u=(d=e.imageRef)==null?void 0:d.current;if(u)try{const p=`${r}${r.includes("?")?"&":"?"}retry=${Date.now()}&n=${n}`;u.src=p}catch{}},l);o.set(r,c)}function yG(e={}){const{maxRetries:t=2}=e,n=new Map,o=r=>`retry-count:${r}`;return{name:"retry-on-error",version:"1.1.0",description:"图片加载失败后退避重试；计数按 src 隔离、定时器可取消（P2-5）",config:e,hooks:{onLoadError:(r,a)=>{var l,c,u,d;try{(l=r.sharedData)==null||l.set("had-error",!0)}catch{}const i=o(r.src),s=Number(((c=r.sharedData)==null?void 0:c.get(i))??0)+1;if(s<=t)return(u=r.sharedData)==null||u.set(i,s),hG(r,e,s,n),!0;try{(d=r.sharedData)==null||d.set(i,s)}catch{}return!1},onSrcChange:(r,a)=>{const i=n.get(a);i&&(clearTimeout(i),n.delete(a))},onUnmount:()=>{n.forEach(r=>clearTimeout(r)),n.clear()},renderOverlay:r=>{var l;const a=Number(((l=r.sharedData)==null?void 0:l.get(o(r.src)))??0);if(a<=0)return null;const i=a>t,s={position:"absolute",top:6,right:6,zIndex:10,fontSize:12,fontWeight:600,color:"#fff",background:i?"rgba(108,117,125,0.9)":"rgba(255,149,0,0.92)",padding:"2px 8px",borderRadius:4};return N.createElement("div",{style:s},i?`重试失败 (${t})`:`重试中 ${a}/${t}`)}}}}const vG="RetryOnErrorPlugin",bG="失败重试：图片加载失败后按指数退避（可选抖动）自动重试，提升网络抖动 / 瞬时故障下的自愈成功率，并提供重试进度角标。",wG="2.0.0",xG=["network","网络","重试","自愈"],PG=[{name:"maxRetries",type:"number",default:"2",description:"最大重试次数"},{name:"baseDelayMs",type:"number",description:"退避基准毫秒（默认 500）"},{name:"jitter",type:"boolean",description:"是否在退避基础上叠加随机抖动"}],$G=`import { LazyLoadImageCore, createRetryOnErrorPlugin, withPlugins } from "vane-lazy-image";

const LazyImage = withPlugins(LazyLoadImageCore, [
  createRetryOnErrorPlugin({ maxRetries: 3, baseDelayMs: 400, jitter: true }),
]);

// 故意触发失败以观察指数退避重试
<LazyImage src="https://invalid.example.com/x.png" alt="失败重试示例" />`,SG=[{name:"自动重试",description:"失败后指数退避重试，用尽后角标显示『重试失败』（演示用无效地址）。",src:"https://invalid.example.com/retry.png",config:{maxRetries:3,baseDelayMs:400}},{name:"带抖动退避",description:"在指数退避基础上叠加随机抖动，避免重试风暴。",src:"https://invalid.example.com/retry-jitter.png",config:{maxRetries:2,baseDelayMs:600,jitter:!0}}],CG=["指数退避重试：delay = baseDelayMs * 2^(n-1)","可选 jitter 抖动避免重试风暴","角标实时显示『重试中 n/max』与『重试失败(max)』","用尽后放行错误给下游插件（ErrorOverlay / ErrorBadge）"],kG=["弱网 / 瞬时 5xx 自愈","与手动重试（ErrorOverlay）互补"],LG=["maxRetries 默认 2，baseDelayMs 默认 500","重试用 ?retry=时间戳&n=count 防止缓存命中","重试用尽返回 false，错误继续向下游传播"],IG={name:vG,description:bG,since:wG,tags:xG,config:PG,example:$G,examples:SG,features:CG,useCases:kG,notes:LG},_G=Object.assign(yG,{meta:IG});var EG=Object.defineProperty,RG=(e,t,n)=>t in e?EG(e,t,{enumerable:!0,configurable:!0,writable:!0,value:n}):e[t]=n,zG=(e,t,n)=>RG(e,t+"",n);function dg(e,t,n){const{fetchPriority:o="high",as:r="image",imageSrcSet:a,imageSizes:i}=n||{};S.useEffect(()=>{if(!t||!e)return;const s=(()=>{try{return new URL(e,document.baseURI).href}catch{return e}})();if(Array.from(document.querySelectorAll('link[rel="preload"]')).find(c=>c.href===s))return;const l=document.createElement("link");return l.rel="preload",l.as=r,l.href=e,o!=="auto"&&l.setAttribute("fetchpriority",o),a&&(l.setAttribute("imagesrcset",a),i&&l.setAttribute("imagesizes",i)),document.head.appendChild(l),()=>{l.parentNode===document.head&&document.head.removeChild(l)}},[e,t,o,r,a,i])}function OG(e,t){dg(e,t)}function DG(e,t){const n=(t==null?void 0:t.enabled)!==!1,o=(t==null?void 0:t.hookTimeout)??0;return function(...r){if(!n)return e.apply(this,r);if(o>0){const a=setTimeout(()=>{},o);try{const i=e.apply(this,r);return clearTimeout(a),i}catch(i){clearTimeout(a),t!=null&&t.debug&&console.warn(`[sandbox:${t==null?void 0:t.pluginName}] 钩子异常已被捕获`,i);return}}try{return e.apply(this,r)}catch(a){t!=null&&t.debug&&console.warn(`[sandbox:${t==null?void 0:t.pluginName}] 钩子异常已被捕获`,a);return}}}class TG{constructor(){zG(this,"nodes",new Map)}addPlugin(t,n=[],o=[],r=[]){this.nodes.set(t,{deps:[...n],optDeps:[...o],conflicts:[...r]})}detectCycles(){const t=new Set,n=new Set,o=[],r=[],a=l=>{if(n.has(l)){const d=o.indexOf(l);d>=0&&r.push([...o.slice(d),l]);return}if(t.has(l))return;t.add(l),n.add(l),o.push(l);const c=this.nodes.get(l),u=c?[...c.deps,...c.optDeps]:[];for(const d of u)this.nodes.has(d)&&a(d);o.pop(),n.delete(l)};for(const l of this.nodes.keys())a(l);const i=new Set,s=[];for(const l of r){const c=[...l].sort().join("|");i.has(c)||(i.add(c),s.push(l))}return s}getTopologicalOrder(t){if(this.detectCycles().length>0)return[];const n=new Map;for(const a of t)n.set(a,0);for(const a of t){const i=this.nodes.get(a);if(i)for(const s of i.deps)n.has(s)&&n.set(s,(n.get(s)||0)+1)}const o=[];for(const[a,i]of n)i===0&&o.push(a);o.sort();const r=[];for(;o.length;){const a=o.shift();r.push(a);const i=this.nodes.get(a);if(i)for(const s of i.deps){if(!n.has(s))continue;const l=(n.get(s)||0)-1;n.set(s,l),l===0&&(o.push(s),o.sort())}}return r.length===t.length?r:[]}checkConflicts(t,n){const o=this.nodes.get(t);if(!o)return{hasConflict:!1,conflicts:[]};const r=o.conflicts.filter(a=>n.has(a));return{hasConflict:r.length>0,conflicts:r}}checkDependencies(t,n){const o=this.nodes.get(t);if(!o)return{satisfied:!0,missing:[]};const r=o.deps.filter(a=>!n.has(a));return{satisfied:r.length===0,missing:r}}}const jG="2.0.0",Ni=Object.freeze(Object.defineProperty({__proto__:null,DependencyResolver:TG,FETCH_LOADER_DEFAULTS:Bt,FILTER_PRESETS:YR,HTTP_STATUS:Ns,IDBCache:ig,IMAGE_FETCH_PRIORITY:LR,IMAGE_LOADING_STRATEGY:kR,INTERSECTION_OBSERVER_DEFAULTS:SR,LAZY_IMAGE_CORE_VERSION:jG,LazyLoadImageCore:Jm,MemoryCache:za,PERFORMANCE_DEFAULTS:$R,PLUGIN_EVENTS:PR,PLUGIN_PRIORITY:xR,THROTTLE_DELAYS:CR,addGlobalContextListener:tg,cleanupObserverPool:yR,compareVersions:so,createA11yPlugin:r4,createAdaptiveQualityPlugin:iF,createAltTextPlugin:hF,createAnimatedCursorPlugin:ZN,createAntiHotlinkPlugin:sF,createAspectRatioSpacerPlugin:TF,createAuthPlugin:lF,createBadgePlugin:ON,createBatteryAwarePlugin:eF,createBlurUpPlugin:QF,createBorderGlowPlugin:DN,createCDNFallbackPlugin:cF,createCachePrewarmPlugin:DU,createCaptionPlugin:O9,createColorExtractionPlugin:TN,createColorSwatchPlugin:ZV,createComparisonPlugin:jN,createConcurrencyControlPlugin:eH,createCropPlugin:AN,createCustomEffectsPlugin:QN,createDataSaverPlugin:tH,createDecodeAfterIdlePlugin:nH,createDepthMapPlugin:JN,createDominantColorPlugin:MN,createDownloadButtonPlugin:n7,createErrorBadgePlugin:yF,createErrorOverlayPlugin:vF,createErrorTrackingPlugin:bF,createEventLoggerPlugin:wF,createExifOrientationPlugin:tF,createFadeInPlugin:hH,createFallbackImagePlugin:TU,createFetchLoaderPlugin:zH,createFilterPlugin:BN,createGalleryPlugin:D9,createGlitchEffectPlugin:YN,createHoverPrefetchPlugin:nF,createHoverZoomPlugin:T9,createIDBCachePlugin:VH,createImageOptimizationPlugin:uF,createInventoryStatusPlugin:XV,createLocalizationPlugin:t7,createLqipPlugin:NN,createMemoryCachePlugin:fG,createMemoryPressureAbortPlugin:oF,createMorphPlugin:XN,createNetworkAnalyticsPlugin:dF,createOfflinePlugin:OU,createOverlayInfoPlugin:FN,createParallaxPlugin:UN,createPerformanceMonitor:Yl,createPerformanceMonitorPlugin:xF,createPreconnectPlugin:oH,createPredictiveLoadingPlugin:rF,createPriceTagPlugin:KV,createPriorityLoadingPlugin:aF,createProgressOverlayPlugin:WN,createPromoBadgePlugin:YV,createRedactionPlugin:VN,createResponsivePlugin:pF,createRetryOnErrorPlugin:_G,createRevealAnimationPlugin:KN,createSEOPlugin:a4,createScrollIdlePlugin:o4,createSkeletonPlugin:j9,createSocialSharePlugin:JV,createSvgPlaceholderPlugin:HN,createTransitionPlugin:GN,createUserBehaviorPlugin:PF,createVideoPosterPlugin:e7,createViewportAwarePlugin:gF,createViewportDebouncePlugin:gG,createViewportDwellPlugin:fF,createWatermarkPlugin:qN,createWebPPlugin:mF,formatVersion:gz,getGlobalContextStats:TR,getGlobalDeviceInfo:DR,getGlobalMonitorManager:lR,getGlobalNetworkInfo:Ra,getObserverPoolDetails:hR,getObserverPoolStats:gR,globalContext:hr,isValidVersion:mz,isVersionEqual:fz,isVersionGreater:hz,isVersionInRange:pz,isVersionLess:yz,observeElement:Zm,observerPool:nn,parseVersion:cg,resetGlobalMonitorManager:cR,resetObserverPoolStats:vR,resolveDependencyOrder:Xl,setObserverPoolDebugMode:fR,unobserveElement:mR,useImagePreload:OG,useLCPPreload:dg,withPlugins:qR,wrapPluginHook:DG},Symbol.toStringTag,{value:"Module"})),$Z={ecommerce:"电商核心",interaction:"视觉效果与交互",visual:"视觉与效果",perf:"性能与网络",robust:"稳健性与错误处理",viewport:"视口与交互",a11y:"可访问性与 SEO",other:"其他"},AG={PriceTagPlugin:{category:"ecommerce",title:"价格标签"},PromoBadgePlugin:{category:"ecommerce",title:"促销徽标"},InventoryStatusPlugin:{category:"ecommerce",title:"库存状态"},ColorSwatchPlugin:{category:"ecommerce",title:"颜色样本"},SocialSharePlugin:{category:"ecommerce",title:"社交分享"},VideoPosterPlugin:{category:"ecommerce",title:"视频封面"},LocalizationPlugin:{category:"ecommerce",title:"本地化"},DownloadButtonPlugin:{category:"ecommerce",title:"下载按钮"},RevealAnimationPlugin:{category:"interaction",title:"揭示动画"},GlitchEffectPlugin:{category:"interaction",title:"故障特效"},MorphPlugin:{category:"interaction",title:"形变"},AnimatedCursorPlugin:{category:"interaction",title:"动态光标"},DepthMapPlugin:{category:"interaction",title:"深度图 (3D)"},SkeletonPlugin:{category:"visual",title:"骨架屏"},BorderGlowPlugin:{category:"visual",title:"边框辉光"},CaptionPlugin:{category:"visual",title:"图片说明"},FilterPlugin:{category:"visual",title:"滤镜"},GalleryPlugin:{category:"visual",title:"画廊"},OverlayInfoPlugin:{category:"visual",title:"信息蒙层"},ProgressOverlayPlugin:{category:"visual",title:"进度蒙层"},BlurUpPlugin:{category:"visual",title:"模糊渐显"},FadeInPlugin:{category:"visual",title:"淡入"},TransitionPlugin:{category:"visual",title:"过渡"},ParallaxPlugin:{category:"visual",title:"视差"},ColorExtractionPlugin:{category:"visual",title:"色彩提取"},RedactionPlugin:{category:"visual",title:"打码"},HoverZoomPlugin:{category:"visual",title:"悬停放大"},WatermarkPlugin:{category:"visual",title:"水印"},CustomEffectsPlugin:{category:"visual",title:"自定义效果"},PreconnectPlugin:{category:"perf",title:"预连接"},PriorityLoadingPlugin:{category:"perf",title:"优先级加载"},CachePrewarmPlugin:{category:"perf",title:"缓存预热"},CacheMemoryPlugin:{category:"perf",title:"内存缓存"},CacheIDBPlugin:{category:"perf",title:"IndexedDB 缓存"},ConcurrencyControlPlugin:{category:"perf",title:"并发控制"},ScrollIdlePlugin:{category:"perf",title:"滚动空闲"},NetworkAnalyticsPlugin:{category:"perf",title:"网络分析"},PredictiveLoadingPlugin:{category:"perf",title:"预测加载"},DataSaverPlugin:{category:"perf",title:"省流量"},ImageOptimizationPlugin:{category:"perf",title:"图片优化"},FetchLoaderPlugin:{category:"perf",title:"Fetch 加载"},ErrorBadgePlugin:{category:"robust",title:"错误徽标"},ErrorOverlayPlugin:{category:"robust",title:"错误蒙层"},FallbackImagePlugin:{category:"robust",title:"兜底图"},RetryOnErrorPlugin:{category:"robust",title:"失败重试"},ErrorTrackingPlugin:{category:"robust",title:"错误追踪"},OfflinePlugin:{category:"robust",title:"离线"},MemoryPressureAbortPlugin:{category:"robust",title:"内存压力中止"},DecodeAfterIdlePlugin:{category:"robust",title:"空闲解码"},AntiHotlinkPlugin:{category:"robust",title:"防盗链"},CDNFallbackPlugin:{category:"robust",title:"CDN 回退"},AuthPlugin:{category:"robust",title:"鉴权"},ViewportAwarePlugin:{category:"viewport",title:"视口感知"},ViewportDebouncePlugin:{category:"viewport",title:"视口防抖"},ViewportDwellPlugin:{category:"viewport",title:"视口驻留"},HoverPrefetchPlugin:{category:"viewport",title:"悬停预取"},UserBehaviorPlugin:{category:"viewport",title:"用户行为"},A11yPlugin:{category:"a11y",title:"无障碍"},AltTextPlugin:{category:"a11y",title:"替代文本"},ExifOrientationPlugin:{category:"a11y",title:"EXIF 方向"},AspectRatioSpacerPlugin:{category:"a11y",title:"宽高比占位"},ResponsivePlugin:{category:"a11y",title:"响应式"},SEOPlugin:{category:"a11y",title:"SEO"},BadgePlugin:{category:"other",title:"徽标"},DominantColorPlugin:{category:"other",title:"主色"},EventLoggerPlugin:{category:"other",title:"事件日志"},LQIPPlugin:{category:"other",title:"LQIP 低清预览"},PerformanceMonitorPlugin:{category:"other",title:"性能监控"},AdaptiveQualityPlugin:{category:"other",title:"自适应质量"},BatteryAwarePlugin:{category:"other",title:"电量感知"},CropPlugin:{category:"other",title:"裁剪"},ComparisonPlugin:{category:"other",title:"对比"},SvgPlaceholderPlugin:{category:"other",title:"SVG 占位"},WebPPlugin:{category:"other",title:"WebP"}};function MG(e){return e.replace(/Plugin$/,"").replace(/([a-z0-9])([A-Z])/g,"$1-$2").replace(/([A-Z])([A-Z][a-z])/g,"$1-$2").toLowerCase()}const od=Object.assign({"../../../src/custom-plugins/A11yPlugin/doc.json":lv,"../../../src/custom-plugins/AdaptiveQualityPlugin/doc.json":bv,"../../../src/custom-plugins/AltTextPlugin/doc.json":Ev,"../../../src/custom-plugins/AnimatedCursorPlugin/doc.json":Fv,"../../../src/custom-plugins/AntiHotlinkPlugin/doc.json":Zv,"../../../src/custom-plugins/AspectRatioSpacerPlugin/doc.json":c1,"../../../src/custom-plugins/AuthPlugin/doc.json":w1,"../../../src/custom-plugins/BadgePlugin/doc.json":R1,"../../../src/custom-plugins/BatteryAwarePlugin/doc.json":U1,"../../../src/custom-plugins/BlurUpPlugin/doc.json":J1,"../../../src/custom-plugins/BorderGlowPlugin/doc.json":ub,"../../../src/custom-plugins/CDNFallbackPlugin/doc.json":xb,"../../../src/custom-plugins/CacheIDBPlugin/doc.json":zb,"../../../src/custom-plugins/CacheMemoryPlugin/doc.json":Wb,"../../../src/custom-plugins/CachePrewarmPlugin/doc.json":ew,"../../../src/custom-plugins/CaptionPlugin/doc.json":dw,"../../../src/custom-plugins/CarouselPlugin/doc.json":Pw,"../../../src/custom-plugins/ColorExtractionPlugin/doc.json":Ow,"../../../src/custom-plugins/ColorSwatchPlugin/doc.json":Vw,"../../../src/custom-plugins/ComparisonPlugin/doc.json":tx,"../../../src/custom-plugins/ConcurrencyControlPlugin/doc.json":px,"../../../src/custom-plugins/CounterPlugin/doc.json":$x,"../../../src/custom-plugins/CropPlugin/doc.json":Dx,"../../../src/custom-plugins/CustomEffectsPlugin/doc.json":Hx,"../../../src/custom-plugins/DataSaverPlugin/doc.json":nP,"../../../src/custom-plugins/DecodeAfterIdlePlugin/doc.json":mP,"../../../src/custom-plugins/DepthMapPlugin/doc.json":SP,"../../../src/custom-plugins/DominantColorPlugin/doc.json":TP,"../../../src/custom-plugins/DownloadButtonPlugin/doc.json":GP,"../../../src/custom-plugins/ErrorBadgePlugin/doc.json":o$,"../../../src/custom-plugins/ErrorOverlayPlugin/doc.json":g$,"../../../src/custom-plugins/ErrorTrackingPlugin/doc.json":C$,"../../../src/custom-plugins/EventLoggerPlugin/doc.json":j$,"../../../src/custom-plugins/ExifOrientationPlugin/doc.json":q$,"../../../src/custom-plugins/FadeInPlugin/doc.json":rS,"../../../src/custom-plugins/FallbackImagePlugin/doc.json":fS,"../../../src/custom-plugins/FavoritePlugin/doc.json":kS,"../../../src/custom-plugins/FetchLoaderPlugin/doc.json":AS,"../../../src/custom-plugins/FilterPlugin/doc.json":QS,"../../../src/custom-plugins/FullscreenPlugin/doc.json":a2,"../../../src/custom-plugins/GalleryPlugin/doc.json":h2,"../../../src/custom-plugins/GlitchEffectPlugin/doc.json":L2,"../../../src/custom-plugins/HotspotPlugin/doc.json":M2,"../../../src/custom-plugins/HoverPrefetchPlugin/doc.json":K2,"../../../src/custom-plugins/HoverZoomPlugin/doc.json":iC,"../../../src/custom-plugins/ImageOptimizationPlugin/doc.json":yC,"../../../src/custom-plugins/IndicatorPlugin/doc.json":IC,"../../../src/custom-plugins/InventoryStatusPlugin/doc.json":BC,"../../../src/custom-plugins/LQIPPlugin/doc.json":YC,"../../../src/custom-plugins/LocalizationPlugin/doc.json":sk,"../../../src/custom-plugins/MemoryPressureAbortPlugin/doc.json":vk,"../../../src/custom-plugins/MorphPlugin/doc.json":_k,"../../../src/custom-plugins/NetworkAnalyticsPlugin/doc.json":Nk,"../../../src/custom-plugins/OfflinePlugin/doc.json":Xk,"../../../src/custom-plugins/OverlayInfoPlugin/doc.json":lL,"../../../src/custom-plugins/ParallaxPlugin/doc.json":bL,"../../../src/custom-plugins/PerformanceMonitorPlugin/doc.json":EL,"../../../src/custom-plugins/PreconnectPlugin/doc.json":FL,"../../../src/custom-plugins/PredictiveLoadingPlugin/doc.json":ZL,"../../../src/custom-plugins/PriceTagPlugin/doc.json":cI,"../../../src/custom-plugins/PriorityLoadingPlugin/doc.json":wI,"../../../src/custom-plugins/ProgressOverlayPlugin/doc.json":RI,"../../../src/custom-plugins/PromoBadgePlugin/doc.json":UI,"../../../src/custom-plugins/RedactionPlugin/doc.json":JI,"../../../src/custom-plugins/ResponsivePlugin/doc.json":u_,"../../../src/custom-plugins/RetryOnErrorPlugin/doc.json":x_,"../../../src/custom-plugins/RevealAnimationPlugin/doc.json":z_,"../../../src/custom-plugins/SEOPlugin/doc.json":W_,"../../../src/custom-plugins/ScrollIdlePlugin/doc.json":eE,"../../../src/custom-plugins/SkeletonPlugin/doc.json":dE,"../../../src/custom-plugins/SocialSharePlugin/doc.json":PE,"../../../src/custom-plugins/Spin360Plugin/doc.json":OE,"../../../src/custom-plugins/SvgPlaceholderPlugin/doc.json":VE,"../../../src/custom-plugins/ThumbPreloadPlugin/doc.json":t5,"../../../src/custom-plugins/ThumbSyncPlugin/doc.json":p5,"../../../src/custom-plugins/TransitionPlugin/doc.json":$5,"../../../src/custom-plugins/UserBehaviorPlugin/doc.json":D5,"../../../src/custom-plugins/VideoPosterPlugin/doc.json":H5,"../../../src/custom-plugins/ViewportAwarePlugin/doc.json":n3,"../../../src/custom-plugins/ViewportDebouncePlugin/doc.json":m3,"../../../src/custom-plugins/ViewportDwellPlugin/doc.json":S3,"../../../src/custom-plugins/WatermarkPlugin/doc.json":T3,"../../../src/custom-plugins/WebPPlugin/doc.json":G3,"../../../src/custom-plugins/ZoomControlPlugin/doc.json":oR}),Oa=Object.keys(od).map(e=>{const t=e.split("/").slice(-2)[0],n=od[e],o=AG[t];if(!o)return null;const r="create"+n.name;return{id:MG(t),dir:t,title:o.title,category:o.category,factoryName:r,example:n.example||"",description:n.description||"",tags:n.tags||[],config:n.config||[],examples:n.examples||[],features:n.features||[],useCases:n.useCases||[],notes:n.notes||[]}}).filter(Boolean),BG={ecommerce:[],interaction:[],visual:[],perf:[],robust:[],viewport:[],a11y:[],other:[]};for(const e of Oa)BG[e.category].push(e);function NG(e){return Oa.find(t=>t.id===e)}function SZ(e){const t=NG(e);if(!t)return;const n=Ni[t.factoryName];if(typeof n=="function")return n;for(const o of Object.keys(Ni)){const r=Ni[o];if(typeof r=="function"&&r.meta&&r.meta.name===t.dir)return r}}const pg=[{id:"error-resilience",title:"错误韧性组合",description:"错误覆盖层 + 徽标 + 兜底图 + 自动重试 + 事件日志，构建失败的优雅降级链路。",component:"ComboErrorResilienceDemo",plugins:[{name:"ErrorOverlay 错误覆盖层",role:"加载失败时显示重试遮罩，引导用户重试"},{name:"ErrorBadge 错误徽标",role:"角落错误标记，快速识别失败项"},{name:"FallbackImage 兜底图",role:"加载失败回退到占位图，避免空白"},{name:"RetryOnError 自动重试",role:"失败后按策略自动重连，提升成功率"},{name:"EventLogger 事件日志",role:"记录加载/错误事件，便于监控排查"}],code:`import {
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
<LazyImage src="https://picsum.photos/seed/interaction-combo/800/600" alt="交互与叠层组合示例" />`}],mg=[{id:"plugin-sandbox",title:"插件沙箱",description:"自包含 try/catch 沙箱隔离插件钩子执行。",component:"PluginSandboxDemo"},{id:"performance-monitoring",title:"性能监控系统",description:"全局性能监控与报告。",component:"PerformanceMonitoringDemo"},{id:"engine-infra",title:"引擎性能基础设施",description:"GlobalContext 全局上下文 + ObserverPool 共享观察池的实时可观察面板。",component:"EngineInfraDemo"},{id:"plugin-hot-reload",title:"插件热更新",description:"运行时注册 / 注销插件。",component:"PluginHotReloadDemo"},{id:"dependency-resolver",title:"依赖解析器",description:"拓扑排序 / 环检测 / 冲突校验。",component:"DependencyResolverDemo"}],FG=Object.assign({"../combos/ComboA11ySeoDemo.tsx":()=>L(()=>import("./ComboA11ySeoDemo-BqQtH8gV.js"),__vite__mapDeps([0,1]),import.meta.url),"../combos/ComboCacheDemo.tsx":()=>L(()=>import("./ComboCacheDemo-CZSSwUqI.js"),__vite__mapDeps([2,1]),import.meta.url),"../combos/ComboEnginePerfDemo.tsx":()=>L(()=>import("./ComboEnginePerfDemo-cZoHZYEF.js"),__vite__mapDeps([3,1]),import.meta.url),"../combos/ComboErrorResilienceDemo.tsx":()=>L(()=>import("./ComboErrorResilienceDemo-DOc6yJIF.js"),__vite__mapDeps([4,1]),import.meta.url),"../combos/ComboInteractionOverlayDemo.tsx":()=>L(()=>import("./ComboInteractionOverlayDemo-kS8GvDKm.js"),__vite__mapDeps([5,1]),import.meta.url),"../combos/ComboPerformanceDemo.tsx":()=>L(()=>import("./ComboPerformanceDemo-UmS9-FFx.js"),__vite__mapDeps([6,1]),import.meta.url),"../combos/ComboResponsiveSeoWebPDemo.tsx":()=>L(()=>import("./ComboResponsiveSeoWebPDemo-Dk0ISuqP.js"),__vite__mapDeps([7,1]),import.meta.url),"../combos/ComboViewportInteractionDemo.tsx":()=>L(()=>import("./ComboViewportInteractionDemo-CAgoaGhd.js"),__vite__mapDeps([8,1]),import.meta.url),"../combos/ComboVisualEffectsDemo.tsx":()=>L(()=>import("./ComboVisualEffectsDemo-D7Le-FUu.js"),__vite__mapDeps([9,1]),import.meta.url),"../combos/ComboVisualEffectsPlusDemo.tsx":()=>L(()=>import("./ComboVisualEffectsPlusDemo-CyyRAMhK.js"),__vite__mapDeps([10,1]),import.meta.url)}),UG=Object.assign({"../combos/ComboA11ySeoDemo.tsx":Dy,"../combos/ComboCacheDemo.tsx":Ty,"../combos/ComboEnginePerfDemo.tsx":jy,"../combos/ComboErrorResilienceDemo.tsx":Ay,"../combos/ComboInteractionOverlayDemo.tsx":My,"../combos/ComboPerformanceDemo.tsx":By,"../combos/ComboResponsiveSeoWebPDemo.tsx":Ny,"../combos/ComboViewportInteractionDemo.tsx":Fy,"../combos/ComboVisualEffectsDemo.tsx":Uy,"../combos/ComboVisualEffectsPlusDemo.tsx":Wy}),WG=Object.assign({"../advanced/DependencyResolverDemo.tsx":()=>L(()=>import("./DependencyResolverDemo-D0656uR3.js"),__vite__mapDeps([11,1,12]),import.meta.url),"../advanced/EngineInfraDemo.tsx":()=>L(()=>import("./EngineInfraDemo-DqP2-4QJ.js"),__vite__mapDeps([13,1]),import.meta.url),"../advanced/PerformanceMonitoringDemo.tsx":()=>L(()=>import("./PerformanceMonitoringDemo-DGQOwNnf.js"),__vite__mapDeps([14,1]),import.meta.url),"../advanced/PluginHotReloadDemo.tsx":()=>L(()=>import("./PluginHotReloadDemo-CGmrSwaL.js"),__vite__mapDeps([15,1]),import.meta.url),"../advanced/PluginSandboxDemo.tsx":()=>L(()=>import("./PluginSandboxDemo-BbdJuDk0.js"),__vite__mapDeps([16,12,1]),import.meta.url)}),VG=Object.assign({"../advanced/DependencyResolverDemo.tsx":Vy,"../advanced/EngineInfraDemo.tsx":Hy,"../advanced/PerformanceMonitoringDemo.tsx":Gy,"../advanced/PluginHotReloadDemo.tsx":qy,"../advanced/PluginSandboxDemo.tsx":Qy}),HG=Object.assign({"../scenarios/VirtualGridDemo.tsx":()=>L(()=>import("./VirtualGridDemo-KYTVuHfh.js"),__vite__mapDeps([17,18,1]),import.meta.url),"../scenarios/VirtualHorizontalListDemo.tsx":()=>L(()=>import("./VirtualHorizontalListDemo-C2o568bQ.js"),__vite__mapDeps([19,18,1]),import.meta.url),"../scenarios/VirtualVerticalListDemo.tsx":()=>L(()=>import("./VirtualVerticalListDemo-CpBYpSVO.js"),__vite__mapDeps([20,18,1]),import.meta.url)}),GG=Object.assign({"../scenarios/VirtualGridDemo.tsx":Ky,"../scenarios/VirtualHorizontalListDemo.tsx":Yy,"../scenarios/VirtualVerticalListDemo.tsx":Xy});function Jl(e,t,n){const o=e[`../${n}`];return{Stage:o?S.lazy(()=>o().then(a=>({default:a.default}))):()=>null,source:t[`../${n}`]??""}}const qG=pg.map(e=>{const t=`combos/${e.component}.tsx`,{Stage:n,source:o}=Jl(FG,UG,t);return{meta:{slug:e.id,title:e.title,group:"combo",description:e.description,plugins:e.plugins,code:e.code},Stage:n,file:`${e.component}.tsx`,source:o}}),QG=mg.map(e=>{const t=`advanced/${e.component}.tsx`,{Stage:n,source:o}=Jl(WG,VG,t);return{meta:{slug:e.id,title:e.title,group:"advanced",description:e.description},Stage:n,file:`${e.component}.tsx`,source:o}}),KG=[{slug:"virtual-vertical",title:"虚拟滚动 · 纵向列表",file:"scenarios/VirtualVerticalListDemo.tsx"},{slug:"virtual-horizontal",title:"虚拟滚动 · 横向列表",file:"scenarios/VirtualHorizontalListDemo.tsx"},{slug:"virtual-grid",title:"虚拟滚动 · 网格",file:"scenarios/VirtualGridDemo.tsx"}],YG=KG.map(e=>{const{Stage:t,source:n}=Jl(HG,GG,e.file);return{meta:{slug:e.slug,title:e.title,group:"scenario"},Stage:t,file:e.file.split("/").pop(),source:n}}),Da=[...qG,...QG,...YG],XG=["combo","advanced","scenario"];function CZ(e){return Da.filter(t=>t.meta.group===e)}function kZ(e){return Da.find(t=>t.meta.slug===e)}const gg={combo:{label:"组合示例",hint:"多插件协同的真实业务组合"},advanced:{label:"高级功能",hint:"底层能力与引擎设施"},scenario:{label:"场景示例",hint:"虚拟滚动等长列表组合"}};function ZG(e,t){if(e==null)return{};var n={};for(var o in e)if({}.hasOwnProperty.call(e,o)){if(t.indexOf(o)!==-1)continue;n[o]=e[o]}return n}function JG(e,t){if(e==null)return{};var n,o,r=ZG(e,t);if(Object.getOwnPropertySymbols){var a=Object.getOwnPropertySymbols(e);for(o=0;o<a.length;o++)n=a[o],t.indexOf(n)===-1&&{}.propertyIsEnumerable.call(e,n)&&(r[n]=e[n])}return r}function Vs(e,t){(t==null||t>e.length)&&(t=e.length);for(var n=0,o=Array(t);n<t;n++)o[n]=e[n];return o}function eq(e){if(Array.isArray(e))return Vs(e)}function tq(e){if(typeof Symbol<"u"&&e[Symbol.iterator]!=null||e["@@iterator"]!=null)return Array.from(e)}function nq(e,t){if(e){if(typeof e=="string")return Vs(e,t);var n={}.toString.call(e).slice(8,-1);return n==="Object"&&e.constructor&&(n=e.constructor.name),n==="Map"||n==="Set"?Array.from(e):n==="Arguments"||/^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(n)?Vs(e,t):void 0}}function oq(){throw new TypeError(`Invalid attempt to spread non-iterable instance.
In order to be iterable, non-array objects must have a [Symbol.iterator]() method.`)}function Hs(e){return eq(e)||tq(e)||nq(e)||oq()}function ur(e){"@babel/helpers - typeof";return ur=typeof Symbol=="function"&&typeof Symbol.iterator=="symbol"?function(t){return typeof t}:function(t){return t&&typeof Symbol=="function"&&t.constructor===Symbol&&t!==Symbol.prototype?"symbol":typeof t},ur(e)}function rq(e,t){if(ur(e)!="object"||!e)return e;var n;if(typeof Symbol<"u"&&(n=e[Symbol.toPrimitive])!==void 0){var o=n.call(e,t);if(ur(o)!="object")return o;throw new TypeError("@@toPrimitive must return a primitive value.")}return(t==="string"?String:Number)(e)}function aq(e){var t=rq(e,"string");return ur(t)=="symbol"?t:t+""}function fg(e,t,n){return(t=aq(t))in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}function Gs(){return Gs=Object.assign?Object.assign.bind():function(e){for(var t=1;t<arguments.length;t++){var n=arguments[t];for(var o in n)({}).hasOwnProperty.call(n,o)&&(e[o]=n[o])}return e},Gs.apply(null,arguments)}function rd(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var o=Object.getOwnPropertySymbols(e);t&&(o=o.filter(function(r){return Object.getOwnPropertyDescriptor(e,r).enumerable})),n.push.apply(n,o)}return n}function Hn(e){for(var t=1;t<arguments.length;t++){var n=arguments[t]!=null?arguments[t]:{};t%2?rd(Object(n),!0).forEach(function(o){fg(e,o,n[o])}):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):rd(Object(n)).forEach(function(o){Object.defineProperty(e,o,Object.getOwnPropertyDescriptor(n,o))})}return e}function iq(e){var t=e.length;if(t===0||t===1)return e;if(t===2)return[e[0],e[1],"".concat(e[0],".").concat(e[1]),"".concat(e[1],".").concat(e[0])];if(t===3)return[e[0],e[1],e[2],"".concat(e[0],".").concat(e[1]),"".concat(e[0],".").concat(e[2]),"".concat(e[1],".").concat(e[0]),"".concat(e[1],".").concat(e[2]),"".concat(e[2],".").concat(e[0]),"".concat(e[2],".").concat(e[1]),"".concat(e[0],".").concat(e[1],".").concat(e[2]),"".concat(e[0],".").concat(e[2],".").concat(e[1]),"".concat(e[1],".").concat(e[0],".").concat(e[2]),"".concat(e[1],".").concat(e[2],".").concat(e[0]),"".concat(e[2],".").concat(e[0],".").concat(e[1]),"".concat(e[2],".").concat(e[1],".").concat(e[0])];if(t>=4)return[e[0],e[1],e[2],e[3],"".concat(e[0],".").concat(e[1]),"".concat(e[0],".").concat(e[2]),"".concat(e[0],".").concat(e[3]),"".concat(e[1],".").concat(e[0]),"".concat(e[1],".").concat(e[2]),"".concat(e[1],".").concat(e[3]),"".concat(e[2],".").concat(e[0]),"".concat(e[2],".").concat(e[1]),"".concat(e[2],".").concat(e[3]),"".concat(e[3],".").concat(e[0]),"".concat(e[3],".").concat(e[1]),"".concat(e[3],".").concat(e[2]),"".concat(e[0],".").concat(e[1],".").concat(e[2]),"".concat(e[0],".").concat(e[1],".").concat(e[3]),"".concat(e[0],".").concat(e[2],".").concat(e[1]),"".concat(e[0],".").concat(e[2],".").concat(e[3]),"".concat(e[0],".").concat(e[3],".").concat(e[1]),"".concat(e[0],".").concat(e[3],".").concat(e[2]),"".concat(e[1],".").concat(e[0],".").concat(e[2]),"".concat(e[1],".").concat(e[0],".").concat(e[3]),"".concat(e[1],".").concat(e[2],".").concat(e[0]),"".concat(e[1],".").concat(e[2],".").concat(e[3]),"".concat(e[1],".").concat(e[3],".").concat(e[0]),"".concat(e[1],".").concat(e[3],".").concat(e[2]),"".concat(e[2],".").concat(e[0],".").concat(e[1]),"".concat(e[2],".").concat(e[0],".").concat(e[3]),"".concat(e[2],".").concat(e[1],".").concat(e[0]),"".concat(e[2],".").concat(e[1],".").concat(e[3]),"".concat(e[2],".").concat(e[3],".").concat(e[0]),"".concat(e[2],".").concat(e[3],".").concat(e[1]),"".concat(e[3],".").concat(e[0],".").concat(e[1]),"".concat(e[3],".").concat(e[0],".").concat(e[2]),"".concat(e[3],".").concat(e[1],".").concat(e[0]),"".concat(e[3],".").concat(e[1],".").concat(e[2]),"".concat(e[3],".").concat(e[2],".").concat(e[0]),"".concat(e[3],".").concat(e[2],".").concat(e[1]),"".concat(e[0],".").concat(e[1],".").concat(e[2],".").concat(e[3]),"".concat(e[0],".").concat(e[1],".").concat(e[3],".").concat(e[2]),"".concat(e[0],".").concat(e[2],".").concat(e[1],".").concat(e[3]),"".concat(e[0],".").concat(e[2],".").concat(e[3],".").concat(e[1]),"".concat(e[0],".").concat(e[3],".").concat(e[1],".").concat(e[2]),"".concat(e[0],".").concat(e[3],".").concat(e[2],".").concat(e[1]),"".concat(e[1],".").concat(e[0],".").concat(e[2],".").concat(e[3]),"".concat(e[1],".").concat(e[0],".").concat(e[3],".").concat(e[2]),"".concat(e[1],".").concat(e[2],".").concat(e[0],".").concat(e[3]),"".concat(e[1],".").concat(e[2],".").concat(e[3],".").concat(e[0]),"".concat(e[1],".").concat(e[3],".").concat(e[0],".").concat(e[2]),"".concat(e[1],".").concat(e[3],".").concat(e[2],".").concat(e[0]),"".concat(e[2],".").concat(e[0],".").concat(e[1],".").concat(e[3]),"".concat(e[2],".").concat(e[0],".").concat(e[3],".").concat(e[1]),"".concat(e[2],".").concat(e[1],".").concat(e[0],".").concat(e[3]),"".concat(e[2],".").concat(e[1],".").concat(e[3],".").concat(e[0]),"".concat(e[2],".").concat(e[3],".").concat(e[0],".").concat(e[1]),"".concat(e[2],".").concat(e[3],".").concat(e[1],".").concat(e[0]),"".concat(e[3],".").concat(e[0],".").concat(e[1],".").concat(e[2]),"".concat(e[3],".").concat(e[0],".").concat(e[2],".").concat(e[1]),"".concat(e[3],".").concat(e[1],".").concat(e[0],".").concat(e[2]),"".concat(e[3],".").concat(e[1],".").concat(e[2],".").concat(e[0]),"".concat(e[3],".").concat(e[2],".").concat(e[0],".").concat(e[1]),"".concat(e[3],".").concat(e[2],".").concat(e[1],".").concat(e[0])]}var Fi={};function sq(e){if(e.length===0||e.length===1)return e;var t=e.join(".");return Fi[t]||(Fi[t]=iq(e)),Fi[t]}function lq(e){var t=arguments.length>1&&arguments[1]!==void 0?arguments[1]:{},n=arguments.length>2?arguments[2]:void 0,o=e.filter(function(a){return a!=="token"}),r=sq(o);return r.reduce(function(a,i){return Hn(Hn({},a),n[i])},t)}function ad(e){return e.join(" ")}function cq(e,t){var n=0;return function(o){return n+=1,o.map(function(r,a){return hg({node:r,stylesheet:e,useInlineStyles:t,key:"code-segment-".concat(n,"-").concat(a)})})}}function hg(e){var t=e.node,n=e.stylesheet,o=e.style,r=o===void 0?{}:o,a=e.useInlineStyles,i=e.key,s=t.properties,l=t.type,c=t.tagName,u=t.value;if(l==="text")return u;if(c){var d=cq(n,a),p;if(!a)p=Hn(Hn({},s),{},{className:ad(s.className)});else{var h=Object.keys(n).reduce(function(f,m){return m.split(".").forEach(function(g){f.includes(g)||f.push(g)}),f},[]),v=s.className&&s.className.includes("token")?["token"]:[],w=s.className&&v.concat(s.className.filter(function(f){return!h.includes(f)}));p=Hn(Hn({},s),{},{className:ad(w)||void 0,style:lq(s.className,Object.assign({},s.style,r),n)})}var $=d(t.children);return N.createElement(c,Gs({key:i},p),$)}}const uq=function(e,t){var n=e.listLanguages();return n.indexOf(t)!==-1};var dq=["language","children","style","customStyle","codeTagProps","useInlineStyles","showLineNumbers","showInlineLineNumbers","startingLineNumber","lineNumberContainerStyle","lineNumberStyle","wrapLines","wrapLongLines","lineProps","renderer","PreTag","CodeTag","code","astGenerator"];function id(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var o=Object.getOwnPropertySymbols(e);t&&(o=o.filter(function(r){return Object.getOwnPropertyDescriptor(e,r).enumerable})),n.push.apply(n,o)}return n}function Nt(e){for(var t=1;t<arguments.length;t++){var n=arguments[t]!=null?arguments[t]:{};t%2?id(Object(n),!0).forEach(function(o){fg(e,o,n[o])}):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):id(Object(n)).forEach(function(o){Object.defineProperty(e,o,Object.getOwnPropertyDescriptor(n,o))})}return e}var pq=/\n/g;function mq(e){return e.match(pq)}function gq(e){var t=e.lines,n=e.startingLineNumber,o=e.style;return t.map(function(r,a){var i=a+n;return N.createElement("span",{key:"line-".concat(a),className:"react-syntax-highlighter-line-number",style:typeof o=="function"?o(i):o},"".concat(i,`
`))})}function fq(e){var t=e.codeString,n=e.codeStyle,o=e.containerStyle,r=o===void 0?{float:"left",paddingRight:"10px"}:o,a=e.numberStyle,i=a===void 0?{}:a,s=e.startingLineNumber;return N.createElement("code",{style:Object.assign({},n,r)},gq({lines:t.replace(/\n$/,"").split(`
`),style:i,startingLineNumber:s}))}function hq(e){return"".concat(e.toString().length,".25em")}function yg(e,t){return{type:"element",tagName:"span",properties:{key:"line-number--".concat(e),className:["comment","linenumber","react-syntax-highlighter-line-number"],style:t},children:[{type:"text",value:e}]}}function vg(e,t,n){var o={display:"inline-block",minWidth:hq(n),paddingRight:"1em",textAlign:"right",userSelect:"none"},r=typeof e=="function"?e(t):e,a=Nt(Nt({},o),r);return a}function ra(e){var t=e.children,n=e.lineNumber,o=e.lineNumberStyle,r=e.largestLineNumber,a=e.showInlineLineNumbers,i=e.lineProps,s=i===void 0?{}:i,l=e.className,c=l===void 0?[]:l,u=e.showLineNumbers,d=e.wrapLongLines,p=e.wrapLines,h=p===void 0?!1:p,v=h?Nt({},typeof s=="function"?s(n):s):{};if(v.className=v.className?[].concat(Hs(v.className.trim().split(/\s+/)),Hs(c)):c,n&&a){var w=vg(o,n,r);t.unshift(yg(n,w))}return d&u&&(v.style=Nt({display:"flex"},v.style)),{type:"element",tagName:"span",properties:v,children:t}}function bg(e){for(var t=arguments.length>1&&arguments[1]!==void 0?arguments[1]:[],n=arguments.length>2&&arguments[2]!==void 0?arguments[2]:[],o=0;o<e.length;o++){var r=e[o];if(r.type==="text")n.push(ra({children:[r],className:Hs(new Set(t))}));else if(r.children){var a=t.concat(r.properties.className);bg(r.children,a).forEach(function(i){return n.push(i)})}}return n}function yq(e,t,n,o,r,a,i,s,l){var c,u=bg(e.value),d=[],p=-1,h=0;function v(x,P){var C=arguments.length>2&&arguments[2]!==void 0?arguments[2]:[];return ra({children:x,lineNumber:P,lineNumberStyle:s,largestLineNumber:i,showInlineLineNumbers:r,lineProps:n,className:C,showLineNumbers:o,wrapLongLines:l,wrapLines:t})}function w(x,P){if(o&&P&&r){var C=vg(s,P,i);x.unshift(yg(P,C))}return x}function $(x,P){var C=arguments.length>2&&arguments[2]!==void 0?arguments[2]:[];return t||C.length>0?v(x,P,C):w(x,P)}for(var f=function(){var P=u[h],C=P.children[0].value,k=mq(C);if(k){var I=C.split(`
`);I.forEach(function(_,M){var F=o&&d.length+a,D={type:"text",value:"".concat(_,`
`)};if(M===0){var T=u.slice(p+1,h).concat(ra({children:[D],className:P.properties.className})),U=$(T,F);d.push(U)}else if(M===I.length-1){var G=u[h+1]&&u[h+1].children&&u[h+1].children[0],H={type:"text",value:"".concat(_)};if(G){var E=ra({children:[H],className:P.properties.className});u.splice(h+1,0,E)}else{var z=[H],O=$(z,F,P.properties.className);d.push(O)}}else{var j=[D],B=$(j,F,P.properties.className);d.push(B)}}),p=h}h++};h<u.length;)f();if(p!==u.length-1){var m=u.slice(p+1,u.length);if(m&&m.length){var g=o&&d.length+a,b=$(m,g);d.push(b)}}return t?d:(c=[]).concat.apply(c,d)}function vq(e){var t=e.rows,n=e.stylesheet,o=e.useInlineStyles;return t.map(function(r,a){return hg({node:r,stylesheet:n,useInlineStyles:o,key:"code-segment-".concat(a)})})}function wg(e){return e&&typeof e.highlightAuto<"u"}function bq(e){var t=e.astGenerator,n=e.language,o=e.code,r=e.defaultCodeValue;if(wg(t)){var a=uq(t,n);return n==="text"?{value:r,language:"text"}:a?t.highlight(n,o):t.highlightAuto(o)}try{return n&&n!=="text"?{value:t.highlight(o,n)}:{value:r}}catch{return{value:r}}}function wq(e,t){return function(o){var r,a,i=o.language,s=o.children,l=o.style,c=l===void 0?t:l,u=o.customStyle,d=u===void 0?{}:u,p=o.codeTagProps,h=p===void 0?{className:i?"language-".concat(i):void 0,style:Nt(Nt({},c['code[class*="language-"]']),c['code[class*="language-'.concat(i,'"]')])}:p,v=o.useInlineStyles,w=v===void 0?!0:v,$=o.showLineNumbers,f=$===void 0?!1:$,m=o.showInlineLineNumbers,g=m===void 0?!0:m,b=o.startingLineNumber,x=b===void 0?1:b,P=o.lineNumberContainerStyle,C=o.lineNumberStyle,k=C===void 0?{}:C,I=o.wrapLines,_=o.wrapLongLines,M=_===void 0?!1:_,F=o.lineProps,D=F===void 0?{}:F,T=o.renderer,U=o.PreTag,G=U===void 0?"pre":U,H=o.CodeTag,E=H===void 0?"code":H,z=o.code,O=z===void 0?(Array.isArray(s)?s[0]:s)||"":z,j=o.astGenerator,B=JG(o,dq);j=j||e;var me=f?N.createElement(fq,{containerStyle:P,codeStyle:h.style||{},numberStyle:k,startingLineNumber:x,codeString:O}):null,K=c.hljs||c['pre[class*="language-"]']||{backgroundColor:"#fff"},ie=wg(j)?"hljs":"prismjs",ue=w?Object.assign({},B,{style:Object.assign({},K,d)}):Object.assign({},B,{className:B.className?"".concat(ie," ").concat(B.className):ie,style:Object.assign({},d)});if(M?h.style=Nt({whiteSpace:"pre-wrap"},h.style):h.style=Nt({whiteSpace:"pre"},h.style),!j)return N.createElement(G,ue,me,N.createElement(E,h,O));(I===void 0&&T||M)&&(I=!0),T=T||vq;var se=[{type:"text",value:O}],Pe=bq({astGenerator:j,language:i,code:O,defaultCodeValue:se});Pe.language===null&&(Pe.value=se);var kn=(r=(a=O.match(/\n/g))===null||a===void 0?void 0:a.length)!==null&&r!==void 0?r:0,It=x+kn,lt=yq(Pe,I,D,f,g,x,It,k,M);return N.createElement(G,ue,N.createElement(E,h,!g&&me,T({rows:lt,stylesheet:c,useInlineStyles:w})))}}var xq=$q,Pq=Object.prototype.hasOwnProperty;function $q(){for(var e={},t=0;t<arguments.length;t++){var n=arguments[t];for(var o in n)Pq.call(n,o)&&(e[o]=n[o])}return e}var xg=Pg,ec=Pg.prototype;ec.space=null;ec.normal={};ec.property={};function Pg(e,t,n){this.property=e,this.normal=t,n&&(this.space=n)}var sd=xq,Sq=xg,Cq=kq;function kq(e){for(var t=e.length,n=[],o=[],r=-1,a,i;++r<t;)a=e[r],n.push(a.property),o.push(a.normal),i=a.space;return new Sq(sd.apply(null,n),sd.apply(null,o),i)}var tc=Lq;function Lq(e){return e.toLowerCase()}var $g=Sg,et=Sg.prototype;et.space=null;et.attribute=null;et.property=null;et.boolean=!1;et.booleanish=!1;et.overloadedBoolean=!1;et.number=!1;et.commaSeparated=!1;et.spaceSeparated=!1;et.commaOrSpaceSeparated=!1;et.mustUseProperty=!1;et.defined=!1;function Sg(e,t){this.property=e,this.attribute=t}var ft={},Iq=0;ft.boolean=Cn();ft.booleanish=Cn();ft.overloadedBoolean=Cn();ft.number=Cn();ft.spaceSeparated=Cn();ft.commaSeparated=Cn();ft.commaOrSpaceSeparated=Cn();function Cn(){return Math.pow(2,++Iq)}var Cg=$g,ld=ft,kg=nc;nc.prototype=new Cg;nc.prototype.defined=!0;var Lg=["boolean","booleanish","overloadedBoolean","number","commaSeparated","spaceSeparated","commaOrSpaceSeparated"],_q=Lg.length;function nc(e,t,n,o){var r=-1,a;for(cd(this,"space",o),Cg.call(this,e,t);++r<_q;)a=Lg[r],cd(this,a,(n&ld[a])===ld[a])}function cd(e,t,n){n&&(e[t]=n)}var ud=tc,Eq=xg,Rq=kg,yr=zq;function zq(e){var t=e.space,n=e.mustUseProperty||[],o=e.attributes||{},r=e.properties,a=e.transform,i={},s={},l,c;for(l in r)c=new Rq(l,a(o,l),r[l],t),n.indexOf(l)!==-1&&(c.mustUseProperty=!0),i[l]=c,s[ud(l)]=l,s[ud(c.attribute)]=l;return new Eq(i,s,t)}var Oq=yr,Dq=Oq({space:"xlink",transform:Tq,properties:{xLinkActuate:null,xLinkArcRole:null,xLinkHref:null,xLinkRole:null,xLinkShow:null,xLinkTitle:null,xLinkType:null}});function Tq(e,t){return"xlink:"+t.slice(5).toLowerCase()}var jq=yr,Aq=jq({space:"xml",transform:Mq,properties:{xmlLang:null,xmlBase:null,xmlSpace:null}});function Mq(e,t){return"xml:"+t.slice(3).toLowerCase()}var Bq=Nq;function Nq(e,t){return t in e?e[t]:t}var Fq=Bq,Ig=Uq;function Uq(e,t){return Fq(e,t.toLowerCase())}var Wq=yr,Vq=Ig,Hq=Wq({space:"xmlns",attributes:{xmlnsxlink:"xmlns:xlink"},transform:Vq,properties:{xmlns:null,xmlnsXLink:null}}),oc=ft,Gq=yr,Oe=oc.booleanish,qe=oc.number,rn=oc.spaceSeparated,qq=Gq({transform:Qq,properties:{ariaActiveDescendant:null,ariaAtomic:Oe,ariaAutoComplete:null,ariaBusy:Oe,ariaChecked:Oe,ariaColCount:qe,ariaColIndex:qe,ariaColSpan:qe,ariaControls:rn,ariaCurrent:null,ariaDescribedBy:rn,ariaDetails:null,ariaDisabled:Oe,ariaDropEffect:rn,ariaErrorMessage:null,ariaExpanded:Oe,ariaFlowTo:rn,ariaGrabbed:Oe,ariaHasPopup:null,ariaHidden:Oe,ariaInvalid:null,ariaKeyShortcuts:null,ariaLabel:null,ariaLabelledBy:rn,ariaLevel:qe,ariaLive:null,ariaModal:Oe,ariaMultiLine:Oe,ariaMultiSelectable:Oe,ariaOrientation:null,ariaOwns:rn,ariaPlaceholder:null,ariaPosInSet:qe,ariaPressed:Oe,ariaReadOnly:Oe,ariaRelevant:null,ariaRequired:Oe,ariaRoleDescription:rn,ariaRowCount:qe,ariaRowIndex:qe,ariaRowSpan:qe,ariaSelected:Oe,ariaSetSize:qe,ariaSort:null,ariaValueMax:qe,ariaValueMin:qe,ariaValueNow:qe,ariaValueText:null,role:null}});function Qq(e,t){return t==="role"?t:"aria-"+t.slice(4).toLowerCase()}var go=ft,Kq=yr,Yq=Ig,W=go.boolean,Xq=go.overloadedBoolean,Lo=go.booleanish,Z=go.number,Ie=go.spaceSeparated,Vr=go.commaSeparated,Zq=Kq({space:"html",attributes:{acceptcharset:"accept-charset",classname:"class",htmlfor:"for",httpequiv:"http-equiv"},transform:Yq,mustUseProperty:["checked","multiple","muted","selected"],properties:{abbr:null,accept:Vr,acceptCharset:Ie,accessKey:Ie,action:null,allow:null,allowFullScreen:W,allowPaymentRequest:W,allowUserMedia:W,alt:null,as:null,async:W,autoCapitalize:null,autoComplete:Ie,autoFocus:W,autoPlay:W,capture:W,charSet:null,checked:W,cite:null,className:Ie,cols:Z,colSpan:null,content:null,contentEditable:Lo,controls:W,controlsList:Ie,coords:Z|Vr,crossOrigin:null,data:null,dateTime:null,decoding:null,default:W,defer:W,dir:null,dirName:null,disabled:W,download:Xq,draggable:Lo,encType:null,enterKeyHint:null,form:null,formAction:null,formEncType:null,formMethod:null,formNoValidate:W,formTarget:null,headers:Ie,height:Z,hidden:W,high:Z,href:null,hrefLang:null,htmlFor:Ie,httpEquiv:Ie,id:null,imageSizes:null,imageSrcSet:Vr,inputMode:null,integrity:null,is:null,isMap:W,itemId:null,itemProp:Ie,itemRef:Ie,itemScope:W,itemType:Ie,kind:null,label:null,lang:null,language:null,list:null,loading:null,loop:W,low:Z,manifest:null,max:null,maxLength:Z,media:null,method:null,min:null,minLength:Z,multiple:W,muted:W,name:null,nonce:null,noModule:W,noValidate:W,onAbort:null,onAfterPrint:null,onAuxClick:null,onBeforePrint:null,onBeforeUnload:null,onBlur:null,onCancel:null,onCanPlay:null,onCanPlayThrough:null,onChange:null,onClick:null,onClose:null,onContextMenu:null,onCopy:null,onCueChange:null,onCut:null,onDblClick:null,onDrag:null,onDragEnd:null,onDragEnter:null,onDragExit:null,onDragLeave:null,onDragOver:null,onDragStart:null,onDrop:null,onDurationChange:null,onEmptied:null,onEnded:null,onError:null,onFocus:null,onFormData:null,onHashChange:null,onInput:null,onInvalid:null,onKeyDown:null,onKeyPress:null,onKeyUp:null,onLanguageChange:null,onLoad:null,onLoadedData:null,onLoadedMetadata:null,onLoadEnd:null,onLoadStart:null,onMessage:null,onMessageError:null,onMouseDown:null,onMouseEnter:null,onMouseLeave:null,onMouseMove:null,onMouseOut:null,onMouseOver:null,onMouseUp:null,onOffline:null,onOnline:null,onPageHide:null,onPageShow:null,onPaste:null,onPause:null,onPlay:null,onPlaying:null,onPopState:null,onProgress:null,onRateChange:null,onRejectionHandled:null,onReset:null,onResize:null,onScroll:null,onSecurityPolicyViolation:null,onSeeked:null,onSeeking:null,onSelect:null,onSlotChange:null,onStalled:null,onStorage:null,onSubmit:null,onSuspend:null,onTimeUpdate:null,onToggle:null,onUnhandledRejection:null,onUnload:null,onVolumeChange:null,onWaiting:null,onWheel:null,open:W,optimum:Z,pattern:null,ping:Ie,placeholder:null,playsInline:W,poster:null,preload:null,readOnly:W,referrerPolicy:null,rel:Ie,required:W,reversed:W,rows:Z,rowSpan:Z,sandbox:Ie,scope:null,scoped:W,seamless:W,selected:W,shape:null,size:Z,sizes:null,slot:null,span:Z,spellCheck:Lo,src:null,srcDoc:null,srcLang:null,srcSet:Vr,start:Z,step:null,style:null,tabIndex:Z,target:null,title:null,translate:null,type:null,typeMustMatch:W,useMap:null,value:Lo,width:Z,wrap:null,align:null,aLink:null,archive:Ie,axis:null,background:null,bgColor:null,border:Z,borderColor:null,bottomMargin:Z,cellPadding:null,cellSpacing:null,char:null,charOff:null,classId:null,clear:null,code:null,codeBase:null,codeType:null,color:null,compact:W,declare:W,event:null,face:null,frame:null,frameBorder:null,hSpace:Z,leftMargin:Z,link:null,longDesc:null,lowSrc:null,marginHeight:Z,marginWidth:Z,noResize:W,noHref:W,noShade:W,noWrap:W,object:null,profile:null,prompt:null,rev:null,rightMargin:Z,rules:null,scheme:null,scrolling:Lo,standby:null,summary:null,text:null,topMargin:Z,valueType:null,version:null,vAlign:null,vLink:null,vSpace:Z,allowTransparency:null,autoCorrect:null,autoSave:null,disablePictureInPicture:W,disableRemotePlayback:W,prefix:null,property:null,results:Z,security:null,unselectable:null}}),Jq=Cq,eQ=Dq,tQ=Aq,nQ=Hq,oQ=qq,rQ=Zq,aQ=Jq([tQ,eQ,nQ,oQ,rQ]),iQ=tc,sQ=kg,lQ=$g,rc="data",cQ=pQ,uQ=/^data[-\w.:]+$/i,_g=/-[a-z]/g,dQ=/[A-Z]/g;function pQ(e,t){var n=iQ(t),o=t,r=lQ;return n in e.normal?e.property[e.normal[n]]:(n.length>4&&n.slice(0,4)===rc&&uQ.test(t)&&(t.charAt(4)==="-"?o=mQ(t):t=gQ(t),r=sQ),new r(o,t))}function mQ(e){var t=e.slice(5).replace(_g,hQ);return rc+t.charAt(0).toUpperCase()+t.slice(1)}function gQ(e){var t=e.slice(4);return _g.test(t)?e:(t=t.replace(dQ,fQ),t.charAt(0)!=="-"&&(t="-"+t),rc+t)}function fQ(e){return"-"+e.toLowerCase()}function hQ(e){return e.charAt(1).toUpperCase()}var yQ=vQ,dd=/[#.]/g;function vQ(e,t){for(var n=e||"",o=t||"div",r={},a=0,i,s,l;a<n.length;)dd.lastIndex=a,l=dd.exec(n),i=n.slice(a,l?l.index:n.length),i&&(s?s==="#"?r.id=i:r.className?r.className.push(i):r.className=[i]:o=i,a+=i.length),l&&(s=l[0],a++);return{type:"element",tagName:o,properties:r,children:[]}}var ac={};ac.parse=xQ;ac.stringify=PQ;var pd="",bQ=" ",wQ=/[ \t\n\r\f]+/g;function xQ(e){var t=String(e||pd).trim();return t===pd?[]:t.split(wQ)}function PQ(e){return e.join(bQ).trim()}var ic={};ic.parse=$Q;ic.stringify=SQ;var qs=",",md=" ",Do="";function $Q(e){for(var t=[],n=String(e||Do),o=n.indexOf(qs),r=0,a=!1,i;!a;)o===-1&&(o=n.length,a=!0),i=n.slice(r,o).trim(),(i||!a)&&t.push(i),r=o+1,o=n.indexOf(qs,r);return t}function SQ(e,t){var n=t||{},o=n.padLeft===!1?Do:md,r=n.padRight?md:Do;return e[e.length-1]===Do&&(e=e.concat(Do)),e.join(r+qs+o).trim()}var CQ=cQ,gd=tc,kQ=yQ,fd=ac.parse,hd=ic.parse,LQ=_Q,IQ={}.hasOwnProperty;function _Q(e,t,n){var o=n?DQ(n):null;return r;function r(i,s){var l=kQ(i,t),c=Array.prototype.slice.call(arguments,2),u=l.tagName.toLowerCase(),d;if(l.tagName=o&&IQ.call(o,u)?o[u]:u,s&&EQ(s,l)&&(c.unshift(s),s=null),s)for(d in s)a(l.properties,d,s[d]);return Eg(l.children,c),l.tagName==="template"&&(l.content={type:"root",children:l.children},l.children=[]),l}function a(i,s,l){var c,u,d;l==null||l!==l||(c=CQ(e,s),u=c.property,d=l,typeof d=="string"&&(c.spaceSeparated?d=fd(d):c.commaSeparated?d=hd(d):c.commaOrSpaceSeparated&&(d=fd(hd(d).join(" ")))),u==="style"&&typeof l!="string"&&(d=OQ(d)),u==="className"&&i.className&&(d=i.className.concat(d)),i[u]=zQ(c,u,d))}}function EQ(e,t){return typeof e=="string"||"length"in e||RQ(t.tagName,e)}function RQ(e,t){var n=t.type;return e==="input"||!n||typeof n!="string"?!1:typeof t.children=="object"&&"length"in t.children?!0:(n=n.toLowerCase(),e==="button"?n!=="menu"&&n!=="submit"&&n!=="reset"&&n!=="button":"value"in t)}function Eg(e,t){var n,o;if(typeof t=="string"||typeof t=="number"){e.push({type:"text",value:String(t)});return}if(typeof t=="object"&&"length"in t){for(n=-1,o=t.length;++n<o;)Eg(e,t[n]);return}if(typeof t!="object"||!("type"in t))throw new Error("Expected node, nodes, or string, got `"+t+"`");e.push(t)}function zQ(e,t,n){var o,r,a;if(typeof n!="object"||!("length"in n))return yd(e,t,n);for(r=n.length,o=-1,a=[];++o<r;)a[o]=yd(e,t,n[o]);return a}function yd(e,t,n){var o=n;return e.number||e.positiveNumber?!isNaN(o)&&o!==""&&(o=Number(o)):(e.boolean||e.overloadedBoolean)&&typeof o=="string"&&(o===""||gd(n)===gd(t))&&(o=!0),o}function OQ(e){var t=[],n;for(n in e)t.push([n,e[n]].join(": "));return t.join("; ")}function DQ(e){for(var t=e.length,n=-1,o={},r;++n<t;)r=e[n],o[r.toLowerCase()]=r;return o}var TQ=aQ,jQ=LQ,Rg=jQ(TQ,"div");Rg.displayName="html";var AQ=Rg,MQ=AQ;const BQ="Æ",NQ="&",FQ="Á",UQ="Â",WQ="À",VQ="Å",HQ="Ã",GQ="Ä",qQ="©",QQ="Ç",KQ="Ð",YQ="É",XQ="Ê",ZQ="È",JQ="Ë",eK=">",tK="Í",nK="Î",oK="Ì",rK="Ï",aK="<",iK="Ñ",sK="Ó",lK="Ô",cK="Ò",uK="Ø",dK="Õ",pK="Ö",mK='"',gK="®",fK="Þ",hK="Ú",yK="Û",vK="Ù",bK="Ü",wK="Ý",xK="á",PK="â",$K="´",SK="æ",CK="à",kK="&",LK="å",IK="ã",_K="ä",EK="¦",RK="ç",zK="¸",OK="¢",DK="©",TK="¤",jK="°",AK="÷",MK="é",BK="ê",NK="è",FK="ð",UK="ë",WK="½",VK="¼",HK="¾",GK=">",qK="í",QK="î",KK="¡",YK="ì",XK="¿",ZK="ï",JK="«",eY="<",tY="¯",nY="µ",oY="·",rY=" ",aY="¬",iY="ñ",sY="ó",lY="ô",cY="ò",uY="ª",dY="º",pY="ø",mY="õ",gY="ö",fY="¶",hY="±",yY="£",vY='"',bY="»",wY="®",xY="§",PY="­",$Y="¹",SY="²",CY="³",kY="ß",LY="þ",IY="×",_Y="ú",EY="û",RY="ù",zY="¨",OY="ü",DY="ý",TY="¥",jY="ÿ",AY={AElig:BQ,AMP:NQ,Aacute:FQ,Acirc:UQ,Agrave:WQ,Aring:VQ,Atilde:HQ,Auml:GQ,COPY:qQ,Ccedil:QQ,ETH:KQ,Eacute:YQ,Ecirc:XQ,Egrave:ZQ,Euml:JQ,GT:eK,Iacute:tK,Icirc:nK,Igrave:oK,Iuml:rK,LT:aK,Ntilde:iK,Oacute:sK,Ocirc:lK,Ograve:cK,Oslash:uK,Otilde:dK,Ouml:pK,QUOT:mK,REG:gK,THORN:fK,Uacute:hK,Ucirc:yK,Ugrave:vK,Uuml:bK,Yacute:wK,aacute:xK,acirc:PK,acute:$K,aelig:SK,agrave:CK,amp:kK,aring:LK,atilde:IK,auml:_K,brvbar:EK,ccedil:RK,cedil:zK,cent:OK,copy:DK,curren:TK,deg:jK,divide:AK,eacute:MK,ecirc:BK,egrave:NK,eth:FK,euml:UK,frac12:WK,frac14:VK,frac34:HK,gt:GK,iacute:qK,icirc:QK,iexcl:KK,igrave:YK,iquest:XK,iuml:ZK,laquo:JK,lt:eY,macr:tY,micro:nY,middot:oY,nbsp:rY,not:aY,ntilde:iY,oacute:sY,ocirc:lY,ograve:cY,ordf:uY,ordm:dY,oslash:pY,otilde:mY,ouml:gY,para:fY,plusmn:hY,pound:yY,quot:vY,raquo:bY,reg:wY,sect:xY,shy:PY,sup1:$Y,sup2:SY,sup3:CY,szlig:kY,thorn:LY,times:IY,uacute:_Y,ucirc:EY,ugrave:RY,uml:zY,uuml:OY,yacute:DY,yen:TY,yuml:jY},MY={0:"�",128:"€",130:"‚",131:"ƒ",132:"„",133:"…",134:"†",135:"‡",136:"ˆ",137:"‰",138:"Š",139:"‹",140:"Œ",142:"Ž",145:"‘",146:"’",147:"“",148:"”",149:"•",150:"–",151:"—",152:"˜",153:"™",154:"š",155:"›",156:"œ",158:"ž",159:"Ÿ"};var zg=BY;function BY(e){var t=typeof e=="string"?e.charCodeAt(0):e;return t>=48&&t<=57}var NY=FY;function FY(e){var t=typeof e=="string"?e.charCodeAt(0):e;return t>=97&&t<=102||t>=65&&t<=70||t>=48&&t<=57}var UY=WY;function WY(e){var t=typeof e=="string"?e.charCodeAt(0):e;return t>=97&&t<=122||t>=65&&t<=90}var VY=UY,HY=zg,GY=qY;function qY(e){return VY(e)||HY(e)}var Hr,QY=59,KY=YY;function YY(e){var t="&"+e+";",n;return Hr=Hr||document.createElement("i"),Hr.innerHTML=t,n=Hr.textContent,n.charCodeAt(n.length-1)===QY&&e!=="semi"||n===t?!1:n}var vd=AY,bd=MY,XY=zg,ZY=NY,Og=GY,JY=KY,eX=mX,tX={}.hasOwnProperty,En=String.fromCharCode,nX=Function.prototype,wd={warning:null,reference:null,text:null,warningContext:null,referenceContext:null,textContext:null,position:{},additional:null,attribute:!1,nonTerminated:!0},oX=9,xd=10,rX=12,aX=32,Pd=38,iX=59,sX=60,lX=61,cX=35,uX=88,dX=120,pX=65533,zn="named",sc="hexadecimal",lc="decimal",cc={};cc[sc]=16;cc[lc]=10;var Ja={};Ja[zn]=Og;Ja[lc]=XY;Ja[sc]=ZY;var Dg=1,Tg=2,jg=3,Ag=4,Mg=5,Qs=6,Bg=7,on={};on[Dg]="Named character references must be terminated by a semicolon";on[Tg]="Numeric character references must be terminated by a semicolon";on[jg]="Named character references cannot be empty";on[Ag]="Numeric character references cannot be empty";on[Mg]="Named character references must be known";on[Qs]="Numeric character references cannot be disallowed";on[Bg]="Numeric character references cannot be outside the permissible Unicode range";function mX(e,t){var n={},o,r;t||(t={});for(r in wd)o=t[r],n[r]=o??wd[r];return(n.position.indent||n.position.start)&&(n.indent=n.position.indent||[],n.position=n.position.start),gX(e,n)}function gX(e,t){var n=t.additional,o=t.nonTerminated,r=t.text,a=t.reference,i=t.warning,s=t.textContext,l=t.referenceContext,c=t.warningContext,u=t.position,d=t.indent||[],p=e.length,h=0,v=-1,w=u.column||1,$=u.line||1,f="",m=[],g,b,x,P,C,k,I,_,M,F,D,T,U,G,H,E,z,O,j;for(typeof n=="string"&&(n=n.charCodeAt(0)),E=B(),_=i?me:nX,h--,p++;++h<p;)if(C===xd&&(w=d[v]||1),C=e.charCodeAt(h),C===Pd){if(I=e.charCodeAt(h+1),I===oX||I===xd||I===rX||I===aX||I===Pd||I===sX||I!==I||n&&I===n){f+=En(C),w++;continue}for(U=h+1,T=U,j=U,I===cX?(j=++T,I=e.charCodeAt(j),I===uX||I===dX?(G=sc,j=++T):G=lc):G=zn,g="",D="",P="",H=Ja[G],j--;++j<p&&(I=e.charCodeAt(j),!!H(I));)P+=En(I),G===zn&&tX.call(vd,P)&&(g=P,D=vd[P]);x=e.charCodeAt(j)===iX,x&&(j++,b=G===zn?JY(P):!1,b&&(g=P,D=b)),O=1+j-U,!x&&!o||(P?G===zn?(x&&!D?_(Mg,1):(g!==P&&(j=T+g.length,O=1+j-T,x=!1),x||(M=g?Dg:jg,t.attribute?(I=e.charCodeAt(j),I===lX?(_(M,O),D=null):Og(I)?D=null:_(M,O)):_(M,O))),k=D):(x||_(Tg,O),k=parseInt(P,cc[G]),fX(k)?(_(Bg,O),k=En(pX)):k in bd?(_(Qs,O),k=bd[k]):(F="",hX(k)&&_(Qs,O),k>65535&&(k-=65536,F+=En(k>>>10|55296),k=56320|k&1023),k=F+En(k))):G!==zn&&_(Ag,O)),k?(K(),E=B(),h=j-1,w+=j-U+1,m.push(k),z=B(),z.offset++,a&&a.call(l,k,{start:E,end:z},e.slice(U-1,j)),E=z):(P=e.slice(U-1,j),f+=P,w+=P.length,h=j-1)}else C===10&&($++,v++,w=0),C===C?(f+=En(C),w++):K();return m.join("");function B(){return{line:$,column:w,offset:h+(u.offset||0)}}function me(ie,ue){var se=B();se.column+=ue,se.offset+=ue,i.call(c,on[ie],se,ie)}function K(){f&&(m.push(f),r&&r.call(s,f,{start:E,end:B()}),f="")}}function fX(e){return e>=55296&&e<=57343||e>1114111}function hX(e){return e>=1&&e<=8||e===11||e>=13&&e<=31||e>=127&&e<=159||e>=64976&&e<=65007||(e&65535)===65535||(e&65535)===65534}var Ng={exports:{}};(function(e){var t=typeof window<"u"?window:typeof WorkerGlobalScope<"u"&&self instanceof WorkerGlobalScope?self:{};/**
 * Prism: Lightweight, robust, elegant syntax highlighting
 *
 * @license MIT <https://opensource.org/licenses/MIT>
 * @author Lea Verou <https://lea.verou.me>
 * @namespace
 * @public
 */var n=function(o){var r=/(?:^|\s)lang(?:uage)?-([\w-]+)(?=\s|$)/i,a=0,i={},s={manual:o.Prism&&o.Prism.manual,disableWorkerMessageHandler:o.Prism&&o.Prism.disableWorkerMessageHandler,util:{encode:function m(g){return g instanceof l?new l(g.type,m(g.content),g.alias):Array.isArray(g)?g.map(m):g.replace(/&/g,"&amp;").replace(/</g,"&lt;").replace(/\u00a0/g," ")},type:function(m){return Object.prototype.toString.call(m).slice(8,-1)},objId:function(m){return m.__id||Object.defineProperty(m,"__id",{value:++a}),m.__id},clone:function m(g,b){b=b||{};var x,P;switch(s.util.type(g)){case"Object":if(P=s.util.objId(g),b[P])return b[P];x={},b[P]=x;for(var C in g)g.hasOwnProperty(C)&&(x[C]=m(g[C],b));return x;case"Array":return P=s.util.objId(g),b[P]?b[P]:(x=[],b[P]=x,g.forEach(function(k,I){x[I]=m(k,b)}),x);default:return g}},getLanguage:function(m){for(;m;){var g=r.exec(m.className);if(g)return g[1].toLowerCase();m=m.parentElement}return"none"},setLanguage:function(m,g){m.className=m.className.replace(RegExp(r,"gi"),""),m.classList.add("language-"+g)},currentScript:function(){if(typeof document>"u")return null;if("currentScript"in document)return document.currentScript;try{throw new Error}catch(x){var m=(/at [^(\r\n]*\((.*):[^:]+:[^:]+\)$/i.exec(x.stack)||[])[1];if(m){var g=document.getElementsByTagName("script");for(var b in g)if(g[b].src==m)return g[b]}return null}},isActive:function(m,g,b){for(var x="no-"+g;m;){var P=m.classList;if(P.contains(g))return!0;if(P.contains(x))return!1;m=m.parentElement}return!!b}},languages:{plain:i,plaintext:i,text:i,txt:i,extend:function(m,g){var b=s.util.clone(s.languages[m]);for(var x in g)b[x]=g[x];return b},insertBefore:function(m,g,b,x){x=x||s.languages;var P=x[m],C={};for(var k in P)if(P.hasOwnProperty(k)){if(k==g)for(var I in b)b.hasOwnProperty(I)&&(C[I]=b[I]);b.hasOwnProperty(k)||(C[k]=P[k])}var _=x[m];return x[m]=C,s.languages.DFS(s.languages,function(M,F){F===_&&M!=m&&(this[M]=C)}),C},DFS:function m(g,b,x,P){P=P||{};var C=s.util.objId;for(var k in g)if(g.hasOwnProperty(k)){b.call(g,k,g[k],x||k);var I=g[k],_=s.util.type(I);_==="Object"&&!P[C(I)]?(P[C(I)]=!0,m(I,b,null,P)):_==="Array"&&!P[C(I)]&&(P[C(I)]=!0,m(I,b,k,P))}}},plugins:{},highlightAll:function(m,g){s.highlightAllUnder(document,m,g)},highlightAllUnder:function(m,g,b){var x={callback:b,container:m,selector:'code[class*="language-"], [class*="language-"] code, code[class*="lang-"], [class*="lang-"] code'};s.hooks.run("before-highlightall",x),x.elements=Array.prototype.slice.apply(x.container.querySelectorAll(x.selector)),s.hooks.run("before-all-elements-highlight",x);for(var P=0,C;C=x.elements[P++];)s.highlightElement(C,g===!0,x.callback)},highlightElement:function(m,g,b){var x=s.util.getLanguage(m),P=s.languages[x];s.util.setLanguage(m,x);var C=m.parentElement;C&&C.nodeName.toLowerCase()==="pre"&&s.util.setLanguage(C,x);var k=m.textContent,I={element:m,language:x,grammar:P,code:k};function _(F){I.highlightedCode=F,s.hooks.run("before-insert",I),I.element.innerHTML=I.highlightedCode,s.hooks.run("after-highlight",I),s.hooks.run("complete",I),b&&b.call(I.element)}if(s.hooks.run("before-sanity-check",I),C=I.element.parentElement,C&&C.nodeName.toLowerCase()==="pre"&&!C.hasAttribute("tabindex")&&C.setAttribute("tabindex","0"),!I.code){s.hooks.run("complete",I),b&&b.call(I.element);return}if(s.hooks.run("before-highlight",I),!I.grammar){_(s.util.encode(I.code));return}if(g&&o.Worker){var M=new Worker(s.filename);M.onmessage=function(F){_(F.data)},M.postMessage(JSON.stringify({language:I.language,code:I.code,immediateClose:!0}))}else _(s.highlight(I.code,I.grammar,I.language))},highlight:function(m,g,b){var x={code:m,grammar:g,language:b};if(s.hooks.run("before-tokenize",x),!x.grammar)throw new Error('The language "'+x.language+'" has no grammar.');return x.tokens=s.tokenize(x.code,x.grammar),s.hooks.run("after-tokenize",x),l.stringify(s.util.encode(x.tokens),x.language)},tokenize:function(m,g){var b=g.rest;if(b){for(var x in b)g[x]=b[x];delete g.rest}var P=new d;return p(P,P.head,m),u(m,P,g,P.head,0),v(P)},hooks:{all:{},add:function(m,g){var b=s.hooks.all;b[m]=b[m]||[],b[m].push(g)},run:function(m,g){var b=s.hooks.all[m];if(!(!b||!b.length))for(var x=0,P;P=b[x++];)P(g)}},Token:l};o.Prism=s;function l(m,g,b,x){this.type=m,this.content=g,this.alias=b,this.length=(x||"").length|0}l.stringify=function m(g,b){if(typeof g=="string")return g;if(Array.isArray(g)){var x="";return g.forEach(function(_){x+=m(_,b)}),x}var P={type:g.type,content:m(g.content,b),tag:"span",classes:["token",g.type],attributes:{},language:b},C=g.alias;C&&(Array.isArray(C)?Array.prototype.push.apply(P.classes,C):P.classes.push(C)),s.hooks.run("wrap",P);var k="";for(var I in P.attributes)k+=" "+I+'="'+(P.attributes[I]||"").replace(/"/g,"&quot;")+'"';return"<"+P.tag+' class="'+P.classes.join(" ")+'"'+k+">"+P.content+"</"+P.tag+">"};function c(m,g,b,x){m.lastIndex=g;var P=m.exec(b);if(P&&x&&P[1]){var C=P[1].length;P.index+=C,P[0]=P[0].slice(C)}return P}function u(m,g,b,x,P,C){for(var k in b)if(!(!b.hasOwnProperty(k)||!b[k])){var I=b[k];I=Array.isArray(I)?I:[I];for(var _=0;_<I.length;++_){if(C&&C.cause==k+","+_)return;var M=I[_],F=M.inside,D=!!M.lookbehind,T=!!M.greedy,U=M.alias;if(T&&!M.pattern.global){var G=M.pattern.toString().match(/[imsuy]*$/)[0];M.pattern=RegExp(M.pattern.source,G+"g")}for(var H=M.pattern||M,E=x.next,z=P;E!==g.tail&&!(C&&z>=C.reach);z+=E.value.length,E=E.next){var O=E.value;if(g.length>m.length)return;if(!(O instanceof l)){var j=1,B;if(T){if(B=c(H,z,m,D),!B||B.index>=m.length)break;var ue=B.index,me=B.index+B[0].length,K=z;for(K+=E.value.length;ue>=K;)E=E.next,K+=E.value.length;if(K-=E.value.length,z=K,E.value instanceof l)continue;for(var ie=E;ie!==g.tail&&(K<me||typeof ie.value=="string");ie=ie.next)j++,K+=ie.value.length;j--,O=m.slice(z,K),B.index-=z}else if(B=c(H,0,O,D),!B)continue;var ue=B.index,se=B[0],Pe=O.slice(0,ue),kn=O.slice(ue+se.length),It=z+O.length;C&&It>C.reach&&(C.reach=It);var lt=E.prev;Pe&&(lt=p(g,lt,Pe),z+=Pe.length),h(g,lt,j);var wr=new l(k,F?s.tokenize(se,F):se,U,se);if(E=p(g,lt,wr),kn&&p(g,E,kn),j>1){var _t={cause:k+","+_,reach:It};u(m,g,b,E.prev,z,_t),C&&_t.reach>C.reach&&(C.reach=_t.reach)}}}}}}function d(){var m={value:null,prev:null,next:null},g={value:null,prev:m,next:null};m.next=g,this.head=m,this.tail=g,this.length=0}function p(m,g,b){var x=g.next,P={value:b,prev:g,next:x};return g.next=P,x.prev=P,m.length++,P}function h(m,g,b){for(var x=g.next,P=0;P<b&&x!==m.tail;P++)x=x.next;g.next=x,x.prev=g,m.length-=P}function v(m){for(var g=[],b=m.head.next;b!==m.tail;)g.push(b.value),b=b.next;return g}if(!o.document)return o.addEventListener&&(s.disableWorkerMessageHandler||o.addEventListener("message",function(m){var g=JSON.parse(m.data),b=g.language,x=g.code,P=g.immediateClose;o.postMessage(s.highlight(x,s.languages[b],b)),P&&o.close()},!1)),s;var w=s.util.currentScript();w&&(s.filename=w.src,w.hasAttribute("data-manual")&&(s.manual=!0));function $(){s.manual||s.highlightAll()}if(!s.manual){var f=document.readyState;f==="loading"||f==="interactive"&&w&&w.defer?document.addEventListener("DOMContentLoaded",$):window.requestAnimationFrame?window.requestAnimationFrame($):window.setTimeout($,16)}return s}(t);e.exports&&(e.exports=n),typeof aa<"u"&&(aa.Prism=n)})(Ng);var yX=Ng.exports,vX=uc;uc.displayName="markup";uc.aliases=["html","mathml","svg","xml","ssml","atom","rss"];function uc(e){e.languages.markup={comment:{pattern:/<!--(?:(?!<!--)[\s\S])*?-->/,greedy:!0},prolog:{pattern:/<\?[\s\S]+?\?>/,greedy:!0},doctype:{pattern:/<!DOCTYPE(?:[^>"'[\]]|"[^"]*"|'[^']*')+(?:\[(?:[^<"'\]]|"[^"]*"|'[^']*'|<(?!!--)|<!--(?:[^-]|-(?!->))*-->)*\]\s*)?>/i,greedy:!0,inside:{"internal-subset":{pattern:/(^[^\[]*\[)[\s\S]+(?=\]>$)/,lookbehind:!0,greedy:!0,inside:null},string:{pattern:/"[^"]*"|'[^']*'/,greedy:!0},punctuation:/^<!|>$|[[\]]/,"doctype-tag":/^DOCTYPE/i,name:/[^\s<>'"]+/}},cdata:{pattern:/<!\[CDATA\[[\s\S]*?\]\]>/i,greedy:!0},tag:{pattern:/<\/?(?!\d)[^\s>\/=$<%]+(?:\s(?:\s*[^\s>\/=]+(?:\s*=\s*(?:"[^"]*"|'[^']*'|[^\s'">=]+(?=[\s>]))|(?=[\s/>])))+)?\s*\/?>/,greedy:!0,inside:{tag:{pattern:/^<\/?[^\s>\/]+/,inside:{punctuation:/^<\/?/,namespace:/^[^\s>\/:]+:/}},"special-attr":[],"attr-value":{pattern:/=\s*(?:"[^"]*"|'[^']*'|[^\s'">=]+)/,inside:{punctuation:[{pattern:/^=/,alias:"attr-equals"},/"|'/]}},punctuation:/\/?>/,"attr-name":{pattern:/[^\s>\/]+/,inside:{namespace:/^[^\s>\/:]+:/}}}},entity:[{pattern:/&[\da-z]{1,8};/i,alias:"named-entity"},/&#x?[\da-f]{1,8};/i]},e.languages.markup.tag.inside["attr-value"].inside.entity=e.languages.markup.entity,e.languages.markup.doctype.inside["internal-subset"].inside=e.languages.markup,e.hooks.add("wrap",function(t){t.type==="entity"&&(t.attributes.title=t.content.value.replace(/&amp;/,"&"))}),Object.defineProperty(e.languages.markup.tag,"addInlined",{value:function(n,o){var r={};r["language-"+o]={pattern:/(^<!\[CDATA\[)[\s\S]+?(?=\]\]>$)/i,lookbehind:!0,inside:e.languages[o]},r.cdata=/^<!\[CDATA\[|\]\]>$/i;var a={"included-cdata":{pattern:/<!\[CDATA\[[\s\S]*?\]\]>/i,inside:r}};a["language-"+o]={pattern:/[\s\S]+/,inside:e.languages[o]};var i={};i[n]={pattern:RegExp(/(<__[^>]*>)(?:<!\[CDATA\[(?:[^\]]|\](?!\]>))*\]\]>|(?!<!\[CDATA\[)[\s\S])*?(?=<\/__>)/.source.replace(/__/g,function(){return n}),"i"),lookbehind:!0,greedy:!0,inside:a},e.languages.insertBefore("markup","cdata",i)}}),Object.defineProperty(e.languages.markup.tag,"addAttribute",{value:function(t,n){e.languages.markup.tag.inside["special-attr"].push({pattern:RegExp(/(^|["'\s])/.source+"(?:"+t+")"+/\s*=\s*(?:"[^"]*"|'[^']*'|[^\s'">=]+(?=[\s>]))/.source,"i"),lookbehind:!0,inside:{"attr-name":/^[^\s=]+/,"attr-value":{pattern:/=[\s\S]+/,inside:{value:{pattern:/(^=\s*(["']|(?!["'])))\S[\s\S]*(?=\2$)/,lookbehind:!0,alias:[n,"language-"+n],inside:e.languages[n]},punctuation:[{pattern:/^=/,alias:"attr-equals"},/"|'/]}}}})}}),e.languages.html=e.languages.markup,e.languages.mathml=e.languages.markup,e.languages.svg=e.languages.markup,e.languages.xml=e.languages.extend("markup",{}),e.languages.ssml=e.languages.xml,e.languages.atom=e.languages.xml,e.languages.rss=e.languages.xml}var bX=dc;dc.displayName="css";dc.aliases=[];function dc(e){(function(t){var n=/(?:"(?:\\(?:\r\n|[\s\S])|[^"\\\r\n])*"|'(?:\\(?:\r\n|[\s\S])|[^'\\\r\n])*')/;t.languages.css={comment:/\/\*[\s\S]*?\*\//,atrule:{pattern:/@[\w-](?:[^;{\s]|\s+(?![\s{]))*(?:;|(?=\s*\{))/,inside:{rule:/^@[\w-]+/,"selector-function-argument":{pattern:/(\bselector\s*\(\s*(?![\s)]))(?:[^()\s]|\s+(?![\s)])|\((?:[^()]|\([^()]*\))*\))+(?=\s*\))/,lookbehind:!0,alias:"selector"},keyword:{pattern:/(^|[^\w-])(?:and|not|only|or)(?![\w-])/,lookbehind:!0}}},url:{pattern:RegExp("\\burl\\((?:"+n.source+"|"+/(?:[^\\\r\n()"']|\\[\s\S])*/.source+")\\)","i"),greedy:!0,inside:{function:/^url/i,punctuation:/^\(|\)$/,string:{pattern:RegExp("^"+n.source+"$"),alias:"url"}}},selector:{pattern:RegExp(`(^|[{}\\s])[^{}\\s](?:[^{};"'\\s]|\\s+(?![\\s{])|`+n.source+")*(?=\\s*\\{)"),lookbehind:!0},string:{pattern:n,greedy:!0},property:{pattern:/(^|[^-\w\xA0-\uFFFF])(?!\s)[-_a-z\xA0-\uFFFF](?:(?!\s)[-\w\xA0-\uFFFF])*(?=\s*:)/i,lookbehind:!0},important:/!important\b/i,function:{pattern:/(^|[^-a-z0-9])[-a-z0-9]+(?=\()/i,lookbehind:!0},punctuation:/[(){};:,]/},t.languages.css.atrule.inside.rest=t.languages.css;var o=t.languages.markup;o&&(o.tag.addInlined("style","css"),o.tag.addAttribute("style","css"))})(e)}var wX=pc;pc.displayName="clike";pc.aliases=[];function pc(e){e.languages.clike={comment:[{pattern:/(^|[^\\])\/\*[\s\S]*?(?:\*\/|$)/,lookbehind:!0,greedy:!0},{pattern:/(^|[^\\:])\/\/.*/,lookbehind:!0,greedy:!0}],string:{pattern:/(["'])(?:\\(?:\r\n|[\s\S])|(?!\1)[^\\\r\n])*\1/,greedy:!0},"class-name":{pattern:/(\b(?:class|extends|implements|instanceof|interface|new|trait)\s+|\bcatch\s+\()[\w.\\]+/i,lookbehind:!0,inside:{punctuation:/[.\\]/}},keyword:/\b(?:break|catch|continue|do|else|finally|for|function|if|in|instanceof|new|null|return|throw|try|while)\b/,boolean:/\b(?:false|true)\b/,function:/\b\w+(?=\()/,number:/\b0x[\da-f]+\b|(?:\b\d+(?:\.\d*)?|\B\.\d+)(?:e[+-]?\d+)?/i,operator:/[<>]=?|[!=]=?=?|--?|\+\+?|&&?|\|\|?|[?*/~^%]/,punctuation:/[{}[\];(),.:]/}}var Fg=mc;mc.displayName="javascript";mc.aliases=["js"];function mc(e){e.languages.javascript=e.languages.extend("clike",{"class-name":[e.languages.clike["class-name"],{pattern:/(^|[^$\w\xA0-\uFFFF])(?!\s)[_$A-Z\xA0-\uFFFF](?:(?!\s)[$\w\xA0-\uFFFF])*(?=\.(?:constructor|prototype))/,lookbehind:!0}],keyword:[{pattern:/((?:^|\})\s*)catch\b/,lookbehind:!0},{pattern:/(^|[^.]|\.\.\.\s*)\b(?:as|assert(?=\s*\{)|async(?=\s*(?:function\b|\(|[$\w\xA0-\uFFFF]|$))|await|break|case|class|const|continue|debugger|default|delete|do|else|enum|export|extends|finally(?=\s*(?:\{|$))|for|from(?=\s*(?:['"]|$))|function|(?:get|set)(?=\s*(?:[#\[$\w\xA0-\uFFFF]|$))|if|implements|import|in|instanceof|interface|let|new|null|of|package|private|protected|public|return|static|super|switch|this|throw|try|typeof|undefined|var|void|while|with|yield)\b/,lookbehind:!0}],function:/#?(?!\s)[_$a-zA-Z\xA0-\uFFFF](?:(?!\s)[$\w\xA0-\uFFFF])*(?=\s*(?:\.\s*(?:apply|bind|call)\s*)?\()/,number:{pattern:RegExp(/(^|[^\w$])/.source+"(?:"+(/NaN|Infinity/.source+"|"+/0[bB][01]+(?:_[01]+)*n?/.source+"|"+/0[oO][0-7]+(?:_[0-7]+)*n?/.source+"|"+/0[xX][\dA-Fa-f]+(?:_[\dA-Fa-f]+)*n?/.source+"|"+/\d+(?:_\d+)*n/.source+"|"+/(?:\d+(?:_\d+)*(?:\.(?:\d+(?:_\d+)*)?)?|\.\d+(?:_\d+)*)(?:[Ee][+-]?\d+(?:_\d+)*)?/.source)+")"+/(?![\w$])/.source),lookbehind:!0},operator:/--|\+\+|\*\*=?|=>|&&=?|\|\|=?|[!=]==|<<=?|>>>?=?|[-+*/%&|^!=<>]=?|\.{3}|\?\?=?|\?\.?|[~:]/}),e.languages.javascript["class-name"][0].pattern=/(\b(?:class|extends|implements|instanceof|interface|new)\s+)[\w.\\]+/,e.languages.insertBefore("javascript","keyword",{regex:{pattern:/((?:^|[^$\w\xA0-\uFFFF."'\])\s]|\b(?:return|yield))\s*)\/(?:\[(?:[^\]\\\r\n]|\\.)*\]|\\.|[^/\\\[\r\n])+\/[dgimyus]{0,7}(?=(?:\s|\/\*(?:[^*]|\*(?!\/))*\*\/)*(?:$|[\r\n,.;:})\]]|\/\/))/,lookbehind:!0,greedy:!0,inside:{"regex-source":{pattern:/^(\/)[\s\S]+(?=\/[a-z]*$)/,lookbehind:!0,alias:"language-regex",inside:e.languages.regex},"regex-delimiter":/^\/|\/$/,"regex-flags":/^[a-z]+$/}},"function-variable":{pattern:/#?(?!\s)[_$a-zA-Z\xA0-\uFFFF](?:(?!\s)[$\w\xA0-\uFFFF])*(?=\s*[=:]\s*(?:async\s*)?(?:\bfunction\b|(?:\((?:[^()]|\([^()]*\))*\)|(?!\s)[_$a-zA-Z\xA0-\uFFFF](?:(?!\s)[$\w\xA0-\uFFFF])*)\s*=>))/,alias:"function"},parameter:[{pattern:/(function(?:\s+(?!\s)[_$a-zA-Z\xA0-\uFFFF](?:(?!\s)[$\w\xA0-\uFFFF])*)?\s*\(\s*)(?!\s)(?:[^()\s]|\s+(?![\s)])|\([^()]*\))+(?=\s*\))/,lookbehind:!0,inside:e.languages.javascript},{pattern:/(^|[^$\w\xA0-\uFFFF])(?!\s)[_$a-z\xA0-\uFFFF](?:(?!\s)[$\w\xA0-\uFFFF])*(?=\s*=>)/i,lookbehind:!0,inside:e.languages.javascript},{pattern:/(\(\s*)(?!\s)(?:[^()\s]|\s+(?![\s)])|\([^()]*\))+(?=\s*\)\s*=>)/,lookbehind:!0,inside:e.languages.javascript},{pattern:/((?:\b|\s|^)(?!(?:as|async|await|break|case|catch|class|const|continue|debugger|default|delete|do|else|enum|export|extends|finally|for|from|function|get|if|implements|import|in|instanceof|interface|let|new|null|of|package|private|protected|public|return|set|static|super|switch|this|throw|try|typeof|undefined|var|void|while|with|yield)(?![$\w\xA0-\uFFFF]))(?:(?!\s)[_$a-zA-Z\xA0-\uFFFF](?:(?!\s)[$\w\xA0-\uFFFF])*\s*)\(\s*|\]\s*\(\s*)(?!\s)(?:[^()\s]|\s+(?![\s)])|\([^()]*\))+(?=\s*\)\s*\{)/,lookbehind:!0,inside:e.languages.javascript}],constant:/\b[A-Z](?:[A-Z_]|\dx?)*\b/}),e.languages.insertBefore("javascript","string",{hashbang:{pattern:/^#!.*/,greedy:!0,alias:"comment"},"template-string":{pattern:/`(?:\\[\s\S]|\$\{(?:[^{}]|\{(?:[^{}]|\{[^}]*\})*\})+\}|(?!\$\{)[^\\`])*`/,greedy:!0,inside:{"template-punctuation":{pattern:/^`|`$/,alias:"string"},interpolation:{pattern:/((?:^|[^\\])(?:\\{2})*)\$\{(?:[^{}]|\{(?:[^{}]|\{[^}]*\})*\})+\}/,lookbehind:!0,inside:{"interpolation-punctuation":{pattern:/^\$\{|\}$/,alias:"punctuation"},rest:e.languages.javascript}},string:/[\s\S]+/}},"string-property":{pattern:/((?:^|[,{])[ \t]*)(["'])(?:\\(?:\r\n|[\s\S])|(?!\2)[^\\\r\n])*\2(?=\s*:)/m,lookbehind:!0,greedy:!0,alias:"property"}}),e.languages.insertBefore("javascript","operator",{"literal-property":{pattern:/((?:^|[,{])[ \t]*)(?!\s)[_$a-zA-Z\xA0-\uFFFF](?:(?!\s)[$\w\xA0-\uFFFF])*(?=\s*:)/m,lookbehind:!0,alias:"property"}}),e.languages.markup&&(e.languages.markup.tag.addInlined("script","javascript"),e.languages.markup.tag.addAttribute(/on(?:abort|blur|change|click|composition(?:end|start|update)|dblclick|error|focus(?:in|out)?|key(?:down|up)|load|mouse(?:down|enter|leave|move|out|over|up)|reset|resize|scroll|select|slotchange|submit|unload|wheel)/.source,"javascript")),e.languages.js=e.languages.javascript}const xX=Ta(Fg);var To=typeof globalThis=="object"?globalThis:typeof self=="object"?self:typeof window=="object"?window:typeof aa=="object"?aa:{},PX=MX();To.Prism={manual:!0,disableWorkerMessageHandler:!0};var $X=MQ,SX=eX,Ug=yX,CX=vX,kX=bX,LX=wX,IX=Fg;PX();var gc={}.hasOwnProperty;function Wg(){}Wg.prototype=Ug;var pe=new Wg,_X=pe;pe.highlight=RX;pe.register=vr;pe.alias=EX;pe.registered=zX;pe.listLanguages=OX;vr(CX);vr(kX);vr(LX);vr(IX);pe.util.encode=jX;pe.Token.stringify=DX;function vr(e){if(typeof e!="function"||!e.displayName)throw new Error("Expected `function` for `grammar`, got `"+e+"`");pe.languages[e.displayName]===void 0&&e(pe)}function EX(e,t){var n=pe.languages,o=e,r,a,i,s;t&&(o={},o[e]=t);for(r in o)for(a=o[r],a=typeof a=="string"?[a]:a,i=a.length,s=-1;++s<i;)n[a[s]]=n[r]}function RX(e,t){var n=Ug.highlight,o;if(typeof e!="string")throw new Error("Expected `string` for `value`, got `"+e+"`");if(pe.util.type(t)==="Object")o=t,t=null;else{if(typeof t!="string")throw new Error("Expected `string` for `name`, got `"+t+"`");if(gc.call(pe.languages,t))o=pe.languages[t];else throw new Error("Unknown language: `"+t+"` is not registered")}return n.call(this,e,o,t)}function zX(e){if(typeof e!="string")throw new Error("Expected `string` for `language`, got `"+e+"`");return gc.call(pe.languages,e)}function OX(){var e=pe.languages,t=[],n;for(n in e)gc.call(e,n)&&typeof e[n]=="object"&&t.push(n);return t}function DX(e,t,n){var o;return typeof e=="string"?{type:"text",value:e}:pe.util.type(e)==="Array"?TX(e,t):(o={type:e.type,content:pe.Token.stringify(e.content,t,n),tag:"span",classes:["token",e.type],attributes:{},language:t,parent:n},e.alias&&(o.classes=o.classes.concat(e.alias)),pe.hooks.run("wrap",o),$X(o.tag+"."+o.classes.join("."),AX(o.attributes),o.content))}function TX(e,t){for(var n=[],o=e.length,r=-1,a;++r<o;)a=e[r],a!==""&&a!==null&&a!==void 0&&n.push(a);for(r=-1,o=n.length;++r<o;)a=n[r],n[r]=pe.Token.stringify(a,t,n);return n}function jX(e){return e}function AX(e){var t;for(t in e)e[t]=SX(e[t]);return e}function MX(){var e="Prism"in To,t=e?To.Prism:void 0;return n;function n(){e?To.Prism=t:delete To.Prism,e=void 0,t=void 0}}const fc=Ta(_X);var br=wq(fc,{});br.registerLanguage=function(e,t){return fc.register(t)};br.alias=function(e,t){return fc.alias(e,t)};var BX=hc;hc.displayName="typescript";hc.aliases=["ts"];function hc(e){(function(t){t.languages.typescript=t.languages.extend("javascript",{"class-name":{pattern:/(\b(?:class|extends|implements|instanceof|interface|new|type)\s+)(?!keyof\b)(?!\s)[_$a-zA-Z\xA0-\uFFFF](?:(?!\s)[$\w\xA0-\uFFFF])*(?:\s*<(?:[^<>]|<(?:[^<>]|<[^<>]*>)*>)*>)?/,lookbehind:!0,greedy:!0,inside:null},builtin:/\b(?:Array|Function|Promise|any|boolean|console|never|number|string|symbol|unknown)\b/}),t.languages.typescript.keyword.push(/\b(?:abstract|declare|is|keyof|readonly|require)\b/,/\b(?:asserts|infer|interface|module|namespace|type)\b(?=\s*(?:[{_$a-zA-Z\xA0-\uFFFF]|$))/,/\btype\b(?=\s*(?:[\{*]|$))/),delete t.languages.typescript.parameter,delete t.languages.typescript["literal-property"];var n=t.languages.extend("typescript",{});delete n["class-name"],t.languages.typescript["class-name"].inside=n,t.languages.insertBefore("typescript","function",{decorator:{pattern:/@[$\w\xA0-\uFFFF]+/,inside:{at:{pattern:/^@/,alias:"operator"},function:/^[\s\S]+/}},"generic-function":{pattern:/#?(?!\s)[_$a-zA-Z\xA0-\uFFFF](?:(?!\s)[$\w\xA0-\uFFFF])*\s*<(?:[^<>]|<(?:[^<>]|<[^<>]*>)*>)*>(?=\s*\()/,greedy:!0,inside:{function:/^#?(?!\s)[_$a-zA-Z\xA0-\uFFFF](?:(?!\s)[$\w\xA0-\uFFFF])*/,generic:{pattern:/<[\s\S]+/,alias:"class-name",inside:n}}}}),t.languages.ts=t.languages.typescript})(e)}var NX=yc;yc.displayName="jsx";yc.aliases=[];function yc(e){(function(t){var n=t.util.clone(t.languages.javascript),o=/(?:\s|\/\/.*(?!.)|\/\*(?:[^*]|\*(?!\/))\*\/)/.source,r=/(?:\{(?:\{(?:\{[^{}]*\}|[^{}])*\}|[^{}])*\})/.source,a=/(?:\{<S>*\.{3}(?:[^{}]|<BRACES>)*\})/.source;function i(c,u){return c=c.replace(/<S>/g,function(){return o}).replace(/<BRACES>/g,function(){return r}).replace(/<SPREAD>/g,function(){return a}),RegExp(c,u)}a=i(a).source,t.languages.jsx=t.languages.extend("markup",n),t.languages.jsx.tag.pattern=i(/<\/?(?:[\w.:-]+(?:<S>+(?:[\w.:$-]+(?:=(?:"(?:\\[\s\S]|[^\\"])*"|'(?:\\[\s\S]|[^\\'])*'|[^\s{'"/>=]+|<BRACES>))?|<SPREAD>))*<S>*\/?)?>/.source),t.languages.jsx.tag.inside.tag.pattern=/^<\/?[^\s>\/]*/,t.languages.jsx.tag.inside["attr-value"].pattern=/=(?!\{)(?:"(?:\\[\s\S]|[^\\"])*"|'(?:\\[\s\S]|[^\\'])*'|[^\s'">]+)/,t.languages.jsx.tag.inside.tag.inside["class-name"]=/^[A-Z]\w*(?:\.[A-Z]\w*)*$/,t.languages.jsx.tag.inside.comment=n.comment,t.languages.insertBefore("inside","attr-name",{spread:{pattern:i(/<SPREAD>/.source),inside:t.languages.jsx}},t.languages.jsx.tag),t.languages.insertBefore("inside","special-attr",{script:{pattern:i(/=<BRACES>/.source),alias:"language-javascript",inside:{"script-punctuation":{pattern:/^=(?=\{)/,alias:"punctuation"},rest:t.languages.jsx}}},t.languages.jsx.tag);var s=function(c){return c?typeof c=="string"?c:typeof c.content=="string"?c.content:c.content.map(s).join(""):""},l=function(c){for(var u=[],d=0;d<c.length;d++){var p=c[d],h=!1;if(typeof p!="string"&&(p.type==="tag"&&p.content[0]&&p.content[0].type==="tag"?p.content[0].content[0].content==="</"?u.length>0&&u[u.length-1].tagName===s(p.content[0].content[1])&&u.pop():p.content[p.content.length-1].content==="/>"||u.push({tagName:s(p.content[0].content[1]),openedBraces:0}):u.length>0&&p.type==="punctuation"&&p.content==="{"?u[u.length-1].openedBraces++:u.length>0&&u[u.length-1].openedBraces>0&&p.type==="punctuation"&&p.content==="}"?u[u.length-1].openedBraces--:h=!0),(h||typeof p=="string")&&u.length>0&&u[u.length-1].openedBraces===0){var v=s(p);d<c.length-1&&(typeof c[d+1]=="string"||c[d+1].type==="plain-text")&&(v+=s(c[d+1]),c.splice(d+1,1)),d>0&&(typeof c[d-1]=="string"||c[d-1].type==="plain-text")&&(v=s(c[d-1])+v,c.splice(d-1,1),d--),c[d]=new t.Token("plain-text",v,null,v)}p.content&&typeof p.content!="string"&&l(p.content)}};t.hooks.add("after-tokenize",function(c){c.language!=="jsx"&&c.language!=="tsx"||l(c.tokens)})})(e)}var FX=NX,UX=BX,WX=vc;vc.displayName="tsx";vc.aliases=[];function vc(e){e.register(FX),e.register(UX),function(t){var n=t.util.clone(t.languages.typescript);t.languages.tsx=t.languages.extend("jsx",n),delete t.languages.tsx.parameter,delete t.languages.tsx["literal-property"];var o=t.languages.tsx.tag;o.pattern=RegExp(/(^|[^\w$]|(?=<\/))/.source+"(?:"+o.pattern.source+")",o.pattern.flags),o.lookbehind=!0}(e)}const VX=Ta(WX),Ui={'code[class*="language-"]':{background:"hsl(220, 13%, 18%)",color:"hsl(220, 14%, 71%)",textShadow:"0 1px rgba(0, 0, 0, 0.3)",fontFamily:'"Fira Code", "Fira Mono", Menlo, Consolas, "DejaVu Sans Mono", monospace',direction:"ltr",textAlign:"left",whiteSpace:"pre",wordSpacing:"normal",wordBreak:"normal",lineHeight:"1.5",MozTabSize:"2",OTabSize:"2",tabSize:"2",WebkitHyphens:"none",MozHyphens:"none",msHyphens:"none",hyphens:"none"},'pre[class*="language-"]':{background:"hsl(220, 13%, 18%)",color:"hsl(220, 14%, 71%)",textShadow:"0 1px rgba(0, 0, 0, 0.3)",fontFamily:'"Fira Code", "Fira Mono", Menlo, Consolas, "DejaVu Sans Mono", monospace',direction:"ltr",textAlign:"left",whiteSpace:"pre",wordSpacing:"normal",wordBreak:"normal",lineHeight:"1.5",MozTabSize:"2",OTabSize:"2",tabSize:"2",WebkitHyphens:"none",MozHyphens:"none",msHyphens:"none",hyphens:"none",padding:"1em",margin:"0.5em 0",overflow:"auto",borderRadius:"0.3em"},'code[class*="language-"]::-moz-selection':{background:"hsl(220, 13%, 28%)",color:"inherit",textShadow:"none"},'code[class*="language-"] *::-moz-selection':{background:"hsl(220, 13%, 28%)",color:"inherit",textShadow:"none"},'pre[class*="language-"] *::-moz-selection':{background:"hsl(220, 13%, 28%)",color:"inherit",textShadow:"none"},'code[class*="language-"]::selection':{background:"hsl(220, 13%, 28%)",color:"inherit",textShadow:"none"},'code[class*="language-"] *::selection':{background:"hsl(220, 13%, 28%)",color:"inherit",textShadow:"none"},'pre[class*="language-"] *::selection':{background:"hsl(220, 13%, 28%)",color:"inherit",textShadow:"none"},':not(pre) > code[class*="language-"]':{padding:"0.2em 0.3em",borderRadius:"0.3em",whiteSpace:"normal"},comment:{color:"hsl(220, 10%, 40%)",fontStyle:"italic"},prolog:{color:"hsl(220, 10%, 40%)"},cdata:{color:"hsl(220, 10%, 40%)"},doctype:{color:"hsl(220, 14%, 71%)"},punctuation:{color:"hsl(220, 14%, 71%)"},entity:{color:"hsl(220, 14%, 71%)",cursor:"help"},"attr-name":{color:"hsl(29, 54%, 61%)"},"class-name":{color:"hsl(29, 54%, 61%)"},boolean:{color:"hsl(29, 54%, 61%)"},constant:{color:"hsl(29, 54%, 61%)"},number:{color:"hsl(29, 54%, 61%)"},atrule:{color:"hsl(29, 54%, 61%)"},keyword:{color:"hsl(286, 60%, 67%)"},property:{color:"hsl(355, 65%, 65%)"},tag:{color:"hsl(355, 65%, 65%)"},symbol:{color:"hsl(355, 65%, 65%)"},deleted:{color:"hsl(355, 65%, 65%)"},important:{color:"hsl(355, 65%, 65%)"},selector:{color:"hsl(95, 38%, 62%)"},string:{color:"hsl(95, 38%, 62%)"},char:{color:"hsl(95, 38%, 62%)"},builtin:{color:"hsl(95, 38%, 62%)"},inserted:{color:"hsl(95, 38%, 62%)"},regex:{color:"hsl(95, 38%, 62%)"},"attr-value":{color:"hsl(95, 38%, 62%)"},"attr-value > .token.punctuation":{color:"hsl(95, 38%, 62%)"},variable:{color:"hsl(207, 82%, 66%)"},operator:{color:"hsl(207, 82%, 66%)"},function:{color:"hsl(207, 82%, 66%)"},url:{color:"hsl(187, 47%, 55%)"},"attr-value > .token.punctuation.attr-equals":{color:"hsl(220, 14%, 71%)"},"special-attr > .token.attr-value > .token.value.css":{color:"hsl(220, 14%, 71%)"},".language-css .token.selector":{color:"hsl(355, 65%, 65%)"},".language-css .token.property":{color:"hsl(220, 14%, 71%)"},".language-css .token.function":{color:"hsl(187, 47%, 55%)"},".language-css .token.url > .token.function":{color:"hsl(187, 47%, 55%)"},".language-css .token.url > .token.string.url":{color:"hsl(95, 38%, 62%)"},".language-css .token.important":{color:"hsl(286, 60%, 67%)"},".language-css .token.atrule .token.rule":{color:"hsl(286, 60%, 67%)"},".language-javascript .token.operator":{color:"hsl(286, 60%, 67%)"},".language-javascript .token.template-string > .token.interpolation > .token.interpolation-punctuation.punctuation":{color:"hsl(5, 48%, 51%)"},".language-json .token.operator":{color:"hsl(220, 14%, 71%)"},".language-json .token.null.keyword":{color:"hsl(29, 54%, 61%)"},".language-markdown .token.url":{color:"hsl(220, 14%, 71%)"},".language-markdown .token.url > .token.operator":{color:"hsl(220, 14%, 71%)"},".language-markdown .token.url-reference.url > .token.string":{color:"hsl(220, 14%, 71%)"},".language-markdown .token.url > .token.content":{color:"hsl(207, 82%, 66%)"},".language-markdown .token.url > .token.url":{color:"hsl(187, 47%, 55%)"},".language-markdown .token.url-reference.url":{color:"hsl(187, 47%, 55%)"},".language-markdown .token.blockquote.punctuation":{color:"hsl(220, 10%, 40%)",fontStyle:"italic"},".language-markdown .token.hr.punctuation":{color:"hsl(220, 10%, 40%)",fontStyle:"italic"},".language-markdown .token.code-snippet":{color:"hsl(95, 38%, 62%)"},".language-markdown .token.bold .token.content":{color:"hsl(29, 54%, 61%)"},".language-markdown .token.italic .token.content":{color:"hsl(286, 60%, 67%)"},".language-markdown .token.strike .token.content":{color:"hsl(355, 65%, 65%)"},".language-markdown .token.strike .token.punctuation":{color:"hsl(355, 65%, 65%)"},".language-markdown .token.list.punctuation":{color:"hsl(355, 65%, 65%)"},".language-markdown .token.title.important > .token.punctuation":{color:"hsl(355, 65%, 65%)"},bold:{fontWeight:"bold"},italic:{fontStyle:"italic"},namespace:{Opacity:"0.8"},"token.tab:not(:empty):before":{color:"hsla(220, 14%, 71%, 0.15)",textShadow:"none"},"token.cr:before":{color:"hsla(220, 14%, 71%, 0.15)",textShadow:"none"},"token.lf:before":{color:"hsla(220, 14%, 71%, 0.15)",textShadow:"none"},"token.space:before":{color:"hsla(220, 14%, 71%, 0.15)",textShadow:"none"},"div.code-toolbar > .toolbar.toolbar > .toolbar-item":{marginRight:"0.4em"},"div.code-toolbar > .toolbar.toolbar > .toolbar-item > button":{background:"hsl(220, 13%, 26%)",color:"hsl(220, 9%, 55%)",padding:"0.1em 0.4em",borderRadius:"0.3em"},"div.code-toolbar > .toolbar.toolbar > .toolbar-item > a":{background:"hsl(220, 13%, 26%)",color:"hsl(220, 9%, 55%)",padding:"0.1em 0.4em",borderRadius:"0.3em"},"div.code-toolbar > .toolbar.toolbar > .toolbar-item > span":{background:"hsl(220, 13%, 26%)",color:"hsl(220, 9%, 55%)",padding:"0.1em 0.4em",borderRadius:"0.3em"},"div.code-toolbar > .toolbar.toolbar > .toolbar-item > button:hover":{background:"hsl(220, 13%, 28%)",color:"hsl(220, 14%, 71%)"},"div.code-toolbar > .toolbar.toolbar > .toolbar-item > button:focus":{background:"hsl(220, 13%, 28%)",color:"hsl(220, 14%, 71%)"},"div.code-toolbar > .toolbar.toolbar > .toolbar-item > a:hover":{background:"hsl(220, 13%, 28%)",color:"hsl(220, 14%, 71%)"},"div.code-toolbar > .toolbar.toolbar > .toolbar-item > a:focus":{background:"hsl(220, 13%, 28%)",color:"hsl(220, 14%, 71%)"},"div.code-toolbar > .toolbar.toolbar > .toolbar-item > span:hover":{background:"hsl(220, 13%, 28%)",color:"hsl(220, 14%, 71%)"},"div.code-toolbar > .toolbar.toolbar > .toolbar-item > span:focus":{background:"hsl(220, 13%, 28%)",color:"hsl(220, 14%, 71%)"},".line-highlight.line-highlight":{background:"hsla(220, 100%, 80%, 0.04)"},".line-highlight.line-highlight:before":{background:"hsl(220, 13%, 26%)",color:"hsl(220, 14%, 71%)",padding:"0.1em 0.6em",borderRadius:"0.3em",boxShadow:"0 2px 0 0 rgba(0, 0, 0, 0.2)"},".line-highlight.line-highlight[data-end]:after":{background:"hsl(220, 13%, 26%)",color:"hsl(220, 14%, 71%)",padding:"0.1em 0.6em",borderRadius:"0.3em",boxShadow:"0 2px 0 0 rgba(0, 0, 0, 0.2)"},"pre[id].linkable-line-numbers.linkable-line-numbers span.line-numbers-rows > span:hover:before":{backgroundColor:"hsla(220, 100%, 80%, 0.04)"},".line-numbers.line-numbers .line-numbers-rows":{borderRightColor:"hsla(220, 14%, 71%, 0.15)"},".command-line .command-line-prompt":{borderRightColor:"hsla(220, 14%, 71%, 0.15)"},".line-numbers .line-numbers-rows > span:before":{color:"hsl(220, 14%, 45%)"},".command-line .command-line-prompt > span:before":{color:"hsl(220, 14%, 45%)"},".rainbow-braces .token.token.punctuation.brace-level-1":{color:"hsl(355, 65%, 65%)"},".rainbow-braces .token.token.punctuation.brace-level-5":{color:"hsl(355, 65%, 65%)"},".rainbow-braces .token.token.punctuation.brace-level-9":{color:"hsl(355, 65%, 65%)"},".rainbow-braces .token.token.punctuation.brace-level-2":{color:"hsl(95, 38%, 62%)"},".rainbow-braces .token.token.punctuation.brace-level-6":{color:"hsl(95, 38%, 62%)"},".rainbow-braces .token.token.punctuation.brace-level-10":{color:"hsl(95, 38%, 62%)"},".rainbow-braces .token.token.punctuation.brace-level-3":{color:"hsl(207, 82%, 66%)"},".rainbow-braces .token.token.punctuation.brace-level-7":{color:"hsl(207, 82%, 66%)"},".rainbow-braces .token.token.punctuation.brace-level-11":{color:"hsl(207, 82%, 66%)"},".rainbow-braces .token.token.punctuation.brace-level-4":{color:"hsl(286, 60%, 67%)"},".rainbow-braces .token.token.punctuation.brace-level-8":{color:"hsl(286, 60%, 67%)"},".rainbow-braces .token.token.punctuation.brace-level-12":{color:"hsl(286, 60%, 67%)"},"pre.diff-highlight > code .token.token.deleted:not(.prefix)":{backgroundColor:"hsla(353, 100%, 66%, 0.15)"},"pre > code.diff-highlight .token.token.deleted:not(.prefix)":{backgroundColor:"hsla(353, 100%, 66%, 0.15)"},"pre.diff-highlight > code .token.token.deleted:not(.prefix)::-moz-selection":{backgroundColor:"hsla(353, 95%, 66%, 0.25)"},"pre.diff-highlight > code .token.token.deleted:not(.prefix) *::-moz-selection":{backgroundColor:"hsla(353, 95%, 66%, 0.25)"},"pre > code.diff-highlight .token.token.deleted:not(.prefix)::-moz-selection":{backgroundColor:"hsla(353, 95%, 66%, 0.25)"},"pre > code.diff-highlight .token.token.deleted:not(.prefix) *::-moz-selection":{backgroundColor:"hsla(353, 95%, 66%, 0.25)"},"pre.diff-highlight > code .token.token.deleted:not(.prefix)::selection":{backgroundColor:"hsla(353, 95%, 66%, 0.25)"},"pre.diff-highlight > code .token.token.deleted:not(.prefix) *::selection":{backgroundColor:"hsla(353, 95%, 66%, 0.25)"},"pre > code.diff-highlight .token.token.deleted:not(.prefix)::selection":{backgroundColor:"hsla(353, 95%, 66%, 0.25)"},"pre > code.diff-highlight .token.token.deleted:not(.prefix) *::selection":{backgroundColor:"hsla(353, 95%, 66%, 0.25)"},"pre.diff-highlight > code .token.token.inserted:not(.prefix)":{backgroundColor:"hsla(137, 100%, 55%, 0.15)"},"pre > code.diff-highlight .token.token.inserted:not(.prefix)":{backgroundColor:"hsla(137, 100%, 55%, 0.15)"},"pre.diff-highlight > code .token.token.inserted:not(.prefix)::-moz-selection":{backgroundColor:"hsla(135, 73%, 55%, 0.25)"},"pre.diff-highlight > code .token.token.inserted:not(.prefix) *::-moz-selection":{backgroundColor:"hsla(135, 73%, 55%, 0.25)"},"pre > code.diff-highlight .token.token.inserted:not(.prefix)::-moz-selection":{backgroundColor:"hsla(135, 73%, 55%, 0.25)"},"pre > code.diff-highlight .token.token.inserted:not(.prefix) *::-moz-selection":{backgroundColor:"hsla(135, 73%, 55%, 0.25)"},"pre.diff-highlight > code .token.token.inserted:not(.prefix)::selection":{backgroundColor:"hsla(135, 73%, 55%, 0.25)"},"pre.diff-highlight > code .token.token.inserted:not(.prefix) *::selection":{backgroundColor:"hsla(135, 73%, 55%, 0.25)"},"pre > code.diff-highlight .token.token.inserted:not(.prefix)::selection":{backgroundColor:"hsla(135, 73%, 55%, 0.25)"},"pre > code.diff-highlight .token.token.inserted:not(.prefix) *::selection":{backgroundColor:"hsla(135, 73%, 55%, 0.25)"},".prism-previewer.prism-previewer:before":{borderColor:"hsl(224, 13%, 17%)"},".prism-previewer-gradient.prism-previewer-gradient div":{borderColor:"hsl(224, 13%, 17%)",borderRadius:"0.3em"},".prism-previewer-color.prism-previewer-color:before":{borderRadius:"0.3em"},".prism-previewer-easing.prism-previewer-easing:before":{borderRadius:"0.3em"},".prism-previewer.prism-previewer:after":{borderTopColor:"hsl(224, 13%, 17%)"},".prism-previewer-flipped.prism-previewer-flipped.after":{borderBottomColor:"hsl(224, 13%, 17%)"},".prism-previewer-angle.prism-previewer-angle:before":{background:"hsl(219, 13%, 22%)"},".prism-previewer-time.prism-previewer-time:before":{background:"hsl(219, 13%, 22%)"},".prism-previewer-easing.prism-previewer-easing":{background:"hsl(219, 13%, 22%)"},".prism-previewer-angle.prism-previewer-angle circle":{stroke:"hsl(220, 14%, 71%)",strokeOpacity:"1"},".prism-previewer-time.prism-previewer-time circle":{stroke:"hsl(220, 14%, 71%)",strokeOpacity:"1"},".prism-previewer-easing.prism-previewer-easing circle":{stroke:"hsl(220, 14%, 71%)",fill:"transparent"},".prism-previewer-easing.prism-previewer-easing path":{stroke:"hsl(220, 14%, 71%)"},".prism-previewer-easing.prism-previewer-easing line":{stroke:"hsl(220, 14%, 71%)"}};br.registerLanguage("tsx",VX);br.registerLanguage("javascript",xX);async function HX(e){try{if(navigator.clipboard&&window.isSecureContext)return await navigator.clipboard.writeText(e),!0}catch{}try{const t=document.createElement("textarea");t.value=e,t.setAttribute("readonly",""),t.style.position="fixed",t.style.top="-9999px",document.body.appendChild(t),t.select();const n=document.execCommand("copy");return document.body.removeChild(t),n}catch{return!1}}const GX={...Ui,comment:{...Ui.comment,color:"#8b93a1"},prolog:{...Ui.prolog,color:"#8b93a1"}},qX=({code:e,language:t="tsx",label:n,copyable:o=!0})=>{const[r,a]=N.useState("idle");N.useEffect(()=>{if(r==="idle")return;const s=window.setTimeout(()=>a("idle"),1500);return()=>window.clearTimeout(s)},[r]);const i=async()=>{a(await HX(e)?"ok":"fail")};return y.jsxs("div",{className:"code-shell",children:[y.jsxs("div",{className:"code-bar",children:[y.jsx("span",{className:"code-lang",children:n??t}),y.jsxs("span",{className:"code-actions",children:[o&&y.jsx("button",{type:"button",className:`code-copy${r==="ok"?" is-ok":""}${r==="fail"?" is-fail":""}`,onClick:i,"aria-live":"polite",children:r==="ok"?"已复制":r==="fail"?"复制失败":"复制"}),y.jsxs("span",{className:"code-dots","aria-hidden":"true",children:[y.jsx("i",{}),y.jsx("i",{}),y.jsx("i",{})]})]})]}),y.jsx(br,{language:t,style:GX,customStyle:{margin:0,padding:"14px 16px",background:"transparent",borderRadius:0,fontSize:12.5,lineHeight:1.7,fontFamily:"var(--ff-mono)"},codeTagProps:{style:{fontFamily:"var(--ff-mono)"}},wrapLongLines:!0,children:e})]})};function QX({entry:e,order:t}){const{meta:n,Stage:o,file:r,source:a}=e;return y.jsxs("section",{className:"page","data-demo":n.slug,children:[y.jsxs("div",{className:"page-header",children:[y.jsxs("div",{style:{display:"flex",alignItems:"center",gap:10,marginBottom:6},children:[y.jsx("span",{style:{fontFamily:"var(--ff-mono, monospace)",fontSize:"0.8em",color:"var(--text-2)",border:"1px solid var(--accent-line)",borderRadius:6,padding:"1px 8px"},children:String(t).padStart(2,"0")}),y.jsx("span",{style:{fontSize:"0.78em",color:"var(--accent-2)",letterSpacing:.04*1+"em"},children:gg[n.group].label})]}),y.jsx("h1",{className:"page-title",children:n.title}),n.description?y.jsx("p",{className:"page-desc",children:n.description}):null]}),y.jsx("div",{className:"demo-stage-wrap",children:y.jsx(S.Suspense,{fallback:y.jsx("div",{className:"loading",children:"加载中…"}),children:y.jsx(o,{})})}),a?y.jsxs("div",{className:"demo-source",children:[y.jsxs("h4",{className:"block-title",children:["完整源码 · ",r]}),y.jsx(qX,{code:a,label:r})]}):null]})}const KX=[{id:"a1-poster-wall",code:"A1",cat:"vod",title:"竖版海报墙",ref:{site:"olehdtv",page:"影视列表页",url:"https://www.olehdtv.com/index.php/vod/type/id/2.html"},pain:"一屏 20 张 2:3 竖图，首屏那几张直接决定 LCP；占位没做好就是满屏跳动。",tone:"dark",plugs:[{fn:"createPriorityLoadingPlugin",arg:'{ priority: "high" }',why:"首屏海报压过下游请求"},{fn:"createAspectRatioSpacerPlugin",arg:"{ ratio: 2 / 3 }",why:"2:3 占位，加载前后零抖动"},{fn:"createBlurUpPlugin",arg:"{ startBlur: 14, endBlur: 0, durationMs: 520 }",why:"低清糊图先出，避免大片留白"},{fn:"createFadeInPlugin",arg:'{ durationMs: 320, easing: "ease-out" }',why:"边缘不发灰，切换更顺"}]},{id:"a2-episode-row",code:"A2",cat:"vod",title:"剧集选集横滑",ref:{site:"爱奇艺 / olehdtv",page:"播放页选集条",url:"https://www.olehdtv.com/index.php/vod/type/id/2.html"},pain:"手指一滑过 16 集，若不加约束会同时发起十几个请求，抢掉正片的带宽。",tone:"dark",plugs:[{fn:"createViewportAwarePlugin",arg:'{ rootMargin: "120px", once: true }',why:"只在进入视口时开始加载"},{fn:"createConcurrencyControlPlugin",arg:'{ maxConcurrent: 4, scope: "global" }',why:"横滑瞬间的请求洪峰压平"},{fn:"createMemoryCachePlugin",arg:"{ maxEntries: 120, ttlMs: 1800000 }",why:"来回滑不重复请求"},{fn:"createSkeletonPlugin",arg:'{ type: "shimmer", borderRadius: 4 }',why:"空槽有稳定的视觉重量"}]},{id:"a3-recommend-side",code:"A3",cat:"vod",title:"播放页相关推荐",ref:{site:"Netflix / 爱奇艺",page:"播放页右侧推荐列",url:"https://www.olehdtv.com/index.php/vod/type/id/2.html"},pain:"正片在播，侧栏却还在发请求；滚到底一批，滚回来又一批。",tone:"dark",plugs:[{fn:"createViewportDebouncePlugin",arg:"{ debounceMs: 200, onlyWhenIntersecting: true }",why:"滚动停稳再发请求"},{fn:"createIDBCachePlugin",arg:'{ dbName: "vane-vod", ttlMs: 259200000 }',why:"跨会话复用，回看不发请求"},{fn:"createSkeletonPlugin",arg:'{ type: "shimmer", borderRadius: 4 }',why:"侧栏不会突然长高"}]},{id:"a4-cast-avatar",code:"A4",cat:"vod",title:"演职人员头像",ref:{site:"影视详情页",page:"演职人员区块",url:"https://www.olehdtv.com/index.php/vod/type/id/2.html"},pain:"演员库的图常年失效、比例五花八门，裁圆之后边缘还容易露出白底。",tone:"dark",plugs:[{fn:"createCropPlugin",arg:"{ enabled: true, focusPoint: { x: 0.5, y: 0.4 } }",why:"按脸部中心裁方图"},{fn:"createFallbackImagePlugin",arg:'{ fallbackSrc: "…/cast-fallback" }',why:"缺图不留破图占位"},{fn:"createColorExtractionPlugin",arg:"{ setContainerBg: true, sampleSize: 6 }",why:"主色铺底，圆形边缘不露白"}],note:"第 4 位演员故意给了失效地址，可直接看到兜底链路。"},{id:"a5-paid-poster",code:"A5",cat:"vod",title:"会员专享海报（鉴权）",ref:{site:"会员专区",page:"付费墙海报",url:"https://www.olehdtv.com/index.php/vod/type/id/2.html"},pain:"付费内容走私有图源，凭证过期就 401；破图或白屏都会直接掉付费转化。",tone:"dark",plugs:[{fn:"createAuthPlugin",arg:'{ tokenParam: "access_token" }',why:"把登录态拼进图片地址"},{fn:"createRetryOnErrorPlugin",arg:"{ maxRetries: 2, baseDelayMs: 400 }",why:"凭证刚续期时的瞬时失败可自愈"},{fn:"createErrorOverlayPlugin",arg:'{ retryText: "重新鉴权" }',why:"失败要给明确出口"}],note:"依赖演示站受保护接口（pnpm serve:demo）；token 换成 expired-token 即进入 401 失败态。"},{id:"a6-tiered-quality",code:"A6",cat:"vod",title:"分档清晰度",ref:{site:"影视详情页",page:"剧照区",url:"https://www.olehdtv.com/index.php/vod/type/id/2.html"},pain:"同一张剧照，桌面要 1280、手机 3G 只该给 400；一套写死就是两头不讨好。",tone:"dark",plugs:[{fn:"createAdaptiveQualityPlugin",arg:"{ lowQ: 40, highQ: 80, saveDataQuality: 35 }",why:"按网络类型定质量"},{fn:"createResponsivePlugin",arg:"{ variants: [400, 800, 1200], sizes }",why:"生成 srcset 交给浏览器挑"},{fn:"createDataSaverPlugin",arg:"{ respectSaveData: true, fallbackQuality: 0.6 }",why:"尊重系统省流量开关"}],note:"图床模板是 picsum 的 /宽/高，真实项目替换 buildSrc 即可。"}],YX=[{id:"c1-bili-cover-grid",code:"C1",cat:"video",title:"推荐流封面栅格",ref:{site:"bilibili",page:"首页推荐流",url:"https://www.bilibili.com/"},pain:"16:9 封面 + 右下时长胶囊；一屏十几条，抢占不到视口就不该发请求。",tone:"light",plugs:[{fn:"createAspectRatioSpacerPlugin",arg:"{ ratio: 16 / 9 }",why:"封面比例固定，栅格不塌"},{fn:"createBadgePlugin",arg:'{ text: dur, position: "bottom-right" }',why:"时长胶囊，逐条装配"},{fn:"createViewportDwellPlugin",arg:"{ dwellMs: 180, onlyWhenIntersecting: true }",why:"快速滑过不算真正看到"},{fn:"createFadeInPlugin",arg:"{ durationMs: 260 }",why:"白底上的切换更柔和"},{fn:"createVideoPosterPlugin",arg:"{ playInModal: true }",why:"置顶条点封面起播"}],note:"时长逐条不同，用 useMemo 固定 withPlugins 的组件身份，避免重渲染整块重挂。"},{id:"c2-hero-banner",code:"C2",cat:"video",title:"首页运营 Banner",ref:{site:"bilibili / YouTube",page:"首页顶部轮播",url:"https://www.youtube.com/"},pain:"整站 LCP 就是这张大图，晚 300ms 就是指标上的一次降级。",tone:"light",plugs:[{fn:"createPriorityLoadingPlugin",arg:'{ priority: "high" }',why:"唯一该抢带宽的图"},{fn:"createPreconnectPlugin",arg:'{ domains: ["https://picsum.photos"] }',why:"提前建连省一个 RTT"},{fn:"createLqipPlugin",arg:"{ lqipSrc: (src) => …, blur: 16 }",why:"20px 低清先铺满"}]},{id:"c3-watch-side-list",code:"C3",cat:"video",title:"接下来播放列",ref:{site:"YouTube",page:"播放页右侧列表",url:"https://www.youtube.com/"},pain:"滚动时一帧十几个请求，直接和正在播放的视频抢带宽。",tone:"dark",plugs:[{fn:"createScrollIdlePlugin",arg:"{ idleMs: 120, maxWaitMs: 900 }",why:"滚动停了才放行"},{fn:"createViewportAwarePlugin",arg:'{ rootMargin: "160px", once: true }',why:"提前一屏但与滚动解耦"},{fn:"createMemoryCachePlugin",arg:"{ maxEntries: 80 }",why:"切视频不重复拉封面"}]},{id:"c4-uploader-avatar",code:"C4",cat:"video",title:"UP 主头像（直播中）",ref:{site:"bilibili",page:"UP 主卡片",url:"https://www.bilibili.com/"},pain:"头像小、数量多、缺图率高；直播中还要有状态信号。",tone:"light",plugs:[{fn:"createCropPlugin",arg:"{ focusPoint: { x: 0.5, y: 0.35 } }",why:"脸部居中裁方"},{fn:"createBorderGlowPlugin",arg:'{ color: "rgba(251,114,153,.75)" }',why:"直播中的信号灯"},{fn:"createFallbackImagePlugin",arg:"{ fallbackSrc: … }",why:"缺图有人形兜底"}]},{id:"c5-hover-preview",code:"C5",cat:"video",title:"悬停起播预览",ref:{site:"bilibili / YouTube",page:"封面悬停预览",url:"https://www.bilibili.com/"},pain:"悬停 300ms 才真的要预览，但这 300ms 里把下一帧取回来，体验差别巨大。",tone:"dark",plugs:[{fn:"createHoverPrefetchPlugin",arg:'{ trigger: "mouseenter", max: 2 }',why:"悬停即预取下一帧"},{fn:"createFetchLoaderPlugin",arg:"{ enabled: true, timeout: 20000 }",why:"拿到进度、可中断、可复用"},{fn:"createTransitionPlugin",arg:"{ durationMs: 260 }",why:"帧切换不闪"}],note:"真实项目把「下一帧」换成视频首帧图或雪碧图分片。"},{id:"c6-saver-mode",code:"C6",cat:"video",title:"移动端省流模式",ref:{site:"bilibili",page:"移动端省流",url:"https://www.bilibili.com/"},pain:"用户开着省流量、电量只剩 15%，这时还按桌面规格拉图就是纯粹的浪费。",tone:"dark",plugs:[{fn:"createDataSaverPlugin",arg:"{ respectSaveData: true, fallbackQuality: 0.6 }",why:"尊重 Save-Data"},{fn:"createBatteryAwarePlugin",arg:"{ lowBatteryThreshold: 0.2, downgradeWidth: 640 }",why:"低电量降档"},{fn:"createNetworkAnalyticsPlugin",arg:"{ trackCDN: true }",why:"量化省了多少字节"}]}],XX=[{id:"b1-jd-search-grid",code:"B1",cat:"ecommerce",title:"搜索结果双列流",ref:{site:"jd.com",page:"搜索结果页",url:"https://www.jd.com/"},pain:"一屏 20 张 1:1 主图，来回切排序会重复拉图，请求洪峰还会挤掉首屏。",tone:"light",plugs:[{fn:"createMemoryCachePlugin",arg:"{ maxEntries: 240, ttlMs: 900000 }",why:"切排序不重复请求"},{fn:"createSkeletonPlugin",arg:'{ type: "shimmer" }',why:"灰块占位，栅格不塌"},{fn:"createConcurrencyControlPlugin",arg:"{ maxConcurrent: 6 }",why:"20 张图压平请求洪峰"},{fn:"createFadeInPlugin",arg:"{ durationMs: 220 }",why:"白底上切换更柔和"}]},{id:"b2-sku-gallery-zoom",code:"B2",cat:"ecommerce",title:"商详主图联动",ref:{site:"jd.com",page:"商品详情页",url:"https://www.jd.com/"},pain:"4 张主图来回切，切一次拉一次；放大镜做过头就是拖影。",tone:"light",plugs:[{fn:"createGalleryPlugin",arg:"{ enableLightbox: true }",why:"点开看大图"},{fn:"createHoverZoomPlugin",arg:"{ scale: 1.08, durationMs: 180 }",why:"轻放大不出拖影"},{fn:"createColorSwatchPlugin",arg:"{ maxColors: 5 }",why:"色卡即 SKU 入口"},{fn:"createPreconnectPlugin",arg:'{ domains: ["https://picsum.photos"] }',why:"提前建连"}]},{id:"b3-flash-sale",code:"B3",cat:"ecommerce",title:"秒杀主推位",ref:{site:"jd.com",page:"秒杀会场",url:"https://www.jd.com/"},pain:"同一张图上要同时挂价格、促销、库存、进度四个信息层，还不能互相遮挡。",tone:"light",plugs:[{fn:"createPriorityLoadingPlugin",arg:'{ priority: "high" }',why:"会场唯一大图"},{fn:"createPriceTagPlugin",arg:"{ price: 1299, originalPrice: 2599 }",why:"价格 + 省钱额"},{fn:"createPromoBadgePlugin",arg:'{ type: "hot", pulse: true }',why:"促销标呼吸"},{fn:"createInventoryStatusPlugin",arg:'{ status: "low-stock" }',why:"库存紧张"},{fn:"createProgressOverlayPlugin",arg:"{ showPercentText: true }",why:"真实百分比进度"},{fn:"createBadgePlugin",arg:'{ text: "已售 2.3 万件" }',why:"销量角标"}]},{id:"b4-review-grid",code:"B4",cat:"ecommerce",title:"买家秀九宫格",ref:{site:"淘宝 / 京东",page:"评价区",url:"https://www.jd.com/"},pain:"UGC 图会 404、比例乱、还可能带手机号；运营侧看不到坏图。",tone:"light",plugs:[{fn:"createFallbackImagePlugin",arg:"{ fallbackSrc: … }",why:"缺图不留破图"},{fn:"createErrorBadgePlugin",arg:'{ text: "失效" }',why:"坏图可被定位"},{fn:"createRedactionPlugin",arg:"{ boxes: [...] }",why:"隐私区域打码"},{fn:"createConcurrencyControlPlugin",arg:'{ maxConcurrent: 4, scope: "viewport" }',why:"评论区限流"}],note:"第 3 张是失效地址，可直接看到兜底 + 「失效」角标；第 1 张上有一块打码区域。"},{id:"b5-cart-recs",code:"B5",cat:"ecommerce",title:"猜你喜欢横滑",ref:{site:"淘宝 / 京东",page:"购物车页",url:"https://www.jd.com/"},pain:"横滑是「滑一点看一点」，等滑到才请求，用户眼里就是一片白。",tone:"light",plugs:[{fn:"createViewportAwarePlugin",arg:'{ rootMargin: "200px" }',why:"进视口才加载"},{fn:"createPredictiveLoadingPlugin",arg:'{ strategy: "increment", maxPreload: 2 }',why:"按方向预热后两张"},{fn:"createHoverPrefetchPlugin",arg:'{ trigger: "mouseenter", max: 1 }',why:"悬停再补一张"}]},{id:"b6-hotlink-guard",code:"B6",cat:"ecommerce",title:"图床防盗链",ref:{site:"电商图床",page:"商品图直链",url:"https://www.jd.com/"},pain:"主域带 Referer 校验，直链一律 403；没有回退策略就是一片破图。",tone:"light",plugs:[{fn:"createAntiHotlinkPlugin",arg:'{ allowedDomains: ["picsum.photos"] }',why:"域名白名单"},{fn:"createCDNFallbackPlugin",arg:"{ cdnBases: [...] }",why:"主域挂了换备域"},{fn:"createFallbackImagePlugin",arg:"{ fallbackSrc: … }",why:"最后一道兜底"}],note:"第三张用的是完全不存在的域，用来固定演示「主域失败 → 兜底」这条链路。"},{id:"b7-multi-currency",code:"B7",cat:"ecommerce",title:"多语言商品卡",ref:{site:"跨境站点",page:"商品列表",url:"https://www.jd.com/"},pain:"同一 SKU 要出 4 种语言与 4 种货币，价格符号和文案都得跟着换。",tone:"light",plugs:[{fn:"createLocalizationPlugin",arg:"{ currentLocale: code }",why:"按 locale 切文案"},{fn:"createPriceTagPlugin",arg:"{ currency, price }",why:"货币符号随 locale"}]},{id:"b8-format-webp",code:"B8",cat:"ecommerce",title:"图片格式优化",ref:{site:"电商列表页",page:"商品图",url:"https://www.jd.com/"},pain:"同一张图，Chromium 该给 WebP，Safari 老版本只能给 JPEG；写死就是浪费。",tone:"light",plugs:[{fn:"createWebPPlugin",arg:"{ rewrite: true }",why:"嗅探后改写后缀"},{fn:"createImageOptimizationPlugin",arg:"{ maxWidth: 800, quality: 0.82 }",why:"图床侧再压一道"},{fn:"createSvgPlaceholderPlugin",arg:"{ svgContent: … }",why:"灰底 SVG 占位"}]}],ZX=[{id:"d1-xhs-masonry",code:"D1",cat:"social",title:"三列不等高瀑布流",ref:{site:"小红书",page:"首页发现",url:"https://www.xiaohongshu.com/"},pain:"每条笔记比例不同，没有按条占位，滑到一半整列会突然错位。",tone:"light",plugs:[{fn:"createAspectRatioSpacerPlugin",arg:"{ ratio: item.ratio }",why:"按条占位，列不跳动"},{fn:"createViewportAwarePlugin",arg:'{ rootMargin: "150px" }',why:"进视口才加载"},{fn:"createBlurUpPlugin",arg:"{ startBlur: 10 }",why:"糊图先出"},{fn:"createConcurrencyControlPlugin",arg:"{ maxConcurrent: 5 }",why:"瀑布流限并发"}],note:"比例逐条不同，所以 withPlugins 放进 useMemo 按比例缓存组件身份。"},{id:"d2-nine-grid-lightbox",code:"D2",cat:"social",title:"九宫格 → 灯箱",ref:{site:"微博 / 小红书",page:"笔记详情的九宫格",url:"https://www.xiaohongshu.com/"},pain:"九张图铺满屏，用户真正想看的是其中一张的高清版。",tone:"light",plugs:[{fn:"createGalleryPlugin",arg:"{ enableLightbox: true }",why:"点开进灯箱"},{fn:"createTransitionPlugin",arg:"{ durationMs: 240 }",why:"切换不闪"},{fn:"createSkeletonPlugin",arg:'{ type: "pulse" }',why:"空格有稳定视觉重量"}]},{id:"d3-article-images",code:"D3",cat:"social",title:"长文配图",ref:{site:"知乎 / 公众号",page:"长文正文",url:"https://www.zhihu.com/"},pain:"正文图一旦晚到，段落就被整体推下去；没有 alt 还会丢检索流量。",tone:"light",plugs:[{fn:"createAspectRatioSpacerPlugin",arg:"{ ratio: 16 / 9 }",why:"先占住高度"},{fn:"createLqipPlugin",arg:"{ lqipSrc: (src) => …, blur: 18 }",why:"24px 低清先出"},{fn:"createSEOPlugin",arg:'{ altFallback: "文章配图" }',why:"alt 与结构化"}]},{id:"d4-follow-avatars",code:"D4",cat:"social",title:"关注推荐列表",ref:{site:"社交产品",page:"关注推荐",url:"https://www.xiaohongshu.com/"},pain:"几十个 38px 小头像，单个失败会留下一个空洞，整行都显得脏。",tone:"light",plugs:[{fn:"createCropPlugin",arg:"{ focusPoint: { x: 0.5, y: 0.45 } }",why:"人脸居中裁方"},{fn:"createRetryOnErrorPlugin",arg:"{ maxRetries: 2, jitter: true }",why:"抖动重试一次"},{fn:"createFallbackImagePlugin",arg:"{ fallbackSrc: … }",why:"最后给默认剪影"}]},{id:"d5-share-card",code:"D5",cat:"social",title:"分享卡片",ref:{site:"内容社区",page:"图片分享/图注",url:"https://www.xiaohongshu.com/"},pain:"分享位、图注、拍摄参数都要贴在图上，还得在悬停时才出现。",tone:"dark",plugs:[{fn:"createSocialSharePlugin",arg:"{ showOnHover: true }",why:"分享入口"},{fn:"createCaptionPlugin",arg:'{ position: "bottom" }',why:"图注常驻"},{fn:"createOverlayInfoPlugin",arg:'{ position: "top", trigger: "hover" }',why:"参数蒙层"}]}],JX=[{id:"e1-news-mixed",code:"E1",cat:"news",title:"头条大图 + 列表小图",ref:{site:"新浪 / 网易",page:"新闻首页",url:"https://news.sina.com.cn/"},pain:"首屏只有一张图该抢带宽，剩下几十张小图应该等滚动停稳。",tone:"light",plugs:[{fn:"createPriorityLoadingPlugin",arg:'{ priority: "high" }',why:"头条就是 LCP"},{fn:"createResponsivePlugin",arg:"{ variants: [400, 800, 1200] }",why:"按容器宽度出图"},{fn:"createViewportDebouncePlugin",arg:"{ debounceMs: 160 }",why:"滚动停稳再发"}]},{id:"e2-photo-set",code:"E2",cat:"news",title:"组图 / 图集翻页",ref:{site:"门户图集",page:"组图浏览",url:"https://news.sina.com.cn/"},pain:"一图一页地翻，每张都要等；没有进度反馈就会以为卡住了。",tone:"dark",plugs:[{fn:"createGalleryPlugin",arg:"{ enableLightbox: true }",why:"全屏看图"},{fn:"createProgressOverlayPlugin",arg:"{ height: 3 }",why:"细进度条"},{fn:"createPreconnectPlugin",arg:'{ domains: ["https://picsum.photos"] }',why:"翻页前先建连"}]},{id:"e3-inline-anti-cls",code:"E3",cat:"news",title:"正文图防 CLS",ref:{site:"资讯正文",page:"内嵌图",url:"https://news.sina.com.cn/"},pain:"图片没有预设高度，加载完成的一瞬间把下面几段全推下去。",tone:"light",plugs:[{fn:"createAspectRatioSpacerPlugin",arg:"{ ratio: 4 / 3 }",why:"先把高度占住"},{fn:"createSkeletonPlugin",arg:'{ type: "shimmer" }',why:"占位有质感"},{fn:"createSEOPlugin",arg:'{ aspectRatio: "4:3" }',why:"alt 与结构化"}]},{id:"e4-dead-links",code:"E4",cat:"news",title:"失效外链",ref:{site:"老牌资讯站",page:"历史文章配图",url:"https://news.sina.com.cn/"},pain:"2019 年的图床早就迁移了，没人上报你就永远不知道有多少破图。",tone:"light",plugs:[{fn:"createCDNFallbackPlugin",arg:"{ cdnBases: [...] }",why:"备域兜一次"},{fn:"createFallbackImagePlugin",arg:"{ fallbackSrc: … }",why:"兜底图收场"},{fn:"createErrorTrackingPlugin",arg:"{ report, showBadge: true }",why:"失败可上报"}],note:"控制台执行 window.__vaneDeadLink 可看到失败上报的原始记录。"},{id:"e5-a11y-gov",code:"E5",cat:"news",title:"无障碍政务站",ref:{site:"公共服务站点",page:"政策图解",url:"https://www.gov.cn/"},pain:"读屏软件读不出「图片加载中」，运营漏填 alt 就是一次合规风险。",tone:"light",plugs:[{fn:"createA11yPlugin",arg:"{ statusText: … }",why:"朗读状态"},{fn:"createAltTextPlugin",arg:'{ derive: true, prefix: "示意图：" }',why:"alt 自动推导"},{fn:"createSEOPlugin",arg:"{ enabled: true }",why:"alt + 结构化"}],note:"第一张故意留空 alt，插件会按标题推导出「示意图：办事大厅引导图」。"}],eZ=[{id:"f1-unsplash-masonry",code:"F1",cat:"gallery",title:"瀑布流无限滚动",ref:{site:"Unsplash",page:"探索页",url:"https://unsplash.com/"},pain:"图库用户会反复回看同一批图，每次都重新拉一遍纯属浪费。",tone:"dark",plugs:[{fn:"createIDBCachePlugin",arg:'{ dbName: "vane-gallery" }',why:"落 IndexedDB 复用"},{fn:"createConcurrencyControlPlugin",arg:"{ maxConcurrent: 6 }",why:"限并发"},{fn:"createViewportAwarePlugin",arg:'{ rootMargin: "240px" }',why:"提前一屏"},{fn:"createSkeletonPlugin",arg:'{ type: "shimmer" }',why:"暗色骨架"}],note:"刷新第二次打开：这些图会直接从 IndexedDB 出，Network 面板不再发请求。"},{id:"f2-lightbox-download",code:"F2",cat:"gallery",title:"灯箱 + 下载 + 色板",ref:{site:"Pexels",page:"图片详情",url:"https://www.pexels.com/"},pain:"看图、下载、取色是三件事，分散在三个组件里就很难保持一致。",tone:"dark",plugs:[{fn:"createGalleryPlugin",arg:'{ buttonText: "全屏" }',why:"灯箱看图"},{fn:"createDownloadButtonPlugin",arg:'{ filename: "vane-photo.jpg" }',why:"下载带正确后缀"},{fn:"createColorSwatchPlugin",arg:"{ maxColors: 5 }",why:"主色板可取色"}]},{id:"f3-exif-upright",code:"F3",cat:"gallery",title:"手机竖图纠偏",ref:{site:"摄影社区",page:"用户直传",url:"https://unsplash.com/"},pain:"iPhone 直传的竖图带 Orientation=6，不纠正就是躺着的。",tone:"dark",plugs:[{fn:"createExifOrientationPlugin",arg:"{ enabled: true }",why:"读 EXIF 转正"},{fn:"createCropPlugin",arg:"{ focusPoint: { x: 0.5, y: 0.42 } }",why:"转正后裁 4:5"}],note:"占位图不带 EXIF，插件读到缺失标记时按 1 处理；换成自己拍的直传图即可看到转正效果。"},{id:"f4-before-after",code:"F4",cat:"gallery",title:"原图 / 滤镜对比",ref:{site:"摄影社区",page:"作品对比",url:"https://unsplash.com/"},pain:"「调色前后」说服力最强，但自己做拖拽分割线很容易做出错位。",tone:"dark",plugs:[{fn:"createComparisonPlugin",arg:"{ beforeSrc, afterSrc, start: 0.5 }",why:"可拖拽分隔条"},{fn:"createFilterPlugin",arg:'{ filter: "grayscale" }',why:"预设缩略"}]},{id:"f5-artwork-detail",code:"F5",cat:"gallery",title:"作品详情氛围",ref:{site:"数字艺术平台",page:"作品详情",url:"https://unsplash.com/"},pain:"作品页要有氛围：主色铺底、入场形变、下一件提前备好。",tone:"dark",plugs:[{fn:"createDominantColorPlugin",arg:"{ color: rgba }",why:"主色铺容器底"},{fn:"createCustomEffectsPlugin",arg:"{ hoverImageStyle }",why:"悬停上浮提亮"},{fn:"createMorphPlugin",arg:'{ type: "elastic" }',why:"入场形变"},{fn:"createCachePrewarmPlugin",arg:'{ trigger: "enter" }',why:"预热下一件"}]}],tZ=[{id:"g1-admin-avatars",code:"G1",cat:"admin",title:"成员列表小头像",ref:{site:"Ant Design Pro",page:"用户管理列表",url:"https://pro.ant.design/"},pain:"一屏 40 个 22px 头像，翻页就重拉，主线程也跟着抖。",tone:"light",plugs:[{fn:"createCropPlugin",arg:"{ focusPoint: { x: 0.5, y: 0.5 } }",why:"小尺寸也不变形"},{fn:"createMemoryCachePlugin",arg:"{ maxEntries: 400 }",why:"翻页不重复请求"},{fn:"createFallbackImagePlugin",arg:"{ fallbackSrc: … }",why:"缺图不留空洞"}]},{id:"g2-ticket-attachments",code:"G2",cat:"admin",title:"工单附件缩略",ref:{site:"工单系统",page:"附件列表",url:"https://pro.ant.design/"},pain:"附件走鉴权接口，越权时给一张破图，用户根本不知道发生了什么。",tone:"light",plugs:[{fn:"createAuthPlugin",arg:'{ tokenParam: "access_token" }',why:"带上登录态"},{fn:"createErrorBadgePlugin",arg:'{ text: "无权限" }',why:"失败要可读"},{fn:"createGalleryPlugin",arg:"{ enableLightbox: true }",why:"点开放大"}],note:"第三张用过期凭证，返回 401 invalid_token，右上角出现「无权限」角标。需 pnpm serve:demo。"},{id:"g3-protected-401",code:"G3",cat:"admin",title:"受保护资源三态",ref:{site:"SaaS 后台",page:"受保护图片",url:"https://pro.ant.design/"},pain:"200 / 401 / 403 三种结果必须在 UI 上区分开，否则排查全靠猜。",tone:"light",plugs:[{fn:"createAuthPlugin",arg:'{ token: "demo-token-1f2e3d" }',why:"按凭证取图"},{fn:"createRetryOnErrorPlugin",arg:"{ maxRetries: 1 }",why:"瞬时失败自愈"},{fn:"createErrorOverlayPlugin",arg:'{ retryText: "重试" }',why:"给出可点出口"}],note:"接口是演示站自带的 /protected/image：401 missing_credentials、401 invalid_token、403 insufficient_scope。"},{id:"g4-table-image-cell",code:"G4",cat:"admin",title:"表格图片列",ref:{site:"后台列表",page:"商品/资产表格",url:"https://pro.ant.design/"},pain:"行高固定，缩略图一失败就把整行撑开或塌掉。",tone:"light",plugs:[{fn:"createSkeletonPlugin",arg:'{ type: "pulse" }',why:"骨架与图同尺寸"},{fn:"createFallbackImagePlugin",arg:"{ fallbackSrc: … }",why:"缺图不塌行"},{fn:"createErrorBadgePlugin",arg:'{ text: "!" }',why:"角标提示异常"}]}],nZ=[{id:"h1-listing-gallery",code:"H1",cat:"travel",title:"房源图集横滑",ref:{site:"贝壳 / Airbnb",page:"房源详情",url:"https://www.ke.com/"},pain:"1 主图 + 4 缩略，切一次拉一次；比例不统一就上下跳。",tone:"dark",plugs:[{fn:"createAspectRatioSpacerPlugin",arg:"{ ratio: 4 / 3 }",why:"统一比例不跳"},{fn:"createGalleryPlugin",arg:"{ enableLightbox: true }",why:"看图集"},{fn:"createHoverPrefetchPlugin",arg:"{ max: 1, getNextSrc }",why:"悬停预取下一张"}]},{id:"h2-hotel-card",code:"H2",cat:"travel",title:"酒店列表卡",ref:{site:"携程",page:"酒店搜索结果",url:"https://www.ctrip.com/"},pain:"会员价、促销标、剩余房量——三条业务信息必须压在同一个图上。",tone:"light",plugs:[{fn:"createPriceTagPlugin",arg:"{ price: 486, discount }",why:"会员价 + 划线价"},{fn:"createPromoBadgePlugin",arg:'{ text: "限时特惠" }',why:"促销标"},{fn:"createBadgePlugin",arg:'{ text: "仅剩 2 间" }',why:"库存角标"}]},{id:"h3-offline-favs",code:"H3",cat:"travel",title:"离线收藏夹",ref:{site:"出行 App",page:"我的收藏",url:"https://www.ctrip.com/"},pain:"用户在高铁上打开收藏夹，断网时不该只剩一片空框。",tone:"light",plugs:[{fn:"createIDBCachePlugin",arg:'{ dbName: "vane-travel" }',why:"提前落库"},{fn:"createOfflinePlugin",arg:"{ warm: true, showBadge: true }",why:"断网切占位"},{fn:"createErrorBadgePlugin",arg:'{ text: "离线" }',why:"说明当前状态"}]}],oZ=[{id:"i1-3g-skeleton",code:"I1",cat:"mobile",title:"3G 慢网加载",ref:{site:"移动端信息流",page:"3G 环境首屏",url:"https://www.bilibili.com/"},pain:"650ms RTT 下，没有进度反馈的等待会被用户当成「卡死」。",tone:"light",plugs:[{fn:"createNetworkAnalyticsPlugin",arg:"{ trackCDN: true }",why:"采集耗时与字节"},{fn:"createSkeletonPlugin",arg:'{ type: "shimmer" }',why:"骨架占位"},{fn:"createProgressOverlayPlugin",arg:"{ showPercentText: true }",why:"真实百分比"}]},{id:"i2-saver-battery",code:"I2",cat:"mobile",title:"省流量 + 低电量",ref:{site:"移动端商城",page:"降级模式",url:"https://www.jd.com/"},pain:"用户开了省流量、电量只剩 15%，还按桌面规格拉图就是纯浪费。",tone:"light",plugs:[{fn:"createDataSaverPlugin",arg:"{ respectSaveData: true }",why:"尊重系统开关"},{fn:"createBatteryAwarePlugin",arg:"{ lowBatteryThreshold: 0.2 }",why:"低电量降档"},{fn:"createAdaptiveQualityPlugin",arg:"{ lowQ: 40, highQ: 80 }",why:"按网络定质量"}]},{id:"i3-memory-pressure",code:"I3",cat:"mobile",title:"内存压力中止",ref:{site:"低端安卓",page:"长列表滚动",url:"https://www.bilibili.com/"},pain:"离开视口的图还占着解码位图，低端机滚两次就掉帧甚至被系统杀掉。",tone:"light",plugs:[{fn:"createMemoryPressureAbortPlugin",arg:"{ abortOnLeave: true }",why:"离屏即 abort"},{fn:"createDecodeAfterIdlePlugin",arg:"{ timeoutMs: 600 }",why:"空闲再解码"}]},{id:"i4-offline-recover",code:"I4",cat:"mobile",title:"断网 → 恢复",ref:{site:"移动端内容站",page:"地铁断网",url:"https://www.bilibili.com/"},pain:"断网时是空框，恢复后还得手动刷新——用户会觉得「这 App 坏了」。",tone:"light",plugs:[{fn:"createOfflinePlugin",arg:"{ warm: true }",why:"断网占位 + 恢复重取"},{fn:"createRetryOnErrorPlugin",arg:"{ maxRetries: 3, jitter: true }",why:"指数退避重试"},{fn:"createErrorTrackingPlugin",arg:"{ report }",why:"失败可追踪"}],note:"window.__vaneOfflineErrors 里是失败记录。"},{id:"i5-perf-beacon",code:"I5",cat:"mobile",title:"首屏性能埋点",ref:{site:"内容站数据看板",page:"图片性能",url:"https://www.bilibili.com/"},pain:"说「图片慢」没有数字支撑，优化就只能靠猜。",tone:"dark",plugs:[{fn:"createPerformanceMonitorPlugin",arg:"{ showOverlay: true }",why:"实时耗时浮层"},{fn:"createEventLoggerPlugin",arg:'{ prefix: "[VANE]" }',why:"事件进控制台"},{fn:"createUserBehaviorPlugin",arg:"{ onReport }",why:"曝光/点击上报"},{fn:"createViewportDwellPlugin",arg:"{ dwellMs: 250 }",why:"去抖真实曝光"}]}],rZ=[{id:"j1-brand-parallax",code:"J1",cat:"marketing",title:"品牌页视差首屏",ref:{site:"品牌落地页",page:"新品专题",url:"https://www.apple.com/"},pain:"静态大图撑不起「质感」，加动效又容易吃满主线程。",tone:"dark",plugs:[{fn:"createParallaxPlugin",arg:'{ strength: 0.18, axis: "y" }',why:"背景慢一层"},{fn:"createRevealAnimationPlugin",arg:'{ animation: "fade-up" }',why:"分块揭示"},{fn:"createFadeInPlugin",arg:"{ durationMs: 400 }",why:"整体淡入"}]},{id:"j2-glitch-poster",code:"J2",cat:"marketing",title:"故障风海报",ref:{site:"音乐节 / 潮流活动",page:"主视觉海报",url:"https://www.boilerroom.tv/"},pain:"故障特效做不好就是掉帧；开成常驻动画更会一直占着合成层。",tone:"dark",plugs:[{fn:"createGlitchEffectPlugin",arg:"{ triggerOnHover: true, duration: 900 }",why:"悬停触发一次"},{fn:"createFilterPlugin",arg:'{ filter: "contrast" }',why:"底片先压对比"}]},{id:"j3-watermark-guard",code:"J3",cat:"marketing",title:"版权图水印",ref:{site:"素材站",page:"预览图",url:"https://www.pexels.com/"},pain:"预览图要能被截图溯源，同时不能被别站直接外链。",tone:"dark",plugs:[{fn:"createWatermarkPlugin",arg:'{ text: "© VANE STUDIO" }',why:"可见水印"},{fn:"createAntiHotlinkPlugin",arg:'{ allowedDomains: ["picsum.photos"] }',why:"引用限制"}],note:"水印是 DOM 叠层而非烧进图片，真实业务还要配合服务端签名 URL。"},{id:"j4-depth-card",code:"J4",cat:"marketing",title:"3D 深度卡片",ref:{site:"产品官网",page:"产品卡",url:"https://www.apple.com/"},pain:"产品图的「手感」靠位移与光影，但自己写 tilt 很容易飘。",tone:"dark",plugs:[{fn:"createDepthMapPlugin",arg:'{ style: "tilt", maxTilt: 18 }',why:"指针跟随倾斜"},{fn:"createAnimatedCursorPlugin",arg:'{ style: "zoom-in" }',why:"光标跟随放大"}]}],LZ=[{id:"vod",label:"影视点播",en:"VOD",blurb:"图少但单图大，LCP 与付费墙失败态决定体验。"},{id:"video",label:"视频社区",en:"VIDEO",blurb:"封面海量且单图小，唯一目标是别和视频抢带宽。"},{id:"ecommerce",label:"电商",en:"COMMERCE",blurb:"主图/缩略/评价图并存，SKU 切换要秒开。"},{id:"social",label:"图文社区",en:"SOCIAL",blurb:"不等高瀑布流，UGC 图质量与可用性都不可控。"},{id:"news",label:"资讯门户",en:"NEWS",blurb:"正文图决定 CLS，外链图常年失效。"},{id:"gallery",label:"图库摄影",en:"GALLERY",blurb:"以图为主业，缩略与全尺寸要分档，回访要命中缓存。"},{id:"admin",label:"后台 SaaS",en:"ADMIN",blurb:"表格里的小图与受保护附件，失败必须可解释。"},{id:"travel",label:"出行房产",en:"TRAVEL",blurb:"图集横滑 + 价格角标，弱网与离线是常态。"},{id:"mobile",label:"移动弱网",en:"MOBILE",blurb:"3G、低电量、内存压力、断网恢复的全链路。"},{id:"marketing",label:"营销创意",en:"MARKETING",blurb:"视觉即卖点，动效与版权保护同时要。"}],Ks=[...KX,...YX,...XX,...ZX,...JX,...eZ,...tZ,...nZ,...oZ,...rZ],aZ=Object.assign({"../specs/a1-poster-wall.tsx":()=>L(()=>import("./a1-poster-wall-DmO3nqAt.js"),[],import.meta.url),"../specs/a2-episode-row.tsx":()=>L(()=>import("./a2-episode-row-DPlO1jwc.js"),[],import.meta.url),"../specs/a3-recommend-side.tsx":()=>L(()=>import("./a3-recommend-side-CJdYC_0W.js"),[],import.meta.url),"../specs/a4-cast-avatar.tsx":()=>L(()=>import("./a4-cast-avatar-B9_KiNLh.js"),[],import.meta.url),"../specs/a5-paid-poster.tsx":()=>L(()=>import("./a5-paid-poster-BXdAJ0Ra.js"),[],import.meta.url),"../specs/a6-tiered-quality.tsx":()=>L(()=>import("./a6-tiered-quality-CB00cvBr.js"),[],import.meta.url),"../specs/b1-jd-search-grid.tsx":()=>L(()=>import("./b1-jd-search-grid-DS6bmLIe.js"),[],import.meta.url),"../specs/b2-sku-gallery-zoom.tsx":()=>L(()=>import("./b2-sku-gallery-zoom-smMYdKyS.js"),[],import.meta.url),"../specs/b3-flash-sale.tsx":()=>L(()=>import("./b3-flash-sale-DZ0g389q.js"),[],import.meta.url),"../specs/b4-review-grid.tsx":()=>L(()=>import("./b4-review-grid-DwiSyw90.js"),[],import.meta.url),"../specs/b5-cart-recs.tsx":()=>L(()=>import("./b5-cart-recs-BxZMeCeY.js"),[],import.meta.url),"../specs/b6-hotlink-guard.tsx":()=>L(()=>import("./b6-hotlink-guard-I0OwYKdo.js"),[],import.meta.url),"../specs/b7-multi-currency.tsx":()=>L(()=>import("./b7-multi-currency-BGOWZM_d.js"),[],import.meta.url),"../specs/b8-format-webp.tsx":()=>L(()=>import("./b8-format-webp-DKPogU4y.js"),[],import.meta.url),"../specs/c1-bili-cover-grid.tsx":()=>L(()=>import("./c1-bili-cover-grid-RCEw261S.js"),[],import.meta.url),"../specs/c2-hero-banner.tsx":()=>L(()=>import("./c2-hero-banner-h7RQ_da3.js"),[],import.meta.url),"../specs/c3-watch-side-list.tsx":()=>L(()=>import("./c3-watch-side-list-BBbspOqv.js"),[],import.meta.url),"../specs/c4-uploader-avatar.tsx":()=>L(()=>import("./c4-uploader-avatar-CnPwUnH6.js"),[],import.meta.url),"../specs/c5-hover-preview.tsx":()=>L(()=>import("./c5-hover-preview-CKG0Ni1o.js"),[],import.meta.url),"../specs/c6-saver-mode.tsx":()=>L(()=>import("./c6-saver-mode-KZtt9biu.js"),[],import.meta.url),"../specs/d1-xhs-masonry.tsx":()=>L(()=>import("./d1-xhs-masonry-DAlf3wjN.js"),[],import.meta.url),"../specs/d2-nine-grid-lightbox.tsx":()=>L(()=>import("./d2-nine-grid-lightbox-dyfuR_Ve.js"),[],import.meta.url),"../specs/d3-article-images.tsx":()=>L(()=>import("./d3-article-images-C891BB3Z.js"),[],import.meta.url),"../specs/d4-follow-avatars.tsx":()=>L(()=>import("./d4-follow-avatars-BZVbwRaH.js"),[],import.meta.url),"../specs/d5-share-card.tsx":()=>L(()=>import("./d5-share-card-AnR0o8Qt.js"),[],import.meta.url),"../specs/e1-news-mixed.tsx":()=>L(()=>import("./e1-news-mixed-DnQDGzll.js"),[],import.meta.url),"../specs/e2-photo-set.tsx":()=>L(()=>import("./e2-photo-set-Av6KckEP.js"),[],import.meta.url),"../specs/e3-inline-anti-cls.tsx":()=>L(()=>import("./e3-inline-anti-cls-CpWXehGD.js"),[],import.meta.url),"../specs/e4-dead-links.tsx":()=>L(()=>import("./e4-dead-links-CZv3mAdQ.js"),[],import.meta.url),"../specs/e5-a11y-gov.tsx":()=>L(()=>import("./e5-a11y-gov-D5BuVpi8.js"),[],import.meta.url),"../specs/f1-unsplash-masonry.tsx":()=>L(()=>import("./f1-unsplash-masonry-C8wiY1HW.js"),[],import.meta.url),"../specs/f2-lightbox-download.tsx":()=>L(()=>import("./f2-lightbox-download-Y7BvSSMZ.js"),[],import.meta.url),"../specs/f3-exif-upright.tsx":()=>L(()=>import("./f3-exif-upright-wyp6bYGi.js"),[],import.meta.url),"../specs/f4-before-after.tsx":()=>L(()=>import("./f4-before-after-CF8V8hG4.js"),[],import.meta.url),"../specs/f5-artwork-detail.tsx":()=>L(()=>import("./f5-artwork-detail-DNuf9BOw.js"),[],import.meta.url),"../specs/g1-admin-avatars.tsx":()=>L(()=>import("./g1-admin-avatars-Df5HdpAI.js"),[],import.meta.url),"../specs/g2-ticket-attachments.tsx":()=>L(()=>import("./g2-ticket-attachments-DKAmk1lv.js"),[],import.meta.url),"../specs/g3-protected-401.tsx":()=>L(()=>import("./g3-protected-401-DJS17Xco.js"),[],import.meta.url),"../specs/g4-table-image-cell.tsx":()=>L(()=>import("./g4-table-image-cell-wQt5IrPI.js"),[],import.meta.url),"../specs/h1-listing-gallery.tsx":()=>L(()=>import("./h1-listing-gallery-C8fA_GGn.js"),[],import.meta.url),"../specs/h2-hotel-card.tsx":()=>L(()=>import("./h2-hotel-card-BLuY3fSp.js"),[],import.meta.url),"../specs/h3-offline-favs.tsx":()=>L(()=>import("./h3-offline-favs-Bl944G9u.js"),[],import.meta.url),"../specs/i1-3g-skeleton.tsx":()=>L(()=>import("./i1-3g-skeleton-Dh6m-Cij.js"),[],import.meta.url),"../specs/i2-saver-battery.tsx":()=>L(()=>import("./i2-saver-battery-KkHmzaZF.js"),[],import.meta.url),"../specs/i3-memory-pressure.tsx":()=>L(()=>import("./i3-memory-pressure-D3Cpy1ZW.js"),[],import.meta.url),"../specs/i4-offline-recover.tsx":()=>L(()=>import("./i4-offline-recover-CBuQ3ZFO.js"),[],import.meta.url),"../specs/i5-perf-beacon.tsx":()=>L(()=>import("./i5-perf-beacon-Cq9xfJ5M.js"),[],import.meta.url),"../specs/j1-brand-parallax.tsx":()=>L(()=>import("./j1-brand-parallax-BahF7Wlu.js"),[],import.meta.url),"../specs/j2-glitch-poster.tsx":()=>L(()=>import("./j2-glitch-poster-DrVqladi.js"),[],import.meta.url),"../specs/j3-watermark-guard.tsx":()=>L(()=>import("./j3-watermark-guard-CbM-ZnWd.js"),[],import.meta.url),"../specs/j4-depth-card.tsx":()=>L(()=>import("./j4-depth-card-Ctd9UQ9m.js"),[],import.meta.url)}),iZ=Object.assign({"../specs/a1-poster-wall.tsx":()=>L(()=>import("./a1-poster-wall-Cykks--R.js"),[],import.meta.url).then(e=>e.default),"../specs/a2-episode-row.tsx":()=>L(()=>import("./a2-episode-row-Db43v__l.js"),[],import.meta.url).then(e=>e.default),"../specs/a3-recommend-side.tsx":()=>L(()=>import("./a3-recommend-side-DiUSc9Re.js"),[],import.meta.url).then(e=>e.default),"../specs/a4-cast-avatar.tsx":()=>L(()=>import("./a4-cast-avatar-BbUD-CJX.js"),[],import.meta.url).then(e=>e.default),"../specs/a5-paid-poster.tsx":()=>L(()=>import("./a5-paid-poster-DKA6BZ32.js"),[],import.meta.url).then(e=>e.default),"../specs/a6-tiered-quality.tsx":()=>L(()=>import("./a6-tiered-quality-B-7ywTLS.js"),[],import.meta.url).then(e=>e.default),"../specs/b1-jd-search-grid.tsx":()=>L(()=>import("./b1-jd-search-grid-BTLAA9Xs.js"),[],import.meta.url).then(e=>e.default),"../specs/b2-sku-gallery-zoom.tsx":()=>L(()=>import("./b2-sku-gallery-zoom-BiMFArMI.js"),[],import.meta.url).then(e=>e.default),"../specs/b3-flash-sale.tsx":()=>L(()=>import("./b3-flash-sale-kfVC10uN.js"),[],import.meta.url).then(e=>e.default),"../specs/b4-review-grid.tsx":()=>L(()=>import("./b4-review-grid-CX4kHiCU.js"),[],import.meta.url).then(e=>e.default),"../specs/b5-cart-recs.tsx":()=>L(()=>import("./b5-cart-recs-KR-m6cak.js"),[],import.meta.url).then(e=>e.default),"../specs/b6-hotlink-guard.tsx":()=>L(()=>import("./b6-hotlink-guard-BqgB0L1N.js"),[],import.meta.url).then(e=>e.default),"../specs/b7-multi-currency.tsx":()=>L(()=>import("./b7-multi-currency-ByQRPY-Z.js"),[],import.meta.url).then(e=>e.default),"../specs/b8-format-webp.tsx":()=>L(()=>import("./b8-format-webp-DaYLYmx1.js"),[],import.meta.url).then(e=>e.default),"../specs/c1-bili-cover-grid.tsx":()=>L(()=>import("./c1-bili-cover-grid-CKvu6Sdf.js"),[],import.meta.url).then(e=>e.default),"../specs/c2-hero-banner.tsx":()=>L(()=>import("./c2-hero-banner-B-n13Bps.js"),[],import.meta.url).then(e=>e.default),"../specs/c3-watch-side-list.tsx":()=>L(()=>import("./c3-watch-side-list-BYTQpqA9.js"),[],import.meta.url).then(e=>e.default),"../specs/c4-uploader-avatar.tsx":()=>L(()=>import("./c4-uploader-avatar-BeQJwtbY.js"),[],import.meta.url).then(e=>e.default),"../specs/c5-hover-preview.tsx":()=>L(()=>import("./c5-hover-preview-CJEeMz_6.js"),[],import.meta.url).then(e=>e.default),"../specs/c6-saver-mode.tsx":()=>L(()=>import("./c6-saver-mode-C8DhIPWq.js"),[],import.meta.url).then(e=>e.default),"../specs/d1-xhs-masonry.tsx":()=>L(()=>import("./d1-xhs-masonry-CWJbzt4c.js"),[],import.meta.url).then(e=>e.default),"../specs/d2-nine-grid-lightbox.tsx":()=>L(()=>import("./d2-nine-grid-lightbox-w3sTa-yE.js"),[],import.meta.url).then(e=>e.default),"../specs/d3-article-images.tsx":()=>L(()=>import("./d3-article-images-BD5U4y_Q.js"),[],import.meta.url).then(e=>e.default),"../specs/d4-follow-avatars.tsx":()=>L(()=>import("./d4-follow-avatars-Q7P9oMN0.js"),[],import.meta.url).then(e=>e.default),"../specs/d5-share-card.tsx":()=>L(()=>import("./d5-share-card-jiTztKOk.js"),[],import.meta.url).then(e=>e.default),"../specs/e1-news-mixed.tsx":()=>L(()=>import("./e1-news-mixed-NIKr9bH5.js"),[],import.meta.url).then(e=>e.default),"../specs/e2-photo-set.tsx":()=>L(()=>import("./e2-photo-set-BJnQfYY6.js"),[],import.meta.url).then(e=>e.default),"../specs/e3-inline-anti-cls.tsx":()=>L(()=>import("./e3-inline-anti-cls-CUSbthow.js"),[],import.meta.url).then(e=>e.default),"../specs/e4-dead-links.tsx":()=>L(()=>import("./e4-dead-links-D9yCWP81.js"),[],import.meta.url).then(e=>e.default),"../specs/e5-a11y-gov.tsx":()=>L(()=>import("./e5-a11y-gov-sO_ki5Vg.js"),[],import.meta.url).then(e=>e.default),"../specs/f1-unsplash-masonry.tsx":()=>L(()=>import("./f1-unsplash-masonry-73bYgqc7.js"),[],import.meta.url).then(e=>e.default),"../specs/f2-lightbox-download.tsx":()=>L(()=>import("./f2-lightbox-download-D_NE0Fsa.js"),[],import.meta.url).then(e=>e.default),"../specs/f3-exif-upright.tsx":()=>L(()=>import("./f3-exif-upright-C5GoMu0l.js"),[],import.meta.url).then(e=>e.default),"../specs/f4-before-after.tsx":()=>L(()=>import("./f4-before-after-DFiCucPs.js"),[],import.meta.url).then(e=>e.default),"../specs/f5-artwork-detail.tsx":()=>L(()=>import("./f5-artwork-detail-C2JEb2Hy.js"),[],import.meta.url).then(e=>e.default),"../specs/g1-admin-avatars.tsx":()=>L(()=>import("./g1-admin-avatars-etpgKsg9.js"),[],import.meta.url).then(e=>e.default),"../specs/g2-ticket-attachments.tsx":()=>L(()=>import("./g2-ticket-attachments-BxIe67Y4.js"),[],import.meta.url).then(e=>e.default),"../specs/g3-protected-401.tsx":()=>L(()=>import("./g3-protected-401-CdofLwHJ.js"),[],import.meta.url).then(e=>e.default),"../specs/g4-table-image-cell.tsx":()=>L(()=>import("./g4-table-image-cell-rdsAs6jI.js"),[],import.meta.url).then(e=>e.default),"../specs/h1-listing-gallery.tsx":()=>L(()=>import("./h1-listing-gallery-BQwnbOpB.js"),[],import.meta.url).then(e=>e.default),"../specs/h2-hotel-card.tsx":()=>L(()=>import("./h2-hotel-card-DE_6fJuJ.js"),[],import.meta.url).then(e=>e.default),"../specs/h3-offline-favs.tsx":()=>L(()=>import("./h3-offline-favs-92izyaJ2.js"),[],import.meta.url).then(e=>e.default),"../specs/i1-3g-skeleton.tsx":()=>L(()=>import("./i1-3g-skeleton-obeP0y7t.js"),[],import.meta.url).then(e=>e.default),"../specs/i2-saver-battery.tsx":()=>L(()=>import("./i2-saver-battery-DUHeKUzY.js"),[],import.meta.url).then(e=>e.default),"../specs/i3-memory-pressure.tsx":()=>L(()=>import("./i3-memory-pressure-Ps-AJR0F.js"),[],import.meta.url).then(e=>e.default),"../specs/i4-offline-recover.tsx":()=>L(()=>import("./i4-offline-recover-DM-9Evhx.js"),[],import.meta.url).then(e=>e.default),"../specs/i5-perf-beacon.tsx":()=>L(()=>import("./i5-perf-beacon-BxKRE338.js"),[],import.meta.url).then(e=>e.default),"../specs/j1-brand-parallax.tsx":()=>L(()=>import("./j1-brand-parallax-BmwG9TzE.js"),[],import.meta.url).then(e=>e.default),"../specs/j2-glitch-poster.tsx":()=>L(()=>import("./j2-glitch-poster-E__I8osg.js"),[],import.meta.url).then(e=>e.default),"../specs/j3-watermark-guard.tsx":()=>L(()=>import("./j3-watermark-guard-BppDCfw7.js"),[],import.meta.url).then(e=>e.default),"../specs/j4-depth-card.tsx":()=>L(()=>import("./j4-depth-card-C5D3N5E2.js"),[],import.meta.url).then(e=>e.default)}),Vg=e=>`../specs/${e}.tsx`;function IZ(e){return aZ[Vg(e)]}function _Z(e){return iZ[Vg(e)]}function EZ(e){return Ks.filter(t=>t.cat===e)}function sZ(e){return Array.from(new Set(e.plugs.map(t=>t.fn)))}function RZ(e){const n=["import {","  LazyLoadImageCore,",...sZ(e).sort().map(r=>`  ${r},`),"  withPlugins,",'} from "vane-lazy-image";'].join(`
`),o=e.plugs.map(r=>`  ${r.fn}(${r.arg??""}),`).join(`
`);return[`// ${e.code} ${e.title} · 最小可用版`,`// ${e.pain}`,n,"","const LazyImage = withPlugins(LazyLoadImageCore, [",o,"]);","","// 版式与数据由业务侧负责，这一层只解决「怎么取图」",'<LazyImage src={src} alt={alt} loading="lazy" />'].join(`
`)}const lZ=S.lazy(()=>L(()=>import("./Home-oJ8k-c5J.js"),[],import.meta.url).then(e=>({default:e.Home}))),cZ=S.lazy(()=>L(()=>import("./PluginDetail-D7oVeScF.js"),[],import.meta.url).then(e=>({default:e.PluginDetail}))),$d=S.lazy(()=>L(()=>import("./CombosPage-D_Ju3mAn.js"),[],import.meta.url).then(e=>({default:e.CombosPage}))),Sd=S.lazy(()=>L(()=>import("./AdvancedPage-CLPr4ZXP.js"),[],import.meta.url).then(e=>({default:e.AdvancedPage}))),uZ=S.lazy(()=>L(()=>import("./ScenariosPage-B-at_AYz.js"),[],import.meta.url).then(e=>({default:e.ScenariosPage}))),dZ=S.lazy(()=>L(()=>import("./WorkshopPage-04IeEUYu.js"),[],import.meta.url).then(e=>({default:e.WorkshopPage}))),pZ=S.lazy(()=>L(()=>import("./GalleryPage-DcCY4tEB.js"),[],import.meta.url).then(e=>({default:e.GalleryPage}))),mZ={pkg:"vane-lazy-image",brand:"V",subtitle:"图片懒加载 / plugin index",nav:[{to:"/",label:"总览",hint:"overview"},{to:"/workshop",label:"插件工坊",hint:`${Oa.length} plugins`},{to:"/combos",label:"组合示例",hint:`${pg.length} combos`},{to:"/advanced",label:"高级功能",hint:`${mg.length} advanced`},{to:"/scenarios",label:"场景示例",hint:`${Ks.length} plates`},{to:"/gallery",label:"商品图集",hint:"gallery"}],routes:[{path:"/",element:y.jsx(lZ,{})},{path:"/plugin/:id",element:y.jsx(cZ,{})},{path:"/combos",element:y.jsx($d,{})},{path:"/combo/:id",element:y.jsx($d,{})},{path:"/advanced",element:y.jsx(Sd,{})},{path:"/advanced/:id",element:y.jsx(Sd,{})},{path:"/scenarios",element:y.jsx(uZ,{})},{path:"/workshop",element:y.jsx(dZ,{})},{path:"/gallery",element:y.jsx(pZ,{})}],crumb:e=>e.startsWith("/plugin/")?"plugin · 插件详情":e.startsWith("/combo")?"combo · 组合示例":e.startsWith("/advanced")?"advanced · 高级功能":e.startsWith("/scenarios")?"scenario · 场景示例":e.startsWith("/workshop")?"workshop · 插件工坊":e.startsWith("/gallery")?"gallery · 商品图集":"index · 总览",demos:{label:"逐项示例",groups:XG.map(e=>({key:e,label:gg[e].label})),entries:Da,detail:(e,t)=>y.jsx(QX,{entry:e,order:t})},footer:[`${Oa.length} PLUGINS · ${Ks.length} PLATES`,`${Da.length} DEMOS · D1-A / D2-A`]};function gZ(){return y.jsx(Ry,{config:mZ})}const Hg="vane-demo-env",Cd={offline:!1,slow:!1,battery:!1};function bc(){try{const e=sessionStorage.getItem(Hg);if(!e)return{...Cd};const t=JSON.parse(e);return{offline:!!t.offline,slow:!!t.slow,battery:!!t.battery}}catch{return{...Cd}}}function fZ(e){try{sessionStorage.setItem(Hg,JSON.stringify(e))}catch{}}function hZ(e=bc()){return e.offline||e.slow||e.battery}let mn=null;const Ys=new Set;function zZ(){return mn||(mn=bc()),mn}function OZ(e){mn={...e},fZ(mn),Gg(mn),Ys.forEach(t=>{try{t(mn)}catch{}})}function DZ(e){return Ys.add(e),()=>{Ys.delete(e)}}function Gg(e){try{Object.defineProperty(navigator,"onLine",{configurable:!0,get:()=>!e.offline})}catch{}try{window.dispatchEvent(new Event(e.offline?"offline":"online"))}catch{}try{const t=e.slow?"2g":"4g",n=navigator.connection,o=r=>(Object.defineProperty(r,"effectiveType",{configurable:!0,get:()=>t}),Object.defineProperty(r,"saveData",{configurable:!0,get:()=>e.slow}),Object.defineProperty(r,"downlink",{configurable:!0,get:()=>e.slow?.3:10}),Object.defineProperty(r,"rtt",{configurable:!0,get:()=>e.slow?900:50}),r);if(n){o(n);try{n.dispatchEvent(new Event("change"))}catch{}}else Object.defineProperty(navigator,"connection",{configurable:!0,value:o({addEventListener(){},removeEventListener(){},dispatchEvent(){return!0}})})}catch{}try{navigator.getBattery=()=>Promise.resolve({level:e.battery?.08:.92,charging:!e.battery,chargingTime:e.battery?1/0:0,dischargingTime:e.battery?900:1/0,addEventListener(){},removeEventListener(){}})}catch{}try{Object.defineProperty(navigator,"deviceMemory",{configurable:!0,get:()=>e.battery?1:8})}catch{}}function yZ(){const e=bc();hZ(e)&&Gg(e)}yZ();try{performance.setResourceTimingBufferSize(1e3)}catch{}Mm(document.getElementById("root")).render(y.jsx(gZ,{}));export{oH as $,mg as A,r4 as B,pg as C,a4 as D,TF as E,pF as F,mF as G,hF as H,fG as I,B9 as J,VH as K,Bs as L,DU as M,Ra as N,W4 as O,BG as P,Y9 as Q,N as R,Ks as S,gR as T,eO as U,tg as V,OU as W,aF as X,ng as Y,QV as Z,L as _,$Z as a,YN as a$,vF as a0,yF as a1,TU as a2,_G as a3,wF as a4,gF as a5,gG as a6,nF as a7,o4 as a8,WN as a9,ZV as aA,KV as aB,YV as aC,XV as aD,VN as aE,rF as aF,sF as aG,cF as aH,t7 as aI,e7 as aJ,NN as aK,GN as aL,eF as aM,dF as aN,JV as aO,bF as aP,n7 as aQ,tF as aR,jN as aS,MN as aT,QN as aU,XN as aV,oF as aW,nH as aX,PF as aY,UN as aZ,KN as a_,FN as aa,j9 as ab,iF as ac,uF as ad,O9 as ae,QF as af,hH as ag,DN as ah,qN as ai,HN as aj,BN as ak,T9 as al,D9 as am,DR as an,TR as ao,zH as ap,xF as aq,ER as ar,ON as as,fF as at,eH as au,Gs as av,AN as aw,TN as ax,lF as ay,tH as az,OZ as b,JN as b0,ZN as b1,NG as c,SZ as d,qX as e,kZ as f,zZ as g,CZ as h,_Z as i,y as j,EZ as k,IZ as l,RZ as m,LZ as n,Oa as o,FR as p,i9 as q,S as r,DZ as s,y9 as t,Jh as u,lV as v,Jm as w,bV as x,qR as y,AV as z};
