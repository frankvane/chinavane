const __vite__mapDeps=(i,m=__vite__mapDeps,d=(m.f||(m.f=["./HomePage-CDAEwwbJ.js","./catalog-BUrivhCw.js","./ScenariosPage-CCZeEPZn.js"])))=>i.map(i=>d[i]);
var tf=Object.defineProperty;var rf=(e,n,t)=>n in e?tf(e,n,{enumerable:!0,configurable:!0,writable:!0,value:t}):e[n]=t;var Da=(e,n,t)=>rf(e,typeof n!="symbol"?n+"":n,t);function of(e,n){for(var t=0;t<n.length;t++){const r=n[t];if(typeof r!="string"&&!Array.isArray(r)){for(const o in r)if(o!=="default"&&!(o in e)){const i=Object.getOwnPropertyDescriptor(r,o);i&&Object.defineProperty(e,o,i.get?i:{enumerable:!0,get:()=>r[o]})}}}return Object.freeze(Object.defineProperty(e,Symbol.toStringTag,{value:"Module"}))}(function(){const n=document.createElement("link").relList;if(n&&n.supports&&n.supports("modulepreload"))return;for(const o of document.querySelectorAll('link[rel="modulepreload"]'))r(o);new MutationObserver(o=>{for(const i of o)if(i.type==="childList")for(const l of i.addedNodes)l.tagName==="LINK"&&l.rel==="modulepreload"&&r(l)}).observe(document,{childList:!0,subtree:!0});function t(o){const i={};return o.integrity&&(i.integrity=o.integrity),o.referrerPolicy&&(i.referrerPolicy=o.referrerPolicy),o.crossOrigin==="use-credentials"?i.credentials="include":o.crossOrigin==="anonymous"?i.credentials="omit":i.credentials="same-origin",i}function r(o){if(o.ep)return;o.ep=!0;const i=t(o);fetch(o.href,i)}})();function lf(e){return e&&e.__esModule&&Object.prototype.hasOwnProperty.call(e,"default")?e.default:e}var bc={exports:{}},xi={},kc={exports:{}},Y={};/**
 * @license React
 * react.production.min.js
 *
 * Copyright (c) Facebook, Inc. and its affiliates.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */var ro=Symbol.for("react.element"),sf=Symbol.for("react.portal"),af=Symbol.for("react.fragment"),uf=Symbol.for("react.strict_mode"),cf=Symbol.for("react.profiler"),df=Symbol.for("react.provider"),pf=Symbol.for("react.context"),mf=Symbol.for("react.forward_ref"),ff=Symbol.for("react.suspense"),gf=Symbol.for("react.memo"),hf=Symbol.for("react.lazy"),za=Symbol.iterator;function yf(e){return e===null||typeof e!="object"?null:(e=za&&e[za]||e["@@iterator"],typeof e=="function"?e:null)}var Pc={isMounted:function(){return!1},enqueueForceUpdate:function(){},enqueueReplaceState:function(){},enqueueSetState:function(){}},Cc=Object.assign,_c={};function sr(e,n,t){this.props=e,this.context=n,this.refs=_c,this.updater=t||Pc}sr.prototype.isReactComponent={};sr.prototype.setState=function(e,n){if(typeof e!="object"&&typeof e!="function"&&e!=null)throw Error("setState(...): takes an object of state variables to update or a function which returns an object of state variables.");this.updater.enqueueSetState(this,e,n,"setState")};sr.prototype.forceUpdate=function(e){this.updater.enqueueForceUpdate(this,e,"forceUpdate")};function Tc(){}Tc.prototype=sr.prototype;function vs(e,n,t){this.props=e,this.context=n,this.refs=_c,this.updater=t||Pc}var xs=vs.prototype=new Tc;xs.constructor=vs;Cc(xs,sr.prototype);xs.isPureReactComponent=!0;var Aa=Array.isArray,Rc=Object.prototype.hasOwnProperty,ws={current:null},$c={key:!0,ref:!0,__self:!0,__source:!0};function Mc(e,n,t){var r,o={},i=null,l=null;if(n!=null)for(r in n.ref!==void 0&&(l=n.ref),n.key!==void 0&&(i=""+n.key),n)Rc.call(n,r)&&!$c.hasOwnProperty(r)&&(o[r]=n[r]);var s=arguments.length-2;if(s===1)o.children=t;else if(1<s){for(var a=Array(s),u=0;u<s;u++)a[u]=arguments[u+2];o.children=a}if(e&&e.defaultProps)for(r in s=e.defaultProps,s)o[r]===void 0&&(o[r]=s[r]);return{$$typeof:ro,type:e,key:i,ref:l,props:o,_owner:ws.current}}function vf(e,n){return{$$typeof:ro,type:e.type,key:n,ref:e.ref,props:e.props,_owner:e._owner}}function Ss(e){return typeof e=="object"&&e!==null&&e.$$typeof===ro}function xf(e){var n={"=":"=0",":":"=2"};return"$"+e.replace(/[=:]/g,function(t){return n[t]})}var Wa=/\/+/g;function Fi(e,n){return typeof e=="object"&&e!==null&&e.key!=null?xf(""+e.key):n.toString(36)}function Lo(e,n,t,r,o){var i=typeof e;(i==="undefined"||i==="boolean")&&(e=null);var l=!1;if(e===null)l=!0;else switch(i){case"string":case"number":l=!0;break;case"object":switch(e.$$typeof){case ro:case sf:l=!0}}if(l)return l=e,o=o(l),e=r===""?"."+Fi(l,0):r,Aa(o)?(t="",e!=null&&(t=e.replace(Wa,"$&/")+"/"),Lo(o,n,t,"",function(u){return u})):o!=null&&(Ss(o)&&(o=vf(o,t+(!o.key||l&&l.key===o.key?"":(""+o.key).replace(Wa,"$&/")+"/")+e)),n.push(o)),1;if(l=0,r=r===""?".":r+":",Aa(e))for(var s=0;s<e.length;s++){i=e[s];var a=r+Fi(i,s);l+=Lo(i,n,t,a,o)}else if(a=yf(e),typeof a=="function")for(e=a.call(e),s=0;!(i=e.next()).done;)i=i.value,a=r+Fi(i,s++),l+=Lo(i,n,t,a,o);else if(i==="object")throw n=String(e),Error("Objects are not valid as a React child (found: "+(n==="[object Object]"?"object with keys {"+Object.keys(e).join(", ")+"}":n)+"). If you meant to render a collection of children, use an array instead.");return l}function mo(e,n,t){if(e==null)return e;var r=[],o=0;return Lo(e,r,"","",function(i){return n.call(t,i,o++)}),r}function wf(e){if(e._status===-1){var n=e._result;n=n(),n.then(function(t){(e._status===0||e._status===-1)&&(e._status=1,e._result=t)},function(t){(e._status===0||e._status===-1)&&(e._status=2,e._result=t)}),e._status===-1&&(e._status=0,e._result=n)}if(e._status===1)return e._result.default;throw e._result}var He={current:null},Oo={transition:null},Sf={ReactCurrentDispatcher:He,ReactCurrentBatchConfig:Oo,ReactCurrentOwner:ws};function Ic(){throw Error("act(...) is not supported in production builds of React.")}Y.Children={map:mo,forEach:function(e,n,t){mo(e,function(){n.apply(this,arguments)},t)},count:function(e){var n=0;return mo(e,function(){n++}),n},toArray:function(e){return mo(e,function(n){return n})||[]},only:function(e){if(!Ss(e))throw Error("React.Children.only expected to receive a single React element child.");return e}};Y.Component=sr;Y.Fragment=af;Y.Profiler=cf;Y.PureComponent=vs;Y.StrictMode=uf;Y.Suspense=ff;Y.__SECRET_INTERNALS_DO_NOT_USE_OR_YOU_WILL_BE_FIRED=Sf;Y.act=Ic;Y.cloneElement=function(e,n,t){if(e==null)throw Error("React.cloneElement(...): The argument must be a React element, but you passed "+e+".");var r=Cc({},e.props),o=e.key,i=e.ref,l=e._owner;if(n!=null){if(n.ref!==void 0&&(i=n.ref,l=ws.current),n.key!==void 0&&(o=""+n.key),e.type&&e.type.defaultProps)var s=e.type.defaultProps;for(a in n)Rc.call(n,a)&&!$c.hasOwnProperty(a)&&(r[a]=n[a]===void 0&&s!==void 0?s[a]:n[a])}var a=arguments.length-2;if(a===1)r.children=t;else if(1<a){s=Array(a);for(var u=0;u<a;u++)s[u]=arguments[u+2];r.children=s}return{$$typeof:ro,type:e.type,key:o,ref:i,props:r,_owner:l}};Y.createContext=function(e){return e={$$typeof:pf,_currentValue:e,_currentValue2:e,_threadCount:0,Provider:null,Consumer:null,_defaultValue:null,_globalName:null},e.Provider={$$typeof:df,_context:e},e.Consumer=e};Y.createElement=Mc;Y.createFactory=function(e){var n=Mc.bind(null,e);return n.type=e,n};Y.createRef=function(){return{current:null}};Y.forwardRef=function(e){return{$$typeof:mf,render:e}};Y.isValidElement=Ss;Y.lazy=function(e){return{$$typeof:hf,_payload:{_status:-1,_result:e},_init:wf}};Y.memo=function(e,n){return{$$typeof:gf,type:e,compare:n===void 0?null:n}};Y.startTransition=function(e){var n=Oo.transition;Oo.transition={};try{e()}finally{Oo.transition=n}};Y.unstable_act=Ic;Y.useCallback=function(e,n){return He.current.useCallback(e,n)};Y.useContext=function(e){return He.current.useContext(e)};Y.useDebugValue=function(){};Y.useDeferredValue=function(e){return He.current.useDeferredValue(e)};Y.useEffect=function(e,n){return He.current.useEffect(e,n)};Y.useId=function(){return He.current.useId()};Y.useImperativeHandle=function(e,n,t){return He.current.useImperativeHandle(e,n,t)};Y.useInsertionEffect=function(e,n){return He.current.useInsertionEffect(e,n)};Y.useLayoutEffect=function(e,n){return He.current.useLayoutEffect(e,n)};Y.useMemo=function(e,n){return He.current.useMemo(e,n)};Y.useReducer=function(e,n,t){return He.current.useReducer(e,n,t)};Y.useRef=function(e){return He.current.useRef(e)};Y.useState=function(e){return He.current.useState(e)};Y.useSyncExternalStore=function(e,n,t){return He.current.useSyncExternalStore(e,n,t)};Y.useTransition=function(){return He.current.useTransition()};Y.version="18.3.1";kc.exports=Y;var y=kc.exports;const Tt=lf(y),bf=of({__proto__:null,default:Tt},[y]);/**
 * @license React
 * react-jsx-runtime.production.min.js
 *
 * Copyright (c) Facebook, Inc. and its affiliates.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */var kf=y,Pf=Symbol.for("react.element"),Cf=Symbol.for("react.fragment"),_f=Object.prototype.hasOwnProperty,Tf=kf.__SECRET_INTERNALS_DO_NOT_USE_OR_YOU_WILL_BE_FIRED.ReactCurrentOwner,Rf={key:!0,ref:!0,__self:!0,__source:!0};function Nc(e,n,t){var r,o={},i=null,l=null;t!==void 0&&(i=""+t),n.key!==void 0&&(i=""+n.key),n.ref!==void 0&&(l=n.ref);for(r in n)_f.call(n,r)&&!Rf.hasOwnProperty(r)&&(o[r]=n[r]);if(e&&e.defaultProps)for(r in n=e.defaultProps,n)o[r]===void 0&&(o[r]=n[r]);return{$$typeof:Pf,type:e,key:i,ref:l,props:o,_owner:Tf.current}}xi.Fragment=Cf;xi.jsx=Nc;xi.jsxs=Nc;bc.exports=xi;var d=bc.exports,jc={exports:{}},Je={},Ec={exports:{}},Lc={};/**
 * @license React
 * scheduler.production.min.js
 *
 * Copyright (c) Facebook, Inc. and its affiliates.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */(function(e){function n($,D){var U=$.length;$.push(D);e:for(;0<U;){var se=U-1>>>1,ae=$[se];if(0<o(ae,D))$[se]=D,$[U]=ae,U=se;else break e}}function t($){return $.length===0?null:$[0]}function r($){if($.length===0)return null;var D=$[0],U=$.pop();if(U!==D){$[0]=U;e:for(var se=0,ae=$.length,oe=ae>>>1;se<oe;){var Z=2*(se+1)-1,R=$[Z],N=Z+1,G=$[N];if(0>o(R,U))N<ae&&0>o(G,R)?($[se]=G,$[N]=U,se=N):($[se]=R,$[Z]=U,se=Z);else if(N<ae&&0>o(G,U))$[se]=G,$[N]=U,se=N;else break e}}return D}function o($,D){var U=$.sortIndex-D.sortIndex;return U!==0?U:$.id-D.id}if(typeof performance=="object"&&typeof performance.now=="function"){var i=performance;e.unstable_now=function(){return i.now()}}else{var l=Date,s=l.now();e.unstable_now=function(){return l.now()-s}}var a=[],u=[],p=1,c=null,m=3,g=!1,x=!1,w=!1,S=typeof setTimeout=="function"?setTimeout:null,h=typeof clearTimeout=="function"?clearTimeout:null,f=typeof setImmediate<"u"?setImmediate:null;typeof navigator<"u"&&navigator.scheduling!==void 0&&navigator.scheduling.isInputPending!==void 0&&navigator.scheduling.isInputPending.bind(navigator.scheduling);function v($){for(var D=t(u);D!==null;){if(D.callback===null)r(u);else if(D.startTime<=$)r(u),D.sortIndex=D.expirationTime,n(a,D);else break;D=t(u)}}function b($){if(w=!1,v($),!x)if(t(a)!==null)x=!0,F(C);else{var D=t(u);D!==null&&re(b,D.startTime-$)}}function C($,D){x=!1,w&&(w=!1,h(E),E=-1),g=!0;var U=m;try{for(v(D),c=t(a);c!==null&&(!(c.expirationTime>D)||$&&!L());){var se=c.callback;if(typeof se=="function"){c.callback=null,m=c.priorityLevel;var ae=se(c.expirationTime<=D);D=e.unstable_now(),typeof ae=="function"?c.callback=ae:c===t(a)&&r(a),v(D)}else r(a);c=t(a)}if(c!==null)var oe=!0;else{var Z=t(u);Z!==null&&re(b,Z.startTime-D),oe=!1}return oe}finally{c=null,m=U,g=!1}}var j=!1,M=null,E=-1,k=5,P=-1;function L(){return!(e.unstable_now()-P<k)}function K(){if(M!==null){var $=e.unstable_now();P=$;var D=!0;try{D=M(!0,$)}finally{D?A():(j=!1,M=null)}}else j=!1}var A;if(typeof f=="function")A=function(){f(K)};else if(typeof MessageChannel<"u"){var W=new MessageChannel,V=W.port2;W.port1.onmessage=K,A=function(){V.postMessage(null)}}else A=function(){S(K,0)};function F($){M=$,j||(j=!0,A())}function re($,D){E=S(function(){$(e.unstable_now())},D)}e.unstable_IdlePriority=5,e.unstable_ImmediatePriority=1,e.unstable_LowPriority=4,e.unstable_NormalPriority=3,e.unstable_Profiling=null,e.unstable_UserBlockingPriority=2,e.unstable_cancelCallback=function($){$.callback=null},e.unstable_continueExecution=function(){x||g||(x=!0,F(C))},e.unstable_forceFrameRate=function($){0>$||125<$?console.error("forceFrameRate takes a positive int between 0 and 125, forcing frame rates higher than 125 fps is not supported"):k=0<$?Math.floor(1e3/$):5},e.unstable_getCurrentPriorityLevel=function(){return m},e.unstable_getFirstCallbackNode=function(){return t(a)},e.unstable_next=function($){switch(m){case 1:case 2:case 3:var D=3;break;default:D=m}var U=m;m=D;try{return $()}finally{m=U}},e.unstable_pauseExecution=function(){},e.unstable_requestPaint=function(){},e.unstable_runWithPriority=function($,D){switch($){case 1:case 2:case 3:case 4:case 5:break;default:$=3}var U=m;m=$;try{return D()}finally{m=U}},e.unstable_scheduleCallback=function($,D,U){var se=e.unstable_now();switch(typeof U=="object"&&U!==null?(U=U.delay,U=typeof U=="number"&&0<U?se+U:se):U=se,$){case 1:var ae=-1;break;case 2:ae=250;break;case 5:ae=1073741823;break;case 4:ae=1e4;break;default:ae=5e3}return ae=U+ae,$={id:p++,callback:D,priorityLevel:$,startTime:U,expirationTime:ae,sortIndex:-1},U>se?($.sortIndex=U,n(u,$),t(a)===null&&$===t(u)&&(w?(h(E),E=-1):w=!0,re(b,U-se))):($.sortIndex=ae,n(a,$),x||g||(x=!0,F(C))),$},e.unstable_shouldYield=L,e.unstable_wrapCallback=function($){var D=m;return function(){var U=m;m=D;try{return $.apply(this,arguments)}finally{m=U}}}})(Lc);Ec.exports=Lc;var $f=Ec.exports;/**
 * @license React
 * react-dom.production.min.js
 *
 * Copyright (c) Facebook, Inc. and its affiliates.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */var Mf=y,Xe=$f;function _(e){for(var n="https://reactjs.org/docs/error-decoder.html?invariant="+e,t=1;t<arguments.length;t++)n+="&args[]="+encodeURIComponent(arguments[t]);return"Minified React error #"+e+"; visit "+n+" for the full message or use the non-minified dev environment for full errors and additional helpful warnings."}var Oc=new Set,zr={};function Rt(e,n){er(e,n),er(e+"Capture",n)}function er(e,n){for(zr[e]=n,e=0;e<n.length;e++)Oc.add(n[e])}var Mn=!(typeof window>"u"||typeof window.document>"u"||typeof window.document.createElement>"u"),vl=Object.prototype.hasOwnProperty,If=/^[:A-Z_a-z\u00C0-\u00D6\u00D8-\u00F6\u00F8-\u02FF\u0370-\u037D\u037F-\u1FFF\u200C-\u200D\u2070-\u218F\u2C00-\u2FEF\u3001-\uD7FF\uF900-\uFDCF\uFDF0-\uFFFD][:A-Z_a-z\u00C0-\u00D6\u00D8-\u00F6\u00F8-\u02FF\u0370-\u037D\u037F-\u1FFF\u200C-\u200D\u2070-\u218F\u2C00-\u2FEF\u3001-\uD7FF\uF900-\uFDCF\uFDF0-\uFFFD\-.0-9\u00B7\u0300-\u036F\u203F-\u2040]*$/,Ha={},Fa={};function Nf(e){return vl.call(Fa,e)?!0:vl.call(Ha,e)?!1:If.test(e)?Fa[e]=!0:(Ha[e]=!0,!1)}function jf(e,n,t,r){if(t!==null&&t.type===0)return!1;switch(typeof n){case"function":case"symbol":return!0;case"boolean":return r?!1:t!==null?!t.acceptsBooleans:(e=e.toLowerCase().slice(0,5),e!=="data-"&&e!=="aria-");default:return!1}}function Ef(e,n,t,r){if(n===null||typeof n>"u"||jf(e,n,t,r))return!0;if(r)return!1;if(t!==null)switch(t.type){case 3:return!n;case 4:return n===!1;case 5:return isNaN(n);case 6:return isNaN(n)||1>n}return!1}function Fe(e,n,t,r,o,i,l){this.acceptsBooleans=n===2||n===3||n===4,this.attributeName=r,this.attributeNamespace=o,this.mustUseProperty=t,this.propertyName=e,this.type=n,this.sanitizeURL=i,this.removeEmptyString=l}var Ne={};"children dangerouslySetInnerHTML defaultValue defaultChecked innerHTML suppressContentEditableWarning suppressHydrationWarning style".split(" ").forEach(function(e){Ne[e]=new Fe(e,0,!1,e,null,!1,!1)});[["acceptCharset","accept-charset"],["className","class"],["htmlFor","for"],["httpEquiv","http-equiv"]].forEach(function(e){var n=e[0];Ne[n]=new Fe(n,1,!1,e[1],null,!1,!1)});["contentEditable","draggable","spellCheck","value"].forEach(function(e){Ne[e]=new Fe(e,2,!1,e.toLowerCase(),null,!1,!1)});["autoReverse","externalResourcesRequired","focusable","preserveAlpha"].forEach(function(e){Ne[e]=new Fe(e,2,!1,e,null,!1,!1)});"allowFullScreen async autoFocus autoPlay controls default defer disabled disablePictureInPicture disableRemotePlayback formNoValidate hidden loop noModule noValidate open playsInline readOnly required reversed scoped seamless itemScope".split(" ").forEach(function(e){Ne[e]=new Fe(e,3,!1,e.toLowerCase(),null,!1,!1)});["checked","multiple","muted","selected"].forEach(function(e){Ne[e]=new Fe(e,3,!0,e,null,!1,!1)});["capture","download"].forEach(function(e){Ne[e]=new Fe(e,4,!1,e,null,!1,!1)});["cols","rows","size","span"].forEach(function(e){Ne[e]=new Fe(e,6,!1,e,null,!1,!1)});["rowSpan","start"].forEach(function(e){Ne[e]=new Fe(e,5,!1,e.toLowerCase(),null,!1,!1)});var bs=/[\-:]([a-z])/g;function ks(e){return e[1].toUpperCase()}"accent-height alignment-baseline arabic-form baseline-shift cap-height clip-path clip-rule color-interpolation color-interpolation-filters color-profile color-rendering dominant-baseline enable-background fill-opacity fill-rule flood-color flood-opacity font-family font-size font-size-adjust font-stretch font-style font-variant font-weight glyph-name glyph-orientation-horizontal glyph-orientation-vertical horiz-adv-x horiz-origin-x image-rendering letter-spacing lighting-color marker-end marker-mid marker-start overline-position overline-thickness paint-order panose-1 pointer-events rendering-intent shape-rendering stop-color stop-opacity strikethrough-position strikethrough-thickness stroke-dasharray stroke-dashoffset stroke-linecap stroke-linejoin stroke-miterlimit stroke-opacity stroke-width text-anchor text-decoration text-rendering underline-position underline-thickness unicode-bidi unicode-range units-per-em v-alphabetic v-hanging v-ideographic v-mathematical vector-effect vert-adv-y vert-origin-x vert-origin-y word-spacing writing-mode xmlns:xlink x-height".split(" ").forEach(function(e){var n=e.replace(bs,ks);Ne[n]=new Fe(n,1,!1,e,null,!1,!1)});"xlink:actuate xlink:arcrole xlink:role xlink:show xlink:title xlink:type".split(" ").forEach(function(e){var n=e.replace(bs,ks);Ne[n]=new Fe(n,1,!1,e,"http://www.w3.org/1999/xlink",!1,!1)});["xml:base","xml:lang","xml:space"].forEach(function(e){var n=e.replace(bs,ks);Ne[n]=new Fe(n,1,!1,e,"http://www.w3.org/XML/1998/namespace",!1,!1)});["tabIndex","crossOrigin"].forEach(function(e){Ne[e]=new Fe(e,1,!1,e.toLowerCase(),null,!1,!1)});Ne.xlinkHref=new Fe("xlinkHref",1,!1,"xlink:href","http://www.w3.org/1999/xlink",!0,!1);["src","href","action","formAction"].forEach(function(e){Ne[e]=new Fe(e,1,!1,e.toLowerCase(),null,!0,!0)});function Ps(e,n,t,r){var o=Ne.hasOwnProperty(n)?Ne[n]:null;(o!==null?o.type!==0:r||!(2<n.length)||n[0]!=="o"&&n[0]!=="O"||n[1]!=="n"&&n[1]!=="N")&&(Ef(n,t,o,r)&&(t=null),r||o===null?Nf(n)&&(t===null?e.removeAttribute(n):e.setAttribute(n,""+t)):o.mustUseProperty?e[o.propertyName]=t===null?o.type===3?!1:"":t:(n=o.attributeName,r=o.attributeNamespace,t===null?e.removeAttribute(n):(o=o.type,t=o===3||o===4&&t===!0?"":""+t,r?e.setAttributeNS(r,n,t):e.setAttribute(n,t))))}var En=Mf.__SECRET_INTERNALS_DO_NOT_USE_OR_YOU_WILL_BE_FIRED,fo=Symbol.for("react.element"),Ot=Symbol.for("react.portal"),Dt=Symbol.for("react.fragment"),Cs=Symbol.for("react.strict_mode"),xl=Symbol.for("react.profiler"),Dc=Symbol.for("react.provider"),zc=Symbol.for("react.context"),_s=Symbol.for("react.forward_ref"),wl=Symbol.for("react.suspense"),Sl=Symbol.for("react.suspense_list"),Ts=Symbol.for("react.memo"),Hn=Symbol.for("react.lazy"),Ac=Symbol.for("react.offscreen"),Ba=Symbol.iterator;function fr(e){return e===null||typeof e!="object"?null:(e=Ba&&e[Ba]||e["@@iterator"],typeof e=="function"?e:null)}var ve=Object.assign,Bi;function kr(e){if(Bi===void 0)try{throw Error()}catch(t){var n=t.stack.trim().match(/\n( *(at )?)/);Bi=n&&n[1]||""}return`
`+Bi+e}var Ui=!1;function Gi(e,n){if(!e||Ui)return"";Ui=!0;var t=Error.prepareStackTrace;Error.prepareStackTrace=void 0;try{if(n)if(n=function(){throw Error()},Object.defineProperty(n.prototype,"props",{set:function(){throw Error()}}),typeof Reflect=="object"&&Reflect.construct){try{Reflect.construct(n,[])}catch(u){var r=u}Reflect.construct(e,[],n)}else{try{n.call()}catch(u){r=u}e.call(n.prototype)}else{try{throw Error()}catch(u){r=u}e()}}catch(u){if(u&&r&&typeof u.stack=="string"){for(var o=u.stack.split(`
`),i=r.stack.split(`
`),l=o.length-1,s=i.length-1;1<=l&&0<=s&&o[l]!==i[s];)s--;for(;1<=l&&0<=s;l--,s--)if(o[l]!==i[s]){if(l!==1||s!==1)do if(l--,s--,0>s||o[l]!==i[s]){var a=`
`+o[l].replace(" at new "," at ");return e.displayName&&a.includes("<anonymous>")&&(a=a.replace("<anonymous>",e.displayName)),a}while(1<=l&&0<=s);break}}}finally{Ui=!1,Error.prepareStackTrace=t}return(e=e?e.displayName||e.name:"")?kr(e):""}function Lf(e){switch(e.tag){case 5:return kr(e.type);case 16:return kr("Lazy");case 13:return kr("Suspense");case 19:return kr("SuspenseList");case 0:case 2:case 15:return e=Gi(e.type,!1),e;case 11:return e=Gi(e.type.render,!1),e;case 1:return e=Gi(e.type,!0),e;default:return""}}function bl(e){if(e==null)return null;if(typeof e=="function")return e.displayName||e.name||null;if(typeof e=="string")return e;switch(e){case Dt:return"Fragment";case Ot:return"Portal";case xl:return"Profiler";case Cs:return"StrictMode";case wl:return"Suspense";case Sl:return"SuspenseList"}if(typeof e=="object")switch(e.$$typeof){case zc:return(e.displayName||"Context")+".Consumer";case Dc:return(e._context.displayName||"Context")+".Provider";case _s:var n=e.render;return e=e.displayName,e||(e=n.displayName||n.name||"",e=e!==""?"ForwardRef("+e+")":"ForwardRef"),e;case Ts:return n=e.displayName||null,n!==null?n:bl(e.type)||"Memo";case Hn:n=e._payload,e=e._init;try{return bl(e(n))}catch{}}return null}function Of(e){var n=e.type;switch(e.tag){case 24:return"Cache";case 9:return(n.displayName||"Context")+".Consumer";case 10:return(n._context.displayName||"Context")+".Provider";case 18:return"DehydratedFragment";case 11:return e=n.render,e=e.displayName||e.name||"",n.displayName||(e!==""?"ForwardRef("+e+")":"ForwardRef");case 7:return"Fragment";case 5:return n;case 4:return"Portal";case 3:return"Root";case 6:return"Text";case 16:return bl(n);case 8:return n===Cs?"StrictMode":"Mode";case 22:return"Offscreen";case 12:return"Profiler";case 21:return"Scope";case 13:return"Suspense";case 19:return"SuspenseList";case 25:return"TracingMarker";case 1:case 0:case 17:case 2:case 14:case 15:if(typeof n=="function")return n.displayName||n.name||null;if(typeof n=="string")return n}return null}function rt(e){switch(typeof e){case"boolean":case"number":case"string":case"undefined":return e;case"object":return e;default:return""}}function Wc(e){var n=e.type;return(e=e.nodeName)&&e.toLowerCase()==="input"&&(n==="checkbox"||n==="radio")}function Df(e){var n=Wc(e)?"checked":"value",t=Object.getOwnPropertyDescriptor(e.constructor.prototype,n),r=""+e[n];if(!e.hasOwnProperty(n)&&typeof t<"u"&&typeof t.get=="function"&&typeof t.set=="function"){var o=t.get,i=t.set;return Object.defineProperty(e,n,{configurable:!0,get:function(){return o.call(this)},set:function(l){r=""+l,i.call(this,l)}}),Object.defineProperty(e,n,{enumerable:t.enumerable}),{getValue:function(){return r},setValue:function(l){r=""+l},stopTracking:function(){e._valueTracker=null,delete e[n]}}}}function go(e){e._valueTracker||(e._valueTracker=Df(e))}function Hc(e){if(!e)return!1;var n=e._valueTracker;if(!n)return!0;var t=n.getValue(),r="";return e&&(r=Wc(e)?e.checked?"true":"false":e.value),e=r,e!==t?(n.setValue(e),!0):!1}function Qo(e){if(e=e||(typeof document<"u"?document:void 0),typeof e>"u")return null;try{return e.activeElement||e.body}catch{return e.body}}function kl(e,n){var t=n.checked;return ve({},n,{defaultChecked:void 0,defaultValue:void 0,value:void 0,checked:t??e._wrapperState.initialChecked})}function Ua(e,n){var t=n.defaultValue==null?"":n.defaultValue,r=n.checked!=null?n.checked:n.defaultChecked;t=rt(n.value!=null?n.value:t),e._wrapperState={initialChecked:r,initialValue:t,controlled:n.type==="checkbox"||n.type==="radio"?n.checked!=null:n.value!=null}}function Fc(e,n){n=n.checked,n!=null&&Ps(e,"checked",n,!1)}function Pl(e,n){Fc(e,n);var t=rt(n.value),r=n.type;if(t!=null)r==="number"?(t===0&&e.value===""||e.value!=t)&&(e.value=""+t):e.value!==""+t&&(e.value=""+t);else if(r==="submit"||r==="reset"){e.removeAttribute("value");return}n.hasOwnProperty("value")?Cl(e,n.type,t):n.hasOwnProperty("defaultValue")&&Cl(e,n.type,rt(n.defaultValue)),n.checked==null&&n.defaultChecked!=null&&(e.defaultChecked=!!n.defaultChecked)}function Ga(e,n,t){if(n.hasOwnProperty("value")||n.hasOwnProperty("defaultValue")){var r=n.type;if(!(r!=="submit"&&r!=="reset"||n.value!==void 0&&n.value!==null))return;n=""+e._wrapperState.initialValue,t||n===e.value||(e.value=n),e.defaultValue=n}t=e.name,t!==""&&(e.name=""),e.defaultChecked=!!e._wrapperState.initialChecked,t!==""&&(e.name=t)}function Cl(e,n,t){(n!=="number"||Qo(e.ownerDocument)!==e)&&(t==null?e.defaultValue=""+e._wrapperState.initialValue:e.defaultValue!==""+t&&(e.defaultValue=""+t))}var Pr=Array.isArray;function Qt(e,n,t,r){if(e=e.options,n){n={};for(var o=0;o<t.length;o++)n["$"+t[o]]=!0;for(t=0;t<e.length;t++)o=n.hasOwnProperty("$"+e[t].value),e[t].selected!==o&&(e[t].selected=o),o&&r&&(e[t].defaultSelected=!0)}else{for(t=""+rt(t),n=null,o=0;o<e.length;o++){if(e[o].value===t){e[o].selected=!0,r&&(e[o].defaultSelected=!0);return}n!==null||e[o].disabled||(n=e[o])}n!==null&&(n.selected=!0)}}function _l(e,n){if(n.dangerouslySetInnerHTML!=null)throw Error(_(91));return ve({},n,{value:void 0,defaultValue:void 0,children:""+e._wrapperState.initialValue})}function Va(e,n){var t=n.value;if(t==null){if(t=n.children,n=n.defaultValue,t!=null){if(n!=null)throw Error(_(92));if(Pr(t)){if(1<t.length)throw Error(_(93));t=t[0]}n=t}n==null&&(n=""),t=n}e._wrapperState={initialValue:rt(t)}}function Bc(e,n){var t=rt(n.value),r=rt(n.defaultValue);t!=null&&(t=""+t,t!==e.value&&(e.value=t),n.defaultValue==null&&e.defaultValue!==t&&(e.defaultValue=t)),r!=null&&(e.defaultValue=""+r)}function Ka(e){var n=e.textContent;n===e._wrapperState.initialValue&&n!==""&&n!==null&&(e.value=n)}function Uc(e){switch(e){case"svg":return"http://www.w3.org/2000/svg";case"math":return"http://www.w3.org/1998/Math/MathML";default:return"http://www.w3.org/1999/xhtml"}}function Tl(e,n){return e==null||e==="http://www.w3.org/1999/xhtml"?Uc(n):e==="http://www.w3.org/2000/svg"&&n==="foreignObject"?"http://www.w3.org/1999/xhtml":e}var ho,Gc=function(e){return typeof MSApp<"u"&&MSApp.execUnsafeLocalFunction?function(n,t,r,o){MSApp.execUnsafeLocalFunction(function(){return e(n,t,r,o)})}:e}(function(e,n){if(e.namespaceURI!=="http://www.w3.org/2000/svg"||"innerHTML"in e)e.innerHTML=n;else{for(ho=ho||document.createElement("div"),ho.innerHTML="<svg>"+n.valueOf().toString()+"</svg>",n=ho.firstChild;e.firstChild;)e.removeChild(e.firstChild);for(;n.firstChild;)e.appendChild(n.firstChild)}});function Ar(e,n){if(n){var t=e.firstChild;if(t&&t===e.lastChild&&t.nodeType===3){t.nodeValue=n;return}}e.textContent=n}var $r={animationIterationCount:!0,aspectRatio:!0,borderImageOutset:!0,borderImageSlice:!0,borderImageWidth:!0,boxFlex:!0,boxFlexGroup:!0,boxOrdinalGroup:!0,columnCount:!0,columns:!0,flex:!0,flexGrow:!0,flexPositive:!0,flexShrink:!0,flexNegative:!0,flexOrder:!0,gridArea:!0,gridRow:!0,gridRowEnd:!0,gridRowSpan:!0,gridRowStart:!0,gridColumn:!0,gridColumnEnd:!0,gridColumnSpan:!0,gridColumnStart:!0,fontWeight:!0,lineClamp:!0,lineHeight:!0,opacity:!0,order:!0,orphans:!0,tabSize:!0,widows:!0,zIndex:!0,zoom:!0,fillOpacity:!0,floodOpacity:!0,stopOpacity:!0,strokeDasharray:!0,strokeDashoffset:!0,strokeMiterlimit:!0,strokeOpacity:!0,strokeWidth:!0},zf=["Webkit","ms","Moz","O"];Object.keys($r).forEach(function(e){zf.forEach(function(n){n=n+e.charAt(0).toUpperCase()+e.substring(1),$r[n]=$r[e]})});function Vc(e,n,t){return n==null||typeof n=="boolean"||n===""?"":t||typeof n!="number"||n===0||$r.hasOwnProperty(e)&&$r[e]?(""+n).trim():n+"px"}function Kc(e,n){e=e.style;for(var t in n)if(n.hasOwnProperty(t)){var r=t.indexOf("--")===0,o=Vc(t,n[t],r);t==="float"&&(t="cssFloat"),r?e.setProperty(t,o):e[t]=o}}var Af=ve({menuitem:!0},{area:!0,base:!0,br:!0,col:!0,embed:!0,hr:!0,img:!0,input:!0,keygen:!0,link:!0,meta:!0,param:!0,source:!0,track:!0,wbr:!0});function Rl(e,n){if(n){if(Af[e]&&(n.children!=null||n.dangerouslySetInnerHTML!=null))throw Error(_(137,e));if(n.dangerouslySetInnerHTML!=null){if(n.children!=null)throw Error(_(60));if(typeof n.dangerouslySetInnerHTML!="object"||!("__html"in n.dangerouslySetInnerHTML))throw Error(_(61))}if(n.style!=null&&typeof n.style!="object")throw Error(_(62))}}function $l(e,n){if(e.indexOf("-")===-1)return typeof n.is=="string";switch(e){case"annotation-xml":case"color-profile":case"font-face":case"font-face-src":case"font-face-uri":case"font-face-format":case"font-face-name":case"missing-glyph":return!1;default:return!0}}var Ml=null;function Rs(e){return e=e.target||e.srcElement||window,e.correspondingUseElement&&(e=e.correspondingUseElement),e.nodeType===3?e.parentNode:e}var Il=null,Yt=null,qt=null;function Qa(e){if(e=lo(e)){if(typeof Il!="function")throw Error(_(280));var n=e.stateNode;n&&(n=Pi(n),Il(e.stateNode,e.type,n))}}function Qc(e){Yt?qt?qt.push(e):qt=[e]:Yt=e}function Yc(){if(Yt){var e=Yt,n=qt;if(qt=Yt=null,Qa(e),n)for(e=0;e<n.length;e++)Qa(n[e])}}function qc(e,n){return e(n)}function Xc(){}var Vi=!1;function Jc(e,n,t){if(Vi)return e(n,t);Vi=!0;try{return qc(e,n,t)}finally{Vi=!1,(Yt!==null||qt!==null)&&(Xc(),Yc())}}function Wr(e,n){var t=e.stateNode;if(t===null)return null;var r=Pi(t);if(r===null)return null;t=r[n];e:switch(n){case"onClick":case"onClickCapture":case"onDoubleClick":case"onDoubleClickCapture":case"onMouseDown":case"onMouseDownCapture":case"onMouseMove":case"onMouseMoveCapture":case"onMouseUp":case"onMouseUpCapture":case"onMouseEnter":(r=!r.disabled)||(e=e.type,r=!(e==="button"||e==="input"||e==="select"||e==="textarea")),e=!r;break e;default:e=!1}if(e)return null;if(t&&typeof t!="function")throw Error(_(231,n,typeof t));return t}var Nl=!1;if(Mn)try{var gr={};Object.defineProperty(gr,"passive",{get:function(){Nl=!0}}),window.addEventListener("test",gr,gr),window.removeEventListener("test",gr,gr)}catch{Nl=!1}function Wf(e,n,t,r,o,i,l,s,a){var u=Array.prototype.slice.call(arguments,3);try{n.apply(t,u)}catch(p){this.onError(p)}}var Mr=!1,Yo=null,qo=!1,jl=null,Hf={onError:function(e){Mr=!0,Yo=e}};function Ff(e,n,t,r,o,i,l,s,a){Mr=!1,Yo=null,Wf.apply(Hf,arguments)}function Bf(e,n,t,r,o,i,l,s,a){if(Ff.apply(this,arguments),Mr){if(Mr){var u=Yo;Mr=!1,Yo=null}else throw Error(_(198));qo||(qo=!0,jl=u)}}function $t(e){var n=e,t=e;if(e.alternate)for(;n.return;)n=n.return;else{e=n;do n=e,n.flags&4098&&(t=n.return),e=n.return;while(e)}return n.tag===3?t:null}function Zc(e){if(e.tag===13){var n=e.memoizedState;if(n===null&&(e=e.alternate,e!==null&&(n=e.memoizedState)),n!==null)return n.dehydrated}return null}function Ya(e){if($t(e)!==e)throw Error(_(188))}function Uf(e){var n=e.alternate;if(!n){if(n=$t(e),n===null)throw Error(_(188));return n!==e?null:e}for(var t=e,r=n;;){var o=t.return;if(o===null)break;var i=o.alternate;if(i===null){if(r=o.return,r!==null){t=r;continue}break}if(o.child===i.child){for(i=o.child;i;){if(i===t)return Ya(o),e;if(i===r)return Ya(o),n;i=i.sibling}throw Error(_(188))}if(t.return!==r.return)t=o,r=i;else{for(var l=!1,s=o.child;s;){if(s===t){l=!0,t=o,r=i;break}if(s===r){l=!0,r=o,t=i;break}s=s.sibling}if(!l){for(s=i.child;s;){if(s===t){l=!0,t=i,r=o;break}if(s===r){l=!0,r=i,t=o;break}s=s.sibling}if(!l)throw Error(_(189))}}if(t.alternate!==r)throw Error(_(190))}if(t.tag!==3)throw Error(_(188));return t.stateNode.current===t?e:n}function ed(e){return e=Uf(e),e!==null?nd(e):null}function nd(e){if(e.tag===5||e.tag===6)return e;for(e=e.child;e!==null;){var n=nd(e);if(n!==null)return n;e=e.sibling}return null}var td=Xe.unstable_scheduleCallback,qa=Xe.unstable_cancelCallback,Gf=Xe.unstable_shouldYield,Vf=Xe.unstable_requestPaint,Se=Xe.unstable_now,Kf=Xe.unstable_getCurrentPriorityLevel,$s=Xe.unstable_ImmediatePriority,rd=Xe.unstable_UserBlockingPriority,Xo=Xe.unstable_NormalPriority,Qf=Xe.unstable_LowPriority,od=Xe.unstable_IdlePriority,wi=null,wn=null;function Yf(e){if(wn&&typeof wn.onCommitFiberRoot=="function")try{wn.onCommitFiberRoot(wi,e,void 0,(e.current.flags&128)===128)}catch{}}var fn=Math.clz32?Math.clz32:Jf,qf=Math.log,Xf=Math.LN2;function Jf(e){return e>>>=0,e===0?32:31-(qf(e)/Xf|0)|0}var yo=64,vo=4194304;function Cr(e){switch(e&-e){case 1:return 1;case 2:return 2;case 4:return 4;case 8:return 8;case 16:return 16;case 32:return 32;case 64:case 128:case 256:case 512:case 1024:case 2048:case 4096:case 8192:case 16384:case 32768:case 65536:case 131072:case 262144:case 524288:case 1048576:case 2097152:return e&4194240;case 4194304:case 8388608:case 16777216:case 33554432:case 67108864:return e&130023424;case 134217728:return 134217728;case 268435456:return 268435456;case 536870912:return 536870912;case 1073741824:return 1073741824;default:return e}}function Jo(e,n){var t=e.pendingLanes;if(t===0)return 0;var r=0,o=e.suspendedLanes,i=e.pingedLanes,l=t&268435455;if(l!==0){var s=l&~o;s!==0?r=Cr(s):(i&=l,i!==0&&(r=Cr(i)))}else l=t&~o,l!==0?r=Cr(l):i!==0&&(r=Cr(i));if(r===0)return 0;if(n!==0&&n!==r&&!(n&o)&&(o=r&-r,i=n&-n,o>=i||o===16&&(i&4194240)!==0))return n;if(r&4&&(r|=t&16),n=e.entangledLanes,n!==0)for(e=e.entanglements,n&=r;0<n;)t=31-fn(n),o=1<<t,r|=e[t],n&=~o;return r}function Zf(e,n){switch(e){case 1:case 2:case 4:return n+250;case 8:case 16:case 32:case 64:case 128:case 256:case 512:case 1024:case 2048:case 4096:case 8192:case 16384:case 32768:case 65536:case 131072:case 262144:case 524288:case 1048576:case 2097152:return n+5e3;case 4194304:case 8388608:case 16777216:case 33554432:case 67108864:return-1;case 134217728:case 268435456:case 536870912:case 1073741824:return-1;default:return-1}}function eg(e,n){for(var t=e.suspendedLanes,r=e.pingedLanes,o=e.expirationTimes,i=e.pendingLanes;0<i;){var l=31-fn(i),s=1<<l,a=o[l];a===-1?(!(s&t)||s&r)&&(o[l]=Zf(s,n)):a<=n&&(e.expiredLanes|=s),i&=~s}}function El(e){return e=e.pendingLanes&-1073741825,e!==0?e:e&1073741824?1073741824:0}function id(){var e=yo;return yo<<=1,!(yo&4194240)&&(yo=64),e}function Ki(e){for(var n=[],t=0;31>t;t++)n.push(e);return n}function oo(e,n,t){e.pendingLanes|=n,n!==536870912&&(e.suspendedLanes=0,e.pingedLanes=0),e=e.eventTimes,n=31-fn(n),e[n]=t}function ng(e,n){var t=e.pendingLanes&~n;e.pendingLanes=n,e.suspendedLanes=0,e.pingedLanes=0,e.expiredLanes&=n,e.mutableReadLanes&=n,e.entangledLanes&=n,n=e.entanglements;var r=e.eventTimes;for(e=e.expirationTimes;0<t;){var o=31-fn(t),i=1<<o;n[o]=0,r[o]=-1,e[o]=-1,t&=~i}}function Ms(e,n){var t=e.entangledLanes|=n;for(e=e.entanglements;t;){var r=31-fn(t),o=1<<r;o&n|e[r]&n&&(e[r]|=n),t&=~o}}var le=0;function ld(e){return e&=-e,1<e?4<e?e&268435455?16:536870912:4:1}var sd,Is,ad,ud,cd,Ll=!1,xo=[],Qn=null,Yn=null,qn=null,Hr=new Map,Fr=new Map,Bn=[],tg="mousedown mouseup touchcancel touchend touchstart auxclick dblclick pointercancel pointerdown pointerup dragend dragstart drop compositionend compositionstart keydown keypress keyup input textInput copy cut paste click change contextmenu reset submit".split(" ");function Xa(e,n){switch(e){case"focusin":case"focusout":Qn=null;break;case"dragenter":case"dragleave":Yn=null;break;case"mouseover":case"mouseout":qn=null;break;case"pointerover":case"pointerout":Hr.delete(n.pointerId);break;case"gotpointercapture":case"lostpointercapture":Fr.delete(n.pointerId)}}function hr(e,n,t,r,o,i){return e===null||e.nativeEvent!==i?(e={blockedOn:n,domEventName:t,eventSystemFlags:r,nativeEvent:i,targetContainers:[o]},n!==null&&(n=lo(n),n!==null&&Is(n)),e):(e.eventSystemFlags|=r,n=e.targetContainers,o!==null&&n.indexOf(o)===-1&&n.push(o),e)}function rg(e,n,t,r,o){switch(n){case"focusin":return Qn=hr(Qn,e,n,t,r,o),!0;case"dragenter":return Yn=hr(Yn,e,n,t,r,o),!0;case"mouseover":return qn=hr(qn,e,n,t,r,o),!0;case"pointerover":var i=o.pointerId;return Hr.set(i,hr(Hr.get(i)||null,e,n,t,r,o)),!0;case"gotpointercapture":return i=o.pointerId,Fr.set(i,hr(Fr.get(i)||null,e,n,t,r,o)),!0}return!1}function dd(e){var n=yt(e.target);if(n!==null){var t=$t(n);if(t!==null){if(n=t.tag,n===13){if(n=Zc(t),n!==null){e.blockedOn=n,cd(e.priority,function(){ad(t)});return}}else if(n===3&&t.stateNode.current.memoizedState.isDehydrated){e.blockedOn=t.tag===3?t.stateNode.containerInfo:null;return}}}e.blockedOn=null}function Do(e){if(e.blockedOn!==null)return!1;for(var n=e.targetContainers;0<n.length;){var t=Ol(e.domEventName,e.eventSystemFlags,n[0],e.nativeEvent);if(t===null){t=e.nativeEvent;var r=new t.constructor(t.type,t);Ml=r,t.target.dispatchEvent(r),Ml=null}else return n=lo(t),n!==null&&Is(n),e.blockedOn=t,!1;n.shift()}return!0}function Ja(e,n,t){Do(e)&&t.delete(n)}function og(){Ll=!1,Qn!==null&&Do(Qn)&&(Qn=null),Yn!==null&&Do(Yn)&&(Yn=null),qn!==null&&Do(qn)&&(qn=null),Hr.forEach(Ja),Fr.forEach(Ja)}function yr(e,n){e.blockedOn===n&&(e.blockedOn=null,Ll||(Ll=!0,Xe.unstable_scheduleCallback(Xe.unstable_NormalPriority,og)))}function Br(e){function n(o){return yr(o,e)}if(0<xo.length){yr(xo[0],e);for(var t=1;t<xo.length;t++){var r=xo[t];r.blockedOn===e&&(r.blockedOn=null)}}for(Qn!==null&&yr(Qn,e),Yn!==null&&yr(Yn,e),qn!==null&&yr(qn,e),Hr.forEach(n),Fr.forEach(n),t=0;t<Bn.length;t++)r=Bn[t],r.blockedOn===e&&(r.blockedOn=null);for(;0<Bn.length&&(t=Bn[0],t.blockedOn===null);)dd(t),t.blockedOn===null&&Bn.shift()}var Xt=En.ReactCurrentBatchConfig,Zo=!0;function ig(e,n,t,r){var o=le,i=Xt.transition;Xt.transition=null;try{le=1,Ns(e,n,t,r)}finally{le=o,Xt.transition=i}}function lg(e,n,t,r){var o=le,i=Xt.transition;Xt.transition=null;try{le=4,Ns(e,n,t,r)}finally{le=o,Xt.transition=i}}function Ns(e,n,t,r){if(Zo){var o=Ol(e,n,t,r);if(o===null)rl(e,n,r,ei,t),Xa(e,r);else if(rg(o,e,n,t,r))r.stopPropagation();else if(Xa(e,r),n&4&&-1<tg.indexOf(e)){for(;o!==null;){var i=lo(o);if(i!==null&&sd(i),i=Ol(e,n,t,r),i===null&&rl(e,n,r,ei,t),i===o)break;o=i}o!==null&&r.stopPropagation()}else rl(e,n,r,null,t)}}var ei=null;function Ol(e,n,t,r){if(ei=null,e=Rs(r),e=yt(e),e!==null)if(n=$t(e),n===null)e=null;else if(t=n.tag,t===13){if(e=Zc(n),e!==null)return e;e=null}else if(t===3){if(n.stateNode.current.memoizedState.isDehydrated)return n.tag===3?n.stateNode.containerInfo:null;e=null}else n!==e&&(e=null);return ei=e,null}function pd(e){switch(e){case"cancel":case"click":case"close":case"contextmenu":case"copy":case"cut":case"auxclick":case"dblclick":case"dragend":case"dragstart":case"drop":case"focusin":case"focusout":case"input":case"invalid":case"keydown":case"keypress":case"keyup":case"mousedown":case"mouseup":case"paste":case"pause":case"play":case"pointercancel":case"pointerdown":case"pointerup":case"ratechange":case"reset":case"resize":case"seeked":case"submit":case"touchcancel":case"touchend":case"touchstart":case"volumechange":case"change":case"selectionchange":case"textInput":case"compositionstart":case"compositionend":case"compositionupdate":case"beforeblur":case"afterblur":case"beforeinput":case"blur":case"fullscreenchange":case"focus":case"hashchange":case"popstate":case"select":case"selectstart":return 1;case"drag":case"dragenter":case"dragexit":case"dragleave":case"dragover":case"mousemove":case"mouseout":case"mouseover":case"pointermove":case"pointerout":case"pointerover":case"scroll":case"toggle":case"touchmove":case"wheel":case"mouseenter":case"mouseleave":case"pointerenter":case"pointerleave":return 4;case"message":switch(Kf()){case $s:return 1;case rd:return 4;case Xo:case Qf:return 16;case od:return 536870912;default:return 16}default:return 16}}var Gn=null,js=null,zo=null;function md(){if(zo)return zo;var e,n=js,t=n.length,r,o="value"in Gn?Gn.value:Gn.textContent,i=o.length;for(e=0;e<t&&n[e]===o[e];e++);var l=t-e;for(r=1;r<=l&&n[t-r]===o[i-r];r++);return zo=o.slice(e,1<r?1-r:void 0)}function Ao(e){var n=e.keyCode;return"charCode"in e?(e=e.charCode,e===0&&n===13&&(e=13)):e=n,e===10&&(e=13),32<=e||e===13?e:0}function wo(){return!0}function Za(){return!1}function Ze(e){function n(t,r,o,i,l){this._reactName=t,this._targetInst=o,this.type=r,this.nativeEvent=i,this.target=l,this.currentTarget=null;for(var s in e)e.hasOwnProperty(s)&&(t=e[s],this[s]=t?t(i):i[s]);return this.isDefaultPrevented=(i.defaultPrevented!=null?i.defaultPrevented:i.returnValue===!1)?wo:Za,this.isPropagationStopped=Za,this}return ve(n.prototype,{preventDefault:function(){this.defaultPrevented=!0;var t=this.nativeEvent;t&&(t.preventDefault?t.preventDefault():typeof t.returnValue!="unknown"&&(t.returnValue=!1),this.isDefaultPrevented=wo)},stopPropagation:function(){var t=this.nativeEvent;t&&(t.stopPropagation?t.stopPropagation():typeof t.cancelBubble!="unknown"&&(t.cancelBubble=!0),this.isPropagationStopped=wo)},persist:function(){},isPersistent:wo}),n}var ar={eventPhase:0,bubbles:0,cancelable:0,timeStamp:function(e){return e.timeStamp||Date.now()},defaultPrevented:0,isTrusted:0},Es=Ze(ar),io=ve({},ar,{view:0,detail:0}),sg=Ze(io),Qi,Yi,vr,Si=ve({},io,{screenX:0,screenY:0,clientX:0,clientY:0,pageX:0,pageY:0,ctrlKey:0,shiftKey:0,altKey:0,metaKey:0,getModifierState:Ls,button:0,buttons:0,relatedTarget:function(e){return e.relatedTarget===void 0?e.fromElement===e.srcElement?e.toElement:e.fromElement:e.relatedTarget},movementX:function(e){return"movementX"in e?e.movementX:(e!==vr&&(vr&&e.type==="mousemove"?(Qi=e.screenX-vr.screenX,Yi=e.screenY-vr.screenY):Yi=Qi=0,vr=e),Qi)},movementY:function(e){return"movementY"in e?e.movementY:Yi}}),eu=Ze(Si),ag=ve({},Si,{dataTransfer:0}),ug=Ze(ag),cg=ve({},io,{relatedTarget:0}),qi=Ze(cg),dg=ve({},ar,{animationName:0,elapsedTime:0,pseudoElement:0}),pg=Ze(dg),mg=ve({},ar,{clipboardData:function(e){return"clipboardData"in e?e.clipboardData:window.clipboardData}}),fg=Ze(mg),gg=ve({},ar,{data:0}),nu=Ze(gg),hg={Esc:"Escape",Spacebar:" ",Left:"ArrowLeft",Up:"ArrowUp",Right:"ArrowRight",Down:"ArrowDown",Del:"Delete",Win:"OS",Menu:"ContextMenu",Apps:"ContextMenu",Scroll:"ScrollLock",MozPrintableKey:"Unidentified"},yg={8:"Backspace",9:"Tab",12:"Clear",13:"Enter",16:"Shift",17:"Control",18:"Alt",19:"Pause",20:"CapsLock",27:"Escape",32:" ",33:"PageUp",34:"PageDown",35:"End",36:"Home",37:"ArrowLeft",38:"ArrowUp",39:"ArrowRight",40:"ArrowDown",45:"Insert",46:"Delete",112:"F1",113:"F2",114:"F3",115:"F4",116:"F5",117:"F6",118:"F7",119:"F8",120:"F9",121:"F10",122:"F11",123:"F12",144:"NumLock",145:"ScrollLock",224:"Meta"},vg={Alt:"altKey",Control:"ctrlKey",Meta:"metaKey",Shift:"shiftKey"};function xg(e){var n=this.nativeEvent;return n.getModifierState?n.getModifierState(e):(e=vg[e])?!!n[e]:!1}function Ls(){return xg}var wg=ve({},io,{key:function(e){if(e.key){var n=hg[e.key]||e.key;if(n!=="Unidentified")return n}return e.type==="keypress"?(e=Ao(e),e===13?"Enter":String.fromCharCode(e)):e.type==="keydown"||e.type==="keyup"?yg[e.keyCode]||"Unidentified":""},code:0,location:0,ctrlKey:0,shiftKey:0,altKey:0,metaKey:0,repeat:0,locale:0,getModifierState:Ls,charCode:function(e){return e.type==="keypress"?Ao(e):0},keyCode:function(e){return e.type==="keydown"||e.type==="keyup"?e.keyCode:0},which:function(e){return e.type==="keypress"?Ao(e):e.type==="keydown"||e.type==="keyup"?e.keyCode:0}}),Sg=Ze(wg),bg=ve({},Si,{pointerId:0,width:0,height:0,pressure:0,tangentialPressure:0,tiltX:0,tiltY:0,twist:0,pointerType:0,isPrimary:0}),tu=Ze(bg),kg=ve({},io,{touches:0,targetTouches:0,changedTouches:0,altKey:0,metaKey:0,ctrlKey:0,shiftKey:0,getModifierState:Ls}),Pg=Ze(kg),Cg=ve({},ar,{propertyName:0,elapsedTime:0,pseudoElement:0}),_g=Ze(Cg),Tg=ve({},Si,{deltaX:function(e){return"deltaX"in e?e.deltaX:"wheelDeltaX"in e?-e.wheelDeltaX:0},deltaY:function(e){return"deltaY"in e?e.deltaY:"wheelDeltaY"in e?-e.wheelDeltaY:"wheelDelta"in e?-e.wheelDelta:0},deltaZ:0,deltaMode:0}),Rg=Ze(Tg),$g=[9,13,27,32],Os=Mn&&"CompositionEvent"in window,Ir=null;Mn&&"documentMode"in document&&(Ir=document.documentMode);var Mg=Mn&&"TextEvent"in window&&!Ir,fd=Mn&&(!Os||Ir&&8<Ir&&11>=Ir),ru=" ",ou=!1;function gd(e,n){switch(e){case"keyup":return $g.indexOf(n.keyCode)!==-1;case"keydown":return n.keyCode!==229;case"keypress":case"mousedown":case"focusout":return!0;default:return!1}}function hd(e){return e=e.detail,typeof e=="object"&&"data"in e?e.data:null}var zt=!1;function Ig(e,n){switch(e){case"compositionend":return hd(n);case"keypress":return n.which!==32?null:(ou=!0,ru);case"textInput":return e=n.data,e===ru&&ou?null:e;default:return null}}function Ng(e,n){if(zt)return e==="compositionend"||!Os&&gd(e,n)?(e=md(),zo=js=Gn=null,zt=!1,e):null;switch(e){case"paste":return null;case"keypress":if(!(n.ctrlKey||n.altKey||n.metaKey)||n.ctrlKey&&n.altKey){if(n.char&&1<n.char.length)return n.char;if(n.which)return String.fromCharCode(n.which)}return null;case"compositionend":return fd&&n.locale!=="ko"?null:n.data;default:return null}}var jg={color:!0,date:!0,datetime:!0,"datetime-local":!0,email:!0,month:!0,number:!0,password:!0,range:!0,search:!0,tel:!0,text:!0,time:!0,url:!0,week:!0};function iu(e){var n=e&&e.nodeName&&e.nodeName.toLowerCase();return n==="input"?!!jg[e.type]:n==="textarea"}function yd(e,n,t,r){Qc(r),n=ni(n,"onChange"),0<n.length&&(t=new Es("onChange","change",null,t,r),e.push({event:t,listeners:n}))}var Nr=null,Ur=null;function Eg(e){Rd(e,0)}function bi(e){var n=Ht(e);if(Hc(n))return e}function Lg(e,n){if(e==="change")return n}var vd=!1;if(Mn){var Xi;if(Mn){var Ji="oninput"in document;if(!Ji){var lu=document.createElement("div");lu.setAttribute("oninput","return;"),Ji=typeof lu.oninput=="function"}Xi=Ji}else Xi=!1;vd=Xi&&(!document.documentMode||9<document.documentMode)}function su(){Nr&&(Nr.detachEvent("onpropertychange",xd),Ur=Nr=null)}function xd(e){if(e.propertyName==="value"&&bi(Ur)){var n=[];yd(n,Ur,e,Rs(e)),Jc(Eg,n)}}function Og(e,n,t){e==="focusin"?(su(),Nr=n,Ur=t,Nr.attachEvent("onpropertychange",xd)):e==="focusout"&&su()}function Dg(e){if(e==="selectionchange"||e==="keyup"||e==="keydown")return bi(Ur)}function zg(e,n){if(e==="click")return bi(n)}function Ag(e,n){if(e==="input"||e==="change")return bi(n)}function Wg(e,n){return e===n&&(e!==0||1/e===1/n)||e!==e&&n!==n}var hn=typeof Object.is=="function"?Object.is:Wg;function Gr(e,n){if(hn(e,n))return!0;if(typeof e!="object"||e===null||typeof n!="object"||n===null)return!1;var t=Object.keys(e),r=Object.keys(n);if(t.length!==r.length)return!1;for(r=0;r<t.length;r++){var o=t[r];if(!vl.call(n,o)||!hn(e[o],n[o]))return!1}return!0}function au(e){for(;e&&e.firstChild;)e=e.firstChild;return e}function uu(e,n){var t=au(e);e=0;for(var r;t;){if(t.nodeType===3){if(r=e+t.textContent.length,e<=n&&r>=n)return{node:t,offset:n-e};e=r}e:{for(;t;){if(t.nextSibling){t=t.nextSibling;break e}t=t.parentNode}t=void 0}t=au(t)}}function wd(e,n){return e&&n?e===n?!0:e&&e.nodeType===3?!1:n&&n.nodeType===3?wd(e,n.parentNode):"contains"in e?e.contains(n):e.compareDocumentPosition?!!(e.compareDocumentPosition(n)&16):!1:!1}function Sd(){for(var e=window,n=Qo();n instanceof e.HTMLIFrameElement;){try{var t=typeof n.contentWindow.location.href=="string"}catch{t=!1}if(t)e=n.contentWindow;else break;n=Qo(e.document)}return n}function Ds(e){var n=e&&e.nodeName&&e.nodeName.toLowerCase();return n&&(n==="input"&&(e.type==="text"||e.type==="search"||e.type==="tel"||e.type==="url"||e.type==="password")||n==="textarea"||e.contentEditable==="true")}function Hg(e){var n=Sd(),t=e.focusedElem,r=e.selectionRange;if(n!==t&&t&&t.ownerDocument&&wd(t.ownerDocument.documentElement,t)){if(r!==null&&Ds(t)){if(n=r.start,e=r.end,e===void 0&&(e=n),"selectionStart"in t)t.selectionStart=n,t.selectionEnd=Math.min(e,t.value.length);else if(e=(n=t.ownerDocument||document)&&n.defaultView||window,e.getSelection){e=e.getSelection();var o=t.textContent.length,i=Math.min(r.start,o);r=r.end===void 0?i:Math.min(r.end,o),!e.extend&&i>r&&(o=r,r=i,i=o),o=uu(t,i);var l=uu(t,r);o&&l&&(e.rangeCount!==1||e.anchorNode!==o.node||e.anchorOffset!==o.offset||e.focusNode!==l.node||e.focusOffset!==l.offset)&&(n=n.createRange(),n.setStart(o.node,o.offset),e.removeAllRanges(),i>r?(e.addRange(n),e.extend(l.node,l.offset)):(n.setEnd(l.node,l.offset),e.addRange(n)))}}for(n=[],e=t;e=e.parentNode;)e.nodeType===1&&n.push({element:e,left:e.scrollLeft,top:e.scrollTop});for(typeof t.focus=="function"&&t.focus(),t=0;t<n.length;t++)e=n[t],e.element.scrollLeft=e.left,e.element.scrollTop=e.top}}var Fg=Mn&&"documentMode"in document&&11>=document.documentMode,At=null,Dl=null,jr=null,zl=!1;function cu(e,n,t){var r=t.window===t?t.document:t.nodeType===9?t:t.ownerDocument;zl||At==null||At!==Qo(r)||(r=At,"selectionStart"in r&&Ds(r)?r={start:r.selectionStart,end:r.selectionEnd}:(r=(r.ownerDocument&&r.ownerDocument.defaultView||window).getSelection(),r={anchorNode:r.anchorNode,anchorOffset:r.anchorOffset,focusNode:r.focusNode,focusOffset:r.focusOffset}),jr&&Gr(jr,r)||(jr=r,r=ni(Dl,"onSelect"),0<r.length&&(n=new Es("onSelect","select",null,n,t),e.push({event:n,listeners:r}),n.target=At)))}function So(e,n){var t={};return t[e.toLowerCase()]=n.toLowerCase(),t["Webkit"+e]="webkit"+n,t["Moz"+e]="moz"+n,t}var Wt={animationend:So("Animation","AnimationEnd"),animationiteration:So("Animation","AnimationIteration"),animationstart:So("Animation","AnimationStart"),transitionend:So("Transition","TransitionEnd")},Zi={},bd={};Mn&&(bd=document.createElement("div").style,"AnimationEvent"in window||(delete Wt.animationend.animation,delete Wt.animationiteration.animation,delete Wt.animationstart.animation),"TransitionEvent"in window||delete Wt.transitionend.transition);function ki(e){if(Zi[e])return Zi[e];if(!Wt[e])return e;var n=Wt[e],t;for(t in n)if(n.hasOwnProperty(t)&&t in bd)return Zi[e]=n[t];return e}var kd=ki("animationend"),Pd=ki("animationiteration"),Cd=ki("animationstart"),_d=ki("transitionend"),Td=new Map,du="abort auxClick cancel canPlay canPlayThrough click close contextMenu copy cut drag dragEnd dragEnter dragExit dragLeave dragOver dragStart drop durationChange emptied encrypted ended error gotPointerCapture input invalid keyDown keyPress keyUp load loadedData loadedMetadata loadStart lostPointerCapture mouseDown mouseMove mouseOut mouseOver mouseUp paste pause play playing pointerCancel pointerDown pointerMove pointerOut pointerOver pointerUp progress rateChange reset resize seeked seeking stalled submit suspend timeUpdate touchCancel touchEnd touchStart volumeChange scroll toggle touchMove waiting wheel".split(" ");function it(e,n){Td.set(e,n),Rt(n,[e])}for(var el=0;el<du.length;el++){var nl=du[el],Bg=nl.toLowerCase(),Ug=nl[0].toUpperCase()+nl.slice(1);it(Bg,"on"+Ug)}it(kd,"onAnimationEnd");it(Pd,"onAnimationIteration");it(Cd,"onAnimationStart");it("dblclick","onDoubleClick");it("focusin","onFocus");it("focusout","onBlur");it(_d,"onTransitionEnd");er("onMouseEnter",["mouseout","mouseover"]);er("onMouseLeave",["mouseout","mouseover"]);er("onPointerEnter",["pointerout","pointerover"]);er("onPointerLeave",["pointerout","pointerover"]);Rt("onChange","change click focusin focusout input keydown keyup selectionchange".split(" "));Rt("onSelect","focusout contextmenu dragend focusin keydown keyup mousedown mouseup selectionchange".split(" "));Rt("onBeforeInput",["compositionend","keypress","textInput","paste"]);Rt("onCompositionEnd","compositionend focusout keydown keypress keyup mousedown".split(" "));Rt("onCompositionStart","compositionstart focusout keydown keypress keyup mousedown".split(" "));Rt("onCompositionUpdate","compositionupdate focusout keydown keypress keyup mousedown".split(" "));var _r="abort canplay canplaythrough durationchange emptied encrypted ended error loadeddata loadedmetadata loadstart pause play playing progress ratechange resize seeked seeking stalled suspend timeupdate volumechange waiting".split(" "),Gg=new Set("cancel close invalid load scroll toggle".split(" ").concat(_r));function pu(e,n,t){var r=e.type||"unknown-event";e.currentTarget=t,Bf(r,n,void 0,e),e.currentTarget=null}function Rd(e,n){n=(n&4)!==0;for(var t=0;t<e.length;t++){var r=e[t],o=r.event;r=r.listeners;e:{var i=void 0;if(n)for(var l=r.length-1;0<=l;l--){var s=r[l],a=s.instance,u=s.currentTarget;if(s=s.listener,a!==i&&o.isPropagationStopped())break e;pu(o,s,u),i=a}else for(l=0;l<r.length;l++){if(s=r[l],a=s.instance,u=s.currentTarget,s=s.listener,a!==i&&o.isPropagationStopped())break e;pu(o,s,u),i=a}}}if(qo)throw e=jl,qo=!1,jl=null,e}function pe(e,n){var t=n[Bl];t===void 0&&(t=n[Bl]=new Set);var r=e+"__bubble";t.has(r)||($d(n,e,2,!1),t.add(r))}function tl(e,n,t){var r=0;n&&(r|=4),$d(t,e,r,n)}var bo="_reactListening"+Math.random().toString(36).slice(2);function Vr(e){if(!e[bo]){e[bo]=!0,Oc.forEach(function(t){t!=="selectionchange"&&(Gg.has(t)||tl(t,!1,e),tl(t,!0,e))});var n=e.nodeType===9?e:e.ownerDocument;n===null||n[bo]||(n[bo]=!0,tl("selectionchange",!1,n))}}function $d(e,n,t,r){switch(pd(n)){case 1:var o=ig;break;case 4:o=lg;break;default:o=Ns}t=o.bind(null,n,t,e),o=void 0,!Nl||n!=="touchstart"&&n!=="touchmove"&&n!=="wheel"||(o=!0),r?o!==void 0?e.addEventListener(n,t,{capture:!0,passive:o}):e.addEventListener(n,t,!0):o!==void 0?e.addEventListener(n,t,{passive:o}):e.addEventListener(n,t,!1)}function rl(e,n,t,r,o){var i=r;if(!(n&1)&&!(n&2)&&r!==null)e:for(;;){if(r===null)return;var l=r.tag;if(l===3||l===4){var s=r.stateNode.containerInfo;if(s===o||s.nodeType===8&&s.parentNode===o)break;if(l===4)for(l=r.return;l!==null;){var a=l.tag;if((a===3||a===4)&&(a=l.stateNode.containerInfo,a===o||a.nodeType===8&&a.parentNode===o))return;l=l.return}for(;s!==null;){if(l=yt(s),l===null)return;if(a=l.tag,a===5||a===6){r=i=l;continue e}s=s.parentNode}}r=r.return}Jc(function(){var u=i,p=Rs(t),c=[];e:{var m=Td.get(e);if(m!==void 0){var g=Es,x=e;switch(e){case"keypress":if(Ao(t)===0)break e;case"keydown":case"keyup":g=Sg;break;case"focusin":x="focus",g=qi;break;case"focusout":x="blur",g=qi;break;case"beforeblur":case"afterblur":g=qi;break;case"click":if(t.button===2)break e;case"auxclick":case"dblclick":case"mousedown":case"mousemove":case"mouseup":case"mouseout":case"mouseover":case"contextmenu":g=eu;break;case"drag":case"dragend":case"dragenter":case"dragexit":case"dragleave":case"dragover":case"dragstart":case"drop":g=ug;break;case"touchcancel":case"touchend":case"touchmove":case"touchstart":g=Pg;break;case kd:case Pd:case Cd:g=pg;break;case _d:g=_g;break;case"scroll":g=sg;break;case"wheel":g=Rg;break;case"copy":case"cut":case"paste":g=fg;break;case"gotpointercapture":case"lostpointercapture":case"pointercancel":case"pointerdown":case"pointermove":case"pointerout":case"pointerover":case"pointerup":g=tu}var w=(n&4)!==0,S=!w&&e==="scroll",h=w?m!==null?m+"Capture":null:m;w=[];for(var f=u,v;f!==null;){v=f;var b=v.stateNode;if(v.tag===5&&b!==null&&(v=b,h!==null&&(b=Wr(f,h),b!=null&&w.push(Kr(f,b,v)))),S)break;f=f.return}0<w.length&&(m=new g(m,x,null,t,p),c.push({event:m,listeners:w}))}}if(!(n&7)){e:{if(m=e==="mouseover"||e==="pointerover",g=e==="mouseout"||e==="pointerout",m&&t!==Ml&&(x=t.relatedTarget||t.fromElement)&&(yt(x)||x[In]))break e;if((g||m)&&(m=p.window===p?p:(m=p.ownerDocument)?m.defaultView||m.parentWindow:window,g?(x=t.relatedTarget||t.toElement,g=u,x=x?yt(x):null,x!==null&&(S=$t(x),x!==S||x.tag!==5&&x.tag!==6)&&(x=null)):(g=null,x=u),g!==x)){if(w=eu,b="onMouseLeave",h="onMouseEnter",f="mouse",(e==="pointerout"||e==="pointerover")&&(w=tu,b="onPointerLeave",h="onPointerEnter",f="pointer"),S=g==null?m:Ht(g),v=x==null?m:Ht(x),m=new w(b,f+"leave",g,t,p),m.target=S,m.relatedTarget=v,b=null,yt(p)===u&&(w=new w(h,f+"enter",x,t,p),w.target=v,w.relatedTarget=S,b=w),S=b,g&&x)n:{for(w=g,h=x,f=0,v=w;v;v=Lt(v))f++;for(v=0,b=h;b;b=Lt(b))v++;for(;0<f-v;)w=Lt(w),f--;for(;0<v-f;)h=Lt(h),v--;for(;f--;){if(w===h||h!==null&&w===h.alternate)break n;w=Lt(w),h=Lt(h)}w=null}else w=null;g!==null&&mu(c,m,g,w,!1),x!==null&&S!==null&&mu(c,S,x,w,!0)}}e:{if(m=u?Ht(u):window,g=m.nodeName&&m.nodeName.toLowerCase(),g==="select"||g==="input"&&m.type==="file")var C=Lg;else if(iu(m))if(vd)C=Ag;else{C=Dg;var j=Og}else(g=m.nodeName)&&g.toLowerCase()==="input"&&(m.type==="checkbox"||m.type==="radio")&&(C=zg);if(C&&(C=C(e,u))){yd(c,C,t,p);break e}j&&j(e,m,u),e==="focusout"&&(j=m._wrapperState)&&j.controlled&&m.type==="number"&&Cl(m,"number",m.value)}switch(j=u?Ht(u):window,e){case"focusin":(iu(j)||j.contentEditable==="true")&&(At=j,Dl=u,jr=null);break;case"focusout":jr=Dl=At=null;break;case"mousedown":zl=!0;break;case"contextmenu":case"mouseup":case"dragend":zl=!1,cu(c,t,p);break;case"selectionchange":if(Fg)break;case"keydown":case"keyup":cu(c,t,p)}var M;if(Os)e:{switch(e){case"compositionstart":var E="onCompositionStart";break e;case"compositionend":E="onCompositionEnd";break e;case"compositionupdate":E="onCompositionUpdate";break e}E=void 0}else zt?gd(e,t)&&(E="onCompositionEnd"):e==="keydown"&&t.keyCode===229&&(E="onCompositionStart");E&&(fd&&t.locale!=="ko"&&(zt||E!=="onCompositionStart"?E==="onCompositionEnd"&&zt&&(M=md()):(Gn=p,js="value"in Gn?Gn.value:Gn.textContent,zt=!0)),j=ni(u,E),0<j.length&&(E=new nu(E,e,null,t,p),c.push({event:E,listeners:j}),M?E.data=M:(M=hd(t),M!==null&&(E.data=M)))),(M=Mg?Ig(e,t):Ng(e,t))&&(u=ni(u,"onBeforeInput"),0<u.length&&(p=new nu("onBeforeInput","beforeinput",null,t,p),c.push({event:p,listeners:u}),p.data=M))}Rd(c,n)})}function Kr(e,n,t){return{instance:e,listener:n,currentTarget:t}}function ni(e,n){for(var t=n+"Capture",r=[];e!==null;){var o=e,i=o.stateNode;o.tag===5&&i!==null&&(o=i,i=Wr(e,t),i!=null&&r.unshift(Kr(e,i,o)),i=Wr(e,n),i!=null&&r.push(Kr(e,i,o))),e=e.return}return r}function Lt(e){if(e===null)return null;do e=e.return;while(e&&e.tag!==5);return e||null}function mu(e,n,t,r,o){for(var i=n._reactName,l=[];t!==null&&t!==r;){var s=t,a=s.alternate,u=s.stateNode;if(a!==null&&a===r)break;s.tag===5&&u!==null&&(s=u,o?(a=Wr(t,i),a!=null&&l.unshift(Kr(t,a,s))):o||(a=Wr(t,i),a!=null&&l.push(Kr(t,a,s)))),t=t.return}l.length!==0&&e.push({event:n,listeners:l})}var Vg=/\r\n?/g,Kg=/\u0000|\uFFFD/g;function fu(e){return(typeof e=="string"?e:""+e).replace(Vg,`
`).replace(Kg,"")}function ko(e,n,t){if(n=fu(n),fu(e)!==n&&t)throw Error(_(425))}function ti(){}var Al=null,Wl=null;function Hl(e,n){return e==="textarea"||e==="noscript"||typeof n.children=="string"||typeof n.children=="number"||typeof n.dangerouslySetInnerHTML=="object"&&n.dangerouslySetInnerHTML!==null&&n.dangerouslySetInnerHTML.__html!=null}var Fl=typeof setTimeout=="function"?setTimeout:void 0,Qg=typeof clearTimeout=="function"?clearTimeout:void 0,gu=typeof Promise=="function"?Promise:void 0,Yg=typeof queueMicrotask=="function"?queueMicrotask:typeof gu<"u"?function(e){return gu.resolve(null).then(e).catch(qg)}:Fl;function qg(e){setTimeout(function(){throw e})}function ol(e,n){var t=n,r=0;do{var o=t.nextSibling;if(e.removeChild(t),o&&o.nodeType===8)if(t=o.data,t==="/$"){if(r===0){e.removeChild(o),Br(n);return}r--}else t!=="$"&&t!=="$?"&&t!=="$!"||r++;t=o}while(t);Br(n)}function Xn(e){for(;e!=null;e=e.nextSibling){var n=e.nodeType;if(n===1||n===3)break;if(n===8){if(n=e.data,n==="$"||n==="$!"||n==="$?")break;if(n==="/$")return null}}return e}function hu(e){e=e.previousSibling;for(var n=0;e;){if(e.nodeType===8){var t=e.data;if(t==="$"||t==="$!"||t==="$?"){if(n===0)return e;n--}else t==="/$"&&n++}e=e.previousSibling}return null}var ur=Math.random().toString(36).slice(2),xn="__reactFiber$"+ur,Qr="__reactProps$"+ur,In="__reactContainer$"+ur,Bl="__reactEvents$"+ur,Xg="__reactListeners$"+ur,Jg="__reactHandles$"+ur;function yt(e){var n=e[xn];if(n)return n;for(var t=e.parentNode;t;){if(n=t[In]||t[xn]){if(t=n.alternate,n.child!==null||t!==null&&t.child!==null)for(e=hu(e);e!==null;){if(t=e[xn])return t;e=hu(e)}return n}e=t,t=e.parentNode}return null}function lo(e){return e=e[xn]||e[In],!e||e.tag!==5&&e.tag!==6&&e.tag!==13&&e.tag!==3?null:e}function Ht(e){if(e.tag===5||e.tag===6)return e.stateNode;throw Error(_(33))}function Pi(e){return e[Qr]||null}var Ul=[],Ft=-1;function lt(e){return{current:e}}function me(e){0>Ft||(e.current=Ul[Ft],Ul[Ft]=null,Ft--)}function ce(e,n){Ft++,Ul[Ft]=e.current,e.current=n}var ot={},De=lt(ot),Ge=lt(!1),bt=ot;function nr(e,n){var t=e.type.contextTypes;if(!t)return ot;var r=e.stateNode;if(r&&r.__reactInternalMemoizedUnmaskedChildContext===n)return r.__reactInternalMemoizedMaskedChildContext;var o={},i;for(i in t)o[i]=n[i];return r&&(e=e.stateNode,e.__reactInternalMemoizedUnmaskedChildContext=n,e.__reactInternalMemoizedMaskedChildContext=o),o}function Ve(e){return e=e.childContextTypes,e!=null}function ri(){me(Ge),me(De)}function yu(e,n,t){if(De.current!==ot)throw Error(_(168));ce(De,n),ce(Ge,t)}function Md(e,n,t){var r=e.stateNode;if(n=n.childContextTypes,typeof r.getChildContext!="function")return t;r=r.getChildContext();for(var o in r)if(!(o in n))throw Error(_(108,Of(e)||"Unknown",o));return ve({},t,r)}function oi(e){return e=(e=e.stateNode)&&e.__reactInternalMemoizedMergedChildContext||ot,bt=De.current,ce(De,e),ce(Ge,Ge.current),!0}function vu(e,n,t){var r=e.stateNode;if(!r)throw Error(_(169));t?(e=Md(e,n,bt),r.__reactInternalMemoizedMergedChildContext=e,me(Ge),me(De),ce(De,e)):me(Ge),ce(Ge,t)}var _n=null,Ci=!1,il=!1;function Id(e){_n===null?_n=[e]:_n.push(e)}function Zg(e){Ci=!0,Id(e)}function st(){if(!il&&_n!==null){il=!0;var e=0,n=le;try{var t=_n;for(le=1;e<t.length;e++){var r=t[e];do r=r(!0);while(r!==null)}_n=null,Ci=!1}catch(o){throw _n!==null&&(_n=_n.slice(e+1)),td($s,st),o}finally{le=n,il=!1}}return null}var Bt=[],Ut=0,ii=null,li=0,tn=[],rn=0,kt=null,Tn=1,Rn="";function gt(e,n){Bt[Ut++]=li,Bt[Ut++]=ii,ii=e,li=n}function Nd(e,n,t){tn[rn++]=Tn,tn[rn++]=Rn,tn[rn++]=kt,kt=e;var r=Tn;e=Rn;var o=32-fn(r)-1;r&=~(1<<o),t+=1;var i=32-fn(n)+o;if(30<i){var l=o-o%5;i=(r&(1<<l)-1).toString(32),r>>=l,o-=l,Tn=1<<32-fn(n)+o|t<<o|r,Rn=i+e}else Tn=1<<i|t<<o|r,Rn=e}function zs(e){e.return!==null&&(gt(e,1),Nd(e,1,0))}function As(e){for(;e===ii;)ii=Bt[--Ut],Bt[Ut]=null,li=Bt[--Ut],Bt[Ut]=null;for(;e===kt;)kt=tn[--rn],tn[rn]=null,Rn=tn[--rn],tn[rn]=null,Tn=tn[--rn],tn[rn]=null}var qe=null,Ye=null,ge=!1,mn=null;function jd(e,n){var t=on(5,null,null,0);t.elementType="DELETED",t.stateNode=n,t.return=e,n=e.deletions,n===null?(e.deletions=[t],e.flags|=16):n.push(t)}function xu(e,n){switch(e.tag){case 5:var t=e.type;return n=n.nodeType!==1||t.toLowerCase()!==n.nodeName.toLowerCase()?null:n,n!==null?(e.stateNode=n,qe=e,Ye=Xn(n.firstChild),!0):!1;case 6:return n=e.pendingProps===""||n.nodeType!==3?null:n,n!==null?(e.stateNode=n,qe=e,Ye=null,!0):!1;case 13:return n=n.nodeType!==8?null:n,n!==null?(t=kt!==null?{id:Tn,overflow:Rn}:null,e.memoizedState={dehydrated:n,treeContext:t,retryLane:1073741824},t=on(18,null,null,0),t.stateNode=n,t.return=e,e.child=t,qe=e,Ye=null,!0):!1;default:return!1}}function Gl(e){return(e.mode&1)!==0&&(e.flags&128)===0}function Vl(e){if(ge){var n=Ye;if(n){var t=n;if(!xu(e,n)){if(Gl(e))throw Error(_(418));n=Xn(t.nextSibling);var r=qe;n&&xu(e,n)?jd(r,t):(e.flags=e.flags&-4097|2,ge=!1,qe=e)}}else{if(Gl(e))throw Error(_(418));e.flags=e.flags&-4097|2,ge=!1,qe=e}}}function wu(e){for(e=e.return;e!==null&&e.tag!==5&&e.tag!==3&&e.tag!==13;)e=e.return;qe=e}function Po(e){if(e!==qe)return!1;if(!ge)return wu(e),ge=!0,!1;var n;if((n=e.tag!==3)&&!(n=e.tag!==5)&&(n=e.type,n=n!=="head"&&n!=="body"&&!Hl(e.type,e.memoizedProps)),n&&(n=Ye)){if(Gl(e))throw Ed(),Error(_(418));for(;n;)jd(e,n),n=Xn(n.nextSibling)}if(wu(e),e.tag===13){if(e=e.memoizedState,e=e!==null?e.dehydrated:null,!e)throw Error(_(317));e:{for(e=e.nextSibling,n=0;e;){if(e.nodeType===8){var t=e.data;if(t==="/$"){if(n===0){Ye=Xn(e.nextSibling);break e}n--}else t!=="$"&&t!=="$!"&&t!=="$?"||n++}e=e.nextSibling}Ye=null}}else Ye=qe?Xn(e.stateNode.nextSibling):null;return!0}function Ed(){for(var e=Ye;e;)e=Xn(e.nextSibling)}function tr(){Ye=qe=null,ge=!1}function Ws(e){mn===null?mn=[e]:mn.push(e)}var eh=En.ReactCurrentBatchConfig;function xr(e,n,t){if(e=t.ref,e!==null&&typeof e!="function"&&typeof e!="object"){if(t._owner){if(t=t._owner,t){if(t.tag!==1)throw Error(_(309));var r=t.stateNode}if(!r)throw Error(_(147,e));var o=r,i=""+e;return n!==null&&n.ref!==null&&typeof n.ref=="function"&&n.ref._stringRef===i?n.ref:(n=function(l){var s=o.refs;l===null?delete s[i]:s[i]=l},n._stringRef=i,n)}if(typeof e!="string")throw Error(_(284));if(!t._owner)throw Error(_(290,e))}return e}function Co(e,n){throw e=Object.prototype.toString.call(n),Error(_(31,e==="[object Object]"?"object with keys {"+Object.keys(n).join(", ")+"}":e))}function Su(e){var n=e._init;return n(e._payload)}function Ld(e){function n(h,f){if(e){var v=h.deletions;v===null?(h.deletions=[f],h.flags|=16):v.push(f)}}function t(h,f){if(!e)return null;for(;f!==null;)n(h,f),f=f.sibling;return null}function r(h,f){for(h=new Map;f!==null;)f.key!==null?h.set(f.key,f):h.set(f.index,f),f=f.sibling;return h}function o(h,f){return h=nt(h,f),h.index=0,h.sibling=null,h}function i(h,f,v){return h.index=v,e?(v=h.alternate,v!==null?(v=v.index,v<f?(h.flags|=2,f):v):(h.flags|=2,f)):(h.flags|=1048576,f)}function l(h){return e&&h.alternate===null&&(h.flags|=2),h}function s(h,f,v,b){return f===null||f.tag!==6?(f=pl(v,h.mode,b),f.return=h,f):(f=o(f,v),f.return=h,f)}function a(h,f,v,b){var C=v.type;return C===Dt?p(h,f,v.props.children,b,v.key):f!==null&&(f.elementType===C||typeof C=="object"&&C!==null&&C.$$typeof===Hn&&Su(C)===f.type)?(b=o(f,v.props),b.ref=xr(h,f,v),b.return=h,b):(b=Vo(v.type,v.key,v.props,null,h.mode,b),b.ref=xr(h,f,v),b.return=h,b)}function u(h,f,v,b){return f===null||f.tag!==4||f.stateNode.containerInfo!==v.containerInfo||f.stateNode.implementation!==v.implementation?(f=ml(v,h.mode,b),f.return=h,f):(f=o(f,v.children||[]),f.return=h,f)}function p(h,f,v,b,C){return f===null||f.tag!==7?(f=St(v,h.mode,b,C),f.return=h,f):(f=o(f,v),f.return=h,f)}function c(h,f,v){if(typeof f=="string"&&f!==""||typeof f=="number")return f=pl(""+f,h.mode,v),f.return=h,f;if(typeof f=="object"&&f!==null){switch(f.$$typeof){case fo:return v=Vo(f.type,f.key,f.props,null,h.mode,v),v.ref=xr(h,null,f),v.return=h,v;case Ot:return f=ml(f,h.mode,v),f.return=h,f;case Hn:var b=f._init;return c(h,b(f._payload),v)}if(Pr(f)||fr(f))return f=St(f,h.mode,v,null),f.return=h,f;Co(h,f)}return null}function m(h,f,v,b){var C=f!==null?f.key:null;if(typeof v=="string"&&v!==""||typeof v=="number")return C!==null?null:s(h,f,""+v,b);if(typeof v=="object"&&v!==null){switch(v.$$typeof){case fo:return v.key===C?a(h,f,v,b):null;case Ot:return v.key===C?u(h,f,v,b):null;case Hn:return C=v._init,m(h,f,C(v._payload),b)}if(Pr(v)||fr(v))return C!==null?null:p(h,f,v,b,null);Co(h,v)}return null}function g(h,f,v,b,C){if(typeof b=="string"&&b!==""||typeof b=="number")return h=h.get(v)||null,s(f,h,""+b,C);if(typeof b=="object"&&b!==null){switch(b.$$typeof){case fo:return h=h.get(b.key===null?v:b.key)||null,a(f,h,b,C);case Ot:return h=h.get(b.key===null?v:b.key)||null,u(f,h,b,C);case Hn:var j=b._init;return g(h,f,v,j(b._payload),C)}if(Pr(b)||fr(b))return h=h.get(v)||null,p(f,h,b,C,null);Co(f,b)}return null}function x(h,f,v,b){for(var C=null,j=null,M=f,E=f=0,k=null;M!==null&&E<v.length;E++){M.index>E?(k=M,M=null):k=M.sibling;var P=m(h,M,v[E],b);if(P===null){M===null&&(M=k);break}e&&M&&P.alternate===null&&n(h,M),f=i(P,f,E),j===null?C=P:j.sibling=P,j=P,M=k}if(E===v.length)return t(h,M),ge&&gt(h,E),C;if(M===null){for(;E<v.length;E++)M=c(h,v[E],b),M!==null&&(f=i(M,f,E),j===null?C=M:j.sibling=M,j=M);return ge&&gt(h,E),C}for(M=r(h,M);E<v.length;E++)k=g(M,h,E,v[E],b),k!==null&&(e&&k.alternate!==null&&M.delete(k.key===null?E:k.key),f=i(k,f,E),j===null?C=k:j.sibling=k,j=k);return e&&M.forEach(function(L){return n(h,L)}),ge&&gt(h,E),C}function w(h,f,v,b){var C=fr(v);if(typeof C!="function")throw Error(_(150));if(v=C.call(v),v==null)throw Error(_(151));for(var j=C=null,M=f,E=f=0,k=null,P=v.next();M!==null&&!P.done;E++,P=v.next()){M.index>E?(k=M,M=null):k=M.sibling;var L=m(h,M,P.value,b);if(L===null){M===null&&(M=k);break}e&&M&&L.alternate===null&&n(h,M),f=i(L,f,E),j===null?C=L:j.sibling=L,j=L,M=k}if(P.done)return t(h,M),ge&&gt(h,E),C;if(M===null){for(;!P.done;E++,P=v.next())P=c(h,P.value,b),P!==null&&(f=i(P,f,E),j===null?C=P:j.sibling=P,j=P);return ge&&gt(h,E),C}for(M=r(h,M);!P.done;E++,P=v.next())P=g(M,h,E,P.value,b),P!==null&&(e&&P.alternate!==null&&M.delete(P.key===null?E:P.key),f=i(P,f,E),j===null?C=P:j.sibling=P,j=P);return e&&M.forEach(function(K){return n(h,K)}),ge&&gt(h,E),C}function S(h,f,v,b){if(typeof v=="object"&&v!==null&&v.type===Dt&&v.key===null&&(v=v.props.children),typeof v=="object"&&v!==null){switch(v.$$typeof){case fo:e:{for(var C=v.key,j=f;j!==null;){if(j.key===C){if(C=v.type,C===Dt){if(j.tag===7){t(h,j.sibling),f=o(j,v.props.children),f.return=h,h=f;break e}}else if(j.elementType===C||typeof C=="object"&&C!==null&&C.$$typeof===Hn&&Su(C)===j.type){t(h,j.sibling),f=o(j,v.props),f.ref=xr(h,j,v),f.return=h,h=f;break e}t(h,j);break}else n(h,j);j=j.sibling}v.type===Dt?(f=St(v.props.children,h.mode,b,v.key),f.return=h,h=f):(b=Vo(v.type,v.key,v.props,null,h.mode,b),b.ref=xr(h,f,v),b.return=h,h=b)}return l(h);case Ot:e:{for(j=v.key;f!==null;){if(f.key===j)if(f.tag===4&&f.stateNode.containerInfo===v.containerInfo&&f.stateNode.implementation===v.implementation){t(h,f.sibling),f=o(f,v.children||[]),f.return=h,h=f;break e}else{t(h,f);break}else n(h,f);f=f.sibling}f=ml(v,h.mode,b),f.return=h,h=f}return l(h);case Hn:return j=v._init,S(h,f,j(v._payload),b)}if(Pr(v))return x(h,f,v,b);if(fr(v))return w(h,f,v,b);Co(h,v)}return typeof v=="string"&&v!==""||typeof v=="number"?(v=""+v,f!==null&&f.tag===6?(t(h,f.sibling),f=o(f,v),f.return=h,h=f):(t(h,f),f=pl(v,h.mode,b),f.return=h,h=f),l(h)):t(h,f)}return S}var rr=Ld(!0),Od=Ld(!1),si=lt(null),ai=null,Gt=null,Hs=null;function Fs(){Hs=Gt=ai=null}function Bs(e){var n=si.current;me(si),e._currentValue=n}function Kl(e,n,t){for(;e!==null;){var r=e.alternate;if((e.childLanes&n)!==n?(e.childLanes|=n,r!==null&&(r.childLanes|=n)):r!==null&&(r.childLanes&n)!==n&&(r.childLanes|=n),e===t)break;e=e.return}}function Jt(e,n){ai=e,Hs=Gt=null,e=e.dependencies,e!==null&&e.firstContext!==null&&(e.lanes&n&&(Ue=!0),e.firstContext=null)}function sn(e){var n=e._currentValue;if(Hs!==e)if(e={context:e,memoizedValue:n,next:null},Gt===null){if(ai===null)throw Error(_(308));Gt=e,ai.dependencies={lanes:0,firstContext:e}}else Gt=Gt.next=e;return n}var vt=null;function Us(e){vt===null?vt=[e]:vt.push(e)}function Dd(e,n,t,r){var o=n.interleaved;return o===null?(t.next=t,Us(n)):(t.next=o.next,o.next=t),n.interleaved=t,Nn(e,r)}function Nn(e,n){e.lanes|=n;var t=e.alternate;for(t!==null&&(t.lanes|=n),t=e,e=e.return;e!==null;)e.childLanes|=n,t=e.alternate,t!==null&&(t.childLanes|=n),t=e,e=e.return;return t.tag===3?t.stateNode:null}var Fn=!1;function Gs(e){e.updateQueue={baseState:e.memoizedState,firstBaseUpdate:null,lastBaseUpdate:null,shared:{pending:null,interleaved:null,lanes:0},effects:null}}function zd(e,n){e=e.updateQueue,n.updateQueue===e&&(n.updateQueue={baseState:e.baseState,firstBaseUpdate:e.firstBaseUpdate,lastBaseUpdate:e.lastBaseUpdate,shared:e.shared,effects:e.effects})}function $n(e,n){return{eventTime:e,lane:n,tag:0,payload:null,callback:null,next:null}}function Jn(e,n,t){var r=e.updateQueue;if(r===null)return null;if(r=r.shared,ne&2){var o=r.pending;return o===null?n.next=n:(n.next=o.next,o.next=n),r.pending=n,Nn(e,t)}return o=r.interleaved,o===null?(n.next=n,Us(r)):(n.next=o.next,o.next=n),r.interleaved=n,Nn(e,t)}function Wo(e,n,t){if(n=n.updateQueue,n!==null&&(n=n.shared,(t&4194240)!==0)){var r=n.lanes;r&=e.pendingLanes,t|=r,n.lanes=t,Ms(e,t)}}function bu(e,n){var t=e.updateQueue,r=e.alternate;if(r!==null&&(r=r.updateQueue,t===r)){var o=null,i=null;if(t=t.firstBaseUpdate,t!==null){do{var l={eventTime:t.eventTime,lane:t.lane,tag:t.tag,payload:t.payload,callback:t.callback,next:null};i===null?o=i=l:i=i.next=l,t=t.next}while(t!==null);i===null?o=i=n:i=i.next=n}else o=i=n;t={baseState:r.baseState,firstBaseUpdate:o,lastBaseUpdate:i,shared:r.shared,effects:r.effects},e.updateQueue=t;return}e=t.lastBaseUpdate,e===null?t.firstBaseUpdate=n:e.next=n,t.lastBaseUpdate=n}function ui(e,n,t,r){var o=e.updateQueue;Fn=!1;var i=o.firstBaseUpdate,l=o.lastBaseUpdate,s=o.shared.pending;if(s!==null){o.shared.pending=null;var a=s,u=a.next;a.next=null,l===null?i=u:l.next=u,l=a;var p=e.alternate;p!==null&&(p=p.updateQueue,s=p.lastBaseUpdate,s!==l&&(s===null?p.firstBaseUpdate=u:s.next=u,p.lastBaseUpdate=a))}if(i!==null){var c=o.baseState;l=0,p=u=a=null,s=i;do{var m=s.lane,g=s.eventTime;if((r&m)===m){p!==null&&(p=p.next={eventTime:g,lane:0,tag:s.tag,payload:s.payload,callback:s.callback,next:null});e:{var x=e,w=s;switch(m=n,g=t,w.tag){case 1:if(x=w.payload,typeof x=="function"){c=x.call(g,c,m);break e}c=x;break e;case 3:x.flags=x.flags&-65537|128;case 0:if(x=w.payload,m=typeof x=="function"?x.call(g,c,m):x,m==null)break e;c=ve({},c,m);break e;case 2:Fn=!0}}s.callback!==null&&s.lane!==0&&(e.flags|=64,m=o.effects,m===null?o.effects=[s]:m.push(s))}else g={eventTime:g,lane:m,tag:s.tag,payload:s.payload,callback:s.callback,next:null},p===null?(u=p=g,a=c):p=p.next=g,l|=m;if(s=s.next,s===null){if(s=o.shared.pending,s===null)break;m=s,s=m.next,m.next=null,o.lastBaseUpdate=m,o.shared.pending=null}}while(!0);if(p===null&&(a=c),o.baseState=a,o.firstBaseUpdate=u,o.lastBaseUpdate=p,n=o.shared.interleaved,n!==null){o=n;do l|=o.lane,o=o.next;while(o!==n)}else i===null&&(o.shared.lanes=0);Ct|=l,e.lanes=l,e.memoizedState=c}}function ku(e,n,t){if(e=n.effects,n.effects=null,e!==null)for(n=0;n<e.length;n++){var r=e[n],o=r.callback;if(o!==null){if(r.callback=null,r=t,typeof o!="function")throw Error(_(191,o));o.call(r)}}}var so={},Sn=lt(so),Yr=lt(so),qr=lt(so);function xt(e){if(e===so)throw Error(_(174));return e}function Vs(e,n){switch(ce(qr,n),ce(Yr,e),ce(Sn,so),e=n.nodeType,e){case 9:case 11:n=(n=n.documentElement)?n.namespaceURI:Tl(null,"");break;default:e=e===8?n.parentNode:n,n=e.namespaceURI||null,e=e.tagName,n=Tl(n,e)}me(Sn),ce(Sn,n)}function or(){me(Sn),me(Yr),me(qr)}function Ad(e){xt(qr.current);var n=xt(Sn.current),t=Tl(n,e.type);n!==t&&(ce(Yr,e),ce(Sn,t))}function Ks(e){Yr.current===e&&(me(Sn),me(Yr))}var he=lt(0);function ci(e){for(var n=e;n!==null;){if(n.tag===13){var t=n.memoizedState;if(t!==null&&(t=t.dehydrated,t===null||t.data==="$?"||t.data==="$!"))return n}else if(n.tag===19&&n.memoizedProps.revealOrder!==void 0){if(n.flags&128)return n}else if(n.child!==null){n.child.return=n,n=n.child;continue}if(n===e)break;for(;n.sibling===null;){if(n.return===null||n.return===e)return null;n=n.return}n.sibling.return=n.return,n=n.sibling}return null}var ll=[];function Qs(){for(var e=0;e<ll.length;e++)ll[e]._workInProgressVersionPrimary=null;ll.length=0}var Ho=En.ReactCurrentDispatcher,sl=En.ReactCurrentBatchConfig,Pt=0,ye=null,Ce=null,Re=null,di=!1,Er=!1,Xr=0,nh=0;function Ee(){throw Error(_(321))}function Ys(e,n){if(n===null)return!1;for(var t=0;t<n.length&&t<e.length;t++)if(!hn(e[t],n[t]))return!1;return!0}function qs(e,n,t,r,o,i){if(Pt=i,ye=n,n.memoizedState=null,n.updateQueue=null,n.lanes=0,Ho.current=e===null||e.memoizedState===null?ih:lh,e=t(r,o),Er){i=0;do{if(Er=!1,Xr=0,25<=i)throw Error(_(301));i+=1,Re=Ce=null,n.updateQueue=null,Ho.current=sh,e=t(r,o)}while(Er)}if(Ho.current=pi,n=Ce!==null&&Ce.next!==null,Pt=0,Re=Ce=ye=null,di=!1,n)throw Error(_(300));return e}function Xs(){var e=Xr!==0;return Xr=0,e}function vn(){var e={memoizedState:null,baseState:null,baseQueue:null,queue:null,next:null};return Re===null?ye.memoizedState=Re=e:Re=Re.next=e,Re}function an(){if(Ce===null){var e=ye.alternate;e=e!==null?e.memoizedState:null}else e=Ce.next;var n=Re===null?ye.memoizedState:Re.next;if(n!==null)Re=n,Ce=e;else{if(e===null)throw Error(_(310));Ce=e,e={memoizedState:Ce.memoizedState,baseState:Ce.baseState,baseQueue:Ce.baseQueue,queue:Ce.queue,next:null},Re===null?ye.memoizedState=Re=e:Re=Re.next=e}return Re}function Jr(e,n){return typeof n=="function"?n(e):n}function al(e){var n=an(),t=n.queue;if(t===null)throw Error(_(311));t.lastRenderedReducer=e;var r=Ce,o=r.baseQueue,i=t.pending;if(i!==null){if(o!==null){var l=o.next;o.next=i.next,i.next=l}r.baseQueue=o=i,t.pending=null}if(o!==null){i=o.next,r=r.baseState;var s=l=null,a=null,u=i;do{var p=u.lane;if((Pt&p)===p)a!==null&&(a=a.next={lane:0,action:u.action,hasEagerState:u.hasEagerState,eagerState:u.eagerState,next:null}),r=u.hasEagerState?u.eagerState:e(r,u.action);else{var c={lane:p,action:u.action,hasEagerState:u.hasEagerState,eagerState:u.eagerState,next:null};a===null?(s=a=c,l=r):a=a.next=c,ye.lanes|=p,Ct|=p}u=u.next}while(u!==null&&u!==i);a===null?l=r:a.next=s,hn(r,n.memoizedState)||(Ue=!0),n.memoizedState=r,n.baseState=l,n.baseQueue=a,t.lastRenderedState=r}if(e=t.interleaved,e!==null){o=e;do i=o.lane,ye.lanes|=i,Ct|=i,o=o.next;while(o!==e)}else o===null&&(t.lanes=0);return[n.memoizedState,t.dispatch]}function ul(e){var n=an(),t=n.queue;if(t===null)throw Error(_(311));t.lastRenderedReducer=e;var r=t.dispatch,o=t.pending,i=n.memoizedState;if(o!==null){t.pending=null;var l=o=o.next;do i=e(i,l.action),l=l.next;while(l!==o);hn(i,n.memoizedState)||(Ue=!0),n.memoizedState=i,n.baseQueue===null&&(n.baseState=i),t.lastRenderedState=i}return[i,r]}function Wd(){}function Hd(e,n){var t=ye,r=an(),o=n(),i=!hn(r.memoizedState,o);if(i&&(r.memoizedState=o,Ue=!0),r=r.queue,Js(Ud.bind(null,t,r,e),[e]),r.getSnapshot!==n||i||Re!==null&&Re.memoizedState.tag&1){if(t.flags|=2048,Zr(9,Bd.bind(null,t,r,o,n),void 0,null),$e===null)throw Error(_(349));Pt&30||Fd(t,n,o)}return o}function Fd(e,n,t){e.flags|=16384,e={getSnapshot:n,value:t},n=ye.updateQueue,n===null?(n={lastEffect:null,stores:null},ye.updateQueue=n,n.stores=[e]):(t=n.stores,t===null?n.stores=[e]:t.push(e))}function Bd(e,n,t,r){n.value=t,n.getSnapshot=r,Gd(n)&&Vd(e)}function Ud(e,n,t){return t(function(){Gd(n)&&Vd(e)})}function Gd(e){var n=e.getSnapshot;e=e.value;try{var t=n();return!hn(e,t)}catch{return!0}}function Vd(e){var n=Nn(e,1);n!==null&&gn(n,e,1,-1)}function Pu(e){var n=vn();return typeof e=="function"&&(e=e()),n.memoizedState=n.baseState=e,e={pending:null,interleaved:null,lanes:0,dispatch:null,lastRenderedReducer:Jr,lastRenderedState:e},n.queue=e,e=e.dispatch=oh.bind(null,ye,e),[n.memoizedState,e]}function Zr(e,n,t,r){return e={tag:e,create:n,destroy:t,deps:r,next:null},n=ye.updateQueue,n===null?(n={lastEffect:null,stores:null},ye.updateQueue=n,n.lastEffect=e.next=e):(t=n.lastEffect,t===null?n.lastEffect=e.next=e:(r=t.next,t.next=e,e.next=r,n.lastEffect=e)),e}function Kd(){return an().memoizedState}function Fo(e,n,t,r){var o=vn();ye.flags|=e,o.memoizedState=Zr(1|n,t,void 0,r===void 0?null:r)}function _i(e,n,t,r){var o=an();r=r===void 0?null:r;var i=void 0;if(Ce!==null){var l=Ce.memoizedState;if(i=l.destroy,r!==null&&Ys(r,l.deps)){o.memoizedState=Zr(n,t,i,r);return}}ye.flags|=e,o.memoizedState=Zr(1|n,t,i,r)}function Cu(e,n){return Fo(8390656,8,e,n)}function Js(e,n){return _i(2048,8,e,n)}function Qd(e,n){return _i(4,2,e,n)}function Yd(e,n){return _i(4,4,e,n)}function qd(e,n){if(typeof n=="function")return e=e(),n(e),function(){n(null)};if(n!=null)return e=e(),n.current=e,function(){n.current=null}}function Xd(e,n,t){return t=t!=null?t.concat([e]):null,_i(4,4,qd.bind(null,n,e),t)}function Zs(){}function Jd(e,n){var t=an();n=n===void 0?null:n;var r=t.memoizedState;return r!==null&&n!==null&&Ys(n,r[1])?r[0]:(t.memoizedState=[e,n],e)}function Zd(e,n){var t=an();n=n===void 0?null:n;var r=t.memoizedState;return r!==null&&n!==null&&Ys(n,r[1])?r[0]:(e=e(),t.memoizedState=[e,n],e)}function ep(e,n,t){return Pt&21?(hn(t,n)||(t=id(),ye.lanes|=t,Ct|=t,e.baseState=!0),n):(e.baseState&&(e.baseState=!1,Ue=!0),e.memoizedState=t)}function th(e,n){var t=le;le=t!==0&&4>t?t:4,e(!0);var r=sl.transition;sl.transition={};try{e(!1),n()}finally{le=t,sl.transition=r}}function np(){return an().memoizedState}function rh(e,n,t){var r=et(e);if(t={lane:r,action:t,hasEagerState:!1,eagerState:null,next:null},tp(e))rp(n,t);else if(t=Dd(e,n,t,r),t!==null){var o=We();gn(t,e,r,o),op(t,n,r)}}function oh(e,n,t){var r=et(e),o={lane:r,action:t,hasEagerState:!1,eagerState:null,next:null};if(tp(e))rp(n,o);else{var i=e.alternate;if(e.lanes===0&&(i===null||i.lanes===0)&&(i=n.lastRenderedReducer,i!==null))try{var l=n.lastRenderedState,s=i(l,t);if(o.hasEagerState=!0,o.eagerState=s,hn(s,l)){var a=n.interleaved;a===null?(o.next=o,Us(n)):(o.next=a.next,a.next=o),n.interleaved=o;return}}catch{}finally{}t=Dd(e,n,o,r),t!==null&&(o=We(),gn(t,e,r,o),op(t,n,r))}}function tp(e){var n=e.alternate;return e===ye||n!==null&&n===ye}function rp(e,n){Er=di=!0;var t=e.pending;t===null?n.next=n:(n.next=t.next,t.next=n),e.pending=n}function op(e,n,t){if(t&4194240){var r=n.lanes;r&=e.pendingLanes,t|=r,n.lanes=t,Ms(e,t)}}var pi={readContext:sn,useCallback:Ee,useContext:Ee,useEffect:Ee,useImperativeHandle:Ee,useInsertionEffect:Ee,useLayoutEffect:Ee,useMemo:Ee,useReducer:Ee,useRef:Ee,useState:Ee,useDebugValue:Ee,useDeferredValue:Ee,useTransition:Ee,useMutableSource:Ee,useSyncExternalStore:Ee,useId:Ee,unstable_isNewReconciler:!1},ih={readContext:sn,useCallback:function(e,n){return vn().memoizedState=[e,n===void 0?null:n],e},useContext:sn,useEffect:Cu,useImperativeHandle:function(e,n,t){return t=t!=null?t.concat([e]):null,Fo(4194308,4,qd.bind(null,n,e),t)},useLayoutEffect:function(e,n){return Fo(4194308,4,e,n)},useInsertionEffect:function(e,n){return Fo(4,2,e,n)},useMemo:function(e,n){var t=vn();return n=n===void 0?null:n,e=e(),t.memoizedState=[e,n],e},useReducer:function(e,n,t){var r=vn();return n=t!==void 0?t(n):n,r.memoizedState=r.baseState=n,e={pending:null,interleaved:null,lanes:0,dispatch:null,lastRenderedReducer:e,lastRenderedState:n},r.queue=e,e=e.dispatch=rh.bind(null,ye,e),[r.memoizedState,e]},useRef:function(e){var n=vn();return e={current:e},n.memoizedState=e},useState:Pu,useDebugValue:Zs,useDeferredValue:function(e){return vn().memoizedState=e},useTransition:function(){var e=Pu(!1),n=e[0];return e=th.bind(null,e[1]),vn().memoizedState=e,[n,e]},useMutableSource:function(){},useSyncExternalStore:function(e,n,t){var r=ye,o=vn();if(ge){if(t===void 0)throw Error(_(407));t=t()}else{if(t=n(),$e===null)throw Error(_(349));Pt&30||Fd(r,n,t)}o.memoizedState=t;var i={value:t,getSnapshot:n};return o.queue=i,Cu(Ud.bind(null,r,i,e),[e]),r.flags|=2048,Zr(9,Bd.bind(null,r,i,t,n),void 0,null),t},useId:function(){var e=vn(),n=$e.identifierPrefix;if(ge){var t=Rn,r=Tn;t=(r&~(1<<32-fn(r)-1)).toString(32)+t,n=":"+n+"R"+t,t=Xr++,0<t&&(n+="H"+t.toString(32)),n+=":"}else t=nh++,n=":"+n+"r"+t.toString(32)+":";return e.memoizedState=n},unstable_isNewReconciler:!1},lh={readContext:sn,useCallback:Jd,useContext:sn,useEffect:Js,useImperativeHandle:Xd,useInsertionEffect:Qd,useLayoutEffect:Yd,useMemo:Zd,useReducer:al,useRef:Kd,useState:function(){return al(Jr)},useDebugValue:Zs,useDeferredValue:function(e){var n=an();return ep(n,Ce.memoizedState,e)},useTransition:function(){var e=al(Jr)[0],n=an().memoizedState;return[e,n]},useMutableSource:Wd,useSyncExternalStore:Hd,useId:np,unstable_isNewReconciler:!1},sh={readContext:sn,useCallback:Jd,useContext:sn,useEffect:Js,useImperativeHandle:Xd,useInsertionEffect:Qd,useLayoutEffect:Yd,useMemo:Zd,useReducer:ul,useRef:Kd,useState:function(){return ul(Jr)},useDebugValue:Zs,useDeferredValue:function(e){var n=an();return Ce===null?n.memoizedState=e:ep(n,Ce.memoizedState,e)},useTransition:function(){var e=ul(Jr)[0],n=an().memoizedState;return[e,n]},useMutableSource:Wd,useSyncExternalStore:Hd,useId:np,unstable_isNewReconciler:!1};function dn(e,n){if(e&&e.defaultProps){n=ve({},n),e=e.defaultProps;for(var t in e)n[t]===void 0&&(n[t]=e[t]);return n}return n}function Ql(e,n,t,r){n=e.memoizedState,t=t(r,n),t=t==null?n:ve({},n,t),e.memoizedState=t,e.lanes===0&&(e.updateQueue.baseState=t)}var Ti={isMounted:function(e){return(e=e._reactInternals)?$t(e)===e:!1},enqueueSetState:function(e,n,t){e=e._reactInternals;var r=We(),o=et(e),i=$n(r,o);i.payload=n,t!=null&&(i.callback=t),n=Jn(e,i,o),n!==null&&(gn(n,e,o,r),Wo(n,e,o))},enqueueReplaceState:function(e,n,t){e=e._reactInternals;var r=We(),o=et(e),i=$n(r,o);i.tag=1,i.payload=n,t!=null&&(i.callback=t),n=Jn(e,i,o),n!==null&&(gn(n,e,o,r),Wo(n,e,o))},enqueueForceUpdate:function(e,n){e=e._reactInternals;var t=We(),r=et(e),o=$n(t,r);o.tag=2,n!=null&&(o.callback=n),n=Jn(e,o,r),n!==null&&(gn(n,e,r,t),Wo(n,e,r))}};function _u(e,n,t,r,o,i,l){return e=e.stateNode,typeof e.shouldComponentUpdate=="function"?e.shouldComponentUpdate(r,i,l):n.prototype&&n.prototype.isPureReactComponent?!Gr(t,r)||!Gr(o,i):!0}function ip(e,n,t){var r=!1,o=ot,i=n.contextType;return typeof i=="object"&&i!==null?i=sn(i):(o=Ve(n)?bt:De.current,r=n.contextTypes,i=(r=r!=null)?nr(e,o):ot),n=new n(t,i),e.memoizedState=n.state!==null&&n.state!==void 0?n.state:null,n.updater=Ti,e.stateNode=n,n._reactInternals=e,r&&(e=e.stateNode,e.__reactInternalMemoizedUnmaskedChildContext=o,e.__reactInternalMemoizedMaskedChildContext=i),n}function Tu(e,n,t,r){e=n.state,typeof n.componentWillReceiveProps=="function"&&n.componentWillReceiveProps(t,r),typeof n.UNSAFE_componentWillReceiveProps=="function"&&n.UNSAFE_componentWillReceiveProps(t,r),n.state!==e&&Ti.enqueueReplaceState(n,n.state,null)}function Yl(e,n,t,r){var o=e.stateNode;o.props=t,o.state=e.memoizedState,o.refs={},Gs(e);var i=n.contextType;typeof i=="object"&&i!==null?o.context=sn(i):(i=Ve(n)?bt:De.current,o.context=nr(e,i)),o.state=e.memoizedState,i=n.getDerivedStateFromProps,typeof i=="function"&&(Ql(e,n,i,t),o.state=e.memoizedState),typeof n.getDerivedStateFromProps=="function"||typeof o.getSnapshotBeforeUpdate=="function"||typeof o.UNSAFE_componentWillMount!="function"&&typeof o.componentWillMount!="function"||(n=o.state,typeof o.componentWillMount=="function"&&o.componentWillMount(),typeof o.UNSAFE_componentWillMount=="function"&&o.UNSAFE_componentWillMount(),n!==o.state&&Ti.enqueueReplaceState(o,o.state,null),ui(e,t,o,r),o.state=e.memoizedState),typeof o.componentDidMount=="function"&&(e.flags|=4194308)}function ir(e,n){try{var t="",r=n;do t+=Lf(r),r=r.return;while(r);var o=t}catch(i){o=`
Error generating stack: `+i.message+`
`+i.stack}return{value:e,source:n,stack:o,digest:null}}function cl(e,n,t){return{value:e,source:null,stack:t??null,digest:n??null}}function ql(e,n){try{console.error(n.value)}catch(t){setTimeout(function(){throw t})}}var ah=typeof WeakMap=="function"?WeakMap:Map;function lp(e,n,t){t=$n(-1,t),t.tag=3,t.payload={element:null};var r=n.value;return t.callback=function(){fi||(fi=!0,ls=r),ql(e,n)},t}function sp(e,n,t){t=$n(-1,t),t.tag=3;var r=e.type.getDerivedStateFromError;if(typeof r=="function"){var o=n.value;t.payload=function(){return r(o)},t.callback=function(){ql(e,n)}}var i=e.stateNode;return i!==null&&typeof i.componentDidCatch=="function"&&(t.callback=function(){ql(e,n),typeof r!="function"&&(Zn===null?Zn=new Set([this]):Zn.add(this));var l=n.stack;this.componentDidCatch(n.value,{componentStack:l!==null?l:""})}),t}function Ru(e,n,t){var r=e.pingCache;if(r===null){r=e.pingCache=new ah;var o=new Set;r.set(n,o)}else o=r.get(n),o===void 0&&(o=new Set,r.set(n,o));o.has(t)||(o.add(t),e=bh.bind(null,e,n,t),n.then(e,e))}function $u(e){do{var n;if((n=e.tag===13)&&(n=e.memoizedState,n=n!==null?n.dehydrated!==null:!0),n)return e;e=e.return}while(e!==null);return null}function Mu(e,n,t,r,o){return e.mode&1?(e.flags|=65536,e.lanes=o,e):(e===n?e.flags|=65536:(e.flags|=128,t.flags|=131072,t.flags&=-52805,t.tag===1&&(t.alternate===null?t.tag=17:(n=$n(-1,1),n.tag=2,Jn(t,n,1))),t.lanes|=1),e)}var uh=En.ReactCurrentOwner,Ue=!1;function Ae(e,n,t,r){n.child=e===null?Od(n,null,t,r):rr(n,e.child,t,r)}function Iu(e,n,t,r,o){t=t.render;var i=n.ref;return Jt(n,o),r=qs(e,n,t,r,i,o),t=Xs(),e!==null&&!Ue?(n.updateQueue=e.updateQueue,n.flags&=-2053,e.lanes&=~o,jn(e,n,o)):(ge&&t&&zs(n),n.flags|=1,Ae(e,n,r,o),n.child)}function Nu(e,n,t,r,o){if(e===null){var i=t.type;return typeof i=="function"&&!sa(i)&&i.defaultProps===void 0&&t.compare===null&&t.defaultProps===void 0?(n.tag=15,n.type=i,ap(e,n,i,r,o)):(e=Vo(t.type,null,r,n,n.mode,o),e.ref=n.ref,e.return=n,n.child=e)}if(i=e.child,!(e.lanes&o)){var l=i.memoizedProps;if(t=t.compare,t=t!==null?t:Gr,t(l,r)&&e.ref===n.ref)return jn(e,n,o)}return n.flags|=1,e=nt(i,r),e.ref=n.ref,e.return=n,n.child=e}function ap(e,n,t,r,o){if(e!==null){var i=e.memoizedProps;if(Gr(i,r)&&e.ref===n.ref)if(Ue=!1,n.pendingProps=r=i,(e.lanes&o)!==0)e.flags&131072&&(Ue=!0);else return n.lanes=e.lanes,jn(e,n,o)}return Xl(e,n,t,r,o)}function up(e,n,t){var r=n.pendingProps,o=r.children,i=e!==null?e.memoizedState:null;if(r.mode==="hidden")if(!(n.mode&1))n.memoizedState={baseLanes:0,cachePool:null,transitions:null},ce(Kt,Qe),Qe|=t;else{if(!(t&1073741824))return e=i!==null?i.baseLanes|t:t,n.lanes=n.childLanes=1073741824,n.memoizedState={baseLanes:e,cachePool:null,transitions:null},n.updateQueue=null,ce(Kt,Qe),Qe|=e,null;n.memoizedState={baseLanes:0,cachePool:null,transitions:null},r=i!==null?i.baseLanes:t,ce(Kt,Qe),Qe|=r}else i!==null?(r=i.baseLanes|t,n.memoizedState=null):r=t,ce(Kt,Qe),Qe|=r;return Ae(e,n,o,t),n.child}function cp(e,n){var t=n.ref;(e===null&&t!==null||e!==null&&e.ref!==t)&&(n.flags|=512,n.flags|=2097152)}function Xl(e,n,t,r,o){var i=Ve(t)?bt:De.current;return i=nr(n,i),Jt(n,o),t=qs(e,n,t,r,i,o),r=Xs(),e!==null&&!Ue?(n.updateQueue=e.updateQueue,n.flags&=-2053,e.lanes&=~o,jn(e,n,o)):(ge&&r&&zs(n),n.flags|=1,Ae(e,n,t,o),n.child)}function ju(e,n,t,r,o){if(Ve(t)){var i=!0;oi(n)}else i=!1;if(Jt(n,o),n.stateNode===null)Bo(e,n),ip(n,t,r),Yl(n,t,r,o),r=!0;else if(e===null){var l=n.stateNode,s=n.memoizedProps;l.props=s;var a=l.context,u=t.contextType;typeof u=="object"&&u!==null?u=sn(u):(u=Ve(t)?bt:De.current,u=nr(n,u));var p=t.getDerivedStateFromProps,c=typeof p=="function"||typeof l.getSnapshotBeforeUpdate=="function";c||typeof l.UNSAFE_componentWillReceiveProps!="function"&&typeof l.componentWillReceiveProps!="function"||(s!==r||a!==u)&&Tu(n,l,r,u),Fn=!1;var m=n.memoizedState;l.state=m,ui(n,r,l,o),a=n.memoizedState,s!==r||m!==a||Ge.current||Fn?(typeof p=="function"&&(Ql(n,t,p,r),a=n.memoizedState),(s=Fn||_u(n,t,s,r,m,a,u))?(c||typeof l.UNSAFE_componentWillMount!="function"&&typeof l.componentWillMount!="function"||(typeof l.componentWillMount=="function"&&l.componentWillMount(),typeof l.UNSAFE_componentWillMount=="function"&&l.UNSAFE_componentWillMount()),typeof l.componentDidMount=="function"&&(n.flags|=4194308)):(typeof l.componentDidMount=="function"&&(n.flags|=4194308),n.memoizedProps=r,n.memoizedState=a),l.props=r,l.state=a,l.context=u,r=s):(typeof l.componentDidMount=="function"&&(n.flags|=4194308),r=!1)}else{l=n.stateNode,zd(e,n),s=n.memoizedProps,u=n.type===n.elementType?s:dn(n.type,s),l.props=u,c=n.pendingProps,m=l.context,a=t.contextType,typeof a=="object"&&a!==null?a=sn(a):(a=Ve(t)?bt:De.current,a=nr(n,a));var g=t.getDerivedStateFromProps;(p=typeof g=="function"||typeof l.getSnapshotBeforeUpdate=="function")||typeof l.UNSAFE_componentWillReceiveProps!="function"&&typeof l.componentWillReceiveProps!="function"||(s!==c||m!==a)&&Tu(n,l,r,a),Fn=!1,m=n.memoizedState,l.state=m,ui(n,r,l,o);var x=n.memoizedState;s!==c||m!==x||Ge.current||Fn?(typeof g=="function"&&(Ql(n,t,g,r),x=n.memoizedState),(u=Fn||_u(n,t,u,r,m,x,a)||!1)?(p||typeof l.UNSAFE_componentWillUpdate!="function"&&typeof l.componentWillUpdate!="function"||(typeof l.componentWillUpdate=="function"&&l.componentWillUpdate(r,x,a),typeof l.UNSAFE_componentWillUpdate=="function"&&l.UNSAFE_componentWillUpdate(r,x,a)),typeof l.componentDidUpdate=="function"&&(n.flags|=4),typeof l.getSnapshotBeforeUpdate=="function"&&(n.flags|=1024)):(typeof l.componentDidUpdate!="function"||s===e.memoizedProps&&m===e.memoizedState||(n.flags|=4),typeof l.getSnapshotBeforeUpdate!="function"||s===e.memoizedProps&&m===e.memoizedState||(n.flags|=1024),n.memoizedProps=r,n.memoizedState=x),l.props=r,l.state=x,l.context=a,r=u):(typeof l.componentDidUpdate!="function"||s===e.memoizedProps&&m===e.memoizedState||(n.flags|=4),typeof l.getSnapshotBeforeUpdate!="function"||s===e.memoizedProps&&m===e.memoizedState||(n.flags|=1024),r=!1)}return Jl(e,n,t,r,i,o)}function Jl(e,n,t,r,o,i){cp(e,n);var l=(n.flags&128)!==0;if(!r&&!l)return o&&vu(n,t,!1),jn(e,n,i);r=n.stateNode,uh.current=n;var s=l&&typeof t.getDerivedStateFromError!="function"?null:r.render();return n.flags|=1,e!==null&&l?(n.child=rr(n,e.child,null,i),n.child=rr(n,null,s,i)):Ae(e,n,s,i),n.memoizedState=r.state,o&&vu(n,t,!0),n.child}function dp(e){var n=e.stateNode;n.pendingContext?yu(e,n.pendingContext,n.pendingContext!==n.context):n.context&&yu(e,n.context,!1),Vs(e,n.containerInfo)}function Eu(e,n,t,r,o){return tr(),Ws(o),n.flags|=256,Ae(e,n,t,r),n.child}var Zl={dehydrated:null,treeContext:null,retryLane:0};function es(e){return{baseLanes:e,cachePool:null,transitions:null}}function pp(e,n,t){var r=n.pendingProps,o=he.current,i=!1,l=(n.flags&128)!==0,s;if((s=l)||(s=e!==null&&e.memoizedState===null?!1:(o&2)!==0),s?(i=!0,n.flags&=-129):(e===null||e.memoizedState!==null)&&(o|=1),ce(he,o&1),e===null)return Vl(n),e=n.memoizedState,e!==null&&(e=e.dehydrated,e!==null)?(n.mode&1?e.data==="$!"?n.lanes=8:n.lanes=1073741824:n.lanes=1,null):(l=r.children,e=r.fallback,i?(r=n.mode,i=n.child,l={mode:"hidden",children:l},!(r&1)&&i!==null?(i.childLanes=0,i.pendingProps=l):i=Mi(l,r,0,null),e=St(e,r,t,null),i.return=n,e.return=n,i.sibling=e,n.child=i,n.child.memoizedState=es(t),n.memoizedState=Zl,e):ea(n,l));if(o=e.memoizedState,o!==null&&(s=o.dehydrated,s!==null))return ch(e,n,l,r,s,o,t);if(i){i=r.fallback,l=n.mode,o=e.child,s=o.sibling;var a={mode:"hidden",children:r.children};return!(l&1)&&n.child!==o?(r=n.child,r.childLanes=0,r.pendingProps=a,n.deletions=null):(r=nt(o,a),r.subtreeFlags=o.subtreeFlags&14680064),s!==null?i=nt(s,i):(i=St(i,l,t,null),i.flags|=2),i.return=n,r.return=n,r.sibling=i,n.child=r,r=i,i=n.child,l=e.child.memoizedState,l=l===null?es(t):{baseLanes:l.baseLanes|t,cachePool:null,transitions:l.transitions},i.memoizedState=l,i.childLanes=e.childLanes&~t,n.memoizedState=Zl,r}return i=e.child,e=i.sibling,r=nt(i,{mode:"visible",children:r.children}),!(n.mode&1)&&(r.lanes=t),r.return=n,r.sibling=null,e!==null&&(t=n.deletions,t===null?(n.deletions=[e],n.flags|=16):t.push(e)),n.child=r,n.memoizedState=null,r}function ea(e,n){return n=Mi({mode:"visible",children:n},e.mode,0,null),n.return=e,e.child=n}function _o(e,n,t,r){return r!==null&&Ws(r),rr(n,e.child,null,t),e=ea(n,n.pendingProps.children),e.flags|=2,n.memoizedState=null,e}function ch(e,n,t,r,o,i,l){if(t)return n.flags&256?(n.flags&=-257,r=cl(Error(_(422))),_o(e,n,l,r)):n.memoizedState!==null?(n.child=e.child,n.flags|=128,null):(i=r.fallback,o=n.mode,r=Mi({mode:"visible",children:r.children},o,0,null),i=St(i,o,l,null),i.flags|=2,r.return=n,i.return=n,r.sibling=i,n.child=r,n.mode&1&&rr(n,e.child,null,l),n.child.memoizedState=es(l),n.memoizedState=Zl,i);if(!(n.mode&1))return _o(e,n,l,null);if(o.data==="$!"){if(r=o.nextSibling&&o.nextSibling.dataset,r)var s=r.dgst;return r=s,i=Error(_(419)),r=cl(i,r,void 0),_o(e,n,l,r)}if(s=(l&e.childLanes)!==0,Ue||s){if(r=$e,r!==null){switch(l&-l){case 4:o=2;break;case 16:o=8;break;case 64:case 128:case 256:case 512:case 1024:case 2048:case 4096:case 8192:case 16384:case 32768:case 65536:case 131072:case 262144:case 524288:case 1048576:case 2097152:case 4194304:case 8388608:case 16777216:case 33554432:case 67108864:o=32;break;case 536870912:o=268435456;break;default:o=0}o=o&(r.suspendedLanes|l)?0:o,o!==0&&o!==i.retryLane&&(i.retryLane=o,Nn(e,o),gn(r,e,o,-1))}return la(),r=cl(Error(_(421))),_o(e,n,l,r)}return o.data==="$?"?(n.flags|=128,n.child=e.child,n=kh.bind(null,e),o._reactRetry=n,null):(e=i.treeContext,Ye=Xn(o.nextSibling),qe=n,ge=!0,mn=null,e!==null&&(tn[rn++]=Tn,tn[rn++]=Rn,tn[rn++]=kt,Tn=e.id,Rn=e.overflow,kt=n),n=ea(n,r.children),n.flags|=4096,n)}function Lu(e,n,t){e.lanes|=n;var r=e.alternate;r!==null&&(r.lanes|=n),Kl(e.return,n,t)}function dl(e,n,t,r,o){var i=e.memoizedState;i===null?e.memoizedState={isBackwards:n,rendering:null,renderingStartTime:0,last:r,tail:t,tailMode:o}:(i.isBackwards=n,i.rendering=null,i.renderingStartTime=0,i.last=r,i.tail=t,i.tailMode=o)}function mp(e,n,t){var r=n.pendingProps,o=r.revealOrder,i=r.tail;if(Ae(e,n,r.children,t),r=he.current,r&2)r=r&1|2,n.flags|=128;else{if(e!==null&&e.flags&128)e:for(e=n.child;e!==null;){if(e.tag===13)e.memoizedState!==null&&Lu(e,t,n);else if(e.tag===19)Lu(e,t,n);else if(e.child!==null){e.child.return=e,e=e.child;continue}if(e===n)break e;for(;e.sibling===null;){if(e.return===null||e.return===n)break e;e=e.return}e.sibling.return=e.return,e=e.sibling}r&=1}if(ce(he,r),!(n.mode&1))n.memoizedState=null;else switch(o){case"forwards":for(t=n.child,o=null;t!==null;)e=t.alternate,e!==null&&ci(e)===null&&(o=t),t=t.sibling;t=o,t===null?(o=n.child,n.child=null):(o=t.sibling,t.sibling=null),dl(n,!1,o,t,i);break;case"backwards":for(t=null,o=n.child,n.child=null;o!==null;){if(e=o.alternate,e!==null&&ci(e)===null){n.child=o;break}e=o.sibling,o.sibling=t,t=o,o=e}dl(n,!0,t,null,i);break;case"together":dl(n,!1,null,null,void 0);break;default:n.memoizedState=null}return n.child}function Bo(e,n){!(n.mode&1)&&e!==null&&(e.alternate=null,n.alternate=null,n.flags|=2)}function jn(e,n,t){if(e!==null&&(n.dependencies=e.dependencies),Ct|=n.lanes,!(t&n.childLanes))return null;if(e!==null&&n.child!==e.child)throw Error(_(153));if(n.child!==null){for(e=n.child,t=nt(e,e.pendingProps),n.child=t,t.return=n;e.sibling!==null;)e=e.sibling,t=t.sibling=nt(e,e.pendingProps),t.return=n;t.sibling=null}return n.child}function dh(e,n,t){switch(n.tag){case 3:dp(n),tr();break;case 5:Ad(n);break;case 1:Ve(n.type)&&oi(n);break;case 4:Vs(n,n.stateNode.containerInfo);break;case 10:var r=n.type._context,o=n.memoizedProps.value;ce(si,r._currentValue),r._currentValue=o;break;case 13:if(r=n.memoizedState,r!==null)return r.dehydrated!==null?(ce(he,he.current&1),n.flags|=128,null):t&n.child.childLanes?pp(e,n,t):(ce(he,he.current&1),e=jn(e,n,t),e!==null?e.sibling:null);ce(he,he.current&1);break;case 19:if(r=(t&n.childLanes)!==0,e.flags&128){if(r)return mp(e,n,t);n.flags|=128}if(o=n.memoizedState,o!==null&&(o.rendering=null,o.tail=null,o.lastEffect=null),ce(he,he.current),r)break;return null;case 22:case 23:return n.lanes=0,up(e,n,t)}return jn(e,n,t)}var fp,ns,gp,hp;fp=function(e,n){for(var t=n.child;t!==null;){if(t.tag===5||t.tag===6)e.appendChild(t.stateNode);else if(t.tag!==4&&t.child!==null){t.child.return=t,t=t.child;continue}if(t===n)break;for(;t.sibling===null;){if(t.return===null||t.return===n)return;t=t.return}t.sibling.return=t.return,t=t.sibling}};ns=function(){};gp=function(e,n,t,r){var o=e.memoizedProps;if(o!==r){e=n.stateNode,xt(Sn.current);var i=null;switch(t){case"input":o=kl(e,o),r=kl(e,r),i=[];break;case"select":o=ve({},o,{value:void 0}),r=ve({},r,{value:void 0}),i=[];break;case"textarea":o=_l(e,o),r=_l(e,r),i=[];break;default:typeof o.onClick!="function"&&typeof r.onClick=="function"&&(e.onclick=ti)}Rl(t,r);var l;t=null;for(u in o)if(!r.hasOwnProperty(u)&&o.hasOwnProperty(u)&&o[u]!=null)if(u==="style"){var s=o[u];for(l in s)s.hasOwnProperty(l)&&(t||(t={}),t[l]="")}else u!=="dangerouslySetInnerHTML"&&u!=="children"&&u!=="suppressContentEditableWarning"&&u!=="suppressHydrationWarning"&&u!=="autoFocus"&&(zr.hasOwnProperty(u)?i||(i=[]):(i=i||[]).push(u,null));for(u in r){var a=r[u];if(s=o!=null?o[u]:void 0,r.hasOwnProperty(u)&&a!==s&&(a!=null||s!=null))if(u==="style")if(s){for(l in s)!s.hasOwnProperty(l)||a&&a.hasOwnProperty(l)||(t||(t={}),t[l]="");for(l in a)a.hasOwnProperty(l)&&s[l]!==a[l]&&(t||(t={}),t[l]=a[l])}else t||(i||(i=[]),i.push(u,t)),t=a;else u==="dangerouslySetInnerHTML"?(a=a?a.__html:void 0,s=s?s.__html:void 0,a!=null&&s!==a&&(i=i||[]).push(u,a)):u==="children"?typeof a!="string"&&typeof a!="number"||(i=i||[]).push(u,""+a):u!=="suppressContentEditableWarning"&&u!=="suppressHydrationWarning"&&(zr.hasOwnProperty(u)?(a!=null&&u==="onScroll"&&pe("scroll",e),i||s===a||(i=[])):(i=i||[]).push(u,a))}t&&(i=i||[]).push("style",t);var u=i;(n.updateQueue=u)&&(n.flags|=4)}};hp=function(e,n,t,r){t!==r&&(n.flags|=4)};function wr(e,n){if(!ge)switch(e.tailMode){case"hidden":n=e.tail;for(var t=null;n!==null;)n.alternate!==null&&(t=n),n=n.sibling;t===null?e.tail=null:t.sibling=null;break;case"collapsed":t=e.tail;for(var r=null;t!==null;)t.alternate!==null&&(r=t),t=t.sibling;r===null?n||e.tail===null?e.tail=null:e.tail.sibling=null:r.sibling=null}}function Le(e){var n=e.alternate!==null&&e.alternate.child===e.child,t=0,r=0;if(n)for(var o=e.child;o!==null;)t|=o.lanes|o.childLanes,r|=o.subtreeFlags&14680064,r|=o.flags&14680064,o.return=e,o=o.sibling;else for(o=e.child;o!==null;)t|=o.lanes|o.childLanes,r|=o.subtreeFlags,r|=o.flags,o.return=e,o=o.sibling;return e.subtreeFlags|=r,e.childLanes=t,n}function ph(e,n,t){var r=n.pendingProps;switch(As(n),n.tag){case 2:case 16:case 15:case 0:case 11:case 7:case 8:case 12:case 9:case 14:return Le(n),null;case 1:return Ve(n.type)&&ri(),Le(n),null;case 3:return r=n.stateNode,or(),me(Ge),me(De),Qs(),r.pendingContext&&(r.context=r.pendingContext,r.pendingContext=null),(e===null||e.child===null)&&(Po(n)?n.flags|=4:e===null||e.memoizedState.isDehydrated&&!(n.flags&256)||(n.flags|=1024,mn!==null&&(us(mn),mn=null))),ns(e,n),Le(n),null;case 5:Ks(n);var o=xt(qr.current);if(t=n.type,e!==null&&n.stateNode!=null)gp(e,n,t,r,o),e.ref!==n.ref&&(n.flags|=512,n.flags|=2097152);else{if(!r){if(n.stateNode===null)throw Error(_(166));return Le(n),null}if(e=xt(Sn.current),Po(n)){r=n.stateNode,t=n.type;var i=n.memoizedProps;switch(r[xn]=n,r[Qr]=i,e=(n.mode&1)!==0,t){case"dialog":pe("cancel",r),pe("close",r);break;case"iframe":case"object":case"embed":pe("load",r);break;case"video":case"audio":for(o=0;o<_r.length;o++)pe(_r[o],r);break;case"source":pe("error",r);break;case"img":case"image":case"link":pe("error",r),pe("load",r);break;case"details":pe("toggle",r);break;case"input":Ua(r,i),pe("invalid",r);break;case"select":r._wrapperState={wasMultiple:!!i.multiple},pe("invalid",r);break;case"textarea":Va(r,i),pe("invalid",r)}Rl(t,i),o=null;for(var l in i)if(i.hasOwnProperty(l)){var s=i[l];l==="children"?typeof s=="string"?r.textContent!==s&&(i.suppressHydrationWarning!==!0&&ko(r.textContent,s,e),o=["children",s]):typeof s=="number"&&r.textContent!==""+s&&(i.suppressHydrationWarning!==!0&&ko(r.textContent,s,e),o=["children",""+s]):zr.hasOwnProperty(l)&&s!=null&&l==="onScroll"&&pe("scroll",r)}switch(t){case"input":go(r),Ga(r,i,!0);break;case"textarea":go(r),Ka(r);break;case"select":case"option":break;default:typeof i.onClick=="function"&&(r.onclick=ti)}r=o,n.updateQueue=r,r!==null&&(n.flags|=4)}else{l=o.nodeType===9?o:o.ownerDocument,e==="http://www.w3.org/1999/xhtml"&&(e=Uc(t)),e==="http://www.w3.org/1999/xhtml"?t==="script"?(e=l.createElement("div"),e.innerHTML="<script><\/script>",e=e.removeChild(e.firstChild)):typeof r.is=="string"?e=l.createElement(t,{is:r.is}):(e=l.createElement(t),t==="select"&&(l=e,r.multiple?l.multiple=!0:r.size&&(l.size=r.size))):e=l.createElementNS(e,t),e[xn]=n,e[Qr]=r,fp(e,n,!1,!1),n.stateNode=e;e:{switch(l=$l(t,r),t){case"dialog":pe("cancel",e),pe("close",e),o=r;break;case"iframe":case"object":case"embed":pe("load",e),o=r;break;case"video":case"audio":for(o=0;o<_r.length;o++)pe(_r[o],e);o=r;break;case"source":pe("error",e),o=r;break;case"img":case"image":case"link":pe("error",e),pe("load",e),o=r;break;case"details":pe("toggle",e),o=r;break;case"input":Ua(e,r),o=kl(e,r),pe("invalid",e);break;case"option":o=r;break;case"select":e._wrapperState={wasMultiple:!!r.multiple},o=ve({},r,{value:void 0}),pe("invalid",e);break;case"textarea":Va(e,r),o=_l(e,r),pe("invalid",e);break;default:o=r}Rl(t,o),s=o;for(i in s)if(s.hasOwnProperty(i)){var a=s[i];i==="style"?Kc(e,a):i==="dangerouslySetInnerHTML"?(a=a?a.__html:void 0,a!=null&&Gc(e,a)):i==="children"?typeof a=="string"?(t!=="textarea"||a!=="")&&Ar(e,a):typeof a=="number"&&Ar(e,""+a):i!=="suppressContentEditableWarning"&&i!=="suppressHydrationWarning"&&i!=="autoFocus"&&(zr.hasOwnProperty(i)?a!=null&&i==="onScroll"&&pe("scroll",e):a!=null&&Ps(e,i,a,l))}switch(t){case"input":go(e),Ga(e,r,!1);break;case"textarea":go(e),Ka(e);break;case"option":r.value!=null&&e.setAttribute("value",""+rt(r.value));break;case"select":e.multiple=!!r.multiple,i=r.value,i!=null?Qt(e,!!r.multiple,i,!1):r.defaultValue!=null&&Qt(e,!!r.multiple,r.defaultValue,!0);break;default:typeof o.onClick=="function"&&(e.onclick=ti)}switch(t){case"button":case"input":case"select":case"textarea":r=!!r.autoFocus;break e;case"img":r=!0;break e;default:r=!1}}r&&(n.flags|=4)}n.ref!==null&&(n.flags|=512,n.flags|=2097152)}return Le(n),null;case 6:if(e&&n.stateNode!=null)hp(e,n,e.memoizedProps,r);else{if(typeof r!="string"&&n.stateNode===null)throw Error(_(166));if(t=xt(qr.current),xt(Sn.current),Po(n)){if(r=n.stateNode,t=n.memoizedProps,r[xn]=n,(i=r.nodeValue!==t)&&(e=qe,e!==null))switch(e.tag){case 3:ko(r.nodeValue,t,(e.mode&1)!==0);break;case 5:e.memoizedProps.suppressHydrationWarning!==!0&&ko(r.nodeValue,t,(e.mode&1)!==0)}i&&(n.flags|=4)}else r=(t.nodeType===9?t:t.ownerDocument).createTextNode(r),r[xn]=n,n.stateNode=r}return Le(n),null;case 13:if(me(he),r=n.memoizedState,e===null||e.memoizedState!==null&&e.memoizedState.dehydrated!==null){if(ge&&Ye!==null&&n.mode&1&&!(n.flags&128))Ed(),tr(),n.flags|=98560,i=!1;else if(i=Po(n),r!==null&&r.dehydrated!==null){if(e===null){if(!i)throw Error(_(318));if(i=n.memoizedState,i=i!==null?i.dehydrated:null,!i)throw Error(_(317));i[xn]=n}else tr(),!(n.flags&128)&&(n.memoizedState=null),n.flags|=4;Le(n),i=!1}else mn!==null&&(us(mn),mn=null),i=!0;if(!i)return n.flags&65536?n:null}return n.flags&128?(n.lanes=t,n):(r=r!==null,r!==(e!==null&&e.memoizedState!==null)&&r&&(n.child.flags|=8192,n.mode&1&&(e===null||he.current&1?_e===0&&(_e=3):la())),n.updateQueue!==null&&(n.flags|=4),Le(n),null);case 4:return or(),ns(e,n),e===null&&Vr(n.stateNode.containerInfo),Le(n),null;case 10:return Bs(n.type._context),Le(n),null;case 17:return Ve(n.type)&&ri(),Le(n),null;case 19:if(me(he),i=n.memoizedState,i===null)return Le(n),null;if(r=(n.flags&128)!==0,l=i.rendering,l===null)if(r)wr(i,!1);else{if(_e!==0||e!==null&&e.flags&128)for(e=n.child;e!==null;){if(l=ci(e),l!==null){for(n.flags|=128,wr(i,!1),r=l.updateQueue,r!==null&&(n.updateQueue=r,n.flags|=4),n.subtreeFlags=0,r=t,t=n.child;t!==null;)i=t,e=r,i.flags&=14680066,l=i.alternate,l===null?(i.childLanes=0,i.lanes=e,i.child=null,i.subtreeFlags=0,i.memoizedProps=null,i.memoizedState=null,i.updateQueue=null,i.dependencies=null,i.stateNode=null):(i.childLanes=l.childLanes,i.lanes=l.lanes,i.child=l.child,i.subtreeFlags=0,i.deletions=null,i.memoizedProps=l.memoizedProps,i.memoizedState=l.memoizedState,i.updateQueue=l.updateQueue,i.type=l.type,e=l.dependencies,i.dependencies=e===null?null:{lanes:e.lanes,firstContext:e.firstContext}),t=t.sibling;return ce(he,he.current&1|2),n.child}e=e.sibling}i.tail!==null&&Se()>lr&&(n.flags|=128,r=!0,wr(i,!1),n.lanes=4194304)}else{if(!r)if(e=ci(l),e!==null){if(n.flags|=128,r=!0,t=e.updateQueue,t!==null&&(n.updateQueue=t,n.flags|=4),wr(i,!0),i.tail===null&&i.tailMode==="hidden"&&!l.alternate&&!ge)return Le(n),null}else 2*Se()-i.renderingStartTime>lr&&t!==1073741824&&(n.flags|=128,r=!0,wr(i,!1),n.lanes=4194304);i.isBackwards?(l.sibling=n.child,n.child=l):(t=i.last,t!==null?t.sibling=l:n.child=l,i.last=l)}return i.tail!==null?(n=i.tail,i.rendering=n,i.tail=n.sibling,i.renderingStartTime=Se(),n.sibling=null,t=he.current,ce(he,r?t&1|2:t&1),n):(Le(n),null);case 22:case 23:return ia(),r=n.memoizedState!==null,e!==null&&e.memoizedState!==null!==r&&(n.flags|=8192),r&&n.mode&1?Qe&1073741824&&(Le(n),n.subtreeFlags&6&&(n.flags|=8192)):Le(n),null;case 24:return null;case 25:return null}throw Error(_(156,n.tag))}function mh(e,n){switch(As(n),n.tag){case 1:return Ve(n.type)&&ri(),e=n.flags,e&65536?(n.flags=e&-65537|128,n):null;case 3:return or(),me(Ge),me(De),Qs(),e=n.flags,e&65536&&!(e&128)?(n.flags=e&-65537|128,n):null;case 5:return Ks(n),null;case 13:if(me(he),e=n.memoizedState,e!==null&&e.dehydrated!==null){if(n.alternate===null)throw Error(_(340));tr()}return e=n.flags,e&65536?(n.flags=e&-65537|128,n):null;case 19:return me(he),null;case 4:return or(),null;case 10:return Bs(n.type._context),null;case 22:case 23:return ia(),null;case 24:return null;default:return null}}var To=!1,Oe=!1,fh=typeof WeakSet=="function"?WeakSet:Set,O=null;function Vt(e,n){var t=e.ref;if(t!==null)if(typeof t=="function")try{t(null)}catch(r){we(e,n,r)}else t.current=null}function ts(e,n,t){try{t()}catch(r){we(e,n,r)}}var Ou=!1;function gh(e,n){if(Al=Zo,e=Sd(),Ds(e)){if("selectionStart"in e)var t={start:e.selectionStart,end:e.selectionEnd};else e:{t=(t=e.ownerDocument)&&t.defaultView||window;var r=t.getSelection&&t.getSelection();if(r&&r.rangeCount!==0){t=r.anchorNode;var o=r.anchorOffset,i=r.focusNode;r=r.focusOffset;try{t.nodeType,i.nodeType}catch{t=null;break e}var l=0,s=-1,a=-1,u=0,p=0,c=e,m=null;n:for(;;){for(var g;c!==t||o!==0&&c.nodeType!==3||(s=l+o),c!==i||r!==0&&c.nodeType!==3||(a=l+r),c.nodeType===3&&(l+=c.nodeValue.length),(g=c.firstChild)!==null;)m=c,c=g;for(;;){if(c===e)break n;if(m===t&&++u===o&&(s=l),m===i&&++p===r&&(a=l),(g=c.nextSibling)!==null)break;c=m,m=c.parentNode}c=g}t=s===-1||a===-1?null:{start:s,end:a}}else t=null}t=t||{start:0,end:0}}else t=null;for(Wl={focusedElem:e,selectionRange:t},Zo=!1,O=n;O!==null;)if(n=O,e=n.child,(n.subtreeFlags&1028)!==0&&e!==null)e.return=n,O=e;else for(;O!==null;){n=O;try{var x=n.alternate;if(n.flags&1024)switch(n.tag){case 0:case 11:case 15:break;case 1:if(x!==null){var w=x.memoizedProps,S=x.memoizedState,h=n.stateNode,f=h.getSnapshotBeforeUpdate(n.elementType===n.type?w:dn(n.type,w),S);h.__reactInternalSnapshotBeforeUpdate=f}break;case 3:var v=n.stateNode.containerInfo;v.nodeType===1?v.textContent="":v.nodeType===9&&v.documentElement&&v.removeChild(v.documentElement);break;case 5:case 6:case 4:case 17:break;default:throw Error(_(163))}}catch(b){we(n,n.return,b)}if(e=n.sibling,e!==null){e.return=n.return,O=e;break}O=n.return}return x=Ou,Ou=!1,x}function Lr(e,n,t){var r=n.updateQueue;if(r=r!==null?r.lastEffect:null,r!==null){var o=r=r.next;do{if((o.tag&e)===e){var i=o.destroy;o.destroy=void 0,i!==void 0&&ts(n,t,i)}o=o.next}while(o!==r)}}function Ri(e,n){if(n=n.updateQueue,n=n!==null?n.lastEffect:null,n!==null){var t=n=n.next;do{if((t.tag&e)===e){var r=t.create;t.destroy=r()}t=t.next}while(t!==n)}}function rs(e){var n=e.ref;if(n!==null){var t=e.stateNode;switch(e.tag){case 5:e=t;break;default:e=t}typeof n=="function"?n(e):n.current=e}}function yp(e){var n=e.alternate;n!==null&&(e.alternate=null,yp(n)),e.child=null,e.deletions=null,e.sibling=null,e.tag===5&&(n=e.stateNode,n!==null&&(delete n[xn],delete n[Qr],delete n[Bl],delete n[Xg],delete n[Jg])),e.stateNode=null,e.return=null,e.dependencies=null,e.memoizedProps=null,e.memoizedState=null,e.pendingProps=null,e.stateNode=null,e.updateQueue=null}function vp(e){return e.tag===5||e.tag===3||e.tag===4}function Du(e){e:for(;;){for(;e.sibling===null;){if(e.return===null||vp(e.return))return null;e=e.return}for(e.sibling.return=e.return,e=e.sibling;e.tag!==5&&e.tag!==6&&e.tag!==18;){if(e.flags&2||e.child===null||e.tag===4)continue e;e.child.return=e,e=e.child}if(!(e.flags&2))return e.stateNode}}function os(e,n,t){var r=e.tag;if(r===5||r===6)e=e.stateNode,n?t.nodeType===8?t.parentNode.insertBefore(e,n):t.insertBefore(e,n):(t.nodeType===8?(n=t.parentNode,n.insertBefore(e,t)):(n=t,n.appendChild(e)),t=t._reactRootContainer,t!=null||n.onclick!==null||(n.onclick=ti));else if(r!==4&&(e=e.child,e!==null))for(os(e,n,t),e=e.sibling;e!==null;)os(e,n,t),e=e.sibling}function is(e,n,t){var r=e.tag;if(r===5||r===6)e=e.stateNode,n?t.insertBefore(e,n):t.appendChild(e);else if(r!==4&&(e=e.child,e!==null))for(is(e,n,t),e=e.sibling;e!==null;)is(e,n,t),e=e.sibling}var Me=null,pn=!1;function Wn(e,n,t){for(t=t.child;t!==null;)xp(e,n,t),t=t.sibling}function xp(e,n,t){if(wn&&typeof wn.onCommitFiberUnmount=="function")try{wn.onCommitFiberUnmount(wi,t)}catch{}switch(t.tag){case 5:Oe||Vt(t,n);case 6:var r=Me,o=pn;Me=null,Wn(e,n,t),Me=r,pn=o,Me!==null&&(pn?(e=Me,t=t.stateNode,e.nodeType===8?e.parentNode.removeChild(t):e.removeChild(t)):Me.removeChild(t.stateNode));break;case 18:Me!==null&&(pn?(e=Me,t=t.stateNode,e.nodeType===8?ol(e.parentNode,t):e.nodeType===1&&ol(e,t),Br(e)):ol(Me,t.stateNode));break;case 4:r=Me,o=pn,Me=t.stateNode.containerInfo,pn=!0,Wn(e,n,t),Me=r,pn=o;break;case 0:case 11:case 14:case 15:if(!Oe&&(r=t.updateQueue,r!==null&&(r=r.lastEffect,r!==null))){o=r=r.next;do{var i=o,l=i.destroy;i=i.tag,l!==void 0&&(i&2||i&4)&&ts(t,n,l),o=o.next}while(o!==r)}Wn(e,n,t);break;case 1:if(!Oe&&(Vt(t,n),r=t.stateNode,typeof r.componentWillUnmount=="function"))try{r.props=t.memoizedProps,r.state=t.memoizedState,r.componentWillUnmount()}catch(s){we(t,n,s)}Wn(e,n,t);break;case 21:Wn(e,n,t);break;case 22:t.mode&1?(Oe=(r=Oe)||t.memoizedState!==null,Wn(e,n,t),Oe=r):Wn(e,n,t);break;default:Wn(e,n,t)}}function zu(e){var n=e.updateQueue;if(n!==null){e.updateQueue=null;var t=e.stateNode;t===null&&(t=e.stateNode=new fh),n.forEach(function(r){var o=Ph.bind(null,e,r);t.has(r)||(t.add(r),r.then(o,o))})}}function un(e,n){var t=n.deletions;if(t!==null)for(var r=0;r<t.length;r++){var o=t[r];try{var i=e,l=n,s=l;e:for(;s!==null;){switch(s.tag){case 5:Me=s.stateNode,pn=!1;break e;case 3:Me=s.stateNode.containerInfo,pn=!0;break e;case 4:Me=s.stateNode.containerInfo,pn=!0;break e}s=s.return}if(Me===null)throw Error(_(160));xp(i,l,o),Me=null,pn=!1;var a=o.alternate;a!==null&&(a.return=null),o.return=null}catch(u){we(o,n,u)}}if(n.subtreeFlags&12854)for(n=n.child;n!==null;)wp(n,e),n=n.sibling}function wp(e,n){var t=e.alternate,r=e.flags;switch(e.tag){case 0:case 11:case 14:case 15:if(un(n,e),yn(e),r&4){try{Lr(3,e,e.return),Ri(3,e)}catch(w){we(e,e.return,w)}try{Lr(5,e,e.return)}catch(w){we(e,e.return,w)}}break;case 1:un(n,e),yn(e),r&512&&t!==null&&Vt(t,t.return);break;case 5:if(un(n,e),yn(e),r&512&&t!==null&&Vt(t,t.return),e.flags&32){var o=e.stateNode;try{Ar(o,"")}catch(w){we(e,e.return,w)}}if(r&4&&(o=e.stateNode,o!=null)){var i=e.memoizedProps,l=t!==null?t.memoizedProps:i,s=e.type,a=e.updateQueue;if(e.updateQueue=null,a!==null)try{s==="input"&&i.type==="radio"&&i.name!=null&&Fc(o,i),$l(s,l);var u=$l(s,i);for(l=0;l<a.length;l+=2){var p=a[l],c=a[l+1];p==="style"?Kc(o,c):p==="dangerouslySetInnerHTML"?Gc(o,c):p==="children"?Ar(o,c):Ps(o,p,c,u)}switch(s){case"input":Pl(o,i);break;case"textarea":Bc(o,i);break;case"select":var m=o._wrapperState.wasMultiple;o._wrapperState.wasMultiple=!!i.multiple;var g=i.value;g!=null?Qt(o,!!i.multiple,g,!1):m!==!!i.multiple&&(i.defaultValue!=null?Qt(o,!!i.multiple,i.defaultValue,!0):Qt(o,!!i.multiple,i.multiple?[]:"",!1))}o[Qr]=i}catch(w){we(e,e.return,w)}}break;case 6:if(un(n,e),yn(e),r&4){if(e.stateNode===null)throw Error(_(162));o=e.stateNode,i=e.memoizedProps;try{o.nodeValue=i}catch(w){we(e,e.return,w)}}break;case 3:if(un(n,e),yn(e),r&4&&t!==null&&t.memoizedState.isDehydrated)try{Br(n.containerInfo)}catch(w){we(e,e.return,w)}break;case 4:un(n,e),yn(e);break;case 13:un(n,e),yn(e),o=e.child,o.flags&8192&&(i=o.memoizedState!==null,o.stateNode.isHidden=i,!i||o.alternate!==null&&o.alternate.memoizedState!==null||(ra=Se())),r&4&&zu(e);break;case 22:if(p=t!==null&&t.memoizedState!==null,e.mode&1?(Oe=(u=Oe)||p,un(n,e),Oe=u):un(n,e),yn(e),r&8192){if(u=e.memoizedState!==null,(e.stateNode.isHidden=u)&&!p&&e.mode&1)for(O=e,p=e.child;p!==null;){for(c=O=p;O!==null;){switch(m=O,g=m.child,m.tag){case 0:case 11:case 14:case 15:Lr(4,m,m.return);break;case 1:Vt(m,m.return);var x=m.stateNode;if(typeof x.componentWillUnmount=="function"){r=m,t=m.return;try{n=r,x.props=n.memoizedProps,x.state=n.memoizedState,x.componentWillUnmount()}catch(w){we(r,t,w)}}break;case 5:Vt(m,m.return);break;case 22:if(m.memoizedState!==null){Wu(c);continue}}g!==null?(g.return=m,O=g):Wu(c)}p=p.sibling}e:for(p=null,c=e;;){if(c.tag===5){if(p===null){p=c;try{o=c.stateNode,u?(i=o.style,typeof i.setProperty=="function"?i.setProperty("display","none","important"):i.display="none"):(s=c.stateNode,a=c.memoizedProps.style,l=a!=null&&a.hasOwnProperty("display")?a.display:null,s.style.display=Vc("display",l))}catch(w){we(e,e.return,w)}}}else if(c.tag===6){if(p===null)try{c.stateNode.nodeValue=u?"":c.memoizedProps}catch(w){we(e,e.return,w)}}else if((c.tag!==22&&c.tag!==23||c.memoizedState===null||c===e)&&c.child!==null){c.child.return=c,c=c.child;continue}if(c===e)break e;for(;c.sibling===null;){if(c.return===null||c.return===e)break e;p===c&&(p=null),c=c.return}p===c&&(p=null),c.sibling.return=c.return,c=c.sibling}}break;case 19:un(n,e),yn(e),r&4&&zu(e);break;case 21:break;default:un(n,e),yn(e)}}function yn(e){var n=e.flags;if(n&2){try{e:{for(var t=e.return;t!==null;){if(vp(t)){var r=t;break e}t=t.return}throw Error(_(160))}switch(r.tag){case 5:var o=r.stateNode;r.flags&32&&(Ar(o,""),r.flags&=-33);var i=Du(e);is(e,i,o);break;case 3:case 4:var l=r.stateNode.containerInfo,s=Du(e);os(e,s,l);break;default:throw Error(_(161))}}catch(a){we(e,e.return,a)}e.flags&=-3}n&4096&&(e.flags&=-4097)}function hh(e,n,t){O=e,Sp(e)}function Sp(e,n,t){for(var r=(e.mode&1)!==0;O!==null;){var o=O,i=o.child;if(o.tag===22&&r){var l=o.memoizedState!==null||To;if(!l){var s=o.alternate,a=s!==null&&s.memoizedState!==null||Oe;s=To;var u=Oe;if(To=l,(Oe=a)&&!u)for(O=o;O!==null;)l=O,a=l.child,l.tag===22&&l.memoizedState!==null?Hu(o):a!==null?(a.return=l,O=a):Hu(o);for(;i!==null;)O=i,Sp(i),i=i.sibling;O=o,To=s,Oe=u}Au(e)}else o.subtreeFlags&8772&&i!==null?(i.return=o,O=i):Au(e)}}function Au(e){for(;O!==null;){var n=O;if(n.flags&8772){var t=n.alternate;try{if(n.flags&8772)switch(n.tag){case 0:case 11:case 15:Oe||Ri(5,n);break;case 1:var r=n.stateNode;if(n.flags&4&&!Oe)if(t===null)r.componentDidMount();else{var o=n.elementType===n.type?t.memoizedProps:dn(n.type,t.memoizedProps);r.componentDidUpdate(o,t.memoizedState,r.__reactInternalSnapshotBeforeUpdate)}var i=n.updateQueue;i!==null&&ku(n,i,r);break;case 3:var l=n.updateQueue;if(l!==null){if(t=null,n.child!==null)switch(n.child.tag){case 5:t=n.child.stateNode;break;case 1:t=n.child.stateNode}ku(n,l,t)}break;case 5:var s=n.stateNode;if(t===null&&n.flags&4){t=s;var a=n.memoizedProps;switch(n.type){case"button":case"input":case"select":case"textarea":a.autoFocus&&t.focus();break;case"img":a.src&&(t.src=a.src)}}break;case 6:break;case 4:break;case 12:break;case 13:if(n.memoizedState===null){var u=n.alternate;if(u!==null){var p=u.memoizedState;if(p!==null){var c=p.dehydrated;c!==null&&Br(c)}}}break;case 19:case 17:case 21:case 22:case 23:case 25:break;default:throw Error(_(163))}Oe||n.flags&512&&rs(n)}catch(m){we(n,n.return,m)}}if(n===e){O=null;break}if(t=n.sibling,t!==null){t.return=n.return,O=t;break}O=n.return}}function Wu(e){for(;O!==null;){var n=O;if(n===e){O=null;break}var t=n.sibling;if(t!==null){t.return=n.return,O=t;break}O=n.return}}function Hu(e){for(;O!==null;){var n=O;try{switch(n.tag){case 0:case 11:case 15:var t=n.return;try{Ri(4,n)}catch(a){we(n,t,a)}break;case 1:var r=n.stateNode;if(typeof r.componentDidMount=="function"){var o=n.return;try{r.componentDidMount()}catch(a){we(n,o,a)}}var i=n.return;try{rs(n)}catch(a){we(n,i,a)}break;case 5:var l=n.return;try{rs(n)}catch(a){we(n,l,a)}}}catch(a){we(n,n.return,a)}if(n===e){O=null;break}var s=n.sibling;if(s!==null){s.return=n.return,O=s;break}O=n.return}}var yh=Math.ceil,mi=En.ReactCurrentDispatcher,na=En.ReactCurrentOwner,ln=En.ReactCurrentBatchConfig,ne=0,$e=null,ke=null,Ie=0,Qe=0,Kt=lt(0),_e=0,eo=null,Ct=0,$i=0,ta=0,Or=null,Be=null,ra=0,lr=1/0,Cn=null,fi=!1,ls=null,Zn=null,Ro=!1,Vn=null,gi=0,Dr=0,ss=null,Uo=-1,Go=0;function We(){return ne&6?Se():Uo!==-1?Uo:Uo=Se()}function et(e){return e.mode&1?ne&2&&Ie!==0?Ie&-Ie:eh.transition!==null?(Go===0&&(Go=id()),Go):(e=le,e!==0||(e=window.event,e=e===void 0?16:pd(e.type)),e):1}function gn(e,n,t,r){if(50<Dr)throw Dr=0,ss=null,Error(_(185));oo(e,t,r),(!(ne&2)||e!==$e)&&(e===$e&&(!(ne&2)&&($i|=t),_e===4&&Un(e,Ie)),Ke(e,r),t===1&&ne===0&&!(n.mode&1)&&(lr=Se()+500,Ci&&st()))}function Ke(e,n){var t=e.callbackNode;eg(e,n);var r=Jo(e,e===$e?Ie:0);if(r===0)t!==null&&qa(t),e.callbackNode=null,e.callbackPriority=0;else if(n=r&-r,e.callbackPriority!==n){if(t!=null&&qa(t),n===1)e.tag===0?Zg(Fu.bind(null,e)):Id(Fu.bind(null,e)),Yg(function(){!(ne&6)&&st()}),t=null;else{switch(ld(r)){case 1:t=$s;break;case 4:t=rd;break;case 16:t=Xo;break;case 536870912:t=od;break;default:t=Xo}t=$p(t,bp.bind(null,e))}e.callbackPriority=n,e.callbackNode=t}}function bp(e,n){if(Uo=-1,Go=0,ne&6)throw Error(_(327));var t=e.callbackNode;if(Zt()&&e.callbackNode!==t)return null;var r=Jo(e,e===$e?Ie:0);if(r===0)return null;if(r&30||r&e.expiredLanes||n)n=hi(e,r);else{n=r;var o=ne;ne|=2;var i=Pp();($e!==e||Ie!==n)&&(Cn=null,lr=Se()+500,wt(e,n));do try{wh();break}catch(s){kp(e,s)}while(!0);Fs(),mi.current=i,ne=o,ke!==null?n=0:($e=null,Ie=0,n=_e)}if(n!==0){if(n===2&&(o=El(e),o!==0&&(r=o,n=as(e,o))),n===1)throw t=eo,wt(e,0),Un(e,r),Ke(e,Se()),t;if(n===6)Un(e,r);else{if(o=e.current.alternate,!(r&30)&&!vh(o)&&(n=hi(e,r),n===2&&(i=El(e),i!==0&&(r=i,n=as(e,i))),n===1))throw t=eo,wt(e,0),Un(e,r),Ke(e,Se()),t;switch(e.finishedWork=o,e.finishedLanes=r,n){case 0:case 1:throw Error(_(345));case 2:ht(e,Be,Cn);break;case 3:if(Un(e,r),(r&130023424)===r&&(n=ra+500-Se(),10<n)){if(Jo(e,0)!==0)break;if(o=e.suspendedLanes,(o&r)!==r){We(),e.pingedLanes|=e.suspendedLanes&o;break}e.timeoutHandle=Fl(ht.bind(null,e,Be,Cn),n);break}ht(e,Be,Cn);break;case 4:if(Un(e,r),(r&4194240)===r)break;for(n=e.eventTimes,o=-1;0<r;){var l=31-fn(r);i=1<<l,l=n[l],l>o&&(o=l),r&=~i}if(r=o,r=Se()-r,r=(120>r?120:480>r?480:1080>r?1080:1920>r?1920:3e3>r?3e3:4320>r?4320:1960*yh(r/1960))-r,10<r){e.timeoutHandle=Fl(ht.bind(null,e,Be,Cn),r);break}ht(e,Be,Cn);break;case 5:ht(e,Be,Cn);break;default:throw Error(_(329))}}}return Ke(e,Se()),e.callbackNode===t?bp.bind(null,e):null}function as(e,n){var t=Or;return e.current.memoizedState.isDehydrated&&(wt(e,n).flags|=256),e=hi(e,n),e!==2&&(n=Be,Be=t,n!==null&&us(n)),e}function us(e){Be===null?Be=e:Be.push.apply(Be,e)}function vh(e){for(var n=e;;){if(n.flags&16384){var t=n.updateQueue;if(t!==null&&(t=t.stores,t!==null))for(var r=0;r<t.length;r++){var o=t[r],i=o.getSnapshot;o=o.value;try{if(!hn(i(),o))return!1}catch{return!1}}}if(t=n.child,n.subtreeFlags&16384&&t!==null)t.return=n,n=t;else{if(n===e)break;for(;n.sibling===null;){if(n.return===null||n.return===e)return!0;n=n.return}n.sibling.return=n.return,n=n.sibling}}return!0}function Un(e,n){for(n&=~ta,n&=~$i,e.suspendedLanes|=n,e.pingedLanes&=~n,e=e.expirationTimes;0<n;){var t=31-fn(n),r=1<<t;e[t]=-1,n&=~r}}function Fu(e){if(ne&6)throw Error(_(327));Zt();var n=Jo(e,0);if(!(n&1))return Ke(e,Se()),null;var t=hi(e,n);if(e.tag!==0&&t===2){var r=El(e);r!==0&&(n=r,t=as(e,r))}if(t===1)throw t=eo,wt(e,0),Un(e,n),Ke(e,Se()),t;if(t===6)throw Error(_(345));return e.finishedWork=e.current.alternate,e.finishedLanes=n,ht(e,Be,Cn),Ke(e,Se()),null}function oa(e,n){var t=ne;ne|=1;try{return e(n)}finally{ne=t,ne===0&&(lr=Se()+500,Ci&&st())}}function _t(e){Vn!==null&&Vn.tag===0&&!(ne&6)&&Zt();var n=ne;ne|=1;var t=ln.transition,r=le;try{if(ln.transition=null,le=1,e)return e()}finally{le=r,ln.transition=t,ne=n,!(ne&6)&&st()}}function ia(){Qe=Kt.current,me(Kt)}function wt(e,n){e.finishedWork=null,e.finishedLanes=0;var t=e.timeoutHandle;if(t!==-1&&(e.timeoutHandle=-1,Qg(t)),ke!==null)for(t=ke.return;t!==null;){var r=t;switch(As(r),r.tag){case 1:r=r.type.childContextTypes,r!=null&&ri();break;case 3:or(),me(Ge),me(De),Qs();break;case 5:Ks(r);break;case 4:or();break;case 13:me(he);break;case 19:me(he);break;case 10:Bs(r.type._context);break;case 22:case 23:ia()}t=t.return}if($e=e,ke=e=nt(e.current,null),Ie=Qe=n,_e=0,eo=null,ta=$i=Ct=0,Be=Or=null,vt!==null){for(n=0;n<vt.length;n++)if(t=vt[n],r=t.interleaved,r!==null){t.interleaved=null;var o=r.next,i=t.pending;if(i!==null){var l=i.next;i.next=o,r.next=l}t.pending=r}vt=null}return e}function kp(e,n){do{var t=ke;try{if(Fs(),Ho.current=pi,di){for(var r=ye.memoizedState;r!==null;){var o=r.queue;o!==null&&(o.pending=null),r=r.next}di=!1}if(Pt=0,Re=Ce=ye=null,Er=!1,Xr=0,na.current=null,t===null||t.return===null){_e=1,eo=n,ke=null;break}e:{var i=e,l=t.return,s=t,a=n;if(n=Ie,s.flags|=32768,a!==null&&typeof a=="object"&&typeof a.then=="function"){var u=a,p=s,c=p.tag;if(!(p.mode&1)&&(c===0||c===11||c===15)){var m=p.alternate;m?(p.updateQueue=m.updateQueue,p.memoizedState=m.memoizedState,p.lanes=m.lanes):(p.updateQueue=null,p.memoizedState=null)}var g=$u(l);if(g!==null){g.flags&=-257,Mu(g,l,s,i,n),g.mode&1&&Ru(i,u,n),n=g,a=u;var x=n.updateQueue;if(x===null){var w=new Set;w.add(a),n.updateQueue=w}else x.add(a);break e}else{if(!(n&1)){Ru(i,u,n),la();break e}a=Error(_(426))}}else if(ge&&s.mode&1){var S=$u(l);if(S!==null){!(S.flags&65536)&&(S.flags|=256),Mu(S,l,s,i,n),Ws(ir(a,s));break e}}i=a=ir(a,s),_e!==4&&(_e=2),Or===null?Or=[i]:Or.push(i),i=l;do{switch(i.tag){case 3:i.flags|=65536,n&=-n,i.lanes|=n;var h=lp(i,a,n);bu(i,h);break e;case 1:s=a;var f=i.type,v=i.stateNode;if(!(i.flags&128)&&(typeof f.getDerivedStateFromError=="function"||v!==null&&typeof v.componentDidCatch=="function"&&(Zn===null||!Zn.has(v)))){i.flags|=65536,n&=-n,i.lanes|=n;var b=sp(i,s,n);bu(i,b);break e}}i=i.return}while(i!==null)}_p(t)}catch(C){n=C,ke===t&&t!==null&&(ke=t=t.return);continue}break}while(!0)}function Pp(){var e=mi.current;return mi.current=pi,e===null?pi:e}function la(){(_e===0||_e===3||_e===2)&&(_e=4),$e===null||!(Ct&268435455)&&!($i&268435455)||Un($e,Ie)}function hi(e,n){var t=ne;ne|=2;var r=Pp();($e!==e||Ie!==n)&&(Cn=null,wt(e,n));do try{xh();break}catch(o){kp(e,o)}while(!0);if(Fs(),ne=t,mi.current=r,ke!==null)throw Error(_(261));return $e=null,Ie=0,_e}function xh(){for(;ke!==null;)Cp(ke)}function wh(){for(;ke!==null&&!Gf();)Cp(ke)}function Cp(e){var n=Rp(e.alternate,e,Qe);e.memoizedProps=e.pendingProps,n===null?_p(e):ke=n,na.current=null}function _p(e){var n=e;do{var t=n.alternate;if(e=n.return,n.flags&32768){if(t=mh(t,n),t!==null){t.flags&=32767,ke=t;return}if(e!==null)e.flags|=32768,e.subtreeFlags=0,e.deletions=null;else{_e=6,ke=null;return}}else if(t=ph(t,n,Qe),t!==null){ke=t;return}if(n=n.sibling,n!==null){ke=n;return}ke=n=e}while(n!==null);_e===0&&(_e=5)}function ht(e,n,t){var r=le,o=ln.transition;try{ln.transition=null,le=1,Sh(e,n,t,r)}finally{ln.transition=o,le=r}return null}function Sh(e,n,t,r){do Zt();while(Vn!==null);if(ne&6)throw Error(_(327));t=e.finishedWork;var o=e.finishedLanes;if(t===null)return null;if(e.finishedWork=null,e.finishedLanes=0,t===e.current)throw Error(_(177));e.callbackNode=null,e.callbackPriority=0;var i=t.lanes|t.childLanes;if(ng(e,i),e===$e&&(ke=$e=null,Ie=0),!(t.subtreeFlags&2064)&&!(t.flags&2064)||Ro||(Ro=!0,$p(Xo,function(){return Zt(),null})),i=(t.flags&15990)!==0,t.subtreeFlags&15990||i){i=ln.transition,ln.transition=null;var l=le;le=1;var s=ne;ne|=4,na.current=null,gh(e,t),wp(t,e),Hg(Wl),Zo=!!Al,Wl=Al=null,e.current=t,hh(t),Vf(),ne=s,le=l,ln.transition=i}else e.current=t;if(Ro&&(Ro=!1,Vn=e,gi=o),i=e.pendingLanes,i===0&&(Zn=null),Yf(t.stateNode),Ke(e,Se()),n!==null)for(r=e.onRecoverableError,t=0;t<n.length;t++)o=n[t],r(o.value,{componentStack:o.stack,digest:o.digest});if(fi)throw fi=!1,e=ls,ls=null,e;return gi&1&&e.tag!==0&&Zt(),i=e.pendingLanes,i&1?e===ss?Dr++:(Dr=0,ss=e):Dr=0,st(),null}function Zt(){if(Vn!==null){var e=ld(gi),n=ln.transition,t=le;try{if(ln.transition=null,le=16>e?16:e,Vn===null)var r=!1;else{if(e=Vn,Vn=null,gi=0,ne&6)throw Error(_(331));var o=ne;for(ne|=4,O=e.current;O!==null;){var i=O,l=i.child;if(O.flags&16){var s=i.deletions;if(s!==null){for(var a=0;a<s.length;a++){var u=s[a];for(O=u;O!==null;){var p=O;switch(p.tag){case 0:case 11:case 15:Lr(8,p,i)}var c=p.child;if(c!==null)c.return=p,O=c;else for(;O!==null;){p=O;var m=p.sibling,g=p.return;if(yp(p),p===u){O=null;break}if(m!==null){m.return=g,O=m;break}O=g}}}var x=i.alternate;if(x!==null){var w=x.child;if(w!==null){x.child=null;do{var S=w.sibling;w.sibling=null,w=S}while(w!==null)}}O=i}}if(i.subtreeFlags&2064&&l!==null)l.return=i,O=l;else e:for(;O!==null;){if(i=O,i.flags&2048)switch(i.tag){case 0:case 11:case 15:Lr(9,i,i.return)}var h=i.sibling;if(h!==null){h.return=i.return,O=h;break e}O=i.return}}var f=e.current;for(O=f;O!==null;){l=O;var v=l.child;if(l.subtreeFlags&2064&&v!==null)v.return=l,O=v;else e:for(l=f;O!==null;){if(s=O,s.flags&2048)try{switch(s.tag){case 0:case 11:case 15:Ri(9,s)}}catch(C){we(s,s.return,C)}if(s===l){O=null;break e}var b=s.sibling;if(b!==null){b.return=s.return,O=b;break e}O=s.return}}if(ne=o,st(),wn&&typeof wn.onPostCommitFiberRoot=="function")try{wn.onPostCommitFiberRoot(wi,e)}catch{}r=!0}return r}finally{le=t,ln.transition=n}}return!1}function Bu(e,n,t){n=ir(t,n),n=lp(e,n,1),e=Jn(e,n,1),n=We(),e!==null&&(oo(e,1,n),Ke(e,n))}function we(e,n,t){if(e.tag===3)Bu(e,e,t);else for(;n!==null;){if(n.tag===3){Bu(n,e,t);break}else if(n.tag===1){var r=n.stateNode;if(typeof n.type.getDerivedStateFromError=="function"||typeof r.componentDidCatch=="function"&&(Zn===null||!Zn.has(r))){e=ir(t,e),e=sp(n,e,1),n=Jn(n,e,1),e=We(),n!==null&&(oo(n,1,e),Ke(n,e));break}}n=n.return}}function bh(e,n,t){var r=e.pingCache;r!==null&&r.delete(n),n=We(),e.pingedLanes|=e.suspendedLanes&t,$e===e&&(Ie&t)===t&&(_e===4||_e===3&&(Ie&130023424)===Ie&&500>Se()-ra?wt(e,0):ta|=t),Ke(e,n)}function Tp(e,n){n===0&&(e.mode&1?(n=vo,vo<<=1,!(vo&130023424)&&(vo=4194304)):n=1);var t=We();e=Nn(e,n),e!==null&&(oo(e,n,t),Ke(e,t))}function kh(e){var n=e.memoizedState,t=0;n!==null&&(t=n.retryLane),Tp(e,t)}function Ph(e,n){var t=0;switch(e.tag){case 13:var r=e.stateNode,o=e.memoizedState;o!==null&&(t=o.retryLane);break;case 19:r=e.stateNode;break;default:throw Error(_(314))}r!==null&&r.delete(n),Tp(e,t)}var Rp;Rp=function(e,n,t){if(e!==null)if(e.memoizedProps!==n.pendingProps||Ge.current)Ue=!0;else{if(!(e.lanes&t)&&!(n.flags&128))return Ue=!1,dh(e,n,t);Ue=!!(e.flags&131072)}else Ue=!1,ge&&n.flags&1048576&&Nd(n,li,n.index);switch(n.lanes=0,n.tag){case 2:var r=n.type;Bo(e,n),e=n.pendingProps;var o=nr(n,De.current);Jt(n,t),o=qs(null,n,r,e,o,t);var i=Xs();return n.flags|=1,typeof o=="object"&&o!==null&&typeof o.render=="function"&&o.$$typeof===void 0?(n.tag=1,n.memoizedState=null,n.updateQueue=null,Ve(r)?(i=!0,oi(n)):i=!1,n.memoizedState=o.state!==null&&o.state!==void 0?o.state:null,Gs(n),o.updater=Ti,n.stateNode=o,o._reactInternals=n,Yl(n,r,e,t),n=Jl(null,n,r,!0,i,t)):(n.tag=0,ge&&i&&zs(n),Ae(null,n,o,t),n=n.child),n;case 16:r=n.elementType;e:{switch(Bo(e,n),e=n.pendingProps,o=r._init,r=o(r._payload),n.type=r,o=n.tag=_h(r),e=dn(r,e),o){case 0:n=Xl(null,n,r,e,t);break e;case 1:n=ju(null,n,r,e,t);break e;case 11:n=Iu(null,n,r,e,t);break e;case 14:n=Nu(null,n,r,dn(r.type,e),t);break e}throw Error(_(306,r,""))}return n;case 0:return r=n.type,o=n.pendingProps,o=n.elementType===r?o:dn(r,o),Xl(e,n,r,o,t);case 1:return r=n.type,o=n.pendingProps,o=n.elementType===r?o:dn(r,o),ju(e,n,r,o,t);case 3:e:{if(dp(n),e===null)throw Error(_(387));r=n.pendingProps,i=n.memoizedState,o=i.element,zd(e,n),ui(n,r,null,t);var l=n.memoizedState;if(r=l.element,i.isDehydrated)if(i={element:r,isDehydrated:!1,cache:l.cache,pendingSuspenseBoundaries:l.pendingSuspenseBoundaries,transitions:l.transitions},n.updateQueue.baseState=i,n.memoizedState=i,n.flags&256){o=ir(Error(_(423)),n),n=Eu(e,n,r,t,o);break e}else if(r!==o){o=ir(Error(_(424)),n),n=Eu(e,n,r,t,o);break e}else for(Ye=Xn(n.stateNode.containerInfo.firstChild),qe=n,ge=!0,mn=null,t=Od(n,null,r,t),n.child=t;t;)t.flags=t.flags&-3|4096,t=t.sibling;else{if(tr(),r===o){n=jn(e,n,t);break e}Ae(e,n,r,t)}n=n.child}return n;case 5:return Ad(n),e===null&&Vl(n),r=n.type,o=n.pendingProps,i=e!==null?e.memoizedProps:null,l=o.children,Hl(r,o)?l=null:i!==null&&Hl(r,i)&&(n.flags|=32),cp(e,n),Ae(e,n,l,t),n.child;case 6:return e===null&&Vl(n),null;case 13:return pp(e,n,t);case 4:return Vs(n,n.stateNode.containerInfo),r=n.pendingProps,e===null?n.child=rr(n,null,r,t):Ae(e,n,r,t),n.child;case 11:return r=n.type,o=n.pendingProps,o=n.elementType===r?o:dn(r,o),Iu(e,n,r,o,t);case 7:return Ae(e,n,n.pendingProps,t),n.child;case 8:return Ae(e,n,n.pendingProps.children,t),n.child;case 12:return Ae(e,n,n.pendingProps.children,t),n.child;case 10:e:{if(r=n.type._context,o=n.pendingProps,i=n.memoizedProps,l=o.value,ce(si,r._currentValue),r._currentValue=l,i!==null)if(hn(i.value,l)){if(i.children===o.children&&!Ge.current){n=jn(e,n,t);break e}}else for(i=n.child,i!==null&&(i.return=n);i!==null;){var s=i.dependencies;if(s!==null){l=i.child;for(var a=s.firstContext;a!==null;){if(a.context===r){if(i.tag===1){a=$n(-1,t&-t),a.tag=2;var u=i.updateQueue;if(u!==null){u=u.shared;var p=u.pending;p===null?a.next=a:(a.next=p.next,p.next=a),u.pending=a}}i.lanes|=t,a=i.alternate,a!==null&&(a.lanes|=t),Kl(i.return,t,n),s.lanes|=t;break}a=a.next}}else if(i.tag===10)l=i.type===n.type?null:i.child;else if(i.tag===18){if(l=i.return,l===null)throw Error(_(341));l.lanes|=t,s=l.alternate,s!==null&&(s.lanes|=t),Kl(l,t,n),l=i.sibling}else l=i.child;if(l!==null)l.return=i;else for(l=i;l!==null;){if(l===n){l=null;break}if(i=l.sibling,i!==null){i.return=l.return,l=i;break}l=l.return}i=l}Ae(e,n,o.children,t),n=n.child}return n;case 9:return o=n.type,r=n.pendingProps.children,Jt(n,t),o=sn(o),r=r(o),n.flags|=1,Ae(e,n,r,t),n.child;case 14:return r=n.type,o=dn(r,n.pendingProps),o=dn(r.type,o),Nu(e,n,r,o,t);case 15:return ap(e,n,n.type,n.pendingProps,t);case 17:return r=n.type,o=n.pendingProps,o=n.elementType===r?o:dn(r,o),Bo(e,n),n.tag=1,Ve(r)?(e=!0,oi(n)):e=!1,Jt(n,t),ip(n,r,o),Yl(n,r,o,t),Jl(null,n,r,!0,e,t);case 19:return mp(e,n,t);case 22:return up(e,n,t)}throw Error(_(156,n.tag))};function $p(e,n){return td(e,n)}function Ch(e,n,t,r){this.tag=e,this.key=t,this.sibling=this.child=this.return=this.stateNode=this.type=this.elementType=null,this.index=0,this.ref=null,this.pendingProps=n,this.dependencies=this.memoizedState=this.updateQueue=this.memoizedProps=null,this.mode=r,this.subtreeFlags=this.flags=0,this.deletions=null,this.childLanes=this.lanes=0,this.alternate=null}function on(e,n,t,r){return new Ch(e,n,t,r)}function sa(e){return e=e.prototype,!(!e||!e.isReactComponent)}function _h(e){if(typeof e=="function")return sa(e)?1:0;if(e!=null){if(e=e.$$typeof,e===_s)return 11;if(e===Ts)return 14}return 2}function nt(e,n){var t=e.alternate;return t===null?(t=on(e.tag,n,e.key,e.mode),t.elementType=e.elementType,t.type=e.type,t.stateNode=e.stateNode,t.alternate=e,e.alternate=t):(t.pendingProps=n,t.type=e.type,t.flags=0,t.subtreeFlags=0,t.deletions=null),t.flags=e.flags&14680064,t.childLanes=e.childLanes,t.lanes=e.lanes,t.child=e.child,t.memoizedProps=e.memoizedProps,t.memoizedState=e.memoizedState,t.updateQueue=e.updateQueue,n=e.dependencies,t.dependencies=n===null?null:{lanes:n.lanes,firstContext:n.firstContext},t.sibling=e.sibling,t.index=e.index,t.ref=e.ref,t}function Vo(e,n,t,r,o,i){var l=2;if(r=e,typeof e=="function")sa(e)&&(l=1);else if(typeof e=="string")l=5;else e:switch(e){case Dt:return St(t.children,o,i,n);case Cs:l=8,o|=8;break;case xl:return e=on(12,t,n,o|2),e.elementType=xl,e.lanes=i,e;case wl:return e=on(13,t,n,o),e.elementType=wl,e.lanes=i,e;case Sl:return e=on(19,t,n,o),e.elementType=Sl,e.lanes=i,e;case Ac:return Mi(t,o,i,n);default:if(typeof e=="object"&&e!==null)switch(e.$$typeof){case Dc:l=10;break e;case zc:l=9;break e;case _s:l=11;break e;case Ts:l=14;break e;case Hn:l=16,r=null;break e}throw Error(_(130,e==null?e:typeof e,""))}return n=on(l,t,n,o),n.elementType=e,n.type=r,n.lanes=i,n}function St(e,n,t,r){return e=on(7,e,r,n),e.lanes=t,e}function Mi(e,n,t,r){return e=on(22,e,r,n),e.elementType=Ac,e.lanes=t,e.stateNode={isHidden:!1},e}function pl(e,n,t){return e=on(6,e,null,n),e.lanes=t,e}function ml(e,n,t){return n=on(4,e.children!==null?e.children:[],e.key,n),n.lanes=t,n.stateNode={containerInfo:e.containerInfo,pendingChildren:null,implementation:e.implementation},n}function Th(e,n,t,r,o){this.tag=n,this.containerInfo=e,this.finishedWork=this.pingCache=this.current=this.pendingChildren=null,this.timeoutHandle=-1,this.callbackNode=this.pendingContext=this.context=null,this.callbackPriority=0,this.eventTimes=Ki(0),this.expirationTimes=Ki(-1),this.entangledLanes=this.finishedLanes=this.mutableReadLanes=this.expiredLanes=this.pingedLanes=this.suspendedLanes=this.pendingLanes=0,this.entanglements=Ki(0),this.identifierPrefix=r,this.onRecoverableError=o,this.mutableSourceEagerHydrationData=null}function aa(e,n,t,r,o,i,l,s,a){return e=new Th(e,n,t,s,a),n===1?(n=1,i===!0&&(n|=8)):n=0,i=on(3,null,null,n),e.current=i,i.stateNode=e,i.memoizedState={element:r,isDehydrated:t,cache:null,transitions:null,pendingSuspenseBoundaries:null},Gs(i),e}function Rh(e,n,t){var r=3<arguments.length&&arguments[3]!==void 0?arguments[3]:null;return{$$typeof:Ot,key:r==null?null:""+r,children:e,containerInfo:n,implementation:t}}function Mp(e){if(!e)return ot;e=e._reactInternals;e:{if($t(e)!==e||e.tag!==1)throw Error(_(170));var n=e;do{switch(n.tag){case 3:n=n.stateNode.context;break e;case 1:if(Ve(n.type)){n=n.stateNode.__reactInternalMemoizedMergedChildContext;break e}}n=n.return}while(n!==null);throw Error(_(171))}if(e.tag===1){var t=e.type;if(Ve(t))return Md(e,t,n)}return n}function Ip(e,n,t,r,o,i,l,s,a){return e=aa(t,r,!0,e,o,i,l,s,a),e.context=Mp(null),t=e.current,r=We(),o=et(t),i=$n(r,o),i.callback=n??null,Jn(t,i,o),e.current.lanes=o,oo(e,o,r),Ke(e,r),e}function Ii(e,n,t,r){var o=n.current,i=We(),l=et(o);return t=Mp(t),n.context===null?n.context=t:n.pendingContext=t,n=$n(i,l),n.payload={element:e},r=r===void 0?null:r,r!==null&&(n.callback=r),e=Jn(o,n,l),e!==null&&(gn(e,o,l,i),Wo(e,o,l)),l}function yi(e){if(e=e.current,!e.child)return null;switch(e.child.tag){case 5:return e.child.stateNode;default:return e.child.stateNode}}function Uu(e,n){if(e=e.memoizedState,e!==null&&e.dehydrated!==null){var t=e.retryLane;e.retryLane=t!==0&&t<n?t:n}}function ua(e,n){Uu(e,n),(e=e.alternate)&&Uu(e,n)}function $h(){return null}var Np=typeof reportError=="function"?reportError:function(e){console.error(e)};function ca(e){this._internalRoot=e}Ni.prototype.render=ca.prototype.render=function(e){var n=this._internalRoot;if(n===null)throw Error(_(409));Ii(e,n,null,null)};Ni.prototype.unmount=ca.prototype.unmount=function(){var e=this._internalRoot;if(e!==null){this._internalRoot=null;var n=e.containerInfo;_t(function(){Ii(null,e,null,null)}),n[In]=null}};function Ni(e){this._internalRoot=e}Ni.prototype.unstable_scheduleHydration=function(e){if(e){var n=ud();e={blockedOn:null,target:e,priority:n};for(var t=0;t<Bn.length&&n!==0&&n<Bn[t].priority;t++);Bn.splice(t,0,e),t===0&&dd(e)}};function da(e){return!(!e||e.nodeType!==1&&e.nodeType!==9&&e.nodeType!==11)}function ji(e){return!(!e||e.nodeType!==1&&e.nodeType!==9&&e.nodeType!==11&&(e.nodeType!==8||e.nodeValue!==" react-mount-point-unstable "))}function Gu(){}function Mh(e,n,t,r,o){if(o){if(typeof r=="function"){var i=r;r=function(){var u=yi(l);i.call(u)}}var l=Ip(n,r,e,0,null,!1,!1,"",Gu);return e._reactRootContainer=l,e[In]=l.current,Vr(e.nodeType===8?e.parentNode:e),_t(),l}for(;o=e.lastChild;)e.removeChild(o);if(typeof r=="function"){var s=r;r=function(){var u=yi(a);s.call(u)}}var a=aa(e,0,!1,null,null,!1,!1,"",Gu);return e._reactRootContainer=a,e[In]=a.current,Vr(e.nodeType===8?e.parentNode:e),_t(function(){Ii(n,a,t,r)}),a}function Ei(e,n,t,r,o){var i=t._reactRootContainer;if(i){var l=i;if(typeof o=="function"){var s=o;o=function(){var a=yi(l);s.call(a)}}Ii(n,l,e,o)}else l=Mh(t,n,e,o,r);return yi(l)}sd=function(e){switch(e.tag){case 3:var n=e.stateNode;if(n.current.memoizedState.isDehydrated){var t=Cr(n.pendingLanes);t!==0&&(Ms(n,t|1),Ke(n,Se()),!(ne&6)&&(lr=Se()+500,st()))}break;case 13:_t(function(){var r=Nn(e,1);if(r!==null){var o=We();gn(r,e,1,o)}}),ua(e,1)}};Is=function(e){if(e.tag===13){var n=Nn(e,134217728);if(n!==null){var t=We();gn(n,e,134217728,t)}ua(e,134217728)}};ad=function(e){if(e.tag===13){var n=et(e),t=Nn(e,n);if(t!==null){var r=We();gn(t,e,n,r)}ua(e,n)}};ud=function(){return le};cd=function(e,n){var t=le;try{return le=e,n()}finally{le=t}};Il=function(e,n,t){switch(n){case"input":if(Pl(e,t),n=t.name,t.type==="radio"&&n!=null){for(t=e;t.parentNode;)t=t.parentNode;for(t=t.querySelectorAll("input[name="+JSON.stringify(""+n)+'][type="radio"]'),n=0;n<t.length;n++){var r=t[n];if(r!==e&&r.form===e.form){var o=Pi(r);if(!o)throw Error(_(90));Hc(r),Pl(r,o)}}}break;case"textarea":Bc(e,t);break;case"select":n=t.value,n!=null&&Qt(e,!!t.multiple,n,!1)}};qc=oa;Xc=_t;var Ih={usingClientEntryPoint:!1,Events:[lo,Ht,Pi,Qc,Yc,oa]},Sr={findFiberByHostInstance:yt,bundleType:0,version:"18.3.1",rendererPackageName:"react-dom"},Nh={bundleType:Sr.bundleType,version:Sr.version,rendererPackageName:Sr.rendererPackageName,rendererConfig:Sr.rendererConfig,overrideHookState:null,overrideHookStateDeletePath:null,overrideHookStateRenamePath:null,overrideProps:null,overridePropsDeletePath:null,overridePropsRenamePath:null,setErrorHandler:null,setSuspenseHandler:null,scheduleUpdate:null,currentDispatcherRef:En.ReactCurrentDispatcher,findHostInstanceByFiber:function(e){return e=ed(e),e===null?null:e.stateNode},findFiberByHostInstance:Sr.findFiberByHostInstance||$h,findHostInstancesForRefresh:null,scheduleRefresh:null,scheduleRoot:null,setRefreshHandler:null,getCurrentFiber:null,reconcilerVersion:"18.3.1-next-f1338f8080-20240426"};if(typeof __REACT_DEVTOOLS_GLOBAL_HOOK__<"u"){var $o=__REACT_DEVTOOLS_GLOBAL_HOOK__;if(!$o.isDisabled&&$o.supportsFiber)try{wi=$o.inject(Nh),wn=$o}catch{}}Je.__SECRET_INTERNALS_DO_NOT_USE_OR_YOU_WILL_BE_FIRED=Ih;Je.createPortal=function(e,n){var t=2<arguments.length&&arguments[2]!==void 0?arguments[2]:null;if(!da(n))throw Error(_(200));return Rh(e,n,null,t)};Je.createRoot=function(e,n){if(!da(e))throw Error(_(299));var t=!1,r="",o=Np;return n!=null&&(n.unstable_strictMode===!0&&(t=!0),n.identifierPrefix!==void 0&&(r=n.identifierPrefix),n.onRecoverableError!==void 0&&(o=n.onRecoverableError)),n=aa(e,1,!1,null,null,t,!1,r,o),e[In]=n.current,Vr(e.nodeType===8?e.parentNode:e),new ca(n)};Je.findDOMNode=function(e){if(e==null)return null;if(e.nodeType===1)return e;var n=e._reactInternals;if(n===void 0)throw typeof e.render=="function"?Error(_(188)):(e=Object.keys(e).join(","),Error(_(268,e)));return e=ed(n),e=e===null?null:e.stateNode,e};Je.flushSync=function(e){return _t(e)};Je.hydrate=function(e,n,t){if(!ji(n))throw Error(_(200));return Ei(null,e,n,!0,t)};Je.hydrateRoot=function(e,n,t){if(!da(e))throw Error(_(405));var r=t!=null&&t.hydratedSources||null,o=!1,i="",l=Np;if(t!=null&&(t.unstable_strictMode===!0&&(o=!0),t.identifierPrefix!==void 0&&(i=t.identifierPrefix),t.onRecoverableError!==void 0&&(l=t.onRecoverableError)),n=Ip(n,null,e,1,t??null,o,!1,i,l),e[In]=n.current,Vr(e),r)for(e=0;e<r.length;e++)t=r[e],o=t._getVersion,o=o(t._source),n.mutableSourceEagerHydrationData==null?n.mutableSourceEagerHydrationData=[t,o]:n.mutableSourceEagerHydrationData.push(t,o);return new Ni(n)};Je.render=function(e,n,t){if(!ji(n))throw Error(_(200));return Ei(null,e,n,!1,t)};Je.unmountComponentAtNode=function(e){if(!ji(e))throw Error(_(40));return e._reactRootContainer?(_t(function(){Ei(null,null,e,!1,function(){e._reactRootContainer=null,e[In]=null})}),!0):!1};Je.unstable_batchedUpdates=oa;Je.unstable_renderSubtreeIntoContainer=function(e,n,t,r){if(!ji(t))throw Error(_(200));if(e==null||e._reactInternals===void 0)throw Error(_(38));return Ei(e,n,t,!1,r)};Je.version="18.3.1-next-f1338f8080-20240426";function jp(){if(!(typeof __REACT_DEVTOOLS_GLOBAL_HOOK__>"u"||typeof __REACT_DEVTOOLS_GLOBAL_HOOK__.checkDCE!="function"))try{__REACT_DEVTOOLS_GLOBAL_HOOK__.checkDCE(jp)}catch(e){console.error(e)}}jp(),jc.exports=Je;var jh=jc.exports,Ep,Vu=jh;Ep=Vu.createRoot,Vu.hydrateRoot;/**
 * @remix-run/router v1.23.4
 *
 * Copyright (c) Remix Software Inc.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE.md file in the root directory of this source tree.
 *
 * @license MIT
 */function no(){return no=Object.assign?Object.assign.bind():function(e){for(var n=1;n<arguments.length;n++){var t=arguments[n];for(var r in t)({}).hasOwnProperty.call(t,r)&&(e[r]=t[r])}return e},no.apply(null,arguments)}var Kn;(function(e){e.Pop="POP",e.Push="PUSH",e.Replace="REPLACE"})(Kn||(Kn={}));const Ku="popstate";function Eh(e){e===void 0&&(e={});function n(o,i){let{pathname:l="/",search:s="",hash:a=""}=Mt(o.location.hash.substr(1));return!l.startsWith("/")&&!l.startsWith(".")&&(l="/"+l),cs("",{pathname:l,search:s,hash:a},i.state&&i.state.usr||null,i.state&&i.state.key||"default")}function t(o,i){let l=o.document.querySelector("base"),s="";if(l&&l.getAttribute("href")){let a=o.location.href,u=a.indexOf("#");s=u===-1?a:a.slice(0,u)}return s+"#"+(typeof i=="string"?i:vi(i))}function r(o,i){pa(o.pathname.charAt(0)==="/","relative pathnames are not supported in hash history.push("+JSON.stringify(i)+")")}return Oh(n,t,r,e)}function be(e,n){if(e===!1||e===null||typeof e>"u")throw new Error(n)}function pa(e,n){if(!e){typeof console<"u"&&console.warn(n);try{throw new Error(n)}catch{}}}function Lh(){return Math.random().toString(36).substr(2,8)}function Qu(e,n){return{usr:e.state,key:e.key,idx:n}}function cs(e,n,t,r){return t===void 0&&(t=null),no({pathname:typeof e=="string"?e:e.pathname,search:"",hash:""},typeof n=="string"?Mt(n):n,{state:t,key:n&&n.key||r||Lh()})}function vi(e){let{pathname:n="/",search:t="",hash:r=""}=e;return t&&t!=="?"&&(n+=t.charAt(0)==="?"?t:"?"+t),r&&r!=="#"&&(n+=r.charAt(0)==="#"?r:"#"+r),n}function Mt(e){let n={};if(e){let t=e.indexOf("#");t>=0&&(n.hash=e.substr(t),e=e.substr(0,t));let r=e.indexOf("?");r>=0&&(n.search=e.substr(r),e=e.substr(0,r)),e&&(n.pathname=e)}return n}function Oh(e,n,t,r){r===void 0&&(r={});let{window:o=document.defaultView,v5Compat:i=!1}=r,l=o.history,s=Kn.Pop,a=null,u=p();u==null&&(u=0,l.replaceState(no({},l.state,{idx:u}),""));function p(){return(l.state||{idx:null}).idx}function c(){s=Kn.Pop;let S=p(),h=S==null?null:S-u;u=S,a&&a({action:s,location:w.location,delta:h})}function m(S,h){s=Kn.Push;let f=cs(w.location,S,h);t&&t(f,S),u=p()+1;let v=Qu(f,u),b=w.createHref(f);try{l.pushState(v,"",b)}catch(C){if(C instanceof DOMException&&C.name==="DataCloneError")throw C;o.location.assign(b)}i&&a&&a({action:s,location:w.location,delta:1})}function g(S,h){s=Kn.Replace;let f=cs(w.location,S,h);t&&t(f,S),u=p();let v=Qu(f,u),b=w.createHref(f);l.replaceState(v,"",b),i&&a&&a({action:s,location:w.location,delta:0})}function x(S){let h=o.location.origin!=="null"?o.location.origin:o.location.href,f=typeof S=="string"?S:vi(S);return f=f.replace(/ $/,"%20"),be(h,"No window.location.(origin|href) available to create URL for href: "+f),new URL(f,h)}let w={get action(){return s},get location(){return e(o,l)},listen(S){if(a)throw new Error("A history only accepts one active listener");return o.addEventListener(Ku,c),a=S,()=>{o.removeEventListener(Ku,c),a=null}},createHref(S){return n(o,S)},createURL:x,encodeLocation(S){let h=x(S);return{pathname:h.pathname,search:h.search,hash:h.hash}},push:m,replace:g,go(S){return l.go(S)}};return w}var Yu;(function(e){e.data="data",e.deferred="deferred",e.redirect="redirect",e.error="error"})(Yu||(Yu={}));function Dh(e,n,t){return t===void 0&&(t="/"),zh(e,n,t)}function zh(e,n,t,r){let o=typeof n=="string"?Mt(n):n,i=ma(o.pathname||"/",t);if(i==null)return null;let l=Lp(e);Ah(l);let s=null,a=Xh(i);for(let u=0;s==null&&u<l.length;++u)s=Qh(l[u],a);return s}function Lp(e,n,t,r){n===void 0&&(n=[]),t===void 0&&(t=[]),r===void 0&&(r="");let o=(i,l,s)=>{let a={relativePath:s===void 0?i.path||"":s,caseSensitive:i.caseSensitive===!0,childrenIndex:l,route:i};a.relativePath.startsWith("/")&&(be(a.relativePath.startsWith(r),'Absolute route path "'+a.relativePath+'" nested under path '+('"'+r+'" is not valid. An absolute child route path ')+"must start with the combined path of all its parent routes."),a.relativePath=a.relativePath.slice(r.length));let u=tt([r,a.relativePath]),p=t.concat(a);i.children&&i.children.length>0&&(be(i.index!==!0,"Index routes must not have child routes. Please remove "+('all child routes from route path "'+u+'".')),Lp(i.children,n,p,u)),!(i.path==null&&!i.index)&&n.push({path:u,score:Vh(u,i.index),routesMeta:p})};return e.forEach((i,l)=>{var s;if(i.path===""||!((s=i.path)!=null&&s.includes("?")))o(i,l);else for(let a of Op(i.path))o(i,l,a)}),n}function Op(e){let n=e.split("/");if(n.length===0)return[];let[t,...r]=n,o=t.endsWith("?"),i=t.replace(/\?$/,"");if(r.length===0)return o?[i,""]:[i];let l=Op(r.join("/")),s=[];return s.push(...l.map(a=>a===""?i:[i,a].join("/"))),o&&s.push(...l),s.map(a=>e.startsWith("/")&&a===""?"/":a)}function Ah(e){e.sort((n,t)=>n.score!==t.score?t.score-n.score:Kh(n.routesMeta.map(r=>r.childrenIndex),t.routesMeta.map(r=>r.childrenIndex)))}const Wh=/^:[\w-]+$/,Hh=3,Fh=2,Bh=1,Uh=10,Gh=-2,qu=e=>e==="*";function Vh(e,n){let t=e.split("/"),r=t.length;return t.some(qu)&&(r+=Gh),n&&(r+=Fh),t.filter(o=>!qu(o)).reduce((o,i)=>o+(Wh.test(i)?Hh:i===""?Bh:Uh),r)}function Kh(e,n){return e.length===n.length&&e.slice(0,-1).every((r,o)=>r===n[o])?e[e.length-1]-n[n.length-1]:0}function Qh(e,n,t){let{routesMeta:r}=e,o={},i="/",l=[];for(let s=0;s<r.length;++s){let a=r[s],u=s===r.length-1,p=i==="/"?n:n.slice(i.length)||"/",c=Yh({path:a.relativePath,caseSensitive:a.caseSensitive,end:u},p),m=a.route;if(!c)return null;Object.assign(o,c.params),l.push({params:o,pathname:tt([i,c.pathname]),pathnameBase:ey(tt([i,c.pathnameBase])),route:m}),c.pathnameBase!=="/"&&(i=tt([i,c.pathnameBase]))}return l}function Yh(e,n){typeof e=="string"&&(e={path:e,caseSensitive:!1,end:!0});let[t,r]=qh(e.path,e.caseSensitive,e.end),o=n.match(t);if(!o)return null;let i=o[0],l=i.replace(/(.)\/+$/,"$1"),s=o.slice(1);return{params:r.reduce((u,p,c)=>{let{paramName:m,isOptional:g}=p;if(m==="*"){let w=s[c]||"";l=i.slice(0,i.length-w.length).replace(/(.)\/+$/,"$1")}const x=s[c];return g&&!x?u[m]=void 0:u[m]=(x||"").replace(/%2F/g,"/"),u},{}),pathname:i,pathnameBase:l,pattern:e}}function qh(e,n,t){n===void 0&&(n=!1),t===void 0&&(t=!0),pa(e==="*"||!e.endsWith("*")||e.endsWith("/*"),'Route path "'+e+'" will be treated as if it were '+('"'+e.replace(/\*$/,"/*")+'" because the `*` character must ')+"always follow a `/` in the pattern. To get rid of this warning, "+('please change the route path to "'+e.replace(/\*$/,"/*")+'".'));let r=[],o="^"+e.replace(/\/*\*?$/,"").replace(/^\/*/,"/").replace(/[\\.*+^${}|()[\]]/g,"\\$&").replace(/\/:([\w-]+)(\?)?/g,(l,s,a)=>(r.push({paramName:s,isOptional:a!=null}),a?"/?([^\\/]+)?":"/([^\\/]+)"));return e.endsWith("*")?(r.push({paramName:"*"}),o+=e==="*"||e==="/*"?"(.*)$":"(?:\\/(.+)|\\/*)$"):t?o+="\\/*$":e!==""&&e!=="/"&&(o+="(?:(?=\\/|$))"),[new RegExp(o,n?void 0:"i"),r]}function Xh(e){try{return e.split("/").map(n=>decodeURIComponent(n).replace(/\//g,"%2F")).join("/")}catch(n){return pa(!1,'The URL path "'+e+'" could not be decoded because it is is a malformed URL segment. This is probably due to a bad percent '+("encoding ("+n+").")),e}}function ma(e,n){if(n==="/")return e;if(!e.toLowerCase().startsWith(n.toLowerCase()))return null;let t=n.endsWith("/")?n.length-1:n.length,r=e.charAt(t);return r&&r!=="/"?null:e.slice(t)||"/"}function Jh(e,n){n===void 0&&(n="/");let{pathname:t,search:r="",hash:o=""}=typeof e=="string"?Mt(e):e,i;return t?(t=Dp(t),t.startsWith("/")?i=Xu(t.substring(1),"/"):i=Xu(t,n)):i=n,{pathname:i,search:ny(r),hash:ty(o)}}function Xu(e,n){let t=n.replace(/\/+$/,"").split("/");return e.split("/").forEach(o=>{o===".."?t.length>1&&t.pop():o!=="."&&t.push(o)}),t.length>1?t.join("/"):"/"}function fl(e,n,t,r){return"Cannot include a '"+e+"' character in a manually specified "+("`to."+n+"` field ["+JSON.stringify(r)+"].  Please separate it out to the ")+("`to."+t+"` field. Alternatively you may provide the full path as ")+'a string in <Link to="..."> and the router will parse it for you.'}function Zh(e){return e.filter((n,t)=>t===0||n.route.path&&n.route.path.length>0)}function fa(e,n){let t=Zh(e);return n?t.map((r,o)=>o===t.length-1?r.pathname:r.pathnameBase):t.map(r=>r.pathnameBase)}function ga(e,n,t,r){r===void 0&&(r=!1);let o;typeof e=="string"?o=Mt(e):(o=no({},e),be(!o.pathname||!o.pathname.includes("?"),fl("?","pathname","search",o)),be(!o.pathname||!o.pathname.includes("#"),fl("#","pathname","hash",o)),be(!o.search||!o.search.includes("#"),fl("#","search","hash",o)));let i=e===""||o.pathname==="",l=i?"/":o.pathname,s;if(l==null)s=t;else{let c=n.length-1;if(!r&&l.startsWith("..")){let m=l.split("/");for(;m[0]==="..";)m.shift(),c-=1;o.pathname=m.join("/")}s=c>=0?n[c]:"/"}let a=Jh(o,s),u=l&&l!=="/"&&l.endsWith("/"),p=(i||l===".")&&t.endsWith("/");return!a.pathname.endsWith("/")&&(u||p)&&(a.pathname+="/"),a}const Dp=e=>e.replace(/\/\/+/g,"/"),tt=e=>Dp(e.join("/")),ey=e=>e.replace(/\/+$/,"").replace(/^\/*/,"/"),ny=e=>!e||e==="?"?"":e.startsWith("?")?e:"?"+e,ty=e=>!e||e==="#"?"":e.startsWith("#")?e:"#"+e;function ry(e){return e!=null&&typeof e.status=="number"&&typeof e.statusText=="string"&&typeof e.internal=="boolean"&&"data"in e}const zp=["post","put","patch","delete"];new Set(zp);const oy=["get",...zp];new Set(oy);/**
 * React Router v6.30.6
 *
 * Copyright (c) Remix Software Inc.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE.md file in the root directory of this source tree.
 *
 * @license MIT
 */function to(){return to=Object.assign?Object.assign.bind():function(e){for(var n=1;n<arguments.length;n++){var t=arguments[n];for(var r in t)({}).hasOwnProperty.call(t,r)&&(e[r]=t[r])}return e},to.apply(null,arguments)}const ha=y.createContext(null),iy=y.createContext(null),at=y.createContext(null),Li=y.createContext(null),Ln=y.createContext({outlet:null,matches:[],isDataRoute:!1}),Ap=y.createContext(null);function ly(e,n){let{relative:t}=n===void 0?{}:n;cr()||be(!1);let{basename:r,navigator:o}=y.useContext(at),{hash:i,pathname:l,search:s}=Fp(e,{relative:t}),a=l;return r!=="/"&&(a=l==="/"?r:tt([r,l])),o.createHref({pathname:a,search:s,hash:i})}function cr(){return y.useContext(Li)!=null}function dr(){return cr()||be(!1),y.useContext(Li).location}function Wp(e){y.useContext(at).static||y.useLayoutEffect(e)}function Hp(){let{isDataRoute:e}=y.useContext(Ln);return e?wy():sy()}function sy(){cr()||be(!1);let e=y.useContext(ha),{basename:n,future:t,navigator:r}=y.useContext(at),{matches:o}=y.useContext(Ln),{pathname:i}=dr(),l=JSON.stringify(fa(o,t.v7_relativeSplatPath)),s=y.useRef(!1);return Wp(()=>{s.current=!0}),y.useCallback(function(u,p){if(p===void 0&&(p={}),!s.current)return;if(typeof u=="number"){r.go(u);return}let c=ga(u,JSON.parse(l),i,p.relative==="path");e==null&&n!=="/"&&(c.pathname=c.pathname==="/"?n:tt([n,c.pathname])),(p.replace?r.replace:r.push)(c,p.state,p)},[n,r,l,i,e])}function ay(){let{matches:e}=y.useContext(Ln),n=e[e.length-1];return n?n.params:{}}function Fp(e,n){let{relative:t}=n===void 0?{}:n,{future:r}=y.useContext(at),{matches:o}=y.useContext(Ln),{pathname:i}=dr(),l=JSON.stringify(fa(o,r.v7_relativeSplatPath));return y.useMemo(()=>ga(e,JSON.parse(l),i,t==="path"),[e,l,i,t])}function uy(e,n){return cy(e,n)}function cy(e,n,t,r){cr()||be(!1);let{navigator:o}=y.useContext(at),{matches:i}=y.useContext(Ln),l=i[i.length-1],s=l?l.params:{};l&&l.pathname;let a=l?l.pathnameBase:"/";l&&l.route;let u=dr(),p;if(n){var c;let S=typeof n=="string"?Mt(n):n;a==="/"||(c=S.pathname)!=null&&c.startsWith(a)||be(!1),p=S}else p=u;let m=p.pathname||"/",g=m;if(a!=="/"){let S=a.replace(/^\//,"").split("/");g="/"+m.replace(/^\//,"").split("/").slice(S.length).join("/")}let x=Dh(e,{pathname:g}),w=gy(x&&x.map(S=>Object.assign({},S,{params:Object.assign({},s,S.params),pathname:tt([a,o.encodeLocation?o.encodeLocation(S.pathname).pathname:S.pathname]),pathnameBase:S.pathnameBase==="/"?a:tt([a,o.encodeLocation?o.encodeLocation(S.pathnameBase).pathname:S.pathnameBase])})),i,t,r);return n&&w?y.createElement(Li.Provider,{value:{location:to({pathname:"/",search:"",hash:"",state:null,key:"default"},p),navigationType:Kn.Pop}},w):w}function dy(){let e=xy(),n=ry(e)?e.status+" "+e.statusText:e instanceof Error?e.message:JSON.stringify(e),t=e instanceof Error?e.stack:null,o={padding:"0.5rem",backgroundColor:"rgba(200,200,200, 0.5)"};return y.createElement(y.Fragment,null,y.createElement("h2",null,"Unexpected Application Error!"),y.createElement("h3",{style:{fontStyle:"italic"}},n),t?y.createElement("pre",{style:o},t):null,null)}const py=y.createElement(dy,null);class my extends y.Component{constructor(n){super(n),this.state={location:n.location,revalidation:n.revalidation,error:n.error}}static getDerivedStateFromError(n){return{error:n}}static getDerivedStateFromProps(n,t){return t.location!==n.location||t.revalidation!=="idle"&&n.revalidation==="idle"?{error:n.error,location:n.location,revalidation:n.revalidation}:{error:n.error!==void 0?n.error:t.error,location:t.location,revalidation:n.revalidation||t.revalidation}}componentDidCatch(n,t){console.error("React Router caught the following error during render",n,t)}render(){return this.state.error!==void 0?y.createElement(Ln.Provider,{value:this.props.routeContext},y.createElement(Ap.Provider,{value:this.state.error,children:this.props.component})):this.props.children}}function fy(e){let{routeContext:n,match:t,children:r}=e,o=y.useContext(ha);return o&&o.static&&o.staticContext&&(t.route.errorElement||t.route.ErrorBoundary)&&(o.staticContext._deepestRenderedBoundaryId=t.route.id),y.createElement(Ln.Provider,{value:n},r)}function gy(e,n,t,r){var o;if(n===void 0&&(n=[]),t===void 0&&(t=null),r===void 0&&(r=null),e==null){var i;if(!t)return null;if(t.errors)e=t.matches;else if((i=r)!=null&&i.v7_partialHydration&&n.length===0&&!t.initialized&&t.matches.length>0)e=t.matches;else return null}let l=e,s=(o=t)==null?void 0:o.errors;if(s!=null){let p=l.findIndex(c=>c.route.id&&(s==null?void 0:s[c.route.id])!==void 0);p>=0||be(!1),l=l.slice(0,Math.min(l.length,p+1))}let a=!1,u=-1;if(t&&r&&r.v7_partialHydration)for(let p=0;p<l.length;p++){let c=l[p];if((c.route.HydrateFallback||c.route.hydrateFallbackElement)&&(u=p),c.route.id){let{loaderData:m,errors:g}=t,x=c.route.loader&&m[c.route.id]===void 0&&(!g||g[c.route.id]===void 0);if(c.route.lazy||x){a=!0,u>=0?l=l.slice(0,u+1):l=[l[0]];break}}}return l.reduceRight((p,c,m)=>{let g,x=!1,w=null,S=null;t&&(g=s&&c.route.id?s[c.route.id]:void 0,w=c.route.errorElement||py,a&&(u<0&&m===0?(Sy("route-fallback"),x=!0,S=null):u===m&&(x=!0,S=c.route.hydrateFallbackElement||null)));let h=n.concat(l.slice(0,m+1)),f=()=>{let v;return g?v=w:x?v=S:c.route.Component?v=y.createElement(c.route.Component,null):c.route.element?v=c.route.element:v=p,y.createElement(fy,{match:c,routeContext:{outlet:p,matches:h,isDataRoute:t!=null},children:v})};return t&&(c.route.ErrorBoundary||c.route.errorElement||m===0)?y.createElement(my,{location:t.location,revalidation:t.revalidation,component:w,error:g,children:f(),routeContext:{outlet:null,matches:h,isDataRoute:!0}}):f()},null)}var Bp=function(e){return e.UseBlocker="useBlocker",e.UseRevalidator="useRevalidator",e.UseNavigateStable="useNavigate",e}(Bp||{}),Up=function(e){return e.UseBlocker="useBlocker",e.UseLoaderData="useLoaderData",e.UseActionData="useActionData",e.UseRouteError="useRouteError",e.UseNavigation="useNavigation",e.UseRouteLoaderData="useRouteLoaderData",e.UseMatches="useMatches",e.UseRevalidator="useRevalidator",e.UseNavigateStable="useNavigate",e.UseRouteId="useRouteId",e}(Up||{});function hy(e){let n=y.useContext(ha);return n||be(!1),n}function yy(e){let n=y.useContext(iy);return n||be(!1),n}function vy(e){let n=y.useContext(Ln);return n||be(!1),n}function Gp(e){let n=vy(),t=n.matches[n.matches.length-1];return t.route.id||be(!1),t.route.id}function xy(){var e;let n=y.useContext(Ap),t=yy(),r=Gp();return n!==void 0?n:(e=t.errors)==null?void 0:e[r]}function wy(){let{router:e}=hy(Bp.UseNavigateStable),n=Gp(Up.UseNavigateStable),t=y.useRef(!1);return Wp(()=>{t.current=!0}),y.useCallback(function(o,i){i===void 0&&(i={}),t.current&&(typeof o=="number"?e.navigate(o):e.navigate(o,to({fromRouteId:n},i)))},[e,n])}const Ju={};function Sy(e,n,t){Ju[e]||(Ju[e]=!0)}function by(e,n){e==null||e.v7_startTransition,e==null||e.v7_relativeSplatPath}function ds(e){let{to:n,replace:t,state:r,relative:o}=e;cr()||be(!1);let{future:i,static:l}=y.useContext(at),{matches:s}=y.useContext(Ln),{pathname:a}=dr(),u=Hp(),p=ga(n,fa(s,i.v7_relativeSplatPath),a,o==="path"),c=JSON.stringify(p);return y.useEffect(()=>u(JSON.parse(c),{replace:t,state:r,relative:o}),[u,c,o,t,r]),null}function Tr(e){be(!1)}function ky(e){let{basename:n="/",children:t=null,location:r,navigationType:o=Kn.Pop,navigator:i,static:l=!1,future:s}=e;cr()&&be(!1);let a=n.replace(/^\/*/,"/"),u=y.useMemo(()=>({basename:a,navigator:i,static:l,future:to({v7_relativeSplatPath:!1},s)}),[a,s,i,l]);typeof r=="string"&&(r=Mt(r));let{pathname:p="/",search:c="",hash:m="",state:g=null,key:x="default"}=r,w=y.useMemo(()=>{let S=ma(p,a);return S==null?null:{location:{pathname:S,search:c,hash:m,state:g,key:x},navigationType:o}},[a,p,c,m,g,x,o]);return w==null?null:y.createElement(at.Provider,{value:u},y.createElement(Li.Provider,{children:t,value:w}))}function Py(e){let{children:n,location:t}=e;return uy(ps(n),t)}new Promise(()=>{});function ps(e,n){n===void 0&&(n=[]);let t=[];return y.Children.forEach(e,(r,o)=>{if(!y.isValidElement(r))return;let i=[...n,o];if(r.type===y.Fragment){t.push.apply(t,ps(r.props.children,i));return}r.type!==Tr&&be(!1),!r.props.index||!r.props.children||be(!1);let l={id:r.props.id||i.join("-"),caseSensitive:r.props.caseSensitive,element:r.props.element,Component:r.props.Component,index:r.props.index,path:r.props.path,loader:r.props.loader,action:r.props.action,errorElement:r.props.errorElement,ErrorBoundary:r.props.ErrorBoundary,hasErrorBoundary:r.props.ErrorBoundary!=null||r.props.errorElement!=null,shouldRevalidate:r.props.shouldRevalidate,handle:r.props.handle,lazy:r.props.lazy};r.props.children&&(l.children=ps(r.props.children,i)),t.push(l)}),t}/**
 * React Router DOM v6.30.6
 *
 * Copyright (c) Remix Software Inc.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE.md file in the root directory of this source tree.
 *
 * @license MIT
 */function ms(){return ms=Object.assign?Object.assign.bind():function(e){for(var n=1;n<arguments.length;n++){var t=arguments[n];for(var r in t)({}).hasOwnProperty.call(t,r)&&(e[r]=t[r])}return e},ms.apply(null,arguments)}function Cy(e,n){if(e==null)return{};var t={};for(var r in e)if({}.hasOwnProperty.call(e,r)){if(n.indexOf(r)!==-1)continue;t[r]=e[r]}return t}function _y(e){return!!(e.metaKey||e.altKey||e.ctrlKey||e.shiftKey)}function Ty(e,n){return e.button===0&&(!n||n==="_self")&&!_y(e)}const Ry=["onClick","relative","reloadDocument","replace","state","target","to","preventScrollReset","viewTransition"],$y="6";try{window.__reactRouterVersion=$y}catch{}const My="startTransition",Zu=bf[My];function Iy(e){let{basename:n,children:t,future:r,window:o}=e,i=y.useRef();i.current==null&&(i.current=Eh({window:o,v5Compat:!0}));let l=i.current,[s,a]=y.useState({action:l.action,location:l.location}),{v7_startTransition:u}=r||{},p=y.useCallback(c=>{u&&Zu?Zu(()=>a(c)):a(c)},[a,u]);return y.useLayoutEffect(()=>l.listen(p),[l,p]),y.useEffect(()=>by(r),[r]),y.createElement(ky,{basename:n,children:t,location:s.location,navigationType:s.action,navigator:l,future:r})}const Ny=typeof window<"u"&&typeof window.document<"u"&&typeof window.document.createElement<"u",jy=/^(?:[a-z][a-z0-9+.-]*:|\/\/)/i,fs=y.forwardRef(function(n,t){let{onClick:r,relative:o,reloadDocument:i,replace:l,state:s,target:a,to:u,preventScrollReset:p,viewTransition:c}=n,m=Cy(n,Ry),{basename:g}=y.useContext(at),x,w=!1;if(typeof u=="string"&&jy.test(u)&&(x=u,Ny))try{let v=new URL(window.location.href),b=u.startsWith("//")?new URL(v.protocol+u):new URL(u),C=ma(b.pathname,g);b.origin===v.origin&&C!=null?u=C+b.search+b.hash:w=!0}catch{}let S=ly(u,{relative:o}),h=Ey(u,{replace:l,state:s,target:a,preventScrollReset:p,relative:o,viewTransition:c});function f(v){r&&r(v),v.defaultPrevented||h(v)}return y.createElement("a",ms({},m,{href:x||S,onClick:w||i?r:f,ref:t,target:a}))});var ec;(function(e){e.UseScrollRestoration="useScrollRestoration",e.UseSubmit="useSubmit",e.UseSubmitFetcher="useSubmitFetcher",e.UseFetcher="useFetcher",e.useViewTransitionState="useViewTransitionState"})(ec||(ec={}));var nc;(function(e){e.UseFetcher="useFetcher",e.UseFetchers="useFetchers",e.UseScrollRestoration="useScrollRestoration"})(nc||(nc={}));function Ey(e,n){let{target:t,replace:r,state:o,preventScrollReset:i,relative:l,viewTransition:s}=n===void 0?{}:n,a=Hp(),u=dr(),p=Fp(e,{relative:l});return y.useCallback(c=>{if(Ty(c,t)){c.preventDefault();let m=r!==void 0?r:vi(u)===vi(p);a(e,{replace:m,state:o,preventScrollReset:i,relative:l,viewTransition:s})}},[u,a,p,r,o,t,e,i,l,s])}const Ly="https://github.com/frankvane/vane-components";class Oy extends Tt.Component{constructor(){super(...arguments);Da(this,"state",{error:null})}static getDerivedStateFromError(t){return{error:t}}render(){var t;return this.state.error?d.jsxs("div",{className:"crash",role:"alert",children:[d.jsx("h3",{children:"这个页面炸了"}),d.jsx("pre",{children:String(((t=this.state.error)==null?void 0:t.stack)||this.state.error)}),d.jsx("button",{type:"button",onClick:()=>this.setState({error:null}),children:"重试"})]}):this.props.children}}function Vp(e,n){return String(e.entries.indexOf(n)+1).padStart(2,"0")}function Dy({demos:e,pathname:n}){var a;const{groups:t,entries:r,label:o}=e,i=(a=r.find(u=>n===`/demo/${u.meta.slug}`))==null?void 0:a.meta.group,[l,s]=y.useState(()=>{var p;const u=(p=t[0])==null?void 0:p.key;return Object.fromEntries(t.map(c=>[c.key,c.key===(i??u)]))});return y.useEffect(()=>{i&&s(u=>u[i]?u:{...u,[i]:!0})},[i]),d.jsxs("div",{className:"nav-section",children:[d.jsxs("div",{className:"nav-section-head",children:[d.jsx("span",{children:o}),d.jsxs("code",{children:[r.length," demos"]})]}),t.map(u=>{const p=r.filter(m=>m.meta.group===u.key);if(p.length===0)return null;const c=l[u.key]??!1;return d.jsxs("div",{className:"nav-group",children:[d.jsxs("button",{type:"button",className:`nav-group-head${i===u.key?" is-current":""}`,onClick:()=>s(m=>({...m,[u.key]:!c})),"aria-expanded":c,children:[d.jsx("span",{className:`nav-caret${c?" is-open":""}`,"aria-hidden":!0,children:"▸"}),u.label,d.jsx("code",{children:p.length})]}),c?d.jsx("div",{className:"nav-list",children:p.map(m=>d.jsxs(fs,{to:`/demo/${m.meta.slug}`,className:`nav-sub${n===`/demo/${m.meta.slug}`?" is-active":""}`,children:[d.jsx("em",{"aria-hidden":!0,children:Vp(e,m)}),m.meta.title]},m.meta.slug))}):null]},u.key)})]})}function zy({demos:e}){var s;const{slug:n}=ay(),{entries:t,detail:r}=e,o=n?t.find(a=>a.meta.slug===n):void 0,i=(s=t[0])==null?void 0:s.meta.slug;if(!o)return d.jsx(ds,{to:i?`/demo/${i}`:"/",replace:!0});const l=t.indexOf(o)+1;return d.jsx(Tt.Fragment,{children:r(o,l)},o.meta.slug)}function Ay({config:e}){var c,m;const{pathname:n}=dr(),[t,r]=y.useState(!1),[o,i]=y.useState(!1);y.useEffect(()=>r(!1),[n]);const l=y.useCallback(()=>i(g=>!g),[]);y.useEffect(()=>{const g=x=>{const w=x.target,S=w&&(w.tagName==="INPUT"||w.tagName==="TEXTAREA"||w.isContentEditable);x.key==="Escape"&&r(!1),!S&&(x.key==="g"||x.key==="G")&&!x.metaKey&&!x.ctrlKey&&i(h=>!h)};return window.addEventListener("keydown",g),()=>window.removeEventListener("keydown",g)},[]);const s=e.demos,a=(c=s.entries[0])==null?void 0:c.meta.slug,u=y.useMemo(()=>{if(!n.startsWith("/demo"))return e.crumb(n);const g=n.replace(/^\/demo\/?/,""),x=s.entries.find(w=>w.meta.slug===g);return x?`demo ${Vp(s,x)} · ${x.meta.title}`:"demo · 逐项示例"},[n,e,s]),p=y.useMemo(()=>e.nav.map((g,x)=>({...g,no:String(x+1).padStart(2,"0")})),[e.nav]);return d.jsxs("div",{className:`shell${t?" is-nav-open":""}${o?" is-guides":""}`,children:[d.jsx("a",{className:"skip-link",href:"#main",onClick:g=>{g.preventDefault();const x=document.getElementById("main");x==null||x.setAttribute("tabindex","-1"),x==null||x.focus(),x==null||x.scrollIntoView({block:"start"})},children:"跳到内容"}),d.jsxs("aside",{className:"side","aria-label":"站点导航",children:[d.jsxs(fs,{to:"/",className:"brand",children:[d.jsx("span",{className:"brand-mark","aria-hidden":!0,children:e.brand}),d.jsxs("span",{children:[d.jsx("strong",{children:e.pkg}),d.jsx("em",{children:e.subtitle})]})]}),d.jsxs("nav",{children:[p.map(g=>d.jsxs(fs,{to:g.to,className:`nav-item${n===g.to?" is-active":""}`,"aria-current":n===g.to?"page":void 0,children:[d.jsx("em",{"aria-hidden":!0,children:g.no}),d.jsx("span",{children:g.label}),g.hint?d.jsx("code",{children:g.hint}):null]},g.to)),d.jsx(Dy,{demos:e.demos,pathname:n})]}),d.jsxs("div",{className:"side-foot",children:[d.jsx("p",{children:e.footer[0]}),d.jsx("p",{className:"muted",children:e.footer[1]})]})]}),d.jsx("button",{type:"button",className:"scrim","aria-label":"关闭导航",tabIndex:t?0:-1,onClick:()=>r(!1)}),d.jsxs("div",{className:"main",id:"main",children:[d.jsxs("header",{className:"topbar",children:[d.jsx("button",{type:"button",className:"nav-toggle","aria-label":t?"关闭导航":"打开导航","aria-expanded":t,onClick:()=>r(g=>!g),children:d.jsx("span",{"aria-hidden":!0})}),d.jsx("span",{className:"crumb",children:u}),d.jsxs("div",{className:"topbar-right",children:[(m=e.stats)==null?void 0:m.map(g=>d.jsxs("span",{className:"topbar-stat",title:g.title,children:[d.jsx("b",{children:g.value})," ",g.label]},g.label)),d.jsxs("button",{type:"button",className:"topbar-btn","aria-pressed":o,onClick:l,title:"显示栏位参考线（快捷键 G）",children:[d.jsx("i",{"aria-hidden":!0}),"guides"]}),d.jsx("a",{className:"topbar-link",href:e.sourceUrl??Ly,target:"_blank",rel:"noreferrer",children:"source ↗"})]})]}),d.jsx("div",{className:"guides","aria-hidden":!0}),d.jsx(y.Suspense,{fallback:d.jsx("div",{className:"loading",children:"loading modules…"}),children:d.jsx(Oy,{children:d.jsxs(Py,{children:[e.routes.map(g=>d.jsx(Tr,{path:g.path,element:g.element},g.path)),d.jsx(Tr,{path:"/demo",element:d.jsx(ds,{to:a?`/demo/${a}`:"/",replace:!0})}),d.jsx(Tr,{path:"/demo/:slug",element:d.jsx(zy,{demos:e.demos})}),d.jsx(Tr,{path:"*",element:d.jsx(ds,{to:"/",replace:!0})})]})})})]})]})}function Wy({config:e}){return d.jsx(Iy,{children:d.jsx(Ay,{config:e})})}const Hy="modulepreload",Fy=function(e,n){return new URL(e,n).href},tc={},ya=function(n,t,r){let o=Promise.resolve();if(t&&t.length>0){const l=document.getElementsByTagName("link"),s=document.querySelector("meta[property=csp-nonce]"),a=(s==null?void 0:s.nonce)||(s==null?void 0:s.getAttribute("nonce"));o=Promise.allSettled(t.map(u=>{if(u=Fy(u,r),u in tc)return;tc[u]=!0;const p=u.endsWith(".css"),c=p?'[rel="stylesheet"]':"";if(!!r)for(let x=l.length-1;x>=0;x--){const w=l[x];if(w.href===u&&(!p||w.rel==="stylesheet"))return}else if(document.querySelector(`link[href="${u}"]${c}`))return;const g=document.createElement("link");if(g.rel=p?"stylesheet":Hy,p||(g.as="script"),g.crossOrigin="",g.href=u,a&&g.setAttribute("nonce",a),document.head.appendChild(g),p)return new Promise((x,w)=>{g.addEventListener("load",x),g.addEventListener("error",()=>w(new Error(`Unable to preload CSS for ${u}`)))})}))}function i(l){const s=new Event("vite:preloadError",{cancelable:!0});if(s.payload=l,window.dispatchEvent(s),!s.defaultPrevented)throw l}return o.then(l=>{for(const s of l||[])s.status==="rejected"&&i(s.reason);return n().catch(i)})};function By(e=0){return typeof e=="number"?{top:e,right:e,bottom:e,left:e}:{top:e.top??0,right:e.right??0,bottom:e.bottom??0,left:e.left??0}}function Uy(e,n,t){return typeof e=="number"&&Number.isFinite(e)&&e>0?e:n&&n>0?n:t&&t>0?t:0}function Gy(e){var b,C,j;const{heights:n,columnGap:t,rowGap:r,alignmentMode:o="shortest",estimateHeight:i,minItemHeight:l,hooks:s}=e,a=By(e.padding),u=e.containerWidth,p=(b=s==null?void 0:s.calculateColumns)==null?void 0:b.call(s,e.columns),c=Math.max(1,Math.round(typeof p=="number"&&Number.isFinite(p)?p:e.columns)),g=(u-a.left-a.right-t*(c-1))/c,x=(C=s==null?void 0:s.calculateColumnWidth)==null?void 0:C.call(s,g,c,u),w=typeof x=="number"&&Number.isFinite(x)?x:g,S=Array(c).fill(a.top),h=Array(c).fill(0),f=new Map;let v=0;if(n.length===0)return{columns:c,columnWidth:w,padding:a,columnHeights:S,totalHeight:a.top+a.bottom,positions:f,estimatedCount:0};for(let M=0;M<n.length;M++){const E=n[M],k=Uy(E,i,l);if(k===0)continue;typeof E=="number"&&E>0||(v+=1);let P=0;if(o==="sequential")P=M%c;else if(o==="balanced"){let W=h[0];for(let V=1;V<c;V++)h[V]<W&&(W=h[V],P=V)}else{let W=S[0];for(let V=1;V<S.length;V++)S[V]<W&&(W=S[V],P=V)}let L={x:a.left+P*(w+t),y:S[P],width:w,height:k,column:P,row:Math.floor(M/c)};const K=(j=s==null?void 0:s.calculateItemPosition)==null?void 0:j.call(s,M,k,L);if(K){const W={...L,...K};K.column!==void 0&&K.x===void 0&&(W.x=a.left+Math.min(Math.max(0,W.column),c-1)*(w+t)),L=W}f.set(M,L);const A=Math.min(Math.max(0,L.column),S.length-1);S[A]=L.y+L.height+r,h[A]+=1}return{columns:c,columnWidth:w,padding:a,columnHeights:S,totalHeight:Math.max(...S)+a.bottom,positions:f,estimatedCount:v}}function Vy(e,n,t="start",r=0){let o=e.y+r;return t==="center"?o-=n/2-e.height/2:t==="end"&&(o-=n-e.height),Math.max(0,o)}const Ky=8;function Qy(e,n,t=.5){const r=[];for(const l of e)Number.isFinite(l)&&l>0&&r.push(l);if(r.length<Ky)return n;r.sort((l,s)=>l-s);const o=Math.min(1,Math.max(0,t)),i=Math.min(r.length-1,Math.round(o*(r.length-1)));return Math.max(1,Math.ceil(r[i]))}function Yy(e,n,t,r,o=1){if(n<=0)return{start:0,end:-1,hiddenCount:0};if(e.size===0){const c=Math.max(1,Math.ceil(r/240)+2);return{start:0,end:Math.min(n-1,c-1),hiddenCount:0}}const i=Math.max(0,r*o),l=t-i,s=t+Math.max(r,1)+i;let a=Number.POSITIVE_INFINITY,u=-1;if(e.forEach((c,m)=>{const g=c.y;c.y+c.height>l&&g<s&&(m<a&&(a=m),m>u&&(u=m))}),u<0){let c=0,m=Number.POSITIVE_INFINITY;e.forEach((x,w)=>{const S=Math.abs(x.y-t);S<m&&(m=S,c=w)});const g=Math.max(1,Math.ceil(r/240)+2);a=Math.max(0,c-g),u=Math.min(n-1,c+g)}a=Math.max(0,a),u=Math.min(n-1,u),u<a&&(u=a);const p=u-a+1;return{start:a,end:u,hiddenCount:Math.max(0,n-p)}}function qy(e){return e?e===!0?{overscan:1,estimateHeight:240,dynamicHeights:!0,adaptiveEstimate:!0,estimateQuantile:.5}:{overscan:e.overscan??1,estimateHeight:e.estimateHeight??240,dynamicHeights:e.dynamicHeights??!0,adaptiveEstimate:e.adaptiveEstimate??!0,estimateQuantile:e.estimateQuantile??.5}:null}function rc(e,n,t,r){const o=n.y,i=n.y+n.height,l=t+r,s=Math.max(0,Math.min(l,i)-Math.max(t,o));return{index:e,isVisible:s>0,visibleRatio:n.height>0?Math.min(1,s/n.height):0,isAboveViewport:i<=t,isBelowViewport:o>=l}}const Xy=Tt.memo(function({index:n,item:t,position:r,useTransform:o,itemStyle:i,itemClassName:l,renderItem:s,onClick:a,itemRef:u}){const p=r?o?{position:"absolute",transform:`translate(${r.x}px, ${r.y}px)`,width:r.width,boxSizing:"border-box"}:{position:"absolute",left:r.x,top:r.y,width:r.width,boxSizing:"border-box"}:{position:"absolute",opacity:0,pointerEvents:"none"};return d.jsx("div",{ref:u,style:{...p,...i},className:l,onClick:a?c=>a(n,t,c):void 0,"data-index":n,"data-column":r==null?void 0:r.column,children:s(t,n)})}),oc=y.forwardRef(function(n,t){const{items:r=[],renderItem:o,keyExtractor:i=(T,I)=>I,columns:l=3,gap:s=16,rowGap:a,columnGap:u,alignmentMode:p="shortest",padding:c=0,containerStyle:m,containerClassName:g,itemStyle:x,itemClassName:w,useTransform:S=!0,throttleDelay:h=16,debounceDelay:f=150,reachBottomOffset:v=100,minItemHeight:b=48,scrollAnchor:C=!0,virtualize:j,layoutHooks:M,onMount:E,onUnmount:k,onBeforeLayout:P,onLayout:L,onLayoutComplete:K,onItemMount:A,onItemUnmount:W,onItemEnterViewport:V,onItemLeaveViewport:F,onScroll:re,onResize:$,onReachBottom:D,onItemClick:U,children:se,containerRefExternal:ae,itemRefsExternal:oe,debug:Z=!1}=n,R=y.useRef(null),N=ae??R,G=y.useRef(new Map),q=oe??G,H=y.useRef(new Map),te=y.useRef(new Map),xe=y.useRef(null),Pe=y.useRef(),ie=y.useRef(),en=y.useRef(null),ze=y.useRef(null),pr=y.useRef(0),ut=y.useRef(!1),On=y.useRef(0),B=y.useRef(!1),ue=y.useRef(""),Dn=y.useRef(void 0),ct=y.useRef(async()=>{}),bn=y.useRef(!1),dt=y.useRef(!1),mr=y.useRef(new Set),It=y.useRef(r);It.current=r;const kn=y.useRef(new Map),Sa=y.useRef(null),Oi=y.useRef(0),ba=y.useRef(i);ba.current=i;const ka=y.useRef(D);ka.current=D;const ao=a??s,Nt=u??s,Pa=typeof c=="number"?c:(c==null?void 0:c.top)??0,Ca=typeof c=="number"?c:(c==null?void 0:c.right)??0,_a=typeof c=="number"?c:(c==null?void 0:c.bottom)??0,Ta=typeof c=="number"?c:(c==null?void 0:c.left)??0,pt=y.useMemo(()=>({top:Pa,right:Ca,bottom:_a,left:Ta}),[Pa,Ca,_a,Ta]),nn=y.useCallback(T=>{const I=It.current[T];if(I===void 0)return`#${T}`;try{return String(ba.current(I,T))}catch{return`#${T}`}},[]),Ra=y.useCallback(()=>{const T=It.current;let I=String(T.length);for(let z=0;z<T.length;z++)I+=`|${nn(z)}`;return I},[nn]),$a=JSON.stringify(j??null),Q=y.useMemo(()=>qy(JSON.parse($a)??void 0),[$a]),[mt,Ym]=y.useState(()=>({columns:l,columnWidth:0,gap:Nt,columnHeights:Array(l).fill(0),totalHeight:0,containerWidth:0,containerHeight:0})),[uo,qm]=y.useState(()=>new Map),[zn,Ma]=y.useState({scrollTop:0,scrollLeft:0,scrollHeight:0,scrollWidth:0,clientHeight:0,clientWidth:0,isScrolling:!1,direction:null}),[,Xm]=y.useState({});kn.current=uo;const Di=y.useRef(mt),Ia=y.useCallback(T=>{const I=kn.current;if(I.size===0)return null;const z=T.scrollTop;if(z<=0)return null;let X=-1,de=Number.POSITIVE_INFINITY,je=-1,ee=Number.NEGATIVE_INFINITY;I.forEach((Te,Pn)=>{Te.y>=z&&Te.y<de&&(de=Te.y,X=Pn),Te.y<=z&&Te.y+Te.height>z&&Te.y>ee&&(ee=Te.y,je=Pn)});const fe=X>=0?X:je,An=I.get(fe);return An?{index:fe,offset:An.y-z}:null},[]),Na=y.useRef(""),jt=y.useRef(null),co=y.useCallback(()=>{const T=ka.current;if(!T)return;const I=N.current;if(!I)return;const{scrollTop:z,scrollHeight:X,clientHeight:de}=I,je=X-(z+de);if(je>=v)return;const ee=`${z}|${X}|${de}`;ee!==Na.current&&(Na.current=ee,T(je))},[N,v]),ja=y.useCallback(()=>{jt.current==null&&(jt.current=window.setTimeout(()=>{jt.current=null,co()},0))},[co]),Et=y.useCallback(async()=>{const T=N.current;if(!T)return;const I=`${l}|${Nt}|${ao}|${pt.top},${pt.right},${pt.bottom},${pt.left}|${p}|${(Q==null?void 0:Q.estimateHeight)??""}|${(Q==null?void 0:Q.adaptiveEstimate)??""}|${(Q==null?void 0:Q.estimateQuantile)??""}`;if(ut.current){(I!==ue.current||M!==Dn.current)&&(B.current=!0);return}ut.current=!0,ue.current=I,Dn.current=M,dt.current=!1;const z=Ia(T);try{if(await(P==null?void 0:P())===!1)return;Z&&console.time("[WaterfallCore] layout"),L==null||L();const de=T.clientWidth,je=It.current.map((Te,Pn)=>{const Wi=q.current.get(Pn),Hi=(Wi==null?void 0:Wi.offsetHeight)??0;return Hi>0?(H.current.set(nn(Pn),Hi),Hi):H.current.get(nn(Pn))??0});let ee;if(Q)if(Q.adaptiveEstimate===!1)ee=Q.estimateHeight;else{const Te=Qy(H.current.values(),Q.estimateHeight??240,Q.estimateQuantile);Math.abs(Te-On.current)>8&&(On.current=Te),ee=On.current||Te}const fe=Gy({heights:je,columns:l,containerWidth:de,columnGap:Nt,rowGap:ao,padding:pt,alignmentMode:p,estimateHeight:ee,minItemHeight:b,hooks:M}),An={columns:fe.columns,columnWidth:fe.columnWidth,gap:Nt,columnHeights:fe.columnHeights,totalHeight:fe.totalHeight,containerWidth:de,containerHeight:T.clientHeight};if(Di.current=An,kn.current=fe.positions,Ym(An),qm(fe.positions),bn.current=!0,Z&&(console.timeEnd("[WaterfallCore] layout"),fe.estimatedCount>0&&console.debug(`[WaterfallCore] ${fe.estimatedCount} 项按估值占位（estimateHeight=${ee}）`)),K==null||K(),z&&C){const Te=fe.positions.get(z.index);if(Te){const Pn=Te.y-z.offset-T.scrollTop;Math.abs(Pn)>=1&&(Oi.current+=Pn)}}ja()}catch(X){console.warn("[vane-waterfall] 布局过程出错，本次布局已跳过",X)}finally{ut.current=!1,B.current&&(B.current=!1,ct.current())}},[l,Nt,ao,pt,p,Q==null?void 0:Q.estimateHeight,M,P,L,K,Z,b,C,N,q,nn,Ia,ja]);y.useLayoutEffect(()=>{const T=Oi.current;if(!T)return;Oi.current=0;const I=N.current;I&&(I.scrollTop+=T)}),ct.current=Et;const po=y.useCallback(()=>{ie.current&&window.clearTimeout(ie.current),ie.current=window.setTimeout(()=>{ct.current()},f)},[f]),Ea=y.useCallback(()=>{en.current==null&&(en.current=requestAnimationFrame(()=>{en.current=null,ct.current()}))},[]),La=y.useCallback(T=>{ze.current==null&&(ze.current=requestAnimationFrame(()=>{ze.current=null;const I=N.current;I&&Ma(z=>{const X=I.scrollTop,de=I.scrollLeft,je=X>z.scrollTop?"down":X<z.scrollTop?"up":de>z.scrollLeft?"right":de<z.scrollLeft?"left":z.direction,ee={scrollTop:X,scrollLeft:de,scrollHeight:I.scrollHeight,scrollWidth:I.scrollWidth,clientHeight:I.clientHeight,clientWidth:I.clientWidth,isScrolling:T,direction:je};return z.scrollTop===ee.scrollTop&&z.scrollLeft===ee.scrollLeft&&z.scrollHeight===ee.scrollHeight&&z.clientHeight===ee.clientHeight&&z.isScrolling===ee.isScrolling?z:ee})}))},[N]),Jm=y.useCallback(()=>{const T=N.current;if(!T)return;const I=Date.now();La(!0);const z=T.scrollTop,X=T.clientHeight;if(re==null||re(z,T.scrollLeft),I-pr.current>=h&&(pr.current=I,co(),V||F)){const de=kn.current,je=new Set;de.forEach((ee,fe)=>{Math.max(0,Math.min(z+X,ee.y+ee.height)-Math.max(z,ee.y))>0&&(je.add(fe),mr.current.has(fe)||V==null||V(fe,rc(fe,ee,z,X)))}),mr.current.forEach(ee=>{if(je.has(ee))return;const fe=de.get(ee);fe&&(F==null||F(ee,rc(ee,fe,z,X)))}),mr.current=je}Pe.current&&window.clearTimeout(Pe.current),Pe.current=window.setTimeout(()=>{Ma(de=>({...de,isScrolling:!1}))},f)},[La,re,V,F,h,f,co]),Zm=y.useCallback(()=>{const T=N.current;T&&($==null||$(T.clientWidth,T.clientHeight),po())},[$,po,N]);y.useEffect(()=>{E==null||E(),bn.current||Et();const T=N.current;return T&&typeof ResizeObserver<"u"&&(xe.current=new ResizeObserver(Zm),xe.current.observe(T)),()=>{var I;k==null||k(),(I=xe.current)==null||I.disconnect(),xe.current=null,te.current.forEach(z=>{try{z.disconnect()}catch{}}),te.current.clear(),Pe.current&&window.clearTimeout(Pe.current),ie.current&&window.clearTimeout(ie.current),jt.current!=null&&(window.clearTimeout(jt.current),jt.current=null),ze.current!=null&&(cancelAnimationFrame(ze.current),ze.current=null),en.current!=null&&(cancelAnimationFrame(en.current),en.current=null)}},[]);const zi=y.useRef(new Map);y.useEffect(()=>{const T=Ra();if(T===Sa.current)return;Sa.current=T,bn.current=!1,dt.current=!1,zi.current.clear();const I=new Set;for(let X=0;X<It.current.length;X++)I.add(nn(X));let z=0;H.current.forEach((X,de)=>{I.has(de)?z+=1:H.current.delete(de)}),z===0&&(On.current=0),po()},[r,po,Ra,nn]),y.useEffect(()=>{bn.current=!1,dt.current=!1,Et()},[l,Nt,ao,pt,p,Q==null?void 0:Q.estimateHeight,Q==null?void 0:Q.adaptiveEstimate,Q==null?void 0:Q.estimateQuantile,M]);const Oa=y.useRef(()=>{});Oa.current=(T,I)=>{if(I){q.current.set(T,I);const z=nn(T),X=I.offsetHeight;if(X>0&&H.current.set(z,X),(Q?Q.dynamicHeights!==!1:!0)&&!te.current.has(T)&&typeof ResizeObserver<"u"){const je=new ResizeObserver(()=>{const ee=I.offsetHeight;if(ee<=0)return;H.current.set(nn(T),ee);const fe=kn.current.get(T),An=fe?Math.abs(fe.height-ee)>.5:!1,Te=zi.current.get(T)===ee;fe?An&&!Te&&(zi.current.set(T,ee),Ea()):Ea()});try{je.observe(I),te.current.set(T,je)}catch{}}A==null||A(T,I),bn.current&&!kn.current.has(T)&&!ut.current&&!dt.current&&(dt.current=!0,requestAnimationFrame(()=>void Et()))}else{q.current.delete(T),Ai.current.delete(T);const z=te.current.get(T);if(z){try{z.disconnect()}catch{}te.current.delete(T)}W==null||W(T)}};const Ai=y.useRef(new Map),ef=T=>{let I=Ai.current.get(T);return I||(I=z=>Oa.current(T,z),Ai.current.set(T,I)),I},ft=y.useMemo(()=>Q?Yy(uo,r.length,zn.scrollTop,zn.clientHeight||mt.containerHeight||600,Q.overscan):{start:0,end:Math.max(0,r.length-1),hiddenCount:0},[Q,uo,r.length,zn.scrollTop,zn.clientHeight,mt.containerHeight]);y.useImperativeHandle(t,()=>({relayout:()=>{H.current.clear(),On.current=0,It.current.forEach((T,I)=>{const z=q.current.get(I);if(!z)return;const X=z.offsetHeight;X>0&&H.current.set(nn(I),X)}),Et()},scrollToItem:(T,I={})=>{const z=N.current,X=kn.current.get(T);!z||!X||z.scrollTo({top:Vy(X,z.clientHeight,I.block??"start",I.offset??0),behavior:I.behavior??"auto"})},scrollToTop:(T={})=>{var I;(I=N.current)==null||I.scrollTo({top:T.offset??0,behavior:T.behavior??"auto"})},scrollToBottom:(T={})=>{const I=N.current;I&&I.scrollTo({top:I.scrollHeight-I.clientHeight+(T.offset??0),behavior:T.behavior??"auto"})},getItemPosition:T=>kn.current.get(T)??null,getAllItemPositions:()=>kn.current,getColumnHeights:()=>Di.current.columnHeights,getLayoutInfo:()=>Di.current,getViewportInfo:()=>{const T=N.current;return T?{scrollTop:T.scrollTop,scrollLeft:T.scrollLeft,scrollHeight:T.scrollHeight,scrollWidth:T.scrollWidth,clientHeight:T.clientHeight,clientWidth:T.clientWidth,isScrolling:zn.isScrolling,direction:zn.direction}:zn},getVisibleRange:()=>({start:ft.start,end:ft.end}),getVisibleItems:()=>new Set(mr.current),forceUpdate:()=>Xm({}),getContainer:()=>N.current,getItemElement:T=>q.current.get(T)??null,measureItem:async T=>{const I=q.current.get(T),z=nn(T);if(I){const de={width:I.offsetWidth,height:I.offsetHeight};return de.height>0&&H.current.set(z,de.height),de}const X=H.current.get(z);return X?{width:mt.columnWidth,height:X}:{width:mt.columnWidth,height:(Q==null?void 0:Q.estimateHeight)??0}}}),[Et,mt,zn,ft,N,q,Q==null?void 0:Q.estimateHeight,nn]);const nf=y.useMemo(()=>{if(!Q)return r.map((I,z)=>z);const T=[];for(let I=ft.start;I<=ft.end;I++)T.push(I);return T},[Q,r,ft.start,ft.end]);return d.jsxs("div",{ref:N,style:{position:"relative",overflowX:"hidden",overflowY:"auto",...m},className:g,onScroll:Jm,"data-vane-waterfall":"",children:[se,d.jsx("div",{style:{position:"relative",width:"100%",height:mt.totalHeight,minWidth:0},children:nf.map(T=>{const I=r[T];return I===void 0?null:d.jsx(Xy,{index:T,item:I,position:uo.get(T),useTransform:S,itemStyle:x,itemClassName:w,renderItem:o,onClick:U,itemRef:ef(T)},i(I,T))})})]})});function Jy(){const e=new Map,n=new Map;let t=0;const r=(s,a)=>{const u=e.get(s);if(u){if(t>=50){console.warn(`[PluginBus] emit depth exceeded: "${s}"`);return}t+=1;for(const p of[...u])try{p(a)}catch(c){console.warn(`[PluginBus] handler error for event "${s}"`,c)}t-=1}},o=(s,a)=>{let u=e.get(s);return u||(u=new Set,e.set(s,u)),u.add(a),()=>{u==null||u.delete(a)}},i=(s,a)=>{const u=p=>{try{a(p)}finally{l(s,u)}};return o(s,u)},l=(s,a)=>{var u;if(!a){e.delete(s);return}(u=e.get(s))==null||u.delete(a)};return{emit:r,on:o,once:i,off:l,getData:s=>n.get(s),setData:(s,a)=>{const u=n.get(s);n.set(s,a),u!==a&&r(s,a)},deleteData:s=>{const a=n.has(s);n.delete(s),a&&r(s,void 0)},hasData:s=>n.has(s),getAll:()=>{const s=Object.create(null);return n.forEach((a,u)=>{s[u]=a}),s},clear:()=>{e.clear(),n.clear()}}}function Zy(e){const n=new Map(e.map(s=>[s.name,s])),t=[];for(const s of e)for(const a of s.dependencies??[])n.has(a)||t.push(`${s.name} -> ${a}`);const r=[],o=new Set,i=[...e],l=s=>(s.dependencies??[]).every(a=>o.has(a)||!n.has(a));for(;i.length>0;){const s=i.filter(l);if(s.length===0)throw new Error(`[vane/plugin-core] 插件循环依赖: ${i.map(u=>u.name).join(" <-> ")}`);let a=s[0];for(const u of s)(u.priority??0)>(a.priority??0)&&(a=u);r.push(a),o.add(a.name),i.splice(i.indexOf(a),1)}return t.length>0&&console.warn(`[vane/plugin-core] 以下插件依赖未注册，将被忽略:
  ${t.join(`
  `)}`),r}function Kp(e,n){try{return Zy(e)}catch(t){return n==null||n(t),e}}async function ev(e,n={}){const{timeout:t=3e3,name:r="anonymous",hook:o="unknown"}=n;if(!t||t<=0)return await e();let i;const l=new Promise((s,a)=>{i=setTimeout(()=>{a(new Error(`[vane/plugin-core] 插件 ${r} 的钩子 ${o} 超时(${t}ms)`))},t)});try{return await Promise.race([Promise.resolve().then(e),l])}finally{i&&clearTimeout(i)}}const nv=new Set(["onMount","onUnmount","onPropsChange","onError"]);function tv(e={}){const n=e.logger??console,t=e.sandbox??!0,r=e.timeout??3e3,o=[];let i=[];const l=new Map,s=new Map,a=new Set;let u=0,p=null,c=0;const m=(k,P,L)=>{o.push({plugin:k,hook:P,error:L})},g=()=>{u+=1,p=null},x=(k,P=new Set)=>k.enabled===!1?!1:P.has(k.name)?!0:(P.add(k.name),(k.dependencies??[]).every(L=>{const K=l.get(L);return!K||x(K,P)})),w=()=>{if(p)return p;const k=[...l.values()].filter(P=>x(P)?!0:(m(P.name,"dependencies",new Error("依赖已停用")),!1));return p=Kp(k,P=>m("[order]","resolveDependencyOrder",P))},S=k=>{const P=i.filter(([L])=>!k||L===k).reverse();i=k?i.filter(([L])=>L!==k):[];for(const[,L]of P)try{L()}catch(K){n.warn("[vane] cleanup failed",K)}},h=k=>{var P;return Promise.resolve((P=k.destroy)==null?void 0:P.call(k)).catch(L=>n.warn(`[vane] destroy failed: ${k.name}`,L))},f=async(k,P,L,K,A)=>{var re,$;const W=P==="onUnmount";if(P==="onMount"||W){if(a.has(k.name)!==W)return{};W?a.delete(k.name):a.add(k.name)}const V=(re=k.hooks)==null?void 0:re[P];if(typeof V!="function")return{};let F;try{const D=()=>V(L,...K);F=k.sandbox??t?await ev(D,{timeout:k.timeout??r,name:k.name,hook:P}):await D()}catch(D){return A!==u?{}:(m(k.name,P,D),n.warn(`[vane] ${P} failed: ${k.name}`,D),($=e.onError)==null||$.call(e,k.name,P,D),{stop:P==="onError"})}return A!==u?{}:nv.has(P)&&typeof F=="function"?(i.push([k.name,F]),{}):{value:F}},v=async(k,P,L)=>{const K=u;for(const A of w()){if(K!==u)return;const W=await f(A,k,P,L,K);if(W.stop)return;if(W.value===!1)return!1;if(W.value!==void 0&&W.value!==!0)return W.value}},b=(k,P,...L)=>v(k,P,L),C=k=>{l.get(k.name)&&s.get(k.name)!==k&&(n.warn(`[vane] duplicate plugin, destroy old: ${k.name}`),E(k.name)),l.set(k.name,{...k,enabled:k.enabled??!0}),s.set(k.name,k),a.delete(k.name),g(),k.init&&Promise.resolve(k.init()).catch(P=>{n.warn(`[vane] init failed: ${k.name}`,P)})},j=k=>k.forEach(C),M=k=>{l.delete(k),s.delete(k),a.delete(k),p=null},E=k=>{const P=l.get(k);P&&(g(),S(k),h(P),M(k))};return{register:C,registerAll:j,unregister:E,getPlugin:k=>l.get(k),getAllPlugins:()=>[...l.values()],getEnabledPlugins:()=>[...l.values()].filter(k=>k.enabled!==!1),getExecutionOrder:()=>[...w()],enable:k=>{const P=l.get(k);P&&(P.enabled=!0,p=null)},disable:k=>{const P=l.get(k);P&&(P.enabled=!1,p=null)},has:k=>l.has(k),executeHook:b,clear:()=>{g(),c+=1,S();const k=[...l.values()].map(h);return l.clear(),s.clear(),a.clear(),Promise.all(k).then(()=>{})},getErrors:()=>[...o],align:async(k,P)=>{const L=++c,K=new Map(k.map(A=>[A.name,A]));for(const A of[...l.keys()]){if(L!==c)return;if(s.get(A)===K.get(A))continue;const W=l.get(A);g(),await f(W,"onUnmount",P,[],u),S(A),await h(W),M(A)}for(const A of k){if(L!==c)return;s.get(A.name)!==A&&C(A)}},peekOrder:w}}var rv=Object.defineProperty,ov=(e,n,t)=>n in e?rv(e,n,{enumerable:!0,configurable:!0,writable:!0,value:t}):e[n]=t,iv=(e,n,t)=>ov(e,n+"",t);class Qp extends Tt.Component{constructor(){super(...arguments),iv(this,"state",{error:null})}static getDerivedStateFromError(n){return{error:n}}componentDidUpdate(n){var o,i;const t=n.resetKeys??[],r=this.props.resetKeys??[];this.state.error&&(t.length!==r.length||t.some((l,s)=>!Object.is(l,r[s])))&&((i=(o=this.props).onReset)==null||i.call(o),this.setState({error:null}))}componentDidCatch(n,t){var r,o;console.warn("[vane/plugin-core] 插件渲染错误已被隔离",n,t),(o=(r=this.props).onError)==null||o.call(r,n,t)}render(){const{error:n}=this.state;return n?this.props.fallback?this.props.fallback(n):null:this.props.children}}let Mo=null;function lv(e=!1){if(Mo&&!e)return Mo;const n=typeof window<"u"?window.innerWidth:1024,t=typeof window<"u"?window.innerHeight:768,r=typeof window<"u"&&window.devicePixelRatio||1,o=typeof navigator<"u"&&navigator.userAgent||"",i=/iPad|Tablet/i.test(o),l=/Mobile|Android|iPhone/i.test(o),s=typeof window<"u"&&("ontouchstart"in window||(navigator.maxTouchPoints??0)>0);return Mo={type:i?"tablet":l?"mobile":"desktop",os:o,browser:o,devicePixelRatio:r,viewportWidth:n,viewportHeight:t,isTouchDevice:s,isRetina:r>=2},Mo}function ic(e,n){if(Object.is(e,n))return!0;if(typeof e!="object"||typeof n!="object"||e===null||n===null)return!1;const t=Object.keys(e),r=Object.keys(n);return t.length!==r.length?!1:t.every(o=>Object.is(e[o],n[o]))}function sv(e){const{plugins:n,props:t,data:r,initialState:o,containerRef:i,enableDebug:l=!1,managerOptions:s,extendContext:a}=e,u=y.useRef(null),p=i??u,c=y.useRef(null);c.current||(c.current=tv(s));const m=c.current,g=y.useRef(null);g.current||(g.current=Jy());const x=g.current,w=y.useRef(new Map),[S,h]=y.useState(o??{}),[,f]=y.useState(0),v=y.useCallback(()=>f(oe=>oe+1),[]),b=y.useMemo(()=>lv(),[]),C=y.useRef(t);ic(C.current,t)||(C.current=t);const j=C.current,M=y.useRef(r);ic(M.current,r)||(M.current=r);const E=M.current,k=y.useRef(null),P=y.useMemo(()=>{const oe={props:j,data:E,bus:x,refs:{container:p,getContainer:()=>p.current},state:S,setState:Z=>h(R=>({...R,...Z})),shared:w.current,deviceInfo:b,forceUpdate:v,getSize:()=>{const Z=p.current;return Z?{width:Z.offsetWidth,height:Z.offsetHeight}:{width:0,height:0}},logger:console};return a?a(oe):oe},[j,E,S,b,x,a]);y.useLayoutEffect(()=>{k.current=P},[P]);const L=y.useRef(n),K=L.current;K!==n&&(K.length!==n.length||n.some((oe,Z)=>oe!==K[Z]))&&(L.current=n);const A=L.current,W=y.useRef(0);y.useLayoutEffect(()=>{const oe=++W.current,Z=k.current;return m.align(A,Z).then(()=>{W.current===oe&&(l&&console.debug("[vane/plugin-core] plugins registered:",A.map(R=>R.name).join("|")),m.executeHook("onMount",Z))}),()=>{W.current+=1}},[A,m,l]),y.useLayoutEffect(()=>()=>{const oe=k.current;if(!m.getExecutionOrder().some(Z=>{var R;return typeof((R=Z.hooks)==null?void 0:R.onUnmount)=="function"})){m.clear();return}m.executeHook("onUnmount",oe).finally(()=>m.clear())},[m]);const V=m.peekOrder(),F=y.useRef([]),re=y.useMemo(()=>{const oe=new Map(A.map(G=>[G.name,G])),Z=A.filter(G=>{var q;return G.enabled!==!1&&((q=m.getPlugin(G.name))==null?void 0:q.enabled)!==!1}),R=V.length===Z.length?V.map(G=>oe.get(G.name)??G):Kp(Z),N=F.current;return N.length===R.length&&R.every((G,q)=>G===N[q])?N:(F.current=R,R)},[A,m,V]),$=y.useRef(P);$.current=P;const D=y.useCallback((oe,Z)=>{var G;const R=$.current;let N=Z;for(const q of re){const H=(G=q.hooks)==null?void 0:G[oe];if(typeof H=="function")try{N=oe==="transformData"?H(R,N):H(N)}catch(te){(R.logger??console).warn(`[plugin-core] ${q.name}.${oe} 执行失败，已跳过`,te)}}return N},[re]),U=y.useCallback(oe=>D("transformProps",oe),[D]),se=y.useCallback(oe=>D("transformData",oe),[D]),ae=y.useCallback((oe,...Z)=>m.executeHook(oe,k.current,...Z),[m]);return{manager:m,bus:x,context:P,state:S,setState:P.setState,execute:ae,transformProps:U,transformData:se,orderedPlugins:re}}y.createContext(null);function Io(e,n,t){var o,i;if(e.enabled===!1||typeof((o=e.hooks)==null?void 0:o[n])!="function")return!1;const r=(i=e.config)==null?void 0:i.slotPosition;return t==="before"?r==="before":t==="footer"?r===void 0||r==="after"||r==="footer":r===void 0||r==="after"}function av(e,n){var t,r;return(((t=e.config)==null?void 0:t.order)??0)-(((r=n.config)==null?void 0:r.order)??0)||(n.priority??0)-(e.priority??0)}function No(e,n,t){const r=new Set;return e.map(o=>{var i;if(r.has(o.name))return null;r.add(o.name);try{const l=(i=o.hooks)==null?void 0:i[t],s=l==null?void 0:l(n);return s==null?null:d.jsx(Qp,{children:s},`vane-slot-${o.name}`)}catch(l){return console.warn(`[vane/plugin-core] 插件 ${o.name} 的 ${t} 渲染失败`,l),null}})}function uv(e,n,t){const r={headerBefore:[],overlay:[],headerAfter:[],footer:[]};for(const o of e)Io(o,"renderHeader","before")?r.headerBefore.push(o):Io(o,"renderHeader","after")&&r.headerAfter.push(o),Io(o,"renderOverlay","after")&&r.overlay.push(o),Io(o,"renderFooter","footer")&&r.footer.push(o);for(const o of Object.keys(r))r[o].sort(av);return d.jsxs(d.Fragment,{children:[No(r.headerBefore,n,"renderHeader"),t,No(r.overlay,n,"renderOverlay"),No(r.headerAfter,n,"renderHeader"),No(r.footer,n,"renderFooter")]})}const cv={columns:0,columnWidth:0,gap:0,columnHeights:[],totalHeight:0,containerWidth:0,containerHeight:0},dv={scrollTop:0,scrollLeft:0,scrollHeight:0,scrollWidth:0,clientHeight:0,clientWidth:0,isScrolling:!1,direction:null};function cn(e,n,...t){if(typeof n=="function")try{return n(...t)}catch(r){console.warn(`[vane-waterfall] ${e} 回调抛错，已忽略`,r);return}}async function lc(e,n,...t){if(typeof n=="function")try{return await n(...t)}catch(r){console.warn(`[vane-waterfall] ${e} 回调抛错，已忽略`,r);return}}function pv(){const e=typeof navigator<"u"?navigator:void 0,n=(e==null?void 0:e.connection)||(e==null?void 0:e.mozConnection)||(e==null?void 0:e.webkitConnection);if(n)return{effectiveType:n.effectiveType||"4g",downlink:Number(n.downlink||10),rtt:Number(n.rtt||50),saveData:!!n.saveData,online:(e==null?void 0:e.onLine)!==!1}}function sc(e,n,t){let r=Number.POSITIVE_INFINITY,o=-1;return e.forEach((i,l)=>{Math.max(0,Math.min(n+t,i.y+i.height)-Math.max(n,i.y))>0&&(l<r&&(r=l),l>o&&(o=l))}),o<0?{start:0,end:0}:{start:r,end:o}}function mv(e,n){const t=Array.isArray(n)?{plugins:n}:n,{plugins:r,enableDebug:o=!1}=t,i=y.forwardRef((l,s)=>{const a=y.useRef(null),u=y.useRef(new Map),p=y.useRef(null),c=y.useMemo(()=>pv(),[]),m=y.useRef(null),[g,x]=y.useState(cv),[w,S]=y.useState(()=>new Map),[h,f]=y.useState(dv),[v,b]=y.useState(!1),[C,j]=y.useState(0),M=y.useCallback(R=>{var ie,en,ze,pr,ut,On;const N=()=>{var B;return((B=p.current)==null?void 0:B.getLayoutInfo())??g},G=()=>{var B;return((B=p.current)==null?void 0:B.getAllItemPositions())??w},q=()=>{var B;return((B=p.current)==null?void 0:B.getViewportInfo())??h},H=()=>{var B,ue;return((B=m.current)==null?void 0:B.items)??((ue=R.props)==null?void 0:ue.items)??[]},te=()=>{var B;return((B=R.props)==null?void 0:B.items)??[]},xe=()=>{var ct;const B=(ct=p.current)==null?void 0:ct.getVisibleItems();if(B&&B.size>0)return B;const ue=q(),Dn=new Set;return G().forEach((bn,dt)=>{Math.max(0,Math.min(ue.scrollTop+ue.clientHeight,bn.y+bn.height)-Math.max(ue.scrollTop,bn.y))>0&&Dn.add(dt)}),Dn},Pe={...R,items:H(),itemCount:H().length,rawItems:te(),containerRef:a,itemRefs:u.current,getItemRef:B=>u.current.get(B)??null,layout:N(),itemPositions:G(),getItemPosition:B=>G().get(B)??null,viewport:q(),visibleItems:xe(),visibleRange:sc(G(),q().scrollTop,q().clientHeight),isLayouting:v,isScrolling:h.isScrolling,isDragging:!!((en=(ie=R.state)==null?void 0:ie.dragInfo)!=null&&en.isDragging),isLoading:!!(((ze=R.state)==null?void 0:ze.isLoading)??!1),hasMore:!!(((pr=R.state)==null?void 0:pr.hasMore)??!0),error:((ut=R.state)==null?void 0:ut.error)??null,sharedData:R.shared,networkInfo:c,dragInfo:(On=R.state)==null?void 0:On.dragInfo,relayout:()=>{var B;return(B=p.current)==null?void 0:B.relayout()},scrollToItem:(B,ue)=>{var Dn;return(Dn=p.current)==null?void 0:Dn.scrollToItem(B,ue)},scrollToTop:B=>{var ue;return(ue=p.current)==null?void 0:ue.scrollToTop(B)},scrollToBottom:B=>{var ue;return(ue=p.current)==null?void 0:ue.scrollToBottom(B)},measureItem:B=>{var ue;return((ue=p.current)==null?void 0:ue.measureItem(B))??Promise.resolve({width:0,height:0})}};return Object.defineProperties(Pe,{layout:{get:N,enumerable:!0,configurable:!0},itemPositions:{get:G,enumerable:!0,configurable:!0},viewport:{get:q,enumerable:!0,configurable:!0},items:{get:H,enumerable:!0,configurable:!0},itemCount:{get:()=>H().length,enumerable:!0,configurable:!0},rawItems:{get:te,enumerable:!0,configurable:!0},visibleItems:{get:xe,enumerable:!0,configurable:!0},hasMore:{get:()=>{var B,ue;return((B=m.current)==null?void 0:B.hasMore)??((ue=R.state)==null?void 0:ue.hasMore)??!0},enumerable:!0,configurable:!0},isLoading:{get:()=>{var B,ue;return((B=m.current)==null?void 0:B.isLoading)??((ue=R.state)==null?void 0:ue.isLoading)??!1},enumerable:!0,configurable:!0},props:{get:()=>m.current??R.props,enumerable:!0,configurable:!0},visibleRange:{get:()=>{const B=q();return sc(G(),B.scrollTop,B.clientHeight)},enumerable:!0,configurable:!0}}),Pe},[g,w,h,v,c]),k=sv({plugins:r,props:l,enableDebug:o,containerRef:a,extendContext:M}),P=y.useRef(k.context);y.useLayoutEffect(()=>{P.current=k.context}),y.useEffect(()=>k.bus.on("props:invalidate",()=>j(R=>R+1)),[k.bus]);const L=y.useCallback((R,...N)=>k.execute(R,...N),[k.manager]),K=k.orderedPlugins,A=r.map(R=>R.name).join("|"),W=y.useMemo(()=>{const R=K.filter(H=>{var te;return typeof((te=H.hooks)==null?void 0:te.calculateColumns)=="function"}),N=K.filter(H=>{var te;return typeof((te=H.hooks)==null?void 0:te.calculateColumnWidth)=="function"}),G=K.filter(H=>{var te;return typeof((te=H.hooks)==null?void 0:te.calculateItemPosition)=="function"});if(!R.length&&!N.length&&!G.length)return;const q=(H,te,xe)=>console.warn(`[vane-waterfall] ${H} 的 ${te} 执行失败`,xe);return{calculateColumns:R.length?H=>{var xe,Pe,ie;const te=((ie=(Pe=(xe=P.current)==null?void 0:xe.containerRef)==null?void 0:Pe.current)==null?void 0:ie.clientWidth)??0;for(const en of R)try{const ze=en.hooks.calculateColumns(P.current,te);if(typeof ze=="number"&&Number.isFinite(ze))return ze}catch(ze){q(en.name,"calculateColumns",ze)}}:void 0,calculateColumnWidth:N.length?(H,te,xe)=>{for(const Pe of N)try{const ie=Pe.hooks.calculateColumnWidth(P.current,xe,te);if(typeof ie=="number"&&Number.isFinite(ie))return ie}catch(ie){q(Pe.name,"calculateColumnWidth",ie)}}:void 0,calculateItemPosition:G.length?(H,te,xe)=>{for(const Pe of G)try{const ie=Pe.hooks.calculateItemPosition(P.current,H,te,xe);if(ie)return ie}catch(ie){q(Pe.name,"calculateItemPosition",ie)}}:void 0}},[K]),V=y.useCallback(()=>{const R=p.current;if(!R)return;const N=R.getLayoutInfo(),G=R.getAllItemPositions(),q=R.getViewportInfo();x(H=>H.totalHeight===N.totalHeight&&H.columns===N.columns&&H.columnWidth===N.columnWidth&&H.containerWidth===N.containerWidth?H:N),S(H=>{if(H===G)return H;if(H.size!==G.size)return G;let te=!0;return G.forEach((xe,Pe)=>{if(te===!1)return;const ie=H.get(Pe);(!ie||ie.x!==xe.x||ie.y!==xe.y||ie.width!==xe.width||ie.height!==xe.height||ie.column!==xe.column)&&(te=!1)}),te?H:G}),f(H=>H.scrollTop===q.scrollTop&&H.clientHeight===q.clientHeight&&H.scrollHeight===q.scrollHeight&&H.isScrolling===q.isScrolling?H:q)},[]),F=y.useMemo(()=>k.transformProps(l),[k.transformProps,l,C]);y.useEffect(()=>{r.some(R=>R.name==="PaginationPlugin")&&r.some(R=>R.name==="InfiniteScrollPlugin")&&console.warn("[vane-waterfall] PaginationPlugin 与 InfiniteScrollPlugin 互斥：两者都会改写 items，请只保留一个")},[A]),y.useEffect(()=>{L("onMount")},[L]);const re=y.useRef(l);y.useEffect(()=>{const R=re.current;R!==l&&(re.current=l,L("onPropsChange",R,l))},[l,L]),m.current=F;const $=y.useCallback(async()=>(b(!0),await L("onBeforeLayout")===!1?(b(!1),!1):!0),[L]),D=y.useCallback(()=>{L("onLayout")},[L]),U=y.useCallback(()=>{b(!1),L("onLayoutComplete"),Promise.resolve().then(V)},[L,V]),se=y.useMemo(()=>K.filter(R=>{var N;return typeof((N=R.hooks)==null?void 0:N.renderItemWrapper)=="function"}),[K]),ae=F.renderItem,oe=y.useCallback((R,N)=>{let G=(ae==null?void 0:ae(R,N))??null;for(const q of se)try{const H=q.hooks.renderItemWrapper(P.current,G,N);H!=null&&(G=H)}catch(H){console.warn(`[vane-waterfall] ${q.name} 的 renderItemWrapper 失败`,H)}return G},[ae,se]),Z={...F,containerRefExternal:a,itemRefsExternal:u,debug:F.debug??o,layoutHooks:W??F.layoutHooks,renderItem:oe,children:d.jsx(Qp,{children:uv(k.orderedPlugins,k.context,F.children)}),onMount:()=>{cn("onMount",F.onMount)},onUnmount:()=>{cn("onUnmount",F.onUnmount)},onBeforeLayout:async()=>await $()===!1?!1:await lc("onBeforeLayout",F.onBeforeLayout)??!0,onLayout:()=>{cn("onLayout",F.onLayout),D()},onLayoutComplete:()=>{cn("onLayoutComplete",F.onLayoutComplete),U()},onItemMount:(R,N)=>{cn("onItemMount",F.onItemMount,R,N),L("onItemMount",R,N)},onItemUnmount:R=>{cn("onItemUnmount",F.onItemUnmount,R),L("onItemUnmount",R)},onItemEnterViewport:(R,N)=>{cn("onItemEnterViewport",F.onItemEnterViewport,R,N),L("onItemEnterViewport",R,N)},onItemLeaveViewport:(R,N)=>{cn("onItemLeaveViewport",F.onItemLeaveViewport,R,N),L("onItemLeaveViewport",R,N)},onScroll:(R,N)=>{cn("onScroll",F.onScroll,R,N),L("onScroll",R,N),V()},onResize:(R,N)=>{cn("onResize",F.onResize,R,N),L("onResize",R,N)},onReachBottom:async R=>{await lc("onReachBottom",F.onReachBottom,R),await L("onReachBottom",R)},onItemClick:(R,N,G)=>{cn("onItemClick",F.onItemClick,R,N,G),L("onItemClick",R,N,G)}};return d.jsx(e,{ref:R=>{p.current=R,typeof s=="function"?s(R):s&&(s.current=R)},...Z})});return i.displayName="WithPlugins(WaterfallCore)",i}function fv(e){let n=e%2147483647;return n<=0&&(n+=2147483646),()=>(n=n*16807%2147483647,(n-1)/2147483646)}const gl=["林一白","苏见月","陈默","阿岚","周知夏","陆青野","许星河","沈迟","顾亦","南野","唐小满","白露"],jo=["阴天里的海边公路","手冲咖啡的第 30 天","把阳台改成了书房","城市夜行的三小时","一碗面的做法","老相机与新胶卷","周三的菜市场","窗台上的第四盆绿植","独居第五年的厨房","关于晨跑的碎念","旧书店的午后","这条街的雨"],Eo=["摄影","家居","美食","穿搭","旅行","手作","阅读","数码"];function Yp(e={}){const{count:n=40,seed:t=20261026,heightRange:r=[140,300],commerce:o=!1}=e,i=fv(t),[l,s]=r;return Array.from({length:n},(a,u)=>{const p=i(),c=i(),m=i(),g=`c${t}-${u}`;return{id:g,title:jo[u%jo.length]+(u>=jo.length?` · ${Math.floor(u/jo.length)+1}`:""),author:gl[Math.floor(p*gl.length)]??gl[0],height:Math.round((l+c*(s-l))/8)*8,hue:Math.floor(m*360),image:`https://picsum.photos/seed/${g}/400/500`,tag:Eo[Math.floor(p*Eo.length)%Eo.length]??Eo[0],price:o?Math.round((29+c*870)/10)*10:0,likes:Math.floor(20+m*9800),minutesAgo:Math.floor(p*60*24*14)}})}function ac(e){return e<60?`${Math.max(1,e)} 分钟前`:e<60*24?`${Math.floor(e/60)} 小时前`:`${Math.floor(e/60/24)} 天前`}function gv({height:e,hue:n,src:t,badge:r,glyph:o,radius:i=0,deep:l}){const s=(n+42)%360;return d.jsxs("div",{className:`thumb${t?" has-img":""}`,style:{height:e,borderRadius:i,backgroundImage:[`radial-gradient(132% 92% at 16% 6%, hsl(${n} 21% ${l?36:64}%) 0%, hsl(${s} 17% ${l?15:33}%) 100%)`].join(",")},children:[t?d.jsx("img",{className:"thumb-img",src:t,alt:"",loading:"lazy",decoding:"async",draggable:!1,onError:a=>{a.currentTarget.style.display="none"}}):null,o?d.jsx("span",{className:"thumb-glyph",children:o}):null,r?d.jsx("span",{className:"thumb-badge",children:r}):null]})}const hv=d.jsx("svg",{viewBox:"0 0 24 24",width:"14",height:"14",fill:"currentColor","aria-hidden":!0,children:d.jsx("path",{d:"M8 5v14l11-7z"})});function yv({card:e,variant:n="photo",fixed:t,pinned:r,corner:o}){const i=d.jsx(gv,{height:t?"100%":e.height,hue:e.hue,src:e.image,radius:0,deep:n==="video",badge:n==="video"?d.jsxs("span",{style:{display:"inline-flex",alignItems:"center",gap:4},children:[hv,Math.floor(e.minutesAgo/60),":",String(e.minutesAgo%60).padStart(2,"0")]}):n==="product"?`¥${e.price}`:r?"置顶":void 0,glyph:n==="doc"?d.jsx("span",{style:{fontSize:11,letterSpacing:.5},children:e.tag}):void 0});return t?d.jsxs("div",{className:"wf-card is-fixed",style:{height:e.height},children:[d.jsx("div",{className:"wf-card-fill",children:i}),d.jsxs("div",{className:"wf-card-cap",children:[d.jsx("p",{className:"wf-item-title",children:e.title}),d.jsxs("p",{className:"wf-item-meta",children:[e.author," · ",ac(e.minutesAgo)]})]}),o?d.jsx("span",{className:"wf-card-corner",children:o}):null]}):d.jsxs("div",{className:`wf-card is-${n}`,children:[i,d.jsxs("div",{className:"wf-card-cap",children:[d.jsx("p",{className:"wf-item-title",children:e.title}),d.jsx("p",{className:"wf-item-meta",children:n==="product"?d.jsxs(d.Fragment,{children:[d.jsxs("b",{className:"wf-price",children:["¥",e.price]}),d.jsx("span",{className:"wf-sep","aria-hidden":!0,children:"·"}),e.likes," 人收藏"]}):d.jsxs(d.Fragment,{children:[e.author,d.jsx("span",{className:"wf-sep","aria-hidden":!0,children:"·"}),ac(e.minutesAgo)]})})]}),o?d.jsx("span",{className:"wf-card-corner",children:o}):null]})}function vv({controls:e,cfg:n,onChange:t}){return d.jsx("div",{className:"ctl-bar",children:e.filter(r=>!r.when||r.when(n)).map(r=>{const o=n[r.key];return d.jsxs("label",{className:"ctl",title:r.hint,children:[d.jsxs("span",{className:"ctl-label",children:[r.label,d.jsx("b",{className:"ctl-val",children:r.kind==="switch"?o?"开":"关":String(o)})]}),r.kind==="switch"?d.jsx("button",{type:"button",className:`ctl-switch${o?" is-on":""}`,onClick:()=>t(r.key,!o),"aria-pressed":!!o,children:d.jsx("i",{})}):r.kind==="select"?d.jsx("select",{className:"ctl-select",value:String(o),onChange:i=>t(r.key,i.target.value),children:(r.options??[]).map(i=>d.jsx("option",{value:i.value,children:i.label},i.value))}):d.jsx("input",{className:"ctl-range",type:"range",min:r.min??0,max:r.max??100,step:r.step??1,value:Number(o),onChange:i=>t(r.key,Number(i.target.value))})]},r.key)})})}function qp({lines:e,title:n="事件日志",empty:t="还没触发 —— 试着滚动、点一张卡",right:r}){return d.jsxs("div",{className:"log",children:[d.jsxs("div",{className:"log-head",children:[d.jsx("span",{children:n}),d.jsxs("span",{className:"log-right",children:[r,d.jsx("b",{children:e.length})]})]}),e.length===0?d.jsx("p",{className:"log-empty",children:t}):d.jsx("ol",{className:"log-list",children:e.map(o=>d.jsxs("li",{className:`log-line is-${o.kind}`,children:[d.jsx("time",{children:o.at}),d.jsx("span",{children:o.text})]},o.id))})]})}const xv={total:0,rendered:0,totalHeight:0,layoutMs:0,scrolls:0,columns:0};function wv({items:e}){return d.jsx("div",{className:"keyhint",children:e.map(([n,t])=>d.jsxs("span",{children:[d.jsx("kbd",{children:n}),t]},n))})}function J(e){const{count:n=48,seed:t=9101,heightRange:r,commerce:o,variant:i="photo",fixed:l,containerStyle:s,pluginKeys:a,instrument:u}=e;return function({cfg:c,log:m,setCfg:g}){var K;const[x,w]=y.useState(()=>Yp({count:n,seed:t,heightRange:r,commerce:o})),S=y.useRef(null),[h,f]=y.useState(xv),v=y.useRef(0),b=y.useRef(0),C=y.useRef(null);C.current={cfg:c,items:x,setItems:w,setCfg:g,log:m,ref:S,meter:h};const j=y.useMemo(()=>{const A=a??Object.keys(c);return JSON.stringify(A.map(W=>[W,c[W]]))},[c]),M=y.useMemo(()=>{var W;const A=((W=e.plugins)==null?void 0:W.call(e,C.current))??[];return A.length?mv(oc,A):oc},[j]),E=y.useCallback(A=>{const W=S.current;if(!W)return;const V=W.getLayoutInfo(),F=W.getVisibleRange(),re={total:A,rendered:Math.max(0,F.end-F.start+1),totalHeight:V.totalHeight,layoutMs:performance.now()-b.current,scrolls:v.current,columns:V.columns};f($=>$.total===re.total&&$.rendered===re.rendered&&$.columns===re.columns&&Math.abs($.totalHeight-re.totalHeight)<.5&&$.scrolls===re.scrolls&&Math.abs($.layoutMs-re.layoutMs)<.05?$:re)},[]),k=y.useCallback(A=>{if(v.current+=1,u&&v.current%4===0){const W=S.current;if(W){const V=W.getVisibleRange(),F=Math.max(0,V.end-V.start+1);f(re=>re.rendered===F&&re.scrolls===v.current?re:{...re,rendered:F,scrolls:v.current})}}},[]),P=y.useMemo(()=>{var W;return{...((W=e.coreProps)==null?void 0:W.call(e,C.current))??{},...u?{onLayout:()=>{b.current=performance.now()},onLayoutComplete:()=>E(x.length),onScroll:k}:null}},[c,x,E,k]);y.useEffect(()=>{var W;const A=(W=e.effect)==null?void 0:W.call(e,C.current);return typeof A=="function"?A:void 0},[]);const L=y.useCallback((A,W)=>{var F;const V=(F=e.decorate)==null?void 0:F.call(e,C.current,A,W);return d.jsx(yv,{card:A,variant:i,fixed:l,pinned:V==null?void 0:V.pinned,corner:V==null?void 0:V.corner})},[]);return d.jsxs("div",{className:"stage",children:[(K=e.chrome)==null?void 0:K.call(e,C.current),d.jsx("div",{className:"stage-scroll",children:d.jsx(M,{ref:S,items:x,keyExtractor:A=>A.id,renderItem:L,containerStyle:{height:"var(--stage-h, 380px)",...s},...P})})]})}}const Sv={slug:"basic",title:"基础示例",group:"basic",intro:"最省事的用法：一批高度不等的卡片，交给 Core 排。",why:"刚接入时先用这一页确认两件事 —— 容器给了高度、卡片真的按 item.height 渲染。这两条不对，后面装什么插件都白搭。",plugs:[],props:["columns={{{columns}}}","gap={{{gap}}}","containerStyle={{ height: 420 }}"],note:"containerStyle 必须给高度。不给高度 = 没有滚动上下文，Core 量不出视口，卡片会全部堆在顶部。",controls:[{key:"columns",label:"列数",kind:"number",init:3,min:1,max:6,hint:"props.columns"},{key:"gap",label:"间距",kind:"number",init:16,min:0,max:32,hint:"props.gap，行/列通用"}]},bv=J({count:40,seed:1201,plugins:()=>[],instrument:!0,coreProps:e=>({columns:Number(e.cfg.columns),gap:Number(e.cfg.gap)})}),kv=Object.freeze(Object.defineProperty({__proto__:null,default:bv,meta:Sv},Symbol.toStringTag,{value:"Module"})),Pv={slug:"columns",title:"自定义列数",group:"basic",intro:"写死列数，列宽自己算 —— 拖到 6 列看列宽怎么缩。",why:"后台表格、看板、固定版式的商品墙通常就是固定列数，不需要按容器自适应。",plugs:[],props:["columns={{{columns}}}","gap={{{gap}}}","containerStyle={{ height: 420 }}"],note:"写了 columns 又被 AutoColumnPlugin / ResponsiveColumnsPlugin 覆盖是常见困惑：那两个插件在 calculateColumns 钩子里返回列数，优先级高于 props。",controls:[{key:"columns",label:"列数",kind:"number",init:4,min:1,max:6},{key:"gap",label:"间距",kind:"number",init:12,min:0,max:32}]},Cv=J({count:36,seed:1401,plugins:()=>[],instrument:!0,coreProps:e=>({columns:Number(e.cfg.columns),gap:Number(e.cfg.gap)}),chrome:e=>d.jsxs("p",{className:"stage-tip",children:["列宽 = (容器宽 − 间距×",Number(e.cfg.columns)-1,") ÷ ",Number(e.cfg.columns)," · 当前 ",d.jsx("b",{children:e.meter.columns})," 列 / 总高 ",d.jsx("b",{children:Math.round(e.meter.totalHeight)}),"px"]})}),_v=Object.freeze(Object.defineProperty({__proto__:null,default:Cv,meta:Pv},Symbol.toStringTag,{value:"Module"})),Tv={slug:"gap",title:"自定义间距",group:"basic",intro:"gap 是简写，rowGap / columnGap 分别覆盖它 —— 用开关切一次就记住了。",why:"图片流要更紧的列间距、更松的行间距，就得拆开写；只想整体松紧就用 gap。",plugs:[],props:["columns={3}",{text:"gap={{{gap}}}",when:e=>!e.split},{text:"rowGap={{{rowGap}}}",when:e=>!!e.split},{text:"columnGap={{{columnGap}}}",when:e=>!!e.split},"containerStyle={{ height: 420 }}"],note:"间距参与布局计算：改 gap 会改变列宽与每列落点，不是 CSS margin。三个同时给的时候 gap 只是「没被覆盖的那部分」的兜底。想让间距随窗口换档用 GapPlugin（下一页）。",controls:[{key:"split",label:"拆开行/列间距",kind:"switch",init:!0,hint:"关掉 → 只留 gap，它立刻生效"},{key:"gap",label:"gap（简写）",kind:"number",init:8,min:0,max:32,when:e=>!e.split},{key:"rowGap",label:"rowGap",kind:"number",init:24,min:0,max:40,when:e=>!!e.split},{key:"columnGap",label:"columnGap",kind:"number",init:8,min:0,max:40,when:e=>!!e.split}]},Rv=J({count:30,seed:1501,plugins:()=>[],coreProps:e=>({columns:3,...e.cfg.split?{rowGap:Number(e.cfg.rowGap),columnGap:Number(e.cfg.columnGap)}:{gap:Number(e.cfg.gap)}}),chrome:e=>d.jsx("p",{className:"stage-tip",children:e.cfg.split?d.jsxs(d.Fragment,{children:["rowGap ",d.jsx("b",{children:Number(e.cfg.rowGap)})," · columnGap ",d.jsx("b",{children:Number(e.cfg.columnGap)})," ——",d.jsx("b",{children:" gap 被覆盖，此刻是空转的"})]}):d.jsxs(d.Fragment,{children:["gap ",d.jsx("b",{children:Number(e.cfg.gap)})," —— 行列同值，因为没给 rowGap / columnGap"]})})}),$v=Object.freeze(Object.defineProperty({__proto__:null,default:Rv,meta:Tv},Symbol.toStringTag,{value:"Module"})),Mv={slug:"ref",title:"Ref 方法调用",group:"advanced",intro:"13 个 ref 方法逐个点一遍，返回值直接写进日志。",why:"图片加载完要重排、点导航要跳到某条、滚动位置要复位 —— 这些都不该改数据，而是调 ref。",plugs:[],props:["ref={ref}","columns={3}","containerStyle={{ height: 420 }}","onItemClick={(i) => ref.current?.scrollToItem(i)}"],note:"getAllItemPositions 返回的是实时 Map，不是渲染快照；虚拟化开启后，未挂载项仍保留测量值（getItemElement 会返回 null）。"},Iv=[{key:"relayout",label:"relayout()",run:e=>{var n;return(n=e.ref.current)==null||n.relayout(),"清空高度缓存并重排"}},{key:"top",label:"scrollToTop()",run:e=>{var n;return(n=e.ref.current)==null||n.scrollToTop({behavior:"smooth"}),"回顶"}},{key:"bottom",label:"scrollToBottom()",run:e=>{var n;return(n=e.ref.current)==null||n.scrollToBottom({behavior:"smooth"}),"到底"}},{key:"item",label:"scrollToItem(i)",needsIndex:!0,run:()=>"见下方输入框"},{key:"pos",label:"getItemPosition(i)",needsIndex:!0,run:()=>"见下方输入框"},{key:"allpos",label:"getAllItemPositions()",run:e=>{var r;const n=(r=e.ref.current)==null?void 0:r.getAllItemPositions();if(!n)return"ref 还没就绪";const t=n.get(0);return`共 ${n.size} 项；#0 = { x: ${(t==null?void 0:t.x)??"-"}, y: ${(t==null?void 0:t.y)??"-"} }`}},{key:"colh",label:"getColumnHeights()",run:e=>{var t;return`[${(((t=e.ref.current)==null?void 0:t.getColumnHeights())??[]).map(r=>Math.round(r)).join(", ")}]`}},{key:"layout",label:"getLayoutInfo()",run:e=>{var t;const n=(t=e.ref.current)==null?void 0:t.getLayoutInfo();return n?`${n.columns} 列 · 列宽 ${Math.round(n.columnWidth)} · 总高 ${Math.round(n.totalHeight)}`:"ref 还没就绪"}},{key:"viewport",label:"getViewportInfo()",run:e=>{var t;const n=(t=e.ref.current)==null?void 0:t.getViewportInfo();return n?`scrollTop ${Math.round(n.scrollTop)} · 视口 ${n.clientHeight} · 内容 ${Math.round(n.scrollHeight)}`:"ref 还没就绪"}},{key:"range",label:"getVisibleRange()",run:e=>{var t;const n=(t=e.ref.current)==null?void 0:t.getVisibleRange();return n?`渲染区间 ${n.start} … ${n.end}`:"ref 还没就绪"}},{key:"force",label:"forceUpdate()",run:e=>{var n;return(n=e.ref.current)==null||n.forceUpdate(),"强制重渲染"}},{key:"el",label:"getItemElement(0)",run:e=>{var t;const n=(t=e.ref.current)==null?void 0:t.getItemElement(0);return n?`<div data-index="0"> ${n.offsetWidth}×${n.offsetHeight}`:"取不到（可能未挂载）"}},{key:"measure",label:"measureItem(0)",run:async e=>{var t;const n=await((t=e.ref.current)==null?void 0:t.measureItem(0));return n?`{ width: ${Math.round(n.width)}, height: ${Math.round(n.height)} }`:"量不到"}},{key:"container",label:"getContainer()",run:e=>{var t;const n=(t=e.ref.current)==null?void 0:t.getContainer();return n?`容器 ${n.clientWidth}×${n.clientHeight}，scrollHeight ${n.scrollHeight}`:"ref 还没就绪"}}];function Nv({api:e}){const[n,t]=y.useState([]),[r,o]=y.useState(5),i=y.useCallback((s,a="event")=>{const u=new Date().toLocaleTimeString("zh-CN",{hour12:!1});t(p=>[{id:p.length+1,at:u,text:s,kind:a},...p].slice(0,30))},[]),l=y.useCallback(async s=>{const a=e.ref.current;if(!a){i("ref.current 为空 —— 舞台还没挂载","warn");return}if(s.needsIndex){if(s.key==="item")a.scrollToItem(r,{behavior:"smooth",block:"start"}),i(`scrollToItem(${r}, { block: "start" })`);else{const u=a.getItemPosition(r);i(u?`getItemPosition(${r}) = { x: ${Math.round(u.x)}, y: ${Math.round(u.y)}, w: ${Math.round(u.width)}, h: ${Math.round(u.height)} }`:`getItemPosition(${r}) = null`)}return}i(`${s.label} → ${await s.run(e)}`)},[e,r,i]);return d.jsxs("div",{className:"console",children:[d.jsxs("div",{className:"console-head",children:[d.jsx("span",{children:"Ref 控制台"}),d.jsxs("label",{className:"console-idx",children:["index",d.jsx("input",{type:"number",min:0,max:e.items.length-1,value:r,onChange:s=>o(Number(s.target.value))})]})]}),d.jsx("div",{className:"console-grid",children:Iv.map(s=>d.jsx("button",{type:"button",className:"console-btn",onClick:()=>void l(s),children:s.label},s.key))}),d.jsx(qp,{lines:n,title:"调用记录",empty:"点上面任意一个方法"})]})}const jv=J({count:36,seed:1701,instrument:!0,plugins:()=>[],coreProps:e=>({columns:3,onItemClick:n=>e.log(`onItemClick #${n}（Core 的项点击回调）`)}),chrome:e=>d.jsx(Nv,{api:e})}),Ev=Object.freeze(Object.defineProperty({__proto__:null,default:jv,meta:Mv},Symbol.toStringTag,{value:"Module"})),Lv={slug:"lifecycle",title:"生命周期和事件",group:"advanced",intro:"13 个回调接满，滚一下就能看见谁在什么时候触发。",why:"要在「布局完成」后做点什么（补曝光统计、量真实高度、写埋点），就得知道 onLayout 与 onLayoutComplete 的差别：后者里读 layout 才是新的。",plugs:[],props:["onMount={() => log('onMount')}","onLayoutComplete={() => log('布局完成')}","onScroll={(t) => log('scroll ' + t)}","onItemEnterViewport={(i) => log('enter #' + i)}","onReachBottom={() => log('到底了')}"],note:"onUnmount 只在组件卸载时触发（换页时能在浏览器控制台看到）。视口事件按「可见比例」算，部分可见也会触发一次 enter。"},Ov=J({count:40,seed:1901,instrument:!0,plugins:()=>[],coreProps:e=>{const{log:n}=e;let t=0,r=0;return{columns:3,onMount:()=>n("onMount · 容器挂载"),onBeforeLayout:()=>(n("onBeforeLayout · 返回 false 会中断本次布局","info"),!0),onLayout:()=>n("onLayout · 开始算位置","info"),onLayoutComplete:()=>n("onLayoutComplete · 位置已写入，现在读 layout 是新的"),onItemMount:o=>{o<3&&n(`onItemMount #${o}`,"info")},onItemUnmount:o=>{o<3&&n(`onItemUnmount #${o}`,"info")},onItemEnterViewport:(o,i)=>{r+=1,r<40&&n(`onItemEnterViewport #${o} 可见 ${i.visibleRatio*100|0}%`)},onItemLeaveViewport:o=>{r<40&&n(`onItemLeaveViewport #${o}`,"info")},onScroll:o=>{const i=performance.now();i-t<400||(t=i,n(`onScroll ${Math.round(o)}`,"info"))},onResize:(o,i)=>n(`onResize ${o}×${i}`),onReachBottom:o=>n(`onReachBottom 距底 ${Math.round(o)}px`),onItemClick:o=>n(`onItemClick #${o}（点卡片试试）`)}},chrome:()=>d.jsx("p",{className:"stage-tip",children:"滚动、点卡片、拖窗口宽度 —— 三种行为分别触发滚动、点击、尺寸三类事件"})}),Dv=Object.freeze(Object.defineProperty({__proto__:null,default:Ov,meta:Lv},Symbol.toStringTag,{value:"Module"})),zv={slug:"advanced",title:"高级配置",group:"advanced",intro:"padding、useTransform、alignmentMode、节流防抖、debug —— 一页调完。",why:"嵌在带内边距的容器里（padding 要参与布局，不能靠外层 margin）、要给每一项套自定义样式（itemClassName）、或怀疑布局算错要看耗时（debug）时用。",plugs:[],props:["columns={3}","padding={{{padding}}}",'alignmentMode="{{{mode}}}"',"useTransform={{{useTransform}}}","throttleDelay={{{throttle}}}","debounceDelay={{{debounce}}}","debug={{{debug}}}","containerStyle={{ height: 420 }}"],note:"padding 是参与布局计算的（可用宽度 = 容器宽 − 左右 padding），所以它不能当成外层 margin 用。useTransform=false 时项改用 top/left 定位，打印和读 offsetLeft 更直观。",controls:[{key:"padding",label:"padding",kind:"number",init:12,min:0,max:40},{key:"mode",label:"alignmentMode",kind:"select",init:"shortest",options:[{label:"shortest 最矮列",value:"shortest"},{label:"balanced 最少项",value:"balanced"},{label:"sequential 轮转",value:"sequential"}],hint:"balanced 列高会不齐，但每列张数接近"},{key:"useTransform",label:"useTransform",kind:"switch",init:!0},{key:"throttle",label:"throttleDelay",kind:"number",init:16,min:0,max:120,step:8,nonLayout:!0},{key:"debounce",label:"debounceDelay",kind:"number",init:150,min:0,max:600,step:10,nonLayout:!0},{key:"debug",label:"debug",kind:"switch",init:!1,hint:"控制台打印布局耗时"}]},Av=J({count:34,seed:2101,plugins:()=>[],instrument:!0,coreProps:e=>({columns:3,padding:Number(e.cfg.padding),alignmentMode:String(e.cfg.mode),useTransform:!!e.cfg.useTransform,throttleDelay:Number(e.cfg.throttle),debounceDelay:Number(e.cfg.debounce),debug:!!e.cfg.debug}),chrome:e=>d.jsxs("p",{className:"stage-tip",children:["定位方式：",d.jsx("b",{children:e.cfg.useTransform?"transform":"top / left"})," · 内边距"," ",d.jsx("b",{children:Number(e.cfg.padding)})," · 列数 ",d.jsx("b",{children:e.meter.columns})," · 总高"," ",d.jsx("b",{children:Math.round(e.meter.totalHeight)}),"px"]})}),Wv=Object.freeze(Object.defineProperty({__proto__:null,default:Av,meta:zv},Symbol.toStringTag,{value:"Module"}));function Hv(e){return{name:"AlignmentPlugin",priority:60,enabled:!0,hooks:{transformProps:n=>({...n,alignmentMode:e.mode}),onResize:n=>{var t;(t=n.relayout)==null||t.call(n)}}}}const Fv="AlignmentPlugin",Bv="设置瀑布流的列分配策略。shortest 让每列尽量等高（视觉最自然），balanced 让每列项数接近，sequential 按 index 轮转（可预测位置，适合需要与外部索引对齐的场景）。",Uv="2.0.0",Gv=["layout","布局"],Vv=[{name:"onResize",when:"容器宽度变化触发重排前",description:"按新宽度调整列数或卡片密度"},{name:"transformProps",when:"渲染前链式改写瀑布流 props",description:"补 gap / columns 默认值、按断点覆盖配置"}],Kv=[],Qv="只读取 context 字段（props / state / data），不调用上下文方法",Yv=[{name:"mode",type:'"shortest" | "balanced" | "sequential"',default:"shortest",description:"列分配策略"}],qv=`// 指定列分配策略：最矮列优先（shortest）/ 项数均衡（balanced）/ 顺序轮转（sequential）。
const Waterfall = withPlugins(WaterfallCore, [
  createAlignmentPlugin({
    mode: "shortest",
  }),
]);

<Waterfall items={items} renderItem={(item) => <Card data={item} />} />;`,Xv=["三种列分配策略","只改 props.alignmentMode，不影响其他配置","与 ResponsiveColumns / AutoColumn 正交"],Jv=["内容流：默认 shortest","等长卡片：balanced 更整齐","需要与后端顺序对齐：sequential"],Zv=["balanced 与 shortest 在列高相同时都取最左列，视觉上左偏是预期行为。"],Xp={name:Fv,description:Bv,since:Uv,tags:Gv,events:Vv,methods:Kv,methodsNote:Qv,config:Yv,example:qv,features:Xv,useCases:Jv,notes:Zv},Jp=Object.assign(Hv,{meta:Xp});function e0(e){if(!(e.minColumnWidth>0))throw new Error("[vane-waterfall] AutoColumnPlugin 需要正数的 minColumnWidth");return{name:"AutoColumnPlugin",priority:55,enabled:!0,hooks:{calculateColumns:(n,t)=>{const r=n.props,o=r.columnGap??r.gap??0,i=r.padding,l=typeof i=="number"?i*2:((i==null?void 0:i.left)??0)+((i==null?void 0:i.right)??0),s=Math.max(0,t-l);if(!s)return r.columns??1;const a=Math.max(1,Math.floor((s+o)/(e.minColumnWidth+o))),u=Math.max(1,e.minColumns??1),p=e.maxColumns??Number.POSITIVE_INFINITY;return Math.min(Math.max(a,u),p)}}}}const n0="AutoColumnPlugin",t0="按「容器可用宽度 ÷ 最小列宽」自动决定列数，取代写死 3 列。走 D1-A 布局钩子（calculateColumns），拿到的是真实容器宽度，不是 window.innerWidth。",r0="2.0.0",o0=["layout","layout-hook","响应式"],i0=[{name:"calculateColumns",when:"每次布局前，询问列数",description:"返回列数则覆盖 props.columns；返回 undefined 沿用配置"}],l0=[],s0="只读取 context 字段（props / state / data），不调用上下文方法",a0=[{name:"minColumnWidth",type:"number",default:"—",description:"每列最小宽度 px（必填）"},{name:"maxColumns",type:"number",default:"Infinity",description:"列数上限"},{name:"minColumns",type:"number",default:"1",description:"列数下限"}],u0=`// 按容器宽与最小列宽自动算列数，窄屏自动降列。
const Waterfall = withPlugins(WaterfallCore, [
  createAutoColumnPlugin({
    maxColumns: "Infinity",
    minColumns: 1,
  }),
]);

<Waterfall items={items} renderItem={(item) => <Card data={item} />} />;`,c0=["ResponsiveColumnsPlugin"],d0=["按容器宽度（不是视口宽度）算列数","列数上下限可夹","与 Gap / Padding 一起算，留白不吞列宽"],p0=["响应式信息流","侧边栏宽度可拖动的后台看板","移动端 → 桌面端同一套代码"],m0=["与 ResponsiveColumnsPlugin 同时装会互相覆盖列数，只选一个。"],Zp={name:n0,description:t0,since:r0,tags:o0,events:i0,methods:l0,methodsNote:s0,config:a0,example:u0,conflicts:c0,features:d0,useCases:p0,notes:m0},em=Object.assign(e0,{meta:Zp});function f0(e){const n=Object.values(e.breakpoints).sort((t,r)=>t.width-r.width);return{name:"ResponsiveColumnsPlugin",priority:55,enabled:!0,hooks:{calculateColumns:(t,r)=>{const o=e.fallbackColumns??t.props.columns??3;if(!r)return o;let i=o;for(const l of n)r>=l.width&&(i=l.columns);return i}}}}const g0="ResponsiveColumnsPlugin",h0="用一张断点表控制列数，命中哪档用哪档。走 D1-A 布局钩子（calculateColumns），按容器宽度匹配断点。",y0="2.0.0",v0=["layout","layout-hook","响应式"],x0=[{name:"calculateColumns",when:"每次布局前，询问列数",description:"返回列数则覆盖 props.columns；返回 undefined 沿用配置"}],w0=[],S0="只读取 context 字段（props / state / data），不调用上下文方法",b0=[{name:"breakpoints",type:"Record<string, { width: number; columns: number }>",default:"—",description:"断点表，按 width 升序匹配"}],k0=`// 按断点表决定列数（如 640 → 2 列、1024 → 3 列、1440 → 4 列）。
const Waterfall = withPlugins(WaterfallCore, [
  createResponsiveColumnsPlugin(),
]);

<Waterfall items={items} renderItem={(item) => <Card data={item} />} />;`,P0=["AutoColumnPlugin"],C0=["断点表驱动，设计稿几档就写几档","按容器宽度而非视口宽度匹配","未命中任何断点时回退到 props.columns"],_0=["严格对齐设计断点的站点","同一个组件嵌在不同宽度的容器里"],T0=["与 AutoColumnPlugin 互斥。"],nm={name:g0,description:h0,since:y0,tags:v0,events:x0,methods:w0,methodsNote:S0,config:b0,example:k0,conflicts:P0,features:C0,useCases:_0,notes:T0},tm=Object.assign(f0,{meta:nm});function uc(e,n){const t=e.responsive||{};return n>=1200&&t.xl?t.xl:n>=992&&t.lg?t.lg:n>=768&&t.md?t.md:n<768&&t.sm?t.sm:{}}function R0(e){let n=0,t="";const r=o=>{var a,u,p;const i=((u=(a=o.containerRef)==null?void 0:a.current)==null?void 0:u.clientWidth)??0;if(i<=0)return;const l=n;n=i;const s=JSON.stringify(uc(e,i));l>0&&s!==t&&((p=o.bus)==null||p.emit("props:invalidate")),t=s};return{name:"GapPlugin",priority:50,enabled:!0,hooks:{transformProps:o=>{const i=n>0?n:typeof window<"u"?window.innerWidth:1024,l={columnGap:e.columnGap,rowGap:e.rowGap},s=uc(e,i),a={columnGap:s.columnGap??l.columnGap??o.columnGap,rowGap:s.rowGap??l.rowGap??o.rowGap};return{...o,...a}},onMount:o=>{r(o)},onResize:o=>{r(o)}}}}const $0="GapPlugin",M0="把 rowGap / columnGap 收敛到一处配置，并支持按窗口宽度切换间距（窄屏 8px、宽屏 16px 这类）。",I0="2.0.0",N0=["layout","间距"],j0=[{name:"onMount",when:"瀑布流挂载完成",description:"初始化观察器与滚动监听，返回清理函数"},{name:"onResize",when:"容器宽度变化触发重排前",description:"按新宽度调整列数或卡片密度"},{name:"transformProps",when:"渲染前链式改写瀑布流 props",description:"补 gap / columns 默认值、按断点覆盖配置"},{name:"props:invalidate",when:"内部布局参数变更需要重排时",description:"通知宿主刷新 props 触发重新布局"}],E0=[],L0="只读取 context 字段（props / state / data），不调用上下文方法",O0=[{name:"columnGap",type:"number",default:"props.columnGap",description:"列间距 px"},{name:"rowGap",type:"number",default:"props.rowGap",description:"行间距 px"},{name:"responsive",type:"{ sm?, md?, lg?, xl? }",default:"—",description:"断点覆盖（按 window 宽度）"}],D0=`// 统一控制行/列间距，支持按断点给不同间距。
const Waterfall = withPlugins(WaterfallCore, [
  createGapPlugin(),
]);

<Waterfall items={items} renderItem={(item) => <Card data={item} />} />;`,z0=["行列间距一处配置","断点覆盖（sm/md/lg/xl）","不填则回退到 props"],A0=["设计规范里间距随断点变化","同一组件在不同页面用不同密度"],W0=["断点判断用的是 window.innerWidth（间距通常跟视口走，与列数按容器算不一样）。","断点是「命中即覆盖」：桌面窗口 ≥1200 又配了 responsive.lg，那就一直是 lg 的值，config.columnGap/rowGap 在这档不起作用；想让手写值生效就别给该档位配 responsive。","sm 只在小屏（<768）生效，不会被当成兜底档套到桌面端。"],rm={name:$0,description:M0,since:I0,tags:N0,events:j0,methods:E0,methodsNote:L0,config:O0,example:D0,features:z0,useCases:A0,notes:W0},om=Object.assign(R0,{meta:rm});function H0(e){return{name:"FixedHeightPlugin",priority:45,enabled:!0,hooks:{transformProps:n=>{const{itemHeight:t}=e,r=(n.items||[]).map(o=>typeof o=="object"&&o!==null&&"height"in o?{...o,height:t}:o);return{...n,items:r}},onResize:n=>{var t;(t=n.relayout)==null||t.call(n)}}}}const F0="FixedHeightPlugin",B0="把数据里带 height 字段的项统一改写为固定高度，瀑布流变成等高网格。适合「图少字多」的卡片流——等高反而更好扫读。",U0="2.0.0",G0=["layout","网格"],V0=[{name:"onResize",when:"容器宽度变化触发重排前",description:"按新宽度调整列数或卡片密度"},{name:"transformProps",when:"渲染前链式改写瀑布流 props",description:"补 gap / columns 默认值、按断点覆盖配置"}],K0=[],Q0="只读取 context 字段（props / state / data），不调用上下文方法",Y0=[{name:"itemHeight",type:"number",default:"—",description:"统一项高 px（必填）"}],q0=`// 把项高度统一成固定值，瀑布流退化为等高网格。
const Waterfall = withPlugins(WaterfallCore, [
  createFixedHeightPlugin(),
]);

<Waterfall items={items} renderItem={(item) => <Card data={item} />} />;`,X0=["等高网格（严格对齐）","只改数据里已有的 height 字段","与 Pagination / Filter 组合仍然成立"],J0=["商品列表（图固定比例）","后台看板卡片","需要严格栅格对齐的页面"],Z0=["数据里没有 height 字段时不会生效——高度由 renderItem 自己的内容决定。"],im={name:F0,description:B0,since:U0,tags:G0,events:V0,methods:K0,methodsNote:Q0,config:Y0,example:q0,features:X0,useCases:J0,notes:Z0},lm=Object.assign(H0,{meta:im});function ex(e){const n=new Set(e.pinnedIndices),t=Math.max(0,e.column??0),r=new Map;return{name:"PinItemPlugin",priority:100,enabled:!0,hooks:{onBeforeLayout:()=>(r.clear(),!0),calculateItemPosition:(o,i,l,s)=>{const a=o.props.rowGap??o.props.gap??0;if(!n.has(i)){const p=r.get(s.column);return p!==void 0&&s.y<p?{y:p}:void 0}const u=r.get(t)??0;return r.set(t,u+l+a),{column:t,y:u,width:s.width,height:l,row:0}}}}}const nx="PinItemPlugin",tx="把若干索引的项钉在顶部指定列，其余项从它们下方继续排。走 D1-A 布局钩子（calculateItemPosition），是旧版宣称但从未生效的能力。",rx="2.0.0",ox=["layout","layout-hook","置顶"],ix=[{name:"onBeforeLayout",when:"开始一次布局之前",description:"返回 false 可阻止本次布局（如数据仍在加载）"},{name:"calculateItemPosition",when:"每个卡片参与布局时（拿到 index / item / columns）",description:"返回坐标片段可覆盖列分配结果（置顶、跨列、错位）"}],lx=[],sx="只读取 context 字段（props / state / data），不调用上下文方法",ax=[{name:"pinnedIndices",type:"number[]",default:"[]",description:"要钉住的项索引"},{name:"column",type:"number",default:"0",description:"钉到第几列"}],ux=`// 把指定索引的项钉在顶部同一列，不参与常规列高推进（广告位 / 公告卡）。
const Waterfall = withPlugins(WaterfallCore, [
  createPinItemPlugin({
    pinnedIndices: [],
    column: 0,
  }),
]);

<Waterfall items={items} renderItem={(item) => <Card data={item} />} />;`,cx=["置顶项不占常规列高：后续项从置顶块下方开始","支持多列分别置顶（column 可不同）","每次布局前重置偏移，items 变化后不会累加错位"],dx=["信息流首位的推广卡","公告 / 置顶帖","需要固定在左上角的活动位"],px=["置顶项之间按 pinnedIndices 顺序纵向堆叠，同一列多条会依次往下排。","置顶会挤掉该列的正常网格位置，pinnedIndices 建议控制在 1~2 条。","换列后的 x 由布局引擎按本轮列宽补齐，插件只返回 column 即可 —— 自己用「列宽 + 间距」反推 x 会在间距由其它插件（GapPlugin）注入时算错。"],sm={name:nx,description:tx,since:rx,tags:ox,events:ix,methods:lx,methodsNote:sx,config:ax,example:ux,features:cx,useCases:dx,notes:px},am=Object.assign(ex,{meta:sm});function mx(e){return{name:"ThrottlePlugin",priority:80,enabled:!0,hooks:{transformProps:n=>({...n,throttleDelay:e.scroll,debounceDelay:e.resize??n.debounceDelay})}}}const fx="ThrottlePlugin",gx="接管 Core 的 throttleDelay（滚动回调节流）与 debounceDelay（尺寸变化后多久重排）。默认 16ms / 150ms，长列表滚动卡顿时可以放宽到 32 / 300。",hx="2.0.0",yx=["perf","性能"],vx=[{name:"transformProps",when:"渲染前链式改写瀑布流 props",description:"补 gap / columns 默认值、按断点覆盖配置"}],xx=[],wx="只读取 context 字段（props / state / data），不调用上下文方法",Sx=[{name:"scroll",type:"number",default:"—",description:"滚动节流 ms（必填）"},{name:"resize",type:"number",default:"props.debounceDelay",description:"布局防抖 ms"}],bx=`// 调整滚动节流与尺寸防抖，弱网/低端机可放宽。
const Waterfall = withPlugins(WaterfallCore, [
  createThrottlePlugin(),
]);

<Waterfall items={items} renderItem={(item) => <Card data={item} />} />;`,kx=["滚动节流与布局防抖分开调","只改 props，不改算法","与 DebounceLayoutPlugin 叠加时后者优先"],Px=["低端安卓机长列表","滚动时 CPU 占用过高","拖拽侧栏时减少重排"],Cx=["scroll 低于 16ms 没有意义（浏览器帧率上限）。"],um={name:fx,description:gx,since:hx,tags:yx,events:vx,methods:xx,methodsNote:wx,config:Sx,example:bx,features:kx,useCases:Px,notes:Cx},cm=Object.assign(mx,{meta:um});function _x(e){return{name:"DebounceLayoutPlugin",priority:75,enabled:!0,hooks:{transformProps:n=>({...n,debounceDelay:e.delay})}}}const Tx="DebounceLayoutPlugin",Rx="只调 debounceDelay：容器宽度连续变化（抽屉展开、分栏拖拽）时，等变化停下来再算一次布局，避免每帧重排。",$x="2.0.0",Mx=["perf","性能"],Ix=[{name:"transformProps",when:"渲染前链式改写瀑布流 props",description:"补 gap / columns 默认值、按断点覆盖配置"}],Nx=[],jx="只读取 context 字段（props / state / data），不调用上下文方法",Ex=[{name:"delay",type:"number",default:"—",description:"布局防抖 ms（必填）"}],Lx=`// 单独放大布局防抖，容器频繁变宽时（抽屉/侧栏动画）不抖。
const Waterfall = withPlugins(WaterfallCore, [
  createDebounceLayoutPlugin(),
]);

<Waterfall items={items} renderItem={(item) => <Card data={item} />} />;`,Ox=["只影响布局时机，不影响渲染","可被 ThrottlePlugin 覆盖","对移动端软键盘弹出也有效"],Dx=["可折叠侧栏","分栏宽度拖拽","横竖屏切换"],zx=["delay 过大会让「展开后布局」明显滞后，建议 120–250ms。"],dm={name:Tx,description:Rx,since:$x,tags:Mx,events:Ix,methods:Nx,methodsNote:jx,config:Ex,example:Lx,features:Ox,useCases:Dx,notes:zx},pm=Object.assign(_x,{meta:dm}),Ax="(prefers-reduced-motion: reduce)";function Wx(e={}){var p;const n=typeof window<"u"&&typeof window.matchMedia=="function"?window.matchMedia(Ax):null;let t=(n==null?void 0:n.matches)??!1;const r=e.disableTransform??!0,o=e.removeTransitions??!0,i=new Map,l=new Map,s=c=>{if(!(!c||!o))if(t){const m=c.style.transitionDuration;m&&m!=="0s"?l.set(c,m):l.has(c)||l.set(c,m),c.style.setProperty("transition-duration","0s")}else{const m=l.get(c);if(m===void 0)return;m?c.style.setProperty("transition-duration",m):c.style.removeProperty("transition-duration"),l.delete(c)}},a=()=>i.forEach(c=>s(c)),u=c=>{c.matches!==t&&(t=c.matches,a())};return(p=n==null?void 0:n.addEventListener)==null||p.call(n,"change",u),{name:"ReducedMotionPlugin",priority:70,enabled:!0,hooks:{transformProps:c=>{if(!t)return c;const m={...c};return r&&(m.useTransform=!1),o&&(m.itemStyle={...c.itemStyle??{},transitionDuration:"0s"}),m},onItemMount:(c,m,g)=>{i.set(m,g),s(g)},onItemUnmount:(c,m)=>{i.delete(m)},onLayoutComplete:c=>{c.itemRefs.forEach((m,g)=>{m&&i.set(g,m),s(m)})},onUnmount:()=>{var c;(c=n==null?void 0:n.removeEventListener)==null||c.call(n,"change",u),i.clear(),l.clear()}}}}const Hx="ReducedMotionPlugin",Fx="检测 `prefers-reduced-motion: reduce`，命中后把 useTransform 关掉并清掉项上的 transition。前庭功能敏感用户不会因为滚动时的位置微动而不适。",Bx="2.0.0",Ux=["perf","a11y"],Gx=[{name:"onUnmount",when:"瀑布流卸载前",description:"断开观察器、移除滚动监听"},{name:"onItemMount",when:"单个卡片挂载并拿到 DOM 元素时",description:"按卡片绑定监听、观察器、埋点"},{name:"onItemUnmount",when:"单个卡片卸载时",description:"解绑该卡片的监听与观察器"},{name:"onLayoutComplete",when:"DOM 落位完成（可安全测量）",description:"测量真实高度、懒加载判定、曝光上报"},{name:"transformProps",when:"渲染前链式改写瀑布流 props",description:"补 gap / columns 默认值、按断点覆盖配置"}],Vx=[],Kx="只读取 context 字段（props / state / data），不调用上下文方法",Qx=[{name:"disableTransform",type:"boolean",default:"true",description:"命中偏好时改用 left/top 定位"},{name:"removeTransitions",type:"boolean",default:"true",description:"命中偏好时清掉项过渡"}],Yx=`// 尊重系统「减少动画」偏好：关掉 transform 定位与项过渡。
const Waterfall = withPlugins(WaterfallCore, [
  createReducedMotionPlugin({
    disableTransform: true,
    removeTransitions: true,
  }),
]);

<Waterfall items={items} renderItem={(item) => <Card data={item} />} />;`,qx=["系统偏好驱动，零配置生效","两项能力可分别关闭","与 TransitionPlugin 同装时优先生效"],Xx=["政务 / 医疗类站点","无障碍合规要求","低性能设备"],Jx=["偏好由 matchMedia 驱动，并监听 change：运行中改系统设置即时生效（定位方式要等下一次重渲染才切过来）。","只压 `transition-duration`，不写 `transition: none` —— 写简写会把 TransitionPlugin 的过渡整条覆盖，撤销偏好后无从还原。","与 TransitionPlugin 同装不是冲突：ReducedMotion 优先级更高，会先执行并压住过渡。"],mm={name:Hx,description:Fx,since:Bx,tags:Ux,events:Gx,methods:Vx,methodsNote:Kx,config:Qx,example:Yx,features:qx,useCases:Xx,notes:Jx},fm=Object.assign(Wx,{meta:mm});function Zx(e={}){const n=e.duration??300,t=e.easing??"ease";return{name:"TransitionPlugin",priority:65,enabled:!0,hooks:{onItemMount:(r,o,i)=>{i.style.transition=`transform ${n}ms ${t}, opacity ${n}ms ${t}`},onLayout:r=>{r.itemRefs.forEach(o=>{o&&(o.style.transition=`transform ${n}ms ${t}, opacity ${n}ms ${t}`)})}}}}const ew="TransitionPlugin",nw="给每个项挂上 transform + opacity 的 CSS 过渡，布局重排、分页切换、筛选后重新排列时位置变化是滑过去的，不是瞬移。",tw="2.0.0",rw=["perf","动效"],ow=[{name:"onItemMount",when:"单个卡片挂载并拿到 DOM 元素时",description:"按卡片绑定监听、观察器、埋点"},{name:"onLayout",when:"布局计算完成、结果已确定",description:"读取每列高度、做二次修正或上报"}],iw=[],lw="只读取 context 字段（props / state / data），不调用上下文方法",sw=[{name:"duration",type:"number",default:"300",description:"过渡时长 ms"},{name:"easing",type:"string",default:"ease",description:"缓动函数"}],aw=`// 布局变化时给项加 transform/opacity 过渡，插入新数据不「闪现」。
const Waterfall = withPlugins(WaterfallCore, [
  createTransitionPlugin({
    duration: 300,
    easing: "ease",
  }),
]);

<Waterfall items={items} renderItem={(item) => <Card data={item} />} />;`,uw=["ReducedMotionPlugin"],cw=["项位置变化平滑过渡","挂载时即生效（onItemMount）","与 ReducedMotionPlugin 互斥"],dw=["筛选 / 排序后重排","分页切换","动态插入卡片"],pw=["首屏大量项同时过渡会有一次「整体滑入」，想要更克制可以把 duration 降到 150ms。"],gm={name:ew,description:nw,since:tw,tags:rw,events:ow,methods:iw,methodsNote:lw,config:sw,example:aw,conflicts:uw,features:cw,useCases:dw,notes:pw},va=Object.assign(Zx,{meta:gm});function mw(e={}){return{name:"FilterPlugin",priority:40,enabled:!0,hooks:{transformProps:n=>{const t=Array.isArray(n.items)?n.items:[],r=n.filterFn||e.predicate;if(typeof r!="function")return n;const o=t.filter((i,l)=>{try{return!!r(i,l)}catch{return!0}});return{...n,items:o}},onPropsChange:(n,t,r)=>{var a;const o=t==null?void 0:t.filterFn,i=r==null?void 0:r.filterFn;if(((typeof(r==null?void 0:r.scrollToTopOnFilterChange)=="boolean"?r.scrollToTopOnFilterChange:void 0)??!!e.scrollToTop)&&o!==i){const u=(r==null?void 0:r.scrollToTopBehavior)??e.scrollBehavior??"auto";(a=n.scrollToTop)==null||a.call(n,{behavior:u})}}}}}const fw="FilterPlugin",gw="用谓词函数过滤数据，优先读 `props.filterFn`，没有就用工厂里传入的 predicate。过滤条件变了可以自动滚回顶部（默认不开）。",hw="2.0.0",yw=["data","数据管线"],vw=[{name:"onPropsChange",when:"props 变化后",description:"数据或配置变化时请求重排"},{name:"transformProps",when:"渲染前链式改写瀑布流 props",description:"补 gap / columns 默认值、按断点覆盖配置"}],xw=[],ww="只读取 context 字段（props / state / data），不调用上下文方法",Sw=[{name:"predicate",type:"(item, index) => boolean",default:"—",description:"默认谓词，可被 props.filterFn 覆盖"},{name:"scrollToTop",type:"boolean",default:"false",description:"条件变化后回顶"},{name:"scrollBehavior",type:'"auto" | "smooth"',default:'"auto"',description:"回顶行为"}],bw=`// 按谓词过滤 items，参数变化可自动回顶。
const Waterfall = withPlugins(WaterfallCore, [
  createFilterPlugin({
    scrollToTop: false,
    scrollBehavior: "auto",
  }),
]);

<Waterfall items={items} renderItem={(item) => <Card data={item} />} />;`,kw=["谓词抛错时按「保留」处理，不会整表消失","props.filterFn 优先，便于页面动态换过滤条件","可与 Sort / Search / Pagination 串联"],Pw=["分类 Tab 切换","只看有货 / 只看促销","价格区间筛选"],Cw=["数据管线的执行顺序由 priority 决定：Filter(40) → Sort(30) → Search(20) → Pagination(10)。","先过滤再分页，页码总数才是过滤后的总数——顺序反了会出现「第 2 页空」。"],hm={name:fw,description:gw,since:hw,tags:yw,events:vw,methods:xw,methodsNote:ww,config:Sw,example:bw,features:kw,useCases:Pw,notes:Cw},ym=Object.assign(mw,{meta:hm});function _w(e={}){return{name:"SortPlugin",priority:30,enabled:!0,hooks:{transformProps:n=>{const t=Array.isArray(n.items)?n.items:[],r=n.sortComparator||e.comparator;if(typeof r!="function")return n;const o=[...t].sort((i,l)=>{try{return r(i,l)}catch{return 0}});return{...n,items:o}},onPropsChange:(n,t,r)=>{var a;const o=t==null?void 0:t.sortComparator,i=r==null?void 0:r.sortComparator;if(((typeof(r==null?void 0:r.scrollToTopOnSortChange)=="boolean"?r.scrollToTopOnSortChange:void 0)??!!e.scrollToTop)&&o!==i){const u=(r==null?void 0:r.scrollToTopBehavior)??e.scrollBehavior??"auto";(a=n.scrollToTop)==null||a.call(n,{behavior:u})}}}}}const Tw="SortPlugin",Rw="用比较函数排序，优先读 `props.sortComparator`。排序总是在过滤之后、分页之前执行，保证「第 N 页」是排序后的第 N 页。",$w="2.0.0",Mw=["data","数据管线"],Iw=[{name:"onPropsChange",when:"props 变化后",description:"数据或配置变化时请求重排"},{name:"transformProps",when:"渲染前链式改写瀑布流 props",description:"补 gap / columns 默认值、按断点覆盖配置"}],Nw=[],jw="只读取 context 字段（props / state / data），不调用上下文方法",Ew=[{name:"comparator",type:"(a, b) => number",default:"—",description:"默认比较函数，可被 props.sortComparator 覆盖"},{name:"scrollToTop",type:"boolean",default:"false",description:"排序变化后回顶"},{name:"scrollBehavior",type:'"auto" | "smooth"',default:'"auto"',description:"回顶行为"}],Lw=`// 按比较函数排序 items，比较函数变化可自动回顶。
const Waterfall = withPlugins(WaterfallCore, [
  createSortPlugin({
    scrollToTop: false,
    scrollBehavior: "auto",
  }),
]);

<Waterfall items={items} renderItem={(item) => <Card data={item} />} />;`,Ow=["稳定排序（不改原数组）","比较函数抛错按相等处理","与 Filter / Search 顺序固定"],Dw=["价格 / 时间排序","热度排序","手动置顶项优先"],zw=["排序会复制数组（`[...items].sort`），不会改调用方传入的 items。"],vm={name:Tw,description:Rw,since:$w,tags:Mw,events:Iw,methods:Nw,methodsNote:jw,config:Ew,example:Lw,features:Ow,useCases:Dw,notes:zw},xm=Object.assign(_w,{meta:vm});function Aw(e={}){const n=e.fields??[];return{name:"SearchPlugin",priority:20,enabled:!0,hooks:{transformProps:t=>{const r=String(t.searchQuery??"").trim(),o=Array.isArray(t.items)?t.items:[];if(!r)return t;const i=r.toLowerCase(),l=o.filter(s=>{if(typeof s!="object"||s===null)return!1;const a=n.length>0?n:Object.keys(s);for(const u of a){const p=s[u];if(p!=null&&String(p).toLowerCase().includes(i))return!0}return!1});return{...t,items:l}},onPropsChange:(t,r,o)=>{var u;const i=String((r==null?void 0:r.searchQuery)??""),l=String((o==null?void 0:o.searchQuery)??"");if(((typeof(o==null?void 0:o.scrollToTopOnSearchChange)=="boolean"?o.scrollToTopOnSearchChange:void 0)??!!e.scrollToTop)&&i!==l){const p=(o==null?void 0:o.scrollToTopBehavior)??e.scrollBehavior??"auto";(u=t.scrollToTop)==null||u.call(t,{behavior:p})}}}}}const Ww="SearchPlugin",Hw="读取 `props.searchQuery`，在指定字段上做大小写不敏感的 `includes` 匹配。没指定字段就对对象的全部自有字段匹配。",Fw="2.0.0",Bw=["data","数据管线","搜索"],Uw=[{name:"onPropsChange",when:"props 变化后",description:"数据或配置变化时请求重排"},{name:"transformProps",when:"渲染前链式改写瀑布流 props",description:"补 gap / columns 默认值、按断点覆盖配置"}],Gw=[],Vw="只读取 context 字段（props / state / data），不调用上下文方法",Kw=[{name:"fields",type:"(keyof T)[]",default:"[]",description:"参与匹配的字段；空则匹配全部自有字段"},{name:"scrollToTop",type:"boolean",default:"false",description:"关键词变化后回顶"},{name:"scrollBehavior",type:'"auto" | "smooth"',default:'"auto"',description:"回顶行为"}],Qw=`// 按 props.searchQuery 做大小写不敏感的多字段包含匹配。
const Waterfall = withPlugins(WaterfallCore, [
  createSearchPlugin({
    fields: [],
    scrollToTop: false,
    scrollBehavior: "auto",
  }),
]);

<Waterfall items={items} renderItem={(item) => <Card data={item} />} />;`,Yw=["大小写不敏感","多字段 OR 匹配","空关键词直接放行（不触发过滤）"],qw=["站内搜索结果页","后台列表即时搜索","商品名 / 店铺名联合搜索"],Xw=["纯前端 `includes`，不排序也不做拼音；要相关性排序请在 Search 之后接 SortPlugin。"],wm={name:Ww,description:Hw,since:Fw,tags:Bw,events:Uw,methods:Gw,methodsNote:Vw,config:Kw,example:Qw,features:Yw,useCases:qw,notes:Xw},xa=Object.assign(Aw,{meta:wm});function Jw(e={}){return{name:"PaginationPlugin",priority:10,enabled:!0,hooks:{transformProps:n=>{const t=Number(n.pageIndex??1),r=Math.max(1,Math.floor(Number.isFinite(t)?t:1)),o=Number(n.pageSize??e.pageSize??20),i=Math.max(1,Math.floor(Number.isFinite(o)?o:20)),l=Array.isArray(n.items)?n.items:[],s=Math.max(1,Math.ceil(l.length/i)),a=Math.min(r,s);r>s&&console.warn(`[vane-waterfall] PaginationPlugin：pageIndex=${r} 超出总页数 ${s}，已钳制到第 ${a} 页`);const u=(a-1)*i,p=l.slice(u,u+i);return{...n,items:p}},onPropsChange:(n,t,r)=>{var a;const o=Math.max(1,Number((t==null?void 0:t.pageIndex)??1)),i=Math.max(1,Number((r==null?void 0:r.pageIndex)??1));if(((typeof(r==null?void 0:r.scrollToTopOnPageChange)=="boolean"?r.scrollToTopOnPageChange:void 0)??!!e.scrollToTop)&&o!==i){const u=(r==null?void 0:r.scrollToTopBehavior)??e.scrollBehavior??"auto";(a=n.scrollToTop)==null||a.call(n,{behavior:u})}}}}}const Zw="PaginationPlugin",e1="读 `props.pageIndex`（1 基）与 `props.pageSize` 切片。放在数据管线最末端，保证切的是「过滤 + 排序 + 搜索」之后的结果。",n1="2.0.0",t1=["data","数据管线","分页"],r1=[{name:"onPropsChange",when:"props 变化后",description:"数据或配置变化时请求重排"},{name:"transformProps",when:"渲染前链式改写瀑布流 props",description:"补 gap / columns 默认值、按断点覆盖配置"}],o1=[],i1="只读取 context 字段（props / state / data），不调用上下文方法",l1=[{name:"pageSize",type:"number",default:"props.pageSize ?? 20",description:"每页条数"},{name:"scrollToTop",type:"boolean",default:"false",description:"翻页后回顶"},{name:"scrollBehavior",type:'"auto" | "smooth"',default:'"auto"',description:"回顶行为"}],s1=`// 按 props.pageIndex / pageSize 切片，页码从 1 开始。
const Waterfall = withPlugins(WaterfallCore, [
  createPaginationPlugin({
    scrollToTop: false,
    scrollBehavior: "auto",
  }),
]);

<Waterfall items={items} renderItem={(item) => <Card data={item} />} />;`,a1=["InfiniteScrollPlugin"],u1=["1 基页码（与 UI 分页器一致）","pageIndex 非法值自动夹到 1","翻页自动回顶可选"],c1=["后台列表分页","搜索结果分页","与 URLSyncPlugin 配合做可分享链接"],d1=["pageSize 优先级：props.pageSize > 工厂 config.pageSize > 20。"],Sm={name:Zw,description:e1,since:n1,tags:t1,events:r1,methods:o1,methodsNote:i1,config:l1,example:s1,conflicts:a1,features:u1,useCases:c1,notes:d1},bm=Object.assign(Jw,{meta:Sm});function p1(e={}){const n=Math.max(1,e.threshold??300),t=new WeakMap,r=o=>{var i;return((i=o.containerRef)==null?void 0:i.current)??o.bus};return{name:"InfiniteScrollPlugin",priority:35,enabled:!0,hooks:{transformProps:o=>({...o,reachBottomOffset:n}),onReachBottom:async(o,i)=>{const l=r(o);if(t.get(l)||o.hasMore===!1||i>n)return;const s=e.onLoadMore??o.props.onLoadMore;if(typeof s=="function"){t.set(l,!0);try{await Promise.resolve(s())}finally{t.delete(l)}}},onUnmount:o=>{t.delete(r(o))}}}}const m1="InfiniteScrollPlugin",f1="监听 Core 的 onReachBottom，在距底部 `threshold` 像素内触发 onLoadMore。自带并发锁：上一次还没结束不会重复触发。",g1="2.0.0",h1=["data","加载更多"],y1=[{name:"onUnmount",when:"瀑布流卸载前",description:"断开观察器、移除滚动监听"},{name:"onReachBottom",when:"滚动触底（distance 为距底像素）",description:"加载更多、预取下一页"},{name:"transformProps",when:"渲染前链式改写瀑布流 props",description:"补 gap / columns 默认值、按断点覆盖配置"}],v1=[],x1="只读取 context 字段（props / state / data），不调用上下文方法",w1=[{name:"threshold",type:"number",default:"300",description:"触发距离 px"},{name:"onLoadMore",type:"() => void | Promise<void>",default:"props.onLoadMore",description:"加载回调"}],S1=`// 滚动到距底部阈值内触发加载更多，带并发锁防重复请求。
const Waterfall = withPlugins(WaterfallCore, [
  createInfiniteScrollPlugin({
    threshold: 300,
  }),
]);

<Waterfall items={items} renderItem={(item) => <Card data={item} />} />;`,b1=["PaginationPlugin"],k1=["距底 300px 预加载，滚到底时数据已就位","并发锁：加载中不重复触发","context.hasMore 为 false 时自动停"],P1=["信息流无限滚动","画廊继续加载","搜索结果瀑布流"],C1=["阈值不要小于一屏（约 600px），否则用户滚到底会看到空白等待。","翻页类场景请用 PaginationPlugin，两者不要同装。"],km={name:m1,description:f1,since:g1,tags:h1,events:y1,methods:v1,methodsNote:x1,config:w1,example:S1,conflicts:b1,features:k1,useCases:P1,notes:C1},Pm=Object.assign(p1,{meta:km});function _1(e={}){const{log:n=!1,showOverlay:t=!1}=e,r=new Map,o=new Map;let i=null;const l=()=>Array.from(r.values()).reduce((u,p)=>u+p,0),s=(u,p,c)=>{var m,g;try{const x=(g=(m=u.props)==null?void 0:m.keyExtractor)==null?void 0:g.call(m,p,c);if(x!=null)return String(x)}catch{}return`#${c}`},a=u=>{var c;const p=u.items;(i===null||p!==i)&&(i=p,r.clear(),o.clear(),(c=u.sharedData)==null||c.set("click-count",0))};return{name:"ClickAnalyticsPlugin",enabled:!0,getStats:()=>({total:l(),byIndex:Array.from(r.entries()).map(([u,p])=>({index:o.get(u)??0,key:u,clicks:p})).sort((u,p)=>u.index-p.index||u.key.localeCompare(p.key))}),hooks:{onMount:u=>{var p;(p=u.sharedData)==null||p.set("click-count",l())},onLayoutComplete:u=>{a(u)},onItemClick:(u,p,c,m)=>{var S,h,f;a(u);const g=s(u,c,p);o.set(g,p);const x=(r.get(g)??0)+1;r.set(g,x);const w=l();(S=u.sharedData)==null||S.set("click-count",w),(h=u.bus)==null||h.emit("analytics:click",{index:p,key:g,item:c,event:m,total:w}),(f=u.forceUpdate)==null||f.call(u),n&&console.log(`[ClickAnalytics] item=${p} total=${w}`)},renderOverlay:u=>{var c;if(!t)return null;const p=((c=u.sharedData)==null?void 0:c.get("click-count"))||0;return d.jsxs("div",{style:{position:"absolute",top:12,right:12,padding:"10px 12px",background:"#222",color:"#fff",borderRadius:8,fontSize:14,fontWeight:600,boxShadow:"0 4px 12px rgba(0,0,0,0.25)",border:"1px solid rgba(255,255,255,0.15)",pointerEvents:"none",zIndex:99},children:["点击次数：",p,d.jsx("div",{style:{fontSize:12,fontWeight:400,opacity:.85,marginTop:4},children:"提示：点击任意卡片观察计数变化"})]})}}}}const T1="ClickAnalyticsPlugin",R1="统计每次项点击并累计总数，向 bus 发 `analytics:click`（带 index / item / total），`getStats()` 可随时取出按 index 的计数。默认只上报不显示角标，接入真实版式时不会被调试面板盖住内容。",$1="2.0.0",M1=["interaction","埋点"],I1=[{name:"onMount",when:"瀑布流挂载完成",description:"初始化观察器与滚动监听，返回清理函数"},{name:"onItemClick",when:"单个卡片被点击",description:"卡片级跳转与点击埋点"},{name:"onLayoutComplete",when:"DOM 落位完成（可安全测量）",description:"测量真实高度、懒加载判定、曝光上报"},{name:"renderOverlay",when:"每次渲染，滚动容器内的内容层之上",description:"回到顶部、加载提示、浮层工具"},{name:"analytics:click",when:"卡片点击后",description:"广播 { index, key, item, event, total } 点击埋点"}],N1=[],j1="只读取 context 字段（props / state / data），不调用上下文方法",E1=[{name:"log",type:"boolean",default:"false",description:"是否在控制台打印每次点击"},{name:"showOverlay",type:"boolean",default:"false",description:"是否显示右上角计数角标"}],L1=`// 统计项点击次数，发 \`analytics:click\` 事件，可选角标与日志。
const Waterfall = withPlugins(WaterfallCore, [
  createClickAnalyticsPlugin({
    log: false,
    showOverlay: false,
  }),
]);

<Waterfall items={items} renderItem={(item) => <Card data={item} />} />;`,O1=["点击总量 + 按 index 明细（getStats）","bus 事件可被外部订阅上报","角标默认关闭"],D1=["内容流点击率统计","AB 实验埋点","调试点击行为"],z1=["生产环境请把数据从 bus 事件或 getStats() 接到自己的埋点 SDK，不要让插件直接打日志。","计数只在内存里，刷新即清零 —— 想持久化要自己定时取 getStats() 上报。"],Cm={name:T1,description:R1,since:$1,tags:M1,events:I1,methods:N1,methodsNote:j1,config:E1,example:L1,features:O1,useCases:D1,notes:z1},_m=Object.assign(_1,{meta:Cm});function A1(e={}){const n=e.showOverlay??e.showOverlaySummary??!1,t=new Map,r=new Map,o=new Map;let i=!1,l=null;const s=p=>Array.from(p.values()).reduce((c,m)=>c+m,0),a=(p,c,m)=>{var g,x;try{const w=(x=(g=p.props)==null?void 0:g.keyExtractor)==null?void 0:x.call(g,c,m);if(w!=null)return String(w)}catch{}return`#${m}`},u=p=>{const c=p.items;(l===null||c!==l)&&(l=c,t.clear(),r.clear(),o.clear(),i=!1)};return{name:"HeatmapAnalyticsPlugin",enabled:!0,getStats:()=>{const p=new Set([...t.keys(),...r.keys()]);return{totalViews:s(t),totalClicks:s(r),items:Array.from(p).map(c=>({index:o.get(c)??0,key:c,views:t.get(c)??0,clicks:r.get(c)??0})).sort((c,m)=>c.index-m.index||c.key.localeCompare(m.key))}},hooks:{onLayoutComplete:p=>{if(u(p),i)return;const{start:c,end:m}=p.visibleRange,g=p.items;for(let x=c;x<=m;x++){const w=g[x];if(w===void 0)continue;const S=a(p,w,x);o.set(S,x),t.set(S,(t.get(S)||0)+1)}i=!0},onItemEnterViewport:(p,c)=>{u(p);const m=p.items[c];if(m===void 0)return;const g=a(p,m,c);o.set(g,c),t.set(g,(t.get(g)||0)+1)},onItemClick:(p,c,m)=>{var x;u(p);const g=a(p,m,c);o.set(g,c),r.set(g,(r.get(g)||0)+1),(x=p.forceUpdate)==null||x.call(p)},renderOverlay:()=>{if(!n)return null;const p=Array.from(t.values()).reduce((m,g)=>m+g,0),c=Array.from(r.values()).reduce((m,g)=>m+g,0);return d.jsxs("div",{style:{position:"sticky",top:0,zIndex:100,display:"flex",gap:12,alignItems:"center",padding:"6px 10px",background:"rgba(0,0,0,0.6)",color:"white",borderRadius:8,fontSize:12,marginBottom:8},children:[d.jsxs("span",{children:["曝光总计: ",p]}),d.jsxs("span",{children:["点击总计: ",c]})]})}}}}const W1="HeatmapAnalyticsPlugin",H1="统计每项进入视口次数与点击次数，可选顶部汇总条，`getStats()` 取出每项明细。曝光是瀑布流里最容易统计错的东西（滚动时反复进出视口），交给插件比自己写 IntersectionObserver 少踩坑。",F1="2.0.0",B1=["interaction","埋点","曝光"],U1=[{name:"onItemClick",when:"单个卡片被点击",description:"卡片级跳转与点击埋点"},{name:"onItemEnterViewport",when:"单个卡片进入视口",description:"卡片级曝光、视频自动播放等"},{name:"onLayoutComplete",when:"DOM 落位完成（可安全测量）",description:"测量真实高度、懒加载判定、曝光上报"},{name:"renderOverlay",when:"每次渲染，滚动容器内的内容层之上",description:"回到顶部、加载提示、浮层工具"}],G1=[],V1="只读取 context 字段（props / state / data），不调用上下文方法",K1=[{name:"showOverlay",type:"boolean",default:"false",description:"是否显示顶部汇总条"},{name:"showOverlaySummary",type:"boolean",default:"—",description:"showOverlay 的旧别名"}],Q1=`// 统计每项曝光次数与点击次数，可显示汇总条。
const Waterfall = withPlugins(WaterfallCore, [
  createHeatmapAnalyticsPlugin({
    showOverlay: false,
  }),
]);

<Waterfall items={items} renderItem={(item) => <Card data={item} />} />;`,Y1=["按项的曝光 / 点击双计数","首屏曝光在 onLayoutComplete 补一次","getStats() 输出可上报的扁平结构"],q1=["信息流曝光分析","广告位可见性验证","调试曝光策略"],X1=["首屏曝光靠 onLayoutComplete 补一次，否则第一帧显示 0。","真实上报要自己做去重与批次（插件只负责计数，不区分「同一项第几次进入」）。","计数只在内存里，刷新即清零 —— 定时取 getStats() 上报。"],Tm={name:W1,description:H1,since:F1,tags:B1,events:U1,methods:G1,methodsNote:V1,config:K1,example:Q1,features:Y1,useCases:q1,notes:X1},Rm=Object.assign(A1,{meta:Tm}),br="data-drag-over";function cc(e,n){var i;if(typeof document>"u")return null;const t=document.elementFromPoint(e,n),r=(i=t==null?void 0:t.closest)==null?void 0:i.call(t,"[data-index]");if(!r)return null;const o=Number(r.getAttribute("data-index"));return Number.isFinite(o)?o:null}function J1(e={}){const n=e.enabled??!0,t=e.showHandle??!1,r=e.touchHoldMs??180,o=(a,u,p)=>{var g;const c=Number(p);if(!Number.isFinite(c)||c===u)return;a.sharedData.set("drag-from",c),a.sharedData.set("drag-to",u),a.bus.emit("drag:reorder",{from:c,to:u});const m=a.props.items;(g=e.onReorder)==null||g.call(e,c,u,m==null?void 0:m[c])},i=()=>{document.querySelectorAll(`[${br}]`).forEach(a=>a.removeAttribute(br))},l=()=>{typeof document>"u"||(i(),document.body.style.userSelect="",document.body.style.cursor="")},s=(a,u,p)=>{if(a.pointerType==="mouse")return;const c=a.clientX,m=a.clientY,g=Date.now();let x=!1,w=null;const S=f=>{if(!x){const b=Date.now()-g>=r,C=Math.hypot(f.clientX-c,f.clientY-m)>=6;if(!b||!C)return;x=!0,document.body.style.userSelect="none",document.body.style.cursor="grabbing"}f.preventDefault();const v=cc(f.clientX,f.clientY);if(v!==w&&(i(),w=v,v!=null)){const b=document.querySelector(`[data-index="${v}"]`);b==null||b.setAttribute(br,"")}},h=f=>{if(window.removeEventListener("pointermove",S),window.removeEventListener("pointerup",h),window.removeEventListener("pointercancel",h),l(),!x)return;const v=cc(f.clientX,f.clientY);v!=null&&o(p,v,String(u))};window.addEventListener("pointermove",S,{passive:!1}),window.addEventListener("pointerup",h),window.addEventListener("pointercancel",h)};return{name:"DragReorderPlugin",enabled:n,hooks:{renderItemWrapper:(a,u,p)=>n?d.jsx("div",{draggable:!0,onDragStart:c=>{var m;(m=c.dataTransfer)==null||m.setData("text/plain",String(p)),a.sharedData.set("drag-from",p)},onDragOver:c=>{c.preventDefault()},onDragEnter:()=>{const c=document.querySelector(`[data-index="${p}"]`);c==null||c.setAttribute(br,"")},onDragLeave:()=>{const c=document.querySelector(`[data-index="${p}"]`);c==null||c.removeAttribute(br)},onDrop:c=>{var m;c.preventDefault(),l(),o(a,p,((m=c.dataTransfer)==null?void 0:m.getData("text/plain"))??"")},onDragEnd:l,onPointerDown:c=>s(c,p,a),style:{cursor:"grab",...t?{border:"1px dashed #bdbdbd",borderRadius:6}:null},children:u}):u}}}const Z1="DragReorderPlugin",eS="给每个项加拖拽能力，松手时回调 `onReorder(from, to)`，同时向 bus 发 `drag:reorder`。鼠标走原生 HTML5 拖拽，触屏走「长按 + pointer」——触摸设备上 `draggable` 根本不触发，旧版因此在手机上完全失效。",nS="2.0.0",tS=["interaction","拖拽"],rS=[{name:"renderItemWrapper",when:"渲染每个卡片时包裹其内容",description:"给单卡加包裹层（拖拽、无障碍语义、占位骨架）"},{name:"drag:reorder",when:"拖拽排序完成后",description:"广播 { from, to }，供业务层同步顺序"}],oS=[],iS="只读取 context 字段（props / state / data），不调用上下文方法",lS=[{name:"enabled",type:"boolean",default:"true",description:"是否启用拖拽"},{name:"onReorder",type:"(from, to, item) => void",default:"—",description:"重排回调"},{name:"showHandle",type:"boolean",default:"false",description:"是否显示虚线边框提示可拖"},{name:"touchHoldMs",type:"number",default:"180",description:"触屏长按多久进入拖拽（ms），0 表示不需要长按"}],sS=`// 鼠标走 HTML5 draggable，触屏走长按 + pointer，松手时回调 onReorder(from, to)。
const Waterfall = withPlugins(WaterfallCore, [
  createDragReorderPlugin({
    enabled: true,
    showHandle: false,
    touchHoldMs: 180,
  }),
]);

<Waterfall items={items} renderItem={(item) => <Card data={item} />} />;`,aS=["鼠标：原生 HTML5 拖拽，无额外依赖","触屏：长按 180ms 后 pointer 拖拽（可配 touchHoldMs）","onReorder 回调真正可用，bus 发 `drag:reorder`"],uS=["后台卡片排序","收藏夹手动排序","仪表盘组件排列"],cS=["插件只负责「拖」和「告诉你从哪到哪」，数组重排由调用方在 onReorder 里做。","触屏用长按区分「想滚」和「想拖」：不这样做，手指一滑就变成拖拽，页面滚不动。"],$m={name:Z1,description:eS,since:nS,tags:tS,events:rS,methods:oS,methodsNote:iS,config:lS,example:sS,features:aS,useCases:uS,notes:cS},Mm=Object.assign(J1,{meta:$m});function dS(e={}){const n=e.getAnchorId||(r=>r==null?void 0:r.id);let t;return{name:"ScrollAnchorPlugin",enabled:!0,hooks:{onMount:r=>{var o;t=(o=r.bus)==null?void 0:o.on("anchor:scrollToId",i=>{var a,u;const s=(((a=r.props)==null?void 0:a.items)||[]).findIndex((p,c)=>n(p,c)===i.id);s>=0&&((u=r.scrollToItem)==null||u.call(r,s,{behavior:"smooth",block:"start"}))})},onUnmount:()=>t==null?void 0:t()}}}const pS="ScrollAnchorPlugin",mS='不需要自己算索引：外部只管 `bus.emit("anchor:scrollToId", { id })`，插件用 getAnchorId 找到对应项并滚过去。适合「从消息跳到某条内容」。',fS="2.0.0",gS=["interaction","滚动"],hS=[{name:"onMount",when:"瀑布流挂载完成",description:"初始化观察器与滚动监听，返回清理函数"},{name:"onUnmount",when:"瀑布流卸载前",description:"断开观察器、移除滚动监听"}],yS=[],vS="只读取 context 字段（props / state / data），不调用上下文方法",xS=[{name:"getAnchorId",type:"(item, index) => string | number | undefined",default:"item.id",description:"从项里取锚点 id"}],wS=`// 监听 \`anchor:scrollToId\` 事件，按业务 id 滚动到对应项。
const Waterfall = withPlugins(WaterfallCore, [
  createScrollAnchorPlugin({
    getAnchorId: "item.id",
  }),
]);

<Waterfall items={items} renderItem={(item) => <Card data={item} />} />;`,SS=["按业务 id 定位，不用算下标","onMount 订阅 / onUnmount 退订（不泄漏）","平滑滚动"],bS=["从通知跳转到具体卡片","目录点击定位","外链深链定位"],kS=["目标项必须已在 items 里；分页场景请先切到对应页再发事件。"],Im={name:pS,description:mS,since:fS,tags:gS,events:hS,methods:yS,methodsNote:vS,config:xS,example:wS,features:SS,useCases:bS,notes:kS},Nm=Object.assign(dS,{meta:Im});function PS(e){const n=new Set,t=r=>{if(n.size<=e.poolSize)return;const o=n.values().next().value;if(typeof o=="number"){n.delete(o);const i=r.getItemRef(o);i&&(i.style.visibility="hidden")}};return{name:"RecyclePlugin",enabled:!0,hooks:{onItemEnterViewport:(r,o)=>{const i=r.getItemRef(o);i&&(i.style.visibility="visible"),n.add(o),t(r)},onItemLeaveViewport:(r,o)=>{const i=r.getItemRef(o);i&&(i.style.visibility="hidden"),n.delete(o)},onItemUnmount:(r,o)=>{n.delete(o)},onUnmount:()=>{n.clear()}}}}const CS="RecyclePlugin",_S="纯绘制层优化：项离开视口就 `visibility: hidden`，回来再显示。DOM 节点不销毁，滚动位置与已加载的图片都保留，适合「项里有视频/Canvas，重建代价高」的场景。",TS="2.0.0",RS=["interaction","性能"],$S=[{name:"onUnmount",when:"瀑布流卸载前",description:"断开观察器、移除滚动监听"},{name:"onItemUnmount",when:"单个卡片卸载时",description:"解绑该卡片的监听与观察器"},{name:"onItemEnterViewport",when:"单个卡片进入视口",description:"卡片级曝光、视频自动播放等"},{name:"onItemLeaveViewport",when:"单个卡片离开视口",description:"暂停播放、回收资源"}],MS=[{name:"getItemRef",signature:"ctx.getItemRef(index: number): HTMLElement | null",description:"取第 index 张卡片的 DOM 引用，可能为 null（尚未挂载 / 已回收）"}],IS=[{name:"poolSize",type:"number",default:"—",description:"同时保持可见的项数上限（超出则回收最早的）"}],NS=`// 视口外的项设 \`visibility: hidden\`，降低长列表的绘制压力。
const Waterfall = withPlugins(WaterfallCore, [
  createRecyclePlugin(),
]);

<Waterfall items={items} renderItem={(item) => <Card data={item} />} />;`,jS=["不销毁 DOM，只隐藏","项内媒体不重新加载","与虚拟化正交（一个省绘制、一个省节点）"],ES=["项内含视频 / canvas","长列表滚动发虚","低端设备省电"],LS=["与 Core 的 `virtualize` 同开会让项被卸载又隐藏，收益互相抵消，建议只选一个。","只改 visibility 不改布局，所以不会引起重排。"],jm={name:CS,description:_S,since:TS,tags:RS,events:$S,methods:MS,config:IS,example:NS,features:jS,useCases:ES,notes:LS},Em=Object.assign(PS,{meta:jm});function OS(e={}){const n=e.containerRole??"list",t=e.itemRole??"listitem",r=e.enableTabIndex??!0,o=e.containerLabel??"Waterfall list",i=new WeakMap,l=u=>{var p;return((p=u.containerRef)==null?void 0:p.current)??u.bus},s=u=>i.get(l(u))??0,a=u=>{const p=u.containerRef.current;p&&(p.setAttribute("role",n),p.setAttribute("aria-label",o),p.setAttribute("aria-busy",u.isLayouting?"true":"false"))};return{name:"A11yPlugin",enabled:!0,hooks:{onMount:u=>{a(u)},onLayoutComplete:u=>{a(u)},onItemClick:(u,p)=>{var c;s(u)!==p&&(i.set(l(u),p),(c=u.forceUpdate)==null||c.call(u))},renderItemWrapper:(u,p,c)=>d.jsx("div",{role:t,"aria-posinset":c+1,"aria-setsize":u.itemCount,tabIndex:r?c===s(u)?0:-1:void 0,children:p})}}}const DS="A11yPlugin",zS="把瀑布流补成读屏可理解的列表：容器 `role=list` + `aria-label`，每项 `role=listitem` + `aria-posinset` / `aria-setsize`，并可选加 `tabIndex` 让键盘能逐项聚焦。",AS="2.0.0",WS=["ui","a11y"],HS=[{name:"onMount",when:"瀑布流挂载完成",description:"初始化观察器与滚动监听，返回清理函数"},{name:"onItemClick",when:"单个卡片被点击",description:"卡片级跳转与点击埋点"},{name:"onLayoutComplete",when:"DOM 落位完成（可安全测量）",description:"测量真实高度、懒加载判定、曝光上报"},{name:"renderItemWrapper",when:"渲染每个卡片时包裹其内容",description:"给单卡加包裹层（拖拽、无障碍语义、占位骨架）"}],FS=[],BS="只读取 context 字段（props / state / data），不调用上下文方法",US=[{name:"containerRole",type:"string",default:'"list"',description:"容器 role"},{name:"itemRole",type:"string",default:'"listitem"',description:"项 role"},{name:"enableTabIndex",type:"boolean",default:"true",description:"项是否可 Tab 聚焦"},{name:"containerLabel",type:"string",default:'"Waterfall list"',description:"容器 aria-label"}],GS=`// 给容器与项补 ARIA role / label / posinset，支持键盘 Tab 遍历。
const Waterfall = withPlugins(WaterfallCore, [
  createA11yPlugin({
    containerRole: "list",
    itemRole: "listitem",
    enableTabIndex: true,
  }),
]);

<Waterfall items={items} renderItem={(item) => <Card data={item} />} />;`,VS=["容器 / 项 role 成对补齐","aria-posinset + aria-setsize 正确标注序号","键盘可逐项聚焦"],KS=["政务 / 金融等合规站点","读屏用户可用的信息流","键盘操作优先的桌面端"],QS=["项数很多时 `tabIndex=0` 会让 Tab 变长，建议配合「跳转主内容」链接使用。"],Lm={name:DS,description:zS,since:AS,tags:WS,events:HS,methods:FS,methodsNote:BS,config:US,example:GS,features:VS,useCases:KS,notes:QS},Om=Object.assign(OS,{meta:Lm}),dc="GROUPS",YS="GROUP_INDEX";function qS(e={}){const n=e.groupBy??(s=>(s==null?void 0:s.category)??"default"),t=e.showOverlay??!1;let r=null,o=null;const i=(s,a)=>{if(s.size!==a.size)return!1;for(const[u,p]of s){const c=a.get(u);if(!c||c.length!==p.length)return!1}return!0},l=s=>{const a=s.items??[];if(o&&r===a)return o;const u=new Map,p=new Map;a.forEach((m,g)=>{const x=n(m,g);p.set(g,x),u.has(x)||u.set(x,[]),u.get(x).push(g)});const c=o?!i(u,o):!0;return r=a,o=u,s.sharedData.set(dc,u),s.sharedData.set(YS,p),c&&u.size>0&&s.bus.emit("grouping:change",{groups:u}),u};return{name:"GroupingPlugin",enabled:!0,hooks:{onMount:s=>{l(s)},onLayoutComplete:s=>{l(s)},onPropsChange:s=>{l(s)},renderOverlay:s=>{if(!t)return null;const a=s.sharedData.get(dc)??new Map;if(a.size===0)return null;const u=Array.from(a.entries()).slice(0,3);return d.jsxs("div",{style:{position:"absolute",top:12,left:12,zIndex:99,background:"#111827",color:"#fff",padding:"10px 12px",borderRadius:8,boxShadow:"0 4px 12px rgba(0,0,0,0.25)",border:"1px solid rgba(255,255,255,0.15)",minWidth:150,fontSize:12,pointerEvents:"none"},children:[d.jsxs("div",{style:{opacity:.85,marginBottom:6},children:["分组：",a.size," 组"]}),u.map(([p,c])=>d.jsxs("div",{children:[String(p)," · ",c.length," 项"]},String(p)))]})}}}}const XS="GroupingPlugin",JS="用 groupBy 把项按业务字段分组，结果放进 sharedData 的 `GROUPS`（Map<组键, 索引数组>），供 StickyHeaderPlugin、分组统计条等消费。挂载即算一次，之后 props 变化重算。",ZS="2.0.0",eb=["ui","分组"],nb=[{name:"onMount",when:"瀑布流挂载完成",description:"初始化观察器与滚动监听，返回清理函数"},{name:"onPropsChange",when:"props 变化后",description:"数据或配置变化时请求重排"},{name:"onLayoutComplete",when:"DOM 落位完成（可安全测量）",description:"测量真实高度、懒加载判定、曝光上报"},{name:"renderOverlay",when:"每次渲染，滚动容器内的内容层之上",description:"回到顶部、加载提示、浮层工具"},{name:"grouping:change",when:"分组结果变化时",description:"广播 { groups } 分组结构"}],tb=[],rb="只读取 context 字段（props / state / data），不调用上下文方法",ob=[{name:"groupBy",type:"(item, index) => string | number",default:'item.category ?? "default"',description:"分组函数"},{name:"showOverlay",type:"boolean",default:"false",description:"是否显示分组统计角标"}],ib=`// 按字段把项分组，结果写进 sharedData(GROUPS) 供吸顶条 / 统计用。
const Waterfall = withPlugins(WaterfallCore, [
  createGroupingPlugin({
    groupBy: "item.category ?? \\"default\\"",
    showOverlay: false,
  }),
]);

<Waterfall items={items} renderItem={(item) => <Card data={item} />} />;`,lb=["挂载即计算（旧版只在 props 变化时算，首屏永远拿不到分组）","结果写 sharedData，跨插件可读","统计角标默认关闭"],sb=["按分类分组的信息流","按日期分组的时间线","吸顶条显示当前分组"],ab=["分组只产出索引映射，不改变渲染顺序；要视觉分组请自己按分组建行。"],Dm={name:XS,description:JS,since:ZS,tags:eb,events:nb,methods:tb,methodsNote:rb,config:ob,example:ib,features:lb,useCases:sb,notes:ab},wa=Object.assign(qS,{meta:Dm});function ub(e={}){const n=e.title||"分组标题",t=e.showHint??!1;return{name:"StickyHeaderPlugin",enabled:!0,hooks:{renderOverlay:r=>{var u,p,c;const o=((u=r.sharedData)==null?void 0:u.get("GROUPS"))||new Map,i=(p=r.sharedData)==null?void 0:p.get("GROUP_INDEX"),l=((c=r.visibleRange)==null?void 0:c.start)??0,a=(i==null?void 0:i.get(l))??(o.size>0?Array.from(o.keys())[0]:void 0);return d.jsxs("div",{style:{position:"sticky",top:0,zIndex:20,background:"#111827",color:"#fff",borderBottom:"1px solid rgba(255,255,255,0.15)",boxShadow:"0 4px 12px rgba(0,0,0,0.15)",padding:"10px 14px",fontSize:15,fontWeight:600},children:[n," ",a!==void 0?`：${String(a)}`:"",t?d.jsx("span",{style:{marginLeft:8,fontSize:12,opacity:.8},children:"向下滚动观察吸顶"}):null]})}}}}const cb="StickyHeaderPlugin",db="在滚动容器内渲染一条 `position: sticky` 的标题条，始终贴住容器顶部。装了 GroupingPlugin 时自动显示第一个分组名，也可用 title 写死。",pb="2.0.0",mb=["ui","吸顶"],fb=[{name:"renderOverlay",when:"每次渲染，滚动容器内的内容层之上",description:"回到顶部、加载提示、浮层工具"}],gb=[],hb="只读取 context 字段（props / state / data），不调用上下文方法",yb=[{name:"title",type:"string",default:'"分组标题"',description:"标题文案"},{name:"showHint",type:"boolean",default:"false",description:"是否显示「向下滚动观察」提示"}],vb=`// 滚动容器内的吸顶标题条，可与分组联动显示当前组。
const Waterfall = withPlugins(WaterfallCore, [
  createStickyHeaderPlugin({
    title: "分组标题",
    showHint: false,
  }),
]);

<Waterfall items={items} renderItem={(item) => <Card data={item} />} />;`,xb=["sticky 吸顶，不依赖额外容器","与 Grouping 联动显示当前组","提示文案默认关闭"],wb=["分组信息流","按日期分组的时间线","长列表的上下文提示"],Sb=["sticky 生效要求它作为滚动容器的直接子元素——由 composeSlots 保证，单测已锁。"],zm={name:cb,description:db,since:pb,tags:mb,events:fb,methods:gb,methodsNote:hb,config:yb,example:vb,features:xb,useCases:wb,notes:Sb},Am=Object.assign(ub,{meta:zm});function bb(e={}){const n=e.storageKey||"waterfall-bookmark",t=e.scrollBehavior||"smooth",r=o=>{var a;const i=o;if(!i)return!1;const l=(a=i.tagName)==null?void 0:a.toLowerCase(),s=(i.getAttribute&&i.getAttribute("contenteditable"))==="true";return l==="input"||l==="textarea"||s};return{name:"BookmarkPlugin",enabled:!0,hooks:{onMount:o=>{const i=l=>{var u,p;if(r(l.target))return;const s=(l.key||"").toLowerCase(),a=l.code||"";if(s==="b"||a==="KeyB"){const c=((u=o.containerRef)==null?void 0:u.current)||null;let m=0;c&&c.scrollHeight>c.clientHeight?m=c.scrollTop:m=window.pageYOffset||document.documentElement.scrollTop||document.body.scrollTop||0;try{localStorage.setItem(n,String(Math.max(0,m)))}catch{}}else if(s==="r"||a==="KeyR"){let c=0;try{const g=localStorage.getItem(n)||"0";c=Math.max(0,Number(g)||0)}catch{}const m=((p=o.containerRef)==null?void 0:p.current)||null;m&&m.scrollHeight>m.clientHeight?m.scrollTo({top:c,behavior:t}):window.scrollTo({top:c,behavior:t})}};return window.addEventListener("keydown",i,{capture:!0}),()=>{window.removeEventListener("keydown",i,{capture:!0})}}}}}const kb="BookmarkPlugin",Pb="长列表读到一半要跳走时按 **B** 存位置，回来按 **R** 复原。焦点在输入框/可编辑区域时不拦截按键。",Cb="2.0.0",_b=["ui","滚动","快捷键"],Tb=[{name:"onMount",when:"瀑布流挂载完成",description:"初始化观察器与滚动监听，返回清理函数"}],Rb=[],$b="只读取 context 字段（props / state / data），不调用上下文方法",Mb=[{name:"storageKey",type:"string",default:'"waterfall-bookmark"',description:"localStorage 键名"},{name:"scrollBehavior",type:'"auto" | "smooth"',default:'"smooth"',description:"恢复时的滚动行为"}],Ib=`// 按 B 记录滚动位置、按 R 跳回（localStorage），忽略输入框按键。
const Waterfall = withPlugins(WaterfallCore, [
  createBookmarkPlugin({
    storageKey: "waterfall-bookmark",
    scrollBehavior: "smooth",
  }),
]);

<Waterfall items={items} renderItem={(item) => <Card data={item} />} />;`,Nb=["B 存 / R 取，零 UI 侵入","自动区分容器滚动与页面滚动","输入框内不误触"],jb=["长文列表阅读","后台大表格浏览","演示时快速复位"],Eb=["键名全局共用，一个页面里多处瀑布流请各自传不同的 storageKey。"],Wm={name:kb,description:Pb,since:Cb,tags:_b,events:Tb,methods:Rb,methodsNote:$b,config:Mb,example:Ib,features:Nb,useCases:jb,notes:Eb},Hm=Object.assign(bb,{meta:Wm});function Lb(e={}){const n=e.storageKey||"waterfall-state",t=e.persistScroll??!0,r=e.persistKeys||["pageIndex","pageSize","searchQuery"];let o=!1;const i=1,l=new WeakSet,s=p=>{var c;return((c=p.containerRef)==null?void 0:c.current)??p.bus};function a(){try{const p=localStorage.getItem(n);if(!p)return null;const c=JSON.parse(p);return!c||c.version!==i||typeof c.state!="object"?null:c.state}catch{return null}}function u(p){try{localStorage.setItem(n,JSON.stringify({version:i,state:p}))}catch{}}return{name:"StatePersistencePlugin",enabled:!0,hooks:{transformProps:p=>{if(o)return p;const c=a();if(!c)return p;const m={...p};let g=!1;return r.forEach(x=>{c[x]!==void 0&&(m[x]=c[x],g=!0)}),g&&(o=!0),m},onMount:p=>{var g;const c=a();if(!c)return;const m={};if(r.forEach(x=>{c[x]!==void 0&&(m[x]=c[x])}),Object.keys(m).length>0&&((g=p.bus)==null||g.emit("state:restored",m),typeof window<"u"))try{window.dispatchEvent(new CustomEvent("waterfall:state-restored",{detail:m}))}catch{}},onLayoutComplete:p=>{if(!t)return;const c=s(p);if(l.has(c))return;const m=a(),g=Number((m==null?void 0:m.scrollTop)??0);if(!Number.isFinite(g)||g<=0){l.add(c);return}const x=p.containerRef.current;x&&(x.scrollTo({top:g,behavior:"auto"}),l.add(c))},onPropsChange:(p,c,m)=>{const x={...a()||{}},w=m??{};r.forEach(S=>{const h=w[S];h!==void 0&&(x[S]=h)}),u(x)},onUnmount:p=>{var g;const c={};t&&(c.scrollTop=((g=p.containerRef.current)==null?void 0:g.scrollTop)||0);const m=p.props??{};r.forEach(x=>{const w=m[x];w!==void 0&&(c[x]=w)}),u(c)}}}}const Ob="StatePersistencePlugin",Db="三个时机各做一件事：首次渲染把快照里的 pageIndex / searchQuery 注入 props；挂载后恢复 scrollTop；props 变化与卸载时写回快照。刷新页面不丢进度。",zb="2.0.0",Ab=["ui","持久化"],Wb=[{name:"onMount",when:"瀑布流挂载完成",description:"初始化观察器与滚动监听，返回清理函数"},{name:"onUnmount",when:"瀑布流卸载前",description:"断开观察器、移除滚动监听"},{name:"onPropsChange",when:"props 变化后",description:"数据或配置变化时请求重排"},{name:"onLayoutComplete",when:"DOM 落位完成（可安全测量）",description:"测量真实高度、懒加载判定、曝光上报"},{name:"transformProps",when:"渲染前链式改写瀑布流 props",description:"补 gap / columns 默认值、按断点覆盖配置"},{name:"state:restored",when:"从持久化恢复滚动位置 / 顺序后",description:"广播恢复后的状态快照"}],Hb=[],Fb="只读取 context 字段（props / state / data），不调用上下文方法",Bb=[{name:"storageKey",type:"string",default:'"waterfall-state"',description:"localStorage 键名"},{name:"persistScroll",type:"boolean",default:"true",description:"是否持久化滚动位置"},{name:"persistKeys",type:"string[]",default:'["pageIndex","pageSize","searchQuery"]',description:"要持久化的 props 键"}],Ub=`// 把滚动位置与分页/查询状态存 localStorage，回来时恢复。
const Waterfall = withPlugins(WaterfallCore, [
  createStatePersistencePlugin({
    storageKey: "waterfall-state",
    persistScroll: true,
    persistKeys: ["pageIndex","pageSize","searchQuery"],
  }),
]);

<Waterfall items={items} renderItem={(item) => <Card data={item} />} />;`,Gb=["滚动位置 + 分页/查询一起存","首帧注入只做一次，不会覆盖用户操作","SSR / 隐私模式下降级为不持久化"],Vb=["后台列表刷新不丢页","搜索结果返回定位","移动端来回切换页面"],Kb=["只能恢复「值」，不能替你把它写回 React state——页面应订阅 `state:restored` 事件或读 bus。","localStorage 不可用（隐私模式/配额满）时静默跳过，不会抛错。"],Fm={name:Ob,description:Db,since:zb,tags:Ab,events:Wb,methods:Hb,methodsNote:Fb,config:Bb,example:Ub,features:Gb,useCases:Vb,notes:Kb},Bm=Object.assign(Lb,{meta:Fm});function Qb(e={}){const n=e.mode||"hash",t=e.keys||["pageIndex","pageSize","searchQuery"];let r=null,o=!1;const i=()=>(r===null&&(r=l()),r);function l(){try{if(n==="hash"){const a=window.location.hash||"",u=a.indexOf("?"),p=u>=0?a.slice(u+1):a.replace(/^#/,""),c=new URLSearchParams(p),m={};return t.forEach(g=>{const x=c.get(g);x!==null&&(m[g]=x)}),m}else{const a=new URLSearchParams(window.location.search),u={};return t.forEach(p=>{const c=a.get(p);c!==null&&(u[p]=c)}),u}}catch{return{}}}function s(a){try{const u=new URLSearchParams;t.forEach(c=>{const m=a[c];m!=null&&String(m).length>0&&u.set(c,String(m))});const p=u.toString();if(n==="hash"){const c=window.location.hash||"",x=`#${c.replace(/^#/,"").split("?")[0]||""}${p?`?${p}`:""}`;c!==x&&history.replaceState(null,"",`${window.location.pathname}${window.location.search}${x}`)}else{const m=window.location.pathname+(p?`?${p}`:"")+(window.location.hash||"");history.replaceState(null,"",m)}}catch{}}return{name:"URLSyncPlugin",enabled:!0,hooks:{transformProps:a=>{if(o)return a;const u=i(),p={...a};let c=!1;return t.forEach(m=>{u[m]!==void 0&&(p[m]=u[m],c=!0)}),c&&(o=!0),p},onMount:a=>{var u;(u=a.bus)==null||u.emit("urlsync:init",i())},onPropsChange:(a,u,p)=>{const c={},m=p??{};t.forEach(w=>{const S=m[w];S!==void 0&&(c[w]=S)});const g=i();t.some(w=>String(c[w]??"")!==String(g[w]??""))&&s(c)}}}}const Yb="URLSyncPlugin",qb="props 变化时把指定键写进 URL（hash 或 search），挂载时读出来广播 `urlsync:init`。刷新与分享都能还原筛选状态。",Xb="2.0.0",Jb=["ui","URL","可分享"],Zb=[{name:"onMount",when:"瀑布流挂载完成",description:"初始化观察器与滚动监听，返回清理函数"},{name:"onPropsChange",when:"props 变化后",description:"数据或配置变化时请求重排"},{name:"transformProps",when:"渲染前链式改写瀑布流 props",description:"补 gap / columns 默认值、按断点覆盖配置"},{name:"urlsync:init",when:"从 URL 参数初始化完成后",description:"广播初始参数快照"}],ek=[],nk="只读取 context 字段（props / state / data），不调用上下文方法",tk=[{name:"mode",type:'"hash" | "search"',default:'"hash"',description:"写 hash 还是 search"},{name:"keys",type:"string[]",default:'["pageIndex","pageSize","searchQuery"]',description:"要同步的 props 键"}],rk=`// 把分页/搜索/排序同步进 URL（hash 或 search），链接可分享。
const Waterfall = withPlugins(WaterfallCore, [
  createURLSyncPlugin({
    mode: "hash",
    keys: ["pageIndex","pageSize","searchQuery"],
  }),
]);

<Waterfall items={items} renderItem={(item) => <Card data={item} />} />;`,ok=["hash 模式会保留已有路由路径","用 replaceState，不污染后退栈","SSR 安全：无 window 时直接跳过"],ik=["搜索结果可分享","后台筛选状态可刷新","带参数的深链"],lk=["只做单向同步（props → URL）与初始读取；URL 前进后退的监听请页面自己做。"],Um={name:Yb,description:qb,since:Xb,tags:Jb,events:Zb,methods:ek,methodsNote:nk,config:tk,example:rk,features:ok,useCases:ik,notes:lk},Gm=Object.assign(Qb,{meta:Um}),sk={sm:{width:0,columns:2},md:{width:560,columns:3},lg:{width:800,columns:4}},ak={slug:"responsive-columns",title:"响应式列数",group:"plugin",plugin:"ResponsiveColumnsPlugin",intro:"按断点表切列数：< 560 两列，560 起三列，800 起四列。",why:"设计稿给了明确的「平板 3 列 / 桌面 4 列」规范时用断点表；只想要「每列至少多宽」就用 AutoColumn（下一页）。",plugs:[{fn:"createResponsiveColumnsPlugin",cfg:"breakpoints: { sm: { width: 0, columns: 2 }, md: { width: 560, columns: 3 }, lg: { width: 800, columns: 4 } }",why:"按容器宽度命中最近一档，读的是容器宽不是 window.innerWidth"}],props:["columns={2}","gap={12}","containerStyle={{ height: 420 }}"],note:"与 AutoColumnPlugin 互斥：两个都实现 calculateColumns，同开会交替覆盖，列数看起来会「闪」。",controls:[{key:"simWidth",label:"模拟容器宽",kind:"number",init:760,min:360,max:1100,step:20}]},uk=J({count:28,seed:2301,plugins:()=>[tm({breakpoints:sk})],instrument:!0,coreProps:e=>({gap:12,containerStyle:{height:"var(--stage-h, 380px)",width:Number(e.cfg.simWidth)}}),chrome:e=>{const n=Number(e.cfg.simWidth),t=n>=800?"lg → 4 列":n>=560?"md → 3 列":"sm → 2 列";return d.jsxs("p",{className:"stage-tip",children:["容器宽 ",d.jsx("b",{children:n})," · 命中 ",d.jsx("b",{children:t})," · 实际 ",d.jsx("b",{children:e.meter.columns})," 列"]})}}),ck=Object.freeze(Object.defineProperty({__proto__:null,default:uk,meta:ak},Symbol.toStringTag,{value:"Module"})),dk={slug:"auto-column",title:"自动列数",group:"plugin",plugin:"AutoColumnPlugin",intro:"给一个最小列宽，列数自己算：floor((可用宽 + gap) / (最小列宽 + gap))。",why:"版式没有硬性列数要求、只要求「图片别小于 200px」时用它，比写一堆断点省事。",plugs:[{fn:"createAutoColumnPlugin",cfg:"minColumnWidth: {{minColumnWidth}}, maxColumns: {{maxColumns}}",why:"按最小列宽算列数，容器变宽自动加列、变窄自动减列"}],props:["gap={12}","containerStyle={{ height: 420 }}"],note:"算的是容器宽（padding 已扣除）。列数上限用 maxColumns 卡住，否则超宽屏会排出 8 列小图。",controls:[{key:"minColumnWidth",label:"minColumnWidth",kind:"number",init:200,min:120,max:320,step:10},{key:"maxColumns",label:"maxColumns",kind:"number",init:4,min:2,max:6},{key:"simWidth",label:"模拟容器宽",kind:"number",init:900,min:360,max:1100,step:20}]},pk=J({count:30,seed:2401,instrument:!0,plugins:e=>[em({minColumnWidth:Number(e.cfg.minColumnWidth),maxColumns:Number(e.cfg.maxColumns)})],coreProps:e=>({gap:12,containerStyle:{height:"var(--stage-h, 380px)",width:Number(e.cfg.simWidth)}}),chrome:e=>d.jsxs("p",{className:"stage-tip",children:["最小列宽 ",d.jsx("b",{children:Number(e.cfg.minColumnWidth)})," · 容器宽"," ",d.jsx("b",{children:Number(e.cfg.simWidth)})," · 算出 ",d.jsx("b",{children:e.meter.columns})," 列（上限"," ",Number(e.cfg.maxColumns),"）"]})}),mk=Object.freeze(Object.defineProperty({__proto__:null,default:pk,meta:dk},Symbol.toStringTag,{value:"Module"})),fk={slug:"alignment",title:"对齐策略",group:"plugin",plugin:"AlignmentPlugin",intro:"shortest / balanced / sequential，切一下就能看出列高差在哪。",why:"卡片高差大又想让底部别太参差用 shortest（默认）；想每列张数一样用 balanced；位置可预测用 sequential。",plugs:[{fn:"createAlignmentPlugin",cfg:'mode: "{{mode}}"',why:"改写 alignmentMode，等价于 Core 的 props.alignmentMode，但可以按环境动态决定"}],props:["gap={12}","containerStyle={{ height: 420 }}"],note:"列高相同时三者都取最小索引列（左优先）—— 这是刻意保留的旧行为，别指望 balanced 会把第一张放到「看起来更空」的那列。",controls:[{key:"mode",label:"mode",kind:"select",init:"shortest",options:[{label:"shortest 最矮列（默认）",value:"shortest"},{label:"balanced 项数最少",value:"balanced"},{label:"sequential 按序轮转",value:"sequential"}]}]},gk=J({count:14,seed:2501,heightRange:[120,360],instrument:!0,plugins:e=>[Jp({mode:String(e.cfg.mode)})],coreProps:()=>({columns:3,gap:12}),chrome:e=>d.jsxs("p",{className:"stage-tip",children:["当前策略 ",d.jsx("b",{children:String(e.cfg.mode)})," · ",e.items.length," 张卡 → 看三列底部是否齐"]})}),hk=Object.freeze(Object.defineProperty({__proto__:null,default:gk,meta:fk},Symbol.toStringTag,{value:"Module"})),yk={slug:"fixed-height",title:"固定高度",group:"plugin",plugin:"FixedHeightPlugin",intro:"统一每项高度，从错落流变成规整网格。",why:"视频封面墙、图库缩略网格这类要求「整行齐平」的版式，靠这个插件而不是给每张图写死 CSS。",plugs:[{fn:"createFixedHeightPlugin",cfg:"itemHeight: {{itemHeight}}",why:"改写 item.height，缩略图与文案一起放进固定高度的盒子里"}],props:["columns={3}","gap={12}","containerStyle={{ height: 420 }}"],note:"插件只改数据字段，不碰 DOM。卡片组件必须把 item.height 用上（示例里的 FeedCard 传 fixed 就是干这个），否则看起来「插件没生效」。",controls:[{key:"itemHeight",label:"itemHeight",kind:"number",init:176,min:100,max:260,step:4}]},vk=J({count:18,seed:2601,fixed:!0,variant:"video",instrument:!0,plugins:e=>[lm({itemHeight:Number(e.cfg.itemHeight)})],coreProps:()=>({columns:3,gap:12}),chrome:e=>d.jsxs("p",{className:"stage-tip",children:["统一高度 ",d.jsx("b",{children:Number(e.cfg.itemHeight)}),"px · 行高应完全一致（总高"," ",Math.round(e.meter.totalHeight),"px）"]})}),xk=Object.freeze(Object.defineProperty({__proto__:null,default:vk,meta:yk},Symbol.toStringTag,{value:"Module"})),wk={slug:"gap-plugin",title:"间距插件",group:"plugin",plugin:"GapPlugin",intro:"把行/列间距收到一处，还能按窗口宽度换档。",why:"多个页面要统一间距规范（或手机端要更紧）时，用插件的 responsive 比在每个页面写 CSS 断点稳。",plugs:[{fn:"createGapPlugin",cfg:"columnGap: {{columnGap}}, rowGap: {{rowGap}}, responsive: { sm: { columnGap: 8, rowGap: 8 } }",why:"间距集中配置，并按 sm/md/lg/xl 自动换档（阈值 768/992/1200）"}],props:["columns={3}","containerStyle={{ height: 420 }}"],note:"responsive 是「命中即覆盖」：桌面端如果也配了 lg，上面两个滑杆就会被 lg 顶掉（看着像没接上）。这页只给 sm，所以桌面端用手写值、窄于 768px 才切 8px。档位看的是 window 宽度，不是容器宽。",controls:[{key:"columnGap",label:"columnGap",kind:"number",init:16,min:0,max:40},{key:"rowGap",label:"rowGap",kind:"number",init:16,min:0,max:40}]},Sk=J({count:26,seed:2701,instrument:!0,plugins:e=>[om({columnGap:Number(e.cfg.columnGap),rowGap:Number(e.cfg.rowGap),responsive:{sm:{columnGap:8,rowGap:8}}})],coreProps:()=>({columns:3}),chrome:e=>d.jsxs("p",{className:"stage-tip",children:["配置 ",d.jsx("b",{children:Number(e.cfg.columnGap)})," / ",d.jsx("b",{children:Number(e.cfg.rowGap)})," · 把窗口拉窄会切到 sm 档（8px）"]})}),bk=Object.freeze(Object.defineProperty({__proto__:null,default:Sk,meta:wk},Symbol.toStringTag,{value:"Module"})),kk={slug:"virtual",title:"虚拟瀑布流",group:"plugin",capability:"virtualize",intro:"1000 项只渲染几十个 DOM —— 看「数据项 / 实际渲染」两个读数。",why:"上千项、项高可估（图片卡、商品卡）时开。几百项以内不必上虚拟化，Recycle 更省事（不卸载、图片不用重载）。",plugs:[],props:["items={thousandItems}",{text:"virtualize={{ overscan: {{overscan}}, adaptiveEstimate: true, estimateQuantile: {{estimateQuantile}} }}",when:e=>!!e.adaptive},{text:"virtualize={{ overscan: {{overscan}}, adaptiveEstimate: false, estimateHeight: {{estimateHeight}} }}",when:e=>!e.adaptive},"columns={3}","containerStyle={{ height: 420 }}"],note:"estimateHeight 只是「冷启动还没有任何实测样本」时的兜底。样本够 8 个之后，自适应改用实测高度的中位数（P50）——中位数让总高误差最小。注意重叠不靠「把估值抬高」解决：抬高只是把误差从「重叠」换成「滚动条虚长」，而后者更持久。真正压住重叠的是「量到真高就立刻重排」——误差只存在一帧，且通常落在视口外。关掉自适应则严格用 estimateHeight，可以自己体会「240 面对 190~350 的项高」会怎样。",controls:[{key:"overscan",label:"overscan（屏）",kind:"number",init:1,min:0,max:4},{key:"adaptive",label:"自适应估值",kind:"switch",init:!0,hint:"关掉后严格用 estimateHeight 排未测量项"},{key:"estimateQuantile",label:"分位",kind:"select",init:"0.5",options:[{label:"P50 中位数（默认，总高最准）",value:"0.5"},{label:"P75",value:"0.75"},{label:"P90（更保守，宁可留空）",value:"0.9"},{label:"P100（绝不重叠）",value:"1"}],when:e=>!!e.adaptive},{key:"estimateHeight",label:"estimateHeight",kind:"number",init:240,min:120,max:360,step:20,when:e=>!e.adaptive}]},Pk=J({count:1e3,seed:2801,instrument:!0,plugins:()=>[],coreProps:e=>({columns:3,gap:12,virtualize:{overscan:Number(e.cfg.overscan),adaptiveEstimate:!!e.cfg.adaptive,estimateQuantile:Number(e.cfg.estimateQuantile??.5),estimateHeight:Number(e.cfg.estimateHeight)}}),chrome:e=>d.jsxs("p",{className:"stage-tip",children:[e.items.length," 项数据 → 实际渲染 ",d.jsx("b",{children:e.meter.rendered})," 个 · 总高"," ",d.jsx("b",{children:Math.round(e.meter.totalHeight)}),"px（按全量算，滚动中会随实测样本收敛）"]})}),Ck=Object.freeze(Object.defineProperty({__proto__:null,default:Pk,meta:kk},Symbol.toStringTag,{value:"Module"})),_k={slug:"virtual-dynamic",title:"虚拟瀑布流（动态高度）",group:"plugin",capability:"virtualize · dynamicHeights",intro:"900ms 后所有卡片高度 ×1.5 —— 看虚拟化怎么把估值换成实测值。",why:"图片类瀑布流必然「先估后测」。要保证滚动条不跳、总高最终准确，就得理解 estimateHeight 与 dynamicHeights 各自管什么。",plugs:[],props:["virtualize={{ overscan: 1, adaptiveEstimate: {{adaptive}}, dynamicHeights: {{{dynamicHeights}}} }}",{text:"  // adaptiveEstimate 关掉时才需要自己给 estimateHeight",when:e=>!e.adaptive},"columns={3}","containerStyle={{ height: 420 }}"],note:"dynamicHeights 关闭后，项高度变化不会触发重排 —— 需要自己调 ref.relayout()。虚拟化下项可能已卸载，measureItem 会返回缓存值而不是实时量。自适应估值（默认开）会跟着实测样本走，所以上面这一下 ×1.5 之后，未测量项的估值也会自动抬上去。",controls:[{key:"adaptive",label:"自适应估值",kind:"switch",init:!0,hint:"关掉后严格用 estimateHeight 排未测量项"},{key:"estimateHeight",label:"estimateHeight",kind:"number",init:240,min:120,max:360,step:20,when:e=>!e.adaptive},{key:"dynamicHeights",label:"dynamicHeights",kind:"switch",init:!0,hint:"关掉后高度变化不自动重排"}]},Tk=J({count:400,seed:2901,instrument:!0,plugins:()=>[],coreProps:e=>({columns:3,gap:12,virtualize:{overscan:1,adaptiveEstimate:!!e.cfg.adaptive,estimateHeight:Number(e.cfg.estimateHeight),dynamicHeights:!!e.cfg.dynamicHeights}}),effect:e=>{const n=window.setTimeout(()=>{e.setItems(t=>t.map(r=>({...r,height:Math.round(r.height*1.5/8)*8}))),e.log("模拟图片加载完成：全部项高度 ×1.5，Core 重新测量并修正位置")},900);return()=>window.clearTimeout(n)},chrome:e=>d.jsxs("p",{className:"stage-tip",children:[e.items.length," 项 · 渲染 ",d.jsx("b",{children:e.meter.rendered})," · 总高"," ",d.jsx("b",{children:Math.round(e.meter.totalHeight)}),"px · 自适应"," ",d.jsx("b",{children:e.cfg.adaptive?"开":"关"})," · dynamicHeights"," ",d.jsx("b",{children:e.cfg.dynamicHeights?"开":"关"})]})}),Rk=Object.freeze(Object.defineProperty({__proto__:null,default:Tk,meta:_k},Symbol.toStringTag,{value:"Module"})),$k={slug:"throttle",title:"Throttle 插件",group:"plugin",plugin:"ThrottlePlugin",intro:"滚动回调 120ms 一次还是每帧一次，看读数差别。",why:"埋点、懒加载判断、侧边指示器这类「滚动时要做点事」的逻辑，不节流会直接把主线程拖住。",plugs:[{fn:"createThrottlePlugin",cfg:"scroll: {{scroll}}, resize: {{resize}}",why:"统一收口滚动/尺寸回调频率，比每个页面各写一个 throttle 稳"}],props:["columns={3}","containerStyle={{ height: 420 }}"],note:"节流的是回调，不是布局。想让「连续改尺寸时的重排」慢下来用 DebounceLayout（下一页）。",controls:[{key:"scroll",label:"scroll（ms）",kind:"number",init:16,min:0,max:200,step:8,nonLayout:!0},{key:"resize",label:"resize（ms）",kind:"number",init:120,min:0,max:400,step:20,nonLayout:!0}]},Mk=J({count:120,seed:3001,instrument:!0,plugins:e=>[cm({scroll:Number(e.cfg.scroll),resize:Number(e.cfg.resize)})],coreProps:()=>({columns:3,gap:12}),chrome:e=>d.jsxs("p",{className:"stage-tip",children:["滚动回调 ",d.jsx("b",{children:e.meter.scrolls})," 次（阈值 ",Number(e.cfg.scroll),"ms）· 布局耗时"," ",d.jsx("b",{children:e.meter.layoutMs.toFixed(1)}),"ms —— 快速滚一遍再对比"]})}),Ik=Object.freeze(Object.defineProperty({__proto__:null,default:Mk,meta:$k},Symbol.toStringTag,{value:"Module"})),Nk={slug:"debounce-layout",title:"DebounceLayout 插件",group:"plugin",plugin:"DebounceLayoutPlugin",intro:"连续拖宽度时只在停下后重排一次。",why:"容器尺寸会被连续改变的场景（拖拽分栏、展开收起、缩放预览）不做防抖，每帧都会全量重排。",plugs:[{fn:"createDebounceLayoutPlugin",cfg:"delay: {{delay}}",why:"把 debounceDelay 拉长到 300ms，连续 resize 只算最后一次"}],props:["columns={3}","containerStyle={{ height: 420 }}"],note:"防抖太大会有「松手后卡片才归位」的观感，200–300ms 是比较稳的区间。和 ThrottlePlugin 分工不同：那个管回调、这个管重排。",controls:[{key:"delay",label:"delay（ms）",kind:"number",init:300,min:0,max:600,step:20,nonLayout:!0},{key:"simWidth",label:"容器宽",kind:"number",init:780,min:380,max:1080,step:10}]},jk=J({count:36,seed:3101,instrument:!0,plugins:e=>[pm({delay:Number(e.cfg.delay)})],coreProps:e=>({columns:3,gap:12,containerStyle:{height:"var(--stage-h, 380px)",width:Number(e.cfg.simWidth)}}),chrome:e=>d.jsxs("p",{className:"stage-tip",children:["防抖 ",d.jsx("b",{children:Number(e.cfg.delay)}),"ms · 最近布局"," ",d.jsx("b",{children:e.meter.layoutMs.toFixed(1)}),"ms · 拖滑杆时观察它多久变一次"]})}),Ek=Object.freeze(Object.defineProperty({__proto__:null,default:jk,meta:Nk},Symbol.toStringTag,{value:"Module"})),Lk={slug:"recycle",title:"Recycle 插件",group:"plugin",plugin:"RecyclePlugin",intro:"离屏项隐藏而不卸载 —— 图片不用重载，DOM 数量不变。打开「改用 virtualize」可以当场对照。",why:"几百项的长列表：卸载会丢图片缓存（滚回来又要下载），不处理又会一直重绘。Recycle 是中间那档。",plugs:[{fn:"createRecyclePlugin",cfg:"poolSize: {{poolSize}}",why:"视口外超出池子的项设 visibility:hidden，减少绘制但保留 DOM"}],props:["columns={3}","containerStyle={{ height: 420 }}",{text:"virtualize={{ overscan: 1 }}",when:e=>!!e.virtual}],note:"与 virtualize 互斥：一个隐藏 DOM、一个卸载 DOM，同开会互相打架（可见项被另一套逻辑当成离屏）。所以上面的开关一打开，Recycle 插件就不装了 —— 两种策略二选一。挑法：几百项、图片重、要保住图片缓存 → Recycle；上千项、要控 DOM 数 → virtualize。",controls:[{key:"poolSize",label:"poolSize",kind:"number",init:24,min:4,max:80,step:2,nonLayout:!0},{key:"virtual",label:"改用 virtualize",kind:"switch",init:!1,hint:"对照：卸载离屏 DOM（Recycle 是隐藏不卸载）"}]},Ok=J({count:300,seed:3201,instrument:!0,plugins:e=>e.cfg.virtual?[]:[Em({poolSize:Number(e.cfg.poolSize)})],coreProps:e=>({columns:3,gap:12,...e.cfg.virtual?{virtualize:{overscan:1}}:null}),chrome:e=>d.jsx("div",{className:"stage-stats",children:d.jsxs("p",{className:"stage-tip",children:[e.items.length," 项 · DOM ",d.jsx("b",{children:e.meter.rendered})," 个 · 总高"," ",d.jsx("b",{children:Math.round(e.meter.totalHeight)}),"px · 布局"," ",d.jsx("b",{children:e.meter.layoutMs.toFixed(1)}),"ms ·"," ",e.cfg.virtual?"virtualize（卸载离屏，DOM 只剩几十个）":`Recycle（DOM 全留 300 个，只隐藏绘制，池子 ${Number(e.cfg.poolSize)}）`]})})}),Dk=Object.freeze(Object.defineProperty({__proto__:null,default:Ok,meta:Lk},Symbol.toStringTag,{value:"Module"})),hl=240,zk={slug:"infinite-scroll",title:"InfiniteScroll 插件",group:"plugin",plugin:"InfiniteScrollPlugin",intro:"滚到底自动追加，加载完停在 240 项不再请求。",why:"信息流、图片流的标准做法。threshold 要在「用户快到底但还没到底」时触发，太小会看到空白等待。",plugs:[{fn:"createInfiniteScrollPlugin",cfg:"threshold: {{threshold}}",why:"把 props.reachBottomOffset 写成 threshold，并在 onReachBottom 里加并发锁与 hasMore 判断"}],props:["onLoadMore={loadMore}","columns={3}","containerStyle={{ height: 420 }}"],note:"与 PaginationPlugin 互斥：一个追加、一个切片，同开会「翻到第 2 页又看到第 1 页」。到上限时让插件 setState({ hasMore: false }) 或像这里在 onLoadMore 里短路。",controls:[{key:"threshold",label:"threshold（px）",kind:"number",init:400,min:100,max:900,step:50,nonLayout:!0}]},Ak=J({count:24,seed:3301,instrument:!0,plugins:e=>[Pm({threshold:Number(e.cfg.threshold)})],coreProps:e=>({columns:3,gap:12,onLoadMore:()=>{e.setItems(n=>n.length>=hl?n:[...n,...Yp({count:12,seed:3301+n.length*7})])}}),chrome:e=>{const n=e.items.length;return d.jsxs("p",{className:"stage-tip",children:["已加载 ",d.jsx("b",{children:n})," / ",hl," 项 ·"," ",n>=hl?"已到上限，不会再请求":`距底 ${Number(e.cfg.threshold)}px 时追加 12 项`]})}}),Wk=Object.freeze(Object.defineProperty({__proto__:null,default:Ak,meta:zk},Symbol.toStringTag,{value:"Module"})),Hk={slug:"pagination",title:"Pagination 插件",group:"plugin",plugin:"PaginationPlugin",intro:"pageIndex / pageSize 交给插件切片，翻页自动回顶。",why:"后台列表、搜索结果页：需要「第几页 / 共几页」这种确定性导航时用分页，不要用无限滚动。",plugs:[{fn:"createPaginationPlugin",cfg:"pageSize: {{pageSize}}, scrollToTop: true",why:"读 props.pageIndex（1 基）与 props.pageSize，对 items 切片"}],props:["pageIndex={{{pageIndex}}}","pageSize={{{pageSize}}}","scrollToTopOnPageChange","columns={4}","containerStyle={{ height: 420 }}"],note:"它排在 Filter/Sort/Search 之后（priority 10），所以页数是过滤后的总数。顺序反了会出现「第 2 页是空的」。",controls:[{key:"pageSize",label:"pageSize",kind:"number",init:12,min:4,max:36,step:2},{key:"pageIndex",label:"pageIndex",kind:"number",init:1,min:1,max:12}]},Fk=J({count:48,seed:3401,instrument:!0,plugins:e=>[bm({pageSize:Number(e.cfg.pageSize),scrollToTop:!0})],coreProps:e=>{const n=Math.max(1,Math.ceil(48/Number(e.cfg.pageSize)));return{columns:4,gap:12,pageIndex:Math.min(Number(e.cfg.pageIndex),n),pageSize:Number(e.cfg.pageSize),scrollToTopOnPageChange:!0}},chrome:e=>{const n=Number(e.cfg.pageSize),t=Number(e.cfg.pageIndex),r=Math.max(1,Math.ceil(e.items.length/n)),o=Math.min(t,r);return d.jsxs("div",{className:"stage-pager",children:[d.jsx("button",{type:"button",disabled:o<=1,onClick:()=>e.setCfg("pageIndex",Math.max(1,o-1)),children:"上一页"}),d.jsxs("span",{children:["第 ",d.jsx("b",{children:o})," / ",r," 页 · 每页 ",n," · 共 ",e.items.length," 项",t>r?"（滑杆已越界，钳到最后一页）":""]}),d.jsx("button",{type:"button",disabled:o>=r,onClick:()=>e.setCfg("pageIndex",Math.min(r,o+1)),children:"下一页"})]})}}),Bk=Object.freeze(Object.defineProperty({__proto__:null,default:Fk,meta:Hk},Symbol.toStringTag,{value:"Module"})),Uk={slug:"filter",title:"Filter 插件",group:"plugin",plugin:"FilterPlugin",intro:"价格上限拖到哪，列表就剩到哪 —— 页数/总数跟着变。",why:"价格区间、库存、标签筛选：过滤必须发生在排序与分页之前，否则「第 2 页」会突然空掉。",plugs:[{fn:"createFilterPlugin",cfg:"predicate: (item) => item.price <= 500, scrollToTop: false",why:"在 transformProps 链的第一环删掉不匹配项（priority 40，排在排序/分页之前）"}],props:["filterFn={(item) => item.price <= {{maxPrice}}}","columns={4}","containerStyle={{ height: 420 }}"],note:"谓词抛错时按「保留」处理，不会让整表消失。条件变化后要不要回顶由 scrollToTop 决定。",controls:[{key:"maxPrice",label:"价格上限",kind:"number",init:500,min:50,max:900,step:50}]},Gk=J({count:40,seed:3501,commerce:!0,variant:"product",instrument:!0,pluginKeys:[],plugins:()=>[ym({predicate:e=>e.price<=500})],coreProps:e=>({columns:4,gap:12,filterFn:n=>n.price<=Number(e.cfg.maxPrice)}),chrome:e=>{const n=Number(e.cfg.maxPrice),t=e.items.filter(r=>r.price<=n).length;return d.jsxs("p",{className:"stage-tip",children:["¥ ≤ ",n," · 命中 ",d.jsx("b",{children:t})," / ",e.items.length," 项"]})}}),Vk=Object.freeze(Object.defineProperty({__proto__:null,default:Gk,meta:Uk},Symbol.toStringTag,{value:"Module"})),yl={likes:(e,n)=>n.likes-e.likes,price:(e,n)=>e.price-n.price,fresh:(e,n)=>e.minutesAgo-n.minutesAgo,tall:(e,n)=>n.height-e.height},Rr={likes:"点赞数 高→低",price:"价格 低→高",fresh:"发布时间 新→旧",tall:"高度 高→低"},Kk={slug:"sort",title:"Sort 插件",group:"plugin",plugin:"SortPlugin",intro:"四种排序切换，卡片整体重排 —— 顺序变了而不是重新请求。",why:"「按热度 / 价格 / 最新」这类前端可解的排序，交给插件比让后端多个接口省事；但数据量大时还是应该由后端排。",plugs:[{fn:"createSortPlugin",cfg:"comparator: (a, b) => b.likes - a.likes",why:"在过滤之后、分页之前重排 items（priority 30）"}],props:["sortComparator={comparator}","columns={4}","containerStyle={{ height: 420 }}"],note:"优先读 props.sortComparator：所以页面切换排序方式时不用重建组件。comparator 必须是纯函数，且不能依赖 items 顺序（否则排序结果不稳定）。",controls:[{key:"sortBy",label:"排序方式",kind:"select",init:"likes",options:[{label:Rr.likes,value:"likes"},{label:Rr.price,value:"price"},{label:Rr.fresh,value:"fresh"},{label:Rr.tall,value:"tall"}]}]},Qk=J({count:32,seed:3601,commerce:!0,variant:"product",instrument:!0,pluginKeys:[],plugins:()=>[xm({comparator:yl.likes})],coreProps:e=>({columns:4,gap:12,sortComparator:yl[String(e.cfg.sortBy)]??yl.likes,scrollToTopOnSortChange:!1}),chrome:e=>d.jsxs("p",{className:"stage-tip",children:["当前 ",d.jsx("b",{children:Rr[String(e.cfg.sortBy)]})," · 首项应是「",String(e.cfg.sortBy)," 最靠前」的那张"]})}),Yk=Object.freeze(Object.defineProperty({__proto__:null,default:Qk,meta:Kk},Symbol.toStringTag,{value:"Module"})),qk={slug:"search",title:"Search 插件",group:"plugin",plugin:"SearchPlugin",intro:"边打字边过滤，输入框不失焦、滚动不乱跳。",why:"字段有限的本地搜索（标题、作者、标签）用插件就够；需要模糊匹配、拼音、分词时应该后端做。",plugs:[{fn:"createSearchPlugin",cfg:'fields: ["title", "author"]',why:"只扫指定字段，避免把 undefined 也扫一遍（priority 20，在排序之后、分页之前）"}],props:["searchQuery={query}","columns={3}","containerStyle={{ height: 420 }}"],note:"fields 不给会扫全部可枚举字段，容易误命中。scrollToTop 默认关，搜索后保留滚动位置反而更自然时别打开。"},Xk=J({count:36,seed:3701,instrument:!0,pluginKeys:[],plugins:()=>[xa({fields:["title","author"]})],coreProps:e=>({columns:3,gap:12,searchQuery:String(e.cfg.query??""),scrollToTopOnSearchChange:!1}),chrome:e=>{const n=String(e.cfg.query??"").trim().toLowerCase(),t=n?e.items.filter(r=>r.title.toLowerCase().includes(n)||r.author.toLowerCase().includes(n)).length:e.items.length;return d.jsxs("div",{className:"stage-search",children:[d.jsx("input",{type:"search",placeholder:"搜标题或作者，如「咖啡」「林一白」",value:String(e.cfg.query??""),onChange:r=>e.setCfg("query",r.target.value)}),d.jsxs("span",{children:["命中 ",d.jsx("b",{children:t})," / ",e.items.length," 项",n?`（query="${n}"）`:""]})]})}}),Jk=Object.freeze(Object.defineProperty({__proto__:null,default:Xk,meta:qk},Symbol.toStringTag,{value:"Module"})),pc=_m({showOverlay:!0}),Zk={slug:"click-analytics",title:"ClickAnalytics 插件",group:"plugin",plugin:"ClickAnalyticsPlugin",intro:"点卡片，角上的计数 +1，日志同时记一条；「导出 JSON」把内存计数吐出来。",why:"「哪几张最常被点」这类轻量埋点，用插件比在 renderItem 里到处加 onClick 干净，也不会漏掉没渲染的路径。",plugs:[{fn:"createClickAnalyticsPlugin",cfg:"showOverlay: true, log: false",why:"订阅 onItemClick 累加计数并广播事件，角标只是可视化的开关"}],props:["columns={3}","containerStyle={{ height: 420 }}","onItemClick={(i, item) => track(item.id)}"],note:"showOverlay 生产环境应关掉（默认就是 false）。真实上报在 bus 上订阅 analytics:click —— 页面侧拿不到 bus 时，可以用 onItemClick 走自己的埋点函数，或者像右上角那样定时取 getStats() 批量上报（计数只在内存里，刷新即清零）。"},eP=J({count:20,seed:3801,instrument:!0,plugins:()=>[pc],coreProps:e=>({columns:3,gap:12,onItemClick:(n,t)=>e.log(`点击 #${n} · ${t.title}（bus 上同时广播 analytics:click）`)}),chrome:e=>d.jsxs("div",{className:"stage-stats",children:[d.jsx("p",{className:"stage-tip",children:"点几张卡：右上角数字是插件自己的计数"}),d.jsx("button",{type:"button",onClick:()=>{var t;const n=pc.getStats();e.log(`getStats() → ${JSON.stringify(n)}`),(t=navigator.clipboard)==null||t.writeText(JSON.stringify(n,null,2)).catch(()=>{})},children:"导出 JSON"})]})}),nP=Object.freeze(Object.defineProperty({__proto__:null,default:eP,meta:Zk},Symbol.toStringTag,{value:"Module"})),tP={slug:"bookmark",title:"Bookmark 插件",group:"plugin",plugin:"BookmarkPlugin",intro:"滚到中间按 b，再滚别处按 r —— 回到刚才那一屏。",why:"长信息流里「刚才那条不错，等下回来看」，比让用户翻历史记录便宜得多。",plugs:[{fn:"createBookmarkPlugin",cfg:'storageKey: "demo-bookmark", scrollBehavior: "smooth"',why:"键盘监听 + localStorage，页面不用为「记位置」写任何逻辑"}],props:["columns={3}","containerStyle={{ height: 420 }}"],note:"记的是 scrollTop 绝对值，不是某一项：数据顺序变了书签就偏了。要「记住这条内容」请按 id 记（用 ScrollAnchor 那套）。"},rP=J({count:60,seed:3901,instrument:!0,plugins:()=>[Hm({storageKey:"demo-bookmark",scrollBehavior:"smooth"})],coreProps:()=>({columns:3,gap:12}),chrome:()=>d.jsxs(d.Fragment,{children:[d.jsx(wv,{items:[["b","记住当前位置"],["r","跳回书签位置"]]}),d.jsx("p",{className:"stage-tip",children:"先滚到中间，按 b；再滚到别处，按 r"})]})}),oP=Object.freeze(Object.defineProperty({__proto__:null,default:rP,meta:tP},Symbol.toStringTag,{value:"Module"})),iP={slug:"url-sync",title:"URLSync 插件",group:"plugin",plugin:"URLSyncPlugin",intro:"条件写进 URL，刷新 / 分享都能复现同一屏。",why:"带筛选的后台列表、搜索结果页：一旦用户按了 F5 或把链接发给别人，条件不该丢。",plugs:[{fn:"createURLSyncPlugin",cfg:'mode: "search", keys: ["searchQuery"]',why:"把 props 上的 searchQuery 写进 URL，并在挂载时广播 URL 里的值"},{fn:"createSearchPlugin",cfg:'fields: ["title", "author"]',why:"URLSync 只负责搬运条件，真正过滤要靠搜索插件"}],props:["searchQuery={query}","columns={3}","containerStyle={{ height: 420 }}"],note:"keys 里必须是内核 props 上真实存在的键（searchQuery），写成 query 就永远写不进 URL。刷新页面后控件值会从 URL 回填，相当于「分享出去的那一屏」。"},lP=J({count:24,seed:4001,instrument:!0,pluginKeys:[],plugins:()=>[Gm({mode:"search",keys:["searchQuery"]}),xa({fields:["title","author"]})],coreProps:e=>({columns:3,gap:12,searchQuery:String(e.cfg.query??""),scrollToTopOnSearchChange:!1}),effect:e=>{const n=new URLSearchParams(window.location.search).get("searchQuery");n&&(e.setCfg("query",n),e.log(`从 URL 回填 searchQuery="${n}"`))},chrome:e=>d.jsxs("div",{className:"stage-search",children:[d.jsx("input",{type:"search",placeholder:"输入关键词，地址栏会跟着变",value:String(e.cfg.query??""),onChange:n=>e.setCfg("query",n.target.value)}),d.jsx("code",{className:"stage-url",children:window.location.search||"（地址栏还没有参数）"})]})}),sP=Object.freeze(Object.defineProperty({__proto__:null,default:lP,meta:iP},Symbol.toStringTag,{value:"Module"})),Ko="demo-waterfall-state",aP={slug:"state-persistence",title:"StatePersistence 插件",group:"plugin",plugin:"StatePersistencePlugin",intro:"滚到哪、第几页，都记在本地；再打开接着看。",why:"详情页返回列表、刷新后回到原位置 —— 这类「像原生 App」的体验，靠它一行装配。",plugs:[{fn:"createStatePersistencePlugin",cfg:'storageKey: "demo-waterfall-state", persistScroll: true, persistKeys: ["pageIndex"]',why:"只注入一次（不是每次渲染都覆盖），避免和用户当前操作打架"}],props:["columns={3}","containerStyle={{ height: 420 }}"],note:"只在挂载时注入一次：所以它不会把用户后来的滚动「拽回去」。跨标签页同步不在它职责内（要自己听 storage 事件）。"};function uP(){const[e,n]=y.useState(()=>localStorage.getItem(Ko)??""),t=y.useCallback(()=>n(localStorage.getItem(Ko)??""),[]),r=y.useCallback(()=>{localStorage.removeItem(Ko),n("")},[]);return d.jsxs("div",{className:"stage-storage",children:[d.jsx("code",{children:e||"（还没有存档 —— 先滚一下列表）"}),d.jsxs("span",{children:[d.jsx("button",{type:"button",onClick:t,children:"刷新读数"}),d.jsx("button",{type:"button",onClick:r,children:"清除存档"})]})]})}const cP=J({count:50,seed:4101,instrument:!0,plugins:()=>[Bm({storageKey:Ko,persistScroll:!0,persistKeys:["pageIndex"]})],coreProps:()=>({columns:3,gap:12}),chrome:()=>d.jsxs(d.Fragment,{children:[d.jsx("p",{className:"stage-tip",children:"滚到中间 → 切到「总览」再切回来，位置会被记住"}),d.jsx(uP,{})]})}),dP=Object.freeze(Object.defineProperty({__proto__:null,default:cP,meta:aP},Symbol.toStringTag,{value:"Module"})),pP={slug:"grouping",title:"Grouping 插件",group:"plugin",plugin:"GroupingPlugin",intro:"按标签分组，右下角浮层列出每组项数。",why:"壁纸墙、书签墙要「按分类看」，或要配合吸顶标题（下一页）—— 分组结果本身不是视觉，是给别的插件用的数据。",plugs:[{fn:"createGroupingPlugin",cfg:"groupBy: (item) => item.tag, showOverlay: true",why:"把 GROUPS（Map<组键, 索引数组>）写进 sharedData，供吸顶标题等插件消费"}],props:["columns={4}","containerStyle={{ height: 420 }}"],note:"分组只算索引，不改变排列顺序 —— 想「同组连在一起」得自己按组重排数据再传进来（或用 SortPlugin）。",controls:[{key:"overlay",label:"显示分组浮层",kind:"switch",init:!0}]},mP=J({count:32,seed:4201,instrument:!0,plugins:e=>[wa({groupBy:n=>n.tag,showOverlay:!!e.cfg.overlay})],coreProps:()=>({columns:4,gap:10}),chrome:e=>{const n=new Map;return e.items.forEach(t=>n.set(t.tag,(n.get(t.tag)??0)+1)),d.jsxs("p",{className:"stage-tip",children:[n.size," 组：",[...n.entries()].sort((t,r)=>r[1]-t[1]).map(([t,r])=>`${t} ${r}`).join(" · ")]})}}),fP=Object.freeze(Object.defineProperty({__proto__:null,default:mP,meta:pP},Symbol.toStringTag,{value:"Module"})),gP={slug:"sticky-header",title:"StickyHeader 插件",group:"plugin",plugin:"StickyHeaderPlugin",intro:"滚动时顶部浮着当前分组标题。",why:"分类壁纸墙、按频道分的视频列表：滚着滚着忘了自己在哪个分类里。",plugs:[{fn:"createStickyHeaderPlugin",cfg:'title: "当前分组", showHint: true',why:"在滚动容器内渲染 sticky 标题条，靠 renderOverlay 而不是改版式"},{fn:"createGroupingPlugin",cfg:"groupBy: (item) => item.tag",why:"标题条要读 GROUPS 的首组名，没有分组插件它只能显示兜底文案"}],props:["columns={4}","containerStyle={{ height: 420 }}"],note:"只跟首组。真要做「跟随当前组」，插件需要订阅 grouping:change，并在 onScroll 里用 visibleRange 反查当前组 —— 这一页故意不藏这个限制。"},hP=J({count:40,seed:4301,instrument:!0,plugins:()=>[Am({title:"当前分组",showHint:!0}),wa({groupBy:e=>e.tag})],coreProps:()=>({columns:4,gap:10}),chrome:()=>d.jsx("p",{className:"stage-tip",children:"向下滚：标题条会贴在瀑布流容器顶部"})}),yP=Object.freeze(Object.defineProperty({__proto__:null,default:hP,meta:gP},Symbol.toStringTag,{value:"Module"})),vP={slug:"scroll-anchor",title:"ScrollAnchor 插件",group:"plugin",plugin:"ScrollAnchorPlugin",intro:"点标签跳到对应那篇 —— 走 bus 事件，不是直接调 ref。",why:"目录、锚点导航、站内搜索定位：跳转逻辑应该在插件里，页面只负责「发一个 id 出去」。",plugs:[{fn:"createScrollAnchorPlugin",cfg:"getAnchorId: (item) => item.id",why:"按 id 反查索引并调 context.scrollToItem，落点由插件算"},{fn:"createAnchorBridgePlugin",why:"本页内联的自定义插件：window 上的 wf:anchor 事件 → bus.emit('anchor:scrollToId')",local:!0}],props:["columns={3}","containerStyle={{ height: 420 }}"],note:"1.x 里这类插件会「自己造一个 bus 挂在 window 上」，其实是同一个问题的不同解法。桥接插件顺带示范了 onMount 返回清理函数 —— 旧版 withPlugins 从不执行它，监听会泄漏。"};function xP(){return{name:"AnchorBridgePlugin",enabled:!0,hooks:{onMount:e=>{const n=t=>{var o;const r=(o=t.detail)==null?void 0:o.id;r&&e.bus.emit("anchor:scrollToId",{id:r})};return window.addEventListener("wf:anchor",n),()=>window.removeEventListener("wf:anchor",n)}}}}const wP=J({count:30,seed:4401,instrument:!0,plugins:()=>[Nm({getAnchorId:e=>e.id}),xP()],coreProps:()=>({columns:3,gap:12}),chrome:e=>d.jsxs("div",{className:"stage-anchors",children:[d.jsx("span",{children:"跳到第"}),[0,6,12,18,24].map(n=>d.jsxs("button",{type:"button",onClick:()=>{const t=e.items[n];t&&(window.dispatchEvent(new CustomEvent("wf:anchor",{detail:{id:t.id}})),e.log(`dispatch wf:anchor { id: "${t.id}" } → 插件转成 bus → scrollToItem(${n})`))},children:["#",n," 项"]},n)),d.jsx("span",{className:"muted",children:"（走 window 事件 → bus → 插件）"})]})}),SP=Object.freeze(Object.defineProperty({__proto__:null,default:wP,meta:vP},Symbol.toStringTag,{value:"Module"}));function bP(e,n,t){const r=e.slice(),[o]=r.splice(n,1);return r.splice(t,0,o),r}const kP={slug:"drag-reorder",title:"DragReorder 插件",group:"plugin",plugin:"DragReorderPlugin",intro:"拖一张卡到别的位置，松手后数组真的变了。",why:"书签墙、看板、排序自定义：用户直接拖比「上移/下移」按钮直观得多。",plugs:[{fn:"createDragReorderPlugin",cfg:"showHandle: true, onReorder: (from, to) => setItems((prev) => move(prev, from, to))",why:"鼠标走 HTML5 draggable、触屏走长按 + pointer，把起止索引交回来；数据变更完全由页面掌控"}],props:["columns={3}","containerStyle={{ height: 420 }}"],note:"showHandle 只是「虚线手柄」，接真实版式时关掉。插件不写 localStorage 也不调接口 —— 落库要自己在 onReorder 里做。鼠标走原生 HTML5 拖拽；触屏上 `draggable` 根本不触发，所以另有 pointer 路径（长按 180ms 进入拖拽，可用 touchHoldMs 调）。"},PP=J({count:18,seed:4501,instrument:!0,plugins:e=>[Mm({showHandle:!0,onReorder:(n,t,r)=>{e.setItems(o=>bP(o,n,t)),e.log(`拖拽 #${n} → #${t}（${(r==null?void 0:r.title)??"未知项"}），数组已重排`)}})],coreProps:()=>({columns:3,gap:12}),chrome:()=>d.jsx("p",{className:"stage-tip",children:"鼠标：拖卡片右上角手柄 · 触屏：长按卡片 180ms 后拖动 —— 松手后看位置与顺序变化"})}),CP=Object.freeze(Object.defineProperty({__proto__:null,default:PP,meta:kP},Symbol.toStringTag,{value:"Module"})),_P={slug:"a11y",title:"A11y 插件",group:"plugin",plugin:"A11yPlugin",intro:"容器 role=list、项 role=listitem，一键读出来验证。",why:"瀑布流本质是列表，但 div 堆出来的结构对读屏软件等于不存在。这个插件把语义补齐，成本极低。",plugs:[{fn:"createA11yPlugin",cfg:'containerRole: "list", itemRole: "listitem", containerLabel: "示例卡片列表", enableTabIndex: false',why:"在 onMount / onLayoutComplete 里写语义属性（不是渲染期副作用），项用 renderItemWrapper 包一层"}],props:["columns={3}","containerStyle={{ height: 420 }}"],note:"enableTabIndex 打开后每张卡都能 Tab 到，键盘可达但 Tab 会很累 —— 除非卡片真的可操作，否则保持关闭，用 roving tabindex 更好。"},TP=J({count:16,seed:4601,instrument:!0,plugins:()=>[Om({containerRole:"list",itemRole:"listitem",containerLabel:"示例卡片列表",enableTabIndex:!1})],coreProps:()=>({columns:3,gap:12}),chrome:e=>d.jsxs("div",{className:"stage-a11y",children:[d.jsx("button",{type:"button",onClick:()=>{var r;const n=(r=e.ref.current)==null?void 0:r.getContainer();if(!n){e.log("容器还没挂载","warn");return}const t=n.querySelector("[data-index]");e.log(`容器 role="${n.getAttribute("role")??"无"}" aria-label="${n.getAttribute("aria-label")??"无"}"`),e.log(`首项 role="${(t==null?void 0:t.getAttribute("role"))??"无"}" tabIndex="${(t==null?void 0:t.getAttribute("tabindex"))??"无"}"`)},children:"检查 DOM 属性"}),d.jsx("span",{className:"muted",children:"结果写到右栏日志"})]})}),RP=Object.freeze(Object.defineProperty({__proto__:null,default:TP,meta:_P},Symbol.toStringTag,{value:"Module"}));function $P(){return typeof window<"u"&&window.matchMedia("(prefers-reduced-motion: reduce)").matches}function MP(){const[,e]=Tt.useState(0),n=$P();return d.jsxs("div",{className:"stage-stats",children:[d.jsxs("p",{className:"stage-tip",children:["系统偏好 reduce motion：",d.jsx("b",{children:n?"是 → 过渡已清掉":"否 → 过渡生效（240ms）"})]}),d.jsx("button",{type:"button",onClick:()=>e(t=>t+1),children:"重新检测"})]})}const IP={slug:"reduced-motion",title:"ReducedMotion 插件",group:"plugin",plugin:"ReducedMotionPlugin",intro:"系统开了「减少动态效果」，过渡与 transform 自动关掉。",why:"前庭功能障碍用户会被大幅位移的动画伤到。这不是可选项 —— 尊重系统偏好是基本无障碍要求。",plugs:[{fn:"createReducedMotionPlugin",cfg:"disableTransform: true, removeTransitions: true",why:"读 matchMedia，命中后关掉过渡与 transform 定位"},{fn:"createTransitionPlugin",cfg:"duration: 240",why:"装在这里是为了被 ReduceMotion 关掉 —— 用来验证它真的生效"}],props:["columns={3}","containerStyle={{ height: 420 }}"],note:"两个插件同开不是冲突：ReducedMotion 的 priority(65) 更高，会先执行并清掉过渡。验证方法：改系统设置，或在 DevTools 里模拟 prefers-reduced-motion；运行中切换会即时生效（插件监听 matchMedia 的 change），但定位方式要等下一次重渲染才切过来。"},NP=J({count:26,seed:4701,instrument:!0,plugins:()=>[fm({disableTransform:!0,removeTransitions:!0}),va({duration:240})],coreProps:()=>({columns:3,gap:12}),chrome:()=>d.jsx(MP,{})}),jP=Object.freeze(Object.defineProperty({__proto__:null,default:NP,meta:IP},Symbol.toStringTag,{value:"Module"})),EP={slug:"transition",title:"Transition 插件",group:"plugin",plugin:"TransitionPlugin",intro:"打乱顺序，看卡片是滑过去还是瞬移。",why:"筛选、排序、拖拽后布局会大幅变化，没有过渡会显得「闪一下」；加上 200–300ms 就顺了。",plugs:[{fn:"createTransitionPlugin",cfg:'duration: {{duration}}, easing: "cubic-bezier(.22,.61,.36,1)"',why:"只加 CSS 过渡（transform / opacity），不参与布局计算"}],props:["columns={3}","containerStyle={{ height: 420 }}"],note:"把 duration 拖到 0 就等于关掉。过渡期间 item 的 transform 是中间值，用 transform 读位置的工具会读到中间态。",controls:[{key:"duration",label:"duration（ms）",kind:"number",init:260,min:0,max:800,step:20}]},LP=J({count:24,seed:4801,instrument:!0,plugins:e=>[va({duration:Number(e.cfg.duration)})],coreProps:()=>({columns:3,gap:12}),chrome:e=>d.jsxs("div",{className:"stage-anchors",children:[d.jsx("button",{type:"button",onClick:()=>{e.setItems(n=>{const t=n.slice();for(let r=t.length-1;r>0;r--){const o=Math.floor(Math.random()*(r+1));[t[r],t[o]]=[t[o],t[r]]}return t}),e.log(`打乱顺序（过渡 ${Number(e.cfg.duration)}ms）`)},children:"打乱顺序"}),d.jsx("span",{className:"muted",children:"duraton 拖到 0 再点一次，就是瞬移"})]})}),OP=Object.freeze(Object.defineProperty({__proto__:null,default:LP,meta:EP},Symbol.toStringTag,{value:"Module"})),DP={slug:"pin-item",title:"PinItem 插件",group:"plugin",plugin:"PinItemPlugin",intro:"第 0、1 项钉在第 1 列顶部，普通项自动让位。",why:"「置顶公告 + 信息流」「推荐位固定在第一列」这类需求，用插件比把置顶内容塞进数据里干净。",plugs:[{fn:"createPinItemPlugin",cfg:"pinnedIndices: [0, 1], column: {{column}}",why:"在 calculateItemPosition 里把置顶项固定到指定列顶部，并下推同列普通项"}],props:["columns={3}","containerStyle={{ height: 420 }}"],note:"置顶项索引要小（0..n）：如果置顶的索引大于该列已排好的项，只会把后续项往下推、已布局的不回退，视觉上会重叠。同一列多条置顶按数组顺序纵向下堆。",controls:[{key:"column",label:"钉到第几列（0 基）",kind:"number",init:0,min:0,max:2}]},zP=J({count:22,seed:4901,instrument:!0,plugins:e=>[am({pinnedIndices:[0,1],column:Number(e.cfg.column)})],coreProps:()=>({columns:3,gap:12}),decorate:(e,n,t)=>({pinned:[0,1].includes(t)&&Number(e.cfg.column)>=0}),chrome:e=>d.jsxs("p",{className:"stage-tip",children:["置顶项：",d.jsx("b",{children:"#0 #1"})," · 钉在第 ",d.jsx("b",{children:Number(e.cfg.column)+1})," 列（角标写着「置顶」）"]})}),AP=Object.freeze(Object.defineProperty({__proto__:null,default:zP,meta:DP},Symbol.toStringTag,{value:"Module"})),mc=Rm({showOverlay:!0}),WP={slug:"heatmap-analytics",title:"HeatmapAnalytics 插件",group:"plugin",plugin:"HeatmapAnalyticsPlugin",intro:"滚一遍，顶部汇总条告诉你曝光了多少次、点了多少下。",why:"内容分发要看「哪些真的被看到了」，不是「哪些被加载了」。曝光埋点交给插件，业务侧只消费汇总。",plugs:[{fn:"createHeatmapAnalyticsPlugin",cfg:"showOverlay: true",why:"在项进入视口时累加曝光、点击时累加点击，并在 onLayoutComplete 补一次首屏统计"}],props:["columns={4}","containerStyle={{ height: 420 }}"],note:"首屏曝光靠 onLayoutComplete 补一次，否则第一帧显示 0。真实上报要自己做去重与批次（插件只负责计数）——「导出 JSON」拿到的就是 `getStats()` 的形状：总曝光、总点击、每项明细。"},HP=J({count:36,seed:5001,instrument:!0,plugins:()=>[mc],coreProps:e=>{let n=0;return{columns:4,gap:10,onItemEnterViewport:t=>{n+=1,n<=8&&e.log(`曝光 #${t}（Core 的可见事件，插件也在数）`,"info")}}},chrome:e=>d.jsxs("div",{className:"stage-stats",children:[d.jsx("p",{className:"stage-tip",children:"滚一遍：顶部条是开关，卡片角上是单卡曝光/点击次数"}),d.jsx("button",{type:"button",onClick:()=>{var t;const n=mc.getStats();e.log(`getStats() → 曝光 ${n.totalViews} / 点击 ${n.totalClicks} / 有数据项 ${n.items.length}`),(t=navigator.clipboard)==null||t.writeText(JSON.stringify(n,null,2)).catch(()=>{})},children:"导出 JSON"})]})}),FP=Object.freeze(Object.defineProperty({__proto__:null,default:HP,meta:WP},Symbol.toStringTag,{value:"Module"})),BP=`/**
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
`,UP=`/**
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
`,GP=`/**
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
`,VP=`/**
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
`,KP=`/**\r
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
`,QP=`/**
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
`,YP=`/**
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
`,qP=`/**
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
`,XP=`/**
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
`,JP=`/**
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
`,ZP=`/**
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
`,eC=`/**\r
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
`,nC=`/**\r
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
`,tC=`/**
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
`,rC=`/**
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
`,oC=`/**
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
`,iC=`/**
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
`,lC=`/**
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
`,sC=`/**
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
`,aC=`/**\r
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
`,uC=`/**\r
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
`,cC=`/**
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
`,dC=`/**
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
`,pC=`/**
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
`,mC=`/**
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
`,fC=`/**\r
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
`,gC=`/**\r
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
`,hC=`/**\r
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
`,yC=`/**\r
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
`,vC=`/**
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
`,xC=`/**
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
`,wC=`/**
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
`,SC=`/**
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
`,bC=`/**\r
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
`,kC=Object.assign({"./01-basic.tsx":kv,"./02-columns.tsx":_v,"./03-gap.tsx":$v,"./04-ref.tsx":Ev,"./05-lifecycle.tsx":Dv,"./06-advanced.tsx":Wv,"./07-responsive-columns.tsx":ck,"./08-auto-column.tsx":mk,"./09-alignment.tsx":hk,"./10-fixed-height.tsx":xk,"./11-gap-plugin.tsx":bk,"./12-virtual.tsx":Ck,"./13-virtual-dynamic.tsx":Rk,"./14-throttle.tsx":Ik,"./15-debounce-layout.tsx":Ek,"./16-recycle.tsx":Dk,"./17-infinite-scroll.tsx":Wk,"./18-pagination.tsx":Bk,"./19-filter.tsx":Vk,"./20-sort.tsx":Yk,"./21-search.tsx":Jk,"./22-click-analytics.tsx":nP,"./23-bookmark.tsx":oP,"./24-url-sync.tsx":sP,"./25-state-persistence.tsx":dP,"./26-grouping.tsx":fP,"./27-sticky-header.tsx":yP,"./28-scroll-anchor.tsx":SP,"./29-drag-reorder.tsx":CP,"./30-a11y.tsx":RP,"./31-reduced-motion.tsx":jP,"./32-transition.tsx":OP,"./33-pin-item.tsx":AP,"./34-heatmap-analytics.tsx":FP}),PC=Object.assign({"./01-basic.tsx":BP,"./02-columns.tsx":UP,"./03-gap.tsx":GP,"./04-ref.tsx":VP,"./05-lifecycle.tsx":KP,"./06-advanced.tsx":QP,"./07-responsive-columns.tsx":YP,"./08-auto-column.tsx":qP,"./09-alignment.tsx":XP,"./10-fixed-height.tsx":JP,"./11-gap-plugin.tsx":ZP,"./12-virtual.tsx":eC,"./13-virtual-dynamic.tsx":nC,"./14-throttle.tsx":tC,"./15-debounce-layout.tsx":rC,"./16-recycle.tsx":oC,"./17-infinite-scroll.tsx":iC,"./18-pagination.tsx":lC,"./19-filter.tsx":sC,"./20-sort.tsx":aC,"./21-search.tsx":uC,"./22-click-analytics.tsx":cC,"./23-bookmark.tsx":dC,"./24-url-sync.tsx":pC,"./25-state-persistence.tsx":mC,"./26-grouping.tsx":fC,"./27-sticky-header.tsx":gC,"./28-scroll-anchor.tsx":hC,"./29-drag-reorder.tsx":yC,"./30-a11y.tsx":vC,"./31-reduced-motion.tsx":xC,"./32-transition.tsx":wC,"./33-pin-item.tsx":SC,"./34-heatmap-analytics.tsx":bC}),CC=e=>e.replace(/^\.\//,""),gs=Object.entries(kC).map(([e,n])=>{const t=CC(e);return{meta:n.meta,Stage:n.default,file:t,source:PC[e]??""}}).sort((e,n)=>e.file.localeCompare(n.file)),_C=["basic","advanced","plugin"],C_=Array.from(new Set(gs.map(e=>e.meta.plugin).filter(e=>!!e))).sort(),hs={basic:{label:"基础功能",hint:"Core 自身的 props"},advanced:{label:"高级功能",hint:"ref / 事件 / 杂项配置"},plugin:{label:"插件功能",hint:"一插件一页"}};function fc(e){const n={};for(const t of e.controls??[])n[t.key]=t.init;return n}const TC="import|from|export|default|function|return|const|let|var|new|if|else|for|of|in|while|switch|case|break|continue|type|interface|extends|implements|as|satisfies|await|async|throw|try|catch|finally|class|typeof|instanceof|delete|void|yield",RC="true|false|null|undefined|this|super",$C="number|string|boolean|object|any|unknown|never|React|HTMLElement|void",gc=new RegExp([String.raw`(\/\/[^\n]*|\/\*[\s\S]*?\*\/)`,String.raw`(\`(?:\\[\s\S]|[^\\\`])*\`|"(?:\\[\s\S]|[^\\"])*"|'(?:\\[\s\S]|[^\\'])*')`,String.raw`\b(${TC})\b`,String.raw`\b(${RC})\b`,String.raw`\b(${$C})\b`,String.raw`(<\/?[A-Za-z][\w.$]*)`,String.raw`\b(\d+(?:\.\d+)?)\b`].join("|"),"g"),hc=["tok-comment","tok-string","tok-kw","tok-lit","tok-type","tok-tag","tok-num"];function MC(e){const n=[];let t=0;gc.lastIndex=0;let r;for(;r=gc.exec(e);){r.index>t&&n.push({text:e.slice(t,r.index),cls:null});const o=hc.findIndex((i,l)=>r[l+1]!==void 0);n.push({text:r[0],cls:o>=0?hc[o]:null}),t=r.index+r[0].length}return t<e.length&&n.push({text:e.slice(t),cls:null}),n}function yc(e){try{const n=document.createElement("textarea");n.value=e,n.setAttribute("readonly",""),n.style.position="fixed",n.style.opacity="0",document.body.appendChild(n),n.select();const t=document.execCommand("copy");return document.body.removeChild(n),t}catch{return!1}}function IC({code:e,title:n="tsx",collapseAfter:t=24,maxHeight:r}){const[o,i]=y.useState("idle"),[l,s]=y.useState(!1),a=y.useMemo(()=>e.replace(/\s+$/,"").split(`
`),[e]),u=t>0&&a.length>t,p=u&&!l?a.slice(0,t).join(`
`):e,c=y.useMemo(()=>MC(p),[p]),m=y.useCallback(async()=>{var x;let g=!1;if((x=navigator.clipboard)!=null&&x.writeText)try{await navigator.clipboard.writeText(e),g=!0}catch{g=yc(e)}else g=yc(e);i(g?"ok":"fail"),window.setTimeout(()=>i("idle"),1600)},[e]);return d.jsxs("div",{className:"code",children:[d.jsxs("div",{className:"code-head",children:[d.jsx("span",{children:n}),d.jsxs("span",{style:{display:"flex",gap:6,alignItems:"center"},children:[d.jsxs("span",{children:[a.length," 行"]}),d.jsx("button",{type:"button",className:`code-copy${o==="ok"?" is-ok":o==="fail"?" is-fail":""}`,onClick:m,children:o==="ok"?"已复制":o==="fail"?"复制失败":"复制"})]})]}),d.jsx("pre",{style:r?{maxHeight:r}:{maxHeight:"none"},children:d.jsx("code",{children:c.map((g,x)=>g.cls?d.jsx("span",{className:g.cls,children:g.text},x):d.jsx(Tt.Fragment,{children:g.text},x))})}),u?d.jsx("button",{type:"button",className:"code-more",onClick:()=>s(g=>!g),children:l?"收起":`展开余下 ${a.length-t} 行`}):null]})}function Vm(e){return e.props??e.config??[]}function NC({doc:e}){var o,i,l;const n=Vm(e),t=e.events??[],r=e.methods??[];return d.jsxs(d.Fragment,{children:[d.jsxs("div",{className:"doc-sec",children:[d.jsx("h5",{children:"属性 Props"}),n.length?d.jsxs("table",{className:"doc-table",children:[d.jsx("thead",{children:d.jsxs("tr",{children:[d.jsx("th",{children:"属性"}),d.jsx("th",{children:"类型"}),d.jsx("th",{children:"默认"}),d.jsx("th",{children:"说明"})]})}),d.jsx("tbody",{children:n.map(s=>d.jsxs("tr",{children:[d.jsx("td",{children:d.jsx("code",{children:s.name})}),d.jsx("td",{children:d.jsx("code",{className:"dim",children:s.type})}),d.jsx("td",{children:d.jsx("code",{className:"dim",children:s.default??"-"})}),d.jsx("td",{children:s.description??"—"})]},s.name))})]}):d.jsx("p",{className:"doc-note",children:"无可配置属性，工厂零参调用即可。"})]}),d.jsxs("div",{className:"doc-sec",children:[d.jsx("h5",{children:"事件 Events"}),t.length?d.jsxs("table",{className:"doc-table",children:[d.jsx("thead",{children:d.jsxs("tr",{children:[d.jsx("th",{children:"事件"}),d.jsx("th",{children:"触发时机"}),d.jsx("th",{children:"说明"})]})}),d.jsx("tbody",{children:t.map(s=>d.jsxs("tr",{children:[d.jsx("td",{children:d.jsx("code",{children:s.name})}),d.jsx("td",{children:s.when}),d.jsx("td",{children:s.description})]},s.name))})]}):d.jsx("p",{className:"doc-note",children:"不参与任何事件。"})]}),d.jsxs("div",{className:"doc-sec",children:[d.jsx("h5",{children:"方法 Methods"}),r.length?d.jsxs("table",{className:"doc-table",children:[d.jsx("thead",{children:d.jsxs("tr",{children:[d.jsx("th",{children:"方法"}),d.jsx("th",{children:"签名"}),d.jsx("th",{children:"说明"})]})}),d.jsx("tbody",{children:r.map(s=>d.jsxs("tr",{children:[d.jsx("td",{children:d.jsx("code",{children:s.name})}),d.jsx("td",{children:d.jsx("code",{className:"dim",children:s.signature})}),d.jsx("td",{children:s.description})]},s.name))})]}):d.jsx("p",{className:"doc-note",children:e.methodsNote??"不调用上下文方法。"})]}),d.jsxs("div",{className:"doc-cols",children:[(o=e.features)!=null&&o.length?d.jsxs("div",{children:[d.jsx("h5",{children:"能做"}),d.jsx("ul",{children:e.features.map(s=>d.jsx("li",{children:s},s))})]}):null,(i=e.useCases)!=null&&i.length?d.jsxs("div",{children:[d.jsx("h5",{children:"适合"}),d.jsx("ul",{children:e.useCases.map(s=>d.jsx("li",{children:s},s))})]}):null,(l=e.notes)!=null&&l.length?d.jsxs("div",{children:[d.jsx("h5",{children:"注意"}),d.jsx("ul",{children:e.notes.map(s=>d.jsx("li",{children:s},s))})]}):null]})]})}function jC({factory:e,priority:n,summary:t,doc:r,defaultOpen:o=!0}){var l,s;const i={props:Vm(r).length,events:((l=r.events)==null?void 0:l.length)??0,methods:((s=r.methods)==null?void 0:s.length)??0};return d.jsxs("details",{className:"api-plug",open:o,children:[d.jsxs("summary",{children:[d.jsx("code",{children:e}),d.jsxs("span",{className:"tag tag-accent",children:["priority ",n]}),d.jsx("span",{className:"api-plug-desc",children:t}),d.jsxs("span",{className:"api-plug-n",children:[i.props," 属性 · ",i.events," 事件 · ",i.methods," 方法"]})]}),d.jsx("div",{className:"api-plug-body",children:d.jsx(NC,{doc:r})})]})}const EC=/create[A-Z]\w*Plugin/g;function LC(e){return(e.match(/create[A-Z]\w*Plugin/)??[e])[0]}function Km(e){return e.dir?`create${e.dir}`:LC(e.factory)}function OC(e){return new Set(e.match(EC)??[])}function DC(e,n){const t=OC(e);return n.filter(r=>t.has(Km(r))).sort((r,o)=>r.priority-o.priority)}function zC({source:e,plugins:n,heading:t="本页用到的插件"}){const r=y.useMemo(()=>DC(e,n),[e,n]);return r.length===0?null:d.jsxs("section",{className:"api-sec",children:[d.jsxs("div",{className:"api-sec-head",children:[d.jsxs("h2",{className:"api-sec-title",children:[t," · ",r.length," 个"]}),d.jsxs("p",{className:"api-sec-sub",children:["就是上面代码里装配的全部成员。属性是工厂参数，事件是父组件传进来的回调， 方法是插件读取 / 调用的上下文能力 —— 表内容与 ",d.jsx("code",{children:"doc.json"})," 同源，随包发布。"]})]}),r.map(o=>d.jsx(jC,{factory:Km(o),priority:o.priority,summary:o.summary??o.doc.description??"",doc:o.doc},o.factory))]})}const AC=`import type { WaterfallPlugin } from "../../components/WaterfallPlugin/plugins/types";

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
`,WC=`import type {
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
`,HC=`import type { WaterfallPlugin } from "../../components/WaterfallPlugin/plugins/types";

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
`,FC=`import type { WaterfallPlugin } from "../../components/WaterfallPlugin/plugins/types";

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
`,BC=`import type { WaterfallPlugin } from "../../components/WaterfallPlugin/plugins/types";

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
`,UC=`import type {
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
`,GC=`import type {
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
`,VC=`import type { WaterfallPlugin } from "../../components/WaterfallPlugin/plugins/types";

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
`,KC=`import type {
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
`,QC=`import type {
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
`,YC=`import type { WaterfallPlugin } from "../../components/WaterfallPlugin/plugins/types";\r
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
`,qC=`import type {
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
`,XC=`import type { WaterfallPlugin } from "../../components/WaterfallPlugin/plugins/types";

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
`,JC=`import type { WaterfallPlugin } from "../../components/WaterfallPlugin/plugins/types";

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
`,ZC=`import type {\r
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
`,e_=`import type { WaterfallPlugin } from "../../components/WaterfallPlugin/plugins/types";

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
`,n_=`import type { WaterfallPlugin } from "../../components/WaterfallPlugin/plugins/types";

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
`,t_=`import type { WaterfallPlugin } from "../../components/WaterfallPlugin/plugins/types";\r
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
`,r_=`import type {
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
`,o_=`import type { WaterfallPlugin } from "../../components/WaterfallPlugin/plugins/types";

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
`,i_=`import type {
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
`,l_=`import type {
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
`,s_=`import type {
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
`,a_=`import type {
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
`,u_=`import type { WaterfallPlugin } from "../../components/WaterfallPlugin/plugins/types";

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
`,c_=`import type { WaterfallPlugin } from "../../components/WaterfallPlugin/plugins/types";

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
`,__={layout:"布局",perf:"性能与动效",data:"数据管线",interaction:"交互与埋点",ui:"语义与状态"},vc=["layout","perf","data","interaction","ui"],xc=Object.assign({"/src/custom-plugins/A11yPlugin/doc.json":Lm,"/src/custom-plugins/AlignmentPlugin/doc.json":Xp,"/src/custom-plugins/AutoColumnPlugin/doc.json":Zp,"/src/custom-plugins/BookmarkPlugin/doc.json":Wm,"/src/custom-plugins/ClickAnalyticsPlugin/doc.json":Cm,"/src/custom-plugins/DebounceLayoutPlugin/doc.json":dm,"/src/custom-plugins/DragReorderPlugin/doc.json":$m,"/src/custom-plugins/FilterPlugin/doc.json":hm,"/src/custom-plugins/FixedHeightPlugin/doc.json":im,"/src/custom-plugins/GapPlugin/doc.json":rm,"/src/custom-plugins/GroupingPlugin/doc.json":Dm,"/src/custom-plugins/HeatmapAnalyticsPlugin/doc.json":Tm,"/src/custom-plugins/InfiniteScrollPlugin/doc.json":km,"/src/custom-plugins/PaginationPlugin/doc.json":Sm,"/src/custom-plugins/PinItemPlugin/doc.json":sm,"/src/custom-plugins/RecyclePlugin/doc.json":jm,"/src/custom-plugins/ReducedMotionPlugin/doc.json":mm,"/src/custom-plugins/ResponsiveColumnsPlugin/doc.json":nm,"/src/custom-plugins/ScrollAnchorPlugin/doc.json":Im,"/src/custom-plugins/SearchPlugin/doc.json":wm,"/src/custom-plugins/SortPlugin/doc.json":vm,"/src/custom-plugins/StatePersistencePlugin/doc.json":Fm,"/src/custom-plugins/StickyHeaderPlugin/doc.json":zm,"/src/custom-plugins/ThrottlePlugin/doc.json":um,"/src/custom-plugins/TransitionPlugin/doc.json":gm,"/src/custom-plugins/URLSyncPlugin/doc.json":Um}),d_=Object.assign({"/src/custom-plugins/AlignmentPlugin/create.ts":AC,"/src/custom-plugins/AutoColumnPlugin/create.ts":WC,"/src/custom-plugins/DebounceLayoutPlugin/create.ts":HC,"/src/custom-plugins/FilterPlugin/create.ts":FC,"/src/custom-plugins/FixedHeightPlugin/create.ts":BC,"/src/custom-plugins/GapPlugin/create.ts":UC,"/src/custom-plugins/InfiniteScrollPlugin/create.ts":GC,"/src/custom-plugins/PaginationPlugin/create.ts":VC,"/src/custom-plugins/PinItemPlugin/create.ts":KC,"/src/custom-plugins/RecyclePlugin/create.ts":QC,"/src/custom-plugins/ReducedMotionPlugin/create.ts":YC,"/src/custom-plugins/ResponsiveColumnsPlugin/create.ts":qC,"/src/custom-plugins/SearchPlugin/create.ts":XC,"/src/custom-plugins/SortPlugin/create.ts":JC,"/src/custom-plugins/StatePersistencePlugin/create.ts":ZC,"/src/custom-plugins/ThrottlePlugin/create.ts":e_,"/src/custom-plugins/TransitionPlugin/create.ts":n_,"/src/custom-plugins/URLSyncPlugin/create.ts":t_}),p_=Object.assign({"/src/custom-plugins/A11yPlugin/create.tsx":r_,"/src/custom-plugins/BookmarkPlugin/create.tsx":o_,"/src/custom-plugins/ClickAnalyticsPlugin/create.tsx":i_,"/src/custom-plugins/DragReorderPlugin/create.tsx":l_,"/src/custom-plugins/GroupingPlugin/create.tsx":s_,"/src/custom-plugins/HeatmapAnalyticsPlugin/create.tsx":a_,"/src/custom-plugins/ScrollAnchorPlugin/create.tsx":u_,"/src/custom-plugins/StickyHeaderPlugin/create.tsx":c_}),wc={...d_,...p_},Qm=e=>e.replace(/^.*\/custom-plugins\//,"").replace(/\/.*$/,"");function m_(e){const n=Object.keys(wc).find(o=>Qm(o)===e),t=n?wc[n]:"",r=/priority:\s*(\d+)/.exec(t);return r?Number(r[1]):0}function f_(e){const n=Object.keys(xc).find(t=>Qm(t)===e);return n?xc[n]:{name:e,description:"（缺少 doc.json）"}}const g_=[{dir:"AutoColumnPlugin",group:"layout",make:()=>em({minColumnWidth:200,maxColumns:4})},{dir:"ResponsiveColumnsPlugin",group:"layout",make:()=>tm({breakpoints:{sm:{width:0,columns:2},md:{width:700,columns:3},lg:{width:1020,columns:4}}})},{dir:"AlignmentPlugin",group:"layout",make:()=>Jp({mode:"shortest"})},{dir:"GapPlugin",group:"layout",make:()=>om({columnGap:14,rowGap:14})},{dir:"FixedHeightPlugin",group:"layout",make:()=>lm({itemHeight:180})},{dir:"PinItemPlugin",group:"layout",make:()=>am({pinnedIndices:[0],column:0})},{dir:"ThrottlePlugin",group:"perf",make:()=>cm({scroll:16,resize:120})},{dir:"DebounceLayoutPlugin",group:"perf",make:()=>pm({delay:160})},{dir:"TransitionPlugin",group:"perf",make:()=>va({duration:240})},{dir:"ReducedMotionPlugin",group:"perf",make:()=>fm()},{dir:"FilterPlugin",group:"data",make:()=>ym({predicate:e=>e.price<=500})},{dir:"SortPlugin",group:"data",make:()=>xm({comparator:(e,n)=>n.likes-e.likes})},{dir:"SearchPlugin",group:"data",make:()=>xa({fields:["title","author"]})},{dir:"PaginationPlugin",group:"data",make:()=>bm({pageSize:18})},{dir:"InfiniteScrollPlugin",group:"data",make:()=>Pm({threshold:400})},{dir:"ClickAnalyticsPlugin",group:"interaction",make:()=>_m({showOverlay:!0})},{dir:"HeatmapAnalyticsPlugin",group:"interaction",make:()=>Rm({showOverlay:!0})},{dir:"DragReorderPlugin",group:"interaction",make:()=>Mm({showHandle:!0})},{dir:"ScrollAnchorPlugin",group:"interaction",make:()=>Nm({})},{dir:"RecyclePlugin",group:"interaction",make:()=>Em({poolSize:24})},{dir:"A11yPlugin",group:"ui",make:()=>Om({enableTabIndex:!1})},{dir:"GroupingPlugin",group:"ui",make:()=>wa({groupBy:e=>e.tag})},{dir:"StickyHeaderPlugin",group:"ui",make:()=>Am({title:"工坊预览"})},{dir:"BookmarkPlugin",group:"ui",make:()=>Hm({storageKey:"demo-workshop-bookmark"})},{dir:"StatePersistencePlugin",group:"ui",make:()=>Bm({storageKey:"demo-workshop-state",persistScroll:!0})},{dir:"URLSyncPlugin",group:"ui",make:()=>Gm({mode:"search",keys:["searchQuery"]})}],ys=g_.map(e=>{const n=f_(e.dir);return{dir:e.dir,factory:`create${e.dir}`,group:e.group,priority:m_(e.dir),summary:n.description,doc:n,make:e.make}}).sort((e,n)=>vc.indexOf(e.group)-vc.indexOf(n.group)||n.priority-e.priority),T_=[{a:"AutoColumnPlugin",b:"ResponsiveColumnsPlugin",why:"两者都改列数，AutoColumn 按最小列宽算、Responsive 按断点表算，同时开会交替覆盖"},{a:"TransitionPlugin",b:"ReducedMotionPlugin",why:"ReducedMotion 会去掉过渡，同开等于把 Transition 关掉（不是错误，但别指望有动效）"},{a:"InfiniteScrollPlugin",b:"PaginationPlugin",why:"一个追加、一个切片，叠在一起会出现「翻到第 2 页又看到第 1 页」"},{a:"RecyclePlugin",b:"virtualize",why:"Recycle 改 visibility、virtualize 直接卸载 DOM，同开互相打架"}],R_=["AutoColumnPlugin","GapPlugin","TransitionPlugin","A11yPlugin"],h_=/\{\{\s*([\w-]+)\s*\}\}/g;function Sc(e,n){return e.replace(h_,(t,r)=>r in n?String(n[r]):t)}function y_(e,n){const t=e.plugs.map(a=>a.fn).sort(),r=t.length>3,o=t.length?r?`import {
${t.map(a=>`  ${a},`).join(`
`)}
} from "vane-waterfall/custom-plugins";`:`import { ${t.join(", ")} } from "vane-waterfall/custom-plugins";`:"// 这一页只用 Core props，不需要任何插件",i=e.plugs.map(a=>`  ${a.fn}(${a.cfg?`{ ${Sc(a.cfg,n)} }`:""}),`).join(`
`),l=e.props.filter(a=>typeof a=="string"||!a.when||a.when(n)).map(a=>`      ${Sc(typeof a=="string"?a:a.text,n)}`).join(`
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
`}function v_({entry:e,order:n}){var w;const{meta:t,Stage:r,file:o,source:i}=e,[l,s]=y.useState(()=>fc(t)),[a,u]=y.useState([]),[p,c]=y.useState("minimal"),m=y.useCallback((S,h="event")=>{const f=new Date().toLocaleTimeString("zh-CN",{hour12:!1});u(v=>[{id:v.length+1,at:f,text:S,kind:h},...v].slice(0,60))},[]),g=y.useCallback((S,h)=>{s(f=>({...f,[S]:h}))},[]),x=y.useMemo(()=>y_(t,l),[t,l]);return d.jsxs("section",{className:"demo","data-demo":t.slug,children:[d.jsxs("header",{className:"demo-head",children:[d.jsxs("div",{className:"demo-folio",children:[d.jsx("span",{className:"demo-no",children:String(n).padStart(2,"0")}),d.jsx("em",{children:"plate"})]}),d.jsxs("div",{children:[d.jsxs("div",{className:"demo-title-row",children:[d.jsx("h2",{children:t.title}),d.jsx("span",{className:"demo-group",children:hs[t.group].label}),t.plugin?d.jsx("code",{className:"demo-plugin",children:t.plugin}):null]}),d.jsx("p",{className:"demo-intro",children:t.intro}),d.jsxs("p",{className:"demo-why",children:[d.jsx("b",{children:"什么时候用"}),t.why]})]}),d.jsxs("div",{className:"demo-meta",children:[d.jsxs("div",{className:"demo-meta-row",children:[d.jsx("span",{children:"file"}),d.jsx("b",{children:o})]}),d.jsxs("div",{className:"demo-meta-row",children:[d.jsx("span",{children:"group"}),d.jsx("b",{children:hs[t.group].label})]}),d.jsxs("div",{className:"demo-meta-row",children:[d.jsx("span",{children:"plugs"}),d.jsx("b",{children:t.plugs.length?`${t.plugs.length} installed`:"core only"})]})]})]}),(w=t.controls)!=null&&w.length?d.jsxs("div",{className:"demo-controls",children:[d.jsx(vv,{controls:t.controls,cfg:l,onChange:g}),d.jsx("button",{type:"button",className:"demo-reset",onClick:()=>{s(fc(t)),u([])},children:"重置"})]}):null,d.jsxs("div",{className:"demo-body",children:[d.jsxs("figure",{className:"plate",children:[d.jsxs("figcaption",{className:"plate-cap",children:[d.jsx("b",{children:"stage"}),d.jsxs("span",{children:[t.tone==="light"?"light surface":"live render",t.stageHeight?` · ${t.stageHeight}px`:""]}),d.jsx("em",{children:"live"})]}),d.jsx("div",{className:"plate-ruler","aria-hidden":!0}),d.jsx("div",{className:`plate-body demo-stage${t.tone==="light"?" tone-light":""}`,style:{"--stage-h":`${t.stageHeight??380}px`},children:d.jsx(r,{cfg:l,log:m,setCfg:g})})]}),d.jsxs("aside",{className:"demo-side",children:[d.jsx("div",{className:"demo-plugs",children:t.plugs.length===0?d.jsx("span",{className:"demo-plug is-core",children:"仅 Core props"}):t.plugs.map(S=>d.jsx("span",{className:`demo-plug${S.local?" is-local":""}`,children:S.fn.replace(/^create|Plugin$/g,"")},S.fn))}),d.jsx("ul",{className:"demo-why-list",children:t.plugs.map(S=>d.jsxs("li",{children:[d.jsx("code",{children:S.fn}),d.jsx("span",{children:S.why})]},S.fn))}),t.note?d.jsxs("p",{className:"demo-note",children:["⚠ ",t.note]}):null,d.jsx(qp,{lines:a,empty:t.plugs.length>0?"还没触发 —— 拖上面的控件，或滚动 / 点卡片":"这一页没有事件类行为，日志留白"})]})]}),d.jsxs("div",{className:"demo-code",children:[d.jsxs("div",{className:"demo-switch",role:"tablist",children:[d.jsx("button",{type:"button",role:"tab","aria-selected":p==="minimal",className:p==="minimal"?"is-active":"",onClick:()=>c("minimal"),children:"最小装配"}),d.jsx("button",{type:"button",role:"tab","aria-selected":p==="full",className:p==="full"?"is-active":"",onClick:()=>c("full"),children:"完整源码"})]}),d.jsx(IC,{code:p==="minimal"?x:i,title:p==="minimal"?`${t.slug}.minimal.tsx`:o,collapseAfter:p==="minimal"?0:26,maxHeight:420},p)]}),d.jsx(zC,{source:i,plugins:ys})]})}const x_=y.lazy(()=>ya(()=>import("./HomePage-CDAEwwbJ.js"),__vite__mapDeps([0,1]),import.meta.url).then(e=>({default:e.HomePage}))),w_=y.lazy(()=>ya(()=>import("./PluginsPage-CmIVm1fX.js"),[],import.meta.url).then(e=>({default:e.PluginsPage}))),S_=y.lazy(()=>ya(()=>import("./ScenariosPage-CCZeEPZn.js"),__vite__mapDeps([2,1]),import.meta.url).then(e=>({default:e.ScenariosPage}))),b_={pkg:"vane-waterfall",brand:"V",subtitle:"排版台 / plugin index",nav:[{to:"/",label:"总览",hint:"overview"},{to:"/plugins",label:"插件工坊",hint:`${ys.length} plugins`},{to:"/scenarios",label:"场景示例",hint:"13 plates"}],routes:[{path:"/",element:d.jsx(x_,{})},{path:"/plugins",element:d.jsx(w_,{})},{path:"/scenarios",element:d.jsx(S_,{})}],crumb:e=>e.startsWith("/plugins")?"workshop · 插件工坊":e.startsWith("/scenarios")?"plates · 场景示例":"index · 总览",demos:{label:"逐项示例",groups:_C.map(e=>({key:e,label:hs[e].label})),entries:gs,detail:(e,n)=>d.jsx(v_,{entry:e,order:n})},footer:[`${ys.length} PLUGINS · 13 PLATES`,`${gs.length} DEMOS · D1-A / D2-A`]};function k_(){return d.jsx(Wy,{config:b_})}Ep(document.getElementById("root")).render(d.jsx(k_,{}));export{Gm as A,cm as B,IC as C,gs as D,wa as E,yv as F,vc as G,Am as H,Nm as I,ac as J,Em as K,fs as L,pm as M,Rm as N,ys as P,gv as T,oc as W,C_ as a,om as b,em as c,va as d,R_ as e,T_ as f,__ as g,fm as h,Pm as i,d as j,Om as k,am as l,Yp as m,_m as n,ym as o,xm as p,bm as q,y as r,tm as s,Hm as t,lm as u,Jp as v,mv as w,Bm as x,Mm as y,xa as z};
