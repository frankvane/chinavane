var Vp=Object.defineProperty;var qp=(e,n,t)=>n in e?Vp(e,n,{enumerable:!0,configurable:!0,writable:!0,value:t}):e[n]=t;var is=(e,n,t)=>qp(e,typeof n!="symbol"?n+"":n,t);function Bp(e,n){for(var t=0;t<n.length;t++){const o=n[t];if(typeof o!="string"&&!Array.isArray(o)){for(const r in o)if(r!=="default"&&!(r in e)){const l=Object.getOwnPropertyDescriptor(o,r);l&&Object.defineProperty(e,r,l.get?l:{enumerable:!0,get:()=>o[r]})}}}return Object.freeze(Object.defineProperty(e,Symbol.toStringTag,{value:"Module"}))}(function(){const n=document.createElement("link").relList;if(n&&n.supports&&n.supports("modulepreload"))return;for(const r of document.querySelectorAll('link[rel="modulepreload"]'))o(r);new MutationObserver(r=>{for(const l of r)if(l.type==="childList")for(const i of l.addedNodes)i.tagName==="LINK"&&i.rel==="modulepreload"&&o(i)}).observe(document,{childList:!0,subtree:!0});function t(r){const l={};return r.integrity&&(l.integrity=r.integrity),r.referrerPolicy&&(l.referrerPolicy=r.referrerPolicy),r.crossOrigin==="use-credentials"?l.credentials="include":r.crossOrigin==="anonymous"?l.credentials="omit":l.credentials="same-origin",l}function o(r){if(r.ep)return;r.ep=!0;const l=t(r);fetch(r.href,l)}})();function Qp(e){return e&&e.__esModule&&Object.prototype.hasOwnProperty.call(e,"default")?e.default:e}var Wu={exports:{}},Zr={},Hu={exports:{}},z={};/**
 * @license React
 * react.production.min.js
 *
 * Copyright (c) Facebook, Inc. and its affiliates.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */var bo=Symbol.for("react.element"),Kp=Symbol.for("react.portal"),Yp=Symbol.for("react.fragment"),Xp=Symbol.for("react.strict_mode"),Gp=Symbol.for("react.profiler"),Jp=Symbol.for("react.provider"),Zp=Symbol.for("react.context"),ef=Symbol.for("react.forward_ref"),nf=Symbol.for("react.suspense"),tf=Symbol.for("react.memo"),of=Symbol.for("react.lazy"),as=Symbol.iterator;function rf(e){return e===null||typeof e!="object"?null:(e=as&&e[as]||e["@@iterator"],typeof e=="function"?e:null)}var Vu={isMounted:function(){return!1},enqueueForceUpdate:function(){},enqueueReplaceState:function(){},enqueueSetState:function(){}},qu=Object.assign,Bu={};function bt(e,n,t){this.props=e,this.context=n,this.refs=Bu,this.updater=t||Vu}bt.prototype.isReactComponent={};bt.prototype.setState=function(e,n){if(typeof e!="object"&&typeof e!="function"&&e!=null)throw Error("setState(...): takes an object of state variables to update or a function which returns an object of state variables.");this.updater.enqueueSetState(this,e,n,"setState")};bt.prototype.forceUpdate=function(e){this.updater.enqueueForceUpdate(this,e,"forceUpdate")};function Qu(){}Qu.prototype=bt.prototype;function Ji(e,n,t){this.props=e,this.context=n,this.refs=Bu,this.updater=t||Vu}var Zi=Ji.prototype=new Qu;Zi.constructor=Ji;qu(Zi,bt.prototype);Zi.isPureReactComponent=!0;var ss=Array.isArray,Ku=Object.prototype.hasOwnProperty,ea={current:null},Yu={key:!0,ref:!0,__self:!0,__source:!0};function Xu(e,n,t){var o,r={},l=null,i=null;if(n!=null)for(o in n.ref!==void 0&&(i=n.ref),n.key!==void 0&&(l=""+n.key),n)Ku.call(n,o)&&!Yu.hasOwnProperty(o)&&(r[o]=n[o]);var a=arguments.length-2;if(a===1)r.children=t;else if(1<a){for(var s=Array(a),u=0;u<a;u++)s[u]=arguments[u+2];r.children=s}if(e&&e.defaultProps)for(o in a=e.defaultProps,a)r[o]===void 0&&(r[o]=a[o]);return{$$typeof:bo,type:e,key:l,ref:i,props:r,_owner:ea.current}}function lf(e,n){return{$$typeof:bo,type:e.type,key:n,ref:e.ref,props:e.props,_owner:e._owner}}function na(e){return typeof e=="object"&&e!==null&&e.$$typeof===bo}function af(e){var n={"=":"=0",":":"=2"};return"$"+e.replace(/[=:]/g,function(t){return n[t]})}var us=/\/+/g;function vl(e,n){return typeof e=="object"&&e!==null&&e.key!=null?af(""+e.key):n.toString(36)}function fr(e,n,t,o,r){var l=typeof e;(l==="undefined"||l==="boolean")&&(e=null);var i=!1;if(e===null)i=!0;else switch(l){case"string":case"number":i=!0;break;case"object":switch(e.$$typeof){case bo:case Kp:i=!0}}if(i)return i=e,r=r(i),e=o===""?"."+vl(i,0):o,ss(r)?(t="",e!=null&&(t=e.replace(us,"$&/")+"/"),fr(r,n,t,"",function(u){return u})):r!=null&&(na(r)&&(r=lf(r,t+(!r.key||i&&i.key===r.key?"":(""+r.key).replace(us,"$&/")+"/")+e)),n.push(r)),1;if(i=0,o=o===""?".":o+":",ss(e))for(var a=0;a<e.length;a++){l=e[a];var s=o+vl(l,a);i+=fr(l,n,t,s,r)}else if(s=rf(e),typeof s=="function")for(e=s.call(e),a=0;!(l=e.next()).done;)l=l.value,s=o+vl(l,a++),i+=fr(l,n,t,s,r);else if(l==="object")throw n=String(e),Error("Objects are not valid as a React child (found: "+(n==="[object Object]"?"object with keys {"+Object.keys(e).join(", ")+"}":n)+"). If you meant to render a collection of children, use an array instead.");return i}function Ho(e,n,t){if(e==null)return e;var o=[],r=0;return fr(e,o,"","",function(l){return n.call(t,l,r++)}),o}function sf(e){if(e._status===-1){var n=e._result;n=n(),n.then(function(t){(e._status===0||e._status===-1)&&(e._status=1,e._result=t)},function(t){(e._status===0||e._status===-1)&&(e._status=2,e._result=t)}),e._status===-1&&(e._status=0,e._result=n)}if(e._status===1)return e._result.default;throw e._result}var Pe={current:null},mr={transition:null},uf={ReactCurrentDispatcher:Pe,ReactCurrentBatchConfig:mr,ReactCurrentOwner:ea};function Gu(){throw Error("act(...) is not supported in production builds of React.")}z.Children={map:Ho,forEach:function(e,n,t){Ho(e,function(){n.apply(this,arguments)},t)},count:function(e){var n=0;return Ho(e,function(){n++}),n},toArray:function(e){return Ho(e,function(n){return n})||[]},only:function(e){if(!na(e))throw Error("React.Children.only expected to receive a single React element child.");return e}};z.Component=bt;z.Fragment=Yp;z.Profiler=Gp;z.PureComponent=Ji;z.StrictMode=Xp;z.Suspense=nf;z.__SECRET_INTERNALS_DO_NOT_USE_OR_YOU_WILL_BE_FIRED=uf;z.act=Gu;z.cloneElement=function(e,n,t){if(e==null)throw Error("React.cloneElement(...): The argument must be a React element, but you passed "+e+".");var o=qu({},e.props),r=e.key,l=e.ref,i=e._owner;if(n!=null){if(n.ref!==void 0&&(l=n.ref,i=ea.current),n.key!==void 0&&(r=""+n.key),e.type&&e.type.defaultProps)var a=e.type.defaultProps;for(s in n)Ku.call(n,s)&&!Yu.hasOwnProperty(s)&&(o[s]=n[s]===void 0&&a!==void 0?a[s]:n[s])}var s=arguments.length-2;if(s===1)o.children=t;else if(1<s){a=Array(s);for(var u=0;u<s;u++)a[u]=arguments[u+2];o.children=a}return{$$typeof:bo,type:e.type,key:r,ref:l,props:o,_owner:i}};z.createContext=function(e){return e={$$typeof:Zp,_currentValue:e,_currentValue2:e,_threadCount:0,Provider:null,Consumer:null,_defaultValue:null,_globalName:null},e.Provider={$$typeof:Jp,_context:e},e.Consumer=e};z.createElement=Xu;z.createFactory=function(e){var n=Xu.bind(null,e);return n.type=e,n};z.createRef=function(){return{current:null}};z.forwardRef=function(e){return{$$typeof:ef,render:e}};z.isValidElement=na;z.lazy=function(e){return{$$typeof:of,_payload:{_status:-1,_result:e},_init:sf}};z.memo=function(e,n){return{$$typeof:tf,type:e,compare:n===void 0?null:n}};z.startTransition=function(e){var n=mr.transition;mr.transition={};try{e()}finally{mr.transition=n}};z.unstable_act=Gu;z.useCallback=function(e,n){return Pe.current.useCallback(e,n)};z.useContext=function(e){return Pe.current.useContext(e)};z.useDebugValue=function(){};z.useDeferredValue=function(e){return Pe.current.useDeferredValue(e)};z.useEffect=function(e,n){return Pe.current.useEffect(e,n)};z.useId=function(){return Pe.current.useId()};z.useImperativeHandle=function(e,n,t){return Pe.current.useImperativeHandle(e,n,t)};z.useInsertionEffect=function(e,n){return Pe.current.useInsertionEffect(e,n)};z.useLayoutEffect=function(e,n){return Pe.current.useLayoutEffect(e,n)};z.useMemo=function(e,n){return Pe.current.useMemo(e,n)};z.useReducer=function(e,n,t){return Pe.current.useReducer(e,n,t)};z.useRef=function(e){return Pe.current.useRef(e)};z.useState=function(e){return Pe.current.useState(e)};z.useSyncExternalStore=function(e,n,t){return Pe.current.useSyncExternalStore(e,n,t)};z.useTransition=function(){return Pe.current.useTransition()};z.version="18.3.1";Hu.exports=z;var S=Hu.exports;const Mo=Qp(S),cf=Bp({__proto__:null,default:Mo},[S]);/**
 * @license React
 * react-jsx-runtime.production.min.js
 *
 * Copyright (c) Facebook, Inc. and its affiliates.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */var df=S,pf=Symbol.for("react.element"),ff=Symbol.for("react.fragment"),mf=Object.prototype.hasOwnProperty,gf=df.__SECRET_INTERNALS_DO_NOT_USE_OR_YOU_WILL_BE_FIRED.ReactCurrentOwner,hf={key:!0,ref:!0,__self:!0,__source:!0};function Ju(e,n,t){var o,r={},l=null,i=null;t!==void 0&&(l=""+t),n.key!==void 0&&(l=""+n.key),n.ref!==void 0&&(i=n.ref);for(o in n)mf.call(n,o)&&!hf.hasOwnProperty(o)&&(r[o]=n[o]);if(e&&e.defaultProps)for(o in n=e.defaultProps,n)r[o]===void 0&&(r[o]=n[o]);return{$$typeof:pf,type:e,key:l,ref:i,props:r,_owner:gf.current}}Zr.Fragment=ff;Zr.jsx=Ju;Zr.jsxs=Ju;Wu.exports=Zr;var c=Wu.exports,Xl={},Zu={exports:{}},Me={},ec={exports:{}},nc={};/**
 * @license React
 * scheduler.production.min.js
 *
 * Copyright (c) Facebook, Inc. and its affiliates.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */(function(e){function n($,b){var O=$.length;$.push(b);e:for(;0<O;){var Q=O-1>>>1,ee=$[Q];if(0<r(ee,b))$[Q]=b,$[O]=ee,O=Q;else break e}}function t($){return $.length===0?null:$[0]}function o($){if($.length===0)return null;var b=$[0],O=$.pop();if(O!==b){$[0]=O;e:for(var Q=0,ee=$.length,U=ee>>>1;Q<U;){var W=2*(Q+1)-1,ae=$[W],me=W+1,se=$[me];if(0>r(ae,O))me<ee&&0>r(se,ae)?($[Q]=se,$[me]=O,Q=me):($[Q]=ae,$[W]=O,Q=W);else if(me<ee&&0>r(se,O))$[Q]=se,$[me]=O,Q=me;else break e}}return b}function r($,b){var O=$.sortIndex-b.sortIndex;return O!==0?O:$.id-b.id}if(typeof performance=="object"&&typeof performance.now=="function"){var l=performance;e.unstable_now=function(){return l.now()}}else{var i=Date,a=i.now();e.unstable_now=function(){return i.now()-a}}var s=[],u=[],p=1,f=null,m=3,y=!1,x=!1,C=!1,k=typeof setTimeout=="function"?setTimeout:null,g=typeof clearTimeout=="function"?clearTimeout:null,d=typeof setImmediate<"u"?setImmediate:null;typeof navigator<"u"&&navigator.scheduling!==void 0&&navigator.scheduling.isInputPending!==void 0&&navigator.scheduling.isInputPending.bind(navigator.scheduling);function h($){for(var b=t(u);b!==null;){if(b.callback===null)o(u);else if(b.startTime<=$)o(u),b.sortIndex=b.expirationTime,n(s,b);else break;b=t(u)}}function v($){if(C=!1,h($),!x)if(t(s)!==null)x=!0,We(w);else{var b=t(u);b!==null&&Ge(v,b.startTime-$)}}function w($,b){x=!1,C&&(C=!1,g(N),N=-1),y=!0;var O=m;try{for(h(b),f=t(s);f!==null&&(!(f.expirationTime>b)||$&&!R());){var Q=f.callback;if(typeof Q=="function"){f.callback=null,m=f.priorityLevel;var ee=Q(f.expirationTime<=b);b=e.unstable_now(),typeof ee=="function"?f.callback=ee:f===t(s)&&o(s),h(b)}else o(s);f=t(s)}if(f!==null)var U=!0;else{var W=t(u);W!==null&&Ge(v,W.startTime-b),U=!1}return U}finally{f=null,m=O,y=!1}}var _=!1,j=null,N=-1,P=5,E=-1;function R(){return!(e.unstable_now()-E<P)}function L(){if(j!==null){var $=e.unstable_now();E=$;var b=!0;try{b=j(!0,$)}finally{b?F():(_=!1,j=null)}}else _=!1}var F;if(typeof d=="function")F=function(){d(L)};else if(typeof MessageChannel<"u"){var oe=new MessageChannel,yn=oe.port2;oe.port1.onmessage=L,F=function(){yn.postMessage(null)}}else F=function(){k(L,0)};function We($){j=$,_||(_=!0,F())}function Ge($,b){N=k(function(){$(e.unstable_now())},b)}e.unstable_IdlePriority=5,e.unstable_ImmediatePriority=1,e.unstable_LowPriority=4,e.unstable_NormalPriority=3,e.unstable_Profiling=null,e.unstable_UserBlockingPriority=2,e.unstable_cancelCallback=function($){$.callback=null},e.unstable_continueExecution=function(){x||y||(x=!0,We(w))},e.unstable_forceFrameRate=function($){0>$||125<$?console.error("forceFrameRate takes a positive int between 0 and 125, forcing frame rates higher than 125 fps is not supported"):P=0<$?Math.floor(1e3/$):5},e.unstable_getCurrentPriorityLevel=function(){return m},e.unstable_getFirstCallbackNode=function(){return t(s)},e.unstable_next=function($){switch(m){case 1:case 2:case 3:var b=3;break;default:b=m}var O=m;m=b;try{return $()}finally{m=O}},e.unstable_pauseExecution=function(){},e.unstable_requestPaint=function(){},e.unstable_runWithPriority=function($,b){switch($){case 1:case 2:case 3:case 4:case 5:break;default:$=3}var O=m;m=$;try{return b()}finally{m=O}},e.unstable_scheduleCallback=function($,b,O){var Q=e.unstable_now();switch(typeof O=="object"&&O!==null?(O=O.delay,O=typeof O=="number"&&0<O?Q+O:Q):O=Q,$){case 1:var ee=-1;break;case 2:ee=250;break;case 5:ee=1073741823;break;case 4:ee=1e4;break;default:ee=5e3}return ee=O+ee,$={id:p++,callback:b,priorityLevel:$,startTime:O,expirationTime:ee,sortIndex:-1},O>Q?($.sortIndex=O,n(u,$),t(s)===null&&$===t(u)&&(C?(g(N),N=-1):C=!0,Ge(v,O-Q))):($.sortIndex=ee,n(s,$),x||y||(x=!0,We(w))),$},e.unstable_shouldYield=R,e.unstable_wrapCallback=function($){var b=m;return function(){var O=m;m=b;try{return $.apply(this,arguments)}finally{m=O}}}})(nc);ec.exports=nc;var yf=ec.exports;/**
 * @license React
 * react-dom.production.min.js
 *
 * Copyright (c) Facebook, Inc. and its affiliates.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */var vf=S,be=yf;function T(e){for(var n="https://reactjs.org/docs/error-decoder.html?invariant="+e,t=1;t<arguments.length;t++)n+="&args[]="+encodeURIComponent(arguments[t]);return"Minified React error #"+e+"; visit "+n+" for the full message or use the non-minified dev environment for full errors and additional helpful warnings."}var tc=new Set,mo={};function tt(e,n){Et(e,n),Et(e+"Capture",n)}function Et(e,n){for(mo[e]=n,e=0;e<n.length;e++)tc.add(n[e])}var cn=!(typeof window>"u"||typeof window.document>"u"||typeof window.document.createElement>"u"),Gl=Object.prototype.hasOwnProperty,xf=/^[:A-Z_a-z\u00C0-\u00D6\u00D8-\u00F6\u00F8-\u02FF\u0370-\u037D\u037F-\u1FFF\u200C-\u200D\u2070-\u218F\u2C00-\u2FEF\u3001-\uD7FF\uF900-\uFDCF\uFDF0-\uFFFD][:A-Z_a-z\u00C0-\u00D6\u00D8-\u00F6\u00F8-\u02FF\u0370-\u037D\u037F-\u1FFF\u200C-\u200D\u2070-\u218F\u2C00-\u2FEF\u3001-\uD7FF\uF900-\uFDCF\uFDF0-\uFFFD\-.0-9\u00B7\u0300-\u036F\u203F-\u2040]*$/,cs={},ds={};function Cf(e){return Gl.call(ds,e)?!0:Gl.call(cs,e)?!1:xf.test(e)?ds[e]=!0:(cs[e]=!0,!1)}function Sf(e,n,t,o){if(t!==null&&t.type===0)return!1;switch(typeof n){case"function":case"symbol":return!0;case"boolean":return o?!1:t!==null?!t.acceptsBooleans:(e=e.toLowerCase().slice(0,5),e!=="data-"&&e!=="aria-");default:return!1}}function wf(e,n,t,o){if(n===null||typeof n>"u"||Sf(e,n,t,o))return!0;if(o)return!1;if(t!==null)switch(t.type){case 3:return!n;case 4:return n===!1;case 5:return isNaN(n);case 6:return isNaN(n)||1>n}return!1}function ke(e,n,t,o,r,l,i){this.acceptsBooleans=n===2||n===3||n===4,this.attributeName=o,this.attributeNamespace=r,this.mustUseProperty=t,this.propertyName=e,this.type=n,this.sanitizeURL=l,this.removeEmptyString=i}var fe={};"children dangerouslySetInnerHTML defaultValue defaultChecked innerHTML suppressContentEditableWarning suppressHydrationWarning style".split(" ").forEach(function(e){fe[e]=new ke(e,0,!1,e,null,!1,!1)});[["acceptCharset","accept-charset"],["className","class"],["htmlFor","for"],["httpEquiv","http-equiv"]].forEach(function(e){var n=e[0];fe[n]=new ke(n,1,!1,e[1],null,!1,!1)});["contentEditable","draggable","spellCheck","value"].forEach(function(e){fe[e]=new ke(e,2,!1,e.toLowerCase(),null,!1,!1)});["autoReverse","externalResourcesRequired","focusable","preserveAlpha"].forEach(function(e){fe[e]=new ke(e,2,!1,e,null,!1,!1)});"allowFullScreen async autoFocus autoPlay controls default defer disabled disablePictureInPicture disableRemotePlayback formNoValidate hidden loop noModule noValidate open playsInline readOnly required reversed scoped seamless itemScope".split(" ").forEach(function(e){fe[e]=new ke(e,3,!1,e.toLowerCase(),null,!1,!1)});["checked","multiple","muted","selected"].forEach(function(e){fe[e]=new ke(e,3,!0,e,null,!1,!1)});["capture","download"].forEach(function(e){fe[e]=new ke(e,4,!1,e,null,!1,!1)});["cols","rows","size","span"].forEach(function(e){fe[e]=new ke(e,6,!1,e,null,!1,!1)});["rowSpan","start"].forEach(function(e){fe[e]=new ke(e,5,!1,e.toLowerCase(),null,!1,!1)});var ta=/[\-:]([a-z])/g;function oa(e){return e[1].toUpperCase()}"accent-height alignment-baseline arabic-form baseline-shift cap-height clip-path clip-rule color-interpolation color-interpolation-filters color-profile color-rendering dominant-baseline enable-background fill-opacity fill-rule flood-color flood-opacity font-family font-size font-size-adjust font-stretch font-style font-variant font-weight glyph-name glyph-orientation-horizontal glyph-orientation-vertical horiz-adv-x horiz-origin-x image-rendering letter-spacing lighting-color marker-end marker-mid marker-start overline-position overline-thickness paint-order panose-1 pointer-events rendering-intent shape-rendering stop-color stop-opacity strikethrough-position strikethrough-thickness stroke-dasharray stroke-dashoffset stroke-linecap stroke-linejoin stroke-miterlimit stroke-opacity stroke-width text-anchor text-decoration text-rendering underline-position underline-thickness unicode-bidi unicode-range units-per-em v-alphabetic v-hanging v-ideographic v-mathematical vector-effect vert-adv-y vert-origin-x vert-origin-y word-spacing writing-mode xmlns:xlink x-height".split(" ").forEach(function(e){var n=e.replace(ta,oa);fe[n]=new ke(n,1,!1,e,null,!1,!1)});"xlink:actuate xlink:arcrole xlink:role xlink:show xlink:title xlink:type".split(" ").forEach(function(e){var n=e.replace(ta,oa);fe[n]=new ke(n,1,!1,e,"http://www.w3.org/1999/xlink",!1,!1)});["xml:base","xml:lang","xml:space"].forEach(function(e){var n=e.replace(ta,oa);fe[n]=new ke(n,1,!1,e,"http://www.w3.org/XML/1998/namespace",!1,!1)});["tabIndex","crossOrigin"].forEach(function(e){fe[e]=new ke(e,1,!1,e.toLowerCase(),null,!1,!1)});fe.xlinkHref=new ke("xlinkHref",1,!1,"xlink:href","http://www.w3.org/1999/xlink",!0,!1);["src","href","action","formAction"].forEach(function(e){fe[e]=new ke(e,1,!1,e.toLowerCase(),null,!0,!0)});function ra(e,n,t,o){var r=fe.hasOwnProperty(n)?fe[n]:null;(r!==null?r.type!==0:o||!(2<n.length)||n[0]!=="o"&&n[0]!=="O"||n[1]!=="n"&&n[1]!=="N")&&(wf(n,t,r,o)&&(t=null),o||r===null?Cf(n)&&(t===null?e.removeAttribute(n):e.setAttribute(n,""+t)):r.mustUseProperty?e[r.propertyName]=t===null?r.type===3?!1:"":t:(n=r.attributeName,o=r.attributeNamespace,t===null?e.removeAttribute(n):(r=r.type,t=r===3||r===4&&t===!0?"":""+t,o?e.setAttributeNS(o,n,t):e.setAttribute(n,t))))}var mn=vf.__SECRET_INTERNALS_DO_NOT_USE_OR_YOU_WILL_BE_FIRED,Vo=Symbol.for("react.element"),st=Symbol.for("react.portal"),ut=Symbol.for("react.fragment"),la=Symbol.for("react.strict_mode"),Jl=Symbol.for("react.profiler"),oc=Symbol.for("react.provider"),rc=Symbol.for("react.context"),ia=Symbol.for("react.forward_ref"),Zl=Symbol.for("react.suspense"),ei=Symbol.for("react.suspense_list"),aa=Symbol.for("react.memo"),Cn=Symbol.for("react.lazy"),lc=Symbol.for("react.offscreen"),ps=Symbol.iterator;function Ft(e){return e===null||typeof e!="object"?null:(e=ps&&e[ps]||e["@@iterator"],typeof e=="function"?e:null)}var X=Object.assign,xl;function Xt(e){if(xl===void 0)try{throw Error()}catch(t){var n=t.stack.trim().match(/\n( *(at )?)/);xl=n&&n[1]||""}return`
`+xl+e}var Cl=!1;function Sl(e,n){if(!e||Cl)return"";Cl=!0;var t=Error.prepareStackTrace;Error.prepareStackTrace=void 0;try{if(n)if(n=function(){throw Error()},Object.defineProperty(n.prototype,"props",{set:function(){throw Error()}}),typeof Reflect=="object"&&Reflect.construct){try{Reflect.construct(n,[])}catch(u){var o=u}Reflect.construct(e,[],n)}else{try{n.call()}catch(u){o=u}e.call(n.prototype)}else{try{throw Error()}catch(u){o=u}e()}}catch(u){if(u&&o&&typeof u.stack=="string"){for(var r=u.stack.split(`
`),l=o.stack.split(`
`),i=r.length-1,a=l.length-1;1<=i&&0<=a&&r[i]!==l[a];)a--;for(;1<=i&&0<=a;i--,a--)if(r[i]!==l[a]){if(i!==1||a!==1)do if(i--,a--,0>a||r[i]!==l[a]){var s=`
`+r[i].replace(" at new "," at ");return e.displayName&&s.includes("<anonymous>")&&(s=s.replace("<anonymous>",e.displayName)),s}while(1<=i&&0<=a);break}}}finally{Cl=!1,Error.prepareStackTrace=t}return(e=e?e.displayName||e.name:"")?Xt(e):""}function Pf(e){switch(e.tag){case 5:return Xt(e.type);case 16:return Xt("Lazy");case 13:return Xt("Suspense");case 19:return Xt("SuspenseList");case 0:case 2:case 15:return e=Sl(e.type,!1),e;case 11:return e=Sl(e.type.render,!1),e;case 1:return e=Sl(e.type,!0),e;default:return""}}function ni(e){if(e==null)return null;if(typeof e=="function")return e.displayName||e.name||null;if(typeof e=="string")return e;switch(e){case ut:return"Fragment";case st:return"Portal";case Jl:return"Profiler";case la:return"StrictMode";case Zl:return"Suspense";case ei:return"SuspenseList"}if(typeof e=="object")switch(e.$$typeof){case rc:return(e.displayName||"Context")+".Consumer";case oc:return(e._context.displayName||"Context")+".Provider";case ia:var n=e.render;return e=e.displayName,e||(e=n.displayName||n.name||"",e=e!==""?"ForwardRef("+e+")":"ForwardRef"),e;case aa:return n=e.displayName||null,n!==null?n:ni(e.type)||"Memo";case Cn:n=e._payload,e=e._init;try{return ni(e(n))}catch{}}return null}function kf(e){var n=e.type;switch(e.tag){case 24:return"Cache";case 9:return(n.displayName||"Context")+".Consumer";case 10:return(n._context.displayName||"Context")+".Provider";case 18:return"DehydratedFragment";case 11:return e=n.render,e=e.displayName||e.name||"",n.displayName||(e!==""?"ForwardRef("+e+")":"ForwardRef");case 7:return"Fragment";case 5:return n;case 4:return"Portal";case 3:return"Root";case 6:return"Text";case 16:return ni(n);case 8:return n===la?"StrictMode":"Mode";case 22:return"Offscreen";case 12:return"Profiler";case 21:return"Scope";case 13:return"Suspense";case 19:return"SuspenseList";case 25:return"TracingMarker";case 1:case 0:case 17:case 2:case 14:case 15:if(typeof n=="function")return n.displayName||n.name||null;if(typeof n=="string")return n}return null}function Ln(e){switch(typeof e){case"boolean":case"number":case"string":case"undefined":return e;case"object":return e;default:return""}}function ic(e){var n=e.type;return(e=e.nodeName)&&e.toLowerCase()==="input"&&(n==="checkbox"||n==="radio")}function _f(e){var n=ic(e)?"checked":"value",t=Object.getOwnPropertyDescriptor(e.constructor.prototype,n),o=""+e[n];if(!e.hasOwnProperty(n)&&typeof t<"u"&&typeof t.get=="function"&&typeof t.set=="function"){var r=t.get,l=t.set;return Object.defineProperty(e,n,{configurable:!0,get:function(){return r.call(this)},set:function(i){o=""+i,l.call(this,i)}}),Object.defineProperty(e,n,{enumerable:t.enumerable}),{getValue:function(){return o},setValue:function(i){o=""+i},stopTracking:function(){e._valueTracker=null,delete e[n]}}}}function qo(e){e._valueTracker||(e._valueTracker=_f(e))}function ac(e){if(!e)return!1;var n=e._valueTracker;if(!n)return!0;var t=n.getValue(),o="";return e&&(o=ic(e)?e.checked?"true":"false":e.value),e=o,e!==t?(n.setValue(e),!0):!1}function _r(e){if(e=e||(typeof document<"u"?document:void 0),typeof e>"u")return null;try{return e.activeElement||e.body}catch{return e.body}}function ti(e,n){var t=n.checked;return X({},n,{defaultChecked:void 0,defaultValue:void 0,value:void 0,checked:t??e._wrapperState.initialChecked})}function fs(e,n){var t=n.defaultValue==null?"":n.defaultValue,o=n.checked!=null?n.checked:n.defaultChecked;t=Ln(n.value!=null?n.value:t),e._wrapperState={initialChecked:o,initialValue:t,controlled:n.type==="checkbox"||n.type==="radio"?n.checked!=null:n.value!=null}}function sc(e,n){n=n.checked,n!=null&&ra(e,"checked",n,!1)}function oi(e,n){sc(e,n);var t=Ln(n.value),o=n.type;if(t!=null)o==="number"?(t===0&&e.value===""||e.value!=t)&&(e.value=""+t):e.value!==""+t&&(e.value=""+t);else if(o==="submit"||o==="reset"){e.removeAttribute("value");return}n.hasOwnProperty("value")?ri(e,n.type,t):n.hasOwnProperty("defaultValue")&&ri(e,n.type,Ln(n.defaultValue)),n.checked==null&&n.defaultChecked!=null&&(e.defaultChecked=!!n.defaultChecked)}function ms(e,n,t){if(n.hasOwnProperty("value")||n.hasOwnProperty("defaultValue")){var o=n.type;if(!(o!=="submit"&&o!=="reset"||n.value!==void 0&&n.value!==null))return;n=""+e._wrapperState.initialValue,t||n===e.value||(e.value=n),e.defaultValue=n}t=e.name,t!==""&&(e.name=""),e.defaultChecked=!!e._wrapperState.initialChecked,t!==""&&(e.name=t)}function ri(e,n,t){(n!=="number"||_r(e.ownerDocument)!==e)&&(t==null?e.defaultValue=""+e._wrapperState.initialValue:e.defaultValue!==""+t&&(e.defaultValue=""+t))}var Gt=Array.isArray;function Ct(e,n,t,o){if(e=e.options,n){n={};for(var r=0;r<t.length;r++)n["$"+t[r]]=!0;for(t=0;t<e.length;t++)r=n.hasOwnProperty("$"+e[t].value),e[t].selected!==r&&(e[t].selected=r),r&&o&&(e[t].defaultSelected=!0)}else{for(t=""+Ln(t),n=null,r=0;r<e.length;r++){if(e[r].value===t){e[r].selected=!0,o&&(e[r].defaultSelected=!0);return}n!==null||e[r].disabled||(n=e[r])}n!==null&&(n.selected=!0)}}function li(e,n){if(n.dangerouslySetInnerHTML!=null)throw Error(T(91));return X({},n,{value:void 0,defaultValue:void 0,children:""+e._wrapperState.initialValue})}function gs(e,n){var t=n.value;if(t==null){if(t=n.children,n=n.defaultValue,t!=null){if(n!=null)throw Error(T(92));if(Gt(t)){if(1<t.length)throw Error(T(93));t=t[0]}n=t}n==null&&(n=""),t=n}e._wrapperState={initialValue:Ln(t)}}function uc(e,n){var t=Ln(n.value),o=Ln(n.defaultValue);t!=null&&(t=""+t,t!==e.value&&(e.value=t),n.defaultValue==null&&e.defaultValue!==t&&(e.defaultValue=t)),o!=null&&(e.defaultValue=""+o)}function hs(e){var n=e.textContent;n===e._wrapperState.initialValue&&n!==""&&n!==null&&(e.value=n)}function cc(e){switch(e){case"svg":return"http://www.w3.org/2000/svg";case"math":return"http://www.w3.org/1998/Math/MathML";default:return"http://www.w3.org/1999/xhtml"}}function ii(e,n){return e==null||e==="http://www.w3.org/1999/xhtml"?cc(n):e==="http://www.w3.org/2000/svg"&&n==="foreignObject"?"http://www.w3.org/1999/xhtml":e}var Bo,dc=function(e){return typeof MSApp<"u"&&MSApp.execUnsafeLocalFunction?function(n,t,o,r){MSApp.execUnsafeLocalFunction(function(){return e(n,t,o,r)})}:e}(function(e,n){if(e.namespaceURI!=="http://www.w3.org/2000/svg"||"innerHTML"in e)e.innerHTML=n;else{for(Bo=Bo||document.createElement("div"),Bo.innerHTML="<svg>"+n.valueOf().toString()+"</svg>",n=Bo.firstChild;e.firstChild;)e.removeChild(e.firstChild);for(;n.firstChild;)e.appendChild(n.firstChild)}});function go(e,n){if(n){var t=e.firstChild;if(t&&t===e.lastChild&&t.nodeType===3){t.nodeValue=n;return}}e.textContent=n}var to={animationIterationCount:!0,aspectRatio:!0,borderImageOutset:!0,borderImageSlice:!0,borderImageWidth:!0,boxFlex:!0,boxFlexGroup:!0,boxOrdinalGroup:!0,columnCount:!0,columns:!0,flex:!0,flexGrow:!0,flexPositive:!0,flexShrink:!0,flexNegative:!0,flexOrder:!0,gridArea:!0,gridRow:!0,gridRowEnd:!0,gridRowSpan:!0,gridRowStart:!0,gridColumn:!0,gridColumnEnd:!0,gridColumnSpan:!0,gridColumnStart:!0,fontWeight:!0,lineClamp:!0,lineHeight:!0,opacity:!0,order:!0,orphans:!0,tabSize:!0,widows:!0,zIndex:!0,zoom:!0,fillOpacity:!0,floodOpacity:!0,stopOpacity:!0,strokeDasharray:!0,strokeDashoffset:!0,strokeMiterlimit:!0,strokeOpacity:!0,strokeWidth:!0},Ef=["Webkit","ms","Moz","O"];Object.keys(to).forEach(function(e){Ef.forEach(function(n){n=n+e.charAt(0).toUpperCase()+e.substring(1),to[n]=to[e]})});function pc(e,n,t){return n==null||typeof n=="boolean"||n===""?"":t||typeof n!="number"||n===0||to.hasOwnProperty(e)&&to[e]?(""+n).trim():n+"px"}function fc(e,n){e=e.style;for(var t in n)if(n.hasOwnProperty(t)){var o=t.indexOf("--")===0,r=pc(t,n[t],o);t==="float"&&(t="cssFloat"),o?e.setProperty(t,r):e[t]=r}}var jf=X({menuitem:!0},{area:!0,base:!0,br:!0,col:!0,embed:!0,hr:!0,img:!0,input:!0,keygen:!0,link:!0,meta:!0,param:!0,source:!0,track:!0,wbr:!0});function ai(e,n){if(n){if(jf[e]&&(n.children!=null||n.dangerouslySetInnerHTML!=null))throw Error(T(137,e));if(n.dangerouslySetInnerHTML!=null){if(n.children!=null)throw Error(T(60));if(typeof n.dangerouslySetInnerHTML!="object"||!("__html"in n.dangerouslySetInnerHTML))throw Error(T(61))}if(n.style!=null&&typeof n.style!="object")throw Error(T(62))}}function si(e,n){if(e.indexOf("-")===-1)return typeof n.is=="string";switch(e){case"annotation-xml":case"color-profile":case"font-face":case"font-face-src":case"font-face-uri":case"font-face-format":case"font-face-name":case"missing-glyph":return!1;default:return!0}}var ui=null;function sa(e){return e=e.target||e.srcElement||window,e.correspondingUseElement&&(e=e.correspondingUseElement),e.nodeType===3?e.parentNode:e}var ci=null,St=null,wt=null;function ys(e){if(e=zo(e)){if(typeof ci!="function")throw Error(T(280));var n=e.stateNode;n&&(n=rl(n),ci(e.stateNode,e.type,n))}}function mc(e){St?wt?wt.push(e):wt=[e]:St=e}function gc(){if(St){var e=St,n=wt;if(wt=St=null,ys(e),n)for(e=0;e<n.length;e++)ys(n[e])}}function hc(e,n){return e(n)}function yc(){}var wl=!1;function vc(e,n,t){if(wl)return e(n,t);wl=!0;try{return hc(e,n,t)}finally{wl=!1,(St!==null||wt!==null)&&(yc(),gc())}}function ho(e,n){var t=e.stateNode;if(t===null)return null;var o=rl(t);if(o===null)return null;t=o[n];e:switch(n){case"onClick":case"onClickCapture":case"onDoubleClick":case"onDoubleClickCapture":case"onMouseDown":case"onMouseDownCapture":case"onMouseMove":case"onMouseMoveCapture":case"onMouseUp":case"onMouseUpCapture":case"onMouseEnter":(o=!o.disabled)||(e=e.type,o=!(e==="button"||e==="input"||e==="select"||e==="textarea")),e=!o;break e;default:e=!1}if(e)return null;if(t&&typeof t!="function")throw Error(T(231,n,typeof t));return t}var di=!1;if(cn)try{var It={};Object.defineProperty(It,"passive",{get:function(){di=!0}}),window.addEventListener("test",It,It),window.removeEventListener("test",It,It)}catch{di=!1}function Tf(e,n,t,o,r,l,i,a,s){var u=Array.prototype.slice.call(arguments,3);try{n.apply(t,u)}catch(p){this.onError(p)}}var oo=!1,Er=null,jr=!1,pi=null,Nf={onError:function(e){oo=!0,Er=e}};function $f(e,n,t,o,r,l,i,a,s){oo=!1,Er=null,Tf.apply(Nf,arguments)}function Rf(e,n,t,o,r,l,i,a,s){if($f.apply(this,arguments),oo){if(oo){var u=Er;oo=!1,Er=null}else throw Error(T(198));jr||(jr=!0,pi=u)}}function ot(e){var n=e,t=e;if(e.alternate)for(;n.return;)n=n.return;else{e=n;do n=e,n.flags&4098&&(t=n.return),e=n.return;while(e)}return n.tag===3?t:null}function xc(e){if(e.tag===13){var n=e.memoizedState;if(n===null&&(e=e.alternate,e!==null&&(n=e.memoizedState)),n!==null)return n.dehydrated}return null}function vs(e){if(ot(e)!==e)throw Error(T(188))}function Df(e){var n=e.alternate;if(!n){if(n=ot(e),n===null)throw Error(T(188));return n!==e?null:e}for(var t=e,o=n;;){var r=t.return;if(r===null)break;var l=r.alternate;if(l===null){if(o=r.return,o!==null){t=o;continue}break}if(r.child===l.child){for(l=r.child;l;){if(l===t)return vs(r),e;if(l===o)return vs(r),n;l=l.sibling}throw Error(T(188))}if(t.return!==o.return)t=r,o=l;else{for(var i=!1,a=r.child;a;){if(a===t){i=!0,t=r,o=l;break}if(a===o){i=!0,o=r,t=l;break}a=a.sibling}if(!i){for(a=l.child;a;){if(a===t){i=!0,t=l,o=r;break}if(a===o){i=!0,o=l,t=r;break}a=a.sibling}if(!i)throw Error(T(189))}}if(t.alternate!==o)throw Error(T(190))}if(t.tag!==3)throw Error(T(188));return t.stateNode.current===t?e:n}function Cc(e){return e=Df(e),e!==null?Sc(e):null}function Sc(e){if(e.tag===5||e.tag===6)return e;for(e=e.child;e!==null;){var n=Sc(e);if(n!==null)return n;e=e.sibling}return null}var wc=be.unstable_scheduleCallback,xs=be.unstable_cancelCallback,bf=be.unstable_shouldYield,Mf=be.unstable_requestPaint,J=be.unstable_now,Of=be.unstable_getCurrentPriorityLevel,ua=be.unstable_ImmediatePriority,Pc=be.unstable_UserBlockingPriority,Tr=be.unstable_NormalPriority,Lf=be.unstable_LowPriority,kc=be.unstable_IdlePriority,el=null,nn=null;function zf(e){if(nn&&typeof nn.onCommitFiberRoot=="function")try{nn.onCommitFiberRoot(el,e,void 0,(e.current.flags&128)===128)}catch{}}var Qe=Math.clz32?Math.clz32:If,Af=Math.log,Ff=Math.LN2;function If(e){return e>>>=0,e===0?32:31-(Af(e)/Ff|0)|0}var Qo=64,Ko=4194304;function Jt(e){switch(e&-e){case 1:return 1;case 2:return 2;case 4:return 4;case 8:return 8;case 16:return 16;case 32:return 32;case 64:case 128:case 256:case 512:case 1024:case 2048:case 4096:case 8192:case 16384:case 32768:case 65536:case 131072:case 262144:case 524288:case 1048576:case 2097152:return e&4194240;case 4194304:case 8388608:case 16777216:case 33554432:case 67108864:return e&130023424;case 134217728:return 134217728;case 268435456:return 268435456;case 536870912:return 536870912;case 1073741824:return 1073741824;default:return e}}function Nr(e,n){var t=e.pendingLanes;if(t===0)return 0;var o=0,r=e.suspendedLanes,l=e.pingedLanes,i=t&268435455;if(i!==0){var a=i&~r;a!==0?o=Jt(a):(l&=i,l!==0&&(o=Jt(l)))}else i=t&~r,i!==0?o=Jt(i):l!==0&&(o=Jt(l));if(o===0)return 0;if(n!==0&&n!==o&&!(n&r)&&(r=o&-o,l=n&-n,r>=l||r===16&&(l&4194240)!==0))return n;if(o&4&&(o|=t&16),n=e.entangledLanes,n!==0)for(e=e.entanglements,n&=o;0<n;)t=31-Qe(n),r=1<<t,o|=e[t],n&=~r;return o}function Uf(e,n){switch(e){case 1:case 2:case 4:return n+250;case 8:case 16:case 32:case 64:case 128:case 256:case 512:case 1024:case 2048:case 4096:case 8192:case 16384:case 32768:case 65536:case 131072:case 262144:case 524288:case 1048576:case 2097152:return n+5e3;case 4194304:case 8388608:case 16777216:case 33554432:case 67108864:return-1;case 134217728:case 268435456:case 536870912:case 1073741824:return-1;default:return-1}}function Wf(e,n){for(var t=e.suspendedLanes,o=e.pingedLanes,r=e.expirationTimes,l=e.pendingLanes;0<l;){var i=31-Qe(l),a=1<<i,s=r[i];s===-1?(!(a&t)||a&o)&&(r[i]=Uf(a,n)):s<=n&&(e.expiredLanes|=a),l&=~a}}function fi(e){return e=e.pendingLanes&-1073741825,e!==0?e:e&1073741824?1073741824:0}function _c(){var e=Qo;return Qo<<=1,!(Qo&4194240)&&(Qo=64),e}function Pl(e){for(var n=[],t=0;31>t;t++)n.push(e);return n}function Oo(e,n,t){e.pendingLanes|=n,n!==536870912&&(e.suspendedLanes=0,e.pingedLanes=0),e=e.eventTimes,n=31-Qe(n),e[n]=t}function Hf(e,n){var t=e.pendingLanes&~n;e.pendingLanes=n,e.suspendedLanes=0,e.pingedLanes=0,e.expiredLanes&=n,e.mutableReadLanes&=n,e.entangledLanes&=n,n=e.entanglements;var o=e.eventTimes;for(e=e.expirationTimes;0<t;){var r=31-Qe(t),l=1<<r;n[r]=0,o[r]=-1,e[r]=-1,t&=~l}}function ca(e,n){var t=e.entangledLanes|=n;for(e=e.entanglements;t;){var o=31-Qe(t),r=1<<o;r&n|e[o]&n&&(e[o]|=n),t&=~r}}var I=0;function Ec(e){return e&=-e,1<e?4<e?e&268435455?16:536870912:4:1}var jc,da,Tc,Nc,$c,mi=!1,Yo=[],jn=null,Tn=null,Nn=null,yo=new Map,vo=new Map,wn=[],Vf="mousedown mouseup touchcancel touchend touchstart auxclick dblclick pointercancel pointerdown pointerup dragend dragstart drop compositionend compositionstart keydown keypress keyup input textInput copy cut paste click change contextmenu reset submit".split(" ");function Cs(e,n){switch(e){case"focusin":case"focusout":jn=null;break;case"dragenter":case"dragleave":Tn=null;break;case"mouseover":case"mouseout":Nn=null;break;case"pointerover":case"pointerout":yo.delete(n.pointerId);break;case"gotpointercapture":case"lostpointercapture":vo.delete(n.pointerId)}}function Ut(e,n,t,o,r,l){return e===null||e.nativeEvent!==l?(e={blockedOn:n,domEventName:t,eventSystemFlags:o,nativeEvent:l,targetContainers:[r]},n!==null&&(n=zo(n),n!==null&&da(n)),e):(e.eventSystemFlags|=o,n=e.targetContainers,r!==null&&n.indexOf(r)===-1&&n.push(r),e)}function qf(e,n,t,o,r){switch(n){case"focusin":return jn=Ut(jn,e,n,t,o,r),!0;case"dragenter":return Tn=Ut(Tn,e,n,t,o,r),!0;case"mouseover":return Nn=Ut(Nn,e,n,t,o,r),!0;case"pointerover":var l=r.pointerId;return yo.set(l,Ut(yo.get(l)||null,e,n,t,o,r)),!0;case"gotpointercapture":return l=r.pointerId,vo.set(l,Ut(vo.get(l)||null,e,n,t,o,r)),!0}return!1}function Rc(e){var n=Bn(e.target);if(n!==null){var t=ot(n);if(t!==null){if(n=t.tag,n===13){if(n=xc(t),n!==null){e.blockedOn=n,$c(e.priority,function(){Tc(t)});return}}else if(n===3&&t.stateNode.current.memoizedState.isDehydrated){e.blockedOn=t.tag===3?t.stateNode.containerInfo:null;return}}}e.blockedOn=null}function gr(e){if(e.blockedOn!==null)return!1;for(var n=e.targetContainers;0<n.length;){var t=gi(e.domEventName,e.eventSystemFlags,n[0],e.nativeEvent);if(t===null){t=e.nativeEvent;var o=new t.constructor(t.type,t);ui=o,t.target.dispatchEvent(o),ui=null}else return n=zo(t),n!==null&&da(n),e.blockedOn=t,!1;n.shift()}return!0}function Ss(e,n,t){gr(e)&&t.delete(n)}function Bf(){mi=!1,jn!==null&&gr(jn)&&(jn=null),Tn!==null&&gr(Tn)&&(Tn=null),Nn!==null&&gr(Nn)&&(Nn=null),yo.forEach(Ss),vo.forEach(Ss)}function Wt(e,n){e.blockedOn===n&&(e.blockedOn=null,mi||(mi=!0,be.unstable_scheduleCallback(be.unstable_NormalPriority,Bf)))}function xo(e){function n(r){return Wt(r,e)}if(0<Yo.length){Wt(Yo[0],e);for(var t=1;t<Yo.length;t++){var o=Yo[t];o.blockedOn===e&&(o.blockedOn=null)}}for(jn!==null&&Wt(jn,e),Tn!==null&&Wt(Tn,e),Nn!==null&&Wt(Nn,e),yo.forEach(n),vo.forEach(n),t=0;t<wn.length;t++)o=wn[t],o.blockedOn===e&&(o.blockedOn=null);for(;0<wn.length&&(t=wn[0],t.blockedOn===null);)Rc(t),t.blockedOn===null&&wn.shift()}var Pt=mn.ReactCurrentBatchConfig,$r=!0;function Qf(e,n,t,o){var r=I,l=Pt.transition;Pt.transition=null;try{I=1,pa(e,n,t,o)}finally{I=r,Pt.transition=l}}function Kf(e,n,t,o){var r=I,l=Pt.transition;Pt.transition=null;try{I=4,pa(e,n,t,o)}finally{I=r,Pt.transition=l}}function pa(e,n,t,o){if($r){var r=gi(e,n,t,o);if(r===null)bl(e,n,o,Rr,t),Cs(e,o);else if(qf(r,e,n,t,o))o.stopPropagation();else if(Cs(e,o),n&4&&-1<Vf.indexOf(e)){for(;r!==null;){var l=zo(r);if(l!==null&&jc(l),l=gi(e,n,t,o),l===null&&bl(e,n,o,Rr,t),l===r)break;r=l}r!==null&&o.stopPropagation()}else bl(e,n,o,null,t)}}var Rr=null;function gi(e,n,t,o){if(Rr=null,e=sa(o),e=Bn(e),e!==null)if(n=ot(e),n===null)e=null;else if(t=n.tag,t===13){if(e=xc(n),e!==null)return e;e=null}else if(t===3){if(n.stateNode.current.memoizedState.isDehydrated)return n.tag===3?n.stateNode.containerInfo:null;e=null}else n!==e&&(e=null);return Rr=e,null}function Dc(e){switch(e){case"cancel":case"click":case"close":case"contextmenu":case"copy":case"cut":case"auxclick":case"dblclick":case"dragend":case"dragstart":case"drop":case"focusin":case"focusout":case"input":case"invalid":case"keydown":case"keypress":case"keyup":case"mousedown":case"mouseup":case"paste":case"pause":case"play":case"pointercancel":case"pointerdown":case"pointerup":case"ratechange":case"reset":case"resize":case"seeked":case"submit":case"touchcancel":case"touchend":case"touchstart":case"volumechange":case"change":case"selectionchange":case"textInput":case"compositionstart":case"compositionend":case"compositionupdate":case"beforeblur":case"afterblur":case"beforeinput":case"blur":case"fullscreenchange":case"focus":case"hashchange":case"popstate":case"select":case"selectstart":return 1;case"drag":case"dragenter":case"dragexit":case"dragleave":case"dragover":case"mousemove":case"mouseout":case"mouseover":case"pointermove":case"pointerout":case"pointerover":case"scroll":case"toggle":case"touchmove":case"wheel":case"mouseenter":case"mouseleave":case"pointerenter":case"pointerleave":return 4;case"message":switch(Of()){case ua:return 1;case Pc:return 4;case Tr:case Lf:return 16;case kc:return 536870912;default:return 16}default:return 16}}var kn=null,fa=null,hr=null;function bc(){if(hr)return hr;var e,n=fa,t=n.length,o,r="value"in kn?kn.value:kn.textContent,l=r.length;for(e=0;e<t&&n[e]===r[e];e++);var i=t-e;for(o=1;o<=i&&n[t-o]===r[l-o];o++);return hr=r.slice(e,1<o?1-o:void 0)}function yr(e){var n=e.keyCode;return"charCode"in e?(e=e.charCode,e===0&&n===13&&(e=13)):e=n,e===10&&(e=13),32<=e||e===13?e:0}function Xo(){return!0}function ws(){return!1}function Oe(e){function n(t,o,r,l,i){this._reactName=t,this._targetInst=r,this.type=o,this.nativeEvent=l,this.target=i,this.currentTarget=null;for(var a in e)e.hasOwnProperty(a)&&(t=e[a],this[a]=t?t(l):l[a]);return this.isDefaultPrevented=(l.defaultPrevented!=null?l.defaultPrevented:l.returnValue===!1)?Xo:ws,this.isPropagationStopped=ws,this}return X(n.prototype,{preventDefault:function(){this.defaultPrevented=!0;var t=this.nativeEvent;t&&(t.preventDefault?t.preventDefault():typeof t.returnValue!="unknown"&&(t.returnValue=!1),this.isDefaultPrevented=Xo)},stopPropagation:function(){var t=this.nativeEvent;t&&(t.stopPropagation?t.stopPropagation():typeof t.cancelBubble!="unknown"&&(t.cancelBubble=!0),this.isPropagationStopped=Xo)},persist:function(){},isPersistent:Xo}),n}var Mt={eventPhase:0,bubbles:0,cancelable:0,timeStamp:function(e){return e.timeStamp||Date.now()},defaultPrevented:0,isTrusted:0},ma=Oe(Mt),Lo=X({},Mt,{view:0,detail:0}),Yf=Oe(Lo),kl,_l,Ht,nl=X({},Lo,{screenX:0,screenY:0,clientX:0,clientY:0,pageX:0,pageY:0,ctrlKey:0,shiftKey:0,altKey:0,metaKey:0,getModifierState:ga,button:0,buttons:0,relatedTarget:function(e){return e.relatedTarget===void 0?e.fromElement===e.srcElement?e.toElement:e.fromElement:e.relatedTarget},movementX:function(e){return"movementX"in e?e.movementX:(e!==Ht&&(Ht&&e.type==="mousemove"?(kl=e.screenX-Ht.screenX,_l=e.screenY-Ht.screenY):_l=kl=0,Ht=e),kl)},movementY:function(e){return"movementY"in e?e.movementY:_l}}),Ps=Oe(nl),Xf=X({},nl,{dataTransfer:0}),Gf=Oe(Xf),Jf=X({},Lo,{relatedTarget:0}),El=Oe(Jf),Zf=X({},Mt,{animationName:0,elapsedTime:0,pseudoElement:0}),em=Oe(Zf),nm=X({},Mt,{clipboardData:function(e){return"clipboardData"in e?e.clipboardData:window.clipboardData}}),tm=Oe(nm),om=X({},Mt,{data:0}),ks=Oe(om),rm={Esc:"Escape",Spacebar:" ",Left:"ArrowLeft",Up:"ArrowUp",Right:"ArrowRight",Down:"ArrowDown",Del:"Delete",Win:"OS",Menu:"ContextMenu",Apps:"ContextMenu",Scroll:"ScrollLock",MozPrintableKey:"Unidentified"},lm={8:"Backspace",9:"Tab",12:"Clear",13:"Enter",16:"Shift",17:"Control",18:"Alt",19:"Pause",20:"CapsLock",27:"Escape",32:" ",33:"PageUp",34:"PageDown",35:"End",36:"Home",37:"ArrowLeft",38:"ArrowUp",39:"ArrowRight",40:"ArrowDown",45:"Insert",46:"Delete",112:"F1",113:"F2",114:"F3",115:"F4",116:"F5",117:"F6",118:"F7",119:"F8",120:"F9",121:"F10",122:"F11",123:"F12",144:"NumLock",145:"ScrollLock",224:"Meta"},im={Alt:"altKey",Control:"ctrlKey",Meta:"metaKey",Shift:"shiftKey"};function am(e){var n=this.nativeEvent;return n.getModifierState?n.getModifierState(e):(e=im[e])?!!n[e]:!1}function ga(){return am}var sm=X({},Lo,{key:function(e){if(e.key){var n=rm[e.key]||e.key;if(n!=="Unidentified")return n}return e.type==="keypress"?(e=yr(e),e===13?"Enter":String.fromCharCode(e)):e.type==="keydown"||e.type==="keyup"?lm[e.keyCode]||"Unidentified":""},code:0,location:0,ctrlKey:0,shiftKey:0,altKey:0,metaKey:0,repeat:0,locale:0,getModifierState:ga,charCode:function(e){return e.type==="keypress"?yr(e):0},keyCode:function(e){return e.type==="keydown"||e.type==="keyup"?e.keyCode:0},which:function(e){return e.type==="keypress"?yr(e):e.type==="keydown"||e.type==="keyup"?e.keyCode:0}}),um=Oe(sm),cm=X({},nl,{pointerId:0,width:0,height:0,pressure:0,tangentialPressure:0,tiltX:0,tiltY:0,twist:0,pointerType:0,isPrimary:0}),_s=Oe(cm),dm=X({},Lo,{touches:0,targetTouches:0,changedTouches:0,altKey:0,metaKey:0,ctrlKey:0,shiftKey:0,getModifierState:ga}),pm=Oe(dm),fm=X({},Mt,{propertyName:0,elapsedTime:0,pseudoElement:0}),mm=Oe(fm),gm=X({},nl,{deltaX:function(e){return"deltaX"in e?e.deltaX:"wheelDeltaX"in e?-e.wheelDeltaX:0},deltaY:function(e){return"deltaY"in e?e.deltaY:"wheelDeltaY"in e?-e.wheelDeltaY:"wheelDelta"in e?-e.wheelDelta:0},deltaZ:0,deltaMode:0}),hm=Oe(gm),ym=[9,13,27,32],ha=cn&&"CompositionEvent"in window,ro=null;cn&&"documentMode"in document&&(ro=document.documentMode);var vm=cn&&"TextEvent"in window&&!ro,Mc=cn&&(!ha||ro&&8<ro&&11>=ro),Es=" ",js=!1;function Oc(e,n){switch(e){case"keyup":return ym.indexOf(n.keyCode)!==-1;case"keydown":return n.keyCode!==229;case"keypress":case"mousedown":case"focusout":return!0;default:return!1}}function Lc(e){return e=e.detail,typeof e=="object"&&"data"in e?e.data:null}var ct=!1;function xm(e,n){switch(e){case"compositionend":return Lc(n);case"keypress":return n.which!==32?null:(js=!0,Es);case"textInput":return e=n.data,e===Es&&js?null:e;default:return null}}function Cm(e,n){if(ct)return e==="compositionend"||!ha&&Oc(e,n)?(e=bc(),hr=fa=kn=null,ct=!1,e):null;switch(e){case"paste":return null;case"keypress":if(!(n.ctrlKey||n.altKey||n.metaKey)||n.ctrlKey&&n.altKey){if(n.char&&1<n.char.length)return n.char;if(n.which)return String.fromCharCode(n.which)}return null;case"compositionend":return Mc&&n.locale!=="ko"?null:n.data;default:return null}}var Sm={color:!0,date:!0,datetime:!0,"datetime-local":!0,email:!0,month:!0,number:!0,password:!0,range:!0,search:!0,tel:!0,text:!0,time:!0,url:!0,week:!0};function Ts(e){var n=e&&e.nodeName&&e.nodeName.toLowerCase();return n==="input"?!!Sm[e.type]:n==="textarea"}function zc(e,n,t,o){mc(o),n=Dr(n,"onChange"),0<n.length&&(t=new ma("onChange","change",null,t,o),e.push({event:t,listeners:n}))}var lo=null,Co=null;function wm(e){Kc(e,0)}function tl(e){var n=ft(e);if(ac(n))return e}function Pm(e,n){if(e==="change")return n}var Ac=!1;if(cn){var jl;if(cn){var Tl="oninput"in document;if(!Tl){var Ns=document.createElement("div");Ns.setAttribute("oninput","return;"),Tl=typeof Ns.oninput=="function"}jl=Tl}else jl=!1;Ac=jl&&(!document.documentMode||9<document.documentMode)}function $s(){lo&&(lo.detachEvent("onpropertychange",Fc),Co=lo=null)}function Fc(e){if(e.propertyName==="value"&&tl(Co)){var n=[];zc(n,Co,e,sa(e)),vc(wm,n)}}function km(e,n,t){e==="focusin"?($s(),lo=n,Co=t,lo.attachEvent("onpropertychange",Fc)):e==="focusout"&&$s()}function _m(e){if(e==="selectionchange"||e==="keyup"||e==="keydown")return tl(Co)}function Em(e,n){if(e==="click")return tl(n)}function jm(e,n){if(e==="input"||e==="change")return tl(n)}function Tm(e,n){return e===n&&(e!==0||1/e===1/n)||e!==e&&n!==n}var Ye=typeof Object.is=="function"?Object.is:Tm;function So(e,n){if(Ye(e,n))return!0;if(typeof e!="object"||e===null||typeof n!="object"||n===null)return!1;var t=Object.keys(e),o=Object.keys(n);if(t.length!==o.length)return!1;for(o=0;o<t.length;o++){var r=t[o];if(!Gl.call(n,r)||!Ye(e[r],n[r]))return!1}return!0}function Rs(e){for(;e&&e.firstChild;)e=e.firstChild;return e}function Ds(e,n){var t=Rs(e);e=0;for(var o;t;){if(t.nodeType===3){if(o=e+t.textContent.length,e<=n&&o>=n)return{node:t,offset:n-e};e=o}e:{for(;t;){if(t.nextSibling){t=t.nextSibling;break e}t=t.parentNode}t=void 0}t=Rs(t)}}function Ic(e,n){return e&&n?e===n?!0:e&&e.nodeType===3?!1:n&&n.nodeType===3?Ic(e,n.parentNode):"contains"in e?e.contains(n):e.compareDocumentPosition?!!(e.compareDocumentPosition(n)&16):!1:!1}function Uc(){for(var e=window,n=_r();n instanceof e.HTMLIFrameElement;){try{var t=typeof n.contentWindow.location.href=="string"}catch{t=!1}if(t)e=n.contentWindow;else break;n=_r(e.document)}return n}function ya(e){var n=e&&e.nodeName&&e.nodeName.toLowerCase();return n&&(n==="input"&&(e.type==="text"||e.type==="search"||e.type==="tel"||e.type==="url"||e.type==="password")||n==="textarea"||e.contentEditable==="true")}function Nm(e){var n=Uc(),t=e.focusedElem,o=e.selectionRange;if(n!==t&&t&&t.ownerDocument&&Ic(t.ownerDocument.documentElement,t)){if(o!==null&&ya(t)){if(n=o.start,e=o.end,e===void 0&&(e=n),"selectionStart"in t)t.selectionStart=n,t.selectionEnd=Math.min(e,t.value.length);else if(e=(n=t.ownerDocument||document)&&n.defaultView||window,e.getSelection){e=e.getSelection();var r=t.textContent.length,l=Math.min(o.start,r);o=o.end===void 0?l:Math.min(o.end,r),!e.extend&&l>o&&(r=o,o=l,l=r),r=Ds(t,l);var i=Ds(t,o);r&&i&&(e.rangeCount!==1||e.anchorNode!==r.node||e.anchorOffset!==r.offset||e.focusNode!==i.node||e.focusOffset!==i.offset)&&(n=n.createRange(),n.setStart(r.node,r.offset),e.removeAllRanges(),l>o?(e.addRange(n),e.extend(i.node,i.offset)):(n.setEnd(i.node,i.offset),e.addRange(n)))}}for(n=[],e=t;e=e.parentNode;)e.nodeType===1&&n.push({element:e,left:e.scrollLeft,top:e.scrollTop});for(typeof t.focus=="function"&&t.focus(),t=0;t<n.length;t++)e=n[t],e.element.scrollLeft=e.left,e.element.scrollTop=e.top}}var $m=cn&&"documentMode"in document&&11>=document.documentMode,dt=null,hi=null,io=null,yi=!1;function bs(e,n,t){var o=t.window===t?t.document:t.nodeType===9?t:t.ownerDocument;yi||dt==null||dt!==_r(o)||(o=dt,"selectionStart"in o&&ya(o)?o={start:o.selectionStart,end:o.selectionEnd}:(o=(o.ownerDocument&&o.ownerDocument.defaultView||window).getSelection(),o={anchorNode:o.anchorNode,anchorOffset:o.anchorOffset,focusNode:o.focusNode,focusOffset:o.focusOffset}),io&&So(io,o)||(io=o,o=Dr(hi,"onSelect"),0<o.length&&(n=new ma("onSelect","select",null,n,t),e.push({event:n,listeners:o}),n.target=dt)))}function Go(e,n){var t={};return t[e.toLowerCase()]=n.toLowerCase(),t["Webkit"+e]="webkit"+n,t["Moz"+e]="moz"+n,t}var pt={animationend:Go("Animation","AnimationEnd"),animationiteration:Go("Animation","AnimationIteration"),animationstart:Go("Animation","AnimationStart"),transitionend:Go("Transition","TransitionEnd")},Nl={},Wc={};cn&&(Wc=document.createElement("div").style,"AnimationEvent"in window||(delete pt.animationend.animation,delete pt.animationiteration.animation,delete pt.animationstart.animation),"TransitionEvent"in window||delete pt.transitionend.transition);function ol(e){if(Nl[e])return Nl[e];if(!pt[e])return e;var n=pt[e],t;for(t in n)if(n.hasOwnProperty(t)&&t in Wc)return Nl[e]=n[t];return e}var Hc=ol("animationend"),Vc=ol("animationiteration"),qc=ol("animationstart"),Bc=ol("transitionend"),Qc=new Map,Ms="abort auxClick cancel canPlay canPlayThrough click close contextMenu copy cut drag dragEnd dragEnter dragExit dragLeave dragOver dragStart drop durationChange emptied encrypted ended error gotPointerCapture input invalid keyDown keyPress keyUp load loadedData loadedMetadata loadStart lostPointerCapture mouseDown mouseMove mouseOut mouseOver mouseUp paste pause play playing pointerCancel pointerDown pointerMove pointerOut pointerOver pointerUp progress rateChange reset resize seeked seeking stalled submit suspend timeUpdate touchCancel touchEnd touchStart volumeChange scroll toggle touchMove waiting wheel".split(" ");function An(e,n){Qc.set(e,n),tt(n,[e])}for(var $l=0;$l<Ms.length;$l++){var Rl=Ms[$l],Rm=Rl.toLowerCase(),Dm=Rl[0].toUpperCase()+Rl.slice(1);An(Rm,"on"+Dm)}An(Hc,"onAnimationEnd");An(Vc,"onAnimationIteration");An(qc,"onAnimationStart");An("dblclick","onDoubleClick");An("focusin","onFocus");An("focusout","onBlur");An(Bc,"onTransitionEnd");Et("onMouseEnter",["mouseout","mouseover"]);Et("onMouseLeave",["mouseout","mouseover"]);Et("onPointerEnter",["pointerout","pointerover"]);Et("onPointerLeave",["pointerout","pointerover"]);tt("onChange","change click focusin focusout input keydown keyup selectionchange".split(" "));tt("onSelect","focusout contextmenu dragend focusin keydown keyup mousedown mouseup selectionchange".split(" "));tt("onBeforeInput",["compositionend","keypress","textInput","paste"]);tt("onCompositionEnd","compositionend focusout keydown keypress keyup mousedown".split(" "));tt("onCompositionStart","compositionstart focusout keydown keypress keyup mousedown".split(" "));tt("onCompositionUpdate","compositionupdate focusout keydown keypress keyup mousedown".split(" "));var Zt="abort canplay canplaythrough durationchange emptied encrypted ended error loadeddata loadedmetadata loadstart pause play playing progress ratechange resize seeked seeking stalled suspend timeupdate volumechange waiting".split(" "),bm=new Set("cancel close invalid load scroll toggle".split(" ").concat(Zt));function Os(e,n,t){var o=e.type||"unknown-event";e.currentTarget=t,Rf(o,n,void 0,e),e.currentTarget=null}function Kc(e,n){n=(n&4)!==0;for(var t=0;t<e.length;t++){var o=e[t],r=o.event;o=o.listeners;e:{var l=void 0;if(n)for(var i=o.length-1;0<=i;i--){var a=o[i],s=a.instance,u=a.currentTarget;if(a=a.listener,s!==l&&r.isPropagationStopped())break e;Os(r,a,u),l=s}else for(i=0;i<o.length;i++){if(a=o[i],s=a.instance,u=a.currentTarget,a=a.listener,s!==l&&r.isPropagationStopped())break e;Os(r,a,u),l=s}}}if(jr)throw e=pi,jr=!1,pi=null,e}function V(e,n){var t=n[wi];t===void 0&&(t=n[wi]=new Set);var o=e+"__bubble";t.has(o)||(Yc(n,e,2,!1),t.add(o))}function Dl(e,n,t){var o=0;n&&(o|=4),Yc(t,e,o,n)}var Jo="_reactListening"+Math.random().toString(36).slice(2);function wo(e){if(!e[Jo]){e[Jo]=!0,tc.forEach(function(t){t!=="selectionchange"&&(bm.has(t)||Dl(t,!1,e),Dl(t,!0,e))});var n=e.nodeType===9?e:e.ownerDocument;n===null||n[Jo]||(n[Jo]=!0,Dl("selectionchange",!1,n))}}function Yc(e,n,t,o){switch(Dc(n)){case 1:var r=Qf;break;case 4:r=Kf;break;default:r=pa}t=r.bind(null,n,t,e),r=void 0,!di||n!=="touchstart"&&n!=="touchmove"&&n!=="wheel"||(r=!0),o?r!==void 0?e.addEventListener(n,t,{capture:!0,passive:r}):e.addEventListener(n,t,!0):r!==void 0?e.addEventListener(n,t,{passive:r}):e.addEventListener(n,t,!1)}function bl(e,n,t,o,r){var l=o;if(!(n&1)&&!(n&2)&&o!==null)e:for(;;){if(o===null)return;var i=o.tag;if(i===3||i===4){var a=o.stateNode.containerInfo;if(a===r||a.nodeType===8&&a.parentNode===r)break;if(i===4)for(i=o.return;i!==null;){var s=i.tag;if((s===3||s===4)&&(s=i.stateNode.containerInfo,s===r||s.nodeType===8&&s.parentNode===r))return;i=i.return}for(;a!==null;){if(i=Bn(a),i===null)return;if(s=i.tag,s===5||s===6){o=l=i;continue e}a=a.parentNode}}o=o.return}vc(function(){var u=l,p=sa(t),f=[];e:{var m=Qc.get(e);if(m!==void 0){var y=ma,x=e;switch(e){case"keypress":if(yr(t)===0)break e;case"keydown":case"keyup":y=um;break;case"focusin":x="focus",y=El;break;case"focusout":x="blur",y=El;break;case"beforeblur":case"afterblur":y=El;break;case"click":if(t.button===2)break e;case"auxclick":case"dblclick":case"mousedown":case"mousemove":case"mouseup":case"mouseout":case"mouseover":case"contextmenu":y=Ps;break;case"drag":case"dragend":case"dragenter":case"dragexit":case"dragleave":case"dragover":case"dragstart":case"drop":y=Gf;break;case"touchcancel":case"touchend":case"touchmove":case"touchstart":y=pm;break;case Hc:case Vc:case qc:y=em;break;case Bc:y=mm;break;case"scroll":y=Yf;break;case"wheel":y=hm;break;case"copy":case"cut":case"paste":y=tm;break;case"gotpointercapture":case"lostpointercapture":case"pointercancel":case"pointerdown":case"pointermove":case"pointerout":case"pointerover":case"pointerup":y=_s}var C=(n&4)!==0,k=!C&&e==="scroll",g=C?m!==null?m+"Capture":null:m;C=[];for(var d=u,h;d!==null;){h=d;var v=h.stateNode;if(h.tag===5&&v!==null&&(h=v,g!==null&&(v=ho(d,g),v!=null&&C.push(Po(d,v,h)))),k)break;d=d.return}0<C.length&&(m=new y(m,x,null,t,p),f.push({event:m,listeners:C}))}}if(!(n&7)){e:{if(m=e==="mouseover"||e==="pointerover",y=e==="mouseout"||e==="pointerout",m&&t!==ui&&(x=t.relatedTarget||t.fromElement)&&(Bn(x)||x[dn]))break e;if((y||m)&&(m=p.window===p?p:(m=p.ownerDocument)?m.defaultView||m.parentWindow:window,y?(x=t.relatedTarget||t.toElement,y=u,x=x?Bn(x):null,x!==null&&(k=ot(x),x!==k||x.tag!==5&&x.tag!==6)&&(x=null)):(y=null,x=u),y!==x)){if(C=Ps,v="onMouseLeave",g="onMouseEnter",d="mouse",(e==="pointerout"||e==="pointerover")&&(C=_s,v="onPointerLeave",g="onPointerEnter",d="pointer"),k=y==null?m:ft(y),h=x==null?m:ft(x),m=new C(v,d+"leave",y,t,p),m.target=k,m.relatedTarget=h,v=null,Bn(p)===u&&(C=new C(g,d+"enter",x,t,p),C.target=h,C.relatedTarget=k,v=C),k=v,y&&x)n:{for(C=y,g=x,d=0,h=C;h;h=at(h))d++;for(h=0,v=g;v;v=at(v))h++;for(;0<d-h;)C=at(C),d--;for(;0<h-d;)g=at(g),h--;for(;d--;){if(C===g||g!==null&&C===g.alternate)break n;C=at(C),g=at(g)}C=null}else C=null;y!==null&&Ls(f,m,y,C,!1),x!==null&&k!==null&&Ls(f,k,x,C,!0)}}e:{if(m=u?ft(u):window,y=m.nodeName&&m.nodeName.toLowerCase(),y==="select"||y==="input"&&m.type==="file")var w=Pm;else if(Ts(m))if(Ac)w=jm;else{w=_m;var _=km}else(y=m.nodeName)&&y.toLowerCase()==="input"&&(m.type==="checkbox"||m.type==="radio")&&(w=Em);if(w&&(w=w(e,u))){zc(f,w,t,p);break e}_&&_(e,m,u),e==="focusout"&&(_=m._wrapperState)&&_.controlled&&m.type==="number"&&ri(m,"number",m.value)}switch(_=u?ft(u):window,e){case"focusin":(Ts(_)||_.contentEditable==="true")&&(dt=_,hi=u,io=null);break;case"focusout":io=hi=dt=null;break;case"mousedown":yi=!0;break;case"contextmenu":case"mouseup":case"dragend":yi=!1,bs(f,t,p);break;case"selectionchange":if($m)break;case"keydown":case"keyup":bs(f,t,p)}var j;if(ha)e:{switch(e){case"compositionstart":var N="onCompositionStart";break e;case"compositionend":N="onCompositionEnd";break e;case"compositionupdate":N="onCompositionUpdate";break e}N=void 0}else ct?Oc(e,t)&&(N="onCompositionEnd"):e==="keydown"&&t.keyCode===229&&(N="onCompositionStart");N&&(Mc&&t.locale!=="ko"&&(ct||N!=="onCompositionStart"?N==="onCompositionEnd"&&ct&&(j=bc()):(kn=p,fa="value"in kn?kn.value:kn.textContent,ct=!0)),_=Dr(u,N),0<_.length&&(N=new ks(N,e,null,t,p),f.push({event:N,listeners:_}),j?N.data=j:(j=Lc(t),j!==null&&(N.data=j)))),(j=vm?xm(e,t):Cm(e,t))&&(u=Dr(u,"onBeforeInput"),0<u.length&&(p=new ks("onBeforeInput","beforeinput",null,t,p),f.push({event:p,listeners:u}),p.data=j))}Kc(f,n)})}function Po(e,n,t){return{instance:e,listener:n,currentTarget:t}}function Dr(e,n){for(var t=n+"Capture",o=[];e!==null;){var r=e,l=r.stateNode;r.tag===5&&l!==null&&(r=l,l=ho(e,t),l!=null&&o.unshift(Po(e,l,r)),l=ho(e,n),l!=null&&o.push(Po(e,l,r))),e=e.return}return o}function at(e){if(e===null)return null;do e=e.return;while(e&&e.tag!==5);return e||null}function Ls(e,n,t,o,r){for(var l=n._reactName,i=[];t!==null&&t!==o;){var a=t,s=a.alternate,u=a.stateNode;if(s!==null&&s===o)break;a.tag===5&&u!==null&&(a=u,r?(s=ho(t,l),s!=null&&i.unshift(Po(t,s,a))):r||(s=ho(t,l),s!=null&&i.push(Po(t,s,a)))),t=t.return}i.length!==0&&e.push({event:n,listeners:i})}var Mm=/\r\n?/g,Om=/\u0000|\uFFFD/g;function zs(e){return(typeof e=="string"?e:""+e).replace(Mm,`
`).replace(Om,"")}function Zo(e,n,t){if(n=zs(n),zs(e)!==n&&t)throw Error(T(425))}function br(){}var vi=null,xi=null;function Ci(e,n){return e==="textarea"||e==="noscript"||typeof n.children=="string"||typeof n.children=="number"||typeof n.dangerouslySetInnerHTML=="object"&&n.dangerouslySetInnerHTML!==null&&n.dangerouslySetInnerHTML.__html!=null}var Si=typeof setTimeout=="function"?setTimeout:void 0,Lm=typeof clearTimeout=="function"?clearTimeout:void 0,As=typeof Promise=="function"?Promise:void 0,zm=typeof queueMicrotask=="function"?queueMicrotask:typeof As<"u"?function(e){return As.resolve(null).then(e).catch(Am)}:Si;function Am(e){setTimeout(function(){throw e})}function Ml(e,n){var t=n,o=0;do{var r=t.nextSibling;if(e.removeChild(t),r&&r.nodeType===8)if(t=r.data,t==="/$"){if(o===0){e.removeChild(r),xo(n);return}o--}else t!=="$"&&t!=="$?"&&t!=="$!"||o++;t=r}while(t);xo(n)}function $n(e){for(;e!=null;e=e.nextSibling){var n=e.nodeType;if(n===1||n===3)break;if(n===8){if(n=e.data,n==="$"||n==="$!"||n==="$?")break;if(n==="/$")return null}}return e}function Fs(e){e=e.previousSibling;for(var n=0;e;){if(e.nodeType===8){var t=e.data;if(t==="$"||t==="$!"||t==="$?"){if(n===0)return e;n--}else t==="/$"&&n++}e=e.previousSibling}return null}var Ot=Math.random().toString(36).slice(2),en="__reactFiber$"+Ot,ko="__reactProps$"+Ot,dn="__reactContainer$"+Ot,wi="__reactEvents$"+Ot,Fm="__reactListeners$"+Ot,Im="__reactHandles$"+Ot;function Bn(e){var n=e[en];if(n)return n;for(var t=e.parentNode;t;){if(n=t[dn]||t[en]){if(t=n.alternate,n.child!==null||t!==null&&t.child!==null)for(e=Fs(e);e!==null;){if(t=e[en])return t;e=Fs(e)}return n}e=t,t=e.parentNode}return null}function zo(e){return e=e[en]||e[dn],!e||e.tag!==5&&e.tag!==6&&e.tag!==13&&e.tag!==3?null:e}function ft(e){if(e.tag===5||e.tag===6)return e.stateNode;throw Error(T(33))}function rl(e){return e[ko]||null}var Pi=[],mt=-1;function Fn(e){return{current:e}}function q(e){0>mt||(e.current=Pi[mt],Pi[mt]=null,mt--)}function H(e,n){mt++,Pi[mt]=e.current,e.current=n}var zn={},Ce=Fn(zn),je=Fn(!1),Gn=zn;function jt(e,n){var t=e.type.contextTypes;if(!t)return zn;var o=e.stateNode;if(o&&o.__reactInternalMemoizedUnmaskedChildContext===n)return o.__reactInternalMemoizedMaskedChildContext;var r={},l;for(l in t)r[l]=n[l];return o&&(e=e.stateNode,e.__reactInternalMemoizedUnmaskedChildContext=n,e.__reactInternalMemoizedMaskedChildContext=r),r}function Te(e){return e=e.childContextTypes,e!=null}function Mr(){q(je),q(Ce)}function Is(e,n,t){if(Ce.current!==zn)throw Error(T(168));H(Ce,n),H(je,t)}function Xc(e,n,t){var o=e.stateNode;if(n=n.childContextTypes,typeof o.getChildContext!="function")return t;o=o.getChildContext();for(var r in o)if(!(r in n))throw Error(T(108,kf(e)||"Unknown",r));return X({},t,o)}function Or(e){return e=(e=e.stateNode)&&e.__reactInternalMemoizedMergedChildContext||zn,Gn=Ce.current,H(Ce,e),H(je,je.current),!0}function Us(e,n,t){var o=e.stateNode;if(!o)throw Error(T(169));t?(e=Xc(e,n,Gn),o.__reactInternalMemoizedMergedChildContext=e,q(je),q(Ce),H(Ce,e)):q(je),H(je,t)}var rn=null,ll=!1,Ol=!1;function Gc(e){rn===null?rn=[e]:rn.push(e)}function Um(e){ll=!0,Gc(e)}function In(){if(!Ol&&rn!==null){Ol=!0;var e=0,n=I;try{var t=rn;for(I=1;e<t.length;e++){var o=t[e];do o=o(!0);while(o!==null)}rn=null,ll=!1}catch(r){throw rn!==null&&(rn=rn.slice(e+1)),wc(ua,In),r}finally{I=n,Ol=!1}}return null}var gt=[],ht=0,Lr=null,zr=0,Le=[],ze=0,Jn=null,an=1,sn="";function Vn(e,n){gt[ht++]=zr,gt[ht++]=Lr,Lr=e,zr=n}function Jc(e,n,t){Le[ze++]=an,Le[ze++]=sn,Le[ze++]=Jn,Jn=e;var o=an;e=sn;var r=32-Qe(o)-1;o&=~(1<<r),t+=1;var l=32-Qe(n)+r;if(30<l){var i=r-r%5;l=(o&(1<<i)-1).toString(32),o>>=i,r-=i,an=1<<32-Qe(n)+r|t<<r|o,sn=l+e}else an=1<<l|t<<r|o,sn=e}function va(e){e.return!==null&&(Vn(e,1),Jc(e,1,0))}function xa(e){for(;e===Lr;)Lr=gt[--ht],gt[ht]=null,zr=gt[--ht],gt[ht]=null;for(;e===Jn;)Jn=Le[--ze],Le[ze]=null,sn=Le[--ze],Le[ze]=null,an=Le[--ze],Le[ze]=null}var De=null,Re=null,B=!1,Be=null;function Zc(e,n){var t=Ae(5,null,null,0);t.elementType="DELETED",t.stateNode=n,t.return=e,n=e.deletions,n===null?(e.deletions=[t],e.flags|=16):n.push(t)}function Ws(e,n){switch(e.tag){case 5:var t=e.type;return n=n.nodeType!==1||t.toLowerCase()!==n.nodeName.toLowerCase()?null:n,n!==null?(e.stateNode=n,De=e,Re=$n(n.firstChild),!0):!1;case 6:return n=e.pendingProps===""||n.nodeType!==3?null:n,n!==null?(e.stateNode=n,De=e,Re=null,!0):!1;case 13:return n=n.nodeType!==8?null:n,n!==null?(t=Jn!==null?{id:an,overflow:sn}:null,e.memoizedState={dehydrated:n,treeContext:t,retryLane:1073741824},t=Ae(18,null,null,0),t.stateNode=n,t.return=e,e.child=t,De=e,Re=null,!0):!1;default:return!1}}function ki(e){return(e.mode&1)!==0&&(e.flags&128)===0}function _i(e){if(B){var n=Re;if(n){var t=n;if(!Ws(e,n)){if(ki(e))throw Error(T(418));n=$n(t.nextSibling);var o=De;n&&Ws(e,n)?Zc(o,t):(e.flags=e.flags&-4097|2,B=!1,De=e)}}else{if(ki(e))throw Error(T(418));e.flags=e.flags&-4097|2,B=!1,De=e}}}function Hs(e){for(e=e.return;e!==null&&e.tag!==5&&e.tag!==3&&e.tag!==13;)e=e.return;De=e}function er(e){if(e!==De)return!1;if(!B)return Hs(e),B=!0,!1;var n;if((n=e.tag!==3)&&!(n=e.tag!==5)&&(n=e.type,n=n!=="head"&&n!=="body"&&!Ci(e.type,e.memoizedProps)),n&&(n=Re)){if(ki(e))throw ed(),Error(T(418));for(;n;)Zc(e,n),n=$n(n.nextSibling)}if(Hs(e),e.tag===13){if(e=e.memoizedState,e=e!==null?e.dehydrated:null,!e)throw Error(T(317));e:{for(e=e.nextSibling,n=0;e;){if(e.nodeType===8){var t=e.data;if(t==="/$"){if(n===0){Re=$n(e.nextSibling);break e}n--}else t!=="$"&&t!=="$!"&&t!=="$?"||n++}e=e.nextSibling}Re=null}}else Re=De?$n(e.stateNode.nextSibling):null;return!0}function ed(){for(var e=Re;e;)e=$n(e.nextSibling)}function Tt(){Re=De=null,B=!1}function Ca(e){Be===null?Be=[e]:Be.push(e)}var Wm=mn.ReactCurrentBatchConfig;function Vt(e,n,t){if(e=t.ref,e!==null&&typeof e!="function"&&typeof e!="object"){if(t._owner){if(t=t._owner,t){if(t.tag!==1)throw Error(T(309));var o=t.stateNode}if(!o)throw Error(T(147,e));var r=o,l=""+e;return n!==null&&n.ref!==null&&typeof n.ref=="function"&&n.ref._stringRef===l?n.ref:(n=function(i){var a=r.refs;i===null?delete a[l]:a[l]=i},n._stringRef=l,n)}if(typeof e!="string")throw Error(T(284));if(!t._owner)throw Error(T(290,e))}return e}function nr(e,n){throw e=Object.prototype.toString.call(n),Error(T(31,e==="[object Object]"?"object with keys {"+Object.keys(n).join(", ")+"}":e))}function Vs(e){var n=e._init;return n(e._payload)}function nd(e){function n(g,d){if(e){var h=g.deletions;h===null?(g.deletions=[d],g.flags|=16):h.push(d)}}function t(g,d){if(!e)return null;for(;d!==null;)n(g,d),d=d.sibling;return null}function o(g,d){for(g=new Map;d!==null;)d.key!==null?g.set(d.key,d):g.set(d.index,d),d=d.sibling;return g}function r(g,d){return g=Mn(g,d),g.index=0,g.sibling=null,g}function l(g,d,h){return g.index=h,e?(h=g.alternate,h!==null?(h=h.index,h<d?(g.flags|=2,d):h):(g.flags|=2,d)):(g.flags|=1048576,d)}function i(g){return e&&g.alternate===null&&(g.flags|=2),g}function a(g,d,h,v){return d===null||d.tag!==6?(d=Wl(h,g.mode,v),d.return=g,d):(d=r(d,h),d.return=g,d)}function s(g,d,h,v){var w=h.type;return w===ut?p(g,d,h.props.children,v,h.key):d!==null&&(d.elementType===w||typeof w=="object"&&w!==null&&w.$$typeof===Cn&&Vs(w)===d.type)?(v=r(d,h.props),v.ref=Vt(g,d,h),v.return=g,v):(v=kr(h.type,h.key,h.props,null,g.mode,v),v.ref=Vt(g,d,h),v.return=g,v)}function u(g,d,h,v){return d===null||d.tag!==4||d.stateNode.containerInfo!==h.containerInfo||d.stateNode.implementation!==h.implementation?(d=Hl(h,g.mode,v),d.return=g,d):(d=r(d,h.children||[]),d.return=g,d)}function p(g,d,h,v,w){return d===null||d.tag!==7?(d=Xn(h,g.mode,v,w),d.return=g,d):(d=r(d,h),d.return=g,d)}function f(g,d,h){if(typeof d=="string"&&d!==""||typeof d=="number")return d=Wl(""+d,g.mode,h),d.return=g,d;if(typeof d=="object"&&d!==null){switch(d.$$typeof){case Vo:return h=kr(d.type,d.key,d.props,null,g.mode,h),h.ref=Vt(g,null,d),h.return=g,h;case st:return d=Hl(d,g.mode,h),d.return=g,d;case Cn:var v=d._init;return f(g,v(d._payload),h)}if(Gt(d)||Ft(d))return d=Xn(d,g.mode,h,null),d.return=g,d;nr(g,d)}return null}function m(g,d,h,v){var w=d!==null?d.key:null;if(typeof h=="string"&&h!==""||typeof h=="number")return w!==null?null:a(g,d,""+h,v);if(typeof h=="object"&&h!==null){switch(h.$$typeof){case Vo:return h.key===w?s(g,d,h,v):null;case st:return h.key===w?u(g,d,h,v):null;case Cn:return w=h._init,m(g,d,w(h._payload),v)}if(Gt(h)||Ft(h))return w!==null?null:p(g,d,h,v,null);nr(g,h)}return null}function y(g,d,h,v,w){if(typeof v=="string"&&v!==""||typeof v=="number")return g=g.get(h)||null,a(d,g,""+v,w);if(typeof v=="object"&&v!==null){switch(v.$$typeof){case Vo:return g=g.get(v.key===null?h:v.key)||null,s(d,g,v,w);case st:return g=g.get(v.key===null?h:v.key)||null,u(d,g,v,w);case Cn:var _=v._init;return y(g,d,h,_(v._payload),w)}if(Gt(v)||Ft(v))return g=g.get(h)||null,p(d,g,v,w,null);nr(d,v)}return null}function x(g,d,h,v){for(var w=null,_=null,j=d,N=d=0,P=null;j!==null&&N<h.length;N++){j.index>N?(P=j,j=null):P=j.sibling;var E=m(g,j,h[N],v);if(E===null){j===null&&(j=P);break}e&&j&&E.alternate===null&&n(g,j),d=l(E,d,N),_===null?w=E:_.sibling=E,_=E,j=P}if(N===h.length)return t(g,j),B&&Vn(g,N),w;if(j===null){for(;N<h.length;N++)j=f(g,h[N],v),j!==null&&(d=l(j,d,N),_===null?w=j:_.sibling=j,_=j);return B&&Vn(g,N),w}for(j=o(g,j);N<h.length;N++)P=y(j,g,N,h[N],v),P!==null&&(e&&P.alternate!==null&&j.delete(P.key===null?N:P.key),d=l(P,d,N),_===null?w=P:_.sibling=P,_=P);return e&&j.forEach(function(R){return n(g,R)}),B&&Vn(g,N),w}function C(g,d,h,v){var w=Ft(h);if(typeof w!="function")throw Error(T(150));if(h=w.call(h),h==null)throw Error(T(151));for(var _=w=null,j=d,N=d=0,P=null,E=h.next();j!==null&&!E.done;N++,E=h.next()){j.index>N?(P=j,j=null):P=j.sibling;var R=m(g,j,E.value,v);if(R===null){j===null&&(j=P);break}e&&j&&R.alternate===null&&n(g,j),d=l(R,d,N),_===null?w=R:_.sibling=R,_=R,j=P}if(E.done)return t(g,j),B&&Vn(g,N),w;if(j===null){for(;!E.done;N++,E=h.next())E=f(g,E.value,v),E!==null&&(d=l(E,d,N),_===null?w=E:_.sibling=E,_=E);return B&&Vn(g,N),w}for(j=o(g,j);!E.done;N++,E=h.next())E=y(j,g,N,E.value,v),E!==null&&(e&&E.alternate!==null&&j.delete(E.key===null?N:E.key),d=l(E,d,N),_===null?w=E:_.sibling=E,_=E);return e&&j.forEach(function(L){return n(g,L)}),B&&Vn(g,N),w}function k(g,d,h,v){if(typeof h=="object"&&h!==null&&h.type===ut&&h.key===null&&(h=h.props.children),typeof h=="object"&&h!==null){switch(h.$$typeof){case Vo:e:{for(var w=h.key,_=d;_!==null;){if(_.key===w){if(w=h.type,w===ut){if(_.tag===7){t(g,_.sibling),d=r(_,h.props.children),d.return=g,g=d;break e}}else if(_.elementType===w||typeof w=="object"&&w!==null&&w.$$typeof===Cn&&Vs(w)===_.type){t(g,_.sibling),d=r(_,h.props),d.ref=Vt(g,_,h),d.return=g,g=d;break e}t(g,_);break}else n(g,_);_=_.sibling}h.type===ut?(d=Xn(h.props.children,g.mode,v,h.key),d.return=g,g=d):(v=kr(h.type,h.key,h.props,null,g.mode,v),v.ref=Vt(g,d,h),v.return=g,g=v)}return i(g);case st:e:{for(_=h.key;d!==null;){if(d.key===_)if(d.tag===4&&d.stateNode.containerInfo===h.containerInfo&&d.stateNode.implementation===h.implementation){t(g,d.sibling),d=r(d,h.children||[]),d.return=g,g=d;break e}else{t(g,d);break}else n(g,d);d=d.sibling}d=Hl(h,g.mode,v),d.return=g,g=d}return i(g);case Cn:return _=h._init,k(g,d,_(h._payload),v)}if(Gt(h))return x(g,d,h,v);if(Ft(h))return C(g,d,h,v);nr(g,h)}return typeof h=="string"&&h!==""||typeof h=="number"?(h=""+h,d!==null&&d.tag===6?(t(g,d.sibling),d=r(d,h),d.return=g,g=d):(t(g,d),d=Wl(h,g.mode,v),d.return=g,g=d),i(g)):t(g,d)}return k}var Nt=nd(!0),td=nd(!1),Ar=Fn(null),Fr=null,yt=null,Sa=null;function wa(){Sa=yt=Fr=null}function Pa(e){var n=Ar.current;q(Ar),e._currentValue=n}function Ei(e,n,t){for(;e!==null;){var o=e.alternate;if((e.childLanes&n)!==n?(e.childLanes|=n,o!==null&&(o.childLanes|=n)):o!==null&&(o.childLanes&n)!==n&&(o.childLanes|=n),e===t)break;e=e.return}}function kt(e,n){Fr=e,Sa=yt=null,e=e.dependencies,e!==null&&e.firstContext!==null&&(e.lanes&n&&(Ee=!0),e.firstContext=null)}function Ie(e){var n=e._currentValue;if(Sa!==e)if(e={context:e,memoizedValue:n,next:null},yt===null){if(Fr===null)throw Error(T(308));yt=e,Fr.dependencies={lanes:0,firstContext:e}}else yt=yt.next=e;return n}var Qn=null;function ka(e){Qn===null?Qn=[e]:Qn.push(e)}function od(e,n,t,o){var r=n.interleaved;return r===null?(t.next=t,ka(n)):(t.next=r.next,r.next=t),n.interleaved=t,pn(e,o)}function pn(e,n){e.lanes|=n;var t=e.alternate;for(t!==null&&(t.lanes|=n),t=e,e=e.return;e!==null;)e.childLanes|=n,t=e.alternate,t!==null&&(t.childLanes|=n),t=e,e=e.return;return t.tag===3?t.stateNode:null}var Sn=!1;function _a(e){e.updateQueue={baseState:e.memoizedState,firstBaseUpdate:null,lastBaseUpdate:null,shared:{pending:null,interleaved:null,lanes:0},effects:null}}function rd(e,n){e=e.updateQueue,n.updateQueue===e&&(n.updateQueue={baseState:e.baseState,firstBaseUpdate:e.firstBaseUpdate,lastBaseUpdate:e.lastBaseUpdate,shared:e.shared,effects:e.effects})}function un(e,n){return{eventTime:e,lane:n,tag:0,payload:null,callback:null,next:null}}function Rn(e,n,t){var o=e.updateQueue;if(o===null)return null;if(o=o.shared,A&2){var r=o.pending;return r===null?n.next=n:(n.next=r.next,r.next=n),o.pending=n,pn(e,t)}return r=o.interleaved,r===null?(n.next=n,ka(o)):(n.next=r.next,r.next=n),o.interleaved=n,pn(e,t)}function vr(e,n,t){if(n=n.updateQueue,n!==null&&(n=n.shared,(t&4194240)!==0)){var o=n.lanes;o&=e.pendingLanes,t|=o,n.lanes=t,ca(e,t)}}function qs(e,n){var t=e.updateQueue,o=e.alternate;if(o!==null&&(o=o.updateQueue,t===o)){var r=null,l=null;if(t=t.firstBaseUpdate,t!==null){do{var i={eventTime:t.eventTime,lane:t.lane,tag:t.tag,payload:t.payload,callback:t.callback,next:null};l===null?r=l=i:l=l.next=i,t=t.next}while(t!==null);l===null?r=l=n:l=l.next=n}else r=l=n;t={baseState:o.baseState,firstBaseUpdate:r,lastBaseUpdate:l,shared:o.shared,effects:o.effects},e.updateQueue=t;return}e=t.lastBaseUpdate,e===null?t.firstBaseUpdate=n:e.next=n,t.lastBaseUpdate=n}function Ir(e,n,t,o){var r=e.updateQueue;Sn=!1;var l=r.firstBaseUpdate,i=r.lastBaseUpdate,a=r.shared.pending;if(a!==null){r.shared.pending=null;var s=a,u=s.next;s.next=null,i===null?l=u:i.next=u,i=s;var p=e.alternate;p!==null&&(p=p.updateQueue,a=p.lastBaseUpdate,a!==i&&(a===null?p.firstBaseUpdate=u:a.next=u,p.lastBaseUpdate=s))}if(l!==null){var f=r.baseState;i=0,p=u=s=null,a=l;do{var m=a.lane,y=a.eventTime;if((o&m)===m){p!==null&&(p=p.next={eventTime:y,lane:0,tag:a.tag,payload:a.payload,callback:a.callback,next:null});e:{var x=e,C=a;switch(m=n,y=t,C.tag){case 1:if(x=C.payload,typeof x=="function"){f=x.call(y,f,m);break e}f=x;break e;case 3:x.flags=x.flags&-65537|128;case 0:if(x=C.payload,m=typeof x=="function"?x.call(y,f,m):x,m==null)break e;f=X({},f,m);break e;case 2:Sn=!0}}a.callback!==null&&a.lane!==0&&(e.flags|=64,m=r.effects,m===null?r.effects=[a]:m.push(a))}else y={eventTime:y,lane:m,tag:a.tag,payload:a.payload,callback:a.callback,next:null},p===null?(u=p=y,s=f):p=p.next=y,i|=m;if(a=a.next,a===null){if(a=r.shared.pending,a===null)break;m=a,a=m.next,m.next=null,r.lastBaseUpdate=m,r.shared.pending=null}}while(!0);if(p===null&&(s=f),r.baseState=s,r.firstBaseUpdate=u,r.lastBaseUpdate=p,n=r.shared.interleaved,n!==null){r=n;do i|=r.lane,r=r.next;while(r!==n)}else l===null&&(r.shared.lanes=0);et|=i,e.lanes=i,e.memoizedState=f}}function Bs(e,n,t){if(e=n.effects,n.effects=null,e!==null)for(n=0;n<e.length;n++){var o=e[n],r=o.callback;if(r!==null){if(o.callback=null,o=t,typeof r!="function")throw Error(T(191,r));r.call(o)}}}var Ao={},tn=Fn(Ao),_o=Fn(Ao),Eo=Fn(Ao);function Kn(e){if(e===Ao)throw Error(T(174));return e}function Ea(e,n){switch(H(Eo,n),H(_o,e),H(tn,Ao),e=n.nodeType,e){case 9:case 11:n=(n=n.documentElement)?n.namespaceURI:ii(null,"");break;default:e=e===8?n.parentNode:n,n=e.namespaceURI||null,e=e.tagName,n=ii(n,e)}q(tn),H(tn,n)}function $t(){q(tn),q(_o),q(Eo)}function ld(e){Kn(Eo.current);var n=Kn(tn.current),t=ii(n,e.type);n!==t&&(H(_o,e),H(tn,t))}function ja(e){_o.current===e&&(q(tn),q(_o))}var K=Fn(0);function Ur(e){for(var n=e;n!==null;){if(n.tag===13){var t=n.memoizedState;if(t!==null&&(t=t.dehydrated,t===null||t.data==="$?"||t.data==="$!"))return n}else if(n.tag===19&&n.memoizedProps.revealOrder!==void 0){if(n.flags&128)return n}else if(n.child!==null){n.child.return=n,n=n.child;continue}if(n===e)break;for(;n.sibling===null;){if(n.return===null||n.return===e)return null;n=n.return}n.sibling.return=n.return,n=n.sibling}return null}var Ll=[];function Ta(){for(var e=0;e<Ll.length;e++)Ll[e]._workInProgressVersionPrimary=null;Ll.length=0}var xr=mn.ReactCurrentDispatcher,zl=mn.ReactCurrentBatchConfig,Zn=0,Y=null,le=null,ue=null,Wr=!1,ao=!1,jo=0,Hm=0;function ge(){throw Error(T(321))}function Na(e,n){if(n===null)return!1;for(var t=0;t<n.length&&t<e.length;t++)if(!Ye(e[t],n[t]))return!1;return!0}function $a(e,n,t,o,r,l){if(Zn=l,Y=n,n.memoizedState=null,n.updateQueue=null,n.lanes=0,xr.current=e===null||e.memoizedState===null?Qm:Km,e=t(o,r),ao){l=0;do{if(ao=!1,jo=0,25<=l)throw Error(T(301));l+=1,ue=le=null,n.updateQueue=null,xr.current=Ym,e=t(o,r)}while(ao)}if(xr.current=Hr,n=le!==null&&le.next!==null,Zn=0,ue=le=Y=null,Wr=!1,n)throw Error(T(300));return e}function Ra(){var e=jo!==0;return jo=0,e}function Ze(){var e={memoizedState:null,baseState:null,baseQueue:null,queue:null,next:null};return ue===null?Y.memoizedState=ue=e:ue=ue.next=e,ue}function Ue(){if(le===null){var e=Y.alternate;e=e!==null?e.memoizedState:null}else e=le.next;var n=ue===null?Y.memoizedState:ue.next;if(n!==null)ue=n,le=e;else{if(e===null)throw Error(T(310));le=e,e={memoizedState:le.memoizedState,baseState:le.baseState,baseQueue:le.baseQueue,queue:le.queue,next:null},ue===null?Y.memoizedState=ue=e:ue=ue.next=e}return ue}function To(e,n){return typeof n=="function"?n(e):n}function Al(e){var n=Ue(),t=n.queue;if(t===null)throw Error(T(311));t.lastRenderedReducer=e;var o=le,r=o.baseQueue,l=t.pending;if(l!==null){if(r!==null){var i=r.next;r.next=l.next,l.next=i}o.baseQueue=r=l,t.pending=null}if(r!==null){l=r.next,o=o.baseState;var a=i=null,s=null,u=l;do{var p=u.lane;if((Zn&p)===p)s!==null&&(s=s.next={lane:0,action:u.action,hasEagerState:u.hasEagerState,eagerState:u.eagerState,next:null}),o=u.hasEagerState?u.eagerState:e(o,u.action);else{var f={lane:p,action:u.action,hasEagerState:u.hasEagerState,eagerState:u.eagerState,next:null};s===null?(a=s=f,i=o):s=s.next=f,Y.lanes|=p,et|=p}u=u.next}while(u!==null&&u!==l);s===null?i=o:s.next=a,Ye(o,n.memoizedState)||(Ee=!0),n.memoizedState=o,n.baseState=i,n.baseQueue=s,t.lastRenderedState=o}if(e=t.interleaved,e!==null){r=e;do l=r.lane,Y.lanes|=l,et|=l,r=r.next;while(r!==e)}else r===null&&(t.lanes=0);return[n.memoizedState,t.dispatch]}function Fl(e){var n=Ue(),t=n.queue;if(t===null)throw Error(T(311));t.lastRenderedReducer=e;var o=t.dispatch,r=t.pending,l=n.memoizedState;if(r!==null){t.pending=null;var i=r=r.next;do l=e(l,i.action),i=i.next;while(i!==r);Ye(l,n.memoizedState)||(Ee=!0),n.memoizedState=l,n.baseQueue===null&&(n.baseState=l),t.lastRenderedState=l}return[l,o]}function id(){}function ad(e,n){var t=Y,o=Ue(),r=n(),l=!Ye(o.memoizedState,r);if(l&&(o.memoizedState=r,Ee=!0),o=o.queue,Da(cd.bind(null,t,o,e),[e]),o.getSnapshot!==n||l||ue!==null&&ue.memoizedState.tag&1){if(t.flags|=2048,No(9,ud.bind(null,t,o,r,n),void 0,null),ce===null)throw Error(T(349));Zn&30||sd(t,n,r)}return r}function sd(e,n,t){e.flags|=16384,e={getSnapshot:n,value:t},n=Y.updateQueue,n===null?(n={lastEffect:null,stores:null},Y.updateQueue=n,n.stores=[e]):(t=n.stores,t===null?n.stores=[e]:t.push(e))}function ud(e,n,t,o){n.value=t,n.getSnapshot=o,dd(n)&&pd(e)}function cd(e,n,t){return t(function(){dd(n)&&pd(e)})}function dd(e){var n=e.getSnapshot;e=e.value;try{var t=n();return!Ye(e,t)}catch{return!0}}function pd(e){var n=pn(e,1);n!==null&&Ke(n,e,1,-1)}function Qs(e){var n=Ze();return typeof e=="function"&&(e=e()),n.memoizedState=n.baseState=e,e={pending:null,interleaved:null,lanes:0,dispatch:null,lastRenderedReducer:To,lastRenderedState:e},n.queue=e,e=e.dispatch=Bm.bind(null,Y,e),[n.memoizedState,e]}function No(e,n,t,o){return e={tag:e,create:n,destroy:t,deps:o,next:null},n=Y.updateQueue,n===null?(n={lastEffect:null,stores:null},Y.updateQueue=n,n.lastEffect=e.next=e):(t=n.lastEffect,t===null?n.lastEffect=e.next=e:(o=t.next,t.next=e,e.next=o,n.lastEffect=e)),e}function fd(){return Ue().memoizedState}function Cr(e,n,t,o){var r=Ze();Y.flags|=e,r.memoizedState=No(1|n,t,void 0,o===void 0?null:o)}function il(e,n,t,o){var r=Ue();o=o===void 0?null:o;var l=void 0;if(le!==null){var i=le.memoizedState;if(l=i.destroy,o!==null&&Na(o,i.deps)){r.memoizedState=No(n,t,l,o);return}}Y.flags|=e,r.memoizedState=No(1|n,t,l,o)}function Ks(e,n){return Cr(8390656,8,e,n)}function Da(e,n){return il(2048,8,e,n)}function md(e,n){return il(4,2,e,n)}function gd(e,n){return il(4,4,e,n)}function hd(e,n){if(typeof n=="function")return e=e(),n(e),function(){n(null)};if(n!=null)return e=e(),n.current=e,function(){n.current=null}}function yd(e,n,t){return t=t!=null?t.concat([e]):null,il(4,4,hd.bind(null,n,e),t)}function ba(){}function vd(e,n){var t=Ue();n=n===void 0?null:n;var o=t.memoizedState;return o!==null&&n!==null&&Na(n,o[1])?o[0]:(t.memoizedState=[e,n],e)}function xd(e,n){var t=Ue();n=n===void 0?null:n;var o=t.memoizedState;return o!==null&&n!==null&&Na(n,o[1])?o[0]:(e=e(),t.memoizedState=[e,n],e)}function Cd(e,n,t){return Zn&21?(Ye(t,n)||(t=_c(),Y.lanes|=t,et|=t,e.baseState=!0),n):(e.baseState&&(e.baseState=!1,Ee=!0),e.memoizedState=t)}function Vm(e,n){var t=I;I=t!==0&&4>t?t:4,e(!0);var o=zl.transition;zl.transition={};try{e(!1),n()}finally{I=t,zl.transition=o}}function Sd(){return Ue().memoizedState}function qm(e,n,t){var o=bn(e);if(t={lane:o,action:t,hasEagerState:!1,eagerState:null,next:null},wd(e))Pd(n,t);else if(t=od(e,n,t,o),t!==null){var r=we();Ke(t,e,o,r),kd(t,n,o)}}function Bm(e,n,t){var o=bn(e),r={lane:o,action:t,hasEagerState:!1,eagerState:null,next:null};if(wd(e))Pd(n,r);else{var l=e.alternate;if(e.lanes===0&&(l===null||l.lanes===0)&&(l=n.lastRenderedReducer,l!==null))try{var i=n.lastRenderedState,a=l(i,t);if(r.hasEagerState=!0,r.eagerState=a,Ye(a,i)){var s=n.interleaved;s===null?(r.next=r,ka(n)):(r.next=s.next,s.next=r),n.interleaved=r;return}}catch{}finally{}t=od(e,n,r,o),t!==null&&(r=we(),Ke(t,e,o,r),kd(t,n,o))}}function wd(e){var n=e.alternate;return e===Y||n!==null&&n===Y}function Pd(e,n){ao=Wr=!0;var t=e.pending;t===null?n.next=n:(n.next=t.next,t.next=n),e.pending=n}function kd(e,n,t){if(t&4194240){var o=n.lanes;o&=e.pendingLanes,t|=o,n.lanes=t,ca(e,t)}}var Hr={readContext:Ie,useCallback:ge,useContext:ge,useEffect:ge,useImperativeHandle:ge,useInsertionEffect:ge,useLayoutEffect:ge,useMemo:ge,useReducer:ge,useRef:ge,useState:ge,useDebugValue:ge,useDeferredValue:ge,useTransition:ge,useMutableSource:ge,useSyncExternalStore:ge,useId:ge,unstable_isNewReconciler:!1},Qm={readContext:Ie,useCallback:function(e,n){return Ze().memoizedState=[e,n===void 0?null:n],e},useContext:Ie,useEffect:Ks,useImperativeHandle:function(e,n,t){return t=t!=null?t.concat([e]):null,Cr(4194308,4,hd.bind(null,n,e),t)},useLayoutEffect:function(e,n){return Cr(4194308,4,e,n)},useInsertionEffect:function(e,n){return Cr(4,2,e,n)},useMemo:function(e,n){var t=Ze();return n=n===void 0?null:n,e=e(),t.memoizedState=[e,n],e},useReducer:function(e,n,t){var o=Ze();return n=t!==void 0?t(n):n,o.memoizedState=o.baseState=n,e={pending:null,interleaved:null,lanes:0,dispatch:null,lastRenderedReducer:e,lastRenderedState:n},o.queue=e,e=e.dispatch=qm.bind(null,Y,e),[o.memoizedState,e]},useRef:function(e){var n=Ze();return e={current:e},n.memoizedState=e},useState:Qs,useDebugValue:ba,useDeferredValue:function(e){return Ze().memoizedState=e},useTransition:function(){var e=Qs(!1),n=e[0];return e=Vm.bind(null,e[1]),Ze().memoizedState=e,[n,e]},useMutableSource:function(){},useSyncExternalStore:function(e,n,t){var o=Y,r=Ze();if(B){if(t===void 0)throw Error(T(407));t=t()}else{if(t=n(),ce===null)throw Error(T(349));Zn&30||sd(o,n,t)}r.memoizedState=t;var l={value:t,getSnapshot:n};return r.queue=l,Ks(cd.bind(null,o,l,e),[e]),o.flags|=2048,No(9,ud.bind(null,o,l,t,n),void 0,null),t},useId:function(){var e=Ze(),n=ce.identifierPrefix;if(B){var t=sn,o=an;t=(o&~(1<<32-Qe(o)-1)).toString(32)+t,n=":"+n+"R"+t,t=jo++,0<t&&(n+="H"+t.toString(32)),n+=":"}else t=Hm++,n=":"+n+"r"+t.toString(32)+":";return e.memoizedState=n},unstable_isNewReconciler:!1},Km={readContext:Ie,useCallback:vd,useContext:Ie,useEffect:Da,useImperativeHandle:yd,useInsertionEffect:md,useLayoutEffect:gd,useMemo:xd,useReducer:Al,useRef:fd,useState:function(){return Al(To)},useDebugValue:ba,useDeferredValue:function(e){var n=Ue();return Cd(n,le.memoizedState,e)},useTransition:function(){var e=Al(To)[0],n=Ue().memoizedState;return[e,n]},useMutableSource:id,useSyncExternalStore:ad,useId:Sd,unstable_isNewReconciler:!1},Ym={readContext:Ie,useCallback:vd,useContext:Ie,useEffect:Da,useImperativeHandle:yd,useInsertionEffect:md,useLayoutEffect:gd,useMemo:xd,useReducer:Fl,useRef:fd,useState:function(){return Fl(To)},useDebugValue:ba,useDeferredValue:function(e){var n=Ue();return le===null?n.memoizedState=e:Cd(n,le.memoizedState,e)},useTransition:function(){var e=Fl(To)[0],n=Ue().memoizedState;return[e,n]},useMutableSource:id,useSyncExternalStore:ad,useId:Sd,unstable_isNewReconciler:!1};function Ve(e,n){if(e&&e.defaultProps){n=X({},n),e=e.defaultProps;for(var t in e)n[t]===void 0&&(n[t]=e[t]);return n}return n}function ji(e,n,t,o){n=e.memoizedState,t=t(o,n),t=t==null?n:X({},n,t),e.memoizedState=t,e.lanes===0&&(e.updateQueue.baseState=t)}var al={isMounted:function(e){return(e=e._reactInternals)?ot(e)===e:!1},enqueueSetState:function(e,n,t){e=e._reactInternals;var o=we(),r=bn(e),l=un(o,r);l.payload=n,t!=null&&(l.callback=t),n=Rn(e,l,r),n!==null&&(Ke(n,e,r,o),vr(n,e,r))},enqueueReplaceState:function(e,n,t){e=e._reactInternals;var o=we(),r=bn(e),l=un(o,r);l.tag=1,l.payload=n,t!=null&&(l.callback=t),n=Rn(e,l,r),n!==null&&(Ke(n,e,r,o),vr(n,e,r))},enqueueForceUpdate:function(e,n){e=e._reactInternals;var t=we(),o=bn(e),r=un(t,o);r.tag=2,n!=null&&(r.callback=n),n=Rn(e,r,o),n!==null&&(Ke(n,e,o,t),vr(n,e,o))}};function Ys(e,n,t,o,r,l,i){return e=e.stateNode,typeof e.shouldComponentUpdate=="function"?e.shouldComponentUpdate(o,l,i):n.prototype&&n.prototype.isPureReactComponent?!So(t,o)||!So(r,l):!0}function _d(e,n,t){var o=!1,r=zn,l=n.contextType;return typeof l=="object"&&l!==null?l=Ie(l):(r=Te(n)?Gn:Ce.current,o=n.contextTypes,l=(o=o!=null)?jt(e,r):zn),n=new n(t,l),e.memoizedState=n.state!==null&&n.state!==void 0?n.state:null,n.updater=al,e.stateNode=n,n._reactInternals=e,o&&(e=e.stateNode,e.__reactInternalMemoizedUnmaskedChildContext=r,e.__reactInternalMemoizedMaskedChildContext=l),n}function Xs(e,n,t,o){e=n.state,typeof n.componentWillReceiveProps=="function"&&n.componentWillReceiveProps(t,o),typeof n.UNSAFE_componentWillReceiveProps=="function"&&n.UNSAFE_componentWillReceiveProps(t,o),n.state!==e&&al.enqueueReplaceState(n,n.state,null)}function Ti(e,n,t,o){var r=e.stateNode;r.props=t,r.state=e.memoizedState,r.refs={},_a(e);var l=n.contextType;typeof l=="object"&&l!==null?r.context=Ie(l):(l=Te(n)?Gn:Ce.current,r.context=jt(e,l)),r.state=e.memoizedState,l=n.getDerivedStateFromProps,typeof l=="function"&&(ji(e,n,l,t),r.state=e.memoizedState),typeof n.getDerivedStateFromProps=="function"||typeof r.getSnapshotBeforeUpdate=="function"||typeof r.UNSAFE_componentWillMount!="function"&&typeof r.componentWillMount!="function"||(n=r.state,typeof r.componentWillMount=="function"&&r.componentWillMount(),typeof r.UNSAFE_componentWillMount=="function"&&r.UNSAFE_componentWillMount(),n!==r.state&&al.enqueueReplaceState(r,r.state,null),Ir(e,t,r,o),r.state=e.memoizedState),typeof r.componentDidMount=="function"&&(e.flags|=4194308)}function Rt(e,n){try{var t="",o=n;do t+=Pf(o),o=o.return;while(o);var r=t}catch(l){r=`
Error generating stack: `+l.message+`
`+l.stack}return{value:e,source:n,stack:r,digest:null}}function Il(e,n,t){return{value:e,source:null,stack:t??null,digest:n??null}}function Ni(e,n){try{console.error(n.value)}catch(t){setTimeout(function(){throw t})}}var Xm=typeof WeakMap=="function"?WeakMap:Map;function Ed(e,n,t){t=un(-1,t),t.tag=3,t.payload={element:null};var o=n.value;return t.callback=function(){qr||(qr=!0,Fi=o),Ni(e,n)},t}function jd(e,n,t){t=un(-1,t),t.tag=3;var o=e.type.getDerivedStateFromError;if(typeof o=="function"){var r=n.value;t.payload=function(){return o(r)},t.callback=function(){Ni(e,n)}}var l=e.stateNode;return l!==null&&typeof l.componentDidCatch=="function"&&(t.callback=function(){Ni(e,n),typeof o!="function"&&(Dn===null?Dn=new Set([this]):Dn.add(this));var i=n.stack;this.componentDidCatch(n.value,{componentStack:i!==null?i:""})}),t}function Gs(e,n,t){var o=e.pingCache;if(o===null){o=e.pingCache=new Xm;var r=new Set;o.set(n,r)}else r=o.get(n),r===void 0&&(r=new Set,o.set(n,r));r.has(t)||(r.add(t),e=cg.bind(null,e,n,t),n.then(e,e))}function Js(e){do{var n;if((n=e.tag===13)&&(n=e.memoizedState,n=n!==null?n.dehydrated!==null:!0),n)return e;e=e.return}while(e!==null);return null}function Zs(e,n,t,o,r){return e.mode&1?(e.flags|=65536,e.lanes=r,e):(e===n?e.flags|=65536:(e.flags|=128,t.flags|=131072,t.flags&=-52805,t.tag===1&&(t.alternate===null?t.tag=17:(n=un(-1,1),n.tag=2,Rn(t,n,1))),t.lanes|=1),e)}var Gm=mn.ReactCurrentOwner,Ee=!1;function Se(e,n,t,o){n.child=e===null?td(n,null,t,o):Nt(n,e.child,t,o)}function eu(e,n,t,o,r){t=t.render;var l=n.ref;return kt(n,r),o=$a(e,n,t,o,l,r),t=Ra(),e!==null&&!Ee?(n.updateQueue=e.updateQueue,n.flags&=-2053,e.lanes&=~r,fn(e,n,r)):(B&&t&&va(n),n.flags|=1,Se(e,n,o,r),n.child)}function nu(e,n,t,o,r){if(e===null){var l=t.type;return typeof l=="function"&&!Ua(l)&&l.defaultProps===void 0&&t.compare===null&&t.defaultProps===void 0?(n.tag=15,n.type=l,Td(e,n,l,o,r)):(e=kr(t.type,null,o,n,n.mode,r),e.ref=n.ref,e.return=n,n.child=e)}if(l=e.child,!(e.lanes&r)){var i=l.memoizedProps;if(t=t.compare,t=t!==null?t:So,t(i,o)&&e.ref===n.ref)return fn(e,n,r)}return n.flags|=1,e=Mn(l,o),e.ref=n.ref,e.return=n,n.child=e}function Td(e,n,t,o,r){if(e!==null){var l=e.memoizedProps;if(So(l,o)&&e.ref===n.ref)if(Ee=!1,n.pendingProps=o=l,(e.lanes&r)!==0)e.flags&131072&&(Ee=!0);else return n.lanes=e.lanes,fn(e,n,r)}return $i(e,n,t,o,r)}function Nd(e,n,t){var o=n.pendingProps,r=o.children,l=e!==null?e.memoizedState:null;if(o.mode==="hidden")if(!(n.mode&1))n.memoizedState={baseLanes:0,cachePool:null,transitions:null},H(xt,$e),$e|=t;else{if(!(t&1073741824))return e=l!==null?l.baseLanes|t:t,n.lanes=n.childLanes=1073741824,n.memoizedState={baseLanes:e,cachePool:null,transitions:null},n.updateQueue=null,H(xt,$e),$e|=e,null;n.memoizedState={baseLanes:0,cachePool:null,transitions:null},o=l!==null?l.baseLanes:t,H(xt,$e),$e|=o}else l!==null?(o=l.baseLanes|t,n.memoizedState=null):o=t,H(xt,$e),$e|=o;return Se(e,n,r,t),n.child}function $d(e,n){var t=n.ref;(e===null&&t!==null||e!==null&&e.ref!==t)&&(n.flags|=512,n.flags|=2097152)}function $i(e,n,t,o,r){var l=Te(t)?Gn:Ce.current;return l=jt(n,l),kt(n,r),t=$a(e,n,t,o,l,r),o=Ra(),e!==null&&!Ee?(n.updateQueue=e.updateQueue,n.flags&=-2053,e.lanes&=~r,fn(e,n,r)):(B&&o&&va(n),n.flags|=1,Se(e,n,t,r),n.child)}function tu(e,n,t,o,r){if(Te(t)){var l=!0;Or(n)}else l=!1;if(kt(n,r),n.stateNode===null)Sr(e,n),_d(n,t,o),Ti(n,t,o,r),o=!0;else if(e===null){var i=n.stateNode,a=n.memoizedProps;i.props=a;var s=i.context,u=t.contextType;typeof u=="object"&&u!==null?u=Ie(u):(u=Te(t)?Gn:Ce.current,u=jt(n,u));var p=t.getDerivedStateFromProps,f=typeof p=="function"||typeof i.getSnapshotBeforeUpdate=="function";f||typeof i.UNSAFE_componentWillReceiveProps!="function"&&typeof i.componentWillReceiveProps!="function"||(a!==o||s!==u)&&Xs(n,i,o,u),Sn=!1;var m=n.memoizedState;i.state=m,Ir(n,o,i,r),s=n.memoizedState,a!==o||m!==s||je.current||Sn?(typeof p=="function"&&(ji(n,t,p,o),s=n.memoizedState),(a=Sn||Ys(n,t,a,o,m,s,u))?(f||typeof i.UNSAFE_componentWillMount!="function"&&typeof i.componentWillMount!="function"||(typeof i.componentWillMount=="function"&&i.componentWillMount(),typeof i.UNSAFE_componentWillMount=="function"&&i.UNSAFE_componentWillMount()),typeof i.componentDidMount=="function"&&(n.flags|=4194308)):(typeof i.componentDidMount=="function"&&(n.flags|=4194308),n.memoizedProps=o,n.memoizedState=s),i.props=o,i.state=s,i.context=u,o=a):(typeof i.componentDidMount=="function"&&(n.flags|=4194308),o=!1)}else{i=n.stateNode,rd(e,n),a=n.memoizedProps,u=n.type===n.elementType?a:Ve(n.type,a),i.props=u,f=n.pendingProps,m=i.context,s=t.contextType,typeof s=="object"&&s!==null?s=Ie(s):(s=Te(t)?Gn:Ce.current,s=jt(n,s));var y=t.getDerivedStateFromProps;(p=typeof y=="function"||typeof i.getSnapshotBeforeUpdate=="function")||typeof i.UNSAFE_componentWillReceiveProps!="function"&&typeof i.componentWillReceiveProps!="function"||(a!==f||m!==s)&&Xs(n,i,o,s),Sn=!1,m=n.memoizedState,i.state=m,Ir(n,o,i,r);var x=n.memoizedState;a!==f||m!==x||je.current||Sn?(typeof y=="function"&&(ji(n,t,y,o),x=n.memoizedState),(u=Sn||Ys(n,t,u,o,m,x,s)||!1)?(p||typeof i.UNSAFE_componentWillUpdate!="function"&&typeof i.componentWillUpdate!="function"||(typeof i.componentWillUpdate=="function"&&i.componentWillUpdate(o,x,s),typeof i.UNSAFE_componentWillUpdate=="function"&&i.UNSAFE_componentWillUpdate(o,x,s)),typeof i.componentDidUpdate=="function"&&(n.flags|=4),typeof i.getSnapshotBeforeUpdate=="function"&&(n.flags|=1024)):(typeof i.componentDidUpdate!="function"||a===e.memoizedProps&&m===e.memoizedState||(n.flags|=4),typeof i.getSnapshotBeforeUpdate!="function"||a===e.memoizedProps&&m===e.memoizedState||(n.flags|=1024),n.memoizedProps=o,n.memoizedState=x),i.props=o,i.state=x,i.context=s,o=u):(typeof i.componentDidUpdate!="function"||a===e.memoizedProps&&m===e.memoizedState||(n.flags|=4),typeof i.getSnapshotBeforeUpdate!="function"||a===e.memoizedProps&&m===e.memoizedState||(n.flags|=1024),o=!1)}return Ri(e,n,t,o,l,r)}function Ri(e,n,t,o,r,l){$d(e,n);var i=(n.flags&128)!==0;if(!o&&!i)return r&&Us(n,t,!1),fn(e,n,l);o=n.stateNode,Gm.current=n;var a=i&&typeof t.getDerivedStateFromError!="function"?null:o.render();return n.flags|=1,e!==null&&i?(n.child=Nt(n,e.child,null,l),n.child=Nt(n,null,a,l)):Se(e,n,a,l),n.memoizedState=o.state,r&&Us(n,t,!0),n.child}function Rd(e){var n=e.stateNode;n.pendingContext?Is(e,n.pendingContext,n.pendingContext!==n.context):n.context&&Is(e,n.context,!1),Ea(e,n.containerInfo)}function ou(e,n,t,o,r){return Tt(),Ca(r),n.flags|=256,Se(e,n,t,o),n.child}var Di={dehydrated:null,treeContext:null,retryLane:0};function bi(e){return{baseLanes:e,cachePool:null,transitions:null}}function Dd(e,n,t){var o=n.pendingProps,r=K.current,l=!1,i=(n.flags&128)!==0,a;if((a=i)||(a=e!==null&&e.memoizedState===null?!1:(r&2)!==0),a?(l=!0,n.flags&=-129):(e===null||e.memoizedState!==null)&&(r|=1),H(K,r&1),e===null)return _i(n),e=n.memoizedState,e!==null&&(e=e.dehydrated,e!==null)?(n.mode&1?e.data==="$!"?n.lanes=8:n.lanes=1073741824:n.lanes=1,null):(i=o.children,e=o.fallback,l?(o=n.mode,l=n.child,i={mode:"hidden",children:i},!(o&1)&&l!==null?(l.childLanes=0,l.pendingProps=i):l=cl(i,o,0,null),e=Xn(e,o,t,null),l.return=n,e.return=n,l.sibling=e,n.child=l,n.child.memoizedState=bi(t),n.memoizedState=Di,e):Ma(n,i));if(r=e.memoizedState,r!==null&&(a=r.dehydrated,a!==null))return Jm(e,n,i,o,a,r,t);if(l){l=o.fallback,i=n.mode,r=e.child,a=r.sibling;var s={mode:"hidden",children:o.children};return!(i&1)&&n.child!==r?(o=n.child,o.childLanes=0,o.pendingProps=s,n.deletions=null):(o=Mn(r,s),o.subtreeFlags=r.subtreeFlags&14680064),a!==null?l=Mn(a,l):(l=Xn(l,i,t,null),l.flags|=2),l.return=n,o.return=n,o.sibling=l,n.child=o,o=l,l=n.child,i=e.child.memoizedState,i=i===null?bi(t):{baseLanes:i.baseLanes|t,cachePool:null,transitions:i.transitions},l.memoizedState=i,l.childLanes=e.childLanes&~t,n.memoizedState=Di,o}return l=e.child,e=l.sibling,o=Mn(l,{mode:"visible",children:o.children}),!(n.mode&1)&&(o.lanes=t),o.return=n,o.sibling=null,e!==null&&(t=n.deletions,t===null?(n.deletions=[e],n.flags|=16):t.push(e)),n.child=o,n.memoizedState=null,o}function Ma(e,n){return n=cl({mode:"visible",children:n},e.mode,0,null),n.return=e,e.child=n}function tr(e,n,t,o){return o!==null&&Ca(o),Nt(n,e.child,null,t),e=Ma(n,n.pendingProps.children),e.flags|=2,n.memoizedState=null,e}function Jm(e,n,t,o,r,l,i){if(t)return n.flags&256?(n.flags&=-257,o=Il(Error(T(422))),tr(e,n,i,o)):n.memoizedState!==null?(n.child=e.child,n.flags|=128,null):(l=o.fallback,r=n.mode,o=cl({mode:"visible",children:o.children},r,0,null),l=Xn(l,r,i,null),l.flags|=2,o.return=n,l.return=n,o.sibling=l,n.child=o,n.mode&1&&Nt(n,e.child,null,i),n.child.memoizedState=bi(i),n.memoizedState=Di,l);if(!(n.mode&1))return tr(e,n,i,null);if(r.data==="$!"){if(o=r.nextSibling&&r.nextSibling.dataset,o)var a=o.dgst;return o=a,l=Error(T(419)),o=Il(l,o,void 0),tr(e,n,i,o)}if(a=(i&e.childLanes)!==0,Ee||a){if(o=ce,o!==null){switch(i&-i){case 4:r=2;break;case 16:r=8;break;case 64:case 128:case 256:case 512:case 1024:case 2048:case 4096:case 8192:case 16384:case 32768:case 65536:case 131072:case 262144:case 524288:case 1048576:case 2097152:case 4194304:case 8388608:case 16777216:case 33554432:case 67108864:r=32;break;case 536870912:r=268435456;break;default:r=0}r=r&(o.suspendedLanes|i)?0:r,r!==0&&r!==l.retryLane&&(l.retryLane=r,pn(e,r),Ke(o,e,r,-1))}return Ia(),o=Il(Error(T(421))),tr(e,n,i,o)}return r.data==="$?"?(n.flags|=128,n.child=e.child,n=dg.bind(null,e),r._reactRetry=n,null):(e=l.treeContext,Re=$n(r.nextSibling),De=n,B=!0,Be=null,e!==null&&(Le[ze++]=an,Le[ze++]=sn,Le[ze++]=Jn,an=e.id,sn=e.overflow,Jn=n),n=Ma(n,o.children),n.flags|=4096,n)}function ru(e,n,t){e.lanes|=n;var o=e.alternate;o!==null&&(o.lanes|=n),Ei(e.return,n,t)}function Ul(e,n,t,o,r){var l=e.memoizedState;l===null?e.memoizedState={isBackwards:n,rendering:null,renderingStartTime:0,last:o,tail:t,tailMode:r}:(l.isBackwards=n,l.rendering=null,l.renderingStartTime=0,l.last=o,l.tail=t,l.tailMode=r)}function bd(e,n,t){var o=n.pendingProps,r=o.revealOrder,l=o.tail;if(Se(e,n,o.children,t),o=K.current,o&2)o=o&1|2,n.flags|=128;else{if(e!==null&&e.flags&128)e:for(e=n.child;e!==null;){if(e.tag===13)e.memoizedState!==null&&ru(e,t,n);else if(e.tag===19)ru(e,t,n);else if(e.child!==null){e.child.return=e,e=e.child;continue}if(e===n)break e;for(;e.sibling===null;){if(e.return===null||e.return===n)break e;e=e.return}e.sibling.return=e.return,e=e.sibling}o&=1}if(H(K,o),!(n.mode&1))n.memoizedState=null;else switch(r){case"forwards":for(t=n.child,r=null;t!==null;)e=t.alternate,e!==null&&Ur(e)===null&&(r=t),t=t.sibling;t=r,t===null?(r=n.child,n.child=null):(r=t.sibling,t.sibling=null),Ul(n,!1,r,t,l);break;case"backwards":for(t=null,r=n.child,n.child=null;r!==null;){if(e=r.alternate,e!==null&&Ur(e)===null){n.child=r;break}e=r.sibling,r.sibling=t,t=r,r=e}Ul(n,!0,t,null,l);break;case"together":Ul(n,!1,null,null,void 0);break;default:n.memoizedState=null}return n.child}function Sr(e,n){!(n.mode&1)&&e!==null&&(e.alternate=null,n.alternate=null,n.flags|=2)}function fn(e,n,t){if(e!==null&&(n.dependencies=e.dependencies),et|=n.lanes,!(t&n.childLanes))return null;if(e!==null&&n.child!==e.child)throw Error(T(153));if(n.child!==null){for(e=n.child,t=Mn(e,e.pendingProps),n.child=t,t.return=n;e.sibling!==null;)e=e.sibling,t=t.sibling=Mn(e,e.pendingProps),t.return=n;t.sibling=null}return n.child}function Zm(e,n,t){switch(n.tag){case 3:Rd(n),Tt();break;case 5:ld(n);break;case 1:Te(n.type)&&Or(n);break;case 4:Ea(n,n.stateNode.containerInfo);break;case 10:var o=n.type._context,r=n.memoizedProps.value;H(Ar,o._currentValue),o._currentValue=r;break;case 13:if(o=n.memoizedState,o!==null)return o.dehydrated!==null?(H(K,K.current&1),n.flags|=128,null):t&n.child.childLanes?Dd(e,n,t):(H(K,K.current&1),e=fn(e,n,t),e!==null?e.sibling:null);H(K,K.current&1);break;case 19:if(o=(t&n.childLanes)!==0,e.flags&128){if(o)return bd(e,n,t);n.flags|=128}if(r=n.memoizedState,r!==null&&(r.rendering=null,r.tail=null,r.lastEffect=null),H(K,K.current),o)break;return null;case 22:case 23:return n.lanes=0,Nd(e,n,t)}return fn(e,n,t)}var Md,Mi,Od,Ld;Md=function(e,n){for(var t=n.child;t!==null;){if(t.tag===5||t.tag===6)e.appendChild(t.stateNode);else if(t.tag!==4&&t.child!==null){t.child.return=t,t=t.child;continue}if(t===n)break;for(;t.sibling===null;){if(t.return===null||t.return===n)return;t=t.return}t.sibling.return=t.return,t=t.sibling}};Mi=function(){};Od=function(e,n,t,o){var r=e.memoizedProps;if(r!==o){e=n.stateNode,Kn(tn.current);var l=null;switch(t){case"input":r=ti(e,r),o=ti(e,o),l=[];break;case"select":r=X({},r,{value:void 0}),o=X({},o,{value:void 0}),l=[];break;case"textarea":r=li(e,r),o=li(e,o),l=[];break;default:typeof r.onClick!="function"&&typeof o.onClick=="function"&&(e.onclick=br)}ai(t,o);var i;t=null;for(u in r)if(!o.hasOwnProperty(u)&&r.hasOwnProperty(u)&&r[u]!=null)if(u==="style"){var a=r[u];for(i in a)a.hasOwnProperty(i)&&(t||(t={}),t[i]="")}else u!=="dangerouslySetInnerHTML"&&u!=="children"&&u!=="suppressContentEditableWarning"&&u!=="suppressHydrationWarning"&&u!=="autoFocus"&&(mo.hasOwnProperty(u)?l||(l=[]):(l=l||[]).push(u,null));for(u in o){var s=o[u];if(a=r!=null?r[u]:void 0,o.hasOwnProperty(u)&&s!==a&&(s!=null||a!=null))if(u==="style")if(a){for(i in a)!a.hasOwnProperty(i)||s&&s.hasOwnProperty(i)||(t||(t={}),t[i]="");for(i in s)s.hasOwnProperty(i)&&a[i]!==s[i]&&(t||(t={}),t[i]=s[i])}else t||(l||(l=[]),l.push(u,t)),t=s;else u==="dangerouslySetInnerHTML"?(s=s?s.__html:void 0,a=a?a.__html:void 0,s!=null&&a!==s&&(l=l||[]).push(u,s)):u==="children"?typeof s!="string"&&typeof s!="number"||(l=l||[]).push(u,""+s):u!=="suppressContentEditableWarning"&&u!=="suppressHydrationWarning"&&(mo.hasOwnProperty(u)?(s!=null&&u==="onScroll"&&V("scroll",e),l||a===s||(l=[])):(l=l||[]).push(u,s))}t&&(l=l||[]).push("style",t);var u=l;(n.updateQueue=u)&&(n.flags|=4)}};Ld=function(e,n,t,o){t!==o&&(n.flags|=4)};function qt(e,n){if(!B)switch(e.tailMode){case"hidden":n=e.tail;for(var t=null;n!==null;)n.alternate!==null&&(t=n),n=n.sibling;t===null?e.tail=null:t.sibling=null;break;case"collapsed":t=e.tail;for(var o=null;t!==null;)t.alternate!==null&&(o=t),t=t.sibling;o===null?n||e.tail===null?e.tail=null:e.tail.sibling=null:o.sibling=null}}function he(e){var n=e.alternate!==null&&e.alternate.child===e.child,t=0,o=0;if(n)for(var r=e.child;r!==null;)t|=r.lanes|r.childLanes,o|=r.subtreeFlags&14680064,o|=r.flags&14680064,r.return=e,r=r.sibling;else for(r=e.child;r!==null;)t|=r.lanes|r.childLanes,o|=r.subtreeFlags,o|=r.flags,r.return=e,r=r.sibling;return e.subtreeFlags|=o,e.childLanes=t,n}function eg(e,n,t){var o=n.pendingProps;switch(xa(n),n.tag){case 2:case 16:case 15:case 0:case 11:case 7:case 8:case 12:case 9:case 14:return he(n),null;case 1:return Te(n.type)&&Mr(),he(n),null;case 3:return o=n.stateNode,$t(),q(je),q(Ce),Ta(),o.pendingContext&&(o.context=o.pendingContext,o.pendingContext=null),(e===null||e.child===null)&&(er(n)?n.flags|=4:e===null||e.memoizedState.isDehydrated&&!(n.flags&256)||(n.flags|=1024,Be!==null&&(Wi(Be),Be=null))),Mi(e,n),he(n),null;case 5:ja(n);var r=Kn(Eo.current);if(t=n.type,e!==null&&n.stateNode!=null)Od(e,n,t,o,r),e.ref!==n.ref&&(n.flags|=512,n.flags|=2097152);else{if(!o){if(n.stateNode===null)throw Error(T(166));return he(n),null}if(e=Kn(tn.current),er(n)){o=n.stateNode,t=n.type;var l=n.memoizedProps;switch(o[en]=n,o[ko]=l,e=(n.mode&1)!==0,t){case"dialog":V("cancel",o),V("close",o);break;case"iframe":case"object":case"embed":V("load",o);break;case"video":case"audio":for(r=0;r<Zt.length;r++)V(Zt[r],o);break;case"source":V("error",o);break;case"img":case"image":case"link":V("error",o),V("load",o);break;case"details":V("toggle",o);break;case"input":fs(o,l),V("invalid",o);break;case"select":o._wrapperState={wasMultiple:!!l.multiple},V("invalid",o);break;case"textarea":gs(o,l),V("invalid",o)}ai(t,l),r=null;for(var i in l)if(l.hasOwnProperty(i)){var a=l[i];i==="children"?typeof a=="string"?o.textContent!==a&&(l.suppressHydrationWarning!==!0&&Zo(o.textContent,a,e),r=["children",a]):typeof a=="number"&&o.textContent!==""+a&&(l.suppressHydrationWarning!==!0&&Zo(o.textContent,a,e),r=["children",""+a]):mo.hasOwnProperty(i)&&a!=null&&i==="onScroll"&&V("scroll",o)}switch(t){case"input":qo(o),ms(o,l,!0);break;case"textarea":qo(o),hs(o);break;case"select":case"option":break;default:typeof l.onClick=="function"&&(o.onclick=br)}o=r,n.updateQueue=o,o!==null&&(n.flags|=4)}else{i=r.nodeType===9?r:r.ownerDocument,e==="http://www.w3.org/1999/xhtml"&&(e=cc(t)),e==="http://www.w3.org/1999/xhtml"?t==="script"?(e=i.createElement("div"),e.innerHTML="<script><\/script>",e=e.removeChild(e.firstChild)):typeof o.is=="string"?e=i.createElement(t,{is:o.is}):(e=i.createElement(t),t==="select"&&(i=e,o.multiple?i.multiple=!0:o.size&&(i.size=o.size))):e=i.createElementNS(e,t),e[en]=n,e[ko]=o,Md(e,n,!1,!1),n.stateNode=e;e:{switch(i=si(t,o),t){case"dialog":V("cancel",e),V("close",e),r=o;break;case"iframe":case"object":case"embed":V("load",e),r=o;break;case"video":case"audio":for(r=0;r<Zt.length;r++)V(Zt[r],e);r=o;break;case"source":V("error",e),r=o;break;case"img":case"image":case"link":V("error",e),V("load",e),r=o;break;case"details":V("toggle",e),r=o;break;case"input":fs(e,o),r=ti(e,o),V("invalid",e);break;case"option":r=o;break;case"select":e._wrapperState={wasMultiple:!!o.multiple},r=X({},o,{value:void 0}),V("invalid",e);break;case"textarea":gs(e,o),r=li(e,o),V("invalid",e);break;default:r=o}ai(t,r),a=r;for(l in a)if(a.hasOwnProperty(l)){var s=a[l];l==="style"?fc(e,s):l==="dangerouslySetInnerHTML"?(s=s?s.__html:void 0,s!=null&&dc(e,s)):l==="children"?typeof s=="string"?(t!=="textarea"||s!=="")&&go(e,s):typeof s=="number"&&go(e,""+s):l!=="suppressContentEditableWarning"&&l!=="suppressHydrationWarning"&&l!=="autoFocus"&&(mo.hasOwnProperty(l)?s!=null&&l==="onScroll"&&V("scroll",e):s!=null&&ra(e,l,s,i))}switch(t){case"input":qo(e),ms(e,o,!1);break;case"textarea":qo(e),hs(e);break;case"option":o.value!=null&&e.setAttribute("value",""+Ln(o.value));break;case"select":e.multiple=!!o.multiple,l=o.value,l!=null?Ct(e,!!o.multiple,l,!1):o.defaultValue!=null&&Ct(e,!!o.multiple,o.defaultValue,!0);break;default:typeof r.onClick=="function"&&(e.onclick=br)}switch(t){case"button":case"input":case"select":case"textarea":o=!!o.autoFocus;break e;case"img":o=!0;break e;default:o=!1}}o&&(n.flags|=4)}n.ref!==null&&(n.flags|=512,n.flags|=2097152)}return he(n),null;case 6:if(e&&n.stateNode!=null)Ld(e,n,e.memoizedProps,o);else{if(typeof o!="string"&&n.stateNode===null)throw Error(T(166));if(t=Kn(Eo.current),Kn(tn.current),er(n)){if(o=n.stateNode,t=n.memoizedProps,o[en]=n,(l=o.nodeValue!==t)&&(e=De,e!==null))switch(e.tag){case 3:Zo(o.nodeValue,t,(e.mode&1)!==0);break;case 5:e.memoizedProps.suppressHydrationWarning!==!0&&Zo(o.nodeValue,t,(e.mode&1)!==0)}l&&(n.flags|=4)}else o=(t.nodeType===9?t:t.ownerDocument).createTextNode(o),o[en]=n,n.stateNode=o}return he(n),null;case 13:if(q(K),o=n.memoizedState,e===null||e.memoizedState!==null&&e.memoizedState.dehydrated!==null){if(B&&Re!==null&&n.mode&1&&!(n.flags&128))ed(),Tt(),n.flags|=98560,l=!1;else if(l=er(n),o!==null&&o.dehydrated!==null){if(e===null){if(!l)throw Error(T(318));if(l=n.memoizedState,l=l!==null?l.dehydrated:null,!l)throw Error(T(317));l[en]=n}else Tt(),!(n.flags&128)&&(n.memoizedState=null),n.flags|=4;he(n),l=!1}else Be!==null&&(Wi(Be),Be=null),l=!0;if(!l)return n.flags&65536?n:null}return n.flags&128?(n.lanes=t,n):(o=o!==null,o!==(e!==null&&e.memoizedState!==null)&&o&&(n.child.flags|=8192,n.mode&1&&(e===null||K.current&1?ie===0&&(ie=3):Ia())),n.updateQueue!==null&&(n.flags|=4),he(n),null);case 4:return $t(),Mi(e,n),e===null&&wo(n.stateNode.containerInfo),he(n),null;case 10:return Pa(n.type._context),he(n),null;case 17:return Te(n.type)&&Mr(),he(n),null;case 19:if(q(K),l=n.memoizedState,l===null)return he(n),null;if(o=(n.flags&128)!==0,i=l.rendering,i===null)if(o)qt(l,!1);else{if(ie!==0||e!==null&&e.flags&128)for(e=n.child;e!==null;){if(i=Ur(e),i!==null){for(n.flags|=128,qt(l,!1),o=i.updateQueue,o!==null&&(n.updateQueue=o,n.flags|=4),n.subtreeFlags=0,o=t,t=n.child;t!==null;)l=t,e=o,l.flags&=14680066,i=l.alternate,i===null?(l.childLanes=0,l.lanes=e,l.child=null,l.subtreeFlags=0,l.memoizedProps=null,l.memoizedState=null,l.updateQueue=null,l.dependencies=null,l.stateNode=null):(l.childLanes=i.childLanes,l.lanes=i.lanes,l.child=i.child,l.subtreeFlags=0,l.deletions=null,l.memoizedProps=i.memoizedProps,l.memoizedState=i.memoizedState,l.updateQueue=i.updateQueue,l.type=i.type,e=i.dependencies,l.dependencies=e===null?null:{lanes:e.lanes,firstContext:e.firstContext}),t=t.sibling;return H(K,K.current&1|2),n.child}e=e.sibling}l.tail!==null&&J()>Dt&&(n.flags|=128,o=!0,qt(l,!1),n.lanes=4194304)}else{if(!o)if(e=Ur(i),e!==null){if(n.flags|=128,o=!0,t=e.updateQueue,t!==null&&(n.updateQueue=t,n.flags|=4),qt(l,!0),l.tail===null&&l.tailMode==="hidden"&&!i.alternate&&!B)return he(n),null}else 2*J()-l.renderingStartTime>Dt&&t!==1073741824&&(n.flags|=128,o=!0,qt(l,!1),n.lanes=4194304);l.isBackwards?(i.sibling=n.child,n.child=i):(t=l.last,t!==null?t.sibling=i:n.child=i,l.last=i)}return l.tail!==null?(n=l.tail,l.rendering=n,l.tail=n.sibling,l.renderingStartTime=J(),n.sibling=null,t=K.current,H(K,o?t&1|2:t&1),n):(he(n),null);case 22:case 23:return Fa(),o=n.memoizedState!==null,e!==null&&e.memoizedState!==null!==o&&(n.flags|=8192),o&&n.mode&1?$e&1073741824&&(he(n),n.subtreeFlags&6&&(n.flags|=8192)):he(n),null;case 24:return null;case 25:return null}throw Error(T(156,n.tag))}function ng(e,n){switch(xa(n),n.tag){case 1:return Te(n.type)&&Mr(),e=n.flags,e&65536?(n.flags=e&-65537|128,n):null;case 3:return $t(),q(je),q(Ce),Ta(),e=n.flags,e&65536&&!(e&128)?(n.flags=e&-65537|128,n):null;case 5:return ja(n),null;case 13:if(q(K),e=n.memoizedState,e!==null&&e.dehydrated!==null){if(n.alternate===null)throw Error(T(340));Tt()}return e=n.flags,e&65536?(n.flags=e&-65537|128,n):null;case 19:return q(K),null;case 4:return $t(),null;case 10:return Pa(n.type._context),null;case 22:case 23:return Fa(),null;case 24:return null;default:return null}}var or=!1,xe=!1,tg=typeof WeakSet=="function"?WeakSet:Set,D=null;function vt(e,n){var t=e.ref;if(t!==null)if(typeof t=="function")try{t(null)}catch(o){G(e,n,o)}else t.current=null}function Oi(e,n,t){try{t()}catch(o){G(e,n,o)}}var lu=!1;function og(e,n){if(vi=$r,e=Uc(),ya(e)){if("selectionStart"in e)var t={start:e.selectionStart,end:e.selectionEnd};else e:{t=(t=e.ownerDocument)&&t.defaultView||window;var o=t.getSelection&&t.getSelection();if(o&&o.rangeCount!==0){t=o.anchorNode;var r=o.anchorOffset,l=o.focusNode;o=o.focusOffset;try{t.nodeType,l.nodeType}catch{t=null;break e}var i=0,a=-1,s=-1,u=0,p=0,f=e,m=null;n:for(;;){for(var y;f!==t||r!==0&&f.nodeType!==3||(a=i+r),f!==l||o!==0&&f.nodeType!==3||(s=i+o),f.nodeType===3&&(i+=f.nodeValue.length),(y=f.firstChild)!==null;)m=f,f=y;for(;;){if(f===e)break n;if(m===t&&++u===r&&(a=i),m===l&&++p===o&&(s=i),(y=f.nextSibling)!==null)break;f=m,m=f.parentNode}f=y}t=a===-1||s===-1?null:{start:a,end:s}}else t=null}t=t||{start:0,end:0}}else t=null;for(xi={focusedElem:e,selectionRange:t},$r=!1,D=n;D!==null;)if(n=D,e=n.child,(n.subtreeFlags&1028)!==0&&e!==null)e.return=n,D=e;else for(;D!==null;){n=D;try{var x=n.alternate;if(n.flags&1024)switch(n.tag){case 0:case 11:case 15:break;case 1:if(x!==null){var C=x.memoizedProps,k=x.memoizedState,g=n.stateNode,d=g.getSnapshotBeforeUpdate(n.elementType===n.type?C:Ve(n.type,C),k);g.__reactInternalSnapshotBeforeUpdate=d}break;case 3:var h=n.stateNode.containerInfo;h.nodeType===1?h.textContent="":h.nodeType===9&&h.documentElement&&h.removeChild(h.documentElement);break;case 5:case 6:case 4:case 17:break;default:throw Error(T(163))}}catch(v){G(n,n.return,v)}if(e=n.sibling,e!==null){e.return=n.return,D=e;break}D=n.return}return x=lu,lu=!1,x}function so(e,n,t){var o=n.updateQueue;if(o=o!==null?o.lastEffect:null,o!==null){var r=o=o.next;do{if((r.tag&e)===e){var l=r.destroy;r.destroy=void 0,l!==void 0&&Oi(n,t,l)}r=r.next}while(r!==o)}}function sl(e,n){if(n=n.updateQueue,n=n!==null?n.lastEffect:null,n!==null){var t=n=n.next;do{if((t.tag&e)===e){var o=t.create;t.destroy=o()}t=t.next}while(t!==n)}}function Li(e){var n=e.ref;if(n!==null){var t=e.stateNode;switch(e.tag){case 5:e=t;break;default:e=t}typeof n=="function"?n(e):n.current=e}}function zd(e){var n=e.alternate;n!==null&&(e.alternate=null,zd(n)),e.child=null,e.deletions=null,e.sibling=null,e.tag===5&&(n=e.stateNode,n!==null&&(delete n[en],delete n[ko],delete n[wi],delete n[Fm],delete n[Im])),e.stateNode=null,e.return=null,e.dependencies=null,e.memoizedProps=null,e.memoizedState=null,e.pendingProps=null,e.stateNode=null,e.updateQueue=null}function Ad(e){return e.tag===5||e.tag===3||e.tag===4}function iu(e){e:for(;;){for(;e.sibling===null;){if(e.return===null||Ad(e.return))return null;e=e.return}for(e.sibling.return=e.return,e=e.sibling;e.tag!==5&&e.tag!==6&&e.tag!==18;){if(e.flags&2||e.child===null||e.tag===4)continue e;e.child.return=e,e=e.child}if(!(e.flags&2))return e.stateNode}}function zi(e,n,t){var o=e.tag;if(o===5||o===6)e=e.stateNode,n?t.nodeType===8?t.parentNode.insertBefore(e,n):t.insertBefore(e,n):(t.nodeType===8?(n=t.parentNode,n.insertBefore(e,t)):(n=t,n.appendChild(e)),t=t._reactRootContainer,t!=null||n.onclick!==null||(n.onclick=br));else if(o!==4&&(e=e.child,e!==null))for(zi(e,n,t),e=e.sibling;e!==null;)zi(e,n,t),e=e.sibling}function Ai(e,n,t){var o=e.tag;if(o===5||o===6)e=e.stateNode,n?t.insertBefore(e,n):t.appendChild(e);else if(o!==4&&(e=e.child,e!==null))for(Ai(e,n,t),e=e.sibling;e!==null;)Ai(e,n,t),e=e.sibling}var de=null,qe=!1;function vn(e,n,t){for(t=t.child;t!==null;)Fd(e,n,t),t=t.sibling}function Fd(e,n,t){if(nn&&typeof nn.onCommitFiberUnmount=="function")try{nn.onCommitFiberUnmount(el,t)}catch{}switch(t.tag){case 5:xe||vt(t,n);case 6:var o=de,r=qe;de=null,vn(e,n,t),de=o,qe=r,de!==null&&(qe?(e=de,t=t.stateNode,e.nodeType===8?e.parentNode.removeChild(t):e.removeChild(t)):de.removeChild(t.stateNode));break;case 18:de!==null&&(qe?(e=de,t=t.stateNode,e.nodeType===8?Ml(e.parentNode,t):e.nodeType===1&&Ml(e,t),xo(e)):Ml(de,t.stateNode));break;case 4:o=de,r=qe,de=t.stateNode.containerInfo,qe=!0,vn(e,n,t),de=o,qe=r;break;case 0:case 11:case 14:case 15:if(!xe&&(o=t.updateQueue,o!==null&&(o=o.lastEffect,o!==null))){r=o=o.next;do{var l=r,i=l.destroy;l=l.tag,i!==void 0&&(l&2||l&4)&&Oi(t,n,i),r=r.next}while(r!==o)}vn(e,n,t);break;case 1:if(!xe&&(vt(t,n),o=t.stateNode,typeof o.componentWillUnmount=="function"))try{o.props=t.memoizedProps,o.state=t.memoizedState,o.componentWillUnmount()}catch(a){G(t,n,a)}vn(e,n,t);break;case 21:vn(e,n,t);break;case 22:t.mode&1?(xe=(o=xe)||t.memoizedState!==null,vn(e,n,t),xe=o):vn(e,n,t);break;default:vn(e,n,t)}}function au(e){var n=e.updateQueue;if(n!==null){e.updateQueue=null;var t=e.stateNode;t===null&&(t=e.stateNode=new tg),n.forEach(function(o){var r=pg.bind(null,e,o);t.has(o)||(t.add(o),o.then(r,r))})}}function He(e,n){var t=n.deletions;if(t!==null)for(var o=0;o<t.length;o++){var r=t[o];try{var l=e,i=n,a=i;e:for(;a!==null;){switch(a.tag){case 5:de=a.stateNode,qe=!1;break e;case 3:de=a.stateNode.containerInfo,qe=!0;break e;case 4:de=a.stateNode.containerInfo,qe=!0;break e}a=a.return}if(de===null)throw Error(T(160));Fd(l,i,r),de=null,qe=!1;var s=r.alternate;s!==null&&(s.return=null),r.return=null}catch(u){G(r,n,u)}}if(n.subtreeFlags&12854)for(n=n.child;n!==null;)Id(n,e),n=n.sibling}function Id(e,n){var t=e.alternate,o=e.flags;switch(e.tag){case 0:case 11:case 14:case 15:if(He(n,e),Je(e),o&4){try{so(3,e,e.return),sl(3,e)}catch(C){G(e,e.return,C)}try{so(5,e,e.return)}catch(C){G(e,e.return,C)}}break;case 1:He(n,e),Je(e),o&512&&t!==null&&vt(t,t.return);break;case 5:if(He(n,e),Je(e),o&512&&t!==null&&vt(t,t.return),e.flags&32){var r=e.stateNode;try{go(r,"")}catch(C){G(e,e.return,C)}}if(o&4&&(r=e.stateNode,r!=null)){var l=e.memoizedProps,i=t!==null?t.memoizedProps:l,a=e.type,s=e.updateQueue;if(e.updateQueue=null,s!==null)try{a==="input"&&l.type==="radio"&&l.name!=null&&sc(r,l),si(a,i);var u=si(a,l);for(i=0;i<s.length;i+=2){var p=s[i],f=s[i+1];p==="style"?fc(r,f):p==="dangerouslySetInnerHTML"?dc(r,f):p==="children"?go(r,f):ra(r,p,f,u)}switch(a){case"input":oi(r,l);break;case"textarea":uc(r,l);break;case"select":var m=r._wrapperState.wasMultiple;r._wrapperState.wasMultiple=!!l.multiple;var y=l.value;y!=null?Ct(r,!!l.multiple,y,!1):m!==!!l.multiple&&(l.defaultValue!=null?Ct(r,!!l.multiple,l.defaultValue,!0):Ct(r,!!l.multiple,l.multiple?[]:"",!1))}r[ko]=l}catch(C){G(e,e.return,C)}}break;case 6:if(He(n,e),Je(e),o&4){if(e.stateNode===null)throw Error(T(162));r=e.stateNode,l=e.memoizedProps;try{r.nodeValue=l}catch(C){G(e,e.return,C)}}break;case 3:if(He(n,e),Je(e),o&4&&t!==null&&t.memoizedState.isDehydrated)try{xo(n.containerInfo)}catch(C){G(e,e.return,C)}break;case 4:He(n,e),Je(e);break;case 13:He(n,e),Je(e),r=e.child,r.flags&8192&&(l=r.memoizedState!==null,r.stateNode.isHidden=l,!l||r.alternate!==null&&r.alternate.memoizedState!==null||(za=J())),o&4&&au(e);break;case 22:if(p=t!==null&&t.memoizedState!==null,e.mode&1?(xe=(u=xe)||p,He(n,e),xe=u):He(n,e),Je(e),o&8192){if(u=e.memoizedState!==null,(e.stateNode.isHidden=u)&&!p&&e.mode&1)for(D=e,p=e.child;p!==null;){for(f=D=p;D!==null;){switch(m=D,y=m.child,m.tag){case 0:case 11:case 14:case 15:so(4,m,m.return);break;case 1:vt(m,m.return);var x=m.stateNode;if(typeof x.componentWillUnmount=="function"){o=m,t=m.return;try{n=o,x.props=n.memoizedProps,x.state=n.memoizedState,x.componentWillUnmount()}catch(C){G(o,t,C)}}break;case 5:vt(m,m.return);break;case 22:if(m.memoizedState!==null){uu(f);continue}}y!==null?(y.return=m,D=y):uu(f)}p=p.sibling}e:for(p=null,f=e;;){if(f.tag===5){if(p===null){p=f;try{r=f.stateNode,u?(l=r.style,typeof l.setProperty=="function"?l.setProperty("display","none","important"):l.display="none"):(a=f.stateNode,s=f.memoizedProps.style,i=s!=null&&s.hasOwnProperty("display")?s.display:null,a.style.display=pc("display",i))}catch(C){G(e,e.return,C)}}}else if(f.tag===6){if(p===null)try{f.stateNode.nodeValue=u?"":f.memoizedProps}catch(C){G(e,e.return,C)}}else if((f.tag!==22&&f.tag!==23||f.memoizedState===null||f===e)&&f.child!==null){f.child.return=f,f=f.child;continue}if(f===e)break e;for(;f.sibling===null;){if(f.return===null||f.return===e)break e;p===f&&(p=null),f=f.return}p===f&&(p=null),f.sibling.return=f.return,f=f.sibling}}break;case 19:He(n,e),Je(e),o&4&&au(e);break;case 21:break;default:He(n,e),Je(e)}}function Je(e){var n=e.flags;if(n&2){try{e:{for(var t=e.return;t!==null;){if(Ad(t)){var o=t;break e}t=t.return}throw Error(T(160))}switch(o.tag){case 5:var r=o.stateNode;o.flags&32&&(go(r,""),o.flags&=-33);var l=iu(e);Ai(e,l,r);break;case 3:case 4:var i=o.stateNode.containerInfo,a=iu(e);zi(e,a,i);break;default:throw Error(T(161))}}catch(s){G(e,e.return,s)}e.flags&=-3}n&4096&&(e.flags&=-4097)}function rg(e,n,t){D=e,Ud(e)}function Ud(e,n,t){for(var o=(e.mode&1)!==0;D!==null;){var r=D,l=r.child;if(r.tag===22&&o){var i=r.memoizedState!==null||or;if(!i){var a=r.alternate,s=a!==null&&a.memoizedState!==null||xe;a=or;var u=xe;if(or=i,(xe=s)&&!u)for(D=r;D!==null;)i=D,s=i.child,i.tag===22&&i.memoizedState!==null?cu(r):s!==null?(s.return=i,D=s):cu(r);for(;l!==null;)D=l,Ud(l),l=l.sibling;D=r,or=a,xe=u}su(e)}else r.subtreeFlags&8772&&l!==null?(l.return=r,D=l):su(e)}}function su(e){for(;D!==null;){var n=D;if(n.flags&8772){var t=n.alternate;try{if(n.flags&8772)switch(n.tag){case 0:case 11:case 15:xe||sl(5,n);break;case 1:var o=n.stateNode;if(n.flags&4&&!xe)if(t===null)o.componentDidMount();else{var r=n.elementType===n.type?t.memoizedProps:Ve(n.type,t.memoizedProps);o.componentDidUpdate(r,t.memoizedState,o.__reactInternalSnapshotBeforeUpdate)}var l=n.updateQueue;l!==null&&Bs(n,l,o);break;case 3:var i=n.updateQueue;if(i!==null){if(t=null,n.child!==null)switch(n.child.tag){case 5:t=n.child.stateNode;break;case 1:t=n.child.stateNode}Bs(n,i,t)}break;case 5:var a=n.stateNode;if(t===null&&n.flags&4){t=a;var s=n.memoizedProps;switch(n.type){case"button":case"input":case"select":case"textarea":s.autoFocus&&t.focus();break;case"img":s.src&&(t.src=s.src)}}break;case 6:break;case 4:break;case 12:break;case 13:if(n.memoizedState===null){var u=n.alternate;if(u!==null){var p=u.memoizedState;if(p!==null){var f=p.dehydrated;f!==null&&xo(f)}}}break;case 19:case 17:case 21:case 22:case 23:case 25:break;default:throw Error(T(163))}xe||n.flags&512&&Li(n)}catch(m){G(n,n.return,m)}}if(n===e){D=null;break}if(t=n.sibling,t!==null){t.return=n.return,D=t;break}D=n.return}}function uu(e){for(;D!==null;){var n=D;if(n===e){D=null;break}var t=n.sibling;if(t!==null){t.return=n.return,D=t;break}D=n.return}}function cu(e){for(;D!==null;){var n=D;try{switch(n.tag){case 0:case 11:case 15:var t=n.return;try{sl(4,n)}catch(s){G(n,t,s)}break;case 1:var o=n.stateNode;if(typeof o.componentDidMount=="function"){var r=n.return;try{o.componentDidMount()}catch(s){G(n,r,s)}}var l=n.return;try{Li(n)}catch(s){G(n,l,s)}break;case 5:var i=n.return;try{Li(n)}catch(s){G(n,i,s)}}}catch(s){G(n,n.return,s)}if(n===e){D=null;break}var a=n.sibling;if(a!==null){a.return=n.return,D=a;break}D=n.return}}var lg=Math.ceil,Vr=mn.ReactCurrentDispatcher,Oa=mn.ReactCurrentOwner,Fe=mn.ReactCurrentBatchConfig,A=0,ce=null,ne=null,pe=0,$e=0,xt=Fn(0),ie=0,$o=null,et=0,ul=0,La=0,uo=null,_e=null,za=0,Dt=1/0,on=null,qr=!1,Fi=null,Dn=null,rr=!1,_n=null,Br=0,co=0,Ii=null,wr=-1,Pr=0;function we(){return A&6?J():wr!==-1?wr:wr=J()}function bn(e){return e.mode&1?A&2&&pe!==0?pe&-pe:Wm.transition!==null?(Pr===0&&(Pr=_c()),Pr):(e=I,e!==0||(e=window.event,e=e===void 0?16:Dc(e.type)),e):1}function Ke(e,n,t,o){if(50<co)throw co=0,Ii=null,Error(T(185));Oo(e,t,o),(!(A&2)||e!==ce)&&(e===ce&&(!(A&2)&&(ul|=t),ie===4&&Pn(e,pe)),Ne(e,o),t===1&&A===0&&!(n.mode&1)&&(Dt=J()+500,ll&&In()))}function Ne(e,n){var t=e.callbackNode;Wf(e,n);var o=Nr(e,e===ce?pe:0);if(o===0)t!==null&&xs(t),e.callbackNode=null,e.callbackPriority=0;else if(n=o&-o,e.callbackPriority!==n){if(t!=null&&xs(t),n===1)e.tag===0?Um(du.bind(null,e)):Gc(du.bind(null,e)),zm(function(){!(A&6)&&In()}),t=null;else{switch(Ec(o)){case 1:t=ua;break;case 4:t=Pc;break;case 16:t=Tr;break;case 536870912:t=kc;break;default:t=Tr}t=Yd(t,Wd.bind(null,e))}e.callbackPriority=n,e.callbackNode=t}}function Wd(e,n){if(wr=-1,Pr=0,A&6)throw Error(T(327));var t=e.callbackNode;if(_t()&&e.callbackNode!==t)return null;var o=Nr(e,e===ce?pe:0);if(o===0)return null;if(o&30||o&e.expiredLanes||n)n=Qr(e,o);else{n=o;var r=A;A|=2;var l=Vd();(ce!==e||pe!==n)&&(on=null,Dt=J()+500,Yn(e,n));do try{sg();break}catch(a){Hd(e,a)}while(!0);wa(),Vr.current=l,A=r,ne!==null?n=0:(ce=null,pe=0,n=ie)}if(n!==0){if(n===2&&(r=fi(e),r!==0&&(o=r,n=Ui(e,r))),n===1)throw t=$o,Yn(e,0),Pn(e,o),Ne(e,J()),t;if(n===6)Pn(e,o);else{if(r=e.current.alternate,!(o&30)&&!ig(r)&&(n=Qr(e,o),n===2&&(l=fi(e),l!==0&&(o=l,n=Ui(e,l))),n===1))throw t=$o,Yn(e,0),Pn(e,o),Ne(e,J()),t;switch(e.finishedWork=r,e.finishedLanes=o,n){case 0:case 1:throw Error(T(345));case 2:qn(e,_e,on);break;case 3:if(Pn(e,o),(o&130023424)===o&&(n=za+500-J(),10<n)){if(Nr(e,0)!==0)break;if(r=e.suspendedLanes,(r&o)!==o){we(),e.pingedLanes|=e.suspendedLanes&r;break}e.timeoutHandle=Si(qn.bind(null,e,_e,on),n);break}qn(e,_e,on);break;case 4:if(Pn(e,o),(o&4194240)===o)break;for(n=e.eventTimes,r=-1;0<o;){var i=31-Qe(o);l=1<<i,i=n[i],i>r&&(r=i),o&=~l}if(o=r,o=J()-o,o=(120>o?120:480>o?480:1080>o?1080:1920>o?1920:3e3>o?3e3:4320>o?4320:1960*lg(o/1960))-o,10<o){e.timeoutHandle=Si(qn.bind(null,e,_e,on),o);break}qn(e,_e,on);break;case 5:qn(e,_e,on);break;default:throw Error(T(329))}}}return Ne(e,J()),e.callbackNode===t?Wd.bind(null,e):null}function Ui(e,n){var t=uo;return e.current.memoizedState.isDehydrated&&(Yn(e,n).flags|=256),e=Qr(e,n),e!==2&&(n=_e,_e=t,n!==null&&Wi(n)),e}function Wi(e){_e===null?_e=e:_e.push.apply(_e,e)}function ig(e){for(var n=e;;){if(n.flags&16384){var t=n.updateQueue;if(t!==null&&(t=t.stores,t!==null))for(var o=0;o<t.length;o++){var r=t[o],l=r.getSnapshot;r=r.value;try{if(!Ye(l(),r))return!1}catch{return!1}}}if(t=n.child,n.subtreeFlags&16384&&t!==null)t.return=n,n=t;else{if(n===e)break;for(;n.sibling===null;){if(n.return===null||n.return===e)return!0;n=n.return}n.sibling.return=n.return,n=n.sibling}}return!0}function Pn(e,n){for(n&=~La,n&=~ul,e.suspendedLanes|=n,e.pingedLanes&=~n,e=e.expirationTimes;0<n;){var t=31-Qe(n),o=1<<t;e[t]=-1,n&=~o}}function du(e){if(A&6)throw Error(T(327));_t();var n=Nr(e,0);if(!(n&1))return Ne(e,J()),null;var t=Qr(e,n);if(e.tag!==0&&t===2){var o=fi(e);o!==0&&(n=o,t=Ui(e,o))}if(t===1)throw t=$o,Yn(e,0),Pn(e,n),Ne(e,J()),t;if(t===6)throw Error(T(345));return e.finishedWork=e.current.alternate,e.finishedLanes=n,qn(e,_e,on),Ne(e,J()),null}function Aa(e,n){var t=A;A|=1;try{return e(n)}finally{A=t,A===0&&(Dt=J()+500,ll&&In())}}function nt(e){_n!==null&&_n.tag===0&&!(A&6)&&_t();var n=A;A|=1;var t=Fe.transition,o=I;try{if(Fe.transition=null,I=1,e)return e()}finally{I=o,Fe.transition=t,A=n,!(A&6)&&In()}}function Fa(){$e=xt.current,q(xt)}function Yn(e,n){e.finishedWork=null,e.finishedLanes=0;var t=e.timeoutHandle;if(t!==-1&&(e.timeoutHandle=-1,Lm(t)),ne!==null)for(t=ne.return;t!==null;){var o=t;switch(xa(o),o.tag){case 1:o=o.type.childContextTypes,o!=null&&Mr();break;case 3:$t(),q(je),q(Ce),Ta();break;case 5:ja(o);break;case 4:$t();break;case 13:q(K);break;case 19:q(K);break;case 10:Pa(o.type._context);break;case 22:case 23:Fa()}t=t.return}if(ce=e,ne=e=Mn(e.current,null),pe=$e=n,ie=0,$o=null,La=ul=et=0,_e=uo=null,Qn!==null){for(n=0;n<Qn.length;n++)if(t=Qn[n],o=t.interleaved,o!==null){t.interleaved=null;var r=o.next,l=t.pending;if(l!==null){var i=l.next;l.next=r,o.next=i}t.pending=o}Qn=null}return e}function Hd(e,n){do{var t=ne;try{if(wa(),xr.current=Hr,Wr){for(var o=Y.memoizedState;o!==null;){var r=o.queue;r!==null&&(r.pending=null),o=o.next}Wr=!1}if(Zn=0,ue=le=Y=null,ao=!1,jo=0,Oa.current=null,t===null||t.return===null){ie=1,$o=n,ne=null;break}e:{var l=e,i=t.return,a=t,s=n;if(n=pe,a.flags|=32768,s!==null&&typeof s=="object"&&typeof s.then=="function"){var u=s,p=a,f=p.tag;if(!(p.mode&1)&&(f===0||f===11||f===15)){var m=p.alternate;m?(p.updateQueue=m.updateQueue,p.memoizedState=m.memoizedState,p.lanes=m.lanes):(p.updateQueue=null,p.memoizedState=null)}var y=Js(i);if(y!==null){y.flags&=-257,Zs(y,i,a,l,n),y.mode&1&&Gs(l,u,n),n=y,s=u;var x=n.updateQueue;if(x===null){var C=new Set;C.add(s),n.updateQueue=C}else x.add(s);break e}else{if(!(n&1)){Gs(l,u,n),Ia();break e}s=Error(T(426))}}else if(B&&a.mode&1){var k=Js(i);if(k!==null){!(k.flags&65536)&&(k.flags|=256),Zs(k,i,a,l,n),Ca(Rt(s,a));break e}}l=s=Rt(s,a),ie!==4&&(ie=2),uo===null?uo=[l]:uo.push(l),l=i;do{switch(l.tag){case 3:l.flags|=65536,n&=-n,l.lanes|=n;var g=Ed(l,s,n);qs(l,g);break e;case 1:a=s;var d=l.type,h=l.stateNode;if(!(l.flags&128)&&(typeof d.getDerivedStateFromError=="function"||h!==null&&typeof h.componentDidCatch=="function"&&(Dn===null||!Dn.has(h)))){l.flags|=65536,n&=-n,l.lanes|=n;var v=jd(l,a,n);qs(l,v);break e}}l=l.return}while(l!==null)}Bd(t)}catch(w){n=w,ne===t&&t!==null&&(ne=t=t.return);continue}break}while(!0)}function Vd(){var e=Vr.current;return Vr.current=Hr,e===null?Hr:e}function Ia(){(ie===0||ie===3||ie===2)&&(ie=4),ce===null||!(et&268435455)&&!(ul&268435455)||Pn(ce,pe)}function Qr(e,n){var t=A;A|=2;var o=Vd();(ce!==e||pe!==n)&&(on=null,Yn(e,n));do try{ag();break}catch(r){Hd(e,r)}while(!0);if(wa(),A=t,Vr.current=o,ne!==null)throw Error(T(261));return ce=null,pe=0,ie}function ag(){for(;ne!==null;)qd(ne)}function sg(){for(;ne!==null&&!bf();)qd(ne)}function qd(e){var n=Kd(e.alternate,e,$e);e.memoizedProps=e.pendingProps,n===null?Bd(e):ne=n,Oa.current=null}function Bd(e){var n=e;do{var t=n.alternate;if(e=n.return,n.flags&32768){if(t=ng(t,n),t!==null){t.flags&=32767,ne=t;return}if(e!==null)e.flags|=32768,e.subtreeFlags=0,e.deletions=null;else{ie=6,ne=null;return}}else if(t=eg(t,n,$e),t!==null){ne=t;return}if(n=n.sibling,n!==null){ne=n;return}ne=n=e}while(n!==null);ie===0&&(ie=5)}function qn(e,n,t){var o=I,r=Fe.transition;try{Fe.transition=null,I=1,ug(e,n,t,o)}finally{Fe.transition=r,I=o}return null}function ug(e,n,t,o){do _t();while(_n!==null);if(A&6)throw Error(T(327));t=e.finishedWork;var r=e.finishedLanes;if(t===null)return null;if(e.finishedWork=null,e.finishedLanes=0,t===e.current)throw Error(T(177));e.callbackNode=null,e.callbackPriority=0;var l=t.lanes|t.childLanes;if(Hf(e,l),e===ce&&(ne=ce=null,pe=0),!(t.subtreeFlags&2064)&&!(t.flags&2064)||rr||(rr=!0,Yd(Tr,function(){return _t(),null})),l=(t.flags&15990)!==0,t.subtreeFlags&15990||l){l=Fe.transition,Fe.transition=null;var i=I;I=1;var a=A;A|=4,Oa.current=null,og(e,t),Id(t,e),Nm(xi),$r=!!vi,xi=vi=null,e.current=t,rg(t),Mf(),A=a,I=i,Fe.transition=l}else e.current=t;if(rr&&(rr=!1,_n=e,Br=r),l=e.pendingLanes,l===0&&(Dn=null),zf(t.stateNode),Ne(e,J()),n!==null)for(o=e.onRecoverableError,t=0;t<n.length;t++)r=n[t],o(r.value,{componentStack:r.stack,digest:r.digest});if(qr)throw qr=!1,e=Fi,Fi=null,e;return Br&1&&e.tag!==0&&_t(),l=e.pendingLanes,l&1?e===Ii?co++:(co=0,Ii=e):co=0,In(),null}function _t(){if(_n!==null){var e=Ec(Br),n=Fe.transition,t=I;try{if(Fe.transition=null,I=16>e?16:e,_n===null)var o=!1;else{if(e=_n,_n=null,Br=0,A&6)throw Error(T(331));var r=A;for(A|=4,D=e.current;D!==null;){var l=D,i=l.child;if(D.flags&16){var a=l.deletions;if(a!==null){for(var s=0;s<a.length;s++){var u=a[s];for(D=u;D!==null;){var p=D;switch(p.tag){case 0:case 11:case 15:so(8,p,l)}var f=p.child;if(f!==null)f.return=p,D=f;else for(;D!==null;){p=D;var m=p.sibling,y=p.return;if(zd(p),p===u){D=null;break}if(m!==null){m.return=y,D=m;break}D=y}}}var x=l.alternate;if(x!==null){var C=x.child;if(C!==null){x.child=null;do{var k=C.sibling;C.sibling=null,C=k}while(C!==null)}}D=l}}if(l.subtreeFlags&2064&&i!==null)i.return=l,D=i;else e:for(;D!==null;){if(l=D,l.flags&2048)switch(l.tag){case 0:case 11:case 15:so(9,l,l.return)}var g=l.sibling;if(g!==null){g.return=l.return,D=g;break e}D=l.return}}var d=e.current;for(D=d;D!==null;){i=D;var h=i.child;if(i.subtreeFlags&2064&&h!==null)h.return=i,D=h;else e:for(i=d;D!==null;){if(a=D,a.flags&2048)try{switch(a.tag){case 0:case 11:case 15:sl(9,a)}}catch(w){G(a,a.return,w)}if(a===i){D=null;break e}var v=a.sibling;if(v!==null){v.return=a.return,D=v;break e}D=a.return}}if(A=r,In(),nn&&typeof nn.onPostCommitFiberRoot=="function")try{nn.onPostCommitFiberRoot(el,e)}catch{}o=!0}return o}finally{I=t,Fe.transition=n}}return!1}function pu(e,n,t){n=Rt(t,n),n=Ed(e,n,1),e=Rn(e,n,1),n=we(),e!==null&&(Oo(e,1,n),Ne(e,n))}function G(e,n,t){if(e.tag===3)pu(e,e,t);else for(;n!==null;){if(n.tag===3){pu(n,e,t);break}else if(n.tag===1){var o=n.stateNode;if(typeof n.type.getDerivedStateFromError=="function"||typeof o.componentDidCatch=="function"&&(Dn===null||!Dn.has(o))){e=Rt(t,e),e=jd(n,e,1),n=Rn(n,e,1),e=we(),n!==null&&(Oo(n,1,e),Ne(n,e));break}}n=n.return}}function cg(e,n,t){var o=e.pingCache;o!==null&&o.delete(n),n=we(),e.pingedLanes|=e.suspendedLanes&t,ce===e&&(pe&t)===t&&(ie===4||ie===3&&(pe&130023424)===pe&&500>J()-za?Yn(e,0):La|=t),Ne(e,n)}function Qd(e,n){n===0&&(e.mode&1?(n=Ko,Ko<<=1,!(Ko&130023424)&&(Ko=4194304)):n=1);var t=we();e=pn(e,n),e!==null&&(Oo(e,n,t),Ne(e,t))}function dg(e){var n=e.memoizedState,t=0;n!==null&&(t=n.retryLane),Qd(e,t)}function pg(e,n){var t=0;switch(e.tag){case 13:var o=e.stateNode,r=e.memoizedState;r!==null&&(t=r.retryLane);break;case 19:o=e.stateNode;break;default:throw Error(T(314))}o!==null&&o.delete(n),Qd(e,t)}var Kd;Kd=function(e,n,t){if(e!==null)if(e.memoizedProps!==n.pendingProps||je.current)Ee=!0;else{if(!(e.lanes&t)&&!(n.flags&128))return Ee=!1,Zm(e,n,t);Ee=!!(e.flags&131072)}else Ee=!1,B&&n.flags&1048576&&Jc(n,zr,n.index);switch(n.lanes=0,n.tag){case 2:var o=n.type;Sr(e,n),e=n.pendingProps;var r=jt(n,Ce.current);kt(n,t),r=$a(null,n,o,e,r,t);var l=Ra();return n.flags|=1,typeof r=="object"&&r!==null&&typeof r.render=="function"&&r.$$typeof===void 0?(n.tag=1,n.memoizedState=null,n.updateQueue=null,Te(o)?(l=!0,Or(n)):l=!1,n.memoizedState=r.state!==null&&r.state!==void 0?r.state:null,_a(n),r.updater=al,n.stateNode=r,r._reactInternals=n,Ti(n,o,e,t),n=Ri(null,n,o,!0,l,t)):(n.tag=0,B&&l&&va(n),Se(null,n,r,t),n=n.child),n;case 16:o=n.elementType;e:{switch(Sr(e,n),e=n.pendingProps,r=o._init,o=r(o._payload),n.type=o,r=n.tag=mg(o),e=Ve(o,e),r){case 0:n=$i(null,n,o,e,t);break e;case 1:n=tu(null,n,o,e,t);break e;case 11:n=eu(null,n,o,e,t);break e;case 14:n=nu(null,n,o,Ve(o.type,e),t);break e}throw Error(T(306,o,""))}return n;case 0:return o=n.type,r=n.pendingProps,r=n.elementType===o?r:Ve(o,r),$i(e,n,o,r,t);case 1:return o=n.type,r=n.pendingProps,r=n.elementType===o?r:Ve(o,r),tu(e,n,o,r,t);case 3:e:{if(Rd(n),e===null)throw Error(T(387));o=n.pendingProps,l=n.memoizedState,r=l.element,rd(e,n),Ir(n,o,null,t);var i=n.memoizedState;if(o=i.element,l.isDehydrated)if(l={element:o,isDehydrated:!1,cache:i.cache,pendingSuspenseBoundaries:i.pendingSuspenseBoundaries,transitions:i.transitions},n.updateQueue.baseState=l,n.memoizedState=l,n.flags&256){r=Rt(Error(T(423)),n),n=ou(e,n,o,t,r);break e}else if(o!==r){r=Rt(Error(T(424)),n),n=ou(e,n,o,t,r);break e}else for(Re=$n(n.stateNode.containerInfo.firstChild),De=n,B=!0,Be=null,t=td(n,null,o,t),n.child=t;t;)t.flags=t.flags&-3|4096,t=t.sibling;else{if(Tt(),o===r){n=fn(e,n,t);break e}Se(e,n,o,t)}n=n.child}return n;case 5:return ld(n),e===null&&_i(n),o=n.type,r=n.pendingProps,l=e!==null?e.memoizedProps:null,i=r.children,Ci(o,r)?i=null:l!==null&&Ci(o,l)&&(n.flags|=32),$d(e,n),Se(e,n,i,t),n.child;case 6:return e===null&&_i(n),null;case 13:return Dd(e,n,t);case 4:return Ea(n,n.stateNode.containerInfo),o=n.pendingProps,e===null?n.child=Nt(n,null,o,t):Se(e,n,o,t),n.child;case 11:return o=n.type,r=n.pendingProps,r=n.elementType===o?r:Ve(o,r),eu(e,n,o,r,t);case 7:return Se(e,n,n.pendingProps,t),n.child;case 8:return Se(e,n,n.pendingProps.children,t),n.child;case 12:return Se(e,n,n.pendingProps.children,t),n.child;case 10:e:{if(o=n.type._context,r=n.pendingProps,l=n.memoizedProps,i=r.value,H(Ar,o._currentValue),o._currentValue=i,l!==null)if(Ye(l.value,i)){if(l.children===r.children&&!je.current){n=fn(e,n,t);break e}}else for(l=n.child,l!==null&&(l.return=n);l!==null;){var a=l.dependencies;if(a!==null){i=l.child;for(var s=a.firstContext;s!==null;){if(s.context===o){if(l.tag===1){s=un(-1,t&-t),s.tag=2;var u=l.updateQueue;if(u!==null){u=u.shared;var p=u.pending;p===null?s.next=s:(s.next=p.next,p.next=s),u.pending=s}}l.lanes|=t,s=l.alternate,s!==null&&(s.lanes|=t),Ei(l.return,t,n),a.lanes|=t;break}s=s.next}}else if(l.tag===10)i=l.type===n.type?null:l.child;else if(l.tag===18){if(i=l.return,i===null)throw Error(T(341));i.lanes|=t,a=i.alternate,a!==null&&(a.lanes|=t),Ei(i,t,n),i=l.sibling}else i=l.child;if(i!==null)i.return=l;else for(i=l;i!==null;){if(i===n){i=null;break}if(l=i.sibling,l!==null){l.return=i.return,i=l;break}i=i.return}l=i}Se(e,n,r.children,t),n=n.child}return n;case 9:return r=n.type,o=n.pendingProps.children,kt(n,t),r=Ie(r),o=o(r),n.flags|=1,Se(e,n,o,t),n.child;case 14:return o=n.type,r=Ve(o,n.pendingProps),r=Ve(o.type,r),nu(e,n,o,r,t);case 15:return Td(e,n,n.type,n.pendingProps,t);case 17:return o=n.type,r=n.pendingProps,r=n.elementType===o?r:Ve(o,r),Sr(e,n),n.tag=1,Te(o)?(e=!0,Or(n)):e=!1,kt(n,t),_d(n,o,r),Ti(n,o,r,t),Ri(null,n,o,!0,e,t);case 19:return bd(e,n,t);case 22:return Nd(e,n,t)}throw Error(T(156,n.tag))};function Yd(e,n){return wc(e,n)}function fg(e,n,t,o){this.tag=e,this.key=t,this.sibling=this.child=this.return=this.stateNode=this.type=this.elementType=null,this.index=0,this.ref=null,this.pendingProps=n,this.dependencies=this.memoizedState=this.updateQueue=this.memoizedProps=null,this.mode=o,this.subtreeFlags=this.flags=0,this.deletions=null,this.childLanes=this.lanes=0,this.alternate=null}function Ae(e,n,t,o){return new fg(e,n,t,o)}function Ua(e){return e=e.prototype,!(!e||!e.isReactComponent)}function mg(e){if(typeof e=="function")return Ua(e)?1:0;if(e!=null){if(e=e.$$typeof,e===ia)return 11;if(e===aa)return 14}return 2}function Mn(e,n){var t=e.alternate;return t===null?(t=Ae(e.tag,n,e.key,e.mode),t.elementType=e.elementType,t.type=e.type,t.stateNode=e.stateNode,t.alternate=e,e.alternate=t):(t.pendingProps=n,t.type=e.type,t.flags=0,t.subtreeFlags=0,t.deletions=null),t.flags=e.flags&14680064,t.childLanes=e.childLanes,t.lanes=e.lanes,t.child=e.child,t.memoizedProps=e.memoizedProps,t.memoizedState=e.memoizedState,t.updateQueue=e.updateQueue,n=e.dependencies,t.dependencies=n===null?null:{lanes:n.lanes,firstContext:n.firstContext},t.sibling=e.sibling,t.index=e.index,t.ref=e.ref,t}function kr(e,n,t,o,r,l){var i=2;if(o=e,typeof e=="function")Ua(e)&&(i=1);else if(typeof e=="string")i=5;else e:switch(e){case ut:return Xn(t.children,r,l,n);case la:i=8,r|=8;break;case Jl:return e=Ae(12,t,n,r|2),e.elementType=Jl,e.lanes=l,e;case Zl:return e=Ae(13,t,n,r),e.elementType=Zl,e.lanes=l,e;case ei:return e=Ae(19,t,n,r),e.elementType=ei,e.lanes=l,e;case lc:return cl(t,r,l,n);default:if(typeof e=="object"&&e!==null)switch(e.$$typeof){case oc:i=10;break e;case rc:i=9;break e;case ia:i=11;break e;case aa:i=14;break e;case Cn:i=16,o=null;break e}throw Error(T(130,e==null?e:typeof e,""))}return n=Ae(i,t,n,r),n.elementType=e,n.type=o,n.lanes=l,n}function Xn(e,n,t,o){return e=Ae(7,e,o,n),e.lanes=t,e}function cl(e,n,t,o){return e=Ae(22,e,o,n),e.elementType=lc,e.lanes=t,e.stateNode={isHidden:!1},e}function Wl(e,n,t){return e=Ae(6,e,null,n),e.lanes=t,e}function Hl(e,n,t){return n=Ae(4,e.children!==null?e.children:[],e.key,n),n.lanes=t,n.stateNode={containerInfo:e.containerInfo,pendingChildren:null,implementation:e.implementation},n}function gg(e,n,t,o,r){this.tag=n,this.containerInfo=e,this.finishedWork=this.pingCache=this.current=this.pendingChildren=null,this.timeoutHandle=-1,this.callbackNode=this.pendingContext=this.context=null,this.callbackPriority=0,this.eventTimes=Pl(0),this.expirationTimes=Pl(-1),this.entangledLanes=this.finishedLanes=this.mutableReadLanes=this.expiredLanes=this.pingedLanes=this.suspendedLanes=this.pendingLanes=0,this.entanglements=Pl(0),this.identifierPrefix=o,this.onRecoverableError=r,this.mutableSourceEagerHydrationData=null}function Wa(e,n,t,o,r,l,i,a,s){return e=new gg(e,n,t,a,s),n===1?(n=1,l===!0&&(n|=8)):n=0,l=Ae(3,null,null,n),e.current=l,l.stateNode=e,l.memoizedState={element:o,isDehydrated:t,cache:null,transitions:null,pendingSuspenseBoundaries:null},_a(l),e}function hg(e,n,t){var o=3<arguments.length&&arguments[3]!==void 0?arguments[3]:null;return{$$typeof:st,key:o==null?null:""+o,children:e,containerInfo:n,implementation:t}}function Xd(e){if(!e)return zn;e=e._reactInternals;e:{if(ot(e)!==e||e.tag!==1)throw Error(T(170));var n=e;do{switch(n.tag){case 3:n=n.stateNode.context;break e;case 1:if(Te(n.type)){n=n.stateNode.__reactInternalMemoizedMergedChildContext;break e}}n=n.return}while(n!==null);throw Error(T(171))}if(e.tag===1){var t=e.type;if(Te(t))return Xc(e,t,n)}return n}function Gd(e,n,t,o,r,l,i,a,s){return e=Wa(t,o,!0,e,r,l,i,a,s),e.context=Xd(null),t=e.current,o=we(),r=bn(t),l=un(o,r),l.callback=n??null,Rn(t,l,r),e.current.lanes=r,Oo(e,r,o),Ne(e,o),e}function dl(e,n,t,o){var r=n.current,l=we(),i=bn(r);return t=Xd(t),n.context===null?n.context=t:n.pendingContext=t,n=un(l,i),n.payload={element:e},o=o===void 0?null:o,o!==null&&(n.callback=o),e=Rn(r,n,i),e!==null&&(Ke(e,r,i,l),vr(e,r,i)),i}function Kr(e){if(e=e.current,!e.child)return null;switch(e.child.tag){case 5:return e.child.stateNode;default:return e.child.stateNode}}function fu(e,n){if(e=e.memoizedState,e!==null&&e.dehydrated!==null){var t=e.retryLane;e.retryLane=t!==0&&t<n?t:n}}function Ha(e,n){fu(e,n),(e=e.alternate)&&fu(e,n)}function yg(){return null}var Jd=typeof reportError=="function"?reportError:function(e){console.error(e)};function Va(e){this._internalRoot=e}pl.prototype.render=Va.prototype.render=function(e){var n=this._internalRoot;if(n===null)throw Error(T(409));dl(e,n,null,null)};pl.prototype.unmount=Va.prototype.unmount=function(){var e=this._internalRoot;if(e!==null){this._internalRoot=null;var n=e.containerInfo;nt(function(){dl(null,e,null,null)}),n[dn]=null}};function pl(e){this._internalRoot=e}pl.prototype.unstable_scheduleHydration=function(e){if(e){var n=Nc();e={blockedOn:null,target:e,priority:n};for(var t=0;t<wn.length&&n!==0&&n<wn[t].priority;t++);wn.splice(t,0,e),t===0&&Rc(e)}};function qa(e){return!(!e||e.nodeType!==1&&e.nodeType!==9&&e.nodeType!==11)}function fl(e){return!(!e||e.nodeType!==1&&e.nodeType!==9&&e.nodeType!==11&&(e.nodeType!==8||e.nodeValue!==" react-mount-point-unstable "))}function mu(){}function vg(e,n,t,o,r){if(r){if(typeof o=="function"){var l=o;o=function(){var u=Kr(i);l.call(u)}}var i=Gd(n,o,e,0,null,!1,!1,"",mu);return e._reactRootContainer=i,e[dn]=i.current,wo(e.nodeType===8?e.parentNode:e),nt(),i}for(;r=e.lastChild;)e.removeChild(r);if(typeof o=="function"){var a=o;o=function(){var u=Kr(s);a.call(u)}}var s=Wa(e,0,!1,null,null,!1,!1,"",mu);return e._reactRootContainer=s,e[dn]=s.current,wo(e.nodeType===8?e.parentNode:e),nt(function(){dl(n,s,t,o)}),s}function ml(e,n,t,o,r){var l=t._reactRootContainer;if(l){var i=l;if(typeof r=="function"){var a=r;r=function(){var s=Kr(i);a.call(s)}}dl(n,i,e,r)}else i=vg(t,n,e,r,o);return Kr(i)}jc=function(e){switch(e.tag){case 3:var n=e.stateNode;if(n.current.memoizedState.isDehydrated){var t=Jt(n.pendingLanes);t!==0&&(ca(n,t|1),Ne(n,J()),!(A&6)&&(Dt=J()+500,In()))}break;case 13:nt(function(){var o=pn(e,1);if(o!==null){var r=we();Ke(o,e,1,r)}}),Ha(e,1)}};da=function(e){if(e.tag===13){var n=pn(e,134217728);if(n!==null){var t=we();Ke(n,e,134217728,t)}Ha(e,134217728)}};Tc=function(e){if(e.tag===13){var n=bn(e),t=pn(e,n);if(t!==null){var o=we();Ke(t,e,n,o)}Ha(e,n)}};Nc=function(){return I};$c=function(e,n){var t=I;try{return I=e,n()}finally{I=t}};ci=function(e,n,t){switch(n){case"input":if(oi(e,t),n=t.name,t.type==="radio"&&n!=null){for(t=e;t.parentNode;)t=t.parentNode;for(t=t.querySelectorAll("input[name="+JSON.stringify(""+n)+'][type="radio"]'),n=0;n<t.length;n++){var o=t[n];if(o!==e&&o.form===e.form){var r=rl(o);if(!r)throw Error(T(90));ac(o),oi(o,r)}}}break;case"textarea":uc(e,t);break;case"select":n=t.value,n!=null&&Ct(e,!!t.multiple,n,!1)}};hc=Aa;yc=nt;var xg={usingClientEntryPoint:!1,Events:[zo,ft,rl,mc,gc,Aa]},Bt={findFiberByHostInstance:Bn,bundleType:0,version:"18.3.1",rendererPackageName:"react-dom"},Cg={bundleType:Bt.bundleType,version:Bt.version,rendererPackageName:Bt.rendererPackageName,rendererConfig:Bt.rendererConfig,overrideHookState:null,overrideHookStateDeletePath:null,overrideHookStateRenamePath:null,overrideProps:null,overridePropsDeletePath:null,overridePropsRenamePath:null,setErrorHandler:null,setSuspenseHandler:null,scheduleUpdate:null,currentDispatcherRef:mn.ReactCurrentDispatcher,findHostInstanceByFiber:function(e){return e=Cc(e),e===null?null:e.stateNode},findFiberByHostInstance:Bt.findFiberByHostInstance||yg,findHostInstancesForRefresh:null,scheduleRefresh:null,scheduleRoot:null,setRefreshHandler:null,getCurrentFiber:null,reconcilerVersion:"18.3.1-next-f1338f8080-20240426"};if(typeof __REACT_DEVTOOLS_GLOBAL_HOOK__<"u"){var lr=__REACT_DEVTOOLS_GLOBAL_HOOK__;if(!lr.isDisabled&&lr.supportsFiber)try{el=lr.inject(Cg),nn=lr}catch{}}Me.__SECRET_INTERNALS_DO_NOT_USE_OR_YOU_WILL_BE_FIRED=xg;Me.createPortal=function(e,n){var t=2<arguments.length&&arguments[2]!==void 0?arguments[2]:null;if(!qa(n))throw Error(T(200));return hg(e,n,null,t)};Me.createRoot=function(e,n){if(!qa(e))throw Error(T(299));var t=!1,o="",r=Jd;return n!=null&&(n.unstable_strictMode===!0&&(t=!0),n.identifierPrefix!==void 0&&(o=n.identifierPrefix),n.onRecoverableError!==void 0&&(r=n.onRecoverableError)),n=Wa(e,1,!1,null,null,t,!1,o,r),e[dn]=n.current,wo(e.nodeType===8?e.parentNode:e),new Va(n)};Me.findDOMNode=function(e){if(e==null)return null;if(e.nodeType===1)return e;var n=e._reactInternals;if(n===void 0)throw typeof e.render=="function"?Error(T(188)):(e=Object.keys(e).join(","),Error(T(268,e)));return e=Cc(n),e=e===null?null:e.stateNode,e};Me.flushSync=function(e){return nt(e)};Me.hydrate=function(e,n,t){if(!fl(n))throw Error(T(200));return ml(null,e,n,!0,t)};Me.hydrateRoot=function(e,n,t){if(!qa(e))throw Error(T(405));var o=t!=null&&t.hydratedSources||null,r=!1,l="",i=Jd;if(t!=null&&(t.unstable_strictMode===!0&&(r=!0),t.identifierPrefix!==void 0&&(l=t.identifierPrefix),t.onRecoverableError!==void 0&&(i=t.onRecoverableError)),n=Gd(n,null,e,1,t??null,r,!1,l,i),e[dn]=n.current,wo(e),o)for(e=0;e<o.length;e++)t=o[e],r=t._getVersion,r=r(t._source),n.mutableSourceEagerHydrationData==null?n.mutableSourceEagerHydrationData=[t,r]:n.mutableSourceEagerHydrationData.push(t,r);return new pl(n)};Me.render=function(e,n,t){if(!fl(n))throw Error(T(200));return ml(null,e,n,!1,t)};Me.unmountComponentAtNode=function(e){if(!fl(e))throw Error(T(40));return e._reactRootContainer?(nt(function(){ml(null,null,e,!1,function(){e._reactRootContainer=null,e[dn]=null})}),!0):!1};Me.unstable_batchedUpdates=Aa;Me.unstable_renderSubtreeIntoContainer=function(e,n,t,o){if(!fl(t))throw Error(T(200));if(e==null||e._reactInternals===void 0)throw Error(T(38));return ml(e,n,t,!1,o)};Me.version="18.3.1-next-f1338f8080-20240426";function Zd(){if(!(typeof __REACT_DEVTOOLS_GLOBAL_HOOK__>"u"||typeof __REACT_DEVTOOLS_GLOBAL_HOOK__.checkDCE!="function"))try{__REACT_DEVTOOLS_GLOBAL_HOOK__.checkDCE(Zd)}catch(e){console.error(e)}}Zd(),Zu.exports=Me;var re=Zu.exports,ep,gu=re;ep=Xl.createRoot=gu.createRoot,Xl.hydrateRoot=gu.hydrateRoot;/**
 * @remix-run/router v1.23.4
 *
 * Copyright (c) Remix Software Inc.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE.md file in the root directory of this source tree.
 *
 * @license MIT
 */function Ro(){return Ro=Object.assign?Object.assign.bind():function(e){for(var n=1;n<arguments.length;n++){var t=arguments[n];for(var o in t)({}).hasOwnProperty.call(t,o)&&(e[o]=t[o])}return e},Ro.apply(null,arguments)}var En;(function(e){e.Pop="POP",e.Push="PUSH",e.Replace="REPLACE"})(En||(En={}));const hu="popstate";function Sg(e){e===void 0&&(e={});function n(r,l){let{pathname:i="/",search:a="",hash:s=""}=rt(r.location.hash.substr(1));return!i.startsWith("/")&&!i.startsWith(".")&&(i="/"+i),Hi("",{pathname:i,search:a,hash:s},l.state&&l.state.usr||null,l.state&&l.state.key||"default")}function t(r,l){let i=r.document.querySelector("base"),a="";if(i&&i.getAttribute("href")){let s=r.location.href,u=s.indexOf("#");a=u===-1?s:s.slice(0,u)}return a+"#"+(typeof l=="string"?l:Yr(l))}function o(r,l){Ba(r.pathname.charAt(0)==="/","relative pathnames are not supported in hash history.push("+JSON.stringify(l)+")")}return Pg(n,t,o,e)}function Z(e,n){if(e===!1||e===null||typeof e>"u")throw new Error(n)}function Ba(e,n){if(!e){typeof console<"u"&&console.warn(n);try{throw new Error(n)}catch{}}}function wg(){return Math.random().toString(36).substr(2,8)}function yu(e,n){return{usr:e.state,key:e.key,idx:n}}function Hi(e,n,t,o){return t===void 0&&(t=null),Ro({pathname:typeof e=="string"?e:e.pathname,search:"",hash:""},typeof n=="string"?rt(n):n,{state:t,key:n&&n.key||o||wg()})}function Yr(e){let{pathname:n="/",search:t="",hash:o=""}=e;return t&&t!=="?"&&(n+=t.charAt(0)==="?"?t:"?"+t),o&&o!=="#"&&(n+=o.charAt(0)==="#"?o:"#"+o),n}function rt(e){let n={};if(e){let t=e.indexOf("#");t>=0&&(n.hash=e.substr(t),e=e.substr(0,t));let o=e.indexOf("?");o>=0&&(n.search=e.substr(o),e=e.substr(0,o)),e&&(n.pathname=e)}return n}function Pg(e,n,t,o){o===void 0&&(o={});let{window:r=document.defaultView,v5Compat:l=!1}=o,i=r.history,a=En.Pop,s=null,u=p();u==null&&(u=0,i.replaceState(Ro({},i.state,{idx:u}),""));function p(){return(i.state||{idx:null}).idx}function f(){a=En.Pop;let k=p(),g=k==null?null:k-u;u=k,s&&s({action:a,location:C.location,delta:g})}function m(k,g){a=En.Push;let d=Hi(C.location,k,g);t&&t(d,k),u=p()+1;let h=yu(d,u),v=C.createHref(d);try{i.pushState(h,"",v)}catch(w){if(w instanceof DOMException&&w.name==="DataCloneError")throw w;r.location.assign(v)}l&&s&&s({action:a,location:C.location,delta:1})}function y(k,g){a=En.Replace;let d=Hi(C.location,k,g);t&&t(d,k),u=p();let h=yu(d,u),v=C.createHref(d);i.replaceState(h,"",v),l&&s&&s({action:a,location:C.location,delta:0})}function x(k){let g=r.location.origin!=="null"?r.location.origin:r.location.href,d=typeof k=="string"?k:Yr(k);return d=d.replace(/ $/,"%20"),Z(g,"No window.location.(origin|href) available to create URL for href: "+d),new URL(d,g)}let C={get action(){return a},get location(){return e(r,i)},listen(k){if(s)throw new Error("A history only accepts one active listener");return r.addEventListener(hu,f),s=k,()=>{r.removeEventListener(hu,f),s=null}},createHref(k){return n(r,k)},createURL:x,encodeLocation(k){let g=x(k);return{pathname:g.pathname,search:g.search,hash:g.hash}},push:m,replace:y,go(k){return i.go(k)}};return C}var vu;(function(e){e.data="data",e.deferred="deferred",e.redirect="redirect",e.error="error"})(vu||(vu={}));function kg(e,n,t){return t===void 0&&(t="/"),_g(e,n,t)}function _g(e,n,t,o){let r=typeof n=="string"?rt(n):n,l=Qa(r.pathname||"/",t);if(l==null)return null;let i=np(e);Eg(i);let a=null,s=Ag(l);for(let u=0;a==null&&u<i.length;++u)a=Og(i[u],s);return a}function np(e,n,t,o){n===void 0&&(n=[]),t===void 0&&(t=[]),o===void 0&&(o="");let r=(l,i,a)=>{let s={relativePath:a===void 0?l.path||"":a,caseSensitive:l.caseSensitive===!0,childrenIndex:i,route:l};s.relativePath.startsWith("/")&&(Z(s.relativePath.startsWith(o),'Absolute route path "'+s.relativePath+'" nested under path '+('"'+o+'" is not valid. An absolute child route path ')+"must start with the combined path of all its parent routes."),s.relativePath=s.relativePath.slice(o.length));let u=On([o,s.relativePath]),p=t.concat(s);l.children&&l.children.length>0&&(Z(l.index!==!0,"Index routes must not have child routes. Please remove "+('all child routes from route path "'+u+'".')),np(l.children,n,p,u)),!(l.path==null&&!l.index)&&n.push({path:u,score:bg(u,l.index),routesMeta:p})};return e.forEach((l,i)=>{var a;if(l.path===""||!((a=l.path)!=null&&a.includes("?")))r(l,i);else for(let s of tp(l.path))r(l,i,s)}),n}function tp(e){let n=e.split("/");if(n.length===0)return[];let[t,...o]=n,r=t.endsWith("?"),l=t.replace(/\?$/,"");if(o.length===0)return r?[l,""]:[l];let i=tp(o.join("/")),a=[];return a.push(...i.map(s=>s===""?l:[l,s].join("/"))),r&&a.push(...i),a.map(s=>e.startsWith("/")&&s===""?"/":s)}function Eg(e){e.sort((n,t)=>n.score!==t.score?t.score-n.score:Mg(n.routesMeta.map(o=>o.childrenIndex),t.routesMeta.map(o=>o.childrenIndex)))}const jg=/^:[\w-]+$/,Tg=3,Ng=2,$g=1,Rg=10,Dg=-2,xu=e=>e==="*";function bg(e,n){let t=e.split("/"),o=t.length;return t.some(xu)&&(o+=Dg),n&&(o+=Ng),t.filter(r=>!xu(r)).reduce((r,l)=>r+(jg.test(l)?Tg:l===""?$g:Rg),o)}function Mg(e,n){return e.length===n.length&&e.slice(0,-1).every((o,r)=>o===n[r])?e[e.length-1]-n[n.length-1]:0}function Og(e,n,t){let{routesMeta:o}=e,r={},l="/",i=[];for(let a=0;a<o.length;++a){let s=o[a],u=a===o.length-1,p=l==="/"?n:n.slice(l.length)||"/",f=Lg({path:s.relativePath,caseSensitive:s.caseSensitive,end:u},p),m=s.route;if(!f)return null;Object.assign(r,f.params),i.push({params:r,pathname:On([l,f.pathname]),pathnameBase:Ug(On([l,f.pathnameBase])),route:m}),f.pathnameBase!=="/"&&(l=On([l,f.pathnameBase]))}return i}function Lg(e,n){typeof e=="string"&&(e={path:e,caseSensitive:!1,end:!0});let[t,o]=zg(e.path,e.caseSensitive,e.end),r=n.match(t);if(!r)return null;let l=r[0],i=l.replace(/(.)\/+$/,"$1"),a=r.slice(1);return{params:o.reduce((u,p,f)=>{let{paramName:m,isOptional:y}=p;if(m==="*"){let C=a[f]||"";i=l.slice(0,l.length-C.length).replace(/(.)\/+$/,"$1")}const x=a[f];return y&&!x?u[m]=void 0:u[m]=(x||"").replace(/%2F/g,"/"),u},{}),pathname:l,pathnameBase:i,pattern:e}}function zg(e,n,t){n===void 0&&(n=!1),t===void 0&&(t=!0),Ba(e==="*"||!e.endsWith("*")||e.endsWith("/*"),'Route path "'+e+'" will be treated as if it were '+('"'+e.replace(/\*$/,"/*")+'" because the `*` character must ')+"always follow a `/` in the pattern. To get rid of this warning, "+('please change the route path to "'+e.replace(/\*$/,"/*")+'".'));let o=[],r="^"+e.replace(/\/*\*?$/,"").replace(/^\/*/,"/").replace(/[\\.*+^${}|()[\]]/g,"\\$&").replace(/\/:([\w-]+)(\?)?/g,(i,a,s)=>(o.push({paramName:a,isOptional:s!=null}),s?"/?([^\\/]+)?":"/([^\\/]+)"));return e.endsWith("*")?(o.push({paramName:"*"}),r+=e==="*"||e==="/*"?"(.*)$":"(?:\\/(.+)|\\/*)$"):t?r+="\\/*$":e!==""&&e!=="/"&&(r+="(?:(?=\\/|$))"),[new RegExp(r,n?void 0:"i"),o]}function Ag(e){try{return e.split("/").map(n=>decodeURIComponent(n).replace(/\//g,"%2F")).join("/")}catch(n){return Ba(!1,'The URL path "'+e+'" could not be decoded because it is is a malformed URL segment. This is probably due to a bad percent '+("encoding ("+n+").")),e}}function Qa(e,n){if(n==="/")return e;if(!e.toLowerCase().startsWith(n.toLowerCase()))return null;let t=n.endsWith("/")?n.length-1:n.length,o=e.charAt(t);return o&&o!=="/"?null:e.slice(t)||"/"}function Fg(e,n){n===void 0&&(n="/");let{pathname:t,search:o="",hash:r=""}=typeof e=="string"?rt(e):e,l;return t?(t=op(t),t.startsWith("/")?l=Cu(t.substring(1),"/"):l=Cu(t,n)):l=n,{pathname:l,search:Wg(o),hash:Hg(r)}}function Cu(e,n){let t=n.replace(/\/+$/,"").split("/");return e.split("/").forEach(r=>{r===".."?t.length>1&&t.pop():r!=="."&&t.push(r)}),t.length>1?t.join("/"):"/"}function Vl(e,n,t,o){return"Cannot include a '"+e+"' character in a manually specified "+("`to."+n+"` field ["+JSON.stringify(o)+"].  Please separate it out to the ")+("`to."+t+"` field. Alternatively you may provide the full path as ")+'a string in <Link to="..."> and the router will parse it for you.'}function Ig(e){return e.filter((n,t)=>t===0||n.route.path&&n.route.path.length>0)}function Ka(e,n){let t=Ig(e);return n?t.map((o,r)=>r===t.length-1?o.pathname:o.pathnameBase):t.map(o=>o.pathnameBase)}function Ya(e,n,t,o){o===void 0&&(o=!1);let r;typeof e=="string"?r=rt(e):(r=Ro({},e),Z(!r.pathname||!r.pathname.includes("?"),Vl("?","pathname","search",r)),Z(!r.pathname||!r.pathname.includes("#"),Vl("#","pathname","hash",r)),Z(!r.search||!r.search.includes("#"),Vl("#","search","hash",r)));let l=e===""||r.pathname==="",i=l?"/":r.pathname,a;if(i==null)a=t;else{let f=n.length-1;if(!o&&i.startsWith("..")){let m=i.split("/");for(;m[0]==="..";)m.shift(),f-=1;r.pathname=m.join("/")}a=f>=0?n[f]:"/"}let s=Fg(r,a),u=i&&i!=="/"&&i.endsWith("/"),p=(l||i===".")&&t.endsWith("/");return!s.pathname.endsWith("/")&&(u||p)&&(s.pathname+="/"),s}const op=e=>e.replace(/\/\/+/g,"/"),On=e=>op(e.join("/")),Ug=e=>e.replace(/\/+$/,"").replace(/^\/*/,"/"),Wg=e=>!e||e==="?"?"":e.startsWith("?")?e:"?"+e,Hg=e=>!e||e==="#"?"":e.startsWith("#")?e:"#"+e;function Vg(e){return e!=null&&typeof e.status=="number"&&typeof e.statusText=="string"&&typeof e.internal=="boolean"&&"data"in e}const rp=["post","put","patch","delete"];new Set(rp);const qg=["get",...rp];new Set(qg);/**
 * React Router v6.30.6
 *
 * Copyright (c) Remix Software Inc.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE.md file in the root directory of this source tree.
 *
 * @license MIT
 */function Do(){return Do=Object.assign?Object.assign.bind():function(e){for(var n=1;n<arguments.length;n++){var t=arguments[n];for(var o in t)({}).hasOwnProperty.call(t,o)&&(e[o]=t[o])}return e},Do.apply(null,arguments)}const Xa=S.createContext(null),Bg=S.createContext(null),Un=S.createContext(null),gl=S.createContext(null),gn=S.createContext({outlet:null,matches:[],isDataRoute:!1}),lp=S.createContext(null);function Qg(e,n){let{relative:t}=n===void 0?{}:n;Lt()||Z(!1);let{basename:o,navigator:r}=S.useContext(Un),{hash:l,pathname:i,search:a}=sp(e,{relative:t}),s=i;return o!=="/"&&(s=i==="/"?o:On([o,i])),r.createHref({pathname:s,search:a,hash:l})}function Lt(){return S.useContext(gl)!=null}function zt(){return Lt()||Z(!1),S.useContext(gl).location}function ip(e){S.useContext(Un).static||S.useLayoutEffect(e)}function ap(){let{isDataRoute:e}=S.useContext(gn);return e?ah():Kg()}function Kg(){Lt()||Z(!1);let e=S.useContext(Xa),{basename:n,future:t,navigator:o}=S.useContext(Un),{matches:r}=S.useContext(gn),{pathname:l}=zt(),i=JSON.stringify(Ka(r,t.v7_relativeSplatPath)),a=S.useRef(!1);return ip(()=>{a.current=!0}),S.useCallback(function(u,p){if(p===void 0&&(p={}),!a.current)return;if(typeof u=="number"){o.go(u);return}let f=Ya(u,JSON.parse(i),l,p.relative==="path");e==null&&n!=="/"&&(f.pathname=f.pathname==="/"?n:On([n,f.pathname])),(p.replace?o.replace:o.push)(f,p.state,p)},[n,o,i,l,e])}function Yg(){let{matches:e}=S.useContext(gn),n=e[e.length-1];return n?n.params:{}}function sp(e,n){let{relative:t}=n===void 0?{}:n,{future:o}=S.useContext(Un),{matches:r}=S.useContext(gn),{pathname:l}=zt(),i=JSON.stringify(Ka(r,o.v7_relativeSplatPath));return S.useMemo(()=>Ya(e,JSON.parse(i),l,t==="path"),[e,i,l,t])}function Xg(e,n){return Gg(e,n)}function Gg(e,n,t,o){Lt()||Z(!1);let{navigator:r}=S.useContext(Un),{matches:l}=S.useContext(gn),i=l[l.length-1],a=i?i.params:{};i&&i.pathname;let s=i?i.pathnameBase:"/";i&&i.route;let u=zt(),p;if(n){var f;let k=typeof n=="string"?rt(n):n;s==="/"||(f=k.pathname)!=null&&f.startsWith(s)||Z(!1),p=k}else p=u;let m=p.pathname||"/",y=m;if(s!=="/"){let k=s.replace(/^\//,"").split("/");y="/"+m.replace(/^\//,"").split("/").slice(k.length).join("/")}let x=kg(e,{pathname:y}),C=th(x&&x.map(k=>Object.assign({},k,{params:Object.assign({},a,k.params),pathname:On([s,r.encodeLocation?r.encodeLocation(k.pathname).pathname:k.pathname]),pathnameBase:k.pathnameBase==="/"?s:On([s,r.encodeLocation?r.encodeLocation(k.pathnameBase).pathname:k.pathnameBase])})),l,t,o);return n&&C?S.createElement(gl.Provider,{value:{location:Do({pathname:"/",search:"",hash:"",state:null,key:"default"},p),navigationType:En.Pop}},C):C}function Jg(){let e=ih(),n=Vg(e)?e.status+" "+e.statusText:e instanceof Error?e.message:JSON.stringify(e),t=e instanceof Error?e.stack:null,r={padding:"0.5rem",backgroundColor:"rgba(200,200,200, 0.5)"};return S.createElement(S.Fragment,null,S.createElement("h2",null,"Unexpected Application Error!"),S.createElement("h3",{style:{fontStyle:"italic"}},n),t?S.createElement("pre",{style:r},t):null,null)}const Zg=S.createElement(Jg,null);class eh extends S.Component{constructor(n){super(n),this.state={location:n.location,revalidation:n.revalidation,error:n.error}}static getDerivedStateFromError(n){return{error:n}}static getDerivedStateFromProps(n,t){return t.location!==n.location||t.revalidation!=="idle"&&n.revalidation==="idle"?{error:n.error,location:n.location,revalidation:n.revalidation}:{error:n.error!==void 0?n.error:t.error,location:t.location,revalidation:n.revalidation||t.revalidation}}componentDidCatch(n,t){console.error("React Router caught the following error during render",n,t)}render(){return this.state.error!==void 0?S.createElement(gn.Provider,{value:this.props.routeContext},S.createElement(lp.Provider,{value:this.state.error,children:this.props.component})):this.props.children}}function nh(e){let{routeContext:n,match:t,children:o}=e,r=S.useContext(Xa);return r&&r.static&&r.staticContext&&(t.route.errorElement||t.route.ErrorBoundary)&&(r.staticContext._deepestRenderedBoundaryId=t.route.id),S.createElement(gn.Provider,{value:n},o)}function th(e,n,t,o){var r;if(n===void 0&&(n=[]),t===void 0&&(t=null),o===void 0&&(o=null),e==null){var l;if(!t)return null;if(t.errors)e=t.matches;else if((l=o)!=null&&l.v7_partialHydration&&n.length===0&&!t.initialized&&t.matches.length>0)e=t.matches;else return null}let i=e,a=(r=t)==null?void 0:r.errors;if(a!=null){let p=i.findIndex(f=>f.route.id&&(a==null?void 0:a[f.route.id])!==void 0);p>=0||Z(!1),i=i.slice(0,Math.min(i.length,p+1))}let s=!1,u=-1;if(t&&o&&o.v7_partialHydration)for(let p=0;p<i.length;p++){let f=i[p];if((f.route.HydrateFallback||f.route.hydrateFallbackElement)&&(u=p),f.route.id){let{loaderData:m,errors:y}=t,x=f.route.loader&&m[f.route.id]===void 0&&(!y||y[f.route.id]===void 0);if(f.route.lazy||x){s=!0,u>=0?i=i.slice(0,u+1):i=[i[0]];break}}}return i.reduceRight((p,f,m)=>{let y,x=!1,C=null,k=null;t&&(y=a&&f.route.id?a[f.route.id]:void 0,C=f.route.errorElement||Zg,s&&(u<0&&m===0?(sh("route-fallback"),x=!0,k=null):u===m&&(x=!0,k=f.route.hydrateFallbackElement||null)));let g=n.concat(i.slice(0,m+1)),d=()=>{let h;return y?h=C:x?h=k:f.route.Component?h=S.createElement(f.route.Component,null):f.route.element?h=f.route.element:h=p,S.createElement(nh,{match:f,routeContext:{outlet:p,matches:g,isDataRoute:t!=null},children:h})};return t&&(f.route.ErrorBoundary||f.route.errorElement||m===0)?S.createElement(eh,{location:t.location,revalidation:t.revalidation,component:C,error:y,children:d(),routeContext:{outlet:null,matches:g,isDataRoute:!0}}):d()},null)}var up=function(e){return e.UseBlocker="useBlocker",e.UseRevalidator="useRevalidator",e.UseNavigateStable="useNavigate",e}(up||{}),cp=function(e){return e.UseBlocker="useBlocker",e.UseLoaderData="useLoaderData",e.UseActionData="useActionData",e.UseRouteError="useRouteError",e.UseNavigation="useNavigation",e.UseRouteLoaderData="useRouteLoaderData",e.UseMatches="useMatches",e.UseRevalidator="useRevalidator",e.UseNavigateStable="useNavigate",e.UseRouteId="useRouteId",e}(cp||{});function oh(e){let n=S.useContext(Xa);return n||Z(!1),n}function rh(e){let n=S.useContext(Bg);return n||Z(!1),n}function lh(e){let n=S.useContext(gn);return n||Z(!1),n}function dp(e){let n=lh(),t=n.matches[n.matches.length-1];return t.route.id||Z(!1),t.route.id}function ih(){var e;let n=S.useContext(lp),t=rh(),o=dp();return n!==void 0?n:(e=t.errors)==null?void 0:e[o]}function ah(){let{router:e}=oh(up.UseNavigateStable),n=dp(cp.UseNavigateStable),t=S.useRef(!1);return ip(()=>{t.current=!0}),S.useCallback(function(r,l){l===void 0&&(l={}),t.current&&(typeof r=="number"?e.navigate(r):e.navigate(r,Do({fromRouteId:n},l)))},[e,n])}const Su={};function sh(e,n,t){Su[e]||(Su[e]=!0)}function uh(e,n){e==null||e.v7_startTransition,e==null||e.v7_relativeSplatPath}function Vi(e){let{to:n,replace:t,state:o,relative:r}=e;Lt()||Z(!1);let{future:l,static:i}=S.useContext(Un),{matches:a}=S.useContext(gn),{pathname:s}=zt(),u=ap(),p=Ya(n,Ka(a,l.v7_relativeSplatPath),s,r==="path"),f=JSON.stringify(p);return S.useEffect(()=>u(JSON.parse(f),{replace:t,state:o,relative:r}),[u,f,r,t,o]),null}function eo(e){Z(!1)}function ch(e){let{basename:n="/",children:t=null,location:o,navigationType:r=En.Pop,navigator:l,static:i=!1,future:a}=e;Lt()&&Z(!1);let s=n.replace(/^\/*/,"/"),u=S.useMemo(()=>({basename:s,navigator:l,static:i,future:Do({v7_relativeSplatPath:!1},a)}),[s,a,l,i]);typeof o=="string"&&(o=rt(o));let{pathname:p="/",search:f="",hash:m="",state:y=null,key:x="default"}=o,C=S.useMemo(()=>{let k=Qa(p,s);return k==null?null:{location:{pathname:k,search:f,hash:m,state:y,key:x},navigationType:r}},[s,p,f,m,y,x,r]);return C==null?null:S.createElement(Un.Provider,{value:u},S.createElement(gl.Provider,{children:t,value:C}))}function dh(e){let{children:n,location:t}=e;return Xg(qi(n),t)}new Promise(()=>{});function qi(e,n){n===void 0&&(n=[]);let t=[];return S.Children.forEach(e,(o,r)=>{if(!S.isValidElement(o))return;let l=[...n,r];if(o.type===S.Fragment){t.push.apply(t,qi(o.props.children,l));return}o.type!==eo&&Z(!1),!o.props.index||!o.props.children||Z(!1);let i={id:o.props.id||l.join("-"),caseSensitive:o.props.caseSensitive,element:o.props.element,Component:o.props.Component,index:o.props.index,path:o.props.path,loader:o.props.loader,action:o.props.action,errorElement:o.props.errorElement,ErrorBoundary:o.props.ErrorBoundary,hasErrorBoundary:o.props.ErrorBoundary!=null||o.props.errorElement!=null,shouldRevalidate:o.props.shouldRevalidate,handle:o.props.handle,lazy:o.props.lazy};o.props.children&&(i.children=qi(o.props.children,l)),t.push(i)}),t}/**
 * React Router DOM v6.30.6
 *
 * Copyright (c) Remix Software Inc.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE.md file in the root directory of this source tree.
 *
 * @license MIT
 */function Bi(){return Bi=Object.assign?Object.assign.bind():function(e){for(var n=1;n<arguments.length;n++){var t=arguments[n];for(var o in t)({}).hasOwnProperty.call(t,o)&&(e[o]=t[o])}return e},Bi.apply(null,arguments)}function ph(e,n){if(e==null)return{};var t={};for(var o in e)if({}.hasOwnProperty.call(e,o)){if(n.indexOf(o)!==-1)continue;t[o]=e[o]}return t}function fh(e){return!!(e.metaKey||e.altKey||e.ctrlKey||e.shiftKey)}function mh(e,n){return e.button===0&&(!n||n==="_self")&&!fh(e)}const gh=["onClick","relative","reloadDocument","replace","state","target","to","preventScrollReset","viewTransition"],hh="6";try{window.__reactRouterVersion=hh}catch{}const yh="startTransition",wu=cf[yh];function vh(e){let{basename:n,children:t,future:o,window:r}=e,l=S.useRef();l.current==null&&(l.current=Sg({window:r,v5Compat:!0}));let i=l.current,[a,s]=S.useState({action:i.action,location:i.location}),{v7_startTransition:u}=o||{},p=S.useCallback(f=>{u&&wu?wu(()=>s(f)):s(f)},[s,u]);return S.useLayoutEffect(()=>i.listen(p),[i,p]),S.useEffect(()=>uh(o),[o]),S.createElement(ch,{basename:n,children:t,location:a.location,navigationType:a.action,navigator:i,future:o})}const xh=typeof window<"u"&&typeof window.document<"u"&&typeof window.document.createElement<"u",Ch=/^(?:[a-z][a-z0-9+.-]*:|\/\/)/i,Qi=S.forwardRef(function(n,t){let{onClick:o,relative:r,reloadDocument:l,replace:i,state:a,target:s,to:u,preventScrollReset:p,viewTransition:f}=n,m=ph(n,gh),{basename:y}=S.useContext(Un),x,C=!1;if(typeof u=="string"&&Ch.test(u)&&(x=u,xh))try{let h=new URL(window.location.href),v=u.startsWith("//")?new URL(h.protocol+u):new URL(u),w=Qa(v.pathname,y);v.origin===h.origin&&w!=null?u=w+v.search+v.hash:C=!0}catch{}let k=Qg(u,{relative:r}),g=Sh(u,{replace:i,state:a,target:s,preventScrollReset:p,relative:r,viewTransition:f});function d(h){o&&o(h),h.defaultPrevented||g(h)}return S.createElement("a",Bi({},m,{href:x||k,onClick:C||l?o:d,ref:t,target:s}))});var Pu;(function(e){e.UseScrollRestoration="useScrollRestoration",e.UseSubmit="useSubmit",e.UseSubmitFetcher="useSubmitFetcher",e.UseFetcher="useFetcher",e.useViewTransitionState="useViewTransitionState"})(Pu||(Pu={}));var ku;(function(e){e.UseFetcher="useFetcher",e.UseFetchers="useFetchers",e.UseScrollRestoration="useScrollRestoration"})(ku||(ku={}));function Sh(e,n){let{target:t,replace:o,state:r,preventScrollReset:l,relative:i,viewTransition:a}=n===void 0?{}:n,s=ap(),u=zt(),p=sp(e,{relative:i});return S.useCallback(f=>{if(mh(f,t)){f.preventDefault();let m=o!==void 0?o:Yr(u)===Yr(p);s(e,{replace:m,state:r,preventScrollReset:l,relative:i,viewTransition:a})}},[u,s,p,o,r,t,e,l,i,a])}const wh="https://github.com/frankvane/vane-components";class Ph extends Mo.Component{constructor(){super(...arguments);is(this,"state",{error:null})}static getDerivedStateFromError(t){return{error:t}}render(){var t;return this.state.error?c.jsxs("div",{className:"crash",role:"alert",children:[c.jsx("h3",{children:"这个页面炸了"}),c.jsx("pre",{children:String(((t=this.state.error)==null?void 0:t.stack)||this.state.error)}),c.jsx("button",{type:"button",onClick:()=>this.setState({error:null}),children:"重试"})]}):this.props.children}}function pp(e,n){return String(e.entries.indexOf(n)+1).padStart(2,"0")}function kh({demos:e,pathname:n}){var s;const{groups:t,entries:o,label:r}=e,l=(s=o.find(u=>n===`/demo/${u.meta.slug}`))==null?void 0:s.meta.group,[i,a]=S.useState(()=>{var p;const u=(p=t[0])==null?void 0:p.key;return Object.fromEntries(t.map(f=>[f.key,f.key===(l??u)]))});return S.useEffect(()=>{l&&a(u=>u[l]?u:{...u,[l]:!0})},[l]),c.jsxs("div",{className:"nav-section",children:[c.jsxs("div",{className:"nav-section-head",children:[c.jsx("span",{children:r}),c.jsxs("code",{children:[o.length," demos"]})]}),t.map(u=>{const p=o.filter(m=>m.meta.group===u.key);if(p.length===0)return null;const f=i[u.key]??!1;return c.jsxs("div",{className:"nav-group",children:[c.jsxs("button",{type:"button",className:`nav-group-head${l===u.key?" is-current":""}`,onClick:()=>a(m=>({...m,[u.key]:!f})),"aria-expanded":f,children:[c.jsx("span",{className:`nav-caret${f?" is-open":""}`,"aria-hidden":!0,children:"▸"}),u.label,c.jsx("code",{children:p.length})]}),f?c.jsx("div",{className:"nav-list",children:p.map(m=>c.jsxs(Qi,{to:`/demo/${m.meta.slug}`,className:`nav-sub${n===`/demo/${m.meta.slug}`?" is-active":""}`,children:[c.jsx("em",{"aria-hidden":!0,children:pp(e,m)}),m.meta.title]},m.meta.slug))}):null]},u.key)})]})}function _h({demos:e}){var a;const{slug:n}=Yg(),{entries:t,detail:o}=e,r=n?t.find(s=>s.meta.slug===n):void 0,l=(a=t[0])==null?void 0:a.meta.slug;if(!r)return c.jsx(Vi,{to:l?`/demo/${l}`:"/",replace:!0});const i=t.indexOf(r)+1;return c.jsx(Mo.Fragment,{children:o(r,i)},r.meta.slug)}function Eh({config:e}){var f,m;const{pathname:n}=zt(),[t,o]=S.useState(!1),[r,l]=S.useState(!1);S.useEffect(()=>o(!1),[n]);const i=S.useCallback(()=>l(y=>!y),[]);S.useEffect(()=>{const y=x=>{const C=x.target,k=C&&(C.tagName==="INPUT"||C.tagName==="TEXTAREA"||C.isContentEditable);x.key==="Escape"&&o(!1),!k&&(x.key==="g"||x.key==="G")&&!x.metaKey&&!x.ctrlKey&&l(g=>!g)};return window.addEventListener("keydown",y),()=>window.removeEventListener("keydown",y)},[]);const a=e.demos,s=(f=a.entries[0])==null?void 0:f.meta.slug,u=S.useMemo(()=>{if(!n.startsWith("/demo"))return e.crumb(n);const y=n.replace(/^\/demo\/?/,""),x=a.entries.find(C=>C.meta.slug===y);return x?`demo ${pp(a,x)} · ${x.meta.title}`:"demo · 逐项示例"},[n,e,a]),p=S.useMemo(()=>e.nav.map((y,x)=>({...y,no:String(x+1).padStart(2,"0")})),[e.nav]);return c.jsxs("div",{className:`shell${t?" is-nav-open":""}${r?" is-guides":""}`,children:[c.jsx("a",{className:"skip-link",href:"#main",onClick:y=>{y.preventDefault();const x=document.getElementById("main");x==null||x.setAttribute("tabindex","-1"),x==null||x.focus(),x==null||x.scrollIntoView({block:"start"})},children:"跳到内容"}),c.jsxs("aside",{className:"side","aria-label":"站点导航",children:[c.jsxs(Qi,{to:"/",className:"brand",children:[c.jsx("span",{className:"brand-mark","aria-hidden":!0,children:e.brand}),c.jsxs("span",{children:[c.jsx("strong",{children:e.pkg}),c.jsx("em",{children:e.subtitle})]})]}),c.jsxs("nav",{children:[p.map(y=>c.jsxs(Qi,{to:y.to,className:`nav-item${n===y.to?" is-active":""}`,"aria-current":n===y.to?"page":void 0,children:[c.jsx("em",{"aria-hidden":!0,children:y.no}),c.jsx("span",{children:y.label}),y.hint?c.jsx("code",{children:y.hint}):null]},y.to)),c.jsx(kh,{demos:e.demos,pathname:n})]}),c.jsxs("div",{className:"side-foot",children:[c.jsx("p",{children:e.footer[0]}),c.jsx("p",{className:"muted",children:e.footer[1]})]})]}),c.jsx("button",{type:"button",className:"scrim","aria-label":"关闭导航",tabIndex:t?0:-1,onClick:()=>o(!1)}),c.jsxs("div",{className:"main",id:"main",children:[c.jsxs("header",{className:"topbar",children:[c.jsx("button",{type:"button",className:"nav-toggle","aria-label":t?"关闭导航":"打开导航","aria-expanded":t,onClick:()=>o(y=>!y),children:c.jsx("span",{"aria-hidden":!0})}),c.jsx("span",{className:"crumb",children:u}),c.jsxs("div",{className:"topbar-right",children:[(m=e.stats)==null?void 0:m.map(y=>c.jsxs("span",{className:"topbar-stat",title:y.title,children:[c.jsx("b",{children:y.value})," ",y.label]},y.label)),c.jsxs("button",{type:"button",className:"topbar-btn","aria-pressed":r,onClick:i,title:"显示栏位参考线（快捷键 G）",children:[c.jsx("i",{"aria-hidden":!0}),"guides"]}),c.jsx("a",{className:"topbar-link",href:e.sourceUrl??wh,target:"_blank",rel:"noreferrer",children:"source ↗"})]})]}),c.jsx("div",{className:"guides","aria-hidden":!0}),c.jsx(S.Suspense,{fallback:c.jsx("div",{className:"loading",children:"loading modules…"}),children:c.jsx(Ph,{children:c.jsxs(dh,{children:[e.routes.map(y=>c.jsx(eo,{path:y.path,element:y.element},y.path)),c.jsx(eo,{path:"/demo",element:c.jsx(Vi,{to:s?`/demo/${s}`:"/",replace:!0})}),c.jsx(eo,{path:"/demo/:slug",element:c.jsx(_h,{demos:e.demos})}),c.jsx(eo,{path:"*",element:c.jsx(Vi,{to:"/",replace:!0})})]})})})]})]})}function jh({config:e}){return c.jsx(vh,{children:c.jsx(Eh,{config:e})})}const Th="modulepreload",Nh=function(e,n){return new URL(e,n).href},_u={},Ga=function(n,t,o){let r=Promise.resolve();if(t&&t.length>0){const i=document.getElementsByTagName("link"),a=document.querySelector("meta[property=csp-nonce]"),s=(a==null?void 0:a.nonce)||(a==null?void 0:a.getAttribute("nonce"));r=Promise.allSettled(t.map(u=>{if(u=Nh(u,o),u in _u)return;_u[u]=!0;const p=u.endsWith(".css"),f=p?'[rel="stylesheet"]':"";if(!!o)for(let x=i.length-1;x>=0;x--){const C=i[x];if(C.href===u&&(!p||C.rel==="stylesheet"))return}else if(document.querySelector(`link[href="${u}"]${f}`))return;const y=document.createElement("link");if(y.rel=p?"stylesheet":Th,p||(y.as="script"),y.crossOrigin="",y.href=u,s&&y.setAttribute("nonce",s),document.head.appendChild(y),p)return new Promise((x,C)=>{y.addEventListener("load",x),y.addEventListener("error",()=>C(new Error(`Unable to preload CSS for ${u}`)))})}))}function l(i){const a=new Event("vite:preloadError",{cancelable:!0});if(a.payload=i,window.dispatchEvent(a),!a.defaultPrevented)throw i}return r.then(i=>{for(const a of i||[])a.status==="rejected"&&l(a.reason);return n().catch(l)})},fp="—",mp=e=>e.includes(".")?e.replace(/0+$/,"").replace(/\.$/,""):e;function $h(e,n="cash"){const t=typeof e=="number"&&Number.isFinite(e)?e:null;if(t===null)return fp;const o=t.toFixed(2);return n==="discount"?mp(o):o}function Rh(e){return e==null?{state:"none",value:null,text:"无门槛"}:typeof e!="number"||!Number.isFinite(e)?{state:"invalid",value:null,text:"门槛待确认"}:e===0?{state:"none",value:null,text:"无门槛"}:e<0?{state:"invalid",value:null,text:"门槛待确认"}:{state:"valid",value:e,text:`满${mp(e.toFixed(2))}可用`}}const Dh={background:"#ffffff",color:"#1f2328",border:"1px solid #e8eaed",borderRadius:12,padding:16,fontFamily:"inherit"},Xr={display:"flex",gap:6,marginBottom:8},gp={fontSize:11,lineHeight:1.5,padding:"1px 8px",borderRadius:4,background:"#fff1f3",color:"#d03050",border:"1px solid #f3c9d2"},hp={fontSize:11,lineHeight:1.5,padding:"1px 8px",borderRadius:4,background:"#f2f3f5",color:"#5d636a",border:"1px solid #e8eaed"},bh={display:"flex",gap:12,alignItems:"stretch"},Mh={flex:"none",minWidth:104,display:"flex",flexDirection:"column",alignItems:"center",justifyContent:"center",gap:2,textAlign:"center",padding:12,borderRadius:8,background:"#fff1f3",border:"1px solid #f3c9d2"},Oh={color:"#d03050",fontWeight:700,lineHeight:1.1,whiteSpace:"nowrap"},Lh={fontSize:16,marginRight:2},Eu={fontSize:30},zh={fontSize:14,marginLeft:2},Ah={fontSize:12,color:"#57606a"},Fh={flex:1,minWidth:0,display:"flex",flexDirection:"column",justifyContent:"center",gap:4},Ih={fontSize:15,fontWeight:600,lineHeight:1.4,overflowWrap:"anywhere"},yp={flex:"none",fontSize:12,color:"#57606a"},vp={display:"flex",alignItems:"center",flexWrap:"wrap",gap:6,marginTop:10,fontSize:12,color:"#57606a"},Uh={overflowWrap:"anywhere"},Ja={flex:"none",fontSize:11,lineHeight:1.6,padding:"0 6px",borderRadius:4},Wh={...Ja,background:"#fff7e6",color:"#a54a00",border:"1px solid #ffd591"},Hh={...Ja,background:"#fff1f0",color:"#b32d08",border:"1px solid #ffa39e"},Vh={...Ja,background:"#f2f3f5",color:"#5d636a",border:"1px solid #e8eaed"},qh={marginTop:10,fontSize:12},xp={color:"#57606a",marginBottom:4},Cp={margin:0,paddingLeft:18,display:"grid",gap:2},Sp={color:"#1f2328",overflowWrap:"anywhere"},wp={marginTop:6,padding:0,border:0,background:"none",fontSize:12,color:"#1a66c2",cursor:"pointer",display:"inline-flex",alignItems:"center",gap:4,fontFamily:"inherit"},Bh={fontSize:10},Za={marginTop:12},Pp={width:"100%",padding:"9px 16px",border:0,borderRadius:8,fontSize:14,fontWeight:600,fontFamily:"inherit",cursor:"pointer",background:"#d03050",color:"#ffffff"},es={...Pp,cursor:"not-allowed",background:"#f2f3f5",color:"#5d636a",border:"1px solid #e8eaed"},ns=S.forwardRef((e,n)=>{const{coupon:t,slots:o,phase:r,children:l,containerClassName:i,containerStyle:a,onMount:s,onUnmount:u,debug:p,containerRefExternal:f}=e,m=S.useRef(null),y=f??m,[,x]=S.useState(0),[C,k]=S.useState(!1);S.useImperativeHandle(n,()=>({getContainer:()=>y.current,forceUpdate:()=>x(_=>_+1),getSize:()=>{var _,j;return{width:((_=y.current)==null?void 0:_.offsetWidth)??0,height:((j=y.current)==null?void 0:j.offsetHeight)??0}},getPhase:()=>r}),[r,y]),S.useEffect(()=>(p&&console.debug("[CouponCore] mounted"),k(!0),s==null||s(),()=>u==null?void 0:u()),[]);const g=t.amountType==="discount",d=$h(t.amount,t.amountType),h=d===fp,v=Rh(t.threshold),w=t.thresholdText??v.text;return c.jsxs("div",{ref:y,className:i?`vc-coupon ${i}`:"vc-coupon","data-testid":"coupon-root","data-phase":r??"",style:{position:"relative",boxSizing:"border-box",...Dh,...a},children:[o==null?void 0:o.before,c.jsxs("div",{className:"vc-coupon__body","data-testid":"coupon-body",style:bh,children:[c.jsxs("div",{className:"vc-coupon__face",style:Mh,children:[c.jsx("div",{className:"vc-coupon__amount","data-testid":"coupon-amount","data-invalid":h?"true":"false",style:Oh,children:g?c.jsxs(c.Fragment,{children:[c.jsx("span",{className:"vc-coupon__amount-value",style:Eu,children:d}),c.jsx("span",{className:"vc-coupon__amount-unit",style:zh,children:"折"})]}):c.jsxs(c.Fragment,{children:[c.jsx("span",{className:"vc-coupon__amount-currency",style:Lh,children:"¥"}),c.jsx("span",{className:"vc-coupon__amount-value",style:Eu,children:d})]})}),c.jsx("div",{className:"vc-coupon__threshold","data-testid":"coupon-threshold","data-state":v.state,style:Ah,children:w})]}),c.jsx("div",{className:"vc-coupon__info",style:Fh,children:c.jsx("div",{className:"vc-coupon__title","data-testid":"coupon-title",style:Ih,children:t.title})})]}),o==null?void 0:o.after,o==null?void 0:o.footer,o==null?void 0:o.overlay,l,C?c.jsx("span",{"data-testid":"coupon-mounted",hidden:!0}):null]})});ns.displayName="CouponCore";function Qh(){const e=new Map,n=new Map;let t=0;const o=(a,s)=>{const u=e.get(a);if(u){if(t>=50){console.warn(`[PluginBus] emit depth exceeded: "${a}"`);return}t+=1;for(const p of[...u])try{p(s)}catch(f){console.warn(`[PluginBus] handler error for event "${a}"`,f)}t-=1}},r=(a,s)=>{let u=e.get(a);return u||(u=new Set,e.set(a,u)),u.add(s),()=>{u==null||u.delete(s)}},l=(a,s)=>{const u=p=>{try{s(p)}finally{i(a,u)}};return r(a,u)},i=(a,s)=>{var u;if(!s){e.delete(a);return}(u=e.get(a))==null||u.delete(s)};return{emit:o,on:r,once:l,off:i,getData:a=>n.get(a),setData:(a,s)=>{const u=n.get(a);n.set(a,s),u!==s&&o(a,s)},deleteData:a=>{const s=n.has(a);n.delete(a),s&&o(a,void 0)},hasData:a=>n.has(a),getAll:()=>{const a=Object.create(null);return n.forEach((s,u)=>{a[u]=s}),a},clear:()=>{e.clear(),n.clear()}}}function Kh(e){const n=new Map(e.map(a=>[a.name,a])),t=[];for(const a of e)for(const s of a.dependencies??[])n.has(s)||t.push(`${a.name} -> ${s}`);const o=[],r=new Set,l=[...e],i=a=>(a.dependencies??[]).every(s=>r.has(s)||!n.has(s));for(;l.length>0;){const a=l.filter(i);if(a.length===0)throw new Error(`[vane/plugin-core] 插件循环依赖: ${l.map(u=>u.name).join(" <-> ")}`);let s=a[0];for(const u of a)(u.priority??0)>(s.priority??0)&&(s=u);o.push(s),r.add(s.name),l.splice(l.indexOf(s),1)}return t.length>0&&console.warn(`[vane/plugin-core] 以下插件依赖未注册，将被忽略:
  ${t.join(`
  `)}`),o}function kp(e,n){try{return Kh(e)}catch(t){return n==null||n(t),e}}async function Yh(e,n={}){const{timeout:t=3e3,name:o="anonymous",hook:r="unknown"}=n;if(!t||t<=0)return await e();let l;const i=new Promise((a,s)=>{l=setTimeout(()=>{s(new Error(`[vane/plugin-core] 插件 ${o} 的钩子 ${r} 超时(${t}ms)`))},t)});try{return await Promise.race([Promise.resolve().then(e),i])}finally{l&&clearTimeout(l)}}const Xh=new Set(["onMount","onUnmount","onPropsChange","onError"]);function Gh(e={}){const n=e.logger??console,t=e.sandbox??!0,o=e.timeout??3e3,r=[];let l=[];const i=new Map,a=new Map,s=new Set;let u=0,p=null,f=0;const m=(P,E,R)=>{r.push({plugin:P,hook:E,error:R})},y=()=>{u+=1,p=null},x=(P,E=new Set)=>P.enabled===!1?!1:E.has(P.name)?!0:(E.add(P.name),(P.dependencies??[]).every(R=>{const L=i.get(R);return!L||x(L,E)})),C=()=>{if(p)return p;const P=[...i.values()].filter(E=>x(E)?!0:(m(E.name,"dependencies",new Error("依赖已停用")),!1));return p=kp(P,E=>m("[order]","resolveDependencyOrder",E))},k=P=>{const E=l.filter(([R])=>!P||R===P).reverse();l=P?l.filter(([R])=>R!==P):[];for(const[,R]of E)try{R()}catch(L){n.warn("[vane] cleanup failed",L)}},g=P=>{var E;return Promise.resolve((E=P.destroy)==null?void 0:E.call(P)).catch(R=>n.warn(`[vane] destroy failed: ${P.name}`,R))},d=async(P,E,R,L,F)=>{var Ge,$;const oe=E==="onUnmount";if(E==="onMount"||oe){if(s.has(P.name)!==oe)return{};oe?s.delete(P.name):s.add(P.name)}const yn=(Ge=P.hooks)==null?void 0:Ge[E];if(typeof yn!="function")return{};let We;try{const b=()=>yn(R,...L);We=P.sandbox??t?await Yh(b,{timeout:P.timeout??o,name:P.name,hook:E}):await b()}catch(b){return F!==u?{}:(m(P.name,E,b),n.warn(`[vane] ${E} failed: ${P.name}`,b),($=e.onError)==null||$.call(e,P.name,E,b),{stop:E==="onError"})}return F!==u?{}:Xh.has(E)&&typeof We=="function"?(l.push([P.name,We]),{}):{value:We}},h=async(P,E,R)=>{const L=u;for(const F of C()){if(L!==u)return;const oe=await d(F,P,E,R,L);if(oe.stop)return;if(oe.value===!1)return!1;if(oe.value!==void 0&&oe.value!==!0)return oe.value}},v=(P,E,...R)=>h(P,E,R),w=P=>{i.get(P.name)&&a.get(P.name)!==P&&(n.warn(`[vane] duplicate plugin, destroy old: ${P.name}`),N(P.name)),i.set(P.name,{...P,enabled:P.enabled??!0}),a.set(P.name,P),s.delete(P.name),y(),P.init&&Promise.resolve(P.init()).catch(E=>{n.warn(`[vane] init failed: ${P.name}`,E)})},_=P=>P.forEach(w),j=P=>{i.delete(P),a.delete(P),s.delete(P),p=null},N=P=>{const E=i.get(P);E&&(y(),k(P),g(E),j(P))};return{register:w,registerAll:_,unregister:N,getPlugin:P=>i.get(P),getAllPlugins:()=>[...i.values()],getEnabledPlugins:()=>[...i.values()].filter(P=>P.enabled!==!1),getExecutionOrder:()=>[...C()],enable:P=>{const E=i.get(P);E&&(E.enabled=!0,p=null)},disable:P=>{const E=i.get(P);E&&(E.enabled=!1,p=null)},has:P=>i.has(P),executeHook:v,clear:()=>{y(),f+=1,k();const P=[...i.values()].map(g);return i.clear(),a.clear(),s.clear(),Promise.all(P).then(()=>{})},getErrors:()=>[...r],align:async(P,E)=>{const R=++f,L=new Map(P.map(F=>[F.name,F]));for(const F of[...i.keys()]){if(R!==f)return;if(a.get(F)===L.get(F))continue;const oe=i.get(F);y(),await d(oe,"onUnmount",E,[],u),k(F),await g(oe),j(F)}for(const F of P){if(R!==f)return;a.get(F.name)!==F&&w(F)}},peekOrder:C}}var Jh=Object.defineProperty,Zh=(e,n,t)=>n in e?Jh(e,n,{enumerable:!0,configurable:!0,writable:!0,value:t}):e[n]=t,ey=(e,n,t)=>Zh(e,n+"",t);class ny extends Mo.Component{constructor(){super(...arguments),ey(this,"state",{error:null})}static getDerivedStateFromError(n){return{error:n}}componentDidUpdate(n){var r,l;const t=n.resetKeys??[],o=this.props.resetKeys??[];this.state.error&&(t.length!==o.length||t.some((i,a)=>!Object.is(i,o[a])))&&((l=(r=this.props).onReset)==null||l.call(r),this.setState({error:null}))}componentDidCatch(n,t){var o,r;console.warn("[vane/plugin-core] 插件渲染错误已被隔离",n,t),(r=(o=this.props).onError)==null||r.call(o,n,t)}render(){const{error:n}=this.state;return n?this.props.fallback?this.props.fallback(n):null:this.props.children}}let ir=null;function ty(e=!1){if(ir&&!e)return ir;const n=typeof window<"u"?window.innerWidth:1024,t=typeof window<"u"?window.innerHeight:768,o=typeof window<"u"&&window.devicePixelRatio||1,r=typeof navigator<"u"&&navigator.userAgent||"",l=/iPad|Tablet/i.test(r),i=/Mobile|Android|iPhone/i.test(r),a=typeof window<"u"&&("ontouchstart"in window||(navigator.maxTouchPoints??0)>0);return ir={type:l?"tablet":i?"mobile":"desktop",os:r,browser:r,devicePixelRatio:o,viewportWidth:n,viewportHeight:t,isTouchDevice:a,isRetina:o>=2},ir}function ju(e,n){if(Object.is(e,n))return!0;if(typeof e!="object"||typeof n!="object"||e===null||n===null)return!1;const t=Object.keys(e),o=Object.keys(n);return t.length!==o.length?!1:t.every(r=>Object.is(e[r],n[r]))}function oy(e){const{plugins:n,props:t,data:o,initialState:r,containerRef:l,enableDebug:i=!1,managerOptions:a,extendContext:s}=e,u=S.useRef(null),p=l??u,f=S.useRef(null);f.current||(f.current=Gh(a));const m=f.current,y=S.useRef(null);y.current||(y.current=Qh());const x=y.current,C=S.useRef(new Map),[k,g]=S.useState(r??{}),[,d]=S.useState(0),h=S.useCallback(()=>d(U=>U+1),[]),v=S.useMemo(()=>ty(),[]),w=S.useRef(t);ju(w.current,t)||(w.current=t);const _=w.current,j=S.useRef(o);ju(j.current,o)||(j.current=o);const N=j.current,P=S.useRef(null),E=S.useMemo(()=>{const U={props:_,data:N,bus:x,refs:{container:p,getContainer:()=>p.current},state:k,setState:W=>g(ae=>({...ae,...W})),shared:C.current,deviceInfo:v,forceUpdate:h,getSize:()=>{const W=p.current;return W?{width:W.offsetWidth,height:W.offsetHeight}:{width:0,height:0}},logger:console};return s?s(U):U},[_,N,k,v,x,s]);S.useLayoutEffect(()=>{P.current=E},[E]);const R=S.useRef(n),L=R.current;L!==n&&(L.length!==n.length||n.some((U,W)=>U!==L[W]))&&(R.current=n);const F=R.current,oe=S.useRef(0);S.useLayoutEffect(()=>{const U=++oe.current,W=P.current;return m.align(F,W).then(()=>{oe.current===U&&(i&&console.debug("[vane/plugin-core] plugins registered:",F.map(ae=>ae.name).join("|")),m.executeHook("onMount",W))}),()=>{oe.current+=1}},[F,m,i]),S.useLayoutEffect(()=>()=>{const U=P.current;if(!m.getExecutionOrder().some(W=>{var ae;return typeof((ae=W.hooks)==null?void 0:ae.onUnmount)=="function"})){m.clear();return}m.executeHook("onUnmount",U).finally(()=>m.clear())},[m]);const yn=m.peekOrder(),We=S.useRef([]),Ge=S.useMemo(()=>{const U=new Map(F.map(se=>[se.name,se])),W=F.filter(se=>{var Hn;return se.enabled!==!1&&((Hn=m.getPlugin(se.name))==null?void 0:Hn.enabled)!==!1}),ae=yn.length===W.length?yn.map(se=>U.get(se.name)??se):kp(W),me=We.current;return me.length===ae.length&&ae.every((se,Hn)=>se===me[Hn])?me:(We.current=ae,ae)},[F,m,yn]),$=S.useRef(E);$.current=E;const b=S.useCallback((U,W)=>{var se;const ae=$.current;let me=W;for(const Hn of Ge){const yl=(se=Hn.hooks)==null?void 0:se[U];if(typeof yl=="function")try{me=U==="transformData"?yl(ae,me):yl(me)}catch(Hp){(ae.logger??console).warn(`[plugin-core] ${Hn.name}.${U} 执行失败，已跳过`,Hp)}}return me},[Ge]),O=S.useCallback(U=>b("transformProps",U),[b]),Q=S.useCallback(U=>b("transformData",U),[b]),ee=S.useCallback((U,...W)=>m.executeHook(U,P.current,...W),[m]);return{manager:m,bus:x,context:E,state:k,setState:E.setState,execute:ee,transformProps:O,transformData:Q,orderedPlugins:Ge}}S.createContext(null);function ry(e,n,t){var r,l;if(e.enabled===!1||typeof((r=e.hooks)==null?void 0:r[n])!="function")return!1;const o=(l=e.config)==null?void 0:l.slotPosition;return t==="before"?o==="before":t==="footer"?o===void 0||o==="after"||o==="footer":o===void 0||o==="after"}function ly(e,n){var t,o;return(((t=e.config)==null?void 0:t.order)??0)-(((o=n.config)==null?void 0:o.order)??0)||(n.priority??0)-(e.priority??0)}function iy(e,n,t){const o=new Set;return e.map(r=>{var l;if(o.has(r.name))return null;o.add(r.name);try{const i=(l=r.hooks)==null?void 0:l[t],a=i==null?void 0:i(n);return a==null?null:c.jsx(ny,{children:a},`vane-slot-${r.name}`)}catch(i){return console.warn(`[vane/plugin-core] 插件 ${r.name} 的 ${t} 渲染失败`,i),null}})}function ar(e,n,t){const{hook:o,position:r="after"}=t,l=e.filter(i=>ry(i,o,r)).sort(ly);return iy(l,n,o)}function ay(e,n){const t=Array.isArray(n)?{plugins:n}:n,{plugins:o,enableDebug:r=!1}=t,l=S.forwardRef((i,a)=>{const s=S.useRef(null),u=S.useRef({}),p=S.useRef(()=>{}),f=S.useCallback(R=>{p.current({phase:R})},[]),m=S.useCallback(()=>{p.current({rulesExpanded:!(u.current.rulesExpanded??!1)})},[]),y=i.coupon,x=i.order??null,C=S.useCallback(R=>{const L=R.state??{};return{...R,coupon:y,order:x,phase:L.phase??"available",setPhase:f,validity:L.validity??null,eligible:L.eligible??null,quotaReached:L.quotaReached===!0,rulesExpanded:L.rulesExpanded??!1,toggleRules:m}},[y,x,f,m]),k=oy({plugins:o,props:i,data:i.data,containerRef:s,extendContext:C,enableDebug:r});u.current=k.state,p.current=k.setState;const g=k.context,d=S.useCallback((R,...L)=>k.execute(R,...L),[k.manager]);S.useEffect(()=>{d("onMount")},[d,k.orderedPlugins]);const h=S.useRef(i);S.useEffect(()=>{const R=h.current;R!==i&&(h.current=i,!(sy(R.coupon,i.coupon)&&uy(R.order,i.order)&&R.data===i.data)&&d("onPropsChange",R,i))},[i,d]);const v=g.phase,w=S.useRef(void 0);S.useEffect(()=>{const R=w.current;if(R===void 0){w.current=v;return}R!==v&&(w.current=v,d("onPhaseChange",v,R),k.bus.emit("coupon:phase",{phase:v,prev:R}))},[v,d]);const _=g.validity,j=S.useRef(void 0);S.useEffect(()=>{const R=j.current;j.current=_,_&&R!==_&&(d("onValidityChange",_),k.bus.emit("coupon:validity",{validity:_}))},[_,d]);const N=S.useMemo(()=>({before:ar(k.orderedPlugins,g,{hook:"renderHeader",position:"before"}),after:ar(k.orderedPlugins,g,{hook:"renderHeader",position:"after"}),footer:ar(k.orderedPlugins,g,{hook:"renderFooter"}),overlay:ar(k.orderedPlugins,g,{hook:"renderOverlay"})}),[k.orderedPlugins,g.state,g.coupon,g.order,f,m]),P=k.transformProps(i),E={...P,containerRefExternal:s,debug:P.debug??r,slots:N,phase:g.phase,onMount:()=>{var R;(R=P.onMount)==null||R.call(P)},onUnmount:()=>{var R;(R=P.onUnmount)==null||R.call(P)}};return c.jsx(e,{ref:a,...E})});return l.displayName="WithPlugins(CouponCore)",l}function sy(e,n){if(e===n)return!0;if(!e||!n)return!1;const t=Object.keys(e),o=Object.keys(n);return t.length!==o.length?!1:t.every(r=>Object.is(e[r],n[r]))}function uy(e,n){if(e===n)return!0;if(!e||!n)return!1;const t=Object.keys(e),o=Object.keys(n);return t.length!==o.length?!1:t.every(r=>Object.is(e[r],n[r]))}function M(e=[]){return ay(ns,e)}const ql=M([]),po=24*60*60*1e3,ln=e=>typeof e=="number"&&Number.isFinite(e),sr=e=>{const n=new Date(e),t=o=>String(o).padStart(2,"0");return`${n.getFullYear()}.${t(n.getMonth()+1)}.${t(n.getDate())}`};function cy(e,n){return ln(e.validTo)?{start:ln(e.validFrom)?e.validFrom:null,end:e.validTo}:ln(e.validDays)&&e.validDays>0?ln(n)?{start:n,end:n+e.validDays*po}:{start:null,end:null}:null}function dy(e,n,t){const o=cy(e,n);if(!o)return null;const r=[];return o.start!==null&&t<o.start&&r.push(o.start),o.end!==null&&t<=o.end&&r.push(o.end+1),r.length>0?Math.min(...r):null}function Gr(e,n={}){const t=n.now??(()=>Date.now()),o=n.urgentDays??3,r=t();if(ln(e.validTo)){const l=ln(e.validFrom)?r<e.validFrom:!1,i=r>e.validTo,a=Math.max(0,e.validTo-r),s=Math.ceil(a/po),u=ln(e.validFrom)?`${sr(e.validFrom)} - ${sr(e.validTo)}`:`${sr(e.validTo)} 前`;return{mode:"absolute",valid:!i&&!l,expired:i,notStarted:l,remainingMs:a,text:u,urgent:!i&&!l&&s<=o}}if(ln(e.validDays)){const l=ln(n.claimedAt)?n.claimedAt:void 0;if(l===void 0)return{mode:"relative",valid:!0,expired:!1,notStarted:!1,remainingMs:null,text:`领取后 ${e.validDays} 天内有效`,urgent:!1};const i=l+e.validDays*po,a=r>i,s=Math.max(0,i-r),u=Math.ceil(s/po);return{mode:"relative",valid:!a,expired:a,notStarted:!1,remainingMs:s,text:`${sr(l)} 领取，${e.validDays} 天内有效`,urgent:!a&&u<=o}}return null}function py(e,n){return JSON.stringify(e)===JSON.stringify(n)}const Bl=e=>typeof e=="number"&&Number.isFinite(e);function ts(e,n={}){const t=Bl(n.quota)?n.quota:Bl(e.quota)?e.quota:null,o=Bl(n.purchasedCount)&&n.purchasedCount>=0?n.purchasedCount:0;return{quota:t,purchased:o,reached:t!==null&&o>=t}}const Qt=e=>typeof e=="number"&&Number.isFinite(e);function os(e,n={}){const t=Qt(n.total)?n.total:Qt(e.total)?e.total:null,o=Qt(n.claimed)?n.claimed:Qt(e.claimed)?e.claimed:null,r=Qt(n.stock)?n.stock:null,l=t!==null&&t>0&&o!==null&&o>=t,i=r!==null&&r<=0,a=t!==null&&t>0&&o!==null?Math.min(100,Math.round(Math.max(0,o)/t*100)):null,s=[];r!==null&&s.push(Math.max(0,r)),t!==null&&s.push(Math.max(0,t-Math.max(0,o??0)));const u=s.length>0?Math.min(...s):null;return{total:t,claimed:o,remaining:u,soldout:l||i,percent:a}}const fo=e=>typeof e=="number"&&Number.isFinite(e),Ki=e=>Math.round(e*100),fy=e=>{if(!e||e.length===0)return null;let n=0;for(const t of e){if(!fo(t==null?void 0:t.amount))continue;const o=fo(t.quantity)&&t.quantity>0?t.quantity:1;n+=Ki(t.amount)*o}return n/100};function my(e,n={}){var p,f,m,y;const t=[],o=fo(n.amount)?n.amount:fy(n.items),r=e.threshold;let l=null;if(fo(r)&&r>0)if(o===null)t.push("threshold");else{const x=Ki(r)-Ki(o);x>0&&(t.push("threshold"),l=x/100)}const i=Gr(e,{now:()=>fo(n.now)?n.now:Date.now(),claimedAt:n.claimedAt});i!=null&&i.expired&&t.push("expired"),i!=null&&i.notStarted&&t.push("not-started");const a=e.scope;if(!!a&&((((p=a.sku)==null?void 0:p.length)??0)>0||(((f=a.category)==null?void 0:f.length)??0)>0||(((m=a.excludeSku)==null?void 0:m.length)??0)>0)){const x=n.items??[];if(x.length===0)t.push("scope");else if((y=a==null?void 0:a.excludeSku)!=null&&y.length&&x.some(C=>C.sku&&a.excludeSku.includes(C.sku)))t.push("scope");else{const C=(a==null?void 0:a.sku)??[],k=(a==null?void 0:a.category)??[];(C.length>0||k.length>0)&&(x.some(d=>!!d.sku&&C.includes(d.sku)||!!d.category&&k.includes(d.category))||t.push("scope"))}}const u=(n.applied??[]).filter(x=>x&&x.id!==e.id);return e.exclusiveGroup&&u.some(C=>C.exclusiveGroup===e.exclusiveGroup)&&t.push("exclusive"),u.length>0&&e.stackable!==!0&&t.push("stackable"),ts(e,{purchasedCount:n.purchasedCount}).reached&&t.push("quota"),os(e).soldout&&t.push("soldout"),{eligible:t.length===0,reasons:t,thresholdGap:l,amount:o}}const gy={slug:"quickstart",title:"裸券 · 零插件",group:"basic",intro:"不装任何插件：面额区（¥ / 折）+ 门槛 + 标题，这就是核心组件本体的全部。"};function hy(){return c.jsxs("div",{style:{display:"grid",gap:12,maxWidth:420},children:[c.jsx(ql,{coupon:{id:"c1",title:"新人专享券",amount:10,threshold:99}}),c.jsx(ql,{coupon:{id:"c2",title:"服饰品类折扣券",amount:8.5,amountType:"discount",threshold:0}}),c.jsx(ql,{coupon:{id:"c3",title:"自定义门槛文案",amount:30,thresholdText:"限下单实物商品"}})]})}const yy=Object.freeze(Object.defineProperty({__proto__:null,default:hy,meta:gy},Symbol.toStringTag,{value:"Module"})),vy={idle:"未开始",available:"立即领取",claiming:"领取中…",claimed:"已领取",used:"已使用",soldout:"已抢光",expired:"已过期","quota-limited":"已达限领上限"},Tu=new Set(["used","soldout","expired"]),ur="claim:in-flight",cr="claim:mounted";function xy(e={}){const n={...vy,...e.texts},t={slotPosition:"after",order:10,...e},o=e.now??(()=>Date.now()),r=s=>{var C,k,g,d;const u=s.phase;if(Tu.has(u)||u==="claimed"||u==="claiming")return null;const p=((C=s.state)==null?void 0:C.claimedAt)??void 0,f=Gr(s.coupon,{now:o,claimedAt:p}),m=(k=s.state)==null?void 0:k.validity;if(f!=null&&f.expired||m!=null&&m.expired)return"expired";if(os(s.coupon,{stock:e.stock,total:e.total,claimed:e.claimed}).soldout)return"soldout";const x=ts(s.coupon,{quota:e.quota,purchasedCount:e.purchasedCount??((g=s.order)==null?void 0:g.purchasedCount)});return((d=s.state)==null?void 0:d.quotaReached)===!0||x.reached?"quota-limited":null},l=(s,u)=>{var p;((p=s.state)==null?void 0:p.phase)!==u&&s.setState({phase:u})},i=s=>{var f;const u=((f=s.state)==null?void 0:f.phase)??void 0;if(u===void 0){const m=r(s);m?s.setState({phase:m}):e.initialPhase&&s.setState({phase:e.initialPhase});return}const p=r(s);if(p){p!==u&&l(s,p);return}u==="quota-limited"&&l(s,"available")},a=s=>{const u=s.eligible??(s.order?my(s.coupon,s.order):null);return(u==null?void 0:u.eligible)===!1};return{name:"claim-state",version:"0.1.0",description:"领取状态机：8 态相位流转（未开始/可领取/领取中/已领取/已使用/已抢空/已过期/已达限领上限），联动有效期、库存与限领自动降级",priority:32,config:t,hooks:{onMount:s=>{s.shared.set(cr,!0),i(s)},onPropsChange:s=>{i(s)},onValidityChange:(s,u)=>{u.expired&&!Tu.has(s.phase)&&l(s,"expired")},onUnmount:s=>{s.shared.set(cr,!1),s.shared.delete(ur)},renderFooter:s=>{const u=s.phase,p=r(s),f=a(s),m=f&&!p,y=p??u,x=m?e.ineligibleText??"不可用":n[y]??y,C=y!=="available"||m,k=async()=>{var h,v,w,_;if(s.phase!=="available"||s.shared.get(ur)===!0)return;const g=a(s),d=r(s);if(d){l(s,d);return}if(!g){s.shared.set(ur,!0),l(s,"claiming");try{const j=await((h=e.claim)==null?void 0:h.call(e));if(s.shared.get(cr)!==!0)return;if(!j||j.ok!==!1){const P=Gr(s.coupon,{now:o,claimedAt:(v=s.state)==null?void 0:v.claimedAt});if(P!=null&&P.expired){l(s,"expired");return}s.setState({phase:"claimed",claimedAt:Date.now()})}else l(s,"available"),(w=e.onClaimError)==null||w.call(e,j==null?void 0:j.reason)}catch(j){if(s.shared.get(cr)!==!0)return;l(s,"available"),(_=e.onClaimError)==null||_.call(e,String(j))}finally{s.shared.delete(ur)}}};return c.jsx("div",{className:"vc-coupon__actions",style:Za,"data-testid":"coupon-claim-area",children:c.jsx("button",{type:"button",style:u==="available"&&!C?Pp:es,"data-testid":"coupon-claim-btn","data-phase":u,"data-gate":p??"","data-eligible":f?"false":"true",disabled:C,"aria-disabled":C,onClick:()=>void k(),children:x})})}}}}const Cy="ClaimStatePlugin",Sy="领取状态机：8 态相位流转（未开始/可领取/领取中/已领取/已使用/已抢空/已过期/已达限领上限），点击触发异步领取，联动有效期、库存、限领与订单可用性自动门控。",wy="0.1.0",Py=["coupon","claim","state-machine","footer"],ky=[{name:"onMount",when:"券组件挂载完成、插件注册后执行一次",description:"初始化副作用，可返回清理函数"},{name:"onUnmount",when:"组件卸载前执行一次",description:"释放监听、定时器与观察器；与 onMount 成对出现，避免泄漏"},{name:"onPropsChange",when:"宿主 props 变化后（回传 prev / next 两份）",description:"按新旧 props 差分决定是否重算内部状态，避免无差别刷新"},{name:"onValidityChange",when:"可用性判定结果变化（门槛、时间窗、库存等条件重算）",description:"根据可用性变更刷新外部状态或提示"},{name:"renderFooter",when:"每次渲染，券面底部槽位",description:"有效期、使用门槛、领取 / 使用按钮"}],_y=[],Ey="只读取 context 字段（props / state / data），不调用上下文方法",jy=[{name:"initialPhase",type:"CouponPhase",default:"-",description:"初始相位，默认 available（可领取）；硬门（过期/售罄/超限）优先"},{name:"claim",type:"() => Promise<{ ok?: boolean; reason?: string } | void>",default:"-",description:"异步领取回调；返回 ok:false 视为失败，回退 available 并触发 onClaimError"},{name:"stock",type:"number",default:"-",description:"剩余库存；≤ 0 自动降级 soldout（与 total/claimed 取并集）"},{name:"total",type:"number",default:"coupon.total",description:"发放总量覆盖；claimed ≥ total 时判售罄（与 ProgressPlugin 同口径）"},{name:"claimed",type:"number",default:"coupon.claimed",description:"已领取数覆盖（与 ProgressPlugin 同口径）"},{name:"quota",type:"number",default:"coupon.quota",description:"每人限领张数；超限进入 quota-limited"},{name:"purchasedCount",type:"number",default:"order.purchasedCount ?? 0",description:"当前用户已领张数"},{name:"now",type:"() => number",default:"Date.now",description:"判定时钟，点击时按它现算过期（不依赖可能陈旧的 state.validity）"},{name:"onPhaseChange",type:"(phase, prev) => void",default:"-",description:"相位变化回调"},{name:"onClaimError",type:"(reason?: string) => void",default:"-",description:"领取失败回调"},{name:"texts",type:"Partial<Record<CouponPhase, string>>",default:"-",description:"按钮文案按相位覆盖"},{name:"ineligibleText",type:"string",default:'"不可用"',description:"订单不可用（门槛/范围/互斥/叠加不满足）时的按钮文案"}],Ty=["8 态状态机：idle / available / claiming / claimed / used / soldout / expired / quota-limited","库存并集口径：stock ≤ 0 或 claimed ≥ total 都降级 soldout（与 ProgressPlugin 共用 resolveStock）","限领超限降级 quota-limited（非终态，已领数下调后自动恢复 available）","过期判定按注入时钟现算；领取期间跨过 validTo 不落成功态","订单可用性（state.eligible 或 props.order）不满足时按钮显示「不可用」且不可点击","claimedAt 写入内核 state，供相对有效期锚定领取时刻"],Ny=["领券中心","营销活动页","会员权益券"],$y=["渲染 footer 槽（priority 32）；事件钩子写内核 state，不在渲染期 setState。","expired 只覆盖非终态：已核销（used）的券不会被过期判定打回。","重入锁存于 context.shared，同一事件循环内连点只发起一次领取；卸载后异步返回不再写 state。",'当前 plugin-core 的 footer 槽按 position "after" 过滤，config.slotPosition 暂保持 after（元数据与真实槽位的统一待内核支持）。'],Ry="const Coupon = createCouponCard([createClaimStatePlugin({ claim: async () => ({ ok: true }), purchasedCount: 2, quota: 2 })]);",_p={name:Cy,description:Sy,since:wy,tags:Py,events:ky,methods:_y,methodsNote:Ey,config:jy,features:Ty,useCases:Ny,notes:$y,example:Ry},te=Object.assign(xy,{meta:_p}),Dy=M([te({claim:async()=>(await new Promise(e=>setTimeout(e,600)),{ok:!0})})]),by=M([te({claim:async()=>(await new Promise(e=>setTimeout(e,600)),{ok:!1,reason:"超出限领数量"}),onClaimError:e=>console.warn("[claim 失败]",e)})]),My={slug:"claim-state",title:"领取状态机",group:"basic",intro:"点击领取：available → claiming → claimed。第二张卡模拟领取失败，回退 available（终态 used/soldout/expired 不再响应点击）。"};function Oy(){return c.jsxs("div",{style:{display:"grid",gap:12,maxWidth:420},children:[c.jsx(Dy,{coupon:{id:"cs1",title:"点击领取试试 · 成功流",amount:20,threshold:199}}),c.jsx(by,{coupon:{id:"cs2",title:"点击领取试试 · 失败回退流",amount:5,threshold:0}})]})}const Ly=Object.freeze(Object.defineProperty({__proto__:null,default:Oy,meta:My},Symbol.toStringTag,{value:"Module"})),dr="validity:timer",zy=2147483647;function Ay(e={}){const n=e.urgentDays??3,t=e.now??(()=>Date.now()),o={slotPosition:"after",order:10,...e};function r(a){const s=a.shared.get(dr);s!==void 0&&(window.clearTimeout(s),a.shared.delete(dr))}function l(a){var f,m;const s=((f=a.state)==null?void 0:f.claimedAt)??void 0,u=Gr(a.coupon,{now:t,urgentDays:n,claimedAt:s});if(u===null){r(a);return}const p=((m=a.state)==null?void 0:m.validity)??null;py(u,p)||a.setState({validity:u}),i(a)}function i(a){var m;r(a);const s=((m=a.state)==null?void 0:m.claimedAt)??void 0,u=dy(a.coupon,s,t());if(u===null)return;const p=Math.max(0,Math.min(u-t(),zy)),f=window.setTimeout(()=>{a.shared.delete(dr),l(a)},p);a.shared.set(dr,f)}return{name:"validity",version:"0.1.0",description:"有效期判定：绝对（validFrom/validTo）/ 相对（领取后 N 天）双模式，紧迫态强调、到期自动复查写 state 供领取状态机联动",priority:23,config:o,hooks:{onMount:a=>(l(a),()=>r(a)),onPropsChange:a=>{l(a)},onPhaseChange:a=>{l(a)},onUnmount:a=>{r(a)},renderHeader:a=>{const s=a.validity;if(!s||s.mode==="none")return null;const u=s.remainingMs!==null?Math.ceil(s.remainingMs/po):null;return c.jsxs("div",{style:vp,"data-testid":"coupon-validity","data-mode":s.mode,"data-expired":s.expired?"true":"false","data-urgent":s.urgent?"true":"false",children:[c.jsx("span",{style:yp,children:"有效期"}),c.jsx("span",{style:Uh,children:s.text}),s.expired?c.jsx("span",{style:Hh,children:"已过期"}):s.urgent&&u!==null?c.jsxs("span",{style:Wh,children:["仅剩 ",u," 天"]}):s.notStarted?c.jsx("span",{style:Vh,children:"未开始"}):null]})}}}}const Fy="ValidityPlugin",Iy="有效期判定：绝对（validFrom/validTo）与相对（领取后 N 天）双模式，紧迫态（剩余 ≤ N 天）强调展示，过期结果写内核 state 供领取状态机联动。",Uy="0.1.0",Wy=["coupon","validity","date","after"],Hy=[{name:"onMount",when:"券组件挂载完成、插件注册后执行一次",description:"初始化副作用，可返回清理函数"},{name:"onUnmount",when:"组件卸载前执行一次",description:"释放监听、定时器与观察器；与 onMount 成对出现，避免泄漏"},{name:"onPropsChange",when:"宿主 props 变化后（回传 prev / next 两份）",description:"按新旧 props 差分决定是否重算内部状态，避免无差别刷新"},{name:"onPhaseChange",when:"券相位变化后（如 available → used / expired）",description:"相位切换时的副作用：埋点、提示、动效"},{name:"renderHeader",when:"每次渲染，券面头部槽位",description:"面额、券名、标签等券面主视觉"}],Vy=[],qy="只读取 context 字段（props / state / data），不调用上下文方法",By=[{name:"now",type:"() => number",default:"Date.now",description:"当前时钟，可注入固定值用于测试/演示"},{name:"urgentDays",type:"number",default:"3",description:"紧迫阈值：剩余 ≤ N 天显示「仅剩 X 天」强调角标"}],Qy=["absolute：validFrom/validTo 区间展示 + 未开始/已过期判定","relative：未领取显示「领取后 N 天内有效」，已领取从 state.claimedAt 起算","到点自动复查：按「validFrom 或 validTo + 1ms」挂 setTimeout，页面停留跨过边界后自动收敛（P1-3）","产出 state.validity（changed 才写），ClaimStatePlugin 借 onValidityChange 降级 expired"],Ky=["固定活动周期的券","领取后 N 天生效的券"],Yy=["渲染 after 槽（priority 23 > RuleExpand 21），显示在规则区上方。","两种模式都未声明时不渲染也不写 state。","定时器存 context.shared，onMount 返回清理函数、onUnmount 兜底清理。"],Xy="const Coupon = createCouponCard([createValidityPlugin({ urgentDays: 3 })]);",Ep={name:Fy,description:Iy,since:Uy,tags:Wy,events:Hy,methods:Vy,methodsNote:qy,config:By,features:Qy,useCases:Ky,notes:Yy,example:Xy},hn=Object.assign(Ay,{meta:Ep}),Ql=24*60*60*1e3,Kl=Date.now(),Gy=M([hn({urgentDays:3}),te({claim:async()=>({ok:!0})})]),Jy=M([hn(),te({claim:async()=>({ok:!0})})]),Zy=M([hn(),te({claim:async()=>({ok:!0})})]),ev={slug:"validity",title:"有效期判定",group:"plugin",intro:"绝对（validFrom/validTo）与相对（领取后 N 天）双模式；紧迫态强调展示；过期的券会被状态机自动压到「已过期」。"};function nv(){return c.jsxs("div",{style:{display:"grid",gap:12,maxWidth:420},children:[c.jsx(Gy,{coupon:{id:"v1",title:"紧迫态 · 仅剩 2 天",amount:15,threshold:99,validFrom:Kl-10*Ql,validTo:Kl+2*Ql}}),c.jsx(Jy,{coupon:{id:"v2",title:"过期联动 · 按钮自动变已过期",amount:50,threshold:299,validTo:Kl-1*Ql}}),c.jsx(Zy,{coupon:{id:"v3",title:"相对有效期 · 领取后 7 天",amount:8,threshold:0,validDays:7}})]})}const tv=Object.freeze(Object.defineProperty({__proto__:null,default:nv,meta:ev},Symbol.toStringTag,{value:"Module"}));function ov(e={}){const n=e.collapsedCount??1,t=e.expandText??"展开",o=e.collapseText??"收起",r=e.showCount??!0,l=e.title??"使用规则";return{name:"rule-expand",version:"0.1.0",description:"规则展开/收起：使用规则按条数折叠（默认 1 条），展开态写内核 state，可被宿主/其他插件复位",priority:21,config:{slotPosition:"after",order:10,...e},hooks:{renderHeader:a=>{const s=a.coupon.rules??[];if(s.length===0)return null;const u=a.rulesExpanded,p=u?s:s.slice(0,n),f=s.length-p.length;return c.jsxs("div",{style:qh,"data-testid":"coupon-rules","data-expanded":u?"true":"false",children:[l?c.jsx("div",{style:xp,children:l}):null,c.jsx("ul",{style:Cp,children:p.map((m,y)=>c.jsx("li",{style:Sp,"data-testid":`coupon-rule-${y}`,children:m},y))}),s.length>n?c.jsxs("button",{type:"button",style:wp,"data-testid":"coupon-rules-toggle","aria-expanded":u,onClick:()=>a.toggleRules(),children:[u?o:r?`${t} (${f} 项)`:t,c.jsx("span",{"aria-hidden":"true",style:Bh,children:u?"▲":"▼"})]}):null]})}}}}const rv="RuleExpandPlugin",lv="规则展开/收起：使用规则按条数折叠（默认 1 条），展开态写内核 state，可被宿主复位；不用 line-clamp 避免纵向裁切。",iv="0.1.0",av=["coupon","rules","expand","after"],sv=[{name:"renderHeader",when:"每次渲染，券面头部槽位",description:"面额、券名、标签等券面主视觉"}],uv=[{name:"toggleRules",signature:"ctx.toggleRules(): void",description:"展开 / 收起规则面板（写入内部 UI 状态）"}],cv=[{name:"collapsedCount",type:"number",default:"1",description:"折叠态显示的规则条数"},{name:"expandText",type:"string",default:'"展开"',description:"展开按钮文案"},{name:"collapseText",type:"string",default:'"收起"',description:"收起按钮文案"},{name:"showCount",type:"boolean",default:"true",description:"按钮是否带剩余条数（「展开 (3 项)」）"},{name:"title",type:"string",default:'"使用规则"',description:"区域标题；传空字符串隐藏"}],dv=["折叠态显示前 collapsedCount 条 + 「展开 (N 项)」，展开后全量 + 「收起」","展开态写内核 state.rulesExpanded（toggleRules）","rules 为空渲染 null；无更多条目时不渲染切换按钮"],pv=["规则条目多的营销券","需要默认收纳的紧凑版面"],fv=["渲染 after 槽（priority 21 < Validity 23），显示在有效期下方。","按条数截断而非 line-clamp：tasks/28 几何体检证明 line-clamp 是纵向裁切重灾区。"],mv="const Coupon = createCouponCard([createRuleExpandPlugin({ collapsedCount: 2 })]);",jp={name:rv,description:lv,since:iv,tags:av,events:sv,methods:uv,config:cv,features:dv,useCases:pv,notes:fv,example:mv},Wn=Object.assign(ov,{meta:jp}),Nu=["本券仅限平台在售自营商品使用","不与店铺优惠券叠加，可与运费券叠加","订单部分退款时，按比例退回券面金额","单笔订单最多使用 1 张，核销后不找零","如在有效期内未使用，券自动作废且不予补发"],gv=M([Wn({collapsedCount:1})]),hv=M([Wn({collapsedCount:2,title:""})]),yv={slug:"rules",title:"规则展开 / 收起",group:"plugin",intro:"按条数折叠（不是 line-clamp——tasks/28 证明那是纵向裁切重灾区）。点击展开/收起，展开态写内核 state。"};function vv(){return c.jsxs("div",{style:{display:"grid",gap:12,maxWidth:420},children:[c.jsx(gv,{coupon:{id:"r1",title:"默认折叠 1 条",amount:25,threshold:199,rules:Nu}}),c.jsx(hv,{coupon:{id:"r2",title:"折叠 2 条 · 无标题",amount:60,threshold:399,rules:Nu}})]})}const xv=Object.freeze(Object.defineProperty({__proto__:null,default:vv,meta:yv},Symbol.toStringTag,{value:"Module"}));function Cv(e={}){const n=e.text??"可叠加",t=e.notStackableText??"不可叠加";return{name:"stack",version:"0.1.0",description:"叠加态角标：按 coupon.stackable 渲染「可叠加/不可叠加」角标，可强制展示",priority:12,config:{slotPosition:"before",order:10,...e},hooks:{renderHeader:r=>{const l=r.coupon.stackable;return e.always||l===!0?c.jsx("div",{style:Xr,"data-testid":"coupon-badges",children:c.jsx("span",{style:gp,"data-testid":"coupon-stack-badge","data-stackable":"true",children:n})}):e.showWhenNotStackable&&l===!1?c.jsx("div",{style:Xr,"data-testid":"coupon-badges",children:c.jsx("span",{style:hp,"data-testid":"coupon-stack-badge","data-stackable":"false",children:t})}):null}}}}const Sv="StackPlugin",wv="叠加态角标：按 coupon.stackable 渲染「可叠加」强调角标或「不可叠加」灰标，可强制展示；渲染在票面顶部角标区。",Pv="0.1.0",kv=["coupon","stack","badge","before"],_v=[{name:"renderHeader",when:"每次渲染，券面头部槽位",description:"面额、券名、标签等券面主视觉"}],Ev=[],jv="只读取 context 字段（props / state / data），不调用上下文方法",Tv=[{name:"text",type:"string",default:'"可叠加"',description:"可叠加角标文案"},{name:"notStackableText",type:"string",default:'"不可叠加"',description:"不可叠加角标文案"},{name:"showWhenNotStackable",type:"boolean",default:"false",description:"stackable === false 时是否渲染灰标"},{name:"always",type:"boolean",default:"false",description:"不看数据字段强制渲染可叠加角标"}],Nv=["数据驱动：coupon.stackable === true → 强调角标；false + showWhenNotStackable → 灰标","always: true 强制渲染（组合示例/纯展示场景）"],$v=["可与店铺券/运费券叠加的券","需要明示叠加限制的营销位"],Rv=['渲染 before 槽（priority 12）；config 必须显式 slotPosition: "before"，缺省会被 renderPluginSlot 落到 after。'],Dv="const Coupon = createCouponCard([createStackPlugin({ showWhenNotStackable: true })]);",Tp={name:Sv,description:wv,since:Pv,tags:kv,events:_v,methods:Ev,methodsNote:jv,config:Tv,features:Nv,useCases:$v,notes:Rv,example:Dv},Xe=Object.assign(Cv,{meta:Tp}),bv=M([Xe()]),Mv=M([Xe({showWhenNotStackable:!0})]),Ov=M([Xe({always:!0})]),Lv={slug:"stack",title:"叠加态角标",group:"plugin",intro:"数据驱动：coupon.stackable === true 渲染「可叠加」强调角标；false + showWhenNotStackable 渲染灰标；always 强制渲染。"};function zv(){return c.jsxs("div",{style:{display:"grid",gap:12,maxWidth:420},children:[c.jsx(bv,{coupon:{id:"s1",title:"可与运费券叠加",amount:18,threshold:128,stackable:!0}}),c.jsx(Mv,{coupon:{id:"s2",title:"独享券 · 不可叠加",amount:40,threshold:259,stackable:!1}}),c.jsx(Ov,{coupon:{id:"s3",title:"always 强制渲染（数据未声明）",amount:6,threshold:0}})]})}const Av=Object.freeze(Object.defineProperty({__proto__:null,default:zv,meta:Lv},Symbol.toStringTag,{value:"Module"})),$u=M([te({claim:async()=>({ok:!0})}),hn({urgentDays:3}),Wn({collapsedCount:1}),Xe({showWhenNotStackable:!0})]),Ru=24*60*60*1e3,Du=Date.now(),Fv={slug:"combined",title:"四插件合体",group:"advanced",intro:"before 角标 / after 有效期+规则 / footer 领取按钮。priority：claim-state 32 · validity 23 · rule-expand 21 · stack 12。"};function Iv(){const e={id:"full1",title:"全插件合体 · 紧迫可领",amount:88,threshold:599,stackable:!0,validFrom:Du-12*Ru,validTo:Du+2*Ru,rules:["仅限「家电焕新」活动商品使用","可与运费券叠加，不与店铺券叠加","核销后部分退款按比例退回"]},n={id:"full2",title:"全插件合体 · 不可叠加",amount:12,threshold:0,stackable:!1,validDays:7,rules:["全场通用","有效期自领取日起算"]};return c.jsxs("div",{style:{display:"grid",gap:12,maxWidth:420},children:[c.jsx($u,{coupon:e}),c.jsx($u,{coupon:n})]})}const Uv=Object.freeze(Object.defineProperty({__proto__:null,default:Iv,meta:Fv},Symbol.toStringTag,{value:"Module"})),Wv=M([te({stock:0}),Xe()]),Hv=M([te({stock:3,claim:async()=>(await new Promise(e=>setTimeout(e,500)),{ok:!0})}),Xe()]),Vv={slug:"limited",title:"限量 / 抢空",group:"advanced",intro:"stock ≤ 0 挂载即「已抢光」（终态）；有限库存正常领取。过期判定同理：expired 优先级低于已核销 used。"};function qv(){return c.jsxs("div",{style:{display:"grid",gap:12,maxWidth:420},children:[c.jsx(Wv,{coupon:{id:"l1",title:"已抢空的券",amount:100,threshold:999}}),c.jsx(Hv,{coupon:{id:"l2",title:"限量抢购中",amount:66,threshold:699}})]})}const Bv=Object.freeze(Object.defineProperty({__proto__:null,default:qv,meta:Vv},Symbol.toStringTag,{value:"Module"}));function Qv(e={}){const n=e.urgentPct??20,t=e.showRemaining??!0;return{name:"progress",version:"0.1.0",description:"领取进度条：按 total/claimed/stock 渲染已抢百分比进度条，剩余 ≤ N% 换紧迫色，数据轮询即刷新",priority:20,config:{slotPosition:"after",order:10,...e},hooks:{renderHeader:r=>{const l=os(r.coupon,{total:e.total,claimed:e.claimed,stock:e.stock});if(l.total===null||l.total<=0||l.claimed===null||l.claimed<0)return null;const i=l.percent??0,a=l.remaining??0,s=100-i<=n;let u=`已抢 ${i}%`;return l.soldout?u="已抢完":s&&t&&(u+=` · 仅剩 ${a} 张`),c.jsxs("div",{className:"vc-coupon__progress",style:{marginTop:10,fontSize:12,color:vp.color},"data-testid":"coupon-progress","data-percent":String(i),"data-urgent":s?"true":"false","data-soldout":l.soldout?"true":"false",children:[c.jsx("div",{style:{height:6,borderRadius:3,background:"#f2f3f5",overflow:"hidden"},children:c.jsx("div",{style:{width:`${i}%`,height:"100%",borderRadius:3,background:s?"#a54a00":"#d03050",transition:"width 0.3s ease"}})}),c.jsx("div",{style:{marginTop:4,color:s?"#a54a00":"#57606a"},children:u})]})}}}}const Kv="ProgressPlugin",Yv="领取进度条：按 total/claimed 渲染已抢百分比进度条，剩余 ≤ N% 换紧迫色，接口轮询数据刷新即更新。",Xv="0.1.0",Gv=["coupon","progress","stock","after"],Jv=[{name:"renderHeader",when:"每次渲染，券面头部槽位",description:"面额、券名、标签等券面主视觉"}],Zv=[],e0="只读取 context 字段（props / state / data），不调用上下文方法",n0=[{name:"total",type:"number",default:"coupon.total",description:"发放总量"},{name:"claimed",type:"number",default:"coupon.claimed",description:"已领取数"},{name:"stock",type:"number",default:"-",description:"剩余库存（宿主侧权威值）；≤ 0 与 claimed ≥ total 取并集判售罄"},{name:"urgentPct",type:"number",default:"20",description:"剩余 ≤ N% 标记紧迫"},{name:"showRemaining",type:"boolean",default:"true",description:"展示「仅剩 N 张」替代百分比"}],t0=["进度条宽度随 claimed/total 变化（claimed 超过 total 时封顶 100%）","紧迫色 #a54a00（对比度 5.6:1）","售罄判定与 ClaimStatePlugin 共用 resolveStock：任一条件成立即写「已抢完」并标记 data-soldout","无 total / claimed 等可判定数据时不渲染（不臆测进度）"],o0=["限量抢购券","发券预算监控"],r0="const Coupon = createCouponCard([createProgressPlugin({ urgentPct: 20 })]);",Np={name:Kv,description:Yv,since:Xv,tags:Gv,events:Jv,methods:Zv,methodsNote:e0,config:n0,features:t0,useCases:o0,example:r0},lt=Object.assign(Qv,{meta:Np}),l0=M([lt()]),i0=M([lt({urgentPct:30})]),a0=M([lt()]),s0={slug:"progress",title:"抢购进度条",group:"plugin",intro:"total/claimed 驱动进度条与「已抢 X%」；剩余占比低于 urgentPct（默认 20）转紧迫色并追加「仅剩 N 张」；抢完后显示「已抢完」。"};function u0(){return c.jsxs("div",{style:{display:"grid",gap:12,maxWidth:420},children:[c.jsx(l0,{coupon:{id:"pg1",title:"常规进度 · 30/100",amount:10,threshold:0,total:100,claimed:30}}),c.jsx(i0,{coupon:{id:"pg2",title:"紧迫进度 · 85/100（urgentPct 30）",amount:50,threshold:299,total:100,claimed:85}}),c.jsx(a0,{coupon:{id:"pg3",title:"已抢完 · 100/100",amount:10,threshold:0,total:100,claimed:100}})]})}const c0=Object.freeze(Object.defineProperty({__proto__:null,default:u0,meta:s0},Symbol.toStringTag,{value:"Module"}));function d0(e={}){const n={slotPosition:"after",order:10,...e},t=r=>{var l;return ts(r.coupon,{quota:e.quota,purchasedCount:e.purchasedCount??((l=r.order)==null?void 0:l.purchasedCount)})},o=r=>{var s,u;const{quota:l,reached:i}=t(r);((s=r.state)==null?void 0:s.quotaReached)===!0!==i&&r.setState({quotaReached:i}),i&&l!==null&&((u=e.onExceed)==null||u.call(e,l))};return{name:"quota",version:"0.1.0",description:"每人限领：读 coupon.quota 与已领数渲染限领提示，超限写 state.quotaReached 供领取按钮门控",priority:19,config:n,hooks:{onMount:r=>{o(r)},onPropsChange:r=>{o(r)},renderHeader:r=>{const{quota:l,purchased:i,reached:a}=t(r);return l===null?null:c.jsxs("div",{style:{marginTop:10,fontSize:12,padding:"4px 8px",borderRadius:4,background:a?"#fff1f0":"#f6ffed",color:a?"#b32d08":"#237a06",border:`1px solid ${a?"#ffa39e":"#b7eb8f"}`},"data-testid":"coupon-quota","data-reached":a?"true":"false",children:["每人限领 ",l," 张（已领 ",i,"）",a?" · 已达限领上限":""]})}}}}const p0="QuotaPlugin",f0="每人限领：读 coupon.quota 与已领数渲染限领提示，超限写 state.quotaReached 并被领取按钮实际读取（quota-limited 门控）。",m0="0.1.0",g0=["coupon","quota","limit","after"],h0=[{name:"onMount",when:"券组件挂载完成、插件注册后执行一次",description:"初始化副作用，可返回清理函数"},{name:"onPropsChange",when:"宿主 props 变化后（回传 prev / next 两份）",description:"按新旧 props 差分决定是否重算内部状态，避免无差别刷新"},{name:"renderHeader",when:"每次渲染，券面头部槽位",description:"面额、券名、标签等券面主视觉"}],y0=[],v0="只读取 context 字段（props / state / data），不调用上下文方法",x0=[{name:"quota",type:"number",default:"coupon.quota",description:"每人限领张数"},{name:"purchasedCount",type:"number",default:"order.purchasedCount ?? 0",description:"当前用户已领张数"},{name:"onExceed",type:"(quota: number) => void",default:"-",description:"超限回调（入参为生效的限领张数）"}],C0=["未声明 quota 视为不限领（渲染 null）","超限提示条红字","state.quotaReached 只有值变化时才写（避免父渲染空转）","ClaimStatePlugin 复用 resolveQuota 同一口径，超限时按钮进入 quota-limited（非终态，已领数下调后恢复）"],S0=["每人限领 N 张的活动券","会员等级限领"],w0="const Coupon = createCouponCard([createQuotaPlugin({ purchasedCount: 1 })]);",$p={name:p0,description:f0,since:m0,tags:g0,events:h0,methods:y0,methodsNote:v0,config:x0,features:C0,useCases:S0,example:w0},it=Object.assign(d0,{meta:$p}),P0=M([it({quota:3,purchasedCount:1,onExceed:()=>console.warn("[quota] 超限")})]),k0=M([it({quota:2,purchasedCount:2,onExceed:e=>console.warn("[quota] 已达上限",e)})]),_0={slug:"quota",title:"限领提示",group:"plugin",intro:"config.quota + purchasedCount 驱动限领提示条：未超限绿字「还可领 N 张」，超限红字「已达限领上限」并触发 onExceed；未声明 quota 时插件不渲染。"};function E0(){return c.jsxs("div",{style:{display:"grid",gap:12,maxWidth:420},children:[c.jsx(P0,{coupon:{id:"qt1",title:"还可领 · 1/3",amount:15,threshold:99}}),c.jsx(k0,{coupon:{id:"qt2",title:"已超限 · 2/2",amount:15,threshold:99}})]})}const j0=Object.freeze(Object.defineProperty({__proto__:null,default:E0,meta:_0},Symbol.toStringTag,{value:"Module"})),T0=e=>{const n=Math.max(0,Math.ceil(e/1e3)),t=String(Math.floor(n/3600)).padStart(2,"0"),o=String(Math.floor(n%3600/60)).padStart(2,"0"),r=String(n%60).padStart(2,"0");return`${t}:${o}:${r}`};function N0(e){const n=e.tickMs??1e3;return{name:"countdown",version:"0.1.0",description:"开抢倒计时：startAt 未到时渲染「距开抢 HH:MM:SS」，到点可自动开抢（autoStart）并触发 onFire",priority:15,config:{slotPosition:"before",order:10,...e},hooks:{onMount:o=>{const r=()=>{var a,s;const i=e.startAt-Date.now();o.setState({countdown:Math.max(0,i)}),i>0?((a=e.onCountdown)==null||a.call(e,i),l=window.setTimeout(r,n)):((s=e.onFire)==null||s.call(e),e.autoStart&&o.setPhase("available"))};let l=window.setTimeout(r,0);return()=>window.clearTimeout(l)},renderHeader:o=>{var l;const r=(l=o.state)==null?void 0:l.countdown;return typeof r!="number"||r<=0?null:c.jsx("div",{style:Xr,"data-testid":"coupon-countdown",children:c.jsxs("span",{style:{...gp,background:"#fff7e6",color:"#a54a00",border:"1px solid #ffd591",fontFamily:"var(--ff-mono, monospace)"},"data-testid":"coupon-countdown-value",children:["距开抢 ",T0(r)]})})}}}}const $0="CountdownPlugin",R0="开抢倒计时：startAt 未到时渲染「距开抢 HH:MM:SS」，到点可自动开抢（autoStart）并触发 onFire。",D0="0.1.0",b0=["coupon","countdown","timer","before"],M0=[{name:"onMount",when:"券组件挂载完成、插件注册后执行一次",description:"初始化副作用，可返回清理函数"},{name:"renderHeader",when:"每次渲染，券面头部槽位",description:"面额、券名、标签等券面主视觉"}],O0=[{name:"setPhase",signature:"ctx.setPhase(phase: CouponPhase): void",description:"写入业务相位（写入即触发 context 重建与视图切换）"}],L0=[{name:"startAt",type:"number",default:"-",description:"开抢时间（epoch ms），必填"},{name:"autoStart",type:"boolean",default:"false",description:"到点自动进入 available"},{name:"tickMs",type:"number",default:"1000",description:"定时精度"},{name:"onCountdown",type:"(remainingMs: number) => void",default:"-",description:"每跳回调"},{name:"onFire",type:"() => void",default:"-",description:"倒计时归零回调"}],z0=["onMount 挂 setTimeout 链（返回 cleanup，内核逆序执行）","剩余写内核 state.countdown","与 RemindPlugin 配合覆盖「未开始」全场景"],A0=["定时开抢活动","整点发券"],F0="const Coupon = createCouponCard([createCountdownPlugin({ startAt: Date.parse('2026-11-01T10:00:00'), autoStart: true })]);",Rp={name:$0,description:R0,since:D0,tags:b0,events:M0,methods:O0,config:L0,features:z0,useCases:A0,example:F0},At=Object.assign(N0,{meta:Rp}),I0=M([At({startAt:Date.now()+2e4,tickMs:1e3,autoStart:!0,onFire:()=>console.log("[countdown] 开抢！")})]),U0={slug:"countdown",title:"开抢倒计时",group:"plugin",intro:"startAt 未到时渲染「距开抢 HH:MM:SS」；到点 autoStart 自动进入 available（本页 20 秒后开抢），并触发 onFire。"};function W0(){return c.jsx("div",{style:{display:"grid",gap:12,maxWidth:420},children:c.jsx(I0,{coupon:{id:"cd1",title:"20 秒后自动开抢",amount:30,threshold:199}})})}const H0=Object.freeze(Object.defineProperty({__proto__:null,default:W0,meta:U0},Symbol.toStringTag,{value:"Module"}));function V0(e={}){return{name:"channel",version:"0.1.0",description:"渠道限定角标：按 coupon.channels / config.channels 渲染一组渠道小标",priority:14,config:{slotPosition:"before",order:20,...e},hooks:{renderHeader:t=>{const o=e.channels??t.coupon.channels;return!o||o.length===0?null:c.jsx("div",{style:Xr,"data-testid":"coupon-channels",children:o.map((r,l)=>c.jsx("span",{style:hp,"data-testid":"coupon-channel-badge",children:r},`${r}-${l}`))})}}}}const q0="ChannelPlugin",B0="渠道限定角标：按 coupon.channels / config.channels 渲染一组渠道小标（仅 APP / 仅新客…）。",Q0="0.1.0",K0=["coupon","channel","badge","before"],Y0=[{name:"renderHeader",when:"每次渲染，券面头部槽位",description:"面额、券名、标签等券面主视觉"}],X0=[],G0="只读取 context 字段（props / state / data），不调用上下文方法",J0=[{name:"channels",type:"string[]",default:"coupon.channels",description:"渠道标签列表"}],Z0=["多渠道并列渲染","与 StackPlugin 同占 before 槽（order 20 排后）"],ex=["仅 APP 领取","新客专享"],nx='const Coupon = createCouponCard([createChannelPlugin({ channels: ["仅 APP"] })]);',Dp={name:q0,description:B0,since:Q0,tags:K0,events:Y0,methods:X0,methodsNote:G0,config:J0,features:Z0,useCases:ex,example:nx},Fo=Object.assign(V0,{meta:Dp}),tx=M([Fo()]),ox=M([Fo({channels:["会员专享","限领 1 次"]})]),rx={slug:"channel",title:"渠道小标",group:"plugin",intro:"渠道灰标组：coupon.channels 数据驱动与 config.channels 配置驱动双通道，config 优先；渲染在 before 槽、排在叠加标之后。"};function lx(){return c.jsxs("div",{style:{display:"grid",gap:12,maxWidth:420},children:[c.jsx(tx,{coupon:{id:"ch1",title:"数据驱动渠道",amount:10,threshold:0,channels:["仅 APP","仅新客"]}}),c.jsx(ox,{coupon:{id:"ch2",title:"配置驱动渠道",amount:20,threshold:99}})]})}const ix=Object.freeze(Object.defineProperty({__proto__:null,default:lx,meta:rx},Symbol.toStringTag,{value:"Module"}));function ax(e={}){const n=e.text??"分享好友";return{name:"share",version:"0.1.0",description:"分享按钮：footer 槽渲染次按钮，分享能力由 onShare 回调提供",priority:31,config:{slotPosition:"after",order:10,...e},hooks:{renderFooter:o=>{if(!e.onShare)return null;const r=async()=>{var l;await((l=e.onShare)==null?void 0:l.call(e,o.coupon)),o.forceUpdate()};return c.jsx("div",{style:Za,children:c.jsx("button",{type:"button",style:es,"data-testid":"coupon-share-btn",onClick:()=>void r(),children:n})})}}}}const sx="SharePlugin",ux="分享按钮：footer 槽渲染次按钮，分享能力由 onShare 回调提供；未配置 onShare 不渲染。",cx="0.1.0",dx=["coupon","share","footer"],px=[{name:"renderFooter",when:"每次渲染，券面底部槽位",description:"有效期、使用门槛、领取 / 使用按钮"}],fx=[],mx="只读取 context 字段（props / state / data），不调用上下文方法",gx=[{name:"text",type:"string",default:'"分享好友"',description:"按钮文案"},{name:"onShare",type:"() => void | Promise<void>",default:"-",description:"分享回调（必配才渲染）"}],hx=["muted 次按钮样式，排在领取按钮下方","onShare 后 forceUpdate 刷新闭包状态"],yx=["分享裂变领券","好友代领"],vx="const Coupon = createCouponCard([createSharePlugin({ onShare: () => tracker.share() })]);",bp={name:sx,description:ux,since:cx,tags:dx,events:px,methods:fx,methodsNote:mx,config:gx,features:hx,useCases:yx,example:vx},hl=Object.assign(ax,{meta:bp}),xx=M([hl({onShare:e=>console.log("[share]",e.id)})]),Cx={slug:"share",title:"分享按钮",group:"plugin",intro:"footer 槽次按钮：配置 onShare 才渲染，点击触发回调；未配置 onShare 时插件不渲染。"};function Sx(){return c.jsx("div",{style:{display:"grid",gap:12,maxWidth:420},children:c.jsx(xx,{coupon:{id:"sh1",title:"点右下角分享这张券",amount:25,threshold:99}})})}const wx=Object.freeze(Object.defineProperty({__proto__:null,default:Sx,meta:Cx},Symbol.toStringTag,{value:"Module"}));function Px(e={}){const n=e.text??"开抢提醒",t=e.remindedText??"已设提醒 ✓";return{name:"remind",version:"0.1.0",description:"开抢提醒：未开抢（idle / 倒计时中 / validFrom 未到）渲染提醒开关，开关态写内核 state.reminded",priority:30,config:{slotPosition:"after",order:10,...e},hooks:{renderFooter:r=>{var u,p,f;const l=(u=r.state)==null?void 0:u.countdown;if(!(r.phase==="idle"||typeof l=="number"&&l>0||((p=r.validity)==null?void 0:p.notStarted)===!0))return null;const a=((f=r.state)==null?void 0:f.reminded)===!0,s=async()=>{var m;r.setState({reminded:!a}),(m=e.onRemind)==null||m.call(e,!a)};return c.jsx("div",{style:Za,children:c.jsx("button",{type:"button",style:es,"data-testid":"coupon-remind-btn","data-on":a?"true":"false","aria-pressed":a,onClick:()=>void s(),children:a?t:n})})}}}}const kx="RemindPlugin",_x="开抢提醒：未开抢（idle / 倒计时中 / validFrom 未到）渲染提醒开关，开关态写内核 state.reminded，可被宿主复位。",Ex="0.1.0",jx=["coupon","remind","footer"],Tx=[{name:"renderFooter",when:"每次渲染，券面底部槽位",description:"有效期、使用门槛、领取 / 使用按钮"}],Nx=[],$x="只读取 context 字段（props / state / data），不调用上下文方法",Rx=[{name:"text",type:"string",default:'"开抢提醒"',description:"未提醒文案"},{name:"remindedText",type:"string",default:'"已设提醒 ✓"',description:"已提醒文案"},{name:"onRemind",type:"(on: boolean) => void",default:"-",description:"提醒开关回调"}],Dx=["渲染条件：phase === idle，或 CountdownPlugin 的 state.countdown > 0，或 validity.notStarted","aria-pressed 无障碍开关语义"],bx=["定时开抢前预约提醒","补货提醒"],Mx=['当前 plugin-core 的 footer 槽按 position "after" 过滤，config.slotPosition 暂保持 after（元数据与真实槽位的统一待内核支持）。'],Ox="const Coupon = createCouponCard([createRemindPlugin({ onRemind: (on) => api.setReminder(on) })]);",Mp={name:kx,description:_x,since:Ex,tags:jx,events:Tx,methods:Nx,methodsNote:$x,config:Rx,features:Dx,useCases:bx,notes:Mx,example:Ox},rs=Object.assign(Px,{meta:Mp}),Lx=M([rs({onRemind:e=>console.log("[remind]",e?"已设提醒":"已取消提醒")}),At({startAt:Date.now()+36e5})]),zx={slug:"remind",title:"开抢提醒",group:"plugin",intro:"仅 idle（未开抢）相位渲染「开抢提醒」开关（aria-pressed），切换写 state.reminded 并触发 onRemind；开抢后自动消失。"};function Ax(){return c.jsx("div",{style:{display:"grid",gap:12,maxWidth:420},children:c.jsx(Lx,{coupon:{id:"rm1",title:"1 小时后开抢 · 可设提醒",amount:40,threshold:299}})})}const Fx=Object.freeze(Object.defineProperty({__proto__:null,default:Ax,meta:zx},Symbol.toStringTag,{value:"Module"})),pr="copy-code:timer",Kt="copy-code:mounted",Ix=1600;function bu(e){try{const n=document.createElement("textarea");n.value=e,n.setAttribute("readonly",""),n.style.position="fixed",n.style.opacity="0",document.body.appendChild(n),n.select();const t=typeof document.execCommand=="function"?document.execCommand("copy"):!1;return document.body.removeChild(n),t}catch{return!1}}function Ux(e={}){const n=e.label??"券码",t={slotPosition:"after",order:10,...e},o=r=>{const l=r.shared.get(pr);l!==void 0&&(window.clearTimeout(l),r.shared.delete(pr))};return{name:"copy-code",version:"0.1.0",description:"券码复制：claimed/used 相位展示券码与复制按钮（clipboard API + execCommand 兜底），结果写 state.codeCopied，失败经 onError 上报",priority:18,config:t,hooks:{onMount:r=>{r.shared.set(Kt,!0)},onUnmount:r=>{r.shared.set(Kt,!1),o(r),r.shared.delete(Kt)},renderHeader:r=>{var u;const l=r.phase;if(l!=="claimed"&&l!=="used")return null;const i=e.code??r.coupon.code;if(!i)return null;const a=((u=r.state)==null?void 0:u.codeCopied)===!0,s=async()=>{var y,x,C;let p=!1,f;if((y=navigator.clipboard)!=null&&y.writeText)try{await navigator.clipboard.writeText(i),p=!0}catch{p=bu(i),p||(f="clipboard-unavailable")}else p=bu(i),p||(f="clipboard-unavailable");if(r.shared.get(Kt)!==!0)return;r.setState({codeCopied:p}),p?(x=e.onCopied)==null||x.call(e,i):(C=e.onError)==null||C.call(e,f),o(r);const m=window.setTimeout(()=>{r.shared.delete(pr),r.shared.get(Kt)===!0&&r.setState({codeCopied:!1})},Ix);r.shared.set(pr,m)};return c.jsxs("div",{style:{display:"flex",alignItems:"center",gap:8,marginTop:10,fontSize:12},"data-testid":"coupon-code-area",children:[c.jsx("span",{style:yp,children:n}),c.jsx("code",{style:{fontFamily:"var(--ff-mono, monospace)",fontSize:12,padding:"2px 8px",borderRadius:4,background:"#f2f3f5",color:"#1f2328",border:"1px solid #e8eaed"},"data-testid":"coupon-code",children:i}),c.jsx("button",{type:"button",style:{padding:"2px 10px",fontSize:11,borderRadius:4,border:"1px solid #e8eaed",background:"#fff",color:"#1a66c2",cursor:"pointer",fontFamily:"inherit"},"data-testid":"coupon-copy-btn","data-copied":a?"true":"false",onClick:()=>void s(),children:a?"已复制":"复制"})]})}}}}const Wx="CopyCodePlugin",Hx="券码复制：claimed/used 相位展示券码与复制按钮（clipboard API + execCommand 兜底），结果写 state.codeCopied。",Vx="0.1.0",qx=["coupon","code","clipboard","after"],Bx=[{name:"onMount",when:"券组件挂载完成、插件注册后执行一次",description:"初始化副作用，可返回清理函数"},{name:"onUnmount",when:"组件卸载前执行一次",description:"释放监听、定时器与观察器；与 onMount 成对出现，避免泄漏"},{name:"renderHeader",when:"每次渲染，券面头部槽位",description:"面额、券名、标签等券面主视觉"}],Qx=[],Kx="只读取 context 字段（props / state / data），不调用上下文方法",Yx=[{name:"code",type:"string",default:"coupon.code",description:"券码"},{name:"label",type:"string",default:'"券码"',description:"标签文案"},{name:"onCopied",type:"(code: string) => void",default:"-",description:"复制成功回调"},{name:"onError",type:"(reason?: string) => void",default:"-",description:"复制失败回调（clipboard 与 execCommand 均失败时触发，reason 为 clipboard-unavailable）"}],Xx=["claimed/used 之外的相位渲染 null","http 内网环境 execCommand 兜底（对齐 CodeBlock 的复制策略），两条路径都失败时经 onError 上报","1.6s 后自动还原按钮文案；连续点击先清旧定时器，卸载时统一清理"],Gx=["口令券","线下核销码"],Jx="const Coupon = createCouponCard([createCopyCodePlugin({ onCopied: (code) => tracker.copy(code) })]);",Op={name:Wx,description:Hx,since:Vx,tags:qx,events:Bx,methods:Qx,methodsNote:Kx,config:Yx,features:Xx,useCases:Gx,example:Jx},Io=Object.assign(Ux,{meta:Op}),Zx=M([Io({code:"SAVE-2026"}),te({claim:async()=>(await new Promise(e=>setTimeout(e,400)),{ok:!0})})]),eC={slug:"copy-code",title:"券码复制",group:"plugin",intro:"claimed/used 相位展示券码与复制按钮（clipboard API + execCommand 兜底），复制后 1.6 秒自动还原；available 相位不渲染。"};function nC(){return c.jsx("div",{style:{display:"grid",gap:12,maxWidth:420},children:c.jsx(Zx,{coupon:{id:"cc1",title:"先领取，再看券码复制",amount:20,threshold:99}})})}const tC=Object.freeze(Object.defineProperty({__proto__:null,default:nC,meta:eC},Symbol.toStringTag,{value:"Module"})),oC=e=>{const n=new Date(e),t=o=>String(o).padStart(2,"0");return`${n.getFullYear()}.${t(n.getMonth()+1)}.${t(n.getDate())}`};function rC(e={}){const n=e.max??3,t=e.format??oC;return{name:"history",version:"0.1.0",description:"领取记录：按 coupon.history / config.records 倒序渲染最近 N 条领取/使用记录",priority:17,config:{slotPosition:"after",order:10,...e},hooks:{renderHeader:r=>{const l=e.records??r.coupon.history;if(!l||l.length===0)return null;const i=[...l].sort((a,s)=>s.at-a.at).slice(0,n);return c.jsxs("div",{style:{marginTop:10,fontSize:12},"data-testid":"coupon-history",children:[c.jsx("div",{style:xp,children:"领取记录"}),c.jsx("ul",{style:Cp,children:i.map((a,s)=>c.jsxs("li",{style:Sp,"data-testid":`coupon-history-item-${s}`,children:[c.jsx("span",{style:{color:"#57606a"},children:t(a.at)})," · ",a.action]},`${a.at}-${s}`))})]})}}}}const lC="HistoryPlugin",iC="领取记录：按 coupon.history / config.records 倒序渲染最近 N 条领取/使用记录。",aC="0.1.0",sC=["coupon","history","after"],uC=[{name:"renderHeader",when:"每次渲染，券面头部槽位",description:"面额、券名、标签等券面主视觉"}],cC=[],dC="只读取 context 字段（props / state / data），不调用上下文方法",pC=[{name:"records",type:"{ at: number; action: string }[]",default:"coupon.history",description:"记录列表，at 为 epoch ms"},{name:"max",type:"number",default:"3",description:"最多展示条数"},{name:"format",type:"(at: number) => string",default:"YYYY.MM.DD",description:"时间格式化"}],fC=["按时间倒序","空记录渲染 null","复用规则区的列表样式"],mC=["多批次领取记录","核销流水展示"],gC="const Coupon = createCouponCard([createHistoryPlugin({ max: 5 })]);",Lp={name:lC,description:iC,since:aC,tags:sC,events:uC,methods:cC,methodsNote:dC,config:pC,features:fC,useCases:mC,example:gC},Uo=Object.assign(rC,{meta:Lp}),hC=M([Uo({max:3})]),yC=M([Uo()]),vC={slug:"history",title:"领取记录",group:"plugin",intro:"coupon.history（{at, action}[]）按时间倒序渲染最近 max（默认 3）条；无记录时插件不渲染。"};function xC(){const e=Date.now();return c.jsxs("div",{style:{display:"grid",gap:12,maxWidth:420},children:[c.jsx(hC,{coupon:{id:"hs1",title:"最近 3 条记录",amount:10,threshold:0,history:[{at:e-864e5,action:"领取成功"},{at:e-36e5,action:"已使用"},{at:e-6e4,action:"再次领取"},{at:e-1e3,action:"这条超出 max 不会显示"}]}}),c.jsx(yC,{coupon:{id:"hs2",title:"无记录 · 不渲染",amount:5,threshold:0}})]})}const CC=Object.freeze(Object.defineProperty({__proto__:null,default:xC,meta:vC},Symbol.toStringTag,{value:"Module"}));function SC(e={}){const n=(t,o,r)=>{var l;t.bus.emit(o,r),t.bus.emit("coupon:analytics",{event:o,...r}),(l=e.onEvent)==null||l.call(e,o,r)};return{name:"analytics",version:"0.1.0",description:"券埋点：coupon:mount / coupon:claim / coupon:error 三类事件，回调与总线 coupon:analytics 双通道，自身不渲染 UI",priority:90,config:{},hooks:{onMount:t=>{n(t,"coupon:mount",{couponId:t.coupon.id,phase:t.phase})},onPhaseChange:(t,o)=>{n(t,"coupon:claim",{couponId:t.coupon.id,phase:o})},onError:(t,o)=>{n(t,"coupon:error",{couponId:t.coupon.id,message:String(o)})}}}}const wC="AnalyticsPlugin",PC="券埋点：coupon:mount / coupon:claim / coupon:error 三类事件，回调与总线 coupon:analytics 双通道，自身不渲染 UI。",kC="0.1.0",_C=["coupon","analytics","event"],EC=[{name:"onMount",when:"券组件挂载完成、插件注册后执行一次",description:"初始化副作用，可返回清理函数"},{name:"onError",when:"任一插件钩子抛错、被沙箱隔离之后",description:"上报或降级处理错误；自身抛错不会影响其他插件"},{name:"onPhaseChange",when:"券相位变化后（如 available → used / expired）",description:"相位切换时的副作用：埋点、提示、动效"},{name:"coupon:analytics",when:"曝光 / 领取 / 使用等动作发生时",description:"统一埋点出口 { event, ...payload }"}],jC=[],TC="只读取 context 字段（props / state / data），不调用上下文方法",NC=[{name:"onEvent",type:"(event: string, payload: Record<string, unknown>) => void",default:"-",description:"埋点回调（与总线双通道）"}],$C=["priority 90 事件链最前","couponId + phase 随事件上报","对齐 vane-sku Analytics 的双通道约定"],RC=["领券转化漏斗","A/B 实验埋点"],DC="const Coupon = createCouponCard([createAnalyticsPlugin({ onEvent: (e, p) => tracker.send(e, p) })]);",zp={name:wC,description:PC,since:kC,tags:_C,events:EC,methods:jC,methodsNote:TC,config:NC,features:$C,useCases:RC,example:DC},ls=Object.assign(SC,{meta:zp}),bC=M([ls({onEvent:e=>console.log("[analytics 回调]",e)})]),MC={slug:"analytics",title:"行为埋点",group:"plugin",intro:"无 UI 插件：mount / 领取 / 异常三类事件双通道上报（onEvent 回调 + bus.emit，事件名 coupon:mount / coupon:claim / coupon:error，另有 coupon:analytics 包装通道）。打开控制台看输出。"};function OC(){return c.jsx("div",{style:{display:"grid",gap:12,maxWidth:420},children:c.jsx(bC,{coupon:{id:"an1",title:"挂载即上报 coupon:mount",amount:10,threshold:0}})})}const LC=Object.freeze(Object.defineProperty({__proto__:null,default:OC,meta:MC},Symbol.toStringTag,{value:"Module"}));function zC(e={}){const n=e.text??"查看完整规则";return{name:"detail-link",version:"0.1.0",description:"完整规则链接：href 渲染 <a>、onDetail 渲染 <button>，落在规则区下方",priority:16,config:{slotPosition:"after",order:10,...e},hooks:{renderHeader:o=>{if(!e.href&&!e.onDetail)return null;const r={marginTop:6,padding:0,border:0,background:"none",fontSize:12,color:wp.color,cursor:"pointer",fontFamily:"inherit",textDecoration:"underline",textUnderlineOffset:2};return e.href?c.jsx("div",{style:{marginTop:6},children:c.jsxs("a",{href:e.href,target:"_blank",rel:"noreferrer",style:r,"data-testid":"coupon-detail-link",children:[n," ›"]})}):c.jsx("div",{style:{marginTop:6},children:c.jsxs("button",{type:"button",style:r,"data-testid":"coupon-detail-link",onClick:()=>{var l;return(l=e.onDetail)==null?void 0:l.call(e)},children:[n," ›"]})})}}}}const AC="DetailLinkPlugin",FC="完整规则链接：href 渲染 <a>、onDetail 渲染 <button>，落在规则区下方。",IC="0.1.0",UC=["coupon","link","after"],WC=[{name:"renderHeader",when:"每次渲染，券面头部槽位",description:"面额、券名、标签等券面主视觉"}],HC=[],VC="只读取 context 字段（props / state / data），不调用上下文方法",qC=[{name:"href",type:"string",default:"-",description:"详情页链接（有则渲染 <a>）"},{name:"text",type:"string",default:'"查看完整规则"',description:"链接文案"},{name:"onDetail",type:"() => void",default:"-",description:"点击回调（无 href 时渲染 <button>）"}],BC=["href 与 onDetail 都未配置渲染 null","下划线 + › 视觉与规则区衔接"],QC=["规则详情页跳转","弹层查看完整规则"],KC="const Coupon = createCouponCard([createDetailLinkPlugin({ href: '/help/coupon-rules' })]);",Ap={name:AC,description:FC,since:IC,tags:UC,events:WC,methods:HC,methodsNote:VC,config:qC,features:BC,useCases:QC,example:KC},Wo=Object.assign(zC,{meta:Ap}),YC=M([Wo({href:"/help/coupon-rules"})]),XC=M([Wo({onDetail:()=>console.log("[detail] 打开详情弹层")})]),GC={slug:"detail-link",title:"详情入口",group:"plugin",intro:'after 槽文字链：配 href 渲染 <a target="_blank">，配 onDetail 渲染 <button>，两者都没有则不渲染；色值复用规则展开开关的同款链接色。'};function JC(){return c.jsxs("div",{style:{display:"grid",gap:12,maxWidth:420},children:[c.jsx(YC,{coupon:{id:"dl1",title:"href 跳转形态",amount:10,threshold:0}}),c.jsx(XC,{coupon:{id:"dl2",title:"onDetail 回调形态",amount:20,threshold:99}})]})}const ZC=Object.freeze(Object.defineProperty({__proto__:null,default:JC,meta:GC},Symbol.toStringTag,{value:"Module"})),e1=`import React from "react";
import { CouponCard } from "vane-coupon";

export const meta = {
  slug: "quickstart",
  title: "裸券 · 零插件",
  group: "basic" as const,
  intro: "不装任何插件：面额区（¥ / 折）+ 门槛 + 标题，这就是核心组件本体的全部。",
};

export default function QuickstartDemo() {
  return (
    <div style={{ display: "grid", gap: 12, maxWidth: 420 }}>
      <CouponCard
        coupon={{ id: "c1", title: "新人专享券", amount: 10, threshold: 99 }}
      />
      <CouponCard
        coupon={{
          id: "c2",
          title: "服饰品类折扣券",
          amount: 8.5,
          amountType: "discount",
          threshold: 0,
        }}
      />
      <CouponCard
        coupon={{
          id: "c3",
          title: "自定义门槛文案",
          amount: 30,
          thresholdText: "限下单实物商品",
        }}
      />
    </div>
  );
}
`,n1=`import React from "react";
import { createCouponCard } from "vane-coupon";
import type { CouponData } from "vane-coupon";
import { createClaimStatePlugin } from "vane-coupon/custom-plugins/ClaimStatePlugin";

/**
 * 装配工厂在模块顶层调用（渲染体内调用会每次渲染造新实例，重挂载丢状态）。
 */
const ClaimCoupon = createCouponCard([
  createClaimStatePlugin({
    claim: async () => {
      await new Promise((r) => setTimeout(r, 600));
      return { ok: true };
    },
  }),
]);

const FailCoupon = createCouponCard([
  createClaimStatePlugin({
    claim: async () => {
      await new Promise((r) => setTimeout(r, 600));
      return { ok: false, reason: "超出限领数量" };
    },
    onClaimError: (reason) => console.warn("[claim 失败]", reason),
  }),
]);

export const meta = {
  slug: "claim-state",
  title: "领取状态机",
  group: "basic" as const,
  intro:
    "点击领取：available → claiming → claimed。第二张卡模拟领取失败，回退 available（终态 used/soldout/expired 不再响应点击）。",
};

export default function ClaimStateDemo() {
  return (
    <div style={{ display: "grid", gap: 12, maxWidth: 420 }}>
      <ClaimCoupon
        coupon={{ id: "cs1", title: "点击领取试试 · 成功流", amount: 20, threshold: 199 } as CouponData}
      />
      <FailCoupon
        coupon={{ id: "cs2", title: "点击领取试试 · 失败回退流", amount: 5, threshold: 0 } as CouponData}
      />
    </div>
  );
}
`,t1=`import React from "react";
import { createCouponCard } from "vane-coupon";
import { createClaimStatePlugin } from "vane-coupon/custom-plugins/ClaimStatePlugin";
import { createValidityPlugin } from "vane-coupon/custom-plugins/ValidityPlugin";

const DAY = 24 * 60 * 60 * 1000;
const NOW = Date.now();

/** 紧迫：还剩 2 天（≤ urgentDays 3） */
const UrgentCoupon = createCouponCard([
  createValidityPlugin({ urgentDays: 3 }),
  createClaimStatePlugin({ claim: async () => ({ ok: true }) }),
]);

/** 已过期：validTo 在过去 → 有效期行打「已过期」，状态机联动降级 expired */
const ExpiredCoupon = createCouponCard([
  createValidityPlugin(),
  createClaimStatePlugin({ claim: async () => ({ ok: true }) }),
]);

/** 相对有效期：未领取时显示「领取后 N 天内有效」，领取后从 claimedAt 起算 */
const RelativeCoupon = createCouponCard([
  createValidityPlugin(),
  createClaimStatePlugin({ claim: async () => ({ ok: true }) }),
]);

export const meta = {
  slug: "validity",
  title: "有效期判定",
  group: "plugin" as const,
  intro:
    "绝对（validFrom/validTo）与相对（领取后 N 天）双模式；紧迫态强调展示；过期的券会被状态机自动压到「已过期」。",
};

export default function ValidityDemo() {
  return (
    <div style={{ display: "grid", gap: 12, maxWidth: 420 }}>
      <UrgentCoupon
        coupon={{
          id: "v1",
          title: "紧迫态 · 仅剩 2 天",
          amount: 15,
          threshold: 99,
          validFrom: NOW - 10 * DAY,
          validTo: NOW + 2 * DAY,
        }}
      />
      <ExpiredCoupon
        coupon={{
          id: "v2",
          title: "过期联动 · 按钮自动变已过期",
          amount: 50,
          threshold: 299,
          validTo: NOW - 1 * DAY,
        }}
      />
      <RelativeCoupon
        coupon={{
          id: "v3",
          title: "相对有效期 · 领取后 7 天",
          amount: 8,
          threshold: 0,
          validDays: 7,
        }}
      />
    </div>
  );
}
`,o1=`import React from "react";
import { createCouponCard } from "vane-coupon";
import { createRuleExpandPlugin } from "vane-coupon/custom-plugins/RuleExpandPlugin";

const RULES = [
  "本券仅限平台在售自营商品使用",
  "不与店铺优惠券叠加，可与运费券叠加",
  "订单部分退款时，按比例退回券面金额",
  "单笔订单最多使用 1 张，核销后不找零",
  "如在有效期内未使用，券自动作废且不予补发",
];

const Fold1 = createCouponCard([createRuleExpandPlugin({ collapsedCount: 1 })]);
const Fold2 = createCouponCard([
  createRuleExpandPlugin({ collapsedCount: 2, title: "" }),
]);

export const meta = {
  slug: "rules",
  title: "规则展开 / 收起",
  group: "plugin" as const,
  intro:
    "按条数折叠（不是 line-clamp——tasks/28 证明那是纵向裁切重灾区）。点击展开/收起，展开态写内核 state。",
};

export default function RulesDemo() {
  return (
    <div style={{ display: "grid", gap: 12, maxWidth: 420 }}>
      <Fold1
        coupon={{
          id: "r1",
          title: "默认折叠 1 条",
          amount: 25,
          threshold: 199,
          rules: RULES,
        }}
      />
      <Fold2
        coupon={{
          id: "r2",
          title: "折叠 2 条 · 无标题",
          amount: 60,
          threshold: 399,
          rules: RULES,
        }}
      />
    </div>
  );
}
`,r1=`import React from "react";
import { createCouponCard } from "vane-coupon";
import { createStackPlugin } from "vane-coupon/custom-plugins/StackPlugin";

const StackableCoupon = createCouponCard([createStackPlugin()]);
const NotStackableCoupon = createCouponCard([
  createStackPlugin({ showWhenNotStackable: true }),
]);
const ForcedCoupon = createCouponCard([createStackPlugin({ always: true })]);

export const meta = {
  slug: "stack",
  title: "叠加态角标",
  group: "plugin" as const,
  intro:
    "数据驱动：coupon.stackable === true 渲染「可叠加」强调角标；false + showWhenNotStackable 渲染灰标；always 强制渲染。",
};

export default function StackDemo() {
  return (
    <div style={{ display: "grid", gap: 12, maxWidth: 420 }}>
      <StackableCoupon
        coupon={{
          id: "s1",
          title: "可与运费券叠加",
          amount: 18,
          threshold: 128,
          stackable: true,
        }}
      />
      <NotStackableCoupon
        coupon={{
          id: "s2",
          title: "独享券 · 不可叠加",
          amount: 40,
          threshold: 259,
          stackable: false,
        }}
      />
      <ForcedCoupon
        coupon={{
          id: "s3",
          title: "always 强制渲染（数据未声明）",
          amount: 6,
          threshold: 0,
        }}
      />
    </div>
  );
}
`,l1=`import React from "react";
import { createCouponCard } from "vane-coupon";
import type { CouponData } from "vane-coupon";
import { createClaimStatePlugin } from "vane-coupon/custom-plugins/ClaimStatePlugin";
import { createValidityPlugin } from "vane-coupon/custom-plugins/ValidityPlugin";
import { createRuleExpandPlugin } from "vane-coupon/custom-plugins/RuleExpandPlugin";
import { createStackPlugin } from "vane-coupon/custom-plugins/StackPlugin";

/** 全家桶装配：角标 → 有效期 → 规则 → 领取按钮，四槽各归其位 */
const FullCoupon = createCouponCard([
  createClaimStatePlugin({ claim: async () => ({ ok: true }) }),
  createValidityPlugin({ urgentDays: 3 }),
  createRuleExpandPlugin({ collapsedCount: 1 }),
  createStackPlugin({ showWhenNotStackable: true }),
]);

const DAY = 24 * 60 * 60 * 1000;
const NOW = Date.now();

export const meta = {
  slug: "combined",
  title: "四插件合体",
  group: "advanced" as const,
  intro:
    "before 角标 / after 有效期+规则 / footer 领取按钮。priority：claim-state 32 · validity 23 · rule-expand 21 · stack 12。",
};

export default function CombinedDemo() {
  const coupon = {
    id: "full1",
    title: "全插件合体 · 紧迫可领",
    amount: 88,
    threshold: 599,
    stackable: true,
    validFrom: NOW - 12 * DAY,
    validTo: NOW + 2 * DAY,
    rules: [
      "仅限「家电焕新」活动商品使用",
      "可与运费券叠加，不与店铺券叠加",
      "核销后部分退款按比例退回",
    ],
  } as CouponData;

  const coupon2 = {
    id: "full2",
    title: "全插件合体 · 不可叠加",
    amount: 12,
    threshold: 0,
    stackable: false,
    validDays: 7,
    rules: ["全场通用", "有效期自领取日起算"],
  } as CouponData;

  return (
    <div style={{ display: "grid", gap: 12, maxWidth: 420 }}>
      <FullCoupon coupon={coupon} />
      <FullCoupon coupon={coupon2} />
    </div>
  );
}
`,i1=`import React from "react";
import { createCouponCard } from "vane-coupon";
import type { CouponData } from "vane-coupon";
import { createClaimStatePlugin } from "vane-coupon/custom-plugins/ClaimStatePlugin";
import { createStackPlugin } from "vane-coupon/custom-plugins/StackPlugin";

/** stock ≤ 0：挂载即降级 soldout（已抢光） */
const SoldoutCoupon = createCouponCard([
  createClaimStatePlugin({ stock: 0 }),
  createStackPlugin(),
]);

/** stock 3：正常可领（真实场景里 stock 来自接口轮询，重建插件即可刷新） */
const LimitedCoupon = createCouponCard([
  createClaimStatePlugin({
    stock: 3,
    claim: async () => {
      await new Promise((r) => setTimeout(r, 500));
      return { ok: true };
    },
  }),
  createStackPlugin(),
]);

export const meta = {
  slug: "limited",
  title: "限量 / 抢空",
  group: "advanced" as const,
  intro:
    "stock ≤ 0 挂载即「已抢光」（终态）；有限库存正常领取。过期判定同理：expired 优先级低于已核销 used。",
};

export default function LimitedDemo() {
  return (
    <div style={{ display: "grid", gap: 12, maxWidth: 420 }}>
      <SoldoutCoupon
        coupon={{ id: "l1", title: "已抢空的券", amount: 100, threshold: 999 } as CouponData}
      />
      <LimitedCoupon
        coupon={{ id: "l2", title: "限量抢购中", amount: 66, threshold: 699 } as CouponData}
      />
    </div>
  );
}
`,a1=`import React from "react";
import { createCouponCard } from "vane-coupon";
import type { CouponData } from "vane-coupon";
import { createProgressPlugin } from "vane-coupon/custom-plugins/ProgressPlugin";

/** 装配工厂在模块顶层调用（渲染体内调用会每次渲染造新实例，重挂载丢状态）。 */
const NormalCoupon = createCouponCard([createProgressPlugin()]);
const UrgentCoupon = createCouponCard([createProgressPlugin({ urgentPct: 30 })]);
const SoldoutCoupon = createCouponCard([createProgressPlugin()]);

export const meta = {
  slug: "progress",
  title: "抢购进度条",
  group: "plugin" as const,
  intro:
    "total/claimed 驱动进度条与「已抢 X%」；剩余占比低于 urgentPct（默认 20）转紧迫色并追加「仅剩 N 张」；抢完后显示「已抢完」。",
};

export default function ProgressDemo() {
  return (
    <div style={{ display: "grid", gap: 12, maxWidth: 420 }}>
      <NormalCoupon
        coupon={{ id: "pg1", title: "常规进度 · 30/100", amount: 10, threshold: 0, total: 100, claimed: 30 } as CouponData}
      />
      <UrgentCoupon
        coupon={{ id: "pg2", title: "紧迫进度 · 85/100（urgentPct 30）", amount: 50, threshold: 299, total: 100, claimed: 85 } as CouponData}
      />
      <SoldoutCoupon
        coupon={{ id: "pg3", title: "已抢完 · 100/100", amount: 10, threshold: 0, total: 100, claimed: 100 } as CouponData}
      />
    </div>
  );
}
`,s1=`import React from "react";
import { createCouponCard } from "vane-coupon";
import type { CouponData } from "vane-coupon";
import { createQuotaPlugin } from "vane-coupon/custom-plugins/QuotaPlugin";

/** 装配工厂在模块顶层调用（渲染体内调用会每次渲染造新实例，重挂载丢状态）。 */
const OkCoupon = createCouponCard([
  createQuotaPlugin({ quota: 3, purchasedCount: 1, onExceed: () => console.warn("[quota] 超限") }),
]);
const ExceededCoupon = createCouponCard([
  createQuotaPlugin({ quota: 2, purchasedCount: 2, onExceed: (q) => console.warn("[quota] 已达上限", q) }),
]);

export const meta = {
  slug: "quota",
  title: "限领提示",
  group: "plugin" as const,
  intro:
    "config.quota + purchasedCount 驱动限领提示条：未超限绿字「还可领 N 张」，超限红字「已达限领上限」并触发 onExceed；未声明 quota 时插件不渲染。",
};

export default function QuotaDemo() {
  return (
    <div style={{ display: "grid", gap: 12, maxWidth: 420 }}>
      <OkCoupon coupon={{ id: "qt1", title: "还可领 · 1/3", amount: 15, threshold: 99 } as CouponData} />
      <ExceededCoupon coupon={{ id: "qt2", title: "已超限 · 2/2", amount: 15, threshold: 99 } as CouponData} />
    </div>
  );
}
`,u1=`import React from "react";
import { createCouponCard } from "vane-coupon";
import type { CouponData } from "vane-coupon";
import { createCountdownPlugin } from "vane-coupon/custom-plugins/CountdownPlugin";

/**
 * 装配工厂在模块顶层调用（渲染体内调用会每次渲染造新实例，重挂载丢状态）。
 * startAt 设在 20 秒后：等 20 秒可看到到点 autoStart 自动进入可领取。
 */
const CountdownCoupon = createCouponCard([
  createCountdownPlugin({
    startAt: Date.now() + 20_000,
    tickMs: 1000,
    autoStart: true,
    onFire: () => console.log("[countdown] 开抢！"),
  }),
]);

export const meta = {
  slug: "countdown",
  title: "开抢倒计时",
  group: "plugin" as const,
  intro:
    "startAt 未到时渲染「距开抢 HH:MM:SS」；到点 autoStart 自动进入 available（本页 20 秒后开抢），并触发 onFire。",
};

export default function CountdownDemo() {
  return (
    <div style={{ display: "grid", gap: 12, maxWidth: 420 }}>
      <CountdownCoupon
        coupon={{ id: "cd1", title: "20 秒后自动开抢", amount: 30, threshold: 199 } as CouponData}
      />
    </div>
  );
}
`,c1=`import React from "react";
import { createCouponCard } from "vane-coupon";
import type { CouponData } from "vane-coupon";
import { createChannelPlugin } from "vane-coupon/custom-plugins/ChannelPlugin";

/** 装配工厂在模块顶层调用（渲染体内调用会每次渲染造新实例，重挂载丢状态）。 */
const DataCoupon = createCouponCard([createChannelPlugin()]);
const ConfigCoupon = createCouponCard([createChannelPlugin({ channels: ["会员专享", "限领 1 次"] })]);

export const meta = {
  slug: "channel",
  title: "渠道小标",
  group: "plugin" as const,
  intro:
    "渠道灰标组：coupon.channels 数据驱动与 config.channels 配置驱动双通道，config 优先；渲染在 before 槽、排在叠加标之后。",
};

export default function ChannelDemo() {
  return (
    <div style={{ display: "grid", gap: 12, maxWidth: 420 }}>
      <DataCoupon
        coupon={{ id: "ch1", title: "数据驱动渠道", amount: 10, threshold: 0, channels: ["仅 APP", "仅新客"] } as CouponData}
      />
      <ConfigCoupon coupon={{ id: "ch2", title: "配置驱动渠道", amount: 20, threshold: 99 } as CouponData} />
    </div>
  );
}
`,d1=`import React from "react";
import { createCouponCard } from "vane-coupon";
import type { CouponData } from "vane-coupon";
import { createSharePlugin } from "vane-coupon/custom-plugins/SharePlugin";

/** 装配工厂在模块顶层调用（渲染体内调用会每次渲染造新实例，重挂载丢状态）。 */
const ShareCoupon = createCouponCard([
  createSharePlugin({ onShare: (coupon) => console.log("[share]", coupon.id) }),
]);

export const meta = {
  slug: "share",
  title: "分享按钮",
  group: "plugin" as const,
  intro:
    "footer 槽次按钮：配置 onShare 才渲染，点击触发回调；未配置 onShare 时插件不渲染。",
};

export default function ShareDemo() {
  return (
    <div style={{ display: "grid", gap: 12, maxWidth: 420 }}>
      <ShareCoupon coupon={{ id: "sh1", title: "点右下角分享这张券", amount: 25, threshold: 99 } as CouponData} />
    </div>
  );
}
`,p1=`import React from "react";
import { createCouponCard } from "vane-coupon";
import type { CouponData } from "vane-coupon";
import { createRemindPlugin } from "vane-coupon/custom-plugins/RemindPlugin";
import { createCountdownPlugin } from "vane-coupon/custom-plugins/CountdownPlugin";

/**
 * 装配工厂在模块顶层调用（渲染体内调用会每次渲染造新实例，重挂载丢状态）。
 * 配倒计时让相位停在「未开始」，提醒开关只在 idle 相位出现。
 */
const RemindCoupon = createCouponCard([
  createRemindPlugin({ onRemind: (on) => console.log("[remind]", on ? "已设提醒" : "已取消提醒") }),
  createCountdownPlugin({ startAt: Date.now() + 3600_000 }),
]);

export const meta = {
  slug: "remind",
  title: "开抢提醒",
  group: "plugin" as const,
  intro:
    "仅 idle（未开抢）相位渲染「开抢提醒」开关（aria-pressed），切换写 state.reminded 并触发 onRemind；开抢后自动消失。",
};

export default function RemindDemo() {
  return (
    <div style={{ display: "grid", gap: 12, maxWidth: 420 }}>
      <RemindCoupon
        coupon={{ id: "rm1", title: "1 小时后开抢 · 可设提醒", amount: 40, threshold: 299 } as CouponData}
      />
    </div>
  );
}
`,f1=`import React from "react";
import { createCouponCard } from "vane-coupon";
import type { CouponData } from "vane-coupon";
import { createCopyCodePlugin } from "vane-coupon/custom-plugins/CopyCodePlugin";
import { createClaimStatePlugin } from "vane-coupon/custom-plugins/ClaimStatePlugin";

/**
 * 装配工厂在模块顶层调用（渲染体内调用会每次渲染造新实例，重挂载丢状态）。
 * 配 ClaimState 让初始相位是 available，点击领取后券码区出现。
 */
const CopyCodeCoupon = createCouponCard([
  createCopyCodePlugin({ code: "SAVE-2026" }),
  createClaimStatePlugin({
    claim: async () => {
      await new Promise((r) => setTimeout(r, 400));
      return { ok: true };
    },
  }),
]);

export const meta = {
  slug: "copy-code",
  title: "券码复制",
  group: "plugin" as const,
  intro:
    "claimed/used 相位展示券码与复制按钮（clipboard API + execCommand 兜底），复制后 1.6 秒自动还原；available 相位不渲染。",
};

export default function CopyCodeDemo() {
  return (
    <div style={{ display: "grid", gap: 12, maxWidth: 420 }}>
      <CopyCodeCoupon
        coupon={{ id: "cc1", title: "先领取，再看券码复制", amount: 20, threshold: 99 } as CouponData}
      />
    </div>
  );
}
`,m1=`import React from "react";
import { createCouponCard } from "vane-coupon";
import type { CouponData } from "vane-coupon";
import { createHistoryPlugin } from "vane-coupon/custom-plugins/HistoryPlugin";

/** 装配工厂在模块顶层调用（渲染体内调用会每次渲染造新实例，重挂载丢状态）。 */
const HistoryCoupon = createCouponCard([createHistoryPlugin({ max: 3 })]);
const EmptyCoupon = createCouponCard([createHistoryPlugin()]);

export const meta = {
  slug: "history",
  title: "领取记录",
  group: "plugin" as const,
  intro:
    "coupon.history（{at, action}[]）按时间倒序渲染最近 max（默认 3）条；无记录时插件不渲染。",
};

export default function HistoryDemo() {
  const now = Date.now();
  return (
    <div style={{ display: "grid", gap: 12, maxWidth: 420 }}>
      <HistoryCoupon
        coupon={
          {
            id: "hs1",
            title: "最近 3 条记录",
            amount: 10,
            threshold: 0,
            history: [
              { at: now - 86400_000, action: "领取成功" },
              { at: now - 3600_000, action: "已使用" },
              { at: now - 60_000, action: "再次领取" },
              { at: now - 1000, action: "这条超出 max 不会显示" },
            ],
          } as CouponData
        }
      />
      <EmptyCoupon coupon={{ id: "hs2", title: "无记录 · 不渲染", amount: 5, threshold: 0 } as CouponData} />
    </div>
  );
}
`,g1=`import React from "react";
import { createCouponCard } from "vane-coupon";
import type { CouponData } from "vane-coupon";
import { createAnalyticsPlugin } from "vane-coupon/custom-plugins/AnalyticsPlugin";

/** 装配工厂在模块顶层调用（渲染体内调用会每次渲染造新实例，重挂载丢状态）。 */
const TrackedCoupon = createCouponCard([
  createAnalyticsPlugin({
    onEvent: (e) => console.log("[analytics 回调]", e),
    // 可选：接入宿主埋点总线
    // transport: (e) => tracker.track(e.event, e.payload),
  }),
]);

export const meta = {
  slug: "analytics",
  title: "行为埋点",
  group: "plugin" as const,
  intro:
    "无 UI 插件：mount / 领取 / 异常三类事件双通道上报（onEvent 回调 + bus.emit，事件名 coupon:mount / coupon:claim / coupon:error，另有 coupon:analytics 包装通道）。打开控制台看输出。",
};

export default function AnalyticsDemo() {
  return (
    <div style={{ display: "grid", gap: 12, maxWidth: 420 }}>
      <TrackedCoupon coupon={{ id: "an1", title: "挂载即上报 coupon:mount", amount: 10, threshold: 0 } as CouponData} />
    </div>
  );
}
`,h1=`import React from "react";
import { createCouponCard } from "vane-coupon";
import type { CouponData } from "vane-coupon";
import { createDetailLinkPlugin } from "vane-coupon/custom-plugins/DetailLinkPlugin";

/** 装配工厂在模块顶层调用（渲染体内调用会每次渲染造新实例，重挂载丢状态）。 */
const HrefCoupon = createCouponCard([createDetailLinkPlugin({ href: "/help/coupon-rules" })]);
const DetailCoupon = createCouponCard([
  createDetailLinkPlugin({ onDetail: () => console.log("[detail] 打开详情弹层") }),
]);

export const meta = {
  slug: "detail-link",
  title: "详情入口",
  group: "plugin" as const,
  intro:
    "after 槽文字链：配 href 渲染 <a target=\\"_blank\\">，配 onDetail 渲染 <button>，两者都没有则不渲染；色值复用规则展开开关的同款链接色。",
};

export default function DetailLinkDemo() {
  return (
    <div style={{ display: "grid", gap: 12, maxWidth: 420 }}>
      <HrefCoupon coupon={{ id: "dl1", title: "href 跳转形态", amount: 10, threshold: 0 } as CouponData} />
      <DetailCoupon coupon={{ id: "dl2", title: "onDetail 回调形态", amount: 20, threshold: 99 } as CouponData} />
    </div>
  );
}
`,y1=Object.assign({"./00-quickstart.tsx":yy,"./01-claim-state.tsx":Ly,"./02-validity.tsx":tv,"./03-rules.tsx":xv,"./04-stack.tsx":Av,"./05-combined.tsx":Uv,"./06-limited.tsx":Bv,"./07-progress.tsx":c0,"./08-quota.tsx":j0,"./09-countdown.tsx":H0,"./10-channel.tsx":ix,"./11-share.tsx":wx,"./12-remind.tsx":Fx,"./13-copy-code.tsx":tC,"./14-history.tsx":CC,"./15-analytics.tsx":LC,"./16-detail-link.tsx":ZC}),v1=Object.assign({"./00-quickstart.tsx":e1,"./01-claim-state.tsx":n1,"./02-validity.tsx":t1,"./03-rules.tsx":o1,"./04-stack.tsx":r1,"./05-combined.tsx":l1,"./06-limited.tsx":i1,"./07-progress.tsx":a1,"./08-quota.tsx":s1,"./09-countdown.tsx":u1,"./10-channel.tsx":c1,"./11-share.tsx":d1,"./12-remind.tsx":p1,"./13-copy-code.tsx":f1,"./14-history.tsx":m1,"./15-analytics.tsx":g1,"./16-detail-link.tsx":h1}),x1=e=>e.replace(/^\.\//,""),Yi=Object.entries(y1).map(([e,n])=>{const t=x1(e);return{meta:n.meta,Stage:n.default,file:t,source:v1[e]??""}}).sort((e,n)=>e.file.localeCompare(n.file)),C1=Array.from(new Set(Yi.map(e=>e.meta.group))),Fp={basic:{label:"基础用法"},advanced:{label:"进阶用法"},plugin:{label:"插件示例"}},S1="import|from|export|default|function|return|const|let|var|new|if|else|for|of|in|while|switch|case|break|continue|type|interface|extends|implements|as|satisfies|await|async|throw|try|catch|finally|class|typeof|instanceof|delete|void|yield",w1="true|false|null|undefined|this|super",P1="number|string|boolean|object|any|unknown|never|React|HTMLElement|void",Mu=new RegExp([String.raw`(\/\/[^\n]*|\/\*[\s\S]*?\*\/)`,String.raw`(\`(?:\\[\s\S]|[^\\\`])*\`|"(?:\\[\s\S]|[^\\"])*"|'(?:\\[\s\S]|[^\\'])*')`,String.raw`\b(${S1})\b`,String.raw`\b(${w1})\b`,String.raw`\b(${P1})\b`,String.raw`(<\/?[A-Za-z][\w.$]*)`,String.raw`\b(\d+(?:\.\d+)?)\b`].join("|"),"g"),Ou=["tok-comment","tok-string","tok-kw","tok-lit","tok-type","tok-tag","tok-num"];function k1(e){const n=[];let t=0;Mu.lastIndex=0;let o;for(;o=Mu.exec(e);){o.index>t&&n.push({text:e.slice(t,o.index),cls:null});const r=Ou.findIndex((l,i)=>o[i+1]!==void 0);n.push({text:o[0],cls:r>=0?Ou[r]:null}),t=o.index+o[0].length}return t<e.length&&n.push({text:e.slice(t),cls:null}),n}function Lu(e){try{const n=document.createElement("textarea");n.value=e,n.setAttribute("readonly",""),n.style.position="fixed",n.style.opacity="0",document.body.appendChild(n),n.select();const t=document.execCommand("copy");return document.body.removeChild(n),t}catch{return!1}}function _1({code:e,title:n="tsx",collapseAfter:t=24,maxHeight:o}){const[r,l]=S.useState("idle"),[i,a]=S.useState(!1),s=S.useMemo(()=>e.replace(/\s+$/,"").split(`
`),[e]),u=t>0&&s.length>t,p=u&&!i?s.slice(0,t).join(`
`):e,f=S.useMemo(()=>k1(p),[p]),m=S.useCallback(async()=>{var x;let y=!1;if((x=navigator.clipboard)!=null&&x.writeText)try{await navigator.clipboard.writeText(e),y=!0}catch{y=Lu(e)}else y=Lu(e);l(y?"ok":"fail"),window.setTimeout(()=>l("idle"),1600)},[e]);return c.jsxs("div",{className:"code",children:[c.jsxs("div",{className:"code-head",children:[c.jsx("span",{children:n}),c.jsxs("span",{style:{display:"flex",gap:6,alignItems:"center"},children:[c.jsxs("span",{children:[s.length," 行"]}),c.jsx("button",{type:"button",className:`code-copy${r==="ok"?" is-ok":r==="fail"?" is-fail":""}`,onClick:m,children:r==="ok"?"已复制":r==="fail"?"复制失败":"复制"})]})]}),c.jsx("pre",{style:o?{maxHeight:o}:{maxHeight:"none"},children:c.jsx("code",{children:f.map((y,x)=>y.cls?c.jsx("span",{className:y.cls,children:y.text},x):c.jsx(Mo.Fragment,{children:y.text},x))})}),u?c.jsx("button",{type:"button",className:"code-more",onClick:()=>a(y=>!y),children:i?"收起":`展开余下 ${s.length-t} 行`}):null]})}function Ip(e){return e.props??e.config??[]}function E1({doc:e}){var r,l,i;const n=Ip(e),t=e.events??[],o=e.methods??[];return c.jsxs(c.Fragment,{children:[c.jsxs("div",{className:"doc-sec",children:[c.jsx("h5",{children:"属性 Props"}),n.length?c.jsxs("table",{className:"doc-table",children:[c.jsx("thead",{children:c.jsxs("tr",{children:[c.jsx("th",{children:"属性"}),c.jsx("th",{children:"类型"}),c.jsx("th",{children:"默认"}),c.jsx("th",{children:"说明"})]})}),c.jsx("tbody",{children:n.map(a=>c.jsxs("tr",{children:[c.jsx("td",{children:c.jsx("code",{children:a.name})}),c.jsx("td",{children:c.jsx("code",{className:"dim",children:a.type})}),c.jsx("td",{children:c.jsx("code",{className:"dim",children:a.default??"-"})}),c.jsx("td",{children:a.description??"—"})]},a.name))})]}):c.jsx("p",{className:"doc-note",children:"无可配置属性，工厂零参调用即可。"})]}),c.jsxs("div",{className:"doc-sec",children:[c.jsx("h5",{children:"事件 Events"}),t.length?c.jsxs("table",{className:"doc-table",children:[c.jsx("thead",{children:c.jsxs("tr",{children:[c.jsx("th",{children:"事件"}),c.jsx("th",{children:"触发时机"}),c.jsx("th",{children:"说明"})]})}),c.jsx("tbody",{children:t.map(a=>c.jsxs("tr",{children:[c.jsx("td",{children:c.jsx("code",{children:a.name})}),c.jsx("td",{children:a.when}),c.jsx("td",{children:a.description})]},a.name))})]}):c.jsx("p",{className:"doc-note",children:"不参与任何事件。"})]}),c.jsxs("div",{className:"doc-sec",children:[c.jsx("h5",{children:"方法 Methods"}),o.length?c.jsxs("table",{className:"doc-table",children:[c.jsx("thead",{children:c.jsxs("tr",{children:[c.jsx("th",{children:"方法"}),c.jsx("th",{children:"签名"}),c.jsx("th",{children:"说明"})]})}),c.jsx("tbody",{children:o.map(a=>c.jsxs("tr",{children:[c.jsx("td",{children:c.jsx("code",{children:a.name})}),c.jsx("td",{children:c.jsx("code",{className:"dim",children:a.signature})}),c.jsx("td",{children:a.description})]},a.name))})]}):c.jsx("p",{className:"doc-note",children:e.methodsNote??"不调用上下文方法。"})]}),c.jsxs("div",{className:"doc-cols",children:[(r=e.features)!=null&&r.length?c.jsxs("div",{children:[c.jsx("h5",{children:"能做"}),c.jsx("ul",{children:e.features.map(a=>c.jsx("li",{children:a},a))})]}):null,(l=e.useCases)!=null&&l.length?c.jsxs("div",{children:[c.jsx("h5",{children:"适合"}),c.jsx("ul",{children:e.useCases.map(a=>c.jsx("li",{children:a},a))})]}):null,(i=e.notes)!=null&&i.length?c.jsxs("div",{children:[c.jsx("h5",{children:"注意"}),c.jsx("ul",{children:e.notes.map(a=>c.jsx("li",{children:a},a))})]}):null]})]})}function j1({factory:e,priority:n,summary:t,doc:o,defaultOpen:r=!0}){var i,a;const l={props:Ip(o).length,events:((i=o.events)==null?void 0:i.length)??0,methods:((a=o.methods)==null?void 0:a.length)??0};return c.jsxs("details",{className:"api-plug",open:r,children:[c.jsxs("summary",{children:[c.jsx("code",{children:e}),c.jsxs("span",{className:"tag tag-accent",children:["priority ",n]}),c.jsx("span",{className:"api-plug-desc",children:t}),c.jsxs("span",{className:"api-plug-n",children:[l.props," 属性 · ",l.events," 事件 · ",l.methods," 方法"]})]}),c.jsx("div",{className:"api-plug-body",children:c.jsx(E1,{doc:o})})]})}const T1=/create[A-Z]\w*Plugin/g;function N1(e){return(e.match(/create[A-Z]\w*Plugin/)??[e])[0]}function Up(e){return e.dir?`create${e.dir}`:N1(e.factory)}function $1(e){return new Set(e.match(T1)??[])}function R1(e,n){const t=$1(e);return n.filter(o=>t.has(Up(o))).sort((o,r)=>o.priority-r.priority)}function D1({source:e,plugins:n,heading:t="本页用到的插件"}){const o=S.useMemo(()=>R1(e,n),[e,n]);return o.length===0?null:c.jsxs("section",{className:"api-sec",children:[c.jsxs("div",{className:"api-sec-head",children:[c.jsxs("h2",{className:"api-sec-title",children:[t," · ",o.length," 个"]}),c.jsxs("p",{className:"api-sec-sub",children:["就是上面代码里装配的全部成员。属性是工厂参数，事件是父组件传进来的回调， 方法是插件读取 / 调用的上下文能力 —— 表内容与 ",c.jsx("code",{children:"doc.json"})," 同源，随包发布。"]})]}),o.map(r=>c.jsx(j1,{factory:Up(r),priority:r.priority,summary:r.summary??r.doc.description??"",doc:r.doc},r.factory))]})}const b1="EligibilityPlugin",M1="可用性判定：按订单上下文判定门槛 / 有效期 / 商品范围 / 互斥 / 叠加 / 限领 / 库存，结果写 state.eligible 供领取按钮与宿主复用。",O1="0.1.0",L1=["coupon","eligibility","order"],z1=[{name:"onMount",when:"券组件挂载完成、插件注册后执行一次",description:"初始化副作用，可返回清理函数"},{name:"onPropsChange",when:"宿主 props 变化后（回传 prev / next 两份）",description:"按新旧 props 差分决定是否重算内部状态，避免无差别刷新"},{name:"onPhaseChange",when:"券相位变化后（如 available → used / expired）",description:"相位切换时的副作用：埋点、提示、动效"}],A1=[],F1="只读取 context 字段（props / state / data），不调用上下文方法",I1=[{name:"order",type:"CouponOrderContext",default:"props.order",description:"订单上下文（amount / items / applied / purchasedCount / claimedAt / now）"},{name:"onEvaluate",type:"(result: CouponEligibility) => void",default:"-",description:"每次判定后回调，入参含 eligible / reasons / thresholdGap"}],U1=["门槛按「分」比较，刚好等于视为满足","商品范围支持 sku / category 白名单与 excludeSku 黑名单","互斥组冲突与不可叠加冲突判定","结果写 state.eligible，ClaimState 复用同一口径"],W1=["结算页按当前购物车判定券是否可用","券列表标记「差 X 元可用」"],H1="const Coupon = createCouponCard([createEligibilityPlugin(), createClaimStatePlugin()]);",V1={name:b1,description:M1,since:O1,tags:L1,events:z1,methods:A1,methodsNote:F1,config:I1,features:U1,useCases:W1,example:H1},q1=`import type { CouponPlugin, CouponPluginContext } from "../../components/CouponPlugin/plugins/types";

/**
 * AnalyticsPlugin — 券埋点（无 UI，priority 90 事件链最前）。
 *
 * 对齐 vane-sku 的 Analytics 双通道：回调（onEvent）与总线（coupon:analytics）
 * 同时上报，自身不渲染任何 UI。事件三类：
 *   coupon:mount  —— 挂载
 *   coupon:claim  —— 相位变化（含目标相位）
 *   coupon:error  —— 领取失败（reason）
 * meta 在同目录 index.ts 挂载。
 */
export interface AnalyticsConfig {
  /** 埋点回调（与总线双通道） */
  onEvent?: (event: string, payload: Record<string, unknown>) => void;
}

export function createAnalyticsPlugin(
  config: AnalyticsConfig = {}
): CouponPlugin {
  const emit = (
    context: CouponPluginContext,
    event: string,
    payload: Record<string, unknown>
  ) => {
    context.bus.emit(event, payload);
    context.bus.emit("coupon:analytics", { event, ...payload });
    config.onEvent?.(event, payload);
  };

  return {
    name: "analytics",
    version: "0.1.0",
    description:
      "券埋点：coupon:mount / coupon:claim / coupon:error 三类事件，回调与总线 coupon:analytics 双通道，自身不渲染 UI",
    priority: 90,
    config: {},
    hooks: {
      onMount: (context: CouponPluginContext) => {
        emit(context, "coupon:mount", {
          couponId: context.coupon.id,
          phase: context.phase,
        });
      },
      onPhaseChange: (context: CouponPluginContext, phase) => {
        emit(context, "coupon:claim", {
          couponId: context.coupon.id,
          phase,
        });
      },
      onError: (context: CouponPluginContext, error: unknown) => {
        emit(context, "coupon:error", {
          couponId: context.coupon.id,
          message: String(error),
        });
      },
    },
  };
}
`,B1=`import React from "react";
import type { CouponPlugin, CouponPluginContext } from "../../components/CouponPlugin/plugins/types";
import * as T from "../../components/CouponPlugin/plugins/tokens";

/**
 * ChannelPlugin — 渠道限定角标（before 槽）。
 *
 * config.channels（默认读 coupon.channels）渲染一组渠道小标（仅 APP / 仅新客…）。
 * 与 StackPlugin 同占 before 槽：stack priority 12 在左、channel 14 紧随。
 * meta 在同目录 index.ts 挂载。
 */
export interface ChannelConfig {
  /** 渠道标签列表（默认读 coupon.channels） */
  channels?: string[];
}

export function createChannelPlugin(config: ChannelConfig = {}): CouponPlugin {
  const mergedConfig = { slotPosition: "before", order: 20, ...config } as any;

  return {
    name: "channel",
    version: "0.1.0",
    description: "渠道限定角标：按 coupon.channels / config.channels 渲染一组渠道小标",
    priority: 14,
    config: mergedConfig,
    hooks: {
      renderHeader: (context: CouponPluginContext) => {
        const channels = config.channels ?? context.coupon.channels;
        if (!channels || channels.length === 0) return null;

        return (
          <div style={T.badgesStyle} data-testid="coupon-channels">
            {channels.map((label, index) => (
              <span
                key={\`\${label}-\${index}\`}
                style={T.badgeMutedStyle}
                data-testid="coupon-channel-badge"
              >
                {label}
              </span>
            ))}
          </div>
        );
      },
    },
  };
}
`,Q1=`import React from "react";
import type {
  CouponPhase,
  CouponPlugin,
  CouponPluginContext,
} from "../../components/CouponPlugin/plugins/types";
import { evaluateEligibility } from "../../components/CouponPlugin/plugins/eligibility";
import { resolveQuota } from "../../components/CouponPlugin/plugins/quota";
import { resolveStock } from "../../components/CouponPlugin/plugins/stock";
import { computeValidity } from "../../components/CouponPlugin/plugins/validity";
import * as T from "../../components/CouponPlugin/plugins/tokens";

/**
 * ClaimStatePlugin — 领取状态机（footer 槽）。
 *
 * 相位枚举与转移规则见 plugins/types.ts 的 CouponPhase 注释：
 *   idle → available → claiming → claimed（半终态，可核销 used）
 *   终态 used / soldout / expired；领取失败不设独立态，回退 available 并经 onClaimError 上报。
 *
 * 门控口径（展示与点击使用同一个 gatePhase，避免「显示已抢完但还能领」）：
 *   expired      —— state.validity 过期，或按注入时钟现算已过 validTo；
 *   soldout      —— state.stock ≤ 0 与 coupon.total/claimed 取并集；
 *   quota-limited—— state.quotaReached 或按 coupon.quota + 已领数现算超限。
 *
 * 事件钩子里写 state（不在渲染期 setState），写入即触发 context 重建。
 * meta 在同目录 index.ts 挂载。
 */
export interface ClaimStateConfig {
  /** 初始相位，默认 available */
  initialPhase?: CouponPhase;
  /**
   * 领取回调（异步）。返回 { ok: false, reason? } 视为失败：回退 available 并触发 onClaimError。
   * 未配置时点击直接进入 claimed（demo / 纯展示场景）。
   */
  claim?: () => Promise<{ ok?: boolean; reason?: string } | void>;
  /** 剩余库存；≤ 0 时自动降级 soldout（与 total/claimed 取并集） */
  stock?: number;
  /** 发放总量覆盖（默认 coupon.total；与 ProgressPlugin 同口径） */
  total?: number;
  /** 已领取数覆盖（默认 coupon.claimed；与 ProgressPlugin 同口径） */
  claimed?: number;
  /** 每人限领张数（默认 coupon.quota） */
  quota?: number;
  /** 当前用户已领张数，默认 0 */
  purchasedCount?: number;
  /** 判定时钟，默认 Date.now（测试/demo 可注入固定值） */
  now?: () => number;
  /** 相位变化回调（onPhaseChange 钩子之后触发） */
  onPhaseChange?: (phase: CouponPhase, prev: CouponPhase | undefined) => void;
  /** 领取失败回调 */
  onClaimError?: (reason?: string) => void;
  /** 按钮文案按相位覆盖 */
  texts?: Partial<Record<CouponPhase, string>>;
  /** 订单不可用（门槛 / 范围 / 互斥 / 叠加不满足）时的按钮文案，默认「不可用」 */
  ineligibleText?: string;
}

/** 各相位默认按钮文案 */
export const DEFAULT_CLAIM_TEXTS: Record<CouponPhase, string> = {
  idle: "未开始",
  available: "立即领取",
  claiming: "领取中…",
  claimed: "已领取",
  used: "已使用",
  soldout: "已抢光",
  expired: "已过期",
  "quota-limited": "已达限领上限",
};

/** 终态：不再响应任何点击与降级 */
const TERMINAL_PHASES: ReadonlySet<CouponPhase> = new Set([
  "used",
  "soldout",
  "expired",
]);

/** 点击重入锁（context.shared，跨渲染读取最新值） */
const CLAIM_LOCK = "claim:in-flight";
/** 挂载标记，异步返回后据此判断是否已卸载 */
const CLAIM_MOUNTED = "claim:mounted";

export function createClaimStatePlugin(
  config: ClaimStateConfig = {}
): CouponPlugin {
  const texts = { ...DEFAULT_CLAIM_TEXTS, ...config.texts };
  // 注：renderPluginSlot 的 footer 槽以 position "after" 过滤（plugin-core 现状），
  // 声明 "footer" 会被滤掉，故这里保持 "after"（P2-8 槽位元数据部分待内核支持）。
  const mergedConfig = { slotPosition: "after", order: 10, ...config } as any;
  const now = config.now ?? (() => Date.now());

  /**
   * 联动降级判定：返回应强制进入的相位，无需降级返回 null。
   * 终态优先级：expired / soldout / quota-limited 覆盖可领取态；
   * 已领取 / 领取中不覆盖（避免把成功结果改写成不可领）。
   */
  const gatePhase = (context: CouponPluginContext): CouponPhase | null => {
    const current = context.phase;
    if (TERMINAL_PHASES.has(current)) return null;
    if (current === "claimed" || current === "claiming") return null;

    const claimedAt = (context.state?.claimedAt ?? undefined) as number | undefined;
    // 点击/渲染时按注入时钟现算一次，而不是只信可能陈旧的 state.validity
    const fresh = computeValidity(context.coupon, { now, claimedAt });
    const stored = context.state?.validity as
      | import("../../components/CouponPlugin/plugins/types").CouponValidity
      | null
      | undefined;
    if (fresh?.expired || stored?.expired) return "expired";

    const stock = resolveStock(context.coupon, {
      stock: config.stock,
      total: config.total,
      claimed: config.claimed,
    });
    if (stock.soldout) return "soldout";

    const quota = resolveQuota(context.coupon, {
      quota: config.quota,
      purchasedCount: config.purchasedCount ?? context.order?.purchasedCount,
    });
    if (context.state?.quotaReached === true || quota.reached) {
      return "quota-limited";
    }
    return null;
  };

  /** 写相位（值相同不写，避免无谓的 context 重建） */
  const transition = (
    context: CouponPluginContext,
    next: CouponPhase
  ): void => {
    if (context.state?.phase === next) return;
    context.setState({ phase: next });
  };

  /** 重新评估降级（onMount / onPropsChange 共用） */
  const reevaluate = (context: CouponPluginContext): void => {
    const current = (context.state?.phase ?? undefined) as CouponPhase | undefined;
    if (current === undefined) {
      // 首次：硬门（过期 / 无库存 / 超限）优先，其次应用 initialPhase
      const gated = gatePhase(context);
      if (gated) {
        context.setState({ phase: gated });
      } else if (config.initialPhase) {
        context.setState({ phase: config.initialPhase });
      }
      return;
    }
    const gated = gatePhase(context);
    if (gated) {
      if (gated !== current) transition(context, gated);
      return;
    }
    // 限领是软门：已领数下调后自动恢复可领取
    if (current === "quota-limited") transition(context, "available");
  };

  /** 订单不可用判定（门槛 / 范围 / 互斥 / 叠加）；无订单上下文返回 false */
  const blockedByEligibility = (context: CouponPluginContext): boolean => {
    const eligibility =
      context.eligible ??
      (context.order
        ? evaluateEligibility(context.coupon, context.order)
        : null);
    return eligibility?.eligible === false;
  };

  return {
    name: "claim-state",
    version: "0.1.0",
    description:
      "领取状态机：8 态相位流转（未开始/可领取/领取中/已领取/已使用/已抢空/已过期/已达限领上限），联动有效期、库存与限领自动降级",
    priority: 32,
    config: mergedConfig,
    hooks: {
      onMount: (context: CouponPluginContext) => {
        context.shared.set(CLAIM_MOUNTED, true);
        reevaluate(context);
      },
      onPropsChange: (context: CouponPluginContext) => {
        reevaluate(context);
      },
      onValidityChange: (context: CouponPluginContext, validity) => {
        // expired 只覆盖非终态（used 等终态不被打回）
        if (validity.expired && !TERMINAL_PHASES.has(context.phase)) {
          transition(context, "expired");
        }
      },
      onUnmount: (context: CouponPluginContext) => {
        context.shared.set(CLAIM_MOUNTED, false);
        context.shared.delete(CLAIM_LOCK);
      },
      renderFooter: (context: CouponPluginContext) => {
        const phase = context.phase;
        // 渲染期算一次门控：Quota / Progress 是其它插件写 state 或读 coupon，
        // 不保证先于本插件执行，按实时口径直接渲染才能让「提示条」与按钮一致。
        const gated = gatePhase(context);
        const ineligible = blockedByEligibility(context);
        const blocked = ineligible && !gated;
        const shownPhase = gated ?? phase;
        const label = blocked
          ? config.ineligibleText ?? "不可用"
          : texts[shownPhase] ?? shownPhase;
        const disabled = shownPhase !== "available" || blocked;

        const handleClick = async () => {
          // phase 缺省即 available（与 context.phase 同一口径）
          if (context.phase !== "available") return;
          if (context.shared.get(CLAIM_LOCK) === true) return;

          const blockedNow = blockedByEligibility(context);
          const gatedNow = gatePhase(context);
          if (gatedNow) {
            transition(context, gatedNow);
            return;
          }
          if (blockedNow) return;

          context.shared.set(CLAIM_LOCK, true);
          transition(context, "claiming");
          try {
            const result = await config.claim?.();
            // 卸载后不再写 state / 触发回调
            if (context.shared.get(CLAIM_MOUNTED) !== true) return;
            const ok = !result || result.ok !== false;
            if (ok) {
              // 领取期间跨过 validTo：不再落成功态（context.state 是点击时的快照，
              // 相位是否被改写只能按注入时钟现算）
              const freshAfter = computeValidity(context.coupon, {
                now,
                claimedAt: context.state?.claimedAt as number | undefined,
              });
              if (freshAfter?.expired) {
                transition(context, "expired");
                return;
              }
              // claimedAt 供 ValidityPlugin 的相对有效期锚定
              context.setState({ phase: "claimed", claimedAt: Date.now() });
            } else {
              transition(context, "available");
              config.onClaimError?.(result?.reason);
            }
          } catch (error) {
            if (context.shared.get(CLAIM_MOUNTED) !== true) return;
            transition(context, "available");
            config.onClaimError?.(String(error));
          } finally {
            context.shared.delete(CLAIM_LOCK);
          }
        };

        return (
          <div className="vc-coupon__actions" style={T.actionsStyle} data-testid="coupon-claim-area">
            <button
              type="button"
              style={
                phase === "available" && !disabled
                  ? T.claimStyle
                  : T.claimMutedStyle
              }
              data-testid="coupon-claim-btn"
              data-phase={phase}
              data-gate={gated ?? ""}
              data-eligible={ineligible ? "false" : "true"}
              disabled={disabled}
              aria-disabled={disabled}
              onClick={() => void handleClick()}
            >
              {label}
            </button>
          </div>
        );
      },
    },
  };
}
`,K1=`import React from "react";
import type { CouponPlugin, CouponPluginContext } from "../../components/CouponPlugin/plugins/types";
import * as T from "../../components/CouponPlugin/plugins/tokens";

/**
 * CopyCodePlugin — 券码复制（after 槽）。
 *
 * phase 为 claimed/used 且有券码（config.code 或 coupon.code）时展示券码 + 复制按钮。
 * 复制走两条路：navigator.clipboard（secure context）不行时退到
 * 隐藏 textarea + execCommand —— 示例站常挂在 http:// 内网 IP 上，只走
 * clipboard API 会静默失败。复制结果写内核 state.codeCopied，失败经 onError 上报。
 *
 * P2-7：定时器存在 context.shared（连续点击先清旧 timer），onUnmount 统一清理；
 * 异步返回后校验挂载标记，卸载后不再写 state。
 * meta 在同目录 index.ts 挂载。
 */
export interface CopyCodeConfig {
  /** 券码（默认读 coupon.code） */
  code?: string;
  /** 标签文案，默认「券码」 */
  label?: string;
  /** 复制成功回调 */
  onCopied?: (code: string) => void;
  /** 复制失败回调（两条路径都失败时触发，便于宿主提示「请手动复制」） */
  onError?: (reason?: string) => void;
}

/** 定时器 / 挂载标记（context.shared 跨渲染共享） */
const TIMER_KEY = "copy-code:timer";
const MOUNTED_KEY = "copy-code:mounted";
/** 「已复制」提示停留时长 */
const COPIED_RESET_MS = 1600;

function fallbackCopy(text: string): boolean {
  try {
    const ta = document.createElement("textarea");
    ta.value = text;
    ta.setAttribute("readonly", "");
    ta.style.position = "fixed";
    ta.style.opacity = "0";
    document.body.appendChild(ta);
    ta.select();
    const ok =
      typeof document.execCommand === "function"
        ? document.execCommand("copy")
        : false;
    document.body.removeChild(ta);
    return ok;
  } catch {
    return false;
  }
}

export function createCopyCodePlugin(config: CopyCodeConfig = {}): CouponPlugin {
  const label = config.label ?? "券码";
  const mergedConfig = { slotPosition: "after", order: 10, ...config } as any;

  const clearTimer = (context: CouponPluginContext): void => {
    const timer = context.shared.get(TIMER_KEY);
    if (timer !== undefined) {
      window.clearTimeout(timer as number);
      context.shared.delete(TIMER_KEY);
    }
  };

  return {
    name: "copy-code",
    version: "0.1.0",
    description:
      "券码复制：claimed/used 相位展示券码与复制按钮（clipboard API + execCommand 兜底），结果写 state.codeCopied，失败经 onError 上报",
    priority: 18,
    config: mergedConfig,
    hooks: {
      onMount: (context: CouponPluginContext) => {
        context.shared.set(MOUNTED_KEY, true);
      },
      onUnmount: (context: CouponPluginContext) => {
        context.shared.set(MOUNTED_KEY, false);
        clearTimer(context);
        context.shared.delete(MOUNTED_KEY);
      },
      renderHeader: (context: CouponPluginContext) => {
        const phase = context.phase;
        if (phase !== "claimed" && phase !== "used") return null;
        const code = config.code ?? context.coupon.code;
        if (!code) return null;

        const copied = context.state?.codeCopied === true;

        const copy = async () => {
          let ok = false;
          let reason: string | undefined;
          if (navigator.clipboard?.writeText) {
            try {
              await navigator.clipboard.writeText(code);
              ok = true;
            } catch {
              ok = fallbackCopy(code);
              if (!ok) reason = "clipboard-unavailable";
            }
          } else {
            ok = fallbackCopy(code);
            if (!ok) reason = "clipboard-unavailable";
          }
          if (context.shared.get(MOUNTED_KEY) !== true) return;
          context.setState({ codeCopied: ok });
          if (ok) {
            config.onCopied?.(code);
          } else {
            config.onError?.(reason);
          }
          // 连续点击：先清旧 timer，避免「已复制」提示被前一次提前复位
          clearTimer(context);
          const timer = window.setTimeout(() => {
            context.shared.delete(TIMER_KEY);
            if (context.shared.get(MOUNTED_KEY) !== true) return;
            context.setState({ codeCopied: false });
          }, COPIED_RESET_MS);
          context.shared.set(TIMER_KEY, timer);
        };

        return (
          <div
            style={{
              display: "flex",
              alignItems: "center",
              gap: 8,
              marginTop: 10,
              fontSize: 12,
            }}
            data-testid="coupon-code-area"
          >
            <span style={T.fieldLabelStyle}>{label}</span>
            <code
              style={{
                fontFamily: "var(--ff-mono, monospace)",
                fontSize: 12,
                padding: "2px 8px",
                borderRadius: 4,
                background: "#f2f3f5",
                color: "#1f2328",
                border: "1px solid #e8eaed",
              }}
              data-testid="coupon-code"
            >
              {code}
            </code>
            <button
              type="button"
              style={{
                padding: "2px 10px",
                fontSize: 11,
                borderRadius: 4,
                border: "1px solid #e8eaed",
                background: "#fff",
                // 内联了背景必须成对内联字色（ADR-13）
                color: "#1a66c2",
                cursor: "pointer",
                fontFamily: "inherit",
              }}
              data-testid="coupon-copy-btn"
              data-copied={copied ? "true" : "false"}
              onClick={() => void copy()}
            >
              {copied ? "已复制" : "复制"}
            </button>
          </div>
        );
      },
    },
  };
}
`,Y1=`import React from "react";
import type { CouponPlugin, CouponPluginContext } from "../../components/CouponPlugin/plugins/types";
import * as T from "../../components/CouponPlugin/plugins/tokens";

/**
 * CountdownPlugin — 开抢倒计时（before 槽）。
 *
 * config.startAt（epoch ms）未到时渲染「距开抢 HH:MM:SS」，用 onMount 挂
 * setTimeout 链（返回 cleanup，内核 manager.clear() 逆序执行）驱动剩余时间。
 * 到点：autoStart 开启时自动 setPhase("available")，并触发 onFire。
 *
 * 注意：倒计时剩余写内核 state.countdown —— 写入即触发 context 重建，
 * 渲染钩子只读。meta 在同目录 index.ts 挂载。
 */
export interface CountdownConfig {
  /** 开抢时间（epoch ms），必填；未到开始时间才有倒计时 */
  startAt: number;
  /** 到点自动进入 available，默认 false（由宿主决定何时开抢） */
  autoStart?: boolean;
  /** 定时精度，默认 1000ms */
  tickMs?: number;
  /** 每跳回调（供埋点/自定义渲染） */
  onCountdown?: (remainingMs: number) => void;
  /** 倒计时归零回调 */
  onFire?: () => void;
}

const fmt = (ms: number): string => {
  const s = Math.max(0, Math.ceil(ms / 1000));
  const h = String(Math.floor(s / 3600)).padStart(2, "0");
  const m = String(Math.floor((s % 3600) / 60)).padStart(2, "0");
  const sec = String(s % 60).padStart(2, "0");
  return \`\${h}:\${m}:\${sec}\`;
};

export function createCountdownPlugin(config: CountdownConfig): CouponPlugin {
  const tickMs = config.tickMs ?? 1000;
  const mergedConfig = { slotPosition: "before", order: 10, ...config } as any;

  return {
    name: "countdown",
    version: "0.1.0",
    description:
      "开抢倒计时：startAt 未到时渲染「距开抢 HH:MM:SS」，到点可自动开抢（autoStart）并触发 onFire",
    priority: 15,
    config: mergedConfig,
    hooks: {
      onMount: (context: CouponPluginContext) => {
        const tick = () => {
          const remaining = config.startAt - Date.now();
          context.setState({ countdown: Math.max(0, remaining) });
          if (remaining > 0) {
            config.onCountdown?.(remaining);
            timer = window.setTimeout(tick, tickMs);
          } else {
            config.onFire?.();
            if (config.autoStart) context.setPhase("available");
          }
        };
        let timer = window.setTimeout(tick, 0);
        // 返回清理函数：内核 manager.clear() 时执行（React 式 onMount）
        return () => window.clearTimeout(timer);
      },
      renderHeader: (context: CouponPluginContext) => {
        const remaining = context.state?.countdown as number | undefined;
        if (typeof remaining !== "number" || remaining <= 0) return null;

        return (
          <div style={T.badgesStyle} data-testid="coupon-countdown">
            <span
              style={{
                ...T.badgeStackStyle,
                background: "#fff7e6",
                color: "#a54a00",
                border: "1px solid #ffd591",
                fontFamily: "var(--ff-mono, monospace)",
              }}
              data-testid="coupon-countdown-value"
            >
              距开抢 {fmt(remaining)}
            </span>
          </div>
        );
      },
    },
  };
}
`,X1=`import React from "react";
import type { CouponPlugin, CouponPluginContext } from "../../components/CouponPlugin/plugins/types";
import * as T from "../../components/CouponPlugin/plugins/tokens";

/**
 * DetailLinkPlugin — 完整规则链接（after 槽，规则区下方）。
 *
 * config.href → 渲染 <a>；否则 config.onDetail → 渲染 <button>；都没有 → null。
 * meta 在同目录 index.ts 挂载。
 */
export interface DetailLinkConfig {
  /** 详情页链接（有 href 渲染 <a>） */
  href?: string;
  /** 链接文案，默认「查看完整规则」 */
  text?: string;
  /** 点击回调（无 href 时渲染 <button>） */
  onDetail?: () => void;
}

export function createDetailLinkPlugin(
  config: DetailLinkConfig = {}
): CouponPlugin {
  const text = config.text ?? "查看完整规则";
  const mergedConfig = { slotPosition: "after", order: 10, ...config } as any;

  return {
    name: "detail-link",
    version: "0.1.0",
    description:
      "完整规则链接：href 渲染 <a>、onDetail 渲染 <button>，落在规则区下方",
    priority: 16,
    config: mergedConfig,
    hooks: {
      renderHeader: (_context: CouponPluginContext) => {
        if (!config.href && !config.onDetail) return null;

        const style: React.CSSProperties = {
          marginTop: 6,
          padding: 0,
          border: 0,
          background: "none",
          fontSize: 12,
          color: T.rulesToggleStyle.color,
          cursor: "pointer",
          fontFamily: "inherit",
          textDecoration: "underline",
          textUnderlineOffset: 2,
        };

        if (config.href) {
          return (
            <div style={{ marginTop: 6 }}>
              <a
                href={config.href}
                target="_blank"
                rel="noreferrer"
                style={style}
                data-testid="coupon-detail-link"
              >
                {text} ›
              </a>
            </div>
          );
        }

        return (
          <div style={{ marginTop: 6 }}>
            <button
              type="button"
              style={style}
              data-testid="coupon-detail-link"
              onClick={() => config.onDetail?.()}
            >
              {text} ›
            </button>
          </div>
        );
      },
    },
  };
}
`,G1=`import type {
  CouponEligibility,
  CouponOrderContext,
  CouponPlugin,
  CouponPluginContext,
} from "../../components/CouponPlugin/plugins/types";
import { evaluateEligibility } from "../../components/CouponPlugin/plugins/eligibility";

/**
 * EligibilityPlugin — 券可用性判定（不渲染任何 UI）。
 *
 * 把「当前订单能否用这张券」的判定结果写进内核 state.eligible：
 *   门槛 / 有效期 / 商品范围 / 互斥组 / 叠加规则 / 限领 / 库存（见 plugins/eligibility.ts）。
 * ClaimStatePlugin 渲染与点击都读同一结果（未装本插件时按 props.order 现算），
 * 宿主也可直接读 state.eligible 展示「差 X 元可用」「已购商品不适用」等提示。
 *
 * 未传 order 时不写 state（保持 null），避免用陈旧订单误锁按钮。
 * meta 在同目录 index.ts 挂载。
 */
export interface EligibilityConfig {
  /** 订单上下文（默认 props.order） */
  order?: CouponOrderContext;
  /** 每次判定后回调（供宿主展示不可用原因） */
  onEvaluate?: (result: CouponEligibility) => void;
}

export function createEligibilityPlugin(
  config: EligibilityConfig = {}
): CouponPlugin {
  const mergedConfig = { ...config } as any;

  const resolveOrder = (context: CouponPluginContext): CouponOrderContext | null =>
    config.order ?? context.order;

  const sameEligibility = (
    a: CouponEligibility | null | undefined,
    b: CouponEligibility | null
  ): boolean => JSON.stringify(a ?? null) === JSON.stringify(b ?? null);

  const evaluate = (context: CouponPluginContext): void => {
    const order = resolveOrder(context);
    const current = (context.state?.eligible ?? null) as CouponEligibility | null;
    if (!order) {
      // 没有订单上下文：清掉陈旧判定，领取按钮回到「不因订单被锁」
      if (!sameEligibility(current, null)) context.setState({ eligible: null });
      return;
    }
    const next = evaluateEligibility(context.coupon, order);
    if (!sameEligibility(current, next)) context.setState({ eligible: next });
    config.onEvaluate?.(next);
  };

  return {
    name: "eligibility",
    version: "0.1.0",
    description:
      "可用性判定：门槛 / 有效期 / 商品范围 / 互斥 / 叠加 / 限领 / 库存，结果写 state.eligible 供领取按钮与宿主复用",
    priority: 34,
    config: mergedConfig,
    hooks: {
      onMount: (context: CouponPluginContext) => {
        evaluate(context);
      },
      onPropsChange: (context: CouponPluginContext) => {
        evaluate(context);
      },
      onPhaseChange: (context: CouponPluginContext) => {
        // 领取后 claimedAt 落库：相对有效期的判定起点变了
        evaluate(context);
      },
    },
  };
}
`,J1=`import React from "react";
import type { CouponPlugin, CouponPluginContext } from "../../components/CouponPlugin/plugins/types";
import * as T from "../../components/CouponPlugin/plugins/tokens";

/**
 * HistoryPlugin — 领取记录（after 槽）。
 *
 * config.records（默认读 coupon.history）按时间倒序渲染最近 max 条记录。
 * 空记录渲染 null。meta 在同目录 index.ts 挂载。
 */
export interface HistoryConfig {
  /** 记录列表（默认读 coupon.history），at 为 epoch ms */
  records?: { at: number; action: string }[];
  /** 最多展示条数，默认 3 */
  max?: number;
  /** 时间格式化，默认「YYYY.MM.DD」 */
  format?: (at: number) => string;
}

const fmtDate = (ts: number): string => {
  const d = new Date(ts);
  const p = (n: number) => String(n).padStart(2, "0");
  return \`\${d.getFullYear()}.\${p(d.getMonth() + 1)}.\${p(d.getDate())}\`;
};

export function createHistoryPlugin(config: HistoryConfig = {}): CouponPlugin {
  const max = config.max ?? 3;
  const format = config.format ?? fmtDate;
  const mergedConfig = { slotPosition: "after", order: 10, ...config } as any;

  return {
    name: "history",
    version: "0.1.0",
    description:
      "领取记录：按 coupon.history / config.records 倒序渲染最近 N 条领取/使用记录",
    priority: 17,
    config: mergedConfig,
    hooks: {
      renderHeader: (context: CouponPluginContext) => {
        const records = config.records ?? context.coupon.history;
        if (!records || records.length === 0) return null;

        const shown = [...records]
          .sort((a, b) => b.at - a.at)
          .slice(0, max);

        return (
          <div style={{ marginTop: 10, fontSize: 12 }} data-testid="coupon-history">
            <div style={T.rulesTitleStyle}>领取记录</div>
            <ul style={T.rulesListStyle}>
              {shown.map((r, i) => (
                <li key={\`\${r.at}-\${i}\`} style={T.rulesItemStyle} data-testid={\`coupon-history-item-\${i}\`}>
                  <span style={{ color: "#57606a" }}>{format(r.at)}</span>
                  {" · "}
                  {r.action}
                </li>
              ))}
            </ul>
          </div>
        );
      },
    },
  };
}
`,Z1=`import React from "react";
import type { CouponPlugin, CouponPluginContext } from "../../components/CouponPlugin/plugins/types";
import { resolveStock } from "../../components/CouponPlugin/plugins/stock";
import * as T from "../../components/CouponPlugin/plugins/tokens";

/**
 * ProgressPlugin — 领取进度条（after 槽）。
 *
 * 读 coupon.total / claimed（可用 config 覆盖），渲染进度条 + 「已抢 X%」；
 * 剩余 ≤ urgentPct 时换紧迫色。数据来自接口轮询时，props 变化（onPropsChange）即重算。
 *
 * 口径与 ClaimStatePlugin 共用 plugins/stock.ts：stock ≤ 0 与 claimed ≥ total
 * 取并集，进度条写「已抢完」时领取按钮一定被判 soldout（P1-1）。
 * meta 在同目录 index.ts 挂载。
 */
export interface ProgressConfig {
  /** 发放总量（默认读 coupon.total） */
  total?: number;
  /** 已领取数（默认读 coupon.claimed） */
  claimed?: number;
  /** 剩余库存（宿主侧权威值；与 total/claimed 取并集判售罄） */
  stock?: number;
  /** 剩余 ≤ N% 标记紧迫，默认 20 */
  urgentPct?: number;
  /** 是否展示「仅剩 N 张」替代百分比，默认 true */
  showRemaining?: boolean;
}

export function createProgressPlugin(config: ProgressConfig = {}): CouponPlugin {
  const urgentPct = config.urgentPct ?? 20;
  const showRemaining = config.showRemaining ?? true;
  const mergedConfig = { slotPosition: "after", order: 10, ...config } as any;

  return {
    name: "progress",
    version: "0.1.0",
    description:
      "领取进度条：按 total/claimed/stock 渲染已抢百分比进度条，剩余 ≤ N% 换紧迫色，数据轮询即刷新",
    priority: 20,
    config: mergedConfig,
    hooks: {
      renderHeader: (context: CouponPluginContext) => {
        const stock = resolveStock(context.coupon, {
          total: config.total,
          claimed: config.claimed,
          stock: config.stock,
        });
        if (stock.total === null || stock.total <= 0) return null;
        if (stock.claimed === null || stock.claimed < 0) return null;

        const pct = stock.percent ?? 0;
        const remaining = stock.remaining ?? 0;
        const urgent = 100 - pct <= urgentPct;
        let text = \`已抢 \${pct}%\`;
        if (stock.soldout) {
          text = "已抢完";
        } else if (urgent && showRemaining) {
          text += \` · 仅剩 \${remaining} 张\`;
        }

        return (
          <div
            className="vc-coupon__progress"
            style={{ marginTop: 10, fontSize: 12, color: T.validityStyle.color }}
            data-testid="coupon-progress"
            data-percent={String(pct)}
            data-urgent={urgent ? "true" : "false"}
            data-soldout={stock.soldout ? "true" : "false"}
          >
            <div
              style={{
                height: 6,
                borderRadius: 3,
                background: "#f2f3f5",
                overflow: "hidden",
              }}
            >
              <div
                style={{
                  width: \`\${pct}%\`,
                  height: "100%",
                  borderRadius: 3,
                  background: urgent ? "#a54a00" : "#d03050",
                  transition: "width 0.3s ease",
                }}
              />
            </div>
            <div style={{ marginTop: 4, color: urgent ? "#a54a00" : "#57606a" }}>
              {text}
            </div>
          </div>
        );
      },
    },
  };
}
`,eS=`import React from "react";
import type { CouponPlugin, CouponPluginContext } from "../../components/CouponPlugin/plugins/types";
import { resolveQuota } from "../../components/CouponPlugin/plugins/quota";

/**
 * QuotaPlugin — 每人限领（after 槽）。
 *
 * 读 coupon.quota（config 可覆盖）与已领数，渲染限领提示；
 * 超限写 state.quotaReached 供 ClaimStatePlugin 门控领取按钮（同口径见 plugins/quota.ts）。
 * 事件钩子写 state，渲染钩子纯读；写入前比较当前值，避免父渲染引发的空转重渲染（P2-5）。
 * meta 在同目录 index.ts 挂载。
 */
export interface QuotaConfig {
  /** 每人限领张数（默认读 coupon.quota） */
  quota?: number;
  /** 当前用户已领张数，默认 0（可传 order.purchasedCount） */
  purchasedCount?: number;
  /** 超限回调（入参为生效的限领张数） */
  onExceed?: (quota: number) => void;
}

export function createQuotaPlugin(config: QuotaConfig = {}): CouponPlugin {
  const mergedConfig = { slotPosition: "after", order: 10, ...config } as any;

  const resolve = (context: CouponPluginContext) =>
    resolveQuota(context.coupon, {
      quota: config.quota,
      purchasedCount:
        config.purchasedCount ?? context.order?.purchasedCount,
    });

  /** 仅在判定结果变化时写 state；超限时回调 */
  const sync = (context: CouponPluginContext): void => {
    const { quota, reached } = resolve(context);
    const current = context.state?.quotaReached === true;
    if (current !== reached) context.setState({ quotaReached: reached });
    if (reached && quota !== null) config.onExceed?.(quota);
  };

  return {
    name: "quota",
    version: "0.1.0",
    description:
      "每人限领：读 coupon.quota 与已领数渲染限领提示，超限写 state.quotaReached 供领取按钮门控",
    priority: 19,
    config: mergedConfig,
    hooks: {
      onMount: (context: CouponPluginContext) => {
        sync(context);
      },
      onPropsChange: (context: CouponPluginContext) => {
        sync(context);
      },
      renderHeader: (context: CouponPluginContext) => {
        const { quota, purchased, reached } = resolve(context);
        if (quota === null) return null;

        return (
          <div
            style={{
              marginTop: 10,
              fontSize: 12,
              padding: "4px 8px",
              borderRadius: 4,
              background: reached ? "#fff1f0" : "#f6ffed",
              color: reached ? "#b32d08" : "#237a06",
              border: \`1px solid \${reached ? "#ffa39e" : "#b7eb8f"}\`,
            }}
            data-testid="coupon-quota"
            data-reached={reached ? "true" : "false"}
          >
            每人限领 {quota} 张（已领 {purchased}）
            {reached ? " · 已达限领上限" : ""}
          </div>
        );
      },
    },
  };
}
`,nS=`import React from "react";
import type { CouponPlugin, CouponPluginContext } from "../../components/CouponPlugin/plugins/types";
import * as T from "../../components/CouponPlugin/plugins/tokens";

/**
 * RemindPlugin — 开抢提醒（footer 槽，priority 30）。
 *
 * 「还没开抢」的判定不再只认 idle 相位（默认相位是 available，插件会永远不渲染，P2-2）：
 *   phase === idle                     —— 宿主显式标记未开始；
 *   state.countdown > 0                —— CountdownPlugin 倒计时进行中；
 *   validity.notStarted                —— ValidityPlugin 判出 validFrom 未到。
 * 满足任一即渲染「开抢提醒」开关；点击写内核 state.reminded 并触发 onRemind。
 * meta 在同目录 index.ts 挂载。
 */
export interface RemindConfig {
  /** 未提醒文案，默认「开抢提醒」 */
  text?: string;
  /** 已提醒文案，默认「已设提醒 ✓」 */
  remindedText?: string;
  /** 提醒开关回调 */
  onRemind?: (on: boolean) => void;
}

export function createRemindPlugin(config: RemindConfig = {}): CouponPlugin {
  const text = config.text ?? "开抢提醒";
  const remindedText = config.remindedText ?? "已设提醒 ✓";
  // 注：renderPluginSlot 的 footer 槽以 position "after" 过滤（plugin-core 现状），
  // 声明 "footer" 会被滤掉，故这里保持 "after"（P2-8 槽位元数据部分待内核支持）。
  const mergedConfig = { slotPosition: "after", order: 10, ...config } as any;

  return {
    name: "remind",
    version: "0.1.0",
    description:
      "开抢提醒：未开抢（idle / 倒计时中 / validFrom 未到）渲染提醒开关，开关态写内核 state.reminded",
    priority: 30,
    config: mergedConfig,
    hooks: {
      renderFooter: (context: CouponPluginContext) => {
        const countdown = context.state?.countdown as number | undefined;
        const pending =
          context.phase === "idle" ||
          (typeof countdown === "number" && countdown > 0) ||
          context.validity?.notStarted === true;
        if (!pending) return null;

        const on = context.state?.reminded === true;
        const toggle = async () => {
          context.setState({ reminded: !on });
          config.onRemind?.(!on);
        };

        return (
          <div style={T.actionsStyle}>
            <button
              type="button"
              style={T.claimMutedStyle}
              data-testid="coupon-remind-btn"
              data-on={on ? "true" : "false"}
              aria-pressed={on}
              onClick={() => void toggle()}
            >
              {on ? remindedText : text}
            </button>
          </div>
        );
      },
    },
  };
}
`,tS=`import React from "react";
import type {
  CouponPlugin,
  CouponPluginContext,
} from "../../components/CouponPlugin/plugins/types";
import * as T from "../../components/CouponPlugin/plugins/tokens";

/**
 * RuleExpandPlugin — 规则展开/收起（after 槽，priority 21 < Validity 的 23，渲染在有效期下方）。
 *
 * 折叠态显示前 collapsedCount 条 + 「展开 (N 项)」；展开后全量 + 「收起」。
 * 展开态写内核 state.rulesExpanded（toggleRules 即 setState）。
 *
 * 截断按条数、不用 line-clamp —— 几何体检（tasks/28）已证明 line-clamp 是
 * 纵向裁切的重灾区，且 sticky 容器里放开即可滚。
 * rules 为空渲染 null。meta 在同目录 index.ts 挂载。
 */
export interface RuleExpandConfig {
  /** 折叠态显示的规则条数，默认 1 */
  collapsedCount?: number;
  /** 展开按钮文案前缀，默认「展开」 */
  expandText?: string;
  /** 收起按钮文案，默认「收起」 */
  collapseText?: string;
  /** 按钮是否带条数（「展开 (3 项)」），默认 true */
  showCount?: boolean;
  /** 区域标题，默认「使用规则」；传空字符串隐藏标题 */
  title?: string;
}

export function createRuleExpandPlugin(
  config: RuleExpandConfig = {}
): CouponPlugin {
  const collapsedCount = config.collapsedCount ?? 1;
  const expandText = config.expandText ?? "展开";
  const collapseText = config.collapseText ?? "收起";
  const showCount = config.showCount ?? true;
  const title = config.title ?? "使用规则";
  const mergedConfig = { slotPosition: "after", order: 10, ...config } as any;

  return {
    name: "rule-expand",
    version: "0.1.0",
    description:
      "规则展开/收起：使用规则按条数折叠（默认 1 条），展开态写内核 state，可被宿主/其他插件复位",
    priority: 21,
    config: mergedConfig,
    hooks: {
      renderHeader: (context: CouponPluginContext) => {
        const rules = context.coupon.rules ?? [];
        if (rules.length === 0) return null;

        const expanded = context.rulesExpanded;
        const visible = expanded ? rules : rules.slice(0, collapsedCount);
        const hiddenCount = rules.length - visible.length;

        return (
          <div
            style={T.rulesStyle}
            data-testid="coupon-rules"
            data-expanded={expanded ? "true" : "false"}
          >
            {title ? (
              <div style={T.rulesTitleStyle}>{title}</div>
            ) : null}
            <ul style={T.rulesListStyle}>
              {visible.map((rule, i) => (
                <li
                  key={i}
                  style={T.rulesItemStyle}
                  data-testid={\`coupon-rule-\${i}\`}
                >
                  {rule}
                </li>
              ))}
            </ul>
            {rules.length > collapsedCount ? (
              <button
                type="button"
                style={T.rulesToggleStyle}
                data-testid="coupon-rules-toggle"
                aria-expanded={expanded}
                onClick={() => context.toggleRules()}
              >
                {expanded
                  ? collapseText
                  : showCount
                    ? \`\${expandText} (\${hiddenCount} 项)\`
                    : expandText}
                <span aria-hidden="true" style={T.rulesCaretStyle}>
                  {expanded ? "▲" : "▼"}
                </span>
              </button>
            ) : null}
          </div>
        );
      },
    },
  };
}
`,oS=`import React from "react";
import type { CouponData, CouponPlugin, CouponPluginContext } from "../../components/CouponPlugin/plugins/types";
import * as T from "../../components/CouponPlugin/plugins/tokens";

/**
 * SharePlugin — 分享按钮（footer 槽，priority 31 在领取按钮下方）。
 *
 * 渲染次按钮（muted 样式），点击触发 config.onShare；未配置 onShare 时按钮隐藏
 * （分享能力完全由宿主提供，插件只负责 UI 位）。
 * meta 在同目录 index.ts 挂载。
 */
export interface ShareConfig {
  /** 按钮文案，默认「分享好友」 */
  text?: string;
  /** 分享回调（入参为当前券数据）；未配置时不渲染按钮 */
  onShare?: (coupon: CouponData) => void | Promise<void>;
}

export function createSharePlugin(config: ShareConfig = {}): CouponPlugin {
  const text = config.text ?? "分享好友";
  // 注：renderPluginSlot 的 footer 槽以 position "after" 过滤（plugin-core 现状），
  // 声明 "footer" 会被滤掉，故这里保持 "after"（P2-8 槽位元数据部分待内核支持）。
  const mergedConfig = { slotPosition: "after", order: 10, ...config } as any;

  return {
    name: "share",
    version: "0.1.0",
    description: "分享按钮：footer 槽渲染次按钮，分享能力由 onShare 回调提供",
    priority: 31,
    config: mergedConfig,
    hooks: {
      renderFooter: (context: CouponPluginContext) => {
        if (!config.onShare) return null;

        const handleClick = async () => {
          await config.onShare?.(context.coupon);
          // onShare 内部若改了闭包状态，需要显式刷新
          context.forceUpdate();
        };

        return (
          <div style={T.actionsStyle}>
            <button
              type="button"
              style={T.claimMutedStyle}
              data-testid="coupon-share-btn"
              onClick={() => void handleClick()}
            >
              {text}
            </button>
          </div>
        );
      },
    },
  };
}
`,rS=`import React from "react";
import type {
  CouponPlugin,
  CouponPluginContext,
} from "../../components/CouponPlugin/plugins/types";
import * as T from "../../components/CouponPlugin/plugins/tokens";

/**
 * StackPlugin — 叠加态角标（before 槽）。
 *
 * 数据驱动：coupon.stackable === true 渲染「可叠加」强调角标；
 * showWhenNotStackable 开启时，stackable === false 渲染「不可叠加」灰标。
 * always 可强制渲染（不依赖数据字段）。
 *
 * 注意：renderPluginSlot 对未声明 slotPosition 的插件默认落 after 槽，
 * 这里必须在 config 里显式 slotPosition: "before"，否则角标会掉进 after 段。
 * meta 在同目录 index.ts 挂载。
 */
export interface StackConfig {
  /** 可叠加角标文案，默认「可叠加」 */
  text?: string;
  /** 不可叠加角标文案，默认「不可叠加」 */
  notStackableText?: string;
  /** stackable === false 时是否渲染「不可叠加」灰标，默认 false */
  showWhenNotStackable?: boolean;
  /** 不看数据字段，强制渲染可叠加角标（组合示例/纯展示场景） */
  always?: boolean;
}

export function createStackPlugin(config: StackConfig = {}): CouponPlugin {
  const text = config.text ?? "可叠加";
  const notStackableText = config.notStackableText ?? "不可叠加";
  const mergedConfig = { slotPosition: "before", order: 10, ...config } as any;

  return {
    name: "stack",
    version: "0.1.0",
    description:
      "叠加态角标：按 coupon.stackable 渲染「可叠加/不可叠加」角标，可强制展示",
    priority: 12,
    config: mergedConfig,
    hooks: {
      renderHeader: (context: CouponPluginContext) => {
        const stackable = context.coupon.stackable;

        if (config.always || stackable === true) {
          return (
            <div style={T.badgesStyle} data-testid="coupon-badges">
              <span
                style={T.badgeStackStyle}
                data-testid="coupon-stack-badge"
                data-stackable="true"
              >
                {text}
              </span>
            </div>
          );
        }

        if (config.showWhenNotStackable && stackable === false) {
          return (
            <div style={T.badgesStyle} data-testid="coupon-badges">
              <span
                style={T.badgeMutedStyle}
                data-testid="coupon-stack-badge"
                data-stackable="false"
              >
                {notStackableText}
              </span>
            </div>
          );
        }

        return null;
      },
    },
  };
}
`,lS=`import React from "react";
import type {
  CouponPlugin,
  CouponPluginContext,
  CouponValidity,
} from "../../components/CouponPlugin/plugins/types";
import {
  computeValidity,
  nextValidityCheckAt,
  sameValidity,
  DAY_MS,
} from "../../components/CouponPlugin/plugins/validity";
import * as T from "../../components/CouponPlugin/plugins/tokens";

/**
 * ValidityPlugin — 有效期判定（after 槽，priority 23 > RuleExpand 的 21，渲染在规则上方）。
 *
 * 三种判定模式（按声明字段自动选择，判定实现见 plugins/validity.ts）：
 *   absolute —— validTo（可配 validFrom）存在时；未开始/已过期/剩余天数
 *   relative —— validDays：未领取显示「领取后 N 天内有效」；已领取从 state.claimedAt
 *               （ClaimStatePlugin 写入）起算
 *   none     —— 都未声明：不渲染、不写 state
 *
 * P1-3：页面停留跨过 validTo 后必须自动收敛。每次判定后按「下一次边界」
 * （validFrom 或 validTo + 1ms）挂一个 setTimeout，到点重算并写 state；
 * 定时器存在 context.shared，onMount 返回清理函数、onUnmount 兜底清理。
 *
 * 产出写内核 state.validity（changed 才写），供 ClaimStatePlugin 联动降级 expired。
 * 时钟可注入（now），测试与 demo 可控。
 * meta 在同目录 index.ts 挂载。
 */
export interface ValidityConfig {
  /** 当前时钟，默认 Date.now（测试/demo 可注入固定值） */
  now?: () => number;
  /** 紧迫阈值：剩余 ≤ N 天标记 urgent（强调色「仅剩 X 天」），默认 3 */
  urgentDays?: number;
}

/** 定时器句柄存放键（跨渲染读取最新值） */
const TIMER_KEY = "validity:timer";
/** setTimeout 上限（超过会溢出成 1ms，长周期改为分段复查） */
const MAX_TIMEOUT = 2_147_483_647;

export function createValidityPlugin(
  config: ValidityConfig = {}
): CouponPlugin {
  const urgentDays = config.urgentDays ?? 3;
  const now = config.now ?? (() => Date.now());
  const mergedConfig = { slotPosition: "after", order: 10, ...config } as any;

  function clearTimer(context: CouponPluginContext): void {
    const timer = context.shared.get(TIMER_KEY);
    if (timer !== undefined) {
      window.clearTimeout(timer as number);
      context.shared.delete(TIMER_KEY);
    }
  }

  /** 事件钩子共用：计算并按需写入 state，然后按边界重挂定时器 */
  function evaluate(context: CouponPluginContext): void {
    const claimedAt = (context.state?.claimedAt ?? undefined) as
      | number
      | undefined;
    const next = computeValidity(context.coupon, {
      now,
      urgentDays,
      claimedAt,
    });
    if (next === null) {
      // none 模式：不写 state、不渲染
      clearTimer(context);
      return;
    }
    const current = (context.state?.validity ?? null) as CouponValidity | null;
    if (!sameValidity(next, current)) context.setState({ validity: next });
    schedule(context);
  }

  /** 按「下一次需要复查的时间点」挂定时器；已过边界则不再挂 */
  function schedule(context: CouponPluginContext): void {
    clearTimer(context);
    const claimedAt = (context.state?.claimedAt ?? undefined) as
      | number
      | undefined;
    const at = nextValidityCheckAt(context.coupon, claimedAt, now());
    if (at === null) return;

    const delay = Math.max(0, Math.min(at - now(), MAX_TIMEOUT));
    const timer = window.setTimeout(() => {
      context.shared.delete(TIMER_KEY);
      evaluate(context);
    }, delay);
    context.shared.set(TIMER_KEY, timer);
  }

  return {
    name: "validity",
    version: "0.1.0",
    description:
      "有效期判定：绝对（validFrom/validTo）/ 相对（领取后 N 天）双模式，紧迫态强调、到期自动复查写 state 供领取状态机联动",
    priority: 23,
    config: mergedConfig,
    hooks: {
      onMount: (context: CouponPluginContext) => {
        evaluate(context);
        return () => clearTimer(context);
      },
      onPropsChange: (context: CouponPluginContext) => {
        evaluate(context);
      },
      onPhaseChange: (context: CouponPluginContext) => {
        // 领取动作写入 claimedAt → 相对有效期要重算（从「领取后 N 天」切到锚定 claimedAt）
        evaluate(context);
      },
      onUnmount: (context: CouponPluginContext) => {
        clearTimer(context);
      },
      renderHeader: (context: CouponPluginContext) => {
        const validity = context.validity;
        if (!validity || validity.mode === "none") return null;

        const remainingDays =
          validity.remainingMs !== null
            ? Math.ceil(validity.remainingMs / DAY_MS)
            : null;

        return (
          <div
            style={T.validityStyle}
            data-testid="coupon-validity"
            data-mode={validity.mode}
            data-expired={validity.expired ? "true" : "false"}
            data-urgent={validity.urgent ? "true" : "false"}
          >
            <span style={T.fieldLabelStyle}>有效期</span>
            <span style={T.validityTextStyle}>{validity.text}</span>
            {validity.expired ? (
              <span style={T.chipExpiredStyle}>已过期</span>
            ) : validity.urgent && remainingDays !== null ? (
              <span style={T.chipUrgentStyle}>仅剩 {remainingDays} 天</span>
            ) : validity.notStarted ? (
              <span style={T.chipMutedStyle}>未开始</span>
            ) : null}
          </div>
        );
      },
    },
  };
}
`,tw={before:"票面上方 · before",info:"票面信息 · after",footer:"底部操作 · footer",behavior:"行为钩子 · 无渲染"},zu=["before","info","footer","behavior"],Au=Object.assign({"/src/custom-plugins/AnalyticsPlugin/doc.json":zp,"/src/custom-plugins/ChannelPlugin/doc.json":Dp,"/src/custom-plugins/ClaimStatePlugin/doc.json":_p,"/src/custom-plugins/CopyCodePlugin/doc.json":Op,"/src/custom-plugins/CountdownPlugin/doc.json":Rp,"/src/custom-plugins/DetailLinkPlugin/doc.json":Ap,"/src/custom-plugins/EligibilityPlugin/doc.json":V1,"/src/custom-plugins/HistoryPlugin/doc.json":Lp,"/src/custom-plugins/ProgressPlugin/doc.json":Np,"/src/custom-plugins/QuotaPlugin/doc.json":$p,"/src/custom-plugins/RemindPlugin/doc.json":Mp,"/src/custom-plugins/RuleExpandPlugin/doc.json":jp,"/src/custom-plugins/SharePlugin/doc.json":bp,"/src/custom-plugins/StackPlugin/doc.json":Tp,"/src/custom-plugins/ValidityPlugin/doc.json":Ep}),Fu=Object.assign({"/src/custom-plugins/AnalyticsPlugin/create.tsx":q1,"/src/custom-plugins/ChannelPlugin/create.tsx":B1,"/src/custom-plugins/ClaimStatePlugin/create.tsx":Q1,"/src/custom-plugins/CopyCodePlugin/create.tsx":K1,"/src/custom-plugins/CountdownPlugin/create.tsx":Y1,"/src/custom-plugins/DetailLinkPlugin/create.tsx":X1,"/src/custom-plugins/EligibilityPlugin/create.tsx":G1,"/src/custom-plugins/HistoryPlugin/create.tsx":J1,"/src/custom-plugins/ProgressPlugin/create.tsx":Z1,"/src/custom-plugins/QuotaPlugin/create.tsx":eS,"/src/custom-plugins/RemindPlugin/create.tsx":nS,"/src/custom-plugins/RuleExpandPlugin/create.tsx":tS,"/src/custom-plugins/SharePlugin/create.tsx":oS,"/src/custom-plugins/StackPlugin/create.tsx":rS,"/src/custom-plugins/ValidityPlugin/create.tsx":lS}),Wp=e=>e.replace(/^.*\/custom-plugins\//,"").replace(/\/.*$/,"");function iS(e){const n=Object.keys(Fu).find(r=>Wp(r)===e),t=n?Fu[n]:"",o=/priority:\s*(\d+)/.exec(t);return o?Number(o[1]):0}function aS(e){const n=Object.keys(Au).find(t=>Wp(t)===e);return n?Au[n]:{name:e,description:"（缺少 doc.json）"}}const sS=[{dir:"StackPlugin",group:"before",make:()=>Xe()},{dir:"ChannelPlugin",group:"before",make:()=>Fo()},{dir:"CountdownPlugin",group:"before",make:()=>At({startAt:Date.now()+36e5})},{dir:"ValidityPlugin",group:"info",make:()=>hn()},{dir:"QuotaPlugin",group:"info",make:()=>it()},{dir:"ProgressPlugin",group:"info",make:()=>lt()},{dir:"RuleExpandPlugin",group:"info",make:()=>Wn()},{dir:"CopyCodePlugin",group:"info",make:()=>Io()},{dir:"HistoryPlugin",group:"info",make:()=>Uo()},{dir:"DetailLinkPlugin",group:"info",make:()=>Wo()},{dir:"ClaimStatePlugin",group:"footer",make:()=>te()},{dir:"SharePlugin",group:"footer",make:()=>hl()},{dir:"RemindPlugin",group:"footer",make:()=>rs()},{dir:"AnalyticsPlugin",group:"behavior",make:()=>ls()}],Xi=sS.map(e=>{const n=aS(e.dir);return{dir:e.dir,factory:`create${e.dir.replace(/Plugin$/,"")}Plugin`,group:e.group,priority:iS(e.dir),summary:n.description,doc:n,make:e.make}}).sort((e,n)=>zu.indexOf(e.group)-zu.indexOf(n.group)||n.priority-e.priority),ow=["StackPlugin","CountdownPlugin","ValidityPlugin","QuotaPlugin","ProgressPlugin","ClaimStatePlugin","SharePlugin","RuleExpandPlugin","HistoryPlugin"];function rw(){const e=Date.now();return{id:"c-demo-full",title:"家电焕新专享券",amount:30,threshold:299,stackable:!0,total:1e3,claimed:720,quota:2,channels:["仅 APP"],code:"VD-2026-88XK",validFrom:e-3*864e5,validTo:e+4*864e5,rules:["全平台通用，可与店铺优惠叠加使用","下单满 299 元可用，家电类目除外","领取后 4 天内有效，过期自动作废","每单限用 1 张，不找零、不兑现"],history:[{at:e-2*864e5,action:"领取成功"},{at:e-6*36e5,action:"设置开抢提醒"}]}}function uS({entry:e,order:n}){var a;const{meta:t,Stage:o,source:r,file:l}=e,i=String(n).padStart(2,"0");return c.jsxs("article",{children:[c.jsx("header",{className:"page-head",children:c.jsxs("div",{children:[c.jsxs("p",{className:"eyebrow",children:[i," · ",((a=Fp[t.group])==null?void 0:a.label)??t.group]}),c.jsx("h1",{className:"page-title",children:t.title})]})}),t.intro?c.jsx("p",{className:"page-sub",children:t.intro}):null,c.jsx("section",{className:"demo-stage",children:c.jsx(o,{})}),c.jsxs("section",{className:"demo-src-wrap",children:[c.jsxs("div",{className:"demo-src-head",children:[c.jsxs("span",{className:"demo-src-title",children:["源码 · ",l]}),c.jsx("span",{className:"demo-src-hint",children:"下面这份就是上面正在跑的那份"})]}),c.jsx(_1,{code:r,title:l,collapseAfter:28,maxHeight:460})]}),c.jsx(D1,{source:r,plugins:Xi})]})}const cS={id:"claim-flow",title:"领券主流程",group:"领取流程",ref:{label:"电商 App · 商品详情领券",url:"https://vane.dev/examples/coupon/claim-flow"},pain:"光有面额和标题用户不敢领：什么时候截止、能领几张、规则有没有坑，都要一眼看清。",plugs:[{fn:"createValidityPlugin",why:"有效期判定行 + 紧迫态，结果写入内核 state 驱动状态机"},{fn:"createClaimStatePlugin",cfg:"claim: async () => ({ ok: true })",why:"主 CTA：idle/可领/领取中/已领/过期 七态按钮，领取失败自动回退"},{fn:"createQuotaPlugin",why:"每人限领 2 张，超出走 onExceed 而不是静默失败"},{fn:"createRuleExpandPlugin",cfg:"collapsedCount: 2",why:"规则默认收起只露 2 条，点开展开全量，不挤占票面"}],props:["coupon={coupon}"],note:"Validity 与 ClaimState 缺一不可：只有前者券面不会过期降级，只有后者过期了还能领。"},dS=M([hn(),te({claim:async()=>(await new Promise(e=>setTimeout(e,600)),{ok:!0})}),it(),Wn({collapsedCount:2})]);function pS(){const[e,n]=S.useState(0),t={id:"c-claim",title:"家电焕新专享券",amount:30,threshold:299,quota:2,validFrom:Date.now()-3*864e5,validTo:Date.now()+4*864e5,rules:["全平台通用，可与店铺优惠叠加使用","下单满 299 元可用，家电类目除外","领取后 4 天内有效，过期自动作废","每单限用 1 张，不找零、不兑现"]};return c.jsx(dS,{coupon:t,containerStyle:{maxWidth:420,margin:"0 auto"}},e)}const fS=Object.freeze(Object.defineProperty({__proto__:null,default:pS,meta:cS},Symbol.toStringTag,{value:"Module"})),mS={id:"limited-rush",title:"限量抢券",group:"限量抢购",ref:{label:"大促会场 · 整点抢券",url:"https://vane.dev/examples/coupon/limited-rush"},pain:"限量券要的是氛围：距开始有倒计时、剩余额度有进度，否则用户感知不到紧迫。",plugs:[{fn:"createCountdownPlugin",cfg:"startAt: Date.now() + 3600_000",why:"票面上方倒计时角标，到点 onFire 回调可接自动刷新"},{fn:"createProgressPlugin",why:"已领 720/1000 的进度条，剩 20% 进入紧迫配色"},{fn:"createQuotaPlugin",why:"每人限领 1 张，抢购场景必配防刷提示"},{fn:"createClaimStatePlugin",why:"状态机按钮：抢完自动降级「已抢光」，不再响应点击"}],props:["coupon={coupon}"],note:"Countdown 在 before 区（票面上方角标），Progress 在 after 区（票面下方信息行）。"},gS=M([At({startAt:Date.now()+36e5}),lt(),it(),te()]);function hS(){return c.jsx(gS,{coupon:{id:"c-rush",title:"整点神券 · 限量抢",amount:100,threshold:599,total:1e3,claimed:720,quota:1},containerStyle:{maxWidth:420,margin:"0 auto"}})}const yS=Object.freeze(Object.defineProperty({__proto__:null,default:hS,meta:mS},Symbol.toStringTag,{value:"Module"})),vS={id:"stack-promo",title:"大促叠券",group:"大促叠加",ref:{label:"大促主会场 · 券包页",url:"https://vane.dev/examples/coupon/stack-promo"},pain:"多券叠加规则复杂：能不能叠、哪些渠道领、怎么分享给好友凑单，都要在票面上说清。",plugs:[{fn:"createStackPlugin",why:"「可叠加」角标：stackable 数据源驱动，不可叠时默认不展示"},{fn:"createChannelPlugin",why:"渠道限定标签（仅 APP / 仅新客），领错渠道的客诉直接归零"},{fn:"createSharePlugin",why:"footer 分享按钮，裂变动线直接长在券上"}],props:["coupon={coupon}"],note:"三个都是纯展示/回调插件，没有任何状态机依赖，可与其他场景自由组合。"},xS=M([Xe(),Fo(),hl()]);function CS(){return c.jsx(xS,{coupon:{id:"c-stack",title:"跨店每满减叠加券",amount:50,threshold:300,stackable:!0,channels:["仅 APP","仅新客"]},containerStyle:{maxWidth:420,margin:"0 auto"}})}const SS=Object.freeze(Object.defineProperty({__proto__:null,default:CS,meta:vS},Symbol.toStringTag,{value:"Module"})),wS={id:"post-claim",title:"领后核销",group:"领后核销",ref:{label:"会员中心 · 我的券包",url:"https://vane.dev/examples/coupon/post-claim"},pain:"领完券用户不知道码在哪、去哪用：券码、记录、跳转三件套把领后动线补全。",plugs:[{fn:"createClaimStatePlugin",cfg:'initialPhase: "claimed"',why:"直接以「已领取」半终态打开，可继续核销为 used"},{fn:"createCopyCodePlugin",why:"claimed 后展示券码一键复制，onCopied 可接埋点"},{fn:"createHistoryPlugin",why:"领取/使用记录倒序展示，最多 3 条可配"},{fn:"createDetailLinkPlugin",why:"「去使用」跳转链接，把用户送回商详"}],props:["coupon={coupon}"],note:"DetailLink 的 href 必须由业务传入（或经 onDetail 接管），这里演示用占位链接。"},PS=M([te({initialPhase:"claimed"}),Io(),Uo(),Wo({href:"https://vane.dev/examples/coupon/post-claim"})]);function kS(){const e=Date.now();return c.jsx(PS,{coupon:{id:"c-used",title:"家电焕新专享券",amount:30,threshold:299,code:"VD-2026-88XK",validTo:e+4*864e5,history:[{at:e-2*864e5,action:"领取成功"},{at:e-2*864e5+6e4,action:"查看使用规则"}]},containerStyle:{maxWidth:420,margin:"0 auto"}})}const _S=Object.freeze(Object.defineProperty({__proto__:null,default:kS,meta:wS},Symbol.toStringTag,{value:"Module"})),ES={id:"full-stack",title:"全功能中台",group:"全量装配",ref:{label:"券系统中台 · 全能力演示",url:"https://vane.dev/examples/coupon/full-stack"},pain:"接入方想一次看全 14 个插件的真实排布与交互，逐页翻示例太慢。",plugs:[{fn:"createCountdownPlugin",cfg:"startAt: Date.now() + 3600_000",why:"before：开抢倒计时"},{fn:"createStackPlugin",why:"before：可叠加角标"},{fn:"createChannelPlugin",why:"before：渠道限定标签"},{fn:"createValidityPlugin",why:"after：有效期行，驱动状态机降级"},{fn:"createQuotaPlugin",why:"after：限领提示"},{fn:"createProgressPlugin",why:"after：限量进度条"},{fn:"createRuleExpandPlugin",why:"after：规则折叠"},{fn:"createCopyCodePlugin",why:"after：claimed 后的券码复制"},{fn:"createHistoryPlugin",why:"after：领取/使用记录"},{fn:"createDetailLinkPlugin",cfg:'href: "https://vane.dev/examples/coupon/full-stack"',why:"after：去使用跳转"},{fn:"createClaimStatePlugin",why:"footer：领取状态机主按钮"},{fn:"createSharePlugin",why:"footer：分享裂变"},{fn:"createRemindPlugin",why:"footer：开抢提醒"},{fn:"createAnalyticsPlugin",why:"无渲染：onMount 埋点上报，不动 UI"}],props:["coupon={coupon}"],note:"全量装配是压舱石场景：任何插件排序 / 隔离回归都会在这里先炸出来。"},no=Date.now(),jS=M([At({startAt:no+36e5}),Xe(),Fo(),hn(),it(),lt(),Wn(),Io(),Uo(),Wo({href:"https://vane.dev/examples/coupon/full-stack"}),te(),hl(),rs(),ls()]);function TS(){return c.jsx(jS,{coupon:{id:"c-full",title:"家电焕新专享券",amount:30,threshold:299,stackable:!0,total:1e3,claimed:720,quota:2,channels:["仅 APP"],code:"VD-2026-88XK",validFrom:no-3*864e5,validTo:no+4*864e5,rules:["全平台通用，可与店铺优惠叠加使用","下单满 299 元可用，家电类目除外","领取后 4 天内有效，过期自动作废","每单限用 1 张，不找零、不兑现"],history:[{at:no-2*864e5,action:"领取成功"},{at:no-6*36e5,action:"设置开抢提醒"}]},containerStyle:{maxWidth:420,margin:"0 auto"}})}const NS=Object.freeze(Object.defineProperty({__proto__:null,default:TS,meta:ES},Symbol.toStringTag,{value:"Module"})),$S=`import React, { useState } from "react";
import { createCouponCard } from "vane-coupon";
import {
  createClaimStatePlugin,
  createQuotaPlugin,
  createRuleExpandPlugin,
  createValidityPlugin,
} from "vane-coupon/custom-plugins";
import type { ScenarioMeta } from "./types";

/**
 * 01 · 领券主流程
 *
 * 「有效期判定 + 领取状态机 + 限领 + 规则」四个原子插件拼成一张可领取的券。
 * Validity 与 ClaimState 只经内核 state 联动：过期券自动降级为「已过期」。
 */
export const meta: ScenarioMeta = {
  id: "claim-flow",
  title: "领券主流程",
  group: "领取流程",
  ref: { label: "电商 App · 商品详情领券", url: "https://vane.dev/examples/coupon/claim-flow" },
  pain: "光有面额和标题用户不敢领：什么时候截止、能领几张、规则有没有坑，都要一眼看清。",
  plugs: [
    { fn: "createValidityPlugin", why: "有效期判定行 + 紧迫态，结果写入内核 state 驱动状态机" },
    {
      fn: "createClaimStatePlugin",
      cfg: "claim: async () => ({ ok: true })",
      why: "主 CTA：idle/可领/领取中/已领/过期 七态按钮，领取失败自动回退",
    },
    { fn: "createQuotaPlugin", why: "每人限领 2 张，超出走 onExceed 而不是静默失败" },
    {
      fn: "createRuleExpandPlugin",
      cfg: "collapsedCount: 2",
      why: "规则默认收起只露 2 条，点开展开全量，不挤占票面",
    },
  ],
  props: ["coupon={coupon}"],
  note: "Validity 与 ClaimState 缺一不可：只有前者券面不会过期降级，只有后者过期了还能领。",
};

const Coupon = createCouponCard([
  createValidityPlugin(),
  createClaimStatePlugin({
    claim: async () => {
      await new Promise((r) => setTimeout(r, 600));
      return { ok: true };
    },
  }),
  createQuotaPlugin(),
  createRuleExpandPlugin({ collapsedCount: 2 }),
]);

export default function Stage() {
  const [claimed, setClaimed] = useState(0);
  const coupon = {
    id: "c-claim",
    title: "家电焕新专享券",
    amount: 30,
    threshold: 299,
    quota: 2,
    validFrom: Date.now() - 3 * 86_400_000,
    validTo: Date.now() + 4 * 86_400_000,
    rules: [
      "全平台通用，可与店铺优惠叠加使用",
      "下单满 299 元可用，家电类目除外",
      "领取后 4 天内有效，过期自动作废",
      "每单限用 1 张，不找零、不兑现",
    ],
  };
  return (
    <Coupon
      coupon={coupon}
      containerStyle={{ maxWidth: 420, margin: "0 auto" }}
      key={claimed}
    />
  );
}
`,RS=`import React from "react";
import { createCouponCard } from "vane-coupon";
import {
  createClaimStatePlugin,
  createCountdownPlugin,
  createProgressPlugin,
  createQuotaPlugin,
} from "vane-coupon/custom-plugins";
import type { ScenarioMeta } from "./types";

/**
 * 02 · 限量抢券
 *
 * 倒计时制造「还没开始」的蓄水期，进度条制造「快抢完」的紧迫感——
 * 都是 before/after 区的无状态氛围插件，核心状态机照常工作。
 */
export const meta: ScenarioMeta = {
  id: "limited-rush",
  title: "限量抢券",
  group: "限量抢购",
  ref: { label: "大促会场 · 整点抢券", url: "https://vane.dev/examples/coupon/limited-rush" },
  pain: "限量券要的是氛围：距开始有倒计时、剩余额度有进度，否则用户感知不到紧迫。",
  plugs: [
    {
      fn: "createCountdownPlugin",
      cfg: "startAt: Date.now() + 3600_000",
      why: "票面上方倒计时角标，到点 onFire 回调可接自动刷新",
    },
    { fn: "createProgressPlugin", why: "已领 720/1000 的进度条，剩 20% 进入紧迫配色" },
    { fn: "createQuotaPlugin", why: "每人限领 1 张，抢购场景必配防刷提示" },
    { fn: "createClaimStatePlugin", why: "状态机按钮：抢完自动降级「已抢光」，不再响应点击" },
  ],
  props: ["coupon={coupon}"],
  note: "Countdown 在 before 区（票面上方角标），Progress 在 after 区（票面下方信息行）。",
};

const Coupon = createCouponCard([
  createCountdownPlugin({ startAt: Date.now() + 3600_000 }),
  createProgressPlugin(),
  createQuotaPlugin(),
  createClaimStatePlugin(),
]);

export default function Stage() {
  return (
    <Coupon
      coupon={{
        id: "c-rush",
        title: "整点神券 · 限量抢",
        amount: 100,
        threshold: 599,
        total: 1000,
        claimed: 720,
        quota: 1,
      }}
      containerStyle={{ maxWidth: 420, margin: "0 auto" }}
    />
  );
}
`,DS=`import React from "react";
import { createCouponCard } from "vane-coupon";
import {
  createChannelPlugin,
  createSharePlugin,
  createStackPlugin,
} from "vane-coupon/custom-plugins";
import type { ScenarioMeta } from "./types";

/**
 * 03 · 大促叠券
 *
 * 叠加规则 + 渠道限定 + 分享裂变，是大促券包页的三件套。
 * 全部是无状态氛围插件，装配多也不会互相干扰。
 */
export const meta: ScenarioMeta = {
  id: "stack-promo",
  title: "大促叠券",
  group: "大促叠加",
  ref: { label: "大促主会场 · 券包页", url: "https://vane.dev/examples/coupon/stack-promo" },
  pain: "多券叠加规则复杂：能不能叠、哪些渠道领、怎么分享给好友凑单，都要在票面上说清。",
  plugs: [
    { fn: "createStackPlugin", why: "「可叠加」角标：stackable 数据源驱动，不可叠时默认不展示" },
    { fn: "createChannelPlugin", why: "渠道限定标签（仅 APP / 仅新客），领错渠道的客诉直接归零" },
    { fn: "createSharePlugin", why: "footer 分享按钮，裂变动线直接长在券上" },
  ],
  props: ["coupon={coupon}"],
  note: "三个都是纯展示/回调插件，没有任何状态机依赖，可与其他场景自由组合。",
};

const Coupon = createCouponCard([
  createStackPlugin(),
  createChannelPlugin(),
  createSharePlugin(),
]);

export default function Stage() {
  return (
    <Coupon
      coupon={{
        id: "c-stack",
        title: "跨店每满减叠加券",
        amount: 50,
        threshold: 300,
        stackable: true,
        channels: ["仅 APP", "仅新客"],
      }}
      containerStyle={{ maxWidth: 420, margin: "0 auto" }}
    />
  );
}
`,bS=`import React from "react";
import { createCouponCard } from "vane-coupon";
import {
  createClaimStatePlugin,
  createCopyCodePlugin,
  createDetailLinkPlugin,
  createHistoryPlugin,
} from "vane-coupon/custom-plugins";
import type { ScenarioMeta } from "./types";

/**
 * 04 · 领后核销
 *
 * 领完券的券详情页：已领取态 + 券码复制 + 领取记录 + 使用跳转。
 * CopyCode 只在 claimed 之后展示券码，History 按时间倒序。
 */
export const meta: ScenarioMeta = {
  id: "post-claim",
  title: "领后核销",
  group: "领后核销",
  ref: { label: "会员中心 · 我的券包", url: "https://vane.dev/examples/coupon/post-claim" },
  pain: "领完券用户不知道码在哪、去哪用：券码、记录、跳转三件套把领后动线补全。",
  plugs: [
    {
      fn: "createClaimStatePlugin",
      cfg: "initialPhase: \\"claimed\\"",
      why: "直接以「已领取」半终态打开，可继续核销为 used",
    },
    { fn: "createCopyCodePlugin", why: "claimed 后展示券码一键复制，onCopied 可接埋点" },
    { fn: "createHistoryPlugin", why: "领取/使用记录倒序展示，最多 3 条可配" },
    { fn: "createDetailLinkPlugin", why: "「去使用」跳转链接，把用户送回商详" },
  ],
  props: ["coupon={coupon}"],
  note: "DetailLink 的 href 必须由业务传入（或经 onDetail 接管），这里演示用占位链接。",
};

const Coupon = createCouponCard([
  createClaimStatePlugin({ initialPhase: "claimed" }),
  createCopyCodePlugin(),
  createHistoryPlugin(),
  createDetailLinkPlugin({ href: "https://vane.dev/examples/coupon/post-claim" }),
]);

export default function Stage() {
  const now = Date.now();
  return (
    <Coupon
      coupon={{
        id: "c-used",
        title: "家电焕新专享券",
        amount: 30,
        threshold: 299,
        code: "VD-2026-88XK",
        validTo: now + 4 * 86_400_000,
        history: [
          { at: now - 2 * 86_400_000, action: "领取成功" },
          { at: now - 2 * 86_400_000 + 60_000, action: "查看使用规则" },
        ],
      }}
      containerStyle={{ maxWidth: 420, margin: "0 auto" }}
    />
  );
}
`,MS=`import React from "react";
import { createCouponCard } from "vane-coupon";
import {
  createAnalyticsPlugin,
  createChannelPlugin,
  createClaimStatePlugin,
  createCopyCodePlugin,
  createCountdownPlugin,
  createDetailLinkPlugin,
  createHistoryPlugin,
  createProgressPlugin,
  createQuotaPlugin,
  createRemindPlugin,
  createRuleExpandPlugin,
  createSharePlugin,
  createStackPlugin,
  createValidityPlugin,
} from "vane-coupon/custom-plugins";
import type { ScenarioMeta } from "./types";

/**
 * 05 · 全功能中台
 *
 * 14 个插件全部装配：四段插槽各司其职（before 角标 / after 信息 / footer 操作 / 行为钩子），
 * 验证「多插件同槽排序（order 升序 → priority 降序）+ 单插件抛错隔离」都成立。
 */
export const meta: ScenarioMeta = {
  id: "full-stack",
  title: "全功能中台",
  group: "全量装配",
  ref: { label: "券系统中台 · 全能力演示", url: "https://vane.dev/examples/coupon/full-stack" },
  pain: "接入方想一次看全 14 个插件的真实排布与交互，逐页翻示例太慢。",
  plugs: [
    { fn: "createCountdownPlugin", cfg: "startAt: Date.now() + 3600_000", why: "before：开抢倒计时" },
    { fn: "createStackPlugin", why: "before：可叠加角标" },
    { fn: "createChannelPlugin", why: "before：渠道限定标签" },
    { fn: "createValidityPlugin", why: "after：有效期行，驱动状态机降级" },
    { fn: "createQuotaPlugin", why: "after：限领提示" },
    { fn: "createProgressPlugin", why: "after：限量进度条" },
    { fn: "createRuleExpandPlugin", why: "after：规则折叠" },
    { fn: "createCopyCodePlugin", why: "after：claimed 后的券码复制" },
    { fn: "createHistoryPlugin", why: "after：领取/使用记录" },
    { fn: "createDetailLinkPlugin", cfg: "href: \\"https://vane.dev/examples/coupon/full-stack\\"", why: "after：去使用跳转" },
    { fn: "createClaimStatePlugin", why: "footer：领取状态机主按钮" },
    { fn: "createSharePlugin", why: "footer：分享裂变" },
    { fn: "createRemindPlugin", why: "footer：开抢提醒" },
    { fn: "createAnalyticsPlugin", why: "无渲染：onMount 埋点上报，不动 UI" },
  ],
  props: ["coupon={coupon}"],
  note: "全量装配是压舱石场景：任何插件排序 / 隔离回归都会在这里先炸出来。",
};

const now = Date.now();

const Coupon = createCouponCard([
  createCountdownPlugin({ startAt: now + 3600_000 }),
  createStackPlugin(),
  createChannelPlugin(),
  createValidityPlugin(),
  createQuotaPlugin(),
  createProgressPlugin(),
  createRuleExpandPlugin(),
  createCopyCodePlugin(),
  createHistoryPlugin(),
  createDetailLinkPlugin({ href: "https://vane.dev/examples/coupon/full-stack" }),
  createClaimStatePlugin(),
  createSharePlugin(),
  createRemindPlugin(),
  createAnalyticsPlugin(),
]);

export default function Stage() {
  return (
    <Coupon
      coupon={{
        id: "c-full",
        title: "家电焕新专享券",
        amount: 30,
        threshold: 299,
        stackable: true,
        total: 1000,
        claimed: 720,
        quota: 2,
        channels: ["仅 APP"],
        code: "VD-2026-88XK",
        validFrom: now - 3 * 86_400_000,
        validTo: now + 4 * 86_400_000,
        rules: [
          "全平台通用，可与店铺优惠叠加使用",
          "下单满 299 元可用，家电类目除外",
          "领取后 4 天内有效，过期自动作废",
          "每单限用 1 张，不找零、不兑现",
        ],
        history: [
          { at: now - 2 * 86_400_000, action: "领取成功" },
          { at: now - 6 * 3600_000, action: "设置开抢提醒" },
        ],
      }}
      containerStyle={{ maxWidth: 420, margin: "0 auto" }}
    />
  );
}
`,OS=Object.assign({"./01-claim-flow.tsx":fS,"./02-limited-rush.tsx":yS,"./03-stack-promo.tsx":SS,"./04-post-claim.tsx":_S,"./05-full-stack.tsx":NS}),LS=Object.assign({"./01-claim-flow.tsx":$S,"./02-limited-rush.tsx":RS,"./03-stack-promo.tsx":DS,"./04-post-claim.tsx":bS,"./05-full-stack.tsx":MS}),zS=e=>e.replace(/^\.\//,""),Jr=Object.entries(OS).map(([e,n])=>{const t=zS(e);return{meta:n.meta,Component:n.default,file:t,source:LS[e]??""}}).sort((e,n)=>e.file.localeCompare(n.file)),lw=Jr.reduce((e,n)=>(e.includes(n.meta.group)||e.push(n.meta.group),e),[]),iw=Array.from(new Set(Jr.flatMap(e=>e.meta.plugs.map(n=>n.fn)))).sort(),AS=S.lazy(()=>Ga(()=>import("./HomePage-1sKkn4VP.js"),[],import.meta.url).then(e=>({default:e.HomePage}))),FS=S.lazy(()=>Ga(()=>import("./PluginsPage-czJFZs4e.js"),[],import.meta.url).then(e=>({default:e.PluginsPage}))),IS=S.lazy(()=>Ga(()=>import("./ScenariosPage-DRnaPDBc.js"),[],import.meta.url).then(e=>({default:e.ScenariosPage}))),US={pkg:"vane-coupon",brand:"C",subtitle:"优惠券 / plugin index",nav:[{to:"/",label:"总览",hint:"overview"},{to:"/plugins",label:"插件工坊",hint:`${Xi.length} plugins`},{to:"/scenarios",label:"场景示例",hint:`${Jr.length} plates`}],routes:[{path:"/",element:c.jsx(AS,{})},{path:"/plugins",element:c.jsx(FS,{})},{path:"/scenarios",element:c.jsx(IS,{})}],crumb:e=>e.startsWith("/plugins")?"workshop · 插件工坊":e.startsWith("/scenarios")?"plates · 场景示例":"index · 总览",demos:{label:"逐项示例",groups:C1.map(e=>({key:e,label:Fp[e].label})),entries:Yi,detail:(e,n)=>c.jsx(uS,{entry:e,order:n})},footer:[`${Xi.length} PLUGINS · ${Jr.length} PLATES`,`${Yi.length} DEMOS · STATE MACHINE CORE`]};function WS(){return c.jsx(jh,{config:US})}const HS='[data-testid="coupon-claim-btn"], [data-testid="coupon-rules-toggle"], [data-testid="coupon-stack-badge"]';function Iu(e){const n=[];if(!e)return{problems:["体检根节点不存在"],checked:0};const t=Array.from(e.querySelectorAll(HS));let o=0;const r=e.getBoundingClientRect();if(!t.some(a=>{const s=a.getBoundingClientRect();return s.width!==0||s.height!==0}))return{problems:[],checked:0};const i=t.map(a=>(o+=1,{el:a,r:a.getBoundingClientRect()}));for(const{el:a,r:s}of i){const u=a.dataset.testid??a.tagName;if(s.width===0||s.height===0){n.push(`零尺寸元素：${u}（${s.width}×${s.height}）`);continue}const p=s.left-r.left,f=s.top-r.top;(p<-1||f<-1)&&n.push(`负坐标：${u}（left=${p.toFixed(1)}, top=${f.toFixed(1)}）`),(s.right-r.right>1||s.bottom-r.bottom>1)&&n.push(`越界：${u}（右溢 ${(s.right-r.right).toFixed(1)}px，下溢 ${(s.bottom-r.bottom).toFixed(1)}px）`)}for(let a=0;a<i.length;a++)for(let s=a+1;s<i.length;s++){const u=i[a].r,p=i[s].r,f=Math.min(u.right,p.right)-Math.max(u.left,p.left),m=Math.min(u.bottom,p.bottom)-Math.max(u.top,p.top);f>1&&m>1&&n.push(`重叠：${i[a].el.dataset.testid} × ${i[s].el.dataset.testid}`)}return e.scrollHeight<r.height-2&&n.push("容器没撑开：scrollHeight 盖不住内容底边"),{problems:n,checked:o}}const Yt=24*60*60*1e3,ye={id:"st",title:"自测券",amount:10,threshold:99},VS=M([]),qS=M([te({claim:async()=>({ok:!0})})]),BS=M([te({claim:async()=>({ok:!1,reason:"超出限领"})})]),QS=M([te({stock:0})]),Yl=M([hn({urgentDays:3}),te({claim:async()=>({ok:!0})})]),KS=M([Wn()]),Uu=M([Xe({showWhenNotStackable:!0})]),YS=M([Xe({showWhenNotStackable:!0}),hn({urgentDays:3}),Wn(),te({claim:async()=>({ok:!0})})]),XS=M([lt({urgentPct:30})]),GS=M([it({quota:2,purchasedCount:2})]),JS=M([Io({code:"ST-2026"}),te({claim:async()=>({ok:!0})})]),Gi=()=>new Promise(e=>setTimeout(e,0)),xn=async(e,n=60)=>{for(let t=0;t<n&&!e();t++)await Gi()};async function ve(e){const n=document.createElement("div");n.style.cssText="position:fixed;left:0;top:0;width:420px;background:#fff",document.body.appendChild(n);const t=ep(n);return re.flushSync(()=>t.render(e)),await Gi(),{host:n,root:t,q:o=>n.querySelector(o),qq:o=>n.querySelectorAll(o),click:async o=>{const r=n.querySelector(o);if(!r)throw new Error(`找不到元素 ${o}`);re.flushSync(()=>r.click()),await Gi()}}}async function ZS(){var o,r,l,i,a,s,u,p,f,m,y,x,C,k,g,d,h;const e=[];let n=0;const t=(v,w)=>{n+=1,document.title=`SELFTEST RUNNING ${n}`,w||e.push(v)};{const v=await ve(c.jsx(VS,{coupon:ye}));t("裸核心：渲染面额 ¥10",((r=(o=v.q('[data-testid="coupon-amount"]'))==null?void 0:o.textContent)==null?void 0:r.includes("10"))===!0),t("裸核心：门槛文案 满99可用",((l=v.q('[data-testid="coupon-threshold"]'))==null?void 0:l.textContent)==="满99可用"),t("裸核心：渲染标题",((i=v.q('[data-testid="coupon-title"]'))==null?void 0:i.textContent)==="自测券"),re.flushSync(()=>v.root.unmount()),v.host.remove()}{const v=await ve(c.jsx(qS,{coupon:ye})),w=()=>v.q('[data-testid="coupon-claim-btn"]');t("状态机：初始 available",((a=w())==null?void 0:a.dataset.phase)==="available"),await v.click('[data-testid="coupon-claim-btn"]'),await xn(()=>{var _;return((_=w())==null?void 0:_.dataset.phase)==="claimed"}),t("状态机：点击后 claimed（异步 claim 已 resolve）",((s=w())==null?void 0:s.dataset.phase)==="claimed"),t("状态机：终态按钮禁用",((u=w())==null?void 0:u.disabled)===!0),t("几何体检：领取卡无越界/重叠",Iu(v.host).problems.length===0),re.flushSync(()=>v.root.unmount()),v.host.remove()}{const v=await ve(c.jsx(BS,{coupon:ye}));await v.click('[data-testid="coupon-claim-btn"]'),await xn(()=>{var j;return((j=v.q('[data-testid="coupon-claim-btn"]'))==null?void 0:j.dataset.phase)==="available"}),t("状态机：领取失败回退 available",((p=v.q('[data-testid="coupon-claim-btn"]'))==null?void 0:p.dataset.phase)==="available"),re.flushSync(()=>v.root.unmount()),v.host.remove();const w=await ve(c.jsx(QS,{coupon:ye})),_=w.q('[data-testid="coupon-claim-btn"]');t("状态机：stock=0 挂载即 soldout",(_==null?void 0:_.dataset.phase)==="soldout"),t("状态机：soldout 文案「已抢光」",(_==null?void 0:_.textContent)==="已抢光"),re.flushSync(()=>w.root.unmount()),w.host.remove()}{const v=Date.now(),w=await ve(c.jsx(Yl,{coupon:{...ye,validFrom:v-10*Yt,validTo:v+2*Yt}})),_=w.q('[data-testid="coupon-validity"]');t("有效期：紧迫态标记 urgent",(_==null?void 0:_.dataset.urgent)==="true"),t("有效期：紧迫角标「仅剩」",((f=_==null?void 0:_.textContent)==null?void 0:f.includes("仅剩"))===!0);const j=w.q('[data-testid="coupon-claim-btn"]');t("有效期：未过期仍可领取",(j==null?void 0:j.dataset.phase)==="available"),re.flushSync(()=>w.root.unmount()),w.host.remove();const N=await ve(c.jsx(Yl,{coupon:{...ye,validTo:v-Yt}})),P=N.q('[data-testid="coupon-claim-btn"]');await xn(()=>(P==null?void 0:P.dataset.phase)==="expired"),t("有效期：过期联动状态机降级 expired",(P==null?void 0:P.dataset.phase)==="expired"),t("有效期：过期角标「已过期」",((y=(m=N.q('[data-testid="coupon-validity"]'))==null?void 0:m.textContent)==null?void 0:y.includes("已过期"))===!0),re.flushSync(()=>N.root.unmount()),N.host.remove();const E=await ve(c.jsx(Yl,{coupon:{...ye,validDays:7}})),R=E.q('[data-testid="coupon-validity"]');t("有效期：相对模式「领取后 7 天内有效」",((x=R==null?void 0:R.textContent)==null?void 0:x.includes("领取后 7 天内有效"))===!0),await E.click('[data-testid="coupon-claim-btn"]');const L=E.q('[data-testid="coupon-validity"]');await xn(()=>!((L==null?void 0:L.textContent)??"").includes("领取后")),t("有效期：领取后重算锚定 claimedAt",((L==null?void 0:L.textContent)??"").includes("领取后")===!1),re.flushSync(()=>E.root.unmount()),E.host.remove()}{const v=await ve(c.jsx(KS,{coupon:{...ye,rules:["一","二","三","四","五"]}}));t("规则：默认折叠 1 条",v.qq('[data-testid^="coupon-rule-"]').length===1),await v.click('[data-testid="coupon-rules-toggle"]'),t("规则：展开后 5 条",v.qq('[data-testid^="coupon-rule-"]').length===5),await v.click('[data-testid="coupon-rules-toggle"]'),t("规则：收起后 1 条",v.qq('[data-testid^="coupon-rule-"]').length===1),re.flushSync(()=>v.root.unmount()),v.host.remove()}{const v=await ve(c.jsx(Uu,{coupon:{...ye,stackable:!0}}));t("叠加：stackable=true 显示可叠加",((C=v.q('[data-testid="coupon-stack-badge"]'))==null?void 0:C.textContent)==="可叠加"),re.flushSync(()=>v.root.unmount()),v.host.remove();const w=await ve(c.jsx(Uu,{coupon:{...ye,stackable:!1}}));t("叠加：false 显示不可叠加灰标",((k=w.q('[data-testid="coupon-stack-badge"]'))==null?void 0:k.textContent)==="不可叠加"),re.flushSync(()=>w.root.unmount()),w.host.remove()}{const v=Date.now(),w=await ve(c.jsx(YS,{coupon:{...ye,amount:88,threshold:599,stackable:!0,validFrom:v-12*Yt,validTo:v+2*Yt,rules:["规则 A","规则 B","规则 C"]}}));t("合体：角标渲染",!!w.q('[data-testid="coupon-stack-badge"]')),t("合体：有效期渲染",!!w.q('[data-testid="coupon-validity"]')),t("合体：规则渲染",!!w.q('[data-testid="coupon-rules"]'));const _=w.q('[data-testid="coupon-validity"]'),j=w.q('[data-testid="coupon-rules"]');t("合体：槽内顺序 有效期在规则上方（priority 降序）",!!(_&&j&&_.compareDocumentPosition(j)&Node.DOCUMENT_POSITION_FOLLOWING)),t("合体：领取按钮渲染",!!w.q('[data-testid="coupon-claim-btn"]'));const N=Iu(w.host);t("合体：几何体检 0 问题（happy-dom 无布局引擎时自动跳过）",N.problems.length===0&&(N.checked===0||N.checked>=2)),re.flushSync(()=>w.root.unmount()),w.host.remove()}{const v=await ve(c.jsx(ns,{coupon:ye}));t("裸 CouponCore：直接渲染可用",!!v.q('[data-testid="coupon-title"]')),t("裸 CouponCore：挂载标记存在",!!v.q('[data-testid="coupon-mounted"]')),re.flushSync(()=>v.root.unmount()),v.host.remove()}{const v=await ve(c.jsx(XS,{coupon:{...ye,total:100,claimed:85}})),w=v.q('[data-testid="coupon-progress"]');t("进度：percent 属性 85",(w==null?void 0:w.dataset.percent)==="85"),t("进度：紧迫态 urgent=true（urgentPct 30）",(w==null?void 0:w.dataset.urgent)==="true"),t("进度：文案含 已抢 85% 与 仅剩 15 张",((w==null?void 0:w.textContent)??"").includes("已抢 85%")&&((w==null?void 0:w.textContent)??"").includes("仅剩 15 张")),re.flushSync(()=>v.root.unmount()),v.host.remove();const _=await ve(c.jsx(GS,{coupon:ye})),j=_.q('[data-testid="coupon-quota"]');t("限领：reached=true",(j==null?void 0:j.dataset.reached)==="true"),t("限领：文案「已达限领上限」",((j==null?void 0:j.textContent)??"").includes("已达限领上限")),re.flushSync(()=>_.root.unmount()),_.host.remove();const N=await ve(c.jsx(JS,{coupon:ye}));t("券码：available 相位不渲染",!N.q('[data-testid="coupon-code"]')),await N.click('[data-testid="coupon-claim-btn"]'),await xn(()=>!!N.q('[data-testid="coupon-code"]')),t("券码：领取后展示券码 ST-2026",((g=N.q('[data-testid="coupon-code"]'))==null?void 0:g.textContent)==="ST-2026"),t("券码：复制按钮存在",!!N.q('[data-testid="coupon-copy-btn"]')),re.flushSync(()=>N.root.unmount()),N.host.remove();const P=M([At({startAt:Date.now()+200,tickMs:50,autoStart:!0})]),E=await ve(c.jsx(P,{coupon:ye})),R=()=>E.q('[data-testid="coupon-root"]');await xn(()=>!!E.q('[data-testid="coupon-countdown-value"]'),150),t("倒计时：渲染「距开抢」",(((d=E.q('[data-testid="coupon-countdown-value"]'))==null?void 0:d.textContent)??"").includes("距开抢")),await xn(()=>{var L;return((L=R())==null?void 0:L.dataset.phase)==="available"},150),t("倒计时：到点 autoStart 进入 available",((h=R())==null?void 0:h.dataset.phase)==="available"),await xn(()=>!E.q('[data-testid="coupon-countdown-value"]'),150),t("倒计时：到点后倒计时消失",!E.q('[data-testid="coupon-countdown-value"]')),re.flushSync(()=>E.root.unmount()),E.host.remove()}return{total:n,passed:n-e.length,failed:e}}async function ew(){document.title="SELFTEST RUNNING";try{const e=await ZS();document.title=e.failed.length===0?`SELFTEST OK ${e.passed}/${e.total}`:`SELFTEST FAIL ${e.passed}/${e.total} :: ${e.failed.join(" | ")}`}catch(e){document.title=`SELFTEST ERROR :: ${e.message}`}}Xl.createRoot(document.getElementById("root")).render(c.jsx(WS,{}));typeof location<"u"&&location.search.includes("selftest=1")&&ew();export{_1 as C,Yi as D,zu as G,Xi as P,Jr as S,iw as U,ow as a,tw as b,M as c,rw as d,lw as e,Iu as f,c as j,S as r};
