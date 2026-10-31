const __vite__mapDeps=(i,m=__vite__mapDeps,d=(m.f||(m.f=["./HomePage-CG3SHl4e.js","./catalog-DSSUekdO.js","./ScenariosPage-CRxk00C3.js"])))=>i.map(i=>d[i]);
var fd=Object.defineProperty;var dd=(e,t,n)=>t in e?fd(e,t,{enumerable:!0,configurable:!0,writable:!0,value:n}):e[t]=n;var Fa=(e,t,n)=>dd(e,typeof t!="symbol"?t+"":t,n);function pd(e,t){for(var n=0;n<t.length;n++){const r=t[n];if(typeof r!="string"&&!Array.isArray(r)){for(const o in r)if(o!=="default"&&!(o in e)){const l=Object.getOwnPropertyDescriptor(r,o);l&&Object.defineProperty(e,o,l.get?l:{enumerable:!0,get:()=>r[o]})}}}return Object.freeze(Object.defineProperty(e,Symbol.toStringTag,{value:"Module"}))}(function(){const t=document.createElement("link").relList;if(t&&t.supports&&t.supports("modulepreload"))return;for(const o of document.querySelectorAll('link[rel="modulepreload"]'))r(o);new MutationObserver(o=>{for(const l of o)if(l.type==="childList")for(const i of l.addedNodes)i.tagName==="LINK"&&i.rel==="modulepreload"&&r(i)}).observe(document,{childList:!0,subtree:!0});function n(o){const l={};return o.integrity&&(l.integrity=o.integrity),o.referrerPolicy&&(l.referrerPolicy=o.referrerPolicy),o.crossOrigin==="use-credentials"?l.credentials="include":o.crossOrigin==="anonymous"?l.credentials="omit":l.credentials="same-origin",l}function r(o){if(o.ep)return;o.ep=!0;const l=n(o);fetch(o.href,l)}})();function gd(e){return e&&e.__esModule&&Object.prototype.hasOwnProperty.call(e,"default")?e.default:e}var Su={exports:{}},Ro={},xu={exports:{}},N={};/**
 * @license React
 * react.production.min.js
 *
 * Copyright (c) Facebook, Inc. and its affiliates.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */var hr=Symbol.for("react.element"),md=Symbol.for("react.portal"),hd=Symbol.for("react.fragment"),vd=Symbol.for("react.strict_mode"),yd=Symbol.for("react.profiler"),wd=Symbol.for("react.provider"),Sd=Symbol.for("react.context"),xd=Symbol.for("react.forward_ref"),Pd=Symbol.for("react.suspense"),kd=Symbol.for("react.memo"),bd=Symbol.for("react.lazy"),Wa=Symbol.iterator;function _d(e){return e===null||typeof e!="object"?null:(e=Wa&&e[Wa]||e["@@iterator"],typeof e=="function"?e:null)}var Pu={isMounted:function(){return!1},enqueueForceUpdate:function(){},enqueueReplaceState:function(){},enqueueSetState:function(){}},ku=Object.assign,bu={};function xn(e,t,n){this.props=e,this.context=t,this.refs=bu,this.updater=n||Pu}xn.prototype.isReactComponent={};xn.prototype.setState=function(e,t){if(typeof e!="object"&&typeof e!="function"&&e!=null)throw Error("setState(...): takes an object of state variables to update or a function which returns an object of state variables.");this.updater.enqueueSetState(this,e,t,"setState")};xn.prototype.forceUpdate=function(e){this.updater.enqueueForceUpdate(this,e,"forceUpdate")};function _u(){}_u.prototype=xn.prototype;function Pi(e,t,n){this.props=e,this.context=t,this.refs=bu,this.updater=n||Pu}var ki=Pi.prototype=new _u;ki.constructor=Pi;ku(ki,xn.prototype);ki.isPureReactComponent=!0;var Ua=Array.isArray,Cu=Object.prototype.hasOwnProperty,bi={current:null},Tu={key:!0,ref:!0,__self:!0,__source:!0};function Eu(e,t,n){var r,o={},l=null,i=null;if(t!=null)for(r in t.ref!==void 0&&(i=t.ref),t.key!==void 0&&(l=""+t.key),t)Cu.call(t,r)&&!Tu.hasOwnProperty(r)&&(o[r]=t[r]);var a=arguments.length-2;if(a===1)o.children=n;else if(1<a){for(var s=Array(a),u=0;u<a;u++)s[u]=arguments[u+2];o.children=s}if(e&&e.defaultProps)for(r in a=e.defaultProps,a)o[r]===void 0&&(o[r]=a[r]);return{$$typeof:hr,type:e,key:l,ref:i,props:o,_owner:bi.current}}function Cd(e,t){return{$$typeof:hr,type:e.type,key:t,ref:e.ref,props:e.props,_owner:e._owner}}function _i(e){return typeof e=="object"&&e!==null&&e.$$typeof===hr}function Td(e){var t={"=":"=0",":":"=2"};return"$"+e.replace(/[=:]/g,function(n){return t[n]})}var Va=/\/+/g;function Yo(e,t){return typeof e=="object"&&e!==null&&e.key!=null?Td(""+e.key):t.toString(36)}function Hr(e,t,n,r,o){var l=typeof e;(l==="undefined"||l==="boolean")&&(e=null);var i=!1;if(e===null)i=!0;else switch(l){case"string":case"number":i=!0;break;case"object":switch(e.$$typeof){case hr:case md:i=!0}}if(i)return i=e,o=o(i),e=r===""?"."+Yo(i,0):r,Ua(o)?(n="",e!=null&&(n=e.replace(Va,"$&/")+"/"),Hr(o,t,n,"",function(u){return u})):o!=null&&(_i(o)&&(o=Cd(o,n+(!o.key||i&&i.key===o.key?"":(""+o.key).replace(Va,"$&/")+"/")+e)),t.push(o)),1;if(i=0,r=r===""?".":r+":",Ua(e))for(var a=0;a<e.length;a++){l=e[a];var s=r+Yo(l,a);i+=Hr(l,t,n,s,o)}else if(s=_d(e),typeof s=="function")for(e=s.call(e),a=0;!(l=e.next()).done;)l=l.value,s=r+Yo(l,a++),i+=Hr(l,t,n,s,o);else if(l==="object")throw t=String(e),Error("Objects are not valid as a React child (found: "+(t==="[object Object]"?"object with keys {"+Object.keys(e).join(", ")+"}":t)+"). If you meant to render a collection of children, use an array instead.");return i}function Cr(e,t,n){if(e==null)return e;var r=[],o=0;return Hr(e,r,"","",function(l){return t.call(n,l,o++)}),r}function Ed(e){if(e._status===-1){var t=e._result;t=t(),t.then(function(n){(e._status===0||e._status===-1)&&(e._status=1,e._result=n)},function(n){(e._status===0||e._status===-1)&&(e._status=2,e._result=n)}),e._status===-1&&(e._status=0,e._result=t)}if(e._status===1)return e._result.default;throw e._result}var ge={current:null},Qr={transition:null},Rd={ReactCurrentDispatcher:ge,ReactCurrentBatchConfig:Qr,ReactCurrentOwner:bi};function Ru(){throw Error("act(...) is not supported in production builds of React.")}N.Children={map:Cr,forEach:function(e,t,n){Cr(e,function(){t.apply(this,arguments)},n)},count:function(e){var t=0;return Cr(e,function(){t++}),t},toArray:function(e){return Cr(e,function(t){return t})||[]},only:function(e){if(!_i(e))throw Error("React.Children.only expected to receive a single React element child.");return e}};N.Component=xn;N.Fragment=hd;N.Profiler=yd;N.PureComponent=Pi;N.StrictMode=vd;N.Suspense=Pd;N.__SECRET_INTERNALS_DO_NOT_USE_OR_YOU_WILL_BE_FIRED=Rd;N.act=Ru;N.cloneElement=function(e,t,n){if(e==null)throw Error("React.cloneElement(...): The argument must be a React element, but you passed "+e+".");var r=ku({},e.props),o=e.key,l=e.ref,i=e._owner;if(t!=null){if(t.ref!==void 0&&(l=t.ref,i=bi.current),t.key!==void 0&&(o=""+t.key),e.type&&e.type.defaultProps)var a=e.type.defaultProps;for(s in t)Cu.call(t,s)&&!Tu.hasOwnProperty(s)&&(r[s]=t[s]===void 0&&a!==void 0?a[s]:t[s])}var s=arguments.length-2;if(s===1)r.children=n;else if(1<s){a=Array(s);for(var u=0;u<s;u++)a[u]=arguments[u+2];r.children=a}return{$$typeof:hr,type:e.type,key:o,ref:l,props:r,_owner:i}};N.createContext=function(e){return e={$$typeof:Sd,_currentValue:e,_currentValue2:e,_threadCount:0,Provider:null,Consumer:null,_defaultValue:null,_globalName:null},e.Provider={$$typeof:wd,_context:e},e.Consumer=e};N.createElement=Eu;N.createFactory=function(e){var t=Eu.bind(null,e);return t.type=e,t};N.createRef=function(){return{current:null}};N.forwardRef=function(e){return{$$typeof:xd,render:e}};N.isValidElement=_i;N.lazy=function(e){return{$$typeof:bd,_payload:{_status:-1,_result:e},_init:Ed}};N.memo=function(e,t){return{$$typeof:kd,type:e,compare:t===void 0?null:t}};N.startTransition=function(e){var t=Qr.transition;Qr.transition={};try{e()}finally{Qr.transition=t}};N.unstable_act=Ru;N.useCallback=function(e,t){return ge.current.useCallback(e,t)};N.useContext=function(e){return ge.current.useContext(e)};N.useDebugValue=function(){};N.useDeferredValue=function(e){return ge.current.useDeferredValue(e)};N.useEffect=function(e,t){return ge.current.useEffect(e,t)};N.useId=function(){return ge.current.useId()};N.useImperativeHandle=function(e,t,n){return ge.current.useImperativeHandle(e,t,n)};N.useInsertionEffect=function(e,t){return ge.current.useInsertionEffect(e,t)};N.useLayoutEffect=function(e,t){return ge.current.useLayoutEffect(e,t)};N.useMemo=function(e,t){return ge.current.useMemo(e,t)};N.useReducer=function(e,t,n){return ge.current.useReducer(e,t,n)};N.useRef=function(e){return ge.current.useRef(e)};N.useState=function(e){return ge.current.useState(e)};N.useSyncExternalStore=function(e,t,n){return ge.current.useSyncExternalStore(e,t,n)};N.useTransition=function(){return ge.current.useTransition()};N.version="18.3.1";xu.exports=N;var v=xu.exports;const Pn=gd(v),jd=pd({__proto__:null,default:Pn},[v]);/**
 * @license React
 * react-jsx-runtime.production.min.js
 *
 * Copyright (c) Facebook, Inc. and its affiliates.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */var Ld=v,Md=Symbol.for("react.element"),Nd=Symbol.for("react.fragment"),$d=Object.prototype.hasOwnProperty,Ad=Ld.__SECRET_INTERNALS_DO_NOT_USE_OR_YOU_WILL_BE_FIRED.ReactCurrentOwner,Bd={key:!0,ref:!0,__self:!0,__source:!0};function ju(e,t,n){var r,o={},l=null,i=null;n!==void 0&&(l=""+n),t.key!==void 0&&(l=""+t.key),t.ref!==void 0&&(i=t.ref);for(r in t)$d.call(t,r)&&!Bd.hasOwnProperty(r)&&(o[r]=t[r]);if(e&&e.defaultProps)for(r in t=e.defaultProps,t)o[r]===void 0&&(o[r]=t[r]);return{$$typeof:Md,type:e,key:l,ref:i,props:o,_owner:Ad.current}}Ro.Fragment=Nd;Ro.jsx=ju;Ro.jsxs=ju;Su.exports=Ro;var c=Su.exports,Pl={},Lu={exports:{}},Ce={},Mu={exports:{}},Nu={};/**
 * @license React
 * scheduler.production.min.js
 *
 * Copyright (c) Facebook, Inc. and its affiliates.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */(function(e){function t(C,j){var L=C.length;C.push(j);e:for(;0<L;){var G=L-1>>>1,ne=C[G];if(0<o(ne,j))C[G]=j,C[L]=ne,L=G;else break e}}function n(C){return C.length===0?null:C[0]}function r(C){if(C.length===0)return null;var j=C[0],L=C.pop();if(L!==j){C[0]=L;e:for(var G=0,ne=C.length,br=ne>>>1;G<br;){var Et=2*(G+1)-1,Ko=C[Et],Rt=Et+1,_r=C[Rt];if(0>o(Ko,L))Rt<ne&&0>o(_r,Ko)?(C[G]=_r,C[Rt]=L,G=Rt):(C[G]=Ko,C[Et]=L,G=Et);else if(Rt<ne&&0>o(_r,L))C[G]=_r,C[Rt]=L,G=Rt;else break e}}return j}function o(C,j){var L=C.sortIndex-j.sortIndex;return L!==0?L:C.id-j.id}if(typeof performance=="object"&&typeof performance.now=="function"){var l=performance;e.unstable_now=function(){return l.now()}}else{var i=Date,a=i.now();e.unstable_now=function(){return i.now()-a}}var s=[],u=[],d=1,f=null,m=3,y=!1,w=!1,S=!1,k=typeof setTimeout=="function"?setTimeout:null,g=typeof clearTimeout=="function"?clearTimeout:null,p=typeof setImmediate<"u"?setImmediate:null;typeof navigator<"u"&&navigator.scheduling!==void 0&&navigator.scheduling.isInputPending!==void 0&&navigator.scheduling.isInputPending.bind(navigator.scheduling);function h(C){for(var j=n(u);j!==null;){if(j.callback===null)r(u);else if(j.startTime<=C)r(u),j.sortIndex=j.expirationTime,t(s,j);else break;j=n(u)}}function x(C){if(S=!1,h(C),!w)if(n(s)!==null)w=!0,Ge(b);else{var j=n(u);j!==null&&Go(x,j.startTime-C)}}function b(C,j){w=!1,S&&(S=!1,g(R),R=-1),y=!0;var L=m;try{for(h(j),f=n(s);f!==null&&(!(f.expirationTime>j)||C&&!xe());){var G=f.callback;if(typeof G=="function"){f.callback=null,m=f.priorityLevel;var ne=G(f.expirationTime<=j);j=e.unstable_now(),typeof ne=="function"?f.callback=ne:f===n(s)&&r(s),h(j)}else r(s);f=n(s)}if(f!==null)var br=!0;else{var Et=n(u);Et!==null&&Go(x,Et.startTime-j),br=!1}return br}finally{f=null,m=L,y=!1}}var T=!1,E=null,R=-1,F=5,M=-1;function xe(){return!(e.unstable_now()-M<F)}function te(){if(E!==null){var C=e.unstable_now();M=C;var j=!0;try{j=E(!0,C)}finally{j?Q():(T=!1,E=null)}}else T=!1}var Q;if(typeof p=="function")Q=function(){p(te)};else if(typeof MessageChannel<"u"){var Fe=new MessageChannel,En=Fe.port2;Fe.port1.onmessage=te,Q=function(){En.postMessage(null)}}else Q=function(){k(te,0)};function Ge(C){E=C,T||(T=!0,Q())}function Go(C,j){R=k(function(){C(e.unstable_now())},j)}e.unstable_IdlePriority=5,e.unstable_ImmediatePriority=1,e.unstable_LowPriority=4,e.unstable_NormalPriority=3,e.unstable_Profiling=null,e.unstable_UserBlockingPriority=2,e.unstable_cancelCallback=function(C){C.callback=null},e.unstable_continueExecution=function(){w||y||(w=!0,Ge(b))},e.unstable_forceFrameRate=function(C){0>C||125<C?console.error("forceFrameRate takes a positive int between 0 and 125, forcing frame rates higher than 125 fps is not supported"):F=0<C?Math.floor(1e3/C):5},e.unstable_getCurrentPriorityLevel=function(){return m},e.unstable_getFirstCallbackNode=function(){return n(s)},e.unstable_next=function(C){switch(m){case 1:case 2:case 3:var j=3;break;default:j=m}var L=m;m=j;try{return C()}finally{m=L}},e.unstable_pauseExecution=function(){},e.unstable_requestPaint=function(){},e.unstable_runWithPriority=function(C,j){switch(C){case 1:case 2:case 3:case 4:case 5:break;default:C=3}var L=m;m=C;try{return j()}finally{m=L}},e.unstable_scheduleCallback=function(C,j,L){var G=e.unstable_now();switch(typeof L=="object"&&L!==null?(L=L.delay,L=typeof L=="number"&&0<L?G+L:G):L=G,C){case 1:var ne=-1;break;case 2:ne=250;break;case 5:ne=1073741823;break;case 4:ne=1e4;break;default:ne=5e3}return ne=L+ne,C={id:d++,callback:j,priorityLevel:C,startTime:L,expirationTime:ne,sortIndex:-1},L>G?(C.sortIndex=L,t(u,C),n(s)===null&&C===n(u)&&(S?(g(R),R=-1):S=!0,Go(x,L-G))):(C.sortIndex=ne,t(s,C),w||y||(w=!0,Ge(b))),C},e.unstable_shouldYield=xe,e.unstable_wrapCallback=function(C){var j=m;return function(){var L=m;m=j;try{return C.apply(this,arguments)}finally{m=L}}}})(Nu);Mu.exports=Nu;var zd=Mu.exports;/**
 * @license React
 * react-dom.production.min.js
 *
 * Copyright (c) Facebook, Inc. and its affiliates.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */var Od=v,_e=zd;function P(e){for(var t="https://reactjs.org/docs/error-decoder.html?invariant="+e,n=1;n<arguments.length;n++)t+="&args[]="+encodeURIComponent(arguments[n]);return"Minified React error #"+e+"; visit "+t+" for the full message or use the non-minified dev environment for full errors and additional helpful warnings."}var $u=new Set,Jn={};function Ut(e,t){gn(e,t),gn(e+"Capture",t)}function gn(e,t){for(Jn[e]=t,e=0;e<t.length;e++)$u.add(t[e])}var qe=!(typeof window>"u"||typeof window.document>"u"||typeof window.document.createElement>"u"),kl=Object.prototype.hasOwnProperty,Id=/^[:A-Z_a-z\u00C0-\u00D6\u00D8-\u00F6\u00F8-\u02FF\u0370-\u037D\u037F-\u1FFF\u200C-\u200D\u2070-\u218F\u2C00-\u2FEF\u3001-\uD7FF\uF900-\uFDCF\uFDF0-\uFFFD][:A-Z_a-z\u00C0-\u00D6\u00D8-\u00F6\u00F8-\u02FF\u0370-\u037D\u037F-\u1FFF\u200C-\u200D\u2070-\u218F\u2C00-\u2FEF\u3001-\uD7FF\uF900-\uFDCF\uFDF0-\uFFFD\-.0-9\u00B7\u0300-\u036F\u203F-\u2040]*$/,Ha={},Qa={};function Dd(e){return kl.call(Qa,e)?!0:kl.call(Ha,e)?!1:Id.test(e)?Qa[e]=!0:(Ha[e]=!0,!1)}function Fd(e,t,n,r){if(n!==null&&n.type===0)return!1;switch(typeof t){case"function":case"symbol":return!0;case"boolean":return r?!1:n!==null?!n.acceptsBooleans:(e=e.toLowerCase().slice(0,5),e!=="data-"&&e!=="aria-");default:return!1}}function Wd(e,t,n,r){if(t===null||typeof t>"u"||Fd(e,t,n,r))return!0;if(r)return!1;if(n!==null)switch(n.type){case 3:return!t;case 4:return t===!1;case 5:return isNaN(t);case 6:return isNaN(t)||1>t}return!1}function me(e,t,n,r,o,l,i){this.acceptsBooleans=t===2||t===3||t===4,this.attributeName=r,this.attributeNamespace=o,this.mustUseProperty=n,this.propertyName=e,this.type=t,this.sanitizeURL=l,this.removeEmptyString=i}var ae={};"children dangerouslySetInnerHTML defaultValue defaultChecked innerHTML suppressContentEditableWarning suppressHydrationWarning style".split(" ").forEach(function(e){ae[e]=new me(e,0,!1,e,null,!1,!1)});[["acceptCharset","accept-charset"],["className","class"],["htmlFor","for"],["httpEquiv","http-equiv"]].forEach(function(e){var t=e[0];ae[t]=new me(t,1,!1,e[1],null,!1,!1)});["contentEditable","draggable","spellCheck","value"].forEach(function(e){ae[e]=new me(e,2,!1,e.toLowerCase(),null,!1,!1)});["autoReverse","externalResourcesRequired","focusable","preserveAlpha"].forEach(function(e){ae[e]=new me(e,2,!1,e,null,!1,!1)});"allowFullScreen async autoFocus autoPlay controls default defer disabled disablePictureInPicture disableRemotePlayback formNoValidate hidden loop noModule noValidate open playsInline readOnly required reversed scoped seamless itemScope".split(" ").forEach(function(e){ae[e]=new me(e,3,!1,e.toLowerCase(),null,!1,!1)});["checked","multiple","muted","selected"].forEach(function(e){ae[e]=new me(e,3,!0,e,null,!1,!1)});["capture","download"].forEach(function(e){ae[e]=new me(e,4,!1,e,null,!1,!1)});["cols","rows","size","span"].forEach(function(e){ae[e]=new me(e,6,!1,e,null,!1,!1)});["rowSpan","start"].forEach(function(e){ae[e]=new me(e,5,!1,e.toLowerCase(),null,!1,!1)});var Ci=/[\-:]([a-z])/g;function Ti(e){return e[1].toUpperCase()}"accent-height alignment-baseline arabic-form baseline-shift cap-height clip-path clip-rule color-interpolation color-interpolation-filters color-profile color-rendering dominant-baseline enable-background fill-opacity fill-rule flood-color flood-opacity font-family font-size font-size-adjust font-stretch font-style font-variant font-weight glyph-name glyph-orientation-horizontal glyph-orientation-vertical horiz-adv-x horiz-origin-x image-rendering letter-spacing lighting-color marker-end marker-mid marker-start overline-position overline-thickness paint-order panose-1 pointer-events rendering-intent shape-rendering stop-color stop-opacity strikethrough-position strikethrough-thickness stroke-dasharray stroke-dashoffset stroke-linecap stroke-linejoin stroke-miterlimit stroke-opacity stroke-width text-anchor text-decoration text-rendering underline-position underline-thickness unicode-bidi unicode-range units-per-em v-alphabetic v-hanging v-ideographic v-mathematical vector-effect vert-adv-y vert-origin-x vert-origin-y word-spacing writing-mode xmlns:xlink x-height".split(" ").forEach(function(e){var t=e.replace(Ci,Ti);ae[t]=new me(t,1,!1,e,null,!1,!1)});"xlink:actuate xlink:arcrole xlink:role xlink:show xlink:title xlink:type".split(" ").forEach(function(e){var t=e.replace(Ci,Ti);ae[t]=new me(t,1,!1,e,"http://www.w3.org/1999/xlink",!1,!1)});["xml:base","xml:lang","xml:space"].forEach(function(e){var t=e.replace(Ci,Ti);ae[t]=new me(t,1,!1,e,"http://www.w3.org/XML/1998/namespace",!1,!1)});["tabIndex","crossOrigin"].forEach(function(e){ae[e]=new me(e,1,!1,e.toLowerCase(),null,!1,!1)});ae.xlinkHref=new me("xlinkHref",1,!1,"xlink:href","http://www.w3.org/1999/xlink",!0,!1);["src","href","action","formAction"].forEach(function(e){ae[e]=new me(e,1,!1,e.toLowerCase(),null,!0,!0)});function Ei(e,t,n,r){var o=ae.hasOwnProperty(t)?ae[t]:null;(o!==null?o.type!==0:r||!(2<t.length)||t[0]!=="o"&&t[0]!=="O"||t[1]!=="n"&&t[1]!=="N")&&(Wd(t,n,o,r)&&(n=null),r||o===null?Dd(t)&&(n===null?e.removeAttribute(t):e.setAttribute(t,""+n)):o.mustUseProperty?e[o.propertyName]=n===null?o.type===3?!1:"":n:(t=o.attributeName,r=o.attributeNamespace,n===null?e.removeAttribute(t):(o=o.type,n=o===3||o===4&&n===!0?"":""+n,r?e.setAttributeNS(r,t,n):e.setAttribute(t,n))))}var rt=Od.__SECRET_INTERNALS_DO_NOT_USE_OR_YOU_WILL_BE_FIRED,Tr=Symbol.for("react.element"),Yt=Symbol.for("react.portal"),Xt=Symbol.for("react.fragment"),Ri=Symbol.for("react.strict_mode"),bl=Symbol.for("react.profiler"),Au=Symbol.for("react.provider"),Bu=Symbol.for("react.context"),ji=Symbol.for("react.forward_ref"),_l=Symbol.for("react.suspense"),Cl=Symbol.for("react.suspense_list"),Li=Symbol.for("react.memo"),it=Symbol.for("react.lazy"),zu=Symbol.for("react.offscreen"),Ga=Symbol.iterator;function Rn(e){return e===null||typeof e!="object"?null:(e=Ga&&e[Ga]||e["@@iterator"],typeof e=="function"?e:null)}var V=Object.assign,Xo;function zn(e){if(Xo===void 0)try{throw Error()}catch(n){var t=n.stack.trim().match(/\n( *(at )?)/);Xo=t&&t[1]||""}return`
`+Xo+e}var Jo=!1;function Zo(e,t){if(!e||Jo)return"";Jo=!0;var n=Error.prepareStackTrace;Error.prepareStackTrace=void 0;try{if(t)if(t=function(){throw Error()},Object.defineProperty(t.prototype,"props",{set:function(){throw Error()}}),typeof Reflect=="object"&&Reflect.construct){try{Reflect.construct(t,[])}catch(u){var r=u}Reflect.construct(e,[],t)}else{try{t.call()}catch(u){r=u}e.call(t.prototype)}else{try{throw Error()}catch(u){r=u}e()}}catch(u){if(u&&r&&typeof u.stack=="string"){for(var o=u.stack.split(`
`),l=r.stack.split(`
`),i=o.length-1,a=l.length-1;1<=i&&0<=a&&o[i]!==l[a];)a--;for(;1<=i&&0<=a;i--,a--)if(o[i]!==l[a]){if(i!==1||a!==1)do if(i--,a--,0>a||o[i]!==l[a]){var s=`
`+o[i].replace(" at new "," at ");return e.displayName&&s.includes("<anonymous>")&&(s=s.replace("<anonymous>",e.displayName)),s}while(1<=i&&0<=a);break}}}finally{Jo=!1,Error.prepareStackTrace=n}return(e=e?e.displayName||e.name:"")?zn(e):""}function Ud(e){switch(e.tag){case 5:return zn(e.type);case 16:return zn("Lazy");case 13:return zn("Suspense");case 19:return zn("SuspenseList");case 0:case 2:case 15:return e=Zo(e.type,!1),e;case 11:return e=Zo(e.type.render,!1),e;case 1:return e=Zo(e.type,!0),e;default:return""}}function Tl(e){if(e==null)return null;if(typeof e=="function")return e.displayName||e.name||null;if(typeof e=="string")return e;switch(e){case Xt:return"Fragment";case Yt:return"Portal";case bl:return"Profiler";case Ri:return"StrictMode";case _l:return"Suspense";case Cl:return"SuspenseList"}if(typeof e=="object")switch(e.$$typeof){case Bu:return(e.displayName||"Context")+".Consumer";case Au:return(e._context.displayName||"Context")+".Provider";case ji:var t=e.render;return e=e.displayName,e||(e=t.displayName||t.name||"",e=e!==""?"ForwardRef("+e+")":"ForwardRef"),e;case Li:return t=e.displayName||null,t!==null?t:Tl(e.type)||"Memo";case it:t=e._payload,e=e._init;try{return Tl(e(t))}catch{}}return null}function Vd(e){var t=e.type;switch(e.tag){case 24:return"Cache";case 9:return(t.displayName||"Context")+".Consumer";case 10:return(t._context.displayName||"Context")+".Provider";case 18:return"DehydratedFragment";case 11:return e=t.render,e=e.displayName||e.name||"",t.displayName||(e!==""?"ForwardRef("+e+")":"ForwardRef");case 7:return"Fragment";case 5:return t;case 4:return"Portal";case 3:return"Root";case 6:return"Text";case 16:return Tl(t);case 8:return t===Ri?"StrictMode":"Mode";case 22:return"Offscreen";case 12:return"Profiler";case 21:return"Scope";case 13:return"Suspense";case 19:return"SuspenseList";case 25:return"TracingMarker";case 1:case 0:case 17:case 2:case 14:case 15:if(typeof t=="function")return t.displayName||t.name||null;if(typeof t=="string")return t}return null}function Pt(e){switch(typeof e){case"boolean":case"number":case"string":case"undefined":return e;case"object":return e;default:return""}}function Ou(e){var t=e.type;return(e=e.nodeName)&&e.toLowerCase()==="input"&&(t==="checkbox"||t==="radio")}function Hd(e){var t=Ou(e)?"checked":"value",n=Object.getOwnPropertyDescriptor(e.constructor.prototype,t),r=""+e[t];if(!e.hasOwnProperty(t)&&typeof n<"u"&&typeof n.get=="function"&&typeof n.set=="function"){var o=n.get,l=n.set;return Object.defineProperty(e,t,{configurable:!0,get:function(){return o.call(this)},set:function(i){r=""+i,l.call(this,i)}}),Object.defineProperty(e,t,{enumerable:n.enumerable}),{getValue:function(){return r},setValue:function(i){r=""+i},stopTracking:function(){e._valueTracker=null,delete e[t]}}}}function Er(e){e._valueTracker||(e._valueTracker=Hd(e))}function Iu(e){if(!e)return!1;var t=e._valueTracker;if(!t)return!0;var n=t.getValue(),r="";return e&&(r=Ou(e)?e.checked?"true":"false":e.value),e=r,e!==n?(t.setValue(e),!0):!1}function ro(e){if(e=e||(typeof document<"u"?document:void 0),typeof e>"u")return null;try{return e.activeElement||e.body}catch{return e.body}}function El(e,t){var n=t.checked;return V({},t,{defaultChecked:void 0,defaultValue:void 0,value:void 0,checked:n??e._wrapperState.initialChecked})}function Ka(e,t){var n=t.defaultValue==null?"":t.defaultValue,r=t.checked!=null?t.checked:t.defaultChecked;n=Pt(t.value!=null?t.value:n),e._wrapperState={initialChecked:r,initialValue:n,controlled:t.type==="checkbox"||t.type==="radio"?t.checked!=null:t.value!=null}}function Du(e,t){t=t.checked,t!=null&&Ei(e,"checked",t,!1)}function Rl(e,t){Du(e,t);var n=Pt(t.value),r=t.type;if(n!=null)r==="number"?(n===0&&e.value===""||e.value!=n)&&(e.value=""+n):e.value!==""+n&&(e.value=""+n);else if(r==="submit"||r==="reset"){e.removeAttribute("value");return}t.hasOwnProperty("value")?jl(e,t.type,n):t.hasOwnProperty("defaultValue")&&jl(e,t.type,Pt(t.defaultValue)),t.checked==null&&t.defaultChecked!=null&&(e.defaultChecked=!!t.defaultChecked)}function Ya(e,t,n){if(t.hasOwnProperty("value")||t.hasOwnProperty("defaultValue")){var r=t.type;if(!(r!=="submit"&&r!=="reset"||t.value!==void 0&&t.value!==null))return;t=""+e._wrapperState.initialValue,n||t===e.value||(e.value=t),e.defaultValue=t}n=e.name,n!==""&&(e.name=""),e.defaultChecked=!!e._wrapperState.initialChecked,n!==""&&(e.name=n)}function jl(e,t,n){(t!=="number"||ro(e.ownerDocument)!==e)&&(n==null?e.defaultValue=""+e._wrapperState.initialValue:e.defaultValue!==""+n&&(e.defaultValue=""+n))}var On=Array.isArray;function sn(e,t,n,r){if(e=e.options,t){t={};for(var o=0;o<n.length;o++)t["$"+n[o]]=!0;for(n=0;n<e.length;n++)o=t.hasOwnProperty("$"+e[n].value),e[n].selected!==o&&(e[n].selected=o),o&&r&&(e[n].defaultSelected=!0)}else{for(n=""+Pt(n),t=null,o=0;o<e.length;o++){if(e[o].value===n){e[o].selected=!0,r&&(e[o].defaultSelected=!0);return}t!==null||e[o].disabled||(t=e[o])}t!==null&&(t.selected=!0)}}function Ll(e,t){if(t.dangerouslySetInnerHTML!=null)throw Error(P(91));return V({},t,{value:void 0,defaultValue:void 0,children:""+e._wrapperState.initialValue})}function Xa(e,t){var n=t.value;if(n==null){if(n=t.children,t=t.defaultValue,n!=null){if(t!=null)throw Error(P(92));if(On(n)){if(1<n.length)throw Error(P(93));n=n[0]}t=n}t==null&&(t=""),n=t}e._wrapperState={initialValue:Pt(n)}}function Fu(e,t){var n=Pt(t.value),r=Pt(t.defaultValue);n!=null&&(n=""+n,n!==e.value&&(e.value=n),t.defaultValue==null&&e.defaultValue!==n&&(e.defaultValue=n)),r!=null&&(e.defaultValue=""+r)}function Ja(e){var t=e.textContent;t===e._wrapperState.initialValue&&t!==""&&t!==null&&(e.value=t)}function Wu(e){switch(e){case"svg":return"http://www.w3.org/2000/svg";case"math":return"http://www.w3.org/1998/Math/MathML";default:return"http://www.w3.org/1999/xhtml"}}function Ml(e,t){return e==null||e==="http://www.w3.org/1999/xhtml"?Wu(t):e==="http://www.w3.org/2000/svg"&&t==="foreignObject"?"http://www.w3.org/1999/xhtml":e}var Rr,Uu=function(e){return typeof MSApp<"u"&&MSApp.execUnsafeLocalFunction?function(t,n,r,o){MSApp.execUnsafeLocalFunction(function(){return e(t,n,r,o)})}:e}(function(e,t){if(e.namespaceURI!=="http://www.w3.org/2000/svg"||"innerHTML"in e)e.innerHTML=t;else{for(Rr=Rr||document.createElement("div"),Rr.innerHTML="<svg>"+t.valueOf().toString()+"</svg>",t=Rr.firstChild;e.firstChild;)e.removeChild(e.firstChild);for(;t.firstChild;)e.appendChild(t.firstChild)}});function Zn(e,t){if(t){var n=e.firstChild;if(n&&n===e.lastChild&&n.nodeType===3){n.nodeValue=t;return}}e.textContent=t}var Wn={animationIterationCount:!0,aspectRatio:!0,borderImageOutset:!0,borderImageSlice:!0,borderImageWidth:!0,boxFlex:!0,boxFlexGroup:!0,boxOrdinalGroup:!0,columnCount:!0,columns:!0,flex:!0,flexGrow:!0,flexPositive:!0,flexShrink:!0,flexNegative:!0,flexOrder:!0,gridArea:!0,gridRow:!0,gridRowEnd:!0,gridRowSpan:!0,gridRowStart:!0,gridColumn:!0,gridColumnEnd:!0,gridColumnSpan:!0,gridColumnStart:!0,fontWeight:!0,lineClamp:!0,lineHeight:!0,opacity:!0,order:!0,orphans:!0,tabSize:!0,widows:!0,zIndex:!0,zoom:!0,fillOpacity:!0,floodOpacity:!0,stopOpacity:!0,strokeDasharray:!0,strokeDashoffset:!0,strokeMiterlimit:!0,strokeOpacity:!0,strokeWidth:!0},Qd=["Webkit","ms","Moz","O"];Object.keys(Wn).forEach(function(e){Qd.forEach(function(t){t=t+e.charAt(0).toUpperCase()+e.substring(1),Wn[t]=Wn[e]})});function Vu(e,t,n){return t==null||typeof t=="boolean"||t===""?"":n||typeof t!="number"||t===0||Wn.hasOwnProperty(e)&&Wn[e]?(""+t).trim():t+"px"}function Hu(e,t){e=e.style;for(var n in t)if(t.hasOwnProperty(n)){var r=n.indexOf("--")===0,o=Vu(n,t[n],r);n==="float"&&(n="cssFloat"),r?e.setProperty(n,o):e[n]=o}}var Gd=V({menuitem:!0},{area:!0,base:!0,br:!0,col:!0,embed:!0,hr:!0,img:!0,input:!0,keygen:!0,link:!0,meta:!0,param:!0,source:!0,track:!0,wbr:!0});function Nl(e,t){if(t){if(Gd[e]&&(t.children!=null||t.dangerouslySetInnerHTML!=null))throw Error(P(137,e));if(t.dangerouslySetInnerHTML!=null){if(t.children!=null)throw Error(P(60));if(typeof t.dangerouslySetInnerHTML!="object"||!("__html"in t.dangerouslySetInnerHTML))throw Error(P(61))}if(t.style!=null&&typeof t.style!="object")throw Error(P(62))}}function $l(e,t){if(e.indexOf("-")===-1)return typeof t.is=="string";switch(e){case"annotation-xml":case"color-profile":case"font-face":case"font-face-src":case"font-face-uri":case"font-face-format":case"font-face-name":case"missing-glyph":return!1;default:return!0}}var Al=null;function Mi(e){return e=e.target||e.srcElement||window,e.correspondingUseElement&&(e=e.correspondingUseElement),e.nodeType===3?e.parentNode:e}var Bl=null,un=null,cn=null;function Za(e){if(e=wr(e)){if(typeof Bl!="function")throw Error(P(280));var t=e.stateNode;t&&(t=$o(t),Bl(e.stateNode,e.type,t))}}function Qu(e){un?cn?cn.push(e):cn=[e]:un=e}function Gu(){if(un){var e=un,t=cn;if(cn=un=null,Za(e),t)for(e=0;e<t.length;e++)Za(t[e])}}function Ku(e,t){return e(t)}function Yu(){}var qo=!1;function Xu(e,t,n){if(qo)return e(t,n);qo=!0;try{return Ku(e,t,n)}finally{qo=!1,(un!==null||cn!==null)&&(Yu(),Gu())}}function qn(e,t){var n=e.stateNode;if(n===null)return null;var r=$o(n);if(r===null)return null;n=r[t];e:switch(t){case"onClick":case"onClickCapture":case"onDoubleClick":case"onDoubleClickCapture":case"onMouseDown":case"onMouseDownCapture":case"onMouseMove":case"onMouseMoveCapture":case"onMouseUp":case"onMouseUpCapture":case"onMouseEnter":(r=!r.disabled)||(e=e.type,r=!(e==="button"||e==="input"||e==="select"||e==="textarea")),e=!r;break e;default:e=!1}if(e)return null;if(n&&typeof n!="function")throw Error(P(231,t,typeof n));return n}var zl=!1;if(qe)try{var jn={};Object.defineProperty(jn,"passive",{get:function(){zl=!0}}),window.addEventListener("test",jn,jn),window.removeEventListener("test",jn,jn)}catch{zl=!1}function Kd(e,t,n,r,o,l,i,a,s){var u=Array.prototype.slice.call(arguments,3);try{t.apply(n,u)}catch(d){this.onError(d)}}var Un=!1,oo=null,lo=!1,Ol=null,Yd={onError:function(e){Un=!0,oo=e}};function Xd(e,t,n,r,o,l,i,a,s){Un=!1,oo=null,Kd.apply(Yd,arguments)}function Jd(e,t,n,r,o,l,i,a,s){if(Xd.apply(this,arguments),Un){if(Un){var u=oo;Un=!1,oo=null}else throw Error(P(198));lo||(lo=!0,Ol=u)}}function Vt(e){var t=e,n=e;if(e.alternate)for(;t.return;)t=t.return;else{e=t;do t=e,t.flags&4098&&(n=t.return),e=t.return;while(e)}return t.tag===3?n:null}function Ju(e){if(e.tag===13){var t=e.memoizedState;if(t===null&&(e=e.alternate,e!==null&&(t=e.memoizedState)),t!==null)return t.dehydrated}return null}function qa(e){if(Vt(e)!==e)throw Error(P(188))}function Zd(e){var t=e.alternate;if(!t){if(t=Vt(e),t===null)throw Error(P(188));return t!==e?null:e}for(var n=e,r=t;;){var o=n.return;if(o===null)break;var l=o.alternate;if(l===null){if(r=o.return,r!==null){n=r;continue}break}if(o.child===l.child){for(l=o.child;l;){if(l===n)return qa(o),e;if(l===r)return qa(o),t;l=l.sibling}throw Error(P(188))}if(n.return!==r.return)n=o,r=l;else{for(var i=!1,a=o.child;a;){if(a===n){i=!0,n=o,r=l;break}if(a===r){i=!0,r=o,n=l;break}a=a.sibling}if(!i){for(a=l.child;a;){if(a===n){i=!0,n=l,r=o;break}if(a===r){i=!0,r=l,n=o;break}a=a.sibling}if(!i)throw Error(P(189))}}if(n.alternate!==r)throw Error(P(190))}if(n.tag!==3)throw Error(P(188));return n.stateNode.current===n?e:t}function Zu(e){return e=Zd(e),e!==null?qu(e):null}function qu(e){if(e.tag===5||e.tag===6)return e;for(e=e.child;e!==null;){var t=qu(e);if(t!==null)return t;e=e.sibling}return null}var ec=_e.unstable_scheduleCallback,es=_e.unstable_cancelCallback,qd=_e.unstable_shouldYield,ep=_e.unstable_requestPaint,K=_e.unstable_now,tp=_e.unstable_getCurrentPriorityLevel,Ni=_e.unstable_ImmediatePriority,tc=_e.unstable_UserBlockingPriority,io=_e.unstable_NormalPriority,np=_e.unstable_LowPriority,nc=_e.unstable_IdlePriority,jo=null,He=null;function rp(e){if(He&&typeof He.onCommitFiberRoot=="function")try{He.onCommitFiberRoot(jo,e,void 0,(e.current.flags&128)===128)}catch{}}var Oe=Math.clz32?Math.clz32:ip,op=Math.log,lp=Math.LN2;function ip(e){return e>>>=0,e===0?32:31-(op(e)/lp|0)|0}var jr=64,Lr=4194304;function In(e){switch(e&-e){case 1:return 1;case 2:return 2;case 4:return 4;case 8:return 8;case 16:return 16;case 32:return 32;case 64:case 128:case 256:case 512:case 1024:case 2048:case 4096:case 8192:case 16384:case 32768:case 65536:case 131072:case 262144:case 524288:case 1048576:case 2097152:return e&4194240;case 4194304:case 8388608:case 16777216:case 33554432:case 67108864:return e&130023424;case 134217728:return 134217728;case 268435456:return 268435456;case 536870912:return 536870912;case 1073741824:return 1073741824;default:return e}}function ao(e,t){var n=e.pendingLanes;if(n===0)return 0;var r=0,o=e.suspendedLanes,l=e.pingedLanes,i=n&268435455;if(i!==0){var a=i&~o;a!==0?r=In(a):(l&=i,l!==0&&(r=In(l)))}else i=n&~o,i!==0?r=In(i):l!==0&&(r=In(l));if(r===0)return 0;if(t!==0&&t!==r&&!(t&o)&&(o=r&-r,l=t&-t,o>=l||o===16&&(l&4194240)!==0))return t;if(r&4&&(r|=n&16),t=e.entangledLanes,t!==0)for(e=e.entanglements,t&=r;0<t;)n=31-Oe(t),o=1<<n,r|=e[n],t&=~o;return r}function ap(e,t){switch(e){case 1:case 2:case 4:return t+250;case 8:case 16:case 32:case 64:case 128:case 256:case 512:case 1024:case 2048:case 4096:case 8192:case 16384:case 32768:case 65536:case 131072:case 262144:case 524288:case 1048576:case 2097152:return t+5e3;case 4194304:case 8388608:case 16777216:case 33554432:case 67108864:return-1;case 134217728:case 268435456:case 536870912:case 1073741824:return-1;default:return-1}}function sp(e,t){for(var n=e.suspendedLanes,r=e.pingedLanes,o=e.expirationTimes,l=e.pendingLanes;0<l;){var i=31-Oe(l),a=1<<i,s=o[i];s===-1?(!(a&n)||a&r)&&(o[i]=ap(a,t)):s<=t&&(e.expiredLanes|=a),l&=~a}}function Il(e){return e=e.pendingLanes&-1073741825,e!==0?e:e&1073741824?1073741824:0}function rc(){var e=jr;return jr<<=1,!(jr&4194240)&&(jr=64),e}function el(e){for(var t=[],n=0;31>n;n++)t.push(e);return t}function vr(e,t,n){e.pendingLanes|=t,t!==536870912&&(e.suspendedLanes=0,e.pingedLanes=0),e=e.eventTimes,t=31-Oe(t),e[t]=n}function up(e,t){var n=e.pendingLanes&~t;e.pendingLanes=t,e.suspendedLanes=0,e.pingedLanes=0,e.expiredLanes&=t,e.mutableReadLanes&=t,e.entangledLanes&=t,t=e.entanglements;var r=e.eventTimes;for(e=e.expirationTimes;0<n;){var o=31-Oe(n),l=1<<o;t[o]=0,r[o]=-1,e[o]=-1,n&=~l}}function $i(e,t){var n=e.entangledLanes|=t;for(e=e.entanglements;n;){var r=31-Oe(n),o=1<<r;o&t|e[r]&t&&(e[r]|=t),n&=~o}}var A=0;function oc(e){return e&=-e,1<e?4<e?e&268435455?16:536870912:4:1}var lc,Ai,ic,ac,sc,Dl=!1,Mr=[],pt=null,gt=null,mt=null,er=new Map,tr=new Map,st=[],cp="mousedown mouseup touchcancel touchend touchstart auxclick dblclick pointercancel pointerdown pointerup dragend dragstart drop compositionend compositionstart keydown keypress keyup input textInput copy cut paste click change contextmenu reset submit".split(" ");function ts(e,t){switch(e){case"focusin":case"focusout":pt=null;break;case"dragenter":case"dragleave":gt=null;break;case"mouseover":case"mouseout":mt=null;break;case"pointerover":case"pointerout":er.delete(t.pointerId);break;case"gotpointercapture":case"lostpointercapture":tr.delete(t.pointerId)}}function Ln(e,t,n,r,o,l){return e===null||e.nativeEvent!==l?(e={blockedOn:t,domEventName:n,eventSystemFlags:r,nativeEvent:l,targetContainers:[o]},t!==null&&(t=wr(t),t!==null&&Ai(t)),e):(e.eventSystemFlags|=r,t=e.targetContainers,o!==null&&t.indexOf(o)===-1&&t.push(o),e)}function fp(e,t,n,r,o){switch(t){case"focusin":return pt=Ln(pt,e,t,n,r,o),!0;case"dragenter":return gt=Ln(gt,e,t,n,r,o),!0;case"mouseover":return mt=Ln(mt,e,t,n,r,o),!0;case"pointerover":var l=o.pointerId;return er.set(l,Ln(er.get(l)||null,e,t,n,r,o)),!0;case"gotpointercapture":return l=o.pointerId,tr.set(l,Ln(tr.get(l)||null,e,t,n,r,o)),!0}return!1}function uc(e){var t=Nt(e.target);if(t!==null){var n=Vt(t);if(n!==null){if(t=n.tag,t===13){if(t=Ju(n),t!==null){e.blockedOn=t,sc(e.priority,function(){ic(n)});return}}else if(t===3&&n.stateNode.current.memoizedState.isDehydrated){e.blockedOn=n.tag===3?n.stateNode.containerInfo:null;return}}}e.blockedOn=null}function Gr(e){if(e.blockedOn!==null)return!1;for(var t=e.targetContainers;0<t.length;){var n=Fl(e.domEventName,e.eventSystemFlags,t[0],e.nativeEvent);if(n===null){n=e.nativeEvent;var r=new n.constructor(n.type,n);Al=r,n.target.dispatchEvent(r),Al=null}else return t=wr(n),t!==null&&Ai(t),e.blockedOn=n,!1;t.shift()}return!0}function ns(e,t,n){Gr(e)&&n.delete(t)}function dp(){Dl=!1,pt!==null&&Gr(pt)&&(pt=null),gt!==null&&Gr(gt)&&(gt=null),mt!==null&&Gr(mt)&&(mt=null),er.forEach(ns),tr.forEach(ns)}function Mn(e,t){e.blockedOn===t&&(e.blockedOn=null,Dl||(Dl=!0,_e.unstable_scheduleCallback(_e.unstable_NormalPriority,dp)))}function nr(e){function t(o){return Mn(o,e)}if(0<Mr.length){Mn(Mr[0],e);for(var n=1;n<Mr.length;n++){var r=Mr[n];r.blockedOn===e&&(r.blockedOn=null)}}for(pt!==null&&Mn(pt,e),gt!==null&&Mn(gt,e),mt!==null&&Mn(mt,e),er.forEach(t),tr.forEach(t),n=0;n<st.length;n++)r=st[n],r.blockedOn===e&&(r.blockedOn=null);for(;0<st.length&&(n=st[0],n.blockedOn===null);)uc(n),n.blockedOn===null&&st.shift()}var fn=rt.ReactCurrentBatchConfig,so=!0;function pp(e,t,n,r){var o=A,l=fn.transition;fn.transition=null;try{A=1,Bi(e,t,n,r)}finally{A=o,fn.transition=l}}function gp(e,t,n,r){var o=A,l=fn.transition;fn.transition=null;try{A=4,Bi(e,t,n,r)}finally{A=o,fn.transition=l}}function Bi(e,t,n,r){if(so){var o=Fl(e,t,n,r);if(o===null)cl(e,t,r,uo,n),ts(e,r);else if(fp(o,e,t,n,r))r.stopPropagation();else if(ts(e,r),t&4&&-1<cp.indexOf(e)){for(;o!==null;){var l=wr(o);if(l!==null&&lc(l),l=Fl(e,t,n,r),l===null&&cl(e,t,r,uo,n),l===o)break;o=l}o!==null&&r.stopPropagation()}else cl(e,t,r,null,n)}}var uo=null;function Fl(e,t,n,r){if(uo=null,e=Mi(r),e=Nt(e),e!==null)if(t=Vt(e),t===null)e=null;else if(n=t.tag,n===13){if(e=Ju(t),e!==null)return e;e=null}else if(n===3){if(t.stateNode.current.memoizedState.isDehydrated)return t.tag===3?t.stateNode.containerInfo:null;e=null}else t!==e&&(e=null);return uo=e,null}function cc(e){switch(e){case"cancel":case"click":case"close":case"contextmenu":case"copy":case"cut":case"auxclick":case"dblclick":case"dragend":case"dragstart":case"drop":case"focusin":case"focusout":case"input":case"invalid":case"keydown":case"keypress":case"keyup":case"mousedown":case"mouseup":case"paste":case"pause":case"play":case"pointercancel":case"pointerdown":case"pointerup":case"ratechange":case"reset":case"resize":case"seeked":case"submit":case"touchcancel":case"touchend":case"touchstart":case"volumechange":case"change":case"selectionchange":case"textInput":case"compositionstart":case"compositionend":case"compositionupdate":case"beforeblur":case"afterblur":case"beforeinput":case"blur":case"fullscreenchange":case"focus":case"hashchange":case"popstate":case"select":case"selectstart":return 1;case"drag":case"dragenter":case"dragexit":case"dragleave":case"dragover":case"mousemove":case"mouseout":case"mouseover":case"pointermove":case"pointerout":case"pointerover":case"scroll":case"toggle":case"touchmove":case"wheel":case"mouseenter":case"mouseleave":case"pointerenter":case"pointerleave":return 4;case"message":switch(tp()){case Ni:return 1;case tc:return 4;case io:case np:return 16;case nc:return 536870912;default:return 16}default:return 16}}var ct=null,zi=null,Kr=null;function fc(){if(Kr)return Kr;var e,t=zi,n=t.length,r,o="value"in ct?ct.value:ct.textContent,l=o.length;for(e=0;e<n&&t[e]===o[e];e++);var i=n-e;for(r=1;r<=i&&t[n-r]===o[l-r];r++);return Kr=o.slice(e,1<r?1-r:void 0)}function Yr(e){var t=e.keyCode;return"charCode"in e?(e=e.charCode,e===0&&t===13&&(e=13)):e=t,e===10&&(e=13),32<=e||e===13?e:0}function Nr(){return!0}function rs(){return!1}function Te(e){function t(n,r,o,l,i){this._reactName=n,this._targetInst=o,this.type=r,this.nativeEvent=l,this.target=i,this.currentTarget=null;for(var a in e)e.hasOwnProperty(a)&&(n=e[a],this[a]=n?n(l):l[a]);return this.isDefaultPrevented=(l.defaultPrevented!=null?l.defaultPrevented:l.returnValue===!1)?Nr:rs,this.isPropagationStopped=rs,this}return V(t.prototype,{preventDefault:function(){this.defaultPrevented=!0;var n=this.nativeEvent;n&&(n.preventDefault?n.preventDefault():typeof n.returnValue!="unknown"&&(n.returnValue=!1),this.isDefaultPrevented=Nr)},stopPropagation:function(){var n=this.nativeEvent;n&&(n.stopPropagation?n.stopPropagation():typeof n.cancelBubble!="unknown"&&(n.cancelBubble=!0),this.isPropagationStopped=Nr)},persist:function(){},isPersistent:Nr}),t}var kn={eventPhase:0,bubbles:0,cancelable:0,timeStamp:function(e){return e.timeStamp||Date.now()},defaultPrevented:0,isTrusted:0},Oi=Te(kn),yr=V({},kn,{view:0,detail:0}),mp=Te(yr),tl,nl,Nn,Lo=V({},yr,{screenX:0,screenY:0,clientX:0,clientY:0,pageX:0,pageY:0,ctrlKey:0,shiftKey:0,altKey:0,metaKey:0,getModifierState:Ii,button:0,buttons:0,relatedTarget:function(e){return e.relatedTarget===void 0?e.fromElement===e.srcElement?e.toElement:e.fromElement:e.relatedTarget},movementX:function(e){return"movementX"in e?e.movementX:(e!==Nn&&(Nn&&e.type==="mousemove"?(tl=e.screenX-Nn.screenX,nl=e.screenY-Nn.screenY):nl=tl=0,Nn=e),tl)},movementY:function(e){return"movementY"in e?e.movementY:nl}}),os=Te(Lo),hp=V({},Lo,{dataTransfer:0}),vp=Te(hp),yp=V({},yr,{relatedTarget:0}),rl=Te(yp),wp=V({},kn,{animationName:0,elapsedTime:0,pseudoElement:0}),Sp=Te(wp),xp=V({},kn,{clipboardData:function(e){return"clipboardData"in e?e.clipboardData:window.clipboardData}}),Pp=Te(xp),kp=V({},kn,{data:0}),ls=Te(kp),bp={Esc:"Escape",Spacebar:" ",Left:"ArrowLeft",Up:"ArrowUp",Right:"ArrowRight",Down:"ArrowDown",Del:"Delete",Win:"OS",Menu:"ContextMenu",Apps:"ContextMenu",Scroll:"ScrollLock",MozPrintableKey:"Unidentified"},_p={8:"Backspace",9:"Tab",12:"Clear",13:"Enter",16:"Shift",17:"Control",18:"Alt",19:"Pause",20:"CapsLock",27:"Escape",32:" ",33:"PageUp",34:"PageDown",35:"End",36:"Home",37:"ArrowLeft",38:"ArrowUp",39:"ArrowRight",40:"ArrowDown",45:"Insert",46:"Delete",112:"F1",113:"F2",114:"F3",115:"F4",116:"F5",117:"F6",118:"F7",119:"F8",120:"F9",121:"F10",122:"F11",123:"F12",144:"NumLock",145:"ScrollLock",224:"Meta"},Cp={Alt:"altKey",Control:"ctrlKey",Meta:"metaKey",Shift:"shiftKey"};function Tp(e){var t=this.nativeEvent;return t.getModifierState?t.getModifierState(e):(e=Cp[e])?!!t[e]:!1}function Ii(){return Tp}var Ep=V({},yr,{key:function(e){if(e.key){var t=bp[e.key]||e.key;if(t!=="Unidentified")return t}return e.type==="keypress"?(e=Yr(e),e===13?"Enter":String.fromCharCode(e)):e.type==="keydown"||e.type==="keyup"?_p[e.keyCode]||"Unidentified":""},code:0,location:0,ctrlKey:0,shiftKey:0,altKey:0,metaKey:0,repeat:0,locale:0,getModifierState:Ii,charCode:function(e){return e.type==="keypress"?Yr(e):0},keyCode:function(e){return e.type==="keydown"||e.type==="keyup"?e.keyCode:0},which:function(e){return e.type==="keypress"?Yr(e):e.type==="keydown"||e.type==="keyup"?e.keyCode:0}}),Rp=Te(Ep),jp=V({},Lo,{pointerId:0,width:0,height:0,pressure:0,tangentialPressure:0,tiltX:0,tiltY:0,twist:0,pointerType:0,isPrimary:0}),is=Te(jp),Lp=V({},yr,{touches:0,targetTouches:0,changedTouches:0,altKey:0,metaKey:0,ctrlKey:0,shiftKey:0,getModifierState:Ii}),Mp=Te(Lp),Np=V({},kn,{propertyName:0,elapsedTime:0,pseudoElement:0}),$p=Te(Np),Ap=V({},Lo,{deltaX:function(e){return"deltaX"in e?e.deltaX:"wheelDeltaX"in e?-e.wheelDeltaX:0},deltaY:function(e){return"deltaY"in e?e.deltaY:"wheelDeltaY"in e?-e.wheelDeltaY:"wheelDelta"in e?-e.wheelDelta:0},deltaZ:0,deltaMode:0}),Bp=Te(Ap),zp=[9,13,27,32],Di=qe&&"CompositionEvent"in window,Vn=null;qe&&"documentMode"in document&&(Vn=document.documentMode);var Op=qe&&"TextEvent"in window&&!Vn,dc=qe&&(!Di||Vn&&8<Vn&&11>=Vn),as=" ",ss=!1;function pc(e,t){switch(e){case"keyup":return zp.indexOf(t.keyCode)!==-1;case"keydown":return t.keyCode!==229;case"keypress":case"mousedown":case"focusout":return!0;default:return!1}}function gc(e){return e=e.detail,typeof e=="object"&&"data"in e?e.data:null}var Jt=!1;function Ip(e,t){switch(e){case"compositionend":return gc(t);case"keypress":return t.which!==32?null:(ss=!0,as);case"textInput":return e=t.data,e===as&&ss?null:e;default:return null}}function Dp(e,t){if(Jt)return e==="compositionend"||!Di&&pc(e,t)?(e=fc(),Kr=zi=ct=null,Jt=!1,e):null;switch(e){case"paste":return null;case"keypress":if(!(t.ctrlKey||t.altKey||t.metaKey)||t.ctrlKey&&t.altKey){if(t.char&&1<t.char.length)return t.char;if(t.which)return String.fromCharCode(t.which)}return null;case"compositionend":return dc&&t.locale!=="ko"?null:t.data;default:return null}}var Fp={color:!0,date:!0,datetime:!0,"datetime-local":!0,email:!0,month:!0,number:!0,password:!0,range:!0,search:!0,tel:!0,text:!0,time:!0,url:!0,week:!0};function us(e){var t=e&&e.nodeName&&e.nodeName.toLowerCase();return t==="input"?!!Fp[e.type]:t==="textarea"}function mc(e,t,n,r){Qu(r),t=co(t,"onChange"),0<t.length&&(n=new Oi("onChange","change",null,n,r),e.push({event:n,listeners:t}))}var Hn=null,rr=null;function Wp(e){Cc(e,0)}function Mo(e){var t=en(e);if(Iu(t))return e}function Up(e,t){if(e==="change")return t}var hc=!1;if(qe){var ol;if(qe){var ll="oninput"in document;if(!ll){var cs=document.createElement("div");cs.setAttribute("oninput","return;"),ll=typeof cs.oninput=="function"}ol=ll}else ol=!1;hc=ol&&(!document.documentMode||9<document.documentMode)}function fs(){Hn&&(Hn.detachEvent("onpropertychange",vc),rr=Hn=null)}function vc(e){if(e.propertyName==="value"&&Mo(rr)){var t=[];mc(t,rr,e,Mi(e)),Xu(Wp,t)}}function Vp(e,t,n){e==="focusin"?(fs(),Hn=t,rr=n,Hn.attachEvent("onpropertychange",vc)):e==="focusout"&&fs()}function Hp(e){if(e==="selectionchange"||e==="keyup"||e==="keydown")return Mo(rr)}function Qp(e,t){if(e==="click")return Mo(t)}function Gp(e,t){if(e==="input"||e==="change")return Mo(t)}function Kp(e,t){return e===t&&(e!==0||1/e===1/t)||e!==e&&t!==t}var De=typeof Object.is=="function"?Object.is:Kp;function or(e,t){if(De(e,t))return!0;if(typeof e!="object"||e===null||typeof t!="object"||t===null)return!1;var n=Object.keys(e),r=Object.keys(t);if(n.length!==r.length)return!1;for(r=0;r<n.length;r++){var o=n[r];if(!kl.call(t,o)||!De(e[o],t[o]))return!1}return!0}function ds(e){for(;e&&e.firstChild;)e=e.firstChild;return e}function ps(e,t){var n=ds(e);e=0;for(var r;n;){if(n.nodeType===3){if(r=e+n.textContent.length,e<=t&&r>=t)return{node:n,offset:t-e};e=r}e:{for(;n;){if(n.nextSibling){n=n.nextSibling;break e}n=n.parentNode}n=void 0}n=ds(n)}}function yc(e,t){return e&&t?e===t?!0:e&&e.nodeType===3?!1:t&&t.nodeType===3?yc(e,t.parentNode):"contains"in e?e.contains(t):e.compareDocumentPosition?!!(e.compareDocumentPosition(t)&16):!1:!1}function wc(){for(var e=window,t=ro();t instanceof e.HTMLIFrameElement;){try{var n=typeof t.contentWindow.location.href=="string"}catch{n=!1}if(n)e=t.contentWindow;else break;t=ro(e.document)}return t}function Fi(e){var t=e&&e.nodeName&&e.nodeName.toLowerCase();return t&&(t==="input"&&(e.type==="text"||e.type==="search"||e.type==="tel"||e.type==="url"||e.type==="password")||t==="textarea"||e.contentEditable==="true")}function Yp(e){var t=wc(),n=e.focusedElem,r=e.selectionRange;if(t!==n&&n&&n.ownerDocument&&yc(n.ownerDocument.documentElement,n)){if(r!==null&&Fi(n)){if(t=r.start,e=r.end,e===void 0&&(e=t),"selectionStart"in n)n.selectionStart=t,n.selectionEnd=Math.min(e,n.value.length);else if(e=(t=n.ownerDocument||document)&&t.defaultView||window,e.getSelection){e=e.getSelection();var o=n.textContent.length,l=Math.min(r.start,o);r=r.end===void 0?l:Math.min(r.end,o),!e.extend&&l>r&&(o=r,r=l,l=o),o=ps(n,l);var i=ps(n,r);o&&i&&(e.rangeCount!==1||e.anchorNode!==o.node||e.anchorOffset!==o.offset||e.focusNode!==i.node||e.focusOffset!==i.offset)&&(t=t.createRange(),t.setStart(o.node,o.offset),e.removeAllRanges(),l>r?(e.addRange(t),e.extend(i.node,i.offset)):(t.setEnd(i.node,i.offset),e.addRange(t)))}}for(t=[],e=n;e=e.parentNode;)e.nodeType===1&&t.push({element:e,left:e.scrollLeft,top:e.scrollTop});for(typeof n.focus=="function"&&n.focus(),n=0;n<t.length;n++)e=t[n],e.element.scrollLeft=e.left,e.element.scrollTop=e.top}}var Xp=qe&&"documentMode"in document&&11>=document.documentMode,Zt=null,Wl=null,Qn=null,Ul=!1;function gs(e,t,n){var r=n.window===n?n.document:n.nodeType===9?n:n.ownerDocument;Ul||Zt==null||Zt!==ro(r)||(r=Zt,"selectionStart"in r&&Fi(r)?r={start:r.selectionStart,end:r.selectionEnd}:(r=(r.ownerDocument&&r.ownerDocument.defaultView||window).getSelection(),r={anchorNode:r.anchorNode,anchorOffset:r.anchorOffset,focusNode:r.focusNode,focusOffset:r.focusOffset}),Qn&&or(Qn,r)||(Qn=r,r=co(Wl,"onSelect"),0<r.length&&(t=new Oi("onSelect","select",null,t,n),e.push({event:t,listeners:r}),t.target=Zt)))}function $r(e,t){var n={};return n[e.toLowerCase()]=t.toLowerCase(),n["Webkit"+e]="webkit"+t,n["Moz"+e]="moz"+t,n}var qt={animationend:$r("Animation","AnimationEnd"),animationiteration:$r("Animation","AnimationIteration"),animationstart:$r("Animation","AnimationStart"),transitionend:$r("Transition","TransitionEnd")},il={},Sc={};qe&&(Sc=document.createElement("div").style,"AnimationEvent"in window||(delete qt.animationend.animation,delete qt.animationiteration.animation,delete qt.animationstart.animation),"TransitionEvent"in window||delete qt.transitionend.transition);function No(e){if(il[e])return il[e];if(!qt[e])return e;var t=qt[e],n;for(n in t)if(t.hasOwnProperty(n)&&n in Sc)return il[e]=t[n];return e}var xc=No("animationend"),Pc=No("animationiteration"),kc=No("animationstart"),bc=No("transitionend"),_c=new Map,ms="abort auxClick cancel canPlay canPlayThrough click close contextMenu copy cut drag dragEnd dragEnter dragExit dragLeave dragOver dragStart drop durationChange emptied encrypted ended error gotPointerCapture input invalid keyDown keyPress keyUp load loadedData loadedMetadata loadStart lostPointerCapture mouseDown mouseMove mouseOut mouseOver mouseUp paste pause play playing pointerCancel pointerDown pointerMove pointerOut pointerOver pointerUp progress rateChange reset resize seeked seeking stalled submit suspend timeUpdate touchCancel touchEnd touchStart volumeChange scroll toggle touchMove waiting wheel".split(" ");function bt(e,t){_c.set(e,t),Ut(t,[e])}for(var al=0;al<ms.length;al++){var sl=ms[al],Jp=sl.toLowerCase(),Zp=sl[0].toUpperCase()+sl.slice(1);bt(Jp,"on"+Zp)}bt(xc,"onAnimationEnd");bt(Pc,"onAnimationIteration");bt(kc,"onAnimationStart");bt("dblclick","onDoubleClick");bt("focusin","onFocus");bt("focusout","onBlur");bt(bc,"onTransitionEnd");gn("onMouseEnter",["mouseout","mouseover"]);gn("onMouseLeave",["mouseout","mouseover"]);gn("onPointerEnter",["pointerout","pointerover"]);gn("onPointerLeave",["pointerout","pointerover"]);Ut("onChange","change click focusin focusout input keydown keyup selectionchange".split(" "));Ut("onSelect","focusout contextmenu dragend focusin keydown keyup mousedown mouseup selectionchange".split(" "));Ut("onBeforeInput",["compositionend","keypress","textInput","paste"]);Ut("onCompositionEnd","compositionend focusout keydown keypress keyup mousedown".split(" "));Ut("onCompositionStart","compositionstart focusout keydown keypress keyup mousedown".split(" "));Ut("onCompositionUpdate","compositionupdate focusout keydown keypress keyup mousedown".split(" "));var Dn="abort canplay canplaythrough durationchange emptied encrypted ended error loadeddata loadedmetadata loadstart pause play playing progress ratechange resize seeked seeking stalled suspend timeupdate volumechange waiting".split(" "),qp=new Set("cancel close invalid load scroll toggle".split(" ").concat(Dn));function hs(e,t,n){var r=e.type||"unknown-event";e.currentTarget=n,Jd(r,t,void 0,e),e.currentTarget=null}function Cc(e,t){t=(t&4)!==0;for(var n=0;n<e.length;n++){var r=e[n],o=r.event;r=r.listeners;e:{var l=void 0;if(t)for(var i=r.length-1;0<=i;i--){var a=r[i],s=a.instance,u=a.currentTarget;if(a=a.listener,s!==l&&o.isPropagationStopped())break e;hs(o,a,u),l=s}else for(i=0;i<r.length;i++){if(a=r[i],s=a.instance,u=a.currentTarget,a=a.listener,s!==l&&o.isPropagationStopped())break e;hs(o,a,u),l=s}}}if(lo)throw e=Ol,lo=!1,Ol=null,e}function O(e,t){var n=t[Kl];n===void 0&&(n=t[Kl]=new Set);var r=e+"__bubble";n.has(r)||(Tc(t,e,2,!1),n.add(r))}function ul(e,t,n){var r=0;t&&(r|=4),Tc(n,e,r,t)}var Ar="_reactListening"+Math.random().toString(36).slice(2);function lr(e){if(!e[Ar]){e[Ar]=!0,$u.forEach(function(n){n!=="selectionchange"&&(qp.has(n)||ul(n,!1,e),ul(n,!0,e))});var t=e.nodeType===9?e:e.ownerDocument;t===null||t[Ar]||(t[Ar]=!0,ul("selectionchange",!1,t))}}function Tc(e,t,n,r){switch(cc(t)){case 1:var o=pp;break;case 4:o=gp;break;default:o=Bi}n=o.bind(null,t,n,e),o=void 0,!zl||t!=="touchstart"&&t!=="touchmove"&&t!=="wheel"||(o=!0),r?o!==void 0?e.addEventListener(t,n,{capture:!0,passive:o}):e.addEventListener(t,n,!0):o!==void 0?e.addEventListener(t,n,{passive:o}):e.addEventListener(t,n,!1)}function cl(e,t,n,r,o){var l=r;if(!(t&1)&&!(t&2)&&r!==null)e:for(;;){if(r===null)return;var i=r.tag;if(i===3||i===4){var a=r.stateNode.containerInfo;if(a===o||a.nodeType===8&&a.parentNode===o)break;if(i===4)for(i=r.return;i!==null;){var s=i.tag;if((s===3||s===4)&&(s=i.stateNode.containerInfo,s===o||s.nodeType===8&&s.parentNode===o))return;i=i.return}for(;a!==null;){if(i=Nt(a),i===null)return;if(s=i.tag,s===5||s===6){r=l=i;continue e}a=a.parentNode}}r=r.return}Xu(function(){var u=l,d=Mi(n),f=[];e:{var m=_c.get(e);if(m!==void 0){var y=Oi,w=e;switch(e){case"keypress":if(Yr(n)===0)break e;case"keydown":case"keyup":y=Rp;break;case"focusin":w="focus",y=rl;break;case"focusout":w="blur",y=rl;break;case"beforeblur":case"afterblur":y=rl;break;case"click":if(n.button===2)break e;case"auxclick":case"dblclick":case"mousedown":case"mousemove":case"mouseup":case"mouseout":case"mouseover":case"contextmenu":y=os;break;case"drag":case"dragend":case"dragenter":case"dragexit":case"dragleave":case"dragover":case"dragstart":case"drop":y=vp;break;case"touchcancel":case"touchend":case"touchmove":case"touchstart":y=Mp;break;case xc:case Pc:case kc:y=Sp;break;case bc:y=$p;break;case"scroll":y=mp;break;case"wheel":y=Bp;break;case"copy":case"cut":case"paste":y=Pp;break;case"gotpointercapture":case"lostpointercapture":case"pointercancel":case"pointerdown":case"pointermove":case"pointerout":case"pointerover":case"pointerup":y=is}var S=(t&4)!==0,k=!S&&e==="scroll",g=S?m!==null?m+"Capture":null:m;S=[];for(var p=u,h;p!==null;){h=p;var x=h.stateNode;if(h.tag===5&&x!==null&&(h=x,g!==null&&(x=qn(p,g),x!=null&&S.push(ir(p,x,h)))),k)break;p=p.return}0<S.length&&(m=new y(m,w,null,n,d),f.push({event:m,listeners:S}))}}if(!(t&7)){e:{if(m=e==="mouseover"||e==="pointerover",y=e==="mouseout"||e==="pointerout",m&&n!==Al&&(w=n.relatedTarget||n.fromElement)&&(Nt(w)||w[et]))break e;if((y||m)&&(m=d.window===d?d:(m=d.ownerDocument)?m.defaultView||m.parentWindow:window,y?(w=n.relatedTarget||n.toElement,y=u,w=w?Nt(w):null,w!==null&&(k=Vt(w),w!==k||w.tag!==5&&w.tag!==6)&&(w=null)):(y=null,w=u),y!==w)){if(S=os,x="onMouseLeave",g="onMouseEnter",p="mouse",(e==="pointerout"||e==="pointerover")&&(S=is,x="onPointerLeave",g="onPointerEnter",p="pointer"),k=y==null?m:en(y),h=w==null?m:en(w),m=new S(x,p+"leave",y,n,d),m.target=k,m.relatedTarget=h,x=null,Nt(d)===u&&(S=new S(g,p+"enter",w,n,d),S.target=h,S.relatedTarget=k,x=S),k=x,y&&w)t:{for(S=y,g=w,p=0,h=S;h;h=Kt(h))p++;for(h=0,x=g;x;x=Kt(x))h++;for(;0<p-h;)S=Kt(S),p--;for(;0<h-p;)g=Kt(g),h--;for(;p--;){if(S===g||g!==null&&S===g.alternate)break t;S=Kt(S),g=Kt(g)}S=null}else S=null;y!==null&&vs(f,m,y,S,!1),w!==null&&k!==null&&vs(f,k,w,S,!0)}}e:{if(m=u?en(u):window,y=m.nodeName&&m.nodeName.toLowerCase(),y==="select"||y==="input"&&m.type==="file")var b=Up;else if(us(m))if(hc)b=Gp;else{b=Hp;var T=Vp}else(y=m.nodeName)&&y.toLowerCase()==="input"&&(m.type==="checkbox"||m.type==="radio")&&(b=Qp);if(b&&(b=b(e,u))){mc(f,b,n,d);break e}T&&T(e,m,u),e==="focusout"&&(T=m._wrapperState)&&T.controlled&&m.type==="number"&&jl(m,"number",m.value)}switch(T=u?en(u):window,e){case"focusin":(us(T)||T.contentEditable==="true")&&(Zt=T,Wl=u,Qn=null);break;case"focusout":Qn=Wl=Zt=null;break;case"mousedown":Ul=!0;break;case"contextmenu":case"mouseup":case"dragend":Ul=!1,gs(f,n,d);break;case"selectionchange":if(Xp)break;case"keydown":case"keyup":gs(f,n,d)}var E;if(Di)e:{switch(e){case"compositionstart":var R="onCompositionStart";break e;case"compositionend":R="onCompositionEnd";break e;case"compositionupdate":R="onCompositionUpdate";break e}R=void 0}else Jt?pc(e,n)&&(R="onCompositionEnd"):e==="keydown"&&n.keyCode===229&&(R="onCompositionStart");R&&(dc&&n.locale!=="ko"&&(Jt||R!=="onCompositionStart"?R==="onCompositionEnd"&&Jt&&(E=fc()):(ct=d,zi="value"in ct?ct.value:ct.textContent,Jt=!0)),T=co(u,R),0<T.length&&(R=new ls(R,e,null,n,d),f.push({event:R,listeners:T}),E?R.data=E:(E=gc(n),E!==null&&(R.data=E)))),(E=Op?Ip(e,n):Dp(e,n))&&(u=co(u,"onBeforeInput"),0<u.length&&(d=new ls("onBeforeInput","beforeinput",null,n,d),f.push({event:d,listeners:u}),d.data=E))}Cc(f,t)})}function ir(e,t,n){return{instance:e,listener:t,currentTarget:n}}function co(e,t){for(var n=t+"Capture",r=[];e!==null;){var o=e,l=o.stateNode;o.tag===5&&l!==null&&(o=l,l=qn(e,n),l!=null&&r.unshift(ir(e,l,o)),l=qn(e,t),l!=null&&r.push(ir(e,l,o))),e=e.return}return r}function Kt(e){if(e===null)return null;do e=e.return;while(e&&e.tag!==5);return e||null}function vs(e,t,n,r,o){for(var l=t._reactName,i=[];n!==null&&n!==r;){var a=n,s=a.alternate,u=a.stateNode;if(s!==null&&s===r)break;a.tag===5&&u!==null&&(a=u,o?(s=qn(n,l),s!=null&&i.unshift(ir(n,s,a))):o||(s=qn(n,l),s!=null&&i.push(ir(n,s,a)))),n=n.return}i.length!==0&&e.push({event:t,listeners:i})}var eg=/\r\n?/g,tg=/\u0000|\uFFFD/g;function ys(e){return(typeof e=="string"?e:""+e).replace(eg,`
`).replace(tg,"")}function Br(e,t,n){if(t=ys(t),ys(e)!==t&&n)throw Error(P(425))}function fo(){}var Vl=null,Hl=null;function Ql(e,t){return e==="textarea"||e==="noscript"||typeof t.children=="string"||typeof t.children=="number"||typeof t.dangerouslySetInnerHTML=="object"&&t.dangerouslySetInnerHTML!==null&&t.dangerouslySetInnerHTML.__html!=null}var Gl=typeof setTimeout=="function"?setTimeout:void 0,ng=typeof clearTimeout=="function"?clearTimeout:void 0,ws=typeof Promise=="function"?Promise:void 0,rg=typeof queueMicrotask=="function"?queueMicrotask:typeof ws<"u"?function(e){return ws.resolve(null).then(e).catch(og)}:Gl;function og(e){setTimeout(function(){throw e})}function fl(e,t){var n=t,r=0;do{var o=n.nextSibling;if(e.removeChild(n),o&&o.nodeType===8)if(n=o.data,n==="/$"){if(r===0){e.removeChild(o),nr(t);return}r--}else n!=="$"&&n!=="$?"&&n!=="$!"||r++;n=o}while(n);nr(t)}function ht(e){for(;e!=null;e=e.nextSibling){var t=e.nodeType;if(t===1||t===3)break;if(t===8){if(t=e.data,t==="$"||t==="$!"||t==="$?")break;if(t==="/$")return null}}return e}function Ss(e){e=e.previousSibling;for(var t=0;e;){if(e.nodeType===8){var n=e.data;if(n==="$"||n==="$!"||n==="$?"){if(t===0)return e;t--}else n==="/$"&&t++}e=e.previousSibling}return null}var bn=Math.random().toString(36).slice(2),Ve="__reactFiber$"+bn,ar="__reactProps$"+bn,et="__reactContainer$"+bn,Kl="__reactEvents$"+bn,lg="__reactListeners$"+bn,ig="__reactHandles$"+bn;function Nt(e){var t=e[Ve];if(t)return t;for(var n=e.parentNode;n;){if(t=n[et]||n[Ve]){if(n=t.alternate,t.child!==null||n!==null&&n.child!==null)for(e=Ss(e);e!==null;){if(n=e[Ve])return n;e=Ss(e)}return t}e=n,n=e.parentNode}return null}function wr(e){return e=e[Ve]||e[et],!e||e.tag!==5&&e.tag!==6&&e.tag!==13&&e.tag!==3?null:e}function en(e){if(e.tag===5||e.tag===6)return e.stateNode;throw Error(P(33))}function $o(e){return e[ar]||null}var Yl=[],tn=-1;function _t(e){return{current:e}}function I(e){0>tn||(e.current=Yl[tn],Yl[tn]=null,tn--)}function z(e,t){tn++,Yl[tn]=e.current,e.current=t}var kt={},fe=_t(kt),ye=_t(!1),Ot=kt;function mn(e,t){var n=e.type.contextTypes;if(!n)return kt;var r=e.stateNode;if(r&&r.__reactInternalMemoizedUnmaskedChildContext===t)return r.__reactInternalMemoizedMaskedChildContext;var o={},l;for(l in n)o[l]=t[l];return r&&(e=e.stateNode,e.__reactInternalMemoizedUnmaskedChildContext=t,e.__reactInternalMemoizedMaskedChildContext=o),o}function we(e){return e=e.childContextTypes,e!=null}function po(){I(ye),I(fe)}function xs(e,t,n){if(fe.current!==kt)throw Error(P(168));z(fe,t),z(ye,n)}function Ec(e,t,n){var r=e.stateNode;if(t=t.childContextTypes,typeof r.getChildContext!="function")return n;r=r.getChildContext();for(var o in r)if(!(o in t))throw Error(P(108,Vd(e)||"Unknown",o));return V({},n,r)}function go(e){return e=(e=e.stateNode)&&e.__reactInternalMemoizedMergedChildContext||kt,Ot=fe.current,z(fe,e),z(ye,ye.current),!0}function Ps(e,t,n){var r=e.stateNode;if(!r)throw Error(P(169));n?(e=Ec(e,t,Ot),r.__reactInternalMemoizedMergedChildContext=e,I(ye),I(fe),z(fe,e)):I(ye),z(ye,n)}var Ye=null,Ao=!1,dl=!1;function Rc(e){Ye===null?Ye=[e]:Ye.push(e)}function ag(e){Ao=!0,Rc(e)}function Ct(){if(!dl&&Ye!==null){dl=!0;var e=0,t=A;try{var n=Ye;for(A=1;e<n.length;e++){var r=n[e];do r=r(!0);while(r!==null)}Ye=null,Ao=!1}catch(o){throw Ye!==null&&(Ye=Ye.slice(e+1)),ec(Ni,Ct),o}finally{A=t,dl=!1}}return null}var nn=[],rn=0,mo=null,ho=0,Ee=[],Re=0,It=null,Xe=1,Je="";function Lt(e,t){nn[rn++]=ho,nn[rn++]=mo,mo=e,ho=t}function jc(e,t,n){Ee[Re++]=Xe,Ee[Re++]=Je,Ee[Re++]=It,It=e;var r=Xe;e=Je;var o=32-Oe(r)-1;r&=~(1<<o),n+=1;var l=32-Oe(t)+o;if(30<l){var i=o-o%5;l=(r&(1<<i)-1).toString(32),r>>=i,o-=i,Xe=1<<32-Oe(t)+o|n<<o|r,Je=l+e}else Xe=1<<l|n<<o|r,Je=e}function Wi(e){e.return!==null&&(Lt(e,1),jc(e,1,0))}function Ui(e){for(;e===mo;)mo=nn[--rn],nn[rn]=null,ho=nn[--rn],nn[rn]=null;for(;e===It;)It=Ee[--Re],Ee[Re]=null,Je=Ee[--Re],Ee[Re]=null,Xe=Ee[--Re],Ee[Re]=null}var be=null,ke=null,D=!1,ze=null;function Lc(e,t){var n=je(5,null,null,0);n.elementType="DELETED",n.stateNode=t,n.return=e,t=e.deletions,t===null?(e.deletions=[n],e.flags|=16):t.push(n)}function ks(e,t){switch(e.tag){case 5:var n=e.type;return t=t.nodeType!==1||n.toLowerCase()!==t.nodeName.toLowerCase()?null:t,t!==null?(e.stateNode=t,be=e,ke=ht(t.firstChild),!0):!1;case 6:return t=e.pendingProps===""||t.nodeType!==3?null:t,t!==null?(e.stateNode=t,be=e,ke=null,!0):!1;case 13:return t=t.nodeType!==8?null:t,t!==null?(n=It!==null?{id:Xe,overflow:Je}:null,e.memoizedState={dehydrated:t,treeContext:n,retryLane:1073741824},n=je(18,null,null,0),n.stateNode=t,n.return=e,e.child=n,be=e,ke=null,!0):!1;default:return!1}}function Xl(e){return(e.mode&1)!==0&&(e.flags&128)===0}function Jl(e){if(D){var t=ke;if(t){var n=t;if(!ks(e,t)){if(Xl(e))throw Error(P(418));t=ht(n.nextSibling);var r=be;t&&ks(e,t)?Lc(r,n):(e.flags=e.flags&-4097|2,D=!1,be=e)}}else{if(Xl(e))throw Error(P(418));e.flags=e.flags&-4097|2,D=!1,be=e}}}function bs(e){for(e=e.return;e!==null&&e.tag!==5&&e.tag!==3&&e.tag!==13;)e=e.return;be=e}function zr(e){if(e!==be)return!1;if(!D)return bs(e),D=!0,!1;var t;if((t=e.tag!==3)&&!(t=e.tag!==5)&&(t=e.type,t=t!=="head"&&t!=="body"&&!Ql(e.type,e.memoizedProps)),t&&(t=ke)){if(Xl(e))throw Mc(),Error(P(418));for(;t;)Lc(e,t),t=ht(t.nextSibling)}if(bs(e),e.tag===13){if(e=e.memoizedState,e=e!==null?e.dehydrated:null,!e)throw Error(P(317));e:{for(e=e.nextSibling,t=0;e;){if(e.nodeType===8){var n=e.data;if(n==="/$"){if(t===0){ke=ht(e.nextSibling);break e}t--}else n!=="$"&&n!=="$!"&&n!=="$?"||t++}e=e.nextSibling}ke=null}}else ke=be?ht(e.stateNode.nextSibling):null;return!0}function Mc(){for(var e=ke;e;)e=ht(e.nextSibling)}function hn(){ke=be=null,D=!1}function Vi(e){ze===null?ze=[e]:ze.push(e)}var sg=rt.ReactCurrentBatchConfig;function $n(e,t,n){if(e=n.ref,e!==null&&typeof e!="function"&&typeof e!="object"){if(n._owner){if(n=n._owner,n){if(n.tag!==1)throw Error(P(309));var r=n.stateNode}if(!r)throw Error(P(147,e));var o=r,l=""+e;return t!==null&&t.ref!==null&&typeof t.ref=="function"&&t.ref._stringRef===l?t.ref:(t=function(i){var a=o.refs;i===null?delete a[l]:a[l]=i},t._stringRef=l,t)}if(typeof e!="string")throw Error(P(284));if(!n._owner)throw Error(P(290,e))}return e}function Or(e,t){throw e=Object.prototype.toString.call(t),Error(P(31,e==="[object Object]"?"object with keys {"+Object.keys(t).join(", ")+"}":e))}function _s(e){var t=e._init;return t(e._payload)}function Nc(e){function t(g,p){if(e){var h=g.deletions;h===null?(g.deletions=[p],g.flags|=16):h.push(p)}}function n(g,p){if(!e)return null;for(;p!==null;)t(g,p),p=p.sibling;return null}function r(g,p){for(g=new Map;p!==null;)p.key!==null?g.set(p.key,p):g.set(p.index,p),p=p.sibling;return g}function o(g,p){return g=St(g,p),g.index=0,g.sibling=null,g}function l(g,p,h){return g.index=h,e?(h=g.alternate,h!==null?(h=h.index,h<p?(g.flags|=2,p):h):(g.flags|=2,p)):(g.flags|=1048576,p)}function i(g){return e&&g.alternate===null&&(g.flags|=2),g}function a(g,p,h,x){return p===null||p.tag!==6?(p=wl(h,g.mode,x),p.return=g,p):(p=o(p,h),p.return=g,p)}function s(g,p,h,x){var b=h.type;return b===Xt?d(g,p,h.props.children,x,h.key):p!==null&&(p.elementType===b||typeof b=="object"&&b!==null&&b.$$typeof===it&&_s(b)===p.type)?(x=o(p,h.props),x.ref=$n(g,p,h),x.return=g,x):(x=no(h.type,h.key,h.props,null,g.mode,x),x.ref=$n(g,p,h),x.return=g,x)}function u(g,p,h,x){return p===null||p.tag!==4||p.stateNode.containerInfo!==h.containerInfo||p.stateNode.implementation!==h.implementation?(p=Sl(h,g.mode,x),p.return=g,p):(p=o(p,h.children||[]),p.return=g,p)}function d(g,p,h,x,b){return p===null||p.tag!==7?(p=zt(h,g.mode,x,b),p.return=g,p):(p=o(p,h),p.return=g,p)}function f(g,p,h){if(typeof p=="string"&&p!==""||typeof p=="number")return p=wl(""+p,g.mode,h),p.return=g,p;if(typeof p=="object"&&p!==null){switch(p.$$typeof){case Tr:return h=no(p.type,p.key,p.props,null,g.mode,h),h.ref=$n(g,null,p),h.return=g,h;case Yt:return p=Sl(p,g.mode,h),p.return=g,p;case it:var x=p._init;return f(g,x(p._payload),h)}if(On(p)||Rn(p))return p=zt(p,g.mode,h,null),p.return=g,p;Or(g,p)}return null}function m(g,p,h,x){var b=p!==null?p.key:null;if(typeof h=="string"&&h!==""||typeof h=="number")return b!==null?null:a(g,p,""+h,x);if(typeof h=="object"&&h!==null){switch(h.$$typeof){case Tr:return h.key===b?s(g,p,h,x):null;case Yt:return h.key===b?u(g,p,h,x):null;case it:return b=h._init,m(g,p,b(h._payload),x)}if(On(h)||Rn(h))return b!==null?null:d(g,p,h,x,null);Or(g,h)}return null}function y(g,p,h,x,b){if(typeof x=="string"&&x!==""||typeof x=="number")return g=g.get(h)||null,a(p,g,""+x,b);if(typeof x=="object"&&x!==null){switch(x.$$typeof){case Tr:return g=g.get(x.key===null?h:x.key)||null,s(p,g,x,b);case Yt:return g=g.get(x.key===null?h:x.key)||null,u(p,g,x,b);case it:var T=x._init;return y(g,p,h,T(x._payload),b)}if(On(x)||Rn(x))return g=g.get(h)||null,d(p,g,x,b,null);Or(p,x)}return null}function w(g,p,h,x){for(var b=null,T=null,E=p,R=p=0,F=null;E!==null&&R<h.length;R++){E.index>R?(F=E,E=null):F=E.sibling;var M=m(g,E,h[R],x);if(M===null){E===null&&(E=F);break}e&&E&&M.alternate===null&&t(g,E),p=l(M,p,R),T===null?b=M:T.sibling=M,T=M,E=F}if(R===h.length)return n(g,E),D&&Lt(g,R),b;if(E===null){for(;R<h.length;R++)E=f(g,h[R],x),E!==null&&(p=l(E,p,R),T===null?b=E:T.sibling=E,T=E);return D&&Lt(g,R),b}for(E=r(g,E);R<h.length;R++)F=y(E,g,R,h[R],x),F!==null&&(e&&F.alternate!==null&&E.delete(F.key===null?R:F.key),p=l(F,p,R),T===null?b=F:T.sibling=F,T=F);return e&&E.forEach(function(xe){return t(g,xe)}),D&&Lt(g,R),b}function S(g,p,h,x){var b=Rn(h);if(typeof b!="function")throw Error(P(150));if(h=b.call(h),h==null)throw Error(P(151));for(var T=b=null,E=p,R=p=0,F=null,M=h.next();E!==null&&!M.done;R++,M=h.next()){E.index>R?(F=E,E=null):F=E.sibling;var xe=m(g,E,M.value,x);if(xe===null){E===null&&(E=F);break}e&&E&&xe.alternate===null&&t(g,E),p=l(xe,p,R),T===null?b=xe:T.sibling=xe,T=xe,E=F}if(M.done)return n(g,E),D&&Lt(g,R),b;if(E===null){for(;!M.done;R++,M=h.next())M=f(g,M.value,x),M!==null&&(p=l(M,p,R),T===null?b=M:T.sibling=M,T=M);return D&&Lt(g,R),b}for(E=r(g,E);!M.done;R++,M=h.next())M=y(E,g,R,M.value,x),M!==null&&(e&&M.alternate!==null&&E.delete(M.key===null?R:M.key),p=l(M,p,R),T===null?b=M:T.sibling=M,T=M);return e&&E.forEach(function(te){return t(g,te)}),D&&Lt(g,R),b}function k(g,p,h,x){if(typeof h=="object"&&h!==null&&h.type===Xt&&h.key===null&&(h=h.props.children),typeof h=="object"&&h!==null){switch(h.$$typeof){case Tr:e:{for(var b=h.key,T=p;T!==null;){if(T.key===b){if(b=h.type,b===Xt){if(T.tag===7){n(g,T.sibling),p=o(T,h.props.children),p.return=g,g=p;break e}}else if(T.elementType===b||typeof b=="object"&&b!==null&&b.$$typeof===it&&_s(b)===T.type){n(g,T.sibling),p=o(T,h.props),p.ref=$n(g,T,h),p.return=g,g=p;break e}n(g,T);break}else t(g,T);T=T.sibling}h.type===Xt?(p=zt(h.props.children,g.mode,x,h.key),p.return=g,g=p):(x=no(h.type,h.key,h.props,null,g.mode,x),x.ref=$n(g,p,h),x.return=g,g=x)}return i(g);case Yt:e:{for(T=h.key;p!==null;){if(p.key===T)if(p.tag===4&&p.stateNode.containerInfo===h.containerInfo&&p.stateNode.implementation===h.implementation){n(g,p.sibling),p=o(p,h.children||[]),p.return=g,g=p;break e}else{n(g,p);break}else t(g,p);p=p.sibling}p=Sl(h,g.mode,x),p.return=g,g=p}return i(g);case it:return T=h._init,k(g,p,T(h._payload),x)}if(On(h))return w(g,p,h,x);if(Rn(h))return S(g,p,h,x);Or(g,h)}return typeof h=="string"&&h!==""||typeof h=="number"?(h=""+h,p!==null&&p.tag===6?(n(g,p.sibling),p=o(p,h),p.return=g,g=p):(n(g,p),p=wl(h,g.mode,x),p.return=g,g=p),i(g)):n(g,p)}return k}var vn=Nc(!0),$c=Nc(!1),vo=_t(null),yo=null,on=null,Hi=null;function Qi(){Hi=on=yo=null}function Gi(e){var t=vo.current;I(vo),e._currentValue=t}function Zl(e,t,n){for(;e!==null;){var r=e.alternate;if((e.childLanes&t)!==t?(e.childLanes|=t,r!==null&&(r.childLanes|=t)):r!==null&&(r.childLanes&t)!==t&&(r.childLanes|=t),e===n)break;e=e.return}}function dn(e,t){yo=e,Hi=on=null,e=e.dependencies,e!==null&&e.firstContext!==null&&(e.lanes&t&&(ve=!0),e.firstContext=null)}function Me(e){var t=e._currentValue;if(Hi!==e)if(e={context:e,memoizedValue:t,next:null},on===null){if(yo===null)throw Error(P(308));on=e,yo.dependencies={lanes:0,firstContext:e}}else on=on.next=e;return t}var $t=null;function Ki(e){$t===null?$t=[e]:$t.push(e)}function Ac(e,t,n,r){var o=t.interleaved;return o===null?(n.next=n,Ki(t)):(n.next=o.next,o.next=n),t.interleaved=n,tt(e,r)}function tt(e,t){e.lanes|=t;var n=e.alternate;for(n!==null&&(n.lanes|=t),n=e,e=e.return;e!==null;)e.childLanes|=t,n=e.alternate,n!==null&&(n.childLanes|=t),n=e,e=e.return;return n.tag===3?n.stateNode:null}var at=!1;function Yi(e){e.updateQueue={baseState:e.memoizedState,firstBaseUpdate:null,lastBaseUpdate:null,shared:{pending:null,interleaved:null,lanes:0},effects:null}}function Bc(e,t){e=e.updateQueue,t.updateQueue===e&&(t.updateQueue={baseState:e.baseState,firstBaseUpdate:e.firstBaseUpdate,lastBaseUpdate:e.lastBaseUpdate,shared:e.shared,effects:e.effects})}function Ze(e,t){return{eventTime:e,lane:t,tag:0,payload:null,callback:null,next:null}}function vt(e,t,n){var r=e.updateQueue;if(r===null)return null;if(r=r.shared,$&2){var o=r.pending;return o===null?t.next=t:(t.next=o.next,o.next=t),r.pending=t,tt(e,n)}return o=r.interleaved,o===null?(t.next=t,Ki(r)):(t.next=o.next,o.next=t),r.interleaved=t,tt(e,n)}function Xr(e,t,n){if(t=t.updateQueue,t!==null&&(t=t.shared,(n&4194240)!==0)){var r=t.lanes;r&=e.pendingLanes,n|=r,t.lanes=n,$i(e,n)}}function Cs(e,t){var n=e.updateQueue,r=e.alternate;if(r!==null&&(r=r.updateQueue,n===r)){var o=null,l=null;if(n=n.firstBaseUpdate,n!==null){do{var i={eventTime:n.eventTime,lane:n.lane,tag:n.tag,payload:n.payload,callback:n.callback,next:null};l===null?o=l=i:l=l.next=i,n=n.next}while(n!==null);l===null?o=l=t:l=l.next=t}else o=l=t;n={baseState:r.baseState,firstBaseUpdate:o,lastBaseUpdate:l,shared:r.shared,effects:r.effects},e.updateQueue=n;return}e=n.lastBaseUpdate,e===null?n.firstBaseUpdate=t:e.next=t,n.lastBaseUpdate=t}function wo(e,t,n,r){var o=e.updateQueue;at=!1;var l=o.firstBaseUpdate,i=o.lastBaseUpdate,a=o.shared.pending;if(a!==null){o.shared.pending=null;var s=a,u=s.next;s.next=null,i===null?l=u:i.next=u,i=s;var d=e.alternate;d!==null&&(d=d.updateQueue,a=d.lastBaseUpdate,a!==i&&(a===null?d.firstBaseUpdate=u:a.next=u,d.lastBaseUpdate=s))}if(l!==null){var f=o.baseState;i=0,d=u=s=null,a=l;do{var m=a.lane,y=a.eventTime;if((r&m)===m){d!==null&&(d=d.next={eventTime:y,lane:0,tag:a.tag,payload:a.payload,callback:a.callback,next:null});e:{var w=e,S=a;switch(m=t,y=n,S.tag){case 1:if(w=S.payload,typeof w=="function"){f=w.call(y,f,m);break e}f=w;break e;case 3:w.flags=w.flags&-65537|128;case 0:if(w=S.payload,m=typeof w=="function"?w.call(y,f,m):w,m==null)break e;f=V({},f,m);break e;case 2:at=!0}}a.callback!==null&&a.lane!==0&&(e.flags|=64,m=o.effects,m===null?o.effects=[a]:m.push(a))}else y={eventTime:y,lane:m,tag:a.tag,payload:a.payload,callback:a.callback,next:null},d===null?(u=d=y,s=f):d=d.next=y,i|=m;if(a=a.next,a===null){if(a=o.shared.pending,a===null)break;m=a,a=m.next,m.next=null,o.lastBaseUpdate=m,o.shared.pending=null}}while(!0);if(d===null&&(s=f),o.baseState=s,o.firstBaseUpdate=u,o.lastBaseUpdate=d,t=o.shared.interleaved,t!==null){o=t;do i|=o.lane,o=o.next;while(o!==t)}else l===null&&(o.shared.lanes=0);Ft|=i,e.lanes=i,e.memoizedState=f}}function Ts(e,t,n){if(e=t.effects,t.effects=null,e!==null)for(t=0;t<e.length;t++){var r=e[t],o=r.callback;if(o!==null){if(r.callback=null,r=n,typeof o!="function")throw Error(P(191,o));o.call(r)}}}var Sr={},Qe=_t(Sr),sr=_t(Sr),ur=_t(Sr);function At(e){if(e===Sr)throw Error(P(174));return e}function Xi(e,t){switch(z(ur,t),z(sr,e),z(Qe,Sr),e=t.nodeType,e){case 9:case 11:t=(t=t.documentElement)?t.namespaceURI:Ml(null,"");break;default:e=e===8?t.parentNode:t,t=e.namespaceURI||null,e=e.tagName,t=Ml(t,e)}I(Qe),z(Qe,t)}function yn(){I(Qe),I(sr),I(ur)}function zc(e){At(ur.current);var t=At(Qe.current),n=Ml(t,e.type);t!==n&&(z(sr,e),z(Qe,n))}function Ji(e){sr.current===e&&(I(Qe),I(sr))}var W=_t(0);function So(e){for(var t=e;t!==null;){if(t.tag===13){var n=t.memoizedState;if(n!==null&&(n=n.dehydrated,n===null||n.data==="$?"||n.data==="$!"))return t}else if(t.tag===19&&t.memoizedProps.revealOrder!==void 0){if(t.flags&128)return t}else if(t.child!==null){t.child.return=t,t=t.child;continue}if(t===e)break;for(;t.sibling===null;){if(t.return===null||t.return===e)return null;t=t.return}t.sibling.return=t.return,t=t.sibling}return null}var pl=[];function Zi(){for(var e=0;e<pl.length;e++)pl[e]._workInProgressVersionPrimary=null;pl.length=0}var Jr=rt.ReactCurrentDispatcher,gl=rt.ReactCurrentBatchConfig,Dt=0,U=null,Z=null,re=null,xo=!1,Gn=!1,cr=0,ug=0;function se(){throw Error(P(321))}function qi(e,t){if(t===null)return!1;for(var n=0;n<t.length&&n<e.length;n++)if(!De(e[n],t[n]))return!1;return!0}function ea(e,t,n,r,o,l){if(Dt=l,U=t,t.memoizedState=null,t.updateQueue=null,t.lanes=0,Jr.current=e===null||e.memoizedState===null?pg:gg,e=n(r,o),Gn){l=0;do{if(Gn=!1,cr=0,25<=l)throw Error(P(301));l+=1,re=Z=null,t.updateQueue=null,Jr.current=mg,e=n(r,o)}while(Gn)}if(Jr.current=Po,t=Z!==null&&Z.next!==null,Dt=0,re=Z=U=null,xo=!1,t)throw Error(P(300));return e}function ta(){var e=cr!==0;return cr=0,e}function Ue(){var e={memoizedState:null,baseState:null,baseQueue:null,queue:null,next:null};return re===null?U.memoizedState=re=e:re=re.next=e,re}function Ne(){if(Z===null){var e=U.alternate;e=e!==null?e.memoizedState:null}else e=Z.next;var t=re===null?U.memoizedState:re.next;if(t!==null)re=t,Z=e;else{if(e===null)throw Error(P(310));Z=e,e={memoizedState:Z.memoizedState,baseState:Z.baseState,baseQueue:Z.baseQueue,queue:Z.queue,next:null},re===null?U.memoizedState=re=e:re=re.next=e}return re}function fr(e,t){return typeof t=="function"?t(e):t}function ml(e){var t=Ne(),n=t.queue;if(n===null)throw Error(P(311));n.lastRenderedReducer=e;var r=Z,o=r.baseQueue,l=n.pending;if(l!==null){if(o!==null){var i=o.next;o.next=l.next,l.next=i}r.baseQueue=o=l,n.pending=null}if(o!==null){l=o.next,r=r.baseState;var a=i=null,s=null,u=l;do{var d=u.lane;if((Dt&d)===d)s!==null&&(s=s.next={lane:0,action:u.action,hasEagerState:u.hasEagerState,eagerState:u.eagerState,next:null}),r=u.hasEagerState?u.eagerState:e(r,u.action);else{var f={lane:d,action:u.action,hasEagerState:u.hasEagerState,eagerState:u.eagerState,next:null};s===null?(a=s=f,i=r):s=s.next=f,U.lanes|=d,Ft|=d}u=u.next}while(u!==null&&u!==l);s===null?i=r:s.next=a,De(r,t.memoizedState)||(ve=!0),t.memoizedState=r,t.baseState=i,t.baseQueue=s,n.lastRenderedState=r}if(e=n.interleaved,e!==null){o=e;do l=o.lane,U.lanes|=l,Ft|=l,o=o.next;while(o!==e)}else o===null&&(n.lanes=0);return[t.memoizedState,n.dispatch]}function hl(e){var t=Ne(),n=t.queue;if(n===null)throw Error(P(311));n.lastRenderedReducer=e;var r=n.dispatch,o=n.pending,l=t.memoizedState;if(o!==null){n.pending=null;var i=o=o.next;do l=e(l,i.action),i=i.next;while(i!==o);De(l,t.memoizedState)||(ve=!0),t.memoizedState=l,t.baseQueue===null&&(t.baseState=l),n.lastRenderedState=l}return[l,r]}function Oc(){}function Ic(e,t){var n=U,r=Ne(),o=t(),l=!De(r.memoizedState,o);if(l&&(r.memoizedState=o,ve=!0),r=r.queue,na(Wc.bind(null,n,r,e),[e]),r.getSnapshot!==t||l||re!==null&&re.memoizedState.tag&1){if(n.flags|=2048,dr(9,Fc.bind(null,n,r,o,t),void 0,null),oe===null)throw Error(P(349));Dt&30||Dc(n,t,o)}return o}function Dc(e,t,n){e.flags|=16384,e={getSnapshot:t,value:n},t=U.updateQueue,t===null?(t={lastEffect:null,stores:null},U.updateQueue=t,t.stores=[e]):(n=t.stores,n===null?t.stores=[e]:n.push(e))}function Fc(e,t,n,r){t.value=n,t.getSnapshot=r,Uc(t)&&Vc(e)}function Wc(e,t,n){return n(function(){Uc(t)&&Vc(e)})}function Uc(e){var t=e.getSnapshot;e=e.value;try{var n=t();return!De(e,n)}catch{return!0}}function Vc(e){var t=tt(e,1);t!==null&&Ie(t,e,1,-1)}function Es(e){var t=Ue();return typeof e=="function"&&(e=e()),t.memoizedState=t.baseState=e,e={pending:null,interleaved:null,lanes:0,dispatch:null,lastRenderedReducer:fr,lastRenderedState:e},t.queue=e,e=e.dispatch=dg.bind(null,U,e),[t.memoizedState,e]}function dr(e,t,n,r){return e={tag:e,create:t,destroy:n,deps:r,next:null},t=U.updateQueue,t===null?(t={lastEffect:null,stores:null},U.updateQueue=t,t.lastEffect=e.next=e):(n=t.lastEffect,n===null?t.lastEffect=e.next=e:(r=n.next,n.next=e,e.next=r,t.lastEffect=e)),e}function Hc(){return Ne().memoizedState}function Zr(e,t,n,r){var o=Ue();U.flags|=e,o.memoizedState=dr(1|t,n,void 0,r===void 0?null:r)}function Bo(e,t,n,r){var o=Ne();r=r===void 0?null:r;var l=void 0;if(Z!==null){var i=Z.memoizedState;if(l=i.destroy,r!==null&&qi(r,i.deps)){o.memoizedState=dr(t,n,l,r);return}}U.flags|=e,o.memoizedState=dr(1|t,n,l,r)}function Rs(e,t){return Zr(8390656,8,e,t)}function na(e,t){return Bo(2048,8,e,t)}function Qc(e,t){return Bo(4,2,e,t)}function Gc(e,t){return Bo(4,4,e,t)}function Kc(e,t){if(typeof t=="function")return e=e(),t(e),function(){t(null)};if(t!=null)return e=e(),t.current=e,function(){t.current=null}}function Yc(e,t,n){return n=n!=null?n.concat([e]):null,Bo(4,4,Kc.bind(null,t,e),n)}function ra(){}function Xc(e,t){var n=Ne();t=t===void 0?null:t;var r=n.memoizedState;return r!==null&&t!==null&&qi(t,r[1])?r[0]:(n.memoizedState=[e,t],e)}function Jc(e,t){var n=Ne();t=t===void 0?null:t;var r=n.memoizedState;return r!==null&&t!==null&&qi(t,r[1])?r[0]:(e=e(),n.memoizedState=[e,t],e)}function Zc(e,t,n){return Dt&21?(De(n,t)||(n=rc(),U.lanes|=n,Ft|=n,e.baseState=!0),t):(e.baseState&&(e.baseState=!1,ve=!0),e.memoizedState=n)}function cg(e,t){var n=A;A=n!==0&&4>n?n:4,e(!0);var r=gl.transition;gl.transition={};try{e(!1),t()}finally{A=n,gl.transition=r}}function qc(){return Ne().memoizedState}function fg(e,t,n){var r=wt(e);if(n={lane:r,action:n,hasEagerState:!1,eagerState:null,next:null},ef(e))tf(t,n);else if(n=Ac(e,t,n,r),n!==null){var o=pe();Ie(n,e,r,o),nf(n,t,r)}}function dg(e,t,n){var r=wt(e),o={lane:r,action:n,hasEagerState:!1,eagerState:null,next:null};if(ef(e))tf(t,o);else{var l=e.alternate;if(e.lanes===0&&(l===null||l.lanes===0)&&(l=t.lastRenderedReducer,l!==null))try{var i=t.lastRenderedState,a=l(i,n);if(o.hasEagerState=!0,o.eagerState=a,De(a,i)){var s=t.interleaved;s===null?(o.next=o,Ki(t)):(o.next=s.next,s.next=o),t.interleaved=o;return}}catch{}finally{}n=Ac(e,t,o,r),n!==null&&(o=pe(),Ie(n,e,r,o),nf(n,t,r))}}function ef(e){var t=e.alternate;return e===U||t!==null&&t===U}function tf(e,t){Gn=xo=!0;var n=e.pending;n===null?t.next=t:(t.next=n.next,n.next=t),e.pending=t}function nf(e,t,n){if(n&4194240){var r=t.lanes;r&=e.pendingLanes,n|=r,t.lanes=n,$i(e,n)}}var Po={readContext:Me,useCallback:se,useContext:se,useEffect:se,useImperativeHandle:se,useInsertionEffect:se,useLayoutEffect:se,useMemo:se,useReducer:se,useRef:se,useState:se,useDebugValue:se,useDeferredValue:se,useTransition:se,useMutableSource:se,useSyncExternalStore:se,useId:se,unstable_isNewReconciler:!1},pg={readContext:Me,useCallback:function(e,t){return Ue().memoizedState=[e,t===void 0?null:t],e},useContext:Me,useEffect:Rs,useImperativeHandle:function(e,t,n){return n=n!=null?n.concat([e]):null,Zr(4194308,4,Kc.bind(null,t,e),n)},useLayoutEffect:function(e,t){return Zr(4194308,4,e,t)},useInsertionEffect:function(e,t){return Zr(4,2,e,t)},useMemo:function(e,t){var n=Ue();return t=t===void 0?null:t,e=e(),n.memoizedState=[e,t],e},useReducer:function(e,t,n){var r=Ue();return t=n!==void 0?n(t):t,r.memoizedState=r.baseState=t,e={pending:null,interleaved:null,lanes:0,dispatch:null,lastRenderedReducer:e,lastRenderedState:t},r.queue=e,e=e.dispatch=fg.bind(null,U,e),[r.memoizedState,e]},useRef:function(e){var t=Ue();return e={current:e},t.memoizedState=e},useState:Es,useDebugValue:ra,useDeferredValue:function(e){return Ue().memoizedState=e},useTransition:function(){var e=Es(!1),t=e[0];return e=cg.bind(null,e[1]),Ue().memoizedState=e,[t,e]},useMutableSource:function(){},useSyncExternalStore:function(e,t,n){var r=U,o=Ue();if(D){if(n===void 0)throw Error(P(407));n=n()}else{if(n=t(),oe===null)throw Error(P(349));Dt&30||Dc(r,t,n)}o.memoizedState=n;var l={value:n,getSnapshot:t};return o.queue=l,Rs(Wc.bind(null,r,l,e),[e]),r.flags|=2048,dr(9,Fc.bind(null,r,l,n,t),void 0,null),n},useId:function(){var e=Ue(),t=oe.identifierPrefix;if(D){var n=Je,r=Xe;n=(r&~(1<<32-Oe(r)-1)).toString(32)+n,t=":"+t+"R"+n,n=cr++,0<n&&(t+="H"+n.toString(32)),t+=":"}else n=ug++,t=":"+t+"r"+n.toString(32)+":";return e.memoizedState=t},unstable_isNewReconciler:!1},gg={readContext:Me,useCallback:Xc,useContext:Me,useEffect:na,useImperativeHandle:Yc,useInsertionEffect:Qc,useLayoutEffect:Gc,useMemo:Jc,useReducer:ml,useRef:Hc,useState:function(){return ml(fr)},useDebugValue:ra,useDeferredValue:function(e){var t=Ne();return Zc(t,Z.memoizedState,e)},useTransition:function(){var e=ml(fr)[0],t=Ne().memoizedState;return[e,t]},useMutableSource:Oc,useSyncExternalStore:Ic,useId:qc,unstable_isNewReconciler:!1},mg={readContext:Me,useCallback:Xc,useContext:Me,useEffect:na,useImperativeHandle:Yc,useInsertionEffect:Qc,useLayoutEffect:Gc,useMemo:Jc,useReducer:hl,useRef:Hc,useState:function(){return hl(fr)},useDebugValue:ra,useDeferredValue:function(e){var t=Ne();return Z===null?t.memoizedState=e:Zc(t,Z.memoizedState,e)},useTransition:function(){var e=hl(fr)[0],t=Ne().memoizedState;return[e,t]},useMutableSource:Oc,useSyncExternalStore:Ic,useId:qc,unstable_isNewReconciler:!1};function Ae(e,t){if(e&&e.defaultProps){t=V({},t),e=e.defaultProps;for(var n in e)t[n]===void 0&&(t[n]=e[n]);return t}return t}function ql(e,t,n,r){t=e.memoizedState,n=n(r,t),n=n==null?t:V({},t,n),e.memoizedState=n,e.lanes===0&&(e.updateQueue.baseState=n)}var zo={isMounted:function(e){return(e=e._reactInternals)?Vt(e)===e:!1},enqueueSetState:function(e,t,n){e=e._reactInternals;var r=pe(),o=wt(e),l=Ze(r,o);l.payload=t,n!=null&&(l.callback=n),t=vt(e,l,o),t!==null&&(Ie(t,e,o,r),Xr(t,e,o))},enqueueReplaceState:function(e,t,n){e=e._reactInternals;var r=pe(),o=wt(e),l=Ze(r,o);l.tag=1,l.payload=t,n!=null&&(l.callback=n),t=vt(e,l,o),t!==null&&(Ie(t,e,o,r),Xr(t,e,o))},enqueueForceUpdate:function(e,t){e=e._reactInternals;var n=pe(),r=wt(e),o=Ze(n,r);o.tag=2,t!=null&&(o.callback=t),t=vt(e,o,r),t!==null&&(Ie(t,e,r,n),Xr(t,e,r))}};function js(e,t,n,r,o,l,i){return e=e.stateNode,typeof e.shouldComponentUpdate=="function"?e.shouldComponentUpdate(r,l,i):t.prototype&&t.prototype.isPureReactComponent?!or(n,r)||!or(o,l):!0}function rf(e,t,n){var r=!1,o=kt,l=t.contextType;return typeof l=="object"&&l!==null?l=Me(l):(o=we(t)?Ot:fe.current,r=t.contextTypes,l=(r=r!=null)?mn(e,o):kt),t=new t(n,l),e.memoizedState=t.state!==null&&t.state!==void 0?t.state:null,t.updater=zo,e.stateNode=t,t._reactInternals=e,r&&(e=e.stateNode,e.__reactInternalMemoizedUnmaskedChildContext=o,e.__reactInternalMemoizedMaskedChildContext=l),t}function Ls(e,t,n,r){e=t.state,typeof t.componentWillReceiveProps=="function"&&t.componentWillReceiveProps(n,r),typeof t.UNSAFE_componentWillReceiveProps=="function"&&t.UNSAFE_componentWillReceiveProps(n,r),t.state!==e&&zo.enqueueReplaceState(t,t.state,null)}function ei(e,t,n,r){var o=e.stateNode;o.props=n,o.state=e.memoizedState,o.refs={},Yi(e);var l=t.contextType;typeof l=="object"&&l!==null?o.context=Me(l):(l=we(t)?Ot:fe.current,o.context=mn(e,l)),o.state=e.memoizedState,l=t.getDerivedStateFromProps,typeof l=="function"&&(ql(e,t,l,n),o.state=e.memoizedState),typeof t.getDerivedStateFromProps=="function"||typeof o.getSnapshotBeforeUpdate=="function"||typeof o.UNSAFE_componentWillMount!="function"&&typeof o.componentWillMount!="function"||(t=o.state,typeof o.componentWillMount=="function"&&o.componentWillMount(),typeof o.UNSAFE_componentWillMount=="function"&&o.UNSAFE_componentWillMount(),t!==o.state&&zo.enqueueReplaceState(o,o.state,null),wo(e,n,o,r),o.state=e.memoizedState),typeof o.componentDidMount=="function"&&(e.flags|=4194308)}function wn(e,t){try{var n="",r=t;do n+=Ud(r),r=r.return;while(r);var o=n}catch(l){o=`
Error generating stack: `+l.message+`
`+l.stack}return{value:e,source:t,stack:o,digest:null}}function vl(e,t,n){return{value:e,source:null,stack:n??null,digest:t??null}}function ti(e,t){try{console.error(t.value)}catch(n){setTimeout(function(){throw n})}}var hg=typeof WeakMap=="function"?WeakMap:Map;function of(e,t,n){n=Ze(-1,n),n.tag=3,n.payload={element:null};var r=t.value;return n.callback=function(){bo||(bo=!0,fi=r),ti(e,t)},n}function lf(e,t,n){n=Ze(-1,n),n.tag=3;var r=e.type.getDerivedStateFromError;if(typeof r=="function"){var o=t.value;n.payload=function(){return r(o)},n.callback=function(){ti(e,t)}}var l=e.stateNode;return l!==null&&typeof l.componentDidCatch=="function"&&(n.callback=function(){ti(e,t),typeof r!="function"&&(yt===null?yt=new Set([this]):yt.add(this));var i=t.stack;this.componentDidCatch(t.value,{componentStack:i!==null?i:""})}),n}function Ms(e,t,n){var r=e.pingCache;if(r===null){r=e.pingCache=new hg;var o=new Set;r.set(t,o)}else o=r.get(t),o===void 0&&(o=new Set,r.set(t,o));o.has(n)||(o.add(n),e=jg.bind(null,e,t,n),t.then(e,e))}function Ns(e){do{var t;if((t=e.tag===13)&&(t=e.memoizedState,t=t!==null?t.dehydrated!==null:!0),t)return e;e=e.return}while(e!==null);return null}function $s(e,t,n,r,o){return e.mode&1?(e.flags|=65536,e.lanes=o,e):(e===t?e.flags|=65536:(e.flags|=128,n.flags|=131072,n.flags&=-52805,n.tag===1&&(n.alternate===null?n.tag=17:(t=Ze(-1,1),t.tag=2,vt(n,t,1))),n.lanes|=1),e)}var vg=rt.ReactCurrentOwner,ve=!1;function de(e,t,n,r){t.child=e===null?$c(t,null,n,r):vn(t,e.child,n,r)}function As(e,t,n,r,o){n=n.render;var l=t.ref;return dn(t,o),r=ea(e,t,n,r,l,o),n=ta(),e!==null&&!ve?(t.updateQueue=e.updateQueue,t.flags&=-2053,e.lanes&=~o,nt(e,t,o)):(D&&n&&Wi(t),t.flags|=1,de(e,t,r,o),t.child)}function Bs(e,t,n,r,o){if(e===null){var l=n.type;return typeof l=="function"&&!fa(l)&&l.defaultProps===void 0&&n.compare===null&&n.defaultProps===void 0?(t.tag=15,t.type=l,af(e,t,l,r,o)):(e=no(n.type,null,r,t,t.mode,o),e.ref=t.ref,e.return=t,t.child=e)}if(l=e.child,!(e.lanes&o)){var i=l.memoizedProps;if(n=n.compare,n=n!==null?n:or,n(i,r)&&e.ref===t.ref)return nt(e,t,o)}return t.flags|=1,e=St(l,r),e.ref=t.ref,e.return=t,t.child=e}function af(e,t,n,r,o){if(e!==null){var l=e.memoizedProps;if(or(l,r)&&e.ref===t.ref)if(ve=!1,t.pendingProps=r=l,(e.lanes&o)!==0)e.flags&131072&&(ve=!0);else return t.lanes=e.lanes,nt(e,t,o)}return ni(e,t,n,r,o)}function sf(e,t,n){var r=t.pendingProps,o=r.children,l=e!==null?e.memoizedState:null;if(r.mode==="hidden")if(!(t.mode&1))t.memoizedState={baseLanes:0,cachePool:null,transitions:null},z(an,Pe),Pe|=n;else{if(!(n&1073741824))return e=l!==null?l.baseLanes|n:n,t.lanes=t.childLanes=1073741824,t.memoizedState={baseLanes:e,cachePool:null,transitions:null},t.updateQueue=null,z(an,Pe),Pe|=e,null;t.memoizedState={baseLanes:0,cachePool:null,transitions:null},r=l!==null?l.baseLanes:n,z(an,Pe),Pe|=r}else l!==null?(r=l.baseLanes|n,t.memoizedState=null):r=n,z(an,Pe),Pe|=r;return de(e,t,o,n),t.child}function uf(e,t){var n=t.ref;(e===null&&n!==null||e!==null&&e.ref!==n)&&(t.flags|=512,t.flags|=2097152)}function ni(e,t,n,r,o){var l=we(n)?Ot:fe.current;return l=mn(t,l),dn(t,o),n=ea(e,t,n,r,l,o),r=ta(),e!==null&&!ve?(t.updateQueue=e.updateQueue,t.flags&=-2053,e.lanes&=~o,nt(e,t,o)):(D&&r&&Wi(t),t.flags|=1,de(e,t,n,o),t.child)}function zs(e,t,n,r,o){if(we(n)){var l=!0;go(t)}else l=!1;if(dn(t,o),t.stateNode===null)qr(e,t),rf(t,n,r),ei(t,n,r,o),r=!0;else if(e===null){var i=t.stateNode,a=t.memoizedProps;i.props=a;var s=i.context,u=n.contextType;typeof u=="object"&&u!==null?u=Me(u):(u=we(n)?Ot:fe.current,u=mn(t,u));var d=n.getDerivedStateFromProps,f=typeof d=="function"||typeof i.getSnapshotBeforeUpdate=="function";f||typeof i.UNSAFE_componentWillReceiveProps!="function"&&typeof i.componentWillReceiveProps!="function"||(a!==r||s!==u)&&Ls(t,i,r,u),at=!1;var m=t.memoizedState;i.state=m,wo(t,r,i,o),s=t.memoizedState,a!==r||m!==s||ye.current||at?(typeof d=="function"&&(ql(t,n,d,r),s=t.memoizedState),(a=at||js(t,n,a,r,m,s,u))?(f||typeof i.UNSAFE_componentWillMount!="function"&&typeof i.componentWillMount!="function"||(typeof i.componentWillMount=="function"&&i.componentWillMount(),typeof i.UNSAFE_componentWillMount=="function"&&i.UNSAFE_componentWillMount()),typeof i.componentDidMount=="function"&&(t.flags|=4194308)):(typeof i.componentDidMount=="function"&&(t.flags|=4194308),t.memoizedProps=r,t.memoizedState=s),i.props=r,i.state=s,i.context=u,r=a):(typeof i.componentDidMount=="function"&&(t.flags|=4194308),r=!1)}else{i=t.stateNode,Bc(e,t),a=t.memoizedProps,u=t.type===t.elementType?a:Ae(t.type,a),i.props=u,f=t.pendingProps,m=i.context,s=n.contextType,typeof s=="object"&&s!==null?s=Me(s):(s=we(n)?Ot:fe.current,s=mn(t,s));var y=n.getDerivedStateFromProps;(d=typeof y=="function"||typeof i.getSnapshotBeforeUpdate=="function")||typeof i.UNSAFE_componentWillReceiveProps!="function"&&typeof i.componentWillReceiveProps!="function"||(a!==f||m!==s)&&Ls(t,i,r,s),at=!1,m=t.memoizedState,i.state=m,wo(t,r,i,o);var w=t.memoizedState;a!==f||m!==w||ye.current||at?(typeof y=="function"&&(ql(t,n,y,r),w=t.memoizedState),(u=at||js(t,n,u,r,m,w,s)||!1)?(d||typeof i.UNSAFE_componentWillUpdate!="function"&&typeof i.componentWillUpdate!="function"||(typeof i.componentWillUpdate=="function"&&i.componentWillUpdate(r,w,s),typeof i.UNSAFE_componentWillUpdate=="function"&&i.UNSAFE_componentWillUpdate(r,w,s)),typeof i.componentDidUpdate=="function"&&(t.flags|=4),typeof i.getSnapshotBeforeUpdate=="function"&&(t.flags|=1024)):(typeof i.componentDidUpdate!="function"||a===e.memoizedProps&&m===e.memoizedState||(t.flags|=4),typeof i.getSnapshotBeforeUpdate!="function"||a===e.memoizedProps&&m===e.memoizedState||(t.flags|=1024),t.memoizedProps=r,t.memoizedState=w),i.props=r,i.state=w,i.context=s,r=u):(typeof i.componentDidUpdate!="function"||a===e.memoizedProps&&m===e.memoizedState||(t.flags|=4),typeof i.getSnapshotBeforeUpdate!="function"||a===e.memoizedProps&&m===e.memoizedState||(t.flags|=1024),r=!1)}return ri(e,t,n,r,l,o)}function ri(e,t,n,r,o,l){uf(e,t);var i=(t.flags&128)!==0;if(!r&&!i)return o&&Ps(t,n,!1),nt(e,t,l);r=t.stateNode,vg.current=t;var a=i&&typeof n.getDerivedStateFromError!="function"?null:r.render();return t.flags|=1,e!==null&&i?(t.child=vn(t,e.child,null,l),t.child=vn(t,null,a,l)):de(e,t,a,l),t.memoizedState=r.state,o&&Ps(t,n,!0),t.child}function cf(e){var t=e.stateNode;t.pendingContext?xs(e,t.pendingContext,t.pendingContext!==t.context):t.context&&xs(e,t.context,!1),Xi(e,t.containerInfo)}function Os(e,t,n,r,o){return hn(),Vi(o),t.flags|=256,de(e,t,n,r),t.child}var oi={dehydrated:null,treeContext:null,retryLane:0};function li(e){return{baseLanes:e,cachePool:null,transitions:null}}function ff(e,t,n){var r=t.pendingProps,o=W.current,l=!1,i=(t.flags&128)!==0,a;if((a=i)||(a=e!==null&&e.memoizedState===null?!1:(o&2)!==0),a?(l=!0,t.flags&=-129):(e===null||e.memoizedState!==null)&&(o|=1),z(W,o&1),e===null)return Jl(t),e=t.memoizedState,e!==null&&(e=e.dehydrated,e!==null)?(t.mode&1?e.data==="$!"?t.lanes=8:t.lanes=1073741824:t.lanes=1,null):(i=r.children,e=r.fallback,l?(r=t.mode,l=t.child,i={mode:"hidden",children:i},!(r&1)&&l!==null?(l.childLanes=0,l.pendingProps=i):l=Do(i,r,0,null),e=zt(e,r,n,null),l.return=t,e.return=t,l.sibling=e,t.child=l,t.child.memoizedState=li(n),t.memoizedState=oi,e):oa(t,i));if(o=e.memoizedState,o!==null&&(a=o.dehydrated,a!==null))return yg(e,t,i,r,a,o,n);if(l){l=r.fallback,i=t.mode,o=e.child,a=o.sibling;var s={mode:"hidden",children:r.children};return!(i&1)&&t.child!==o?(r=t.child,r.childLanes=0,r.pendingProps=s,t.deletions=null):(r=St(o,s),r.subtreeFlags=o.subtreeFlags&14680064),a!==null?l=St(a,l):(l=zt(l,i,n,null),l.flags|=2),l.return=t,r.return=t,r.sibling=l,t.child=r,r=l,l=t.child,i=e.child.memoizedState,i=i===null?li(n):{baseLanes:i.baseLanes|n,cachePool:null,transitions:i.transitions},l.memoizedState=i,l.childLanes=e.childLanes&~n,t.memoizedState=oi,r}return l=e.child,e=l.sibling,r=St(l,{mode:"visible",children:r.children}),!(t.mode&1)&&(r.lanes=n),r.return=t,r.sibling=null,e!==null&&(n=t.deletions,n===null?(t.deletions=[e],t.flags|=16):n.push(e)),t.child=r,t.memoizedState=null,r}function oa(e,t){return t=Do({mode:"visible",children:t},e.mode,0,null),t.return=e,e.child=t}function Ir(e,t,n,r){return r!==null&&Vi(r),vn(t,e.child,null,n),e=oa(t,t.pendingProps.children),e.flags|=2,t.memoizedState=null,e}function yg(e,t,n,r,o,l,i){if(n)return t.flags&256?(t.flags&=-257,r=vl(Error(P(422))),Ir(e,t,i,r)):t.memoizedState!==null?(t.child=e.child,t.flags|=128,null):(l=r.fallback,o=t.mode,r=Do({mode:"visible",children:r.children},o,0,null),l=zt(l,o,i,null),l.flags|=2,r.return=t,l.return=t,r.sibling=l,t.child=r,t.mode&1&&vn(t,e.child,null,i),t.child.memoizedState=li(i),t.memoizedState=oi,l);if(!(t.mode&1))return Ir(e,t,i,null);if(o.data==="$!"){if(r=o.nextSibling&&o.nextSibling.dataset,r)var a=r.dgst;return r=a,l=Error(P(419)),r=vl(l,r,void 0),Ir(e,t,i,r)}if(a=(i&e.childLanes)!==0,ve||a){if(r=oe,r!==null){switch(i&-i){case 4:o=2;break;case 16:o=8;break;case 64:case 128:case 256:case 512:case 1024:case 2048:case 4096:case 8192:case 16384:case 32768:case 65536:case 131072:case 262144:case 524288:case 1048576:case 2097152:case 4194304:case 8388608:case 16777216:case 33554432:case 67108864:o=32;break;case 536870912:o=268435456;break;default:o=0}o=o&(r.suspendedLanes|i)?0:o,o!==0&&o!==l.retryLane&&(l.retryLane=o,tt(e,o),Ie(r,e,o,-1))}return ca(),r=vl(Error(P(421))),Ir(e,t,i,r)}return o.data==="$?"?(t.flags|=128,t.child=e.child,t=Lg.bind(null,e),o._reactRetry=t,null):(e=l.treeContext,ke=ht(o.nextSibling),be=t,D=!0,ze=null,e!==null&&(Ee[Re++]=Xe,Ee[Re++]=Je,Ee[Re++]=It,Xe=e.id,Je=e.overflow,It=t),t=oa(t,r.children),t.flags|=4096,t)}function Is(e,t,n){e.lanes|=t;var r=e.alternate;r!==null&&(r.lanes|=t),Zl(e.return,t,n)}function yl(e,t,n,r,o){var l=e.memoizedState;l===null?e.memoizedState={isBackwards:t,rendering:null,renderingStartTime:0,last:r,tail:n,tailMode:o}:(l.isBackwards=t,l.rendering=null,l.renderingStartTime=0,l.last=r,l.tail=n,l.tailMode=o)}function df(e,t,n){var r=t.pendingProps,o=r.revealOrder,l=r.tail;if(de(e,t,r.children,n),r=W.current,r&2)r=r&1|2,t.flags|=128;else{if(e!==null&&e.flags&128)e:for(e=t.child;e!==null;){if(e.tag===13)e.memoizedState!==null&&Is(e,n,t);else if(e.tag===19)Is(e,n,t);else if(e.child!==null){e.child.return=e,e=e.child;continue}if(e===t)break e;for(;e.sibling===null;){if(e.return===null||e.return===t)break e;e=e.return}e.sibling.return=e.return,e=e.sibling}r&=1}if(z(W,r),!(t.mode&1))t.memoizedState=null;else switch(o){case"forwards":for(n=t.child,o=null;n!==null;)e=n.alternate,e!==null&&So(e)===null&&(o=n),n=n.sibling;n=o,n===null?(o=t.child,t.child=null):(o=n.sibling,n.sibling=null),yl(t,!1,o,n,l);break;case"backwards":for(n=null,o=t.child,t.child=null;o!==null;){if(e=o.alternate,e!==null&&So(e)===null){t.child=o;break}e=o.sibling,o.sibling=n,n=o,o=e}yl(t,!0,n,null,l);break;case"together":yl(t,!1,null,null,void 0);break;default:t.memoizedState=null}return t.child}function qr(e,t){!(t.mode&1)&&e!==null&&(e.alternate=null,t.alternate=null,t.flags|=2)}function nt(e,t,n){if(e!==null&&(t.dependencies=e.dependencies),Ft|=t.lanes,!(n&t.childLanes))return null;if(e!==null&&t.child!==e.child)throw Error(P(153));if(t.child!==null){for(e=t.child,n=St(e,e.pendingProps),t.child=n,n.return=t;e.sibling!==null;)e=e.sibling,n=n.sibling=St(e,e.pendingProps),n.return=t;n.sibling=null}return t.child}function wg(e,t,n){switch(t.tag){case 3:cf(t),hn();break;case 5:zc(t);break;case 1:we(t.type)&&go(t);break;case 4:Xi(t,t.stateNode.containerInfo);break;case 10:var r=t.type._context,o=t.memoizedProps.value;z(vo,r._currentValue),r._currentValue=o;break;case 13:if(r=t.memoizedState,r!==null)return r.dehydrated!==null?(z(W,W.current&1),t.flags|=128,null):n&t.child.childLanes?ff(e,t,n):(z(W,W.current&1),e=nt(e,t,n),e!==null?e.sibling:null);z(W,W.current&1);break;case 19:if(r=(n&t.childLanes)!==0,e.flags&128){if(r)return df(e,t,n);t.flags|=128}if(o=t.memoizedState,o!==null&&(o.rendering=null,o.tail=null,o.lastEffect=null),z(W,W.current),r)break;return null;case 22:case 23:return t.lanes=0,sf(e,t,n)}return nt(e,t,n)}var pf,ii,gf,mf;pf=function(e,t){for(var n=t.child;n!==null;){if(n.tag===5||n.tag===6)e.appendChild(n.stateNode);else if(n.tag!==4&&n.child!==null){n.child.return=n,n=n.child;continue}if(n===t)break;for(;n.sibling===null;){if(n.return===null||n.return===t)return;n=n.return}n.sibling.return=n.return,n=n.sibling}};ii=function(){};gf=function(e,t,n,r){var o=e.memoizedProps;if(o!==r){e=t.stateNode,At(Qe.current);var l=null;switch(n){case"input":o=El(e,o),r=El(e,r),l=[];break;case"select":o=V({},o,{value:void 0}),r=V({},r,{value:void 0}),l=[];break;case"textarea":o=Ll(e,o),r=Ll(e,r),l=[];break;default:typeof o.onClick!="function"&&typeof r.onClick=="function"&&(e.onclick=fo)}Nl(n,r);var i;n=null;for(u in o)if(!r.hasOwnProperty(u)&&o.hasOwnProperty(u)&&o[u]!=null)if(u==="style"){var a=o[u];for(i in a)a.hasOwnProperty(i)&&(n||(n={}),n[i]="")}else u!=="dangerouslySetInnerHTML"&&u!=="children"&&u!=="suppressContentEditableWarning"&&u!=="suppressHydrationWarning"&&u!=="autoFocus"&&(Jn.hasOwnProperty(u)?l||(l=[]):(l=l||[]).push(u,null));for(u in r){var s=r[u];if(a=o!=null?o[u]:void 0,r.hasOwnProperty(u)&&s!==a&&(s!=null||a!=null))if(u==="style")if(a){for(i in a)!a.hasOwnProperty(i)||s&&s.hasOwnProperty(i)||(n||(n={}),n[i]="");for(i in s)s.hasOwnProperty(i)&&a[i]!==s[i]&&(n||(n={}),n[i]=s[i])}else n||(l||(l=[]),l.push(u,n)),n=s;else u==="dangerouslySetInnerHTML"?(s=s?s.__html:void 0,a=a?a.__html:void 0,s!=null&&a!==s&&(l=l||[]).push(u,s)):u==="children"?typeof s!="string"&&typeof s!="number"||(l=l||[]).push(u,""+s):u!=="suppressContentEditableWarning"&&u!=="suppressHydrationWarning"&&(Jn.hasOwnProperty(u)?(s!=null&&u==="onScroll"&&O("scroll",e),l||a===s||(l=[])):(l=l||[]).push(u,s))}n&&(l=l||[]).push("style",n);var u=l;(t.updateQueue=u)&&(t.flags|=4)}};mf=function(e,t,n,r){n!==r&&(t.flags|=4)};function An(e,t){if(!D)switch(e.tailMode){case"hidden":t=e.tail;for(var n=null;t!==null;)t.alternate!==null&&(n=t),t=t.sibling;n===null?e.tail=null:n.sibling=null;break;case"collapsed":n=e.tail;for(var r=null;n!==null;)n.alternate!==null&&(r=n),n=n.sibling;r===null?t||e.tail===null?e.tail=null:e.tail.sibling=null:r.sibling=null}}function ue(e){var t=e.alternate!==null&&e.alternate.child===e.child,n=0,r=0;if(t)for(var o=e.child;o!==null;)n|=o.lanes|o.childLanes,r|=o.subtreeFlags&14680064,r|=o.flags&14680064,o.return=e,o=o.sibling;else for(o=e.child;o!==null;)n|=o.lanes|o.childLanes,r|=o.subtreeFlags,r|=o.flags,o.return=e,o=o.sibling;return e.subtreeFlags|=r,e.childLanes=n,t}function Sg(e,t,n){var r=t.pendingProps;switch(Ui(t),t.tag){case 2:case 16:case 15:case 0:case 11:case 7:case 8:case 12:case 9:case 14:return ue(t),null;case 1:return we(t.type)&&po(),ue(t),null;case 3:return r=t.stateNode,yn(),I(ye),I(fe),Zi(),r.pendingContext&&(r.context=r.pendingContext,r.pendingContext=null),(e===null||e.child===null)&&(zr(t)?t.flags|=4:e===null||e.memoizedState.isDehydrated&&!(t.flags&256)||(t.flags|=1024,ze!==null&&(gi(ze),ze=null))),ii(e,t),ue(t),null;case 5:Ji(t);var o=At(ur.current);if(n=t.type,e!==null&&t.stateNode!=null)gf(e,t,n,r,o),e.ref!==t.ref&&(t.flags|=512,t.flags|=2097152);else{if(!r){if(t.stateNode===null)throw Error(P(166));return ue(t),null}if(e=At(Qe.current),zr(t)){r=t.stateNode,n=t.type;var l=t.memoizedProps;switch(r[Ve]=t,r[ar]=l,e=(t.mode&1)!==0,n){case"dialog":O("cancel",r),O("close",r);break;case"iframe":case"object":case"embed":O("load",r);break;case"video":case"audio":for(o=0;o<Dn.length;o++)O(Dn[o],r);break;case"source":O("error",r);break;case"img":case"image":case"link":O("error",r),O("load",r);break;case"details":O("toggle",r);break;case"input":Ka(r,l),O("invalid",r);break;case"select":r._wrapperState={wasMultiple:!!l.multiple},O("invalid",r);break;case"textarea":Xa(r,l),O("invalid",r)}Nl(n,l),o=null;for(var i in l)if(l.hasOwnProperty(i)){var a=l[i];i==="children"?typeof a=="string"?r.textContent!==a&&(l.suppressHydrationWarning!==!0&&Br(r.textContent,a,e),o=["children",a]):typeof a=="number"&&r.textContent!==""+a&&(l.suppressHydrationWarning!==!0&&Br(r.textContent,a,e),o=["children",""+a]):Jn.hasOwnProperty(i)&&a!=null&&i==="onScroll"&&O("scroll",r)}switch(n){case"input":Er(r),Ya(r,l,!0);break;case"textarea":Er(r),Ja(r);break;case"select":case"option":break;default:typeof l.onClick=="function"&&(r.onclick=fo)}r=o,t.updateQueue=r,r!==null&&(t.flags|=4)}else{i=o.nodeType===9?o:o.ownerDocument,e==="http://www.w3.org/1999/xhtml"&&(e=Wu(n)),e==="http://www.w3.org/1999/xhtml"?n==="script"?(e=i.createElement("div"),e.innerHTML="<script><\/script>",e=e.removeChild(e.firstChild)):typeof r.is=="string"?e=i.createElement(n,{is:r.is}):(e=i.createElement(n),n==="select"&&(i=e,r.multiple?i.multiple=!0:r.size&&(i.size=r.size))):e=i.createElementNS(e,n),e[Ve]=t,e[ar]=r,pf(e,t,!1,!1),t.stateNode=e;e:{switch(i=$l(n,r),n){case"dialog":O("cancel",e),O("close",e),o=r;break;case"iframe":case"object":case"embed":O("load",e),o=r;break;case"video":case"audio":for(o=0;o<Dn.length;o++)O(Dn[o],e);o=r;break;case"source":O("error",e),o=r;break;case"img":case"image":case"link":O("error",e),O("load",e),o=r;break;case"details":O("toggle",e),o=r;break;case"input":Ka(e,r),o=El(e,r),O("invalid",e);break;case"option":o=r;break;case"select":e._wrapperState={wasMultiple:!!r.multiple},o=V({},r,{value:void 0}),O("invalid",e);break;case"textarea":Xa(e,r),o=Ll(e,r),O("invalid",e);break;default:o=r}Nl(n,o),a=o;for(l in a)if(a.hasOwnProperty(l)){var s=a[l];l==="style"?Hu(e,s):l==="dangerouslySetInnerHTML"?(s=s?s.__html:void 0,s!=null&&Uu(e,s)):l==="children"?typeof s=="string"?(n!=="textarea"||s!=="")&&Zn(e,s):typeof s=="number"&&Zn(e,""+s):l!=="suppressContentEditableWarning"&&l!=="suppressHydrationWarning"&&l!=="autoFocus"&&(Jn.hasOwnProperty(l)?s!=null&&l==="onScroll"&&O("scroll",e):s!=null&&Ei(e,l,s,i))}switch(n){case"input":Er(e),Ya(e,r,!1);break;case"textarea":Er(e),Ja(e);break;case"option":r.value!=null&&e.setAttribute("value",""+Pt(r.value));break;case"select":e.multiple=!!r.multiple,l=r.value,l!=null?sn(e,!!r.multiple,l,!1):r.defaultValue!=null&&sn(e,!!r.multiple,r.defaultValue,!0);break;default:typeof o.onClick=="function"&&(e.onclick=fo)}switch(n){case"button":case"input":case"select":case"textarea":r=!!r.autoFocus;break e;case"img":r=!0;break e;default:r=!1}}r&&(t.flags|=4)}t.ref!==null&&(t.flags|=512,t.flags|=2097152)}return ue(t),null;case 6:if(e&&t.stateNode!=null)mf(e,t,e.memoizedProps,r);else{if(typeof r!="string"&&t.stateNode===null)throw Error(P(166));if(n=At(ur.current),At(Qe.current),zr(t)){if(r=t.stateNode,n=t.memoizedProps,r[Ve]=t,(l=r.nodeValue!==n)&&(e=be,e!==null))switch(e.tag){case 3:Br(r.nodeValue,n,(e.mode&1)!==0);break;case 5:e.memoizedProps.suppressHydrationWarning!==!0&&Br(r.nodeValue,n,(e.mode&1)!==0)}l&&(t.flags|=4)}else r=(n.nodeType===9?n:n.ownerDocument).createTextNode(r),r[Ve]=t,t.stateNode=r}return ue(t),null;case 13:if(I(W),r=t.memoizedState,e===null||e.memoizedState!==null&&e.memoizedState.dehydrated!==null){if(D&&ke!==null&&t.mode&1&&!(t.flags&128))Mc(),hn(),t.flags|=98560,l=!1;else if(l=zr(t),r!==null&&r.dehydrated!==null){if(e===null){if(!l)throw Error(P(318));if(l=t.memoizedState,l=l!==null?l.dehydrated:null,!l)throw Error(P(317));l[Ve]=t}else hn(),!(t.flags&128)&&(t.memoizedState=null),t.flags|=4;ue(t),l=!1}else ze!==null&&(gi(ze),ze=null),l=!0;if(!l)return t.flags&65536?t:null}return t.flags&128?(t.lanes=n,t):(r=r!==null,r!==(e!==null&&e.memoizedState!==null)&&r&&(t.child.flags|=8192,t.mode&1&&(e===null||W.current&1?q===0&&(q=3):ca())),t.updateQueue!==null&&(t.flags|=4),ue(t),null);case 4:return yn(),ii(e,t),e===null&&lr(t.stateNode.containerInfo),ue(t),null;case 10:return Gi(t.type._context),ue(t),null;case 17:return we(t.type)&&po(),ue(t),null;case 19:if(I(W),l=t.memoizedState,l===null)return ue(t),null;if(r=(t.flags&128)!==0,i=l.rendering,i===null)if(r)An(l,!1);else{if(q!==0||e!==null&&e.flags&128)for(e=t.child;e!==null;){if(i=So(e),i!==null){for(t.flags|=128,An(l,!1),r=i.updateQueue,r!==null&&(t.updateQueue=r,t.flags|=4),t.subtreeFlags=0,r=n,n=t.child;n!==null;)l=n,e=r,l.flags&=14680066,i=l.alternate,i===null?(l.childLanes=0,l.lanes=e,l.child=null,l.subtreeFlags=0,l.memoizedProps=null,l.memoizedState=null,l.updateQueue=null,l.dependencies=null,l.stateNode=null):(l.childLanes=i.childLanes,l.lanes=i.lanes,l.child=i.child,l.subtreeFlags=0,l.deletions=null,l.memoizedProps=i.memoizedProps,l.memoizedState=i.memoizedState,l.updateQueue=i.updateQueue,l.type=i.type,e=i.dependencies,l.dependencies=e===null?null:{lanes:e.lanes,firstContext:e.firstContext}),n=n.sibling;return z(W,W.current&1|2),t.child}e=e.sibling}l.tail!==null&&K()>Sn&&(t.flags|=128,r=!0,An(l,!1),t.lanes=4194304)}else{if(!r)if(e=So(i),e!==null){if(t.flags|=128,r=!0,n=e.updateQueue,n!==null&&(t.updateQueue=n,t.flags|=4),An(l,!0),l.tail===null&&l.tailMode==="hidden"&&!i.alternate&&!D)return ue(t),null}else 2*K()-l.renderingStartTime>Sn&&n!==1073741824&&(t.flags|=128,r=!0,An(l,!1),t.lanes=4194304);l.isBackwards?(i.sibling=t.child,t.child=i):(n=l.last,n!==null?n.sibling=i:t.child=i,l.last=i)}return l.tail!==null?(t=l.tail,l.rendering=t,l.tail=t.sibling,l.renderingStartTime=K(),t.sibling=null,n=W.current,z(W,r?n&1|2:n&1),t):(ue(t),null);case 22:case 23:return ua(),r=t.memoizedState!==null,e!==null&&e.memoizedState!==null!==r&&(t.flags|=8192),r&&t.mode&1?Pe&1073741824&&(ue(t),t.subtreeFlags&6&&(t.flags|=8192)):ue(t),null;case 24:return null;case 25:return null}throw Error(P(156,t.tag))}function xg(e,t){switch(Ui(t),t.tag){case 1:return we(t.type)&&po(),e=t.flags,e&65536?(t.flags=e&-65537|128,t):null;case 3:return yn(),I(ye),I(fe),Zi(),e=t.flags,e&65536&&!(e&128)?(t.flags=e&-65537|128,t):null;case 5:return Ji(t),null;case 13:if(I(W),e=t.memoizedState,e!==null&&e.dehydrated!==null){if(t.alternate===null)throw Error(P(340));hn()}return e=t.flags,e&65536?(t.flags=e&-65537|128,t):null;case 19:return I(W),null;case 4:return yn(),null;case 10:return Gi(t.type._context),null;case 22:case 23:return ua(),null;case 24:return null;default:return null}}var Dr=!1,ce=!1,Pg=typeof WeakSet=="function"?WeakSet:Set,_=null;function ln(e,t){var n=e.ref;if(n!==null)if(typeof n=="function")try{n(null)}catch(r){H(e,t,r)}else n.current=null}function ai(e,t,n){try{n()}catch(r){H(e,t,r)}}var Ds=!1;function kg(e,t){if(Vl=so,e=wc(),Fi(e)){if("selectionStart"in e)var n={start:e.selectionStart,end:e.selectionEnd};else e:{n=(n=e.ownerDocument)&&n.defaultView||window;var r=n.getSelection&&n.getSelection();if(r&&r.rangeCount!==0){n=r.anchorNode;var o=r.anchorOffset,l=r.focusNode;r=r.focusOffset;try{n.nodeType,l.nodeType}catch{n=null;break e}var i=0,a=-1,s=-1,u=0,d=0,f=e,m=null;t:for(;;){for(var y;f!==n||o!==0&&f.nodeType!==3||(a=i+o),f!==l||r!==0&&f.nodeType!==3||(s=i+r),f.nodeType===3&&(i+=f.nodeValue.length),(y=f.firstChild)!==null;)m=f,f=y;for(;;){if(f===e)break t;if(m===n&&++u===o&&(a=i),m===l&&++d===r&&(s=i),(y=f.nextSibling)!==null)break;f=m,m=f.parentNode}f=y}n=a===-1||s===-1?null:{start:a,end:s}}else n=null}n=n||{start:0,end:0}}else n=null;for(Hl={focusedElem:e,selectionRange:n},so=!1,_=t;_!==null;)if(t=_,e=t.child,(t.subtreeFlags&1028)!==0&&e!==null)e.return=t,_=e;else for(;_!==null;){t=_;try{var w=t.alternate;if(t.flags&1024)switch(t.tag){case 0:case 11:case 15:break;case 1:if(w!==null){var S=w.memoizedProps,k=w.memoizedState,g=t.stateNode,p=g.getSnapshotBeforeUpdate(t.elementType===t.type?S:Ae(t.type,S),k);g.__reactInternalSnapshotBeforeUpdate=p}break;case 3:var h=t.stateNode.containerInfo;h.nodeType===1?h.textContent="":h.nodeType===9&&h.documentElement&&h.removeChild(h.documentElement);break;case 5:case 6:case 4:case 17:break;default:throw Error(P(163))}}catch(x){H(t,t.return,x)}if(e=t.sibling,e!==null){e.return=t.return,_=e;break}_=t.return}return w=Ds,Ds=!1,w}function Kn(e,t,n){var r=t.updateQueue;if(r=r!==null?r.lastEffect:null,r!==null){var o=r=r.next;do{if((o.tag&e)===e){var l=o.destroy;o.destroy=void 0,l!==void 0&&ai(t,n,l)}o=o.next}while(o!==r)}}function Oo(e,t){if(t=t.updateQueue,t=t!==null?t.lastEffect:null,t!==null){var n=t=t.next;do{if((n.tag&e)===e){var r=n.create;n.destroy=r()}n=n.next}while(n!==t)}}function si(e){var t=e.ref;if(t!==null){var n=e.stateNode;switch(e.tag){case 5:e=n;break;default:e=n}typeof t=="function"?t(e):t.current=e}}function hf(e){var t=e.alternate;t!==null&&(e.alternate=null,hf(t)),e.child=null,e.deletions=null,e.sibling=null,e.tag===5&&(t=e.stateNode,t!==null&&(delete t[Ve],delete t[ar],delete t[Kl],delete t[lg],delete t[ig])),e.stateNode=null,e.return=null,e.dependencies=null,e.memoizedProps=null,e.memoizedState=null,e.pendingProps=null,e.stateNode=null,e.updateQueue=null}function vf(e){return e.tag===5||e.tag===3||e.tag===4}function Fs(e){e:for(;;){for(;e.sibling===null;){if(e.return===null||vf(e.return))return null;e=e.return}for(e.sibling.return=e.return,e=e.sibling;e.tag!==5&&e.tag!==6&&e.tag!==18;){if(e.flags&2||e.child===null||e.tag===4)continue e;e.child.return=e,e=e.child}if(!(e.flags&2))return e.stateNode}}function ui(e,t,n){var r=e.tag;if(r===5||r===6)e=e.stateNode,t?n.nodeType===8?n.parentNode.insertBefore(e,t):n.insertBefore(e,t):(n.nodeType===8?(t=n.parentNode,t.insertBefore(e,n)):(t=n,t.appendChild(e)),n=n._reactRootContainer,n!=null||t.onclick!==null||(t.onclick=fo));else if(r!==4&&(e=e.child,e!==null))for(ui(e,t,n),e=e.sibling;e!==null;)ui(e,t,n),e=e.sibling}function ci(e,t,n){var r=e.tag;if(r===5||r===6)e=e.stateNode,t?n.insertBefore(e,t):n.appendChild(e);else if(r!==4&&(e=e.child,e!==null))for(ci(e,t,n),e=e.sibling;e!==null;)ci(e,t,n),e=e.sibling}var le=null,Be=!1;function lt(e,t,n){for(n=n.child;n!==null;)yf(e,t,n),n=n.sibling}function yf(e,t,n){if(He&&typeof He.onCommitFiberUnmount=="function")try{He.onCommitFiberUnmount(jo,n)}catch{}switch(n.tag){case 5:ce||ln(n,t);case 6:var r=le,o=Be;le=null,lt(e,t,n),le=r,Be=o,le!==null&&(Be?(e=le,n=n.stateNode,e.nodeType===8?e.parentNode.removeChild(n):e.removeChild(n)):le.removeChild(n.stateNode));break;case 18:le!==null&&(Be?(e=le,n=n.stateNode,e.nodeType===8?fl(e.parentNode,n):e.nodeType===1&&fl(e,n),nr(e)):fl(le,n.stateNode));break;case 4:r=le,o=Be,le=n.stateNode.containerInfo,Be=!0,lt(e,t,n),le=r,Be=o;break;case 0:case 11:case 14:case 15:if(!ce&&(r=n.updateQueue,r!==null&&(r=r.lastEffect,r!==null))){o=r=r.next;do{var l=o,i=l.destroy;l=l.tag,i!==void 0&&(l&2||l&4)&&ai(n,t,i),o=o.next}while(o!==r)}lt(e,t,n);break;case 1:if(!ce&&(ln(n,t),r=n.stateNode,typeof r.componentWillUnmount=="function"))try{r.props=n.memoizedProps,r.state=n.memoizedState,r.componentWillUnmount()}catch(a){H(n,t,a)}lt(e,t,n);break;case 21:lt(e,t,n);break;case 22:n.mode&1?(ce=(r=ce)||n.memoizedState!==null,lt(e,t,n),ce=r):lt(e,t,n);break;default:lt(e,t,n)}}function Ws(e){var t=e.updateQueue;if(t!==null){e.updateQueue=null;var n=e.stateNode;n===null&&(n=e.stateNode=new Pg),t.forEach(function(r){var o=Mg.bind(null,e,r);n.has(r)||(n.add(r),r.then(o,o))})}}function $e(e,t){var n=t.deletions;if(n!==null)for(var r=0;r<n.length;r++){var o=n[r];try{var l=e,i=t,a=i;e:for(;a!==null;){switch(a.tag){case 5:le=a.stateNode,Be=!1;break e;case 3:le=a.stateNode.containerInfo,Be=!0;break e;case 4:le=a.stateNode.containerInfo,Be=!0;break e}a=a.return}if(le===null)throw Error(P(160));yf(l,i,o),le=null,Be=!1;var s=o.alternate;s!==null&&(s.return=null),o.return=null}catch(u){H(o,t,u)}}if(t.subtreeFlags&12854)for(t=t.child;t!==null;)wf(t,e),t=t.sibling}function wf(e,t){var n=e.alternate,r=e.flags;switch(e.tag){case 0:case 11:case 14:case 15:if($e(t,e),We(e),r&4){try{Kn(3,e,e.return),Oo(3,e)}catch(S){H(e,e.return,S)}try{Kn(5,e,e.return)}catch(S){H(e,e.return,S)}}break;case 1:$e(t,e),We(e),r&512&&n!==null&&ln(n,n.return);break;case 5:if($e(t,e),We(e),r&512&&n!==null&&ln(n,n.return),e.flags&32){var o=e.stateNode;try{Zn(o,"")}catch(S){H(e,e.return,S)}}if(r&4&&(o=e.stateNode,o!=null)){var l=e.memoizedProps,i=n!==null?n.memoizedProps:l,a=e.type,s=e.updateQueue;if(e.updateQueue=null,s!==null)try{a==="input"&&l.type==="radio"&&l.name!=null&&Du(o,l),$l(a,i);var u=$l(a,l);for(i=0;i<s.length;i+=2){var d=s[i],f=s[i+1];d==="style"?Hu(o,f):d==="dangerouslySetInnerHTML"?Uu(o,f):d==="children"?Zn(o,f):Ei(o,d,f,u)}switch(a){case"input":Rl(o,l);break;case"textarea":Fu(o,l);break;case"select":var m=o._wrapperState.wasMultiple;o._wrapperState.wasMultiple=!!l.multiple;var y=l.value;y!=null?sn(o,!!l.multiple,y,!1):m!==!!l.multiple&&(l.defaultValue!=null?sn(o,!!l.multiple,l.defaultValue,!0):sn(o,!!l.multiple,l.multiple?[]:"",!1))}o[ar]=l}catch(S){H(e,e.return,S)}}break;case 6:if($e(t,e),We(e),r&4){if(e.stateNode===null)throw Error(P(162));o=e.stateNode,l=e.memoizedProps;try{o.nodeValue=l}catch(S){H(e,e.return,S)}}break;case 3:if($e(t,e),We(e),r&4&&n!==null&&n.memoizedState.isDehydrated)try{nr(t.containerInfo)}catch(S){H(e,e.return,S)}break;case 4:$e(t,e),We(e);break;case 13:$e(t,e),We(e),o=e.child,o.flags&8192&&(l=o.memoizedState!==null,o.stateNode.isHidden=l,!l||o.alternate!==null&&o.alternate.memoizedState!==null||(aa=K())),r&4&&Ws(e);break;case 22:if(d=n!==null&&n.memoizedState!==null,e.mode&1?(ce=(u=ce)||d,$e(t,e),ce=u):$e(t,e),We(e),r&8192){if(u=e.memoizedState!==null,(e.stateNode.isHidden=u)&&!d&&e.mode&1)for(_=e,d=e.child;d!==null;){for(f=_=d;_!==null;){switch(m=_,y=m.child,m.tag){case 0:case 11:case 14:case 15:Kn(4,m,m.return);break;case 1:ln(m,m.return);var w=m.stateNode;if(typeof w.componentWillUnmount=="function"){r=m,n=m.return;try{t=r,w.props=t.memoizedProps,w.state=t.memoizedState,w.componentWillUnmount()}catch(S){H(r,n,S)}}break;case 5:ln(m,m.return);break;case 22:if(m.memoizedState!==null){Vs(f);continue}}y!==null?(y.return=m,_=y):Vs(f)}d=d.sibling}e:for(d=null,f=e;;){if(f.tag===5){if(d===null){d=f;try{o=f.stateNode,u?(l=o.style,typeof l.setProperty=="function"?l.setProperty("display","none","important"):l.display="none"):(a=f.stateNode,s=f.memoizedProps.style,i=s!=null&&s.hasOwnProperty("display")?s.display:null,a.style.display=Vu("display",i))}catch(S){H(e,e.return,S)}}}else if(f.tag===6){if(d===null)try{f.stateNode.nodeValue=u?"":f.memoizedProps}catch(S){H(e,e.return,S)}}else if((f.tag!==22&&f.tag!==23||f.memoizedState===null||f===e)&&f.child!==null){f.child.return=f,f=f.child;continue}if(f===e)break e;for(;f.sibling===null;){if(f.return===null||f.return===e)break e;d===f&&(d=null),f=f.return}d===f&&(d=null),f.sibling.return=f.return,f=f.sibling}}break;case 19:$e(t,e),We(e),r&4&&Ws(e);break;case 21:break;default:$e(t,e),We(e)}}function We(e){var t=e.flags;if(t&2){try{e:{for(var n=e.return;n!==null;){if(vf(n)){var r=n;break e}n=n.return}throw Error(P(160))}switch(r.tag){case 5:var o=r.stateNode;r.flags&32&&(Zn(o,""),r.flags&=-33);var l=Fs(e);ci(e,l,o);break;case 3:case 4:var i=r.stateNode.containerInfo,a=Fs(e);ui(e,a,i);break;default:throw Error(P(161))}}catch(s){H(e,e.return,s)}e.flags&=-3}t&4096&&(e.flags&=-4097)}function bg(e,t,n){_=e,Sf(e)}function Sf(e,t,n){for(var r=(e.mode&1)!==0;_!==null;){var o=_,l=o.child;if(o.tag===22&&r){var i=o.memoizedState!==null||Dr;if(!i){var a=o.alternate,s=a!==null&&a.memoizedState!==null||ce;a=Dr;var u=ce;if(Dr=i,(ce=s)&&!u)for(_=o;_!==null;)i=_,s=i.child,i.tag===22&&i.memoizedState!==null?Hs(o):s!==null?(s.return=i,_=s):Hs(o);for(;l!==null;)_=l,Sf(l),l=l.sibling;_=o,Dr=a,ce=u}Us(e)}else o.subtreeFlags&8772&&l!==null?(l.return=o,_=l):Us(e)}}function Us(e){for(;_!==null;){var t=_;if(t.flags&8772){var n=t.alternate;try{if(t.flags&8772)switch(t.tag){case 0:case 11:case 15:ce||Oo(5,t);break;case 1:var r=t.stateNode;if(t.flags&4&&!ce)if(n===null)r.componentDidMount();else{var o=t.elementType===t.type?n.memoizedProps:Ae(t.type,n.memoizedProps);r.componentDidUpdate(o,n.memoizedState,r.__reactInternalSnapshotBeforeUpdate)}var l=t.updateQueue;l!==null&&Ts(t,l,r);break;case 3:var i=t.updateQueue;if(i!==null){if(n=null,t.child!==null)switch(t.child.tag){case 5:n=t.child.stateNode;break;case 1:n=t.child.stateNode}Ts(t,i,n)}break;case 5:var a=t.stateNode;if(n===null&&t.flags&4){n=a;var s=t.memoizedProps;switch(t.type){case"button":case"input":case"select":case"textarea":s.autoFocus&&n.focus();break;case"img":s.src&&(n.src=s.src)}}break;case 6:break;case 4:break;case 12:break;case 13:if(t.memoizedState===null){var u=t.alternate;if(u!==null){var d=u.memoizedState;if(d!==null){var f=d.dehydrated;f!==null&&nr(f)}}}break;case 19:case 17:case 21:case 22:case 23:case 25:break;default:throw Error(P(163))}ce||t.flags&512&&si(t)}catch(m){H(t,t.return,m)}}if(t===e){_=null;break}if(n=t.sibling,n!==null){n.return=t.return,_=n;break}_=t.return}}function Vs(e){for(;_!==null;){var t=_;if(t===e){_=null;break}var n=t.sibling;if(n!==null){n.return=t.return,_=n;break}_=t.return}}function Hs(e){for(;_!==null;){var t=_;try{switch(t.tag){case 0:case 11:case 15:var n=t.return;try{Oo(4,t)}catch(s){H(t,n,s)}break;case 1:var r=t.stateNode;if(typeof r.componentDidMount=="function"){var o=t.return;try{r.componentDidMount()}catch(s){H(t,o,s)}}var l=t.return;try{si(t)}catch(s){H(t,l,s)}break;case 5:var i=t.return;try{si(t)}catch(s){H(t,i,s)}}}catch(s){H(t,t.return,s)}if(t===e){_=null;break}var a=t.sibling;if(a!==null){a.return=t.return,_=a;break}_=t.return}}var _g=Math.ceil,ko=rt.ReactCurrentDispatcher,la=rt.ReactCurrentOwner,Le=rt.ReactCurrentBatchConfig,$=0,oe=null,X=null,ie=0,Pe=0,an=_t(0),q=0,pr=null,Ft=0,Io=0,ia=0,Yn=null,he=null,aa=0,Sn=1/0,Ke=null,bo=!1,fi=null,yt=null,Fr=!1,ft=null,_o=0,Xn=0,di=null,eo=-1,to=0;function pe(){return $&6?K():eo!==-1?eo:eo=K()}function wt(e){return e.mode&1?$&2&&ie!==0?ie&-ie:sg.transition!==null?(to===0&&(to=rc()),to):(e=A,e!==0||(e=window.event,e=e===void 0?16:cc(e.type)),e):1}function Ie(e,t,n,r){if(50<Xn)throw Xn=0,di=null,Error(P(185));vr(e,n,r),(!($&2)||e!==oe)&&(e===oe&&(!($&2)&&(Io|=n),q===4&&ut(e,ie)),Se(e,r),n===1&&$===0&&!(t.mode&1)&&(Sn=K()+500,Ao&&Ct()))}function Se(e,t){var n=e.callbackNode;sp(e,t);var r=ao(e,e===oe?ie:0);if(r===0)n!==null&&es(n),e.callbackNode=null,e.callbackPriority=0;else if(t=r&-r,e.callbackPriority!==t){if(n!=null&&es(n),t===1)e.tag===0?ag(Qs.bind(null,e)):Rc(Qs.bind(null,e)),rg(function(){!($&6)&&Ct()}),n=null;else{switch(oc(r)){case 1:n=Ni;break;case 4:n=tc;break;case 16:n=io;break;case 536870912:n=nc;break;default:n=io}n=Ef(n,xf.bind(null,e))}e.callbackPriority=t,e.callbackNode=n}}function xf(e,t){if(eo=-1,to=0,$&6)throw Error(P(327));var n=e.callbackNode;if(pn()&&e.callbackNode!==n)return null;var r=ao(e,e===oe?ie:0);if(r===0)return null;if(r&30||r&e.expiredLanes||t)t=Co(e,r);else{t=r;var o=$;$|=2;var l=kf();(oe!==e||ie!==t)&&(Ke=null,Sn=K()+500,Bt(e,t));do try{Eg();break}catch(a){Pf(e,a)}while(!0);Qi(),ko.current=l,$=o,X!==null?t=0:(oe=null,ie=0,t=q)}if(t!==0){if(t===2&&(o=Il(e),o!==0&&(r=o,t=pi(e,o))),t===1)throw n=pr,Bt(e,0),ut(e,r),Se(e,K()),n;if(t===6)ut(e,r);else{if(o=e.current.alternate,!(r&30)&&!Cg(o)&&(t=Co(e,r),t===2&&(l=Il(e),l!==0&&(r=l,t=pi(e,l))),t===1))throw n=pr,Bt(e,0),ut(e,r),Se(e,K()),n;switch(e.finishedWork=o,e.finishedLanes=r,t){case 0:case 1:throw Error(P(345));case 2:Mt(e,he,Ke);break;case 3:if(ut(e,r),(r&130023424)===r&&(t=aa+500-K(),10<t)){if(ao(e,0)!==0)break;if(o=e.suspendedLanes,(o&r)!==r){pe(),e.pingedLanes|=e.suspendedLanes&o;break}e.timeoutHandle=Gl(Mt.bind(null,e,he,Ke),t);break}Mt(e,he,Ke);break;case 4:if(ut(e,r),(r&4194240)===r)break;for(t=e.eventTimes,o=-1;0<r;){var i=31-Oe(r);l=1<<i,i=t[i],i>o&&(o=i),r&=~l}if(r=o,r=K()-r,r=(120>r?120:480>r?480:1080>r?1080:1920>r?1920:3e3>r?3e3:4320>r?4320:1960*_g(r/1960))-r,10<r){e.timeoutHandle=Gl(Mt.bind(null,e,he,Ke),r);break}Mt(e,he,Ke);break;case 5:Mt(e,he,Ke);break;default:throw Error(P(329))}}}return Se(e,K()),e.callbackNode===n?xf.bind(null,e):null}function pi(e,t){var n=Yn;return e.current.memoizedState.isDehydrated&&(Bt(e,t).flags|=256),e=Co(e,t),e!==2&&(t=he,he=n,t!==null&&gi(t)),e}function gi(e){he===null?he=e:he.push.apply(he,e)}function Cg(e){for(var t=e;;){if(t.flags&16384){var n=t.updateQueue;if(n!==null&&(n=n.stores,n!==null))for(var r=0;r<n.length;r++){var o=n[r],l=o.getSnapshot;o=o.value;try{if(!De(l(),o))return!1}catch{return!1}}}if(n=t.child,t.subtreeFlags&16384&&n!==null)n.return=t,t=n;else{if(t===e)break;for(;t.sibling===null;){if(t.return===null||t.return===e)return!0;t=t.return}t.sibling.return=t.return,t=t.sibling}}return!0}function ut(e,t){for(t&=~ia,t&=~Io,e.suspendedLanes|=t,e.pingedLanes&=~t,e=e.expirationTimes;0<t;){var n=31-Oe(t),r=1<<n;e[n]=-1,t&=~r}}function Qs(e){if($&6)throw Error(P(327));pn();var t=ao(e,0);if(!(t&1))return Se(e,K()),null;var n=Co(e,t);if(e.tag!==0&&n===2){var r=Il(e);r!==0&&(t=r,n=pi(e,r))}if(n===1)throw n=pr,Bt(e,0),ut(e,t),Se(e,K()),n;if(n===6)throw Error(P(345));return e.finishedWork=e.current.alternate,e.finishedLanes=t,Mt(e,he,Ke),Se(e,K()),null}function sa(e,t){var n=$;$|=1;try{return e(t)}finally{$=n,$===0&&(Sn=K()+500,Ao&&Ct())}}function Wt(e){ft!==null&&ft.tag===0&&!($&6)&&pn();var t=$;$|=1;var n=Le.transition,r=A;try{if(Le.transition=null,A=1,e)return e()}finally{A=r,Le.transition=n,$=t,!($&6)&&Ct()}}function ua(){Pe=an.current,I(an)}function Bt(e,t){e.finishedWork=null,e.finishedLanes=0;var n=e.timeoutHandle;if(n!==-1&&(e.timeoutHandle=-1,ng(n)),X!==null)for(n=X.return;n!==null;){var r=n;switch(Ui(r),r.tag){case 1:r=r.type.childContextTypes,r!=null&&po();break;case 3:yn(),I(ye),I(fe),Zi();break;case 5:Ji(r);break;case 4:yn();break;case 13:I(W);break;case 19:I(W);break;case 10:Gi(r.type._context);break;case 22:case 23:ua()}n=n.return}if(oe=e,X=e=St(e.current,null),ie=Pe=t,q=0,pr=null,ia=Io=Ft=0,he=Yn=null,$t!==null){for(t=0;t<$t.length;t++)if(n=$t[t],r=n.interleaved,r!==null){n.interleaved=null;var o=r.next,l=n.pending;if(l!==null){var i=l.next;l.next=o,r.next=i}n.pending=r}$t=null}return e}function Pf(e,t){do{var n=X;try{if(Qi(),Jr.current=Po,xo){for(var r=U.memoizedState;r!==null;){var o=r.queue;o!==null&&(o.pending=null),r=r.next}xo=!1}if(Dt=0,re=Z=U=null,Gn=!1,cr=0,la.current=null,n===null||n.return===null){q=1,pr=t,X=null;break}e:{var l=e,i=n.return,a=n,s=t;if(t=ie,a.flags|=32768,s!==null&&typeof s=="object"&&typeof s.then=="function"){var u=s,d=a,f=d.tag;if(!(d.mode&1)&&(f===0||f===11||f===15)){var m=d.alternate;m?(d.updateQueue=m.updateQueue,d.memoizedState=m.memoizedState,d.lanes=m.lanes):(d.updateQueue=null,d.memoizedState=null)}var y=Ns(i);if(y!==null){y.flags&=-257,$s(y,i,a,l,t),y.mode&1&&Ms(l,u,t),t=y,s=u;var w=t.updateQueue;if(w===null){var S=new Set;S.add(s),t.updateQueue=S}else w.add(s);break e}else{if(!(t&1)){Ms(l,u,t),ca();break e}s=Error(P(426))}}else if(D&&a.mode&1){var k=Ns(i);if(k!==null){!(k.flags&65536)&&(k.flags|=256),$s(k,i,a,l,t),Vi(wn(s,a));break e}}l=s=wn(s,a),q!==4&&(q=2),Yn===null?Yn=[l]:Yn.push(l),l=i;do{switch(l.tag){case 3:l.flags|=65536,t&=-t,l.lanes|=t;var g=of(l,s,t);Cs(l,g);break e;case 1:a=s;var p=l.type,h=l.stateNode;if(!(l.flags&128)&&(typeof p.getDerivedStateFromError=="function"||h!==null&&typeof h.componentDidCatch=="function"&&(yt===null||!yt.has(h)))){l.flags|=65536,t&=-t,l.lanes|=t;var x=lf(l,a,t);Cs(l,x);break e}}l=l.return}while(l!==null)}_f(n)}catch(b){t=b,X===n&&n!==null&&(X=n=n.return);continue}break}while(!0)}function kf(){var e=ko.current;return ko.current=Po,e===null?Po:e}function ca(){(q===0||q===3||q===2)&&(q=4),oe===null||!(Ft&268435455)&&!(Io&268435455)||ut(oe,ie)}function Co(e,t){var n=$;$|=2;var r=kf();(oe!==e||ie!==t)&&(Ke=null,Bt(e,t));do try{Tg();break}catch(o){Pf(e,o)}while(!0);if(Qi(),$=n,ko.current=r,X!==null)throw Error(P(261));return oe=null,ie=0,q}function Tg(){for(;X!==null;)bf(X)}function Eg(){for(;X!==null&&!qd();)bf(X)}function bf(e){var t=Tf(e.alternate,e,Pe);e.memoizedProps=e.pendingProps,t===null?_f(e):X=t,la.current=null}function _f(e){var t=e;do{var n=t.alternate;if(e=t.return,t.flags&32768){if(n=xg(n,t),n!==null){n.flags&=32767,X=n;return}if(e!==null)e.flags|=32768,e.subtreeFlags=0,e.deletions=null;else{q=6,X=null;return}}else if(n=Sg(n,t,Pe),n!==null){X=n;return}if(t=t.sibling,t!==null){X=t;return}X=t=e}while(t!==null);q===0&&(q=5)}function Mt(e,t,n){var r=A,o=Le.transition;try{Le.transition=null,A=1,Rg(e,t,n,r)}finally{Le.transition=o,A=r}return null}function Rg(e,t,n,r){do pn();while(ft!==null);if($&6)throw Error(P(327));n=e.finishedWork;var o=e.finishedLanes;if(n===null)return null;if(e.finishedWork=null,e.finishedLanes=0,n===e.current)throw Error(P(177));e.callbackNode=null,e.callbackPriority=0;var l=n.lanes|n.childLanes;if(up(e,l),e===oe&&(X=oe=null,ie=0),!(n.subtreeFlags&2064)&&!(n.flags&2064)||Fr||(Fr=!0,Ef(io,function(){return pn(),null})),l=(n.flags&15990)!==0,n.subtreeFlags&15990||l){l=Le.transition,Le.transition=null;var i=A;A=1;var a=$;$|=4,la.current=null,kg(e,n),wf(n,e),Yp(Hl),so=!!Vl,Hl=Vl=null,e.current=n,bg(n),ep(),$=a,A=i,Le.transition=l}else e.current=n;if(Fr&&(Fr=!1,ft=e,_o=o),l=e.pendingLanes,l===0&&(yt=null),rp(n.stateNode),Se(e,K()),t!==null)for(r=e.onRecoverableError,n=0;n<t.length;n++)o=t[n],r(o.value,{componentStack:o.stack,digest:o.digest});if(bo)throw bo=!1,e=fi,fi=null,e;return _o&1&&e.tag!==0&&pn(),l=e.pendingLanes,l&1?e===di?Xn++:(Xn=0,di=e):Xn=0,Ct(),null}function pn(){if(ft!==null){var e=oc(_o),t=Le.transition,n=A;try{if(Le.transition=null,A=16>e?16:e,ft===null)var r=!1;else{if(e=ft,ft=null,_o=0,$&6)throw Error(P(331));var o=$;for($|=4,_=e.current;_!==null;){var l=_,i=l.child;if(_.flags&16){var a=l.deletions;if(a!==null){for(var s=0;s<a.length;s++){var u=a[s];for(_=u;_!==null;){var d=_;switch(d.tag){case 0:case 11:case 15:Kn(8,d,l)}var f=d.child;if(f!==null)f.return=d,_=f;else for(;_!==null;){d=_;var m=d.sibling,y=d.return;if(hf(d),d===u){_=null;break}if(m!==null){m.return=y,_=m;break}_=y}}}var w=l.alternate;if(w!==null){var S=w.child;if(S!==null){w.child=null;do{var k=S.sibling;S.sibling=null,S=k}while(S!==null)}}_=l}}if(l.subtreeFlags&2064&&i!==null)i.return=l,_=i;else e:for(;_!==null;){if(l=_,l.flags&2048)switch(l.tag){case 0:case 11:case 15:Kn(9,l,l.return)}var g=l.sibling;if(g!==null){g.return=l.return,_=g;break e}_=l.return}}var p=e.current;for(_=p;_!==null;){i=_;var h=i.child;if(i.subtreeFlags&2064&&h!==null)h.return=i,_=h;else e:for(i=p;_!==null;){if(a=_,a.flags&2048)try{switch(a.tag){case 0:case 11:case 15:Oo(9,a)}}catch(b){H(a,a.return,b)}if(a===i){_=null;break e}var x=a.sibling;if(x!==null){x.return=a.return,_=x;break e}_=a.return}}if($=o,Ct(),He&&typeof He.onPostCommitFiberRoot=="function")try{He.onPostCommitFiberRoot(jo,e)}catch{}r=!0}return r}finally{A=n,Le.transition=t}}return!1}function Gs(e,t,n){t=wn(n,t),t=of(e,t,1),e=vt(e,t,1),t=pe(),e!==null&&(vr(e,1,t),Se(e,t))}function H(e,t,n){if(e.tag===3)Gs(e,e,n);else for(;t!==null;){if(t.tag===3){Gs(t,e,n);break}else if(t.tag===1){var r=t.stateNode;if(typeof t.type.getDerivedStateFromError=="function"||typeof r.componentDidCatch=="function"&&(yt===null||!yt.has(r))){e=wn(n,e),e=lf(t,e,1),t=vt(t,e,1),e=pe(),t!==null&&(vr(t,1,e),Se(t,e));break}}t=t.return}}function jg(e,t,n){var r=e.pingCache;r!==null&&r.delete(t),t=pe(),e.pingedLanes|=e.suspendedLanes&n,oe===e&&(ie&n)===n&&(q===4||q===3&&(ie&130023424)===ie&&500>K()-aa?Bt(e,0):ia|=n),Se(e,t)}function Cf(e,t){t===0&&(e.mode&1?(t=Lr,Lr<<=1,!(Lr&130023424)&&(Lr=4194304)):t=1);var n=pe();e=tt(e,t),e!==null&&(vr(e,t,n),Se(e,n))}function Lg(e){var t=e.memoizedState,n=0;t!==null&&(n=t.retryLane),Cf(e,n)}function Mg(e,t){var n=0;switch(e.tag){case 13:var r=e.stateNode,o=e.memoizedState;o!==null&&(n=o.retryLane);break;case 19:r=e.stateNode;break;default:throw Error(P(314))}r!==null&&r.delete(t),Cf(e,n)}var Tf;Tf=function(e,t,n){if(e!==null)if(e.memoizedProps!==t.pendingProps||ye.current)ve=!0;else{if(!(e.lanes&n)&&!(t.flags&128))return ve=!1,wg(e,t,n);ve=!!(e.flags&131072)}else ve=!1,D&&t.flags&1048576&&jc(t,ho,t.index);switch(t.lanes=0,t.tag){case 2:var r=t.type;qr(e,t),e=t.pendingProps;var o=mn(t,fe.current);dn(t,n),o=ea(null,t,r,e,o,n);var l=ta();return t.flags|=1,typeof o=="object"&&o!==null&&typeof o.render=="function"&&o.$$typeof===void 0?(t.tag=1,t.memoizedState=null,t.updateQueue=null,we(r)?(l=!0,go(t)):l=!1,t.memoizedState=o.state!==null&&o.state!==void 0?o.state:null,Yi(t),o.updater=zo,t.stateNode=o,o._reactInternals=t,ei(t,r,e,n),t=ri(null,t,r,!0,l,n)):(t.tag=0,D&&l&&Wi(t),de(null,t,o,n),t=t.child),t;case 16:r=t.elementType;e:{switch(qr(e,t),e=t.pendingProps,o=r._init,r=o(r._payload),t.type=r,o=t.tag=$g(r),e=Ae(r,e),o){case 0:t=ni(null,t,r,e,n);break e;case 1:t=zs(null,t,r,e,n);break e;case 11:t=As(null,t,r,e,n);break e;case 14:t=Bs(null,t,r,Ae(r.type,e),n);break e}throw Error(P(306,r,""))}return t;case 0:return r=t.type,o=t.pendingProps,o=t.elementType===r?o:Ae(r,o),ni(e,t,r,o,n);case 1:return r=t.type,o=t.pendingProps,o=t.elementType===r?o:Ae(r,o),zs(e,t,r,o,n);case 3:e:{if(cf(t),e===null)throw Error(P(387));r=t.pendingProps,l=t.memoizedState,o=l.element,Bc(e,t),wo(t,r,null,n);var i=t.memoizedState;if(r=i.element,l.isDehydrated)if(l={element:r,isDehydrated:!1,cache:i.cache,pendingSuspenseBoundaries:i.pendingSuspenseBoundaries,transitions:i.transitions},t.updateQueue.baseState=l,t.memoizedState=l,t.flags&256){o=wn(Error(P(423)),t),t=Os(e,t,r,n,o);break e}else if(r!==o){o=wn(Error(P(424)),t),t=Os(e,t,r,n,o);break e}else for(ke=ht(t.stateNode.containerInfo.firstChild),be=t,D=!0,ze=null,n=$c(t,null,r,n),t.child=n;n;)n.flags=n.flags&-3|4096,n=n.sibling;else{if(hn(),r===o){t=nt(e,t,n);break e}de(e,t,r,n)}t=t.child}return t;case 5:return zc(t),e===null&&Jl(t),r=t.type,o=t.pendingProps,l=e!==null?e.memoizedProps:null,i=o.children,Ql(r,o)?i=null:l!==null&&Ql(r,l)&&(t.flags|=32),uf(e,t),de(e,t,i,n),t.child;case 6:return e===null&&Jl(t),null;case 13:return ff(e,t,n);case 4:return Xi(t,t.stateNode.containerInfo),r=t.pendingProps,e===null?t.child=vn(t,null,r,n):de(e,t,r,n),t.child;case 11:return r=t.type,o=t.pendingProps,o=t.elementType===r?o:Ae(r,o),As(e,t,r,o,n);case 7:return de(e,t,t.pendingProps,n),t.child;case 8:return de(e,t,t.pendingProps.children,n),t.child;case 12:return de(e,t,t.pendingProps.children,n),t.child;case 10:e:{if(r=t.type._context,o=t.pendingProps,l=t.memoizedProps,i=o.value,z(vo,r._currentValue),r._currentValue=i,l!==null)if(De(l.value,i)){if(l.children===o.children&&!ye.current){t=nt(e,t,n);break e}}else for(l=t.child,l!==null&&(l.return=t);l!==null;){var a=l.dependencies;if(a!==null){i=l.child;for(var s=a.firstContext;s!==null;){if(s.context===r){if(l.tag===1){s=Ze(-1,n&-n),s.tag=2;var u=l.updateQueue;if(u!==null){u=u.shared;var d=u.pending;d===null?s.next=s:(s.next=d.next,d.next=s),u.pending=s}}l.lanes|=n,s=l.alternate,s!==null&&(s.lanes|=n),Zl(l.return,n,t),a.lanes|=n;break}s=s.next}}else if(l.tag===10)i=l.type===t.type?null:l.child;else if(l.tag===18){if(i=l.return,i===null)throw Error(P(341));i.lanes|=n,a=i.alternate,a!==null&&(a.lanes|=n),Zl(i,n,t),i=l.sibling}else i=l.child;if(i!==null)i.return=l;else for(i=l;i!==null;){if(i===t){i=null;break}if(l=i.sibling,l!==null){l.return=i.return,i=l;break}i=i.return}l=i}de(e,t,o.children,n),t=t.child}return t;case 9:return o=t.type,r=t.pendingProps.children,dn(t,n),o=Me(o),r=r(o),t.flags|=1,de(e,t,r,n),t.child;case 14:return r=t.type,o=Ae(r,t.pendingProps),o=Ae(r.type,o),Bs(e,t,r,o,n);case 15:return af(e,t,t.type,t.pendingProps,n);case 17:return r=t.type,o=t.pendingProps,o=t.elementType===r?o:Ae(r,o),qr(e,t),t.tag=1,we(r)?(e=!0,go(t)):e=!1,dn(t,n),rf(t,r,o),ei(t,r,o,n),ri(null,t,r,!0,e,n);case 19:return df(e,t,n);case 22:return sf(e,t,n)}throw Error(P(156,t.tag))};function Ef(e,t){return ec(e,t)}function Ng(e,t,n,r){this.tag=e,this.key=n,this.sibling=this.child=this.return=this.stateNode=this.type=this.elementType=null,this.index=0,this.ref=null,this.pendingProps=t,this.dependencies=this.memoizedState=this.updateQueue=this.memoizedProps=null,this.mode=r,this.subtreeFlags=this.flags=0,this.deletions=null,this.childLanes=this.lanes=0,this.alternate=null}function je(e,t,n,r){return new Ng(e,t,n,r)}function fa(e){return e=e.prototype,!(!e||!e.isReactComponent)}function $g(e){if(typeof e=="function")return fa(e)?1:0;if(e!=null){if(e=e.$$typeof,e===ji)return 11;if(e===Li)return 14}return 2}function St(e,t){var n=e.alternate;return n===null?(n=je(e.tag,t,e.key,e.mode),n.elementType=e.elementType,n.type=e.type,n.stateNode=e.stateNode,n.alternate=e,e.alternate=n):(n.pendingProps=t,n.type=e.type,n.flags=0,n.subtreeFlags=0,n.deletions=null),n.flags=e.flags&14680064,n.childLanes=e.childLanes,n.lanes=e.lanes,n.child=e.child,n.memoizedProps=e.memoizedProps,n.memoizedState=e.memoizedState,n.updateQueue=e.updateQueue,t=e.dependencies,n.dependencies=t===null?null:{lanes:t.lanes,firstContext:t.firstContext},n.sibling=e.sibling,n.index=e.index,n.ref=e.ref,n}function no(e,t,n,r,o,l){var i=2;if(r=e,typeof e=="function")fa(e)&&(i=1);else if(typeof e=="string")i=5;else e:switch(e){case Xt:return zt(n.children,o,l,t);case Ri:i=8,o|=8;break;case bl:return e=je(12,n,t,o|2),e.elementType=bl,e.lanes=l,e;case _l:return e=je(13,n,t,o),e.elementType=_l,e.lanes=l,e;case Cl:return e=je(19,n,t,o),e.elementType=Cl,e.lanes=l,e;case zu:return Do(n,o,l,t);default:if(typeof e=="object"&&e!==null)switch(e.$$typeof){case Au:i=10;break e;case Bu:i=9;break e;case ji:i=11;break e;case Li:i=14;break e;case it:i=16,r=null;break e}throw Error(P(130,e==null?e:typeof e,""))}return t=je(i,n,t,o),t.elementType=e,t.type=r,t.lanes=l,t}function zt(e,t,n,r){return e=je(7,e,r,t),e.lanes=n,e}function Do(e,t,n,r){return e=je(22,e,r,t),e.elementType=zu,e.lanes=n,e.stateNode={isHidden:!1},e}function wl(e,t,n){return e=je(6,e,null,t),e.lanes=n,e}function Sl(e,t,n){return t=je(4,e.children!==null?e.children:[],e.key,t),t.lanes=n,t.stateNode={containerInfo:e.containerInfo,pendingChildren:null,implementation:e.implementation},t}function Ag(e,t,n,r,o){this.tag=t,this.containerInfo=e,this.finishedWork=this.pingCache=this.current=this.pendingChildren=null,this.timeoutHandle=-1,this.callbackNode=this.pendingContext=this.context=null,this.callbackPriority=0,this.eventTimes=el(0),this.expirationTimes=el(-1),this.entangledLanes=this.finishedLanes=this.mutableReadLanes=this.expiredLanes=this.pingedLanes=this.suspendedLanes=this.pendingLanes=0,this.entanglements=el(0),this.identifierPrefix=r,this.onRecoverableError=o,this.mutableSourceEagerHydrationData=null}function da(e,t,n,r,o,l,i,a,s){return e=new Ag(e,t,n,a,s),t===1?(t=1,l===!0&&(t|=8)):t=0,l=je(3,null,null,t),e.current=l,l.stateNode=e,l.memoizedState={element:r,isDehydrated:n,cache:null,transitions:null,pendingSuspenseBoundaries:null},Yi(l),e}function Bg(e,t,n){var r=3<arguments.length&&arguments[3]!==void 0?arguments[3]:null;return{$$typeof:Yt,key:r==null?null:""+r,children:e,containerInfo:t,implementation:n}}function Rf(e){if(!e)return kt;e=e._reactInternals;e:{if(Vt(e)!==e||e.tag!==1)throw Error(P(170));var t=e;do{switch(t.tag){case 3:t=t.stateNode.context;break e;case 1:if(we(t.type)){t=t.stateNode.__reactInternalMemoizedMergedChildContext;break e}}t=t.return}while(t!==null);throw Error(P(171))}if(e.tag===1){var n=e.type;if(we(n))return Ec(e,n,t)}return t}function jf(e,t,n,r,o,l,i,a,s){return e=da(n,r,!0,e,o,l,i,a,s),e.context=Rf(null),n=e.current,r=pe(),o=wt(n),l=Ze(r,o),l.callback=t??null,vt(n,l,o),e.current.lanes=o,vr(e,o,r),Se(e,r),e}function Fo(e,t,n,r){var o=t.current,l=pe(),i=wt(o);return n=Rf(n),t.context===null?t.context=n:t.pendingContext=n,t=Ze(l,i),t.payload={element:e},r=r===void 0?null:r,r!==null&&(t.callback=r),e=vt(o,t,i),e!==null&&(Ie(e,o,i,l),Xr(e,o,i)),i}function To(e){if(e=e.current,!e.child)return null;switch(e.child.tag){case 5:return e.child.stateNode;default:return e.child.stateNode}}function Ks(e,t){if(e=e.memoizedState,e!==null&&e.dehydrated!==null){var n=e.retryLane;e.retryLane=n!==0&&n<t?n:t}}function pa(e,t){Ks(e,t),(e=e.alternate)&&Ks(e,t)}function zg(){return null}var Lf=typeof reportError=="function"?reportError:function(e){console.error(e)};function ga(e){this._internalRoot=e}Wo.prototype.render=ga.prototype.render=function(e){var t=this._internalRoot;if(t===null)throw Error(P(409));Fo(e,t,null,null)};Wo.prototype.unmount=ga.prototype.unmount=function(){var e=this._internalRoot;if(e!==null){this._internalRoot=null;var t=e.containerInfo;Wt(function(){Fo(null,e,null,null)}),t[et]=null}};function Wo(e){this._internalRoot=e}Wo.prototype.unstable_scheduleHydration=function(e){if(e){var t=ac();e={blockedOn:null,target:e,priority:t};for(var n=0;n<st.length&&t!==0&&t<st[n].priority;n++);st.splice(n,0,e),n===0&&uc(e)}};function ma(e){return!(!e||e.nodeType!==1&&e.nodeType!==9&&e.nodeType!==11)}function Uo(e){return!(!e||e.nodeType!==1&&e.nodeType!==9&&e.nodeType!==11&&(e.nodeType!==8||e.nodeValue!==" react-mount-point-unstable "))}function Ys(){}function Og(e,t,n,r,o){if(o){if(typeof r=="function"){var l=r;r=function(){var u=To(i);l.call(u)}}var i=jf(t,r,e,0,null,!1,!1,"",Ys);return e._reactRootContainer=i,e[et]=i.current,lr(e.nodeType===8?e.parentNode:e),Wt(),i}for(;o=e.lastChild;)e.removeChild(o);if(typeof r=="function"){var a=r;r=function(){var u=To(s);a.call(u)}}var s=da(e,0,!1,null,null,!1,!1,"",Ys);return e._reactRootContainer=s,e[et]=s.current,lr(e.nodeType===8?e.parentNode:e),Wt(function(){Fo(t,s,n,r)}),s}function Vo(e,t,n,r,o){var l=n._reactRootContainer;if(l){var i=l;if(typeof o=="function"){var a=o;o=function(){var s=To(i);a.call(s)}}Fo(t,i,e,o)}else i=Og(n,t,e,o,r);return To(i)}lc=function(e){switch(e.tag){case 3:var t=e.stateNode;if(t.current.memoizedState.isDehydrated){var n=In(t.pendingLanes);n!==0&&($i(t,n|1),Se(t,K()),!($&6)&&(Sn=K()+500,Ct()))}break;case 13:Wt(function(){var r=tt(e,1);if(r!==null){var o=pe();Ie(r,e,1,o)}}),pa(e,1)}};Ai=function(e){if(e.tag===13){var t=tt(e,134217728);if(t!==null){var n=pe();Ie(t,e,134217728,n)}pa(e,134217728)}};ic=function(e){if(e.tag===13){var t=wt(e),n=tt(e,t);if(n!==null){var r=pe();Ie(n,e,t,r)}pa(e,t)}};ac=function(){return A};sc=function(e,t){var n=A;try{return A=e,t()}finally{A=n}};Bl=function(e,t,n){switch(t){case"input":if(Rl(e,n),t=n.name,n.type==="radio"&&t!=null){for(n=e;n.parentNode;)n=n.parentNode;for(n=n.querySelectorAll("input[name="+JSON.stringify(""+t)+'][type="radio"]'),t=0;t<n.length;t++){var r=n[t];if(r!==e&&r.form===e.form){var o=$o(r);if(!o)throw Error(P(90));Iu(r),Rl(r,o)}}}break;case"textarea":Fu(e,n);break;case"select":t=n.value,t!=null&&sn(e,!!n.multiple,t,!1)}};Ku=sa;Yu=Wt;var Ig={usingClientEntryPoint:!1,Events:[wr,en,$o,Qu,Gu,sa]},Bn={findFiberByHostInstance:Nt,bundleType:0,version:"18.3.1",rendererPackageName:"react-dom"},Dg={bundleType:Bn.bundleType,version:Bn.version,rendererPackageName:Bn.rendererPackageName,rendererConfig:Bn.rendererConfig,overrideHookState:null,overrideHookStateDeletePath:null,overrideHookStateRenamePath:null,overrideProps:null,overridePropsDeletePath:null,overridePropsRenamePath:null,setErrorHandler:null,setSuspenseHandler:null,scheduleUpdate:null,currentDispatcherRef:rt.ReactCurrentDispatcher,findHostInstanceByFiber:function(e){return e=Zu(e),e===null?null:e.stateNode},findFiberByHostInstance:Bn.findFiberByHostInstance||zg,findHostInstancesForRefresh:null,scheduleRefresh:null,scheduleRoot:null,setRefreshHandler:null,getCurrentFiber:null,reconcilerVersion:"18.3.1-next-f1338f8080-20240426"};if(typeof __REACT_DEVTOOLS_GLOBAL_HOOK__<"u"){var Wr=__REACT_DEVTOOLS_GLOBAL_HOOK__;if(!Wr.isDisabled&&Wr.supportsFiber)try{jo=Wr.inject(Dg),He=Wr}catch{}}Ce.__SECRET_INTERNALS_DO_NOT_USE_OR_YOU_WILL_BE_FIRED=Ig;Ce.createPortal=function(e,t){var n=2<arguments.length&&arguments[2]!==void 0?arguments[2]:null;if(!ma(t))throw Error(P(200));return Bg(e,t,null,n)};Ce.createRoot=function(e,t){if(!ma(e))throw Error(P(299));var n=!1,r="",o=Lf;return t!=null&&(t.unstable_strictMode===!0&&(n=!0),t.identifierPrefix!==void 0&&(r=t.identifierPrefix),t.onRecoverableError!==void 0&&(o=t.onRecoverableError)),t=da(e,1,!1,null,null,n,!1,r,o),e[et]=t.current,lr(e.nodeType===8?e.parentNode:e),new ga(t)};Ce.findDOMNode=function(e){if(e==null)return null;if(e.nodeType===1)return e;var t=e._reactInternals;if(t===void 0)throw typeof e.render=="function"?Error(P(188)):(e=Object.keys(e).join(","),Error(P(268,e)));return e=Zu(t),e=e===null?null:e.stateNode,e};Ce.flushSync=function(e){return Wt(e)};Ce.hydrate=function(e,t,n){if(!Uo(t))throw Error(P(200));return Vo(null,e,t,!0,n)};Ce.hydrateRoot=function(e,t,n){if(!ma(e))throw Error(P(405));var r=n!=null&&n.hydratedSources||null,o=!1,l="",i=Lf;if(n!=null&&(n.unstable_strictMode===!0&&(o=!0),n.identifierPrefix!==void 0&&(l=n.identifierPrefix),n.onRecoverableError!==void 0&&(i=n.onRecoverableError)),t=jf(t,null,e,1,n??null,o,!1,l,i),e[et]=t.current,lr(e),r)for(e=0;e<r.length;e++)n=r[e],o=n._getVersion,o=o(n._source),t.mutableSourceEagerHydrationData==null?t.mutableSourceEagerHydrationData=[n,o]:t.mutableSourceEagerHydrationData.push(n,o);return new Wo(t)};Ce.render=function(e,t,n){if(!Uo(t))throw Error(P(200));return Vo(null,e,t,!1,n)};Ce.unmountComponentAtNode=function(e){if(!Uo(e))throw Error(P(40));return e._reactRootContainer?(Wt(function(){Vo(null,null,e,!1,function(){e._reactRootContainer=null,e[et]=null})}),!0):!1};Ce.unstable_batchedUpdates=sa;Ce.unstable_renderSubtreeIntoContainer=function(e,t,n,r){if(!Uo(n))throw Error(P(200));if(e==null||e._reactInternals===void 0)throw Error(P(38));return Vo(e,t,n,!1,r)};Ce.version="18.3.1-next-f1338f8080-20240426";function Mf(){if(!(typeof __REACT_DEVTOOLS_GLOBAL_HOOK__>"u"||typeof __REACT_DEVTOOLS_GLOBAL_HOOK__.checkDCE!="function"))try{__REACT_DEVTOOLS_GLOBAL_HOOK__.checkDCE(Mf)}catch(e){console.error(e)}}Mf(),Lu.exports=Ce;var Fg=Lu.exports,Xs=Fg;Pl.createRoot=Xs.createRoot,Pl.hydrateRoot=Xs.hydrateRoot;/**
 * @remix-run/router v1.23.4
 *
 * Copyright (c) Remix Software Inc.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE.md file in the root directory of this source tree.
 *
 * @license MIT
 */function gr(){return gr=Object.assign?Object.assign.bind():function(e){for(var t=1;t<arguments.length;t++){var n=arguments[t];for(var r in n)({}).hasOwnProperty.call(n,r)&&(e[r]=n[r])}return e},gr.apply(null,arguments)}var dt;(function(e){e.Pop="POP",e.Push="PUSH",e.Replace="REPLACE"})(dt||(dt={}));const Js="popstate";function Wg(e){e===void 0&&(e={});function t(o,l){let{pathname:i="/",search:a="",hash:s=""}=Ht(o.location.hash.substr(1));return!i.startsWith("/")&&!i.startsWith(".")&&(i="/"+i),mi("",{pathname:i,search:a,hash:s},l.state&&l.state.usr||null,l.state&&l.state.key||"default")}function n(o,l){let i=o.document.querySelector("base"),a="";if(i&&i.getAttribute("href")){let s=o.location.href,u=s.indexOf("#");a=u===-1?s:s.slice(0,u)}return a+"#"+(typeof l=="string"?l:Eo(l))}function r(o,l){ha(o.pathname.charAt(0)==="/","relative pathnames are not supported in hash history.push("+JSON.stringify(l)+")")}return Vg(t,n,r,e)}function Y(e,t){if(e===!1||e===null||typeof e>"u")throw new Error(t)}function ha(e,t){if(!e){typeof console<"u"&&console.warn(t);try{throw new Error(t)}catch{}}}function Ug(){return Math.random().toString(36).substr(2,8)}function Zs(e,t){return{usr:e.state,key:e.key,idx:t}}function mi(e,t,n,r){return n===void 0&&(n=null),gr({pathname:typeof e=="string"?e:e.pathname,search:"",hash:""},typeof t=="string"?Ht(t):t,{state:n,key:t&&t.key||r||Ug()})}function Eo(e){let{pathname:t="/",search:n="",hash:r=""}=e;return n&&n!=="?"&&(t+=n.charAt(0)==="?"?n:"?"+n),r&&r!=="#"&&(t+=r.charAt(0)==="#"?r:"#"+r),t}function Ht(e){let t={};if(e){let n=e.indexOf("#");n>=0&&(t.hash=e.substr(n),e=e.substr(0,n));let r=e.indexOf("?");r>=0&&(t.search=e.substr(r),e=e.substr(0,r)),e&&(t.pathname=e)}return t}function Vg(e,t,n,r){r===void 0&&(r={});let{window:o=document.defaultView,v5Compat:l=!1}=r,i=o.history,a=dt.Pop,s=null,u=d();u==null&&(u=0,i.replaceState(gr({},i.state,{idx:u}),""));function d(){return(i.state||{idx:null}).idx}function f(){a=dt.Pop;let k=d(),g=k==null?null:k-u;u=k,s&&s({action:a,location:S.location,delta:g})}function m(k,g){a=dt.Push;let p=mi(S.location,k,g);n&&n(p,k),u=d()+1;let h=Zs(p,u),x=S.createHref(p);try{i.pushState(h,"",x)}catch(b){if(b instanceof DOMException&&b.name==="DataCloneError")throw b;o.location.assign(x)}l&&s&&s({action:a,location:S.location,delta:1})}function y(k,g){a=dt.Replace;let p=mi(S.location,k,g);n&&n(p,k),u=d();let h=Zs(p,u),x=S.createHref(p);i.replaceState(h,"",x),l&&s&&s({action:a,location:S.location,delta:0})}function w(k){let g=o.location.origin!=="null"?o.location.origin:o.location.href,p=typeof k=="string"?k:Eo(k);return p=p.replace(/ $/,"%20"),Y(g,"No window.location.(origin|href) available to create URL for href: "+p),new URL(p,g)}let S={get action(){return a},get location(){return e(o,i)},listen(k){if(s)throw new Error("A history only accepts one active listener");return o.addEventListener(Js,f),s=k,()=>{o.removeEventListener(Js,f),s=null}},createHref(k){return t(o,k)},createURL:w,encodeLocation(k){let g=w(k);return{pathname:g.pathname,search:g.search,hash:g.hash}},push:m,replace:y,go(k){return i.go(k)}};return S}var qs;(function(e){e.data="data",e.deferred="deferred",e.redirect="redirect",e.error="error"})(qs||(qs={}));function Hg(e,t,n){return n===void 0&&(n="/"),Qg(e,t,n)}function Qg(e,t,n,r){let o=typeof t=="string"?Ht(t):t,l=va(o.pathname||"/",n);if(l==null)return null;let i=Nf(e);Gg(i);let a=null,s=lm(l);for(let u=0;a==null&&u<i.length;++u)a=nm(i[u],s);return a}function Nf(e,t,n,r){t===void 0&&(t=[]),n===void 0&&(n=[]),r===void 0&&(r="");let o=(l,i,a)=>{let s={relativePath:a===void 0?l.path||"":a,caseSensitive:l.caseSensitive===!0,childrenIndex:i,route:l};s.relativePath.startsWith("/")&&(Y(s.relativePath.startsWith(r),'Absolute route path "'+s.relativePath+'" nested under path '+('"'+r+'" is not valid. An absolute child route path ')+"must start with the combined path of all its parent routes."),s.relativePath=s.relativePath.slice(r.length));let u=xt([r,s.relativePath]),d=n.concat(s);l.children&&l.children.length>0&&(Y(l.index!==!0,"Index routes must not have child routes. Please remove "+('all child routes from route path "'+u+'".')),Nf(l.children,t,d,u)),!(l.path==null&&!l.index)&&t.push({path:u,score:em(u,l.index),routesMeta:d})};return e.forEach((l,i)=>{var a;if(l.path===""||!((a=l.path)!=null&&a.includes("?")))o(l,i);else for(let s of $f(l.path))o(l,i,s)}),t}function $f(e){let t=e.split("/");if(t.length===0)return[];let[n,...r]=t,o=n.endsWith("?"),l=n.replace(/\?$/,"");if(r.length===0)return o?[l,""]:[l];let i=$f(r.join("/")),a=[];return a.push(...i.map(s=>s===""?l:[l,s].join("/"))),o&&a.push(...i),a.map(s=>e.startsWith("/")&&s===""?"/":s)}function Gg(e){e.sort((t,n)=>t.score!==n.score?n.score-t.score:tm(t.routesMeta.map(r=>r.childrenIndex),n.routesMeta.map(r=>r.childrenIndex)))}const Kg=/^:[\w-]+$/,Yg=3,Xg=2,Jg=1,Zg=10,qg=-2,eu=e=>e==="*";function em(e,t){let n=e.split("/"),r=n.length;return n.some(eu)&&(r+=qg),t&&(r+=Xg),n.filter(o=>!eu(o)).reduce((o,l)=>o+(Kg.test(l)?Yg:l===""?Jg:Zg),r)}function tm(e,t){return e.length===t.length&&e.slice(0,-1).every((r,o)=>r===t[o])?e[e.length-1]-t[t.length-1]:0}function nm(e,t,n){let{routesMeta:r}=e,o={},l="/",i=[];for(let a=0;a<r.length;++a){let s=r[a],u=a===r.length-1,d=l==="/"?t:t.slice(l.length)||"/",f=rm({path:s.relativePath,caseSensitive:s.caseSensitive,end:u},d),m=s.route;if(!f)return null;Object.assign(o,f.params),i.push({params:o,pathname:xt([l,f.pathname]),pathnameBase:sm(xt([l,f.pathnameBase])),route:m}),f.pathnameBase!=="/"&&(l=xt([l,f.pathnameBase]))}return i}function rm(e,t){typeof e=="string"&&(e={path:e,caseSensitive:!1,end:!0});let[n,r]=om(e.path,e.caseSensitive,e.end),o=t.match(n);if(!o)return null;let l=o[0],i=l.replace(/(.)\/+$/,"$1"),a=o.slice(1);return{params:r.reduce((u,d,f)=>{let{paramName:m,isOptional:y}=d;if(m==="*"){let S=a[f]||"";i=l.slice(0,l.length-S.length).replace(/(.)\/+$/,"$1")}const w=a[f];return y&&!w?u[m]=void 0:u[m]=(w||"").replace(/%2F/g,"/"),u},{}),pathname:l,pathnameBase:i,pattern:e}}function om(e,t,n){t===void 0&&(t=!1),n===void 0&&(n=!0),ha(e==="*"||!e.endsWith("*")||e.endsWith("/*"),'Route path "'+e+'" will be treated as if it were '+('"'+e.replace(/\*$/,"/*")+'" because the `*` character must ')+"always follow a `/` in the pattern. To get rid of this warning, "+('please change the route path to "'+e.replace(/\*$/,"/*")+'".'));let r=[],o="^"+e.replace(/\/*\*?$/,"").replace(/^\/*/,"/").replace(/[\\.*+^${}|()[\]]/g,"\\$&").replace(/\/:([\w-]+)(\?)?/g,(i,a,s)=>(r.push({paramName:a,isOptional:s!=null}),s?"/?([^\\/]+)?":"/([^\\/]+)"));return e.endsWith("*")?(r.push({paramName:"*"}),o+=e==="*"||e==="/*"?"(.*)$":"(?:\\/(.+)|\\/*)$"):n?o+="\\/*$":e!==""&&e!=="/"&&(o+="(?:(?=\\/|$))"),[new RegExp(o,t?void 0:"i"),r]}function lm(e){try{return e.split("/").map(t=>decodeURIComponent(t).replace(/\//g,"%2F")).join("/")}catch(t){return ha(!1,'The URL path "'+e+'" could not be decoded because it is is a malformed URL segment. This is probably due to a bad percent '+("encoding ("+t+").")),e}}function va(e,t){if(t==="/")return e;if(!e.toLowerCase().startsWith(t.toLowerCase()))return null;let n=t.endsWith("/")?t.length-1:t.length,r=e.charAt(n);return r&&r!=="/"?null:e.slice(n)||"/"}function im(e,t){t===void 0&&(t="/");let{pathname:n,search:r="",hash:o=""}=typeof e=="string"?Ht(e):e,l;return n?(n=Af(n),n.startsWith("/")?l=tu(n.substring(1),"/"):l=tu(n,t)):l=t,{pathname:l,search:um(r),hash:cm(o)}}function tu(e,t){let n=t.replace(/\/+$/,"").split("/");return e.split("/").forEach(o=>{o===".."?n.length>1&&n.pop():o!=="."&&n.push(o)}),n.length>1?n.join("/"):"/"}function xl(e,t,n,r){return"Cannot include a '"+e+"' character in a manually specified "+("`to."+t+"` field ["+JSON.stringify(r)+"].  Please separate it out to the ")+("`to."+n+"` field. Alternatively you may provide the full path as ")+'a string in <Link to="..."> and the router will parse it for you.'}function am(e){return e.filter((t,n)=>n===0||t.route.path&&t.route.path.length>0)}function ya(e,t){let n=am(e);return t?n.map((r,o)=>o===n.length-1?r.pathname:r.pathnameBase):n.map(r=>r.pathnameBase)}function wa(e,t,n,r){r===void 0&&(r=!1);let o;typeof e=="string"?o=Ht(e):(o=gr({},e),Y(!o.pathname||!o.pathname.includes("?"),xl("?","pathname","search",o)),Y(!o.pathname||!o.pathname.includes("#"),xl("#","pathname","hash",o)),Y(!o.search||!o.search.includes("#"),xl("#","search","hash",o)));let l=e===""||o.pathname==="",i=l?"/":o.pathname,a;if(i==null)a=n;else{let f=t.length-1;if(!r&&i.startsWith("..")){let m=i.split("/");for(;m[0]==="..";)m.shift(),f-=1;o.pathname=m.join("/")}a=f>=0?t[f]:"/"}let s=im(o,a),u=i&&i!=="/"&&i.endsWith("/"),d=(l||i===".")&&n.endsWith("/");return!s.pathname.endsWith("/")&&(u||d)&&(s.pathname+="/"),s}const Af=e=>e.replace(/\/\/+/g,"/"),xt=e=>Af(e.join("/")),sm=e=>e.replace(/\/+$/,"").replace(/^\/*/,"/"),um=e=>!e||e==="?"?"":e.startsWith("?")?e:"?"+e,cm=e=>!e||e==="#"?"":e.startsWith("#")?e:"#"+e;function fm(e){return e!=null&&typeof e.status=="number"&&typeof e.statusText=="string"&&typeof e.internal=="boolean"&&"data"in e}const Bf=["post","put","patch","delete"];new Set(Bf);const dm=["get",...Bf];new Set(dm);/**
 * React Router v6.30.6
 *
 * Copyright (c) Remix Software Inc.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE.md file in the root directory of this source tree.
 *
 * @license MIT
 */function mr(){return mr=Object.assign?Object.assign.bind():function(e){for(var t=1;t<arguments.length;t++){var n=arguments[t];for(var r in n)({}).hasOwnProperty.call(n,r)&&(e[r]=n[r])}return e},mr.apply(null,arguments)}const Sa=v.createContext(null),pm=v.createContext(null),Tt=v.createContext(null),Ho=v.createContext(null),ot=v.createContext({outlet:null,matches:[],isDataRoute:!1}),zf=v.createContext(null);function gm(e,t){let{relative:n}=t===void 0?{}:t;_n()||Y(!1);let{basename:r,navigator:o}=v.useContext(Tt),{hash:l,pathname:i,search:a}=Df(e,{relative:n}),s=i;return r!=="/"&&(s=i==="/"?r:xt([r,i])),o.createHref({pathname:s,search:a,hash:l})}function _n(){return v.useContext(Ho)!=null}function Cn(){return _n()||Y(!1),v.useContext(Ho).location}function Of(e){v.useContext(Tt).static||v.useLayoutEffect(e)}function If(){let{isDataRoute:e}=v.useContext(ot);return e?Em():mm()}function mm(){_n()||Y(!1);let e=v.useContext(Sa),{basename:t,future:n,navigator:r}=v.useContext(Tt),{matches:o}=v.useContext(ot),{pathname:l}=Cn(),i=JSON.stringify(ya(o,n.v7_relativeSplatPath)),a=v.useRef(!1);return Of(()=>{a.current=!0}),v.useCallback(function(u,d){if(d===void 0&&(d={}),!a.current)return;if(typeof u=="number"){r.go(u);return}let f=wa(u,JSON.parse(i),l,d.relative==="path");e==null&&t!=="/"&&(f.pathname=f.pathname==="/"?t:xt([t,f.pathname])),(d.replace?r.replace:r.push)(f,d.state,d)},[t,r,i,l,e])}function hm(){let{matches:e}=v.useContext(ot),t=e[e.length-1];return t?t.params:{}}function Df(e,t){let{relative:n}=t===void 0?{}:t,{future:r}=v.useContext(Tt),{matches:o}=v.useContext(ot),{pathname:l}=Cn(),i=JSON.stringify(ya(o,r.v7_relativeSplatPath));return v.useMemo(()=>wa(e,JSON.parse(i),l,n==="path"),[e,i,l,n])}function vm(e,t){return ym(e,t)}function ym(e,t,n,r){_n()||Y(!1);let{navigator:o}=v.useContext(Tt),{matches:l}=v.useContext(ot),i=l[l.length-1],a=i?i.params:{};i&&i.pathname;let s=i?i.pathnameBase:"/";i&&i.route;let u=Cn(),d;if(t){var f;let k=typeof t=="string"?Ht(t):t;s==="/"||(f=k.pathname)!=null&&f.startsWith(s)||Y(!1),d=k}else d=u;let m=d.pathname||"/",y=m;if(s!=="/"){let k=s.replace(/^\//,"").split("/");y="/"+m.replace(/^\//,"").split("/").slice(k.length).join("/")}let w=Hg(e,{pathname:y}),S=km(w&&w.map(k=>Object.assign({},k,{params:Object.assign({},a,k.params),pathname:xt([s,o.encodeLocation?o.encodeLocation(k.pathname).pathname:k.pathname]),pathnameBase:k.pathnameBase==="/"?s:xt([s,o.encodeLocation?o.encodeLocation(k.pathnameBase).pathname:k.pathnameBase])})),l,n,r);return t&&S?v.createElement(Ho.Provider,{value:{location:mr({pathname:"/",search:"",hash:"",state:null,key:"default"},d),navigationType:dt.Pop}},S):S}function wm(){let e=Tm(),t=fm(e)?e.status+" "+e.statusText:e instanceof Error?e.message:JSON.stringify(e),n=e instanceof Error?e.stack:null,o={padding:"0.5rem",backgroundColor:"rgba(200,200,200, 0.5)"};return v.createElement(v.Fragment,null,v.createElement("h2",null,"Unexpected Application Error!"),v.createElement("h3",{style:{fontStyle:"italic"}},t),n?v.createElement("pre",{style:o},n):null,null)}const Sm=v.createElement(wm,null);class xm extends v.Component{constructor(t){super(t),this.state={location:t.location,revalidation:t.revalidation,error:t.error}}static getDerivedStateFromError(t){return{error:t}}static getDerivedStateFromProps(t,n){return n.location!==t.location||n.revalidation!=="idle"&&t.revalidation==="idle"?{error:t.error,location:t.location,revalidation:t.revalidation}:{error:t.error!==void 0?t.error:n.error,location:n.location,revalidation:t.revalidation||n.revalidation}}componentDidCatch(t,n){console.error("React Router caught the following error during render",t,n)}render(){return this.state.error!==void 0?v.createElement(ot.Provider,{value:this.props.routeContext},v.createElement(zf.Provider,{value:this.state.error,children:this.props.component})):this.props.children}}function Pm(e){let{routeContext:t,match:n,children:r}=e,o=v.useContext(Sa);return o&&o.static&&o.staticContext&&(n.route.errorElement||n.route.ErrorBoundary)&&(o.staticContext._deepestRenderedBoundaryId=n.route.id),v.createElement(ot.Provider,{value:t},r)}function km(e,t,n,r){var o;if(t===void 0&&(t=[]),n===void 0&&(n=null),r===void 0&&(r=null),e==null){var l;if(!n)return null;if(n.errors)e=n.matches;else if((l=r)!=null&&l.v7_partialHydration&&t.length===0&&!n.initialized&&n.matches.length>0)e=n.matches;else return null}let i=e,a=(o=n)==null?void 0:o.errors;if(a!=null){let d=i.findIndex(f=>f.route.id&&(a==null?void 0:a[f.route.id])!==void 0);d>=0||Y(!1),i=i.slice(0,Math.min(i.length,d+1))}let s=!1,u=-1;if(n&&r&&r.v7_partialHydration)for(let d=0;d<i.length;d++){let f=i[d];if((f.route.HydrateFallback||f.route.hydrateFallbackElement)&&(u=d),f.route.id){let{loaderData:m,errors:y}=n,w=f.route.loader&&m[f.route.id]===void 0&&(!y||y[f.route.id]===void 0);if(f.route.lazy||w){s=!0,u>=0?i=i.slice(0,u+1):i=[i[0]];break}}}return i.reduceRight((d,f,m)=>{let y,w=!1,S=null,k=null;n&&(y=a&&f.route.id?a[f.route.id]:void 0,S=f.route.errorElement||Sm,s&&(u<0&&m===0?(Rm("route-fallback"),w=!0,k=null):u===m&&(w=!0,k=f.route.hydrateFallbackElement||null)));let g=t.concat(i.slice(0,m+1)),p=()=>{let h;return y?h=S:w?h=k:f.route.Component?h=v.createElement(f.route.Component,null):f.route.element?h=f.route.element:h=d,v.createElement(Pm,{match:f,routeContext:{outlet:d,matches:g,isDataRoute:n!=null},children:h})};return n&&(f.route.ErrorBoundary||f.route.errorElement||m===0)?v.createElement(xm,{location:n.location,revalidation:n.revalidation,component:S,error:y,children:p(),routeContext:{outlet:null,matches:g,isDataRoute:!0}}):p()},null)}var Ff=function(e){return e.UseBlocker="useBlocker",e.UseRevalidator="useRevalidator",e.UseNavigateStable="useNavigate",e}(Ff||{}),Wf=function(e){return e.UseBlocker="useBlocker",e.UseLoaderData="useLoaderData",e.UseActionData="useActionData",e.UseRouteError="useRouteError",e.UseNavigation="useNavigation",e.UseRouteLoaderData="useRouteLoaderData",e.UseMatches="useMatches",e.UseRevalidator="useRevalidator",e.UseNavigateStable="useNavigate",e.UseRouteId="useRouteId",e}(Wf||{});function bm(e){let t=v.useContext(Sa);return t||Y(!1),t}function _m(e){let t=v.useContext(pm);return t||Y(!1),t}function Cm(e){let t=v.useContext(ot);return t||Y(!1),t}function Uf(e){let t=Cm(),n=t.matches[t.matches.length-1];return n.route.id||Y(!1),n.route.id}function Tm(){var e;let t=v.useContext(zf),n=_m(),r=Uf();return t!==void 0?t:(e=n.errors)==null?void 0:e[r]}function Em(){let{router:e}=bm(Ff.UseNavigateStable),t=Uf(Wf.UseNavigateStable),n=v.useRef(!1);return Of(()=>{n.current=!0}),v.useCallback(function(o,l){l===void 0&&(l={}),n.current&&(typeof o=="number"?e.navigate(o):e.navigate(o,mr({fromRouteId:t},l)))},[e,t])}const nu={};function Rm(e,t,n){nu[e]||(nu[e]=!0)}function jm(e,t){e==null||e.v7_startTransition,e==null||e.v7_relativeSplatPath}function hi(e){let{to:t,replace:n,state:r,relative:o}=e;_n()||Y(!1);let{future:l,static:i}=v.useContext(Tt),{matches:a}=v.useContext(ot),{pathname:s}=Cn(),u=If(),d=wa(t,ya(a,l.v7_relativeSplatPath),s,o==="path"),f=JSON.stringify(d);return v.useEffect(()=>u(JSON.parse(f),{replace:n,state:r,relative:o}),[u,f,o,n,r]),null}function Fn(e){Y(!1)}function Lm(e){let{basename:t="/",children:n=null,location:r,navigationType:o=dt.Pop,navigator:l,static:i=!1,future:a}=e;_n()&&Y(!1);let s=t.replace(/^\/*/,"/"),u=v.useMemo(()=>({basename:s,navigator:l,static:i,future:mr({v7_relativeSplatPath:!1},a)}),[s,a,l,i]);typeof r=="string"&&(r=Ht(r));let{pathname:d="/",search:f="",hash:m="",state:y=null,key:w="default"}=r,S=v.useMemo(()=>{let k=va(d,s);return k==null?null:{location:{pathname:k,search:f,hash:m,state:y,key:w},navigationType:o}},[s,d,f,m,y,w,o]);return S==null?null:v.createElement(Tt.Provider,{value:u},v.createElement(Ho.Provider,{children:n,value:S}))}function Mm(e){let{children:t,location:n}=e;return vm(vi(t),n)}new Promise(()=>{});function vi(e,t){t===void 0&&(t=[]);let n=[];return v.Children.forEach(e,(r,o)=>{if(!v.isValidElement(r))return;let l=[...t,o];if(r.type===v.Fragment){n.push.apply(n,vi(r.props.children,l));return}r.type!==Fn&&Y(!1),!r.props.index||!r.props.children||Y(!1);let i={id:r.props.id||l.join("-"),caseSensitive:r.props.caseSensitive,element:r.props.element,Component:r.props.Component,index:r.props.index,path:r.props.path,loader:r.props.loader,action:r.props.action,errorElement:r.props.errorElement,ErrorBoundary:r.props.ErrorBoundary,hasErrorBoundary:r.props.ErrorBoundary!=null||r.props.errorElement!=null,shouldRevalidate:r.props.shouldRevalidate,handle:r.props.handle,lazy:r.props.lazy};r.props.children&&(i.children=vi(r.props.children,l)),n.push(i)}),n}/**
 * React Router DOM v6.30.6
 *
 * Copyright (c) Remix Software Inc.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE.md file in the root directory of this source tree.
 *
 * @license MIT
 */function yi(){return yi=Object.assign?Object.assign.bind():function(e){for(var t=1;t<arguments.length;t++){var n=arguments[t];for(var r in n)({}).hasOwnProperty.call(n,r)&&(e[r]=n[r])}return e},yi.apply(null,arguments)}function Nm(e,t){if(e==null)return{};var n={};for(var r in e)if({}.hasOwnProperty.call(e,r)){if(t.indexOf(r)!==-1)continue;n[r]=e[r]}return n}function $m(e){return!!(e.metaKey||e.altKey||e.ctrlKey||e.shiftKey)}function Am(e,t){return e.button===0&&(!t||t==="_self")&&!$m(e)}const Bm=["onClick","relative","reloadDocument","replace","state","target","to","preventScrollReset","viewTransition"],zm="6";try{window.__reactRouterVersion=zm}catch{}const Om="startTransition",ru=jd[Om];function Im(e){let{basename:t,children:n,future:r,window:o}=e,l=v.useRef();l.current==null&&(l.current=Wg({window:o,v5Compat:!0}));let i=l.current,[a,s]=v.useState({action:i.action,location:i.location}),{v7_startTransition:u}=r||{},d=v.useCallback(f=>{u&&ru?ru(()=>s(f)):s(f)},[s,u]);return v.useLayoutEffect(()=>i.listen(d),[i,d]),v.useEffect(()=>jm(r),[r]),v.createElement(Lm,{basename:t,children:n,location:a.location,navigationType:a.action,navigator:i,future:r})}const Dm=typeof window<"u"&&typeof window.document<"u"&&typeof window.document.createElement<"u",Fm=/^(?:[a-z][a-z0-9+.-]*:|\/\/)/i,wi=v.forwardRef(function(t,n){let{onClick:r,relative:o,reloadDocument:l,replace:i,state:a,target:s,to:u,preventScrollReset:d,viewTransition:f}=t,m=Nm(t,Bm),{basename:y}=v.useContext(Tt),w,S=!1;if(typeof u=="string"&&Fm.test(u)&&(w=u,Dm))try{let h=new URL(window.location.href),x=u.startsWith("//")?new URL(h.protocol+u):new URL(u),b=va(x.pathname,y);x.origin===h.origin&&b!=null?u=b+x.search+x.hash:S=!0}catch{}let k=gm(u,{relative:o}),g=Wm(u,{replace:i,state:a,target:s,preventScrollReset:d,relative:o,viewTransition:f});function p(h){r&&r(h),h.defaultPrevented||g(h)}return v.createElement("a",yi({},m,{href:w||k,onClick:S||l?r:p,ref:n,target:s}))});var ou;(function(e){e.UseScrollRestoration="useScrollRestoration",e.UseSubmit="useSubmit",e.UseSubmitFetcher="useSubmitFetcher",e.UseFetcher="useFetcher",e.useViewTransitionState="useViewTransitionState"})(ou||(ou={}));var lu;(function(e){e.UseFetcher="useFetcher",e.UseFetchers="useFetchers",e.UseScrollRestoration="useScrollRestoration"})(lu||(lu={}));function Wm(e,t){let{target:n,replace:r,state:o,preventScrollReset:l,relative:i,viewTransition:a}=t===void 0?{}:t,s=If(),u=Cn(),d=Df(e,{relative:i});return v.useCallback(f=>{if(Am(f,n)){f.preventDefault();let m=r!==void 0?r:Eo(u)===Eo(d);s(e,{replace:m,state:o,preventScrollReset:l,relative:i,viewTransition:a})}},[u,s,d,r,o,n,e,l,i,a])}const Um="https://github.com/frankvane/vane-components";class Vm extends Pn.Component{constructor(){super(...arguments);Fa(this,"state",{error:null})}static getDerivedStateFromError(n){return{error:n}}render(){var n;return this.state.error?c.jsxs("div",{className:"crash",role:"alert",children:[c.jsx("h3",{children:"这个页面炸了"}),c.jsx("pre",{children:String(((n=this.state.error)==null?void 0:n.stack)||this.state.error)}),c.jsx("button",{type:"button",onClick:()=>this.setState({error:null}),children:"重试"})]}):this.props.children}}function Vf(e,t){return String(e.entries.indexOf(t)+1).padStart(2,"0")}function Hm({demos:e,pathname:t}){var s;const{groups:n,entries:r,label:o}=e,l=(s=r.find(u=>t===`/demo/${u.meta.slug}`))==null?void 0:s.meta.group,[i,a]=v.useState(()=>{var d;const u=(d=n[0])==null?void 0:d.key;return Object.fromEntries(n.map(f=>[f.key,f.key===(l??u)]))});return v.useEffect(()=>{l&&a(u=>u[l]?u:{...u,[l]:!0})},[l]),c.jsxs("div",{className:"nav-section",children:[c.jsxs("div",{className:"nav-section-head",children:[c.jsx("span",{children:o}),c.jsxs("code",{children:[r.length," demos"]})]}),n.map(u=>{const d=r.filter(m=>m.meta.group===u.key);if(d.length===0)return null;const f=i[u.key]??!1;return c.jsxs("div",{className:"nav-group",children:[c.jsxs("button",{type:"button",className:`nav-group-head${l===u.key?" is-current":""}`,onClick:()=>a(m=>({...m,[u.key]:!f})),"aria-expanded":f,children:[c.jsx("span",{className:`nav-caret${f?" is-open":""}`,"aria-hidden":!0,children:"▸"}),u.label,c.jsx("code",{children:d.length})]}),f?c.jsx("div",{className:"nav-list",children:d.map(m=>c.jsxs(wi,{to:`/demo/${m.meta.slug}`,className:`nav-sub${t===`/demo/${m.meta.slug}`?" is-active":""}`,children:[c.jsx("em",{"aria-hidden":!0,children:Vf(e,m)}),m.meta.title]},m.meta.slug))}):null]},u.key)})]})}function Qm({demos:e}){const{slug:t}=hm(),{entries:n,detail:r}=e,o=t?n.find(i=>i.meta.slug===t):void 0;if(!o)return c.jsx(hi,{to:`/demo/${n[0].meta.slug}`,replace:!0});const l=n.indexOf(o)+1;return c.jsx(Pn.Fragment,{children:r(o,l)},o.meta.slug)}function Gm({config:e}){var d;const{pathname:t}=Cn(),[n,r]=v.useState(!1),[o,l]=v.useState(!1);v.useEffect(()=>r(!1),[t]);const i=v.useCallback(()=>l(f=>!f),[]);v.useEffect(()=>{const f=m=>{const y=m.target,w=y&&(y.tagName==="INPUT"||y.tagName==="TEXTAREA"||y.isContentEditable);m.key==="Escape"&&r(!1),!w&&(m.key==="g"||m.key==="G")&&!m.metaKey&&!m.ctrlKey&&l(S=>!S)};return window.addEventListener("keydown",f),()=>window.removeEventListener("keydown",f)},[]);const a=e.demos,s=v.useMemo(()=>{if(!t.startsWith("/demo"))return e.crumb(t);const f=t.replace(/^\/demo\/?/,""),m=a.entries.find(y=>y.meta.slug===f);return m?`demo ${Vf(a,m)} · ${m.meta.title}`:"demo · 逐项示例"},[t,e,a]),u=v.useMemo(()=>e.nav.map((f,m)=>({...f,no:String(m+1).padStart(2,"0")})),[e.nav]);return c.jsxs("div",{className:`shell${n?" is-nav-open":""}${o?" is-guides":""}`,children:[c.jsx("a",{className:"skip-link",href:"#main",onClick:f=>{f.preventDefault();const m=document.getElementById("main");m==null||m.setAttribute("tabindex","-1"),m==null||m.focus(),m==null||m.scrollIntoView({block:"start"})},children:"跳到内容"}),c.jsxs("aside",{className:"side","aria-label":"站点导航",children:[c.jsxs(wi,{to:"/",className:"brand",children:[c.jsx("span",{className:"brand-mark","aria-hidden":!0,children:e.brand}),c.jsxs("span",{children:[c.jsx("strong",{children:e.pkg}),c.jsx("em",{children:e.subtitle})]})]}),c.jsxs("nav",{children:[u.map(f=>c.jsxs(wi,{to:f.to,className:`nav-item${t===f.to?" is-active":""}`,"aria-current":t===f.to?"page":void 0,children:[c.jsx("em",{"aria-hidden":!0,children:f.no}),c.jsx("span",{children:f.label}),f.hint?c.jsx("code",{children:f.hint}):null]},f.to)),c.jsx(Hm,{demos:e.demos,pathname:t})]}),c.jsxs("div",{className:"side-foot",children:[c.jsx("p",{children:e.footer[0]}),c.jsx("p",{className:"muted",children:e.footer[1]})]})]}),c.jsx("button",{type:"button",className:"scrim","aria-label":"关闭导航",tabIndex:n?0:-1,onClick:()=>r(!1)}),c.jsxs("div",{className:"main",id:"main",children:[c.jsxs("header",{className:"topbar",children:[c.jsx("button",{type:"button",className:"nav-toggle","aria-label":n?"关闭导航":"打开导航","aria-expanded":n,onClick:()=>r(f=>!f),children:c.jsx("span",{"aria-hidden":!0})}),c.jsx("span",{className:"crumb",children:s}),c.jsxs("div",{className:"topbar-right",children:[(d=e.stats)==null?void 0:d.map(f=>c.jsxs("span",{className:"topbar-stat",title:f.title,children:[c.jsx("b",{children:f.value})," ",f.label]},f.label)),c.jsxs("button",{type:"button",className:"topbar-btn","aria-pressed":o,onClick:i,title:"显示栏位参考线（快捷键 G）",children:[c.jsx("i",{"aria-hidden":!0}),"guides"]}),c.jsx("a",{className:"topbar-link",href:e.sourceUrl??Um,target:"_blank",rel:"noreferrer",children:"source ↗"})]})]}),c.jsx("div",{className:"guides","aria-hidden":!0}),c.jsx(v.Suspense,{fallback:c.jsx("div",{className:"loading",children:"loading modules…"}),children:c.jsx(Vm,{children:c.jsxs(Mm,{children:[e.routes.map(f=>c.jsx(Fn,{path:f.path,element:f.element},f.path)),c.jsx(Fn,{path:"/demo",element:c.jsx(hi,{to:`/demo/${e.demos.entries[0].meta.slug}`,replace:!0})}),c.jsx(Fn,{path:"/demo/:slug",element:c.jsx(Qm,{demos:e.demos})}),c.jsx(Fn,{path:"*",element:c.jsx(hi,{to:"/",replace:!0})})]})})})]})]})}function Km({config:e}){return c.jsx(Im,{children:c.jsx(Gm,{config:e})})}const Ym="modulepreload",Xm=function(e,t){return new URL(e,t).href},iu={},xa=function(t,n,r){let o=Promise.resolve();if(n&&n.length>0){const i=document.getElementsByTagName("link"),a=document.querySelector("meta[property=csp-nonce]"),s=(a==null?void 0:a.nonce)||(a==null?void 0:a.getAttribute("nonce"));o=Promise.allSettled(n.map(u=>{if(u=Xm(u,r),u in iu)return;iu[u]=!0;const d=u.endsWith(".css"),f=d?'[rel="stylesheet"]':"";if(!!r)for(let w=i.length-1;w>=0;w--){const S=i[w];if(S.href===u&&(!d||S.rel==="stylesheet"))return}else if(document.querySelector(`link[href="${u}"]${f}`))return;const y=document.createElement("link");if(y.rel=d?"stylesheet":Ym,d||(y.as="script"),y.crossOrigin="",y.href=u,s&&y.setAttribute("nonce",s),document.head.appendChild(y),d)return new Promise((w,S)=>{y.addEventListener("load",w),y.addEventListener("error",()=>S(new Error(`Unable to preload CSS for ${u}`)))})}))}function l(i){const a=new Event("vite:preloadError",{cancelable:!0});if(a.payload=i,window.dispatchEvent(a),!a.defaultPrevented)throw i}return o.then(i=>{for(const a of i||[])a.status==="rejected"&&l(a.reason);return t().catch(l)})};function Jm(){const e=new Map,t=new Map,n=(i,a)=>{const s=e.get(i);if(s)for(const u of[...s])try{u(a)}catch(d){console.warn(`[PluginBus] handler error for event "${i}"`,d)}},r=(i,a)=>{let s=e.get(i);return s||(s=new Set,e.set(i,s)),s.add(a),()=>{s==null||s.delete(a)}},o=(i,a)=>{const s=u=>{a(u),l(i,s)};return r(i,s)},l=(i,a)=>{var s;if(!a){e.delete(i);return}(s=e.get(i))==null||s.delete(a)};return{emit:n,on:r,once:o,off:l,getData:i=>t.get(i),setData:(i,a)=>{const s=t.get(i);t.set(i,a),s!==a&&n(i,a)},deleteData:i=>{const a=t.has(i);t.delete(i),a&&n(i,void 0)},hasData:i=>t.has(i),getAll:()=>{const i={};return t.forEach((a,s)=>{i[s]=a}),i},clear:()=>{e.clear(),t.clear()}}}function Hf(e){const t=new Map(e.map(a=>[a.name,a])),n=[];for(const a of e)for(const s of a.dependencies??[])t.has(s)||n.push(`${a.name} -> ${s}`);const r=[],o=new Set,l=[...e],i=a=>(a.dependencies??[]).every(s=>o.has(s)||!t.has(s));for(;l.length>0;){const a=l.filter(i);if(a.length===0)throw new Error(`[vane/plugin-core] 插件循环依赖: ${l.map(u=>u.name).join(" <-> ")}`);let s=a[0];for(const u of a)(u.priority??0)>(s.priority??0)&&(s=u);r.push(s),o.add(s.name),l.splice(l.indexOf(s),1)}return n.length>0&&console.warn(`[vane/plugin-core] 以下插件依赖未注册，将被忽略:
  ${n.join(`
  `)}`),r}async function Zm(e,t={}){const{timeout:n=3e3,name:r="anonymous",hook:o="unknown"}=t;if(!n||n<=0)return await e();let l;const i=new Promise((a,s)=>{l=setTimeout(()=>{s(new Error(`[vane/plugin-core] 插件 ${r} 的钩子 ${o} 超时(${n}ms)`))},n)});try{return await Promise.race([Promise.resolve().then(e),i])}finally{l&&clearTimeout(l)}}const qm=new Set(["onMount","onUnmount","onPropsChange","onError"]);function eh(e={}){const t=e.logger??console,n=e.sandbox??!0,r=e.timeout??3e3,o=[],l=[],i=new Map,a=()=>Hf([...i.values()].filter(u=>u.enabled!==!1)),s=u=>{i.set(u.name,{...u,enabled:u.enabled??!0}),u.init&&Promise.resolve(u.init()).catch(d=>{t.warn(`[PluginManager] init failed for ${u.name}`,d)})};return{register:s,registerAll:u=>{for(const d of u)s(d)},unregister:u=>{const d=i.get(u);d&&(d.destroy&&Promise.resolve(d.destroy()).catch(f=>{t.warn(`[PluginManager] destroy failed for ${d.name}`,f)}),i.delete(u))},getPlugin:u=>i.get(u),getAllPlugins:()=>[...i.values()],getEnabledPlugins:()=>[...i.values()].filter(u=>u.enabled!==!1),getExecutionOrder:a,enable:u=>{const d=i.get(u);d&&(d.enabled=!0)},disable:u=>{const d=i.get(u);d&&(d.enabled=!1)},has:u=>i.has(u),executeHook:async(u,d,...f)=>{var m,y;for(const w of a()){const S=(m=w.hooks)==null?void 0:m[u];if(typeof S!="function")continue;const k=w.sandbox??n,g=w.timeout??r;let p;try{p=k?await Zm(()=>S(d,...f),{timeout:g,name:w.name,hook:String(u)}):await S(d,...f)}catch(h){if(o.push({plugin:w.name,hook:String(u),error:h}),t.warn(`[PluginManager] hook ${String(u)} failed in ${w.name}`,h),(y=e.onError)==null||y.call(e,w.name,String(u),h),u==="onError")break;continue}if(qm.has(String(u))&&typeof p=="function"){l.push(p);continue}if(p===!1)return!1;if(p!==void 0&&p!==!0)return p}},clear:()=>{const u=l.splice(0);for(const d of u.reverse())try{d()}catch(f){t.warn("[PluginManager] cleanup failed",f)}for(const d of i.values())d.destroy&&Promise.resolve(d.destroy()).catch(f=>{t.warn(`[PluginManager] destroy failed for ${d.name}`,f)});i.clear()},getErrors:()=>[...o]}}var th=Object.defineProperty,nh=(e,t,n)=>t in e?th(e,t,{enumerable:!0,configurable:!0,writable:!0,value:n}):e[t]=n,rh=(e,t,n)=>nh(e,t+"",n);class Pa extends Pn.Component{constructor(){super(...arguments),rh(this,"state",{error:null})}static getDerivedStateFromError(t){return{error:t}}componentDidCatch(t,n){var r,o;console.warn("[vane/plugin-core] 插件渲染错误已被隔离",t,n),(o=(r=this.props).onError)==null||o.call(r,t,n)}render(){const{error:t}=this.state;return t?this.props.fallback?this.props.fallback(t):null:this.props.children}}let Ur=null;function oh(e=!1){if(Ur&&!e)return Ur;const t=typeof window<"u"?window.innerWidth:1024,n=typeof window<"u"?window.innerHeight:768,r=typeof window<"u"&&window.devicePixelRatio||1,o=typeof navigator<"u"&&navigator.userAgent||"",l=/iPad|Tablet/i.test(o),i=/Mobile|Android|iPhone/i.test(o),a=typeof window<"u"&&("ontouchstart"in window||(navigator.maxTouchPoints??0)>0);return Ur={type:l?"tablet":i?"mobile":"desktop",os:o,browser:o,devicePixelRatio:r,viewportWidth:t,viewportHeight:n,isTouchDevice:a,isRetina:r>=2},Ur}function lh(e){const{plugins:t,props:n,data:r,initialState:o,containerRef:l,enableDebug:i=!1,managerOptions:a,extendContext:s}=e,u=v.useRef(null),d=l??u,f=v.useRef(null);f.current||(f.current=eh(a));const m=f.current,y=v.useRef(null);y.current||(y.current=Jm());const w=y.current,S=v.useRef(new Map),[k,g]=v.useState(o??{}),[,p]=v.useState(0),h=v.useCallback(()=>p(te=>te+1),[]),x=v.useMemo(()=>oh(),[]),b=t.map(te=>te.name).join("|");v.useLayoutEffect(()=>{m.clear(),m.registerAll(t),i&&console.debug("[vane/plugin-core] plugins registered:",b)},[b]),v.useLayoutEffect(()=>()=>{m.executeHook("onUnmount",E.current),m.clear()},[m]);const T=v.useMemo(()=>Hf(t),[b]),E=v.useRef(null),R=v.useMemo(()=>{const te={props:n,data:r,bus:w,refs:{container:d,getContainer:()=>d.current},state:k,setState:Q=>g(Fe=>({...Fe,...Q})),shared:S.current,deviceInfo:x,forceUpdate:h,getSize:()=>{const Q=d.current;return Q?{width:Q.offsetWidth,height:Q.offsetHeight}:{width:0,height:0}},logger:console};return s?s(te):te},[n,r,k,x,w,s]);E.current=R;const F=v.useCallback(te=>{var Fe;let Q=te;for(const En of T){const Ge=(Fe=En.hooks)==null?void 0:Fe.transformProps;typeof Ge=="function"&&(Q=Ge(Q))}return Q},[T]),M=v.useCallback(te=>{var Fe;let Q=te;for(const En of T){const Ge=(Fe=En.hooks)==null?void 0:Fe.transformData;typeof Ge=="function"&&(Q=Ge(E.current,Q))}return Q},[T]),xe=v.useCallback((te,...Q)=>m.executeHook(te,E.current,...Q),[m]);return{manager:m,bus:w,context:R,state:k,setState:R.setState,execute:xe,transformProps:F,transformData:M,orderedPlugins:T}}v.createContext(null);function Vr(e,t,n){const{hook:r,position:o="after"}=n;return e.filter(l=>l.enabled!==!1).filter(l=>{var i;return typeof((i=l.hooks)==null?void 0:i[r])=="function"}).filter(l=>{var i;return(((i=l.config)==null?void 0:i.slotPosition)??"after")===o}).sort((l,i)=>{var a,s;return(((a=l.config)==null?void 0:a.order)??0)-(((s=i.config)==null?void 0:s.order)??0)||(i.priority??0)-(l.priority??0)}).map((l,i)=>{try{const a=l.hooks[r](t);return a==null?null:c.jsx(Pa,{children:a},`vane-slot-${l.name}-${i}`)}catch(a){return console.warn(`[vane/plugin-core] 插件 ${l.name} 的 ${r} 渲染失败`,a),null}})}function ih(e,t,n){return c.jsxs(c.Fragment,{children:[Vr(e,t,{hook:"renderHeader",position:"before"}),n,Vr(e,t,{hook:"renderOverlay"}),Vr(e,t,{hook:"renderHeader",position:"after"}),Vr(e,t,{hook:"renderFooter"})]})}const ka=v.createContext(null);function ah({orderedPlugins:e,context:t,children:n}){const r=v.useMemo(()=>({orderedPlugins:e,context:t}),[e,t]);return c.jsx(ka.Provider,{value:r,children:n})}function sh(e,t,n){return[...e].filter(r=>r.enabled!==!1&&typeof r.hooks[n]=="function").sort((r,o)=>{var l,i;return(((l=r.config)==null?void 0:l.order)??0)-(((i=o.config)==null?void 0:i.order)??0)||(o.priority??0)-(r.priority??0)}).map((r,o)=>{try{const l=r.hooks[n](t);return l==null?null:c.jsx(Pa,{children:l},`profile-slot-${r.name}-${o}`)}catch(l){return console.warn(`[vane-profile] 插件 ${r.name} 的 ${n} 渲染失败`,l),null}}).filter(Boolean)}function jt(e){const t=v.useContext(ka);return t?sh(t.orderedPlugins,t.context,e):[]}function xr(){const e=v.useContext(ka);return(e==null?void 0:e.context)??null}const J=v.forwardRef(function(t,n){const{children:r,containerClassName:o,containerStyle:l,containerRefExternal:i}=t,a=v.useRef(null),s=i||a,[,u]=v.useState(0),d=v.useCallback(()=>u(x=>x+1),[]),f=jt("renderBannerArea"),m=jt("renderBioArea"),y=jt("renderStatRow"),w=jt("renderTabBar"),S=jt("renderBadgeArea"),k=jt("renderFollowArea"),g=jt("renderContentArea"),p=xr(),h=v.useRef((p==null?void 0:p.activeTab)??null);return h.current=(p==null?void 0:p.activeTab)??null,v.useImperativeHandle(n,()=>({getContainer:()=>s.current,forceUpdate:d,getSize:()=>{const x=s.current;return x?{width:x.offsetWidth,height:x.offsetHeight}:{width:0,height:0}},getActiveTab:()=>h.current}),[d]),c.jsxs("div",{ref:s,className:`vp-profile ${o||""}`,style:{position:"relative",boxSizing:"border-box",background:"#fff",color:"#1f2328",...l},children:[c.jsxs("div",{className:"vp-banner-area",style:{position:"relative"},children:[f,S.length>0&&c.jsx("div",{className:"vp-badge-area",style:{position:"absolute",top:8,right:8,display:"flex",alignItems:"center",gap:6},children:S})]}),m.length>0&&c.jsx("div",{className:"vp-bio-area",style:{display:"flex",flexDirection:"column",gap:10,padding:"12px 16px 0"},children:m}),c.jsxs("div",{className:"vp-meta-area",style:{display:"flex",alignItems:"center",justifyContent:"space-between",gap:12,padding:"12px 16px"},children:[c.jsx("div",{className:"vp-stat-row",children:y}),c.jsx("div",{className:"vp-follow-area",style:{display:"flex",alignItems:"center",gap:8},children:k})]}),w.length>0&&c.jsx("div",{className:"vp-tab-bar",style:{padding:"0 16px"},children:w}),c.jsx("div",{className:"vp-content-area",style:{padding:"16px"},children:g.length>0?g:r})]})});J.displayName="ProfileCore";function ee(e,t){const n=Array.isArray(t)?{plugins:t}:t,{plugins:r,enableDebug:o=!1}=n,l=v.forwardRef((i,a)=>{const s=v.useRef(null),u=v.useCallback(g=>{var h;return{...g,activeTab:((h=g.state)==null?void 0:h.activeTab)??i.defaultActiveTab??null,setActiveTab:x=>g.setState({activeTab:x}),stats:i.stats??[],followState:i.followState??"none",verified:i.verified??!1,badgeType:i.badgeType??"personal",banner:i.banner??null}},[i]),d=lh({plugins:r,props:i,data:i.data,containerRef:s,extendContext:u,enableDebug:o}),f=v.useRef(d.context);f.current=d.context;const m=v.useCallback((g,...p)=>d.execute(g,...p),[d.manager]),y=d.transformProps(i);v.useEffect(()=>{m("onMount")},[m]);const w=v.useRef(i);v.useEffect(()=>{const g=w.current;g!==i&&(w.current=i,m("onPropsChange",g,i))},[i,m]);const S=v.useRef(f.current.activeTab);v.useEffect(()=>{const g=f.current.activeTab;if(S.current!==g){const p=S.current;S.current=g,m("onTabChange",g,p)}},[f.current.activeTab,m]);const k={...y,containerRefExternal:s,debug:y.debug??o,onMount:()=>{var g;(g=y.onMount)==null||g.call(y)},onUnmount:()=>{var g;(g=y.onUnmount)==null||g.call(y)},children:c.jsx(Pa,{children:ih(d.orderedPlugins,d.context,y.children)})};return c.jsx(ah,{orderedPlugins:d.orderedPlugins,context:d.context,children:c.jsx(e,{ref:a,...k})})});return l.displayName="WithPlugins(ProfileCore)",l}function uh(e={}){const{cover:t,gradient:n=["#6a11cb","#1a5fd0"],avatar:r,avatarSize:o=64,avatarRound:l=!0,height:i=160,overlay:a}=e,s=t?`url(${t}) center/cover no-repeat`:`linear-gradient(135deg, ${n[0]}, ${n[1]})`;return{name:"BannerSlot",version:"0.1.0",description:"头图区：封面图 / 渐变背景 + 头像浮层 + 昵称标语叠加。",priority:10,enabled:!0,hooks:{renderBannerArea:u=>c.jsxs("div",{className:"vp-banner",style:{position:"relative",height:i,background:s,backgroundSize:"cover",marginBottom:o/2},children:[r&&c.jsx("img",{src:r,alt:"",style:{position:"absolute",left:16,bottom:-o/2,width:o,height:o,borderRadius:l?"50%":8,border:"3px solid #fff",boxShadow:"0 2px 8px rgba(0,0,0,0.2)",objectFit:"cover"}}),(a??u.banner)&&c.jsx("div",{className:"vp-banner-overlay",style:{position:"absolute",left:r?16+o+12:16,bottom:16,color:"#fff",textShadow:"0 1px 4px rgba(0,0,0,0.5)"},children:a??u.banner})]})}}}const ch="BannerSlot",fh="头图区：封面图或渐变背景打底，左下角浮出头像（与数据行区重叠），并可叠加昵称 / 标语文案。读取 props.banner 作为默认叠加内容。",dh="0.1.0",ph=["ui","banner","头图"],gh=[{name:"cover",type:"string",default:'""',description:"封面图 URL；与 gradient 至少其一"},{name:"gradient",type:"[string, string]",default:'["#6a11cb", "#2575fc"]',description:"渐变起止色，无 cover 时作背景"},{name:"avatar",type:"string",default:'""',description:"头像 URL，浮于头图左下"},{name:"avatarSize",type:"number",default:"64",description:"头像直径（px）"},{name:"avatarRound",type:"boolean",default:"true",description:"头像是否圆形"},{name:"height",type:"number",default:"160",description:"头图区高度（px）"},{name:"overlay",type:"ReactNode",default:"context.banner",description:"叠加文案，缺省用 props.banner"}],mh=`// 头图 + 头像 + 昵称标语。
const Profile = withPlugins(ProfileCore, [
  createBannerSlotPlugin({
    cover: user.cover,
    avatar: user.avatar,
    overlay: <strong>{user.name}</strong>,
  }),
]);

<Profile banner={<span>@{user.handle}</span>} />;`,hh=["封面图 / 渐变背景二选一","头像浮层与数据行区重叠（经典主页观感）","叠加文案支持自定义或复用 props.banner"],vh=["社交平台个人主页头部","创作者 / 品牌主页","需要头像 + 封面组合的任意档案页"],yh=["头像以负 bottom 浮出，父容器不要设 overflow:hidden 否则会被裁切。"],Qf={name:ch,description:fh,since:dh,tags:ph,config:gh,example:mh,features:hh,useCases:vh,notes:yh},Qt=Object.assign(uh,{meta:Qf});function wh(e={}){const{direction:t="row",divider:n=!0,onStatClick:r}=e;return{name:"StatRow",version:"0.1.0",description:"数据行：关注 / 粉丝 / 获赞 / 作品等指标，横排展示。",priority:10,enabled:!0,hooks:{renderStatRow:o=>{const l=e.items??o.stats??[];return l.length===0?null:c.jsx("div",{className:"vp-stat-row-inner",style:{display:"flex",flexDirection:t==="column"?"column":"row",gap:16,flex:1},children:l.map((i,a)=>c.jsxs("button",{type:"button",onClick:r?()=>r(i,a):void 0,style:{display:"flex",flexDirection:"column",alignItems:t==="column"?"flex-start":"center",border:"none",background:"transparent",cursor:r?"pointer":"default",padding:0,lineHeight:1.2},children:[c.jsx("span",{style:{fontSize:18,fontWeight:700},children:i.value}),c.jsx("span",{style:{fontSize:12,color:"#6b6b6b",borderRight:n&&t==="row"&&a<l.length-1?"1px solid #eee":"none",paddingRight:n&&t==="row"&&a<l.length-1?16:0},children:i.label})]},i.key??`stat-${a}`))})}}}}const Sh="StatRow",xh="数据行：把关注 / 粉丝 / 获赞 / 作品等指标横排展示，每项显示「值 + 标签」。数据源为 config.items 或 props.stats。",Ph="0.1.0",kh=["ui","stats","数据"],bh=[{name:"items",type:"StatItem[]",default:"context.stats",description:"显式指标；缺省读 props.stats"},{name:"direction",type:'"row" | "column"',default:"row",description:"排布方向"},{name:"divider",type:"boolean",default:"true",description:"row 模式下项间分隔线"},{name:"onStatClick",type:"function",default:"-",description:"点击回调，可在此 setActiveTab 联动页签"}],_h=`// 关注 / 粉丝 / 获赞 / 作品。
const Profile = withPlugins(ProfileCore, [
  createStatRowPlugin({
    items: [
      { value: 128, label: "关注" },
      { value: 1.2, label: "粉丝" },
      { value: 48, label: "获赞" },
      { value: 9, label: "作品" },
    ],
  }),
]);`,Ch=["支持 config.items 覆盖 props.stats","row / column 两种排布","可选分隔线","点击回调可联动页签"],Th=["个人主页指标展示","创作者数据概览","任意需要「值 + 标签」成组展示的场景"],Eh=["divider 仅在 direction=row 时生效。"],Gf={name:Sh,description:xh,since:Ph,tags:kh,config:bh,example:_h,features:Ch,useCases:Th,notes:Eh},Pr=Object.assign(wh,{meta:Gf});function Rh(e){const{tabs:t,variant:n="underline",sticky:r=!1,scrollTopOnChange:o=!0,onChange:l}=e;if(!t||t.length===0)throw new Error("[vane-profile] TabSync 至少需要一个 tab");const i=a=>n==="segmented"?{flex:1,padding:"6px 0",borderRadius:6,background:a?"#fff":"transparent",color:a?"#1a5fd0":"#555",fontWeight:a?700:400}:n==="pill"?{padding:"4px 14px",borderRadius:999,background:a?"#1a5fd0":"transparent",color:a?"#fff":"#555",border:a?"none":"1px solid #ddd"}:{padding:"8px 12px",borderBottom:a?"2px solid #1a5fd0":"2px solid transparent",color:a?"#1a5fd0":"#555",fontWeight:a?700:400};return{name:"TabSync",version:"0.1.0",description:"页签系统：渲染页签栏 + 切换时联动内容区重渲染（消费方子节点经 useProfileContext 订阅 activeTab）。",priority:20,enabled:!0,hooks:{renderTabBar:a=>{const s=a.activeTab;return c.jsx("div",{className:"vp-tab-bar-inner",style:{display:"flex",gap:n==="segmented"?4:8,position:r?"sticky":"static",top:r?0:void 0,background:r?"#fff":"transparent",zIndex:r?1:void 0,...n==="segmented"?{background:"#eee",borderRadius:8,padding:4}:{}},children:t.map(u=>{const d=u.id===s;return c.jsxs("button",{type:"button",onClick:()=>a.setActiveTab(u.id),style:{display:"inline-flex",alignItems:"center",gap:4,border:"none",background:"transparent",cursor:"pointer",fontSize:14,...i(d)},children:[u.icon,u.label]},u.id)})})},onTabChange:(a,s,u)=>{var d;if(o){const f=(d=a.refs.container)==null?void 0:d.current;f&&(f.scrollTop=0)}l==null||l(s,u)}}}}const jh="TabSync",Lh="页签系统：渲染页签栏（underline / pill / segmented 三种样式），点击切换 activeTab，并联动内容区重渲染。切换时默认把容器滚到顶部。",Mh="0.1.0",Nh=["ui","tab","页签"],$h=[{name:"tabs",type:"TabItem[]",default:"-",description:"页签定义 { id, label, icon? }，至少一项"},{name:"variant",type:'"underline" | "pill" | "segmented"',default:"underline",description:"样式变体"},{name:"sticky",type:"boolean",default:"false",description:"是否吸顶"},{name:"scrollTopOnChange",type:"boolean",default:"true",description:"切换时容器滚到顶部"},{name:"onChange",type:"function",default:"-",description:"切换回调 (id, oldId)"}],Ah=`// 作品 / 动态 / 关于 三个页签。
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
</Profile>;`,Bh=["三种样式变体","点击切换 activeTab","内容区经 useProfileContext 自动联动","可选吸顶 + 切换滚动复位"],zh=["多内容区主页","作品 / 动态 / 收藏 切换","需要页签驱动的任意档案页"],Oh=["内容区必须是消费 useProfileContext().activeTab 的子组件；TabSync 本身不渲染内容。"],Kf={name:jh,description:Lh,since:Mh,tags:Nh,config:$h,example:Ah,features:Bh,useCases:zh,notes:Oh},kr=Object.assign(Rh,{meta:Kf});function Ih({type:e}){const t=e==="institution"?"#ff8f00":"#1da1f2";return c.jsxs("svg",{width:"16",height:"16",viewBox:"0 0 24 24","aria-hidden":"true",children:[c.jsx("circle",{cx:"12",cy:"12",r:"11",fill:t}),c.jsx("path",{d:"M7 12.5l3 3 7-7",fill:"none",stroke:"#fff",strokeWidth:"2.4",strokeLinecap:"round",strokeLinejoin:"round"})]})}function Dh(e={}){const{showLabel:t=!0}=e;return{name:"VerifyBadge",version:"0.1.0",description:"认证徽标：个人 / 机构认证对勾，浮于头图右上角。",priority:30,enabled:!0,hooks:{renderBadgeArea:n=>{const r=e.verified??n.verified,o=e.type??n.badgeType;if(!r)return null;const l=e.label??(o==="institution"?"机构认证":"认证");return c.jsxs("span",{className:"vp-badge",style:{display:"inline-flex",alignItems:"center",gap:4,padding:"2px 8px",borderRadius:999,background:"rgba(255,255,255,0.92)",color:"#333",fontSize:12},children:[c.jsx(Ih,{type:o}),t&&l]})}}}}const Fh="VerifyBadge",Wh="认证徽标：个人 / 机构两种认证对勾（内联 SVG，无外部资源），浮于头图右上角。verified 为 false 时不渲染。",Uh="0.1.0",Vh=["ui","badge","认证"],Hh=[{name:"verified",type:"boolean",default:"props.verified",description:"强制认证态，覆盖 props.verified"},{name:"type",type:'"personal" | "institution"',default:"props.badgeType",description:"认证类型，改变徽标颜色与默认文字"},{name:"label",type:"ReactNode",default:"按 type 给「认证」/「机构认证」",description:"徽标旁文字"},{name:"showLabel",type:"boolean",default:"true",description:"是否展示文字"}],Qh=`// 个人认证徽标。
const Profile = withPlugins(ProfileCore, [
  createVerifyBadgePlugin({ type: "personal" }),
]);

<Profile verified badgeType="personal" />;`,Gh=["个人 / 机构两种配色","内联 SVG，零外部依赖","浮于头图右上角","verified=false 自动隐藏"],Kh=["认证用户主页标识","品牌 / 机构官方账号","需要信任标识的任意档案"],Yh=["默认读取 props.verified / props.badgeType，也可经 config 强制覆盖。"],Yf={name:Fh,description:Wh,since:Uh,tags:Vh,config:Hh,example:Qh,features:Gh,useCases:Kh,notes:Yh},Qo=Object.assign(Dh,{meta:Yf}),Xh={none:"关注",following:"已关注",mutual:"互相关注"};function Jh({initial:e,labels:t,size:n,onToggle:r}){const[o,l]=v.useState(e),i=()=>{const d=o==="none"||o==="mutual"?"following":"none";l(d),r(d)},a=o!=="none",s=n==="sm"?"4px 12px":"8px 20px",u=n==="sm"?12:14;return c.jsx("button",{type:"button",onClick:i,style:{padding:s,fontSize:u,borderRadius:999,border:a?"1px solid #ddd":"none",background:a?"#fff":"#1a5fd0",color:a?"#555":"#fff",cursor:"pointer"},children:t[o]})}function Zh(e={}){const{labels:t,size:n="md",onFollow:r,onMutual:o}=e,l={...Xh,...t??{}};return{name:"FollowEcho",version:"0.1.0",description:"关注回显：关注 / 已关注 / 互相关注三态按钮，受控于 props.followState。",priority:10,enabled:!0,hooks:{renderFollowArea:i=>{const a=e.state??i.followState;return c.jsx(Jh,{initial:a,labels:l,size:n,onToggle:s=>{r==null||r(s)}},a)},onPropsChange:(i,a,s)=>{const u=a==null?void 0:a.followState,d=s==null?void 0:s.followState;u!=="mutual"&&d==="mutual"&&(o==null||o(d))}}}}const qh="FollowEcho",ev="关注回显：关注 / 已关注 / 互相关注三态按钮，受控于 props.followState。点击仅作乐观 UI，真相由消费方回写；关系变为 mutual 时可触发 onMutual。",tv="0.1.0",nv=["ui","follow","关注"],rv=[{name:"state",type:'"none" | "following" | "mutual"',default:"props.followState",description:"强制关注态，覆盖 props.followState"},{name:"labels",type:"Partial<Record<FollowState, ReactNode>>",default:"{ none: 关注, following: 已关注, mutual: 互相关注 }",description:"三态文案覆盖"},{name:"size",type:'"sm" | "md"',default:"md",description:"按钮尺寸"},{name:"onFollow",type:"function",default:"-",description:"点击切换后的回调"},{name:"onMutual",type:"function",default:"-",description:"关系变为 mutual 时的回调"}],ov=`// 关注按钮，受控于服务端返回的 followState。
const Profile = withPlugins(ProfileCore, [
  createFollowEchoPlugin({
    onFollow: (next) => api.toggleFollow(uid, next),
  }),
]);

<Profile followState={serverState} />;`,lv=["三态受控按钮","点击乐观切换，真相回写 props","关系变为 mutual 触发 onMutual","点击态 / 已关注态样式区分"],iv=["个人主页关注按钮","用户卡片关注态","需要关注关系回显的任意档案"],av=["按钮为受控组件，关注真相请由消费方维护并回写 props.followState。"],Xf={name:qh,description:ev,since:tv,tags:nv,config:rv,example:ov,features:lv,useCases:iv,notes:av},Tn=Object.assign(Zh,{meta:Xf});function sv(e={}){const{name:t,bio:n,location:r,joinDate:o,subtitle:l}=e,i=[r,o].filter(Boolean).join(" · ");return{name:"BioSlot",version:"0.1.0",description:"简介区：昵称 + 签名 + 所在地 / 加入时间。",priority:12,enabled:!0,hooks:{renderBioArea:a=>!t&&!l&&!n&&!i?null:c.jsxs("div",{className:"vp-bio",children:[t&&c.jsx("div",{className:"vp-bio-name",children:t}),l&&c.jsx("div",{className:"vp-bio-sub",children:l}),n&&c.jsx("div",{className:"vp-bio-text",children:n}),i&&c.jsx("div",{className:"vp-bio-meta",children:i})]})}}}const uv="BioSlot",cv="简介区：昵称 + 签名 + 所在地 / 加入时间。",fv="0.1.0",dv=["intro","bio","renderBioArea"],pv=[{name:"name",type:"ReactNode",default:"-",description:"昵称（头图已用 overlay 显示时留空，避免重复）"},{name:"subtitle",type:"ReactNode",default:"-",description:"副标题 / 职业，显示在昵称下方小字"},{name:"bio",type:"ReactNode",default:"-",description:"个性签名 / 一句话简介"},{name:"location",type:"string",default:"-",description:"所在地"},{name:"joinDate",type:"string",default:"-",description:"加入时间，如「2021 加入」"}],gv=["走 renderBioArea 领域槽，排在头图与数据行之间","name/subtitle/bio/meta 全部为空时整体不渲染（不占空间）"],mv=["个人主页的签名档","企业号的一句话简介"],hv=["与 BannerSlot 的 overlay 各自独立：overlay 浮在头图上，本插件在头像下方的简介区"],Jf={name:uv,description:cv,since:fv,tags:dv,config:pv,features:gv,useCases:mv,notes:hv},ba=Object.assign(sv,{meta:Jf}),vv={weibo:{glyph:"微",label:"微博"},zhihu:{glyph:"知",label:"知乎"},github:{glyph:"GH",label:"GitHub"},email:{glyph:"@",label:"邮箱"},site:{glyph:"网",label:"官网"},youtube:{glyph:"YT",label:"YouTube"},bilibili:{glyph:"B",label:"B 站"},twitter:{glyph:"X",label:"X"},douyin:{glyph:"抖",label:"抖音"},wechat:{glyph:"微",label:"微信"}};function yv(e={links:[]}){const{links:t,showLabel:n=!0,align:r="left"}=e;return{name:"SocialLinks",version:"0.1.0",description:"社交外链行：一排可点击的平台入口（微博 / 知乎 / GitHub …）。",priority:12,enabled:!0,hooks:{renderBioArea:o=>t.length?c.jsx("div",{className:"vp-social",style:{display:"flex",flexWrap:"wrap",gap:8,justifyContent:r==="center"?"center":r==="right"?"flex-end":"flex-start"},children:t.map((l,i)=>{const a=vv[l.platform]??{glyph:"·",label:l.platform},s=l.glyph??a.glyph,u=l.label??a.label;return c.jsxs("a",{className:"vp-social-item",href:l.href,target:"_blank",rel:"noreferrer noopener",style:{display:"inline-flex",alignItems:"center",gap:6,padding:"4px 10px",borderRadius:999,border:"1px solid rgba(125,130,140,0.35)",color:"inherit",textDecoration:"none",fontSize:13},children:[c.jsx("span",{"aria-hidden":!0,style:{width:18,height:18,borderRadius:"50%",background:"#1a5fd0",color:"#fff",fontSize:10,display:"inline-flex",alignItems:"center",justifyContent:"center",flex:"0 0 auto"},children:s}),n?c.jsx("span",{children:u}):null]},i)})}):null}}}const wv="SocialLinks",Sv="社交外链行：一排可点击的平台入口（微博 / 知乎 / GitHub …）。",xv="0.1.0",Pv=["social","links","renderBioArea"],kv=[{name:"links",type:"SocialLink[]",default:"[]",description:"外链列表，每项含 platform / href / 可选 label / glyph"},{name:"showLabel",type:"boolean",default:"true",description:"是否显示文案（仅图标字时为 false）"},{name:"align",type:"'left' | 'center' | 'right'",default:"'left'",description:"整组对齐方式"}],bv=["走 renderBioArea 领域槽，与 BioSlot / TagList 同区串联","图标用单/双字占位（无图片资源），链接新窗口打开并带 rel 防钓鱼","常见平台（微博/知乎/GitHub…）有默认文案与图标字"],_v=["主页底部的社交入口聚合","创作者主页的外链引流"],Cv=["链接一律 target=_blank + rel=noreferrer noopener，避免反向携带来源页信息"],Zf={name:wv,description:Sv,since:xv,tags:Pv,config:kv,features:bv,useCases:_v,notes:Cv},_a=Object.assign(yv,{meta:Zf});function Tv(e={tags:[]}){const{tags:t,align:n="left"}=e;return{name:"TagList",version:"0.1.0",description:"兴趣 / 标签行：一排圆角小标签。",priority:12,enabled:!0,hooks:{renderBioArea:r=>t.length?c.jsx("div",{className:"vp-tags",style:{display:"flex",flexWrap:"wrap",gap:6,justifyContent:n==="center"?"center":n==="right"?"flex-end":"flex-start"},children:t.map((o,l)=>c.jsx("span",{className:"vp-tag",style:{padding:"2px 10px",borderRadius:999,fontSize:12,lineHeight:1.6,background:"rgba(125,130,140,0.16)",color:"inherit",border:"1px solid rgba(125,130,140,0.25)"},children:o},l))}):null}}}const Ev="TagList",Rv="兴趣 / 标签行：一排圆角小标签。",jv="0.1.0",Lv=["tags","interest","renderBioArea"],Mv=[{name:"tags",type:"string[]",default:"[]",description:"标签文本列表"},{name:"align",type:"'left' | 'center' | 'right'",default:"'left'",description:"整组对齐方式"}],Nv=["走 renderBioArea 领域槽，与 BioSlot / SocialLinks 同区串联","tags 为空时整体不渲染"],$v=["个人主页的兴趣标签墙","创作者主页的内容领域标记"],Av=["标签样式用半透明底色，跟随容器文字颜色，不引入额外主题变量"],qf={name:Ev,description:Rv,since:jv,tags:Lv,config:Mv,features:Nv,useCases:$v,notes:Av},Ca=Object.assign(Tv,{meta:qf}),au=["#6a11cb","#1a5fd0","#11998e","#ff7e5f","#fc466b","#3a1c71"];function Bv(e={items:[]}){const{items:t,columns:n=3,gap:r=10,tab:o,title:l,empty:i="暂无作品"}=e;return{name:"WorksGrid",version:"0.1.0",description:"作品网格：随 activeTab 联动的内容区插件。",priority:15,enabled:!0,hooks:{renderContentArea:a=>{if(o&&a.activeTab!==o)return null;const s=c.jsx("div",{className:"vp-works-grid",style:{display:"grid",gridTemplateColumns:`repeat(${n}, 1fr)`,gap:r},children:t.map((u,d)=>{const f=u.cover??u.coverColor??au[d%au.length];return c.jsxs("figure",{className:"vp-work",style:{margin:0,borderRadius:10,overflow:"hidden",border:"1px solid rgba(125,130,140,0.22)",background:"#fff",color:"#222"},children:[c.jsx("div",{style:{aspectRatio:"1 / 1",background:u.cover?`url(${u.cover}) center/cover no-repeat`:f}}),c.jsxs("figcaption",{style:{padding:"8px 10px"},children:[c.jsx("div",{style:{fontSize:13,fontWeight:600,lineHeight:1.4},children:u.title}),u.meta?c.jsx("div",{style:{fontSize:11,color:"#6b6b6b",marginTop:2},children:u.meta}):null]})]},u.id)})});return t.length===0?c.jsx("div",{className:"vp-works-empty",style:{padding:"24px 0",textAlign:"center",opacity:.6},children:i}):l?c.jsxs("div",{className:"vp-works",children:[c.jsx("div",{className:"vp-works-title",style:{fontSize:14,fontWeight:600,marginBottom:10},children:l}),s]}):s}}}}const zv="WorksGrid",Ov="作品网格：随 activeTab 联动的内容区插件。",Iv="0.1.0",Dv=["content","grid","works","renderContentArea"],Fv=[{name:"items",type:"WorkItem[]",default:"[]",description:"作品列表，每项含 id / title / 可选 cover / coverColor / meta"},{name:"columns",type:"number",default:"3",description:"网格列数"},{name:"gap",type:"number",default:"10",description:"卡片间距（px）"},{name:"tab",type:"string",default:"-",description:"仅在某个页签激活时显示（与 TabSync 联动）；不填则始终显示"},{name:"title",type:"ReactNode",default:"-",description:"网格上方的分组标题"},{name:"empty",type:"ReactNode",default:"暂无作品",description:"空列表占位文案"}],Wv=["走 renderContentArea 领域槽，Core 有内容插件时以它替代 children","config.tab 与 context.activeTab 联动：切到对应页签才出网格","封面支持图片 URL 或纯色占位，无图也能离线演示"],Uv=["个人主页的作品 / 相册网格","创作者主页的笔记 / 视频墙"],Vv=["与 TabSync 文本 children 二选一：装了 WorksGrid 后内容区由它接管"],ed={name:zv,description:Ov,since:Iv,tags:Dv,config:Fv,features:Wv,useCases:Uv,notes:Vv},Ta=Object.assign(Bv,{meta:ed}),su={1:{bg:"#c7a06a",fg:"#fff"},2:{bg:"#9aa7b5",fg:"#fff"},3:{bg:"#e0b34a",fg:"#3a2c00"}};function Hv(e={}){const{level:t=1,label:n,showLabel:r=!0}=e,o=su[t]??su[1];return{name:"MembershipBadge",version:"0.1.0",description:"会员 / VIP 等级角标：浮于头图右上，与认证徽标同区并排。",priority:30,enabled:!0,hooks:{renderBadgeArea:l=>c.jsxs("span",{className:"vp-membership",title:`VIP ${t}`,style:{display:"inline-flex",alignItems:"center",gap:4,padding:"2px 8px",borderRadius:999,fontSize:12,fontWeight:600,background:o.bg,color:o.fg,lineHeight:1.6},children:[c.jsx("span",{"aria-hidden":!0,style:{fontSize:11},children:"♛"}),r?c.jsx("span",{children:n??`VIP${t}`}):null]})}}}const Qv="MembershipBadge",Gv="会员 / VIP 等级角标：浮于头图右上，与认证徽标同区并排。",Kv="0.1.0",Yv=["ui","badge","vip","renderBadgeArea"],Xv=[{name:"level",type:"1 | 2 | 3",default:"1",description:"会员等级，决定配色与默认文案"},{name:"label",type:"ReactNode",default:"-",description:"覆盖默认文案；缺省按 level 给 VIP{n}"},{name:"showLabel",type:"boolean",default:"true",description:"是否展示文案（仅图标时为 false）"}],Jv=`// 金色 VIP3 角标，浮于头图右上。
const Profile = withPlugins(ProfileCore, [
  createBannerSlotPlugin({ avatar: user.avatar }),
  createMembershipBadgePlugin({ level: 3 }),
]);`,Zv=["走 renderBadgeArea 领域槽，与 VerifyBadge / QRShare 同区横向并排","三档配色（VIP1 铜 / VIP2 银 / VIP3 金）","可覆盖文案，支持仅图标模式"],qv=["付费会员主页标识","社区等级展示","需要身份分级的任意档案"],ey=["浮于头图右上角；ProfileCore 已将该区设为 flex 行排，多徽标不会错位。"],td={name:Qv,description:Gv,since:Kv,tags:Yv,config:Xv,example:Jv,features:Zv,useCases:qv,notes:ey},Ea=Object.assign(Hv,{meta:td});function ty(e,t=11){const n=[];let r=0;for(let o=0;o<e.length;o++)r=r*31+e.charCodeAt(o)>>>0;for(let o=0;o<t;o++){const l=[];for(let i=0;i<t;i++)r=r*1103515245+12345>>>0,l.push((r>>16)%100<48);n.push(l)}return n}function ny({url:e,buttonLabel:t,size:n}){const[r,o]=v.useState(!1),[l,i]=v.useState(!1),a=ty(e);return c.jsxs("div",{className:"vp-qrshare",style:{position:"relative"},children:[c.jsxs("button",{type:"button",onClick:()=>o(s=>!s),style:{display:"inline-flex",alignItems:"center",gap:4,padding:"2px 10px",borderRadius:999,fontSize:12,border:"1px solid rgba(255,255,255,0.7)",background:"rgba(0,0,0,0.55)",color:"#fff",cursor:"pointer",lineHeight:1.6},children:[c.jsx("span",{"aria-hidden":!0,children:"⤴"}),t]}),r&&c.jsxs("div",{style:{position:"absolute",top:"calc(100% + 8px)",right:0,width:n+24,padding:12,borderRadius:10,background:"#fff",color:"#222",boxShadow:"0 6px 24px rgba(0,0,0,0.22)",zIndex:5},children:[c.jsx("div",{style:{width:n,height:n,display:"grid",gridTemplateColumns:`repeat(${a.length}, 1fr)`,gap:1,margin:"0 auto 8px"},children:a.flatMap((s,u)=>s.map((d,f)=>c.jsx("span",{style:{background:d?"#222":"#fff"}},`${u}-${f}`)))}),c.jsx("div",{style:{fontSize:11,wordBreak:"break-all",marginBottom:8},children:e}),c.jsx("button",{type:"button",onClick:()=>{var s;(s=navigator.clipboard)==null||s.writeText(e).then(()=>{i(!0),setTimeout(()=>i(!1),1500)},()=>{})},style:{width:"100%",padding:"4px 0",borderRadius:6,border:"none",background:"#1a5fd0",color:"#fff",fontSize:12,cursor:"pointer"},children:l?"已复制":"复制链接"})]})]})}function ry(e={}){const{url:t="https://vane.dev/u/frankvane",buttonLabel:n="分享",size:r=96}=e;return{name:"QRShare",version:"0.1.0",description:"主页二维码分享：浮于头图右上的分享按钮，点击展开二维码与复制链接。",priority:30,enabled:!0,hooks:{renderBadgeArea:o=>c.jsx(ny,{url:t,buttonLabel:n,size:r})}}}const oy="QRShare",ly="主页二维码分享：浮于头图右上的分享按钮，点击展开二维码与复制链接。",iy="0.1.0",ay=["ui","share","qr","renderBadgeArea"],sy=[{name:"url",type:"string",default:"https://vane.dev/u/frankvane",description:"要分享的主页地址"},{name:"buttonLabel",type:"ReactNode",default:"分享",description:"按钮文案"},{name:"size",type:"number",default:"96",description:"二维码占位区边长（px）"}],uy=`// 头图右上分享按钮，点击展开二维码 + 复制链接。
const Profile = withPlugins(ProfileCore, [
  createBannerSlotPlugin({ avatar: user.avatar }),
  createQRSharePlugin({ url: user.homeUrl }),
]);`,cy=["走 renderBadgeArea 领域槽，与 VerifyBadge / MembershipBadge 同区横向并排","点击展开分享面板（useState 控制）","面板提供「复制链接」（navigator.clipboard）","二维码为装饰性点阵占位，零外部依赖"],fy=["主页分享入口","线下物料扫码引流","需要快速传播主页链接的场景"],dy=["二维码为视觉占位（确定性点阵，非真实可扫码）；接入真实扫码请替换面板内的点阵为二维码库输出。"],nd={name:oy,description:ly,since:iy,tags:ay,config:sy,example:uy,features:cy,useCases:fy,notes:dy},Ra=Object.assign(ry,{meta:nd}),uu={online:{color:"#2ecc71",label:"在线"},away:{color:"#f1c40f",label:"离开"},busy:{color:"#e74c3c",label:"忙碌"},offline:{color:"#95a5a6",label:"离线"},live:{color:"#ff4757",label:"直播中"}};function py(e={}){const{status:t="online",liveTitle:n,showLabel:r=!0}=e,o=uu[t]??uu.online;return{name:"LiveStatus",version:"0.1.0",description:"在线 / 直播状态指示：圆点 + 文案，直播态高亮。",priority:12,enabled:!0,hooks:{renderBioArea:l=>c.jsxs("div",{className:"vp-livestatus",style:{display:"inline-flex",alignItems:"center",gap:6,fontSize:13,color:"inherit"},children:[c.jsx("span",{"aria-hidden":!0,style:{width:8,height:8,borderRadius:"50%",background:o.color,boxShadow:t==="live"?`0 0 0 3px ${o.color}33`:"none",flex:"0 0 auto"}}),r?c.jsxs("span",{children:[o.label,t==="live"&&n?`：${n}`:""]}):null]})}}}const gy="LiveStatus",my="在线 / 直播状态指示：圆点 + 文案，直播态高亮。",hy="0.1.0",vy=["status","live","renderBioArea"],yy=[{name:"status",type:'"online" | "away" | "busy" | "offline" | "live"',default:"online",description:"状态类型，决定圆点颜色与文案"},{name:"liveTitle",type:"string",default:"-",description:"status=live 时的直播标题"},{name:"showLabel",type:"boolean",default:"true",description:"是否展示文案（仅圆点为 false）"}],wy=`// 直播中状态，红点高亮。
const Profile = withPlugins(ProfileCore, [
  createLiveStatusPlugin({ status: "live", liveTitle: "前端架构夜聊" }),
]);`,Sy=["走 renderBioArea 领域槽，与 BioSlot / SocialLinks / TagList 同区串联","5 种状态（在线/离开/忙碌/离线/直播中）配色","直播态红点带光晕，可附直播标题"],xy=["主播 / 达人主页实时状态","客服在线标识","社区用户活跃状态"],Py=["状态为展示态，真实在线与否由消费方按业务维护并回写 config。"],rd={name:gy,description:my,since:hy,tags:vy,config:yy,example:wy,features:Sy,useCases:xy,notes:Py},ja=Object.assign(py,{meta:rd});function ky(e={}){const{email:t,phone:n,site:r,address:o,showIcon:l=!0}=e,i=[];return t&&i.push({glyph:"@",text:t,href:`mailto:${t}`}),n&&i.push({glyph:"☎",text:n,href:`tel:${n}`}),r&&i.push({glyph:"网",text:r.replace(/^https?:\/\//,""),href:r,external:!0}),o&&i.push({glyph:"📍",text:o}),{name:"ContactCard",version:"0.1.0",description:"联系信息卡：邮箱 / 电话 / 官网 / 地址，安全链接。",priority:12,enabled:!0,hooks:{renderBioArea:a=>i.length?c.jsx("div",{className:"vp-contact",style:{display:"flex",flexWrap:"wrap",gap:"6px 16px",fontSize:13,color:"inherit"},children:i.map((s,u)=>{const d=c.jsxs(c.Fragment,{children:[l&&c.jsx("span",{"aria-hidden":!0,style:{opacity:.7,marginRight:4},children:s.glyph}),c.jsx("span",{children:s.text})]});return s.href?c.jsx("a",{href:s.href,...s.external?{target:"_blank",rel:"noreferrer noopener"}:{},style:{color:"inherit",textDecoration:"none"},children:d},u):c.jsx("span",{children:d},u)})}):null}}}const by="ContactCard",_y="联系信息卡：邮箱 / 电话 / 官网 / 地址，安全链接。",Cy="0.1.0",Ty=["contact","info","renderBioArea"],Ey=[{name:"email",type:"string",default:"-",description:"邮箱，渲染为 mailto: 链接"},{name:"phone",type:"string",default:"-",description:"电话，渲染为 tel: 链接"},{name:"site",type:"string",default:"-",description:"官网，外链带 rel 防钓鱼"},{name:"address",type:"string",default:"-",description:"地址，纯文本不渲染为链接"},{name:"showIcon",type:"boolean",default:"true",description:"是否显示左侧图标字"}],Ry=`// 联系信息卡：邮箱 + 官网。
const Profile = withPlugins(ProfileCore, [
  createContactCardPlugin({ email: "frank@vane.dev", site: "https://vane.dev" }),
]);`,jy=["走 renderBioArea 领域槽，与 BioSlot / SocialLinks / TagList 同区串联","邮箱走 mailto:、电话走 tel:、官网走 http(s) 外链","外链一律 rel=noreferrer noopener，防反向携带来源页信息","四项全空时整体不渲染"],Ly=["商家 / 机构主页联系入口","创作者商务合作方式","需要公开联系方式的任意档案"],My=["地址为纯文本（不渲染为链接），避免误导用户点击。"],od={name:by,description:_y,since:Cy,tags:Ty,config:Ey,example:Ry,features:jy,useCases:Ly,notes:My},La=Object.assign(ky,{meta:od});function Ny(e={}){const{lastActive:t,postsThisMonth:n,totalViews:r,showIcon:o=!0}=e,l=[];return t&&l.push(`最近活跃 ${t}`),typeof n=="number"&&l.push(`本月发布 ${n} 篇`),r&&l.push(`总阅读 ${r}`),{name:"ActivitySummary",version:"0.1.0",description:"活跃度小结：最近活跃 / 本月发布 / 总阅读，一行小字。",priority:12,enabled:!0,hooks:{renderBioArea:i=>l.length?c.jsxs("div",{className:"vp-activity",style:{display:"inline-flex",alignItems:"center",gap:6,fontSize:12,opacity:.72,color:"inherit"},children:[o&&c.jsx("span",{"aria-hidden":!0,style:{opacity:.8},children:"◷"}),c.jsx("span",{children:l.join(" · ")})]}):null}}}const $y="ActivitySummary",Ay="活跃度小结：最近活跃 / 本月发布 / 总阅读，一行小字。",By="0.1.0",zy=["activity","meta","renderBioArea"],Oy=[{name:"lastActive",type:"string",default:"-",description:"最近活跃描述，如「2 小时前」"},{name:"postsThisMonth",type:"number",default:"-",description:"本月发布篇数"},{name:"totalViews",type:"string",default:"-",description:"总阅读量描述，如「120w」"},{name:"showIcon",type:"boolean",default:"true",description:"是否显示时钟图标字"}],Iy=`// 活跃度小结一行字。
const Profile = withPlugins(ProfileCore, [
  createActivitySummaryPlugin({ lastActive: "2 小时前", postsThisMonth: 12, totalViews: "120w" }),
]);`,Dy=["走 renderBioArea 领域槽，与简介区其他插件同区串联","三项可任意组合，全空不渲染","浅色小字，不抢简介主体"],Fy=["创作者活跃度展示","社区用户粘性提示","需要轻量数据小结的档案"],Wy=["数据由消费方计算后传入，本插件只做展示。"],ld={name:$y,description:Ay,since:By,tags:zy,config:Oy,example:Iy,features:Dy,useCases:Fy,notes:Wy},Ma=Object.assign(Ny,{meta:ld});function Uy(e={}){const{size:t="md",label:n="私信",onMessage:r}=e,o=t==="sm"?"3px 12px":"6px 18px",l=t==="sm"?12:14;return{name:"MessageButton",version:"0.1.0",description:"私信按钮：与关注回显同区并排，点击拉起会话。",priority:10,enabled:!0,hooks:{renderFollowArea:i=>c.jsx("button",{type:"button",onClick:()=>r==null?void 0:r(i),style:{padding:o,fontSize:l,borderRadius:999,border:"1px solid rgba(125,130,140,0.45)",background:"transparent",color:"inherit",cursor:"pointer",lineHeight:1.4},children:n})}}}const Vy="MessageButton",Hy="私信按钮：与关注回显同区并排，点击拉起会话。",Qy="0.1.0",Gy=["ui","message","私信","renderFollowArea"],Ky=[{name:"size",type:'"sm" | "md"',default:"md",description:"按钮尺寸"},{name:"label",type:"ReactNode",default:"私信",description:"按钮文案"},{name:"onMessage",type:"function",default:"-",description:"点击回调，参数为领域上下文"}],Yy=`// 私信按钮，与关注并排。
const Profile = withPlugins(ProfileCore, [
  createFollowEchoPlugin({ onFollow: toggleFollow }),
  createMessageButtonPlugin({ onMessage: () => openChat(uid) }),
]);`,Xy=["走 renderFollowArea 领域槽，与 FollowEcho 横向并排","描边样式，与关注实心按钮形成主次","点击触发 onMessage（消费方拉起会话）"],Jy=["主页私信入口","客服会话触发","需要一对一沟通的场景"],Zy=["按钮为无状态触发器，会话逻辑由消费方在 onMessage 里实现。"],id={name:Vy,description:Hy,since:Qy,tags:Gy,config:Ky,example:Yy,features:Xy,useCases:Jy,notes:Zy},Na=Object.assign(Uy,{meta:id});function qy(e={}){const{items:t=[],columns:n=4,gap:r=10,tab:o,title:l,empty:i="暂无成就"}=e;return{name:"AchievementWall",version:"0.1.0",description:"成就 / 勋章墙：随 activeTab 联动的内容区插件。",priority:10,enabled:!0,hooks:{renderContentArea:a=>o&&a.activeTab!==o?null:t.length?c.jsxs("div",{className:"vp-achievements",style:{padding:4},children:[l&&c.jsx("div",{style:{fontWeight:600,margin:"0 0 10px"},children:l}),c.jsx("div",{style:{display:"grid",gridTemplateColumns:`repeat(${n}, 1fr)`,gap:r},children:t.map(s=>c.jsxs("div",{title:s.desc,style:{display:"flex",flexDirection:"column",alignItems:"center",gap:6,padding:12,borderRadius:12,background:"rgba(125,130,140,0.1)",border:"1px solid rgba(125,130,140,0.18)",textAlign:"center"},children:[c.jsx("span",{"aria-hidden":!0,style:{width:40,height:40,borderRadius:"50%",background:s.color??"#1a5fd0",color:"#fff",display:"inline-flex",alignItems:"center",justifyContent:"center",fontSize:16,fontWeight:700},children:s.glyph??"★"}),c.jsx("span",{style:{fontSize:13,fontWeight:600},children:s.title}),s.desc&&c.jsx("span",{style:{fontSize:11,opacity:.7},children:s.desc})]},s.id))})]}):c.jsx("div",{style:{padding:16,opacity:.6},children:i})}}}const e0="AchievementWall",t0="成就 / 勋章墙：随 activeTab 联动的内容区插件。",n0="0.1.0",r0=["content","achievement","renderContentArea"],o0=[{name:"items",type:"AchievementItem[]",default:"[]",description:"成就列表，每项含 id / title / 可选 desc / glyph / color"},{name:"columns",type:"number",default:"4",description:"网格列数"},{name:"gap",type:"number",default:"10",description:"卡片间距（px）"},{name:"tab",type:"string",default:"-",description:"仅在某个页签激活时显示（与 TabSync 联动）；不填则始终显示"},{name:"title",type:"ReactNode",default:"-",description:"分组标题"},{name:"empty",type:"ReactNode",default:"暂无成就",description:"空列表占位文案"}],l0=`// 成就墙，挂在「关于」页签下。
const Profile = withPlugins(ProfileCore, [
  createTabSyncPlugin({ tabs: [{ id: "about", label: "关于" }] }),
  createAchievementWallPlugin({ items: user.badges, tab: "about", title: "成就" }),
]);`,i0=["走 renderContentArea 领域槽，Core 有内容插件时替代 children","config.tab 与 context.activeTab 联动：切到对应页签才出墙","图标用单/双字占位，无图也能离线演示","与 WorksGrid 同区可共存（按 priority 纵向排列）"],a0=["个人主页成就展示","创作者荣誉墙","游戏 / 社区勋章系统"],s0=["与 WorksGrid 同在内容区时，两者按 priority 纵向排列，互不覆盖。"],ad={name:e0,description:t0,since:n0,tags:r0,config:o0,example:l0,features:i0,useCases:a0,notes:s0},$a=Object.assign(qy,{meta:ad}),u0=(e,t)=>"data:image/svg+xml;utf8,"+encodeURIComponent(`<svg xmlns="http://www.w3.org/2000/svg" width="96" height="96" viewBox="0 0 96 96"><rect width="96" height="96" rx="48" fill="${e}"/><text x="48" y="62" font-size="44" text-anchor="middle" fill="#fff" font-family="sans-serif">${t}</text></svg>`),Gt=u0("#1a5fd0","F"),B={name:"Frank Vane",handle:"frankvane",bio:"把「旁边那一堆需求」拆成可勾选的插件。",stats:[{value:1280,label:"关注"},{value:"12.4w",label:"粉丝"},{value:4823,label:"获赞"},{value:9,label:"作品"}]},c0={works:"这里是「作品」区：图文卡片、视频、长文混排。",feeds:"这里是「动态」区：时间线式的短内容流。",about:"这里是「关于」区：简介、标签、外链。"},Aa=[{platform:"weibo",href:"https://weibo.com/"},{platform:"zhihu",href:"https://www.zhihu.com/"},{platform:"github",href:"https://github.com/"},{platform:"email",href:"mailto:frank@vane.dev"},{platform:"site",href:"https://vane.dev/"}],Ba=["React","TypeScript","组件库","设计系统","可视化","开源"],za=[{id:"w1",title:"vane-waterfall 重构笔记",coverColor:"#6a11cb",meta:"2.4w 阅读"},{id:"w2",title:"插件化架构实战",coverColor:"#1a5fd0",meta:"1.1w 点赞"},{id:"w3",title:"从 0 写一个组件库",coverColor:"#11998e",meta:"8.6k 收藏"},{id:"w4",title:"拖拽排序的 7 种实现",coverColor:"#ff7e5f",meta:"3 周前"},{id:"w5",title:"可视化排版台",coverColor:"#fc466b",meta:"团队协作"},{id:"w6",title:"暗色主题规范",coverColor:"#3a1c71",meta:"设计稿"}],sd={level:3},ud={status:"live",liveTitle:"前端架构夜聊"},Oa={email:"frank@vane.dev",phone:"138-0000-0000",site:"https://vane.dev",address:"上海 · 徐汇"},Ia={lastActive:"2 小时前",postsThisMonth:12,totalViews:"120w"},Da=[{id:"a1",title:"年度创作者",desc:"2025",glyph:"年",color:"#e0b34a"},{id:"a2",title:"万粉",desc:"粉丝破万",glyph:"万",color:"#1a5fd0"},{id:"a3",title:"开源之星",desc:"50+ repo",glyph:"星",color:"#11998e"},{id:"a4",title:"优质教程",desc:"官方推荐",glyph:"优",color:"#fc466b"},{id:"a5",title:"连续打卡",desc:"365 天",glyph:"勤",color:"#ff7e5f"},{id:"a6",title:"社区领袖",desc:"版主",glyph:"领袖",color:"#6a11cb"},{id:"a7",title:"早期用户",desc:"内测",glyph:"初",color:"#9aa7b5"},{id:"a8",title:"乐于助人",desc:"解答 1k+",glyph:"助",color:"#2ecc71"}];function f0(){const e=xr(),t=(e==null?void 0:e.activeTab)??"works";return c.jsxs("div",{style:{minHeight:120,fontSize:14,lineHeight:1.8,opacity:.8},children:[c.jsx("b",{children:t})," 页：Core 的 children 兜底内容。"]})}const d0={slug:"quickstart",title:"最小可用主页",group:"basic",capability:"core-assembly",intro:"Core + 最少插件（BannerSlot + StatRow + FollowEcho）装配出可用主页。",why:"先跑通最小组合，再按需叠加插件——这正是插件式主页的增量开发方式。",plugs:[{fn:"createBannerSlotPlugin",cfg:"gradient: [...], avatar: user.avatar",why:"头图区"},{fn:"createStatRowPlugin",cfg:"items: user.stats",why:"数据行"},{fn:"createFollowEchoPlugin",cfg:"size: 'md'",why:"关注按钮"}],props:["stats={user.stats}","followState={serverState}"],controls:[{key:"verified",label:"加认证徽标",kind:"switch",init:!1},{key:"withTab",label:"加页签 + 内容区",kind:"switch",init:!1}],stageHeight:320};function p0({cfg:e}){const t=!!e.verified,n=!!e.withTab,r=v.useMemo(()=>ee(J,[Qt({gradient:["#6a11cb","#1a5fd0"],avatar:Gt,avatarRound:!0,height:150,overlay:c.jsx("strong",{children:B.name})}),Pr({items:B.stats}),...n?[kr({tabs:[{id:"works",label:"作品"},{id:"about",label:"关于"}]})]:[],...t?[Qo({type:"personal"})]:[],Tn({size:"md"})]),[t,n]);return c.jsx(r,{containerStyle:{maxWidth:420,margin:"0 auto"},stats:B.stats,verified:t,badgeType:"personal",followState:"none",banner:c.jsxs("span",{children:["@",B.handle]}),defaultActiveTab:n?"works":void 0,children:n?c.jsx(f0,{}):null})}const g0=Object.freeze(Object.defineProperty({__proto__:null,default:p0,meta:d0},Symbol.toStringTag,{value:"Module"})),cu={violet:["#6a11cb","#1a5fd0"],sunset:["#ff7e5f","#feb47b"],mint:["#11998e","#38ef7d"],ink:["#232526","#414345"]},m0={slug:"banner",title:"头图区 BannerSlot",group:"plugin",plugin:"BannerSlot",intro:"封面渐变 + 头像浮层 + 昵称标语叠加，走领域槽 renderBannerArea。",why:"主页第一眼就是头图；把它做成插件，封面/头像/文案都能独立替换，Core 永远不碰样式。",plugs:[{fn:"createBannerSlotPlugin",cfg:"gradient: ['#6a11cb','#1a5fd0'], avatar: user.avatar, height: 160, overlay: <strong>{user.name}</strong>",why:"负责头图区渲染：渐变/封面背景 + 头像浮层 + 文案叠加"}],props:["banner={<span>@{user.handle}</span>}"],controls:[{key:"gradient",label:"渐变配色",kind:"select",init:"violet",options:[{label:"紫蓝 violet",value:"violet"},{label:"暖阳 sunset",value:"sunset"},{label:"薄荷 mint",value:"mint"},{label:"墨灰 ink",value:"ink"}]},{key:"avatar",label:"显示头像",kind:"switch",init:!0},{key:"round",label:"圆角头像",kind:"switch",init:!0},{key:"height",label:"头图高度",kind:"number",init:160,min:110,max:240,step:10}],stageHeight:320};function h0({cfg:e}){const t=String(e.gradient),n=cu[t]??cu.violet,r=v.useMemo(()=>ee(J,[Qt({gradient:n,avatar:e.avatar?Gt:void 0,avatarRound:!!e.round,height:Number(e.height),overlay:c.jsx("strong",{children:B.name})})]),[n,e.avatar,e.round,e.height]);return c.jsx(r,{containerStyle:{maxWidth:420,margin:"0 auto"},banner:c.jsxs("span",{children:["@",B.handle]})})}const v0=Object.freeze(Object.defineProperty({__proto__:null,default:h0,meta:m0},Symbol.toStringTag,{value:"Module"})),y0={slug:"statrow",title:"数据行 StatRow",group:"plugin",plugin:"StatRow",intro:"关注 / 粉丝 / 获赞 / 作品横排展示，每项「值 + 标签」。",why:"指标展示是主页标配；做成插件后 row/column、分隔线、点击联动都由配置决定，Core 不掺样式。",plugs:[{fn:"createStatRowPlugin",cfg:"items: user.stats, direction: 'row', divider: true",why:"负责数据行渲染，数据源来自 config.items 或 props.stats"}],props:["stats={user.stats}"],controls:[{key:"direction",label:"排布方向",kind:"select",init:"row",options:[{label:"横排 row",value:"row"},{label:"竖排 column",value:"column"}]},{key:"divider",label:"项间分隔线",kind:"switch",init:!0}],stageHeight:260};function w0({cfg:e}){const t=v.useMemo(()=>ee(J,[Pr({items:B.stats,direction:e.direction==="column"?"column":"row",divider:!!e.divider})]),[e.direction,e.divider]);return c.jsx(t,{containerStyle:{maxWidth:420,margin:"0 auto"},stats:B.stats})}const S0=Object.freeze(Object.defineProperty({__proto__:null,default:w0,meta:y0},Symbol.toStringTag,{value:"Module"}));function x0(){const e=xr(),t=(e==null?void 0:e.activeTab)??"works";return c.jsxs("div",{style:{minHeight:120,fontSize:14,lineHeight:1.8,color:"#4a5056"},children:[c.jsx("b",{style:{color:"#1f2328"},children:t})," —— ",c0[t]??"（空）",c.jsxs("p",{style:{marginTop:12,color:"#6b6b6b",fontSize:12},children:["当前 activeTab 经 ",c.jsx("code",{children:"useProfileContext()"})," 读取：",String(t)]})]})}const P0={slug:"tabsync",title:"页签系统 TabSync",group:"plugin",plugin:"TabSync",intro:"渲染页签栏（underline / pill / segmented）+ 切换联动内容区。",why:"多内容区主页的核心交互；内容怎么渲染交给消费方子节点，TabSync 只管「切」。",plugs:[{fn:"createTabSyncPlugin",cfg:"tabs: [{id:'works',label:'作品'},{id:'feeds',label:'动态'},{id:'about',label:'关于'}], variant: 'underline'",why:"渲染页签栏 + 点击调 context.setActiveTab，内容区订阅后自动重渲染"}],props:['defaultActiveTab="works"'],controls:[{key:"variant",label:"样式变体",kind:"select",init:"underline",options:[{label:"下划线 underline",value:"underline"},{label:"胶囊 pill",value:"pill"},{label:"分段 segmented",value:"segmented"}]},{key:"sticky",label:"吸顶",kind:"switch",init:!1},{key:"scrollTop",label:"切换滚到顶部",kind:"switch",init:!0}],stageHeight:300},k0=[{id:"works",label:"作品"},{id:"feeds",label:"动态"},{id:"about",label:"关于"}];function b0({cfg:e,log:t}){const n=v.useMemo(()=>ee(J,[kr({tabs:k0,variant:e.variant,sticky:!!e.sticky,scrollTopOnChange:!!e.scrollTop,onChange:r=>t(`切换到 ${r}`)})]),[e.variant,e.sticky,e.scrollTop]);return c.jsx(n,{containerStyle:{maxWidth:420,margin:"0 auto"},defaultActiveTab:"works",children:c.jsx(x0,{})})}const _0=Object.freeze(Object.defineProperty({__proto__:null,default:b0,meta:P0},Symbol.toStringTag,{value:"Module"})),C0={slug:"verifybadge",title:"认证徽标 VerifyBadge",group:"plugin",plugin:"VerifyBadge",intro:"个人 / 机构认证对勾（内联 SVG），浮于头图右上角。",why:"信任标识是主页的「小但重要」需求；做成插件，认证态/类型都可配置，不污染 Core。",plugs:[{fn:"createVerifyBadgePlugin",cfg:"type: 'personal', showLabel: true",why:"负责认证徽标渲染，verified=false 时自动隐藏"}],props:["verified",'badgeType="personal"'],controls:[{key:"verified",label:"已认证",kind:"switch",init:!0},{key:"type",label:"认证类型",kind:"select",init:"personal",options:[{label:"个人 personal",value:"personal"},{label:"机构 institution",value:"institution"}]},{key:"showLabel",label:"显示文字",kind:"switch",init:!0}],stageHeight:200};function T0({cfg:e}){const t=v.useMemo(()=>ee(J,[Qo({type:e.type,showLabel:!!e.showLabel})]),[e.type,e.showLabel]);return c.jsx(t,{containerStyle:{maxWidth:420,margin:"0 auto"},verified:!!e.verified,badgeType:e.type})}const E0=Object.freeze(Object.defineProperty({__proto__:null,default:T0,meta:C0},Symbol.toStringTag,{value:"Module"})),R0={slug:"followecho",title:"关注回显 FollowEcho",group:"plugin",plugin:"FollowEcho",intro:"关注 / 已关注 / 互相关注三态按钮，受控于 props.followState。",why:"关注关系是服务端真相；做成受控插件，点击只作乐观 UI，真相回写 props，不把状态塞进 Core。",plugs:[{fn:"createFollowEchoPlugin",cfg:"size: 'md', onFollow: (next) => api.toggleFollow(uid, next)",why:"负责关注按钮渲染 + 乐观切换；关系变 mutual 时触发 onMutual"}],props:["followState={serverState}"],controls:[{key:"state",label:"初始关注态",kind:"select",init:"none",options:[{label:"未关注 none",value:"none"},{label:"已关注 following",value:"following"},{label:"互相关注 mutual",value:"mutual"}]},{key:"size",label:"按钮尺寸",kind:"select",init:"md",options:[{label:"中 md",value:"md"},{label:"小 sm",value:"sm"}]}],stageHeight:200};function j0({cfg:e,log:t}){const n=v.useMemo(()=>ee(J,[Tn({size:e.size,onFollow:r=>t(`点击 → ${r}`),onMutual:()=>t("关系变为 mutual","info")})]),[e.size]);return c.jsx(n,{containerStyle:{maxWidth:420,margin:"0 auto"},followState:e.state})}const L0=Object.freeze(Object.defineProperty({__proto__:null,default:j0,meta:R0},Symbol.toStringTag,{value:"Module"})),M0={slug:"bio",title:"简介区 BioSlot",group:"plugin",plugin:"BioSlot",intro:"昵称 + 签名 + 所在地 / 加入时间，走领域槽 renderBioArea。",why:"主页「我是谁」的签名档；做成插件后头图与数据行之间多了一段结构化简介，Core 永远不碰文案。",plugs:[{fn:"createBioSlotPlugin",cfg:"name: user.name, bio: user.bio, location: '上海', joinDate: '2021 加入'",why:"负责简介区渲染，排在头图与数据行之间；全部为空时不占空间"}],props:[],controls:[{key:"showName",label:"显示昵称",kind:"switch",init:!0},{key:"showBio",label:"显示签名",kind:"switch",init:!0},{key:"showMeta",label:"显示地点/时间",kind:"switch",init:!0}],stageHeight:220};function N0({cfg:e}){const t=v.useMemo(()=>ee(J,[ba({name:e.showName?B.name:void 0,bio:e.showBio?B.bio:void 0,location:e.showMeta?"上海":void 0,joinDate:e.showMeta?"2021 加入":void 0})]),[e.showName,e.showBio,e.showMeta]);return c.jsx(t,{containerStyle:{maxWidth:420,margin:"0 auto"}})}const $0=Object.freeze(Object.defineProperty({__proto__:null,default:N0,meta:M0},Symbol.toStringTag,{value:"Module"})),A0={slug:"social",title:"社交外链 SocialLinks",group:"plugin",plugin:"SocialLinks",intro:"一排可点击的平台入口（微博 / 知乎 / GitHub …），走领域槽 renderBioArea。",why:"主页底部的外链聚合；做成插件后入口列表完全数据驱动，Core 不掺任何平台样式。",plugs:[{fn:"createSocialLinksPlugin",cfg:"links: [...], showLabel: true, align: 'left'",why:"负责社交外链行渲染；常见平台有默认图标字与文案"}],props:[],controls:[{key:"showLabel",label:"显示文案",kind:"switch",init:!0},{key:"align",label:"对齐",kind:"select",init:"left",options:[{label:"左 left",value:"left"},{label:"中 center",value:"center"},{label:"右 right",value:"right"}]}],stageHeight:200};function B0({cfg:e}){const t=v.useMemo(()=>ee(J,[_a({links:Aa,showLabel:!!e.showLabel,align:e.align})]),[e.showLabel,e.align]);return c.jsx(t,{containerStyle:{maxWidth:420,margin:"0 auto"}})}const z0=Object.freeze(Object.defineProperty({__proto__:null,default:B0,meta:A0},Symbol.toStringTag,{value:"Module"})),O0={slug:"tags",title:"兴趣标签 TagList",group:"plugin",plugin:"TagList",intro:"一排圆角小标签，走领域槽 renderBioArea。",why:"兴趣 / 内容领域标记；做成插件后标签完全数据驱动，Core 不掺样式。",plugs:[{fn:"createTagListPlugin",cfg:"tags: ['React','TypeScript','组件库', …]",why:"负责标签行渲染；tags 为空时整体不渲染"}],props:[],controls:[{key:"align",label:"对齐",kind:"select",init:"left",options:[{label:"左 left",value:"left"},{label:"中 center",value:"center"},{label:"右 right",value:"right"}]}],stageHeight:160};function I0({cfg:e}){const t=v.useMemo(()=>ee(J,[Ca({tags:Ba,align:e.align})]),[e.align]);return c.jsx(t,{containerStyle:{maxWidth:420,margin:"0 auto"}})}const D0=Object.freeze(Object.defineProperty({__proto__:null,default:I0,meta:O0},Symbol.toStringTag,{value:"Module"}));function F0(){const e=xr(),t=(e==null?void 0:e.activeTab)??"works";return c.jsxs("div",{style:{minHeight:120,fontSize:14,lineHeight:1.8,opacity:.8},children:[c.jsx("b",{children:t})," 页：这里放该页签的自定义内容（children 兜底）。"]})}const W0={slug:"worksgrid",title:"作品网格 WorksGrid",group:"plugin",plugin:"WorksGrid",intro:"内容区作品网格（CSS grid），走领域槽 renderContentArea，可随页签联动。",why:"主页「内容」通常是网格；做成内容区插件后，Core 有内容插件时以它替代 children，且能与 TabSync 的 activeTab 联动。",plugs:[{fn:"createWorksGridPlugin",cfg:"items: user.works, columns: 3, tab: 'works'",why:"负责内容区网格渲染；tab 与 context.activeTab 联动，切到作品页才出网格"}],props:["（有 WorksGrid 时内容区由它接管，不再用 children）"],controls:[{key:"columns",label:"列数",kind:"number",init:3,min:2,max:4,step:1},{key:"showTitle",label:"显示分组标题",kind:"switch",init:!0},{key:"withTab",label:"随页签联动（含 TabSync）",kind:"switch",init:!0}],stageHeight:360},U0=[{id:"works",label:"作品"},{id:"about",label:"关于"}];function V0({cfg:e,log:t}){const n=Number(e.columns),r=!!e.withTab,o=v.useMemo(()=>ee(J,[...r?[kr({tabs:U0,onChange:l=>t(`切到 ${l}`)})]:[],Ta({items:za,columns:n,title:e.showTitle?"精选作品":void 0,tab:r?"works":void 0})]),[r,n,e.showTitle]);return c.jsx(o,{containerStyle:{maxWidth:460,margin:"0 auto"},defaultActiveTab:r?"works":void 0,children:r?c.jsx(F0,{}):null})}const H0=Object.freeze(Object.defineProperty({__proto__:null,default:V0,meta:W0},Symbol.toStringTag,{value:"Module"})),Q0=[{id:"works",label:"作品"},{id:"feeds",label:"动态"},{id:"about",label:"关于"}];function G0(){const e=xr(),t=(e==null?void 0:e.activeTab)??"works";return c.jsxs("div",{style:{minHeight:120,fontSize:14,lineHeight:1.8,opacity:.8},children:[c.jsx("b",{children:t})," 页：Core 的 children 兜底内容。"]})}const K0={slug:"full-combo",title:"全功能组合",group:"advanced",capability:"all-plugins",intro:"16 个官方插件逐个开关，实时生成对应装配代码。",why:"把分散的插件页串起来：一个主页就是「挑插件 + 写配置」，没有一行样式散落在业务里。",plugs:[{fn:"createBannerSlotPlugin",cfg:"gradient: [...], avatar: user.avatar",why:"头图区"},{fn:"createBioSlotPlugin",cfg:"name, bio, location, joinDate",why:"简介区"},{fn:"createStatRowPlugin",cfg:"items: user.stats",why:"数据行"},{fn:"createSocialLinksPlugin",cfg:"links: [...]",why:"社交外链"},{fn:"createTagListPlugin",cfg:"tags: [...]",why:"兴趣标签"},{fn:"createTabSyncPlugin",cfg:"tabs: [...]",why:"页签栏 + 内容联动"},{fn:"createVerifyBadgePlugin",cfg:"type: 'personal'",why:"认证徽标"},{fn:"createFollowEchoPlugin",cfg:"size: 'md'",why:"关注按钮"},{fn:"createWorksGridPlugin",cfg:"items: user.works, tab: 'works'",why:"作品网格（内容区）"},{fn:"createMembershipBadgePlugin",cfg:"level: 3",why:"会员角标（徽标区）"},{fn:"createQRSharePlugin",cfg:"url: user.homeUrl",why:"二维码分享（徽标区）"},{fn:"createLiveStatusPlugin",cfg:"status: 'live'",why:"在线/直播状态（简介区）"},{fn:"createContactCardPlugin",cfg:"email, site, address",why:"联系信息（简介区）"},{fn:"createActivitySummaryPlugin",cfg:"lastActive, postsThisMonth",why:"活跃度小结（简介区）"},{fn:"createMessageButtonPlugin",cfg:"label: '私信'",why:"私信按钮（关注区）"},{fn:"createAchievementWallPlugin",cfg:"items: user.badges, tab: 'about'",why:"成就墙（内容区）"}],props:["verified","stats={user.stats}","followState={serverState}"],controls:[{key:"banner",label:"BannerSlot",kind:"switch",init:!0},{key:"bio",label:"BioSlot",kind:"switch",init:!0},{key:"stat",label:"StatRow",kind:"switch",init:!0},{key:"social",label:"SocialLinks",kind:"switch",init:!0},{key:"tags",label:"TagList",kind:"switch",init:!0},{key:"tab",label:"TabSync",kind:"switch",init:!0},{key:"badge",label:"VerifyBadge",kind:"switch",init:!0},{key:"follow",label:"FollowEcho",kind:"switch",init:!0},{key:"works",label:"WorksGrid",kind:"switch",init:!0},{key:"membership",label:"MembershipBadge",kind:"switch",init:!0},{key:"qrshare",label:"QRShare",kind:"switch",init:!0},{key:"live",label:"LiveStatus",kind:"switch",init:!0},{key:"contact",label:"ContactCard",kind:"switch",init:!0},{key:"activity",label:"ActivitySummary",kind:"switch",init:!0},{key:"message",label:"MessageButton",kind:"switch",init:!0},{key:"achievements",label:"AchievementWall",kind:"switch",init:!0}],stageHeight:560};function Y0({cfg:e}){const t=!!e.tab,n=v.useMemo(()=>{const r=[];return e.banner&&r.push(Qt({gradient:["#6a11cb","#1a5fd0"],avatar:Gt,avatarRound:!0,height:150,overlay:c.jsx("strong",{children:B.name})})),e.bio&&r.push(ba({name:B.name,subtitle:"前端工程师 · 组件库作者",bio:B.bio,location:"上海",joinDate:"2021 加入"})),e.stat&&r.push(Pr({items:B.stats})),e.social&&r.push(_a({links:Aa})),e.tags&&r.push(Ca({tags:Ba})),t&&r.push(kr({tabs:Q0})),e.badge&&r.push(Qo({type:"personal"})),e.follow&&r.push(Tn({size:"md"})),e.works&&r.push(Ta({items:za,columns:3,title:"精选作品",tab:t?"works":void 0})),e.membership&&r.push(Ea(sd)),e.qrshare&&r.push(Ra({url:"https://vane.dev/u/frankvane"})),e.live&&r.push(ja(ud)),e.contact&&r.push(La(Oa)),e.activity&&r.push(Ma(Ia)),e.message&&r.push(Na({label:"私信"})),e.achievements&&r.push($a({items:Da,columns:4,title:"成就",tab:t?"about":void 0})),ee(J,r)},[e.banner,e.bio,e.stat,e.social,e.tags,t,e.badge,e.follow,e.works,e.membership,e.qrshare,e.live,e.contact,e.activity,e.message,e.achievements]);return c.jsx(n,{containerStyle:{maxWidth:460,margin:"0 auto"},stats:B.stats,verified:!!e.badge,badgeType:"personal",followState:"none",banner:c.jsxs("span",{children:["@",B.handle]}),defaultActiveTab:t?"works":void 0,children:t?c.jsx(G0,{}):null})}const X0=Object.freeze(Object.defineProperty({__proto__:null,default:Y0,meta:K0},Symbol.toStringTag,{value:"Module"})),J0={slug:"dynamic-control",title:"受控与事件",group:"advanced",capability:"controlled-state",intro:"followState 走 props 受控，点击关注回调 onFollow / onMutual，coreRef 读状态与强刷。",why:"真实业务里关注关系是服务端真相，UI 只是乐观回显；这页演示怎么把插件接到你自己的状态机。",plugs:[{fn:"createFollowEchoPlugin",cfg:"onFollow, onMutual",why:"受控三态按钮 + 回调"}],props:["followState={serverState}","onFollow","onMutual"],controls:[],stageHeight:300},Z0=["none","following","mutual"],q0={none:"未关注",following:"已关注",mutual:"互相关注"};function e1({cfg:e,log:t}){const[n,r]=v.useState("none"),o=v.useRef(null),l=v.useMemo(()=>ee(J,[Qt({gradient:["#1a5fd0","#6a11cb"],avatar:Gt,avatarRound:!0,height:140,overlay:c.jsx("strong",{children:B.name})}),Pr({items:B.stats}),Tn({size:"md",onFollow:i=>{r(i),t(`onFollow → ${i}`,"event")},onMutual:i=>t(`onMutual → ${i}（关系变为互相关注）`,"info")})]),[]);return c.jsxs("div",{children:[c.jsxs("div",{style:{display:"flex",gap:8,marginBottom:12,flexWrap:"wrap"},children:[Z0.map(i=>c.jsx("button",{type:"button",onClick:()=>{r(i),t(`外部设置 followState = ${i}`)},style:{padding:"6px 12px",borderRadius:8,border:"1px solid rgba(125,130,140,0.4)",background:n===i?"#1a5fd0":"transparent",color:n===i?"#fff":"inherit",cursor:"pointer"},children:q0[i]},i)),c.jsx("button",{type:"button",onClick:()=>{var s,u;const i=(s=o.current)==null?void 0:s.getActiveTab(),a=(u=o.current)==null?void 0:u.getSize();t(`coreRef: activeTab=${i}, 容器=${a==null?void 0:a.width}×${a==null?void 0:a.height}`,"info")},style:{padding:"6px 12px",borderRadius:8,border:"1px dashed rgba(125,130,140,0.5)",background:"transparent",color:"inherit",cursor:"pointer"},children:"读 coreRef"}),c.jsx("button",{type:"button",onClick:()=>{var i;return(i=o.current)==null?void 0:i.forceUpdate()},style:{padding:"6px 12px",borderRadius:8,border:"1px dashed rgba(125,130,140,0.5)",background:"transparent",color:"inherit",cursor:"pointer"},children:"强制刷新"})]}),c.jsx(l,{ref:o,containerStyle:{maxWidth:420,margin:"0 auto"},stats:B.stats,followState:n,banner:c.jsxs("span",{children:["@",B.handle]})})]})}const t1=Object.freeze(Object.defineProperty({__proto__:null,default:e1,meta:J0},Symbol.toStringTag,{value:"Module"})),n1={slug:"membership",title:"会员角标 MembershipBadge",group:"plugin",plugin:"MembershipBadge",intro:"会员 / VIP 等级角标，浮于头图右上，与认证徽标同区并排。",why:"付费会员 / 社区等级的可视标识；做成插件后头图右上多了一块身份区，Core 不碰配色。",plugs:[{fn:"createBannerSlotPlugin",cfg:"avatar: user.avatar, overlay: user.name",why:"提供头图背景，让角标落在它应有的右上角"},{fn:"createMembershipBadgePlugin",cfg:"level: {{level}}, showLabel: true",why:"负责会员角标渲染，与 VerifyBadge / QRShare 横向并排"}],props:[],controls:[{key:"level",label:"等级",kind:"select",init:"3",options:[{label:"VIP1",value:"1"},{label:"VIP2",value:"2"},{label:"VIP3",value:"3"}]}],stageHeight:220};function r1({cfg:e}){const t=v.useMemo(()=>ee(J,[Qt({gradient:["#6a11cb","#1a5fd0"],avatar:Gt,overlay:B.name}),Ea({level:Number(e.level)})]),[e.level]);return c.jsx(t,{containerStyle:{maxWidth:420,margin:"0 auto"}})}const o1=Object.freeze(Object.defineProperty({__proto__:null,default:r1,meta:n1},Symbol.toStringTag,{value:"Module"})),l1={slug:"qrshare",title:"二维码分享 QRShare",group:"plugin",plugin:"QRShare",intro:"主页二维码分享：浮于头图右上的分享按钮，点击展开二维码与复制链接。",why:"主页传播入口；做成插件后头图右上多了一块交互区，弹层用内部 state 控制，不污染 Core。",plugs:[{fn:"createBannerSlotPlugin",cfg:"avatar: user.avatar, overlay: user.name",why:"提供头图背景，让分享按钮落在它应有的右上角"},{fn:"createQRSharePlugin",cfg:"url: user.homeUrl, buttonLabel: '分享'",why:"负责分享按钮与弹层，与 VerifyBadge / MembershipBadge 横向并排"}],props:[],controls:[],stageHeight:240,note:"点击右上角「分享」按钮查看二维码占位面板（装饰性点阵，非真实可扫码）。"};function i1({cfg:e}){const t=v.useMemo(()=>ee(J,[Qt({gradient:["#6a11cb","#1a5fd0"],avatar:Gt,overlay:B.name}),Ra({url:"https://vane.dev/u/frankvane"})]),[]);return c.jsx(t,{containerStyle:{maxWidth:420,margin:"0 auto"}})}const a1=Object.freeze(Object.defineProperty({__proto__:null,default:i1,meta:l1},Symbol.toStringTag,{value:"Module"})),s1={slug:"livestatus",title:"在线状态 LiveStatus",group:"plugin",plugin:"LiveStatus",intro:"在线 / 直播状态指示：圆点 + 文案，直播态高亮。",why:"主播 / 客服 / 社区的实时状态；做成插件后简介区多了一块状态行，Core 不碰业务。",plugs:[{fn:"createLiveStatusPlugin",cfg:"status: '{{status}}', liveTitle: '前端架构夜聊'",why:"负责状态行渲染，排在简介区，与 BioSlot / SocialLinks 同区串联"}],props:[],controls:[{key:"status",label:"状态",kind:"select",init:"live",options:[{label:"在线",value:"online"},{label:"离开",value:"away"},{label:"忙碌",value:"busy"},{label:"离线",value:"offline"},{label:"直播中",value:"live"}]}],stageHeight:120};function u1({cfg:e}){const t=v.useMemo(()=>ee(J,[ja({status:e.status,liveTitle:"前端架构夜聊"})]),[e.status]);return c.jsx(t,{containerStyle:{maxWidth:420,margin:"0 auto"}})}const c1=Object.freeze(Object.defineProperty({__proto__:null,default:u1,meta:s1},Symbol.toStringTag,{value:"Module"})),f1={slug:"contact",title:"联系信息 ContactCard",group:"plugin",plugin:"ContactCard",intro:"联系信息卡：邮箱 / 电话 / 官网 / 地址，安全链接。",why:"商家 / 创作者公开联系方式；做成插件后简介区多了一块联系入口，外链带 rel 防钓鱼。",plugs:[{fn:"createContactCardPlugin",cfg:"email: user.email, site: user.site, address: user.address",why:"负责联系信息渲染，排在简介区，与 BioSlot / SocialLinks 同区串联"}],props:[],controls:[],stageHeight:120};function d1({cfg:e}){const t=v.useMemo(()=>ee(J,[La(Oa)]),[]);return c.jsx(t,{containerStyle:{maxWidth:460,margin:"0 auto"}})}const p1=Object.freeze(Object.defineProperty({__proto__:null,default:d1,meta:f1},Symbol.toStringTag,{value:"Module"})),g1={slug:"activity",title:"活跃度小结 ActivitySummary",group:"plugin",plugin:"ActivitySummary",intro:"活跃度小结：最近活跃 / 本月发布 / 总阅读，一行小字。",why:"创作者活跃度 / 社区粘性提示；做成插件后简介区多了一块轻量数据，不抢主体。",plugs:[{fn:"createActivitySummaryPlugin",cfg:"lastActive: '2 小时前', postsThisMonth: 12, totalViews: '120w'",why:"负责活跃度小结渲染，排在简介区，与 BioSlot / SocialLinks 同区串联"}],props:[],controls:[],stageHeight:120};function m1({cfg:e}){const t=v.useMemo(()=>ee(J,[Ma(Ia)]),[]);return c.jsx(t,{containerStyle:{maxWidth:460,margin:"0 auto"}})}const h1=Object.freeze(Object.defineProperty({__proto__:null,default:m1,meta:g1},Symbol.toStringTag,{value:"Module"})),v1={slug:"message",title:"私信按钮 MessageButton",group:"plugin",plugin:"MessageButton",intro:"私信按钮：与关注回显同区并排，点击拉起会话。",why:"主页一对一沟通入口；做成插件后关注区多了一块描边按钮，与关注形成主次。",plugs:[{fn:"createFollowEchoPlugin",cfg:"size: 'md'",why:"提供关注态，让私信按钮落在它应有的并排位置"},{fn:"createMessageButtonPlugin",cfg:"label: '私信', onMessage: () => openChat(uid)",why:"负责私信按钮渲染，与 FollowEcho 横向并排"}],props:[],controls:[{key:"showMsg",label:"显示私信按钮",kind:"switch",init:!0}],stageHeight:120};function y1({cfg:e}){const t=v.useMemo(()=>ee(J,[Tn({size:"md",state:"following"}),...e.showMsg?[Na({label:"私信",onMessage:()=>{}})]:[]]),[e.showMsg]);return c.jsx(t,{containerStyle:{maxWidth:420,margin:"0 auto"}})}const w1=Object.freeze(Object.defineProperty({__proto__:null,default:y1,meta:v1},Symbol.toStringTag,{value:"Module"})),S1={slug:"achievements",title:"成就墙 AchievementWall",group:"plugin",plugin:"AchievementWall",intro:"成就 / 勋章墙：随 activeTab 联动的内容区插件。",why:"个人主页荣誉展示；做成内容区插件后，切到对应页签才出墙，与 WorksGrid 同区可共存。",plugs:[{fn:"createAchievementWallPlugin",cfg:"items: user.badges, columns: 4, title: '成就'",why:"负责成就墙渲染，走 renderContentArea，有它时接管 children"}],props:[],controls:[{key:"columns",label:"列数",kind:"number",init:4,min:2,max:8,step:1}],stageHeight:240};function x1({cfg:e}){const t=v.useMemo(()=>ee(J,[$a({items:Da,columns:Number(e.columns),title:"成就"})]),[e.columns]);return c.jsx(t,{containerStyle:{maxWidth:480,margin:"0 auto"}})}const P1=Object.freeze(Object.defineProperty({__proto__:null,default:x1,meta:S1},Symbol.toStringTag,{value:"Module"})),k1=`import React, { useMemo } from "react";
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
`,b1=`import React, { useMemo } from "react";
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
`,_1=`import React, { useMemo } from "react";
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
`,C1=`import React, { useMemo } from "react";
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
`,T1=`import React, { useMemo } from "react";
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
`,E1=`import React, { useMemo } from "react";
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
      why: "负责关注按钮渲染 + 乐观切换；关系变 mutual 时触发 onMutual",
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
`,R1=`import React, { useMemo } from "react";
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
`,j1=`import React, { useMemo } from "react";
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
`,L1=`import React, { useMemo } from "react";
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
`,M1=`import React, { useMemo } from "react";
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
`,N1=`import React, { useMemo } from "react";
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
`,$1=`import React, { useMemo, useRef, useState } from "react";
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
`,A1=`import React, { useMemo } from "react";
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
`,B1=`import React, { useMemo } from "react";
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
`,z1=`import React, { useMemo } from "react";
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
`,O1=`import React, { useMemo } from "react";
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
`,I1=`import React, { useMemo } from "react";
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
`,D1=`import React, { useMemo } from "react";
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
`,F1=`import React, { useMemo } from "react";
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
`,W1=Object.assign({"./00-quickstart.tsx":g0,"./01-banner.tsx":v0,"./02-statrow.tsx":S0,"./03-tabsync.tsx":_0,"./04-verifybadge.tsx":E0,"./05-followecho.tsx":L0,"./06-bio.tsx":$0,"./07-social.tsx":z0,"./08-tags.tsx":D0,"./09-worksgrid.tsx":H0,"./10-full-combo.tsx":X0,"./11-dynamic-control.tsx":t1,"./12-membership.tsx":o1,"./13-qrshare.tsx":a1,"./14-livestatus.tsx":c1,"./15-contact.tsx":p1,"./16-activity.tsx":h1,"./17-message.tsx":w1,"./18-achievements.tsx":P1}),U1=Object.assign({"./00-quickstart.tsx":k1,"./01-banner.tsx":b1,"./02-statrow.tsx":_1,"./03-tabsync.tsx":C1,"./04-verifybadge.tsx":T1,"./05-followecho.tsx":E1,"./06-bio.tsx":R1,"./07-social.tsx":j1,"./08-tags.tsx":L1,"./09-worksgrid.tsx":M1,"./10-full-combo.tsx":N1,"./11-dynamic-control.tsx":$1,"./12-membership.tsx":A1,"./13-qrshare.tsx":B1,"./14-livestatus.tsx":z1,"./15-contact.tsx":O1,"./16-activity.tsx":I1,"./17-message.tsx":D1,"./18-achievements.tsx":F1}),V1=e=>e.replace(/^\.\//,""),Si=Object.entries(W1).map(([e,t])=>{const n=V1(e);return{meta:t.meta,Stage:t.default,file:n,source:U1[e]??""}}).sort((e,t)=>e.file.localeCompare(t.file)),H1=["basic","advanced","plugin"],Ew=Array.from(new Set(Si.map(e=>e.meta.plugin).filter(e=>!!e))).sort(),xi={basic:{label:"基础功能",hint:"Core 自身的 props"},advanced:{label:"高级功能",hint:"ref / 事件 / 杂项配置"},plugin:{label:"插件功能",hint:"一插件一页"}};function fu(e){const t={};for(const n of e.controls??[])t[n.key]=n.init;return t}const Q1="import|from|export|default|function|return|const|let|var|new|if|else|for|of|in|while|switch|case|break|continue|type|interface|extends|implements|as|satisfies|await|async|throw|try|catch|finally|class|typeof|instanceof|delete|void|yield",G1="true|false|null|undefined|this|super",K1="number|string|boolean|object|any|unknown|never|React|HTMLElement|void",du=new RegExp([String.raw`(\/\/[^\n]*|\/\*[\s\S]*?\*\/)`,String.raw`(\`(?:\\[\s\S]|[^\\\`])*\`|"(?:\\[\s\S]|[^\\"])*"|'(?:\\[\s\S]|[^\\'])*')`,String.raw`\b(${Q1})\b`,String.raw`\b(${G1})\b`,String.raw`\b(${K1})\b`,String.raw`(<\/?[A-Za-z][\w.$]*)`,String.raw`\b(\d+(?:\.\d+)?)\b`].join("|"),"g"),pu=["tok-comment","tok-string","tok-kw","tok-lit","tok-type","tok-tag","tok-num"];function Y1(e){const t=[];let n=0;du.lastIndex=0;let r;for(;r=du.exec(e);){r.index>n&&t.push({text:e.slice(n,r.index),cls:null});const o=pu.findIndex((l,i)=>r[i+1]!==void 0);t.push({text:r[0],cls:o>=0?pu[o]:null}),n=r.index+r[0].length}return n<e.length&&t.push({text:e.slice(n),cls:null}),t}function gu(e){try{const t=document.createElement("textarea");t.value=e,t.setAttribute("readonly",""),t.style.position="fixed",t.style.opacity="0",document.body.appendChild(t),t.select();const n=document.execCommand("copy");return document.body.removeChild(t),n}catch{return!1}}function X1({code:e,title:t="tsx",collapseAfter:n=24,maxHeight:r}){const[o,l]=v.useState("idle"),[i,a]=v.useState(!1),s=v.useMemo(()=>e.replace(/\s+$/,"").split(`
`),[e]),u=n>0&&s.length>n,d=u&&!i?s.slice(0,n).join(`
`):e,f=v.useMemo(()=>Y1(d),[d]),m=v.useCallback(async()=>{var w;let y=!1;if((w=navigator.clipboard)!=null&&w.writeText)try{await navigator.clipboard.writeText(e),y=!0}catch{y=gu(e)}else y=gu(e);l(y?"ok":"fail"),window.setTimeout(()=>l("idle"),1600)},[e]);return c.jsxs("div",{className:"code",children:[c.jsxs("div",{className:"code-head",children:[c.jsx("span",{children:t}),c.jsxs("span",{style:{display:"flex",gap:6,alignItems:"center"},children:[c.jsxs("span",{children:[s.length," 行"]}),c.jsx("button",{type:"button",className:`code-copy${o==="ok"?" is-ok":o==="fail"?" is-fail":""}`,onClick:m,children:o==="ok"?"已复制":o==="fail"?"复制失败":"复制"})]})]}),c.jsx("pre",{style:r?{maxHeight:r}:void 0,children:c.jsx("code",{children:f.map((y,w)=>y.cls?c.jsx("span",{className:y.cls,children:y.text},w):c.jsx(Pn.Fragment,{children:y.text},w))})}),u?c.jsx("button",{type:"button",className:"code-more",onClick:()=>a(y=>!y),children:i?"收起":`展开余下 ${s.length-n} 行`}):null]})}const J1=/\{\{\s*([\w-]+)\s*\}\}/g;function mu(e,t){return e.replace(J1,(n,r)=>r in t?String(t[r]):n)}function Z1(e,t){const n=e.plugs.map(s=>s.fn).sort(),r=n.length>3,o=n.length?r?`import {
${n.map(s=>`  ${s},`).join(`
`)}
} from "vane-profile/custom-plugins";`:`import { ${n.join(", ")} } from "vane-profile/custom-plugins";`:"// 这一页只用 Core props，不需要任何插件",l=e.plugs.map(s=>`  ${s.fn}(${s.cfg?`{ ${mu(s.cfg,t)} }`:""}),`).join(`
`),i=e.props.filter(s=>typeof s=="string"||!s.when||s.when(t)).map(s=>`      ${mu(typeof s=="string"?s:s.text,t)}`).join(`
`),a=e.plugs.length?`const Profile = withPlugins(ProfileCore, [
${l}
]);`:"const Profile = ProfileCore;";return`// ${e.title} · 最小装配（照抄即可跑）
import { ProfileCore, withPlugins } from "vane-profile";
${o}

type User = { id: string; name: string; handle: string; verified?: boolean };

${a}

export default function Demo({ user }: { user: User }) {
  return (
    <Profile
      banner={<span>@{user.handle}</span>}
${i}
    />
  );
}
`}function q1({controls:e,cfg:t,onChange:n}){return c.jsx("div",{className:"ctl-bar",children:e.filter(r=>!r.when||r.when(t)).map(r=>{const o=t[r.key];return c.jsxs("label",{className:"ctl",title:r.hint,children:[c.jsxs("span",{className:"ctl-label",children:[r.label,c.jsx("b",{className:"ctl-val",children:r.kind==="switch"?o?"开":"关":String(o)})]}),r.kind==="switch"?c.jsx("button",{type:"button",className:`ctl-switch${o?" is-on":""}`,onClick:()=>n(r.key,!o),"aria-pressed":!!o,children:c.jsx("i",{})}):r.kind==="select"?c.jsx("select",{className:"ctl-select",value:String(o),onChange:l=>n(r.key,l.target.value),children:(r.options??[]).map(l=>c.jsx("option",{value:l.value,children:l.label},l.value))}):c.jsx("input",{className:"ctl-range",type:"range",min:r.min??0,max:r.max??100,step:r.step??1,value:Number(o),onChange:l=>n(r.key,Number(l.target.value))})]},r.key)})})}function ew({lines:e,title:t="事件日志",empty:n="还没触发 —— 试着滚动、点一张卡",right:r}){return c.jsxs("div",{className:"log",children:[c.jsxs("div",{className:"log-head",children:[c.jsx("span",{children:t}),c.jsxs("span",{className:"log-right",children:[r,c.jsx("b",{children:e.length})]})]}),e.length===0?c.jsx("p",{className:"log-empty",children:n}):c.jsx("ol",{className:"log-list",children:e.map(o=>c.jsxs("li",{className:`log-line is-${o.kind}`,children:[c.jsx("time",{children:o.at}),c.jsx("span",{children:o.text})]},o.id))})]})}function tw({entry:e,order:t}){var S;const{meta:n,Stage:r,file:o,source:l}=e,[i,a]=v.useState(()=>fu(n)),[s,u]=v.useState([]),[d,f]=v.useState("minimal"),m=v.useCallback((k,g="event")=>{const p=new Date().toLocaleTimeString("zh-CN",{hour12:!1});u(h=>[{id:h.length+1,at:p,text:k,kind:g},...h].slice(0,60))},[]),y=v.useCallback((k,g)=>{a(p=>({...p,[k]:g}))},[]),w=v.useMemo(()=>Z1(n,i),[n,i]);return c.jsxs("section",{className:"demo","data-demo":n.slug,children:[c.jsxs("header",{className:"demo-head",children:[c.jsxs("div",{className:"demo-folio",children:[c.jsx("span",{className:"demo-no",children:String(t).padStart(2,"0")}),c.jsx("em",{children:"plate"})]}),c.jsxs("div",{children:[c.jsxs("div",{className:"demo-title-row",children:[c.jsx("h2",{children:n.title}),c.jsx("span",{className:"demo-group",children:xi[n.group].label}),n.plugin?c.jsx("code",{className:"demo-plugin",children:n.plugin}):null]}),c.jsx("p",{className:"demo-intro",children:n.intro}),c.jsxs("p",{className:"demo-why",children:[c.jsx("b",{children:"什么时候用"}),n.why]})]}),c.jsxs("div",{className:"demo-meta",children:[c.jsxs("div",{className:"demo-meta-row",children:[c.jsx("span",{children:"file"}),c.jsx("b",{children:o})]}),c.jsxs("div",{className:"demo-meta-row",children:[c.jsx("span",{children:"group"}),c.jsx("b",{children:xi[n.group].label})]}),c.jsxs("div",{className:"demo-meta-row",children:[c.jsx("span",{children:"plugs"}),c.jsx("b",{children:n.plugs.length?`${n.plugs.length} installed`:"core only"})]})]})]}),(S=n.controls)!=null&&S.length?c.jsxs("div",{className:"demo-controls",children:[c.jsx(q1,{controls:n.controls,cfg:i,onChange:y}),c.jsx("button",{type:"button",className:"demo-reset",onClick:()=>{a(fu(n)),u([])},children:"重置"})]}):null,c.jsxs("div",{className:"demo-body",children:[c.jsxs("figure",{className:"plate",children:[c.jsxs("figcaption",{className:"plate-cap",children:[c.jsx("b",{children:"stage"}),c.jsxs("span",{children:[n.tone==="light"?"light surface":"live render",n.stageHeight?` · ${n.stageHeight}px`:""]}),c.jsx("em",{children:"live"})]}),c.jsx("div",{className:"plate-ruler","aria-hidden":!0}),c.jsx("div",{className:`plate-body demo-stage${n.tone==="light"?" tone-light":""}`,style:{"--stage-h":`${n.stageHeight??380}px`},children:c.jsx(r,{cfg:i,log:m,setCfg:y})})]}),c.jsxs("aside",{className:"demo-side",children:[c.jsx("div",{className:"demo-plugs",children:n.plugs.length===0?c.jsx("span",{className:"demo-plug is-core",children:"仅 Core props"}):n.plugs.map(k=>c.jsx("span",{className:`demo-plug${k.local?" is-local":""}`,children:k.fn.replace(/^create|Plugin$/g,"")},k.fn))}),c.jsx("ul",{className:"demo-why-list",children:n.plugs.map(k=>c.jsxs("li",{children:[c.jsx("code",{children:k.fn}),c.jsx("span",{children:k.why})]},k.fn))}),n.note?c.jsxs("p",{className:"demo-note",children:["⚠ ",n.note]}):null,c.jsx(ew,{lines:s,empty:n.plugs.length>0?"还没触发 —— 拖上面的控件，或滚动 / 点卡片":"这一页没有事件类行为，日志留白"})]})]}),c.jsxs("div",{className:"demo-code",children:[c.jsxs("div",{className:"demo-switch",role:"tablist",children:[c.jsx("button",{type:"button",role:"tab","aria-selected":d==="minimal",className:d==="minimal"?"is-active":"",onClick:()=>f("minimal"),children:"最小装配"}),c.jsx("button",{type:"button",role:"tab","aria-selected":d==="full",className:d==="full"?"is-active":"",onClick:()=>f("full"),children:"完整源码"})]}),c.jsx(X1,{code:d==="minimal"?w:l,title:d==="minimal"?`${n.slug}.minimal.tsx`:o,collapseAfter:d==="minimal"?0:26,maxHeight:420},d)]})]})}const nw=`import type React from "react";
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
            <div style={{ padding: 16, opacity: 0.6 }}>{empty}</div>
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
`,rw=`import type React from "react";
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
`,ow=`import type React from "react";
import type {
  ProfilePlugin,
  ProfilePluginContext,
} from "../../components/ProfilePlugin/plugins/types";
import doc from "./doc.json";

export interface BannerSlotConfig {
  /** 封面图 URL（与 gradient 二者至少其一；都无则回退默认渐变） */
  cover?: string;
  /** 渐变起止色 [from, to]，无 cover 时用作背景 */
  gradient?: [string, string];
  /** 头像 URL（浮层在底部，与头图下缘重叠） */
  avatar?: string;
  /** 头像直径（px），默认 64 */
  avatarSize?: number;
  /** 头像是否圆形，默认 true */
  avatarRound?: boolean;
  /** 头图区高度（px），默认 160 */
  height?: number;
  /** 叠加在头图上的自定义内容（昵称 / 标语等）；缺省时渲染 context.banner */
  overlay?: React.ReactNode;
}

/**
 * BannerSlot - 头图区：封面图 / 渐变背景 + 头像浮层 + 可选文案。
 *
 * 走领域槽 \`renderBannerArea\`（由 ProfileCore 的 \`vp-banner-area\` 消费）。
 * 头像以负 bottom 浮出头图下缘、与数据行区重叠，形成经典个人主页观感。
 * \`overlay\` 优先于 \`context.banner\`；两者皆无则不渲染叠加文案。
 */
export function createBannerSlotPlugin<T = any>(
  config: BannerSlotConfig = {}
): ProfilePlugin<T> {
  const {
    cover,
    gradient = ["#6a11cb", "#1a5fd0"],
    avatar,
    avatarSize = 64,
    avatarRound = true,
    height = 160,
    overlay,
  } = config;

  const background = cover
    ? \`url(\${cover}) center/cover no-repeat\`
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
            marginBottom: avatarSize / 2,
          }}
        >
          {avatar && (
            <img
              src={avatar}
              alt=""
              style={{
                position: "absolute",
                left: 16,
                bottom: -avatarSize / 2,
                width: avatarSize,
                height: avatarSize,
                borderRadius: avatarRound ? "50%" : 8,
                border: "3px solid #fff",
                boxShadow: "0 2px 8px rgba(0,0,0,0.2)",
                objectFit: "cover",
              }}
            />
          )}
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

`,lw=`import type React from "react";
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
`,iw=`import type React from "react";
import type {
  ProfilePlugin,
  ProfilePluginContext,
} from "../../components/ProfilePlugin/plugins/types";
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
  if (email) rows.push({ glyph: "@", text: email, href: \`mailto:\${email}\` });
  if (phone) rows.push({ glyph: "☎", text: phone, href: \`tel:\${phone}\` });
  if (site)
    rows.push({
      glyph: "网",
      text: site.replace(/^https?:\\/\\//, ""),
      href: site,
      external: true,
    });
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
`,aw=`import type React from "react";
import { useState } from "react";
import type {
  ProfilePlugin,
  ProfilePluginContext,
  FollowState,
} from "../../components/ProfilePlugin/plugins/types";
import doc from "./doc.json";

export interface FollowEchoConfig {
  /** 强制关注态，覆盖 context.followState */
  state?: FollowState;
  /** 三态文案覆盖 */
  labels?: Partial<Record<FollowState, React.ReactNode>>;
  /** 尺寸，默认 md */
  size?: "sm" | "md";
  /** 点击切换后的回调（返回切换后的态） */
  onFollow?: (next: FollowState) => void;
  /** props.followState 由非 mutual 变为 mutual 时的回调 */
  onMutual?: (next: FollowState) => void;
}

const DEFAULT_LABELS: Record<FollowState, React.ReactNode> = {
  none: "关注",
  following: "已关注",
  mutual: "互相关注",
};

/**
 * FollowButton - 受控三态按钮（内部有瞬时 UI 态，受 props 重置）。
 *
 * 用 key={state} 让父重渲染（props.followState 变化）时以新初值重挂载，
 * 避免 stale 状态；点击切换 none⇄following（mutual 视为只读，由对方决定）。
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
  onToggle: (next: FollowState) => void;
}) {
  const [state, setState] = useState<FollowState>(initial);
  const handle = () => {
    const next: FollowState =
      state === "none" || state === "mutual" ? "following" : "none";
    setState(next);
    onToggle(next);
  };
  const following = state !== "none";
  const padding = size === "sm" ? "4px 12px" : "8px 20px";
  const fontSize = size === "sm" ? 12 : 14;
  return (
    <button
      type="button"
      onClick={handle}
      style={{
        padding,
        fontSize,
        borderRadius: 999,
        border: following ? "1px solid #ddd" : "none",
        background: following ? "#fff" : "#1a5fd0",
        color: following ? "#555" : "#fff",
        cursor: "pointer",
      }}
    >
      {labels[state]}
    </button>
  );
}

/**
 * FollowEcho - 关注回显：关注 / 已关注 / 互相关注三态按钮。
 *
 * 走领域槽 \`renderFollowArea\`（由 ProfileCore 的 \`vp-follow-area\` 消费）。
 * 受控于 props.followState：点击切换仅作乐观 UI，真相由消费方回写 props。
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
            onToggle={(next) => {
              onFollow?.(next);
            }}
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

`,sw=`import type React from "react";
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
`,uw=`import type React from "react";
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
`,cw=`import type React from "react";
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
`,fw=`import React, { useState } from "react";
import type {
  ProfilePlugin,
  ProfilePluginContext,
} from "../../components/ProfilePlugin/plugins/types";
import doc from "./doc.json";

export interface QRShareConfig {
  /** 要分享的主页地址；缺省读 props.data?.homeUrl 或占位文本 */
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
  const [copied, setCopied] = useState(false);
  const grid = dots(url);
  return (
    <div className="vp-qrshare" style={{ position: "relative" }}>
      <button
        type="button"
        onClick={() => setOpen((v) => !v)}
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
            onClick={() => {
              navigator.clipboard?.writeText(url).then(
                () => {
                  setCopied(true);
                  setTimeout(() => setCopied(false), 1500);
                },
                () => {}
              );
            }}
            style={{
              width: "100%",
              padding: "4px 0",
              borderRadius: 6,
              border: "none",
              background: "#1a5fd0",
              color: "#fff",
              fontSize: 12,
              cursor: "pointer",
            }}
          >
            {copied ? "已复制" : "复制链接"}
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
 */
export function createQRSharePlugin<T = any>(
  config: QRShareConfig = {}
): ProfilePlugin<T> {
  const { url = "https://vane.dev/u/frankvane", buttonLabel = "分享", size = 96 } = config;
  return {
    name: "QRShare",
    version: "0.1.0",
    description: "主页二维码分享：浮于头图右上的分享按钮，点击展开二维码与复制链接。",
    priority: 30,
    enabled: true,
    hooks: {
      renderBadgeArea: (_context: ProfilePluginContext<T>) => (
        <QRSharePanel url={url} buttonLabel={buttonLabel} size={size} />
      ),
    },
  };
}
`,dw=`import type React from "react";
import type {
  ProfilePlugin,
  ProfilePluginContext,
} from "../../components/ProfilePlugin/plugins/types";
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
              return (
                <a
                  key={i}
                  className="vp-social-item"
                  href={link.href}
                  target="_blank"
                  rel="noreferrer noopener"
                  style={{
                    display: "inline-flex",
                    alignItems: "center",
                    gap: 6,
                    padding: "4px 10px",
                    borderRadius: 999,
                    border: "1px solid rgba(125,130,140,0.35)",
                    color: "inherit",
                    textDecoration: "none",
                    fontSize: 13,
                  }}
                >
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
                </a>
              );
            })}
          </div>
        );
      },
    },
  };
}
`,pw=`import type React from "react";
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
            {items.map((it, i) => (
              <button
                key={it.key ?? \`stat-\${i}\`}
                type="button"
                onClick={onStatClick ? () => onStatClick(it, i) : undefined}
                style={{
                  display: "flex",
                  flexDirection: "column",
                  alignItems: direction === "column" ? "flex-start" : "center",
                  border: "none",
                  background: "transparent",
                  cursor: onStatClick ? "pointer" : "default",
                  padding: 0,
                  lineHeight: 1.2,
                }}
              >
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
              </button>
            ))}
          </div>
        );
      },
    },
  };
}

`,gw=`import type React from "react";
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
  if (!tabs || tabs.length === 0) {
    throw new Error("[vane-profile] TabSync 至少需要一个 tab");
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
            {tabs.map((t) => {
              const isActive = t.id === active;
              return (
                <button
                  key={t.id}
                  type="button"
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

`,mw=`import type React from "react";
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
`,hw=`import type React from "react";
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

`,vw=`import type React from "react";
import type {
  ProfilePlugin,
  ProfilePluginContext,
} from "../../components/ProfilePlugin/plugins/types";
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
              const bg =
                w.cover ?? w.coverColor ?? FALLBACK_COLORS[i % FALLBACK_COLORS.length];
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
                      background: w.cover ? \`url(\${w.cover}) center/cover no-repeat\` : bg,
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
            <div className="vp-works-empty" style={{ padding: "24px 0", textAlign: "center", opacity: 0.6 }}>
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
`,Rw={visual:"视觉",data:"数据",interaction:"交互与状态"},hu=["visual","data","interaction"],vu=Object.assign({"/src/custom-plugins/AchievementWallPlugin/doc.json":ad,"/src/custom-plugins/ActivitySummaryPlugin/doc.json":ld,"/src/custom-plugins/BannerSlotPlugin/doc.json":Qf,"/src/custom-plugins/BioSlotPlugin/doc.json":Jf,"/src/custom-plugins/ContactCardPlugin/doc.json":od,"/src/custom-plugins/FollowEchoPlugin/doc.json":Xf,"/src/custom-plugins/LiveStatusPlugin/doc.json":rd,"/src/custom-plugins/MembershipBadgePlugin/doc.json":td,"/src/custom-plugins/MessageButtonPlugin/doc.json":id,"/src/custom-plugins/QRSharePlugin/doc.json":nd,"/src/custom-plugins/SocialLinksPlugin/doc.json":Zf,"/src/custom-plugins/StatRowPlugin/doc.json":Gf,"/src/custom-plugins/TabSyncPlugin/doc.json":Kf,"/src/custom-plugins/TagListPlugin/doc.json":qf,"/src/custom-plugins/VerifyBadgePlugin/doc.json":Yf,"/src/custom-plugins/WorksGridPlugin/doc.json":ed}),yu=Object.assign({"/src/custom-plugins/AchievementWallPlugin/create.tsx":nw,"/src/custom-plugins/ActivitySummaryPlugin/create.tsx":rw,"/src/custom-plugins/BannerSlotPlugin/create.tsx":ow,"/src/custom-plugins/BioSlotPlugin/create.tsx":lw,"/src/custom-plugins/ContactCardPlugin/create.tsx":iw,"/src/custom-plugins/FollowEchoPlugin/create.tsx":aw,"/src/custom-plugins/LiveStatusPlugin/create.tsx":sw,"/src/custom-plugins/MembershipBadgePlugin/create.tsx":uw,"/src/custom-plugins/MessageButtonPlugin/create.tsx":cw,"/src/custom-plugins/QRSharePlugin/create.tsx":fw,"/src/custom-plugins/SocialLinksPlugin/create.tsx":dw,"/src/custom-plugins/StatRowPlugin/create.tsx":pw,"/src/custom-plugins/TabSyncPlugin/create.tsx":gw,"/src/custom-plugins/TagListPlugin/create.tsx":mw,"/src/custom-plugins/VerifyBadgePlugin/create.tsx":hw,"/src/custom-plugins/WorksGridPlugin/create.tsx":vw}),cd=e=>e.replace(/^.*\/custom-plugins\//,"").replace(/\/.*$/,"");function yw(e){const t=Object.keys(yu).find(o=>cd(o)===e),n=t?yu[t]:"",r=/priority:\s*(\d+)/.exec(n);return r?Number(r[1]):0}function ww(e){const t=Object.keys(vu).find(n=>cd(n)===e);return t?vu[t]:{name:e,description:"（缺少 doc.json）"}}const Sw=[{id:"works",label:"作品"},{id:"feeds",label:"动态"},{id:"about",label:"关于"}],xw=[{dir:"BannerSlotPlugin",group:"visual",make:()=>Qt({gradient:["#6a11cb","#1a5fd0"],avatar:Gt,avatarRound:!0,height:160,overlay:B.name})},{dir:"VerifyBadgePlugin",group:"visual",make:()=>Qo({type:"personal"})},{dir:"StatRowPlugin",group:"data",make:()=>Pr({items:B.stats})},{dir:"BioSlotPlugin",group:"data",make:()=>ba({name:B.name,subtitle:"前端工程师 · 组件库作者",bio:B.bio,location:"上海",joinDate:"2021 加入"})},{dir:"TagListPlugin",group:"data",make:()=>Ca({tags:Ba})},{dir:"TabSyncPlugin",group:"interaction",make:()=>kr({tabs:Sw})},{dir:"FollowEchoPlugin",group:"interaction",make:()=>Tn({size:"md"})},{dir:"SocialLinksPlugin",group:"visual",make:()=>_a({links:Aa})},{dir:"WorksGridPlugin",group:"visual",make:()=>Ta({items:za,tab:"works"})},{dir:"MembershipBadgePlugin",group:"visual",make:()=>Ea(sd)},{dir:"QRSharePlugin",group:"visual",make:()=>Ra({url:"https://vane.dev/u/frankvane"})},{dir:"AchievementWallPlugin",group:"visual",make:()=>$a({items:Da,tab:"about",title:"成就"})},{dir:"LiveStatusPlugin",group:"data",make:()=>ja(ud)},{dir:"ContactCardPlugin",group:"data",make:()=>La(Oa)},{dir:"ActivitySummaryPlugin",group:"data",make:()=>Ma(Ia)},{dir:"MessageButtonPlugin",group:"interaction",make:()=>Na({})}],wu=xw.map(e=>{const t=ww(e.dir);return{dir:e.dir,factory:`create${e.dir.replace(/Plugin$/,"")}Plugin`,group:e.group,priority:yw(e.dir),summary:t.description,doc:t,make:e.make}}).sort((e,t)=>hu.indexOf(e.group)-hu.indexOf(t.group)||t.priority-e.priority),Pw=v.lazy(()=>xa(()=>import("./HomePage-CG3SHl4e.js"),__vite__mapDeps([0,1]),import.meta.url).then(e=>({default:e.HomePage}))),kw=v.lazy(()=>xa(()=>import("./PluginsPage-B4eAuJOz.js"),[],import.meta.url).then(e=>({default:e.PluginsPage}))),bw=v.lazy(()=>xa(()=>import("./ScenariosPage-CRxk00C3.js"),__vite__mapDeps([2,1]),import.meta.url).then(e=>({default:e.ScenariosPage}))),_w={pkg:"vane-profile",brand:"V",subtitle:"个人主页 / plugin index",nav:[{to:"/",label:"总览",hint:"overview"},{to:"/plugins",label:"插件工坊",hint:`${wu.length} plugins`},{to:"/scenarios",label:"场景示例",hint:"4 plates"}],routes:[{path:"/",element:c.jsx(Pw,{})},{path:"/plugins",element:c.jsx(kw,{})},{path:"/scenarios",element:c.jsx(bw,{})}],crumb:e=>e.startsWith("/plugins")?"workshop · 插件工坊":e.startsWith("/scenarios")?"plates · 场景示例":"index · 总览",demos:{label:"逐项示例",groups:H1.map(e=>({key:e,label:xi[e].label})),entries:Si,detail:(e,t)=>c.jsx(tw,{entry:e,order:t})},footer:[`${wu.length} PLUGINS · 4 PLATES`,`${Si.length} DEMOS · D1-A / D2-A`]};function Cw(){return c.jsx(Km,{config:_w})}Pl.createRoot(document.getElementById("root")).render(c.jsx(Pn.StrictMode,{children:c.jsx(Cw,{})}));export{Gt as A,sd as B,X1 as C,Si as D,Ra as E,Na as F,hu as G,$a as H,Da as I,wi as L,wu as P,B as S,c0 as T,Ew as a,ba as b,Qt as c,Pr as d,_a as e,Aa as f,Ca as g,Ba as h,kr as i,c as j,Qo as k,Tn as l,Ta as m,za as n,J as o,Rw as p,ja as q,v as r,ud as s,La as t,xr as u,Oa as v,ee as w,Ma as x,Ia as y,Ea as z};
