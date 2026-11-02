const __vite__mapDeps=(i,m=__vite__mapDeps,d=(m.f||(m.f=["./HomePage--rKfSyeM.js","./catalog-Bv8a7vcA.js","./ScenariosPage-mX4VSI04.js"])))=>i.map(i=>d[i]);
var em=Object.defineProperty;var nm=(e,n,t)=>n in e?em(e,n,{enumerable:!0,configurable:!0,writable:!0,value:t}):e[n]=t;var La=(e,n,t)=>nm(e,typeof n!="symbol"?n+"":n,t);function tm(e,n){for(var t=0;t<n.length;t++){const r=n[t];if(typeof r!="string"&&!Array.isArray(r)){for(const o in r)if(o!=="default"&&!(o in e)){const i=Object.getOwnPropertyDescriptor(r,o);i&&Object.defineProperty(e,o,i.get?i:{enumerable:!0,get:()=>r[o]})}}}return Object.freeze(Object.defineProperty(e,Symbol.toStringTag,{value:"Module"}))}(function(){const n=document.createElement("link").relList;if(n&&n.supports&&n.supports("modulepreload"))return;for(const o of document.querySelectorAll('link[rel="modulepreload"]'))r(o);new MutationObserver(o=>{for(const i of o)if(i.type==="childList")for(const l of i.addedNodes)l.tagName==="LINK"&&l.rel==="modulepreload"&&r(l)}).observe(document,{childList:!0,subtree:!0});function t(o){const i={};return o.integrity&&(i.integrity=o.integrity),o.referrerPolicy&&(i.referrerPolicy=o.referrerPolicy),o.crossOrigin==="use-credentials"?i.credentials="include":o.crossOrigin==="anonymous"?i.credentials="omit":i.credentials="same-origin",i}function r(o){if(o.ep)return;o.ep=!0;const i=t(o);fetch(o.href,i)}})();function rm(e){return e&&e.__esModule&&Object.prototype.hasOwnProperty.call(e,"default")?e.default:e}var Sc={exports:{}},vi={},bc={exports:{}},V={};/**
 * @license React
 * react.production.min.js
 *
 * Copyright (c) Facebook, Inc. and its affiliates.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */var ro=Symbol.for("react.element"),om=Symbol.for("react.portal"),im=Symbol.for("react.fragment"),lm=Symbol.for("react.strict_mode"),sm=Symbol.for("react.profiler"),am=Symbol.for("react.provider"),um=Symbol.for("react.context"),cm=Symbol.for("react.forward_ref"),dm=Symbol.for("react.suspense"),pm=Symbol.for("react.memo"),fm=Symbol.for("react.lazy"),Oa=Symbol.iterator;function mm(e){return e===null||typeof e!="object"?null:(e=Oa&&e[Oa]||e["@@iterator"],typeof e=="function"?e:null)}var kc={isMounted:function(){return!1},enqueueForceUpdate:function(){},enqueueReplaceState:function(){},enqueueSetState:function(){}},Pc=Object.assign,Cc={};function sr(e,n,t){this.props=e,this.context=n,this.refs=Cc,this.updater=t||kc}sr.prototype.isReactComponent={};sr.prototype.setState=function(e,n){if(typeof e!="object"&&typeof e!="function"&&e!=null)throw Error("setState(...): takes an object of state variables to update or a function which returns an object of state variables.");this.updater.enqueueSetState(this,e,n,"setState")};sr.prototype.forceUpdate=function(e){this.updater.enqueueForceUpdate(this,e,"forceUpdate")};function _c(){}_c.prototype=sr.prototype;function hs(e,n,t){this.props=e,this.context=n,this.refs=Cc,this.updater=t||kc}var ys=hs.prototype=new _c;ys.constructor=hs;Pc(ys,sr.prototype);ys.isPureReactComponent=!0;var Da=Array.isArray,Tc=Object.prototype.hasOwnProperty,vs={current:null},Rc={key:!0,ref:!0,__self:!0,__source:!0};function Mc(e,n,t){var r,o={},i=null,l=null;if(n!=null)for(r in n.ref!==void 0&&(l=n.ref),n.key!==void 0&&(i=""+n.key),n)Tc.call(n,r)&&!Rc.hasOwnProperty(r)&&(o[r]=n[r]);var s=arguments.length-2;if(s===1)o.children=t;else if(1<s){for(var a=Array(s),u=0;u<s;u++)a[u]=arguments[u+2];o.children=a}if(e&&e.defaultProps)for(r in s=e.defaultProps,s)o[r]===void 0&&(o[r]=s[r]);return{$$typeof:ro,type:e,key:i,ref:l,props:o,_owner:vs.current}}function gm(e,n){return{$$typeof:ro,type:e.type,key:n,ref:e.ref,props:e.props,_owner:e._owner}}function xs(e){return typeof e=="object"&&e!==null&&e.$$typeof===ro}function hm(e){var n={"=":"=0",":":"=2"};return"$"+e.replace(/[=:]/g,function(t){return n[t]})}var za=/\/+/g;function Hi(e,n){return typeof e=="object"&&e!==null&&e.key!=null?hm(""+e.key):n.toString(36)}function jo(e,n,t,r,o){var i=typeof e;(i==="undefined"||i==="boolean")&&(e=null);var l=!1;if(e===null)l=!0;else switch(i){case"string":case"number":l=!0;break;case"object":switch(e.$$typeof){case ro:case om:l=!0}}if(l)return l=e,o=o(l),e=r===""?"."+Hi(l,0):r,Da(o)?(t="",e!=null&&(t=e.replace(za,"$&/")+"/"),jo(o,n,t,"",function(u){return u})):o!=null&&(xs(o)&&(o=gm(o,t+(!o.key||l&&l.key===o.key?"":(""+o.key).replace(za,"$&/")+"/")+e)),n.push(o)),1;if(l=0,r=r===""?".":r+":",Da(e))for(var s=0;s<e.length;s++){i=e[s];var a=r+Hi(i,s);l+=jo(i,n,t,a,o)}else if(a=mm(e),typeof a=="function")for(e=a.call(e),s=0;!(i=e.next()).done;)i=i.value,a=r+Hi(i,s++),l+=jo(i,n,t,a,o);else if(i==="object")throw n=String(e),Error("Objects are not valid as a React child (found: "+(n==="[object Object]"?"object with keys {"+Object.keys(e).join(", ")+"}":n)+"). If you meant to render a collection of children, use an array instead.");return l}function fo(e,n,t){if(e==null)return e;var r=[],o=0;return jo(e,r,"","",function(i){return n.call(t,i,o++)}),r}function ym(e){if(e._status===-1){var n=e._result;n=n(),n.then(function(t){(e._status===0||e._status===-1)&&(e._status=1,e._result=t)},function(t){(e._status===0||e._status===-1)&&(e._status=2,e._result=t)}),e._status===-1&&(e._status=0,e._result=n)}if(e._status===1)return e._result.default;throw e._result}var We={current:null},Lo={transition:null},vm={ReactCurrentDispatcher:We,ReactCurrentBatchConfig:Lo,ReactCurrentOwner:vs};function Ic(){throw Error("act(...) is not supported in production builds of React.")}V.Children={map:fo,forEach:function(e,n,t){fo(e,function(){n.apply(this,arguments)},t)},count:function(e){var n=0;return fo(e,function(){n++}),n},toArray:function(e){return fo(e,function(n){return n})||[]},only:function(e){if(!xs(e))throw Error("React.Children.only expected to receive a single React element child.");return e}};V.Component=sr;V.Fragment=im;V.Profiler=sm;V.PureComponent=hs;V.StrictMode=lm;V.Suspense=dm;V.__SECRET_INTERNALS_DO_NOT_USE_OR_YOU_WILL_BE_FIRED=vm;V.act=Ic;V.cloneElement=function(e,n,t){if(e==null)throw Error("React.cloneElement(...): The argument must be a React element, but you passed "+e+".");var r=Pc({},e.props),o=e.key,i=e.ref,l=e._owner;if(n!=null){if(n.ref!==void 0&&(i=n.ref,l=vs.current),n.key!==void 0&&(o=""+n.key),e.type&&e.type.defaultProps)var s=e.type.defaultProps;for(a in n)Tc.call(n,a)&&!Rc.hasOwnProperty(a)&&(r[a]=n[a]===void 0&&s!==void 0?s[a]:n[a])}var a=arguments.length-2;if(a===1)r.children=t;else if(1<a){s=Array(a);for(var u=0;u<a;u++)s[u]=arguments[u+2];r.children=s}return{$$typeof:ro,type:e.type,key:o,ref:i,props:r,_owner:l}};V.createContext=function(e){return e={$$typeof:um,_currentValue:e,_currentValue2:e,_threadCount:0,Provider:null,Consumer:null,_defaultValue:null,_globalName:null},e.Provider={$$typeof:am,_context:e},e.Consumer=e};V.createElement=Mc;V.createFactory=function(e){var n=Mc.bind(null,e);return n.type=e,n};V.createRef=function(){return{current:null}};V.forwardRef=function(e){return{$$typeof:cm,render:e}};V.isValidElement=xs;V.lazy=function(e){return{$$typeof:fm,_payload:{_status:-1,_result:e},_init:ym}};V.memo=function(e,n){return{$$typeof:pm,type:e,compare:n===void 0?null:n}};V.startTransition=function(e){var n=Lo.transition;Lo.transition={};try{e()}finally{Lo.transition=n}};V.unstable_act=Ic;V.useCallback=function(e,n){return We.current.useCallback(e,n)};V.useContext=function(e){return We.current.useContext(e)};V.useDebugValue=function(){};V.useDeferredValue=function(e){return We.current.useDeferredValue(e)};V.useEffect=function(e,n){return We.current.useEffect(e,n)};V.useId=function(){return We.current.useId()};V.useImperativeHandle=function(e,n,t){return We.current.useImperativeHandle(e,n,t)};V.useInsertionEffect=function(e,n){return We.current.useInsertionEffect(e,n)};V.useLayoutEffect=function(e,n){return We.current.useLayoutEffect(e,n)};V.useMemo=function(e,n){return We.current.useMemo(e,n)};V.useReducer=function(e,n,t){return We.current.useReducer(e,n,t)};V.useRef=function(e){return We.current.useRef(e)};V.useState=function(e){return We.current.useState(e)};V.useSyncExternalStore=function(e,n,t){return We.current.useSyncExternalStore(e,n,t)};V.useTransition=function(){return We.current.useTransition()};V.version="18.3.1";bc.exports=V;var h=bc.exports;const Tt=rm(h),xm=tm({__proto__:null,default:Tt},[h]);/**
 * @license React
 * react-jsx-runtime.production.min.js
 *
 * Copyright (c) Facebook, Inc. and its affiliates.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */var wm=h,Sm=Symbol.for("react.element"),bm=Symbol.for("react.fragment"),km=Object.prototype.hasOwnProperty,Pm=wm.__SECRET_INTERNALS_DO_NOT_USE_OR_YOU_WILL_BE_FIRED.ReactCurrentOwner,Cm={key:!0,ref:!0,__self:!0,__source:!0};function $c(e,n,t){var r,o={},i=null,l=null;t!==void 0&&(i=""+t),n.key!==void 0&&(i=""+n.key),n.ref!==void 0&&(l=n.ref);for(r in n)km.call(n,r)&&!Cm.hasOwnProperty(r)&&(o[r]=n[r]);if(e&&e.defaultProps)for(r in n=e.defaultProps,n)o[r]===void 0&&(o[r]=n[r]);return{$$typeof:Sm,type:e,key:i,ref:l,props:o,_owner:Pm.current}}vi.Fragment=bm;vi.jsx=$c;vi.jsxs=$c;Sc.exports=vi;var f=Sc.exports,Ec={exports:{}},Je={},Nc={exports:{}},jc={};/**
 * @license React
 * scheduler.production.min.js
 *
 * Copyright (c) Facebook, Inc. and its affiliates.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */(function(e){function n(T,L){var O=T.length;T.push(L);e:for(;0<O;){var Q=O-1>>>1,Z=T[Q];if(0<o(Z,L))T[Q]=L,T[O]=Z,O=Q;else break e}}function t(T){return T.length===0?null:T[0]}function r(T){if(T.length===0)return null;var L=T[0],O=T.pop();if(O!==L){T[0]=O;e:for(var Q=0,Z=T.length,Fe=Z>>>1;Q<Fe;){var be=2*(Q+1)-1,R=T[be],E=be+1,ee=T[E];if(0>o(R,O))E<Z&&0>o(ee,R)?(T[Q]=ee,T[E]=O,Q=E):(T[Q]=R,T[be]=O,Q=be);else if(E<Z&&0>o(ee,O))T[Q]=ee,T[E]=O,Q=E;else break e}}return L}function o(T,L){var O=T.sortIndex-L.sortIndex;return O!==0?O:T.id-L.id}if(typeof performance=="object"&&typeof performance.now=="function"){var i=performance;e.unstable_now=function(){return i.now()}}else{var l=Date,s=l.now();e.unstable_now=function(){return l.now()-s}}var a=[],u=[],d=1,c=null,p=3,y=!1,x=!1,w=!1,S=typeof setTimeout=="function"?setTimeout:null,g=typeof clearTimeout=="function"?clearTimeout:null,m=typeof setImmediate<"u"?setImmediate:null;typeof navigator<"u"&&navigator.scheduling!==void 0&&navigator.scheduling.isInputPending!==void 0&&navigator.scheduling.isInputPending.bind(navigator.scheduling);function v(T){for(var L=t(u);L!==null;){if(L.callback===null)r(u);else if(L.startTime<=T)r(u),L.sortIndex=L.expirationTime,n(a,L);else break;L=t(u)}}function b(T){if(w=!1,v(T),!x)if(t(a)!==null)x=!0,U(P);else{var L=t(u);L!==null&&le(b,L.startTime-T)}}function P(T,L){x=!1,w&&(w=!1,g($),$=-1),y=!0;var O=p;try{for(v(L),c=t(a);c!==null&&(!(c.expirationTime>L)||T&&!W());){var Q=c.callback;if(typeof Q=="function"){c.callback=null,p=c.priorityLevel;var Z=Q(c.expirationTime<=L);L=e.unstable_now(),typeof Z=="function"?c.callback=Z:c===t(a)&&r(a),v(L)}else r(a);c=t(a)}if(c!==null)var Fe=!0;else{var be=t(u);be!==null&&le(b,be.startTime-L),Fe=!1}return Fe}finally{c=null,p=O,y=!1}}var I=!1,_=null,$=-1,A=5,j=-1;function W(){return!(e.unstable_now()-j<A)}function oe(){if(_!==null){var T=e.unstable_now();j=T;var L=!0;try{L=_(!0,T)}finally{L?K():(I=!1,_=null)}}else I=!1}var K;if(typeof m=="function")K=function(){m(oe)};else if(typeof MessageChannel<"u"){var F=new MessageChannel,B=F.port2;F.port1.onmessage=oe,K=function(){B.postMessage(null)}}else K=function(){S(oe,0)};function U(T){_=T,I||(I=!0,K())}function le(T,L){$=S(function(){T(e.unstable_now())},L)}e.unstable_IdlePriority=5,e.unstable_ImmediatePriority=1,e.unstable_LowPriority=4,e.unstable_NormalPriority=3,e.unstable_Profiling=null,e.unstable_UserBlockingPriority=2,e.unstable_cancelCallback=function(T){T.callback=null},e.unstable_continueExecution=function(){x||y||(x=!0,U(P))},e.unstable_forceFrameRate=function(T){0>T||125<T?console.error("forceFrameRate takes a positive int between 0 and 125, forcing frame rates higher than 125 fps is not supported"):A=0<T?Math.floor(1e3/T):5},e.unstable_getCurrentPriorityLevel=function(){return p},e.unstable_getFirstCallbackNode=function(){return t(a)},e.unstable_next=function(T){switch(p){case 1:case 2:case 3:var L=3;break;default:L=p}var O=p;p=L;try{return T()}finally{p=O}},e.unstable_pauseExecution=function(){},e.unstable_requestPaint=function(){},e.unstable_runWithPriority=function(T,L){switch(T){case 1:case 2:case 3:case 4:case 5:break;default:T=3}var O=p;p=T;try{return L()}finally{p=O}},e.unstable_scheduleCallback=function(T,L,O){var Q=e.unstable_now();switch(typeof O=="object"&&O!==null?(O=O.delay,O=typeof O=="number"&&0<O?Q+O:Q):O=Q,T){case 1:var Z=-1;break;case 2:Z=250;break;case 5:Z=1073741823;break;case 4:Z=1e4;break;default:Z=5e3}return Z=O+Z,T={id:d++,callback:L,priorityLevel:T,startTime:O,expirationTime:Z,sortIndex:-1},O>Q?(T.sortIndex=O,n(u,T),t(a)===null&&T===t(u)&&(w?(g($),$=-1):w=!0,le(b,O-Q))):(T.sortIndex=Z,n(a,T),x||y||(x=!0,U(P))),T},e.unstable_shouldYield=W,e.unstable_wrapCallback=function(T){var L=p;return function(){var O=p;p=L;try{return T.apply(this,arguments)}finally{p=O}}}})(jc);Nc.exports=jc;var _m=Nc.exports;/**
 * @license React
 * react-dom.production.min.js
 *
 * Copyright (c) Facebook, Inc. and its affiliates.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */var Tm=h,Xe=_m;function k(e){for(var n="https://reactjs.org/docs/error-decoder.html?invariant="+e,t=1;t<arguments.length;t++)n+="&args[]="+encodeURIComponent(arguments[t]);return"Minified React error #"+e+"; visit "+n+" for the full message or use the non-minified dev environment for full errors and additional helpful warnings."}var Lc=new Set,zr={};function Rt(e,n){er(e,n),er(e+"Capture",n)}function er(e,n){for(zr[e]=n,e=0;e<n.length;e++)Lc.add(n[e])}var In=!(typeof window>"u"||typeof window.document>"u"||typeof window.document.createElement>"u"),yl=Object.prototype.hasOwnProperty,Rm=/^[:A-Z_a-z\u00C0-\u00D6\u00D8-\u00F6\u00F8-\u02FF\u0370-\u037D\u037F-\u1FFF\u200C-\u200D\u2070-\u218F\u2C00-\u2FEF\u3001-\uD7FF\uF900-\uFDCF\uFDF0-\uFFFD][:A-Z_a-z\u00C0-\u00D6\u00D8-\u00F6\u00F8-\u02FF\u0370-\u037D\u037F-\u1FFF\u200C-\u200D\u2070-\u218F\u2C00-\u2FEF\u3001-\uD7FF\uF900-\uFDCF\uFDF0-\uFFFD\-.0-9\u00B7\u0300-\u036F\u203F-\u2040]*$/,Aa={},Wa={};function Mm(e){return yl.call(Wa,e)?!0:yl.call(Aa,e)?!1:Rm.test(e)?Wa[e]=!0:(Aa[e]=!0,!1)}function Im(e,n,t,r){if(t!==null&&t.type===0)return!1;switch(typeof n){case"function":case"symbol":return!0;case"boolean":return r?!1:t!==null?!t.acceptsBooleans:(e=e.toLowerCase().slice(0,5),e!=="data-"&&e!=="aria-");default:return!1}}function $m(e,n,t,r){if(n===null||typeof n>"u"||Im(e,n,t,r))return!0;if(r)return!1;if(t!==null)switch(t.type){case 3:return!n;case 4:return n===!1;case 5:return isNaN(n);case 6:return isNaN(n)||1>n}return!1}function He(e,n,t,r,o,i,l){this.acceptsBooleans=n===2||n===3||n===4,this.attributeName=r,this.attributeNamespace=o,this.mustUseProperty=t,this.propertyName=e,this.type=n,this.sanitizeURL=i,this.removeEmptyString=l}var $e={};"children dangerouslySetInnerHTML defaultValue defaultChecked innerHTML suppressContentEditableWarning suppressHydrationWarning style".split(" ").forEach(function(e){$e[e]=new He(e,0,!1,e,null,!1,!1)});[["acceptCharset","accept-charset"],["className","class"],["htmlFor","for"],["httpEquiv","http-equiv"]].forEach(function(e){var n=e[0];$e[n]=new He(n,1,!1,e[1],null,!1,!1)});["contentEditable","draggable","spellCheck","value"].forEach(function(e){$e[e]=new He(e,2,!1,e.toLowerCase(),null,!1,!1)});["autoReverse","externalResourcesRequired","focusable","preserveAlpha"].forEach(function(e){$e[e]=new He(e,2,!1,e,null,!1,!1)});"allowFullScreen async autoFocus autoPlay controls default defer disabled disablePictureInPicture disableRemotePlayback formNoValidate hidden loop noModule noValidate open playsInline readOnly required reversed scoped seamless itemScope".split(" ").forEach(function(e){$e[e]=new He(e,3,!1,e.toLowerCase(),null,!1,!1)});["checked","multiple","muted","selected"].forEach(function(e){$e[e]=new He(e,3,!0,e,null,!1,!1)});["capture","download"].forEach(function(e){$e[e]=new He(e,4,!1,e,null,!1,!1)});["cols","rows","size","span"].forEach(function(e){$e[e]=new He(e,6,!1,e,null,!1,!1)});["rowSpan","start"].forEach(function(e){$e[e]=new He(e,5,!1,e.toLowerCase(),null,!1,!1)});var ws=/[\-:]([a-z])/g;function Ss(e){return e[1].toUpperCase()}"accent-height alignment-baseline arabic-form baseline-shift cap-height clip-path clip-rule color-interpolation color-interpolation-filters color-profile color-rendering dominant-baseline enable-background fill-opacity fill-rule flood-color flood-opacity font-family font-size font-size-adjust font-stretch font-style font-variant font-weight glyph-name glyph-orientation-horizontal glyph-orientation-vertical horiz-adv-x horiz-origin-x image-rendering letter-spacing lighting-color marker-end marker-mid marker-start overline-position overline-thickness paint-order panose-1 pointer-events rendering-intent shape-rendering stop-color stop-opacity strikethrough-position strikethrough-thickness stroke-dasharray stroke-dashoffset stroke-linecap stroke-linejoin stroke-miterlimit stroke-opacity stroke-width text-anchor text-decoration text-rendering underline-position underline-thickness unicode-bidi unicode-range units-per-em v-alphabetic v-hanging v-ideographic v-mathematical vector-effect vert-adv-y vert-origin-x vert-origin-y word-spacing writing-mode xmlns:xlink x-height".split(" ").forEach(function(e){var n=e.replace(ws,Ss);$e[n]=new He(n,1,!1,e,null,!1,!1)});"xlink:actuate xlink:arcrole xlink:role xlink:show xlink:title xlink:type".split(" ").forEach(function(e){var n=e.replace(ws,Ss);$e[n]=new He(n,1,!1,e,"http://www.w3.org/1999/xlink",!1,!1)});["xml:base","xml:lang","xml:space"].forEach(function(e){var n=e.replace(ws,Ss);$e[n]=new He(n,1,!1,e,"http://www.w3.org/XML/1998/namespace",!1,!1)});["tabIndex","crossOrigin"].forEach(function(e){$e[e]=new He(e,1,!1,e.toLowerCase(),null,!1,!1)});$e.xlinkHref=new He("xlinkHref",1,!1,"xlink:href","http://www.w3.org/1999/xlink",!0,!1);["src","href","action","formAction"].forEach(function(e){$e[e]=new He(e,1,!1,e.toLowerCase(),null,!0,!0)});function bs(e,n,t,r){var o=$e.hasOwnProperty(n)?$e[n]:null;(o!==null?o.type!==0:r||!(2<n.length)||n[0]!=="o"&&n[0]!=="O"||n[1]!=="n"&&n[1]!=="N")&&($m(n,t,o,r)&&(t=null),r||o===null?Mm(n)&&(t===null?e.removeAttribute(n):e.setAttribute(n,""+t)):o.mustUseProperty?e[o.propertyName]=t===null?o.type===3?!1:"":t:(n=o.attributeName,r=o.attributeNamespace,t===null?e.removeAttribute(n):(o=o.type,t=o===3||o===4&&t===!0?"":""+t,r?e.setAttributeNS(r,n,t):e.setAttribute(n,t))))}var jn=Tm.__SECRET_INTERNALS_DO_NOT_USE_OR_YOU_WILL_BE_FIRED,mo=Symbol.for("react.element"),Ot=Symbol.for("react.portal"),Dt=Symbol.for("react.fragment"),ks=Symbol.for("react.strict_mode"),vl=Symbol.for("react.profiler"),Oc=Symbol.for("react.provider"),Dc=Symbol.for("react.context"),Ps=Symbol.for("react.forward_ref"),xl=Symbol.for("react.suspense"),wl=Symbol.for("react.suspense_list"),Cs=Symbol.for("react.memo"),Hn=Symbol.for("react.lazy"),zc=Symbol.for("react.offscreen"),Ha=Symbol.iterator;function mr(e){return e===null||typeof e!="object"?null:(e=Ha&&e[Ha]||e["@@iterator"],typeof e=="function"?e:null)}var he=Object.assign,Fi;function kr(e){if(Fi===void 0)try{throw Error()}catch(t){var n=t.stack.trim().match(/\n( *(at )?)/);Fi=n&&n[1]||""}return`
`+Fi+e}var Bi=!1;function Ui(e,n){if(!e||Bi)return"";Bi=!0;var t=Error.prepareStackTrace;Error.prepareStackTrace=void 0;try{if(n)if(n=function(){throw Error()},Object.defineProperty(n.prototype,"props",{set:function(){throw Error()}}),typeof Reflect=="object"&&Reflect.construct){try{Reflect.construct(n,[])}catch(u){var r=u}Reflect.construct(e,[],n)}else{try{n.call()}catch(u){r=u}e.call(n.prototype)}else{try{throw Error()}catch(u){r=u}e()}}catch(u){if(u&&r&&typeof u.stack=="string"){for(var o=u.stack.split(`
`),i=r.stack.split(`
`),l=o.length-1,s=i.length-1;1<=l&&0<=s&&o[l]!==i[s];)s--;for(;1<=l&&0<=s;l--,s--)if(o[l]!==i[s]){if(l!==1||s!==1)do if(l--,s--,0>s||o[l]!==i[s]){var a=`
`+o[l].replace(" at new "," at ");return e.displayName&&a.includes("<anonymous>")&&(a=a.replace("<anonymous>",e.displayName)),a}while(1<=l&&0<=s);break}}}finally{Bi=!1,Error.prepareStackTrace=t}return(e=e?e.displayName||e.name:"")?kr(e):""}function Em(e){switch(e.tag){case 5:return kr(e.type);case 16:return kr("Lazy");case 13:return kr("Suspense");case 19:return kr("SuspenseList");case 0:case 2:case 15:return e=Ui(e.type,!1),e;case 11:return e=Ui(e.type.render,!1),e;case 1:return e=Ui(e.type,!0),e;default:return""}}function Sl(e){if(e==null)return null;if(typeof e=="function")return e.displayName||e.name||null;if(typeof e=="string")return e;switch(e){case Dt:return"Fragment";case Ot:return"Portal";case vl:return"Profiler";case ks:return"StrictMode";case xl:return"Suspense";case wl:return"SuspenseList"}if(typeof e=="object")switch(e.$$typeof){case Dc:return(e.displayName||"Context")+".Consumer";case Oc:return(e._context.displayName||"Context")+".Provider";case Ps:var n=e.render;return e=e.displayName,e||(e=n.displayName||n.name||"",e=e!==""?"ForwardRef("+e+")":"ForwardRef"),e;case Cs:return n=e.displayName||null,n!==null?n:Sl(e.type)||"Memo";case Hn:n=e._payload,e=e._init;try{return Sl(e(n))}catch{}}return null}function Nm(e){var n=e.type;switch(e.tag){case 24:return"Cache";case 9:return(n.displayName||"Context")+".Consumer";case 10:return(n._context.displayName||"Context")+".Provider";case 18:return"DehydratedFragment";case 11:return e=n.render,e=e.displayName||e.name||"",n.displayName||(e!==""?"ForwardRef("+e+")":"ForwardRef");case 7:return"Fragment";case 5:return n;case 4:return"Portal";case 3:return"Root";case 6:return"Text";case 16:return Sl(n);case 8:return n===ks?"StrictMode":"Mode";case 22:return"Offscreen";case 12:return"Profiler";case 21:return"Scope";case 13:return"Suspense";case 19:return"SuspenseList";case 25:return"TracingMarker";case 1:case 0:case 17:case 2:case 14:case 15:if(typeof n=="function")return n.displayName||n.name||null;if(typeof n=="string")return n}return null}function rt(e){switch(typeof e){case"boolean":case"number":case"string":case"undefined":return e;case"object":return e;default:return""}}function Ac(e){var n=e.type;return(e=e.nodeName)&&e.toLowerCase()==="input"&&(n==="checkbox"||n==="radio")}function jm(e){var n=Ac(e)?"checked":"value",t=Object.getOwnPropertyDescriptor(e.constructor.prototype,n),r=""+e[n];if(!e.hasOwnProperty(n)&&typeof t<"u"&&typeof t.get=="function"&&typeof t.set=="function"){var o=t.get,i=t.set;return Object.defineProperty(e,n,{configurable:!0,get:function(){return o.call(this)},set:function(l){r=""+l,i.call(this,l)}}),Object.defineProperty(e,n,{enumerable:t.enumerable}),{getValue:function(){return r},setValue:function(l){r=""+l},stopTracking:function(){e._valueTracker=null,delete e[n]}}}}function go(e){e._valueTracker||(e._valueTracker=jm(e))}function Wc(e){if(!e)return!1;var n=e._valueTracker;if(!n)return!0;var t=n.getValue(),r="";return e&&(r=Ac(e)?e.checked?"true":"false":e.value),e=r,e!==t?(n.setValue(e),!0):!1}function Ko(e){if(e=e||(typeof document<"u"?document:void 0),typeof e>"u")return null;try{return e.activeElement||e.body}catch{return e.body}}function bl(e,n){var t=n.checked;return he({},n,{defaultChecked:void 0,defaultValue:void 0,value:void 0,checked:t??e._wrapperState.initialChecked})}function Fa(e,n){var t=n.defaultValue==null?"":n.defaultValue,r=n.checked!=null?n.checked:n.defaultChecked;t=rt(n.value!=null?n.value:t),e._wrapperState={initialChecked:r,initialValue:t,controlled:n.type==="checkbox"||n.type==="radio"?n.checked!=null:n.value!=null}}function Hc(e,n){n=n.checked,n!=null&&bs(e,"checked",n,!1)}function kl(e,n){Hc(e,n);var t=rt(n.value),r=n.type;if(t!=null)r==="number"?(t===0&&e.value===""||e.value!=t)&&(e.value=""+t):e.value!==""+t&&(e.value=""+t);else if(r==="submit"||r==="reset"){e.removeAttribute("value");return}n.hasOwnProperty("value")?Pl(e,n.type,t):n.hasOwnProperty("defaultValue")&&Pl(e,n.type,rt(n.defaultValue)),n.checked==null&&n.defaultChecked!=null&&(e.defaultChecked=!!n.defaultChecked)}function Ba(e,n,t){if(n.hasOwnProperty("value")||n.hasOwnProperty("defaultValue")){var r=n.type;if(!(r!=="submit"&&r!=="reset"||n.value!==void 0&&n.value!==null))return;n=""+e._wrapperState.initialValue,t||n===e.value||(e.value=n),e.defaultValue=n}t=e.name,t!==""&&(e.name=""),e.defaultChecked=!!e._wrapperState.initialChecked,t!==""&&(e.name=t)}function Pl(e,n,t){(n!=="number"||Ko(e.ownerDocument)!==e)&&(t==null?e.defaultValue=""+e._wrapperState.initialValue:e.defaultValue!==""+t&&(e.defaultValue=""+t))}var Pr=Array.isArray;function Qt(e,n,t,r){if(e=e.options,n){n={};for(var o=0;o<t.length;o++)n["$"+t[o]]=!0;for(t=0;t<e.length;t++)o=n.hasOwnProperty("$"+e[t].value),e[t].selected!==o&&(e[t].selected=o),o&&r&&(e[t].defaultSelected=!0)}else{for(t=""+rt(t),n=null,o=0;o<e.length;o++){if(e[o].value===t){e[o].selected=!0,r&&(e[o].defaultSelected=!0);return}n!==null||e[o].disabled||(n=e[o])}n!==null&&(n.selected=!0)}}function Cl(e,n){if(n.dangerouslySetInnerHTML!=null)throw Error(k(91));return he({},n,{value:void 0,defaultValue:void 0,children:""+e._wrapperState.initialValue})}function Ua(e,n){var t=n.value;if(t==null){if(t=n.children,n=n.defaultValue,t!=null){if(n!=null)throw Error(k(92));if(Pr(t)){if(1<t.length)throw Error(k(93));t=t[0]}n=t}n==null&&(n=""),t=n}e._wrapperState={initialValue:rt(t)}}function Fc(e,n){var t=rt(n.value),r=rt(n.defaultValue);t!=null&&(t=""+t,t!==e.value&&(e.value=t),n.defaultValue==null&&e.defaultValue!==t&&(e.defaultValue=t)),r!=null&&(e.defaultValue=""+r)}function Ga(e){var n=e.textContent;n===e._wrapperState.initialValue&&n!==""&&n!==null&&(e.value=n)}function Bc(e){switch(e){case"svg":return"http://www.w3.org/2000/svg";case"math":return"http://www.w3.org/1998/Math/MathML";default:return"http://www.w3.org/1999/xhtml"}}function _l(e,n){return e==null||e==="http://www.w3.org/1999/xhtml"?Bc(n):e==="http://www.w3.org/2000/svg"&&n==="foreignObject"?"http://www.w3.org/1999/xhtml":e}var ho,Uc=function(e){return typeof MSApp<"u"&&MSApp.execUnsafeLocalFunction?function(n,t,r,o){MSApp.execUnsafeLocalFunction(function(){return e(n,t,r,o)})}:e}(function(e,n){if(e.namespaceURI!=="http://www.w3.org/2000/svg"||"innerHTML"in e)e.innerHTML=n;else{for(ho=ho||document.createElement("div"),ho.innerHTML="<svg>"+n.valueOf().toString()+"</svg>",n=ho.firstChild;e.firstChild;)e.removeChild(e.firstChild);for(;n.firstChild;)e.appendChild(n.firstChild)}});function Ar(e,n){if(n){var t=e.firstChild;if(t&&t===e.lastChild&&t.nodeType===3){t.nodeValue=n;return}}e.textContent=n}var Mr={animationIterationCount:!0,aspectRatio:!0,borderImageOutset:!0,borderImageSlice:!0,borderImageWidth:!0,boxFlex:!0,boxFlexGroup:!0,boxOrdinalGroup:!0,columnCount:!0,columns:!0,flex:!0,flexGrow:!0,flexPositive:!0,flexShrink:!0,flexNegative:!0,flexOrder:!0,gridArea:!0,gridRow:!0,gridRowEnd:!0,gridRowSpan:!0,gridRowStart:!0,gridColumn:!0,gridColumnEnd:!0,gridColumnSpan:!0,gridColumnStart:!0,fontWeight:!0,lineClamp:!0,lineHeight:!0,opacity:!0,order:!0,orphans:!0,tabSize:!0,widows:!0,zIndex:!0,zoom:!0,fillOpacity:!0,floodOpacity:!0,stopOpacity:!0,strokeDasharray:!0,strokeDashoffset:!0,strokeMiterlimit:!0,strokeOpacity:!0,strokeWidth:!0},Lm=["Webkit","ms","Moz","O"];Object.keys(Mr).forEach(function(e){Lm.forEach(function(n){n=n+e.charAt(0).toUpperCase()+e.substring(1),Mr[n]=Mr[e]})});function Gc(e,n,t){return n==null||typeof n=="boolean"||n===""?"":t||typeof n!="number"||n===0||Mr.hasOwnProperty(e)&&Mr[e]?(""+n).trim():n+"px"}function Vc(e,n){e=e.style;for(var t in n)if(n.hasOwnProperty(t)){var r=t.indexOf("--")===0,o=Gc(t,n[t],r);t==="float"&&(t="cssFloat"),r?e.setProperty(t,o):e[t]=o}}var Om=he({menuitem:!0},{area:!0,base:!0,br:!0,col:!0,embed:!0,hr:!0,img:!0,input:!0,keygen:!0,link:!0,meta:!0,param:!0,source:!0,track:!0,wbr:!0});function Tl(e,n){if(n){if(Om[e]&&(n.children!=null||n.dangerouslySetInnerHTML!=null))throw Error(k(137,e));if(n.dangerouslySetInnerHTML!=null){if(n.children!=null)throw Error(k(60));if(typeof n.dangerouslySetInnerHTML!="object"||!("__html"in n.dangerouslySetInnerHTML))throw Error(k(61))}if(n.style!=null&&typeof n.style!="object")throw Error(k(62))}}function Rl(e,n){if(e.indexOf("-")===-1)return typeof n.is=="string";switch(e){case"annotation-xml":case"color-profile":case"font-face":case"font-face-src":case"font-face-uri":case"font-face-format":case"font-face-name":case"missing-glyph":return!1;default:return!0}}var Ml=null;function _s(e){return e=e.target||e.srcElement||window,e.correspondingUseElement&&(e=e.correspondingUseElement),e.nodeType===3?e.parentNode:e}var Il=null,Yt=null,qt=null;function Va(e){if(e=lo(e)){if(typeof Il!="function")throw Error(k(280));var n=e.stateNode;n&&(n=ki(n),Il(e.stateNode,e.type,n))}}function Kc(e){Yt?qt?qt.push(e):qt=[e]:Yt=e}function Qc(){if(Yt){var e=Yt,n=qt;if(qt=Yt=null,Va(e),n)for(e=0;e<n.length;e++)Va(n[e])}}function Yc(e,n){return e(n)}function qc(){}var Gi=!1;function Xc(e,n,t){if(Gi)return e(n,t);Gi=!0;try{return Yc(e,n,t)}finally{Gi=!1,(Yt!==null||qt!==null)&&(qc(),Qc())}}function Wr(e,n){var t=e.stateNode;if(t===null)return null;var r=ki(t);if(r===null)return null;t=r[n];e:switch(n){case"onClick":case"onClickCapture":case"onDoubleClick":case"onDoubleClickCapture":case"onMouseDown":case"onMouseDownCapture":case"onMouseMove":case"onMouseMoveCapture":case"onMouseUp":case"onMouseUpCapture":case"onMouseEnter":(r=!r.disabled)||(e=e.type,r=!(e==="button"||e==="input"||e==="select"||e==="textarea")),e=!r;break e;default:e=!1}if(e)return null;if(t&&typeof t!="function")throw Error(k(231,n,typeof t));return t}var $l=!1;if(In)try{var gr={};Object.defineProperty(gr,"passive",{get:function(){$l=!0}}),window.addEventListener("test",gr,gr),window.removeEventListener("test",gr,gr)}catch{$l=!1}function Dm(e,n,t,r,o,i,l,s,a){var u=Array.prototype.slice.call(arguments,3);try{n.apply(t,u)}catch(d){this.onError(d)}}var Ir=!1,Qo=null,Yo=!1,El=null,zm={onError:function(e){Ir=!0,Qo=e}};function Am(e,n,t,r,o,i,l,s,a){Ir=!1,Qo=null,Dm.apply(zm,arguments)}function Wm(e,n,t,r,o,i,l,s,a){if(Am.apply(this,arguments),Ir){if(Ir){var u=Qo;Ir=!1,Qo=null}else throw Error(k(198));Yo||(Yo=!0,El=u)}}function Mt(e){var n=e,t=e;if(e.alternate)for(;n.return;)n=n.return;else{e=n;do n=e,n.flags&4098&&(t=n.return),e=n.return;while(e)}return n.tag===3?t:null}function Jc(e){if(e.tag===13){var n=e.memoizedState;if(n===null&&(e=e.alternate,e!==null&&(n=e.memoizedState)),n!==null)return n.dehydrated}return null}function Ka(e){if(Mt(e)!==e)throw Error(k(188))}function Hm(e){var n=e.alternate;if(!n){if(n=Mt(e),n===null)throw Error(k(188));return n!==e?null:e}for(var t=e,r=n;;){var o=t.return;if(o===null)break;var i=o.alternate;if(i===null){if(r=o.return,r!==null){t=r;continue}break}if(o.child===i.child){for(i=o.child;i;){if(i===t)return Ka(o),e;if(i===r)return Ka(o),n;i=i.sibling}throw Error(k(188))}if(t.return!==r.return)t=o,r=i;else{for(var l=!1,s=o.child;s;){if(s===t){l=!0,t=o,r=i;break}if(s===r){l=!0,r=o,t=i;break}s=s.sibling}if(!l){for(s=i.child;s;){if(s===t){l=!0,t=i,r=o;break}if(s===r){l=!0,r=i,t=o;break}s=s.sibling}if(!l)throw Error(k(189))}}if(t.alternate!==r)throw Error(k(190))}if(t.tag!==3)throw Error(k(188));return t.stateNode.current===t?e:n}function Zc(e){return e=Hm(e),e!==null?ed(e):null}function ed(e){if(e.tag===5||e.tag===6)return e;for(e=e.child;e!==null;){var n=ed(e);if(n!==null)return n;e=e.sibling}return null}var nd=Xe.unstable_scheduleCallback,Qa=Xe.unstable_cancelCallback,Fm=Xe.unstable_shouldYield,Bm=Xe.unstable_requestPaint,xe=Xe.unstable_now,Um=Xe.unstable_getCurrentPriorityLevel,Ts=Xe.unstable_ImmediatePriority,td=Xe.unstable_UserBlockingPriority,qo=Xe.unstable_NormalPriority,Gm=Xe.unstable_LowPriority,rd=Xe.unstable_IdlePriority,xi=null,wn=null;function Vm(e){if(wn&&typeof wn.onCommitFiberRoot=="function")try{wn.onCommitFiberRoot(xi,e,void 0,(e.current.flags&128)===128)}catch{}}var mn=Math.clz32?Math.clz32:Ym,Km=Math.log,Qm=Math.LN2;function Ym(e){return e>>>=0,e===0?32:31-(Km(e)/Qm|0)|0}var yo=64,vo=4194304;function Cr(e){switch(e&-e){case 1:return 1;case 2:return 2;case 4:return 4;case 8:return 8;case 16:return 16;case 32:return 32;case 64:case 128:case 256:case 512:case 1024:case 2048:case 4096:case 8192:case 16384:case 32768:case 65536:case 131072:case 262144:case 524288:case 1048576:case 2097152:return e&4194240;case 4194304:case 8388608:case 16777216:case 33554432:case 67108864:return e&130023424;case 134217728:return 134217728;case 268435456:return 268435456;case 536870912:return 536870912;case 1073741824:return 1073741824;default:return e}}function Xo(e,n){var t=e.pendingLanes;if(t===0)return 0;var r=0,o=e.suspendedLanes,i=e.pingedLanes,l=t&268435455;if(l!==0){var s=l&~o;s!==0?r=Cr(s):(i&=l,i!==0&&(r=Cr(i)))}else l=t&~o,l!==0?r=Cr(l):i!==0&&(r=Cr(i));if(r===0)return 0;if(n!==0&&n!==r&&!(n&o)&&(o=r&-r,i=n&-n,o>=i||o===16&&(i&4194240)!==0))return n;if(r&4&&(r|=t&16),n=e.entangledLanes,n!==0)for(e=e.entanglements,n&=r;0<n;)t=31-mn(n),o=1<<t,r|=e[t],n&=~o;return r}function qm(e,n){switch(e){case 1:case 2:case 4:return n+250;case 8:case 16:case 32:case 64:case 128:case 256:case 512:case 1024:case 2048:case 4096:case 8192:case 16384:case 32768:case 65536:case 131072:case 262144:case 524288:case 1048576:case 2097152:return n+5e3;case 4194304:case 8388608:case 16777216:case 33554432:case 67108864:return-1;case 134217728:case 268435456:case 536870912:case 1073741824:return-1;default:return-1}}function Xm(e,n){for(var t=e.suspendedLanes,r=e.pingedLanes,o=e.expirationTimes,i=e.pendingLanes;0<i;){var l=31-mn(i),s=1<<l,a=o[l];a===-1?(!(s&t)||s&r)&&(o[l]=qm(s,n)):a<=n&&(e.expiredLanes|=s),i&=~s}}function Nl(e){return e=e.pendingLanes&-1073741825,e!==0?e:e&1073741824?1073741824:0}function od(){var e=yo;return yo<<=1,!(yo&4194240)&&(yo=64),e}function Vi(e){for(var n=[],t=0;31>t;t++)n.push(e);return n}function oo(e,n,t){e.pendingLanes|=n,n!==536870912&&(e.suspendedLanes=0,e.pingedLanes=0),e=e.eventTimes,n=31-mn(n),e[n]=t}function Jm(e,n){var t=e.pendingLanes&~n;e.pendingLanes=n,e.suspendedLanes=0,e.pingedLanes=0,e.expiredLanes&=n,e.mutableReadLanes&=n,e.entangledLanes&=n,n=e.entanglements;var r=e.eventTimes;for(e=e.expirationTimes;0<t;){var o=31-mn(t),i=1<<o;n[o]=0,r[o]=-1,e[o]=-1,t&=~i}}function Rs(e,n){var t=e.entangledLanes|=n;for(e=e.entanglements;t;){var r=31-mn(t),o=1<<r;o&n|e[r]&n&&(e[r]|=n),t&=~o}}var re=0;function id(e){return e&=-e,1<e?4<e?e&268435455?16:536870912:4:1}var ld,Ms,sd,ad,ud,jl=!1,xo=[],Qn=null,Yn=null,qn=null,Hr=new Map,Fr=new Map,Bn=[],Zm="mousedown mouseup touchcancel touchend touchstart auxclick dblclick pointercancel pointerdown pointerup dragend dragstart drop compositionend compositionstart keydown keypress keyup input textInput copy cut paste click change contextmenu reset submit".split(" ");function Ya(e,n){switch(e){case"focusin":case"focusout":Qn=null;break;case"dragenter":case"dragleave":Yn=null;break;case"mouseover":case"mouseout":qn=null;break;case"pointerover":case"pointerout":Hr.delete(n.pointerId);break;case"gotpointercapture":case"lostpointercapture":Fr.delete(n.pointerId)}}function hr(e,n,t,r,o,i){return e===null||e.nativeEvent!==i?(e={blockedOn:n,domEventName:t,eventSystemFlags:r,nativeEvent:i,targetContainers:[o]},n!==null&&(n=lo(n),n!==null&&Ms(n)),e):(e.eventSystemFlags|=r,n=e.targetContainers,o!==null&&n.indexOf(o)===-1&&n.push(o),e)}function eg(e,n,t,r,o){switch(n){case"focusin":return Qn=hr(Qn,e,n,t,r,o),!0;case"dragenter":return Yn=hr(Yn,e,n,t,r,o),!0;case"mouseover":return qn=hr(qn,e,n,t,r,o),!0;case"pointerover":var i=o.pointerId;return Hr.set(i,hr(Hr.get(i)||null,e,n,t,r,o)),!0;case"gotpointercapture":return i=o.pointerId,Fr.set(i,hr(Fr.get(i)||null,e,n,t,r,o)),!0}return!1}function cd(e){var n=yt(e.target);if(n!==null){var t=Mt(n);if(t!==null){if(n=t.tag,n===13){if(n=Jc(t),n!==null){e.blockedOn=n,ud(e.priority,function(){sd(t)});return}}else if(n===3&&t.stateNode.current.memoizedState.isDehydrated){e.blockedOn=t.tag===3?t.stateNode.containerInfo:null;return}}}e.blockedOn=null}function Oo(e){if(e.blockedOn!==null)return!1;for(var n=e.targetContainers;0<n.length;){var t=Ll(e.domEventName,e.eventSystemFlags,n[0],e.nativeEvent);if(t===null){t=e.nativeEvent;var r=new t.constructor(t.type,t);Ml=r,t.target.dispatchEvent(r),Ml=null}else return n=lo(t),n!==null&&Ms(n),e.blockedOn=t,!1;n.shift()}return!0}function qa(e,n,t){Oo(e)&&t.delete(n)}function ng(){jl=!1,Qn!==null&&Oo(Qn)&&(Qn=null),Yn!==null&&Oo(Yn)&&(Yn=null),qn!==null&&Oo(qn)&&(qn=null),Hr.forEach(qa),Fr.forEach(qa)}function yr(e,n){e.blockedOn===n&&(e.blockedOn=null,jl||(jl=!0,Xe.unstable_scheduleCallback(Xe.unstable_NormalPriority,ng)))}function Br(e){function n(o){return yr(o,e)}if(0<xo.length){yr(xo[0],e);for(var t=1;t<xo.length;t++){var r=xo[t];r.blockedOn===e&&(r.blockedOn=null)}}for(Qn!==null&&yr(Qn,e),Yn!==null&&yr(Yn,e),qn!==null&&yr(qn,e),Hr.forEach(n),Fr.forEach(n),t=0;t<Bn.length;t++)r=Bn[t],r.blockedOn===e&&(r.blockedOn=null);for(;0<Bn.length&&(t=Bn[0],t.blockedOn===null);)cd(t),t.blockedOn===null&&Bn.shift()}var Xt=jn.ReactCurrentBatchConfig,Jo=!0;function tg(e,n,t,r){var o=re,i=Xt.transition;Xt.transition=null;try{re=1,Is(e,n,t,r)}finally{re=o,Xt.transition=i}}function rg(e,n,t,r){var o=re,i=Xt.transition;Xt.transition=null;try{re=4,Is(e,n,t,r)}finally{re=o,Xt.transition=i}}function Is(e,n,t,r){if(Jo){var o=Ll(e,n,t,r);if(o===null)tl(e,n,r,Zo,t),Ya(e,r);else if(eg(o,e,n,t,r))r.stopPropagation();else if(Ya(e,r),n&4&&-1<Zm.indexOf(e)){for(;o!==null;){var i=lo(o);if(i!==null&&ld(i),i=Ll(e,n,t,r),i===null&&tl(e,n,r,Zo,t),i===o)break;o=i}o!==null&&r.stopPropagation()}else tl(e,n,r,null,t)}}var Zo=null;function Ll(e,n,t,r){if(Zo=null,e=_s(r),e=yt(e),e!==null)if(n=Mt(e),n===null)e=null;else if(t=n.tag,t===13){if(e=Jc(n),e!==null)return e;e=null}else if(t===3){if(n.stateNode.current.memoizedState.isDehydrated)return n.tag===3?n.stateNode.containerInfo:null;e=null}else n!==e&&(e=null);return Zo=e,null}function dd(e){switch(e){case"cancel":case"click":case"close":case"contextmenu":case"copy":case"cut":case"auxclick":case"dblclick":case"dragend":case"dragstart":case"drop":case"focusin":case"focusout":case"input":case"invalid":case"keydown":case"keypress":case"keyup":case"mousedown":case"mouseup":case"paste":case"pause":case"play":case"pointercancel":case"pointerdown":case"pointerup":case"ratechange":case"reset":case"resize":case"seeked":case"submit":case"touchcancel":case"touchend":case"touchstart":case"volumechange":case"change":case"selectionchange":case"textInput":case"compositionstart":case"compositionend":case"compositionupdate":case"beforeblur":case"afterblur":case"beforeinput":case"blur":case"fullscreenchange":case"focus":case"hashchange":case"popstate":case"select":case"selectstart":return 1;case"drag":case"dragenter":case"dragexit":case"dragleave":case"dragover":case"mousemove":case"mouseout":case"mouseover":case"pointermove":case"pointerout":case"pointerover":case"scroll":case"toggle":case"touchmove":case"wheel":case"mouseenter":case"mouseleave":case"pointerenter":case"pointerleave":return 4;case"message":switch(Um()){case Ts:return 1;case td:return 4;case qo:case Gm:return 16;case rd:return 536870912;default:return 16}default:return 16}}var Gn=null,$s=null,Do=null;function pd(){if(Do)return Do;var e,n=$s,t=n.length,r,o="value"in Gn?Gn.value:Gn.textContent,i=o.length;for(e=0;e<t&&n[e]===o[e];e++);var l=t-e;for(r=1;r<=l&&n[t-r]===o[i-r];r++);return Do=o.slice(e,1<r?1-r:void 0)}function zo(e){var n=e.keyCode;return"charCode"in e?(e=e.charCode,e===0&&n===13&&(e=13)):e=n,e===10&&(e=13),32<=e||e===13?e:0}function wo(){return!0}function Xa(){return!1}function Ze(e){function n(t,r,o,i,l){this._reactName=t,this._targetInst=o,this.type=r,this.nativeEvent=i,this.target=l,this.currentTarget=null;for(var s in e)e.hasOwnProperty(s)&&(t=e[s],this[s]=t?t(i):i[s]);return this.isDefaultPrevented=(i.defaultPrevented!=null?i.defaultPrevented:i.returnValue===!1)?wo:Xa,this.isPropagationStopped=Xa,this}return he(n.prototype,{preventDefault:function(){this.defaultPrevented=!0;var t=this.nativeEvent;t&&(t.preventDefault?t.preventDefault():typeof t.returnValue!="unknown"&&(t.returnValue=!1),this.isDefaultPrevented=wo)},stopPropagation:function(){var t=this.nativeEvent;t&&(t.stopPropagation?t.stopPropagation():typeof t.cancelBubble!="unknown"&&(t.cancelBubble=!0),this.isPropagationStopped=wo)},persist:function(){},isPersistent:wo}),n}var ar={eventPhase:0,bubbles:0,cancelable:0,timeStamp:function(e){return e.timeStamp||Date.now()},defaultPrevented:0,isTrusted:0},Es=Ze(ar),io=he({},ar,{view:0,detail:0}),og=Ze(io),Ki,Qi,vr,wi=he({},io,{screenX:0,screenY:0,clientX:0,clientY:0,pageX:0,pageY:0,ctrlKey:0,shiftKey:0,altKey:0,metaKey:0,getModifierState:Ns,button:0,buttons:0,relatedTarget:function(e){return e.relatedTarget===void 0?e.fromElement===e.srcElement?e.toElement:e.fromElement:e.relatedTarget},movementX:function(e){return"movementX"in e?e.movementX:(e!==vr&&(vr&&e.type==="mousemove"?(Ki=e.screenX-vr.screenX,Qi=e.screenY-vr.screenY):Qi=Ki=0,vr=e),Ki)},movementY:function(e){return"movementY"in e?e.movementY:Qi}}),Ja=Ze(wi),ig=he({},wi,{dataTransfer:0}),lg=Ze(ig),sg=he({},io,{relatedTarget:0}),Yi=Ze(sg),ag=he({},ar,{animationName:0,elapsedTime:0,pseudoElement:0}),ug=Ze(ag),cg=he({},ar,{clipboardData:function(e){return"clipboardData"in e?e.clipboardData:window.clipboardData}}),dg=Ze(cg),pg=he({},ar,{data:0}),Za=Ze(pg),fg={Esc:"Escape",Spacebar:" ",Left:"ArrowLeft",Up:"ArrowUp",Right:"ArrowRight",Down:"ArrowDown",Del:"Delete",Win:"OS",Menu:"ContextMenu",Apps:"ContextMenu",Scroll:"ScrollLock",MozPrintableKey:"Unidentified"},mg={8:"Backspace",9:"Tab",12:"Clear",13:"Enter",16:"Shift",17:"Control",18:"Alt",19:"Pause",20:"CapsLock",27:"Escape",32:" ",33:"PageUp",34:"PageDown",35:"End",36:"Home",37:"ArrowLeft",38:"ArrowUp",39:"ArrowRight",40:"ArrowDown",45:"Insert",46:"Delete",112:"F1",113:"F2",114:"F3",115:"F4",116:"F5",117:"F6",118:"F7",119:"F8",120:"F9",121:"F10",122:"F11",123:"F12",144:"NumLock",145:"ScrollLock",224:"Meta"},gg={Alt:"altKey",Control:"ctrlKey",Meta:"metaKey",Shift:"shiftKey"};function hg(e){var n=this.nativeEvent;return n.getModifierState?n.getModifierState(e):(e=gg[e])?!!n[e]:!1}function Ns(){return hg}var yg=he({},io,{key:function(e){if(e.key){var n=fg[e.key]||e.key;if(n!=="Unidentified")return n}return e.type==="keypress"?(e=zo(e),e===13?"Enter":String.fromCharCode(e)):e.type==="keydown"||e.type==="keyup"?mg[e.keyCode]||"Unidentified":""},code:0,location:0,ctrlKey:0,shiftKey:0,altKey:0,metaKey:0,repeat:0,locale:0,getModifierState:Ns,charCode:function(e){return e.type==="keypress"?zo(e):0},keyCode:function(e){return e.type==="keydown"||e.type==="keyup"?e.keyCode:0},which:function(e){return e.type==="keypress"?zo(e):e.type==="keydown"||e.type==="keyup"?e.keyCode:0}}),vg=Ze(yg),xg=he({},wi,{pointerId:0,width:0,height:0,pressure:0,tangentialPressure:0,tiltX:0,tiltY:0,twist:0,pointerType:0,isPrimary:0}),eu=Ze(xg),wg=he({},io,{touches:0,targetTouches:0,changedTouches:0,altKey:0,metaKey:0,ctrlKey:0,shiftKey:0,getModifierState:Ns}),Sg=Ze(wg),bg=he({},ar,{propertyName:0,elapsedTime:0,pseudoElement:0}),kg=Ze(bg),Pg=he({},wi,{deltaX:function(e){return"deltaX"in e?e.deltaX:"wheelDeltaX"in e?-e.wheelDeltaX:0},deltaY:function(e){return"deltaY"in e?e.deltaY:"wheelDeltaY"in e?-e.wheelDeltaY:"wheelDelta"in e?-e.wheelDelta:0},deltaZ:0,deltaMode:0}),Cg=Ze(Pg),_g=[9,13,27,32],js=In&&"CompositionEvent"in window,$r=null;In&&"documentMode"in document&&($r=document.documentMode);var Tg=In&&"TextEvent"in window&&!$r,fd=In&&(!js||$r&&8<$r&&11>=$r),nu=" ",tu=!1;function md(e,n){switch(e){case"keyup":return _g.indexOf(n.keyCode)!==-1;case"keydown":return n.keyCode!==229;case"keypress":case"mousedown":case"focusout":return!0;default:return!1}}function gd(e){return e=e.detail,typeof e=="object"&&"data"in e?e.data:null}var zt=!1;function Rg(e,n){switch(e){case"compositionend":return gd(n);case"keypress":return n.which!==32?null:(tu=!0,nu);case"textInput":return e=n.data,e===nu&&tu?null:e;default:return null}}function Mg(e,n){if(zt)return e==="compositionend"||!js&&md(e,n)?(e=pd(),Do=$s=Gn=null,zt=!1,e):null;switch(e){case"paste":return null;case"keypress":if(!(n.ctrlKey||n.altKey||n.metaKey)||n.ctrlKey&&n.altKey){if(n.char&&1<n.char.length)return n.char;if(n.which)return String.fromCharCode(n.which)}return null;case"compositionend":return fd&&n.locale!=="ko"?null:n.data;default:return null}}var Ig={color:!0,date:!0,datetime:!0,"datetime-local":!0,email:!0,month:!0,number:!0,password:!0,range:!0,search:!0,tel:!0,text:!0,time:!0,url:!0,week:!0};function ru(e){var n=e&&e.nodeName&&e.nodeName.toLowerCase();return n==="input"?!!Ig[e.type]:n==="textarea"}function hd(e,n,t,r){Kc(r),n=ei(n,"onChange"),0<n.length&&(t=new Es("onChange","change",null,t,r),e.push({event:t,listeners:n}))}var Er=null,Ur=null;function $g(e){Td(e,0)}function Si(e){var n=Ht(e);if(Wc(n))return e}function Eg(e,n){if(e==="change")return n}var yd=!1;if(In){var qi;if(In){var Xi="oninput"in document;if(!Xi){var ou=document.createElement("div");ou.setAttribute("oninput","return;"),Xi=typeof ou.oninput=="function"}qi=Xi}else qi=!1;yd=qi&&(!document.documentMode||9<document.documentMode)}function iu(){Er&&(Er.detachEvent("onpropertychange",vd),Ur=Er=null)}function vd(e){if(e.propertyName==="value"&&Si(Ur)){var n=[];hd(n,Ur,e,_s(e)),Xc($g,n)}}function Ng(e,n,t){e==="focusin"?(iu(),Er=n,Ur=t,Er.attachEvent("onpropertychange",vd)):e==="focusout"&&iu()}function jg(e){if(e==="selectionchange"||e==="keyup"||e==="keydown")return Si(Ur)}function Lg(e,n){if(e==="click")return Si(n)}function Og(e,n){if(e==="input"||e==="change")return Si(n)}function Dg(e,n){return e===n&&(e!==0||1/e===1/n)||e!==e&&n!==n}var hn=typeof Object.is=="function"?Object.is:Dg;function Gr(e,n){if(hn(e,n))return!0;if(typeof e!="object"||e===null||typeof n!="object"||n===null)return!1;var t=Object.keys(e),r=Object.keys(n);if(t.length!==r.length)return!1;for(r=0;r<t.length;r++){var o=t[r];if(!yl.call(n,o)||!hn(e[o],n[o]))return!1}return!0}function lu(e){for(;e&&e.firstChild;)e=e.firstChild;return e}function su(e,n){var t=lu(e);e=0;for(var r;t;){if(t.nodeType===3){if(r=e+t.textContent.length,e<=n&&r>=n)return{node:t,offset:n-e};e=r}e:{for(;t;){if(t.nextSibling){t=t.nextSibling;break e}t=t.parentNode}t=void 0}t=lu(t)}}function xd(e,n){return e&&n?e===n?!0:e&&e.nodeType===3?!1:n&&n.nodeType===3?xd(e,n.parentNode):"contains"in e?e.contains(n):e.compareDocumentPosition?!!(e.compareDocumentPosition(n)&16):!1:!1}function wd(){for(var e=window,n=Ko();n instanceof e.HTMLIFrameElement;){try{var t=typeof n.contentWindow.location.href=="string"}catch{t=!1}if(t)e=n.contentWindow;else break;n=Ko(e.document)}return n}function Ls(e){var n=e&&e.nodeName&&e.nodeName.toLowerCase();return n&&(n==="input"&&(e.type==="text"||e.type==="search"||e.type==="tel"||e.type==="url"||e.type==="password")||n==="textarea"||e.contentEditable==="true")}function zg(e){var n=wd(),t=e.focusedElem,r=e.selectionRange;if(n!==t&&t&&t.ownerDocument&&xd(t.ownerDocument.documentElement,t)){if(r!==null&&Ls(t)){if(n=r.start,e=r.end,e===void 0&&(e=n),"selectionStart"in t)t.selectionStart=n,t.selectionEnd=Math.min(e,t.value.length);else if(e=(n=t.ownerDocument||document)&&n.defaultView||window,e.getSelection){e=e.getSelection();var o=t.textContent.length,i=Math.min(r.start,o);r=r.end===void 0?i:Math.min(r.end,o),!e.extend&&i>r&&(o=r,r=i,i=o),o=su(t,i);var l=su(t,r);o&&l&&(e.rangeCount!==1||e.anchorNode!==o.node||e.anchorOffset!==o.offset||e.focusNode!==l.node||e.focusOffset!==l.offset)&&(n=n.createRange(),n.setStart(o.node,o.offset),e.removeAllRanges(),i>r?(e.addRange(n),e.extend(l.node,l.offset)):(n.setEnd(l.node,l.offset),e.addRange(n)))}}for(n=[],e=t;e=e.parentNode;)e.nodeType===1&&n.push({element:e,left:e.scrollLeft,top:e.scrollTop});for(typeof t.focus=="function"&&t.focus(),t=0;t<n.length;t++)e=n[t],e.element.scrollLeft=e.left,e.element.scrollTop=e.top}}var Ag=In&&"documentMode"in document&&11>=document.documentMode,At=null,Ol=null,Nr=null,Dl=!1;function au(e,n,t){var r=t.window===t?t.document:t.nodeType===9?t:t.ownerDocument;Dl||At==null||At!==Ko(r)||(r=At,"selectionStart"in r&&Ls(r)?r={start:r.selectionStart,end:r.selectionEnd}:(r=(r.ownerDocument&&r.ownerDocument.defaultView||window).getSelection(),r={anchorNode:r.anchorNode,anchorOffset:r.anchorOffset,focusNode:r.focusNode,focusOffset:r.focusOffset}),Nr&&Gr(Nr,r)||(Nr=r,r=ei(Ol,"onSelect"),0<r.length&&(n=new Es("onSelect","select",null,n,t),e.push({event:n,listeners:r}),n.target=At)))}function So(e,n){var t={};return t[e.toLowerCase()]=n.toLowerCase(),t["Webkit"+e]="webkit"+n,t["Moz"+e]="moz"+n,t}var Wt={animationend:So("Animation","AnimationEnd"),animationiteration:So("Animation","AnimationIteration"),animationstart:So("Animation","AnimationStart"),transitionend:So("Transition","TransitionEnd")},Ji={},Sd={};In&&(Sd=document.createElement("div").style,"AnimationEvent"in window||(delete Wt.animationend.animation,delete Wt.animationiteration.animation,delete Wt.animationstart.animation),"TransitionEvent"in window||delete Wt.transitionend.transition);function bi(e){if(Ji[e])return Ji[e];if(!Wt[e])return e;var n=Wt[e],t;for(t in n)if(n.hasOwnProperty(t)&&t in Sd)return Ji[e]=n[t];return e}var bd=bi("animationend"),kd=bi("animationiteration"),Pd=bi("animationstart"),Cd=bi("transitionend"),_d=new Map,uu="abort auxClick cancel canPlay canPlayThrough click close contextMenu copy cut drag dragEnd dragEnter dragExit dragLeave dragOver dragStart drop durationChange emptied encrypted ended error gotPointerCapture input invalid keyDown keyPress keyUp load loadedData loadedMetadata loadStart lostPointerCapture mouseDown mouseMove mouseOut mouseOver mouseUp paste pause play playing pointerCancel pointerDown pointerMove pointerOut pointerOver pointerUp progress rateChange reset resize seeked seeking stalled submit suspend timeUpdate touchCancel touchEnd touchStart volumeChange scroll toggle touchMove waiting wheel".split(" ");function it(e,n){_d.set(e,n),Rt(n,[e])}for(var Zi=0;Zi<uu.length;Zi++){var el=uu[Zi],Wg=el.toLowerCase(),Hg=el[0].toUpperCase()+el.slice(1);it(Wg,"on"+Hg)}it(bd,"onAnimationEnd");it(kd,"onAnimationIteration");it(Pd,"onAnimationStart");it("dblclick","onDoubleClick");it("focusin","onFocus");it("focusout","onBlur");it(Cd,"onTransitionEnd");er("onMouseEnter",["mouseout","mouseover"]);er("onMouseLeave",["mouseout","mouseover"]);er("onPointerEnter",["pointerout","pointerover"]);er("onPointerLeave",["pointerout","pointerover"]);Rt("onChange","change click focusin focusout input keydown keyup selectionchange".split(" "));Rt("onSelect","focusout contextmenu dragend focusin keydown keyup mousedown mouseup selectionchange".split(" "));Rt("onBeforeInput",["compositionend","keypress","textInput","paste"]);Rt("onCompositionEnd","compositionend focusout keydown keypress keyup mousedown".split(" "));Rt("onCompositionStart","compositionstart focusout keydown keypress keyup mousedown".split(" "));Rt("onCompositionUpdate","compositionupdate focusout keydown keypress keyup mousedown".split(" "));var _r="abort canplay canplaythrough durationchange emptied encrypted ended error loadeddata loadedmetadata loadstart pause play playing progress ratechange resize seeked seeking stalled suspend timeupdate volumechange waiting".split(" "),Fg=new Set("cancel close invalid load scroll toggle".split(" ").concat(_r));function cu(e,n,t){var r=e.type||"unknown-event";e.currentTarget=t,Wm(r,n,void 0,e),e.currentTarget=null}function Td(e,n){n=(n&4)!==0;for(var t=0;t<e.length;t++){var r=e[t],o=r.event;r=r.listeners;e:{var i=void 0;if(n)for(var l=r.length-1;0<=l;l--){var s=r[l],a=s.instance,u=s.currentTarget;if(s=s.listener,a!==i&&o.isPropagationStopped())break e;cu(o,s,u),i=a}else for(l=0;l<r.length;l++){if(s=r[l],a=s.instance,u=s.currentTarget,s=s.listener,a!==i&&o.isPropagationStopped())break e;cu(o,s,u),i=a}}}if(Yo)throw e=El,Yo=!1,El=null,e}function ce(e,n){var t=n[Fl];t===void 0&&(t=n[Fl]=new Set);var r=e+"__bubble";t.has(r)||(Rd(n,e,2,!1),t.add(r))}function nl(e,n,t){var r=0;n&&(r|=4),Rd(t,e,r,n)}var bo="_reactListening"+Math.random().toString(36).slice(2);function Vr(e){if(!e[bo]){e[bo]=!0,Lc.forEach(function(t){t!=="selectionchange"&&(Fg.has(t)||nl(t,!1,e),nl(t,!0,e))});var n=e.nodeType===9?e:e.ownerDocument;n===null||n[bo]||(n[bo]=!0,nl("selectionchange",!1,n))}}function Rd(e,n,t,r){switch(dd(n)){case 1:var o=tg;break;case 4:o=rg;break;default:o=Is}t=o.bind(null,n,t,e),o=void 0,!$l||n!=="touchstart"&&n!=="touchmove"&&n!=="wheel"||(o=!0),r?o!==void 0?e.addEventListener(n,t,{capture:!0,passive:o}):e.addEventListener(n,t,!0):o!==void 0?e.addEventListener(n,t,{passive:o}):e.addEventListener(n,t,!1)}function tl(e,n,t,r,o){var i=r;if(!(n&1)&&!(n&2)&&r!==null)e:for(;;){if(r===null)return;var l=r.tag;if(l===3||l===4){var s=r.stateNode.containerInfo;if(s===o||s.nodeType===8&&s.parentNode===o)break;if(l===4)for(l=r.return;l!==null;){var a=l.tag;if((a===3||a===4)&&(a=l.stateNode.containerInfo,a===o||a.nodeType===8&&a.parentNode===o))return;l=l.return}for(;s!==null;){if(l=yt(s),l===null)return;if(a=l.tag,a===5||a===6){r=i=l;continue e}s=s.parentNode}}r=r.return}Xc(function(){var u=i,d=_s(t),c=[];e:{var p=_d.get(e);if(p!==void 0){var y=Es,x=e;switch(e){case"keypress":if(zo(t)===0)break e;case"keydown":case"keyup":y=vg;break;case"focusin":x="focus",y=Yi;break;case"focusout":x="blur",y=Yi;break;case"beforeblur":case"afterblur":y=Yi;break;case"click":if(t.button===2)break e;case"auxclick":case"dblclick":case"mousedown":case"mousemove":case"mouseup":case"mouseout":case"mouseover":case"contextmenu":y=Ja;break;case"drag":case"dragend":case"dragenter":case"dragexit":case"dragleave":case"dragover":case"dragstart":case"drop":y=lg;break;case"touchcancel":case"touchend":case"touchmove":case"touchstart":y=Sg;break;case bd:case kd:case Pd:y=ug;break;case Cd:y=kg;break;case"scroll":y=og;break;case"wheel":y=Cg;break;case"copy":case"cut":case"paste":y=dg;break;case"gotpointercapture":case"lostpointercapture":case"pointercancel":case"pointerdown":case"pointermove":case"pointerout":case"pointerover":case"pointerup":y=eu}var w=(n&4)!==0,S=!w&&e==="scroll",g=w?p!==null?p+"Capture":null:p;w=[];for(var m=u,v;m!==null;){v=m;var b=v.stateNode;if(v.tag===5&&b!==null&&(v=b,g!==null&&(b=Wr(m,g),b!=null&&w.push(Kr(m,b,v)))),S)break;m=m.return}0<w.length&&(p=new y(p,x,null,t,d),c.push({event:p,listeners:w}))}}if(!(n&7)){e:{if(p=e==="mouseover"||e==="pointerover",y=e==="mouseout"||e==="pointerout",p&&t!==Ml&&(x=t.relatedTarget||t.fromElement)&&(yt(x)||x[$n]))break e;if((y||p)&&(p=d.window===d?d:(p=d.ownerDocument)?p.defaultView||p.parentWindow:window,y?(x=t.relatedTarget||t.toElement,y=u,x=x?yt(x):null,x!==null&&(S=Mt(x),x!==S||x.tag!==5&&x.tag!==6)&&(x=null)):(y=null,x=u),y!==x)){if(w=Ja,b="onMouseLeave",g="onMouseEnter",m="mouse",(e==="pointerout"||e==="pointerover")&&(w=eu,b="onPointerLeave",g="onPointerEnter",m="pointer"),S=y==null?p:Ht(y),v=x==null?p:Ht(x),p=new w(b,m+"leave",y,t,d),p.target=S,p.relatedTarget=v,b=null,yt(d)===u&&(w=new w(g,m+"enter",x,t,d),w.target=v,w.relatedTarget=S,b=w),S=b,y&&x)n:{for(w=y,g=x,m=0,v=w;v;v=Lt(v))m++;for(v=0,b=g;b;b=Lt(b))v++;for(;0<m-v;)w=Lt(w),m--;for(;0<v-m;)g=Lt(g),v--;for(;m--;){if(w===g||g!==null&&w===g.alternate)break n;w=Lt(w),g=Lt(g)}w=null}else w=null;y!==null&&du(c,p,y,w,!1),x!==null&&S!==null&&du(c,S,x,w,!0)}}e:{if(p=u?Ht(u):window,y=p.nodeName&&p.nodeName.toLowerCase(),y==="select"||y==="input"&&p.type==="file")var P=Eg;else if(ru(p))if(yd)P=Og;else{P=jg;var I=Ng}else(y=p.nodeName)&&y.toLowerCase()==="input"&&(p.type==="checkbox"||p.type==="radio")&&(P=Lg);if(P&&(P=P(e,u))){hd(c,P,t,d);break e}I&&I(e,p,u),e==="focusout"&&(I=p._wrapperState)&&I.controlled&&p.type==="number"&&Pl(p,"number",p.value)}switch(I=u?Ht(u):window,e){case"focusin":(ru(I)||I.contentEditable==="true")&&(At=I,Ol=u,Nr=null);break;case"focusout":Nr=Ol=At=null;break;case"mousedown":Dl=!0;break;case"contextmenu":case"mouseup":case"dragend":Dl=!1,au(c,t,d);break;case"selectionchange":if(Ag)break;case"keydown":case"keyup":au(c,t,d)}var _;if(js)e:{switch(e){case"compositionstart":var $="onCompositionStart";break e;case"compositionend":$="onCompositionEnd";break e;case"compositionupdate":$="onCompositionUpdate";break e}$=void 0}else zt?md(e,t)&&($="onCompositionEnd"):e==="keydown"&&t.keyCode===229&&($="onCompositionStart");$&&(fd&&t.locale!=="ko"&&(zt||$!=="onCompositionStart"?$==="onCompositionEnd"&&zt&&(_=pd()):(Gn=d,$s="value"in Gn?Gn.value:Gn.textContent,zt=!0)),I=ei(u,$),0<I.length&&($=new Za($,e,null,t,d),c.push({event:$,listeners:I}),_?$.data=_:(_=gd(t),_!==null&&($.data=_)))),(_=Tg?Rg(e,t):Mg(e,t))&&(u=ei(u,"onBeforeInput"),0<u.length&&(d=new Za("onBeforeInput","beforeinput",null,t,d),c.push({event:d,listeners:u}),d.data=_))}Td(c,n)})}function Kr(e,n,t){return{instance:e,listener:n,currentTarget:t}}function ei(e,n){for(var t=n+"Capture",r=[];e!==null;){var o=e,i=o.stateNode;o.tag===5&&i!==null&&(o=i,i=Wr(e,t),i!=null&&r.unshift(Kr(e,i,o)),i=Wr(e,n),i!=null&&r.push(Kr(e,i,o))),e=e.return}return r}function Lt(e){if(e===null)return null;do e=e.return;while(e&&e.tag!==5);return e||null}function du(e,n,t,r,o){for(var i=n._reactName,l=[];t!==null&&t!==r;){var s=t,a=s.alternate,u=s.stateNode;if(a!==null&&a===r)break;s.tag===5&&u!==null&&(s=u,o?(a=Wr(t,i),a!=null&&l.unshift(Kr(t,a,s))):o||(a=Wr(t,i),a!=null&&l.push(Kr(t,a,s)))),t=t.return}l.length!==0&&e.push({event:n,listeners:l})}var Bg=/\r\n?/g,Ug=/\u0000|\uFFFD/g;function pu(e){return(typeof e=="string"?e:""+e).replace(Bg,`
`).replace(Ug,"")}function ko(e,n,t){if(n=pu(n),pu(e)!==n&&t)throw Error(k(425))}function ni(){}var zl=null,Al=null;function Wl(e,n){return e==="textarea"||e==="noscript"||typeof n.children=="string"||typeof n.children=="number"||typeof n.dangerouslySetInnerHTML=="object"&&n.dangerouslySetInnerHTML!==null&&n.dangerouslySetInnerHTML.__html!=null}var Hl=typeof setTimeout=="function"?setTimeout:void 0,Gg=typeof clearTimeout=="function"?clearTimeout:void 0,fu=typeof Promise=="function"?Promise:void 0,Vg=typeof queueMicrotask=="function"?queueMicrotask:typeof fu<"u"?function(e){return fu.resolve(null).then(e).catch(Kg)}:Hl;function Kg(e){setTimeout(function(){throw e})}function rl(e,n){var t=n,r=0;do{var o=t.nextSibling;if(e.removeChild(t),o&&o.nodeType===8)if(t=o.data,t==="/$"){if(r===0){e.removeChild(o),Br(n);return}r--}else t!=="$"&&t!=="$?"&&t!=="$!"||r++;t=o}while(t);Br(n)}function Xn(e){for(;e!=null;e=e.nextSibling){var n=e.nodeType;if(n===1||n===3)break;if(n===8){if(n=e.data,n==="$"||n==="$!"||n==="$?")break;if(n==="/$")return null}}return e}function mu(e){e=e.previousSibling;for(var n=0;e;){if(e.nodeType===8){var t=e.data;if(t==="$"||t==="$!"||t==="$?"){if(n===0)return e;n--}else t==="/$"&&n++}e=e.previousSibling}return null}var ur=Math.random().toString(36).slice(2),xn="__reactFiber$"+ur,Qr="__reactProps$"+ur,$n="__reactContainer$"+ur,Fl="__reactEvents$"+ur,Qg="__reactListeners$"+ur,Yg="__reactHandles$"+ur;function yt(e){var n=e[xn];if(n)return n;for(var t=e.parentNode;t;){if(n=t[$n]||t[xn]){if(t=n.alternate,n.child!==null||t!==null&&t.child!==null)for(e=mu(e);e!==null;){if(t=e[xn])return t;e=mu(e)}return n}e=t,t=e.parentNode}return null}function lo(e){return e=e[xn]||e[$n],!e||e.tag!==5&&e.tag!==6&&e.tag!==13&&e.tag!==3?null:e}function Ht(e){if(e.tag===5||e.tag===6)return e.stateNode;throw Error(k(33))}function ki(e){return e[Qr]||null}var Bl=[],Ft=-1;function lt(e){return{current:e}}function de(e){0>Ft||(e.current=Bl[Ft],Bl[Ft]=null,Ft--)}function ae(e,n){Ft++,Bl[Ft]=e.current,e.current=n}var ot={},Oe=lt(ot),Ge=lt(!1),bt=ot;function nr(e,n){var t=e.type.contextTypes;if(!t)return ot;var r=e.stateNode;if(r&&r.__reactInternalMemoizedUnmaskedChildContext===n)return r.__reactInternalMemoizedMaskedChildContext;var o={},i;for(i in t)o[i]=n[i];return r&&(e=e.stateNode,e.__reactInternalMemoizedUnmaskedChildContext=n,e.__reactInternalMemoizedMaskedChildContext=o),o}function Ve(e){return e=e.childContextTypes,e!=null}function ti(){de(Ge),de(Oe)}function gu(e,n,t){if(Oe.current!==ot)throw Error(k(168));ae(Oe,n),ae(Ge,t)}function Md(e,n,t){var r=e.stateNode;if(n=n.childContextTypes,typeof r.getChildContext!="function")return t;r=r.getChildContext();for(var o in r)if(!(o in n))throw Error(k(108,Nm(e)||"Unknown",o));return he({},t,r)}function ri(e){return e=(e=e.stateNode)&&e.__reactInternalMemoizedMergedChildContext||ot,bt=Oe.current,ae(Oe,e),ae(Ge,Ge.current),!0}function hu(e,n,t){var r=e.stateNode;if(!r)throw Error(k(169));t?(e=Md(e,n,bt),r.__reactInternalMemoizedMergedChildContext=e,de(Ge),de(Oe),ae(Oe,e)):de(Ge),ae(Ge,t)}var _n=null,Pi=!1,ol=!1;function Id(e){_n===null?_n=[e]:_n.push(e)}function qg(e){Pi=!0,Id(e)}function st(){if(!ol&&_n!==null){ol=!0;var e=0,n=re;try{var t=_n;for(re=1;e<t.length;e++){var r=t[e];do r=r(!0);while(r!==null)}_n=null,Pi=!1}catch(o){throw _n!==null&&(_n=_n.slice(e+1)),nd(Ts,st),o}finally{re=n,ol=!1}}return null}var Bt=[],Ut=0,oi=null,ii=0,tn=[],rn=0,kt=null,Tn=1,Rn="";function gt(e,n){Bt[Ut++]=ii,Bt[Ut++]=oi,oi=e,ii=n}function $d(e,n,t){tn[rn++]=Tn,tn[rn++]=Rn,tn[rn++]=kt,kt=e;var r=Tn;e=Rn;var o=32-mn(r)-1;r&=~(1<<o),t+=1;var i=32-mn(n)+o;if(30<i){var l=o-o%5;i=(r&(1<<l)-1).toString(32),r>>=l,o-=l,Tn=1<<32-mn(n)+o|t<<o|r,Rn=i+e}else Tn=1<<i|t<<o|r,Rn=e}function Os(e){e.return!==null&&(gt(e,1),$d(e,1,0))}function Ds(e){for(;e===oi;)oi=Bt[--Ut],Bt[Ut]=null,ii=Bt[--Ut],Bt[Ut]=null;for(;e===kt;)kt=tn[--rn],tn[rn]=null,Rn=tn[--rn],tn[rn]=null,Tn=tn[--rn],tn[rn]=null}var qe=null,Ye=null,fe=!1,fn=null;function Ed(e,n){var t=on(5,null,null,0);t.elementType="DELETED",t.stateNode=n,t.return=e,n=e.deletions,n===null?(e.deletions=[t],e.flags|=16):n.push(t)}function yu(e,n){switch(e.tag){case 5:var t=e.type;return n=n.nodeType!==1||t.toLowerCase()!==n.nodeName.toLowerCase()?null:n,n!==null?(e.stateNode=n,qe=e,Ye=Xn(n.firstChild),!0):!1;case 6:return n=e.pendingProps===""||n.nodeType!==3?null:n,n!==null?(e.stateNode=n,qe=e,Ye=null,!0):!1;case 13:return n=n.nodeType!==8?null:n,n!==null?(t=kt!==null?{id:Tn,overflow:Rn}:null,e.memoizedState={dehydrated:n,treeContext:t,retryLane:1073741824},t=on(18,null,null,0),t.stateNode=n,t.return=e,e.child=t,qe=e,Ye=null,!0):!1;default:return!1}}function Ul(e){return(e.mode&1)!==0&&(e.flags&128)===0}function Gl(e){if(fe){var n=Ye;if(n){var t=n;if(!yu(e,n)){if(Ul(e))throw Error(k(418));n=Xn(t.nextSibling);var r=qe;n&&yu(e,n)?Ed(r,t):(e.flags=e.flags&-4097|2,fe=!1,qe=e)}}else{if(Ul(e))throw Error(k(418));e.flags=e.flags&-4097|2,fe=!1,qe=e}}}function vu(e){for(e=e.return;e!==null&&e.tag!==5&&e.tag!==3&&e.tag!==13;)e=e.return;qe=e}function Po(e){if(e!==qe)return!1;if(!fe)return vu(e),fe=!0,!1;var n;if((n=e.tag!==3)&&!(n=e.tag!==5)&&(n=e.type,n=n!=="head"&&n!=="body"&&!Wl(e.type,e.memoizedProps)),n&&(n=Ye)){if(Ul(e))throw Nd(),Error(k(418));for(;n;)Ed(e,n),n=Xn(n.nextSibling)}if(vu(e),e.tag===13){if(e=e.memoizedState,e=e!==null?e.dehydrated:null,!e)throw Error(k(317));e:{for(e=e.nextSibling,n=0;e;){if(e.nodeType===8){var t=e.data;if(t==="/$"){if(n===0){Ye=Xn(e.nextSibling);break e}n--}else t!=="$"&&t!=="$!"&&t!=="$?"||n++}e=e.nextSibling}Ye=null}}else Ye=qe?Xn(e.stateNode.nextSibling):null;return!0}function Nd(){for(var e=Ye;e;)e=Xn(e.nextSibling)}function tr(){Ye=qe=null,fe=!1}function zs(e){fn===null?fn=[e]:fn.push(e)}var Xg=jn.ReactCurrentBatchConfig;function xr(e,n,t){if(e=t.ref,e!==null&&typeof e!="function"&&typeof e!="object"){if(t._owner){if(t=t._owner,t){if(t.tag!==1)throw Error(k(309));var r=t.stateNode}if(!r)throw Error(k(147,e));var o=r,i=""+e;return n!==null&&n.ref!==null&&typeof n.ref=="function"&&n.ref._stringRef===i?n.ref:(n=function(l){var s=o.refs;l===null?delete s[i]:s[i]=l},n._stringRef=i,n)}if(typeof e!="string")throw Error(k(284));if(!t._owner)throw Error(k(290,e))}return e}function Co(e,n){throw e=Object.prototype.toString.call(n),Error(k(31,e==="[object Object]"?"object with keys {"+Object.keys(n).join(", ")+"}":e))}function xu(e){var n=e._init;return n(e._payload)}function jd(e){function n(g,m){if(e){var v=g.deletions;v===null?(g.deletions=[m],g.flags|=16):v.push(m)}}function t(g,m){if(!e)return null;for(;m!==null;)n(g,m),m=m.sibling;return null}function r(g,m){for(g=new Map;m!==null;)m.key!==null?g.set(m.key,m):g.set(m.index,m),m=m.sibling;return g}function o(g,m){return g=nt(g,m),g.index=0,g.sibling=null,g}function i(g,m,v){return g.index=v,e?(v=g.alternate,v!==null?(v=v.index,v<m?(g.flags|=2,m):v):(g.flags|=2,m)):(g.flags|=1048576,m)}function l(g){return e&&g.alternate===null&&(g.flags|=2),g}function s(g,m,v,b){return m===null||m.tag!==6?(m=dl(v,g.mode,b),m.return=g,m):(m=o(m,v),m.return=g,m)}function a(g,m,v,b){var P=v.type;return P===Dt?d(g,m,v.props.children,b,v.key):m!==null&&(m.elementType===P||typeof P=="object"&&P!==null&&P.$$typeof===Hn&&xu(P)===m.type)?(b=o(m,v.props),b.ref=xr(g,m,v),b.return=g,b):(b=Go(v.type,v.key,v.props,null,g.mode,b),b.ref=xr(g,m,v),b.return=g,b)}function u(g,m,v,b){return m===null||m.tag!==4||m.stateNode.containerInfo!==v.containerInfo||m.stateNode.implementation!==v.implementation?(m=pl(v,g.mode,b),m.return=g,m):(m=o(m,v.children||[]),m.return=g,m)}function d(g,m,v,b,P){return m===null||m.tag!==7?(m=St(v,g.mode,b,P),m.return=g,m):(m=o(m,v),m.return=g,m)}function c(g,m,v){if(typeof m=="string"&&m!==""||typeof m=="number")return m=dl(""+m,g.mode,v),m.return=g,m;if(typeof m=="object"&&m!==null){switch(m.$$typeof){case mo:return v=Go(m.type,m.key,m.props,null,g.mode,v),v.ref=xr(g,null,m),v.return=g,v;case Ot:return m=pl(m,g.mode,v),m.return=g,m;case Hn:var b=m._init;return c(g,b(m._payload),v)}if(Pr(m)||mr(m))return m=St(m,g.mode,v,null),m.return=g,m;Co(g,m)}return null}function p(g,m,v,b){var P=m!==null?m.key:null;if(typeof v=="string"&&v!==""||typeof v=="number")return P!==null?null:s(g,m,""+v,b);if(typeof v=="object"&&v!==null){switch(v.$$typeof){case mo:return v.key===P?a(g,m,v,b):null;case Ot:return v.key===P?u(g,m,v,b):null;case Hn:return P=v._init,p(g,m,P(v._payload),b)}if(Pr(v)||mr(v))return P!==null?null:d(g,m,v,b,null);Co(g,v)}return null}function y(g,m,v,b,P){if(typeof b=="string"&&b!==""||typeof b=="number")return g=g.get(v)||null,s(m,g,""+b,P);if(typeof b=="object"&&b!==null){switch(b.$$typeof){case mo:return g=g.get(b.key===null?v:b.key)||null,a(m,g,b,P);case Ot:return g=g.get(b.key===null?v:b.key)||null,u(m,g,b,P);case Hn:var I=b._init;return y(g,m,v,I(b._payload),P)}if(Pr(b)||mr(b))return g=g.get(v)||null,d(m,g,b,P,null);Co(m,b)}return null}function x(g,m,v,b){for(var P=null,I=null,_=m,$=m=0,A=null;_!==null&&$<v.length;$++){_.index>$?(A=_,_=null):A=_.sibling;var j=p(g,_,v[$],b);if(j===null){_===null&&(_=A);break}e&&_&&j.alternate===null&&n(g,_),m=i(j,m,$),I===null?P=j:I.sibling=j,I=j,_=A}if($===v.length)return t(g,_),fe&&gt(g,$),P;if(_===null){for(;$<v.length;$++)_=c(g,v[$],b),_!==null&&(m=i(_,m,$),I===null?P=_:I.sibling=_,I=_);return fe&&gt(g,$),P}for(_=r(g,_);$<v.length;$++)A=y(_,g,$,v[$],b),A!==null&&(e&&A.alternate!==null&&_.delete(A.key===null?$:A.key),m=i(A,m,$),I===null?P=A:I.sibling=A,I=A);return e&&_.forEach(function(W){return n(g,W)}),fe&&gt(g,$),P}function w(g,m,v,b){var P=mr(v);if(typeof P!="function")throw Error(k(150));if(v=P.call(v),v==null)throw Error(k(151));for(var I=P=null,_=m,$=m=0,A=null,j=v.next();_!==null&&!j.done;$++,j=v.next()){_.index>$?(A=_,_=null):A=_.sibling;var W=p(g,_,j.value,b);if(W===null){_===null&&(_=A);break}e&&_&&W.alternate===null&&n(g,_),m=i(W,m,$),I===null?P=W:I.sibling=W,I=W,_=A}if(j.done)return t(g,_),fe&&gt(g,$),P;if(_===null){for(;!j.done;$++,j=v.next())j=c(g,j.value,b),j!==null&&(m=i(j,m,$),I===null?P=j:I.sibling=j,I=j);return fe&&gt(g,$),P}for(_=r(g,_);!j.done;$++,j=v.next())j=y(_,g,$,j.value,b),j!==null&&(e&&j.alternate!==null&&_.delete(j.key===null?$:j.key),m=i(j,m,$),I===null?P=j:I.sibling=j,I=j);return e&&_.forEach(function(oe){return n(g,oe)}),fe&&gt(g,$),P}function S(g,m,v,b){if(typeof v=="object"&&v!==null&&v.type===Dt&&v.key===null&&(v=v.props.children),typeof v=="object"&&v!==null){switch(v.$$typeof){case mo:e:{for(var P=v.key,I=m;I!==null;){if(I.key===P){if(P=v.type,P===Dt){if(I.tag===7){t(g,I.sibling),m=o(I,v.props.children),m.return=g,g=m;break e}}else if(I.elementType===P||typeof P=="object"&&P!==null&&P.$$typeof===Hn&&xu(P)===I.type){t(g,I.sibling),m=o(I,v.props),m.ref=xr(g,I,v),m.return=g,g=m;break e}t(g,I);break}else n(g,I);I=I.sibling}v.type===Dt?(m=St(v.props.children,g.mode,b,v.key),m.return=g,g=m):(b=Go(v.type,v.key,v.props,null,g.mode,b),b.ref=xr(g,m,v),b.return=g,g=b)}return l(g);case Ot:e:{for(I=v.key;m!==null;){if(m.key===I)if(m.tag===4&&m.stateNode.containerInfo===v.containerInfo&&m.stateNode.implementation===v.implementation){t(g,m.sibling),m=o(m,v.children||[]),m.return=g,g=m;break e}else{t(g,m);break}else n(g,m);m=m.sibling}m=pl(v,g.mode,b),m.return=g,g=m}return l(g);case Hn:return I=v._init,S(g,m,I(v._payload),b)}if(Pr(v))return x(g,m,v,b);if(mr(v))return w(g,m,v,b);Co(g,v)}return typeof v=="string"&&v!==""||typeof v=="number"?(v=""+v,m!==null&&m.tag===6?(t(g,m.sibling),m=o(m,v),m.return=g,g=m):(t(g,m),m=dl(v,g.mode,b),m.return=g,g=m),l(g)):t(g,m)}return S}var rr=jd(!0),Ld=jd(!1),li=lt(null),si=null,Gt=null,As=null;function Ws(){As=Gt=si=null}function Hs(e){var n=li.current;de(li),e._currentValue=n}function Vl(e,n,t){for(;e!==null;){var r=e.alternate;if((e.childLanes&n)!==n?(e.childLanes|=n,r!==null&&(r.childLanes|=n)):r!==null&&(r.childLanes&n)!==n&&(r.childLanes|=n),e===t)break;e=e.return}}function Jt(e,n){si=e,As=Gt=null,e=e.dependencies,e!==null&&e.firstContext!==null&&(e.lanes&n&&(Ue=!0),e.firstContext=null)}function sn(e){var n=e._currentValue;if(As!==e)if(e={context:e,memoizedValue:n,next:null},Gt===null){if(si===null)throw Error(k(308));Gt=e,si.dependencies={lanes:0,firstContext:e}}else Gt=Gt.next=e;return n}var vt=null;function Fs(e){vt===null?vt=[e]:vt.push(e)}function Od(e,n,t,r){var o=n.interleaved;return o===null?(t.next=t,Fs(n)):(t.next=o.next,o.next=t),n.interleaved=t,En(e,r)}function En(e,n){e.lanes|=n;var t=e.alternate;for(t!==null&&(t.lanes|=n),t=e,e=e.return;e!==null;)e.childLanes|=n,t=e.alternate,t!==null&&(t.childLanes|=n),t=e,e=e.return;return t.tag===3?t.stateNode:null}var Fn=!1;function Bs(e){e.updateQueue={baseState:e.memoizedState,firstBaseUpdate:null,lastBaseUpdate:null,shared:{pending:null,interleaved:null,lanes:0},effects:null}}function Dd(e,n){e=e.updateQueue,n.updateQueue===e&&(n.updateQueue={baseState:e.baseState,firstBaseUpdate:e.firstBaseUpdate,lastBaseUpdate:e.lastBaseUpdate,shared:e.shared,effects:e.effects})}function Mn(e,n){return{eventTime:e,lane:n,tag:0,payload:null,callback:null,next:null}}function Jn(e,n,t){var r=e.updateQueue;if(r===null)return null;if(r=r.shared,J&2){var o=r.pending;return o===null?n.next=n:(n.next=o.next,o.next=n),r.pending=n,En(e,t)}return o=r.interleaved,o===null?(n.next=n,Fs(r)):(n.next=o.next,o.next=n),r.interleaved=n,En(e,t)}function Ao(e,n,t){if(n=n.updateQueue,n!==null&&(n=n.shared,(t&4194240)!==0)){var r=n.lanes;r&=e.pendingLanes,t|=r,n.lanes=t,Rs(e,t)}}function wu(e,n){var t=e.updateQueue,r=e.alternate;if(r!==null&&(r=r.updateQueue,t===r)){var o=null,i=null;if(t=t.firstBaseUpdate,t!==null){do{var l={eventTime:t.eventTime,lane:t.lane,tag:t.tag,payload:t.payload,callback:t.callback,next:null};i===null?o=i=l:i=i.next=l,t=t.next}while(t!==null);i===null?o=i=n:i=i.next=n}else o=i=n;t={baseState:r.baseState,firstBaseUpdate:o,lastBaseUpdate:i,shared:r.shared,effects:r.effects},e.updateQueue=t;return}e=t.lastBaseUpdate,e===null?t.firstBaseUpdate=n:e.next=n,t.lastBaseUpdate=n}function ai(e,n,t,r){var o=e.updateQueue;Fn=!1;var i=o.firstBaseUpdate,l=o.lastBaseUpdate,s=o.shared.pending;if(s!==null){o.shared.pending=null;var a=s,u=a.next;a.next=null,l===null?i=u:l.next=u,l=a;var d=e.alternate;d!==null&&(d=d.updateQueue,s=d.lastBaseUpdate,s!==l&&(s===null?d.firstBaseUpdate=u:s.next=u,d.lastBaseUpdate=a))}if(i!==null){var c=o.baseState;l=0,d=u=a=null,s=i;do{var p=s.lane,y=s.eventTime;if((r&p)===p){d!==null&&(d=d.next={eventTime:y,lane:0,tag:s.tag,payload:s.payload,callback:s.callback,next:null});e:{var x=e,w=s;switch(p=n,y=t,w.tag){case 1:if(x=w.payload,typeof x=="function"){c=x.call(y,c,p);break e}c=x;break e;case 3:x.flags=x.flags&-65537|128;case 0:if(x=w.payload,p=typeof x=="function"?x.call(y,c,p):x,p==null)break e;c=he({},c,p);break e;case 2:Fn=!0}}s.callback!==null&&s.lane!==0&&(e.flags|=64,p=o.effects,p===null?o.effects=[s]:p.push(s))}else y={eventTime:y,lane:p,tag:s.tag,payload:s.payload,callback:s.callback,next:null},d===null?(u=d=y,a=c):d=d.next=y,l|=p;if(s=s.next,s===null){if(s=o.shared.pending,s===null)break;p=s,s=p.next,p.next=null,o.lastBaseUpdate=p,o.shared.pending=null}}while(!0);if(d===null&&(a=c),o.baseState=a,o.firstBaseUpdate=u,o.lastBaseUpdate=d,n=o.shared.interleaved,n!==null){o=n;do l|=o.lane,o=o.next;while(o!==n)}else i===null&&(o.shared.lanes=0);Ct|=l,e.lanes=l,e.memoizedState=c}}function Su(e,n,t){if(e=n.effects,n.effects=null,e!==null)for(n=0;n<e.length;n++){var r=e[n],o=r.callback;if(o!==null){if(r.callback=null,r=t,typeof o!="function")throw Error(k(191,o));o.call(r)}}}var so={},Sn=lt(so),Yr=lt(so),qr=lt(so);function xt(e){if(e===so)throw Error(k(174));return e}function Us(e,n){switch(ae(qr,n),ae(Yr,e),ae(Sn,so),e=n.nodeType,e){case 9:case 11:n=(n=n.documentElement)?n.namespaceURI:_l(null,"");break;default:e=e===8?n.parentNode:n,n=e.namespaceURI||null,e=e.tagName,n=_l(n,e)}de(Sn),ae(Sn,n)}function or(){de(Sn),de(Yr),de(qr)}function zd(e){xt(qr.current);var n=xt(Sn.current),t=_l(n,e.type);n!==t&&(ae(Yr,e),ae(Sn,t))}function Gs(e){Yr.current===e&&(de(Sn),de(Yr))}var me=lt(0);function ui(e){for(var n=e;n!==null;){if(n.tag===13){var t=n.memoizedState;if(t!==null&&(t=t.dehydrated,t===null||t.data==="$?"||t.data==="$!"))return n}else if(n.tag===19&&n.memoizedProps.revealOrder!==void 0){if(n.flags&128)return n}else if(n.child!==null){n.child.return=n,n=n.child;continue}if(n===e)break;for(;n.sibling===null;){if(n.return===null||n.return===e)return null;n=n.return}n.sibling.return=n.return,n=n.sibling}return null}var il=[];function Vs(){for(var e=0;e<il.length;e++)il[e]._workInProgressVersionPrimary=null;il.length=0}var Wo=jn.ReactCurrentDispatcher,ll=jn.ReactCurrentBatchConfig,Pt=0,ge=null,Pe=null,Te=null,ci=!1,jr=!1,Xr=0,Jg=0;function Ne(){throw Error(k(321))}function Ks(e,n){if(n===null)return!1;for(var t=0;t<n.length&&t<e.length;t++)if(!hn(e[t],n[t]))return!1;return!0}function Qs(e,n,t,r,o,i){if(Pt=i,ge=n,n.memoizedState=null,n.updateQueue=null,n.lanes=0,Wo.current=e===null||e.memoizedState===null?th:rh,e=t(r,o),jr){i=0;do{if(jr=!1,Xr=0,25<=i)throw Error(k(301));i+=1,Te=Pe=null,n.updateQueue=null,Wo.current=oh,e=t(r,o)}while(jr)}if(Wo.current=di,n=Pe!==null&&Pe.next!==null,Pt=0,Te=Pe=ge=null,ci=!1,n)throw Error(k(300));return e}function Ys(){var e=Xr!==0;return Xr=0,e}function vn(){var e={memoizedState:null,baseState:null,baseQueue:null,queue:null,next:null};return Te===null?ge.memoizedState=Te=e:Te=Te.next=e,Te}function an(){if(Pe===null){var e=ge.alternate;e=e!==null?e.memoizedState:null}else e=Pe.next;var n=Te===null?ge.memoizedState:Te.next;if(n!==null)Te=n,Pe=e;else{if(e===null)throw Error(k(310));Pe=e,e={memoizedState:Pe.memoizedState,baseState:Pe.baseState,baseQueue:Pe.baseQueue,queue:Pe.queue,next:null},Te===null?ge.memoizedState=Te=e:Te=Te.next=e}return Te}function Jr(e,n){return typeof n=="function"?n(e):n}function sl(e){var n=an(),t=n.queue;if(t===null)throw Error(k(311));t.lastRenderedReducer=e;var r=Pe,o=r.baseQueue,i=t.pending;if(i!==null){if(o!==null){var l=o.next;o.next=i.next,i.next=l}r.baseQueue=o=i,t.pending=null}if(o!==null){i=o.next,r=r.baseState;var s=l=null,a=null,u=i;do{var d=u.lane;if((Pt&d)===d)a!==null&&(a=a.next={lane:0,action:u.action,hasEagerState:u.hasEagerState,eagerState:u.eagerState,next:null}),r=u.hasEagerState?u.eagerState:e(r,u.action);else{var c={lane:d,action:u.action,hasEagerState:u.hasEagerState,eagerState:u.eagerState,next:null};a===null?(s=a=c,l=r):a=a.next=c,ge.lanes|=d,Ct|=d}u=u.next}while(u!==null&&u!==i);a===null?l=r:a.next=s,hn(r,n.memoizedState)||(Ue=!0),n.memoizedState=r,n.baseState=l,n.baseQueue=a,t.lastRenderedState=r}if(e=t.interleaved,e!==null){o=e;do i=o.lane,ge.lanes|=i,Ct|=i,o=o.next;while(o!==e)}else o===null&&(t.lanes=0);return[n.memoizedState,t.dispatch]}function al(e){var n=an(),t=n.queue;if(t===null)throw Error(k(311));t.lastRenderedReducer=e;var r=t.dispatch,o=t.pending,i=n.memoizedState;if(o!==null){t.pending=null;var l=o=o.next;do i=e(i,l.action),l=l.next;while(l!==o);hn(i,n.memoizedState)||(Ue=!0),n.memoizedState=i,n.baseQueue===null&&(n.baseState=i),t.lastRenderedState=i}return[i,r]}function Ad(){}function Wd(e,n){var t=ge,r=an(),o=n(),i=!hn(r.memoizedState,o);if(i&&(r.memoizedState=o,Ue=!0),r=r.queue,qs(Bd.bind(null,t,r,e),[e]),r.getSnapshot!==n||i||Te!==null&&Te.memoizedState.tag&1){if(t.flags|=2048,Zr(9,Fd.bind(null,t,r,o,n),void 0,null),Re===null)throw Error(k(349));Pt&30||Hd(t,n,o)}return o}function Hd(e,n,t){e.flags|=16384,e={getSnapshot:n,value:t},n=ge.updateQueue,n===null?(n={lastEffect:null,stores:null},ge.updateQueue=n,n.stores=[e]):(t=n.stores,t===null?n.stores=[e]:t.push(e))}function Fd(e,n,t,r){n.value=t,n.getSnapshot=r,Ud(n)&&Gd(e)}function Bd(e,n,t){return t(function(){Ud(n)&&Gd(e)})}function Ud(e){var n=e.getSnapshot;e=e.value;try{var t=n();return!hn(e,t)}catch{return!0}}function Gd(e){var n=En(e,1);n!==null&&gn(n,e,1,-1)}function bu(e){var n=vn();return typeof e=="function"&&(e=e()),n.memoizedState=n.baseState=e,e={pending:null,interleaved:null,lanes:0,dispatch:null,lastRenderedReducer:Jr,lastRenderedState:e},n.queue=e,e=e.dispatch=nh.bind(null,ge,e),[n.memoizedState,e]}function Zr(e,n,t,r){return e={tag:e,create:n,destroy:t,deps:r,next:null},n=ge.updateQueue,n===null?(n={lastEffect:null,stores:null},ge.updateQueue=n,n.lastEffect=e.next=e):(t=n.lastEffect,t===null?n.lastEffect=e.next=e:(r=t.next,t.next=e,e.next=r,n.lastEffect=e)),e}function Vd(){return an().memoizedState}function Ho(e,n,t,r){var o=vn();ge.flags|=e,o.memoizedState=Zr(1|n,t,void 0,r===void 0?null:r)}function Ci(e,n,t,r){var o=an();r=r===void 0?null:r;var i=void 0;if(Pe!==null){var l=Pe.memoizedState;if(i=l.destroy,r!==null&&Ks(r,l.deps)){o.memoizedState=Zr(n,t,i,r);return}}ge.flags|=e,o.memoizedState=Zr(1|n,t,i,r)}function ku(e,n){return Ho(8390656,8,e,n)}function qs(e,n){return Ci(2048,8,e,n)}function Kd(e,n){return Ci(4,2,e,n)}function Qd(e,n){return Ci(4,4,e,n)}function Yd(e,n){if(typeof n=="function")return e=e(),n(e),function(){n(null)};if(n!=null)return e=e(),n.current=e,function(){n.current=null}}function qd(e,n,t){return t=t!=null?t.concat([e]):null,Ci(4,4,Yd.bind(null,n,e),t)}function Xs(){}function Xd(e,n){var t=an();n=n===void 0?null:n;var r=t.memoizedState;return r!==null&&n!==null&&Ks(n,r[1])?r[0]:(t.memoizedState=[e,n],e)}function Jd(e,n){var t=an();n=n===void 0?null:n;var r=t.memoizedState;return r!==null&&n!==null&&Ks(n,r[1])?r[0]:(e=e(),t.memoizedState=[e,n],e)}function Zd(e,n,t){return Pt&21?(hn(t,n)||(t=od(),ge.lanes|=t,Ct|=t,e.baseState=!0),n):(e.baseState&&(e.baseState=!1,Ue=!0),e.memoizedState=t)}function Zg(e,n){var t=re;re=t!==0&&4>t?t:4,e(!0);var r=ll.transition;ll.transition={};try{e(!1),n()}finally{re=t,ll.transition=r}}function ep(){return an().memoizedState}function eh(e,n,t){var r=et(e);if(t={lane:r,action:t,hasEagerState:!1,eagerState:null,next:null},np(e))tp(n,t);else if(t=Od(e,n,t,r),t!==null){var o=Ae();gn(t,e,r,o),rp(t,n,r)}}function nh(e,n,t){var r=et(e),o={lane:r,action:t,hasEagerState:!1,eagerState:null,next:null};if(np(e))tp(n,o);else{var i=e.alternate;if(e.lanes===0&&(i===null||i.lanes===0)&&(i=n.lastRenderedReducer,i!==null))try{var l=n.lastRenderedState,s=i(l,t);if(o.hasEagerState=!0,o.eagerState=s,hn(s,l)){var a=n.interleaved;a===null?(o.next=o,Fs(n)):(o.next=a.next,a.next=o),n.interleaved=o;return}}catch{}finally{}t=Od(e,n,o,r),t!==null&&(o=Ae(),gn(t,e,r,o),rp(t,n,r))}}function np(e){var n=e.alternate;return e===ge||n!==null&&n===ge}function tp(e,n){jr=ci=!0;var t=e.pending;t===null?n.next=n:(n.next=t.next,t.next=n),e.pending=n}function rp(e,n,t){if(t&4194240){var r=n.lanes;r&=e.pendingLanes,t|=r,n.lanes=t,Rs(e,t)}}var di={readContext:sn,useCallback:Ne,useContext:Ne,useEffect:Ne,useImperativeHandle:Ne,useInsertionEffect:Ne,useLayoutEffect:Ne,useMemo:Ne,useReducer:Ne,useRef:Ne,useState:Ne,useDebugValue:Ne,useDeferredValue:Ne,useTransition:Ne,useMutableSource:Ne,useSyncExternalStore:Ne,useId:Ne,unstable_isNewReconciler:!1},th={readContext:sn,useCallback:function(e,n){return vn().memoizedState=[e,n===void 0?null:n],e},useContext:sn,useEffect:ku,useImperativeHandle:function(e,n,t){return t=t!=null?t.concat([e]):null,Ho(4194308,4,Yd.bind(null,n,e),t)},useLayoutEffect:function(e,n){return Ho(4194308,4,e,n)},useInsertionEffect:function(e,n){return Ho(4,2,e,n)},useMemo:function(e,n){var t=vn();return n=n===void 0?null:n,e=e(),t.memoizedState=[e,n],e},useReducer:function(e,n,t){var r=vn();return n=t!==void 0?t(n):n,r.memoizedState=r.baseState=n,e={pending:null,interleaved:null,lanes:0,dispatch:null,lastRenderedReducer:e,lastRenderedState:n},r.queue=e,e=e.dispatch=eh.bind(null,ge,e),[r.memoizedState,e]},useRef:function(e){var n=vn();return e={current:e},n.memoizedState=e},useState:bu,useDebugValue:Xs,useDeferredValue:function(e){return vn().memoizedState=e},useTransition:function(){var e=bu(!1),n=e[0];return e=Zg.bind(null,e[1]),vn().memoizedState=e,[n,e]},useMutableSource:function(){},useSyncExternalStore:function(e,n,t){var r=ge,o=vn();if(fe){if(t===void 0)throw Error(k(407));t=t()}else{if(t=n(),Re===null)throw Error(k(349));Pt&30||Hd(r,n,t)}o.memoizedState=t;var i={value:t,getSnapshot:n};return o.queue=i,ku(Bd.bind(null,r,i,e),[e]),r.flags|=2048,Zr(9,Fd.bind(null,r,i,t,n),void 0,null),t},useId:function(){var e=vn(),n=Re.identifierPrefix;if(fe){var t=Rn,r=Tn;t=(r&~(1<<32-mn(r)-1)).toString(32)+t,n=":"+n+"R"+t,t=Xr++,0<t&&(n+="H"+t.toString(32)),n+=":"}else t=Jg++,n=":"+n+"r"+t.toString(32)+":";return e.memoizedState=n},unstable_isNewReconciler:!1},rh={readContext:sn,useCallback:Xd,useContext:sn,useEffect:qs,useImperativeHandle:qd,useInsertionEffect:Kd,useLayoutEffect:Qd,useMemo:Jd,useReducer:sl,useRef:Vd,useState:function(){return sl(Jr)},useDebugValue:Xs,useDeferredValue:function(e){var n=an();return Zd(n,Pe.memoizedState,e)},useTransition:function(){var e=sl(Jr)[0],n=an().memoizedState;return[e,n]},useMutableSource:Ad,useSyncExternalStore:Wd,useId:ep,unstable_isNewReconciler:!1},oh={readContext:sn,useCallback:Xd,useContext:sn,useEffect:qs,useImperativeHandle:qd,useInsertionEffect:Kd,useLayoutEffect:Qd,useMemo:Jd,useReducer:al,useRef:Vd,useState:function(){return al(Jr)},useDebugValue:Xs,useDeferredValue:function(e){var n=an();return Pe===null?n.memoizedState=e:Zd(n,Pe.memoizedState,e)},useTransition:function(){var e=al(Jr)[0],n=an().memoizedState;return[e,n]},useMutableSource:Ad,useSyncExternalStore:Wd,useId:ep,unstable_isNewReconciler:!1};function dn(e,n){if(e&&e.defaultProps){n=he({},n),e=e.defaultProps;for(var t in e)n[t]===void 0&&(n[t]=e[t]);return n}return n}function Kl(e,n,t,r){n=e.memoizedState,t=t(r,n),t=t==null?n:he({},n,t),e.memoizedState=t,e.lanes===0&&(e.updateQueue.baseState=t)}var _i={isMounted:function(e){return(e=e._reactInternals)?Mt(e)===e:!1},enqueueSetState:function(e,n,t){e=e._reactInternals;var r=Ae(),o=et(e),i=Mn(r,o);i.payload=n,t!=null&&(i.callback=t),n=Jn(e,i,o),n!==null&&(gn(n,e,o,r),Ao(n,e,o))},enqueueReplaceState:function(e,n,t){e=e._reactInternals;var r=Ae(),o=et(e),i=Mn(r,o);i.tag=1,i.payload=n,t!=null&&(i.callback=t),n=Jn(e,i,o),n!==null&&(gn(n,e,o,r),Ao(n,e,o))},enqueueForceUpdate:function(e,n){e=e._reactInternals;var t=Ae(),r=et(e),o=Mn(t,r);o.tag=2,n!=null&&(o.callback=n),n=Jn(e,o,r),n!==null&&(gn(n,e,r,t),Ao(n,e,r))}};function Pu(e,n,t,r,o,i,l){return e=e.stateNode,typeof e.shouldComponentUpdate=="function"?e.shouldComponentUpdate(r,i,l):n.prototype&&n.prototype.isPureReactComponent?!Gr(t,r)||!Gr(o,i):!0}function op(e,n,t){var r=!1,o=ot,i=n.contextType;return typeof i=="object"&&i!==null?i=sn(i):(o=Ve(n)?bt:Oe.current,r=n.contextTypes,i=(r=r!=null)?nr(e,o):ot),n=new n(t,i),e.memoizedState=n.state!==null&&n.state!==void 0?n.state:null,n.updater=_i,e.stateNode=n,n._reactInternals=e,r&&(e=e.stateNode,e.__reactInternalMemoizedUnmaskedChildContext=o,e.__reactInternalMemoizedMaskedChildContext=i),n}function Cu(e,n,t,r){e=n.state,typeof n.componentWillReceiveProps=="function"&&n.componentWillReceiveProps(t,r),typeof n.UNSAFE_componentWillReceiveProps=="function"&&n.UNSAFE_componentWillReceiveProps(t,r),n.state!==e&&_i.enqueueReplaceState(n,n.state,null)}function Ql(e,n,t,r){var o=e.stateNode;o.props=t,o.state=e.memoizedState,o.refs={},Bs(e);var i=n.contextType;typeof i=="object"&&i!==null?o.context=sn(i):(i=Ve(n)?bt:Oe.current,o.context=nr(e,i)),o.state=e.memoizedState,i=n.getDerivedStateFromProps,typeof i=="function"&&(Kl(e,n,i,t),o.state=e.memoizedState),typeof n.getDerivedStateFromProps=="function"||typeof o.getSnapshotBeforeUpdate=="function"||typeof o.UNSAFE_componentWillMount!="function"&&typeof o.componentWillMount!="function"||(n=o.state,typeof o.componentWillMount=="function"&&o.componentWillMount(),typeof o.UNSAFE_componentWillMount=="function"&&o.UNSAFE_componentWillMount(),n!==o.state&&_i.enqueueReplaceState(o,o.state,null),ai(e,t,o,r),o.state=e.memoizedState),typeof o.componentDidMount=="function"&&(e.flags|=4194308)}function ir(e,n){try{var t="",r=n;do t+=Em(r),r=r.return;while(r);var o=t}catch(i){o=`
Error generating stack: `+i.message+`
`+i.stack}return{value:e,source:n,stack:o,digest:null}}function ul(e,n,t){return{value:e,source:null,stack:t??null,digest:n??null}}function Yl(e,n){try{console.error(n.value)}catch(t){setTimeout(function(){throw t})}}var ih=typeof WeakMap=="function"?WeakMap:Map;function ip(e,n,t){t=Mn(-1,t),t.tag=3,t.payload={element:null};var r=n.value;return t.callback=function(){fi||(fi=!0,is=r),Yl(e,n)},t}function lp(e,n,t){t=Mn(-1,t),t.tag=3;var r=e.type.getDerivedStateFromError;if(typeof r=="function"){var o=n.value;t.payload=function(){return r(o)},t.callback=function(){Yl(e,n)}}var i=e.stateNode;return i!==null&&typeof i.componentDidCatch=="function"&&(t.callback=function(){Yl(e,n),typeof r!="function"&&(Zn===null?Zn=new Set([this]):Zn.add(this));var l=n.stack;this.componentDidCatch(n.value,{componentStack:l!==null?l:""})}),t}function _u(e,n,t){var r=e.pingCache;if(r===null){r=e.pingCache=new ih;var o=new Set;r.set(n,o)}else o=r.get(n),o===void 0&&(o=new Set,r.set(n,o));o.has(t)||(o.add(t),e=xh.bind(null,e,n,t),n.then(e,e))}function Tu(e){do{var n;if((n=e.tag===13)&&(n=e.memoizedState,n=n!==null?n.dehydrated!==null:!0),n)return e;e=e.return}while(e!==null);return null}function Ru(e,n,t,r,o){return e.mode&1?(e.flags|=65536,e.lanes=o,e):(e===n?e.flags|=65536:(e.flags|=128,t.flags|=131072,t.flags&=-52805,t.tag===1&&(t.alternate===null?t.tag=17:(n=Mn(-1,1),n.tag=2,Jn(t,n,1))),t.lanes|=1),e)}var lh=jn.ReactCurrentOwner,Ue=!1;function ze(e,n,t,r){n.child=e===null?Ld(n,null,t,r):rr(n,e.child,t,r)}function Mu(e,n,t,r,o){t=t.render;var i=n.ref;return Jt(n,o),r=Qs(e,n,t,r,i,o),t=Ys(),e!==null&&!Ue?(n.updateQueue=e.updateQueue,n.flags&=-2053,e.lanes&=~o,Nn(e,n,o)):(fe&&t&&Os(n),n.flags|=1,ze(e,n,r,o),n.child)}function Iu(e,n,t,r,o){if(e===null){var i=t.type;return typeof i=="function"&&!ia(i)&&i.defaultProps===void 0&&t.compare===null&&t.defaultProps===void 0?(n.tag=15,n.type=i,sp(e,n,i,r,o)):(e=Go(t.type,null,r,n,n.mode,o),e.ref=n.ref,e.return=n,n.child=e)}if(i=e.child,!(e.lanes&o)){var l=i.memoizedProps;if(t=t.compare,t=t!==null?t:Gr,t(l,r)&&e.ref===n.ref)return Nn(e,n,o)}return n.flags|=1,e=nt(i,r),e.ref=n.ref,e.return=n,n.child=e}function sp(e,n,t,r,o){if(e!==null){var i=e.memoizedProps;if(Gr(i,r)&&e.ref===n.ref)if(Ue=!1,n.pendingProps=r=i,(e.lanes&o)!==0)e.flags&131072&&(Ue=!0);else return n.lanes=e.lanes,Nn(e,n,o)}return ql(e,n,t,r,o)}function ap(e,n,t){var r=n.pendingProps,o=r.children,i=e!==null?e.memoizedState:null;if(r.mode==="hidden")if(!(n.mode&1))n.memoizedState={baseLanes:0,cachePool:null,transitions:null},ae(Kt,Qe),Qe|=t;else{if(!(t&1073741824))return e=i!==null?i.baseLanes|t:t,n.lanes=n.childLanes=1073741824,n.memoizedState={baseLanes:e,cachePool:null,transitions:null},n.updateQueue=null,ae(Kt,Qe),Qe|=e,null;n.memoizedState={baseLanes:0,cachePool:null,transitions:null},r=i!==null?i.baseLanes:t,ae(Kt,Qe),Qe|=r}else i!==null?(r=i.baseLanes|t,n.memoizedState=null):r=t,ae(Kt,Qe),Qe|=r;return ze(e,n,o,t),n.child}function up(e,n){var t=n.ref;(e===null&&t!==null||e!==null&&e.ref!==t)&&(n.flags|=512,n.flags|=2097152)}function ql(e,n,t,r,o){var i=Ve(t)?bt:Oe.current;return i=nr(n,i),Jt(n,o),t=Qs(e,n,t,r,i,o),r=Ys(),e!==null&&!Ue?(n.updateQueue=e.updateQueue,n.flags&=-2053,e.lanes&=~o,Nn(e,n,o)):(fe&&r&&Os(n),n.flags|=1,ze(e,n,t,o),n.child)}function $u(e,n,t,r,o){if(Ve(t)){var i=!0;ri(n)}else i=!1;if(Jt(n,o),n.stateNode===null)Fo(e,n),op(n,t,r),Ql(n,t,r,o),r=!0;else if(e===null){var l=n.stateNode,s=n.memoizedProps;l.props=s;var a=l.context,u=t.contextType;typeof u=="object"&&u!==null?u=sn(u):(u=Ve(t)?bt:Oe.current,u=nr(n,u));var d=t.getDerivedStateFromProps,c=typeof d=="function"||typeof l.getSnapshotBeforeUpdate=="function";c||typeof l.UNSAFE_componentWillReceiveProps!="function"&&typeof l.componentWillReceiveProps!="function"||(s!==r||a!==u)&&Cu(n,l,r,u),Fn=!1;var p=n.memoizedState;l.state=p,ai(n,r,l,o),a=n.memoizedState,s!==r||p!==a||Ge.current||Fn?(typeof d=="function"&&(Kl(n,t,d,r),a=n.memoizedState),(s=Fn||Pu(n,t,s,r,p,a,u))?(c||typeof l.UNSAFE_componentWillMount!="function"&&typeof l.componentWillMount!="function"||(typeof l.componentWillMount=="function"&&l.componentWillMount(),typeof l.UNSAFE_componentWillMount=="function"&&l.UNSAFE_componentWillMount()),typeof l.componentDidMount=="function"&&(n.flags|=4194308)):(typeof l.componentDidMount=="function"&&(n.flags|=4194308),n.memoizedProps=r,n.memoizedState=a),l.props=r,l.state=a,l.context=u,r=s):(typeof l.componentDidMount=="function"&&(n.flags|=4194308),r=!1)}else{l=n.stateNode,Dd(e,n),s=n.memoizedProps,u=n.type===n.elementType?s:dn(n.type,s),l.props=u,c=n.pendingProps,p=l.context,a=t.contextType,typeof a=="object"&&a!==null?a=sn(a):(a=Ve(t)?bt:Oe.current,a=nr(n,a));var y=t.getDerivedStateFromProps;(d=typeof y=="function"||typeof l.getSnapshotBeforeUpdate=="function")||typeof l.UNSAFE_componentWillReceiveProps!="function"&&typeof l.componentWillReceiveProps!="function"||(s!==c||p!==a)&&Cu(n,l,r,a),Fn=!1,p=n.memoizedState,l.state=p,ai(n,r,l,o);var x=n.memoizedState;s!==c||p!==x||Ge.current||Fn?(typeof y=="function"&&(Kl(n,t,y,r),x=n.memoizedState),(u=Fn||Pu(n,t,u,r,p,x,a)||!1)?(d||typeof l.UNSAFE_componentWillUpdate!="function"&&typeof l.componentWillUpdate!="function"||(typeof l.componentWillUpdate=="function"&&l.componentWillUpdate(r,x,a),typeof l.UNSAFE_componentWillUpdate=="function"&&l.UNSAFE_componentWillUpdate(r,x,a)),typeof l.componentDidUpdate=="function"&&(n.flags|=4),typeof l.getSnapshotBeforeUpdate=="function"&&(n.flags|=1024)):(typeof l.componentDidUpdate!="function"||s===e.memoizedProps&&p===e.memoizedState||(n.flags|=4),typeof l.getSnapshotBeforeUpdate!="function"||s===e.memoizedProps&&p===e.memoizedState||(n.flags|=1024),n.memoizedProps=r,n.memoizedState=x),l.props=r,l.state=x,l.context=a,r=u):(typeof l.componentDidUpdate!="function"||s===e.memoizedProps&&p===e.memoizedState||(n.flags|=4),typeof l.getSnapshotBeforeUpdate!="function"||s===e.memoizedProps&&p===e.memoizedState||(n.flags|=1024),r=!1)}return Xl(e,n,t,r,i,o)}function Xl(e,n,t,r,o,i){up(e,n);var l=(n.flags&128)!==0;if(!r&&!l)return o&&hu(n,t,!1),Nn(e,n,i);r=n.stateNode,lh.current=n;var s=l&&typeof t.getDerivedStateFromError!="function"?null:r.render();return n.flags|=1,e!==null&&l?(n.child=rr(n,e.child,null,i),n.child=rr(n,null,s,i)):ze(e,n,s,i),n.memoizedState=r.state,o&&hu(n,t,!0),n.child}function cp(e){var n=e.stateNode;n.pendingContext?gu(e,n.pendingContext,n.pendingContext!==n.context):n.context&&gu(e,n.context,!1),Us(e,n.containerInfo)}function Eu(e,n,t,r,o){return tr(),zs(o),n.flags|=256,ze(e,n,t,r),n.child}var Jl={dehydrated:null,treeContext:null,retryLane:0};function Zl(e){return{baseLanes:e,cachePool:null,transitions:null}}function dp(e,n,t){var r=n.pendingProps,o=me.current,i=!1,l=(n.flags&128)!==0,s;if((s=l)||(s=e!==null&&e.memoizedState===null?!1:(o&2)!==0),s?(i=!0,n.flags&=-129):(e===null||e.memoizedState!==null)&&(o|=1),ae(me,o&1),e===null)return Gl(n),e=n.memoizedState,e!==null&&(e=e.dehydrated,e!==null)?(n.mode&1?e.data==="$!"?n.lanes=8:n.lanes=1073741824:n.lanes=1,null):(l=r.children,e=r.fallback,i?(r=n.mode,i=n.child,l={mode:"hidden",children:l},!(r&1)&&i!==null?(i.childLanes=0,i.pendingProps=l):i=Mi(l,r,0,null),e=St(e,r,t,null),i.return=n,e.return=n,i.sibling=e,n.child=i,n.child.memoizedState=Zl(t),n.memoizedState=Jl,e):Js(n,l));if(o=e.memoizedState,o!==null&&(s=o.dehydrated,s!==null))return sh(e,n,l,r,s,o,t);if(i){i=r.fallback,l=n.mode,o=e.child,s=o.sibling;var a={mode:"hidden",children:r.children};return!(l&1)&&n.child!==o?(r=n.child,r.childLanes=0,r.pendingProps=a,n.deletions=null):(r=nt(o,a),r.subtreeFlags=o.subtreeFlags&14680064),s!==null?i=nt(s,i):(i=St(i,l,t,null),i.flags|=2),i.return=n,r.return=n,r.sibling=i,n.child=r,r=i,i=n.child,l=e.child.memoizedState,l=l===null?Zl(t):{baseLanes:l.baseLanes|t,cachePool:null,transitions:l.transitions},i.memoizedState=l,i.childLanes=e.childLanes&~t,n.memoizedState=Jl,r}return i=e.child,e=i.sibling,r=nt(i,{mode:"visible",children:r.children}),!(n.mode&1)&&(r.lanes=t),r.return=n,r.sibling=null,e!==null&&(t=n.deletions,t===null?(n.deletions=[e],n.flags|=16):t.push(e)),n.child=r,n.memoizedState=null,r}function Js(e,n){return n=Mi({mode:"visible",children:n},e.mode,0,null),n.return=e,e.child=n}function _o(e,n,t,r){return r!==null&&zs(r),rr(n,e.child,null,t),e=Js(n,n.pendingProps.children),e.flags|=2,n.memoizedState=null,e}function sh(e,n,t,r,o,i,l){if(t)return n.flags&256?(n.flags&=-257,r=ul(Error(k(422))),_o(e,n,l,r)):n.memoizedState!==null?(n.child=e.child,n.flags|=128,null):(i=r.fallback,o=n.mode,r=Mi({mode:"visible",children:r.children},o,0,null),i=St(i,o,l,null),i.flags|=2,r.return=n,i.return=n,r.sibling=i,n.child=r,n.mode&1&&rr(n,e.child,null,l),n.child.memoizedState=Zl(l),n.memoizedState=Jl,i);if(!(n.mode&1))return _o(e,n,l,null);if(o.data==="$!"){if(r=o.nextSibling&&o.nextSibling.dataset,r)var s=r.dgst;return r=s,i=Error(k(419)),r=ul(i,r,void 0),_o(e,n,l,r)}if(s=(l&e.childLanes)!==0,Ue||s){if(r=Re,r!==null){switch(l&-l){case 4:o=2;break;case 16:o=8;break;case 64:case 128:case 256:case 512:case 1024:case 2048:case 4096:case 8192:case 16384:case 32768:case 65536:case 131072:case 262144:case 524288:case 1048576:case 2097152:case 4194304:case 8388608:case 16777216:case 33554432:case 67108864:o=32;break;case 536870912:o=268435456;break;default:o=0}o=o&(r.suspendedLanes|l)?0:o,o!==0&&o!==i.retryLane&&(i.retryLane=o,En(e,o),gn(r,e,o,-1))}return oa(),r=ul(Error(k(421))),_o(e,n,l,r)}return o.data==="$?"?(n.flags|=128,n.child=e.child,n=wh.bind(null,e),o._reactRetry=n,null):(e=i.treeContext,Ye=Xn(o.nextSibling),qe=n,fe=!0,fn=null,e!==null&&(tn[rn++]=Tn,tn[rn++]=Rn,tn[rn++]=kt,Tn=e.id,Rn=e.overflow,kt=n),n=Js(n,r.children),n.flags|=4096,n)}function Nu(e,n,t){e.lanes|=n;var r=e.alternate;r!==null&&(r.lanes|=n),Vl(e.return,n,t)}function cl(e,n,t,r,o){var i=e.memoizedState;i===null?e.memoizedState={isBackwards:n,rendering:null,renderingStartTime:0,last:r,tail:t,tailMode:o}:(i.isBackwards=n,i.rendering=null,i.renderingStartTime=0,i.last=r,i.tail=t,i.tailMode=o)}function pp(e,n,t){var r=n.pendingProps,o=r.revealOrder,i=r.tail;if(ze(e,n,r.children,t),r=me.current,r&2)r=r&1|2,n.flags|=128;else{if(e!==null&&e.flags&128)e:for(e=n.child;e!==null;){if(e.tag===13)e.memoizedState!==null&&Nu(e,t,n);else if(e.tag===19)Nu(e,t,n);else if(e.child!==null){e.child.return=e,e=e.child;continue}if(e===n)break e;for(;e.sibling===null;){if(e.return===null||e.return===n)break e;e=e.return}e.sibling.return=e.return,e=e.sibling}r&=1}if(ae(me,r),!(n.mode&1))n.memoizedState=null;else switch(o){case"forwards":for(t=n.child,o=null;t!==null;)e=t.alternate,e!==null&&ui(e)===null&&(o=t),t=t.sibling;t=o,t===null?(o=n.child,n.child=null):(o=t.sibling,t.sibling=null),cl(n,!1,o,t,i);break;case"backwards":for(t=null,o=n.child,n.child=null;o!==null;){if(e=o.alternate,e!==null&&ui(e)===null){n.child=o;break}e=o.sibling,o.sibling=t,t=o,o=e}cl(n,!0,t,null,i);break;case"together":cl(n,!1,null,null,void 0);break;default:n.memoizedState=null}return n.child}function Fo(e,n){!(n.mode&1)&&e!==null&&(e.alternate=null,n.alternate=null,n.flags|=2)}function Nn(e,n,t){if(e!==null&&(n.dependencies=e.dependencies),Ct|=n.lanes,!(t&n.childLanes))return null;if(e!==null&&n.child!==e.child)throw Error(k(153));if(n.child!==null){for(e=n.child,t=nt(e,e.pendingProps),n.child=t,t.return=n;e.sibling!==null;)e=e.sibling,t=t.sibling=nt(e,e.pendingProps),t.return=n;t.sibling=null}return n.child}function ah(e,n,t){switch(n.tag){case 3:cp(n),tr();break;case 5:zd(n);break;case 1:Ve(n.type)&&ri(n);break;case 4:Us(n,n.stateNode.containerInfo);break;case 10:var r=n.type._context,o=n.memoizedProps.value;ae(li,r._currentValue),r._currentValue=o;break;case 13:if(r=n.memoizedState,r!==null)return r.dehydrated!==null?(ae(me,me.current&1),n.flags|=128,null):t&n.child.childLanes?dp(e,n,t):(ae(me,me.current&1),e=Nn(e,n,t),e!==null?e.sibling:null);ae(me,me.current&1);break;case 19:if(r=(t&n.childLanes)!==0,e.flags&128){if(r)return pp(e,n,t);n.flags|=128}if(o=n.memoizedState,o!==null&&(o.rendering=null,o.tail=null,o.lastEffect=null),ae(me,me.current),r)break;return null;case 22:case 23:return n.lanes=0,ap(e,n,t)}return Nn(e,n,t)}var fp,es,mp,gp;fp=function(e,n){for(var t=n.child;t!==null;){if(t.tag===5||t.tag===6)e.appendChild(t.stateNode);else if(t.tag!==4&&t.child!==null){t.child.return=t,t=t.child;continue}if(t===n)break;for(;t.sibling===null;){if(t.return===null||t.return===n)return;t=t.return}t.sibling.return=t.return,t=t.sibling}};es=function(){};mp=function(e,n,t,r){var o=e.memoizedProps;if(o!==r){e=n.stateNode,xt(Sn.current);var i=null;switch(t){case"input":o=bl(e,o),r=bl(e,r),i=[];break;case"select":o=he({},o,{value:void 0}),r=he({},r,{value:void 0}),i=[];break;case"textarea":o=Cl(e,o),r=Cl(e,r),i=[];break;default:typeof o.onClick!="function"&&typeof r.onClick=="function"&&(e.onclick=ni)}Tl(t,r);var l;t=null;for(u in o)if(!r.hasOwnProperty(u)&&o.hasOwnProperty(u)&&o[u]!=null)if(u==="style"){var s=o[u];for(l in s)s.hasOwnProperty(l)&&(t||(t={}),t[l]="")}else u!=="dangerouslySetInnerHTML"&&u!=="children"&&u!=="suppressContentEditableWarning"&&u!=="suppressHydrationWarning"&&u!=="autoFocus"&&(zr.hasOwnProperty(u)?i||(i=[]):(i=i||[]).push(u,null));for(u in r){var a=r[u];if(s=o!=null?o[u]:void 0,r.hasOwnProperty(u)&&a!==s&&(a!=null||s!=null))if(u==="style")if(s){for(l in s)!s.hasOwnProperty(l)||a&&a.hasOwnProperty(l)||(t||(t={}),t[l]="");for(l in a)a.hasOwnProperty(l)&&s[l]!==a[l]&&(t||(t={}),t[l]=a[l])}else t||(i||(i=[]),i.push(u,t)),t=a;else u==="dangerouslySetInnerHTML"?(a=a?a.__html:void 0,s=s?s.__html:void 0,a!=null&&s!==a&&(i=i||[]).push(u,a)):u==="children"?typeof a!="string"&&typeof a!="number"||(i=i||[]).push(u,""+a):u!=="suppressContentEditableWarning"&&u!=="suppressHydrationWarning"&&(zr.hasOwnProperty(u)?(a!=null&&u==="onScroll"&&ce("scroll",e),i||s===a||(i=[])):(i=i||[]).push(u,a))}t&&(i=i||[]).push("style",t);var u=i;(n.updateQueue=u)&&(n.flags|=4)}};gp=function(e,n,t,r){t!==r&&(n.flags|=4)};function wr(e,n){if(!fe)switch(e.tailMode){case"hidden":n=e.tail;for(var t=null;n!==null;)n.alternate!==null&&(t=n),n=n.sibling;t===null?e.tail=null:t.sibling=null;break;case"collapsed":t=e.tail;for(var r=null;t!==null;)t.alternate!==null&&(r=t),t=t.sibling;r===null?n||e.tail===null?e.tail=null:e.tail.sibling=null:r.sibling=null}}function je(e){var n=e.alternate!==null&&e.alternate.child===e.child,t=0,r=0;if(n)for(var o=e.child;o!==null;)t|=o.lanes|o.childLanes,r|=o.subtreeFlags&14680064,r|=o.flags&14680064,o.return=e,o=o.sibling;else for(o=e.child;o!==null;)t|=o.lanes|o.childLanes,r|=o.subtreeFlags,r|=o.flags,o.return=e,o=o.sibling;return e.subtreeFlags|=r,e.childLanes=t,n}function uh(e,n,t){var r=n.pendingProps;switch(Ds(n),n.tag){case 2:case 16:case 15:case 0:case 11:case 7:case 8:case 12:case 9:case 14:return je(n),null;case 1:return Ve(n.type)&&ti(),je(n),null;case 3:return r=n.stateNode,or(),de(Ge),de(Oe),Vs(),r.pendingContext&&(r.context=r.pendingContext,r.pendingContext=null),(e===null||e.child===null)&&(Po(n)?n.flags|=4:e===null||e.memoizedState.isDehydrated&&!(n.flags&256)||(n.flags|=1024,fn!==null&&(as(fn),fn=null))),es(e,n),je(n),null;case 5:Gs(n);var o=xt(qr.current);if(t=n.type,e!==null&&n.stateNode!=null)mp(e,n,t,r,o),e.ref!==n.ref&&(n.flags|=512,n.flags|=2097152);else{if(!r){if(n.stateNode===null)throw Error(k(166));return je(n),null}if(e=xt(Sn.current),Po(n)){r=n.stateNode,t=n.type;var i=n.memoizedProps;switch(r[xn]=n,r[Qr]=i,e=(n.mode&1)!==0,t){case"dialog":ce("cancel",r),ce("close",r);break;case"iframe":case"object":case"embed":ce("load",r);break;case"video":case"audio":for(o=0;o<_r.length;o++)ce(_r[o],r);break;case"source":ce("error",r);break;case"img":case"image":case"link":ce("error",r),ce("load",r);break;case"details":ce("toggle",r);break;case"input":Fa(r,i),ce("invalid",r);break;case"select":r._wrapperState={wasMultiple:!!i.multiple},ce("invalid",r);break;case"textarea":Ua(r,i),ce("invalid",r)}Tl(t,i),o=null;for(var l in i)if(i.hasOwnProperty(l)){var s=i[l];l==="children"?typeof s=="string"?r.textContent!==s&&(i.suppressHydrationWarning!==!0&&ko(r.textContent,s,e),o=["children",s]):typeof s=="number"&&r.textContent!==""+s&&(i.suppressHydrationWarning!==!0&&ko(r.textContent,s,e),o=["children",""+s]):zr.hasOwnProperty(l)&&s!=null&&l==="onScroll"&&ce("scroll",r)}switch(t){case"input":go(r),Ba(r,i,!0);break;case"textarea":go(r),Ga(r);break;case"select":case"option":break;default:typeof i.onClick=="function"&&(r.onclick=ni)}r=o,n.updateQueue=r,r!==null&&(n.flags|=4)}else{l=o.nodeType===9?o:o.ownerDocument,e==="http://www.w3.org/1999/xhtml"&&(e=Bc(t)),e==="http://www.w3.org/1999/xhtml"?t==="script"?(e=l.createElement("div"),e.innerHTML="<script><\/script>",e=e.removeChild(e.firstChild)):typeof r.is=="string"?e=l.createElement(t,{is:r.is}):(e=l.createElement(t),t==="select"&&(l=e,r.multiple?l.multiple=!0:r.size&&(l.size=r.size))):e=l.createElementNS(e,t),e[xn]=n,e[Qr]=r,fp(e,n,!1,!1),n.stateNode=e;e:{switch(l=Rl(t,r),t){case"dialog":ce("cancel",e),ce("close",e),o=r;break;case"iframe":case"object":case"embed":ce("load",e),o=r;break;case"video":case"audio":for(o=0;o<_r.length;o++)ce(_r[o],e);o=r;break;case"source":ce("error",e),o=r;break;case"img":case"image":case"link":ce("error",e),ce("load",e),o=r;break;case"details":ce("toggle",e),o=r;break;case"input":Fa(e,r),o=bl(e,r),ce("invalid",e);break;case"option":o=r;break;case"select":e._wrapperState={wasMultiple:!!r.multiple},o=he({},r,{value:void 0}),ce("invalid",e);break;case"textarea":Ua(e,r),o=Cl(e,r),ce("invalid",e);break;default:o=r}Tl(t,o),s=o;for(i in s)if(s.hasOwnProperty(i)){var a=s[i];i==="style"?Vc(e,a):i==="dangerouslySetInnerHTML"?(a=a?a.__html:void 0,a!=null&&Uc(e,a)):i==="children"?typeof a=="string"?(t!=="textarea"||a!=="")&&Ar(e,a):typeof a=="number"&&Ar(e,""+a):i!=="suppressContentEditableWarning"&&i!=="suppressHydrationWarning"&&i!=="autoFocus"&&(zr.hasOwnProperty(i)?a!=null&&i==="onScroll"&&ce("scroll",e):a!=null&&bs(e,i,a,l))}switch(t){case"input":go(e),Ba(e,r,!1);break;case"textarea":go(e),Ga(e);break;case"option":r.value!=null&&e.setAttribute("value",""+rt(r.value));break;case"select":e.multiple=!!r.multiple,i=r.value,i!=null?Qt(e,!!r.multiple,i,!1):r.defaultValue!=null&&Qt(e,!!r.multiple,r.defaultValue,!0);break;default:typeof o.onClick=="function"&&(e.onclick=ni)}switch(t){case"button":case"input":case"select":case"textarea":r=!!r.autoFocus;break e;case"img":r=!0;break e;default:r=!1}}r&&(n.flags|=4)}n.ref!==null&&(n.flags|=512,n.flags|=2097152)}return je(n),null;case 6:if(e&&n.stateNode!=null)gp(e,n,e.memoizedProps,r);else{if(typeof r!="string"&&n.stateNode===null)throw Error(k(166));if(t=xt(qr.current),xt(Sn.current),Po(n)){if(r=n.stateNode,t=n.memoizedProps,r[xn]=n,(i=r.nodeValue!==t)&&(e=qe,e!==null))switch(e.tag){case 3:ko(r.nodeValue,t,(e.mode&1)!==0);break;case 5:e.memoizedProps.suppressHydrationWarning!==!0&&ko(r.nodeValue,t,(e.mode&1)!==0)}i&&(n.flags|=4)}else r=(t.nodeType===9?t:t.ownerDocument).createTextNode(r),r[xn]=n,n.stateNode=r}return je(n),null;case 13:if(de(me),r=n.memoizedState,e===null||e.memoizedState!==null&&e.memoizedState.dehydrated!==null){if(fe&&Ye!==null&&n.mode&1&&!(n.flags&128))Nd(),tr(),n.flags|=98560,i=!1;else if(i=Po(n),r!==null&&r.dehydrated!==null){if(e===null){if(!i)throw Error(k(318));if(i=n.memoizedState,i=i!==null?i.dehydrated:null,!i)throw Error(k(317));i[xn]=n}else tr(),!(n.flags&128)&&(n.memoizedState=null),n.flags|=4;je(n),i=!1}else fn!==null&&(as(fn),fn=null),i=!0;if(!i)return n.flags&65536?n:null}return n.flags&128?(n.lanes=t,n):(r=r!==null,r!==(e!==null&&e.memoizedState!==null)&&r&&(n.child.flags|=8192,n.mode&1&&(e===null||me.current&1?Ce===0&&(Ce=3):oa())),n.updateQueue!==null&&(n.flags|=4),je(n),null);case 4:return or(),es(e,n),e===null&&Vr(n.stateNode.containerInfo),je(n),null;case 10:return Hs(n.type._context),je(n),null;case 17:return Ve(n.type)&&ti(),je(n),null;case 19:if(de(me),i=n.memoizedState,i===null)return je(n),null;if(r=(n.flags&128)!==0,l=i.rendering,l===null)if(r)wr(i,!1);else{if(Ce!==0||e!==null&&e.flags&128)for(e=n.child;e!==null;){if(l=ui(e),l!==null){for(n.flags|=128,wr(i,!1),r=l.updateQueue,r!==null&&(n.updateQueue=r,n.flags|=4),n.subtreeFlags=0,r=t,t=n.child;t!==null;)i=t,e=r,i.flags&=14680066,l=i.alternate,l===null?(i.childLanes=0,i.lanes=e,i.child=null,i.subtreeFlags=0,i.memoizedProps=null,i.memoizedState=null,i.updateQueue=null,i.dependencies=null,i.stateNode=null):(i.childLanes=l.childLanes,i.lanes=l.lanes,i.child=l.child,i.subtreeFlags=0,i.deletions=null,i.memoizedProps=l.memoizedProps,i.memoizedState=l.memoizedState,i.updateQueue=l.updateQueue,i.type=l.type,e=l.dependencies,i.dependencies=e===null?null:{lanes:e.lanes,firstContext:e.firstContext}),t=t.sibling;return ae(me,me.current&1|2),n.child}e=e.sibling}i.tail!==null&&xe()>lr&&(n.flags|=128,r=!0,wr(i,!1),n.lanes=4194304)}else{if(!r)if(e=ui(l),e!==null){if(n.flags|=128,r=!0,t=e.updateQueue,t!==null&&(n.updateQueue=t,n.flags|=4),wr(i,!0),i.tail===null&&i.tailMode==="hidden"&&!l.alternate&&!fe)return je(n),null}else 2*xe()-i.renderingStartTime>lr&&t!==1073741824&&(n.flags|=128,r=!0,wr(i,!1),n.lanes=4194304);i.isBackwards?(l.sibling=n.child,n.child=l):(t=i.last,t!==null?t.sibling=l:n.child=l,i.last=l)}return i.tail!==null?(n=i.tail,i.rendering=n,i.tail=n.sibling,i.renderingStartTime=xe(),n.sibling=null,t=me.current,ae(me,r?t&1|2:t&1),n):(je(n),null);case 22:case 23:return ra(),r=n.memoizedState!==null,e!==null&&e.memoizedState!==null!==r&&(n.flags|=8192),r&&n.mode&1?Qe&1073741824&&(je(n),n.subtreeFlags&6&&(n.flags|=8192)):je(n),null;case 24:return null;case 25:return null}throw Error(k(156,n.tag))}function ch(e,n){switch(Ds(n),n.tag){case 1:return Ve(n.type)&&ti(),e=n.flags,e&65536?(n.flags=e&-65537|128,n):null;case 3:return or(),de(Ge),de(Oe),Vs(),e=n.flags,e&65536&&!(e&128)?(n.flags=e&-65537|128,n):null;case 5:return Gs(n),null;case 13:if(de(me),e=n.memoizedState,e!==null&&e.dehydrated!==null){if(n.alternate===null)throw Error(k(340));tr()}return e=n.flags,e&65536?(n.flags=e&-65537|128,n):null;case 19:return de(me),null;case 4:return or(),null;case 10:return Hs(n.type._context),null;case 22:case 23:return ra(),null;case 24:return null;default:return null}}var To=!1,Le=!1,dh=typeof WeakSet=="function"?WeakSet:Set,N=null;function Vt(e,n){var t=e.ref;if(t!==null)if(typeof t=="function")try{t(null)}catch(r){ve(e,n,r)}else t.current=null}function ns(e,n,t){try{t()}catch(r){ve(e,n,r)}}var ju=!1;function ph(e,n){if(zl=Jo,e=wd(),Ls(e)){if("selectionStart"in e)var t={start:e.selectionStart,end:e.selectionEnd};else e:{t=(t=e.ownerDocument)&&t.defaultView||window;var r=t.getSelection&&t.getSelection();if(r&&r.rangeCount!==0){t=r.anchorNode;var o=r.anchorOffset,i=r.focusNode;r=r.focusOffset;try{t.nodeType,i.nodeType}catch{t=null;break e}var l=0,s=-1,a=-1,u=0,d=0,c=e,p=null;n:for(;;){for(var y;c!==t||o!==0&&c.nodeType!==3||(s=l+o),c!==i||r!==0&&c.nodeType!==3||(a=l+r),c.nodeType===3&&(l+=c.nodeValue.length),(y=c.firstChild)!==null;)p=c,c=y;for(;;){if(c===e)break n;if(p===t&&++u===o&&(s=l),p===i&&++d===r&&(a=l),(y=c.nextSibling)!==null)break;c=p,p=c.parentNode}c=y}t=s===-1||a===-1?null:{start:s,end:a}}else t=null}t=t||{start:0,end:0}}else t=null;for(Al={focusedElem:e,selectionRange:t},Jo=!1,N=n;N!==null;)if(n=N,e=n.child,(n.subtreeFlags&1028)!==0&&e!==null)e.return=n,N=e;else for(;N!==null;){n=N;try{var x=n.alternate;if(n.flags&1024)switch(n.tag){case 0:case 11:case 15:break;case 1:if(x!==null){var w=x.memoizedProps,S=x.memoizedState,g=n.stateNode,m=g.getSnapshotBeforeUpdate(n.elementType===n.type?w:dn(n.type,w),S);g.__reactInternalSnapshotBeforeUpdate=m}break;case 3:var v=n.stateNode.containerInfo;v.nodeType===1?v.textContent="":v.nodeType===9&&v.documentElement&&v.removeChild(v.documentElement);break;case 5:case 6:case 4:case 17:break;default:throw Error(k(163))}}catch(b){ve(n,n.return,b)}if(e=n.sibling,e!==null){e.return=n.return,N=e;break}N=n.return}return x=ju,ju=!1,x}function Lr(e,n,t){var r=n.updateQueue;if(r=r!==null?r.lastEffect:null,r!==null){var o=r=r.next;do{if((o.tag&e)===e){var i=o.destroy;o.destroy=void 0,i!==void 0&&ns(n,t,i)}o=o.next}while(o!==r)}}function Ti(e,n){if(n=n.updateQueue,n=n!==null?n.lastEffect:null,n!==null){var t=n=n.next;do{if((t.tag&e)===e){var r=t.create;t.destroy=r()}t=t.next}while(t!==n)}}function ts(e){var n=e.ref;if(n!==null){var t=e.stateNode;switch(e.tag){case 5:e=t;break;default:e=t}typeof n=="function"?n(e):n.current=e}}function hp(e){var n=e.alternate;n!==null&&(e.alternate=null,hp(n)),e.child=null,e.deletions=null,e.sibling=null,e.tag===5&&(n=e.stateNode,n!==null&&(delete n[xn],delete n[Qr],delete n[Fl],delete n[Qg],delete n[Yg])),e.stateNode=null,e.return=null,e.dependencies=null,e.memoizedProps=null,e.memoizedState=null,e.pendingProps=null,e.stateNode=null,e.updateQueue=null}function yp(e){return e.tag===5||e.tag===3||e.tag===4}function Lu(e){e:for(;;){for(;e.sibling===null;){if(e.return===null||yp(e.return))return null;e=e.return}for(e.sibling.return=e.return,e=e.sibling;e.tag!==5&&e.tag!==6&&e.tag!==18;){if(e.flags&2||e.child===null||e.tag===4)continue e;e.child.return=e,e=e.child}if(!(e.flags&2))return e.stateNode}}function rs(e,n,t){var r=e.tag;if(r===5||r===6)e=e.stateNode,n?t.nodeType===8?t.parentNode.insertBefore(e,n):t.insertBefore(e,n):(t.nodeType===8?(n=t.parentNode,n.insertBefore(e,t)):(n=t,n.appendChild(e)),t=t._reactRootContainer,t!=null||n.onclick!==null||(n.onclick=ni));else if(r!==4&&(e=e.child,e!==null))for(rs(e,n,t),e=e.sibling;e!==null;)rs(e,n,t),e=e.sibling}function os(e,n,t){var r=e.tag;if(r===5||r===6)e=e.stateNode,n?t.insertBefore(e,n):t.appendChild(e);else if(r!==4&&(e=e.child,e!==null))for(os(e,n,t),e=e.sibling;e!==null;)os(e,n,t),e=e.sibling}var Me=null,pn=!1;function Wn(e,n,t){for(t=t.child;t!==null;)vp(e,n,t),t=t.sibling}function vp(e,n,t){if(wn&&typeof wn.onCommitFiberUnmount=="function")try{wn.onCommitFiberUnmount(xi,t)}catch{}switch(t.tag){case 5:Le||Vt(t,n);case 6:var r=Me,o=pn;Me=null,Wn(e,n,t),Me=r,pn=o,Me!==null&&(pn?(e=Me,t=t.stateNode,e.nodeType===8?e.parentNode.removeChild(t):e.removeChild(t)):Me.removeChild(t.stateNode));break;case 18:Me!==null&&(pn?(e=Me,t=t.stateNode,e.nodeType===8?rl(e.parentNode,t):e.nodeType===1&&rl(e,t),Br(e)):rl(Me,t.stateNode));break;case 4:r=Me,o=pn,Me=t.stateNode.containerInfo,pn=!0,Wn(e,n,t),Me=r,pn=o;break;case 0:case 11:case 14:case 15:if(!Le&&(r=t.updateQueue,r!==null&&(r=r.lastEffect,r!==null))){o=r=r.next;do{var i=o,l=i.destroy;i=i.tag,l!==void 0&&(i&2||i&4)&&ns(t,n,l),o=o.next}while(o!==r)}Wn(e,n,t);break;case 1:if(!Le&&(Vt(t,n),r=t.stateNode,typeof r.componentWillUnmount=="function"))try{r.props=t.memoizedProps,r.state=t.memoizedState,r.componentWillUnmount()}catch(s){ve(t,n,s)}Wn(e,n,t);break;case 21:Wn(e,n,t);break;case 22:t.mode&1?(Le=(r=Le)||t.memoizedState!==null,Wn(e,n,t),Le=r):Wn(e,n,t);break;default:Wn(e,n,t)}}function Ou(e){var n=e.updateQueue;if(n!==null){e.updateQueue=null;var t=e.stateNode;t===null&&(t=e.stateNode=new dh),n.forEach(function(r){var o=Sh.bind(null,e,r);t.has(r)||(t.add(r),r.then(o,o))})}}function un(e,n){var t=n.deletions;if(t!==null)for(var r=0;r<t.length;r++){var o=t[r];try{var i=e,l=n,s=l;e:for(;s!==null;){switch(s.tag){case 5:Me=s.stateNode,pn=!1;break e;case 3:Me=s.stateNode.containerInfo,pn=!0;break e;case 4:Me=s.stateNode.containerInfo,pn=!0;break e}s=s.return}if(Me===null)throw Error(k(160));vp(i,l,o),Me=null,pn=!1;var a=o.alternate;a!==null&&(a.return=null),o.return=null}catch(u){ve(o,n,u)}}if(n.subtreeFlags&12854)for(n=n.child;n!==null;)xp(n,e),n=n.sibling}function xp(e,n){var t=e.alternate,r=e.flags;switch(e.tag){case 0:case 11:case 14:case 15:if(un(n,e),yn(e),r&4){try{Lr(3,e,e.return),Ti(3,e)}catch(w){ve(e,e.return,w)}try{Lr(5,e,e.return)}catch(w){ve(e,e.return,w)}}break;case 1:un(n,e),yn(e),r&512&&t!==null&&Vt(t,t.return);break;case 5:if(un(n,e),yn(e),r&512&&t!==null&&Vt(t,t.return),e.flags&32){var o=e.stateNode;try{Ar(o,"")}catch(w){ve(e,e.return,w)}}if(r&4&&(o=e.stateNode,o!=null)){var i=e.memoizedProps,l=t!==null?t.memoizedProps:i,s=e.type,a=e.updateQueue;if(e.updateQueue=null,a!==null)try{s==="input"&&i.type==="radio"&&i.name!=null&&Hc(o,i),Rl(s,l);var u=Rl(s,i);for(l=0;l<a.length;l+=2){var d=a[l],c=a[l+1];d==="style"?Vc(o,c):d==="dangerouslySetInnerHTML"?Uc(o,c):d==="children"?Ar(o,c):bs(o,d,c,u)}switch(s){case"input":kl(o,i);break;case"textarea":Fc(o,i);break;case"select":var p=o._wrapperState.wasMultiple;o._wrapperState.wasMultiple=!!i.multiple;var y=i.value;y!=null?Qt(o,!!i.multiple,y,!1):p!==!!i.multiple&&(i.defaultValue!=null?Qt(o,!!i.multiple,i.defaultValue,!0):Qt(o,!!i.multiple,i.multiple?[]:"",!1))}o[Qr]=i}catch(w){ve(e,e.return,w)}}break;case 6:if(un(n,e),yn(e),r&4){if(e.stateNode===null)throw Error(k(162));o=e.stateNode,i=e.memoizedProps;try{o.nodeValue=i}catch(w){ve(e,e.return,w)}}break;case 3:if(un(n,e),yn(e),r&4&&t!==null&&t.memoizedState.isDehydrated)try{Br(n.containerInfo)}catch(w){ve(e,e.return,w)}break;case 4:un(n,e),yn(e);break;case 13:un(n,e),yn(e),o=e.child,o.flags&8192&&(i=o.memoizedState!==null,o.stateNode.isHidden=i,!i||o.alternate!==null&&o.alternate.memoizedState!==null||(na=xe())),r&4&&Ou(e);break;case 22:if(d=t!==null&&t.memoizedState!==null,e.mode&1?(Le=(u=Le)||d,un(n,e),Le=u):un(n,e),yn(e),r&8192){if(u=e.memoizedState!==null,(e.stateNode.isHidden=u)&&!d&&e.mode&1)for(N=e,d=e.child;d!==null;){for(c=N=d;N!==null;){switch(p=N,y=p.child,p.tag){case 0:case 11:case 14:case 15:Lr(4,p,p.return);break;case 1:Vt(p,p.return);var x=p.stateNode;if(typeof x.componentWillUnmount=="function"){r=p,t=p.return;try{n=r,x.props=n.memoizedProps,x.state=n.memoizedState,x.componentWillUnmount()}catch(w){ve(r,t,w)}}break;case 5:Vt(p,p.return);break;case 22:if(p.memoizedState!==null){zu(c);continue}}y!==null?(y.return=p,N=y):zu(c)}d=d.sibling}e:for(d=null,c=e;;){if(c.tag===5){if(d===null){d=c;try{o=c.stateNode,u?(i=o.style,typeof i.setProperty=="function"?i.setProperty("display","none","important"):i.display="none"):(s=c.stateNode,a=c.memoizedProps.style,l=a!=null&&a.hasOwnProperty("display")?a.display:null,s.style.display=Gc("display",l))}catch(w){ve(e,e.return,w)}}}else if(c.tag===6){if(d===null)try{c.stateNode.nodeValue=u?"":c.memoizedProps}catch(w){ve(e,e.return,w)}}else if((c.tag!==22&&c.tag!==23||c.memoizedState===null||c===e)&&c.child!==null){c.child.return=c,c=c.child;continue}if(c===e)break e;for(;c.sibling===null;){if(c.return===null||c.return===e)break e;d===c&&(d=null),c=c.return}d===c&&(d=null),c.sibling.return=c.return,c=c.sibling}}break;case 19:un(n,e),yn(e),r&4&&Ou(e);break;case 21:break;default:un(n,e),yn(e)}}function yn(e){var n=e.flags;if(n&2){try{e:{for(var t=e.return;t!==null;){if(yp(t)){var r=t;break e}t=t.return}throw Error(k(160))}switch(r.tag){case 5:var o=r.stateNode;r.flags&32&&(Ar(o,""),r.flags&=-33);var i=Lu(e);os(e,i,o);break;case 3:case 4:var l=r.stateNode.containerInfo,s=Lu(e);rs(e,s,l);break;default:throw Error(k(161))}}catch(a){ve(e,e.return,a)}e.flags&=-3}n&4096&&(e.flags&=-4097)}function fh(e,n,t){N=e,wp(e)}function wp(e,n,t){for(var r=(e.mode&1)!==0;N!==null;){var o=N,i=o.child;if(o.tag===22&&r){var l=o.memoizedState!==null||To;if(!l){var s=o.alternate,a=s!==null&&s.memoizedState!==null||Le;s=To;var u=Le;if(To=l,(Le=a)&&!u)for(N=o;N!==null;)l=N,a=l.child,l.tag===22&&l.memoizedState!==null?Au(o):a!==null?(a.return=l,N=a):Au(o);for(;i!==null;)N=i,wp(i),i=i.sibling;N=o,To=s,Le=u}Du(e)}else o.subtreeFlags&8772&&i!==null?(i.return=o,N=i):Du(e)}}function Du(e){for(;N!==null;){var n=N;if(n.flags&8772){var t=n.alternate;try{if(n.flags&8772)switch(n.tag){case 0:case 11:case 15:Le||Ti(5,n);break;case 1:var r=n.stateNode;if(n.flags&4&&!Le)if(t===null)r.componentDidMount();else{var o=n.elementType===n.type?t.memoizedProps:dn(n.type,t.memoizedProps);r.componentDidUpdate(o,t.memoizedState,r.__reactInternalSnapshotBeforeUpdate)}var i=n.updateQueue;i!==null&&Su(n,i,r);break;case 3:var l=n.updateQueue;if(l!==null){if(t=null,n.child!==null)switch(n.child.tag){case 5:t=n.child.stateNode;break;case 1:t=n.child.stateNode}Su(n,l,t)}break;case 5:var s=n.stateNode;if(t===null&&n.flags&4){t=s;var a=n.memoizedProps;switch(n.type){case"button":case"input":case"select":case"textarea":a.autoFocus&&t.focus();break;case"img":a.src&&(t.src=a.src)}}break;case 6:break;case 4:break;case 12:break;case 13:if(n.memoizedState===null){var u=n.alternate;if(u!==null){var d=u.memoizedState;if(d!==null){var c=d.dehydrated;c!==null&&Br(c)}}}break;case 19:case 17:case 21:case 22:case 23:case 25:break;default:throw Error(k(163))}Le||n.flags&512&&ts(n)}catch(p){ve(n,n.return,p)}}if(n===e){N=null;break}if(t=n.sibling,t!==null){t.return=n.return,N=t;break}N=n.return}}function zu(e){for(;N!==null;){var n=N;if(n===e){N=null;break}var t=n.sibling;if(t!==null){t.return=n.return,N=t;break}N=n.return}}function Au(e){for(;N!==null;){var n=N;try{switch(n.tag){case 0:case 11:case 15:var t=n.return;try{Ti(4,n)}catch(a){ve(n,t,a)}break;case 1:var r=n.stateNode;if(typeof r.componentDidMount=="function"){var o=n.return;try{r.componentDidMount()}catch(a){ve(n,o,a)}}var i=n.return;try{ts(n)}catch(a){ve(n,i,a)}break;case 5:var l=n.return;try{ts(n)}catch(a){ve(n,l,a)}}}catch(a){ve(n,n.return,a)}if(n===e){N=null;break}var s=n.sibling;if(s!==null){s.return=n.return,N=s;break}N=n.return}}var mh=Math.ceil,pi=jn.ReactCurrentDispatcher,Zs=jn.ReactCurrentOwner,ln=jn.ReactCurrentBatchConfig,J=0,Re=null,Se=null,Ie=0,Qe=0,Kt=lt(0),Ce=0,eo=null,Ct=0,Ri=0,ea=0,Or=null,Be=null,na=0,lr=1/0,Cn=null,fi=!1,is=null,Zn=null,Ro=!1,Vn=null,mi=0,Dr=0,ls=null,Bo=-1,Uo=0;function Ae(){return J&6?xe():Bo!==-1?Bo:Bo=xe()}function et(e){return e.mode&1?J&2&&Ie!==0?Ie&-Ie:Xg.transition!==null?(Uo===0&&(Uo=od()),Uo):(e=re,e!==0||(e=window.event,e=e===void 0?16:dd(e.type)),e):1}function gn(e,n,t,r){if(50<Dr)throw Dr=0,ls=null,Error(k(185));oo(e,t,r),(!(J&2)||e!==Re)&&(e===Re&&(!(J&2)&&(Ri|=t),Ce===4&&Un(e,Ie)),Ke(e,r),t===1&&J===0&&!(n.mode&1)&&(lr=xe()+500,Pi&&st()))}function Ke(e,n){var t=e.callbackNode;Xm(e,n);var r=Xo(e,e===Re?Ie:0);if(r===0)t!==null&&Qa(t),e.callbackNode=null,e.callbackPriority=0;else if(n=r&-r,e.callbackPriority!==n){if(t!=null&&Qa(t),n===1)e.tag===0?qg(Wu.bind(null,e)):Id(Wu.bind(null,e)),Vg(function(){!(J&6)&&st()}),t=null;else{switch(id(r)){case 1:t=Ts;break;case 4:t=td;break;case 16:t=qo;break;case 536870912:t=rd;break;default:t=qo}t=Rp(t,Sp.bind(null,e))}e.callbackPriority=n,e.callbackNode=t}}function Sp(e,n){if(Bo=-1,Uo=0,J&6)throw Error(k(327));var t=e.callbackNode;if(Zt()&&e.callbackNode!==t)return null;var r=Xo(e,e===Re?Ie:0);if(r===0)return null;if(r&30||r&e.expiredLanes||n)n=gi(e,r);else{n=r;var o=J;J|=2;var i=kp();(Re!==e||Ie!==n)&&(Cn=null,lr=xe()+500,wt(e,n));do try{yh();break}catch(s){bp(e,s)}while(!0);Ws(),pi.current=i,J=o,Se!==null?n=0:(Re=null,Ie=0,n=Ce)}if(n!==0){if(n===2&&(o=Nl(e),o!==0&&(r=o,n=ss(e,o))),n===1)throw t=eo,wt(e,0),Un(e,r),Ke(e,xe()),t;if(n===6)Un(e,r);else{if(o=e.current.alternate,!(r&30)&&!gh(o)&&(n=gi(e,r),n===2&&(i=Nl(e),i!==0&&(r=i,n=ss(e,i))),n===1))throw t=eo,wt(e,0),Un(e,r),Ke(e,xe()),t;switch(e.finishedWork=o,e.finishedLanes=r,n){case 0:case 1:throw Error(k(345));case 2:ht(e,Be,Cn);break;case 3:if(Un(e,r),(r&130023424)===r&&(n=na+500-xe(),10<n)){if(Xo(e,0)!==0)break;if(o=e.suspendedLanes,(o&r)!==r){Ae(),e.pingedLanes|=e.suspendedLanes&o;break}e.timeoutHandle=Hl(ht.bind(null,e,Be,Cn),n);break}ht(e,Be,Cn);break;case 4:if(Un(e,r),(r&4194240)===r)break;for(n=e.eventTimes,o=-1;0<r;){var l=31-mn(r);i=1<<l,l=n[l],l>o&&(o=l),r&=~i}if(r=o,r=xe()-r,r=(120>r?120:480>r?480:1080>r?1080:1920>r?1920:3e3>r?3e3:4320>r?4320:1960*mh(r/1960))-r,10<r){e.timeoutHandle=Hl(ht.bind(null,e,Be,Cn),r);break}ht(e,Be,Cn);break;case 5:ht(e,Be,Cn);break;default:throw Error(k(329))}}}return Ke(e,xe()),e.callbackNode===t?Sp.bind(null,e):null}function ss(e,n){var t=Or;return e.current.memoizedState.isDehydrated&&(wt(e,n).flags|=256),e=gi(e,n),e!==2&&(n=Be,Be=t,n!==null&&as(n)),e}function as(e){Be===null?Be=e:Be.push.apply(Be,e)}function gh(e){for(var n=e;;){if(n.flags&16384){var t=n.updateQueue;if(t!==null&&(t=t.stores,t!==null))for(var r=0;r<t.length;r++){var o=t[r],i=o.getSnapshot;o=o.value;try{if(!hn(i(),o))return!1}catch{return!1}}}if(t=n.child,n.subtreeFlags&16384&&t!==null)t.return=n,n=t;else{if(n===e)break;for(;n.sibling===null;){if(n.return===null||n.return===e)return!0;n=n.return}n.sibling.return=n.return,n=n.sibling}}return!0}function Un(e,n){for(n&=~ea,n&=~Ri,e.suspendedLanes|=n,e.pingedLanes&=~n,e=e.expirationTimes;0<n;){var t=31-mn(n),r=1<<t;e[t]=-1,n&=~r}}function Wu(e){if(J&6)throw Error(k(327));Zt();var n=Xo(e,0);if(!(n&1))return Ke(e,xe()),null;var t=gi(e,n);if(e.tag!==0&&t===2){var r=Nl(e);r!==0&&(n=r,t=ss(e,r))}if(t===1)throw t=eo,wt(e,0),Un(e,n),Ke(e,xe()),t;if(t===6)throw Error(k(345));return e.finishedWork=e.current.alternate,e.finishedLanes=n,ht(e,Be,Cn),Ke(e,xe()),null}function ta(e,n){var t=J;J|=1;try{return e(n)}finally{J=t,J===0&&(lr=xe()+500,Pi&&st())}}function _t(e){Vn!==null&&Vn.tag===0&&!(J&6)&&Zt();var n=J;J|=1;var t=ln.transition,r=re;try{if(ln.transition=null,re=1,e)return e()}finally{re=r,ln.transition=t,J=n,!(J&6)&&st()}}function ra(){Qe=Kt.current,de(Kt)}function wt(e,n){e.finishedWork=null,e.finishedLanes=0;var t=e.timeoutHandle;if(t!==-1&&(e.timeoutHandle=-1,Gg(t)),Se!==null)for(t=Se.return;t!==null;){var r=t;switch(Ds(r),r.tag){case 1:r=r.type.childContextTypes,r!=null&&ti();break;case 3:or(),de(Ge),de(Oe),Vs();break;case 5:Gs(r);break;case 4:or();break;case 13:de(me);break;case 19:de(me);break;case 10:Hs(r.type._context);break;case 22:case 23:ra()}t=t.return}if(Re=e,Se=e=nt(e.current,null),Ie=Qe=n,Ce=0,eo=null,ea=Ri=Ct=0,Be=Or=null,vt!==null){for(n=0;n<vt.length;n++)if(t=vt[n],r=t.interleaved,r!==null){t.interleaved=null;var o=r.next,i=t.pending;if(i!==null){var l=i.next;i.next=o,r.next=l}t.pending=r}vt=null}return e}function bp(e,n){do{var t=Se;try{if(Ws(),Wo.current=di,ci){for(var r=ge.memoizedState;r!==null;){var o=r.queue;o!==null&&(o.pending=null),r=r.next}ci=!1}if(Pt=0,Te=Pe=ge=null,jr=!1,Xr=0,Zs.current=null,t===null||t.return===null){Ce=1,eo=n,Se=null;break}e:{var i=e,l=t.return,s=t,a=n;if(n=Ie,s.flags|=32768,a!==null&&typeof a=="object"&&typeof a.then=="function"){var u=a,d=s,c=d.tag;if(!(d.mode&1)&&(c===0||c===11||c===15)){var p=d.alternate;p?(d.updateQueue=p.updateQueue,d.memoizedState=p.memoizedState,d.lanes=p.lanes):(d.updateQueue=null,d.memoizedState=null)}var y=Tu(l);if(y!==null){y.flags&=-257,Ru(y,l,s,i,n),y.mode&1&&_u(i,u,n),n=y,a=u;var x=n.updateQueue;if(x===null){var w=new Set;w.add(a),n.updateQueue=w}else x.add(a);break e}else{if(!(n&1)){_u(i,u,n),oa();break e}a=Error(k(426))}}else if(fe&&s.mode&1){var S=Tu(l);if(S!==null){!(S.flags&65536)&&(S.flags|=256),Ru(S,l,s,i,n),zs(ir(a,s));break e}}i=a=ir(a,s),Ce!==4&&(Ce=2),Or===null?Or=[i]:Or.push(i),i=l;do{switch(i.tag){case 3:i.flags|=65536,n&=-n,i.lanes|=n;var g=ip(i,a,n);wu(i,g);break e;case 1:s=a;var m=i.type,v=i.stateNode;if(!(i.flags&128)&&(typeof m.getDerivedStateFromError=="function"||v!==null&&typeof v.componentDidCatch=="function"&&(Zn===null||!Zn.has(v)))){i.flags|=65536,n&=-n,i.lanes|=n;var b=lp(i,s,n);wu(i,b);break e}}i=i.return}while(i!==null)}Cp(t)}catch(P){n=P,Se===t&&t!==null&&(Se=t=t.return);continue}break}while(!0)}function kp(){var e=pi.current;return pi.current=di,e===null?di:e}function oa(){(Ce===0||Ce===3||Ce===2)&&(Ce=4),Re===null||!(Ct&268435455)&&!(Ri&268435455)||Un(Re,Ie)}function gi(e,n){var t=J;J|=2;var r=kp();(Re!==e||Ie!==n)&&(Cn=null,wt(e,n));do try{hh();break}catch(o){bp(e,o)}while(!0);if(Ws(),J=t,pi.current=r,Se!==null)throw Error(k(261));return Re=null,Ie=0,Ce}function hh(){for(;Se!==null;)Pp(Se)}function yh(){for(;Se!==null&&!Fm();)Pp(Se)}function Pp(e){var n=Tp(e.alternate,e,Qe);e.memoizedProps=e.pendingProps,n===null?Cp(e):Se=n,Zs.current=null}function Cp(e){var n=e;do{var t=n.alternate;if(e=n.return,n.flags&32768){if(t=ch(t,n),t!==null){t.flags&=32767,Se=t;return}if(e!==null)e.flags|=32768,e.subtreeFlags=0,e.deletions=null;else{Ce=6,Se=null;return}}else if(t=uh(t,n,Qe),t!==null){Se=t;return}if(n=n.sibling,n!==null){Se=n;return}Se=n=e}while(n!==null);Ce===0&&(Ce=5)}function ht(e,n,t){var r=re,o=ln.transition;try{ln.transition=null,re=1,vh(e,n,t,r)}finally{ln.transition=o,re=r}return null}function vh(e,n,t,r){do Zt();while(Vn!==null);if(J&6)throw Error(k(327));t=e.finishedWork;var o=e.finishedLanes;if(t===null)return null;if(e.finishedWork=null,e.finishedLanes=0,t===e.current)throw Error(k(177));e.callbackNode=null,e.callbackPriority=0;var i=t.lanes|t.childLanes;if(Jm(e,i),e===Re&&(Se=Re=null,Ie=0),!(t.subtreeFlags&2064)&&!(t.flags&2064)||Ro||(Ro=!0,Rp(qo,function(){return Zt(),null})),i=(t.flags&15990)!==0,t.subtreeFlags&15990||i){i=ln.transition,ln.transition=null;var l=re;re=1;var s=J;J|=4,Zs.current=null,ph(e,t),xp(t,e),zg(Al),Jo=!!zl,Al=zl=null,e.current=t,fh(t),Bm(),J=s,re=l,ln.transition=i}else e.current=t;if(Ro&&(Ro=!1,Vn=e,mi=o),i=e.pendingLanes,i===0&&(Zn=null),Vm(t.stateNode),Ke(e,xe()),n!==null)for(r=e.onRecoverableError,t=0;t<n.length;t++)o=n[t],r(o.value,{componentStack:o.stack,digest:o.digest});if(fi)throw fi=!1,e=is,is=null,e;return mi&1&&e.tag!==0&&Zt(),i=e.pendingLanes,i&1?e===ls?Dr++:(Dr=0,ls=e):Dr=0,st(),null}function Zt(){if(Vn!==null){var e=id(mi),n=ln.transition,t=re;try{if(ln.transition=null,re=16>e?16:e,Vn===null)var r=!1;else{if(e=Vn,Vn=null,mi=0,J&6)throw Error(k(331));var o=J;for(J|=4,N=e.current;N!==null;){var i=N,l=i.child;if(N.flags&16){var s=i.deletions;if(s!==null){for(var a=0;a<s.length;a++){var u=s[a];for(N=u;N!==null;){var d=N;switch(d.tag){case 0:case 11:case 15:Lr(8,d,i)}var c=d.child;if(c!==null)c.return=d,N=c;else for(;N!==null;){d=N;var p=d.sibling,y=d.return;if(hp(d),d===u){N=null;break}if(p!==null){p.return=y,N=p;break}N=y}}}var x=i.alternate;if(x!==null){var w=x.child;if(w!==null){x.child=null;do{var S=w.sibling;w.sibling=null,w=S}while(w!==null)}}N=i}}if(i.subtreeFlags&2064&&l!==null)l.return=i,N=l;else e:for(;N!==null;){if(i=N,i.flags&2048)switch(i.tag){case 0:case 11:case 15:Lr(9,i,i.return)}var g=i.sibling;if(g!==null){g.return=i.return,N=g;break e}N=i.return}}var m=e.current;for(N=m;N!==null;){l=N;var v=l.child;if(l.subtreeFlags&2064&&v!==null)v.return=l,N=v;else e:for(l=m;N!==null;){if(s=N,s.flags&2048)try{switch(s.tag){case 0:case 11:case 15:Ti(9,s)}}catch(P){ve(s,s.return,P)}if(s===l){N=null;break e}var b=s.sibling;if(b!==null){b.return=s.return,N=b;break e}N=s.return}}if(J=o,st(),wn&&typeof wn.onPostCommitFiberRoot=="function")try{wn.onPostCommitFiberRoot(xi,e)}catch{}r=!0}return r}finally{re=t,ln.transition=n}}return!1}function Hu(e,n,t){n=ir(t,n),n=ip(e,n,1),e=Jn(e,n,1),n=Ae(),e!==null&&(oo(e,1,n),Ke(e,n))}function ve(e,n,t){if(e.tag===3)Hu(e,e,t);else for(;n!==null;){if(n.tag===3){Hu(n,e,t);break}else if(n.tag===1){var r=n.stateNode;if(typeof n.type.getDerivedStateFromError=="function"||typeof r.componentDidCatch=="function"&&(Zn===null||!Zn.has(r))){e=ir(t,e),e=lp(n,e,1),n=Jn(n,e,1),e=Ae(),n!==null&&(oo(n,1,e),Ke(n,e));break}}n=n.return}}function xh(e,n,t){var r=e.pingCache;r!==null&&r.delete(n),n=Ae(),e.pingedLanes|=e.suspendedLanes&t,Re===e&&(Ie&t)===t&&(Ce===4||Ce===3&&(Ie&130023424)===Ie&&500>xe()-na?wt(e,0):ea|=t),Ke(e,n)}function _p(e,n){n===0&&(e.mode&1?(n=vo,vo<<=1,!(vo&130023424)&&(vo=4194304)):n=1);var t=Ae();e=En(e,n),e!==null&&(oo(e,n,t),Ke(e,t))}function wh(e){var n=e.memoizedState,t=0;n!==null&&(t=n.retryLane),_p(e,t)}function Sh(e,n){var t=0;switch(e.tag){case 13:var r=e.stateNode,o=e.memoizedState;o!==null&&(t=o.retryLane);break;case 19:r=e.stateNode;break;default:throw Error(k(314))}r!==null&&r.delete(n),_p(e,t)}var Tp;Tp=function(e,n,t){if(e!==null)if(e.memoizedProps!==n.pendingProps||Ge.current)Ue=!0;else{if(!(e.lanes&t)&&!(n.flags&128))return Ue=!1,ah(e,n,t);Ue=!!(e.flags&131072)}else Ue=!1,fe&&n.flags&1048576&&$d(n,ii,n.index);switch(n.lanes=0,n.tag){case 2:var r=n.type;Fo(e,n),e=n.pendingProps;var o=nr(n,Oe.current);Jt(n,t),o=Qs(null,n,r,e,o,t);var i=Ys();return n.flags|=1,typeof o=="object"&&o!==null&&typeof o.render=="function"&&o.$$typeof===void 0?(n.tag=1,n.memoizedState=null,n.updateQueue=null,Ve(r)?(i=!0,ri(n)):i=!1,n.memoizedState=o.state!==null&&o.state!==void 0?o.state:null,Bs(n),o.updater=_i,n.stateNode=o,o._reactInternals=n,Ql(n,r,e,t),n=Xl(null,n,r,!0,i,t)):(n.tag=0,fe&&i&&Os(n),ze(null,n,o,t),n=n.child),n;case 16:r=n.elementType;e:{switch(Fo(e,n),e=n.pendingProps,o=r._init,r=o(r._payload),n.type=r,o=n.tag=kh(r),e=dn(r,e),o){case 0:n=ql(null,n,r,e,t);break e;case 1:n=$u(null,n,r,e,t);break e;case 11:n=Mu(null,n,r,e,t);break e;case 14:n=Iu(null,n,r,dn(r.type,e),t);break e}throw Error(k(306,r,""))}return n;case 0:return r=n.type,o=n.pendingProps,o=n.elementType===r?o:dn(r,o),ql(e,n,r,o,t);case 1:return r=n.type,o=n.pendingProps,o=n.elementType===r?o:dn(r,o),$u(e,n,r,o,t);case 3:e:{if(cp(n),e===null)throw Error(k(387));r=n.pendingProps,i=n.memoizedState,o=i.element,Dd(e,n),ai(n,r,null,t);var l=n.memoizedState;if(r=l.element,i.isDehydrated)if(i={element:r,isDehydrated:!1,cache:l.cache,pendingSuspenseBoundaries:l.pendingSuspenseBoundaries,transitions:l.transitions},n.updateQueue.baseState=i,n.memoizedState=i,n.flags&256){o=ir(Error(k(423)),n),n=Eu(e,n,r,t,o);break e}else if(r!==o){o=ir(Error(k(424)),n),n=Eu(e,n,r,t,o);break e}else for(Ye=Xn(n.stateNode.containerInfo.firstChild),qe=n,fe=!0,fn=null,t=Ld(n,null,r,t),n.child=t;t;)t.flags=t.flags&-3|4096,t=t.sibling;else{if(tr(),r===o){n=Nn(e,n,t);break e}ze(e,n,r,t)}n=n.child}return n;case 5:return zd(n),e===null&&Gl(n),r=n.type,o=n.pendingProps,i=e!==null?e.memoizedProps:null,l=o.children,Wl(r,o)?l=null:i!==null&&Wl(r,i)&&(n.flags|=32),up(e,n),ze(e,n,l,t),n.child;case 6:return e===null&&Gl(n),null;case 13:return dp(e,n,t);case 4:return Us(n,n.stateNode.containerInfo),r=n.pendingProps,e===null?n.child=rr(n,null,r,t):ze(e,n,r,t),n.child;case 11:return r=n.type,o=n.pendingProps,o=n.elementType===r?o:dn(r,o),Mu(e,n,r,o,t);case 7:return ze(e,n,n.pendingProps,t),n.child;case 8:return ze(e,n,n.pendingProps.children,t),n.child;case 12:return ze(e,n,n.pendingProps.children,t),n.child;case 10:e:{if(r=n.type._context,o=n.pendingProps,i=n.memoizedProps,l=o.value,ae(li,r._currentValue),r._currentValue=l,i!==null)if(hn(i.value,l)){if(i.children===o.children&&!Ge.current){n=Nn(e,n,t);break e}}else for(i=n.child,i!==null&&(i.return=n);i!==null;){var s=i.dependencies;if(s!==null){l=i.child;for(var a=s.firstContext;a!==null;){if(a.context===r){if(i.tag===1){a=Mn(-1,t&-t),a.tag=2;var u=i.updateQueue;if(u!==null){u=u.shared;var d=u.pending;d===null?a.next=a:(a.next=d.next,d.next=a),u.pending=a}}i.lanes|=t,a=i.alternate,a!==null&&(a.lanes|=t),Vl(i.return,t,n),s.lanes|=t;break}a=a.next}}else if(i.tag===10)l=i.type===n.type?null:i.child;else if(i.tag===18){if(l=i.return,l===null)throw Error(k(341));l.lanes|=t,s=l.alternate,s!==null&&(s.lanes|=t),Vl(l,t,n),l=i.sibling}else l=i.child;if(l!==null)l.return=i;else for(l=i;l!==null;){if(l===n){l=null;break}if(i=l.sibling,i!==null){i.return=l.return,l=i;break}l=l.return}i=l}ze(e,n,o.children,t),n=n.child}return n;case 9:return o=n.type,r=n.pendingProps.children,Jt(n,t),o=sn(o),r=r(o),n.flags|=1,ze(e,n,r,t),n.child;case 14:return r=n.type,o=dn(r,n.pendingProps),o=dn(r.type,o),Iu(e,n,r,o,t);case 15:return sp(e,n,n.type,n.pendingProps,t);case 17:return r=n.type,o=n.pendingProps,o=n.elementType===r?o:dn(r,o),Fo(e,n),n.tag=1,Ve(r)?(e=!0,ri(n)):e=!1,Jt(n,t),op(n,r,o),Ql(n,r,o,t),Xl(null,n,r,!0,e,t);case 19:return pp(e,n,t);case 22:return ap(e,n,t)}throw Error(k(156,n.tag))};function Rp(e,n){return nd(e,n)}function bh(e,n,t,r){this.tag=e,this.key=t,this.sibling=this.child=this.return=this.stateNode=this.type=this.elementType=null,this.index=0,this.ref=null,this.pendingProps=n,this.dependencies=this.memoizedState=this.updateQueue=this.memoizedProps=null,this.mode=r,this.subtreeFlags=this.flags=0,this.deletions=null,this.childLanes=this.lanes=0,this.alternate=null}function on(e,n,t,r){return new bh(e,n,t,r)}function ia(e){return e=e.prototype,!(!e||!e.isReactComponent)}function kh(e){if(typeof e=="function")return ia(e)?1:0;if(e!=null){if(e=e.$$typeof,e===Ps)return 11;if(e===Cs)return 14}return 2}function nt(e,n){var t=e.alternate;return t===null?(t=on(e.tag,n,e.key,e.mode),t.elementType=e.elementType,t.type=e.type,t.stateNode=e.stateNode,t.alternate=e,e.alternate=t):(t.pendingProps=n,t.type=e.type,t.flags=0,t.subtreeFlags=0,t.deletions=null),t.flags=e.flags&14680064,t.childLanes=e.childLanes,t.lanes=e.lanes,t.child=e.child,t.memoizedProps=e.memoizedProps,t.memoizedState=e.memoizedState,t.updateQueue=e.updateQueue,n=e.dependencies,t.dependencies=n===null?null:{lanes:n.lanes,firstContext:n.firstContext},t.sibling=e.sibling,t.index=e.index,t.ref=e.ref,t}function Go(e,n,t,r,o,i){var l=2;if(r=e,typeof e=="function")ia(e)&&(l=1);else if(typeof e=="string")l=5;else e:switch(e){case Dt:return St(t.children,o,i,n);case ks:l=8,o|=8;break;case vl:return e=on(12,t,n,o|2),e.elementType=vl,e.lanes=i,e;case xl:return e=on(13,t,n,o),e.elementType=xl,e.lanes=i,e;case wl:return e=on(19,t,n,o),e.elementType=wl,e.lanes=i,e;case zc:return Mi(t,o,i,n);default:if(typeof e=="object"&&e!==null)switch(e.$$typeof){case Oc:l=10;break e;case Dc:l=9;break e;case Ps:l=11;break e;case Cs:l=14;break e;case Hn:l=16,r=null;break e}throw Error(k(130,e==null?e:typeof e,""))}return n=on(l,t,n,o),n.elementType=e,n.type=r,n.lanes=i,n}function St(e,n,t,r){return e=on(7,e,r,n),e.lanes=t,e}function Mi(e,n,t,r){return e=on(22,e,r,n),e.elementType=zc,e.lanes=t,e.stateNode={isHidden:!1},e}function dl(e,n,t){return e=on(6,e,null,n),e.lanes=t,e}function pl(e,n,t){return n=on(4,e.children!==null?e.children:[],e.key,n),n.lanes=t,n.stateNode={containerInfo:e.containerInfo,pendingChildren:null,implementation:e.implementation},n}function Ph(e,n,t,r,o){this.tag=n,this.containerInfo=e,this.finishedWork=this.pingCache=this.current=this.pendingChildren=null,this.timeoutHandle=-1,this.callbackNode=this.pendingContext=this.context=null,this.callbackPriority=0,this.eventTimes=Vi(0),this.expirationTimes=Vi(-1),this.entangledLanes=this.finishedLanes=this.mutableReadLanes=this.expiredLanes=this.pingedLanes=this.suspendedLanes=this.pendingLanes=0,this.entanglements=Vi(0),this.identifierPrefix=r,this.onRecoverableError=o,this.mutableSourceEagerHydrationData=null}function la(e,n,t,r,o,i,l,s,a){return e=new Ph(e,n,t,s,a),n===1?(n=1,i===!0&&(n|=8)):n=0,i=on(3,null,null,n),e.current=i,i.stateNode=e,i.memoizedState={element:r,isDehydrated:t,cache:null,transitions:null,pendingSuspenseBoundaries:null},Bs(i),e}function Ch(e,n,t){var r=3<arguments.length&&arguments[3]!==void 0?arguments[3]:null;return{$$typeof:Ot,key:r==null?null:""+r,children:e,containerInfo:n,implementation:t}}function Mp(e){if(!e)return ot;e=e._reactInternals;e:{if(Mt(e)!==e||e.tag!==1)throw Error(k(170));var n=e;do{switch(n.tag){case 3:n=n.stateNode.context;break e;case 1:if(Ve(n.type)){n=n.stateNode.__reactInternalMemoizedMergedChildContext;break e}}n=n.return}while(n!==null);throw Error(k(171))}if(e.tag===1){var t=e.type;if(Ve(t))return Md(e,t,n)}return n}function Ip(e,n,t,r,o,i,l,s,a){return e=la(t,r,!0,e,o,i,l,s,a),e.context=Mp(null),t=e.current,r=Ae(),o=et(t),i=Mn(r,o),i.callback=n??null,Jn(t,i,o),e.current.lanes=o,oo(e,o,r),Ke(e,r),e}function Ii(e,n,t,r){var o=n.current,i=Ae(),l=et(o);return t=Mp(t),n.context===null?n.context=t:n.pendingContext=t,n=Mn(i,l),n.payload={element:e},r=r===void 0?null:r,r!==null&&(n.callback=r),e=Jn(o,n,l),e!==null&&(gn(e,o,l,i),Ao(e,o,l)),l}function hi(e){if(e=e.current,!e.child)return null;switch(e.child.tag){case 5:return e.child.stateNode;default:return e.child.stateNode}}function Fu(e,n){if(e=e.memoizedState,e!==null&&e.dehydrated!==null){var t=e.retryLane;e.retryLane=t!==0&&t<n?t:n}}function sa(e,n){Fu(e,n),(e=e.alternate)&&Fu(e,n)}function _h(){return null}var $p=typeof reportError=="function"?reportError:function(e){console.error(e)};function aa(e){this._internalRoot=e}$i.prototype.render=aa.prototype.render=function(e){var n=this._internalRoot;if(n===null)throw Error(k(409));Ii(e,n,null,null)};$i.prototype.unmount=aa.prototype.unmount=function(){var e=this._internalRoot;if(e!==null){this._internalRoot=null;var n=e.containerInfo;_t(function(){Ii(null,e,null,null)}),n[$n]=null}};function $i(e){this._internalRoot=e}$i.prototype.unstable_scheduleHydration=function(e){if(e){var n=ad();e={blockedOn:null,target:e,priority:n};for(var t=0;t<Bn.length&&n!==0&&n<Bn[t].priority;t++);Bn.splice(t,0,e),t===0&&cd(e)}};function ua(e){return!(!e||e.nodeType!==1&&e.nodeType!==9&&e.nodeType!==11)}function Ei(e){return!(!e||e.nodeType!==1&&e.nodeType!==9&&e.nodeType!==11&&(e.nodeType!==8||e.nodeValue!==" react-mount-point-unstable "))}function Bu(){}function Th(e,n,t,r,o){if(o){if(typeof r=="function"){var i=r;r=function(){var u=hi(l);i.call(u)}}var l=Ip(n,r,e,0,null,!1,!1,"",Bu);return e._reactRootContainer=l,e[$n]=l.current,Vr(e.nodeType===8?e.parentNode:e),_t(),l}for(;o=e.lastChild;)e.removeChild(o);if(typeof r=="function"){var s=r;r=function(){var u=hi(a);s.call(u)}}var a=la(e,0,!1,null,null,!1,!1,"",Bu);return e._reactRootContainer=a,e[$n]=a.current,Vr(e.nodeType===8?e.parentNode:e),_t(function(){Ii(n,a,t,r)}),a}function Ni(e,n,t,r,o){var i=t._reactRootContainer;if(i){var l=i;if(typeof o=="function"){var s=o;o=function(){var a=hi(l);s.call(a)}}Ii(n,l,e,o)}else l=Th(t,n,e,o,r);return hi(l)}ld=function(e){switch(e.tag){case 3:var n=e.stateNode;if(n.current.memoizedState.isDehydrated){var t=Cr(n.pendingLanes);t!==0&&(Rs(n,t|1),Ke(n,xe()),!(J&6)&&(lr=xe()+500,st()))}break;case 13:_t(function(){var r=En(e,1);if(r!==null){var o=Ae();gn(r,e,1,o)}}),sa(e,1)}};Ms=function(e){if(e.tag===13){var n=En(e,134217728);if(n!==null){var t=Ae();gn(n,e,134217728,t)}sa(e,134217728)}};sd=function(e){if(e.tag===13){var n=et(e),t=En(e,n);if(t!==null){var r=Ae();gn(t,e,n,r)}sa(e,n)}};ad=function(){return re};ud=function(e,n){var t=re;try{return re=e,n()}finally{re=t}};Il=function(e,n,t){switch(n){case"input":if(kl(e,t),n=t.name,t.type==="radio"&&n!=null){for(t=e;t.parentNode;)t=t.parentNode;for(t=t.querySelectorAll("input[name="+JSON.stringify(""+n)+'][type="radio"]'),n=0;n<t.length;n++){var r=t[n];if(r!==e&&r.form===e.form){var o=ki(r);if(!o)throw Error(k(90));Wc(r),kl(r,o)}}}break;case"textarea":Fc(e,t);break;case"select":n=t.value,n!=null&&Qt(e,!!t.multiple,n,!1)}};Yc=ta;qc=_t;var Rh={usingClientEntryPoint:!1,Events:[lo,Ht,ki,Kc,Qc,ta]},Sr={findFiberByHostInstance:yt,bundleType:0,version:"18.3.1",rendererPackageName:"react-dom"},Mh={bundleType:Sr.bundleType,version:Sr.version,rendererPackageName:Sr.rendererPackageName,rendererConfig:Sr.rendererConfig,overrideHookState:null,overrideHookStateDeletePath:null,overrideHookStateRenamePath:null,overrideProps:null,overridePropsDeletePath:null,overridePropsRenamePath:null,setErrorHandler:null,setSuspenseHandler:null,scheduleUpdate:null,currentDispatcherRef:jn.ReactCurrentDispatcher,findHostInstanceByFiber:function(e){return e=Zc(e),e===null?null:e.stateNode},findFiberByHostInstance:Sr.findFiberByHostInstance||_h,findHostInstancesForRefresh:null,scheduleRefresh:null,scheduleRoot:null,setRefreshHandler:null,getCurrentFiber:null,reconcilerVersion:"18.3.1-next-f1338f8080-20240426"};if(typeof __REACT_DEVTOOLS_GLOBAL_HOOK__<"u"){var Mo=__REACT_DEVTOOLS_GLOBAL_HOOK__;if(!Mo.isDisabled&&Mo.supportsFiber)try{xi=Mo.inject(Mh),wn=Mo}catch{}}Je.__SECRET_INTERNALS_DO_NOT_USE_OR_YOU_WILL_BE_FIRED=Rh;Je.createPortal=function(e,n){var t=2<arguments.length&&arguments[2]!==void 0?arguments[2]:null;if(!ua(n))throw Error(k(200));return Ch(e,n,null,t)};Je.createRoot=function(e,n){if(!ua(e))throw Error(k(299));var t=!1,r="",o=$p;return n!=null&&(n.unstable_strictMode===!0&&(t=!0),n.identifierPrefix!==void 0&&(r=n.identifierPrefix),n.onRecoverableError!==void 0&&(o=n.onRecoverableError)),n=la(e,1,!1,null,null,t,!1,r,o),e[$n]=n.current,Vr(e.nodeType===8?e.parentNode:e),new aa(n)};Je.findDOMNode=function(e){if(e==null)return null;if(e.nodeType===1)return e;var n=e._reactInternals;if(n===void 0)throw typeof e.render=="function"?Error(k(188)):(e=Object.keys(e).join(","),Error(k(268,e)));return e=Zc(n),e=e===null?null:e.stateNode,e};Je.flushSync=function(e){return _t(e)};Je.hydrate=function(e,n,t){if(!Ei(n))throw Error(k(200));return Ni(null,e,n,!0,t)};Je.hydrateRoot=function(e,n,t){if(!ua(e))throw Error(k(405));var r=t!=null&&t.hydratedSources||null,o=!1,i="",l=$p;if(t!=null&&(t.unstable_strictMode===!0&&(o=!0),t.identifierPrefix!==void 0&&(i=t.identifierPrefix),t.onRecoverableError!==void 0&&(l=t.onRecoverableError)),n=Ip(n,null,e,1,t??null,o,!1,i,l),e[$n]=n.current,Vr(e),r)for(e=0;e<r.length;e++)t=r[e],o=t._getVersion,o=o(t._source),n.mutableSourceEagerHydrationData==null?n.mutableSourceEagerHydrationData=[t,o]:n.mutableSourceEagerHydrationData.push(t,o);return new $i(n)};Je.render=function(e,n,t){if(!Ei(n))throw Error(k(200));return Ni(null,e,n,!1,t)};Je.unmountComponentAtNode=function(e){if(!Ei(e))throw Error(k(40));return e._reactRootContainer?(_t(function(){Ni(null,null,e,!1,function(){e._reactRootContainer=null,e[$n]=null})}),!0):!1};Je.unstable_batchedUpdates=ta;Je.unstable_renderSubtreeIntoContainer=function(e,n,t,r){if(!Ei(t))throw Error(k(200));if(e==null||e._reactInternals===void 0)throw Error(k(38));return Ni(e,n,t,!1,r)};Je.version="18.3.1-next-f1338f8080-20240426";function Ep(){if(!(typeof __REACT_DEVTOOLS_GLOBAL_HOOK__>"u"||typeof __REACT_DEVTOOLS_GLOBAL_HOOK__.checkDCE!="function"))try{__REACT_DEVTOOLS_GLOBAL_HOOK__.checkDCE(Ep)}catch(e){console.error(e)}}Ep(),Ec.exports=Je;var Ih=Ec.exports,Np,Uu=Ih;Np=Uu.createRoot,Uu.hydrateRoot;/**
 * @remix-run/router v1.23.4
 *
 * Copyright (c) Remix Software Inc.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE.md file in the root directory of this source tree.
 *
 * @license MIT
 */function no(){return no=Object.assign?Object.assign.bind():function(e){for(var n=1;n<arguments.length;n++){var t=arguments[n];for(var r in t)({}).hasOwnProperty.call(t,r)&&(e[r]=t[r])}return e},no.apply(null,arguments)}var Kn;(function(e){e.Pop="POP",e.Push="PUSH",e.Replace="REPLACE"})(Kn||(Kn={}));const Gu="popstate";function $h(e){e===void 0&&(e={});function n(o,i){let{pathname:l="/",search:s="",hash:a=""}=It(o.location.hash.substr(1));return!l.startsWith("/")&&!l.startsWith(".")&&(l="/"+l),us("",{pathname:l,search:s,hash:a},i.state&&i.state.usr||null,i.state&&i.state.key||"default")}function t(o,i){let l=o.document.querySelector("base"),s="";if(l&&l.getAttribute("href")){let a=o.location.href,u=a.indexOf("#");s=u===-1?a:a.slice(0,u)}return s+"#"+(typeof i=="string"?i:yi(i))}function r(o,i){ca(o.pathname.charAt(0)==="/","relative pathnames are not supported in hash history.push("+JSON.stringify(i)+")")}return Nh(n,t,r,e)}function we(e,n){if(e===!1||e===null||typeof e>"u")throw new Error(n)}function ca(e,n){if(!e){typeof console<"u"&&console.warn(n);try{throw new Error(n)}catch{}}}function Eh(){return Math.random().toString(36).substr(2,8)}function Vu(e,n){return{usr:e.state,key:e.key,idx:n}}function us(e,n,t,r){return t===void 0&&(t=null),no({pathname:typeof e=="string"?e:e.pathname,search:"",hash:""},typeof n=="string"?It(n):n,{state:t,key:n&&n.key||r||Eh()})}function yi(e){let{pathname:n="/",search:t="",hash:r=""}=e;return t&&t!=="?"&&(n+=t.charAt(0)==="?"?t:"?"+t),r&&r!=="#"&&(n+=r.charAt(0)==="#"?r:"#"+r),n}function It(e){let n={};if(e){let t=e.indexOf("#");t>=0&&(n.hash=e.substr(t),e=e.substr(0,t));let r=e.indexOf("?");r>=0&&(n.search=e.substr(r),e=e.substr(0,r)),e&&(n.pathname=e)}return n}function Nh(e,n,t,r){r===void 0&&(r={});let{window:o=document.defaultView,v5Compat:i=!1}=r,l=o.history,s=Kn.Pop,a=null,u=d();u==null&&(u=0,l.replaceState(no({},l.state,{idx:u}),""));function d(){return(l.state||{idx:null}).idx}function c(){s=Kn.Pop;let S=d(),g=S==null?null:S-u;u=S,a&&a({action:s,location:w.location,delta:g})}function p(S,g){s=Kn.Push;let m=us(w.location,S,g);t&&t(m,S),u=d()+1;let v=Vu(m,u),b=w.createHref(m);try{l.pushState(v,"",b)}catch(P){if(P instanceof DOMException&&P.name==="DataCloneError")throw P;o.location.assign(b)}i&&a&&a({action:s,location:w.location,delta:1})}function y(S,g){s=Kn.Replace;let m=us(w.location,S,g);t&&t(m,S),u=d();let v=Vu(m,u),b=w.createHref(m);l.replaceState(v,"",b),i&&a&&a({action:s,location:w.location,delta:0})}function x(S){let g=o.location.origin!=="null"?o.location.origin:o.location.href,m=typeof S=="string"?S:yi(S);return m=m.replace(/ $/,"%20"),we(g,"No window.location.(origin|href) available to create URL for href: "+m),new URL(m,g)}let w={get action(){return s},get location(){return e(o,l)},listen(S){if(a)throw new Error("A history only accepts one active listener");return o.addEventListener(Gu,c),a=S,()=>{o.removeEventListener(Gu,c),a=null}},createHref(S){return n(o,S)},createURL:x,encodeLocation(S){let g=x(S);return{pathname:g.pathname,search:g.search,hash:g.hash}},push:p,replace:y,go(S){return l.go(S)}};return w}var Ku;(function(e){e.data="data",e.deferred="deferred",e.redirect="redirect",e.error="error"})(Ku||(Ku={}));function jh(e,n,t){return t===void 0&&(t="/"),Lh(e,n,t)}function Lh(e,n,t,r){let o=typeof n=="string"?It(n):n,i=da(o.pathname||"/",t);if(i==null)return null;let l=jp(e);Oh(l);let s=null,a=Qh(i);for(let u=0;s==null&&u<l.length;++u)s=Gh(l[u],a);return s}function jp(e,n,t,r){n===void 0&&(n=[]),t===void 0&&(t=[]),r===void 0&&(r="");let o=(i,l,s)=>{let a={relativePath:s===void 0?i.path||"":s,caseSensitive:i.caseSensitive===!0,childrenIndex:l,route:i};a.relativePath.startsWith("/")&&(we(a.relativePath.startsWith(r),'Absolute route path "'+a.relativePath+'" nested under path '+('"'+r+'" is not valid. An absolute child route path ')+"must start with the combined path of all its parent routes."),a.relativePath=a.relativePath.slice(r.length));let u=tt([r,a.relativePath]),d=t.concat(a);i.children&&i.children.length>0&&(we(i.index!==!0,"Index routes must not have child routes. Please remove "+('all child routes from route path "'+u+'".')),jp(i.children,n,d,u)),!(i.path==null&&!i.index)&&n.push({path:u,score:Bh(u,i.index),routesMeta:d})};return e.forEach((i,l)=>{var s;if(i.path===""||!((s=i.path)!=null&&s.includes("?")))o(i,l);else for(let a of Lp(i.path))o(i,l,a)}),n}function Lp(e){let n=e.split("/");if(n.length===0)return[];let[t,...r]=n,o=t.endsWith("?"),i=t.replace(/\?$/,"");if(r.length===0)return o?[i,""]:[i];let l=Lp(r.join("/")),s=[];return s.push(...l.map(a=>a===""?i:[i,a].join("/"))),o&&s.push(...l),s.map(a=>e.startsWith("/")&&a===""?"/":a)}function Oh(e){e.sort((n,t)=>n.score!==t.score?t.score-n.score:Uh(n.routesMeta.map(r=>r.childrenIndex),t.routesMeta.map(r=>r.childrenIndex)))}const Dh=/^:[\w-]+$/,zh=3,Ah=2,Wh=1,Hh=10,Fh=-2,Qu=e=>e==="*";function Bh(e,n){let t=e.split("/"),r=t.length;return t.some(Qu)&&(r+=Fh),n&&(r+=Ah),t.filter(o=>!Qu(o)).reduce((o,i)=>o+(Dh.test(i)?zh:i===""?Wh:Hh),r)}function Uh(e,n){return e.length===n.length&&e.slice(0,-1).every((r,o)=>r===n[o])?e[e.length-1]-n[n.length-1]:0}function Gh(e,n,t){let{routesMeta:r}=e,o={},i="/",l=[];for(let s=0;s<r.length;++s){let a=r[s],u=s===r.length-1,d=i==="/"?n:n.slice(i.length)||"/",c=Vh({path:a.relativePath,caseSensitive:a.caseSensitive,end:u},d),p=a.route;if(!c)return null;Object.assign(o,c.params),l.push({params:o,pathname:tt([i,c.pathname]),pathnameBase:Xh(tt([i,c.pathnameBase])),route:p}),c.pathnameBase!=="/"&&(i=tt([i,c.pathnameBase]))}return l}function Vh(e,n){typeof e=="string"&&(e={path:e,caseSensitive:!1,end:!0});let[t,r]=Kh(e.path,e.caseSensitive,e.end),o=n.match(t);if(!o)return null;let i=o[0],l=i.replace(/(.)\/+$/,"$1"),s=o.slice(1);return{params:r.reduce((u,d,c)=>{let{paramName:p,isOptional:y}=d;if(p==="*"){let w=s[c]||"";l=i.slice(0,i.length-w.length).replace(/(.)\/+$/,"$1")}const x=s[c];return y&&!x?u[p]=void 0:u[p]=(x||"").replace(/%2F/g,"/"),u},{}),pathname:i,pathnameBase:l,pattern:e}}function Kh(e,n,t){n===void 0&&(n=!1),t===void 0&&(t=!0),ca(e==="*"||!e.endsWith("*")||e.endsWith("/*"),'Route path "'+e+'" will be treated as if it were '+('"'+e.replace(/\*$/,"/*")+'" because the `*` character must ')+"always follow a `/` in the pattern. To get rid of this warning, "+('please change the route path to "'+e.replace(/\*$/,"/*")+'".'));let r=[],o="^"+e.replace(/\/*\*?$/,"").replace(/^\/*/,"/").replace(/[\\.*+^${}|()[\]]/g,"\\$&").replace(/\/:([\w-]+)(\?)?/g,(l,s,a)=>(r.push({paramName:s,isOptional:a!=null}),a?"/?([^\\/]+)?":"/([^\\/]+)"));return e.endsWith("*")?(r.push({paramName:"*"}),o+=e==="*"||e==="/*"?"(.*)$":"(?:\\/(.+)|\\/*)$"):t?o+="\\/*$":e!==""&&e!=="/"&&(o+="(?:(?=\\/|$))"),[new RegExp(o,n?void 0:"i"),r]}function Qh(e){try{return e.split("/").map(n=>decodeURIComponent(n).replace(/\//g,"%2F")).join("/")}catch(n){return ca(!1,'The URL path "'+e+'" could not be decoded because it is is a malformed URL segment. This is probably due to a bad percent '+("encoding ("+n+").")),e}}function da(e,n){if(n==="/")return e;if(!e.toLowerCase().startsWith(n.toLowerCase()))return null;let t=n.endsWith("/")?n.length-1:n.length,r=e.charAt(t);return r&&r!=="/"?null:e.slice(t)||"/"}function Yh(e,n){n===void 0&&(n="/");let{pathname:t,search:r="",hash:o=""}=typeof e=="string"?It(e):e,i;return t?(t=Op(t),t.startsWith("/")?i=Yu(t.substring(1),"/"):i=Yu(t,n)):i=n,{pathname:i,search:Jh(r),hash:Zh(o)}}function Yu(e,n){let t=n.replace(/\/+$/,"").split("/");return e.split("/").forEach(o=>{o===".."?t.length>1&&t.pop():o!=="."&&t.push(o)}),t.length>1?t.join("/"):"/"}function fl(e,n,t,r){return"Cannot include a '"+e+"' character in a manually specified "+("`to."+n+"` field ["+JSON.stringify(r)+"].  Please separate it out to the ")+("`to."+t+"` field. Alternatively you may provide the full path as ")+'a string in <Link to="..."> and the router will parse it for you.'}function qh(e){return e.filter((n,t)=>t===0||n.route.path&&n.route.path.length>0)}function pa(e,n){let t=qh(e);return n?t.map((r,o)=>o===t.length-1?r.pathname:r.pathnameBase):t.map(r=>r.pathnameBase)}function fa(e,n,t,r){r===void 0&&(r=!1);let o;typeof e=="string"?o=It(e):(o=no({},e),we(!o.pathname||!o.pathname.includes("?"),fl("?","pathname","search",o)),we(!o.pathname||!o.pathname.includes("#"),fl("#","pathname","hash",o)),we(!o.search||!o.search.includes("#"),fl("#","search","hash",o)));let i=e===""||o.pathname==="",l=i?"/":o.pathname,s;if(l==null)s=t;else{let c=n.length-1;if(!r&&l.startsWith("..")){let p=l.split("/");for(;p[0]==="..";)p.shift(),c-=1;o.pathname=p.join("/")}s=c>=0?n[c]:"/"}let a=Yh(o,s),u=l&&l!=="/"&&l.endsWith("/"),d=(i||l===".")&&t.endsWith("/");return!a.pathname.endsWith("/")&&(u||d)&&(a.pathname+="/"),a}const Op=e=>e.replace(/\/\/+/g,"/"),tt=e=>Op(e.join("/")),Xh=e=>e.replace(/\/+$/,"").replace(/^\/*/,"/"),Jh=e=>!e||e==="?"?"":e.startsWith("?")?e:"?"+e,Zh=e=>!e||e==="#"?"":e.startsWith("#")?e:"#"+e;function ey(e){return e!=null&&typeof e.status=="number"&&typeof e.statusText=="string"&&typeof e.internal=="boolean"&&"data"in e}const Dp=["post","put","patch","delete"];new Set(Dp);const ny=["get",...Dp];new Set(ny);/**
 * React Router v6.30.6
 *
 * Copyright (c) Remix Software Inc.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE.md file in the root directory of this source tree.
 *
 * @license MIT
 */function to(){return to=Object.assign?Object.assign.bind():function(e){for(var n=1;n<arguments.length;n++){var t=arguments[n];for(var r in t)({}).hasOwnProperty.call(t,r)&&(e[r]=t[r])}return e},to.apply(null,arguments)}const ma=h.createContext(null),ty=h.createContext(null),at=h.createContext(null),ji=h.createContext(null),Ln=h.createContext({outlet:null,matches:[],isDataRoute:!1}),zp=h.createContext(null);function ry(e,n){let{relative:t}=n===void 0?{}:n;cr()||we(!1);let{basename:r,navigator:o}=h.useContext(at),{hash:i,pathname:l,search:s}=Hp(e,{relative:t}),a=l;return r!=="/"&&(a=l==="/"?r:tt([r,l])),o.createHref({pathname:a,search:s,hash:i})}function cr(){return h.useContext(ji)!=null}function dr(){return cr()||we(!1),h.useContext(ji).location}function Ap(e){h.useContext(at).static||h.useLayoutEffect(e)}function Wp(){let{isDataRoute:e}=h.useContext(Ln);return e?yy():oy()}function oy(){cr()||we(!1);let e=h.useContext(ma),{basename:n,future:t,navigator:r}=h.useContext(at),{matches:o}=h.useContext(Ln),{pathname:i}=dr(),l=JSON.stringify(pa(o,t.v7_relativeSplatPath)),s=h.useRef(!1);return Ap(()=>{s.current=!0}),h.useCallback(function(u,d){if(d===void 0&&(d={}),!s.current)return;if(typeof u=="number"){r.go(u);return}let c=fa(u,JSON.parse(l),i,d.relative==="path");e==null&&n!=="/"&&(c.pathname=c.pathname==="/"?n:tt([n,c.pathname])),(d.replace?r.replace:r.push)(c,d.state,d)},[n,r,l,i,e])}function iy(){let{matches:e}=h.useContext(Ln),n=e[e.length-1];return n?n.params:{}}function Hp(e,n){let{relative:t}=n===void 0?{}:n,{future:r}=h.useContext(at),{matches:o}=h.useContext(Ln),{pathname:i}=dr(),l=JSON.stringify(pa(o,r.v7_relativeSplatPath));return h.useMemo(()=>fa(e,JSON.parse(l),i,t==="path"),[e,l,i,t])}function ly(e,n){return sy(e,n)}function sy(e,n,t,r){cr()||we(!1);let{navigator:o}=h.useContext(at),{matches:i}=h.useContext(Ln),l=i[i.length-1],s=l?l.params:{};l&&l.pathname;let a=l?l.pathnameBase:"/";l&&l.route;let u=dr(),d;if(n){var c;let S=typeof n=="string"?It(n):n;a==="/"||(c=S.pathname)!=null&&c.startsWith(a)||we(!1),d=S}else d=u;let p=d.pathname||"/",y=p;if(a!=="/"){let S=a.replace(/^\//,"").split("/");y="/"+p.replace(/^\//,"").split("/").slice(S.length).join("/")}let x=jh(e,{pathname:y}),w=py(x&&x.map(S=>Object.assign({},S,{params:Object.assign({},s,S.params),pathname:tt([a,o.encodeLocation?o.encodeLocation(S.pathname).pathname:S.pathname]),pathnameBase:S.pathnameBase==="/"?a:tt([a,o.encodeLocation?o.encodeLocation(S.pathnameBase).pathname:S.pathnameBase])})),i,t,r);return n&&w?h.createElement(ji.Provider,{value:{location:to({pathname:"/",search:"",hash:"",state:null,key:"default"},d),navigationType:Kn.Pop}},w):w}function ay(){let e=hy(),n=ey(e)?e.status+" "+e.statusText:e instanceof Error?e.message:JSON.stringify(e),t=e instanceof Error?e.stack:null,o={padding:"0.5rem",backgroundColor:"rgba(200,200,200, 0.5)"};return h.createElement(h.Fragment,null,h.createElement("h2",null,"Unexpected Application Error!"),h.createElement("h3",{style:{fontStyle:"italic"}},n),t?h.createElement("pre",{style:o},t):null,null)}const uy=h.createElement(ay,null);class cy extends h.Component{constructor(n){super(n),this.state={location:n.location,revalidation:n.revalidation,error:n.error}}static getDerivedStateFromError(n){return{error:n}}static getDerivedStateFromProps(n,t){return t.location!==n.location||t.revalidation!=="idle"&&n.revalidation==="idle"?{error:n.error,location:n.location,revalidation:n.revalidation}:{error:n.error!==void 0?n.error:t.error,location:t.location,revalidation:n.revalidation||t.revalidation}}componentDidCatch(n,t){console.error("React Router caught the following error during render",n,t)}render(){return this.state.error!==void 0?h.createElement(Ln.Provider,{value:this.props.routeContext},h.createElement(zp.Provider,{value:this.state.error,children:this.props.component})):this.props.children}}function dy(e){let{routeContext:n,match:t,children:r}=e,o=h.useContext(ma);return o&&o.static&&o.staticContext&&(t.route.errorElement||t.route.ErrorBoundary)&&(o.staticContext._deepestRenderedBoundaryId=t.route.id),h.createElement(Ln.Provider,{value:n},r)}function py(e,n,t,r){var o;if(n===void 0&&(n=[]),t===void 0&&(t=null),r===void 0&&(r=null),e==null){var i;if(!t)return null;if(t.errors)e=t.matches;else if((i=r)!=null&&i.v7_partialHydration&&n.length===0&&!t.initialized&&t.matches.length>0)e=t.matches;else return null}let l=e,s=(o=t)==null?void 0:o.errors;if(s!=null){let d=l.findIndex(c=>c.route.id&&(s==null?void 0:s[c.route.id])!==void 0);d>=0||we(!1),l=l.slice(0,Math.min(l.length,d+1))}let a=!1,u=-1;if(t&&r&&r.v7_partialHydration)for(let d=0;d<l.length;d++){let c=l[d];if((c.route.HydrateFallback||c.route.hydrateFallbackElement)&&(u=d),c.route.id){let{loaderData:p,errors:y}=t,x=c.route.loader&&p[c.route.id]===void 0&&(!y||y[c.route.id]===void 0);if(c.route.lazy||x){a=!0,u>=0?l=l.slice(0,u+1):l=[l[0]];break}}}return l.reduceRight((d,c,p)=>{let y,x=!1,w=null,S=null;t&&(y=s&&c.route.id?s[c.route.id]:void 0,w=c.route.errorElement||uy,a&&(u<0&&p===0?(vy("route-fallback"),x=!0,S=null):u===p&&(x=!0,S=c.route.hydrateFallbackElement||null)));let g=n.concat(l.slice(0,p+1)),m=()=>{let v;return y?v=w:x?v=S:c.route.Component?v=h.createElement(c.route.Component,null):c.route.element?v=c.route.element:v=d,h.createElement(dy,{match:c,routeContext:{outlet:d,matches:g,isDataRoute:t!=null},children:v})};return t&&(c.route.ErrorBoundary||c.route.errorElement||p===0)?h.createElement(cy,{location:t.location,revalidation:t.revalidation,component:w,error:y,children:m(),routeContext:{outlet:null,matches:g,isDataRoute:!0}}):m()},null)}var Fp=function(e){return e.UseBlocker="useBlocker",e.UseRevalidator="useRevalidator",e.UseNavigateStable="useNavigate",e}(Fp||{}),Bp=function(e){return e.UseBlocker="useBlocker",e.UseLoaderData="useLoaderData",e.UseActionData="useActionData",e.UseRouteError="useRouteError",e.UseNavigation="useNavigation",e.UseRouteLoaderData="useRouteLoaderData",e.UseMatches="useMatches",e.UseRevalidator="useRevalidator",e.UseNavigateStable="useNavigate",e.UseRouteId="useRouteId",e}(Bp||{});function fy(e){let n=h.useContext(ma);return n||we(!1),n}function my(e){let n=h.useContext(ty);return n||we(!1),n}function gy(e){let n=h.useContext(Ln);return n||we(!1),n}function Up(e){let n=gy(),t=n.matches[n.matches.length-1];return t.route.id||we(!1),t.route.id}function hy(){var e;let n=h.useContext(zp),t=my(),r=Up();return n!==void 0?n:(e=t.errors)==null?void 0:e[r]}function yy(){let{router:e}=fy(Fp.UseNavigateStable),n=Up(Bp.UseNavigateStable),t=h.useRef(!1);return Ap(()=>{t.current=!0}),h.useCallback(function(o,i){i===void 0&&(i={}),t.current&&(typeof o=="number"?e.navigate(o):e.navigate(o,to({fromRouteId:n},i)))},[e,n])}const qu={};function vy(e,n,t){qu[e]||(qu[e]=!0)}function xy(e,n){e==null||e.v7_startTransition,e==null||e.v7_relativeSplatPath}function cs(e){let{to:n,replace:t,state:r,relative:o}=e;cr()||we(!1);let{future:i,static:l}=h.useContext(at),{matches:s}=h.useContext(Ln),{pathname:a}=dr(),u=Wp(),d=fa(n,pa(s,i.v7_relativeSplatPath),a,o==="path"),c=JSON.stringify(d);return h.useEffect(()=>u(JSON.parse(c),{replace:t,state:r,relative:o}),[u,c,o,t,r]),null}function Tr(e){we(!1)}function wy(e){let{basename:n="/",children:t=null,location:r,navigationType:o=Kn.Pop,navigator:i,static:l=!1,future:s}=e;cr()&&we(!1);let a=n.replace(/^\/*/,"/"),u=h.useMemo(()=>({basename:a,navigator:i,static:l,future:to({v7_relativeSplatPath:!1},s)}),[a,s,i,l]);typeof r=="string"&&(r=It(r));let{pathname:d="/",search:c="",hash:p="",state:y=null,key:x="default"}=r,w=h.useMemo(()=>{let S=da(d,a);return S==null?null:{location:{pathname:S,search:c,hash:p,state:y,key:x},navigationType:o}},[a,d,c,p,y,x,o]);return w==null?null:h.createElement(at.Provider,{value:u},h.createElement(ji.Provider,{children:t,value:w}))}function Sy(e){let{children:n,location:t}=e;return ly(ds(n),t)}new Promise(()=>{});function ds(e,n){n===void 0&&(n=[]);let t=[];return h.Children.forEach(e,(r,o)=>{if(!h.isValidElement(r))return;let i=[...n,o];if(r.type===h.Fragment){t.push.apply(t,ds(r.props.children,i));return}r.type!==Tr&&we(!1),!r.props.index||!r.props.children||we(!1);let l={id:r.props.id||i.join("-"),caseSensitive:r.props.caseSensitive,element:r.props.element,Component:r.props.Component,index:r.props.index,path:r.props.path,loader:r.props.loader,action:r.props.action,errorElement:r.props.errorElement,ErrorBoundary:r.props.ErrorBoundary,hasErrorBoundary:r.props.ErrorBoundary!=null||r.props.errorElement!=null,shouldRevalidate:r.props.shouldRevalidate,handle:r.props.handle,lazy:r.props.lazy};r.props.children&&(l.children=ds(r.props.children,i)),t.push(l)}),t}/**
 * React Router DOM v6.30.6
 *
 * Copyright (c) Remix Software Inc.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE.md file in the root directory of this source tree.
 *
 * @license MIT
 */function ps(){return ps=Object.assign?Object.assign.bind():function(e){for(var n=1;n<arguments.length;n++){var t=arguments[n];for(var r in t)({}).hasOwnProperty.call(t,r)&&(e[r]=t[r])}return e},ps.apply(null,arguments)}function by(e,n){if(e==null)return{};var t={};for(var r in e)if({}.hasOwnProperty.call(e,r)){if(n.indexOf(r)!==-1)continue;t[r]=e[r]}return t}function ky(e){return!!(e.metaKey||e.altKey||e.ctrlKey||e.shiftKey)}function Py(e,n){return e.button===0&&(!n||n==="_self")&&!ky(e)}const Cy=["onClick","relative","reloadDocument","replace","state","target","to","preventScrollReset","viewTransition"],_y="6";try{window.__reactRouterVersion=_y}catch{}const Ty="startTransition",Xu=xm[Ty];function Ry(e){let{basename:n,children:t,future:r,window:o}=e,i=h.useRef();i.current==null&&(i.current=$h({window:o,v5Compat:!0}));let l=i.current,[s,a]=h.useState({action:l.action,location:l.location}),{v7_startTransition:u}=r||{},d=h.useCallback(c=>{u&&Xu?Xu(()=>a(c)):a(c)},[a,u]);return h.useLayoutEffect(()=>l.listen(d),[l,d]),h.useEffect(()=>xy(r),[r]),h.createElement(wy,{basename:n,children:t,location:s.location,navigationType:s.action,navigator:l,future:r})}const My=typeof window<"u"&&typeof window.document<"u"&&typeof window.document.createElement<"u",Iy=/^(?:[a-z][a-z0-9+.-]*:|\/\/)/i,fs=h.forwardRef(function(n,t){let{onClick:r,relative:o,reloadDocument:i,replace:l,state:s,target:a,to:u,preventScrollReset:d,viewTransition:c}=n,p=by(n,Cy),{basename:y}=h.useContext(at),x,w=!1;if(typeof u=="string"&&Iy.test(u)&&(x=u,My))try{let v=new URL(window.location.href),b=u.startsWith("//")?new URL(v.protocol+u):new URL(u),P=da(b.pathname,y);b.origin===v.origin&&P!=null?u=P+b.search+b.hash:w=!0}catch{}let S=ry(u,{relative:o}),g=$y(u,{replace:l,state:s,target:a,preventScrollReset:d,relative:o,viewTransition:c});function m(v){r&&r(v),v.defaultPrevented||g(v)}return h.createElement("a",ps({},p,{href:x||S,onClick:w||i?r:m,ref:t,target:a}))});var Ju;(function(e){e.UseScrollRestoration="useScrollRestoration",e.UseSubmit="useSubmit",e.UseSubmitFetcher="useSubmitFetcher",e.UseFetcher="useFetcher",e.useViewTransitionState="useViewTransitionState"})(Ju||(Ju={}));var Zu;(function(e){e.UseFetcher="useFetcher",e.UseFetchers="useFetchers",e.UseScrollRestoration="useScrollRestoration"})(Zu||(Zu={}));function $y(e,n){let{target:t,replace:r,state:o,preventScrollReset:i,relative:l,viewTransition:s}=n===void 0?{}:n,a=Wp(),u=dr(),d=Hp(e,{relative:l});return h.useCallback(c=>{if(Py(c,t)){c.preventDefault();let p=r!==void 0?r:yi(u)===yi(d);a(e,{replace:p,state:o,preventScrollReset:i,relative:l,viewTransition:s})}},[u,a,d,r,o,t,e,i,l,s])}const Ey="https://github.com/frankvane/vane-components";class Ny extends Tt.Component{constructor(){super(...arguments);La(this,"state",{error:null})}static getDerivedStateFromError(t){return{error:t}}render(){var t;return this.state.error?f.jsxs("div",{className:"crash",role:"alert",children:[f.jsx("h3",{children:"这个页面炸了"}),f.jsx("pre",{children:String(((t=this.state.error)==null?void 0:t.stack)||this.state.error)}),f.jsx("button",{type:"button",onClick:()=>this.setState({error:null}),children:"重试"})]}):this.props.children}}function Gp(e,n){return String(e.entries.indexOf(n)+1).padStart(2,"0")}function jy({demos:e,pathname:n}){var a;const{groups:t,entries:r,label:o}=e,i=(a=r.find(u=>n===`/demo/${u.meta.slug}`))==null?void 0:a.meta.group,[l,s]=h.useState(()=>{var d;const u=(d=t[0])==null?void 0:d.key;return Object.fromEntries(t.map(c=>[c.key,c.key===(i??u)]))});return h.useEffect(()=>{i&&s(u=>u[i]?u:{...u,[i]:!0})},[i]),f.jsxs("div",{className:"nav-section",children:[f.jsxs("div",{className:"nav-section-head",children:[f.jsx("span",{children:o}),f.jsxs("code",{children:[r.length," demos"]})]}),t.map(u=>{const d=r.filter(p=>p.meta.group===u.key);if(d.length===0)return null;const c=l[u.key]??!1;return f.jsxs("div",{className:"nav-group",children:[f.jsxs("button",{type:"button",className:`nav-group-head${i===u.key?" is-current":""}`,onClick:()=>s(p=>({...p,[u.key]:!c})),"aria-expanded":c,children:[f.jsx("span",{className:`nav-caret${c?" is-open":""}`,"aria-hidden":!0,children:"▸"}),u.label,f.jsx("code",{children:d.length})]}),c?f.jsx("div",{className:"nav-list",children:d.map(p=>f.jsxs(fs,{to:`/demo/${p.meta.slug}`,className:`nav-sub${n===`/demo/${p.meta.slug}`?" is-active":""}`,children:[f.jsx("em",{"aria-hidden":!0,children:Gp(e,p)}),p.meta.title]},p.meta.slug))}):null]},u.key)})]})}function Ly({demos:e}){const{slug:n}=iy(),{entries:t,detail:r}=e,o=n?t.find(l=>l.meta.slug===n):void 0;if(!o)return f.jsx(cs,{to:`/demo/${t[0].meta.slug}`,replace:!0});const i=t.indexOf(o)+1;return f.jsx(Tt.Fragment,{children:r(o,i)},o.meta.slug)}function Oy({config:e}){var d;const{pathname:n}=dr(),[t,r]=h.useState(!1),[o,i]=h.useState(!1);h.useEffect(()=>r(!1),[n]);const l=h.useCallback(()=>i(c=>!c),[]);h.useEffect(()=>{const c=p=>{const y=p.target,x=y&&(y.tagName==="INPUT"||y.tagName==="TEXTAREA"||y.isContentEditable);p.key==="Escape"&&r(!1),!x&&(p.key==="g"||p.key==="G")&&!p.metaKey&&!p.ctrlKey&&i(w=>!w)};return window.addEventListener("keydown",c),()=>window.removeEventListener("keydown",c)},[]);const s=e.demos,a=h.useMemo(()=>{if(!n.startsWith("/demo"))return e.crumb(n);const c=n.replace(/^\/demo\/?/,""),p=s.entries.find(y=>y.meta.slug===c);return p?`demo ${Gp(s,p)} · ${p.meta.title}`:"demo · 逐项示例"},[n,e,s]),u=h.useMemo(()=>e.nav.map((c,p)=>({...c,no:String(p+1).padStart(2,"0")})),[e.nav]);return f.jsxs("div",{className:`shell${t?" is-nav-open":""}${o?" is-guides":""}`,children:[f.jsx("a",{className:"skip-link",href:"#main",onClick:c=>{c.preventDefault();const p=document.getElementById("main");p==null||p.setAttribute("tabindex","-1"),p==null||p.focus(),p==null||p.scrollIntoView({block:"start"})},children:"跳到内容"}),f.jsxs("aside",{className:"side","aria-label":"站点导航",children:[f.jsxs(fs,{to:"/",className:"brand",children:[f.jsx("span",{className:"brand-mark","aria-hidden":!0,children:e.brand}),f.jsxs("span",{children:[f.jsx("strong",{children:e.pkg}),f.jsx("em",{children:e.subtitle})]})]}),f.jsxs("nav",{children:[u.map(c=>f.jsxs(fs,{to:c.to,className:`nav-item${n===c.to?" is-active":""}`,"aria-current":n===c.to?"page":void 0,children:[f.jsx("em",{"aria-hidden":!0,children:c.no}),f.jsx("span",{children:c.label}),c.hint?f.jsx("code",{children:c.hint}):null]},c.to)),f.jsx(jy,{demos:e.demos,pathname:n})]}),f.jsxs("div",{className:"side-foot",children:[f.jsx("p",{children:e.footer[0]}),f.jsx("p",{className:"muted",children:e.footer[1]})]})]}),f.jsx("button",{type:"button",className:"scrim","aria-label":"关闭导航",tabIndex:t?0:-1,onClick:()=>r(!1)}),f.jsxs("div",{className:"main",id:"main",children:[f.jsxs("header",{className:"topbar",children:[f.jsx("button",{type:"button",className:"nav-toggle","aria-label":t?"关闭导航":"打开导航","aria-expanded":t,onClick:()=>r(c=>!c),children:f.jsx("span",{"aria-hidden":!0})}),f.jsx("span",{className:"crumb",children:a}),f.jsxs("div",{className:"topbar-right",children:[(d=e.stats)==null?void 0:d.map(c=>f.jsxs("span",{className:"topbar-stat",title:c.title,children:[f.jsx("b",{children:c.value})," ",c.label]},c.label)),f.jsxs("button",{type:"button",className:"topbar-btn","aria-pressed":o,onClick:l,title:"显示栏位参考线（快捷键 G）",children:[f.jsx("i",{"aria-hidden":!0}),"guides"]}),f.jsx("a",{className:"topbar-link",href:e.sourceUrl??Ey,target:"_blank",rel:"noreferrer",children:"source ↗"})]})]}),f.jsx("div",{className:"guides","aria-hidden":!0}),f.jsx(h.Suspense,{fallback:f.jsx("div",{className:"loading",children:"loading modules…"}),children:f.jsx(Ny,{children:f.jsxs(Sy,{children:[e.routes.map(c=>f.jsx(Tr,{path:c.path,element:c.element},c.path)),f.jsx(Tr,{path:"/demo",element:f.jsx(cs,{to:`/demo/${e.demos.entries[0].meta.slug}`,replace:!0})}),f.jsx(Tr,{path:"/demo/:slug",element:f.jsx(Ly,{demos:e.demos})}),f.jsx(Tr,{path:"*",element:f.jsx(cs,{to:"/",replace:!0})})]})})})]})]})}function Dy({config:e}){return f.jsx(Ry,{children:f.jsx(Oy,{config:e})})}const zy="modulepreload",Ay=function(e,n){return new URL(e,n).href},ec={},ga=function(n,t,r){let o=Promise.resolve();if(t&&t.length>0){const l=document.getElementsByTagName("link"),s=document.querySelector("meta[property=csp-nonce]"),a=(s==null?void 0:s.nonce)||(s==null?void 0:s.getAttribute("nonce"));o=Promise.allSettled(t.map(u=>{if(u=Ay(u,r),u in ec)return;ec[u]=!0;const d=u.endsWith(".css"),c=d?'[rel="stylesheet"]':"";if(!!r)for(let x=l.length-1;x>=0;x--){const w=l[x];if(w.href===u&&(!d||w.rel==="stylesheet"))return}else if(document.querySelector(`link[href="${u}"]${c}`))return;const y=document.createElement("link");if(y.rel=d?"stylesheet":zy,d||(y.as="script"),y.crossOrigin="",y.href=u,a&&y.setAttribute("nonce",a),document.head.appendChild(y),d)return new Promise((x,w)=>{y.addEventListener("load",x),y.addEventListener("error",()=>w(new Error(`Unable to preload CSS for ${u}`)))})}))}function i(l){const s=new Event("vite:preloadError",{cancelable:!0});if(s.payload=l,window.dispatchEvent(s),!s.defaultPrevented)throw l}return o.then(l=>{for(const s of l||[])s.status==="rejected"&&i(s.reason);return n().catch(i)})};function Wy(e=0){return typeof e=="number"?{top:e,right:e,bottom:e,left:e}:{top:e.top??0,right:e.right??0,bottom:e.bottom??0,left:e.left??0}}function Hy(e,n,t){return typeof e=="number"&&Number.isFinite(e)&&e>0?e:n&&n>0?n:t&&t>0?t:0}function Fy(e){var b,P,I;const{heights:n,columnGap:t,rowGap:r,alignmentMode:o="shortest",estimateHeight:i,minItemHeight:l,hooks:s}=e,a=Wy(e.padding),u=e.containerWidth,d=(b=s==null?void 0:s.calculateColumns)==null?void 0:b.call(s,e.columns),c=Math.max(1,Math.round(typeof d=="number"&&Number.isFinite(d)?d:e.columns)),y=(u-a.left-a.right-t*(c-1))/c,x=(P=s==null?void 0:s.calculateColumnWidth)==null?void 0:P.call(s,y,c,u),w=typeof x=="number"&&Number.isFinite(x)?x:y,S=Array(c).fill(a.top),g=Array(c).fill(0),m=new Map;let v=0;if(n.length===0)return{columns:c,columnWidth:w,padding:a,columnHeights:S,totalHeight:a.top+a.bottom,positions:m,estimatedCount:0};for(let _=0;_<n.length;_++){const $=n[_],A=Hy($,i,l);if(A===0)continue;typeof $=="number"&&$>0||(v+=1);let j=0;if(o==="sequential")j=_%c;else if(o==="balanced"){let F=g[0];for(let B=1;B<c;B++)g[B]<F&&(F=g[B],j=B)}else{let F=S[0];for(let B=1;B<S.length;B++)S[B]<F&&(F=S[B],j=B)}let W={x:a.left+j*(w+t),y:S[j],width:w,height:A,column:j,row:Math.floor(_/c)};const oe=(I=s==null?void 0:s.calculateItemPosition)==null?void 0:I.call(s,_,A,W);if(oe){const F={...W,...oe};oe.column!==void 0&&oe.x===void 0&&(F.x=a.left+Math.min(Math.max(0,F.column),c-1)*(w+t)),W=F}m.set(_,W);const K=Math.min(Math.max(0,W.column),S.length-1);S[K]=W.y+W.height+r,g[K]+=1}return{columns:c,columnWidth:w,padding:a,columnHeights:S,totalHeight:Math.max(...S)+a.bottom,positions:m,estimatedCount:v}}function By(e,n,t="start",r=0){let o=e.y+r;return t==="center"?o-=n/2-e.height/2:t==="end"&&(o-=n-e.height),Math.max(0,o)}const Uy=8;function Gy(e,n,t=.5){const r=[];for(const l of e)Number.isFinite(l)&&l>0&&r.push(l);if(r.length<Uy)return n;r.sort((l,s)=>l-s);const o=Math.min(1,Math.max(0,t)),i=Math.min(r.length-1,Math.round(o*(r.length-1)));return Math.max(1,Math.ceil(r[i]))}function Vy(e,n,t,r,o=1){if(n<=0)return{start:0,end:-1,hiddenCount:0};if(e.size===0){const c=Math.max(1,Math.ceil(r/240)+2);return{start:0,end:Math.min(n-1,c-1),hiddenCount:0}}const i=Math.max(0,r*o),l=t-i,s=t+Math.max(r,1)+i;let a=Number.POSITIVE_INFINITY,u=-1;if(e.forEach((c,p)=>{const y=c.y;c.y+c.height>l&&y<s&&(p<a&&(a=p),p>u&&(u=p))}),u<0){let c=0,p=Number.POSITIVE_INFINITY;e.forEach((x,w)=>{const S=Math.abs(x.y-t);S<p&&(p=S,c=w)});const y=Math.max(1,Math.ceil(r/240)+2);a=Math.max(0,c-y),u=Math.min(n-1,c+y)}a=Math.max(0,a),u=Math.min(n-1,u),u<a&&(u=a);const d=u-a+1;return{start:a,end:u,hiddenCount:Math.max(0,n-d)}}function Ky(e){return e?e===!0?{overscan:1,estimateHeight:240,dynamicHeights:!0,adaptiveEstimate:!0,estimateQuantile:.5}:{overscan:e.overscan??1,estimateHeight:e.estimateHeight??240,dynamicHeights:e.dynamicHeights??!0,adaptiveEstimate:e.adaptiveEstimate??!0,estimateQuantile:e.estimateQuantile??.5}:null}function nc(e,n,t,r){const o=n.y,i=n.y+n.height,l=t+r,s=Math.max(0,Math.min(l,i)-Math.max(t,o));return{index:e,isVisible:s>0,visibleRatio:n.height>0?Math.min(1,s/n.height):0,isAboveViewport:i<=t,isBelowViewport:o>=l}}const Qy=Tt.memo(function({index:n,item:t,position:r,useTransform:o,itemStyle:i,itemClassName:l,renderItem:s,onClick:a,itemRef:u}){const d=r?o?{position:"absolute",transform:`translate(${r.x}px, ${r.y}px)`,width:r.width,boxSizing:"border-box"}:{position:"absolute",left:r.x,top:r.y,width:r.width,boxSizing:"border-box"}:{position:"absolute",opacity:0,pointerEvents:"none"};return f.jsx("div",{ref:u,style:{...d,...i},className:l,onClick:a?c=>a(n,t,c):void 0,"data-index":n,"data-column":r==null?void 0:r.column,children:s(t,n)})}),tc=h.forwardRef(function(n,t){const{items:r=[],renderItem:o,keyExtractor:i=(C,M)=>M,columns:l=3,gap:s=16,rowGap:a,columnGap:u,alignmentMode:d="shortest",padding:c=0,containerStyle:p,containerClassName:y,itemStyle:x,itemClassName:w,useTransform:S=!0,throttleDelay:g=16,debounceDelay:m=150,reachBottomOffset:v=100,minItemHeight:b=48,scrollAnchor:P=!0,virtualize:I,layoutHooks:_,onMount:$,onUnmount:A,onBeforeLayout:j,onLayout:W,onLayoutComplete:oe,onItemMount:K,onItemUnmount:F,onItemEnterViewport:B,onItemLeaveViewport:U,onScroll:le,onResize:T,onReachBottom:L,onItemClick:O,children:Q,containerRefExternal:Z,itemRefsExternal:Fe,debug:be=!1}=n,R=h.useRef(null),E=Z??R,ee=h.useRef(new Map),ie=Fe??ee,z=h.useRef(new Map),ne=h.useRef(new Map),ye=h.useRef(null),ke=h.useRef(),te=h.useRef(),en=h.useRef(null),De=h.useRef(null),pr=h.useRef(0),ut=h.useRef(!1),On=h.useRef(0),H=h.useRef(!1),se=h.useRef(""),Dn=h.useRef(void 0),ct=h.useRef(async()=>{}),bn=h.useRef(!1),dt=h.useRef(!1),fr=h.useRef(new Set),$t=h.useRef(r);$t.current=r;const kn=h.useRef(new Map),xa=h.useRef(null),Li=h.useRef(0),wa=h.useRef(i);wa.current=i;const Sa=h.useRef(L);Sa.current=L;const ao=a??s,Et=u??s,ba=typeof c=="number"?c:(c==null?void 0:c.top)??0,ka=typeof c=="number"?c:(c==null?void 0:c.right)??0,Pa=typeof c=="number"?c:(c==null?void 0:c.bottom)??0,Ca=typeof c=="number"?c:(c==null?void 0:c.left)??0,pt=h.useMemo(()=>({top:ba,right:ka,bottom:Pa,left:Ca}),[ba,ka,Pa,Ca]),nn=h.useCallback(C=>{const M=$t.current[C];if(M===void 0)return`#${C}`;try{return String(wa.current(M,C))}catch{return`#${C}`}},[]),_a=h.useCallback(()=>{const C=$t.current;let M=String(C.length);for(let D=0;D<C.length;D++)M+=`|${nn(D)}`;return M},[nn]),Ta=JSON.stringify(I??null),G=h.useMemo(()=>Ky(JSON.parse(Ta)??void 0),[Ta]),[ft,Kf]=h.useState(()=>({columns:l,columnWidth:0,gap:Et,columnHeights:Array(l).fill(0),totalHeight:0,containerWidth:0,containerHeight:0})),[uo,Qf]=h.useState(()=>new Map),[zn,Ra]=h.useState({scrollTop:0,scrollLeft:0,scrollHeight:0,scrollWidth:0,clientHeight:0,clientWidth:0,isScrolling:!1,direction:null}),[,Yf]=h.useState({});kn.current=uo;const Oi=h.useRef(ft),Ma=h.useCallback(C=>{const M=kn.current;if(M.size===0)return null;const D=C.scrollTop;if(D<=0)return null;let Y=-1,ue=Number.POSITIVE_INFINITY,Ee=-1,X=Number.NEGATIVE_INFINITY;M.forEach((_e,Pn)=>{_e.y>=D&&_e.y<ue&&(ue=_e.y,Y=Pn),_e.y<=D&&_e.y+_e.height>D&&_e.y>X&&(X=_e.y,Ee=Pn)});const pe=Y>=0?Y:Ee,An=M.get(pe);return An?{index:pe,offset:An.y-D}:null},[]),Ia=h.useRef(""),Nt=h.useRef(null),co=h.useCallback(()=>{const C=Sa.current;if(!C)return;const M=E.current;if(!M)return;const{scrollTop:D,scrollHeight:Y,clientHeight:ue}=M,Ee=Y-(D+ue);if(Ee>=v)return;const X=`${D}|${Y}|${ue}`;X!==Ia.current&&(Ia.current=X,C(Ee))},[E,v]),$a=h.useCallback(()=>{Nt.current==null&&(Nt.current=window.setTimeout(()=>{Nt.current=null,co()},0))},[co]),jt=h.useCallback(async()=>{const C=E.current;if(!C)return;const M=`${l}|${Et}|${ao}|${pt.top},${pt.right},${pt.bottom},${pt.left}|${d}|${(G==null?void 0:G.estimateHeight)??""}|${(G==null?void 0:G.adaptiveEstimate)??""}|${(G==null?void 0:G.estimateQuantile)??""}`;if(ut.current){(M!==se.current||_!==Dn.current)&&(H.current=!0);return}ut.current=!0,se.current=M,Dn.current=_,dt.current=!1;const D=Ma(C);try{if(await(j==null?void 0:j())===!1)return;be&&console.time("[WaterfallCore] layout"),W==null||W();const ue=C.clientWidth,Ee=$t.current.map((_e,Pn)=>{const Ai=ie.current.get(Pn),Wi=(Ai==null?void 0:Ai.offsetHeight)??0;return Wi>0?(z.current.set(nn(Pn),Wi),Wi):z.current.get(nn(Pn))??0});let X;if(G)if(G.adaptiveEstimate===!1)X=G.estimateHeight;else{const _e=Gy(z.current.values(),G.estimateHeight??240,G.estimateQuantile);Math.abs(_e-On.current)>8&&(On.current=_e),X=On.current||_e}const pe=Fy({heights:Ee,columns:l,containerWidth:ue,columnGap:Et,rowGap:ao,padding:pt,alignmentMode:d,estimateHeight:X,minItemHeight:b,hooks:_}),An={columns:pe.columns,columnWidth:pe.columnWidth,gap:Et,columnHeights:pe.columnHeights,totalHeight:pe.totalHeight,containerWidth:ue,containerHeight:C.clientHeight};if(Oi.current=An,kn.current=pe.positions,Kf(An),Qf(pe.positions),bn.current=!0,be&&(console.timeEnd("[WaterfallCore] layout"),pe.estimatedCount>0&&console.debug(`[WaterfallCore] ${pe.estimatedCount} 项按估值占位（estimateHeight=${X}）`)),oe==null||oe(),D&&P){const _e=pe.positions.get(D.index);if(_e){const Pn=_e.y-D.offset-C.scrollTop;Math.abs(Pn)>=1&&(Li.current+=Pn)}}$a()}catch(Y){console.warn("[vane-waterfall] 布局过程出错，本次布局已跳过",Y)}finally{ut.current=!1,H.current&&(H.current=!1,ct.current())}},[l,Et,ao,pt,d,G==null?void 0:G.estimateHeight,_,j,W,oe,be,b,P,E,ie,nn,Ma,$a]);h.useLayoutEffect(()=>{const C=Li.current;if(!C)return;Li.current=0;const M=E.current;M&&(M.scrollTop+=C)}),ct.current=jt;const po=h.useCallback(()=>{te.current&&window.clearTimeout(te.current),te.current=window.setTimeout(()=>{ct.current()},m)},[m]),Ea=h.useCallback(()=>{en.current==null&&(en.current=requestAnimationFrame(()=>{en.current=null,ct.current()}))},[]),Na=h.useCallback(C=>{De.current==null&&(De.current=requestAnimationFrame(()=>{De.current=null;const M=E.current;M&&Ra(D=>{const Y=M.scrollTop,ue=M.scrollLeft,Ee=Y>D.scrollTop?"down":Y<D.scrollTop?"up":ue>D.scrollLeft?"right":ue<D.scrollLeft?"left":D.direction,X={scrollTop:Y,scrollLeft:ue,scrollHeight:M.scrollHeight,scrollWidth:M.scrollWidth,clientHeight:M.clientHeight,clientWidth:M.clientWidth,isScrolling:C,direction:Ee};return D.scrollTop===X.scrollTop&&D.scrollLeft===X.scrollLeft&&D.scrollHeight===X.scrollHeight&&D.clientHeight===X.clientHeight&&D.isScrolling===X.isScrolling?D:X})}))},[E]),qf=h.useCallback(()=>{const C=E.current;if(!C)return;const M=Date.now();Na(!0);const D=C.scrollTop,Y=C.clientHeight;if(le==null||le(D,C.scrollLeft),M-pr.current>=g&&(pr.current=M,co(),B||U)){const ue=kn.current,Ee=new Set;ue.forEach((X,pe)=>{Math.max(0,Math.min(D+Y,X.y+X.height)-Math.max(D,X.y))>0&&(Ee.add(pe),fr.current.has(pe)||B==null||B(pe,nc(pe,X,D,Y)))}),fr.current.forEach(X=>{if(Ee.has(X))return;const pe=ue.get(X);pe&&(U==null||U(X,nc(X,pe,D,Y)))}),fr.current=Ee}ke.current&&window.clearTimeout(ke.current),ke.current=window.setTimeout(()=>{Ra(ue=>({...ue,isScrolling:!1}))},m)},[Na,le,B,U,g,m,co]),Xf=h.useCallback(()=>{const C=E.current;C&&(T==null||T(C.clientWidth,C.clientHeight),po())},[T,po,E]);h.useEffect(()=>{$==null||$(),bn.current||jt();const C=E.current;return C&&typeof ResizeObserver<"u"&&(ye.current=new ResizeObserver(Xf),ye.current.observe(C)),()=>{var M;A==null||A(),(M=ye.current)==null||M.disconnect(),ye.current=null,ne.current.forEach(D=>{try{D.disconnect()}catch{}}),ne.current.clear(),ke.current&&window.clearTimeout(ke.current),te.current&&window.clearTimeout(te.current),Nt.current!=null&&(window.clearTimeout(Nt.current),Nt.current=null),De.current!=null&&(cancelAnimationFrame(De.current),De.current=null),en.current!=null&&(cancelAnimationFrame(en.current),en.current=null)}},[]);const Di=h.useRef(new Map);h.useEffect(()=>{const C=_a();if(C===xa.current)return;xa.current=C,bn.current=!1,dt.current=!1,Di.current.clear();const M=new Set;for(let Y=0;Y<$t.current.length;Y++)M.add(nn(Y));let D=0;z.current.forEach((Y,ue)=>{M.has(ue)?D+=1:z.current.delete(ue)}),D===0&&(On.current=0),po()},[r,po,_a,nn]),h.useEffect(()=>{bn.current=!1,dt.current=!1,jt()},[l,Et,ao,pt,d,G==null?void 0:G.estimateHeight,G==null?void 0:G.adaptiveEstimate,G==null?void 0:G.estimateQuantile,_]);const ja=h.useRef(()=>{});ja.current=(C,M)=>{if(M){ie.current.set(C,M);const D=nn(C),Y=M.offsetHeight;if(Y>0&&z.current.set(D,Y),(G?G.dynamicHeights!==!1:!0)&&!ne.current.has(C)&&typeof ResizeObserver<"u"){const Ee=new ResizeObserver(()=>{const X=M.offsetHeight;if(X<=0)return;z.current.set(nn(C),X);const pe=kn.current.get(C),An=pe?Math.abs(pe.height-X)>.5:!1,_e=Di.current.get(C)===X;pe?An&&!_e&&(Di.current.set(C,X),Ea()):Ea()});try{Ee.observe(M),ne.current.set(C,Ee)}catch{}}K==null||K(C,M),bn.current&&!kn.current.has(C)&&!ut.current&&!dt.current&&(dt.current=!0,requestAnimationFrame(()=>void jt()))}else{ie.current.delete(C),zi.current.delete(C);const D=ne.current.get(C);if(D){try{D.disconnect()}catch{}ne.current.delete(C)}F==null||F(C)}};const zi=h.useRef(new Map),Jf=C=>{let M=zi.current.get(C);return M||(M=D=>ja.current(C,D),zi.current.set(C,M)),M},mt=h.useMemo(()=>G?Vy(uo,r.length,zn.scrollTop,zn.clientHeight||ft.containerHeight||600,G.overscan):{start:0,end:Math.max(0,r.length-1),hiddenCount:0},[G,uo,r.length,zn.scrollTop,zn.clientHeight,ft.containerHeight]);h.useImperativeHandle(t,()=>({relayout:()=>{z.current.clear(),On.current=0,$t.current.forEach((C,M)=>{const D=ie.current.get(M);if(!D)return;const Y=D.offsetHeight;Y>0&&z.current.set(nn(M),Y)}),jt()},scrollToItem:(C,M={})=>{const D=E.current,Y=kn.current.get(C);!D||!Y||D.scrollTo({top:By(Y,D.clientHeight,M.block??"start",M.offset??0),behavior:M.behavior??"auto"})},scrollToTop:(C={})=>{var M;(M=E.current)==null||M.scrollTo({top:C.offset??0,behavior:C.behavior??"auto"})},scrollToBottom:(C={})=>{const M=E.current;M&&M.scrollTo({top:M.scrollHeight-M.clientHeight+(C.offset??0),behavior:C.behavior??"auto"})},getItemPosition:C=>kn.current.get(C)??null,getAllItemPositions:()=>kn.current,getColumnHeights:()=>Oi.current.columnHeights,getLayoutInfo:()=>Oi.current,getViewportInfo:()=>{const C=E.current;return C?{scrollTop:C.scrollTop,scrollLeft:C.scrollLeft,scrollHeight:C.scrollHeight,scrollWidth:C.scrollWidth,clientHeight:C.clientHeight,clientWidth:C.clientWidth,isScrolling:zn.isScrolling,direction:zn.direction}:zn},getVisibleRange:()=>({start:mt.start,end:mt.end}),getVisibleItems:()=>new Set(fr.current),forceUpdate:()=>Yf({}),getContainer:()=>E.current,getItemElement:C=>ie.current.get(C)??null,measureItem:async C=>{const M=ie.current.get(C),D=nn(C);if(M){const ue={width:M.offsetWidth,height:M.offsetHeight};return ue.height>0&&z.current.set(D,ue.height),ue}const Y=z.current.get(D);return Y?{width:ft.columnWidth,height:Y}:{width:ft.columnWidth,height:(G==null?void 0:G.estimateHeight)??0}}}),[jt,ft,zn,mt,E,ie,G==null?void 0:G.estimateHeight,nn]);const Zf=h.useMemo(()=>{if(!G)return r.map((M,D)=>D);const C=[];for(let M=mt.start;M<=mt.end;M++)C.push(M);return C},[G,r,mt.start,mt.end]);return f.jsxs("div",{ref:E,style:{position:"relative",overflowX:"hidden",overflowY:"auto",...p},className:y,onScroll:qf,"data-vane-waterfall":"",children:[Q,f.jsx("div",{style:{position:"relative",width:"100%",height:ft.totalHeight,minWidth:0},children:Zf.map(C=>{const M=r[C];return M===void 0?null:f.jsx(Qy,{index:C,item:M,position:uo.get(C),useTransform:S,itemStyle:x,itemClassName:w,renderItem:o,onClick:O,itemRef:Jf(C)},i(M,C))})})]})});function Yy(){const e=new Map,n=new Map,t=(l,s)=>{const a=e.get(l);if(a)for(const u of[...a])try{u(s)}catch(d){console.warn(`[PluginBus] handler error for event "${l}"`,d)}},r=(l,s)=>{let a=e.get(l);return a||(a=new Set,e.set(l,a)),a.add(s),()=>{a==null||a.delete(s)}},o=(l,s)=>{const a=u=>{s(u),i(l,a)};return r(l,a)},i=(l,s)=>{var a;if(!s){e.delete(l);return}(a=e.get(l))==null||a.delete(s)};return{emit:t,on:r,once:o,off:i,getData:l=>n.get(l),setData:(l,s)=>{const a=n.get(l);n.set(l,s),a!==s&&t(l,s)},deleteData:l=>{const s=n.has(l);n.delete(l),s&&t(l,void 0)},hasData:l=>n.has(l),getAll:()=>{const l={};return n.forEach((s,a)=>{l[a]=s}),l},clear:()=>{e.clear(),n.clear()}}}function Vp(e){const n=new Map(e.map(s=>[s.name,s])),t=[];for(const s of e)for(const a of s.dependencies??[])n.has(a)||t.push(`${s.name} -> ${a}`);const r=[],o=new Set,i=[...e],l=s=>(s.dependencies??[]).every(a=>o.has(a)||!n.has(a));for(;i.length>0;){const s=i.filter(l);if(s.length===0)throw new Error(`[vane/plugin-core] 插件循环依赖: ${i.map(u=>u.name).join(" <-> ")}`);let a=s[0];for(const u of s)(u.priority??0)>(a.priority??0)&&(a=u);r.push(a),o.add(a.name),i.splice(i.indexOf(a),1)}return t.length>0&&console.warn(`[vane/plugin-core] 以下插件依赖未注册，将被忽略:
  ${t.join(`
  `)}`),r}async function qy(e,n={}){const{timeout:t=3e3,name:r="anonymous",hook:o="unknown"}=n;if(!t||t<=0)return await e();let i;const l=new Promise((s,a)=>{i=setTimeout(()=>{a(new Error(`[vane/plugin-core] 插件 ${r} 的钩子 ${o} 超时(${t}ms)`))},t)});try{return await Promise.race([Promise.resolve().then(e),l])}finally{i&&clearTimeout(i)}}const Xy=new Set(["onMount","onUnmount","onPropsChange","onError"]);function Jy(e={}){const n=e.logger??console,t=e.sandbox??!0,r=e.timeout??3e3,o=[],i=[],l=new Map,s=()=>Vp([...l.values()].filter(u=>u.enabled!==!1)),a=u=>{l.set(u.name,{...u,enabled:u.enabled??!0}),u.init&&Promise.resolve(u.init()).catch(d=>{n.warn(`[PluginManager] init failed for ${u.name}`,d)})};return{register:a,registerAll:u=>{for(const d of u)a(d)},unregister:u=>{const d=l.get(u);d&&(d.destroy&&Promise.resolve(d.destroy()).catch(c=>{n.warn(`[PluginManager] destroy failed for ${d.name}`,c)}),l.delete(u))},getPlugin:u=>l.get(u),getAllPlugins:()=>[...l.values()],getEnabledPlugins:()=>[...l.values()].filter(u=>u.enabled!==!1),getExecutionOrder:s,enable:u=>{const d=l.get(u);d&&(d.enabled=!0)},disable:u=>{const d=l.get(u);d&&(d.enabled=!1)},has:u=>l.has(u),executeHook:async(u,d,...c)=>{var p,y;for(const x of s()){const w=(p=x.hooks)==null?void 0:p[u];if(typeof w!="function")continue;const S=x.sandbox??t,g=x.timeout??r;let m;try{m=S?await qy(()=>w(d,...c),{timeout:g,name:x.name,hook:String(u)}):await w(d,...c)}catch(v){if(o.push({plugin:x.name,hook:String(u),error:v}),n.warn(`[PluginManager] hook ${String(u)} failed in ${x.name}`,v),(y=e.onError)==null||y.call(e,x.name,String(u),v),u==="onError")break;continue}if(Xy.has(String(u))&&typeof m=="function"){i.push(m);continue}if(m===!1)return!1;if(m!==void 0&&m!==!0)return m}},clear:()=>{const u=i.splice(0);for(const d of u.reverse())try{d()}catch(c){n.warn("[PluginManager] cleanup failed",c)}for(const d of l.values())d.destroy&&Promise.resolve(d.destroy()).catch(c=>{n.warn(`[PluginManager] destroy failed for ${d.name}`,c)});l.clear()},getErrors:()=>[...o]}}var Zy=Object.defineProperty,ev=(e,n,t)=>n in e?Zy(e,n,{enumerable:!0,configurable:!0,writable:!0,value:t}):e[n]=t,nv=(e,n,t)=>ev(e,n+"",t);class Kp extends Tt.Component{constructor(){super(...arguments),nv(this,"state",{error:null})}static getDerivedStateFromError(n){return{error:n}}componentDidCatch(n,t){var r,o;console.warn("[vane/plugin-core] 插件渲染错误已被隔离",n,t),(o=(r=this.props).onError)==null||o.call(r,n,t)}render(){const{error:n}=this.state;return n?this.props.fallback?this.props.fallback(n):null:this.props.children}}let Io=null;function tv(e=!1){if(Io&&!e)return Io;const n=typeof window<"u"?window.innerWidth:1024,t=typeof window<"u"?window.innerHeight:768,r=typeof window<"u"&&window.devicePixelRatio||1,o=typeof navigator<"u"&&navigator.userAgent||"",i=/iPad|Tablet/i.test(o),l=/Mobile|Android|iPhone/i.test(o),s=typeof window<"u"&&("ontouchstart"in window||(navigator.maxTouchPoints??0)>0);return Io={type:i?"tablet":l?"mobile":"desktop",os:o,browser:o,devicePixelRatio:r,viewportWidth:n,viewportHeight:t,isTouchDevice:s,isRetina:r>=2},Io}function rc(e,n){if(Object.is(e,n))return!0;if(typeof e!="object"||typeof n!="object"||e===null||n===null)return!1;const t=Object.keys(e),r=Object.keys(n);return t.length!==r.length?!1:t.every(o=>Object.is(e[o],n[o]))}function rv(e){const{plugins:n,props:t,data:r,initialState:o,containerRef:i,enableDebug:l=!1,managerOptions:s,extendContext:a}=e,u=h.useRef(null),d=i??u,c=h.useRef(null);c.current||(c.current=Jy(s));const p=c.current,y=h.useRef(null);y.current||(y.current=Yy());const x=y.current,w=h.useRef(new Map),[S,g]=h.useState(o??{}),[,m]=h.useState(0),v=h.useCallback(()=>m(L=>L+1),[]),b=h.useMemo(()=>tv(),[]),P=h.useRef(n),I=P.current;(I.length!==n.length||n.some((L,O)=>L!==I[O]))&&(P.current=n);const _=P.current,$=_.map(L=>L.name).join("|");h.useLayoutEffect(()=>{p.clear(),p.registerAll(_),l&&console.debug("[vane/plugin-core] plugins registered:",$)},[_]),h.useLayoutEffect(()=>()=>{p.executeHook("onUnmount",j.current),p.clear()},[p]);const A=h.useMemo(()=>Vp(_),[_]),j=h.useRef(null),W=h.useRef(t);rc(W.current,t)||(W.current=t);const oe=W.current,K=h.useRef(r);rc(K.current,r)||(K.current=r);const F=K.current,B=h.useMemo(()=>{const L={props:oe,data:F,bus:x,refs:{container:d,getContainer:()=>d.current},state:S,setState:O=>g(Q=>({...Q,...O})),shared:w.current,deviceInfo:b,forceUpdate:v,getSize:()=>{const O=d.current;return O?{width:O.offsetWidth,height:O.offsetHeight}:{width:0,height:0}},logger:console};return a?a(L):L},[oe,F,S,b,x,a]);j.current=B;const U=h.useCallback(L=>{var Q,Z;let O=L;for(const Fe of A){const be=(Q=Fe.hooks)==null?void 0:Q.transformProps;if(typeof be=="function")try{O=be(O)}catch(R){(((Z=j.current)==null?void 0:Z.logger)??console).warn(`[plugin-core] ${Fe.name}.transformProps 执行失败，已跳过`,R)}}return O},[A]),le=h.useCallback(L=>{var Q,Z;let O=L;for(const Fe of A){const be=(Q=Fe.hooks)==null?void 0:Q.transformData;if(typeof be=="function")try{O=be(j.current,O)}catch(R){(((Z=j.current)==null?void 0:Z.logger)??console).warn(`[plugin-core] ${Fe.name}.transformData 执行失败，已跳过`,R)}}return O},[A]),T=h.useCallback((L,...O)=>p.executeHook(L,j.current,...O),[p]);return{manager:p,bus:x,context:B,state:S,setState:B.setState,execute:T,transformProps:U,transformData:le,orderedPlugins:A}}h.createContext(null);function $o(e,n,t){const{hook:r,position:o="after"}=t;return e.filter(i=>i.enabled!==!1).filter(i=>{var l;return typeof((l=i.hooks)==null?void 0:l[r])=="function"}).filter(i=>{var s;const l=(s=i.config)==null?void 0:s.slotPosition;return o==="before"?l==="before":o==="footer"?l===void 0||l==="after"||l==="footer":l===void 0||l==="after"}).sort((i,l)=>{var s,a;return(((s=i.config)==null?void 0:s.order)??0)-(((a=l.config)==null?void 0:a.order)??0)||(l.priority??0)-(i.priority??0)}).map(i=>{try{const l=i.hooks[r](n);return l==null?null:f.jsx(Kp,{children:l},`vane-slot-${i.name}`)}catch(l){return console.warn(`[vane/plugin-core] 插件 ${i.name} 的 ${r} 渲染失败`,l),null}})}function ov(e,n,t){return f.jsxs(f.Fragment,{children:[$o(e,n,{hook:"renderHeader",position:"before"}),t,$o(e,n,{hook:"renderOverlay"}),$o(e,n,{hook:"renderHeader",position:"after"}),$o(e,n,{hook:"renderFooter",position:"footer"})]})}const iv={columns:0,columnWidth:0,gap:0,columnHeights:[],totalHeight:0,containerWidth:0,containerHeight:0},lv={scrollTop:0,scrollLeft:0,scrollHeight:0,scrollWidth:0,clientHeight:0,clientWidth:0,isScrolling:!1,direction:null};function cn(e,n,...t){if(typeof n=="function")try{return n(...t)}catch(r){console.warn(`[vane-waterfall] ${e} 回调抛错，已忽略`,r);return}}async function oc(e,n,...t){if(typeof n=="function")try{return await n(...t)}catch(r){console.warn(`[vane-waterfall] ${e} 回调抛错，已忽略`,r);return}}function sv(){const e=typeof navigator<"u"?navigator:void 0,n=(e==null?void 0:e.connection)||(e==null?void 0:e.mozConnection)||(e==null?void 0:e.webkitConnection);if(n)return{effectiveType:n.effectiveType||"4g",downlink:Number(n.downlink||10),rtt:Number(n.rtt||50),saveData:!!n.saveData,online:(e==null?void 0:e.onLine)!==!1}}function ic(e,n,t){let r=Number.POSITIVE_INFINITY,o=-1;return e.forEach((i,l)=>{Math.max(0,Math.min(n+t,i.y+i.height)-Math.max(n,i.y))>0&&(l<r&&(r=l),l>o&&(o=l))}),o<0?{start:0,end:0}:{start:r,end:o}}function av(e,n){const t=Array.isArray(n)?{plugins:n}:n,{plugins:r,enableDebug:o=!1}=t,i=h.forwardRef((l,s)=>{const a=h.useRef(null),u=h.useRef(new Map),d=h.useRef(null),c=h.useMemo(()=>sv(),[]),p=h.useRef(null),[y,x]=h.useState(iv),[w,S]=h.useState(()=>new Map),[g,m]=h.useState(lv),[v,b]=h.useState(!1),[P,I]=h.useState(0),_=h.useCallback(R=>{var te,en,De,pr,ut,On;const E=()=>{var H;return((H=d.current)==null?void 0:H.getLayoutInfo())??y},ee=()=>{var H;return((H=d.current)==null?void 0:H.getAllItemPositions())??w},ie=()=>{var H;return((H=d.current)==null?void 0:H.getViewportInfo())??g},z=()=>{var H,se;return((H=p.current)==null?void 0:H.items)??((se=R.props)==null?void 0:se.items)??[]},ne=()=>{var H;return((H=R.props)==null?void 0:H.items)??[]},ye=()=>{var ct;const H=(ct=d.current)==null?void 0:ct.getVisibleItems();if(H&&H.size>0)return H;const se=ie(),Dn=new Set;return ee().forEach((bn,dt)=>{Math.max(0,Math.min(se.scrollTop+se.clientHeight,bn.y+bn.height)-Math.max(se.scrollTop,bn.y))>0&&Dn.add(dt)}),Dn},ke={...R,items:z(),itemCount:z().length,rawItems:ne(),containerRef:a,itemRefs:u.current,getItemRef:H=>u.current.get(H)??null,layout:E(),itemPositions:ee(),getItemPosition:H=>ee().get(H)??null,viewport:ie(),visibleItems:ye(),visibleRange:ic(ee(),ie().scrollTop,ie().clientHeight),isLayouting:v,isScrolling:g.isScrolling,isDragging:!!((en=(te=R.state)==null?void 0:te.dragInfo)!=null&&en.isDragging),isLoading:!!(((De=R.state)==null?void 0:De.isLoading)??!1),hasMore:!!(((pr=R.state)==null?void 0:pr.hasMore)??!0),error:((ut=R.state)==null?void 0:ut.error)??null,sharedData:R.shared,networkInfo:c,dragInfo:(On=R.state)==null?void 0:On.dragInfo,relayout:()=>{var H;return(H=d.current)==null?void 0:H.relayout()},scrollToItem:(H,se)=>{var Dn;return(Dn=d.current)==null?void 0:Dn.scrollToItem(H,se)},scrollToTop:H=>{var se;return(se=d.current)==null?void 0:se.scrollToTop(H)},scrollToBottom:H=>{var se;return(se=d.current)==null?void 0:se.scrollToBottom(H)},measureItem:H=>{var se;return((se=d.current)==null?void 0:se.measureItem(H))??Promise.resolve({width:0,height:0})}};return Object.defineProperties(ke,{layout:{get:E,enumerable:!0,configurable:!0},itemPositions:{get:ee,enumerable:!0,configurable:!0},viewport:{get:ie,enumerable:!0,configurable:!0},items:{get:z,enumerable:!0,configurable:!0},itemCount:{get:()=>z().length,enumerable:!0,configurable:!0},rawItems:{get:ne,enumerable:!0,configurable:!0},visibleItems:{get:ye,enumerable:!0,configurable:!0},hasMore:{get:()=>{var H,se;return((H=p.current)==null?void 0:H.hasMore)??((se=R.state)==null?void 0:se.hasMore)??!0},enumerable:!0,configurable:!0},isLoading:{get:()=>{var H,se;return((H=p.current)==null?void 0:H.isLoading)??((se=R.state)==null?void 0:se.isLoading)??!1},enumerable:!0,configurable:!0},props:{get:()=>p.current??R.props,enumerable:!0,configurable:!0},visibleRange:{get:()=>{const H=ie();return ic(ee(),H.scrollTop,H.clientHeight)},enumerable:!0,configurable:!0}}),ke},[y,w,g,v,c]),A=rv({plugins:r,props:l,enableDebug:o,containerRef:a,extendContext:_}),j=h.useRef(A.context);h.useLayoutEffect(()=>{j.current=A.context}),h.useEffect(()=>A.bus.on("props:invalidate",()=>I(R=>R+1)),[A.bus]);const W=h.useCallback((R,...E)=>A.execute(R,...E),[A.manager]),oe=A.orderedPlugins,K=r.map(R=>R.name).join("|"),F=h.useMemo(()=>{const R=oe.filter(z=>{var ne;return typeof((ne=z.hooks)==null?void 0:ne.calculateColumns)=="function"}),E=oe.filter(z=>{var ne;return typeof((ne=z.hooks)==null?void 0:ne.calculateColumnWidth)=="function"}),ee=oe.filter(z=>{var ne;return typeof((ne=z.hooks)==null?void 0:ne.calculateItemPosition)=="function"});if(!R.length&&!E.length&&!ee.length)return;const ie=(z,ne,ye)=>console.warn(`[vane-waterfall] ${z} 的 ${ne} 执行失败`,ye);return{calculateColumns:R.length?z=>{var ye,ke,te;const ne=((te=(ke=(ye=j.current)==null?void 0:ye.containerRef)==null?void 0:ke.current)==null?void 0:te.clientWidth)??0;for(const en of R)try{const De=en.hooks.calculateColumns(j.current,ne);if(typeof De=="number"&&Number.isFinite(De))return De}catch(De){ie(en.name,"calculateColumns",De)}}:void 0,calculateColumnWidth:E.length?(z,ne,ye)=>{for(const ke of E)try{const te=ke.hooks.calculateColumnWidth(j.current,ye,ne);if(typeof te=="number"&&Number.isFinite(te))return te}catch(te){ie(ke.name,"calculateColumnWidth",te)}}:void 0,calculateItemPosition:ee.length?(z,ne,ye)=>{for(const ke of ee)try{const te=ke.hooks.calculateItemPosition(j.current,z,ne,ye);if(te)return te}catch(te){ie(ke.name,"calculateItemPosition",te)}}:void 0}},[oe]),B=h.useCallback(()=>{const R=d.current;if(!R)return;const E=R.getLayoutInfo(),ee=R.getAllItemPositions(),ie=R.getViewportInfo();x(z=>z.totalHeight===E.totalHeight&&z.columns===E.columns&&z.columnWidth===E.columnWidth&&z.containerWidth===E.containerWidth?z:E),S(z=>{if(z===ee)return z;if(z.size!==ee.size)return ee;let ne=!0;return ee.forEach((ye,ke)=>{if(ne===!1)return;const te=z.get(ke);(!te||te.x!==ye.x||te.y!==ye.y||te.width!==ye.width||te.height!==ye.height||te.column!==ye.column)&&(ne=!1)}),ne?z:ee}),m(z=>z.scrollTop===ie.scrollTop&&z.clientHeight===ie.clientHeight&&z.scrollHeight===ie.scrollHeight&&z.isScrolling===ie.isScrolling?z:ie)},[]),U=h.useMemo(()=>A.transformProps(l),[A.transformProps,l,P]);h.useEffect(()=>{r.some(R=>R.name==="PaginationPlugin")&&r.some(R=>R.name==="InfiniteScrollPlugin")&&console.warn("[vane-waterfall] PaginationPlugin 与 InfiniteScrollPlugin 互斥：两者都会改写 items，请只保留一个")},[K]),h.useEffect(()=>{W("onMount")},[W]);const le=h.useRef(l);h.useEffect(()=>{const R=le.current;R!==l&&(le.current=l,W("onPropsChange",R,l))},[l,W]),p.current=U;const T=h.useCallback(async()=>(b(!0),await W("onBeforeLayout")===!1?(b(!1),!1):!0),[W]),L=h.useCallback(()=>{W("onLayout")},[W]),O=h.useCallback(()=>{b(!1),W("onLayoutComplete"),Promise.resolve().then(B)},[W,B]),Q=h.useMemo(()=>oe.filter(R=>{var E;return typeof((E=R.hooks)==null?void 0:E.renderItemWrapper)=="function"}),[oe]),Z=U.renderItem,Fe=h.useCallback((R,E)=>{let ee=(Z==null?void 0:Z(R,E))??null;for(const ie of Q)try{const z=ie.hooks.renderItemWrapper(j.current,ee,E);z!=null&&(ee=z)}catch(z){console.warn(`[vane-waterfall] ${ie.name} 的 renderItemWrapper 失败`,z)}return ee},[Z,Q]),be={...U,containerRefExternal:a,itemRefsExternal:u,debug:U.debug??o,layoutHooks:F??U.layoutHooks,renderItem:Fe,children:f.jsx(Kp,{children:ov(A.orderedPlugins,A.context,U.children)}),onMount:()=>{cn("onMount",U.onMount)},onUnmount:()=>{cn("onUnmount",U.onUnmount)},onBeforeLayout:async()=>await T()===!1?!1:await oc("onBeforeLayout",U.onBeforeLayout)??!0,onLayout:()=>{cn("onLayout",U.onLayout),L()},onLayoutComplete:()=>{cn("onLayoutComplete",U.onLayoutComplete),O()},onItemMount:(R,E)=>{cn("onItemMount",U.onItemMount,R,E),W("onItemMount",R,E)},onItemUnmount:R=>{cn("onItemUnmount",U.onItemUnmount,R),W("onItemUnmount",R)},onItemEnterViewport:(R,E)=>{cn("onItemEnterViewport",U.onItemEnterViewport,R,E),W("onItemEnterViewport",R,E)},onItemLeaveViewport:(R,E)=>{cn("onItemLeaveViewport",U.onItemLeaveViewport,R,E),W("onItemLeaveViewport",R,E)},onScroll:(R,E)=>{cn("onScroll",U.onScroll,R,E),W("onScroll",R,E),B()},onResize:(R,E)=>{cn("onResize",U.onResize,R,E),W("onResize",R,E)},onReachBottom:async R=>{await oc("onReachBottom",U.onReachBottom,R),await W("onReachBottom",R)},onItemClick:(R,E,ee)=>{cn("onItemClick",U.onItemClick,R,E,ee),W("onItemClick",R,E,ee)}};return f.jsx(e,{ref:R=>{d.current=R,typeof s=="function"?s(R):s&&(s.current=R)},...be})});return i.displayName="WithPlugins(WaterfallCore)",i}function uv(e){let n=e%2147483647;return n<=0&&(n+=2147483646),()=>(n=n*16807%2147483647,(n-1)/2147483646)}const ml=["林一白","苏见月","陈默","阿岚","周知夏","陆青野","许星河","沈迟","顾亦","南野","唐小满","白露"],Eo=["阴天里的海边公路","手冲咖啡的第 30 天","把阳台改成了书房","城市夜行的三小时","一碗面的做法","老相机与新胶卷","周三的菜市场","窗台上的第四盆绿植","独居第五年的厨房","关于晨跑的碎念","旧书店的午后","这条街的雨"],No=["摄影","家居","美食","穿搭","旅行","手作","阅读","数码"];function Qp(e={}){const{count:n=40,seed:t=20261026,heightRange:r=[140,300],commerce:o=!1}=e,i=uv(t),[l,s]=r;return Array.from({length:n},(a,u)=>{const d=i(),c=i(),p=i(),y=`c${t}-${u}`;return{id:y,title:Eo[u%Eo.length]+(u>=Eo.length?` · ${Math.floor(u/Eo.length)+1}`:""),author:ml[Math.floor(d*ml.length)]??ml[0],height:Math.round((l+c*(s-l))/8)*8,hue:Math.floor(p*360),image:`https://picsum.photos/seed/${y}/400/500`,tag:No[Math.floor(d*No.length)%No.length]??No[0],price:o?Math.round((29+c*870)/10)*10:0,likes:Math.floor(20+p*9800),minutesAgo:Math.floor(d*60*24*14)}})}function lc(e){return e<60?`${Math.max(1,e)} 分钟前`:e<60*24?`${Math.floor(e/60)} 小时前`:`${Math.floor(e/60/24)} 天前`}function cv({height:e,hue:n,src:t,badge:r,glyph:o,radius:i=0,deep:l}){const s=(n+42)%360;return f.jsxs("div",{className:`thumb${t?" has-img":""}`,style:{height:e,borderRadius:i,backgroundImage:[`radial-gradient(132% 92% at 16% 6%, hsl(${n} 21% ${l?36:64}%) 0%, hsl(${s} 17% ${l?15:33}%) 100%)`].join(",")},children:[t?f.jsx("img",{className:"thumb-img",src:t,alt:"",loading:"lazy",decoding:"async",draggable:!1,onError:a=>{a.currentTarget.style.display="none"}}):null,o?f.jsx("span",{className:"thumb-glyph",children:o}):null,r?f.jsx("span",{className:"thumb-badge",children:r}):null]})}const dv=f.jsx("svg",{viewBox:"0 0 24 24",width:"14",height:"14",fill:"currentColor","aria-hidden":!0,children:f.jsx("path",{d:"M8 5v14l11-7z"})});function pv({card:e,variant:n="photo",fixed:t,pinned:r,corner:o}){const i=f.jsx(cv,{height:t?"100%":e.height,hue:e.hue,src:e.image,radius:0,deep:n==="video",badge:n==="video"?f.jsxs("span",{style:{display:"inline-flex",alignItems:"center",gap:4},children:[dv,Math.floor(e.minutesAgo/60),":",String(e.minutesAgo%60).padStart(2,"0")]}):n==="product"?`¥${e.price}`:r?"置顶":void 0,glyph:n==="doc"?f.jsx("span",{style:{fontSize:11,letterSpacing:.5},children:e.tag}):void 0});return t?f.jsxs("div",{className:"wf-card is-fixed",style:{height:e.height},children:[f.jsx("div",{className:"wf-card-fill",children:i}),f.jsxs("div",{className:"wf-card-cap",children:[f.jsx("p",{className:"wf-item-title",children:e.title}),f.jsxs("p",{className:"wf-item-meta",children:[e.author," · ",lc(e.minutesAgo)]})]}),o?f.jsx("span",{className:"wf-card-corner",children:o}):null]}):f.jsxs("div",{className:`wf-card is-${n}`,children:[i,f.jsxs("div",{className:"wf-card-cap",children:[f.jsx("p",{className:"wf-item-title",children:e.title}),f.jsx("p",{className:"wf-item-meta",children:n==="product"?f.jsxs(f.Fragment,{children:[f.jsxs("b",{className:"wf-price",children:["¥",e.price]}),f.jsx("span",{className:"wf-sep","aria-hidden":!0,children:"·"}),e.likes," 人收藏"]}):f.jsxs(f.Fragment,{children:[e.author,f.jsx("span",{className:"wf-sep","aria-hidden":!0,children:"·"}),lc(e.minutesAgo)]})})]}),o?f.jsx("span",{className:"wf-card-corner",children:o}):null]})}function fv({controls:e,cfg:n,onChange:t}){return f.jsx("div",{className:"ctl-bar",children:e.filter(r=>!r.when||r.when(n)).map(r=>{const o=n[r.key];return f.jsxs("label",{className:"ctl",title:r.hint,children:[f.jsxs("span",{className:"ctl-label",children:[r.label,f.jsx("b",{className:"ctl-val",children:r.kind==="switch"?o?"开":"关":String(o)})]}),r.kind==="switch"?f.jsx("button",{type:"button",className:`ctl-switch${o?" is-on":""}`,onClick:()=>t(r.key,!o),"aria-pressed":!!o,children:f.jsx("i",{})}):r.kind==="select"?f.jsx("select",{className:"ctl-select",value:String(o),onChange:i=>t(r.key,i.target.value),children:(r.options??[]).map(i=>f.jsx("option",{value:i.value,children:i.label},i.value))}):f.jsx("input",{className:"ctl-range",type:"range",min:r.min??0,max:r.max??100,step:r.step??1,value:Number(o),onChange:i=>t(r.key,Number(i.target.value))})]},r.key)})})}function Yp({lines:e,title:n="事件日志",empty:t="还没触发 —— 试着滚动、点一张卡",right:r}){return f.jsxs("div",{className:"log",children:[f.jsxs("div",{className:"log-head",children:[f.jsx("span",{children:n}),f.jsxs("span",{className:"log-right",children:[r,f.jsx("b",{children:e.length})]})]}),e.length===0?f.jsx("p",{className:"log-empty",children:t}):f.jsx("ol",{className:"log-list",children:e.map(o=>f.jsxs("li",{className:`log-line is-${o.kind}`,children:[f.jsx("time",{children:o.at}),f.jsx("span",{children:o.text})]},o.id))})]})}const mv={total:0,rendered:0,totalHeight:0,layoutMs:0,scrolls:0,columns:0};function gv({items:e}){return f.jsx("div",{className:"keyhint",children:e.map(([n,t])=>f.jsxs("span",{children:[f.jsx("kbd",{children:n}),t]},n))})}function q(e){const{count:n=48,seed:t=9101,heightRange:r,commerce:o,variant:i="photo",fixed:l,containerStyle:s,pluginKeys:a,instrument:u}=e;return function({cfg:c,log:p,setCfg:y}){var oe;const[x,w]=h.useState(()=>Qp({count:n,seed:t,heightRange:r,commerce:o})),S=h.useRef(null),[g,m]=h.useState(mv),v=h.useRef(0),b=h.useRef(0),P=h.useRef(null);P.current={cfg:c,items:x,setItems:w,setCfg:y,log:p,ref:S,meter:g};const I=h.useMemo(()=>{const K=a??Object.keys(c);return JSON.stringify(K.map(F=>[F,c[F]]))},[c]),_=h.useMemo(()=>{var F;const K=((F=e.plugins)==null?void 0:F.call(e,P.current))??[];return K.length?av(tc,K):tc},[I]),$=h.useCallback(K=>{const F=S.current;if(!F)return;const B=F.getLayoutInfo(),U=F.getVisibleRange(),le={total:K,rendered:Math.max(0,U.end-U.start+1),totalHeight:B.totalHeight,layoutMs:performance.now()-b.current,scrolls:v.current,columns:B.columns};m(T=>T.total===le.total&&T.rendered===le.rendered&&T.columns===le.columns&&Math.abs(T.totalHeight-le.totalHeight)<.5&&T.scrolls===le.scrolls&&Math.abs(T.layoutMs-le.layoutMs)<.05?T:le)},[]),A=h.useCallback(K=>{if(v.current+=1,u&&v.current%4===0){const F=S.current;if(F){const B=F.getVisibleRange(),U=Math.max(0,B.end-B.start+1);m(le=>le.rendered===U&&le.scrolls===v.current?le:{...le,rendered:U,scrolls:v.current})}}},[]),j=h.useMemo(()=>{var F;return{...((F=e.coreProps)==null?void 0:F.call(e,P.current))??{},...u?{onLayout:()=>{b.current=performance.now()},onLayoutComplete:()=>$(x.length),onScroll:A}:null}},[c,x,$,A]);h.useEffect(()=>{var F;const K=(F=e.effect)==null?void 0:F.call(e,P.current);return typeof K=="function"?K:void 0},[]);const W=h.useCallback((K,F)=>{var U;const B=(U=e.decorate)==null?void 0:U.call(e,P.current,K,F);return f.jsx(pv,{card:K,variant:i,fixed:l,pinned:B==null?void 0:B.pinned,corner:B==null?void 0:B.corner})},[]);return f.jsxs("div",{className:"stage",children:[(oe=e.chrome)==null?void 0:oe.call(e,P.current),f.jsx("div",{className:"stage-scroll",children:f.jsx(_,{ref:S,items:x,keyExtractor:K=>K.id,renderItem:W,containerStyle:{height:"var(--stage-h, 380px)",...s},...j})})]})}}const hv={slug:"basic",title:"基础示例",group:"basic",intro:"最省事的用法：一批高度不等的卡片，交给 Core 排。",why:"刚接入时先用这一页确认两件事 —— 容器给了高度、卡片真的按 item.height 渲染。这两条不对，后面装什么插件都白搭。",plugs:[],props:["columns={{{columns}}}","gap={{{gap}}}","containerStyle={{ height: 420 }}"],note:"containerStyle 必须给高度。不给高度 = 没有滚动上下文，Core 量不出视口，卡片会全部堆在顶部。",controls:[{key:"columns",label:"列数",kind:"number",init:3,min:1,max:6,hint:"props.columns"},{key:"gap",label:"间距",kind:"number",init:16,min:0,max:32,hint:"props.gap，行/列通用"}]},yv=q({count:40,seed:1201,plugins:()=>[],instrument:!0,coreProps:e=>({columns:Number(e.cfg.columns),gap:Number(e.cfg.gap)})}),vv=Object.freeze(Object.defineProperty({__proto__:null,default:yv,meta:hv},Symbol.toStringTag,{value:"Module"})),xv={slug:"columns",title:"自定义列数",group:"basic",intro:"写死列数，列宽自己算 —— 拖到 6 列看列宽怎么缩。",why:"后台表格、看板、固定版式的商品墙通常就是固定列数，不需要按容器自适应。",plugs:[],props:["columns={{{columns}}}","gap={{{gap}}}","containerStyle={{ height: 420 }}"],note:"写了 columns 又被 AutoColumnPlugin / ResponsiveColumnsPlugin 覆盖是常见困惑：那两个插件在 calculateColumns 钩子里返回列数，优先级高于 props。",controls:[{key:"columns",label:"列数",kind:"number",init:4,min:1,max:6},{key:"gap",label:"间距",kind:"number",init:12,min:0,max:32}]},wv=q({count:36,seed:1401,plugins:()=>[],instrument:!0,coreProps:e=>({columns:Number(e.cfg.columns),gap:Number(e.cfg.gap)}),chrome:e=>f.jsxs("p",{className:"stage-tip",children:["列宽 = (容器宽 − 间距×",Number(e.cfg.columns)-1,") ÷ ",Number(e.cfg.columns)," · 当前 ",f.jsx("b",{children:e.meter.columns})," 列 / 总高 ",f.jsx("b",{children:Math.round(e.meter.totalHeight)}),"px"]})}),Sv=Object.freeze(Object.defineProperty({__proto__:null,default:wv,meta:xv},Symbol.toStringTag,{value:"Module"})),bv={slug:"gap",title:"自定义间距",group:"basic",intro:"gap 是简写，rowGap / columnGap 分别覆盖它 —— 用开关切一次就记住了。",why:"图片流要更紧的列间距、更松的行间距，就得拆开写；只想整体松紧就用 gap。",plugs:[],props:["columns={3}",{text:"gap={{{gap}}}",when:e=>!e.split},{text:"rowGap={{{rowGap}}}",when:e=>!!e.split},{text:"columnGap={{{columnGap}}}",when:e=>!!e.split},"containerStyle={{ height: 420 }}"],note:"间距参与布局计算：改 gap 会改变列宽与每列落点，不是 CSS margin。三个同时给的时候 gap 只是「没被覆盖的那部分」的兜底。想让间距随窗口换档用 GapPlugin（下一页）。",controls:[{key:"split",label:"拆开行/列间距",kind:"switch",init:!0,hint:"关掉 → 只留 gap，它立刻生效"},{key:"gap",label:"gap（简写）",kind:"number",init:8,min:0,max:32,when:e=>!e.split},{key:"rowGap",label:"rowGap",kind:"number",init:24,min:0,max:40,when:e=>!!e.split},{key:"columnGap",label:"columnGap",kind:"number",init:8,min:0,max:40,when:e=>!!e.split}]},kv=q({count:30,seed:1501,plugins:()=>[],coreProps:e=>({columns:3,...e.cfg.split?{rowGap:Number(e.cfg.rowGap),columnGap:Number(e.cfg.columnGap)}:{gap:Number(e.cfg.gap)}}),chrome:e=>f.jsx("p",{className:"stage-tip",children:e.cfg.split?f.jsxs(f.Fragment,{children:["rowGap ",f.jsx("b",{children:Number(e.cfg.rowGap)})," · columnGap ",f.jsx("b",{children:Number(e.cfg.columnGap)})," ——",f.jsx("b",{children:" gap 被覆盖，此刻是空转的"})]}):f.jsxs(f.Fragment,{children:["gap ",f.jsx("b",{children:Number(e.cfg.gap)})," —— 行列同值，因为没给 rowGap / columnGap"]})})}),Pv=Object.freeze(Object.defineProperty({__proto__:null,default:kv,meta:bv},Symbol.toStringTag,{value:"Module"})),Cv={slug:"ref",title:"Ref 方法调用",group:"advanced",intro:"13 个 ref 方法逐个点一遍，返回值直接写进日志。",why:"图片加载完要重排、点导航要跳到某条、滚动位置要复位 —— 这些都不该改数据，而是调 ref。",plugs:[],props:["ref={ref}","columns={3}","containerStyle={{ height: 420 }}","onItemClick={(i) => ref.current?.scrollToItem(i)}"],note:"getAllItemPositions 返回的是实时 Map，不是渲染快照；虚拟化开启后，未挂载项仍保留测量值（getItemElement 会返回 null）。"},_v=[{key:"relayout",label:"relayout()",run:e=>{var n;return(n=e.ref.current)==null||n.relayout(),"清空高度缓存并重排"}},{key:"top",label:"scrollToTop()",run:e=>{var n;return(n=e.ref.current)==null||n.scrollToTop({behavior:"smooth"}),"回顶"}},{key:"bottom",label:"scrollToBottom()",run:e=>{var n;return(n=e.ref.current)==null||n.scrollToBottom({behavior:"smooth"}),"到底"}},{key:"item",label:"scrollToItem(i)",needsIndex:!0,run:()=>"见下方输入框"},{key:"pos",label:"getItemPosition(i)",needsIndex:!0,run:()=>"见下方输入框"},{key:"allpos",label:"getAllItemPositions()",run:e=>{var r;const n=(r=e.ref.current)==null?void 0:r.getAllItemPositions();if(!n)return"ref 还没就绪";const t=n.get(0);return`共 ${n.size} 项；#0 = { x: ${(t==null?void 0:t.x)??"-"}, y: ${(t==null?void 0:t.y)??"-"} }`}},{key:"colh",label:"getColumnHeights()",run:e=>{var t;return`[${(((t=e.ref.current)==null?void 0:t.getColumnHeights())??[]).map(r=>Math.round(r)).join(", ")}]`}},{key:"layout",label:"getLayoutInfo()",run:e=>{var t;const n=(t=e.ref.current)==null?void 0:t.getLayoutInfo();return n?`${n.columns} 列 · 列宽 ${Math.round(n.columnWidth)} · 总高 ${Math.round(n.totalHeight)}`:"ref 还没就绪"}},{key:"viewport",label:"getViewportInfo()",run:e=>{var t;const n=(t=e.ref.current)==null?void 0:t.getViewportInfo();return n?`scrollTop ${Math.round(n.scrollTop)} · 视口 ${n.clientHeight} · 内容 ${Math.round(n.scrollHeight)}`:"ref 还没就绪"}},{key:"range",label:"getVisibleRange()",run:e=>{var t;const n=(t=e.ref.current)==null?void 0:t.getVisibleRange();return n?`渲染区间 ${n.start} … ${n.end}`:"ref 还没就绪"}},{key:"force",label:"forceUpdate()",run:e=>{var n;return(n=e.ref.current)==null||n.forceUpdate(),"强制重渲染"}},{key:"el",label:"getItemElement(0)",run:e=>{var t;const n=(t=e.ref.current)==null?void 0:t.getItemElement(0);return n?`<div data-index="0"> ${n.offsetWidth}×${n.offsetHeight}`:"取不到（可能未挂载）"}},{key:"measure",label:"measureItem(0)",run:async e=>{var t;const n=await((t=e.ref.current)==null?void 0:t.measureItem(0));return n?`{ width: ${Math.round(n.width)}, height: ${Math.round(n.height)} }`:"量不到"}},{key:"container",label:"getContainer()",run:e=>{var t;const n=(t=e.ref.current)==null?void 0:t.getContainer();return n?`容器 ${n.clientWidth}×${n.clientHeight}，scrollHeight ${n.scrollHeight}`:"ref 还没就绪"}}];function Tv({api:e}){const[n,t]=h.useState([]),[r,o]=h.useState(5),i=h.useCallback((s,a="event")=>{const u=new Date().toLocaleTimeString("zh-CN",{hour12:!1});t(d=>[{id:d.length+1,at:u,text:s,kind:a},...d].slice(0,30))},[]),l=h.useCallback(async s=>{const a=e.ref.current;if(!a){i("ref.current 为空 —— 舞台还没挂载","warn");return}if(s.needsIndex){if(s.key==="item")a.scrollToItem(r,{behavior:"smooth",block:"start"}),i(`scrollToItem(${r}, { block: "start" })`);else{const u=a.getItemPosition(r);i(u?`getItemPosition(${r}) = { x: ${Math.round(u.x)}, y: ${Math.round(u.y)}, w: ${Math.round(u.width)}, h: ${Math.round(u.height)} }`:`getItemPosition(${r}) = null`)}return}i(`${s.label} → ${await s.run(e)}`)},[e,r,i]);return f.jsxs("div",{className:"console",children:[f.jsxs("div",{className:"console-head",children:[f.jsx("span",{children:"Ref 控制台"}),f.jsxs("label",{className:"console-idx",children:["index",f.jsx("input",{type:"number",min:0,max:e.items.length-1,value:r,onChange:s=>o(Number(s.target.value))})]})]}),f.jsx("div",{className:"console-grid",children:_v.map(s=>f.jsx("button",{type:"button",className:"console-btn",onClick:()=>void l(s),children:s.label},s.key))}),f.jsx(Yp,{lines:n,title:"调用记录",empty:"点上面任意一个方法"})]})}const Rv=q({count:36,seed:1701,instrument:!0,plugins:()=>[],coreProps:e=>({columns:3,onItemClick:n=>e.log(`onItemClick #${n}（Core 的项点击回调）`)}),chrome:e=>f.jsx(Tv,{api:e})}),Mv=Object.freeze(Object.defineProperty({__proto__:null,default:Rv,meta:Cv},Symbol.toStringTag,{value:"Module"})),Iv={slug:"lifecycle",title:"生命周期和事件",group:"advanced",intro:"13 个回调接满，滚一下就能看见谁在什么时候触发。",why:"要在「布局完成」后做点什么（补曝光统计、量真实高度、写埋点），就得知道 onLayout 与 onLayoutComplete 的差别：后者里读 layout 才是新的。",plugs:[],props:["onMount={() => log('onMount')}","onLayoutComplete={() => log('布局完成')}","onScroll={(t) => log('scroll ' + t)}","onItemEnterViewport={(i) => log('enter #' + i)}","onReachBottom={() => log('到底了')}"],note:"onUnmount 只在组件卸载时触发（换页时能在浏览器控制台看到）。视口事件按「可见比例」算，部分可见也会触发一次 enter。"},$v=q({count:40,seed:1901,instrument:!0,plugins:()=>[],coreProps:e=>{const{log:n}=e;let t=0,r=0;return{columns:3,onMount:()=>n("onMount · 容器挂载"),onBeforeLayout:()=>(n("onBeforeLayout · 返回 false 会中断本次布局","info"),!0),onLayout:()=>n("onLayout · 开始算位置","info"),onLayoutComplete:()=>n("onLayoutComplete · 位置已写入，现在读 layout 是新的"),onItemMount:o=>{o<3&&n(`onItemMount #${o}`,"info")},onItemUnmount:o=>{o<3&&n(`onItemUnmount #${o}`,"info")},onItemEnterViewport:(o,i)=>{r+=1,r<40&&n(`onItemEnterViewport #${o} 可见 ${i.visibleRatio*100|0}%`)},onItemLeaveViewport:o=>{r<40&&n(`onItemLeaveViewport #${o}`,"info")},onScroll:o=>{const i=performance.now();i-t<400||(t=i,n(`onScroll ${Math.round(o)}`,"info"))},onResize:(o,i)=>n(`onResize ${o}×${i}`),onReachBottom:o=>n(`onReachBottom 距底 ${Math.round(o)}px`),onItemClick:o=>n(`onItemClick #${o}（点卡片试试）`)}},chrome:()=>f.jsx("p",{className:"stage-tip",children:"滚动、点卡片、拖窗口宽度 —— 三种行为分别触发滚动、点击、尺寸三类事件"})}),Ev=Object.freeze(Object.defineProperty({__proto__:null,default:$v,meta:Iv},Symbol.toStringTag,{value:"Module"})),Nv={slug:"advanced",title:"高级配置",group:"advanced",intro:"padding、useTransform、alignmentMode、节流防抖、debug —— 一页调完。",why:"嵌在带内边距的容器里（padding 要参与布局，不能靠外层 margin）、要给每一项套自定义样式（itemClassName）、或怀疑布局算错要看耗时（debug）时用。",plugs:[],props:["columns={3}","padding={{{padding}}}",'alignmentMode="{{{mode}}}"',"useTransform={{{useTransform}}}","throttleDelay={{{throttle}}}","debounceDelay={{{debounce}}}","debug={{{debug}}}","containerStyle={{ height: 420 }}"],note:"padding 是参与布局计算的（可用宽度 = 容器宽 − 左右 padding），所以它不能当成外层 margin 用。useTransform=false 时项改用 top/left 定位，打印和读 offsetLeft 更直观。",controls:[{key:"padding",label:"padding",kind:"number",init:12,min:0,max:40},{key:"mode",label:"alignmentMode",kind:"select",init:"shortest",options:[{label:"shortest 最矮列",value:"shortest"},{label:"balanced 最少项",value:"balanced"},{label:"sequential 轮转",value:"sequential"}],hint:"balanced 列高会不齐，但每列张数接近"},{key:"useTransform",label:"useTransform",kind:"switch",init:!0},{key:"throttle",label:"throttleDelay",kind:"number",init:16,min:0,max:120,step:8,nonLayout:!0},{key:"debounce",label:"debounceDelay",kind:"number",init:150,min:0,max:600,step:10,nonLayout:!0},{key:"debug",label:"debug",kind:"switch",init:!1,hint:"控制台打印布局耗时"}]},jv=q({count:34,seed:2101,plugins:()=>[],instrument:!0,coreProps:e=>({columns:3,padding:Number(e.cfg.padding),alignmentMode:String(e.cfg.mode),useTransform:!!e.cfg.useTransform,throttleDelay:Number(e.cfg.throttle),debounceDelay:Number(e.cfg.debounce),debug:!!e.cfg.debug}),chrome:e=>f.jsxs("p",{className:"stage-tip",children:["定位方式：",f.jsx("b",{children:e.cfg.useTransform?"transform":"top / left"})," · 内边距"," ",f.jsx("b",{children:Number(e.cfg.padding)})," · 列数 ",f.jsx("b",{children:e.meter.columns})," · 总高"," ",f.jsx("b",{children:Math.round(e.meter.totalHeight)}),"px"]})}),Lv=Object.freeze(Object.defineProperty({__proto__:null,default:jv,meta:Nv},Symbol.toStringTag,{value:"Module"}));function Ov(e){return{name:"AlignmentPlugin",priority:60,enabled:!0,hooks:{transformProps:n=>({...n,alignmentMode:e.mode}),onResize:n=>{var t;(t=n.relayout)==null||t.call(n)}}}}const Dv="AlignmentPlugin",zv="设置瀑布流的列分配策略。shortest 让每列尽量等高（视觉最自然），balanced 让每列项数接近，sequential 按 index 轮转（可预测位置，适合需要与外部索引对齐的场景）。",Av="2.0.0",Wv=["layout","布局"],Hv=[{name:"mode",type:'"shortest" | "balanced" | "sequential"',default:"shortest",description:"列分配策略"}],Fv=`// 指定列分配策略：最矮列优先（shortest）/ 项数均衡（balanced）/ 顺序轮转（sequential）。
const Waterfall = withPlugins(WaterfallCore, [
  createAlignmentPlugin({
    mode: "shortest",
  }),
]);

<Waterfall items={items} renderItem={(item) => <Card data={item} />} />;`,Bv=["三种列分配策略","只改 props.alignmentMode，不影响其他配置","与 ResponsiveColumns / AutoColumn 正交"],Uv=["内容流：默认 shortest","等长卡片：balanced 更整齐","需要与后端顺序对齐：sequential"],Gv=["balanced 与 shortest 在列高相同时都取最左列，视觉上左偏是预期行为。"],qp={name:Dv,description:zv,since:Av,tags:Wv,config:Hv,example:Fv,features:Bv,useCases:Uv,notes:Gv},Xp=Object.assign(Ov,{meta:qp});function Vv(e){if(!(e.minColumnWidth>0))throw new Error("[vane-waterfall] AutoColumnPlugin 需要正数的 minColumnWidth");return{name:"AutoColumnPlugin",priority:55,enabled:!0,hooks:{calculateColumns:(n,t)=>{const r=n.props,o=r.columnGap??r.gap??0,i=r.padding,l=typeof i=="number"?i*2:((i==null?void 0:i.left)??0)+((i==null?void 0:i.right)??0),s=Math.max(0,t-l);if(!s)return r.columns??1;const a=Math.max(1,Math.floor((s+o)/(e.minColumnWidth+o))),u=Math.max(1,e.minColumns??1),d=e.maxColumns??Number.POSITIVE_INFINITY;return Math.min(Math.max(a,u),d)}}}}const Kv="AutoColumnPlugin",Qv="按「容器可用宽度 ÷ 最小列宽」自动决定列数，取代写死 3 列。走 D1-A 布局钩子（calculateColumns），拿到的是真实容器宽度，不是 window.innerWidth。",Yv="2.0.0",qv=["layout","layout-hook","响应式"],Xv=[{name:"minColumnWidth",type:"number",default:"—",description:"每列最小宽度 px（必填）"},{name:"maxColumns",type:"number",default:"Infinity",description:"列数上限"},{name:"minColumns",type:"number",default:"1",description:"列数下限"}],Jv=`// 按容器宽与最小列宽自动算列数，窄屏自动降列。
const Waterfall = withPlugins(WaterfallCore, [
  createAutoColumnPlugin({
    maxColumns: "Infinity",
    minColumns: 1,
  }),
]);

<Waterfall items={items} renderItem={(item) => <Card data={item} />} />;`,Zv=["ResponsiveColumnsPlugin"],e0=["按容器宽度（不是视口宽度）算列数","列数上下限可夹","与 Gap / Padding 一起算，留白不吞列宽"],n0=["响应式信息流","侧边栏宽度可拖动的后台看板","移动端 → 桌面端同一套代码"],t0=["与 ResponsiveColumnsPlugin 同时装会互相覆盖列数，只选一个。"],Jp={name:Kv,description:Qv,since:Yv,tags:qv,config:Xv,example:Jv,conflicts:Zv,features:e0,useCases:n0,notes:t0},Zp=Object.assign(Vv,{meta:Jp});function r0(e){const n=Object.values(e.breakpoints).sort((t,r)=>t.width-r.width);return{name:"ResponsiveColumnsPlugin",priority:55,enabled:!0,hooks:{calculateColumns:(t,r)=>{const o=e.fallbackColumns??t.props.columns??3;if(!r)return o;let i=o;for(const l of n)r>=l.width&&(i=l.columns);return i}}}}const o0="ResponsiveColumnsPlugin",i0="用一张断点表控制列数，命中哪档用哪档。走 D1-A 布局钩子（calculateColumns），按容器宽度匹配断点。",l0="2.0.0",s0=["layout","layout-hook","响应式"],a0=[{name:"breakpoints",type:"Record<string, { width: number; columns: number }>",default:"—",description:"断点表，按 width 升序匹配"}],u0=`// 按断点表决定列数（如 640 → 2 列、1024 → 3 列、1440 → 4 列）。
const Waterfall = withPlugins(WaterfallCore, [
  createResponsiveColumnsPlugin(),
]);

<Waterfall items={items} renderItem={(item) => <Card data={item} />} />;`,c0=["AutoColumnPlugin"],d0=["断点表驱动，设计稿几档就写几档","按容器宽度而非视口宽度匹配","未命中任何断点时回退到 props.columns"],p0=["严格对齐设计断点的站点","同一个组件嵌在不同宽度的容器里"],f0=["与 AutoColumnPlugin 互斥。"],ef={name:o0,description:i0,since:l0,tags:s0,config:a0,example:u0,conflicts:c0,features:d0,useCases:p0,notes:f0},nf=Object.assign(r0,{meta:ef});function sc(e,n){const t=e.responsive||{};return n>=1200&&t.xl?t.xl:n>=992&&t.lg?t.lg:n>=768&&t.md?t.md:n<768&&t.sm?t.sm:{}}function m0(e){let n=0,t="";const r=o=>{var a,u,d;const i=((u=(a=o.containerRef)==null?void 0:a.current)==null?void 0:u.clientWidth)??0;if(i<=0)return;const l=n;n=i;const s=JSON.stringify(sc(e,i));l>0&&s!==t&&((d=o.bus)==null||d.emit("props:invalidate")),t=s};return{name:"GapPlugin",priority:50,enabled:!0,hooks:{transformProps:o=>{const i=n>0?n:typeof window<"u"?window.innerWidth:1024,l={columnGap:e.columnGap,rowGap:e.rowGap},s=sc(e,i),a={columnGap:s.columnGap??l.columnGap??o.columnGap,rowGap:s.rowGap??l.rowGap??o.rowGap};return{...o,...a}},onMount:o=>{r(o)},onResize:o=>{r(o)}}}}const g0="GapPlugin",h0="把 rowGap / columnGap 收敛到一处配置，并支持按窗口宽度切换间距（窄屏 8px、宽屏 16px 这类）。",y0="2.0.0",v0=["layout","间距"],x0=[{name:"columnGap",type:"number",default:"props.columnGap",description:"列间距 px"},{name:"rowGap",type:"number",default:"props.rowGap",description:"行间距 px"},{name:"responsive",type:"{ sm?, md?, lg?, xl? }",default:"—",description:"断点覆盖（按 window 宽度）"}],w0=`// 统一控制行/列间距，支持按断点给不同间距。
const Waterfall = withPlugins(WaterfallCore, [
  createGapPlugin(),
]);

<Waterfall items={items} renderItem={(item) => <Card data={item} />} />;`,S0=["行列间距一处配置","断点覆盖（sm/md/lg/xl）","不填则回退到 props"],b0=["设计规范里间距随断点变化","同一组件在不同页面用不同密度"],k0=["断点判断用的是 window.innerWidth（间距通常跟视口走，与列数按容器算不一样）。","断点是「命中即覆盖」：桌面窗口 ≥1200 又配了 responsive.lg，那就一直是 lg 的值，config.columnGap/rowGap 在这档不起作用；想让手写值生效就别给该档位配 responsive。","sm 只在小屏（<768）生效，不会被当成兜底档套到桌面端。"],tf={name:g0,description:h0,since:y0,tags:v0,config:x0,example:w0,features:S0,useCases:b0,notes:k0},rf=Object.assign(m0,{meta:tf});function P0(e){return{name:"FixedHeightPlugin",priority:45,enabled:!0,hooks:{transformProps:n=>{const{itemHeight:t}=e,r=(n.items||[]).map(o=>typeof o=="object"&&o!==null&&"height"in o?{...o,height:t}:o);return{...n,items:r}},onResize:n=>{var t;(t=n.relayout)==null||t.call(n)}}}}const C0="FixedHeightPlugin",_0="把数据里带 height 字段的项统一改写为固定高度，瀑布流变成等高网格。适合「图少字多」的卡片流——等高反而更好扫读。",T0="2.0.0",R0=["layout","网格"],M0=[{name:"itemHeight",type:"number",default:"—",description:"统一项高 px（必填）"}],I0=`// 把项高度统一成固定值，瀑布流退化为等高网格。
const Waterfall = withPlugins(WaterfallCore, [
  createFixedHeightPlugin(),
]);

<Waterfall items={items} renderItem={(item) => <Card data={item} />} />;`,$0=["等高网格（严格对齐）","只改数据里已有的 height 字段","与 Pagination / Filter 组合仍然成立"],E0=["商品列表（图固定比例）","后台看板卡片","需要严格栅格对齐的页面"],N0=["数据里没有 height 字段时不会生效——高度由 renderItem 自己的内容决定。"],of={name:C0,description:_0,since:T0,tags:R0,config:M0,example:I0,features:$0,useCases:E0,notes:N0},lf=Object.assign(P0,{meta:of});function j0(e){const n=new Set(e.pinnedIndices),t=Math.max(0,e.column??0),r=new Map;return{name:"PinItemPlugin",priority:100,enabled:!0,hooks:{onBeforeLayout:()=>(r.clear(),!0),calculateItemPosition:(o,i,l,s)=>{const a=o.props.rowGap??o.props.gap??0;if(!n.has(i)){const d=r.get(s.column);return d!==void 0&&s.y<d?{y:d}:void 0}const u=r.get(t)??0;return r.set(t,u+l+a),{column:t,y:u,width:s.width,height:l,row:0}}}}}const L0="PinItemPlugin",O0="把若干索引的项钉在顶部指定列，其余项从它们下方继续排。走 D1-A 布局钩子（calculateItemPosition），是旧版宣称但从未生效的能力。",D0="2.0.0",z0=["layout","layout-hook","置顶"],A0=[{name:"pinnedIndices",type:"number[]",default:"[]",description:"要钉住的项索引"},{name:"column",type:"number",default:"0",description:"钉到第几列"}],W0=`// 把指定索引的项钉在顶部同一列，不参与常规列高推进（广告位 / 公告卡）。
const Waterfall = withPlugins(WaterfallCore, [
  createPinItemPlugin({
    pinnedIndices: [],
    column: 0,
  }),
]);

<Waterfall items={items} renderItem={(item) => <Card data={item} />} />;`,H0=["置顶项不占常规列高：后续项从置顶块下方开始","支持多列分别置顶（column 可不同）","每次布局前重置偏移，items 变化后不会累加错位"],F0=["信息流首位的推广卡","公告 / 置顶帖","需要固定在左上角的活动位"],B0=["置顶项之间按 pinnedIndices 顺序纵向堆叠，同一列多条会依次往下排。","置顶会挤掉该列的正常网格位置，pinnedIndices 建议控制在 1~2 条。","换列后的 x 由布局引擎按本轮列宽补齐，插件只返回 column 即可 —— 自己用「列宽 + 间距」反推 x 会在间距由其它插件（GapPlugin）注入时算错。"],sf={name:L0,description:O0,since:D0,tags:z0,config:A0,example:W0,features:H0,useCases:F0,notes:B0},af=Object.assign(j0,{meta:sf});function U0(e){return{name:"ThrottlePlugin",priority:80,enabled:!0,hooks:{transformProps:n=>({...n,throttleDelay:e.scroll,debounceDelay:e.resize??n.debounceDelay})}}}const G0="ThrottlePlugin",V0="接管 Core 的 throttleDelay（滚动回调节流）与 debounceDelay（尺寸变化后多久重排）。默认 16ms / 150ms，长列表滚动卡顿时可以放宽到 32 / 300。",K0="2.0.0",Q0=["perf","性能"],Y0=[{name:"scroll",type:"number",default:"—",description:"滚动节流 ms（必填）"},{name:"resize",type:"number",default:"props.debounceDelay",description:"布局防抖 ms"}],q0=`// 调整滚动节流与尺寸防抖，弱网/低端机可放宽。
const Waterfall = withPlugins(WaterfallCore, [
  createThrottlePlugin(),
]);

<Waterfall items={items} renderItem={(item) => <Card data={item} />} />;`,X0=["滚动节流与布局防抖分开调","只改 props，不改算法","与 DebounceLayoutPlugin 叠加时后者优先"],J0=["低端安卓机长列表","滚动时 CPU 占用过高","拖拽侧栏时减少重排"],Z0=["scroll 低于 16ms 没有意义（浏览器帧率上限）。"],uf={name:G0,description:V0,since:K0,tags:Q0,config:Y0,example:q0,features:X0,useCases:J0,notes:Z0},cf=Object.assign(U0,{meta:uf});function ex(e){return{name:"DebounceLayoutPlugin",priority:75,enabled:!0,hooks:{transformProps:n=>({...n,debounceDelay:e.delay})}}}const nx="DebounceLayoutPlugin",tx="只调 debounceDelay：容器宽度连续变化（抽屉展开、分栏拖拽）时，等变化停下来再算一次布局，避免每帧重排。",rx="2.0.0",ox=["perf","性能"],ix=[{name:"delay",type:"number",default:"—",description:"布局防抖 ms（必填）"}],lx=`// 单独放大布局防抖，容器频繁变宽时（抽屉/侧栏动画）不抖。
const Waterfall = withPlugins(WaterfallCore, [
  createDebounceLayoutPlugin(),
]);

<Waterfall items={items} renderItem={(item) => <Card data={item} />} />;`,sx=["只影响布局时机，不影响渲染","可被 ThrottlePlugin 覆盖","对移动端软键盘弹出也有效"],ax=["可折叠侧栏","分栏宽度拖拽","横竖屏切换"],ux=["delay 过大会让「展开后布局」明显滞后，建议 120–250ms。"],df={name:nx,description:tx,since:rx,tags:ox,config:ix,example:lx,features:sx,useCases:ax,notes:ux},pf=Object.assign(ex,{meta:df}),cx="(prefers-reduced-motion: reduce)";function dx(e={}){var d;const n=typeof window<"u"&&typeof window.matchMedia=="function"?window.matchMedia(cx):null;let t=(n==null?void 0:n.matches)??!1;const r=e.disableTransform??!0,o=e.removeTransitions??!0,i=new Map,l=new Map,s=c=>{if(!(!c||!o))if(t){const p=c.style.transitionDuration;p&&p!=="0s"?l.set(c,p):l.has(c)||l.set(c,p),c.style.setProperty("transition-duration","0s")}else{const p=l.get(c);if(p===void 0)return;p?c.style.setProperty("transition-duration",p):c.style.removeProperty("transition-duration"),l.delete(c)}},a=()=>i.forEach(c=>s(c)),u=c=>{c.matches!==t&&(t=c.matches,a())};return(d=n==null?void 0:n.addEventListener)==null||d.call(n,"change",u),{name:"ReducedMotionPlugin",priority:70,enabled:!0,hooks:{transformProps:c=>{if(!t)return c;const p={...c};return r&&(p.useTransform=!1),o&&(p.itemStyle={...c.itemStyle??{},transitionDuration:"0s"}),p},onItemMount:(c,p,y)=>{i.set(p,y),s(y)},onItemUnmount:(c,p)=>{i.delete(p)},onLayoutComplete:c=>{c.itemRefs.forEach((p,y)=>{p&&i.set(y,p),s(p)})},onUnmount:()=>{var c;(c=n==null?void 0:n.removeEventListener)==null||c.call(n,"change",u),i.clear(),l.clear()}}}}const px="ReducedMotionPlugin",fx="检测 `prefers-reduced-motion: reduce`，命中后把 useTransform 关掉并清掉项上的 transition。前庭功能敏感用户不会因为滚动时的位置微动而不适。",mx="2.0.0",gx=["perf","a11y"],hx=[{name:"disableTransform",type:"boolean",default:"true",description:"命中偏好时改用 left/top 定位"},{name:"removeTransitions",type:"boolean",default:"true",description:"命中偏好时清掉项过渡"}],yx=`// 尊重系统「减少动画」偏好：关掉 transform 定位与项过渡。
const Waterfall = withPlugins(WaterfallCore, [
  createReducedMotionPlugin({
    disableTransform: true,
    removeTransitions: true,
  }),
]);

<Waterfall items={items} renderItem={(item) => <Card data={item} />} />;`,vx=["系统偏好驱动，零配置生效","两项能力可分别关闭","与 TransitionPlugin 同装时优先生效"],xx=["政务 / 医疗类站点","无障碍合规要求","低性能设备"],wx=["偏好由 matchMedia 驱动，并监听 change：运行中改系统设置即时生效（定位方式要等下一次重渲染才切过来）。","只压 `transition-duration`，不写 `transition: none` —— 写简写会把 TransitionPlugin 的过渡整条覆盖，撤销偏好后无从还原。","与 TransitionPlugin 同装不是冲突：ReducedMotion 优先级更高，会先执行并压住过渡。"],ff={name:px,description:fx,since:mx,tags:gx,config:hx,example:yx,features:vx,useCases:xx,notes:wx},mf=Object.assign(dx,{meta:ff});function Sx(e={}){const n=e.duration??300,t=e.easing??"ease";return{name:"TransitionPlugin",priority:65,enabled:!0,hooks:{onItemMount:(r,o,i)=>{i.style.transition=`transform ${n}ms ${t}, opacity ${n}ms ${t}`},onLayout:r=>{r.itemRefs.forEach(o=>{o&&(o.style.transition=`transform ${n}ms ${t}, opacity ${n}ms ${t}`)})}}}}const bx="TransitionPlugin",kx="给每个项挂上 transform + opacity 的 CSS 过渡，布局重排、分页切换、筛选后重新排列时位置变化是滑过去的，不是瞬移。",Px="2.0.0",Cx=["perf","动效"],_x=[{name:"duration",type:"number",default:"300",description:"过渡时长 ms"},{name:"easing",type:"string",default:"ease",description:"缓动函数"}],Tx=`// 布局变化时给项加 transform/opacity 过渡，插入新数据不「闪现」。
const Waterfall = withPlugins(WaterfallCore, [
  createTransitionPlugin({
    duration: 300,
    easing: "ease",
  }),
]);

<Waterfall items={items} renderItem={(item) => <Card data={item} />} />;`,Rx=["ReducedMotionPlugin"],Mx=["项位置变化平滑过渡","挂载时即生效（onItemMount）","与 ReducedMotionPlugin 互斥"],Ix=["筛选 / 排序后重排","分页切换","动态插入卡片"],$x=["首屏大量项同时过渡会有一次「整体滑入」，想要更克制可以把 duration 降到 150ms。"],gf={name:bx,description:kx,since:Px,tags:Cx,config:_x,example:Tx,conflicts:Rx,features:Mx,useCases:Ix,notes:$x},ha=Object.assign(Sx,{meta:gf});function Ex(e={}){return{name:"FilterPlugin",priority:40,enabled:!0,hooks:{transformProps:n=>{const t=Array.isArray(n.items)?n.items:[],r=n.filterFn||e.predicate;if(typeof r!="function")return n;const o=t.filter((i,l)=>{try{return!!r(i,l)}catch{return!0}});return{...n,items:o}},onPropsChange:(n,t,r)=>{var a;const o=t==null?void 0:t.filterFn,i=r==null?void 0:r.filterFn;if(((typeof(r==null?void 0:r.scrollToTopOnFilterChange)=="boolean"?r.scrollToTopOnFilterChange:void 0)??!!e.scrollToTop)&&o!==i){const u=(r==null?void 0:r.scrollToTopBehavior)??e.scrollBehavior??"auto";(a=n.scrollToTop)==null||a.call(n,{behavior:u})}}}}}const Nx="FilterPlugin",jx="用谓词函数过滤数据，优先读 `props.filterFn`，没有就用工厂里传入的 predicate。过滤条件变了可以自动滚回顶部（默认不开）。",Lx="2.0.0",Ox=["data","数据管线"],Dx=[{name:"predicate",type:"(item, index) => boolean",default:"—",description:"默认谓词，可被 props.filterFn 覆盖"},{name:"scrollToTop",type:"boolean",default:"false",description:"条件变化后回顶"},{name:"scrollBehavior",type:'"auto" | "smooth"',default:'"auto"',description:"回顶行为"}],zx=`// 按谓词过滤 items，参数变化可自动回顶。
const Waterfall = withPlugins(WaterfallCore, [
  createFilterPlugin({
    scrollToTop: false,
    scrollBehavior: "auto",
  }),
]);

<Waterfall items={items} renderItem={(item) => <Card data={item} />} />;`,Ax=["谓词抛错时按「保留」处理，不会整表消失","props.filterFn 优先，便于页面动态换过滤条件","可与 Sort / Search / Pagination 串联"],Wx=["分类 Tab 切换","只看有货 / 只看促销","价格区间筛选"],Hx=["数据管线的执行顺序由 priority 决定：Filter(40) → Sort(30) → Search(20) → Pagination(10)。","先过滤再分页，页码总数才是过滤后的总数——顺序反了会出现「第 2 页空」。"],hf={name:Nx,description:jx,since:Lx,tags:Ox,config:Dx,example:zx,features:Ax,useCases:Wx,notes:Hx},yf=Object.assign(Ex,{meta:hf});function Fx(e={}){return{name:"SortPlugin",priority:30,enabled:!0,hooks:{transformProps:n=>{const t=Array.isArray(n.items)?n.items:[],r=n.sortComparator||e.comparator;if(typeof r!="function")return n;const o=[...t].sort((i,l)=>{try{return r(i,l)}catch{return 0}});return{...n,items:o}},onPropsChange:(n,t,r)=>{var a;const o=t==null?void 0:t.sortComparator,i=r==null?void 0:r.sortComparator;if(((typeof(r==null?void 0:r.scrollToTopOnSortChange)=="boolean"?r.scrollToTopOnSortChange:void 0)??!!e.scrollToTop)&&o!==i){const u=(r==null?void 0:r.scrollToTopBehavior)??e.scrollBehavior??"auto";(a=n.scrollToTop)==null||a.call(n,{behavior:u})}}}}}const Bx="SortPlugin",Ux="用比较函数排序，优先读 `props.sortComparator`。排序总是在过滤之后、分页之前执行，保证「第 N 页」是排序后的第 N 页。",Gx="2.0.0",Vx=["data","数据管线"],Kx=[{name:"comparator",type:"(a, b) => number",default:"—",description:"默认比较函数，可被 props.sortComparator 覆盖"},{name:"scrollToTop",type:"boolean",default:"false",description:"排序变化后回顶"},{name:"scrollBehavior",type:'"auto" | "smooth"',default:'"auto"',description:"回顶行为"}],Qx=`// 按比较函数排序 items，比较函数变化可自动回顶。
const Waterfall = withPlugins(WaterfallCore, [
  createSortPlugin({
    scrollToTop: false,
    scrollBehavior: "auto",
  }),
]);

<Waterfall items={items} renderItem={(item) => <Card data={item} />} />;`,Yx=["稳定排序（不改原数组）","比较函数抛错按相等处理","与 Filter / Search 顺序固定"],qx=["价格 / 时间排序","热度排序","手动置顶项优先"],Xx=["排序会复制数组（`[...items].sort`），不会改调用方传入的 items。"],vf={name:Bx,description:Ux,since:Gx,tags:Vx,config:Kx,example:Qx,features:Yx,useCases:qx,notes:Xx},xf=Object.assign(Fx,{meta:vf});function Jx(e={}){const n=e.fields??[];return{name:"SearchPlugin",priority:20,enabled:!0,hooks:{transformProps:t=>{const r=String(t.searchQuery??"").trim(),o=Array.isArray(t.items)?t.items:[];if(!r)return t;const i=r.toLowerCase(),l=o.filter(s=>{if(typeof s!="object"||s===null)return!1;const a=n.length>0?n:Object.keys(s);for(const u of a){const d=s[u];if(d!=null&&String(d).toLowerCase().includes(i))return!0}return!1});return{...t,items:l}},onPropsChange:(t,r,o)=>{var u;const i=String((r==null?void 0:r.searchQuery)??""),l=String((o==null?void 0:o.searchQuery)??"");if(((typeof(o==null?void 0:o.scrollToTopOnSearchChange)=="boolean"?o.scrollToTopOnSearchChange:void 0)??!!e.scrollToTop)&&i!==l){const d=(o==null?void 0:o.scrollToTopBehavior)??e.scrollBehavior??"auto";(u=t.scrollToTop)==null||u.call(t,{behavior:d})}}}}}const Zx="SearchPlugin",e1="读取 `props.searchQuery`，在指定字段上做大小写不敏感的 `includes` 匹配。没指定字段就对对象的全部自有字段匹配。",n1="2.0.0",t1=["data","数据管线","搜索"],r1=[{name:"fields",type:"(keyof T)[]",default:"[]",description:"参与匹配的字段；空则匹配全部自有字段"},{name:"scrollToTop",type:"boolean",default:"false",description:"关键词变化后回顶"},{name:"scrollBehavior",type:'"auto" | "smooth"',default:'"auto"',description:"回顶行为"}],o1=`// 按 props.searchQuery 做大小写不敏感的多字段包含匹配。
const Waterfall = withPlugins(WaterfallCore, [
  createSearchPlugin({
    fields: [],
    scrollToTop: false,
    scrollBehavior: "auto",
  }),
]);

<Waterfall items={items} renderItem={(item) => <Card data={item} />} />;`,i1=["大小写不敏感","多字段 OR 匹配","空关键词直接放行（不触发过滤）"],l1=["站内搜索结果页","后台列表即时搜索","商品名 / 店铺名联合搜索"],s1=["纯前端 `includes`，不排序也不做拼音；要相关性排序请在 Search 之后接 SortPlugin。"],wf={name:Zx,description:e1,since:n1,tags:t1,config:r1,example:o1,features:i1,useCases:l1,notes:s1},ya=Object.assign(Jx,{meta:wf});function a1(e={}){return{name:"PaginationPlugin",priority:10,enabled:!0,hooks:{transformProps:n=>{const t=Number(n.pageIndex??1),r=Math.max(1,Math.floor(Number.isFinite(t)?t:1)),o=Number(n.pageSize??e.pageSize??20),i=Math.max(1,Math.floor(Number.isFinite(o)?o:20)),l=Array.isArray(n.items)?n.items:[],s=Math.max(1,Math.ceil(l.length/i)),a=Math.min(r,s);r>s&&console.warn(`[vane-waterfall] PaginationPlugin：pageIndex=${r} 超出总页数 ${s}，已钳制到第 ${a} 页`);const u=(a-1)*i,d=l.slice(u,u+i);return{...n,items:d}},onPropsChange:(n,t,r)=>{var a;const o=Math.max(1,Number((t==null?void 0:t.pageIndex)??1)),i=Math.max(1,Number((r==null?void 0:r.pageIndex)??1));if(((typeof(r==null?void 0:r.scrollToTopOnPageChange)=="boolean"?r.scrollToTopOnPageChange:void 0)??!!e.scrollToTop)&&o!==i){const u=(r==null?void 0:r.scrollToTopBehavior)??e.scrollBehavior??"auto";(a=n.scrollToTop)==null||a.call(n,{behavior:u})}}}}}const u1="PaginationPlugin",c1="读 `props.pageIndex`（1 基）与 `props.pageSize` 切片。放在数据管线最末端，保证切的是「过滤 + 排序 + 搜索」之后的结果。",d1="2.0.0",p1=["data","数据管线","分页"],f1=[{name:"pageSize",type:"number",default:"props.pageSize ?? 20",description:"每页条数"},{name:"scrollToTop",type:"boolean",default:"false",description:"翻页后回顶"},{name:"scrollBehavior",type:'"auto" | "smooth"',default:'"auto"',description:"回顶行为"}],m1=`// 按 props.pageIndex / pageSize 切片，页码从 1 开始。
const Waterfall = withPlugins(WaterfallCore, [
  createPaginationPlugin({
    scrollToTop: false,
    scrollBehavior: "auto",
  }),
]);

<Waterfall items={items} renderItem={(item) => <Card data={item} />} />;`,g1=["InfiniteScrollPlugin"],h1=["1 基页码（与 UI 分页器一致）","pageIndex 非法值自动夹到 1","翻页自动回顶可选"],y1=["后台列表分页","搜索结果分页","与 URLSyncPlugin 配合做可分享链接"],v1=["pageSize 优先级：props.pageSize > 工厂 config.pageSize > 20。"],Sf={name:u1,description:c1,since:d1,tags:p1,config:f1,example:m1,conflicts:g1,features:h1,useCases:y1,notes:v1},bf=Object.assign(a1,{meta:Sf});function x1(e={}){const n=Math.max(1,e.threshold??300),t=new WeakMap,r=o=>{var i;return((i=o.containerRef)==null?void 0:i.current)??o.bus};return{name:"InfiniteScrollPlugin",priority:35,enabled:!0,hooks:{transformProps:o=>({...o,reachBottomOffset:n}),onReachBottom:async(o,i)=>{const l=r(o);if(t.get(l)||o.hasMore===!1||i>n)return;const s=e.onLoadMore??o.props.onLoadMore;if(typeof s=="function"){t.set(l,!0);try{await Promise.resolve(s())}finally{t.delete(l)}}},onUnmount:o=>{t.delete(r(o))}}}}const w1="InfiniteScrollPlugin",S1="监听 Core 的 onReachBottom，在距底部 `threshold` 像素内触发 onLoadMore。自带并发锁：上一次还没结束不会重复触发。",b1="2.0.0",k1=["data","加载更多"],P1=[{name:"threshold",type:"number",default:"300",description:"触发距离 px"},{name:"onLoadMore",type:"() => void | Promise<void>",default:"props.onLoadMore",description:"加载回调"}],C1=`// 滚动到距底部阈值内触发加载更多，带并发锁防重复请求。
const Waterfall = withPlugins(WaterfallCore, [
  createInfiniteScrollPlugin({
    threshold: 300,
  }),
]);

<Waterfall items={items} renderItem={(item) => <Card data={item} />} />;`,_1=["PaginationPlugin"],T1=["距底 300px 预加载，滚到底时数据已就位","并发锁：加载中不重复触发","context.hasMore 为 false 时自动停"],R1=["信息流无限滚动","画廊继续加载","搜索结果瀑布流"],M1=["阈值不要小于一屏（约 600px），否则用户滚到底会看到空白等待。","翻页类场景请用 PaginationPlugin，两者不要同装。"],kf={name:w1,description:S1,since:b1,tags:k1,config:P1,example:C1,conflicts:_1,features:T1,useCases:R1,notes:M1},Pf=Object.assign(x1,{meta:kf});function I1(e={}){const{log:n=!1,showOverlay:t=!1}=e,r=new Map,o=new Map;let i=null;const l=()=>Array.from(r.values()).reduce((u,d)=>u+d,0),s=(u,d,c)=>{var p,y;try{const x=(y=(p=u.props)==null?void 0:p.keyExtractor)==null?void 0:y.call(p,d,c);if(x!=null)return String(x)}catch{}return`#${c}`},a=u=>{var c;const d=u.items;(i===null||d!==i)&&(i=d,r.clear(),o.clear(),(c=u.sharedData)==null||c.set("click-count",0))};return{name:"ClickAnalyticsPlugin",enabled:!0,getStats:()=>({total:l(),byIndex:Array.from(r.entries()).map(([u,d])=>({index:o.get(u)??0,key:u,clicks:d})).sort((u,d)=>u.index-d.index||u.key.localeCompare(d.key))}),hooks:{onMount:u=>{var d;(d=u.sharedData)==null||d.set("click-count",l())},onLayoutComplete:u=>{a(u)},onItemClick:(u,d,c,p)=>{var S,g,m;a(u);const y=s(u,c,d);o.set(y,d);const x=(r.get(y)??0)+1;r.set(y,x);const w=l();(S=u.sharedData)==null||S.set("click-count",w),(g=u.bus)==null||g.emit("analytics:click",{index:d,key:y,item:c,event:p,total:w}),(m=u.forceUpdate)==null||m.call(u),n&&console.log(`[ClickAnalytics] item=${d} total=${w}`)},renderOverlay:u=>{var c;if(!t)return null;const d=((c=u.sharedData)==null?void 0:c.get("click-count"))||0;return f.jsxs("div",{style:{position:"absolute",top:12,right:12,padding:"10px 12px",background:"#222",color:"#fff",borderRadius:8,fontSize:14,fontWeight:600,boxShadow:"0 4px 12px rgba(0,0,0,0.25)",border:"1px solid rgba(255,255,255,0.15)",pointerEvents:"none",zIndex:99},children:["点击次数：",d,f.jsx("div",{style:{fontSize:12,fontWeight:400,opacity:.85,marginTop:4},children:"提示：点击任意卡片观察计数变化"})]})}}}}const $1="ClickAnalyticsPlugin",E1="统计每次项点击并累计总数，向 bus 发 `analytics:click`（带 index / item / total），`getStats()` 可随时取出按 index 的计数。默认只上报不显示角标，接入真实版式时不会被调试面板盖住内容。",N1="2.0.0",j1=["interaction","埋点"],L1=[{name:"log",type:"boolean",default:"false",description:"是否在控制台打印每次点击"},{name:"showOverlay",type:"boolean",default:"false",description:"是否显示右上角计数角标"}],O1=`// 统计项点击次数，发 \`analytics:click\` 事件，可选角标与日志。
const Waterfall = withPlugins(WaterfallCore, [
  createClickAnalyticsPlugin({
    log: false,
    showOverlay: false,
  }),
]);

<Waterfall items={items} renderItem={(item) => <Card data={item} />} />;`,D1=["点击总量 + 按 index 明细（getStats）","bus 事件可被外部订阅上报","角标默认关闭"],z1=["内容流点击率统计","AB 实验埋点","调试点击行为"],A1=["生产环境请把数据从 bus 事件或 getStats() 接到自己的埋点 SDK，不要让插件直接打日志。","计数只在内存里，刷新即清零 —— 想持久化要自己定时取 getStats() 上报。"],Cf={name:$1,description:E1,since:N1,tags:j1,config:L1,example:O1,features:D1,useCases:z1,notes:A1},_f=Object.assign(I1,{meta:Cf});function W1(e={}){const n=e.showOverlay??e.showOverlaySummary??!1,t=new Map,r=new Map,o=new Map;let i=!1,l=null;const s=d=>Array.from(d.values()).reduce((c,p)=>c+p,0),a=(d,c,p)=>{var y,x;try{const w=(x=(y=d.props)==null?void 0:y.keyExtractor)==null?void 0:x.call(y,c,p);if(w!=null)return String(w)}catch{}return`#${p}`},u=d=>{const c=d.items;(l===null||c!==l)&&(l=c,t.clear(),r.clear(),o.clear(),i=!1)};return{name:"HeatmapAnalyticsPlugin",enabled:!0,getStats:()=>{const d=new Set([...t.keys(),...r.keys()]);return{totalViews:s(t),totalClicks:s(r),items:Array.from(d).map(c=>({index:o.get(c)??0,key:c,views:t.get(c)??0,clicks:r.get(c)??0})).sort((c,p)=>c.index-p.index||c.key.localeCompare(p.key))}},hooks:{onLayoutComplete:d=>{if(u(d),i)return;const{start:c,end:p}=d.visibleRange,y=d.items;for(let x=c;x<=p;x++){const w=y[x];if(w===void 0)continue;const S=a(d,w,x);o.set(S,x),t.set(S,(t.get(S)||0)+1)}i=!0},onItemEnterViewport:(d,c)=>{u(d);const p=d.items[c];if(p===void 0)return;const y=a(d,p,c);o.set(y,c),t.set(y,(t.get(y)||0)+1)},onItemClick:(d,c,p)=>{var x;u(d);const y=a(d,p,c);o.set(y,c),r.set(y,(r.get(y)||0)+1),(x=d.forceUpdate)==null||x.call(d)},renderOverlay:()=>{if(!n)return null;const d=Array.from(t.values()).reduce((p,y)=>p+y,0),c=Array.from(r.values()).reduce((p,y)=>p+y,0);return f.jsxs("div",{style:{position:"sticky",top:0,zIndex:100,display:"flex",gap:12,alignItems:"center",padding:"6px 10px",background:"rgba(0,0,0,0.6)",color:"white",borderRadius:8,fontSize:12,marginBottom:8},children:[f.jsxs("span",{children:["曝光总计: ",d]}),f.jsxs("span",{children:["点击总计: ",c]})]})}}}}const H1="HeatmapAnalyticsPlugin",F1="统计每项进入视口次数与点击次数，可选顶部汇总条，`getStats()` 取出每项明细。曝光是瀑布流里最容易统计错的东西（滚动时反复进出视口），交给插件比自己写 IntersectionObserver 少踩坑。",B1="2.0.0",U1=["interaction","埋点","曝光"],G1=[{name:"showOverlay",type:"boolean",default:"false",description:"是否显示顶部汇总条"},{name:"showOverlaySummary",type:"boolean",default:"—",description:"showOverlay 的旧别名"}],V1=`// 统计每项曝光次数与点击次数，可显示汇总条。
const Waterfall = withPlugins(WaterfallCore, [
  createHeatmapAnalyticsPlugin({
    showOverlay: false,
  }),
]);

<Waterfall items={items} renderItem={(item) => <Card data={item} />} />;`,K1=["按项的曝光 / 点击双计数","首屏曝光在 onLayoutComplete 补一次","getStats() 输出可上报的扁平结构"],Q1=["信息流曝光分析","广告位可见性验证","调试曝光策略"],Y1=["首屏曝光靠 onLayoutComplete 补一次，否则第一帧显示 0。","真实上报要自己做去重与批次（插件只负责计数，不区分「同一项第几次进入」）。","计数只在内存里，刷新即清零 —— 定时取 getStats() 上报。"],Tf={name:H1,description:F1,since:B1,tags:U1,config:G1,example:V1,features:K1,useCases:Q1,notes:Y1},Rf=Object.assign(W1,{meta:Tf}),br="data-drag-over";function ac(e,n){var i;if(typeof document>"u")return null;const t=document.elementFromPoint(e,n),r=(i=t==null?void 0:t.closest)==null?void 0:i.call(t,"[data-index]");if(!r)return null;const o=Number(r.getAttribute("data-index"));return Number.isFinite(o)?o:null}function q1(e={}){const n=e.enabled??!0,t=e.showHandle??!1,r=e.touchHoldMs??180,o=(a,u,d)=>{var y;const c=Number(d);if(!Number.isFinite(c)||c===u)return;a.sharedData.set("drag-from",c),a.sharedData.set("drag-to",u),a.bus.emit("drag:reorder",{from:c,to:u});const p=a.props.items;(y=e.onReorder)==null||y.call(e,c,u,p==null?void 0:p[c])},i=()=>{document.querySelectorAll(`[${br}]`).forEach(a=>a.removeAttribute(br))},l=()=>{typeof document>"u"||(i(),document.body.style.userSelect="",document.body.style.cursor="")},s=(a,u,d)=>{if(a.pointerType==="mouse")return;const c=a.clientX,p=a.clientY,y=Date.now();let x=!1,w=null;const S=m=>{if(!x){const b=Date.now()-y>=r,P=Math.hypot(m.clientX-c,m.clientY-p)>=6;if(!b||!P)return;x=!0,document.body.style.userSelect="none",document.body.style.cursor="grabbing"}m.preventDefault();const v=ac(m.clientX,m.clientY);if(v!==w&&(i(),w=v,v!=null)){const b=document.querySelector(`[data-index="${v}"]`);b==null||b.setAttribute(br,"")}},g=m=>{if(window.removeEventListener("pointermove",S),window.removeEventListener("pointerup",g),window.removeEventListener("pointercancel",g),l(),!x)return;const v=ac(m.clientX,m.clientY);v!=null&&o(d,v,String(u))};window.addEventListener("pointermove",S,{passive:!1}),window.addEventListener("pointerup",g),window.addEventListener("pointercancel",g)};return{name:"DragReorderPlugin",enabled:n,hooks:{renderItemWrapper:(a,u,d)=>n?f.jsx("div",{draggable:!0,onDragStart:c=>{var p;(p=c.dataTransfer)==null||p.setData("text/plain",String(d)),a.sharedData.set("drag-from",d)},onDragOver:c=>{c.preventDefault()},onDragEnter:()=>{const c=document.querySelector(`[data-index="${d}"]`);c==null||c.setAttribute(br,"")},onDragLeave:()=>{const c=document.querySelector(`[data-index="${d}"]`);c==null||c.removeAttribute(br)},onDrop:c=>{var p;c.preventDefault(),l(),o(a,d,((p=c.dataTransfer)==null?void 0:p.getData("text/plain"))??"")},onDragEnd:l,onPointerDown:c=>s(c,d,a),style:{cursor:"grab",...t?{border:"1px dashed #bdbdbd",borderRadius:6}:null},children:u}):u}}}const X1="DragReorderPlugin",J1="给每个项加拖拽能力，松手时回调 `onReorder(from, to)`，同时向 bus 发 `drag:reorder`。鼠标走原生 HTML5 拖拽，触屏走「长按 + pointer」——触摸设备上 `draggable` 根本不触发，旧版因此在手机上完全失效。",Z1="2.0.0",ew=["interaction","拖拽"],nw=[{name:"enabled",type:"boolean",default:"true",description:"是否启用拖拽"},{name:"onReorder",type:"(from, to, item) => void",default:"—",description:"重排回调"},{name:"showHandle",type:"boolean",default:"false",description:"是否显示虚线边框提示可拖"},{name:"touchHoldMs",type:"number",default:"180",description:"触屏长按多久进入拖拽（ms），0 表示不需要长按"}],tw=`// 鼠标走 HTML5 draggable，触屏走长按 + pointer，松手时回调 onReorder(from, to)。
const Waterfall = withPlugins(WaterfallCore, [
  createDragReorderPlugin({
    enabled: true,
    showHandle: false,
    touchHoldMs: 180,
  }),
]);

<Waterfall items={items} renderItem={(item) => <Card data={item} />} />;`,rw=["鼠标：原生 HTML5 拖拽，无额外依赖","触屏：长按 180ms 后 pointer 拖拽（可配 touchHoldMs）","onReorder 回调真正可用，bus 发 `drag:reorder`"],ow=["后台卡片排序","收藏夹手动排序","仪表盘组件排列"],iw=["插件只负责「拖」和「告诉你从哪到哪」，数组重排由调用方在 onReorder 里做。","触屏用长按区分「想滚」和「想拖」：不这样做，手指一滑就变成拖拽，页面滚不动。"],Mf={name:X1,description:J1,since:Z1,tags:ew,config:nw,example:tw,features:rw,useCases:ow,notes:iw},If=Object.assign(q1,{meta:Mf});function lw(e={}){const n=e.getAnchorId||(r=>r==null?void 0:r.id);let t;return{name:"ScrollAnchorPlugin",enabled:!0,hooks:{onMount:r=>{var o;t=(o=r.bus)==null?void 0:o.on("anchor:scrollToId",i=>{var a,u;const s=(((a=r.props)==null?void 0:a.items)||[]).findIndex((d,c)=>n(d,c)===i.id);s>=0&&((u=r.scrollToItem)==null||u.call(r,s,{behavior:"smooth",block:"start"}))})},onUnmount:()=>t==null?void 0:t()}}}const sw="ScrollAnchorPlugin",aw='不需要自己算索引：外部只管 `bus.emit("anchor:scrollToId", { id })`，插件用 getAnchorId 找到对应项并滚过去。适合「从消息跳到某条内容」。',uw="2.0.0",cw=["interaction","滚动"],dw=[{name:"getAnchorId",type:"(item, index) => string | number | undefined",default:"item.id",description:"从项里取锚点 id"}],pw=`// 监听 \`anchor:scrollToId\` 事件，按业务 id 滚动到对应项。
const Waterfall = withPlugins(WaterfallCore, [
  createScrollAnchorPlugin({
    getAnchorId: "item.id",
  }),
]);

<Waterfall items={items} renderItem={(item) => <Card data={item} />} />;`,fw=["按业务 id 定位，不用算下标","onMount 订阅 / onUnmount 退订（不泄漏）","平滑滚动"],mw=["从通知跳转到具体卡片","目录点击定位","外链深链定位"],gw=["目标项必须已在 items 里；分页场景请先切到对应页再发事件。"],$f={name:sw,description:aw,since:uw,tags:cw,config:dw,example:pw,features:fw,useCases:mw,notes:gw},Ef=Object.assign(lw,{meta:$f});function hw(e){const n=new Set,t=r=>{if(n.size<=e.poolSize)return;const o=n.values().next().value;if(typeof o=="number"){n.delete(o);const i=r.getItemRef(o);i&&(i.style.visibility="hidden")}};return{name:"RecyclePlugin",enabled:!0,hooks:{onItemEnterViewport:(r,o)=>{const i=r.getItemRef(o);i&&(i.style.visibility="visible"),n.add(o),t(r)},onItemLeaveViewport:(r,o)=>{const i=r.getItemRef(o);i&&(i.style.visibility="hidden"),n.delete(o)},onItemUnmount:(r,o)=>{n.delete(o)},onUnmount:()=>{n.clear()}}}}const yw="RecyclePlugin",vw="纯绘制层优化：项离开视口就 `visibility: hidden`，回来再显示。DOM 节点不销毁，滚动位置与已加载的图片都保留，适合「项里有视频/Canvas，重建代价高」的场景。",xw="2.0.0",ww=["interaction","性能"],Sw=[{name:"poolSize",type:"number",default:"—",description:"同时保持可见的项数上限（超出则回收最早的）"}],bw=`// 视口外的项设 \`visibility: hidden\`，降低长列表的绘制压力。
const Waterfall = withPlugins(WaterfallCore, [
  createRecyclePlugin(),
]);

<Waterfall items={items} renderItem={(item) => <Card data={item} />} />;`,kw=["不销毁 DOM，只隐藏","项内媒体不重新加载","与虚拟化正交（一个省绘制、一个省节点）"],Pw=["项内含视频 / canvas","长列表滚动发虚","低端设备省电"],Cw=["与 Core 的 `virtualize` 同开会让项被卸载又隐藏，收益互相抵消，建议只选一个。","只改 visibility 不改布局，所以不会引起重排。"],Nf={name:yw,description:vw,since:xw,tags:ww,config:Sw,example:bw,features:kw,useCases:Pw,notes:Cw},jf=Object.assign(hw,{meta:Nf});function _w(e={}){const n=e.containerRole??"list",t=e.itemRole??"listitem",r=e.enableTabIndex??!0,o=e.containerLabel??"Waterfall list",i=new WeakMap,l=u=>{var d;return((d=u.containerRef)==null?void 0:d.current)??u.bus},s=u=>i.get(l(u))??0,a=u=>{const d=u.containerRef.current;d&&(d.setAttribute("role",n),d.setAttribute("aria-label",o),d.setAttribute("aria-busy",u.isLayouting?"true":"false"))};return{name:"A11yPlugin",enabled:!0,hooks:{onMount:u=>{a(u)},onLayoutComplete:u=>{a(u)},onItemClick:(u,d)=>{var c;s(u)!==d&&(i.set(l(u),d),(c=u.forceUpdate)==null||c.call(u))},renderItemWrapper:(u,d,c)=>f.jsx("div",{role:t,"aria-posinset":c+1,"aria-setsize":u.itemCount,tabIndex:r?c===s(u)?0:-1:void 0,children:d})}}}const Tw="A11yPlugin",Rw="把瀑布流补成读屏可理解的列表：容器 `role=list` + `aria-label`，每项 `role=listitem` + `aria-posinset` / `aria-setsize`，并可选加 `tabIndex` 让键盘能逐项聚焦。",Mw="2.0.0",Iw=["ui","a11y"],$w=[{name:"containerRole",type:"string",default:'"list"',description:"容器 role"},{name:"itemRole",type:"string",default:'"listitem"',description:"项 role"},{name:"enableTabIndex",type:"boolean",default:"true",description:"项是否可 Tab 聚焦"},{name:"containerLabel",type:"string",default:'"Waterfall list"',description:"容器 aria-label"}],Ew=`// 给容器与项补 ARIA role / label / posinset，支持键盘 Tab 遍历。
const Waterfall = withPlugins(WaterfallCore, [
  createA11yPlugin({
    containerRole: "list",
    itemRole: "listitem",
    enableTabIndex: true,
  }),
]);

<Waterfall items={items} renderItem={(item) => <Card data={item} />} />;`,Nw=["容器 / 项 role 成对补齐","aria-posinset + aria-setsize 正确标注序号","键盘可逐项聚焦"],jw=["政务 / 金融等合规站点","读屏用户可用的信息流","键盘操作优先的桌面端"],Lw=["项数很多时 `tabIndex=0` 会让 Tab 变长，建议配合「跳转主内容」链接使用。"],Lf={name:Tw,description:Rw,since:Mw,tags:Iw,config:$w,example:Ew,features:Nw,useCases:jw,notes:Lw},Of=Object.assign(_w,{meta:Lf}),uc="GROUPS",Ow="GROUP_INDEX";function Dw(e={}){const n=e.groupBy??(s=>(s==null?void 0:s.category)??"default"),t=e.showOverlay??!1;let r=null,o=null;const i=(s,a)=>{if(s.size!==a.size)return!1;for(const[u,d]of s){const c=a.get(u);if(!c||c.length!==d.length)return!1}return!0},l=s=>{const a=s.items??[];if(o&&r===a)return o;const u=new Map,d=new Map;a.forEach((p,y)=>{const x=n(p,y);d.set(y,x),u.has(x)||u.set(x,[]),u.get(x).push(y)});const c=o?!i(u,o):!0;return r=a,o=u,s.sharedData.set(uc,u),s.sharedData.set(Ow,d),c&&u.size>0&&s.bus.emit("grouping:change",{groups:u}),u};return{name:"GroupingPlugin",enabled:!0,hooks:{onMount:s=>{l(s)},onLayoutComplete:s=>{l(s)},onPropsChange:s=>{l(s)},renderOverlay:s=>{if(!t)return null;const a=s.sharedData.get(uc)??new Map;if(a.size===0)return null;const u=Array.from(a.entries()).slice(0,3);return f.jsxs("div",{style:{position:"absolute",top:12,left:12,zIndex:99,background:"#111827",color:"#fff",padding:"10px 12px",borderRadius:8,boxShadow:"0 4px 12px rgba(0,0,0,0.25)",border:"1px solid rgba(255,255,255,0.15)",minWidth:150,fontSize:12,pointerEvents:"none"},children:[f.jsxs("div",{style:{opacity:.85,marginBottom:6},children:["分组：",a.size," 组"]}),u.map(([d,c])=>f.jsxs("div",{children:[String(d)," · ",c.length," 项"]},String(d)))]})}}}}const zw="GroupingPlugin",Aw="用 groupBy 把项按业务字段分组，结果放进 sharedData 的 `GROUPS`（Map<组键, 索引数组>），供 StickyHeaderPlugin、分组统计条等消费。挂载即算一次，之后 props 变化重算。",Ww="2.0.0",Hw=["ui","分组"],Fw=[{name:"groupBy",type:"(item, index) => string | number",default:'item.category ?? "default"',description:"分组函数"},{name:"showOverlay",type:"boolean",default:"false",description:"是否显示分组统计角标"}],Bw=`// 按字段把项分组，结果写进 sharedData(GROUPS) 供吸顶条 / 统计用。
const Waterfall = withPlugins(WaterfallCore, [
  createGroupingPlugin({
    groupBy: "item.category ?? \\"default\\"",
    showOverlay: false,
  }),
]);

<Waterfall items={items} renderItem={(item) => <Card data={item} />} />;`,Uw=["挂载即计算（旧版只在 props 变化时算，首屏永远拿不到分组）","结果写 sharedData，跨插件可读","统计角标默认关闭"],Gw=["按分类分组的信息流","按日期分组的时间线","吸顶条显示当前分组"],Vw=["分组只产出索引映射，不改变渲染顺序；要视觉分组请自己按分组建行。"],Df={name:zw,description:Aw,since:Ww,tags:Hw,config:Fw,example:Bw,features:Uw,useCases:Gw,notes:Vw},va=Object.assign(Dw,{meta:Df});function Kw(e={}){const n=e.title||"分组标题",t=e.showHint??!1;return{name:"StickyHeaderPlugin",enabled:!0,hooks:{renderOverlay:r=>{var u,d,c;const o=((u=r.sharedData)==null?void 0:u.get("GROUPS"))||new Map,i=(d=r.sharedData)==null?void 0:d.get("GROUP_INDEX"),l=((c=r.visibleRange)==null?void 0:c.start)??0,a=(i==null?void 0:i.get(l))??(o.size>0?Array.from(o.keys())[0]:void 0);return f.jsxs("div",{style:{position:"sticky",top:0,zIndex:20,background:"#111827",color:"#fff",borderBottom:"1px solid rgba(255,255,255,0.15)",boxShadow:"0 4px 12px rgba(0,0,0,0.15)",padding:"10px 14px",fontSize:15,fontWeight:600},children:[n," ",a!==void 0?`：${String(a)}`:"",t?f.jsx("span",{style:{marginLeft:8,fontSize:12,opacity:.8},children:"向下滚动观察吸顶"}):null]})}}}}const Qw="StickyHeaderPlugin",Yw="在滚动容器内渲染一条 `position: sticky` 的标题条，始终贴住容器顶部。装了 GroupingPlugin 时自动显示第一个分组名，也可用 title 写死。",qw="2.0.0",Xw=["ui","吸顶"],Jw=[{name:"title",type:"string",default:'"分组标题"',description:"标题文案"},{name:"showHint",type:"boolean",default:"false",description:"是否显示「向下滚动观察」提示"}],Zw=`// 滚动容器内的吸顶标题条，可与分组联动显示当前组。
const Waterfall = withPlugins(WaterfallCore, [
  createStickyHeaderPlugin({
    title: "分组标题",
    showHint: false,
  }),
]);

<Waterfall items={items} renderItem={(item) => <Card data={item} />} />;`,eS=["sticky 吸顶，不依赖额外容器","与 Grouping 联动显示当前组","提示文案默认关闭"],nS=["分组信息流","按日期分组的时间线","长列表的上下文提示"],tS=["sticky 生效要求它作为滚动容器的直接子元素——由 composeSlots 保证，单测已锁。"],zf={name:Qw,description:Yw,since:qw,tags:Xw,config:Jw,example:Zw,features:eS,useCases:nS,notes:tS},Af=Object.assign(Kw,{meta:zf});function rS(e={}){const n=e.storageKey||"waterfall-bookmark",t=e.scrollBehavior||"smooth",r=o=>{var a;const i=o;if(!i)return!1;const l=(a=i.tagName)==null?void 0:a.toLowerCase(),s=(i.getAttribute&&i.getAttribute("contenteditable"))==="true";return l==="input"||l==="textarea"||s};return{name:"BookmarkPlugin",enabled:!0,hooks:{onMount:o=>{const i=l=>{var u,d;if(r(l.target))return;const s=(l.key||"").toLowerCase(),a=l.code||"";if(s==="b"||a==="KeyB"){const c=((u=o.containerRef)==null?void 0:u.current)||null;let p=0;c&&c.scrollHeight>c.clientHeight?p=c.scrollTop:p=window.pageYOffset||document.documentElement.scrollTop||document.body.scrollTop||0;try{localStorage.setItem(n,String(Math.max(0,p)))}catch{}}else if(s==="r"||a==="KeyR"){let c=0;try{const y=localStorage.getItem(n)||"0";c=Math.max(0,Number(y)||0)}catch{}const p=((d=o.containerRef)==null?void 0:d.current)||null;p&&p.scrollHeight>p.clientHeight?p.scrollTo({top:c,behavior:t}):window.scrollTo({top:c,behavior:t})}};return window.addEventListener("keydown",i,{capture:!0}),()=>{window.removeEventListener("keydown",i,{capture:!0})}}}}}const oS="BookmarkPlugin",iS="长列表读到一半要跳走时按 **B** 存位置，回来按 **R** 复原。焦点在输入框/可编辑区域时不拦截按键。",lS="2.0.0",sS=["ui","滚动","快捷键"],aS=[{name:"storageKey",type:"string",default:'"waterfall-bookmark"',description:"localStorage 键名"},{name:"scrollBehavior",type:'"auto" | "smooth"',default:'"smooth"',description:"恢复时的滚动行为"}],uS=`// 按 B 记录滚动位置、按 R 跳回（localStorage），忽略输入框按键。
const Waterfall = withPlugins(WaterfallCore, [
  createBookmarkPlugin({
    storageKey: "waterfall-bookmark",
    scrollBehavior: "smooth",
  }),
]);

<Waterfall items={items} renderItem={(item) => <Card data={item} />} />;`,cS=["B 存 / R 取，零 UI 侵入","自动区分容器滚动与页面滚动","输入框内不误触"],dS=["长文列表阅读","后台大表格浏览","演示时快速复位"],pS=["键名全局共用，一个页面里多处瀑布流请各自传不同的 storageKey。"],Wf={name:oS,description:iS,since:lS,tags:sS,config:aS,example:uS,features:cS,useCases:dS,notes:pS},Hf=Object.assign(rS,{meta:Wf});function fS(e={}){const n=e.storageKey||"waterfall-state",t=e.persistScroll??!0,r=e.persistKeys||["pageIndex","pageSize","searchQuery"];let o=!1;const i=1,l=new WeakSet,s=d=>{var c;return((c=d.containerRef)==null?void 0:c.current)??d.bus};function a(){try{const d=localStorage.getItem(n);if(!d)return null;const c=JSON.parse(d);return!c||c.version!==i||typeof c.state!="object"?null:c.state}catch{return null}}function u(d){try{localStorage.setItem(n,JSON.stringify({version:i,state:d}))}catch{}}return{name:"StatePersistencePlugin",enabled:!0,hooks:{transformProps:d=>{if(o)return d;const c=a();if(!c)return d;const p={...d};let y=!1;return r.forEach(x=>{c[x]!==void 0&&(p[x]=c[x],y=!0)}),y&&(o=!0),p},onMount:d=>{var y;const c=a();if(!c)return;const p={};if(r.forEach(x=>{c[x]!==void 0&&(p[x]=c[x])}),Object.keys(p).length>0&&((y=d.bus)==null||y.emit("state:restored",p),typeof window<"u"))try{window.dispatchEvent(new CustomEvent("waterfall:state-restored",{detail:p}))}catch{}},onLayoutComplete:d=>{if(!t)return;const c=s(d);if(l.has(c))return;const p=a(),y=Number((p==null?void 0:p.scrollTop)??0);if(!Number.isFinite(y)||y<=0){l.add(c);return}const x=d.containerRef.current;x&&(x.scrollTo({top:y,behavior:"auto"}),l.add(c))},onPropsChange:(d,c,p)=>{const x={...a()||{}},w=p??{};r.forEach(S=>{const g=w[S];g!==void 0&&(x[S]=g)}),u(x)},onUnmount:d=>{var y;const c={};t&&(c.scrollTop=((y=d.containerRef.current)==null?void 0:y.scrollTop)||0);const p=d.props??{};r.forEach(x=>{const w=p[x];w!==void 0&&(c[x]=w)}),u(c)}}}}const mS="StatePersistencePlugin",gS="三个时机各做一件事：首次渲染把快照里的 pageIndex / searchQuery 注入 props；挂载后恢复 scrollTop；props 变化与卸载时写回快照。刷新页面不丢进度。",hS="2.0.0",yS=["ui","持久化"],vS=[{name:"storageKey",type:"string",default:'"waterfall-state"',description:"localStorage 键名"},{name:"persistScroll",type:"boolean",default:"true",description:"是否持久化滚动位置"},{name:"persistKeys",type:"string[]",default:'["pageIndex","pageSize","searchQuery"]',description:"要持久化的 props 键"}],xS=`// 把滚动位置与分页/查询状态存 localStorage，回来时恢复。
const Waterfall = withPlugins(WaterfallCore, [
  createStatePersistencePlugin({
    storageKey: "waterfall-state",
    persistScroll: true,
    persistKeys: ["pageIndex","pageSize","searchQuery"],
  }),
]);

<Waterfall items={items} renderItem={(item) => <Card data={item} />} />;`,wS=["滚动位置 + 分页/查询一起存","首帧注入只做一次，不会覆盖用户操作","SSR / 隐私模式下降级为不持久化"],SS=["后台列表刷新不丢页","搜索结果返回定位","移动端来回切换页面"],bS=["只能恢复「值」，不能替你把它写回 React state——页面应订阅 `state:restored` 事件或读 bus。","localStorage 不可用（隐私模式/配额满）时静默跳过，不会抛错。"],Ff={name:mS,description:gS,since:hS,tags:yS,config:vS,example:xS,features:wS,useCases:SS,notes:bS},Bf=Object.assign(fS,{meta:Ff});function kS(e={}){const n=e.mode||"hash",t=e.keys||["pageIndex","pageSize","searchQuery"];let r=null,o=!1;const i=()=>(r===null&&(r=l()),r);function l(){try{if(n==="hash"){const a=window.location.hash||"",u=a.indexOf("?"),d=u>=0?a.slice(u+1):a.replace(/^#/,""),c=new URLSearchParams(d),p={};return t.forEach(y=>{const x=c.get(y);x!==null&&(p[y]=x)}),p}else{const a=new URLSearchParams(window.location.search),u={};return t.forEach(d=>{const c=a.get(d);c!==null&&(u[d]=c)}),u}}catch{return{}}}function s(a){try{const u=new URLSearchParams;t.forEach(c=>{const p=a[c];p!=null&&String(p).length>0&&u.set(c,String(p))});const d=u.toString();if(n==="hash"){const c=window.location.hash||"",x=`#${c.replace(/^#/,"").split("?")[0]||""}${d?`?${d}`:""}`;c!==x&&history.replaceState(null,"",`${window.location.pathname}${window.location.search}${x}`)}else{const p=window.location.pathname+(d?`?${d}`:"")+(window.location.hash||"");history.replaceState(null,"",p)}}catch{}}return{name:"URLSyncPlugin",enabled:!0,hooks:{transformProps:a=>{if(o)return a;const u=i(),d={...a};let c=!1;return t.forEach(p=>{u[p]!==void 0&&(d[p]=u[p],c=!0)}),c&&(o=!0),d},onMount:a=>{var u;(u=a.bus)==null||u.emit("urlsync:init",i())},onPropsChange:(a,u,d)=>{const c={},p=d??{};t.forEach(w=>{const S=p[w];S!==void 0&&(c[w]=S)});const y=i();t.some(w=>String(c[w]??"")!==String(y[w]??""))&&s(c)}}}}const PS="URLSyncPlugin",CS="props 变化时把指定键写进 URL（hash 或 search），挂载时读出来广播 `urlsync:init`。刷新与分享都能还原筛选状态。",_S="2.0.0",TS=["ui","URL","可分享"],RS=[{name:"mode",type:'"hash" | "search"',default:'"hash"',description:"写 hash 还是 search"},{name:"keys",type:"string[]",default:'["pageIndex","pageSize","searchQuery"]',description:"要同步的 props 键"}],MS=`// 把分页/搜索/排序同步进 URL（hash 或 search），链接可分享。
const Waterfall = withPlugins(WaterfallCore, [
  createURLSyncPlugin({
    mode: "hash",
    keys: ["pageIndex","pageSize","searchQuery"],
  }),
]);

<Waterfall items={items} renderItem={(item) => <Card data={item} />} />;`,IS=["hash 模式会保留已有路由路径","用 replaceState，不污染后退栈","SSR 安全：无 window 时直接跳过"],$S=["搜索结果可分享","后台筛选状态可刷新","带参数的深链"],ES=["只做单向同步（props → URL）与初始读取；URL 前进后退的监听请页面自己做。"],Uf={name:PS,description:CS,since:_S,tags:TS,config:RS,example:MS,features:IS,useCases:$S,notes:ES},Gf=Object.assign(kS,{meta:Uf}),NS={sm:{width:0,columns:2},md:{width:560,columns:3},lg:{width:800,columns:4}},jS={slug:"responsive-columns",title:"响应式列数",group:"plugin",plugin:"ResponsiveColumnsPlugin",intro:"按断点表切列数：< 560 两列，560 起三列，800 起四列。",why:"设计稿给了明确的「平板 3 列 / 桌面 4 列」规范时用断点表；只想要「每列至少多宽」就用 AutoColumn（下一页）。",plugs:[{fn:"createResponsiveColumnsPlugin",cfg:"breakpoints: { sm: { width: 0, columns: 2 }, md: { width: 560, columns: 3 }, lg: { width: 800, columns: 4 } }",why:"按容器宽度命中最近一档，读的是容器宽不是 window.innerWidth"}],props:["columns={2}","gap={12}","containerStyle={{ height: 420 }}"],note:"与 AutoColumnPlugin 互斥：两个都实现 calculateColumns，同开会交替覆盖，列数看起来会「闪」。",controls:[{key:"simWidth",label:"模拟容器宽",kind:"number",init:760,min:360,max:1100,step:20}]},LS=q({count:28,seed:2301,plugins:()=>[nf({breakpoints:NS})],instrument:!0,coreProps:e=>({gap:12,containerStyle:{height:"var(--stage-h, 380px)",width:Number(e.cfg.simWidth)}}),chrome:e=>{const n=Number(e.cfg.simWidth),t=n>=800?"lg → 4 列":n>=560?"md → 3 列":"sm → 2 列";return f.jsxs("p",{className:"stage-tip",children:["容器宽 ",f.jsx("b",{children:n})," · 命中 ",f.jsx("b",{children:t})," · 实际 ",f.jsx("b",{children:e.meter.columns})," 列"]})}}),OS=Object.freeze(Object.defineProperty({__proto__:null,default:LS,meta:jS},Symbol.toStringTag,{value:"Module"})),DS={slug:"auto-column",title:"自动列数",group:"plugin",plugin:"AutoColumnPlugin",intro:"给一个最小列宽，列数自己算：floor((可用宽 + gap) / (最小列宽 + gap))。",why:"版式没有硬性列数要求、只要求「图片别小于 200px」时用它，比写一堆断点省事。",plugs:[{fn:"createAutoColumnPlugin",cfg:"minColumnWidth: {{minColumnWidth}}, maxColumns: {{maxColumns}}",why:"按最小列宽算列数，容器变宽自动加列、变窄自动减列"}],props:["gap={12}","containerStyle={{ height: 420 }}"],note:"算的是容器宽（padding 已扣除）。列数上限用 maxColumns 卡住，否则超宽屏会排出 8 列小图。",controls:[{key:"minColumnWidth",label:"minColumnWidth",kind:"number",init:200,min:120,max:320,step:10},{key:"maxColumns",label:"maxColumns",kind:"number",init:4,min:2,max:6},{key:"simWidth",label:"模拟容器宽",kind:"number",init:900,min:360,max:1100,step:20}]},zS=q({count:30,seed:2401,instrument:!0,plugins:e=>[Zp({minColumnWidth:Number(e.cfg.minColumnWidth),maxColumns:Number(e.cfg.maxColumns)})],coreProps:e=>({gap:12,containerStyle:{height:"var(--stage-h, 380px)",width:Number(e.cfg.simWidth)}}),chrome:e=>f.jsxs("p",{className:"stage-tip",children:["最小列宽 ",f.jsx("b",{children:Number(e.cfg.minColumnWidth)})," · 容器宽"," ",f.jsx("b",{children:Number(e.cfg.simWidth)})," · 算出 ",f.jsx("b",{children:e.meter.columns})," 列（上限"," ",Number(e.cfg.maxColumns),"）"]})}),AS=Object.freeze(Object.defineProperty({__proto__:null,default:zS,meta:DS},Symbol.toStringTag,{value:"Module"})),WS={slug:"alignment",title:"对齐策略",group:"plugin",plugin:"AlignmentPlugin",intro:"shortest / balanced / sequential，切一下就能看出列高差在哪。",why:"卡片高差大又想让底部别太参差用 shortest（默认）；想每列张数一样用 balanced；位置可预测用 sequential。",plugs:[{fn:"createAlignmentPlugin",cfg:'mode: "{{mode}}"',why:"改写 alignmentMode，等价于 Core 的 props.alignmentMode，但可以按环境动态决定"}],props:["gap={12}","containerStyle={{ height: 420 }}"],note:"列高相同时三者都取最小索引列（左优先）—— 这是刻意保留的旧行为，别指望 balanced 会把第一张放到「看起来更空」的那列。",controls:[{key:"mode",label:"mode",kind:"select",init:"shortest",options:[{label:"shortest 最矮列（默认）",value:"shortest"},{label:"balanced 项数最少",value:"balanced"},{label:"sequential 按序轮转",value:"sequential"}]}]},HS=q({count:14,seed:2501,heightRange:[120,360],instrument:!0,plugins:e=>[Xp({mode:String(e.cfg.mode)})],coreProps:()=>({columns:3,gap:12}),chrome:e=>f.jsxs("p",{className:"stage-tip",children:["当前策略 ",f.jsx("b",{children:String(e.cfg.mode)})," · ",e.items.length," 张卡 → 看三列底部是否齐"]})}),FS=Object.freeze(Object.defineProperty({__proto__:null,default:HS,meta:WS},Symbol.toStringTag,{value:"Module"})),BS={slug:"fixed-height",title:"固定高度",group:"plugin",plugin:"FixedHeightPlugin",intro:"统一每项高度，从错落流变成规整网格。",why:"视频封面墙、图库缩略网格这类要求「整行齐平」的版式，靠这个插件而不是给每张图写死 CSS。",plugs:[{fn:"createFixedHeightPlugin",cfg:"itemHeight: {{itemHeight}}",why:"改写 item.height，缩略图与文案一起放进固定高度的盒子里"}],props:["columns={3}","gap={12}","containerStyle={{ height: 420 }}"],note:"插件只改数据字段，不碰 DOM。卡片组件必须把 item.height 用上（示例里的 FeedCard 传 fixed 就是干这个），否则看起来「插件没生效」。",controls:[{key:"itemHeight",label:"itemHeight",kind:"number",init:176,min:100,max:260,step:4}]},US=q({count:18,seed:2601,fixed:!0,variant:"video",instrument:!0,plugins:e=>[lf({itemHeight:Number(e.cfg.itemHeight)})],coreProps:()=>({columns:3,gap:12}),chrome:e=>f.jsxs("p",{className:"stage-tip",children:["统一高度 ",f.jsx("b",{children:Number(e.cfg.itemHeight)}),"px · 行高应完全一致（总高"," ",Math.round(e.meter.totalHeight),"px）"]})}),GS=Object.freeze(Object.defineProperty({__proto__:null,default:US,meta:BS},Symbol.toStringTag,{value:"Module"})),VS={slug:"gap-plugin",title:"间距插件",group:"plugin",plugin:"GapPlugin",intro:"把行/列间距收到一处，还能按窗口宽度换档。",why:"多个页面要统一间距规范（或手机端要更紧）时，用插件的 responsive 比在每个页面写 CSS 断点稳。",plugs:[{fn:"createGapPlugin",cfg:"columnGap: {{columnGap}}, rowGap: {{rowGap}}, responsive: { sm: { columnGap: 8, rowGap: 8 } }",why:"间距集中配置，并按 sm/md/lg/xl 自动换档（阈值 768/992/1200）"}],props:["columns={3}","containerStyle={{ height: 420 }}"],note:"responsive 是「命中即覆盖」：桌面端如果也配了 lg，上面两个滑杆就会被 lg 顶掉（看着像没接上）。这页只给 sm，所以桌面端用手写值、窄于 768px 才切 8px。档位看的是 window 宽度，不是容器宽。",controls:[{key:"columnGap",label:"columnGap",kind:"number",init:16,min:0,max:40},{key:"rowGap",label:"rowGap",kind:"number",init:16,min:0,max:40}]},KS=q({count:26,seed:2701,instrument:!0,plugins:e=>[rf({columnGap:Number(e.cfg.columnGap),rowGap:Number(e.cfg.rowGap),responsive:{sm:{columnGap:8,rowGap:8}}})],coreProps:()=>({columns:3}),chrome:e=>f.jsxs("p",{className:"stage-tip",children:["配置 ",f.jsx("b",{children:Number(e.cfg.columnGap)})," / ",f.jsx("b",{children:Number(e.cfg.rowGap)})," · 把窗口拉窄会切到 sm 档（8px）"]})}),QS=Object.freeze(Object.defineProperty({__proto__:null,default:KS,meta:VS},Symbol.toStringTag,{value:"Module"})),YS={slug:"virtual",title:"虚拟瀑布流",group:"plugin",capability:"virtualize",intro:"1000 项只渲染几十个 DOM —— 看「数据项 / 实际渲染」两个读数。",why:"上千项、项高可估（图片卡、商品卡）时开。几百项以内不必上虚拟化，Recycle 更省事（不卸载、图片不用重载）。",plugs:[],props:["items={thousandItems}",{text:"virtualize={{ overscan: {{overscan}}, adaptiveEstimate: true, estimateQuantile: {{estimateQuantile}} }}",when:e=>!!e.adaptive},{text:"virtualize={{ overscan: {{overscan}}, adaptiveEstimate: false, estimateHeight: {{estimateHeight}} }}",when:e=>!e.adaptive},"columns={3}","containerStyle={{ height: 420 }}"],note:"estimateHeight 只是「冷启动还没有任何实测样本」时的兜底。样本够 8 个之后，自适应改用实测高度的中位数（P50）——中位数让总高误差最小。注意重叠不靠「把估值抬高」解决：抬高只是把误差从「重叠」换成「滚动条虚长」，而后者更持久。真正压住重叠的是「量到真高就立刻重排」——误差只存在一帧，且通常落在视口外。关掉自适应则严格用 estimateHeight，可以自己体会「240 面对 190~350 的项高」会怎样。",controls:[{key:"overscan",label:"overscan（屏）",kind:"number",init:1,min:0,max:4},{key:"adaptive",label:"自适应估值",kind:"switch",init:!0,hint:"关掉后严格用 estimateHeight 排未测量项"},{key:"estimateQuantile",label:"分位",kind:"select",init:"0.5",options:[{label:"P50 中位数（默认，总高最准）",value:"0.5"},{label:"P75",value:"0.75"},{label:"P90（更保守，宁可留空）",value:"0.9"},{label:"P100（绝不重叠）",value:"1"}],when:e=>!!e.adaptive},{key:"estimateHeight",label:"estimateHeight",kind:"number",init:240,min:120,max:360,step:20,when:e=>!e.adaptive}]},qS=q({count:1e3,seed:2801,instrument:!0,plugins:()=>[],coreProps:e=>({columns:3,gap:12,virtualize:{overscan:Number(e.cfg.overscan),adaptiveEstimate:!!e.cfg.adaptive,estimateQuantile:Number(e.cfg.estimateQuantile??.5),estimateHeight:Number(e.cfg.estimateHeight)}}),chrome:e=>f.jsxs("p",{className:"stage-tip",children:[e.items.length," 项数据 → 实际渲染 ",f.jsx("b",{children:e.meter.rendered})," 个 · 总高"," ",f.jsx("b",{children:Math.round(e.meter.totalHeight)}),"px（按全量算，滚动中会随实测样本收敛）"]})}),XS=Object.freeze(Object.defineProperty({__proto__:null,default:qS,meta:YS},Symbol.toStringTag,{value:"Module"})),JS={slug:"virtual-dynamic",title:"虚拟瀑布流（动态高度）",group:"plugin",capability:"virtualize · dynamicHeights",intro:"900ms 后所有卡片高度 ×1.5 —— 看虚拟化怎么把估值换成实测值。",why:"图片类瀑布流必然「先估后测」。要保证滚动条不跳、总高最终准确，就得理解 estimateHeight 与 dynamicHeights 各自管什么。",plugs:[],props:["virtualize={{ overscan: 1, adaptiveEstimate: {{adaptive}}, dynamicHeights: {{{dynamicHeights}}} }}",{text:"  // adaptiveEstimate 关掉时才需要自己给 estimateHeight",when:e=>!e.adaptive},"columns={3}","containerStyle={{ height: 420 }}"],note:"dynamicHeights 关闭后，项高度变化不会触发重排 —— 需要自己调 ref.relayout()。虚拟化下项可能已卸载，measureItem 会返回缓存值而不是实时量。自适应估值（默认开）会跟着实测样本走，所以上面这一下 ×1.5 之后，未测量项的估值也会自动抬上去。",controls:[{key:"adaptive",label:"自适应估值",kind:"switch",init:!0,hint:"关掉后严格用 estimateHeight 排未测量项"},{key:"estimateHeight",label:"estimateHeight",kind:"number",init:240,min:120,max:360,step:20,when:e=>!e.adaptive},{key:"dynamicHeights",label:"dynamicHeights",kind:"switch",init:!0,hint:"关掉后高度变化不自动重排"}]},ZS=q({count:400,seed:2901,instrument:!0,plugins:()=>[],coreProps:e=>({columns:3,gap:12,virtualize:{overscan:1,adaptiveEstimate:!!e.cfg.adaptive,estimateHeight:Number(e.cfg.estimateHeight),dynamicHeights:!!e.cfg.dynamicHeights}}),effect:e=>{const n=window.setTimeout(()=>{e.setItems(t=>t.map(r=>({...r,height:Math.round(r.height*1.5/8)*8}))),e.log("模拟图片加载完成：全部项高度 ×1.5，Core 重新测量并修正位置")},900);return()=>window.clearTimeout(n)},chrome:e=>f.jsxs("p",{className:"stage-tip",children:[e.items.length," 项 · 渲染 ",f.jsx("b",{children:e.meter.rendered})," · 总高"," ",f.jsx("b",{children:Math.round(e.meter.totalHeight)}),"px · 自适应"," ",f.jsx("b",{children:e.cfg.adaptive?"开":"关"})," · dynamicHeights"," ",f.jsx("b",{children:e.cfg.dynamicHeights?"开":"关"})]})}),eb=Object.freeze(Object.defineProperty({__proto__:null,default:ZS,meta:JS},Symbol.toStringTag,{value:"Module"})),nb={slug:"throttle",title:"Throttle 插件",group:"plugin",plugin:"ThrottlePlugin",intro:"滚动回调 120ms 一次还是每帧一次，看读数差别。",why:"埋点、懒加载判断、侧边指示器这类「滚动时要做点事」的逻辑，不节流会直接把主线程拖住。",plugs:[{fn:"createThrottlePlugin",cfg:"scroll: {{scroll}}, resize: {{resize}}",why:"统一收口滚动/尺寸回调频率，比每个页面各写一个 throttle 稳"}],props:["columns={3}","containerStyle={{ height: 420 }}"],note:"节流的是回调，不是布局。想让「连续改尺寸时的重排」慢下来用 DebounceLayout（下一页）。",controls:[{key:"scroll",label:"scroll（ms）",kind:"number",init:16,min:0,max:200,step:8,nonLayout:!0},{key:"resize",label:"resize（ms）",kind:"number",init:120,min:0,max:400,step:20,nonLayout:!0}]},tb=q({count:120,seed:3001,instrument:!0,plugins:e=>[cf({scroll:Number(e.cfg.scroll),resize:Number(e.cfg.resize)})],coreProps:()=>({columns:3,gap:12}),chrome:e=>f.jsxs("p",{className:"stage-tip",children:["滚动回调 ",f.jsx("b",{children:e.meter.scrolls})," 次（阈值 ",Number(e.cfg.scroll),"ms）· 布局耗时"," ",f.jsx("b",{children:e.meter.layoutMs.toFixed(1)}),"ms —— 快速滚一遍再对比"]})}),rb=Object.freeze(Object.defineProperty({__proto__:null,default:tb,meta:nb},Symbol.toStringTag,{value:"Module"})),ob={slug:"debounce-layout",title:"DebounceLayout 插件",group:"plugin",plugin:"DebounceLayoutPlugin",intro:"连续拖宽度时只在停下后重排一次。",why:"容器尺寸会被连续改变的场景（拖拽分栏、展开收起、缩放预览）不做防抖，每帧都会全量重排。",plugs:[{fn:"createDebounceLayoutPlugin",cfg:"delay: {{delay}}",why:"把 debounceDelay 拉长到 300ms，连续 resize 只算最后一次"}],props:["columns={3}","containerStyle={{ height: 420 }}"],note:"防抖太大会有「松手后卡片才归位」的观感，200–300ms 是比较稳的区间。和 ThrottlePlugin 分工不同：那个管回调、这个管重排。",controls:[{key:"delay",label:"delay（ms）",kind:"number",init:300,min:0,max:600,step:20,nonLayout:!0},{key:"simWidth",label:"容器宽",kind:"number",init:780,min:380,max:1080,step:10}]},ib=q({count:36,seed:3101,instrument:!0,plugins:e=>[pf({delay:Number(e.cfg.delay)})],coreProps:e=>({columns:3,gap:12,containerStyle:{height:"var(--stage-h, 380px)",width:Number(e.cfg.simWidth)}}),chrome:e=>f.jsxs("p",{className:"stage-tip",children:["防抖 ",f.jsx("b",{children:Number(e.cfg.delay)}),"ms · 最近布局"," ",f.jsx("b",{children:e.meter.layoutMs.toFixed(1)}),"ms · 拖滑杆时观察它多久变一次"]})}),lb=Object.freeze(Object.defineProperty({__proto__:null,default:ib,meta:ob},Symbol.toStringTag,{value:"Module"})),sb={slug:"recycle",title:"Recycle 插件",group:"plugin",plugin:"RecyclePlugin",intro:"离屏项隐藏而不卸载 —— 图片不用重载，DOM 数量不变。打开「改用 virtualize」可以当场对照。",why:"几百项的长列表：卸载会丢图片缓存（滚回来又要下载），不处理又会一直重绘。Recycle 是中间那档。",plugs:[{fn:"createRecyclePlugin",cfg:"poolSize: {{poolSize}}",why:"视口外超出池子的项设 visibility:hidden，减少绘制但保留 DOM"}],props:["columns={3}","containerStyle={{ height: 420 }}",{text:"virtualize={{ overscan: 1 }}",when:e=>!!e.virtual}],note:"与 virtualize 互斥：一个隐藏 DOM、一个卸载 DOM，同开会互相打架（可见项被另一套逻辑当成离屏）。所以上面的开关一打开，Recycle 插件就不装了 —— 两种策略二选一。挑法：几百项、图片重、要保住图片缓存 → Recycle；上千项、要控 DOM 数 → virtualize。",controls:[{key:"poolSize",label:"poolSize",kind:"number",init:24,min:4,max:80,step:2,nonLayout:!0},{key:"virtual",label:"改用 virtualize",kind:"switch",init:!1,hint:"对照：卸载离屏 DOM（Recycle 是隐藏不卸载）"}]},ab=q({count:300,seed:3201,instrument:!0,plugins:e=>e.cfg.virtual?[]:[jf({poolSize:Number(e.cfg.poolSize)})],coreProps:e=>({columns:3,gap:12,...e.cfg.virtual?{virtualize:{overscan:1}}:null}),chrome:e=>f.jsx("div",{className:"stage-stats",children:f.jsxs("p",{className:"stage-tip",children:[e.items.length," 项 · DOM ",f.jsx("b",{children:e.meter.rendered})," 个 · 总高"," ",f.jsx("b",{children:Math.round(e.meter.totalHeight)}),"px · 布局"," ",f.jsx("b",{children:e.meter.layoutMs.toFixed(1)}),"ms ·"," ",e.cfg.virtual?"virtualize（卸载离屏，DOM 只剩几十个）":`Recycle（DOM 全留 300 个，只隐藏绘制，池子 ${Number(e.cfg.poolSize)}）`]})})}),ub=Object.freeze(Object.defineProperty({__proto__:null,default:ab,meta:sb},Symbol.toStringTag,{value:"Module"})),gl=240,cb={slug:"infinite-scroll",title:"InfiniteScroll 插件",group:"plugin",plugin:"InfiniteScrollPlugin",intro:"滚到底自动追加，加载完停在 240 项不再请求。",why:"信息流、图片流的标准做法。threshold 要在「用户快到底但还没到底」时触发，太小会看到空白等待。",plugs:[{fn:"createInfiniteScrollPlugin",cfg:"threshold: {{threshold}}",why:"把 props.reachBottomOffset 写成 threshold，并在 onReachBottom 里加并发锁与 hasMore 判断"}],props:["onLoadMore={loadMore}","columns={3}","containerStyle={{ height: 420 }}"],note:"与 PaginationPlugin 互斥：一个追加、一个切片，同开会「翻到第 2 页又看到第 1 页」。到上限时让插件 setState({ hasMore: false }) 或像这里在 onLoadMore 里短路。",controls:[{key:"threshold",label:"threshold（px）",kind:"number",init:400,min:100,max:900,step:50,nonLayout:!0}]},db=q({count:24,seed:3301,instrument:!0,plugins:e=>[Pf({threshold:Number(e.cfg.threshold)})],coreProps:e=>({columns:3,gap:12,onLoadMore:()=>{e.setItems(n=>n.length>=gl?n:[...n,...Qp({count:12,seed:3301+n.length*7})])}}),chrome:e=>{const n=e.items.length;return f.jsxs("p",{className:"stage-tip",children:["已加载 ",f.jsx("b",{children:n})," / ",gl," 项 ·"," ",n>=gl?"已到上限，不会再请求":`距底 ${Number(e.cfg.threshold)}px 时追加 12 项`]})}}),pb=Object.freeze(Object.defineProperty({__proto__:null,default:db,meta:cb},Symbol.toStringTag,{value:"Module"})),fb={slug:"pagination",title:"Pagination 插件",group:"plugin",plugin:"PaginationPlugin",intro:"pageIndex / pageSize 交给插件切片，翻页自动回顶。",why:"后台列表、搜索结果页：需要「第几页 / 共几页」这种确定性导航时用分页，不要用无限滚动。",plugs:[{fn:"createPaginationPlugin",cfg:"pageSize: {{pageSize}}, scrollToTop: true",why:"读 props.pageIndex（1 基）与 props.pageSize，对 items 切片"}],props:["pageIndex={{{pageIndex}}}","pageSize={{{pageSize}}}","scrollToTopOnPageChange","columns={4}","containerStyle={{ height: 420 }}"],note:"它排在 Filter/Sort/Search 之后（priority 10），所以页数是过滤后的总数。顺序反了会出现「第 2 页是空的」。",controls:[{key:"pageSize",label:"pageSize",kind:"number",init:12,min:4,max:36,step:2},{key:"pageIndex",label:"pageIndex",kind:"number",init:1,min:1,max:12}]},mb=q({count:48,seed:3401,instrument:!0,plugins:e=>[bf({pageSize:Number(e.cfg.pageSize),scrollToTop:!0})],coreProps:e=>{const n=Math.max(1,Math.ceil(48/Number(e.cfg.pageSize)));return{columns:4,gap:12,pageIndex:Math.min(Number(e.cfg.pageIndex),n),pageSize:Number(e.cfg.pageSize),scrollToTopOnPageChange:!0}},chrome:e=>{const n=Number(e.cfg.pageSize),t=Number(e.cfg.pageIndex),r=Math.max(1,Math.ceil(e.items.length/n)),o=Math.min(t,r);return f.jsxs("div",{className:"stage-pager",children:[f.jsx("button",{type:"button",disabled:o<=1,onClick:()=>e.setCfg("pageIndex",Math.max(1,o-1)),children:"上一页"}),f.jsxs("span",{children:["第 ",f.jsx("b",{children:o})," / ",r," 页 · 每页 ",n," · 共 ",e.items.length," 项",t>r?"（滑杆已越界，钳到最后一页）":""]}),f.jsx("button",{type:"button",disabled:o>=r,onClick:()=>e.setCfg("pageIndex",Math.min(r,o+1)),children:"下一页"})]})}}),gb=Object.freeze(Object.defineProperty({__proto__:null,default:mb,meta:fb},Symbol.toStringTag,{value:"Module"})),hb={slug:"filter",title:"Filter 插件",group:"plugin",plugin:"FilterPlugin",intro:"价格上限拖到哪，列表就剩到哪 —— 页数/总数跟着变。",why:"价格区间、库存、标签筛选：过滤必须发生在排序与分页之前，否则「第 2 页」会突然空掉。",plugs:[{fn:"createFilterPlugin",cfg:"predicate: (item) => item.price <= 500, scrollToTop: false",why:"在 transformProps 链的第一环删掉不匹配项（priority 40，排在排序/分页之前）"}],props:["filterFn={(item) => item.price <= {{maxPrice}}}","columns={4}","containerStyle={{ height: 420 }}"],note:"谓词抛错时按「保留」处理，不会让整表消失。条件变化后要不要回顶由 scrollToTop 决定。",controls:[{key:"maxPrice",label:"价格上限",kind:"number",init:500,min:50,max:900,step:50}]},yb=q({count:40,seed:3501,commerce:!0,variant:"product",instrument:!0,pluginKeys:[],plugins:()=>[yf({predicate:e=>e.price<=500})],coreProps:e=>({columns:4,gap:12,filterFn:n=>n.price<=Number(e.cfg.maxPrice)}),chrome:e=>{const n=Number(e.cfg.maxPrice),t=e.items.filter(r=>r.price<=n).length;return f.jsxs("p",{className:"stage-tip",children:["¥ ≤ ",n," · 命中 ",f.jsx("b",{children:t})," / ",e.items.length," 项"]})}}),vb=Object.freeze(Object.defineProperty({__proto__:null,default:yb,meta:hb},Symbol.toStringTag,{value:"Module"})),hl={likes:(e,n)=>n.likes-e.likes,price:(e,n)=>e.price-n.price,fresh:(e,n)=>e.minutesAgo-n.minutesAgo,tall:(e,n)=>n.height-e.height},Rr={likes:"点赞数 高→低",price:"价格 低→高",fresh:"发布时间 新→旧",tall:"高度 高→低"},xb={slug:"sort",title:"Sort 插件",group:"plugin",plugin:"SortPlugin",intro:"四种排序切换，卡片整体重排 —— 顺序变了而不是重新请求。",why:"「按热度 / 价格 / 最新」这类前端可解的排序，交给插件比让后端多个接口省事；但数据量大时还是应该由后端排。",plugs:[{fn:"createSortPlugin",cfg:"comparator: (a, b) => b.likes - a.likes",why:"在过滤之后、分页之前重排 items（priority 30）"}],props:["sortComparator={comparator}","columns={4}","containerStyle={{ height: 420 }}"],note:"优先读 props.sortComparator：所以页面切换排序方式时不用重建组件。comparator 必须是纯函数，且不能依赖 items 顺序（否则排序结果不稳定）。",controls:[{key:"sortBy",label:"排序方式",kind:"select",init:"likes",options:[{label:Rr.likes,value:"likes"},{label:Rr.price,value:"price"},{label:Rr.fresh,value:"fresh"},{label:Rr.tall,value:"tall"}]}]},wb=q({count:32,seed:3601,commerce:!0,variant:"product",instrument:!0,pluginKeys:[],plugins:()=>[xf({comparator:hl.likes})],coreProps:e=>({columns:4,gap:12,sortComparator:hl[String(e.cfg.sortBy)]??hl.likes,scrollToTopOnSortChange:!1}),chrome:e=>f.jsxs("p",{className:"stage-tip",children:["当前 ",f.jsx("b",{children:Rr[String(e.cfg.sortBy)]})," · 首项应是「",String(e.cfg.sortBy)," 最靠前」的那张"]})}),Sb=Object.freeze(Object.defineProperty({__proto__:null,default:wb,meta:xb},Symbol.toStringTag,{value:"Module"})),bb={slug:"search",title:"Search 插件",group:"plugin",plugin:"SearchPlugin",intro:"边打字边过滤，输入框不失焦、滚动不乱跳。",why:"字段有限的本地搜索（标题、作者、标签）用插件就够；需要模糊匹配、拼音、分词时应该后端做。",plugs:[{fn:"createSearchPlugin",cfg:'fields: ["title", "author"]',why:"只扫指定字段，避免把 undefined 也扫一遍（priority 20，在排序之后、分页之前）"}],props:["searchQuery={query}","columns={3}","containerStyle={{ height: 420 }}"],note:"fields 不给会扫全部可枚举字段，容易误命中。scrollToTop 默认关，搜索后保留滚动位置反而更自然时别打开。"},kb=q({count:36,seed:3701,instrument:!0,pluginKeys:[],plugins:()=>[ya({fields:["title","author"]})],coreProps:e=>({columns:3,gap:12,searchQuery:String(e.cfg.query??""),scrollToTopOnSearchChange:!1}),chrome:e=>{const n=String(e.cfg.query??"").trim().toLowerCase(),t=n?e.items.filter(r=>r.title.toLowerCase().includes(n)||r.author.toLowerCase().includes(n)).length:e.items.length;return f.jsxs("div",{className:"stage-search",children:[f.jsx("input",{type:"search",placeholder:"搜标题或作者，如「咖啡」「林一白」",value:String(e.cfg.query??""),onChange:r=>e.setCfg("query",r.target.value)}),f.jsxs("span",{children:["命中 ",f.jsx("b",{children:t})," / ",e.items.length," 项",n?`（query="${n}"）`:""]})]})}}),Pb=Object.freeze(Object.defineProperty({__proto__:null,default:kb,meta:bb},Symbol.toStringTag,{value:"Module"})),cc=_f({showOverlay:!0}),Cb={slug:"click-analytics",title:"ClickAnalytics 插件",group:"plugin",plugin:"ClickAnalyticsPlugin",intro:"点卡片，角上的计数 +1，日志同时记一条；「导出 JSON」把内存计数吐出来。",why:"「哪几张最常被点」这类轻量埋点，用插件比在 renderItem 里到处加 onClick 干净，也不会漏掉没渲染的路径。",plugs:[{fn:"createClickAnalyticsPlugin",cfg:"showOverlay: true, log: false",why:"订阅 onItemClick 累加计数并广播事件，角标只是可视化的开关"}],props:["columns={3}","containerStyle={{ height: 420 }}","onItemClick={(i, item) => track(item.id)}"],note:"showOverlay 生产环境应关掉（默认就是 false）。真实上报在 bus 上订阅 analytics:click —— 页面侧拿不到 bus 时，可以用 onItemClick 走自己的埋点函数，或者像右上角那样定时取 getStats() 批量上报（计数只在内存里，刷新即清零）。"},_b=q({count:20,seed:3801,instrument:!0,plugins:()=>[cc],coreProps:e=>({columns:3,gap:12,onItemClick:(n,t)=>e.log(`点击 #${n} · ${t.title}（bus 上同时广播 analytics:click）`)}),chrome:e=>f.jsxs("div",{className:"stage-stats",children:[f.jsx("p",{className:"stage-tip",children:"点几张卡：右上角数字是插件自己的计数"}),f.jsx("button",{type:"button",onClick:()=>{var t;const n=cc.getStats();e.log(`getStats() → ${JSON.stringify(n)}`),(t=navigator.clipboard)==null||t.writeText(JSON.stringify(n,null,2)).catch(()=>{})},children:"导出 JSON"})]})}),Tb=Object.freeze(Object.defineProperty({__proto__:null,default:_b,meta:Cb},Symbol.toStringTag,{value:"Module"})),Rb={slug:"bookmark",title:"Bookmark 插件",group:"plugin",plugin:"BookmarkPlugin",intro:"滚到中间按 b，再滚别处按 r —— 回到刚才那一屏。",why:"长信息流里「刚才那条不错，等下回来看」，比让用户翻历史记录便宜得多。",plugs:[{fn:"createBookmarkPlugin",cfg:'storageKey: "demo-bookmark", scrollBehavior: "smooth"',why:"键盘监听 + localStorage，页面不用为「记位置」写任何逻辑"}],props:["columns={3}","containerStyle={{ height: 420 }}"],note:"记的是 scrollTop 绝对值，不是某一项：数据顺序变了书签就偏了。要「记住这条内容」请按 id 记（用 ScrollAnchor 那套）。"},Mb=q({count:60,seed:3901,instrument:!0,plugins:()=>[Hf({storageKey:"demo-bookmark",scrollBehavior:"smooth"})],coreProps:()=>({columns:3,gap:12}),chrome:()=>f.jsxs(f.Fragment,{children:[f.jsx(gv,{items:[["b","记住当前位置"],["r","跳回书签位置"]]}),f.jsx("p",{className:"stage-tip",children:"先滚到中间，按 b；再滚到别处，按 r"})]})}),Ib=Object.freeze(Object.defineProperty({__proto__:null,default:Mb,meta:Rb},Symbol.toStringTag,{value:"Module"})),$b={slug:"url-sync",title:"URLSync 插件",group:"plugin",plugin:"URLSyncPlugin",intro:"条件写进 URL，刷新 / 分享都能复现同一屏。",why:"带筛选的后台列表、搜索结果页：一旦用户按了 F5 或把链接发给别人，条件不该丢。",plugs:[{fn:"createURLSyncPlugin",cfg:'mode: "search", keys: ["searchQuery"]',why:"把 props 上的 searchQuery 写进 URL，并在挂载时广播 URL 里的值"},{fn:"createSearchPlugin",cfg:'fields: ["title", "author"]',why:"URLSync 只负责搬运条件，真正过滤要靠搜索插件"}],props:["searchQuery={query}","columns={3}","containerStyle={{ height: 420 }}"],note:"keys 里必须是内核 props 上真实存在的键（searchQuery），写成 query 就永远写不进 URL。刷新页面后控件值会从 URL 回填，相当于「分享出去的那一屏」。"},Eb=q({count:24,seed:4001,instrument:!0,pluginKeys:[],plugins:()=>[Gf({mode:"search",keys:["searchQuery"]}),ya({fields:["title","author"]})],coreProps:e=>({columns:3,gap:12,searchQuery:String(e.cfg.query??""),scrollToTopOnSearchChange:!1}),effect:e=>{const n=new URLSearchParams(window.location.search).get("searchQuery");n&&(e.setCfg("query",n),e.log(`从 URL 回填 searchQuery="${n}"`))},chrome:e=>f.jsxs("div",{className:"stage-search",children:[f.jsx("input",{type:"search",placeholder:"输入关键词，地址栏会跟着变",value:String(e.cfg.query??""),onChange:n=>e.setCfg("query",n.target.value)}),f.jsx("code",{className:"stage-url",children:window.location.search||"（地址栏还没有参数）"})]})}),Nb=Object.freeze(Object.defineProperty({__proto__:null,default:Eb,meta:$b},Symbol.toStringTag,{value:"Module"})),Vo="demo-waterfall-state",jb={slug:"state-persistence",title:"StatePersistence 插件",group:"plugin",plugin:"StatePersistencePlugin",intro:"滚到哪、第几页，都记在本地；再打开接着看。",why:"详情页返回列表、刷新后回到原位置 —— 这类「像原生 App」的体验，靠它一行装配。",plugs:[{fn:"createStatePersistencePlugin",cfg:'storageKey: "demo-waterfall-state", persistScroll: true, persistKeys: ["pageIndex"]',why:"只注入一次（不是每次渲染都覆盖），避免和用户当前操作打架"}],props:["columns={3}","containerStyle={{ height: 420 }}"],note:"只在挂载时注入一次：所以它不会把用户后来的滚动「拽回去」。跨标签页同步不在它职责内（要自己听 storage 事件）。"};function Lb(){const[e,n]=h.useState(()=>localStorage.getItem(Vo)??""),t=h.useCallback(()=>n(localStorage.getItem(Vo)??""),[]),r=h.useCallback(()=>{localStorage.removeItem(Vo),n("")},[]);return f.jsxs("div",{className:"stage-storage",children:[f.jsx("code",{children:e||"（还没有存档 —— 先滚一下列表）"}),f.jsxs("span",{children:[f.jsx("button",{type:"button",onClick:t,children:"刷新读数"}),f.jsx("button",{type:"button",onClick:r,children:"清除存档"})]})]})}const Ob=q({count:50,seed:4101,instrument:!0,plugins:()=>[Bf({storageKey:Vo,persistScroll:!0,persistKeys:["pageIndex"]})],coreProps:()=>({columns:3,gap:12}),chrome:()=>f.jsxs(f.Fragment,{children:[f.jsx("p",{className:"stage-tip",children:"滚到中间 → 切到「总览」再切回来，位置会被记住"}),f.jsx(Lb,{})]})}),Db=Object.freeze(Object.defineProperty({__proto__:null,default:Ob,meta:jb},Symbol.toStringTag,{value:"Module"})),zb={slug:"grouping",title:"Grouping 插件",group:"plugin",plugin:"GroupingPlugin",intro:"按标签分组，右下角浮层列出每组项数。",why:"壁纸墙、书签墙要「按分类看」，或要配合吸顶标题（下一页）—— 分组结果本身不是视觉，是给别的插件用的数据。",plugs:[{fn:"createGroupingPlugin",cfg:"groupBy: (item) => item.tag, showOverlay: true",why:"把 GROUPS（Map<组键, 索引数组>）写进 sharedData，供吸顶标题等插件消费"}],props:["columns={4}","containerStyle={{ height: 420 }}"],note:"分组只算索引，不改变排列顺序 —— 想「同组连在一起」得自己按组重排数据再传进来（或用 SortPlugin）。",controls:[{key:"overlay",label:"显示分组浮层",kind:"switch",init:!0}]},Ab=q({count:32,seed:4201,instrument:!0,plugins:e=>[va({groupBy:n=>n.tag,showOverlay:!!e.cfg.overlay})],coreProps:()=>({columns:4,gap:10}),chrome:e=>{const n=new Map;return e.items.forEach(t=>n.set(t.tag,(n.get(t.tag)??0)+1)),f.jsxs("p",{className:"stage-tip",children:[n.size," 组：",[...n.entries()].sort((t,r)=>r[1]-t[1]).map(([t,r])=>`${t} ${r}`).join(" · ")]})}}),Wb=Object.freeze(Object.defineProperty({__proto__:null,default:Ab,meta:zb},Symbol.toStringTag,{value:"Module"})),Hb={slug:"sticky-header",title:"StickyHeader 插件",group:"plugin",plugin:"StickyHeaderPlugin",intro:"滚动时顶部浮着当前分组标题。",why:"分类壁纸墙、按频道分的视频列表：滚着滚着忘了自己在哪个分类里。",plugs:[{fn:"createStickyHeaderPlugin",cfg:'title: "当前分组", showHint: true',why:"在滚动容器内渲染 sticky 标题条，靠 renderOverlay 而不是改版式"},{fn:"createGroupingPlugin",cfg:"groupBy: (item) => item.tag",why:"标题条要读 GROUPS 的首组名，没有分组插件它只能显示兜底文案"}],props:["columns={4}","containerStyle={{ height: 420 }}"],note:"只跟首组。真要做「跟随当前组」，插件需要订阅 grouping:change，并在 onScroll 里用 visibleRange 反查当前组 —— 这一页故意不藏这个限制。"},Fb=q({count:40,seed:4301,instrument:!0,plugins:()=>[Af({title:"当前分组",showHint:!0}),va({groupBy:e=>e.tag})],coreProps:()=>({columns:4,gap:10}),chrome:()=>f.jsx("p",{className:"stage-tip",children:"向下滚：标题条会贴在瀑布流容器顶部"})}),Bb=Object.freeze(Object.defineProperty({__proto__:null,default:Fb,meta:Hb},Symbol.toStringTag,{value:"Module"})),Ub={slug:"scroll-anchor",title:"ScrollAnchor 插件",group:"plugin",plugin:"ScrollAnchorPlugin",intro:"点标签跳到对应那篇 —— 走 bus 事件，不是直接调 ref。",why:"目录、锚点导航、站内搜索定位：跳转逻辑应该在插件里，页面只负责「发一个 id 出去」。",plugs:[{fn:"createScrollAnchorPlugin",cfg:"getAnchorId: (item) => item.id",why:"按 id 反查索引并调 context.scrollToItem，落点由插件算"},{fn:"createAnchorBridgePlugin",why:"本页内联的自定义插件：window 上的 wf:anchor 事件 → bus.emit('anchor:scrollToId')",local:!0}],props:["columns={3}","containerStyle={{ height: 420 }}"],note:"1.x 里这类插件会「自己造一个 bus 挂在 window 上」，其实是同一个问题的不同解法。桥接插件顺带示范了 onMount 返回清理函数 —— 旧版 withPlugins 从不执行它，监听会泄漏。"};function Gb(){return{name:"AnchorBridgePlugin",enabled:!0,hooks:{onMount:e=>{const n=t=>{var o;const r=(o=t.detail)==null?void 0:o.id;r&&e.bus.emit("anchor:scrollToId",{id:r})};return window.addEventListener("wf:anchor",n),()=>window.removeEventListener("wf:anchor",n)}}}}const Vb=q({count:30,seed:4401,instrument:!0,plugins:()=>[Ef({getAnchorId:e=>e.id}),Gb()],coreProps:()=>({columns:3,gap:12}),chrome:e=>f.jsxs("div",{className:"stage-anchors",children:[f.jsx("span",{children:"跳到第"}),[0,6,12,18,24].map(n=>f.jsxs("button",{type:"button",onClick:()=>{const t=e.items[n];t&&(window.dispatchEvent(new CustomEvent("wf:anchor",{detail:{id:t.id}})),e.log(`dispatch wf:anchor { id: "${t.id}" } → 插件转成 bus → scrollToItem(${n})`))},children:["#",n," 项"]},n)),f.jsx("span",{className:"muted",children:"（走 window 事件 → bus → 插件）"})]})}),Kb=Object.freeze(Object.defineProperty({__proto__:null,default:Vb,meta:Ub},Symbol.toStringTag,{value:"Module"}));function Qb(e,n,t){const r=e.slice(),[o]=r.splice(n,1);return r.splice(t,0,o),r}const Yb={slug:"drag-reorder",title:"DragReorder 插件",group:"plugin",plugin:"DragReorderPlugin",intro:"拖一张卡到别的位置，松手后数组真的变了。",why:"书签墙、看板、排序自定义：用户直接拖比「上移/下移」按钮直观得多。",plugs:[{fn:"createDragReorderPlugin",cfg:"showHandle: true, onReorder: (from, to) => setItems((prev) => move(prev, from, to))",why:"鼠标走 HTML5 draggable、触屏走长按 + pointer，把起止索引交回来；数据变更完全由页面掌控"}],props:["columns={3}","containerStyle={{ height: 420 }}"],note:"showHandle 只是「虚线手柄」，接真实版式时关掉。插件不写 localStorage 也不调接口 —— 落库要自己在 onReorder 里做。鼠标走原生 HTML5 拖拽；触屏上 `draggable` 根本不触发，所以另有 pointer 路径（长按 180ms 进入拖拽，可用 touchHoldMs 调）。"},qb=q({count:18,seed:4501,instrument:!0,plugins:e=>[If({showHandle:!0,onReorder:(n,t,r)=>{e.setItems(o=>Qb(o,n,t)),e.log(`拖拽 #${n} → #${t}（${(r==null?void 0:r.title)??"未知项"}），数组已重排`)}})],coreProps:()=>({columns:3,gap:12}),chrome:()=>f.jsx("p",{className:"stage-tip",children:"鼠标：拖卡片右上角手柄 · 触屏：长按卡片 180ms 后拖动 —— 松手后看位置与顺序变化"})}),Xb=Object.freeze(Object.defineProperty({__proto__:null,default:qb,meta:Yb},Symbol.toStringTag,{value:"Module"})),Jb={slug:"a11y",title:"A11y 插件",group:"plugin",plugin:"A11yPlugin",intro:"容器 role=list、项 role=listitem，一键读出来验证。",why:"瀑布流本质是列表，但 div 堆出来的结构对读屏软件等于不存在。这个插件把语义补齐，成本极低。",plugs:[{fn:"createA11yPlugin",cfg:'containerRole: "list", itemRole: "listitem", containerLabel: "示例卡片列表", enableTabIndex: false',why:"在 onMount / onLayoutComplete 里写语义属性（不是渲染期副作用），项用 renderItemWrapper 包一层"}],props:["columns={3}","containerStyle={{ height: 420 }}"],note:"enableTabIndex 打开后每张卡都能 Tab 到，键盘可达但 Tab 会很累 —— 除非卡片真的可操作，否则保持关闭，用 roving tabindex 更好。"},Zb=q({count:16,seed:4601,instrument:!0,plugins:()=>[Of({containerRole:"list",itemRole:"listitem",containerLabel:"示例卡片列表",enableTabIndex:!1})],coreProps:()=>({columns:3,gap:12}),chrome:e=>f.jsxs("div",{className:"stage-a11y",children:[f.jsx("button",{type:"button",onClick:()=>{var r;const n=(r=e.ref.current)==null?void 0:r.getContainer();if(!n){e.log("容器还没挂载","warn");return}const t=n.querySelector("[data-index]");e.log(`容器 role="${n.getAttribute("role")??"无"}" aria-label="${n.getAttribute("aria-label")??"无"}"`),e.log(`首项 role="${(t==null?void 0:t.getAttribute("role"))??"无"}" tabIndex="${(t==null?void 0:t.getAttribute("tabindex"))??"无"}"`)},children:"检查 DOM 属性"}),f.jsx("span",{className:"muted",children:"结果写到右栏日志"})]})}),ek=Object.freeze(Object.defineProperty({__proto__:null,default:Zb,meta:Jb},Symbol.toStringTag,{value:"Module"}));function nk(){return typeof window<"u"&&window.matchMedia("(prefers-reduced-motion: reduce)").matches}function tk(){const[,e]=Tt.useState(0),n=nk();return f.jsxs("div",{className:"stage-stats",children:[f.jsxs("p",{className:"stage-tip",children:["系统偏好 reduce motion：",f.jsx("b",{children:n?"是 → 过渡已清掉":"否 → 过渡生效（240ms）"})]}),f.jsx("button",{type:"button",onClick:()=>e(t=>t+1),children:"重新检测"})]})}const rk={slug:"reduced-motion",title:"ReducedMotion 插件",group:"plugin",plugin:"ReducedMotionPlugin",intro:"系统开了「减少动态效果」，过渡与 transform 自动关掉。",why:"前庭功能障碍用户会被大幅位移的动画伤到。这不是可选项 —— 尊重系统偏好是基本无障碍要求。",plugs:[{fn:"createReducedMotionPlugin",cfg:"disableTransform: true, removeTransitions: true",why:"读 matchMedia，命中后关掉过渡与 transform 定位"},{fn:"createTransitionPlugin",cfg:"duration: 240",why:"装在这里是为了被 ReduceMotion 关掉 —— 用来验证它真的生效"}],props:["columns={3}","containerStyle={{ height: 420 }}"],note:"两个插件同开不是冲突：ReducedMotion 的 priority(65) 更高，会先执行并清掉过渡。验证方法：改系统设置，或在 DevTools 里模拟 prefers-reduced-motion；运行中切换会即时生效（插件监听 matchMedia 的 change），但定位方式要等下一次重渲染才切过来。"},ok=q({count:26,seed:4701,instrument:!0,plugins:()=>[mf({disableTransform:!0,removeTransitions:!0}),ha({duration:240})],coreProps:()=>({columns:3,gap:12}),chrome:()=>f.jsx(tk,{})}),ik=Object.freeze(Object.defineProperty({__proto__:null,default:ok,meta:rk},Symbol.toStringTag,{value:"Module"})),lk={slug:"transition",title:"Transition 插件",group:"plugin",plugin:"TransitionPlugin",intro:"打乱顺序，看卡片是滑过去还是瞬移。",why:"筛选、排序、拖拽后布局会大幅变化，没有过渡会显得「闪一下」；加上 200–300ms 就顺了。",plugs:[{fn:"createTransitionPlugin",cfg:'duration: {{duration}}, easing: "cubic-bezier(.22,.61,.36,1)"',why:"只加 CSS 过渡（transform / opacity），不参与布局计算"}],props:["columns={3}","containerStyle={{ height: 420 }}"],note:"把 duration 拖到 0 就等于关掉。过渡期间 item 的 transform 是中间值，用 transform 读位置的工具会读到中间态。",controls:[{key:"duration",label:"duration（ms）",kind:"number",init:260,min:0,max:800,step:20}]},sk=q({count:24,seed:4801,instrument:!0,plugins:e=>[ha({duration:Number(e.cfg.duration)})],coreProps:()=>({columns:3,gap:12}),chrome:e=>f.jsxs("div",{className:"stage-anchors",children:[f.jsx("button",{type:"button",onClick:()=>{e.setItems(n=>{const t=n.slice();for(let r=t.length-1;r>0;r--){const o=Math.floor(Math.random()*(r+1));[t[r],t[o]]=[t[o],t[r]]}return t}),e.log(`打乱顺序（过渡 ${Number(e.cfg.duration)}ms）`)},children:"打乱顺序"}),f.jsx("span",{className:"muted",children:"duraton 拖到 0 再点一次，就是瞬移"})]})}),ak=Object.freeze(Object.defineProperty({__proto__:null,default:sk,meta:lk},Symbol.toStringTag,{value:"Module"})),uk={slug:"pin-item",title:"PinItem 插件",group:"plugin",plugin:"PinItemPlugin",intro:"第 0、1 项钉在第 1 列顶部，普通项自动让位。",why:"「置顶公告 + 信息流」「推荐位固定在第一列」这类需求，用插件比把置顶内容塞进数据里干净。",plugs:[{fn:"createPinItemPlugin",cfg:"pinnedIndices: [0, 1], column: {{column}}",why:"在 calculateItemPosition 里把置顶项固定到指定列顶部，并下推同列普通项"}],props:["columns={3}","containerStyle={{ height: 420 }}"],note:"置顶项索引要小（0..n）：如果置顶的索引大于该列已排好的项，只会把后续项往下推、已布局的不回退，视觉上会重叠。同一列多条置顶按数组顺序纵向下堆。",controls:[{key:"column",label:"钉到第几列（0 基）",kind:"number",init:0,min:0,max:2}]},ck=q({count:22,seed:4901,instrument:!0,plugins:e=>[af({pinnedIndices:[0,1],column:Number(e.cfg.column)})],coreProps:()=>({columns:3,gap:12}),decorate:(e,n,t)=>({pinned:[0,1].includes(t)&&Number(e.cfg.column)>=0}),chrome:e=>f.jsxs("p",{className:"stage-tip",children:["置顶项：",f.jsx("b",{children:"#0 #1"})," · 钉在第 ",f.jsx("b",{children:Number(e.cfg.column)+1})," 列（角标写着「置顶」）"]})}),dk=Object.freeze(Object.defineProperty({__proto__:null,default:ck,meta:uk},Symbol.toStringTag,{value:"Module"})),dc=Rf({showOverlay:!0}),pk={slug:"heatmap-analytics",title:"HeatmapAnalytics 插件",group:"plugin",plugin:"HeatmapAnalyticsPlugin",intro:"滚一遍，顶部汇总条告诉你曝光了多少次、点了多少下。",why:"内容分发要看「哪些真的被看到了」，不是「哪些被加载了」。曝光埋点交给插件，业务侧只消费汇总。",plugs:[{fn:"createHeatmapAnalyticsPlugin",cfg:"showOverlay: true",why:"在项进入视口时累加曝光、点击时累加点击，并在 onLayoutComplete 补一次首屏统计"}],props:["columns={4}","containerStyle={{ height: 420 }}"],note:"首屏曝光靠 onLayoutComplete 补一次，否则第一帧显示 0。真实上报要自己做去重与批次（插件只负责计数）——「导出 JSON」拿到的就是 `getStats()` 的形状：总曝光、总点击、每项明细。"},fk=q({count:36,seed:5001,instrument:!0,plugins:()=>[dc],coreProps:e=>{let n=0;return{columns:4,gap:10,onItemEnterViewport:t=>{n+=1,n<=8&&e.log(`曝光 #${t}（Core 的可见事件，插件也在数）`,"info")}}},chrome:e=>f.jsxs("div",{className:"stage-stats",children:[f.jsx("p",{className:"stage-tip",children:"滚一遍：顶部条是开关，卡片角上是单卡曝光/点击次数"}),f.jsx("button",{type:"button",onClick:()=>{var t;const n=dc.getStats();e.log(`getStats() → 曝光 ${n.totalViews} / 点击 ${n.totalClicks} / 有数据项 ${n.items.length}`),(t=navigator.clipboard)==null||t.writeText(JSON.stringify(n,null,2)).catch(()=>{})},children:"导出 JSON"})]})}),mk=Object.freeze(Object.defineProperty({__proto__:null,default:fk,meta:pk},Symbol.toStringTag,{value:"Module"})),gk=`/**
 * 01 · 基础示例
 *
 * 不装任何插件：只给 items / renderItem / containerStyle，看 Core 自己能做到什么。
 * 拖列数与间距，下面「最小装配」的代码会跟着变 —— 这就是这一页唯一要做的事。
 */
import { createFeedStage } from "./stages/feed";
import type { DemoMeta } from "./types";

export const meta: DemoMeta = {
  slug: "basic",
  title: "基础示例",
  group: "basic",
  intro: "最省事的用法：一批高度不等的卡片，交给 Core 排。",
  why: "刚接入时先用这一页确认两件事 —— 容器给了高度、卡片真的按 item.height 渲染。这两条不对，后面装什么插件都白搭。",
  plugs: [],
  props: ["columns={{{columns}}}", "gap={{{gap}}}", "containerStyle={{ height: 420 }}"],
  note: "containerStyle 必须给高度。不给高度 = 没有滚动上下文，Core 量不出视口，卡片会全部堆在顶部。",
  controls: [
    { key: "columns", label: "列数", kind: "number", init: 3, min: 1, max: 6, hint: "props.columns" },
    { key: "gap", label: "间距", kind: "number", init: 16, min: 0, max: 32, hint: "props.gap，行/列通用" },
  ],
};

export default createFeedStage({
  count: 40,
  seed: 1201,
  plugins: () => [],
  instrument: true,
  coreProps: (api) => ({
    columns: Number(api.cfg.columns),
    gap: Number(api.cfg.gap),
  }),
});
`,hk=`/**
 * 02 · 自定义列数
 *
 * 固定列数靠 \`props.columns\`，列宽由 Core 反算：\`(容器宽 − gap×(n−1)) / n\`。
 * 舞台上直接把当前列宽读出来，比任何文字解释都直观。
 */
import { createFeedStage } from "./stages/feed";
import type { DemoMeta } from "./types";

export const meta: DemoMeta = {
  slug: "columns",
  title: "自定义列数",
  group: "basic",
  intro: "写死列数，列宽自己算 —— 拖到 6 列看列宽怎么缩。",
  why: "后台表格、看板、固定版式的商品墙通常就是固定列数，不需要按容器自适应。",
  plugs: [],
  props: ["columns={{{columns}}}", "gap={{{gap}}}", "containerStyle={{ height: 420 }}"],
  note: "写了 columns 又被 AutoColumnPlugin / ResponsiveColumnsPlugin 覆盖是常见困惑：那两个插件在 calculateColumns 钩子里返回列数，优先级高于 props。",
  controls: [
    { key: "columns", label: "列数", kind: "number", init: 4, min: 1, max: 6 },
    { key: "gap", label: "间距", kind: "number", init: 12, min: 0, max: 32 },
  ],
};

export default createFeedStage({
  count: 36,
  seed: 1401,
  plugins: () => [],
  instrument: true,
  coreProps: (api) => ({
    columns: Number(api.cfg.columns),
    gap: Number(api.cfg.gap),
  }),
  chrome: (api) => (
    <p className="stage-tip">
      列宽 = (容器宽 − 间距×{Number(api.cfg.columns) - 1}) ÷ {Number(api.cfg.columns)} ·
      当前 <b>{api.meter.columns}</b> 列 / 总高 <b>{Math.round(api.meter.totalHeight)}</b>px
    </p>
  ),
});
`,yk=`/**
 * 03 · 自定义间距
 *
 * \`gap\` 是简写，\`rowGap\` / \`columnGap\` 各自覆盖它。
 * 这一页把「覆盖」做成可操作的一步：关掉「拆开行/列间距」，gap 立刻接管；
 * 打开后 gap 就废了 —— 同时在的 rowGap / columnGap 说了算。下面的装配代码也跟着换行。
 */
import { createFeedStage } from "./stages/feed";
import type { DemoMeta } from "./types";

export const meta: DemoMeta = {
  slug: "gap",
  title: "自定义间距",
  group: "basic",
  intro: "gap 是简写，rowGap / columnGap 分别覆盖它 —— 用开关切一次就记住了。",
  why: "图片流要更紧的列间距、更松的行间距，就得拆开写；只想整体松紧就用 gap。",
  plugs: [],
  props: [
    "columns={3}",
    { text: "gap={{{gap}}}", when: (c) => !c.split },
    { text: "rowGap={{{rowGap}}}", when: (c) => Boolean(c.split) },
    { text: "columnGap={{{columnGap}}}", when: (c) => Boolean(c.split) },
    "containerStyle={{ height: 420 }}",
  ],
  note: "间距参与布局计算：改 gap 会改变列宽与每列落点，不是 CSS margin。三个同时给的时候 gap 只是「没被覆盖的那部分」的兜底。想让间距随窗口换档用 GapPlugin（下一页）。",
  controls: [
    { key: "split", label: "拆开行/列间距", kind: "switch", init: true, hint: "关掉 → 只留 gap，它立刻生效" },
    { key: "gap", label: "gap（简写）", kind: "number", init: 8, min: 0, max: 32, when: (c) => !c.split },
    { key: "rowGap", label: "rowGap", kind: "number", init: 24, min: 0, max: 40, when: (c) => Boolean(c.split) },
    { key: "columnGap", label: "columnGap", kind: "number", init: 8, min: 0, max: 40, when: (c) => Boolean(c.split) },
  ],
};

export default createFeedStage({
  count: 30,
  seed: 1501,
  plugins: () => [],
  coreProps: (api) => ({
    columns: 3,
    ...(api.cfg.split
      ? { rowGap: Number(api.cfg.rowGap), columnGap: Number(api.cfg.columnGap) }
      : { gap: Number(api.cfg.gap) }),
  }),
  chrome: (api) => (
    <p className="stage-tip">
      {api.cfg.split ? (
        <>
          rowGap <b>{Number(api.cfg.rowGap)}</b> · columnGap <b>{Number(api.cfg.columnGap)}</b> ——
          <b> gap 被覆盖，此刻是空转的</b>
        </>
      ) : (
        <>
          gap <b>{Number(api.cfg.gap)}</b> —— 行列同值，因为没给 rowGap / columnGap
        </>
      )}
    </p>
  ),
});
`,vk=`/**
 * 04 · Ref 方法调用
 *
 * ref 直接指向 Core（插件上下文不通过 ref 暴露），所以这 13 个方法就是「页面能对瀑布流
 * 做的全部操作」。点一遍比读一遍 API 表快，日志里会留下每次调用的返回值。
 */
import React, { useCallback, useState } from "react";
import { createFeedStage, type StageApi } from "./stages/feed";
import { EventLog, type LogLine } from "./panels";
import type { DemoMeta } from "./types";

export const meta: DemoMeta = {
  slug: "ref",
  title: "Ref 方法调用",
  group: "advanced",
  intro: "13 个 ref 方法逐个点一遍，返回值直接写进日志。",
  why: "图片加载完要重排、点导航要跳到某条、滚动位置要复位 —— 这些都不该改数据，而是调 ref。",
  plugs: [],
  props: [
    "ref={ref}",
    "columns={3}",
    "containerStyle={{ height: 420 }}",
    "onItemClick={(i) => ref.current?.scrollToItem(i)}",
  ],
  note: "getAllItemPositions 返回的是实时 Map，不是渲染快照；虚拟化开启后，未挂载项仍保留测量值（getItemElement 会返回 null）。",
};

type Cmd = {
  key: string;
  label: string;
  run: (api: StageApi) => string | Promise<string>;
  needsIndex?: boolean;
};

const COMMANDS: Cmd[] = [
  { key: "relayout", label: "relayout()", run: (a) => (a.ref.current?.relayout(), "清空高度缓存并重排") },
  { key: "top", label: "scrollToTop()", run: (a) => (a.ref.current?.scrollToTop({ behavior: "smooth" }), "回顶") },
  { key: "bottom", label: "scrollToBottom()", run: (a) => (a.ref.current?.scrollToBottom({ behavior: "smooth" }), "到底") },
  {
    key: "item",
    label: "scrollToItem(i)",
    needsIndex: true,
    run: () => "见下方输入框",
  },
  {
    key: "pos",
    label: "getItemPosition(i)",
    needsIndex: true,
    run: () => "见下方输入框",
  },
  {
    key: "allpos",
    label: "getAllItemPositions()",
    run: (a) => {
      const map = a.ref.current?.getAllItemPositions();
      if (!map) return "ref 还没就绪";
      const first = map.get(0);
      return \`共 \${map.size} 项；#0 = { x: \${first?.x ?? "-"}, y: \${first?.y ?? "-"} }\`;
    },
  },
  {
    key: "colh",
    label: "getColumnHeights()",
    run: (a) => {
      const h = a.ref.current?.getColumnHeights() ?? [];
      return \`[\${h.map((n) => Math.round(n)).join(", ")}]\`;
    },
  },
  {
    key: "layout",
    label: "getLayoutInfo()",
    run: (a) => {
      const i = a.ref.current?.getLayoutInfo();
      return i ? \`\${i.columns} 列 · 列宽 \${Math.round(i.columnWidth)} · 总高 \${Math.round(i.totalHeight)}\` : "ref 还没就绪";
    },
  },
  {
    key: "viewport",
    label: "getViewportInfo()",
    run: (a) => {
      const v = a.ref.current?.getViewportInfo();
      return v ? \`scrollTop \${Math.round(v.scrollTop)} · 视口 \${v.clientHeight} · 内容 \${Math.round(v.scrollHeight)}\` : "ref 还没就绪";
    },
  },
  {
    key: "range",
    label: "getVisibleRange()",
    run: (a) => {
      const r = a.ref.current?.getVisibleRange();
      return r ? \`渲染区间 \${r.start} … \${r.end}\` : "ref 还没就绪";
    },
  },
  { key: "force", label: "forceUpdate()", run: (a) => (a.ref.current?.forceUpdate(), "强制重渲染") },
  {
    key: "el",
    label: "getItemElement(0)",
    run: (a) => {
      const el = a.ref.current?.getItemElement(0);
      return el ? \`<div data-index="0"> \${el.offsetWidth}×\${el.offsetHeight}\` : "取不到（可能未挂载）";
    },
  },
  {
    key: "measure",
    label: "measureItem(0)",
    run: async (a) => {
      const r = await a.ref.current?.measureItem(0);
      return r ? \`{ width: \${Math.round(r.width)}, height: \${Math.round(r.height)} }\` : "量不到";
    },
  },
  {
    key: "container",
    label: "getContainer()",
    run: (a) => {
      const el = a.ref.current?.getContainer();
      return el ? \`容器 \${el.clientWidth}×\${el.clientHeight}，scrollHeight \${el.scrollHeight}\` : "ref 还没就绪";
    },
  },
];

function RefConsole({ api }: { api: StageApi }) {
  const [lines, setLines] = useState<LogLine[]>([]);
  const [index, setIndex] = useState(5);

  const push = useCallback((text: string, kind: LogLine["kind"] = "event") => {
    const at = new Date().toLocaleTimeString("zh-CN", { hour12: false });
    setLines((prev) => [{ id: prev.length + 1, at, text, kind }, ...prev].slice(0, 30));
  }, []);

  const run = useCallback(
    async (cmd: Cmd) => {
      const r = api.ref.current;
      if (!r) {
        push("ref.current 为空 —— 舞台还没挂载", "warn");
        return;
      }
      if (cmd.needsIndex) {
        if (cmd.key === "item") {
          r.scrollToItem(index, { behavior: "smooth", block: "start" });
          push(\`scrollToItem(\${index}, { block: "start" })\`);
        } else {
          const p = r.getItemPosition(index);
          push(
            p
              ? \`getItemPosition(\${index}) = { x: \${Math.round(p.x)}, y: \${Math.round(p.y)}, w: \${Math.round(p.width)}, h: \${Math.round(p.height)} }\`
              : \`getItemPosition(\${index}) = null\`
          );
        }
        return;
      }
      push(\`\${cmd.label} → \${await cmd.run(api)}\`);
    },
    [api, index, push]
  );

  return (
    <div className="console">
      <div className="console-head">
        <span>Ref 控制台</span>
        <label className="console-idx">
          index
          <input
            type="number"
            min={0}
            max={api.items.length - 1}
            value={index}
            onChange={(e) => setIndex(Number(e.target.value))}
          />
        </label>
      </div>
      <div className="console-grid">
        {COMMANDS.map((c) => (
          <button key={c.key} type="button" className="console-btn" onClick={() => void run(c)}>
            {c.label}
          </button>
        ))}
      </div>
      <EventLog lines={lines} title="调用记录" empty="点上面任意一个方法" />
    </div>
  );
}

export default createFeedStage({
  count: 36,
  seed: 1701,
  instrument: true,
  plugins: () => [],
  coreProps: (api) => ({
    columns: 3,
    onItemClick: (i) => api.log(\`onItemClick #\${i}（Core 的项点击回调）\`),
  }),
  chrome: (api) => <RefConsole api={api} />,
});
`,xk=`/**\r
 * 05 · 生命周期和事件\r
 *\r
 * 13 个回调全部接上，打到右栏日志里 —— 用来回答「这个钩子到底什么时候触发、参数是什么」。\r
 * 不装插件也能收到这些事件：props 回调先跑，插件钩子链后跑。\r
 *\r
 * 两个必须节流的地方：onScroll 每帧都来、onItemEnterViewport 一次滚动能来几十条。\r
 * 不节流的话日志区会把真正重要的 onLayoutComplete 冲掉。\r
 */\r
import { createFeedStage } from "./stages/feed";\r
import type { DemoMeta } from "./types";\r
\r
export const meta: DemoMeta = {\r
  slug: "lifecycle",\r
  title: "生命周期和事件",\r
  group: "advanced",\r
  intro: "13 个回调接满，滚一下就能看见谁在什么时候触发。",\r
  why: "要在「布局完成」后做点什么（补曝光统计、量真实高度、写埋点），就得知道 onLayout 与 onLayoutComplete 的差别：后者里读 layout 才是新的。",\r
  plugs: [],\r
  props: [\r
    "onMount={() => log('onMount')}",\r
    "onLayoutComplete={() => log('布局完成')}",\r
    "onScroll={(t) => log('scroll ' + t)}",\r
    "onItemEnterViewport={(i) => log('enter #' + i)}",\r
    "onReachBottom={() => log('到底了')}",\r
  ],\r
  note: "onUnmount 只在组件卸载时触发（换页时能在浏览器控制台看到）。视口事件按「可见比例」算，部分可见也会触发一次 enter。",\r
};\r
\r
export default createFeedStage({\r
  count: 40,\r
  seed: 1901,\r
  instrument: true,\r
  plugins: () => [],\r
  coreProps: (api) => {\r
    const { log } = api;\r
    // 滚动与视口回调做本地节流：日志是给人看的，不是给机器记的\r
    let lastScroll = 0;\r
    let enterCount = 0;\r
    return {\r
      columns: 3,\r
      onMount: () => log("onMount · 容器挂载"),\r
      onBeforeLayout: () => {\r
        log("onBeforeLayout · 返回 false 会中断本次布局", "info");\r
        return true;\r
      },\r
      onLayout: () => log("onLayout · 开始算位置", "info"),\r
      onLayoutComplete: () => log("onLayoutComplete · 位置已写入，现在读 layout 是新的"),\r
      onItemMount: (i) => {\r
        if (i < 3) log(\`onItemMount #\${i}\`, "info");\r
      },\r
      onItemUnmount: (i) => {\r
        if (i < 3) log(\`onItemUnmount #\${i}\`, "info");\r
      },\r
      onItemEnterViewport: (i, v) => {\r
        enterCount += 1;\r
        if (enterCount < 40) log(\`onItemEnterViewport #\${i} 可见 \${(v.visibleRatio * 100) | 0}%\`);\r
      },\r
      onItemLeaveViewport: (i) => {\r
        if (enterCount < 40) log(\`onItemLeaveViewport #\${i}\`, "info");\r
      },\r
      onScroll: (top) => {\r
        const now = performance.now();\r
        if (now - lastScroll < 400) return;\r
        lastScroll = now;\r
        log(\`onScroll \${Math.round(top)}\`, "info");\r
      },\r
      onResize: (w, h) => log(\`onResize \${w}×\${h}\`),\r
      onReachBottom: (d) => log(\`onReachBottom 距底 \${Math.round(d)}px\`),\r
      onItemClick: (i) => log(\`onItemClick #\${i}（点卡片试试）\`),\r
    };\r
  },\r
  chrome: () => (\r
    <p className="stage-tip">\r
      滚动、点卡片、拖窗口宽度 —— 三种行为分别触发滚动、点击、尺寸三类事件\r
    </p>\r
  ),\r
});\r
`,wk=`/**
 * 06 · 高级配置
 *
 * 那些「文档里有、但不常用」的 props 放一页演示：padding / useTransform / alignmentMode /
 * throttleDelay / debounceDelay / debug。
 *
 * 其中 useTransform 最值得亲手切一次：关掉后改用 top/left 定位，
 * 肉眼几乎没差别，但块级重排的开销和「能不能直接读 offsetLeft」完全不同。
 */
import { createFeedStage } from "./stages/feed";
import type { DemoMeta } from "./types";

export const meta: DemoMeta = {
  slug: "advanced",
  title: "高级配置",
  group: "advanced",
  intro: "padding、useTransform、alignmentMode、节流防抖、debug —— 一页调完。",
  why: "嵌在带内边距的容器里（padding 要参与布局，不能靠外层 margin）、要给每一项套自定义样式（itemClassName）、或怀疑布局算错要看耗时（debug）时用。",
  plugs: [],
  props: [
    "columns={3}",
    "padding={{{padding}}}",
    "alignmentMode=\\"{{{mode}}}\\"",
    "useTransform={{{useTransform}}}",
    "throttleDelay={{{throttle}}}",
    "debounceDelay={{{debounce}}}",
    "debug={{{debug}}}",
    "containerStyle={{ height: 420 }}",
  ],
  note: "padding 是参与布局计算的（可用宽度 = 容器宽 − 左右 padding），所以它不能当成外层 margin 用。useTransform=false 时项改用 top/left 定位，打印和读 offsetLeft 更直观。",
  controls: [
    { key: "padding", label: "padding", kind: "number", init: 12, min: 0, max: 40 },
    {
      key: "mode",
      label: "alignmentMode",
      kind: "select",
      init: "shortest",
      options: [
        { label: "shortest 最矮列", value: "shortest" },
        { label: "balanced 最少项", value: "balanced" },
        { label: "sequential 轮转", value: "sequential" },
      ],
      hint: "balanced 列高会不齐，但每列张数接近",
    },
    { key: "useTransform", label: "useTransform", kind: "switch", init: true },
    { key: "throttle", label: "throttleDelay", kind: "number", init: 16, min: 0, max: 120, step: 8, nonLayout: true },
    { key: "debounce", label: "debounceDelay", kind: "number", init: 150, min: 0, max: 600, step: 10, nonLayout: true },
    { key: "debug", label: "debug", kind: "switch", init: false, hint: "控制台打印布局耗时" },
  ],
};

export default createFeedStage({
  count: 34,
  seed: 2101,
  plugins: () => [],
  instrument: true,
  coreProps: (api) => ({
    columns: 3,
    padding: Number(api.cfg.padding),
    alignmentMode: String(api.cfg.mode) as "shortest" | "balanced" | "sequential",
    useTransform: Boolean(api.cfg.useTransform),
    throttleDelay: Number(api.cfg.throttle),
    debounceDelay: Number(api.cfg.debounce),
    debug: Boolean(api.cfg.debug),
  }),
  chrome: (api) => (
    <p className="stage-tip">
      定位方式：<b>{api.cfg.useTransform ? "transform" : "top / left"}</b> · 内边距{" "}
      <b>{Number(api.cfg.padding)}</b> · 列数 <b>{api.meter.columns}</b> · 总高{" "}
      <b>{Math.round(api.meter.totalHeight)}</b>px
    </p>
  ),
});
`,Sk=`/**
 * 07 · 响应式列数插件
 *
 * 断点表决定列数：命中哪档用哪档，与容器宽有关、与 window 无关。
 * 拖「模拟容器宽」看列数跳档 —— 这就是嵌在侧栏里也能算对的原因。
 */
import { createResponsiveColumnsPlugin } from "vane-waterfall/custom-plugins";
import { createFeedStage } from "./stages/feed";
import type { DemoMeta } from "./types";

const BREAKPOINTS = {
  sm: { width: 0, columns: 2 },
  md: { width: 560, columns: 3 },
  lg: { width: 800, columns: 4 },
};

export const meta: DemoMeta = {
  slug: "responsive-columns",
  title: "响应式列数",
  group: "plugin",
  plugin: "ResponsiveColumnsPlugin",
  intro: "按断点表切列数：< 560 两列，560 起三列，800 起四列。",
  why: "设计稿给了明确的「平板 3 列 / 桌面 4 列」规范时用断点表；只想要「每列至少多宽」就用 AutoColumn（下一页）。",
  plugs: [
    {
      fn: "createResponsiveColumnsPlugin",
      cfg: "breakpoints: { sm: { width: 0, columns: 2 }, md: { width: 560, columns: 3 }, lg: { width: 800, columns: 4 } }",
      why: "按容器宽度命中最近一档，读的是容器宽不是 window.innerWidth",
    },
  ],
  props: ["columns={2}", "gap={12}", "containerStyle={{ height: 420 }}"],
  note: "与 AutoColumnPlugin 互斥：两个都实现 calculateColumns，同开会交替覆盖，列数看起来会「闪」。",
  controls: [
    { key: "simWidth", label: "模拟容器宽", kind: "number", init: 760, min: 360, max: 1100, step: 20 },
  ],
};

export default createFeedStage({
  count: 28,
  seed: 2301,
  plugins: () => [createResponsiveColumnsPlugin({ breakpoints: BREAKPOINTS })],
  instrument: true,
  coreProps: (api) => ({
    gap: 12,
    containerStyle: { height: "var(--stage-h, 380px)", width: Number(api.cfg.simWidth) },
  }),
  chrome: (api) => {
    const w = Number(api.cfg.simWidth);
    const hit = w >= 800 ? "lg → 4 列" : w >= 560 ? "md → 3 列" : "sm → 2 列";
    return (
      <p className="stage-tip">
        容器宽 <b>{w}</b> · 命中 <b>{hit}</b> · 实际 <b>{api.meter.columns}</b> 列
      </p>
    );
  },
});
`,bk=`/**
 * 08 · 自动列数插件
 *
 * 只给一条规则：「每列至少 minColumnWidth」，列数由 Core 反算。
 * 想验证它跟 window 无关，把模拟宽度拖小 —— 列数会跟着掉，跟浏览器窗口宽度没关系。
 */
import { createAutoColumnPlugin } from "vane-waterfall/custom-plugins";
import { createFeedStage } from "./stages/feed";
import type { DemoMeta } from "./types";

export const meta: DemoMeta = {
  slug: "auto-column",
  title: "自动列数",
  group: "plugin",
  plugin: "AutoColumnPlugin",
  intro: "给一个最小列宽，列数自己算：floor((可用宽 + gap) / (最小列宽 + gap))。",
  why: "版式没有硬性列数要求、只要求「图片别小于 200px」时用它，比写一堆断点省事。",
  plugs: [
    {
      fn: "createAutoColumnPlugin",
      cfg: "minColumnWidth: {{minColumnWidth}}, maxColumns: {{maxColumns}}",
      why: "按最小列宽算列数，容器变宽自动加列、变窄自动减列",
    },
  ],
  props: ["gap={12}", "containerStyle={{ height: 420 }}"],
  note: "算的是容器宽（padding 已扣除）。列数上限用 maxColumns 卡住，否则超宽屏会排出 8 列小图。",
  controls: [
    { key: "minColumnWidth", label: "minColumnWidth", kind: "number", init: 200, min: 120, max: 320, step: 10 },
    { key: "maxColumns", label: "maxColumns", kind: "number", init: 4, min: 2, max: 6 },
    { key: "simWidth", label: "模拟容器宽", kind: "number", init: 900, min: 360, max: 1100, step: 20 },
  ],
};

export default createFeedStage({
  count: 30,
  seed: 2401,
  instrument: true,
  plugins: (api) => [
    createAutoColumnPlugin({
      minColumnWidth: Number(api.cfg.minColumnWidth),
      maxColumns: Number(api.cfg.maxColumns),
    }),
  ],
  coreProps: (api) => ({
    gap: 12,
    containerStyle: { height: "var(--stage-h, 380px)", width: Number(api.cfg.simWidth) },
  }),
  chrome: (api) => (
    <p className="stage-tip">
      最小列宽 <b>{Number(api.cfg.minColumnWidth)}</b> · 容器宽{" "}
      <b>{Number(api.cfg.simWidth)}</b> · 算出 <b>{api.meter.columns}</b> 列（上限{" "}
      {Number(api.cfg.maxColumns)}）
    </p>
  ),
});
`,kk=`/**
 * 09 · 对齐策略插件
 *
 * 三种列分配策略的差别只在高差明显时才看得出来，所以这页故意把卡片高度拉到 120–360。
 * 切到 sequential 就是「按 index 轮转」，位置可预测 —— 看板、泳道类版式要的正是这个。
 */
import { createAlignmentPlugin } from "vane-waterfall/custom-plugins";
import { createFeedStage } from "./stages/feed";
import type { DemoMeta } from "./types";

export const meta: DemoMeta = {
  slug: "alignment",
  title: "对齐策略",
  group: "plugin",
  plugin: "AlignmentPlugin",
  intro: "shortest / balanced / sequential，切一下就能看出列高差在哪。",
  why: "卡片高差大又想让底部别太参差用 shortest（默认）；想每列张数一样用 balanced；位置可预测用 sequential。",
  plugs: [
    {
      fn: "createAlignmentPlugin",
      cfg: 'mode: "{{mode}}"',
      why: "改写 alignmentMode，等价于 Core 的 props.alignmentMode，但可以按环境动态决定",
    },
  ],
  props: ["gap={12}", "containerStyle={{ height: 420 }}"],
  note: "列高相同时三者都取最小索引列（左优先）—— 这是刻意保留的旧行为，别指望 balanced 会把第一张放到「看起来更空」的那列。",
  controls: [
    {
      key: "mode",
      label: "mode",
      kind: "select",
      init: "shortest",
      options: [
        { label: "shortest 最矮列（默认）", value: "shortest" },
        { label: "balanced 项数最少", value: "balanced" },
        { label: "sequential 按序轮转", value: "sequential" },
      ],
    },
  ],
};

export default createFeedStage({
  count: 14,
  seed: 2501,
  heightRange: [120, 360],
  instrument: true,
  plugins: (api) => [
    createAlignmentPlugin({ mode: String(api.cfg.mode) as "shortest" | "balanced" | "sequential" }),
  ],
  coreProps: () => ({ columns: 3, gap: 12 }),
  chrome: (api) => (
    <p className="stage-tip">
      当前策略 <b>{String(api.cfg.mode)}</b> · {api.items.length} 张卡 → 看三列底部是否齐
    </p>
  ),
});
`,Pk=`/**
 * 10 · 固定高度插件
 *
 * 把每项高度统一成固定值 —— 视频封面墙、商品网格要的就是等高。
 *
 * 这一页也是「坑位现场」：插件改的是 \`item.height\` 字段，Core 量的是 DOM 的 offsetHeight。
 * 卡片必须真的按 height 渲染（这里的 FeedCard 传了 fixed），否则插件等于没开。
 */
import { createFixedHeightPlugin } from "vane-waterfall/custom-plugins";
import { createFeedStage } from "./stages/feed";
import type { DemoMeta } from "./types";

export const meta: DemoMeta = {
  slug: "fixed-height",
  title: "固定高度",
  group: "plugin",
  plugin: "FixedHeightPlugin",
  intro: "统一每项高度，从错落流变成规整网格。",
  why: "视频封面墙、图库缩略网格这类要求「整行齐平」的版式，靠这个插件而不是给每张图写死 CSS。",
  plugs: [
    {
      fn: "createFixedHeightPlugin",
      cfg: "itemHeight: {{itemHeight}}",
      why: "改写 item.height，缩略图与文案一起放进固定高度的盒子里",
    },
  ],
  props: ["columns={3}", "gap={12}", "containerStyle={{ height: 420 }}"],
  note: "插件只改数据字段，不碰 DOM。卡片组件必须把 item.height 用上（示例里的 FeedCard 传 fixed 就是干这个），否则看起来「插件没生效」。",
  controls: [
    { key: "itemHeight", label: "itemHeight", kind: "number", init: 176, min: 100, max: 260, step: 4 },
  ],
};

export default createFeedStage({
  count: 18,
  seed: 2601,
  fixed: true,
  variant: "video",
  instrument: true,
  plugins: (api) => [createFixedHeightPlugin({ itemHeight: Number(api.cfg.itemHeight) })],
  coreProps: () => ({ columns: 3, gap: 12 }),
  chrome: (api) => (
    <p className="stage-tip">
      统一高度 <b>{Number(api.cfg.itemHeight)}</b>px · 行高应完全一致（总高{" "}
      {Math.round(api.meter.totalHeight)}px）
    </p>
  ),
});
`,Ck=`/**
 * 11 · 间距插件
 *
 * 和 03（Core 的 gap props）的区别：插件带 \`responsive\`，能按窗口宽度自动换档。
 * 把浏览器窗口拉窄，间距会变成 sm 档的 8px —— props 做不到这件事。
 */
import { createGapPlugin } from "vane-waterfall/custom-plugins";
import { createFeedStage } from "./stages/feed";
import type { DemoMeta } from "./types";

export const meta: DemoMeta = {
  slug: "gap-plugin",
  title: "间距插件",
  group: "plugin",
  plugin: "GapPlugin",
  intro: "把行/列间距收到一处，还能按窗口宽度换档。",
  why: "多个页面要统一间距规范（或手机端要更紧）时，用插件的 responsive 比在每个页面写 CSS 断点稳。",
  plugs: [
    {
      fn: "createGapPlugin",
      cfg: "columnGap: {{columnGap}}, rowGap: {{rowGap}}, responsive: { sm: { columnGap: 8, rowGap: 8 } }",
      why: "间距集中配置，并按 sm/md/lg/xl 自动换档（阈值 768/992/1200）",
    },
  ],
  props: ["columns={3}", "containerStyle={{ height: 420 }}"],
  note: "responsive 是「命中即覆盖」：桌面端如果也配了 lg，上面两个滑杆就会被 lg 顶掉（看着像没接上）。这页只给 sm，所以桌面端用手写值、窄于 768px 才切 8px。档位看的是 window 宽度，不是容器宽。",
  controls: [
    { key: "columnGap", label: "columnGap", kind: "number", init: 16, min: 0, max: 40 },
    { key: "rowGap", label: "rowGap", kind: "number", init: 16, min: 0, max: 40 },
  ],
};

export default createFeedStage({
  count: 26,
  seed: 2701,
  instrument: true,
  plugins: (api) => [
    createGapPlugin({
      columnGap: Number(api.cfg.columnGap),
      rowGap: Number(api.cfg.rowGap),
      // 只配 sm：桌面端要能拖滑杆看到手写值生效；断点一旦配了同档位就会顶掉手写值
      responsive: {
        sm: { columnGap: 8, rowGap: 8 },
      },
    }),
  ],
  coreProps: () => ({ columns: 3 }),
  chrome: (api) => (
    <p className="stage-tip">
      配置 <b>{Number(api.cfg.columnGap)}</b> / <b>{Number(api.cfg.rowGap)}</b> · 把窗口拉窄会切到 sm 档（8px）
    </p>
  ),
});
`,_k=`/**\r
 * 12 · 虚拟瀑布流\r
 *\r
 * 1000 项，只渲染视口附近。关键读数在下面：数据项 1000，实际渲染通常只有几十。\r
 *\r
 * 注意它「只裁渲染不裁测量」：总高与滚动位置仍按全量算，所以滚动条长度是对的，\r
 * 自定义插件读 itemPositions 也不会因为虚拟化缺项。\r
 *\r
 * 页面的重点其实是「未测量项该估多高」——这是虚拟化唯一没法算准的地方：\r
 * 估低了，同一列后面的项会压上来（滚动时的重叠）；估高了，滚动条虚长。\r
 * 所以把 \`adaptiveEstimate\`（跟实测样本走）和分位做成了控件，可以直接对比。\r
 */\r
import { createFeedStage } from "./stages/feed";\r
import type { DemoMeta } from "./types";\r
\r
export const meta: DemoMeta = {\r
  slug: "virtual",\r
  title: "虚拟瀑布流",\r
  group: "plugin",\r
  capability: "virtualize",\r
  intro: "1000 项只渲染几十个 DOM —— 看「数据项 / 实际渲染」两个读数。",\r
  why: "上千项、项高可估（图片卡、商品卡）时开。几百项以内不必上虚拟化，Recycle 更省事（不卸载、图片不用重载）。",\r
  plugs: [],\r
  props: [\r
    "items={thousandItems}",\r
    {\r
      text: "virtualize={{ overscan: {{overscan}}, adaptiveEstimate: true, estimateQuantile: {{estimateQuantile}} }}",\r
      when: (c) => Boolean(c.adaptive),\r
    },\r
    {\r
      text: "virtualize={{ overscan: {{overscan}}, adaptiveEstimate: false, estimateHeight: {{estimateHeight}} }}",\r
      when: (c) => !c.adaptive,\r
    },\r
    "columns={3}",\r
    "containerStyle={{ height: 420 }}",\r
  ],\r
  note: "estimateHeight 只是「冷启动还没有任何实测样本」时的兜底。样本够 8 个之后，自适应改用实测高度的中位数（P50）——中位数让总高误差最小。注意重叠不靠「把估值抬高」解决：抬高只是把误差从「重叠」换成「滚动条虚长」，而后者更持久。真正压住重叠的是「量到真高就立刻重排」——误差只存在一帧，且通常落在视口外。关掉自适应则严格用 estimateHeight，可以自己体会「240 面对 190~350 的项高」会怎样。",\r
  controls: [\r
    { key: "overscan", label: "overscan（屏）", kind: "number", init: 1, min: 0, max: 4 },\r
    {\r
      key: "adaptive",\r
      label: "自适应估值",\r
      kind: "switch",\r
      init: true,\r
      hint: "关掉后严格用 estimateHeight 排未测量项",\r
    },\r
    {\r
      key: "estimateQuantile",\r
      label: "分位",\r
      kind: "select",\r
      init: "0.5",\r
      options: [\r
        { label: "P50 中位数（默认，总高最准）", value: "0.5" },\r
        { label: "P75", value: "0.75" },\r
        { label: "P90（更保守，宁可留空）", value: "0.9" },\r
        { label: "P100（绝不重叠）", value: "1" },\r
      ],\r
      when: (c) => Boolean(c.adaptive),\r
    },\r
    {\r
      key: "estimateHeight",\r
      label: "estimateHeight",\r
      kind: "number",\r
      init: 240,\r
      min: 120,\r
      max: 360,\r
      step: 20,\r
      when: (c) => !c.adaptive,\r
    },\r
  ],\r
};\r
\r
export default createFeedStage({\r
  count: 1000,\r
  seed: 2801,\r
  instrument: true,\r
  plugins: () => [],\r
  coreProps: (api) => ({\r
    columns: 3,\r
    gap: 12,\r
    virtualize: {\r
      overscan: Number(api.cfg.overscan),\r
      adaptiveEstimate: Boolean(api.cfg.adaptive),\r
      estimateQuantile: Number(api.cfg.estimateQuantile ?? 0.5),\r
      estimateHeight: Number(api.cfg.estimateHeight),\r
    },\r
  }),\r
  chrome: (api) => (\r
    <p className="stage-tip">\r
      {api.items.length} 项数据 → 实际渲染 <b>{api.meter.rendered}</b> 个 · 总高{" "}\r
      <b>{Math.round(api.meter.totalHeight)}</b>px（按全量算，滚动中会随实测样本收敛）\r
    </p>\r
  ),\r
});\r
`,Tk=`/**\r
 * 13 · 虚拟瀑布流（动态高度）\r
 *\r
 * 虚拟化最容易翻车的地方：项还没测量就先按估值占位，等真测出来再修正。\r
 * 这页挂了 900ms 后把所有项高度 ×1.5，模拟「图片加载完成」—— 看总高与滚动条的变化。\r
 *\r
 * 关掉 dynamicHeights 就能看到反例：项高度变了但不会自动重排（省了每项一个 ResizeObserver\r
 * 的开销，代价是数据变了要自己 relayout）。\r
 */\r
import { createFeedStage } from "./stages/feed";\r
import type { DemoMeta } from "./types";\r
\r
export const meta: DemoMeta = {\r
  slug: "virtual-dynamic",\r
  title: "虚拟瀑布流（动态高度）",\r
  group: "plugin",\r
  capability: "virtualize · dynamicHeights",\r
  intro: "900ms 后所有卡片高度 ×1.5 —— 看虚拟化怎么把估值换成实测值。",\r
  why: "图片类瀑布流必然「先估后测」。要保证滚动条不跳、总高最终准确，就得理解 estimateHeight 与 dynamicHeights 各自管什么。",\r
  plugs: [],\r
  props: [\r
    "virtualize={{ overscan: 1, adaptiveEstimate: {{adaptive}}, dynamicHeights: {{{dynamicHeights}}} }}",\r
    {\r
      text: "  // adaptiveEstimate 关掉时才需要自己给 estimateHeight",\r
      when: (c) => !c.adaptive,\r
    },\r
    "columns={3}",\r
    "containerStyle={{ height: 420 }}",\r
  ],\r
  note: "dynamicHeights 关闭后，项高度变化不会触发重排 —— 需要自己调 ref.relayout()。虚拟化下项可能已卸载，measureItem 会返回缓存值而不是实时量。自适应估值（默认开）会跟着实测样本走，所以上面这一下 ×1.5 之后，未测量项的估值也会自动抬上去。",\r
  controls: [\r
    {\r
      key: "adaptive",\r
      label: "自适应估值",\r
      kind: "switch",\r
      init: true,\r
      hint: "关掉后严格用 estimateHeight 排未测量项",\r
    },\r
    {\r
      key: "estimateHeight",\r
      label: "estimateHeight",\r
      kind: "number",\r
      init: 240,\r
      min: 120,\r
      max: 360,\r
      step: 20,\r
      when: (c) => !c.adaptive,\r
    },\r
    { key: "dynamicHeights", label: "dynamicHeights", kind: "switch", init: true, hint: "关掉后高度变化不自动重排" },\r
  ],\r
};\r
\r
export default createFeedStage({\r
  count: 400,\r
  seed: 2901,\r
  instrument: true,\r
  plugins: () => [],\r
  coreProps: (api) => ({\r
    columns: 3,\r
    gap: 12,\r
    virtualize: {\r
      overscan: 1,\r
      adaptiveEstimate: Boolean(api.cfg.adaptive),\r
      estimateHeight: Number(api.cfg.estimateHeight),\r
      dynamicHeights: Boolean(api.cfg.dynamicHeights),\r
    },\r
  }),\r
  effect: (api) => {\r
    const timer = window.setTimeout(() => {\r
      api.setItems((prev) =>\r
        prev.map((c) => ({ ...c, height: Math.round((c.height * 1.5) / 8) * 8 }))\r
      );\r
      api.log("模拟图片加载完成：全部项高度 ×1.5，Core 重新测量并修正位置");\r
    }, 900);\r
    return () => window.clearTimeout(timer);\r
  },\r
  chrome: (api) => (\r
    <p className="stage-tip">\r
      {api.items.length} 项 · 渲染 <b>{api.meter.rendered}</b> · 总高{" "}\r
      <b>{Math.round(api.meter.totalHeight)}</b>px · 自适应{" "}\r
      <b>{api.cfg.adaptive ? "开" : "关"}</b> · dynamicHeights{" "}\r
      <b>{api.cfg.dynamicHeights ? "开" : "关"}</b>\r
    </p>\r
  ),\r
});\r
`,Rk=`/**
 * 14 · Throttle 插件
 *
 * 改的是 Core 的 \`throttleDelay\` / \`debounceDelay\` —— 滚动回调多久跑一次、重排多久防抖。
 * 快速滚一遍，看「滚动回调」这个读数：把 scroll 调到 120ms，回调次数会明显变少。
 *
 * 注意这里节流的是**回调**，不是布局：布局该什么时候算还是什么时候算，
 * 所以不会出现「节流开了、卡片位置变慢」的现象。
 */
import { createThrottlePlugin } from "vane-waterfall/custom-plugins";
import { createFeedStage } from "./stages/feed";
import type { DemoMeta } from "./types";

export const meta: DemoMeta = {
  slug: "throttle",
  title: "Throttle 插件",
  group: "plugin",
  plugin: "ThrottlePlugin",
  intro: "滚动回调 120ms 一次还是每帧一次，看读数差别。",
  why: "埋点、懒加载判断、侧边指示器这类「滚动时要做点事」的逻辑，不节流会直接把主线程拖住。",
  plugs: [
    {
      fn: "createThrottlePlugin",
      cfg: "scroll: {{scroll}}, resize: {{resize}}",
      why: "统一收口滚动/尺寸回调频率，比每个页面各写一个 throttle 稳",
    },
  ],
  props: ["columns={3}", "containerStyle={{ height: 420 }}"],
  note: "节流的是回调，不是布局。想让「连续改尺寸时的重排」慢下来用 DebounceLayout（下一页）。",
  controls: [
    { key: "scroll", label: "scroll（ms）", kind: "number", init: 16, min: 0, max: 200, step: 8, nonLayout: true },
    { key: "resize", label: "resize（ms）", kind: "number", init: 120, min: 0, max: 400, step: 20, nonLayout: true },
  ],
};

export default createFeedStage({
  count: 120,
  seed: 3001,
  instrument: true,
  plugins: (api) => [
    createThrottlePlugin({ scroll: Number(api.cfg.scroll), resize: Number(api.cfg.resize) }),
  ],
  coreProps: () => ({ columns: 3, gap: 12 }),
  chrome: (api) => (
    <p className="stage-tip">
      滚动回调 <b>{api.meter.scrolls}</b> 次（阈值 {Number(api.cfg.scroll)}ms）· 布局耗时{" "}
      <b>{api.meter.layoutMs.toFixed(1)}</b>ms —— 快速滚一遍再对比
    </p>
  ),
});
`,Mk=`/**
 * 15 · DebounceLayout 插件
 *
 * 只做一件事：把「重排」的防抖拉长。拖下面的宽度滑杆 —— 每一帧宽度都在变，
 * 但只有停下来之后才真正重排一次。看「最近布局」耗时的变化频率。
 *
 * 真实场景：可拖拽分栏、可展开的侧边栏、响应式预览缩放。
 */
import { createDebounceLayoutPlugin } from "vane-waterfall/custom-plugins";
import { createFeedStage } from "./stages/feed";
import type { DemoMeta } from "./types";

export const meta: DemoMeta = {
  slug: "debounce-layout",
  title: "DebounceLayout 插件",
  group: "plugin",
  plugin: "DebounceLayoutPlugin",
  intro: "连续拖宽度时只在停下后重排一次。",
  why: "容器尺寸会被连续改变的场景（拖拽分栏、展开收起、缩放预览）不做防抖，每帧都会全量重排。",
  plugs: [
    {
      fn: "createDebounceLayoutPlugin",
      cfg: "delay: {{delay}}",
      why: "把 debounceDelay 拉长到 300ms，连续 resize 只算最后一次",
    },
  ],
  props: ["columns={3}", "containerStyle={{ height: 420 }}"],
  note: "防抖太大会有「松手后卡片才归位」的观感，200–300ms 是比较稳的区间。和 ThrottlePlugin 分工不同：那个管回调、这个管重排。",
  controls: [
    { key: "delay", label: "delay（ms）", kind: "number", init: 300, min: 0, max: 600, step: 20, nonLayout: true },
    { key: "simWidth", label: "容器宽", kind: "number", init: 780, min: 380, max: 1080, step: 10 },
  ],
};

export default createFeedStage({
  count: 36,
  seed: 3101,
  instrument: true,
  plugins: (api) => [createDebounceLayoutPlugin({ delay: Number(api.cfg.delay) })],
  coreProps: (api) => ({
    columns: 3,
    gap: 12,
    containerStyle: { height: "var(--stage-h, 380px)", width: Number(api.cfg.simWidth) },
  }),
  chrome: (api) => (
    <p className="stage-tip">
      防抖 <b>{Number(api.cfg.delay)}</b>ms · 最近布局{" "}
      <b>{api.meter.layoutMs.toFixed(1)}</b>ms · 拖滑杆时观察它多久变一次
    </p>
  ),
});
`,Ik=`/**
 * 16 · Recycle 插件
 *
 * 离屏项设 \`visibility: hidden\`：DOM 还在、图片不用重新下载，只是不参与绘制。
 * 这是「几百项」场景最划算的一档 —— 比虚拟化省事，比不处理省电。
 *
 * 页面上那个「改用 virtualize」开关是**对照实验**：同一份 300 项数据，
 * 一边保留 300 个 DOM 只隐藏绘制，一边只挂几十个 DOM。选型纠结时点一下就有体感。
 */
import { createRecyclePlugin } from "vane-waterfall/custom-plugins";
import { createFeedStage } from "./stages/feed";
import type { DemoMeta } from "./types";

export const meta: DemoMeta = {
  slug: "recycle",
  title: "Recycle 插件",
  group: "plugin",
  plugin: "RecyclePlugin",
  intro: "离屏项隐藏而不卸载 —— 图片不用重载，DOM 数量不变。打开「改用 virtualize」可以当场对照。",
  why: "几百项的长列表：卸载会丢图片缓存（滚回来又要下载），不处理又会一直重绘。Recycle 是中间那档。",
  plugs: [
    {
      fn: "createRecyclePlugin",
      cfg: "poolSize: {{poolSize}}",
      why: "视口外超出池子的项设 visibility:hidden，减少绘制但保留 DOM",
    },
  ],
  props: [
    "columns={3}",
    "containerStyle={{ height: 420 }}",
    { text: "virtualize={{ overscan: 1 }}", when: (c) => Boolean(c.virtual) },
  ],
  note: "与 virtualize 互斥：一个隐藏 DOM、一个卸载 DOM，同开会互相打架（可见项被另一套逻辑当成离屏）。所以上面的开关一打开，Recycle 插件就不装了 —— 两种策略二选一。挑法：几百项、图片重、要保住图片缓存 → Recycle；上千项、要控 DOM 数 → virtualize。",
  controls: [
    { key: "poolSize", label: "poolSize", kind: "number", init: 24, min: 4, max: 80, step: 2, nonLayout: true },
    {
      key: "virtual",
      label: "改用 virtualize",
      kind: "switch",
      init: false,
      hint: "对照：卸载离屏 DOM（Recycle 是隐藏不卸载）",
    },
  ],
};

export default createFeedStage({
  count: 300,
  seed: 3201,
  instrument: true,
  plugins: (api) =>
    api.cfg.virtual ? [] : [createRecyclePlugin({ poolSize: Number(api.cfg.poolSize) })],
  coreProps: (api) => ({
    columns: 3,
    gap: 12,
    ...(api.cfg.virtual ? { virtualize: { overscan: 1 } } : null),
  }),
  chrome: (api) => (
    <div className="stage-stats">
      <p className="stage-tip">
        {api.items.length} 项 · DOM <b>{api.meter.rendered}</b> 个 · 总高{" "}
        <b>{Math.round(api.meter.totalHeight)}</b>px · 布局{" "}
        <b>{api.meter.layoutMs.toFixed(1)}</b>ms ·{" "}
        {api.cfg.virtual
          ? "virtualize（卸载离屏，DOM 只剩几十个）"
          : \`Recycle（DOM 全留 300 个，只隐藏绘制，池子 \${Number(api.cfg.poolSize)}）\`}
      </p>
    </div>
  ),
});
`,$k=`/**
 * 17 · InfiniteScroll 插件
 *
 * 距底 \`threshold\` 像素时触发 onLoadMore，追加数据。插件内带并发锁，
 * 快速滚到底也只发一次请求 —— 数据量读数会一档一档往上走，不会跳。
 */
import { createInfiniteScrollPlugin } from "vane-waterfall/custom-plugins";
import { makeCards } from "../data/seed";
import { createFeedStage } from "./stages/feed";
import type { DemoMeta } from "./types";

const MAX = 240;

export const meta: DemoMeta = {
  slug: "infinite-scroll",
  title: "InfiniteScroll 插件",
  group: "plugin",
  plugin: "InfiniteScrollPlugin",
  intro: "滚到底自动追加，加载完停在 240 项不再请求。",
  why: "信息流、图片流的标准做法。threshold 要在「用户快到底但还没到底」时触发，太小会看到空白等待。",
  plugs: [
    {
      fn: "createInfiniteScrollPlugin",
      cfg: "threshold: {{threshold}}",
      why: "把 props.reachBottomOffset 写成 threshold，并在 onReachBottom 里加并发锁与 hasMore 判断",
    },
  ],
  props: ["onLoadMore={loadMore}", "columns={3}", "containerStyle={{ height: 420 }}"],
  note: "与 PaginationPlugin 互斥：一个追加、一个切片，同开会「翻到第 2 页又看到第 1 页」。到上限时让插件 setState({ hasMore: false }) 或像这里在 onLoadMore 里短路。",
  controls: [
    { key: "threshold", label: "threshold（px）", kind: "number", init: 400, min: 100, max: 900, step: 50, nonLayout: true },
  ],
};

export default createFeedStage({
  count: 24,
  seed: 3301,
  instrument: true,
  plugins: (api) => [createInfiniteScrollPlugin({ threshold: Number(api.cfg.threshold) })],
  coreProps: (api) => ({
    columns: 3,
    gap: 12,
    onLoadMore: () => {
      api.setItems((prev) =>
        prev.length >= MAX
          ? prev
          : [...prev, ...makeCards({ count: 12, seed: 3301 + prev.length * 7 })]
      );
    },
  }),
  chrome: (api) => {
    const loaded = api.items.length;
    return (
      <p className="stage-tip">
        已加载 <b>{loaded}</b> / {MAX} 项 ·{" "}
        {loaded >= MAX ? "已到上限，不会再请求" : \`距底 \${Number(api.cfg.threshold)}px 时追加 12 项\`}
      </p>
    );
  },
});
`,Ek=`/**
 * 18 · Pagination 插件
 *
 * 切片发生在整条数据管线的最后一环（Filter → Sort → Search → Pagination），
 * 所以「页数」永远是筛选后的页数。这页只有分页，但读数会写明这一点。
 */
import { createPaginationPlugin } from "vane-waterfall/custom-plugins";
import { createFeedStage } from "./stages/feed";
import type { DemoMeta } from "./types";

export const meta: DemoMeta = {
  slug: "pagination",
  title: "Pagination 插件",
  group: "plugin",
  plugin: "PaginationPlugin",
  intro: "pageIndex / pageSize 交给插件切片，翻页自动回顶。",
  why: "后台列表、搜索结果页：需要「第几页 / 共几页」这种确定性导航时用分页，不要用无限滚动。",
  plugs: [
    {
      fn: "createPaginationPlugin",
      cfg: "pageSize: {{pageSize}}, scrollToTop: true",
      why: "读 props.pageIndex（1 基）与 props.pageSize，对 items 切片",
    },
  ],
  props: [
    "pageIndex={{{pageIndex}}}",
    "pageSize={{{pageSize}}}",
    "scrollToTopOnPageChange",
    "columns={4}",
    "containerStyle={{ height: 420 }}",
  ],
  note: "它排在 Filter/Sort/Search 之后（priority 10），所以页数是过滤后的总数。顺序反了会出现「第 2 页是空的」。",
  controls: [
    { key: "pageSize", label: "pageSize", kind: "number", init: 12, min: 4, max: 36, step: 2 },
    { key: "pageIndex", label: "pageIndex", kind: "number", init: 1, min: 1, max: 12 },
  ],
};

export default createFeedStage({
  count: 48,
  seed: 3401,
  instrument: true,
  plugins: (api) => [
    createPaginationPlugin({ pageSize: Number(api.cfg.pageSize), scrollToTop: true }),
  ],
  coreProps: (api) => {
    // 页数由 pageSize 决定，pageIndex 的滑杆上限是死的 → 超出就钳到最后一页，
    // 否则拖到头会得到一个「第 12 / 2 页」的空舞台
    const pages = Math.max(1, Math.ceil(48 / Number(api.cfg.pageSize)));
    return {
      columns: 4,
      gap: 12,
      pageIndex: Math.min(Number(api.cfg.pageIndex), pages),
      pageSize: Number(api.cfg.pageSize),
      scrollToTopOnPageChange: true,
    };
  },
  chrome: (api) => {
    const size = Number(api.cfg.pageSize);
    const asked = Number(api.cfg.pageIndex);
    const pages = Math.max(1, Math.ceil(api.items.length / size));
    const page = Math.min(asked, pages);
    return (
      <div className="stage-pager">
        <button
          type="button"
          disabled={page <= 1}
          onClick={() => api.setCfg("pageIndex", Math.max(1, page - 1))}
        >
          上一页
        </button>
        <span>
          第 <b>{page}</b> / {pages} 页 · 每页 {size} · 共 {api.items.length} 项
          {asked > pages ? "（滑杆已越界，钳到最后一页）" : ""}
        </span>
        <button
          type="button"
          disabled={page >= pages}
          onClick={() => api.setCfg("pageIndex", Math.min(pages, page + 1))}
        >
          下一页
        </button>
      </div>
    );
  },
});
`,Nk=`/**
 * 19 · Filter 插件
 *
 * 拖价格上限看结果数——这里是**实时**生效的，因为插件优先读 \`props.filterFn\`：
 * 插件提供兜底谓词，页面通过 props 换条件，不用重建组件。
 *
 * 这也是推荐接法：条件放 state，透传给 filterFn，插件那一层只负责「在管线里正确执行」。
 */
import { createFilterPlugin } from "vane-waterfall/custom-plugins";
import { createFeedStage } from "./stages/feed";
import type { DemoMeta } from "./types";

export const meta: DemoMeta = {
  slug: "filter",
  title: "Filter 插件",
  group: "plugin",
  plugin: "FilterPlugin",
  intro: "价格上限拖到哪，列表就剩到哪 —— 页数/总数跟着变。",
  why: "价格区间、库存、标签筛选：过滤必须发生在排序与分页之前，否则「第 2 页」会突然空掉。",
  plugs: [
    {
      fn: "createFilterPlugin",
      cfg: "predicate: (item) => item.price <= 500, scrollToTop: false",
      why: "在 transformProps 链的第一环删掉不匹配项（priority 40，排在排序/分页之前）",
    },
  ],
  props: ["filterFn={(item) => item.price <= {{maxPrice}}}", "columns={4}", "containerStyle={{ height: 420 }}"],
  note: "谓词抛错时按「保留」处理，不会让整表消失。条件变化后要不要回顶由 scrollToTop 决定。",
  controls: [
    { key: "maxPrice", label: "价格上限", kind: "number", init: 500, min: 50, max: 900, step: 50 },
  ],
};

export default createFeedStage({
  count: 40,
  seed: 3501,
  commerce: true,
  variant: "product",
  instrument: true,
  pluginKeys: [],
  plugins: () => [createFilterPlugin({ predicate: (item) => item.price <= 500 })],
  coreProps: (api) => ({
    columns: 4,
    gap: 12,
    filterFn: (item: { price: number }) => item.price <= Number(api.cfg.maxPrice),
  }),
  chrome: (api) => {
    const max = Number(api.cfg.maxPrice);
    const passed = api.items.filter((i) => i.price <= max).length;
    return (
      <p className="stage-tip">
        ¥ ≤ {max} · 命中 <b>{passed}</b> / {api.items.length} 项
      </p>
    );
  },
});
`,jk=`/**\r
 * 20 · Sort 插件\r
 *\r
 * 排序作用在**已过滤**的全量集合上，然后才分页 —— 这个顺序决定了「第 2 页」是不是真的第二页。\r
 * 换排序方式时会发现卡片位置整体跳动，那正是 transformProps 重新排了 items。\r
 */\r
import { createSortPlugin } from "vane-waterfall/custom-plugins";\r
import { createFeedStage } from "./stages/feed";\r
import type { DemoMeta } from "./types";\r
import type { SeedCard } from "../data/seed";\r
\r
const COMPARATORS: Record<string, (a: SeedCard, b: SeedCard) => number> = {\r
  likes: (a, b) => b.likes - a.likes,\r
  price: (a, b) => a.price - b.price,\r
  fresh: (a, b) => a.minutesAgo - b.minutesAgo,\r
  tall: (a, b) => b.height - a.height,\r
};\r
\r
const LABEL: Record<string, string> = {\r
  likes: "点赞数 高→低",\r
  price: "价格 低→高",\r
  fresh: "发布时间 新→旧",\r
  tall: "高度 高→低",\r
};\r
\r
export const meta: DemoMeta = {\r
  slug: "sort",\r
  title: "Sort 插件",\r
  group: "plugin",\r
  plugin: "SortPlugin",\r
  intro: "四种排序切换，卡片整体重排 —— 顺序变了而不是重新请求。",\r
  why: "「按热度 / 价格 / 最新」这类前端可解的排序，交给插件比让后端多个接口省事；但数据量大时还是应该由后端排。",\r
  plugs: [\r
    {\r
      fn: "createSortPlugin",\r
      cfg: "comparator: (a, b) => b.likes - a.likes",\r
      why: "在过滤之后、分页之前重排 items（priority 30）",\r
    },\r
  ],\r
  props: ["sortComparator={comparator}", "columns={4}", "containerStyle={{ height: 420 }}"],\r
  note: "优先读 props.sortComparator：所以页面切换排序方式时不用重建组件。comparator 必须是纯函数，且不能依赖 items 顺序（否则排序结果不稳定）。",\r
  controls: [\r
    {\r
      key: "sortBy",\r
      label: "排序方式",\r
      kind: "select",\r
      init: "likes",\r
      options: [\r
        { label: LABEL.likes, value: "likes" },\r
        { label: LABEL.price, value: "price" },\r
        { label: LABEL.fresh, value: "fresh" },\r
        { label: LABEL.tall, value: "tall" },\r
      ],\r
    },\r
  ],\r
};\r
\r
export default createFeedStage({\r
  count: 32,\r
  seed: 3601,\r
  commerce: true,\r
  variant: "product",\r
  instrument: true,\r
  pluginKeys: [],\r
  plugins: () => [createSortPlugin<SeedCard>({ comparator: COMPARATORS.likes })],\r
  coreProps: (api) => ({\r
    columns: 4,\r
    gap: 12,\r
    sortComparator: COMPARATORS[String(api.cfg.sortBy)] ?? COMPARATORS.likes,\r
    scrollToTopOnSortChange: false,\r
  }),\r
  chrome: (api) => (\r
    <p className="stage-tip">\r
      当前 <b>{LABEL[String(api.cfg.sortBy)]}</b> · 首项应是「{String(api.cfg.sortBy)} 最靠前」的那张\r
    </p>\r
  ),\r
});\r
`,Lk=`/**\r
 * 21 · Search 插件\r
 *\r
 * 输入框的值写进 \`props.searchQuery\`，插件在管线里做大小写不敏感的包含匹配。\r
 *\r
 * 这里把 searchQuery 从「重建组件的 key」里排除了 —— 否则每敲一个字整块瀑布流都会重挂载，\r
 * 输入框失焦、滚动归零。这是示例页很容易做错的地方，也是真实项目里最常见的性能坑。\r
 */\r
import { createSearchPlugin } from "vane-waterfall/custom-plugins";\r
import { createFeedStage } from "./stages/feed";\r
import type { DemoMeta } from "./types";\r
\r
export const meta: DemoMeta = {\r
  slug: "search",\r
  title: "Search 插件",\r
  group: "plugin",\r
  plugin: "SearchPlugin",\r
  intro: "边打字边过滤，输入框不失焦、滚动不乱跳。",\r
  why: "字段有限的本地搜索（标题、作者、标签）用插件就够；需要模糊匹配、拼音、分词时应该后端做。",\r
  plugs: [\r
    {\r
      fn: "createSearchPlugin",\r
      cfg: 'fields: ["title", "author"]',\r
      why: "只扫指定字段，避免把 undefined 也扫一遍（priority 20，在排序之后、分页之前）",\r
    },\r
  ],\r
  props: ["searchQuery={query}", "columns={3}", "containerStyle={{ height: 420 }}"],\r
  note: "fields 不给会扫全部可枚举字段，容易误命中。scrollToTop 默认关，搜索后保留滚动位置反而更自然时别打开。",\r
};\r
\r
export default createFeedStage({\r
  count: 36,\r
  seed: 3701,\r
  instrument: true,\r
  pluginKeys: [],\r
  plugins: () => [createSearchPlugin({ fields: ["title", "author"] })],\r
  coreProps: (api) => ({\r
    columns: 3,\r
    gap: 12,\r
    searchQuery: String(api.cfg.query ?? ""),\r
    scrollToTopOnSearchChange: false,\r
  }),\r
  chrome: (api) => {\r
    const q = String(api.cfg.query ?? "").trim().toLowerCase();\r
    // 与插件同款匹配规则（fields: title + author，大小写不敏感），只为把命中数显示出来\r
    const hit = q\r
      ? api.items.filter(\r
          (i) => i.title.toLowerCase().includes(q) || i.author.toLowerCase().includes(q)\r
        ).length\r
      : api.items.length;\r
    return (\r
      <div className="stage-search">\r
        <input\r
          type="search"\r
          placeholder="搜标题或作者，如「咖啡」「林一白」"\r
          value={String(api.cfg.query ?? "")}\r
          onChange={(e) => api.setCfg("query", e.target.value)}\r
        />\r
        <span>\r
          命中 <b>{hit}</b> / {api.items.length} 项{q ? \`（query="\${q}"）\` : ""}\r
        </span>\r
      </div>\r
    );\r
  },\r
});\r
`,Ok=`/**
 * 22 · ClickAnalytics 插件
 *
 * 插件统计每项点击次数并 \`bus.emit("analytics:click", …)\`，\`showOverlay\` 打开时直接在卡片角上显示次数。
 * 页面拿不到 bus，但有 \`onItemClick\` —— 两条路都演示在这里：角标看插件内部计数，日志看 Core 回调。
 *
 * 「导出 JSON」按钮演示的是接入姿势：插件的计数原本只在内存里，刷新即清零，
 * 真接自己的埋点通道时就是从 \`getStats()\` 取这份数据往上报。
 */
import { createClickAnalyticsPlugin } from "vane-waterfall/custom-plugins";
import { createFeedStage } from "./stages/feed";
import type { SeedCard } from "../data/seed";
import type { DemoMeta } from "./types";

// 提到模块级：chrome 里的「导出」按钮要读同一份统计
const clickPlugin = createClickAnalyticsPlugin<SeedCard>({ showOverlay: true });

export const meta: DemoMeta = {
  slug: "click-analytics",
  title: "ClickAnalytics 插件",
  group: "plugin",
  plugin: "ClickAnalyticsPlugin",
  intro: "点卡片，角上的计数 +1，日志同时记一条；「导出 JSON」把内存计数吐出来。",
  why: "「哪几张最常被点」这类轻量埋点，用插件比在 renderItem 里到处加 onClick 干净，也不会漏掉没渲染的路径。",
  plugs: [
    {
      fn: "createClickAnalyticsPlugin",
      cfg: "showOverlay: true, log: false",
      why: "订阅 onItemClick 累加计数并广播事件，角标只是可视化的开关",
    },
  ],
  props: ["columns={3}", "containerStyle={{ height: 420 }}", "onItemClick={(i, item) => track(item.id)}"],
  note: "showOverlay 生产环境应关掉（默认就是 false）。真实上报在 bus 上订阅 analytics:click —— 页面侧拿不到 bus 时，可以用 onItemClick 走自己的埋点函数，或者像右上角那样定时取 getStats() 批量上报（计数只在内存里，刷新即清零）。",
};

export default createFeedStage({
  count: 20,
  seed: 3801,
  instrument: true,
  plugins: () => [clickPlugin],
  coreProps: (api) => ({
    columns: 3,
    gap: 12,
    onItemClick: (i, item: { title: string }) =>
      api.log(\`点击 #\${i} · \${item.title}（bus 上同时广播 analytics:click）\`),
  }),
  chrome: (api) => (
    <div className="stage-stats">
      <p className="stage-tip">点几张卡：右上角数字是插件自己的计数</p>
      <button
        type="button"
        onClick={() => {
          const stats = clickPlugin.getStats();
          api.log(\`getStats() → \${JSON.stringify(stats)}\`);
          void navigator.clipboard?.writeText(JSON.stringify(stats, null, 2)).catch(() => {});
        }}
      >
        导出 JSON
      </button>
    </div>
  ),
});
`,Dk=`/**
 * 23 · Bookmark 插件
 *
 * 键盘位置书签：滚到某处按 \`b\` 记下，再滚走按 \`r\` 跳回来。记的是 scrollTop，存在 localStorage。
 * 输入框里按 b/r 不会触发 —— 插件自己判定了焦点。
 */
import { createBookmarkPlugin } from "vane-waterfall/custom-plugins";
import { createFeedStage } from "./stages/feed";
import { KeyHint } from "./panels";
import type { DemoMeta } from "./types";

export const meta: DemoMeta = {
  slug: "bookmark",
  title: "Bookmark 插件",
  group: "plugin",
  plugin: "BookmarkPlugin",
  intro: "滚到中间按 b，再滚别处按 r —— 回到刚才那一屏。",
  why: "长信息流里「刚才那条不错，等下回来看」，比让用户翻历史记录便宜得多。",
  plugs: [
    {
      fn: "createBookmarkPlugin",
      cfg: 'storageKey: "demo-bookmark", scrollBehavior: "smooth"',
      why: "键盘监听 + localStorage，页面不用为「记位置」写任何逻辑",
    },
  ],
  props: ["columns={3}", "containerStyle={{ height: 420 }}"],
  note: "记的是 scrollTop 绝对值，不是某一项：数据顺序变了书签就偏了。要「记住这条内容」请按 id 记（用 ScrollAnchor 那套）。",
};

export default createFeedStage({
  count: 60,
  seed: 3901,
  instrument: true,
  plugins: () => [createBookmarkPlugin({ storageKey: "demo-bookmark", scrollBehavior: "smooth" })],
  coreProps: () => ({ columns: 3, gap: 12 }),
  chrome: () => (
    <>
      <KeyHint
        items={[
          ["b", "记住当前位置"],
          ["r", "跳回书签位置"],
        ]}
      />
      <p className="stage-tip">先滚到中间，按 b；再滚到别处，按 r</p>
    </>
  ),
});
`,zk=`/**
 * 24 · URLSync 插件
 *
 * 把筛选条件写进 URL：复制地址发给同事，打开就是同一屏。
 * 这页用的是 \`mode: "search"\`（写 ?searchQuery=…），因为站点本身是 hash 路由 —— 两者不冲突。
 *
 * 三个容易做错的点，这页都按「能跑通」的写法给了：
 *  1. \`keys\` 里写的必须是**内核 props 上真实存在的键**（这里是 \`searchQuery\`）——
 *     插件是从 props 取值写 URL 的，写成别的名字就永远写不进去；
 *  2. 真正的过滤要由 Search/Filter 插件执行，Core 不消费 \`filterFn\`；
 *  3. 插件挂载时会在 bus 上广播 \`urlsync:init\`，页面得自己消费（这里直接读一次
 *     location.search 回填控件，等价于「订阅 bus」）。
 */
import { createSearchPlugin, createURLSyncPlugin } from "vane-waterfall/custom-plugins";
import { createFeedStage } from "./stages/feed";
import type { DemoMeta } from "./types";

export const meta: DemoMeta = {
  slug: "url-sync",
  title: "URLSync 插件",
  group: "plugin",
  plugin: "URLSyncPlugin",
  intro: "条件写进 URL，刷新 / 分享都能复现同一屏。",
  why: "带筛选的后台列表、搜索结果页：一旦用户按了 F5 或把链接发给别人，条件不该丢。",
  plugs: [
    {
      fn: "createURLSyncPlugin",
      cfg: 'mode: "search", keys: ["searchQuery"]',
      why: "把 props 上的 searchQuery 写进 URL，并在挂载时广播 URL 里的值",
    },
    {
      fn: "createSearchPlugin",
      cfg: 'fields: ["title", "author"]',
      why: "URLSync 只负责搬运条件，真正过滤要靠搜索插件",
    },
  ],
  props: ["searchQuery={query}", "columns={3}", "containerStyle={{ height: 420 }}"],
  note: 'keys 里必须是内核 props 上真实存在的键（searchQuery），写成 query 就永远写不进 URL。刷新页面后控件值会从 URL 回填，相当于「分享出去的那一屏」。',
};

export default createFeedStage({
  count: 24,
  seed: 4001,
  instrument: true,
  pluginKeys: [],
  plugins: () => [
    createURLSyncPlugin({ mode: "search", keys: ["searchQuery"] }),
    createSearchPlugin({ fields: ["title", "author"] }),
  ],
  coreProps: (api) => ({
    columns: 3,
    gap: 12,
    searchQuery: String(api.cfg.query ?? ""),
    scrollToTopOnSearchChange: false,
  }),
  effect: (api) => {
    // 挂载时把 URL 上的条件回填控件：刷新一次就能看到「分享出去的那一屏」
    const q = new URLSearchParams(window.location.search).get("searchQuery");
    if (q) {
      api.setCfg("query", q);
      api.log(\`从 URL 回填 searchQuery="\${q}"\`);
    }
  },
  chrome: (api) => (
    <div className="stage-search">
      <input
        type="search"
        placeholder="输入关键词，地址栏会跟着变"
        value={String(api.cfg.query ?? "")}
        onChange={(e) => api.setCfg("query", e.target.value)}
      />
      <code className="stage-url">{window.location.search || "（地址栏还没有参数）"}</code>
    </div>
  ),
});
`,Ak=`/**
 * 25 · StatePersistence 插件
 *
 * 卸载时把 scrollTop 与指定 props 写入 localStorage，挂载时只注入一次。
 * 验证方式：滚到中间 → 切到「总览」再切回来（或直接刷新页面）→ 位置还在。
 */
import React, { useCallback, useState } from "react";
import { createStatePersistencePlugin } from "vane-waterfall/custom-plugins";
import { createFeedStage } from "./stages/feed";
import type { DemoMeta } from "./types";

const KEY = "demo-waterfall-state";

export const meta: DemoMeta = {
  slug: "state-persistence",
  title: "StatePersistence 插件",
  group: "plugin",
  plugin: "StatePersistencePlugin",
  intro: "滚到哪、第几页，都记在本地；再打开接着看。",
  why: "详情页返回列表、刷新后回到原位置 —— 这类「像原生 App」的体验，靠它一行装配。",
  plugs: [
    {
      fn: "createStatePersistencePlugin",
      cfg: 'storageKey: "demo-waterfall-state", persistScroll: true, persistKeys: ["pageIndex"]',
      why: "只注入一次（不是每次渲染都覆盖），避免和用户当前操作打架",
    },
  ],
  props: ["columns={3}", "containerStyle={{ height: 420 }}"],
  note: "只在挂载时注入一次：所以它不会把用户后来的滚动「拽回去」。跨标签页同步不在它职责内（要自己听 storage 事件）。",
};

function StorageView() {
  const [snap, setSnap] = useState<string>(() => localStorage.getItem(KEY) ?? "");
  const refresh = useCallback(() => setSnap(localStorage.getItem(KEY) ?? ""), []);
  const clear = useCallback(() => {
    localStorage.removeItem(KEY);
    setSnap("");
  }, []);
  return (
    <div className="stage-storage">
      <code>{snap || "（还没有存档 —— 先滚一下列表）"}</code>
      <span>
        <button type="button" onClick={refresh}>
          刷新读数
        </button>
        <button type="button" onClick={clear}>
          清除存档
        </button>
      </span>
    </div>
  );
}

export default createFeedStage({
  count: 50,
  seed: 4101,
  instrument: true,
  plugins: () => [
    createStatePersistencePlugin({
      storageKey: KEY,
      persistScroll: true,
      persistKeys: ["pageIndex"],
    }),
  ],
  coreProps: () => ({ columns: 3, gap: 12 }),
  chrome: () => (
    <>
      <p className="stage-tip">滚到中间 → 切到「总览」再切回来，位置会被记住</p>
      <StorageView />
    </>
  ),
});
`,Wk=`/**\r
 * 26 · Grouping 插件\r
 *\r
 * 按 tag 分组，结果写进 \`sharedData.get("GROUPS")\` 并广播 \`grouping:change\`。\r
 * 打开 showOverlay 能直接看到分组结果 —— 否则这插件「只有别的插件看得见」。\r
 *\r
 * 1.x 的坑：只在 onPropsChange 里算，首屏永远是空的。这里挂载即算 + 布局完成后重算。\r
 */\r
import { createGroupingPlugin } from "vane-waterfall/custom-plugins";\r
import { createFeedStage } from "./stages/feed";\r
import type { DemoMeta } from "./types";\r
import type { SeedCard } from "../data/seed";\r
\r
export const meta: DemoMeta = {\r
  slug: "grouping",\r
  title: "Grouping 插件",\r
  group: "plugin",\r
  plugin: "GroupingPlugin",\r
  intro: "按标签分组，右下角浮层列出每组项数。",\r
  why: "壁纸墙、书签墙要「按分类看」，或要配合吸顶标题（下一页）—— 分组结果本身不是视觉，是给别的插件用的数据。",\r
  plugs: [\r
    {\r
      fn: "createGroupingPlugin",\r
      cfg: "groupBy: (item) => item.tag, showOverlay: true",\r
      why: "把 GROUPS（Map<组键, 索引数组>）写进 sharedData，供吸顶标题等插件消费",\r
    },\r
  ],\r
  props: ["columns={4}", "containerStyle={{ height: 420 }}"],\r
  note: "分组只算索引，不改变排列顺序 —— 想「同组连在一起」得自己按组重排数据再传进来（或用 SortPlugin）。",\r
  controls: [{ key: "overlay", label: "显示分组浮层", kind: "switch", init: true }],\r
};\r
\r
export default createFeedStage({\r
  count: 32,\r
  seed: 4201,\r
  instrument: true,\r
  plugins: (api) => [\r
    createGroupingPlugin<SeedCard>({ groupBy: (item) => item.tag, showOverlay: Boolean(api.cfg.overlay) }),\r
  ],\r
  coreProps: () => ({ columns: 4, gap: 10 }),\r
  chrome: (api) => {\r
    const counts = new Map<string, number>();\r
    api.items.forEach((i) => counts.set(i.tag, (counts.get(i.tag) ?? 0) + 1));\r
    return (\r
      <p className="stage-tip">\r
        {counts.size} 组：\r
        {[...counts.entries()]\r
          .sort((a, b) => b[1] - a[1])\r
          .map(([k, v]) => \`\${k} \${v}\`)\r
          .join(" · ")}\r
      </p>\r
    );\r
  },\r
});\r
`,Hk=`/**\r
 * 27 · StickyHeader 插件\r
 *\r
 * 读 GROUPS 的首组名，渲染一条 \`position: sticky\` 的标题条 —— 它渲染在滚动容器**内部**\r
 * （renderOverlay），所以吸顶是相对瀑布流自己，不是相对页面。\r
 *\r
 * 实验版：只显示首组，不随滚动切换。要「跟随当前可见组」得订阅 grouping:change + visibleRange 自己写。\r
 */\r
import { createGroupingPlugin, createStickyHeaderPlugin } from "vane-waterfall/custom-plugins";\r
import { createFeedStage } from "./stages/feed";\r
import type { DemoMeta } from "./types";\r
import type { SeedCard } from "../data/seed";\r
\r
export const meta: DemoMeta = {\r
  slug: "sticky-header",\r
  title: "StickyHeader 插件",\r
  group: "plugin",\r
  plugin: "StickyHeaderPlugin",\r
  intro: "滚动时顶部浮着当前分组标题。",\r
  why: "分类壁纸墙、按频道分的视频列表：滚着滚着忘了自己在哪个分类里。",\r
  plugs: [\r
    {\r
      fn: "createStickyHeaderPlugin",\r
      cfg: 'title: "当前分组", showHint: true',\r
      why: "在滚动容器内渲染 sticky 标题条，靠 renderOverlay 而不是改版式",\r
    },\r
    {\r
      fn: "createGroupingPlugin",\r
      cfg: "groupBy: (item) => item.tag",\r
      why: "标题条要读 GROUPS 的首组名，没有分组插件它只能显示兜底文案",\r
    },\r
  ],\r
  props: ["columns={4}", "containerStyle={{ height: 420 }}"],\r
  note: "只跟首组。真要做「跟随当前组」，插件需要订阅 grouping:change，并在 onScroll 里用 visibleRange 反查当前组 —— 这一页故意不藏这个限制。",\r
};\r
\r
export default createFeedStage({\r
  count: 40,\r
  seed: 4301,\r
  instrument: true,\r
  plugins: () => [\r
    createStickyHeaderPlugin({ title: "当前分组", showHint: true }),\r
    createGroupingPlugin<SeedCard>({ groupBy: (item) => item.tag }),\r
  ],\r
  coreProps: () => ({ columns: 4, gap: 10 }),\r
  chrome: () => <p className="stage-tip">向下滚：标题条会贴在瀑布流容器顶部</p>,\r
});\r
`,Fk=`/**\r
 * 28 · ScrollAnchor 插件\r
 *\r
 * 插件只做一件事：监听 bus 上的 \`anchor:scrollToId\`，按 id 找到索引后 scrollToItem。\r
 * 页面拿不到 bus（ref 只透传 Core），所以这里补一个极小的桥接插件，把 DOM 事件转成 bus 事件\r
 * —— 这页同时演示「自己的插件怎么写」，注意 onMount 返回的函数就是清理函数。\r
 */\r
import { createScrollAnchorPlugin } from "vane-waterfall/custom-plugins";\r
import type { WaterfallPlugin } from "vane-waterfall";\r
import { createFeedStage } from "./stages/feed";\r
import type { DemoMeta } from "./types";\r
import type { SeedCard } from "../data/seed";\r
\r
export const meta: DemoMeta = {\r
  slug: "scroll-anchor",\r
  title: "ScrollAnchor 插件",\r
  group: "plugin",\r
  plugin: "ScrollAnchorPlugin",\r
  intro: "点标签跳到对应那篇 —— 走 bus 事件，不是直接调 ref。",\r
  why: "目录、锚点导航、站内搜索定位：跳转逻辑应该在插件里，页面只负责「发一个 id 出去」。",\r
  plugs: [\r
    {\r
      fn: "createScrollAnchorPlugin",\r
      cfg: "getAnchorId: (item) => item.id",\r
      why: "按 id 反查索引并调 context.scrollToItem，落点由插件算",\r
    },\r
    {\r
      fn: "createAnchorBridgePlugin",\r
      why: "本页内联的自定义插件：window 上的 wf:anchor 事件 → bus.emit('anchor:scrollToId')",\r
      local: true,\r
    },\r
  ],\r
  props: ["columns={3}", "containerStyle={{ height: 420 }}"],\r
  note: "1.x 里这类插件会「自己造一个 bus 挂在 window 上」，其实是同一个问题的不同解法。桥接插件顺带示范了 onMount 返回清理函数 —— 旧版 withPlugins 从不执行它，监听会泄漏。",\r
};\r
\r
/** 自定义插件：DOM 事件 → bus 事件 */\r
function createAnchorBridgePlugin<T = unknown>(): WaterfallPlugin<T> {\r
  return {\r
    name: "AnchorBridgePlugin",\r
    enabled: true,\r
    hooks: {\r
      onMount: (context) => {\r
        const handler = (event: Event) => {\r
          const id = (event as CustomEvent<{ id?: string }>).detail?.id;\r
          if (!id) return;\r
          context.bus.emit("anchor:scrollToId", { id });\r
        };\r
        window.addEventListener("wf:anchor", handler);\r
        return () => window.removeEventListener("wf:anchor", handler);\r
      },\r
    },\r
  };\r
}\r
\r
export default createFeedStage({\r
  count: 30,\r
  seed: 4401,\r
  instrument: true,\r
  plugins: () => [\r
    createScrollAnchorPlugin<SeedCard>({ getAnchorId: (item) => item.id }),\r
    createAnchorBridgePlugin<SeedCard>(),\r
  ],\r
  coreProps: () => ({ columns: 3, gap: 12 }),\r
  chrome: (api) => (\r
    <div className="stage-anchors">\r
      <span>跳到第</span>\r
      {[0, 6, 12, 18, 24].map((i) => (\r
        <button\r
          key={i}\r
          type="button"\r
          onClick={() => {\r
            const item = api.items[i];\r
            if (!item) return;\r
            window.dispatchEvent(new CustomEvent("wf:anchor", { detail: { id: item.id } }));\r
            api.log(\`dispatch wf:anchor { id: "\${item.id}" } → 插件转成 bus → scrollToItem(\${i})\`);\r
          }}\r
        >\r
          #{i} 项\r
        </button>\r
      ))}\r
      <span className="muted">（走 window 事件 → bus → 插件）</span>\r
    </div>\r
  ),\r
});\r
`,Bk=`/**\r
 * 29 · DragReorder 插件\r
 *\r
 * HTML5 原生拖拽：松手时把 from/to 交给页面，**数组怎么改由页面决定**，插件不碰数据。\r
 *\r
 * 装配要点：onReorder 要改组件 state，所以 withPlugins 必须在 useMemo 里（不能放模块顶层）——\r
 * 这里的 createFeedStage 内部就是 useMemo，等价写法。\r
 */\r
import { createDragReorderPlugin } from "vane-waterfall/custom-plugins";\r
import { createFeedStage } from "./stages/feed";\r
import type { DemoMeta } from "./types";\r
import type { SeedCard } from "../data/seed";\r
\r
function move<T>(list: T[], from: number, to: number): T[] {\r
  const next = list.slice();\r
  const [picked] = next.splice(from, 1);\r
  next.splice(to, 0, picked);\r
  return next;\r
}\r
\r
export const meta: DemoMeta = {\r
  slug: "drag-reorder",\r
  title: "DragReorder 插件",\r
  group: "plugin",\r
  plugin: "DragReorderPlugin",\r
  intro: "拖一张卡到别的位置，松手后数组真的变了。",\r
  why: "书签墙、看板、排序自定义：用户直接拖比「上移/下移」按钮直观得多。",\r
  plugs: [\r
    {\r
      fn: "createDragReorderPlugin",\r
      cfg: "showHandle: true, onReorder: (from, to) => setItems((prev) => move(prev, from, to))",\r
      why: "鼠标走 HTML5 draggable、触屏走长按 + pointer，把起止索引交回来；数据变更完全由页面掌控",\r
    },\r
  ],\r
  props: ["columns={3}", "containerStyle={{ height: 420 }}"],\r
  note: "showHandle 只是「虚线手柄」，接真实版式时关掉。插件不写 localStorage 也不调接口 —— 落库要自己在 onReorder 里做。鼠标走原生 HTML5 拖拽；触屏上 \`draggable\` 根本不触发，所以另有 pointer 路径（长按 180ms 进入拖拽，可用 touchHoldMs 调）。",\r
};\r
\r
export default createFeedStage({\r
  count: 18,\r
  seed: 4501,\r
  instrument: true,\r
  plugins: (api) => [\r
    createDragReorderPlugin<SeedCard>({\r
      showHandle: true,\r
      onReorder: (from, to, item) => {\r
        api.setItems((prev) => move(prev, from, to));\r
        api.log(\`拖拽 #\${from} → #\${to}（\${item?.title ?? "未知项"}），数组已重排\`);\r
      },\r
    }),\r
  ],\r
  coreProps: () => ({ columns: 3, gap: 12 }),\r
  chrome: () => (\r
    <p className="stage-tip">\r
      鼠标：拖卡片右上角手柄 · 触屏：长按卡片 180ms 后拖动 —— 松手后看位置与顺序变化\r
    </p>\r
  ),\r
});\r
`,Uk=`/**
 * 30 · A11y 插件
 *
 * 给容器补 role / aria-label，给项补 role / tabIndex。开「检查 DOM 属性」直接读真实节点，
 * 比文档里写「会加 role=list」有说服力。
 */
import { createA11yPlugin } from "vane-waterfall/custom-plugins";
import { createFeedStage } from "./stages/feed";
import type { DemoMeta } from "./types";

export const meta: DemoMeta = {
  slug: "a11y",
  title: "A11y 插件",
  group: "plugin",
  plugin: "A11yPlugin",
  intro: "容器 role=list、项 role=listitem，一键读出来验证。",
  why: "瀑布流本质是列表，但 div 堆出来的结构对读屏软件等于不存在。这个插件把语义补齐，成本极低。",
  plugs: [
    {
      fn: "createA11yPlugin",
      cfg: 'containerRole: "list", itemRole: "listitem", containerLabel: "示例卡片列表", enableTabIndex: false',
      why: "在 onMount / onLayoutComplete 里写语义属性（不是渲染期副作用），项用 renderItemWrapper 包一层",
    },
  ],
  props: ["columns={3}", "containerStyle={{ height: 420 }}"],
  note: "enableTabIndex 打开后每张卡都能 Tab 到，键盘可达但 Tab 会很累 —— 除非卡片真的可操作，否则保持关闭，用 roving tabindex 更好。",
};

export default createFeedStage({
  count: 16,
  seed: 4601,
  instrument: true,
  plugins: () => [
    createA11yPlugin({
      containerRole: "list",
      itemRole: "listitem",
      containerLabel: "示例卡片列表",
      enableTabIndex: false,
    }),
  ],
  coreProps: () => ({ columns: 3, gap: 12 }),
  chrome: (api) => (
    <div className="stage-a11y">
      <button
        type="button"
        onClick={() => {
          const box = api.ref.current?.getContainer();
          if (!box) {
            api.log("容器还没挂载", "warn");
            return;
          }
          const first = box.querySelector<HTMLElement>("[data-index]");
          api.log(\`容器 role="\${box.getAttribute("role") ?? "无"}" aria-label="\${box.getAttribute("aria-label") ?? "无"}"\`);
          api.log(
            \`首项 role="\${first?.getAttribute("role") ?? "无"}" tabIndex="\${first?.getAttribute("tabindex") ?? "无"}"\`
          );
        }}
      >
        检查 DOM 属性
      </button>
      <span className="muted">结果写到右栏日志</span>
    </div>
  ),
});
`,Gk=`/**
 * 31 · ReducedMotion 插件
 *
 * 检测 \`prefers-reduced-motion: reduce\`，命中后关掉 transform 定位与 CSS 过渡。
 * 这页把 TransitionPlugin 一起装上，然后显示两件事：系统的偏好是什么、当前过渡有没有被清掉。
 *
 * 不是「冲突」，是预期行为 —— 但很多人会以为动效坏了。
 *
 * 插件会监听 \`matchMedia\` 的 \`change\`：用户在系统设置里改完偏好，过渡效果立刻生效，
 * 不用刷新页面。定位方式（useTransform）是 props 层的，要等下一次重渲染才切过来。
 */
import React from "react";
import { createReducedMotionPlugin, createTransitionPlugin } from "vane-waterfall/custom-plugins";
import { createFeedStage } from "./stages/feed";
import type { DemoMeta } from "./types";

function prefersReduce(): boolean {
  return typeof window !== "undefined" && window.matchMedia("(prefers-reduced-motion: reduce)").matches;
}

/**
 * 偏好读数 + 复检。
 *
 * 单独抽成组件是因为它要 useState：\`chrome\` 是纯渲染函数，没有 hook 可用，
 * 而「系统偏好变了」不会让页面重渲染 —— 只能靠按钮或自己订阅 change 来刷新读数。
 * （项上的过渡是插件自己管的，这里刷新的只是这行文字。）
 */
function ReduceProbe() {
  const [, setTick] = React.useState(0);
  const reduce = prefersReduce();
  return (
    <div className="stage-stats">
      <p className="stage-tip">
        系统偏好 reduce motion：<b>{reduce ? "是 → 过渡已清掉" : "否 → 过渡生效（240ms）"}</b>
      </p>
      <button type="button" onClick={() => setTick((n) => n + 1)}>
        重新检测
      </button>
    </div>
  );
}

export const meta: DemoMeta = {
  slug: "reduced-motion",
  title: "ReducedMotion 插件",
  group: "plugin",
  plugin: "ReducedMotionPlugin",
  intro: "系统开了「减少动态效果」，过渡与 transform 自动关掉。",
  why: "前庭功能障碍用户会被大幅位移的动画伤到。这不是可选项 —— 尊重系统偏好是基本无障碍要求。",
  plugs: [
    {
      fn: "createReducedMotionPlugin",
      cfg: "disableTransform: true, removeTransitions: true",
      why: "读 matchMedia，命中后关掉过渡与 transform 定位",
    },
    {
      fn: "createTransitionPlugin",
      cfg: "duration: 240",
      why: "装在这里是为了被 ReduceMotion 关掉 —— 用来验证它真的生效",
    },
  ],
  props: ["columns={3}", "containerStyle={{ height: 420 }}"],
  note: "两个插件同开不是冲突：ReducedMotion 的 priority(65) 更高，会先执行并清掉过渡。验证方法：改系统设置，或在 DevTools 里模拟 prefers-reduced-motion；运行中切换会即时生效（插件监听 matchMedia 的 change），但定位方式要等下一次重渲染才切过来。",
};

export default createFeedStage({
  count: 26,
  seed: 4701,
  instrument: true,
  plugins: () => [
    createReducedMotionPlugin({ disableTransform: true, removeTransitions: true }),
    createTransitionPlugin({ duration: 240 }),
  ],
  coreProps: () => ({ columns: 3, gap: 12 }),
  chrome: () => <ReduceProbe />,
});
`,Vk=`/**
 * 32 · Transition 插件
 *
 * 给每项加 transform / opacity 过渡，重排时位置不瞬移。
 * 点「打乱顺序」把数据随机重排 —— 有过渡时卡片是滑过去的，没有时是瞬移。
 *
 * 顺带提醒：自动化量几何（比如场景库的体检）要么等过渡结束再量，要么把它关掉，
 * 否则会量到中间态。
 */
import { createTransitionPlugin } from "vane-waterfall/custom-plugins";
import { createFeedStage } from "./stages/feed";
import type { DemoMeta } from "./types";

export const meta: DemoMeta = {
  slug: "transition",
  title: "Transition 插件",
  group: "plugin",
  plugin: "TransitionPlugin",
  intro: "打乱顺序，看卡片是滑过去还是瞬移。",
  why: "筛选、排序、拖拽后布局会大幅变化，没有过渡会显得「闪一下」；加上 200–300ms 就顺了。",
  plugs: [
    {
      fn: "createTransitionPlugin",
      cfg: 'duration: {{duration}}, easing: "cubic-bezier(.22,.61,.36,1)"',
      why: "只加 CSS 过渡（transform / opacity），不参与布局计算",
    },
  ],
  props: ["columns={3}", "containerStyle={{ height: 420 }}"],
  note: "把 duration 拖到 0 就等于关掉。过渡期间 item 的 transform 是中间值，用 transform 读位置的工具会读到中间态。",
  controls: [
    { key: "duration", label: "duration（ms）", kind: "number", init: 260, min: 0, max: 800, step: 20 },
  ],
};

export default createFeedStage({
  count: 24,
  seed: 4801,
  instrument: true,
  plugins: (api) => [createTransitionPlugin({ duration: Number(api.cfg.duration) })],
  coreProps: () => ({ columns: 3, gap: 12 }),
  chrome: (api) => (
    <div className="stage-anchors">
      <button
        type="button"
        onClick={() => {
          api.setItems((prev) => {
            const next = prev.slice();
            for (let i = next.length - 1; i > 0; i--) {
              const j = Math.floor(Math.random() * (i + 1));
              [next[i], next[j]] = [next[j], next[i]];
            }
            return next;
          });
          api.log(\`打乱顺序（过渡 \${Number(api.cfg.duration)}ms）\`);
        }}
      >
        打乱顺序
      </button>
      <span className="muted">duraton 拖到 0 再点一次，就是瞬移</span>
    </div>
  ),
});
`,Kk=`/**
 * 33 · PinItem 插件
 *
 * 把指定项钉在某一列顶部，普通项落到该列且低于置顶块时自动下推。
 * 1.x 里这个插件是彻底空转的（逻辑全压在 calculateItemPosition 上，而旧 Core 没有执行点），
 * 所以这页也顺带是「旧 bug 已修」的现场证据。
 */
import { createPinItemPlugin } from "vane-waterfall/custom-plugins";
import { createFeedStage } from "./stages/feed";
import type { DemoMeta } from "./types";

export const meta: DemoMeta = {
  slug: "pin-item",
  title: "PinItem 插件",
  group: "plugin",
  plugin: "PinItemPlugin",
  intro: "第 0、1 项钉在第 1 列顶部，普通项自动让位。",
  why: "「置顶公告 + 信息流」「推荐位固定在第一列」这类需求，用插件比把置顶内容塞进数据里干净。",
  plugs: [
    {
      fn: "createPinItemPlugin",
      cfg: "pinnedIndices: [0, 1], column: {{column}}",
      why: "在 calculateItemPosition 里把置顶项固定到指定列顶部，并下推同列普通项",
    },
  ],
  props: ["columns={3}", "containerStyle={{ height: 420 }}"],
  note: "置顶项索引要小（0..n）：如果置顶的索引大于该列已排好的项，只会把后续项往下推、已布局的不回退，视觉上会重叠。同一列多条置顶按数组顺序纵向下堆。",
  controls: [{ key: "column", label: "钉到第几列（0 基）", kind: "number", init: 0, min: 0, max: 2 }],
};

export default createFeedStage({
  count: 22,
  seed: 4901,
  instrument: true,
  plugins: (api) => [
    createPinItemPlugin({ pinnedIndices: [0, 1], column: Number(api.cfg.column) }),
  ],
  coreProps: () => ({ columns: 3, gap: 12 }),
  decorate: (api, _item, index) => ({ pinned: [0, 1].includes(index) && Number(api.cfg.column) >= 0 }),
  chrome: (api) => (
    <p className="stage-tip">
      置顶项：<b>#0 #1</b> · 钉在第 <b>{Number(api.cfg.column) + 1}</b> 列（角标写着「置顶」）
    </p>
  ),
});
`,Qk=`/**\r
 * 34 · HeatmapAnalytics 插件\r
 *\r
 * 统计每项曝光次数与点击次数，可选顶部汇总条。这里同时接了 Core 的 onItemEnterViewport，\r
 * 用来对照「插件统计到的曝光」和「Core 报的可见事件」是不是同一批。\r
 *\r
 * 曝光是瀑布流里最容易统计错的东西：一屏几十项、滚动时反复进出视口，\r
 * 直接在每个卡片里写 IntersectionObserver 会重复上报 —— 这就是这个插件存在的理由。\r
 */\r
import { createHeatmapAnalyticsPlugin } from "vane-waterfall/custom-plugins";\r
import { createFeedStage } from "./stages/feed";\r
import { FeedCard } from "../components/FeedCard";\r
import type { SeedCard } from "../data/seed";\r
import type { DemoMeta } from "./types";\r
\r
// 提到模块级：chrome 里的「导出」按钮要读同一份统计\r
const heatPlugin = createHeatmapAnalyticsPlugin<SeedCard>({ showOverlay: true });\r
\r
export const meta: DemoMeta = {\r
  slug: "heatmap-analytics",\r
  title: "HeatmapAnalytics 插件",\r
  group: "plugin",\r
  plugin: "HeatmapAnalyticsPlugin",\r
  intro: "滚一遍，顶部汇总条告诉你曝光了多少次、点了多少下。",\r
  why: "内容分发要看「哪些真的被看到了」，不是「哪些被加载了」。曝光埋点交给插件，业务侧只消费汇总。",\r
  plugs: [\r
    {\r
      fn: "createHeatmapAnalyticsPlugin",\r
      cfg: "showOverlay: true",\r
      why: "在项进入视口时累加曝光、点击时累加点击，并在 onLayoutComplete 补一次首屏统计",\r
    },\r
  ],\r
  props: ["columns={4}", "containerStyle={{ height: 420 }}"],\r
  note: "首屏曝光靠 onLayoutComplete 补一次，否则第一帧显示 0。真实上报要自己做去重与批次（插件只负责计数）——「导出 JSON」拿到的就是 \`getStats()\` 的形状：总曝光、总点击、每项明细。",\r
};\r
\r
export default createFeedStage({\r
  count: 36,\r
  seed: 5001,\r
  instrument: true,\r
  plugins: () => [heatPlugin],\r
  coreProps: (api) => {\r
    let seen = 0;\r
    return {\r
      columns: 4,\r
      gap: 10,\r
      onItemEnterViewport: (i: number) => {\r
        seen += 1;\r
        // 只记前 8 条，避免日志被曝光事件刷满\r
        if (seen <= 8) api.log(\`曝光 #\${i}（Core 的可见事件，插件也在数）\`, "info");\r
      },\r
    };\r
  },\r
  chrome: (api) => (\r
    <div className="stage-stats">\r
      <p className="stage-tip">滚一遍：顶部条是开关，卡片角上是单卡曝光/点击次数</p>\r
      <button\r
        type="button"\r
        onClick={() => {\r
          const stats = heatPlugin.getStats();\r
          api.log(\r
            \`getStats() → 曝光 \${stats.totalViews} / 点击 \${stats.totalClicks} / 有数据项 \${stats.items.length}\`,\r
          );\r
          void navigator.clipboard?.writeText(JSON.stringify(stats, null, 2)).catch(() => {});\r
        }}\r
      >\r
        导出 JSON\r
      </button>\r
    </div>\r
  ),\r
});\r
`,Yk=Object.assign({"./01-basic.tsx":vv,"./02-columns.tsx":Sv,"./03-gap.tsx":Pv,"./04-ref.tsx":Mv,"./05-lifecycle.tsx":Ev,"./06-advanced.tsx":Lv,"./07-responsive-columns.tsx":OS,"./08-auto-column.tsx":AS,"./09-alignment.tsx":FS,"./10-fixed-height.tsx":GS,"./11-gap-plugin.tsx":QS,"./12-virtual.tsx":XS,"./13-virtual-dynamic.tsx":eb,"./14-throttle.tsx":rb,"./15-debounce-layout.tsx":lb,"./16-recycle.tsx":ub,"./17-infinite-scroll.tsx":pb,"./18-pagination.tsx":gb,"./19-filter.tsx":vb,"./20-sort.tsx":Sb,"./21-search.tsx":Pb,"./22-click-analytics.tsx":Tb,"./23-bookmark.tsx":Ib,"./24-url-sync.tsx":Nb,"./25-state-persistence.tsx":Db,"./26-grouping.tsx":Wb,"./27-sticky-header.tsx":Bb,"./28-scroll-anchor.tsx":Kb,"./29-drag-reorder.tsx":Xb,"./30-a11y.tsx":ek,"./31-reduced-motion.tsx":ik,"./32-transition.tsx":ak,"./33-pin-item.tsx":dk,"./34-heatmap-analytics.tsx":mk}),qk=Object.assign({"./01-basic.tsx":gk,"./02-columns.tsx":hk,"./03-gap.tsx":yk,"./04-ref.tsx":vk,"./05-lifecycle.tsx":xk,"./06-advanced.tsx":wk,"./07-responsive-columns.tsx":Sk,"./08-auto-column.tsx":bk,"./09-alignment.tsx":kk,"./10-fixed-height.tsx":Pk,"./11-gap-plugin.tsx":Ck,"./12-virtual.tsx":_k,"./13-virtual-dynamic.tsx":Tk,"./14-throttle.tsx":Rk,"./15-debounce-layout.tsx":Mk,"./16-recycle.tsx":Ik,"./17-infinite-scroll.tsx":$k,"./18-pagination.tsx":Ek,"./19-filter.tsx":Nk,"./20-sort.tsx":jk,"./21-search.tsx":Lk,"./22-click-analytics.tsx":Ok,"./23-bookmark.tsx":Dk,"./24-url-sync.tsx":zk,"./25-state-persistence.tsx":Ak,"./26-grouping.tsx":Wk,"./27-sticky-header.tsx":Hk,"./28-scroll-anchor.tsx":Fk,"./29-drag-reorder.tsx":Bk,"./30-a11y.tsx":Uk,"./31-reduced-motion.tsx":Gk,"./32-transition.tsx":Vk,"./33-pin-item.tsx":Kk,"./34-heatmap-analytics.tsx":Qk}),Xk=e=>e.replace(/^\.\//,""),ms=Object.entries(Yk).map(([e,n])=>{const t=Xk(e);return{meta:n.meta,Stage:n.default,file:t,source:qk[e]??""}}).sort((e,n)=>e.file.localeCompare(n.file)),Jk=["basic","advanced","plugin"],UP=Array.from(new Set(ms.map(e=>e.meta.plugin).filter(e=>!!e))).sort(),gs={basic:{label:"基础功能",hint:"Core 自身的 props"},advanced:{label:"高级功能",hint:"ref / 事件 / 杂项配置"},plugin:{label:"插件功能",hint:"一插件一页"}};function pc(e){const n={};for(const t of e.controls??[])n[t.key]=t.init;return n}const Zk="import|from|export|default|function|return|const|let|var|new|if|else|for|of|in|while|switch|case|break|continue|type|interface|extends|implements|as|satisfies|await|async|throw|try|catch|finally|class|typeof|instanceof|delete|void|yield",eP="true|false|null|undefined|this|super",nP="number|string|boolean|object|any|unknown|never|React|HTMLElement|void",fc=new RegExp([String.raw`(\/\/[^\n]*|\/\*[\s\S]*?\*\/)`,String.raw`(\`(?:\\[\s\S]|[^\\\`])*\`|"(?:\\[\s\S]|[^\\"])*"|'(?:\\[\s\S]|[^\\'])*')`,String.raw`\b(${Zk})\b`,String.raw`\b(${eP})\b`,String.raw`\b(${nP})\b`,String.raw`(<\/?[A-Za-z][\w.$]*)`,String.raw`\b(\d+(?:\.\d+)?)\b`].join("|"),"g"),mc=["tok-comment","tok-string","tok-kw","tok-lit","tok-type","tok-tag","tok-num"];function tP(e){const n=[];let t=0;fc.lastIndex=0;let r;for(;r=fc.exec(e);){r.index>t&&n.push({text:e.slice(t,r.index),cls:null});const o=mc.findIndex((i,l)=>r[l+1]!==void 0);n.push({text:r[0],cls:o>=0?mc[o]:null}),t=r.index+r[0].length}return t<e.length&&n.push({text:e.slice(t),cls:null}),n}function gc(e){try{const n=document.createElement("textarea");n.value=e,n.setAttribute("readonly",""),n.style.position="fixed",n.style.opacity="0",document.body.appendChild(n),n.select();const t=document.execCommand("copy");return document.body.removeChild(n),t}catch{return!1}}function rP({code:e,title:n="tsx",collapseAfter:t=24,maxHeight:r}){const[o,i]=h.useState("idle"),[l,s]=h.useState(!1),a=h.useMemo(()=>e.replace(/\s+$/,"").split(`
`),[e]),u=t>0&&a.length>t,d=u&&!l?a.slice(0,t).join(`
`):e,c=h.useMemo(()=>tP(d),[d]),p=h.useCallback(async()=>{var x;let y=!1;if((x=navigator.clipboard)!=null&&x.writeText)try{await navigator.clipboard.writeText(e),y=!0}catch{y=gc(e)}else y=gc(e);i(y?"ok":"fail"),window.setTimeout(()=>i("idle"),1600)},[e]);return f.jsxs("div",{className:"code",children:[f.jsxs("div",{className:"code-head",children:[f.jsx("span",{children:n}),f.jsxs("span",{style:{display:"flex",gap:6,alignItems:"center"},children:[f.jsxs("span",{children:[a.length," 行"]}),f.jsx("button",{type:"button",className:`code-copy${o==="ok"?" is-ok":o==="fail"?" is-fail":""}`,onClick:p,children:o==="ok"?"已复制":o==="fail"?"复制失败":"复制"})]})]}),f.jsx("pre",{style:r?{maxHeight:r}:void 0,children:f.jsx("code",{children:c.map((y,x)=>y.cls?f.jsx("span",{className:y.cls,children:y.text},x):f.jsx(Tt.Fragment,{children:y.text},x))})}),u?f.jsx("button",{type:"button",className:"code-more",onClick:()=>s(y=>!y),children:l?"收起":`展开余下 ${a.length-t} 行`}):null]})}const oP=/\{\{\s*([\w-]+)\s*\}\}/g;function hc(e,n){return e.replace(oP,(t,r)=>r in n?String(n[r]):t)}function iP(e,n){const t=e.plugs.map(a=>a.fn).sort(),r=t.length>3,o=t.length?r?`import {
${t.map(a=>`  ${a},`).join(`
`)}
} from "vane-waterfall/custom-plugins";`:`import { ${t.join(", ")} } from "vane-waterfall/custom-plugins";`:"// 这一页只用 Core props，不需要任何插件",i=e.plugs.map(a=>`  ${a.fn}(${a.cfg?`{ ${hc(a.cfg,n)} }`:""}),`).join(`
`),l=e.props.filter(a=>typeof a=="string"||!a.when||a.when(n)).map(a=>`      ${hc(typeof a=="string"?a:a.text,n)}`).join(`
`),s=e.plugs.length?`const Waterfall = withPlugins(WaterfallCore, [
${i}
]);`:"const Waterfall = WaterfallCore;";return`// ${e.title} · 最小装配（照抄即可跑）
import { WaterfallCore, withPlugins } from "vane-waterfall";
${o}

type Item = { id: string; title: string; height: number };

${s}

export default function Demo({ items }: { items: Item[] }) {
  return (
    <Waterfall
      items={items}
      keyExtractor={(item) => item.id}
      renderItem={(item) => <Card item={item} />}
${l}
    />
  );
}
`}function lP({entry:e,order:n}){var w;const{meta:t,Stage:r,file:o,source:i}=e,[l,s]=h.useState(()=>pc(t)),[a,u]=h.useState([]),[d,c]=h.useState("minimal"),p=h.useCallback((S,g="event")=>{const m=new Date().toLocaleTimeString("zh-CN",{hour12:!1});u(v=>[{id:v.length+1,at:m,text:S,kind:g},...v].slice(0,60))},[]),y=h.useCallback((S,g)=>{s(m=>({...m,[S]:g}))},[]),x=h.useMemo(()=>iP(t,l),[t,l]);return f.jsxs("section",{className:"demo","data-demo":t.slug,children:[f.jsxs("header",{className:"demo-head",children:[f.jsxs("div",{className:"demo-folio",children:[f.jsx("span",{className:"demo-no",children:String(n).padStart(2,"0")}),f.jsx("em",{children:"plate"})]}),f.jsxs("div",{children:[f.jsxs("div",{className:"demo-title-row",children:[f.jsx("h2",{children:t.title}),f.jsx("span",{className:"demo-group",children:gs[t.group].label}),t.plugin?f.jsx("code",{className:"demo-plugin",children:t.plugin}):null]}),f.jsx("p",{className:"demo-intro",children:t.intro}),f.jsxs("p",{className:"demo-why",children:[f.jsx("b",{children:"什么时候用"}),t.why]})]}),f.jsxs("div",{className:"demo-meta",children:[f.jsxs("div",{className:"demo-meta-row",children:[f.jsx("span",{children:"file"}),f.jsx("b",{children:o})]}),f.jsxs("div",{className:"demo-meta-row",children:[f.jsx("span",{children:"group"}),f.jsx("b",{children:gs[t.group].label})]}),f.jsxs("div",{className:"demo-meta-row",children:[f.jsx("span",{children:"plugs"}),f.jsx("b",{children:t.plugs.length?`${t.plugs.length} installed`:"core only"})]})]})]}),(w=t.controls)!=null&&w.length?f.jsxs("div",{className:"demo-controls",children:[f.jsx(fv,{controls:t.controls,cfg:l,onChange:y}),f.jsx("button",{type:"button",className:"demo-reset",onClick:()=>{s(pc(t)),u([])},children:"重置"})]}):null,f.jsxs("div",{className:"demo-body",children:[f.jsxs("figure",{className:"plate",children:[f.jsxs("figcaption",{className:"plate-cap",children:[f.jsx("b",{children:"stage"}),f.jsxs("span",{children:[t.tone==="light"?"light surface":"live render",t.stageHeight?` · ${t.stageHeight}px`:""]}),f.jsx("em",{children:"live"})]}),f.jsx("div",{className:"plate-ruler","aria-hidden":!0}),f.jsx("div",{className:`plate-body demo-stage${t.tone==="light"?" tone-light":""}`,style:{"--stage-h":`${t.stageHeight??380}px`},children:f.jsx(r,{cfg:l,log:p,setCfg:y})})]}),f.jsxs("aside",{className:"demo-side",children:[f.jsx("div",{className:"demo-plugs",children:t.plugs.length===0?f.jsx("span",{className:"demo-plug is-core",children:"仅 Core props"}):t.plugs.map(S=>f.jsx("span",{className:`demo-plug${S.local?" is-local":""}`,children:S.fn.replace(/^create|Plugin$/g,"")},S.fn))}),f.jsx("ul",{className:"demo-why-list",children:t.plugs.map(S=>f.jsxs("li",{children:[f.jsx("code",{children:S.fn}),f.jsx("span",{children:S.why})]},S.fn))}),t.note?f.jsxs("p",{className:"demo-note",children:["⚠ ",t.note]}):null,f.jsx(Yp,{lines:a,empty:t.plugs.length>0?"还没触发 —— 拖上面的控件，或滚动 / 点卡片":"这一页没有事件类行为，日志留白"})]})]}),f.jsxs("div",{className:"demo-code",children:[f.jsxs("div",{className:"demo-switch",role:"tablist",children:[f.jsx("button",{type:"button",role:"tab","aria-selected":d==="minimal",className:d==="minimal"?"is-active":"",onClick:()=>c("minimal"),children:"最小装配"}),f.jsx("button",{type:"button",role:"tab","aria-selected":d==="full",className:d==="full"?"is-active":"",onClick:()=>c("full"),children:"完整源码"})]}),f.jsx(rP,{code:d==="minimal"?x:i,title:d==="minimal"?`${t.slug}.minimal.tsx`:o,collapseAfter:d==="minimal"?0:26,maxHeight:420},d)]})]})}const sP=`import type { WaterfallPlugin } from "../../components/WaterfallPlugin/plugins/types";

export type AlignmentMode = "shortest" | "balanced" | "sequential";

export type AlignmentConfig = {
  /** 列分配策略 */
  mode: AlignmentMode;
};

/**
 * AlignmentPlugin - 控制瀑布流列分配策略
 * 通过设置 props.alignmentMode 来影响核心布局算法的列选择逻辑
 */
export function createAlignmentPlugin<T = any>(config: AlignmentConfig): WaterfallPlugin<T> {
  return {
    name: "AlignmentPlugin",
    priority: 60,
    enabled: true,
    hooks: {
      transformProps: (props) => {
        return { ...props, alignmentMode: config.mode } as any;
      },
      onResize: (context) => {
        context.relayout?.();
      },
    },
  };
}
`,aP=`import type {
  WaterfallPlugin,
  WaterfallPluginContext,
} from "../../components/WaterfallPlugin/plugins/types";

export type AutoColumnConfig = {
  /** 每列最小宽度（含内容区，不含列间距） */
  minColumnWidth: number;
  /** 最大列数（可选） */
  maxColumns?: number;
  /** 最小列数（可选，默认 1） */
  minColumns?: number;
};

/**
 * AutoColumnPlugin - 按「容器可用宽度 ÷ 最小列宽」自动决定列数。
 *
 * 走 D1-A 布局钩子 \`calculateColumns\`：容器宽度与 padding / columnGap 都由 Core
 * 现算好传进来，不用再拿 window.innerWidth 近似（旧版那样在窄容器里会多排一列）。
 * 公式：columns = floor((available + columnGap) / (minColumnWidth + columnGap))
 */
export function createAutoColumnPlugin<T = any>(
  config: AutoColumnConfig
): WaterfallPlugin<T> {
  if (!(config.minColumnWidth > 0)) {
    throw new Error("[vane-waterfall] AutoColumnPlugin 需要正数的 minColumnWidth");
  }

  return {
    name: "AutoColumnPlugin",
    priority: 55,
    enabled: true,
    hooks: {
      calculateColumns: (context: WaterfallPluginContext<T>, containerWidth: number) => {
        const props = context.props;
        const columnGap = props.columnGap ?? props.gap ?? 0;
        const padding = props.padding;
        const horizontalPadding =
          typeof padding === "number"
            ? padding * 2
            : (padding?.left ?? 0) + (padding?.right ?? 0);

        const available = Math.max(0, containerWidth - horizontalPadding);
        if (!available) return props.columns ?? 1;

        const base = Math.max(
          1,
          Math.floor((available + columnGap) / (config.minColumnWidth + columnGap))
        );
        const minCols = Math.max(1, config.minColumns ?? 1);
        const maxCols = config.maxColumns ?? Number.POSITIVE_INFINITY;
        return Math.min(Math.max(base, minCols), maxCols);
      },
    },
  };
}
`,uP=`import type { WaterfallPlugin } from "../../components/WaterfallPlugin/plugins/types";

export type DebounceConfig = {
  /** 布局防抖延迟（ms） */
  delay: number;
};

/**
 * DebounceLayoutPlugin - 调整核心布局的防抖延迟
 */
export function createDebounceLayoutPlugin<T = any>(config: DebounceConfig): WaterfallPlugin<T> {
  return {
    name: "DebounceLayoutPlugin",
    priority: 75,
    enabled: true,
    hooks: {
      transformProps: (props) => {
        return { ...props, debounceDelay: config.delay } as any;
      },
    },
  };
}
`,cP=`import type { WaterfallPlugin } from "../../components/WaterfallPlugin/plugins/types";

export type FilterConfig<T = any> = {
  /** 初始筛选函数，可被 props.filterFn 覆盖 */
  predicate?: (item: T, index: number) => boolean;
  /** 条件变化后自动滚动到顶部 */
  scrollToTop?: boolean;
  /** 滚动行为（auto/smooth），仅在启用 scrollToTop 时生效 */
  scrollBehavior?: "auto" | "smooth";
};

/**
 * FilterPlugin - 基于筛选函数过滤 items
 * 优先使用 props.filterFn，其次使用创建插件时传入的 predicate
 */
export function createFilterPlugin<T = any>(config: FilterConfig<T> = {}): WaterfallPlugin<T> {
  return {
    name: "FilterPlugin",
    priority: 40,
    enabled: true,
    hooks: {
      transformProps: (props: any) => {
        const items: T[] = Array.isArray(props.items) ? props.items : [];
        const fn: ((item: T, index: number) => boolean) | undefined = props.filterFn || config.predicate;
        if (typeof fn !== "function") return props;
        const filtered = items.filter((it: T, idx: number) => {
          try {
            return !!fn(it, idx);
          } catch {
            return true;
          }
        });
        return { ...props, items: filtered } as any;
      },
      onPropsChange: (context, prevProps: any, nextProps: any) => {
        const prevFn = prevProps?.filterFn;
        const nextFn = nextProps?.filterFn;
        const enabledFromProps = typeof nextProps?.scrollToTopOnFilterChange === "boolean"
          ? nextProps.scrollToTopOnFilterChange
          : undefined;
        const shouldScroll = (enabledFromProps ?? Boolean(config.scrollToTop)) && prevFn !== nextFn;
        if (shouldScroll) {
          const behavior: "auto" | "smooth" = (nextProps?.scrollToTopBehavior as any) ?? config.scrollBehavior ?? "auto";
          context.scrollToTop?.({ behavior });
        }
      },
    },
  };
}
`,dP=`import type { WaterfallPlugin } from "../../components/WaterfallPlugin/plugins/types";

export type FixedHeightConfig = {
  /** 固定项高度（像素） */
  itemHeight: number;
};

/**
 * FixedHeightPlugin - 将所有项的高度统一为固定值（Grid风格）
 * 通过 transformProps 生成新的 items，使得 renderItem 使用统一高度
 */
export function createFixedHeightPlugin<T = any>(config: FixedHeightConfig): WaterfallPlugin<T> {
  return {
    name: "FixedHeightPlugin",
    priority: 45,
    enabled: true,
    hooks: {
      transformProps: (props) => {
        const { itemHeight } = config;
        const newItems = (props.items || []).map((item: any) => {
          // 仅在存在 height 字段时覆盖；否则保持原样
          if (typeof item === "object" && item !== null && "height" in item) {
            return { ...item, height: itemHeight };
          }
          return item;
        });
        return { ...props, items: newItems };
      },
      onResize: (context) => {
        context.relayout?.();
      },
    },
  };
}
`,pP=`import type {
  WaterfallPlugin,
  WaterfallPluginContext,
} from "../../components/WaterfallPlugin/plugins/types";

export type GapConfig = {
  /** 列间距（像素） */
  columnGap?: number;
  /** 行间距（像素） */
  rowGap?: number;
  /** 响应式：根据窗口宽度覆盖间距 */
  responsive?: {
    sm?: { columnGap?: number; rowGap?: number };
    md?: { columnGap?: number; rowGap?: number };
    lg?: { columnGap?: number; rowGap?: number };
    xl?: { columnGap?: number; rowGap?: number };
  };
};

/**
 * 按**容器宽度**选响应式档位。
 *
 * 旧实现读 \`window.innerWidth\`：容器比窗口窄时（侧栏、双栏、抽屉里）选错档 ——
 * 窗口 1400 但容器只有 700，仍然套 xl 的间距（P2-5）。
 */
function pickResponsive(
  config: GapConfig,
  width: number
): { columnGap?: number; rowGap?: number } {
  const r = config.responsive || {};
  if (width >= 1200 && r.xl) return r.xl;
  if (width >= 992 && r.lg) return r.lg;
  if (width >= 768 && r.md) return r.md;
  // sm 是「小屏档」，不是「兜底档」：早先这里无条件返回 sm，导致只配了 sm 时
  // 桌面端也被窄屏间距覆盖 —— 显式传进来的 columnGap / rowGap 永远不生效，
  // 调参时看着像插件没接上。
  if (width < 768 && r.sm) return r.sm;
  return {};
}

/**
 * GapPlugin - 控制瀑布流的列间距和行间距，支持响应式
 */
export function createGapPlugin<T = any>(config: GapConfig): WaterfallPlugin<T> {
  // transformProps 拿不到 context，容器宽度只能由钩子写进来
  let containerWidth = 0;
  let tierSignature = "";

  const syncWidth = (context: WaterfallPluginContext<T>) => {
    const width = context.containerRef?.current?.clientWidth ?? 0;
    if (width <= 0) return;
    const previousWidth = containerWidth;
    containerWidth = width;
    const signature = JSON.stringify(pickResponsive(config, width));
    if (previousWidth > 0 && signature !== tierSignature) {
      // props 没变但档位换了：请 HOC 重算 transformProps，
      // 否则间距会一直停在旧档（render 时 props 引用不变 → transformProps 缓存命中）
      context.bus?.emit("props:invalidate");
    }
    tierSignature = signature;
  };

  return {
    name: "GapPlugin",
    priority: 50,
    enabled: true,
    hooks: {
      transformProps: (props) => {
        const width =
          containerWidth > 0
            ? containerWidth
            : typeof window !== "undefined"
              ? window.innerWidth
              : 1024;
        const base = { columnGap: config.columnGap, rowGap: config.rowGap };
        const override = pickResponsive(config, width);
        const next = {
          columnGap: override.columnGap ?? base.columnGap ?? props.columnGap,
          rowGap: override.rowGap ?? base.rowGap ?? props.rowGap,
        };
        return { ...props, ...next };
      },
      onMount: (context) => {
        syncWidth(context);
      },
      onResize: (context) => {
        // 档位变化由 syncWidth 通过 props:invalidate 触发重排；
        // 档位没变时 Core 自己的 ResizeObserver 已经会重排，这里不再叠加一次
        syncWidth(context);
      },
    },
  };
}
`,fP=`import type {
  WaterfallCoreProps,
} from "../../components/WaterfallPlugin/WaterfallCore";
import type {
  WaterfallPlugin,
  WaterfallPluginContext,
} from "../../components/WaterfallPlugin/plugins/types";

export type InfiniteScrollConfig = {
  /** 距底部多少像素开始预加载，默认 300（≈ 半屏，滚到底时数据已就位） */
  threshold?: number;
  /** 加载回调；不给则读 \`props.onLoadMore\` */
  onLoadMore?: () => Promise<void> | void;
};

/**
 * InfiniteScrollPlugin - 滚动到距底阈值内触发加载更多。
 *
 * 与旧版的三处差别：
 *  1. 触发条件由 Core 的 \`reachBottomOffset\` 控制（旧版写死 100px，插件配 300 也不会提前触发）；
 *  2. 自带并发锁：上一次 onLoadMore 没 resolve 前不会重复触发（旧版每次滚动事件都会调）；
 *  3. \`context.hasMore === false\` 时直接停（配合页面 setState({ hasMore: false })）。
 */
export function createInfiniteScrollPlugin<T = any>(
  config: InfiniteScrollConfig = {}
): WaterfallPlugin<T> {
  const threshold = Math.max(1, config.threshold ?? 300);
  /**
   * 并发锁按**实例**隔离。
   *
   * 旧实现是工厂闭包里的一个 \`let loading\`：同一个插件对象被两个瀑布流复用
   * （或同一页面开了两个无限列表）时，A 在加载会把 B 也锁住（P2-2）。
   * key 用容器元素（天然一实例一个），容器还没挂时退回该实例独有的 bus。
   */
  const loadingByInstance = new WeakMap<object, boolean>();
  const instanceKey = (context: WaterfallPluginContext<T>): object =>
    (context.containerRef?.current as unknown as object) ?? (context.bus as unknown as object);

  return {
    name: "InfiniteScrollPlugin",
    priority: 35,
    enabled: true,
    hooks: {
      transformProps: (props: WaterfallCoreProps<T>) => ({
        ...props,
        reachBottomOffset: threshold,
      }),

      onReachBottom: async (context: WaterfallPluginContext<T>, distance: number) => {
        const key = instanceKey(context);
        if (loadingByInstance.get(key)) return;
        if (context.hasMore === false) return;
        if (distance > threshold) return;

        const onLoadMore = config.onLoadMore ?? context.props.onLoadMore;
        if (typeof onLoadMore !== "function") return;

        loadingByInstance.set(key, true);
        try {
          await Promise.resolve(onLoadMore());
        } finally {
          loadingByInstance.delete(key);
        }
      },

      onUnmount: (context) => {
        loadingByInstance.delete(instanceKey(context));
      },
    },
  };
}
`,mP=`import type { WaterfallPlugin } from "../../components/WaterfallPlugin/plugins/types";

export type PaginationConfig = {
  /** 每页数量 */
  pageSize?: number;
  /** 翻页后自动滚动到顶部 */
  scrollToTop?: boolean;
  /** 滚动行为（auto/smooth），仅在启用 scrollToTop 时生效 */
  scrollBehavior?: "auto" | "smooth";
};

/**
 * PaginationPlugin - 基于 props 中的 pageIndex/pageSize 对 items 进行分页切片
 * 支持通过 config.pageSize 设定默认每页数量
 */
export function createPaginationPlugin<T = any>(config: PaginationConfig = {}): WaterfallPlugin<T> {
  return {
    name: "PaginationPlugin",
    priority: 10,
    enabled: true,
    hooks: {
      transformProps: (props: any) => {
        // 统一采用 1 基页码：展示页码从 1 开始。
        // 非法输入（NaN / 小数 / 负数）先归一，否则 slice 会得到出人意料的结果
        const rawIndex = Number(props.pageIndex ?? 1);
        const pageIndex1: number = Math.max(
          1,
          Math.floor(Number.isFinite(rawIndex) ? rawIndex : 1)
        );
        const rawSize = Number(props.pageSize ?? config.pageSize ?? 20);
        const pageSize: number = Math.max(1, Math.floor(Number.isFinite(rawSize) ? rawSize : 20));
        const items: T[] = Array.isArray(props.items) ? props.items : [];
        // 页码越界（搜索后数据变少、深链带了合法范围外的页码）时钳到最后一页。
        // 旧实现直接 slice 出空数组，界面静默变成空列表，没有任何提示（P2-3）
        const pageCount = Math.max(1, Math.ceil(items.length / pageSize));
        const currentPage = Math.min(pageIndex1, pageCount);
        if (pageIndex1 > pageCount) {
          console.warn(
            \`[vane-waterfall] PaginationPlugin：pageIndex=\${pageIndex1} 超出总页数 \${pageCount}，已钳制到第 \${currentPage} 页\`
          );
        }
        const start = (currentPage - 1) * pageSize;
        const sliced = items.slice(start, start + pageSize);
        return { ...props, items: sliced } as any;
      },
      onPropsChange: (context, prevProps: any, nextProps: any) => {
        // 仅在页码变化时触发“滚动到顶部”逻辑
        const prevIndex = Math.max(1, Number(prevProps?.pageIndex ?? 1));
        const nextIndex = Math.max(1, Number(nextProps?.pageIndex ?? 1));
        const enabledFromProps = typeof nextProps?.scrollToTopOnPageChange === "boolean"
          ? nextProps.scrollToTopOnPageChange
          : undefined;
        const shouldScroll = (enabledFromProps ?? Boolean(config.scrollToTop)) && prevIndex !== nextIndex;
        if (shouldScroll) {
          const behavior: "auto" | "smooth" = (nextProps?.scrollToTopBehavior as any) ?? config.scrollBehavior ?? "auto";
          context.scrollToTop?.({ behavior });
        }
      },
    },
  };
}
`,gP=`import type {
  ItemPosition,
  WaterfallPlugin,
  WaterfallPluginContext,
} from "../../components/WaterfallPlugin/plugins/types";

export type PinItemConfig = {
  /** 要钉在顶部的项索引（建议用 0 起的小索引） */
  pinnedIndices: number[];
  /** 钉到第几列，默认 0（最左列） */
  column?: number;
};

/**
 * PinItemPlugin - 把指定项钉在顶部指定列，其余项从置顶块下方继续排。
 *
 * 旧版这里是个空转插件：全部逻辑压在 \`calculateItemPosition\` 上，而 Core 里
 * **没有任何地方执行这个钩子**（tasks/07 · 4.5 的死钩子清单），\`renderOverlay\`
 * 又返回 null —— 上线至今什么都没做。D1-A 把钩子接上后这里才是真的实现。
 *
 * 语义与限制（写在这里，避免变成"看起来能用"的坑）：
 *  - 置顶项在**同列普通项之前**被布局时最干净（通常 pinnedIndices 是 0..n）。
 *    若置顶项的索引大于该列已排好的项，它会按 floor 规则把后续项往下推，
 *    但已布局的项不会回退，视觉上会重叠。
 *  - 置顶项不参与列轮转，永远落在 \`config.column\`。
 *  - 同一列多条置顶按 pinnedIndices 顺序纵向堆叠。
 */
export function createPinItemPlugin<T = any>(config: PinItemConfig): WaterfallPlugin<T> {
  const pinned = new Set(config.pinnedIndices);
  const targetColumn = Math.max(0, config.column ?? 0);
  /** column → 置顶块底部（含 rowGap）；每次布局前清空 */
  const floorByColumn = new Map<number, number>();

  return {
    name: "PinItemPlugin",
    priority: 100,
    enabled: true,
    hooks: {
      onBeforeLayout: () => {
        floorByColumn.clear();
        return true;
      },

      calculateItemPosition: (
        context: WaterfallPluginContext<T>,
        index: number,
        itemHeight: number,
        base: ItemPosition
      ): Partial<ItemPosition> | void => {
        const rowGap = context.props.rowGap ?? context.props.gap ?? 0;

        if (!pinned.has(index)) {
          // 普通项：落在被置顶的那一列、且高于置顶块底部 → 推下去
          const floor = floorByColumn.get(base.column);
          if (floor !== undefined && base.y < floor) {
            return { y: floor };
          }
          return undefined;
        }

        const y = floorByColumn.get(targetColumn) ?? 0;
        floorByColumn.set(targetColumn, y + itemHeight + rowGap);

        // 只改 column、不自己算 x：换列后的 x 由 \`computeLayout\` 按**本轮**列宽补齐。
        // 早先这里用 \`base.width + columnGap\` 反推，而 columnGap 若由 GapPlugin 经
        // transformProps 注入，插件读到的是 undefined → x 整整少一个 columnGap。
        return {
          column: targetColumn,
          y,
          width: base.width,
          height: itemHeight,
          row: 0,
        };
      },
    },
  };
}
`,hP=`import type {
  WaterfallPlugin,
  WaterfallPluginContext,
} from "../../components/WaterfallPlugin/plugins/types";

export type RecycleConfig = {
  /** 视口外隐藏项以降低渲染压力（最大可见项数，近似控制） */
  poolSize: number;
};

/**
 * RecyclePlugin - 简化版 DOM 回收：
 * - 当项离开视口时，设置其元素为 \`visibility:hidden\`，减少绘制压力
 * - 当项进入视口时，恢复为 \`visibility:visible\`
 */
export function createRecyclePlugin<T = any>(config: RecycleConfig): WaterfallPlugin<T> {
  const visibleSet = new Set<number>();

  const ensurePoolLimit = (context: WaterfallPluginContext<T>) => {
    if (visibleSet.size <= config.poolSize) return;
    // 朴素策略：移除最早加入的项
    const first = visibleSet.values().next().value as number | undefined;
    if (typeof first === "number") {
      visibleSet.delete(first);
      // 被挤出池子的项必须一起隐藏：旧实现只删集合、元素仍是 visible，
      // 池子上限等于没生效（P2-4）
      const el = context.getItemRef(first);
      if (el) el.style.visibility = "hidden";
    }
  };

  return {
    name: "RecyclePlugin",
    enabled: true,
    hooks: {
      onItemEnterViewport: (context, index) => {
        const el = context.getItemRef(index);
        if (el) el.style.visibility = "visible";
        visibleSet.add(index);
        ensurePoolLimit(context);
      },
      onItemLeaveViewport: (context, index) => {
        const el = context.getItemRef(index);
        if (el) el.style.visibility = "hidden";
        visibleSet.delete(index);
      },
      onItemUnmount: (_ctx, index) => {
        visibleSet.delete(index);
      },
      onUnmount: () => {
        visibleSet.clear();
      },
    },
  };
}
`,yP=`import type { WaterfallPlugin } from "../../components/WaterfallPlugin/plugins/types";\r
\r
export type ReducedMotionConfig = {\r
  /** 当用户偏好减少动画时，是否禁用 transform 定位 */\r
  disableTransform?: boolean;\r
  /** 当用户偏好减少动画时，是否移除项过渡效果 */\r
  removeTransitions?: boolean;\r
};\r
\r
const QUERY = "(prefers-reduced-motion: reduce)";\r
\r
/**\r
 * ReducedMotionPlugin - 尊重系统的减少动画偏好\r
 *\r
 * 两条「为什么」值得记下来：\r
 *\r
 * 1. **只改 \`itemStyle\` 不够**：TransitionPlugin 这类插件会在 \`onItemMount\` / \`onLayout\`\r
 *    里直接写元素的 \`style.transition\`，内联样式晚于 \`itemStyle\` 生效。\`onLayoutComplete\`\r
 *    在全部 \`onLayout\` 之后执行，必须在这里再清一次才真的「没有过渡」。\r
 *\r
 * 2. **偏好要能运行时切换**：以前在工厂创建时把 \`mq.matches\` 求值存成常量，用户中途改\r
 *    系统设置必须刷新页面。现在监听 \`change\`，并且自己维护一份已挂载元素表 ——\r
 *    偏好变了并不会触发布局，插件没有别的入口能遍历到那些元素。\r
 *\r
 * 定位方式（\`useTransform\`）是 props 层的，运行时切换要等下一次重渲染才生效；\r
 * 过渡效果则是即时生效的。\r
 */\r
export function createReducedMotionPlugin<T = any>(\r
  config: ReducedMotionConfig = {}\r
): WaterfallPlugin<T> {\r
  const mq =\r
    typeof window !== "undefined" && typeof window.matchMedia === "function"\r
      ? window.matchMedia(QUERY)\r
      : null;\r
\r
  let prefersReduce = mq?.matches ?? false;\r
  const disableTransform = config.disableTransform ?? true;\r
  const removeTransitions = config.removeTransitions ?? true;\r
\r
  /** 已挂载的元素：系统偏好变化时没有布局发生，只能靠自己记着它们 */\r
  const mounted = new Map<number, HTMLElement>();\r
  /**\r
   * 被我们压过时长的元素 → 它原本的 \`transition-duration\`。\r
   *\r
   * 为什么要记原值：Chrome 会把 \`transition: transform 240ms ease\` 拆成\r
   * \`transition-property/timing-function/delay/duration\` 四条长属性存在 style 上，\r
   * 只 \`removeProperty("transition-duration")\` 会留下 \`transform, opacity\` 的其余部分，\r
   * 时长变回默认 0s —— 看着像「恢复失败」。\r
   */\r
  const savedDuration = new Map<HTMLElement, string>();\r
\r
  /**\r
   * 只压 \`transition-duration\`，不写 \`transition: none\`。\r
   *\r
   * 写简写会把 TransitionPlugin 的 \`transform 240ms ease, opacity 240ms ease\` 整条覆盖掉，\r
   * 等偏好撤销时就无从还原（删掉简写等于没有过渡）。压时长只覆盖「时长」这一项，\r
   * 撤销时把原值写回去即可。\r
   */\r
  const syncOne = (el: HTMLElement | null | undefined) => {\r
    if (!el || !removeTransitions) return;\r
    if (prefersReduce) {\r
      const current = el.style.transitionDuration;\r
      // 记「被压之前」的那个值：可能是空（没有过渡），也可能是 240ms\r
      if (current && current !== "0s") savedDuration.set(el, current);\r
      else if (!savedDuration.has(el)) savedDuration.set(el, current);\r
      el.style.setProperty("transition-duration", "0s");\r
    } else {\r
      const prev = savedDuration.get(el);\r
      if (prev === undefined) return;\r
      if (prev) el.style.setProperty("transition-duration", prev);\r
      else el.style.removeProperty("transition-duration");\r
      savedDuration.delete(el);\r
    }\r
  };\r
  const syncAll = () => mounted.forEach((el) => syncOne(el));\r
\r
  const onChange = (event: MediaQueryListEvent) => {\r
    if (event.matches === prefersReduce) return;\r
    prefersReduce = event.matches;\r
    syncAll();\r
  };\r
  mq?.addEventListener?.("change", onChange);\r
\r
  return {\r
    name: "ReducedMotionPlugin",\r
    priority: 70,\r
    enabled: true,\r
    hooks: {\r
      transformProps: (props) => {\r
        if (!prefersReduce) return props as any;\r
\r
        const next: any = { ...props };\r
        if (disableTransform) {\r
          next.useTransform = false;\r
        }\r
        if (removeTransitions) {\r
          // 同样只压时长：写 transition:none 会在偏好撤销后把别人的过渡一起弄丢\r
          next.itemStyle = { ...(props.itemStyle ?? {}), transitionDuration: "0s" };\r
        }\r
        return next;\r
      },\r
      onItemMount: (_context, index, element) => {\r
        mounted.set(index, element);\r
        syncOne(element);\r
      },\r
      onItemUnmount: (_context, index) => {\r
        mounted.delete(index);\r
      },\r
      onLayoutComplete: (context) => {\r
        // 在全部 onLayout 之后执行：把 TransitionPlugin 刚写上的内联过渡再清一次\r
        context.itemRefs.forEach((el, index) => {\r
          if (el) mounted.set(index, el);\r
          syncOne(el);\r
        });\r
      },\r
      onUnmount: () => {\r
        mq?.removeEventListener?.("change", onChange);\r
        mounted.clear();\r
        savedDuration.clear();\r
      },\r
    },\r
  };\r
}\r
`,vP=`import type {
  WaterfallPlugin,
  WaterfallPluginContext,
} from "../../components/WaterfallPlugin/plugins/types";

type Breakpoint = { width: number; columns: number };
type Breakpoints = Record<string, Breakpoint>;

type ResponsiveColumnsConfig = {
  /** 断点表：键名随意，按 width 升序匹配，命中哪档用哪档 */
  breakpoints: Breakpoints;
  /** 未命中任何断点时回退到几列（默认取 props.columns ?? 3） */
  fallbackColumns?: number;
};

/**
 * ResponsiveColumnsPlugin - 按断点表决定列数。
 *
 * 走 D1-A 布局钩子 \`calculateColumns\`：拿到的是**容器**宽度（不是 window.innerWidth），
 * 所以同一个组件嵌在侧边栏或全宽区域里都能算对。旧版走 transformProps + window 宽度，
 * 在「窄容器 + 宽视口」的组合下会给出偏大的列数。
 */
export function createResponsiveColumnsPlugin<T = any>(
  config: ResponsiveColumnsConfig
): WaterfallPlugin<T> {
  const list = Object.values(config.breakpoints).sort((a, b) => a.width - b.width);

  return {
    name: "ResponsiveColumnsPlugin",
    priority: 55,
    enabled: true,
    hooks: {
      calculateColumns: (context: WaterfallPluginContext<T>, containerWidth: number) => {
        const fallback = config.fallbackColumns ?? context.props.columns ?? 3;
        if (!containerWidth) return fallback;
        let columns = fallback;
        for (const bp of list) {
          if (containerWidth >= bp.width) columns = bp.columns;
        }
        return columns;
      },
    },
  };
}
`,xP=`import type { WaterfallPlugin } from "../../components/WaterfallPlugin/plugins/types";

export type SearchConfig<T = any> = {
  /** 要搜索的字段名列表（仅用于对象项） */
  fields?: (keyof T)[];
  /** 条件变化后自动滚动到顶部 */
  scrollToTop?: boolean;
  /** 滚动行为（auto/smooth），仅在启用 scrollToTop 时生效 */
  scrollBehavior?: "auto" | "smooth";
};

/**
 * SearchPlugin - 基于 props.searchQuery 对 items 执行包含匹配过滤
 * 仅在对象项中按指定字段进行大小写不敏感的包含匹配
 */
export function createSearchPlugin<T = any>(config: SearchConfig<T> = {}): WaterfallPlugin<T> {
  const fields = config.fields ?? [];
  return {
    name: "SearchPlugin",
    priority: 20,
    enabled: true,
    hooks: {
      transformProps: (props: any) => {
        const query: string = String(props.searchQuery ?? "").trim();
        const items: T[] = Array.isArray(props.items) ? props.items : [];
        if (!query) return props;
        const q = query.toLowerCase();
        const filtered = items.filter((item) => {
          if (typeof item !== "object" || item === null) return false;
          const keys = fields.length > 0 ? fields : (Object.keys(item) as (keyof T)[]);
          for (const k of keys) {
            const v = (item as any)[k];
            if (v != null && String(v).toLowerCase().includes(q)) return true;
          }
          return false;
        });
        return { ...props, items: filtered } as any;
      },
      onPropsChange: (context, prevProps: any, nextProps: any) => {
        const prevQuery = String(prevProps?.searchQuery ?? "");
        const nextQuery = String(nextProps?.searchQuery ?? "");
        const enabledFromProps = typeof nextProps?.scrollToTopOnSearchChange === "boolean"
          ? nextProps.scrollToTopOnSearchChange
          : undefined;
        const shouldScroll = (enabledFromProps ?? Boolean(config.scrollToTop)) && prevQuery !== nextQuery;
        if (shouldScroll) {
          const behavior: "auto" | "smooth" = (nextProps?.scrollToTopBehavior as any) ?? config.scrollBehavior ?? "auto";
          context.scrollToTop?.({ behavior });
        }
      },
    },
  };
}
`,wP=`import type { WaterfallPlugin } from "../../components/WaterfallPlugin/plugins/types";

export type SortConfig<T = any> = {
  /** 初始比较函数，可被 props.sortComparator 覆盖 */
  comparator?: (a: T, b: T) => number;
  /** 条件变化后自动滚动到顶部 */
  scrollToTop?: boolean;
  /** 滚动行为（auto/smooth），仅在启用 scrollToTop 时生效 */
  scrollBehavior?: "auto" | "smooth";
};

/**
 * SortPlugin - 基于比较函数对 items 排序
 * 优先使用 props.sortComparator，其次使用创建插件时传入的 comparator
 */
export function createSortPlugin<T = any>(config: SortConfig<T> = {}): WaterfallPlugin<T> {
  return {
    name: "SortPlugin",
    priority: 30,
    enabled: true,
    hooks: {
      transformProps: (props: any) => {
        const items: T[] = Array.isArray(props.items) ? props.items : [];
        const cmp: ((a: T, b: T) => number) | undefined = props.sortComparator || config.comparator;
        if (typeof cmp !== "function") return props;
        const sorted = [...items].sort((a, b) => {
          try {
            return cmp(a, b);
          } catch {
            return 0;
          }
        });
        return { ...props, items: sorted } as any;
      },
      onPropsChange: (context, prevProps: any, nextProps: any) => {
        const prevCmp = prevProps?.sortComparator;
        const nextCmp = nextProps?.sortComparator;
        const enabledFromProps = typeof nextProps?.scrollToTopOnSortChange === "boolean"
          ? nextProps.scrollToTopOnSortChange
          : undefined;
        const shouldScroll = (enabledFromProps ?? Boolean(config.scrollToTop)) && prevCmp !== nextCmp;
        if (shouldScroll) {
          const behavior: "auto" | "smooth" = (nextProps?.scrollToTopBehavior as any) ?? config.scrollBehavior ?? "auto";
          context.scrollToTop?.({ behavior });
        }
      },
    },
  };
}
`,SP=`import type {\r
  WaterfallPlugin,\r
  WaterfallPluginContext,\r
} from "../../components/WaterfallPlugin/plugins/types";\r
\r
export type StatePersistenceConfig = {\r
  /** 存储键（localStorage） */\r
  storageKey?: string;\r
  /** 是否持久化滚动位置 */\r
  persistScroll?: boolean;\r
  /** 是否持久化分页与查询（从 props 读取） */\r
  persistKeys?: string[]; // e.g. ["pageIndex", "pageSize", "searchQuery"]\r
};\r
\r
/**\r
 * StatePersistencePlugin - 状态快照与恢复（基础版）\r
 * - 挂载时尝试恢复快照；卸载时写入快照\r
 * - 快照包含：scrollTop（可选）与部分 props 键\r
 */\r
export function createStatePersistencePlugin<T = any>(config: StatePersistenceConfig = {}): WaterfallPlugin<T> {\r
  const key = config.storageKey || "waterfall-state";\r
  const persistScroll = config.persistScroll ?? true;\r
  const persistKeys = config.persistKeys || ["pageIndex", "pageSize", "searchQuery"];\r
  // 一次性注入标记：避免 transformProps 重复覆盖\r
  let initialInjected = false;\r
  /** 快照 schema 版本：旧版本（无 version 字段）结构不保证兼容，读到直接丢弃（P2-6） */\r
  const SCHEMA_VERSION = 1;\r
  /** 每个实例只恢复一次滚动（按容器/总线区分实例） */\r
  const restoredInstances = new WeakSet<object>();\r
  const instanceKey = (context: WaterfallPluginContext<T>): object =>\r
    (context.containerRef?.current as unknown as object) ?? (context.bus as unknown as object);\r
\r
  function read(): Record<string, any> | null {\r
    try {\r
      const raw = localStorage.getItem(key);\r
      if (!raw) return null;\r
      const parsed = JSON.parse(raw);\r
      if (!parsed || parsed.version !== SCHEMA_VERSION || typeof parsed.state !== "object") {\r
        return null;\r
      }\r
      return parsed.state;\r
    } catch {\r
      return null;\r
    }\r
  }\r
\r
  function write(data: Record<string, any>) {\r
    try {\r
      localStorage.setItem(key, JSON.stringify({ version: SCHEMA_VERSION, state: data }));\r
    } catch {}\r
  }\r
\r
  return {\r
    name: "StatePersistencePlugin",\r
    enabled: true,\r
    hooks: {\r
      // 首次渲染时，尽量将本地快照中的分页/查询键注入到 props，便于核心按恢复后的状态渲染\r
      transformProps: (props) => {\r
        if (initialInjected) return props;\r
        const snap = read();\r
        if (!snap) return props;\r
        const next: Record<string, any> = { ...props };\r
        let changed = false;\r
        persistKeys.forEach((k) => {\r
          if (snap[k] !== undefined) {\r
            next[k] = snap[k];\r
            changed = true;\r
          }\r
        });\r
        if (changed) initialInjected = true;\r
        return next as typeof props;\r
      },\r
      onMount: (context) => {\r
        const snap = read();\r
        if (!snap) return;\r
        // 滚动位置**不在这里恢复**：onMount 时内容总高还是 0，\r
        // scrollTo 会被钳到 0，看起来像「恢复没生效」。等首次布局完成再恢复（见下）\r
        // 广播持久化的键，便于页面采用\r
        const restored: Record<string, any> = {};\r
        persistKeys.forEach((k) => {\r
          if (snap[k] !== undefined) restored[k] = snap[k];\r
        });\r
        if (Object.keys(restored).length > 0) {\r
          context.bus?.emit("state:restored", restored);\r
          // 同步广播到全局，方便页面级状态订阅恢复事件（不需页面直接读取 localStorage）\r
          if (typeof window !== "undefined") {\r
            try {\r
              window.dispatchEvent(new CustomEvent("waterfall:state-restored", { detail: restored }));\r
            } catch {}\r
          }\r
        }\r
      },\r
      onLayoutComplete: (context) => {\r
        if (!persistScroll) return;\r
        const key = instanceKey(context);\r
        if (restoredInstances.has(key)) return;\r
        const snap = read();\r
        const top = Number(snap?.scrollTop ?? 0);\r
        if (!Number.isFinite(top) || top <= 0) {\r
          restoredInstances.add(key);\r
          return;\r
        }\r
        const el = context.containerRef.current;\r
        if (!el) return;\r
        // 布局完成 → 内容总高已按真实位置提交，此时 scrollTo 不会被钳住\r
        el.scrollTo({ top, behavior: "auto" });\r
        restoredInstances.add(key);\r
      },\r
      // props 变化时，增量更新快照（立即持久化分页/查询键）\r
      onPropsChange: (_context, _prev, nextProps) => {\r
        const snap = read() || {};\r
        const data: Record<string, any> = { ...snap };\r
        // 按字符串键取值：persistKeys 是运行时数组，无法在类型层收窄到 keyof props\r
        const source = (nextProps ?? {}) as unknown as Record<string, unknown>;\r
        persistKeys.forEach((k) => {\r
          const v = source[k];\r
          if (v !== undefined) data[k] = v;\r
        });\r
        // 保留已有的 scrollTop，不在此处覆盖\r
        write(data);\r
      },\r
      onUnmount: (context) => {\r
        const data: Record<string, any> = {};\r
        if (persistScroll) {\r
          data.scrollTop = context.containerRef.current?.scrollTop || 0;\r
        }\r
        const source = (context.props ?? {}) as unknown as Record<string, unknown>;\r
        persistKeys.forEach((k) => {\r
          const v = source[k];\r
          if (v !== undefined) data[k] = v;\r
        });\r
        write(data);\r
      },\r
    },\r
  };\r
}\r
`,bP=`import type { WaterfallPlugin } from "../../components/WaterfallPlugin/plugins/types";

export type ThrottleConfig = {
  /** 滚动节流（ms） */
  scroll: number;
  /** 尺寸变化防抖（ms），用于容器 Resize 相关 */
  resize?: number;
};

/**
 * ThrottlePlugin - 通过 transformProps 调整核心的滚动节流与尺寸变化防抖
 */
export function createThrottlePlugin<T = any>(config: ThrottleConfig): WaterfallPlugin<T> {
  return {
    name: "ThrottlePlugin",
    priority: 80,
    enabled: true,
    hooks: {
      transformProps: (props) => {
        return {
          ...props,
          throttleDelay: config.scroll,
          debounceDelay: config.resize ?? props.debounceDelay,
        } as any;
      },
    },
  };
}
`,kP=`import type { WaterfallPlugin } from "../../components/WaterfallPlugin/plugins/types";

export type TransitionConfig = {
  /** 过渡时长（ms） */
  duration?: number;
  /** 过渡缓动 */
  easing?: string;
};

/**
 * TransitionPlugin - 布局变化过渡
 * - 为项元素应用 transform/opacity 的过渡，提升布局更新的视觉平滑度
 */
export function createTransitionPlugin<T = any>(
  config: TransitionConfig = {}
): WaterfallPlugin<T> {
  const duration = config.duration ?? 300;
  const easing = config.easing ?? "ease";

  return {
    name: "TransitionPlugin",
    priority: 65,
    enabled: true,
    hooks: {
      onItemMount: (context, _index, element) => {
        element.style.transition = \`transform \${duration}ms \${easing}, opacity \${duration}ms \${easing}\`;
      },
      onLayout: (context) => {
        // 为现有项补充过渡样式
        context.itemRefs.forEach((el) => {
          if (el) {
            el.style.transition = \`transform \${duration}ms \${easing}, opacity \${duration}ms \${easing}\`;
          }
        });
      },
    },
  };
}
`,PP=`import type { WaterfallPlugin } from "../../components/WaterfallPlugin/plugins/types";\r
\r
export type URLSyncConfig = {\r
  /** URL 同步使用 hash 还是 search（默认 hash） */\r
  mode?: "hash" | "search";\r
  /** 需要同步的键列表（从 props 读取） */\r
  keys?: string[]; // e.g. ["pageIndex", "pageSize", "searchQuery", "sortKey", "filterValue"]\r
};\r
\r
/**\r
 * URLSyncPlugin - 将部分状态同步到 URL（基础版）\r
 * - 监听 props 变化，更新 URL\r
 * - 初次挂载时读取 URL 并向 bus 广播（页面可据此设置状态）\r
 */\r
export function createURLSyncPlugin<T = any>(config: URLSyncConfig = {}): WaterfallPlugin<T> {\r
  const mode = config.mode || "hash";\r
  const keys = config.keys || ["pageIndex", "pageSize", "searchQuery"];\r
  /** 首次读到的 URL 快照：既用于注入 props，也用于判断「这次 props 变化要不要写 URL」 */\r
  let initialParams: Record<string, any> | null = null;\r
  let initialInjected = false;\r
  const getInitialParams = (): Record<string, any> => {\r
    if (initialParams === null) initialParams = readFromURL();\r
    return initialParams;\r
  };\r
\r
  function readFromURL() {\r
    try {\r
      if (mode === "hash") {\r
        const hash = window.location.hash || "";\r
        const idx = hash.indexOf("?");\r
        const paramStr = idx >= 0 ? hash.slice(idx + 1) : hash.replace(/^#/, "");\r
        const params = new URLSearchParams(paramStr);\r
        const state: Record<string, any> = {};\r
        keys.forEach((k) => {\r
          const v = params.get(k);\r
          if (v !== null) state[k] = v;\r
        });\r
        return state;\r
      } else {\r
        const params = new URLSearchParams(window.location.search);\r
        const state: Record<string, any> = {};\r
        keys.forEach((k) => {\r
          const v = params.get(k);\r
          if (v !== null) state[k] = v;\r
        });\r
        return state;\r
      }\r
    } catch {\r
      return {};\r
    }\r
  }\r
\r
  function writeToURL(next: Record<string, any>) {\r
    try {\r
      const params = new URLSearchParams();\r
      keys.forEach((k) => {\r
        const v = next[k];\r
        if (v !== undefined && v !== null && String(v).length > 0) {\r
          params.set(k, String(v));\r
        }\r
      });\r
      const str = params.toString();\r
      if (mode === "hash") {\r
        const rawHash = window.location.hash || "";\r
        const withoutSharp = rawHash.replace(/^#/, "");\r
        const pathPart = withoutSharp.split("?")[0] || ""; // 保留现有路由路径\r
        const newHash = \`#\${pathPart}\${str ? \`?\${str}\` : ""}\`;\r
        if (rawHash !== newHash) {\r
          history.replaceState(\r
            null,\r
            "",\r
            \`\${window.location.pathname}\${window.location.search}\${newHash}\`\r
          );\r
        }\r
      } else {\r
        const base = window.location.pathname + (str ? \`?\${str}\` : "");\r
        const full = base + (window.location.hash || "");\r
        history.replaceState(null, "", full);\r
      }\r
    } catch {}\r
  }\r
\r
  return {\r
    name: "URLSyncPlugin",\r
    enabled: true,\r
    hooks: {\r
      // 首次渲染就把 URL 里的值注入 props：旧实现只广播 \`urlsync:init\`，\r
      // 页面不手动订阅时深链参数根本不会生效（「只写不读」，P2-6）\r
      transformProps: (props) => {\r
        if (initialInjected) return props;\r
        const initial = getInitialParams();\r
        const next: Record<string, any> = { ...props };\r
        let changed = false;\r
        keys.forEach((k) => {\r
          if (initial[k] !== undefined) {\r
            next[k] = initial[k];\r
            changed = true;\r
          }\r
        });\r
        if (changed) initialInjected = true;\r
        return next as typeof props;\r
      },\r
      onMount: (context) => {\r
        context.bus?.emit("urlsync:init", getInitialParams());\r
      },\r
      onPropsChange: (context, _prev, nextProps) => {\r
        const next: Record<string, any> = {};\r
        // 按字符串键取值：keys 是运行时数组，只读基本可序列化的值\r
        const source = (nextProps ?? {}) as unknown as Record<string, unknown>;\r
        keys.forEach((k) => {\r
          const v = source[k];\r
          if (v !== undefined) next[k] = v;\r
        });\r
        const initial = getInitialParams();\r
        // props 与 URL 现状一致（典型是挂载后的首次 props 变化）时不重写：\r
        // 旧实现会在这时把默认值写进 URL，把深链里没被消费的参数冲掉（P2-6）\r
        const differs = keys.some(\r
          (k) => String(next[k] ?? "") !== String(initial[k] ?? "")\r
        );\r
        if (!differs) return;\r
        writeToURL(next);\r
      },\r
    },\r
  };\r
}\r
`,CP=`import type {
  WaterfallPlugin,
  WaterfallPluginContext,
} from "../../components/WaterfallPlugin/plugins/types";

export type A11yConfig = {
  /** 为容器设置 ARIA role（默认 list） */
  containerRole?: string;
  /** 为项设置 ARIA role（默认 listitem） */
  itemRole?: string;
  /** 是否给项添加 tabindex 便于键盘焦点（默认 true） */
  enableTabIndex?: boolean;
  /** 容器 aria-label（默认 "Waterfall list"） */
  containerLabel?: string;
};

/**
 * A11yPlugin - 可访问性增强：容器 / 项的 ARIA 语义 + 键盘聚焦。
 *
 * 与旧版的两处差别：
 *  1. 容器属性改在 \`onMount\` / \`onLayoutComplete\` 里写。旧版写在 \`renderOverlay\`
 *     里——那是渲染期副作用，React 并发渲染下可能被丢弃或执行多次；
 *  2. \`renderItemWrapper\` 的签名统一成 \`(context, node, index)\`。旧版写的是
 *     \`(context, content, index)\`，而 DragReorder 写的是 \`(context, index, item, children)\`，
 *     同一个钩子两套参数顺序，靠"谁先装"决定传入什么，属于隐蔽的错位 bug。
 */
export function createA11yPlugin<T = any>(config: A11yConfig = {}): WaterfallPlugin<T> {
  const containerRole = config.containerRole ?? "list";
  const itemRole = config.itemRole ?? "listitem";
  const enableTabIndex = config.enableTabIndex ?? true;
  const containerLabel = config.containerLabel ?? "Waterfall list";

  /**
   * roving tabindex：只有「当前项」是 tab 停靠点（0），其余为 -1。
   *
   * 旧实现给每一项都挂 \`tabIndex=0\`，一个列表按 Tab 要穿行几十次才能走到后面的控件；
   * 同时又写了 \`outline:none\`，键盘用户完全看不见焦点（P2-9）。
   */
  const rovingByInstance = new WeakMap<object, number>();
  const instanceKey = (context: WaterfallPluginContext<T>): object =>
    (context.containerRef?.current as unknown as object) ?? (context.bus as unknown as object);
  const getRovingIndex = (context: WaterfallPluginContext<T>): number =>
    rovingByInstance.get(instanceKey(context)) ?? 0;

  const decorateContainer = (context: WaterfallPluginContext<T>) => {
    const container = context.containerRef.current;
    if (!container) return;
    container.setAttribute("role", containerRole);
    container.setAttribute("aria-label", containerLabel);
    container.setAttribute("aria-busy", context.isLayouting ? "true" : "false");
  };

  return {
    name: "A11yPlugin",
    enabled: true,
    hooks: {
      onMount: (context) => {
        decorateContainer(context);
      },
      onLayoutComplete: (context) => {
        decorateContainer(context);
      },
      onItemClick: (context, index) => {
        // 点击后把 tab 停靠点挪过去（键盘用户随后按 Tab 从这一项继续）
        if (getRovingIndex(context) !== index) {
          rovingByInstance.set(instanceKey(context), index);
          context.forceUpdate?.();
        }
      },
      renderItemWrapper: (context, node, index) => (
        <div
          role={itemRole}
          aria-posinset={index + 1}
          // 渲染集合的项数（虚拟化下是当前挂载集合），与 aria-posinset 出自同一集合
          aria-setsize={context.itemCount}
          tabIndex={enableTabIndex ? (index === getRovingIndex(context) ? 0 : -1) : undefined}
        >
          {node}
        </div>
      ),
    },
  };
}
`,_P=`import type { WaterfallPlugin } from "../../components/WaterfallPlugin/plugins/types";

export type BookmarkConfig = {
  /** localStorage 键名 */
  storageKey?: string;
  /** 滚动行为 */
  scrollBehavior?: "auto" | "smooth";
};

/**
 * BookmarkPlugin - 位置书签（键盘快捷键）
 * - 按下 'b' 保存当前滚动位置到 localStorage
 * - 按下 'r' 恢复到保存位置
 * - 忽略输入框/可编辑元素中的按键
 */
export function createBookmarkPlugin<T = any>(config: BookmarkConfig = {}): WaterfallPlugin<T> {
  const storageKey = config.storageKey || "waterfall-bookmark";
  const behavior: "auto" | "smooth" = config.scrollBehavior || "smooth";

  const isEditableTarget = (el: EventTarget | null): boolean => {
    const target = el as HTMLElement | null;
    if (!target) return false;
    const tag = target.tagName?.toLowerCase();
    const editable = (target.getAttribute && target.getAttribute("contenteditable")) === "true";
    return tag === "input" || tag === "textarea" || editable;
  };

  return {
    name: "BookmarkPlugin",
    enabled: true,
    hooks: {
      onMount: (context) => {
        const handler = (e: KeyboardEvent) => {
          if (isEditableTarget(e.target)) return;
          const key = (e.key || "").toLowerCase();
          const code = e.code || "";
          if (key === "b" || code === "KeyB") {
            // 优先使用容器滚动位置；否则退回页面滚动位置
            const container = context.containerRef?.current || null;
            let top = 0;
            if (container && container.scrollHeight > container.clientHeight) {
              top = container.scrollTop;
            } else {
              top = window.pageYOffset
                || document.documentElement.scrollTop
                || document.body.scrollTop
                || 0;
            }
            try {
              localStorage.setItem(storageKey, String(Math.max(0, top)));
            } catch {}
          } else if (key === "r" || code === "KeyR") {
            let saved = 0;
            try {
              const raw = localStorage.getItem(storageKey) || "0";
              saved = Math.max(0, Number(raw) || 0);
            } catch {}
            const container = context.containerRef?.current || null;
            if (container && container.scrollHeight > container.clientHeight) {
              container.scrollTo({ top: saved, behavior });
            } else {
              window.scrollTo({ top: saved, behavior });
            }
          }
        };

        // 捕获阶段只在 window 上监听一次：document 上的按键会冒泡到 window，
        // 双注册会让同一次按键执行两遍（保存两次 / 平滑滚动被打断，P2-6）
        window.addEventListener("keydown", handler, { capture: true });

        return () => {
          window.removeEventListener("keydown", handler, { capture: true });
        };
      },
    },
  };
}
`,TP=`import type {
  WaterfallPlugin,
  WaterfallPluginContext,
} from "../../components/WaterfallPlugin/plugins/types";

export type ClickAnalyticsConfig = {
  /** 是否在控制台打印每次点击（默认 false） */
  log?: boolean;
  /** 是否显示右上角计数角标（默认 false，生产版式应关闭） */
  showOverlay?: boolean;
};

/** \`getStats()\` 的返回形状：够平，直接 \`JSON.stringify\` 就能上报 */
export type ClickAnalyticsStats = {
  total: number;
  /** \`index\` 是该 key 最近一次出现时的下标；数据被排序 / 分页后以 \`key\` 为准 */
  byIndex: Array<{ index: number; key: string; clicks: number }>;
};

/**
 * ClickAnalyticsPlugin - 点击分析（基础版）
 * - 统计点击次数，向 bus 发送事件：analytics:click
 * - 可选控制台输出日志
 * - \`getStats()\` 把内存里的计数吐出来，方便接到自己的上报通道
 */
export function createClickAnalyticsPlugin<T = any>(
  config: ClickAnalyticsConfig = {}
): WaterfallPlugin<T> & { getStats: () => ClickAnalyticsStats } {
  const { log = false, showOverlay = false } = config;
  /**
   * 按**稳定 key** 计数，不按 index。
   *
   * 排序 / 筛选 / 分页之后同一个下标可能已经是另一条数据，按 index 统计会把点击
   * 算到别的项头上（P2-8）。key 取 \`keyExtractor\` 的结果，取不到才退回 index。
   */
  const clicks = new Map<string, number>();
  const indexByKey = new Map<string, number>();
  let lastItems: unknown[] | null = null;
  const total = () => Array.from(clicks.values()).reduce((a, b) => a + b, 0);

  const keyOf = (context: WaterfallPluginContext<T>, item: T, index: number): string => {
    try {
      const key = context.props?.keyExtractor?.(item, index);
      if (key !== undefined && key !== null) return String(key);
    } catch {
      /* 消费方的 keyExtractor 抛错不影响埋点 */
    }
    return \`#\${index}\`;
  };

  /** 数据集被替换（新数组）时清零：旧计数对应的已经不是这批数据了 */
  const syncDataset = (context: WaterfallPluginContext<T>) => {
    const items = context.items;
    if (lastItems === null || items !== lastItems) {
      lastItems = items;
      clicks.clear();
      indexByKey.clear();
      context.sharedData?.set("click-count", 0);
    }
  };

  return {
    name: "ClickAnalyticsPlugin",
    enabled: true,
    getStats: () => ({
      total: total(),
      byIndex: Array.from(clicks.entries())
        .map(([key, count]) => ({
          index: indexByKey.get(key) ?? 0,
          key,
          clicks: count,
        }))
        .sort((a, b) => a.index - b.index || a.key.localeCompare(b.key)),
    }),
    hooks: {
      onMount: (context) => {
        context.sharedData?.set("click-count", total());
      },
      onLayoutComplete: (context) => {
        syncDataset(context);
      },
      onItemClick: (context, index, item, event) => {
        syncDataset(context);
        const key = keyOf(context, item, index);
        indexByKey.set(key, index);
        const next = (clicks.get(key) ?? 0) + 1;
        clicks.set(key, next);
        const sum = total();
        context.sharedData?.set("click-count", sum);
        context.bus?.emit("analytics:click", { index, key, item, event, total: sum });
        // 计数只存在闭包 Map 里，宿主不会因为「点了一下」重渲染；
        // 不主动请求一次，\`renderOverlay\` 要等到下次布局 / 滚动才重算，
        // 表现就是「点了数字不动，一滚动才跳变」。
        context.forceUpdate?.();
        if (log) {
          // 基本日志输出，避免过多信息
          console.log(\`[ClickAnalytics] item=\${index} total=\${sum}\`);
        }
      },
      renderOverlay: (context) => {
        if (!showOverlay) return null;
        const total = context.sharedData?.get("click-count") || 0;
        return (
          <div
            style={{
              position: "absolute",
              top: 12,
              right: 12,
              padding: "10px 12px",
              background: "#222",
              color: "#fff",
              borderRadius: 8,
              fontSize: 14,
              fontWeight: 600,
              boxShadow: "0 4px 12px rgba(0,0,0,0.25)",
              border: "1px solid rgba(255,255,255,0.15)",
              pointerEvents: "none",
              zIndex:99
            }}
          >
            点击次数：{total}
            <div style={{ fontSize: 12, fontWeight: 400, opacity: 0.85, marginTop: 4 }}>
              提示：点击任意卡片观察计数变化
            </div>
          </div>
        );
      },
    },
  };
}
`,RP=`import type {
  WaterfallPlugin,
  WaterfallPluginContext,
} from "../../components/WaterfallPlugin/plugins/types";

export type DragReorderConfig<T = any> = {
  /** 是否启用（默认 true） */
  enabled?: boolean;
  /**
   * 松手时的重排回调。插件只负责"拖"与"从哪到哪"，
   * 数组怎么改由调用方决定（就地 splice / 走接口 / 写回 store）。
   */
  onReorder?: (from: number, to: number, item: T | undefined) => void;
  /** 是否显示虚线边框提示可拖（默认 false，接入真实版式时基本都要关） */
  showHandle?: boolean;
  /**
   * 触屏长按多久进入拖拽（ms，默认 180）。
   *
   * 触摸设备上 \`draggable\` 不生效，必须走 pointer 事件；但 pointer 一动就是滚动，
   * 所以用「长按」区分「想滚」和「想拖」。设 0 则不需要长按。
   */
  touchHoldMs?: number;
};

/** 拖动中的目标项高亮用的属性名（CSS 侧 \`[data-drag-over]\`） */
const OVER_ATTR = "data-drag-over";

/** 从坐标反查落在哪个 item 上（核心容器的项带 data-index） */
function indexAtPoint(x: number, y: number): number | null {
  if (typeof document === "undefined") return null;
  const hit = document.elementFromPoint(x, y) as HTMLElement | null;
  const host = hit?.closest?.("[data-index]") as HTMLElement | null;
  if (!host) return null;
  const index = Number(host.getAttribute("data-index"));
  return Number.isFinite(index) ? index : null;
}

/**
 * DragReorderPlugin - 拖拽重排。
 *
 * 两条输入路径，各管一半设备：
 *  - **鼠标**：原生 HTML5 \`dragstart/dragover/drop\`。别改它，改成 pointer 反而会
 *    和 Core 的滚动、文本选择打架；
 *  - **触屏 / 触控笔**：\`pointerdown\` + 长按（默认 180ms）进入拖拽，移动时用
 *    \`elementFromPoint\` 找落点。触摸设备上 \`draggable\` 根本不触发，旧版因此在手机上完全失效。
 *
 * 旧版还有个大坑：只把 from/to 写进 sharedData 就结束了，\`onReorder\` 不存在，
 * 页面拿不到任何回调（注释里写着"占位：仅记录"）。这里补上真回调。
 */
export function createDragReorderPlugin<T = any>(
  config: DragReorderConfig<T> = {}
): WaterfallPlugin<T> {
  const enabled = config.enabled ?? true;
  const showHandle = config.showHandle ?? false;
  const touchHoldMs = config.touchHoldMs ?? 180;

  const handleDrop = (context: WaterfallPluginContext<T>, to: number, raw: string) => {
    const from = Number(raw);
    if (!Number.isFinite(from) || from === to) return;
    context.sharedData.set("drag-from", from);
    context.sharedData.set("drag-to", to);
    context.bus.emit("drag:reorder", { from, to });
    const items = context.props.items as T[] | undefined;
    config.onReorder?.(from, to, items?.[from]);
  };

  /** 清掉拖拽高亮 */
  const clearOver = () => {
    document.querySelectorAll(\`[\${OVER_ATTR}]\`).forEach((el) => el.removeAttribute(OVER_ATTR));
  };

  /** 清掉高亮与拖拽期间的样式副作用 */
  const clearVisual = () => {
    if (typeof document === "undefined") return;
    clearOver();
    document.body.style.userSelect = "";
    document.body.style.cursor = "";
  };

  const beginPointerDrag = (
    event: React.PointerEvent,
    index: number,
    context: WaterfallPluginContext<T>
  ) => {
    // 鼠标交给上面的 HTML5 路径：两条都开会在拖拽开始时互相打断
    if (event.pointerType === "mouse") return;

    const startX = event.clientX;
    const startY = event.clientY;
    const startedAt = Date.now();
    let active = false;
    let lastOver: number | null = null;

    const onMove = (e: PointerEvent) => {
      if (!active) {
        // 触摸必须先满足「长按」：否则一滑就变成拖拽，页面滚不动
        const held = Date.now() - startedAt >= touchHoldMs;
        const moved = Math.hypot(e.clientX - startX, e.clientY - startY) >= 6;
        if (!held || !moved) return;
        active = true;
        document.body.style.userSelect = "none";
        document.body.style.cursor = "grabbing";
      }
      e.preventDefault();
      const over = indexAtPoint(e.clientX, e.clientY);
      if (over === lastOver) return;
      clearOver();
      lastOver = over;
      if (over != null) {
        const host = document.querySelector(\`[data-index="\${over}"]\`);
        host?.setAttribute(OVER_ATTR, "");
      }
    };

    const onUp = (e: PointerEvent) => {
      window.removeEventListener("pointermove", onMove);
      window.removeEventListener("pointerup", onUp);
      window.removeEventListener("pointercancel", onUp);
      clearVisual();
      if (!active) return;
      const over = indexAtPoint(e.clientX, e.clientY);
      if (over != null) handleDrop(context, over, String(index));
    };

    window.addEventListener("pointermove", onMove, { passive: false });
    window.addEventListener("pointerup", onUp);
    window.addEventListener("pointercancel", onUp);
  };

  return {
    name: "DragReorderPlugin",
    enabled,
    hooks: {
      renderItemWrapper: (context, node, index) => {
        if (!enabled) return node;
        return (
          <div
            draggable
            onDragStart={(event: React.DragEvent) => {
              event.dataTransfer?.setData("text/plain", String(index));
              context.sharedData.set("drag-from", index);
            }}
            onDragOver={(event: React.DragEvent) => {
              // 不 preventDefault 就不会触发 drop
              event.preventDefault();
            }}
            onDragEnter={() => {
              const host = document.querySelector(\`[data-index="\${index}"]\`);
              host?.setAttribute(OVER_ATTR, "");
            }}
            onDragLeave={() => {
              const host = document.querySelector(\`[data-index="\${index}"]\`);
              host?.removeAttribute(OVER_ATTR);
            }}
            onDrop={(event: React.DragEvent) => {
              event.preventDefault();
              clearVisual();
              handleDrop(context, index, event.dataTransfer?.getData("text/plain") ?? "");
            }}
            onDragEnd={clearVisual}
            // 触屏路径：移动端 HTML5 拖拽不触发，只能自己实现
            onPointerDown={(event: React.PointerEvent) => beginPointerDrag(event, index, context)}
            style={{
              cursor: "grab",
              ...(showHandle ? { border: "1px dashed #bdbdbd", borderRadius: 6 } : null),
            }}
          >
            {node}
          </div>
        );
      },
    },
  };
}
`,MP=`import type {
  WaterfallPlugin,
  WaterfallPluginContext,
} from "../../components/WaterfallPlugin/plugins/types";

export type GroupingConfig<T = any> = {
  /** 分组函数，返回组键（默认取 item.category） */
  groupBy?: (item: T, index: number) => string | number;
  /** 是否显示分组统计角标（默认 false） */
  showOverlay?: boolean;
};

const KEY = "GROUPS";
/** index → 组键：吸顶条据此显示「当前可见项」所属的分组（见 StickyHeaderPlugin） */
const INDEX_KEY = "GROUP_INDEX";

/**
 * GroupingPlugin - 按字段把项分组，结果写进 \`sharedData.get("GROUPS")\`。
 *
 * 旧版只在 \`onPropsChange\` 里算，而挂载时不会触发 props 变化 → **首屏永远拿不到分组**，
 * 吸顶条只能显示写死的标题。这里改成挂载即算，并在 items 变化与布局完成时重算，
 * 同时把结果 emit 出去（\`grouping:change\`），页面不用轮询 sharedData。
 */
export function createGroupingPlugin<T = any>(
  config: GroupingConfig<T> = {}
): WaterfallPlugin<T> {
  const groupBy =
    config.groupBy ?? ((item: any) => item?.category ?? "default");
  const showOverlay = config.showOverlay ?? false;

  /** 上一次的输入集合：items 引用不变就不重算（onLayoutComplete 每次布局都会调到这里，P2-7） */
  let cachedItems: unknown[] | null = null;
  let cachedGroups: Map<string | number, number[]> | null = null;

  const sameGroups = (a: Map<string | number, number[]>, b: Map<string | number, number[]>) => {
    if (a.size !== b.size) return false;
    for (const [key, list] of a) {
      const other = b.get(key);
      if (!other || other.length !== list.length) return false;
    }
    return true;
  };

  const compute = (context: WaterfallPluginContext<T>) => {
    // 用「渲染集合」而不是原始 props：分页 / 筛选 / 排序之后，分组必须跟着渲染结果走
    const items = context.items ?? [];
    if (cachedGroups && cachedItems === items) return cachedGroups;

    const groups = new Map<string | number, number[]>();
    const indexMap = new Map<number, string | number>();
    items.forEach((item, index) => {
      const key = groupBy(item as T, index);
      indexMap.set(index, key);
      if (!groups.has(key)) groups.set(key, []);
      groups.get(key)!.push(index);
    });

    const changed = cachedGroups ? !sameGroups(groups, cachedGroups) : true;
    cachedItems = items;
    cachedGroups = groups;
    context.sharedData.set(KEY, groups);
    context.sharedData.set(INDEX_KEY, indexMap);
    // 结果没变就不 emit：旧实现每次布局都广播一次，订阅方跟着做无意义的重渲染（P2-7）
    if (changed && groups.size > 0) context.bus.emit("grouping:change", { groups });
    return groups;
  };

  return {
    name: "GroupingPlugin",
    enabled: true,
    hooks: {
      onMount: (context) => {
        compute(context);
      },
      onLayoutComplete: (context) => {
        compute(context);
      },
      onPropsChange: (context) => {
        compute(context);
      },
      renderOverlay: (context) => {
        if (!showOverlay) return null;
        const groups: Map<string | number, number[]> =
          context.sharedData.get(KEY) ?? new Map();
        if (groups.size === 0) return null;
        const entries = Array.from(groups.entries()).slice(0, 3);
        return (
          <div
            style={{
              position: "absolute",
              top: 12,
              left: 12,
              zIndex: 99,
              background: "#111827",
              color: "#fff",
              padding: "10px 12px",
              borderRadius: 8,
              boxShadow: "0 4px 12px rgba(0,0,0,0.25)",
              border: "1px solid rgba(255,255,255,0.15)",
              minWidth: 150,
              fontSize: 12,
              pointerEvents: "none",
            }}
          >
            <div style={{ opacity: 0.85, marginBottom: 6 }}>分组：{groups.size} 组</div>
            {entries.map(([key, list]) => (
              <div key={String(key)}>
                {String(key)} · {list.length} 项
              </div>
            ))}
          </div>
        );
      },
    },
  };
}
`,IP=`import type {
  WaterfallPlugin,
  WaterfallPluginContext,
} from "../../components/WaterfallPlugin/plugins/types";

export type HeatmapAnalyticsConfig = {
  /** 是否显示顶部统计汇总条（默认 false） */
  showOverlay?: boolean;
  /** 别名：示例页使用的 showOverlaySummary */
  showOverlaySummary?: boolean;
};

/**
 * \`getStats()\` 的返回形状：每项的曝光 / 点击次数。
 *
 * 只列「有数据」的项 —— 上千项时把全零项也吐出来没有意义。
 */
export type HeatmapAnalyticsStats = {
  totalViews: number;
  totalClicks: number;
  /** \`index\` 是该 key 最近一次出现时的下标；排序 / 分页后以下标对齐统计并不可靠 */
  items: Array<{ index: number; key: string; views: number; clicks: number }>;
};

/**
 * HeatmapAnalyticsPlugin - 点击/曝光热力分析（基础版）
 * - 统计每项进入视口次数与点击次数
 * - 可选在顶部显示统计摘要叠层
 * - \`getStats()\` 把内存里的统计吐出来，方便接到自己的上报通道
 */
export function createHeatmapAnalyticsPlugin<T = any>(
  config: HeatmapAnalyticsConfig = {}
): WaterfallPlugin<T> & { getStats: () => HeatmapAnalyticsStats } {
  const showOverlay = (config.showOverlay ?? config.showOverlaySummary) ?? false;

  /** 按稳定 key 计数：排序 / 分页后同一 index 可能已是另一条数据（P2-8） */
  const views = new Map<string, number>();
  const clicks = new Map<string, number>();
  const indexByKey = new Map<string, number>();
  let initialCountDone = false;
  let lastItems: unknown[] | null = null;

  const sum = (m: Map<string, number>) =>
    Array.from(m.values()).reduce((a, b) => a + b, 0);

  const keyOf = (context: WaterfallPluginContext<T>, item: T, index: number): string => {
    try {
      const key = context.props?.keyExtractor?.(item, index);
      if (key !== undefined && key !== null) return String(key);
    } catch {
      /* 消费方的 keyExtractor 抛错不影响埋点 */
    }
    return \`#\${index}\`;
  };

  /**
   * 数据集被替换：清空统计并把首屏曝光计数复位。
   *
   * 旧实现的 \`initialCountDone\` 是工厂级闭包且从不复位 —— 换了数据以后首屏曝光
   * 一次都不会再计（表现为换页后曝光总计不涨，P2-8）。
   */
  const syncDataset = (context: WaterfallPluginContext<T>) => {
    const items = context.items;
    if (lastItems === null || items !== lastItems) {
      lastItems = items;
      views.clear();
      clicks.clear();
      indexByKey.clear();
      initialCountDone = false;
    }
  };

  return {
    name: "HeatmapAnalyticsPlugin",
    enabled: true,
    getStats: () => {
      const keys = new Set([...views.keys(), ...clicks.keys()]);
      return {
        totalViews: sum(views),
        totalClicks: sum(clicks),
        items: Array.from(keys)
          .map((key) => ({
            index: indexByKey.get(key) ?? 0,
            key,
            views: views.get(key) ?? 0,
            clicks: clicks.get(key) ?? 0,
          }))
          .sort((a, b) => a.index - b.index || a.key.localeCompare(b.key)),
      };
    },
    hooks: {
      onLayoutComplete: (context) => {
        syncDataset(context);
        // 首次布局完成后，统计当前可见范围的曝光，避免首次渲染为 0
        if (initialCountDone) return;
        const { start, end } = context.visibleRange;
        const items = context.items;
        for (let i = start; i <= end; i++) {
          const item = items[i];
          if (item === undefined) continue;
          const key = keyOf(context, item as T, i);
          indexByKey.set(key, i);
          views.set(key, (views.get(key) || 0) + 1);
        }
        initialCountDone = true;
      },
      onItemEnterViewport: (context, index) => {
        syncDataset(context);
        const item = context.items[index];
        if (item === undefined) return;
        const key = keyOf(context, item as T, index);
        indexByKey.set(key, index);
        views.set(key, (views.get(key) || 0) + 1);
      },
      onItemClick: (context, index, item) => {
        syncDataset(context);
        const key = keyOf(context, item, index);
        indexByKey.set(key, index);
        clicks.set(key, (clicks.get(key) || 0) + 1);
        // 同 ClickAnalytics：统计只在闭包里，不请求重渲染的话顶部汇总条
        // 要等到下次布局 / 滚动才更新
        context.forceUpdate?.();
      },
      renderOverlay: () => {
        if (!showOverlay) return null;
        const totalViews = Array.from(views.values()).reduce((a, b) => a + b, 0);
        const totalClicks = Array.from(clicks.values()).reduce((a, b) => a + b, 0);

        return (
          <div
            style={{
              position: "sticky",
              top: 0,
              zIndex: 100,
              display: "flex",
              gap: 12,
              alignItems: "center",
              padding: "6px 10px",
              background: "rgba(0,0,0,0.6)",
              color: "white",
              borderRadius: 8,
              fontSize: 12,
              marginBottom: 8,
            }}
          >
            <span>曝光总计: {totalViews}</span>
            <span>点击总计: {totalClicks}</span>
          </div>
        );
      },
    },
  };
}
`,$P=`import type { WaterfallPlugin } from "../../components/WaterfallPlugin/plugins/types";

export type ScrollAnchorConfig<T = any> = {
  /** 通过此函数提取锚点 id（默认使用 item.id） */
  getAnchorId?: (item: T, index: number) => string | number | undefined;
};

/**
 * ScrollAnchorPlugin - 滚动锚点（实验版）
 * - 渲染一个简单的锚点跳转控件
 * - 支持通过 bus 事件 anchor:scrollToId 跳转
 */
export function createScrollAnchorPlugin<T = any>(config: ScrollAnchorConfig<T> = {}): WaterfallPlugin<T> {
  const getAnchorId = config.getAnchorId || ((item: any) => item?.id);
  let unsubscribe: (() => void) | undefined;
  return {
    name: "ScrollAnchorPlugin",
    enabled: true,
    hooks: {
      onMount: (context) => {
        unsubscribe = context.bus?.on("anchor:scrollToId", (payload: { id: string | number }) => {
          const items = context.props?.items || [];
          const targetIndex = items.findIndex((it, idx) => getAnchorId(it, idx) === payload.id);
          if (targetIndex >= 0) {
            context.scrollToItem?.(targetIndex, { behavior: "smooth", block: "start" });
          }
        });
      },
      onUnmount: () => unsubscribe?.(),
    },
  };
}
`,EP=`import type { WaterfallPlugin } from "../../components/WaterfallPlugin/plugins/types";

export type StickyHeaderConfig = {
  /** 标题文案（默认 "分组标题"） */
  title?: string;
  /** 是否显示「向下滚动观察」提示（默认 false） */
  showHint?: boolean;
};

/**
 * StickyHeaderPlugin - 吸顶标题（实验版）
 * - 简化实现：始终显示一个吸顶条，可与 GroupingPlugin 联动
 */
export function createStickyHeaderPlugin<T = any>(config: StickyHeaderConfig = {}): WaterfallPlugin<T> {
  const title = config.title || "分组标题";
  const showHint = config.showHint ?? false;
  return {
    name: "StickyHeaderPlugin",
    enabled: true,
    hooks: {
      renderOverlay: (context) => {
        const groups: Map<string | number, number[]> =
          context.sharedData?.get("GROUPS") || new Map();
        const indexMap: Map<number, string | number> | undefined =
          context.sharedData?.get("GROUP_INDEX");
        // 吸顶条跟着「当前可见的第一个项」所属分组走；旧实现恒取第一个组，
        // 滚到后面的分组时标题一直不变（P2-7）
        const start = context.visibleRange?.start ?? 0;
        const activeKey = indexMap?.get(start);
        const firstKey =
          activeKey ??
          (groups.size > 0 ? Array.from(groups.keys())[0] : undefined);
        return (
          <div
            style={{
              position: "sticky",
              top: 0,
              zIndex: 20,
              background: "#111827",
              color: "#fff",
              borderBottom: "1px solid rgba(255,255,255,0.15)",
              boxShadow: "0 4px 12px rgba(0,0,0,0.15)",
              padding: "10px 14px",
              fontSize: 15,
              fontWeight: 600,
            }}
          >
            {title} {firstKey !== undefined ? \`：\${String(firstKey)}\` : ""}
            {showHint ? (
              <span style={{ marginLeft: 8, fontSize: 12, opacity: 0.8 }}>
                向下滚动观察吸顶
              </span>
            ) : null}
          </div>
        );
      },
    },
  };
}
`,GP={layout:"布局",perf:"性能与动效",data:"数据管线",interaction:"交互与埋点",ui:"语义与状态"},yc=["layout","perf","data","interaction","ui"],vc=Object.assign({"/src/custom-plugins/A11yPlugin/doc.json":Lf,"/src/custom-plugins/AlignmentPlugin/doc.json":qp,"/src/custom-plugins/AutoColumnPlugin/doc.json":Jp,"/src/custom-plugins/BookmarkPlugin/doc.json":Wf,"/src/custom-plugins/ClickAnalyticsPlugin/doc.json":Cf,"/src/custom-plugins/DebounceLayoutPlugin/doc.json":df,"/src/custom-plugins/DragReorderPlugin/doc.json":Mf,"/src/custom-plugins/FilterPlugin/doc.json":hf,"/src/custom-plugins/FixedHeightPlugin/doc.json":of,"/src/custom-plugins/GapPlugin/doc.json":tf,"/src/custom-plugins/GroupingPlugin/doc.json":Df,"/src/custom-plugins/HeatmapAnalyticsPlugin/doc.json":Tf,"/src/custom-plugins/InfiniteScrollPlugin/doc.json":kf,"/src/custom-plugins/PaginationPlugin/doc.json":Sf,"/src/custom-plugins/PinItemPlugin/doc.json":sf,"/src/custom-plugins/RecyclePlugin/doc.json":Nf,"/src/custom-plugins/ReducedMotionPlugin/doc.json":ff,"/src/custom-plugins/ResponsiveColumnsPlugin/doc.json":ef,"/src/custom-plugins/ScrollAnchorPlugin/doc.json":$f,"/src/custom-plugins/SearchPlugin/doc.json":wf,"/src/custom-plugins/SortPlugin/doc.json":vf,"/src/custom-plugins/StatePersistencePlugin/doc.json":Ff,"/src/custom-plugins/StickyHeaderPlugin/doc.json":zf,"/src/custom-plugins/ThrottlePlugin/doc.json":uf,"/src/custom-plugins/TransitionPlugin/doc.json":gf,"/src/custom-plugins/URLSyncPlugin/doc.json":Uf}),NP=Object.assign({"/src/custom-plugins/AlignmentPlugin/create.ts":sP,"/src/custom-plugins/AutoColumnPlugin/create.ts":aP,"/src/custom-plugins/DebounceLayoutPlugin/create.ts":uP,"/src/custom-plugins/FilterPlugin/create.ts":cP,"/src/custom-plugins/FixedHeightPlugin/create.ts":dP,"/src/custom-plugins/GapPlugin/create.ts":pP,"/src/custom-plugins/InfiniteScrollPlugin/create.ts":fP,"/src/custom-plugins/PaginationPlugin/create.ts":mP,"/src/custom-plugins/PinItemPlugin/create.ts":gP,"/src/custom-plugins/RecyclePlugin/create.ts":hP,"/src/custom-plugins/ReducedMotionPlugin/create.ts":yP,"/src/custom-plugins/ResponsiveColumnsPlugin/create.ts":vP,"/src/custom-plugins/SearchPlugin/create.ts":xP,"/src/custom-plugins/SortPlugin/create.ts":wP,"/src/custom-plugins/StatePersistencePlugin/create.ts":SP,"/src/custom-plugins/ThrottlePlugin/create.ts":bP,"/src/custom-plugins/TransitionPlugin/create.ts":kP,"/src/custom-plugins/URLSyncPlugin/create.ts":PP}),jP=Object.assign({"/src/custom-plugins/A11yPlugin/create.tsx":CP,"/src/custom-plugins/BookmarkPlugin/create.tsx":_P,"/src/custom-plugins/ClickAnalyticsPlugin/create.tsx":TP,"/src/custom-plugins/DragReorderPlugin/create.tsx":RP,"/src/custom-plugins/GroupingPlugin/create.tsx":MP,"/src/custom-plugins/HeatmapAnalyticsPlugin/create.tsx":IP,"/src/custom-plugins/ScrollAnchorPlugin/create.tsx":$P,"/src/custom-plugins/StickyHeaderPlugin/create.tsx":EP}),xc={...NP,...jP},Vf=e=>e.replace(/^.*\/custom-plugins\//,"").replace(/\/.*$/,"");function LP(e){const n=Object.keys(xc).find(o=>Vf(o)===e),t=n?xc[n]:"",r=/priority:\s*(\d+)/.exec(t);return r?Number(r[1]):0}function OP(e){const n=Object.keys(vc).find(t=>Vf(t)===e);return n?vc[n]:{name:e,description:"（缺少 doc.json）"}}const DP=[{dir:"AutoColumnPlugin",group:"layout",make:()=>Zp({minColumnWidth:200,maxColumns:4})},{dir:"ResponsiveColumnsPlugin",group:"layout",make:()=>nf({breakpoints:{sm:{width:0,columns:2},md:{width:700,columns:3},lg:{width:1020,columns:4}}})},{dir:"AlignmentPlugin",group:"layout",make:()=>Xp({mode:"shortest"})},{dir:"GapPlugin",group:"layout",make:()=>rf({columnGap:14,rowGap:14})},{dir:"FixedHeightPlugin",group:"layout",make:()=>lf({itemHeight:180})},{dir:"PinItemPlugin",group:"layout",make:()=>af({pinnedIndices:[0],column:0})},{dir:"ThrottlePlugin",group:"perf",make:()=>cf({scroll:16,resize:120})},{dir:"DebounceLayoutPlugin",group:"perf",make:()=>pf({delay:160})},{dir:"TransitionPlugin",group:"perf",make:()=>ha({duration:240})},{dir:"ReducedMotionPlugin",group:"perf",make:()=>mf()},{dir:"FilterPlugin",group:"data",make:()=>yf({predicate:e=>e.price<=500})},{dir:"SortPlugin",group:"data",make:()=>xf({comparator:(e,n)=>n.likes-e.likes})},{dir:"SearchPlugin",group:"data",make:()=>ya({fields:["title","author"]})},{dir:"PaginationPlugin",group:"data",make:()=>bf({pageSize:18})},{dir:"InfiniteScrollPlugin",group:"data",make:()=>Pf({threshold:400})},{dir:"ClickAnalyticsPlugin",group:"interaction",make:()=>_f({showOverlay:!0})},{dir:"HeatmapAnalyticsPlugin",group:"interaction",make:()=>Rf({showOverlay:!0})},{dir:"DragReorderPlugin",group:"interaction",make:()=>If({showHandle:!0})},{dir:"ScrollAnchorPlugin",group:"interaction",make:()=>Ef({})},{dir:"RecyclePlugin",group:"interaction",make:()=>jf({poolSize:24})},{dir:"A11yPlugin",group:"ui",make:()=>Of({enableTabIndex:!1})},{dir:"GroupingPlugin",group:"ui",make:()=>va({groupBy:e=>e.tag})},{dir:"StickyHeaderPlugin",group:"ui",make:()=>Af({title:"工坊预览"})},{dir:"BookmarkPlugin",group:"ui",make:()=>Hf({storageKey:"demo-workshop-bookmark"})},{dir:"StatePersistencePlugin",group:"ui",make:()=>Bf({storageKey:"demo-workshop-state",persistScroll:!0})},{dir:"URLSyncPlugin",group:"ui",make:()=>Gf({mode:"search",keys:["searchQuery"]})}],wc=DP.map(e=>{const n=OP(e.dir);return{dir:e.dir,factory:`create${e.dir}`,group:e.group,priority:LP(e.dir),summary:n.description,doc:n,make:e.make}}).sort((e,n)=>yc.indexOf(e.group)-yc.indexOf(n.group)||n.priority-e.priority),VP=[{a:"AutoColumnPlugin",b:"ResponsiveColumnsPlugin",why:"两者都改列数，AutoColumn 按最小列宽算、Responsive 按断点表算，同时开会交替覆盖"},{a:"TransitionPlugin",b:"ReducedMotionPlugin",why:"ReducedMotion 会去掉过渡，同开等于把 Transition 关掉（不是错误，但别指望有动效）"},{a:"InfiniteScrollPlugin",b:"PaginationPlugin",why:"一个追加、一个切片，叠在一起会出现「翻到第 2 页又看到第 1 页」"},{a:"RecyclePlugin",b:"virtualize",why:"Recycle 改 visibility、virtualize 直接卸载 DOM，同开互相打架"}],KP=["AutoColumnPlugin","GapPlugin","TransitionPlugin","A11yPlugin"],zP=h.lazy(()=>ga(()=>import("./HomePage--rKfSyeM.js"),__vite__mapDeps([0,1]),import.meta.url).then(e=>({default:e.HomePage}))),AP=h.lazy(()=>ga(()=>import("./PluginsPage-DxBJS8an.js"),[],import.meta.url).then(e=>({default:e.PluginsPage}))),WP=h.lazy(()=>ga(()=>import("./ScenariosPage-mX4VSI04.js"),__vite__mapDeps([2,1]),import.meta.url).then(e=>({default:e.ScenariosPage}))),HP={pkg:"vane-waterfall",brand:"V",subtitle:"排版台 / plugin index",nav:[{to:"/",label:"总览",hint:"overview"},{to:"/plugins",label:"插件工坊",hint:`${wc.length} plugins`},{to:"/scenarios",label:"场景示例",hint:"13 plates"}],routes:[{path:"/",element:f.jsx(zP,{})},{path:"/plugins",element:f.jsx(AP,{})},{path:"/scenarios",element:f.jsx(WP,{})}],crumb:e=>e.startsWith("/plugins")?"workshop · 插件工坊":e.startsWith("/scenarios")?"plates · 场景示例":"index · 总览",demos:{label:"逐项示例",groups:Jk.map(e=>({key:e,label:gs[e].label})),entries:ms,detail:(e,n)=>f.jsx(lP,{entry:e,order:n})},footer:[`${wc.length} PLUGINS · 13 PLATES`,`${ms.length} DEMOS · D1-A / D2-A`]};function FP(){return f.jsx(Dy,{config:HP})}Np(document.getElementById("root")).render(f.jsx(FP,{}));export{Gf as A,cf as B,rP as C,ms as D,va as E,pv as F,yc as G,Af as H,Ef as I,lc as J,jf as K,fs as L,pf as M,Rf as N,wc as P,cv as T,tc as W,UP as a,rf as b,Zp as c,ha as d,KP as e,VP as f,GP as g,mf as h,Pf as i,f as j,Of as k,af as l,Qp as m,_f as n,yf as o,xf as p,bf as q,h as r,nf as s,Hf as t,lf as u,Xp as v,av as w,Bf as x,If as y,ya as z};
