const __vite__mapDeps=(i,m=__vite__mapDeps,d=(m.f||(m.f=["./HomePage-ByhQRzuO.js","./catalog-CwFzqhfY.js","./ScenariosPage-BMjpIgBK.js"])))=>i.map(i=>d[i]);
var vd=Object.defineProperty;var yd=(e,t,n)=>t in e?vd(e,t,{enumerable:!0,configurable:!0,writable:!0,value:n}):e[t]=n;var Ua=(e,t,n)=>yd(e,typeof t!="symbol"?t+"":t,n);function wd(e,t){for(var n=0;n<t.length;n++){const r=t[n];if(typeof r!="string"&&!Array.isArray(r)){for(const o in r)if(o!=="default"&&!(o in e)){const l=Object.getOwnPropertyDescriptor(r,o);l&&Object.defineProperty(e,o,l.get?l:{enumerable:!0,get:()=>r[o]})}}}return Object.freeze(Object.defineProperty(e,Symbol.toStringTag,{value:"Module"}))}(function(){const t=document.createElement("link").relList;if(t&&t.supports&&t.supports("modulepreload"))return;for(const o of document.querySelectorAll('link[rel="modulepreload"]'))r(o);new MutationObserver(o=>{for(const l of o)if(l.type==="childList")for(const i of l.addedNodes)i.tagName==="LINK"&&i.rel==="modulepreload"&&r(i)}).observe(document,{childList:!0,subtree:!0});function n(o){const l={};return o.integrity&&(l.integrity=o.integrity),o.referrerPolicy&&(l.referrerPolicy=o.referrerPolicy),o.crossOrigin==="use-credentials"?l.credentials="include":o.crossOrigin==="anonymous"?l.credentials="omit":l.credentials="same-origin",l}function r(o){if(o.ep)return;o.ep=!0;const l=n(o);fetch(o.href,l)}})();function Sd(e){return e&&e.__esModule&&Object.prototype.hasOwnProperty.call(e,"default")?e.default:e}var Pu={exports:{}},Mo={},ku={exports:{}},N={};/**
 * @license React
 * react.production.min.js
 *
 * Copyright (c) Facebook, Inc. and its affiliates.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */var Sr=Symbol.for("react.element"),xd=Symbol.for("react.portal"),Pd=Symbol.for("react.fragment"),kd=Symbol.for("react.strict_mode"),bd=Symbol.for("react.profiler"),Cd=Symbol.for("react.provider"),_d=Symbol.for("react.context"),Ed=Symbol.for("react.forward_ref"),Td=Symbol.for("react.suspense"),Rd=Symbol.for("react.memo"),jd=Symbol.for("react.lazy"),Wa=Symbol.iterator;function Ld(e){return e===null||typeof e!="object"?null:(e=Wa&&e[Wa]||e["@@iterator"],typeof e=="function"?e:null)}var bu={isMounted:function(){return!1},enqueueForceUpdate:function(){},enqueueReplaceState:function(){},enqueueSetState:function(){}},Cu=Object.assign,_u={};function xn(e,t,n){this.props=e,this.context=t,this.refs=_u,this.updater=n||bu}xn.prototype.isReactComponent={};xn.prototype.setState=function(e,t){if(typeof e!="object"&&typeof e!="function"&&e!=null)throw Error("setState(...): takes an object of state variables to update or a function which returns an object of state variables.");this.updater.enqueueSetState(this,e,t,"setState")};xn.prototype.forceUpdate=function(e){this.updater.enqueueForceUpdate(this,e,"forceUpdate")};function Eu(){}Eu.prototype=xn.prototype;function ki(e,t,n){this.props=e,this.context=t,this.refs=_u,this.updater=n||bu}var bi=ki.prototype=new Eu;bi.constructor=ki;Cu(bi,xn.prototype);bi.isPureReactComponent=!0;var Va=Array.isArray,Tu=Object.prototype.hasOwnProperty,Ci={current:null},Ru={key:!0,ref:!0,__self:!0,__source:!0};function ju(e,t,n){var r,o={},l=null,i=null;if(t!=null)for(r in t.ref!==void 0&&(i=t.ref),t.key!==void 0&&(l=""+t.key),t)Tu.call(t,r)&&!Ru.hasOwnProperty(r)&&(o[r]=t[r]);var s=arguments.length-2;if(s===1)o.children=n;else if(1<s){for(var a=Array(s),u=0;u<s;u++)a[u]=arguments[u+2];o.children=a}if(e&&e.defaultProps)for(r in s=e.defaultProps,s)o[r]===void 0&&(o[r]=s[r]);return{$$typeof:Sr,type:e,key:l,ref:i,props:o,_owner:Ci.current}}function Md(e,t){return{$$typeof:Sr,type:e.type,key:t,ref:e.ref,props:e.props,_owner:e._owner}}function _i(e){return typeof e=="object"&&e!==null&&e.$$typeof===Sr}function Nd(e){var t={"=":"=0",":":"=2"};return"$"+e.replace(/[=:]/g,function(n){return t[n]})}var Ha=/\/+/g;function Xo(e,t){return typeof e=="object"&&e!==null&&e.key!=null?Nd(""+e.key):t.toString(36)}function Kr(e,t,n,r,o){var l=typeof e;(l==="undefined"||l==="boolean")&&(e=null);var i=!1;if(e===null)i=!0;else switch(l){case"string":case"number":i=!0;break;case"object":switch(e.$$typeof){case Sr:case xd:i=!0}}if(i)return i=e,o=o(i),e=r===""?"."+Xo(i,0):r,Va(o)?(n="",e!=null&&(n=e.replace(Ha,"$&/")+"/"),Kr(o,t,n,"",function(u){return u})):o!=null&&(_i(o)&&(o=Md(o,n+(!o.key||i&&i.key===o.key?"":(""+o.key).replace(Ha,"$&/")+"/")+e)),t.push(o)),1;if(i=0,r=r===""?".":r+":",Va(e))for(var s=0;s<e.length;s++){l=e[s];var a=r+Xo(l,s);i+=Kr(l,t,n,a,o)}else if(a=Ld(e),typeof a=="function")for(e=a.call(e),s=0;!(l=e.next()).done;)l=l.value,a=r+Xo(l,s++),i+=Kr(l,t,n,a,o);else if(l==="object")throw t=String(e),Error("Objects are not valid as a React child (found: "+(t==="[object Object]"?"object with keys {"+Object.keys(e).join(", ")+"}":t)+"). If you meant to render a collection of children, use an array instead.");return i}function Rr(e,t,n){if(e==null)return e;var r=[],o=0;return Kr(e,r,"","",function(l){return t.call(n,l,o++)}),r}function Ad(e){if(e._status===-1){var t=e._result;t=t(),t.then(function(n){(e._status===0||e._status===-1)&&(e._status=1,e._result=n)},function(n){(e._status===0||e._status===-1)&&(e._status=2,e._result=n)}),e._status===-1&&(e._status=0,e._result=t)}if(e._status===1)return e._result.default;throw e._result}var pe={current:null},Yr={transition:null},$d={ReactCurrentDispatcher:pe,ReactCurrentBatchConfig:Yr,ReactCurrentOwner:Ci};function Lu(){throw Error("act(...) is not supported in production builds of React.")}N.Children={map:Rr,forEach:function(e,t,n){Rr(e,function(){t.apply(this,arguments)},n)},count:function(e){var t=0;return Rr(e,function(){t++}),t},toArray:function(e){return Rr(e,function(t){return t})||[]},only:function(e){if(!_i(e))throw Error("React.Children.only expected to receive a single React element child.");return e}};N.Component=xn;N.Fragment=Pd;N.Profiler=bd;N.PureComponent=ki;N.StrictMode=kd;N.Suspense=Td;N.__SECRET_INTERNALS_DO_NOT_USE_OR_YOU_WILL_BE_FIRED=$d;N.act=Lu;N.cloneElement=function(e,t,n){if(e==null)throw Error("React.cloneElement(...): The argument must be a React element, but you passed "+e+".");var r=Cu({},e.props),o=e.key,l=e.ref,i=e._owner;if(t!=null){if(t.ref!==void 0&&(l=t.ref,i=Ci.current),t.key!==void 0&&(o=""+t.key),e.type&&e.type.defaultProps)var s=e.type.defaultProps;for(a in t)Tu.call(t,a)&&!Ru.hasOwnProperty(a)&&(r[a]=t[a]===void 0&&s!==void 0?s[a]:t[a])}var a=arguments.length-2;if(a===1)r.children=n;else if(1<a){s=Array(a);for(var u=0;u<a;u++)s[u]=arguments[u+2];r.children=s}return{$$typeof:Sr,type:e.type,key:o,ref:l,props:r,_owner:i}};N.createContext=function(e){return e={$$typeof:_d,_currentValue:e,_currentValue2:e,_threadCount:0,Provider:null,Consumer:null,_defaultValue:null,_globalName:null},e.Provider={$$typeof:Cd,_context:e},e.Consumer=e};N.createElement=ju;N.createFactory=function(e){var t=ju.bind(null,e);return t.type=e,t};N.createRef=function(){return{current:null}};N.forwardRef=function(e){return{$$typeof:Ed,render:e}};N.isValidElement=_i;N.lazy=function(e){return{$$typeof:jd,_payload:{_status:-1,_result:e},_init:Ad}};N.memo=function(e,t){return{$$typeof:Rd,type:e,compare:t===void 0?null:t}};N.startTransition=function(e){var t=Yr.transition;Yr.transition={};try{e()}finally{Yr.transition=t}};N.unstable_act=Lu;N.useCallback=function(e,t){return pe.current.useCallback(e,t)};N.useContext=function(e){return pe.current.useContext(e)};N.useDebugValue=function(){};N.useDeferredValue=function(e){return pe.current.useDeferredValue(e)};N.useEffect=function(e,t){return pe.current.useEffect(e,t)};N.useId=function(){return pe.current.useId()};N.useImperativeHandle=function(e,t,n){return pe.current.useImperativeHandle(e,t,n)};N.useInsertionEffect=function(e,t){return pe.current.useInsertionEffect(e,t)};N.useLayoutEffect=function(e,t){return pe.current.useLayoutEffect(e,t)};N.useMemo=function(e,t){return pe.current.useMemo(e,t)};N.useReducer=function(e,t,n){return pe.current.useReducer(e,t,n)};N.useRef=function(e){return pe.current.useRef(e)};N.useState=function(e){return pe.current.useState(e)};N.useSyncExternalStore=function(e,t,n){return pe.current.useSyncExternalStore(e,t,n)};N.useTransition=function(){return pe.current.useTransition()};N.version="18.3.1";ku.exports=N;var v=ku.exports;const Pn=Sd(v),Bd=wd({__proto__:null,default:Pn},[v]);/**
 * @license React
 * react-jsx-runtime.production.min.js
 *
 * Copyright (c) Facebook, Inc. and its affiliates.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */var zd=v,Od=Symbol.for("react.element"),Id=Symbol.for("react.fragment"),Dd=Object.prototype.hasOwnProperty,Fd=zd.__SECRET_INTERNALS_DO_NOT_USE_OR_YOU_WILL_BE_FIRED.ReactCurrentOwner,Ud={key:!0,ref:!0,__self:!0,__source:!0};function Mu(e,t,n){var r,o={},l=null,i=null;n!==void 0&&(l=""+n),t.key!==void 0&&(l=""+t.key),t.ref!==void 0&&(i=t.ref);for(r in t)Dd.call(t,r)&&!Ud.hasOwnProperty(r)&&(o[r]=t[r]);if(e&&e.defaultProps)for(r in t=e.defaultProps,t)o[r]===void 0&&(o[r]=t[r]);return{$$typeof:Od,type:e,key:l,ref:i,props:o,_owner:Fd.current}}Mo.Fragment=Id;Mo.jsx=Mu;Mo.jsxs=Mu;Pu.exports=Mo;var c=Pu.exports,kl={},Nu={exports:{}},Ce={},Au={exports:{}},$u={};/**
 * @license React
 * scheduler.production.min.js
 *
 * Copyright (c) Facebook, Inc. and its affiliates.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */(function(e){function t(C,j){var L=C.length;C.push(j);e:for(;0<L;){var B=L-1>>>1,U=C[B];if(0<o(U,j))C[B]=j,C[L]=U,L=B;else break e}}function n(C){return C.length===0?null:C[0]}function r(C){if(C.length===0)return null;var j=C[0],L=C.pop();if(L!==j){C[0]=L;e:for(var B=0,U=C.length,De=U>>>1;B<De;){var Se=2*(B+1)-1,Tt=C[Se],Rt=Se+1,Tr=C[Rt];if(0>o(Tt,L))Rt<U&&0>o(Tr,Tt)?(C[B]=Tr,C[Rt]=L,B=Rt):(C[B]=Tt,C[Se]=L,B=Se);else if(Rt<U&&0>o(Tr,L))C[B]=Tr,C[Rt]=L,B=Rt;else break e}}return j}function o(C,j){var L=C.sortIndex-j.sortIndex;return L!==0?L:C.id-j.id}if(typeof performance=="object"&&typeof performance.now=="function"){var l=performance;e.unstable_now=function(){return l.now()}}else{var i=Date,s=i.now();e.unstable_now=function(){return i.now()-s}}var a=[],u=[],d=1,f=null,g=3,y=!1,w=!1,S=!1,P=typeof setTimeout=="function"?setTimeout:null,m=typeof clearTimeout=="function"?clearTimeout:null,p=typeof setImmediate<"u"?setImmediate:null;typeof navigator<"u"&&navigator.scheduling!==void 0&&navigator.scheduling.isInputPending!==void 0&&navigator.scheduling.isInputPending.bind(navigator.scheduling);function h(C){for(var j=n(u);j!==null;){if(j.callback===null)r(u);else if(j.startTime<=C)r(u),j.sortIndex=j.expirationTime,t(a,j);else break;j=n(u)}}function x(C){if(S=!1,h(C),!w)if(n(a)!==null)w=!0,jn(b);else{var j=n(u);j!==null&&Ln(x,j.startTime-C)}}function b(C,j){w=!1,S&&(S=!1,m(R),R=-1),y=!0;var L=g;try{for(h(j),f=n(a);f!==null&&(!(f.expirationTime>j)||C&&!ce());){var B=f.callback;if(typeof B=="function"){f.callback=null,g=f.priorityLevel;var U=B(f.expirationTime<=j);j=e.unstable_now(),typeof U=="function"?f.callback=U:f===n(a)&&r(a),h(j)}else r(a);f=n(a)}if(f!==null)var De=!0;else{var Se=n(u);Se!==null&&Ln(x,Se.startTime-j),De=!1}return De}finally{f=null,g=L,y=!1}}var E=!1,T=null,R=-1,$=5,M=-1;function ce(){return!(e.unstable_now()-M<$)}function ot(){if(T!==null){var C=e.unstable_now();M=C;var j=!0;try{j=T(!0,C)}finally{j?Qe():(E=!1,T=null)}}else E=!1}var Qe;if(typeof p=="function")Qe=function(){p(ot)};else if(typeof MessageChannel<"u"){var Tn=new MessageChannel,Rn=Tn.port2;Tn.port1.onmessage=ot,Qe=function(){Rn.postMessage(null)}}else Qe=function(){P(ot,0)};function jn(C){T=C,E||(E=!0,Qe())}function Ln(C,j){R=P(function(){C(e.unstable_now())},j)}e.unstable_IdlePriority=5,e.unstable_ImmediatePriority=1,e.unstable_LowPriority=4,e.unstable_NormalPriority=3,e.unstable_Profiling=null,e.unstable_UserBlockingPriority=2,e.unstable_cancelCallback=function(C){C.callback=null},e.unstable_continueExecution=function(){w||y||(w=!0,jn(b))},e.unstable_forceFrameRate=function(C){0>C||125<C?console.error("forceFrameRate takes a positive int between 0 and 125, forcing frame rates higher than 125 fps is not supported"):$=0<C?Math.floor(1e3/C):5},e.unstable_getCurrentPriorityLevel=function(){return g},e.unstable_getFirstCallbackNode=function(){return n(a)},e.unstable_next=function(C){switch(g){case 1:case 2:case 3:var j=3;break;default:j=g}var L=g;g=j;try{return C()}finally{g=L}},e.unstable_pauseExecution=function(){},e.unstable_requestPaint=function(){},e.unstable_runWithPriority=function(C,j){switch(C){case 1:case 2:case 3:case 4:case 5:break;default:C=3}var L=g;g=C;try{return j()}finally{g=L}},e.unstable_scheduleCallback=function(C,j,L){var B=e.unstable_now();switch(typeof L=="object"&&L!==null?(L=L.delay,L=typeof L=="number"&&0<L?B+L:B):L=B,C){case 1:var U=-1;break;case 2:U=250;break;case 5:U=1073741823;break;case 4:U=1e4;break;default:U=5e3}return U=L+U,C={id:d++,callback:j,priorityLevel:C,startTime:L,expirationTime:U,sortIndex:-1},L>B?(C.sortIndex=L,t(u,C),n(a)===null&&C===n(u)&&(S?(m(R),R=-1):S=!0,Ln(x,L-B))):(C.sortIndex=U,t(a,C),w||y||(w=!0,jn(b))),C},e.unstable_shouldYield=ce,e.unstable_wrapCallback=function(C){var j=g;return function(){var L=g;g=j;try{return C.apply(this,arguments)}finally{g=L}}}})($u);Au.exports=$u;var Wd=Au.exports;/**
 * @license React
 * react-dom.production.min.js
 *
 * Copyright (c) Facebook, Inc. and its affiliates.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */var Vd=v,be=Wd;function k(e){for(var t="https://reactjs.org/docs/error-decoder.html?invariant="+e,n=1;n<arguments.length;n++)t+="&args[]="+encodeURIComponent(arguments[n]);return"Minified React error #"+e+"; visit "+t+" for the full message or use the non-minified dev environment for full errors and additional helpful warnings."}var Bu=new Set,tr={};function Wt(e,t){gn(e,t),gn(e+"Capture",t)}function gn(e,t){for(tr[e]=t,e=0;e<t.length;e++)Bu.add(t[e])}var Je=!(typeof window>"u"||typeof window.document>"u"||typeof window.document.createElement>"u"),bl=Object.prototype.hasOwnProperty,Hd=/^[:A-Z_a-z\u00C0-\u00D6\u00D8-\u00F6\u00F8-\u02FF\u0370-\u037D\u037F-\u1FFF\u200C-\u200D\u2070-\u218F\u2C00-\u2FEF\u3001-\uD7FF\uF900-\uFDCF\uFDF0-\uFFFD][:A-Z_a-z\u00C0-\u00D6\u00D8-\u00F6\u00F8-\u02FF\u0370-\u037D\u037F-\u1FFF\u200C-\u200D\u2070-\u218F\u2C00-\u2FEF\u3001-\uD7FF\uF900-\uFDCF\uFDF0-\uFFFD\-.0-9\u00B7\u0300-\u036F\u203F-\u2040]*$/,Qa={},Ga={};function Qd(e){return bl.call(Ga,e)?!0:bl.call(Qa,e)?!1:Hd.test(e)?Ga[e]=!0:(Qa[e]=!0,!1)}function Gd(e,t,n,r){if(n!==null&&n.type===0)return!1;switch(typeof t){case"function":case"symbol":return!0;case"boolean":return r?!1:n!==null?!n.acceptsBooleans:(e=e.toLowerCase().slice(0,5),e!=="data-"&&e!=="aria-");default:return!1}}function Kd(e,t,n,r){if(t===null||typeof t>"u"||Gd(e,t,n,r))return!0;if(r)return!1;if(n!==null)switch(n.type){case 3:return!t;case 4:return t===!1;case 5:return isNaN(t);case 6:return isNaN(t)||1>t}return!1}function ge(e,t,n,r,o,l,i){this.acceptsBooleans=t===2||t===3||t===4,this.attributeName=r,this.attributeNamespace=o,this.mustUseProperty=n,this.propertyName=e,this.type=t,this.sanitizeURL=l,this.removeEmptyString=i}var le={};"children dangerouslySetInnerHTML defaultValue defaultChecked innerHTML suppressContentEditableWarning suppressHydrationWarning style".split(" ").forEach(function(e){le[e]=new ge(e,0,!1,e,null,!1,!1)});[["acceptCharset","accept-charset"],["className","class"],["htmlFor","for"],["httpEquiv","http-equiv"]].forEach(function(e){var t=e[0];le[t]=new ge(t,1,!1,e[1],null,!1,!1)});["contentEditable","draggable","spellCheck","value"].forEach(function(e){le[e]=new ge(e,2,!1,e.toLowerCase(),null,!1,!1)});["autoReverse","externalResourcesRequired","focusable","preserveAlpha"].forEach(function(e){le[e]=new ge(e,2,!1,e,null,!1,!1)});"allowFullScreen async autoFocus autoPlay controls default defer disabled disablePictureInPicture disableRemotePlayback formNoValidate hidden loop noModule noValidate open playsInline readOnly required reversed scoped seamless itemScope".split(" ").forEach(function(e){le[e]=new ge(e,3,!1,e.toLowerCase(),null,!1,!1)});["checked","multiple","muted","selected"].forEach(function(e){le[e]=new ge(e,3,!0,e,null,!1,!1)});["capture","download"].forEach(function(e){le[e]=new ge(e,4,!1,e,null,!1,!1)});["cols","rows","size","span"].forEach(function(e){le[e]=new ge(e,6,!1,e,null,!1,!1)});["rowSpan","start"].forEach(function(e){le[e]=new ge(e,5,!1,e.toLowerCase(),null,!1,!1)});var Ei=/[\-:]([a-z])/g;function Ti(e){return e[1].toUpperCase()}"accent-height alignment-baseline arabic-form baseline-shift cap-height clip-path clip-rule color-interpolation color-interpolation-filters color-profile color-rendering dominant-baseline enable-background fill-opacity fill-rule flood-color flood-opacity font-family font-size font-size-adjust font-stretch font-style font-variant font-weight glyph-name glyph-orientation-horizontal glyph-orientation-vertical horiz-adv-x horiz-origin-x image-rendering letter-spacing lighting-color marker-end marker-mid marker-start overline-position overline-thickness paint-order panose-1 pointer-events rendering-intent shape-rendering stop-color stop-opacity strikethrough-position strikethrough-thickness stroke-dasharray stroke-dashoffset stroke-linecap stroke-linejoin stroke-miterlimit stroke-opacity stroke-width text-anchor text-decoration text-rendering underline-position underline-thickness unicode-bidi unicode-range units-per-em v-alphabetic v-hanging v-ideographic v-mathematical vector-effect vert-adv-y vert-origin-x vert-origin-y word-spacing writing-mode xmlns:xlink x-height".split(" ").forEach(function(e){var t=e.replace(Ei,Ti);le[t]=new ge(t,1,!1,e,null,!1,!1)});"xlink:actuate xlink:arcrole xlink:role xlink:show xlink:title xlink:type".split(" ").forEach(function(e){var t=e.replace(Ei,Ti);le[t]=new ge(t,1,!1,e,"http://www.w3.org/1999/xlink",!1,!1)});["xml:base","xml:lang","xml:space"].forEach(function(e){var t=e.replace(Ei,Ti);le[t]=new ge(t,1,!1,e,"http://www.w3.org/XML/1998/namespace",!1,!1)});["tabIndex","crossOrigin"].forEach(function(e){le[e]=new ge(e,1,!1,e.toLowerCase(),null,!1,!1)});le.xlinkHref=new ge("xlinkHref",1,!1,"xlink:href","http://www.w3.org/1999/xlink",!0,!1);["src","href","action","formAction"].forEach(function(e){le[e]=new ge(e,1,!1,e.toLowerCase(),null,!0,!0)});function Ri(e,t,n,r){var o=le.hasOwnProperty(t)?le[t]:null;(o!==null?o.type!==0:r||!(2<t.length)||t[0]!=="o"&&t[0]!=="O"||t[1]!=="n"&&t[1]!=="N")&&(Kd(t,n,o,r)&&(n=null),r||o===null?Qd(t)&&(n===null?e.removeAttribute(t):e.setAttribute(t,""+n)):o.mustUseProperty?e[o.propertyName]=n===null?o.type===3?!1:"":n:(t=o.attributeName,r=o.attributeNamespace,n===null?e.removeAttribute(t):(o=o.type,n=o===3||o===4&&n===!0?"":""+n,r?e.setAttributeNS(r,t,n):e.setAttribute(t,n))))}var nt=Vd.__SECRET_INTERNALS_DO_NOT_USE_OR_YOU_WILL_BE_FIRED,jr=Symbol.for("react.element"),Yt=Symbol.for("react.portal"),Xt=Symbol.for("react.fragment"),ji=Symbol.for("react.strict_mode"),Cl=Symbol.for("react.profiler"),zu=Symbol.for("react.provider"),Ou=Symbol.for("react.context"),Li=Symbol.for("react.forward_ref"),_l=Symbol.for("react.suspense"),El=Symbol.for("react.suspense_list"),Mi=Symbol.for("react.memo"),it=Symbol.for("react.lazy"),Iu=Symbol.for("react.offscreen"),Ka=Symbol.iterator;function Mn(e){return e===null||typeof e!="object"?null:(e=Ka&&e[Ka]||e["@@iterator"],typeof e=="function"?e:null)}var Q=Object.assign,Zo;function Dn(e){if(Zo===void 0)try{throw Error()}catch(n){var t=n.stack.trim().match(/\n( *(at )?)/);Zo=t&&t[1]||""}return`
`+Zo+e}var Jo=!1;function qo(e,t){if(!e||Jo)return"";Jo=!0;var n=Error.prepareStackTrace;Error.prepareStackTrace=void 0;try{if(t)if(t=function(){throw Error()},Object.defineProperty(t.prototype,"props",{set:function(){throw Error()}}),typeof Reflect=="object"&&Reflect.construct){try{Reflect.construct(t,[])}catch(u){var r=u}Reflect.construct(e,[],t)}else{try{t.call()}catch(u){r=u}e.call(t.prototype)}else{try{throw Error()}catch(u){r=u}e()}}catch(u){if(u&&r&&typeof u.stack=="string"){for(var o=u.stack.split(`
`),l=r.stack.split(`
`),i=o.length-1,s=l.length-1;1<=i&&0<=s&&o[i]!==l[s];)s--;for(;1<=i&&0<=s;i--,s--)if(o[i]!==l[s]){if(i!==1||s!==1)do if(i--,s--,0>s||o[i]!==l[s]){var a=`
`+o[i].replace(" at new "," at ");return e.displayName&&a.includes("<anonymous>")&&(a=a.replace("<anonymous>",e.displayName)),a}while(1<=i&&0<=s);break}}}finally{Jo=!1,Error.prepareStackTrace=n}return(e=e?e.displayName||e.name:"")?Dn(e):""}function Yd(e){switch(e.tag){case 5:return Dn(e.type);case 16:return Dn("Lazy");case 13:return Dn("Suspense");case 19:return Dn("SuspenseList");case 0:case 2:case 15:return e=qo(e.type,!1),e;case 11:return e=qo(e.type.render,!1),e;case 1:return e=qo(e.type,!0),e;default:return""}}function Tl(e){if(e==null)return null;if(typeof e=="function")return e.displayName||e.name||null;if(typeof e=="string")return e;switch(e){case Xt:return"Fragment";case Yt:return"Portal";case Cl:return"Profiler";case ji:return"StrictMode";case _l:return"Suspense";case El:return"SuspenseList"}if(typeof e=="object")switch(e.$$typeof){case Ou:return(e.displayName||"Context")+".Consumer";case zu:return(e._context.displayName||"Context")+".Provider";case Li:var t=e.render;return e=e.displayName,e||(e=t.displayName||t.name||"",e=e!==""?"ForwardRef("+e+")":"ForwardRef"),e;case Mi:return t=e.displayName||null,t!==null?t:Tl(e.type)||"Memo";case it:t=e._payload,e=e._init;try{return Tl(e(t))}catch{}}return null}function Xd(e){var t=e.type;switch(e.tag){case 24:return"Cache";case 9:return(t.displayName||"Context")+".Consumer";case 10:return(t._context.displayName||"Context")+".Provider";case 18:return"DehydratedFragment";case 11:return e=t.render,e=e.displayName||e.name||"",t.displayName||(e!==""?"ForwardRef("+e+")":"ForwardRef");case 7:return"Fragment";case 5:return t;case 4:return"Portal";case 3:return"Root";case 6:return"Text";case 16:return Tl(t);case 8:return t===ji?"StrictMode":"Mode";case 22:return"Offscreen";case 12:return"Profiler";case 21:return"Scope";case 13:return"Suspense";case 19:return"SuspenseList";case 25:return"TracingMarker";case 1:case 0:case 17:case 2:case 14:case 15:if(typeof t=="function")return t.displayName||t.name||null;if(typeof t=="string")return t}return null}function Pt(e){switch(typeof e){case"boolean":case"number":case"string":case"undefined":return e;case"object":return e;default:return""}}function Du(e){var t=e.type;return(e=e.nodeName)&&e.toLowerCase()==="input"&&(t==="checkbox"||t==="radio")}function Zd(e){var t=Du(e)?"checked":"value",n=Object.getOwnPropertyDescriptor(e.constructor.prototype,t),r=""+e[t];if(!e.hasOwnProperty(t)&&typeof n<"u"&&typeof n.get=="function"&&typeof n.set=="function"){var o=n.get,l=n.set;return Object.defineProperty(e,t,{configurable:!0,get:function(){return o.call(this)},set:function(i){r=""+i,l.call(this,i)}}),Object.defineProperty(e,t,{enumerable:n.enumerable}),{getValue:function(){return r},setValue:function(i){r=""+i},stopTracking:function(){e._valueTracker=null,delete e[t]}}}}function Lr(e){e._valueTracker||(e._valueTracker=Zd(e))}function Fu(e){if(!e)return!1;var t=e._valueTracker;if(!t)return!0;var n=t.getValue(),r="";return e&&(r=Du(e)?e.checked?"true":"false":e.value),e=r,e!==n?(t.setValue(e),!0):!1}function io(e){if(e=e||(typeof document<"u"?document:void 0),typeof e>"u")return null;try{return e.activeElement||e.body}catch{return e.body}}function Rl(e,t){var n=t.checked;return Q({},t,{defaultChecked:void 0,defaultValue:void 0,value:void 0,checked:n??e._wrapperState.initialChecked})}function Ya(e,t){var n=t.defaultValue==null?"":t.defaultValue,r=t.checked!=null?t.checked:t.defaultChecked;n=Pt(t.value!=null?t.value:n),e._wrapperState={initialChecked:r,initialValue:n,controlled:t.type==="checkbox"||t.type==="radio"?t.checked!=null:t.value!=null}}function Uu(e,t){t=t.checked,t!=null&&Ri(e,"checked",t,!1)}function jl(e,t){Uu(e,t);var n=Pt(t.value),r=t.type;if(n!=null)r==="number"?(n===0&&e.value===""||e.value!=n)&&(e.value=""+n):e.value!==""+n&&(e.value=""+n);else if(r==="submit"||r==="reset"){e.removeAttribute("value");return}t.hasOwnProperty("value")?Ll(e,t.type,n):t.hasOwnProperty("defaultValue")&&Ll(e,t.type,Pt(t.defaultValue)),t.checked==null&&t.defaultChecked!=null&&(e.defaultChecked=!!t.defaultChecked)}function Xa(e,t,n){if(t.hasOwnProperty("value")||t.hasOwnProperty("defaultValue")){var r=t.type;if(!(r!=="submit"&&r!=="reset"||t.value!==void 0&&t.value!==null))return;t=""+e._wrapperState.initialValue,n||t===e.value||(e.value=t),e.defaultValue=t}n=e.name,n!==""&&(e.name=""),e.defaultChecked=!!e._wrapperState.initialChecked,n!==""&&(e.name=n)}function Ll(e,t,n){(t!=="number"||io(e.ownerDocument)!==e)&&(n==null?e.defaultValue=""+e._wrapperState.initialValue:e.defaultValue!==""+n&&(e.defaultValue=""+n))}var Fn=Array.isArray;function sn(e,t,n,r){if(e=e.options,t){t={};for(var o=0;o<n.length;o++)t["$"+n[o]]=!0;for(n=0;n<e.length;n++)o=t.hasOwnProperty("$"+e[n].value),e[n].selected!==o&&(e[n].selected=o),o&&r&&(e[n].defaultSelected=!0)}else{for(n=""+Pt(n),t=null,o=0;o<e.length;o++){if(e[o].value===n){e[o].selected=!0,r&&(e[o].defaultSelected=!0);return}t!==null||e[o].disabled||(t=e[o])}t!==null&&(t.selected=!0)}}function Ml(e,t){if(t.dangerouslySetInnerHTML!=null)throw Error(k(91));return Q({},t,{value:void 0,defaultValue:void 0,children:""+e._wrapperState.initialValue})}function Za(e,t){var n=t.value;if(n==null){if(n=t.children,t=t.defaultValue,n!=null){if(t!=null)throw Error(k(92));if(Fn(n)){if(1<n.length)throw Error(k(93));n=n[0]}t=n}t==null&&(t=""),n=t}e._wrapperState={initialValue:Pt(n)}}function Wu(e,t){var n=Pt(t.value),r=Pt(t.defaultValue);n!=null&&(n=""+n,n!==e.value&&(e.value=n),t.defaultValue==null&&e.defaultValue!==n&&(e.defaultValue=n)),r!=null&&(e.defaultValue=""+r)}function Ja(e){var t=e.textContent;t===e._wrapperState.initialValue&&t!==""&&t!==null&&(e.value=t)}function Vu(e){switch(e){case"svg":return"http://www.w3.org/2000/svg";case"math":return"http://www.w3.org/1998/Math/MathML";default:return"http://www.w3.org/1999/xhtml"}}function Nl(e,t){return e==null||e==="http://www.w3.org/1999/xhtml"?Vu(t):e==="http://www.w3.org/2000/svg"&&t==="foreignObject"?"http://www.w3.org/1999/xhtml":e}var Mr,Hu=function(e){return typeof MSApp<"u"&&MSApp.execUnsafeLocalFunction?function(t,n,r,o){MSApp.execUnsafeLocalFunction(function(){return e(t,n,r,o)})}:e}(function(e,t){if(e.namespaceURI!=="http://www.w3.org/2000/svg"||"innerHTML"in e)e.innerHTML=t;else{for(Mr=Mr||document.createElement("div"),Mr.innerHTML="<svg>"+t.valueOf().toString()+"</svg>",t=Mr.firstChild;e.firstChild;)e.removeChild(e.firstChild);for(;t.firstChild;)e.appendChild(t.firstChild)}});function nr(e,t){if(t){var n=e.firstChild;if(n&&n===e.lastChild&&n.nodeType===3){n.nodeValue=t;return}}e.textContent=t}var Hn={animationIterationCount:!0,aspectRatio:!0,borderImageOutset:!0,borderImageSlice:!0,borderImageWidth:!0,boxFlex:!0,boxFlexGroup:!0,boxOrdinalGroup:!0,columnCount:!0,columns:!0,flex:!0,flexGrow:!0,flexPositive:!0,flexShrink:!0,flexNegative:!0,flexOrder:!0,gridArea:!0,gridRow:!0,gridRowEnd:!0,gridRowSpan:!0,gridRowStart:!0,gridColumn:!0,gridColumnEnd:!0,gridColumnSpan:!0,gridColumnStart:!0,fontWeight:!0,lineClamp:!0,lineHeight:!0,opacity:!0,order:!0,orphans:!0,tabSize:!0,widows:!0,zIndex:!0,zoom:!0,fillOpacity:!0,floodOpacity:!0,stopOpacity:!0,strokeDasharray:!0,strokeDashoffset:!0,strokeMiterlimit:!0,strokeOpacity:!0,strokeWidth:!0},Jd=["Webkit","ms","Moz","O"];Object.keys(Hn).forEach(function(e){Jd.forEach(function(t){t=t+e.charAt(0).toUpperCase()+e.substring(1),Hn[t]=Hn[e]})});function Qu(e,t,n){return t==null||typeof t=="boolean"||t===""?"":n||typeof t!="number"||t===0||Hn.hasOwnProperty(e)&&Hn[e]?(""+t).trim():t+"px"}function Gu(e,t){e=e.style;for(var n in t)if(t.hasOwnProperty(n)){var r=n.indexOf("--")===0,o=Qu(n,t[n],r);n==="float"&&(n="cssFloat"),r?e.setProperty(n,o):e[n]=o}}var qd=Q({menuitem:!0},{area:!0,base:!0,br:!0,col:!0,embed:!0,hr:!0,img:!0,input:!0,keygen:!0,link:!0,meta:!0,param:!0,source:!0,track:!0,wbr:!0});function Al(e,t){if(t){if(qd[e]&&(t.children!=null||t.dangerouslySetInnerHTML!=null))throw Error(k(137,e));if(t.dangerouslySetInnerHTML!=null){if(t.children!=null)throw Error(k(60));if(typeof t.dangerouslySetInnerHTML!="object"||!("__html"in t.dangerouslySetInnerHTML))throw Error(k(61))}if(t.style!=null&&typeof t.style!="object")throw Error(k(62))}}function $l(e,t){if(e.indexOf("-")===-1)return typeof t.is=="string";switch(e){case"annotation-xml":case"color-profile":case"font-face":case"font-face-src":case"font-face-uri":case"font-face-format":case"font-face-name":case"missing-glyph":return!1;default:return!0}}var Bl=null;function Ni(e){return e=e.target||e.srcElement||window,e.correspondingUseElement&&(e=e.correspondingUseElement),e.nodeType===3?e.parentNode:e}var zl=null,un=null,cn=null;function qa(e){if(e=kr(e)){if(typeof zl!="function")throw Error(k(280));var t=e.stateNode;t&&(t=zo(t),zl(e.stateNode,e.type,t))}}function Ku(e){un?cn?cn.push(e):cn=[e]:un=e}function Yu(){if(un){var e=un,t=cn;if(cn=un=null,qa(e),t)for(e=0;e<t.length;e++)qa(t[e])}}function Xu(e,t){return e(t)}function Zu(){}var el=!1;function Ju(e,t,n){if(el)return e(t,n);el=!0;try{return Xu(e,t,n)}finally{el=!1,(un!==null||cn!==null)&&(Zu(),Yu())}}function rr(e,t){var n=e.stateNode;if(n===null)return null;var r=zo(n);if(r===null)return null;n=r[t];e:switch(t){case"onClick":case"onClickCapture":case"onDoubleClick":case"onDoubleClickCapture":case"onMouseDown":case"onMouseDownCapture":case"onMouseMove":case"onMouseMoveCapture":case"onMouseUp":case"onMouseUpCapture":case"onMouseEnter":(r=!r.disabled)||(e=e.type,r=!(e==="button"||e==="input"||e==="select"||e==="textarea")),e=!r;break e;default:e=!1}if(e)return null;if(n&&typeof n!="function")throw Error(k(231,t,typeof n));return n}var Ol=!1;if(Je)try{var Nn={};Object.defineProperty(Nn,"passive",{get:function(){Ol=!0}}),window.addEventListener("test",Nn,Nn),window.removeEventListener("test",Nn,Nn)}catch{Ol=!1}function ep(e,t,n,r,o,l,i,s,a){var u=Array.prototype.slice.call(arguments,3);try{t.apply(n,u)}catch(d){this.onError(d)}}var Qn=!1,ao=null,so=!1,Il=null,tp={onError:function(e){Qn=!0,ao=e}};function np(e,t,n,r,o,l,i,s,a){Qn=!1,ao=null,ep.apply(tp,arguments)}function rp(e,t,n,r,o,l,i,s,a){if(np.apply(this,arguments),Qn){if(Qn){var u=ao;Qn=!1,ao=null}else throw Error(k(198));so||(so=!0,Il=u)}}function Vt(e){var t=e,n=e;if(e.alternate)for(;t.return;)t=t.return;else{e=t;do t=e,t.flags&4098&&(n=t.return),e=t.return;while(e)}return t.tag===3?n:null}function qu(e){if(e.tag===13){var t=e.memoizedState;if(t===null&&(e=e.alternate,e!==null&&(t=e.memoizedState)),t!==null)return t.dehydrated}return null}function es(e){if(Vt(e)!==e)throw Error(k(188))}function op(e){var t=e.alternate;if(!t){if(t=Vt(e),t===null)throw Error(k(188));return t!==e?null:e}for(var n=e,r=t;;){var o=n.return;if(o===null)break;var l=o.alternate;if(l===null){if(r=o.return,r!==null){n=r;continue}break}if(o.child===l.child){for(l=o.child;l;){if(l===n)return es(o),e;if(l===r)return es(o),t;l=l.sibling}throw Error(k(188))}if(n.return!==r.return)n=o,r=l;else{for(var i=!1,s=o.child;s;){if(s===n){i=!0,n=o,r=l;break}if(s===r){i=!0,r=o,n=l;break}s=s.sibling}if(!i){for(s=l.child;s;){if(s===n){i=!0,n=l,r=o;break}if(s===r){i=!0,r=l,n=o;break}s=s.sibling}if(!i)throw Error(k(189))}}if(n.alternate!==r)throw Error(k(190))}if(n.tag!==3)throw Error(k(188));return n.stateNode.current===n?e:t}function ec(e){return e=op(e),e!==null?tc(e):null}function tc(e){if(e.tag===5||e.tag===6)return e;for(e=e.child;e!==null;){var t=tc(e);if(t!==null)return t;e=e.sibling}return null}var nc=be.unstable_scheduleCallback,ts=be.unstable_cancelCallback,lp=be.unstable_shouldYield,ip=be.unstable_requestPaint,K=be.unstable_now,ap=be.unstable_getCurrentPriorityLevel,Ai=be.unstable_ImmediatePriority,rc=be.unstable_UserBlockingPriority,uo=be.unstable_NormalPriority,sp=be.unstable_LowPriority,oc=be.unstable_IdlePriority,No=null,Ve=null;function up(e){if(Ve&&typeof Ve.onCommitFiberRoot=="function")try{Ve.onCommitFiberRoot(No,e,void 0,(e.current.flags&128)===128)}catch{}}var ze=Math.clz32?Math.clz32:dp,cp=Math.log,fp=Math.LN2;function dp(e){return e>>>=0,e===0?32:31-(cp(e)/fp|0)|0}var Nr=64,Ar=4194304;function Un(e){switch(e&-e){case 1:return 1;case 2:return 2;case 4:return 4;case 8:return 8;case 16:return 16;case 32:return 32;case 64:case 128:case 256:case 512:case 1024:case 2048:case 4096:case 8192:case 16384:case 32768:case 65536:case 131072:case 262144:case 524288:case 1048576:case 2097152:return e&4194240;case 4194304:case 8388608:case 16777216:case 33554432:case 67108864:return e&130023424;case 134217728:return 134217728;case 268435456:return 268435456;case 536870912:return 536870912;case 1073741824:return 1073741824;default:return e}}function co(e,t){var n=e.pendingLanes;if(n===0)return 0;var r=0,o=e.suspendedLanes,l=e.pingedLanes,i=n&268435455;if(i!==0){var s=i&~o;s!==0?r=Un(s):(l&=i,l!==0&&(r=Un(l)))}else i=n&~o,i!==0?r=Un(i):l!==0&&(r=Un(l));if(r===0)return 0;if(t!==0&&t!==r&&!(t&o)&&(o=r&-r,l=t&-t,o>=l||o===16&&(l&4194240)!==0))return t;if(r&4&&(r|=n&16),t=e.entangledLanes,t!==0)for(e=e.entanglements,t&=r;0<t;)n=31-ze(t),o=1<<n,r|=e[n],t&=~o;return r}function pp(e,t){switch(e){case 1:case 2:case 4:return t+250;case 8:case 16:case 32:case 64:case 128:case 256:case 512:case 1024:case 2048:case 4096:case 8192:case 16384:case 32768:case 65536:case 131072:case 262144:case 524288:case 1048576:case 2097152:return t+5e3;case 4194304:case 8388608:case 16777216:case 33554432:case 67108864:return-1;case 134217728:case 268435456:case 536870912:case 1073741824:return-1;default:return-1}}function gp(e,t){for(var n=e.suspendedLanes,r=e.pingedLanes,o=e.expirationTimes,l=e.pendingLanes;0<l;){var i=31-ze(l),s=1<<i,a=o[i];a===-1?(!(s&n)||s&r)&&(o[i]=pp(s,t)):a<=t&&(e.expiredLanes|=s),l&=~s}}function Dl(e){return e=e.pendingLanes&-1073741825,e!==0?e:e&1073741824?1073741824:0}function lc(){var e=Nr;return Nr<<=1,!(Nr&4194240)&&(Nr=64),e}function tl(e){for(var t=[],n=0;31>n;n++)t.push(e);return t}function xr(e,t,n){e.pendingLanes|=t,t!==536870912&&(e.suspendedLanes=0,e.pingedLanes=0),e=e.eventTimes,t=31-ze(t),e[t]=n}function mp(e,t){var n=e.pendingLanes&~t;e.pendingLanes=t,e.suspendedLanes=0,e.pingedLanes=0,e.expiredLanes&=t,e.mutableReadLanes&=t,e.entangledLanes&=t,t=e.entanglements;var r=e.eventTimes;for(e=e.expirationTimes;0<n;){var o=31-ze(n),l=1<<o;t[o]=0,r[o]=-1,e[o]=-1,n&=~l}}function $i(e,t){var n=e.entangledLanes|=t;for(e=e.entanglements;n;){var r=31-ze(n),o=1<<r;o&t|e[r]&t&&(e[r]|=t),n&=~o}}var z=0;function ic(e){return e&=-e,1<e?4<e?e&268435455?16:536870912:4:1}var ac,Bi,sc,uc,cc,Fl=!1,$r=[],pt=null,gt=null,mt=null,or=new Map,lr=new Map,st=[],hp="mousedown mouseup touchcancel touchend touchstart auxclick dblclick pointercancel pointerdown pointerup dragend dragstart drop compositionend compositionstart keydown keypress keyup input textInput copy cut paste click change contextmenu reset submit".split(" ");function ns(e,t){switch(e){case"focusin":case"focusout":pt=null;break;case"dragenter":case"dragleave":gt=null;break;case"mouseover":case"mouseout":mt=null;break;case"pointerover":case"pointerout":or.delete(t.pointerId);break;case"gotpointercapture":case"lostpointercapture":lr.delete(t.pointerId)}}function An(e,t,n,r,o,l){return e===null||e.nativeEvent!==l?(e={blockedOn:t,domEventName:n,eventSystemFlags:r,nativeEvent:l,targetContainers:[o]},t!==null&&(t=kr(t),t!==null&&Bi(t)),e):(e.eventSystemFlags|=r,t=e.targetContainers,o!==null&&t.indexOf(o)===-1&&t.push(o),e)}function vp(e,t,n,r,o){switch(t){case"focusin":return pt=An(pt,e,t,n,r,o),!0;case"dragenter":return gt=An(gt,e,t,n,r,o),!0;case"mouseover":return mt=An(mt,e,t,n,r,o),!0;case"pointerover":var l=o.pointerId;return or.set(l,An(or.get(l)||null,e,t,n,r,o)),!0;case"gotpointercapture":return l=o.pointerId,lr.set(l,An(lr.get(l)||null,e,t,n,r,o)),!0}return!1}function fc(e){var t=Nt(e.target);if(t!==null){var n=Vt(t);if(n!==null){if(t=n.tag,t===13){if(t=qu(n),t!==null){e.blockedOn=t,cc(e.priority,function(){sc(n)});return}}else if(t===3&&n.stateNode.current.memoizedState.isDehydrated){e.blockedOn=n.tag===3?n.stateNode.containerInfo:null;return}}}e.blockedOn=null}function Xr(e){if(e.blockedOn!==null)return!1;for(var t=e.targetContainers;0<t.length;){var n=Ul(e.domEventName,e.eventSystemFlags,t[0],e.nativeEvent);if(n===null){n=e.nativeEvent;var r=new n.constructor(n.type,n);Bl=r,n.target.dispatchEvent(r),Bl=null}else return t=kr(n),t!==null&&Bi(t),e.blockedOn=n,!1;t.shift()}return!0}function rs(e,t,n){Xr(e)&&n.delete(t)}function yp(){Fl=!1,pt!==null&&Xr(pt)&&(pt=null),gt!==null&&Xr(gt)&&(gt=null),mt!==null&&Xr(mt)&&(mt=null),or.forEach(rs),lr.forEach(rs)}function $n(e,t){e.blockedOn===t&&(e.blockedOn=null,Fl||(Fl=!0,be.unstable_scheduleCallback(be.unstable_NormalPriority,yp)))}function ir(e){function t(o){return $n(o,e)}if(0<$r.length){$n($r[0],e);for(var n=1;n<$r.length;n++){var r=$r[n];r.blockedOn===e&&(r.blockedOn=null)}}for(pt!==null&&$n(pt,e),gt!==null&&$n(gt,e),mt!==null&&$n(mt,e),or.forEach(t),lr.forEach(t),n=0;n<st.length;n++)r=st[n],r.blockedOn===e&&(r.blockedOn=null);for(;0<st.length&&(n=st[0],n.blockedOn===null);)fc(n),n.blockedOn===null&&st.shift()}var fn=nt.ReactCurrentBatchConfig,fo=!0;function wp(e,t,n,r){var o=z,l=fn.transition;fn.transition=null;try{z=1,zi(e,t,n,r)}finally{z=o,fn.transition=l}}function Sp(e,t,n,r){var o=z,l=fn.transition;fn.transition=null;try{z=4,zi(e,t,n,r)}finally{z=o,fn.transition=l}}function zi(e,t,n,r){if(fo){var o=Ul(e,t,n,r);if(o===null)fl(e,t,r,po,n),ns(e,r);else if(vp(o,e,t,n,r))r.stopPropagation();else if(ns(e,r),t&4&&-1<hp.indexOf(e)){for(;o!==null;){var l=kr(o);if(l!==null&&ac(l),l=Ul(e,t,n,r),l===null&&fl(e,t,r,po,n),l===o)break;o=l}o!==null&&r.stopPropagation()}else fl(e,t,r,null,n)}}var po=null;function Ul(e,t,n,r){if(po=null,e=Ni(r),e=Nt(e),e!==null)if(t=Vt(e),t===null)e=null;else if(n=t.tag,n===13){if(e=qu(t),e!==null)return e;e=null}else if(n===3){if(t.stateNode.current.memoizedState.isDehydrated)return t.tag===3?t.stateNode.containerInfo:null;e=null}else t!==e&&(e=null);return po=e,null}function dc(e){switch(e){case"cancel":case"click":case"close":case"contextmenu":case"copy":case"cut":case"auxclick":case"dblclick":case"dragend":case"dragstart":case"drop":case"focusin":case"focusout":case"input":case"invalid":case"keydown":case"keypress":case"keyup":case"mousedown":case"mouseup":case"paste":case"pause":case"play":case"pointercancel":case"pointerdown":case"pointerup":case"ratechange":case"reset":case"resize":case"seeked":case"submit":case"touchcancel":case"touchend":case"touchstart":case"volumechange":case"change":case"selectionchange":case"textInput":case"compositionstart":case"compositionend":case"compositionupdate":case"beforeblur":case"afterblur":case"beforeinput":case"blur":case"fullscreenchange":case"focus":case"hashchange":case"popstate":case"select":case"selectstart":return 1;case"drag":case"dragenter":case"dragexit":case"dragleave":case"dragover":case"mousemove":case"mouseout":case"mouseover":case"pointermove":case"pointerout":case"pointerover":case"scroll":case"toggle":case"touchmove":case"wheel":case"mouseenter":case"mouseleave":case"pointerenter":case"pointerleave":return 4;case"message":switch(ap()){case Ai:return 1;case rc:return 4;case uo:case sp:return 16;case oc:return 536870912;default:return 16}default:return 16}}var ct=null,Oi=null,Zr=null;function pc(){if(Zr)return Zr;var e,t=Oi,n=t.length,r,o="value"in ct?ct.value:ct.textContent,l=o.length;for(e=0;e<n&&t[e]===o[e];e++);var i=n-e;for(r=1;r<=i&&t[n-r]===o[l-r];r++);return Zr=o.slice(e,1<r?1-r:void 0)}function Jr(e){var t=e.keyCode;return"charCode"in e?(e=e.charCode,e===0&&t===13&&(e=13)):e=t,e===10&&(e=13),32<=e||e===13?e:0}function Br(){return!0}function os(){return!1}function _e(e){function t(n,r,o,l,i){this._reactName=n,this._targetInst=o,this.type=r,this.nativeEvent=l,this.target=i,this.currentTarget=null;for(var s in e)e.hasOwnProperty(s)&&(n=e[s],this[s]=n?n(l):l[s]);return this.isDefaultPrevented=(l.defaultPrevented!=null?l.defaultPrevented:l.returnValue===!1)?Br:os,this.isPropagationStopped=os,this}return Q(t.prototype,{preventDefault:function(){this.defaultPrevented=!0;var n=this.nativeEvent;n&&(n.preventDefault?n.preventDefault():typeof n.returnValue!="unknown"&&(n.returnValue=!1),this.isDefaultPrevented=Br)},stopPropagation:function(){var n=this.nativeEvent;n&&(n.stopPropagation?n.stopPropagation():typeof n.cancelBubble!="unknown"&&(n.cancelBubble=!0),this.isPropagationStopped=Br)},persist:function(){},isPersistent:Br}),t}var kn={eventPhase:0,bubbles:0,cancelable:0,timeStamp:function(e){return e.timeStamp||Date.now()},defaultPrevented:0,isTrusted:0},Ii=_e(kn),Pr=Q({},kn,{view:0,detail:0}),xp=_e(Pr),nl,rl,Bn,Ao=Q({},Pr,{screenX:0,screenY:0,clientX:0,clientY:0,pageX:0,pageY:0,ctrlKey:0,shiftKey:0,altKey:0,metaKey:0,getModifierState:Di,button:0,buttons:0,relatedTarget:function(e){return e.relatedTarget===void 0?e.fromElement===e.srcElement?e.toElement:e.fromElement:e.relatedTarget},movementX:function(e){return"movementX"in e?e.movementX:(e!==Bn&&(Bn&&e.type==="mousemove"?(nl=e.screenX-Bn.screenX,rl=e.screenY-Bn.screenY):rl=nl=0,Bn=e),nl)},movementY:function(e){return"movementY"in e?e.movementY:rl}}),ls=_e(Ao),Pp=Q({},Ao,{dataTransfer:0}),kp=_e(Pp),bp=Q({},Pr,{relatedTarget:0}),ol=_e(bp),Cp=Q({},kn,{animationName:0,elapsedTime:0,pseudoElement:0}),_p=_e(Cp),Ep=Q({},kn,{clipboardData:function(e){return"clipboardData"in e?e.clipboardData:window.clipboardData}}),Tp=_e(Ep),Rp=Q({},kn,{data:0}),is=_e(Rp),jp={Esc:"Escape",Spacebar:" ",Left:"ArrowLeft",Up:"ArrowUp",Right:"ArrowRight",Down:"ArrowDown",Del:"Delete",Win:"OS",Menu:"ContextMenu",Apps:"ContextMenu",Scroll:"ScrollLock",MozPrintableKey:"Unidentified"},Lp={8:"Backspace",9:"Tab",12:"Clear",13:"Enter",16:"Shift",17:"Control",18:"Alt",19:"Pause",20:"CapsLock",27:"Escape",32:" ",33:"PageUp",34:"PageDown",35:"End",36:"Home",37:"ArrowLeft",38:"ArrowUp",39:"ArrowRight",40:"ArrowDown",45:"Insert",46:"Delete",112:"F1",113:"F2",114:"F3",115:"F4",116:"F5",117:"F6",118:"F7",119:"F8",120:"F9",121:"F10",122:"F11",123:"F12",144:"NumLock",145:"ScrollLock",224:"Meta"},Mp={Alt:"altKey",Control:"ctrlKey",Meta:"metaKey",Shift:"shiftKey"};function Np(e){var t=this.nativeEvent;return t.getModifierState?t.getModifierState(e):(e=Mp[e])?!!t[e]:!1}function Di(){return Np}var Ap=Q({},Pr,{key:function(e){if(e.key){var t=jp[e.key]||e.key;if(t!=="Unidentified")return t}return e.type==="keypress"?(e=Jr(e),e===13?"Enter":String.fromCharCode(e)):e.type==="keydown"||e.type==="keyup"?Lp[e.keyCode]||"Unidentified":""},code:0,location:0,ctrlKey:0,shiftKey:0,altKey:0,metaKey:0,repeat:0,locale:0,getModifierState:Di,charCode:function(e){return e.type==="keypress"?Jr(e):0},keyCode:function(e){return e.type==="keydown"||e.type==="keyup"?e.keyCode:0},which:function(e){return e.type==="keypress"?Jr(e):e.type==="keydown"||e.type==="keyup"?e.keyCode:0}}),$p=_e(Ap),Bp=Q({},Ao,{pointerId:0,width:0,height:0,pressure:0,tangentialPressure:0,tiltX:0,tiltY:0,twist:0,pointerType:0,isPrimary:0}),as=_e(Bp),zp=Q({},Pr,{touches:0,targetTouches:0,changedTouches:0,altKey:0,metaKey:0,ctrlKey:0,shiftKey:0,getModifierState:Di}),Op=_e(zp),Ip=Q({},kn,{propertyName:0,elapsedTime:0,pseudoElement:0}),Dp=_e(Ip),Fp=Q({},Ao,{deltaX:function(e){return"deltaX"in e?e.deltaX:"wheelDeltaX"in e?-e.wheelDeltaX:0},deltaY:function(e){return"deltaY"in e?e.deltaY:"wheelDeltaY"in e?-e.wheelDeltaY:"wheelDelta"in e?-e.wheelDelta:0},deltaZ:0,deltaMode:0}),Up=_e(Fp),Wp=[9,13,27,32],Fi=Je&&"CompositionEvent"in window,Gn=null;Je&&"documentMode"in document&&(Gn=document.documentMode);var Vp=Je&&"TextEvent"in window&&!Gn,gc=Je&&(!Fi||Gn&&8<Gn&&11>=Gn),ss=" ",us=!1;function mc(e,t){switch(e){case"keyup":return Wp.indexOf(t.keyCode)!==-1;case"keydown":return t.keyCode!==229;case"keypress":case"mousedown":case"focusout":return!0;default:return!1}}function hc(e){return e=e.detail,typeof e=="object"&&"data"in e?e.data:null}var Zt=!1;function Hp(e,t){switch(e){case"compositionend":return hc(t);case"keypress":return t.which!==32?null:(us=!0,ss);case"textInput":return e=t.data,e===ss&&us?null:e;default:return null}}function Qp(e,t){if(Zt)return e==="compositionend"||!Fi&&mc(e,t)?(e=pc(),Zr=Oi=ct=null,Zt=!1,e):null;switch(e){case"paste":return null;case"keypress":if(!(t.ctrlKey||t.altKey||t.metaKey)||t.ctrlKey&&t.altKey){if(t.char&&1<t.char.length)return t.char;if(t.which)return String.fromCharCode(t.which)}return null;case"compositionend":return gc&&t.locale!=="ko"?null:t.data;default:return null}}var Gp={color:!0,date:!0,datetime:!0,"datetime-local":!0,email:!0,month:!0,number:!0,password:!0,range:!0,search:!0,tel:!0,text:!0,time:!0,url:!0,week:!0};function cs(e){var t=e&&e.nodeName&&e.nodeName.toLowerCase();return t==="input"?!!Gp[e.type]:t==="textarea"}function vc(e,t,n,r){Ku(r),t=go(t,"onChange"),0<t.length&&(n=new Ii("onChange","change",null,n,r),e.push({event:n,listeners:t}))}var Kn=null,ar=null;function Kp(e){Tc(e,0)}function $o(e){var t=en(e);if(Fu(t))return e}function Yp(e,t){if(e==="change")return t}var yc=!1;if(Je){var ll;if(Je){var il="oninput"in document;if(!il){var fs=document.createElement("div");fs.setAttribute("oninput","return;"),il=typeof fs.oninput=="function"}ll=il}else ll=!1;yc=ll&&(!document.documentMode||9<document.documentMode)}function ds(){Kn&&(Kn.detachEvent("onpropertychange",wc),ar=Kn=null)}function wc(e){if(e.propertyName==="value"&&$o(ar)){var t=[];vc(t,ar,e,Ni(e)),Ju(Kp,t)}}function Xp(e,t,n){e==="focusin"?(ds(),Kn=t,ar=n,Kn.attachEvent("onpropertychange",wc)):e==="focusout"&&ds()}function Zp(e){if(e==="selectionchange"||e==="keyup"||e==="keydown")return $o(ar)}function Jp(e,t){if(e==="click")return $o(t)}function qp(e,t){if(e==="input"||e==="change")return $o(t)}function eg(e,t){return e===t&&(e!==0||1/e===1/t)||e!==e&&t!==t}var Ie=typeof Object.is=="function"?Object.is:eg;function sr(e,t){if(Ie(e,t))return!0;if(typeof e!="object"||e===null||typeof t!="object"||t===null)return!1;var n=Object.keys(e),r=Object.keys(t);if(n.length!==r.length)return!1;for(r=0;r<n.length;r++){var o=n[r];if(!bl.call(t,o)||!Ie(e[o],t[o]))return!1}return!0}function ps(e){for(;e&&e.firstChild;)e=e.firstChild;return e}function gs(e,t){var n=ps(e);e=0;for(var r;n;){if(n.nodeType===3){if(r=e+n.textContent.length,e<=t&&r>=t)return{node:n,offset:t-e};e=r}e:{for(;n;){if(n.nextSibling){n=n.nextSibling;break e}n=n.parentNode}n=void 0}n=ps(n)}}function Sc(e,t){return e&&t?e===t?!0:e&&e.nodeType===3?!1:t&&t.nodeType===3?Sc(e,t.parentNode):"contains"in e?e.contains(t):e.compareDocumentPosition?!!(e.compareDocumentPosition(t)&16):!1:!1}function xc(){for(var e=window,t=io();t instanceof e.HTMLIFrameElement;){try{var n=typeof t.contentWindow.location.href=="string"}catch{n=!1}if(n)e=t.contentWindow;else break;t=io(e.document)}return t}function Ui(e){var t=e&&e.nodeName&&e.nodeName.toLowerCase();return t&&(t==="input"&&(e.type==="text"||e.type==="search"||e.type==="tel"||e.type==="url"||e.type==="password")||t==="textarea"||e.contentEditable==="true")}function tg(e){var t=xc(),n=e.focusedElem,r=e.selectionRange;if(t!==n&&n&&n.ownerDocument&&Sc(n.ownerDocument.documentElement,n)){if(r!==null&&Ui(n)){if(t=r.start,e=r.end,e===void 0&&(e=t),"selectionStart"in n)n.selectionStart=t,n.selectionEnd=Math.min(e,n.value.length);else if(e=(t=n.ownerDocument||document)&&t.defaultView||window,e.getSelection){e=e.getSelection();var o=n.textContent.length,l=Math.min(r.start,o);r=r.end===void 0?l:Math.min(r.end,o),!e.extend&&l>r&&(o=r,r=l,l=o),o=gs(n,l);var i=gs(n,r);o&&i&&(e.rangeCount!==1||e.anchorNode!==o.node||e.anchorOffset!==o.offset||e.focusNode!==i.node||e.focusOffset!==i.offset)&&(t=t.createRange(),t.setStart(o.node,o.offset),e.removeAllRanges(),l>r?(e.addRange(t),e.extend(i.node,i.offset)):(t.setEnd(i.node,i.offset),e.addRange(t)))}}for(t=[],e=n;e=e.parentNode;)e.nodeType===1&&t.push({element:e,left:e.scrollLeft,top:e.scrollTop});for(typeof n.focus=="function"&&n.focus(),n=0;n<t.length;n++)e=t[n],e.element.scrollLeft=e.left,e.element.scrollTop=e.top}}var ng=Je&&"documentMode"in document&&11>=document.documentMode,Jt=null,Wl=null,Yn=null,Vl=!1;function ms(e,t,n){var r=n.window===n?n.document:n.nodeType===9?n:n.ownerDocument;Vl||Jt==null||Jt!==io(r)||(r=Jt,"selectionStart"in r&&Ui(r)?r={start:r.selectionStart,end:r.selectionEnd}:(r=(r.ownerDocument&&r.ownerDocument.defaultView||window).getSelection(),r={anchorNode:r.anchorNode,anchorOffset:r.anchorOffset,focusNode:r.focusNode,focusOffset:r.focusOffset}),Yn&&sr(Yn,r)||(Yn=r,r=go(Wl,"onSelect"),0<r.length&&(t=new Ii("onSelect","select",null,t,n),e.push({event:t,listeners:r}),t.target=Jt)))}function zr(e,t){var n={};return n[e.toLowerCase()]=t.toLowerCase(),n["Webkit"+e]="webkit"+t,n["Moz"+e]="moz"+t,n}var qt={animationend:zr("Animation","AnimationEnd"),animationiteration:zr("Animation","AnimationIteration"),animationstart:zr("Animation","AnimationStart"),transitionend:zr("Transition","TransitionEnd")},al={},Pc={};Je&&(Pc=document.createElement("div").style,"AnimationEvent"in window||(delete qt.animationend.animation,delete qt.animationiteration.animation,delete qt.animationstart.animation),"TransitionEvent"in window||delete qt.transitionend.transition);function Bo(e){if(al[e])return al[e];if(!qt[e])return e;var t=qt[e],n;for(n in t)if(t.hasOwnProperty(n)&&n in Pc)return al[e]=t[n];return e}var kc=Bo("animationend"),bc=Bo("animationiteration"),Cc=Bo("animationstart"),_c=Bo("transitionend"),Ec=new Map,hs="abort auxClick cancel canPlay canPlayThrough click close contextMenu copy cut drag dragEnd dragEnter dragExit dragLeave dragOver dragStart drop durationChange emptied encrypted ended error gotPointerCapture input invalid keyDown keyPress keyUp load loadedData loadedMetadata loadStart lostPointerCapture mouseDown mouseMove mouseOut mouseOver mouseUp paste pause play playing pointerCancel pointerDown pointerMove pointerOut pointerOver pointerUp progress rateChange reset resize seeked seeking stalled submit suspend timeUpdate touchCancel touchEnd touchStart volumeChange scroll toggle touchMove waiting wheel".split(" ");function bt(e,t){Ec.set(e,t),Wt(t,[e])}for(var sl=0;sl<hs.length;sl++){var ul=hs[sl],rg=ul.toLowerCase(),og=ul[0].toUpperCase()+ul.slice(1);bt(rg,"on"+og)}bt(kc,"onAnimationEnd");bt(bc,"onAnimationIteration");bt(Cc,"onAnimationStart");bt("dblclick","onDoubleClick");bt("focusin","onFocus");bt("focusout","onBlur");bt(_c,"onTransitionEnd");gn("onMouseEnter",["mouseout","mouseover"]);gn("onMouseLeave",["mouseout","mouseover"]);gn("onPointerEnter",["pointerout","pointerover"]);gn("onPointerLeave",["pointerout","pointerover"]);Wt("onChange","change click focusin focusout input keydown keyup selectionchange".split(" "));Wt("onSelect","focusout contextmenu dragend focusin keydown keyup mousedown mouseup selectionchange".split(" "));Wt("onBeforeInput",["compositionend","keypress","textInput","paste"]);Wt("onCompositionEnd","compositionend focusout keydown keypress keyup mousedown".split(" "));Wt("onCompositionStart","compositionstart focusout keydown keypress keyup mousedown".split(" "));Wt("onCompositionUpdate","compositionupdate focusout keydown keypress keyup mousedown".split(" "));var Wn="abort canplay canplaythrough durationchange emptied encrypted ended error loadeddata loadedmetadata loadstart pause play playing progress ratechange resize seeked seeking stalled suspend timeupdate volumechange waiting".split(" "),lg=new Set("cancel close invalid load scroll toggle".split(" ").concat(Wn));function vs(e,t,n){var r=e.type||"unknown-event";e.currentTarget=n,rp(r,t,void 0,e),e.currentTarget=null}function Tc(e,t){t=(t&4)!==0;for(var n=0;n<e.length;n++){var r=e[n],o=r.event;r=r.listeners;e:{var l=void 0;if(t)for(var i=r.length-1;0<=i;i--){var s=r[i],a=s.instance,u=s.currentTarget;if(s=s.listener,a!==l&&o.isPropagationStopped())break e;vs(o,s,u),l=a}else for(i=0;i<r.length;i++){if(s=r[i],a=s.instance,u=s.currentTarget,s=s.listener,a!==l&&o.isPropagationStopped())break e;vs(o,s,u),l=a}}}if(so)throw e=Il,so=!1,Il=null,e}function D(e,t){var n=t[Yl];n===void 0&&(n=t[Yl]=new Set);var r=e+"__bubble";n.has(r)||(Rc(t,e,2,!1),n.add(r))}function cl(e,t,n){var r=0;t&&(r|=4),Rc(n,e,r,t)}var Or="_reactListening"+Math.random().toString(36).slice(2);function ur(e){if(!e[Or]){e[Or]=!0,Bu.forEach(function(n){n!=="selectionchange"&&(lg.has(n)||cl(n,!1,e),cl(n,!0,e))});var t=e.nodeType===9?e:e.ownerDocument;t===null||t[Or]||(t[Or]=!0,cl("selectionchange",!1,t))}}function Rc(e,t,n,r){switch(dc(t)){case 1:var o=wp;break;case 4:o=Sp;break;default:o=zi}n=o.bind(null,t,n,e),o=void 0,!Ol||t!=="touchstart"&&t!=="touchmove"&&t!=="wheel"||(o=!0),r?o!==void 0?e.addEventListener(t,n,{capture:!0,passive:o}):e.addEventListener(t,n,!0):o!==void 0?e.addEventListener(t,n,{passive:o}):e.addEventListener(t,n,!1)}function fl(e,t,n,r,o){var l=r;if(!(t&1)&&!(t&2)&&r!==null)e:for(;;){if(r===null)return;var i=r.tag;if(i===3||i===4){var s=r.stateNode.containerInfo;if(s===o||s.nodeType===8&&s.parentNode===o)break;if(i===4)for(i=r.return;i!==null;){var a=i.tag;if((a===3||a===4)&&(a=i.stateNode.containerInfo,a===o||a.nodeType===8&&a.parentNode===o))return;i=i.return}for(;s!==null;){if(i=Nt(s),i===null)return;if(a=i.tag,a===5||a===6){r=l=i;continue e}s=s.parentNode}}r=r.return}Ju(function(){var u=l,d=Ni(n),f=[];e:{var g=Ec.get(e);if(g!==void 0){var y=Ii,w=e;switch(e){case"keypress":if(Jr(n)===0)break e;case"keydown":case"keyup":y=$p;break;case"focusin":w="focus",y=ol;break;case"focusout":w="blur",y=ol;break;case"beforeblur":case"afterblur":y=ol;break;case"click":if(n.button===2)break e;case"auxclick":case"dblclick":case"mousedown":case"mousemove":case"mouseup":case"mouseout":case"mouseover":case"contextmenu":y=ls;break;case"drag":case"dragend":case"dragenter":case"dragexit":case"dragleave":case"dragover":case"dragstart":case"drop":y=kp;break;case"touchcancel":case"touchend":case"touchmove":case"touchstart":y=Op;break;case kc:case bc:case Cc:y=_p;break;case _c:y=Dp;break;case"scroll":y=xp;break;case"wheel":y=Up;break;case"copy":case"cut":case"paste":y=Tp;break;case"gotpointercapture":case"lostpointercapture":case"pointercancel":case"pointerdown":case"pointermove":case"pointerout":case"pointerover":case"pointerup":y=as}var S=(t&4)!==0,P=!S&&e==="scroll",m=S?g!==null?g+"Capture":null:g;S=[];for(var p=u,h;p!==null;){h=p;var x=h.stateNode;if(h.tag===5&&x!==null&&(h=x,m!==null&&(x=rr(p,m),x!=null&&S.push(cr(p,x,h)))),P)break;p=p.return}0<S.length&&(g=new y(g,w,null,n,d),f.push({event:g,listeners:S}))}}if(!(t&7)){e:{if(g=e==="mouseover"||e==="pointerover",y=e==="mouseout"||e==="pointerout",g&&n!==Bl&&(w=n.relatedTarget||n.fromElement)&&(Nt(w)||w[qe]))break e;if((y||g)&&(g=d.window===d?d:(g=d.ownerDocument)?g.defaultView||g.parentWindow:window,y?(w=n.relatedTarget||n.toElement,y=u,w=w?Nt(w):null,w!==null&&(P=Vt(w),w!==P||w.tag!==5&&w.tag!==6)&&(w=null)):(y=null,w=u),y!==w)){if(S=ls,x="onMouseLeave",m="onMouseEnter",p="mouse",(e==="pointerout"||e==="pointerover")&&(S=as,x="onPointerLeave",m="onPointerEnter",p="pointer"),P=y==null?g:en(y),h=w==null?g:en(w),g=new S(x,p+"leave",y,n,d),g.target=P,g.relatedTarget=h,x=null,Nt(d)===u&&(S=new S(m,p+"enter",w,n,d),S.target=h,S.relatedTarget=P,x=S),P=x,y&&w)t:{for(S=y,m=w,p=0,h=S;h;h=Kt(h))p++;for(h=0,x=m;x;x=Kt(x))h++;for(;0<p-h;)S=Kt(S),p--;for(;0<h-p;)m=Kt(m),h--;for(;p--;){if(S===m||m!==null&&S===m.alternate)break t;S=Kt(S),m=Kt(m)}S=null}else S=null;y!==null&&ys(f,g,y,S,!1),w!==null&&P!==null&&ys(f,P,w,S,!0)}}e:{if(g=u?en(u):window,y=g.nodeName&&g.nodeName.toLowerCase(),y==="select"||y==="input"&&g.type==="file")var b=Yp;else if(cs(g))if(yc)b=qp;else{b=Zp;var E=Xp}else(y=g.nodeName)&&y.toLowerCase()==="input"&&(g.type==="checkbox"||g.type==="radio")&&(b=Jp);if(b&&(b=b(e,u))){vc(f,b,n,d);break e}E&&E(e,g,u),e==="focusout"&&(E=g._wrapperState)&&E.controlled&&g.type==="number"&&Ll(g,"number",g.value)}switch(E=u?en(u):window,e){case"focusin":(cs(E)||E.contentEditable==="true")&&(Jt=E,Wl=u,Yn=null);break;case"focusout":Yn=Wl=Jt=null;break;case"mousedown":Vl=!0;break;case"contextmenu":case"mouseup":case"dragend":Vl=!1,ms(f,n,d);break;case"selectionchange":if(ng)break;case"keydown":case"keyup":ms(f,n,d)}var T;if(Fi)e:{switch(e){case"compositionstart":var R="onCompositionStart";break e;case"compositionend":R="onCompositionEnd";break e;case"compositionupdate":R="onCompositionUpdate";break e}R=void 0}else Zt?mc(e,n)&&(R="onCompositionEnd"):e==="keydown"&&n.keyCode===229&&(R="onCompositionStart");R&&(gc&&n.locale!=="ko"&&(Zt||R!=="onCompositionStart"?R==="onCompositionEnd"&&Zt&&(T=pc()):(ct=d,Oi="value"in ct?ct.value:ct.textContent,Zt=!0)),E=go(u,R),0<E.length&&(R=new is(R,e,null,n,d),f.push({event:R,listeners:E}),T?R.data=T:(T=hc(n),T!==null&&(R.data=T)))),(T=Vp?Hp(e,n):Qp(e,n))&&(u=go(u,"onBeforeInput"),0<u.length&&(d=new is("onBeforeInput","beforeinput",null,n,d),f.push({event:d,listeners:u}),d.data=T))}Tc(f,t)})}function cr(e,t,n){return{instance:e,listener:t,currentTarget:n}}function go(e,t){for(var n=t+"Capture",r=[];e!==null;){var o=e,l=o.stateNode;o.tag===5&&l!==null&&(o=l,l=rr(e,n),l!=null&&r.unshift(cr(e,l,o)),l=rr(e,t),l!=null&&r.push(cr(e,l,o))),e=e.return}return r}function Kt(e){if(e===null)return null;do e=e.return;while(e&&e.tag!==5);return e||null}function ys(e,t,n,r,o){for(var l=t._reactName,i=[];n!==null&&n!==r;){var s=n,a=s.alternate,u=s.stateNode;if(a!==null&&a===r)break;s.tag===5&&u!==null&&(s=u,o?(a=rr(n,l),a!=null&&i.unshift(cr(n,a,s))):o||(a=rr(n,l),a!=null&&i.push(cr(n,a,s)))),n=n.return}i.length!==0&&e.push({event:t,listeners:i})}var ig=/\r\n?/g,ag=/\u0000|\uFFFD/g;function ws(e){return(typeof e=="string"?e:""+e).replace(ig,`
`).replace(ag,"")}function Ir(e,t,n){if(t=ws(t),ws(e)!==t&&n)throw Error(k(425))}function mo(){}var Hl=null,Ql=null;function Gl(e,t){return e==="textarea"||e==="noscript"||typeof t.children=="string"||typeof t.children=="number"||typeof t.dangerouslySetInnerHTML=="object"&&t.dangerouslySetInnerHTML!==null&&t.dangerouslySetInnerHTML.__html!=null}var Kl=typeof setTimeout=="function"?setTimeout:void 0,sg=typeof clearTimeout=="function"?clearTimeout:void 0,Ss=typeof Promise=="function"?Promise:void 0,ug=typeof queueMicrotask=="function"?queueMicrotask:typeof Ss<"u"?function(e){return Ss.resolve(null).then(e).catch(cg)}:Kl;function cg(e){setTimeout(function(){throw e})}function dl(e,t){var n=t,r=0;do{var o=n.nextSibling;if(e.removeChild(n),o&&o.nodeType===8)if(n=o.data,n==="/$"){if(r===0){e.removeChild(o),ir(t);return}r--}else n!=="$"&&n!=="$?"&&n!=="$!"||r++;n=o}while(n);ir(t)}function ht(e){for(;e!=null;e=e.nextSibling){var t=e.nodeType;if(t===1||t===3)break;if(t===8){if(t=e.data,t==="$"||t==="$!"||t==="$?")break;if(t==="/$")return null}}return e}function xs(e){e=e.previousSibling;for(var t=0;e;){if(e.nodeType===8){var n=e.data;if(n==="$"||n==="$!"||n==="$?"){if(t===0)return e;t--}else n==="/$"&&t++}e=e.previousSibling}return null}var bn=Math.random().toString(36).slice(2),We="__reactFiber$"+bn,fr="__reactProps$"+bn,qe="__reactContainer$"+bn,Yl="__reactEvents$"+bn,fg="__reactListeners$"+bn,dg="__reactHandles$"+bn;function Nt(e){var t=e[We];if(t)return t;for(var n=e.parentNode;n;){if(t=n[qe]||n[We]){if(n=t.alternate,t.child!==null||n!==null&&n.child!==null)for(e=xs(e);e!==null;){if(n=e[We])return n;e=xs(e)}return t}e=n,n=e.parentNode}return null}function kr(e){return e=e[We]||e[qe],!e||e.tag!==5&&e.tag!==6&&e.tag!==13&&e.tag!==3?null:e}function en(e){if(e.tag===5||e.tag===6)return e.stateNode;throw Error(k(33))}function zo(e){return e[fr]||null}var Xl=[],tn=-1;function Ct(e){return{current:e}}function F(e){0>tn||(e.current=Xl[tn],Xl[tn]=null,tn--)}function I(e,t){tn++,Xl[tn]=e.current,e.current=t}var kt={},ue=Ct(kt),ve=Ct(!1),Ot=kt;function mn(e,t){var n=e.type.contextTypes;if(!n)return kt;var r=e.stateNode;if(r&&r.__reactInternalMemoizedUnmaskedChildContext===t)return r.__reactInternalMemoizedMaskedChildContext;var o={},l;for(l in n)o[l]=t[l];return r&&(e=e.stateNode,e.__reactInternalMemoizedUnmaskedChildContext=t,e.__reactInternalMemoizedMaskedChildContext=o),o}function ye(e){return e=e.childContextTypes,e!=null}function ho(){F(ve),F(ue)}function Ps(e,t,n){if(ue.current!==kt)throw Error(k(168));I(ue,t),I(ve,n)}function jc(e,t,n){var r=e.stateNode;if(t=t.childContextTypes,typeof r.getChildContext!="function")return n;r=r.getChildContext();for(var o in r)if(!(o in t))throw Error(k(108,Xd(e)||"Unknown",o));return Q({},n,r)}function vo(e){return e=(e=e.stateNode)&&e.__reactInternalMemoizedMergedChildContext||kt,Ot=ue.current,I(ue,e),I(ve,ve.current),!0}function ks(e,t,n){var r=e.stateNode;if(!r)throw Error(k(169));n?(e=jc(e,t,Ot),r.__reactInternalMemoizedMergedChildContext=e,F(ve),F(ue),I(ue,e)):F(ve),I(ve,n)}var Ke=null,Oo=!1,pl=!1;function Lc(e){Ke===null?Ke=[e]:Ke.push(e)}function pg(e){Oo=!0,Lc(e)}function _t(){if(!pl&&Ke!==null){pl=!0;var e=0,t=z;try{var n=Ke;for(z=1;e<n.length;e++){var r=n[e];do r=r(!0);while(r!==null)}Ke=null,Oo=!1}catch(o){throw Ke!==null&&(Ke=Ke.slice(e+1)),nc(Ai,_t),o}finally{z=t,pl=!1}}return null}var nn=[],rn=0,yo=null,wo=0,Ee=[],Te=0,It=null,Ye=1,Xe="";function Lt(e,t){nn[rn++]=wo,nn[rn++]=yo,yo=e,wo=t}function Mc(e,t,n){Ee[Te++]=Ye,Ee[Te++]=Xe,Ee[Te++]=It,It=e;var r=Ye;e=Xe;var o=32-ze(r)-1;r&=~(1<<o),n+=1;var l=32-ze(t)+o;if(30<l){var i=o-o%5;l=(r&(1<<i)-1).toString(32),r>>=i,o-=i,Ye=1<<32-ze(t)+o|n<<o|r,Xe=l+e}else Ye=1<<l|n<<o|r,Xe=e}function Wi(e){e.return!==null&&(Lt(e,1),Mc(e,1,0))}function Vi(e){for(;e===yo;)yo=nn[--rn],nn[rn]=null,wo=nn[--rn],nn[rn]=null;for(;e===It;)It=Ee[--Te],Ee[Te]=null,Xe=Ee[--Te],Ee[Te]=null,Ye=Ee[--Te],Ee[Te]=null}var ke=null,Pe=null,W=!1,Be=null;function Nc(e,t){var n=Re(5,null,null,0);n.elementType="DELETED",n.stateNode=t,n.return=e,t=e.deletions,t===null?(e.deletions=[n],e.flags|=16):t.push(n)}function bs(e,t){switch(e.tag){case 5:var n=e.type;return t=t.nodeType!==1||n.toLowerCase()!==t.nodeName.toLowerCase()?null:t,t!==null?(e.stateNode=t,ke=e,Pe=ht(t.firstChild),!0):!1;case 6:return t=e.pendingProps===""||t.nodeType!==3?null:t,t!==null?(e.stateNode=t,ke=e,Pe=null,!0):!1;case 13:return t=t.nodeType!==8?null:t,t!==null?(n=It!==null?{id:Ye,overflow:Xe}:null,e.memoizedState={dehydrated:t,treeContext:n,retryLane:1073741824},n=Re(18,null,null,0),n.stateNode=t,n.return=e,e.child=n,ke=e,Pe=null,!0):!1;default:return!1}}function Zl(e){return(e.mode&1)!==0&&(e.flags&128)===0}function Jl(e){if(W){var t=Pe;if(t){var n=t;if(!bs(e,t)){if(Zl(e))throw Error(k(418));t=ht(n.nextSibling);var r=ke;t&&bs(e,t)?Nc(r,n):(e.flags=e.flags&-4097|2,W=!1,ke=e)}}else{if(Zl(e))throw Error(k(418));e.flags=e.flags&-4097|2,W=!1,ke=e}}}function Cs(e){for(e=e.return;e!==null&&e.tag!==5&&e.tag!==3&&e.tag!==13;)e=e.return;ke=e}function Dr(e){if(e!==ke)return!1;if(!W)return Cs(e),W=!0,!1;var t;if((t=e.tag!==3)&&!(t=e.tag!==5)&&(t=e.type,t=t!=="head"&&t!=="body"&&!Gl(e.type,e.memoizedProps)),t&&(t=Pe)){if(Zl(e))throw Ac(),Error(k(418));for(;t;)Nc(e,t),t=ht(t.nextSibling)}if(Cs(e),e.tag===13){if(e=e.memoizedState,e=e!==null?e.dehydrated:null,!e)throw Error(k(317));e:{for(e=e.nextSibling,t=0;e;){if(e.nodeType===8){var n=e.data;if(n==="/$"){if(t===0){Pe=ht(e.nextSibling);break e}t--}else n!=="$"&&n!=="$!"&&n!=="$?"||t++}e=e.nextSibling}Pe=null}}else Pe=ke?ht(e.stateNode.nextSibling):null;return!0}function Ac(){for(var e=Pe;e;)e=ht(e.nextSibling)}function hn(){Pe=ke=null,W=!1}function Hi(e){Be===null?Be=[e]:Be.push(e)}var gg=nt.ReactCurrentBatchConfig;function zn(e,t,n){if(e=n.ref,e!==null&&typeof e!="function"&&typeof e!="object"){if(n._owner){if(n=n._owner,n){if(n.tag!==1)throw Error(k(309));var r=n.stateNode}if(!r)throw Error(k(147,e));var o=r,l=""+e;return t!==null&&t.ref!==null&&typeof t.ref=="function"&&t.ref._stringRef===l?t.ref:(t=function(i){var s=o.refs;i===null?delete s[l]:s[l]=i},t._stringRef=l,t)}if(typeof e!="string")throw Error(k(284));if(!n._owner)throw Error(k(290,e))}return e}function Fr(e,t){throw e=Object.prototype.toString.call(t),Error(k(31,e==="[object Object]"?"object with keys {"+Object.keys(t).join(", ")+"}":e))}function _s(e){var t=e._init;return t(e._payload)}function $c(e){function t(m,p){if(e){var h=m.deletions;h===null?(m.deletions=[p],m.flags|=16):h.push(p)}}function n(m,p){if(!e)return null;for(;p!==null;)t(m,p),p=p.sibling;return null}function r(m,p){for(m=new Map;p!==null;)p.key!==null?m.set(p.key,p):m.set(p.index,p),p=p.sibling;return m}function o(m,p){return m=St(m,p),m.index=0,m.sibling=null,m}function l(m,p,h){return m.index=h,e?(h=m.alternate,h!==null?(h=h.index,h<p?(m.flags|=2,p):h):(m.flags|=2,p)):(m.flags|=1048576,p)}function i(m){return e&&m.alternate===null&&(m.flags|=2),m}function s(m,p,h,x){return p===null||p.tag!==6?(p=Sl(h,m.mode,x),p.return=m,p):(p=o(p,h),p.return=m,p)}function a(m,p,h,x){var b=h.type;return b===Xt?d(m,p,h.props.children,x,h.key):p!==null&&(p.elementType===b||typeof b=="object"&&b!==null&&b.$$typeof===it&&_s(b)===p.type)?(x=o(p,h.props),x.ref=zn(m,p,h),x.return=m,x):(x=lo(h.type,h.key,h.props,null,m.mode,x),x.ref=zn(m,p,h),x.return=m,x)}function u(m,p,h,x){return p===null||p.tag!==4||p.stateNode.containerInfo!==h.containerInfo||p.stateNode.implementation!==h.implementation?(p=xl(h,m.mode,x),p.return=m,p):(p=o(p,h.children||[]),p.return=m,p)}function d(m,p,h,x,b){return p===null||p.tag!==7?(p=zt(h,m.mode,x,b),p.return=m,p):(p=o(p,h),p.return=m,p)}function f(m,p,h){if(typeof p=="string"&&p!==""||typeof p=="number")return p=Sl(""+p,m.mode,h),p.return=m,p;if(typeof p=="object"&&p!==null){switch(p.$$typeof){case jr:return h=lo(p.type,p.key,p.props,null,m.mode,h),h.ref=zn(m,null,p),h.return=m,h;case Yt:return p=xl(p,m.mode,h),p.return=m,p;case it:var x=p._init;return f(m,x(p._payload),h)}if(Fn(p)||Mn(p))return p=zt(p,m.mode,h,null),p.return=m,p;Fr(m,p)}return null}function g(m,p,h,x){var b=p!==null?p.key:null;if(typeof h=="string"&&h!==""||typeof h=="number")return b!==null?null:s(m,p,""+h,x);if(typeof h=="object"&&h!==null){switch(h.$$typeof){case jr:return h.key===b?a(m,p,h,x):null;case Yt:return h.key===b?u(m,p,h,x):null;case it:return b=h._init,g(m,p,b(h._payload),x)}if(Fn(h)||Mn(h))return b!==null?null:d(m,p,h,x,null);Fr(m,h)}return null}function y(m,p,h,x,b){if(typeof x=="string"&&x!==""||typeof x=="number")return m=m.get(h)||null,s(p,m,""+x,b);if(typeof x=="object"&&x!==null){switch(x.$$typeof){case jr:return m=m.get(x.key===null?h:x.key)||null,a(p,m,x,b);case Yt:return m=m.get(x.key===null?h:x.key)||null,u(p,m,x,b);case it:var E=x._init;return y(m,p,h,E(x._payload),b)}if(Fn(x)||Mn(x))return m=m.get(h)||null,d(p,m,x,b,null);Fr(p,x)}return null}function w(m,p,h,x){for(var b=null,E=null,T=p,R=p=0,$=null;T!==null&&R<h.length;R++){T.index>R?($=T,T=null):$=T.sibling;var M=g(m,T,h[R],x);if(M===null){T===null&&(T=$);break}e&&T&&M.alternate===null&&t(m,T),p=l(M,p,R),E===null?b=M:E.sibling=M,E=M,T=$}if(R===h.length)return n(m,T),W&&Lt(m,R),b;if(T===null){for(;R<h.length;R++)T=f(m,h[R],x),T!==null&&(p=l(T,p,R),E===null?b=T:E.sibling=T,E=T);return W&&Lt(m,R),b}for(T=r(m,T);R<h.length;R++)$=y(T,m,R,h[R],x),$!==null&&(e&&$.alternate!==null&&T.delete($.key===null?R:$.key),p=l($,p,R),E===null?b=$:E.sibling=$,E=$);return e&&T.forEach(function(ce){return t(m,ce)}),W&&Lt(m,R),b}function S(m,p,h,x){var b=Mn(h);if(typeof b!="function")throw Error(k(150));if(h=b.call(h),h==null)throw Error(k(151));for(var E=b=null,T=p,R=p=0,$=null,M=h.next();T!==null&&!M.done;R++,M=h.next()){T.index>R?($=T,T=null):$=T.sibling;var ce=g(m,T,M.value,x);if(ce===null){T===null&&(T=$);break}e&&T&&ce.alternate===null&&t(m,T),p=l(ce,p,R),E===null?b=ce:E.sibling=ce,E=ce,T=$}if(M.done)return n(m,T),W&&Lt(m,R),b;if(T===null){for(;!M.done;R++,M=h.next())M=f(m,M.value,x),M!==null&&(p=l(M,p,R),E===null?b=M:E.sibling=M,E=M);return W&&Lt(m,R),b}for(T=r(m,T);!M.done;R++,M=h.next())M=y(T,m,R,M.value,x),M!==null&&(e&&M.alternate!==null&&T.delete(M.key===null?R:M.key),p=l(M,p,R),E===null?b=M:E.sibling=M,E=M);return e&&T.forEach(function(ot){return t(m,ot)}),W&&Lt(m,R),b}function P(m,p,h,x){if(typeof h=="object"&&h!==null&&h.type===Xt&&h.key===null&&(h=h.props.children),typeof h=="object"&&h!==null){switch(h.$$typeof){case jr:e:{for(var b=h.key,E=p;E!==null;){if(E.key===b){if(b=h.type,b===Xt){if(E.tag===7){n(m,E.sibling),p=o(E,h.props.children),p.return=m,m=p;break e}}else if(E.elementType===b||typeof b=="object"&&b!==null&&b.$$typeof===it&&_s(b)===E.type){n(m,E.sibling),p=o(E,h.props),p.ref=zn(m,E,h),p.return=m,m=p;break e}n(m,E);break}else t(m,E);E=E.sibling}h.type===Xt?(p=zt(h.props.children,m.mode,x,h.key),p.return=m,m=p):(x=lo(h.type,h.key,h.props,null,m.mode,x),x.ref=zn(m,p,h),x.return=m,m=x)}return i(m);case Yt:e:{for(E=h.key;p!==null;){if(p.key===E)if(p.tag===4&&p.stateNode.containerInfo===h.containerInfo&&p.stateNode.implementation===h.implementation){n(m,p.sibling),p=o(p,h.children||[]),p.return=m,m=p;break e}else{n(m,p);break}else t(m,p);p=p.sibling}p=xl(h,m.mode,x),p.return=m,m=p}return i(m);case it:return E=h._init,P(m,p,E(h._payload),x)}if(Fn(h))return w(m,p,h,x);if(Mn(h))return S(m,p,h,x);Fr(m,h)}return typeof h=="string"&&h!==""||typeof h=="number"?(h=""+h,p!==null&&p.tag===6?(n(m,p.sibling),p=o(p,h),p.return=m,m=p):(n(m,p),p=Sl(h,m.mode,x),p.return=m,m=p),i(m)):n(m,p)}return P}var vn=$c(!0),Bc=$c(!1),So=Ct(null),xo=null,on=null,Qi=null;function Gi(){Qi=on=xo=null}function Ki(e){var t=So.current;F(So),e._currentValue=t}function ql(e,t,n){for(;e!==null;){var r=e.alternate;if((e.childLanes&t)!==t?(e.childLanes|=t,r!==null&&(r.childLanes|=t)):r!==null&&(r.childLanes&t)!==t&&(r.childLanes|=t),e===n)break;e=e.return}}function dn(e,t){xo=e,Qi=on=null,e=e.dependencies,e!==null&&e.firstContext!==null&&(e.lanes&t&&(he=!0),e.firstContext=null)}function Le(e){var t=e._currentValue;if(Qi!==e)if(e={context:e,memoizedValue:t,next:null},on===null){if(xo===null)throw Error(k(308));on=e,xo.dependencies={lanes:0,firstContext:e}}else on=on.next=e;return t}var At=null;function Yi(e){At===null?At=[e]:At.push(e)}function zc(e,t,n,r){var o=t.interleaved;return o===null?(n.next=n,Yi(t)):(n.next=o.next,o.next=n),t.interleaved=n,et(e,r)}function et(e,t){e.lanes|=t;var n=e.alternate;for(n!==null&&(n.lanes|=t),n=e,e=e.return;e!==null;)e.childLanes|=t,n=e.alternate,n!==null&&(n.childLanes|=t),n=e,e=e.return;return n.tag===3?n.stateNode:null}var at=!1;function Xi(e){e.updateQueue={baseState:e.memoizedState,firstBaseUpdate:null,lastBaseUpdate:null,shared:{pending:null,interleaved:null,lanes:0},effects:null}}function Oc(e,t){e=e.updateQueue,t.updateQueue===e&&(t.updateQueue={baseState:e.baseState,firstBaseUpdate:e.firstBaseUpdate,lastBaseUpdate:e.lastBaseUpdate,shared:e.shared,effects:e.effects})}function Ze(e,t){return{eventTime:e,lane:t,tag:0,payload:null,callback:null,next:null}}function vt(e,t,n){var r=e.updateQueue;if(r===null)return null;if(r=r.shared,A&2){var o=r.pending;return o===null?t.next=t:(t.next=o.next,o.next=t),r.pending=t,et(e,n)}return o=r.interleaved,o===null?(t.next=t,Yi(r)):(t.next=o.next,o.next=t),r.interleaved=t,et(e,n)}function qr(e,t,n){if(t=t.updateQueue,t!==null&&(t=t.shared,(n&4194240)!==0)){var r=t.lanes;r&=e.pendingLanes,n|=r,t.lanes=n,$i(e,n)}}function Es(e,t){var n=e.updateQueue,r=e.alternate;if(r!==null&&(r=r.updateQueue,n===r)){var o=null,l=null;if(n=n.firstBaseUpdate,n!==null){do{var i={eventTime:n.eventTime,lane:n.lane,tag:n.tag,payload:n.payload,callback:n.callback,next:null};l===null?o=l=i:l=l.next=i,n=n.next}while(n!==null);l===null?o=l=t:l=l.next=t}else o=l=t;n={baseState:r.baseState,firstBaseUpdate:o,lastBaseUpdate:l,shared:r.shared,effects:r.effects},e.updateQueue=n;return}e=n.lastBaseUpdate,e===null?n.firstBaseUpdate=t:e.next=t,n.lastBaseUpdate=t}function Po(e,t,n,r){var o=e.updateQueue;at=!1;var l=o.firstBaseUpdate,i=o.lastBaseUpdate,s=o.shared.pending;if(s!==null){o.shared.pending=null;var a=s,u=a.next;a.next=null,i===null?l=u:i.next=u,i=a;var d=e.alternate;d!==null&&(d=d.updateQueue,s=d.lastBaseUpdate,s!==i&&(s===null?d.firstBaseUpdate=u:s.next=u,d.lastBaseUpdate=a))}if(l!==null){var f=o.baseState;i=0,d=u=a=null,s=l;do{var g=s.lane,y=s.eventTime;if((r&g)===g){d!==null&&(d=d.next={eventTime:y,lane:0,tag:s.tag,payload:s.payload,callback:s.callback,next:null});e:{var w=e,S=s;switch(g=t,y=n,S.tag){case 1:if(w=S.payload,typeof w=="function"){f=w.call(y,f,g);break e}f=w;break e;case 3:w.flags=w.flags&-65537|128;case 0:if(w=S.payload,g=typeof w=="function"?w.call(y,f,g):w,g==null)break e;f=Q({},f,g);break e;case 2:at=!0}}s.callback!==null&&s.lane!==0&&(e.flags|=64,g=o.effects,g===null?o.effects=[s]:g.push(s))}else y={eventTime:y,lane:g,tag:s.tag,payload:s.payload,callback:s.callback,next:null},d===null?(u=d=y,a=f):d=d.next=y,i|=g;if(s=s.next,s===null){if(s=o.shared.pending,s===null)break;g=s,s=g.next,g.next=null,o.lastBaseUpdate=g,o.shared.pending=null}}while(!0);if(d===null&&(a=f),o.baseState=a,o.firstBaseUpdate=u,o.lastBaseUpdate=d,t=o.shared.interleaved,t!==null){o=t;do i|=o.lane,o=o.next;while(o!==t)}else l===null&&(o.shared.lanes=0);Ft|=i,e.lanes=i,e.memoizedState=f}}function Ts(e,t,n){if(e=t.effects,t.effects=null,e!==null)for(t=0;t<e.length;t++){var r=e[t],o=r.callback;if(o!==null){if(r.callback=null,r=n,typeof o!="function")throw Error(k(191,o));o.call(r)}}}var br={},He=Ct(br),dr=Ct(br),pr=Ct(br);function $t(e){if(e===br)throw Error(k(174));return e}function Zi(e,t){switch(I(pr,t),I(dr,e),I(He,br),e=t.nodeType,e){case 9:case 11:t=(t=t.documentElement)?t.namespaceURI:Nl(null,"");break;default:e=e===8?t.parentNode:t,t=e.namespaceURI||null,e=e.tagName,t=Nl(t,e)}F(He),I(He,t)}function yn(){F(He),F(dr),F(pr)}function Ic(e){$t(pr.current);var t=$t(He.current),n=Nl(t,e.type);t!==n&&(I(dr,e),I(He,n))}function Ji(e){dr.current===e&&(F(He),F(dr))}var V=Ct(0);function ko(e){for(var t=e;t!==null;){if(t.tag===13){var n=t.memoizedState;if(n!==null&&(n=n.dehydrated,n===null||n.data==="$?"||n.data==="$!"))return t}else if(t.tag===19&&t.memoizedProps.revealOrder!==void 0){if(t.flags&128)return t}else if(t.child!==null){t.child.return=t,t=t.child;continue}if(t===e)break;for(;t.sibling===null;){if(t.return===null||t.return===e)return null;t=t.return}t.sibling.return=t.return,t=t.sibling}return null}var gl=[];function qi(){for(var e=0;e<gl.length;e++)gl[e]._workInProgressVersionPrimary=null;gl.length=0}var eo=nt.ReactCurrentDispatcher,ml=nt.ReactCurrentBatchConfig,Dt=0,H=null,J=null,te=null,bo=!1,Xn=!1,gr=0,mg=0;function ie(){throw Error(k(321))}function ea(e,t){if(t===null)return!1;for(var n=0;n<t.length&&n<e.length;n++)if(!Ie(e[n],t[n]))return!1;return!0}function ta(e,t,n,r,o,l){if(Dt=l,H=t,t.memoizedState=null,t.updateQueue=null,t.lanes=0,eo.current=e===null||e.memoizedState===null?wg:Sg,e=n(r,o),Xn){l=0;do{if(Xn=!1,gr=0,25<=l)throw Error(k(301));l+=1,te=J=null,t.updateQueue=null,eo.current=xg,e=n(r,o)}while(Xn)}if(eo.current=Co,t=J!==null&&J.next!==null,Dt=0,te=J=H=null,bo=!1,t)throw Error(k(300));return e}function na(){var e=gr!==0;return gr=0,e}function Ue(){var e={memoizedState:null,baseState:null,baseQueue:null,queue:null,next:null};return te===null?H.memoizedState=te=e:te=te.next=e,te}function Me(){if(J===null){var e=H.alternate;e=e!==null?e.memoizedState:null}else e=J.next;var t=te===null?H.memoizedState:te.next;if(t!==null)te=t,J=e;else{if(e===null)throw Error(k(310));J=e,e={memoizedState:J.memoizedState,baseState:J.baseState,baseQueue:J.baseQueue,queue:J.queue,next:null},te===null?H.memoizedState=te=e:te=te.next=e}return te}function mr(e,t){return typeof t=="function"?t(e):t}function hl(e){var t=Me(),n=t.queue;if(n===null)throw Error(k(311));n.lastRenderedReducer=e;var r=J,o=r.baseQueue,l=n.pending;if(l!==null){if(o!==null){var i=o.next;o.next=l.next,l.next=i}r.baseQueue=o=l,n.pending=null}if(o!==null){l=o.next,r=r.baseState;var s=i=null,a=null,u=l;do{var d=u.lane;if((Dt&d)===d)a!==null&&(a=a.next={lane:0,action:u.action,hasEagerState:u.hasEagerState,eagerState:u.eagerState,next:null}),r=u.hasEagerState?u.eagerState:e(r,u.action);else{var f={lane:d,action:u.action,hasEagerState:u.hasEagerState,eagerState:u.eagerState,next:null};a===null?(s=a=f,i=r):a=a.next=f,H.lanes|=d,Ft|=d}u=u.next}while(u!==null&&u!==l);a===null?i=r:a.next=s,Ie(r,t.memoizedState)||(he=!0),t.memoizedState=r,t.baseState=i,t.baseQueue=a,n.lastRenderedState=r}if(e=n.interleaved,e!==null){o=e;do l=o.lane,H.lanes|=l,Ft|=l,o=o.next;while(o!==e)}else o===null&&(n.lanes=0);return[t.memoizedState,n.dispatch]}function vl(e){var t=Me(),n=t.queue;if(n===null)throw Error(k(311));n.lastRenderedReducer=e;var r=n.dispatch,o=n.pending,l=t.memoizedState;if(o!==null){n.pending=null;var i=o=o.next;do l=e(l,i.action),i=i.next;while(i!==o);Ie(l,t.memoizedState)||(he=!0),t.memoizedState=l,t.baseQueue===null&&(t.baseState=l),n.lastRenderedState=l}return[l,r]}function Dc(){}function Fc(e,t){var n=H,r=Me(),o=t(),l=!Ie(r.memoizedState,o);if(l&&(r.memoizedState=o,he=!0),r=r.queue,ra(Vc.bind(null,n,r,e),[e]),r.getSnapshot!==t||l||te!==null&&te.memoizedState.tag&1){if(n.flags|=2048,hr(9,Wc.bind(null,n,r,o,t),void 0,null),ne===null)throw Error(k(349));Dt&30||Uc(n,t,o)}return o}function Uc(e,t,n){e.flags|=16384,e={getSnapshot:t,value:n},t=H.updateQueue,t===null?(t={lastEffect:null,stores:null},H.updateQueue=t,t.stores=[e]):(n=t.stores,n===null?t.stores=[e]:n.push(e))}function Wc(e,t,n,r){t.value=n,t.getSnapshot=r,Hc(t)&&Qc(e)}function Vc(e,t,n){return n(function(){Hc(t)&&Qc(e)})}function Hc(e){var t=e.getSnapshot;e=e.value;try{var n=t();return!Ie(e,n)}catch{return!0}}function Qc(e){var t=et(e,1);t!==null&&Oe(t,e,1,-1)}function Rs(e){var t=Ue();return typeof e=="function"&&(e=e()),t.memoizedState=t.baseState=e,e={pending:null,interleaved:null,lanes:0,dispatch:null,lastRenderedReducer:mr,lastRenderedState:e},t.queue=e,e=e.dispatch=yg.bind(null,H,e),[t.memoizedState,e]}function hr(e,t,n,r){return e={tag:e,create:t,destroy:n,deps:r,next:null},t=H.updateQueue,t===null?(t={lastEffect:null,stores:null},H.updateQueue=t,t.lastEffect=e.next=e):(n=t.lastEffect,n===null?t.lastEffect=e.next=e:(r=n.next,n.next=e,e.next=r,t.lastEffect=e)),e}function Gc(){return Me().memoizedState}function to(e,t,n,r){var o=Ue();H.flags|=e,o.memoizedState=hr(1|t,n,void 0,r===void 0?null:r)}function Io(e,t,n,r){var o=Me();r=r===void 0?null:r;var l=void 0;if(J!==null){var i=J.memoizedState;if(l=i.destroy,r!==null&&ea(r,i.deps)){o.memoizedState=hr(t,n,l,r);return}}H.flags|=e,o.memoizedState=hr(1|t,n,l,r)}function js(e,t){return to(8390656,8,e,t)}function ra(e,t){return Io(2048,8,e,t)}function Kc(e,t){return Io(4,2,e,t)}function Yc(e,t){return Io(4,4,e,t)}function Xc(e,t){if(typeof t=="function")return e=e(),t(e),function(){t(null)};if(t!=null)return e=e(),t.current=e,function(){t.current=null}}function Zc(e,t,n){return n=n!=null?n.concat([e]):null,Io(4,4,Xc.bind(null,t,e),n)}function oa(){}function Jc(e,t){var n=Me();t=t===void 0?null:t;var r=n.memoizedState;return r!==null&&t!==null&&ea(t,r[1])?r[0]:(n.memoizedState=[e,t],e)}function qc(e,t){var n=Me();t=t===void 0?null:t;var r=n.memoizedState;return r!==null&&t!==null&&ea(t,r[1])?r[0]:(e=e(),n.memoizedState=[e,t],e)}function ef(e,t,n){return Dt&21?(Ie(n,t)||(n=lc(),H.lanes|=n,Ft|=n,e.baseState=!0),t):(e.baseState&&(e.baseState=!1,he=!0),e.memoizedState=n)}function hg(e,t){var n=z;z=n!==0&&4>n?n:4,e(!0);var r=ml.transition;ml.transition={};try{e(!1),t()}finally{z=n,ml.transition=r}}function tf(){return Me().memoizedState}function vg(e,t,n){var r=wt(e);if(n={lane:r,action:n,hasEagerState:!1,eagerState:null,next:null},nf(e))rf(t,n);else if(n=zc(e,t,n,r),n!==null){var o=de();Oe(n,e,r,o),of(n,t,r)}}function yg(e,t,n){var r=wt(e),o={lane:r,action:n,hasEagerState:!1,eagerState:null,next:null};if(nf(e))rf(t,o);else{var l=e.alternate;if(e.lanes===0&&(l===null||l.lanes===0)&&(l=t.lastRenderedReducer,l!==null))try{var i=t.lastRenderedState,s=l(i,n);if(o.hasEagerState=!0,o.eagerState=s,Ie(s,i)){var a=t.interleaved;a===null?(o.next=o,Yi(t)):(o.next=a.next,a.next=o),t.interleaved=o;return}}catch{}finally{}n=zc(e,t,o,r),n!==null&&(o=de(),Oe(n,e,r,o),of(n,t,r))}}function nf(e){var t=e.alternate;return e===H||t!==null&&t===H}function rf(e,t){Xn=bo=!0;var n=e.pending;n===null?t.next=t:(t.next=n.next,n.next=t),e.pending=t}function of(e,t,n){if(n&4194240){var r=t.lanes;r&=e.pendingLanes,n|=r,t.lanes=n,$i(e,n)}}var Co={readContext:Le,useCallback:ie,useContext:ie,useEffect:ie,useImperativeHandle:ie,useInsertionEffect:ie,useLayoutEffect:ie,useMemo:ie,useReducer:ie,useRef:ie,useState:ie,useDebugValue:ie,useDeferredValue:ie,useTransition:ie,useMutableSource:ie,useSyncExternalStore:ie,useId:ie,unstable_isNewReconciler:!1},wg={readContext:Le,useCallback:function(e,t){return Ue().memoizedState=[e,t===void 0?null:t],e},useContext:Le,useEffect:js,useImperativeHandle:function(e,t,n){return n=n!=null?n.concat([e]):null,to(4194308,4,Xc.bind(null,t,e),n)},useLayoutEffect:function(e,t){return to(4194308,4,e,t)},useInsertionEffect:function(e,t){return to(4,2,e,t)},useMemo:function(e,t){var n=Ue();return t=t===void 0?null:t,e=e(),n.memoizedState=[e,t],e},useReducer:function(e,t,n){var r=Ue();return t=n!==void 0?n(t):t,r.memoizedState=r.baseState=t,e={pending:null,interleaved:null,lanes:0,dispatch:null,lastRenderedReducer:e,lastRenderedState:t},r.queue=e,e=e.dispatch=vg.bind(null,H,e),[r.memoizedState,e]},useRef:function(e){var t=Ue();return e={current:e},t.memoizedState=e},useState:Rs,useDebugValue:oa,useDeferredValue:function(e){return Ue().memoizedState=e},useTransition:function(){var e=Rs(!1),t=e[0];return e=hg.bind(null,e[1]),Ue().memoizedState=e,[t,e]},useMutableSource:function(){},useSyncExternalStore:function(e,t,n){var r=H,o=Ue();if(W){if(n===void 0)throw Error(k(407));n=n()}else{if(n=t(),ne===null)throw Error(k(349));Dt&30||Uc(r,t,n)}o.memoizedState=n;var l={value:n,getSnapshot:t};return o.queue=l,js(Vc.bind(null,r,l,e),[e]),r.flags|=2048,hr(9,Wc.bind(null,r,l,n,t),void 0,null),n},useId:function(){var e=Ue(),t=ne.identifierPrefix;if(W){var n=Xe,r=Ye;n=(r&~(1<<32-ze(r)-1)).toString(32)+n,t=":"+t+"R"+n,n=gr++,0<n&&(t+="H"+n.toString(32)),t+=":"}else n=mg++,t=":"+t+"r"+n.toString(32)+":";return e.memoizedState=t},unstable_isNewReconciler:!1},Sg={readContext:Le,useCallback:Jc,useContext:Le,useEffect:ra,useImperativeHandle:Zc,useInsertionEffect:Kc,useLayoutEffect:Yc,useMemo:qc,useReducer:hl,useRef:Gc,useState:function(){return hl(mr)},useDebugValue:oa,useDeferredValue:function(e){var t=Me();return ef(t,J.memoizedState,e)},useTransition:function(){var e=hl(mr)[0],t=Me().memoizedState;return[e,t]},useMutableSource:Dc,useSyncExternalStore:Fc,useId:tf,unstable_isNewReconciler:!1},xg={readContext:Le,useCallback:Jc,useContext:Le,useEffect:ra,useImperativeHandle:Zc,useInsertionEffect:Kc,useLayoutEffect:Yc,useMemo:qc,useReducer:vl,useRef:Gc,useState:function(){return vl(mr)},useDebugValue:oa,useDeferredValue:function(e){var t=Me();return J===null?t.memoizedState=e:ef(t,J.memoizedState,e)},useTransition:function(){var e=vl(mr)[0],t=Me().memoizedState;return[e,t]},useMutableSource:Dc,useSyncExternalStore:Fc,useId:tf,unstable_isNewReconciler:!1};function Ae(e,t){if(e&&e.defaultProps){t=Q({},t),e=e.defaultProps;for(var n in e)t[n]===void 0&&(t[n]=e[n]);return t}return t}function ei(e,t,n,r){t=e.memoizedState,n=n(r,t),n=n==null?t:Q({},t,n),e.memoizedState=n,e.lanes===0&&(e.updateQueue.baseState=n)}var Do={isMounted:function(e){return(e=e._reactInternals)?Vt(e)===e:!1},enqueueSetState:function(e,t,n){e=e._reactInternals;var r=de(),o=wt(e),l=Ze(r,o);l.payload=t,n!=null&&(l.callback=n),t=vt(e,l,o),t!==null&&(Oe(t,e,o,r),qr(t,e,o))},enqueueReplaceState:function(e,t,n){e=e._reactInternals;var r=de(),o=wt(e),l=Ze(r,o);l.tag=1,l.payload=t,n!=null&&(l.callback=n),t=vt(e,l,o),t!==null&&(Oe(t,e,o,r),qr(t,e,o))},enqueueForceUpdate:function(e,t){e=e._reactInternals;var n=de(),r=wt(e),o=Ze(n,r);o.tag=2,t!=null&&(o.callback=t),t=vt(e,o,r),t!==null&&(Oe(t,e,r,n),qr(t,e,r))}};function Ls(e,t,n,r,o,l,i){return e=e.stateNode,typeof e.shouldComponentUpdate=="function"?e.shouldComponentUpdate(r,l,i):t.prototype&&t.prototype.isPureReactComponent?!sr(n,r)||!sr(o,l):!0}function lf(e,t,n){var r=!1,o=kt,l=t.contextType;return typeof l=="object"&&l!==null?l=Le(l):(o=ye(t)?Ot:ue.current,r=t.contextTypes,l=(r=r!=null)?mn(e,o):kt),t=new t(n,l),e.memoizedState=t.state!==null&&t.state!==void 0?t.state:null,t.updater=Do,e.stateNode=t,t._reactInternals=e,r&&(e=e.stateNode,e.__reactInternalMemoizedUnmaskedChildContext=o,e.__reactInternalMemoizedMaskedChildContext=l),t}function Ms(e,t,n,r){e=t.state,typeof t.componentWillReceiveProps=="function"&&t.componentWillReceiveProps(n,r),typeof t.UNSAFE_componentWillReceiveProps=="function"&&t.UNSAFE_componentWillReceiveProps(n,r),t.state!==e&&Do.enqueueReplaceState(t,t.state,null)}function ti(e,t,n,r){var o=e.stateNode;o.props=n,o.state=e.memoizedState,o.refs={},Xi(e);var l=t.contextType;typeof l=="object"&&l!==null?o.context=Le(l):(l=ye(t)?Ot:ue.current,o.context=mn(e,l)),o.state=e.memoizedState,l=t.getDerivedStateFromProps,typeof l=="function"&&(ei(e,t,l,n),o.state=e.memoizedState),typeof t.getDerivedStateFromProps=="function"||typeof o.getSnapshotBeforeUpdate=="function"||typeof o.UNSAFE_componentWillMount!="function"&&typeof o.componentWillMount!="function"||(t=o.state,typeof o.componentWillMount=="function"&&o.componentWillMount(),typeof o.UNSAFE_componentWillMount=="function"&&o.UNSAFE_componentWillMount(),t!==o.state&&Do.enqueueReplaceState(o,o.state,null),Po(e,n,o,r),o.state=e.memoizedState),typeof o.componentDidMount=="function"&&(e.flags|=4194308)}function wn(e,t){try{var n="",r=t;do n+=Yd(r),r=r.return;while(r);var o=n}catch(l){o=`
Error generating stack: `+l.message+`
`+l.stack}return{value:e,source:t,stack:o,digest:null}}function yl(e,t,n){return{value:e,source:null,stack:n??null,digest:t??null}}function ni(e,t){try{console.error(t.value)}catch(n){setTimeout(function(){throw n})}}var Pg=typeof WeakMap=="function"?WeakMap:Map;function af(e,t,n){n=Ze(-1,n),n.tag=3,n.payload={element:null};var r=t.value;return n.callback=function(){Eo||(Eo=!0,di=r),ni(e,t)},n}function sf(e,t,n){n=Ze(-1,n),n.tag=3;var r=e.type.getDerivedStateFromError;if(typeof r=="function"){var o=t.value;n.payload=function(){return r(o)},n.callback=function(){ni(e,t)}}var l=e.stateNode;return l!==null&&typeof l.componentDidCatch=="function"&&(n.callback=function(){ni(e,t),typeof r!="function"&&(yt===null?yt=new Set([this]):yt.add(this));var i=t.stack;this.componentDidCatch(t.value,{componentStack:i!==null?i:""})}),n}function Ns(e,t,n){var r=e.pingCache;if(r===null){r=e.pingCache=new Pg;var o=new Set;r.set(t,o)}else o=r.get(t),o===void 0&&(o=new Set,r.set(t,o));o.has(n)||(o.add(n),e=Bg.bind(null,e,t,n),t.then(e,e))}function As(e){do{var t;if((t=e.tag===13)&&(t=e.memoizedState,t=t!==null?t.dehydrated!==null:!0),t)return e;e=e.return}while(e!==null);return null}function $s(e,t,n,r,o){return e.mode&1?(e.flags|=65536,e.lanes=o,e):(e===t?e.flags|=65536:(e.flags|=128,n.flags|=131072,n.flags&=-52805,n.tag===1&&(n.alternate===null?n.tag=17:(t=Ze(-1,1),t.tag=2,vt(n,t,1))),n.lanes|=1),e)}var kg=nt.ReactCurrentOwner,he=!1;function fe(e,t,n,r){t.child=e===null?Bc(t,null,n,r):vn(t,e.child,n,r)}function Bs(e,t,n,r,o){n=n.render;var l=t.ref;return dn(t,o),r=ta(e,t,n,r,l,o),n=na(),e!==null&&!he?(t.updateQueue=e.updateQueue,t.flags&=-2053,e.lanes&=~o,tt(e,t,o)):(W&&n&&Wi(t),t.flags|=1,fe(e,t,r,o),t.child)}function zs(e,t,n,r,o){if(e===null){var l=n.type;return typeof l=="function"&&!da(l)&&l.defaultProps===void 0&&n.compare===null&&n.defaultProps===void 0?(t.tag=15,t.type=l,uf(e,t,l,r,o)):(e=lo(n.type,null,r,t,t.mode,o),e.ref=t.ref,e.return=t,t.child=e)}if(l=e.child,!(e.lanes&o)){var i=l.memoizedProps;if(n=n.compare,n=n!==null?n:sr,n(i,r)&&e.ref===t.ref)return tt(e,t,o)}return t.flags|=1,e=St(l,r),e.ref=t.ref,e.return=t,t.child=e}function uf(e,t,n,r,o){if(e!==null){var l=e.memoizedProps;if(sr(l,r)&&e.ref===t.ref)if(he=!1,t.pendingProps=r=l,(e.lanes&o)!==0)e.flags&131072&&(he=!0);else return t.lanes=e.lanes,tt(e,t,o)}return ri(e,t,n,r,o)}function cf(e,t,n){var r=t.pendingProps,o=r.children,l=e!==null?e.memoizedState:null;if(r.mode==="hidden")if(!(t.mode&1))t.memoizedState={baseLanes:0,cachePool:null,transitions:null},I(an,xe),xe|=n;else{if(!(n&1073741824))return e=l!==null?l.baseLanes|n:n,t.lanes=t.childLanes=1073741824,t.memoizedState={baseLanes:e,cachePool:null,transitions:null},t.updateQueue=null,I(an,xe),xe|=e,null;t.memoizedState={baseLanes:0,cachePool:null,transitions:null},r=l!==null?l.baseLanes:n,I(an,xe),xe|=r}else l!==null?(r=l.baseLanes|n,t.memoizedState=null):r=n,I(an,xe),xe|=r;return fe(e,t,o,n),t.child}function ff(e,t){var n=t.ref;(e===null&&n!==null||e!==null&&e.ref!==n)&&(t.flags|=512,t.flags|=2097152)}function ri(e,t,n,r,o){var l=ye(n)?Ot:ue.current;return l=mn(t,l),dn(t,o),n=ta(e,t,n,r,l,o),r=na(),e!==null&&!he?(t.updateQueue=e.updateQueue,t.flags&=-2053,e.lanes&=~o,tt(e,t,o)):(W&&r&&Wi(t),t.flags|=1,fe(e,t,n,o),t.child)}function Os(e,t,n,r,o){if(ye(n)){var l=!0;vo(t)}else l=!1;if(dn(t,o),t.stateNode===null)no(e,t),lf(t,n,r),ti(t,n,r,o),r=!0;else if(e===null){var i=t.stateNode,s=t.memoizedProps;i.props=s;var a=i.context,u=n.contextType;typeof u=="object"&&u!==null?u=Le(u):(u=ye(n)?Ot:ue.current,u=mn(t,u));var d=n.getDerivedStateFromProps,f=typeof d=="function"||typeof i.getSnapshotBeforeUpdate=="function";f||typeof i.UNSAFE_componentWillReceiveProps!="function"&&typeof i.componentWillReceiveProps!="function"||(s!==r||a!==u)&&Ms(t,i,r,u),at=!1;var g=t.memoizedState;i.state=g,Po(t,r,i,o),a=t.memoizedState,s!==r||g!==a||ve.current||at?(typeof d=="function"&&(ei(t,n,d,r),a=t.memoizedState),(s=at||Ls(t,n,s,r,g,a,u))?(f||typeof i.UNSAFE_componentWillMount!="function"&&typeof i.componentWillMount!="function"||(typeof i.componentWillMount=="function"&&i.componentWillMount(),typeof i.UNSAFE_componentWillMount=="function"&&i.UNSAFE_componentWillMount()),typeof i.componentDidMount=="function"&&(t.flags|=4194308)):(typeof i.componentDidMount=="function"&&(t.flags|=4194308),t.memoizedProps=r,t.memoizedState=a),i.props=r,i.state=a,i.context=u,r=s):(typeof i.componentDidMount=="function"&&(t.flags|=4194308),r=!1)}else{i=t.stateNode,Oc(e,t),s=t.memoizedProps,u=t.type===t.elementType?s:Ae(t.type,s),i.props=u,f=t.pendingProps,g=i.context,a=n.contextType,typeof a=="object"&&a!==null?a=Le(a):(a=ye(n)?Ot:ue.current,a=mn(t,a));var y=n.getDerivedStateFromProps;(d=typeof y=="function"||typeof i.getSnapshotBeforeUpdate=="function")||typeof i.UNSAFE_componentWillReceiveProps!="function"&&typeof i.componentWillReceiveProps!="function"||(s!==f||g!==a)&&Ms(t,i,r,a),at=!1,g=t.memoizedState,i.state=g,Po(t,r,i,o);var w=t.memoizedState;s!==f||g!==w||ve.current||at?(typeof y=="function"&&(ei(t,n,y,r),w=t.memoizedState),(u=at||Ls(t,n,u,r,g,w,a)||!1)?(d||typeof i.UNSAFE_componentWillUpdate!="function"&&typeof i.componentWillUpdate!="function"||(typeof i.componentWillUpdate=="function"&&i.componentWillUpdate(r,w,a),typeof i.UNSAFE_componentWillUpdate=="function"&&i.UNSAFE_componentWillUpdate(r,w,a)),typeof i.componentDidUpdate=="function"&&(t.flags|=4),typeof i.getSnapshotBeforeUpdate=="function"&&(t.flags|=1024)):(typeof i.componentDidUpdate!="function"||s===e.memoizedProps&&g===e.memoizedState||(t.flags|=4),typeof i.getSnapshotBeforeUpdate!="function"||s===e.memoizedProps&&g===e.memoizedState||(t.flags|=1024),t.memoizedProps=r,t.memoizedState=w),i.props=r,i.state=w,i.context=a,r=u):(typeof i.componentDidUpdate!="function"||s===e.memoizedProps&&g===e.memoizedState||(t.flags|=4),typeof i.getSnapshotBeforeUpdate!="function"||s===e.memoizedProps&&g===e.memoizedState||(t.flags|=1024),r=!1)}return oi(e,t,n,r,l,o)}function oi(e,t,n,r,o,l){ff(e,t);var i=(t.flags&128)!==0;if(!r&&!i)return o&&ks(t,n,!1),tt(e,t,l);r=t.stateNode,kg.current=t;var s=i&&typeof n.getDerivedStateFromError!="function"?null:r.render();return t.flags|=1,e!==null&&i?(t.child=vn(t,e.child,null,l),t.child=vn(t,null,s,l)):fe(e,t,s,l),t.memoizedState=r.state,o&&ks(t,n,!0),t.child}function df(e){var t=e.stateNode;t.pendingContext?Ps(e,t.pendingContext,t.pendingContext!==t.context):t.context&&Ps(e,t.context,!1),Zi(e,t.containerInfo)}function Is(e,t,n,r,o){return hn(),Hi(o),t.flags|=256,fe(e,t,n,r),t.child}var li={dehydrated:null,treeContext:null,retryLane:0};function ii(e){return{baseLanes:e,cachePool:null,transitions:null}}function pf(e,t,n){var r=t.pendingProps,o=V.current,l=!1,i=(t.flags&128)!==0,s;if((s=i)||(s=e!==null&&e.memoizedState===null?!1:(o&2)!==0),s?(l=!0,t.flags&=-129):(e===null||e.memoizedState!==null)&&(o|=1),I(V,o&1),e===null)return Jl(t),e=t.memoizedState,e!==null&&(e=e.dehydrated,e!==null)?(t.mode&1?e.data==="$!"?t.lanes=8:t.lanes=1073741824:t.lanes=1,null):(i=r.children,e=r.fallback,l?(r=t.mode,l=t.child,i={mode:"hidden",children:i},!(r&1)&&l!==null?(l.childLanes=0,l.pendingProps=i):l=Wo(i,r,0,null),e=zt(e,r,n,null),l.return=t,e.return=t,l.sibling=e,t.child=l,t.child.memoizedState=ii(n),t.memoizedState=li,e):la(t,i));if(o=e.memoizedState,o!==null&&(s=o.dehydrated,s!==null))return bg(e,t,i,r,s,o,n);if(l){l=r.fallback,i=t.mode,o=e.child,s=o.sibling;var a={mode:"hidden",children:r.children};return!(i&1)&&t.child!==o?(r=t.child,r.childLanes=0,r.pendingProps=a,t.deletions=null):(r=St(o,a),r.subtreeFlags=o.subtreeFlags&14680064),s!==null?l=St(s,l):(l=zt(l,i,n,null),l.flags|=2),l.return=t,r.return=t,r.sibling=l,t.child=r,r=l,l=t.child,i=e.child.memoizedState,i=i===null?ii(n):{baseLanes:i.baseLanes|n,cachePool:null,transitions:i.transitions},l.memoizedState=i,l.childLanes=e.childLanes&~n,t.memoizedState=li,r}return l=e.child,e=l.sibling,r=St(l,{mode:"visible",children:r.children}),!(t.mode&1)&&(r.lanes=n),r.return=t,r.sibling=null,e!==null&&(n=t.deletions,n===null?(t.deletions=[e],t.flags|=16):n.push(e)),t.child=r,t.memoizedState=null,r}function la(e,t){return t=Wo({mode:"visible",children:t},e.mode,0,null),t.return=e,e.child=t}function Ur(e,t,n,r){return r!==null&&Hi(r),vn(t,e.child,null,n),e=la(t,t.pendingProps.children),e.flags|=2,t.memoizedState=null,e}function bg(e,t,n,r,o,l,i){if(n)return t.flags&256?(t.flags&=-257,r=yl(Error(k(422))),Ur(e,t,i,r)):t.memoizedState!==null?(t.child=e.child,t.flags|=128,null):(l=r.fallback,o=t.mode,r=Wo({mode:"visible",children:r.children},o,0,null),l=zt(l,o,i,null),l.flags|=2,r.return=t,l.return=t,r.sibling=l,t.child=r,t.mode&1&&vn(t,e.child,null,i),t.child.memoizedState=ii(i),t.memoizedState=li,l);if(!(t.mode&1))return Ur(e,t,i,null);if(o.data==="$!"){if(r=o.nextSibling&&o.nextSibling.dataset,r)var s=r.dgst;return r=s,l=Error(k(419)),r=yl(l,r,void 0),Ur(e,t,i,r)}if(s=(i&e.childLanes)!==0,he||s){if(r=ne,r!==null){switch(i&-i){case 4:o=2;break;case 16:o=8;break;case 64:case 128:case 256:case 512:case 1024:case 2048:case 4096:case 8192:case 16384:case 32768:case 65536:case 131072:case 262144:case 524288:case 1048576:case 2097152:case 4194304:case 8388608:case 16777216:case 33554432:case 67108864:o=32;break;case 536870912:o=268435456;break;default:o=0}o=o&(r.suspendedLanes|i)?0:o,o!==0&&o!==l.retryLane&&(l.retryLane=o,et(e,o),Oe(r,e,o,-1))}return fa(),r=yl(Error(k(421))),Ur(e,t,i,r)}return o.data==="$?"?(t.flags|=128,t.child=e.child,t=zg.bind(null,e),o._reactRetry=t,null):(e=l.treeContext,Pe=ht(o.nextSibling),ke=t,W=!0,Be=null,e!==null&&(Ee[Te++]=Ye,Ee[Te++]=Xe,Ee[Te++]=It,Ye=e.id,Xe=e.overflow,It=t),t=la(t,r.children),t.flags|=4096,t)}function Ds(e,t,n){e.lanes|=t;var r=e.alternate;r!==null&&(r.lanes|=t),ql(e.return,t,n)}function wl(e,t,n,r,o){var l=e.memoizedState;l===null?e.memoizedState={isBackwards:t,rendering:null,renderingStartTime:0,last:r,tail:n,tailMode:o}:(l.isBackwards=t,l.rendering=null,l.renderingStartTime=0,l.last=r,l.tail=n,l.tailMode=o)}function gf(e,t,n){var r=t.pendingProps,o=r.revealOrder,l=r.tail;if(fe(e,t,r.children,n),r=V.current,r&2)r=r&1|2,t.flags|=128;else{if(e!==null&&e.flags&128)e:for(e=t.child;e!==null;){if(e.tag===13)e.memoizedState!==null&&Ds(e,n,t);else if(e.tag===19)Ds(e,n,t);else if(e.child!==null){e.child.return=e,e=e.child;continue}if(e===t)break e;for(;e.sibling===null;){if(e.return===null||e.return===t)break e;e=e.return}e.sibling.return=e.return,e=e.sibling}r&=1}if(I(V,r),!(t.mode&1))t.memoizedState=null;else switch(o){case"forwards":for(n=t.child,o=null;n!==null;)e=n.alternate,e!==null&&ko(e)===null&&(o=n),n=n.sibling;n=o,n===null?(o=t.child,t.child=null):(o=n.sibling,n.sibling=null),wl(t,!1,o,n,l);break;case"backwards":for(n=null,o=t.child,t.child=null;o!==null;){if(e=o.alternate,e!==null&&ko(e)===null){t.child=o;break}e=o.sibling,o.sibling=n,n=o,o=e}wl(t,!0,n,null,l);break;case"together":wl(t,!1,null,null,void 0);break;default:t.memoizedState=null}return t.child}function no(e,t){!(t.mode&1)&&e!==null&&(e.alternate=null,t.alternate=null,t.flags|=2)}function tt(e,t,n){if(e!==null&&(t.dependencies=e.dependencies),Ft|=t.lanes,!(n&t.childLanes))return null;if(e!==null&&t.child!==e.child)throw Error(k(153));if(t.child!==null){for(e=t.child,n=St(e,e.pendingProps),t.child=n,n.return=t;e.sibling!==null;)e=e.sibling,n=n.sibling=St(e,e.pendingProps),n.return=t;n.sibling=null}return t.child}function Cg(e,t,n){switch(t.tag){case 3:df(t),hn();break;case 5:Ic(t);break;case 1:ye(t.type)&&vo(t);break;case 4:Zi(t,t.stateNode.containerInfo);break;case 10:var r=t.type._context,o=t.memoizedProps.value;I(So,r._currentValue),r._currentValue=o;break;case 13:if(r=t.memoizedState,r!==null)return r.dehydrated!==null?(I(V,V.current&1),t.flags|=128,null):n&t.child.childLanes?pf(e,t,n):(I(V,V.current&1),e=tt(e,t,n),e!==null?e.sibling:null);I(V,V.current&1);break;case 19:if(r=(n&t.childLanes)!==0,e.flags&128){if(r)return gf(e,t,n);t.flags|=128}if(o=t.memoizedState,o!==null&&(o.rendering=null,o.tail=null,o.lastEffect=null),I(V,V.current),r)break;return null;case 22:case 23:return t.lanes=0,cf(e,t,n)}return tt(e,t,n)}var mf,ai,hf,vf;mf=function(e,t){for(var n=t.child;n!==null;){if(n.tag===5||n.tag===6)e.appendChild(n.stateNode);else if(n.tag!==4&&n.child!==null){n.child.return=n,n=n.child;continue}if(n===t)break;for(;n.sibling===null;){if(n.return===null||n.return===t)return;n=n.return}n.sibling.return=n.return,n=n.sibling}};ai=function(){};hf=function(e,t,n,r){var o=e.memoizedProps;if(o!==r){e=t.stateNode,$t(He.current);var l=null;switch(n){case"input":o=Rl(e,o),r=Rl(e,r),l=[];break;case"select":o=Q({},o,{value:void 0}),r=Q({},r,{value:void 0}),l=[];break;case"textarea":o=Ml(e,o),r=Ml(e,r),l=[];break;default:typeof o.onClick!="function"&&typeof r.onClick=="function"&&(e.onclick=mo)}Al(n,r);var i;n=null;for(u in o)if(!r.hasOwnProperty(u)&&o.hasOwnProperty(u)&&o[u]!=null)if(u==="style"){var s=o[u];for(i in s)s.hasOwnProperty(i)&&(n||(n={}),n[i]="")}else u!=="dangerouslySetInnerHTML"&&u!=="children"&&u!=="suppressContentEditableWarning"&&u!=="suppressHydrationWarning"&&u!=="autoFocus"&&(tr.hasOwnProperty(u)?l||(l=[]):(l=l||[]).push(u,null));for(u in r){var a=r[u];if(s=o!=null?o[u]:void 0,r.hasOwnProperty(u)&&a!==s&&(a!=null||s!=null))if(u==="style")if(s){for(i in s)!s.hasOwnProperty(i)||a&&a.hasOwnProperty(i)||(n||(n={}),n[i]="");for(i in a)a.hasOwnProperty(i)&&s[i]!==a[i]&&(n||(n={}),n[i]=a[i])}else n||(l||(l=[]),l.push(u,n)),n=a;else u==="dangerouslySetInnerHTML"?(a=a?a.__html:void 0,s=s?s.__html:void 0,a!=null&&s!==a&&(l=l||[]).push(u,a)):u==="children"?typeof a!="string"&&typeof a!="number"||(l=l||[]).push(u,""+a):u!=="suppressContentEditableWarning"&&u!=="suppressHydrationWarning"&&(tr.hasOwnProperty(u)?(a!=null&&u==="onScroll"&&D("scroll",e),l||s===a||(l=[])):(l=l||[]).push(u,a))}n&&(l=l||[]).push("style",n);var u=l;(t.updateQueue=u)&&(t.flags|=4)}};vf=function(e,t,n,r){n!==r&&(t.flags|=4)};function On(e,t){if(!W)switch(e.tailMode){case"hidden":t=e.tail;for(var n=null;t!==null;)t.alternate!==null&&(n=t),t=t.sibling;n===null?e.tail=null:n.sibling=null;break;case"collapsed":n=e.tail;for(var r=null;n!==null;)n.alternate!==null&&(r=n),n=n.sibling;r===null?t||e.tail===null?e.tail=null:e.tail.sibling=null:r.sibling=null}}function ae(e){var t=e.alternate!==null&&e.alternate.child===e.child,n=0,r=0;if(t)for(var o=e.child;o!==null;)n|=o.lanes|o.childLanes,r|=o.subtreeFlags&14680064,r|=o.flags&14680064,o.return=e,o=o.sibling;else for(o=e.child;o!==null;)n|=o.lanes|o.childLanes,r|=o.subtreeFlags,r|=o.flags,o.return=e,o=o.sibling;return e.subtreeFlags|=r,e.childLanes=n,t}function _g(e,t,n){var r=t.pendingProps;switch(Vi(t),t.tag){case 2:case 16:case 15:case 0:case 11:case 7:case 8:case 12:case 9:case 14:return ae(t),null;case 1:return ye(t.type)&&ho(),ae(t),null;case 3:return r=t.stateNode,yn(),F(ve),F(ue),qi(),r.pendingContext&&(r.context=r.pendingContext,r.pendingContext=null),(e===null||e.child===null)&&(Dr(t)?t.flags|=4:e===null||e.memoizedState.isDehydrated&&!(t.flags&256)||(t.flags|=1024,Be!==null&&(mi(Be),Be=null))),ai(e,t),ae(t),null;case 5:Ji(t);var o=$t(pr.current);if(n=t.type,e!==null&&t.stateNode!=null)hf(e,t,n,r,o),e.ref!==t.ref&&(t.flags|=512,t.flags|=2097152);else{if(!r){if(t.stateNode===null)throw Error(k(166));return ae(t),null}if(e=$t(He.current),Dr(t)){r=t.stateNode,n=t.type;var l=t.memoizedProps;switch(r[We]=t,r[fr]=l,e=(t.mode&1)!==0,n){case"dialog":D("cancel",r),D("close",r);break;case"iframe":case"object":case"embed":D("load",r);break;case"video":case"audio":for(o=0;o<Wn.length;o++)D(Wn[o],r);break;case"source":D("error",r);break;case"img":case"image":case"link":D("error",r),D("load",r);break;case"details":D("toggle",r);break;case"input":Ya(r,l),D("invalid",r);break;case"select":r._wrapperState={wasMultiple:!!l.multiple},D("invalid",r);break;case"textarea":Za(r,l),D("invalid",r)}Al(n,l),o=null;for(var i in l)if(l.hasOwnProperty(i)){var s=l[i];i==="children"?typeof s=="string"?r.textContent!==s&&(l.suppressHydrationWarning!==!0&&Ir(r.textContent,s,e),o=["children",s]):typeof s=="number"&&r.textContent!==""+s&&(l.suppressHydrationWarning!==!0&&Ir(r.textContent,s,e),o=["children",""+s]):tr.hasOwnProperty(i)&&s!=null&&i==="onScroll"&&D("scroll",r)}switch(n){case"input":Lr(r),Xa(r,l,!0);break;case"textarea":Lr(r),Ja(r);break;case"select":case"option":break;default:typeof l.onClick=="function"&&(r.onclick=mo)}r=o,t.updateQueue=r,r!==null&&(t.flags|=4)}else{i=o.nodeType===9?o:o.ownerDocument,e==="http://www.w3.org/1999/xhtml"&&(e=Vu(n)),e==="http://www.w3.org/1999/xhtml"?n==="script"?(e=i.createElement("div"),e.innerHTML="<script><\/script>",e=e.removeChild(e.firstChild)):typeof r.is=="string"?e=i.createElement(n,{is:r.is}):(e=i.createElement(n),n==="select"&&(i=e,r.multiple?i.multiple=!0:r.size&&(i.size=r.size))):e=i.createElementNS(e,n),e[We]=t,e[fr]=r,mf(e,t,!1,!1),t.stateNode=e;e:{switch(i=$l(n,r),n){case"dialog":D("cancel",e),D("close",e),o=r;break;case"iframe":case"object":case"embed":D("load",e),o=r;break;case"video":case"audio":for(o=0;o<Wn.length;o++)D(Wn[o],e);o=r;break;case"source":D("error",e),o=r;break;case"img":case"image":case"link":D("error",e),D("load",e),o=r;break;case"details":D("toggle",e),o=r;break;case"input":Ya(e,r),o=Rl(e,r),D("invalid",e);break;case"option":o=r;break;case"select":e._wrapperState={wasMultiple:!!r.multiple},o=Q({},r,{value:void 0}),D("invalid",e);break;case"textarea":Za(e,r),o=Ml(e,r),D("invalid",e);break;default:o=r}Al(n,o),s=o;for(l in s)if(s.hasOwnProperty(l)){var a=s[l];l==="style"?Gu(e,a):l==="dangerouslySetInnerHTML"?(a=a?a.__html:void 0,a!=null&&Hu(e,a)):l==="children"?typeof a=="string"?(n!=="textarea"||a!=="")&&nr(e,a):typeof a=="number"&&nr(e,""+a):l!=="suppressContentEditableWarning"&&l!=="suppressHydrationWarning"&&l!=="autoFocus"&&(tr.hasOwnProperty(l)?a!=null&&l==="onScroll"&&D("scroll",e):a!=null&&Ri(e,l,a,i))}switch(n){case"input":Lr(e),Xa(e,r,!1);break;case"textarea":Lr(e),Ja(e);break;case"option":r.value!=null&&e.setAttribute("value",""+Pt(r.value));break;case"select":e.multiple=!!r.multiple,l=r.value,l!=null?sn(e,!!r.multiple,l,!1):r.defaultValue!=null&&sn(e,!!r.multiple,r.defaultValue,!0);break;default:typeof o.onClick=="function"&&(e.onclick=mo)}switch(n){case"button":case"input":case"select":case"textarea":r=!!r.autoFocus;break e;case"img":r=!0;break e;default:r=!1}}r&&(t.flags|=4)}t.ref!==null&&(t.flags|=512,t.flags|=2097152)}return ae(t),null;case 6:if(e&&t.stateNode!=null)vf(e,t,e.memoizedProps,r);else{if(typeof r!="string"&&t.stateNode===null)throw Error(k(166));if(n=$t(pr.current),$t(He.current),Dr(t)){if(r=t.stateNode,n=t.memoizedProps,r[We]=t,(l=r.nodeValue!==n)&&(e=ke,e!==null))switch(e.tag){case 3:Ir(r.nodeValue,n,(e.mode&1)!==0);break;case 5:e.memoizedProps.suppressHydrationWarning!==!0&&Ir(r.nodeValue,n,(e.mode&1)!==0)}l&&(t.flags|=4)}else r=(n.nodeType===9?n:n.ownerDocument).createTextNode(r),r[We]=t,t.stateNode=r}return ae(t),null;case 13:if(F(V),r=t.memoizedState,e===null||e.memoizedState!==null&&e.memoizedState.dehydrated!==null){if(W&&Pe!==null&&t.mode&1&&!(t.flags&128))Ac(),hn(),t.flags|=98560,l=!1;else if(l=Dr(t),r!==null&&r.dehydrated!==null){if(e===null){if(!l)throw Error(k(318));if(l=t.memoizedState,l=l!==null?l.dehydrated:null,!l)throw Error(k(317));l[We]=t}else hn(),!(t.flags&128)&&(t.memoizedState=null),t.flags|=4;ae(t),l=!1}else Be!==null&&(mi(Be),Be=null),l=!0;if(!l)return t.flags&65536?t:null}return t.flags&128?(t.lanes=n,t):(r=r!==null,r!==(e!==null&&e.memoizedState!==null)&&r&&(t.child.flags|=8192,t.mode&1&&(e===null||V.current&1?q===0&&(q=3):fa())),t.updateQueue!==null&&(t.flags|=4),ae(t),null);case 4:return yn(),ai(e,t),e===null&&ur(t.stateNode.containerInfo),ae(t),null;case 10:return Ki(t.type._context),ae(t),null;case 17:return ye(t.type)&&ho(),ae(t),null;case 19:if(F(V),l=t.memoizedState,l===null)return ae(t),null;if(r=(t.flags&128)!==0,i=l.rendering,i===null)if(r)On(l,!1);else{if(q!==0||e!==null&&e.flags&128)for(e=t.child;e!==null;){if(i=ko(e),i!==null){for(t.flags|=128,On(l,!1),r=i.updateQueue,r!==null&&(t.updateQueue=r,t.flags|=4),t.subtreeFlags=0,r=n,n=t.child;n!==null;)l=n,e=r,l.flags&=14680066,i=l.alternate,i===null?(l.childLanes=0,l.lanes=e,l.child=null,l.subtreeFlags=0,l.memoizedProps=null,l.memoizedState=null,l.updateQueue=null,l.dependencies=null,l.stateNode=null):(l.childLanes=i.childLanes,l.lanes=i.lanes,l.child=i.child,l.subtreeFlags=0,l.deletions=null,l.memoizedProps=i.memoizedProps,l.memoizedState=i.memoizedState,l.updateQueue=i.updateQueue,l.type=i.type,e=i.dependencies,l.dependencies=e===null?null:{lanes:e.lanes,firstContext:e.firstContext}),n=n.sibling;return I(V,V.current&1|2),t.child}e=e.sibling}l.tail!==null&&K()>Sn&&(t.flags|=128,r=!0,On(l,!1),t.lanes=4194304)}else{if(!r)if(e=ko(i),e!==null){if(t.flags|=128,r=!0,n=e.updateQueue,n!==null&&(t.updateQueue=n,t.flags|=4),On(l,!0),l.tail===null&&l.tailMode==="hidden"&&!i.alternate&&!W)return ae(t),null}else 2*K()-l.renderingStartTime>Sn&&n!==1073741824&&(t.flags|=128,r=!0,On(l,!1),t.lanes=4194304);l.isBackwards?(i.sibling=t.child,t.child=i):(n=l.last,n!==null?n.sibling=i:t.child=i,l.last=i)}return l.tail!==null?(t=l.tail,l.rendering=t,l.tail=t.sibling,l.renderingStartTime=K(),t.sibling=null,n=V.current,I(V,r?n&1|2:n&1),t):(ae(t),null);case 22:case 23:return ca(),r=t.memoizedState!==null,e!==null&&e.memoizedState!==null!==r&&(t.flags|=8192),r&&t.mode&1?xe&1073741824&&(ae(t),t.subtreeFlags&6&&(t.flags|=8192)):ae(t),null;case 24:return null;case 25:return null}throw Error(k(156,t.tag))}function Eg(e,t){switch(Vi(t),t.tag){case 1:return ye(t.type)&&ho(),e=t.flags,e&65536?(t.flags=e&-65537|128,t):null;case 3:return yn(),F(ve),F(ue),qi(),e=t.flags,e&65536&&!(e&128)?(t.flags=e&-65537|128,t):null;case 5:return Ji(t),null;case 13:if(F(V),e=t.memoizedState,e!==null&&e.dehydrated!==null){if(t.alternate===null)throw Error(k(340));hn()}return e=t.flags,e&65536?(t.flags=e&-65537|128,t):null;case 19:return F(V),null;case 4:return yn(),null;case 10:return Ki(t.type._context),null;case 22:case 23:return ca(),null;case 24:return null;default:return null}}var Wr=!1,se=!1,Tg=typeof WeakSet=="function"?WeakSet:Set,_=null;function ln(e,t){var n=e.ref;if(n!==null)if(typeof n=="function")try{n(null)}catch(r){G(e,t,r)}else n.current=null}function si(e,t,n){try{n()}catch(r){G(e,t,r)}}var Fs=!1;function Rg(e,t){if(Hl=fo,e=xc(),Ui(e)){if("selectionStart"in e)var n={start:e.selectionStart,end:e.selectionEnd};else e:{n=(n=e.ownerDocument)&&n.defaultView||window;var r=n.getSelection&&n.getSelection();if(r&&r.rangeCount!==0){n=r.anchorNode;var o=r.anchorOffset,l=r.focusNode;r=r.focusOffset;try{n.nodeType,l.nodeType}catch{n=null;break e}var i=0,s=-1,a=-1,u=0,d=0,f=e,g=null;t:for(;;){for(var y;f!==n||o!==0&&f.nodeType!==3||(s=i+o),f!==l||r!==0&&f.nodeType!==3||(a=i+r),f.nodeType===3&&(i+=f.nodeValue.length),(y=f.firstChild)!==null;)g=f,f=y;for(;;){if(f===e)break t;if(g===n&&++u===o&&(s=i),g===l&&++d===r&&(a=i),(y=f.nextSibling)!==null)break;f=g,g=f.parentNode}f=y}n=s===-1||a===-1?null:{start:s,end:a}}else n=null}n=n||{start:0,end:0}}else n=null;for(Ql={focusedElem:e,selectionRange:n},fo=!1,_=t;_!==null;)if(t=_,e=t.child,(t.subtreeFlags&1028)!==0&&e!==null)e.return=t,_=e;else for(;_!==null;){t=_;try{var w=t.alternate;if(t.flags&1024)switch(t.tag){case 0:case 11:case 15:break;case 1:if(w!==null){var S=w.memoizedProps,P=w.memoizedState,m=t.stateNode,p=m.getSnapshotBeforeUpdate(t.elementType===t.type?S:Ae(t.type,S),P);m.__reactInternalSnapshotBeforeUpdate=p}break;case 3:var h=t.stateNode.containerInfo;h.nodeType===1?h.textContent="":h.nodeType===9&&h.documentElement&&h.removeChild(h.documentElement);break;case 5:case 6:case 4:case 17:break;default:throw Error(k(163))}}catch(x){G(t,t.return,x)}if(e=t.sibling,e!==null){e.return=t.return,_=e;break}_=t.return}return w=Fs,Fs=!1,w}function Zn(e,t,n){var r=t.updateQueue;if(r=r!==null?r.lastEffect:null,r!==null){var o=r=r.next;do{if((o.tag&e)===e){var l=o.destroy;o.destroy=void 0,l!==void 0&&si(t,n,l)}o=o.next}while(o!==r)}}function Fo(e,t){if(t=t.updateQueue,t=t!==null?t.lastEffect:null,t!==null){var n=t=t.next;do{if((n.tag&e)===e){var r=n.create;n.destroy=r()}n=n.next}while(n!==t)}}function ui(e){var t=e.ref;if(t!==null){var n=e.stateNode;switch(e.tag){case 5:e=n;break;default:e=n}typeof t=="function"?t(e):t.current=e}}function yf(e){var t=e.alternate;t!==null&&(e.alternate=null,yf(t)),e.child=null,e.deletions=null,e.sibling=null,e.tag===5&&(t=e.stateNode,t!==null&&(delete t[We],delete t[fr],delete t[Yl],delete t[fg],delete t[dg])),e.stateNode=null,e.return=null,e.dependencies=null,e.memoizedProps=null,e.memoizedState=null,e.pendingProps=null,e.stateNode=null,e.updateQueue=null}function wf(e){return e.tag===5||e.tag===3||e.tag===4}function Us(e){e:for(;;){for(;e.sibling===null;){if(e.return===null||wf(e.return))return null;e=e.return}for(e.sibling.return=e.return,e=e.sibling;e.tag!==5&&e.tag!==6&&e.tag!==18;){if(e.flags&2||e.child===null||e.tag===4)continue e;e.child.return=e,e=e.child}if(!(e.flags&2))return e.stateNode}}function ci(e,t,n){var r=e.tag;if(r===5||r===6)e=e.stateNode,t?n.nodeType===8?n.parentNode.insertBefore(e,t):n.insertBefore(e,t):(n.nodeType===8?(t=n.parentNode,t.insertBefore(e,n)):(t=n,t.appendChild(e)),n=n._reactRootContainer,n!=null||t.onclick!==null||(t.onclick=mo));else if(r!==4&&(e=e.child,e!==null))for(ci(e,t,n),e=e.sibling;e!==null;)ci(e,t,n),e=e.sibling}function fi(e,t,n){var r=e.tag;if(r===5||r===6)e=e.stateNode,t?n.insertBefore(e,t):n.appendChild(e);else if(r!==4&&(e=e.child,e!==null))for(fi(e,t,n),e=e.sibling;e!==null;)fi(e,t,n),e=e.sibling}var re=null,$e=!1;function lt(e,t,n){for(n=n.child;n!==null;)Sf(e,t,n),n=n.sibling}function Sf(e,t,n){if(Ve&&typeof Ve.onCommitFiberUnmount=="function")try{Ve.onCommitFiberUnmount(No,n)}catch{}switch(n.tag){case 5:se||ln(n,t);case 6:var r=re,o=$e;re=null,lt(e,t,n),re=r,$e=o,re!==null&&($e?(e=re,n=n.stateNode,e.nodeType===8?e.parentNode.removeChild(n):e.removeChild(n)):re.removeChild(n.stateNode));break;case 18:re!==null&&($e?(e=re,n=n.stateNode,e.nodeType===8?dl(e.parentNode,n):e.nodeType===1&&dl(e,n),ir(e)):dl(re,n.stateNode));break;case 4:r=re,o=$e,re=n.stateNode.containerInfo,$e=!0,lt(e,t,n),re=r,$e=o;break;case 0:case 11:case 14:case 15:if(!se&&(r=n.updateQueue,r!==null&&(r=r.lastEffect,r!==null))){o=r=r.next;do{var l=o,i=l.destroy;l=l.tag,i!==void 0&&(l&2||l&4)&&si(n,t,i),o=o.next}while(o!==r)}lt(e,t,n);break;case 1:if(!se&&(ln(n,t),r=n.stateNode,typeof r.componentWillUnmount=="function"))try{r.props=n.memoizedProps,r.state=n.memoizedState,r.componentWillUnmount()}catch(s){G(n,t,s)}lt(e,t,n);break;case 21:lt(e,t,n);break;case 22:n.mode&1?(se=(r=se)||n.memoizedState!==null,lt(e,t,n),se=r):lt(e,t,n);break;default:lt(e,t,n)}}function Ws(e){var t=e.updateQueue;if(t!==null){e.updateQueue=null;var n=e.stateNode;n===null&&(n=e.stateNode=new Tg),t.forEach(function(r){var o=Og.bind(null,e,r);n.has(r)||(n.add(r),r.then(o,o))})}}function Ne(e,t){var n=t.deletions;if(n!==null)for(var r=0;r<n.length;r++){var o=n[r];try{var l=e,i=t,s=i;e:for(;s!==null;){switch(s.tag){case 5:re=s.stateNode,$e=!1;break e;case 3:re=s.stateNode.containerInfo,$e=!0;break e;case 4:re=s.stateNode.containerInfo,$e=!0;break e}s=s.return}if(re===null)throw Error(k(160));Sf(l,i,o),re=null,$e=!1;var a=o.alternate;a!==null&&(a.return=null),o.return=null}catch(u){G(o,t,u)}}if(t.subtreeFlags&12854)for(t=t.child;t!==null;)xf(t,e),t=t.sibling}function xf(e,t){var n=e.alternate,r=e.flags;switch(e.tag){case 0:case 11:case 14:case 15:if(Ne(t,e),Fe(e),r&4){try{Zn(3,e,e.return),Fo(3,e)}catch(S){G(e,e.return,S)}try{Zn(5,e,e.return)}catch(S){G(e,e.return,S)}}break;case 1:Ne(t,e),Fe(e),r&512&&n!==null&&ln(n,n.return);break;case 5:if(Ne(t,e),Fe(e),r&512&&n!==null&&ln(n,n.return),e.flags&32){var o=e.stateNode;try{nr(o,"")}catch(S){G(e,e.return,S)}}if(r&4&&(o=e.stateNode,o!=null)){var l=e.memoizedProps,i=n!==null?n.memoizedProps:l,s=e.type,a=e.updateQueue;if(e.updateQueue=null,a!==null)try{s==="input"&&l.type==="radio"&&l.name!=null&&Uu(o,l),$l(s,i);var u=$l(s,l);for(i=0;i<a.length;i+=2){var d=a[i],f=a[i+1];d==="style"?Gu(o,f):d==="dangerouslySetInnerHTML"?Hu(o,f):d==="children"?nr(o,f):Ri(o,d,f,u)}switch(s){case"input":jl(o,l);break;case"textarea":Wu(o,l);break;case"select":var g=o._wrapperState.wasMultiple;o._wrapperState.wasMultiple=!!l.multiple;var y=l.value;y!=null?sn(o,!!l.multiple,y,!1):g!==!!l.multiple&&(l.defaultValue!=null?sn(o,!!l.multiple,l.defaultValue,!0):sn(o,!!l.multiple,l.multiple?[]:"",!1))}o[fr]=l}catch(S){G(e,e.return,S)}}break;case 6:if(Ne(t,e),Fe(e),r&4){if(e.stateNode===null)throw Error(k(162));o=e.stateNode,l=e.memoizedProps;try{o.nodeValue=l}catch(S){G(e,e.return,S)}}break;case 3:if(Ne(t,e),Fe(e),r&4&&n!==null&&n.memoizedState.isDehydrated)try{ir(t.containerInfo)}catch(S){G(e,e.return,S)}break;case 4:Ne(t,e),Fe(e);break;case 13:Ne(t,e),Fe(e),o=e.child,o.flags&8192&&(l=o.memoizedState!==null,o.stateNode.isHidden=l,!l||o.alternate!==null&&o.alternate.memoizedState!==null||(sa=K())),r&4&&Ws(e);break;case 22:if(d=n!==null&&n.memoizedState!==null,e.mode&1?(se=(u=se)||d,Ne(t,e),se=u):Ne(t,e),Fe(e),r&8192){if(u=e.memoizedState!==null,(e.stateNode.isHidden=u)&&!d&&e.mode&1)for(_=e,d=e.child;d!==null;){for(f=_=d;_!==null;){switch(g=_,y=g.child,g.tag){case 0:case 11:case 14:case 15:Zn(4,g,g.return);break;case 1:ln(g,g.return);var w=g.stateNode;if(typeof w.componentWillUnmount=="function"){r=g,n=g.return;try{t=r,w.props=t.memoizedProps,w.state=t.memoizedState,w.componentWillUnmount()}catch(S){G(r,n,S)}}break;case 5:ln(g,g.return);break;case 22:if(g.memoizedState!==null){Hs(f);continue}}y!==null?(y.return=g,_=y):Hs(f)}d=d.sibling}e:for(d=null,f=e;;){if(f.tag===5){if(d===null){d=f;try{o=f.stateNode,u?(l=o.style,typeof l.setProperty=="function"?l.setProperty("display","none","important"):l.display="none"):(s=f.stateNode,a=f.memoizedProps.style,i=a!=null&&a.hasOwnProperty("display")?a.display:null,s.style.display=Qu("display",i))}catch(S){G(e,e.return,S)}}}else if(f.tag===6){if(d===null)try{f.stateNode.nodeValue=u?"":f.memoizedProps}catch(S){G(e,e.return,S)}}else if((f.tag!==22&&f.tag!==23||f.memoizedState===null||f===e)&&f.child!==null){f.child.return=f,f=f.child;continue}if(f===e)break e;for(;f.sibling===null;){if(f.return===null||f.return===e)break e;d===f&&(d=null),f=f.return}d===f&&(d=null),f.sibling.return=f.return,f=f.sibling}}break;case 19:Ne(t,e),Fe(e),r&4&&Ws(e);break;case 21:break;default:Ne(t,e),Fe(e)}}function Fe(e){var t=e.flags;if(t&2){try{e:{for(var n=e.return;n!==null;){if(wf(n)){var r=n;break e}n=n.return}throw Error(k(160))}switch(r.tag){case 5:var o=r.stateNode;r.flags&32&&(nr(o,""),r.flags&=-33);var l=Us(e);fi(e,l,o);break;case 3:case 4:var i=r.stateNode.containerInfo,s=Us(e);ci(e,s,i);break;default:throw Error(k(161))}}catch(a){G(e,e.return,a)}e.flags&=-3}t&4096&&(e.flags&=-4097)}function jg(e,t,n){_=e,Pf(e)}function Pf(e,t,n){for(var r=(e.mode&1)!==0;_!==null;){var o=_,l=o.child;if(o.tag===22&&r){var i=o.memoizedState!==null||Wr;if(!i){var s=o.alternate,a=s!==null&&s.memoizedState!==null||se;s=Wr;var u=se;if(Wr=i,(se=a)&&!u)for(_=o;_!==null;)i=_,a=i.child,i.tag===22&&i.memoizedState!==null?Qs(o):a!==null?(a.return=i,_=a):Qs(o);for(;l!==null;)_=l,Pf(l),l=l.sibling;_=o,Wr=s,se=u}Vs(e)}else o.subtreeFlags&8772&&l!==null?(l.return=o,_=l):Vs(e)}}function Vs(e){for(;_!==null;){var t=_;if(t.flags&8772){var n=t.alternate;try{if(t.flags&8772)switch(t.tag){case 0:case 11:case 15:se||Fo(5,t);break;case 1:var r=t.stateNode;if(t.flags&4&&!se)if(n===null)r.componentDidMount();else{var o=t.elementType===t.type?n.memoizedProps:Ae(t.type,n.memoizedProps);r.componentDidUpdate(o,n.memoizedState,r.__reactInternalSnapshotBeforeUpdate)}var l=t.updateQueue;l!==null&&Ts(t,l,r);break;case 3:var i=t.updateQueue;if(i!==null){if(n=null,t.child!==null)switch(t.child.tag){case 5:n=t.child.stateNode;break;case 1:n=t.child.stateNode}Ts(t,i,n)}break;case 5:var s=t.stateNode;if(n===null&&t.flags&4){n=s;var a=t.memoizedProps;switch(t.type){case"button":case"input":case"select":case"textarea":a.autoFocus&&n.focus();break;case"img":a.src&&(n.src=a.src)}}break;case 6:break;case 4:break;case 12:break;case 13:if(t.memoizedState===null){var u=t.alternate;if(u!==null){var d=u.memoizedState;if(d!==null){var f=d.dehydrated;f!==null&&ir(f)}}}break;case 19:case 17:case 21:case 22:case 23:case 25:break;default:throw Error(k(163))}se||t.flags&512&&ui(t)}catch(g){G(t,t.return,g)}}if(t===e){_=null;break}if(n=t.sibling,n!==null){n.return=t.return,_=n;break}_=t.return}}function Hs(e){for(;_!==null;){var t=_;if(t===e){_=null;break}var n=t.sibling;if(n!==null){n.return=t.return,_=n;break}_=t.return}}function Qs(e){for(;_!==null;){var t=_;try{switch(t.tag){case 0:case 11:case 15:var n=t.return;try{Fo(4,t)}catch(a){G(t,n,a)}break;case 1:var r=t.stateNode;if(typeof r.componentDidMount=="function"){var o=t.return;try{r.componentDidMount()}catch(a){G(t,o,a)}}var l=t.return;try{ui(t)}catch(a){G(t,l,a)}break;case 5:var i=t.return;try{ui(t)}catch(a){G(t,i,a)}}}catch(a){G(t,t.return,a)}if(t===e){_=null;break}var s=t.sibling;if(s!==null){s.return=t.return,_=s;break}_=t.return}}var Lg=Math.ceil,_o=nt.ReactCurrentDispatcher,ia=nt.ReactCurrentOwner,je=nt.ReactCurrentBatchConfig,A=0,ne=null,X=null,oe=0,xe=0,an=Ct(0),q=0,vr=null,Ft=0,Uo=0,aa=0,Jn=null,me=null,sa=0,Sn=1/0,Ge=null,Eo=!1,di=null,yt=null,Vr=!1,ft=null,To=0,qn=0,pi=null,ro=-1,oo=0;function de(){return A&6?K():ro!==-1?ro:ro=K()}function wt(e){return e.mode&1?A&2&&oe!==0?oe&-oe:gg.transition!==null?(oo===0&&(oo=lc()),oo):(e=z,e!==0||(e=window.event,e=e===void 0?16:dc(e.type)),e):1}function Oe(e,t,n,r){if(50<qn)throw qn=0,pi=null,Error(k(185));xr(e,n,r),(!(A&2)||e!==ne)&&(e===ne&&(!(A&2)&&(Uo|=n),q===4&&ut(e,oe)),we(e,r),n===1&&A===0&&!(t.mode&1)&&(Sn=K()+500,Oo&&_t()))}function we(e,t){var n=e.callbackNode;gp(e,t);var r=co(e,e===ne?oe:0);if(r===0)n!==null&&ts(n),e.callbackNode=null,e.callbackPriority=0;else if(t=r&-r,e.callbackPriority!==t){if(n!=null&&ts(n),t===1)e.tag===0?pg(Gs.bind(null,e)):Lc(Gs.bind(null,e)),ug(function(){!(A&6)&&_t()}),n=null;else{switch(ic(r)){case 1:n=Ai;break;case 4:n=rc;break;case 16:n=uo;break;case 536870912:n=oc;break;default:n=uo}n=jf(n,kf.bind(null,e))}e.callbackPriority=t,e.callbackNode=n}}function kf(e,t){if(ro=-1,oo=0,A&6)throw Error(k(327));var n=e.callbackNode;if(pn()&&e.callbackNode!==n)return null;var r=co(e,e===ne?oe:0);if(r===0)return null;if(r&30||r&e.expiredLanes||t)t=Ro(e,r);else{t=r;var o=A;A|=2;var l=Cf();(ne!==e||oe!==t)&&(Ge=null,Sn=K()+500,Bt(e,t));do try{Ag();break}catch(s){bf(e,s)}while(!0);Gi(),_o.current=l,A=o,X!==null?t=0:(ne=null,oe=0,t=q)}if(t!==0){if(t===2&&(o=Dl(e),o!==0&&(r=o,t=gi(e,o))),t===1)throw n=vr,Bt(e,0),ut(e,r),we(e,K()),n;if(t===6)ut(e,r);else{if(o=e.current.alternate,!(r&30)&&!Mg(o)&&(t=Ro(e,r),t===2&&(l=Dl(e),l!==0&&(r=l,t=gi(e,l))),t===1))throw n=vr,Bt(e,0),ut(e,r),we(e,K()),n;switch(e.finishedWork=o,e.finishedLanes=r,t){case 0:case 1:throw Error(k(345));case 2:Mt(e,me,Ge);break;case 3:if(ut(e,r),(r&130023424)===r&&(t=sa+500-K(),10<t)){if(co(e,0)!==0)break;if(o=e.suspendedLanes,(o&r)!==r){de(),e.pingedLanes|=e.suspendedLanes&o;break}e.timeoutHandle=Kl(Mt.bind(null,e,me,Ge),t);break}Mt(e,me,Ge);break;case 4:if(ut(e,r),(r&4194240)===r)break;for(t=e.eventTimes,o=-1;0<r;){var i=31-ze(r);l=1<<i,i=t[i],i>o&&(o=i),r&=~l}if(r=o,r=K()-r,r=(120>r?120:480>r?480:1080>r?1080:1920>r?1920:3e3>r?3e3:4320>r?4320:1960*Lg(r/1960))-r,10<r){e.timeoutHandle=Kl(Mt.bind(null,e,me,Ge),r);break}Mt(e,me,Ge);break;case 5:Mt(e,me,Ge);break;default:throw Error(k(329))}}}return we(e,K()),e.callbackNode===n?kf.bind(null,e):null}function gi(e,t){var n=Jn;return e.current.memoizedState.isDehydrated&&(Bt(e,t).flags|=256),e=Ro(e,t),e!==2&&(t=me,me=n,t!==null&&mi(t)),e}function mi(e){me===null?me=e:me.push.apply(me,e)}function Mg(e){for(var t=e;;){if(t.flags&16384){var n=t.updateQueue;if(n!==null&&(n=n.stores,n!==null))for(var r=0;r<n.length;r++){var o=n[r],l=o.getSnapshot;o=o.value;try{if(!Ie(l(),o))return!1}catch{return!1}}}if(n=t.child,t.subtreeFlags&16384&&n!==null)n.return=t,t=n;else{if(t===e)break;for(;t.sibling===null;){if(t.return===null||t.return===e)return!0;t=t.return}t.sibling.return=t.return,t=t.sibling}}return!0}function ut(e,t){for(t&=~aa,t&=~Uo,e.suspendedLanes|=t,e.pingedLanes&=~t,e=e.expirationTimes;0<t;){var n=31-ze(t),r=1<<n;e[n]=-1,t&=~r}}function Gs(e){if(A&6)throw Error(k(327));pn();var t=co(e,0);if(!(t&1))return we(e,K()),null;var n=Ro(e,t);if(e.tag!==0&&n===2){var r=Dl(e);r!==0&&(t=r,n=gi(e,r))}if(n===1)throw n=vr,Bt(e,0),ut(e,t),we(e,K()),n;if(n===6)throw Error(k(345));return e.finishedWork=e.current.alternate,e.finishedLanes=t,Mt(e,me,Ge),we(e,K()),null}function ua(e,t){var n=A;A|=1;try{return e(t)}finally{A=n,A===0&&(Sn=K()+500,Oo&&_t())}}function Ut(e){ft!==null&&ft.tag===0&&!(A&6)&&pn();var t=A;A|=1;var n=je.transition,r=z;try{if(je.transition=null,z=1,e)return e()}finally{z=r,je.transition=n,A=t,!(A&6)&&_t()}}function ca(){xe=an.current,F(an)}function Bt(e,t){e.finishedWork=null,e.finishedLanes=0;var n=e.timeoutHandle;if(n!==-1&&(e.timeoutHandle=-1,sg(n)),X!==null)for(n=X.return;n!==null;){var r=n;switch(Vi(r),r.tag){case 1:r=r.type.childContextTypes,r!=null&&ho();break;case 3:yn(),F(ve),F(ue),qi();break;case 5:Ji(r);break;case 4:yn();break;case 13:F(V);break;case 19:F(V);break;case 10:Ki(r.type._context);break;case 22:case 23:ca()}n=n.return}if(ne=e,X=e=St(e.current,null),oe=xe=t,q=0,vr=null,aa=Uo=Ft=0,me=Jn=null,At!==null){for(t=0;t<At.length;t++)if(n=At[t],r=n.interleaved,r!==null){n.interleaved=null;var o=r.next,l=n.pending;if(l!==null){var i=l.next;l.next=o,r.next=i}n.pending=r}At=null}return e}function bf(e,t){do{var n=X;try{if(Gi(),eo.current=Co,bo){for(var r=H.memoizedState;r!==null;){var o=r.queue;o!==null&&(o.pending=null),r=r.next}bo=!1}if(Dt=0,te=J=H=null,Xn=!1,gr=0,ia.current=null,n===null||n.return===null){q=1,vr=t,X=null;break}e:{var l=e,i=n.return,s=n,a=t;if(t=oe,s.flags|=32768,a!==null&&typeof a=="object"&&typeof a.then=="function"){var u=a,d=s,f=d.tag;if(!(d.mode&1)&&(f===0||f===11||f===15)){var g=d.alternate;g?(d.updateQueue=g.updateQueue,d.memoizedState=g.memoizedState,d.lanes=g.lanes):(d.updateQueue=null,d.memoizedState=null)}var y=As(i);if(y!==null){y.flags&=-257,$s(y,i,s,l,t),y.mode&1&&Ns(l,u,t),t=y,a=u;var w=t.updateQueue;if(w===null){var S=new Set;S.add(a),t.updateQueue=S}else w.add(a);break e}else{if(!(t&1)){Ns(l,u,t),fa();break e}a=Error(k(426))}}else if(W&&s.mode&1){var P=As(i);if(P!==null){!(P.flags&65536)&&(P.flags|=256),$s(P,i,s,l,t),Hi(wn(a,s));break e}}l=a=wn(a,s),q!==4&&(q=2),Jn===null?Jn=[l]:Jn.push(l),l=i;do{switch(l.tag){case 3:l.flags|=65536,t&=-t,l.lanes|=t;var m=af(l,a,t);Es(l,m);break e;case 1:s=a;var p=l.type,h=l.stateNode;if(!(l.flags&128)&&(typeof p.getDerivedStateFromError=="function"||h!==null&&typeof h.componentDidCatch=="function"&&(yt===null||!yt.has(h)))){l.flags|=65536,t&=-t,l.lanes|=t;var x=sf(l,s,t);Es(l,x);break e}}l=l.return}while(l!==null)}Ef(n)}catch(b){t=b,X===n&&n!==null&&(X=n=n.return);continue}break}while(!0)}function Cf(){var e=_o.current;return _o.current=Co,e===null?Co:e}function fa(){(q===0||q===3||q===2)&&(q=4),ne===null||!(Ft&268435455)&&!(Uo&268435455)||ut(ne,oe)}function Ro(e,t){var n=A;A|=2;var r=Cf();(ne!==e||oe!==t)&&(Ge=null,Bt(e,t));do try{Ng();break}catch(o){bf(e,o)}while(!0);if(Gi(),A=n,_o.current=r,X!==null)throw Error(k(261));return ne=null,oe=0,q}function Ng(){for(;X!==null;)_f(X)}function Ag(){for(;X!==null&&!lp();)_f(X)}function _f(e){var t=Rf(e.alternate,e,xe);e.memoizedProps=e.pendingProps,t===null?Ef(e):X=t,ia.current=null}function Ef(e){var t=e;do{var n=t.alternate;if(e=t.return,t.flags&32768){if(n=Eg(n,t),n!==null){n.flags&=32767,X=n;return}if(e!==null)e.flags|=32768,e.subtreeFlags=0,e.deletions=null;else{q=6,X=null;return}}else if(n=_g(n,t,xe),n!==null){X=n;return}if(t=t.sibling,t!==null){X=t;return}X=t=e}while(t!==null);q===0&&(q=5)}function Mt(e,t,n){var r=z,o=je.transition;try{je.transition=null,z=1,$g(e,t,n,r)}finally{je.transition=o,z=r}return null}function $g(e,t,n,r){do pn();while(ft!==null);if(A&6)throw Error(k(327));n=e.finishedWork;var o=e.finishedLanes;if(n===null)return null;if(e.finishedWork=null,e.finishedLanes=0,n===e.current)throw Error(k(177));e.callbackNode=null,e.callbackPriority=0;var l=n.lanes|n.childLanes;if(mp(e,l),e===ne&&(X=ne=null,oe=0),!(n.subtreeFlags&2064)&&!(n.flags&2064)||Vr||(Vr=!0,jf(uo,function(){return pn(),null})),l=(n.flags&15990)!==0,n.subtreeFlags&15990||l){l=je.transition,je.transition=null;var i=z;z=1;var s=A;A|=4,ia.current=null,Rg(e,n),xf(n,e),tg(Ql),fo=!!Hl,Ql=Hl=null,e.current=n,jg(n),ip(),A=s,z=i,je.transition=l}else e.current=n;if(Vr&&(Vr=!1,ft=e,To=o),l=e.pendingLanes,l===0&&(yt=null),up(n.stateNode),we(e,K()),t!==null)for(r=e.onRecoverableError,n=0;n<t.length;n++)o=t[n],r(o.value,{componentStack:o.stack,digest:o.digest});if(Eo)throw Eo=!1,e=di,di=null,e;return To&1&&e.tag!==0&&pn(),l=e.pendingLanes,l&1?e===pi?qn++:(qn=0,pi=e):qn=0,_t(),null}function pn(){if(ft!==null){var e=ic(To),t=je.transition,n=z;try{if(je.transition=null,z=16>e?16:e,ft===null)var r=!1;else{if(e=ft,ft=null,To=0,A&6)throw Error(k(331));var o=A;for(A|=4,_=e.current;_!==null;){var l=_,i=l.child;if(_.flags&16){var s=l.deletions;if(s!==null){for(var a=0;a<s.length;a++){var u=s[a];for(_=u;_!==null;){var d=_;switch(d.tag){case 0:case 11:case 15:Zn(8,d,l)}var f=d.child;if(f!==null)f.return=d,_=f;else for(;_!==null;){d=_;var g=d.sibling,y=d.return;if(yf(d),d===u){_=null;break}if(g!==null){g.return=y,_=g;break}_=y}}}var w=l.alternate;if(w!==null){var S=w.child;if(S!==null){w.child=null;do{var P=S.sibling;S.sibling=null,S=P}while(S!==null)}}_=l}}if(l.subtreeFlags&2064&&i!==null)i.return=l,_=i;else e:for(;_!==null;){if(l=_,l.flags&2048)switch(l.tag){case 0:case 11:case 15:Zn(9,l,l.return)}var m=l.sibling;if(m!==null){m.return=l.return,_=m;break e}_=l.return}}var p=e.current;for(_=p;_!==null;){i=_;var h=i.child;if(i.subtreeFlags&2064&&h!==null)h.return=i,_=h;else e:for(i=p;_!==null;){if(s=_,s.flags&2048)try{switch(s.tag){case 0:case 11:case 15:Fo(9,s)}}catch(b){G(s,s.return,b)}if(s===i){_=null;break e}var x=s.sibling;if(x!==null){x.return=s.return,_=x;break e}_=s.return}}if(A=o,_t(),Ve&&typeof Ve.onPostCommitFiberRoot=="function")try{Ve.onPostCommitFiberRoot(No,e)}catch{}r=!0}return r}finally{z=n,je.transition=t}}return!1}function Ks(e,t,n){t=wn(n,t),t=af(e,t,1),e=vt(e,t,1),t=de(),e!==null&&(xr(e,1,t),we(e,t))}function G(e,t,n){if(e.tag===3)Ks(e,e,n);else for(;t!==null;){if(t.tag===3){Ks(t,e,n);break}else if(t.tag===1){var r=t.stateNode;if(typeof t.type.getDerivedStateFromError=="function"||typeof r.componentDidCatch=="function"&&(yt===null||!yt.has(r))){e=wn(n,e),e=sf(t,e,1),t=vt(t,e,1),e=de(),t!==null&&(xr(t,1,e),we(t,e));break}}t=t.return}}function Bg(e,t,n){var r=e.pingCache;r!==null&&r.delete(t),t=de(),e.pingedLanes|=e.suspendedLanes&n,ne===e&&(oe&n)===n&&(q===4||q===3&&(oe&130023424)===oe&&500>K()-sa?Bt(e,0):aa|=n),we(e,t)}function Tf(e,t){t===0&&(e.mode&1?(t=Ar,Ar<<=1,!(Ar&130023424)&&(Ar=4194304)):t=1);var n=de();e=et(e,t),e!==null&&(xr(e,t,n),we(e,n))}function zg(e){var t=e.memoizedState,n=0;t!==null&&(n=t.retryLane),Tf(e,n)}function Og(e,t){var n=0;switch(e.tag){case 13:var r=e.stateNode,o=e.memoizedState;o!==null&&(n=o.retryLane);break;case 19:r=e.stateNode;break;default:throw Error(k(314))}r!==null&&r.delete(t),Tf(e,n)}var Rf;Rf=function(e,t,n){if(e!==null)if(e.memoizedProps!==t.pendingProps||ve.current)he=!0;else{if(!(e.lanes&n)&&!(t.flags&128))return he=!1,Cg(e,t,n);he=!!(e.flags&131072)}else he=!1,W&&t.flags&1048576&&Mc(t,wo,t.index);switch(t.lanes=0,t.tag){case 2:var r=t.type;no(e,t),e=t.pendingProps;var o=mn(t,ue.current);dn(t,n),o=ta(null,t,r,e,o,n);var l=na();return t.flags|=1,typeof o=="object"&&o!==null&&typeof o.render=="function"&&o.$$typeof===void 0?(t.tag=1,t.memoizedState=null,t.updateQueue=null,ye(r)?(l=!0,vo(t)):l=!1,t.memoizedState=o.state!==null&&o.state!==void 0?o.state:null,Xi(t),o.updater=Do,t.stateNode=o,o._reactInternals=t,ti(t,r,e,n),t=oi(null,t,r,!0,l,n)):(t.tag=0,W&&l&&Wi(t),fe(null,t,o,n),t=t.child),t;case 16:r=t.elementType;e:{switch(no(e,t),e=t.pendingProps,o=r._init,r=o(r._payload),t.type=r,o=t.tag=Dg(r),e=Ae(r,e),o){case 0:t=ri(null,t,r,e,n);break e;case 1:t=Os(null,t,r,e,n);break e;case 11:t=Bs(null,t,r,e,n);break e;case 14:t=zs(null,t,r,Ae(r.type,e),n);break e}throw Error(k(306,r,""))}return t;case 0:return r=t.type,o=t.pendingProps,o=t.elementType===r?o:Ae(r,o),ri(e,t,r,o,n);case 1:return r=t.type,o=t.pendingProps,o=t.elementType===r?o:Ae(r,o),Os(e,t,r,o,n);case 3:e:{if(df(t),e===null)throw Error(k(387));r=t.pendingProps,l=t.memoizedState,o=l.element,Oc(e,t),Po(t,r,null,n);var i=t.memoizedState;if(r=i.element,l.isDehydrated)if(l={element:r,isDehydrated:!1,cache:i.cache,pendingSuspenseBoundaries:i.pendingSuspenseBoundaries,transitions:i.transitions},t.updateQueue.baseState=l,t.memoizedState=l,t.flags&256){o=wn(Error(k(423)),t),t=Is(e,t,r,n,o);break e}else if(r!==o){o=wn(Error(k(424)),t),t=Is(e,t,r,n,o);break e}else for(Pe=ht(t.stateNode.containerInfo.firstChild),ke=t,W=!0,Be=null,n=Bc(t,null,r,n),t.child=n;n;)n.flags=n.flags&-3|4096,n=n.sibling;else{if(hn(),r===o){t=tt(e,t,n);break e}fe(e,t,r,n)}t=t.child}return t;case 5:return Ic(t),e===null&&Jl(t),r=t.type,o=t.pendingProps,l=e!==null?e.memoizedProps:null,i=o.children,Gl(r,o)?i=null:l!==null&&Gl(r,l)&&(t.flags|=32),ff(e,t),fe(e,t,i,n),t.child;case 6:return e===null&&Jl(t),null;case 13:return pf(e,t,n);case 4:return Zi(t,t.stateNode.containerInfo),r=t.pendingProps,e===null?t.child=vn(t,null,r,n):fe(e,t,r,n),t.child;case 11:return r=t.type,o=t.pendingProps,o=t.elementType===r?o:Ae(r,o),Bs(e,t,r,o,n);case 7:return fe(e,t,t.pendingProps,n),t.child;case 8:return fe(e,t,t.pendingProps.children,n),t.child;case 12:return fe(e,t,t.pendingProps.children,n),t.child;case 10:e:{if(r=t.type._context,o=t.pendingProps,l=t.memoizedProps,i=o.value,I(So,r._currentValue),r._currentValue=i,l!==null)if(Ie(l.value,i)){if(l.children===o.children&&!ve.current){t=tt(e,t,n);break e}}else for(l=t.child,l!==null&&(l.return=t);l!==null;){var s=l.dependencies;if(s!==null){i=l.child;for(var a=s.firstContext;a!==null;){if(a.context===r){if(l.tag===1){a=Ze(-1,n&-n),a.tag=2;var u=l.updateQueue;if(u!==null){u=u.shared;var d=u.pending;d===null?a.next=a:(a.next=d.next,d.next=a),u.pending=a}}l.lanes|=n,a=l.alternate,a!==null&&(a.lanes|=n),ql(l.return,n,t),s.lanes|=n;break}a=a.next}}else if(l.tag===10)i=l.type===t.type?null:l.child;else if(l.tag===18){if(i=l.return,i===null)throw Error(k(341));i.lanes|=n,s=i.alternate,s!==null&&(s.lanes|=n),ql(i,n,t),i=l.sibling}else i=l.child;if(i!==null)i.return=l;else for(i=l;i!==null;){if(i===t){i=null;break}if(l=i.sibling,l!==null){l.return=i.return,i=l;break}i=i.return}l=i}fe(e,t,o.children,n),t=t.child}return t;case 9:return o=t.type,r=t.pendingProps.children,dn(t,n),o=Le(o),r=r(o),t.flags|=1,fe(e,t,r,n),t.child;case 14:return r=t.type,o=Ae(r,t.pendingProps),o=Ae(r.type,o),zs(e,t,r,o,n);case 15:return uf(e,t,t.type,t.pendingProps,n);case 17:return r=t.type,o=t.pendingProps,o=t.elementType===r?o:Ae(r,o),no(e,t),t.tag=1,ye(r)?(e=!0,vo(t)):e=!1,dn(t,n),lf(t,r,o),ti(t,r,o,n),oi(null,t,r,!0,e,n);case 19:return gf(e,t,n);case 22:return cf(e,t,n)}throw Error(k(156,t.tag))};function jf(e,t){return nc(e,t)}function Ig(e,t,n,r){this.tag=e,this.key=n,this.sibling=this.child=this.return=this.stateNode=this.type=this.elementType=null,this.index=0,this.ref=null,this.pendingProps=t,this.dependencies=this.memoizedState=this.updateQueue=this.memoizedProps=null,this.mode=r,this.subtreeFlags=this.flags=0,this.deletions=null,this.childLanes=this.lanes=0,this.alternate=null}function Re(e,t,n,r){return new Ig(e,t,n,r)}function da(e){return e=e.prototype,!(!e||!e.isReactComponent)}function Dg(e){if(typeof e=="function")return da(e)?1:0;if(e!=null){if(e=e.$$typeof,e===Li)return 11;if(e===Mi)return 14}return 2}function St(e,t){var n=e.alternate;return n===null?(n=Re(e.tag,t,e.key,e.mode),n.elementType=e.elementType,n.type=e.type,n.stateNode=e.stateNode,n.alternate=e,e.alternate=n):(n.pendingProps=t,n.type=e.type,n.flags=0,n.subtreeFlags=0,n.deletions=null),n.flags=e.flags&14680064,n.childLanes=e.childLanes,n.lanes=e.lanes,n.child=e.child,n.memoizedProps=e.memoizedProps,n.memoizedState=e.memoizedState,n.updateQueue=e.updateQueue,t=e.dependencies,n.dependencies=t===null?null:{lanes:t.lanes,firstContext:t.firstContext},n.sibling=e.sibling,n.index=e.index,n.ref=e.ref,n}function lo(e,t,n,r,o,l){var i=2;if(r=e,typeof e=="function")da(e)&&(i=1);else if(typeof e=="string")i=5;else e:switch(e){case Xt:return zt(n.children,o,l,t);case ji:i=8,o|=8;break;case Cl:return e=Re(12,n,t,o|2),e.elementType=Cl,e.lanes=l,e;case _l:return e=Re(13,n,t,o),e.elementType=_l,e.lanes=l,e;case El:return e=Re(19,n,t,o),e.elementType=El,e.lanes=l,e;case Iu:return Wo(n,o,l,t);default:if(typeof e=="object"&&e!==null)switch(e.$$typeof){case zu:i=10;break e;case Ou:i=9;break e;case Li:i=11;break e;case Mi:i=14;break e;case it:i=16,r=null;break e}throw Error(k(130,e==null?e:typeof e,""))}return t=Re(i,n,t,o),t.elementType=e,t.type=r,t.lanes=l,t}function zt(e,t,n,r){return e=Re(7,e,r,t),e.lanes=n,e}function Wo(e,t,n,r){return e=Re(22,e,r,t),e.elementType=Iu,e.lanes=n,e.stateNode={isHidden:!1},e}function Sl(e,t,n){return e=Re(6,e,null,t),e.lanes=n,e}function xl(e,t,n){return t=Re(4,e.children!==null?e.children:[],e.key,t),t.lanes=n,t.stateNode={containerInfo:e.containerInfo,pendingChildren:null,implementation:e.implementation},t}function Fg(e,t,n,r,o){this.tag=t,this.containerInfo=e,this.finishedWork=this.pingCache=this.current=this.pendingChildren=null,this.timeoutHandle=-1,this.callbackNode=this.pendingContext=this.context=null,this.callbackPriority=0,this.eventTimes=tl(0),this.expirationTimes=tl(-1),this.entangledLanes=this.finishedLanes=this.mutableReadLanes=this.expiredLanes=this.pingedLanes=this.suspendedLanes=this.pendingLanes=0,this.entanglements=tl(0),this.identifierPrefix=r,this.onRecoverableError=o,this.mutableSourceEagerHydrationData=null}function pa(e,t,n,r,o,l,i,s,a){return e=new Fg(e,t,n,s,a),t===1?(t=1,l===!0&&(t|=8)):t=0,l=Re(3,null,null,t),e.current=l,l.stateNode=e,l.memoizedState={element:r,isDehydrated:n,cache:null,transitions:null,pendingSuspenseBoundaries:null},Xi(l),e}function Ug(e,t,n){var r=3<arguments.length&&arguments[3]!==void 0?arguments[3]:null;return{$$typeof:Yt,key:r==null?null:""+r,children:e,containerInfo:t,implementation:n}}function Lf(e){if(!e)return kt;e=e._reactInternals;e:{if(Vt(e)!==e||e.tag!==1)throw Error(k(170));var t=e;do{switch(t.tag){case 3:t=t.stateNode.context;break e;case 1:if(ye(t.type)){t=t.stateNode.__reactInternalMemoizedMergedChildContext;break e}}t=t.return}while(t!==null);throw Error(k(171))}if(e.tag===1){var n=e.type;if(ye(n))return jc(e,n,t)}return t}function Mf(e,t,n,r,o,l,i,s,a){return e=pa(n,r,!0,e,o,l,i,s,a),e.context=Lf(null),n=e.current,r=de(),o=wt(n),l=Ze(r,o),l.callback=t??null,vt(n,l,o),e.current.lanes=o,xr(e,o,r),we(e,r),e}function Vo(e,t,n,r){var o=t.current,l=de(),i=wt(o);return n=Lf(n),t.context===null?t.context=n:t.pendingContext=n,t=Ze(l,i),t.payload={element:e},r=r===void 0?null:r,r!==null&&(t.callback=r),e=vt(o,t,i),e!==null&&(Oe(e,o,i,l),qr(e,o,i)),i}function jo(e){if(e=e.current,!e.child)return null;switch(e.child.tag){case 5:return e.child.stateNode;default:return e.child.stateNode}}function Ys(e,t){if(e=e.memoizedState,e!==null&&e.dehydrated!==null){var n=e.retryLane;e.retryLane=n!==0&&n<t?n:t}}function ga(e,t){Ys(e,t),(e=e.alternate)&&Ys(e,t)}function Wg(){return null}var Nf=typeof reportError=="function"?reportError:function(e){console.error(e)};function ma(e){this._internalRoot=e}Ho.prototype.render=ma.prototype.render=function(e){var t=this._internalRoot;if(t===null)throw Error(k(409));Vo(e,t,null,null)};Ho.prototype.unmount=ma.prototype.unmount=function(){var e=this._internalRoot;if(e!==null){this._internalRoot=null;var t=e.containerInfo;Ut(function(){Vo(null,e,null,null)}),t[qe]=null}};function Ho(e){this._internalRoot=e}Ho.prototype.unstable_scheduleHydration=function(e){if(e){var t=uc();e={blockedOn:null,target:e,priority:t};for(var n=0;n<st.length&&t!==0&&t<st[n].priority;n++);st.splice(n,0,e),n===0&&fc(e)}};function ha(e){return!(!e||e.nodeType!==1&&e.nodeType!==9&&e.nodeType!==11)}function Qo(e){return!(!e||e.nodeType!==1&&e.nodeType!==9&&e.nodeType!==11&&(e.nodeType!==8||e.nodeValue!==" react-mount-point-unstable "))}function Xs(){}function Vg(e,t,n,r,o){if(o){if(typeof r=="function"){var l=r;r=function(){var u=jo(i);l.call(u)}}var i=Mf(t,r,e,0,null,!1,!1,"",Xs);return e._reactRootContainer=i,e[qe]=i.current,ur(e.nodeType===8?e.parentNode:e),Ut(),i}for(;o=e.lastChild;)e.removeChild(o);if(typeof r=="function"){var s=r;r=function(){var u=jo(a);s.call(u)}}var a=pa(e,0,!1,null,null,!1,!1,"",Xs);return e._reactRootContainer=a,e[qe]=a.current,ur(e.nodeType===8?e.parentNode:e),Ut(function(){Vo(t,a,n,r)}),a}function Go(e,t,n,r,o){var l=n._reactRootContainer;if(l){var i=l;if(typeof o=="function"){var s=o;o=function(){var a=jo(i);s.call(a)}}Vo(t,i,e,o)}else i=Vg(n,t,e,o,r);return jo(i)}ac=function(e){switch(e.tag){case 3:var t=e.stateNode;if(t.current.memoizedState.isDehydrated){var n=Un(t.pendingLanes);n!==0&&($i(t,n|1),we(t,K()),!(A&6)&&(Sn=K()+500,_t()))}break;case 13:Ut(function(){var r=et(e,1);if(r!==null){var o=de();Oe(r,e,1,o)}}),ga(e,1)}};Bi=function(e){if(e.tag===13){var t=et(e,134217728);if(t!==null){var n=de();Oe(t,e,134217728,n)}ga(e,134217728)}};sc=function(e){if(e.tag===13){var t=wt(e),n=et(e,t);if(n!==null){var r=de();Oe(n,e,t,r)}ga(e,t)}};uc=function(){return z};cc=function(e,t){var n=z;try{return z=e,t()}finally{z=n}};zl=function(e,t,n){switch(t){case"input":if(jl(e,n),t=n.name,n.type==="radio"&&t!=null){for(n=e;n.parentNode;)n=n.parentNode;for(n=n.querySelectorAll("input[name="+JSON.stringify(""+t)+'][type="radio"]'),t=0;t<n.length;t++){var r=n[t];if(r!==e&&r.form===e.form){var o=zo(r);if(!o)throw Error(k(90));Fu(r),jl(r,o)}}}break;case"textarea":Wu(e,n);break;case"select":t=n.value,t!=null&&sn(e,!!n.multiple,t,!1)}};Xu=ua;Zu=Ut;var Hg={usingClientEntryPoint:!1,Events:[kr,en,zo,Ku,Yu,ua]},In={findFiberByHostInstance:Nt,bundleType:0,version:"18.3.1",rendererPackageName:"react-dom"},Qg={bundleType:In.bundleType,version:In.version,rendererPackageName:In.rendererPackageName,rendererConfig:In.rendererConfig,overrideHookState:null,overrideHookStateDeletePath:null,overrideHookStateRenamePath:null,overrideProps:null,overridePropsDeletePath:null,overridePropsRenamePath:null,setErrorHandler:null,setSuspenseHandler:null,scheduleUpdate:null,currentDispatcherRef:nt.ReactCurrentDispatcher,findHostInstanceByFiber:function(e){return e=ec(e),e===null?null:e.stateNode},findFiberByHostInstance:In.findFiberByHostInstance||Wg,findHostInstancesForRefresh:null,scheduleRefresh:null,scheduleRoot:null,setRefreshHandler:null,getCurrentFiber:null,reconcilerVersion:"18.3.1-next-f1338f8080-20240426"};if(typeof __REACT_DEVTOOLS_GLOBAL_HOOK__<"u"){var Hr=__REACT_DEVTOOLS_GLOBAL_HOOK__;if(!Hr.isDisabled&&Hr.supportsFiber)try{No=Hr.inject(Qg),Ve=Hr}catch{}}Ce.__SECRET_INTERNALS_DO_NOT_USE_OR_YOU_WILL_BE_FIRED=Hg;Ce.createPortal=function(e,t){var n=2<arguments.length&&arguments[2]!==void 0?arguments[2]:null;if(!ha(t))throw Error(k(200));return Ug(e,t,null,n)};Ce.createRoot=function(e,t){if(!ha(e))throw Error(k(299));var n=!1,r="",o=Nf;return t!=null&&(t.unstable_strictMode===!0&&(n=!0),t.identifierPrefix!==void 0&&(r=t.identifierPrefix),t.onRecoverableError!==void 0&&(o=t.onRecoverableError)),t=pa(e,1,!1,null,null,n,!1,r,o),e[qe]=t.current,ur(e.nodeType===8?e.parentNode:e),new ma(t)};Ce.findDOMNode=function(e){if(e==null)return null;if(e.nodeType===1)return e;var t=e._reactInternals;if(t===void 0)throw typeof e.render=="function"?Error(k(188)):(e=Object.keys(e).join(","),Error(k(268,e)));return e=ec(t),e=e===null?null:e.stateNode,e};Ce.flushSync=function(e){return Ut(e)};Ce.hydrate=function(e,t,n){if(!Qo(t))throw Error(k(200));return Go(null,e,t,!0,n)};Ce.hydrateRoot=function(e,t,n){if(!ha(e))throw Error(k(405));var r=n!=null&&n.hydratedSources||null,o=!1,l="",i=Nf;if(n!=null&&(n.unstable_strictMode===!0&&(o=!0),n.identifierPrefix!==void 0&&(l=n.identifierPrefix),n.onRecoverableError!==void 0&&(i=n.onRecoverableError)),t=Mf(t,null,e,1,n??null,o,!1,l,i),e[qe]=t.current,ur(e),r)for(e=0;e<r.length;e++)n=r[e],o=n._getVersion,o=o(n._source),t.mutableSourceEagerHydrationData==null?t.mutableSourceEagerHydrationData=[n,o]:t.mutableSourceEagerHydrationData.push(n,o);return new Ho(t)};Ce.render=function(e,t,n){if(!Qo(t))throw Error(k(200));return Go(null,e,t,!1,n)};Ce.unmountComponentAtNode=function(e){if(!Qo(e))throw Error(k(40));return e._reactRootContainer?(Ut(function(){Go(null,null,e,!1,function(){e._reactRootContainer=null,e[qe]=null})}),!0):!1};Ce.unstable_batchedUpdates=ua;Ce.unstable_renderSubtreeIntoContainer=function(e,t,n,r){if(!Qo(n))throw Error(k(200));if(e==null||e._reactInternals===void 0)throw Error(k(38));return Go(e,t,n,!1,r)};Ce.version="18.3.1-next-f1338f8080-20240426";function Af(){if(!(typeof __REACT_DEVTOOLS_GLOBAL_HOOK__>"u"||typeof __REACT_DEVTOOLS_GLOBAL_HOOK__.checkDCE!="function"))try{__REACT_DEVTOOLS_GLOBAL_HOOK__.checkDCE(Af)}catch(e){console.error(e)}}Af(),Nu.exports=Ce;var Gg=Nu.exports,Zs=Gg;kl.createRoot=Zs.createRoot,kl.hydrateRoot=Zs.hydrateRoot;/**
 * @remix-run/router v1.23.4
 *
 * Copyright (c) Remix Software Inc.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE.md file in the root directory of this source tree.
 *
 * @license MIT
 */function yr(){return yr=Object.assign?Object.assign.bind():function(e){for(var t=1;t<arguments.length;t++){var n=arguments[t];for(var r in n)({}).hasOwnProperty.call(n,r)&&(e[r]=n[r])}return e},yr.apply(null,arguments)}var dt;(function(e){e.Pop="POP",e.Push="PUSH",e.Replace="REPLACE"})(dt||(dt={}));const Js="popstate";function Kg(e){e===void 0&&(e={});function t(o,l){let{pathname:i="/",search:s="",hash:a=""}=Ht(o.location.hash.substr(1));return!i.startsWith("/")&&!i.startsWith(".")&&(i="/"+i),hi("",{pathname:i,search:s,hash:a},l.state&&l.state.usr||null,l.state&&l.state.key||"default")}function n(o,l){let i=o.document.querySelector("base"),s="";if(i&&i.getAttribute("href")){let a=o.location.href,u=a.indexOf("#");s=u===-1?a:a.slice(0,u)}return s+"#"+(typeof l=="string"?l:Lo(l))}function r(o,l){va(o.pathname.charAt(0)==="/","relative pathnames are not supported in hash history.push("+JSON.stringify(l)+")")}return Xg(t,n,r,e)}function Y(e,t){if(e===!1||e===null||typeof e>"u")throw new Error(t)}function va(e,t){if(!e){typeof console<"u"&&console.warn(t);try{throw new Error(t)}catch{}}}function Yg(){return Math.random().toString(36).substr(2,8)}function qs(e,t){return{usr:e.state,key:e.key,idx:t}}function hi(e,t,n,r){return n===void 0&&(n=null),yr({pathname:typeof e=="string"?e:e.pathname,search:"",hash:""},typeof t=="string"?Ht(t):t,{state:n,key:t&&t.key||r||Yg()})}function Lo(e){let{pathname:t="/",search:n="",hash:r=""}=e;return n&&n!=="?"&&(t+=n.charAt(0)==="?"?n:"?"+n),r&&r!=="#"&&(t+=r.charAt(0)==="#"?r:"#"+r),t}function Ht(e){let t={};if(e){let n=e.indexOf("#");n>=0&&(t.hash=e.substr(n),e=e.substr(0,n));let r=e.indexOf("?");r>=0&&(t.search=e.substr(r),e=e.substr(0,r)),e&&(t.pathname=e)}return t}function Xg(e,t,n,r){r===void 0&&(r={});let{window:o=document.defaultView,v5Compat:l=!1}=r,i=o.history,s=dt.Pop,a=null,u=d();u==null&&(u=0,i.replaceState(yr({},i.state,{idx:u}),""));function d(){return(i.state||{idx:null}).idx}function f(){s=dt.Pop;let P=d(),m=P==null?null:P-u;u=P,a&&a({action:s,location:S.location,delta:m})}function g(P,m){s=dt.Push;let p=hi(S.location,P,m);n&&n(p,P),u=d()+1;let h=qs(p,u),x=S.createHref(p);try{i.pushState(h,"",x)}catch(b){if(b instanceof DOMException&&b.name==="DataCloneError")throw b;o.location.assign(x)}l&&a&&a({action:s,location:S.location,delta:1})}function y(P,m){s=dt.Replace;let p=hi(S.location,P,m);n&&n(p,P),u=d();let h=qs(p,u),x=S.createHref(p);i.replaceState(h,"",x),l&&a&&a({action:s,location:S.location,delta:0})}function w(P){let m=o.location.origin!=="null"?o.location.origin:o.location.href,p=typeof P=="string"?P:Lo(P);return p=p.replace(/ $/,"%20"),Y(m,"No window.location.(origin|href) available to create URL for href: "+p),new URL(p,m)}let S={get action(){return s},get location(){return e(o,i)},listen(P){if(a)throw new Error("A history only accepts one active listener");return o.addEventListener(Js,f),a=P,()=>{o.removeEventListener(Js,f),a=null}},createHref(P){return t(o,P)},createURL:w,encodeLocation(P){let m=w(P);return{pathname:m.pathname,search:m.search,hash:m.hash}},push:g,replace:y,go(P){return i.go(P)}};return S}var eu;(function(e){e.data="data",e.deferred="deferred",e.redirect="redirect",e.error="error"})(eu||(eu={}));function Zg(e,t,n){return n===void 0&&(n="/"),Jg(e,t,n)}function Jg(e,t,n,r){let o=typeof t=="string"?Ht(t):t,l=ya(o.pathname||"/",n);if(l==null)return null;let i=$f(e);qg(i);let s=null,a=fm(l);for(let u=0;s==null&&u<i.length;++u)s=sm(i[u],a);return s}function $f(e,t,n,r){t===void 0&&(t=[]),n===void 0&&(n=[]),r===void 0&&(r="");let o=(l,i,s)=>{let a={relativePath:s===void 0?l.path||"":s,caseSensitive:l.caseSensitive===!0,childrenIndex:i,route:l};a.relativePath.startsWith("/")&&(Y(a.relativePath.startsWith(r),'Absolute route path "'+a.relativePath+'" nested under path '+('"'+r+'" is not valid. An absolute child route path ')+"must start with the combined path of all its parent routes."),a.relativePath=a.relativePath.slice(r.length));let u=xt([r,a.relativePath]),d=n.concat(a);l.children&&l.children.length>0&&(Y(l.index!==!0,"Index routes must not have child routes. Please remove "+('all child routes from route path "'+u+'".')),$f(l.children,t,d,u)),!(l.path==null&&!l.index)&&t.push({path:u,score:im(u,l.index),routesMeta:d})};return e.forEach((l,i)=>{var s;if(l.path===""||!((s=l.path)!=null&&s.includes("?")))o(l,i);else for(let a of Bf(l.path))o(l,i,a)}),t}function Bf(e){let t=e.split("/");if(t.length===0)return[];let[n,...r]=t,o=n.endsWith("?"),l=n.replace(/\?$/,"");if(r.length===0)return o?[l,""]:[l];let i=Bf(r.join("/")),s=[];return s.push(...i.map(a=>a===""?l:[l,a].join("/"))),o&&s.push(...i),s.map(a=>e.startsWith("/")&&a===""?"/":a)}function qg(e){e.sort((t,n)=>t.score!==n.score?n.score-t.score:am(t.routesMeta.map(r=>r.childrenIndex),n.routesMeta.map(r=>r.childrenIndex)))}const em=/^:[\w-]+$/,tm=3,nm=2,rm=1,om=10,lm=-2,tu=e=>e==="*";function im(e,t){let n=e.split("/"),r=n.length;return n.some(tu)&&(r+=lm),t&&(r+=nm),n.filter(o=>!tu(o)).reduce((o,l)=>o+(em.test(l)?tm:l===""?rm:om),r)}function am(e,t){return e.length===t.length&&e.slice(0,-1).every((r,o)=>r===t[o])?e[e.length-1]-t[t.length-1]:0}function sm(e,t,n){let{routesMeta:r}=e,o={},l="/",i=[];for(let s=0;s<r.length;++s){let a=r[s],u=s===r.length-1,d=l==="/"?t:t.slice(l.length)||"/",f=um({path:a.relativePath,caseSensitive:a.caseSensitive,end:u},d),g=a.route;if(!f)return null;Object.assign(o,f.params),i.push({params:o,pathname:xt([l,f.pathname]),pathnameBase:gm(xt([l,f.pathnameBase])),route:g}),f.pathnameBase!=="/"&&(l=xt([l,f.pathnameBase]))}return i}function um(e,t){typeof e=="string"&&(e={path:e,caseSensitive:!1,end:!0});let[n,r]=cm(e.path,e.caseSensitive,e.end),o=t.match(n);if(!o)return null;let l=o[0],i=l.replace(/(.)\/+$/,"$1"),s=o.slice(1);return{params:r.reduce((u,d,f)=>{let{paramName:g,isOptional:y}=d;if(g==="*"){let S=s[f]||"";i=l.slice(0,l.length-S.length).replace(/(.)\/+$/,"$1")}const w=s[f];return y&&!w?u[g]=void 0:u[g]=(w||"").replace(/%2F/g,"/"),u},{}),pathname:l,pathnameBase:i,pattern:e}}function cm(e,t,n){t===void 0&&(t=!1),n===void 0&&(n=!0),va(e==="*"||!e.endsWith("*")||e.endsWith("/*"),'Route path "'+e+'" will be treated as if it were '+('"'+e.replace(/\*$/,"/*")+'" because the `*` character must ')+"always follow a `/` in the pattern. To get rid of this warning, "+('please change the route path to "'+e.replace(/\*$/,"/*")+'".'));let r=[],o="^"+e.replace(/\/*\*?$/,"").replace(/^\/*/,"/").replace(/[\\.*+^${}|()[\]]/g,"\\$&").replace(/\/:([\w-]+)(\?)?/g,(i,s,a)=>(r.push({paramName:s,isOptional:a!=null}),a?"/?([^\\/]+)?":"/([^\\/]+)"));return e.endsWith("*")?(r.push({paramName:"*"}),o+=e==="*"||e==="/*"?"(.*)$":"(?:\\/(.+)|\\/*)$"):n?o+="\\/*$":e!==""&&e!=="/"&&(o+="(?:(?=\\/|$))"),[new RegExp(o,t?void 0:"i"),r]}function fm(e){try{return e.split("/").map(t=>decodeURIComponent(t).replace(/\//g,"%2F")).join("/")}catch(t){return va(!1,'The URL path "'+e+'" could not be decoded because it is is a malformed URL segment. This is probably due to a bad percent '+("encoding ("+t+").")),e}}function ya(e,t){if(t==="/")return e;if(!e.toLowerCase().startsWith(t.toLowerCase()))return null;let n=t.endsWith("/")?t.length-1:t.length,r=e.charAt(n);return r&&r!=="/"?null:e.slice(n)||"/"}function dm(e,t){t===void 0&&(t="/");let{pathname:n,search:r="",hash:o=""}=typeof e=="string"?Ht(e):e,l;return n?(n=zf(n),n.startsWith("/")?l=nu(n.substring(1),"/"):l=nu(n,t)):l=t,{pathname:l,search:mm(r),hash:hm(o)}}function nu(e,t){let n=t.replace(/\/+$/,"").split("/");return e.split("/").forEach(o=>{o===".."?n.length>1&&n.pop():o!=="."&&n.push(o)}),n.length>1?n.join("/"):"/"}function Pl(e,t,n,r){return"Cannot include a '"+e+"' character in a manually specified "+("`to."+t+"` field ["+JSON.stringify(r)+"].  Please separate it out to the ")+("`to."+n+"` field. Alternatively you may provide the full path as ")+'a string in <Link to="..."> and the router will parse it for you.'}function pm(e){return e.filter((t,n)=>n===0||t.route.path&&t.route.path.length>0)}function wa(e,t){let n=pm(e);return t?n.map((r,o)=>o===n.length-1?r.pathname:r.pathnameBase):n.map(r=>r.pathnameBase)}function Sa(e,t,n,r){r===void 0&&(r=!1);let o;typeof e=="string"?o=Ht(e):(o=yr({},e),Y(!o.pathname||!o.pathname.includes("?"),Pl("?","pathname","search",o)),Y(!o.pathname||!o.pathname.includes("#"),Pl("#","pathname","hash",o)),Y(!o.search||!o.search.includes("#"),Pl("#","search","hash",o)));let l=e===""||o.pathname==="",i=l?"/":o.pathname,s;if(i==null)s=n;else{let f=t.length-1;if(!r&&i.startsWith("..")){let g=i.split("/");for(;g[0]==="..";)g.shift(),f-=1;o.pathname=g.join("/")}s=f>=0?t[f]:"/"}let a=dm(o,s),u=i&&i!=="/"&&i.endsWith("/"),d=(l||i===".")&&n.endsWith("/");return!a.pathname.endsWith("/")&&(u||d)&&(a.pathname+="/"),a}const zf=e=>e.replace(/\/\/+/g,"/"),xt=e=>zf(e.join("/")),gm=e=>e.replace(/\/+$/,"").replace(/^\/*/,"/"),mm=e=>!e||e==="?"?"":e.startsWith("?")?e:"?"+e,hm=e=>!e||e==="#"?"":e.startsWith("#")?e:"#"+e;function vm(e){return e!=null&&typeof e.status=="number"&&typeof e.statusText=="string"&&typeof e.internal=="boolean"&&"data"in e}const Of=["post","put","patch","delete"];new Set(Of);const ym=["get",...Of];new Set(ym);/**
 * React Router v6.30.6
 *
 * Copyright (c) Remix Software Inc.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE.md file in the root directory of this source tree.
 *
 * @license MIT
 */function wr(){return wr=Object.assign?Object.assign.bind():function(e){for(var t=1;t<arguments.length;t++){var n=arguments[t];for(var r in n)({}).hasOwnProperty.call(n,r)&&(e[r]=n[r])}return e},wr.apply(null,arguments)}const xa=v.createContext(null),wm=v.createContext(null),Et=v.createContext(null),Ko=v.createContext(null),rt=v.createContext({outlet:null,matches:[],isDataRoute:!1}),If=v.createContext(null);function Sm(e,t){let{relative:n}=t===void 0?{}:t;Cn()||Y(!1);let{basename:r,navigator:o}=v.useContext(Et),{hash:l,pathname:i,search:s}=Uf(e,{relative:n}),a=i;return r!=="/"&&(a=i==="/"?r:xt([r,i])),o.createHref({pathname:a,search:s,hash:l})}function Cn(){return v.useContext(Ko)!=null}function _n(){return Cn()||Y(!1),v.useContext(Ko).location}function Df(e){v.useContext(Et).static||v.useLayoutEffect(e)}function Ff(){let{isDataRoute:e}=v.useContext(rt);return e?Am():xm()}function xm(){Cn()||Y(!1);let e=v.useContext(xa),{basename:t,future:n,navigator:r}=v.useContext(Et),{matches:o}=v.useContext(rt),{pathname:l}=_n(),i=JSON.stringify(wa(o,n.v7_relativeSplatPath)),s=v.useRef(!1);return Df(()=>{s.current=!0}),v.useCallback(function(u,d){if(d===void 0&&(d={}),!s.current)return;if(typeof u=="number"){r.go(u);return}let f=Sa(u,JSON.parse(i),l,d.relative==="path");e==null&&t!=="/"&&(f.pathname=f.pathname==="/"?t:xt([t,f.pathname])),(d.replace?r.replace:r.push)(f,d.state,d)},[t,r,i,l,e])}function Pm(){let{matches:e}=v.useContext(rt),t=e[e.length-1];return t?t.params:{}}function Uf(e,t){let{relative:n}=t===void 0?{}:t,{future:r}=v.useContext(Et),{matches:o}=v.useContext(rt),{pathname:l}=_n(),i=JSON.stringify(wa(o,r.v7_relativeSplatPath));return v.useMemo(()=>Sa(e,JSON.parse(i),l,n==="path"),[e,i,l,n])}function km(e,t){return bm(e,t)}function bm(e,t,n,r){Cn()||Y(!1);let{navigator:o}=v.useContext(Et),{matches:l}=v.useContext(rt),i=l[l.length-1],s=i?i.params:{};i&&i.pathname;let a=i?i.pathnameBase:"/";i&&i.route;let u=_n(),d;if(t){var f;let P=typeof t=="string"?Ht(t):t;a==="/"||(f=P.pathname)!=null&&f.startsWith(a)||Y(!1),d=P}else d=u;let g=d.pathname||"/",y=g;if(a!=="/"){let P=a.replace(/^\//,"").split("/");y="/"+g.replace(/^\//,"").split("/").slice(P.length).join("/")}let w=Zg(e,{pathname:y}),S=Rm(w&&w.map(P=>Object.assign({},P,{params:Object.assign({},s,P.params),pathname:xt([a,o.encodeLocation?o.encodeLocation(P.pathname).pathname:P.pathname]),pathnameBase:P.pathnameBase==="/"?a:xt([a,o.encodeLocation?o.encodeLocation(P.pathnameBase).pathname:P.pathnameBase])})),l,n,r);return t&&S?v.createElement(Ko.Provider,{value:{location:wr({pathname:"/",search:"",hash:"",state:null,key:"default"},d),navigationType:dt.Pop}},S):S}function Cm(){let e=Nm(),t=vm(e)?e.status+" "+e.statusText:e instanceof Error?e.message:JSON.stringify(e),n=e instanceof Error?e.stack:null,o={padding:"0.5rem",backgroundColor:"rgba(200,200,200, 0.5)"};return v.createElement(v.Fragment,null,v.createElement("h2",null,"Unexpected Application Error!"),v.createElement("h3",{style:{fontStyle:"italic"}},t),n?v.createElement("pre",{style:o},n):null,null)}const _m=v.createElement(Cm,null);class Em extends v.Component{constructor(t){super(t),this.state={location:t.location,revalidation:t.revalidation,error:t.error}}static getDerivedStateFromError(t){return{error:t}}static getDerivedStateFromProps(t,n){return n.location!==t.location||n.revalidation!=="idle"&&t.revalidation==="idle"?{error:t.error,location:t.location,revalidation:t.revalidation}:{error:t.error!==void 0?t.error:n.error,location:n.location,revalidation:t.revalidation||n.revalidation}}componentDidCatch(t,n){console.error("React Router caught the following error during render",t,n)}render(){return this.state.error!==void 0?v.createElement(rt.Provider,{value:this.props.routeContext},v.createElement(If.Provider,{value:this.state.error,children:this.props.component})):this.props.children}}function Tm(e){let{routeContext:t,match:n,children:r}=e,o=v.useContext(xa);return o&&o.static&&o.staticContext&&(n.route.errorElement||n.route.ErrorBoundary)&&(o.staticContext._deepestRenderedBoundaryId=n.route.id),v.createElement(rt.Provider,{value:t},r)}function Rm(e,t,n,r){var o;if(t===void 0&&(t=[]),n===void 0&&(n=null),r===void 0&&(r=null),e==null){var l;if(!n)return null;if(n.errors)e=n.matches;else if((l=r)!=null&&l.v7_partialHydration&&t.length===0&&!n.initialized&&n.matches.length>0)e=n.matches;else return null}let i=e,s=(o=n)==null?void 0:o.errors;if(s!=null){let d=i.findIndex(f=>f.route.id&&(s==null?void 0:s[f.route.id])!==void 0);d>=0||Y(!1),i=i.slice(0,Math.min(i.length,d+1))}let a=!1,u=-1;if(n&&r&&r.v7_partialHydration)for(let d=0;d<i.length;d++){let f=i[d];if((f.route.HydrateFallback||f.route.hydrateFallbackElement)&&(u=d),f.route.id){let{loaderData:g,errors:y}=n,w=f.route.loader&&g[f.route.id]===void 0&&(!y||y[f.route.id]===void 0);if(f.route.lazy||w){a=!0,u>=0?i=i.slice(0,u+1):i=[i[0]];break}}}return i.reduceRight((d,f,g)=>{let y,w=!1,S=null,P=null;n&&(y=s&&f.route.id?s[f.route.id]:void 0,S=f.route.errorElement||_m,a&&(u<0&&g===0?($m("route-fallback"),w=!0,P=null):u===g&&(w=!0,P=f.route.hydrateFallbackElement||null)));let m=t.concat(i.slice(0,g+1)),p=()=>{let h;return y?h=S:w?h=P:f.route.Component?h=v.createElement(f.route.Component,null):f.route.element?h=f.route.element:h=d,v.createElement(Tm,{match:f,routeContext:{outlet:d,matches:m,isDataRoute:n!=null},children:h})};return n&&(f.route.ErrorBoundary||f.route.errorElement||g===0)?v.createElement(Em,{location:n.location,revalidation:n.revalidation,component:S,error:y,children:p(),routeContext:{outlet:null,matches:m,isDataRoute:!0}}):p()},null)}var Wf=function(e){return e.UseBlocker="useBlocker",e.UseRevalidator="useRevalidator",e.UseNavigateStable="useNavigate",e}(Wf||{}),Vf=function(e){return e.UseBlocker="useBlocker",e.UseLoaderData="useLoaderData",e.UseActionData="useActionData",e.UseRouteError="useRouteError",e.UseNavigation="useNavigation",e.UseRouteLoaderData="useRouteLoaderData",e.UseMatches="useMatches",e.UseRevalidator="useRevalidator",e.UseNavigateStable="useNavigate",e.UseRouteId="useRouteId",e}(Vf||{});function jm(e){let t=v.useContext(xa);return t||Y(!1),t}function Lm(e){let t=v.useContext(wm);return t||Y(!1),t}function Mm(e){let t=v.useContext(rt);return t||Y(!1),t}function Hf(e){let t=Mm(),n=t.matches[t.matches.length-1];return n.route.id||Y(!1),n.route.id}function Nm(){var e;let t=v.useContext(If),n=Lm(),r=Hf();return t!==void 0?t:(e=n.errors)==null?void 0:e[r]}function Am(){let{router:e}=jm(Wf.UseNavigateStable),t=Hf(Vf.UseNavigateStable),n=v.useRef(!1);return Df(()=>{n.current=!0}),v.useCallback(function(o,l){l===void 0&&(l={}),n.current&&(typeof o=="number"?e.navigate(o):e.navigate(o,wr({fromRouteId:t},l)))},[e,t])}const ru={};function $m(e,t,n){ru[e]||(ru[e]=!0)}function Bm(e,t){e==null||e.v7_startTransition,e==null||e.v7_relativeSplatPath}function vi(e){let{to:t,replace:n,state:r,relative:o}=e;Cn()||Y(!1);let{future:l,static:i}=v.useContext(Et),{matches:s}=v.useContext(rt),{pathname:a}=_n(),u=Ff(),d=Sa(t,wa(s,l.v7_relativeSplatPath),a,o==="path"),f=JSON.stringify(d);return v.useEffect(()=>u(JSON.parse(f),{replace:n,state:r,relative:o}),[u,f,o,n,r]),null}function Vn(e){Y(!1)}function zm(e){let{basename:t="/",children:n=null,location:r,navigationType:o=dt.Pop,navigator:l,static:i=!1,future:s}=e;Cn()&&Y(!1);let a=t.replace(/^\/*/,"/"),u=v.useMemo(()=>({basename:a,navigator:l,static:i,future:wr({v7_relativeSplatPath:!1},s)}),[a,s,l,i]);typeof r=="string"&&(r=Ht(r));let{pathname:d="/",search:f="",hash:g="",state:y=null,key:w="default"}=r,S=v.useMemo(()=>{let P=ya(d,a);return P==null?null:{location:{pathname:P,search:f,hash:g,state:y,key:w},navigationType:o}},[a,d,f,g,y,w,o]);return S==null?null:v.createElement(Et.Provider,{value:u},v.createElement(Ko.Provider,{children:n,value:S}))}function Om(e){let{children:t,location:n}=e;return km(yi(t),n)}new Promise(()=>{});function yi(e,t){t===void 0&&(t=[]);let n=[];return v.Children.forEach(e,(r,o)=>{if(!v.isValidElement(r))return;let l=[...t,o];if(r.type===v.Fragment){n.push.apply(n,yi(r.props.children,l));return}r.type!==Vn&&Y(!1),!r.props.index||!r.props.children||Y(!1);let i={id:r.props.id||l.join("-"),caseSensitive:r.props.caseSensitive,element:r.props.element,Component:r.props.Component,index:r.props.index,path:r.props.path,loader:r.props.loader,action:r.props.action,errorElement:r.props.errorElement,ErrorBoundary:r.props.ErrorBoundary,hasErrorBoundary:r.props.ErrorBoundary!=null||r.props.errorElement!=null,shouldRevalidate:r.props.shouldRevalidate,handle:r.props.handle,lazy:r.props.lazy};r.props.children&&(i.children=yi(r.props.children,l)),n.push(i)}),n}/**
 * React Router DOM v6.30.6
 *
 * Copyright (c) Remix Software Inc.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE.md file in the root directory of this source tree.
 *
 * @license MIT
 */function wi(){return wi=Object.assign?Object.assign.bind():function(e){for(var t=1;t<arguments.length;t++){var n=arguments[t];for(var r in n)({}).hasOwnProperty.call(n,r)&&(e[r]=n[r])}return e},wi.apply(null,arguments)}function Im(e,t){if(e==null)return{};var n={};for(var r in e)if({}.hasOwnProperty.call(e,r)){if(t.indexOf(r)!==-1)continue;n[r]=e[r]}return n}function Dm(e){return!!(e.metaKey||e.altKey||e.ctrlKey||e.shiftKey)}function Fm(e,t){return e.button===0&&(!t||t==="_self")&&!Dm(e)}const Um=["onClick","relative","reloadDocument","replace","state","target","to","preventScrollReset","viewTransition"],Wm="6";try{window.__reactRouterVersion=Wm}catch{}const Vm="startTransition",ou=Bd[Vm];function Hm(e){let{basename:t,children:n,future:r,window:o}=e,l=v.useRef();l.current==null&&(l.current=Kg({window:o,v5Compat:!0}));let i=l.current,[s,a]=v.useState({action:i.action,location:i.location}),{v7_startTransition:u}=r||{},d=v.useCallback(f=>{u&&ou?ou(()=>a(f)):a(f)},[a,u]);return v.useLayoutEffect(()=>i.listen(d),[i,d]),v.useEffect(()=>Bm(r),[r]),v.createElement(zm,{basename:t,children:n,location:s.location,navigationType:s.action,navigator:i,future:r})}const Qm=typeof window<"u"&&typeof window.document<"u"&&typeof window.document.createElement<"u",Gm=/^(?:[a-z][a-z0-9+.-]*:|\/\/)/i,Si=v.forwardRef(function(t,n){let{onClick:r,relative:o,reloadDocument:l,replace:i,state:s,target:a,to:u,preventScrollReset:d,viewTransition:f}=t,g=Im(t,Um),{basename:y}=v.useContext(Et),w,S=!1;if(typeof u=="string"&&Gm.test(u)&&(w=u,Qm))try{let h=new URL(window.location.href),x=u.startsWith("//")?new URL(h.protocol+u):new URL(u),b=ya(x.pathname,y);x.origin===h.origin&&b!=null?u=b+x.search+x.hash:S=!0}catch{}let P=Sm(u,{relative:o}),m=Km(u,{replace:i,state:s,target:a,preventScrollReset:d,relative:o,viewTransition:f});function p(h){r&&r(h),h.defaultPrevented||m(h)}return v.createElement("a",wi({},g,{href:w||P,onClick:S||l?r:p,ref:n,target:a}))});var lu;(function(e){e.UseScrollRestoration="useScrollRestoration",e.UseSubmit="useSubmit",e.UseSubmitFetcher="useSubmitFetcher",e.UseFetcher="useFetcher",e.useViewTransitionState="useViewTransitionState"})(lu||(lu={}));var iu;(function(e){e.UseFetcher="useFetcher",e.UseFetchers="useFetchers",e.UseScrollRestoration="useScrollRestoration"})(iu||(iu={}));function Km(e,t){let{target:n,replace:r,state:o,preventScrollReset:l,relative:i,viewTransition:s}=t===void 0?{}:t,a=Ff(),u=_n(),d=Uf(e,{relative:i});return v.useCallback(f=>{if(Fm(f,n)){f.preventDefault();let g=r!==void 0?r:Lo(u)===Lo(d);a(e,{replace:g,state:o,preventScrollReset:l,relative:i,viewTransition:s})}},[u,a,d,r,o,n,e,l,i,s])}const Ym="https://github.com/frankvane/vane-components";class Xm extends Pn.Component{constructor(){super(...arguments);Ua(this,"state",{error:null})}static getDerivedStateFromError(n){return{error:n}}render(){var n;return this.state.error?c.jsxs("div",{className:"crash",role:"alert",children:[c.jsx("h3",{children:"这个页面炸了"}),c.jsx("pre",{children:String(((n=this.state.error)==null?void 0:n.stack)||this.state.error)}),c.jsx("button",{type:"button",onClick:()=>this.setState({error:null}),children:"重试"})]}):this.props.children}}function Qf(e,t){return String(e.entries.indexOf(t)+1).padStart(2,"0")}function Zm({demos:e,pathname:t}){var a;const{groups:n,entries:r,label:o}=e,l=(a=r.find(u=>t===`/demo/${u.meta.slug}`))==null?void 0:a.meta.group,[i,s]=v.useState(()=>{var d;const u=(d=n[0])==null?void 0:d.key;return Object.fromEntries(n.map(f=>[f.key,f.key===(l??u)]))});return v.useEffect(()=>{l&&s(u=>u[l]?u:{...u,[l]:!0})},[l]),c.jsxs("div",{className:"nav-section",children:[c.jsxs("div",{className:"nav-section-head",children:[c.jsx("span",{children:o}),c.jsxs("code",{children:[r.length," demos"]})]}),n.map(u=>{const d=r.filter(g=>g.meta.group===u.key);if(d.length===0)return null;const f=i[u.key]??!1;return c.jsxs("div",{className:"nav-group",children:[c.jsxs("button",{type:"button",className:`nav-group-head${l===u.key?" is-current":""}`,onClick:()=>s(g=>({...g,[u.key]:!f})),"aria-expanded":f,children:[c.jsx("span",{className:`nav-caret${f?" is-open":""}`,"aria-hidden":!0,children:"▸"}),u.label,c.jsx("code",{children:d.length})]}),f?c.jsx("div",{className:"nav-list",children:d.map(g=>c.jsxs(Si,{to:`/demo/${g.meta.slug}`,className:`nav-sub${t===`/demo/${g.meta.slug}`?" is-active":""}`,children:[c.jsx("em",{"aria-hidden":!0,children:Qf(e,g)}),g.meta.title]},g.meta.slug))}):null]},u.key)})]})}function Jm({demos:e}){const{slug:t}=Pm(),{entries:n,detail:r}=e,o=t?n.find(i=>i.meta.slug===t):void 0;if(!o)return c.jsx(vi,{to:`/demo/${n[0].meta.slug}`,replace:!0});const l=n.indexOf(o)+1;return c.jsx(Pn.Fragment,{children:r(o,l)},o.meta.slug)}function qm({config:e}){var d;const{pathname:t}=_n(),[n,r]=v.useState(!1),[o,l]=v.useState(!1);v.useEffect(()=>r(!1),[t]);const i=v.useCallback(()=>l(f=>!f),[]);v.useEffect(()=>{const f=g=>{const y=g.target,w=y&&(y.tagName==="INPUT"||y.tagName==="TEXTAREA"||y.isContentEditable);g.key==="Escape"&&r(!1),!w&&(g.key==="g"||g.key==="G")&&!g.metaKey&&!g.ctrlKey&&l(S=>!S)};return window.addEventListener("keydown",f),()=>window.removeEventListener("keydown",f)},[]);const s=e.demos,a=v.useMemo(()=>{if(!t.startsWith("/demo"))return e.crumb(t);const f=t.replace(/^\/demo\/?/,""),g=s.entries.find(y=>y.meta.slug===f);return g?`demo ${Qf(s,g)} · ${g.meta.title}`:"demo · 逐项示例"},[t,e,s]),u=v.useMemo(()=>e.nav.map((f,g)=>({...f,no:String(g+1).padStart(2,"0")})),[e.nav]);return c.jsxs("div",{className:`shell${n?" is-nav-open":""}${o?" is-guides":""}`,children:[c.jsx("a",{className:"skip-link",href:"#main",onClick:f=>{f.preventDefault();const g=document.getElementById("main");g==null||g.setAttribute("tabindex","-1"),g==null||g.focus(),g==null||g.scrollIntoView({block:"start"})},children:"跳到内容"}),c.jsxs("aside",{className:"side","aria-label":"站点导航",children:[c.jsxs(Si,{to:"/",className:"brand",children:[c.jsx("span",{className:"brand-mark","aria-hidden":!0,children:e.brand}),c.jsxs("span",{children:[c.jsx("strong",{children:e.pkg}),c.jsx("em",{children:e.subtitle})]})]}),c.jsxs("nav",{children:[u.map(f=>c.jsxs(Si,{to:f.to,className:`nav-item${t===f.to?" is-active":""}`,"aria-current":t===f.to?"page":void 0,children:[c.jsx("em",{"aria-hidden":!0,children:f.no}),c.jsx("span",{children:f.label}),f.hint?c.jsx("code",{children:f.hint}):null]},f.to)),c.jsx(Zm,{demos:e.demos,pathname:t})]}),c.jsxs("div",{className:"side-foot",children:[c.jsx("p",{children:e.footer[0]}),c.jsx("p",{className:"muted",children:e.footer[1]})]})]}),c.jsx("button",{type:"button",className:"scrim","aria-label":"关闭导航",tabIndex:n?0:-1,onClick:()=>r(!1)}),c.jsxs("div",{className:"main",id:"main",children:[c.jsxs("header",{className:"topbar",children:[c.jsx("button",{type:"button",className:"nav-toggle","aria-label":n?"关闭导航":"打开导航","aria-expanded":n,onClick:()=>r(f=>!f),children:c.jsx("span",{"aria-hidden":!0})}),c.jsx("span",{className:"crumb",children:a}),c.jsxs("div",{className:"topbar-right",children:[(d=e.stats)==null?void 0:d.map(f=>c.jsxs("span",{className:"topbar-stat",title:f.title,children:[c.jsx("b",{children:f.value})," ",f.label]},f.label)),c.jsxs("button",{type:"button",className:"topbar-btn","aria-pressed":o,onClick:i,title:"显示栏位参考线（快捷键 G）",children:[c.jsx("i",{"aria-hidden":!0}),"guides"]}),c.jsx("a",{className:"topbar-link",href:e.sourceUrl??Ym,target:"_blank",rel:"noreferrer",children:"source ↗"})]})]}),c.jsx("div",{className:"guides","aria-hidden":!0}),c.jsx(v.Suspense,{fallback:c.jsx("div",{className:"loading",children:"loading modules…"}),children:c.jsx(Xm,{children:c.jsxs(Om,{children:[e.routes.map(f=>c.jsx(Vn,{path:f.path,element:f.element},f.path)),c.jsx(Vn,{path:"/demo",element:c.jsx(vi,{to:`/demo/${e.demos.entries[0].meta.slug}`,replace:!0})}),c.jsx(Vn,{path:"/demo/:slug",element:c.jsx(Jm,{demos:e.demos})}),c.jsx(Vn,{path:"*",element:c.jsx(vi,{to:"/",replace:!0})})]})})})]})]})}function eh({config:e}){return c.jsx(Hm,{children:c.jsx(qm,{config:e})})}const th="modulepreload",nh=function(e,t){return new URL(e,t).href},au={},Pa=function(t,n,r){let o=Promise.resolve();if(n&&n.length>0){const i=document.getElementsByTagName("link"),s=document.querySelector("meta[property=csp-nonce]"),a=(s==null?void 0:s.nonce)||(s==null?void 0:s.getAttribute("nonce"));o=Promise.allSettled(n.map(u=>{if(u=nh(u,r),u in au)return;au[u]=!0;const d=u.endsWith(".css"),f=d?'[rel="stylesheet"]':"";if(!!r)for(let w=i.length-1;w>=0;w--){const S=i[w];if(S.href===u&&(!d||S.rel==="stylesheet"))return}else if(document.querySelector(`link[href="${u}"]${f}`))return;const y=document.createElement("link");if(y.rel=d?"stylesheet":th,d||(y.as="script"),y.crossOrigin="",y.href=u,a&&y.setAttribute("nonce",a),document.head.appendChild(y),d)return new Promise((w,S)=>{y.addEventListener("load",w),y.addEventListener("error",()=>S(new Error(`Unable to preload CSS for ${u}`)))})}))}function l(i){const s=new Event("vite:preloadError",{cancelable:!0});if(s.payload=i,window.dispatchEvent(s),!s.defaultPrevented)throw i}return o.then(i=>{for(const s of i||[])s.status==="rejected"&&l(s.reason);return t().catch(l)})};function rh(){const e=new Map,t=new Map,n=(i,s)=>{const a=e.get(i);if(a)for(const u of[...a])try{u(s)}catch(d){console.warn(`[PluginBus] handler error for event "${i}"`,d)}},r=(i,s)=>{let a=e.get(i);return a||(a=new Set,e.set(i,a)),a.add(s),()=>{a==null||a.delete(s)}},o=(i,s)=>{const a=u=>{s(u),l(i,a)};return r(i,a)},l=(i,s)=>{var a;if(!s){e.delete(i);return}(a=e.get(i))==null||a.delete(s)};return{emit:n,on:r,once:o,off:l,getData:i=>t.get(i),setData:(i,s)=>{const a=t.get(i);t.set(i,s),a!==s&&n(i,s)},deleteData:i=>{const s=t.has(i);t.delete(i),s&&n(i,void 0)},hasData:i=>t.has(i),getAll:()=>{const i={};return t.forEach((s,a)=>{i[a]=s}),i},clear:()=>{e.clear(),t.clear()}}}function Gf(e){const t=new Map(e.map(s=>[s.name,s])),n=[];for(const s of e)for(const a of s.dependencies??[])t.has(a)||n.push(`${s.name} -> ${a}`);const r=[],o=new Set,l=[...e],i=s=>(s.dependencies??[]).every(a=>o.has(a)||!t.has(a));for(;l.length>0;){const s=l.filter(i);if(s.length===0)throw new Error(`[vane/plugin-core] 插件循环依赖: ${l.map(u=>u.name).join(" <-> ")}`);let a=s[0];for(const u of s)(u.priority??0)>(a.priority??0)&&(a=u);r.push(a),o.add(a.name),l.splice(l.indexOf(a),1)}return n.length>0&&console.warn(`[vane/plugin-core] 以下插件依赖未注册，将被忽略:
  ${n.join(`
  `)}`),r}async function oh(e,t={}){const{timeout:n=3e3,name:r="anonymous",hook:o="unknown"}=t;if(!n||n<=0)return await e();let l;const i=new Promise((s,a)=>{l=setTimeout(()=>{a(new Error(`[vane/plugin-core] 插件 ${r} 的钩子 ${o} 超时(${n}ms)`))},n)});try{return await Promise.race([Promise.resolve().then(e),i])}finally{l&&clearTimeout(l)}}const lh=new Set(["onMount","onUnmount","onPropsChange","onError"]);function ih(e={}){const t=e.logger??console,n=e.sandbox??!0,r=e.timeout??3e3,o=[],l=[],i=new Map,s=()=>Gf([...i.values()].filter(u=>u.enabled!==!1)),a=u=>{i.set(u.name,{...u,enabled:u.enabled??!0}),u.init&&Promise.resolve(u.init()).catch(d=>{t.warn(`[PluginManager] init failed for ${u.name}`,d)})};return{register:a,registerAll:u=>{for(const d of u)a(d)},unregister:u=>{const d=i.get(u);d&&(d.destroy&&Promise.resolve(d.destroy()).catch(f=>{t.warn(`[PluginManager] destroy failed for ${d.name}`,f)}),i.delete(u))},getPlugin:u=>i.get(u),getAllPlugins:()=>[...i.values()],getEnabledPlugins:()=>[...i.values()].filter(u=>u.enabled!==!1),getExecutionOrder:s,enable:u=>{const d=i.get(u);d&&(d.enabled=!0)},disable:u=>{const d=i.get(u);d&&(d.enabled=!1)},has:u=>i.has(u),executeHook:async(u,d,...f)=>{var g,y;for(const w of s()){const S=(g=w.hooks)==null?void 0:g[u];if(typeof S!="function")continue;const P=w.sandbox??n,m=w.timeout??r;let p;try{p=P?await oh(()=>S(d,...f),{timeout:m,name:w.name,hook:String(u)}):await S(d,...f)}catch(h){if(o.push({plugin:w.name,hook:String(u),error:h}),t.warn(`[PluginManager] hook ${String(u)} failed in ${w.name}`,h),(y=e.onError)==null||y.call(e,w.name,String(u),h),u==="onError")break;continue}if(lh.has(String(u))&&typeof p=="function"){l.push(p);continue}if(p===!1)return!1;if(p!==void 0&&p!==!0)return p}},clear:()=>{const u=l.splice(0);for(const d of u.reverse())try{d()}catch(f){t.warn("[PluginManager] cleanup failed",f)}for(const d of i.values())d.destroy&&Promise.resolve(d.destroy()).catch(f=>{t.warn(`[PluginManager] destroy failed for ${d.name}`,f)});i.clear()},getErrors:()=>[...o]}}var ah=Object.defineProperty,sh=(e,t,n)=>t in e?ah(e,t,{enumerable:!0,configurable:!0,writable:!0,value:n}):e[t]=n,uh=(e,t,n)=>sh(e,t+"",n);class ka extends Pn.Component{constructor(){super(...arguments),uh(this,"state",{error:null})}static getDerivedStateFromError(t){return{error:t}}componentDidCatch(t,n){var r,o;console.warn("[vane/plugin-core] 插件渲染错误已被隔离",t,n),(o=(r=this.props).onError)==null||o.call(r,t,n)}render(){const{error:t}=this.state;return t?this.props.fallback?this.props.fallback(t):null:this.props.children}}let Qr=null;function ch(e=!1){if(Qr&&!e)return Qr;const t=typeof window<"u"?window.innerWidth:1024,n=typeof window<"u"?window.innerHeight:768,r=typeof window<"u"&&window.devicePixelRatio||1,o=typeof navigator<"u"&&navigator.userAgent||"",l=/iPad|Tablet/i.test(o),i=/Mobile|Android|iPhone/i.test(o),s=typeof window<"u"&&("ontouchstart"in window||(navigator.maxTouchPoints??0)>0);return Qr={type:l?"tablet":i?"mobile":"desktop",os:o,browser:o,devicePixelRatio:r,viewportWidth:t,viewportHeight:n,isTouchDevice:s,isRetina:r>=2},Qr}function su(e,t){if(Object.is(e,t))return!0;if(typeof e!="object"||typeof t!="object"||e===null||t===null)return!1;const n=Object.keys(e),r=Object.keys(t);return n.length!==r.length?!1:n.every(o=>Object.is(e[o],t[o]))}function fh(e){const{plugins:t,props:n,data:r,initialState:o,containerRef:l,enableDebug:i=!1,managerOptions:s,extendContext:a}=e,u=v.useRef(null),d=l??u,f=v.useRef(null);f.current||(f.current=ih(s));const g=f.current,y=v.useRef(null);y.current||(y.current=rh());const w=y.current,S=v.useRef(new Map),[P,m]=v.useState(o??{}),[,p]=v.useState(0),h=v.useCallback(()=>p(j=>j+1),[]),x=v.useMemo(()=>ch(),[]),b=v.useRef(t),E=b.current;(E.length!==t.length||t.some((j,L)=>j!==E[L]))&&(b.current=t);const T=b.current,R=T.map(j=>j.name).join("|");v.useLayoutEffect(()=>{g.clear(),g.registerAll(T),i&&console.debug("[vane/plugin-core] plugins registered:",R)},[T]),v.useLayoutEffect(()=>()=>{g.executeHook("onUnmount",M.current),g.clear()},[g]);const $=v.useMemo(()=>Gf(T),[T]),M=v.useRef(null),ce=v.useRef(n);su(ce.current,n)||(ce.current=n);const ot=ce.current,Qe=v.useRef(r);su(Qe.current,r)||(Qe.current=r);const Tn=Qe.current,Rn=v.useMemo(()=>{const j={props:ot,data:Tn,bus:w,refs:{container:d,getContainer:()=>d.current},state:P,setState:L=>m(B=>({...B,...L})),shared:S.current,deviceInfo:x,forceUpdate:h,getSize:()=>{const L=d.current;return L?{width:L.offsetWidth,height:L.offsetHeight}:{width:0,height:0}},logger:console};return a?a(j):j},[ot,Tn,P,x,w,a]);M.current=Rn;const jn=v.useCallback(j=>{var B,U;let L=j;for(const De of $){const Se=(B=De.hooks)==null?void 0:B.transformProps;if(typeof Se=="function")try{L=Se(L)}catch(Tt){(((U=M.current)==null?void 0:U.logger)??console).warn(`[plugin-core] ${De.name}.transformProps 执行失败，已跳过`,Tt)}}return L},[$]),Ln=v.useCallback(j=>{var B,U;let L=j;for(const De of $){const Se=(B=De.hooks)==null?void 0:B.transformData;if(typeof Se=="function")try{L=Se(M.current,L)}catch(Tt){(((U=M.current)==null?void 0:U.logger)??console).warn(`[plugin-core] ${De.name}.transformData 执行失败，已跳过`,Tt)}}return L},[$]),C=v.useCallback((j,...L)=>g.executeHook(j,M.current,...L),[g]);return{manager:g,bus:w,context:Rn,state:P,setState:Rn.setState,execute:C,transformProps:jn,transformData:Ln,orderedPlugins:$}}v.createContext(null);function Gr(e,t,n){const{hook:r,position:o="after"}=n;return e.filter(l=>l.enabled!==!1).filter(l=>{var i;return typeof((i=l.hooks)==null?void 0:i[r])=="function"}).filter(l=>{var s;const i=(s=l.config)==null?void 0:s.slotPosition;return o==="before"?i==="before":o==="footer"?i===void 0||i==="after"||i==="footer":i===void 0||i==="after"}).sort((l,i)=>{var s,a;return(((s=l.config)==null?void 0:s.order)??0)-(((a=i.config)==null?void 0:a.order)??0)||(i.priority??0)-(l.priority??0)}).map(l=>{try{const i=l.hooks[r](t);return i==null?null:c.jsx(ka,{children:i},`vane-slot-${l.name}`)}catch(i){return console.warn(`[vane/plugin-core] 插件 ${l.name} 的 ${r} 渲染失败`,i),null}})}function dh(e,t,n){return c.jsxs(c.Fragment,{children:[Gr(e,t,{hook:"renderHeader",position:"before"}),n,Gr(e,t,{hook:"renderOverlay"}),Gr(e,t,{hook:"renderHeader",position:"after"}),Gr(e,t,{hook:"renderFooter",position:"footer"})]})}const ph=["renderBannerArea","renderBioArea","renderStatRow","renderTabBar","renderBadgeArea","renderFollowArea","renderContentArea"],ba=v.createContext(null);function gh(e){return e.sort((t,n)=>{var r,o;return(((r=t.config)==null?void 0:r.order)??0)-(((o=n.config)==null?void 0:o.order)??0)||(n.priority??0)-(t.priority??0)})}function mh(e){const t={};for(const n of ph)t[n]=gh(e.filter(r=>r.enabled!==!1&&typeof r.hooks[n]=="function"));return t}function hh({orderedPlugins:e,context:t,children:n}){const r=v.useMemo(()=>mh(e),[e]),o=v.useMemo(()=>({orderedPlugins:e,context:t,slots:r}),[e,t,r]);return c.jsx(ba.Provider,{value:o,children:n})}function vh(e,t,n){return e.reduce((r,o)=>{try{const l=o.hooks[n](t);return l==null||r.push(c.jsx(ka,{children:l},`profile-slot-${o.name}`)),r}catch(l){return console.warn(`[vane-profile] 插件 ${o.name} 的 ${n} 渲染失败`,l),r}},[])}function jt(e){const t=v.useContext(ba),n=t?t.slots[e]:null,r=t?t.context:null;return v.useMemo(()=>n&&r?vh(n,r,e):[],[n,r,e])}function Cr(){const e=v.useContext(ba);return(e==null?void 0:e.context)??null}const Z=v.forwardRef(function(t,n){const{children:r,containerClassName:o,containerStyle:l,containerRefExternal:i}=t,s=v.useRef(null),a=i||s,[,u]=v.useState(0),d=v.useCallback(()=>u(x=>x+1),[]),f=jt("renderBannerArea"),g=jt("renderBioArea"),y=jt("renderStatRow"),w=jt("renderTabBar"),S=jt("renderBadgeArea"),P=jt("renderFollowArea"),m=jt("renderContentArea"),p=Cr(),h=(p==null?void 0:p.activeTab)??null;return v.useImperativeHandle(n,()=>({getContainer:()=>a.current,forceUpdate:d,getSize:()=>{const x=a.current;return x?{width:x.offsetWidth,height:x.offsetHeight}:{width:0,height:0}},getActiveTab:()=>h}),[d,h]),c.jsxs("div",{ref:a,className:`vp-profile ${o||""}`,style:{position:"relative",boxSizing:"border-box",background:"#fff",color:"#1f2328",...l},children:[c.jsxs("div",{className:"vp-banner-area",style:{position:"relative"},children:[f,S.length>0&&c.jsx("div",{className:"vp-badge-area",style:{position:"absolute",top:8,right:8,display:"flex",alignItems:"center",gap:6},children:S})]}),g.length>0&&c.jsx("div",{className:"vp-bio-area",style:{display:"flex",flexDirection:"column",gap:10,padding:"12px 16px 0"},children:g}),(y.length>0||P.length>0)&&c.jsxs("div",{className:"vp-meta-area",style:{display:"flex",alignItems:"center",justifyContent:"space-between",gap:12,padding:"12px 16px"},children:[c.jsx("div",{className:"vp-stat-row",children:y}),c.jsx("div",{className:"vp-follow-area",style:{display:"flex",alignItems:"center",gap:8},children:P})]}),w.length>0&&c.jsx("div",{className:"vp-tab-bar",style:{padding:"0 16px"},children:w}),c.jsxs("div",{className:"vp-content-area",style:{padding:"16px"},children:[m,r]})]})});Z.displayName="ProfileCore";function ee(e,t){const n=Array.isArray(t)?{plugins:t}:t,{plugins:r,enableDebug:o=!1}=n,l=v.forwardRef((i,s)=>{const a=v.useRef(null),u=i.activeTab!==void 0,d=v.useCallback(b=>{var R;const E=u?i.activeTab??null:((R=b.state)==null?void 0:R.activeTab)??i.defaultActiveTab??null;return{...b,activeTab:E,setActiveTab:$=>{var M;(M=i.onActiveTabChange)==null||M.call(i,$,E),u||b.setState({activeTab:$})},stats:i.stats??[],followState:i.followState??"none",verified:i.verified??!1,badgeType:i.badgeType??"personal",banner:i.banner??null}},[u,i.activeTab,i.defaultActiveTab,i.onActiveTabChange,i.stats,i.followState,i.verified,i.badgeType,i.banner]),f=fh({plugins:r,props:i,data:i.data,containerRef:a,extendContext:d,enableDebug:o}),g=f.context,y=v.useMemo(()=>i.data===void 0?void 0:f.transformData(i.data),[i.data,f.transformData]),w=v.useMemo(()=>({...g,data:y}),[g,y]),S=v.useCallback((b,...E)=>f.execute(b,...E),[f.manager]),P=f.transformProps(i);v.useEffect(()=>{S("onMount")},[S]);const m=v.useRef(i);v.useEffect(()=>{const b=m.current;b!==i&&(m.current=i,S("onPropsChange",b,i))},[i,S]);const p=w.activeTab,h=v.useRef(p);v.useEffect(()=>{if(h.current!==p){const b=h.current;h.current=p,S("onTabChange",p,b)}},[p,S]);const x={...P,containerRefExternal:a,debug:P.debug??o,onMount:()=>{var b;(b=P.onMount)==null||b.call(P)},onUnmount:()=>{var b;(b=P.onUnmount)==null||b.call(P)},children:c.jsx(ka,{children:dh(f.orderedPlugins,w,P.children)})};return c.jsx(hh,{orderedPlugins:f.orderedPlugins,context:w,children:c.jsx(e,{ref:s,...x})})});return l.displayName="WithPlugins(ProfileCore)",l}const yh=["http:","https:","mailto:","tel:"],wh=["http:","https:"];function Kf(e){return e.startsWith("//")?!1:e.startsWith("/")||e.startsWith("#")||e.startsWith("?")}function Yf(e){try{return new URL(e)}catch{return null}}function er(e){if(typeof e!="string")return;const t=e.trim();if(!t)return;if(Kf(t))return t;const n=Yf(t);if(!n)return;const r=n.protocol.toLowerCase();if(yh.includes(r)&&!(r==="mailto:"&&!/^mailto:([A-Za-z0-9.!#$%&'*+/=?^_`{|}~-]+@[A-Za-z0-9-]+(?:\.[A-Za-z0-9-]+)+)$/.test(t))&&!(r==="tel:"&&!/^tel:\+?[0-9()\-\s.]{3,}$/.test(t)))return t}function Xf(e){if(typeof e!="string")return;const t=e.trim();if(!t)return;if(Kf(t))return t;const n=Yf(t);if(n)return wh.includes(n.protocol.toLowerCase())?t:void 0}function Zf(e){const t=Xf(e);if(!t)return;const n=o=>`%${o.charCodeAt(0).toString(16).toUpperCase().padStart(2,"0")}`;return`url("${encodeURI(t).replace(/["'()\\\s]/g,n)}")`}function Sh({size:e}){const t=Math.round(e*.5);return c.jsxs("svg",{width:t,height:t,viewBox:"0 0 24 24","aria-hidden":"true",children:[c.jsx("circle",{cx:"12",cy:"7.5",r:"4.2",fill:"currentColor"}),c.jsx("path",{d:"M4.5 21c0-4.2 3.4-7 7.5-7s7.5 2.8 7.5 7",fill:"none",stroke:"currentColor",strokeWidth:"2.4",strokeLinecap:"round"})]})}function xh({src:e,size:t,round:n,alt:r,fallback:o}){const[l,i]=v.useState(!1),s={position:"absolute",left:16,bottom:-t/2,width:t,height:t,borderRadius:n?"50%":8,border:"3px solid #fff",boxShadow:"0 2px 8px rgba(0,0,0,0.2)",objectFit:"cover"};return!e||l?c.jsx("div",{className:"vp-avatar-fallback",role:"img","aria-label":r,style:{...s,display:"flex",alignItems:"center",justifyContent:"center",background:"#e9ecef",color:"#6b6b6b",fontSize:Math.round(t/3),lineHeight:1},children:o??c.jsx(Sh,{size:t})}):c.jsx("img",{className:"vp-avatar",src:e,alt:r,onError:()=>i(!0),style:s})}function Ph(e={}){const{cover:t,gradient:n=["#6a11cb","#1a5fd0"],avatar:r,avatarAlt:o="头像",avatarFallback:l,avatarSize:i=64,avatarRound:s=!0,height:a=160,overlay:u}=e,d=Zf(t),f=Xf(r),g=d?`${d} center/cover no-repeat`:`linear-gradient(135deg, ${n[0]}, ${n[1]})`;return{name:"BannerSlot",version:"0.1.0",description:"头图区：封面图 / 渐变背景 + 头像浮层 + 昵称标语叠加。",priority:10,enabled:!0,hooks:{renderBannerArea:y=>c.jsxs("div",{className:"vp-banner",style:{position:"relative",height:a,background:g,backgroundSize:"cover",marginBottom:f?i/2:0},children:[r!=null&&r.trim()?c.jsx(xh,{src:f,size:i,round:s,alt:o,fallback:l},f??"fallback"):null,(u??y.banner)&&c.jsx("div",{className:"vp-banner-overlay",style:{position:"absolute",left:r?16+i+12:16,bottom:16,color:"#fff",textShadow:"0 1px 4px rgba(0,0,0,0.5)"},children:u??y.banner})]})}}}const kh="BannerSlot",bh="头图区：封面图或渐变背景打底，左下角浮出头像（与数据行区重叠），并可叠加昵称 / 标语文案。读取 props.banner 作为默认叠加内容。",Ch="0.1.0",_h=["ui","banner","头图"],Eh=[{name:"cover",type:"string",default:'""',description:"封面图 URL；与 gradient 至少其一"},{name:"gradient",type:"[string, string]",default:'["#6a11cb", "#2575fc"]',description:"渐变起止色，无 cover 时作背景"},{name:"avatar",type:"string",default:'""',description:"头像 URL，浮于头图左下"},{name:"avatarAlt",type:"string",default:"头像",description:"头像无障碍描述"},{name:"avatarFallback",type:"ReactNode",default:"人形占位",description:"头像加载失败 / 缺失时的兜底内容"},{name:"avatarSize",type:"number",default:"64",description:"头像直径（px）"},{name:"avatarRound",type:"boolean",default:"true",description:"头像是否圆形"},{name:"height",type:"number",default:"160",description:"头图区高度（px）"},{name:"overlay",type:"ReactNode",default:"context.banner",description:"叠加文案，缺省用 props.banner"}],Th=`// 头图 + 头像 + 昵称标语。
const Profile = withPlugins(ProfileCore, [
  createBannerSlotPlugin({
    cover: user.cover,
    avatar: user.avatar,
    overlay: <strong>{user.name}</strong>,
  }),
]);

<Profile banner={<span>@{user.handle}</span>} />;`,Rh=["封面图 / 渐变背景二选一","头像浮层与数据行区重叠（经典主页观感）","叠加文案支持自定义或复用 props.banner"],jh=["社交平台个人主页头部","创作者 / 品牌主页","需要头像 + 封面组合的任意档案页"],Lh=["头像以负 bottom 浮出，父容器不要设 overflow:hidden 否则会被裁切。"],Jf={name:kh,description:bh,since:Ch,tags:_h,config:Eh,example:Th,features:Rh,useCases:jh,notes:Lh},Qt=Object.assign(Ph,{meta:Jf});function Mh(e={}){const{direction:t="row",divider:n=!0,onStatClick:r}=e;return{name:"StatRow",version:"0.1.0",description:"数据行：关注 / 粉丝 / 获赞 / 作品等指标，横排展示。",priority:10,enabled:!0,hooks:{renderStatRow:o=>{const l=e.items??o.stats??[];return l.length===0?null:c.jsx("div",{className:"vp-stat-row-inner",style:{display:"flex",flexDirection:t==="column"?"column":"row",gap:16,flex:1},children:l.map((i,s)=>{const a=c.jsxs(c.Fragment,{children:[c.jsx("span",{style:{fontSize:18,fontWeight:700},children:i.value}),c.jsx("span",{style:{fontSize:12,color:"#6b6b6b",borderRight:n&&t==="row"&&s<l.length-1?"1px solid #eee":"none",paddingRight:n&&t==="row"&&s<l.length-1?16:0},children:i.label})]}),u={display:"flex",flexDirection:"column",alignItems:t==="column"?"flex-start":"center",border:"none",background:"transparent",cursor:r?"pointer":"default",padding:0,lineHeight:1.2};return r?c.jsx("button",{type:"button",className:"vp-stat-item",onClick:()=>r(i,s),style:u,children:a},i.key??`stat-${s}`):c.jsx("span",{className:"vp-stat-item",style:u,children:a},i.key??`stat-${s}`)})})}}}}const Nh="StatRow",Ah="数据行：把关注 / 粉丝 / 获赞 / 作品等指标横排展示，每项显示「值 + 标签」。数据源为 config.items 或 props.stats。",$h="0.1.0",Bh=["ui","stats","数据"],zh=[{name:"items",type:"StatItem[]",default:"context.stats",description:"显式指标；缺省读 props.stats"},{name:"direction",type:'"row" | "column"',default:"row",description:"排布方向"},{name:"divider",type:"boolean",default:"true",description:"row 模式下项间分隔线"},{name:"onStatClick",type:"function",default:"-",description:"点击回调，可在此 setActiveTab 联动页签"}],Oh=`// 关注 / 粉丝 / 获赞 / 作品。
const Profile = withPlugins(ProfileCore, [
  createStatRowPlugin({
    items: [
      { value: 128, label: "关注" },
      { value: 1.2, label: "粉丝" },
      { value: 48, label: "获赞" },
      { value: 9, label: "作品" },
    ],
  }),
]);`,Ih=["支持 config.items 覆盖 props.stats","row / column 两种排布","可选分隔线","点击回调可联动页签"],Dh=["个人主页指标展示","创作者数据概览","任意需要「值 + 标签」成组展示的场景"],Fh=["divider 仅在 direction=row 时生效。"],qf={name:Nh,description:Ah,since:$h,tags:Bh,config:zh,example:Oh,features:Ih,useCases:Dh,notes:Fh},_r=Object.assign(Mh,{meta:qf});function Uh(e){const{tabs:t,variant:n="underline",sticky:r=!1,scrollTopOnChange:o=!0,onChange:l}=e,i=Array.isArray(t)?t.filter(a=>!!a&&!!a.id):[];if(i.length===0)return{name:"TabSync",version:"0.1.0",description:"页签系统：渲染页签栏 + 切换时联动内容区重渲染（消费方子节点经 useProfileContext 订阅 activeTab）。",priority:20,enabled:!1,hooks:{}};const s=a=>n==="segmented"?{flex:1,padding:"6px 0",borderRadius:6,background:a?"#fff":"transparent",color:a?"#1a5fd0":"#555",fontWeight:a?700:400}:n==="pill"?{padding:"4px 14px",borderRadius:999,background:a?"#1a5fd0":"transparent",color:a?"#fff":"#555",border:a?"none":"1px solid #ddd"}:{padding:"8px 12px",borderBottom:a?"2px solid #1a5fd0":"2px solid transparent",color:a?"#1a5fd0":"#555",fontWeight:a?700:400};return{name:"TabSync",version:"0.1.0",description:"页签系统：渲染页签栏 + 切换时联动内容区重渲染（消费方子节点经 useProfileContext 订阅 activeTab）。",priority:20,enabled:!0,hooks:{renderTabBar:a=>{const u=a.activeTab;return c.jsx("div",{className:"vp-tab-bar-inner",role:"tablist",style:{display:"flex",gap:n==="segmented"?4:8,position:r?"sticky":"static",top:r?0:void 0,background:r?"#fff":"transparent",zIndex:r?1:void 0,...n==="segmented"?{background:"#eee",borderRadius:8,padding:4}:{}},children:i.map(d=>{const f=d.id===u;return c.jsxs("button",{type:"button",role:"tab","aria-selected":f,onClick:()=>a.setActiveTab(d.id),style:{display:"inline-flex",alignItems:"center",gap:4,border:"none",background:"transparent",cursor:"pointer",fontSize:14,...s(f)},children:[d.icon,d.label]},d.id)})})},onTabChange:(a,u,d)=>{var f;if(o){const g=(f=a.refs.container)==null?void 0:f.current;g&&(g.scrollTop=0)}l==null||l(u,d)}}}}const Wh="TabSync",Vh="页签系统：渲染页签栏（underline / pill / segmented 三种样式），点击切换 activeTab，并联动内容区重渲染。切换时默认把容器滚到顶部。",Hh="0.1.0",Qh=["ui","tab","页签"],Gh=[{name:"tabs",type:"TabItem[]",default:"-",description:"页签定义 { id, label, icon? }，至少一项"},{name:"variant",type:'"underline" | "pill" | "segmented"',default:"underline",description:"样式变体"},{name:"sticky",type:"boolean",default:"false",description:"是否吸顶"},{name:"scrollTopOnChange",type:"boolean",default:"true",description:"切换时容器滚到顶部"},{name:"onChange",type:"function",default:"-",description:"切换回调 (id, oldId)"}],Kh=`// 作品 / 动态 / 关于 三个页签。
const Profile = withPlugins(ProfileCore, [
  createTabSyncPlugin({
    tabs: [
      { id: "works", label: "作品" },
      { id: "feeds", label: "动态" },
      { id: "about", label: "关于" },
    ],
  }),
]);

<Profile>
  <ProfileContent /> // 内部 useProfileContext().activeTab 决定渲染哪段
</Profile>;`,Yh=["三种样式变体","点击切换 activeTab","内容区经 useProfileContext 自动联动","可选吸顶 + 切换滚动复位"],Xh=["多内容区主页","作品 / 动态 / 收藏 切换","需要页签驱动的任意档案页"],Zh=["内容区必须是消费 useProfileContext().activeTab 的子组件；TabSync 本身不渲染内容。"],ed={name:Wh,description:Vh,since:Hh,tags:Qh,config:Gh,example:Kh,features:Yh,useCases:Xh,notes:Zh},Er=Object.assign(Uh,{meta:ed});function Jh({type:e}){const t=e==="institution"?"#ff8f00":"#1da1f2";return c.jsxs("svg",{width:"16",height:"16",viewBox:"0 0 24 24","aria-hidden":"true",children:[c.jsx("circle",{cx:"12",cy:"12",r:"11",fill:t}),c.jsx("path",{d:"M7 12.5l3 3 7-7",fill:"none",stroke:"#fff",strokeWidth:"2.4",strokeLinecap:"round",strokeLinejoin:"round"})]})}function qh(e={}){const{showLabel:t=!0}=e;return{name:"VerifyBadge",version:"0.1.0",description:"认证徽标：个人 / 机构认证对勾，浮于头图右上角。",priority:30,enabled:!0,hooks:{renderBadgeArea:n=>{const r=e.verified??n.verified,o=e.type??n.badgeType;if(!r)return null;const l=e.label??(o==="institution"?"机构认证":"认证");return c.jsxs("span",{className:"vp-badge",style:{display:"inline-flex",alignItems:"center",gap:4,padding:"2px 8px",borderRadius:999,background:"rgba(255,255,255,0.92)",color:"#333",fontSize:12},children:[c.jsx(Jh,{type:o}),t&&l]})}}}}const ev="VerifyBadge",tv="认证徽标：个人 / 机构两种认证对勾（内联 SVG，无外部资源），浮于头图右上角。verified 为 false 时不渲染。",nv="0.1.0",rv=["ui","badge","认证"],ov=[{name:"verified",type:"boolean",default:"props.verified",description:"强制认证态，覆盖 props.verified"},{name:"type",type:'"personal" | "institution"',default:"props.badgeType",description:"认证类型，改变徽标颜色与默认文字"},{name:"label",type:"ReactNode",default:"按 type 给「认证」/「机构认证」",description:"徽标旁文字"},{name:"showLabel",type:"boolean",default:"true",description:"是否展示文字"}],lv=`// 个人认证徽标。
const Profile = withPlugins(ProfileCore, [
  createVerifyBadgePlugin({ type: "personal" }),
]);

<Profile verified badgeType="personal" />;`,iv=["个人 / 机构两种配色","内联 SVG，零外部依赖","浮于头图右上角","verified=false 自动隐藏"],av=["认证用户主页标识","品牌 / 机构官方账号","需要信任标识的任意档案"],sv=["默认读取 props.verified / props.badgeType，也可经 config 强制覆盖。"],td={name:ev,description:tv,since:nv,tags:rv,config:ov,example:lv,features:iv,useCases:av,notes:sv},Yo=Object.assign(qh,{meta:td}),uv={none:"关注",following:"已关注",mutual:"互相关注"},cv="操作失败，请重试";function fv({initial:e,labels:t,size:n,onToggle:r}){const[o,l]=v.useState(e),[i,s]=v.useState(!1),[a,u]=v.useState(null),d=o!=="none",f=n==="sm"?"4px 12px":"8px 20px",g=n==="sm"?12:14,y=async()=>{if(i)return;const w=o,S=o==="none"?"following":"none";u(null),l(S),s(!0);try{const P=await r(S);if(P&&typeof P=="object"&&P.error)throw new Error(P.error)}catch(P){l(w),u(P instanceof Error&&P.message?P.message:cv)}finally{s(!1)}};return c.jsxs(c.Fragment,{children:[c.jsx("button",{type:"button",onClick:y,disabled:i,"aria-busy":i,style:{padding:f,fontSize:g,borderRadius:999,border:d?"1px solid #ddd":"none",background:d?"#fff":"#1a5fd0",color:d?"#555":"#fff",cursor:i?"progress":"pointer",opacity:i?.7:1},children:t[o]}),a&&c.jsx("span",{className:"vp-follow-error",role:"alert",style:{fontSize:12,color:"#c62828",lineHeight:1.4},children:a})]})}function dv(e={}){const{labels:t,size:n="md",onFollow:r,onMutual:o}=e,l={...uv,...t??{}};return{name:"FollowEcho",version:"0.1.0",description:"关注回显：关注 / 已关注 / 互相关注三态按钮，受控于 props.followState。",priority:10,enabled:!0,hooks:{renderFollowArea:i=>{const s=e.state??i.followState;return c.jsx(fv,{initial:s,labels:l,size:n,onToggle:a=>r==null?void 0:r(a)},s)},onPropsChange:(i,s,a)=>{const u=s==null?void 0:s.followState,d=a==null?void 0:a.followState;u!=="mutual"&&d==="mutual"&&(o==null||o(d))}}}}const pv="FollowEcho",gv="关注回显：关注 / 已关注 / 互相关注三态按钮，受控于 props.followState。点击仅作乐观 UI，真相由消费方回写；关系变为 mutual 时可触发 onMutual。",mv="0.1.0",hv=["ui","follow","关注"],vv=[{name:"state",type:'"none" | "following" | "mutual"',default:"props.followState",description:"强制关注态，覆盖 props.followState"},{name:"labels",type:"Partial<Record<FollowState, ReactNode>>",default:"{ none: 关注, following: 已关注, mutual: 互相关注 }",description:"三态文案覆盖"},{name:"size",type:'"sm" | "md"',default:"md",description:"按钮尺寸"},{name:"onFollow",type:"function => void | Promise<void | { error }>",default:"-",description:"点击切换后的回调；可返回 Promise，pending 时禁用按钮，失败（reject 或 { error }）时回滚乐观态并提示错误"},{name:"onMutual",type:"function",default:"-",description:"关系变为 mutual 时的回调"}],yv=`// 关注按钮，受控于服务端返回的 followState。
const Profile = withPlugins(ProfileCore, [
  createFollowEchoPlugin({
    onFollow: (next) => api.toggleFollow(uid, next),
  }),
]);

<Profile followState={serverState} />;`,wv=["三态受控按钮","点击乐观切换，真相回写 props","关系变为 mutual 触发 onMutual","点击态 / 已关注态样式区分"],Sv=["个人主页关注按钮","用户卡片关注态","需要关注关系回显的任意档案"],xv=["按钮为受控组件，关注真相请由消费方维护并回写 props.followState。"],nd={name:pv,description:gv,since:mv,tags:hv,config:vv,example:yv,features:wv,useCases:Sv,notes:xv},En=Object.assign(dv,{meta:nd});function Pv(e={}){const{name:t,bio:n,location:r,joinDate:o,subtitle:l}=e,i=[r,o].filter(Boolean).join(" · ");return{name:"BioSlot",version:"0.1.0",description:"简介区：昵称 + 签名 + 所在地 / 加入时间。",priority:12,enabled:!0,hooks:{renderBioArea:s=>!t&&!l&&!n&&!i?null:c.jsxs("div",{className:"vp-bio",children:[t&&c.jsx("div",{className:"vp-bio-name",children:t}),l&&c.jsx("div",{className:"vp-bio-sub",children:l}),n&&c.jsx("div",{className:"vp-bio-text",children:n}),i&&c.jsx("div",{className:"vp-bio-meta",children:i})]})}}}const kv="BioSlot",bv="简介区：昵称 + 签名 + 所在地 / 加入时间。",Cv="0.1.0",_v=["intro","bio","renderBioArea"],Ev=[{name:"name",type:"ReactNode",default:"-",description:"昵称（头图已用 overlay 显示时留空，避免重复）"},{name:"subtitle",type:"ReactNode",default:"-",description:"副标题 / 职业，显示在昵称下方小字"},{name:"bio",type:"ReactNode",default:"-",description:"个性签名 / 一句话简介"},{name:"location",type:"string",default:"-",description:"所在地"},{name:"joinDate",type:"string",default:"-",description:"加入时间，如「2021 加入」"}],Tv=["走 renderBioArea 领域槽，排在头图与数据行之间","name/subtitle/bio/meta 全部为空时整体不渲染（不占空间）"],Rv=["个人主页的签名档","企业号的一句话简介"],jv=["与 BannerSlot 的 overlay 各自独立：overlay 浮在头图上，本插件在头像下方的简介区"],rd={name:kv,description:bv,since:Cv,tags:_v,config:Ev,features:Tv,useCases:Rv,notes:jv},Ca=Object.assign(Pv,{meta:rd}),Lv={weibo:{glyph:"微",label:"微博"},zhihu:{glyph:"知",label:"知乎"},github:{glyph:"GH",label:"GitHub"},email:{glyph:"@",label:"邮箱"},site:{glyph:"网",label:"官网"},youtube:{glyph:"YT",label:"YouTube"},bilibili:{glyph:"B",label:"B 站"},twitter:{glyph:"X",label:"X"},douyin:{glyph:"抖",label:"抖音"},wechat:{glyph:"微",label:"微信"}};function Mv(e={links:[]}){const{links:t,showLabel:n=!0,align:r="left"}=e;return{name:"SocialLinks",version:"0.1.0",description:"社交外链行：一排可点击的平台入口（微博 / 知乎 / GitHub …）。",priority:12,enabled:!0,hooks:{renderBioArea:o=>t.length?c.jsx("div",{className:"vp-social",style:{display:"flex",flexWrap:"wrap",gap:8,justifyContent:r==="center"?"center":r==="right"?"flex-end":"flex-start"},children:t.map((l,i)=>{const s=Lv[l.platform]??{glyph:"·",label:l.platform},a=l.glyph??s.glyph,u=l.label??s.label,d=er(l.href),f={display:"inline-flex",alignItems:"center",gap:6,padding:"4px 10px",borderRadius:999,border:"1px solid rgba(125,130,140,0.35)",color:"inherit",textDecoration:"none",fontSize:13},g=c.jsxs(c.Fragment,{children:[c.jsx("span",{"aria-hidden":!0,style:{width:18,height:18,borderRadius:"50%",background:"#1a5fd0",color:"#fff",fontSize:10,display:"inline-flex",alignItems:"center",justifyContent:"center",flex:"0 0 auto"},children:a}),n?c.jsx("span",{children:u}):null]});return d?c.jsx("a",{className:"vp-social-item",href:d,target:"_blank",rel:"noreferrer noopener",style:f,children:g},i):c.jsx("span",{className:"vp-social-item",style:{...f,cursor:"default"},children:g},i)})}):null}}}const Nv="SocialLinks",Av="社交外链行：一排可点击的平台入口（微博 / 知乎 / GitHub …）。",$v="0.1.0",Bv=["social","links","renderBioArea"],zv=[{name:"links",type:"SocialLink[]",default:"[]",description:"外链列表，每项含 platform / href / 可选 label / glyph"},{name:"showLabel",type:"boolean",default:"true",description:"是否显示文案（仅图标字时为 false）"},{name:"align",type:"'left' | 'center' | 'right'",default:"'left'",description:"整组对齐方式"}],Ov=["走 renderBioArea 领域槽，与 BioSlot / TagList 同区串联","图标用单/双字占位（无图片资源），链接新窗口打开并带 rel 防钓鱼","常见平台（微博/知乎/GitHub…）有默认文案与图标字"],Iv=["主页底部的社交入口聚合","创作者主页的外链引流"],Dv=["链接一律 target=_blank + rel=noreferrer noopener，避免反向携带来源页信息"],od={name:Nv,description:Av,since:$v,tags:Bv,config:zv,features:Ov,useCases:Iv,notes:Dv},_a=Object.assign(Mv,{meta:od});function Fv(e={tags:[]}){const{tags:t,align:n="left"}=e;return{name:"TagList",version:"0.1.0",description:"兴趣 / 标签行：一排圆角小标签。",priority:12,enabled:!0,hooks:{renderBioArea:r=>t.length?c.jsx("div",{className:"vp-tags",style:{display:"flex",flexWrap:"wrap",gap:6,justifyContent:n==="center"?"center":n==="right"?"flex-end":"flex-start"},children:t.map((o,l)=>c.jsx("span",{className:"vp-tag",style:{padding:"2px 10px",borderRadius:999,fontSize:12,lineHeight:1.6,background:"rgba(125,130,140,0.16)",color:"inherit",border:"1px solid rgba(125,130,140,0.25)"},children:o},l))}):null}}}const Uv="TagList",Wv="兴趣 / 标签行：一排圆角小标签。",Vv="0.1.0",Hv=["tags","interest","renderBioArea"],Qv=[{name:"tags",type:"string[]",default:"[]",description:"标签文本列表"},{name:"align",type:"'left' | 'center' | 'right'",default:"'left'",description:"整组对齐方式"}],Gv=["走 renderBioArea 领域槽，与 BioSlot / SocialLinks 同区串联","tags 为空时整体不渲染"],Kv=["个人主页的兴趣标签墙","创作者主页的内容领域标记"],Yv=["标签样式用半透明底色，跟随容器文字颜色，不引入额外主题变量"],ld={name:Uv,description:Wv,since:Vv,tags:Hv,config:Qv,features:Gv,useCases:Kv,notes:Yv},Ea=Object.assign(Fv,{meta:ld}),uu=["#6a11cb","#1a5fd0","#11998e","#ff7e5f","#fc466b","#3a1c71"];function Xv(e={items:[]}){const{items:t,columns:n=3,gap:r=10,tab:o,title:l,empty:i="暂无作品"}=e;return{name:"WorksGrid",version:"0.1.0",description:"作品网格：随 activeTab 联动的内容区插件。",priority:15,enabled:!0,hooks:{renderContentArea:s=>{if(o&&s.activeTab!==o)return null;const a=c.jsx("div",{className:"vp-works-grid",style:{display:"grid",gridTemplateColumns:`repeat(${n}, 1fr)`,gap:r},children:t.map((u,d)=>{const f=Zf(u.cover),g=f??u.coverColor??uu[d%uu.length];return c.jsxs("figure",{className:"vp-work",style:{margin:0,borderRadius:10,overflow:"hidden",border:"1px solid rgba(125,130,140,0.22)",background:"#fff",color:"#222"},children:[c.jsx("div",{style:{aspectRatio:"1 / 1",background:f?`${f} center/cover no-repeat`:g}}),c.jsxs("figcaption",{style:{padding:"8px 10px"},children:[c.jsx("div",{style:{fontSize:13,fontWeight:600,lineHeight:1.4},children:u.title}),u.meta?c.jsx("div",{style:{fontSize:11,color:"#6b6b6b",marginTop:2},children:u.meta}):null]})]},u.id)})});return t.length===0?c.jsx("div",{className:"vp-works-empty",style:{padding:"24px 0",textAlign:"center",color:"#6b6b6b"},children:i}):l?c.jsxs("div",{className:"vp-works",children:[c.jsx("div",{className:"vp-works-title",style:{fontSize:14,fontWeight:600,marginBottom:10},children:l}),a]}):a}}}}const Zv="WorksGrid",Jv="作品网格：随 activeTab 联动的内容区插件。",qv="0.1.0",ey=["content","grid","works","renderContentArea"],ty=[{name:"items",type:"WorkItem[]",default:"[]",description:"作品列表，每项含 id / title / 可选 cover / coverColor / meta"},{name:"columns",type:"number",default:"3",description:"网格列数"},{name:"gap",type:"number",default:"10",description:"卡片间距（px）"},{name:"tab",type:"string",default:"-",description:"仅在某个页签激活时显示（与 TabSync 联动）；不填则始终显示"},{name:"title",type:"ReactNode",default:"-",description:"网格上方的分组标题"},{name:"empty",type:"ReactNode",default:"暂无作品",description:"空列表占位文案"}],ny=["走 renderContentArea 领域槽，Core 有内容插件时以它替代 children","config.tab 与 context.activeTab 联动：切到对应页签才出网格","封面支持图片 URL 或纯色占位，无图也能离线演示"],ry=["个人主页的作品 / 相册网格","创作者主页的笔记 / 视频墙"],oy=["与 TabSync 文本 children 二选一：装了 WorksGrid 后内容区由它接管"],id={name:Zv,description:Jv,since:qv,tags:ey,config:ty,features:ny,useCases:ry,notes:oy},Ta=Object.assign(Xv,{meta:id}),cu={1:{bg:"#c7a06a",fg:"#fff"},2:{bg:"#9aa7b5",fg:"#fff"},3:{bg:"#e0b34a",fg:"#3a2c00"}};function ly(e={}){const{level:t=1,label:n,showLabel:r=!0}=e,o=cu[t]??cu[1];return{name:"MembershipBadge",version:"0.1.0",description:"会员 / VIP 等级角标：浮于头图右上，与认证徽标同区并排。",priority:30,enabled:!0,hooks:{renderBadgeArea:l=>c.jsxs("span",{className:"vp-membership",title:`VIP ${t}`,style:{display:"inline-flex",alignItems:"center",gap:4,padding:"2px 8px",borderRadius:999,fontSize:12,fontWeight:600,background:o.bg,color:o.fg,lineHeight:1.6},children:[c.jsx("span",{"aria-hidden":!0,style:{fontSize:11},children:"♛"}),r?c.jsx("span",{children:n??`VIP${t}`}):null]})}}}const iy="MembershipBadge",ay="会员 / VIP 等级角标：浮于头图右上，与认证徽标同区并排。",sy="0.1.0",uy=["ui","badge","vip","renderBadgeArea"],cy=[{name:"level",type:"1 | 2 | 3",default:"1",description:"会员等级，决定配色与默认文案"},{name:"label",type:"ReactNode",default:"-",description:"覆盖默认文案；缺省按 level 给 VIP{n}"},{name:"showLabel",type:"boolean",default:"true",description:"是否展示文案（仅图标时为 false）"}],fy=`// 金色 VIP3 角标，浮于头图右上。
const Profile = withPlugins(ProfileCore, [
  createBannerSlotPlugin({ avatar: user.avatar }),
  createMembershipBadgePlugin({ level: 3 }),
]);`,dy=["走 renderBadgeArea 领域槽，与 VerifyBadge / QRShare 同区横向并排","三档配色（VIP1 铜 / VIP2 银 / VIP3 金）","可覆盖文案，支持仅图标模式"],py=["付费会员主页标识","社区等级展示","需要身份分级的任意档案"],gy=["浮于头图右上角；ProfileCore 已将该区设为 flex 行排，多徽标不会错位。"],ad={name:iy,description:ay,since:sy,tags:uy,config:cy,example:fy,features:dy,useCases:py,notes:gy},Ra=Object.assign(ly,{meta:ad});function my(e,t=11){const n=[];let r=0;for(let o=0;o<e.length;o++)r=r*31+e.charCodeAt(o)>>>0;for(let o=0;o<t;o++){const l=[];for(let i=0;i<t;i++)r=r*1103515245+12345>>>0,l.push((r>>16)%100<48);n.push(l)}return n}const hy={idle:"复制链接",ok:"已复制",fail:"复制失败"};function vy({url:e,buttonLabel:t,size:n}){const[r,o]=v.useState(!1),[l,i]=v.useState("idle"),s=v.useRef(null),a=v.useRef(null),u=my(e);v.useEffect(()=>()=>{a.current&&clearTimeout(a.current)},[]),v.useEffect(()=>{if(!r)return;const f=y=>{y.key==="Escape"&&o(!1)},g=y=>{const w=s.current;if(!w)return;const S=y.target;S&&!w.contains(S)&&o(!1)};return document.addEventListener("keydown",f),document.addEventListener("mousedown",g),()=>{document.removeEventListener("keydown",f),document.removeEventListener("mousedown",g)}},[r]);const d=async()=>{var g;let f;try{if(!((g=navigator.clipboard)!=null&&g.writeText))throw new Error("clipboard unavailable");await navigator.clipboard.writeText(e),f="ok"}catch{f="fail"}i(f),a.current&&clearTimeout(a.current),a.current=setTimeout(()=>i("idle"),1500)};return c.jsxs("div",{className:"vp-qrshare",ref:s,style:{position:"relative"},children:[c.jsxs("button",{type:"button",onClick:()=>o(f=>!f),"aria-expanded":r,"aria-haspopup":"dialog",style:{display:"inline-flex",alignItems:"center",gap:4,padding:"2px 10px",borderRadius:999,fontSize:12,border:"1px solid rgba(255,255,255,0.7)",background:"rgba(0,0,0,0.55)",color:"#fff",cursor:"pointer",lineHeight:1.6},children:[c.jsx("span",{"aria-hidden":!0,children:"⤴"}),t]}),r&&c.jsxs("div",{role:"dialog","aria-label":"分享二维码",style:{position:"absolute",top:"calc(100% + 8px)",right:0,width:n+24,padding:12,borderRadius:10,background:"#fff",color:"#222",boxShadow:"0 6px 24px rgba(0,0,0,0.22)",zIndex:5},children:[c.jsx("div",{style:{width:n,height:n,display:"grid",gridTemplateColumns:`repeat(${u.length}, 1fr)`,gap:1,margin:"0 auto 8px"},children:u.flatMap((f,g)=>f.map((y,w)=>c.jsx("span",{style:{background:y?"#222":"#fff"}},`${g}-${w}`)))}),c.jsx("div",{style:{fontSize:11,wordBreak:"break-all",marginBottom:8},children:e}),c.jsx("button",{type:"button",onClick:()=>void d(),"aria-live":"polite",style:{width:"100%",padding:"4px 0",borderRadius:6,border:"none",background:l==="fail"?"#c62828":"#1a5fd0",color:"#fff",fontSize:12,cursor:"pointer"},children:hy[l]})]})]})}function yy(e={}){const{url:t,buttonLabel:n="分享",size:r=96}=e;return{name:"QRShare",version:"0.1.0",description:"主页二维码分享：浮于头图右上的分享按钮，点击展开二维码与复制链接。",priority:30,enabled:!0,hooks:{renderBadgeArea:o=>{var s;const l=(s=o.data)==null?void 0:s.homeUrl,i=er(t??l);return i?c.jsx(vy,{url:i,buttonLabel:n,size:r}):null}}}}const wy="QRShare",Sy="主页二维码分享：浮于头图右上的分享按钮，点击展开二维码与复制链接。",xy="0.1.0",Py=["ui","share","qr","renderBadgeArea"],ky=[{name:"url",type:"string",default:"props.data.homeUrl",description:"要分享的主页地址；缺省读 props.data.homeUrl，都没有则不渲染分享按钮"},{name:"buttonLabel",type:"ReactNode",default:"分享",description:"按钮文案"},{name:"size",type:"number",default:"96",description:"二维码占位区边长（px）"}],by=`// 头图右上分享按钮，点击展开二维码 + 复制链接。
const Profile = withPlugins(ProfileCore, [
  createBannerSlotPlugin({ avatar: user.avatar }),
  createQRSharePlugin({ url: user.homeUrl }),
]);`,Cy=["走 renderBadgeArea 领域槽，与 VerifyBadge / MembershipBadge 同区横向并排","点击展开分享面板（useState 控制）","面板提供「复制链接」（navigator.clipboard）","二维码为装饰性点阵占位，零外部依赖"],_y=["主页分享入口","线下物料扫码引流","需要快速传播主页链接的场景"],Ey=["二维码为视觉占位（确定性点阵，非真实可扫码）；接入真实扫码请替换面板内的点阵为二维码库输出。"],sd={name:wy,description:Sy,since:xy,tags:Py,config:ky,example:by,features:Cy,useCases:_y,notes:Ey},ja=Object.assign(yy,{meta:sd}),fu={online:{color:"#2ecc71",label:"在线"},away:{color:"#f1c40f",label:"离开"},busy:{color:"#e74c3c",label:"忙碌"},offline:{color:"#95a5a6",label:"离线"},live:{color:"#ff4757",label:"直播中"}};function Ty(e={}){const{status:t="online",liveTitle:n,showLabel:r=!0}=e,o=fu[t]??fu.online;return{name:"LiveStatus",version:"0.1.0",description:"在线 / 直播状态指示：圆点 + 文案，直播态高亮。",priority:12,enabled:!0,hooks:{renderBioArea:l=>c.jsxs("div",{className:"vp-livestatus",style:{display:"inline-flex",alignItems:"center",gap:6,fontSize:13,color:"inherit"},children:[c.jsx("span",{"aria-hidden":!0,style:{width:8,height:8,borderRadius:"50%",background:o.color,boxShadow:t==="live"?`0 0 0 3px ${o.color}33`:"none",flex:"0 0 auto"}}),r?c.jsxs("span",{children:[o.label,t==="live"&&n?`：${n}`:""]}):null]})}}}const Ry="LiveStatus",jy="在线 / 直播状态指示：圆点 + 文案，直播态高亮。",Ly="0.1.0",My=["status","live","renderBioArea"],Ny=[{name:"status",type:'"online" | "away" | "busy" | "offline" | "live"',default:"online",description:"状态类型，决定圆点颜色与文案"},{name:"liveTitle",type:"string",default:"-",description:"status=live 时的直播标题"},{name:"showLabel",type:"boolean",default:"true",description:"是否展示文案（仅圆点为 false）"}],Ay=`// 直播中状态，红点高亮。
const Profile = withPlugins(ProfileCore, [
  createLiveStatusPlugin({ status: "live", liveTitle: "前端架构夜聊" }),
]);`,$y=["走 renderBioArea 领域槽，与 BioSlot / SocialLinks / TagList 同区串联","5 种状态（在线/离开/忙碌/离线/直播中）配色","直播态红点带光晕，可附直播标题"],By=["主播 / 达人主页实时状态","客服在线标识","社区用户活跃状态"],zy=["状态为展示态，真实在线与否由消费方按业务维护并回写 config。"],ud={name:Ry,description:jy,since:Ly,tags:My,config:Ny,example:Ay,features:$y,useCases:By,notes:zy},La=Object.assign(Ty,{meta:ud});function Oy(e={}){const{email:t,phone:n,site:r,address:o,showIcon:l=!0}=e,i=[];if(t&&i.push({glyph:"@",text:t,href:er(`mailto:${t}`)}),n&&i.push({glyph:"☎",text:n,href:er(`tel:${n}`)}),r){const s=er(r);i.push({glyph:"网",text:r.replace(/^https?:\/\//,""),href:s,external:!!s})}return o&&i.push({glyph:"📍",text:o}),{name:"ContactCard",version:"0.1.0",description:"联系信息卡：邮箱 / 电话 / 官网 / 地址，安全链接。",priority:12,enabled:!0,hooks:{renderBioArea:s=>i.length?c.jsx("div",{className:"vp-contact",style:{display:"flex",flexWrap:"wrap",gap:"6px 16px",fontSize:13,color:"inherit"},children:i.map((a,u)=>{const d=c.jsxs(c.Fragment,{children:[l&&c.jsx("span",{"aria-hidden":!0,style:{opacity:.7,marginRight:4},children:a.glyph}),c.jsx("span",{children:a.text})]});return a.href?c.jsx("a",{href:a.href,...a.external?{target:"_blank",rel:"noreferrer noopener"}:{},style:{color:"inherit",textDecoration:"none"},children:d},u):c.jsx("span",{children:d},u)})}):null}}}const Iy="ContactCard",Dy="联系信息卡：邮箱 / 电话 / 官网 / 地址，安全链接。",Fy="0.1.0",Uy=["contact","info","renderBioArea"],Wy=[{name:"email",type:"string",default:"-",description:"邮箱，渲染为 mailto: 链接"},{name:"phone",type:"string",default:"-",description:"电话，渲染为 tel: 链接"},{name:"site",type:"string",default:"-",description:"官网，外链带 rel 防钓鱼"},{name:"address",type:"string",default:"-",description:"地址，纯文本不渲染为链接"},{name:"showIcon",type:"boolean",default:"true",description:"是否显示左侧图标字"}],Vy=`// 联系信息卡：邮箱 + 官网。
const Profile = withPlugins(ProfileCore, [
  createContactCardPlugin({ email: "frank@vane.dev", site: "https://vane.dev" }),
]);`,Hy=["走 renderBioArea 领域槽，与 BioSlot / SocialLinks / TagList 同区串联","邮箱走 mailto:、电话走 tel:、官网走 http(s) 外链","外链一律 rel=noreferrer noopener，防反向携带来源页信息","四项全空时整体不渲染"],Qy=["商家 / 机构主页联系入口","创作者商务合作方式","需要公开联系方式的任意档案"],Gy=["地址为纯文本（不渲染为链接），避免误导用户点击。"],cd={name:Iy,description:Dy,since:Fy,tags:Uy,config:Wy,example:Vy,features:Hy,useCases:Qy,notes:Gy},Ma=Object.assign(Oy,{meta:cd});function Ky(e={}){const{lastActive:t,postsThisMonth:n,totalViews:r,showIcon:o=!0}=e,l=[];return t&&l.push(`最近活跃 ${t}`),typeof n=="number"&&l.push(`本月发布 ${n} 篇`),r&&l.push(`总阅读 ${r}`),{name:"ActivitySummary",version:"0.1.0",description:"活跃度小结：最近活跃 / 本月发布 / 总阅读，一行小字。",priority:12,enabled:!0,hooks:{renderBioArea:i=>l.length?c.jsxs("div",{className:"vp-activity",style:{display:"inline-flex",alignItems:"center",gap:6,fontSize:12,opacity:.72,color:"inherit"},children:[o&&c.jsx("span",{"aria-hidden":!0,style:{opacity:.8},children:"◷"}),c.jsx("span",{children:l.join(" · ")})]}):null}}}const Yy="ActivitySummary",Xy="活跃度小结：最近活跃 / 本月发布 / 总阅读，一行小字。",Zy="0.1.0",Jy=["activity","meta","renderBioArea"],qy=[{name:"lastActive",type:"string",default:"-",description:"最近活跃描述，如「2 小时前」"},{name:"postsThisMonth",type:"number",default:"-",description:"本月发布篇数"},{name:"totalViews",type:"string",default:"-",description:"总阅读量描述，如「120w」"},{name:"showIcon",type:"boolean",default:"true",description:"是否显示时钟图标字"}],e0=`// 活跃度小结一行字。
const Profile = withPlugins(ProfileCore, [
  createActivitySummaryPlugin({ lastActive: "2 小时前", postsThisMonth: 12, totalViews: "120w" }),
]);`,t0=["走 renderBioArea 领域槽，与简介区其他插件同区串联","三项可任意组合，全空不渲染","浅色小字，不抢简介主体"],n0=["创作者活跃度展示","社区用户粘性提示","需要轻量数据小结的档案"],r0=["数据由消费方计算后传入，本插件只做展示。"],fd={name:Yy,description:Xy,since:Zy,tags:Jy,config:qy,example:e0,features:t0,useCases:n0,notes:r0},Na=Object.assign(Ky,{meta:fd});function o0(e={}){const{size:t="md",label:n="私信",onMessage:r}=e,o=t==="sm"?"3px 12px":"6px 18px",l=t==="sm"?12:14;return{name:"MessageButton",version:"0.1.0",description:"私信按钮：与关注回显同区并排，点击拉起会话。",priority:10,enabled:!0,hooks:{renderFollowArea:i=>c.jsx("button",{type:"button",onClick:()=>r==null?void 0:r(i),style:{padding:o,fontSize:l,borderRadius:999,border:"1px solid rgba(125,130,140,0.45)",background:"transparent",color:"inherit",cursor:"pointer",lineHeight:1.4},children:n})}}}const l0="MessageButton",i0="私信按钮：与关注回显同区并排，点击拉起会话。",a0="0.1.0",s0=["ui","message","私信","renderFollowArea"],u0=[{name:"size",type:'"sm" | "md"',default:"md",description:"按钮尺寸"},{name:"label",type:"ReactNode",default:"私信",description:"按钮文案"},{name:"onMessage",type:"function",default:"-",description:"点击回调，参数为领域上下文"}],c0=`// 私信按钮，与关注并排。
const Profile = withPlugins(ProfileCore, [
  createFollowEchoPlugin({ onFollow: toggleFollow }),
  createMessageButtonPlugin({ onMessage: () => openChat(uid) }),
]);`,f0=["走 renderFollowArea 领域槽，与 FollowEcho 横向并排","描边样式，与关注实心按钮形成主次","点击触发 onMessage（消费方拉起会话）"],d0=["主页私信入口","客服会话触发","需要一对一沟通的场景"],p0=["按钮为无状态触发器，会话逻辑由消费方在 onMessage 里实现。"],dd={name:l0,description:i0,since:a0,tags:s0,config:u0,example:c0,features:f0,useCases:d0,notes:p0},Aa=Object.assign(o0,{meta:dd});function g0(e={}){const{items:t=[],columns:n=4,gap:r=10,tab:o,title:l,empty:i="暂无成就"}=e;return{name:"AchievementWall",version:"0.1.0",description:"成就 / 勋章墙：随 activeTab 联动的内容区插件。",priority:10,enabled:!0,hooks:{renderContentArea:s=>o&&s.activeTab!==o?null:t.length?c.jsxs("div",{className:"vp-achievements",style:{padding:4},children:[l&&c.jsx("div",{style:{fontWeight:600,margin:"0 0 10px"},children:l}),c.jsx("div",{style:{display:"grid",gridTemplateColumns:`repeat(${n}, 1fr)`,gap:r},children:t.map(a=>c.jsxs("div",{title:a.desc,style:{display:"flex",flexDirection:"column",alignItems:"center",gap:6,padding:12,borderRadius:12,background:"rgba(125,130,140,0.1)",border:"1px solid rgba(125,130,140,0.18)",textAlign:"center"},children:[c.jsx("span",{"aria-hidden":!0,style:{width:40,height:40,borderRadius:"50%",background:a.color??"#1a5fd0",color:"#fff",display:"inline-flex",alignItems:"center",justifyContent:"center",fontSize:16,fontWeight:700},children:a.glyph??"★"}),c.jsx("span",{style:{fontSize:13,fontWeight:600},children:a.title}),a.desc&&c.jsx("span",{style:{fontSize:11,opacity:.7},children:a.desc})]},a.id))})]}):c.jsx("div",{className:"vp-achievements-empty",style:{padding:16,color:"#6b6b6b"},children:i})}}}const m0="AchievementWall",h0="成就 / 勋章墙：随 activeTab 联动的内容区插件。",v0="0.1.0",y0=["content","achievement","renderContentArea"],w0=[{name:"items",type:"AchievementItem[]",default:"[]",description:"成就列表，每项含 id / title / 可选 desc / glyph / color"},{name:"columns",type:"number",default:"4",description:"网格列数"},{name:"gap",type:"number",default:"10",description:"卡片间距（px）"},{name:"tab",type:"string",default:"-",description:"仅在某个页签激活时显示（与 TabSync 联动）；不填则始终显示"},{name:"title",type:"ReactNode",default:"-",description:"分组标题"},{name:"empty",type:"ReactNode",default:"暂无成就",description:"空列表占位文案"}],S0=`// 成就墙，挂在「关于」页签下。
const Profile = withPlugins(ProfileCore, [
  createTabSyncPlugin({ tabs: [{ id: "about", label: "关于" }] }),
  createAchievementWallPlugin({ items: user.badges, tab: "about", title: "成就" }),
]);`,x0=["走 renderContentArea 领域槽，Core 有内容插件时替代 children","config.tab 与 context.activeTab 联动：切到对应页签才出墙","图标用单/双字占位，无图也能离线演示","与 WorksGrid 同区可共存（按 priority 纵向排列）"],P0=["个人主页成就展示","创作者荣誉墙","游戏 / 社区勋章系统"],k0=["与 WorksGrid 同在内容区时，两者按 priority 纵向排列，互不覆盖。"],pd={name:m0,description:h0,since:v0,tags:y0,config:w0,example:S0,features:x0,useCases:P0,notes:k0},$a=Object.assign(g0,{meta:pd}),b0=(e,t)=>"data:image/svg+xml;utf8,"+encodeURIComponent(`<svg xmlns="http://www.w3.org/2000/svg" width="96" height="96" viewBox="0 0 96 96"><rect width="96" height="96" rx="48" fill="${e}"/><text x="48" y="62" font-size="44" text-anchor="middle" fill="#fff" font-family="sans-serif">${t}</text></svg>`),Gt=b0("#1a5fd0","F"),O={name:"Frank Vane",handle:"frankvane",bio:"把「旁边那一堆需求」拆成可勾选的插件。",stats:[{value:1280,label:"关注"},{value:"12.4w",label:"粉丝"},{value:4823,label:"获赞"},{value:9,label:"作品"}]},C0={works:"这里是「作品」区：图文卡片、视频、长文混排。",feeds:"这里是「动态」区：时间线式的短内容流。",about:"这里是「关于」区：简介、标签、外链。"},Ba=[{platform:"weibo",href:"https://weibo.com/"},{platform:"zhihu",href:"https://www.zhihu.com/"},{platform:"github",href:"https://github.com/"},{platform:"email",href:"mailto:frank@vane.dev"},{platform:"site",href:"https://vane.dev/"}],za=["React","TypeScript","组件库","设计系统","可视化","开源"],Oa=[{id:"w1",title:"vane-waterfall 重构笔记",coverColor:"#6a11cb",meta:"2.4w 阅读"},{id:"w2",title:"插件化架构实战",coverColor:"#1a5fd0",meta:"1.1w 点赞"},{id:"w3",title:"从 0 写一个组件库",coverColor:"#11998e",meta:"8.6k 收藏"},{id:"w4",title:"拖拽排序的 7 种实现",coverColor:"#ff7e5f",meta:"3 周前"},{id:"w5",title:"可视化排版台",coverColor:"#fc466b",meta:"团队协作"},{id:"w6",title:"暗色主题规范",coverColor:"#3a1c71",meta:"设计稿"}],gd={level:3},md={status:"live",liveTitle:"前端架构夜聊"},Ia={email:"frank@vane.dev",phone:"138-0000-0000",site:"https://vane.dev",address:"上海 · 徐汇"},Da={lastActive:"2 小时前",postsThisMonth:12,totalViews:"120w"},Fa=[{id:"a1",title:"年度创作者",desc:"2025",glyph:"年",color:"#e0b34a"},{id:"a2",title:"万粉",desc:"粉丝破万",glyph:"万",color:"#1a5fd0"},{id:"a3",title:"开源之星",desc:"50+ repo",glyph:"星",color:"#11998e"},{id:"a4",title:"优质教程",desc:"官方推荐",glyph:"优",color:"#fc466b"},{id:"a5",title:"连续打卡",desc:"365 天",glyph:"勤",color:"#ff7e5f"},{id:"a6",title:"社区领袖",desc:"版主",glyph:"领袖",color:"#6a11cb"},{id:"a7",title:"早期用户",desc:"内测",glyph:"初",color:"#9aa7b5"},{id:"a8",title:"乐于助人",desc:"解答 1k+",glyph:"助",color:"#2ecc71"}];function _0(){const e=Cr(),t=(e==null?void 0:e.activeTab)??"works";return c.jsxs("div",{style:{minHeight:120,fontSize:14,lineHeight:1.8,opacity:.8},children:[c.jsx("b",{children:t})," 页：Core 的 children 兜底内容。"]})}const E0={slug:"quickstart",title:"最小可用主页",group:"basic",capability:"core-assembly",intro:"Core + 最少插件（BannerSlot + StatRow + FollowEcho）装配出可用主页。",why:"先跑通最小组合，再按需叠加插件——这正是插件式主页的增量开发方式。",plugs:[{fn:"createBannerSlotPlugin",cfg:"gradient: [...], avatar: user.avatar",why:"头图区"},{fn:"createStatRowPlugin",cfg:"items: user.stats",why:"数据行"},{fn:"createFollowEchoPlugin",cfg:"size: 'md'",why:"关注按钮"}],props:["stats={user.stats}","followState={serverState}"],controls:[{key:"verified",label:"加认证徽标",kind:"switch",init:!1},{key:"withTab",label:"加页签 + 内容区",kind:"switch",init:!1}],stageHeight:320};function T0({cfg:e}){const t=!!e.verified,n=!!e.withTab,r=v.useMemo(()=>ee(Z,[Qt({gradient:["#6a11cb","#1a5fd0"],avatar:Gt,avatarRound:!0,height:150,overlay:c.jsx("strong",{children:O.name})}),_r({items:O.stats}),...n?[Er({tabs:[{id:"works",label:"作品"},{id:"about",label:"关于"}]})]:[],...t?[Yo({type:"personal"})]:[],En({size:"md"})]),[t,n]);return c.jsx(r,{containerStyle:{maxWidth:420,margin:"0 auto"},stats:O.stats,verified:t,badgeType:"personal",followState:"none",banner:c.jsxs("span",{children:["@",O.handle]}),defaultActiveTab:n?"works":void 0,children:n?c.jsx(_0,{}):null})}const R0=Object.freeze(Object.defineProperty({__proto__:null,default:T0,meta:E0},Symbol.toStringTag,{value:"Module"})),du={violet:["#6a11cb","#1a5fd0"],sunset:["#ff7e5f","#feb47b"],mint:["#11998e","#38ef7d"],ink:["#232526","#414345"]},j0={slug:"banner",title:"头图区 BannerSlot",group:"plugin",plugin:"BannerSlot",intro:"封面渐变 + 头像浮层 + 昵称标语叠加，走领域槽 renderBannerArea。",why:"主页第一眼就是头图；把它做成插件，封面/头像/文案都能独立替换，Core 永远不碰样式。",plugs:[{fn:"createBannerSlotPlugin",cfg:"gradient: ['#6a11cb','#1a5fd0'], avatar: user.avatar, height: 160, overlay: <strong>{user.name}</strong>",why:"负责头图区渲染：渐变/封面背景 + 头像浮层 + 文案叠加"}],props:["banner={<span>@{user.handle}</span>}"],controls:[{key:"gradient",label:"渐变配色",kind:"select",init:"violet",options:[{label:"紫蓝 violet",value:"violet"},{label:"暖阳 sunset",value:"sunset"},{label:"薄荷 mint",value:"mint"},{label:"墨灰 ink",value:"ink"}]},{key:"avatar",label:"显示头像",kind:"switch",init:!0},{key:"round",label:"圆角头像",kind:"switch",init:!0},{key:"height",label:"头图高度",kind:"number",init:160,min:110,max:240,step:10}],stageHeight:320};function L0({cfg:e}){const t=String(e.gradient),n=du[t]??du.violet,r=v.useMemo(()=>ee(Z,[Qt({gradient:n,avatar:e.avatar?Gt:void 0,avatarRound:!!e.round,height:Number(e.height),overlay:c.jsx("strong",{children:O.name})})]),[n,e.avatar,e.round,e.height]);return c.jsx(r,{containerStyle:{maxWidth:420,margin:"0 auto"},banner:c.jsxs("span",{children:["@",O.handle]})})}const M0=Object.freeze(Object.defineProperty({__proto__:null,default:L0,meta:j0},Symbol.toStringTag,{value:"Module"})),N0={slug:"statrow",title:"数据行 StatRow",group:"plugin",plugin:"StatRow",intro:"关注 / 粉丝 / 获赞 / 作品横排展示，每项「值 + 标签」。",why:"指标展示是主页标配；做成插件后 row/column、分隔线、点击联动都由配置决定，Core 不掺样式。",plugs:[{fn:"createStatRowPlugin",cfg:"items: user.stats, direction: 'row', divider: true",why:"负责数据行渲染，数据源来自 config.items 或 props.stats"}],props:["stats={user.stats}"],controls:[{key:"direction",label:"排布方向",kind:"select",init:"row",options:[{label:"横排 row",value:"row"},{label:"竖排 column",value:"column"}]},{key:"divider",label:"项间分隔线",kind:"switch",init:!0}],stageHeight:260};function A0({cfg:e}){const t=v.useMemo(()=>ee(Z,[_r({items:O.stats,direction:e.direction==="column"?"column":"row",divider:!!e.divider})]),[e.direction,e.divider]);return c.jsx(t,{containerStyle:{maxWidth:420,margin:"0 auto"},stats:O.stats})}const $0=Object.freeze(Object.defineProperty({__proto__:null,default:A0,meta:N0},Symbol.toStringTag,{value:"Module"}));function B0(){const e=Cr(),t=(e==null?void 0:e.activeTab)??"works";return c.jsxs("div",{style:{minHeight:120,fontSize:14,lineHeight:1.8,color:"#4a5056"},children:[c.jsx("b",{style:{color:"#1f2328"},children:t})," —— ",C0[t]??"（空）",c.jsxs("p",{style:{marginTop:12,color:"#6b6b6b",fontSize:12},children:["当前 activeTab 经 ",c.jsx("code",{children:"useProfileContext()"})," 读取：",String(t)]})]})}const z0={slug:"tabsync",title:"页签系统 TabSync",group:"plugin",plugin:"TabSync",intro:"渲染页签栏（underline / pill / segmented）+ 切换联动内容区。",why:"多内容区主页的核心交互；内容怎么渲染交给消费方子节点，TabSync 只管「切」。",plugs:[{fn:"createTabSyncPlugin",cfg:"tabs: [{id:'works',label:'作品'},{id:'feeds',label:'动态'},{id:'about',label:'关于'}], variant: 'underline'",why:"渲染页签栏 + 点击调 context.setActiveTab，内容区订阅后自动重渲染"}],props:['defaultActiveTab="works"'],controls:[{key:"variant",label:"样式变体",kind:"select",init:"underline",options:[{label:"下划线 underline",value:"underline"},{label:"胶囊 pill",value:"pill"},{label:"分段 segmented",value:"segmented"}]},{key:"sticky",label:"吸顶",kind:"switch",init:!1},{key:"scrollTop",label:"切换滚到顶部",kind:"switch",init:!0}],stageHeight:300},O0=[{id:"works",label:"作品"},{id:"feeds",label:"动态"},{id:"about",label:"关于"}];function I0({cfg:e,log:t}){const n=v.useMemo(()=>ee(Z,[Er({tabs:O0,variant:e.variant,sticky:!!e.sticky,scrollTopOnChange:!!e.scrollTop,onChange:r=>t(`切换到 ${r}`)})]),[e.variant,e.sticky,e.scrollTop]);return c.jsx(n,{containerStyle:{maxWidth:420,margin:"0 auto"},defaultActiveTab:"works",children:c.jsx(B0,{})})}const D0=Object.freeze(Object.defineProperty({__proto__:null,default:I0,meta:z0},Symbol.toStringTag,{value:"Module"})),F0={slug:"verifybadge",title:"认证徽标 VerifyBadge",group:"plugin",plugin:"VerifyBadge",intro:"个人 / 机构认证对勾（内联 SVG），浮于头图右上角。",why:"信任标识是主页的「小但重要」需求；做成插件，认证态/类型都可配置，不污染 Core。",plugs:[{fn:"createVerifyBadgePlugin",cfg:"type: 'personal', showLabel: true",why:"负责认证徽标渲染，verified=false 时自动隐藏"}],props:["verified",'badgeType="personal"'],controls:[{key:"verified",label:"已认证",kind:"switch",init:!0},{key:"type",label:"认证类型",kind:"select",init:"personal",options:[{label:"个人 personal",value:"personal"},{label:"机构 institution",value:"institution"}]},{key:"showLabel",label:"显示文字",kind:"switch",init:!0}],stageHeight:200};function U0({cfg:e}){const t=v.useMemo(()=>ee(Z,[Yo({type:e.type,showLabel:!!e.showLabel})]),[e.type,e.showLabel]);return c.jsx(t,{containerStyle:{maxWidth:420,margin:"0 auto"},verified:!!e.verified,badgeType:e.type})}const W0=Object.freeze(Object.defineProperty({__proto__:null,default:U0,meta:F0},Symbol.toStringTag,{value:"Module"})),V0={slug:"followecho",title:"关注回显 FollowEcho",group:"plugin",plugin:"FollowEcho",intro:"关注 / 已关注 / 互相关注三态按钮，受控于 props.followState。",why:"关注关系是服务端真相；做成受控插件，点击只作乐观 UI，真相回写 props，不把状态塞进 Core。",plugs:[{fn:"createFollowEchoPlugin",cfg:"size: 'md', onFollow: (next) => api.toggleFollow(uid, next)",why:"负责关注按钮渲染 + 乐观切换；关系变 mutual 时触发 onMutual；mutual 状态下点击即取消关注（目标态 none），由宿主回写 followState"}],props:["followState={serverState}"],controls:[{key:"state",label:"初始关注态",kind:"select",init:"none",options:[{label:"未关注 none",value:"none"},{label:"已关注 following",value:"following"},{label:"互相关注 mutual",value:"mutual"}]},{key:"size",label:"按钮尺寸",kind:"select",init:"md",options:[{label:"中 md",value:"md"},{label:"小 sm",value:"sm"}]}],stageHeight:200,note:"按钮是受控展示：点击只触发 onFollow（乐观 UI），真实关系以 props.followState 为准；互相关注点一次会变为未关注。"};function H0({cfg:e,log:t}){const n=v.useMemo(()=>ee(Z,[En({size:e.size,onFollow:r=>t(`点击 → ${r}`),onMutual:()=>t("关系变为 mutual","info")})]),[e.size]);return c.jsx(n,{containerStyle:{maxWidth:420,margin:"0 auto"},followState:e.state})}const Q0=Object.freeze(Object.defineProperty({__proto__:null,default:H0,meta:V0},Symbol.toStringTag,{value:"Module"})),G0={slug:"bio",title:"简介区 BioSlot",group:"plugin",plugin:"BioSlot",intro:"昵称 + 签名 + 所在地 / 加入时间，走领域槽 renderBioArea。",why:"主页「我是谁」的签名档；做成插件后头图与数据行之间多了一段结构化简介，Core 永远不碰文案。",plugs:[{fn:"createBioSlotPlugin",cfg:"name: user.name, bio: user.bio, location: '上海', joinDate: '2021 加入'",why:"负责简介区渲染，排在头图与数据行之间；全部为空时不占空间"}],props:[],controls:[{key:"showName",label:"显示昵称",kind:"switch",init:!0},{key:"showBio",label:"显示签名",kind:"switch",init:!0},{key:"showMeta",label:"显示地点/时间",kind:"switch",init:!0}],stageHeight:220};function K0({cfg:e}){const t=v.useMemo(()=>ee(Z,[Ca({name:e.showName?O.name:void 0,bio:e.showBio?O.bio:void 0,location:e.showMeta?"上海":void 0,joinDate:e.showMeta?"2021 加入":void 0})]),[e.showName,e.showBio,e.showMeta]);return c.jsx(t,{containerStyle:{maxWidth:420,margin:"0 auto"}})}const Y0=Object.freeze(Object.defineProperty({__proto__:null,default:K0,meta:G0},Symbol.toStringTag,{value:"Module"})),X0={slug:"social",title:"社交外链 SocialLinks",group:"plugin",plugin:"SocialLinks",intro:"一排可点击的平台入口（微博 / 知乎 / GitHub …），走领域槽 renderBioArea。",why:"主页底部的外链聚合；做成插件后入口列表完全数据驱动，Core 不掺任何平台样式。",plugs:[{fn:"createSocialLinksPlugin",cfg:"links: [...], showLabel: true, align: 'left'",why:"负责社交外链行渲染；常见平台有默认图标字与文案"}],props:[],controls:[{key:"showLabel",label:"显示文案",kind:"switch",init:!0},{key:"align",label:"对齐",kind:"select",init:"left",options:[{label:"左 left",value:"left"},{label:"中 center",value:"center"},{label:"右 right",value:"right"}]}],stageHeight:200};function Z0({cfg:e}){const t=v.useMemo(()=>ee(Z,[_a({links:Ba,showLabel:!!e.showLabel,align:e.align})]),[e.showLabel,e.align]);return c.jsx(t,{containerStyle:{maxWidth:420,margin:"0 auto"}})}const J0=Object.freeze(Object.defineProperty({__proto__:null,default:Z0,meta:X0},Symbol.toStringTag,{value:"Module"})),q0={slug:"tags",title:"兴趣标签 TagList",group:"plugin",plugin:"TagList",intro:"一排圆角小标签，走领域槽 renderBioArea。",why:"兴趣 / 内容领域标记；做成插件后标签完全数据驱动，Core 不掺样式。",plugs:[{fn:"createTagListPlugin",cfg:"tags: ['React','TypeScript','组件库', …]",why:"负责标签行渲染；tags 为空时整体不渲染"}],props:[],controls:[{key:"align",label:"对齐",kind:"select",init:"left",options:[{label:"左 left",value:"left"},{label:"中 center",value:"center"},{label:"右 right",value:"right"}]}],stageHeight:160};function e1({cfg:e}){const t=v.useMemo(()=>ee(Z,[Ea({tags:za,align:e.align})]),[e.align]);return c.jsx(t,{containerStyle:{maxWidth:420,margin:"0 auto"}})}const t1=Object.freeze(Object.defineProperty({__proto__:null,default:e1,meta:q0},Symbol.toStringTag,{value:"Module"}));function n1(){const e=Cr(),t=(e==null?void 0:e.activeTab)??"works";return c.jsxs("div",{style:{minHeight:120,fontSize:14,lineHeight:1.8,opacity:.8},children:[c.jsx("b",{children:t})," 页：这里放该页签的自定义内容（children 兜底）。"]})}const r1={slug:"worksgrid",title:"作品网格 WorksGrid",group:"plugin",plugin:"WorksGrid",intro:"内容区作品网格（CSS grid），走领域槽 renderContentArea，可随页签联动。",why:"主页「内容」通常是网格；做成内容区插件后，Core 有内容插件时以它替代 children，且能与 TabSync 的 activeTab 联动。",plugs:[{fn:"createWorksGridPlugin",cfg:"items: user.works, columns: 3, tab: 'works'",why:"负责内容区网格渲染；tab 与 context.activeTab 联动，切到作品页才出网格"}],props:["（有 WorksGrid 时内容区由它接管，不再用 children）"],controls:[{key:"columns",label:"列数",kind:"number",init:3,min:2,max:4,step:1},{key:"showTitle",label:"显示分组标题",kind:"switch",init:!0},{key:"withTab",label:"随页签联动（含 TabSync）",kind:"switch",init:!0}],stageHeight:360},o1=[{id:"works",label:"作品"},{id:"about",label:"关于"}];function l1({cfg:e,log:t}){const n=Number(e.columns),r=!!e.withTab,o=v.useMemo(()=>ee(Z,[...r?[Er({tabs:o1,onChange:l=>t(`切到 ${l}`)})]:[],Ta({items:Oa,columns:n,title:e.showTitle?"精选作品":void 0,tab:r?"works":void 0})]),[r,n,e.showTitle]);return c.jsx(o,{containerStyle:{maxWidth:460,margin:"0 auto"},defaultActiveTab:r?"works":void 0,children:r?c.jsx(n1,{}):null})}const i1=Object.freeze(Object.defineProperty({__proto__:null,default:l1,meta:r1},Symbol.toStringTag,{value:"Module"})),a1=[{id:"works",label:"作品"},{id:"feeds",label:"动态"},{id:"about",label:"关于"}];function s1(){const e=Cr(),t=(e==null?void 0:e.activeTab)??"works";return c.jsxs("div",{style:{minHeight:120,fontSize:14,lineHeight:1.8,opacity:.8},children:[c.jsx("b",{children:t})," 页：Core 的 children 兜底内容。"]})}const u1={slug:"full-combo",title:"全功能组合",group:"advanced",capability:"all-plugins",intro:"16 个官方插件逐个开关，实时生成对应装配代码。",why:"把分散的插件页串起来：一个主页就是「挑插件 + 写配置」，没有一行样式散落在业务里。",plugs:[{fn:"createBannerSlotPlugin",cfg:"gradient: [...], avatar: user.avatar",why:"头图区"},{fn:"createBioSlotPlugin",cfg:"name, bio, location, joinDate",why:"简介区"},{fn:"createStatRowPlugin",cfg:"items: user.stats",why:"数据行"},{fn:"createSocialLinksPlugin",cfg:"links: [...]",why:"社交外链"},{fn:"createTagListPlugin",cfg:"tags: [...]",why:"兴趣标签"},{fn:"createTabSyncPlugin",cfg:"tabs: [...]",why:"页签栏 + 内容联动"},{fn:"createVerifyBadgePlugin",cfg:"type: 'personal'",why:"认证徽标"},{fn:"createFollowEchoPlugin",cfg:"size: 'md'",why:"关注按钮"},{fn:"createWorksGridPlugin",cfg:"items: user.works, tab: 'works'",why:"作品网格（内容区）"},{fn:"createMembershipBadgePlugin",cfg:"level: 3",why:"会员角标（徽标区）"},{fn:"createQRSharePlugin",cfg:"url: user.homeUrl",why:"二维码分享（徽标区）"},{fn:"createLiveStatusPlugin",cfg:"status: 'live'",why:"在线/直播状态（简介区）"},{fn:"createContactCardPlugin",cfg:"email, site, address",why:"联系信息（简介区）"},{fn:"createActivitySummaryPlugin",cfg:"lastActive, postsThisMonth",why:"活跃度小结（简介区）"},{fn:"createMessageButtonPlugin",cfg:"label: '私信'",why:"私信按钮（关注区）"},{fn:"createAchievementWallPlugin",cfg:"items: user.badges, tab: 'about'",why:"成就墙（内容区）"}],props:["verified","stats={user.stats}","followState={serverState}"],controls:[{key:"banner",label:"BannerSlot",kind:"switch",init:!0},{key:"bio",label:"BioSlot",kind:"switch",init:!0},{key:"stat",label:"StatRow",kind:"switch",init:!0},{key:"social",label:"SocialLinks",kind:"switch",init:!0},{key:"tags",label:"TagList",kind:"switch",init:!0},{key:"tab",label:"TabSync",kind:"switch",init:!0},{key:"badge",label:"VerifyBadge",kind:"switch",init:!0},{key:"follow",label:"FollowEcho",kind:"switch",init:!0},{key:"works",label:"WorksGrid",kind:"switch",init:!0},{key:"membership",label:"MembershipBadge",kind:"switch",init:!0},{key:"qrshare",label:"QRShare",kind:"switch",init:!0},{key:"live",label:"LiveStatus",kind:"switch",init:!0},{key:"contact",label:"ContactCard",kind:"switch",init:!0},{key:"activity",label:"ActivitySummary",kind:"switch",init:!0},{key:"message",label:"MessageButton",kind:"switch",init:!0},{key:"achievements",label:"AchievementWall",kind:"switch",init:!0}],stageHeight:560};function c1({cfg:e}){const t=!!e.tab,n=v.useMemo(()=>{const r=[];return e.banner&&r.push(Qt({gradient:["#6a11cb","#1a5fd0"],avatar:Gt,avatarRound:!0,height:150,overlay:c.jsx("strong",{children:O.name})})),e.bio&&r.push(Ca({name:O.name,subtitle:"前端工程师 · 组件库作者",bio:O.bio,location:"上海",joinDate:"2021 加入"})),e.stat&&r.push(_r({items:O.stats})),e.social&&r.push(_a({links:Ba})),e.tags&&r.push(Ea({tags:za})),t&&r.push(Er({tabs:a1})),e.badge&&r.push(Yo({type:"personal"})),e.follow&&r.push(En({size:"md"})),e.works&&r.push(Ta({items:Oa,columns:3,title:"精选作品",tab:t?"works":void 0})),e.membership&&r.push(Ra(gd)),e.qrshare&&r.push(ja({url:"https://vane.dev/u/frankvane"})),e.live&&r.push(La(md)),e.contact&&r.push(Ma(Ia)),e.activity&&r.push(Na(Da)),e.message&&r.push(Aa({label:"私信"})),e.achievements&&r.push($a({items:Fa,columns:4,title:"成就",tab:t?"about":void 0})),ee(Z,r)},[e.banner,e.bio,e.stat,e.social,e.tags,t,e.badge,e.follow,e.works,e.membership,e.qrshare,e.live,e.contact,e.activity,e.message,e.achievements]);return c.jsx(n,{containerStyle:{maxWidth:460,margin:"0 auto"},stats:O.stats,verified:!!e.badge,badgeType:"personal",followState:"none",banner:c.jsxs("span",{children:["@",O.handle]}),defaultActiveTab:t?"works":void 0,children:t?c.jsx(s1,{}):null})}const f1=Object.freeze(Object.defineProperty({__proto__:null,default:c1,meta:u1},Symbol.toStringTag,{value:"Module"})),d1={slug:"dynamic-control",title:"受控与事件",group:"advanced",capability:"controlled-state",intro:"followState 走 props 受控，点击关注回调 onFollow / onMutual，coreRef 读状态与强刷。",why:"真实业务里关注关系是服务端真相，UI 只是乐观回显；这页演示怎么把插件接到你自己的状态机。",plugs:[{fn:"createFollowEchoPlugin",cfg:"onFollow, onMutual",why:"受控三态按钮 + 回调"}],props:["followState={serverState}","onFollow","onMutual"],controls:[],stageHeight:300},p1=["none","following","mutual"],g1={none:"未关注",following:"已关注",mutual:"互相关注"};function m1({cfg:e,log:t}){const[n,r]=v.useState("none"),o=v.useRef(null),l=v.useMemo(()=>ee(Z,[Qt({gradient:["#1a5fd0","#6a11cb"],avatar:Gt,avatarRound:!0,height:140,overlay:c.jsx("strong",{children:O.name})}),_r({items:O.stats}),En({size:"md",onFollow:i=>{r(i),t(`onFollow → ${i}`,"event")},onMutual:i=>t(`onMutual → ${i}（关系变为互相关注）`,"info")})]),[]);return c.jsxs("div",{children:[c.jsxs("div",{style:{display:"flex",gap:8,marginBottom:12,flexWrap:"wrap"},children:[p1.map(i=>c.jsx("button",{type:"button",onClick:()=>{r(i),t(`外部设置 followState = ${i}`)},style:{padding:"6px 12px",borderRadius:8,border:"1px solid rgba(125,130,140,0.4)",background:n===i?"#1a5fd0":"transparent",color:n===i?"#fff":"inherit",cursor:"pointer"},children:g1[i]},i)),c.jsx("button",{type:"button",onClick:()=>{var a,u;const i=(a=o.current)==null?void 0:a.getActiveTab(),s=(u=o.current)==null?void 0:u.getSize();t(`coreRef: activeTab=${i}, 容器=${s==null?void 0:s.width}×${s==null?void 0:s.height}`,"info")},style:{padding:"6px 12px",borderRadius:8,border:"1px dashed rgba(125,130,140,0.5)",background:"transparent",color:"inherit",cursor:"pointer"},children:"读 coreRef"}),c.jsx("button",{type:"button",onClick:()=>{var i;return(i=o.current)==null?void 0:i.forceUpdate()},style:{padding:"6px 12px",borderRadius:8,border:"1px dashed rgba(125,130,140,0.5)",background:"transparent",color:"inherit",cursor:"pointer"},children:"强制刷新"})]}),c.jsx(l,{ref:o,containerStyle:{maxWidth:420,margin:"0 auto"},stats:O.stats,followState:n,banner:c.jsxs("span",{children:["@",O.handle]})})]})}const h1=Object.freeze(Object.defineProperty({__proto__:null,default:m1,meta:d1},Symbol.toStringTag,{value:"Module"})),v1={slug:"membership",title:"会员角标 MembershipBadge",group:"plugin",plugin:"MembershipBadge",intro:"会员 / VIP 等级角标，浮于头图右上，与认证徽标同区并排。",why:"付费会员 / 社区等级的可视标识；做成插件后头图右上多了一块身份区，Core 不碰配色。",plugs:[{fn:"createBannerSlotPlugin",cfg:"avatar: user.avatar, overlay: user.name",why:"提供头图背景，让角标落在它应有的右上角"},{fn:"createMembershipBadgePlugin",cfg:"level: {{level}}, showLabel: true",why:"负责会员角标渲染，与 VerifyBadge / QRShare 横向并排"}],props:[],controls:[{key:"level",label:"等级",kind:"select",init:"3",options:[{label:"VIP1",value:"1"},{label:"VIP2",value:"2"},{label:"VIP3",value:"3"}]}],stageHeight:220};function y1({cfg:e}){const t=v.useMemo(()=>ee(Z,[Qt({gradient:["#6a11cb","#1a5fd0"],avatar:Gt,overlay:O.name}),Ra({level:Number(e.level)})]),[e.level]);return c.jsx(t,{containerStyle:{maxWidth:420,margin:"0 auto"}})}const w1=Object.freeze(Object.defineProperty({__proto__:null,default:y1,meta:v1},Symbol.toStringTag,{value:"Module"})),S1={slug:"qrshare",title:"二维码分享 QRShare",group:"plugin",plugin:"QRShare",intro:"主页二维码分享：浮于头图右上的分享按钮，点击展开二维码与复制链接。",why:"主页传播入口；做成插件后头图右上多了一块交互区，弹层用内部 state 控制，不污染 Core。",plugs:[{fn:"createBannerSlotPlugin",cfg:"avatar: user.avatar, overlay: user.name",why:"提供头图背景，让分享按钮落在它应有的右上角"},{fn:"createQRSharePlugin",cfg:"url: user.homeUrl, buttonLabel: '分享'",why:"负责分享按钮与弹层，与 VerifyBadge / MembershipBadge 横向并排"}],props:[],controls:[],stageHeight:240,note:"点击右上角「分享」按钮查看二维码占位面板（装饰性点阵，非真实可扫码）。"};function x1({cfg:e}){const t=v.useMemo(()=>ee(Z,[Qt({gradient:["#6a11cb","#1a5fd0"],avatar:Gt,overlay:O.name}),ja({url:"https://vane.dev/u/frankvane"})]),[]);return c.jsx(t,{containerStyle:{maxWidth:420,margin:"0 auto"}})}const P1=Object.freeze(Object.defineProperty({__proto__:null,default:x1,meta:S1},Symbol.toStringTag,{value:"Module"})),k1={slug:"livestatus",title:"在线状态 LiveStatus",group:"plugin",plugin:"LiveStatus",intro:"在线 / 直播状态指示：圆点 + 文案，直播态高亮。",why:"主播 / 客服 / 社区的实时状态；做成插件后简介区多了一块状态行，Core 不碰业务。",plugs:[{fn:"createLiveStatusPlugin",cfg:"status: '{{status}}', liveTitle: '前端架构夜聊'",why:"负责状态行渲染，排在简介区，与 BioSlot / SocialLinks 同区串联"}],props:[],controls:[{key:"status",label:"状态",kind:"select",init:"live",options:[{label:"在线",value:"online"},{label:"离开",value:"away"},{label:"忙碌",value:"busy"},{label:"离线",value:"offline"},{label:"直播中",value:"live"}]}],stageHeight:120};function b1({cfg:e}){const t=v.useMemo(()=>ee(Z,[La({status:e.status,liveTitle:"前端架构夜聊"})]),[e.status]);return c.jsx(t,{containerStyle:{maxWidth:420,margin:"0 auto"}})}const C1=Object.freeze(Object.defineProperty({__proto__:null,default:b1,meta:k1},Symbol.toStringTag,{value:"Module"})),_1={slug:"contact",title:"联系信息 ContactCard",group:"plugin",plugin:"ContactCard",intro:"联系信息卡：邮箱 / 电话 / 官网 / 地址，安全链接。",why:"商家 / 创作者公开联系方式；做成插件后简介区多了一块联系入口，外链带 rel 防钓鱼。",plugs:[{fn:"createContactCardPlugin",cfg:"email: user.email, site: user.site, address: user.address",why:"负责联系信息渲染，排在简介区，与 BioSlot / SocialLinks 同区串联"}],props:[],controls:[],stageHeight:120};function E1({cfg:e}){const t=v.useMemo(()=>ee(Z,[Ma(Ia)]),[]);return c.jsx(t,{containerStyle:{maxWidth:460,margin:"0 auto"}})}const T1=Object.freeze(Object.defineProperty({__proto__:null,default:E1,meta:_1},Symbol.toStringTag,{value:"Module"})),R1={slug:"activity",title:"活跃度小结 ActivitySummary",group:"plugin",plugin:"ActivitySummary",intro:"活跃度小结：最近活跃 / 本月发布 / 总阅读，一行小字。",why:"创作者活跃度 / 社区粘性提示；做成插件后简介区多了一块轻量数据，不抢主体。",plugs:[{fn:"createActivitySummaryPlugin",cfg:"lastActive: '2 小时前', postsThisMonth: 12, totalViews: '120w'",why:"负责活跃度小结渲染，排在简介区，与 BioSlot / SocialLinks 同区串联"}],props:[],controls:[],stageHeight:120};function j1({cfg:e}){const t=v.useMemo(()=>ee(Z,[Na(Da)]),[]);return c.jsx(t,{containerStyle:{maxWidth:460,margin:"0 auto"}})}const L1=Object.freeze(Object.defineProperty({__proto__:null,default:j1,meta:R1},Symbol.toStringTag,{value:"Module"})),M1={slug:"message",title:"私信按钮 MessageButton",group:"plugin",plugin:"MessageButton",intro:"私信按钮：与关注回显同区并排，点击拉起会话。",why:"主页一对一沟通入口；做成插件后关注区多了一块描边按钮，与关注形成主次。",plugs:[{fn:"createFollowEchoPlugin",cfg:"size: 'md'",why:"提供关注态，让私信按钮落在它应有的并排位置"},{fn:"createMessageButtonPlugin",cfg:"label: '私信', onMessage: () => openChat(uid)",why:"负责私信按钮渲染，与 FollowEcho 横向并排"}],props:[],controls:[{key:"showMsg",label:"显示私信按钮",kind:"switch",init:!0}],stageHeight:120};function N1({cfg:e}){const t=v.useMemo(()=>ee(Z,[En({size:"md",state:"following"}),...e.showMsg?[Aa({label:"私信",onMessage:()=>{}})]:[]]),[e.showMsg]);return c.jsx(t,{containerStyle:{maxWidth:420,margin:"0 auto"}})}const A1=Object.freeze(Object.defineProperty({__proto__:null,default:N1,meta:M1},Symbol.toStringTag,{value:"Module"})),$1={slug:"achievements",title:"成就墙 AchievementWall",group:"plugin",plugin:"AchievementWall",intro:"成就 / 勋章墙：随 activeTab 联动的内容区插件。",why:"个人主页荣誉展示；做成内容区插件后，切到对应页签才出墙，与 WorksGrid 同区可共存。",plugs:[{fn:"createAchievementWallPlugin",cfg:"items: user.badges, columns: 4, title: '成就'",why:"负责成就墙渲染，走 renderContentArea，有它时接管 children"}],props:[],controls:[{key:"columns",label:"列数",kind:"number",init:4,min:2,max:8,step:1}],stageHeight:240};function B1({cfg:e}){const t=v.useMemo(()=>ee(Z,[$a({items:Fa,columns:Number(e.columns),title:"成就"})]),[e.columns]);return c.jsx(t,{containerStyle:{maxWidth:480,margin:"0 auto"}})}const z1=Object.freeze(Object.defineProperty({__proto__:null,default:B1,meta:$1},Symbol.toStringTag,{value:"Module"})),O1=`import React, { useMemo } from "react";
import { ProfileCore, withPlugins, useProfileContext } from "vane-profile";
import {
  createBannerSlotPlugin,
  createStatRowPlugin,
  createFollowEchoPlugin,
  createVerifyBadgePlugin,
  createTabSyncPlugin,
} from "vane-profile/custom-plugins";
import type { DemoMeta, DemoStageProps } from "./types";
import { AVATAR, SAMPLE_USER } from "../data/sample";

/** 内容区：仅在有 TabSync 时显示，演示 children 兜底 */
function ProfileContent() {
  const ctx = useProfileContext();
  const tab = ctx?.activeTab ?? "works";
  return (
    <div style={{ minHeight: 120, fontSize: 14, lineHeight: 1.8, opacity: 0.8 }}>
      <b>{tab}</b> 页：Core 的 children 兜底内容。
    </div>
  );
}

/**
 * 00 · 最小可用主页（基础功能）
 * 5 行装配出一个能用的主页：头图 + 数据行 + 关注。再叠加认证 / 页签就是另一种观感。
 */
export const meta: DemoMeta = {
  slug: "quickstart",
  title: "最小可用主页",
  group: "basic",
  capability: "core-assembly",
  intro: "Core + 最少插件（BannerSlot + StatRow + FollowEcho）装配出可用主页。",
  why: "先跑通最小组合，再按需叠加插件——这正是插件式主页的增量开发方式。",
  plugs: [
    { fn: "createBannerSlotPlugin", cfg: "gradient: [...], avatar: user.avatar", why: "头图区" },
    { fn: "createStatRowPlugin", cfg: "items: user.stats", why: "数据行" },
    { fn: "createFollowEchoPlugin", cfg: "size: 'md'", why: "关注按钮" },
  ],
  props: ["stats={user.stats}", "followState={serverState}"],
  controls: [
    { key: "verified", label: "加认证徽标", kind: "switch", init: false },
    { key: "withTab", label: "加页签 + 内容区", kind: "switch", init: false },
  ],
  stageHeight: 320,
};

export default function Stage({ cfg }: DemoStageProps) {
  const verified = Boolean(cfg.verified);
  const withTab = Boolean(cfg.withTab);

  const Profile = useMemo(
    () =>
      withPlugins(ProfileCore, [
        createBannerSlotPlugin({
          gradient: ["#6a11cb", "#1a5fd0"],
          avatar: AVATAR,
          avatarRound: true,
          height: 150,
          overlay: <strong>{SAMPLE_USER.name}</strong>,
        }),
        createStatRowPlugin({ items: SAMPLE_USER.stats }),
        ...(withTab
          ? [createTabSyncPlugin({ tabs: [{ id: "works", label: "作品" }, { id: "about", label: "关于" }] })]
          : []),
        ...(verified ? [createVerifyBadgePlugin({ type: "personal" })] : []),
        createFollowEchoPlugin({ size: "md" }),
      ]),
    [verified, withTab]
  );

  return (
    <Profile
      containerStyle={{ maxWidth: 420, margin: "0 auto" }}
      stats={SAMPLE_USER.stats}
      verified={verified}
      badgeType="personal"
      followState="none"
      banner={<span>@{SAMPLE_USER.handle}</span>}
      defaultActiveTab={withTab ? "works" : undefined}
    >
      {withTab ? <ProfileContent /> : null}
    </Profile>
  );
}
`,I1=`import React, { useMemo } from "react";
import { ProfileCore, withPlugins } from "vane-profile";
import { createBannerSlotPlugin } from "vane-profile/custom-plugins";
import type { DemoMeta, DemoStageProps } from "./types";
import { AVATAR, SAMPLE_USER } from "../data/sample";

const GRADIENTS: Record<string, [string, string]> = {
  violet: ["#6a11cb", "#1a5fd0"],
  sunset: ["#ff7e5f", "#feb47b"],
  mint: ["#11998e", "#38ef7d"],
  ink: ["#232526", "#414345"],
};

/**
 * 01 · 头图区 BannerSlot
 * 单装这一个插件：只渲染头图区，演示「领域槽」如何把头图封装成可替换的视觉块。
 */
export const meta: DemoMeta = {
  slug: "banner",
  title: "头图区 BannerSlot",
  group: "plugin",
  plugin: "BannerSlot",
  intro: "封面渐变 + 头像浮层 + 昵称标语叠加，走领域槽 renderBannerArea。",
  why: "主页第一眼就是头图；把它做成插件，封面/头像/文案都能独立替换，Core 永远不碰样式。",
  plugs: [
    {
      fn: "createBannerSlotPlugin",
      cfg: "gradient: ['#6a11cb','#1a5fd0'], avatar: user.avatar, height: 160, overlay: <strong>{user.name}</strong>",
      why: "负责头图区渲染：渐变/封面背景 + 头像浮层 + 文案叠加",
    },
  ],
  props: ["banner={<span>@{user.handle}</span>}"],
  controls: [
    {
      key: "gradient",
      label: "渐变配色",
      kind: "select",
      init: "violet",
      options: [
        { label: "紫蓝 violet", value: "violet" },
        { label: "暖阳 sunset", value: "sunset" },
        { label: "薄荷 mint", value: "mint" },
        { label: "墨灰 ink", value: "ink" },
      ],
    },
    { key: "avatar", label: "显示头像", kind: "switch", init: true },
    { key: "round", label: "圆角头像", kind: "switch", init: true },
    { key: "height", label: "头图高度", kind: "number", init: 160, min: 110, max: 240, step: 10 },
  ],
  stageHeight: 320,
};

export default function Stage({ cfg }: DemoStageProps) {
  const gradientKey = String(cfg.gradient);
  const gradient = GRADIENTS[gradientKey] ?? GRADIENTS.violet;

  // 用 useMemo 固定组件类型，避免拖控件时整块重挂载
  const Profile = useMemo(
    () =>
      withPlugins(ProfileCore, [
        createBannerSlotPlugin({
          gradient,
          avatar: cfg.avatar ? AVATAR : undefined,
          avatarRound: Boolean(cfg.round),
          height: Number(cfg.height),
          overlay: <strong>{SAMPLE_USER.name}</strong>,
        }),
      ]),
    [gradient, cfg.avatar, cfg.round, cfg.height]
  );

  return (
    <Profile
      containerStyle={{ maxWidth: 420, margin: "0 auto" }}
      banner={<span>@{SAMPLE_USER.handle}</span>}
    />
  );
}
`,D1=`import React, { useMemo } from "react";
import { ProfileCore, withPlugins } from "vane-profile";
import { createStatRowPlugin } from "vane-profile/custom-plugins";
import type { DemoMeta, DemoStageProps } from "./types";
import { SAMPLE_USER } from "../data/sample";

/**
 * 02 · 数据行 StatRow
 * 只装 StatRow：横排关注/粉丝/获赞/作品。演示数据从 config.items 注入。
 */
export const meta: DemoMeta = {
  slug: "statrow",
  title: "数据行 StatRow",
  group: "plugin",
  plugin: "StatRow",
  intro: "关注 / 粉丝 / 获赞 / 作品横排展示，每项「值 + 标签」。",
  why: "指标展示是主页标配；做成插件后 row/column、分隔线、点击联动都由配置决定，Core 不掺样式。",
  plugs: [
    {
      fn: "createStatRowPlugin",
      cfg: "items: user.stats, direction: 'row', divider: true",
      why: "负责数据行渲染，数据源来自 config.items 或 props.stats",
    },
  ],
  props: ["stats={user.stats}"],
  controls: [
    {
      key: "direction",
      label: "排布方向",
      kind: "select",
      init: "row",
      options: [
        { label: "横排 row", value: "row" },
        { label: "竖排 column", value: "column" },
      ],
    },
    { key: "divider", label: "项间分隔线", kind: "switch", init: true },
  ],
  stageHeight: 260,
};

export default function Stage({ cfg }: DemoStageProps) {
  const Profile = useMemo(
    () =>
      withPlugins(ProfileCore, [
        createStatRowPlugin({
          items: SAMPLE_USER.stats,
          direction: cfg.direction === "column" ? "column" : "row",
          divider: Boolean(cfg.divider),
        }),
      ]),
    [cfg.direction, cfg.divider]
  );

  return <Profile containerStyle={{ maxWidth: 420, margin: "0 auto" }} stats={SAMPLE_USER.stats} />;
}
`,F1=`import React, { useMemo } from "react";
import { ProfileCore, withPlugins, useProfileContext } from "vane-profile";
import { createTabSyncPlugin } from "vane-profile/custom-plugins";
import type { DemoMeta, DemoStageProps } from "./types";
import { TAB_CONTENT } from "../data/sample";

/** 内容区：订阅 activeTab，随页签切换重渲染（TabSync 只负责切 tab，不渲染内容） */
function ProfileContent() {
  const ctx = useProfileContext();
  const tab = ctx?.activeTab ?? "works";
  return (
    <div style={{ minHeight: 120, fontSize: 14, lineHeight: 1.8, color: "#4a5056" }}>
      <b style={{ color: "#1f2328" }}>{tab}</b> —— {TAB_CONTENT[tab] ?? "（空）"}
      <p style={{ marginTop: 12, color: "#6b6b6b", fontSize: 12 }}>
        当前 activeTab 经 <code>useProfileContext()</code> 读取：{String(tab)}
      </p>
    </div>
  );
}

/**
 * 03 · 页签系统 TabSync
 * 交互中枢：点击切 tab → 内容区经 context.activeTab 自动重渲染。
 */
export const meta: DemoMeta = {
  slug: "tabsync",
  title: "页签系统 TabSync",
  group: "plugin",
  plugin: "TabSync",
  intro: "渲染页签栏（underline / pill / segmented）+ 切换联动内容区。",
  why: "多内容区主页的核心交互；内容怎么渲染交给消费方子节点，TabSync 只管「切」。",
  plugs: [
    {
      fn: "createTabSyncPlugin",
      cfg: "tabs: [{id:'works',label:'作品'},{id:'feeds',label:'动态'},{id:'about',label:'关于'}], variant: 'underline'",
      why: "渲染页签栏 + 点击调 context.setActiveTab，内容区订阅后自动重渲染",
    },
  ],
  props: ["defaultActiveTab=\\"works\\""],
  controls: [
    {
      key: "variant",
      label: "样式变体",
      kind: "select",
      init: "underline",
      options: [
        { label: "下划线 underline", value: "underline" },
        { label: "胶囊 pill", value: "pill" },
        { label: "分段 segmented", value: "segmented" },
      ],
    },
    { key: "sticky", label: "吸顶", kind: "switch", init: false },
    { key: "scrollTop", label: "切换滚到顶部", kind: "switch", init: true },
  ],
  stageHeight: 300,
};

const TABS = [
  { id: "works", label: "作品" },
  { id: "feeds", label: "动态" },
  { id: "about", label: "关于" },
];

export default function Stage({ cfg, log }: DemoStageProps) {
  const Profile = useMemo(
    () =>
      withPlugins(ProfileCore, [
        createTabSyncPlugin({
          tabs: TABS,
          variant: cfg.variant as "underline" | "pill" | "segmented",
          sticky: Boolean(cfg.sticky),
          scrollTopOnChange: Boolean(cfg.scrollTop),
          onChange: (id) => log(\`切换到 \${id}\`),
        }),
      ]),
    [cfg.variant, cfg.sticky, cfg.scrollTop]
  );

  return (
    <Profile
      containerStyle={{ maxWidth: 420, margin: "0 auto" }}
      defaultActiveTab="works"
    >
      <ProfileContent />
    </Profile>
  );
}
`,U1=`import React, { useMemo } from "react";
import { ProfileCore, withPlugins } from "vane-profile";
import { createVerifyBadgePlugin } from "vane-profile/custom-plugins";
import type { DemoMeta, DemoStageProps } from "./types";

/**
 * 04 · 认证徽标 VerifyBadge
 * 只装 VerifyBadge：个人/机构两种对勾浮于头图右上角。verified=false 自动隐藏。
 */
export const meta: DemoMeta = {
  slug: "verifybadge",
  title: "认证徽标 VerifyBadge",
  group: "plugin",
  plugin: "VerifyBadge",
  intro: "个人 / 机构认证对勾（内联 SVG），浮于头图右上角。",
  why: "信任标识是主页的「小但重要」需求；做成插件，认证态/类型都可配置，不污染 Core。",
  plugs: [
    {
      fn: "createVerifyBadgePlugin",
      cfg: "type: 'personal', showLabel: true",
      why: "负责认证徽标渲染，verified=false 时自动隐藏",
    },
  ],
  props: ["verified", "badgeType=\\"personal\\""],
  controls: [
    { key: "verified", label: "已认证", kind: "switch", init: true },
    {
      key: "type",
      label: "认证类型",
      kind: "select",
      init: "personal",
      options: [
        { label: "个人 personal", value: "personal" },
        { label: "机构 institution", value: "institution" },
      ],
    },
    { key: "showLabel", label: "显示文字", kind: "switch", init: true },
  ],
  stageHeight: 200,
};

export default function Stage({ cfg }: DemoStageProps) {
  const Profile = useMemo(
    () =>
      withPlugins(ProfileCore, [
        createVerifyBadgePlugin({
          type: cfg.type as "personal" | "institution",
          showLabel: Boolean(cfg.showLabel),
        }),
      ]),
    [cfg.type, cfg.showLabel]
  );

  return (
    <Profile
      containerStyle={{ maxWidth: 420, margin: "0 auto" }}
      verified={Boolean(cfg.verified)}
      badgeType={cfg.type as "personal" | "institution"}
    />
  );
}
`,W1=`import React, { useMemo } from "react";
import { ProfileCore, withPlugins } from "vane-profile";
import { createFollowEchoPlugin } from "vane-profile/custom-plugins";
import type { DemoMeta, DemoStageProps } from "./types";

/**
 * 05 · 关注回显 FollowEcho
 * 只装 FollowEcho：关注/已关注/互相关注三态按钮，受控于 props.followState。
 */
export const meta: DemoMeta = {
  slug: "followecho",
  title: "关注回显 FollowEcho",
  group: "plugin",
  plugin: "FollowEcho",
  intro: "关注 / 已关注 / 互相关注三态按钮，受控于 props.followState。",
  why: "关注关系是服务端真相；做成受控插件，点击只作乐观 UI，真相回写 props，不把状态塞进 Core。",
  plugs: [
    {
      fn: "createFollowEchoPlugin",
      cfg: "size: 'md', onFollow: (next) => api.toggleFollow(uid, next)",
      why: "负责关注按钮渲染 + 乐观切换；关系变 mutual 时触发 onMutual；mutual 状态下点击即取消关注（目标态 none），由宿主回写 followState",
    },
  ],
  props: ["followState={serverState}"],
  controls: [
    {
      key: "state",
      label: "初始关注态",
      kind: "select",
      init: "none",
      options: [
        { label: "未关注 none", value: "none" },
        { label: "已关注 following", value: "following" },
        { label: "互相关注 mutual", value: "mutual" },
      ],
    },
    {
      key: "size",
      label: "按钮尺寸",
      kind: "select",
      init: "md",
      options: [
        { label: "中 md", value: "md" },
        { label: "小 sm", value: "sm" },
      ],
    },
  ],
  stageHeight: 200,
  note: "按钮是受控展示：点击只触发 onFollow（乐观 UI），真实关系以 props.followState 为准；互相关注点一次会变为未关注。",
};

export default function Stage({ cfg, log }: DemoStageProps) {
  const Profile = useMemo(
    () =>
      withPlugins(ProfileCore, [
        createFollowEchoPlugin({
          size: cfg.size as "sm" | "md",
          onFollow: (next) => log(\`点击 → \${next}\`),
          onMutual: () => log("关系变为 mutual", "info"),
        }),
      ]),
    [cfg.size]
  );

  return (
    <Profile
      containerStyle={{ maxWidth: 420, margin: "0 auto" }}
      followState={cfg.state as "none" | "following" | "mutual"}
    />
  );
}
`,V1=`import React, { useMemo } from "react";
import { ProfileCore, withPlugins } from "vane-profile";
import { createBioSlotPlugin } from "vane-profile/custom-plugins";
import type { DemoMeta, DemoStageProps } from "./types";
import { SAMPLE_USER } from "../data/sample";

/**
 * 06 · 简介区 BioSlot
 * 单装这一个插件：只渲染头像下方的简介区（昵称 / 签名 / 地点·时间）。
 */
export const meta: DemoMeta = {
  slug: "bio",
  title: "简介区 BioSlot",
  group: "plugin",
  plugin: "BioSlot",
  intro: "昵称 + 签名 + 所在地 / 加入时间，走领域槽 renderBioArea。",
  why: "主页「我是谁」的签名档；做成插件后头图与数据行之间多了一段结构化简介，Core 永远不碰文案。",
  plugs: [
    {
      fn: "createBioSlotPlugin",
      cfg: "name: user.name, bio: user.bio, location: '上海', joinDate: '2021 加入'",
      why: "负责简介区渲染，排在头图与数据行之间；全部为空时不占空间",
    },
  ],
  props: [],
  controls: [
    { key: "showName", label: "显示昵称", kind: "switch", init: true },
    { key: "showBio", label: "显示签名", kind: "switch", init: true },
    { key: "showMeta", label: "显示地点/时间", kind: "switch", init: true },
  ],
  stageHeight: 220,
};

export default function Stage({ cfg }: DemoStageProps) {
  const Profile = useMemo(
    () =>
      withPlugins(ProfileCore, [
        createBioSlotPlugin({
          name: cfg.showName ? SAMPLE_USER.name : undefined,
          bio: cfg.showBio ? SAMPLE_USER.bio : undefined,
          location: cfg.showMeta ? "上海" : undefined,
          joinDate: cfg.showMeta ? "2021 加入" : undefined,
        }),
      ]),
    [cfg.showName, cfg.showBio, cfg.showMeta]
  );
  return <Profile containerStyle={{ maxWidth: 420, margin: "0 auto" }} />;
}
`,H1=`import React, { useMemo } from "react";
import { ProfileCore, withPlugins } from "vane-profile";
import { createSocialLinksPlugin } from "vane-profile/custom-plugins";
import type { DemoMeta, DemoStageProps } from "./types";
import { SAMPLE_LINKS } from "../data/sample";

/**
 * 07 · 社交外链 SocialLinks
 * 单装这一个插件：只渲染一排可点击的平台入口（图标字占位，无图片资源）。
 */
export const meta: DemoMeta = {
  slug: "social",
  title: "社交外链 SocialLinks",
  group: "plugin",
  plugin: "SocialLinks",
  intro: "一排可点击的平台入口（微博 / 知乎 / GitHub …），走领域槽 renderBioArea。",
  why: "主页底部的外链聚合；做成插件后入口列表完全数据驱动，Core 不掺任何平台样式。",
  plugs: [
    {
      fn: "createSocialLinksPlugin",
      cfg: "links: [...], showLabel: true, align: 'left'",
      why: "负责社交外链行渲染；常见平台有默认图标字与文案",
    },
  ],
  props: [],
  controls: [
    { key: "showLabel", label: "显示文案", kind: "switch", init: true },
    {
      key: "align",
      label: "对齐",
      kind: "select",
      init: "left",
      options: [
        { label: "左 left", value: "left" },
        { label: "中 center", value: "center" },
        { label: "右 right", value: "right" },
      ],
    },
  ],
  stageHeight: 200,
};

export default function Stage({ cfg }: DemoStageProps) {
  const Profile = useMemo(
    () =>
      withPlugins(ProfileCore, [
        createSocialLinksPlugin({
          links: SAMPLE_LINKS,
          showLabel: Boolean(cfg.showLabel),
          align: cfg.align as "left" | "center" | "right",
        }),
      ]),
    [cfg.showLabel, cfg.align]
  );
  return <Profile containerStyle={{ maxWidth: 420, margin: "0 auto" }} />;
}
`,Q1=`import React, { useMemo } from "react";
import { ProfileCore, withPlugins } from "vane-profile";
import { createTagListPlugin } from "vane-profile/custom-plugins";
import type { DemoMeta, DemoStageProps } from "./types";
import { SAMPLE_TAGS } from "../data/sample";

/**
 * 08 · 兴趣标签 TagList
 * 单装这一个插件：只渲染一排圆角小标签。
 */
export const meta: DemoMeta = {
  slug: "tags",
  title: "兴趣标签 TagList",
  group: "plugin",
  plugin: "TagList",
  intro: "一排圆角小标签，走领域槽 renderBioArea。",
  why: "兴趣 / 内容领域标记；做成插件后标签完全数据驱动，Core 不掺样式。",
  plugs: [
    {
      fn: "createTagListPlugin",
      cfg: "tags: ['React','TypeScript','组件库', …]",
      why: "负责标签行渲染；tags 为空时整体不渲染",
    },
  ],
  props: [],
  controls: [
    {
      key: "align",
      label: "对齐",
      kind: "select",
      init: "left",
      options: [
        { label: "左 left", value: "left" },
        { label: "中 center", value: "center" },
        { label: "右 right", value: "right" },
      ],
    },
  ],
  stageHeight: 160,
};

export default function Stage({ cfg }: DemoStageProps) {
  const Profile = useMemo(
    () =>
      withPlugins(ProfileCore, [
        createTagListPlugin({
          tags: SAMPLE_TAGS,
          align: cfg.align as "left" | "center" | "right",
        }),
      ]),
    [cfg.align]
  );
  return <Profile containerStyle={{ maxWidth: 420, margin: "0 auto" }} />;
}
`,G1=`import React, { useMemo } from "react";
import { ProfileCore, withPlugins, useProfileContext } from "vane-profile";
import { createTabSyncPlugin, createWorksGridPlugin } from "vane-profile/custom-plugins";
import type { DemoMeta, DemoStageProps } from "./types";
import { SAMPLE_WORKS } from "../data/sample";

/** 内容兜底：切到非作品页签时显示文本（演示「内容区由插件接管 / children 兜底」） */
function ProfileContent() {
  const ctx = useProfileContext();
  const tab = ctx?.activeTab ?? "works";
  return (
    <div style={{ minHeight: 120, fontSize: 14, lineHeight: 1.8, opacity: 0.8 }}>
      <b>{tab}</b> 页：这里放该页签的自定义内容（children 兜底）。
    </div>
  );
}

/**
 * 09 · 作品网格 WorksGrid
 * 单装这一个插件：内容区渲染作品网格，可随 activeTab 联动显示。
 */
export const meta: DemoMeta = {
  slug: "worksgrid",
  title: "作品网格 WorksGrid",
  group: "plugin",
  plugin: "WorksGrid",
  intro: "内容区作品网格（CSS grid），走领域槽 renderContentArea，可随页签联动。",
  why: "主页「内容」通常是网格；做成内容区插件后，Core 有内容插件时以它替代 children，且能与 TabSync 的 activeTab 联动。",
  plugs: [
    {
      fn: "createWorksGridPlugin",
      cfg: "items: user.works, columns: 3, tab: 'works'",
      why: "负责内容区网格渲染；tab 与 context.activeTab 联动，切到作品页才出网格",
    },
  ],
  props: ["（有 WorksGrid 时内容区由它接管，不再用 children）"],
  controls: [
    {
      key: "columns",
      label: "列数",
      kind: "number",
      init: 3,
      min: 2,
      max: 4,
      step: 1,
    },
    { key: "showTitle", label: "显示分组标题", kind: "switch", init: true },
    {
      key: "withTab",
      label: "随页签联动（含 TabSync）",
      kind: "switch",
      init: true,
    },
  ],
  stageHeight: 360,
};

const TABS = [
  { id: "works", label: "作品" },
  { id: "about", label: "关于" },
];

export default function Stage({ cfg, log }: DemoStageProps) {
  const columns = Number(cfg.columns);
  const withTab = Boolean(cfg.withTab);
  const Profile = useMemo(
    () =>
      withPlugins(ProfileCore, [
        ...(withTab
          ? [
              createTabSyncPlugin({
                tabs: TABS,
                onChange: (id) => log(\`切到 \${id}\`),
              }),
            ]
          : []),
        createWorksGridPlugin({
          items: SAMPLE_WORKS,
          columns,
          title: cfg.showTitle ? "精选作品" : undefined,
          // 勾选「随页签联动」时只在 works 页显示，配合 TabSync；
          // 否则始终显示（适合没有页签、以作品为主页内容的主页）
          tab: withTab ? "works" : undefined,
        }),
      ]),
    [withTab, columns, cfg.showTitle]
  );

  return (
    <Profile
      containerStyle={{ maxWidth: 460, margin: "0 auto" }}
      defaultActiveTab={withTab ? "works" : undefined}
    >
      {withTab ? <ProfileContent /> : null}
    </Profile>
  );
}
`,K1=`import React, { useMemo } from "react";
import { ProfileCore, withPlugins, useProfileContext } from "vane-profile";
import {
  createBannerSlotPlugin,
  createStatRowPlugin,
  createTabSyncPlugin,
  createVerifyBadgePlugin,
  createFollowEchoPlugin,
  createBioSlotPlugin,
  createSocialLinksPlugin,
  createTagListPlugin,
  createWorksGridPlugin,
  createMembershipBadgePlugin,
  createQRSharePlugin,
  createLiveStatusPlugin,
  createContactCardPlugin,
  createActivitySummaryPlugin,
  createMessageButtonPlugin,
  createAchievementWallPlugin,
} from "vane-profile/custom-plugins";
import type { ProfilePlugin } from "vane-profile";
import type { DemoMeta, DemoStageProps } from "./types";
import {
  AVATAR,
  SAMPLE_USER,
  SAMPLE_LINKS,
  SAMPLE_TAGS,
  SAMPLE_WORKS,
  SAMPLE_MEMBERSHIP,
  SAMPLE_LIVE,
  SAMPLE_CONTACT,
  SAMPLE_ACTIVITY,
  SAMPLE_ACHIEVEMENTS,
} from "../data/sample";

const TABS = [
  { id: "works", label: "作品" },
  { id: "feeds", label: "动态" },
  { id: "about", label: "关于" },
];

/** 内容兜底：非作品页签时显示文本（演示 children 兜底） */
function ProfileContent() {
  const ctx = useProfileContext();
  const tab = ctx?.activeTab ?? "works";
  return (
    <div style={{ minHeight: 120, fontSize: 14, lineHeight: 1.8, opacity: 0.8 }}>
      <b>{tab}</b> 页：Core 的 children 兜底内容。
    </div>
  );
}

/**
 * 10 · 全功能组合（高级功能）
 * 16 个插件全部可开关，实时看装配代码怎么写。这正是「插件式主页」的增量拼装方式。
 */
export const meta: DemoMeta = {
  slug: "full-combo",
  title: "全功能组合",
  group: "advanced",
  capability: "all-plugins",
  intro: "16 个官方插件逐个开关，实时生成对应装配代码。",
  why: "把分散的插件页串起来：一个主页就是「挑插件 + 写配置」，没有一行样式散落在业务里。",
  plugs: [
    { fn: "createBannerSlotPlugin", cfg: "gradient: [...], avatar: user.avatar", why: "头图区" },
    { fn: "createBioSlotPlugin", cfg: "name, bio, location, joinDate", why: "简介区" },
    { fn: "createStatRowPlugin", cfg: "items: user.stats", why: "数据行" },
    { fn: "createSocialLinksPlugin", cfg: "links: [...]", why: "社交外链" },
    { fn: "createTagListPlugin", cfg: "tags: [...]", why: "兴趣标签" },
    { fn: "createTabSyncPlugin", cfg: "tabs: [...]", why: "页签栏 + 内容联动" },
    { fn: "createVerifyBadgePlugin", cfg: "type: 'personal'", why: "认证徽标" },
    { fn: "createFollowEchoPlugin", cfg: "size: 'md'", why: "关注按钮" },
    { fn: "createWorksGridPlugin", cfg: "items: user.works, tab: 'works'", why: "作品网格（内容区）" },
    { fn: "createMembershipBadgePlugin", cfg: "level: 3", why: "会员角标（徽标区）" },
    { fn: "createQRSharePlugin", cfg: "url: user.homeUrl", why: "二维码分享（徽标区）" },
    { fn: "createLiveStatusPlugin", cfg: "status: 'live'", why: "在线/直播状态（简介区）" },
    { fn: "createContactCardPlugin", cfg: "email, site, address", why: "联系信息（简介区）" },
    { fn: "createActivitySummaryPlugin", cfg: "lastActive, postsThisMonth", why: "活跃度小结（简介区）" },
    { fn: "createMessageButtonPlugin", cfg: "label: '私信'", why: "私信按钮（关注区）" },
    { fn: "createAchievementWallPlugin", cfg: "items: user.badges, tab: 'about'", why: "成就墙（内容区）" },
  ],
  props: ["verified", "stats={user.stats}", "followState={serverState}"],
  controls: [
    { key: "banner", label: "BannerSlot", kind: "switch", init: true },
    { key: "bio", label: "BioSlot", kind: "switch", init: true },
    { key: "stat", label: "StatRow", kind: "switch", init: true },
    { key: "social", label: "SocialLinks", kind: "switch", init: true },
    { key: "tags", label: "TagList", kind: "switch", init: true },
    { key: "tab", label: "TabSync", kind: "switch", init: true },
    { key: "badge", label: "VerifyBadge", kind: "switch", init: true },
    { key: "follow", label: "FollowEcho", kind: "switch", init: true },
    { key: "works", label: "WorksGrid", kind: "switch", init: true },
    { key: "membership", label: "MembershipBadge", kind: "switch", init: true },
    { key: "qrshare", label: "QRShare", kind: "switch", init: true },
    { key: "live", label: "LiveStatus", kind: "switch", init: true },
    { key: "contact", label: "ContactCard", kind: "switch", init: true },
    { key: "activity", label: "ActivitySummary", kind: "switch", init: true },
    { key: "message", label: "MessageButton", kind: "switch", init: true },
    { key: "achievements", label: "AchievementWall", kind: "switch", init: true },
  ],
  stageHeight: 560,
};

export default function Stage({ cfg }: DemoStageProps) {
  const withTab = Boolean(cfg.tab);

  const Profile = useMemo(() => {
    const plugs: ProfilePlugin<unknown>[] = [];
    if (cfg.banner)
      plugs.push(
        createBannerSlotPlugin({
          gradient: ["#6a11cb", "#1a5fd0"],
          avatar: AVATAR,
          avatarRound: true,
          height: 150,
          overlay: <strong>{SAMPLE_USER.name}</strong>,
        })
      );
    if (cfg.bio)
      plugs.push(
        createBioSlotPlugin({
          name: SAMPLE_USER.name,
          subtitle: "前端工程师 · 组件库作者",
          bio: SAMPLE_USER.bio,
          location: "上海",
          joinDate: "2021 加入",
        })
      );
    if (cfg.stat) plugs.push(createStatRowPlugin({ items: SAMPLE_USER.stats }));
    if (cfg.social) plugs.push(createSocialLinksPlugin({ links: SAMPLE_LINKS }));
    if (cfg.tags) plugs.push(createTagListPlugin({ tags: SAMPLE_TAGS }));
    if (withTab) plugs.push(createTabSyncPlugin({ tabs: TABS }));
    if (cfg.badge) plugs.push(createVerifyBadgePlugin({ type: "personal" }));
    if (cfg.follow) plugs.push(createFollowEchoPlugin({ size: "md" }));
    if (cfg.works)
      plugs.push(
        createWorksGridPlugin({
          items: SAMPLE_WORKS,
          columns: 3,
          title: "精选作品",
          tab: withTab ? "works" : undefined,
        })
      );
    if (cfg.membership) plugs.push(createMembershipBadgePlugin(SAMPLE_MEMBERSHIP));
    if (cfg.qrshare) plugs.push(createQRSharePlugin({ url: "https://vane.dev/u/frankvane" }));
    if (cfg.live) plugs.push(createLiveStatusPlugin(SAMPLE_LIVE));
    if (cfg.contact) plugs.push(createContactCardPlugin(SAMPLE_CONTACT));
    if (cfg.activity) plugs.push(createActivitySummaryPlugin(SAMPLE_ACTIVITY));
    if (cfg.message) plugs.push(createMessageButtonPlugin({ label: "私信" }));
    if (cfg.achievements)
      plugs.push(
        createAchievementWallPlugin({
          items: SAMPLE_ACHIEVEMENTS,
          columns: 4,
          title: "成就",
          tab: withTab ? "about" : undefined,
        })
      );
    return withPlugins(ProfileCore, plugs);
  }, [
    cfg.banner, cfg.bio, cfg.stat, cfg.social, cfg.tags, withTab, cfg.badge,
    cfg.follow, cfg.works, cfg.membership, cfg.qrshare, cfg.live, cfg.contact,
    cfg.activity, cfg.message, cfg.achievements,
  ]);

  return (
    <Profile
      containerStyle={{ maxWidth: 460, margin: "0 auto" }}
      stats={SAMPLE_USER.stats}
      verified={Boolean(cfg.badge)}
      badgeType="personal"
      followState="none"
      banner={<span>@{SAMPLE_USER.handle}</span>}
      defaultActiveTab={withTab ? "works" : undefined}
    >
      {withTab ? <ProfileContent /> : null}
    </Profile>
  );
}
`,Y1=`import React, { useMemo, useRef, useState } from "react";
import { ProfileCore, withPlugins } from "vane-profile";
import type { ProfileCoreRef, FollowState } from "vane-profile";
import { createBannerSlotPlugin, createStatRowPlugin, createFollowEchoPlugin } from "vane-profile/custom-plugins";
import type { DemoMeta, DemoStageProps } from "./types";
import { AVATAR, SAMPLE_USER } from "../data/sample";

/**
 * 11 · 受控与事件（高级功能）
 * followState 由外部状态驱动（props 受控），点击关注触发 onFollow / onMutual；
 * 经 coreRef 可读取 activeTab、强制刷新、量取容器尺寸。
 */
export const meta: DemoMeta = {
  slug: "dynamic-control",
  title: "受控与事件",
  group: "advanced",
  capability: "controlled-state",
  intro: "followState 走 props 受控，点击关注回调 onFollow / onMutual，coreRef 读状态与强刷。",
  why: "真实业务里关注关系是服务端真相，UI 只是乐观回显；这页演示怎么把插件接到你自己的状态机。",
  plugs: [
    { fn: "createFollowEchoPlugin", cfg: "onFollow, onMutual", why: "受控三态按钮 + 回调" },
  ],
  props: ["followState={serverState}", "onFollow", "onMutual"],
  controls: [],
  stageHeight: 300,
};

const STATES: FollowState[] = ["none", "following", "mutual"];
const LABEL: Record<FollowState, string> = { none: "未关注", following: "已关注", mutual: "互相关注" };

export default function Stage({ cfg, log }: DemoStageProps) {
  const [state, setState] = useState<FollowState>("none");
  const coreRef = useRef<ProfileCoreRef>(null);

  const Profile = useMemo(
    () =>
      withPlugins(ProfileCore, [
        createBannerSlotPlugin({
          gradient: ["#1a5fd0", "#6a11cb"],
          avatar: AVATAR,
          avatarRound: true,
          height: 140,
          overlay: <strong>{SAMPLE_USER.name}</strong>,
        }),
        createStatRowPlugin({ items: SAMPLE_USER.stats }),
        createFollowEchoPlugin({
          size: "md",
          onFollow: (next) => {
            setState(next);
            log(\`onFollow → \${next}\`, "event");
          },
          onMutual: (next) => log(\`onMutual → \${next}（关系变为互相关注）\`, "info"),
        }),
      ]),
    []
  );

  return (
    <div>
      <div style={{ display: "flex", gap: 8, marginBottom: 12, flexWrap: "wrap" }}>
        {STATES.map((s) => (
          <button
            key={s}
            type="button"
            onClick={() => {
              setState(s);
              log(\`外部设置 followState = \${s}\`);
            }}
            style={{
              padding: "6px 12px",
              borderRadius: 8,
              border: "1px solid rgba(125,130,140,0.4)",
              background: state === s ? "#1a5fd0" : "transparent",
              color: state === s ? "#fff" : "inherit",
              cursor: "pointer",
            }}
          >
            {LABEL[s]}
          </button>
        ))}
        <button
          type="button"
          onClick={() => {
            const t = coreRef.current?.getActiveTab();
            const size = coreRef.current?.getSize();
            log(\`coreRef: activeTab=\${t}, 容器=\${size?.width}×\${size?.height}\`, "info");
          }}
          style={{
            padding: "6px 12px",
            borderRadius: 8,
            border: "1px dashed rgba(125,130,140,0.5)",
            background: "transparent",
            color: "inherit",
            cursor: "pointer",
          }}
        >
          读 coreRef
        </button>
        <button
          type="button"
          onClick={() => coreRef.current?.forceUpdate()}
          style={{
            padding: "6px 12px",
            borderRadius: 8,
            border: "1px dashed rgba(125,130,140,0.5)",
            background: "transparent",
            color: "inherit",
            cursor: "pointer",
          }}
        >
          强制刷新
        </button>
      </div>

      <Profile
        ref={coreRef}
        containerStyle={{ maxWidth: 420, margin: "0 auto" }}
        stats={SAMPLE_USER.stats}
        followState={state}
        banner={<span>@{SAMPLE_USER.handle}</span>}
      />
    </div>
  );
}
`,X1=`import React, { useMemo } from "react";
import { ProfileCore, withPlugins } from "vane-profile";
import { createBannerSlotPlugin, createMembershipBadgePlugin } from "vane-profile/custom-plugins";
import type { DemoMeta, DemoStageProps } from "./types";
import { AVATAR, SAMPLE_USER } from "../data/sample";

/**
 * 12 · 会员角标 MembershipBadge
 * 单看这一个插件：浮于头图右上的 VIP 角标（与认证徽标同区并排）。
 */
export const meta: DemoMeta = {
  slug: "membership",
  title: "会员角标 MembershipBadge",
  group: "plugin",
  plugin: "MembershipBadge",
  intro: "会员 / VIP 等级角标，浮于头图右上，与认证徽标同区并排。",
  why: "付费会员 / 社区等级的可视标识；做成插件后头图右上多了一块身份区，Core 不碰配色。",
  plugs: [
    {
      fn: "createBannerSlotPlugin",
      cfg: "avatar: user.avatar, overlay: user.name",
      why: "提供头图背景，让角标落在它应有的右上角",
    },
    {
      fn: "createMembershipBadgePlugin",
      cfg: "level: {{level}}, showLabel: true",
      why: "负责会员角标渲染，与 VerifyBadge / QRShare 横向并排",
    },
  ],
  props: [],
  controls: [
    {
      key: "level",
      label: "等级",
      kind: "select",
      init: "3",
      options: [
        { label: "VIP1", value: "1" },
        { label: "VIP2", value: "2" },
        { label: "VIP3", value: "3" },
      ],
    },
  ],
  stageHeight: 220,
};

export default function Stage({ cfg }: DemoStageProps) {
  const Profile = useMemo(
    () =>
      withPlugins(ProfileCore, [
        createBannerSlotPlugin({
          gradient: ["#6a11cb", "#1a5fd0"],
          avatar: AVATAR,
          overlay: SAMPLE_USER.name,
        }),
        createMembershipBadgePlugin({ level: Number(cfg.level) as 1 | 2 | 3 }),
      ]),
    [cfg.level]
  );
  return <Profile containerStyle={{ maxWidth: 420, margin: "0 auto" }} />;
}
`,Z1=`import React, { useMemo } from "react";
import { ProfileCore, withPlugins } from "vane-profile";
import { createBannerSlotPlugin, createQRSharePlugin } from "vane-profile/custom-plugins";
import type { DemoMeta, DemoStageProps } from "./types";
import { AVATAR, SAMPLE_USER } from "../data/sample";

/**
 * 13 · 二维码分享 QRShare
 * 单看这一个插件：头图右上的「分享」按钮，点击展开二维码 + 复制链接。
 */
export const meta: DemoMeta = {
  slug: "qrshare",
  title: "二维码分享 QRShare",
  group: "plugin",
  plugin: "QRShare",
  intro: "主页二维码分享：浮于头图右上的分享按钮，点击展开二维码与复制链接。",
  why: "主页传播入口；做成插件后头图右上多了一块交互区，弹层用内部 state 控制，不污染 Core。",
  plugs: [
    {
      fn: "createBannerSlotPlugin",
      cfg: "avatar: user.avatar, overlay: user.name",
      why: "提供头图背景，让分享按钮落在它应有的右上角",
    },
    {
      fn: "createQRSharePlugin",
      cfg: "url: user.homeUrl, buttonLabel: '分享'",
      why: "负责分享按钮与弹层，与 VerifyBadge / MembershipBadge 横向并排",
    },
  ],
  props: [],
  controls: [],
  stageHeight: 240,
  note: "点击右上角「分享」按钮查看二维码占位面板（装饰性点阵，非真实可扫码）。",
};

export default function Stage({ cfg }: DemoStageProps) {
  const Profile = useMemo(
    () =>
      withPlugins(ProfileCore, [
        createBannerSlotPlugin({
          gradient: ["#6a11cb", "#1a5fd0"],
          avatar: AVATAR,
          overlay: SAMPLE_USER.name,
        }),
        createQRSharePlugin({ url: "https://vane.dev/u/frankvane" }),
      ]),
    []
  );
  return <Profile containerStyle={{ maxWidth: 420, margin: "0 auto" }} />;
}
`,J1=`import React, { useMemo } from "react";
import { ProfileCore, withPlugins } from "vane-profile";
import { createLiveStatusPlugin } from "vane-profile/custom-plugins";
import type { DemoMeta, DemoStageProps } from "./types";
import type { LiveStatusKind } from "vane-profile/custom-plugins/LiveStatusPlugin";

/**
 * 14 · 在线状态 LiveStatus
 * 单看这一个插件：简介区里的一行状态（在线 / 离开 / 忙碌 / 离线 / 直播中）。
 */
export const meta: DemoMeta = {
  slug: "livestatus",
  title: "在线状态 LiveStatus",
  group: "plugin",
  plugin: "LiveStatus",
  intro: "在线 / 直播状态指示：圆点 + 文案，直播态高亮。",
  why: "主播 / 客服 / 社区的实时状态；做成插件后简介区多了一块状态行，Core 不碰业务。",
  plugs: [
    {
      fn: "createLiveStatusPlugin",
      cfg: "status: '{{status}}', liveTitle: '前端架构夜聊'",
      why: "负责状态行渲染，排在简介区，与 BioSlot / SocialLinks 同区串联",
    },
  ],
  props: [],
  controls: [
    {
      key: "status",
      label: "状态",
      kind: "select",
      init: "live",
      options: [
        { label: "在线", value: "online" },
        { label: "离开", value: "away" },
        { label: "忙碌", value: "busy" },
        { label: "离线", value: "offline" },
        { label: "直播中", value: "live" },
      ],
    },
  ],
  stageHeight: 120,
};

export default function Stage({ cfg }: DemoStageProps) {
  const Profile = useMemo(
    () =>
      withPlugins(ProfileCore, [
        createLiveStatusPlugin({
          status: cfg.status as LiveStatusKind,
          liveTitle: "前端架构夜聊",
        }),
      ]),
    [cfg.status]
  );
  return <Profile containerStyle={{ maxWidth: 420, margin: "0 auto" }} />;
}
`,q1=`import React, { useMemo } from "react";
import { ProfileCore, withPlugins } from "vane-profile";
import { createContactCardPlugin } from "vane-profile/custom-plugins";
import type { DemoMeta, DemoStageProps } from "./types";
import { SAMPLE_CONTACT } from "../data/sample";

/**
 * 15 · 联系信息 ContactCard
 * 单看这一个插件：简介区里的联系信息行（邮箱 / 电话 / 官网 / 地址，安全链接）。
 */
export const meta: DemoMeta = {
  slug: "contact",
  title: "联系信息 ContactCard",
  group: "plugin",
  plugin: "ContactCard",
  intro: "联系信息卡：邮箱 / 电话 / 官网 / 地址，安全链接。",
  why: "商家 / 创作者公开联系方式；做成插件后简介区多了一块联系入口，外链带 rel 防钓鱼。",
  plugs: [
    {
      fn: "createContactCardPlugin",
      cfg: "email: user.email, site: user.site, address: user.address",
      why: "负责联系信息渲染，排在简介区，与 BioSlot / SocialLinks 同区串联",
    },
  ],
  props: [],
  controls: [],
  stageHeight: 120,
};

export default function Stage({ cfg }: DemoStageProps) {
  const Profile = useMemo(
    () => withPlugins(ProfileCore, [createContactCardPlugin(SAMPLE_CONTACT)]),
    []
  );
  return <Profile containerStyle={{ maxWidth: 460, margin: "0 auto" }} />;
}
`,ew=`import React, { useMemo } from "react";
import { ProfileCore, withPlugins } from "vane-profile";
import { createActivitySummaryPlugin } from "vane-profile/custom-plugins";
import type { DemoMeta, DemoStageProps } from "./types";
import { SAMPLE_ACTIVITY } from "../data/sample";

/**
 * 16 · 活跃度小结 ActivitySummary
 * 单看这一个插件：简介区里的一行轻量数据（最近活跃 / 本月发布 / 总阅读）。
 */
export const meta: DemoMeta = {
  slug: "activity",
  title: "活跃度小结 ActivitySummary",
  group: "plugin",
  plugin: "ActivitySummary",
  intro: "活跃度小结：最近活跃 / 本月发布 / 总阅读，一行小字。",
  why: "创作者活跃度 / 社区粘性提示；做成插件后简介区多了一块轻量数据，不抢主体。",
  plugs: [
    {
      fn: "createActivitySummaryPlugin",
      cfg: "lastActive: '2 小时前', postsThisMonth: 12, totalViews: '120w'",
      why: "负责活跃度小结渲染，排在简介区，与 BioSlot / SocialLinks 同区串联",
    },
  ],
  props: [],
  controls: [],
  stageHeight: 120,
};

export default function Stage({ cfg }: DemoStageProps) {
  const Profile = useMemo(
    () => withPlugins(ProfileCore, [createActivitySummaryPlugin(SAMPLE_ACTIVITY)]),
    []
  );
  return <Profile containerStyle={{ maxWidth: 460, margin: "0 auto" }} />;
}
`,tw=`import React, { useMemo } from "react";
import { ProfileCore, withPlugins } from "vane-profile";
import {
  createFollowEchoPlugin,
  createMessageButtonPlugin,
} from "vane-profile/custom-plugins";
import type { DemoMeta, DemoStageProps } from "./types";

/**
 * 17 · 私信按钮 MessageButton
 * 单看这一个插件：关注区里与 FollowEcho 并排的「私信」按钮。
 */
export const meta: DemoMeta = {
  slug: "message",
  title: "私信按钮 MessageButton",
  group: "plugin",
  plugin: "MessageButton",
  intro: "私信按钮：与关注回显同区并排，点击拉起会话。",
  why: "主页一对一沟通入口；做成插件后关注区多了一块描边按钮，与关注形成主次。",
  plugs: [
    {
      fn: "createFollowEchoPlugin",
      cfg: "size: 'md'",
      why: "提供关注态，让私信按钮落在它应有的并排位置",
    },
    {
      fn: "createMessageButtonPlugin",
      cfg: "label: '私信', onMessage: () => openChat(uid)",
      why: "负责私信按钮渲染，与 FollowEcho 横向并排",
    },
  ],
  props: [],
  controls: [
    { key: "showMsg", label: "显示私信按钮", kind: "switch", init: true },
  ],
  stageHeight: 120,
};

export default function Stage({ cfg }: DemoStageProps) {
  const Profile = useMemo(
    () =>
      withPlugins(ProfileCore, [
        createFollowEchoPlugin({ size: "md", state: "following" }),
        ...(cfg.showMsg
          ? [createMessageButtonPlugin({ label: "私信", onMessage: () => {} })]
          : []),
      ]),
    [cfg.showMsg]
  );
  return <Profile containerStyle={{ maxWidth: 420, margin: "0 auto" }} />;
}
`,nw=`import React, { useMemo } from "react";
import { ProfileCore, withPlugins } from "vane-profile";
import { createAchievementWallPlugin } from "vane-profile/custom-plugins";
import type { DemoMeta, DemoStageProps } from "./types";
import { SAMPLE_ACHIEVEMENTS } from "../data/sample";

/**
 * 18 · 成就墙 AchievementWall
 * 单看这一个插件：内容区的成就 / 勋章网格（随 activeTab 联动）。
 */
export const meta: DemoMeta = {
  slug: "achievements",
  title: "成就墙 AchievementWall",
  group: "plugin",
  plugin: "AchievementWall",
  intro: "成就 / 勋章墙：随 activeTab 联动的内容区插件。",
  why: "个人主页荣誉展示；做成内容区插件后，切到对应页签才出墙，与 WorksGrid 同区可共存。",
  plugs: [
    {
      fn: "createAchievementWallPlugin",
      cfg: "items: user.badges, columns: 4, title: '成就'",
      why: "负责成就墙渲染，走 renderContentArea，有它时接管 children",
    },
  ],
  props: [],
  controls: [
    {
      key: "columns",
      label: "列数",
      kind: "number",
      init: 4,
      min: 2,
      max: 8,
      step: 1,
    },
  ],
  stageHeight: 240,
};

export default function Stage({ cfg }: DemoStageProps) {
  const Profile = useMemo(
    () =>
      withPlugins(ProfileCore, [
        createAchievementWallPlugin({
          items: SAMPLE_ACHIEVEMENTS,
          columns: Number(cfg.columns),
          title: "成就",
        }),
      ]),
    [cfg.columns]
  );
  return <Profile containerStyle={{ maxWidth: 480, margin: "0 auto" }} />;
}
`,rw=Object.assign({"./00-quickstart.tsx":R0,"./01-banner.tsx":M0,"./02-statrow.tsx":$0,"./03-tabsync.tsx":D0,"./04-verifybadge.tsx":W0,"./05-followecho.tsx":Q0,"./06-bio.tsx":Y0,"./07-social.tsx":J0,"./08-tags.tsx":t1,"./09-worksgrid.tsx":i1,"./10-full-combo.tsx":f1,"./11-dynamic-control.tsx":h1,"./12-membership.tsx":w1,"./13-qrshare.tsx":P1,"./14-livestatus.tsx":C1,"./15-contact.tsx":T1,"./16-activity.tsx":L1,"./17-message.tsx":A1,"./18-achievements.tsx":z1}),ow=Object.assign({"./00-quickstart.tsx":O1,"./01-banner.tsx":I1,"./02-statrow.tsx":D1,"./03-tabsync.tsx":F1,"./04-verifybadge.tsx":U1,"./05-followecho.tsx":W1,"./06-bio.tsx":V1,"./07-social.tsx":H1,"./08-tags.tsx":Q1,"./09-worksgrid.tsx":G1,"./10-full-combo.tsx":K1,"./11-dynamic-control.tsx":Y1,"./12-membership.tsx":X1,"./13-qrshare.tsx":Z1,"./14-livestatus.tsx":J1,"./15-contact.tsx":q1,"./16-activity.tsx":ew,"./17-message.tsx":tw,"./18-achievements.tsx":nw}),lw=e=>e.replace(/^\.\//,""),xi=Object.entries(rw).map(([e,t])=>{const n=lw(e);return{meta:t.meta,Stage:t.default,file:n,source:ow[e]??""}}).sort((e,t)=>e.file.localeCompare(t.file)),iw=["basic","advanced","plugin"],Ww=Array.from(new Set(xi.map(e=>e.meta.plugin).filter(e=>!!e))).sort(),Pi={basic:{label:"基础功能",hint:"Core 自身的 props"},advanced:{label:"高级功能",hint:"ref / 事件 / 杂项配置"},plugin:{label:"插件功能",hint:"一插件一页"}};function pu(e){const t={};for(const n of e.controls??[])t[n.key]=n.init;return t}const aw="import|from|export|default|function|return|const|let|var|new|if|else|for|of|in|while|switch|case|break|continue|type|interface|extends|implements|as|satisfies|await|async|throw|try|catch|finally|class|typeof|instanceof|delete|void|yield",sw="true|false|null|undefined|this|super",uw="number|string|boolean|object|any|unknown|never|React|HTMLElement|void",gu=new RegExp([String.raw`(\/\/[^\n]*|\/\*[\s\S]*?\*\/)`,String.raw`(\`(?:\\[\s\S]|[^\\\`])*\`|"(?:\\[\s\S]|[^\\"])*"|'(?:\\[\s\S]|[^\\'])*')`,String.raw`\b(${aw})\b`,String.raw`\b(${sw})\b`,String.raw`\b(${uw})\b`,String.raw`(<\/?[A-Za-z][\w.$]*)`,String.raw`\b(\d+(?:\.\d+)?)\b`].join("|"),"g"),mu=["tok-comment","tok-string","tok-kw","tok-lit","tok-type","tok-tag","tok-num"];function cw(e){const t=[];let n=0;gu.lastIndex=0;let r;for(;r=gu.exec(e);){r.index>n&&t.push({text:e.slice(n,r.index),cls:null});const o=mu.findIndex((l,i)=>r[i+1]!==void 0);t.push({text:r[0],cls:o>=0?mu[o]:null}),n=r.index+r[0].length}return n<e.length&&t.push({text:e.slice(n),cls:null}),t}function hu(e){try{const t=document.createElement("textarea");t.value=e,t.setAttribute("readonly",""),t.style.position="fixed",t.style.opacity="0",document.body.appendChild(t),t.select();const n=document.execCommand("copy");return document.body.removeChild(t),n}catch{return!1}}function fw({code:e,title:t="tsx",collapseAfter:n=24,maxHeight:r}){const[o,l]=v.useState("idle"),[i,s]=v.useState(!1),a=v.useMemo(()=>e.replace(/\s+$/,"").split(`
`),[e]),u=n>0&&a.length>n,d=u&&!i?a.slice(0,n).join(`
`):e,f=v.useMemo(()=>cw(d),[d]),g=v.useCallback(async()=>{var w;let y=!1;if((w=navigator.clipboard)!=null&&w.writeText)try{await navigator.clipboard.writeText(e),y=!0}catch{y=hu(e)}else y=hu(e);l(y?"ok":"fail"),window.setTimeout(()=>l("idle"),1600)},[e]);return c.jsxs("div",{className:"code",children:[c.jsxs("div",{className:"code-head",children:[c.jsx("span",{children:t}),c.jsxs("span",{style:{display:"flex",gap:6,alignItems:"center"},children:[c.jsxs("span",{children:[a.length," 行"]}),c.jsx("button",{type:"button",className:`code-copy${o==="ok"?" is-ok":o==="fail"?" is-fail":""}`,onClick:g,children:o==="ok"?"已复制":o==="fail"?"复制失败":"复制"})]})]}),c.jsx("pre",{style:r?{maxHeight:r}:void 0,children:c.jsx("code",{children:f.map((y,w)=>y.cls?c.jsx("span",{className:y.cls,children:y.text},w):c.jsx(Pn.Fragment,{children:y.text},w))})}),u?c.jsx("button",{type:"button",className:"code-more",onClick:()=>s(y=>!y),children:i?"收起":`展开余下 ${a.length-n} 行`}):null]})}const dw=/\{\{\s*([\w-]+)\s*\}\}/g;function vu(e,t){return e.replace(dw,(n,r)=>r in t?String(t[r]):n)}function pw(e,t){const n=e.plugs.map(a=>a.fn).sort(),r=n.length>3,o=n.length?r?`import {
${n.map(a=>`  ${a},`).join(`
`)}
} from "vane-profile/custom-plugins";`:`import { ${n.join(", ")} } from "vane-profile/custom-plugins";`:"// 这一页只用 Core props，不需要任何插件",l=e.plugs.map(a=>`  ${a.fn}(${a.cfg?`{ ${vu(a.cfg,t)} }`:""}),`).join(`
`),i=e.props.filter(a=>typeof a=="string"||!a.when||a.when(t)).map(a=>`      ${vu(typeof a=="string"?a:a.text,t)}`).join(`
`),s=e.plugs.length?`const Profile = withPlugins(ProfileCore, [
${l}
]);`:"const Profile = ProfileCore;";return`// ${e.title} · 最小装配（照抄即可跑）
import { ProfileCore, withPlugins } from "vane-profile";
${o}

type User = { id: string; name: string; handle: string; verified?: boolean };

${s}

export default function Demo({ user }: { user: User }) {
  return (
    <Profile
      banner={<span>@{user.handle}</span>}
${i}
    />
  );
}
`}function gw({controls:e,cfg:t,onChange:n}){return c.jsx("div",{className:"ctl-bar",children:e.filter(r=>!r.when||r.when(t)).map(r=>{const o=t[r.key];return c.jsxs("label",{className:"ctl",title:r.hint,children:[c.jsxs("span",{className:"ctl-label",children:[r.label,c.jsx("b",{className:"ctl-val",children:r.kind==="switch"?o?"开":"关":String(o)})]}),r.kind==="switch"?c.jsx("button",{type:"button",className:`ctl-switch${o?" is-on":""}`,onClick:()=>n(r.key,!o),"aria-pressed":!!o,children:c.jsx("i",{})}):r.kind==="select"?c.jsx("select",{className:"ctl-select",value:String(o),onChange:l=>n(r.key,l.target.value),children:(r.options??[]).map(l=>c.jsx("option",{value:l.value,children:l.label},l.value))}):c.jsx("input",{className:"ctl-range",type:"range",min:r.min??0,max:r.max??100,step:r.step??1,value:Number(o),onChange:l=>n(r.key,Number(l.target.value))})]},r.key)})})}function mw({lines:e,title:t="事件日志",empty:n="还没触发 —— 试着滚动、点一张卡",right:r}){return c.jsxs("div",{className:"log",children:[c.jsxs("div",{className:"log-head",children:[c.jsx("span",{children:t}),c.jsxs("span",{className:"log-right",children:[r,c.jsx("b",{children:e.length})]})]}),e.length===0?c.jsx("p",{className:"log-empty",children:n}):c.jsx("ol",{className:"log-list",children:e.map(o=>c.jsxs("li",{className:`log-line is-${o.kind}`,children:[c.jsx("time",{children:o.at}),c.jsx("span",{children:o.text})]},o.id))})]})}function hw({entry:e,order:t}){var S;const{meta:n,Stage:r,file:o,source:l}=e,[i,s]=v.useState(()=>pu(n)),[a,u]=v.useState([]),[d,f]=v.useState("minimal"),g=v.useCallback((P,m="event")=>{const p=new Date().toLocaleTimeString("zh-CN",{hour12:!1});u(h=>[{id:h.length+1,at:p,text:P,kind:m},...h].slice(0,60))},[]),y=v.useCallback((P,m)=>{s(p=>({...p,[P]:m}))},[]),w=v.useMemo(()=>pw(n,i),[n,i]);return c.jsxs("section",{className:"demo","data-demo":n.slug,children:[c.jsxs("header",{className:"demo-head",children:[c.jsxs("div",{className:"demo-folio",children:[c.jsx("span",{className:"demo-no",children:String(t).padStart(2,"0")}),c.jsx("em",{children:"plate"})]}),c.jsxs("div",{children:[c.jsxs("div",{className:"demo-title-row",children:[c.jsx("h2",{children:n.title}),c.jsx("span",{className:"demo-group",children:Pi[n.group].label}),n.plugin?c.jsx("code",{className:"demo-plugin",children:n.plugin}):null]}),c.jsx("p",{className:"demo-intro",children:n.intro}),c.jsxs("p",{className:"demo-why",children:[c.jsx("b",{children:"什么时候用"}),n.why]})]}),c.jsxs("div",{className:"demo-meta",children:[c.jsxs("div",{className:"demo-meta-row",children:[c.jsx("span",{children:"file"}),c.jsx("b",{children:o})]}),c.jsxs("div",{className:"demo-meta-row",children:[c.jsx("span",{children:"group"}),c.jsx("b",{children:Pi[n.group].label})]}),c.jsxs("div",{className:"demo-meta-row",children:[c.jsx("span",{children:"plugs"}),c.jsx("b",{children:n.plugs.length?`${n.plugs.length} installed`:"core only"})]})]})]}),(S=n.controls)!=null&&S.length?c.jsxs("div",{className:"demo-controls",children:[c.jsx(gw,{controls:n.controls,cfg:i,onChange:y}),c.jsx("button",{type:"button",className:"demo-reset",onClick:()=>{s(pu(n)),u([])},children:"重置"})]}):null,c.jsxs("div",{className:"demo-body",children:[c.jsxs("figure",{className:"plate",children:[c.jsxs("figcaption",{className:"plate-cap",children:[c.jsx("b",{children:"stage"}),c.jsxs("span",{children:[n.tone==="light"?"light surface":"live render",n.stageHeight?` · ${n.stageHeight}px`:""]}),c.jsx("em",{children:"live"})]}),c.jsx("div",{className:"plate-ruler","aria-hidden":!0}),c.jsx("div",{className:`plate-body demo-stage${n.tone==="light"?" tone-light":""}`,style:{"--stage-h":`${n.stageHeight??380}px`},children:c.jsx(r,{cfg:i,log:g,setCfg:y})})]}),c.jsxs("aside",{className:"demo-side",children:[c.jsx("div",{className:"demo-plugs",children:n.plugs.length===0?c.jsx("span",{className:"demo-plug is-core",children:"仅 Core props"}):n.plugs.map(P=>c.jsx("span",{className:`demo-plug${P.local?" is-local":""}`,children:P.fn.replace(/^create|Plugin$/g,"")},P.fn))}),c.jsx("ul",{className:"demo-why-list",children:n.plugs.map(P=>c.jsxs("li",{children:[c.jsx("code",{children:P.fn}),c.jsx("span",{children:P.why})]},P.fn))}),n.note?c.jsxs("p",{className:"demo-note",children:["⚠ ",n.note]}):null,c.jsx(mw,{lines:a,empty:n.plugs.length>0?"还没触发 —— 拖上面的控件，或滚动 / 点卡片":"这一页没有事件类行为，日志留白"})]})]}),c.jsxs("div",{className:"demo-code",children:[c.jsxs("div",{className:"demo-switch",role:"tablist",children:[c.jsx("button",{type:"button",role:"tab","aria-selected":d==="minimal",className:d==="minimal"?"is-active":"",onClick:()=>f("minimal"),children:"最小装配"}),c.jsx("button",{type:"button",role:"tab","aria-selected":d==="full",className:d==="full"?"is-active":"",onClick:()=>f("full"),children:"完整源码"})]}),c.jsx(fw,{code:d==="minimal"?w:l,title:d==="minimal"?`${n.slug}.minimal.tsx`:o,collapseAfter:d==="minimal"?0:26,maxHeight:420},d)]})]})}const vw=`import type React from "react";
import type {
  ProfilePlugin,
  ProfilePluginContext,
} from "../../components/ProfilePlugin/plugins/types";
import doc from "./doc.json";

export interface AchievementItem {
  /** 唯一 id */
  id: string;
  /** 成就标题 */
  title: string;
  /** 成就描述 */
  desc?: string;
  /** 图标字（单/双字占位，无图片资源） */
  glyph?: string;
  /** 图标底色 */
  color?: string;
}

export interface AchievementWallConfig {
  /** 成就列表 */
  items?: AchievementItem[];
  /** 网格列数，默认 4 */
  columns?: number;
  /** 卡片间距（px），默认 10 */
  gap?: number;
  /** 仅在某个页签激活时显示（与 TabSync 联动）；不填则始终显示 */
  tab?: string;
  /** 分组标题 */
  title?: React.ReactNode;
  /** 空列表占位文案 */
  empty?: React.ReactNode;
}

/**
 * AchievementWall - 成就 / 勋章墙：随 activeTab 联动的内容区插件。
 *
 * 走领域槽 \`renderContentArea\`（Core 有内容插件时以它替代 children）。
 * config.tab 与 context.activeTab 联动：切到对应页签才出墙。
 */
export function createAchievementWallPlugin<T = any>(
  config: AchievementWallConfig = {}
): ProfilePlugin<T> {
  const {
    items = [],
    columns = 4,
    gap = 10,
    tab,
    title,
    empty = "暂无成就",
  } = config;
  return {
    name: "AchievementWall",
    version: "0.1.0",
    description: "成就 / 勋章墙：随 activeTab 联动的内容区插件。",
    priority: 10,
    enabled: true,
    hooks: {
      renderContentArea: (context: ProfilePluginContext<T>) => {
        if (tab && context.activeTab !== tab) return null;
        if (!items.length)
          return (
            <div className="vp-achievements-empty" style={{ padding: 16, color: "#6b6b6b" }}>
              {empty}
            </div>
          );
        return (
          <div className="vp-achievements" style={{ padding: 4 }}>
            {title && (
              <div style={{ fontWeight: 600, margin: "0 0 10px" }}>{title}</div>
            )}
            <div
              style={{
                display: "grid",
                gridTemplateColumns: \`repeat(\${columns}, 1fr)\`,
                gap,
              }}
            >
              {items.map((it) => (
                <div
                  key={it.id}
                  title={it.desc}
                  style={{
                    display: "flex",
                    flexDirection: "column",
                    alignItems: "center",
                    gap: 6,
                    padding: 12,
                    borderRadius: 12,
                    background: "rgba(125,130,140,0.1)",
                    border: "1px solid rgba(125,130,140,0.18)",
                    textAlign: "center",
                  }}
                >
                  <span
                    aria-hidden
                    style={{
                      width: 40,
                      height: 40,
                      borderRadius: "50%",
                      background: it.color ?? "#1a5fd0",
                      color: "#fff",
                      display: "inline-flex",
                      alignItems: "center",
                      justifyContent: "center",
                      fontSize: 16,
                      fontWeight: 700,
                    }}
                  >
                    {it.glyph ?? "★"}
                  </span>
                  <span style={{ fontSize: 13, fontWeight: 600 }}>{it.title}</span>
                  {it.desc && (
                    <span style={{ fontSize: 11, opacity: 0.7 }}>{it.desc}</span>
                  )}
                </div>
              ))}
            </div>
          </div>
        );
      },
    },
  };
}
`,yw=`import type React from "react";
import type {
  ProfilePlugin,
  ProfilePluginContext,
} from "../../components/ProfilePlugin/plugins/types";
import doc from "./doc.json";

export interface ActivitySummaryConfig {
  /** 最近活跃描述，如「2 小时前」 */
  lastActive?: string;
  /** 本月发布篇数 */
  postsThisMonth?: number;
  /** 总阅读量描述，如「120w」 */
  totalViews?: string;
  /** 是否显示图标字 */
  showIcon?: boolean;
}

/**
 * ActivitySummary - 活跃度小结：最近活跃 / 本月发布 / 总阅读，一行小字。
 *
 * 走领域槽 \`renderBioArea\`（与 BioSlot / SocialLinks / TagList / ContactCard 同区串联）。
 * 三项全空时不渲染。
 */
export function createActivitySummaryPlugin<T = any>(
  config: ActivitySummaryConfig = {}
): ProfilePlugin<T> {
  const { lastActive, postsThisMonth, totalViews, showIcon = true } = config;
  const parts: string[] = [];
  if (lastActive) parts.push(\`最近活跃 \${lastActive}\`);
  if (typeof postsThisMonth === "number")
    parts.push(\`本月发布 \${postsThisMonth} 篇\`);
  if (totalViews) parts.push(\`总阅读 \${totalViews}\`);

  return {
    name: "ActivitySummary",
    version: "0.1.0",
    description: "活跃度小结：最近活跃 / 本月发布 / 总阅读，一行小字。",
    priority: 12,
    enabled: true,
    hooks: {
      renderBioArea: (_context: ProfilePluginContext<T>) => {
        if (!parts.length) return null;
        return (
          <div
            className="vp-activity"
            style={{
              display: "inline-flex",
              alignItems: "center",
              gap: 6,
              fontSize: 12,
              opacity: 0.72,
              color: "inherit",
            }}
          >
            {showIcon && (
              <span aria-hidden style={{ opacity: 0.8 }}>
                ◷
              </span>
            )}
            <span>{parts.join(" · ")}</span>
          </div>
        );
      },
    },
  };
}
`,ww=`import type React from "react";
import { useState } from "react";
import type {
  ProfilePlugin,
  ProfilePluginContext,
} from "../../components/ProfilePlugin/plugins/types";
import { cssImageUrl, safeImageUrl } from "../../components/ProfilePlugin/plugins/safe-url";
import doc from "./doc.json";

export interface BannerSlotConfig {
  /** 封面图 URL（与 gradient 二者至少其一；都无 / 非法则回退默认渐变） */
  cover?: string;
  /** 渐变起止色 [from, to]，无 cover 时用作背景 */
  gradient?: [string, string];
  /** 头像 URL（浮层在底部，与头图下缘重叠；非法协议视为无头像） */
  avatar?: string;
  /** 头像无障碍描述，默认「头像」 */
  avatarAlt?: string;
  /** 头像加载失败 / 未提供时的兜底内容，默认人形占位 */
  avatarFallback?: React.ReactNode;
  /** 头像直径（px），默认 64 */
  avatarSize?: number;
  /** 头像是否圆形，默认 true */
  avatarRound?: boolean;
  /** 头图区高度（px），默认 160 */
  height?: number;
  /** 叠加在头图上的自定义内容（昵称 / 标语等）；缺省时渲染 context.banner */
  overlay?: React.ReactNode;
}

/** 默认人形占位（内联 SVG，不引外部资源） */
function PersonGlyph({ size }: { size: number }) {
  const s = Math.round(size * 0.5);
  return (
    <svg width={s} height={s} viewBox="0 0 24 24" aria-hidden="true">
      <circle cx="12" cy="7.5" r="4.2" fill="currentColor" />
      <path
        d="M4.5 21c0-4.2 3.4-7 7.5-7s7.5 2.8 7.5 7"
        fill="none"
        stroke="currentColor"
        strokeWidth="2.4"
        strokeLinecap="round"
      />
    </svg>
  );
}

/** 头像：加载失败 / 无 src 时切到占位块，绝不留下破图或空白圆 */
function Avatar({
  src,
  size,
  round,
  alt,
  fallback,
}: {
  src?: string;
  size: number;
  round: boolean;
  alt: string;
  fallback?: React.ReactNode;
}) {
  const [failed, setFailed] = useState(false);

  const base: React.CSSProperties = {
    position: "absolute",
    left: 16,
    bottom: -size / 2,
    width: size,
    height: size,
    borderRadius: round ? "50%" : 8,
    border: "3px solid #fff",
    boxShadow: "0 2px 8px rgba(0,0,0,0.2)",
    objectFit: "cover",
  };

  if (!src || failed) {
    return (
      <div
        className="vp-avatar-fallback"
        role="img"
        aria-label={alt}
        style={{
          ...base,
          display: "flex",
          alignItems: "center",
          justifyContent: "center",
          background: "#e9ecef",
          color: "#6b6b6b",
          fontSize: Math.round(size / 3),
          lineHeight: 1,
        }}
      >
        {fallback ?? <PersonGlyph size={size} />}
      </div>
    );
  }

  return (
    <img
      className="vp-avatar"
      src={src}
      alt={alt}
      onError={() => setFailed(true)}
      style={base}
    />
  );
}

/**
 * BannerSlot - 头图区：封面图 / 渐变背景 + 头像浮层 + 可选文案。
 *
 * 走领域槽 \`renderBannerArea\`（由 ProfileCore 的 \`vp-banner-area\` 消费）。
 * 头像以负 bottom 浮出头图下缘、与数据行区重叠，形成经典个人主页观感。
 * \`overlay\` 优先于 \`context.banner\`；两者皆无则不渲染叠加文案。
 * 头图 / 头像 URL 都来自用户可编辑资料，统一走协议白名单（http/https）。
 */
export function createBannerSlotPlugin<T = any>(
  config: BannerSlotConfig = {}
): ProfilePlugin<T> {
  const {
    cover,
    gradient = ["#6a11cb", "#1a5fd0"],
    avatar,
    avatarAlt = "头像",
    avatarFallback,
    avatarSize = 64,
    avatarRound = true,
    height = 160,
    overlay,
  } = config;

  const coverUrl = cssImageUrl(cover);
  const avatarUrl = safeImageUrl(avatar);
  const background = coverUrl
    ? \`\${coverUrl} center/cover no-repeat\`
    : \`linear-gradient(135deg, \${gradient[0]}, \${gradient[1]})\`;

  return {
    name: "BannerSlot",
    version: "0.1.0",
    description:
      "头图区：封面图 / 渐变背景 + 头像浮层 + 昵称标语叠加。",
    priority: 10,
    enabled: true,
    hooks: {
      renderBannerArea: (context: ProfilePluginContext<T>) => (
        <div
          className="vp-banner"
          style={{
            position: "relative",
            height,
            background,
            backgroundSize: "cover",
            // 头像以负 bottom 浮出头图下缘，这里用等量 marginBottom 把下方数据行
            // 往下推，避免头像压住「关注/粉丝」等指标（经典主页观感但互不遮挡）。
            // 没有头像时不预留这段空白。
            marginBottom: avatarUrl ? avatarSize / 2 : 0,
          }}
        >
          {avatar?.trim() ? (
            <Avatar
              key={avatarUrl ?? "fallback"}
              src={avatarUrl}
              size={avatarSize}
              round={avatarRound}
              alt={avatarAlt}
              fallback={avatarFallback}
            />
          ) : null}
          {(overlay ?? context.banner) && (
            <div
              className="vp-banner-overlay"
              style={{
                position: "absolute",
                left: avatar ? 16 + avatarSize + 12 : 16,
                bottom: 16,
                color: "#fff",
                textShadow: "0 1px 4px rgba(0,0,0,0.5)",
              }}
            >
              {overlay ?? context.banner}
            </div>
          )}
        </div>
      ),
    },
  };
}
`,Sw=`import type React from "react";
import type {
  ProfilePlugin,
  ProfilePluginContext,
} from "../../components/ProfilePlugin/plugins/types";
import doc from "./doc.json";

export interface BioSlotConfig {
  /** 昵称（头图已用 overlay 显示时留空，避免重复） */
  name?: React.ReactNode;
  /** 个性签名 / 一句话简介 */
  bio?: React.ReactNode;
  /** 所在地 */
  location?: string;
  /** 加入时间（如 "2021 加入"） */
  joinDate?: string;
  /** 副标题 / 职业（显示在昵称下方小字） */
  subtitle?: React.ReactNode;
}

/**
 * BioSlot - 简介区：昵称 + 签名 + 所在地 / 加入时间。
 *
 * 走领域槽 \`renderBioArea\`（由 ProfileCore 的 \`vp-bio-area\` 消费，排在头图与数据行之间）。
 * 内容全空时整体返回 null，不占空间。
 */
export function createBioSlotPlugin<T = any>(
  config: BioSlotConfig = {}
): ProfilePlugin<T> {
  const { name, bio, location, joinDate, subtitle } = config;
  const metaLine = [location, joinDate].filter(Boolean).join(" · ");

  return {
    name: "BioSlot",
    version: "0.1.0",
    description: "简介区：昵称 + 签名 + 所在地 / 加入时间。",
    priority: 12,
    enabled: true,
    hooks: {
      renderBioArea: (_context: ProfilePluginContext<T>) => {
        if (!name && !subtitle && !bio && !metaLine) return null;
        return (
          <div className="vp-bio">
            {name && <div className="vp-bio-name">{name}</div>}
            {subtitle && <div className="vp-bio-sub">{subtitle}</div>}
            {bio && <div className="vp-bio-text">{bio}</div>}
            {metaLine && <div className="vp-bio-meta">{metaLine}</div>}
          </div>
        );
      },
    },
  };
}
`,xw=`import type React from "react";
import type {
  ProfilePlugin,
  ProfilePluginContext,
} from "../../components/ProfilePlugin/plugins/types";
import { safeHref } from "../../components/ProfilePlugin/plugins/safe-url";
import doc from "./doc.json";

export interface ContactCardConfig {
  /** 邮箱（渲染为 mailto: 链接） */
  email?: string;
  /** 电话（渲染为 tel: 链接） */
  phone?: string;
  /** 官网（渲染为 http(s) 外链，带 rel 防钓鱼） */
  site?: string;
  /** 地址（纯文本，不渲染为链接） */
  address?: string;
  /** 是否显示左侧图标字 */
  showIcon?: boolean;
}

interface Row {
  glyph: string;
  text: string;
  href?: string;
  external?: boolean;
}

/**
 * ContactCard - 联系信息卡：邮箱 / 电话 / 官网 / 地址。
 *
 * 走领域槽 \`renderBioArea\`（与 BioSlot / SocialLinks / TagList 同区，按 priority 串联）。
 * 全部为空时不渲染。外链一律带 \`rel="noreferrer noopener"\`，电话 / 邮箱走 tel:/mailto:。
 */
export function createContactCardPlugin<T = any>(
  config: ContactCardConfig = {}
): ProfilePlugin<T> {
  const { email, phone, site, address, showIcon = true } = config;
  const rows: Row[] = [];
  // href 一律过协议白名单；不合法（javascript: / data: / 裸域名等）时降级为纯文本
  if (email) rows.push({ glyph: "@", text: email, href: safeHref(\`mailto:\${email}\`) });
  if (phone) rows.push({ glyph: "☎", text: phone, href: safeHref(\`tel:\${phone}\`) });
  if (site) {
    const siteHref = safeHref(site);
    rows.push({
      glyph: "网",
      text: site.replace(/^https?:\\/\\//, ""),
      href: siteHref,
      external: !!siteHref,
    });
  }
  if (address) rows.push({ glyph: "📍", text: address });

  return {
    name: "ContactCard",
    version: "0.1.0",
    description: "联系信息卡：邮箱 / 电话 / 官网 / 地址，安全链接。",
    priority: 12,
    enabled: true,
    hooks: {
      renderBioArea: (_context: ProfilePluginContext<T>) => {
        if (!rows.length) return null;
        return (
          <div
            className="vp-contact"
            style={{
              display: "flex",
              flexWrap: "wrap",
              gap: "6px 16px",
              fontSize: 13,
              color: "inherit",
            }}
          >
            {rows.map((r, i) => {
              const inner = (
                <>
                  {showIcon && (
                    <span aria-hidden style={{ opacity: 0.7, marginRight: 4 }}>
                      {r.glyph}
                    </span>
                  )}
                  <span>{r.text}</span>
                </>
              );
              return r.href ? (
                <a
                  key={i}
                  href={r.href}
                  {...(r.external
                    ? { target: "_blank", rel: "noreferrer noopener" }
                    : {})}
                  style={{ color: "inherit", textDecoration: "none" }}
                >
                  {inner}
                </a>
              ) : (
                <span key={i}>{inner}</span>
              );
            })}
          </div>
        );
      },
    },
  };
}
`,Pw=`import type React from "react";
import { useState } from "react";
import type {
  ProfilePlugin,
  ProfilePluginContext,
  FollowState,
} from "../../components/ProfilePlugin/plugins/types";
import doc from "./doc.json";

/** onFollow 的返回值：Promise 落地即视为成功；返回 { error } 或 reject 视为失败 */
export type FollowResult = void | { error?: string } | undefined;

export interface FollowEchoConfig {
  /** 强制关注态，覆盖 context.followState */
  state?: FollowState;
  /** 三态文案覆盖 */
  labels?: Partial<Record<FollowState, React.ReactNode>>;
  /** 尺寸，默认 md */
  size?: "sm" | "md";
  /**
   * 点击切换后的回调（返回切换后的态）。
   * 支持返回 Promise：pending 期间按钮禁用（防重复请求），reject / \`{ error }\` 时
   * 内部态回滚到点击前的值，并在按钮旁显示错误文案。
   */
  onFollow?: (next: FollowState) => Promise<FollowResult> | FollowResult;
  /** props.followState 由非 mutual 变为 mutual 时的回调 */
  onMutual?: (next: FollowState) => void;
}

const DEFAULT_LABELS: Record<FollowState, React.ReactNode> = {
  none: "关注",
  following: "已关注",
  mutual: "互相关注",
};

const DEFAULT_ERROR = "操作失败，请重试";

/**
 * FollowButton - 受控三态按钮（内部有乐观 UI 态 + pending + 失败回滚）。
 *
 * 用 key={state} 让父重渲染（props.followState 变化）时以新初值重挂载，
 * 避免 stale 状态；点击在 none ⇄ following 间切换（mutual 视为「已关注」，
 * 再点即取消关注 → none）。
 *
 * 乐观更新必须可回滚：onFollow 返回的 Promise 失败（reject 或 \`{ error }\`）时，
 * 内部态退回点击前值，并渲染可见错误提示；pending 期间按钮禁用，重复点击被忽略。
 */
function FollowButton({
  initial,
  labels,
  size,
  onToggle,
}: {
  initial: FollowState;
  labels: Record<FollowState, React.ReactNode>;
  size: "sm" | "md";
  onToggle: (next: FollowState) => Promise<FollowResult> | FollowResult;
}) {
  const [state, setState] = useState<FollowState>(initial);
  const [pending, setPending] = useState(false);
  const [error, setError] = useState<string | null>(null);

  const following = state !== "none";
  const padding = size === "sm" ? "4px 12px" : "8px 20px";
  const fontSize = size === "sm" ? 12 : 14;

  const handle = async () => {
    if (pending) return;
    const prev = state;
    const next: FollowState = state === "none" ? "following" : "none";
    setError(null);
    setState(next);
    setPending(true);
    try {
      const result = await onToggle(next);
      if (result && typeof result === "object" && result.error) {
        throw new Error(result.error);
      }
    } catch (err) {
      setState(prev);
      setError(err instanceof Error && err.message ? err.message : DEFAULT_ERROR);
    } finally {
      setPending(false);
    }
  };

  return (
    <>
      <button
        type="button"
        onClick={handle}
        disabled={pending}
        aria-busy={pending}
        style={{
          padding,
          fontSize,
          borderRadius: 999,
          border: following ? "1px solid #ddd" : "none",
          background: following ? "#fff" : "#1a5fd0",
          color: following ? "#555" : "#fff",
          cursor: pending ? "progress" : "pointer",
          opacity: pending ? 0.7 : 1,
        }}
      >
        {labels[state]}
      </button>
      {error && (
        <span
          className="vp-follow-error"
          role="alert"
          style={{ fontSize: 12, color: "#c62828", lineHeight: 1.4 }}
        >
          {error}
        </span>
      )}
    </>
  );
}

/**
 * FollowEcho - 关注回显：关注 / 已关注 / 互相关注三态按钮。
 *
 * 走领域槽 \`renderFollowArea\`（由 ProfileCore 的 \`vp-follow-area\` 消费）。
 * 受控于 props.followState：点击切换仅作乐观 UI，真相由消费方回写 props；
 * 回调失败必须回滚并提示，避免 UI 停在「已关注」而服务端其实没成功。
 * \`onPropsChange\` 在关系变为 mutual 时触发 onMutual 回调。
 */
export function createFollowEchoPlugin<T = any>(
  config: FollowEchoConfig = {}
): ProfilePlugin<T> {
  const { labels, size = "md", onFollow, onMutual } = config;
  const resolved = { ...DEFAULT_LABELS, ...(labels ?? {}) };
  return {
    name: "FollowEcho",
    version: "0.1.0",
    description:
      "关注回显：关注 / 已关注 / 互相关注三态按钮，受控于 props.followState。",
    priority: 10,
    enabled: true,
    hooks: {
      renderFollowArea: (context: ProfilePluginContext<T>) => {
        const state: FollowState = config.state ?? context.followState;
        return (
          <FollowButton
            key={state}
            initial={state}
            labels={resolved}
            size={size}
            onToggle={(next) => onFollow?.(next)}
          />
        );
      },
      onPropsChange: (_context, prev, next) => {
        const prevState = (prev as { followState?: FollowState })?.followState;
        const nextState = (next as { followState?: FollowState })?.followState;
        if (prevState !== "mutual" && nextState === "mutual") {
          onMutual?.(nextState);
        }
      },
    },
  };
}
`,kw=`import type React from "react";
import type {
  ProfilePlugin,
  ProfilePluginContext,
} from "../../components/ProfilePlugin/plugins/types";
import doc from "./doc.json";

export type LiveStatusKind = "online" | "away" | "busy" | "offline" | "live";

export interface LiveStatusConfig {
  /** 状态：在线 / 离开 / 忙碌 / 离线 / 直播中 */
  status?: LiveStatusKind;
  /** status=live 时的直播标题 */
  liveTitle?: string;
  /** 是否展示文案（仅圆点为 false） */
  showLabel?: boolean;
}

const META: Record<LiveStatusKind, { color: string; label: string }> = {
  online: { color: "#2ecc71", label: "在线" },
  away: { color: "#f1c40f", label: "离开" },
  busy: { color: "#e74c3c", label: "忙碌" },
  offline: { color: "#95a5a6", label: "离线" },
  live: { color: "#ff4757", label: "直播中" },
};

/**
 * LiveStatus - 在线 / 直播状态指示。
 *
 * 走领域槽 \`renderBioArea\`（与 BioSlot / SocialLinks / TagList 同区，按 priority 串联）。
 * status=live 时显示红点 + 「直播中：{liveTitle}」。
 */
export function createLiveStatusPlugin<T = any>(
  config: LiveStatusConfig = {}
): ProfilePlugin<T> {
  const { status = "online", liveTitle, showLabel = true } = config;
  const m = META[status] ?? META.online;
  return {
    name: "LiveStatus",
    version: "0.1.0",
    description: "在线 / 直播状态指示：圆点 + 文案，直播态高亮。",
    priority: 12,
    enabled: true,
    hooks: {
      renderBioArea: (_context: ProfilePluginContext<T>) => (
        <div
          className="vp-livestatus"
          style={{
            display: "inline-flex",
            alignItems: "center",
            gap: 6,
            fontSize: 13,
            color: "inherit",
          }}
        >
          <span
            aria-hidden
            style={{
              width: 8,
              height: 8,
              borderRadius: "50%",
              background: m.color,
              boxShadow: status === "live" ? \`0 0 0 3px \${m.color}33\` : "none",
              flex: "0 0 auto",
            }}
          />
          {showLabel ? (
            <span>
              {m.label}
              {status === "live" && liveTitle ? \`：\${liveTitle}\` : ""}
            </span>
          ) : null}
        </div>
      ),
    },
  };
}
`,bw=`import type React from "react";
import type {
  ProfilePlugin,
  ProfilePluginContext,
} from "../../components/ProfilePlugin/plugins/types";
import doc from "./doc.json";

export interface MembershipBadgeConfig {
  /** 会员等级 1-3，决定配色与默认文案（VIP1/VIP2/VIP3） */
  level?: 1 | 2 | 3;
  /** 覆盖默认展示文案；不填则按 level 给「VIP{n}」 */
  label?: React.ReactNode;
  /** 是否展示文案（仅图标时为 false） */
  showLabel?: boolean;
}

const PALETTE: Record<number, { bg: string; fg: string }> = {
  1: { bg: "#c7a06a", fg: "#fff" },
  2: { bg: "#9aa7b5", fg: "#fff" },
  3: { bg: "#e0b34a", fg: "#3a2c00" },
};

/**
 * MembershipBadge - 会员 / VIP 等级角标。
 *
 * 走领域槽 \`renderBadgeArea\`（与 VerifyBadge / QRShare 同区，浮于头图右上，
 * 按 priority 与它们横向并排）。verified=false 时不渲染（无会员不占位置）。
 */
export function createMembershipBadgePlugin<T = any>(
  config: MembershipBadgeConfig = {}
): ProfilePlugin<T> {
  const { level = 1, label, showLabel = true } = config;
  const tone = PALETTE[level] ?? PALETTE[1];
  return {
    name: "MembershipBadge",
    version: "0.1.0",
    description: "会员 / VIP 等级角标：浮于头图右上，与认证徽标同区并排。",
    priority: 30,
    enabled: true,
    hooks: {
      renderBadgeArea: (_context: ProfilePluginContext<T>) => (
        <span
          className="vp-membership"
          title={\`VIP \${level}\`}
          style={{
            display: "inline-flex",
            alignItems: "center",
            gap: 4,
            padding: "2px 8px",
            borderRadius: 999,
            fontSize: 12,
            fontWeight: 600,
            background: tone.bg,
            color: tone.fg,
            lineHeight: 1.6,
          }}
        >
          <span aria-hidden style={{ fontSize: 11 }}>
            ♛
          </span>
          {showLabel ? <span>{label ?? \`VIP\${level}\`}</span> : null}
        </span>
      ),
    },
  };
}
`,Cw=`import type React from "react";
import type {
  ProfilePlugin,
  ProfilePluginContext,
} from "../../components/ProfilePlugin/plugins/types";
import doc from "./doc.json";

export interface MessageButtonConfig {
  /** 按钮尺寸，默认 md */
  size?: "sm" | "md";
  /** 按钮文案，默认「私信」 */
  label?: React.ReactNode;
  /** 点击回调（不传则仅乐观高亮） */
  onMessage?: (ctx: ProfilePluginContext) => void;
}

/**
 * MessageButton - 私信按钮，与关注回显（FollowEcho）同区并排。
 *
 * 走领域槽 \`renderFollowArea\`。点击触发 onMessage（消费方在此拉起会话）。
 */
export function createMessageButtonPlugin<T = any>(
  config: MessageButtonConfig = {}
): ProfilePlugin<T> {
  const { size = "md", label = "私信", onMessage } = config;
  const pad = size === "sm" ? "3px 12px" : "6px 18px";
  const fs = size === "sm" ? 12 : 14;
  return {
    name: "MessageButton",
    version: "0.1.0",
    description: "私信按钮：与关注回显同区并排，点击拉起会话。",
    priority: 10,
    enabled: true,
    hooks: {
      renderFollowArea: (context: ProfilePluginContext<T>) => (
        <button
          type="button"
          onClick={() => onMessage?.(context)}
          style={{
            padding: pad,
            fontSize: fs,
            borderRadius: 999,
            border: "1px solid rgba(125,130,140,0.45)",
            background: "transparent",
            color: "inherit",
            cursor: "pointer",
            lineHeight: 1.4,
          }}
        >
          {label}
        </button>
      ),
    },
  };
}
`,_w=`import React, { useEffect, useRef, useState } from "react";
import type {
  ProfilePlugin,
  ProfilePluginContext,
} from "../../components/ProfilePlugin/plugins/types";
import { safeHref } from "../../components/ProfilePlugin/plugins/safe-url";
import doc from "./doc.json";

export interface QRShareConfig {
  /** 要分享的主页地址；缺省读 props.data?.homeUrl。两者都没有时不渲染按钮 */
  url?: string;
  /** 按钮文案，默认「分享」 */
  buttonLabel?: React.ReactNode;
  /** 二维码占位区边长（px），默认 96 */
  size?: number;
}

/** 由 url 派生一个确定性的装饰性点阵（非真实可扫码 QR，仅作视觉占位） */
function dots(url: string, n = 11): boolean[][] {
  const grid: boolean[][] = [];
  let seed = 0;
  for (let i = 0; i < url.length; i++) seed = (seed * 31 + url.charCodeAt(i)) >>> 0;
  for (let r = 0; r < n; r++) {
    const row: boolean[] = [];
    for (let c = 0; c < n; c++) {
      seed = (seed * 1103515245 + 12345) >>> 0;
      row.push((seed >> 16) % 100 < 48);
    }
    grid.push(row);
  }
  return grid;
}

type CopyState = "idle" | "ok" | "fail";
const COPY_LABEL: Record<CopyState, string> = {
  idle: "复制链接",
  ok: "已复制",
  fail: "复制失败",
};

/** 内部组件：持有展开 / 复制状态，确保 useState 处于 React 渲染上下文 */
function QRSharePanel({
  url,
  buttonLabel,
  size,
}: {
  url: string;
  buttonLabel: React.ReactNode;
  size: number;
}) {
  const [open, setOpen] = useState(false);
  const [copyState, setCopyState] = useState<CopyState>("idle");
  const rootRef = useRef<HTMLDivElement | null>(null);
  const timerRef = useRef<ReturnType<typeof setTimeout> | null>(null);
  const grid = dots(url);

  // 定时器清理：卸载时不留悬挂 setTimeout
  useEffect(
    () => () => {
      if (timerRef.current) clearTimeout(timerRef.current);
    },
    []
  );

  // 浮层打开时：Esc 关闭 + 点击外部关闭，关闭即清理监听
  useEffect(() => {
    if (!open) return;
    const onKeyDown = (event: KeyboardEvent) => {
      if (event.key === "Escape") setOpen(false);
    };
    const onPointerDown = (event: MouseEvent) => {
      const root = rootRef.current;
      if (!root) return;
      const target = event.target as Node | null;
      if (target && !root.contains(target)) setOpen(false);
    };
    document.addEventListener("keydown", onKeyDown);
    document.addEventListener("mousedown", onPointerDown);
    return () => {
      document.removeEventListener("keydown", onKeyDown);
      document.removeEventListener("mousedown", onPointerDown);
    };
  }, [open]);

  const copy = async () => {
    let next: CopyState;
    try {
      // 非安全上下文（http）下 navigator.clipboard 不存在，必须显式判失败并提示，
      // 不能让用户以为复制成功。
      if (!navigator.clipboard?.writeText) throw new Error("clipboard unavailable");
      await navigator.clipboard.writeText(url);
      next = "ok";
    } catch {
      next = "fail";
    }
    setCopyState(next);
    if (timerRef.current) clearTimeout(timerRef.current);
    timerRef.current = setTimeout(() => setCopyState("idle"), 1500);
  };

  return (
    <div className="vp-qrshare" ref={rootRef} style={{ position: "relative" }}>
      <button
        type="button"
        onClick={() => setOpen((v) => !v)}
        aria-expanded={open}
        aria-haspopup="dialog"
        style={{
          display: "inline-flex",
          alignItems: "center",
          gap: 4,
          padding: "2px 10px",
          borderRadius: 999,
          fontSize: 12,
          border: "1px solid rgba(255,255,255,0.7)",
          /* 0.35 压在白底上只有 #a6a6a6（白字 2.44:1）—— 提到 0.55 才有 4.6:1 */
          background: "rgba(0,0,0,0.55)",
          color: "#fff",
          cursor: "pointer",
          lineHeight: 1.6,
        }}
      >
        <span aria-hidden>⤴</span>
        {buttonLabel}
      </button>
      {open && (
        <div
          role="dialog"
          aria-label="分享二维码"
          style={{
            position: "absolute",
            top: "calc(100% + 8px)",
            right: 0,
            width: size + 24,
            padding: 12,
            borderRadius: 10,
            background: "#fff",
            color: "#222",
            boxShadow: "0 6px 24px rgba(0,0,0,0.22)",
            zIndex: 5,
          }}
        >
          <div
            style={{
              width: size,
              height: size,
              display: "grid",
              gridTemplateColumns: \`repeat(\${grid.length}, 1fr)\`,
              gap: 1,
              margin: "0 auto 8px",
            }}
          >
            {grid.flatMap((row, r) =>
              row.map((on, c) => (
                <span
                  key={\`\${r}-\${c}\`}
                  style={{ background: on ? "#222" : "#fff" }}
                />
              ))
            )}
          </div>
          <div style={{ fontSize: 11, wordBreak: "break-all", marginBottom: 8 }}>
            {url}
          </div>
          <button
            type="button"
            onClick={() => void copy()}
            aria-live="polite"
            style={{
              width: "100%",
              padding: "4px 0",
              borderRadius: 6,
              border: "none",
              background: copyState === "fail" ? "#c62828" : "#1a5fd0",
              color: "#fff",
              fontSize: 12,
              cursor: "pointer",
            }}
          >
            {COPY_LABEL[copyState]}
          </button>
        </div>
      )}
    </div>
  );
}

/**
 * QRShare - 主页二维码分享：浮于头图右上的「分享」按钮，点击展开二维码占位面板。
 *
 * 走领域槽 \`renderBadgeArea\`（与 VerifyBadge / MembershipBadge 同区横向并排）。
 * 二维码为装饰性点阵占位（不引第三方库），面板提供「复制链接」。
 * 分享地址取自 config.url ?? props.data.homeUrl，二者都无则不渲染——
 * 不再回退到示例站点默认值（避免接入方忘传 url 时把用户指向 vane.dev）。
 */
export function createQRSharePlugin<T = any>(
  config: QRShareConfig = {}
): ProfilePlugin<T> {
  const { url, buttonLabel = "分享", size = 96 } = config;
  return {
    name: "QRShare",
    version: "0.1.0",
    description: "主页二维码分享：浮于头图右上的分享按钮，点击展开二维码与复制链接。",
    priority: 30,
    enabled: true,
    hooks: {
      renderBadgeArea: (context: ProfilePluginContext<T>) => {
        const homeUrl = (context.data as unknown as { homeUrl?: string } | undefined)
          ?.homeUrl;
        const resolved = safeHref(url ?? homeUrl);
        if (!resolved) return null;
        return <QRSharePanel url={resolved} buttonLabel={buttonLabel} size={size} />;
      },
    },
  };
}
`,Ew=`import type React from "react";
import type {
  ProfilePlugin,
  ProfilePluginContext,
} from "../../components/ProfilePlugin/plugins/types";
import { safeHref } from "../../components/ProfilePlugin/plugins/safe-url";
import doc from "./doc.json";

export interface SocialLink {
  /** 平台标识（决定默认文案与图标字），如 weibo / github / email / site */
  platform: string;
  /** 跳转地址 */
  href: string;
  /** 覆盖默认展示文案 */
  label?: string;
  /** 覆盖默认图标字（单字/双字，无图片资源时用作占位） */
  glyph?: string;
}

export interface SocialLinksConfig {
  /** 外链列表 */
  links: SocialLink[];
  /** 是否显示文案（仅图标字时为 false） */
  showLabel?: boolean;
  /** 整组对齐，默认左对齐 */
  align?: "left" | "center" | "right";
}

/** 常见平台的默认图标字与文案（不依赖任何图片资源，离线可用） */
const PRESET: Record<string, { glyph: string; label: string }> = {
  weibo: { glyph: "微", label: "微博" },
  zhihu: { glyph: "知", label: "知乎" },
  github: { glyph: "GH", label: "GitHub" },
  email: { glyph: "@", label: "邮箱" },
  site: { glyph: "网", label: "官网" },
  youtube: { glyph: "YT", label: "YouTube" },
  bilibili: { glyph: "B", label: "B 站" },
  twitter: { glyph: "X", label: "X" },
  douyin: { glyph: "抖", label: "抖音" },
  wechat: { glyph: "微", label: "微信" },
};

/**
 * SocialLinks - 社交外链行：一排可点击的平台入口。
 *
 * 走领域槽 \`renderBioArea\`（与 BioSlot / TagList 同区，按 priority 串联）。
 * 图标用单/双字占位（无图片资源），链接新窗口打开并带 rel 防钓鱼。
 */
export function createSocialLinksPlugin<T = any>(
  config: SocialLinksConfig = { links: [] }
): ProfilePlugin<T> {
  const { links, showLabel = true, align = "left" } = config;
  return {
    name: "SocialLinks",
    version: "0.1.0",
    description: "社交外链行：一排可点击的平台入口（微博 / 知乎 / GitHub …）。",
    priority: 12,
    enabled: true,
    hooks: {
      renderBioArea: (_context: ProfilePluginContext<T>) => {
        if (!links.length) return null;
        return (
          <div
            className="vp-social"
            style={{
              display: "flex",
              flexWrap: "wrap",
              gap: 8,
              justifyContent:
                align === "center" ? "center" : align === "right" ? "flex-end" : "flex-start",
            }}
          >
            {links.map((link, i) => {
              const preset = PRESET[link.platform] ?? { glyph: "·", label: link.platform };
              const glyph = link.glyph ?? preset.glyph;
              const label = link.label ?? preset.label;
              const href = safeHref(link.href);
              const style: React.CSSProperties = {
                display: "inline-flex",
                alignItems: "center",
                gap: 6,
                padding: "4px 10px",
                borderRadius: 999,
                border: "1px solid rgba(125,130,140,0.35)",
                color: "inherit",
                textDecoration: "none",
                fontSize: 13,
              };
              const inner = (
                <>
                  <span
                    aria-hidden
                    style={{
                      width: 18,
                      height: 18,
                      borderRadius: "50%",
                      background: "#1a5fd0",
                      color: "#fff",
                      fontSize: 10,
                      display: "inline-flex",
                      alignItems: "center",
                      justifyContent: "center",
                      flex: "0 0 auto",
                    }}
                  >
                    {glyph}
                  </span>
                  {showLabel ? <span>{label}</span> : null}
                </>
              );
              // 协议不在白名单（javascript: / data: / 自定义 scheme）时降级为纯文本，
              // 绝不把用户可编辑的字符串直接交给 href。
              return href ? (
                <a
                  key={i}
                  className="vp-social-item"
                  href={href}
                  target="_blank"
                  rel="noreferrer noopener"
                  style={style}
                >
                  {inner}
                </a>
              ) : (
                <span key={i} className="vp-social-item" style={{ ...style, cursor: "default" }}>
                  {inner}
                </span>
              );
            })}
          </div>
        );
      },
    },
  };
}
`,Tw=`import type React from "react";
import type {
  ProfilePlugin,
  ProfilePluginContext,
  StatItem,
} from "../../components/ProfilePlugin/plugins/types";
import doc from "./doc.json";

export interface StatRowConfig {
  /** 显式指标（覆盖 context.stats） */
  items?: StatItem[];
  /** 排布方向，默认 row */
  direction?: "row" | "column";
  /** 项之间是否显示分隔线（仅 row 生效），默认 true */
  divider?: boolean;
  /** 点击某条指标的回调（可在内部调用 context.setActiveTab 联动页签） */
  onStatClick?: (item: StatItem, index: number) => void;
}

/**
 * StatRow - 数据行：关注 / 粉丝 / 获赞 / 作品等指标，横排展示。
 *
 * 走领域槽 \`renderStatRow\`（由 ProfileCore 的 \`vp-stat-row\` 消费）。
 * 数据源：config.items ?? context.stats ?? []。每项显示 值（大）+ 标签（小）。
 */
export function createStatRowPlugin<T = any>(
  config: StatRowConfig = {}
): ProfilePlugin<T> {
  const { direction = "row", divider = true, onStatClick } = config;

  return {
    name: "StatRow",
    version: "0.1.0",
    description:
      "数据行：关注 / 粉丝 / 获赞 / 作品等指标，横排展示。",
    priority: 10,
    enabled: true,
    hooks: {
      renderStatRow: (context: ProfilePluginContext<T>) => {
        const items: StatItem[] = config.items ?? context.stats ?? [];
        if (items.length === 0) return null;
        return (
          <div
            className="vp-stat-row-inner"
            style={{
              display: "flex",
              flexDirection: direction === "column" ? "column" : "row",
              gap: 16,
              flex: 1,
            }}
          >
            {items.map((it, i) => {
              const content = (
                <>
                  <span style={{ fontSize: 18, fontWeight: 700 }}>{it.value}</span>
                  <span
                    style={{
                      fontSize: 12,
                      color: "#6b6b6b",
                      borderRight:
                        divider && direction === "row" && i < items.length - 1
                          ? "1px solid #eee"
                          : "none",
                      paddingRight:
                        divider && direction === "row" && i < items.length - 1 ? 16 : 0,
                    }}
                  >
                    {it.label}
                  </span>
                </>
              );
              const style: React.CSSProperties = {
                display: "flex",
                flexDirection: "column",
                alignItems: direction === "column" ? "flex-start" : "center",
                border: "none",
                background: "transparent",
                cursor: onStatClick ? "pointer" : "default",
                padding: 0,
                lineHeight: 1.2,
              };
              // 未传 onStatClick 时输出 span：避免一列「可聚焦但点了没反应」的空按钮
              return onStatClick ? (
                <button
                  key={it.key ?? \`stat-\${i}\`}
                  type="button"
                  className="vp-stat-item"
                  onClick={() => onStatClick(it, i)}
                  style={style}
                >
                  {content}
                </button>
              ) : (
                <span key={it.key ?? \`stat-\${i}\`} className="vp-stat-item" style={style}>
                  {content}
                </span>
              );
            })}
          </div>
        );
      },
    },
  };
}

`,Rw=`import type React from "react";
import type {
  ProfilePlugin,
  ProfilePluginContext,
} from "../../components/ProfilePlugin/plugins/types";
import doc from "./doc.json";

export interface TabItem {
  /** 页签 id（唯一） */
  id: string;
  /** 页签文案 */
  label: React.ReactNode;
  /** 可选图标 */
  icon?: React.ReactNode;
}

export interface TabSyncConfig {
  /** 页签定义（至少一个） */
  tabs: TabItem[];
  /** 样式变体，默认 underline */
  variant?: "underline" | "pill" | "segmented";
  /** 是否吸顶，默认 false */
  sticky?: boolean;
  /** 切换时是否把容器滚动到顶部，默认 true */
  scrollTopOnChange?: boolean;
  /** 切换回调（activeTab 已更新后触发） */
  onChange?: (id: string | null, oldId: string | null) => void;
}

/**
 * TabSync - 页签系统：渲染页签栏 + 切换时联动内容区重渲染。
 *
 * 这是 profile 的「交互中枢」：
 *  - \`renderTabBar\`：按 config.tabs 渲染按钮，点击调用 context.setActiveTab；
 *  - \`onTabChange\`：activeTab 变化后触发（由 withPlugins 驱动）；默认把容器
 *    滚到顶部，并调用 config.onChange。
 *
 * 内容区子节点经 \`useProfileContext().activeTab\` 订阅，实现「页签切换 → 内容区
 * 重渲染」——无需本插件关心内容怎么渲染。
 */
export function createTabSyncPlugin<T = any>(
  config: TabSyncConfig
): ProfilePlugin<T> {
  const {
    tabs,
    variant = "underline",
    sticky = false,
    scrollTopOnChange = true,
    onChange,
  } = config;
  const items = Array.isArray(tabs) ? tabs.filter((t) => !!t && !!t.id) : [];
  if (items.length === 0) {
    // 页签通常来自异步接口，首帧常常是空数组。这里不能 throw：
    // 工厂一般在渲染期构造，抛错发生在 React 渲染之外，错误边界接不住，直接白屏。
    // 因此空 tabs 返回一个 enabled:false 的空插件，等数据到位后由宿主重建插件数组。
    return {
      name: "TabSync",
      version: "0.1.0",
      description:
        "页签系统：渲染页签栏 + 切换时联动内容区重渲染（消费方子节点经 useProfileContext 订阅 activeTab）。",
      priority: 20,
      enabled: false,
      hooks: {},
    };
  }

  const activeStyle = (active: boolean): React.CSSProperties => {
    if (variant === "segmented") {
      return {
        flex: 1,
        padding: "6px 0",
        borderRadius: 6,
        background: active ? "#fff" : "transparent",
        color: active ? "#1a5fd0" : "#555",
        fontWeight: active ? 700 : 400,
      };
    }
    if (variant === "pill") {
      return {
        padding: "4px 14px",
        borderRadius: 999,
        background: active ? "#1a5fd0" : "transparent",
        color: active ? "#fff" : "#555",
        border: active ? "none" : "1px solid #ddd",
      };
    }
    // underline
    return {
      padding: "8px 12px",
      borderBottom: active ? "2px solid #1a5fd0" : "2px solid transparent",
      color: active ? "#1a5fd0" : "#555",
      fontWeight: active ? 700 : 400,
    };
  };

  return {
    name: "TabSync",
    version: "0.1.0",
    description:
      "页签系统：渲染页签栏 + 切换时联动内容区重渲染（消费方子节点经 useProfileContext 订阅 activeTab）。",
    priority: 20,
    enabled: true,
    hooks: {
      renderTabBar: (context: ProfilePluginContext<T>) => {
        const active = context.activeTab;
        return (
          <div
            className="vp-tab-bar-inner"
            role="tablist"
            style={{
              display: "flex",
              gap: variant === "segmented" ? 4 : 8,
              position: sticky ? "sticky" : "static",
              top: sticky ? 0 : undefined,
              background: sticky ? "#fff" : "transparent",
              zIndex: sticky ? 1 : undefined,
              ...(variant === "segmented"
                ? { background: "#eee", borderRadius: 8, padding: 4 }
                : {}),
            }}
          >
            {items.map((t) => {
              const isActive = t.id === active;
              return (
                <button
                  key={t.id}
                  type="button"
                  role="tab"
                  aria-selected={isActive}
                  onClick={() => context.setActiveTab(t.id)}
                  style={{
                    display: "inline-flex",
                    alignItems: "center",
                    gap: 4,
                    border: "none",
                    background: "transparent",
                    cursor: "pointer",
                    fontSize: 14,
                    ...activeStyle(isActive),
                  }}
                >
                  {t.icon}
                  {t.label}
                </button>
              );
            })}
          </div>
        );
      },
      onTabChange: (context, newTab, oldTab) => {
        if (scrollTopOnChange) {
          const el = context.refs.container?.current;
          if (el) el.scrollTop = 0;
        }
        onChange?.(newTab, oldTab);
      },
    },
  };
}

`,jw=`import type React from "react";
import type {
  ProfilePlugin,
  ProfilePluginContext,
} from "../../components/ProfilePlugin/plugins/types";
import doc from "./doc.json";

export interface TagListConfig {
  /** 标签文本列表 */
  tags: string[];
  /** 整组对齐，默认左对齐 */
  align?: "left" | "center" | "right";
}

/**
 * TagList - 兴趣 / 标签行：一排圆角小标签。
 *
 * 走领域槽 \`renderBioArea\`（与 BioSlot / SocialLinks 同区，按 priority 串联）。
 * tags 为空时整体返回 null。
 */
export function createTagListPlugin<T = any>(
  config: TagListConfig = { tags: [] }
): ProfilePlugin<T> {
  const { tags, align = "left" } = config;
  return {
    name: "TagList",
    version: "0.1.0",
    description: "兴趣 / 标签行：一排圆角小标签。",
    priority: 12,
    enabled: true,
    hooks: {
      renderBioArea: (_context: ProfilePluginContext<T>) => {
        if (!tags.length) return null;
        return (
          <div
            className="vp-tags"
            style={{
              display: "flex",
              flexWrap: "wrap",
              gap: 6,
              justifyContent:
                align === "center" ? "center" : align === "right" ? "flex-end" : "flex-start",
            }}
          >
            {tags.map((t, i) => (
              <span
                key={i}
                className="vp-tag"
                style={{
                  padding: "2px 10px",
                  borderRadius: 999,
                  fontSize: 12,
                  lineHeight: 1.6,
                  background: "rgba(125,130,140,0.16)",
                  color: "inherit",
                  border: "1px solid rgba(125,130,140,0.25)",
                }}
              >
                {t}
              </span>
            ))}
          </div>
        );
      },
    },
  };
}
`,Lw=`import type React from "react";
import type {
  ProfilePlugin,
  ProfilePluginContext,
  BadgeType,
} from "../../components/ProfilePlugin/plugins/types";
import doc from "./doc.json";

export interface VerifyBadgeConfig {
  /** 强制认证态，覆盖 context.verified */
  verified?: boolean;
  /** 认证类型，覆盖 context.badgeType */
  type?: BadgeType;
  /** 徽标旁文字；缺省按 type 给「认证」/「机构认证」 */
  label?: React.ReactNode;
  /** 是否展示文字，默认 true */
  showLabel?: boolean;
}

/** 内联 SVG 对勾徽标（不引外部资源） */
function BadgeIcon({ type }: { type: BadgeType }) {
  const color = type === "institution" ? "#ff8f00" : "#1da1f2";
  return (
    <svg width="16" height="16" viewBox="0 0 24 24" aria-hidden="true">
      <circle cx="12" cy="12" r="11" fill={color} />
      <path
        d="M7 12.5l3 3 7-7"
        fill="none"
        stroke="#fff"
        strokeWidth="2.4"
        strokeLinecap="round"
        strokeLinejoin="round"
      />
    </svg>
  );
}

/**
 * VerifyBadge - 认证徽标：个人 / 机构认证对勾，浮于头图右上角。
 *
 * 走领域槽 \`renderBadgeArea\`（由 ProfileCore 的 \`vp-badge-area\` 消费，绝对定位
 * 于头图右上）。\`verified\` 为 false（config 或 context）时不渲染。
 */
export function createVerifyBadgePlugin<T = any>(
  config: VerifyBadgeConfig = {}
): ProfilePlugin<T> {
  const { showLabel = true } = config;
  return {
    name: "VerifyBadge",
    version: "0.1.0",
    description:
      "认证徽标：个人 / 机构认证对勾，浮于头图右上角。",
    priority: 30,
    enabled: true,
    hooks: {
      renderBadgeArea: (context: ProfilePluginContext<T>) => {
        const verified = config.verified ?? context.verified;
        const type = config.type ?? context.badgeType;
        if (!verified) return null;
        const labelText =
          config.label ?? (type === "institution" ? "机构认证" : "认证");
        return (
          <span
            className="vp-badge"
            style={{
              display: "inline-flex",
              alignItems: "center",
              gap: 4,
              padding: "2px 8px",
              borderRadius: 999,
              background: "rgba(255,255,255,0.92)",
              color: "#333",
              fontSize: 12,
            }}
          >
            <BadgeIcon type={type} />
            {showLabel && labelText}
          </span>
        );
      },
    },
  };
}

`,Mw=`import type React from "react";
import type {
  ProfilePlugin,
  ProfilePluginContext,
} from "../../components/ProfilePlugin/plugins/types";
import { cssImageUrl } from "../../components/ProfilePlugin/plugins/safe-url";
import doc from "./doc.json";

export interface WorkItem {
  /** 唯一 id（作 React key） */
  id: string;
  /** 标题 */
  title: string;
  /** 封面图 URL（优先于 coverColor） */
  cover?: string;
  /** 无封面图时的纯色占位（CSS 颜色） */
  coverColor?: string;
  /** 副信息（时长 / 点赞 / 日期…） */
  meta?: React.ReactNode;
}

export interface WorksGridConfig {
  /** 作品列表 */
  items: WorkItem[];
  /** 列数，默认 3 */
  columns?: number;
  /** 卡片间距，默认 10 */
  gap?: number;
  /**
   * 仅在某个页签激活时显示（与 TabSync 联动）。
   * 不填则始终显示（适合没有页签、以作品为主页内容的主页）。
   */
  tab?: string;
  /** 标题（网格上方的分组标题，可选） */
  title?: React.ReactNode;
  /** 空列表时的占位文案 */
  empty?: React.ReactNode;
}

const FALLBACK_COLORS = [
  "#6a11cb",
  "#1a5fd0",
  "#11998e",
  "#ff7e5f",
  "#fc466b",
  "#3a1c71",
];

/**
 * WorksGrid - 作品网格：随 activeTab 联动的内容区插件。
 *
 * 走领域槽 \`renderContentArea\`（由 ProfileCore 的 \`vp-content-area\` 消费）。
 * 当 \`config.tab\` 有值时，只在对应页签激活时才渲染，实现「切到作品 tab 才出网格」。
 * 没有内容插件时 Core 会回退到 children，因此本插件与 TabSync 文本区可二选一。
 */
export function createWorksGridPlugin<T = any>(
  config: WorksGridConfig = { items: [] }
): ProfilePlugin<T> {
  const { items, columns = 3, gap = 10, tab, title, empty = "暂无作品" } = config;

  return {
    name: "WorksGrid",
    version: "0.1.0",
    description: "作品网格：随 activeTab 联动的内容区插件。",
    priority: 15,
    enabled: true,
    hooks: {
      renderContentArea: (context: ProfilePluginContext<T>) => {
        // tab 过滤：指定了 tab 且当前不是该 tab 时整体不渲染
        if (tab && context.activeTab !== tab) return null;

        const grid = (
          <div
            className="vp-works-grid"
            style={{
              display: "grid",
              gridTemplateColumns: \`repeat(\${columns}, 1fr)\`,
              gap,
            }}
          >
            {items.map((w, i) => {
              const coverUrl = cssImageUrl(w.cover);
              const bg =
                coverUrl ??
                w.coverColor ??
                FALLBACK_COLORS[i % FALLBACK_COLORS.length];
              return (
                <figure
                  key={w.id}
                  className="vp-work"
                  style={{
                    margin: 0,
                    borderRadius: 10,
                    overflow: "hidden",
                    border: "1px solid rgba(125,130,140,0.22)",
                    background: "#fff",
                    color: "#222",
                  }}
                >
                  <div
                    style={{
                      aspectRatio: "1 / 1",
                      background: coverUrl ? \`\${coverUrl} center/cover no-repeat\` : bg,
                    }}
                  />
                  <figcaption style={{ padding: "8px 10px" }}>
                    <div style={{ fontSize: 13, fontWeight: 600, lineHeight: 1.4 }}>{w.title}</div>
                    {w.meta ? (
                      <div style={{ fontSize: 11, color: "#6b6b6b", marginTop: 2 }}>{w.meta}</div>
                    ) : null}
                  </figcaption>
                </figure>
              );
            })}
          </div>
        );

        if (items.length === 0) {
          return (
            <div
              className="vp-works-empty"
              style={{ padding: "24px 0", textAlign: "center", color: "#6b6b6b" }}
            >
              {empty}
            </div>
          );
        }

        if (!title) return grid;
        return (
          <div className="vp-works">
            <div
              className="vp-works-title"
              style={{ fontSize: 14, fontWeight: 600, marginBottom: 10 }}
            >
              {title}
            </div>
            {grid}
          </div>
        );
      },
    },
  };
}
`,Vw={visual:"视觉",data:"数据",interaction:"交互与状态"},yu=["visual","data","interaction"],wu=Object.assign({"/src/custom-plugins/AchievementWallPlugin/doc.json":pd,"/src/custom-plugins/ActivitySummaryPlugin/doc.json":fd,"/src/custom-plugins/BannerSlotPlugin/doc.json":Jf,"/src/custom-plugins/BioSlotPlugin/doc.json":rd,"/src/custom-plugins/ContactCardPlugin/doc.json":cd,"/src/custom-plugins/FollowEchoPlugin/doc.json":nd,"/src/custom-plugins/LiveStatusPlugin/doc.json":ud,"/src/custom-plugins/MembershipBadgePlugin/doc.json":ad,"/src/custom-plugins/MessageButtonPlugin/doc.json":dd,"/src/custom-plugins/QRSharePlugin/doc.json":sd,"/src/custom-plugins/SocialLinksPlugin/doc.json":od,"/src/custom-plugins/StatRowPlugin/doc.json":qf,"/src/custom-plugins/TabSyncPlugin/doc.json":ed,"/src/custom-plugins/TagListPlugin/doc.json":ld,"/src/custom-plugins/VerifyBadgePlugin/doc.json":td,"/src/custom-plugins/WorksGridPlugin/doc.json":id}),Su=Object.assign({"/src/custom-plugins/AchievementWallPlugin/create.tsx":vw,"/src/custom-plugins/ActivitySummaryPlugin/create.tsx":yw,"/src/custom-plugins/BannerSlotPlugin/create.tsx":ww,"/src/custom-plugins/BioSlotPlugin/create.tsx":Sw,"/src/custom-plugins/ContactCardPlugin/create.tsx":xw,"/src/custom-plugins/FollowEchoPlugin/create.tsx":Pw,"/src/custom-plugins/LiveStatusPlugin/create.tsx":kw,"/src/custom-plugins/MembershipBadgePlugin/create.tsx":bw,"/src/custom-plugins/MessageButtonPlugin/create.tsx":Cw,"/src/custom-plugins/QRSharePlugin/create.tsx":_w,"/src/custom-plugins/SocialLinksPlugin/create.tsx":Ew,"/src/custom-plugins/StatRowPlugin/create.tsx":Tw,"/src/custom-plugins/TabSyncPlugin/create.tsx":Rw,"/src/custom-plugins/TagListPlugin/create.tsx":jw,"/src/custom-plugins/VerifyBadgePlugin/create.tsx":Lw,"/src/custom-plugins/WorksGridPlugin/create.tsx":Mw}),hd=e=>e.replace(/^.*\/custom-plugins\//,"").replace(/\/.*$/,"");function Nw(e){const t=Object.keys(Su).find(o=>hd(o)===e),n=t?Su[t]:"",r=/priority:\s*(\d+)/.exec(n);return r?Number(r[1]):0}function Aw(e){const t=Object.keys(wu).find(n=>hd(n)===e);return t?wu[t]:{name:e,description:"（缺少 doc.json）"}}const $w=[{id:"works",label:"作品"},{id:"feeds",label:"动态"},{id:"about",label:"关于"}],Bw=[{dir:"BannerSlotPlugin",group:"visual",make:()=>Qt({gradient:["#6a11cb","#1a5fd0"],avatar:Gt,avatarRound:!0,height:160,overlay:O.name})},{dir:"VerifyBadgePlugin",group:"visual",make:()=>Yo({type:"personal"})},{dir:"StatRowPlugin",group:"data",make:()=>_r({items:O.stats})},{dir:"BioSlotPlugin",group:"data",make:()=>Ca({name:O.name,subtitle:"前端工程师 · 组件库作者",bio:O.bio,location:"上海",joinDate:"2021 加入"})},{dir:"TagListPlugin",group:"data",make:()=>Ea({tags:za})},{dir:"TabSyncPlugin",group:"interaction",make:()=>Er({tabs:$w})},{dir:"FollowEchoPlugin",group:"interaction",make:()=>En({size:"md"})},{dir:"SocialLinksPlugin",group:"visual",make:()=>_a({links:Ba})},{dir:"WorksGridPlugin",group:"visual",make:()=>Ta({items:Oa,tab:"works"})},{dir:"MembershipBadgePlugin",group:"visual",make:()=>Ra(gd)},{dir:"QRSharePlugin",group:"visual",make:()=>ja({url:"https://vane.dev/u/frankvane"})},{dir:"AchievementWallPlugin",group:"visual",make:()=>$a({items:Fa,tab:"about",title:"成就"})},{dir:"LiveStatusPlugin",group:"data",make:()=>La(md)},{dir:"ContactCardPlugin",group:"data",make:()=>Ma(Ia)},{dir:"ActivitySummaryPlugin",group:"data",make:()=>Na(Da)},{dir:"MessageButtonPlugin",group:"interaction",make:()=>Aa({})}],xu=Bw.map(e=>{const t=Aw(e.dir);return{dir:e.dir,factory:`create${e.dir.replace(/Plugin$/,"")}Plugin`,group:e.group,priority:Nw(e.dir),summary:t.description,doc:t,make:e.make}}).sort((e,t)=>yu.indexOf(e.group)-yu.indexOf(t.group)||t.priority-e.priority),zw=v.lazy(()=>Pa(()=>import("./HomePage-ByhQRzuO.js"),__vite__mapDeps([0,1]),import.meta.url).then(e=>({default:e.HomePage}))),Ow=v.lazy(()=>Pa(()=>import("./PluginsPage-84oxxL92.js"),[],import.meta.url).then(e=>({default:e.PluginsPage}))),Iw=v.lazy(()=>Pa(()=>import("./ScenariosPage-BMjpIgBK.js"),__vite__mapDeps([2,1]),import.meta.url).then(e=>({default:e.ScenariosPage}))),Dw={pkg:"vane-profile",brand:"V",subtitle:"个人主页 / plugin index",nav:[{to:"/",label:"总览",hint:"overview"},{to:"/plugins",label:"插件工坊",hint:`${xu.length} plugins`},{to:"/scenarios",label:"场景示例",hint:"4 plates"}],routes:[{path:"/",element:c.jsx(zw,{})},{path:"/plugins",element:c.jsx(Ow,{})},{path:"/scenarios",element:c.jsx(Iw,{})}],crumb:e=>e.startsWith("/plugins")?"workshop · 插件工坊":e.startsWith("/scenarios")?"plates · 场景示例":"index · 总览",demos:{label:"逐项示例",groups:iw.map(e=>({key:e,label:Pi[e].label})),entries:xi,detail:(e,t)=>c.jsx(hw,{entry:e,order:t})},footer:[`${xu.length} PLUGINS · 4 PLATES`,`${xi.length} DEMOS · D1-A / D2-A`]};function Fw(){return c.jsx(eh,{config:Dw})}kl.createRoot(document.getElementById("root")).render(c.jsx(Pn.StrictMode,{children:c.jsx(Fw,{})}));export{Gt as A,gd as B,fw as C,xi as D,ja as E,Aa as F,yu as G,$a as H,Fa as I,Si as L,xu as P,O as S,C0 as T,Ww as a,Ca as b,Qt as c,_r as d,_a as e,Ba as f,Ea as g,za as h,Er as i,c as j,Yo as k,En as l,Ta as m,Oa as n,Z as o,Vw as p,La as q,v as r,md as s,Ma as t,Cr as u,Ia as v,ee as w,Na as x,Da as y,Ra as z};
