const __vite__mapDeps=(i,m=__vite__mapDeps,d=(m.f||(m.f=["./HomePage-7o-Do6Ka.js","./catalog-CtslNy_o.js","./ScenariosPage-Dk4a22_e.js"])))=>i.map(i=>d[i]);
var Zd=Object.defineProperty;var ef=(e,t,n)=>t in e?Zd(e,t,{enumerable:!0,configurable:!0,writable:!0,value:n}):e[t]=n;var Is=(e,t,n)=>ef(e,typeof t!="symbol"?t+"":t,n);function tf(e,t){for(var n=0;n<t.length;n++){const r=t[n];if(typeof r!="string"&&!Array.isArray(r)){for(const o in r)if(o!=="default"&&!(o in e)){const i=Object.getOwnPropertyDescriptor(r,o);i&&Object.defineProperty(e,o,i.get?i:{enumerable:!0,get:()=>r[o]})}}}return Object.freeze(Object.defineProperty(e,Symbol.toStringTag,{value:"Module"}))}(function(){const t=document.createElement("link").relList;if(t&&t.supports&&t.supports("modulepreload"))return;for(const o of document.querySelectorAll('link[rel="modulepreload"]'))r(o);new MutationObserver(o=>{for(const i of o)if(i.type==="childList")for(const l of i.addedNodes)l.tagName==="LINK"&&l.rel==="modulepreload"&&r(l)}).observe(document,{childList:!0,subtree:!0});function n(o){const i={};return o.integrity&&(i.integrity=o.integrity),o.referrerPolicy&&(i.referrerPolicy=o.referrerPolicy),o.crossOrigin==="use-credentials"?i.credentials="include":o.crossOrigin==="anonymous"?i.credentials="omit":i.credentials="same-origin",i}function r(o){if(o.ep)return;o.ep=!0;const i=n(o);fetch(o.href,i)}})();function nf(e){return e&&e.__esModule&&Object.prototype.hasOwnProperty.call(e,"default")?e.default:e}var pu={exports:{}},jo={},gu={exports:{}},L={};/**
 * @license React
 * react.production.min.js
 *
 * Copyright (c) Facebook, Inc. and its affiliates.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */var yr=Symbol.for("react.element"),rf=Symbol.for("react.portal"),of=Symbol.for("react.fragment"),lf=Symbol.for("react.strict_mode"),sf=Symbol.for("react.profiler"),af=Symbol.for("react.provider"),uf=Symbol.for("react.context"),cf=Symbol.for("react.forward_ref"),df=Symbol.for("react.suspense"),ff=Symbol.for("react.memo"),pf=Symbol.for("react.lazy"),As=Symbol.iterator;function gf(e){return e===null||typeof e!="object"?null:(e=As&&e[As]||e["@@iterator"],typeof e=="function"?e:null)}var mu={isMounted:function(){return!1},enqueueForceUpdate:function(){},enqueueReplaceState:function(){},enqueueSetState:function(){}},hu=Object.assign,yu={};function _n(e,t,n){this.props=e,this.context=t,this.refs=yu,this.updater=n||mu}_n.prototype.isReactComponent={};_n.prototype.setState=function(e,t){if(typeof e!="object"&&typeof e!="function"&&e!=null)throw Error("setState(...): takes an object of state variables to update or a function which returns an object of state variables.");this.updater.enqueueSetState(this,e,t,"setState")};_n.prototype.forceUpdate=function(e){this.updater.enqueueForceUpdate(this,e,"forceUpdate")};function vu(){}vu.prototype=_n.prototype;function Ll(e,t,n){this.props=e,this.context=t,this.refs=yu,this.updater=n||mu}var Ol=Ll.prototype=new vu;Ol.constructor=Ll;hu(Ol,_n.prototype);Ol.isPureReactComponent=!0;var Ds=Array.isArray,Su=Object.prototype.hasOwnProperty,Ml={current:null},ku={key:!0,ref:!0,__self:!0,__source:!0};function xu(e,t,n){var r,o={},i=null,l=null;if(t!=null)for(r in t.ref!==void 0&&(l=t.ref),t.key!==void 0&&(i=""+t.key),t)Su.call(t,r)&&!ku.hasOwnProperty(r)&&(o[r]=t[r]);var s=arguments.length-2;if(s===1)o.children=n;else if(1<s){for(var a=Array(s),u=0;u<s;u++)a[u]=arguments[u+2];o.children=a}if(e&&e.defaultProps)for(r in s=e.defaultProps,s)o[r]===void 0&&(o[r]=s[r]);return{$$typeof:yr,type:e,key:i,ref:l,props:o,_owner:Ml.current}}function mf(e,t){return{$$typeof:yr,type:e.type,key:t,ref:e.ref,props:e.props,_owner:e._owner}}function Il(e){return typeof e=="object"&&e!==null&&e.$$typeof===yr}function hf(e){var t={"=":"=0",":":"=2"};return"$"+e.replace(/[=:]/g,function(n){return t[n]})}var zs=/\/+/g;function ni(e,t){return typeof e=="object"&&e!==null&&e.key!=null?hf(""+e.key):t.toString(36)}function Wr(e,t,n,r,o){var i=typeof e;(i==="undefined"||i==="boolean")&&(e=null);var l=!1;if(e===null)l=!0;else switch(i){case"string":case"number":l=!0;break;case"object":switch(e.$$typeof){case yr:case rf:l=!0}}if(l)return l=e,o=o(l),e=r===""?"."+ni(l,0):r,Ds(o)?(n="",e!=null&&(n=e.replace(zs,"$&/")+"/"),Wr(o,t,n,"",function(u){return u})):o!=null&&(Il(o)&&(o=mf(o,n+(!o.key||l&&l.key===o.key?"":(""+o.key).replace(zs,"$&/")+"/")+e)),t.push(o)),1;if(l=0,r=r===""?".":r+":",Ds(e))for(var s=0;s<e.length;s++){i=e[s];var a=r+ni(i,s);l+=Wr(i,t,n,a,o)}else if(a=gf(e),typeof a=="function")for(e=a.call(e),s=0;!(i=e.next()).done;)i=i.value,a=r+ni(i,s++),l+=Wr(i,t,n,a,o);else if(i==="object")throw t=String(e),Error("Objects are not valid as a React child (found: "+(t==="[object Object]"?"object with keys {"+Object.keys(e).join(", ")+"}":t)+"). If you meant to render a collection of children, use an array instead.");return l}function Rr(e,t,n){if(e==null)return e;var r=[],o=0;return Wr(e,r,"","",function(i){return t.call(n,i,o++)}),r}function yf(e){if(e._status===-1){var t=e._result;t=t(),t.then(function(n){(e._status===0||e._status===-1)&&(e._status=1,e._result=n)},function(n){(e._status===0||e._status===-1)&&(e._status=2,e._result=n)}),e._status===-1&&(e._status=0,e._result=t)}if(e._status===1)return e._result.default;throw e._result}var me={current:null},Kr={transition:null},vf={ReactCurrentDispatcher:me,ReactCurrentBatchConfig:Kr,ReactCurrentOwner:Ml};function wu(){throw Error("act(...) is not supported in production builds of React.")}L.Children={map:Rr,forEach:function(e,t,n){Rr(e,function(){t.apply(this,arguments)},n)},count:function(e){var t=0;return Rr(e,function(){t++}),t},toArray:function(e){return Rr(e,function(t){return t})||[]},only:function(e){if(!Il(e))throw Error("React.Children.only expected to receive a single React element child.");return e}};L.Component=_n;L.Fragment=of;L.Profiler=sf;L.PureComponent=Ll;L.StrictMode=lf;L.Suspense=df;L.__SECRET_INTERNALS_DO_NOT_USE_OR_YOU_WILL_BE_FIRED=vf;L.act=wu;L.cloneElement=function(e,t,n){if(e==null)throw Error("React.cloneElement(...): The argument must be a React element, but you passed "+e+".");var r=hu({},e.props),o=e.key,i=e.ref,l=e._owner;if(t!=null){if(t.ref!==void 0&&(i=t.ref,l=Ml.current),t.key!==void 0&&(o=""+t.key),e.type&&e.type.defaultProps)var s=e.type.defaultProps;for(a in t)Su.call(t,a)&&!ku.hasOwnProperty(a)&&(r[a]=t[a]===void 0&&s!==void 0?s[a]:t[a])}var a=arguments.length-2;if(a===1)r.children=n;else if(1<a){s=Array(a);for(var u=0;u<a;u++)s[u]=arguments[u+2];r.children=s}return{$$typeof:yr,type:e.type,key:o,ref:i,props:r,_owner:l}};L.createContext=function(e){return e={$$typeof:uf,_currentValue:e,_currentValue2:e,_threadCount:0,Provider:null,Consumer:null,_defaultValue:null,_globalName:null},e.Provider={$$typeof:af,_context:e},e.Consumer=e};L.createElement=xu;L.createFactory=function(e){var t=xu.bind(null,e);return t.type=e,t};L.createRef=function(){return{current:null}};L.forwardRef=function(e){return{$$typeof:cf,render:e}};L.isValidElement=Il;L.lazy=function(e){return{$$typeof:pf,_payload:{_status:-1,_result:e},_init:yf}};L.memo=function(e,t){return{$$typeof:ff,type:e,compare:t===void 0?null:t}};L.startTransition=function(e){var t=Kr.transition;Kr.transition={};try{e()}finally{Kr.transition=t}};L.unstable_act=wu;L.useCallback=function(e,t){return me.current.useCallback(e,t)};L.useContext=function(e){return me.current.useContext(e)};L.useDebugValue=function(){};L.useDeferredValue=function(e){return me.current.useDeferredValue(e)};L.useEffect=function(e,t){return me.current.useEffect(e,t)};L.useId=function(){return me.current.useId()};L.useImperativeHandle=function(e,t,n){return me.current.useImperativeHandle(e,t,n)};L.useInsertionEffect=function(e,t){return me.current.useInsertionEffect(e,t)};L.useLayoutEffect=function(e,t){return me.current.useLayoutEffect(e,t)};L.useMemo=function(e,t){return me.current.useMemo(e,t)};L.useReducer=function(e,t,n){return me.current.useReducer(e,t,n)};L.useRef=function(e){return me.current.useRef(e)};L.useState=function(e){return me.current.useState(e)};L.useSyncExternalStore=function(e,t,n){return me.current.useSyncExternalStore(e,t,n)};L.useTransition=function(){return me.current.useTransition()};L.version="18.3.1";gu.exports=L;var v=gu.exports;const vr=nf(v),Sf=tf({__proto__:null,default:vr},[v]);/**
 * @license React
 * react-jsx-runtime.production.min.js
 *
 * Copyright (c) Facebook, Inc. and its affiliates.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */var kf=v,xf=Symbol.for("react.element"),wf=Symbol.for("react.fragment"),Pf=Object.prototype.hasOwnProperty,Cf=kf.__SECRET_INTERNALS_DO_NOT_USE_OR_YOU_WILL_BE_FIRED.ReactCurrentOwner,_f={key:!0,ref:!0,__self:!0,__source:!0};function Pu(e,t,n){var r,o={},i=null,l=null;n!==void 0&&(i=""+n),t.key!==void 0&&(i=""+t.key),t.ref!==void 0&&(l=t.ref);for(r in t)Pf.call(t,r)&&!_f.hasOwnProperty(r)&&(o[r]=t[r]);if(e&&e.defaultProps)for(r in t=e.defaultProps,t)o[r]===void 0&&(o[r]=t[r]);return{$$typeof:xf,type:e,key:i,ref:l,props:o,_owner:Cf.current}}jo.Fragment=wf;jo.jsx=Pu;jo.jsxs=Pu;pu.exports=jo;var f=pu.exports,$i={},Cu={exports:{}},Ee={},_u={exports:{}},Eu={};/**
 * @license React
 * scheduler.production.min.js
 *
 * Copyright (c) Facebook, Inc. and its affiliates.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */(function(e){function t(b,$){var N=b.length;b.push($);e:for(;0<N;){var q=N-1>>>1,te=b[q];if(0<o(te,$))b[q]=$,b[N]=te,N=q;else break e}}function n(b){return b.length===0?null:b[0]}function r(b){if(b.length===0)return null;var $=b[0],N=b.pop();if(N!==$){b[0]=N;e:for(var q=0,te=b.length,_r=te>>>1;q<_r;){var jt=2*(q+1)-1,ti=b[jt],$t=jt+1,Er=b[$t];if(0>o(ti,N))$t<te&&0>o(Er,ti)?(b[q]=Er,b[$t]=N,q=$t):(b[q]=ti,b[jt]=N,q=jt);else if($t<te&&0>o(Er,N))b[q]=Er,b[$t]=N,q=$t;else break e}}return $}function o(b,$){var N=b.sortIndex-$.sortIndex;return N!==0?N:b.id-$.id}if(typeof performance=="object"&&typeof performance.now=="function"){var i=performance;e.unstable_now=function(){return i.now()}}else{var l=Date,s=l.now();e.unstable_now=function(){return l.now()-s}}var a=[],u=[],p=1,c=null,g=3,y=!1,S=!1,w=!1,k=typeof setTimeout=="function"?setTimeout:null,m=typeof clearTimeout=="function"?clearTimeout:null,d=typeof setImmediate<"u"?setImmediate:null;typeof navigator<"u"&&navigator.scheduling!==void 0&&navigator.scheduling.isInputPending!==void 0&&navigator.scheduling.isInputPending.bind(navigator.scheduling);function h(b){for(var $=n(u);$!==null;){if($.callback===null)r(u);else if($.startTime<=b)r(u),$.sortIndex=$.expirationTime,t(a,$);else break;$=n(u)}}function x(b){if(w=!1,h(b),!S)if(n(a)!==null)S=!0,Ke(E);else{var $=n(u);$!==null&&ei(x,$.startTime-b)}}function E(b,$){S=!1,w&&(w=!1,m(R),R=-1),y=!0;var N=g;try{for(h($),c=n(a);c!==null&&(!(c.expirationTime>$)||b&&!ae());){var q=c.callback;if(typeof q=="function"){c.callback=null,g=c.priorityLevel;var te=q(c.expirationTime<=$);$=e.unstable_now(),typeof te=="function"?c.callback=te:c===n(a)&&r(a),h($)}else r(a);c=n(a)}if(c!==null)var _r=!0;else{var jt=n(u);jt!==null&&ei(x,jt.startTime-$),_r=!1}return _r}finally{c=null,g=N,y=!1}}var P=!1,C=null,R=-1,M=5,j=-1;function ae(){return!(e.unstable_now()-j<M)}function W(){if(C!==null){var b=e.unstable_now();j=b;var $=!0;try{$=C(!0,b)}finally{$?U():(P=!1,C=null)}}else P=!1}var U;if(typeof d=="function")U=function(){d(W)};else if(typeof MessageChannel<"u"){var Te=new MessageChannel,bt=Te.port2;Te.port1.onmessage=W,U=function(){bt.postMessage(null)}}else U=function(){k(W,0)};function Ke(b){C=b,P||(P=!0,U())}function ei(b,$){R=k(function(){b(e.unstable_now())},$)}e.unstable_IdlePriority=5,e.unstable_ImmediatePriority=1,e.unstable_LowPriority=4,e.unstable_NormalPriority=3,e.unstable_Profiling=null,e.unstable_UserBlockingPriority=2,e.unstable_cancelCallback=function(b){b.callback=null},e.unstable_continueExecution=function(){S||y||(S=!0,Ke(E))},e.unstable_forceFrameRate=function(b){0>b||125<b?console.error("forceFrameRate takes a positive int between 0 and 125, forcing frame rates higher than 125 fps is not supported"):M=0<b?Math.floor(1e3/b):5},e.unstable_getCurrentPriorityLevel=function(){return g},e.unstable_getFirstCallbackNode=function(){return n(a)},e.unstable_next=function(b){switch(g){case 1:case 2:case 3:var $=3;break;default:$=g}var N=g;g=$;try{return b()}finally{g=N}},e.unstable_pauseExecution=function(){},e.unstable_requestPaint=function(){},e.unstable_runWithPriority=function(b,$){switch(b){case 1:case 2:case 3:case 4:case 5:break;default:b=3}var N=g;g=b;try{return $()}finally{g=N}},e.unstable_scheduleCallback=function(b,$,N){var q=e.unstable_now();switch(typeof N=="object"&&N!==null?(N=N.delay,N=typeof N=="number"&&0<N?q+N:q):N=q,b){case 1:var te=-1;break;case 2:te=250;break;case 5:te=1073741823;break;case 4:te=1e4;break;default:te=5e3}return te=N+te,b={id:p++,callback:$,priorityLevel:b,startTime:N,expirationTime:te,sortIndex:-1},N>q?(b.sortIndex=N,t(u,b),n(a)===null&&b===n(u)&&(w?(m(R),R=-1):w=!0,ei(x,N-q))):(b.sortIndex=te,t(a,b),S||y||(S=!0,Ke(E))),b},e.unstable_shouldYield=ae,e.unstable_wrapCallback=function(b){var $=g;return function(){var N=g;g=$;try{return b.apply(this,arguments)}finally{g=N}}}})(Eu);_u.exports=Eu;var Ef=_u.exports;/**
 * @license React
 * react-dom.production.min.js
 *
 * Copyright (c) Facebook, Inc. and its affiliates.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */var Rf=v,_e=Ef;function _(e){for(var t="https://reactjs.org/docs/error-decoder.html?invariant="+e,n=1;n<arguments.length;n++)t+="&args[]="+encodeURIComponent(arguments[n]);return"Minified React error #"+e+"; visit "+t+" for the full message or use the non-minified dev environment for full errors and additional helpful warnings."}var Ru=new Set,Xn={};function Qt(e,t){vn(e,t),vn(e+"Capture",t)}function vn(e,t){for(Xn[e]=t,e=0;e<t.length;e++)Ru.add(t[e])}var et=!(typeof window>"u"||typeof window.document>"u"||typeof window.document.createElement>"u"),Ni=Object.prototype.hasOwnProperty,Tf=/^[:A-Z_a-z\u00C0-\u00D6\u00D8-\u00F6\u00F8-\u02FF\u0370-\u037D\u037F-\u1FFF\u200C-\u200D\u2070-\u218F\u2C00-\u2FEF\u3001-\uD7FF\uF900-\uFDCF\uFDF0-\uFFFD][:A-Z_a-z\u00C0-\u00D6\u00D8-\u00F6\u00F8-\u02FF\u0370-\u037D\u037F-\u1FFF\u200C-\u200D\u2070-\u218F\u2C00-\u2FEF\u3001-\uD7FF\uF900-\uFDCF\uFDF0-\uFFFD\-.0-9\u00B7\u0300-\u036F\u203F-\u2040]*$/,Us={},Bs={};function bf(e){return Ni.call(Bs,e)?!0:Ni.call(Us,e)?!1:Tf.test(e)?Bs[e]=!0:(Us[e]=!0,!1)}function jf(e,t,n,r){if(n!==null&&n.type===0)return!1;switch(typeof t){case"function":case"symbol":return!0;case"boolean":return r?!1:n!==null?!n.acceptsBooleans:(e=e.toLowerCase().slice(0,5),e!=="data-"&&e!=="aria-");default:return!1}}function $f(e,t,n,r){if(t===null||typeof t>"u"||jf(e,t,n,r))return!0;if(r)return!1;if(n!==null)switch(n.type){case 3:return!t;case 4:return t===!1;case 5:return isNaN(t);case 6:return isNaN(t)||1>t}return!1}function he(e,t,n,r,o,i,l){this.acceptsBooleans=t===2||t===3||t===4,this.attributeName=r,this.attributeNamespace=o,this.mustUseProperty=n,this.propertyName=e,this.type=t,this.sanitizeURL=i,this.removeEmptyString=l}var se={};"children dangerouslySetInnerHTML defaultValue defaultChecked innerHTML suppressContentEditableWarning suppressHydrationWarning style".split(" ").forEach(function(e){se[e]=new he(e,0,!1,e,null,!1,!1)});[["acceptCharset","accept-charset"],["className","class"],["htmlFor","for"],["httpEquiv","http-equiv"]].forEach(function(e){var t=e[0];se[t]=new he(t,1,!1,e[1],null,!1,!1)});["contentEditable","draggable","spellCheck","value"].forEach(function(e){se[e]=new he(e,2,!1,e.toLowerCase(),null,!1,!1)});["autoReverse","externalResourcesRequired","focusable","preserveAlpha"].forEach(function(e){se[e]=new he(e,2,!1,e,null,!1,!1)});"allowFullScreen async autoFocus autoPlay controls default defer disabled disablePictureInPicture disableRemotePlayback formNoValidate hidden loop noModule noValidate open playsInline readOnly required reversed scoped seamless itemScope".split(" ").forEach(function(e){se[e]=new he(e,3,!1,e.toLowerCase(),null,!1,!1)});["checked","multiple","muted","selected"].forEach(function(e){se[e]=new he(e,3,!0,e,null,!1,!1)});["capture","download"].forEach(function(e){se[e]=new he(e,4,!1,e,null,!1,!1)});["cols","rows","size","span"].forEach(function(e){se[e]=new he(e,6,!1,e,null,!1,!1)});["rowSpan","start"].forEach(function(e){se[e]=new he(e,5,!1,e.toLowerCase(),null,!1,!1)});var Al=/[\-:]([a-z])/g;function Dl(e){return e[1].toUpperCase()}"accent-height alignment-baseline arabic-form baseline-shift cap-height clip-path clip-rule color-interpolation color-interpolation-filters color-profile color-rendering dominant-baseline enable-background fill-opacity fill-rule flood-color flood-opacity font-family font-size font-size-adjust font-stretch font-style font-variant font-weight glyph-name glyph-orientation-horizontal glyph-orientation-vertical horiz-adv-x horiz-origin-x image-rendering letter-spacing lighting-color marker-end marker-mid marker-start overline-position overline-thickness paint-order panose-1 pointer-events rendering-intent shape-rendering stop-color stop-opacity strikethrough-position strikethrough-thickness stroke-dasharray stroke-dashoffset stroke-linecap stroke-linejoin stroke-miterlimit stroke-opacity stroke-width text-anchor text-decoration text-rendering underline-position underline-thickness unicode-bidi unicode-range units-per-em v-alphabetic v-hanging v-ideographic v-mathematical vector-effect vert-adv-y vert-origin-x vert-origin-y word-spacing writing-mode xmlns:xlink x-height".split(" ").forEach(function(e){var t=e.replace(Al,Dl);se[t]=new he(t,1,!1,e,null,!1,!1)});"xlink:actuate xlink:arcrole xlink:role xlink:show xlink:title xlink:type".split(" ").forEach(function(e){var t=e.replace(Al,Dl);se[t]=new he(t,1,!1,e,"http://www.w3.org/1999/xlink",!1,!1)});["xml:base","xml:lang","xml:space"].forEach(function(e){var t=e.replace(Al,Dl);se[t]=new he(t,1,!1,e,"http://www.w3.org/XML/1998/namespace",!1,!1)});["tabIndex","crossOrigin"].forEach(function(e){se[e]=new he(e,1,!1,e.toLowerCase(),null,!1,!1)});se.xlinkHref=new he("xlinkHref",1,!1,"xlink:href","http://www.w3.org/1999/xlink",!0,!1);["src","href","action","formAction"].forEach(function(e){se[e]=new he(e,1,!1,e.toLowerCase(),null,!0,!0)});function zl(e,t,n,r){var o=se.hasOwnProperty(t)?se[t]:null;(o!==null?o.type!==0:r||!(2<t.length)||t[0]!=="o"&&t[0]!=="O"||t[1]!=="n"&&t[1]!=="N")&&($f(t,n,o,r)&&(n=null),r||o===null?bf(t)&&(n===null?e.removeAttribute(t):e.setAttribute(t,""+n)):o.mustUseProperty?e[o.propertyName]=n===null?o.type===3?!1:"":n:(t=o.attributeName,r=o.attributeNamespace,n===null?e.removeAttribute(t):(o=o.type,n=o===3||o===4&&n===!0?"":""+n,r?e.setAttributeNS(r,t,n):e.setAttribute(t,n))))}var ot=Rf.__SECRET_INTERNALS_DO_NOT_USE_OR_YOU_WILL_BE_FIRED,Tr=Symbol.for("react.element"),Zt=Symbol.for("react.portal"),en=Symbol.for("react.fragment"),Ul=Symbol.for("react.strict_mode"),Li=Symbol.for("react.profiler"),Tu=Symbol.for("react.provider"),bu=Symbol.for("react.context"),Bl=Symbol.for("react.forward_ref"),Oi=Symbol.for("react.suspense"),Mi=Symbol.for("react.suspense_list"),Fl=Symbol.for("react.memo"),st=Symbol.for("react.lazy"),ju=Symbol.for("react.offscreen"),Fs=Symbol.iterator;function jn(e){return e===null||typeof e!="object"?null:(e=Fs&&e[Fs]||e["@@iterator"],typeof e=="function"?e:null)}var Q=Object.assign,ri;function Dn(e){if(ri===void 0)try{throw Error()}catch(n){var t=n.stack.trim().match(/\n( *(at )?)/);ri=t&&t[1]||""}return`
`+ri+e}var oi=!1;function ii(e,t){if(!e||oi)return"";oi=!0;var n=Error.prepareStackTrace;Error.prepareStackTrace=void 0;try{if(t)if(t=function(){throw Error()},Object.defineProperty(t.prototype,"props",{set:function(){throw Error()}}),typeof Reflect=="object"&&Reflect.construct){try{Reflect.construct(t,[])}catch(u){var r=u}Reflect.construct(e,[],t)}else{try{t.call()}catch(u){r=u}e.call(t.prototype)}else{try{throw Error()}catch(u){r=u}e()}}catch(u){if(u&&r&&typeof u.stack=="string"){for(var o=u.stack.split(`
`),i=r.stack.split(`
`),l=o.length-1,s=i.length-1;1<=l&&0<=s&&o[l]!==i[s];)s--;for(;1<=l&&0<=s;l--,s--)if(o[l]!==i[s]){if(l!==1||s!==1)do if(l--,s--,0>s||o[l]!==i[s]){var a=`
`+o[l].replace(" at new "," at ");return e.displayName&&a.includes("<anonymous>")&&(a=a.replace("<anonymous>",e.displayName)),a}while(1<=l&&0<=s);break}}}finally{oi=!1,Error.prepareStackTrace=n}return(e=e?e.displayName||e.name:"")?Dn(e):""}function Nf(e){switch(e.tag){case 5:return Dn(e.type);case 16:return Dn("Lazy");case 13:return Dn("Suspense");case 19:return Dn("SuspenseList");case 0:case 2:case 15:return e=ii(e.type,!1),e;case 11:return e=ii(e.type.render,!1),e;case 1:return e=ii(e.type,!0),e;default:return""}}function Ii(e){if(e==null)return null;if(typeof e=="function")return e.displayName||e.name||null;if(typeof e=="string")return e;switch(e){case en:return"Fragment";case Zt:return"Portal";case Li:return"Profiler";case Ul:return"StrictMode";case Oi:return"Suspense";case Mi:return"SuspenseList"}if(typeof e=="object")switch(e.$$typeof){case bu:return(e.displayName||"Context")+".Consumer";case Tu:return(e._context.displayName||"Context")+".Provider";case Bl:var t=e.render;return e=e.displayName,e||(e=t.displayName||t.name||"",e=e!==""?"ForwardRef("+e+")":"ForwardRef"),e;case Fl:return t=e.displayName||null,t!==null?t:Ii(e.type)||"Memo";case st:t=e._payload,e=e._init;try{return Ii(e(t))}catch{}}return null}function Lf(e){var t=e.type;switch(e.tag){case 24:return"Cache";case 9:return(t.displayName||"Context")+".Consumer";case 10:return(t._context.displayName||"Context")+".Provider";case 18:return"DehydratedFragment";case 11:return e=t.render,e=e.displayName||e.name||"",t.displayName||(e!==""?"ForwardRef("+e+")":"ForwardRef");case 7:return"Fragment";case 5:return t;case 4:return"Portal";case 3:return"Root";case 6:return"Text";case 16:return Ii(t);case 8:return t===Ul?"StrictMode":"Mode";case 22:return"Offscreen";case 12:return"Profiler";case 21:return"Scope";case 13:return"Suspense";case 19:return"SuspenseList";case 25:return"TracingMarker";case 1:case 0:case 17:case 2:case 14:case 15:if(typeof t=="function")return t.displayName||t.name||null;if(typeof t=="string")return t}return null}function Pt(e){switch(typeof e){case"boolean":case"number":case"string":case"undefined":return e;case"object":return e;default:return""}}function $u(e){var t=e.type;return(e=e.nodeName)&&e.toLowerCase()==="input"&&(t==="checkbox"||t==="radio")}function Of(e){var t=$u(e)?"checked":"value",n=Object.getOwnPropertyDescriptor(e.constructor.prototype,t),r=""+e[t];if(!e.hasOwnProperty(t)&&typeof n<"u"&&typeof n.get=="function"&&typeof n.set=="function"){var o=n.get,i=n.set;return Object.defineProperty(e,t,{configurable:!0,get:function(){return o.call(this)},set:function(l){r=""+l,i.call(this,l)}}),Object.defineProperty(e,t,{enumerable:n.enumerable}),{getValue:function(){return r},setValue:function(l){r=""+l},stopTracking:function(){e._valueTracker=null,delete e[t]}}}}function br(e){e._valueTracker||(e._valueTracker=Of(e))}function Nu(e){if(!e)return!1;var t=e._valueTracker;if(!t)return!0;var n=t.getValue(),r="";return e&&(r=$u(e)?e.checked?"true":"false":e.value),e=r,e!==n?(t.setValue(e),!0):!1}function oo(e){if(e=e||(typeof document<"u"?document:void 0),typeof e>"u")return null;try{return e.activeElement||e.body}catch{return e.body}}function Ai(e,t){var n=t.checked;return Q({},t,{defaultChecked:void 0,defaultValue:void 0,value:void 0,checked:n??e._wrapperState.initialChecked})}function Vs(e,t){var n=t.defaultValue==null?"":t.defaultValue,r=t.checked!=null?t.checked:t.defaultChecked;n=Pt(t.value!=null?t.value:n),e._wrapperState={initialChecked:r,initialValue:n,controlled:t.type==="checkbox"||t.type==="radio"?t.checked!=null:t.value!=null}}function Lu(e,t){t=t.checked,t!=null&&zl(e,"checked",t,!1)}function Di(e,t){Lu(e,t);var n=Pt(t.value),r=t.type;if(n!=null)r==="number"?(n===0&&e.value===""||e.value!=n)&&(e.value=""+n):e.value!==""+n&&(e.value=""+n);else if(r==="submit"||r==="reset"){e.removeAttribute("value");return}t.hasOwnProperty("value")?zi(e,t.type,n):t.hasOwnProperty("defaultValue")&&zi(e,t.type,Pt(t.defaultValue)),t.checked==null&&t.defaultChecked!=null&&(e.defaultChecked=!!t.defaultChecked)}function Hs(e,t,n){if(t.hasOwnProperty("value")||t.hasOwnProperty("defaultValue")){var r=t.type;if(!(r!=="submit"&&r!=="reset"||t.value!==void 0&&t.value!==null))return;t=""+e._wrapperState.initialValue,n||t===e.value||(e.value=t),e.defaultValue=t}n=e.name,n!==""&&(e.name=""),e.defaultChecked=!!e._wrapperState.initialChecked,n!==""&&(e.name=n)}function zi(e,t,n){(t!=="number"||oo(e.ownerDocument)!==e)&&(n==null?e.defaultValue=""+e._wrapperState.initialValue:e.defaultValue!==""+n&&(e.defaultValue=""+n))}var zn=Array.isArray;function fn(e,t,n,r){if(e=e.options,t){t={};for(var o=0;o<n.length;o++)t["$"+n[o]]=!0;for(n=0;n<e.length;n++)o=t.hasOwnProperty("$"+e[n].value),e[n].selected!==o&&(e[n].selected=o),o&&r&&(e[n].defaultSelected=!0)}else{for(n=""+Pt(n),t=null,o=0;o<e.length;o++){if(e[o].value===n){e[o].selected=!0,r&&(e[o].defaultSelected=!0);return}t!==null||e[o].disabled||(t=e[o])}t!==null&&(t.selected=!0)}}function Ui(e,t){if(t.dangerouslySetInnerHTML!=null)throw Error(_(91));return Q({},t,{value:void 0,defaultValue:void 0,children:""+e._wrapperState.initialValue})}function Qs(e,t){var n=t.value;if(n==null){if(n=t.children,t=t.defaultValue,n!=null){if(t!=null)throw Error(_(92));if(zn(n)){if(1<n.length)throw Error(_(93));n=n[0]}t=n}t==null&&(t=""),n=t}e._wrapperState={initialValue:Pt(n)}}function Ou(e,t){var n=Pt(t.value),r=Pt(t.defaultValue);n!=null&&(n=""+n,n!==e.value&&(e.value=n),t.defaultValue==null&&e.defaultValue!==n&&(e.defaultValue=n)),r!=null&&(e.defaultValue=""+r)}function Ws(e){var t=e.textContent;t===e._wrapperState.initialValue&&t!==""&&t!==null&&(e.value=t)}function Mu(e){switch(e){case"svg":return"http://www.w3.org/2000/svg";case"math":return"http://www.w3.org/1998/Math/MathML";default:return"http://www.w3.org/1999/xhtml"}}function Bi(e,t){return e==null||e==="http://www.w3.org/1999/xhtml"?Mu(t):e==="http://www.w3.org/2000/svg"&&t==="foreignObject"?"http://www.w3.org/1999/xhtml":e}var jr,Iu=function(e){return typeof MSApp<"u"&&MSApp.execUnsafeLocalFunction?function(t,n,r,o){MSApp.execUnsafeLocalFunction(function(){return e(t,n,r,o)})}:e}(function(e,t){if(e.namespaceURI!=="http://www.w3.org/2000/svg"||"innerHTML"in e)e.innerHTML=t;else{for(jr=jr||document.createElement("div"),jr.innerHTML="<svg>"+t.valueOf().toString()+"</svg>",t=jr.firstChild;e.firstChild;)e.removeChild(e.firstChild);for(;t.firstChild;)e.appendChild(t.firstChild)}});function Zn(e,t){if(t){var n=e.firstChild;if(n&&n===e.lastChild&&n.nodeType===3){n.nodeValue=t;return}}e.textContent=t}var Vn={animationIterationCount:!0,aspectRatio:!0,borderImageOutset:!0,borderImageSlice:!0,borderImageWidth:!0,boxFlex:!0,boxFlexGroup:!0,boxOrdinalGroup:!0,columnCount:!0,columns:!0,flex:!0,flexGrow:!0,flexPositive:!0,flexShrink:!0,flexNegative:!0,flexOrder:!0,gridArea:!0,gridRow:!0,gridRowEnd:!0,gridRowSpan:!0,gridRowStart:!0,gridColumn:!0,gridColumnEnd:!0,gridColumnSpan:!0,gridColumnStart:!0,fontWeight:!0,lineClamp:!0,lineHeight:!0,opacity:!0,order:!0,orphans:!0,tabSize:!0,widows:!0,zIndex:!0,zoom:!0,fillOpacity:!0,floodOpacity:!0,stopOpacity:!0,strokeDasharray:!0,strokeDashoffset:!0,strokeMiterlimit:!0,strokeOpacity:!0,strokeWidth:!0},Mf=["Webkit","ms","Moz","O"];Object.keys(Vn).forEach(function(e){Mf.forEach(function(t){t=t+e.charAt(0).toUpperCase()+e.substring(1),Vn[t]=Vn[e]})});function Au(e,t,n){return t==null||typeof t=="boolean"||t===""?"":n||typeof t!="number"||t===0||Vn.hasOwnProperty(e)&&Vn[e]?(""+t).trim():t+"px"}function Du(e,t){e=e.style;for(var n in t)if(t.hasOwnProperty(n)){var r=n.indexOf("--")===0,o=Au(n,t[n],r);n==="float"&&(n="cssFloat"),r?e.setProperty(n,o):e[n]=o}}var If=Q({menuitem:!0},{area:!0,base:!0,br:!0,col:!0,embed:!0,hr:!0,img:!0,input:!0,keygen:!0,link:!0,meta:!0,param:!0,source:!0,track:!0,wbr:!0});function Fi(e,t){if(t){if(If[e]&&(t.children!=null||t.dangerouslySetInnerHTML!=null))throw Error(_(137,e));if(t.dangerouslySetInnerHTML!=null){if(t.children!=null)throw Error(_(60));if(typeof t.dangerouslySetInnerHTML!="object"||!("__html"in t.dangerouslySetInnerHTML))throw Error(_(61))}if(t.style!=null&&typeof t.style!="object")throw Error(_(62))}}function Vi(e,t){if(e.indexOf("-")===-1)return typeof t.is=="string";switch(e){case"annotation-xml":case"color-profile":case"font-face":case"font-face-src":case"font-face-uri":case"font-face-format":case"font-face-name":case"missing-glyph":return!1;default:return!0}}var Hi=null;function Vl(e){return e=e.target||e.srcElement||window,e.correspondingUseElement&&(e=e.correspondingUseElement),e.nodeType===3?e.parentNode:e}var Qi=null,pn=null,gn=null;function Ks(e){if(e=xr(e)){if(typeof Qi!="function")throw Error(_(280));var t=e.stateNode;t&&(t=Mo(t),Qi(e.stateNode,e.type,t))}}function zu(e){pn?gn?gn.push(e):gn=[e]:pn=e}function Uu(){if(pn){var e=pn,t=gn;if(gn=pn=null,Ks(e),t)for(e=0;e<t.length;e++)Ks(t[e])}}function Bu(e,t){return e(t)}function Fu(){}var li=!1;function Vu(e,t,n){if(li)return e(t,n);li=!0;try{return Bu(e,t,n)}finally{li=!1,(pn!==null||gn!==null)&&(Fu(),Uu())}}function er(e,t){var n=e.stateNode;if(n===null)return null;var r=Mo(n);if(r===null)return null;n=r[t];e:switch(t){case"onClick":case"onClickCapture":case"onDoubleClick":case"onDoubleClickCapture":case"onMouseDown":case"onMouseDownCapture":case"onMouseMove":case"onMouseMoveCapture":case"onMouseUp":case"onMouseUpCapture":case"onMouseEnter":(r=!r.disabled)||(e=e.type,r=!(e==="button"||e==="input"||e==="select"||e==="textarea")),e=!r;break e;default:e=!1}if(e)return null;if(n&&typeof n!="function")throw Error(_(231,t,typeof n));return n}var Wi=!1;if(et)try{var $n={};Object.defineProperty($n,"passive",{get:function(){Wi=!0}}),window.addEventListener("test",$n,$n),window.removeEventListener("test",$n,$n)}catch{Wi=!1}function Af(e,t,n,r,o,i,l,s,a){var u=Array.prototype.slice.call(arguments,3);try{t.apply(n,u)}catch(p){this.onError(p)}}var Hn=!1,io=null,lo=!1,Ki=null,Df={onError:function(e){Hn=!0,io=e}};function zf(e,t,n,r,o,i,l,s,a){Hn=!1,io=null,Af.apply(Df,arguments)}function Uf(e,t,n,r,o,i,l,s,a){if(zf.apply(this,arguments),Hn){if(Hn){var u=io;Hn=!1,io=null}else throw Error(_(198));lo||(lo=!0,Ki=u)}}function Wt(e){var t=e,n=e;if(e.alternate)for(;t.return;)t=t.return;else{e=t;do t=e,t.flags&4098&&(n=t.return),e=t.return;while(e)}return t.tag===3?n:null}function Hu(e){if(e.tag===13){var t=e.memoizedState;if(t===null&&(e=e.alternate,e!==null&&(t=e.memoizedState)),t!==null)return t.dehydrated}return null}function qs(e){if(Wt(e)!==e)throw Error(_(188))}function Bf(e){var t=e.alternate;if(!t){if(t=Wt(e),t===null)throw Error(_(188));return t!==e?null:e}for(var n=e,r=t;;){var o=n.return;if(o===null)break;var i=o.alternate;if(i===null){if(r=o.return,r!==null){n=r;continue}break}if(o.child===i.child){for(i=o.child;i;){if(i===n)return qs(o),e;if(i===r)return qs(o),t;i=i.sibling}throw Error(_(188))}if(n.return!==r.return)n=o,r=i;else{for(var l=!1,s=o.child;s;){if(s===n){l=!0,n=o,r=i;break}if(s===r){l=!0,r=o,n=i;break}s=s.sibling}if(!l){for(s=i.child;s;){if(s===n){l=!0,n=i,r=o;break}if(s===r){l=!0,r=i,n=o;break}s=s.sibling}if(!l)throw Error(_(189))}}if(n.alternate!==r)throw Error(_(190))}if(n.tag!==3)throw Error(_(188));return n.stateNode.current===n?e:t}function Qu(e){return e=Bf(e),e!==null?Wu(e):null}function Wu(e){if(e.tag===5||e.tag===6)return e;for(e=e.child;e!==null;){var t=Wu(e);if(t!==null)return t;e=e.sibling}return null}var Ku=_e.unstable_scheduleCallback,Gs=_e.unstable_cancelCallback,Ff=_e.unstable_shouldYield,Vf=_e.unstable_requestPaint,G=_e.unstable_now,Hf=_e.unstable_getCurrentPriorityLevel,Hl=_e.unstable_ImmediatePriority,qu=_e.unstable_UserBlockingPriority,so=_e.unstable_NormalPriority,Qf=_e.unstable_LowPriority,Gu=_e.unstable_IdlePriority,$o=null,Qe=null;function Wf(e){if(Qe&&typeof Qe.onCommitFiberRoot=="function")try{Qe.onCommitFiberRoot($o,e,void 0,(e.current.flags&128)===128)}catch{}}var ze=Math.clz32?Math.clz32:Gf,Kf=Math.log,qf=Math.LN2;function Gf(e){return e>>>=0,e===0?32:31-(Kf(e)/qf|0)|0}var $r=64,Nr=4194304;function Un(e){switch(e&-e){case 1:return 1;case 2:return 2;case 4:return 4;case 8:return 8;case 16:return 16;case 32:return 32;case 64:case 128:case 256:case 512:case 1024:case 2048:case 4096:case 8192:case 16384:case 32768:case 65536:case 131072:case 262144:case 524288:case 1048576:case 2097152:return e&4194240;case 4194304:case 8388608:case 16777216:case 33554432:case 67108864:return e&130023424;case 134217728:return 134217728;case 268435456:return 268435456;case 536870912:return 536870912;case 1073741824:return 1073741824;default:return e}}function ao(e,t){var n=e.pendingLanes;if(n===0)return 0;var r=0,o=e.suspendedLanes,i=e.pingedLanes,l=n&268435455;if(l!==0){var s=l&~o;s!==0?r=Un(s):(i&=l,i!==0&&(r=Un(i)))}else l=n&~o,l!==0?r=Un(l):i!==0&&(r=Un(i));if(r===0)return 0;if(t!==0&&t!==r&&!(t&o)&&(o=r&-r,i=t&-t,o>=i||o===16&&(i&4194240)!==0))return t;if(r&4&&(r|=n&16),t=e.entangledLanes,t!==0)for(e=e.entanglements,t&=r;0<t;)n=31-ze(t),o=1<<n,r|=e[n],t&=~o;return r}function Jf(e,t){switch(e){case 1:case 2:case 4:return t+250;case 8:case 16:case 32:case 64:case 128:case 256:case 512:case 1024:case 2048:case 4096:case 8192:case 16384:case 32768:case 65536:case 131072:case 262144:case 524288:case 1048576:case 2097152:return t+5e3;case 4194304:case 8388608:case 16777216:case 33554432:case 67108864:return-1;case 134217728:case 268435456:case 536870912:case 1073741824:return-1;default:return-1}}function Yf(e,t){for(var n=e.suspendedLanes,r=e.pingedLanes,o=e.expirationTimes,i=e.pendingLanes;0<i;){var l=31-ze(i),s=1<<l,a=o[l];a===-1?(!(s&n)||s&r)&&(o[l]=Jf(s,t)):a<=t&&(e.expiredLanes|=s),i&=~s}}function qi(e){return e=e.pendingLanes&-1073741825,e!==0?e:e&1073741824?1073741824:0}function Ju(){var e=$r;return $r<<=1,!($r&4194240)&&($r=64),e}function si(e){for(var t=[],n=0;31>n;n++)t.push(e);return t}function Sr(e,t,n){e.pendingLanes|=t,t!==536870912&&(e.suspendedLanes=0,e.pingedLanes=0),e=e.eventTimes,t=31-ze(t),e[t]=n}function Xf(e,t){var n=e.pendingLanes&~t;e.pendingLanes=t,e.suspendedLanes=0,e.pingedLanes=0,e.expiredLanes&=t,e.mutableReadLanes&=t,e.entangledLanes&=t,t=e.entanglements;var r=e.eventTimes;for(e=e.expirationTimes;0<n;){var o=31-ze(n),i=1<<o;t[o]=0,r[o]=-1,e[o]=-1,n&=~i}}function Ql(e,t){var n=e.entangledLanes|=t;for(e=e.entanglements;n;){var r=31-ze(n),o=1<<r;o&t|e[r]&t&&(e[r]|=t),n&=~o}}var I=0;function Yu(e){return e&=-e,1<e?4<e?e&268435455?16:536870912:4:1}var Xu,Wl,Zu,ec,tc,Gi=!1,Lr=[],gt=null,mt=null,ht=null,tr=new Map,nr=new Map,ut=[],Zf="mousedown mouseup touchcancel touchend touchstart auxclick dblclick pointercancel pointerdown pointerup dragend dragstart drop compositionend compositionstart keydown keypress keyup input textInput copy cut paste click change contextmenu reset submit".split(" ");function Js(e,t){switch(e){case"focusin":case"focusout":gt=null;break;case"dragenter":case"dragleave":mt=null;break;case"mouseover":case"mouseout":ht=null;break;case"pointerover":case"pointerout":tr.delete(t.pointerId);break;case"gotpointercapture":case"lostpointercapture":nr.delete(t.pointerId)}}function Nn(e,t,n,r,o,i){return e===null||e.nativeEvent!==i?(e={blockedOn:t,domEventName:n,eventSystemFlags:r,nativeEvent:i,targetContainers:[o]},t!==null&&(t=xr(t),t!==null&&Wl(t)),e):(e.eventSystemFlags|=r,t=e.targetContainers,o!==null&&t.indexOf(o)===-1&&t.push(o),e)}function ep(e,t,n,r,o){switch(t){case"focusin":return gt=Nn(gt,e,t,n,r,o),!0;case"dragenter":return mt=Nn(mt,e,t,n,r,o),!0;case"mouseover":return ht=Nn(ht,e,t,n,r,o),!0;case"pointerover":var i=o.pointerId;return tr.set(i,Nn(tr.get(i)||null,e,t,n,r,o)),!0;case"gotpointercapture":return i=o.pointerId,nr.set(i,Nn(nr.get(i)||null,e,t,n,r,o)),!0}return!1}function nc(e){var t=Mt(e.target);if(t!==null){var n=Wt(t);if(n!==null){if(t=n.tag,t===13){if(t=Hu(n),t!==null){e.blockedOn=t,tc(e.priority,function(){Zu(n)});return}}else if(t===3&&n.stateNode.current.memoizedState.isDehydrated){e.blockedOn=n.tag===3?n.stateNode.containerInfo:null;return}}}e.blockedOn=null}function qr(e){if(e.blockedOn!==null)return!1;for(var t=e.targetContainers;0<t.length;){var n=Ji(e.domEventName,e.eventSystemFlags,t[0],e.nativeEvent);if(n===null){n=e.nativeEvent;var r=new n.constructor(n.type,n);Hi=r,n.target.dispatchEvent(r),Hi=null}else return t=xr(n),t!==null&&Wl(t),e.blockedOn=n,!1;t.shift()}return!0}function Ys(e,t,n){qr(e)&&n.delete(t)}function tp(){Gi=!1,gt!==null&&qr(gt)&&(gt=null),mt!==null&&qr(mt)&&(mt=null),ht!==null&&qr(ht)&&(ht=null),tr.forEach(Ys),nr.forEach(Ys)}function Ln(e,t){e.blockedOn===t&&(e.blockedOn=null,Gi||(Gi=!0,_e.unstable_scheduleCallback(_e.unstable_NormalPriority,tp)))}function rr(e){function t(o){return Ln(o,e)}if(0<Lr.length){Ln(Lr[0],e);for(var n=1;n<Lr.length;n++){var r=Lr[n];r.blockedOn===e&&(r.blockedOn=null)}}for(gt!==null&&Ln(gt,e),mt!==null&&Ln(mt,e),ht!==null&&Ln(ht,e),tr.forEach(t),nr.forEach(t),n=0;n<ut.length;n++)r=ut[n],r.blockedOn===e&&(r.blockedOn=null);for(;0<ut.length&&(n=ut[0],n.blockedOn===null);)nc(n),n.blockedOn===null&&ut.shift()}var mn=ot.ReactCurrentBatchConfig,uo=!0;function np(e,t,n,r){var o=I,i=mn.transition;mn.transition=null;try{I=1,Kl(e,t,n,r)}finally{I=o,mn.transition=i}}function rp(e,t,n,r){var o=I,i=mn.transition;mn.transition=null;try{I=4,Kl(e,t,n,r)}finally{I=o,mn.transition=i}}function Kl(e,t,n,r){if(uo){var o=Ji(e,t,n,r);if(o===null)yi(e,t,r,co,n),Js(e,r);else if(ep(o,e,t,n,r))r.stopPropagation();else if(Js(e,r),t&4&&-1<Zf.indexOf(e)){for(;o!==null;){var i=xr(o);if(i!==null&&Xu(i),i=Ji(e,t,n,r),i===null&&yi(e,t,r,co,n),i===o)break;o=i}o!==null&&r.stopPropagation()}else yi(e,t,r,null,n)}}var co=null;function Ji(e,t,n,r){if(co=null,e=Vl(r),e=Mt(e),e!==null)if(t=Wt(e),t===null)e=null;else if(n=t.tag,n===13){if(e=Hu(t),e!==null)return e;e=null}else if(n===3){if(t.stateNode.current.memoizedState.isDehydrated)return t.tag===3?t.stateNode.containerInfo:null;e=null}else t!==e&&(e=null);return co=e,null}function rc(e){switch(e){case"cancel":case"click":case"close":case"contextmenu":case"copy":case"cut":case"auxclick":case"dblclick":case"dragend":case"dragstart":case"drop":case"focusin":case"focusout":case"input":case"invalid":case"keydown":case"keypress":case"keyup":case"mousedown":case"mouseup":case"paste":case"pause":case"play":case"pointercancel":case"pointerdown":case"pointerup":case"ratechange":case"reset":case"resize":case"seeked":case"submit":case"touchcancel":case"touchend":case"touchstart":case"volumechange":case"change":case"selectionchange":case"textInput":case"compositionstart":case"compositionend":case"compositionupdate":case"beforeblur":case"afterblur":case"beforeinput":case"blur":case"fullscreenchange":case"focus":case"hashchange":case"popstate":case"select":case"selectstart":return 1;case"drag":case"dragenter":case"dragexit":case"dragleave":case"dragover":case"mousemove":case"mouseout":case"mouseover":case"pointermove":case"pointerout":case"pointerover":case"scroll":case"toggle":case"touchmove":case"wheel":case"mouseenter":case"mouseleave":case"pointerenter":case"pointerleave":return 4;case"message":switch(Hf()){case Hl:return 1;case qu:return 4;case so:case Qf:return 16;case Gu:return 536870912;default:return 16}default:return 16}}var dt=null,ql=null,Gr=null;function oc(){if(Gr)return Gr;var e,t=ql,n=t.length,r,o="value"in dt?dt.value:dt.textContent,i=o.length;for(e=0;e<n&&t[e]===o[e];e++);var l=n-e;for(r=1;r<=l&&t[n-r]===o[i-r];r++);return Gr=o.slice(e,1<r?1-r:void 0)}function Jr(e){var t=e.keyCode;return"charCode"in e?(e=e.charCode,e===0&&t===13&&(e=13)):e=t,e===10&&(e=13),32<=e||e===13?e:0}function Or(){return!0}function Xs(){return!1}function Re(e){function t(n,r,o,i,l){this._reactName=n,this._targetInst=o,this.type=r,this.nativeEvent=i,this.target=l,this.currentTarget=null;for(var s in e)e.hasOwnProperty(s)&&(n=e[s],this[s]=n?n(i):i[s]);return this.isDefaultPrevented=(i.defaultPrevented!=null?i.defaultPrevented:i.returnValue===!1)?Or:Xs,this.isPropagationStopped=Xs,this}return Q(t.prototype,{preventDefault:function(){this.defaultPrevented=!0;var n=this.nativeEvent;n&&(n.preventDefault?n.preventDefault():typeof n.returnValue!="unknown"&&(n.returnValue=!1),this.isDefaultPrevented=Or)},stopPropagation:function(){var n=this.nativeEvent;n&&(n.stopPropagation?n.stopPropagation():typeof n.cancelBubble!="unknown"&&(n.cancelBubble=!0),this.isPropagationStopped=Or)},persist:function(){},isPersistent:Or}),t}var En={eventPhase:0,bubbles:0,cancelable:0,timeStamp:function(e){return e.timeStamp||Date.now()},defaultPrevented:0,isTrusted:0},Gl=Re(En),kr=Q({},En,{view:0,detail:0}),op=Re(kr),ai,ui,On,No=Q({},kr,{screenX:0,screenY:0,clientX:0,clientY:0,pageX:0,pageY:0,ctrlKey:0,shiftKey:0,altKey:0,metaKey:0,getModifierState:Jl,button:0,buttons:0,relatedTarget:function(e){return e.relatedTarget===void 0?e.fromElement===e.srcElement?e.toElement:e.fromElement:e.relatedTarget},movementX:function(e){return"movementX"in e?e.movementX:(e!==On&&(On&&e.type==="mousemove"?(ai=e.screenX-On.screenX,ui=e.screenY-On.screenY):ui=ai=0,On=e),ai)},movementY:function(e){return"movementY"in e?e.movementY:ui}}),Zs=Re(No),ip=Q({},No,{dataTransfer:0}),lp=Re(ip),sp=Q({},kr,{relatedTarget:0}),ci=Re(sp),ap=Q({},En,{animationName:0,elapsedTime:0,pseudoElement:0}),up=Re(ap),cp=Q({},En,{clipboardData:function(e){return"clipboardData"in e?e.clipboardData:window.clipboardData}}),dp=Re(cp),fp=Q({},En,{data:0}),ea=Re(fp),pp={Esc:"Escape",Spacebar:" ",Left:"ArrowLeft",Up:"ArrowUp",Right:"ArrowRight",Down:"ArrowDown",Del:"Delete",Win:"OS",Menu:"ContextMenu",Apps:"ContextMenu",Scroll:"ScrollLock",MozPrintableKey:"Unidentified"},gp={8:"Backspace",9:"Tab",12:"Clear",13:"Enter",16:"Shift",17:"Control",18:"Alt",19:"Pause",20:"CapsLock",27:"Escape",32:" ",33:"PageUp",34:"PageDown",35:"End",36:"Home",37:"ArrowLeft",38:"ArrowUp",39:"ArrowRight",40:"ArrowDown",45:"Insert",46:"Delete",112:"F1",113:"F2",114:"F3",115:"F4",116:"F5",117:"F6",118:"F7",119:"F8",120:"F9",121:"F10",122:"F11",123:"F12",144:"NumLock",145:"ScrollLock",224:"Meta"},mp={Alt:"altKey",Control:"ctrlKey",Meta:"metaKey",Shift:"shiftKey"};function hp(e){var t=this.nativeEvent;return t.getModifierState?t.getModifierState(e):(e=mp[e])?!!t[e]:!1}function Jl(){return hp}var yp=Q({},kr,{key:function(e){if(e.key){var t=pp[e.key]||e.key;if(t!=="Unidentified")return t}return e.type==="keypress"?(e=Jr(e),e===13?"Enter":String.fromCharCode(e)):e.type==="keydown"||e.type==="keyup"?gp[e.keyCode]||"Unidentified":""},code:0,location:0,ctrlKey:0,shiftKey:0,altKey:0,metaKey:0,repeat:0,locale:0,getModifierState:Jl,charCode:function(e){return e.type==="keypress"?Jr(e):0},keyCode:function(e){return e.type==="keydown"||e.type==="keyup"?e.keyCode:0},which:function(e){return e.type==="keypress"?Jr(e):e.type==="keydown"||e.type==="keyup"?e.keyCode:0}}),vp=Re(yp),Sp=Q({},No,{pointerId:0,width:0,height:0,pressure:0,tangentialPressure:0,tiltX:0,tiltY:0,twist:0,pointerType:0,isPrimary:0}),ta=Re(Sp),kp=Q({},kr,{touches:0,targetTouches:0,changedTouches:0,altKey:0,metaKey:0,ctrlKey:0,shiftKey:0,getModifierState:Jl}),xp=Re(kp),wp=Q({},En,{propertyName:0,elapsedTime:0,pseudoElement:0}),Pp=Re(wp),Cp=Q({},No,{deltaX:function(e){return"deltaX"in e?e.deltaX:"wheelDeltaX"in e?-e.wheelDeltaX:0},deltaY:function(e){return"deltaY"in e?e.deltaY:"wheelDeltaY"in e?-e.wheelDeltaY:"wheelDelta"in e?-e.wheelDelta:0},deltaZ:0,deltaMode:0}),_p=Re(Cp),Ep=[9,13,27,32],Yl=et&&"CompositionEvent"in window,Qn=null;et&&"documentMode"in document&&(Qn=document.documentMode);var Rp=et&&"TextEvent"in window&&!Qn,ic=et&&(!Yl||Qn&&8<Qn&&11>=Qn),na=" ",ra=!1;function lc(e,t){switch(e){case"keyup":return Ep.indexOf(t.keyCode)!==-1;case"keydown":return t.keyCode!==229;case"keypress":case"mousedown":case"focusout":return!0;default:return!1}}function sc(e){return e=e.detail,typeof e=="object"&&"data"in e?e.data:null}var tn=!1;function Tp(e,t){switch(e){case"compositionend":return sc(t);case"keypress":return t.which!==32?null:(ra=!0,na);case"textInput":return e=t.data,e===na&&ra?null:e;default:return null}}function bp(e,t){if(tn)return e==="compositionend"||!Yl&&lc(e,t)?(e=oc(),Gr=ql=dt=null,tn=!1,e):null;switch(e){case"paste":return null;case"keypress":if(!(t.ctrlKey||t.altKey||t.metaKey)||t.ctrlKey&&t.altKey){if(t.char&&1<t.char.length)return t.char;if(t.which)return String.fromCharCode(t.which)}return null;case"compositionend":return ic&&t.locale!=="ko"?null:t.data;default:return null}}var jp={color:!0,date:!0,datetime:!0,"datetime-local":!0,email:!0,month:!0,number:!0,password:!0,range:!0,search:!0,tel:!0,text:!0,time:!0,url:!0,week:!0};function oa(e){var t=e&&e.nodeName&&e.nodeName.toLowerCase();return t==="input"?!!jp[e.type]:t==="textarea"}function ac(e,t,n,r){zu(r),t=fo(t,"onChange"),0<t.length&&(n=new Gl("onChange","change",null,n,r),e.push({event:n,listeners:t}))}var Wn=null,or=null;function $p(e){Sc(e,0)}function Lo(e){var t=on(e);if(Nu(t))return e}function Np(e,t){if(e==="change")return t}var uc=!1;if(et){var di;if(et){var fi="oninput"in document;if(!fi){var ia=document.createElement("div");ia.setAttribute("oninput","return;"),fi=typeof ia.oninput=="function"}di=fi}else di=!1;uc=di&&(!document.documentMode||9<document.documentMode)}function la(){Wn&&(Wn.detachEvent("onpropertychange",cc),or=Wn=null)}function cc(e){if(e.propertyName==="value"&&Lo(or)){var t=[];ac(t,or,e,Vl(e)),Vu($p,t)}}function Lp(e,t,n){e==="focusin"?(la(),Wn=t,or=n,Wn.attachEvent("onpropertychange",cc)):e==="focusout"&&la()}function Op(e){if(e==="selectionchange"||e==="keyup"||e==="keydown")return Lo(or)}function Mp(e,t){if(e==="click")return Lo(t)}function Ip(e,t){if(e==="input"||e==="change")return Lo(t)}function Ap(e,t){return e===t&&(e!==0||1/e===1/t)||e!==e&&t!==t}var Be=typeof Object.is=="function"?Object.is:Ap;function ir(e,t){if(Be(e,t))return!0;if(typeof e!="object"||e===null||typeof t!="object"||t===null)return!1;var n=Object.keys(e),r=Object.keys(t);if(n.length!==r.length)return!1;for(r=0;r<n.length;r++){var o=n[r];if(!Ni.call(t,o)||!Be(e[o],t[o]))return!1}return!0}function sa(e){for(;e&&e.firstChild;)e=e.firstChild;return e}function aa(e,t){var n=sa(e);e=0;for(var r;n;){if(n.nodeType===3){if(r=e+n.textContent.length,e<=t&&r>=t)return{node:n,offset:t-e};e=r}e:{for(;n;){if(n.nextSibling){n=n.nextSibling;break e}n=n.parentNode}n=void 0}n=sa(n)}}function dc(e,t){return e&&t?e===t?!0:e&&e.nodeType===3?!1:t&&t.nodeType===3?dc(e,t.parentNode):"contains"in e?e.contains(t):e.compareDocumentPosition?!!(e.compareDocumentPosition(t)&16):!1:!1}function fc(){for(var e=window,t=oo();t instanceof e.HTMLIFrameElement;){try{var n=typeof t.contentWindow.location.href=="string"}catch{n=!1}if(n)e=t.contentWindow;else break;t=oo(e.document)}return t}function Xl(e){var t=e&&e.nodeName&&e.nodeName.toLowerCase();return t&&(t==="input"&&(e.type==="text"||e.type==="search"||e.type==="tel"||e.type==="url"||e.type==="password")||t==="textarea"||e.contentEditable==="true")}function Dp(e){var t=fc(),n=e.focusedElem,r=e.selectionRange;if(t!==n&&n&&n.ownerDocument&&dc(n.ownerDocument.documentElement,n)){if(r!==null&&Xl(n)){if(t=r.start,e=r.end,e===void 0&&(e=t),"selectionStart"in n)n.selectionStart=t,n.selectionEnd=Math.min(e,n.value.length);else if(e=(t=n.ownerDocument||document)&&t.defaultView||window,e.getSelection){e=e.getSelection();var o=n.textContent.length,i=Math.min(r.start,o);r=r.end===void 0?i:Math.min(r.end,o),!e.extend&&i>r&&(o=r,r=i,i=o),o=aa(n,i);var l=aa(n,r);o&&l&&(e.rangeCount!==1||e.anchorNode!==o.node||e.anchorOffset!==o.offset||e.focusNode!==l.node||e.focusOffset!==l.offset)&&(t=t.createRange(),t.setStart(o.node,o.offset),e.removeAllRanges(),i>r?(e.addRange(t),e.extend(l.node,l.offset)):(t.setEnd(l.node,l.offset),e.addRange(t)))}}for(t=[],e=n;e=e.parentNode;)e.nodeType===1&&t.push({element:e,left:e.scrollLeft,top:e.scrollTop});for(typeof n.focus=="function"&&n.focus(),n=0;n<t.length;n++)e=t[n],e.element.scrollLeft=e.left,e.element.scrollTop=e.top}}var zp=et&&"documentMode"in document&&11>=document.documentMode,nn=null,Yi=null,Kn=null,Xi=!1;function ua(e,t,n){var r=n.window===n?n.document:n.nodeType===9?n:n.ownerDocument;Xi||nn==null||nn!==oo(r)||(r=nn,"selectionStart"in r&&Xl(r)?r={start:r.selectionStart,end:r.selectionEnd}:(r=(r.ownerDocument&&r.ownerDocument.defaultView||window).getSelection(),r={anchorNode:r.anchorNode,anchorOffset:r.anchorOffset,focusNode:r.focusNode,focusOffset:r.focusOffset}),Kn&&ir(Kn,r)||(Kn=r,r=fo(Yi,"onSelect"),0<r.length&&(t=new Gl("onSelect","select",null,t,n),e.push({event:t,listeners:r}),t.target=nn)))}function Mr(e,t){var n={};return n[e.toLowerCase()]=t.toLowerCase(),n["Webkit"+e]="webkit"+t,n["Moz"+e]="moz"+t,n}var rn={animationend:Mr("Animation","AnimationEnd"),animationiteration:Mr("Animation","AnimationIteration"),animationstart:Mr("Animation","AnimationStart"),transitionend:Mr("Transition","TransitionEnd")},pi={},pc={};et&&(pc=document.createElement("div").style,"AnimationEvent"in window||(delete rn.animationend.animation,delete rn.animationiteration.animation,delete rn.animationstart.animation),"TransitionEvent"in window||delete rn.transitionend.transition);function Oo(e){if(pi[e])return pi[e];if(!rn[e])return e;var t=rn[e],n;for(n in t)if(t.hasOwnProperty(n)&&n in pc)return pi[e]=t[n];return e}var gc=Oo("animationend"),mc=Oo("animationiteration"),hc=Oo("animationstart"),yc=Oo("transitionend"),vc=new Map,ca="abort auxClick cancel canPlay canPlayThrough click close contextMenu copy cut drag dragEnd dragEnter dragExit dragLeave dragOver dragStart drop durationChange emptied encrypted ended error gotPointerCapture input invalid keyDown keyPress keyUp load loadedData loadedMetadata loadStart lostPointerCapture mouseDown mouseMove mouseOut mouseOver mouseUp paste pause play playing pointerCancel pointerDown pointerMove pointerOut pointerOver pointerUp progress rateChange reset resize seeked seeking stalled submit suspend timeUpdate touchCancel touchEnd touchStart volumeChange scroll toggle touchMove waiting wheel".split(" ");function _t(e,t){vc.set(e,t),Qt(t,[e])}for(var gi=0;gi<ca.length;gi++){var mi=ca[gi],Up=mi.toLowerCase(),Bp=mi[0].toUpperCase()+mi.slice(1);_t(Up,"on"+Bp)}_t(gc,"onAnimationEnd");_t(mc,"onAnimationIteration");_t(hc,"onAnimationStart");_t("dblclick","onDoubleClick");_t("focusin","onFocus");_t("focusout","onBlur");_t(yc,"onTransitionEnd");vn("onMouseEnter",["mouseout","mouseover"]);vn("onMouseLeave",["mouseout","mouseover"]);vn("onPointerEnter",["pointerout","pointerover"]);vn("onPointerLeave",["pointerout","pointerover"]);Qt("onChange","change click focusin focusout input keydown keyup selectionchange".split(" "));Qt("onSelect","focusout contextmenu dragend focusin keydown keyup mousedown mouseup selectionchange".split(" "));Qt("onBeforeInput",["compositionend","keypress","textInput","paste"]);Qt("onCompositionEnd","compositionend focusout keydown keypress keyup mousedown".split(" "));Qt("onCompositionStart","compositionstart focusout keydown keypress keyup mousedown".split(" "));Qt("onCompositionUpdate","compositionupdate focusout keydown keypress keyup mousedown".split(" "));var Bn="abort canplay canplaythrough durationchange emptied encrypted ended error loadeddata loadedmetadata loadstart pause play playing progress ratechange resize seeked seeking stalled suspend timeupdate volumechange waiting".split(" "),Fp=new Set("cancel close invalid load scroll toggle".split(" ").concat(Bn));function da(e,t,n){var r=e.type||"unknown-event";e.currentTarget=n,Uf(r,t,void 0,e),e.currentTarget=null}function Sc(e,t){t=(t&4)!==0;for(var n=0;n<e.length;n++){var r=e[n],o=r.event;r=r.listeners;e:{var i=void 0;if(t)for(var l=r.length-1;0<=l;l--){var s=r[l],a=s.instance,u=s.currentTarget;if(s=s.listener,a!==i&&o.isPropagationStopped())break e;da(o,s,u),i=a}else for(l=0;l<r.length;l++){if(s=r[l],a=s.instance,u=s.currentTarget,s=s.listener,a!==i&&o.isPropagationStopped())break e;da(o,s,u),i=a}}}if(lo)throw e=Ki,lo=!1,Ki=null,e}function D(e,t){var n=t[rl];n===void 0&&(n=t[rl]=new Set);var r=e+"__bubble";n.has(r)||(kc(t,e,2,!1),n.add(r))}function hi(e,t,n){var r=0;t&&(r|=4),kc(n,e,r,t)}var Ir="_reactListening"+Math.random().toString(36).slice(2);function lr(e){if(!e[Ir]){e[Ir]=!0,Ru.forEach(function(n){n!=="selectionchange"&&(Fp.has(n)||hi(n,!1,e),hi(n,!0,e))});var t=e.nodeType===9?e:e.ownerDocument;t===null||t[Ir]||(t[Ir]=!0,hi("selectionchange",!1,t))}}function kc(e,t,n,r){switch(rc(t)){case 1:var o=np;break;case 4:o=rp;break;default:o=Kl}n=o.bind(null,t,n,e),o=void 0,!Wi||t!=="touchstart"&&t!=="touchmove"&&t!=="wheel"||(o=!0),r?o!==void 0?e.addEventListener(t,n,{capture:!0,passive:o}):e.addEventListener(t,n,!0):o!==void 0?e.addEventListener(t,n,{passive:o}):e.addEventListener(t,n,!1)}function yi(e,t,n,r,o){var i=r;if(!(t&1)&&!(t&2)&&r!==null)e:for(;;){if(r===null)return;var l=r.tag;if(l===3||l===4){var s=r.stateNode.containerInfo;if(s===o||s.nodeType===8&&s.parentNode===o)break;if(l===4)for(l=r.return;l!==null;){var a=l.tag;if((a===3||a===4)&&(a=l.stateNode.containerInfo,a===o||a.nodeType===8&&a.parentNode===o))return;l=l.return}for(;s!==null;){if(l=Mt(s),l===null)return;if(a=l.tag,a===5||a===6){r=i=l;continue e}s=s.parentNode}}r=r.return}Vu(function(){var u=i,p=Vl(n),c=[];e:{var g=vc.get(e);if(g!==void 0){var y=Gl,S=e;switch(e){case"keypress":if(Jr(n)===0)break e;case"keydown":case"keyup":y=vp;break;case"focusin":S="focus",y=ci;break;case"focusout":S="blur",y=ci;break;case"beforeblur":case"afterblur":y=ci;break;case"click":if(n.button===2)break e;case"auxclick":case"dblclick":case"mousedown":case"mousemove":case"mouseup":case"mouseout":case"mouseover":case"contextmenu":y=Zs;break;case"drag":case"dragend":case"dragenter":case"dragexit":case"dragleave":case"dragover":case"dragstart":case"drop":y=lp;break;case"touchcancel":case"touchend":case"touchmove":case"touchstart":y=xp;break;case gc:case mc:case hc:y=up;break;case yc:y=Pp;break;case"scroll":y=op;break;case"wheel":y=_p;break;case"copy":case"cut":case"paste":y=dp;break;case"gotpointercapture":case"lostpointercapture":case"pointercancel":case"pointerdown":case"pointermove":case"pointerout":case"pointerover":case"pointerup":y=ta}var w=(t&4)!==0,k=!w&&e==="scroll",m=w?g!==null?g+"Capture":null:g;w=[];for(var d=u,h;d!==null;){h=d;var x=h.stateNode;if(h.tag===5&&x!==null&&(h=x,m!==null&&(x=er(d,m),x!=null&&w.push(sr(d,x,h)))),k)break;d=d.return}0<w.length&&(g=new y(g,S,null,n,p),c.push({event:g,listeners:w}))}}if(!(t&7)){e:{if(g=e==="mouseover"||e==="pointerover",y=e==="mouseout"||e==="pointerout",g&&n!==Hi&&(S=n.relatedTarget||n.fromElement)&&(Mt(S)||S[tt]))break e;if((y||g)&&(g=p.window===p?p:(g=p.ownerDocument)?g.defaultView||g.parentWindow:window,y?(S=n.relatedTarget||n.toElement,y=u,S=S?Mt(S):null,S!==null&&(k=Wt(S),S!==k||S.tag!==5&&S.tag!==6)&&(S=null)):(y=null,S=u),y!==S)){if(w=Zs,x="onMouseLeave",m="onMouseEnter",d="mouse",(e==="pointerout"||e==="pointerover")&&(w=ta,x="onPointerLeave",m="onPointerEnter",d="pointer"),k=y==null?g:on(y),h=S==null?g:on(S),g=new w(x,d+"leave",y,n,p),g.target=k,g.relatedTarget=h,x=null,Mt(p)===u&&(w=new w(m,d+"enter",S,n,p),w.target=h,w.relatedTarget=k,x=w),k=x,y&&S)t:{for(w=y,m=S,d=0,h=w;h;h=qt(h))d++;for(h=0,x=m;x;x=qt(x))h++;for(;0<d-h;)w=qt(w),d--;for(;0<h-d;)m=qt(m),h--;for(;d--;){if(w===m||m!==null&&w===m.alternate)break t;w=qt(w),m=qt(m)}w=null}else w=null;y!==null&&fa(c,g,y,w,!1),S!==null&&k!==null&&fa(c,k,S,w,!0)}}e:{if(g=u?on(u):window,y=g.nodeName&&g.nodeName.toLowerCase(),y==="select"||y==="input"&&g.type==="file")var E=Np;else if(oa(g))if(uc)E=Ip;else{E=Op;var P=Lp}else(y=g.nodeName)&&y.toLowerCase()==="input"&&(g.type==="checkbox"||g.type==="radio")&&(E=Mp);if(E&&(E=E(e,u))){ac(c,E,n,p);break e}P&&P(e,g,u),e==="focusout"&&(P=g._wrapperState)&&P.controlled&&g.type==="number"&&zi(g,"number",g.value)}switch(P=u?on(u):window,e){case"focusin":(oa(P)||P.contentEditable==="true")&&(nn=P,Yi=u,Kn=null);break;case"focusout":Kn=Yi=nn=null;break;case"mousedown":Xi=!0;break;case"contextmenu":case"mouseup":case"dragend":Xi=!1,ua(c,n,p);break;case"selectionchange":if(zp)break;case"keydown":case"keyup":ua(c,n,p)}var C;if(Yl)e:{switch(e){case"compositionstart":var R="onCompositionStart";break e;case"compositionend":R="onCompositionEnd";break e;case"compositionupdate":R="onCompositionUpdate";break e}R=void 0}else tn?lc(e,n)&&(R="onCompositionEnd"):e==="keydown"&&n.keyCode===229&&(R="onCompositionStart");R&&(ic&&n.locale!=="ko"&&(tn||R!=="onCompositionStart"?R==="onCompositionEnd"&&tn&&(C=oc()):(dt=p,ql="value"in dt?dt.value:dt.textContent,tn=!0)),P=fo(u,R),0<P.length&&(R=new ea(R,e,null,n,p),c.push({event:R,listeners:P}),C?R.data=C:(C=sc(n),C!==null&&(R.data=C)))),(C=Rp?Tp(e,n):bp(e,n))&&(u=fo(u,"onBeforeInput"),0<u.length&&(p=new ea("onBeforeInput","beforeinput",null,n,p),c.push({event:p,listeners:u}),p.data=C))}Sc(c,t)})}function sr(e,t,n){return{instance:e,listener:t,currentTarget:n}}function fo(e,t){for(var n=t+"Capture",r=[];e!==null;){var o=e,i=o.stateNode;o.tag===5&&i!==null&&(o=i,i=er(e,n),i!=null&&r.unshift(sr(e,i,o)),i=er(e,t),i!=null&&r.push(sr(e,i,o))),e=e.return}return r}function qt(e){if(e===null)return null;do e=e.return;while(e&&e.tag!==5);return e||null}function fa(e,t,n,r,o){for(var i=t._reactName,l=[];n!==null&&n!==r;){var s=n,a=s.alternate,u=s.stateNode;if(a!==null&&a===r)break;s.tag===5&&u!==null&&(s=u,o?(a=er(n,i),a!=null&&l.unshift(sr(n,a,s))):o||(a=er(n,i),a!=null&&l.push(sr(n,a,s)))),n=n.return}l.length!==0&&e.push({event:t,listeners:l})}var Vp=/\r\n?/g,Hp=/\u0000|\uFFFD/g;function pa(e){return(typeof e=="string"?e:""+e).replace(Vp,`
`).replace(Hp,"")}function Ar(e,t,n){if(t=pa(t),pa(e)!==t&&n)throw Error(_(425))}function po(){}var Zi=null,el=null;function tl(e,t){return e==="textarea"||e==="noscript"||typeof t.children=="string"||typeof t.children=="number"||typeof t.dangerouslySetInnerHTML=="object"&&t.dangerouslySetInnerHTML!==null&&t.dangerouslySetInnerHTML.__html!=null}var nl=typeof setTimeout=="function"?setTimeout:void 0,Qp=typeof clearTimeout=="function"?clearTimeout:void 0,ga=typeof Promise=="function"?Promise:void 0,Wp=typeof queueMicrotask=="function"?queueMicrotask:typeof ga<"u"?function(e){return ga.resolve(null).then(e).catch(Kp)}:nl;function Kp(e){setTimeout(function(){throw e})}function vi(e,t){var n=t,r=0;do{var o=n.nextSibling;if(e.removeChild(n),o&&o.nodeType===8)if(n=o.data,n==="/$"){if(r===0){e.removeChild(o),rr(t);return}r--}else n!=="$"&&n!=="$?"&&n!=="$!"||r++;n=o}while(n);rr(t)}function yt(e){for(;e!=null;e=e.nextSibling){var t=e.nodeType;if(t===1||t===3)break;if(t===8){if(t=e.data,t==="$"||t==="$!"||t==="$?")break;if(t==="/$")return null}}return e}function ma(e){e=e.previousSibling;for(var t=0;e;){if(e.nodeType===8){var n=e.data;if(n==="$"||n==="$!"||n==="$?"){if(t===0)return e;t--}else n==="/$"&&t++}e=e.previousSibling}return null}var Rn=Math.random().toString(36).slice(2),He="__reactFiber$"+Rn,ar="__reactProps$"+Rn,tt="__reactContainer$"+Rn,rl="__reactEvents$"+Rn,qp="__reactListeners$"+Rn,Gp="__reactHandles$"+Rn;function Mt(e){var t=e[He];if(t)return t;for(var n=e.parentNode;n;){if(t=n[tt]||n[He]){if(n=t.alternate,t.child!==null||n!==null&&n.child!==null)for(e=ma(e);e!==null;){if(n=e[He])return n;e=ma(e)}return t}e=n,n=e.parentNode}return null}function xr(e){return e=e[He]||e[tt],!e||e.tag!==5&&e.tag!==6&&e.tag!==13&&e.tag!==3?null:e}function on(e){if(e.tag===5||e.tag===6)return e.stateNode;throw Error(_(33))}function Mo(e){return e[ar]||null}var ol=[],ln=-1;function Et(e){return{current:e}}function z(e){0>ln||(e.current=ol[ln],ol[ln]=null,ln--)}function A(e,t){ln++,ol[ln]=e.current,e.current=t}var Ct={},fe=Et(Ct),Se=Et(!1),Ut=Ct;function Sn(e,t){var n=e.type.contextTypes;if(!n)return Ct;var r=e.stateNode;if(r&&r.__reactInternalMemoizedUnmaskedChildContext===t)return r.__reactInternalMemoizedMaskedChildContext;var o={},i;for(i in n)o[i]=t[i];return r&&(e=e.stateNode,e.__reactInternalMemoizedUnmaskedChildContext=t,e.__reactInternalMemoizedMaskedChildContext=o),o}function ke(e){return e=e.childContextTypes,e!=null}function go(){z(Se),z(fe)}function ha(e,t,n){if(fe.current!==Ct)throw Error(_(168));A(fe,t),A(Se,n)}function xc(e,t,n){var r=e.stateNode;if(t=t.childContextTypes,typeof r.getChildContext!="function")return n;r=r.getChildContext();for(var o in r)if(!(o in t))throw Error(_(108,Lf(e)||"Unknown",o));return Q({},n,r)}function mo(e){return e=(e=e.stateNode)&&e.__reactInternalMemoizedMergedChildContext||Ct,Ut=fe.current,A(fe,e),A(Se,Se.current),!0}function ya(e,t,n){var r=e.stateNode;if(!r)throw Error(_(169));n?(e=xc(e,t,Ut),r.__reactInternalMemoizedMergedChildContext=e,z(Se),z(fe),A(fe,e)):z(Se),A(Se,n)}var Ge=null,Io=!1,Si=!1;function wc(e){Ge===null?Ge=[e]:Ge.push(e)}function Jp(e){Io=!0,wc(e)}function Rt(){if(!Si&&Ge!==null){Si=!0;var e=0,t=I;try{var n=Ge;for(I=1;e<n.length;e++){var r=n[e];do r=r(!0);while(r!==null)}Ge=null,Io=!1}catch(o){throw Ge!==null&&(Ge=Ge.slice(e+1)),Ku(Hl,Rt),o}finally{I=t,Si=!1}}return null}var sn=[],an=0,ho=null,yo=0,be=[],je=0,Bt=null,Ye=1,Xe="";function Lt(e,t){sn[an++]=yo,sn[an++]=ho,ho=e,yo=t}function Pc(e,t,n){be[je++]=Ye,be[je++]=Xe,be[je++]=Bt,Bt=e;var r=Ye;e=Xe;var o=32-ze(r)-1;r&=~(1<<o),n+=1;var i=32-ze(t)+o;if(30<i){var l=o-o%5;i=(r&(1<<l)-1).toString(32),r>>=l,o-=l,Ye=1<<32-ze(t)+o|n<<o|r,Xe=i+e}else Ye=1<<i|n<<o|r,Xe=e}function Zl(e){e.return!==null&&(Lt(e,1),Pc(e,1,0))}function es(e){for(;e===ho;)ho=sn[--an],sn[an]=null,yo=sn[--an],sn[an]=null;for(;e===Bt;)Bt=be[--je],be[je]=null,Xe=be[--je],be[je]=null,Ye=be[--je],be[je]=null}var Ce=null,Pe=null,B=!1,De=null;function Cc(e,t){var n=$e(5,null,null,0);n.elementType="DELETED",n.stateNode=t,n.return=e,t=e.deletions,t===null?(e.deletions=[n],e.flags|=16):t.push(n)}function va(e,t){switch(e.tag){case 5:var n=e.type;return t=t.nodeType!==1||n.toLowerCase()!==t.nodeName.toLowerCase()?null:t,t!==null?(e.stateNode=t,Ce=e,Pe=yt(t.firstChild),!0):!1;case 6:return t=e.pendingProps===""||t.nodeType!==3?null:t,t!==null?(e.stateNode=t,Ce=e,Pe=null,!0):!1;case 13:return t=t.nodeType!==8?null:t,t!==null?(n=Bt!==null?{id:Ye,overflow:Xe}:null,e.memoizedState={dehydrated:t,treeContext:n,retryLane:1073741824},n=$e(18,null,null,0),n.stateNode=t,n.return=e,e.child=n,Ce=e,Pe=null,!0):!1;default:return!1}}function il(e){return(e.mode&1)!==0&&(e.flags&128)===0}function ll(e){if(B){var t=Pe;if(t){var n=t;if(!va(e,t)){if(il(e))throw Error(_(418));t=yt(n.nextSibling);var r=Ce;t&&va(e,t)?Cc(r,n):(e.flags=e.flags&-4097|2,B=!1,Ce=e)}}else{if(il(e))throw Error(_(418));e.flags=e.flags&-4097|2,B=!1,Ce=e}}}function Sa(e){for(e=e.return;e!==null&&e.tag!==5&&e.tag!==3&&e.tag!==13;)e=e.return;Ce=e}function Dr(e){if(e!==Ce)return!1;if(!B)return Sa(e),B=!0,!1;var t;if((t=e.tag!==3)&&!(t=e.tag!==5)&&(t=e.type,t=t!=="head"&&t!=="body"&&!tl(e.type,e.memoizedProps)),t&&(t=Pe)){if(il(e))throw _c(),Error(_(418));for(;t;)Cc(e,t),t=yt(t.nextSibling)}if(Sa(e),e.tag===13){if(e=e.memoizedState,e=e!==null?e.dehydrated:null,!e)throw Error(_(317));e:{for(e=e.nextSibling,t=0;e;){if(e.nodeType===8){var n=e.data;if(n==="/$"){if(t===0){Pe=yt(e.nextSibling);break e}t--}else n!=="$"&&n!=="$!"&&n!=="$?"||t++}e=e.nextSibling}Pe=null}}else Pe=Ce?yt(e.stateNode.nextSibling):null;return!0}function _c(){for(var e=Pe;e;)e=yt(e.nextSibling)}function kn(){Pe=Ce=null,B=!1}function ts(e){De===null?De=[e]:De.push(e)}var Yp=ot.ReactCurrentBatchConfig;function Mn(e,t,n){if(e=n.ref,e!==null&&typeof e!="function"&&typeof e!="object"){if(n._owner){if(n=n._owner,n){if(n.tag!==1)throw Error(_(309));var r=n.stateNode}if(!r)throw Error(_(147,e));var o=r,i=""+e;return t!==null&&t.ref!==null&&typeof t.ref=="function"&&t.ref._stringRef===i?t.ref:(t=function(l){var s=o.refs;l===null?delete s[i]:s[i]=l},t._stringRef=i,t)}if(typeof e!="string")throw Error(_(284));if(!n._owner)throw Error(_(290,e))}return e}function zr(e,t){throw e=Object.prototype.toString.call(t),Error(_(31,e==="[object Object]"?"object with keys {"+Object.keys(t).join(", ")+"}":e))}function ka(e){var t=e._init;return t(e._payload)}function Ec(e){function t(m,d){if(e){var h=m.deletions;h===null?(m.deletions=[d],m.flags|=16):h.push(d)}}function n(m,d){if(!e)return null;for(;d!==null;)t(m,d),d=d.sibling;return null}function r(m,d){for(m=new Map;d!==null;)d.key!==null?m.set(d.key,d):m.set(d.index,d),d=d.sibling;return m}function o(m,d){return m=xt(m,d),m.index=0,m.sibling=null,m}function i(m,d,h){return m.index=h,e?(h=m.alternate,h!==null?(h=h.index,h<d?(m.flags|=2,d):h):(m.flags|=2,d)):(m.flags|=1048576,d)}function l(m){return e&&m.alternate===null&&(m.flags|=2),m}function s(m,d,h,x){return d===null||d.tag!==6?(d=Ei(h,m.mode,x),d.return=m,d):(d=o(d,h),d.return=m,d)}function a(m,d,h,x){var E=h.type;return E===en?p(m,d,h.props.children,x,h.key):d!==null&&(d.elementType===E||typeof E=="object"&&E!==null&&E.$$typeof===st&&ka(E)===d.type)?(x=o(d,h.props),x.ref=Mn(m,d,h),x.return=m,x):(x=ro(h.type,h.key,h.props,null,m.mode,x),x.ref=Mn(m,d,h),x.return=m,x)}function u(m,d,h,x){return d===null||d.tag!==4||d.stateNode.containerInfo!==h.containerInfo||d.stateNode.implementation!==h.implementation?(d=Ri(h,m.mode,x),d.return=m,d):(d=o(d,h.children||[]),d.return=m,d)}function p(m,d,h,x,E){return d===null||d.tag!==7?(d=zt(h,m.mode,x,E),d.return=m,d):(d=o(d,h),d.return=m,d)}function c(m,d,h){if(typeof d=="string"&&d!==""||typeof d=="number")return d=Ei(""+d,m.mode,h),d.return=m,d;if(typeof d=="object"&&d!==null){switch(d.$$typeof){case Tr:return h=ro(d.type,d.key,d.props,null,m.mode,h),h.ref=Mn(m,null,d),h.return=m,h;case Zt:return d=Ri(d,m.mode,h),d.return=m,d;case st:var x=d._init;return c(m,x(d._payload),h)}if(zn(d)||jn(d))return d=zt(d,m.mode,h,null),d.return=m,d;zr(m,d)}return null}function g(m,d,h,x){var E=d!==null?d.key:null;if(typeof h=="string"&&h!==""||typeof h=="number")return E!==null?null:s(m,d,""+h,x);if(typeof h=="object"&&h!==null){switch(h.$$typeof){case Tr:return h.key===E?a(m,d,h,x):null;case Zt:return h.key===E?u(m,d,h,x):null;case st:return E=h._init,g(m,d,E(h._payload),x)}if(zn(h)||jn(h))return E!==null?null:p(m,d,h,x,null);zr(m,h)}return null}function y(m,d,h,x,E){if(typeof x=="string"&&x!==""||typeof x=="number")return m=m.get(h)||null,s(d,m,""+x,E);if(typeof x=="object"&&x!==null){switch(x.$$typeof){case Tr:return m=m.get(x.key===null?h:x.key)||null,a(d,m,x,E);case Zt:return m=m.get(x.key===null?h:x.key)||null,u(d,m,x,E);case st:var P=x._init;return y(m,d,h,P(x._payload),E)}if(zn(x)||jn(x))return m=m.get(h)||null,p(d,m,x,E,null);zr(d,x)}return null}function S(m,d,h,x){for(var E=null,P=null,C=d,R=d=0,M=null;C!==null&&R<h.length;R++){C.index>R?(M=C,C=null):M=C.sibling;var j=g(m,C,h[R],x);if(j===null){C===null&&(C=M);break}e&&C&&j.alternate===null&&t(m,C),d=i(j,d,R),P===null?E=j:P.sibling=j,P=j,C=M}if(R===h.length)return n(m,C),B&&Lt(m,R),E;if(C===null){for(;R<h.length;R++)C=c(m,h[R],x),C!==null&&(d=i(C,d,R),P===null?E=C:P.sibling=C,P=C);return B&&Lt(m,R),E}for(C=r(m,C);R<h.length;R++)M=y(C,m,R,h[R],x),M!==null&&(e&&M.alternate!==null&&C.delete(M.key===null?R:M.key),d=i(M,d,R),P===null?E=M:P.sibling=M,P=M);return e&&C.forEach(function(ae){return t(m,ae)}),B&&Lt(m,R),E}function w(m,d,h,x){var E=jn(h);if(typeof E!="function")throw Error(_(150));if(h=E.call(h),h==null)throw Error(_(151));for(var P=E=null,C=d,R=d=0,M=null,j=h.next();C!==null&&!j.done;R++,j=h.next()){C.index>R?(M=C,C=null):M=C.sibling;var ae=g(m,C,j.value,x);if(ae===null){C===null&&(C=M);break}e&&C&&ae.alternate===null&&t(m,C),d=i(ae,d,R),P===null?E=ae:P.sibling=ae,P=ae,C=M}if(j.done)return n(m,C),B&&Lt(m,R),E;if(C===null){for(;!j.done;R++,j=h.next())j=c(m,j.value,x),j!==null&&(d=i(j,d,R),P===null?E=j:P.sibling=j,P=j);return B&&Lt(m,R),E}for(C=r(m,C);!j.done;R++,j=h.next())j=y(C,m,R,j.value,x),j!==null&&(e&&j.alternate!==null&&C.delete(j.key===null?R:j.key),d=i(j,d,R),P===null?E=j:P.sibling=j,P=j);return e&&C.forEach(function(W){return t(m,W)}),B&&Lt(m,R),E}function k(m,d,h,x){if(typeof h=="object"&&h!==null&&h.type===en&&h.key===null&&(h=h.props.children),typeof h=="object"&&h!==null){switch(h.$$typeof){case Tr:e:{for(var E=h.key,P=d;P!==null;){if(P.key===E){if(E=h.type,E===en){if(P.tag===7){n(m,P.sibling),d=o(P,h.props.children),d.return=m,m=d;break e}}else if(P.elementType===E||typeof E=="object"&&E!==null&&E.$$typeof===st&&ka(E)===P.type){n(m,P.sibling),d=o(P,h.props),d.ref=Mn(m,P,h),d.return=m,m=d;break e}n(m,P);break}else t(m,P);P=P.sibling}h.type===en?(d=zt(h.props.children,m.mode,x,h.key),d.return=m,m=d):(x=ro(h.type,h.key,h.props,null,m.mode,x),x.ref=Mn(m,d,h),x.return=m,m=x)}return l(m);case Zt:e:{for(P=h.key;d!==null;){if(d.key===P)if(d.tag===4&&d.stateNode.containerInfo===h.containerInfo&&d.stateNode.implementation===h.implementation){n(m,d.sibling),d=o(d,h.children||[]),d.return=m,m=d;break e}else{n(m,d);break}else t(m,d);d=d.sibling}d=Ri(h,m.mode,x),d.return=m,m=d}return l(m);case st:return P=h._init,k(m,d,P(h._payload),x)}if(zn(h))return S(m,d,h,x);if(jn(h))return w(m,d,h,x);zr(m,h)}return typeof h=="string"&&h!==""||typeof h=="number"?(h=""+h,d!==null&&d.tag===6?(n(m,d.sibling),d=o(d,h),d.return=m,m=d):(n(m,d),d=Ei(h,m.mode,x),d.return=m,m=d),l(m)):n(m,d)}return k}var xn=Ec(!0),Rc=Ec(!1),vo=Et(null),So=null,un=null,ns=null;function rs(){ns=un=So=null}function os(e){var t=vo.current;z(vo),e._currentValue=t}function sl(e,t,n){for(;e!==null;){var r=e.alternate;if((e.childLanes&t)!==t?(e.childLanes|=t,r!==null&&(r.childLanes|=t)):r!==null&&(r.childLanes&t)!==t&&(r.childLanes|=t),e===n)break;e=e.return}}function hn(e,t){So=e,ns=un=null,e=e.dependencies,e!==null&&e.firstContext!==null&&(e.lanes&t&&(ve=!0),e.firstContext=null)}function Le(e){var t=e._currentValue;if(ns!==e)if(e={context:e,memoizedValue:t,next:null},un===null){if(So===null)throw Error(_(308));un=e,So.dependencies={lanes:0,firstContext:e}}else un=un.next=e;return t}var It=null;function is(e){It===null?It=[e]:It.push(e)}function Tc(e,t,n,r){var o=t.interleaved;return o===null?(n.next=n,is(t)):(n.next=o.next,o.next=n),t.interleaved=n,nt(e,r)}function nt(e,t){e.lanes|=t;var n=e.alternate;for(n!==null&&(n.lanes|=t),n=e,e=e.return;e!==null;)e.childLanes|=t,n=e.alternate,n!==null&&(n.childLanes|=t),n=e,e=e.return;return n.tag===3?n.stateNode:null}var at=!1;function ls(e){e.updateQueue={baseState:e.memoizedState,firstBaseUpdate:null,lastBaseUpdate:null,shared:{pending:null,interleaved:null,lanes:0},effects:null}}function bc(e,t){e=e.updateQueue,t.updateQueue===e&&(t.updateQueue={baseState:e.baseState,firstBaseUpdate:e.firstBaseUpdate,lastBaseUpdate:e.lastBaseUpdate,shared:e.shared,effects:e.effects})}function Ze(e,t){return{eventTime:e,lane:t,tag:0,payload:null,callback:null,next:null}}function vt(e,t,n){var r=e.updateQueue;if(r===null)return null;if(r=r.shared,O&2){var o=r.pending;return o===null?t.next=t:(t.next=o.next,o.next=t),r.pending=t,nt(e,n)}return o=r.interleaved,o===null?(t.next=t,is(r)):(t.next=o.next,o.next=t),r.interleaved=t,nt(e,n)}function Yr(e,t,n){if(t=t.updateQueue,t!==null&&(t=t.shared,(n&4194240)!==0)){var r=t.lanes;r&=e.pendingLanes,n|=r,t.lanes=n,Ql(e,n)}}function xa(e,t){var n=e.updateQueue,r=e.alternate;if(r!==null&&(r=r.updateQueue,n===r)){var o=null,i=null;if(n=n.firstBaseUpdate,n!==null){do{var l={eventTime:n.eventTime,lane:n.lane,tag:n.tag,payload:n.payload,callback:n.callback,next:null};i===null?o=i=l:i=i.next=l,n=n.next}while(n!==null);i===null?o=i=t:i=i.next=t}else o=i=t;n={baseState:r.baseState,firstBaseUpdate:o,lastBaseUpdate:i,shared:r.shared,effects:r.effects},e.updateQueue=n;return}e=n.lastBaseUpdate,e===null?n.firstBaseUpdate=t:e.next=t,n.lastBaseUpdate=t}function ko(e,t,n,r){var o=e.updateQueue;at=!1;var i=o.firstBaseUpdate,l=o.lastBaseUpdate,s=o.shared.pending;if(s!==null){o.shared.pending=null;var a=s,u=a.next;a.next=null,l===null?i=u:l.next=u,l=a;var p=e.alternate;p!==null&&(p=p.updateQueue,s=p.lastBaseUpdate,s!==l&&(s===null?p.firstBaseUpdate=u:s.next=u,p.lastBaseUpdate=a))}if(i!==null){var c=o.baseState;l=0,p=u=a=null,s=i;do{var g=s.lane,y=s.eventTime;if((r&g)===g){p!==null&&(p=p.next={eventTime:y,lane:0,tag:s.tag,payload:s.payload,callback:s.callback,next:null});e:{var S=e,w=s;switch(g=t,y=n,w.tag){case 1:if(S=w.payload,typeof S=="function"){c=S.call(y,c,g);break e}c=S;break e;case 3:S.flags=S.flags&-65537|128;case 0:if(S=w.payload,g=typeof S=="function"?S.call(y,c,g):S,g==null)break e;c=Q({},c,g);break e;case 2:at=!0}}s.callback!==null&&s.lane!==0&&(e.flags|=64,g=o.effects,g===null?o.effects=[s]:g.push(s))}else y={eventTime:y,lane:g,tag:s.tag,payload:s.payload,callback:s.callback,next:null},p===null?(u=p=y,a=c):p=p.next=y,l|=g;if(s=s.next,s===null){if(s=o.shared.pending,s===null)break;g=s,s=g.next,g.next=null,o.lastBaseUpdate=g,o.shared.pending=null}}while(!0);if(p===null&&(a=c),o.baseState=a,o.firstBaseUpdate=u,o.lastBaseUpdate=p,t=o.shared.interleaved,t!==null){o=t;do l|=o.lane,o=o.next;while(o!==t)}else i===null&&(o.shared.lanes=0);Vt|=l,e.lanes=l,e.memoizedState=c}}function wa(e,t,n){if(e=t.effects,t.effects=null,e!==null)for(t=0;t<e.length;t++){var r=e[t],o=r.callback;if(o!==null){if(r.callback=null,r=n,typeof o!="function")throw Error(_(191,o));o.call(r)}}}var wr={},We=Et(wr),ur=Et(wr),cr=Et(wr);function At(e){if(e===wr)throw Error(_(174));return e}function ss(e,t){switch(A(cr,t),A(ur,e),A(We,wr),e=t.nodeType,e){case 9:case 11:t=(t=t.documentElement)?t.namespaceURI:Bi(null,"");break;default:e=e===8?t.parentNode:t,t=e.namespaceURI||null,e=e.tagName,t=Bi(t,e)}z(We),A(We,t)}function wn(){z(We),z(ur),z(cr)}function jc(e){At(cr.current);var t=At(We.current),n=Bi(t,e.type);t!==n&&(A(ur,e),A(We,n))}function as(e){ur.current===e&&(z(We),z(ur))}var V=Et(0);function xo(e){for(var t=e;t!==null;){if(t.tag===13){var n=t.memoizedState;if(n!==null&&(n=n.dehydrated,n===null||n.data==="$?"||n.data==="$!"))return t}else if(t.tag===19&&t.memoizedProps.revealOrder!==void 0){if(t.flags&128)return t}else if(t.child!==null){t.child.return=t,t=t.child;continue}if(t===e)break;for(;t.sibling===null;){if(t.return===null||t.return===e)return null;t=t.return}t.sibling.return=t.return,t=t.sibling}return null}var ki=[];function us(){for(var e=0;e<ki.length;e++)ki[e]._workInProgressVersionPrimary=null;ki.length=0}var Xr=ot.ReactCurrentDispatcher,xi=ot.ReactCurrentBatchConfig,Ft=0,H=null,X=null,ne=null,wo=!1,qn=!1,dr=0,Xp=0;function ue(){throw Error(_(321))}function cs(e,t){if(t===null)return!1;for(var n=0;n<t.length&&n<e.length;n++)if(!Be(e[n],t[n]))return!1;return!0}function ds(e,t,n,r,o,i){if(Ft=i,H=t,t.memoizedState=null,t.updateQueue=null,t.lanes=0,Xr.current=e===null||e.memoizedState===null?ng:rg,e=n(r,o),qn){i=0;do{if(qn=!1,dr=0,25<=i)throw Error(_(301));i+=1,ne=X=null,t.updateQueue=null,Xr.current=og,e=n(r,o)}while(qn)}if(Xr.current=Po,t=X!==null&&X.next!==null,Ft=0,ne=X=H=null,wo=!1,t)throw Error(_(300));return e}function fs(){var e=dr!==0;return dr=0,e}function Ve(){var e={memoizedState:null,baseState:null,baseQueue:null,queue:null,next:null};return ne===null?H.memoizedState=ne=e:ne=ne.next=e,ne}function Oe(){if(X===null){var e=H.alternate;e=e!==null?e.memoizedState:null}else e=X.next;var t=ne===null?H.memoizedState:ne.next;if(t!==null)ne=t,X=e;else{if(e===null)throw Error(_(310));X=e,e={memoizedState:X.memoizedState,baseState:X.baseState,baseQueue:X.baseQueue,queue:X.queue,next:null},ne===null?H.memoizedState=ne=e:ne=ne.next=e}return ne}function fr(e,t){return typeof t=="function"?t(e):t}function wi(e){var t=Oe(),n=t.queue;if(n===null)throw Error(_(311));n.lastRenderedReducer=e;var r=X,o=r.baseQueue,i=n.pending;if(i!==null){if(o!==null){var l=o.next;o.next=i.next,i.next=l}r.baseQueue=o=i,n.pending=null}if(o!==null){i=o.next,r=r.baseState;var s=l=null,a=null,u=i;do{var p=u.lane;if((Ft&p)===p)a!==null&&(a=a.next={lane:0,action:u.action,hasEagerState:u.hasEagerState,eagerState:u.eagerState,next:null}),r=u.hasEagerState?u.eagerState:e(r,u.action);else{var c={lane:p,action:u.action,hasEagerState:u.hasEagerState,eagerState:u.eagerState,next:null};a===null?(s=a=c,l=r):a=a.next=c,H.lanes|=p,Vt|=p}u=u.next}while(u!==null&&u!==i);a===null?l=r:a.next=s,Be(r,t.memoizedState)||(ve=!0),t.memoizedState=r,t.baseState=l,t.baseQueue=a,n.lastRenderedState=r}if(e=n.interleaved,e!==null){o=e;do i=o.lane,H.lanes|=i,Vt|=i,o=o.next;while(o!==e)}else o===null&&(n.lanes=0);return[t.memoizedState,n.dispatch]}function Pi(e){var t=Oe(),n=t.queue;if(n===null)throw Error(_(311));n.lastRenderedReducer=e;var r=n.dispatch,o=n.pending,i=t.memoizedState;if(o!==null){n.pending=null;var l=o=o.next;do i=e(i,l.action),l=l.next;while(l!==o);Be(i,t.memoizedState)||(ve=!0),t.memoizedState=i,t.baseQueue===null&&(t.baseState=i),n.lastRenderedState=i}return[i,r]}function $c(){}function Nc(e,t){var n=H,r=Oe(),o=t(),i=!Be(r.memoizedState,o);if(i&&(r.memoizedState=o,ve=!0),r=r.queue,ps(Mc.bind(null,n,r,e),[e]),r.getSnapshot!==t||i||ne!==null&&ne.memoizedState.tag&1){if(n.flags|=2048,pr(9,Oc.bind(null,n,r,o,t),void 0,null),re===null)throw Error(_(349));Ft&30||Lc(n,t,o)}return o}function Lc(e,t,n){e.flags|=16384,e={getSnapshot:t,value:n},t=H.updateQueue,t===null?(t={lastEffect:null,stores:null},H.updateQueue=t,t.stores=[e]):(n=t.stores,n===null?t.stores=[e]:n.push(e))}function Oc(e,t,n,r){t.value=n,t.getSnapshot=r,Ic(t)&&Ac(e)}function Mc(e,t,n){return n(function(){Ic(t)&&Ac(e)})}function Ic(e){var t=e.getSnapshot;e=e.value;try{var n=t();return!Be(e,n)}catch{return!0}}function Ac(e){var t=nt(e,1);t!==null&&Ue(t,e,1,-1)}function Pa(e){var t=Ve();return typeof e=="function"&&(e=e()),t.memoizedState=t.baseState=e,e={pending:null,interleaved:null,lanes:0,dispatch:null,lastRenderedReducer:fr,lastRenderedState:e},t.queue=e,e=e.dispatch=tg.bind(null,H,e),[t.memoizedState,e]}function pr(e,t,n,r){return e={tag:e,create:t,destroy:n,deps:r,next:null},t=H.updateQueue,t===null?(t={lastEffect:null,stores:null},H.updateQueue=t,t.lastEffect=e.next=e):(n=t.lastEffect,n===null?t.lastEffect=e.next=e:(r=n.next,n.next=e,e.next=r,t.lastEffect=e)),e}function Dc(){return Oe().memoizedState}function Zr(e,t,n,r){var o=Ve();H.flags|=e,o.memoizedState=pr(1|t,n,void 0,r===void 0?null:r)}function Ao(e,t,n,r){var o=Oe();r=r===void 0?null:r;var i=void 0;if(X!==null){var l=X.memoizedState;if(i=l.destroy,r!==null&&cs(r,l.deps)){o.memoizedState=pr(t,n,i,r);return}}H.flags|=e,o.memoizedState=pr(1|t,n,i,r)}function Ca(e,t){return Zr(8390656,8,e,t)}function ps(e,t){return Ao(2048,8,e,t)}function zc(e,t){return Ao(4,2,e,t)}function Uc(e,t){return Ao(4,4,e,t)}function Bc(e,t){if(typeof t=="function")return e=e(),t(e),function(){t(null)};if(t!=null)return e=e(),t.current=e,function(){t.current=null}}function Fc(e,t,n){return n=n!=null?n.concat([e]):null,Ao(4,4,Bc.bind(null,t,e),n)}function gs(){}function Vc(e,t){var n=Oe();t=t===void 0?null:t;var r=n.memoizedState;return r!==null&&t!==null&&cs(t,r[1])?r[0]:(n.memoizedState=[e,t],e)}function Hc(e,t){var n=Oe();t=t===void 0?null:t;var r=n.memoizedState;return r!==null&&t!==null&&cs(t,r[1])?r[0]:(e=e(),n.memoizedState=[e,t],e)}function Qc(e,t,n){return Ft&21?(Be(n,t)||(n=Ju(),H.lanes|=n,Vt|=n,e.baseState=!0),t):(e.baseState&&(e.baseState=!1,ve=!0),e.memoizedState=n)}function Zp(e,t){var n=I;I=n!==0&&4>n?n:4,e(!0);var r=xi.transition;xi.transition={};try{e(!1),t()}finally{I=n,xi.transition=r}}function Wc(){return Oe().memoizedState}function eg(e,t,n){var r=kt(e);if(n={lane:r,action:n,hasEagerState:!1,eagerState:null,next:null},Kc(e))qc(t,n);else if(n=Tc(e,t,n,r),n!==null){var o=ge();Ue(n,e,r,o),Gc(n,t,r)}}function tg(e,t,n){var r=kt(e),o={lane:r,action:n,hasEagerState:!1,eagerState:null,next:null};if(Kc(e))qc(t,o);else{var i=e.alternate;if(e.lanes===0&&(i===null||i.lanes===0)&&(i=t.lastRenderedReducer,i!==null))try{var l=t.lastRenderedState,s=i(l,n);if(o.hasEagerState=!0,o.eagerState=s,Be(s,l)){var a=t.interleaved;a===null?(o.next=o,is(t)):(o.next=a.next,a.next=o),t.interleaved=o;return}}catch{}finally{}n=Tc(e,t,o,r),n!==null&&(o=ge(),Ue(n,e,r,o),Gc(n,t,r))}}function Kc(e){var t=e.alternate;return e===H||t!==null&&t===H}function qc(e,t){qn=wo=!0;var n=e.pending;n===null?t.next=t:(t.next=n.next,n.next=t),e.pending=t}function Gc(e,t,n){if(n&4194240){var r=t.lanes;r&=e.pendingLanes,n|=r,t.lanes=n,Ql(e,n)}}var Po={readContext:Le,useCallback:ue,useContext:ue,useEffect:ue,useImperativeHandle:ue,useInsertionEffect:ue,useLayoutEffect:ue,useMemo:ue,useReducer:ue,useRef:ue,useState:ue,useDebugValue:ue,useDeferredValue:ue,useTransition:ue,useMutableSource:ue,useSyncExternalStore:ue,useId:ue,unstable_isNewReconciler:!1},ng={readContext:Le,useCallback:function(e,t){return Ve().memoizedState=[e,t===void 0?null:t],e},useContext:Le,useEffect:Ca,useImperativeHandle:function(e,t,n){return n=n!=null?n.concat([e]):null,Zr(4194308,4,Bc.bind(null,t,e),n)},useLayoutEffect:function(e,t){return Zr(4194308,4,e,t)},useInsertionEffect:function(e,t){return Zr(4,2,e,t)},useMemo:function(e,t){var n=Ve();return t=t===void 0?null:t,e=e(),n.memoizedState=[e,t],e},useReducer:function(e,t,n){var r=Ve();return t=n!==void 0?n(t):t,r.memoizedState=r.baseState=t,e={pending:null,interleaved:null,lanes:0,dispatch:null,lastRenderedReducer:e,lastRenderedState:t},r.queue=e,e=e.dispatch=eg.bind(null,H,e),[r.memoizedState,e]},useRef:function(e){var t=Ve();return e={current:e},t.memoizedState=e},useState:Pa,useDebugValue:gs,useDeferredValue:function(e){return Ve().memoizedState=e},useTransition:function(){var e=Pa(!1),t=e[0];return e=Zp.bind(null,e[1]),Ve().memoizedState=e,[t,e]},useMutableSource:function(){},useSyncExternalStore:function(e,t,n){var r=H,o=Ve();if(B){if(n===void 0)throw Error(_(407));n=n()}else{if(n=t(),re===null)throw Error(_(349));Ft&30||Lc(r,t,n)}o.memoizedState=n;var i={value:n,getSnapshot:t};return o.queue=i,Ca(Mc.bind(null,r,i,e),[e]),r.flags|=2048,pr(9,Oc.bind(null,r,i,n,t),void 0,null),n},useId:function(){var e=Ve(),t=re.identifierPrefix;if(B){var n=Xe,r=Ye;n=(r&~(1<<32-ze(r)-1)).toString(32)+n,t=":"+t+"R"+n,n=dr++,0<n&&(t+="H"+n.toString(32)),t+=":"}else n=Xp++,t=":"+t+"r"+n.toString(32)+":";return e.memoizedState=t},unstable_isNewReconciler:!1},rg={readContext:Le,useCallback:Vc,useContext:Le,useEffect:ps,useImperativeHandle:Fc,useInsertionEffect:zc,useLayoutEffect:Uc,useMemo:Hc,useReducer:wi,useRef:Dc,useState:function(){return wi(fr)},useDebugValue:gs,useDeferredValue:function(e){var t=Oe();return Qc(t,X.memoizedState,e)},useTransition:function(){var e=wi(fr)[0],t=Oe().memoizedState;return[e,t]},useMutableSource:$c,useSyncExternalStore:Nc,useId:Wc,unstable_isNewReconciler:!1},og={readContext:Le,useCallback:Vc,useContext:Le,useEffect:ps,useImperativeHandle:Fc,useInsertionEffect:zc,useLayoutEffect:Uc,useMemo:Hc,useReducer:Pi,useRef:Dc,useState:function(){return Pi(fr)},useDebugValue:gs,useDeferredValue:function(e){var t=Oe();return X===null?t.memoizedState=e:Qc(t,X.memoizedState,e)},useTransition:function(){var e=Pi(fr)[0],t=Oe().memoizedState;return[e,t]},useMutableSource:$c,useSyncExternalStore:Nc,useId:Wc,unstable_isNewReconciler:!1};function Ie(e,t){if(e&&e.defaultProps){t=Q({},t),e=e.defaultProps;for(var n in e)t[n]===void 0&&(t[n]=e[n]);return t}return t}function al(e,t,n,r){t=e.memoizedState,n=n(r,t),n=n==null?t:Q({},t,n),e.memoizedState=n,e.lanes===0&&(e.updateQueue.baseState=n)}var Do={isMounted:function(e){return(e=e._reactInternals)?Wt(e)===e:!1},enqueueSetState:function(e,t,n){e=e._reactInternals;var r=ge(),o=kt(e),i=Ze(r,o);i.payload=t,n!=null&&(i.callback=n),t=vt(e,i,o),t!==null&&(Ue(t,e,o,r),Yr(t,e,o))},enqueueReplaceState:function(e,t,n){e=e._reactInternals;var r=ge(),o=kt(e),i=Ze(r,o);i.tag=1,i.payload=t,n!=null&&(i.callback=n),t=vt(e,i,o),t!==null&&(Ue(t,e,o,r),Yr(t,e,o))},enqueueForceUpdate:function(e,t){e=e._reactInternals;var n=ge(),r=kt(e),o=Ze(n,r);o.tag=2,t!=null&&(o.callback=t),t=vt(e,o,r),t!==null&&(Ue(t,e,r,n),Yr(t,e,r))}};function _a(e,t,n,r,o,i,l){return e=e.stateNode,typeof e.shouldComponentUpdate=="function"?e.shouldComponentUpdate(r,i,l):t.prototype&&t.prototype.isPureReactComponent?!ir(n,r)||!ir(o,i):!0}function Jc(e,t,n){var r=!1,o=Ct,i=t.contextType;return typeof i=="object"&&i!==null?i=Le(i):(o=ke(t)?Ut:fe.current,r=t.contextTypes,i=(r=r!=null)?Sn(e,o):Ct),t=new t(n,i),e.memoizedState=t.state!==null&&t.state!==void 0?t.state:null,t.updater=Do,e.stateNode=t,t._reactInternals=e,r&&(e=e.stateNode,e.__reactInternalMemoizedUnmaskedChildContext=o,e.__reactInternalMemoizedMaskedChildContext=i),t}function Ea(e,t,n,r){e=t.state,typeof t.componentWillReceiveProps=="function"&&t.componentWillReceiveProps(n,r),typeof t.UNSAFE_componentWillReceiveProps=="function"&&t.UNSAFE_componentWillReceiveProps(n,r),t.state!==e&&Do.enqueueReplaceState(t,t.state,null)}function ul(e,t,n,r){var o=e.stateNode;o.props=n,o.state=e.memoizedState,o.refs={},ls(e);var i=t.contextType;typeof i=="object"&&i!==null?o.context=Le(i):(i=ke(t)?Ut:fe.current,o.context=Sn(e,i)),o.state=e.memoizedState,i=t.getDerivedStateFromProps,typeof i=="function"&&(al(e,t,i,n),o.state=e.memoizedState),typeof t.getDerivedStateFromProps=="function"||typeof o.getSnapshotBeforeUpdate=="function"||typeof o.UNSAFE_componentWillMount!="function"&&typeof o.componentWillMount!="function"||(t=o.state,typeof o.componentWillMount=="function"&&o.componentWillMount(),typeof o.UNSAFE_componentWillMount=="function"&&o.UNSAFE_componentWillMount(),t!==o.state&&Do.enqueueReplaceState(o,o.state,null),ko(e,n,o,r),o.state=e.memoizedState),typeof o.componentDidMount=="function"&&(e.flags|=4194308)}function Pn(e,t){try{var n="",r=t;do n+=Nf(r),r=r.return;while(r);var o=n}catch(i){o=`
Error generating stack: `+i.message+`
`+i.stack}return{value:e,source:t,stack:o,digest:null}}function Ci(e,t,n){return{value:e,source:null,stack:n??null,digest:t??null}}function cl(e,t){try{console.error(t.value)}catch(n){setTimeout(function(){throw n})}}var ig=typeof WeakMap=="function"?WeakMap:Map;function Yc(e,t,n){n=Ze(-1,n),n.tag=3,n.payload={element:null};var r=t.value;return n.callback=function(){_o||(_o=!0,kl=r),cl(e,t)},n}function Xc(e,t,n){n=Ze(-1,n),n.tag=3;var r=e.type.getDerivedStateFromError;if(typeof r=="function"){var o=t.value;n.payload=function(){return r(o)},n.callback=function(){cl(e,t)}}var i=e.stateNode;return i!==null&&typeof i.componentDidCatch=="function"&&(n.callback=function(){cl(e,t),typeof r!="function"&&(St===null?St=new Set([this]):St.add(this));var l=t.stack;this.componentDidCatch(t.value,{componentStack:l!==null?l:""})}),n}function Ra(e,t,n){var r=e.pingCache;if(r===null){r=e.pingCache=new ig;var o=new Set;r.set(t,o)}else o=r.get(t),o===void 0&&(o=new Set,r.set(t,o));o.has(n)||(o.add(n),e=Sg.bind(null,e,t,n),t.then(e,e))}function Ta(e){do{var t;if((t=e.tag===13)&&(t=e.memoizedState,t=t!==null?t.dehydrated!==null:!0),t)return e;e=e.return}while(e!==null);return null}function ba(e,t,n,r,o){return e.mode&1?(e.flags|=65536,e.lanes=o,e):(e===t?e.flags|=65536:(e.flags|=128,n.flags|=131072,n.flags&=-52805,n.tag===1&&(n.alternate===null?n.tag=17:(t=Ze(-1,1),t.tag=2,vt(n,t,1))),n.lanes|=1),e)}var lg=ot.ReactCurrentOwner,ve=!1;function pe(e,t,n,r){t.child=e===null?Rc(t,null,n,r):xn(t,e.child,n,r)}function ja(e,t,n,r,o){n=n.render;var i=t.ref;return hn(t,o),r=ds(e,t,n,r,i,o),n=fs(),e!==null&&!ve?(t.updateQueue=e.updateQueue,t.flags&=-2053,e.lanes&=~o,rt(e,t,o)):(B&&n&&Zl(t),t.flags|=1,pe(e,t,r,o),t.child)}function $a(e,t,n,r,o){if(e===null){var i=n.type;return typeof i=="function"&&!ws(i)&&i.defaultProps===void 0&&n.compare===null&&n.defaultProps===void 0?(t.tag=15,t.type=i,Zc(e,t,i,r,o)):(e=ro(n.type,null,r,t,t.mode,o),e.ref=t.ref,e.return=t,t.child=e)}if(i=e.child,!(e.lanes&o)){var l=i.memoizedProps;if(n=n.compare,n=n!==null?n:ir,n(l,r)&&e.ref===t.ref)return rt(e,t,o)}return t.flags|=1,e=xt(i,r),e.ref=t.ref,e.return=t,t.child=e}function Zc(e,t,n,r,o){if(e!==null){var i=e.memoizedProps;if(ir(i,r)&&e.ref===t.ref)if(ve=!1,t.pendingProps=r=i,(e.lanes&o)!==0)e.flags&131072&&(ve=!0);else return t.lanes=e.lanes,rt(e,t,o)}return dl(e,t,n,r,o)}function ed(e,t,n){var r=t.pendingProps,o=r.children,i=e!==null?e.memoizedState:null;if(r.mode==="hidden")if(!(t.mode&1))t.memoizedState={baseLanes:0,cachePool:null,transitions:null},A(dn,we),we|=n;else{if(!(n&1073741824))return e=i!==null?i.baseLanes|n:n,t.lanes=t.childLanes=1073741824,t.memoizedState={baseLanes:e,cachePool:null,transitions:null},t.updateQueue=null,A(dn,we),we|=e,null;t.memoizedState={baseLanes:0,cachePool:null,transitions:null},r=i!==null?i.baseLanes:n,A(dn,we),we|=r}else i!==null?(r=i.baseLanes|n,t.memoizedState=null):r=n,A(dn,we),we|=r;return pe(e,t,o,n),t.child}function td(e,t){var n=t.ref;(e===null&&n!==null||e!==null&&e.ref!==n)&&(t.flags|=512,t.flags|=2097152)}function dl(e,t,n,r,o){var i=ke(n)?Ut:fe.current;return i=Sn(t,i),hn(t,o),n=ds(e,t,n,r,i,o),r=fs(),e!==null&&!ve?(t.updateQueue=e.updateQueue,t.flags&=-2053,e.lanes&=~o,rt(e,t,o)):(B&&r&&Zl(t),t.flags|=1,pe(e,t,n,o),t.child)}function Na(e,t,n,r,o){if(ke(n)){var i=!0;mo(t)}else i=!1;if(hn(t,o),t.stateNode===null)eo(e,t),Jc(t,n,r),ul(t,n,r,o),r=!0;else if(e===null){var l=t.stateNode,s=t.memoizedProps;l.props=s;var a=l.context,u=n.contextType;typeof u=="object"&&u!==null?u=Le(u):(u=ke(n)?Ut:fe.current,u=Sn(t,u));var p=n.getDerivedStateFromProps,c=typeof p=="function"||typeof l.getSnapshotBeforeUpdate=="function";c||typeof l.UNSAFE_componentWillReceiveProps!="function"&&typeof l.componentWillReceiveProps!="function"||(s!==r||a!==u)&&Ea(t,l,r,u),at=!1;var g=t.memoizedState;l.state=g,ko(t,r,l,o),a=t.memoizedState,s!==r||g!==a||Se.current||at?(typeof p=="function"&&(al(t,n,p,r),a=t.memoizedState),(s=at||_a(t,n,s,r,g,a,u))?(c||typeof l.UNSAFE_componentWillMount!="function"&&typeof l.componentWillMount!="function"||(typeof l.componentWillMount=="function"&&l.componentWillMount(),typeof l.UNSAFE_componentWillMount=="function"&&l.UNSAFE_componentWillMount()),typeof l.componentDidMount=="function"&&(t.flags|=4194308)):(typeof l.componentDidMount=="function"&&(t.flags|=4194308),t.memoizedProps=r,t.memoizedState=a),l.props=r,l.state=a,l.context=u,r=s):(typeof l.componentDidMount=="function"&&(t.flags|=4194308),r=!1)}else{l=t.stateNode,bc(e,t),s=t.memoizedProps,u=t.type===t.elementType?s:Ie(t.type,s),l.props=u,c=t.pendingProps,g=l.context,a=n.contextType,typeof a=="object"&&a!==null?a=Le(a):(a=ke(n)?Ut:fe.current,a=Sn(t,a));var y=n.getDerivedStateFromProps;(p=typeof y=="function"||typeof l.getSnapshotBeforeUpdate=="function")||typeof l.UNSAFE_componentWillReceiveProps!="function"&&typeof l.componentWillReceiveProps!="function"||(s!==c||g!==a)&&Ea(t,l,r,a),at=!1,g=t.memoizedState,l.state=g,ko(t,r,l,o);var S=t.memoizedState;s!==c||g!==S||Se.current||at?(typeof y=="function"&&(al(t,n,y,r),S=t.memoizedState),(u=at||_a(t,n,u,r,g,S,a)||!1)?(p||typeof l.UNSAFE_componentWillUpdate!="function"&&typeof l.componentWillUpdate!="function"||(typeof l.componentWillUpdate=="function"&&l.componentWillUpdate(r,S,a),typeof l.UNSAFE_componentWillUpdate=="function"&&l.UNSAFE_componentWillUpdate(r,S,a)),typeof l.componentDidUpdate=="function"&&(t.flags|=4),typeof l.getSnapshotBeforeUpdate=="function"&&(t.flags|=1024)):(typeof l.componentDidUpdate!="function"||s===e.memoizedProps&&g===e.memoizedState||(t.flags|=4),typeof l.getSnapshotBeforeUpdate!="function"||s===e.memoizedProps&&g===e.memoizedState||(t.flags|=1024),t.memoizedProps=r,t.memoizedState=S),l.props=r,l.state=S,l.context=a,r=u):(typeof l.componentDidUpdate!="function"||s===e.memoizedProps&&g===e.memoizedState||(t.flags|=4),typeof l.getSnapshotBeforeUpdate!="function"||s===e.memoizedProps&&g===e.memoizedState||(t.flags|=1024),r=!1)}return fl(e,t,n,r,i,o)}function fl(e,t,n,r,o,i){td(e,t);var l=(t.flags&128)!==0;if(!r&&!l)return o&&ya(t,n,!1),rt(e,t,i);r=t.stateNode,lg.current=t;var s=l&&typeof n.getDerivedStateFromError!="function"?null:r.render();return t.flags|=1,e!==null&&l?(t.child=xn(t,e.child,null,i),t.child=xn(t,null,s,i)):pe(e,t,s,i),t.memoizedState=r.state,o&&ya(t,n,!0),t.child}function nd(e){var t=e.stateNode;t.pendingContext?ha(e,t.pendingContext,t.pendingContext!==t.context):t.context&&ha(e,t.context,!1),ss(e,t.containerInfo)}function La(e,t,n,r,o){return kn(),ts(o),t.flags|=256,pe(e,t,n,r),t.child}var pl={dehydrated:null,treeContext:null,retryLane:0};function gl(e){return{baseLanes:e,cachePool:null,transitions:null}}function rd(e,t,n){var r=t.pendingProps,o=V.current,i=!1,l=(t.flags&128)!==0,s;if((s=l)||(s=e!==null&&e.memoizedState===null?!1:(o&2)!==0),s?(i=!0,t.flags&=-129):(e===null||e.memoizedState!==null)&&(o|=1),A(V,o&1),e===null)return ll(t),e=t.memoizedState,e!==null&&(e=e.dehydrated,e!==null)?(t.mode&1?e.data==="$!"?t.lanes=8:t.lanes=1073741824:t.lanes=1,null):(l=r.children,e=r.fallback,i?(r=t.mode,i=t.child,l={mode:"hidden",children:l},!(r&1)&&i!==null?(i.childLanes=0,i.pendingProps=l):i=Bo(l,r,0,null),e=zt(e,r,n,null),i.return=t,e.return=t,i.sibling=e,t.child=i,t.child.memoizedState=gl(n),t.memoizedState=pl,e):ms(t,l));if(o=e.memoizedState,o!==null&&(s=o.dehydrated,s!==null))return sg(e,t,l,r,s,o,n);if(i){i=r.fallback,l=t.mode,o=e.child,s=o.sibling;var a={mode:"hidden",children:r.children};return!(l&1)&&t.child!==o?(r=t.child,r.childLanes=0,r.pendingProps=a,t.deletions=null):(r=xt(o,a),r.subtreeFlags=o.subtreeFlags&14680064),s!==null?i=xt(s,i):(i=zt(i,l,n,null),i.flags|=2),i.return=t,r.return=t,r.sibling=i,t.child=r,r=i,i=t.child,l=e.child.memoizedState,l=l===null?gl(n):{baseLanes:l.baseLanes|n,cachePool:null,transitions:l.transitions},i.memoizedState=l,i.childLanes=e.childLanes&~n,t.memoizedState=pl,r}return i=e.child,e=i.sibling,r=xt(i,{mode:"visible",children:r.children}),!(t.mode&1)&&(r.lanes=n),r.return=t,r.sibling=null,e!==null&&(n=t.deletions,n===null?(t.deletions=[e],t.flags|=16):n.push(e)),t.child=r,t.memoizedState=null,r}function ms(e,t){return t=Bo({mode:"visible",children:t},e.mode,0,null),t.return=e,e.child=t}function Ur(e,t,n,r){return r!==null&&ts(r),xn(t,e.child,null,n),e=ms(t,t.pendingProps.children),e.flags|=2,t.memoizedState=null,e}function sg(e,t,n,r,o,i,l){if(n)return t.flags&256?(t.flags&=-257,r=Ci(Error(_(422))),Ur(e,t,l,r)):t.memoizedState!==null?(t.child=e.child,t.flags|=128,null):(i=r.fallback,o=t.mode,r=Bo({mode:"visible",children:r.children},o,0,null),i=zt(i,o,l,null),i.flags|=2,r.return=t,i.return=t,r.sibling=i,t.child=r,t.mode&1&&xn(t,e.child,null,l),t.child.memoizedState=gl(l),t.memoizedState=pl,i);if(!(t.mode&1))return Ur(e,t,l,null);if(o.data==="$!"){if(r=o.nextSibling&&o.nextSibling.dataset,r)var s=r.dgst;return r=s,i=Error(_(419)),r=Ci(i,r,void 0),Ur(e,t,l,r)}if(s=(l&e.childLanes)!==0,ve||s){if(r=re,r!==null){switch(l&-l){case 4:o=2;break;case 16:o=8;break;case 64:case 128:case 256:case 512:case 1024:case 2048:case 4096:case 8192:case 16384:case 32768:case 65536:case 131072:case 262144:case 524288:case 1048576:case 2097152:case 4194304:case 8388608:case 16777216:case 33554432:case 67108864:o=32;break;case 536870912:o=268435456;break;default:o=0}o=o&(r.suspendedLanes|l)?0:o,o!==0&&o!==i.retryLane&&(i.retryLane=o,nt(e,o),Ue(r,e,o,-1))}return xs(),r=Ci(Error(_(421))),Ur(e,t,l,r)}return o.data==="$?"?(t.flags|=128,t.child=e.child,t=kg.bind(null,e),o._reactRetry=t,null):(e=i.treeContext,Pe=yt(o.nextSibling),Ce=t,B=!0,De=null,e!==null&&(be[je++]=Ye,be[je++]=Xe,be[je++]=Bt,Ye=e.id,Xe=e.overflow,Bt=t),t=ms(t,r.children),t.flags|=4096,t)}function Oa(e,t,n){e.lanes|=t;var r=e.alternate;r!==null&&(r.lanes|=t),sl(e.return,t,n)}function _i(e,t,n,r,o){var i=e.memoizedState;i===null?e.memoizedState={isBackwards:t,rendering:null,renderingStartTime:0,last:r,tail:n,tailMode:o}:(i.isBackwards=t,i.rendering=null,i.renderingStartTime=0,i.last=r,i.tail=n,i.tailMode=o)}function od(e,t,n){var r=t.pendingProps,o=r.revealOrder,i=r.tail;if(pe(e,t,r.children,n),r=V.current,r&2)r=r&1|2,t.flags|=128;else{if(e!==null&&e.flags&128)e:for(e=t.child;e!==null;){if(e.tag===13)e.memoizedState!==null&&Oa(e,n,t);else if(e.tag===19)Oa(e,n,t);else if(e.child!==null){e.child.return=e,e=e.child;continue}if(e===t)break e;for(;e.sibling===null;){if(e.return===null||e.return===t)break e;e=e.return}e.sibling.return=e.return,e=e.sibling}r&=1}if(A(V,r),!(t.mode&1))t.memoizedState=null;else switch(o){case"forwards":for(n=t.child,o=null;n!==null;)e=n.alternate,e!==null&&xo(e)===null&&(o=n),n=n.sibling;n=o,n===null?(o=t.child,t.child=null):(o=n.sibling,n.sibling=null),_i(t,!1,o,n,i);break;case"backwards":for(n=null,o=t.child,t.child=null;o!==null;){if(e=o.alternate,e!==null&&xo(e)===null){t.child=o;break}e=o.sibling,o.sibling=n,n=o,o=e}_i(t,!0,n,null,i);break;case"together":_i(t,!1,null,null,void 0);break;default:t.memoizedState=null}return t.child}function eo(e,t){!(t.mode&1)&&e!==null&&(e.alternate=null,t.alternate=null,t.flags|=2)}function rt(e,t,n){if(e!==null&&(t.dependencies=e.dependencies),Vt|=t.lanes,!(n&t.childLanes))return null;if(e!==null&&t.child!==e.child)throw Error(_(153));if(t.child!==null){for(e=t.child,n=xt(e,e.pendingProps),t.child=n,n.return=t;e.sibling!==null;)e=e.sibling,n=n.sibling=xt(e,e.pendingProps),n.return=t;n.sibling=null}return t.child}function ag(e,t,n){switch(t.tag){case 3:nd(t),kn();break;case 5:jc(t);break;case 1:ke(t.type)&&mo(t);break;case 4:ss(t,t.stateNode.containerInfo);break;case 10:var r=t.type._context,o=t.memoizedProps.value;A(vo,r._currentValue),r._currentValue=o;break;case 13:if(r=t.memoizedState,r!==null)return r.dehydrated!==null?(A(V,V.current&1),t.flags|=128,null):n&t.child.childLanes?rd(e,t,n):(A(V,V.current&1),e=rt(e,t,n),e!==null?e.sibling:null);A(V,V.current&1);break;case 19:if(r=(n&t.childLanes)!==0,e.flags&128){if(r)return od(e,t,n);t.flags|=128}if(o=t.memoizedState,o!==null&&(o.rendering=null,o.tail=null,o.lastEffect=null),A(V,V.current),r)break;return null;case 22:case 23:return t.lanes=0,ed(e,t,n)}return rt(e,t,n)}var id,ml,ld,sd;id=function(e,t){for(var n=t.child;n!==null;){if(n.tag===5||n.tag===6)e.appendChild(n.stateNode);else if(n.tag!==4&&n.child!==null){n.child.return=n,n=n.child;continue}if(n===t)break;for(;n.sibling===null;){if(n.return===null||n.return===t)return;n=n.return}n.sibling.return=n.return,n=n.sibling}};ml=function(){};ld=function(e,t,n,r){var o=e.memoizedProps;if(o!==r){e=t.stateNode,At(We.current);var i=null;switch(n){case"input":o=Ai(e,o),r=Ai(e,r),i=[];break;case"select":o=Q({},o,{value:void 0}),r=Q({},r,{value:void 0}),i=[];break;case"textarea":o=Ui(e,o),r=Ui(e,r),i=[];break;default:typeof o.onClick!="function"&&typeof r.onClick=="function"&&(e.onclick=po)}Fi(n,r);var l;n=null;for(u in o)if(!r.hasOwnProperty(u)&&o.hasOwnProperty(u)&&o[u]!=null)if(u==="style"){var s=o[u];for(l in s)s.hasOwnProperty(l)&&(n||(n={}),n[l]="")}else u!=="dangerouslySetInnerHTML"&&u!=="children"&&u!=="suppressContentEditableWarning"&&u!=="suppressHydrationWarning"&&u!=="autoFocus"&&(Xn.hasOwnProperty(u)?i||(i=[]):(i=i||[]).push(u,null));for(u in r){var a=r[u];if(s=o!=null?o[u]:void 0,r.hasOwnProperty(u)&&a!==s&&(a!=null||s!=null))if(u==="style")if(s){for(l in s)!s.hasOwnProperty(l)||a&&a.hasOwnProperty(l)||(n||(n={}),n[l]="");for(l in a)a.hasOwnProperty(l)&&s[l]!==a[l]&&(n||(n={}),n[l]=a[l])}else n||(i||(i=[]),i.push(u,n)),n=a;else u==="dangerouslySetInnerHTML"?(a=a?a.__html:void 0,s=s?s.__html:void 0,a!=null&&s!==a&&(i=i||[]).push(u,a)):u==="children"?typeof a!="string"&&typeof a!="number"||(i=i||[]).push(u,""+a):u!=="suppressContentEditableWarning"&&u!=="suppressHydrationWarning"&&(Xn.hasOwnProperty(u)?(a!=null&&u==="onScroll"&&D("scroll",e),i||s===a||(i=[])):(i=i||[]).push(u,a))}n&&(i=i||[]).push("style",n);var u=i;(t.updateQueue=u)&&(t.flags|=4)}};sd=function(e,t,n,r){n!==r&&(t.flags|=4)};function In(e,t){if(!B)switch(e.tailMode){case"hidden":t=e.tail;for(var n=null;t!==null;)t.alternate!==null&&(n=t),t=t.sibling;n===null?e.tail=null:n.sibling=null;break;case"collapsed":n=e.tail;for(var r=null;n!==null;)n.alternate!==null&&(r=n),n=n.sibling;r===null?t||e.tail===null?e.tail=null:e.tail.sibling=null:r.sibling=null}}function ce(e){var t=e.alternate!==null&&e.alternate.child===e.child,n=0,r=0;if(t)for(var o=e.child;o!==null;)n|=o.lanes|o.childLanes,r|=o.subtreeFlags&14680064,r|=o.flags&14680064,o.return=e,o=o.sibling;else for(o=e.child;o!==null;)n|=o.lanes|o.childLanes,r|=o.subtreeFlags,r|=o.flags,o.return=e,o=o.sibling;return e.subtreeFlags|=r,e.childLanes=n,t}function ug(e,t,n){var r=t.pendingProps;switch(es(t),t.tag){case 2:case 16:case 15:case 0:case 11:case 7:case 8:case 12:case 9:case 14:return ce(t),null;case 1:return ke(t.type)&&go(),ce(t),null;case 3:return r=t.stateNode,wn(),z(Se),z(fe),us(),r.pendingContext&&(r.context=r.pendingContext,r.pendingContext=null),(e===null||e.child===null)&&(Dr(t)?t.flags|=4:e===null||e.memoizedState.isDehydrated&&!(t.flags&256)||(t.flags|=1024,De!==null&&(Pl(De),De=null))),ml(e,t),ce(t),null;case 5:as(t);var o=At(cr.current);if(n=t.type,e!==null&&t.stateNode!=null)ld(e,t,n,r,o),e.ref!==t.ref&&(t.flags|=512,t.flags|=2097152);else{if(!r){if(t.stateNode===null)throw Error(_(166));return ce(t),null}if(e=At(We.current),Dr(t)){r=t.stateNode,n=t.type;var i=t.memoizedProps;switch(r[He]=t,r[ar]=i,e=(t.mode&1)!==0,n){case"dialog":D("cancel",r),D("close",r);break;case"iframe":case"object":case"embed":D("load",r);break;case"video":case"audio":for(o=0;o<Bn.length;o++)D(Bn[o],r);break;case"source":D("error",r);break;case"img":case"image":case"link":D("error",r),D("load",r);break;case"details":D("toggle",r);break;case"input":Vs(r,i),D("invalid",r);break;case"select":r._wrapperState={wasMultiple:!!i.multiple},D("invalid",r);break;case"textarea":Qs(r,i),D("invalid",r)}Fi(n,i),o=null;for(var l in i)if(i.hasOwnProperty(l)){var s=i[l];l==="children"?typeof s=="string"?r.textContent!==s&&(i.suppressHydrationWarning!==!0&&Ar(r.textContent,s,e),o=["children",s]):typeof s=="number"&&r.textContent!==""+s&&(i.suppressHydrationWarning!==!0&&Ar(r.textContent,s,e),o=["children",""+s]):Xn.hasOwnProperty(l)&&s!=null&&l==="onScroll"&&D("scroll",r)}switch(n){case"input":br(r),Hs(r,i,!0);break;case"textarea":br(r),Ws(r);break;case"select":case"option":break;default:typeof i.onClick=="function"&&(r.onclick=po)}r=o,t.updateQueue=r,r!==null&&(t.flags|=4)}else{l=o.nodeType===9?o:o.ownerDocument,e==="http://www.w3.org/1999/xhtml"&&(e=Mu(n)),e==="http://www.w3.org/1999/xhtml"?n==="script"?(e=l.createElement("div"),e.innerHTML="<script><\/script>",e=e.removeChild(e.firstChild)):typeof r.is=="string"?e=l.createElement(n,{is:r.is}):(e=l.createElement(n),n==="select"&&(l=e,r.multiple?l.multiple=!0:r.size&&(l.size=r.size))):e=l.createElementNS(e,n),e[He]=t,e[ar]=r,id(e,t,!1,!1),t.stateNode=e;e:{switch(l=Vi(n,r),n){case"dialog":D("cancel",e),D("close",e),o=r;break;case"iframe":case"object":case"embed":D("load",e),o=r;break;case"video":case"audio":for(o=0;o<Bn.length;o++)D(Bn[o],e);o=r;break;case"source":D("error",e),o=r;break;case"img":case"image":case"link":D("error",e),D("load",e),o=r;break;case"details":D("toggle",e),o=r;break;case"input":Vs(e,r),o=Ai(e,r),D("invalid",e);break;case"option":o=r;break;case"select":e._wrapperState={wasMultiple:!!r.multiple},o=Q({},r,{value:void 0}),D("invalid",e);break;case"textarea":Qs(e,r),o=Ui(e,r),D("invalid",e);break;default:o=r}Fi(n,o),s=o;for(i in s)if(s.hasOwnProperty(i)){var a=s[i];i==="style"?Du(e,a):i==="dangerouslySetInnerHTML"?(a=a?a.__html:void 0,a!=null&&Iu(e,a)):i==="children"?typeof a=="string"?(n!=="textarea"||a!=="")&&Zn(e,a):typeof a=="number"&&Zn(e,""+a):i!=="suppressContentEditableWarning"&&i!=="suppressHydrationWarning"&&i!=="autoFocus"&&(Xn.hasOwnProperty(i)?a!=null&&i==="onScroll"&&D("scroll",e):a!=null&&zl(e,i,a,l))}switch(n){case"input":br(e),Hs(e,r,!1);break;case"textarea":br(e),Ws(e);break;case"option":r.value!=null&&e.setAttribute("value",""+Pt(r.value));break;case"select":e.multiple=!!r.multiple,i=r.value,i!=null?fn(e,!!r.multiple,i,!1):r.defaultValue!=null&&fn(e,!!r.multiple,r.defaultValue,!0);break;default:typeof o.onClick=="function"&&(e.onclick=po)}switch(n){case"button":case"input":case"select":case"textarea":r=!!r.autoFocus;break e;case"img":r=!0;break e;default:r=!1}}r&&(t.flags|=4)}t.ref!==null&&(t.flags|=512,t.flags|=2097152)}return ce(t),null;case 6:if(e&&t.stateNode!=null)sd(e,t,e.memoizedProps,r);else{if(typeof r!="string"&&t.stateNode===null)throw Error(_(166));if(n=At(cr.current),At(We.current),Dr(t)){if(r=t.stateNode,n=t.memoizedProps,r[He]=t,(i=r.nodeValue!==n)&&(e=Ce,e!==null))switch(e.tag){case 3:Ar(r.nodeValue,n,(e.mode&1)!==0);break;case 5:e.memoizedProps.suppressHydrationWarning!==!0&&Ar(r.nodeValue,n,(e.mode&1)!==0)}i&&(t.flags|=4)}else r=(n.nodeType===9?n:n.ownerDocument).createTextNode(r),r[He]=t,t.stateNode=r}return ce(t),null;case 13:if(z(V),r=t.memoizedState,e===null||e.memoizedState!==null&&e.memoizedState.dehydrated!==null){if(B&&Pe!==null&&t.mode&1&&!(t.flags&128))_c(),kn(),t.flags|=98560,i=!1;else if(i=Dr(t),r!==null&&r.dehydrated!==null){if(e===null){if(!i)throw Error(_(318));if(i=t.memoizedState,i=i!==null?i.dehydrated:null,!i)throw Error(_(317));i[He]=t}else kn(),!(t.flags&128)&&(t.memoizedState=null),t.flags|=4;ce(t),i=!1}else De!==null&&(Pl(De),De=null),i=!0;if(!i)return t.flags&65536?t:null}return t.flags&128?(t.lanes=n,t):(r=r!==null,r!==(e!==null&&e.memoizedState!==null)&&r&&(t.child.flags|=8192,t.mode&1&&(e===null||V.current&1?Z===0&&(Z=3):xs())),t.updateQueue!==null&&(t.flags|=4),ce(t),null);case 4:return wn(),ml(e,t),e===null&&lr(t.stateNode.containerInfo),ce(t),null;case 10:return os(t.type._context),ce(t),null;case 17:return ke(t.type)&&go(),ce(t),null;case 19:if(z(V),i=t.memoizedState,i===null)return ce(t),null;if(r=(t.flags&128)!==0,l=i.rendering,l===null)if(r)In(i,!1);else{if(Z!==0||e!==null&&e.flags&128)for(e=t.child;e!==null;){if(l=xo(e),l!==null){for(t.flags|=128,In(i,!1),r=l.updateQueue,r!==null&&(t.updateQueue=r,t.flags|=4),t.subtreeFlags=0,r=n,n=t.child;n!==null;)i=n,e=r,i.flags&=14680066,l=i.alternate,l===null?(i.childLanes=0,i.lanes=e,i.child=null,i.subtreeFlags=0,i.memoizedProps=null,i.memoizedState=null,i.updateQueue=null,i.dependencies=null,i.stateNode=null):(i.childLanes=l.childLanes,i.lanes=l.lanes,i.child=l.child,i.subtreeFlags=0,i.deletions=null,i.memoizedProps=l.memoizedProps,i.memoizedState=l.memoizedState,i.updateQueue=l.updateQueue,i.type=l.type,e=l.dependencies,i.dependencies=e===null?null:{lanes:e.lanes,firstContext:e.firstContext}),n=n.sibling;return A(V,V.current&1|2),t.child}e=e.sibling}i.tail!==null&&G()>Cn&&(t.flags|=128,r=!0,In(i,!1),t.lanes=4194304)}else{if(!r)if(e=xo(l),e!==null){if(t.flags|=128,r=!0,n=e.updateQueue,n!==null&&(t.updateQueue=n,t.flags|=4),In(i,!0),i.tail===null&&i.tailMode==="hidden"&&!l.alternate&&!B)return ce(t),null}else 2*G()-i.renderingStartTime>Cn&&n!==1073741824&&(t.flags|=128,r=!0,In(i,!1),t.lanes=4194304);i.isBackwards?(l.sibling=t.child,t.child=l):(n=i.last,n!==null?n.sibling=l:t.child=l,i.last=l)}return i.tail!==null?(t=i.tail,i.rendering=t,i.tail=t.sibling,i.renderingStartTime=G(),t.sibling=null,n=V.current,A(V,r?n&1|2:n&1),t):(ce(t),null);case 22:case 23:return ks(),r=t.memoizedState!==null,e!==null&&e.memoizedState!==null!==r&&(t.flags|=8192),r&&t.mode&1?we&1073741824&&(ce(t),t.subtreeFlags&6&&(t.flags|=8192)):ce(t),null;case 24:return null;case 25:return null}throw Error(_(156,t.tag))}function cg(e,t){switch(es(t),t.tag){case 1:return ke(t.type)&&go(),e=t.flags,e&65536?(t.flags=e&-65537|128,t):null;case 3:return wn(),z(Se),z(fe),us(),e=t.flags,e&65536&&!(e&128)?(t.flags=e&-65537|128,t):null;case 5:return as(t),null;case 13:if(z(V),e=t.memoizedState,e!==null&&e.dehydrated!==null){if(t.alternate===null)throw Error(_(340));kn()}return e=t.flags,e&65536?(t.flags=e&-65537|128,t):null;case 19:return z(V),null;case 4:return wn(),null;case 10:return os(t.type._context),null;case 22:case 23:return ks(),null;case 24:return null;default:return null}}var Br=!1,de=!1,dg=typeof WeakSet=="function"?WeakSet:Set,T=null;function cn(e,t){var n=e.ref;if(n!==null)if(typeof n=="function")try{n(null)}catch(r){K(e,t,r)}else n.current=null}function hl(e,t,n){try{n()}catch(r){K(e,t,r)}}var Ma=!1;function fg(e,t){if(Zi=uo,e=fc(),Xl(e)){if("selectionStart"in e)var n={start:e.selectionStart,end:e.selectionEnd};else e:{n=(n=e.ownerDocument)&&n.defaultView||window;var r=n.getSelection&&n.getSelection();if(r&&r.rangeCount!==0){n=r.anchorNode;var o=r.anchorOffset,i=r.focusNode;r=r.focusOffset;try{n.nodeType,i.nodeType}catch{n=null;break e}var l=0,s=-1,a=-1,u=0,p=0,c=e,g=null;t:for(;;){for(var y;c!==n||o!==0&&c.nodeType!==3||(s=l+o),c!==i||r!==0&&c.nodeType!==3||(a=l+r),c.nodeType===3&&(l+=c.nodeValue.length),(y=c.firstChild)!==null;)g=c,c=y;for(;;){if(c===e)break t;if(g===n&&++u===o&&(s=l),g===i&&++p===r&&(a=l),(y=c.nextSibling)!==null)break;c=g,g=c.parentNode}c=y}n=s===-1||a===-1?null:{start:s,end:a}}else n=null}n=n||{start:0,end:0}}else n=null;for(el={focusedElem:e,selectionRange:n},uo=!1,T=t;T!==null;)if(t=T,e=t.child,(t.subtreeFlags&1028)!==0&&e!==null)e.return=t,T=e;else for(;T!==null;){t=T;try{var S=t.alternate;if(t.flags&1024)switch(t.tag){case 0:case 11:case 15:break;case 1:if(S!==null){var w=S.memoizedProps,k=S.memoizedState,m=t.stateNode,d=m.getSnapshotBeforeUpdate(t.elementType===t.type?w:Ie(t.type,w),k);m.__reactInternalSnapshotBeforeUpdate=d}break;case 3:var h=t.stateNode.containerInfo;h.nodeType===1?h.textContent="":h.nodeType===9&&h.documentElement&&h.removeChild(h.documentElement);break;case 5:case 6:case 4:case 17:break;default:throw Error(_(163))}}catch(x){K(t,t.return,x)}if(e=t.sibling,e!==null){e.return=t.return,T=e;break}T=t.return}return S=Ma,Ma=!1,S}function Gn(e,t,n){var r=t.updateQueue;if(r=r!==null?r.lastEffect:null,r!==null){var o=r=r.next;do{if((o.tag&e)===e){var i=o.destroy;o.destroy=void 0,i!==void 0&&hl(t,n,i)}o=o.next}while(o!==r)}}function zo(e,t){if(t=t.updateQueue,t=t!==null?t.lastEffect:null,t!==null){var n=t=t.next;do{if((n.tag&e)===e){var r=n.create;n.destroy=r()}n=n.next}while(n!==t)}}function yl(e){var t=e.ref;if(t!==null){var n=e.stateNode;switch(e.tag){case 5:e=n;break;default:e=n}typeof t=="function"?t(e):t.current=e}}function ad(e){var t=e.alternate;t!==null&&(e.alternate=null,ad(t)),e.child=null,e.deletions=null,e.sibling=null,e.tag===5&&(t=e.stateNode,t!==null&&(delete t[He],delete t[ar],delete t[rl],delete t[qp],delete t[Gp])),e.stateNode=null,e.return=null,e.dependencies=null,e.memoizedProps=null,e.memoizedState=null,e.pendingProps=null,e.stateNode=null,e.updateQueue=null}function ud(e){return e.tag===5||e.tag===3||e.tag===4}function Ia(e){e:for(;;){for(;e.sibling===null;){if(e.return===null||ud(e.return))return null;e=e.return}for(e.sibling.return=e.return,e=e.sibling;e.tag!==5&&e.tag!==6&&e.tag!==18;){if(e.flags&2||e.child===null||e.tag===4)continue e;e.child.return=e,e=e.child}if(!(e.flags&2))return e.stateNode}}function vl(e,t,n){var r=e.tag;if(r===5||r===6)e=e.stateNode,t?n.nodeType===8?n.parentNode.insertBefore(e,t):n.insertBefore(e,t):(n.nodeType===8?(t=n.parentNode,t.insertBefore(e,n)):(t=n,t.appendChild(e)),n=n._reactRootContainer,n!=null||t.onclick!==null||(t.onclick=po));else if(r!==4&&(e=e.child,e!==null))for(vl(e,t,n),e=e.sibling;e!==null;)vl(e,t,n),e=e.sibling}function Sl(e,t,n){var r=e.tag;if(r===5||r===6)e=e.stateNode,t?n.insertBefore(e,t):n.appendChild(e);else if(r!==4&&(e=e.child,e!==null))for(Sl(e,t,n),e=e.sibling;e!==null;)Sl(e,t,n),e=e.sibling}var ie=null,Ae=!1;function lt(e,t,n){for(n=n.child;n!==null;)cd(e,t,n),n=n.sibling}function cd(e,t,n){if(Qe&&typeof Qe.onCommitFiberUnmount=="function")try{Qe.onCommitFiberUnmount($o,n)}catch{}switch(n.tag){case 5:de||cn(n,t);case 6:var r=ie,o=Ae;ie=null,lt(e,t,n),ie=r,Ae=o,ie!==null&&(Ae?(e=ie,n=n.stateNode,e.nodeType===8?e.parentNode.removeChild(n):e.removeChild(n)):ie.removeChild(n.stateNode));break;case 18:ie!==null&&(Ae?(e=ie,n=n.stateNode,e.nodeType===8?vi(e.parentNode,n):e.nodeType===1&&vi(e,n),rr(e)):vi(ie,n.stateNode));break;case 4:r=ie,o=Ae,ie=n.stateNode.containerInfo,Ae=!0,lt(e,t,n),ie=r,Ae=o;break;case 0:case 11:case 14:case 15:if(!de&&(r=n.updateQueue,r!==null&&(r=r.lastEffect,r!==null))){o=r=r.next;do{var i=o,l=i.destroy;i=i.tag,l!==void 0&&(i&2||i&4)&&hl(n,t,l),o=o.next}while(o!==r)}lt(e,t,n);break;case 1:if(!de&&(cn(n,t),r=n.stateNode,typeof r.componentWillUnmount=="function"))try{r.props=n.memoizedProps,r.state=n.memoizedState,r.componentWillUnmount()}catch(s){K(n,t,s)}lt(e,t,n);break;case 21:lt(e,t,n);break;case 22:n.mode&1?(de=(r=de)||n.memoizedState!==null,lt(e,t,n),de=r):lt(e,t,n);break;default:lt(e,t,n)}}function Aa(e){var t=e.updateQueue;if(t!==null){e.updateQueue=null;var n=e.stateNode;n===null&&(n=e.stateNode=new dg),t.forEach(function(r){var o=xg.bind(null,e,r);n.has(r)||(n.add(r),r.then(o,o))})}}function Me(e,t){var n=t.deletions;if(n!==null)for(var r=0;r<n.length;r++){var o=n[r];try{var i=e,l=t,s=l;e:for(;s!==null;){switch(s.tag){case 5:ie=s.stateNode,Ae=!1;break e;case 3:ie=s.stateNode.containerInfo,Ae=!0;break e;case 4:ie=s.stateNode.containerInfo,Ae=!0;break e}s=s.return}if(ie===null)throw Error(_(160));cd(i,l,o),ie=null,Ae=!1;var a=o.alternate;a!==null&&(a.return=null),o.return=null}catch(u){K(o,t,u)}}if(t.subtreeFlags&12854)for(t=t.child;t!==null;)dd(t,e),t=t.sibling}function dd(e,t){var n=e.alternate,r=e.flags;switch(e.tag){case 0:case 11:case 14:case 15:if(Me(t,e),Fe(e),r&4){try{Gn(3,e,e.return),zo(3,e)}catch(w){K(e,e.return,w)}try{Gn(5,e,e.return)}catch(w){K(e,e.return,w)}}break;case 1:Me(t,e),Fe(e),r&512&&n!==null&&cn(n,n.return);break;case 5:if(Me(t,e),Fe(e),r&512&&n!==null&&cn(n,n.return),e.flags&32){var o=e.stateNode;try{Zn(o,"")}catch(w){K(e,e.return,w)}}if(r&4&&(o=e.stateNode,o!=null)){var i=e.memoizedProps,l=n!==null?n.memoizedProps:i,s=e.type,a=e.updateQueue;if(e.updateQueue=null,a!==null)try{s==="input"&&i.type==="radio"&&i.name!=null&&Lu(o,i),Vi(s,l);var u=Vi(s,i);for(l=0;l<a.length;l+=2){var p=a[l],c=a[l+1];p==="style"?Du(o,c):p==="dangerouslySetInnerHTML"?Iu(o,c):p==="children"?Zn(o,c):zl(o,p,c,u)}switch(s){case"input":Di(o,i);break;case"textarea":Ou(o,i);break;case"select":var g=o._wrapperState.wasMultiple;o._wrapperState.wasMultiple=!!i.multiple;var y=i.value;y!=null?fn(o,!!i.multiple,y,!1):g!==!!i.multiple&&(i.defaultValue!=null?fn(o,!!i.multiple,i.defaultValue,!0):fn(o,!!i.multiple,i.multiple?[]:"",!1))}o[ar]=i}catch(w){K(e,e.return,w)}}break;case 6:if(Me(t,e),Fe(e),r&4){if(e.stateNode===null)throw Error(_(162));o=e.stateNode,i=e.memoizedProps;try{o.nodeValue=i}catch(w){K(e,e.return,w)}}break;case 3:if(Me(t,e),Fe(e),r&4&&n!==null&&n.memoizedState.isDehydrated)try{rr(t.containerInfo)}catch(w){K(e,e.return,w)}break;case 4:Me(t,e),Fe(e);break;case 13:Me(t,e),Fe(e),o=e.child,o.flags&8192&&(i=o.memoizedState!==null,o.stateNode.isHidden=i,!i||o.alternate!==null&&o.alternate.memoizedState!==null||(vs=G())),r&4&&Aa(e);break;case 22:if(p=n!==null&&n.memoizedState!==null,e.mode&1?(de=(u=de)||p,Me(t,e),de=u):Me(t,e),Fe(e),r&8192){if(u=e.memoizedState!==null,(e.stateNode.isHidden=u)&&!p&&e.mode&1)for(T=e,p=e.child;p!==null;){for(c=T=p;T!==null;){switch(g=T,y=g.child,g.tag){case 0:case 11:case 14:case 15:Gn(4,g,g.return);break;case 1:cn(g,g.return);var S=g.stateNode;if(typeof S.componentWillUnmount=="function"){r=g,n=g.return;try{t=r,S.props=t.memoizedProps,S.state=t.memoizedState,S.componentWillUnmount()}catch(w){K(r,n,w)}}break;case 5:cn(g,g.return);break;case 22:if(g.memoizedState!==null){za(c);continue}}y!==null?(y.return=g,T=y):za(c)}p=p.sibling}e:for(p=null,c=e;;){if(c.tag===5){if(p===null){p=c;try{o=c.stateNode,u?(i=o.style,typeof i.setProperty=="function"?i.setProperty("display","none","important"):i.display="none"):(s=c.stateNode,a=c.memoizedProps.style,l=a!=null&&a.hasOwnProperty("display")?a.display:null,s.style.display=Au("display",l))}catch(w){K(e,e.return,w)}}}else if(c.tag===6){if(p===null)try{c.stateNode.nodeValue=u?"":c.memoizedProps}catch(w){K(e,e.return,w)}}else if((c.tag!==22&&c.tag!==23||c.memoizedState===null||c===e)&&c.child!==null){c.child.return=c,c=c.child;continue}if(c===e)break e;for(;c.sibling===null;){if(c.return===null||c.return===e)break e;p===c&&(p=null),c=c.return}p===c&&(p=null),c.sibling.return=c.return,c=c.sibling}}break;case 19:Me(t,e),Fe(e),r&4&&Aa(e);break;case 21:break;default:Me(t,e),Fe(e)}}function Fe(e){var t=e.flags;if(t&2){try{e:{for(var n=e.return;n!==null;){if(ud(n)){var r=n;break e}n=n.return}throw Error(_(160))}switch(r.tag){case 5:var o=r.stateNode;r.flags&32&&(Zn(o,""),r.flags&=-33);var i=Ia(e);Sl(e,i,o);break;case 3:case 4:var l=r.stateNode.containerInfo,s=Ia(e);vl(e,s,l);break;default:throw Error(_(161))}}catch(a){K(e,e.return,a)}e.flags&=-3}t&4096&&(e.flags&=-4097)}function pg(e,t,n){T=e,fd(e)}function fd(e,t,n){for(var r=(e.mode&1)!==0;T!==null;){var o=T,i=o.child;if(o.tag===22&&r){var l=o.memoizedState!==null||Br;if(!l){var s=o.alternate,a=s!==null&&s.memoizedState!==null||de;s=Br;var u=de;if(Br=l,(de=a)&&!u)for(T=o;T!==null;)l=T,a=l.child,l.tag===22&&l.memoizedState!==null?Ua(o):a!==null?(a.return=l,T=a):Ua(o);for(;i!==null;)T=i,fd(i),i=i.sibling;T=o,Br=s,de=u}Da(e)}else o.subtreeFlags&8772&&i!==null?(i.return=o,T=i):Da(e)}}function Da(e){for(;T!==null;){var t=T;if(t.flags&8772){var n=t.alternate;try{if(t.flags&8772)switch(t.tag){case 0:case 11:case 15:de||zo(5,t);break;case 1:var r=t.stateNode;if(t.flags&4&&!de)if(n===null)r.componentDidMount();else{var o=t.elementType===t.type?n.memoizedProps:Ie(t.type,n.memoizedProps);r.componentDidUpdate(o,n.memoizedState,r.__reactInternalSnapshotBeforeUpdate)}var i=t.updateQueue;i!==null&&wa(t,i,r);break;case 3:var l=t.updateQueue;if(l!==null){if(n=null,t.child!==null)switch(t.child.tag){case 5:n=t.child.stateNode;break;case 1:n=t.child.stateNode}wa(t,l,n)}break;case 5:var s=t.stateNode;if(n===null&&t.flags&4){n=s;var a=t.memoizedProps;switch(t.type){case"button":case"input":case"select":case"textarea":a.autoFocus&&n.focus();break;case"img":a.src&&(n.src=a.src)}}break;case 6:break;case 4:break;case 12:break;case 13:if(t.memoizedState===null){var u=t.alternate;if(u!==null){var p=u.memoizedState;if(p!==null){var c=p.dehydrated;c!==null&&rr(c)}}}break;case 19:case 17:case 21:case 22:case 23:case 25:break;default:throw Error(_(163))}de||t.flags&512&&yl(t)}catch(g){K(t,t.return,g)}}if(t===e){T=null;break}if(n=t.sibling,n!==null){n.return=t.return,T=n;break}T=t.return}}function za(e){for(;T!==null;){var t=T;if(t===e){T=null;break}var n=t.sibling;if(n!==null){n.return=t.return,T=n;break}T=t.return}}function Ua(e){for(;T!==null;){var t=T;try{switch(t.tag){case 0:case 11:case 15:var n=t.return;try{zo(4,t)}catch(a){K(t,n,a)}break;case 1:var r=t.stateNode;if(typeof r.componentDidMount=="function"){var o=t.return;try{r.componentDidMount()}catch(a){K(t,o,a)}}var i=t.return;try{yl(t)}catch(a){K(t,i,a)}break;case 5:var l=t.return;try{yl(t)}catch(a){K(t,l,a)}}}catch(a){K(t,t.return,a)}if(t===e){T=null;break}var s=t.sibling;if(s!==null){s.return=t.return,T=s;break}T=t.return}}var gg=Math.ceil,Co=ot.ReactCurrentDispatcher,hs=ot.ReactCurrentOwner,Ne=ot.ReactCurrentBatchConfig,O=0,re=null,Y=null,le=0,we=0,dn=Et(0),Z=0,gr=null,Vt=0,Uo=0,ys=0,Jn=null,ye=null,vs=0,Cn=1/0,qe=null,_o=!1,kl=null,St=null,Fr=!1,ft=null,Eo=0,Yn=0,xl=null,to=-1,no=0;function ge(){return O&6?G():to!==-1?to:to=G()}function kt(e){return e.mode&1?O&2&&le!==0?le&-le:Yp.transition!==null?(no===0&&(no=Ju()),no):(e=I,e!==0||(e=window.event,e=e===void 0?16:rc(e.type)),e):1}function Ue(e,t,n,r){if(50<Yn)throw Yn=0,xl=null,Error(_(185));Sr(e,n,r),(!(O&2)||e!==re)&&(e===re&&(!(O&2)&&(Uo|=n),Z===4&&ct(e,le)),xe(e,r),n===1&&O===0&&!(t.mode&1)&&(Cn=G()+500,Io&&Rt()))}function xe(e,t){var n=e.callbackNode;Yf(e,t);var r=ao(e,e===re?le:0);if(r===0)n!==null&&Gs(n),e.callbackNode=null,e.callbackPriority=0;else if(t=r&-r,e.callbackPriority!==t){if(n!=null&&Gs(n),t===1)e.tag===0?Jp(Ba.bind(null,e)):wc(Ba.bind(null,e)),Wp(function(){!(O&6)&&Rt()}),n=null;else{switch(Yu(r)){case 1:n=Hl;break;case 4:n=qu;break;case 16:n=so;break;case 536870912:n=Gu;break;default:n=so}n=kd(n,pd.bind(null,e))}e.callbackPriority=t,e.callbackNode=n}}function pd(e,t){if(to=-1,no=0,O&6)throw Error(_(327));var n=e.callbackNode;if(yn()&&e.callbackNode!==n)return null;var r=ao(e,e===re?le:0);if(r===0)return null;if(r&30||r&e.expiredLanes||t)t=Ro(e,r);else{t=r;var o=O;O|=2;var i=md();(re!==e||le!==t)&&(qe=null,Cn=G()+500,Dt(e,t));do try{yg();break}catch(s){gd(e,s)}while(!0);rs(),Co.current=i,O=o,Y!==null?t=0:(re=null,le=0,t=Z)}if(t!==0){if(t===2&&(o=qi(e),o!==0&&(r=o,t=wl(e,o))),t===1)throw n=gr,Dt(e,0),ct(e,r),xe(e,G()),n;if(t===6)ct(e,r);else{if(o=e.current.alternate,!(r&30)&&!mg(o)&&(t=Ro(e,r),t===2&&(i=qi(e),i!==0&&(r=i,t=wl(e,i))),t===1))throw n=gr,Dt(e,0),ct(e,r),xe(e,G()),n;switch(e.finishedWork=o,e.finishedLanes=r,t){case 0:case 1:throw Error(_(345));case 2:Ot(e,ye,qe);break;case 3:if(ct(e,r),(r&130023424)===r&&(t=vs+500-G(),10<t)){if(ao(e,0)!==0)break;if(o=e.suspendedLanes,(o&r)!==r){ge(),e.pingedLanes|=e.suspendedLanes&o;break}e.timeoutHandle=nl(Ot.bind(null,e,ye,qe),t);break}Ot(e,ye,qe);break;case 4:if(ct(e,r),(r&4194240)===r)break;for(t=e.eventTimes,o=-1;0<r;){var l=31-ze(r);i=1<<l,l=t[l],l>o&&(o=l),r&=~i}if(r=o,r=G()-r,r=(120>r?120:480>r?480:1080>r?1080:1920>r?1920:3e3>r?3e3:4320>r?4320:1960*gg(r/1960))-r,10<r){e.timeoutHandle=nl(Ot.bind(null,e,ye,qe),r);break}Ot(e,ye,qe);break;case 5:Ot(e,ye,qe);break;default:throw Error(_(329))}}}return xe(e,G()),e.callbackNode===n?pd.bind(null,e):null}function wl(e,t){var n=Jn;return e.current.memoizedState.isDehydrated&&(Dt(e,t).flags|=256),e=Ro(e,t),e!==2&&(t=ye,ye=n,t!==null&&Pl(t)),e}function Pl(e){ye===null?ye=e:ye.push.apply(ye,e)}function mg(e){for(var t=e;;){if(t.flags&16384){var n=t.updateQueue;if(n!==null&&(n=n.stores,n!==null))for(var r=0;r<n.length;r++){var o=n[r],i=o.getSnapshot;o=o.value;try{if(!Be(i(),o))return!1}catch{return!1}}}if(n=t.child,t.subtreeFlags&16384&&n!==null)n.return=t,t=n;else{if(t===e)break;for(;t.sibling===null;){if(t.return===null||t.return===e)return!0;t=t.return}t.sibling.return=t.return,t=t.sibling}}return!0}function ct(e,t){for(t&=~ys,t&=~Uo,e.suspendedLanes|=t,e.pingedLanes&=~t,e=e.expirationTimes;0<t;){var n=31-ze(t),r=1<<n;e[n]=-1,t&=~r}}function Ba(e){if(O&6)throw Error(_(327));yn();var t=ao(e,0);if(!(t&1))return xe(e,G()),null;var n=Ro(e,t);if(e.tag!==0&&n===2){var r=qi(e);r!==0&&(t=r,n=wl(e,r))}if(n===1)throw n=gr,Dt(e,0),ct(e,t),xe(e,G()),n;if(n===6)throw Error(_(345));return e.finishedWork=e.current.alternate,e.finishedLanes=t,Ot(e,ye,qe),xe(e,G()),null}function Ss(e,t){var n=O;O|=1;try{return e(t)}finally{O=n,O===0&&(Cn=G()+500,Io&&Rt())}}function Ht(e){ft!==null&&ft.tag===0&&!(O&6)&&yn();var t=O;O|=1;var n=Ne.transition,r=I;try{if(Ne.transition=null,I=1,e)return e()}finally{I=r,Ne.transition=n,O=t,!(O&6)&&Rt()}}function ks(){we=dn.current,z(dn)}function Dt(e,t){e.finishedWork=null,e.finishedLanes=0;var n=e.timeoutHandle;if(n!==-1&&(e.timeoutHandle=-1,Qp(n)),Y!==null)for(n=Y.return;n!==null;){var r=n;switch(es(r),r.tag){case 1:r=r.type.childContextTypes,r!=null&&go();break;case 3:wn(),z(Se),z(fe),us();break;case 5:as(r);break;case 4:wn();break;case 13:z(V);break;case 19:z(V);break;case 10:os(r.type._context);break;case 22:case 23:ks()}n=n.return}if(re=e,Y=e=xt(e.current,null),le=we=t,Z=0,gr=null,ys=Uo=Vt=0,ye=Jn=null,It!==null){for(t=0;t<It.length;t++)if(n=It[t],r=n.interleaved,r!==null){n.interleaved=null;var o=r.next,i=n.pending;if(i!==null){var l=i.next;i.next=o,r.next=l}n.pending=r}It=null}return e}function gd(e,t){do{var n=Y;try{if(rs(),Xr.current=Po,wo){for(var r=H.memoizedState;r!==null;){var o=r.queue;o!==null&&(o.pending=null),r=r.next}wo=!1}if(Ft=0,ne=X=H=null,qn=!1,dr=0,hs.current=null,n===null||n.return===null){Z=1,gr=t,Y=null;break}e:{var i=e,l=n.return,s=n,a=t;if(t=le,s.flags|=32768,a!==null&&typeof a=="object"&&typeof a.then=="function"){var u=a,p=s,c=p.tag;if(!(p.mode&1)&&(c===0||c===11||c===15)){var g=p.alternate;g?(p.updateQueue=g.updateQueue,p.memoizedState=g.memoizedState,p.lanes=g.lanes):(p.updateQueue=null,p.memoizedState=null)}var y=Ta(l);if(y!==null){y.flags&=-257,ba(y,l,s,i,t),y.mode&1&&Ra(i,u,t),t=y,a=u;var S=t.updateQueue;if(S===null){var w=new Set;w.add(a),t.updateQueue=w}else S.add(a);break e}else{if(!(t&1)){Ra(i,u,t),xs();break e}a=Error(_(426))}}else if(B&&s.mode&1){var k=Ta(l);if(k!==null){!(k.flags&65536)&&(k.flags|=256),ba(k,l,s,i,t),ts(Pn(a,s));break e}}i=a=Pn(a,s),Z!==4&&(Z=2),Jn===null?Jn=[i]:Jn.push(i),i=l;do{switch(i.tag){case 3:i.flags|=65536,t&=-t,i.lanes|=t;var m=Yc(i,a,t);xa(i,m);break e;case 1:s=a;var d=i.type,h=i.stateNode;if(!(i.flags&128)&&(typeof d.getDerivedStateFromError=="function"||h!==null&&typeof h.componentDidCatch=="function"&&(St===null||!St.has(h)))){i.flags|=65536,t&=-t,i.lanes|=t;var x=Xc(i,s,t);xa(i,x);break e}}i=i.return}while(i!==null)}yd(n)}catch(E){t=E,Y===n&&n!==null&&(Y=n=n.return);continue}break}while(!0)}function md(){var e=Co.current;return Co.current=Po,e===null?Po:e}function xs(){(Z===0||Z===3||Z===2)&&(Z=4),re===null||!(Vt&268435455)&&!(Uo&268435455)||ct(re,le)}function Ro(e,t){var n=O;O|=2;var r=md();(re!==e||le!==t)&&(qe=null,Dt(e,t));do try{hg();break}catch(o){gd(e,o)}while(!0);if(rs(),O=n,Co.current=r,Y!==null)throw Error(_(261));return re=null,le=0,Z}function hg(){for(;Y!==null;)hd(Y)}function yg(){for(;Y!==null&&!Ff();)hd(Y)}function hd(e){var t=Sd(e.alternate,e,we);e.memoizedProps=e.pendingProps,t===null?yd(e):Y=t,hs.current=null}function yd(e){var t=e;do{var n=t.alternate;if(e=t.return,t.flags&32768){if(n=cg(n,t),n!==null){n.flags&=32767,Y=n;return}if(e!==null)e.flags|=32768,e.subtreeFlags=0,e.deletions=null;else{Z=6,Y=null;return}}else if(n=ug(n,t,we),n!==null){Y=n;return}if(t=t.sibling,t!==null){Y=t;return}Y=t=e}while(t!==null);Z===0&&(Z=5)}function Ot(e,t,n){var r=I,o=Ne.transition;try{Ne.transition=null,I=1,vg(e,t,n,r)}finally{Ne.transition=o,I=r}return null}function vg(e,t,n,r){do yn();while(ft!==null);if(O&6)throw Error(_(327));n=e.finishedWork;var o=e.finishedLanes;if(n===null)return null;if(e.finishedWork=null,e.finishedLanes=0,n===e.current)throw Error(_(177));e.callbackNode=null,e.callbackPriority=0;var i=n.lanes|n.childLanes;if(Xf(e,i),e===re&&(Y=re=null,le=0),!(n.subtreeFlags&2064)&&!(n.flags&2064)||Fr||(Fr=!0,kd(so,function(){return yn(),null})),i=(n.flags&15990)!==0,n.subtreeFlags&15990||i){i=Ne.transition,Ne.transition=null;var l=I;I=1;var s=O;O|=4,hs.current=null,fg(e,n),dd(n,e),Dp(el),uo=!!Zi,el=Zi=null,e.current=n,pg(n),Vf(),O=s,I=l,Ne.transition=i}else e.current=n;if(Fr&&(Fr=!1,ft=e,Eo=o),i=e.pendingLanes,i===0&&(St=null),Wf(n.stateNode),xe(e,G()),t!==null)for(r=e.onRecoverableError,n=0;n<t.length;n++)o=t[n],r(o.value,{componentStack:o.stack,digest:o.digest});if(_o)throw _o=!1,e=kl,kl=null,e;return Eo&1&&e.tag!==0&&yn(),i=e.pendingLanes,i&1?e===xl?Yn++:(Yn=0,xl=e):Yn=0,Rt(),null}function yn(){if(ft!==null){var e=Yu(Eo),t=Ne.transition,n=I;try{if(Ne.transition=null,I=16>e?16:e,ft===null)var r=!1;else{if(e=ft,ft=null,Eo=0,O&6)throw Error(_(331));var o=O;for(O|=4,T=e.current;T!==null;){var i=T,l=i.child;if(T.flags&16){var s=i.deletions;if(s!==null){for(var a=0;a<s.length;a++){var u=s[a];for(T=u;T!==null;){var p=T;switch(p.tag){case 0:case 11:case 15:Gn(8,p,i)}var c=p.child;if(c!==null)c.return=p,T=c;else for(;T!==null;){p=T;var g=p.sibling,y=p.return;if(ad(p),p===u){T=null;break}if(g!==null){g.return=y,T=g;break}T=y}}}var S=i.alternate;if(S!==null){var w=S.child;if(w!==null){S.child=null;do{var k=w.sibling;w.sibling=null,w=k}while(w!==null)}}T=i}}if(i.subtreeFlags&2064&&l!==null)l.return=i,T=l;else e:for(;T!==null;){if(i=T,i.flags&2048)switch(i.tag){case 0:case 11:case 15:Gn(9,i,i.return)}var m=i.sibling;if(m!==null){m.return=i.return,T=m;break e}T=i.return}}var d=e.current;for(T=d;T!==null;){l=T;var h=l.child;if(l.subtreeFlags&2064&&h!==null)h.return=l,T=h;else e:for(l=d;T!==null;){if(s=T,s.flags&2048)try{switch(s.tag){case 0:case 11:case 15:zo(9,s)}}catch(E){K(s,s.return,E)}if(s===l){T=null;break e}var x=s.sibling;if(x!==null){x.return=s.return,T=x;break e}T=s.return}}if(O=o,Rt(),Qe&&typeof Qe.onPostCommitFiberRoot=="function")try{Qe.onPostCommitFiberRoot($o,e)}catch{}r=!0}return r}finally{I=n,Ne.transition=t}}return!1}function Fa(e,t,n){t=Pn(n,t),t=Yc(e,t,1),e=vt(e,t,1),t=ge(),e!==null&&(Sr(e,1,t),xe(e,t))}function K(e,t,n){if(e.tag===3)Fa(e,e,n);else for(;t!==null;){if(t.tag===3){Fa(t,e,n);break}else if(t.tag===1){var r=t.stateNode;if(typeof t.type.getDerivedStateFromError=="function"||typeof r.componentDidCatch=="function"&&(St===null||!St.has(r))){e=Pn(n,e),e=Xc(t,e,1),t=vt(t,e,1),e=ge(),t!==null&&(Sr(t,1,e),xe(t,e));break}}t=t.return}}function Sg(e,t,n){var r=e.pingCache;r!==null&&r.delete(t),t=ge(),e.pingedLanes|=e.suspendedLanes&n,re===e&&(le&n)===n&&(Z===4||Z===3&&(le&130023424)===le&&500>G()-vs?Dt(e,0):ys|=n),xe(e,t)}function vd(e,t){t===0&&(e.mode&1?(t=Nr,Nr<<=1,!(Nr&130023424)&&(Nr=4194304)):t=1);var n=ge();e=nt(e,t),e!==null&&(Sr(e,t,n),xe(e,n))}function kg(e){var t=e.memoizedState,n=0;t!==null&&(n=t.retryLane),vd(e,n)}function xg(e,t){var n=0;switch(e.tag){case 13:var r=e.stateNode,o=e.memoizedState;o!==null&&(n=o.retryLane);break;case 19:r=e.stateNode;break;default:throw Error(_(314))}r!==null&&r.delete(t),vd(e,n)}var Sd;Sd=function(e,t,n){if(e!==null)if(e.memoizedProps!==t.pendingProps||Se.current)ve=!0;else{if(!(e.lanes&n)&&!(t.flags&128))return ve=!1,ag(e,t,n);ve=!!(e.flags&131072)}else ve=!1,B&&t.flags&1048576&&Pc(t,yo,t.index);switch(t.lanes=0,t.tag){case 2:var r=t.type;eo(e,t),e=t.pendingProps;var o=Sn(t,fe.current);hn(t,n),o=ds(null,t,r,e,o,n);var i=fs();return t.flags|=1,typeof o=="object"&&o!==null&&typeof o.render=="function"&&o.$$typeof===void 0?(t.tag=1,t.memoizedState=null,t.updateQueue=null,ke(r)?(i=!0,mo(t)):i=!1,t.memoizedState=o.state!==null&&o.state!==void 0?o.state:null,ls(t),o.updater=Do,t.stateNode=o,o._reactInternals=t,ul(t,r,e,n),t=fl(null,t,r,!0,i,n)):(t.tag=0,B&&i&&Zl(t),pe(null,t,o,n),t=t.child),t;case 16:r=t.elementType;e:{switch(eo(e,t),e=t.pendingProps,o=r._init,r=o(r._payload),t.type=r,o=t.tag=Pg(r),e=Ie(r,e),o){case 0:t=dl(null,t,r,e,n);break e;case 1:t=Na(null,t,r,e,n);break e;case 11:t=ja(null,t,r,e,n);break e;case 14:t=$a(null,t,r,Ie(r.type,e),n);break e}throw Error(_(306,r,""))}return t;case 0:return r=t.type,o=t.pendingProps,o=t.elementType===r?o:Ie(r,o),dl(e,t,r,o,n);case 1:return r=t.type,o=t.pendingProps,o=t.elementType===r?o:Ie(r,o),Na(e,t,r,o,n);case 3:e:{if(nd(t),e===null)throw Error(_(387));r=t.pendingProps,i=t.memoizedState,o=i.element,bc(e,t),ko(t,r,null,n);var l=t.memoizedState;if(r=l.element,i.isDehydrated)if(i={element:r,isDehydrated:!1,cache:l.cache,pendingSuspenseBoundaries:l.pendingSuspenseBoundaries,transitions:l.transitions},t.updateQueue.baseState=i,t.memoizedState=i,t.flags&256){o=Pn(Error(_(423)),t),t=La(e,t,r,n,o);break e}else if(r!==o){o=Pn(Error(_(424)),t),t=La(e,t,r,n,o);break e}else for(Pe=yt(t.stateNode.containerInfo.firstChild),Ce=t,B=!0,De=null,n=Rc(t,null,r,n),t.child=n;n;)n.flags=n.flags&-3|4096,n=n.sibling;else{if(kn(),r===o){t=rt(e,t,n);break e}pe(e,t,r,n)}t=t.child}return t;case 5:return jc(t),e===null&&ll(t),r=t.type,o=t.pendingProps,i=e!==null?e.memoizedProps:null,l=o.children,tl(r,o)?l=null:i!==null&&tl(r,i)&&(t.flags|=32),td(e,t),pe(e,t,l,n),t.child;case 6:return e===null&&ll(t),null;case 13:return rd(e,t,n);case 4:return ss(t,t.stateNode.containerInfo),r=t.pendingProps,e===null?t.child=xn(t,null,r,n):pe(e,t,r,n),t.child;case 11:return r=t.type,o=t.pendingProps,o=t.elementType===r?o:Ie(r,o),ja(e,t,r,o,n);case 7:return pe(e,t,t.pendingProps,n),t.child;case 8:return pe(e,t,t.pendingProps.children,n),t.child;case 12:return pe(e,t,t.pendingProps.children,n),t.child;case 10:e:{if(r=t.type._context,o=t.pendingProps,i=t.memoizedProps,l=o.value,A(vo,r._currentValue),r._currentValue=l,i!==null)if(Be(i.value,l)){if(i.children===o.children&&!Se.current){t=rt(e,t,n);break e}}else for(i=t.child,i!==null&&(i.return=t);i!==null;){var s=i.dependencies;if(s!==null){l=i.child;for(var a=s.firstContext;a!==null;){if(a.context===r){if(i.tag===1){a=Ze(-1,n&-n),a.tag=2;var u=i.updateQueue;if(u!==null){u=u.shared;var p=u.pending;p===null?a.next=a:(a.next=p.next,p.next=a),u.pending=a}}i.lanes|=n,a=i.alternate,a!==null&&(a.lanes|=n),sl(i.return,n,t),s.lanes|=n;break}a=a.next}}else if(i.tag===10)l=i.type===t.type?null:i.child;else if(i.tag===18){if(l=i.return,l===null)throw Error(_(341));l.lanes|=n,s=l.alternate,s!==null&&(s.lanes|=n),sl(l,n,t),l=i.sibling}else l=i.child;if(l!==null)l.return=i;else for(l=i;l!==null;){if(l===t){l=null;break}if(i=l.sibling,i!==null){i.return=l.return,l=i;break}l=l.return}i=l}pe(e,t,o.children,n),t=t.child}return t;case 9:return o=t.type,r=t.pendingProps.children,hn(t,n),o=Le(o),r=r(o),t.flags|=1,pe(e,t,r,n),t.child;case 14:return r=t.type,o=Ie(r,t.pendingProps),o=Ie(r.type,o),$a(e,t,r,o,n);case 15:return Zc(e,t,t.type,t.pendingProps,n);case 17:return r=t.type,o=t.pendingProps,o=t.elementType===r?o:Ie(r,o),eo(e,t),t.tag=1,ke(r)?(e=!0,mo(t)):e=!1,hn(t,n),Jc(t,r,o),ul(t,r,o,n),fl(null,t,r,!0,e,n);case 19:return od(e,t,n);case 22:return ed(e,t,n)}throw Error(_(156,t.tag))};function kd(e,t){return Ku(e,t)}function wg(e,t,n,r){this.tag=e,this.key=n,this.sibling=this.child=this.return=this.stateNode=this.type=this.elementType=null,this.index=0,this.ref=null,this.pendingProps=t,this.dependencies=this.memoizedState=this.updateQueue=this.memoizedProps=null,this.mode=r,this.subtreeFlags=this.flags=0,this.deletions=null,this.childLanes=this.lanes=0,this.alternate=null}function $e(e,t,n,r){return new wg(e,t,n,r)}function ws(e){return e=e.prototype,!(!e||!e.isReactComponent)}function Pg(e){if(typeof e=="function")return ws(e)?1:0;if(e!=null){if(e=e.$$typeof,e===Bl)return 11;if(e===Fl)return 14}return 2}function xt(e,t){var n=e.alternate;return n===null?(n=$e(e.tag,t,e.key,e.mode),n.elementType=e.elementType,n.type=e.type,n.stateNode=e.stateNode,n.alternate=e,e.alternate=n):(n.pendingProps=t,n.type=e.type,n.flags=0,n.subtreeFlags=0,n.deletions=null),n.flags=e.flags&14680064,n.childLanes=e.childLanes,n.lanes=e.lanes,n.child=e.child,n.memoizedProps=e.memoizedProps,n.memoizedState=e.memoizedState,n.updateQueue=e.updateQueue,t=e.dependencies,n.dependencies=t===null?null:{lanes:t.lanes,firstContext:t.firstContext},n.sibling=e.sibling,n.index=e.index,n.ref=e.ref,n}function ro(e,t,n,r,o,i){var l=2;if(r=e,typeof e=="function")ws(e)&&(l=1);else if(typeof e=="string")l=5;else e:switch(e){case en:return zt(n.children,o,i,t);case Ul:l=8,o|=8;break;case Li:return e=$e(12,n,t,o|2),e.elementType=Li,e.lanes=i,e;case Oi:return e=$e(13,n,t,o),e.elementType=Oi,e.lanes=i,e;case Mi:return e=$e(19,n,t,o),e.elementType=Mi,e.lanes=i,e;case ju:return Bo(n,o,i,t);default:if(typeof e=="object"&&e!==null)switch(e.$$typeof){case Tu:l=10;break e;case bu:l=9;break e;case Bl:l=11;break e;case Fl:l=14;break e;case st:l=16,r=null;break e}throw Error(_(130,e==null?e:typeof e,""))}return t=$e(l,n,t,o),t.elementType=e,t.type=r,t.lanes=i,t}function zt(e,t,n,r){return e=$e(7,e,r,t),e.lanes=n,e}function Bo(e,t,n,r){return e=$e(22,e,r,t),e.elementType=ju,e.lanes=n,e.stateNode={isHidden:!1},e}function Ei(e,t,n){return e=$e(6,e,null,t),e.lanes=n,e}function Ri(e,t,n){return t=$e(4,e.children!==null?e.children:[],e.key,t),t.lanes=n,t.stateNode={containerInfo:e.containerInfo,pendingChildren:null,implementation:e.implementation},t}function Cg(e,t,n,r,o){this.tag=t,this.containerInfo=e,this.finishedWork=this.pingCache=this.current=this.pendingChildren=null,this.timeoutHandle=-1,this.callbackNode=this.pendingContext=this.context=null,this.callbackPriority=0,this.eventTimes=si(0),this.expirationTimes=si(-1),this.entangledLanes=this.finishedLanes=this.mutableReadLanes=this.expiredLanes=this.pingedLanes=this.suspendedLanes=this.pendingLanes=0,this.entanglements=si(0),this.identifierPrefix=r,this.onRecoverableError=o,this.mutableSourceEagerHydrationData=null}function Ps(e,t,n,r,o,i,l,s,a){return e=new Cg(e,t,n,s,a),t===1?(t=1,i===!0&&(t|=8)):t=0,i=$e(3,null,null,t),e.current=i,i.stateNode=e,i.memoizedState={element:r,isDehydrated:n,cache:null,transitions:null,pendingSuspenseBoundaries:null},ls(i),e}function _g(e,t,n){var r=3<arguments.length&&arguments[3]!==void 0?arguments[3]:null;return{$$typeof:Zt,key:r==null?null:""+r,children:e,containerInfo:t,implementation:n}}function xd(e){if(!e)return Ct;e=e._reactInternals;e:{if(Wt(e)!==e||e.tag!==1)throw Error(_(170));var t=e;do{switch(t.tag){case 3:t=t.stateNode.context;break e;case 1:if(ke(t.type)){t=t.stateNode.__reactInternalMemoizedMergedChildContext;break e}}t=t.return}while(t!==null);throw Error(_(171))}if(e.tag===1){var n=e.type;if(ke(n))return xc(e,n,t)}return t}function wd(e,t,n,r,o,i,l,s,a){return e=Ps(n,r,!0,e,o,i,l,s,a),e.context=xd(null),n=e.current,r=ge(),o=kt(n),i=Ze(r,o),i.callback=t??null,vt(n,i,o),e.current.lanes=o,Sr(e,o,r),xe(e,r),e}function Fo(e,t,n,r){var o=t.current,i=ge(),l=kt(o);return n=xd(n),t.context===null?t.context=n:t.pendingContext=n,t=Ze(i,l),t.payload={element:e},r=r===void 0?null:r,r!==null&&(t.callback=r),e=vt(o,t,l),e!==null&&(Ue(e,o,l,i),Yr(e,o,l)),l}function To(e){if(e=e.current,!e.child)return null;switch(e.child.tag){case 5:return e.child.stateNode;default:return e.child.stateNode}}function Va(e,t){if(e=e.memoizedState,e!==null&&e.dehydrated!==null){var n=e.retryLane;e.retryLane=n!==0&&n<t?n:t}}function Cs(e,t){Va(e,t),(e=e.alternate)&&Va(e,t)}function Eg(){return null}var Pd=typeof reportError=="function"?reportError:function(e){console.error(e)};function _s(e){this._internalRoot=e}Vo.prototype.render=_s.prototype.render=function(e){var t=this._internalRoot;if(t===null)throw Error(_(409));Fo(e,t,null,null)};Vo.prototype.unmount=_s.prototype.unmount=function(){var e=this._internalRoot;if(e!==null){this._internalRoot=null;var t=e.containerInfo;Ht(function(){Fo(null,e,null,null)}),t[tt]=null}};function Vo(e){this._internalRoot=e}Vo.prototype.unstable_scheduleHydration=function(e){if(e){var t=ec();e={blockedOn:null,target:e,priority:t};for(var n=0;n<ut.length&&t!==0&&t<ut[n].priority;n++);ut.splice(n,0,e),n===0&&nc(e)}};function Es(e){return!(!e||e.nodeType!==1&&e.nodeType!==9&&e.nodeType!==11)}function Ho(e){return!(!e||e.nodeType!==1&&e.nodeType!==9&&e.nodeType!==11&&(e.nodeType!==8||e.nodeValue!==" react-mount-point-unstable "))}function Ha(){}function Rg(e,t,n,r,o){if(o){if(typeof r=="function"){var i=r;r=function(){var u=To(l);i.call(u)}}var l=wd(t,r,e,0,null,!1,!1,"",Ha);return e._reactRootContainer=l,e[tt]=l.current,lr(e.nodeType===8?e.parentNode:e),Ht(),l}for(;o=e.lastChild;)e.removeChild(o);if(typeof r=="function"){var s=r;r=function(){var u=To(a);s.call(u)}}var a=Ps(e,0,!1,null,null,!1,!1,"",Ha);return e._reactRootContainer=a,e[tt]=a.current,lr(e.nodeType===8?e.parentNode:e),Ht(function(){Fo(t,a,n,r)}),a}function Qo(e,t,n,r,o){var i=n._reactRootContainer;if(i){var l=i;if(typeof o=="function"){var s=o;o=function(){var a=To(l);s.call(a)}}Fo(t,l,e,o)}else l=Rg(n,t,e,o,r);return To(l)}Xu=function(e){switch(e.tag){case 3:var t=e.stateNode;if(t.current.memoizedState.isDehydrated){var n=Un(t.pendingLanes);n!==0&&(Ql(t,n|1),xe(t,G()),!(O&6)&&(Cn=G()+500,Rt()))}break;case 13:Ht(function(){var r=nt(e,1);if(r!==null){var o=ge();Ue(r,e,1,o)}}),Cs(e,1)}};Wl=function(e){if(e.tag===13){var t=nt(e,134217728);if(t!==null){var n=ge();Ue(t,e,134217728,n)}Cs(e,134217728)}};Zu=function(e){if(e.tag===13){var t=kt(e),n=nt(e,t);if(n!==null){var r=ge();Ue(n,e,t,r)}Cs(e,t)}};ec=function(){return I};tc=function(e,t){var n=I;try{return I=e,t()}finally{I=n}};Qi=function(e,t,n){switch(t){case"input":if(Di(e,n),t=n.name,n.type==="radio"&&t!=null){for(n=e;n.parentNode;)n=n.parentNode;for(n=n.querySelectorAll("input[name="+JSON.stringify(""+t)+'][type="radio"]'),t=0;t<n.length;t++){var r=n[t];if(r!==e&&r.form===e.form){var o=Mo(r);if(!o)throw Error(_(90));Nu(r),Di(r,o)}}}break;case"textarea":Ou(e,n);break;case"select":t=n.value,t!=null&&fn(e,!!n.multiple,t,!1)}};Bu=Ss;Fu=Ht;var Tg={usingClientEntryPoint:!1,Events:[xr,on,Mo,zu,Uu,Ss]},An={findFiberByHostInstance:Mt,bundleType:0,version:"18.3.1",rendererPackageName:"react-dom"},bg={bundleType:An.bundleType,version:An.version,rendererPackageName:An.rendererPackageName,rendererConfig:An.rendererConfig,overrideHookState:null,overrideHookStateDeletePath:null,overrideHookStateRenamePath:null,overrideProps:null,overridePropsDeletePath:null,overridePropsRenamePath:null,setErrorHandler:null,setSuspenseHandler:null,scheduleUpdate:null,currentDispatcherRef:ot.ReactCurrentDispatcher,findHostInstanceByFiber:function(e){return e=Qu(e),e===null?null:e.stateNode},findFiberByHostInstance:An.findFiberByHostInstance||Eg,findHostInstancesForRefresh:null,scheduleRefresh:null,scheduleRoot:null,setRefreshHandler:null,getCurrentFiber:null,reconcilerVersion:"18.3.1-next-f1338f8080-20240426"};if(typeof __REACT_DEVTOOLS_GLOBAL_HOOK__<"u"){var Vr=__REACT_DEVTOOLS_GLOBAL_HOOK__;if(!Vr.isDisabled&&Vr.supportsFiber)try{$o=Vr.inject(bg),Qe=Vr}catch{}}Ee.__SECRET_INTERNALS_DO_NOT_USE_OR_YOU_WILL_BE_FIRED=Tg;Ee.createPortal=function(e,t){var n=2<arguments.length&&arguments[2]!==void 0?arguments[2]:null;if(!Es(t))throw Error(_(200));return _g(e,t,null,n)};Ee.createRoot=function(e,t){if(!Es(e))throw Error(_(299));var n=!1,r="",o=Pd;return t!=null&&(t.unstable_strictMode===!0&&(n=!0),t.identifierPrefix!==void 0&&(r=t.identifierPrefix),t.onRecoverableError!==void 0&&(o=t.onRecoverableError)),t=Ps(e,1,!1,null,null,n,!1,r,o),e[tt]=t.current,lr(e.nodeType===8?e.parentNode:e),new _s(t)};Ee.findDOMNode=function(e){if(e==null)return null;if(e.nodeType===1)return e;var t=e._reactInternals;if(t===void 0)throw typeof e.render=="function"?Error(_(188)):(e=Object.keys(e).join(","),Error(_(268,e)));return e=Qu(t),e=e===null?null:e.stateNode,e};Ee.flushSync=function(e){return Ht(e)};Ee.hydrate=function(e,t,n){if(!Ho(t))throw Error(_(200));return Qo(null,e,t,!0,n)};Ee.hydrateRoot=function(e,t,n){if(!Es(e))throw Error(_(405));var r=n!=null&&n.hydratedSources||null,o=!1,i="",l=Pd;if(n!=null&&(n.unstable_strictMode===!0&&(o=!0),n.identifierPrefix!==void 0&&(i=n.identifierPrefix),n.onRecoverableError!==void 0&&(l=n.onRecoverableError)),t=wd(t,null,e,1,n??null,o,!1,i,l),e[tt]=t.current,lr(e),r)for(e=0;e<r.length;e++)n=r[e],o=n._getVersion,o=o(n._source),t.mutableSourceEagerHydrationData==null?t.mutableSourceEagerHydrationData=[n,o]:t.mutableSourceEagerHydrationData.push(n,o);return new Vo(t)};Ee.render=function(e,t,n){if(!Ho(t))throw Error(_(200));return Qo(null,e,t,!1,n)};Ee.unmountComponentAtNode=function(e){if(!Ho(e))throw Error(_(40));return e._reactRootContainer?(Ht(function(){Qo(null,null,e,!1,function(){e._reactRootContainer=null,e[tt]=null})}),!0):!1};Ee.unstable_batchedUpdates=Ss;Ee.unstable_renderSubtreeIntoContainer=function(e,t,n,r){if(!Ho(n))throw Error(_(200));if(e==null||e._reactInternals===void 0)throw Error(_(38));return Qo(e,t,n,!1,r)};Ee.version="18.3.1-next-f1338f8080-20240426";function Cd(){if(!(typeof __REACT_DEVTOOLS_GLOBAL_HOOK__>"u"||typeof __REACT_DEVTOOLS_GLOBAL_HOOK__.checkDCE!="function"))try{__REACT_DEVTOOLS_GLOBAL_HOOK__.checkDCE(Cd)}catch(e){console.error(e)}}Cd(),Cu.exports=Ee;var Je=Cu.exports,_d,Qa=Je;_d=$i.createRoot=Qa.createRoot,$i.hydrateRoot=Qa.hydrateRoot;/**
 * @remix-run/router v1.23.4
 *
 * Copyright (c) Remix Software Inc.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE.md file in the root directory of this source tree.
 *
 * @license MIT
 */function mr(){return mr=Object.assign?Object.assign.bind():function(e){for(var t=1;t<arguments.length;t++){var n=arguments[t];for(var r in n)({}).hasOwnProperty.call(n,r)&&(e[r]=n[r])}return e},mr.apply(null,arguments)}var pt;(function(e){e.Pop="POP",e.Push="PUSH",e.Replace="REPLACE"})(pt||(pt={}));const Wa="popstate";function jg(e){e===void 0&&(e={});function t(o,i){let{pathname:l="/",search:s="",hash:a=""}=Kt(o.location.hash.substr(1));return!l.startsWith("/")&&!l.startsWith(".")&&(l="/"+l),Cl("",{pathname:l,search:s,hash:a},i.state&&i.state.usr||null,i.state&&i.state.key||"default")}function n(o,i){let l=o.document.querySelector("base"),s="";if(l&&l.getAttribute("href")){let a=o.location.href,u=a.indexOf("#");s=u===-1?a:a.slice(0,u)}return s+"#"+(typeof i=="string"?i:bo(i))}function r(o,i){Rs(o.pathname.charAt(0)==="/","relative pathnames are not supported in hash history.push("+JSON.stringify(i)+")")}return Ng(t,n,r,e)}function J(e,t){if(e===!1||e===null||typeof e>"u")throw new Error(t)}function Rs(e,t){if(!e){typeof console<"u"&&console.warn(t);try{throw new Error(t)}catch{}}}function $g(){return Math.random().toString(36).substr(2,8)}function Ka(e,t){return{usr:e.state,key:e.key,idx:t}}function Cl(e,t,n,r){return n===void 0&&(n=null),mr({pathname:typeof e=="string"?e:e.pathname,search:"",hash:""},typeof t=="string"?Kt(t):t,{state:n,key:t&&t.key||r||$g()})}function bo(e){let{pathname:t="/",search:n="",hash:r=""}=e;return n&&n!=="?"&&(t+=n.charAt(0)==="?"?n:"?"+n),r&&r!=="#"&&(t+=r.charAt(0)==="#"?r:"#"+r),t}function Kt(e){let t={};if(e){let n=e.indexOf("#");n>=0&&(t.hash=e.substr(n),e=e.substr(0,n));let r=e.indexOf("?");r>=0&&(t.search=e.substr(r),e=e.substr(0,r)),e&&(t.pathname=e)}return t}function Ng(e,t,n,r){r===void 0&&(r={});let{window:o=document.defaultView,v5Compat:i=!1}=r,l=o.history,s=pt.Pop,a=null,u=p();u==null&&(u=0,l.replaceState(mr({},l.state,{idx:u}),""));function p(){return(l.state||{idx:null}).idx}function c(){s=pt.Pop;let k=p(),m=k==null?null:k-u;u=k,a&&a({action:s,location:w.location,delta:m})}function g(k,m){s=pt.Push;let d=Cl(w.location,k,m);n&&n(d,k),u=p()+1;let h=Ka(d,u),x=w.createHref(d);try{l.pushState(h,"",x)}catch(E){if(E instanceof DOMException&&E.name==="DataCloneError")throw E;o.location.assign(x)}i&&a&&a({action:s,location:w.location,delta:1})}function y(k,m){s=pt.Replace;let d=Cl(w.location,k,m);n&&n(d,k),u=p();let h=Ka(d,u),x=w.createHref(d);l.replaceState(h,"",x),i&&a&&a({action:s,location:w.location,delta:0})}function S(k){let m=o.location.origin!=="null"?o.location.origin:o.location.href,d=typeof k=="string"?k:bo(k);return d=d.replace(/ $/,"%20"),J(m,"No window.location.(origin|href) available to create URL for href: "+d),new URL(d,m)}let w={get action(){return s},get location(){return e(o,l)},listen(k){if(a)throw new Error("A history only accepts one active listener");return o.addEventListener(Wa,c),a=k,()=>{o.removeEventListener(Wa,c),a=null}},createHref(k){return t(o,k)},createURL:S,encodeLocation(k){let m=S(k);return{pathname:m.pathname,search:m.search,hash:m.hash}},push:g,replace:y,go(k){return l.go(k)}};return w}var qa;(function(e){e.data="data",e.deferred="deferred",e.redirect="redirect",e.error="error"})(qa||(qa={}));function Lg(e,t,n){return n===void 0&&(n="/"),Og(e,t,n)}function Og(e,t,n,r){let o=typeof t=="string"?Kt(t):t,i=Ts(o.pathname||"/",n);if(i==null)return null;let l=Ed(e);Mg(l);let s=null,a=Kg(i);for(let u=0;s==null&&u<l.length;++u)s=Hg(l[u],a);return s}function Ed(e,t,n,r){t===void 0&&(t=[]),n===void 0&&(n=[]),r===void 0&&(r="");let o=(i,l,s)=>{let a={relativePath:s===void 0?i.path||"":s,caseSensitive:i.caseSensitive===!0,childrenIndex:l,route:i};a.relativePath.startsWith("/")&&(J(a.relativePath.startsWith(r),'Absolute route path "'+a.relativePath+'" nested under path '+('"'+r+'" is not valid. An absolute child route path ')+"must start with the combined path of all its parent routes."),a.relativePath=a.relativePath.slice(r.length));let u=wt([r,a.relativePath]),p=n.concat(a);i.children&&i.children.length>0&&(J(i.index!==!0,"Index routes must not have child routes. Please remove "+('all child routes from route path "'+u+'".')),Ed(i.children,t,p,u)),!(i.path==null&&!i.index)&&t.push({path:u,score:Fg(u,i.index),routesMeta:p})};return e.forEach((i,l)=>{var s;if(i.path===""||!((s=i.path)!=null&&s.includes("?")))o(i,l);else for(let a of Rd(i.path))o(i,l,a)}),t}function Rd(e){let t=e.split("/");if(t.length===0)return[];let[n,...r]=t,o=n.endsWith("?"),i=n.replace(/\?$/,"");if(r.length===0)return o?[i,""]:[i];let l=Rd(r.join("/")),s=[];return s.push(...l.map(a=>a===""?i:[i,a].join("/"))),o&&s.push(...l),s.map(a=>e.startsWith("/")&&a===""?"/":a)}function Mg(e){e.sort((t,n)=>t.score!==n.score?n.score-t.score:Vg(t.routesMeta.map(r=>r.childrenIndex),n.routesMeta.map(r=>r.childrenIndex)))}const Ig=/^:[\w-]+$/,Ag=3,Dg=2,zg=1,Ug=10,Bg=-2,Ga=e=>e==="*";function Fg(e,t){let n=e.split("/"),r=n.length;return n.some(Ga)&&(r+=Bg),t&&(r+=Dg),n.filter(o=>!Ga(o)).reduce((o,i)=>o+(Ig.test(i)?Ag:i===""?zg:Ug),r)}function Vg(e,t){return e.length===t.length&&e.slice(0,-1).every((r,o)=>r===t[o])?e[e.length-1]-t[t.length-1]:0}function Hg(e,t,n){let{routesMeta:r}=e,o={},i="/",l=[];for(let s=0;s<r.length;++s){let a=r[s],u=s===r.length-1,p=i==="/"?t:t.slice(i.length)||"/",c=Qg({path:a.relativePath,caseSensitive:a.caseSensitive,end:u},p),g=a.route;if(!c)return null;Object.assign(o,c.params),l.push({params:o,pathname:wt([i,c.pathname]),pathnameBase:Jg(wt([i,c.pathnameBase])),route:g}),c.pathnameBase!=="/"&&(i=wt([i,c.pathnameBase]))}return l}function Qg(e,t){typeof e=="string"&&(e={path:e,caseSensitive:!1,end:!0});let[n,r]=Wg(e.path,e.caseSensitive,e.end),o=t.match(n);if(!o)return null;let i=o[0],l=i.replace(/(.)\/+$/,"$1"),s=o.slice(1);return{params:r.reduce((u,p,c)=>{let{paramName:g,isOptional:y}=p;if(g==="*"){let w=s[c]||"";l=i.slice(0,i.length-w.length).replace(/(.)\/+$/,"$1")}const S=s[c];return y&&!S?u[g]=void 0:u[g]=(S||"").replace(/%2F/g,"/"),u},{}),pathname:i,pathnameBase:l,pattern:e}}function Wg(e,t,n){t===void 0&&(t=!1),n===void 0&&(n=!0),Rs(e==="*"||!e.endsWith("*")||e.endsWith("/*"),'Route path "'+e+'" will be treated as if it were '+('"'+e.replace(/\*$/,"/*")+'" because the `*` character must ')+"always follow a `/` in the pattern. To get rid of this warning, "+('please change the route path to "'+e.replace(/\*$/,"/*")+'".'));let r=[],o="^"+e.replace(/\/*\*?$/,"").replace(/^\/*/,"/").replace(/[\\.*+^${}|()[\]]/g,"\\$&").replace(/\/:([\w-]+)(\?)?/g,(l,s,a)=>(r.push({paramName:s,isOptional:a!=null}),a?"/?([^\\/]+)?":"/([^\\/]+)"));return e.endsWith("*")?(r.push({paramName:"*"}),o+=e==="*"||e==="/*"?"(.*)$":"(?:\\/(.+)|\\/*)$"):n?o+="\\/*$":e!==""&&e!=="/"&&(o+="(?:(?=\\/|$))"),[new RegExp(o,t?void 0:"i"),r]}function Kg(e){try{return e.split("/").map(t=>decodeURIComponent(t).replace(/\//g,"%2F")).join("/")}catch(t){return Rs(!1,'The URL path "'+e+'" could not be decoded because it is is a malformed URL segment. This is probably due to a bad percent '+("encoding ("+t+").")),e}}function Ts(e,t){if(t==="/")return e;if(!e.toLowerCase().startsWith(t.toLowerCase()))return null;let n=t.endsWith("/")?t.length-1:t.length,r=e.charAt(n);return r&&r!=="/"?null:e.slice(n)||"/"}function qg(e,t){t===void 0&&(t="/");let{pathname:n,search:r="",hash:o=""}=typeof e=="string"?Kt(e):e,i;return n?(n=Td(n),n.startsWith("/")?i=Ja(n.substring(1),"/"):i=Ja(n,t)):i=t,{pathname:i,search:Yg(r),hash:Xg(o)}}function Ja(e,t){let n=t.replace(/\/+$/,"").split("/");return e.split("/").forEach(o=>{o===".."?n.length>1&&n.pop():o!=="."&&n.push(o)}),n.length>1?n.join("/"):"/"}function Ti(e,t,n,r){return"Cannot include a '"+e+"' character in a manually specified "+("`to."+t+"` field ["+JSON.stringify(r)+"].  Please separate it out to the ")+("`to."+n+"` field. Alternatively you may provide the full path as ")+'a string in <Link to="..."> and the router will parse it for you.'}function Gg(e){return e.filter((t,n)=>n===0||t.route.path&&t.route.path.length>0)}function bs(e,t){let n=Gg(e);return t?n.map((r,o)=>o===n.length-1?r.pathname:r.pathnameBase):n.map(r=>r.pathnameBase)}function js(e,t,n,r){r===void 0&&(r=!1);let o;typeof e=="string"?o=Kt(e):(o=mr({},e),J(!o.pathname||!o.pathname.includes("?"),Ti("?","pathname","search",o)),J(!o.pathname||!o.pathname.includes("#"),Ti("#","pathname","hash",o)),J(!o.search||!o.search.includes("#"),Ti("#","search","hash",o)));let i=e===""||o.pathname==="",l=i?"/":o.pathname,s;if(l==null)s=n;else{let c=t.length-1;if(!r&&l.startsWith("..")){let g=l.split("/");for(;g[0]==="..";)g.shift(),c-=1;o.pathname=g.join("/")}s=c>=0?t[c]:"/"}let a=qg(o,s),u=l&&l!=="/"&&l.endsWith("/"),p=(i||l===".")&&n.endsWith("/");return!a.pathname.endsWith("/")&&(u||p)&&(a.pathname+="/"),a}const Td=e=>e.replace(/\/\/+/g,"/"),wt=e=>Td(e.join("/")),Jg=e=>e.replace(/\/+$/,"").replace(/^\/*/,"/"),Yg=e=>!e||e==="?"?"":e.startsWith("?")?e:"?"+e,Xg=e=>!e||e==="#"?"":e.startsWith("#")?e:"#"+e;function Zg(e){return e!=null&&typeof e.status=="number"&&typeof e.statusText=="string"&&typeof e.internal=="boolean"&&"data"in e}const bd=["post","put","patch","delete"];new Set(bd);const em=["get",...bd];new Set(em);/**
 * React Router v6.30.6
 *
 * Copyright (c) Remix Software Inc.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE.md file in the root directory of this source tree.
 *
 * @license MIT
 */function hr(){return hr=Object.assign?Object.assign.bind():function(e){for(var t=1;t<arguments.length;t++){var n=arguments[t];for(var r in n)({}).hasOwnProperty.call(n,r)&&(e[r]=n[r])}return e},hr.apply(null,arguments)}const $s=v.createContext(null),tm=v.createContext(null),Tt=v.createContext(null),Wo=v.createContext(null),it=v.createContext({outlet:null,matches:[],isDataRoute:!1}),jd=v.createContext(null);function nm(e,t){let{relative:n}=t===void 0?{}:t;Tn()||J(!1);let{basename:r,navigator:o}=v.useContext(Tt),{hash:i,pathname:l,search:s}=Ld(e,{relative:n}),a=l;return r!=="/"&&(a=l==="/"?r:wt([r,l])),o.createHref({pathname:a,search:s,hash:i})}function Tn(){return v.useContext(Wo)!=null}function bn(){return Tn()||J(!1),v.useContext(Wo).location}function $d(e){v.useContext(Tt).static||v.useLayoutEffect(e)}function Nd(){let{isDataRoute:e}=v.useContext(it);return e?hm():rm()}function rm(){Tn()||J(!1);let e=v.useContext($s),{basename:t,future:n,navigator:r}=v.useContext(Tt),{matches:o}=v.useContext(it),{pathname:i}=bn(),l=JSON.stringify(bs(o,n.v7_relativeSplatPath)),s=v.useRef(!1);return $d(()=>{s.current=!0}),v.useCallback(function(u,p){if(p===void 0&&(p={}),!s.current)return;if(typeof u=="number"){r.go(u);return}let c=js(u,JSON.parse(l),i,p.relative==="path");e==null&&t!=="/"&&(c.pathname=c.pathname==="/"?t:wt([t,c.pathname])),(p.replace?r.replace:r.push)(c,p.state,p)},[t,r,l,i,e])}function om(){let{matches:e}=v.useContext(it),t=e[e.length-1];return t?t.params:{}}function Ld(e,t){let{relative:n}=t===void 0?{}:t,{future:r}=v.useContext(Tt),{matches:o}=v.useContext(it),{pathname:i}=bn(),l=JSON.stringify(bs(o,r.v7_relativeSplatPath));return v.useMemo(()=>js(e,JSON.parse(l),i,n==="path"),[e,l,i,n])}function im(e,t){return lm(e,t)}function lm(e,t,n,r){Tn()||J(!1);let{navigator:o}=v.useContext(Tt),{matches:i}=v.useContext(it),l=i[i.length-1],s=l?l.params:{};l&&l.pathname;let a=l?l.pathnameBase:"/";l&&l.route;let u=bn(),p;if(t){var c;let k=typeof t=="string"?Kt(t):t;a==="/"||(c=k.pathname)!=null&&c.startsWith(a)||J(!1),p=k}else p=u;let g=p.pathname||"/",y=g;if(a!=="/"){let k=a.replace(/^\//,"").split("/");y="/"+g.replace(/^\//,"").split("/").slice(k.length).join("/")}let S=Lg(e,{pathname:y}),w=dm(S&&S.map(k=>Object.assign({},k,{params:Object.assign({},s,k.params),pathname:wt([a,o.encodeLocation?o.encodeLocation(k.pathname).pathname:k.pathname]),pathnameBase:k.pathnameBase==="/"?a:wt([a,o.encodeLocation?o.encodeLocation(k.pathnameBase).pathname:k.pathnameBase])})),i,n,r);return t&&w?v.createElement(Wo.Provider,{value:{location:hr({pathname:"/",search:"",hash:"",state:null,key:"default"},p),navigationType:pt.Pop}},w):w}function sm(){let e=mm(),t=Zg(e)?e.status+" "+e.statusText:e instanceof Error?e.message:JSON.stringify(e),n=e instanceof Error?e.stack:null,o={padding:"0.5rem",backgroundColor:"rgba(200,200,200, 0.5)"};return v.createElement(v.Fragment,null,v.createElement("h2",null,"Unexpected Application Error!"),v.createElement("h3",{style:{fontStyle:"italic"}},t),n?v.createElement("pre",{style:o},n):null,null)}const am=v.createElement(sm,null);class um extends v.Component{constructor(t){super(t),this.state={location:t.location,revalidation:t.revalidation,error:t.error}}static getDerivedStateFromError(t){return{error:t}}static getDerivedStateFromProps(t,n){return n.location!==t.location||n.revalidation!=="idle"&&t.revalidation==="idle"?{error:t.error,location:t.location,revalidation:t.revalidation}:{error:t.error!==void 0?t.error:n.error,location:n.location,revalidation:t.revalidation||n.revalidation}}componentDidCatch(t,n){console.error("React Router caught the following error during render",t,n)}render(){return this.state.error!==void 0?v.createElement(it.Provider,{value:this.props.routeContext},v.createElement(jd.Provider,{value:this.state.error,children:this.props.component})):this.props.children}}function cm(e){let{routeContext:t,match:n,children:r}=e,o=v.useContext($s);return o&&o.static&&o.staticContext&&(n.route.errorElement||n.route.ErrorBoundary)&&(o.staticContext._deepestRenderedBoundaryId=n.route.id),v.createElement(it.Provider,{value:t},r)}function dm(e,t,n,r){var o;if(t===void 0&&(t=[]),n===void 0&&(n=null),r===void 0&&(r=null),e==null){var i;if(!n)return null;if(n.errors)e=n.matches;else if((i=r)!=null&&i.v7_partialHydration&&t.length===0&&!n.initialized&&n.matches.length>0)e=n.matches;else return null}let l=e,s=(o=n)==null?void 0:o.errors;if(s!=null){let p=l.findIndex(c=>c.route.id&&(s==null?void 0:s[c.route.id])!==void 0);p>=0||J(!1),l=l.slice(0,Math.min(l.length,p+1))}let a=!1,u=-1;if(n&&r&&r.v7_partialHydration)for(let p=0;p<l.length;p++){let c=l[p];if((c.route.HydrateFallback||c.route.hydrateFallbackElement)&&(u=p),c.route.id){let{loaderData:g,errors:y}=n,S=c.route.loader&&g[c.route.id]===void 0&&(!y||y[c.route.id]===void 0);if(c.route.lazy||S){a=!0,u>=0?l=l.slice(0,u+1):l=[l[0]];break}}}return l.reduceRight((p,c,g)=>{let y,S=!1,w=null,k=null;n&&(y=s&&c.route.id?s[c.route.id]:void 0,w=c.route.errorElement||am,a&&(u<0&&g===0?(ym("route-fallback"),S=!0,k=null):u===g&&(S=!0,k=c.route.hydrateFallbackElement||null)));let m=t.concat(l.slice(0,g+1)),d=()=>{let h;return y?h=w:S?h=k:c.route.Component?h=v.createElement(c.route.Component,null):c.route.element?h=c.route.element:h=p,v.createElement(cm,{match:c,routeContext:{outlet:p,matches:m,isDataRoute:n!=null},children:h})};return n&&(c.route.ErrorBoundary||c.route.errorElement||g===0)?v.createElement(um,{location:n.location,revalidation:n.revalidation,component:w,error:y,children:d(),routeContext:{outlet:null,matches:m,isDataRoute:!0}}):d()},null)}var Od=function(e){return e.UseBlocker="useBlocker",e.UseRevalidator="useRevalidator",e.UseNavigateStable="useNavigate",e}(Od||{}),Md=function(e){return e.UseBlocker="useBlocker",e.UseLoaderData="useLoaderData",e.UseActionData="useActionData",e.UseRouteError="useRouteError",e.UseNavigation="useNavigation",e.UseRouteLoaderData="useRouteLoaderData",e.UseMatches="useMatches",e.UseRevalidator="useRevalidator",e.UseNavigateStable="useNavigate",e.UseRouteId="useRouteId",e}(Md||{});function fm(e){let t=v.useContext($s);return t||J(!1),t}function pm(e){let t=v.useContext(tm);return t||J(!1),t}function gm(e){let t=v.useContext(it);return t||J(!1),t}function Id(e){let t=gm(),n=t.matches[t.matches.length-1];return n.route.id||J(!1),n.route.id}function mm(){var e;let t=v.useContext(jd),n=pm(),r=Id();return t!==void 0?t:(e=n.errors)==null?void 0:e[r]}function hm(){let{router:e}=fm(Od.UseNavigateStable),t=Id(Md.UseNavigateStable),n=v.useRef(!1);return $d(()=>{n.current=!0}),v.useCallback(function(o,i){i===void 0&&(i={}),n.current&&(typeof o=="number"?e.navigate(o):e.navigate(o,hr({fromRouteId:t},i)))},[e,t])}const Ya={};function ym(e,t,n){Ya[e]||(Ya[e]=!0)}function vm(e,t){e==null||e.v7_startTransition,e==null||e.v7_relativeSplatPath}function _l(e){let{to:t,replace:n,state:r,relative:o}=e;Tn()||J(!1);let{future:i,static:l}=v.useContext(Tt),{matches:s}=v.useContext(it),{pathname:a}=bn(),u=Nd(),p=js(t,bs(s,i.v7_relativeSplatPath),a,o==="path"),c=JSON.stringify(p);return v.useEffect(()=>u(JSON.parse(c),{replace:n,state:r,relative:o}),[u,c,o,n,r]),null}function Fn(e){J(!1)}function Sm(e){let{basename:t="/",children:n=null,location:r,navigationType:o=pt.Pop,navigator:i,static:l=!1,future:s}=e;Tn()&&J(!1);let a=t.replace(/^\/*/,"/"),u=v.useMemo(()=>({basename:a,navigator:i,static:l,future:hr({v7_relativeSplatPath:!1},s)}),[a,s,i,l]);typeof r=="string"&&(r=Kt(r));let{pathname:p="/",search:c="",hash:g="",state:y=null,key:S="default"}=r,w=v.useMemo(()=>{let k=Ts(p,a);return k==null?null:{location:{pathname:k,search:c,hash:g,state:y,key:S},navigationType:o}},[a,p,c,g,y,S,o]);return w==null?null:v.createElement(Tt.Provider,{value:u},v.createElement(Wo.Provider,{children:n,value:w}))}function km(e){let{children:t,location:n}=e;return im(El(t),n)}new Promise(()=>{});function El(e,t){t===void 0&&(t=[]);let n=[];return v.Children.forEach(e,(r,o)=>{if(!v.isValidElement(r))return;let i=[...t,o];if(r.type===v.Fragment){n.push.apply(n,El(r.props.children,i));return}r.type!==Fn&&J(!1),!r.props.index||!r.props.children||J(!1);let l={id:r.props.id||i.join("-"),caseSensitive:r.props.caseSensitive,element:r.props.element,Component:r.props.Component,index:r.props.index,path:r.props.path,loader:r.props.loader,action:r.props.action,errorElement:r.props.errorElement,ErrorBoundary:r.props.ErrorBoundary,hasErrorBoundary:r.props.ErrorBoundary!=null||r.props.errorElement!=null,shouldRevalidate:r.props.shouldRevalidate,handle:r.props.handle,lazy:r.props.lazy};r.props.children&&(l.children=El(r.props.children,i)),n.push(l)}),n}/**
 * React Router DOM v6.30.6
 *
 * Copyright (c) Remix Software Inc.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE.md file in the root directory of this source tree.
 *
 * @license MIT
 */function Rl(){return Rl=Object.assign?Object.assign.bind():function(e){for(var t=1;t<arguments.length;t++){var n=arguments[t];for(var r in n)({}).hasOwnProperty.call(n,r)&&(e[r]=n[r])}return e},Rl.apply(null,arguments)}function xm(e,t){if(e==null)return{};var n={};for(var r in e)if({}.hasOwnProperty.call(e,r)){if(t.indexOf(r)!==-1)continue;n[r]=e[r]}return n}function wm(e){return!!(e.metaKey||e.altKey||e.ctrlKey||e.shiftKey)}function Pm(e,t){return e.button===0&&(!t||t==="_self")&&!wm(e)}const Cm=["onClick","relative","reloadDocument","replace","state","target","to","preventScrollReset","viewTransition"],_m="6";try{window.__reactRouterVersion=_m}catch{}const Em="startTransition",Xa=Sf[Em];function Rm(e){let{basename:t,children:n,future:r,window:o}=e,i=v.useRef();i.current==null&&(i.current=jg({window:o,v5Compat:!0}));let l=i.current,[s,a]=v.useState({action:l.action,location:l.location}),{v7_startTransition:u}=r||{},p=v.useCallback(c=>{u&&Xa?Xa(()=>a(c)):a(c)},[a,u]);return v.useLayoutEffect(()=>l.listen(p),[l,p]),v.useEffect(()=>vm(r),[r]),v.createElement(Sm,{basename:t,children:n,location:s.location,navigationType:s.action,navigator:l,future:r})}const Tm=typeof window<"u"&&typeof window.document<"u"&&typeof window.document.createElement<"u",bm=/^(?:[a-z][a-z0-9+.-]*:|\/\/)/i,Tl=v.forwardRef(function(t,n){let{onClick:r,relative:o,reloadDocument:i,replace:l,state:s,target:a,to:u,preventScrollReset:p,viewTransition:c}=t,g=xm(t,Cm),{basename:y}=v.useContext(Tt),S,w=!1;if(typeof u=="string"&&bm.test(u)&&(S=u,Tm))try{let h=new URL(window.location.href),x=u.startsWith("//")?new URL(h.protocol+u):new URL(u),E=Ts(x.pathname,y);x.origin===h.origin&&E!=null?u=E+x.search+x.hash:w=!0}catch{}let k=nm(u,{relative:o}),m=jm(u,{replace:l,state:s,target:a,preventScrollReset:p,relative:o,viewTransition:c});function d(h){r&&r(h),h.defaultPrevented||m(h)}return v.createElement("a",Rl({},g,{href:S||k,onClick:w||i?r:d,ref:n,target:a}))});var Za;(function(e){e.UseScrollRestoration="useScrollRestoration",e.UseSubmit="useSubmit",e.UseSubmitFetcher="useSubmitFetcher",e.UseFetcher="useFetcher",e.useViewTransitionState="useViewTransitionState"})(Za||(Za={}));var eu;(function(e){e.UseFetcher="useFetcher",e.UseFetchers="useFetchers",e.UseScrollRestoration="useScrollRestoration"})(eu||(eu={}));function jm(e,t){let{target:n,replace:r,state:o,preventScrollReset:i,relative:l,viewTransition:s}=t===void 0?{}:t,a=Nd(),u=bn(),p=Ld(e,{relative:l});return v.useCallback(c=>{if(Pm(c,n)){c.preventDefault();let g=r!==void 0?r:bo(u)===bo(p);a(e,{replace:g,state:o,preventScrollReset:i,relative:l,viewTransition:s})}},[u,a,p,r,o,n,e,i,l,s])}const $m="https://github.com/frankvane/vane-components";class Nm extends vr.Component{constructor(){super(...arguments);Is(this,"state",{error:null})}static getDerivedStateFromError(n){return{error:n}}render(){var n;return this.state.error?f.jsxs("div",{className:"crash",role:"alert",children:[f.jsx("h3",{children:"这个页面炸了"}),f.jsx("pre",{children:String(((n=this.state.error)==null?void 0:n.stack)||this.state.error)}),f.jsx("button",{type:"button",onClick:()=>this.setState({error:null}),children:"重试"})]}):this.props.children}}function Ad(e,t){return String(e.entries.indexOf(t)+1).padStart(2,"0")}function Lm({demos:e,pathname:t}){var a;const{groups:n,entries:r,label:o}=e,i=(a=r.find(u=>t===`/demo/${u.meta.slug}`))==null?void 0:a.meta.group,[l,s]=v.useState(()=>{var p;const u=(p=n[0])==null?void 0:p.key;return Object.fromEntries(n.map(c=>[c.key,c.key===(i??u)]))});return v.useEffect(()=>{i&&s(u=>u[i]?u:{...u,[i]:!0})},[i]),f.jsxs("div",{className:"nav-section",children:[f.jsxs("div",{className:"nav-section-head",children:[f.jsx("span",{children:o}),f.jsxs("code",{children:[r.length," demos"]})]}),n.map(u=>{const p=r.filter(g=>g.meta.group===u.key);if(p.length===0)return null;const c=l[u.key]??!1;return f.jsxs("div",{className:"nav-group",children:[f.jsxs("button",{type:"button",className:`nav-group-head${i===u.key?" is-current":""}`,onClick:()=>s(g=>({...g,[u.key]:!c})),"aria-expanded":c,children:[f.jsx("span",{className:`nav-caret${c?" is-open":""}`,"aria-hidden":!0,children:"▸"}),u.label,f.jsx("code",{children:p.length})]}),c?f.jsx("div",{className:"nav-list",children:p.map(g=>f.jsxs(Tl,{to:`/demo/${g.meta.slug}`,className:`nav-sub${t===`/demo/${g.meta.slug}`?" is-active":""}`,children:[f.jsx("em",{"aria-hidden":!0,children:Ad(e,g)}),g.meta.title]},g.meta.slug))}):null]},u.key)})]})}function Om({demos:e}){const{slug:t}=om(),{entries:n,detail:r}=e,o=t?n.find(l=>l.meta.slug===t):void 0;if(!o)return f.jsx(_l,{to:`/demo/${n[0].meta.slug}`,replace:!0});const i=n.indexOf(o)+1;return f.jsx(vr.Fragment,{children:r(o,i)},o.meta.slug)}function Mm({config:e}){var p;const{pathname:t}=bn(),[n,r]=v.useState(!1),[o,i]=v.useState(!1);v.useEffect(()=>r(!1),[t]);const l=v.useCallback(()=>i(c=>!c),[]);v.useEffect(()=>{const c=g=>{const y=g.target,S=y&&(y.tagName==="INPUT"||y.tagName==="TEXTAREA"||y.isContentEditable);g.key==="Escape"&&r(!1),!S&&(g.key==="g"||g.key==="G")&&!g.metaKey&&!g.ctrlKey&&i(w=>!w)};return window.addEventListener("keydown",c),()=>window.removeEventListener("keydown",c)},[]);const s=e.demos,a=v.useMemo(()=>{if(!t.startsWith("/demo"))return e.crumb(t);const c=t.replace(/^\/demo\/?/,""),g=s.entries.find(y=>y.meta.slug===c);return g?`demo ${Ad(s,g)} · ${g.meta.title}`:"demo · 逐项示例"},[t,e,s]),u=v.useMemo(()=>e.nav.map((c,g)=>({...c,no:String(g+1).padStart(2,"0")})),[e.nav]);return f.jsxs("div",{className:`shell${n?" is-nav-open":""}${o?" is-guides":""}`,children:[f.jsx("a",{className:"skip-link",href:"#main",onClick:c=>{c.preventDefault();const g=document.getElementById("main");g==null||g.setAttribute("tabindex","-1"),g==null||g.focus(),g==null||g.scrollIntoView({block:"start"})},children:"跳到内容"}),f.jsxs("aside",{className:"side","aria-label":"站点导航",children:[f.jsxs(Tl,{to:"/",className:"brand",children:[f.jsx("span",{className:"brand-mark","aria-hidden":!0,children:e.brand}),f.jsxs("span",{children:[f.jsx("strong",{children:e.pkg}),f.jsx("em",{children:e.subtitle})]})]}),f.jsxs("nav",{children:[u.map(c=>f.jsxs(Tl,{to:c.to,className:`nav-item${t===c.to?" is-active":""}`,"aria-current":t===c.to?"page":void 0,children:[f.jsx("em",{"aria-hidden":!0,children:c.no}),f.jsx("span",{children:c.label}),c.hint?f.jsx("code",{children:c.hint}):null]},c.to)),f.jsx(Lm,{demos:e.demos,pathname:t})]}),f.jsxs("div",{className:"side-foot",children:[f.jsx("p",{children:e.footer[0]}),f.jsx("p",{className:"muted",children:e.footer[1]})]})]}),f.jsx("button",{type:"button",className:"scrim","aria-label":"关闭导航",tabIndex:n?0:-1,onClick:()=>r(!1)}),f.jsxs("div",{className:"main",id:"main",children:[f.jsxs("header",{className:"topbar",children:[f.jsx("button",{type:"button",className:"nav-toggle","aria-label":n?"关闭导航":"打开导航","aria-expanded":n,onClick:()=>r(c=>!c),children:f.jsx("span",{"aria-hidden":!0})}),f.jsx("span",{className:"crumb",children:a}),f.jsxs("div",{className:"topbar-right",children:[(p=e.stats)==null?void 0:p.map(c=>f.jsxs("span",{className:"topbar-stat",title:c.title,children:[f.jsx("b",{children:c.value})," ",c.label]},c.label)),f.jsxs("button",{type:"button",className:"topbar-btn","aria-pressed":o,onClick:l,title:"显示栏位参考线（快捷键 G）",children:[f.jsx("i",{"aria-hidden":!0}),"guides"]}),f.jsx("a",{className:"topbar-link",href:e.sourceUrl??$m,target:"_blank",rel:"noreferrer",children:"source ↗"})]})]}),f.jsx("div",{className:"guides","aria-hidden":!0}),f.jsx(v.Suspense,{fallback:f.jsx("div",{className:"loading",children:"loading modules…"}),children:f.jsx(Nm,{children:f.jsxs(km,{children:[e.routes.map(c=>f.jsx(Fn,{path:c.path,element:c.element},c.path)),f.jsx(Fn,{path:"/demo",element:f.jsx(_l,{to:`/demo/${e.demos.entries[0].meta.slug}`,replace:!0})}),f.jsx(Fn,{path:"/demo/:slug",element:f.jsx(Om,{demos:e.demos})}),f.jsx(Fn,{path:"*",element:f.jsx(_l,{to:"/",replace:!0})})]})})})]})]})}function Im({config:e}){return f.jsx(Rm,{children:f.jsx(Mm,{config:e})})}const Am="modulepreload",Dm=function(e,t){return new URL(e,t).href},tu={},Ns=function(t,n,r){let o=Promise.resolve();if(n&&n.length>0){const l=document.getElementsByTagName("link"),s=document.querySelector("meta[property=csp-nonce]"),a=(s==null?void 0:s.nonce)||(s==null?void 0:s.getAttribute("nonce"));o=Promise.allSettled(n.map(u=>{if(u=Dm(u,r),u in tu)return;tu[u]=!0;const p=u.endsWith(".css"),c=p?'[rel="stylesheet"]':"";if(!!r)for(let S=l.length-1;S>=0;S--){const w=l[S];if(w.href===u&&(!p||w.rel==="stylesheet"))return}else if(document.querySelector(`link[href="${u}"]${c}`))return;const y=document.createElement("link");if(y.rel=p?"stylesheet":Am,p||(y.as="script"),y.crossOrigin="",y.href=u,a&&y.setAttribute("nonce",a),document.head.appendChild(y),p)return new Promise((S,w)=>{y.addEventListener("load",S),y.addEventListener("error",()=>w(new Error(`Unable to preload CSS for ${u}`)))})}))}function i(l){const s=new Event("vite:preloadError",{cancelable:!0});if(s.payload=l,window.dispatchEvent(s),!s.defaultPrevented)throw l}return o.then(l=>{for(const s of l||[])s.status==="rejected"&&i(s.reason);return t().catch(i)})},Dd=v.forwardRef((e,t)=>{const{attributes:n,selection:r={},disabledMap:o={},variant:i=null,onSelectOption:l,slots:s,children:a,containerClassName:u,containerStyle:p,onMount:c,onUnmount:g,debug:y,containerRefExternal:S}=e,w=v.useRef(null),k=S??w,[,m]=v.useState(0),[d,h]=v.useState(!1);v.useImperativeHandle(t,()=>({getContainer:()=>k.current,forceUpdate:()=>m(P=>P+1),getSize:()=>{var P,C;return{width:((P=k.current)==null?void 0:P.offsetWidth)??0,height:((C=k.current)==null?void 0:C.offsetHeight)??0}},getSelection:()=>r,getVariant:()=>i}),[r,i]),v.useEffect(()=>(y&&console.debug("[SkuSelectorCore] mounted"),h(!0),c==null||c(),()=>g==null?void 0:g()),[]);const x=(P,C)=>{var R;return((R=P.options.find(M=>M.id===C))==null?void 0:R.label)??C},E=n.map(P=>({attr:P,optionId:r[P.name]})).filter(P=>!!P.optionId);return f.jsxs("div",{ref:k,className:u,style:{position:"relative",color:"#1f2328",...p},children:[s==null?void 0:s.before,f.jsx("div",{"data-testid":"sku-groups",children:n.map(P=>f.jsxs("div",{"data-testid":`sku-attr-${P.name}`,style:{display:"flex",alignItems:"center",gap:8,flexWrap:"wrap",marginBottom:8},children:[f.jsx("span",{style:{fontSize:12,color:"#4a5056",minWidth:48},children:P.name}),P.options.map(C=>{var j;const R=r[P.name]===C.id,M=((j=o[P.name])==null?void 0:j.has(C.id))??!1;return f.jsxs("button",{type:"button","data-testid":`sku-opt-${P.name}-${C.id}`,"data-selected":R?"true":"false","aria-pressed":R,disabled:M,onClick:()=>l==null?void 0:l(P.name,C.id),style:{display:"inline-flex",alignItems:"center",gap:4,padding:"6px 10px",borderRadius:6,border:R?"2px solid #2b7de9":"1px solid #d0d4da",background:M?"#f2f3f5":R?"#e8f0fe":"#fff",color:M?"#6f757b":"#1f2328",cursor:M?"not-allowed":"pointer",fontSize:12},children:[C.image?f.jsx("img",{src:C.image,alt:"",style:{width:16,height:16,objectFit:"cover",borderRadius:3}}):null,C.label]},C.id)})]},P.name))}),f.jsx("div",{"data-testid":"sku-summary",style:{fontSize:12,color:"#3c4147",marginTop:4},children:E.length?f.jsxs("span",{children:["已选：",E.map(P=>`${P.attr.name}:${x(P.attr,P.optionId)}`).join(" / "),i?f.jsxs("span",{"data-testid":"sku-summary-variant",children:["（SKU：",i.sku,typeof i.price=="number"?` · ¥${i.price}`:"",typeof i.stock=="number"?` · 库存 ${i.stock}`:"","）"]}):f.jsx("span",{"data-testid":"sku-summary-novariant",children:"（无可售组合）"})]}):f.jsx("span",{children:"请选择规格"})}),s==null?void 0:s.overlay,s==null?void 0:s.after,s==null?void 0:s.footer,a,d?f.jsx("span",{"data-testid":"sku-mounted",hidden:!0}):null]})});Dd.displayName="SkuSelectorCore";function zm(){const e=new Map,t=new Map,n=(l,s)=>{const a=e.get(l);if(a)for(const u of[...a])try{u(s)}catch(p){console.warn(`[PluginBus] handler error for event "${l}"`,p)}},r=(l,s)=>{let a=e.get(l);return a||(a=new Set,e.set(l,a)),a.add(s),()=>{a==null||a.delete(s)}},o=(l,s)=>{const a=u=>{s(u),i(l,a)};return r(l,a)},i=(l,s)=>{var a;if(!s){e.delete(l);return}(a=e.get(l))==null||a.delete(s)};return{emit:n,on:r,once:o,off:i,getData:l=>t.get(l),setData:(l,s)=>{const a=t.get(l);t.set(l,s),a!==s&&n(l,s)},deleteData:l=>{const s=t.has(l);t.delete(l),s&&n(l,void 0)},hasData:l=>t.has(l),getAll:()=>{const l={};return t.forEach((s,a)=>{l[a]=s}),l},clear:()=>{e.clear(),t.clear()}}}function zd(e){const t=new Map(e.map(s=>[s.name,s])),n=[];for(const s of e)for(const a of s.dependencies??[])t.has(a)||n.push(`${s.name} -> ${a}`);const r=[],o=new Set,i=[...e],l=s=>(s.dependencies??[]).every(a=>o.has(a)||!t.has(a));for(;i.length>0;){const s=i.filter(l);if(s.length===0)throw new Error(`[vane/plugin-core] 插件循环依赖: ${i.map(u=>u.name).join(" <-> ")}`);let a=s[0];for(const u of s)(u.priority??0)>(a.priority??0)&&(a=u);r.push(a),o.add(a.name),i.splice(i.indexOf(a),1)}return n.length>0&&console.warn(`[vane/plugin-core] 以下插件依赖未注册，将被忽略:
  ${n.join(`
  `)}`),r}async function Um(e,t={}){const{timeout:n=3e3,name:r="anonymous",hook:o="unknown"}=t;if(!n||n<=0)return await e();let i;const l=new Promise((s,a)=>{i=setTimeout(()=>{a(new Error(`[vane/plugin-core] 插件 ${r} 的钩子 ${o} 超时(${n}ms)`))},n)});try{return await Promise.race([Promise.resolve().then(e),l])}finally{i&&clearTimeout(i)}}const Bm=new Set(["onMount","onUnmount","onPropsChange","onError"]);function Fm(e={}){const t=e.logger??console,n=e.sandbox??!0,r=e.timeout??3e3,o=[],i=[],l=new Map,s=()=>zd([...l.values()].filter(u=>u.enabled!==!1)),a=u=>{l.set(u.name,{...u,enabled:u.enabled??!0}),u.init&&Promise.resolve(u.init()).catch(p=>{t.warn(`[PluginManager] init failed for ${u.name}`,p)})};return{register:a,registerAll:u=>{for(const p of u)a(p)},unregister:u=>{const p=l.get(u);p&&(p.destroy&&Promise.resolve(p.destroy()).catch(c=>{t.warn(`[PluginManager] destroy failed for ${p.name}`,c)}),l.delete(u))},getPlugin:u=>l.get(u),getAllPlugins:()=>[...l.values()],getEnabledPlugins:()=>[...l.values()].filter(u=>u.enabled!==!1),getExecutionOrder:s,enable:u=>{const p=l.get(u);p&&(p.enabled=!0)},disable:u=>{const p=l.get(u);p&&(p.enabled=!1)},has:u=>l.has(u),executeHook:async(u,p,...c)=>{var g,y;for(const S of s()){const w=(g=S.hooks)==null?void 0:g[u];if(typeof w!="function")continue;const k=S.sandbox??n,m=S.timeout??r;let d;try{d=k?await Um(()=>w(p,...c),{timeout:m,name:S.name,hook:String(u)}):await w(p,...c)}catch(h){if(o.push({plugin:S.name,hook:String(u),error:h}),t.warn(`[PluginManager] hook ${String(u)} failed in ${S.name}`,h),(y=e.onError)==null||y.call(e,S.name,String(u),h),u==="onError")break;continue}if(Bm.has(String(u))&&typeof d=="function"){i.push(d);continue}if(d===!1)return!1;if(d!==void 0&&d!==!0)return d}},clear:()=>{const u=i.splice(0);for(const p of u.reverse())try{p()}catch(c){t.warn("[PluginManager] cleanup failed",c)}for(const p of l.values())p.destroy&&Promise.resolve(p.destroy()).catch(c=>{t.warn(`[PluginManager] destroy failed for ${p.name}`,c)});l.clear()},getErrors:()=>[...o]}}var Vm=Object.defineProperty,Hm=(e,t,n)=>t in e?Vm(e,t,{enumerable:!0,configurable:!0,writable:!0,value:n}):e[t]=n,Qm=(e,t,n)=>Hm(e,t+"",n);class Wm extends vr.Component{constructor(){super(...arguments),Qm(this,"state",{error:null})}static getDerivedStateFromError(t){return{error:t}}componentDidCatch(t,n){var r,o;console.warn("[vane/plugin-core] 插件渲染错误已被隔离",t,n),(o=(r=this.props).onError)==null||o.call(r,t,n)}render(){const{error:t}=this.state;return t?this.props.fallback?this.props.fallback(t):null:this.props.children}}let Hr=null;function Km(e=!1){if(Hr&&!e)return Hr;const t=typeof window<"u"?window.innerWidth:1024,n=typeof window<"u"?window.innerHeight:768,r=typeof window<"u"&&window.devicePixelRatio||1,o=typeof navigator<"u"&&navigator.userAgent||"",i=/iPad|Tablet/i.test(o),l=/Mobile|Android|iPhone/i.test(o),s=typeof window<"u"&&("ontouchstart"in window||(navigator.maxTouchPoints??0)>0);return Hr={type:i?"tablet":l?"mobile":"desktop",os:o,browser:o,devicePixelRatio:r,viewportWidth:t,viewportHeight:n,isTouchDevice:s,isRetina:r>=2},Hr}function qm(e){const{plugins:t,props:n,data:r,initialState:o,containerRef:i,enableDebug:l=!1,managerOptions:s,extendContext:a}=e,u=v.useRef(null),p=i??u,c=v.useRef(null);c.current||(c.current=Fm(s));const g=c.current,y=v.useRef(null);y.current||(y.current=zm());const S=y.current,w=v.useRef(new Map),[k,m]=v.useState(o??{}),[,d]=v.useState(0),h=v.useCallback(()=>d(W=>W+1),[]),x=v.useMemo(()=>Km(),[]),E=t.map(W=>W.name).join("|");v.useLayoutEffect(()=>{g.clear(),g.registerAll(t),l&&console.debug("[vane/plugin-core] plugins registered:",E)},[E]),v.useLayoutEffect(()=>()=>{g.executeHook("onUnmount",C.current),g.clear()},[g]);const P=v.useMemo(()=>zd(t),[E]),C=v.useRef(null),R=v.useMemo(()=>{const W={props:n,data:r,bus:S,refs:{container:p,getContainer:()=>p.current},state:k,setState:U=>m(Te=>({...Te,...U})),shared:w.current,deviceInfo:x,forceUpdate:h,getSize:()=>{const U=p.current;return U?{width:U.offsetWidth,height:U.offsetHeight}:{width:0,height:0}},logger:console};return a?a(W):W},[n,r,k,x,S,a]);C.current=R;const M=v.useCallback(W=>{var Te;let U=W;for(const bt of P){const Ke=(Te=bt.hooks)==null?void 0:Te.transformProps;typeof Ke=="function"&&(U=Ke(U))}return U},[P]),j=v.useCallback(W=>{var Te;let U=W;for(const bt of P){const Ke=(Te=bt.hooks)==null?void 0:Te.transformData;typeof Ke=="function"&&(U=Ke(C.current,U))}return U},[P]),ae=v.useCallback((W,...U)=>g.executeHook(W,C.current,...U),[g]);return{manager:g,bus:S,context:R,state:k,setState:R.setState,execute:ae,transformProps:M,transformData:j,orderedPlugins:P}}v.createContext(null);function Qr(e,t,n){const{hook:r,position:o="after"}=n;return e.filter(i=>i.enabled!==!1).filter(i=>{var l;return typeof((l=i.hooks)==null?void 0:l[r])=="function"}).filter(i=>{var l;return(((l=i.config)==null?void 0:l.slotPosition)??"after")===o}).sort((i,l)=>{var s,a;return(((s=i.config)==null?void 0:s.order)??0)-(((a=l.config)==null?void 0:a.order)??0)||(l.priority??0)-(i.priority??0)}).map((i,l)=>{try{const s=i.hooks[r](t);return s==null?null:f.jsx(Wm,{children:s},`vane-slot-${i.name}-${l}`)}catch(s){return console.warn(`[vane/plugin-core] 插件 ${i.name} 的 ${r} 渲染失败`,s),null}})}function Gm(e,t){return t.ignoreOutOfStock??!0?e.filter(r=>r.stock!==0):e}function Jm(e,t,n,r={}){const o=Gm(t,r),i={},l={};for(const s of e){const a=new Set;for(const u of s.options){const p={...n,[s.name]:u.id},c=Object.keys(p);c.length>0&&o.some(y=>c.every(S=>y.attrValues[S]===p[S]))||a.add(u.id)}i[s.name]=a,l[s.name]=s.options.length-a.size}return{disabledMap:i,availableCount:l}}function Ym(e,t,n){if(!t.length)return null;for(const o of t)if(!n[o.name])return null;const r=Object.keys(n);return e.find(o=>r.every(i=>o.attrValues[i]===n[i]))??null}function Xm(e,t){return e.length?e.every(n=>!!t[n.name]):!1}function Zm(e,t){const n=Array.isArray(t)?{plugins:t}:t,{plugins:r,enableDebug:o=!1}=n,i=v.forwardRef((l,s)=>{const a=v.useRef(null),u=l.attributes??[],p=l.variants??[],c=v.useCallback(P=>{var ae;const C=((ae=P.state)==null?void 0:ae.selection)??{},{disabledMap:R}=Jm(u,p,C,{ignoreOutOfStock:l.ignoreOutOfStock??!0}),M=Ym(p,u,C);return{...P,selection:C,disabledMap:R,variant:M,isComplete:Xm(u,C),selectOption:(W,U)=>{const Te=C[W]===U?Object.fromEntries(Object.entries(C).filter(([bt])=>bt!==W)):{...C,[W]:U};P.setState({selection:Te})},clearSelection:()=>P.setState({selection:{}})}},[l,u,p]),g=qm({plugins:r,props:l,data:l.data,initialState:{selection:l.defaultSelection??{}},containerRef:a,extendContext:c,enableDebug:o}),y=g.context,S=v.useCallback((P,...C)=>g.execute(P,...C),[g.manager]);v.useEffect(()=>{S("onMount")},[S]);const w=v.useRef(l);v.useEffect(()=>{const P=w.current;P!==l&&(w.current=l,S("onPropsChange",P,l))},[l,S]);const{selection:k,variant:m}=y,d=v.useRef(null);v.useEffect(()=>{var C,R;const P=d.current;d.current=k,!(P===null||P===k)&&(S("onSkuChange",k,m),g.bus.emit("sku:change",{attrs:k,variant:m}),(C=l.onChange)==null||C.call(l,k,m),m&&((R=l.onValidSkuChange)==null||R.call(l,m)))},[k,m,S]);const h={before:Qr(g.orderedPlugins,y,{hook:"renderHeader",position:"before"}),overlay:Qr(g.orderedPlugins,y,{hook:"renderOverlay"}),after:Qr(g.orderedPlugins,y,{hook:"renderHeader",position:"after"}),footer:Qr(g.orderedPlugins,y,{hook:"renderFooter"})},x=g.transformProps(l),E={...x,containerRefExternal:a,debug:x.debug??o,slots:h,selection:y.selection,disabledMap:y.disabledMap,variant:y.variant,onSelectOption:y.selectOption,onMount:()=>{var P;(P=x.onMount)==null||P.call(x)},onUnmount:()=>{var P;(P=x.onUnmount)==null||P.call(x)}};return f.jsx(e,{ref:s,...E})});return i.displayName="WithPlugins(SkuSelectorCore)",i}function F(e=[]){return Zm(Dd,e)}F([]);function eh(e={}){return{name:"PriceRange",version:"0.1.0",description:"价格区间：未命中变体时展示可选范围的价格区间",priority:45,config:{slotPosition:"after",order:5,...e},hooks:{renderOverlay:t=>{if(t.variant&&!e.showWhenMatched)return null;const n=t.props.attributes??[],r=t.selection??{},o=Object.keys(r),l=(t.props.variants??[]).filter(c=>o.every(g=>c.attrValues[g]===r[g])).map(c=>c.price).filter(c=>typeof c=="number");if(!l.length)return null;const s=Math.min(...l),a=Math.max(...l),u=e.currency??"¥",p=e.separator??"–";return f.jsxs("div",{"data-testid":"sku-price-range",style:{display:"flex",alignItems:"baseline",gap:6,marginTop:6},children:[f.jsxs("span",{style:{fontSize:16,fontWeight:700,color:"#b32d08"},children:[u,s,s!==a?`${p}${u}${a}`:""]}),n.length&&!t.isComplete?f.jsx("span",{style:{fontSize:11,color:"#5b6064"},children:"（请先选择规格）"}):null]})}}}}const th="PriceRange",nh="价格区间：未选全或组合无货时，按当前选择过滤变体后取 min/max 展示价格区间（如 ¥199–¥269）；命中变体后默认退场，把价格区让给 PriceLink。",rh="0.1.0",oh=["sku","price","range"],ih=[{name:"currency",type:"string",default:'"¥"',description:"货币符号"},{name:"separator",type:"string",default:'"–"',description:"区间连接符"},{name:"showWhenMatched",type:"boolean",default:"false",description:"命中变体时是否仍显示区间（默认让位给 PriceLink）"}],lh="const Sku = createSkuSelector([createPriceRangePlugin(), createPriceLinkPlugin()]);",sh=["按当前选择过滤变体，区间随选择动态收窄",'最低价=最高价时只显示一个价格，不画成 "¥199–¥199"',"与 PriceLink 互斥接力：未命中显区间、命中显单价"],ah=["多规格商品的价格引导","未选规格时的价格预览"],uh=["与 PriceLink 同走 renderOverlay 段，靠 config.order（PriceRange=5）排在前面。","两者可同时装载而不重影：命中变体时 PriceRange 自动返回 null。"],Ud={name:th,description:nh,since:rh,tags:oh,config:ih,example:lh,features:sh,useCases:ah,notes:uh},Pr=Object.assign(eh,{meta:Ud});function ch(e={}){return{name:"PriceLink",version:"0.1.0",description:"价格联动：把命中变体的价格渲染到浮层",priority:50,config:e,hooks:{renderOverlay:t=>{const n=t.variant;if(!n||typeof n.price!="number")return null;const r=e.currency??"¥",i=(e.showOriginal??!0)&&typeof n.originalPrice=="number"&&n.originalPrice>n.price;return f.jsxs("div",{"data-testid":"sku-price",style:{display:"flex",alignItems:"baseline",gap:6,marginTop:6},children:[f.jsxs("span",{style:{fontSize:18,fontWeight:700,color:"#b32d08"},children:[r,n.price]}),i?f.jsxs("s",{"data-testid":"sku-price-original",style:{fontSize:12,color:"#6b7076"},children:[r,n.originalPrice]}):null,e.discountText?f.jsx("span",{"data-testid":"sku-price-discount",style:{fontSize:11,padding:"1px 6px",borderRadius:4,background:"#fff1f0",color:"#b32d08"},children:e.discountText}):null]})}}}}const dh="PriceLink",fh="价格联动：把命中变体的价格渲染到浮层（选中摘要之后），支持原价删除线与折扣文案。",ph="0.1.0",gh=["sku","price","overlay"],mh=[{name:"currency",type:"string",default:'"¥"',description:"货币符号"},{name:"showOriginal",type:"boolean",default:"true",description:"是否展示原价（原价 > 现价时才画删除线）"},{name:"discountText",type:"string",default:"-",description:'折扣文案，如 "限时8折"'}],hh='const Sku = createSkuSelector([createPriceLinkPlugin({ currency: "¥", discountText: "限时8折" })]);',yh=["订阅命中变体，未命中（未选全/无货）时不渲染价格区","原价高于现价时自动画删除线","定价策略可替换：默认取 variant.price"],vh=["多规格商品的价格联动","带折扣文案的促销价展示"],Sh=["走 renderOverlay 段，渲染位置在 core「选中摘要」之后、Quota 提示条之前。","priority 50；渲染插槽内 priority 越大越靠后。"],Bd={name:dh,description:fh,since:ph,tags:gh,config:mh,example:hh,features:yh,useCases:vh,notes:Sh},Cr=Object.assign(ch,{meta:Bd}),oe=[{name:"颜色",options:[{id:"red",label:"红",image:bi("#d4380d")},{id:"blue",label:"蓝",image:bi("#2b7de9")},{id:"green",label:"绿",image:bi("#389e0d")}]},{name:"尺码",options:[{id:"s",label:"S"},{id:"m",label:"M"},{id:"l",label:"L"}]}],ee=[{sku:"TEE-RED-S",attrValues:{颜色:"red",尺码:"s"},price:199,originalPrice:299,stock:5,quota:2,image:Nt("red-s")},{sku:"TEE-RED-M",attrValues:{颜色:"red",尺码:"m"},price:219,originalPrice:299,stock:3,image:Nt("red-m")},{sku:"TEE-RED-L",attrValues:{颜色:"red",尺码:"l"},price:239,stock:4,image:Nt("red-l")},{sku:"TEE-BLUE-S",attrValues:{颜色:"blue",尺码:"s"},price:209,stock:8,image:Nt("blue-s")},{sku:"TEE-BLUE-M",attrValues:{颜色:"blue",尺码:"m"},price:229,stock:6,image:Nt("blue-m")},{sku:"TEE-GREEN-M",attrValues:{颜色:"green",尺码:"m"},price:249,stock:2,image:Nt("green-m")},{sku:"TEE-GREEN-L",attrValues:{颜色:"green",尺码:"l"},price:269,stock:0,image:Nt("green-l")}];function bi(e){return`data:image/svg+xml,${encodeURIComponent(`<svg xmlns="http://www.w3.org/2000/svg" width="16" height="16"><rect width="16" height="16" rx="3" fill="${e}"/></svg>`)}`}function Nt(e){return`https://picsum.photos/seed/${e}/240/240`}const kh=[{label:"限时8折",value:"限时8折"},{label:"满300减60",value:"满300减60"},{label:"无（不传）",value:""}],xh={background:"#fff",borderRadius:2,padding:14,color:"#1f2328",width:"100%"},wh={slug:"quickstart",title:"最小可用选择器",group:"basic",capability:"core-assembly",intro:"5 行装配出能用的选择器：Core（按钮组 + 禁用推导 + 摘要）起步，按需叠价格插件。",why:"先跑通内核，再增量叠插件——规格选择的长尾需求多，全塞进内核只会越来越难改。",plugs:[{fn:"createPriceRangePlugin",why:"未选全时兜底显示价格区间，价格区不空窗"},{fn:"createPriceLinkPlugin",cfg:"discountText: '限时8折'",why:"命中变体后显示单价与原价删除线"}],props:["attributes={attributes}","variants={variants}"],controls:[{key:"withRange",label:"加价格区间",kind:"switch",init:!1},{key:"withLink",label:"加价格联动",kind:"switch",init:!1}],stageHeight:300};function Ph({cfg:e}){const t=!!e.withRange,n=!!e.withLink,r=v.useMemo(()=>F([...t?[Pr()]:[],...n?[Cr({discountText:"限时8折"})]:[]]),[t,n]);return f.jsxs("div",{style:xh,children:[f.jsx(r,{attributes:oe,variants:ee}),f.jsx("p",{style:{margin:"10px 0 0",fontSize:11,color:"#5b6064"},children:"两个开关都关就是裸 Core：选「蓝」后 L 置灰，摘要告诉你命中的变体。"})]})}const Ch=Object.freeze(Object.defineProperty({__proto__:null,default:Ph,meta:wh},Symbol.toStringTag,{value:"Module"})),_h={background:"#fff",borderRadius:2,padding:14,color:"#1f2328",width:"100%"},Eh={slug:"disable",title:"禁用推导（内置）",group:"basic",capability:"disable-derivation",intro:"组合矩阵在内核：选「蓝」后 L 自动置灰（缺 blue-l 变体），死路提前画出来。",why:"用户不该点了才发现没货；把「选不出结果的组合」提前置灰，是规格选择器的体验底线。",plugs:[],props:["attributes={attributes}","variants={variants}",{text:"defaultSelection={{ 颜色: '{{preset}}' }}",when:e=>e.preset!=="none"},"onChange={handleChange}"],note:"推导是纯函数 buildAvailability(attributes, variants, selection)，不依赖 React，可直接单测。",controls:[{key:"preset",label:"预选颜色",kind:"select",init:"none",options:[{label:"不预选",value:"none"},{label:"红 red",value:"red"},{label:"蓝 blue",value:"blue"}]}],stageHeight:300};function Rh({cfg:e,log:t}){const n=String(e.preset),r=v.useMemo(()=>F([]),[]);return f.jsxs("div",{style:_h,children:[f.jsx(r,{attributes:oe,variants:ee,defaultSelection:n==="none"?void 0:{颜色:n},onChange:(o,i)=>t(i?`命中变体 ${i.sku} · ${JSON.stringify(o)}`:`未命中可售变体 · ${JSON.stringify(o)}`,i?"event":"warn")},n),f.jsx("p",{style:{margin:"10px 0 0",fontSize:11,color:"#5b6064"},children:"点「蓝」看主角戏：L 因缺 blue-l 被置灰；defaultSelection 只在挂载时生效一次，所以预选切换靠 key 重挂载。"})]})}const Th=Object.freeze(Object.defineProperty({__proto__:null,default:Rh,meta:Eh},Symbol.toStringTag,{value:"Module"})),bh={background:"#fff",borderRadius:2,padding:14,color:"#1f2328",width:"100%"},ji=oe[0],jh=oe[1],nu=ee.filter(e=>e.attrValues.颜色!=="green"),$h={slug:"two-attr",title:"双属性小矩阵",group:"basic",capability:"matrix",intro:"颜色 × 尺码的小矩阵：拖开关删掉「红」，attributes 数组热更新，禁用推导随之重算。",why:"后台改规格、运营下架某选项，前端改的只是数据；矩阵怎么变是内核的事。",plugs:[],props:["attributes={attributes}","variants={variants}"],note:"buildAvailability / matchVariant / isSelectionComplete 都是纯函数，服务端下发同一份结构也能直接算。",controls:[{key:"dropRed",label:"删掉红色选项",kind:"switch",init:!1}],stageHeight:300};function Nh({cfg:e,log:t}){const n=!!e.dropRed,r=v.useMemo(()=>F([]),[]),o=v.useMemo(()=>[{...ji,options:n?ji.options.filter(l=>l.id!=="red"):ji.options.slice(0,2)},jh],[n]),i=v.useMemo(()=>n?nu.filter(l=>l.attrValues.颜色!=="red"):nu,[n]);return f.jsxs("div",{style:bh,children:[f.jsx(r,{attributes:o,variants:i,onChange:(l,s)=>t(s?`命中 ${s.sku}`:`未命中 · ${JSON.stringify(l)}`,s?"event":"warn")}),f.jsx("p",{style:{margin:"10px 0 0",fontSize:11,color:"#5b6064"},children:"先选「蓝」再拖开关：红消失、选择保留，L 依旧置灰 —— blue-l 本就不存在，小矩阵下它成了永久死路。"})]})}const Lh=Object.freeze(Object.defineProperty({__proto__:null,default:Nh,meta:$h},Symbol.toStringTag,{value:"Module"})),Oh={background:"#fff",borderRadius:2,padding:14,color:"#1f2328",width:"100%"},Mh={slug:"ignore-stock",title:"缺货是否参与推导",group:"basic",capability:"ignore-out-of-stock",intro:"green-l 库存 0：默认把它当不存在（通往它的选项置灰）；关掉开关后变为可选。",why:"「缺货直接置灰」还是「可点但不让下单」是两种运营策略；两种都常见，内核不该替你拍板。",plugs:[],props:["attributes={attributes}","variants={variants}","ignoreOutOfStock={{{ignore}}}"],note:"关掉后 green-l 可选且仍会命中变体（stock=0）——加购拦截交给 Quota 或宿主，推导不管下单。",controls:[{key:"ignore",label:"缺货视为不存在",kind:"switch",init:!0}],stageHeight:300};function Ih({cfg:e,log:t}){const n=!!e.ignore,r=v.useMemo(()=>F([]),[]);return f.jsxs("div",{style:Oh,children:[f.jsx(r,{attributes:oe,variants:ee,ignoreOutOfStock:n,onChange:(o,i)=>i?t(`命中 ${i.sku} · 库存 ${i.stock??"—"}`,"event"):t(`未命中 · ${JSON.stringify(o)}`,"warn")}),f.jsx("p",{style:{margin:"10px 0 0",fontSize:11,color:"#5b6064"},children:"先选「绿」：L 置灰（缺货默认视为不存在）。关掉开关后 L 可选，点它会命中 stock=0 的 TEE-GREEN-L。"})]})}const Ah=Object.freeze(Object.defineProperty({__proto__:null,default:Ih,meta:Mh},Symbol.toStringTag,{value:"Module"}));function Dh(e={}){const t=(n,r,o,i)=>{var s;if(e.onlyMatched&&!i)return;const l={name:r,selection:o,variant:i,at:Date.now()};n.bus.emit("sku:analytics",l),(s=e.onEvent)==null||s.call(e,l)};return{name:"Analytics",version:"0.1.0",description:"规格选择埋点：回调 + 总线双通道，不渲染 UI",priority:10,config:e,hooks:{onMount:n=>{t(n,"sku:mount",n.selection,n.variant)},onSkuChange:(n,r,o)=>{t(n,o?"sku:change":"sku:invalid",r,o)}}}}const zh="Analytics",Uh="规格选择埋点：sku:mount / sku:change / sku:invalid 三类事件，回调（onEvent）与总线（sku:analytics）双通道，自身不渲染 UI。",Bh="0.1.0",Fh=["sku","analytics","event"],Vh=[{name:"onEvent",type:"(event) => void",default:"-",description:"统一事件出口，推荐接自己的埋点 SDK"},{name:"onlyMatched",type:"boolean",default:"false",description:"只在命中变体时上报；关闭时未命中也上报，便于发现「选不出来」的组合"}],Hh="const Sku = createSkuSelector([createAnalyticsPlugin({ onEvent: (e) => track(e.name, e) })]);",Qh=["三类事件：挂载 / 命中变更 / 无效组合","未命中也上报（默认），能发现「用户点得到但选不出」的坏组合","回调与总线双通道，不绑定任何 SDK"],Wh=["转化漏斗埋点","选品与库存分析"],Kh=["不占用渲染插槽，是纯事件插件。","priority 10，事件钩子按 priority 从大到小执行（会晚于 Quota 等）。"],Fd={name:zh,description:Uh,since:Bh,tags:Fh,config:Vh,example:Hh,features:Qh,useCases:Wh,notes:Kh},Ls=Object.assign(Dh,{meta:Fd});function qh(e={}){const t=n=>{var o,i;const r=(o=n.variant)==null?void 0:o.image;r&&((i=e.onImageChange)==null||i.call(e,r),n.bus.emit("sku:image",r))};return{name:"ImageLink",version:"0.1.0",description:"规格切主图：命中变体带图时抛事件，不渲染 UI",priority:30,config:e,hooks:{onMount:n=>{t(n)},onSkuChange:n=>{t(n)}}}}const Gh="ImageLink",Jh="规格切主图：命中变体带 image 时抛事件（回调 + 总线 sku:image），自身不渲染任何 UI。",Yh="0.1.0",Xh=["sku","image","event"],Zh=[{name:"onImageChange",type:"(image: string) => void",default:"-",description:"主图切换回调（推荐用法）"}],ey="const Sku = createSkuSelector([createImageLinkPlugin({ onImageChange: setMainImage })]);",ty=["只发事件不渲染：主图由外层 gallery / card 负责，联动与渲染解耦","同时回调与总线广播（sku:image），两种接法都支持","未命中变体或变体无图时不发事件"],ny=["选颜色切主图","规格图与 vane-gallery 联动"],ry=["不占用任何渲染插槽，纯粹是事件插件。","priority 30；事件钩子按 priority 从大到小执行。"],Vd={name:Gh,description:Jh,since:Yh,tags:Xh,config:Zh,example:ey,features:ty,useCases:ny,notes:ry},Ko=Object.assign(qh,{meta:Vd});function oy(e={}){const t=e.preventDefault??!0;return{name:"KeyboardNav",version:"0.1.0",description:"键盘漫游：方向键在规格按钮间移动并选择",priority:25,config:e,hooks:{onMount:n=>{var l,s;const r=((s=(l=n.refs).getContainer)==null?void 0:s.call(l))??null;if(!r)return;const o=a=>Array.from(a.querySelectorAll('[data-testid^="sku-opt-"]')).filter(u=>!u.disabled),i=a=>{var h,x;const u=a.key==="ArrowLeft"||a.key==="ArrowRight",p=a.key==="ArrowUp"||a.key==="ArrowDown";if(!u&&!p)return;const c=(x=(h=a.target)==null?void 0:h.closest)==null?void 0:x.call(h,'[data-testid^="sku-opt-"]');if(!c)return;const g=Array.from(r.querySelectorAll('[data-testid^="sku-attr-"]')),y=g.findIndex(E=>E.contains(c));if(y<0)return;if(t&&a.preventDefault(),u){const E=o(g[y]),P=E.indexOf(c);if(P<0||!E.length)return;const C=E[(P+(a.key==="ArrowRight"?1:-1)+E.length)%E.length];C.focus(),C.click();return}const S=a.key==="ArrowDown"?1:-1,w=g[y+S];if(!w)return;const k=o(w);if(!k.length)return;const m=o(g[y]).indexOf(c),d=k[Math.min(Math.max(m,0),k.length-1)];d.focus(),d.click()};return r.addEventListener("keydown",i),()=>r.removeEventListener("keydown",i)}}}}const iy="KeyboardNav",ly="键盘漫游：方向键在规格按钮间移动并选择，←→ 同属性切换、↑↓ 跨属性跳转，自动跳过被禁用推导置灰的选项。",sy="0.1.0",ay=["sku","a11y","keyboard"],uy=[{name:"preventDefault",type:"boolean",default:"true",description:"是否阻止方向键的默认滚动行为"}],cy="const Sku = createSkuSelector([createKeyboardNavPlugin()]);",dy=["←→ 同属性切换、↑↓ 跨属性跳转，移动后同时聚焦并选中","自动跳过 disabled 选项，不会「跳到死路上」","纯 DOM 查询实现，不侵入 core 渲染"],fy=["无障碍 / 键盘用户","电视端 / 大屏选购"],py=["不占用渲染插槽，是纯行为插件。","依赖 core 按钮的 data-testid 约定（sku-attr-* / sku-opt-*）。","onMount 返回清理函数，卸载时自动摘除监听。"],Hd={name:iy,description:ly,since:sy,tags:ay,config:uy,example:cy,features:dy,useCases:fy,notes:py},qo=Object.assign(oy,{meta:Hd});function gy(e={}){const t=e.defaultValue??1;return{name:"Quantity",version:"0.1.0",description:"数量步进器：受库存与限购双重上限约束",priority:35,config:{slotPosition:"after",order:20,...e},hooks:{onMount:n=>{var r;typeof((r=n.state)==null?void 0:r.quantity)!="number"&&n.setState({quantity:t})},renderHeader:n=>{var p;const r=n.variant;if(!r)return null;const o=typeof r.stock=="number"?r.stock:1/0,i=typeof r.quota=="number"?r.quota:1/0,l=Math.min(o,i,e.max??1/0);if(!Number.isFinite(l)||l<=0)return null;const s=typeof((p=n.state)==null?void 0:p.quantity)=="number"?Math.min(n.state.quantity,l):Math.min(t,l),a=c=>{var y;const g=Math.max(1,Math.min(c,l));n.setState({quantity:g}),(y=e.onChange)==null||y.call(e,g)},u={width:26,height:26,border:"1px solid #d0d4da",background:"#fff",color:"#1f2328",cursor:"pointer",borderRadius:4,lineHeight:1};return f.jsxs("div",{"data-testid":"sku-quantity","data-quantity":String(s),"data-max":String(l),style:{display:"flex",alignItems:"center",gap:8,marginTop:6},children:[f.jsx("span",{style:{fontSize:12,color:"#4a5056"},children:"数量"}),f.jsx("button",{type:"button","data-testid":"sku-quantity-minus",disabled:s<=1,onClick:()=>a(s-1),style:{...u,color:s<=1?"#7d838a":"#1f2328",cursor:s<=1?"not-allowed":"pointer"},children:"−"}),f.jsx("span",{style:{minWidth:28,textAlign:"center",fontSize:13},children:s}),f.jsx("button",{type:"button","data-testid":"sku-quantity-plus",disabled:s>=l,onClick:()=>a(s+1),style:{...u,color:s>=l?"#7d838a":"#1f2328",cursor:s>=l?"not-allowed":"pointer"},children:"+"}),f.jsxs("span",{style:{fontSize:11,color:"#5b6064"},children:["上限 ",l]})]})}}}}const my="Quantity",hy="数量步进器：上限取「库存」与「限购」的较小值，数量写入内核 state（key: quantity）供宿主加购按钮读取。",yy="0.1.0",vy=["sku","quantity","stepper"],Sy=[{name:"defaultValue",type:"number",default:"1",description:"初始数量"},{name:"max",type:"number",default:"-",description:"硬上限（不传则取 库存/限购 的较小值）"},{name:"onChange",type:"(quantity: number) => void",default:"-",description:"数量变化回调"}],ky="const Sku = createSkuSelector([createQuantityPlugin({ defaultValue: 1 })]);",xy=["上限 = min(库存, 限购, config.max)，到边界时按钮自动禁用","切换变体后数量自动收敛到新上限内","数量写 state，宿主读 context.state.quantity 即可"],wy=["商品详情页选数量","限购商品的步进约束"],Py=["走 renderHeader 的 after 段（order 20），排在库存提示之后。","未命中变体时不渲染（数量依附于具体 SKU）。"],Qd={name:my,description:hy,since:yy,tags:vy,config:Sy,example:ky,features:xy,useCases:wy,notes:Py},Go=Object.assign(gy,{meta:Qd});function Cy(e={}){const t=e.purchasedCount??0,n=r=>{var l;const o=(l=r.variant)==null?void 0:l.quota,i=typeof o=="number"?t<o:!0;return{quota:o,canPurchase:i}};return{name:"Quota",version:"0.1.0",description:"限购校验：渲染限购提示条并暴露 canPurchase 门控",priority:40,config:e,hooks:{onMount:r=>{r.setState({canPurchase:n(r).canPurchase})},onSkuChange:r=>{var i;const{canPurchase:o}=n(r);r.setState({canPurchase:o}),o||(i=e.onExceed)==null||i.call(e)},renderHeader:r=>{const{quota:o,canPurchase:i}=n(r);return typeof o!="number"?null:f.jsxs("div",{"data-testid":"sku-quota","data-can-purchase":i?"true":"false",style:{marginTop:6,fontSize:12,padding:"4px 8px",borderRadius:4,background:i?"#f6ffed":"#fff1f0",color:i?"#237a06":"#b32d08",border:`1px solid ${i?"#b7eb8f":"#ffa39e"}`},children:["每人限购 ",o," 件（已购 ",t,"）",i?"":" · 已达限购上限"]})}}}}const _y="Quota",Ey="限购校验：读 variant.quota 与已购数渲染限购提示条，并把 canPurchase 写入内核 state 供宿主加购按钮门控。",Ry="0.1.0",Ty=["sku","quota","limit"],by=[{name:"purchasedCount",type:"number",default:"0",description:"当前用户已购件数"},{name:"onExceed",type:"() => void",default:"-",description:"超出限购时回调"}],jy="const Sku = createSkuSelector([createQuotaPlugin({ purchasedCount: 1 })]);",$y=["variant.quota 声明限购件数；未声明视为不限购","canPurchase 写入内核 state（onMount / onSkuChange），宿主加购按钮可直接读","超限变体切换时触发 onExceed 回调"],Ny=["限量/每人限购的商品","会员等级限购"],Ly=["走 renderHeader 的 after 段，渲染在价格浮层之后。","canPurchase 只在事件钩子写入，不在渲染期 setState，避免渲染期改状态告警。"],Wd={name:_y,description:Ey,since:Ry,tags:Ty,config:by,example:jy,features:$y,useCases:Ny,notes:Ly},Jo=Object.assign(Cy,{meta:Wd});function Oy(e={}){return{name:"ResetBar",version:"0.1.0",description:"清空重选：一键重置全部规格选择",priority:20,config:{slotPosition:"after",order:40,...e},hooks:{renderHeader:t=>Object.keys(t.selection??{}).length>0?f.jsx("div",{style:{marginTop:8},children:f.jsx("button",{type:"button","data-testid":"sku-reset",onClick:()=>{var r;t.clearSelection(),(r=e.onReset)==null||r.call(e)},style:{padding:"4px 10px",fontSize:12,borderRadius:4,border:"1px solid #d0d4da",background:"#fff",color:"#1f2328",cursor:"pointer"},children:e.text??"清空重选"})}):null}}}const My="ResetBar",Iy="清空重选：一键重置全部规格选择，走 context.clearSelection()。未选任何规格时不渲染。",Ay="0.1.0",Dy=["sku","reset","ux"],zy=[{name:"text",type:"string",default:'"清空重选"',description:"按钮文案"},{name:"onReset",type:"() => void",default:"-",description:"清空后回调"}],Uy='const Sku = createSkuSelector([createResetBarPlugin({ text: "重新选择" })]);',By=["整段重置，不用逐个取消","无选择时自动隐藏，不占版面"],Fy=["选错规格后重来","移动端小屏的快速重置"],Vy=["走 renderHeader 的 after 段（order 40），排在数量之后。","依赖核心 context.clearSelection()（vane-sku 0.1.0 起提供）。"],Kd={name:My,description:Iy,since:Ay,tags:Dy,config:zy,example:Uy,features:By,useCases:Fy,notes:Vy},Yo=Object.assign(Oy,{meta:Kd});function Hy(e={}){return{name:"SkuCode",version:"0.1.0",description:"货号展示：命中变体后显示 SKU 编码",priority:15,config:{slotPosition:"after",order:50,...e},hooks:{renderHeader:t=>{const n=t.variant;return n!=null&&n.sku?f.jsxs("div",{"data-testid":"sku-code",style:{marginTop:6,fontSize:11,color:"#5b6064",fontFamily:"ui-monospace, monospace"},children:[e.label??"货号","：",n.sku]}):null}}}}const Qy="SkuCode",Wy="货号展示：命中变体后显示 SKU 编码，便于客服对单、用户报修与订单核对。",Ky="0.1.0",qy=["sku","code","meta"],Gy=[{name:"label",type:"string",default:'"货号"',description:"前缀文案"}],Jy='const Sku = createSkuSelector([createSkuCodePlugin({ label: "SKU" })]);',Yy=["命中变体才显示，未选全时不占位","等宽字体呈现编码，便于复制核对"],Xy=["商品详情页货号展示","客服对单 / 售后核对"],Zy=["走 renderHeader 的 after 段（order 50），排在最末尾。","core 的「选中摘要」里也含 SKU 编码；本插件用于需要单独突出编码的场景。"],qd={name:Qy,description:Wy,since:Ky,tags:qy,config:Gy,example:Jy,features:Yy,useCases:Xy,notes:Zy},Xo=Object.assign(Hy,{meta:qd});function ru(e){if(typeof window>"u")return null;try{return e==="session"?window.sessionStorage:window.localStorage}catch{return null}}function ev(e={}){const t=e.key??"vane-sku:selection",n=e.scope??"local";return{name:"StatePersistence",version:"0.1.0",description:"选择态持久化：记住上次选的规格（localStorage / sessionStorage）",priority:26,config:e,hooks:{onMount:r=>{const o=ru(n);if(o)try{const i=o.getItem(t);if(!i)return;const l=JSON.parse(i);l&&typeof l=="object"&&Object.keys(l).length&&r.setState({selection:l})}catch{}},onSkuChange:(r,o)=>{const i=ru(n);if(i)try{Object.keys(o).length?i.setItem(t,JSON.stringify(o)):i.removeItem(t)}catch{}}}}}const tv="StatePersistence",nv="选择态持久化：把上次选的规格存进 localStorage / sessionStorage，挂载时自动还原；清空选择时删除键。",rv="0.1.0",ov=["sku","persistence","storage"],iv=[{name:"key",type:"string",default:'"vane-sku:selection"',description:"存储键"},{name:"scope",type:'"local" | "session"',default:'"local"',description:"local=localStorage，session=sessionStorage"}],lv='const Sku = createSkuSelector([createStatePersistencePlugin({ scope: "session" })]);',sv=["挂载读回、变化写入，清空即删键","隐私模式 / 存储禁用 / 配额超限均静默降级，不影响主流程","脏数据（解析失败）直接忽略"],av=["回访时保持上次规格","多步下单流程中途返回"],uv=["不占用渲染插槽，是纯行为插件。","与 UrlSync 可共存：UrlSync 负责可分享，本插件负责本机记忆。"],Gd={name:tv,description:nv,since:rv,tags:ov,config:iv,example:lv,features:sv,useCases:av,notes:uv},Os=Object.assign(ev,{meta:Gd});function cv(e={}){const t=e.lowStockThreshold??5,n=e.soldOutText??"暂时缺货",r=e.showCount??!0;return{name:"StockStatus",version:"0.1.0",description:"库存状态：现货 / 仅剩 N 件 / 缺货",priority:42,config:{slotPosition:"after",order:10,...e},hooks:{renderHeader:o=>{const i=o.variant;if(!i)return null;const l=i.stock;if(typeof l!="number")return null;const s=l===0,a=!s&&l<=t,u=s?"#b32d08":a?"#a54a00":"#237a06",p=s?"#fff1f0":a?"#fff7e6":"#f6ffed",c=s?"#ffa39e":a?"#ffd591":"#b7eb8f",g=s?n:a?r?`仅剩 ${l} 件`:"库存紧张":r?`现货 · 库存 ${l}`:"现货";return f.jsx("div",{"data-testid":"sku-stock","data-stock":String(l),"data-sold-out":s?"true":"false",style:{marginTop:6,fontSize:12,padding:"4px 8px",borderRadius:4,background:p,color:u,border:`1px solid ${c}`},children:g})}}}}const dv="StockStatus",fv="库存状态：命中变体后展示「现货 / 仅剩 N 件 / 缺货」，低库存阈值可配。",pv="0.1.0",gv=["sku","stock","inventory"],mv=[{name:"lowStockThreshold",type:"number",default:"5",description:"低库存预警阈值：库存 ≤ 该值时显示「仅剩 N 件」"},{name:"soldOutText",type:"string",default:'"暂时缺货"',description:"缺货文案"},{name:"showCount",type:"boolean",default:"true",description:"是否展示具体库存数字"}],hv="const Sku = createSkuSelector([createStockStatusPlugin({ lowStockThreshold: 3 })]);",yv=["三态：现货 / 低库存（仅剩 N 件）/ 缺货","阈值可配，用来制造紧迫感","带 data-stock / data-sold-out 便于测试与自动化断言"],vv=["商品详情页库存提示","低库存紧迫感营销"],Sv=["走 renderHeader 的 after 段（order 10），排在价格之后。","变体未声明 stock 时不渲染（不做无依据的库存承诺）。"],Jd={name:dv,description:fv,since:pv,tags:gv,config:mv,example:hv,features:yv,useCases:vv,notes:Sv},Zo=Object.assign(cv,{meta:Jd});function kv(e={}){const t=e.paramPrefix??"sku_",n=e.useReplace??!0,r=()=>{if(typeof window>"u")return{};const i=new URLSearchParams(window.location.search),l={};for(const[s,a]of i.entries())s.startsWith(t)&&(l[s.slice(t.length)]=a);return l},o=i=>{if(typeof window>"u")return;const l=new URLSearchParams(window.location.search);for(const u of Array.from(l.keys()))u.startsWith(t)&&l.delete(u);for(const[u,p]of Object.entries(i))l.set(t+u,p);const s=l.toString(),a=`${window.location.pathname}${s?`?${s}`:""}${window.location.hash}`;n?window.history.replaceState(null,"",a):window.history.pushState(null,"",a)};return{name:"UrlSync",version:"0.1.0",description:"URL 同步：把规格选择写进查询串，并可从 URL 还原",priority:28,config:e,hooks:{onMount:i=>{const l=r();Object.keys(l).length&&i.setState({selection:l})},onSkuChange:(i,l)=>{o(l)}}}}const xv="UrlSync",wv="URL 同步：把规格选择写进查询串（?sku_颜色=red&sku_尺码=s），挂载时反向解析还原，刷新与分享都能保持选择。",Pv="0.1.0",Cv=["sku","url","share"],_v=[{name:"paramPrefix",type:"string",default:'"sku_"',description:"查询参数前缀，避免与页面其它参数冲突"},{name:"useReplace",type:"boolean",default:"true",description:"true=replaceState（不污染前进后退），false=pushState"}],Ev='const Sku = createSkuSelector([createUrlSyncPlugin({ paramPrefix: "sku_" })]);',Rv=["选择 → URL、URL → 选择 双向同步","前缀隔离，不覆盖页面其它查询参数","默认 replaceState，不把每次点击都塞进历史栈"],Tv=["客服带规格的链接","分享已选规格的商品页","刷新后保持选择"],bv=["不占用渲染插槽，是纯行为插件。","SSR 下 window 不存在时自动降级为空操作。"],Yd={name:xv,description:wv,since:Pv,tags:Cv,config:_v,example:Ev,features:Rv,useCases:Tv,notes:bv},Ms=Object.assign(kv,{meta:Yd}),jv={"sku:mount":"挂载","sku:change":"命中","sku:invalid":"未命中"},$v={slug:"full-combo",title:"全量装配：商品规格面板",group:"advanced",capability:"full-assembly",intro:"12 个官方插件全装配成商品规格面板：价格、库存、限购、数量、主图、键盘、埋点一次到位。",why:"真实商品详情页要的能力就这么多；要哪些装哪些，不要的子路径不进包——这就是按需插件的意义。",plugs:[{fn:"createPriceRangePlugin",why:"未选全时兜底显示价格区间"},{fn:"createPriceLinkPlugin",cfg:"discountText: '限时8折'",why:"命中后显示单价与原价删除线"},{fn:"createStockStatusPlugin",cfg:"lowStockThreshold: 5",why:"库存三态：现货 / 仅剩 N 件 / 缺货"},{fn:"createQuotaPlugin",cfg:"purchasedCount: 1",why:"限购提示条 + canPurchase 门控"},{fn:"createQuantityPlugin",why:"数量步进，上限取库存与限购较小值"},{fn:"createSkuCodePlugin",why:"命中后展示货号，客服对单用"},{fn:"createResetBarPlugin",why:"一键清空重选"},{fn:"createImageLinkPlugin",cfg:"onImageChange: setMainImage",why:"规格切主图（只发事件，主图在左侧）"},{fn:"createKeyboardNavPlugin",why:"方向键漫游规格，跳过置灰项"},{fn:"createUrlSyncPlugin",why:"选择写进查询串，可分享还原"},{fn:"createAnalyticsPlugin",cfg:"onEvent: (e) => track(e)",why:"挂载 / 命中 / 未命中事件接入右栏日志"},{fn:"createStatePersistencePlugin",cfg:"key: 'vane-sku:demo:selection'",why:"本机记住上次选择"}],props:["attributes={attributes}","variants={variants}","defaultSelection={{ 颜色: 'red', 尺码: 's' }}"],note:"UrlSync 默认 replaceState 不污染历史栈；它与 StatePersistence 可共存——一个负责可分享，一个负责本机记忆。",controls:[{key:"keyboard",label:"键盘漫游",kind:"switch",init:!0},{key:"analytics",label:"埋点上报",kind:"switch",init:!0,nonLayout:!0},{key:"urlSync",label:"URL 同步",kind:"switch",init:!1}],stageHeight:520};function Nv({cfg:e,log:t}){const n=!!e.keyboard,r=!!e.analytics,o=!!e.urlSync,[i,l]=v.useState(ee[0].image??""),s=v.useMemo(()=>F([Pr(),Cr({discountText:"限时8折"}),Zo({lowStockThreshold:5}),Jo({purchasedCount:1,onExceed:()=>t("触及限购上限（red-s 每人限购 2 件）","warn")}),Go({onChange:a=>t(`数量 → ${a}`)}),Xo(),Yo({onReset:()=>t("已清空重选","info")}),Ko({onImageChange:a=>{l(a),t(`主图 → ${a}`)}}),...n?[qo()]:[],...o?[Ms()]:[],...r?[Ls({onEvent:a=>t(`${jv[a.name]} · ${JSON.stringify(a.selection)}${a.variant?` → ${a.variant.sku}`:""}`,a.name==="sku:invalid"?"warn":a.name==="sku:mount"?"info":"event")})]:[],Os({key:"vane-sku:demo:full-combo"})]),[n,o,r,t,l]);return f.jsxs("div",{style:{display:"flex",gap:12,alignItems:"flex-start",width:"100%"},children:[f.jsx("img",{src:i,alt:"主图",style:{width:92,height:92,objectFit:"cover",borderRadius:2,border:"1px solid var(--line)"}}),f.jsxs("div",{style:{background:"#fff",borderRadius:2,padding:14,color:"#1f2328",flex:1},children:[f.jsx(s,{attributes:oe,variants:ee,defaultSelection:{颜色:"red",尺码:"s"}}),f.jsx("p",{style:{margin:"10px 0 0",fontSize:11,color:"#5b6064"},children:"预选了 red/s：价格删除线、库存提示、限购条、数量步进、货号一次全出；换「绿 M」看低库存态。"})]})]})}const Lv=Object.freeze(Object.defineProperty({__proto__:null,default:Nv,meta:$v},Symbol.toStringTag,{value:"Module"})),Ov={background:"#fff",borderRadius:2,padding:14,color:"#1f2328",width:"100%"},Mv={slug:"price-range",title:"价格区间 PriceRange",group:"plugin",plugin:"PriceRange",intro:"未选全时按当前选择过滤变体取 min/max，显示 ¥199–¥269 这样的区间；区间随选择收窄。",why:"价格区不能空窗：PriceLink 只在命中后出单价，用户选一半时最想看的是「这东西大概多少钱」。",plugs:[{fn:"createPriceRangePlugin",cfg:"showWhenMatched: {{keep}}",why:"负责未命中时的价格区间展示"}],props:["attributes={attributes}","variants={variants}"],note:"与 PriceLink 同走 renderOverlay，靠 order（PriceRange=5）排在前；命中后自动返回 null，两者同装不重影。",controls:[{key:"keep",label:"命中后仍显区间",kind:"switch",init:!1}],stageHeight:280};function Iv({cfg:e}){const t=!!e.keep,n=v.useMemo(()=>F([Pr({showWhenMatched:t})]),[t]);return f.jsxs("div",{style:Ov,children:[f.jsx(n,{attributes:oe,variants:ee}),f.jsx("p",{style:{margin:"10px 0 0",fontSize:11,color:"#5b6064"},children:"先只选「颜色」：区间立刻收窄到该色的 min–max；选全后区间退场（打开开关则保留）。"})]})}const Av=Object.freeze(Object.defineProperty({__proto__:null,default:Iv,meta:Mv},Symbol.toStringTag,{value:"Module"})),Dv={background:"#fff",borderRadius:2,padding:14,color:"#1f2328",width:"100%"},zv={slug:"price-link",title:"价格联动 PriceLink",group:"plugin",plugin:"PriceLink",intro:"命中变体后显示单价；原价更高时自动画删除线，折扣文案可选（预选了 red/s：¥199 + 删除线 ¥299）。",why:"选完规格看价是决策临门一脚；把「准确价格」的渲染抽成插件，促销文案改配置就行、不用改页面。",plugs:[{fn:"createPriceLinkPlugin",cfg:"discountText: '{{discount}}'",why:"把命中变体的价格渲染进 overlay 段"}],props:["attributes={attributes}","variants={variants}","defaultSelection={{ 颜色: 'red', 尺码: 's' }}"],note:"只有 originalPrice > price 才画删除线；变体没写 originalPrice 就只显示现价，不做假促销。",controls:[{key:"discount",label:"折扣文案",kind:"select",init:"限时8折",options:kh,hint:"选「无（不传）」时插件不渲染角标"}],stageHeight:280};function Uv({cfg:e}){const t=String(e.discount),n=v.useMemo(()=>F([Cr({discountText:t||void 0})]),[t]);return f.jsxs("div",{style:Dv,children:[f.jsx(n,{attributes:oe,variants:ee,defaultSelection:{颜色:"red",尺码:"s"}}),f.jsx("p",{style:{margin:"10px 0 0",fontSize:11,color:"#5b6064"},children:"换「蓝 S」看看：blue-s 没写 originalPrice，就只有现价、没有删除线。"})]})}const Bv=Object.freeze(Object.defineProperty({__proto__:null,default:Uv,meta:zv},Symbol.toStringTag,{value:"Module"})),Fv={background:"#fff",borderRadius:2,padding:14,color:"#1f2328",width:"100%"},Vv={slug:"stock-status",title:"库存状态 StockStatus",group:"plugin",plugin:"StockStatus",intro:"命中变体后显示三态：现货 / 仅剩 N 件 / 缺货；低库存阈值拖滑条实时生效。",why:"「仅剩 3 件」是转化利器；阈值该由运营配，而不是写死在代码里等发版。",plugs:[{fn:"createStockStatusPlugin",cfg:"lowStockThreshold: {{threshold}}",why:"渲染库存三态提示条"}],props:["attributes={attributes}","variants={variants}","ignoreOutOfStock={false}","defaultSelection={{ 颜色: 'red', 尺码: 's' }}","onChange={handleChange}"],note:"变体没声明 stock 时不渲染——不做无依据的库存承诺；这页传 ignoreOutOfStock={false} 是为了能点到 stock=0 的 green-l 看「缺货」态。",controls:[{key:"threshold",label:"低库存阈值",kind:"number",init:5,min:1,max:10}],stageHeight:280};function Hv({cfg:e,log:t}){const n=Number(e.threshold),r=v.useMemo(()=>F([Zo({lowStockThreshold:n})]),[n]);return f.jsxs("div",{style:Fv,children:[f.jsx(r,{attributes:oe,variants:ee,ignoreOutOfStock:!1,defaultSelection:{颜色:"red",尺码:"s"},onChange:(o,i)=>i&&t(`命中 ${i.sku} · 库存 ${i.stock??"—"}`,"event")}),f.jsx("p",{style:{margin:"10px 0 0",fontSize:11,color:"#5b6064"},children:"red/s 库存 5：阈值 ≥5 显「仅剩 5 件」，拖到 1 变「现货」；点「绿 L」看缺货红条。"})]})}const Qv=Object.freeze(Object.defineProperty({__proto__:null,default:Hv,meta:Vv},Symbol.toStringTag,{value:"Module"})),Wv={background:"#fff",borderRadius:2,padding:14,color:"#1f2328",width:"100%"},Kv={slug:"quota",title:"限购校验 Quota",group:"plugin",plugin:"Quota",intro:"red-s 每人限购 2：拖「已购件数」到 2，提示条翻红「已达限购上限」，canPurchase 置 false。",why:"限量 / 秒杀要在点加购前就拦住；把「还能不能买」写进内核 state，加购按钮直接读、不用自己算。",plugs:[{fn:"createQuotaPlugin",cfg:"purchasedCount: {{purchased}}, onExceed: () => track('quota-exceed')",why:"渲染限购提示条并暴露 canPurchase 门控"}],props:["attributes={attributes}","variants={variants}","defaultSelection={{ 颜色: 'red', 尺码: 's' }}"],note:"canPurchase 只在 onMount / onSkuChange 事件钩子里写入，不在渲染期 setState——避免渲染期改状态的循环告警。",controls:[{key:"purchased",label:"已购件数",kind:"number",init:1,min:0,max:2}],stageHeight:280};function qv({cfg:e,log:t}){const n=Number(e.purchased),r=v.useMemo(()=>F([Jo({purchasedCount:n,onExceed:()=>t(`已购 ${n} ≥ 限购 2：canPurchase = false`,"warn")})]),[n,t]);return f.jsxs("div",{style:Wv,children:[f.jsx(r,{attributes:oe,variants:ee,defaultSelection:{颜色:"red",尺码:"s"},onChange:(o,i)=>i&&t(`命中 ${i.sku} · quota ${i.quota??"（不限购）"}`,"event")}),f.jsx("p",{style:{margin:"10px 0 0",fontSize:11,color:"#5b6064"},children:"只读 red-s（唯一声明 quota 的变体）：换到其它变体时限购条消失——未声明 quota 视为不限购。"})]})}const Gv=Object.freeze(Object.defineProperty({__proto__:null,default:qv,meta:Kv},Symbol.toStringTag,{value:"Module"})),Jv={background:"#fff",borderRadius:2,padding:14,color:"#1f2328",width:"100%"},Yv={slug:"quantity",title:"数量步进 Quantity",group:"plugin",plugin:"Quantity",intro:"上限 = min(库存, 限购)：red/s 到 2 就封顶（限购 2），换 blue/s（无限购）上限变 5。",why:"别让用户选了 10 件、提交时才发现限购 2——上限在选数量那一刻就该说清楚。",plugs:[{fn:"createQuantityPlugin",cfg:"defaultValue: {{initQty}}, onChange: (q) => track(q)",why:"渲染数量步进器并把数量写进内核 state（key: quantity）"}],props:["attributes={attributes}","variants={variants}","defaultSelection={{ 颜色: 'red', 尺码: 's' }}"],note:"数量依附于具体 SKU：未命中变体时步进器不渲染；切换变体后数量自动收敛到新上限内。",controls:[{key:"initQty",label:"初始数量",kind:"number",init:1,min:1,max:3}],stageHeight:280};function Xv({cfg:e,log:t}){const n=Number(e.initQty),r=v.useMemo(()=>F([Go({defaultValue:n,onChange:o=>t(`数量 → ${o}`)})]),[n,t]);return f.jsxs("div",{style:Jv,children:[f.jsx(r,{attributes:oe,variants:ee,defaultSelection:{颜色:"red",尺码:"s"}},n),f.jsx("p",{style:{margin:"10px 0 0",fontSize:11,color:"#5b6064"},children:"点 + 到封顶，再换「蓝 S」：上限跳到库存 5，步进器跟随新变体重算。"})]})}const Zv=Object.freeze(Object.defineProperty({__proto__:null,default:Xv,meta:Yv},Symbol.toStringTag,{value:"Module"})),eS={background:"#fff",borderRadius:2,padding:14,color:"#1f2328",width:"100%"},tS={slug:"sku-code",title:"货号展示 SkuCode",group:"plugin",plugin:"SkuCode",intro:"命中变体后用等宽字体展示货号；前缀文案可换（货号 / SKU / 商品编码）。",why:"客服对单、用户报修、订单核对都靠这串编码；「一行字但每家都要」的需求就该是插件。",plugs:[{fn:"createSkuCodePlugin",cfg:"label: '{{label}}'",why:"命中后渲染货号行（等宽字体）"}],props:["attributes={attributes}","variants={variants}","defaultSelection={{ 颜色: 'red', 尺码: 's' }}"],note:"core 的「选中摘要」里本就含编码；本插件用于需要单独突出、便于复制核对编码的场景。",controls:[{key:"label",label:"前缀文案",kind:"select",init:"货号",options:[{label:"货号",value:"货号"},{label:"SKU",value:"SKU"},{label:"商品编码",value:"商品编码"}]}],stageHeight:260};function nS({cfg:e,log:t}){const n=String(e.label),r=v.useMemo(()=>F([Xo({label:n})]),[n]);return f.jsxs("div",{style:eS,children:[f.jsx(r,{attributes:oe,variants:ee,defaultSelection:{颜色:"red",尺码:"s"},onChange:(o,i)=>i&&t(`命中 ${i.sku}`,"event")}),f.jsx("p",{style:{margin:"10px 0 0",fontSize:11,color:"#5b6064"},children:"未选全时不占位——货号只在命中后出现，别让半选状态看到错误的编码。"})]})}const rS=Object.freeze(Object.defineProperty({__proto__:null,default:nS,meta:tS},Symbol.toStringTag,{value:"Module"})),oS={background:"#fff",borderRadius:2,padding:14,color:"#1f2328",width:"100%"},iS={slug:"reset-bar",title:"清空重选 ResetBar",group:"plugin",plugin:"ResetBar",intro:"选了一半想重来，一键清空：走 context.clearSelection()，未选任何规格时按钮自动隐藏。",why:"core 支持「再点同值取消」，但逐个取消很烦；移动端小屏上整体重置是高频操作。",plugs:[{fn:"createResetBarPlugin",cfg:"text: '{{text}}', onReset: () => track('reset')",why:"渲染清空按钮并整段重置选择"}],props:["attributes={attributes}","variants={variants}","onChange={handleChange}"],note:"依赖核心 context.clearSelection()（vane-sku 0.1.0 起提供）；onReset 在清空后触发，接埋点很顺手。",controls:[{key:"text",label:"按钮文案",kind:"select",init:"清空重选",options:[{label:"清空重选",value:"清空重选"},{label:"重新选择",value:"重新选择"},{label:"重置规格",value:"重置规格"}]}],stageHeight:280};function lS({cfg:e,log:t}){const n=String(e.text),r=v.useMemo(()=>F([Yo({text:n,onReset:()=>t("onReset · 选择已整段清空（按钮随空选择隐藏）","info")})]),[n,t]);return f.jsxs("div",{style:oS,children:[f.jsx(r,{attributes:oe,variants:ee,onChange:(o,i)=>t(i?`命中 ${i.sku} · ${JSON.stringify(o)}`:`未命中 · ${JSON.stringify(o)}`,i?"event":"warn")}),f.jsx("p",{style:{margin:"10px 0 0",fontSize:11,color:"#5b6064"},children:"选两个规格 → 点「清空重选」：右栏记一次 onReset，按钮自己藏起来（没有选择可清了）。"})]})}const sS=Object.freeze(Object.defineProperty({__proto__:null,default:lS,meta:iS},Symbol.toStringTag,{value:"Module"})),aS={slug:"image-link",title:"规格切主图 ImageLink",group:"plugin",plugin:"ImageLink",intro:"命中变体带 image 时把图抛给外层（回调 + sku:image 总线双通道），自己不渲染任何 UI；左侧主图由本页外层渲染。",why:"规格图联动与「谁来渲染主图」解耦：gallery、卡片、放大镜想怎么接就怎么接，core 不碰图片。",plugs:[{fn:"createImageLinkPlugin",cfg:"onImageChange: setMainImage",why:"只发事件，主图渲染留给外层"}],props:["attributes={attributes}","variants={variants}","defaultSelection={{ 颜色: 'red', 尺码: 's' }}"],note:"挂载（onMount）也会推一次当前图，页面打开主图不空窗；未命中或变体没写 image 时不发事件。",stageHeight:300};function uS({log:e}){const[t,n]=v.useState(ee[0].image??""),r=v.useMemo(()=>F([Ko({onImageChange:o=>{n(o),e(`主图 → ${o}`)}})]),[e]);return f.jsxs("div",{style:{display:"flex",gap:12,alignItems:"flex-start",width:"100%"},children:[f.jsx("img",{src:t,alt:"主图",style:{width:92,height:92,objectFit:"cover",borderRadius:2,border:"1px solid var(--line)"}}),f.jsxs("div",{style:{background:"#fff",borderRadius:2,padding:14,color:"#1f2328",flex:1},children:[f.jsx(r,{attributes:oe,variants:ee,defaultSelection:{颜色:"red",尺码:"s"}}),f.jsx("p",{style:{margin:"10px 0 0",fontSize:11,color:"#5b6064"},children:"换颜色 / 尺码：左图跟着变体走；这就是「发事件的插件 + 接事件的外层」。"})]})]})}const cS=Object.freeze(Object.defineProperty({__proto__:null,default:uS,meta:aS},Symbol.toStringTag,{value:"Module"}));function dS({controls:e,cfg:t,onChange:n}){return f.jsx("div",{className:"ctl-bar",children:e.filter(r=>!r.when||r.when(t)).map(r=>{const o=t[r.key];return f.jsxs("label",{className:"ctl",title:r.hint,children:[f.jsxs("span",{className:"ctl-label",children:[r.label,f.jsx("b",{className:"ctl-val",children:r.kind==="switch"?o?"开":"关":String(o)})]}),r.kind==="switch"?f.jsx("button",{type:"button",className:`ctl-switch${o?" is-on":""}`,onClick:()=>n(r.key,!o),"aria-pressed":!!o,children:f.jsx("i",{})}):r.kind==="select"?f.jsx("select",{className:"ctl-select",value:String(o),onChange:i=>n(r.key,i.target.value),children:(r.options??[]).map(i=>f.jsx("option",{value:i.value,children:i.label},i.value))}):f.jsx("input",{className:"ctl-range",type:"range",min:r.min??0,max:r.max??100,step:r.step??1,value:Number(o),onChange:i=>n(r.key,Number(i.target.value))})]},r.key)})})}function fS({lines:e,title:t="事件日志",empty:n="还没触发 —— 拖上面的控件，或点一下规格试试",right:r}){return f.jsxs("div",{className:"log",children:[f.jsxs("div",{className:"log-head",children:[f.jsx("span",{children:t}),f.jsxs("span",{className:"log-right",children:[r,f.jsx("b",{children:e.length})]})]}),e.length===0?f.jsx("p",{className:"log-empty",children:n}):f.jsx("ol",{className:"log-list",children:e.map(o=>f.jsxs("li",{className:`log-line is-${o.kind}`,children:[f.jsx("time",{children:o.at}),f.jsx("span",{children:o.text})]},o.id))})]})}function pS({items:e}){return f.jsx("div",{className:"keyhint",children:e.map(([t,n])=>f.jsxs("span",{children:[f.jsx("kbd",{children:t}),n]},t))})}const gS={background:"#fff",borderRadius:2,padding:14,color:"#1f2328",width:"100%"},mS={slug:"keyboard",title:"键盘漫游 KeyboardNav",group:"plugin",plugin:"KeyboardNav",intro:"点中任一规格按钮后，←→ 同行切换、↑↓ 跨行跳转，自动跳过置灰项（预选了「蓝」，方向键会绕开死路的 L）。",why:"键盘用户 / 电视端大屏选购的无障碍刚需；「跳过死路」让方向键永远落在有效选项上。",plugs:[{fn:"createKeyboardNavPlugin",cfg:"preventDefault: {{prevent}}",why:"挂 keydown 监听实现方向键漫游"}],props:["attributes={attributes}","variants={variants}","defaultSelection={{ 颜色: 'blue' }}"],note:"实现走 DOM 查询（依赖 core 按钮的 data-testid 约定），不侵入渲染；onMount 返回清理函数，卸载自动摘监听。",controls:[{key:"prevent",label:"阻止方向键滚动页面",kind:"switch",init:!0}],stageHeight:320};function hS({cfg:e}){const t=!!e.prevent,n=v.useMemo(()=>F([qo({preventDefault:t})]),[t]);return f.jsxs("div",{style:gS,children:[f.jsx("p",{style:{margin:"0 0 8px",fontSize:12,color:"#4a5056"},children:"先点（或 Tab 聚焦）任一规格按钮，再用方向键走两圈："}),f.jsx(pS,{items:[["←→","同属性行内切换选项"],["↑↓","跨属性行跳转（保持列位）"]]}),f.jsx("div",{style:{marginTop:10},children:f.jsx(n,{attributes:oe,variants:ee,defaultSelection:{颜色:"blue"}})}),f.jsx("p",{style:{margin:"10px 0 0",fontSize:11,color:"#5b6064"},children:"在尺码行按 →：S → M → 回到 S，L 因缺 blue-l 被置灰，直接被跳过。"})]})}const yS=Object.freeze(Object.defineProperty({__proto__:null,default:hS,meta:mS},Symbol.toStringTag,{value:"Module"})),vS={background:"#fff",borderRadius:2,padding:14,color:"#1f2328",width:"100%"},ou="vane-sku:demo:demos-persistence",SS={slug:"persistence",title:"选择持久化 StatePersistence",group:"plugin",plugin:"StatePersistence",intro:"把上次选的规格写进 localStorage，挂载时读回；拖「重挂载」开关销毁重建，选择原样还原。",why:"用户逛一圈回来还停在上次的规格；多步下单流程中途返回，也不用从头重选。",plugs:[{fn:"createStatePersistencePlugin",cfg:"key: 'vane-sku:demo:selection'",why:"挂载读回 / 变化写入 / 清空删键"}],props:["attributes={attributes}","variants={variants}"],note:"隐私模式、存储禁用、配额超限、脏数据一律静默降级，不影响主流程；与 UrlSync 可共存。",controls:[{key:"remount",label:"重挂载（模拟刷新）",kind:"switch",init:!1,nonLayout:!0}],stageHeight:300};function kS({cfg:e,log:t}){const n=!!e.remount,r=v.useMemo(()=>F([Os({key:ou})]),[]);return v.useEffect(()=>{const o=window.localStorage.getItem(ou);t(`挂载 · localStorage ${o?`读回 ${o}`:"为空（首次进入）"}`,"info")},[n,t]),f.jsxs("div",{style:vS,children:[f.jsx(r,{attributes:oe,variants:ee,onChange:(o,i)=>t(i?`写入 localStorage：${JSON.stringify(o)}（命中 ${i.sku}）`:`写入 localStorage：${JSON.stringify(o)}`,i?"event":"warn")},String(n)),f.jsx("p",{style:{margin:"10px 0 0",fontSize:11,color:"#5b6064"},children:"选好规格 → 拖「重挂载」：按钮组销毁重建，选择自动还原；把选择清空（再点同值取消）会删键。"})]})}const xS=Object.freeze(Object.defineProperty({__proto__:null,default:kS,meta:SS},Symbol.toStringTag,{value:"Module"})),wS={background:"#fff",borderRadius:2,padding:14,color:"#1f2328",width:"100%"},PS={display:"block",padding:"6px 10px",borderRadius:2,background:"#f4f5f7",border:"1px solid #e5e7eb",color:"#b45309",fontFamily:"'JetBrains Mono', ui-monospace, monospace",fontSize:11,overflowX:"auto",whiteSpace:"nowrap"},CS={slug:"url-sync",title:"URL 同步 UrlSync",group:"plugin",plugin:"UrlSync",intro:"选择写进查询串（?sku_颜色=red&sku_尺码=s），挂载时反向还原；刷新 / 分享都能保持选择。",why:"「把这个链接发给客服，他看到的就是我选的规格」——客服带规格链接、分享商品页的刚需。",plugs:[{fn:"createUrlSyncPlugin",cfg:"useReplace: {{replace}}",why:"选择 ↔ 查询串双向同步"}],props:["attributes={attributes}","variants={variants}","onChange={handleChange}"],note:"默认 replaceState 不把每次点击塞进历史栈；查询键带 sku_ 前缀，不覆盖页面其它参数。",controls:[{key:"replace",label:"replaceState（不进历史栈）",kind:"switch",init:!0}],stageHeight:300};function _S({cfg:e,log:t}){const n=!!e.replace,[r,o]=v.useState(()=>window.location.search||"（空）"),i=v.useMemo(()=>F([Ms({useReplace:n})]),[n]),l=v.useCallback(()=>{const s=window.location.search||"（已清空）";o(s),t(`查询串 → ${s}`)},[t]);return f.jsxs("div",{style:{...wS,display:"grid",gap:10},children:[f.jsx(i,{attributes:oe,variants:ee,onChange:l}),f.jsx("code",{style:PS,children:r}),f.jsx("p",{style:{margin:0,fontSize:11,color:"#5b6064"},children:"上方是实时查询串（只读快照）。关掉开关改用 pushState：每次选择都进历史栈，后退键能撤销选择。"})]})}const ES=Object.freeze(Object.defineProperty({__proto__:null,default:_S,meta:CS},Symbol.toStringTag,{value:"Module"})),RS={background:"#fff",borderRadius:2,padding:14,color:"#1f2328",width:"100%"},TS={"sku:mount":"挂载","sku:change":"命中","sku:invalid":"未命中"},bS={slug:"analytics",title:"埋点上报 Analytics",group:"plugin",plugin:"Analytics",intro:"三类事件（挂载 / 命中 / 未命中）双通道出口：onEvent 回调 + sku:analytics 总线。右栏日志就是上报流水。",why:"规格选择是转化漏斗的关键一步；「哪些组合被点了、哪些根本选不出来」对选品和补库存都是硬数据。",plugs:[{fn:"createAnalyticsPlugin",cfg:"onlyMatched: {{onlyMatched}}, onEvent: (e) => track(e)",why:"只做事件出口，不渲染任何 UI；接哪家 SDK 由宿主决定"}],props:["attributes={attributes}","variants={variants}"],note:"默认未命中也上报——「用户点得到却选不出」的坏组合恰恰最该被发现。",controls:[{key:"onlyMatched",label:"只上报命中",kind:"switch",init:!1,nonLayout:!0}],stageHeight:280};function jS({cfg:e,log:t}){const n=!!e.onlyMatched,r=v.useMemo(()=>F([Ls({onlyMatched:n,onEvent:o=>t(`${TS[o.name]} · ${JSON.stringify(o.selection)}${o.variant?` → ${o.variant.sku}`:""}`,o.name==="sku:invalid"?"warn":o.name==="sku:mount"?"info":"event")})]),[n,t]);return f.jsxs("div",{style:RS,children:[f.jsx(r,{attributes:oe,variants:ee}),f.jsx("p",{style:{margin:"10px 0 0",fontSize:11,color:"#5b6064"},children:"只选颜色（未选全）记「未命中」，选全记「命中」，进页面记「挂载」——三种事件都会进右栏。"})]})}const $S=Object.freeze(Object.defineProperty({__proto__:null,default:jS,meta:bS},Symbol.toStringTag,{value:"Module"})),NS=`import React, { useMemo } from "react";
import { createSkuSelector } from "vane-sku";
import { createPriceRangePlugin } from "vane-sku/custom-plugins/PriceRangePlugin";
import { createPriceLinkPlugin } from "vane-sku/custom-plugins/PriceLinkPlugin";
import type { DemoMeta, DemoStageProps } from "./types";
import { ATTRIBUTES, VARIANTS } from "../data/sample";

const CARD: React.CSSProperties = {
  background: "#fff",
  borderRadius: 2,
  padding: 14,
  color: "#1f2328",
  width: "100%",
};

/**
 * 00 · 最小可用选择器（基础功能）
 * 裸 Core 起步：只有按钮组 + 禁用推导 + 选中摘要。两个开关按需叠价格区间 / 价格联动，
 * 组件类型随开关在 useMemo 里增删插件重建 —— 5 行装配出能用的选择器。
 */
export const meta: DemoMeta = {
  slug: "quickstart",
  title: "最小可用选择器",
  group: "basic",
  capability: "core-assembly",
  intro: "5 行装配出能用的选择器：Core（按钮组 + 禁用推导 + 摘要）起步，按需叠价格插件。",
  why: "先跑通内核，再增量叠插件——规格选择的长尾需求多，全塞进内核只会越来越难改。",
  plugs: [
    { fn: "createPriceRangePlugin", why: "未选全时兜底显示价格区间，价格区不空窗" },
    { fn: "createPriceLinkPlugin", cfg: "discountText: '限时8折'", why: "命中变体后显示单价与原价删除线" },
  ],
  props: ["attributes={attributes}", "variants={variants}"],
  controls: [
    { key: "withRange", label: "加价格区间", kind: "switch", init: false },
    { key: "withLink", label: "加价格联动", kind: "switch", init: false },
  ],
  stageHeight: 300,
};

export default function Stage({ cfg }: DemoStageProps) {
  const withRange = Boolean(cfg.withRange);
  const withLink = Boolean(cfg.withLink);

  // 组件类型随开关增删插件重建：拖控件 = 换装配（选择态随之重置，符合「换配置重头选」直觉）
  const Sku = useMemo(
    () =>
      createSkuSelector([
        ...(withRange ? [createPriceRangePlugin()] : []),
        ...(withLink ? [createPriceLinkPlugin({ discountText: "限时8折" })] : []),
      ]),
    [withRange, withLink]
  );

  return (
    <div style={CARD}>
      <Sku attributes={ATTRIBUTES} variants={VARIANTS} />
      <p style={{ margin: "10px 0 0", fontSize: 11, color: "#5b6064" }}>
        两个开关都关就是裸 Core：选「蓝」后 L 置灰，摘要告诉你命中的变体。
      </p>
    </div>
  );
}
`,LS=`import React, { useMemo } from "react";
import { createSkuSelector } from "vane-sku";
import type { DemoMeta, DemoStageProps } from "./types";
import { ATTRIBUTES, VARIANTS } from "../data/sample";

const CARD: React.CSSProperties = {
  background: "#fff",
  borderRadius: 2,
  padding: 14,
  color: "#1f2328",
  width: "100%",
};

/**
 * 01 · 禁用推导（基础功能）
 * 内核内置能力：候选选项临时代入选择，查不到变体即置灰。样例矩阵故意缺 blue-l，
 * 选「蓝」后 L 自动变灰 —— 用户不用点了才发现没货。
 */
export const meta: DemoMeta = {
  slug: "disable",
  title: "禁用推导（内置）",
  group: "basic",
  capability: "disable-derivation",
  intro: "组合矩阵在内核：选「蓝」后 L 自动置灰（缺 blue-l 变体），死路提前画出来。",
  why: "用户不该点了才发现没货；把「选不出结果的组合」提前置灰，是规格选择器的体验底线。",
  plugs: [],
  props: [
    "attributes={attributes}",
    "variants={variants}",
    { text: "defaultSelection={{ 颜色: '{{preset}}' }}", when: (c) => c.preset !== "none" },
    "onChange={handleChange}",
  ],
  note: "推导是纯函数 buildAvailability(attributes, variants, selection)，不依赖 React，可直接单测。",
  controls: [
    {
      key: "preset",
      label: "预选颜色",
      kind: "select",
      init: "none",
      options: [
        { label: "不预选", value: "none" },
        { label: "红 red", value: "red" },
        { label: "蓝 blue", value: "blue" },
      ],
    },
  ],
  stageHeight: 300,
};

export default function Stage({ cfg, log }: DemoStageProps) {
  const preset = String(cfg.preset);

  // 无插件页：组件类型只建一次；预选切换用 key 重挂载（defaultSelection 是挂载期初值）
  const Sku = useMemo(() => createSkuSelector([]), []);

  return (
    <div style={CARD}>
      <Sku
        key={preset}
        attributes={ATTRIBUTES}
        variants={VARIANTS}
        defaultSelection={preset === "none" ? undefined : { 颜色: preset }}
        onChange={(sel, v) =>
          log(
            v ? \`命中变体 \${v.sku} · \${JSON.stringify(sel)}\` : \`未命中可售变体 · \${JSON.stringify(sel)}\`,
            v ? "event" : "warn"
          )
        }
      />
      <p style={{ margin: "10px 0 0", fontSize: 11, color: "#5b6064" }}>
        点「蓝」看主角戏：L 因缺 blue-l 被置灰；defaultSelection 只在挂载时生效一次，所以预选切换靠 key 重挂载。
      </p>
    </div>
  );
}
`,OS=`import React, { useMemo } from "react";
import { createSkuSelector } from "vane-sku";
import type { SkuAttribute } from "vane-sku";
import type { DemoMeta, DemoStageProps } from "./types";
import { ATTRIBUTES, VARIANTS } from "../data/sample";

const CARD: React.CSSProperties = {
  background: "#fff",
  borderRadius: 2,
  padding: 14,
  color: "#1f2328",
  width: "100%",
};

const COLOR = ATTRIBUTES[0];
const SIZE = ATTRIBUTES[1];
/** 去掉绿色系的小矩阵（学 scenarios/specs/two-attr：红/蓝 × S/M/L） */
const BASE_VARIANTS = VARIANTS.filter((v) => v.attrValues["颜色"] !== "green");

/**
 * 02 · 双属性小矩阵（基础功能）
 * attributes / variants 是受控数据：拖开关删掉「红」，数组热更新，
 * 禁用推导随 props 变化即时重算 —— 选择器组件不重建，选择也保留着。
 */
export const meta: DemoMeta = {
  slug: "two-attr",
  title: "双属性小矩阵",
  group: "basic",
  capability: "matrix",
  intro: "颜色 × 尺码的小矩阵：拖开关删掉「红」，attributes 数组热更新，禁用推导随之重算。",
  why: "后台改规格、运营下架某选项，前端改的只是数据；矩阵怎么变是内核的事。",
  plugs: [],
  props: ["attributes={attributes}", "variants={variants}"],
  note: "buildAvailability / matchVariant / isSelectionComplete 都是纯函数，服务端下发同一份结构也能直接算。",
  controls: [{ key: "dropRed", label: "删掉红色选项", kind: "switch", init: false }],
  stageHeight: 300,
};

export default function Stage({ cfg, log }: DemoStageProps) {
  const dropRed = Boolean(cfg.dropRed);

  const Sku = useMemo(() => createSkuSelector([]), []);

  // 拖开关 = 改 attributes / variants 数组；withPlugins 按新 props 重跑禁用推导（热更新）
  const attributes: SkuAttribute[] = useMemo(
    () => [
      {
        ...COLOR,
        options: dropRed ? COLOR.options.filter((o) => o.id !== "red") : COLOR.options.slice(0, 2),
      },
      SIZE,
    ],
    [dropRed]
  );
  const variants = useMemo(
    () => (dropRed ? BASE_VARIANTS.filter((v) => v.attrValues["颜色"] !== "red") : BASE_VARIANTS),
    [dropRed]
  );

  return (
    <div style={CARD}>
      <Sku
        attributes={attributes}
        variants={variants}
        onChange={(sel, v) =>
          log(v ? \`命中 \${v.sku}\` : \`未命中 · \${JSON.stringify(sel)}\`, v ? "event" : "warn")
        }
      />
      <p style={{ margin: "10px 0 0", fontSize: 11, color: "#5b6064" }}>
        先选「蓝」再拖开关：红消失、选择保留，L 依旧置灰 —— blue-l 本就不存在，小矩阵下它成了永久死路。
      </p>
    </div>
  );
}
`,MS=`import React, { useMemo } from "react";
import { createSkuSelector } from "vane-sku";
import type { DemoMeta, DemoStageProps } from "./types";
import { ATTRIBUTES, VARIANTS } from "../data/sample";

const CARD: React.CSSProperties = {
  background: "#fff",
  borderRadius: 2,
  padding: 14,
  color: "#1f2328",
  width: "100%",
};

/**
 * 03 · 缺货是否参与推导（基础功能）
 * green-l 库存 0：默认 ignoreOutOfStock=true 把它当不存在（选「绿」后 L 置灰）；
 * 关掉开关后 green-l 变为可选 —— 置灰与否是运营策略，内核只给开关。
 */
export const meta: DemoMeta = {
  slug: "ignore-stock",
  title: "缺货是否参与推导",
  group: "basic",
  capability: "ignore-out-of-stock",
  intro: "green-l 库存 0：默认把它当不存在（通往它的选项置灰）；关掉开关后变为可选。",
  why: "「缺货直接置灰」还是「可点但不让下单」是两种运营策略；两种都常见，内核不该替你拍板。",
  plugs: [],
  props: ["attributes={attributes}", "variants={variants}", "ignoreOutOfStock={{{ignore}}}"],
  note: "关掉后 green-l 可选且仍会命中变体（stock=0）——加购拦截交给 Quota 或宿主，推导不管下单。",
  controls: [{ key: "ignore", label: "缺货视为不存在", kind: "switch", init: true }],
  stageHeight: 300,
};

export default function Stage({ cfg, log }: DemoStageProps) {
  const ignore = Boolean(cfg.ignore);

  // 无插件页：组件类型只建一次；ignoreOutOfStock 是受控 prop，切换即热更新
  const Sku = useMemo(() => createSkuSelector([]), []);

  return (
    <div style={CARD}>
      <Sku
        attributes={ATTRIBUTES}
        variants={VARIANTS}
        ignoreOutOfStock={ignore}
        onChange={(sel, v) =>
          v
            ? log(\`命中 \${v.sku} · 库存 \${v.stock ?? "—"}\`, "event")
            : log(\`未命中 · \${JSON.stringify(sel)}\`, "warn")
        }
      />
      <p style={{ margin: "10px 0 0", fontSize: 11, color: "#5b6064" }}>
        先选「绿」：L 置灰（缺货默认视为不存在）。关掉开关后 L 可选，点它会命中 stock=0 的 TEE-GREEN-L。
      </p>
    </div>
  );
}
`,IS=`import React, { useMemo, useState } from "react";
import { createSkuSelector } from "vane-sku";
import { createAnalyticsPlugin } from "vane-sku/custom-plugins/AnalyticsPlugin";
import type { AnalyticsEvent } from "vane-sku/custom-plugins/AnalyticsPlugin";
import { createImageLinkPlugin } from "vane-sku/custom-plugins/ImageLinkPlugin";
import { createKeyboardNavPlugin } from "vane-sku/custom-plugins/KeyboardNavPlugin";
import { createPriceLinkPlugin } from "vane-sku/custom-plugins/PriceLinkPlugin";
import { createPriceRangePlugin } from "vane-sku/custom-plugins/PriceRangePlugin";
import { createQuantityPlugin } from "vane-sku/custom-plugins/QuantityPlugin";
import { createQuotaPlugin } from "vane-sku/custom-plugins/QuotaPlugin";
import { createResetBarPlugin } from "vane-sku/custom-plugins/ResetBarPlugin";
import { createSkuCodePlugin } from "vane-sku/custom-plugins/SkuCodePlugin";
import { createStatePersistencePlugin } from "vane-sku/custom-plugins/StatePersistencePlugin";
import { createStockStatusPlugin } from "vane-sku/custom-plugins/StockStatusPlugin";
import { createUrlSyncPlugin } from "vane-sku/custom-plugins/UrlSyncPlugin";
import type { DemoMeta, DemoStageProps } from "./types";
import { ATTRIBUTES, VARIANTS } from "../data/sample";

const EVENT_LABEL: Record<AnalyticsEvent["name"], string> = {
  "sku:mount": "挂载",
  "sku:change": "命中",
  "sku:invalid": "未命中",
};

/**
 * 04 · 全量装配（高级功能）
 * 12 个官方插件全装上：价格区间 / 价格联动 / 库存 / 限购 / 数量 / 货号 / 清空重选 /
 * 主图联动 / 键盘漫游 / URL 同步 / 埋点 / 本机记忆 —— 一个能直接上线的商品规格面板。
 * Analytics 的事件出口接到右栏日志，拖开关就是换装配。
 */
export const meta: DemoMeta = {
  slug: "full-combo",
  title: "全量装配：商品规格面板",
  group: "advanced",
  capability: "full-assembly",
  intro: "12 个官方插件全装配成商品规格面板：价格、库存、限购、数量、主图、键盘、埋点一次到位。",
  why: "真实商品详情页要的能力就这么多；要哪些装哪些，不要的子路径不进包——这就是按需插件的意义。",
  plugs: [
    { fn: "createPriceRangePlugin", why: "未选全时兜底显示价格区间" },
    { fn: "createPriceLinkPlugin", cfg: "discountText: '限时8折'", why: "命中后显示单价与原价删除线" },
    { fn: "createStockStatusPlugin", cfg: "lowStockThreshold: 5", why: "库存三态：现货 / 仅剩 N 件 / 缺货" },
    { fn: "createQuotaPlugin", cfg: "purchasedCount: 1", why: "限购提示条 + canPurchase 门控" },
    { fn: "createQuantityPlugin", why: "数量步进，上限取库存与限购较小值" },
    { fn: "createSkuCodePlugin", why: "命中后展示货号，客服对单用" },
    { fn: "createResetBarPlugin", why: "一键清空重选" },
    { fn: "createImageLinkPlugin", cfg: "onImageChange: setMainImage", why: "规格切主图（只发事件，主图在左侧）" },
    { fn: "createKeyboardNavPlugin", why: "方向键漫游规格，跳过置灰项" },
    { fn: "createUrlSyncPlugin", why: "选择写进查询串，可分享还原" },
    { fn: "createAnalyticsPlugin", cfg: "onEvent: (e) => track(e)", why: "挂载 / 命中 / 未命中事件接入右栏日志" },
    { fn: "createStatePersistencePlugin", cfg: "key: 'vane-sku:demo:selection'", why: "本机记住上次选择" },
  ],
  props: ["attributes={attributes}", "variants={variants}", "defaultSelection={{ 颜色: 'red', 尺码: 's' }}"],
  note: "UrlSync 默认 replaceState 不污染历史栈；它与 StatePersistence 可共存——一个负责可分享，一个负责本机记忆。",
  controls: [
    { key: "keyboard", label: "键盘漫游", kind: "switch", init: true },
    { key: "analytics", label: "埋点上报", kind: "switch", init: true, nonLayout: true },
    { key: "urlSync", label: "URL 同步", kind: "switch", init: false },
  ],
  stageHeight: 520,
};

export default function Stage({ cfg, log }: DemoStageProps) {
  const withKeyboard = Boolean(cfg.keyboard);
  const withAnalytics = Boolean(cfg.analytics);
  const withUrlSync = Boolean(cfg.urlSync);
  const [main, setMain] = useState(VARIANTS[0].image ?? "");

  // 三个开关增删插件：组件类型随真实依赖项重建；log 来自页面层 useCallback、setState 恒稳定
  const Sku = useMemo(
    () =>
      createSkuSelector([
        createPriceRangePlugin(),
        createPriceLinkPlugin({ discountText: "限时8折" }),
        createStockStatusPlugin({ lowStockThreshold: 5 }),
        createQuotaPlugin({
          purchasedCount: 1,
          onExceed: () => log("触及限购上限（red-s 每人限购 2 件）", "warn"),
        }),
        createQuantityPlugin({ onChange: (q) => log(\`数量 → \${q}\`) }),
        createSkuCodePlugin(),
        createResetBarPlugin({ onReset: () => log("已清空重选", "info") }),
        createImageLinkPlugin({
          onImageChange: (img) => {
            setMain(img);
            log(\`主图 → \${img}\`);
          },
        }),
        ...(withKeyboard ? [createKeyboardNavPlugin()] : []),
        ...(withUrlSync ? [createUrlSyncPlugin()] : []),
        ...(withAnalytics
          ? [
              createAnalyticsPlugin({
                onEvent: (e) =>
                  log(
                    \`\${EVENT_LABEL[e.name]} · \${JSON.stringify(e.selection)}\${e.variant ? \` → \${e.variant.sku}\` : ""}\`,
                    e.name === "sku:invalid" ? "warn" : e.name === "sku:mount" ? "info" : "event"
                  ),
              }),
            ]
          : []),
        createStatePersistencePlugin({ key: "vane-sku:demo:full-combo" }),
      ]),
    [withKeyboard, withUrlSync, withAnalytics, log, setMain]
  );

  return (
    <div style={{ display: "flex", gap: 12, alignItems: "flex-start", width: "100%" }}>
      <img
        src={main}
        alt="主图"
        style={{ width: 92, height: 92, objectFit: "cover", borderRadius: 2, border: "1px solid var(--line)" }}
      />
      <div style={{ background: "#fff", borderRadius: 2, padding: 14, color: "#1f2328", flex: 1 }}>
        <Sku
          attributes={ATTRIBUTES}
          variants={VARIANTS}
          defaultSelection={{ 颜色: "red", 尺码: "s" }}
        />
        <p style={{ margin: "10px 0 0", fontSize: 11, color: "#5b6064" }}>
          预选了 red/s：价格删除线、库存提示、限购条、数量步进、货号一次全出；换「绿 M」看低库存态。
        </p>
      </div>
    </div>
  );
}
`,AS=`import React, { useMemo } from "react";
import { createSkuSelector } from "vane-sku";
import { createPriceRangePlugin } from "vane-sku/custom-plugins/PriceRangePlugin";
import type { DemoMeta, DemoStageProps } from "./types";
import { ATTRIBUTES, VARIANTS } from "../data/sample";

const CARD: React.CSSProperties = {
  background: "#fff",
  borderRadius: 2,
  padding: 14,
  color: "#1f2328",
  width: "100%",
};

/**
 * 05 · 价格区间 PriceRange（插件功能）
 * 单装这一个：未选全（或组合无货）时按当前选择过滤变体取 min/max，
 * 显示「¥199–¥269」这样的区间，区间随选择收窄；命中变体后退场。
 */
export const meta: DemoMeta = {
  slug: "price-range",
  title: "价格区间 PriceRange",
  group: "plugin",
  plugin: "PriceRange",
  intro: "未选全时按当前选择过滤变体取 min/max，显示 ¥199–¥269 这样的区间；区间随选择收窄。",
  why: "价格区不能空窗：PriceLink 只在命中后出单价，用户选一半时最想看的是「这东西大概多少钱」。",
  plugs: [
    { fn: "createPriceRangePlugin", cfg: "showWhenMatched: {{keep}}", why: "负责未命中时的价格区间展示" },
  ],
  props: ["attributes={attributes}", "variants={variants}"],
  note: "与 PriceLink 同走 renderOverlay，靠 order（PriceRange=5）排在前；命中后自动返回 null，两者同装不重影。",
  controls: [{ key: "keep", label: "命中后仍显区间", kind: "switch", init: false }],
  stageHeight: 280,
};

export default function Stage({ cfg }: DemoStageProps) {
  const keep = Boolean(cfg.keep);

  const Sku = useMemo(
    () => createSkuSelector([createPriceRangePlugin({ showWhenMatched: keep })]),
    [keep]
  );

  return (
    <div style={CARD}>
      <Sku attributes={ATTRIBUTES} variants={VARIANTS} />
      <p style={{ margin: "10px 0 0", fontSize: 11, color: "#5b6064" }}>
        先只选「颜色」：区间立刻收窄到该色的 min–max；选全后区间退场（打开开关则保留）。
      </p>
    </div>
  );
}
`,DS=`import React, { useMemo } from "react";
import { createSkuSelector } from "vane-sku";
import { createPriceLinkPlugin } from "vane-sku/custom-plugins/PriceLinkPlugin";
import type { DemoMeta, DemoStageProps } from "./types";
import { ATTRIBUTES, VARIANTS, DISCOUNT_TEXTS } from "../data/sample";

const CARD: React.CSSProperties = {
  background: "#fff",
  borderRadius: 2,
  padding: 14,
  color: "#1f2328",
  width: "100%",
};

/**
 * 06 · 价格联动 PriceLink（插件功能）
 * 单装这一个：命中变体后显示单价，原价更高时自动画删除线，
 * 折扣文案（促销角标）由控件现场换——拖 select = 改配置。
 */
export const meta: DemoMeta = {
  slug: "price-link",
  title: "价格联动 PriceLink",
  group: "plugin",
  plugin: "PriceLink",
  intro: "命中变体后显示单价；原价更高时自动画删除线，折扣文案可选（预选了 red/s：¥199 + 删除线 ¥299）。",
  why: "选完规格看价是决策临门一脚；把「准确价格」的渲染抽成插件，促销文案改配置就行、不用改页面。",
  plugs: [
    { fn: "createPriceLinkPlugin", cfg: "discountText: '{{discount}}'", why: "把命中变体的价格渲染进 overlay 段" },
  ],
  props: [
    "attributes={attributes}",
    "variants={variants}",
    "defaultSelection={{ 颜色: 'red', 尺码: 's' }}",
  ],
  note: "只有 originalPrice > price 才画删除线；变体没写 originalPrice 就只显示现价，不做假促销。",
  controls: [
    {
      key: "discount",
      label: "折扣文案",
      kind: "select",
      init: "限时8折",
      options: DISCOUNT_TEXTS,
      hint: "选「无（不传）」时插件不渲染角标",
    },
  ],
  stageHeight: 280,
};

export default function Stage({ cfg }: DemoStageProps) {
  const discount = String(cfg.discount);

  const Sku = useMemo(
    () => createSkuSelector([createPriceLinkPlugin({ discountText: discount || undefined })]),
    [discount]
  );

  return (
    <div style={CARD}>
      <Sku attributes={ATTRIBUTES} variants={VARIANTS} defaultSelection={{ 颜色: "red", 尺码: "s" }} />
      <p style={{ margin: "10px 0 0", fontSize: 11, color: "#5b6064" }}>
        换「蓝 S」看看：blue-s 没写 originalPrice，就只有现价、没有删除线。
      </p>
    </div>
  );
}
`,zS=`import React, { useMemo } from "react";
import { createSkuSelector } from "vane-sku";
import { createStockStatusPlugin } from "vane-sku/custom-plugins/StockStatusPlugin";
import type { DemoMeta, DemoStageProps } from "./types";
import { ATTRIBUTES, VARIANTS } from "../data/sample";

const CARD: React.CSSProperties = {
  background: "#fff",
  borderRadius: 2,
  padding: 14,
  color: "#1f2328",
  width: "100%",
};

/**
 * 07 · 库存状态 StockStatus（插件功能）
 * 单装这一个：命中变体后显示三态（现货 / 仅剩 N 件 / 缺货），
 * 阈值拖滑条实时变。这里故意传 ignoreOutOfStock={false}，
 * 让 stock=0 的 green-l 可点，才能看到「缺货」红条。
 */
export const meta: DemoMeta = {
  slug: "stock-status",
  title: "库存状态 StockStatus",
  group: "plugin",
  plugin: "StockStatus",
  intro: "命中变体后显示三态：现货 / 仅剩 N 件 / 缺货；低库存阈值拖滑条实时生效。",
  why: "「仅剩 3 件」是转化利器；阈值该由运营配，而不是写死在代码里等发版。",
  plugs: [
    { fn: "createStockStatusPlugin", cfg: "lowStockThreshold: {{threshold}}", why: "渲染库存三态提示条" },
  ],
  props: [
    "attributes={attributes}",
    "variants={variants}",
    "ignoreOutOfStock={false}",
    "defaultSelection={{ 颜色: 'red', 尺码: 's' }}",
    "onChange={handleChange}",
  ],
  note: "变体没声明 stock 时不渲染——不做无依据的库存承诺；这页传 ignoreOutOfStock={false} 是为了能点到 stock=0 的 green-l 看「缺货」态。",
  controls: [{ key: "threshold", label: "低库存阈值", kind: "number", init: 5, min: 1, max: 10 }],
  stageHeight: 280,
};

export default function Stage({ cfg, log }: DemoStageProps) {
  const threshold = Number(cfg.threshold);

  const Sku = useMemo(
    () => createSkuSelector([createStockStatusPlugin({ lowStockThreshold: threshold })]),
    [threshold]
  );

  return (
    <div style={CARD}>
      <Sku
        attributes={ATTRIBUTES}
        variants={VARIANTS}
        ignoreOutOfStock={false}
        defaultSelection={{ 颜色: "red", 尺码: "s" }}
        onChange={(_sel, v) => v && log(\`命中 \${v.sku} · 库存 \${v.stock ?? "—"}\`, "event")}
      />
      <p style={{ margin: "10px 0 0", fontSize: 11, color: "#5b6064" }}>
        red/s 库存 5：阈值 ≥5 显「仅剩 5 件」，拖到 1 变「现货」；点「绿 L」看缺货红条。
      </p>
    </div>
  );
}
`,US=`import React, { useMemo } from "react";
import { createSkuSelector } from "vane-sku";
import { createQuotaPlugin } from "vane-sku/custom-plugins/QuotaPlugin";
import type { DemoMeta, DemoStageProps } from "./types";
import { ATTRIBUTES, VARIANTS } from "../data/sample";

const CARD: React.CSSProperties = {
  background: "#fff",
  borderRadius: 2,
  padding: 14,
  color: "#1f2328",
  width: "100%",
};

/**
 * 08 · 限购校验 Quota（插件功能）
 * 单装这一个：red-s 声明 quota: 2。拖「已购件数」滑条：
 * 0/1 → 绿条「每人限购 2 件」；2 → 翻红「已达限购上限」，canPurchase 置 false。
 */
export const meta: DemoMeta = {
  slug: "quota",
  title: "限购校验 Quota",
  group: "plugin",
  plugin: "Quota",
  intro: "red-s 每人限购 2：拖「已购件数」到 2，提示条翻红「已达限购上限」，canPurchase 置 false。",
  why: "限量 / 秒杀要在点加购前就拦住；把「还能不能买」写进内核 state，加购按钮直接读、不用自己算。",
  plugs: [
    {
      fn: "createQuotaPlugin",
      cfg: "purchasedCount: {{purchased}}, onExceed: () => track('quota-exceed')",
      why: "渲染限购提示条并暴露 canPurchase 门控",
    },
  ],
  props: [
    "attributes={attributes}",
    "variants={variants}",
    "defaultSelection={{ 颜色: 'red', 尺码: 's' }}",
  ],
  note: "canPurchase 只在 onMount / onSkuChange 事件钩子里写入，不在渲染期 setState——避免渲染期改状态的循环告警。",
  controls: [{ key: "purchased", label: "已购件数", kind: "number", init: 1, min: 0, max: 2 }],
  stageHeight: 280,
};

export default function Stage({ cfg, log }: DemoStageProps) {
  const purchased = Number(cfg.purchased);

  const Sku = useMemo(
    () =>
      createSkuSelector([
        createQuotaPlugin({
          purchasedCount: purchased,
          onExceed: () => log(\`已购 \${purchased} ≥ 限购 2：canPurchase = false\`, "warn"),
        }),
      ]),
    [purchased, log]
  );

  return (
    <div style={CARD}>
      <Sku
        attributes={ATTRIBUTES}
        variants={VARIANTS}
        defaultSelection={{ 颜色: "red", 尺码: "s" }}
        onChange={(_sel, v) => v && log(\`命中 \${v.sku} · quota \${v.quota ?? "（不限购）"}\`, "event")}
      />
      <p style={{ margin: "10px 0 0", fontSize: 11, color: "#5b6064" }}>
        只读 red-s（唯一声明 quota 的变体）：换到其它变体时限购条消失——未声明 quota 视为不限购。
      </p>
    </div>
  );
}
`,BS=`import React, { useMemo } from "react";
import { createSkuSelector } from "vane-sku";
import { createQuantityPlugin } from "vane-sku/custom-plugins/QuantityPlugin";
import type { DemoMeta, DemoStageProps } from "./types";
import { ATTRIBUTES, VARIANTS } from "../data/sample";

const CARD: React.CSSProperties = {
  background: "#fff",
  borderRadius: 2,
  padding: 14,
  color: "#1f2328",
  width: "100%",
};

/**
 * 09 · 数量步进 Quantity（插件功能）
 * 单装这一个：上限 = min(库存, 限购)。red/s 库存 5 / 限购 2 → 步进到 2 封顶；
 * 换 blue/s（无限购）→ 上限 5。数量的每次变化都进右栏日志。
 */
export const meta: DemoMeta = {
  slug: "quantity",
  title: "数量步进 Quantity",
  group: "plugin",
  plugin: "Quantity",
  intro: "上限 = min(库存, 限购)：red/s 到 2 就封顶（限购 2），换 blue/s（无限购）上限变 5。",
  why: "别让用户选了 10 件、提交时才发现限购 2——上限在选数量那一刻就该说清楚。",
  plugs: [
    {
      fn: "createQuantityPlugin",
      cfg: "defaultValue: {{initQty}}, onChange: (q) => track(q)",
      why: "渲染数量步进器并把数量写进内核 state（key: quantity）",
    },
  ],
  props: [
    "attributes={attributes}",
    "variants={variants}",
    "defaultSelection={{ 颜色: 'red', 尺码: 's' }}",
  ],
  note: "数量依附于具体 SKU：未命中变体时步进器不渲染；切换变体后数量自动收敛到新上限内。",
  controls: [{ key: "initQty", label: "初始数量", kind: "number", init: 1, min: 1, max: 3 }],
  stageHeight: 280,
};

export default function Stage({ cfg, log }: DemoStageProps) {
  const initQty = Number(cfg.initQty);

  const Sku = useMemo(
    () =>
      createSkuSelector([
        createQuantityPlugin({ defaultValue: initQty, onChange: (q) => log(\`数量 → \${q}\`) }),
      ]),
    [initQty, log]
  );

  return (
    <div style={CARD}>
      <Sku
        key={initQty}
        attributes={ATTRIBUTES}
        variants={VARIANTS}
        defaultSelection={{ 颜色: "red", 尺码: "s" }}
      />
      <p style={{ margin: "10px 0 0", fontSize: 11, color: "#5b6064" }}>
        点 + 到封顶，再换「蓝 S」：上限跳到库存 5，步进器跟随新变体重算。
      </p>
    </div>
  );
}
`,FS=`import React, { useMemo } from "react";
import { createSkuSelector } from "vane-sku";
import { createSkuCodePlugin } from "vane-sku/custom-plugins/SkuCodePlugin";
import type { DemoMeta, DemoStageProps } from "./types";
import { ATTRIBUTES, VARIANTS } from "../data/sample";

const CARD: React.CSSProperties = {
  background: "#fff",
  borderRadius: 2,
  padding: 14,
  color: "#1f2328",
  width: "100%",
};

/**
 * 10 · 货号展示 SkuCode（插件功能）
 * 单装这一个：命中变体后用等宽字体展示货号，前缀文案可换。
 * 「一行字但每家都要」的长尾需求，做成插件而不是塞进 core。
 */
export const meta: DemoMeta = {
  slug: "sku-code",
  title: "货号展示 SkuCode",
  group: "plugin",
  plugin: "SkuCode",
  intro: "命中变体后用等宽字体展示货号；前缀文案可换（货号 / SKU / 商品编码）。",
  why: "客服对单、用户报修、订单核对都靠这串编码；「一行字但每家都要」的需求就该是插件。",
  plugs: [{ fn: "createSkuCodePlugin", cfg: "label: '{{label}}'", why: "命中后渲染货号行（等宽字体）" }],
  props: [
    "attributes={attributes}",
    "variants={variants}",
    "defaultSelection={{ 颜色: 'red', 尺码: 's' }}",
  ],
  note: "core 的「选中摘要」里本就含编码；本插件用于需要单独突出、便于复制核对编码的场景。",
  controls: [
    {
      key: "label",
      label: "前缀文案",
      kind: "select",
      init: "货号",
      options: [
        { label: "货号", value: "货号" },
        { label: "SKU", value: "SKU" },
        { label: "商品编码", value: "商品编码" },
      ],
    },
  ],
  stageHeight: 260,
};

export default function Stage({ cfg, log }: DemoStageProps) {
  const label = String(cfg.label);

  const Sku = useMemo(() => createSkuSelector([createSkuCodePlugin({ label })]), [label]);

  return (
    <div style={CARD}>
      <Sku
        attributes={ATTRIBUTES}
        variants={VARIANTS}
        defaultSelection={{ 颜色: "red", 尺码: "s" }}
        onChange={(_sel, v) => v && log(\`命中 \${v.sku}\`, "event")}
      />
      <p style={{ margin: "10px 0 0", fontSize: 11, color: "#5b6064" }}>
        未选全时不占位——货号只在命中后出现，别让半选状态看到错误的编码。
      </p>
    </div>
  );
}
`,VS=`import React, { useMemo } from "react";
import { createSkuSelector } from "vane-sku";
import { createResetBarPlugin } from "vane-sku/custom-plugins/ResetBarPlugin";
import type { DemoMeta, DemoStageProps } from "./types";
import { ATTRIBUTES, VARIANTS } from "../data/sample";

const CARD: React.CSSProperties = {
  background: "#fff",
  borderRadius: 2,
  padding: 14,
  color: "#1f2328",
  width: "100%",
};

/**
 * 11 · 清空重选 ResetBar（插件功能）
 * 单装这一个：一键走 context.clearSelection() 整段重置，
 * 未选任何规格时按钮自动隐藏；onReset 回调接右栏日志。
 */
export const meta: DemoMeta = {
  slug: "reset-bar",
  title: "清空重选 ResetBar",
  group: "plugin",
  plugin: "ResetBar",
  intro: "选了一半想重来，一键清空：走 context.clearSelection()，未选任何规格时按钮自动隐藏。",
  why: "core 支持「再点同值取消」，但逐个取消很烦；移动端小屏上整体重置是高频操作。",
  plugs: [
    {
      fn: "createResetBarPlugin",
      cfg: "text: '{{text}}', onReset: () => track('reset')",
      why: "渲染清空按钮并整段重置选择",
    },
  ],
  props: ["attributes={attributes}", "variants={variants}", "onChange={handleChange}"],
  note: "依赖核心 context.clearSelection()（vane-sku 0.1.0 起提供）；onReset 在清空后触发，接埋点很顺手。",
  controls: [
    {
      key: "text",
      label: "按钮文案",
      kind: "select",
      init: "清空重选",
      options: [
        { label: "清空重选", value: "清空重选" },
        { label: "重新选择", value: "重新选择" },
        { label: "重置规格", value: "重置规格" },
      ],
    },
  ],
  stageHeight: 280,
};

export default function Stage({ cfg, log }: DemoStageProps) {
  const text = String(cfg.text);

  const Sku = useMemo(
    () =>
      createSkuSelector([
        createResetBarPlugin({
          text,
          onReset: () => log(\`onReset · 选择已整段清空（按钮随空选择隐藏）\`, "info"),
        }),
      ]),
    [text, log]
  );

  return (
    <div style={CARD}>
      <Sku
        attributes={ATTRIBUTES}
        variants={VARIANTS}
        onChange={(sel, v) =>
          log(
            v ? \`命中 \${v.sku} · \${JSON.stringify(sel)}\` : \`未命中 · \${JSON.stringify(sel)}\`,
            v ? "event" : "warn"
          )
        }
      />
      <p style={{ margin: "10px 0 0", fontSize: 11, color: "#5b6064" }}>
        选两个规格 → 点「清空重选」：右栏记一次 onReset，按钮自己藏起来（没有选择可清了）。
      </p>
    </div>
  );
}
`,HS=`import React, { useMemo, useState } from "react";
import { createSkuSelector } from "vane-sku";
import { createImageLinkPlugin } from "vane-sku/custom-plugins/ImageLinkPlugin";
import type { DemoMeta, DemoStageProps } from "./types";
import { ATTRIBUTES, VARIANTS } from "../data/sample";

/**
 * 12 · 规格切主图 ImageLink（插件功能）
 * 事件型插件：只发事件（onImageChange 回调 + sku:image 总线），不渲染任何 UI。
 * 主图由外层渲染——本页用 useState 存当前图，左边就是「外层的 gallery」。
 */
export const meta: DemoMeta = {
  slug: "image-link",
  title: "规格切主图 ImageLink",
  group: "plugin",
  plugin: "ImageLink",
  intro: "命中变体带 image 时把图抛给外层（回调 + sku:image 总线双通道），自己不渲染任何 UI；左侧主图由本页外层渲染。",
  why: "规格图联动与「谁来渲染主图」解耦：gallery、卡片、放大镜想怎么接就怎么接，core 不碰图片。",
  plugs: [
    { fn: "createImageLinkPlugin", cfg: "onImageChange: setMainImage", why: "只发事件，主图渲染留给外层" },
  ],
  props: [
    "attributes={attributes}",
    "variants={variants}",
    "defaultSelection={{ 颜色: 'red', 尺码: 's' }}",
  ],
  note: "挂载（onMount）也会推一次当前图，页面打开主图不空窗；未命中或变体没写 image 时不发事件。",
  stageHeight: 300,
};

export default function Stage({ log }: DemoStageProps) {
  const [main, setMain] = useState(VARIANTS[0].image ?? "");

  const Sku = useMemo(
    () =>
      createSkuSelector([
        createImageLinkPlugin({
          onImageChange: (img) => {
            setMain(img);
            log(\`主图 → \${img}\`);
          },
        }),
      ]),
    [log]
  );

  return (
    <div style={{ display: "flex", gap: 12, alignItems: "flex-start", width: "100%" }}>
      <img
        src={main}
        alt="主图"
        style={{ width: 92, height: 92, objectFit: "cover", borderRadius: 2, border: "1px solid var(--line)" }}
      />
      <div style={{ background: "#fff", borderRadius: 2, padding: 14, color: "#1f2328", flex: 1 }}>
        <Sku attributes={ATTRIBUTES} variants={VARIANTS} defaultSelection={{ 颜色: "red", 尺码: "s" }} />
        <p style={{ margin: "10px 0 0", fontSize: 11, color: "#5b6064" }}>
          换颜色 / 尺码：左图跟着变体走；这就是「发事件的插件 + 接事件的外层」。
        </p>
      </div>
    </div>
  );
}
`,QS=`import React, { useMemo } from "react";
import { createSkuSelector } from "vane-sku";
import { createKeyboardNavPlugin } from "vane-sku/custom-plugins/KeyboardNavPlugin";
import type { DemoMeta, DemoStageProps } from "./types";
import { KeyHint } from "./panels";
import { ATTRIBUTES, VARIANTS } from "../data/sample";

const CARD: React.CSSProperties = {
  background: "#fff",
  borderRadius: 2,
  padding: 14,
  color: "#1f2328",
  width: "100%",
};

/**
 * 13 · 键盘漫游 KeyboardNav（插件功能）
 * 行为型插件：←→ 同行切换、↑↓ 跨行跳转（保持列位），自动跳过置灰项。
 * 预选「蓝」后 L 是死路——方向键会绕开它，这正是「跳过死路」的意义。
 */
export const meta: DemoMeta = {
  slug: "keyboard",
  title: "键盘漫游 KeyboardNav",
  group: "plugin",
  plugin: "KeyboardNav",
  intro: "点中任一规格按钮后，←→ 同行切换、↑↓ 跨行跳转，自动跳过置灰项（预选了「蓝」，方向键会绕开死路的 L）。",
  why: "键盘用户 / 电视端大屏选购的无障碍刚需；「跳过死路」让方向键永远落在有效选项上。",
  plugs: [
    { fn: "createKeyboardNavPlugin", cfg: "preventDefault: {{prevent}}", why: "挂 keydown 监听实现方向键漫游" },
  ],
  props: [
    "attributes={attributes}",
    "variants={variants}",
    "defaultSelection={{ 颜色: 'blue' }}",
  ],
  note: "实现走 DOM 查询（依赖 core 按钮的 data-testid 约定），不侵入渲染；onMount 返回清理函数，卸载自动摘监听。",
  controls: [{ key: "prevent", label: "阻止方向键滚动页面", kind: "switch", init: true }],
  stageHeight: 320,
};

export default function Stage({ cfg }: DemoStageProps) {
  const prevent = Boolean(cfg.prevent);

  const Sku = useMemo(
    () => createSkuSelector([createKeyboardNavPlugin({ preventDefault: prevent })]),
    [prevent]
  );

  return (
    <div style={CARD}>
      <p style={{ margin: "0 0 8px", fontSize: 12, color: "#4a5056" }}>
        先点（或 Tab 聚焦）任一规格按钮，再用方向键走两圈：
      </p>
      <KeyHint
        items={[
          ["←→", "同属性行内切换选项"],
          ["↑↓", "跨属性行跳转（保持列位）"],
        ]}
      />
      <div style={{ marginTop: 10 }}>
        <Sku attributes={ATTRIBUTES} variants={VARIANTS} defaultSelection={{ 颜色: "blue" }} />
      </div>
      <p style={{ margin: "10px 0 0", fontSize: 11, color: "#5b6064" }}>
        在尺码行按 →：S → M → 回到 S，L 因缺 blue-l 被置灰，直接被跳过。
      </p>
    </div>
  );
}
`,WS=`import React, { useEffect, useMemo } from "react";
import { createSkuSelector } from "vane-sku";
import { createStatePersistencePlugin } from "vane-sku/custom-plugins/StatePersistencePlugin";
import type { DemoMeta, DemoStageProps } from "./types";
import { ATTRIBUTES, VARIANTS } from "../data/sample";

const CARD: React.CSSProperties = {
  background: "#fff",
  borderRadius: 2,
  padding: 14,
  color: "#1f2328",
  width: "100%",
};

/** 独立存储键：避免和场景卡 / 全量装配页的持久化互相踩 */
const KEY = "vane-sku:demo:demos-persistence";

/**
 * 14 · 选择持久化 StatePersistence（插件功能）
 * 行为型插件：挂载读回 / 变化写入 / 清空删键。拖「重挂载」开关销毁重建组件，
 * 上次的选择从 localStorage 原样还原——还原与写入都记进右栏日志。
 */
export const meta: DemoMeta = {
  slug: "persistence",
  title: "选择持久化 StatePersistence",
  group: "plugin",
  plugin: "StatePersistence",
  intro: "把上次选的规格写进 localStorage，挂载时读回；拖「重挂载」开关销毁重建，选择原样还原。",
  why: "用户逛一圈回来还停在上次的规格；多步下单流程中途返回，也不用从头重选。",
  plugs: [
    { fn: "createStatePersistencePlugin", cfg: "key: 'vane-sku:demo:selection'", why: "挂载读回 / 变化写入 / 清空删键" },
  ],
  props: ["attributes={attributes}", "variants={variants}"],
  note: "隐私模式、存储禁用、配额超限、脏数据一律静默降级，不影响主流程；与 UrlSync 可共存。",
  controls: [
    { key: "remount", label: "重挂载（模拟刷新）", kind: "switch", init: false, nonLayout: true },
  ],
  stageHeight: 300,
};

export default function Stage({ cfg, log }: DemoStageProps) {
  // 开关每翻转一次 = 重挂载一次（false→true 一次，true→false 又一次）
  const toggle = Boolean(cfg.remount);

  const Sku = useMemo(() => createSkuSelector([createStatePersistencePlugin({ key: KEY })]), []);

  // 重挂载后读一次存储：把「还原自 localStorage」摊进日志
  useEffect(() => {
    const raw = window.localStorage.getItem(KEY);
    log(\`挂载 · localStorage \${raw ? \`读回 \${raw}\` : "为空（首次进入）"}\`, "info");
  }, [toggle, log]);

  return (
    <div style={CARD}>
      <Sku
        key={String(toggle)}
        attributes={ATTRIBUTES}
        variants={VARIANTS}
        onChange={(sel, v) =>
          log(
            v ? \`写入 localStorage：\${JSON.stringify(sel)}（命中 \${v.sku}）\` : \`写入 localStorage：\${JSON.stringify(sel)}\`,
            v ? "event" : "warn"
          )
        }
      />
      <p style={{ margin: "10px 0 0", fontSize: 11, color: "#5b6064" }}>
        选好规格 → 拖「重挂载」：按钮组销毁重建，选择自动还原；把选择清空（再点同值取消）会删键。
      </p>
    </div>
  );
}
`,KS=`import React, { useCallback, useMemo, useState } from "react";
import { createSkuSelector } from "vane-sku";
import { createUrlSyncPlugin } from "vane-sku/custom-plugins/UrlSyncPlugin";
import type { DemoMeta, DemoStageProps } from "./types";
import { ATTRIBUTES, VARIANTS } from "../data/sample";

const CARD: React.CSSProperties = {
  background: "#fff",
  borderRadius: 2,
  padding: 14,
  color: "#1f2328",
  width: "100%",
};

const CODE: React.CSSProperties = {
  display: "block",
  padding: "6px 10px",
  borderRadius: 2,
  background: "#f4f5f7",
  border: "1px solid #e5e7eb",
  color: "#b45309",
  fontFamily: "'JetBrains Mono', ui-monospace, monospace",
  fontSize: 11,
  overflowX: "auto",
  whiteSpace: "nowrap",
};

/**
 * 15 · URL 同步 UrlSync（插件功能）
 * 行为型插件：选择写进查询串（?sku_颜色=red&sku_尺码=s），挂载时反向解析还原。
 * 下方展示当前查询串的只读快照；变化也记进右栏日志。
 */
export const meta: DemoMeta = {
  slug: "url-sync",
  title: "URL 同步 UrlSync",
  group: "plugin",
  plugin: "UrlSync",
  intro: "选择写进查询串（?sku_颜色=red&sku_尺码=s），挂载时反向还原；刷新 / 分享都能保持选择。",
  why: "「把这个链接发给客服，他看到的就是我选的规格」——客服带规格链接、分享商品页的刚需。",
  plugs: [
    { fn: "createUrlSyncPlugin", cfg: "useReplace: {{replace}}", why: "选择 ↔ 查询串双向同步" },
  ],
  props: ["attributes={attributes}", "variants={variants}", "onChange={handleChange}"],
  note: "默认 replaceState 不把每次点击塞进历史栈；查询键带 sku_ 前缀，不覆盖页面其它参数。",
  controls: [{ key: "replace", label: "replaceState（不进历史栈）", kind: "switch", init: true }],
  stageHeight: 300,
};

export default function Stage({ cfg, log }: DemoStageProps) {
  const replace = Boolean(cfg.replace);
  const [q, setQ] = useState(() => window.location.search || "（空）");

  const Sku = useMemo(() => createSkuSelector([createUrlSyncPlugin({ useReplace: replace })]), [replace]);

  const sync = useCallback(() => {
    const next = window.location.search || "（已清空）";
    setQ(next);
    log(\`查询串 → \${next}\`);
  }, [log]);

  return (
    <div style={{ ...CARD, display: "grid", gap: 10 }}>
      <Sku attributes={ATTRIBUTES} variants={VARIANTS} onChange={sync} />
      <code style={CODE}>{q}</code>
      <p style={{ margin: 0, fontSize: 11, color: "#5b6064" }}>
        上方是实时查询串（只读快照）。关掉开关改用 pushState：每次选择都进历史栈，后退键能撤销选择。
      </p>
    </div>
  );
}
`,qS=`import React, { useMemo } from "react";
import { createSkuSelector } from "vane-sku";
import { createAnalyticsPlugin } from "vane-sku/custom-plugins/AnalyticsPlugin";
import type { AnalyticsEvent } from "vane-sku/custom-plugins/AnalyticsPlugin";
import type { DemoMeta, DemoStageProps } from "./types";
import { ATTRIBUTES, VARIANTS } from "../data/sample";

const CARD: React.CSSProperties = {
  background: "#fff",
  borderRadius: 2,
  padding: 14,
  color: "#1f2328",
  width: "100%",
};

const EVENT_LABEL: Record<AnalyticsEvent["name"], string> = {
  "sku:mount": "挂载",
  "sku:change": "命中",
  "sku:invalid": "未命中",
};

/**
 * 16 · 埋点上报 Analytics（插件功能）
 * 事件型插件：三类事件（挂载 / 命中 / 未命中）双通道出口——
 * onEvent 回调 + sku:analytics 总线，不渲染任何 UI。这里把 onEvent
 * 接到右栏日志：右栏的每一行就是一次真实上报。
 */
export const meta: DemoMeta = {
  slug: "analytics",
  title: "埋点上报 Analytics",
  group: "plugin",
  plugin: "Analytics",
  intro: "三类事件（挂载 / 命中 / 未命中）双通道出口：onEvent 回调 + sku:analytics 总线。右栏日志就是上报流水。",
  why: "规格选择是转化漏斗的关键一步；「哪些组合被点了、哪些根本选不出来」对选品和补库存都是硬数据。",
  plugs: [
    {
      fn: "createAnalyticsPlugin",
      cfg: "onlyMatched: {{onlyMatched}}, onEvent: (e) => track(e)",
      why: "只做事件出口，不渲染任何 UI；接哪家 SDK 由宿主决定",
    },
  ],
  props: ["attributes={attributes}", "variants={variants}"],
  note: "默认未命中也上报——「用户点得到却选不出」的坏组合恰恰最该被发现。",
  controls: [{ key: "onlyMatched", label: "只上报命中", kind: "switch", init: false, nonLayout: true }],
  stageHeight: 280,
};

export default function Stage({ cfg, log }: DemoStageProps) {
  const onlyMatched = Boolean(cfg.onlyMatched);

  const Sku = useMemo(
    () =>
      createSkuSelector([
        createAnalyticsPlugin({
          onlyMatched,
          onEvent: (e) =>
            log(
              \`\${EVENT_LABEL[e.name]} · \${JSON.stringify(e.selection)}\${e.variant ? \` → \${e.variant.sku}\` : ""}\`,
              e.name === "sku:invalid" ? "warn" : e.name === "sku:mount" ? "info" : "event"
            ),
        }),
      ]),
    [onlyMatched, log]
  );

  return (
    <div style={CARD}>
      <Sku attributes={ATTRIBUTES} variants={VARIANTS} />
      <p style={{ margin: "10px 0 0", fontSize: 11, color: "#5b6064" }}>
        只选颜色（未选全）记「未命中」，选全记「命中」，进页面记「挂载」——三种事件都会进右栏。
      </p>
    </div>
  );
}
`,GS=Object.assign({"./00-quickstart.tsx":Ch,"./01-disable.tsx":Th,"./02-two-attr.tsx":Lh,"./03-ignore-stock.tsx":Ah,"./04-full-combo.tsx":Lv,"./05-price-range.tsx":Av,"./06-price-link.tsx":Bv,"./07-stock-status.tsx":Qv,"./08-quota.tsx":Gv,"./09-quantity.tsx":Zv,"./10-sku-code.tsx":rS,"./11-reset-bar.tsx":sS,"./12-image-link.tsx":cS,"./13-keyboard.tsx":yS,"./14-persistence.tsx":xS,"./15-url-sync.tsx":ES,"./16-analytics.tsx":$S}),JS=Object.assign({"./00-quickstart.tsx":NS,"./01-disable.tsx":LS,"./02-two-attr.tsx":OS,"./03-ignore-stock.tsx":MS,"./04-full-combo.tsx":IS,"./05-price-range.tsx":AS,"./06-price-link.tsx":DS,"./07-stock-status.tsx":zS,"./08-quota.tsx":US,"./09-quantity.tsx":BS,"./10-sku-code.tsx":FS,"./11-reset-bar.tsx":VS,"./12-image-link.tsx":HS,"./13-keyboard.tsx":QS,"./14-persistence.tsx":WS,"./15-url-sync.tsx":KS,"./16-analytics.tsx":qS}),YS=e=>e.replace(/^\.\//,""),bl=Object.entries(GS).map(([e,t])=>{const n=YS(e);return{meta:t.meta,Stage:t.default,file:n,source:JS[e]??""}}).sort((e,t)=>e.file.localeCompare(t.file)),XS=["basic","advanced","plugin"];Array.from(new Set(bl.map(e=>e.meta.plugin).filter(e=>!!e))).sort();const jl={basic:{label:"基础功能",hint:"Core 自身的 props 与推导行为"},advanced:{label:"高级功能",hint:"全量装配 / 组合"},plugin:{label:"插件功能",hint:"一插件一页"}};function iu(e){const t={};for(const n of e.controls??[])t[n.key]=n.init;return t}const ZS="import|from|export|default|function|return|const|let|var|new|if|else|for|of|in|while|switch|case|break|continue|type|interface|extends|implements|as|satisfies|await|async|throw|try|catch|finally|class|typeof|instanceof|delete|void|yield",ek="true|false|null|undefined|this|super",tk="number|string|boolean|object|any|unknown|never|React|HTMLElement|void",lu=new RegExp([String.raw`(\/\/[^\n]*|\/\*[\s\S]*?\*\/)`,String.raw`(\`(?:\\[\s\S]|[^\\\`])*\`|"(?:\\[\s\S]|[^\\"])*"|'(?:\\[\s\S]|[^\\'])*')`,String.raw`\b(${ZS})\b`,String.raw`\b(${ek})\b`,String.raw`\b(${tk})\b`,String.raw`(<\/?[A-Za-z][\w.$]*)`,String.raw`\b(\d+(?:\.\d+)?)\b`].join("|"),"g"),su=["tok-comment","tok-string","tok-kw","tok-lit","tok-type","tok-tag","tok-num"];function nk(e){const t=[];let n=0;lu.lastIndex=0;let r;for(;r=lu.exec(e);){r.index>n&&t.push({text:e.slice(n,r.index),cls:null});const o=su.findIndex((i,l)=>r[l+1]!==void 0);t.push({text:r[0],cls:o>=0?su[o]:null}),n=r.index+r[0].length}return n<e.length&&t.push({text:e.slice(n),cls:null}),t}function au(e){try{const t=document.createElement("textarea");t.value=e,t.setAttribute("readonly",""),t.style.position="fixed",t.style.opacity="0",document.body.appendChild(t),t.select();const n=document.execCommand("copy");return document.body.removeChild(t),n}catch{return!1}}function rk({code:e,title:t="tsx",collapseAfter:n=24,maxHeight:r}){const[o,i]=v.useState("idle"),[l,s]=v.useState(!1),a=v.useMemo(()=>e.replace(/\s+$/,"").split(`
`),[e]),u=n>0&&a.length>n,p=u&&!l?a.slice(0,n).join(`
`):e,c=v.useMemo(()=>nk(p),[p]),g=v.useCallback(async()=>{var S;let y=!1;if((S=navigator.clipboard)!=null&&S.writeText)try{await navigator.clipboard.writeText(e),y=!0}catch{y=au(e)}else y=au(e);i(y?"ok":"fail"),window.setTimeout(()=>i("idle"),1600)},[e]);return f.jsxs("div",{className:"code",children:[f.jsxs("div",{className:"code-head",children:[f.jsx("span",{children:t}),f.jsxs("span",{style:{display:"flex",gap:6,alignItems:"center"},children:[f.jsxs("span",{children:[a.length," 行"]}),f.jsx("button",{type:"button",className:`code-copy${o==="ok"?" is-ok":o==="fail"?" is-fail":""}`,onClick:g,children:o==="ok"?"已复制":o==="fail"?"复制失败":"复制"})]})]}),f.jsx("pre",{style:r?{maxHeight:r}:void 0,children:f.jsx("code",{children:c.map((y,S)=>y.cls?f.jsx("span",{className:y.cls,children:y.text},S):f.jsx(vr.Fragment,{children:y.text},S))})}),u?f.jsx("button",{type:"button",className:"code-more",onClick:()=>s(y=>!y),children:l?"收起":`展开余下 ${a.length-n} 行`}):null]})}const ok=/\{\{\s*([\w-]+)\s*\}\}/g;function uu(e,t){return e.replace(ok,(n,r)=>r in t?String(t[r]):n)}function ik(e){return e.replace(/^create/,"")}function lk(e,t){const r=['import { createSkuSelector } from "vane-sku";',...e.plugs.map(s=>s.fn).sort().map(s=>`import { ${s} } from "vane-sku/custom-plugins/${ik(s)}";`),"",'import type { SkuAttribute, SkuVariant } from "vane-sku";'].join(`
`),o=e.plugs.map(s=>`  ${s.fn}(${s.cfg?`{ ${uu(s.cfg,t)} }`:""}),`).join(`
`),i=e.props.filter(s=>typeof s=="string"||!s.when||s.when(t)).map(s=>`      ${uu(typeof s=="string"?s:s.text,t)}`).join(`
`),l=e.plugs.length?`const Sku = createSkuSelector([
${o}
]);`:`// 这一页只用 Core：组合矩阵 + 禁用推导 + 选中摘要，不需要任何插件
const Sku = createSkuSelector([]);`;return`// ${e.title} · 最小装配（照抄即可跑）
${r}

${l}

export default function Demo({ attributes, variants }: { attributes: SkuAttribute[]; variants: SkuVariant[] }) {
  return (
    <Sku
      attributes={attributes}
      variants={variants}
${i}
    </Sku>
  );
}
`}function sk({entry:e,order:t}){var w;const{meta:n,Stage:r,file:o,source:i}=e,[l,s]=v.useState(()=>iu(n)),[a,u]=v.useState([]),[p,c]=v.useState("minimal"),g=v.useCallback((k,m="event")=>{const d=new Date().toLocaleTimeString("zh-CN",{hour12:!1});u(h=>[{id:h.length+1,at:d,text:k,kind:m},...h].slice(0,60))},[]),y=v.useCallback((k,m)=>{s(d=>({...d,[k]:m}))},[]),S=v.useMemo(()=>lk(n,l),[n,l]);return f.jsxs("section",{className:"demo","data-demo":n.slug,children:[f.jsxs("header",{className:"demo-head",children:[f.jsxs("div",{className:"demo-folio",children:[f.jsx("span",{className:"demo-no",children:String(t).padStart(2,"0")}),f.jsx("em",{children:"plate"})]}),f.jsxs("div",{children:[f.jsxs("div",{className:"demo-title-row",children:[f.jsx("h2",{children:n.title}),f.jsx("span",{className:"demo-group",children:jl[n.group].label}),n.plugin?f.jsx("code",{className:"demo-plugin",children:n.plugin}):null]}),f.jsx("p",{className:"demo-intro",children:n.intro}),f.jsxs("p",{className:"demo-why",children:[f.jsx("b",{children:"什么时候用"}),n.why]})]}),f.jsxs("div",{className:"demo-meta",children:[f.jsxs("div",{className:"demo-meta-row",children:[f.jsx("span",{children:"file"}),f.jsx("b",{children:o})]}),f.jsxs("div",{className:"demo-meta-row",children:[f.jsx("span",{children:"group"}),f.jsx("b",{children:jl[n.group].label})]}),f.jsxs("div",{className:"demo-meta-row",children:[f.jsx("span",{children:"plugs"}),f.jsx("b",{children:n.plugs.length?`${n.plugs.length} installed`:"core only"})]})]})]}),(w=n.controls)!=null&&w.length?f.jsxs("div",{className:"demo-controls",children:[f.jsx(dS,{controls:n.controls,cfg:l,onChange:y}),f.jsx("button",{type:"button",className:"demo-reset",onClick:()=>{s(iu(n)),u([])},children:"重置"})]}):null,f.jsxs("div",{className:"demo-body",children:[f.jsxs("figure",{className:"plate",children:[f.jsxs("figcaption",{className:"plate-cap",children:[f.jsx("b",{children:"stage"}),f.jsxs("span",{children:[n.tone==="light"?"light surface":"live render",n.stageHeight?` · ${n.stageHeight}px`:""]}),f.jsx("em",{children:"live"})]}),f.jsx("div",{className:"plate-ruler","aria-hidden":!0}),f.jsx("div",{className:`plate-body demo-stage${n.tone==="light"?" tone-light":""}`,style:{"--stage-h":`${n.stageHeight??380}px`},children:f.jsx(r,{cfg:l,log:g,setCfg:y})})]}),f.jsxs("aside",{className:"demo-side",children:[f.jsx("div",{className:"demo-plugs",children:n.plugs.length===0?f.jsx("span",{className:"demo-plug is-core",children:"仅 Core props"}):n.plugs.map(k=>f.jsx("span",{className:`demo-plug${k.local?" is-local":""}`,children:k.fn.replace(/^create|Plugin$/g,"")},k.fn))}),f.jsx("ul",{className:"demo-why-list",children:n.plugs.map(k=>f.jsxs("li",{children:[f.jsx("code",{children:k.fn}),f.jsx("span",{children:k.why})]},k.fn))}),n.note?f.jsxs("p",{className:"demo-note",children:["⚠ ",n.note]}):null,f.jsx(fS,{lines:a,empty:n.plugs.length>0?"还没触发 —— 拖上面的控件，或点一下规格试试":"这一页没有事件类行为，日志留白"})]})]}),f.jsxs("div",{className:"demo-code",children:[f.jsxs("div",{className:"demo-switch",role:"tablist",children:[f.jsx("button",{type:"button",role:"tab","aria-selected":p==="minimal",className:p==="minimal"?"is-active":"",onClick:()=>c("minimal"),children:"最小装配"}),f.jsx("button",{type:"button",role:"tab","aria-selected":p==="full",className:p==="full"?"is-active":"",onClick:()=>c("full"),children:"完整源码"})]}),f.jsx(rk,{code:p==="minimal"?S:i,title:p==="minimal"?`${n.slug}.minimal.tsx`:o,collapseAfter:p==="minimal"?0:26,maxHeight:420},p)]})]})}const ak=`import type {
  SkuPlugin,
  SkuPluginContext,
  SkuSelection,
  SkuVariant,
} from "../../components/SkuPlugin/plugins/types";

/**
 * AnalyticsPlugin — 埋点上报。
 *
 * 规格选择是转化漏斗的关键一步，「哪些组合被点了、哪些组合根本选不出来」
 * 对选品和库存都是硬需求。这里只做事件出口，不渲染任何 UI：
 * 回调（onEvent）与总线（sku:analytics）双通道，接哪家 SDK 由宿主决定。
 *
 * meta 在同目录 index.ts 挂载。
 */
export interface AnalyticsEvent {
  name: "sku:mount" | "sku:change" | "sku:invalid";
  selection: SkuSelection;
  variant: SkuVariant | null;
  at: number;
}

export interface AnalyticsConfig {
  /** 统一事件出口（推荐：接到你自己的埋点 SDK） */
  onEvent?: (event: AnalyticsEvent) => void;
  /** 只在命中变体时上报，默认 false（未命中也上报，便于发现「选不出来」的组合） */
  onlyMatched?: boolean;
}

export function createAnalyticsPlugin(config: AnalyticsConfig = {}): SkuPlugin {
  const emit = (
    context: SkuPluginContext,
    name: AnalyticsEvent["name"],
    selection: SkuSelection,
    variant: SkuVariant | null
  ) => {
    if (config.onlyMatched && !variant) return;
    const event: AnalyticsEvent = {
      name,
      selection,
      variant,
      at: Date.now(),
    };
    context.bus.emit("sku:analytics", event);
    config.onEvent?.(event);
  };

  return {
    name: "Analytics",
    version: "0.1.0",
    description: "规格选择埋点：回调 + 总线双通道，不渲染 UI",
    priority: 10,
    config,
    hooks: {
      onMount: (context: SkuPluginContext) => {
        emit(context, "sku:mount", context.selection, context.variant);
      },
      onSkuChange: (
        context: SkuPluginContext,
        selection: SkuSelection,
        variant: SkuVariant | null
      ) => {
        emit(
          context,
          variant ? "sku:change" : "sku:invalid",
          selection,
          variant
        );
      },
    },
  };
}
`,uk=`import type {
  SkuPlugin,
  SkuPluginContext,
} from "../../components/SkuPlugin/plugins/types";

/**
 * ImageLinkPlugin — 规格切主图（B5：只发事件，不渲染 UI）。
 *
 * 命中变体带 image 时把图抛给外层（回调 + 总线），由外层 gallery / card 决定
 * 怎么切主图 —— 规格图联动与「谁来渲染主图」解耦，core 因此不碰图片渲染。
 *
 * meta 在同目录 index.ts 挂载。
 */
export interface ImageLinkConfig {
  /** 主图切换回调（推荐用法） */
  onImageChange?: (image: string) => void;
}

export function createImageLinkPlugin(
  config: ImageLinkConfig = {}
): SkuPlugin {
  const push = (context: SkuPluginContext) => {
    const image = context.variant?.image;
    if (!image) return;
    config.onImageChange?.(image);
    context.bus.emit("sku:image", image);
  };

  return {
    name: "ImageLink",
    version: "0.1.0",
    description: "规格切主图：命中变体带图时抛事件，不渲染 UI",
    priority: 30,
    config,
    hooks: {
      onMount: (context: SkuPluginContext) => {
        push(context);
      },
      onSkuChange: (context: SkuPluginContext) => {
        push(context);
      },
    },
  };
}
`,ck=`import type { SkuPlugin, SkuPluginContext } from "../../components/SkuPlugin/plugins/types";

/**
 * KeyboardNavPlugin — 键盘漫游（无障碍）。
 *
 * 让规格按钮支持方向键操作：
 *   ← → 在同一属性行内切换选项（自动跳过被禁用推导置灰的选项）
 *   ↑ ↓ 在属性行之间跳转（尽量保持列位置）
 *
 * 实现走 DOM 查询（按钮都带 data-testid），不侵入 core 渲染；
 * 挂载时挂监听、卸载时返回清理函数（内核 onMount 的 React 式写法）。
 *
 * meta 在同目录 index.ts 挂载。
 */
export interface KeyboardNavConfig {
  /** 是否阻止方向键的默认滚动行为，默认 true */
  preventDefault?: boolean;
}

export function createKeyboardNavPlugin(
  config: KeyboardNavConfig = {}
): SkuPlugin {
  const prevent = config.preventDefault ?? true;

  return {
    name: "KeyboardNav",
    version: "0.1.0",
    description: "键盘漫游：方向键在规格按钮间移动并选择",
    priority: 25,
    config,
    hooks: {
      onMount: (context: SkuPluginContext) => {
        const root = context.refs.getContainer?.() ?? null;
        if (!root) return;

        const optsOf = (row: Element) =>
          Array.from(
            row.querySelectorAll<HTMLButtonElement>('[data-testid^="sku-opt-"]')
          ).filter((b) => !b.disabled);

        const handler = (e: KeyboardEvent) => {
          const isHorizontal = e.key === "ArrowLeft" || e.key === "ArrowRight";
          const isVertical = e.key === "ArrowUp" || e.key === "ArrowDown";
          if (!isHorizontal && !isVertical) return;

          const btn = (e.target as HTMLElement | null)?.closest?.(
            '[data-testid^="sku-opt-"]'
          ) as HTMLButtonElement | null;
          if (!btn) return;

          const rows = Array.from(
            root.querySelectorAll<HTMLElement>('[data-testid^="sku-attr-"]')
          );
          const rowIndex = rows.findIndex((r) => r.contains(btn));
          if (rowIndex < 0) return;
          if (prevent) e.preventDefault();

          if (isHorizontal) {
            const list = optsOf(rows[rowIndex]);
            const cur = list.indexOf(btn);
            if (cur < 0 || !list.length) return;
            const next =
              list[
                (cur + (e.key === "ArrowRight" ? 1 : -1) + list.length) % list.length
              ];
            next.focus();
            next.click();
            return;
          }

          const dir = e.key === "ArrowDown" ? 1 : -1;
          const targetRow = rows[rowIndex + dir];
          if (!targetRow) return;
          const list = optsOf(targetRow);
          if (!list.length) return;
          const col = optsOf(rows[rowIndex]).indexOf(btn);
          const next = list[Math.min(Math.max(col, 0), list.length - 1)];
          next.focus();
          next.click();
        };

        root.addEventListener("keydown", handler);
        // 返回清理函数：内核会在 clear() 时逆序执行
        return () => root.removeEventListener("keydown", handler);
      },
    },
  };
}
`,dk=`import React from "react";
import type {
  SkuPlugin,
  SkuPluginContext,
} from "../../components/SkuPlugin/plugins/types";

/**
 * PriceLinkPlugin — 价格联动（B2/B4 子路径插件）。
 *
 * 订阅命中变体，把价格渲染到 overlay 段（core 的「选中摘要」之后）。
 * 定价策略可替换：默认取 variant.price，也可由调用方在 variant 上自备。
 *
 * meta 在同目录 index.ts 挂载（家族约定），这里只导出裸工厂。
 */
export interface PriceLinkConfig {
  /** 货币符号，默认 "¥" */
  currency?: string;
  /** 是否展示原价（原价 > 现价时才画删除线），默认 true */
  showOriginal?: boolean;
  /** 折扣文案，如 "限时8折" */
  discountText?: string;
}

export function createPriceLinkPlugin(
  config: PriceLinkConfig = {}
): SkuPlugin {
  return {
    name: "PriceLink",
    version: "0.1.0",
    description: "价格联动：把命中变体的价格渲染到浮层",
    priority: 50,
    config,
    hooks: {
      renderOverlay: (context: SkuPluginContext) => {
        const v = context.variant;
        if (!v || typeof v.price !== "number") return null;
        const currency = config.currency ?? "¥";
        const showOriginal = config.showOriginal ?? true;
        const hasOriginal =
          showOriginal &&
          typeof v.originalPrice === "number" &&
          v.originalPrice > v.price;

        return (
          <div
            data-testid="sku-price"
            style={{ display: "flex", alignItems: "baseline", gap: 6, marginTop: 6 }}
          >
            <span style={{ fontSize: 18, fontWeight: 700, color: "#b32d08" }}>
              {currency}
              {v.price}
            </span>
            {hasOriginal ? (
              <s data-testid="sku-price-original" style={{ fontSize: 12, color: "#6b7076" }}>
                {currency}
                {v.originalPrice}
              </s>
            ) : null}
            {config.discountText ? (
              <span
                data-testid="sku-price-discount"
                style={{
                  fontSize: 11,
                  padding: "1px 6px",
                  borderRadius: 4,
                  background: "#fff1f0",
                  color: "#b32d08",
                }}
              >
                {config.discountText}
              </span>
            ) : null}
          </div>
        );
      },
    },
  };
}
`,fk=`import React from "react";
import type { SkuPlugin, SkuPluginContext } from "../../components/SkuPlugin/plugins/types";

/**
 * PriceRangePlugin — 价格区间。
 *
 * 未选全（或组合无货）时，PriceLink 显示不出单价，页面价格区就空了。
 * 这里补上「¥199 – ¥269」这种区间展示：按当前选择过滤变体后取 min/max。
 * 一旦选全并命中变体就退场，把价格区让给 PriceLink 显示准确单价。
 *
 * meta 在同目录 index.ts 挂载。
 */
export interface PriceRangeConfig {
  /** 货币符号，默认 "¥" */
  currency?: string;
  /** 区间连接符，默认 "–" */
  separator?: string;
  /** 命中变体时是否仍显示区间（默认 false：让位给 PriceLink） */
  showWhenMatched?: boolean;
}

export function createPriceRangePlugin(config: PriceRangeConfig = {}): SkuPlugin {
  return {
    name: "PriceRange",
    version: "0.1.0",
    description: "价格区间：未命中变体时展示可选范围的价格区间",
    priority: 45,
    // 排在 PriceLink 之前：价格区上下只有一块，命中时由 PriceLink 接管
    config: { slotPosition: "after", order: 5, ...config },
    hooks: {
      renderOverlay: (context: SkuPluginContext) => {
        if (context.variant && !config.showWhenMatched) return null;

        const attrs = context.props.attributes ?? [];
        const selection = context.selection ?? {};
        // 按当前选择过滤：只统计「与已选属性一致」的变体
        const keys = Object.keys(selection);
        const pool = (context.props.variants ?? []).filter((v) =>
          keys.every((k) => v.attrValues[k] === selection[k])
        );
        const prices = pool
          .map((v) => v.price)
          .filter((p): p is number => typeof p === "number");
        if (!prices.length) return null;

        const min = Math.min(...prices);
        const max = Math.max(...prices);
        const currency = config.currency ?? "¥";
        const separator = config.separator ?? "–";

        return (
          <div
            data-testid="sku-price-range"
            style={{ display: "flex", alignItems: "baseline", gap: 6, marginTop: 6 }}
          >
            <span style={{ fontSize: 16, fontWeight: 700, color: "#b32d08" }}>
              {currency}
              {min}
              {min !== max ? \`\${separator}\${currency}\${max}\` : ""}
            </span>
            {attrs.length && !context.isComplete ? (
              <span style={{ fontSize: 11, color: "#5b6064" }}>（请先选择规格）</span>
            ) : null}
          </div>
        );
      },
    },
  };
}
`,pk=`import React from "react";
import type { SkuPlugin, SkuPluginContext } from "../../components/SkuPlugin/plugins/types";

/**
 * QuantityPlugin — 数量步进器。
 *
 * 选完规格紧接着就是选数量，上限取「库存」与「限购」的较小值，
 * 避免用户选了 10 件却在提交时才发现限购 2 件。
 * 数量写进内核 state（key: quantity），宿主加购按钮直接读。
 *
 * meta 在同目录 index.ts 挂载。
 */
export interface QuantityConfig {
  /** 初始数量，默认 1 */
  defaultValue?: number;
  /** 硬上限（不传则取 库存/限购 的较小值） */
  max?: number;
  /** 数量变化回调 */
  onChange?: (quantity: number) => void;
}

export function createQuantityPlugin(config: QuantityConfig = {}): SkuPlugin {
  const defaultValue = config.defaultValue ?? 1;

  return {
    name: "Quantity",
    version: "0.1.0",
    description: "数量步进器：受库存与限购双重上限约束",
    priority: 35,
    config: { slotPosition: "after", order: 20, ...config },
    hooks: {
      onMount: (context: SkuPluginContext) => {
        if (typeof context.state?.quantity !== "number") {
          context.setState({ quantity: defaultValue });
        }
      },
      renderHeader: (context: SkuPluginContext) => {
        const v = context.variant;
        if (!v) return null;

        // 上限：库存与限购取小；都缺省时用 config.max 或 Infinity
        const byStock = typeof v.stock === "number" ? v.stock : Infinity;
        const byQuota = typeof v.quota === "number" ? v.quota : Infinity;
        const upper = Math.min(byStock, byQuota, config.max ?? Infinity);
        if (!Number.isFinite(upper) || upper <= 0) return null;

        const current =
          typeof context.state?.quantity === "number"
            ? Math.min(context.state.quantity as number, upper)
            : Math.min(defaultValue, upper);

        const commit = (next: number) => {
          const clamped = Math.max(1, Math.min(next, upper));
          context.setState({ quantity: clamped });
          config.onChange?.(clamped);
        };

        const btn: React.CSSProperties = {
          width: 26,
          height: 26,
          border: "1px solid #d0d4da",
          background: "#fff",
          color: "#1f2328",
          cursor: "pointer",
          borderRadius: 4,
          lineHeight: 1,
        };

        return (
          <div
            data-testid="sku-quantity"
            data-quantity={String(current)}
            data-max={String(upper)}
            style={{ display: "flex", alignItems: "center", gap: 8, marginTop: 6 }}
          >
            <span style={{ fontSize: 12, color: "#4a5056" }}>数量</span>
            <button
              type="button"
              data-testid="sku-quantity-minus"
              disabled={current <= 1}
              onClick={() => commit(current - 1)}
              style={{ ...btn, color: current <= 1 ? "#7d838a" : "#1f2328", cursor: current <= 1 ? "not-allowed" : "pointer" }}
            >
              −
            </button>
            <span style={{ minWidth: 28, textAlign: "center", fontSize: 13 }}>{current}</span>
            <button
              type="button"
              data-testid="sku-quantity-plus"
              disabled={current >= upper}
              onClick={() => commit(current + 1)}
              style={{ ...btn, color: current >= upper ? "#7d838a" : "#1f2328", cursor: current >= upper ? "not-allowed" : "pointer" }}
            >
              +
            </button>
            <span style={{ fontSize: 11, color: "#5b6064" }}>上限 {upper}</span>
          </div>
        );
      },
    },
  };
}
`,gk=`import React from "react";
import type {
  SkuPlugin,
  SkuPluginContext,
} from "../../components/SkuPlugin/plugins/types";

/**
 * QuotaPlugin — 限购校验（B2/B4 子路径插件）。
 *
 * vane-card 只有 stock（库存），没有「每人限购 N 件」；这里补齐：
 *  - 读 variant.quota 与已购数，在 after 段渲染限购提示条；
 *  - 把 canPurchase 写入内核 state，宿主加购按钮读它决定是否禁用。
 *
 * canPurchase 在事件钩子（onMount / onSkuChange）里写入，不在渲染期 setState，
 * 避免渲染期修改状态导致的循环告警。
 *
 * meta 在同目录 index.ts 挂载。
 */
export interface QuotaConfig {
  /** 当前用户已购件数，默认 0 */
  purchasedCount?: number;
  /** 超出限购时回调 */
  onExceed?: () => void;
}

export function createQuotaPlugin(config: QuotaConfig = {}): SkuPlugin {
  const purchased = config.purchasedCount ?? 0;

  const resolve = (context: SkuPluginContext) => {
    const quota = context.variant?.quota;
    // 未声明 quota 视为不限购
    const canPurchase = typeof quota === "number" ? purchased < quota : true;
    return { quota, canPurchase };
  };

  return {
    name: "Quota",
    version: "0.1.0",
    description: "限购校验：渲染限购提示条并暴露 canPurchase 门控",
    priority: 40,
    config,
    hooks: {
      onMount: (context: SkuPluginContext) => {
        context.setState({ canPurchase: resolve(context).canPurchase });
      },
      onSkuChange: (context: SkuPluginContext) => {
        const { canPurchase } = resolve(context);
        context.setState({ canPurchase });
        if (!canPurchase) config.onExceed?.();
      },
      renderHeader: (context: SkuPluginContext) => {
        const { quota, canPurchase } = resolve(context);
        if (typeof quota !== "number") return null;
        return (
          <div
            data-testid="sku-quota"
            data-can-purchase={canPurchase ? "true" : "false"}
            style={{
              marginTop: 6,
              fontSize: 12,
              padding: "4px 8px",
              borderRadius: 4,
              background: canPurchase ? "#f6ffed" : "#fff1f0",
              color: canPurchase ? "#237a06" : "#b32d08",
              border: \`1px solid \${canPurchase ? "#b7eb8f" : "#ffa39e"}\`,
            }}
          >
            每人限购 {quota} 件（已购 {purchased}）
            {canPurchase ? "" : " · 已达限购上限"}
          </div>
        );
      },
    },
  };
}
`,mk=`import React from "react";
import type { SkuPlugin, SkuPluginContext } from "../../components/SkuPlugin/plugins/types";

/**
 * ResetBarPlugin — 清空重选。
 *
 * 选了一半想重来是高频操作；core 支持「再点同值取消」，但逐个取消很烦。
 * 这里给一个整体重置入口，走 context.clearSelection()。
 *
 * meta 在同目录 index.ts 挂载。
 */
export interface ResetBarConfig {
  /** 按钮文案，默认 "清空重选" */
  text?: string;
  /** 清空后回调 */
  onReset?: () => void;
}

export function createResetBarPlugin(config: ResetBarConfig = {}): SkuPlugin {
  return {
    name: "ResetBar",
    version: "0.1.0",
    description: "清空重选：一键重置全部规格选择",
    priority: 20,
    config: { slotPosition: "after", order: 40, ...config },
    hooks: {
      renderHeader: (context: SkuPluginContext) => {
        const hasSelection = Object.keys(context.selection ?? {}).length > 0;
        if (!hasSelection) return null;

        return (
          <div style={{ marginTop: 8 }}>
            <button
              type="button"
              data-testid="sku-reset"
              onClick={() => {
                context.clearSelection();
                config.onReset?.();
              }}
              style={{
                padding: "4px 10px",
                fontSize: 12,
                borderRadius: 4,
                border: "1px solid #d0d4da",
                background: "#fff",
                color: "#1f2328",
                cursor: "pointer",
              }}
            >
              {config.text ?? "清空重选"}
            </button>
          </div>
        );
      },
    },
  };
}
`,hk=`import React from "react";
import type { SkuPlugin, SkuPluginContext } from "../../components/SkuPlugin/plugins/types";

/**
 * SkuCodePlugin — 货号 / SKU 编码展示。
 *
 * 命中变体后把 SKU 编码显示出来，方便客服对单、用户报修、订单核对。
 * 属于典型的「一行字但每家都要」的长尾需求，做成插件而不是塞进 core。
 *
 * meta 在同目录 index.ts 挂载。
 */
export interface SkuCodeConfig {
  /** 前缀文案，默认 "货号" */
  label?: string;
}

export function createSkuCodePlugin(config: SkuCodeConfig = {}): SkuPlugin {
  return {
    name: "SkuCode",
    version: "0.1.0",
    description: "货号展示：命中变体后显示 SKU 编码",
    priority: 15,
    config: { slotPosition: "after", order: 50, ...config },
    hooks: {
      renderHeader: (context: SkuPluginContext) => {
        const v = context.variant;
        if (!v?.sku) return null;
        return (
          <div
            data-testid="sku-code"
            style={{ marginTop: 6, fontSize: 11, color: "#5b6064", fontFamily: "ui-monospace, monospace" }}
          >
            {config.label ?? "货号"}：{v.sku}
          </div>
        );
      },
    },
  };
}
`,yk=`import type {
  SkuPlugin,
  SkuPluginContext,
  SkuSelection,
} from "../../components/SkuPlugin/plugins/types";

/**
 * StatePersistencePlugin — 选择态本地持久化。
 *
 * 用户逛了一圈回来，还停在上次选的规格。写 localStorage（可换 sessionStorage），
 * 挂载时读回；选择清空时把键删掉，不留垃圾。
 *
 * meta 在同目录 index.ts 挂载。
 */
export interface StatePersistenceConfig {
  /** 存储键，默认 "vane-sku:selection" */
  key?: string;
  /** "local"（默认）或 "session" */
  scope?: "local" | "session";
}

function safeStorage(scope: "local" | "session"): Storage | null {
  if (typeof window === "undefined") return null;
  try {
    return scope === "session" ? window.sessionStorage : window.localStorage;
  } catch {
    // 隐私模式 / 禁用存储时静默降级
    return null;
  }
}

export function createStatePersistencePlugin(
  config: StatePersistenceConfig = {}
): SkuPlugin {
  const key = config.key ?? "vane-sku:selection";
  const scope = config.scope ?? "local";

  return {
    name: "StatePersistence",
    version: "0.1.0",
    description: "选择态持久化：记住上次选的规格（localStorage / sessionStorage）",
    priority: 26,
    config,
    hooks: {
      onMount: (context: SkuPluginContext) => {
        const store = safeStorage(scope);
        if (!store) return;
        try {
          const raw = store.getItem(key);
          if (!raw) return;
          const parsed = JSON.parse(raw) as SkuSelection;
          if (parsed && typeof parsed === "object" && Object.keys(parsed).length) {
            context.setState({ selection: parsed });
          }
        } catch {
          // 脏数据直接忽略，不影响主流程
        }
      },
      onSkuChange: (
        _context: SkuPluginContext,
        selection: SkuSelection
      ) => {
        const store = safeStorage(scope);
        if (!store) return;
        try {
          if (Object.keys(selection).length) store.setItem(key, JSON.stringify(selection));
          else store.removeItem(key);
        } catch {
          // 配额超限时静默失败
        }
      },
    },
  };
}
`,vk=`import React from "react";
import type { SkuPlugin, SkuPluginContext } from "../../components/SkuPlugin/plugins/types";

/**
 * StockStatusPlugin — 库存状态。
 *
 * 命中变体后告诉用户「还有没有货」：现货 / 仅剩 N 件 / 缺货。
 * 低库存阈值可配，用来制造紧迫感（电商常见手法）。
 *
 * meta 在同目录 index.ts 挂载。
 */
export interface StockStatusConfig {
  /** 低库存预警阈值：库存 ≤ 该值时显示「仅剩 N 件」，默认 5 */
  lowStockThreshold?: number;
  /** 缺货文案，默认 "暂时缺货" */
  soldOutText?: string;
  /** 是否展示具体库存数字，默认 true */
  showCount?: boolean;
}

export function createStockStatusPlugin(
  config: StockStatusConfig = {}
): SkuPlugin {
  const threshold = config.lowStockThreshold ?? 5;
  const soldOutText = config.soldOutText ?? "暂时缺货";
  const showCount = config.showCount ?? true;

  return {
    name: "StockStatus",
    version: "0.1.0",
    description: "库存状态：现货 / 仅剩 N 件 / 缺货",
    priority: 42,
    config: { slotPosition: "after", order: 10, ...config },
    hooks: {
      renderHeader: (context: SkuPluginContext) => {
        const v = context.variant;
        if (!v) return null;
        const stock = v.stock;
        if (typeof stock !== "number") return null;

        const soldOut = stock === 0;
        const low = !soldOut && stock <= threshold;
        const color = soldOut ? "#b32d08" : low ? "#a54a00" : "#237a06";
        const bg = soldOut ? "#fff1f0" : low ? "#fff7e6" : "#f6ffed";
        const border = soldOut ? "#ffa39e" : low ? "#ffd591" : "#b7eb8f";

        const text = soldOut
          ? soldOutText
          : low
            ? showCount
              ? \`仅剩 \${stock} 件\`
              : "库存紧张"
            : showCount
              ? \`现货 · 库存 \${stock}\`
              : "现货";

        return (
          <div
            data-testid="sku-stock"
            data-stock={String(stock)}
            data-sold-out={soldOut ? "true" : "false"}
            style={{
              marginTop: 6,
              fontSize: 12,
              padding: "4px 8px",
              borderRadius: 4,
              background: bg,
              color,
              border: \`1px solid \${border}\`,
            }}
          >
            {text}
          </div>
        );
      },
    },
  };
}
`,Sk=`import type {
  SkuPlugin,
  SkuPluginContext,
  SkuSelection,
} from "../../components/SkuPlugin/plugins/types";

/**
 * UrlSyncPlugin — 选择同步到 URL。
 *
 * 「把这个链接发给客服，他看到的就是我选的规格」——把选择写进查询串。
 * 挂载时反向解析回选择，刷新/分享都能还原。
 *
 * 查询键用前缀（默认 sku_）避免和页面其它参数打架：
 *   ?sku_颜色=red&sku_尺码=s
 *
 * meta 在同目录 index.ts 挂载。
 */
export interface UrlSyncConfig {
  /** 查询参数前缀，默认 "sku_" */
  paramPrefix?: string;
  /** true=replaceState（不污染前进后退），false=pushState */
  useReplace?: boolean;
}

export function createUrlSyncPlugin(config: UrlSyncConfig = {}): SkuPlugin {
  const prefix = config.paramPrefix ?? "sku_";
  const useReplace = config.useReplace ?? true;

  const readSelection = (): SkuSelection => {
    if (typeof window === "undefined") return {};
    const q = new URLSearchParams(window.location.search);
    const sel: SkuSelection = {};
    for (const [k, v] of q.entries()) {
      if (k.startsWith(prefix)) sel[k.slice(prefix.length)] = v;
    }
    return sel;
  };

  const writeSelection = (selection: SkuSelection) => {
    if (typeof window === "undefined") return;
    const q = new URLSearchParams(window.location.search);
    for (const k of Array.from(q.keys())) {
      if (k.startsWith(prefix)) q.delete(k);
    }
    for (const [k, v] of Object.entries(selection)) q.set(prefix + k, v);
    const search = q.toString();
    const url = \`\${window.location.pathname}\${search ? \`?\${search}\` : ""}\${window.location.hash}\`;
    if (useReplace) window.history.replaceState(null, "", url);
    else window.history.pushState(null, "", url);
  };

  return {
    name: "UrlSync",
    version: "0.1.0",
    description: "URL 同步：把规格选择写进查询串，并可从 URL 还原",
    priority: 28,
    config,
    hooks: {
      onMount: (context: SkuPluginContext) => {
        const sel = readSelection();
        if (Object.keys(sel).length) context.setState({ selection: sel });
      },
      onSkuChange: (
        _context: SkuPluginContext,
        selection: SkuSelection
      ) => {
        writeSelection(selection);
      },
    },
  };
}
`,Mk={price:"价格与库存",info:"信息与联动",interaction:"选择与交互"},cu=["price","info","interaction"],du=Object.assign({"/src/custom-plugins/AnalyticsPlugin/doc.json":Fd,"/src/custom-plugins/ImageLinkPlugin/doc.json":Vd,"/src/custom-plugins/KeyboardNavPlugin/doc.json":Hd,"/src/custom-plugins/PriceLinkPlugin/doc.json":Bd,"/src/custom-plugins/PriceRangePlugin/doc.json":Ud,"/src/custom-plugins/QuantityPlugin/doc.json":Qd,"/src/custom-plugins/QuotaPlugin/doc.json":Wd,"/src/custom-plugins/ResetBarPlugin/doc.json":Kd,"/src/custom-plugins/SkuCodePlugin/doc.json":qd,"/src/custom-plugins/StatePersistencePlugin/doc.json":Gd,"/src/custom-plugins/StockStatusPlugin/doc.json":Jd,"/src/custom-plugins/UrlSyncPlugin/doc.json":Yd}),fu=Object.assign({"/src/custom-plugins/AnalyticsPlugin/create.tsx":ak,"/src/custom-plugins/ImageLinkPlugin/create.tsx":uk,"/src/custom-plugins/KeyboardNavPlugin/create.tsx":ck,"/src/custom-plugins/PriceLinkPlugin/create.tsx":dk,"/src/custom-plugins/PriceRangePlugin/create.tsx":fk,"/src/custom-plugins/QuantityPlugin/create.tsx":pk,"/src/custom-plugins/QuotaPlugin/create.tsx":gk,"/src/custom-plugins/ResetBarPlugin/create.tsx":mk,"/src/custom-plugins/SkuCodePlugin/create.tsx":hk,"/src/custom-plugins/StatePersistencePlugin/create.tsx":yk,"/src/custom-plugins/StockStatusPlugin/create.tsx":vk,"/src/custom-plugins/UrlSyncPlugin/create.tsx":Sk}),Xd=e=>e.replace(/^.*\/custom-plugins\//,"").replace(/\/.*$/,"");function kk(e){const t=Object.keys(fu).find(o=>Xd(o)===e),n=t?fu[t]:"",r=/priority:\s*(\d+)/.exec(n);return r?Number(r[1]):0}function xk(e){const t=Object.keys(du).find(n=>Xd(n)===e);return t?du[t]:{name:e,description:"（缺少 doc.json）"}}const wk=[{dir:"PriceLinkPlugin",group:"price",make:()=>Cr({discountText:"限时8折"})},{dir:"PriceRangePlugin",group:"price",make:()=>Pr()},{dir:"StockStatusPlugin",group:"price",make:()=>Zo({lowStockThreshold:5})},{dir:"QuotaPlugin",group:"price",make:()=>Jo({purchasedCount:1})},{dir:"QuantityPlugin",group:"price",make:()=>Go()},{dir:"ImageLinkPlugin",group:"info",make:()=>Ko({onImageChange:e=>console.log("[sku] 主图 →",e)})},{dir:"SkuCodePlugin",group:"info",make:()=>Xo()},{dir:"AnalyticsPlugin",group:"info",make:()=>Ls({onEvent:e=>console.log("[sku] 埋点",e.name)})},{dir:"ResetBarPlugin",group:"interaction",make:()=>Yo()},{dir:"KeyboardNavPlugin",group:"interaction",make:()=>qo()},{dir:"StatePersistencePlugin",group:"interaction",make:()=>Os({key:"vane-sku:demo"})},{dir:"UrlSyncPlugin",group:"interaction",make:()=>Ms()}],$l=wk.map(e=>{const t=xk(e.dir);return{dir:e.dir,factory:`create${e.dir.replace(/Plugin$/,"")}Plugin`,group:e.group,priority:kk(e.dir),summary:t.description,doc:t,make:e.make}}).sort((e,t)=>cu.indexOf(e.group)-cu.indexOf(t.group)||t.priority-e.priority),Ik=$l.map(e=>e.dir),Pk=v.lazy(()=>Ns(()=>import("./HomePage-7o-Do6Ka.js"),__vite__mapDeps([0,1]),import.meta.url).then(e=>({default:e.HomePage}))),Ck=v.lazy(()=>Ns(()=>import("./PluginsPage-BtpSIB3F.js"),[],import.meta.url).then(e=>({default:e.PluginsPage}))),_k=v.lazy(()=>Ns(()=>import("./ScenariosPage-Dk4a22_e.js"),__vite__mapDeps([2,1]),import.meta.url).then(e=>({default:e.ScenariosPage}))),Ek={pkg:"vane-sku",brand:"S",subtitle:"规格选择 / plugin index",nav:[{to:"/",label:"总览",hint:"overview"},{to:"/plugins",label:"插件工坊",hint:`${$l.length} plugins`},{to:"/scenarios",label:"场景示例",hint:"4 plates"}],routes:[{path:"/",element:f.jsx(Pk,{})},{path:"/plugins",element:f.jsx(Ck,{})},{path:"/scenarios",element:f.jsx(_k,{})}],crumb:e=>e.startsWith("/plugins")?"workshop · 插件工坊":e.startsWith("/scenarios")?"plates · 场景示例":"index · 总览",demos:{label:"逐项示例",groups:XS.map(e=>({key:e,label:jl[e].label})),entries:bl,detail:(e,t)=>f.jsx(sk,{entry:e,order:t})},footer:[`${$l.length} PLUGINS · 4 PLATES`,`${bl.length} DEMOS · MATRIX CORE`]};function Rk(){return f.jsx(Im,{config:Ek})}function Tk(e){const t=[];if(!e)return{problems:["体检根节点不存在"],checked:0};const n=Array.from(e.querySelectorAll('[data-testid^="sku-opt-"]'));let r=0;const o=e.getBoundingClientRect();if(!(o.width!==0||o.height!==0||n.some(s=>{const a=s.getBoundingClientRect();return a.width!==0||a.height!==0})))return{problems:[],checked:0};for(const s of n){r+=1;const a=s.getBoundingClientRect();if(a.width===0||a.height===0){t.push(`零尺寸元素：${s.dataset.testid}（${a.width}×${a.height}）`);continue}const u=a.left-o.left,p=a.top-o.top;(u<-.5||p<-.5)&&t.push(`负坐标：${s.dataset.testid}（left=${u.toFixed(1)}, top=${p.toFixed(1)}）`),(a.right-o.right>1||a.bottom-o.bottom>1)&&t.push(`越界：${s.dataset.testid}（超出宿主右/下边界 ${(a.right-o.right).toFixed(1)}/${(a.bottom-o.bottom).toFixed(1)}px）`)}for(let s=0;s<n.length;s+=1)for(let a=s+1;a<n.length;a+=1){const u=n[s].getBoundingClientRect(),p=n[a].getBoundingClientRect();u.left<p.right-1&&p.left<u.right-1&&u.top<p.bottom-1&&p.top<u.bottom-1&&t.push(`元素重叠：${n[s].dataset.testid} 与 ${n[a].dataset.testid}`)}const l=n.reduce((s,a)=>Math.max(s,a.getBoundingClientRect().bottom-o.top),0);return n.length&&e.scrollHeight+1<l&&t.push(`容器未撑开：scrollHeight=${e.scrollHeight} 小于内容底边 ${l.toFixed(1)}`),{problems:Array.from(new Set(t)),checked:r}}const Gt={name:"颜色",options:[{id:"red",label:"红"},{id:"blue",label:"蓝"}]},Jt={name:"尺码",options:[{id:"s",label:"S"},{id:"m",label:"M"},{id:"l",label:"L"}]},Yt=[{sku:"red-s",attrValues:{颜色:"red",尺码:"s"},price:199,originalPrice:299,stock:5,quota:2,image:"https://example.com/red-s.jpg"},{sku:"red-m",attrValues:{颜色:"red",尺码:"m"},price:219,stock:3},{sku:"blue-s",attrValues:{颜色:"blue",尺码:"s"},price:209,stock:8},{sku:"blue-m",attrValues:{颜色:"blue",尺码:"m"},price:229,stock:6}],bk=F([]),jk=F([Cr({discountText:"限时8折"})]),$k=F([Jo({purchasedCount:2})]),Nl=()=>new Promise(e=>setTimeout(e,0));async function Xt(e){const t=document.createElement("div");t.style.cssText="position:fixed;left:0;top:0;width:520px;background:#fff",document.body.appendChild(t);const n=_d(t);return Je.flushSync(()=>n.render(e)),await Nl(),{host:t,root:n,q:r=>t.querySelector(r),click:async r=>{const o=t.querySelector(r);if(!o)throw new Error(`找不到元素 ${r}`);Je.flushSync(()=>o.click()),await Nl()}}}async function Nk(){var r,o,i,l,s,a,u,p,c,g,y,S,w;const e=[];let t=0;const n=(k,m)=>{t+=1,document.title=`SELFTEST RUNNING ${t}`,m||e.push(k)};{const k=await Xt(f.jsx(bk,{attributes:[Gt,Jt],variants:Yt})),m=k.q('[data-testid="sku-opt-尺码-l"]');n("禁用推导：无变体的尺码 L 初始即置灰",!!m&&m.disabled===!0),n("禁用推导：有变体的尺码 S 可选",((r=k.q('[data-testid="sku-opt-尺码-s"]'))==null?void 0:r.disabled)===!1),await k.click('[data-testid="sku-opt-颜色-blue"]'),n("禁用推导：选蓝后 L 仍置灰（blue-l 不存在）",((o=k.q('[data-testid="sku-opt-尺码-l"]'))==null?void 0:o.disabled)===!0),await k.click('[data-testid="sku-opt-尺码-s"]'),n("选择生效：蓝+S 命中变体 blue-s",((l=(i=k.q('[data-testid="sku-summary-variant"]'))==null?void 0:i.textContent)==null?void 0:l.includes("blue-s"))===!0),n("几何体检：无越界/负坐标/零尺寸/重叠",Tk(k.host).problems.length===0),Je.flushSync(()=>k.root.unmount()),k.host.remove()}{const k=await Xt(f.jsx(jk,{attributes:[Gt,Jt],variants:Yt,defaultSelection:{颜色:"red",尺码:"s"}}));n("价格联动：渲染价格区",!!k.q('[data-testid="sku-price"]')),n("价格联动：显示变体价 199",((a=(s=k.q('[data-testid="sku-price"]'))==null?void 0:s.textContent)==null?void 0:a.includes("199"))===!0),n("价格联动：原价删除线 299",((p=(u=k.q('[data-testid="sku-price-original"]'))==null?void 0:u.textContent)==null?void 0:p.includes("299"))===!0),Je.flushSync(()=>k.root.unmount()),k.host.remove()}{const k=await Xt(f.jsx($k,{attributes:[Gt,Jt],variants:Yt,defaultSelection:{颜色:"red",尺码:"s"}}));n("限购校验：渲染限购条",!!k.q('[data-testid="sku-quota"]')),n("限购校验：已购 2 / 限购 2 → canPurchase=false",((c=k.q('[data-testid="sku-quota"]'))==null?void 0:c.getAttribute("data-can-purchase"))==="false"),Je.flushSync(()=>k.root.unmount()),k.host.remove()}{let k="";const m=F([Ko({onImageChange:h=>k=h})]),d=await Xt(f.jsx(m,{attributes:[Gt,Jt],variants:Yt,defaultSelection:{颜色:"red",尺码:"s"}}));n("切主图：命中带图变体时回调 onImageChange",k==="https://example.com/red-s.jpg"),n("切主图：自身不渲染 UI（无价格区）",d.q('[data-testid="sku-price"]')===null),Je.flushSync(()=>d.root.unmount()),d.host.remove()}{const k=F([Pr(),Zo({lowStockThreshold:5}),Go(),Xo(),Yo()]),m=await Xt(f.jsx(k,{attributes:[Gt,Jt],variants:Yt})),d=m.q('[data-testid="sku-price-range"]');n("价格区间：未选全时展示区间",!!d),n("价格区间：含最低价 199 与最高价 229",!!d&&d.textContent.includes("199")&&d.textContent.includes("229")),await m.click('[data-testid="sku-opt-颜色-red"]'),await m.click('[data-testid="sku-opt-尺码-s"]');const h=m.q('[data-testid="sku-stock"]');n("库存状态：命中变体后渲染",!!h),n("库存状态：库存 5 命中低库存阈值",(h==null?void 0:h.getAttribute("data-stock"))==="5");const x=m.q('[data-testid="sku-quantity"]');n("数量步进：上限取 min(库存5, 限购2)=2",(x==null?void 0:x.getAttribute("data-max"))==="2"),n("货号：显示命中变体编码",((y=(g=m.q('[data-testid="sku-code"]'))==null?void 0:g.textContent)==null?void 0:y.includes("red-s"))===!0),n("清空重选：有选择时出现",!!m.q('[data-testid="sku-reset"]')),await m.click('[data-testid="sku-reset"]'),n("清空重选：点击后取消该属性选择",((S=m.q('[data-testid="sku-opt-颜色-red"]'))==null?void 0:S.dataset.selected)==="false"),Je.flushSync(()=>m.root.unmount()),m.host.remove()}{const k=F([qo()]),m=await Xt(f.jsx(k,{attributes:[Gt,Jt],variants:Yt}));m.q('[data-testid="sku-opt-颜色-red"]').dispatchEvent(new KeyboardEvent("keydown",{key:"ArrowRight",bubbles:!0})),await Nl(),n("键盘漫游：→ 键切到同属性下一个选项",((w=m.q('[data-testid="sku-opt-颜色-blue"]'))==null?void 0:w.dataset.selected)==="true"),Je.flushSync(()=>m.root.unmount()),m.host.remove()}return{total:t,passed:t-e.length,failed:e}}async function Lk(){document.title="SELFTEST RUNNING";try{const e=await Nk();document.title=e.failed.length===0?`SELFTEST OK ${e.passed}/${e.total}`:`SELFTEST FAIL ${e.passed}/${e.total} :: ${e.failed.join(" | ")}`}catch(e){document.title=`SELFTEST ERROR :: ${e.message}`}}$i.createRoot(document.getElementById("root")).render(f.jsx(Rk,{}));typeof location<"u"&&location.search.includes("selftest=1")&&Lk();export{oe as A,rk as C,bl as D,cu as G,Tl as L,$l as P,vr as R,ee as V,Pr as a,Cr as b,F as c,Zo as d,Jo as e,Go as f,Xo as g,Yo as h,qo as i,f as j,Ko as k,Ik as l,Mk as m,Tk as n,Ms as o,Os as p,v as r};
